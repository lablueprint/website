import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

// exec
import AngelaHao from '../assets/images/team/angela_hao.png';
import EdwardNg from '../assets/images/team/edward_ng.png';
import CherylWu from '../assets/images/team/cheryl_wu.png';
import YoussefMehelba from '../assets/images/team/youssef_mehelba.png';
import VictoriaChoi from '../assets/images/team/victoria_choi.png';
import DarcyMcSwain from '../assets/images/team/darcy_mcswain.png';
import JasmineWongphatarakul from '../assets/images/team/jasmine_wongphatarakul.png';

// PLs
import FionaPeng from '../assets/images/team/fiona_peng.png';
import JoannaBui from '../assets/images/team/joanna_bui.png';
import JoyCheng from '../assets/images/team/joy_cheng.png';
import MercyAdetunji from '../assets/images/team/mercy_adetunji.png';
import SanjayKrishna from '../assets/images/team/sanjay_krishna.png';
import SonyaSurapaneni from '../assets/images/team/sonya_surapaneni.png';
import VanshikaTurkar from '../assets/images/team/vanshika_turkar.png';

// Team Members
import AngelaYang from '../assets/images/team/angela_yang.png';
import CheyenneLu from '../assets/images/team/cheyenne_lu.png';
import DaltonSilverman from '../assets/images/team/dalton_silverman.png';
import DanielChang from '../assets/images/team/daniel_chang.png';
import EricLu from '../assets/images/team/eric_lu.png';
import JasonChoy from '../assets/images/team/jason_choy.png';
import KianBaghai from '../assets/images/team/kian_baghai.png';
import NiccoloDuina from '../assets/images/team/niccolo_duina.png';
import PatrickZhou from '../assets/images/team/patrick_zhou.png';
import RaymondKao from '../assets/images/team/raymond_kao.png';
import ShereenAhmed from '../assets/images/team/shereen_ahmed.png';
import SophiaLee from '../assets/images/team/sophia_lee.png';

// New mems 25-26
import AamaniMaddukuri from '../assets/images/team/new_mems_25_26/aamani_maddukuri.jpeg';
import AnhThuDo from '../assets/images/team/new_mems_25_26/anhthu_do.png';
import AruushiKaur from '../assets/images/team/new_mems_25_26/aruushi_kaur.png';
import CamillaChan from '../assets/images/team/new_mems_25_26/camilla_chan.png';
import ChristoferSanrow from '../assets/images/team/new_mems_25_26/christofer_sanrow.png';
import DiyaDesai from '../assets/images/team/new_mems_25_26/diya_desai.png';
import EllieHuang from '../assets/images/team/new_mems_25_26/ellie_huang.png';
import EmilyShen from '../assets/images/team/new_mems_25_26/emily_shen.png';
import EmmanuelHernandez from '../assets/images/team/new_mems_25_26/emmanuel_hernandez.png';
import EricaSong from '../assets/images/team/new_mems_25_26/erica_song.png';
import EuanLim from '../assets/images/team/new_mems_25_26/euan_lim.png';
import GokulNambiar from '../assets/images/team/new_mems_25_26/gokul_nambiar.png';
import IzabellaChan from '../assets/images/team/new_mems_25_26/izabella_chan.png';
import JoyceJeoung from '../assets/images/team/new_mems_25_26/joyce_jeoung.png';
import KatieChung from '../assets/images/team/new_mems_25_26/katie_chung.png';
import KellyYu from '../assets/images/team/new_mems_25_26/kelly_yu.png';
import KiraTran from '../assets/images/team/new_mems_25_26/kira_tran.png';
import LylaSegovia from '../assets/images/team/new_mems_25_26/lyla_segovia.png';
import MeenakshiArasada from '../assets/images/team/new_mems_25_26/meenakshi_arasada.png';
import NancyRios from '../assets/images/team/new_mems_25_26/nancy_rios.png';
import NeeleshSeerapu from '../assets/images/team/new_mems_25_26/neelesh_seerapu.png';
import ShawnNguyen from '../assets/images/team/new_mems_25_26/shawn_nguyen.png';
import SusieKim from '../assets/images/team/new_mems_25_26/susie_kim.png';
import TaraKaviani from '../assets/images/team/new_mems_25_26/tara_kaviani.png';
import TiffanyPham from '../assets/images/team/new_mems_25_26/tiffany_pham.png';
import TylerChoi from '../assets/images/team/new_mems_25_26/tyler_choi.png';
import WilliamHsieh from '../assets/images/team/new_mems_25_26/william_hsieh.png';

//  Advisors
import GalenHeuer from '../assets/images/team/galen_heuer.png';
import JeffLu from '../assets/images/team/jeff_lu.png';
import JiyeonHan from '../assets/images/team/jiyeon_han.png';
import JoyceChen from '../assets/images/team/joyce_chen.png';
import JulietZhang from '../assets/images/team/juliet_zhang.png';
import RyanYeo from '../assets/images/team/ryan_yeo.png';
import TomOh from '../assets/images/team/tom_oh.png';

import MemberProfile from './MemberProfile';

const members = [
  {
    image: AngelaHao,
    name: 'Angela Hao ',
    position: 'Co-President',
    linkedInURL: 'https://www.linkedin.com/in/angela-hao-5246801b3/',
  },
  {
    image: EdwardNg,
    name: 'Edward Ng ',
    position: 'Co-President',
    linkedInURL: 'https://www.linkedin.com/in/edward-n/',
  },
  {
    image: CherylWu,
    name: 'Cheryl Wu ',
    position: 'External Vice President',
    linkedInURL: 'https://www.linkedin.com/in/cherylwu8/',
  },
  {
    image: YoussefMehelba,
    name: 'Youssef Mehelba ',
    position: 'Internal Vice President',
    linkedInURL: 'https://www.linkedin.com/in/youssef-mehelba-64270224b/',
  },
  {
    image: VictoriaChoi,
    name: 'Victoria Choi ',
    position: 'Vice President of Technology',
    linkedInURL: 'https://www.linkedin.com/in/victoria-choi/',
  },
  {
    image: DarcyMcSwain,
    name: 'Darcy McSwain',
    position: 'Vice President of Design',
    linkedInURL: 'https://www.linkedin.com/in/darcy-mcswain-58132b275/',
  },
  {
    image: JasmineWongphatarakul,
    name: 'Jasmine Wongphatarakul ',
    position: 'Vice President of Operations',
    linkedInURL: 'https://www.linkedin.com/in/jasmine-wongphatarakul/',
  },
  {
    image: FionaPeng,
    name: 'Fiona Peng ',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/fiona-peng-46b8a6228/',
  },
  {
    image: JoannaBui,
    name: 'Joanna Bui ',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/joanna-bui-565220243/',
  },
  {
    image: JoyCheng,
    name: 'Joy Cheng ',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/joy-y-cheng/',
  },
  {
    image: MercyAdetunji,
    name: 'Mercy Adetunji ',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/mercy-adetunji/',
  },
  {
    image: SanjayKrishna,
    name: 'Sanjay Krishna ',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/sanjay-s-krishna/',
  },
  {
    image: SonyaSurapaneni,
    name: 'Sonya Surapaneni ',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/sonya-surapaneni-2235421a9/',
  },
  {
    image: VanshikaTurkar,
    name: 'Vanshika Turkar ',
    position: 'Project Lead',
    linkedInURL: 'https://www.linkedin.com/in/vanshika-turkar/',
  },
  {
    image: AamaniMaddukuri,
    name: 'Aamani Maddukuri ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/aamani-maddukuri/',
  },
  {
    image: AngelaYang,
    name: 'Angela Yang ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/angela-yang-2917792ba/',
  },
  {
    image: AnhThuDo,
    name: 'Anh Thu Do',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/anh-thu-do-atd/',
  },
  {
    image: AruushiKaur,
    name: 'Aruushi Kaur ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/aruushikaur/',
  },
  {
    image: CamillaChan,
    name: 'Camilla Chan',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/camilla-c-b7139b261/',
  },
  {
    image: CheyenneLu,
    name: 'Cheyenne Lu ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/weihsuan-cheyenne-lu/',
  },
  {
    image: ChristoferSanrow,
    name: 'Christofer Sanrow',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/christofer-sanrow/',
  },
  {
    image: DaltonSilverman,
    name: 'Dalton Silverman ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/dalton-silverman/',
  },
  {
    image: DanielChang,
    name: 'Daniel Chang ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/daniel-chang-457886248/',
  },
  {
    image: DiyaDesai,
    name: 'Diya Desai',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/diya-desai/',
  },
  {
    image: EllieHuang,
    name: 'Ellie Huang',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/elliehuang0814/',
  },
  {
    image: EmilyShen,
    name: 'Emily Shen',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/emilyshenucla/',
  },
  {
    image: EmmanuelHernandez,
    name: 'Emmanuel Hernandez',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/05manny/',
  },
  {
    image: EricLu,
    name: 'Eric Lu ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/ericslu/',
  },
  {
    image: EricaSong,
    name: 'Erica Song',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/erica-j-song/',
  },
  {
    image: EuanLim,
    name: 'Euan Lim',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/euanlimzx/',
  },
  {
    image: GokulNambiar,
    name: 'Gokul Nambiar',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/gokul-nambiar2/',
  },
  {
    image: IzabellaChan,
    name: 'Izabella Chan',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/izabellachan/',
  },
  {
    image: JasonChoy,
    name: 'Jason Choy ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/jasonchoy5/',
  },
  {
    image: JoyceJeoung,
    name: 'Joyce Jeoung',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/joycejeoung/',
  },
  {
    image: KatieChung,
    name: 'Katie Chung',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/katieyungchung/',
  },
  {
    image: KellyYu,
    name: 'Kelly Yu',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/kellyy8/',
  },
  {
    image: KianBaghai,
    name: 'Kian Baghai ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/kian-baghai-7b4943311/',
  },
  {
    image: KiraTran,
    name: 'Kira Tran',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/kiratran06/',
  },
  {
    image: LylaSegovia,
    name: 'Lyla Segovia',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/lyla-segovia-4b0676333/',
  },
  {
    image: MeenakshiArasada,
    name: 'Meenakshi Arasada',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/meenakshi-arasada-470344354/',
  },
  {
    image: NancyRios,
    name: 'Nancy Rios',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/nancyvrios/',
  },
  {
    image: NeeleshSeerapu,
    name: 'Neelesh Seerapu',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/nseerapu/',
  },
  {
    image: NiccoloDuina,
    name: 'Niccolo Duina ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/niccolo-duina-a21603267/',
  },
  {
    image: PatrickZhou,
    name: 'Patrick Zhou ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/patrick-zhou-83245020a/',
  },
  {
    image: RaymondKao,
    name: 'Raymond Kao ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/raymond-kao-8aa9a6290/',
  },
  {
    image: ShawnNguyen,
    name: 'Shawn Nguyen',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/shawnnguyenn/',
  },
  {
    image: ShereenAhmed,
    name: 'Shereen Ahmed ',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/shereen-ahmed-9b718a174/',
  },
  {
    image: SophiaLee,
    name: 'Sophia Lee ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/sophiaylee23/',
  },
  {
    image: SusieKim,
    name: 'Susie Kim',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/susiekim101/',
  },
  {
    image: TaraKaviani,
    name: 'Tara Kaviani',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/tara-kaviani-040ba7245/',
  },
  {
    image: TiffanyPham,
    name: 'Tiffany Pham',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/ttiffanyphamm/',
  },
  {
    image: TylerChoi,
    name: 'Tyler Choi',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/tyler-choi-design/',
  },
  {
    image: WilliamHsieh,
    name: 'William Hsieh',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/william-hsieh-a0826127a/',
  },
];

const advisors = [
  {
    image: GalenHeuer,
    name: 'Galen Heuer ',
    position: 'Advisor',
    linkedInURL: 'https://www.linkedin.com/in/galenheuer/',
  },
  {
    image: JeffLu,
    name: 'Jeff Lu ',
    position: 'Advisor',
    linkedInURL: 'https://www.linkedin.com/in/thejefflu/',
  },
  {
    image: JiyeonHan,
    name: 'Jiyeon Han ',
    position: 'Advisor',
    linkedInURL: 'https://www.linkedin.com/in/jiyeonhann/',
  },
  {
    image: JoyceChen,
    name: 'Joyce Chen ',
    position: 'Advisor',
    linkedInURL: 'https://www.linkedin.com/in/joycechen721/',
  },
  {
    image: JulietZhang,
    name: 'Juliet Zhang ',
    position: 'Advisor',
    linkedInURL: 'https://www.linkedin.com/in/zhang-juliet/',
  },
  {
    image: RyanYeo,
    name: 'Ryan Yeo ',
    position: 'Advisor',
    linkedInURL: 'https://www.linkedin.com/in/ryan-yeo-ab5010217/',
  },
  {
    image: TomOh,
    name: 'Tom Oh ',
    position: 'Advisor',
    linkedInURL: 'https://www.linkedin.com/in/tom-oh-00b8ba201/',
  },
];

export default function MeetTheTeam() {
  // eslint-disable-next-line camelcase
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

  const advisorProfiles = advisors.map((item, index) => {
    const xsCol = { span: 6, offset: 0 };
    const mdCol = { span: 4, offset: 0 };

    if (index === advisors.length - 2 && advisors.length % 3 === 2) {
      mdCol.offset = 2;
    } else if (index === advisors.length - 1) {
      if (advisors.length % 2 === 1) {
        xsCol.offset = 3;
        mdCol.offset = 0;
      }
      if (advisors.length % 3 === 1) {
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
      <Container className="py-5">
        <Row className="title">
          <Col>
            <h1>Advisors</h1>
          </Col>
        </Row>
        <Row>{advisorProfiles}</Row>
      </Container>
    </div>
  );
}
