import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Navbar extends React.Component {
    render(){
        return(
            <>
                <button className="navbar-controls">HOME</button>
                <button className="navbar-controls">PROJECTS</button>
                <button className="navbar-controls">READING</button>
                <button className="navbar-controls">WORKBENCH</button>
                <button className="navbar-controls">ABOUT</button>
                <button className="navbar-controls">CONTACT</button>
            </>
        )
    }
}

export default Navbar