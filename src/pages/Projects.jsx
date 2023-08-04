import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";


import linkit from "../assets/linkit.png";
import exp3 from "../assets/exp3.png"
import p2p from "../assets/p2p.png"
import kickstart from "../assets/kickstart.png"

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


          {/* lnkiit */}
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linkit}
              isBlog={false}
              title="LinkIt"
              description="The Note-to-Web Linking App is an innovative and user-friendly Android application developed in Android Studio that allows users to seamlessly link handwritten or typed notes to specific webpages. The app utilizes the device's camera and sophisticated image processing algorithms to recognize and scan handwritten or printed URLs from the notes"
              ghLink="https://github.com/s-brajendra/LinkIt"
            />


            {/*  EXP3ELM */}
            </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exp3}
              isBlog={false}
              title="Exp3-ELM"
              description="Multi Armed bandits are the simplest instance of the exploration-exploitation trade-off problem, which is the basic question in reinforcement learning. Multi Armed bandits is a problem in which a fixed limited set of resources must be allocated between competing (alternative) choices in a way that maximizes their expected gain, when each choice's properties are only partially known at the time of allocation, and may become better understood as time passes or by allocating resources to the choice In stochastic multi armed bandit problems the rewards for playing each arm are generated independently from unknown distributions corresponding to each arm. In adversarial multi armed bandit problems a sequence of rewards is generated for each arm by an adversary before the game starts."
              ghLink="https://github.com/s-brajendra/Exp-3-EXP3ELM-"
            />
            </Col>


            {/* car pooling */}
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p2p}
              isBlog={false}
              title="p2p-car-Pooling"
              description="Peer-to-peer carpooling using blockchain is a decentralized system where individuals directly connect to share rides. Blockchain ensures secure, transparent transactions and trustless verification, enabling seamless payment and ride arrangements without intermediaries"
              ghLink="https://github.com/s-brajendra/P2P-Car-Pooling"
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