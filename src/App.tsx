import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MemeContainer from "./components/MemeContainer/MemeContainer";
import JokeContainer from "./components/JokeContainer/JokeContainer";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import { useState } from "react";

function App() {
    const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

    const openHamburgerMenu = () => {
        setHamburgerMenuIsOpen(true);
    };

    return (
        <div className="App">
            <header className="App-header">
                <HamburgerMenu active={hamburgerMenuIsOpen} />
                <MemeContainer openHamburgerMenu={openHamburgerMenu} />
                <Footer />
            </header>
        </div>
    );
}

export default App;
