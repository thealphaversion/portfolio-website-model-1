// package imports
import React, { useState } from "react";

// component imports
import Header from "../../components/common/header/header";
import ProjectList from "../../components/projects/project-list";
import PageNumbers from "../../components/projects/page-numbers/page-numbers";
import ProjectText from "../../components/projects/text/page-text";
import PreFooter from "../../components/projects/pre-footer/pre-footer";

// css imports
import "./project-style.css";

// service imports
import assets from "../../data/assets/assets.json";

function Projects(props) {
    const { projects_header } = assets;

    const projects = props.projectData;
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage, setPostsPerPage] = useState(4);

    // Get current posts
    const indexLastProject = currentPage * projectsPerPage;
    const indexFirstProject = indexLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexFirstProject, indexLastProject);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="project-bg">
            <Header image={projects_header} title={"Projects"}></Header>
            <ProjectText></ProjectText>
            <PageNumbers
                totalPages={projects.length}
                projectsPerPage={projectsPerPage}
                currentPage={currentPage}
                paginate={paginate}
            ></PageNumbers>
            <ProjectList projectData={currentProjects}></ProjectList>
            <PageNumbers
                totalPages={projects.length}
                projectsPerPage={projectsPerPage}
                currentPage={currentPage}
                paginate={paginate}
                centered={true}
            ></PageNumbers>
            <PreFooter
                currentPage={currentPage}
                totalPages={Math.ceil(projects.length / projectsPerPage)}
            ></PreFooter>
        </div>
    );
}

export default Projects;
