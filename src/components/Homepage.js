import React from 'react';
import {withRouter} from 'react-router-dom';
import Navbar from './Navbar';
import "../css/homepage.css";

class HomePage extends React.Component {
  render(){
    return(
      <div className = "grid-container homepage">
        <div className = "grid-item header">
          <Navbar isHomeVisible = "hidden"/>
        </div>
        <div className = "grid-item"></div>
        <div className = "grid-item jumbotron-container">
          <div className = "jumbotron">
            <h1 className = "title">HI,I'M SAKET</h1>
            <h2 id = "fluff">STUDENT. DEVELOPER. TRAVELER.</h2>
            <div>
            <span className = "button-container">
              <button className = "primary-button" onClick={() => this.props.history.push('about')}>
                EXPLORE
              </button>
            </span>
            </div>
          </div>
        </div>
        <div className = "grid-item"></div>
      </div>
    )
  }
}

export default withRouter(HomePage);
