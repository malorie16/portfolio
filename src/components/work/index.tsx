import React, { useState } from 'react'
import './index.css'
import Slider from 'react-slick'
import Project from './project'
import { FlatironProps } from './fixtures'

const RightArrow = () => (
  <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.24 14.58"><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".8" d="M0 7.29h26.68M19.67.28l7.01 7.01-7.01 7"></path></svg>
)

const LeftArrow = () => (
  <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.24 14.58"><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width=".8" d="M27.24 7.29H.57M7.57 14.29l-7-7 7-7.01"></path></svg>
)

const Work = (props: any) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />
  }

  return (
   <Slider {...settings}>   
    <Project {...FlatironProps} />
   </Slider> 
  )
}

export default Work
