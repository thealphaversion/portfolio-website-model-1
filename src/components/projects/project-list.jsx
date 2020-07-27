import React from "react";
import ProjectCard from "./cards/project-card-archive";

function ProjectList(props) {
    return (
        <div>
            {props.projectData.map((data, index) => {
                if (index % 2 === 0) {
                    return (
                        <ProjectCard
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
        </div>
    );
}

export default ProjectList;
