import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import MemberProfile from './MemberProfile';

import LeoLiu from '../assets/images/team/leo_liu.png';
import TiffanyFeng from '../assets/images/team/tiffany_feng.png';
import CelineSung from '../assets/images/team/celine_sung.png';
import BillLiu from '../assets/images/team/bill_liu.png';
import BiancaVillamor from '../assets/images/team/bianca_villamor.png';
import CodyDo from '../assets/images/team/cody_do.png';
import HelenWang from '../assets/images/team/helen_wang.png';
import KarenTan from '../assets/images/team/karen_tan.png';
import LinusLam from '../assets/images/team/linus_lam.png';
import RachelLu from '../assets/images/team/rachel_lu.png';
import RyanTran from '../assets/images/team/ryan_tran.png';
import VanessaTa from '../assets/images/team/vanessa_ta.png';
import VivianNguyen from '../assets/images/team/vivian_nguyen.png';

const members = [
  {
    image: LeoLiu,
    name: 'Leo Liu',
    position: 'President',
    linkedInURL: 'https://www.linkedin.com/in/leoliuu/',
  },
  {
    image: TiffanyFeng,
    name: 'Tiffany Feng',
    position: 'VP of Marketing',
    linkedInURL: 'https://www.linkedin.com/in/tiffany-feng-b12219162/',
  },
  {
    image: CelineSung,
    name: 'Celine Sung',
    position: 'VP of Communications',
    linkedInURL: 'https://www.linkedin.com/in/celine-sung-421944148/',
  },
  {
    image: BillLiu,
    name: 'Bill Liu',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/bill-liu-profile/',
  },
  {
    image: BiancaVillamor,
    name: 'Bianca Villamor',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/biancavillamor/',
  },
  {
    image: CodyDo,
    name: 'Cody Do',
    position: 'Developer',
  },
  {
    image: HelenWang,
    name: 'Helen Wang',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/helenwangj/',
  },
  {
    image: KarenTan,
    name: 'Karen Tan',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/karen-m-tan/',
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
    image: RyanTran,
    name: 'Ryan Tran',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/ryan-m-tran/',
  },
  {
    image: VanessaTa,
    name: 'Vanessa Ta',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/vanessa-ta-574aa6172/',
  },
  {
    image: VivianNguyen,
    name: 'Vivian Nguyen',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/vivianngn/',
  },
];

export default function MeetTheTeam() {
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
    <div className="container-fluid py-5 meet-the-team">
      <Container className="py-5">
        <Row className="title">
          <Col>
            <h1>Meet the Team</h1>
          </Col>
        </Row>
        <Row>{memberProfiles}</Row>
      </Container>
    </div>
  );
}
