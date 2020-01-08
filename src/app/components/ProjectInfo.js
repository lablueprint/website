import React from 'react';
import { Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

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
        <Button size="md" href="https://github.com/lablueprint">
          See our GitHub
        </Button>
      </>
    ),
  },
  harmony: {
    title: 'Harmony Project',
    render: () => 'Harmony Project uses music education to provide students with the skills and resources needed to thrive in school, in their community, and in life.',
  },
};

export default function ProjectInfo({ projectName }) {
  const project = projects[projectName];

  return (
    <>
      <PageHeader
        className="inverse"
        title={project.title}
        render={project.render}
      />
      <SectionContainer className="not-found-page">
        <Container className="mb-5 text-center">
          We are Blueprint, a organization dedicated to social good.
          <a href="https://airtable.com/shrru3kJPm50g5MDO">Applications are currently open for this Winter!</a>
        </Container>
      </SectionContainer>
    </>
  );
}

ProjectInfo.propTypes = {
  projectName: PropTypes.string.isRequired,
};
