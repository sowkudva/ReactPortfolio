import "./Footer.css";

import React from 'react'
import { FaLinkedin, FaGithub, FaPhone, FaMailBulk } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container-top">
                <div className="icon-text">
                    <h1><FaPhone size={20} style={{color:"white" , marginRight: "0.3rem" }}/>775-433-7442</h1>
                    
                </div>
                <div className="icon-text">
                    <h1><FaMailBulk size={20} style={{color:"white" , marginRight: "0.3rem" }}/>sowkudva90@gmail.com</h1>
                    
                </div>
                <div className="icon-text">
                    <a href="https://www.linkedin.com/in/sowmya-kudva-05339b79/"><FaLinkedin size={20} style={{color:"white" , marginRight: "0.3rem"}}/>sowkudva</a>
                   
                </div>
                <div className="icon-text">
                <a href="https://github.com/sowkudva"><FaGithub size={20} style={{color:"white" , marginRight: "0.3rem"}}></FaGithub>Git</a>
                    
                </div> 
            </div>
        </div>
    )
}

export default Footer
