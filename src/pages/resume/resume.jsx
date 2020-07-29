// package imports
import React from "react";

// component imports
import Header from "../../components/common/header/header";
import ResumeBody from "../../components/resume/body/resume-body";

// asset imports
import ResumeCover from "../../assets/resume-cover-4.jpg";

function Resume(props) {
    const data = props.resumeData;
    return (
        <div>
            <Header image={ResumeCover} title={"Resume"} lite={true}></Header>
            <ResumeBody data={data}></ResumeBody>
        </div>
    );
}

export default Resume;
