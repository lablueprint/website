import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Button, Col, Container, Row } from 'react-bootstrap';

import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';

import ptv from '../assets/images/projects/ptv.jpg';

const bgStyle = {
  paddingTop: 100,
  paddingBottom: 200,
};

const projects = [
  {
    image: ptv,
    title: 'Program for Torture Victims',
    desc:
      'PTV helps take care of refugees escaping violence and human rights abuse.',
    link: 'https://ptvla.org/',
    // link: "ptv"
  },
];

export default function ProjectPage() {
  const projectCards = projects.map((item) => (
    <Col xs={12} md={4} key={JSON.stringify(item)}>
      <ProjectCard
        image={item.image}
        title={item.title}
        desc={item.desc}
        link={item.link}
      />
    </Col>
  ));
  return (
    <>
      <PageHeader
        title="Our Projects"
        render={() => (
          <>
            <div className="mb-3">
              All of Blueprint&#39;s work is open source because we believe in
              building technology that makes us more open and connected.
            </div>
            <Button variant="light" href="https://github.com/lablueprint">
              See our GitHub
            </Button>
          </>
        )}
      />
      <div style={bgStyle}>
        <Container>
          <Row style={{ height: '100px' }}>
            <Col>
              <h1>Current Projects</h1>
            </Col>
          </Row>
          <Row>{projectCards}</Row>
        </Container>
      </div>
    </>
  );
}
