import React from 'react';
import { Image, Jumbotron } from 'react-bootstrap';
import jumbo_background from '..//../images/jumbo_background2.png';
import logo_white from '..//../images/logo_white.png';
import { Fade, Roll } from 'react-reveal'

export default function Landing(props) {
  return (
    <Jumbotron id={props.id} style={jumboStyle} bsPrefix="text-center min-vh-100 justify-content-center d-flex flex-column">
      <Roll>
        <Image
          alt=""
          src={logo_white}
          width="200"
          height="200"
          hspace="20"
          className="align-self-center"
          fluid />
      </Roll>
      <Fade>
        <h1 style={jumboHeaderStyle}>TECH FOR SOCIAL GOOD</h1>
      </Fade>
    </Jumbotron>
  );
}

const jumboStyle = {
  backgroundImage: 'url(' + jumbo_background + ')',
  backgroundSize: "cover"
};

const jumboHeaderStyle = {
  color: "white",
  fontSize: 20,
  paddingTop: 20
};