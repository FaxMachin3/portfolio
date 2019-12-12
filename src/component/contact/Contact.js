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
            <div className="test" data-section="contact">Contact</div>
        </section>
    )
}

export default Contact