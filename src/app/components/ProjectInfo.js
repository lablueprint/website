import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import SectionContainer from './SectionContainer';
import SectionHeading from './SectionHeading';
import SectionHeading2 from './SectionHeading2';
import SectionHeading3 from './SectionHeading3';
import SectionParagraph from './SectionParagraph';
import SectionUnorderedList from './SectionUnorderedList';
import PageHeader from './PageHeader';

import f2pWebapp from '../assets/images/projects/farm2people/F2P_Thumbnail.png';

import ptv from '../markdown/ptv.md';
import harmonyProject from '../markdown/harmony_project.md';
import farm2people from '../markdown/farm2people.md';

/* eslint-disable */
const projects = {
  'ptv': {
    title: 'Program for Torture Victims',
    render: () => (
      <>
        <div className="mb-3">
          Program for Torture Victims helps support refugees escaping violence and human rights abuse.
        </div>
        <div className="ptv-text">
          View Github Repositories
        </div>
        <Button className="blue" size="md" href="https://github.com/lablueprint/ptv-mobile-app">
          Mobile App
        </Button>
        <Button className="blue" size="md" href="https://github.com/lablueprint/ptv-web-console">
          Web Console
        </Button>
      </>
    ),
    body: (
      <>
        <SectionHeading>
          Background
        </SectionHeading>
        <SectionParagraph>
          Roughly 70,000–90,000 individuals seek asylum <a
          href="https://www.dhs.gov/sites/default/files/publications/Refugees_Asylees_2017.pdf">every year.</a> These
          asylum seekers range from individuals wanting to find a better life, avoiding political prosecution, or
          escaping torture and persecution for their beliefs. Many of these asylum seekers arrive to the United States
          with nothing else besides what they can carry in their suitcases and have no connections to resources when
          they first arrive.
        </SectionParagraph>
        <SectionHeading>
          Solution
        </SectionHeading>
        <SectionParagraph>
          <a href="https://ptvla.org">Program for Torture Victims (PTV)</a> aims to rebuild the lives of survivors of
          torture and persecution from over 70 countries. PTV does this by connecting survivors to resources and
          rehabilitation to help restore their health and dignity. To better serve and increase awareness of available
          resources for PTV’s service recipients, our project will develop a mobile application that will direct
          survivors to resources specific to their needs and provide an online community.
        </SectionParagraph>
      </>
    ),
  },
  'harmony-project': {
    title: 'Harmony Project',
    render: () => (
      <>
        <div className="mb-3">
          Harmony Project uses music education to provide students with the skills and resources needed to thrive in
          school, in their community, and in life.
        </div>
        <Button className="blue" size="md" href="https://github.com/lablueprint/harmony-project">
          View Github Repository
        </Button>
      </>
    ),
    body: (
      <>
        <SectionHeading>
          Background
        </SectionHeading>
        <SectionParagraph>
          From 2015–2017, Los Angeles County had the
          <a href="https://www.ppic.org/publication/child-poverty-in-california/"> highest amount of children living
          under poverty level in California.</a> 12.2% of children who come from impoverished communities in the Los
          Angeles County do not graduate high school and are dissuaded to pursue their career aspirations due to
          their <a href="http://laschoolreport.com/californias-graduation-rate-rises-but-theres-no-improvement-in-getting-students-eligible-for-state-universities/">
          socioeconomic status.</a>
        </SectionParagraph>
        <SectionHeading>
          Solution
        </SectionHeading>
        <SectionParagraph>
          <a href="https://www.harmony-project.org/">Harmony Project</a> uses music education as an avenue to inspire
          3,500 underserved children to graduate high school, attain higher education, and pursue their career
          aspirations. Harmony Project accomplishes this by pairing children with an instructor who teaches them how to
          play a musical instrument. Our project will create a platform that will serve as the primary means for
          communicating with students and parents as well as collecting enrollment documents, surveys, and evaluation
          data from instructors and for students to submit assignments and receive feedback. The project will greatly
          reduce the burden of reviewing and organizing documents by hand and increase efficiency by moving and
          centralizing information to an online platform accessible by the nonprofit staff, children, and parents.
        </SectionParagraph>
      </>
    ),
  },
  'farm2people': {
    title: '',
    render: () => (
      <>
        <img src={f2pWebapp} width="100%"></img>
      </>
    ),
    body: farm2people,
  },
};
/* eslint-enable */

export default function ProjectInfo({ projectName }) {
  const project = projects[projectName];
  const headerClass = ClassNames('inverse', projectName);
  const projectClass = ClassNames('project-info', projectName);
  const [projectInfo, setProjectInfo] = useState(null);

  useEffect(() => {
    if (projectName === 'ptv') {
      fetch(ptv)
        .then((res) => res.text())
        .then((text) => setProjectInfo(text))
        .catch((err) => console.warn(err));
    } else if (projectName === 'harmony-project') {
      fetch(harmonyProject)
        .then((res) => res.text())
        .then((text) => setProjectInfo(text))
        .catch((err) => console.warn(err));
    } else if (projectName === 'farm2people') {
      fetch(farm2people)
        .then((res) => res.text())
        .then((text) => setProjectInfo(text))
        .catch((err) => console.warn(err));
    }
  }, [projectName]);

  return (
    <>
      <PageHeader
        className={headerClass}
        title={project.title}
        render={project.render}
      />
      <SectionContainer className={projectClass}>
        <Container>
          <ReactMarkdown
            components={{
              h1: SectionHeading,
              h2: SectionHeading2,
              h3: SectionHeading3,
              p: SectionParagraph,
              ul: SectionUnorderedList,
              button: Button,
            }}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {projectInfo}
          </ReactMarkdown>
        </Container>
      </SectionContainer>
    </>
  );
}

ProjectInfo.propTypes = {
  projectName: PropTypes.string.isRequired,
};
