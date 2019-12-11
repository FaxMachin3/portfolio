import React, { useEffect, useContext } from "react";
import "./NavbarStyle.scss";
import { smoothScrollNav } from "./SmoothScrollNav";
import ThemeContext from "../../common/ThemeContext";
import ToggleButton from "../button/ToggleButton";

const Navbar = props => {
    const { currentTheme } = useContext(ThemeContext);
    const { background, primary } = currentTheme;
    const textColor = {
        color: primary
    };

    const bgColor = {
        background: primary
    };

    // smooth scroll
    useEffect(() => {
        const links = window.document.querySelectorAll(".link");
        const logo = window.document.querySelector('.logo')
        logo.addEventListener("click", e => smoothScrollNav(e, props))
        links.forEach(link => {
            link.addEventListener("click", e => smoothScrollNav(e, props));
        });
        return () => {
            logo.removeEventListener("click", e => smoothScrollNav(e, props))
            links.forEach(link => {
                link.removeEventListener("click", e => smoothScrollNav(e, props));
            });
        }
    });

    return (
        <nav className="nav-bar" style={{ background: background }}>
            <h1 className="logo">
                <a style={textColor} href="#home">
                    SR
                </a>
            </h1>
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
                <li>
                    <ToggleButton />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
