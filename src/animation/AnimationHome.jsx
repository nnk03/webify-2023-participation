import React from "react";
import AnimationHomeMovieCards from "./AnimationHomeMovieCards";
import { nanoid } from "nanoid";

import MovieCard from "../MovieCard";

export default function AnimationHome(props) {
  const data = props.dataObjectArray;

  // console.log(data);
  const [requiredDataObject] = data.filter(
    (dataObject) => dataObject.homeToPageNamed === props.url
  );
  const movieCards = requiredDataObject.movieCardHomePage;

  const elements = movieCards.map((movie) => {
    return <AnimationHomeMovieCards key={nanoid()} movieCardObject={movie} />;
  });

  // console.log(requiredDataObject);
  // if (!requiredDataObject) {
  //   console.log("NOt found");
  // }
  // console.log(props.dataObjectArray);
  return (
    <>
      <div className="movie-list-home-page">
        <div className="animation-home-title">
          <h2>Animated Movies</h2>
        </div>
        {/* <div className="movie-desc-box">
        <div className="movie-title"></div>
        <div className="movie-img"></div>
        <div className="movie-desc"></div>
      </div> */}
        <div className="movie-cards-home-page">{elements}</div>
      </div>
    </>
  );
}
