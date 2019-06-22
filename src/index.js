import React from 'react';
import ReactDOM from 'react-dom';
import PrimaryButton from './components/PrimaryButton'
import "./css/main.css";
//import '../node_modules/normalize.css/normalize.css';

const HomePage = () => {
  return(
    <>
    <div className = "grid-container">
      <div className = "grid-item"></div>
      <div className = "grid-item" id = "jumbotron-container">
        <Jumbotron />
      </div>
      <div className = "grid-item"></div>
      <div className = "grid-item"></div>
    </div>
    </>
  )
}

class Jumbotron extends React.Component {
  render() {
    return (
      <div className = "jumbotron">
        <h1 id = "title">HI,I'M SAKET</h1>
        <h2 id = "fluff">STUDENT. DEVELOPER. TRAVELER.</h2>
        <div>
          <PrimaryButton ButtonText = "LEARN MORE"/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<HomePage/>, document.getElementById('root'));