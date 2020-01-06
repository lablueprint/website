import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaGithub, FaFacebookF } from 'react-icons/fa';

import LogoWhite from '../assets/images/branding/logo_white.png';

const generalLinks = [
  {
    linkText: 'Home',
    href: '/',
  },
  {
    linkText: 'About',
    href: '/about',
  },
  {
    linkText: 'Projects',
    href: '/projects',
  },
  {
    linkText: 'Contact',
    href: '/contact',
  },
];

const studentLinks = [
  {
    linkText: 'Apply',
    href: 'https://airtable.com/shrru3kJPm50g5MDO',
  },
];

const socialLinks = [
  {
    linkText: 'Facebook',
    href: 'https://facebook.com/lablueprint',
    icon: FaFacebookF,
  },
  {
    linkText: 'Github',
    href: 'https://github.com/lablueprint/',
    icon: FaGithub,
  },
];

export default function Footer() {
  function generateNavItems(heading, links) {
    const navItems = links.map((item) => (
      /* setting key as item is kind of choppy, but each object should be unique
      (in a list) so i don't think there will be any issues */
      <li key={JSON.stringify(item)} className="nav-item pt-1">
        <a href={item.href} className="link">
          {item.icon ? (
            <item.icon className="mr-1 social-icon" />
          ) : null}
          {item.linkText}
        </a>
      </li>
    ));
    return (
      <Col xs={6} md={2} className="mb-5">
        <h6 className="mb-3">{heading}</h6>
        <ul className="nav flex-column">{navItems}</ul>
      </Col>
    );
  }

  const generalNavItems = generateNavItems('General', generalLinks);
  const socialNavItems = generateNavItems('Social Media', socialLinks);
  const studentNavItems = generateNavItems('Student', studentLinks);

  return (
    <div className="container-fluid py-5 footer">
      <Container>
        <Row>
          <Col sm={12} md={4} className="mb-5">
            <Image src={LogoWhite} height={30} className="pr-2" />
            <div className="d-inline-block logo">
              blueprint
            </div>
          </Col>
          {generalNavItems}
          {studentNavItems}
          {/* nonprofitNavItems */}
          {socialNavItems}
        </Row>
        <Row>
          <Col md={4} className="copyright">
            &copy; Blueprint 2019
          </Col>
        </Row>
      </Container>
    </div>
  );
}
