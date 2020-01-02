import React, { useContext, useRef, useEffect } from "react";
import ThemeContext from "../../common/ThemeContext";

import "./SkillStyle.scss";

import skillAnimate from "./SkillAnimate";
import SkillSVGDark from "./SkillSVGDark";
import SkillSVGLight from "./SkillSVGLight";
import Arrow from "../../common/Arrow";

const Skill = () => {
    const slideCount = useRef(0);
    const lineSkill = useRef(null);
    const headingSkill = useRef(null);
    const leftArrowSkill = useRef(null);
    const rightArrowSkill = useRef(null);
    const silderSkill = useRef(null);
    const allowClick = useRef(true);

    const rightContainerSkill = useRef(null);
    const slidesSkill = useRef([]);

    const { currentTheme } = useContext(ThemeContext);
    const { background, primary, secondary } = currentTheme;

    const theme = {
        background: background,
        color: primary
    };

    const secondaryColor = {
        color: secondary
    };

    const lineColor = {
        backgroundColor: primary
    };

    const secondaryBG = {
        backgroundColor: secondary
    };

    const slider = args => {
        const [leftArrow, rightArrow] = args;

        leftArrow.current.addEventListener("click", event => {
            if (allowClick.current) {
                allowClick.current = !allowClick.current;

                slideCount.current--;

                if (slideCount.current <= -1) {
                    slideCount.current = 3;
                }

                silderSkill.current.style.transform = `translateX(-${315 *
                    slideCount.current}px)`;

                setTimeout(() => {
                    allowClick.current = !allowClick.current;
                }, 500);
            }
        });

        rightArrow.current.addEventListener("click", () => {
            if (allowClick.current) {
                allowClick.current = !allowClick.current;

                slideCount.current++;

                if (slideCount.current >= 4) {
                    slideCount.current = 0;
                }

                silderSkill.current.style.transform = `translateX(-${315 *
                    slideCount.current}px)`;

                setTimeout(() => {
                    allowClick.current = !allowClick.current;
                }, 500);
            }
        });
    };

    useEffect(() => {
        skillAnimate([]);

        const option = {
            root: rightContainerSkill.current,
            rootMargin: "200px",
            threshold: 1
        };

        const observerSkill = new IntersectionObserver(
            (entries, observerSkill) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active-slide-skill");
                    } else {
                        entry.target.classList.remove("active-slide-skill");
                    }
                });
            },
            option
        );

        slidesSkill.current.forEach(slide => {
            observerSkill.observe(slide);
        });

        slider([leftArrowSkill, rightArrowSkill]);
    }, []);

    return (
        <section id="skill" style={theme}>
            <div className="test" data-section="skill">
                Skill
            </div>

            <div className="container-skill">
                <div className="heading-skill">
                    <h1 ref={headingSkill} style={secondaryColor}>
                        Skill
                    </h1>

                    <span
                        ref={lineSkill}
                        style={lineColor}
                        className="line-skill"
                    ></span>
                </div>

                <div className="left-container-skill">
                    {primary === "#DADADA" ? (
                        <SkillSVGDark />
                    ) : (
                        <SkillSVGLight />
                    )}
                </div>

                <div
                    ref={rightContainerSkill}
                    className="right-container-skill"
                >
                    <div
                        ref={leftArrowSkill}
                        className="left-arrow-container-skill"
                    >
                        <Arrow className="left-arrow-skill" />
                    </div>
                    <div
                        ref={rightArrowSkill}
                        className="right-arrow-container-skill"
                    >
                        <Arrow className="right-arrow-skill" />
                    </div>

                    <div ref={silderSkill} className="slider-skill">
                        <div
                            ref={el => slidesSkill.current.push(el)}
                            className="slide-skill active-slide-skill"
                        >
                            <h2>Programming Languages:</h2>
                            <p>
                                <span>C#</span>
                                <span>Python</span>
                                <span>Javascript</span>
                            </p>
                        </div>

                        <div
                            ref={el => slidesSkill.current.push(el)}
                            className="slide-skill"
                        >
                            <h2>Backend:</h2>
                            <p>
                                <span>Microsoft DotNet</span>
                                <span>MySQL</span>
                                <span>MongoDB</span>
                                <span>Node.js</span>
                                <span>Express.js</span>
                            </p>
                        </div>

                        <div
                            ref={el => slidesSkill.current.push(el)}
                            className="slide-skill"
                        >
                            <h2>Frontend:</h2>
                            <p>
                                <span>HTML5 + CSS3</span>
                                <span>SASS</span>
                                <span>React + Redux</span>
                                <span>GSAP</span>
                                <span>ScrollMagic</span>
                            </p>
                        </div>

                        <div
                            ref={el => slidesSkill.current.push(el)}
                            className="slide-skill"
                        >
                            <h2>Dev Tools & Other Skills:</h2>
                            <p>
                                <span>Git/Github (Version Control)</span>
                                <span>Figma/Adobe XD (Design)</span>
                            </p>
                        </div>
                    </div>
                    <div style={secondaryBG} className="block-skill"></div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
