import React from 'react'
import './index.scss'
import { NameSVG } from './name.js'

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
