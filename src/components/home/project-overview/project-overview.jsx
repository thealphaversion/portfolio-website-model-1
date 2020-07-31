// package imports
import React from "react";
import { Button, CardColumns } from "react-bootstrap";
import { withRouter } from "react-router-dom";

// component imports
import ProjectsCardDeck from "./project-card-deck";

// css imports
import "./projects-overview.css";

// service imports
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
                <CardColumns className="card-deck">
                    {data.map((project, index) => {
                        return (
                            <ProjectsCardDeck
                                key={index}
                                project={project}
                            ></ProjectsCardDeck>
                        );
                    })}
                </CardColumns>
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
