import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import JokeContainer from "./components/JokeContainer/JokeContainer";
import { useRef, useState } from "react";
import MemeContainer from "./components/MemeContainer/MemeContainer";

function App() {
    const childRef = useRef<any>(null);
    const [currentSubreddit, setCurrentSubreddit] = useState("wasletztepreis");
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

    const changeSubreddit = (subreddit: string) => {
        console.log("changed memes!");
        setCurrentSubreddit(subreddit);
        childRef?.current?.childFunction1();
    };

    return (
        <div className="App">
            <header className="App-header">
                <Navbar
                    navText={currentSubreddit}
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
                    <MemeContainer
                        currentSubreddit={currentSubreddit}
                        changeSubreddit={changeSubreddit}
                        ref={childRef}
                    />
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
