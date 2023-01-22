import React from "react";
import { Link } from "react-router-dom";
export default function HomePageComponents(props) {
  return (
    <div className="home-page-components">
      <div className="image-link">
        <Link to={`/${props.dataObject.homeToPageNamed}`} target={"_blank"}>
          <img
            src={props.dataObject.linkOfImage}
            alt={props.dataObject.altImageName}
          />
        </Link>
      </div>

      <h3>{props.dataObject.componentHomePageHeading}</h3>
    </div>
  );
}
