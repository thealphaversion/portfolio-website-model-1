// package imports
import React from "react";

// component imports
import LandingComponent from "../../components/home/landingComponent/landingComponent";
import Overview from "../../components/home/overview/overview";
import ProjectOverview from "../../components/home/project-overview/project-overview";
import ResumeOverview from "../../components/home/resume-overview/resume-overview";

function Home(props) {
    const { overviewData, projectData, resumeData } = props;
    return (
        <div className="home-page">
            <LandingComponent></LandingComponent>
            <Overview data={overviewData}></Overview>
            <ProjectOverview data={projectData}></ProjectOverview>
            <ResumeOverview data={resumeData}></ResumeOverview>
        </div>
    );
}

export default Home;
