import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaMedium,
} from 'react-icons/fa';

import LogoWhite from '../assets/images/branding/logo_white.svg';

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

const studentLinks = [
  {
    linkText: 'About',
    href: '/students',
    internal: true,
  },
  {
    linkText: 'FAQ',
    href: '/students#FAQ',
    internal: true,
    hash: true,
  },
  // {
  //   linkText: 'Apply',
  //   href: '/students#Apply',
  //   internal: true,
  //   hash: true,
  // },
];

const nonprofitLinks = [
  {
    linkText: 'About',
    href: '/nonprofits',
    internal: true,
  },
  {
    linkText: 'FAQ',
    href: '/nonprofits#FAQ',
    internal: true,
    hash: true,
  },
  {
    linkText: 'Apply',
    href: '/nonprofits#Apply',
    internal: true,
    hash: true,
  },
  {
    linkText: 'Form 1023',
    href: '/Approval_Letter.pdf',
    internal: false,
  },
];

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
  {
    linkText: 'Medium',
    href: 'https://medium.com/@lablueprint',
    icon: FaMedium,
    internal: false,
  },
];

export default function Footer() {
  function generateNavItems(heading, links) {
    const navItems = links.map((item) => {
      const body = (
        <>
          {item.icon ? <item.icon className="mr-1 social-icon" /> : null}
          <div className="text">{item.linkText}</div>
        </>
      );

      let listItem = null;
      if (!item.internal) {
        listItem = (
          <a href={item.href} className="link">
            {body}
          </a>
        );
      } else if (!item.hash) {
        listItem = (
          <Link to={item.href} className="link">
            {body}
          </Link>
        );
      } else {
        listItem = (
          <HashLink to={item.href} className="link">
            {body}
          </HashLink>
        );
      }

      return (
        <li key={JSON.stringify(item)} className="nav-item pt-1">
          {listItem}
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
  const studentNavItems = generateNavItems('For Students', studentLinks);
  const nonprofitNavItems = generateNavItems('For Nonprofits', nonprofitLinks);

  return (
    <div className="container-fluid py-5 footer">
      <Container>
        <Row>
          <Col sm={12} md={4} className="mb-5 logo-container">
            <Image src={LogoWhite} height={30} className="logo-image" />
            <div className="d-inline-block logo">blueprint</div>
          </Col>
          {generalNavItems}
          {studentNavItems}
          {nonprofitNavItems}
          {socialNavItems}
        </Row>
        <Row>
          <Col md={4} className="copyright">
            &copy; Blueprint
            {' '}
            { new Date().getFullYear() }
          </Col>
        </Row>
      </Container>
    </div>
  );
}
