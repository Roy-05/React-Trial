import React from 'react';
import {withRouter} from 'react-router-dom';


class Navbar extends React.Component {
    render(){
        return(
            <>
                <button className="navbar-controls" onClick = {()=>this.props.history.push("/")}>HOME</button>
                <button className="navbar-controls">PROJECTS</button>
                <button className="navbar-controls">READING</button>
                <button className="navbar-controls">WORKBENCH</button>
                <button className="navbar-controls" onClick = {()=>this.props.history.push("/about")}>ABOUT</button>
            </>
        )
    }
}

export default withRouter(Navbar)