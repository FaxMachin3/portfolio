import React from 'react'
import ThemeContext from '../../common/ThemeContext'

const Project = () => {
    const {currentTheme} = React.useContext(ThemeContext);
    const {background, primary} = currentTheme;
    const theme = {
        background: background,
        color: primary
    }
    return(
        <section style={theme}>
            <p>Project</p>
        </section>
    )
}

export default Project