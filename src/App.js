import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from './components/home/index.js'
import Menu from './components/menu/index.js'
import Work from './components/work/index.tsx'
import About from './components/about/index.jsx'

class App extends Component {
  render() {
    return (
      <div >
        <Switch>
          <Route exact path="/">
            <div className="home-container">
              <Menu expanded={false} />
              <Home />
            </div>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Work expanded={false} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)
