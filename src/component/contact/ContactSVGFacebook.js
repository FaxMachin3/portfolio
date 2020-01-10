import React from "react";
import ThemeContext from "../../common/ThemeContext";

const ContactSVGFacebook = () => {
    const { currentTheme } = React.useContext(ThemeContext);
    const { primary } = currentTheme;

    return (
        <svg className="svg-icon-contact" viewBox="0 0 25 25">
            <path
                d="M25 12.5C25 5.5975 19.4025 0 12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C12.5734 25 12.6465 24.9985 12.7197 24.9971V15.2664H10.0342V12.1367H12.7197V9.83353C12.7197 7.16248 14.3503 5.70869 16.733 5.70869C17.874 5.70869 18.8547 5.79376 19.1406 5.83172V8.62331H17.4976C16.2014 8.62331 15.9504 9.23939 15.9504 10.1433V12.1367H19.0498L18.6459 15.2664H15.9504V24.5171C21.1752 23.0192 25 18.2056 25 12.5Z"
                fill={primary}
            />
        </svg>
    );
};

export default ContactSVGFacebook;
