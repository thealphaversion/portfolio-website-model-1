import React from "react";
import { Button, CardDeck } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import ProjectsCardDeck from "./project-card-deck";
import "./projects-overview.css";

import shuffle from "../../../services/shuffle-array";

function ProjectsOverview(props) {
    let data = props.data.slice(1, 4);
    data = shuffle(data);
    return (
        <div className="projects-section bg-dark">
            <div className="projects-overview-title">
                <h1>Projects</h1>
            </div>
            <div className="projects-overview-card-deck">
                <CardDeck className="card-deck">
                    {data.map((project, index) => {
                        return (
                            <ProjectsCardDeck
                                key={index}
                                project={project}
                            ></ProjectsCardDeck>
                        );
                    })}
                </CardDeck>
            </div>
            <div className="more-projects">
                <Button variant="outline-light" href="/projects">
                    {"See More Projects"}
                </Button>
            </div>
        </div>
    );
}

export default withRouter(ProjectsOverview);
