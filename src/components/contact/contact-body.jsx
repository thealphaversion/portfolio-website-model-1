// package imports
import React from "react";
import { Form, Button } from "react-bootstrap";

function ContactBody() {
    return (
        <React.Fragment>
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="formGroupMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Type your message here"
                    />
                </Form.Group>
            </Form>
            <div className="send-message">
                <Button variant="outline-light" href="/projects">
                    {"Send Message"}
                </Button>
            </div>
        </React.Fragment>
    );
}

export default ContactBody;
