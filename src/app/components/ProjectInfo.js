import React from 'react';
import { Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import SectionContainer from './SectionContainer';
import PageHeader from './PageHeader';

const projects = {
  ptv: {
    title: 'Program for Torture Victims',
    render: () => (
      <>
        <div className="mb-3">
          PTV helps support refugees escaping violence and human rights abuse.
        </div>
        <Button className="blue" size="md" href="https://github.com/lablueprint/ptv-web-console">
          View Github Repository
        </Button>
      </>
    ),
    body: (
      <div />
    ),
  },
  harmony: {
    title: 'Harmony Project',
    render: () => 'Harmony Project uses music education to provide students with the skills and resources needed to thrive in school, in their community, and in life.',
  },
};

export default function ProjectInfo({ projectName }) {
  const project = projects[projectName];
  const projectClass = ClassNames('project-info', projectName);

  return (
    <>
      <PageHeader
        className="inverse"
        title={project.title}
        render={project.render}
      />
      <SectionContainer className={projectClass}>
        <Container>
          {project.body}
        </Container>
      </SectionContainer>
    </>
  );
}

ProjectInfo.propTypes = {
  projectName: PropTypes.string.isRequired,
};
