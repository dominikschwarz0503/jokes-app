import axios from "axios";
import "./Carousel.css";
import { useEffect, useState } from "react";
import CarouselSlide from "./CarouselSlide/CarouselSlide";

/**
 * Renders a carousel
 * @param props
 * @returns
 */
export default function Carousel(props: any) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const url = `https://meme-api.herokuapp.com/gimme/${props.currentSubreddit}/10`;
        axios
            .get(url)
            .then((response) => setData(response.data.memes))
            .catch((error) => console.log(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (data.length !== 0) {
            setIsLoading(false);
        }
    }, [data]);

    return (
        <>
            <div className="carousel-container">
                <div
                    className="carousel-content"
                    onScroll={() => console.log(window.scrollX)}
                >
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        data.map((meme: any, idx) => (
                            <CarouselSlide
                                title={meme.title}
                                author={meme.author}
                                isNsfw={meme.nsfw}
                                imgUrl={meme.url}
                                key={idx}
                                sourceUrl={meme.postLink}
                            />
                        ))
                    )}
                </div>
            </div>
        </>
    );
}
