import React from "react";
import { ContactMe } from "../../../constants/icons";

import "./contact-overview.css";

function ContactOverview() {
    return (
        <div className="contact-overview bg-dark">
            <div className="contact-overview-title">
                <h1>Contact Me</h1>
                <ContactMe></ContactMe>
            </div>
        </div>
    );
}

export default ContactOverview;
