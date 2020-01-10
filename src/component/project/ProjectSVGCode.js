import React from "react";
import ThemeContext from "../../common/ThemeContext";

const ProjectSVGCode = () => {
    const { currentTheme } = React.useContext(ThemeContext);
    const { secondary, background } = currentTheme;

    return (
        <svg className="svg-code-project" viewBox="0 0 50 50">
            <path
                d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"
                fill={secondary}
            />
            <path
                d="M14.5616 28.8735L10.4216 24.7875L14.5616 20.7015H17.1536L12.9956 24.7875L17.1536 28.8735H14.5616Z"
                fill={background}
            />
            <path
                d="M28.5891 14.2935L23.6931 34.4355H21.6771L26.5551 14.2935H28.5891Z"
                fill={background}
            />
            <path
                d="M32.7412 20.7015H35.3332L39.4732 24.7875L35.3332 28.8735H32.7412L36.8992 24.7875L32.7412 20.7015Z"
                fill={background}
            />
        </svg>
    );
};

export default ProjectSVGCode;
