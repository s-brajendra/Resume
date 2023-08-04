import React from "react";
import { Container, Row,Col } from "react-bootstrap";
// import { Card } from '@mui/material';
import SkillCard1 from "../components/skills/LangSkillCard1"
import SkillCard2 from "../components/skills/LangSkillCard2"
import SkillCard3 from "../components/skills/LangSkillCard3"

// import Tilt from "react-parallax-tilt";




// import Techstack from "../components/Skillset/Techstack";
// import Toolstack from "../components/Skillset/Toolstack";
// import Leetcode from "../components/Skillset/Leetcode";
// import Github from "../components/Skillset/Github";

const SkillPage = () => {
  return (

    
    

    <Container  fluid  className="skill-section">
      {/* <Particle /> */}
      <Container>


        
         <h4 className="project-heading">
          Technical Skills and interest  <strong className="yellow"></strong>
         </h4>
         <br />

         <Row style={{ justifyContent: "center", paddingBottom: "0px" }}>
          
          <Col md={4} className="project-card">
            <SkillCard1/>
          </Col>
          
          <Col md={4} className="project-card">
            <SkillCard2/>
          </Col>
          <Col md={3} className="project-card">
            <SkillCard3/>
          </Col>
         </Row>


        
         

      </Container>


     </Container>

    // <Container fluid className="about-section">
    //   <Particle />
    //   <Container>
    //     <h1 className="project-heading">
    //       Professional <strong className="yellow">Skillset </strong>
    //     </h1>

    //     <Techstack />

    //     <h1 className="project-heading">
    //       <strong className="yellow">Tools</strong> I use
    //     </h1>
    //     <Toolstack />

    //     <Leetcode />
    //     <Github />
    //   </Container>
    // </Container>
  )
}

export default SkillPage