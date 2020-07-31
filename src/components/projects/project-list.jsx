// package imports
import React from "react";

// component imports
import ProjectCard from "./cards/project-card-archive";

function ProjectList(props) {
    return (
        <React.Fragment>
            {props.projectData.map((data, index) => {
                if (index % 2 === 0) {
                    return (
                        <ProjectCard
                            key={index}
                            side="left"
                            text={data.content}
                            period={data.timeline}
                            title={data.title}
                            image={data.img_src}
                            stack={data.stack}
                            link={data.link}
                        ></ProjectCard>
                    );
                } else {
                    return (
                        <ProjectCard
                            key={index}
                            side="right"
                            text={data.content}
                            period={data.timeline}
                            title={data.title}
                            image={data.img_src}
                            stack={data.stack}
                            link={data.link}
                        ></ProjectCard>
                    );
                }
            })}
        </React.Fragment>
    );
}

export default ProjectList;
