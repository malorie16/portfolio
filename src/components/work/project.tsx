import React, { useState } from 'react'
// import 'src/components/work/index.css'
import Slider from 'react-slick'

const RightArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.24 14.58"><path fill="none" stroke="#fff" strokeMiterlimit="10" stroke-width=".8" d="M0 7.29h26.68M19.67.28l7.01 7.01-7.01 7"></path></svg>
)

const LeftArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.24 14.58"><path fill="none" stroke="#fff" strokeMiterlimit="10" stroke-width=".8" d="M27.24 7.29H.57M7.57 14.29l-7-7 7-7.01"></path></svg>
)

const Project = (props: any) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500
  }

 return (
  <div className="work-container">
    <div className="project-info">
       <div className={`project-name-container ${props.colorScheme}-scheme-title-bg-color`}>
          <span className={`name-1 ${props.colorScheme}-scheme-title-color`}>{props.name1}</span><span className={`name-2 ${props.colorScheme}-scheme-title-color`}>{props.name2}</span>
         <div className="left-arrow">

          <LeftArrow />
          </div>
         <div className="right-arrow">

          <RightArrow />
          </div>
      </div>
      <div className="project-desc">
        {props.description}
      </div>
    </div>
    <div className="project-gifs">
      <Slider {...settings}>
        <div>
          <img className="slide" src={props.gif1} />
        </div>
        <div>
          <img className="slide" src={props.gif2} />
        </div>
        <div>
          <img className="slide" src={props.gif3} />
        </div>
      </Slider> 
    </div>
  </div>
 )
}

export default Project
