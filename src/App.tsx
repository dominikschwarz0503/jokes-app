import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import JokeContainer from "./components/JokeContainer/JokeContainer";
import { useEffect, useState } from "react";
import MemeContainer from "./components/MemeContainer/MemeContainer";

function App() {
    const [currentSubreddit, setCurrentSubreddit] = useState("gymmemes");
    const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
    const [currentCategory, setCurrentCategory] = useState("Memes");

    useEffect(() => {}, [currentSubreddit]);

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

    const changeSubreddit = (subreddit: string) => {
        setCurrentSubreddit(subreddit);
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
                    <MemeContainer changeSubreddit={changeSubreddit} />
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
                {/* <Footer /> */}
            </header>
        </div>
    );
}

export default App;
