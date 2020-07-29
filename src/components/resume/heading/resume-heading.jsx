// package imports
import React from "react";

// css imports
import "./resume-heading.css";

function ResumeHeading(props) {
    const { title } = props;
    return (
        <div className="resume-heading-text">
            <h2>{title}</h2>
        </div>
    );
}

export default ResumeHeading;
