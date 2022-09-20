import React, { useState } from "react";
import "./CarouselSlide.css";
export default function CarouselSlide(props: any) {
    const [isNsfw, setIsNsfw] = useState(false);

    const requestFullScreen = (e: any) => {
        document.querySelector(".meme-image")?.requestFullscreen();
    };

    return (
        <>
            <div className="slide" key={props.keyProp}>
                <h1 className="meme-title">{props.title}</h1>
                <p className="author-text">posted by u/{props.author}</p>
                {props.isNsfw && !isNsfw ? (
                    <span
                        className="nsfw-marker"
                        onClick={() => setIsNsfw(true)}
                    >
                        NSFW
                    </span>
                ) : (
                    <img
                        className="meme-image"
                        src={props.imgUrl}
                        alt="Meme"
                        onClick={requestFullScreen}
                    />
                )}
            </div>
        </>
    );
}
