import React from 'react'
import ThemeContext from '../../common/ThemeContext'

const Skill = () => {
    const {currentTheme} = React.useContext(ThemeContext);
    const {background, primary} = currentTheme;
    const theme = {
        background: background,
        color: primary
    }
    return(
        <section style={theme}>
            <p>Skill</p>
        </section>
    )
}

export default Skill