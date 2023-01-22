import React from "react";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import SimilarMovieCards from "./SimilarMovieCards";

export default function MovieCard(props) {
  const [requiredMovieObject] = props.movieObjectArray.filter((movieObject) => {
    return props.url === movieObject.url;
  });
  // console.log(props.movieObjectArray);
  // console.log(requiredMovieObject);
  const similarMovieArray = props.movieObjectArray.filter((movieObject) => {
    return props.url !== movieObject.url;
  });
  // console.log(similarMovieArray);

  const similarMovieElements = similarMovieArray.map((movieObject) => {
    return <SimilarMovieCards key={nanoid()} movieObject={movieObject} />;
  });

  // console.log(requiredMovieObject);
  // console.log(props.movieObjectArray);
  // console.log(props.nonRequiredElementsArray);
  // const similarMovieElements = props.nonRequiredElementsArray.map((movie) => {
  //   return (
  //     // <div className="similar-movie-image">
  //     //   <img src={movie.imageLink} alt="movie" />
  //     // </div>
  //     <SimilarMovieCards movie={movie} key={nanoid()} />
  //   );
  // });

  return (
    <>
      <div className="movie-card-container">
        <div className="movie-card-img">
          <img src={requiredMovieObject.imageLink} alt="" />
        </div>
        <div className="movie-card-title">
          <h1>{requiredMovieObject.title}</h1>
        </div>
        <div className="movie-card-details">
          <h2>Trailer: </h2>
          <h2>Duration: </h2>
          <h2>Short Description: </h2>
          <h2>Ratings: </h2>
          <h2>Reviews: </h2>
          <h2>Release data: </h2>
          <h2>Where to watch: </h2>
          <h2>Cast: </h2>
        </div>
        <div className="movie-card-similar-movies">
          <div className="similar-movies-title">
            <h2>Similar Movies</h2>
          </div>
          <div className="movie-card-similar-movie-cards">
            {similarMovieElements}
          </div>
        </div>
      </div>
    </>
  );
}
