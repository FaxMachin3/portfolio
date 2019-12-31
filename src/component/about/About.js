import React, { useContext, useEffect, useRef } from "react";

import "./AboutStyle.scss";
import ThemeContext from "../../common/ThemeContext";
import aboutAnimate from "./AboutAnimate";
import avatar from "../../assests/images/avatar.jpg";

const About = () => {
    const containerAbout = useRef(null);
    const headingAbout = useRef(null);
    const lineAbout = useRef(null);
    const imgAbout = useRef(null);
    const blockAbout = useRef(null);
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
            imgAbout,
            textAbout,
            blockAbout
        ]);
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

                <div className="left-container-about">
                    <div className="placeholder-about"></div>
                    <img
                        ref={imgAbout}
                        className="img-about"
                        src={avatar}
                        alt="avatar"
                        style={borderColor}
                    ></img>
                </div>

                <div className="right-container-about">
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
