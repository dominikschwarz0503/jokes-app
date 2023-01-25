import React from "react";
import "./SubredditCarousel.scss";
import ichIel from "../../img/subreddit-ich_iel.png";
import dankMemes from "../../img/subreddit-dankmemes.png";
import gymMemes from "../../img/subreddit-gymmemes.png";
import kreisWichs1 from "../../img/subreddit-kreiswichs1.png";
import memes from "../../img/subreddit-memes.png";
import wasLetztePreis from "../../img/subreddit-wasletztepreis.png";

/**
 * Renders a subreddit carousel to easily switch between different subreddits
 * @param props
 * @returns
 */
export default function SubredditCarousel(props: any) {
  return (
    <>
      <div className="subreddit-container">
        <div className="subreddit-icon active">
          <img
            src={wasLetztePreis}
            alt="Subreddit"
            width={48}
            height={48}
            onClick={(e) => props.changeSubreddit(e)}
            data-subreddit="wasletztepreis"
          />
        </div>
        <div className="subreddit-icon">
          <img
            src={ichIel}
            alt="Subreddit"
            width={48}
            height={48}
            onClick={(e) => props.changeSubreddit(e)}
            data-subreddit="ich_iel"
          />
        </div>
        <div className="subreddit-icon">
          <img
            src={dankMemes}
            alt="Subreddit"
            width={48}
            height={48}
            onClick={(e) => props.changeSubreddit(e)}
            data-subreddit="dankmemes"
          />
        </div>
        <div className="subreddit-icon">
          <img
            src={gymMemes}
            alt="Subreddit"
            width={48}
            height={48}
            onClick={(e) => props.changeSubreddit(e)}
            data-subreddit="gymmemes"
          />
        </div>
        <div className="subreddit-icon">
          <img
            src={kreisWichs1}
            alt="Subreddit"
            width={48}
            height={48}
            onClick={(e) => props.changeSubreddit(e)}
            data-subreddit="kreiswichs"
          />
        </div>
        <div className="subreddit-icon">
          <img
            src={memes}
            alt="Subreddit"
            width={48}
            height={48}
            onClick={(e) => props.changeSubreddit(e)}
            data-subreddit="memes"
          />
        </div>
      </div>
    </>
  );
}
