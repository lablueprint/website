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
import HelenWang from '../assets/images/team/helen_wang.png';
import ChandraSuresh from '../assets/images/team/chandra_suresh.png';
import JiaminXu from '../assets/images/team/jiamin_xu.png';
import RaphaelGatchalian from '../assets/images/team/raphael_gatchalian.png';
import SolaineZhao from '../assets/images/team/solaine_zhao.png';
import AaronShi from '../assets/images/team/aaron_shi.png';
import AvnishSengupta from '../assets/images/team/anvish_sengupta.png';
import AyePyae from '../assets/images/team/aye_pyae.png';
import CarolineDebBaruah from '../assets/images/team/caroline_debBaruah.png';
import ChristinePark from '../assets/images/team/christine_park.png';
import DanLee from '../assets/images/team/dan_lee.png';
import DerekWang from '../assets/images/team/derek_wang.png';
import GalenHeuer from '../assets/images/team/galen_heuer.png';
import GenevieveChin from '../assets/images/team/genevieve_chin.png';
import GraceMa from '../assets/images/team/grace_ma.png';
import IsaacWen from '../assets/images/team/isaac_wen.png';
import JamesHe from '../assets/images/team/james_he.png';
import JeffLu from '../assets/images/team/jeff_lu.png';
import JerryXu from '../assets/images/team/jerry_xu.png';
import KayleeTran from '../assets/images/team/kaylee_tran.png';
import KevinAntony from '../assets/images/team/kevin_antony.png';
import LauraLu from '../assets/images/team/laura_lu.png';
import MichelleKou from '../assets/images/team/michelle_kou.png';
import MichelleTranBui from '../assets/images/team/michelle_tran_bui.png';
import NasserElhajjaoui from '../assets/images/team/nasser_elhajjaoui.png';
import RaqeebChang from '../assets/images/team/raqeeb_chang.png';
import RyanKim from '../assets/images/team/ryan_kim.png';
import RyanYeo from '../assets/images/team/ryan_yeo.png';
import SarahChang from '../assets/images/team/sarah_chang.png';
import SiddharthNandy from '../assets/images/team/siddharth_nandy.png';
import SoliaValentine from '../assets/images/team/solia_valentine.png';

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
    image: ChandraSuresh,
    name: 'Chandra Suresh',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/chandra-suresh-47b278196/',
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
    image: HelenWang,
    name: 'Helen Wang',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/helenwangj/',
  },
  {
    image: MichaelShi,
    name: 'Michael Shi',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/michaelbshi/',
  },
  {
    image: MichelleKou,
    name: 'Michelle Kou ',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/michelle-kou-850a651b9/',
  },
  {
    image: VivianWong,
    name: 'Vivian Wong',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/vivian-wong-b03189189/',
  },
  {
    image: AaronShi,
    name: 'Aaron Shi',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/aaronshi53/',
  },
  {
    image: AvnishSengupta,
    name: 'Avnish Sengupta',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/avnish-sengupta/',
  },
  {
    image: AyePyae,
    name: 'Aye Pyae ',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/apyae/',
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
    image: DerekWang,
    name: 'Derek Wang ',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/derekwang99/',
  },
  {
    image: GalenHeuer,
    name: 'Galen Heuer ',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/galenheuer/',
  },
  {
    image: GenevieveChin,
    name: 'Genevieve Chin ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/genevieve-chin ',
  },
  {
    image: GraceMa,
    name: 'Grace Ma ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/gracelma/',
  },
  {
    image: IsaacWen,
    name: 'Isaac Wen ',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/isaac-wen/',
  },
  {
    image: JamesHe,
    name: 'James He ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/he-is-james/',
  },
  {
    image: JeffLu,
    name: 'Jeff Lu ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/jeffreylukr/',
  },
  {
    image: JerryXu,
    name: 'Jerry Xu ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/chujun-jerry-xu/',
  },
  {
    image: JiaminXu,
    name: 'Jiamin Xu',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/jiamin-xu-9046b7196/',
  },
  {
    image: KayleeTran,
    name: 'Kaylee Tran ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/kayleemtran',
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
    image: MichelleTranBui,
    name: 'Michelle Tran Bui ',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/michelletranbui/',
  },
  {
    image: NasserElhajjaoui,
    name: 'Nasser Elhajjaoui ',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/nasser-elhajjaoui-9a00a0213/',
  },
  {
    image: RaqeebChang,
    name: 'Raqeeb Chang ',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/raqeeb-chang-abb2061b9/',
  },
  {
    image: RyanKim,
    name: 'Ryan Kim ',
    position: 'Developer',
    linkedInURL: 'www.linkedin.com/in/ryan-sw-kim',
  },
  {
    image: RyanYeo,
    name: 'Ryan Yeo ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/ryan-yeo-ab5010217/',
  },
  {
    image: SarahChang,
    name: 'Sarah Chang ',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/sarah-chang-240795199/',
  },
  {
    image: SiddharthNandy,
    name: 'Siddharth Nandy ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/siddnandy/',
  },
  {
    image: SoliaValentine,
    name: 'Solia Valentine ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/solia-valentine-4961a9228/',
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
