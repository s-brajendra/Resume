import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';
import LaptopAnim from '../components/lottiesComponent/laptopAnim';

const Home = () => {
  return (
    <section>



      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>

          <Col md={5} style={{ paddingBottom: 20 }}>
              <Tilt>
                <LaptopAnim></LaptopAnim>        
              </Tilt>

            </Col>


            <Col md={7} className="home-header">

              

              
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  
                </span>
              </h1>

              <h2 className="heading-name">
                I'M Brajendra Suman 
              </h2>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              
            </Col>



          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home