// package imports
import React from "react";

// css imports
import "./resume-projects.css";

function ResumeProjects(props) {
    const { projects } = props;
    return (
        <div className="resume-projects">
            <h3>{projects.title}</h3>
            <h5>{projects.description}</h5>
            <h5>Tech Stack:</h5>
            {projects.stack.map((framework, index) => {
                return (
                    <h5 key={index} className="project-stack">
                        {framework}
                    </h5>
                );
            })}
        </div>
    );
}

export default ResumeProjects;
