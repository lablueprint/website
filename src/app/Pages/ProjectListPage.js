import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ProjectCard from "../Components/ProjectCard";
import ptv from '../../images/projects/ptv.jpg'
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import ProjectPage from './ProjectPage'

const projects = [
  {
    projectImg: ptv,
    projectTitle: "Program for Torture Victims",
    projectDescription: "PTV helps take care of refugees escaping violence and human rights abuse.",
    projectLink: "ptv"
  },
]

function DefaultPage() {
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

export default function ProjectsPage() {
  let match = useRouteMatch();

  console.log(match)

  return (
    <Switch>
      <Route path={`${match.path}/:projectName`}>
        <ProjectPage />
      </Route>
      <Route path={`${match.path}`}>
        <DefaultPage />
      </Route>
    </Switch>
  )
}

const bgStyle = {
  paddingTop: 100,
  paddingBottom: 200
};
