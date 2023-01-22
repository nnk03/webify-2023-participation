import React from "react";
import MovieListHomeCards from "./MovieListHomeCards";
import { nanoid } from "nanoid";

import MovieCard from "./MovieCard";

export default function MovieListHomePage(props) {
  const data = props.dataObjectArray;

  // console.log(data);
  const [requiredDataObject] = data.filter((dataObject) => {
    return dataObject.homeToPageNamed === props.url;
  });
  const title = requiredDataObject.componentHomePageHeading;
  // console.log(title);
  const movieCards = requiredDataObject.movieCardHomePage;
  const elements = movieCards.map((movie) => {
    return <MovieListHomeCards key={nanoid()} movieCardObject={movie} />;
  });

  // console.log(requiredDataObject);
  // if (!requiredDataObject) {
  //   console.log("NOt found");
  // }
  // console.log(props.dataObjectArray);
  return (
    <>
      <div className="movie-list-home-page">
        <div className="movie-list-home-title">
          <h2>
            {/* Animated Movies */}
            {title}
          </h2>
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
