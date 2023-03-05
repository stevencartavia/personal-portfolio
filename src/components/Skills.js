import React from "react";
import './Skills.css';

function Skills() {
    return (
        <div id="skills" className="skills-container">
            <div className="title-container">
                <h2 className="skills-title">Skills</h2>
            </div>
            <div className="skills">
                <div>
                    <h4>HTML</h4>
                </div>
                <div>
                    <h4>CSS</h4>
                </div>
                <div>
                    <h4>JavaScript</h4>
                </div>
                <div>
                    <h4>React</h4>
                </div>
                <div>
                    <h4>Git</h4>
                </div>
            </div>
        </div>
    );
}

export default Skills;