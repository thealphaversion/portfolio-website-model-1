import React from "react";
import { Container, Image } from "react-bootstrap";
import LandingVideo from "../../../assets/landing-video-code-blur.mp4";
import { Connect, ScrollDown } from "../../../constants/icons";
import ProfileImage from "../../../assets/profile-img.jpg";

import "./landingComponent.css";

function LandingComponent() {
    return (
        <div className="landing-component">
            <Container fluid={true} className="video-container">
                <video autoPlay muted loop>
                    <source src={LandingVideo} type="video/mp4"></source>
                </video>
            </Container>
            <Image
                className="home-img"
                roundedCircle={true}
                src={ProfileImage}
            ></Image>
            <div className="video-content">
                <h1>Hi, I am Aditya Chakraborti</h1>
                <h3>I love building software that serves a purpose.</h3>
                <Connect></Connect>
                <ScrollDown></ScrollDown>
            </div>
        </div>
    );
}

export default LandingComponent;
