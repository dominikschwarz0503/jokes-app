import axios from "axios";
import Button from "../Button/Button";
import "./JokeContainer.css";

const URLS = {
    icanhazdadjoke: "https://icanhazdadjoke.com/",
    chucknorrisapi: "https://api.chucknorris.io/jokes/random",
    memeapi: "https://meme-api.herokuapp.com/gimme",
};

export default function JokeContainer() {
    const requestDadJokes = async () => {
        const headers = {
            Accept: "application/json",
        };

        try {
            await axios
                .get(URLS.chucknorrisapi, { headers })
                .then((response) => {
                    const joke = document.createElement("p");
                    const container = document.querySelector(".container");

                    if (container?.childNodes !== undefined) {
                        if (container?.childNodes.length >= 1) {
                            container?.children[0].remove();
                        }
                    }

                    joke.innerHTML = response.data.value;
                    joke.classList.add("joke");
                    container?.append(joke);
                });
        } catch (error) {
            console.log("Oh no, something went wrong!", error);
        }
    };

    return (
        <>
            <div className="container"></div>
            <Button event={requestDadJokes} />
        </>
    );
}
