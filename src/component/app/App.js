import React, { useState, useRef, useEffect } from "react";
// import { gsap } from "gsap";

import ThemeContext from "../../common/ThemeContext";

import "./App.scss";

import Home from "../home/Home";
import About from "../about/About";
import Skill from "../skill/Skill";
import Project from "../project/Project";
import Contact from "../contact/Contact";
import Navbar from "../navbar/Navbar";
import Indicators from "../indicators/Indicators";

import { smoothScroll } from "./SmoothScroll";

const App = () => {
    const animationDuration = useRef(1000);
    let lastTime = useRef(0);
    let position = useRef(0);
    let scrolled = useRef(true);
    const allowScroll = useRef(true); // stops user to scroll when the menu is open
    const [currentPage, changeCurrentPage] = useState(".home");
    const [theme, changeTheme] = useState(true);
    const pages = {
        ".home": {
            prev: ".home",
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
            next: ".contact"
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

    const smoothScrollArrow = event => {
        if (scrolled.current) {
            scrolled.current = !scrolled.current;
            if (event.keyCode === 40) {
                changeCurrentPage(
                    prevPage => (prevPage = pages[prevPage].next)
                );
            } else if (event.keyCode === 38) {
                changeCurrentPage(
                    prevPage => (prevPage = pages[prevPage].prev)
                );
            }
            setTimeout(() => {
                scrolled.current = !scrolled.current;
            }, 500);
        }
    };

    const handleTouchStart = event => {
        if (scrolled.current && event.touches.length === 1) {
            position.current = event.changedTouches[0].clientY;
        }
    };
    const handleTouchMove = event => {
        if (scrolled.current && event.touches.length === 1) {
            position.current -= event.changedTouches[0].clientY;
            scrolled.current = !scrolled.current;
        }
    };
    const handleTouchEnd = event => {
        if (!scrolled.current) {
            scrolled.current = !scrolled.current;
            if (position.current > 0) {
                changeCurrentPage(
                    prevPage => (prevPage = pages[prevPage].next)
                );
            } else if (position.current < 0) {
                changeCurrentPage(
                    prevPage => (prevPage = pages[prevPage].prev)
                );
            }
        }
    };

    // mobile smoothscroll
    useEffect(() => {
        const sections = window.document.querySelectorAll("section");

        sections.forEach(section => {
            section.addEventListener(
                "touchstart",
                event => {
                    allowScroll.current && handleTouchStart(event);
                },
                {
                    passive: false
                }
            );
        });

        sections.forEach(section => {
            section.addEventListener(
                "touchmove",
                event => {
                    allowScroll.current && handleTouchMove(event);
                },
                {
                    passive: false
                }
            );
        });

        sections.forEach(section => {
            section.addEventListener(
                "touchend",
                event => {
                    allowScroll.current && handleTouchEnd(event);
                },
                {
                    passive: false
                }
            );
        });

        // unsubscribing on unmount
        return () => {
            window.removeEventListener(
                "touchstart",
                event => {
                    handleTouchStart(event);
                },
                {
                    passive: false
                }
            );
            window.removeEventListener(
                "touchmove",
                event => {
                    handleTouchMove(event);
                },
                {
                    passive: false
                }
            );
            window.removeEventListener(
                "touchend",
                event => {
                    handleTouchEnd(event);
                },
                {
                    passive: false
                }
            );
        };
        // eslint-disable-next-line
    }, []);

    // desktop smoothscroll
    useEffect(() => {
        const sections = window.document.querySelectorAll("section");

        window.document.addEventListener("keydown", event =>
            smoothScrollArrow(event)
        );

        sections.forEach(section => {
            section.addEventListener(
                "wheel",
                event => smoothScrollWheel(event),
                {
                    passive: false
                }
            );
        });

        smoothScroll(currentPage);

        window.document.body.style.backgroundColor = currentTheme.background

        // unsubscribing on unmount
        return () => {
            window.removeEventListener(
                "wheel",
                event => smoothScrollWheel(event),
                {
                    passive: false
                }
            );
        };
        // eslint-disable-next-line
    }, [currentPage]);

    // Intersection Observer
    useEffect(() => {
        const sections = window.document.querySelectorAll(".test");
        const bars = window.document.querySelectorAll(".bar");

        // setting actual height onLoad
        window.document.documentElement.style.setProperty(
            "--actual-height",
            `${window.innerHeight}px`
        );

        // setting actual height onResize
        window.addEventListener("resize", () => {
            window.document.documentElement.style.setProperty(
                "--actual-height",
                `${window.innerHeight}px`
            );
        });

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let scale = "";
                    const newHash = entry.target.getAttribute("data-section");

                    window.location.hash = newHash;

                    if (window.matchMedia("(max-width: 768px)").matches) {
                        scale = "scaleY";
                    } else {
                        scale = "scaleX";
                    }

                    bars.forEach(bar => {
                        const section = bar.getAttribute("data-section");
                        if (section === newHash) {
                            bar.style.transform = `${scale}(1)`;
                        } else {
                            bar.style.transform = `${scale}(0.5)`;
                        }
                    });
                    // observer.unobserve(entry.target)
                }
            }, options);
        });

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
        // eslint-disable-next-line
    }, []);

    return (
        <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
            <Navbar
                currentPage={currentPage}
                changePage={changeCurrentPage}
                scroll={allowScroll}
            />
            <Indicators />
            <Home />
            <About />
            <Skill />
            <Project />
            <Contact />
        </ThemeContext.Provider>
    );
};

export default App;
