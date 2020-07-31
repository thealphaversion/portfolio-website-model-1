// package imports
import React from "react";
import { Button } from "react-bootstrap";

// component imports
import { ContactMe } from "../../../constants/icons";

// css imports
import "./contact-overview.css";

function ContactOverview() {
    return (
        <div className="contact-overview bg-dark">
            <div className="contact-overview-title">
                <h1>Contact Me</h1>
                <ContactMe></ContactMe>
            </div>
            <div className="more-projects">
                <Button variant="outline-light" href="/contact">
                    {"Send a message"}
                </Button>
            </div>
        </div>
    );
}

export default ContactOverview;
