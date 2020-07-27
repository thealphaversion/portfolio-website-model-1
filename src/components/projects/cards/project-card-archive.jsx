import React from "react";
import "./card-style.css";

const leftOriented = (text, period, title, image, stack, link) => {
    return (
        <div className="project-container">
            <div className="short">
                <img
                    src={image}
                    className="project-image-left"
                    alt={title + " image"}
                ></img>
            </div>
            <div className="long-left">
                <div>
                    <h2 className="title">{title}</h2>
                    <p className="period">{period}</p>
                </div>
                <div>
                    <p className="text">{text}</p>
                </div>
                <div>
                    <p className="stack">{stack}</p>
                    <p className="stack">
                        Check out the project <a href={link}>here.</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

const rightOriented = (text, period, title, image, stack, link) => {
    return (
        <div className="project-container">
            <div className="long-right">
                <div>
                    <h2 className="title">{title}</h2>
                    <p className="period">{period}</p>
                </div>
                <div>
                    <p className="text">{text}</p>
                </div>
                <div>
                    <p className="stack">{stack}</p>
                    <p className="stack">
                        Check out the project <a href={link}>here.</a>
                    </p>
                </div>
            </div>
            <div className="short">
                <img
                    src={image}
                    rounded={true}
                    className="project-image-right"
                    alt={title + " image"}
                ></img>
            </div>
        </div>
    );
};

function ProjectCard(props) {
    const { side, text, period, title, image, stack, link } = props;
    if (side === "left") {
        return leftOriented(text, period, title, image, stack, link);
    } else {
        return rightOriented(text, period, title, image, stack, link);
    }
}

export default ProjectCard;
