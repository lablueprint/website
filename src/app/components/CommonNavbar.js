import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LogoWhite from '../assets/images/branding/logo_white.png';

export default function CommonNavbar({ setScrollDestination }) {
  return (
    <div className="container-fluid common-navbar">
      <Container>
        <Navbar variant="dark" expand="md">
          <Fade left>
            <Navbar.Brand href="/">
              <img
                alt=""
                src={LogoWhite}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              {' blueprint'}
            </Navbar.Brand>
          </Fade>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto nav-link">
              <Fade right>
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => setScrollDestination(null)}
                >
                  Home
                </Link>
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => setScrollDestination('whoweare')}
                >
                  About
                </Link>
                <Link className="nav-link" to="/team">
                  Team
                </Link>
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Fade>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

CommonNavbar.propTypes = {
  setScrollDestination: PropTypes.func.isRequired,
};
