import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MemeContainer from "./components/MemeContainer/MemeContainer";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import JokeContainer from "./components/JokeContainer/JokeContainer";
import { useState } from "react";

function App() {
    const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
    const [currentCategory, setCurrentCategory] = useState("Dad Jokes");

    const openHamburgerMenu = () => {
        if (!hamburgerMenuIsOpen) {
            setHamburgerMenuIsOpen(true);
        }
    };

    const closeHamburgerMenu = () => {
        if (hamburgerMenuIsOpen) {
            //Wait for the animation to finish, then close
            setTimeout(() => {
                setHamburgerMenuIsOpen(false);
            }, 500);
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
                    <JokeContainer currentCategory={currentCategory} />
                ) : (
                    ""
                )}
                {currentCategory.match("Dad Jokes") ? (
                    <JokeContainer currentCategory={currentCategory} />
                ) : (
                    ""
                )}
                <Footer />
            </header>
        </div>
    );
}

export default App;
