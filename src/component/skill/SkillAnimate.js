import { gsap, Power2 } from "gsap";

const skillAnimate = args => {
    const [
        slidesSkillH1,
        slidesSkillPara,
        blockSkill,
        imgSkill,
        headingSkill,
        lineSkill,
        containerSkill,
        leftArrowSkill,
        rightArrowSkill
    ] = args;

    const timelineSkill = gsap.timeline({
        defaults: {
            duration: 1,
            autoAlpha: 0,
            ease: Power2.easeInOut,
            pointerEvents: "none"
        }
    });

    window.matchMedia("(min-width: 769px)").matches
        ? timelineSkill
              .from(imgSkill.current, { scale: 0 })
              .from(
                  slidesSkillH1.current,
                  { y: 100, stagger: { each: 0.1 } },
                  "-=1"
              )
              .from(
                  slidesSkillPara.current,
                  { y: 100, stagger: { each: 0.1 } },
                  "-=1.3"
              )
              .from(blockSkill.current, { x: -315 }, "-=1")
        : timelineSkill
              .from(lineSkill.current, { x: 100 })
              .from(headingSkill.current, {}, "-=1")
              .from(imgSkill.current, { scale: 0 }, "-=1")
              .from(
                  slidesSkillH1.current[0],
                  { y: 100, stagger: { each: 0.1 } },
                  "-=1"
              )
              .from(
                  Array.from(slidesSkillPara.current[0].childNodes),
                  { y: 100, stagger: { each: 0.1 } },
                  "-=1"
              )
              .from(blockSkill.current, { x: 315, scaleX: 0 }, "-=1")
              .from(
                  [leftArrowSkill.current, rightArrowSkill.current],
                  {},
                  "-=1"
              );

    const observerSkill = new IntersectionObserver((entries, observerSkill) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                timelineSkill.play();
                // observerSkill.unobserve(entry.target)
            } else {
                timelineSkill.restart();
                timelineSkill.pause();
            }
        });
    });

    observerSkill.observe(containerSkill.current);
};

export default skillAnimate;
