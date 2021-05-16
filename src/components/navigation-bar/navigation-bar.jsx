// Package imports
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";

// Data imports
import linkData from "../../data/links/links.json";

function NavigationBar(props) {
    return (
        <React.Fragment>
            <Navbar
                className="bg-dark justify-content-between"
                variant="dark"
                expand="lg"
            >
                <Navbar.Brand href="/">
                    <div className="nav-name">Aditya Chakraborti</div>
                </Navbar.Brand>
                <Navbar.Toggle
                    className="border-0"
                    aria-controls="navbar=toggle"
                ></Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className="ml-auto nav-items">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/resume">Resume</Nav.Link>
                        {linkData.links && linkData.links.map((link, index) => {
                            return <Nav.Link key={index} href={link.url} target={link.target}>{link.title}</Nav.Link>
                        })}
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    );
}

export default withRouter(NavigationBar);
