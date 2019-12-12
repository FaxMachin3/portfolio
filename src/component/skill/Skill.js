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
            <div className="test"  data-section="skill">Skill</div>
        </section>
    )
}

export default Skill