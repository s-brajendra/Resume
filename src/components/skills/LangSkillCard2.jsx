import { Height, Padding, Scale } from '@mui/icons-material';
import Card from 'react-bootstrap/Card';
import { RiReactjsLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa6";
import techstack from "../../assets/Logo"
import Tilt from "react-parallax-tilt";


import {TbBrandJavascript} from "react-icons/tb";
import {SiSolidity} from "react-icons/si";


import {SiExpress} from "react-icons/si"


import { PiFileCssBold } from "react-icons/pi"
import { PiFileHtml } from "react-icons/pi"






const SkillCard =   (cardObj) => {
  return (
    <Card className=' project-card-style'>
      <Card.Body className=' project-card-body-style' >
        <Card.Title>Developer tools and Enviroment</Card.Title>
        <br />
        <Card.Subtitle className="mb-2 text-muted">{cardObj.subtitle}</Card.Subtitle>
        <Card.Text project-card-style>
        <ul >
        <li className='skill-list-view'>
                    <Tilt>
                    { techstack.node}
                    </Tilt>
                  </li>

                  <li className='skill-list-view'>
                    <Tilt>
                    { techstack.html}
                    </Tilt>
                  </li>

                  <li className='skill-list-view'>
                    <Tilt>
                    { techstack.css}
                    </Tilt>
                  </li>

                  <li className='skill-list-view'>
                    <Tilt>
                    { techstack.express}
                    </Tilt>
                  </li>

                  <li className='skill-list-view'>
                    <Tilt>
                    { techstack.react}
                    </Tilt>
                  </li>


                  
          </ul>
        </Card.Text>

      </Card.Body>
    </Card>
  );
}

export default SkillCard;