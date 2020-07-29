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
            <h5 className="stack-inline-flex">
                Tech Stack:{" "}
                <ul className="stack-list stack-inline">
                    {projects.stack.map((framework, index) => {
                        return (
                            <li key={index}>
                                <h5>{framework}</h5>
                            </li>
                        );
                    })}
                </ul>
            </h5>
        </div>
    );
}

export default ResumeProjects;
