import React from "react";
import { Link } from "react-router-dom";
export default function SimilarMovieCards(props) {
  // console.log(props.movieObject.url);
  return (
    <div className="similar-movie-image">
      <Link to={`/${props.movieObject.url}`}>
        <img src={props.movieObject.imageLink} alt="movie" />
      </Link>
    </div>
  );
}
