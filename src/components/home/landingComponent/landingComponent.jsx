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
                <h3>Full Stack Developer</h3>
                <h4>
                    I am a software developer who’s recently graduated with a
                    bachelor’s in computer engineering.
                </h4>
                <h4>
                    I love building solutions to problems that are fascinating
                    to me as well as those that serve a purpose for our society.
                </h4>
                <Connect></Connect>
                <ScrollDown></ScrollDown>
            </div>
        </div>
    );
}

export default LandingComponent;
