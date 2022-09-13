import React from "react";
import "./Navbar.css";
import peepoPic from "../../img/logo192.png";
import hamburgerIcon from "../../img/hamburger-icon.svg";

export default function Navbar(props: any) {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <img
                            src={peepoPic}
                            alt="of peepo the frog"
                            width={56}
                            height={48}
                        />
                    </li>
                    <li>{props.navText}</li>
                    <li>
                        <img
                            src={hamburgerIcon}
                            alt="hamburger icon"
                            className="hamburger-icon"
                        />
                    </li>
                </ul>
            </nav>
        </>
    );
}
