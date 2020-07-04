import React, { Component } from 'react';
import './stylesheets/App.css';
import ReactDOM from 'react-dom';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import Nav from './components/nav.js'
import Home from './components/home.js'
import Footer from './components/footer.js'
import Menu from './components/menu.js'
import Work from './components/work/index.tsx'

class App extends Component {


  componentDidUpdate = () => { ReactDOM.findDOMNode(this).scrollIntoView(); }


  render() {
    return (
      <div >
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
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
