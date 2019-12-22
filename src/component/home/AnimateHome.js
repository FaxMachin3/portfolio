import { gsap } from "gsap";

const animateHome = (args) => {
    const [arrow, buttonHome, rightContainerHome, textHome, containerHome] = args

    gsap.set(arrow.current, { rotate: -45 });

    const tl = gsap.timeline({defaults: {duration: 1, opacity: 0}});

    tl.from(textHome.current, {
            y: 100,
            stagger: {
                each: 1,
            },
            ease: "Power2.easeInOut"
            }
        )
        .from(
            rightContainerHome.current,
            {
                y: -100,
                ease: "Power2.easeInOut",
            },
        )
        .from(
            arrow.current,
            {
                y: -100,
                onComplete: () => {
                    gsap.to(arrow.current, {
                        duration: 0.5,
                        yPercent: 25,
                        yoyo: true,
                        repeat: -1,
                        ease: "Power2.easeInOut"
                    });
                }
            },
            "-=1"
        )
        .from(
            buttonHome.current,
            {
                y: 100,
                ease: "Power2.easeInOut"
            },
            "-=1"
        );

        const observerHome = new IntersectionObserver((entries,observerHome) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting){
                        tl.play()
                        // observerHome.unobserve(entry.target)
                    }
                    else{
                        tl.restart()
                        tl.pause()
                    }
                })
        })

        observerHome.observe(containerHome.current)
}

export default animateHome;