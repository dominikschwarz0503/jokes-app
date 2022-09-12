import axios from "axios";
import { config } from "process";
import React from "react";
import "./JokeContainer.css";

export default function JokeContainer() {
    const requestDadJokes = async () => {
        try {
            const response = await axios.get("https://icanhazdadjoke.com/");
            const joke = document.createElement("p");
            const container = document.querySelector(".container");

            joke.innerHTML = response.data.joke;
            joke.classList.add("joke");
            if (container !== undefined) {
                if (container?.childNodes.length >= 1) {
                    container?.children[0].remove();
                }
            }
            container?.append(joke);
        } catch (error) {
            console.log("Oh no, something went wrong!", error);
        }
    };

    return (
        <>
            <div className="container">
                <p>Joke goes here...</p>
            </div>
        </>
    );
}
