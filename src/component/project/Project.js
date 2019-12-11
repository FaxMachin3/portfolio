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
        <section id="project" style={theme}>
            <div className="test">Project</div>
        </section>
    )
}

export default Project