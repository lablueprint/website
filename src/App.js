import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import logo from './images/logo.png';
import logo_white from './images/logo_white.png';
import './App.css';

function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      </div>
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

export default App;
