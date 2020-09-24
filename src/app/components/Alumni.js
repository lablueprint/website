import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import MemberProfile from './MemberProfile';

import YinyinWen from '../assets/images/alumni/yinyin_wen.png';
import JonathanFan from '../assets/images/alumni/jonathan_fan.png';
import VincentCheung from '../assets/images/alumni/vincent_cheung.png';
import RaymondPhan from '../assets/images/alumni/raymond_phan.png';
import DerekChu from '../assets/images/alumni/derek_chu.png';
import EdwardChu from '../assets/images/alumni/edward_chu.png';
import SummerSiu from '../assets/images/alumni/summer_siu.png';

const members = [
  {
    image: YinyinWen,
    name: 'Yinyin Wen',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/yinyinwen/',
  },
  {
    image: JonathanFan,
    name: 'Jonathan Fan',
    position: 'Internal VP',
    linkedInURL: 'https://www.linkedin.com/in/jonathan-f-424b35106/',
  },
  {
    image: VincentCheung,
    name: 'Vincent Cheung',
    position: 'VP of Projects',
    linkedInURL: 'https://www.linkedin.com/in/vincent-cheung-b6b202137/',
  },
  {
    image: DerekChu,
    name: 'Derek Chu',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/derekchu98/',
  },
  {
    image: EdwardChu,
    name: 'Edward Chu',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/edwardchu08/',
  },
  {
    image: RaymondPhan,
    name: 'Raymond Phan',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/raymondphan/',
  },
  {
    image: SummerSiu,
    name: 'Summer Siu',
    position: 'Director of Outreach',
    linkedInURL: 'https://www.linkedin.com/in/summer-siu-997824149/',
  },
];

export default function Alumni() {
  const memberProfiles = members.map((item, index) => {
    const xsCol = { span: 6 };
    const mdCol = { span: 4 };

    if (index === members.length - 2 && members.length % 3 === 2) {
      mdCol.offset = 2;
    } else if (index === members.length - 1) {
      if (members.length % 2 === 1) {
        xsCol.offset = 3;
      }
      if (members.length % 3 === 1) {
        mdCol.offset = 4;
      }
    }

    return (
      <Col xs={xsCol} md={mdCol} key={JSON.stringify(item)}>
        <Fade>
          <MemberProfile
            image={item.image}
            name={item.name}
            position={item.position}
            linkedInURL={item.linkedInURL}
          />
        </Fade>
      </Col>
    );
  });

  return (
    <div className="container-fluid py-5 alumni">
      <Container className="py-5">
        <Row className="title">
          <Col>
            <h1>Alumni</h1>
          </Col>
        </Row>
        <Row>{memberProfiles}</Row>
      </Container>
    </div>
  );
}
