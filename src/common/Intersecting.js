// Intersection observer for slides
const intersecting = (intersectingArea, slides, activeClass, margin) => {
    if (window.matchMedia("(max-width: 768px)").matches) {
        const option = {
            root: intersectingArea,
            rootMargin: margin,
            threshold: 1
        };

        const observerSkill = new IntersectionObserver(
            (entries, observerSkill) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(activeClass);
                    } else {
                        entry.target.classList.remove(activeClass);
                    }
                });
            },
            option
        );

        slides.current.forEach(slide => {
            observerSkill.observe(slide);
        });
    }
};

export default intersecting;
