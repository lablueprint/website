import React from 'react';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import logo_white from '..//../images/logo_white.png';

export default function CommonNavbar(props) {
  return (
    <Navbar variant="dark" style={props.location.pathname === '/' ? homePageNavbarStyle : teamPageNavbarStyle} expand='md'>
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo_white}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {' blueprint'}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto nav-link">
          <Link className="nav-link" to="/" onClick={() => props.setScrollDestination("landing")}>Home</Link>
          <Link className="nav-link" to="/" onClick={() => props.setScrollDestination("whoweare")}>Who We Are</Link>
          <Link className="nav-link" to="/" onClick={() => props.setScrollDestination("whatwedo")}>What We Do</Link>
          <Link className="nav-link" to="/team">Our Team</Link>
          <Link className="nav-link" to="/" onClick={() => props.setScrollDestination("contactus")}>Contact Us</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const homePageNavbarStyle = {
  opacity: 1,
  position: "absolute",
  width: "100%"
}

const teamPageNavbarStyle = {
  background: "rgba(0, 120, 232, 0.6)",
  position: "static"
}
