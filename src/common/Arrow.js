import React from "react";
import ThemeContext from "./ThemeContext";

const Arrow = (props) => {
    const { currentTheme } = React.useContext(ThemeContext);
    const { primary } = currentTheme;

    return (
        <svg
            className={`${props.className}`}
            width="50"
            height="28"
            viewBox="0 0 50 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M24.9987 23.7871L2.41788 1.20633C1.86252 0.650982 0.971866 0.650982 0.416514 1.20633C-0.138838 1.76168 -0.138838 2.65234 0.416514 3.20769L24.0032 26.7944C24.5586 27.3498 25.4493 27.3498 26.0046 26.7944L49.5809 3.20769C49.8533 2.93526 50 2.56851 50 2.21225C50 1.85599 49.8638 1.48925 49.5809 1.21681C49.0255 0.661457 48.1349 0.661457 47.5795 1.21681L24.9987 23.7871Z"
                fill={primary}
            />
        </svg>
    );
};

export default Arrow;
