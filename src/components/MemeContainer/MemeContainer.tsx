import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import "./MemeContainer.css";

export default function MemeContainer(this: any, props: any) {
    const [currentSubreddit, setCurrentSubreddit] = useState("dankmemes");
    const images: any = ["https://i.redd.it/kfyoyidhs7o91.gif"];

    const URLs = {
        memeapi: `https://meme-api.herokuapp.com/gimme/${currentSubreddit}`,
    };

    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        requestMeme();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const requestMeme = async () => {
        const container = document.querySelector(".meme-container");

        const headers = {
            Accept: "application/json",
        };

        try {
            await axios.get(URLs.memeapi, { headers }).then((response) => {
                setIsConnected(true);

                const meme = response.data.url;

                images.push(meme);
                console.log(images);
            });
        } catch (error) {
            console.log("ERROR", error);
        }
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

            <Carousel content={images} />
            <div className="meme-container"></div>
        </>
    );
}
