import React, { useRef, useEffect } from "react";
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

    const containerProject = useRef(null);
    const headingProject = useRef(null);
    const lineProject = useRef(null);
    const leftContainerProject = useRef(null);
    const rightContainerProject = useRef(null);
    const blockProject = useRef(null);
    const leftArrowProject = useRef(null);
    const rightArrowProject = useRef(null);
    const silderProject = useRef(null);
    const slidesProject = useRef([]);

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

    useEffect(() => {
        projectAnimate([]);
    });
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

                    <div className="image-slider-project">
                        <div className="image-container-project active-image-container-project">
                            <img
                                className="image-project"
                                src={DarkWeather}
                                alt="dark weather"
                            />
                        </div>

                        <div className="image-container-project">
                            <img
                                className="image-project"
                                src={DarkWeather}
                                alt="dark weather"
                            />
                        </div>

                        <div className="image-container-project">
                            <img
                                className="image-project"
                                src={DarkWeather}
                                alt="dark weather"
                            />
                        </div>

                        <div className="image-container-project">
                            <img
                                className="image-project"
                                src={DarkWeather}
                                alt="dark weather"
                            />
                        </div>

                        <div className="image-container-project">
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
                    <div ref={silderProject} className="text-slider-project">
                        <div
                            ref={el => slidesProject.current.push(el)}
                            className="text-slide-project active-text-slide-project"
                        >
                            <h1>Dark Weather:</h1>

                            <p>
                                A small dark themed weather app. Just enter your
                                city or country name to get the weather report.
                            </p>

                            <div className="links-project">
                                <div><ProjectSVGCode /></div>
                                <div><ProjectSVGWebsite /></div>
                            </div>
                        </div>

                        <div
                            ref={el => slidesProject.current.push(el)}
                            className="text-slide-project active-slide-project"
                        >
                            <h1>Dark Weather:</h1>

                            <p>
                                A small dark themed weather app. Just enter your
                                city or country name to get the weather report.
                            </p>

                            <div className="links-project">
                                <div><ProjectSVGCode /></div>
                                <div><ProjectSVGWebsite /></div>
                            </div>
                        </div>

                        <div
                            ref={el => slidesProject.current.push(el)}
                            className="text-slide-project active-slide-project"
                        >
                            <h1>Dark Weather:</h1>

                            <p>
                                A small dark themed weather app. Just enter your
                                city or country name to get the weather report.
                            </p>

                            <div className="links-project">
                                <div><ProjectSVGCode /></div>
                                <div><ProjectSVGWebsite /></div>
                            </div>
                        </div>

                        <div
                            ref={el => slidesProject.current.push(el)}
                            className="text-slide-project active-slide-project"
                        >
                            <h1>Dark Weather:</h1>

                            <p>
                                A small dark themed weather app. Just enter your
                                city or country name to get the weather report.
                            </p>

                            <div className="links-project">
                                <div><ProjectSVGCode /></div>
                                <div><ProjectSVGWebsite /></div>
                            </div>
                        </div>

                        <div
                            ref={el => slidesProject.current.push(el)}
                            className="text-slide-project active-slide-project"
                        >
                            <h1>Dark Weather:</h1>

                            <p>
                                A small dark themed weather app. Just enter your
                                city or country name to get the weather report.
                            </p>

                            <div className="links-project">
                                <div><ProjectSVGCode /></div>
                                <div><ProjectSVGWebsite /></div>
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
