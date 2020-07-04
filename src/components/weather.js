import React from 'react'
import {CardPanel} from 'react-materialize'
import '../stylesheets/weatherapp.css'



const Weather = () => {

  return (
    <div id='holder'>
      <CardPanel className="heading teal lighten-4 black-text">
          <span>   Weather App  </span>
          <div className='stack-properties'><a href='https://github.com/malorie16/mod-4-project-frontend' target="_blank" rel="noopener noreferrer">Github Repo</a> + <a href='https://www.youtube.com/watch?v=PQ8-hvwcrYo' target="_blank" rel="noopener noreferrer">Demo</a></div>
      </CardPanel>
      <div className='info'>
      <CardPanel className="description wa">
          <span id='weather-description'>Building this weather app gave me a chance to do a deep dive into the backend. A challenge that arose was asynchronously fetching to the back end and making a call to the Weatherbit API whenever a user searched a city. Using the find_or_create_by method in Ruby, I wanted to check our database for an instance of a city before we created one. By saving searched cities, we reduced the amount of API calls that we needed to make. We decided it was best to have our back end do the API calls to avoid CORS errors. Once a user clicked the heart to favorite a city, a POST request was made to our Rails API to attach that instance of the city to our user so that when they login, they are able to view their favorite cities.</span>
      </CardPanel>
      <CardPanel className="project-stack">
          <div className='stack-header'>Tech Stack</div>
          <div className='stack-properties'>React</div>
          <div className='stack-properties'>Ruby on Rails</div>
          <div className='stack-properties'>PostgreSQL</div>
      </CardPanel>
      </div>
      <div className='wireframes wa'>
        <div><img src='weatherlogin.svg'  alt='Nothing to see here! Sorry! D:' className='ui'/></div>
        <div><img src='weatherlogin.gif' alt='Nothing to see here! Sorry! D:' className='ui'/></div>
        <div><img src='weatherprof.svg' alt='Nothing to see here! Sorry! D:' className='ui'/></div>
        <div><img src='weatherprofile.gif' alt='Nothing to see here! Sorry! D:' className='ui'/></div>
        <div><img src='weathercity.svg' alt='Nothing to see here! Sorry! D:' className='ui'/></div>
        <div><img src='weathercity.gif' alt='Nothing to see here! Sorry! D:' className='ui'/></div>
      </div>
    </div>
  )
}

export default Weather
