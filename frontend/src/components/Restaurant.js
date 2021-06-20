import React from "react";
import { Blurhash } from "react-blurhash";
const Restaurant = (props) => {
  return (
    <div className="d-flex flex-column mx-3 align-items-center">
      <Blurhash
        hash={props.blurhash}
        width={400}
        height={300}
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />
      <div>{props.name}</div>
    </div>
  );
};

export default Restaurant;
