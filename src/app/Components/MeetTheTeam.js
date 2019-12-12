import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import MemberProfile from './MemberProfile';

import DerekChu from '../../images/team/derek-chu.jpg';
import JonathanFan from '../../images/team/jonathan-fan.jpg';
import JustinJeon from '../../images/team/justin-jeon.jpg';
import LeoLiu from '../../images/team/leo-liu.jpg';
import RaymondPhan from '../../images/team/raymond-phan.jpg';
import SummerSiu from '../../images/team/summer-siu.jpg';
import TiffanyFeng from '../../images/team/tiffany-feng.jpg';
import VincentCheung from '../../images/team/vincent-cheung.jpg';

const containerStyle = {
  textAlign: 'center',
  fontFamily: 'Roboto',
};

const backgroundStyle = {
  backgroundColor: '#f8f8f8',
};

const members = [
  {
    image: LeoLiu,
    name: 'Leo Liu',
    position: 'President',
    linkedInURL: 'https://www.linkedin.com/in/leoliuu/',
  },
  {
    image: SummerSiu,
    name: 'Summer Siu',
    position: 'Director of Outreach',
    linkedInURL: 'https://www.linkedin.com/in/summer-siu-997824149/',
  },
  {
    image: TiffanyFeng,
    name: 'Tiffany Feng',
    position: 'Director of Design',
    linkedInURL: 'https://www.linkedin.com/in/tiffany-feng-b12219162/',
  },
  {
    image: JonathanFan,
    name: 'Jonathan Fan',
    position: 'Director of Marketing',
    linkedInURL: 'https://www.linkedin.com/in/jonathan-f-424b35106/',
  },
  {
    image: RaymondPhan,
    name: 'Raymond Phan',
    position: 'Director of Technology',
    linkedInURL: 'https://www.linkedin.com/in/raymondphan/',
  },
  {
    image: DerekChu,
    name: 'Derek Chu',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/derekchu98/',
  },
  {
    image: VincentCheung,
    name: 'Vincent Cheung',
    position: 'Software Engineer',
    linkedInURL: 'https://www.linkedin.com/in/vincent-cheung-b6b202137/',
  },
  {
    image: JustinJeon,
    name: 'Justin Jeon',
    position: 'Software Engineer',
    linkedInURL: 'https://www.linkedin.com/in/justin--jeon/',
  },
];

export default function MeetTheTeam() {
  const memberProfiles = members.map((item) => (
    <Col xs={6} md={4}>
      <MemberProfile
        image={item.image}
        name={item.name}
        position={item.position}
        linkedInURL={item.linkedInURL}
      />
    </Col>
  ));

  return (
    <div className="container-fluid py-5" style={backgroundStyle}>
      <Container className="py-5" style={containerStyle}>
        <Row style={{ height: 100 }}>
          <Col>
            <h1>Meet the Team</h1>
          </Col>
        </Row>
        <Fade bottom>
          <Row>{memberProfiles}</Row>
        </Fade>
      </Container>
    </div>
  );
}
