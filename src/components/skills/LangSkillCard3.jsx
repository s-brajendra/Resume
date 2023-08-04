import { Height, Padding, Scale } from '@mui/icons-material';
import Card from 'react-bootstrap/Card';


import Tilt from "react-parallax-tilt";


import techstack from "../../assets/Logo"










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
                    { techstack.androidstudio}
                    </Tilt>
                  </li>
          </ul>
        </Card.Text>

      </Card.Body>
    </Card>
  );
}

export default SkillCard;