import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";


import kickstart from "../assets/kickstart.png";

const Projects = () => {
  return (

    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          Recent Work <strong className="yellow"> </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="LinkIt"
              description="The Note-to-Web Linking App is an innovative and user-friendly Android application developed in Android Studio that allows users to seamlessly link handwritten or typed notes to specific webpages. The app utilizes the device's camera and sophisticated image processing algorithms to recognize and scan handwritten or printed URLs from the notes"
              ghLink="https://github.com/s-brajendra/LinkIt"
            />
            </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="LinkIt"
              description="The Note-to-Web Linking App is an innovative and user-friendly Android application developed in Android Studio that allows users to seamlessly link handwritten or typed notes to specific webpages. The app utilizes the device's camera and sophisticated image processing algorithms to recognize and scan handwritten or printed URLs from the notes"
              ghLink="https://github.com/s-brajendra/LinkIt"
            />
            </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="LinkIt"
              description="The Note-to-Web Linking App is an innovative and user-friendly Android application developed in Android Studio that allows users to seamlessly link handwritten or typed notes to specific webpages. The app utilizes the device's camera and sophisticated image processing algorithms to recognize and scan handwritten or printed URLs from the notes"
              ghLink="https://github.com/s-brajendra/LinkIt"
            />
            </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="LinkIt"
              description="The Note-to-Web Linking App is an innovative and user-friendly Android application developed in Android Studio that allows users to seamlessly link handwritten or typed notes to specific webpages. The app utilizes the device's camera and sophisticated image processing algorithms to recognize and scan handwritten or printed URLs from the notes"
              ghLink="https://github.com/s-brajendra/LinkIt"
            />
            </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="LinkIt"
              description="The Note-to-Web Linking App is an innovative and user-friendly Android application developed in Android Studio that allows users to seamlessly link handwritten or typed notes to specific webpages. The app utilizes the device's camera and sophisticated image processing algorithms to recognize and scan handwritten or printed URLs from the notes"
              ghLink="https://github.com/s-brajendra/LinkIt"
            />
            </Col>



          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="E‑Commerce Website"
              description="This ecommerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management and includes a complete purchase process. The admin panel, accessible for CRUD on users and products, includes a chart for statistics display. Stripe API is integrated to handle customer payments. The website uses MongoDB and Firebase as the database."
              ghLink="https://github.com/19sajib/mern-stack-ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Blog Website"
              description="This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React, Redux, and styled-components for a seamless experience."
              ghLink="https://github.com/19sajib/mern-blog-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Project Krypto"
              description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
              ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </Col> */}


        </Row>
      </Container>
    </Container>
  )
}

export default Projects