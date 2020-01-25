import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaGithub, FaFacebookF, FaLinkedinIn, FaInstagram,
} from 'react-icons/fa';

import LogoWhite from '../assets/images/branding/logo_white.png';

const generalLinks = [
  {
    linkText: 'Home',
    href: '/',
    internal: true,
  },
  {
    linkText: 'About',
    href: '/about',
    internal: true,
  },
  {
    linkText: 'Projects',
    href: '/projects',
    internal: true,
  },
  {
    linkText: 'Contact',
    href: '/contact',
    internal: true,
  },
];

// const studentLinks = [
//   {
//     linkText: 'Apply',
//     href: 'https://airtable.com/shrru3kJPm50g5MDO',
//     internal: false,
//   },
// ];

const socialLinks = [
  {
    linkText: 'Facebook',
    href: 'https://facebook.com/lablueprint',
    icon: FaFacebookF,
    internal: false,
  },
  {
    linkText: 'Instagram',
    href: 'https://instagram.com/lablueprint',
    icon: FaInstagram,
    internal: false,
  },
  {
    linkText: 'Github',
    href: 'https://github.com/lablueprint/',
    icon: FaGithub,
    internal: false,
  },
  {
    linkText: 'LinkedIn',
    href: 'https://www.linkedin.com/company/la-blueprint/',
    icon: FaLinkedinIn,
    internal: false,
  },
];

export default function Footer() {
  function generateNavItems(heading, links) {
    const navItems = links.map((item) => {
      const body = (
        <>
          {item.icon ? (
            <item.icon className="mr-1 social-icon" />
          ) : null}
          {item.linkText}
        </>
      );
      return (
        <li key={JSON.stringify(item)} className="nav-item pt-1">
          {item.internal ? (
            <Link to={item.href} className="link">{body}</Link>
          ) : <a href={item.href} className="link">{body}</a>}
        </li>
      );
    });
    return (
      <Col xs={6} md={2} className="mb-5">
        <h6 className="mb-3">{heading}</h6>
        <ul className="nav flex-column">{navItems}</ul>
      </Col>
    );
  }

  const generalNavItems = generateNavItems('General', generalLinks);
  const socialNavItems = generateNavItems('Social Media', socialLinks);
  // const studentNavItems = generateNavItems('Students', studentLinks);

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
          {/* {studentNavItems} */}
          {/* nonprofitNavItems */}
          {socialNavItems}
        </Row>
        <Row>
          <Col md={4} className="copyright">
            &copy; Blueprint 2020
          </Col>
        </Row>
      </Container>
    </div>
  );
}
