import React, { useRef, useEffect, useContext } from "react";
import ThemeContext from "../../common/ThemeContext";
import "./ContactStyle.scss";

import contactAnimate from "./ContactAnimate";
import ContactSVG from "./ContactSVG";
import ContactSVGInstagram from "./ContactSVGInstagram";
import ContactSVGLinkedin from "./ContactSVGLinkedin";
import ContactSVGFacebook from "./ContactSVGFacebook";
import ContactSVGGithub from "./ContactSVGGithub";

const Contact = () => {
    const { currentTheme } = useContext(ThemeContext);
    const { background, primary, secondary } = currentTheme;

    const containerContact = useRef(null);
    const headingContact = useRef(null);
    const lineContact = useRef(null);
    const bottomContainerContact = useRef(null);
    const leftContainerContact = useRef(null);
    const linksContact = useRef([]);
    const textContact = useRef([]);

    const theme = {
        background: background,
        color: primary
    };

    const secondaryColor = {
        color: secondary
    };

    const secondaryBackground = {
        backgroundColor: secondary
    };

    const lineColor = {
        backgroundColor: primary
    };

    useEffect(() => {
        contactAnimate([
            containerContact,
            headingContact,
            lineContact,
            bottomContainerContact,
            leftContainerContact,
            linksContact,
            textContact
        ]);
    }, []);

    return (
        <section id="contact" style={theme}>
            <div className="test" data-section="contact">
                Contact
            </div>

            <div ref={containerContact} className="container-contact">
                <div ref={headingContact} className="heading-contact">
                    <h1 style={secondaryColor}>Contact</h1>

                    <span
                        ref={lineContact}
                        style={lineColor}
                        className="line-contact"
                    ></span>
                </div>
                <div className="top-container-contact">
                    <div
                        ref={leftContainerContact}
                        className="left-container-contact"
                    >
                        <ContactSVG />
                    </div>

                    <div className="right-container-contact">
                        <p ref={el => textContact.current.push(el)}>
                            <span>Email:</span> subhamraj4114@gmail.com
                        </p>
                        <p ref={el => textContact.current.push(el)}>
                            <span>Phone:</span> +91 826-060-2263
                        </p>
                    </div>
                </div>

                <div
                    ref={bottomContainerContact}
                    style={secondaryBackground}
                    className="bottom-container-contact"
                >
                    <div className="top-half-bottom-container-contact">
                        <div
                            ref={el => {
                                linksContact.current.push(el);
                            }}
                        >
                            <div>
                                <ContactSVGGithub />
                            </div>
                            <div>
                                <p>GitHub</p>
                            </div>
                        </div>

                        <div
                            ref={el => {
                                linksContact.current.push(el);
                            }}
                        >
                            <div>
                                <ContactSVGInstagram />
                            </div>
                            <div>
                                <p>Instagram</p>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-half-bottom-container-contact">
                        <div
                            ref={el => {
                                linksContact.current.push(el);
                            }}
                        >
                            <div>
                                <ContactSVGLinkedin />
                            </div>
                            <div>
                                <p>LinkedIn</p>
                            </div>
                        </div>

                        <div
                            ref={el => {
                                linksContact.current.push(el);
                            }}
                        >
                            <div>
                                <ContactSVGFacebook />
                            </div>
                            <div>
                                <p>Facebook</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
