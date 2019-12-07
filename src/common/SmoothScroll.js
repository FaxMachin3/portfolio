export const smoothScroll = (event, { changePage })   => {
    const target = event.target.getAttribute("href");
    const targetPostion = window.document.querySelector(target).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPostion - startPosition;
    const duration = 1000;
    let start = null;

    // change current page
    changePage("."+(target.split('#')[1]))

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
    };

    window.requestAnimationFrame(scroll);
};
