import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import CommonNavbar from './app/components/CommonNavbar';
import Footer from './app/components/Footer';
import ProjectInfo from './app/components/ProjectInfo';

import AboutPage from './app/pages/AboutPage';
import ContactPage from './app/pages/ContactPage';
import HomePage from './app/pages/HomePage';
import NonprofitPage from './app/pages/NonprofitPage';
import NotFoundPage from './app/pages/NotFoundPage';
import ProjectPage from './app/pages/ProjectPage';
import StudentPage from './app/pages/StudentPage';

const projectNames = [
  'endoverdose',
  'teapotgardens',
  'unitedway',
  'globalgreen',
  'idontmind',
  'writegirl',
  'fotc',
  'sraa',
  'tcw',
  'apifm',
  'tck',
  'stf',
  'ptv',
  'harmony-project',
  'farm2people',
];

const transparentPages = [
  '',
  'about',
  'nonprofits',
  'projects',
  'students',
].map((page) => `/${page}`).concat(projectNames.map((name) => `/projects/${name}`));

const inversePages = [
  'contact',
].map((page) => `/${page}`).concat(projectNames.map((name) => `/projects/${name}`));

export default function Routes({ onMount }) {
  const location = useLocation();

  onMount();

  const navbarClass = ClassNames({
    transparent: typeof transparentPages.find((elem) => (elem === location.pathname)) !== 'undefined',
    inverse: typeof inversePages.find((elem) => (elem === location.pathname)) !== 'undefined',
  });

  const projects = projectNames.map((name) => (
    <Route exact path={`/projects/${name}`} key={name}>
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

Routes.propTypes = {
  onMount: PropTypes.func.isRequired,
};
