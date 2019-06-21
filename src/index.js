import React from 'react';
import ReactDOM from 'react-dom';
import "./css/main.css";
//import '../node_modules/normalize.css/normalize.css';


/*const Home = () => (
    <div className = "center-div">
      <h1 id = "title">I AM SAKET ROY</h1>
    </div>
    )
ReactDOM.render(<Home/>, document.getElementById('root'));*/


const BackGroundImage = () => {
  return (
      <img className = 'bg' src = {"src/img/MAIN_1.jpg"}></img>
  )
}

ReactDOM.render(<BackGroundImage/>, document.getElementById('root'));


