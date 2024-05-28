import "./HeroImg2.css"
import CodeImage from '../assets/my_code2.png';

import React from 'react'

function HeroImg2(props) {
    return (
        <div className="hero-img">
            <div className="heading">
                <h1>{props.heading}</h1>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default HeroImg2
