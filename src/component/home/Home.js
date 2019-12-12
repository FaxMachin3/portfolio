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
        </section>
    );
};

export default Home;
