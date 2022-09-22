import { useRef, useState } from "react";
import MemeCarousel from "../MemeCarousel/MemeCarousel";
import SubredditCarousel from "../SubredditCarousel/SubredditCarousel";

export default function MemeContainer(props: any) {
    const childRef = useRef<any>(null);
    const [currentSubreddit, setCurrentSubreddit] = useState("gymmemes");

    const changeSubreddit = (e: any) => {
        const subreddit = e.target.getAttribute("data-subreddit");
        props.changeSubreddit(subreddit);
        setCurrentSubreddit(subreddit);
        childRef.current.function1(subreddit);
    };

    return (
        <>
            <SubredditCarousel
                changeSubreddit={changeSubreddit}
                currentSubreddit={currentSubreddit}
            />
            <MemeCarousel currentSubreddit={currentSubreddit} ref={childRef} />
        </>
    );
}
