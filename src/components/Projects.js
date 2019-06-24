import React from 'react';
import Navbar from './Navbar';

class Projects extends React.Component {
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

export default Projects;