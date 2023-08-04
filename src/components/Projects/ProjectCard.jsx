import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";







const CardPrj = (cardObj) => {
  return (
    <Card 
    className="project-card-style"
    >
      <Card.Img variant="top" 
      src= {cardObj.imgPath}
       />
      <Card.Body>
        <Card.Title>{cardObj.title}</Card.Title>
        <Card.Text>
          {cardObj.description}
        </Card.Text>
        <Button variant="primary" href={cardObj.ghLink} target="_blank" >GitHub</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPrj;







// const ProjectCard = (cardObj) => {
//   return (
//     <Card className="project-card-view">
//       <Card.Img variant="top" src={cardObj.imgPath} alt="card-img" />
//       <Card.Body>
//         <Card.Title>{cardObj.title}</Card.Title>
//         <Card.Text style={{ textAlign: "justify" }}>
//           {cardObj.description}
//         </Card.Text>
//         <Button variant="primary" href={cardObj.ghLink} target="_blank">
//           <BsGithub /> &nbsp;
//           {cardObj.isBlog ? "Blog" : "GitHub"}
//         </Button>
//         {"\n"}
//         {"\n"}

//         {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

//         {!cardObj.isBlog && cardObj.demoLink && (
//           <Button
//             variant="primary"
//             href={cardObj.demoLink}
//             target="_blank"
//             style={{ marginLeft: "10px" }}
//           >
//             <CgWebsite /> &nbsp;
//             {"Demo"}
//           </Button>
//         )}
//       </Card.Body>
//     </Card>
//   );
// }
// export default ProjectCard;
