import React from 'react';
import ReactDOM from 'react-dom';
//import './css/Home.css';


const divStyle = {
  position: 'absolute',
  margin: 'auto',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: '200px',
  height: '200px',
};

const h1Style  = {
  color: 'white',
  font: 'Verdana',
  fontSize: '50px'
}
const Home = () => (
    <div style = {divStyle}>
      <h1 style = {h1Style}>Welcome</h1>
    </div>
    )
ReactDOM.render(<Home/>, document.getElementById('root'));