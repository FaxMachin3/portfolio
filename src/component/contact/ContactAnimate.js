import { gsap, Power2 } from "gsap";

const contactAnimate = args => {
    const [
        containerContact,
        headingContact,
        lineContact,
        bottomContainerContact,
        leftContainerContact,
        linksContact,
        textContact
    ] = args;

    const timelineContact = gsap.timeline({
        defaults: {
            duration: 1,
            autoAlpha: 0,
            ease: Power2.easeInOut,
            pointerEvents: "none"
        }
    });

    window.matchMedia("(min-width: 769px)").matches
        ? timelineContact
              .from(leftContainerContact.current, { scale: 0 })
              .from(
                  textContact.current,
                  { y: 100, stagger: { each: 0.1 } },
                  "-=1"
              )
              .from(
                  linksContact.current,
                  {
                      y: 100,
                      stagger: {
                          each: 0.1
                      }
                  },
                  "-=1.3"
              )
              .from(bottomContainerContact.current, { y: 100 }, "-=1")
        : timelineContact
              .from(lineContact.current, { x: 100 })
              .from(headingContact.current, {}, "-=1")
              .from(leftContainerContact.current, { scale: 0 }, "-=1")
              .from(
                  textContact.current,
                  { y: 100, stagger: { each: 0.1 } },
                  "-=1"
              )
              .from(
                  linksContact.current,
                  {
                      y: 100,
                      stagger: {
                          each: 0.1
                      }
                  },
                  "-=1.3"
              )
              .from(bottomContainerContact.current, { y: 100 }, "-=1");

    const observerContact = new IntersectionObserver(
        (entries, observerContact) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    timelineContact.play();
                    // observerContact.unobserve(entry.target)
                } else {
                    timelineContact.restart();
                    timelineContact.pause();
                }
            });
        }
    );

    observerContact.observe(containerContact.current);
};

export default contactAnimate;
