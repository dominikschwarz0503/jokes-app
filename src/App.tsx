import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MemeContainer from "./components/MemeContainer/MemeContainer";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import JokeContainer from "./components/JokeContainer/JokeContainer";
import { useState } from "react";

function App() {
    const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
    const [currentCategory, setCurrentCategory] = useState("Memes");

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
                <Navbar
                    navText={currentCategory}
                    openHamburgerMenu={openHamburgerMenu}
                />
                {hamburgerMenuIsOpen ? (
                    <HamburgerMenu
                        active={hamburgerMenuIsOpen}
                        closeHamburgerMenu={closeHamburgerMenu}
                        setCurrentCategory={(p: any) => setCurrentCategory(p)}
                    />
                ) : (
                    ""
                )}
                {currentCategory.match("Memes") ? <MemeContainer /> : ""}
                {currentCategory.match("Chuck Norris Jokes") ? (
                    <JokeContainer />
                ) : (
                    ""
                )}
                <Footer />
            </header>
        </div>
    );
}

export default App;
