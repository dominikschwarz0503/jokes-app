import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./MemeContainer.css";
import { saveAs } from "file-saver";

export default function MemeContainer(this: any, props: any) {
    const [currentSubreddit, setCurrentSubreddit] = useState("ich_iel");

    const URLs = {
        memeapi: `https://meme-api.herokuapp.com/gimme/${currentSubreddit}`,
    };

    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        requestMeme();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const requestMeme = async () => {
        const container = document.querySelector(".container");

        const headers = {
            Accept: "application/json",
        };

        try {
            if (navigator.onLine) {
                await axios.get(URLs.memeapi, { headers }).then((response) => {
                    setIsConnected(true);

                    const meme = document.createElement("img");

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

    const downloadImage = () => {
        //Grab the image source
        const image = document
            .querySelector(".container")
            ?.firstElementChild?.getAttribute("src");

        //download to device
        saveAs(image as string, "meme.png");
    };

    const getSelectedSubreddit = (event: any) => {
        setCurrentSubreddit(event.target.value);
    };

    return (
        <>
            <select
                name="memes"
                id="subreddit-menu"
                onChange={getSelectedSubreddit}
            >
                <option value="Choose a Subreddit" disabled defaultChecked>
                    Choose a subreddit
                </option>
                <option value="ich_iel">ich_iel</option>
                <option value="dankmemes">dankmemes</option>
                <option value="memes">Memes</option>
                <option value="programmerhumor">Programmer Humor</option>
            </select>

            <div className="container"></div>
            {isConnected ? (
                <Button
                    className=""
                    event={requestMeme}
                    buttonText="Give me more memes!"
                />
            ) : (
                ""
            )}
            {isConnected ? (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a className="download-link" onClick={downloadImage}>
                    Or download this meme
                </a>
            ) : (
                ""
            )}
        </>
    );
}
