import React from 'react';
import { Container, Image } from 'react-bootstrap';
import logo_white from '..//../images/logo_white.png';
import { Fade, Roll } from 'react-reveal'

export default function Landing(props) {
  return (
    <div className="container-fluid text-center justify-content-center d-flex flex-column py-5" id={props.id} style={landingStyle}>
      <Container>
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
      </Container>
    </div>
  );
}

const landingStyle = {
  backgroundColor: '#187be5',
  minHeight: '70vh',
  backgroundSize: 'cover'
};

const jumboHeaderStyle = {
  color: 'white',
  fontSize: 20,
  paddingTop: 20
};