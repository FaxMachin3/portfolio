import React, { useState, useEffect, useRef, useContext } from "react";
import ThemeContext from "../../common/ThemeContext";
import "./ToggleButton.scss";

const ToggleButton = () => {
    let [initial, setInitial] = useState(false);
    let toggleButton = useRef(null);
    let toggleButtonCircle = useRef(null);
    const { currentTheme, changeTheme } = useContext(ThemeContext);
    const { background, primary, secondary } = currentTheme;

    const themeOuter = {
        backgroundColor: primary
    };

    const themeInner = {
        backgroundColor: window.matchMedia("(min-width: 769px)").matches
            ? background
            : secondary
    };

    // change background
    useEffect(() => {
        toggleButton.current.addEventListener("click", () => {
            changeTheme(prevState => (prevState = !prevState));
        });
        return () => {
            toggleButton.removeEventListener("click", () => {
                changeTheme(prevState => (prevState = !prevState));
            });
        };
    }, [changeTheme]);

    // toggle button class
    useEffect(() => {
        if (!initial) {
            setInitial(prevState => (prevState = !prevState));
        } else {
            toggleButtonCircle.current.classList.toggle("circle");
        }
        // eslint-disable-next-line
    }, [background]);

    return (
        <div className="outer" ref={toggleButton} style={themeOuter}>
            <div
                className="inner"
                ref={toggleButtonCircle}
                style={themeInner}
            ></div>
        </div>
    );
};

export default ToggleButton;
