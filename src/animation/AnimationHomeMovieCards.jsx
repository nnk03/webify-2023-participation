import React from "react";
import { Link } from "react-router-dom";

export default function AnimationHomeMovieCards(props) {
  const movieCard = props.movieCardObject;
  console.log(movieCard);

  return (
    <>
      <div className="movie-card-desc-box">
        <div className="movie-title">
          {`${movieCard.index}. ${movieCard.title}`}
        </div>
        <div className="movie-img">
          <Link to="#">
            <img src={`${movieCard.imageLink}`} alt="image" />
          </Link>
        </div>
        <div className="movie-desc">
          <h3 className="movie-card-description">{`${movieCard.movieDesc}`}</h3>
        </div>
      </div>
    </>
  );
}
