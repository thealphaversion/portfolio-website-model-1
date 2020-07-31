// package imports
import React from "react";

// css imports
import "./header.css";

function ProjectHeader(props) {
    const { lite } = props;
    return (
        <div>
            <div className="header-container">
                <div className={lite ? "header-title-lite" : "header-title"}>
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
