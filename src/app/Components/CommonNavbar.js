import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.scss';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LogoWhite from '../assets/images/branding/logo_white.png';

const logoStyle = {
  fontFamily: 'Poppins',
  fontWeight: 'bold',
  textShadow: 'none',
};

const navbarStyle = {
  position: 'static',
  fontFamily: 'Roboto',
  paddingLeft: 0,
  paddingRight: 0,
};

const bgStyle = {
  background: '#187be5',
  padding: 0,
  margin: 0,
};

export default function CommonNavbar({ setScrollDestination }) {
  return (
    <div className="container-fluid" style={bgStyle}>
      <Container>
        <Navbar variant="dark" style={navbarStyle} expand="md">
          <Fade left>
            <Navbar.Brand href="/" style={logoStyle}>
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
                  onClick={() => setScrollDestination('root')}
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
