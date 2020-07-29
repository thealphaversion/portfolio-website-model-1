// package imports
import React from "react";

// css imports
import "./miscellaneous.css";

function Miscellaneous(props) {
    const { miscellaneous } = props;
    return (
        <div className="resume-miscellaneous">
            <div>
                <h4>{miscellaneous}</h4>
            </div>
        </div>
    );
}

export default Miscellaneous;
