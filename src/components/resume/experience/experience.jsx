// package imports
import React from "react";

// css imports
import "./experience.css";

function Experience(props) {
    const { experience } = props;
    return (
        <div className="resume-experience">
            <h3>{experience.company}</h3>
            {experience.company === undefined ? (
                <h3>
                    {experience.title} - <i>{experience.type}</i>
                </h3>
            ) : (
                <h4>
                    {experience.title} - <i>{experience.type}</i>
                </h4>
            )}
            <h6>{experience.timeline}</h6>
            {experience.description.map((title, index) => {
                return (
                    <div key={index}>
                        <h5 key={index}>{title}</h5>
                    </div>
                );
            })}
            <div>
                <h5>Tech Stack:</h5>
            </div>
            {experience.stack.map((framework, index) => {
                return (
                    <div key={index} className="experience-stack">
                        <h5 key={index}>{framework}</h5>
                    </div>
                );
            })}
        </div>
    );
}

export default Experience;
