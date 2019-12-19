import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Fade, Roll } from 'react-reveal';
import PropTypes from 'prop-types';

import LogoWhite from '../assets/images/branding/logo_white.png';

export default function Landing({ id }) {
  return (
    <div
      className="container-fluid text-center justify-content-center d-flex flex-column py-5 landing"
      id={id}
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
          <h1 className="header">TECH FOR SOCIAL GOOD</h1>
        </Fade>
      </Container>
    </div>
  );
}

Landing.propTypes = {
  id: PropTypes.string.isRequired,
};
