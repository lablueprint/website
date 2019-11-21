import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import MemberProfile from '../Components/MemberProfile';
import '../../App.css';

import derek_chu from '..//../images/team/derek-chu.jpg';
import jonathan_fan from '..//../images/team/jonathan-fan.jpg';
import justin_jeon from '..//../images/team/justin-jeon.jpg';
import leo_liu from '..//../images/team/leo-liu.jpg';
import raymond_phan from '..//../images/team/raymond-phan.jpg';
import summer_siu from '..//../images/team/summer-siu.jpg';
import tiffany_feng from '..//../images/team/tiffany-feng.jpg';
import vincent_cheung from '..//../images/team/vincent-cheung.jpg';

const members = [
  {
    image: leo_liu,
    name: "Leo Liu",
    position: "President",
    linkedInURL: "https://www.linkedin.com/in/leoliuu/"
  },
  {
    image: summer_siu,
    name: "Summer Siu",
    position: "Director of Outreach",
    linkedInURL: "https://www.linkedin.com/in/summer-siu-997824149/"
  },
  {
    image: tiffany_feng,
    name: "Tiffany Feng",
    position: "Director of Design",
    linkedInURL: "https://www.linkedin.com/in/tiffany-feng-b12219162/"
  },
  {
    image: jonathan_fan,
    name: "Jonathan Fan",
    position: "Director of Marketing",
    linkedInURL: "https://www.linkedin.com/in/jonathan-f-424b35106/"
  },
  {
    image: raymond_phan,
    name: "Raymond Phan",
    position: "Director of Technology",
    linkedInURL: "https://www.linkedin.com/in/raymondphan/"
  },
  {
    image: derek_chu,
    name: "Derek Chu",
    position: "Project Lead",
    linkedInURL: "https://www.linkedin.com/in/derekchu98/"
  },
  {
    image: vincent_cheung,
    name: "Vincent Cheung",
    position: "Software Engineer",
    linkedInURL: "https://www.linkedin.com/in/vincent-cheung-b6b202137/"
  },
  {
    image: justin_jeon,
    name: "Justin Jeon",
    position: "Software Engineer",
    linkedInURL: "https://www.linkedin.com/in/justin--jeon/"
  }
];

export default function MeetTheTeam() {
  const memberProfiles = members.map(item => (
    <Col xs={6} md={4}>
      <MemberProfile
        image={item.image}
        name={item.name}
        position={item.position}
        linkedInURL={item.linkedInURL} />
    </Col>
  ));
  return (
    <div className="container-fluid py-5" style={backgroundStyle}>
      <Container className="py-5" style={containerStyle}>
        <Row style={{height: 100}}>
          <Col><h1>Meet the Team</h1></Col>
        </Row>
        <Fade bottom>
          <Row>
            {memberProfiles}
          </Row>
        </Fade>
      </Container>
    </div>
  );
}

const containerStyle = {
  textAlign: "center",
  fontFamily: 'Roboto'
};

const backgroundStyle = {
  backgroundColor: '#f8f8f8'
}
