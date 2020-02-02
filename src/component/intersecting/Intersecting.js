import React from "react";
import "./IntersectingStyle.scss";

const Intersecting = props => {
    return (
        <div
            className="intersecting-div"
            data-section={props.dataSection}
        ></div>
    );
};

export default Intersecting;
