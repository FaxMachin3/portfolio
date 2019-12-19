import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"

import ThemeContext from "../../common/ThemeContext"
import "./HomeStyle.scss"

import HomeSVG from "./HomeSVG"

const Home = () => {
    const { currentTheme } = React.useContext(ThemeContext)
    const arrow = useRef(null)
    const { background, primary, secondary } = currentTheme

    const theme = {
        background: background,
        color: primary
    }

    const primaryColor = {
        backgroundColor: primary
    }

    const secondaryColor = {
        color: secondary
    }

    useEffect(() => {
        gsap.to(arrow.current, {
            duration: 0.5,
            y: 5,
            yoyo: true,
            repeat: -1,
            ease: "slow(0.7, 0.7, true)"
        })

        // setting actual height onLoad
        window.matchMedia("(max-width: 768px)").matches
                && window.document.documentElement.style.setProperty(
                      "--actual-height",
                      `${window.innerHeight}px`
                  )
        
        // setting actual height onResize
        window.addEventListener("resize", () => {
            window.matchMedia("(max-width: 768px)").matches
                ? window.document.documentElement.style.setProperty(
                      "--actual-height",
                      `${window.innerHeight}px`
                  )
                : window.document.documentElement.style.setProperty(
                      "--actual-height",
                      `100vh`
                  )
            })
    }, [])

    return (
        <section id="home" style={theme}>
            <div className="container-home">
                <div className="test" data-section="home">
                    Home
                </div>

                <div className="right-container-home">
                    <HomeSVG />
                </div>

                <div className="left-container-home">
                    <div className="text-home">
                        <p>Hi!</p>
                        <p>
                            My name is{" "}
                            <span style={secondaryColor} className="name-home">
                                Subham Raj
                            </span>
                            .
                        </p>
                        <p>
                            I am a{" "}
                            <span className="profession-home">
                                Web Developers
                            </span>
                        </p>
                    </div>
                    <div className="button-home">
                        <button
                            className="resume-button"
                            style={{ backgroundColor: secondary }}
                        >
                            <span>Resume</span>
                        </button>
                        <button className="work-button">
                            <span>My Work</span>
                        </button>
                    </div>
                </div>

                <div ref={arrow} className="arrow">
                    <div style={primaryColor} className="arrow-left"></div>
                    <div style={primaryColor} className="arrow-right"></div>
                </div>
            </div>
        </section>
    );
};

export default Home;
