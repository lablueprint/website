import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import '../../App.css';

import amazon from "..//..//images/past-companies/amazon.webp";
import avantstay from "..//..//images/past-companies/avantstay.webp";
import cache from "..//..//images/past-companies/cache.webp";
import green_dot from "..//..//images/past-companies/green-dot.webp";
import ibm from "..//..//images/past-companies/ibm.webp";
import impact_hk from "..//..//images/past-companies/impact-hk.webp";
import ppg from "..//..//images/past-companies/ppg.webp";
import stripe from "..//..//images/past-companies/stripe.webp";

const companyData = [
  {
    logo: amazon,
    link: "https://www.amazon.com/",
  },
  {
    logo: avantstay,
    link: "https://avantstay.com/",
  },
  {
    logo: cache,
    link: "https://www.cachecds.com/",
  },
  {
    logo: green_dot,
    link: "https://www.greendot.com/",
  },
  {
    logo: ibm,
    link: "https://www.ibm.com/us-en/",
  },
  {
    logo: impact_hk,
    link: "https://impacthk.org/",
  },
  {
    logo: ppg,
    link: "http://corporate.ppg.com/Home.aspx",
  },
  {
    logo: stripe,
    link: "https://stripe.com/",
  }
];

export default function WhereWeveBeen() {
  const companyLinks = companyData.map(item =>
    <a href={item.link}><Image className="p-2" src={item.logo}/></a>
  );
  return (
    <div className="container-fluid py-5">
      <Container className="py-5" style={containerStyle}>
        <Row style={{height: 100}}>
          <Col><h1>Where We've Been</h1></Col>
        </Row>
        <Fade bottom>
          <Row>
            <Col>
              {companyLinks}
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}

const containerStyle = {
  textAlign: "center",
  fontFamily: 'Roboto',
  marginBottom: 150
};