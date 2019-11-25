import React ,{ useEffect , useRef } from 'react'
import ThemeContext from '../../common/ThemeContext'
import './ToggleButton.scss'

const ToggleButton = () => {
    let toggleButton = useRef(null);
    let toggleButtonCircle = useRef(null);
    const {currentTheme, changeTheme} = React.useContext(ThemeContext);
    const {background, primary} = currentTheme;
    useEffect(() => {
        toggleButton.addEventListener('click', () => {
            changeTheme((prevState) => prevState = !prevState)
        })
    },[changeTheme])
    useEffect(() => {
        toggleButtonCircle.classList.toggle('circle')
    }, [background])
    const themeOuter = {
        background: background,
        borderColor: primary
    }
    const themeInner = { 
        borderColor: primary,
    }
    return (
        <div className="outer" ref={btn => toggleButton = btn} style={themeOuter}>
            <div className="inner" ref={inr => toggleButtonCircle = inr} style={themeInner}></div>
        </div>
    )
}

export default ToggleButton