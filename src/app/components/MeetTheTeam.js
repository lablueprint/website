import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

// exec
import JamesHe from '../assets/images/team/james_he.png';
import JerryXu from '../assets/images/team/jerry_xu.png';
import SoliaValentine from '../assets/images/team/solia_valentine.png';
import ErinKwon from '../assets/images/team/erin_kwon.png';
import SiddharthNandy from '../assets/images/team/siddharth_nandy.png';
import SarahChang from '../assets/images/team/sarah_chang.png';
import GalenHeuer from '../assets/images/team/galen_heuer.png';

// PLs
import AaronShi from '../assets/images/team/aaron_shi.png';
import AngelaLing from '../assets/images/team/angela_ling.png';
import CarolineDebBaruah from '../assets/images/team/caroline_debBaruah.png';
import IsaacWen from '../assets/images/team/isaac_wen.png';
import JeffLu from '../assets/images/team/jeff_lu.png';
import RyanYeo from '../assets/images/team/ryan_yeo.png';

// Team Members
import AlanNguyen from '../assets/images/team/alan_nguyen.png';
import AngelaHao from '../assets/images/team/angela_hao.png';
import AngelaTan from '../assets/images/team/angela_tan.png';
import AyubAli from '../assets/images/team/ayub_ali.png';
import DanielKao from '../assets/images/team/daniel_kao.png';
import DiyaIndoliya from '../assets/images/team/diya_indoliya.png';
import JimmyTang from '../assets/images/team/jimmy_tang.png';
import JiyeonHan from '../assets/images/team/jiyeon_han.png';
import JoyceChen from '../assets/images/team/joyce_chen.png';
import JulietZhang from '../assets/images/team/juliet_zhang.png';
import KennyWan from '../assets/images/team/kenny_wan.png';
import MeganTieu from '../assets/images/team/megan_tieu.png';

//  Advisors
import ChantalTan from '../assets/images/team/chantal_tan.png';
import DiyaBaliga from '../assets/images/team/diya_baliga.png';
import HelenWang from '../assets/images/team/helen_wang.png';
import AvnishSengupta from '../assets/images/team/anvish_sengupta.png';
import NasserElhajjaoui from '../assets/images/team/nasser_elhajjaoui.png';

import MemberProfile from './MemberProfile';

const members = [
  {
    image: JamesHe,
    name: 'James He ',
    position: 'Co-President',
    linkedInURL: 'https://www.linkedin.com/in/he-is-james/',
  },
  {
    image: JerryXu,
    name: 'Jerry Xu ',
    position: 'Co-President',
    linkedInURL: 'https://www.linkedin.com/in/chujun-jerry-xu/',
  },
  {
    image: SoliaValentine,
    name: 'Solia Valentine ',
    position: 'External Vice President',
    linkedInURL: 'https://www.linkedin.com/in/solia-valentine-4961a9228/',
  },
  {
    image: ErinKwon,
    name: 'Erin Kwon ',
    position: 'Internal Vice President',
    linkedInURL: 'https://www.linkedin.com/in/erinkwon01/',
  },
  {
    image: SiddharthNandy,
    name: 'Siddharth Nandy ',
    position: 'Vice President of Technology',
    linkedInURL: 'https://www.linkedin.com/in/siddnandy/',
  },
  {
    image: SarahChang,
    name: 'Sarah Chang ',
    position: 'Vice President of Design',
    linkedInURL: 'https://www.linkedin.com/in/sarah-chang-240795199/',
  },
  {
    image: GalenHeuer,
    name: 'Galen Heuer ',
    position: 'Vice President of Operations',
    linkedInURL: 'https://www.linkedin.com/in/galenheuer/',
  },
  {
    image: AaronShi,
    name: 'Aaron Shi ',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/aaronshi53/',
  },
  {
    image: AngelaLing,
    name: 'Angela Ling ',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/angela-ling/',
  },
  {
    image: CarolineDebBaruah,
    name: 'Caroline DebBaruah ',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/caroline-debbaruah/',
  },
  {
    image: IsaacWen,
    name: 'Isaac Wen ',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/isaac-wen/',
  },
  {
    image: JeffLu,
    name: 'Jeff Lu ',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/jeffreylukr/',
  },
  {
    image: RyanYeo,
    name: 'Ryan Yeo ',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/ryan-yeo-ab5010217/',
  },
  {
    image: AlanNguyen,
    name: 'Alan Nguyen ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/alan-nguyen-ucla/',
  },
  {
    image: AngelaHao,
    name: 'Angela Hao ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/angela-hao-5246801b3/',
  },
  {
    image: AngelaTan,
    name: 'Angela Tan ',
    position: 'Developer',
  },
  {
    image: AyubAli,
    name: 'Ayub Ali ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/ayub-ali24/',
  },
  {
    image: DanielKao,
    name: 'Daniel Kao ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/daniel-kao14/',
  },
  {
    image: DiyaIndoliya,
    name: 'Diya Indoliya ',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/diya-indoliya/',
  },
  {
    image: JimmyTang,
    name: 'Jimmy Tang ',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/jimmy-tang-34053422b/',
  },
  {
    image: JiyeonHan,
    name: 'Jiyeon Han ',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/jiyeonhann/',
  },
  {
    image: JoyceChen,
    name: 'Joyce Chen ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/joycechen12/',
  },
  {
    image: JulietZhang,
    name: 'Juliet Zhang ',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/zhang-juliet/',
  },
  {
    image: KennyWan,
    name: 'Kenny Wan ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/kennethzwan/',
  },
  {
    image: MeganTieu,
    name: 'Megan Tieu ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/megan-tieu/',
  },
  {
    image: DiyaBaliga,
    name: 'Diya Baliga ',
    position: 'Advisor',
    linkedInURL: 'https://www.linkedin.com/in/diya-baliga-7049881ab/',
  },
  {
    image: AvnishSengupta,
    name: 'Avnish Sengupta ',
    position: 'Advisor',
    linkedInURL: 'https://www.linkedin.com/in/avnish-sengupta/',
  },
  {
    image: ChantalTan,
    name: 'Chantal Tan ',
    position: 'Advisor',
    linkedInURL: 'https://www.linkedin.com/in/chantal-tan-a49121172/',
  },
  {
    image: HelenWang,
    name: 'Helen Wang ',
    position: 'Advisor',
    linkedInURL: 'https://www.linkedin.com/in/helenwangj/',
  },
  {
    image: NasserElhajjaoui,
    name: 'Nasser Elhajjaoui ',
    position: 'Advisor',
    linkedInURL: 'https://www.linkedin.com/in/nasser-elhajjaoui-9a00a0213/',
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
