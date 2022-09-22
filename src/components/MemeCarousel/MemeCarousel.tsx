import axios from "axios";
import "./MemeCarousel.css";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import CarouselSlide from "./MemeCarouselSlide/MemeCarouselSlide";

/**
 * Renders a carousel
 * @param props
 * @returns
 */
const Carousel = forwardRef((props: any, ref: any) => {
    const [currentSubreddit, setCurrentSubreddit] = useState(
        props.currentSubreddit
    );
    const [isLoading, setIsLoading] = useState(true);
    const [isGettingNewData, setIsGettingNewData] = useState(true);
    const [data, setData] = useState<any[]>([]);

    useImperativeHandle(ref, () => ({
        loadMoreMemes(subreddit: any) {
            setCurrentSubreddit(props.currentSubreddit);
            loadMemes();
        },
    }));

    const loadMemes = async () => {
        const url = `https://meme-api.herokuapp.com/gimme/${currentSubreddit}/10`;
        await axios
            .get(url)
            .then((response) => {
                const newMemes: any = [];
                response.data.memes.forEach((meme: any) => {
                    newMemes.push(meme);
                });

                // setData(newMemes);

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
});

export default Carousel;
