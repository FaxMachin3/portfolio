import { gsap } from "gsap";

const animateAbout = args => {
    const [
        containerAbout,
        headingAbout,
        lineAbout,
        imgAbout,
        textAbout,
        blockAbout
    ] = args;

    const timelineAbout = gsap.timeline({
        defaults: { duration: 1, opacity: 0, ease: "Power2.easeInOut" }
    });

    window.matchMedia("(min-width: 769px)").matches
        ? timelineAbout
              .from(imgAbout.current, { delay: 0.5, scale: 0 })
              .from(
                  textAbout.current,
                  { y: 100, stagger: { each: 0.2 } },
                  "-=1"
              )
              .from(blockAbout.current, { x: 300 }, "-=1")
        : timelineAbout
              .from(lineAbout.current, { x: 100, delay: 0.5 })
              .from(headingAbout.current, {}, "-=1")
              .from(imgAbout.current, { scale: 0 }, "-=1")
              .from(
                  textAbout.current,
                  { y: 100, stagger: { each: 0.2 } },
                  "-=1"
              )
              .from(blockAbout.current, { x: 300 }, "-=1.3");

    const observerAbout = new IntersectionObserver((entries, observerAbout) => {
        entries.forEach(enrty => {
            if (enrty.isIntersecting) {
                timelineAbout.play();
                // observerHome.unobserve(entry.target)
            } else {
                timelineAbout.restart();
                timelineAbout.pause();
            }
        });
    });

    observerAbout.observe(containerAbout.current);
};

export default animateAbout;
