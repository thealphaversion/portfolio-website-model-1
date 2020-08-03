// package imports
import React from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

// component imports
import ResumeHeading from "../../resume/heading/resume-heading";
import Education from "../../resume/education/education";
import Experience from "../../resume/experience/experience";
import ResumeProjects from "../../resume/projects/resume-projects";

// css imports
import "./resume-overview.css";

function ResumeOverview(props) {
    const { data } = props;
    const { education } = data;
    const { skills_minified } = data;
    const { projects } = data;
    let { experience } = data;

    experience = experience.slice(0, 2);
    return (
        <div className="resume-overview-container">
            <div className="resume-overview-title">
                <h1>Resume</h1>
                <small>
                    This is a shortened resume to give you an overview. Click{" "}
                    <a href="/resume">here</a> to see full resume.
                </small>
            </div>
            <div className="resume-body">
                {/* education */}
                <div className="resume-content">
                    <div className="resume-content-heading">
                        <ResumeHeading title={"EDUCATION"}></ResumeHeading>
                    </div>
                    <div className="resume-content-data">
                        <Education education={education[0]}></Education>
                    </div>
                </div>
                {/* experience */}
                <div className="resume-content">
                    <div className="resume-content-heading">
                        <ResumeHeading title={"EXPERIENCE"}></ResumeHeading>
                    </div>
                    <div className="resume-content-data">
                        {experience.map((experience_data, index) => {
                            return (
                                <Experience
                                    key={index}
                                    experience={experience_data}
                                ></Experience>
                            );
                        })}
                    </div>
                </div>
                {/* skills minified */}
                <div className="resume-content">
                    <div className="resume-content-heading">
                        <ResumeHeading title={"SKILLS"}></ResumeHeading>
                    </div>
                    <div className="resume-content-data">
                        {skills_minified.map((skill, index) => {
                            return (
                                <div
                                    key={index}
                                    className="experience-stack-home"
                                >
                                    <h5 key={index}>{skill}</h5>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* projects */}
                <div className="resume-content">
                    <div className="resume-content-heading">
                        <ResumeHeading title={"LATEST PROJECT"}></ResumeHeading>
                    </div>
                    <div className="resume-home-content-data">
                        <ResumeProjects projects={projects[0]}></ResumeProjects>
                    </div>
                </div>
            </div>
            <div className="overview-button-container">
                <Button variant="outline-dark" href="/resume">
                    {"See Full Resume"}
                </Button>
            </div>
        </div>
    );
}

export default withRouter(ResumeOverview);
