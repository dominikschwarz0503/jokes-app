import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MemeContainer from "./components/MemeContainer/MemeContainer";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar navText="Memes" />
                <MemeContainer />
                <Footer />
            </header>
        </div>
    );
}

export default App;
