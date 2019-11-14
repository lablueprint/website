import React from 'react';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import logo_white from '..//../images/logo_white.png';
import '../../App.css'

export default function CommonNavbar(props) {
  return (
    <Navbar variant="dark" style={{...(window.location.pathname === '/' ? homePageNavbarStyle : teamPageNavbarStyle), ...navbarStyle}} expand='md'>
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
          <Link className="nav-link" to="/" onClick={() => props.setScrollDestination("landing")}>Home</Link>
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
  fontFamily: 'Poppins'
};

const navbarStyle = {
  fontFamily: 'Roboto'
};

const homePageNavbarStyle = {
  opacity: 1,
  position: "absolute",
  width: "100%"
};

const teamPageNavbarStyle = {
  background: '#187be5',
  position: "static"
};