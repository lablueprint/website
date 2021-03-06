import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import MemberProfile from './MemberProfile';

import RyanTran from '../assets/images/team/ryan_tran.png';
import CodyDo from '../assets/images/team/cody_do.png';
import RayHuang from '../assets/images/team/ray_huang.png';
import KarenTan from '../assets/images/team/karen_tan.png';
import VivianNguyen from '../assets/images/team/vivian_nguyen.png';
import ChantalTan from '../assets/images/team/chantal_tan.png';
import DiyaBaliga from '../assets/images/team/diya_baliga.png';
import MichaelShi from '../assets/images/team/michael_shi.png';
import VivianWong from '../assets/images/team/vivian_wong.png';
import BiancaVillamor from '../assets/images/team/bianca_villamor.png';
import BillLiu from '../assets/images/team/bill_liu.png';
import HelenWang from '../assets/images/team/helen_wang.png';
import AnanWang from '../assets/images/team/anan_wang.png';
import ChandraSuresh from '../assets/images/team/chandra_suresh.png';
import JiaminXu from '../assets/images/team/jiamin_xu.png';
import KendrakeTsui from '../assets/images/team/kendrake_tsui.png';
import RaphaelGatchalian from '../assets/images/team/raphael_gatchalian.png';
import SolaineZhao from '../assets/images/team/solaine_zhao.png';

const members = [
  {
    image: RyanTran,
    name: 'Ryan Tran',
    position: 'President',
    linkedInURL: 'https://www.linkedin.com/in/ryan-m-tran/',
  },
  {
    image: CodyDo,
    name: 'Cody Do',
    position: 'Internal Vice President',
    linkedInURL: 'https://www.linkedin.com/in/cody-do/',
  },
  {
    image: RayHuang,
    name: 'Ray Huang',
    position: 'External Vice President',
    linkedInURL: 'https://www.linkedin.com/in/ray-cj-huang/',
  },
  {
    image: KarenTan,
    name: 'Karen Tan',
    position: 'Vice President of Technology',
    linkedInURL: 'https://www.linkedin.com/in/karen-m-tan/',
  },
  {
    image: VivianNguyen,
    name: 'Vivian Nguyen',
    position: 'Vice President of Design',
    linkedInURL: 'https://www.linkedin.com/in/vivianngn/',
  },
  {
    image: ChantalTan,
    name: 'Chantal Tan',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/chantal-tan-a49121172/',
  },
  {
    image: DiyaBaliga,
    name: 'Diya Baliga',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/diya-baliga-7049881ab/',
  },
  {
    image: MichaelShi,
    name: 'Michael Shi',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/michaelbshi/',
  },
  {
    image: VivianWong,
    name: 'Vivian Wong',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/vivian-wong-b03189189/',
  },
  {
    image: BiancaVillamor,
    name: 'Bianca Villamor',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/biancavillamor/',
  },
  {
    image: BillLiu,
    name: 'Bill Liu',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/bill-liu-profile/',
  },
  {
    image: HelenWang,
    name: 'Helen Wang',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/helenwangj/',
  },
  {
    image: AnanWang,
    name: 'Anan Wang',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/menganwang/',
  },
  {
    image: ChandraSuresh,
    name: 'Chandra Suresh',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/chandra-suresh-47b278196/',
  },
  {
    image: JiaminXu,
    name: 'Jiamin Xu',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/jiamin-xu-9046b7196/',
  },
  {
    image: KendrakeTsui,
    name: 'Kendrake Tsui',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/kendraketsui/',
  },
  {
    image: RaphaelGatchalian,
    name: 'Raphael Gatchalian',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/raphaelg09/',
  },
  {
    image: SolaineZhao,
    name: 'Solaine Zhao',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/solaine-zhao-5aa04a1b1/',
  },
];

export default function MeetTheTeam() {
  const memberProfiles = members.map((item, index) => {
    const xsCol = { span: 6, offset: 0 };
    const mdCol = { span: 4, offset: 0 };

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
