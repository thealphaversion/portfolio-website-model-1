import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

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
    faChevronCircleDown
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
    </div>
);

const ScrollDown = () => (
    <div className="scroll-down-icon">
        <a href="/">
            <FontAwesomeIcon icon={("fas", "chevron-circle-down")} size="3x" />
        </a>
    </div>
);

export { Connect, ScrollDown };
