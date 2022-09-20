import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import JokeContainer from "./components/JokeContainer/JokeContainer";
import { useState } from "react";
import Carousel from "./components/Carousel/Carousel";

function App() {
    const [currentSubreddit] = useState("wasletztepreis");
    const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
    const [currentCategory, setCurrentCategory] = useState("Memes");

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
                {currentCategory.match("Memes") ? (
                    <Carousel currentSubreddit={currentSubreddit} />
                ) : (
                    ""
                )}
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
