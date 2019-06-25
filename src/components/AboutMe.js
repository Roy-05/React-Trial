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
                <div className = "grid-item page-title">
                    WHAT AM I ?
                </div>
                <div className = "grid-item profile-outer-container">
                    <div className = "profile-inner-container"></div>
                </div>
                                
                <div className = "grid-item description-title">
                    blah...blah...blah
                </div>
                <div className = "grid-item info-container">
                    <p className="info-on-me">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. <br></br>Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum       
                    </p>
                </div>
                <div className = "grid-item contact-container">
                    <h3 className = "contact-title">CONTACT ME:</h3>
                    <div className = "contact-info">Email: saket.roy@hotmail.com</div>
                    <div className = "contact-info">Phone: +1 (314) 285 - 6608</div>
                    <div className = "social-container">
                        <div className = "social-title"><strong>Connect with me!</strong></div>
                    </div>
                </div>

            </div>
        )
    }
}

export default AboutMe;