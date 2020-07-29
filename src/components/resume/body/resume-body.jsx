// package imports
import React from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

// component imports
import ResumeHeading from "../heading/resume-heading";
import Education from "../education/education";
import Skills from "../skills/skills";
import Experience from "../experience/experience";
import ResumeProjects from "../projects/resume-projects";
import Certifications from "../certifications/certifications";
import Publication from "../publications/publications";
import Achievement from "../achievements/achievements";
import Miscellaneous from "../miscellaneous/miscellaneous";

// css imports
import "./resume-body.css";

function ResumeBody(props) {
    const { data } = props;
    const { education } = data;
    const { skills } = data;
    const { projects } = data;
    const { experience } = data;
    const { certifications } = data;
    const { publications } = data;
    const { achievements } = data;
    const { miscellaneous } = data;
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
            <div className="resume-projects-button-container">
                <Button variant="outline-dark" href="/projects">
                    {"See more projects >"}
                </Button>
            </div>
            {/* certifications */}
            <div className="resume-content">
                <div className="resume-content-heading">
                    <ResumeHeading title={"CERTIFICATIONS"}></ResumeHeading>
                </div>
                <div className="resume-content-data">
                    {certifications.map((certification_data, index) => {
                        return (
                            <Certifications
                                key={index}
                                certifications={certification_data}
                            ></Certifications>
                        );
                    })}
                </div>
            </div>
            {/* publications */}
            <div className="resume-content">
                <div className="resume-content-heading">
                    <ResumeHeading title={"PUBLICATIONS"}></ResumeHeading>
                </div>
                <div className="resume-content-data">
                    {publications.map((publication_data, index) => {
                        return (
                            <Publication
                                key={index}
                                publication={publication_data}
                            ></Publication>
                        );
                    })}
                </div>
            </div>
            {/* achievements */}
            <div className="resume-content">
                <div className="resume-content-heading">
                    <ResumeHeading title={"ACHIEVEMENTS"}></ResumeHeading>
                </div>
                <div className="resume-content-data">
                    {achievements.map((achievement_data, index) => {
                        return (
                            <Achievement
                                key={index}
                                achievement={achievement_data}
                            ></Achievement>
                        );
                    })}
                </div>
            </div>
            {/* miscellaneous */}
            <div className="resume-content">
                <div className="resume-content-heading">
                    <ResumeHeading title={"MISCELLANEOUS"}></ResumeHeading>
                </div>
                <div className="resume-content-data">
                    {miscellaneous.map((miscellaneous_data, index) => {
                        return (
                            <Miscellaneous
                                key={index}
                                miscellaneous={miscellaneous_data}
                            ></Miscellaneous>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default withRouter(ResumeBody);
