import React from "react";
import { Container, Form } from "react-bootstrap";

function ContactBody() {
    return (
        <React.Fragment>
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Message" />
                </Form.Group>
            </Form>
        </React.Fragment>
    );
}

export default ContactBody;
