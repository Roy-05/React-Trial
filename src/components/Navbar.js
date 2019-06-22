import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Navbar extends React.Component {
    render(){
        return(
            <div className = "navbar">
                <button>HOME</button>
                <button>PROJECTS</button>
                <button>READING</button>
                <button>WORKBENCH</button>
                <button>ABOUT</button>
                <button>CONTACT</button>
            </div>
        )
    }
}

export default Navbar