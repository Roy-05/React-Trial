import React from 'react';
import Navbar from './Navbar';
import '../css/aboutme.css';

class AboutMe extends React.Component {
    render(){
        return(
            <div className = "grid-about">
                <div className = "grid-item header">
                    <Navbar />
                </div>
                <div className = "grid-item title">
                    WHO IS SAKET ROY ... ? 
                </div>
                <div className = "grid-item profile-container"></div>
                                
                <div className = "grid-item description-title"></div>
                <div className = "grid-item"></div>
            </div>
        )
    }
}

export default AboutMe;