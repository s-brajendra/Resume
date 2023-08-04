import { Height, Padding, Scale } from '@mui/icons-material';
import Card from 'react-bootstrap/Card';
import { LiaJava } from "react-icons/lia";
import { BiLogoPython } from "react-icons/bi";
import {TbBrandJavascript} from "react-icons/tb";
import {FaC} from "react-icons/fa6"
import { TbBrandCpp }from "react-icons/tb"
import {SiSolidity} from "react-icons/si";
import techstack from "../../assets/Logo"

import Tilt from "react-parallax-tilt";
// import {FaC} from "react-icons/fa6"
// import { TbBrandCpp }from "react-icons/tb"
// import { TbBranPiFileHtmldCpp }from "react-icons/pi"
// import { PiFileCssBold } from "react-icons/pi"
// import { PiFileHtml } from "react-icons/pi"
import { SiMysql } from "react-icons/si"




const SkillCard =   (cardObj) => {
  return (
    <Card className=' project-card-style'>
      <Card.Body className=' project-card-body-style' >
        <Card.Title>Languages</Card.Title>
        <br />
        <Card.Subtitle className="mb-2 text-muted">{cardObj.subtitle}</Card.Subtitle>
        <Card.Text project-card-style>
        <ul >

                   <li className='skill-list-view'>
                    <Tilt>
                    { techstack.python}
                    </Tilt>
                  </li>
                  <li className='skill-list-view'>
                    <Tilt>
                    { techstack.c}
                    </Tilt>
                  </li>
                  <li className='skill-list-view'>
                    <Tilt>
                    { techstack.cpp}
                    </Tilt>
                  </li>
                  <li className='skill-list-view'>
                    <Tilt>
                    { techstack.java}
                    </Tilt>
                  </li>
                  <li className='skill-list-view'>
                    <Tilt>
                    { techstack.js}
                    </Tilt>
                  </li>







          </ul>
        </Card.Text>

      </Card.Body>
    </Card>
  );
}

export default SkillCard;