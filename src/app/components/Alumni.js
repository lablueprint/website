import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import MemberProfile from './MemberProfile';

import BiancaVillamor from '../assets/images/alumni/bianca_villamor.png';
import BillLiu from '../assets/images/alumni/bill_liu.png';
import RaphaelGatchalian from '../assets/images/alumni/raphael_gatchalian.png';
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
import RyanTran from '../assets/images/alumni/ryan_tran.png';
import CodyDo from '../assets/images/alumni/cody_do.png';
import RayHuang from '../assets/images/alumni/ray_huang.png';
import KarenTan from '../assets/images/alumni/karen_tan.png';
import VivianNguyen from '../assets/images/alumni/vivian_nguyen.png';
import MichaelShi from '../assets/images/alumni/michael_shi.png';
import ChandraSuresh from '../assets/images/alumni/chandra_suresh.png';
import DerekWang from '../assets/images/alumni/derek_wang.png';
import VivianWong from '../assets/images/alumni/vivian_wong.png';
import MichelleKou from '../assets/images/alumni/michelle_kou.png';
import MichelleTranBui from '../assets/images/alumni/michelle_tran_bui.png';
import RaqeebChang from '../assets/images/alumni/raqeeb_chang.png';
import ChantalTan from '../assets/images/alumni/chantal_tan.png';
import DiyaBaliga from '../assets/images/alumni/diya_baliga.png';
import HelenWang from '../assets/images/alumni/helen_wang.png';
import JiaminXu from '../assets/images/alumni/jiamin_xu.png';
import AvnishSengupta from '../assets/images/alumni/anvish_sengupta.png';
import AyePyae from '../assets/images/alumni/aye_pyae.png';
import NasserElhajjaoui from '../assets/images/alumni/nasser_elhajjaoui.png';
import AndrewHuynh from '../assets/images/alumni/andrew_huynh.png';
import ChristinePark from '../assets/images/alumni/christine_park.png';
import DanLee from '../assets/images/alumni/dan_lee.png';
import DarleneKabigting from '../assets/images/alumni/darlene_kabigting.png';
import DeyaRaghavan from '../assets/images/alumni/deya_raghavan.png';
import GraceMa from '../assets/images/alumni/grace_ma.png';
import KenFukuyama from '../assets/images/alumni/ken_fukuyama.png';
import KevinAntony from '../assets/images/alumni/kevin_antony.png';

const members = [
  {
    image: ChantalTan,
    name: 'Chantal Tan ',
    position: 'President \'22',
    linkedInURL: 'https://www.linkedin.com/in/chantal-tan-a49121172/',
  },
  {
    image: HelenWang,
    name: 'Helen Wang ',
    position: 'President \'22',
    linkedInURL: 'https://www.linkedin.com/in/helenwangj/',
  },
  {
    image: DiyaBaliga,
    name: 'Diya Baliga ',
    position: 'Advisor + External Vice President \'22',
    linkedInURL: 'https://www.linkedin.com/in/diya-baliga-7049881ab/',
  },
  {
    image: AvnishSengupta,
    name: 'Avnish Sengupta ',
    position: 'Internal Vice President \'22',
    linkedInURL: 'https://www.linkedin.com/in/avnish-sengupta/',
  },
  {
    image: JiaminXu,
    name: 'Jiamin Xu ',
    position: 'Vice President of Technology \'22',
    linkedInURL: 'https://www.linkedin.com/in/jiamin-xu-9046b7196/',
  },
  {
    image: AyePyae,
    name: 'Aye Pyae ',
    position: 'Project Lead \'22',
    linkedInURL: 'https://www.linkedin.com/in/apyae/',
  },
  {
    image: NasserElhajjaoui,
    name: 'Nasser Elhajjaoui ',
    position: 'Project Lead \'22',
    linkedInURL: 'https://www.linkedin.com/in/nasser-elhajjaoui-9a00a0213/',
  },
  {
    image: AndrewHuynh,
    name: 'Andrew Huynh ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/andhuynh/',
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
    image: DarleneKabigting,
    name: 'Darlene Kabigting ',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/darlene-kabigting/',
  },
  {
    image: DeyaRaghavan,
    name: 'Deya Raghavan ',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/deya-raghavan/',
  },
  {
    image: GraceMa,
    name: 'Grace Ma ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/gracelma/',
  },
  {
    image: KenFukuyama,
    name: 'Ken Fukuyama ',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/kenfukuyama/',
  },
  {
    image: KevinAntony,
    name: 'Kevin Antony',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/kevantony/',
  },
  {
    image: RyanTran,
    name: 'Ryan Tran',
    position: 'President \'21',
    linkedInURL: 'https://www.linkedin.com/in/ryan-m-tran/',
  },
  {
    image: CodyDo,
    name: 'Cody Do',
    position: 'Advisor + Internal Vice President \'21',
    linkedInURL: 'https://www.linkedin.com/in/cody-do/',
  },
  {
    image: RayHuang,
    name: 'Ray Huang',
    position: 'Advisor + External Vice President \'21',
    linkedInURL: 'https://www.linkedin.com/in/ray-cj-huang/',
  },
  {
    image: KarenTan,
    name: 'Karen Tan',
    position: 'Vice President of Technology \'21',
    linkedInURL: 'https://www.linkedin.com/in/karen-m-tan/',
  },
  {
    image: VivianNguyen,
    name: 'Vivian Nguyen',
    position: 'Advisor + Vice President of Design \'21',
    linkedInURL: 'https://www.linkedin.com/in/vivianngn/',
  },
  {
    image: ChandraSuresh,
    name: 'Chandra Suresh',
    position: 'Advisor + Project Lead \'21',
    linkedInURL: 'https://www.linkedin.com/in/chandra-suresh-47b278196/',
  },
  {
    image: MichaelShi,
    name: 'Michael Shi',
    position: 'Advisor + Project Lead \'21',
    linkedInURL: 'https://www.linkedin.com/in/michaelbshi/',
  },
  {
    image: MichelleKou,
    name: 'Michelle Kou',
    position: 'Project Lead \'21',
    linkedInURL: 'https://www.linkedin.com/in/michelle-kou-850a651b9/',
  },
  {
    image: VivianWong,
    name: 'Vivian Wong',
    position: 'Project Lead \'21',
    linkedInURL: 'https://www.linkedin.com/in/vivian-wong-b03189189/',
  },
  {
    image: MichelleTranBui,
    name: 'Michelle Tran Bui',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/michelletranbui/',
  },
  {
    image: DerekWang,
    name: 'Derek Wang',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/derekwang99/',
  },
  {
    image: RaqeebChang,
    name: 'Raqeeb Chang',
    position: 'Designer',
    linkedInURL: 'https://www.linkedin.com/in/raqeeb-chang-abb2061b9/',
  },
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
    image: ElwynCruz,
    name: 'Elwyn Cruz',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/elwyn-c-143b16ba/',
  },
  {
    image: RaphaelGatchalian,
    name: 'Raphael Gatchalian',
    position: 'Developer',
    linkedInURL: 'https://www.linkedin.com/in/raphaelg09/',
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
