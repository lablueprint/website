import React from 'react';
import { Container } from 'react-bootstrap';

import {
  FaSitemap, FaCrosshairs, FaTools, FaCarAlt, FaLayerGroup,
} from 'react-icons/fa';

import SectionContainer from '../SectionContainer';
import SectionHeading from '../SectionHeading';
import SectionSubtitle from '../SectionSubtitle';
import SectionParagraph from '../SectionParagraph';

export default function NonprofitWhat() {
  const iconStyles = { marginRight: 10 };

  return (
    <SectionContainer className="off-white">
      <Container>
        <SectionHeading>What are we looking for?</SectionHeading>

        <SectionSubtitle>
          <FaSitemap style={iconStyles} />
          Feasibility
        </SectionSubtitle>

        <SectionParagraph>
          Is the proposed project feasible given the timeframe?
          <br />
          Dreaming big is grandiose but we value delivering results over making empty promises.
          <br />
          Would you still be satisfied with a project that is less complete?
          What features should be prioritized?
        </SectionParagraph>

        <SectionSubtitle>
          <FaCrosshairs style={iconStyles} />
          Scope
        </SectionSubtitle>

        <SectionParagraph>
          Scoping out the project is one of our most important process while collaborating with you.
          <br />
          Is the project still within our timeframe after reinvent and simplify?
          <br />
          We want to focus on 1-2 main features to keep the project under control.
          To avoid quickly blowing up in scope,
          we always underpromise and overdeliver when interfacing with nonprofits.
        </SectionParagraph>

        <SectionSubtitle>
          <FaTools style={iconStyles} />
          Maintainability
        </SectionSubtitle>

        <SectionParagraph>
          Will the project be maintained after it is delivered?
          <br />
          Do you have resources to either hire a developer or an administrator
          to maintain the project after completion (or even during development)?
          <br />
          We understand that this is difficult to achieve as a non-profit with limited resources,
          so we will keep our project as bug-free code as possible during development.
          However, we still need to keep in mind on how the project can be maintained
          after delivery, so the intended users can benefit the most from our work.
        </SectionParagraph>

        <SectionSubtitle>
          <FaCarAlt style={iconStyles} />
          Impact
        </SectionSubtitle>

        <SectionParagraph>
          Will the project be impactful for the nonprofit?
          <br />
          Does our project hold substantial weight with your mission?
          <br />
          We know that web and mobile applications are not the means to all problems,
          but we do have the potential to impact in more places than others.
        </SectionParagraph>

        <SectionSubtitle>
          <FaLayerGroup style={iconStyles} />
          Interest
        </SectionSubtitle>

        <SectionParagraph>
          Is there an interest within our own organization for this project?
          <br />
          We love that there are so many nonprofits that are changing the world to a better place.
          <br />
          Unfortunately, we are only a small group of students who have limited time and resources.
          <br />
          Having an exciting project will motivate us to work more and exceed expectations!
        </SectionParagraph>

      </Container>
    </SectionContainer>
  );
}
