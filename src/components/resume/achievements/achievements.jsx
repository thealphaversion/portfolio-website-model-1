// package imports
import React from "react";

// css imports
import "./achievements.css";

function Achievement(props) {
    const { achievement } = props;
    return (
        <div className="resume-achievement">
            <div>
                <h4>{achievement}</h4>
            </div>
        </div>
    );
}

export default Achievement;
