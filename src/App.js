import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import logo from './images/logo.png';
import logo_white from './images/logo_white.png';
import jumbo_background from './images/jumbo-background.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import { Navbar, Jumbotron, Button, Image } from 'react-bootstrap';

function App() {
  return (
    <HashRouter basename='/'>
      <Navbar bg="dark" variant="dark" expand='md'>
        <Navbar.Brand href="#home">
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
          <Nav className="ml-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#filler1">Who We Are</Nav.Link>
            <Nav.Link href="#filler2">What We Do</Nav.Link>
            <Nav.Link href="#filler2">Our Team</Nav.Link>
            <Nav.Link href="#filler2">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron bsPrefix="text-center min-vh-100 justify-content-center d-flex flex-column" style={jumboStyle}>
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
      {/* <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      </div> */}
    </HashRouter>
  );

  // return (
  //   <div className="App">
  //     <div>
  //       <ul id="nav">
  //         <li><a href="#">Home</a></li>
  //         <li><a href="#">About</a></li>
  //         <li><a href="#">FAQ</a></li>
  //         <li><a href="#">Contact</a></li>
  //       </ul>
  //     </div>
  //     <header className="App-header">
  //       <img src={logo_white} className="App-logo" alt="logo" />
  //       <div>
  //         blueprint
  //       </div>
  //       <p>
  //         UCLA Blueprint
  //       </p>
  //     </header>
  //   </div>
  // );
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


export default App;
