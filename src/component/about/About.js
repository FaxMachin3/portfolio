import React, { useContext, useEffect, useRef } from "react";
import ThemeContext from "../../common/ThemeContext";
import "./AboutStyle.scss";

import Loader from "../loader/Loader";

import aboutAnimate from "./AboutAnimate";
import avatar from "../../assests/images/avatar.jpg";
import Intersecting from "../intersecting/Intersecting";

const About = props => {
    const containerAbout = useRef(null);
    const headingAbout = useRef(null);
    const lineAbout = useRef(null);
    const imgAboutContainer = useRef(null);
    const imgAbout = useRef(null);
    const blockAbout = useRef(null);
    const rightContainerAbout = useRef(null);
    const textAbout = useRef([]);

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
    }, []);

    // lazy loading
    useEffect(() => {
        imgAbout.current.addEventListener("load", () => {
            const loaderCircles =
                imgAbout.current.previousElementSibling.childNodes;

            props.theme
                ? loaderCircles.forEach(circle => {
                      setTimeout(() => {
                          circle.style.backgroundColor = "#A13251";
                      }, 75);
                  })
                : loaderCircles.forEach(circle => {
                      setTimeout(() => {
                          circle.style.backgroundColor = "#008F96";
                      }, 75);
                  });

            imgAbout.current.style.opacity = "1";

            setTimeout(() => {
                imgAbout.current.previousElementSibling.style.display = "none";
            }, 500);
        });
    }, [props.theme]);

    return (
        <section id="about" style={theme}>
            <Intersecting dataSection="about" />

            <div
                ref={containerAbout}
                className="container-about containers"
                data-section="about"
            >
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
                    <Loader />
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
