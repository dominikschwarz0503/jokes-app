import React from "react";
import "./Navbar.css";
import peepoPic from "../../img/logo192.png";

export default function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <img
                        src={peepoPic}
                        alt="of peepo the frog"
                        width={56}
                        height={48}
                    />
                    <li>Dadjokes Reloaded</li>
                </ul>
            </nav>
        </>
    );
}
