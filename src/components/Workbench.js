import React from 'react';
import Navbar from './Navbar';
import "../css/main.css";

class Workbench extends React.Component {
    render(){
        return(
            <div className = "grid-container">
                <div className = "grid-item header">
                    <Navbar />
                </div>
            </div>
        )
    }
}

export default Workbench;