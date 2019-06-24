import React from 'react';
import {withRouter} from 'react-router-dom';


class Navbar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            displayHomeButton: true
        }

        //this.toggleHomeButton = this.toggleHomeButton.bind(this);
    }

    render(){
        return(
            <>
                <button className="navbar-controls home-button" onClick = {()=>this.props.history.push("/")}>HOME</button>
                <button className="navbar-controls" onClick = {()=>this.props.history.push("/projects")}>PROJECTS</button>
                <button className="navbar-controls" onClick = {()=>this.props.history.push("/readings")}>READINGS</button>
                <button className="navbar-controls" onClick = {()=>this.props.history.push("/workbench")}>WORKBENCH</button>
                <button className="navbar-controls" onClick = {()=>this.props.history.push("/about")}>ABOUT</button>
            </>
        )
    }
}

export default withRouter(Navbar)