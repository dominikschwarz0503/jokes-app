import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./JokeContainer.css";

const URLS = {
    icanhazdadjoke: "https://icanhazdadjoke.com/",
    chucknorrisapi: "https://api.chucknorris.io/jokes/random",
};

export default function JokeContainer(props: any) {
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        requestJokes();
    });

    const requestJokes = async () => {
        const joke = document.createElement("p");
        const container = document.querySelector(".container");

        const headers = {
            Accept: "application/json",
        };

        try {
            if (navigator.onLine) {
                await axios
                    .get(URLS.chucknorrisapi, { headers })
                    .then((response) => {
                        setIsConnected(true);

                        if (container?.childNodes !== undefined) {
                            if (container?.childNodes.length >= 1) {
                                container?.children[0].remove();
                            }
                        }

                        joke.innerHTML = response.data.value;
                        joke.classList.add("joke");
                        container?.append(joke);
                    });
            } else {
                setIsConnected(false);
                if (container?.childNodes !== undefined) {
                    if (container?.childNodes.length >= 1) {
                        container?.children[0].remove();
                    }
                }

                const joke = document.createElement("p");
                joke.innerHTML = "No internet connection.";
                joke.classList.add("joke");
                container?.append(joke);
            }
        } catch (error) {
            console.log("ERROR", error);
        }
    };

    return (
        <>
            <div className="container"></div>
            {isConnected ? (
                <Button event={requestJokes} buttonText="Show me more!" />
            ) : (
                ""
            )}
        </>
    );
}
