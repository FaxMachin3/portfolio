import { gsap, Power2 } from "gsap";

const projectAnimate = args => {
    const [
        textSlidesProjectH2,
        textSlidesProjectPara,
        blockProject,
        imageSlidesProject,
        headingProject,
        lineProject,
        containerProject,
        leftArrowProject,
        rightArrowProject,
        linksProject,
        rightContainerProject
    ] = args;

    const xTrans =
        rightContainerProject.current.getBoundingClientRect().width - 50;

    const timelineProject = gsap.timeline({
        defaults: {
            duration: 1,
            autoAlpha: 0,
            ease: Power2.easeInOut,
            pointerEvents: "none"
        }
    });

    window.matchMedia("(min-width: 769px)").matches
        ? timelineProject
              .from(imageSlidesProject.current, { scale: 0 })
              .from(
                  textSlidesProjectH2.current,
                  { y: 100, stagger: { each: 0.1 } },
                  "-=1"
              )
              .from(
                  textSlidesProjectPara.current,
                  { y: 100, stagger: { each: 0.1 } },
                  "-=1.3"
              )
              .from(linksProject.current, { y: 100 }, "-=1.3")
              .from(blockProject.current, { x: -xTrans, scaleX: 0 }, "-=0.8")
              .from(
                  [leftArrowProject.current, rightArrowProject.current],
                  {},
                  "-=1.3"
              )
        : timelineProject
              .from(lineProject.current, { x: 100 })
              .from(headingProject.current, {}, "-=1")
              .from(imageSlidesProject.current, { scale: 0 }, "-=1")
              .from(
                  textSlidesProjectH2.current,
                  { y: 100, stagger: { each: 0.1 } },
                  "-=1"
              )
              .from(
                  textSlidesProjectPara.current,
                  { y: 100, stagger: { each: 0.1 } },
                  "-=1.3"
              )
              .from(linksProject.current, { y: 100 }, "-=1.3")
              .from(blockProject.current, { x: -xTrans, scaleX: 0 }, "-=0.8")
              .from(
                  [leftArrowProject.current, rightArrowProject.current],
                  {},
                  "-=1"
              );

    const observerProject = new IntersectionObserver(
        (entries, observerProject) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    timelineProject.play();
                    // observerProject.unobserve(entry.target)
                } else {
                    timelineProject.restart();
                    timelineProject.pause();
                }
            });
        }
    );

    observerProject.observe(containerProject.current);
};

export default projectAnimate;
