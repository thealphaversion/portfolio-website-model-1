// package imports
import React from "react";

// css imports
import "./certifications.css";

function Certifications(props) {
    const { certifications } = props;
    return (
        <div className="resume-certifications">
            <div>
                <h3>{certifications.title}</h3>
                <h4>{certifications.issuer}</h4>
                <h6>{certifications.date}</h6>
                <h5>
                    Check out the certificate{" "}
                    <a href={certifications.link}>here</a>.
                </h5>
            </div>
        </div>
    );
}

export default Certifications;
