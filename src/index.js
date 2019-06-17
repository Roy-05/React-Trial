import React from 'react';
import ReactDOM from 'react-dom';
import './css/Home.css';


/*const divStyle = {
  position: 'absolute',
  margin: 'auto',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: '500px',
  height: '500px',
};

const h1Style  = {
  color: 'black',
  fontFamily: 'Helvetica',
  fontSize: '50px'
}*/


const Home = () => (
    <div className = "center-div">
      <h1 id = "title">I AM SAKET ROY</h1>
    </div>
    )
ReactDOM.render(<Home/>, document.getElementById('root'));