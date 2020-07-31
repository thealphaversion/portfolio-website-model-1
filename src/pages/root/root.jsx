// package imports
import React from "react";
import { Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

// component imports
import NavigationBar from "../../components/navigation-bar/navigation-bar";
import Home from "../home/home";
import Projects from "../projects/projects";
import Resume from "../resume/resume";
// import Blog from "../blog/blog";
import Contact from "../contact/contact";
import Footer from "../../components/footer/footer";

// data imports
import aboutData from "../../data/about";
import contactData from "../../data/contact";
import projectData from "../../data/projects/project-data.json";
import overviewData from "../../data/about/overview.json";
import resumeData from "../../data/resume/resume-data.json";

// css imports
import "./root.css";

// service imports
import history from "../../services/history";
import assets from "../../services/assets.json";

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Aditya Chakraborti",
            navLinks: [
                { title: "Home", path: "/" },
                { title: "About", path: "/about" },
                { title: "Contact", path: "/contact" },
            ],
            aboutData,
            contactData,
        };
    }

    render() {
        return (
            <React.Fragment>
                <Router history={history}>
                    <Container className="p-0" fluid={true}>
                        <NavigationBar
                            ProfileImg={assets.profile_img}
                        ></NavigationBar>
                        <Route
                            path="/"
                            exact
                            render={() => (
                                <Home
                                    overviewData={overviewData}
                                    projectData={projectData}
                                    resumeData={resumeData}
                                ></Home>
                            )}
                        ></Route>
                        <Route
                            path="/projects"
                            exact
                            render={() => (
                                <Projects projectData={projectData}></Projects>
                            )}
                        ></Route>
                        <Route
                            path="/resume"
                            exact
                            render={() => (
                                <Resume resumeData={resumeData}></Resume>
                            )}
                        ></Route>
                        <Route
                            path="/contact"
                            exact
                            render={() => <Contact history={history}></Contact>}
                        ></Route>
                    </Container>
                </Router>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default Root;
