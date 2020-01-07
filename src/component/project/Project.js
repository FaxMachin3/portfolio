import React, { useRef, useEffect } from "react";
import { gsap, Power2 } from "gsap";
import ThemeContext from "../../common/ThemeContext";

import "./ProjectStyle.scss";

import ProjectSVGCode from "./ProjectSVGCode";
import ProjectSVGWebsite from "./ProjectSVGWebsite";
import DarkWeather from "../../assests/images/ProjectDarkWeather.png";
import projectAnimate from "./ProjectAnimate";
import Arrow from "../../common/Arrow";

const Project = () => {
    const { currentTheme } = React.useContext(ThemeContext);
    const { background, primary, secondary } = currentTheme;

    const slideCountProject = useRef(0);
    const allowClick = useRef(true);

    const containerProject = useRef(null);
    const headingProject = useRef(null);
    const lineProject = useRef(null);
    const leftContainerProject = useRef(null);
    const rightContainerProject = useRef(null);
    const blockProject = useRef(null);
    const leftArrowProject = useRef(null);
    const rightArrowProject = useRef(null);
    const textSliderProject = useRef(null);
    const imageSliderProject = useRef(null);
    const linksProject = useRef([]);
    const textSlidesProject = useRef([]);
    const textSlidesProjectH2 = useRef([]);
    const textSlidesProjectPara = useRef([]);
    const imageSlidesProject = useRef([]);

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

    const animateTextProject = (heading, para, links) => {
        const timelineText = gsap.timeline({
            defaults: { opacity: 0, duration: 0.5, ease: Power2.easeInOut }
        });

        gsap.from(blockProject.current, {x:15, duration: .5, ease: Power2.easeInOut})

        timelineText
            .from(heading, { delay: 0.4 })
            .from(
                para,
                {
                    y: 100,
                    stagger: {
                        each: 0.05
                    }
                },
                "-=0.5"
            )
            .from(
                links,
                {
                    y: 100,
                    // ease: "back",
                    stagger: {
                        each: 0.1
                    }
                },
                "-=0.4"
            );
    };

    const selectTextProject = count => {
        if (count === 5) {
            animateTextProject(
                textSlidesProjectH2.current[0],
                textSlidesProjectPara.current[0],
                Array.from(linksProject.current[0].childNodes)
            );
        } else if (count === -1) {
            animateTextProject(
                textSlidesProjectH2.current[4],
                textSlidesProjectPara.current[4],
                Array.from(linksProject.current[4].childNodes)
            );
        } else {
            animateTextProject(
                textSlidesProjectH2.current[count],
                textSlidesProjectPara.current[count],
                Array.from(linksProject.current[count].childNodes)
            );
        }
    };

    const changeSlideProject = args => {
        const [leftArrow, rightArrow] = args;

        leftArrow.current.addEventListener("click", () => {
            if (allowClick.current) {
                allowClick.current = !allowClick.current;

                slideCountProject.current--;

                selectTextProject(slideCountProject.current);

                if (slideCountProject.current <= -1) {
                    slideCountProject.current = 4;
                }

                imageSliderProject.current.style.transform = `translateX(-${315 *
                    slideCountProject.current}px)`;
                textSliderProject.current.style.transform = `translateX(-${315 *
                    slideCountProject.current}px)`;

                setTimeout(() => {
                    allowClick.current = !allowClick.current;
                }, 500);
            }
        });

        rightArrow.current.addEventListener("click", () => {
            if (allowClick.current) {
                allowClick.current = !allowClick.current;

                slideCountProject.current++;

                selectTextProject(slideCountProject.current);

                if (slideCountProject.current >= 5) {
                    slideCountProject.current = 0;
                }

                imageSliderProject.current.style.transform = `translateX(-${315 *
                    slideCountProject.current}px)`;
                textSliderProject.current.style.transform = `translateX(-${315 *
                    slideCountProject.current}px)`;

                setTimeout(() => {
                    allowClick.current = !allowClick.current;
                }, 500);
            }
        });
    };

    useEffect(() => {
        changeSlideProject([leftArrowProject, rightArrowProject]);

        console.log(imageSlidesProject.current[0])
        projectAnimate([
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
        ]);
        // eslint-disable-next-line
    }, []);

    return (
        <section id="project" style={theme}>
            <div className="test" data-section="project">
                Project
            </div>

            <div ref={containerProject} className="container-project">
                <div className="heading-project">
                    <h1 ref={headingProject} style={secondaryColor}>
                        Project
                    </h1>

                    <span
                        ref={lineProject}
                        style={lineColor}
                        className="line-project"
                    ></span>
                </div>

                <div
                    ref={leftContainerProject}
                    className="left-container-project"
                >
                    <div
                        ref={leftArrowProject}
                        className="left-arrow-container-project"
                    >
                        <Arrow className="left-arrow-project" />
                    </div>

                    <div
                        ref={rightArrowProject}
                        className="right-arrow-container-project"
                    >
                        <Arrow className="right-arrow-project" />
                    </div>

                    <div
                        ref={imageSliderProject}
                        className="image-slider-project"
                    >
                        <div
                            ref={el => imageSlidesProject.current.push(el)}
                            className="image-container-project active-image-container-project"
                        >
                            <img
                                className="image-project"
                                src={DarkWeather}
                                alt="dark weather"
                            />
                        </div>

                        <div
                            ref={el => imageSlidesProject.current.push(el)}
                            className="image-container-project"
                        >
                            <img
                                className="image-project"
                                src={DarkWeather}
                                alt="dark weather"
                            />
                        </div>

                        <div
                            ref={el => imageSlidesProject.current.push(el)}
                            className="image-container-project"
                        >
                            <img
                                className="image-project"
                                src={DarkWeather}
                                alt="dark weather"
                            />
                        </div>

                        <div
                            ref={el => imageSlidesProject.current.push(el)}
                            className="image-container-project"
                        >
                            <img
                                className="image-project"
                                src={DarkWeather}
                                alt="dark weather"
                            />
                        </div>

                        <div
                            ref={el => imageSlidesProject.current.push(el)}
                            className="image-container-project"
                        >
                            <img
                                className="image-project"
                                src={DarkWeather}
                                alt="dark weather"
                            />
                        </div>
                    </div>
                </div>

                <div
                    ref={rightContainerProject}
                    className="right-container-project"
                >
                    <div
                        ref={textSliderProject}
                        className="text-slider-project"
                    >
                        <div
                            ref={el => textSlidesProject.current.push(el)}
                            className="text-slide-project active-text-slide-project"
                        >
                            <h2
                                ref={el => textSlidesProjectH2.current.push(el)}
                            >
                                Dark Weather:
                            </h2>

                            <p
                                ref={el =>
                                    textSlidesProjectPara.current.push(el)
                                }
                            >
                                A small dark themed weather app. Just enter your
                                city or country name to get the weather report.
                            </p>

                            <div
                                ref={el => linksProject.current.push(el)}
                                className="links-project"
                            >
                                <div>
                                    <ProjectSVGCode />
                                </div>
                                <div>
                                    <ProjectSVGWebsite />
                                </div>
                            </div>
                        </div>

                        <div
                            ref={el => textSlidesProject.current.push(el)}
                            className="text-slide-project active-slide-project"
                        >
                            <h2
                                ref={el => textSlidesProjectH2.current.push(el)}
                            >
                                Dark Weather:
                            </h2>

                            <p
                                ref={el =>
                                    textSlidesProjectPara.current.push(el)
                                }
                            >
                                A small dark themed weather app. Just enter your
                                city or country name to get the weather report.
                            </p>

                            <div
                                ref={el => linksProject.current.push(el)}
                                className="links-project"
                            >
                                <div>
                                    <ProjectSVGCode />
                                </div>
                                <div>
                                    <ProjectSVGWebsite />
                                </div>
                            </div>
                        </div>

                        <div
                            ref={el => textSlidesProject.current.push(el)}
                            className="text-slide-project active-slide-project"
                        >
                            <h2
                                ref={el => textSlidesProjectH2.current.push(el)}
                            >
                                Dark Weather:
                            </h2>

                            <p
                                ref={el =>
                                    textSlidesProjectPara.current.push(el)
                                }
                            >
                                A small dark themed weather app. Just enter your
                                city or country name to get the weather report.
                            </p>

                            <div
                                ref={el => linksProject.current.push(el)}
                                className="links-project"
                            >
                                <div>
                                    <ProjectSVGCode />
                                </div>
                                <div>
                                    <ProjectSVGWebsite />
                                </div>
                            </div>
                        </div>

                        <div
                            ref={el => textSlidesProject.current.push(el)}
                            className="text-slide-project active-slide-project"
                        >
                            <h2
                                ref={el => textSlidesProjectH2.current.push(el)}
                            >
                                Dark Weather:
                            </h2>

                            <p
                                ref={el =>
                                    textSlidesProjectPara.current.push(el)
                                }
                            >
                                A small dark themed weather app. Just enter your
                                city or country name to get the weather report.
                            </p>

                            <div
                                ref={el => linksProject.current.push(el)}
                                className="links-project"
                            >
                                <div>
                                    <ProjectSVGCode />
                                </div>
                                <div>
                                    <ProjectSVGWebsite />
                                </div>
                            </div>
                        </div>

                        <div
                            ref={el => textSlidesProject.current.push(el)}
                            className="text-slide-project active-slide-project"
                        >
                            <h2
                                ref={el => textSlidesProjectH2.current.push(el)}
                            >
                                Dark Weather:
                            </h2>

                            <p
                                ref={el =>
                                    textSlidesProjectPara.current.push(el)
                                }
                            >
                                A small dark themed weather app. Just enter your
                                city or country name to get the weather report.
                            </p>

                            <div
                                ref={el => linksProject.current.push(el)}
                                className="links-project"
                            >
                                <div>
                                    <ProjectSVGCode />
                                </div>
                                <div>
                                    <ProjectSVGWebsite />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        ref={blockProject}
                        style={secondaryBG}
                        className="block-project"
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default Project;
