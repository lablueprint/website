import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Container, Row, Col, Image } from 'react-bootstrap';
// import { FaFacebookF, FaTwitter, FaGithub, FaMediumM } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';
import LogoWhite from '../../images/logo_white.png';

const logoStyle = {
  fontFamily: 'Poppins',
  fontWeight: 'bold',
  fontSize: '1.25rem',
  textShadow: 'none',
};

const footerStyle = {
  backgroundColor: '#2C3E50',
  color: 'white',
  minHeight: '35vh',
  fontFamily: 'Roboto',
};

const linkStyle = {
  fontSize: '0.9em',
  fontFamily: 'Roboto',
  color: 'rgba(249,250,252,0.6)',
};

const copyrightStyle = {
  color: 'rgba(249,250,252,0.6)',
  fontSize: '0.9em',
};

const socialIconStyle = {
  verticalAlign: -2,
};

const generalLinks = [
  {
    linkText: 'Home',
    href: '/',
  },
  {
    linkText: 'Team',
    href: '/team',
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

// const studentLinks = [
//   {
//     linkText: "Apply",
//     href: "/"
//   },
//   {
//     linkText: "Process",
//     href: "/"
//   },
//   {
//     linkText: "Faqs",
//     href: "/"
//   }
// ];

// const nonprofitLinks = [
//   {
//     linkText: "Apply",
//     href: "/"
//   },
//   {
//     linkText: "Process",
//     href: "/"
//   },
//   {
//     linkText: "Faqs",
//     href: "/"
//   }
// ];

const socialLinks = [
  // {
  //   linkText: 'Facebook',
  //   href: '/',
  //   icon: FaFacebookF,
  // },
  // {
  //   linkText: 'Twitter',
  //   href: '/',
  //   icon: FaTwitter,
  // },
  {
    linkText: 'Github',
    href: 'https://github.com/lablueprint/',
    icon: FaGithub,
  },
  // {
  //   linkText: 'Blog',
  //   href: '/',
  //   icon: FaMediumM,
  // }
];

function generateNavItems(heading, links) {
  const navItems = links.map((item) => (
    /* setting key as item is kind of choppy, but each object should be unique
    (in a list) so i don't think there will be any issues */
    <li key={JSON.stringify(item)} className="nav-item pt-1">
      <a style={linkStyle} href={item.href}>
        {item.icon ? (
          <item.icon style={socialIconStyle} className="mr-1" />
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

export default function Footer() {
  const generalNavItems = generateNavItems('General', generalLinks);
  // const studentNavItems = generateNavItems('Students', studentLinks);
  // const nonprofitNavItems = generateNavItems('Nonprofits', nonprofitLinks);
  const socialNavItems = generateNavItems('Social Media', socialLinks);

  return (
    <div className="container-fluid py-5" style={footerStyle}>
      <Container>
        <Row>
          <Col sm={12} md={4} className="mb-5">
            <Image src={LogoWhite} height={30} className="pr-2" />
            <div className="d-inline-block" style={logoStyle}>
              blueprint
            </div>
          </Col>
          {generalNavItems}
          {/* studentNavItems */}
          {/* nonprofitNavItems */}
          {socialNavItems}
        </Row>
        <Row>
          <Col md={4} style={copyrightStyle}>
            &copy; LA Blueprint 2019
          </Col>
        </Row>
      </Container>
    </div>
  );
}
