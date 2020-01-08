import React from 'react';
import { Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import SectionContainer from './SectionContainer';
import SectionHeading from './SectionHeading';
import SectionParagraph from './SectionParagraph';
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
    /* eslint-disable */
    body: (
      <>
        <SectionHeading>
          Background
        </SectionHeading>
        <SectionParagraph>
          Rougly 70,000-90,000 individuals seek asylum <a
          href="https://www.dhs.gov/sites/default/files/publications/Refugees_Asylees_2017.pdf">every year.</a> These
          asylum seekers range from individuals wanting to find a better life, avoiding political prosecution, or
          escaping torture and persecution for their beliefs. Many of these asylum seekers arrive to the United States
          with nothing else besides what they can carry in their suitcases and have no connections to resources when they
          first arrive.
        </SectionParagraph>
        <SectionHeading>
          Solution
        </SectionHeading>
        <SectionParagraph>
          Program for Torture Victims (PTV) aims to rebuild the lives of survivors of torture and persecution from over 70
          countries. PTV does this by connecting survivors to resources and rehabilitation to help restore their health and
          dignity. To better serve and increase awareness of available resources for PTV’s service recipients, our project
          will develop a mobile application that will direct survivors to resources specific to their needs and provide an
          online community.
        </SectionParagraph>
      </>
    ),
    /* eslint-enable */
  },
  harmony: {
    title: 'Harmony Project',
    render: () => 'Harmony Project uses music education to provide students with the skills and resources needed to thrive in school, in their community, and in life.',
    /* eslint-disable */
    body: (
      <>
        <SectionHeading>
          Background
        </SectionHeading>
        <SectionParagraph>
          From 2015-2017, Los Angeles County had the <a href="https://www.ppic.org/publication/child-poverty-in-california/">
          highest amount of children living under poverty level in California.</a> 12.2% of children who come from
          impoverished communities in the Los Angeles County do not graduate high school and are dissuaded to pursue their
          career aspirations due to their <a
          href="http://laschoolreport.com/californias-graduation-rate-rises-but-theres-no-improvement-in-getting-students-eligible-for-state-universities/">
          socioeconomic status.</a>
        </SectionParagraph>
        <SectionHeading>
          Solution
        </SectionHeading>
        <SectionParagraph>
          Harmony Project uses music education as an avenue to inspire 3,500 underserved children to graduate high school,
          attain higher education, and pursue their career aspirations. Harmony Project accomplishes this by pairing children
          with an instructor who teaches them how to play a musical instrument. Our project will create a platform that will
          serve as the primary means for communicating with students and parents as well as collecting enrollment documents,
          surveys, and evaluation data from instructors and for students to submit assignments and receive feedback. The
          project will greatly reduce the burden of reviewing and organizing documents by hand and increase efficiency by
          moving and centralizing information to an online platform accessible by the nonprofit staff, children, and parents.
        </SectionParagraph>
      </>
    ),
    /* eslint-enable */
  },
};

export default function ProjectInfo({ projectName }) {
  const project = projects[projectName];
  const headerClass = ClassNames('inverse', projectName);
  const projectClass = ClassNames('project-info', projectName);

  return (
    <>
      <PageHeader
        className={headerClass}
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
