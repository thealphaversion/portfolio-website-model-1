// package imports
import React from "react";

// component imports
// import SectionBreak from "../../common/section-break/section-break";

// css imports
import "./skills.css";

function Education(props) {
    const { skills } = props;
    return (
        <div className="skills">
            <div className="skill-subsection">
                <h3>Languages</h3>
                <ul className="skill-list">
                    {skills.languages.map((language, index) => {
                        return (
                            <li key={index}>
                                <h4>{language}</h4>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="skill-subsection">
                <h3>Front-end Frameworks</h3>
                <ul className="skill-list">
                    {skills.frontend.map((framework, index) => {
                        return (
                            <li key={index}>
                                <h4>{framework}</h4>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="skill-subsection">
                <h3>Back-end Frameworks</h3>
                <ul className="skill-list">
                    {skills.backend.map((framework, index) => {
                        return (
                            <li key={index}>
                                <h4>{framework}</h4>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="skill-subsection">
                <h3>Databases</h3>
                <ul className="skill-list">
                    {skills.databases.map((database, index) => {
                        return (
                            <li key={index}>
                                <h4>{database}</h4>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="skill-subsection">
                <h3>Version Control</h3>
                <ul className="skill-list">
                    {skills.vcs.map((system, index) => {
                        return (
                            <li key={index}>
                                <h4>{system}</h4>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="skill-subsection">
                <h3>Cloud Platforms</h3>
                <ul className="skill-list">
                    {skills.cloud.map((platform, index) => {
                        return (
                            <li key={index}>
                                <h4>{platform}</h4>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Education;
