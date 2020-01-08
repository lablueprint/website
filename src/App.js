import './app/assets/stylesheets/main.scss';
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import CommonNavbar from './app/components/CommonNavbar';
import Footer from './app/components/Footer';
import ProjectInfo from './app/components/ProjectInfo';

import AboutPage from './app/pages/AboutPage';
import ApplyPage from './app/pages/ApplyPage';
import ContactPage from './app/pages/ContactPage';
import HomePage from './app/pages/HomePage';
import NonprofitPage from './app/pages/NonprofitPage';
import NotFoundPage from './app/pages/NotFoundPage';
import ProjectPage from './app/pages/ProjectPage';
import StudentPage from './app/pages/StudentPage';

const transparentPages = [
  '',
  'about',
  'nonprofits',
  'projects',
  'students',
].map((page) => `/${page}`);

const projectNames = [
  'ptv',
  'harmony',
];

const inversePages = [
  'contact',
].map((page) => `/${page}`).concat(projectNames.map((name) => `/projects/${name}`));


export default function App() {
  const location = useLocation();

  let navbarClass = '';
  if (typeof transparentPages.find((elem) => (elem === location.pathname)) !== 'undefined') {
    navbarClass = 'transparent';
  } else if (typeof inversePages.find((elem) => (elem === location.pathname)) !== 'undefined') {
    navbarClass = 'inverse';
  }

  const projects = projectNames.map((name) => (
    <Route exact path={`/projects/${name}`}>
      <ProjectInfo projectName={name} />
    </Route>
  ));

  return (
    <>
      <CommonNavbar className={navbarClass} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/projects">
          <ProjectPage />
        </Route>
        {projects}
        <Route exact path="/apply">
          <ApplyPage />
        </Route>
        <Route exact path="/students">
          <StudentPage />
        </Route>
        <Route exact path="/nonprofits">
          <NonprofitPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}
