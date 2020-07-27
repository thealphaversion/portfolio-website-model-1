import React from "react";
import "./pre-footer.css";

function PreFooter(props) {
    const { currentPage, totalPages } = props;
    return (
        <React.Fragment>
            <div className="footer-intro-text">
                <h3>. . .</h3>
            </div>
            <div className="footer-intro-text">
                <h6>
                    <i>
                        Page {currentPage} out of {totalPages}
                    </i>
                </h6>
            </div>
        </React.Fragment>
    );
}

export default PreFooter;
