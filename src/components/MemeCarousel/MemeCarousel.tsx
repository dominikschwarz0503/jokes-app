import axios from "axios";
import "./MemeCarousel.css";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import CarouselSlide from "./MemeCarouselSlide/MemeCarouselSlide";

/**
 * Renders a carousel
 * @param props
 * @returns
 */
const MemeCarousel = forwardRef((props: any, ref: any) => {
    const [currentSubreddit, setCurrentSubreddit] = useState(
        props.currentSubreddit
    );
    const [subredditHasChanged, setSubredditHasChanged] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isGettingNewData, setIsGettingNewData] = useState(true);
    const [data, setData] = useState<any[]>([]);

    useImperativeHandle(ref, () => ({
        function1(subreddit: string) {
            const carousel = document.querySelector(".carousel-content");
            if (carousel != null) {
                carousel.scrollLeft = 0;
            }
            setIsGettingNewData(true);
            setCurrentSubreddit(subreddit);
            setSubredditHasChanged(true);
        },
    }));

    const loadMemes = () => {
        console.log("getting memes...");
        const url = `https://meme-api.herokuapp.com/gimme/${currentSubreddit}/10`;
        console.log(url);
        axios
            .get(url)
            .then((response) => {
                const newMemes: any = [];
                response.data.memes.forEach((meme: any) => {
                    newMemes.push(meme);
                });

                if (subredditHasChanged) {
                    setData(newMemes);
                } else {
                    setData((oldMemes) => [...oldMemes, ...newMemes]);
                }

                setIsGettingNewData(false);
                setSubredditHasChanged(false);
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
    }, [isGettingNewData, currentSubreddit]);

    useEffect(() => {
        if (data.length !== 0) {
            setIsLoading(false);
            setIsGettingNewData(false);
        }
    }, [data]);

    return (
        <>
            <div className="carousel-container">
                <div
                    className="carousel-content"
                    id="carousel"
                    onScroll={handleScroll}
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
                                subreddit={meme.subreddit}
                            />
                        ))
                    )}
                </div>
            </div>
        </>
    );
});

export default MemeCarousel;
