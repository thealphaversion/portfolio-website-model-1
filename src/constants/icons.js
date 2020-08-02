import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronCircleDown,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(
    fab,
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter,
    faLinkedin,
    faChevronCircleDown,
    faEnvelope
);

const Connect = () => (
    <div className="social-icons">
        <a
            href="https://www.linkedin.com/in/aditya-chakraborti/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
        </a>
        <a
            href="https://github.com/thealphaversion"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
        </a>
        <a
            href="https://twitter.com/thealphaversion"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={["fab", "twitter"]} size="3x" />
        </a>
        <a
            href="https://medium.com/@adityachakraborti14"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={["fab", "medium"]} size="3x" />
        </a>
    </div>
);

const ScrollDown = () => (
    <div className="scroll-down-icon">
        <a href="#overview">
            <FontAwesomeIcon icon={("fas", "chevron-circle-down")} size="3x" />
        </a>
    </div>
);

const ContactMe = () => (
    <div className="social-icons">
        <a
            href="https://www.linkedin.com/in/aditya-chakraborti/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
        </a>
        <a
            href="https://github.com/thealphaversion"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
        </a>
        <a
            href="https://twitter.com/thealphaversion"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
        </a>
        <a
            href="https://medium.com/@adityachakraborti14"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={["fab", "medium"]} size="2x" />
        </a>
        <a
            href="mailto:adityachakraborti14@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={["fas", "envelope"]} size="2x" />
        </a>
    </div>
);

export { Connect, ScrollDown, ContactMe };
