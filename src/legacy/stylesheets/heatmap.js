// import React from 'react'
// import {CardPanel} from 'react-materialize'
// import '../stylesheets/heatmap.css'


// const HeatMap = () => {

//   return (
//     <div id='holder'>
//       <CardPanel className="heading teal lighten-4 black-text">
//           <span>   ICE Heat Map  </span>
//           <div className='stack-properties'><a href='https://github.com/malorie16/soot-heat-map' target="_blank" rel="noopener noreferrer">Github Repo</a> + <a href=' https://www.youtube.com/watch?v=kzgyetEcmRs' target="_blank" rel="noopener noreferrer">Demo</a> + <a href='http://ice-heat-map.herokuapp.com/' target="_blank" rel="noopener noreferrer">Live</a></div>
//       </CardPanel>
//       <div className='info'>
//       <CardPanel className="description map">
//           <span>
//             The ICE Heat Map was built during the Immigrant Heritage Month Hackathon in response their prompt which was “what tools can we build to connect immigrants and advocates in rapid response situations”. The ICE Heat Map alerts users of Immigration & Customs Enforcement activity in their area by generating points of heat based off of zip codes that are texted to our back end.
//           </span>
//       </CardPanel>
//       <CardPanel className="project-stack map">
//           <div className='stack-header'>Tech Stack</div>
//           <div className='stack-properties'>Javascript</div>
//           <div className='stack-properties'>Google Maps API</div>
//           <div className='stack-properties'>Twilio API</div>
//           <div className='stack-properties'>Ruby on Rails</div>
//           <div className='stack-properties'>PostgreSQL</div>
//       </CardPanel>
//       </div>
//       <div className='wireframes'>
//         <div id='text-message'><img src='twilio.gif'id='twilio' alt='Nothing to see here! Sorry! D:'className='ui'/></div>
//         <div id='siren-icon'className='map-blurb' > <p><img src='siren.svg' className='icon' alt='Nothing to see here! Sorry! D:'/></p>When I texted ‘Raid 10023’ to our Twilio number, it generated a point of heat on the upper west side of Manhattan (seen below). To accomplish this, we used the Twilio API and the Google Maps API.</div>
//         <div id='map'><img src='heat-map.gif'alt='Nothing to see here! Sorry! D:'className='ui'/></div>
//         <div id='balance-icon' className='map-blurb'><p><img src='balance.svg' className='icon' alt='Nothing to see here! Sorry! D:'/></p>There were quite a few legal implications that arose while building the app such as user anonymity and people using this to spread panic. Right now, only verified phone numbers can text our number and edit the map. In the future, advocates would be registered as verified users so that only they can impact the map.
//        We’re also going to rebuild the map in React so that users won’t have to refresh the page to see new points of heat. We also plan to provide legal resources and guides in many languages to inform users what they should do if ICE is at their door.</div>
//       </div>
//     </div>
//   )
// }

// export default HeatMap
