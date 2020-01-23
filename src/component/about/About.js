import React, { useContext, useEffect, useRef } from "react";
import ThemeContext from "../../common/ThemeContext";
import "./AboutStyle.scss";

import aboutAnimate from "./AboutAnimate";
import avatar from "../../assests/images/avatar.jpg";

const About = () => {
    const containerAbout = useRef(null);
    const headingAbout = useRef(null);
    const lineAbout = useRef(null);
    const imgAboutContainer = useRef(null);
    const imgAbout = useRef(null);
    const blockAbout = useRef(null);
    const rightContainerAbout = useRef(null);
    const textAbout = useRef([]);
    const circleAbout = useRef([]);

    const { currentTheme } = useContext(ThemeContext);
    const { background, primary, secondary } = currentTheme;

    const theme = {
        background: background,
        color: primary
    };

    const secondaryColor = {
        color: secondary
    };

    const secondaryBG = {
        backgroundColor: secondary
    };

    const borderColor = {
        borderColor: secondary
    };

    const lineColor = {
        backgroundColor: primary
    };

    useEffect(() => {
        const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
        const circles = window.document.querySelectorAll(".loader-about");

        aboutAnimate([
            containerAbout,
            headingAbout,
            lineAbout,
            imgAboutContainer,
            imgAbout,
            textAbout,
            blockAbout,
            rightContainerAbout
        ]);

        // lazy loading
        imgAbout.current.addEventListener("load", () => {
            currentTheme
                ? circles.forEach(circle => {
                      circle.style.backgroundColor = "#A13251";
                  })
                : circles.forEach(circle => {
                      circle.style.backgroundColor = "#008F96";
                  });
            imgAbout.current.style.opacity = "1";
        });
        // eslint-disable-next-line
    }, []);

    return (
        <section id="about" style={theme}>
            <div className="test" data-section="about">
                About
            </div>

            <div ref={containerAbout} className="container-about">
                <div className="heading-about">
                    <h1 ref={headingAbout} style={secondaryColor}>
                        About
                    </h1>
                    <span
                        ref={lineAbout}
                        style={lineColor}
                        className="line-about"
                    ></span>
                </div>

                <div
                    ref={imgAboutContainer}
                    style={borderColor}
                    className="left-container-about"
                >
                    <div className="placeholder-about">
                        <div
                            ref={el => circleAbout.current.push(el)}
                            style={borderColor}
                            className="circle1 loader-about"
                        ></div>
                        <div
                            ref={el => circleAbout.current.push(el)}
                            style={borderColor}
                            className="circle2 loader-about"
                        ></div>
                        <div
                            ref={el => circleAbout.current.push(el)}
                            style={borderColor}
                            className="circle3 loader-about"
                        ></div>
                    </div>
                    <img
                        ref={imgAbout}
                        className="img-about"
                        src=""
                        alt="avatar"
                        data-src={avatar}
                    ></img>
                </div>

                <div
                    ref={rightContainerAbout}
                    className="right-container-about"
                >
                    <p ref={el => textAbout.current.push(el)}>
                        I'm twenty two, a software developer with good problem
                        solving ablity, currently working in Infosys on MERN
                        stack.
                    </p>

                    <p ref={el => textAbout.current.push(el)}>
                        To know more about my project and skills please scroll
                        down.
                    </p>

                    <div
                        ref={blockAbout}
                        style={secondaryBG}
                        className="block-about"
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default About;
