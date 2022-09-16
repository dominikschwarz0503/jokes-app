import { Key } from "react";

export default function Carousel(props: any) {
    console.log(props.content);

    return (
        <>
            <div className="carousel-container">
                <div className="carousel-content">
                    {props.content.map((content: string, key: Key) => (
                        <img src={content} alt="Meme" key={key} />
                    ))}
                </div>
            </div>
        </>
    );
}
