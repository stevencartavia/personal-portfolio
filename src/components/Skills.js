import React from "react";
import {skills} from '../Portfolio';
import './Skills.css';

function Skills() {
    return (
        <div id="skills" className="skills-container">
            <div className="title-container">
                <h2 className="skills-title">Skills</h2>
            </div>
            <div className="skills">
                <ul>
                    {skills.map( skill => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Skills;