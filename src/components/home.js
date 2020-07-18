import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/home.css'
import { MediaBox, CardPanel } from 'react-materialize'
import { NameSVG } from './name'

const Home = () => {
  return (
    <div id="home-container">
      <div className="title">
        <NameSVG />
      </div>
      <div>
        Full Stack Web Developer
      </div>
      <div>
        <a href="https://www.linkedin.com/in/malorie-casimir/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
      </div>
    </div>
  )
}

export default Home
