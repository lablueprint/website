import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ProjectCard from "../Components/ProjectCard";
import ptv from '../../images/projects/ptv.jpg'
import { Container, Row, Col } from "react-bootstrap";

const projects = [
  {
    projectImg: ptv,
    projectTitle: "Program for Torture Victims",
    projectDescription: "PTV helps take care of refugees escaping violence and human rights abuse.",
    projectLink: "ptv"
  },
];

export default function ProjectPage() {
  const projectCards = projects.map(item => (
    <Col xs={12} md={4}>
      <ProjectCard 
        projectImg={item.projectImg}
        projectTitle={item.projectTitle} 
        projectDescription={item.projectDescription}
        projectLink={item.projectLink}
      />
    </Col>
  ));
  return (
    <div style={bgStyle}>
      <Container>
      <Row style={{height: "100px"}}>
        <Col><h1>Current Projects</h1></Col>
      </Row>
        <Row>
          {projectCards}
        </Row>
      </Container>
    </div>
  );
}

const bgStyle = {
  paddingTop: 100,
  paddingBottom: 200
};
