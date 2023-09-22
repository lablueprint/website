import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Col, Container, Row, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import Amazon from '../assets/images/companies/amazon.svg';
import Apple from '../assets/images/companies/apple.svg';
import Bloomberg from '../assets/images/companies/bloomberg.svg';
import Disney from '../assets/images/companies/disney.svg';
import Facebook from '../assets/images/companies/facebook.svg';
import Fidelity from '../assets/images/companies/fidelity.svg';
import Instagram from '../assets/images/companies/instagram.svg';
import IBM from '../assets/images/companies/ibm.svg';
import Figma from '../assets/images/companies/figma.svg';
import Google from '../assets/images/companies/google.svg';
import Microsoft from '../assets/images/companies/microsoft.svg';
import Oracle from '../assets/images/companies/oracle.svg';
import Qualcomm from '../assets/images/companies/qualcomm.svg';
import Reddit from '../assets/images/companies/reddit.svg';
import Roblox from '../assets/images/companies/roblox.svg';
import Slack from '../assets/images/companies/slack.svg';
import Snap from '../assets/images/companies/snap.svg';
import Stripe from '../assets/images/companies/stripe.svg';
import Tesla from '../assets/images/companies/tesla.svg';
import Zoom from '../assets/images/companies/zoom.svg';

const companyData = [
  {
    logo: Amazon,
    link: 'https://www.amazon.com/',
  },
  {
    logo: Apple,
    link: 'https://www.apple.com/',
  },
  {
    logo: Bloomberg,
    link: 'https://www.bloomberg.com/',
  },
  {
    logo: Disney,
    link: 'https://www.disney.com/',
  },
  {
    logo: Facebook,
    link: 'https://www.facebook.com/',
  },
  {
    logo: Fidelity,
    link: 'https://www.fidelity.com/',
  },
  {
    logo: Instagram,
    link: 'https://www.instagram.com/',
  },
  {
    logo: IBM,
    link: 'https://www.ibm.com/us-en/',
  },
  {
    logo: Figma,
    link: 'https://www.figma.com/',
  },
  {
    logo: Google,
    link: 'https://www.google.com/',
  },
  {
    logo: Microsoft,
    link: 'https://www.microsoft.com/',
  },
  {
    logo: Oracle,
    link: 'https://www.oracle.com/',
  },
  {
    logo: Qualcomm,
    link: 'https://www.qualcomm.com/',
  },
  {
    logo: Reddit,
    link: 'https://www.reddit.com/',
  },
  {
    logo: Roblox,
    link: 'https://www.roblox.com/',
  },
  {
    logo: Slack,
    link: 'https://www.slack.com/',
  },
  {
    logo: Snap,
    link: 'https://www.snap.com/',
  },
  {
    logo: Stripe,
    link: 'https://stripe.com/',
  },
  {
    logo: Tesla,
    link: 'https://www.tesla.com/',
  },
  {
    logo: Zoom,
    link: 'https://www.zoom.com/',
  },
];

export default function WhereWeveBeen() {
  const companyLinks = companyData.map((item) => (
    <a className="company-link" href={item.link} key={JSON.stringify(item)}>
      <Fade>
        <Image className="company-img" src={item.logo} />
      </Fade>
    </a>
  ));
  return (
    <div className="container-fluid py-5 where-weve-been">
      <Container className="py-5">
        <Row className="title">
          <Col>
            <h1>Where We&#39;ve Been</h1>
          </Col>
        </Row>
        <Row>
          <div className="company-container">{companyLinks}</div>
        </Row>
      </Container>
    </div>
  );
}
