import React from 'react';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { HashLink } from 'react-router-hash-link';
import logo_white from '..//../images/logo_white.png';

export default function CommonNavbar(props) {
  return (
    <Navbar variant="dark" style={props.style} expand='md'>
      <Navbar.Brand href="/home">
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
          <HashLink className="nav-link" smooth to="/">Home</HashLink>
          <HashLink className="nav-link" smooth to="/#whoweare">Who We Are</HashLink>
          <HashLink className="nav-link" smooth to="#filler2">What We Do</HashLink>
          <HashLink className="nav-link" smooth to="/team">Our Team</HashLink>
          <HashLink className="nav-link" smooth to="#filler4">Contact Us</HashLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
