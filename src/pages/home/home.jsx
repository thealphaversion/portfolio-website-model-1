// package imports
import React from "react";

// component imports
import LandingComponent from "../../components/home/landingComponent/landingComponent";
import Overview from "../../components/home/overview/overview";
import ProjectOverview from "../../components/home/project-overview/project-overview";

function Home(props) {
    const { overviewData, projectData } = props;
    return (
        <React.Fragment>
            <LandingComponent></LandingComponent>
            <Overview data={overviewData}></Overview>
            <ProjectOverview data={projectData}></ProjectOverview>
        </React.Fragment>
    );
}

export default Home;
