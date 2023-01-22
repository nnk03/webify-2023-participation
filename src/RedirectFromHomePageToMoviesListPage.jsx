import React from "react";
import { useParams } from "react-router-dom";
// import HorrorHome from "./horror/HorrorHome";
// import RomanticComedyHome from "./romanticComedy/RomanticComedyHome";
// import AnimationHome from "./animation/AnimationHome";
// import ActionMoviesHome from "./actionMovies/ActionMoviesHome";
// import ThrillingMysteriesHome from "./thrillingMysteries/ThrillingMysteriesHome";
// import NotFound from "./NotFound";
import MovieListHomePage from "./MovieListHomePage";
import NotFound from "./NotFound";
import MovieCard from "./MovieCard";

// the idea was to take the url parameter and render the component dynamically
// but now have to use if else statements

export default function RedirectFromHomePageToMoviesListPage(props) {
  const { enteredUrl } = useParams();
  const data = props.dataObjectArray;
  // const enteredUrlCapitalized = `${enteredUrl
  //   .charAt(0)
  //   .toUpperCase()}${enteredUrl.slice(1)}Home`;
  // console.log(enteredUrlCapitalized);
  // const element = <HorrorHome />;
  let element;
  if (
    enteredUrl === "horror" ||
    enteredUrl === "romanticComedy" ||
    enteredUrl === "animation" ||
    enteredUrl === "actionMovies" ||
    enteredUrl === "thrillingMysteries"
  ) {
    element = (
      <MovieListHomePage
        dataObjectArray={props.dataObjectArray}
        url={enteredUrl}
      />
    );
  } else {
    const [requiredDataObject] = data.filter((dataObject) => {
      return dataObject.movieCardHomePage.filter((movie) => {
        return movie.url === enteredUrl;
      });
    });
    // console.log(requiredDataObject);
    // const nonRequiredElements = data.filter((dataObject) => {
    //   return dataObject.movieCardHomePage.filter((movie) => {
    //     return movie.url !== enteredUrl;
    //   });
    // });
    // console.log(requiredDataObject);
    element = (
      <MovieCard
        url={enteredUrl}
        movieObjectArray={requiredDataObject.movieCardHomePage}
        // nonRequiredElementsArray={nonRequiredElements}
      />
    );
  }
  // else {
  //   element = <NotFound />;
  // }

  // if (enteredUrl === "horror") {
  //   element = (
  //     <HorrorHome dataObjectArray={props.dataObjectArray} url="horror" />
  //   );
  // } else if (enteredUrl === "romanticComedy") {
  //   element = (
  //     <RomanticComedyHome
  //       dataObjectArray={props.dataObjectArray}
  //       url="romanticComedy"
  //     />
  //   );
  // } else if (enteredUrl === "animation") {
  //   element = (
  //     <AnimationHome dataObjectArray={props.dataObjectArray} url="animation" />
  //   );
  // } else if (enteredUrl === "actionMovies") {
  //   element = (
  //     <ActionMoviesHome
  //       dataObjectArray={props.dataObjectArray}
  //       url="actionMovies"
  //     />
  //   );
  // } else if (enteredUrl === "thrillingMysteries") {
  //   element = (
  //     <ThrillingMysteriesHome
  //       dataObjectArray={props.dataObjectArray}
  //       url="thrillingMysteries"
  //     />
  //   );
  // } else {
  //   element = <NotFound />;
  // }

  return (
    <>
      {element}
      {/* {constElement} */}
    </>
  );
}
