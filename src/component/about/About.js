import React, { useContext } from "react"
import ThemeContext from "../../common/ThemeContext"

const About = () => {
    const {currentTheme} = useContext(ThemeContext)
    const {background, primary} = currentTheme
    const theme = {
        background: background,
        color: primary
    }
    
    return(
        <section id="about" style={theme}>
            <div className="test" data-section="about">About</div>
        </section>
    )
}

export default About