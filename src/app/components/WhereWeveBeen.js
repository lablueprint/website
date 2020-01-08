import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Col, Container, Row, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import Amazon from '../assets/images/companies/amazon.png';
import Avantstay from '../assets/images/companies/avantstay.png';
import CacheCDS from '../assets/images/companies/cache_cds.png';
import GreenDot from '../assets/images/companies/green_dot.png';
import IBM from '../assets/images/companies/ibm.png';
import ImpactHK from '../assets/images/companies/impact_hk.png';
import PPG from '../assets/images/companies/ppg.png';
import Stripe from '../assets/images/companies/stripe.png';

const companyData = [
  {
    logo: Amazon,
    link: 'https://www.amazon.com/',
  },
  {
    logo: Avantstay,
    link: 'https://avantstay.com/',
  },
  {
    logo: CacheCDS,
    link: 'https://www.cachecds.com/',
  },
  {
    logo: GreenDot,
    link: 'https://www.greendot.com/',
  },
  {
    logo: IBM,
    link: 'https://www.ibm.com/us-en/',
  },
  {
    logo: ImpactHK,
    link: 'https://impacthk.org/',
  },
  {
    logo: PPG,
    link: 'http://corporate.ppg.com/Home.aspx',
  },
  {
    logo: Stripe,
    link: 'https://stripe.com/',
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
