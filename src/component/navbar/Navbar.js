import React, { useEffect, useContext } from "react"

import "./NavbarStyle.scss"

import { smoothScrollNav } from "./SmoothScrollNav"
import ThemeContext from "../../common/ThemeContext"
import ToggleButton from "../button/ToggleButton"

const Navbar = props => {
    const { currentTheme } = useContext(ThemeContext)
    const { primary, secondary } = currentTheme

    const textColor = {
        color: primary
    };

    const bgColor = {
        background: primary
    };

    const secondaryBG = {
        background: secondary
    };

    const removeClass = () => {
        const liS = window.document.querySelectorAll(".nav-links li")
        const navCircle = window.document.querySelector(".nav-circle")
        const hams = window.document.querySelectorAll(".ham")
        const links = window.document.querySelectorAll(".link")
        const navLink = window.document.querySelector(".nav-links")

        if(!props.scroll.current){
            props.scroll.current = !props.scroll.current
        }

        navCircle.classList.remove("animate-hamburger")
        navLink.classList.remove("animate-hamburger")
        hams.forEach(ham => {
            ham.classList.remove("animate-hamburger")
        })
        links.forEach(link => {
            link.classList.remove("animate-hamburger")
        })
        liS.forEach(li => {
            li.classList.remove("animate-hamburger")
        })
    }

    useEffect(() => {
        const hamburger = window.document.querySelector(".hamburger")
        const liS = window.document.querySelectorAll(".nav-links li")
        const navCircle = window.document.querySelector(".nav-circle")
        const hams = window.document.querySelectorAll(".ham")
        const links = window.document.querySelectorAll(".link")
        const navLink = window.document.querySelector(".nav-links")

        hamburger.addEventListener("click", e => {
            props.scroll.current = !props.scroll.current;
            navCircle.classList.toggle("animate-hamburger");
            navLink.classList.toggle("animate-hamburger");
            hams.forEach(ham => {
                ham.classList.toggle("animate-hamburger");
            })
            links.forEach(link => {
                link.classList.toggle("animate-hamburger")
            })
            liS.forEach(li => {
                li.classList.toggle("animate-hamburger")
            })
        })
    },[props.scroll])

    // smooth scroll        
    useEffect(() => {
        const links = window.document.querySelectorAll(".link")
        const logo = window.document.querySelector(".logo")

        logo.addEventListener("click", e => {
            smoothScrollNav(e, props)
            removeClass()
        })

        links.forEach(link => {
            link.addEventListener("click", e => {
                smoothScrollNav(e, props)
                removeClass()
            })
        })

        return () => {
            logo.removeEventListener("click", e => smoothScrollNav(e, props))
            links.forEach(link => {
                link.removeEventListener("click", e =>
                    smoothScrollNav(e, props)
                )
            })
        }
    })

    return (
        <nav className="nav-bar" >
            <h1 className="logo">
                <a style={textColor} href="#home">
                    SR
                </a>
            </h1>
            <div className="hamburger">
                <div className="nav-circle" style={secondaryBG}></div>
                <div className="ham upper-layer" style={bgColor}></div>
                <div className="ham middle-layer" style={bgColor}></div>
                <div className="ham lower-layer" style={bgColor}></div>
            </div>
            <ul className="nav-links">
                <li>
                    <a
                        className="home link active"
                        style={textColor}
                        href="#home"
                    >
                        Home<span style={bgColor} className="line"></span>
                    </a>
                </li>
                <li>
                    <a className="about link" style={textColor} href="#about">
                        About<span style={bgColor} className="line"></span>
                    </a>
                </li>
                <li>
                    <a className="skill link" style={textColor} href="#skill">
                        Skill<span style={bgColor} className="line"></span>
                    </a>
                </li>
                <li>
                    <a
                        className="project link"
                        style={textColor}
                        href="#project"
                    >
                        Project<span style={bgColor} className="line"></span>
                    </a>
                </li>
                <li>
                    <a
                        className="contact link"
                        style={textColor}
                        href="#contact"
                    >
                        Contact<span style={bgColor} className="line"></span>
                    </a>
                </li>
                <li className="toggle-button">
                    <ToggleButton />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
