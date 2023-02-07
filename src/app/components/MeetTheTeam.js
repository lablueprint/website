import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

// exec
import ChantalTan from '../assets/images/team/chantal_tan.png';
import DiyaBaliga from '../assets/images/team/diya_baliga.png';
import HelenWang from '../assets/images/team/helen_wang.png';
import JiaminXu from '../assets/images/team/jiamin_xu.png';
import AvnishSengupta from '../assets/images/team/anvish_sengupta.png';
import IsaacWen from '../assets/images/team/isaac_wen.png';

// PLs
import AyePyae from '../assets/images/team/aye_pyae.png';
import JamesHe from '../assets/images/team/james_he.png';
import JerryXu from '../assets/images/team/jerry_xu.png';
import NasserElhajjaoui from '../assets/images/team/nasser_elhajjaoui.png';
import SarahChang from '../assets/images/team/sarah_chang.png';
import SoliaValentine from '../assets/images/team/solia_valentine.png';

import AaronShi from '../assets/images/team/aaron_shi.png';
import AlanNguyen from '../assets/images/team/alan_nguyen.png';
import AndrewHuynh from '../assets/images/team/andrew_huynh.png';
import AngelaLing from '../assets/images/team/angela_ling.png';
import AngelaHao from '../assets/images/team/angela_hao.png';
import AngelaTan from '../assets/images/team/angela_tan.png';
import AyubAli from '../assets/images/team/ayub_ali.png';
import CarolineDebBaruah from '../assets/images/team/caroline_debBaruah.png';
import ChristinePark from '../assets/images/team/christine_park.png';
import DanLee from '../assets/images/team/dan_lee.png';
import DanielKao from '../assets/images/team/daniel_kao.png';
import DarleneKabigting from '../assets/images/team/darlene_kabigting.png';
import DeyaRaghavan from '../assets/images/team/deya_raghavan.png';
import DiyaIndoliya from '../assets/images/team/diya_indoliya.png';
import ErinKwon from '../assets/images/team/erin_kwon.png';
import GalenHeuer from '../assets/images/team/galen_heuer.png';
import GraceMa from '../assets/images/team/grace_ma.png';
import JeffLu from '../assets/images/team/jeff_lu.png';
import JimmyTang from '../assets/images/team/jimmy_tang.png';
import JiyeonHan from '../assets/images/team/jiyeon_han.png';
import JoyceChen from '../assets/images/team/joyce_chen.png';
import JulietZhang from '../assets/images/team/juliet_zhang.png';
import KayleeTran from '../assets/images/team/kaylee_tran.png';
import KenFukuyama from '../assets/images/team/ken_fukuyama.png';
import KennyWan from '../assets/images/team/kenny_wan.png';
import KevinAntony from '../assets/images/team/kevin_antony.png';
import LauraLu from '../assets/images/team/laura_lu.png';
import MeganTieu from '../assets/images/team/megan_tieu.png';
import RyanKim from '../assets/images/team/ryan_kim.png';
import RyanYeo from '../assets/images/team/ryan_yeo.png';
import SiddharthNandy from '../assets/images/team/siddharth_nandy.png';

import MemberProfile from './MemberProfile';

const members = [
  {
    image: ChantalTan,
    name: 'Chantal Tan ',
    position: 'President',
    linkedInURL: 'https://www.linkedin.com/in/chantal-tan-a49121172/',
  },
  {
    image: HelenWang,
    name: 'Helen Wang ',
    position: 'President',
    linkedInURL: 'https://www.linkedin.com/in/helenwangj/',
  },
  {
    image: DiyaBaliga,
    name: 'Diya Baliga ',
    position: 'External Vice President',
    linkedInURL: 'https://www.linkedin.com/in/diya-baliga-7049881ab/',
  },
  {
    image: AvnishSengupta,
    name: 'Avnish Sengupta ',
    position: 'Internal Vice President',
    linkedInURL: 'https://www.linkedin.com/in/avnish-sengupta/',
  },
  {
    image: JiaminXu,
    name: 'Jiamin Xu ',
    position: 'Vice President of Technology',
    linkedInURL: 'https://www.linkedin.com/in/jiamin-xu-9046b7196/',
  },
  {
    image: IsaacWen,
    name: 'Isaac Wen ',
    position: 'Vice President of Design',
    linkedInURL: 'https://www.linkedin.com/in/isaac-wen/',
  },
  {
    image: AyePyae,
    name: 'Aye Pyae ',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/apyae/',
  },
  {
    image: JamesHe,
    name: 'James He ',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/he-is-james/',
  },
  {
    image: JerryXu,
    name: 'Jerry Xu ',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/chujun-jerry-xu/',
  },
  {
    image: NasserElhajjaoui,
    name: 'Nasser Elhajjaoui ',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/nasser-elhajjaoui-9a00a0213/',
  },
  {
    image: SarahChang,
    name: 'Sarah Chang ',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/sarah-chang-240795199/',
  },
  {
    image: SoliaValentine,
    name: 'Solia Valentine ',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/solia-valentine-4961a9228/',
  },
  {
    image: AaronShi,
    name: 'Aaron Shi ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/aaronshi53/',
  },
  {
    image: AlanNguyen,
    name: 'Alan Nguyen ',
    position: 'Developer',
  },
  {
    image: AndrewHuynh,
    name: 'Andrew Huynh ',
    position: 'Developer',
  },
  {
    image: AngelaLing,
    name: 'Angela Ling ',
    position: 'Designer',
  },
  {
    image: AngelaHao,
    name: 'Angela Hao ',
    position: 'Developer',
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
  },
  {
    image: CarolineDebBaruah,
    name: 'Caroline DebBaruah ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/caroline-debbaruah/',
  },
  {
    image: ChristinePark,
    name: 'Christine Park ',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/cpark222/',
  },
  {
    image: DanLee,
    name: 'Dan Lee ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/danxlee/',
  },
  {
    image: DanielKao,
    name: 'Daniel Kao ',
    position: 'Developer',
  },
  {
    image: DarleneKabigting,
    name: 'Darlene Kabigting ',
    position: 'Developer',
  },
  {
    image: DeyaRaghavan,
    name: 'Deya Raghavan ',
    position: 'Designer',
  },
  {
    image: DiyaIndoliya,
    name: 'Diya Indoliya ',
    position: 'Designer',
  },
  {
    image: ErinKwon,
    name: 'Erin Kwon ',
    position: 'Developer',
  },
  {
    image: GalenHeuer,
    name: 'Galen Heuer ',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/galenheuer/',
  },
  {
    image: GraceMa,
    name: 'Grace Ma ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/gracelma/',
  },
  {
    image: JeffLu,
    name: 'Jeff Lu ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/jeffreylukr/',
  },
  {
    image: JimmyTang,
    name: 'Jimmy Tang ',
    position: 'Designer',
  },
  {
    image: JiyeonHan,
    name: 'Jiyeon Han ',
    position: 'Designer',
  },
  {
    image: JoyceChen,
    name: 'Joyce Chen ',
    position: 'Developer',
  },
  {
    image: JulietZhang,
    name: 'Juliet Zhang ',
    position: 'Developer',
  },
  {
    image: KayleeTran,
    name: 'Kaylee Tran ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/kayleemtran',
  },
  {
    image: KenFukuyama,
    name: 'Ken Fukuyama ',
    position: 'Developer',
  },
  {
    image: KennyWan,
    name: 'Kenny Wan ',
    position: 'Developer',
  },
  {
    image: KevinAntony,
    name: 'Kevin Antony',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/kevantony/',
  },
  {
    image: LauraLu,
    name: 'Laura Lu ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/lauralu201/',
  },
  {
    image: MeganTieu,
    name: 'Megan Tieu ',
    position: 'Designer',
  },
  {
    image: RyanKim,
    name: 'Ryan Kim ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/ryan-sw-kim',
  },
  {
    image: RyanYeo,
    name: 'Ryan Yeo ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/ryan-yeo-ab5010217/',
  },
  {
    image: SiddharthNandy,
    name: 'Siddharth Nandy ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/siddnandy/',
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
