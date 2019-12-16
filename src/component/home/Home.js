import React from "react";
// import Navbar from "../navbar/Navbar"
import ThemeContext from "../../common/ThemeContext";

const Home = () => {
    const { currentTheme } = React.useContext(ThemeContext);
    const { background, primary } = currentTheme;
    const theme = {
        background: background,
        color: primary
    };
    return (
        <section id="home" style={theme}>
            <div className="test" data-section="home">Home</div>

            <div className="left-container-home">
                <div>
                    <p>Hi!</p>
                    <p>My name is Subham Raj.</p>
                    <p>I am a Web Developers</p>
                </div>
                <div>
                    <button></button>
                    <button></button>
                </div>
            </div>

            <div className="right-container-home">
                <svg>
                </svg>
            </div>

            <div className="arrow-down">
                
            </div>

        </section>
    );
};

export default Home;
