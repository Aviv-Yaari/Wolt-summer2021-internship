import React, { useReducer, useState } from "react";
import Restaurant from "./Restaurant";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const initialState = { index: 1, prev: 0, next: 2 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        index: (state.index + 1) % 10,
        prev: (state.prev + 1) % 10,
        next: (state.next + 1) % 10,
      };
    case "decrement":
      return {
        index: (state.index + 9) % 10,
        prev: (state.prev + 9) % 10,
        next: (state.next + 9) % 10,
      };
    default:
      throw new Error();
  }
};

const Carousel = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(
    "prev " + state.prev + " index " + state.index + " next " + state.next
  );

  const restComp = props.restaurants.map((restaurant, i) => (
    <Restaurant
      key={restaurant.blurhash}
      blurhash={restaurant.blurhash}
      name={restaurant.name}
      online={restaurant.online}
    />
  ));

  return (
    <div className="mb-5">
      <h2>{props.title}</h2>
      <section className="d-flex">
        <button className="btn" onClick={() => dispatch({ type: "decrement" })}>
          <ArrowBackIosIcon />
        </button>

        {restComp[state.prev]}
        {restComp[state.index]}
        {restComp[state.next]}

        <button className="btn" onClick={() => dispatch({ type: "increment" })}>
          <ArrowForwardIosIcon />
        </button>
      </section>
    </div>
  );
};

export default Carousel;
