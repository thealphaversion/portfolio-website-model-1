// package imports
import React from "react";

// css imports
import "./publications.css";

function Publication(props) {
    const { publication } = props;
    return (
        <div className="resume-publication">
            <div>
                <h3>{publication.title}</h3>
                <h4>{publication.publisher}</h4>
                <h5>{publication.medium}</h5>
                <h5>
                    DOI: <b>{publication.doi}</b>
                </h5>
            </div>
        </div>
    );
}

export default Publication;
