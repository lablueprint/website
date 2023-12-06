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
import ChancellorRichey from '../assets/images/team/chancellor_richey.png';
import CherylWu from '../assets/images/team/cheryl_wu.png';
import ChinenyeEneh from '../assets/images/team/chinenye_eneh.png';
import ChizitelumOranu from '../assets/images/team/chizitelum_oranu.png';
import DanielChang from '../assets/images/team/daniel_chang.png';
import DanielKao from '../assets/images/team/daniel_kao.png';
import DanielOgura from '../assets/images/team/daniel_ogura.png';
import DiyaIndoliya from '../assets/images/team/diya_indoliya.png';
import EdwardNg from '../assets/images/team/edward_ng.png';
import EricZhou from '../assets/images/team/eric_zhou.png';
import FionaPeng from '../assets/images/team/fiona_peng.png';
import JasmineWongphatarakul from '../assets/images/team/jasmine_wongphatarakul.png';
import JimmyTang from '../assets/images/team/jimmy_tang.png';
import JiyeonHan from '../assets/images/team/jiyeon_han.png';
import JoyCheng from '../assets/images/team/joy_cheng.png';
import JoyceChen from '../assets/images/team/joyce_chen.png';
import JulietZhang from '../assets/images/team/juliet_zhang.png';
import KennyWan from '../assets/images/team/kenny_wan.png';
import KimberlyNguyen from '../assets/images/team/kimberly_nguyen.png';
import MackenzieSmith from '../assets/images/team/mackenzie_smith.png';
import MarioPengLee from '../assets/images/team/mario_peng_lee.png';
import MeganTieu from '../assets/images/team/megan_tieu.png';
import NicoleJu from '../assets/images/team/nicole_ju.png';
import RyanKim from '../assets/images/team/ryan_kim.png';
import TaruniRaoManam from '../assets/images/team/taruni_rao_manam.png';
import VictoriaChoi from '../assets/images/team/victoria_choi.png';
import YimingZhang from '../assets/images/team/yiming_zhang.png';

//  Advisors
import AvnishSengupta from '../assets/images/team/anvish_sengupta.png';
import ChantalTan from '../assets/images/team/chantal_tan.png';
import DiyaBaliga from '../assets/images/team/diya_baliga.png';
import HelenWang from '../assets/images/team/helen_wang.png';
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
    linkedInURL: 'https://www.linkedin.com/in/angela-tan-221892251/',
  },
  {
    image: null,
    name: 'Antonio Cosio ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/acosio/',
  },
  {
    image: AyubAli,
    name: 'Ayub Ali ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/ayub-ali24/',
  },
  {
    image: ChancellorRichey,
    name: 'Chancellor Richey ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/chancellororichey/',
  },
  {
    image: CherylWu,
    name: 'Cheryl Wu ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/cherylwu8/',
  },
  {
    image: ChinenyeEneh,
    name: 'Chinenye Eneh ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/chinenye-eneh-118778268/',
  },
  {
    image: ChizitelumOranu,
    name: 'Chizitelum Oranu ',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/chizitelumoranu/',
  },
  {
    image: DanielChang,
    name: 'Daniel Chang ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/daniel-chang-457886248/',
  },
  {
    image: DanielKao,
    name: 'Daniel Kao ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/daniel-kao14/',
  },
  {
    image: DanielOgura,
    name: 'Daniel Ogura ',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/danielogura/',
  },
  {
    image: DiyaIndoliya,
    name: 'Diya Indoliya ',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/diya-indoliya/',
  },
  {
    image: EdwardNg,
    name: 'Edward Ng ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/edward-n/',
  },
  {
    image: EricZhou,
    name: 'Eric Zhou ',
    position: 'Designer',
  },
  {
    image: FionaPeng,
    name: 'Fiona Peng ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/fiona-peng-46b8a6228/',
  },
  {
    image: JasmineWongphatarakul,
    name: 'Jasmine Wongphatarakul ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/jasmine-wongphatarakul/',
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
    image: JoyCheng,
    name: 'Joy Cheng ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/joy-y-cheng/',
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
    image: KimberlyNguyen,
    name: 'Kimberly Nguyen ',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/kimberlynguyenh/',
  },
  {
    image: MackenzieSmith,
    name: 'Mackenzie Smith ',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/mackenzie-smith-3728a3220/',
  },
  {
    image: MarioPengLee,
    name: 'Mario Peng Lee ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/mariopenglee/',
  },
  {
    image: MeganTieu,
    name: 'Megan Tieu ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/megan-tieu/',
  },
  {
    image: NicoleJu,
    name: 'Nicole Ju ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/nicoleju03/',
  },
  {
    image: RyanKim,
    name: 'Ryan Kim ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/ryan-sw-kim',
  },
  {
    image: TaruniRaoManam,
    name: 'Taruni Rao Manam ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/taruni-manam/',
  },
  {
    image: VictoriaChoi,
    name: 'Victoria Choi ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/victoria-choi/',
  },
  {
    image: YimingZhang,
    name: 'Yiming Zhang ',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/yimingzhng/',
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
    image: DiyaBaliga,
    name: 'Diya Baliga ',
    position: 'Advisor',
    linkedInURL: 'https://www.linkedin.com/in/diya-baliga-7049881ab/',
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
