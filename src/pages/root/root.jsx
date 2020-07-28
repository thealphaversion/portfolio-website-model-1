// package imports
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav, Image } from "react-bootstrap";

// component imports
import Footer from "../../components/footer/footer";
import Home from "../home/home";
import Projects from "../projects/projects";
import About from "../about";
import Contact from "../contact";

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
import history from "./history";

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
                        <Navbar
                            className="bg-dark justify-content-between"
                            variant="dark"
                        >
                            <Navbar.Brand href="/">
                                <Image
                                    src={ProfileImg}
                                    roundedCircle={true}
                                    className="profile-img"
                                    alt="React Bootstrap logo"
                                />
                                Aditya Chakraborti
                            </Navbar.Brand>
                            <Navbar.Toggle
                                className="border-0"
                                aria-controls="navbar=toggle"
                            ></Navbar.Toggle>
                            <Navbar.Collapse>
                                <Nav className="ml-auto nav-items">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                    <Link className="nav-link" to="/projects">
                                        Projects
                                    </Link>
                                    <Link className="nav-link" to="/resume">
                                        Resume
                                    </Link>
                                    <Link className="nav-link" to="/about">
                                        About
                                    </Link>
                                    <Link className="nav-link" to="/contact">
                                        Contact
                                    </Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <Route
                            path="/"
                            exact
                            render={() => (
                                <Home overviewData={overviewData}></Home>
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
