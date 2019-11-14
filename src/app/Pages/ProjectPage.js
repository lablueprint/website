import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ProjectCard from "../Components/ProjectCard";
import ptv from '../../images/projects/ptv.jpg'
import { Container, Row, Col } from "react-bootstrap";

export default function ProjectPage() {
  return (
    <div style={bgStyle}>
      <Container>
      <Row style={{height: 100}}>
        <Col><h1>Current Projects</h1></Col>
      </Row>
        <Row>
          <Col xs={6} md={4}>
            <ProjectCard 
              projectImg={ptv}
              projectTitle="Program for Torture Victims" 
              projectDescription="Placeholder text"
              projectLink="ptv"
            />
          </Col>
          <Col xs={6} md={4}>
            <ProjectCard 
              projectImg={ptv}
              projectTitle="Program for Torture Victims" 
              projectDescription="Placeholder text"
              projectLink="ptv"
            />
          </Col>
          <Col xs={6} md={4}>
            <ProjectCard 
              projectImg={ptv}
              projectTitle="Program for Torture Victims" 
              projectDescription="Placeholder text"
              projectLink="ptv"
            />
          </Col>
          <Col xs={6} md={4}>
            <ProjectCard 
              projectImg={ptv}
              projectTitle="Program for Torture Victims" 
              projectDescription="Placeholder text"
              projectLink="ptv"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const bgStyle = {
  paddingTop: 100,
  paddingBottom: 200
};
