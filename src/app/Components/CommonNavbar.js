import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import logo_white from '..//../images/logo_white.png';
import '../../App.css';

export default function CommonNavbar(props) {
  return (
    <div className="container-fluid" style={bgStyle}>
      <Container>
        <Navbar variant="dark" style={navbarStyle} expand='md'>
          <Fade left>
            <Navbar.Brand href="/" style={logoStyle}>
              <img
                alt=""
                src={logo_white}
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
                <Link className="nav-link" to="/" onClick={() => props.setScrollDestination(null)}>Home</Link>
                <Link className="nav-link" to="/" onClick={() => props.setScrollDestination("whoweare")}>About</Link>
                <Link className="nav-link" to="/team">Team</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Fade>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

const logoStyle = {
  fontFamily: 'Poppins',
  fontWeight: 'bold',
  textShadow: 'none'
};

const navbarStyle = {
  position: 'static',
  fontFamily: 'Roboto',
  paddingLeft: 0,
  paddingRight: 0
};

const bgStyle = {
  background: '#187be5',
  padding: 0,
  margin: 0
};
