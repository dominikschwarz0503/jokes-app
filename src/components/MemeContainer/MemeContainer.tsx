import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Button from "../Button/Button";
import "./MemeContainer.css";

const URLs = { memeapi: "https://meme-api.herokuapp.com/gimme/ich_iel" };

export default function MemeContainer(props: any) {
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        requestMeme();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isConnected]);

    const requestMeme = useCallback(async () => {
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

                    getMemeFromContainer(response.data.url);
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
    }, []);

    const getMemeFromContainer = async (memePic: string) => {
        try {
            await fetch(memePic, {
                mode: "no-cors",
            })
                .then((response) => response.blob())
                .then((myBlob) => {
                    const objectURL = URL.createObjectURL(myBlob);
                    const link = document.querySelector(".download-link");
                    link?.setAttribute("href", objectURL);
                    link?.setAttribute("download", "meme.jpg");
                });
        } catch (error) {
            console.log("Error happened", error);
        }
    };

    return (
        <>
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
                <a className="download-link">Or download this meme</a>
            ) : (
                ""
            )}
        </>
    );
}
