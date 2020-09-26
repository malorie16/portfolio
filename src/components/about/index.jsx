import React from "react";
import "./index.scss";
import { bioWithClassNames as bio } from "./fixtures";
import Menu from "../menu";

const About = () => {
  return (
    <div className="about">
      <div className="layer">
        <Menu />
      </div>
      <div className="aboutContainer">
        {bio.map((section) => (
          <span key={Math.random()} className={`space word ${section.color}`}>
            {section.word}
          </span>
        ))}
        <span>
          <a
            className="space word white"
            href="https://github.com/malorie16"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub,
          </a>
        </span>
        <span>
          <a
            className="space word linkedin-blue"
            href="https://www.linkedin.com/in/malorie-casimir/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </span>
        <span className="space word lime">or </span>
        <span>
          <a
            className="space word twitter-blue"
            href="https://twitter.com/cazicazz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter.
          </a>
        </span>
      </div>
    </div>
  );
};

export default About;
