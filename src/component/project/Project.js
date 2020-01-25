import React, { useRef, useEffect, useContext } from "react";
import { gsap, Power2 } from "gsap";
import ThemeContext from "../../common/ThemeContext";
import "./ProjectStyle.scss";

import Loader from "../loader/Loader";

import ProjectSVGCode from "./ProjectSVGCode";
import ProjectSVGWebsite from "./ProjectSVGWebsite";
import Arrow from "../../common/Arrow";
import DarkWeather from "../../assests/images/darkWeather.jpg";
import ECommmerce from "../../assests/images/eCommerce.jpg";
import MyPortfolio from "../../assests/images/myPortfolio.jpg";
import BookMyEvent from "../../assests/images/bookMyEvent.jpg";
import APS from "../../assests/images/APS.jpg";

import projectAnimate from "./ProjectAnimate";

const Project = props => {
    const { currentTheme } = useContext(ThemeContext);
    const { background, primary, secondary } = currentTheme;

    const large = useRef(window.matchMedia("(min-width: 769px)").matches);
    const slideCountProject = useRef(0);
    const allowClick = useRef(true);
    const imageSliderWidth = useRef(0);
    const textSliderWidth = useRef(0);
    const textSliderHeight = useRef(0);

    const containerProject = useRef(null);
    const headingProject = useRef(null);
    const lineProject = useRef(null);
    const leftContainerProject = useRef(null);
    const rightContainerProject = useRef(null);
    const blockProject = useRef(null);
    const leftArrowProject = useRef(null);
    const rightArrowProject = useRef(null);
    const textSliderProject = useRef(null);
    const imageSliderProject = useRef(null);
    const linksProject = useRef([]);
    const textSlidesProject = useRef([]);
    const textSlidesProjectH2 = useRef([]);
    const textSlidesProjectPara = useRef([]);
    const imageSlidesProject = useRef([]);
    const imageProject = useRef([]);

    const theme = {
        background: background,
        color: primary
    };

    const secondaryColor = {
        color: secondary
    };

    const lineColor = {
        backgroundColor: primary
    };

    const secondaryBG = {
        backgroundColor: secondary
    };

    const animateTextProject = (heading, para, links, prevCount) => {
        const timelineText = gsap.timeline({
            defaults: { opacity: 0, duration: 0.75, ease: Power2.easeInOut }
        });

        const prevH2 = textSlidesProjectH2.current[prevCount];
        const prevPara = textSlidesProjectPara.current[prevCount];
        const prevLink = Array.from(linksProject.current[prevCount].childNodes);

        const xTrans = large.current ? 10 : 5;

        gsap.to(blockProject.current, {
            duration: 0.15,
            x: xTrans,
            ease: Power2.easeOut
        });
        gsap.to(blockProject.current, {
            duration: 0.15,
            x: 0,
            delay: 0.15,
            ease: Power2.easeOut
        });

        large.current
            ? timelineText
                  .to(prevH2, { duration: 0.5, y: -100, opacity: 0 })
                  .to(prevPara, { duration: 0.5, y: -100, opacity: 0 }, "-=0.4")
                  .to(
                      prevLink,
                      {
                          duration: 0.5,
                          y: -100,
                          opacity: 0,
                          stagger: {
                              each: 0.1
                          }
                      },
                      "-=0.3"
                  )
                  .from(heading, { duration: 0.75, y: 100 }, "-=0.1")
                  .from(
                      para,
                      {
                          duration: 0.75,
                          y: 100,
                          stagger: {
                              each: 0.05
                          }
                      },
                      "-=0.65"
                  )
                  .from(
                      links,
                      {
                          duration: 0.75,
                          y: 100,
                          stagger: {
                              each: 0.05
                          }
                      },
                      "-=0.55"
                  )
                  .set(prevH2, { y: 0, opacity: 1 })
                  .set(prevPara, { y: 0, opacity: 1 })
                  .set(prevLink, { y: 0, opacity: 1 })
            : timelineText
                  .from(heading, { delay: 0.4 })
                  .from(
                      para,
                      {
                          y: 100,
                          stagger: {
                              each: 0.05
                          }
                      },
                      "-=0.65"
                  )
                  .from(
                      links,
                      {
                          y: 100,
                          stagger: {
                              each: 0.05
                          }
                      },
                      "-=0.55"
                  );
    };

    const selectTextProject = (count, prevCount) => {
        if (count === 5) {
            animateTextProject(
                textSlidesProjectH2.current[0],
                textSlidesProjectPara.current[0],
                Array.from(linksProject.current[0].childNodes),
                prevCount
            );
        } else if (count === -1) {
            animateTextProject(
                textSlidesProjectH2.current[4],
                textSlidesProjectPara.current[4],
                Array.from(linksProject.current[4].childNodes),
                prevCount
            );
        } else {
            animateTextProject(
                textSlidesProjectH2.current[count],
                textSlidesProjectPara.current[count],
                Array.from(linksProject.current[count].childNodes),
                prevCount
            );
        }
    };

    const changeSlideProject = args => {
        const [leftArrow, rightArrow] = args;

        leftArrow.current.addEventListener("click", () => {
            if (allowClick.current && slideCountProject.current > 0) {
                allowClick.current = !allowClick.current;

                slideCountProject.current--;

                selectTextProject(
                    slideCountProject.current,
                    slideCountProject.current + 1
                );

                if (slideCountProject.current <= -1) {
                    slideCountProject.current = 4;
                }

                imageSliderProject.current.style.transform = `translateX(-${imageSliderWidth.current *
                    slideCountProject.current}px)`;

                window.matchMedia("(min-width: 769px)").matches
                    ? (textSliderProject.current.style.transform = `translateY(-${textSliderHeight.current *
                          slideCountProject.current}px)`)
                    : (textSliderProject.current.style.transform = `translateX(-${textSliderWidth.current *
                          slideCountProject.current}px)`);

                setTimeout(() => {
                    allowClick.current = !allowClick.current;
                }, 1100);
            }
        });

        rightArrow.current.addEventListener("click", () => {
            if (allowClick.current && slideCountProject.current < 4) {
                allowClick.current = !allowClick.current;

                slideCountProject.current++;

                selectTextProject(
                    slideCountProject.current,
                    slideCountProject.current - 1
                );

                if (slideCountProject.current >= 5) {
                    slideCountProject.current = 0;
                }

                imageSliderProject.current.style.transform = `translateX(-${imageSliderWidth.current *
                    slideCountProject.current}px)`;

                window.matchMedia("(min-width: 769px)").matches
                    ? (textSliderProject.current.style.transform = `translateY(-${textSliderHeight.current *
                          slideCountProject.current}px)`)
                    : (textSliderProject.current.style.transform = `translateX(-${textSliderWidth.current *
                          slideCountProject.current}px)`);

                setTimeout(() => {
                    allowClick.current = !allowClick.current;
                }, 1100);
            }
        });
    };

    // lazy loading
    useEffect(() => {
        const imageProject = window.document.querySelectorAll(".image-project");

        imageProject.forEach(image => {
            image.addEventListener("load", () => {
                const loaderCircles = image.previousElementSibling.childNodes;

                props.theme
                    ? loaderCircles.forEach(circle => {
                          setTimeout(() => {
                              circle.style.backgroundColor = "#A13251";
                          }, 75);
                      })
                    : loaderCircles.forEach(circle => {
                          setTimeout(() => {
                              circle.style.backgroundColor = "#008F96";
                          }, 75);
                      });

                image.style.opacity = "1";

                setTimeout(() => {
                    image.previousElementSibling.style.display = "none";
                }, 500);
            });
        });
    }, [props.theme]);

    useEffect(() => {
        changeSlideProject([leftArrowProject, rightArrowProject]);

        imageSliderWidth.current = leftContainerProject.current.getBoundingClientRect().width;
        textSliderWidth.current = rightContainerProject.current.getBoundingClientRect().width;
        textSliderHeight.current = rightContainerProject.current.getBoundingClientRect().height;

        projectAnimate([
            textSlidesProjectH2,
            textSlidesProjectPara,
            blockProject,
            imageSlidesProject,
            headingProject,
            lineProject,
            containerProject,
            leftArrowProject,
            rightArrowProject,
            linksProject,
            rightContainerProject
        ]);
        // eslint-disable-next-line
    }, []);

    // intersection observer for lazy loading
    useEffect(() => {
        const imageProject = window.document.querySelectorAll(".image-project");

        const options = {
            root: leftContainerProject.current
        };

        const lazyObserver = new IntersectionObserver(
            (entries, lazyObserver) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.src = entry.target.dataset.src;
                        lazyObserver.unobserve(entry.target);
                    }
                }, options);
            }
        );

        imageProject.forEach(slide => {
            lazyObserver.observe(slide);
        });
    }, []);

    return (
        <section id="project" style={theme}>
            <div className="test" data-section="project">
                Project
            </div>

            <div ref={containerProject} className="container-project">
                <div className="heading-project">
                    <h1 ref={headingProject} style={secondaryColor}>
                        Project
                    </h1>

                    <span
                        ref={lineProject}
                        style={lineColor}
                        className="line-project"
                    ></span>
                </div>

                <div
                    ref={leftContainerProject}
                    className="left-container-project"
                >
                    <div
                        ref={leftArrowProject}
                        className="left-arrow-container-project"
                    >
                        <Arrow className="left-arrow-project" />
                    </div>

                    <div
                        ref={rightArrowProject}
                        className="right-arrow-container-project"
                    >
                        <Arrow className="right-arrow-project" />
                    </div>

                    <div
                        ref={imageSliderProject}
                        className="image-slider-project"
                    >
                        <div
                            ref={el => imageSlidesProject.current.push(el)}
                            className="image-container-project"
                        >
                            <Loader image={0} />
                            <img
                                ref={el => imageProject.current.push(el)}
                                className="image-project"
                                src=""
                                alt="e-commerce"
                                data-src={ECommmerce}
                            />
                        </div>

                        <div
                            ref={el => imageSlidesProject.current.push(el)}
                            className="image-container-project"
                        >
                            <Loader image={1} />
                            <img
                                ref={el => imageProject.current.push(el)}
                                className="image-project mobile-image-project"
                                src=""
                                alt="arizona public service"
                                data-src={APS}
                            />
                        </div>

                        <div
                            ref={el => imageSlidesProject.current.push(el)}
                            className="image-container-project"
                        >
                            <Loader image={2} />
                            <img
                                ref={el => imageProject.current.push(el)}
                                className="image-project mobile-image-project"
                                src=""
                                alt="portfolio"
                                data-src={MyPortfolio}
                            />
                        </div>

                        <div
                            ref={el => imageSlidesProject.current.push(el)}
                            className="image-container-project"
                        >
                            <Loader image={3} />
                            <img
                                ref={el => imageProject.current.push(el)}
                                className="image-project"
                                src=""
                                alt="dark weather"
                                data-src={DarkWeather}
                            />
                        </div>

                        <div
                            ref={el => imageSlidesProject.current.push(el)}
                            className="image-container-project"
                        >
                            <Loader image={4} />
                            <img
                                ref={el => imageProject.current.push(el)}
                                className="image-project"
                                src=""
                                alt="book my event"
                                data-src={BookMyEvent}
                            />
                        </div>
                    </div>
                </div>

                <div
                    ref={rightContainerProject}
                    className="right-container-project"
                >
                    <div
                        ref={textSliderProject}
                        className="text-slider-project"
                    >
                        <div
                            ref={el => textSlidesProject.current.push(el)}
                            className="text-slide-project"
                        >
                            <h2
                                ref={el => textSlidesProjectH2.current.push(el)}
                            >
                                E-commerce:
                            </h2>

                            <p
                                ref={el =>
                                    textSlidesProjectPara.current.push(el)
                                }
                            >
                                Responsive, full stack, e-commerce web app built
                                using MERN stack with love.
                            </p>

                            <div
                                ref={el => linksProject.current.push(el)}
                                className="links-project"
                            >
                                <div>
                                    <ProjectSVGCode />
                                </div>
                                <div>
                                    <ProjectSVGWebsite />
                                </div>
                            </div>
                        </div>

                        <div
                            ref={el => textSlidesProject.current.push(el)}
                            className="text-slide-project"
                        >
                            <h2
                                ref={el => textSlidesProjectH2.current.push(el)}
                            >
                                Arizona Public Service:
                            </h2>

                            <p
                                ref={el =>
                                    textSlidesProjectPara.current.push(el)
                                }
                            >
                                Cross-platform mobile app built using Xamarin
                                native. I worked on Xamarin iOS fornt-end and
                                integration; and integration of Microsoft's App
                                Center.
                            </p>

                            <div
                                ref={el => linksProject.current.push(el)}
                                className="links-project"
                            >
                                <div>
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.aps.apsconsumerapp"
                                        target="__blank"
                                    >
                                        <ProjectSVGWebsite />
                                    </a>
                                </div>
                                <div className="link-hide-project">
                                    <ProjectSVGCode />
                                </div>
                            </div>
                        </div>

                        <div
                            ref={el => textSlidesProject.current.push(el)}
                            className="text-slide-project"
                        >
                            <h2
                                ref={el => textSlidesProjectH2.current.push(el)}
                            >
                                My Portfolio:
                            </h2>

                            <p
                                ref={el =>
                                    textSlidesProjectPara.current.push(el)
                                }
                            >
                                I made this to improve and practice my front-end
                                skills. This was made using React.js (Hooks).
                            </p>

                            <div
                                ref={el => linksProject.current.push(el)}
                                className="links-project"
                            >
                                <div>
                                    <a
                                        href="https://github.com/FaxMachin3/portfolio"
                                        target="__blank"
                                    >
                                        <ProjectSVGCode />
                                    </a>
                                </div>
                                <div>
                                    <ProjectSVGWebsite />
                                </div>
                            </div>
                        </div>

                        <div
                            ref={el => textSlidesProject.current.push(el)}
                            className="text-slide-project"
                        >
                            <h2
                                ref={el => textSlidesProjectH2.current.push(el)}
                            >
                                Dark Weather:
                            </h2>

                            <p
                                ref={el =>
                                    textSlidesProjectPara.current.push(el)
                                }
                            >
                                A small dark themed weather app built using
                                Python's tkinter Library. Just enter a city or a
                                country name to get the weather report.
                            </p>

                            <div
                                ref={el => linksProject.current.push(el)}
                                className="links-project"
                            >
                                <div>
                                    <a
                                        href="https://github.com/FaxMachin3/weather"
                                        target="__blank"
                                    >
                                        <ProjectSVGCode />
                                    </a>
                                </div>
                                <div className="link-hide-project">
                                    <ProjectSVGWebsite />
                                </div>
                            </div>
                        </div>

                        <div
                            ref={el => textSlidesProject.current.push(el)}
                            className="text-slide-project"
                        >
                            <h2
                                ref={el => textSlidesProjectH2.current.push(el)}
                            >
                                Book My Event:
                            </h2>

                            <p
                                ref={el =>
                                    textSlidesProjectPara.current.push(el)
                                }
                            >
                                This is pure, non-responsive-spaghetti code as
                                this was the first college project I just made
                                to have a taste of web development.
                            </p>

                            <div
                                ref={el => linksProject.current.push(el)}
                                className="links-project"
                            >
                                <div>
                                    <a
                                        href="https://github.com/FaxMachin3/BookMyEvent"
                                        target="__blank"
                                    >
                                        <ProjectSVGCode />
                                    </a>
                                </div>
                                <div className="link-hide-project">
                                    <ProjectSVGWebsite />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        ref={blockProject}
                        style={secondaryBG}
                        className="block-project"
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default Project;
