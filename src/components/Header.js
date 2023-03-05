import React from "react";
import './Header.css';
import Icon from './icon.png'

function Header() {
    return (
        <nav className="navbar">
            <div>
                <a href="#"><img className="icon" src={Icon} /></a>
            </div>
            <div className="list-items">
                <ul>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;