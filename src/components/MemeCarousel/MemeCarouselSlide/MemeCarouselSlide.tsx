import { useState } from "react";
import "./MemeCarouselSlide.css";
import truncate from "lodash/truncate";

export default function CarouselSlide(props: any) {
    const [isNsfw, setIsNsfw] = useState(true);

    const requestFullScreen = (e: any) => {
        e.target?.requestFullscreen();
    };

    const cutString = (string: string) => {
        if (string.length <= 1) {
            return "A meme";
        } else {
            return truncate(string, {
                length: 120,
            });
        }
    };

    return (
        <>
            <div className="slide" key={props.keyProp}>
                <h1 className="subreddit-title">r/{props.subreddit}</h1>
                <h2 className="meme-title">{cutString(props.title)}</h2>
                <p className="author-text">
                    {" "}
                    posted by{" "}
                    <a
                        href={`https://reddit.com/user/${props.author}`}
                        className="source-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        u/{props.author}
                    </a>
                </p>
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
                <a
                    href={props.sourceUrl}
                    className="source-link"
                    target="_blank"
                    rel="noreferrer"
                >
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
