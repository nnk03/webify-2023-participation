import React from "react";
import HomePageComponents from "./HomePageComponents";
// import data from "./data";
import { nanoid } from "nanoid";

export default function HomePage(props) {
  const data = props.dataObjectArray;
  const dataElements = data.map((dataObject) => {
    return <HomePageComponents key={nanoid()} dataObject={dataObject} />;
  });

  return <>{dataElements}</>;
}
