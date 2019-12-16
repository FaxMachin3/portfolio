import React, { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"

import ThemeContext from "../../common/ThemeContext"

import "./App.scss"

import Home from "../home/Home"
import About from "../about/About"
import Skill from "../skill/Skill"
import Project from "../project/Project"
import Contact from "../contact/Contact"
import Navbar from "../navbar/Navbar"
import Indicators from "../Indicators/Indicators"

import { smoothScroll } from "./SmoothScroll"

const App = () => {
    const animationDuration = useRef(1000)
    let lastTime = useRef(0)
    let position = useRef(0)
    let scrolled = useRef(true)
    const allowScroll = useRef(true); // stops user to scroll when the menu is open
    const [currentPage, changeCurrentPage] = useState(".home")
    const [theme, changeTheme] = useState(true)
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
    }
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
    }

    let currentTheme = theme === true ? themeStyle.dark : themeStyle.light

    const smoothScrollWheel = event => {
        const currentTime = new Date().getTime()
        if (currentTime - lastTime.current < animationDuration.current) {
            event.preventDefault();
            return;
        } else {
            if (event.deltaY > 0) {
                changeCurrentPage(
                    prevPage => (prevPage = pages[prevPage].next)
                )
            } else {
                changeCurrentPage(
                    prevPage => (prevPage = pages[prevPage].prev)
                )
            }
            lastTime.current = currentTime;
        }
    }

    const smoothScrollArrow = (event) => {
        if(scrolled.current){
            scrolled.current = !scrolled.current
            if(event.keyCode  === 40){
                changeCurrentPage(
                    prevPage => (prevPage = pages[prevPage].next)
                )
            }
            else if(event.keyCode === 38){
                changeCurrentPage(
                    prevPage => (prevPage = pages[prevPage].prev)
                )
            }
            setTimeout(() => {
                scrolled.current = !scrolled.current
            },1000)
        }
    }
    
    const handleTouchStart = (event) => {
        if(scrolled.current && event.touches.length === 1){
            position.current = event.changedTouches[0].clientY
        }
    }
    const handleTouchMove = (event) => {
        if(scrolled.current && event.touches.length === 1){
            position.current -= event.changedTouches[0].clientY
            scrolled.current = !scrolled.current
        }
    }
    const handleTouchEnd = (event) => {
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
    }

    // mobile smoothscroll
    useEffect(() => {
        const sections = window.document.querySelectorAll("section")
        
        sections.forEach(section => {
            section.addEventListener("touchstart", (event) => { 
                allowScroll.current && handleTouchStart(event)
            } , {
                passive: false
            })
        })

        sections.forEach(section => {
            section.addEventListener("touchmove", (event) => { 
                allowScroll.current && handleTouchMove(event)
            } , {
                passive: false
            })
        })

        sections.forEach(section => {
            section.addEventListener("touchend", (event) => { 
                allowScroll.current && handleTouchEnd(event)
            } , {
                passive: false
            })
        })

        // unsubscribing on unmount
        return () => {
            window.removeEventListener("touchstart", (event) => { handleTouchStart(event) } , {
                passive: false
            })
            window.removeEventListener("touchmove", (event) => { handleTouchMove(event) } , {
                passive: false
            })
            window.removeEventListener("touchend", (event) => { handleTouchEnd(event) } , {
                passive: false
            })
        }
    })
    
    // desktop smoothscroll
    useEffect(() => {
        const sections = window.document.querySelectorAll("section")

        window.document.addEventListener("keydown", event => smoothScrollArrow(event))
        
        sections.forEach(section => {
            section.addEventListener("wheel", event => smoothScrollWheel(event), {
                passive: false
            })
        })

        smoothScroll(currentPage)

        // unsubscribing on unmount
        return () => {
            window.removeEventListener("wheel", event => smoothScrollWheel(event), {
                passive: false
            })
        }
    })
    
    // Intersection Observer
    useEffect(() => {
        const sections = window.document.querySelectorAll(".test")
        const bars = window.document.querySelectorAll(".bar")

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0
        }

        const observer = new IntersectionObserver((entries,observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    const newHash = entry.target.getAttribute("data-section")
                    const tl = gsap.timeline({defaults: {delay: 1}})
                    tl.fromTo(entry.target, {x:-50, rotate:-360, yoyoEase: "Power1.easeIn"}, {duration: 1, x: 10, rotate: 90, repeat: -1, yoyoEase: "Power1.easeOut", yoyo: true})

                    bars.forEach(bar => {
                        const section = bar.getAttribute("data-section")
                        if(section === newHash){
                            bar.style.transform = "scaleX(1)"
                        }
                        else{
                            bar.style.transform = "scaleX(0.5)"
                        }
                        window.location.hash = newHash
                    })
                    // observer.unobserve(entry.target)
                }
            }, options)
        })

        sections.forEach(section => {
            observer.observe(section)
        })

        return () => {
            observer.disconnect()
        }
    },[])

    useEffect(() => {
        const navBar = window.document.querySelectorAll(".link")
        const intersectingSection = '#' + currentPage.split('.')[1]

        navBar.forEach(link => {
            link.classList.remove('active')
            if(link.getAttribute('href') === intersectingSection){
                link.classList.add('active')
            }   
        })
    },[currentPage])

    return (
        <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
            <Navbar changePage={changeCurrentPage} scroll={allowScroll}/>
            <Indicators />
            <Home />
            <About />
            <Skill />
            <Project />
            <Contact />
        </ThemeContext.Provider>
    )
}

export default App
