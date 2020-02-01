import React, { useContext } from "react";
import ThemeContext from "../../common/ThemeContext";
import "./IntersectingStyle.scss";

const Intersecting = props => {
    const { currentTheme } = useContext(ThemeContext);
    const { background, primary, secondary } = currentTheme;

    const theme = {
        background: background,
        color: primary
    };

    const secondaryColor = {
        color: secondary
    };

    return (
        <div
            className="intersecting-div"
            data-section={props.dataSection}
        ></div>
    );
};

export default Intersecting;
