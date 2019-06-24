import React from 'react';
import {withRouter} from 'react-router-dom';


class Navbar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isHomeButtonVisible: true
        }

        this.toggleHomeButton = this.toggleHomeButton.bind(this);
    }

    toggleHomeButton() {
        this.setState({
            isHomeButtonVisible: !isHomeButtonVisible 
        });
    }

    render(){
        return(
            <>
                <button className={`navbar-controls home-button ${this.state.isHomeButtonVisible ? "" : "hidden"}`} onClick = {()=>this.props.history.push("/")}>HOME</button>
                <button className="navbar-controls" onClick = {()=>this.props.history.push("/projects")}>PROJECTS</button>
                <button className="navbar-controls" onClick = {()=>this.props.history.push("/readings")}>READINGS</button>
                <button className="navbar-controls" onClick = {()=>this.props.history.push("/workbench")}>WORKBENCH</button>
                <button className="navbar-controls" onClick = {()=>this.props.history.push("/about")}>ABOUT</button>
            </>
        )
    }
}

export default withRouter(Navbar)