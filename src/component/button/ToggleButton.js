import React, { useState, useEffect, useRef, useContext } from "react";
import ThemeContext from "../../common/ThemeContext";
import "./ToggleButton.scss";

const ToggleButton = () => {
    let [initial, setInitial] = useState(false);
    let toggleButton = useRef(null);
    let toggleButtonCircle = useRef(null);
    const { currentTheme, changeTheme } = useContext(ThemeContext);
    const { background, primary } = currentTheme;

    // change background
    useEffect(() => {
        toggleButton.addEventListener("click", () => {
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
            toggleButtonCircle.classList.toggle("circle");
        }
        // eslint-disable-next-line
    }, [background]);
    const themeOuter = {
        borderColor: primary
    };
    const themeInner = {
        borderColor: primary
    };
    return (
        <div
            className="outer"
            ref={btn => (toggleButton = btn)}
            style={themeOuter}
        >
            <div
                className="inner"
                ref={inr => (toggleButtonCircle = inr)}
                style={themeInner}
            ></div>
        </div>
    );
};

export default ToggleButton;
