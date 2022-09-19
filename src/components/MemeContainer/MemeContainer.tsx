import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import "./MemeContainer.css";

export default function MemeContainer(this: any, props: any) {
    const images: any = [];

    const URLs = {
        memeapi: `https://meme-api.herokuapp.com/gimme/${props.currentSubreddit}/5`,
    };

    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        requestMeme();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const requestMeme = async () => {
        const headers = {
            Accept: "application/json",
        };

        try {
            await axios.get(URLs.memeapi, { headers }).then((response) => {
                const memes = response.data.memes;

                memes.forEach((meme: any) => {
                    images.push(meme);
                });

                setHasLoaded(true);
            });
        } catch (error) {
            console.log("ERROR", error);
        }
    };

    return (
        <>
            {hasLoaded ? <Carousel content={images} /> : ""}

            <div className="meme-container"></div>
        </>
    );
}
