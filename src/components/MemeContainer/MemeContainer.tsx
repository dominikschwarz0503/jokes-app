import axios from "axios";
import { useEffect } from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import "./MemeContainer.css";

const URLs = { memeapi: "https://meme-api.herokuapp.com/gimme" };

export default function MemeContainer() {
    useEffect(() => {
        requestMeme();
    }, []);

    const requestMeme = async () => {
        const headers = {
            Accept: "application/json",
        };

        try {
            await axios.get(URLs.memeapi, { headers }).then((response) => {
                const meme = document.createElement("img");
                const container = document.querySelector(".container");

                if (container?.childNodes !== undefined) {
                    if (container?.childNodes.length >= 1) {
                        container?.children[0].remove();
                    }
                }

                meme.setAttribute("src", response.data.url);
                meme.setAttribute("width", "256");
                meme.setAttribute("height", "256");
                meme.classList.add("meme");
                container?.append(meme);
            });
        } catch (error) {
            console.log("Oh no, something went wrong!", error);
        }
    };

    return (
        <>
            <Navbar navText="Memes" />
            <div className="container"></div>
            <Button event={requestMeme} buttonText="Give me more memes!" />
        </>
    );
}
