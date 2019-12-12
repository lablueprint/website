import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Col, Container, Row, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import Amazon from '../../images/past-companies/amazon.webp';
import Avantstay from '../../images/past-companies/avantstay.webp';
import CacheCDS from '../../images/past-companies/cache.webp';
import GreenDot from '../../images/past-companies/green-dot.webp';
import IBM from '../../images/past-companies/ibm.webp';
import ImpactHK from '../../images/past-companies/impact-hk.webp';
import PPG from '../../images/past-companies/ppg.webp';
import Stripe from '../../images/past-companies/stripe.webp';

const containerStyle = {
  textAlign: 'center',
  fontFamily: 'Roboto',
  marginBottom: 150,
};

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
    <a href={item.link}>
      <Image className="p-2" src={item.logo} />
    </a>
  ));
  return (
    <div className="container-fluid py-5">
      <Container className="py-5" style={containerStyle}>
        <Row style={{ height: 100 }}>
          <Col>
            <h1>Where We&#39;ve Been</h1>
          </Col>
        </Row>
        <Fade bottom>
          <Row>
            <Col>{companyLinks}</Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}
