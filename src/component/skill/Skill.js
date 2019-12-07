import React, { useContext } from 'react'
import ThemeContext from '../../common/ThemeContext'

const Skill = () => {
    const {currentTheme} = useContext(ThemeContext);
    const {background, primary} = currentTheme;
    const theme = {
        background: background,
        color: primary
    }
    return(
        <section id="skill" style={theme}>
            <p>Skill</p>
        </section>
    )
}

export default Skill