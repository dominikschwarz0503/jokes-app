import axios from "axios";
import "./Carousel.css";
import { useEffect, useState } from "react";

export default function Carousel(props: any) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const url = `https://meme-api.herokuapp.com/gimme/${props.currentSubreddit}/5`;
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

        console.log(data);
    }, [data]);

    return (
        <>
            <div className="carousel-container">
                <div className="carousel-content">
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        data.map((meme: any, key) => (
                            <img src={meme.url} alt="Meme" key={key} />
                        ))
                    )}
                </div>
            </div>
        </>
    );
}
