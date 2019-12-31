import React, { useEffect, useRef } from "react";

import ThemeContext from "../../common/ThemeContext";
import "./HomeStyle.scss";

import Arrow from "../../common/Arrow"
import homeAnimate from "./HomeAnimate";
import HomeSVGDark from "./HomeSVGDark";
import HomeSVGLight from "./HomeSVGLight";

const Home = () => {
    const containerHome = useRef(null);
    const arrow = useRef(null);
    const workButton = useRef(null);
    const textHome = useRef([]);
    const buttonHome = useRef(null);
    const rightContainerHome = useRef(null);

    const { currentTheme } = React.useContext(ThemeContext);
    const { background, primary, secondary } = currentTheme;

    const theme = {
        background: background,
        color: primary
    };

    const secondaryColor = {
        color: secondary
    };

    useEffect(() => {
        homeAnimate([
            arrow,
            buttonHome,
            rightContainerHome,
            textHome,
            containerHome
        ]);

        // adding click to navigate
        arrow.current.addEventListener("click", () => {
            window.document.querySelector("li .about").click();
        });

        // adding click to navigate
        workButton.current.addEventListener("click", () => {
            window.document.querySelector("li .project").click();
        });
    }, []);

    return (
        <section id="home" style={theme}>
            <div className="test" data-section="home">
                Home
            </div>
            <div ref={containerHome} className="container-home">
                <div ref={rightContainerHome} className="right-container-home">
                    {primary === "#DADADA" ? <HomeSVGDark /> : <HomeSVGLight />}
                </div>

                <div className="left-container-home">
                    <div className="text-home">
                        <p
                            ref={el => {
                                textHome.current.push(el);
                            }}
                        >
                            Hi!
                        </p>
                        <p
                            ref={el => {
                                textHome.current.push(el);
                            }}
                        >
                            My name is{" "}
                            <span style={secondaryColor} className="name-home">
                                Subham Raj
                            </span>
                            .
                        </p>
                        <p
                            ref={el => {
                                textHome.current.push(el);
                            }}
                        >
                            I am a{" "}
                            <span className="profession-home">
                                System Engineer
                            </span>
                            .
                        </p>
                    </div>

                    <div ref={buttonHome} className="button-home">
                        <button
                            className="resume-button"
                            style={{ backgroundColor: secondary }}
                        >
                            <span>Resume</span>
                        </button>
                        <button ref={workButton} className="work-button">
                            <span>My Work</span>
                        </button>
                    </div>
                </div>
                <div ref = {arrow} className="arrow-container-home">
                    <Arrow className = "arrow-home" />
                </div>
            </div>
        </section>
    );
};

export default Home;
