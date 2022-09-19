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
import SectionOrderedList from './SectionOrderedList';
import SectionParagraph from './SectionParagraph';
import SectionUnorderedList from './SectionUnorderedList';
import SectionTable from './SectionTable';
import PageHeader from './PageHeader';

import ptvMobileApp from '../assets/images/projects/PTV_Thumbnail.png';
import f2pWebapp from '../assets/images/projects/farm2people/F2P_Thumbnail.png';
import hpMobileApp from '../assets/images/projects/HP_Thumbnail.png';

import ptv from '../markdown/ptv.md';
import harmonyProject from '../markdown/harmony_project.md';
import farm2people from '../markdown/farm2people.md';
import apifm from '../markdown/apifm.md';

/* eslint-disable */
const projects = {
  'apifm': {
    title: '',
    render: () => (
      <>
        <img src={ptvMobileApp} width="75%" style={{objectFit: 'contain'}}></img>
      </>
    )
  },
  'ptv': {
    title: '',
    render: () => (
      <>
        <img src={ptvMobileApp} width="75%" style={{objectFit: 'contain'}}></img>
      </>
    )
  },
  'harmony-project': {
    title: '',
    render: () => (
      <img src={hpMobileApp} width="75%" style={{objectFit: 'contain'}}></img>
    )
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
    if (projectName === 'apifm') {
      fetch(apifm)
        .then((res) => res.text())
        .then((text) => setProjectInfo(text))
        .catch((err) => console.warn(err));
    } else if (projectName === 'ptv') {
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
              ol: SectionOrderedList,
              button: Button,
              table: SectionTable,
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
