import React from "react";
import Photo from './photo.png';
import './About.css';
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function About() {
    return (
        <div className="about">
            <div className="img-container">
                <img className="photo" src={Photo} alt='personal-photo' />
            </div>
            <div className="personal-info">
                <h1>Hi, I am Steven Cordero.</h1>
                <h2>A Front End Developer.</h2>
                <p>Based in Costa Rica, highly motivated, self-taught seeking to launch a career building web applications and services. Passionate about learning and improve my skills.</p>
                <p>In my free time you can find me mountain biking, hiking or at the gym.</p>
                <div className="about-links">
                    <a className="github" href="https://github.com/stevencartavia" target="_hblank"><GoMarkGithub /></a>
                    <a className="linkedin" href="https://www.linkedin.com/in/stevencartavia/" target='_hblank'><AiFillLinkedin /></a>
                    <a className="insta" href="https://www.instagram.com/stevencartavia/" target='_hblank'><FaInstagram /></a>
                </div>
            </div>
        </div>
    );
}

export default About;