import React from "react";
import "./Footer.css";
import reactLogo from "../../logo.svg";

export default function Footer() {
    return (
        <>
            <footer>
                <p>
                    Made with{" "}
                    <img
                        src={reactLogo}
                        width={48}
                        height={48}
                        alt="react logo"
                    />{" "}
                    by Dominik, Justin & Max
                </p>
            </footer>
        </>
    );
}
