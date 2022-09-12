import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import JokeContainer from "./components/JokeContainer/JokeContainer";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
                <JokeContainer />
                <Button />
                <Footer />
            </header>
        </div>
    );
}

export default App;
