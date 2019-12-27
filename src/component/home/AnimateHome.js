import { gsap } from "gsap";

const animateHome = args => {
    const [
        arrow,
        buttonHome,
        rightContainerHome,
        textHome,
        containerHome
    ] = args;

    gsap.set(arrow.current, { rotate: -45 });

    const timelineHome = gsap.timeline({
        defaults: { duration: 1, opacity: 0, ease: "Power2.easeInOut" }
    });

    timelineHome
        .from(textHome.current, {delay:0.5, y: 100, stagger: { each: 1 } })
        .from(rightContainerHome.current, { y: -100 })
        .from(arrow.current, { y: -100 }, "-=1")
        .from(buttonHome.current, { y: 100 }, "-=1");

    const observerHome = new IntersectionObserver((entries, observerHome) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                timelineHome.play();
                // observerHome.unobserve(entry.target)
            } else {
                timelineHome.restart();
                timelineHome.pause();
            }
        });
    });

    gsap.to(arrow.current, {
        delay: timelineHome.duration(),
        duration: 0.5,
        yPercent: 25,
        yoyo: true,
        repeat: -1,
        ease: "slow(0.5, 0.4, false)"
    });

    observerHome.observe(containerHome.current);
};

export default animateHome;
