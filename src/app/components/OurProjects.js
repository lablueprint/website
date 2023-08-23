import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SectionContainer from './SectionContainer';
import SectionHeading from './SectionHeading';
import SectionSubtitle from './SectionSubtitle';
import ProjectCard from './ProjectCard';

import ptv from '../assets/images/projects/PTV_Thumbnail.png';
import harmonyProject from '../assets/images/projects/HP_Thumbnail.png';
import farm2people from '../assets/images/projects/F2P_Thumbnail.png';

import tck from '../assets/images/projects/tckgraphic.png';
import stf from '../assets/images/projects/stfgraphic.png';
import apifm from '../assets/images/projects/apifmgraphic.png';

import fotc from '../assets/images/projects/fotcgraphic.png';
import sraa from '../assets/images/projects/sraagraphic.png';
import tcw from '../assets/images/projects/tcwgraphic.png';

const projects = [
  {
    image: fotc,
    title: 'Friends of the Children',
    desc:
      'Friends of the Children-LA disrupts the cycle of generational poverty and supports families by assigning full-time, salaried mentors (Friends) for 12+ years to underserved youth such as those in foster care.',
    link: 'fotc',
  },
  {
    image: sraa,
    title: 'Skid Row Arts Alliance',
    desc: 'SRAA provides residents with community-wide art projects, workshops, and events to present the neighborhood as a united front.',
    link: 'sraa',
  },
  {
    image: tcw,
    title: 'Trans Can Work',
    desc: 'TransCanWork provides individualized support for trans and non-binary jobseekers, as well as DEI training for employers, in order to create a workforce that is more inclusive and welcoming to all.',
    link: 'tcw',
  },
  {
    image: apifm,
    title: 'Asian and Pacific Islander Forward Movement',
    desc:
      'Asian Pacific Islander Forward Movement is an organization that envisions a world where Asian and Pacific Islander communities have full access to good health through grassroots initiatives.',
    link: 'apifm',
  },
  {
    image: tck,
    title: 'The Conscious Kid',
    desc: 'The Conscious Kid encourages healthy racial identity development in kids ages 0-18 through research, curating representative book lists, and sharing anti-racist educational resources.',
    link: 'tck',
  },
  {
    image: stf,
    title: 'Shoes That Fit',
    desc: 'Shoes That Fit tackles one of the most visible signs of poverty by giving kids in need new athletic shoes to attend school with dignity and joy',
    link: 'stf',
  },
  {
    image: ptv,
    title: 'Program for Torture Victims',
    desc: 'Program for Torture Victims helps support refugees escaping violence and human rights abuse.',
    link: 'ptv',
  },
  {
    image: harmonyProject,
    title: 'Harmony Project',
    desc: 'Harmony Project uses music education to provide students with the skills and resources needed to thrive in school, in their community, and in life.',
    link: 'harmony-project',
  },
  {
    image: farm2people,
    title: 'Farm2People',
    desc: 'Farm2People is a team of food professionals and volunteers dedicated to fixing the recent disruption to our food supply chain and promoting a more sustainable food system for the future.',
    link: 'farm2people',
  },
];

export default function OurProjects() {
  const projectCards = projects.map((item) => (
    <ProjectCard
      key={JSON.stringify(item)}
      image={item.image}
      title={item.title}
      link={item.link}
      desc=""
      className="card-home"
    />
  ));
  return (
    <SectionContainer className="our-projects off-white">
      <Container>
        <div className="pink-half-circle" />

        <SectionHeading>Our Projects</SectionHeading>

        <SectionSubtitle>
          Every year, our teams of student developers and designers work with nonprofits
          to deliver an application that best suits their needs.
        </SectionSubtitle>

        <SectionSubtitle className="project-button">
          <Link to="/projects">
            <Button className="raised-button outline-black">Check Out Our Work</Button>
          </Link>
        </SectionSubtitle>

        {/* <h3 className="subtitle-blue">
          <Link className="link" to="/projects">
            Check out our past projects ➜
          </Link>
        </h3> */}
        <div className="card-deck">{projectCards}</div>
      </Container>
    </SectionContainer>
  );
}
