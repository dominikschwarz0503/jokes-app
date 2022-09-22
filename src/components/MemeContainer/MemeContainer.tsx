import { forwardRef, useImperativeHandle, useRef } from "react";
import MemeCarousel from "../MemeCarousel/MemeCarousel";
import SubredditCarousel from "../SubredditCarousel/SubredditCarousel";

const MemeContainer = forwardRef((props: any, ref: any) => {
    const childRef = useRef<any>(null);
    let subreddit: any;

    const changeSubreddit = (e: any) => {
        subreddit = e.target.getAttribute("data-subreddit");
        props.changeSubreddit(subreddit);
    };

    useImperativeHandle(ref, () => ({
        childFunction1() {
            childRef.current.loadMoreMemes(subreddit);
        },
    }));

    return (
        <>
            <SubredditCarousel changeSubreddit={changeSubreddit} />
            <MemeCarousel
                currentSubreddit={props.currentSubreddit}
                ref={childRef}
            />
        </>
    );
});

export default MemeContainer;
