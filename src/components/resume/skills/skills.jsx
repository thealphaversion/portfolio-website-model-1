// package imports
import React from "react";

// component imports
// import SectionBreak from "../../common/section-break/section-break";

// css imports
import "./skills.css";

function Skills(props) {
    const { skills } = props;
    return (
        <div className="skills">
            <div className="skill-subsection">
                <h3>Languages</h3>
                {skills.languages.map((language, index) => {
                    return <h4 key={index}>{language}</h4>;
                })}
            </div>
            <div className="skill-subsection">
                <h3>Front-end Frameworks</h3>
                {skills.frontend.map((framework, index) => {
                    return <h4 key={index}>{framework}</h4>;
                })}
            </div>
            <div className="skill-subsection">
                <h3>Back-end Frameworks</h3>
                {skills.backend.map((framework, index) => {
                    return <h4 key={index}>{framework}</h4>;
                })}
            </div>
            <div className="skill-subsection">
                <h3>Databases</h3>
                {skills.databases.map((database, index) => {
                    return <h4 key={index}>{database}</h4>;
                })}
            </div>
            {/*
            <div className="skill-subsection">
                <h3>Version Control</h3>
                {skills.vcs.map((system, index) => {
                    return <h4 key={index}>{system}</h4>;
                })}
            </div>
            */}
            <div className="skill-subsection">
                <h3>Cloud Platforms</h3>
                {skills.cloud.map((platform, index) => {
                    return <h4 key={index}>{platform}</h4>;
                })}
            </div>
        </div>
    );
}

export default Skills;
