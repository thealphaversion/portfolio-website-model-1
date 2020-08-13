// package imports
import React from "react";

// component imports
import Header from "../../components/common/header/header";
import ResumeBody from "../../components/resume/body/resume-body";
import ResumeText from "../../components/resume/text/resume-text";

// service imports
import assets from "../../data/assets/assets.json";

function Resume(props) {
    const { resume_header } = assets;

    const data = props.resumeData;
    return (
        <div>
            <Header image={resume_header} title={"Resume"} lite={true}></Header>
            <ResumeText></ResumeText>
            <ResumeBody data={data}></ResumeBody>
        </div>
    );
}

export default Resume;
