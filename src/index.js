import React from 'react';
import ReactDOM from 'react-dom';
import "./css/main.css";
//import '../node_modules/normalize.css/normalize.css';

const HomePage = () => {
  return(
    <>
    <BackGroundImage/>
    <div className = "grid-container">
      <div className = "grid-item"></div>
      <div className = "grid-item">
        <Jumbotron />
      </div>
      <div className = "grid-item"></div>
    </div>
    </>
  )
}

class Jumbotron extends React.Component {
  render() {
    return (
      <div className = "jumbotron">
        <h1 id = "title">I AM SAKET ROY</h1>
        <h2 id = "fluff">STUDENT. DEVELOPER. WRITER. TRAVELER.</h2>
        <PrimaryButton ButtonText = "LEARN MORE"/>
      </div>
    )
  }
}


class BackGroundImage extends React.Component {
  render() {
      return (
          <img className = 'bg' src = {"src/img/background.jpg"}/>
      )
  }
}

class PrimaryButton extends React.Component {
  render() {
    return (
      <div className = "button-container">
        <button id = "primary-button" /*onClick={ alert("Redirect to About Me")}*/>{this.props.ButtonText}</button>
      </div>
    )
  }
}

ReactDOM.render(<HomePage/>, document.getElementById('root'));