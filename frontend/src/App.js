import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "./utilities/useFetch";
import Carousel from "./components/Carousel";

const App = () => {
  const data = useFetch();
  if (data) {
    console.log(data.sections);
  }

  return (
    <div className="container-fluid d-flex flex-column align-items-center">
      <h1 className="mb-5">Wolt Summer Frontend Assigment</h1>
      {data &&
        data.sections.map((section, index) => (
          <Carousel
            key={index}
            title={section.title}
            restaurants={section.restaurants}
          />
        ))}
    </div>
  );
};

export default App;
