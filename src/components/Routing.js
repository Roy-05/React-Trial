import React from 'react';
import HomePage from './Homepage';
import AboutMe from './AboutMe';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import "../css/main.css";

const Routing = () => {
  return(
    <Router>
      <Route exact path = "/" component = {HomePage} />
      <Route path = "/projects" component = {AboutMe} />
      <Route path = "/readings" component = {AboutMe} />
      <Route path = "/workbench" component = {AboutMe} />
      <Route path = "/about" component = {AboutMe} />
    </Router>
  ) 
}

export default Routing;
