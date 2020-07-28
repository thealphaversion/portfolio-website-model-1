// package imports
import React from "react";
import { Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

// component imports
import Footer from "../../components/footer/footer";
import Home from "../home/home";
import Projects from "../projects/projects";
import About from "../about";
import Contact from "../contact";
import NavigationBar from "../../components/navigation-bar/navigation-bar";

// data imports
import homeData from "../../data/home";
import aboutData from "../../data/about";
import contactData from "../../data/contact";
import projectData from "../../data/projects/project-data.json";
import overviewData from "../../data/about/overview.json";

// css imports
import "./root.css";

// asset imports
import ProfileImg from "../../assets/profile-img.jpg";

// service imports
import history from "../../services/history";

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
            homeData,
            aboutData,
            contactData,
        };
    }

    render() {
        return (
            <React.Fragment>
                <Router history={history}>
                    <Container className="p-0" fluid={true}>
                        <NavigationBar ProfileImg={ProfileImg}></NavigationBar>
                        <Route
                            path="/"
                            exact
                            render={() => (
                                <Home
                                    overviewData={overviewData}
                                    projectData={projectData}
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
                            render={() => <Contact></Contact>}
                        ></Route>
                        <Route
                            path="/about"
                            exact
                            render={() => <About></About>}
                        ></Route>
                        <Route
                            path="/contact"
                            exact
                            render={() => <Contact></Contact>}
                        ></Route>
                    </Container>
                </Router>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default Root;
