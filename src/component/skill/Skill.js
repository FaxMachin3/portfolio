import React, { useContext, useRef, useEffect } from "react";
import { gsap, Power2 } from "gsap";
import ThemeContext from "../../common/ThemeContext";

import "./SkillStyle.scss";

import skillAnimate from "./SkillAnimate";
import SkillSVG from "./SkillSVG";
import Arrow from "../../common/Arrow";

const Skill = () => {
    const slideCountSkill = useRef(0);
    const allowClick = useRef(true);

    const lineSkill = useRef(null);
    const headingSkill = useRef(null);
    const leftArrowSkill = useRef(null);
    const rightArrowSkill = useRef(null);
    const sliderSkill = useRef(null);
    const slidesSkill = useRef([]);
    const slidesSkillH2 = useRef([]);
    const slidesSkillPara = useRef([]);
    const rightContainerSkill = useRef(null);
    const blockSkill = useRef(null);
    const imgSkill = useRef(null);
    const containerSkill = useRef(null);

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

    const animateTextSkill = (heading, para) => {
        const timelineText = gsap.timeline({
            defaults: { opacity: 0, duration: 0.75, ease: Power2.easeInOut }
        });

        gsap.to(blockSkill.current, {
            duration: 0.15,
            x: -5,
            ease: Power2.easeOut
        });
        gsap.to(blockSkill.current, {
            duration: 0.15,
            x: 0,
            delay: 0.15,
            ease: Power2.easeOut
        });

        timelineText.from(heading, { delay: 0.3 }).from(
            para,
            {
                y: 100,
                stagger: {
                    each: 0.05
                }
            },
            "-=0.65"
        );
    };

    const selectTextSkill = (count, arrow) => {
        if (count === 4) {
            animateTextSkill(
                slidesSkillH2.current[0],
                Array.from(slidesSkillPara.current[0].childNodes)
            );
        } else if (count === -1) {
            animateTextSkill(
                slidesSkillH2.current[3],
                Array.from(slidesSkillPara.current[3].childNodes)
            );
        } else {
            animateTextSkill(
                slidesSkillH2.current[count],
                Array.from(slidesSkillPara.current[count].childNodes)
            );
        }
    };

    const changeSlideSkill = args => {
        const [leftArrow, rightArrow] = args;

        leftArrow.current.addEventListener("click", event => {
            if (allowClick.current && slideCountSkill.current > 0) {
                allowClick.current = !allowClick.current;

                slideCountSkill.current--;

                selectTextSkill(slideCountSkill.current, "left");

                if (slideCountSkill.current <= -1) {
                    slideCountSkill.current = 3;
                }

                sliderSkill.current.style.transform = `translateX(-${315 *
                    slideCountSkill.current}px)`;

                setTimeout(() => {
                    allowClick.current = !allowClick.current;
                }, 1100);
            }
        });

        rightArrow.current.addEventListener("click", () => {
            if (allowClick.current && slideCountSkill.current < 3) {
                allowClick.current = !allowClick.current;

                slideCountSkill.current++;

                selectTextSkill(slideCountSkill.current);

                if (slideCountSkill.current >= 4) {
                    slideCountSkill.current = 0;
                }

                sliderSkill.current.style.transform = `translateX(-${315 *
                    slideCountSkill.current}px)`;

                setTimeout(() => {
                    allowClick.current = !allowClick.current;
                }, 1100);
            }
        });
    };

    useEffect(() => {
        changeSlideSkill([leftArrowSkill, rightArrowSkill]);

        skillAnimate([
            slidesSkillH2,
            slidesSkillPara,
            blockSkill,
            imgSkill,
            headingSkill,
            lineSkill,
            containerSkill,
            leftArrowSkill,
            rightArrowSkill,
            rightContainerSkill
        ]);
        // eslint-disable-next-line
    }, []);

    return (
        <section id="skill" style={theme}>
            <div
                ref={containerSkill}
                className="container-skill containers"
                data-section="skill"
            >
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

                <div ref={imgSkill} className="left-container-skill">
                    <SkillSVG />
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

                    <div ref={sliderSkill} className="slider-skill">
                        <div
                            ref={el => slidesSkill.current.push(el)}
                            className="slide-skill active-slide-skill"
                        >
                            <h2 ref={el => slidesSkillH2.current.push(el)}>
                                Programming Languages:
                            </h2>
                            <p ref={el => slidesSkillPara.current.push(el)}>
                                <span>C#</span>
                                <span>Python</span>
                                <span>Javascript</span>
                            </p>
                        </div>

                        <div
                            ref={el => slidesSkill.current.push(el)}
                            className="slide-skill"
                        >
                            <h2 ref={el => slidesSkillH2.current.push(el)}>
                                Backend:
                            </h2>
                            <p ref={el => slidesSkillPara.current.push(el)}>
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
                            <h2 ref={el => slidesSkillH2.current.push(el)}>
                                Frontend:
                            </h2>
                            <p ref={el => slidesSkillPara.current.push(el)}>
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
                            <h2 ref={el => slidesSkillH2.current.push(el)}>
                                Dev Tools & Other Skills:
                            </h2>
                            <p ref={el => slidesSkillPara.current.push(el)}>
                                <span>Git/Github (Version Control)</span>
                                <span>Figma/Adobe XD (Design)</span>
                            </p>
                        </div>
                    </div>
                    <div
                        ref={blockSkill}
                        style={secondaryBG}
                        className="block-skill"
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
