import React from 'react';
import HomePage from './Homepage';
import Projects from './Projects';
import Readings from './Readings';
import Workbench from './Workbench';
import AboutMe from './AboutMe';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Routing = () => {
  return(
    <Router>
      <Route exact path = "/" component = {HomePage} />
      <Route path = "/projects" component = {Projects} />
      <Route path = "/readings" component = {Readings} />
      <Route path = "/workbench" component = {Workbench} />
      <Route path = "/about" component = {AboutMe} />
    </Router>
  ) 
}

export default Routing;
