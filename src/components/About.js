import React from "react";
import Photo from './photo.png';
import './About.css';
import { about } from '../Portfolio';
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function About() {
    const { name, role, resume, freeTime, social } = about;
    return (
        <div className="about">
            <div className="img-container">
                <img className="photo" src={Photo} alt='personal-photo' />
            </div>
            <div className="personal-info">
                <h1>Hi, I am {name}.</h1>
                <h2>A {role}.</h2>
                <p>{resume}</p>
                <p>{freeTime}</p>
                <div className="about-links">
                    <a className="github" href={social.github} target='_hblank'><GoMarkGithub /></a>
                    <a className="linkedin" href={social.linkedin} target='_hblank'><AiFillLinkedin /></a>
                    <a className="insta" href={social.instagram} target='_hblank'><FaInstagram /></a>
                </div>
            </div>
        </div>
    );
}

export default About;