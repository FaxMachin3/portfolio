import React, { useState, useRef, useEffect } from "react";

import ThemeContext from "../../common/ThemeContext";

import "./App.scss";

import Home from "../home/Home";
import About from "../about/About";
import Skill from "../skill/Skill";
import Project from "../project/Project";
import Contact from "../contact/Contact";
import Navbar from "../navbar/Navbar";

const App = React.memo(() => {
    const animationDuration = useRef(1000)
    let lastTime = useRef(0)
    let scrolled = useRef(true)
    let position = useRef(0)
    const [currentPage, changeCurrentPage] = useState(".home")
    const [theme, changeTheme] = useState(true)
    const pages = useRef({
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
    });
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

    const smoothScrollWheel = event => {
        const currentTime = new Date().getTime();
        if (currentTime - lastTime.current < animationDuration.current) {
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
    };

    // mobile smoothscroll
    useEffect(() => {
        window.addEventListener("touchstart", (event) => {
            if(scrolled.current){
                position.current = event.changedTouches[0].clientY
            }
        } , {
            passive: false
        });
        window.addEventListener("touchmove", (event) => {
            if(scrolled.current){
                position.current -= event.changedTouches[0].clientY
                scrolled.current = !scrolled.current
            }
        } , {
            passive: false
        });
        window.addEventListener("touchend", (event) => {
            if(!scrolled.current){
                scrolled.current = !scrolled.current
                if(position.current > 0){
                    changeCurrentPage(
                        prevPage => (prevPage = pages[prevPage].next)
                    );
                }
                else if(position.current < 0){
                    changeCurrentPage(
                        prevPage => (prevPage = pages[prevPage].prev)
                    );
                }
            }
        } , {
            passive: false
        });
    })
    
    // desktop smoothscroll
    useEffect(() => {
        window.addEventListener("wheel", event => smoothScrollWheel(event), {
            passive: false
        });
        const page = window.document.querySelector(currentPage);
        page.click(false); // dispatching click event
    });

    return (
        <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
            <Navbar changePage={changeCurrentPage}/>
            <Home />
            <About />
            <Skill />
            <Project />
            <Contact />
        </ThemeContext.Provider>
    );
});

export default App;
