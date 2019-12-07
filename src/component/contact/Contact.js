import React from 'react'
import ThemeContext from '../../common/ThemeContext'

const Contact = () => {
    const {currentTheme} = React.useContext(ThemeContext);
    const {background, primary} = currentTheme;
    const theme = {
        background: background,
        color: primary
    }
    return(
        <section id="contact" style={theme}>
            <p>Contact</p>
        </section>
    )
}

export default Contact