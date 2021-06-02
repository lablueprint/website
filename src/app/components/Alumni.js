import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import MemberProfile from './MemberProfile';

import AliceChang from '../assets/images/alumni/alice_chang.png';
import AndyZeff from '../assets/images/alumni/andy_zeff.png';
import ElwynCruz from '../assets/images/alumni/elwyn_cruz.png';
import YoshinoGoto from '../assets/images/alumni/yoshino_goto.png';
import LinusLam from '../assets/images/alumni/linus_lam.png';
import RachelLu from '../assets/images/alumni/rachel_lu.png';
import VanessaTa from '../assets/images/alumni/vanessa_ta.png';
import CelineSung from '../assets/images/alumni/celine_sung.png';
import YinyinWen from '../assets/images/alumni/yinyin_wen.png';
import EdwardChu from '../assets/images/alumni/edward_chu.png';
import TiffanyFeng from '../assets/images/alumni/tiffany_feng.png';
import JonathanFan from '../assets/images/alumni/jonathan_fan.png';
import VincentCheung from '../assets/images/alumni/vincent_cheung.png';
import RaymondPhan from '../assets/images/alumni/raymond_phan.png';
import DerekChu from '../assets/images/alumni/derek_chu.png';
import SummerSiu from '../assets/images/alumni/summer_siu.png';
import LeoLiu from '../assets/images/alumni/leo_liu.png';

const members = [
  {
    image: AliceChang,
    name: 'Alice Chang',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/alice-chang-chien-tzu/',
  },
  {
    image: AndyZeff,
    name: 'Andy Zeff',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/andy-zeff-25b54651/',
  },
  {
    image: ElwynCruz,
    name: 'Elwyn Cruz',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/elwyn-c-143b16ba/',
  },
  {
    image: YoshinoGoto,
    name: 'Yoshino Goto',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/ygoto/',
  },
  {
    image: LinusLam,
    name: 'Linus Lam',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/linuslyt/',
  },
  {
    image: RachelLu,
    name: 'Rachel Lu',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/rachel-lu-778700172/',
  },
  {
    image: VanessaTa,
    name: 'Vanessa Ta',
    position: 'UX Researcher',
    linkedInURL: 'https://www.linkedin.com/in/vanessa-ta-574aa6172/',
  },
  {
    image: CelineSung,
    name: 'Celine Sung',
    position: 'VP of Communications',
    linkedInURL: 'https://www.linkedin.com/in/celine-sung-421944148/',
  },
  {
    image: YinyinWen,
    name: 'Yinyin Wen',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/yinyinwen/',
  },
  {
    image: EdwardChu,
    name: 'Edward Chu',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/edwardchu08/',
  },
  {
    image: TiffanyFeng,
    name: 'Tiffany Feng',
    position: 'VP of Marketing',
    linkedInURL: 'https://www.linkedin.com/in/tiffany-feng-b12219162/',
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
  {
    image: LeoLiu,
    name: 'Leo Liu',
    position: 'Founder / President',
    linkedInURL: 'https://www.linkedin.com/in/leoliuu/',
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
        mdCol.offset = 0;
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
