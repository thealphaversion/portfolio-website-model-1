import React from "react";

import "./project-header.css";

function ProjectHeader(props) {
    return (
        <div>
            <div className="header-container">
                <div className="header-title">
                    <h1 className="header-title-text">{props.title}</h1>
                </div>
                <img
                    src={props.image}
                    alt="projects"
                    className="project-image"
                ></img>
            </div>
        </div>
    );
}

export default ProjectHeader;
