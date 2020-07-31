import React from "react";
import "./card-style.css";

const leftOriented = (text, period, title, image, stack, link) => {
    return (
        <React.Fragment>
            <div className="project-container">
                <div className="short">
                    <img
                        src={image}
                        className="project-image-left"
                        alt={title + " image"}
                    ></img>
                </div>
                <div className="long">
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
        </React.Fragment>
    );
};

const rightOriented = (text, period, title, image, stack, link) => {
    return (
        <React.Fragment>
            <div className="project-container">
                <div className="long">
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
                        className="project-image-right"
                        alt={title + " image"}
                    ></img>
                </div>
            </div>
        </React.Fragment>
    );
};

function ProjectCard(props) {
    const { side, text, period, title, image, stack, link } = props;
    return (
        <React.Fragment>
            {side === "left"
                ? leftOriented(text, period, title, image, stack, link)
                : rightOriented(text, period, title, image, stack, link)}
        </React.Fragment>
    );
}

export default ProjectCard;
