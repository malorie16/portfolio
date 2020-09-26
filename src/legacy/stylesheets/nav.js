import React from 'react'
import {Link} from 'react-router-dom'
import '../stylesheets/mobile.css'



const Nav = () => {

  return (
    <div>
      <ul id="dropdown1" className="dropdown-content">
        <li><Link to='/accessgram' className='dropdown-links'>Access Gram</Link></li>
        <li><Link to='/leef' className='dropdown-links'>Leef</Link></li>
        <li><Link to='/weatherapp' className='dropdown-links'>Weather App</Link></li>
        <li><Link to='/heatmap' className='dropdown-links'>ICE Heat Map</Link></li>
      </ul>
      <nav>
        <Link to='/'  className='mobile-nav-title'> Malorie Casimir's Portfolio</Link>

      <div className="nav-wrapper">
        <Link to='/' className="brand-logo" style={{'paddingLeft':'10px', 'fontSize': '20px'}}> Malorie Casimir's Portfolio</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Projects<i className="material-icons right">arrow_drop_down</i></a></li>
        </ul>
      </div>
      <ul id="slide-out" className="sidenav">
       <li><div className="user-view">
         <div className="background">
         </div>
       </div></li>
     <li className='sidnav' ><Link to='/' className="waves-effect" className="sidenav-close">Home</Link></li>
       <li><div className="divider"></div></li>
     <li className='sidnav' ><Link to='/accessgram' className="waves-effect" className="sidenav-close">Access Gram</Link></li>
     <li className='sidnav' ><Link to='/leef' className="waves-effect" className="sidenav-close">Leef</Link></li>
     <li className='sidnav' ><Link to='/weatherapp' className="waves-effect" className="sidenav-close">Weather App</Link></li>
       <li className='sidnav' ><Link to='/heatmap' className="waves-effect" className="sidenav-close">ICE Heat Map</Link></li>
     </ul>
     <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
    </nav>
  </div>




  )
}

export default Nav
