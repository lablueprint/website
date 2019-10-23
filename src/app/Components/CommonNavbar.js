import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import logo_white from '..//../images/logo_white.png';

export default class CommonNavbar extends Component {

  pathWithScroll(pathname, section) {
    return {
      pathname: pathname,
      state: {
        scrollToSection: section
      }
    }
  }

  render() {
    return (
      <Navbar variant="dark" style={this.props.style} expand='md'>
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
            <Link className="nav-link" to={this.pathWithScroll("/", "landing")}>Home</Link>
            <Link className="nav-link" to={this.pathWithScroll("/", "whoweare")}>Who We Are</Link>
            <Link className="nav-link" to={this.pathWithScroll("/", "whatwedo")}>What We Do</Link>
            <Link className="nav-link" to="/team">Our Team</Link>
            <Link className="nav-link" to={this.pathWithScroll("/", "contactus")}>Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
