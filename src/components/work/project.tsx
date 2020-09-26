import React, { useState } from "react";
import { Submenu } from "/Users/maloriecasimir/Development/portfolio/src/components/menu/index.js";
import { withRouter } from "react-router-dom";
import { isMobile } from "./fixtures";

const SLIDER_LENGTH = 2;

const Project = (props: any) => {
  const RightArrow = () => (
    <svg
      onClick={() =>
        props.onClick(
          props.currentSlide === SLIDER_LENGTH - 1 ? 0 : props.currentSlide + 1
        )
      }
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27.24 14.58"
    >
      <path
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        stroke-width=".8"
        d="M0 7.29h26.68M19.67.28l7.01 7.01-7.01 7"
      ></path>
    </svg>
  );

  const LeftArrow = () => (
    <svg
      onClick={() =>
        props.onClick(
          props.currentSlide <= 0 ? SLIDER_LENGTH - 1 : props.currentSlide - 1
        )
      }
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27.24 14.58"
    >
      <path
        fill="none"
        stroke="#fff"
        strokeMiterlimit="10"
        stroke-width=".8"
        d="M27.24 7.29H.57M7.57 14.29l-7-7 7-7.01"
      ></path>
    </svg>
  );

  const gifs = [
    <img className="slide" alt="slide-1" src={props.gif1} />,
    <img className="slide" alt="slide-2" src={props.gif2} />,
    <img className="slide" alt="slide-3" src={props.gif3} />,
  ];

  return (
    <div className="work-container">
      <div className="project-info">
        <div
          className={`project-name-container ${props.colorScheme}-scheme-title-bg-color`}
        >
          <div className={`name-1 ${props.colorScheme}-scheme-title-color`}>
            {props.name1}
          </div>
          <img className="title-shape" src={`${props.shape}.svg`} />
          <div className={`name-2 ${props.colorScheme}-scheme-title-color`}>
            {props.name2}
          </div>
          <div className="left-arrow">
            <LeftArrow />
          </div>
          <div className="right-arrow">
            <RightArrow />
          </div>
        </div>
        <div
          className={`project-desc ${props.colorScheme}-scheme-subtitle-bg-color`}
        >
          <div className="project-desc-tech-container">
            <div
              className={`project-desc-item tech ${props.colorScheme}-scheme-subtitle-color`}
            >
              {props.tech}
            </div>
            <Submenu
              isWork={props.location.pathname === "/work"}
              colorScheme={props.colorScheme}
            />
          </div>
          <div
            className={`project-desc-item desc ${props.colorScheme}-scheme-subtitle-color`}
          >
            {props.description}
          </div>
        </div>
      </div>
      <div className={`project-gifs ${isMobile() && "hide"}`}>
        <img src={props.gif1} />
        <img src={props.gif2} />
        <img src={props.gif3} />
      </div>
    </div>
  );
};

export default withRouter(Project);
