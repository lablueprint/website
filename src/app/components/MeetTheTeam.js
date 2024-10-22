import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";

// exec
import AngelaLing from "../assets/images/team/angela_ling.png";
import JeffLu from "../assets/images/team/jeff_lu.png";
import CarolineDebBaruah from "../assets/images/team/caroline_debBaruah.png";
import JulietZhang from "../assets/images/team/juliet_zhang.png";
import RyanYeo from "../assets/images/team/ryan_yeo.png";
import JiyeonHan from "../assets/images/team/jiyeon_han.png";
import AngelaHao from "../assets/images/team/angela_hao.png";

// PLs
import AntonioCosio from "../assets/images/team/antonio_cosio.png";
import EdwardNg from "../assets/images/team/edward_ng.png";
import EricZhou from "../assets/images/team/eric_zhou.png";
import JoyceChen from "../assets/images/team/joyce_chen.png";
import MackenzieSmith from "../assets/images/team/mackenzie_smith.png";
import StellaKang from "../assets/images/team/stella_kang.png";
import TomOh from "../assets/images/team/tom_oh.png";

// Team Members
import CherylWu from "../assets/images/team/cheryl_wu.png";
import ChizitelumOranu from "../assets/images/team/chizitelum_oranu.png";
import DanielChang from "../assets/images/team/daniel_chang.png";
import DanielOgura from "../assets/images/team/daniel_ogura.png";
import FionaPeng from "../assets/images/team/fiona_peng.png";
import JasmineWongphatarakul from "../assets/images/team/jasmine_wongphatarakul.png";
import JoyCheng from "../assets/images/team/joy_cheng.png";
import KimberlyNguyen from "../assets/images/team/kimberly_nguyen.png";
import NicoleJu from "../assets/images/team/nicole_ju.png";
import VictoriaChoi from "../assets/images/team/victoria_choi.png";
import YimingZhang from "../assets/images/team/yiming_zhang.png";

//  Advisors
import AdnanDarwiche from "../assets/images/team/adnan_darwiche.png";
import AaronShi from "../assets/images/team/aaron_shi.png";
import ErinKwon from "../assets/images/team/erin_kwon.png";
import GalenHeuer from "../assets/images/team/galen_heuer.png";
import JerryXu from "../assets/images/team/jerry_xu.png";
import SarahChang from "../assets/images/team/sarah_chang.png";

import MemberProfile from "./MemberProfile";

const members = [
  {
    image: AngelaLing,
    name: "Angela Ling ",
    position: "Co-President",
    linkedInURL: "https://www.linkedin.com/in/angela-ling/",
  },
  {
    image: JeffLu,
    name: "Jeff Lu ",
    position: "Co-President",
    linkedInURL: "https://www.linkedin.com/in/thejefflu/",
  },
  {
    image: CarolineDebBaruah,
    name: "Caroline DebBaruah ",
    position: "External Vice President",
    linkedInURL: "https://www.linkedin.com/in/caroline-debbaruah/",
  },
  {
    image: JulietZhang,
    name: "Juliet Zhang ",
    position: "Internal Vice President",
    linkedInURL: "https://www.linkedin.com/in/zhang-juliet/",
  },
  {
    image: RyanYeo,
    name: "Ryan Yeo ",
    position: "Vice President of Technology",
    linkedInURL: "https://www.linkedin.com/in/ryan-yeo-ab5010217/",
  },
  {
    image: JiyeonHan,
    name: "Jiyeon Han ",
    position: "Vice President of Design",
    linkedInURL: "https://www.linkedin.com/in/jiyeonhann/",
  },
  {
    image: AngelaHao,
    name: "Angela Hao ",
    position: "Vice President of Operations",
    linkedInURL: "https://www.linkedin.com/in/angela-hao-5246801b3/",
  },
  {
    image: AntonioCosio,
    name: "Antonio Cosio ",
    position: "Project Lead",
    linkedInURL: "https://www.linkedin.com/in/acosio/",
  },
  {
    image: EdwardNg,
    name: "Edward Ng ",
    position: "Project Lead",
    linkedInURL: "https://www.linkedin.com/in/edward-n/",
  },
  {
    image: EricZhou,
    name: "Eric Zhou ",
    position: "Project Lead",
    linkedInURL: "https://www.linkedin.com/in/eric-zhou-648497251/",
  },
  {
    image: JoyceChen,
    name: "Joyce Chen ",
    position: "Project Lead",
    linkedInURL: "https://www.linkedin.com/in/joycechen12/",
  },
  {
    image: MackenzieSmith,
    name: "Mackenzie Smith ",
    position: "Project Lead",
    linkedInURL: "https://www.linkedin.com/in/mackenzie-smith-3728a3220/",
  },
  {
    image: StellaKang,
    name: "Stella Kang",
    position: "Project Lead",
    linkedInURL: "https://www.linkedin.com/in/stella-kang-a40a38258/",
  },
  {
    image: TomOh,
    name: "Tom Oh ",
    position: "Project Lead",
    linkedInURL: "https://www.linkedin.com/in/tom-oh-00b8ba201/",
  },
  {
    image: CherylWu,
    name: "Cheryl Wu ",
    position: "Developer",
    linkedInURL: "https://www.linkedin.com/in/cherylwu8/",
  },
  {
    image: ChizitelumOranu,
    name: "Chizitelum Oranu ",
    position: "Designer",
    linkedInURL: "https://www.linkedin.com/in/chizitelumoranu/",
  },
  {
    image: DanielChang,
    name: "Daniel Chang ",
    position: "Developer",
    linkedInURL: "https://www.linkedin.com/in/daniel-chang-457886248/",
  },
  {
    image: DanielOgura,
    name: "Daniel Ogura ",
    position: "Designer",
    linkedInURL: "https://www.linkedin.com/in/danielogura/",
  },
  {
    image: FionaPeng,
    name: "Fiona Peng ",
    position: "Developer",
    linkedInURL: "https://www.linkedin.com/in/fiona-peng-46b8a6228/",
  },
  {
    image: JasmineWongphatarakul,
    name: "Jasmine Wongphatarakul ",
    position: "Developer",
    linkedInURL: "https://www.linkedin.com/in/jasmine-wongphatarakul/",
  },
  {
    image: JoyCheng,
    name: "Joy Cheng ",
    position: "Developer",
    linkedInURL: "https://www.linkedin.com/in/joy-y-cheng/",
  },
  {
    image: KimberlyNguyen,
    name: "Kimberly Nguyen ",
    position: "Developer",
    linkedInURL: "https://www.linkedin.com/in/kimberlynguyenh/",
  },
  {
    image: NicoleJu,
    name: "Nicole Ju ",
    position: "Developer",
    linkedInURL: "https://www.linkedin.com/in/nicoleju03/",
  },
  {
    image: VictoriaChoi,
    name: "Victoria Choi ",
    position: "Developer",
    linkedInURL: "https://www.linkedin.com/in/victoria-choi/",
  },
  {
    image: YimingZhang,
    name: "Yiming Zhang ",
    position: "Designer",
    linkedInURL: "https://www.linkedin.com/in/yimingzhng/",
  },
  {
    image: AdnanDarwiche,
    name: "Adnan Darwiche",
    position: "Faculty Advisor",
    linkedInURL: "https://samueli.ucla.edu/people/adnan-darwiche/",
  },
  {
    image: AaronShi,
    name: "Aaron Shi ",
    position: "Advisor",
    linkedInURL: "https://www.linkedin.com/in/aaronshi53/",
  },
  {
    image: ErinKwon,
    name: "Erin Kwon ",
    position: "Advisor",
    linkedInURL: "https://www.linkedin.com/in/erinkwon01/",
  },
  {
    image: GalenHeuer,
    name: "Galen Heuer ",
    position: "Advisor",
    linkedInURL: "https://www.linkedin.com/in/galenheuer/",
  },
  {
    image: JerryXu,
    name: "Jerry Xu ",
    position: "Advisor",
    linkedInURL: "https://www.linkedin.com/in/chujun-jerry-xu/",
  },
  {
    image: SarahChang,
    name: "Sarah Chang ",
    position: "Advisor",
    linkedInURL: "https://www.linkedin.com/in/sarah-chang-240795199/",
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
