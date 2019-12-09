import React, { useEffect, useContext } from "react";
import "./NavbarStyle.scss";
import { smoothScroll } from "../../common/SmoothScroll";
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
        var links = window.document.querySelectorAll(".link");
        links.forEach(link => {
            link.addEventListener("click", e => smoothScroll(e, props));
        });
        // eslint-disable-next-line
    });

    // adding and removing active class to links
    useEffect(() => {
        let links = window.document.querySelectorAll(".link");
        const removeClass = () => {
            links.forEach(link => {
                link.classList.remove("active");
            });
        };
        links.forEach(link => {
            link.addEventListener("click", e => {
                removeClass();
                e.target.classList.add("active");
            });
        });
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
