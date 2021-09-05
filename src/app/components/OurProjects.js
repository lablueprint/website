import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SectionContainer from './SectionContainer';
import SectionHeading from './SectionHeading';
import SectionSubtitle from './SectionSubtitle';
import ProjectCard from './ProjectCard';

import ptv from '../assets/images/projects/ptv.jpg';
import harmonyProject from '../assets/images/projects/HarmonyProject/HP_Thumbnail.png';
import farm2people from '../assets/images/projects/farm2people/F2P_Thumbnail.png';

const projects = [
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
    <SectionContainer className="our-projects">
      <Container>
        <SectionHeading>Our Projects</SectionHeading>

        <SectionSubtitle>
          Every year, our teams of student developers and designers work with nonprofits to deliver
          an application that best suits their needs.
        </SectionSubtitle>

        <h3 className="subtitle-blue">
          <Link className="link" to="/projects">
            Check out our current projects ➜
          </Link>
        </h3>
        <div className="card-deck">{projectCards}</div>
      </Container>
    </SectionContainer>
  );
}
