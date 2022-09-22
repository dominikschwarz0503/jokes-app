import React from "react";
import Carousel from "../Carousel/Carousel";

export default function MemeContainer(props: any) {
    return (
        <>
            <Carousel currentSubreddit={props.currentSubreddit} />
        </>
    );
}
