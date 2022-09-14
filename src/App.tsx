import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MemeContainer from "./components/MemeContainer/MemeContainer";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import { useState } from "react";

function App() {
    const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

    const openHamburgerMenu = () => {
        if (!hamburgerMenuIsOpen) {
            setHamburgerMenuIsOpen(true);
        }
    };

    const closeHamburgerMenu = () => {
        if (hamburgerMenuIsOpen) {
            setHamburgerMenuIsOpen(false);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <Navbar navText="Memes" openHamburgerMenu={openHamburgerMenu} />
                {hamburgerMenuIsOpen ? (
                    <HamburgerMenu
                        active={hamburgerMenuIsOpen}
                        closeHamburgerMenu={closeHamburgerMenu}
                    />
                ) : (
                    ""
                )}
                {/* <JokeContainer /> */}
                <MemeContainer />
                <Footer />
            </header>
        </div>
    );
}

export default App;
