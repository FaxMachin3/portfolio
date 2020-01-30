import React, { useEffect, useContext } from "react";

import "./NavbarStyle.scss";

import { smoothScrollNav } from "./SmoothScrollNav";
import ThemeContext from "../../common/ThemeContext";
import ToggleButton from "../button/ToggleButton";

const Navbar = props => {
    const { currentTheme } = useContext(ThemeContext);
    const { primary, secondary } = currentTheme;

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
        const liS = window.document.querySelectorAll(".nav-links li");
        const navCircle = window.document.querySelector(".nav-circle");
        const hams = window.document.querySelectorAll(".ham");
        const links = window.document.querySelectorAll(".link");
        const navLink = window.document.querySelector(".nav-links");
        const logo = window.document.querySelector(".logo");

        if (!props.scroll.current) {
            props.scroll.current = !props.scroll.current;
        }

        logo.classList.remove("animate-hamburger");
        navCircle.classList.remove("animate-hamburger");
        navLink.classList.remove("animate-hamburger");
        hams.forEach(ham => {
            ham.classList.remove("animate-hamburger");
        });
        links.forEach(link => {
            link.classList.remove("animate-hamburger");
        });
        liS.forEach(li => {
            li.classList.remove("animate-hamburger");
        });
    };

    useEffect(() => {
        const links = window.document.querySelectorAll(".link");

        links.forEach(link => {
            const activeLink = link.getAttribute("class").split(" ")[2];
            link.style.color = primary;
            if (activeLink === "active") {
                window.matchMedia("(min-width: 769px)").matches
                    ? (link.style.color = secondary)
                    : (link.style.color = primary);
            }
        });
    });

    useEffect(() => {
        const hamburger = window.document.querySelector(".hamburger");
        const liS = window.document.querySelectorAll(".nav-links li");
        const navCircle = window.document.querySelector(".nav-circle");
        const hams = window.document.querySelectorAll(".ham");
        const links = window.document.querySelectorAll(".link");
        const navLink = window.document.querySelector(".nav-links");
        const logo = window.document.querySelector(".logo");

        hamburger.addEventListener("click", e => {
            props.scroll.current = !props.scroll.current;
            logo.classList.toggle("animate-hamburger");
            navCircle.classList.toggle("animate-hamburger");
            navLink.classList.toggle("animate-hamburger");
            hams.forEach(ham => {
                ham.classList.toggle("animate-hamburger");
            });
            links.forEach(link => {
                link.classList.toggle("animate-hamburger");
            });
            liS.forEach(li => {
                li.classList.toggle("animate-hamburger");
            });
        });
        // eslint-disable-next-line
    }, []);

    // smooth scroll
    useEffect(() => {
        const links = window.document.querySelectorAll(".link");
        const logo = window.document.querySelector(".logo");

        logo.addEventListener("click", e => {
            props.hashCheck.current = false;
            smoothScrollNav(e, props);
            removeClass();
            setTimeout(() => {
                props.hashCheck.current = true;
            }, 1000);
        });

        links.forEach(link => {
            link.addEventListener("click", e => {
                props.hashCheck.current = false;
                smoothScrollNav(e, props);
                removeClass();
                setTimeout(() => {
                    props.hashCheck.current = true;
                }, 1000);
            });
        });

        return () => {
            logo.removeEventListener("click", e => smoothScrollNav(e, props));
            links.forEach(link => {
                link.removeEventListener("click", e =>
                    smoothScrollNav(e, props)
                );
            });
        };
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const navBar = window.document.querySelectorAll(".link");
        const intersectingSection = "#" + props.currentPage.split(".")[1];

        navBar.forEach(link => {
            link.classList.remove("active");
            link.style.color = primary;
            if (link.getAttribute("href") === intersectingSection) {
                link.classList.add("active");
                window.matchMedia("(min-width: 769px)").matches
                    ? (link.style.color = secondary)
                    : (link.style.color = primary);
            }
        });
        // eslint-disable-next-line
    }, [props.currentPage]);

    return (
        <nav className="nav-bar">
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
                        Home
                    </a>
                </li>
                <li>
                    <a className="about link" style={textColor} href="#about">
                        About
                    </a>
                </li>
                <li>
                    <a className="skill link" style={textColor} href="#skill">
                        Skill
                    </a>
                </li>
                <li>
                    <a
                        className="project link"
                        style={textColor}
                        href="#project"
                    >
                        Project
                    </a>
                </li>
                <li>
                    <a
                        className="contact link"
                        style={textColor}
                        href="#contact"
                    >
                        Contact
                    </a>
                </li>
                <li className="toggle-button">
                    <ToggleButton />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
