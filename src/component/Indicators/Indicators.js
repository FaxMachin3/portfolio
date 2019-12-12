import React, { useContext } from "react"

import ThemeContext from "../../common/ThemeContext"
import "./IndicatorsStyle.scss"

const Indicators = () => {
    const { currentTheme } = useContext(ThemeContext)
    const { primary } = currentTheme

    const primaryColor = {
        backgroundColor: primary,
    }
    return (
        <ul className="indicators">
            <li className="bar" style={primaryColor} data-section="home"></li>
            <li className="bar" style={primaryColor} data-section="about"></li>
            <li className="bar" style={primaryColor} data-section="skill"></li>
            <li className="bar" style={primaryColor} data-section="project"></li>
            <li className="bar" style={primaryColor} data-section="contact"></li>
        </ul>
    )
}

export default Indicators