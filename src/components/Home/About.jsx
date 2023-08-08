import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import AboutAnim from "../lottiesComponent/AboutAnim";



const About = () => {
    return (
        <Container fluid className="about-section" id="about">
          <Container>
            <Row>


              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                   {/* <span className="yellow"> */}
                     About Myself
                      {/* </span>  */}
                </h1>
                <p className="home-about-body" >
                  
                Hello! I'm <b>Brajendr Suman</b>, an <b>Electronics and Communication Engineering</b> student at the esteemed <i>Indian Institute of Technology, Guwahati</i>.
                <br/>
                <br/>
              

                My passion lies in <b>web development</b>, <b>blockchain</b>, and <b>machine learning</b>.
                <br/>
                <br />
                I've embarked on some exciting projects  <i> </i>

                {/* like a note-to-web linking app, an evaluation of the 
                <i> EXP3 </i>
                 algorithm, and a 
                 <i> web3 </i> 
                 based carpooling platform. 
                 Alongside, I've honed my skills through online courses in 
                 <b>Android </b>
                 and 
                 <b>Ethereum </b>
                development. */}


                 With proficiency in various programming languages and frameworks, I embrace teamwork, adaptability, and patience. 
                 <br />
                 Fluent in 
                <b> Hindi </b> 
                and 
                <b> English,  </b>
                <br />
                <br />
                strive to innovate.

                  
                </p>





              </Col>
         

              <Col md={4} className="myAvtar">
                <Tilt>
                  <AboutAnim></AboutAnim>
                </Tilt>
              </Col>


            </Row>
            <Row>
              <Col md={12} className="home-about-social">
           
                <p style={{ textSizeAdjust:"auto"}}>
              
                  <a
                  fontSize = "100px" 
                  target="_blank" id = "collaborate" href="https://forms.gle/7yDDMoyFyapKafYJ7">  join me in collaboration for a shared endeavor </a>
           
                </p>
                <br /> 

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
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About