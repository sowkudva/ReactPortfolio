import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars , FaTimes} from "react-icons/fa";


const Navbar = () => {
    const [iconClicked, setIconClicked] = useState(false);
    const handleIconClick = () => {
        setIconClicked(!iconClicked);
    }

    const [color, setColor] = useState(false);

    const changeColor = () => {
        if(window.scrollY > 100){
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor);


    return (
        <div className={ color ? "header header-bg" : "header"}>
            <Link className="title" to={"/"}>
                SkudvaDevelops
            </Link>
            <ul className={iconClicked ? "nav-menu active" : "nav-menu" }>
                <li>
                    <Link to={"/home"}>Home</Link>
                </li>
                <li>
                    <Link to={"/projects"}>Projects</Link>
                </li>
                <li>
                    <Link to={"/experience"}>Experience</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleIconClick}>
                {iconClicked ? <FaTimes size={20} style={{color: "white"}} /> :  <FaBars size={20} style={{color: "white"}} />}
            </div>
        </div>
    )
}

export default Navbar
