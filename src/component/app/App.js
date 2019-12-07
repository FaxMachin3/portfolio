import React, { useState, useEffect, useRef } from "react";

import ThemeContext from "../../common/ThemeContext";

import "./App.scss";

import Home from "../home/Home";
import About from "../about/About";
import Skill from "../skill/Skill";
import Project from "../project/Project";
import Contact from "../contact/Contact";
import Navbar from "../navbar/Navbar";

const App = () => {
    const animationDuration = useRef(1000);
    let lastTime = useRef(0);
    const [currentPage, changeCurrentPage] = useState(".home");
    const [theme, changeTheme] = useState(true);
    const pages = {
        ".home": {
            prev: ".contact",
            next: ".about"
        },
        ".about": {
            prev: ".home",
            next: ".skill"
        },
        ".skill": {
            prev: ".about",
            next: ".project"
        },
        ".project": {
            prev: ".skill",
            next: ".contact"
        },
        ".contact": {
            prev: ".project",
            next: ".home"
        }
    };
    const themeStyle = {
        dark: {
            background: "#121212",
            primary: "#DADADA",
            secondary: "#A13251"
        },
        light: {
            background: "#E1E1E1",
            primary: "#333333",
            secondary: "#008F96"
        }
    };

    let currentTheme = theme === true ? themeStyle.dark : themeStyle.light;

    useEffect(() => {
        window.addEventListener(
            "wheel",
            event => {
                const currentTime = new Date().getTime();
                if (
                    currentTime - lastTime.current <
                    animationDuration.current
                ) {
                    event.preventDefault();
                    return;
                } else {
                    if (event.deltaY > 0) {
                        changeCurrentPage(
                            prevPage => (prevPage = pages[prevPage].next)
                        );
                    } else {
                        changeCurrentPage(
                            prevPage => (prevPage = pages[prevPage].prev)
                        );
                    }
                    lastTime.current = currentTime;
                }
            },
            { passive: false }
        );
        const page = window.document.querySelector(currentPage);
        page.click()
    }, [currentPage, pages]);
    console.log(currentPage);
    return (
        <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
            <Navbar changePage={changeCurrentPage} />
            <Home />
            <About />
            <Skill />
            <Project />
            <Contact />
        </ThemeContext.Provider>
    );
};

export default App;
