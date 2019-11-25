import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "../home/Home";
import About from "../about/About";
import Skill from "../skill/Skill";
import Project from "../project/Project";
import Contact from "../contact/Contact";
import ThemeContext from "../../common/ThemeContext";
import Navbar from "../navbar/Navbar";
import Error from "../error/Error";

function App() {
    const [theme, changeTheme] = useState(true);
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
    return (
        <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/skill" component={Skill} />
                    <Route path="/project" component={Project} />
                    <Route path="/contact" component={Contact} />
                    <Route component={Error} />
                </Switch>
            </Router>
        </ThemeContext.Provider>
    );
}

export default App;
