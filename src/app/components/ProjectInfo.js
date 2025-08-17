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
import tckApp from '../assets/images/projects/tckgraphic.png';
import stfApp from '../assets/images/projects/stfgraphic.png';
import apifmApp from '../assets/images/projects/apifmgraphic.png';
import fotcApp from '../assets/images/projects/fotcgraphic.png';
import sraaApp from '../assets/images/projects/sraagraphic.png';
import tcwApp from '../assets/images/projects/tcwgraphic.png';
import globalgreenApp from '../assets/images/projects/gg_thumbnail.png';
import idontmindApp from '../assets/images/projects/idm_thumbnail.png';
import writegirlApp from '../assets/images/projects/wg_thumbnail.png';
import endoverdoseApp from '../assets/images/projects/eo_thumbnail.png';
import teapotgardensApp from '../assets/images/projects/teapot_thumbnail.png';
import unitedwayApp from '../assets/images/projects/uw_thumbnail.png';

import ptv from '../markdown/ptv.md';
import harmonyProject from '../markdown/harmony_project.md';
import farm2people from '../markdown/farm2people.md';
import apifm from '../markdown/apifm.md';
import tck from '../markdown/theconsciouskid.md';
import stf from '../markdown/shoesthatfit.md';
import fotc from '../markdown/fotc.md';
import sraa from '../markdown/sraa.md';
import tcw from '../markdown/tcw.md';
import globalgreen from '../markdown/globalgreen.md';
import idontmind from '../markdown/idontmind.md';
import writegirl from '../markdown/writegirl.md';
import endoverdose from '../markdown/endoverdose.md';
import teapotgardens from '../markdown/teapotgardens.md';
import unitedway from '../markdown/unitedway.md';

/* eslint-disable */
const projects = {
  // 2024-25
  'endoverdose': {
    title: '',
    render: () => (
      <>
        <img src={endoverdoseApp} width="100%" style={{objectFit: 'contain'}}></img>
      </>
    )
  },
  'teapotgardens': {
    title: '',
    render: () => (
      <>
        <img src={teapotgardensApp} width="100%" style={{objectFit: 'contain'}}></img>
      </>
    )
  },
  'unitedway': {
    title: '',
    render: () => (
      <>
        <img src={unitedwayApp} width="100%" style={{objectFit: 'contain'}}></img>
      </>
    )
  },
  // 2023-24
  'globalgreen': {
    title: '',
    render: () => (
      <>
        <img src={globalgreenApp} width="100%" style={{objectFit: 'contain'}}></img>
      </>
    )
  },
  'idontmind': {
    title: '',
    render: () => (
      <>
        <img src={idontmindApp} width="100%" style={{objectFit: 'contain'}}></img>
      </>
    )
  },
  'writegirl': {
    title: '',
    render: () => (
      <>
        <img src={writegirlApp} width="100%" style={{objectFit: 'contain'}}></img>
      </>
    )
  },
  // 2022-23
  'fotc': {
    title: '',
    render: () => (
      <>
        <img src={fotcApp} width="100%" style={{objectFit: 'contain'}}></img>
      </>
    )
  },
  'sraa': {
    title: '',
    render: () => (
      <>
        <img src={sraaApp} width="100%" style={{objectFit: 'contain'}}></img>
      </>
    )
  },
  'tcw': {
    title: '',
    render: () => (
      <>
        <img src={tcwApp} width="100%" style={{objectFit: 'contain'}}></img>
      </>
    )
  },
  // 2021-22
  'apifm': {
    title: '',
    render: () => (
      <>
        <img src={apifmApp} width="100%" style={{objectFit: 'contain'}}></img>
      </>
    )
  },
  'stf': {
    title: '',
    render: () => (
      <>
        <img src={stfApp} width="100%" style={{objectFit: 'contain'}}></img>
      </>
    )
  },
  'tck': {
    title: '',
    render: () => (
      <>
        <img src={tckApp} width="100%" style={{objectFit: 'contain'}}></img>
      </>
    )
  },
  // 2020-21
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
    if (projectName === 'endoverdose') {
      fetch(endoverdose)
        .then((res) => res.text())
        .then((text) => setProjectInfo(text))
        .catch((err) => console.warn(err));
    } else if (projectName === 'teapotgardens') {
      fetch(teapotgardens)
        .then((res) => res.text())
        .then((text) => setProjectInfo(text))
        .catch((err) => console.warn(err));
    } else if (projectName === 'unitedway') {
      fetch(unitedway)
        .then((res) => res.text())
        .then((text) => setProjectInfo(text))
        .catch((err) => console.warn(err));
    } else if (projectName === 'globalgreen') {
      fetch(globalgreen)
        .then((res) => res.text())
        .then((text) => setProjectInfo(text))
        .catch((err) => console.warn(err));
    } else if (projectName === 'idontmind') {
      fetch(idontmind)
        .then((res) => res.text())
        .then((text) => setProjectInfo(text))
        .catch((err) => console.warn(err));
    } else if (projectName === 'writegirl') {
      fetch(writegirl)
        .then((res) => res.text())
        .then((text) => setProjectInfo(text))
        .catch((err) => console.warn(err));
    } else if (projectName === 'fotc') {
      fetch(fotc)
        .then((res) => res.text())
        .then((text) => setProjectInfo(text))
        .catch((err) => console.warn(err));
    } else if (projectName === 'sraa') {
      fetch(sraa)
        .then((res) => res.text())
        .then((text) => setProjectInfo(text))
        .catch((err) => console.warn(err));
    } else if (projectName === 'tcw') {
      fetch(tcw)
        .then((res) => res.text())
        .then((text) => setProjectInfo(text))
        .catch((err) => console.warn(err));
    } else if (projectName === 'apifm') {
      fetch(apifm)
        .then((res) => res.text())
        .then((text) => setProjectInfo(text))
        .catch((err) => console.warn(err));
    } else if (projectName === 'tck') {
      fetch(tck)
        .then((res) => res.text())
        .then((text) => setProjectInfo(text))
        .catch((err) => console.warn(err));
    } else if (projectName === 'stf') {
      fetch(stf)
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
