import React from "react";
import './Projects.css';
import { projects } from '../Portfolio';
import { GoMarkGithub, GoLinkExternal } from "react-icons/go";

function Projects() {
    return (
        <div id="projects" className="proj-container">
            <div className="title-container">
                <h2 className="projects-title">Projects</h2>
            </div>
            <div>
                <div className="projects-container">
                {projects.map(project => (
                            <div className="project-card">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <div>
                                    <a className="github" target='_hblank' href={project.githubLink}><GoMarkGithub /></a>
                                    <a className="github" target='_hblank' href={project.extLink}><GoLinkExternal /></a>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;