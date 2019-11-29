import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ptv from '../../images/projects/ptv.jpg';
import PageHeader from '../Components/PageHeader';
import ProjectCard from "../Components/ProjectCard";

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
    <>
      <PageHeader 
        title='Our Projects'
        render={() => 
          <>
            <div class='mb-3'>All of Blueprint's work is open source because we believe in building technology that makes us more open and connected.</div>
            <Button variant='light' href='https://github.com/lablueprint'>See our GitHub</Button>
          </>} />
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
    </>
  );
}

const bgStyle = {
  paddingTop: 100,
  paddingBottom: 200
};
