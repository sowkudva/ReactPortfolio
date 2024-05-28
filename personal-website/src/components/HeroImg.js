import "./HeroImg.css";
import IntroImage from "../assets/intro.png";
import HeadShot from "../assets/headshot.png";

import React from "react";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImage} alt="IntroImage"></img>
      </div>
      <div className="container">
        <div className="content">
          <h2 className="title">Hi, I am Sowmya</h2>
          <p className="description">
            I'm a full-stack developer with 3 years of experience using angular,
            React and NodeJS. Reach out if you'd like to know more.
          </p>
          <div>
            <Link to="/contact" className="btn">
              Contact Me
            </Link>
            {/* <Link to="/about" className="btn btn-light" >About</Link> */}
          </div>
        </div>

        <img className="head-shot" src={HeadShot}></img>
      </div>
    </div>
  );
};

export default HeroImg;
