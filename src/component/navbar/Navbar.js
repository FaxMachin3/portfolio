import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarStyle.scss";
import ThemeContext from "../../common/ThemeContext";
import ToggleButton from "../button/ToggleButton";

const Navbar = () => {
    const { currentTheme } = React.useContext(ThemeContext);
    const { background, primary } = currentTheme;
    const textColor = {
        color: primary
    };
    const bgColor = {
        background: primary
    }
    return (
        <nav className="nav-bar" style={{ background: background }}>
            <h1 className="logo">
                <NavLink style={textColor} to="/">
                    SR
                </NavLink>
            </h1>
            <ul className="nav-links">
                <li>
                    <NavLink exact className="link" style={textColor} to="/">
                        Home<span style={bgColor} className="line"></span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="link" style={textColor} to="/about">
                        About<span style={bgColor} className="line"></span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="link" style={textColor} to="/skill">
                        Skill<span style={bgColor} className="line"></span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="link" style={textColor} to="/project">
                        Project<span style={bgColor} className="line"></span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="link" style={textColor} to="/contact">
                        Contact<span style={bgColor} className="line"></span>
                    </NavLink>
                </li>
                <li>
                    <ToggleButton />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
