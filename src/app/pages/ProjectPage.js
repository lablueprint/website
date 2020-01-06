import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Button, Col, Container, Row } from 'react-bootstrap';

import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import SectionContainer from '../components/SectionContainer';

import ptv from '../assets/images/projects/ptv.jpg';
import harmony from '../assets/images/projects/harmony.png';

const projects = [
  {
    image: ptv,
    title: 'Program for Torture Victims',
    desc:
      'PTV helps take care of refugees escaping violence and human rights abuse.',
    link: 'https://www.ptvla.org/',
  },
  {
    image: harmony,
    title: 'Harmony Project',
    desc: 'Harmony Project uses music education to provide students with the skills and resources needed to thrive in school, in their community, and in life.',
    link: 'https://www.harmony-project.org/',
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
        className="projects"
        title="Our Projects"
        render={() => (
          <>
            <div className="mb-3">
              All of Blueprint&#39;s work is open source because we believe in
              building technology that makes us more open and connected.
            </div>
            <Button size="md" href="https://github.com/lablueprint">
              See our GitHub
            </Button>
          </>
        )}
      />
      <SectionContainer className="project-page off-white">
        <Container>
          <Row className="title">
            <Col>
              <h1>Current Projects</h1>
            </Col>
          </Row>
          <Row>{projectCards}</Row>
        </Container>
      </SectionContainer>
    </>
  );
}
