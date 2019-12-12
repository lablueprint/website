import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Fade, Roll } from 'react-reveal';
import PropTypes from 'prop-types';

import LogoWhite from '../../images/logo_white.png';

const landingStyle = {
  backgroundColor: '#187be5',
  minHeight: '70vh',
  backgroundSize: 'cover',
  fontFamily: 'Roboto',
};

const jumboHeaderStyle = {
  color: 'white',
  fontSize: 20,
  paddingTop: 20,
};

export default function Landing(props) {
  const { id } = props;

  return (
    <div
      className="container-fluid text-center justify-content-center d-flex flex-column py-5"
      id={id}
      style={landingStyle}
    >
      <Container>
        <Roll>
          <Image
            alt=""
            src={LogoWhite}
            width="200"
            height="200"
            hspace="20"
            className="align-self-center"
            fluid
          />
        </Roll>
        <Fade>
          <h1 style={jumboHeaderStyle}>TECH FOR SOCIAL GOOD</h1>
        </Fade>
      </Container>
    </div>
  );
}

Landing.propTypes = {
  id: PropTypes.string.isRequired,
};
