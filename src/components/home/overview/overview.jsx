// package imports
import React from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

// css imports
import "./overview.css";

function Overview(props) {
    const { data } = props;
    return (
        <React.Fragment>
            <div className="overview-container">
                <h1>Overview</h1>
            </div>
            <div className="content-container">
                <div className="image-container">
                    <img
                        src={data.img_url}
                        className="overview-image"
                        alt="overview"
                    ></img>
                    <small className="image-reference">
                        Photo by{" "}
                        <a href="https://www.pexels.com/@andrew">
                            Andrew Neel{" "}
                        </a>
                        from{" "}
                        <a href="https://www.pexels.com/photo/silver-macbook-pro-on-tabletop-1967535/">
                            Pexels
                        </a>
                        .
                    </small>
                </div>
                <div className="text-container">
                    <div>
                        <h3>About Me</h3>
                        <h6 className="overview-text-element">{data.who}</h6>
                    </div>
                    <div>
                        <h3>My Goals</h3>
                        <h6 className="overview-text-element">
                            {data.objective}
                        </h6>
                    </div>
                    <div>
                        <h3>Current Status</h3>
                        <h6 className="overview-text-element">{data.status}</h6>
                    </div>
                    <div>
                        <h3>What I've been upto lately</h3>
                        {data.description.map((description_data, index) => {
                            return (
                                <h6
                                    key={index}
                                    className="overview-text-element"
                                >
                                    {description_data}
                                </h6>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/*
            <div className="overview-button-container">
                <Button variant="outline-dark" href="/about">
                    {"Learn More"}
                </Button>
            </div>
            */}
        </React.Fragment>
    );
}

export default withRouter(Overview);
