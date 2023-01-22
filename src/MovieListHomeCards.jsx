import React from "react";
import { Link } from "react-router-dom";

export default function MovieListHomeCards(props) {
  const movieCard = props.movieCardObject;
  // console.log(movieCard);
  // console.log(movieCard.url);
  const url = movieCard.url;
  return (
    <>
      <div className="movie-card-desc-box">
        <div className="movie-title">
          <h2>{`${movieCard.index}. ${movieCard.title}`}</h2>
        </div>
        <div className="movie-img">
          <Link
            // to={`/${movieCard.url}`}
            // to="#"
            to={`/${url}`}
          >
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
