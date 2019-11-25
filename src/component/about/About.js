import React from 'react'
import ThemeContext from '../../common/ThemeContext'

const About = () => {
    const {currentTheme} = React.useContext(ThemeContext);
    const {background, primary} = currentTheme;
    const theme = {
        background: background,
        color: primary
    }
    return(
        <section id="about" style={theme}>
            <p>About</p>
        </section>
    )
}

export default About