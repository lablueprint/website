import React from 'react';
import { Button, Container } from 'react-bootstrap';

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
      'PTV helps support refugees escaping violence and human rights abuse.',
    link: 'ptv',
  },
  {
    image: harmony,
    title: 'Harmony Project',
    desc: 'Harmony Project uses music education to provide students with the skills and resources needed to thrive in school, in their community, and in life.',
    link: 'harmony',
  },
];

export default function ProjectPage() {
  const projectCards = projects.map((item) => (
    <ProjectCard
      key={JSON.stringify(item)}
      image={item.image}
      title={item.title}
      desc={item.desc}
      link={item.link}
    />
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
      <SectionContainer className="project-page">
        <Container>
          <div className="title">
            <h1>Current Projects</h1>
          </div>
          <div className="current-projects">
            <div className="card-deck">
              {projectCards}
            </div>
          </div>
        </Container>
      </SectionContainer>
    </>
  );
}
