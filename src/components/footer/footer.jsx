// package imports
import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function Footer() {
    return (
        <footer className="mt-0 footer">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Aditya Chakraborti
                    </Col>
                    <Col className="p-0" md={3} sm={12}>
                        Contact me at{" "}
                        <a href="mailto:adityachakraborti14@gmail.com">
                            adityachakraborti14@gmail.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
