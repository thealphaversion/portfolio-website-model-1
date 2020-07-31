// package imports
import React from "react";
import { Card } from "react-bootstrap";

// css imports
import "./projects-overview.css";

function ProjectsCardDeck(props) {
    const { project } = props;
    return (
        <React.Fragment>
            <Card>
                <Card.Img variant="top" src={project.img_src}></Card.Img>
                <div className="project-overview-card-body">
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Subtitle>{project.stack}</Card.Subtitle>
                    </Card.Body>
                    <Card.Body className="project-overview-card-text">
                        <Card.Text>{project.content}</Card.Text>
                        <div>
                            <Card.Text className="text-muted">
                                Check out the project{" "}
                                <a href={project.link}>here</a>.
                            </Card.Text>
                        </div>
                    </Card.Body>
                </div>
            </Card>
        </React.Fragment>
    );
}

export default ProjectsCardDeck;
