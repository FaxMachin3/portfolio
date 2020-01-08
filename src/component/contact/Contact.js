import React, { useRef, useEffect, useContext } from "react";
import ThemeContext from "../../common/ThemeContext";
import "./ContactStyle.scss"

const Contact = () => {
    const { currentTheme } = useContext(ThemeContext);
    const { background, primary } = currentTheme;
    const theme = {
        background: background,
        color: primary
    };
    return (
        <section id="contact" style={theme}>
            <div className="test" data-section="contact">
                Contact
            </div>

            <div>
                
            </div>
        </section>
    );
};

export default Contact;
