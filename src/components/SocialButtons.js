import React from 'react';
import { SocialIcon } from 'react-social-icons';
import '../css/socialbuttons.css'

class SocialButtons extends React.Component {
    render(){
        return (
            <div className = "social-button-container">
                <span className = "social-button github">
                    <SocialIcon url = "https://github.com/Roy-05" style = {{height: 200, width: 200 }} bgColor = "black" />
                </span>
                <span className = "social-button insta"> 
                    <SocialIcon url = "https://www.instagram.com/theonlyroy/"  style = {{height: 200, width: 200}} bgColor = '#E4405F'/>    
                </span>
                <span className = "social-button twitter">
                <   SocialIcon url = "https://twitter.com/SaketRoy12"  style = {{height: 200, width: 200}} />  
                </span>
            </div>
        )
    }
}

export default SocialButtons;
