import React, { useContext } from "react";
import ThemeContext from "../../common/ThemeContext";
import "./LoaderStyle.scss"

const Loader = () => {
    const { currentTheme } = useContext(ThemeContext);

    const { secondary } = currentTheme;

    const borderColor = {
        borderColor: secondary
    };

    return (
        <div className="mini-loader-container">
            <div
                style={borderColor}
                className="mini-loader mini-circle1"
            ></div>
            <div
                style={borderColor}
                className="mini-loader mini-circle2"
            ></div>
            <div
                style={borderColor}
                className="mini-loader mini-circle3"
            ></div>
        </div>
    );
};

export default Loader;
