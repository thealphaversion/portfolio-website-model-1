// package imports
import React from "react";

// component imports
import Header from "../../components/common/header/header";
import { ContactMe } from "../../constants/icons";
import ContactBody from "../../components/contact/contact-body";

// css imports
import "./contact.css";

// service imports
import assets from "../../services/assets.json";

function Contact(props) {
    const { contact_header } = assets;

    return (
        <div className="contact bg-dark">
            <Header
                image={contact_header}
                title={"Contact Me"}
                lite={false}
            ></Header>
            <div className="contact-body-form-container">
                <ContactBody history={props.history}></ContactBody>
            </div>
            <div className="contact-body">
                <ContactMe></ContactMe>
            </div>
        </div>
    );
}

export default Contact;
