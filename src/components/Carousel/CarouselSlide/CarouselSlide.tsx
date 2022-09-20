import { useState } from "react";
import "./CarouselSlide.css";
import { truncate } from "lodash";
export default function CarouselSlide(props: any) {
    const [isNsfw, setIsNsfw] = useState(true);

    const requestFullScreen = (e: any) => {
        e.target?.requestFullscreen();
    };

    const cutString = (string: string) => {
        return truncate(string, {
            length: 120,
        });
    };

    return (
        <>
            <div className="slide" key={props.keyProp}>
                <h1 className="meme-title">{cutString(props.title)}</h1>
                <p className="author-text">posted by u/{props.author}</p>
                {props.isNsfw && isNsfw ? (
                    <span
                        className="nsfw-marker"
                        onClick={() => setIsNsfw(false)}
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
                <a href={props.sourceUrl} className="source-link">
                    View original Post
                </a>
                {!isNsfw ? (
                    <span
                        onClick={() => setIsNsfw(true)}
                        className="nsfw-marker"
                    >
                        Mark as NSFW
                    </span>
                ) : (
                    ""
                )}
            </div>
        </>
    );
}