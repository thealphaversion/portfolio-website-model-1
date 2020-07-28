import React from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./overview.css";

// service imports
import history from "../../../pages/root/history";

function Overview(props) {
    const { data } = props;

    const openAbout = (path) => {
        history.push(path);
    };
    return (
        <React.Fragment>
            <div className="overview-container">
                <h1>Overview</h1>
            </div>
            <div className="content-container">
                <div className="image-container">
                    <img src={data.img_url} className="overview-image"></img>
                </div>
                <div className="text-container">
                    <p>
                        <h3>About Me</h3>
                        <h6 className="overview-text-element">{data.who}</h6>
                    </p>
                    <p>
                        <h3>My Goals</h3>
                        <h6 className="overview-text-element">
                            {data.objective}
                        </h6>
                    </p>
                    <p>
                        <h3>Current Status</h3>
                        <h6 className="overview-text-element">{data.status}</h6>
                    </p>
                    <p>
                        <h3>Tell us more</h3>
                        <h6 className="overview-text-element">
                            {data.description}
                        </h6>
                    </p>
                </div>
            </div>
            <div className="overview-button-container">
                <Button
                    variant="outline-dark"
                    onClick={() => openAbout("/about")}
                >
                    {"Learn More >"}
                </Button>
            </div>
        </React.Fragment>
    );
}

export default Overview;
