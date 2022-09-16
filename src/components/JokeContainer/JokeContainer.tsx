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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.currentCategory]);

    const requestJokes = async () => {
        const joke = document.createElement("p");
        const container = document.querySelector(".container");

        const headers = {
            Accept: "application/json",
        };

        try {
            if (navigator.onLine) {
                await axios
                    .get(
                        props.currentCategory === "Dad Jokes"
                            ? URLS.icanhazdadjoke
                            : URLS.chucknorrisapi,
                        { headers }
                    )
                    .then((response) => {
                        setIsConnected(true);

                        if (container?.childNodes !== undefined) {
                            if (container?.childNodes.length >= 2) {
                                container?.children[1].remove();
                            }
                        }

                        if (props.currentCategory === "Chuck Norris Jokes") {
                            joke.innerHTML = response.data.value;
                            joke.classList.add("joke");
                            container?.appendChild(joke);
                        } else if (props.currentCategory === "Dad Jokes") {
                            joke.innerHTML = response.data.joke;
                            joke.classList.add("joke");
                            container?.appendChild(joke);
                        }
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
                container?.appendChild(joke);
            }
        } catch (error) {
            console.log("ERROR", error);
        }
    };

    return (
        <>
            <div className="container">
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="#fffff"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H16C17.1046 21 18 20.1046 18 19V18M8 5C8 6.10457 8.89543 7 10 7H12C13.1046 7 14 6.10457 14 5M8 5C8 3.89543 8.89543 3 10 3H12C13.1046 3 14 3.89543 14 5M14 5H16C17.1046 5 18 5.89543 18 7V10M20 14H10M10 14L13 11M10 14L13 17"
                        stroke="#4A5568"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>

            {isConnected ? (
                <Button event={requestJokes} buttonText="Show me more!" />
            ) : (
                ""
            )}
        </>
    );
}
