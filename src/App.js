import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './images/logo.png';
import logo_white from './images/logo_white.png';
import jumbo_background from './images/jumbo-background.png';
import blueprint_royce_hall from './images/blueprint_royce_hall.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import { Navbar, Jumbotron, Button, Image, Row, Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

class App extends Component {
  /*
    TOOD:
      - move navbar to separate component
      - move both jumbotrons to separate components
      - refactor so App renders only a single router component that chooses the page to render depending on url
  */
  render() {
    return (
      <BrowserRouter basename="/">
        <div style={jumboStyle}>
          <Navbar variant="dark" className="navbarstuff" expand='md'>
            <Navbar.Brand href="/home">
              <img
                alt=""
                src={logo_white}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              {' Blueprint'}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto nav-link">
                <HashLink className="nav-link" smooth to="/home">Home</HashLink>
                <HashLink className="nav-link" smooth to="#whoweare">Who We Are</HashLink>
                <HashLink className="nav-link" smooth to="#filler2">What We Do</HashLink>
                <HashLink className="nav-link" smooth to="#filler3">Our Team</HashLink>
                <HashLink className="nav-link" smooth to="#filler4">Contact Us</HashLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Jumbotron bsPrefix="text-center min-vh-100 justify-content-center d-flex flex-column">
              <Image
                alt=""
                src={logo_white}
                width="200"
                height="200"
                hspace="20"
                className="align-self-center"
                fluid />
              <h1 style={jumboHeaderStyle}>TECH FOR SOCIAL GOOD</h1>
          </Jumbotron>
        </div>
        <div>
          <WhoWeAre />
        </div>
        </BrowserRouter>
    );
  }

}

const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>
const jumboStyle = {
  backgroundImage: 'url(' + jumbo_background + ')',
  backgroundSize: "cover"
}
const jumboHeaderStyle = {
  color: "white",
  fontSize: 20,
  paddingTop: 20
}

function WhoWeAre() {
  return <Jumbotron fluid style={{'background-color': '#187be5','color': 'white'}} id={'whoweare'}>
    <Row style={{'margin': 0}}>
    <Col xs={{ span: 10, offset: 1 }} md={{ span: 4, offset: 2}}>
    <h1>What is Blueprint</h1>
      <p>
        Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare. 
  ​    </p>
      <p>
        UCLA Blueprint is committed to building and promoting tech for social good - free of charge. We collaborate with non-profits to provide services such as websites, mobile applications, and data analytical tools.
      </p>
      <p>
        Blueprint is a multinational organization founded in 2012 at UC Berkeley. We are the third established chapter after the University of Waterloo.
      </p>
    </Col>
    <Col xs={{ span: 10, offset: 1 }} md={{ span: 4, offset: 1}}>
      <Image src={blueprint_royce_hall} fluid></Image>
    </Col>
    </Row>
  </Jumbotron>;
}

export default App;
