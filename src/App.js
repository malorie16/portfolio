import React, { Component } from 'react';
import './stylesheets/App.scss';
import ReactDOM from 'react-dom';
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from './components/home.js'
import Menu from './components/menu.js'
import Work from './components/work/index.tsx'

class App extends Component {


  componentDidUpdate = () => { ReactDOM.findDOMNode(this).scrollIntoView(); }


  render() {
    return (
      <div >
        <Switch>
          <Route exact path="/">
            <div className="home-container">
              <Menu />
              <Home />
            </div>
          </Route>
          <Route path="/about">

          </Route>
          <Route path="/work">
            <Work />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)
