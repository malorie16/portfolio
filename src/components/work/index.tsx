import React, { useState } from "react";
import "./index.scss";
import Project from "./project";
import { FlatironProps, KickstarterProps } from "./fixtures";

const Work = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const SliderProps = {
    currentSlide: currentSlide,
    onClick: setCurrentSlide,
  };

  const Slides = [
    <Project {...FlatironProps} {...SliderProps} />,
    <Project {...KickstarterProps} {...SliderProps} />,
  ];

  return <div>{Slides[currentSlide]}</div>;
};

export default Work;
