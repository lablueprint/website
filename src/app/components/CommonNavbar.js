import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Fade, Roll } from "react-reveal";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ClassNames from "classnames";

import LogoWhite from "../assets/images/branding/logo_white.svg";

export default function CommonNavbar({ className }) {
  const [expanded, setExpanded] = useState(false);

  const navbarClass = ClassNames(
    className,
    { expanded },
    "container-fluid",
    "common-navbar"
  );
  const variant = className.includes("inverse") ? "light" : "dark";

  return (
    <div className={navbarClass}>
      <Container>
        <Navbar variant={variant} expand="md">
          <Fade down>
            <Link to="/">
              <Navbar.Brand>
                <Roll>
                  <img
                    alt=""
                    src={LogoWhite}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />
                </Roll>
                blueprint
              </Navbar.Brand>
            </Link>
          </Fade>
          <Navbar.Toggle
            onClick={() => setExpanded(!expanded)}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto navbar-nav">
              <Fade down>
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
                <Link className="nav-link" to="/students">
                  For Students
                </Link>
                <Link className="nav-link" to="/nonprofits">
                  For Nonprofits
                </Link>
                <Link
                  className="contact-btn contact-btn--outline"
                  to="/contact"
                >
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

CommonNavbar.defaultProps = {
  className: "",
};

CommonNavbar.propTypes = {
  className: PropTypes.string,
};
