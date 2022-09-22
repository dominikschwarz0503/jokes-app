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
    const [isGettingNewData, setIsGettingNewData] = useState(true);
    const [data, setData] = useState<any[]>([]);

    const loadMemes = async () => {
        const url = `https://meme-api.herokuapp.com/gimme/${props.currentSubreddit}/10`;
        await axios
            .get(url)
            .then((response) => {
                const newMemes: any = [];
                response.data.memes.forEach((meme: any) => {
                    newMemes.push(meme);
                });
                setData((oldMemes) => [...oldMemes, ...newMemes]);
                setIsGettingNewData(false);
            })
            .catch((error) => console.log(error));
    };

    const handleScroll = (event: any) => {
        if (
            window.innerWidth + event.target.scrollLeft + 1 >=
            event.target.scrollWidth
        ) {
            setIsGettingNewData(true);
        }
    };

    useEffect(() => {
        if (isGettingNewData) {
            loadMemes();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isGettingNewData]);

    useEffect(() => {
        if (data.length !== 0) {
            setIsLoading(false);
            setIsGettingNewData(false);
        }
    }, [data]);

    return (
        <>
            <div className="carousel-container">
                <div className="carousel-content" onScroll={handleScroll}>
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
