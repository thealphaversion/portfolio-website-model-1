// package imports
import React from "react";

// css imports
import "./education.css";

function Education(props) {
    const { education } = props;
    return (
        <div className="education">
            <h3>{education.institute}</h3>
            <h5>
                <i>Under {education.university} University</i>
            </h5>
            <h5>{education.location}</h5>
            <h3 className="course-major">
                {education.course} in {education.major},
            </h3>
            <h5>Class of {education.graduation}</h5>
        </div>
    );
}

export default Education;
