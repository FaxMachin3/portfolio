import React from 'react'
import ThemeContext from '../../common/ThemeContext';

function Error(){
    const {currentTheme} = React.useContext(ThemeContext);
    const {background,primary} = currentTheme;
    const theme = {
        background: background,
        color: primary
    }
    return(
        <section style={theme}>
            <p>Error</p>
        </section>
    )
}

export default Error