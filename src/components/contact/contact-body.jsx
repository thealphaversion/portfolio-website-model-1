// package imports
import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

// css imports
import "./contact-body.css";

class ContactBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            message: "",
            email: "",
            sent: false,
            buttonText: "Send Message",
            validEmailRegex: RegExp(
                /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            ),
            err: false,
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (
            this.state.validEmailRegex.test(this.state.email) &&
            this.state.name.length > 0 &&
            this.state.message.length > 0
        ) {
            this.formSubmit();
        } else {
            this.setState({ err: true });
        }
    };

    formSubmit = () => {
        this.setState({
            buttonText: "Sending...",
        });

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
        };
        axios
            .post(
                "https://thealphaversion-website-server.herokuapp.com/contact",
                data
            )
            .then((res) => {
                this.setState({ sent: true }, this.resetForm());
            })
            .catch(() => {
                console.log("Message not sent");
                this.setState({
                    buttonText: "Message not sent. Try again?",
                });
            });
    };

    resetForm = () => {
        this.setState({
            name: "",
            message: "",
            email: "",
            buttonText: "Message Sent",
        });
        // this.props.history.push("/");
    };

    resetBody = () => {
        this.setState({ sent: false, buttonText: "Send Message" });
    };

    render() {
        if (this.state.sent) {
            return (
                <React.Fragment>
                    <div className="message-sent-text">
                        <h1>Thanks for the message!</h1>
                        <h4>I will get back to you as soon as I can.</h4>
                        <h4>
                            Feel free to check out my profile on the links
                            below.
                        </h4>
                    </div>
                    <div className="message-sent">
                        <Button
                            variant="outline-light"
                            onClick={this.resetBody}
                        >
                            {"Send another message"}
                        </Button>
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                placeholder="Enter your name"
                                onChange={(e) =>
                                    this.setState({
                                        name: e.target.value,
                                        err: false,
                                    })
                                }
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                onChange={(e) =>
                                    this.setState({
                                        email: e.target.value,
                                        err: false,
                                    })
                                }
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Type your message here"
                                onChange={(e) =>
                                    this.setState({
                                        message: e.target.value,
                                        err: false,
                                    })
                                }
                            />
                        </Form.Group>
                    </Form>
                    {this.state.err ? (
                        <div>
                            <small>Please enter input appropriately</small>
                        </div>
                    ) : (
                        <div></div>
                    )}
                    <div className="send-message">
                        <Button
                            variant="outline-light"
                            onClick={this.handleSubmit}
                        >
                            {this.state.buttonText}
                        </Button>
                    </div>
                </React.Fragment>
            );
        }
    }
}

export default ContactBody;
