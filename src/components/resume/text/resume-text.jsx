// package imports
import React from "react";
import { Button } from "react-bootstrap";

// css imports
import "./resume-text.css";

// load assets
import resume_pdf from "../../../assets/aditya_chakraborti.pdf";

// import data
import { filename } from "../../../data/resume/resume-file-name.json";

function ResumeText() {
    return (
        <React.Fragment>
            <div className="resume-intro-text">
                <h3>Hi, I am Aditya Chakraborti</h3>
            </div>
            <div className="resume-intro-text">
                <h5>
                    I love building software and working with passionate,
                    amazing people.
                </h5>
            </div>
            <div className="resume-intro-text">
                <h5>This page is my resume, please have a look.</h5>
            </div>
            <div className="resume-button-container">
                <a href={resume_pdf} download={filename}>
                    <Button variant="outline-dark">{"Download Resume"}</Button>
                </a>
            </div>
            <div className="resume-intro-text">
                <h3>. . .</h3>
            </div>
        </React.Fragment>
    );
}

export default ResumeText;
