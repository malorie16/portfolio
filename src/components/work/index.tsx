import React, { useState } from "react";
import "./index.scss";
import Project from "./project";
import { FlatironProps, KickstarterProps } from "./fixtures";

const Work = (props: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const SliderProps = {
    currentSlide: currentSlide,
    onClick: setCurrentSlide,
  };

  const Slides = [
    <Project {...FlatironProps} {...SliderProps} />,
    <Project {...KickstarterProps} {...SliderProps} />,
  ];

  return (
    <div>
      {Slides[currentSlide]}
      {/* <Project {...FlatironProps} /> */}
    </div>
  );
};

export default Work;
