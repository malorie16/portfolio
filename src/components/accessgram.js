import React from 'react'
import {CardPanel} from 'react-materialize'
import '../stylesheets/accessgram.css'

const AccessGram = () => {

  return (
    <div id='holder'>
      <CardPanel className="heading teal lighten-4 black-text">
          <span>   Access Gram  </span>
          <div className='stack-properties'><a href='https://github.com/malorie16/Access-Gram' target="_blank" rel="noopener noreferrer">Github Repo</a> + <a href='https://www.youtube.com/watch?v=6zZ0MD9fsPs' target="_blank" rel="noopener noreferrer">Demo</a> + <a href='https://access-gram.herokuapp.com/' target="_blank" rel="noopener noreferrer">Live</a></div>
      </CardPanel>
      <div className='info'>
      <CardPanel className="description ag">
          <span>As the name implies, we built Access Gram with Instagram in mind. I've been looking forward to getting my feet wet with social media since I started learning how to code and so I took this project as an opportunity. Access Gram is built with Ruby and Ruby on Rails. I designed the site with custom CSS. I'm enamored by interactive UIs and knew I wanted this site to have some motion. I used GIFs for a few of the backgrounds to achieve this. Access Gram is still changing and I'll eventually integrate likes, comments and chat. </span>
      </CardPanel>
      <CardPanel className="project-stack">
          <div className='stack-header'>Tech Stack</div>
          <div className='stack-properties'>Ruby</div>
          <div className='stack-properties'>Ruby on Rails</div>
          <div className='stack-properties'>SQLite 3</div>
      </CardPanel>
      </div>
      <div className='wireframes'>
        <div ><img src='accessgram-login.svg' alt='Nothing to see here! Sorry! D:' className='ui'/></div>
        <div><img src='ag login.gif' alt='Nothing to see here! Sorry! D:' className='ui'/></div>
        <div ><img src='accessgram-home.svg' alt='Nothing to see here! Sorry! D:' className='ui'/></div>
        <div ><img src='ag home gif.gif' alt='Nothing to see here! Sorry! D:' className='ui'/></div>
        <div ><img src='accessgram-profile.svg' alt='Nothing to see here! Sorry! D:' className='ui'/></div>
        <div ><img src='ag profile gif.gif' alt='Nothing to see here! Sorry! D:' className='ui'/></div>
        <div ><img src='access-gram-edit-profile.svg' alt='Nothing to see here! Sorry! D:' className='ui'/></div>
        <div ><img src='ag edit gif.gif' alt='Nothing to see here! Sorry! D:' className='ui'/></div>
      </div>
    </div>
  )
}

export default AccessGram
