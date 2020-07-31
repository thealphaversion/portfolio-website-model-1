// package imports
import React from "react";
import { Navbar, Row, Button } from "react-bootstrap";

// css imports
import "./page-numbers.css";

function PageNumbers(props) {
    const {
        totalPages,
        projectsPerPage,
        paginate,
        currentPage,
        centered,
    } = props;

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPages / projectsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <React.Fragment>
            <Navbar>
                <Row
                    className={
                        centered === true
                            ? "page-number-list-center"
                            : "page-number-list"
                    }
                >
                    {pageNumbers.map((number) => {
                        return (
                            <Button
                                key={number}
                                onClick={() => paginate(number)}
                                className="page-number-link"
                                variant={
                                    currentPage === number ? "primary" : "light"
                                }
                            >
                                {number}
                            </Button>
                        );
                    })}
                </Row>
            </Navbar>
        </React.Fragment>
    );
}

export default PageNumbers;
