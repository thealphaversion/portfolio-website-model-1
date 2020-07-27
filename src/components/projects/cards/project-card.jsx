import React from "react";
import "./card-style.css";
import { Container, Image, Card } from "react-bootstrap";

function ProjectCard(props) {
    const { side, text, period, title, image, stack, link } = props;
    return (
        <Card className="p-3" bg="dark" text="light">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small>
                    Check it out <a href={link}>here.</a>
                </small>
            </Card.Footer>
        </Card>
    );
}

export default ProjectCard;
