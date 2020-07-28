// package imports
import React from "react";

// component imports
import LandingComponent from "../../components/home/landingComponent/landingComponent";
import Overview from "../../components/home/overview/overview";

function Home(props) {
    const { overviewData } = props;
    return (
        <React.Fragment>
            <LandingComponent></LandingComponent>
            <Overview data={overviewData}></Overview>
        </React.Fragment>
    );
}

export default Home;
