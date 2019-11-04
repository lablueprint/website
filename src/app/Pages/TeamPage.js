import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import MemberProfile from '../Components/MemberProfile';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import leo_liu from '..//../images/team/leo-liu.jpg';
import summer_siu from '..//../images/team/summer-siu.jpg';
import tiffany_feng from '..//../images/team/tiffany-feng.jpg';
import jonathan_fan from '..//../images/team/jonathan-fan.jpg';
import raymond_phan from '..//../images/team/raymond-phan.jpg';
import derek_chu from '..//../images/team/derek-chu.jpg';
import vincent_cheung from '..//../images/team/vincent-cheung.jpg';
import ryan_young from '..//../images/team/ryan-young.jpg';

export default function TeamPage() {
  return (
    <Fade bottom>
      <Container style={containerStyle}>
        <Row style={{height: 100}}>
          <Col><h1>Meet the Team</h1></Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <MemberProfile
              image={leo_liu}
              name={"Leo Liu"}
              position={"President"}
              linkedInURL={"https://www.linkedin.com/in/leoliuu/"} />
          </Col>
          <Col xs={6} md={4}>
            <MemberProfile
              image={ryan_young}
              name={"Ryan Young"}
              position={"Sales Representative"}
              linkedInURL={"https://www.linkedin.com/in/ryanjayyoung/"} />
          </Col>
          <Col xs={6} md={4}>
            <MemberProfile
              image={summer_siu}
              name={"Summer Siu"}
              position={"Director of Outreach"}
              linkedInURL={"https://www.linkedin.com/in/summer-siu-997824149/"} />
          </Col>
          <Col xs={6} md={4}>
            <MemberProfile
              image={tiffany_feng}
              name={"Tiffany Feng"}
              position={"Director of Design"}
              linkedInURL={"https://www.linkedin.com/in/tiffany-feng-b12219162/"} />
          </Col>
          <Col xs={6} md={4}>
            <MemberProfile
              image={jonathan_fan}
              name={"Jonathan Fan"}
              position={"Director of Marketing"}
              linkedInURL={"https://www.linkedin.com/in/jonathan-f-424b35106/"} />
          </Col>
          <Col xs={6} md={4}>
            <MemberProfile
              image={raymond_phan}
              name={"Raymond Phan"}
              position={"Director of Technology"}
              linkedInURL={"https://www.linkedin.com/in/raymondphan/"} />
          </Col>
          <Col xs={6} md={4}>
            <MemberProfile
              image={derek_chu}
              name={"Derek Chu"}
              position={"Project Lead"}
              linkedInURL={"https://www.linkedin.com/in/derekchu98/"} />
          </Col>
          <Col xs={6} md={4}>
            <MemberProfile
              image={vincent_cheung}
              name={"Vincent Cheung"}
              position={"Software Engineer"}
              linkedInURL={"https://www.linkedin.com/in/vincent-cheung-b6b202137/"} />
          </Col>
        </Row>
      </Container>
    </Fade>
  );
}

const containerStyle = {
  marginTop: 100,
  textAlign: "center",
  fontFamily: 'Poppins'
}
