import React, { Component } from "react";
import ThemeContext from "../../common/ThemeContext";
import ErrorSVG from "./ErrorSVG";
import "./ErrorStyle.scss";

class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        };
    }

    handleClick = () => {
        window.document.querySelector("li .home").click();
    };

    componentDidMount() {
        // document.title = "404! Page Not Found.";
        window.location.href = "#error";
    }

    render() {
        if (this.state.hasError) {
            return (
                <ThemeContext.Consumer>
                    {theme => {
                        const { currentTheme } = theme;
                        const { background, primary, secondary } = currentTheme;

                        const runningTheme = {
                            background: background,
                            color: primary
                        };

                        const secondaryColor = {
                            color: secondary
                        };

                        return (
                            <section id="error" style={runningTheme}>
                                <div className="container-error">
                                    <div className="top-container-error">
                                        <ErrorSVG />
                                        <div>
                                            <p>PAGE NOT FOUND!</p>
                                        </div>
                                    </div>
                                    <div className="middle-container-error">
                                        <p>
                                            I find your lack of navigation
                                            disturbing
                                        </p>
                                    </div>
                                    <div
                                        className="bottom-container-error"
                                        onClick={this.handleClick}
                                    >
                                        <p>
                                            <span style={secondaryColor}>
                                                &lt;
                                            </span>
                                            Go Home
                                        </p>
                                    </div>
                                </div>
                            </section>
                        );
                    }}
                </ThemeContext.Consumer>
            );
        } else {
            return this.props.children;
        }
    }
}

export default Error;
