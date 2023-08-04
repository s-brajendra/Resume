import React from 'react'
import { Container,Row,Col} from "react-bootstrap";
// import Particle from '../components/Particle';
// import ContactForm from '../components/Contact/Contact';
// import Social from '../components/Contact/Social';

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (

    <Container fluid className="home-about-section" id="about">
      <Container>

      <Row>
    <Col md={12} className="home-about-social">
      <h1>VISIT ME ON</h1>

      <ul className="home-about-social-links">
        <li className="social-icons">
          <a
            href="https://github.com/s-brajendra?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
            aria-label="github"
          >
            <AiFillGithub />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://twitter.com/sbrajen7"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
            aria-label="twitter"
          >
            <AiOutlineTwitter />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/sbrajendra/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
            aria-label="linkedin"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.instagram.com/_sbrajen7_/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
            aria-label="instagram"
          >
            <AiFillInstagram />
          </a>
        </li>
      </ul>
      <p>
       For Collaboration <span className="yellow"><a href="https://react-bootstrap.netlify.app/">  click here</a></span>
      </p>
    </Col>
  </Row>

      </Container>
    </Container>



    




  )
}

export default Contact