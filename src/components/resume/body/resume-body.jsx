// package imports
import React from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

// component imports
import ResumeHeading from "../heading/resume-heading";
import Education from "../education/education";
import Skills from "../skills/skills";
import ResumeProjects from "../projects/resume-projects";

// css imports
import "./resume-body.css";

function ResumeBody(props) {
    const { data } = props;
    const { education } = data;
    const { skills } = data;
    const { projects } = data;
    return (
        <div className="resume-body">
            {/* education */}
            <div className="resume-content">
                <div className="resume-content-heading">
                    <ResumeHeading title={"EDUCATION"}></ResumeHeading>
                </div>
                <div className="resume-content-data">
                    {education.map((education_data, index) => {
                        return (
                            <Education
                                key={index}
                                education={education_data}
                            ></Education>
                        );
                    })}
                </div>
            </div>
            {/* skills */}
            <div className="resume-content">
                <div className="resume-content-heading">
                    <ResumeHeading title={"SKILLS"}></ResumeHeading>
                </div>
                <div className="resume-content-data">
                    <Skills skills={skills}></Skills>
                </div>
            </div>
            {/* projects */}
            <div className="resume-content">
                <div className="resume-content-heading">
                    <ResumeHeading title={"PROJECTS"}></ResumeHeading>
                </div>
                <div className="resume-content-data">
                    {projects.map((project_data, index) => {
                        return (
                            <ResumeProjects
                                key={index}
                                projects={project_data}
                            ></ResumeProjects>
                        );
                    })}
                </div>
            </div>
            <div className="resume-button-container">
                <Button variant="outline-dark" href="/projects">
                    {"See more projects >"}
                </Button>
            </div>
        </div>
    );
}

export default withRouter(ResumeBody);
