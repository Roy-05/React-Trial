import React from 'react';
import {withRouter} from 'react-router-dom';
import '../css/navbar.css';


class Navbar extends React.Component {
    constructor(props){
        super(props);
    
    this.redirect = this.redirect.bind(this);
    }

    redirect(location){
        this.props.history.push(`/${location}`);
    }
    render(){
        return(
            <>
                <button className={`navbar-controls ${this.props.isHomeVisible}`} onClick = {()=>this.redirect('')}>
                HOME
                </button>
                <button className="navbar-controls" onClick = {()=>this.redirect('projects')}>PROJECTS</button>
                <button className="navbar-controls" onClick = {()=>this.redirect('readings')}>READINGS</button>
                <button className="navbar-controls" onClick = {()=>this.redirect('workbench')}>WORKBENCH</button>
                <button className="navbar-controls" onClick = {()=>this.redirect('about')}>ABOUT</button>
            </>
        )
    }
}

export default withRouter(Navbar)