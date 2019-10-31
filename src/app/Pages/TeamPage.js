import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import MemberProfile from '../Components/MemberProfile';
import { Container, Row, Col } from 'react-bootstrap';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('..//../images/team', false, /\.jpg/));

export default function TeamPage() {
  return (
    <>
    <Container style={containerStyle}>
      <Row style={{height: 100}}>
        <Col><h1>Meet the Team</h1></Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
          <MemberProfile
            image={images['leo-liu.jpg']}
            name={"Leo Liu"}
            position={"President"}
            linkedInURL={"https://www.linkedin.com/in/leoliuu/"} />
        </Col>
        <Col xs={6} md={4}>
          <MemberProfile
            image={images['summer-siu.jpg']}
            name={"Summer Siu"}
            position={"Director of Outreach"}
            linkedInURL={"https://www.linkedin.com/in/summer-siu-997824149/"} />
        </Col>
        <Col xs={6} md={4}>
          <MemberProfile
            image={images['tiffany-feng.jpg']}
            name={"Tiffany Feng"}
            position={"Director of Design"}
            linkedInURL={"https://www.linkedin.com/in/tiffany-feng-b12219162/"} />
        </Col>
        <Col xs={6} md={4}>
          <MemberProfile
            image={images['jonathan-fan.jpg']}
            name={"Jonathan Fan"}
            position={"Director of Marketing"}
            linkedInURL={"https://www.linkedin.com/in/jonathan-f-424b35106/"} />
        </Col>
        <Col xs={6} md={4}>
          <MemberProfile
            image={images['raymond-phan.jpg']}
            name={"Raymond Phan"}
            position={"Director of Technology"}
            linkedInURL={"https://www.linkedin.com/in/raymondphan/"} />
        </Col>
        <Col xs={6} md={4}>
          <MemberProfile
            image={images['derek-chu.jpg']}
            name={"Derek Chu"}
            position={"Project Lead"}
            linkedInURL={"https://www.linkedin.com/in/derekchu98/"} />
        </Col>
        <Col xs={0} md={4}>
        </Col>
        <Col xs={6} md={4}>
          <MemberProfile
            image={images['vincent-cheung.jpg']}
            name={"Vincent Cheung"}
            position={"Software Engineer"}
            linkedInURL={"https://www.linkedin.com/in/vincent-cheung-b6b202137/"} />
        </Col>
      </Row>
    </Container>
    </>
  );
}

const containerStyle = {
  maxWidth: 1000,
  marginTop: 100,
  textAlign: "center"
}
