import React from "react";
import './Projects.css';
import { GoMarkGithub, GoLinkExternal } from "react-icons/go";

function Projects() {
    return (
        <div id="projects" className="proj-container">
            <div className="title-container">
                <h2 className="projects-title">Projects</h2>
            </div>
            <div>
                <div className="projects-container">
                    <div className="project-card">
                        <h3>Tenzies Game</h3>
                        <p>
                            A game where you have to roll until all dice are the same. You have to click each die to freeze it at its current value between rolls.
                        </p>
                        <div>
                            <a className="github" href="https://github.com/stevencartavia/tenzies-game" target="_hblank"><GoMarkGithub /></a>
                            <a className="github" href="https://tenzies-game-tawny-zeta.vercel.app/" target="_hblank"><GoLinkExternal /></a>
                        </div>
                    </div>
                    <div className="project-card">
                        <h3>Todo List</h3>
                        <p>Simple app where you can list and edit tasks. You can also click the checkmark to cross out the task or mark it as completed.</p>
                        <div>
                            <a className="github" href="https://github.com/stevencartavia/todo-list" target="_hblank"><GoMarkGithub /></a>
                            <a className="github" href="https://todo-list-rho-sand.vercel.app/" target="_hblank"><GoLinkExternal /></a>
                        </div>
                    </div>
                    <div className="project-card">
                        <h3>Weather App</h3>
                        <p>A weather app that provides the temperature, wind, humidity, pressure and the feels like temperature of the desired city.</p>
                        <div>
                            <a className="github" href="https://github.com/stevencartavia/weather-app" target="_hblank"><GoMarkGithub /></a>
                            <a className="github" href="https://weather-app-bay-three.vercel.app/" target="_hblank"><GoLinkExternal /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;