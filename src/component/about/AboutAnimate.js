import { gsap, Power2 } from "gsap";

const aboutAnimate = args => {
    const [
        containerAbout,
        headingAbout,
        lineAbout,
        imgAboutContainer,
        imgAbout,
        textAbout,
        blockAbout,
        rightContainerAbout
    ] = args;

    let lazyLoaded = false;

    const xTrans = rightContainerAbout.current.getBoundingClientRect().width;

    const timelineAbout = gsap.timeline({
        defaults: {
            duration: 1,
            opacity: 0,
            ease: Power2.easeInOut,
            pointerEvents: "none"
        }
    });

    window.matchMedia("(min-width: 769px)").matches
        ? timelineAbout
              .from(imgAboutContainer.current, { scale: 0 })
              .from(
                  textAbout.current,
                  { y: 100, stagger: { each: 0.1 } },
                  "-=1"
              )
              .from(blockAbout.current, { x: -xTrans, scaleX: 0 }, "-=0.7")
        : timelineAbout
              .from(lineAbout.current, { x: 100 })
              .from(headingAbout.current, {}, "-=1")
              .from(imgAboutContainer.current, { scale: 0 }, "-=1")
              .from(
                  textAbout.current,
                  { y: 100, stagger: { each: 0.1 } },
                  "-=1"
              )
              .from(blockAbout.current, { x: -xTrans, scaleX: 0 }, "-=0.7");

    const observerAbout = new IntersectionObserver((entries, observerAbout) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                timelineAbout.play();
                if (!lazyLoaded) {
                    imgAbout.current.src = imgAbout.current.dataset.src;
                    lazyLoaded = !lazyLoaded;
                }
                // observerAbout.unobserve(entry.target)
            } else {
                timelineAbout.restart();
                timelineAbout.pause();
            }
        });
    });

    observerAbout.observe(containerAbout.current);
};

export default aboutAnimate;
