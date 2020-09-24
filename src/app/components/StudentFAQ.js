import React from 'react';
import { Container } from 'react-bootstrap';

import SectionContainer from './SectionContainer';
import SectionHeading from './SectionHeading';

const faq = [
  {
    question: 'Do I need experience to apply?',
    answer: 'Technical experience is not a requirement! We look for passion and drive above all, as we will help support our members to grow and learn about our tools.',
  },
  {
    question: 'How much of a time commitment is Blueprint?',
    answer: 'We expect about 10-12 hours out of our members per week. This will be split between worksessions, team bonding, and individual time spent on a project.',
  },
  {
    question: 'How are the project teams structured?',
    answer: 'Project teams typically consist of 1 project lead, 4-6 developers, and 1-2 designers. Our projects are developed and designed over Fall - Spring every year.',
  },
  {
    question: 'Do I get to choose the team that I am on?',
    answer: 'When you join Blueprint, we will have a period for project leads to present their projects to the rest of Blueprint. You may then fill out an interest form and we will put people onto teams of their choice.',
  },
];

export default function StudentFAQ() {
  const faqItems = faq.map((faqItem) => (
    <div key={JSON.stringify(faqItem)}>
      <div className="faq-question">
        {faqItem.question}
      </div>
      <div className="faq-answer">
        {faqItem.answer}
      </div>
    </div>
  ));

  return (
    <SectionContainer className="student-faq">
      <Container className="student-faq-container mb-5 text-center">
        <SectionHeading className="student-faq-heading">Frequently Asked Questions</SectionHeading>
        {faqItems}
      </Container>
    </SectionContainer>
  );
}
