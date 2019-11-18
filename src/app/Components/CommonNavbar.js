import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import logo_white from '..//../images/logo_white.png';
import '../../App.css'

export default function CommonNavbar(props) {
  return (
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
            <Link className="nav-link" to="/" onClick={() => props.setScrollDestination("whoweare")}>Who We Are</Link>
            <Link className="nav-link" to="/" onClick={() => props.setScrollDestination("whatwedo")}>What We Do</Link>
            <Link className="nav-link" to="/team">Our Team</Link>
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </Fade>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const logoStyle = {
  fontFamily: 'Poppins',
  fontWeight: 'bold',
  textShadow: 'none'
};

const navbarStyle = {
  background: '#187be5',
  position: "static",
  fontFamily: 'Roboto'
};

// const homePageNavbarStyle = {
//   opacity: 1,
//   position: 'absolute',
//   width: '100%'
// };

// const teamPageNavbarStyle = {
//   background: '#187be5',
//   position: "static"
// };