export const smoothScroll = (currentPage) => {
    const page = window.document.querySelector(currentPage);
    const target = page.getAttribute('href');
    let targetPostion = window.document.querySelector(target).offsetTop;
    let startPosition = window.pageYOffset;
    let distance = targetPostion - startPosition;
    let duration = 1000;
    let start = null;

    // easing animation
    const easeInOutCirc = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
        t -= 2;
        return (c / 2) * (Math.sqrt(1 - t * t) + 1) + b;
    };

    const scroll = timestamp => {
        if (!start) {
            start = timestamp;
        }
        const progress = timestamp - start;
        window.scrollTo(
            0,
            easeInOutCirc(progress, startPosition, distance, duration)
        );
        if (progress < duration) {
            window.requestAnimationFrame(scroll);
        }
        else{
            targetPostion = window.document.querySelector(target).offsetTop;
            startPosition = window.pageYOffset;
            distance = Math.ceil(targetPostion - startPosition);
            start = null;
            duration = 1000

            const linearTween = (t, b, c, d) => {
                return c*t/d + b;
            };


            if(distance !== 0 && window.matchMedia("(max-width: 768px)").matches){
                const scrollAgain = timestamp => {
                    if (!start) {
                        start = timestamp;
                    }
                    const progress = timestamp - start;
                    window.scrollTo(
                        0,
                        linearTween(progress, startPosition, distance, duration)
                    );
                    if (progress < duration) {
                        window.requestAnimationFrame(scrollAgain);
                    }
                }
                window.requestAnimationFrame(scrollAgain)
            }
        }
    };

    // api
    window.requestAnimationFrame(scroll);
};
