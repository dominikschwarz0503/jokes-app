import React from "react";
import "./Credits.css";
import reactLogo from "../../logo.svg";

export default function Credits() {
    return (
        <div className="wrapper">
            <div className="credits-container">
                <div className="technology-stack">
                    <h1 className="credits-headline">
                        Jokes has been made possible thanks to these awesome
                        technologies!
                    </h1>
                    <div className="technology-container">
                        <p>ReactJS</p>
                        <a
                            href="https://reactjs.org/"
                            target={"_blank"}
                            rel={"noreferrer"}
                            className="technology-link"
                        >
                            https://reactjs.org/
                        </a>
                    </div>
                    <div className="technology-container">
                        <p>Create React App</p>
                        <a
                            href="https://create-react-app.dev/"
                            target={"_blank"}
                            rel={"noreferrer"}
                            className="technology-link"
                        >
                            https://create-react-app.dev/
                        </a>
                    </div>
                    <div className="technology-container">
                        <p>Sass: Syntactically Awesome Style Sheets</p>
                        <a
                            href="https://sass-lang.com/"
                            target={"_blank"}
                            rel={"noreferrer"}
                            className="technology-link"
                        >
                            https://sass-lang.com/
                        </a>
                    </div>
                    <div className="technology-container">
                        <p>Axios</p>
                        <a
                            href="https://axios-http.com/"
                            target={"_blank"}
                            rel={"noreferrer"}
                            className="technology-link"
                        >
                            https://axios-http.com/
                        </a>
                    </div>
                    <div className="technology-container">
                        <p>Git</p>
                        <a
                            href="https://git-scm.com/"
                            target={"_blank"}
                            rel={"noreferrer"}
                            className="technology-link"
                        >
                            https://git-scm.com/
                        </a>
                    </div>
                    <div className="technology-container">
                        <p>GitHub</p>
                        <a
                            href="https://github.com/home"
                            target={"_blank"}
                            rel={"noreferrer"}
                            className="technology-link"
                        >
                            https://github.com/home
                        </a>
                    </div>
                    <div className="technology-container">
                        <p>Lodash</p>
                        <a
                            href="https://lodash.com/"
                            target={"_blank"}
                            rel={"noreferrer"}
                            className="technology-link"
                        >
                            https://lodash.com/
                        </a>
                    </div>
                    <div className="technology-container">
                        <p>TypeScript</p>
                        <a
                            href="https://www.typescriptlang.org/"
                            target={"_blank"}
                            rel={"noreferrer"}
                            className="technology-link"
                        >
                            https://www.typescriptlang.org/
                        </a>
                    </div>
                    <div className="technology-container">
                        <p>Jest</p>
                        <a
                            href="https://jestjs.io/"
                            target={"_blank"}
                            rel={"noreferrer"}
                            className="technology-link"
                        >
                            https://jestjs.io/
                        </a>
                    </div>
                    <div className="technology-container">
                        <p>NodeJS</p>
                        <a
                            href="https://nodejs.org/en/"
                            target={"_blank"}
                            rel={"noreferrer"}
                            className="technology-link"
                        >
                            https://nodejs.org/en/
                        </a>
                    </div>
                    <div className="technology-container">
                        <p>NPM</p>
                        <a
                            href="https://www.npmjs.com/"
                            target={"_blank"}
                            rel={"noreferrer"}
                            className="technology-link"
                        >
                            https://www.npmjs.com/
                        </a>
                    </div>
                    <div className="technology-container">
                        <p>Visual Studio Code</p>
                        <a
                            href="https://code.visualstudio.com/"
                            target={"_blank"}
                            rel={"noreferrer"}
                            className="technology-link"
                        >
                            https://code.visualstudio.com/
                        </a>
                    </div>
                    <div className="authors-container">
                        <h2>
                            Built with{" "}
                            <img
                                src={reactLogo}
                                alt="React logo"
                                width={72}
                                height={72}
                            />
                        </h2>
                        <h3>by Dominik, Justin & Max</h3>
                        <p>IT1L Learning Field 8 project</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
