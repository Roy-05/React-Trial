import React from 'react';
import PrimaryButton from './PrimaryButton';
import Navbar from './Navbar';
import "../css/homepage.css";
//import '../node_modules/normalize.css/normalize.css';

class HomePage extends React.Component {
  render(){
    return(
      <div className = "grid-container">
        <div className = "grid-item header">
          <Navbar />
        </div>
        <div className = "grid-item"></div>
        <div className = "grid-item" id = "jumbotron-container">
          <Jumbotron />
        </div>
        <div className = "grid-item"></div>
        <div className = "grid-item"></div>
      </div>
    )
  }
}
  
const Jumbotron = () => {
  return (
    <div className = "jumbotron">
      <h1 className = "title">HI,I'M SAKET</h1>
      <h2 id = "fluff">STUDENT. DEVELOPER. TRAVELER.</h2>
      <div>
        <PrimaryButton ButtonText = "LEARN MORE"/>
      </div>
    </div>
  )
}

export default HomePage;