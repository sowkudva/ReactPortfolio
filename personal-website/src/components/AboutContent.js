import "./AboutContent.css";
import {Link} from "react-router-dom";
import Laptop from "../assets/laptop-table.png"

import React from 'react'

const AboutContent = () => {
    return (
    <section className="about">
      <div className="about-content">
        <img src={Laptop} className="laptop"></img>
        <div className="about-text">
            <h5>ABOUT ME</h5>
            <h1>A dedicated Front-End Developer</h1>
            <p>With 3 years of dedicated experience in frontend development, I have honed my skills in a broad range of technologies, including HTML, CSS, and Angular, as well as JavaScript, TypeScript, and React. This diverse toolkit has enabled me to effectively create and optimize user interfaces, ensuring that they are not only functional but also visually appealing and responsive across various platforms. My journey has been marked by a deep commitment to mastering the intricacies of frontend architecture and pushing the boundaries of what can be achieved through cutting-edge web technologies.</p>
        </div>
      </div>
    </section>
    )
}

export default AboutContent
