/** @jsx jsx */
import { Global, jsx } from '@emotion/core';
import React, { lazy, Suspense } from 'react';
import './App.css';
import theme, { socialMediaIcons } from './theme';
import { Router } from '@reach/router';
const Header = lazy(() => import('./components/Header'));
const Nav = lazy(() => import('./components/Nav'));
const Footer = lazy(() => import('./components/Footer'));
// lazy dynamic importing for suspense
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Commissions = lazy(() => import('./pages/Commissions'));
const ToS = lazy(() => import('./pages/ToS'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  const scrollContainer = {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative', // creates absolute positioning containing block
    height: 'auto',
    width: '100vw',
    minHeight: '100vh', // full scrollable height always
    overflowY: 'scroll',
    backgroundImage: `url(${theme.background.uri})`, // background uri
    backgroundAttachment: 'scroll', // bg image scrolls with content
    backgroundSize: 'cover' // stretch to fit container... does not shrink
  };

  const contentContainer = {
    // positioning self
    // scroll container flexes content top-down
    // this allows align-self property to work as justify-self belongs to grid displays only
    alignSelf: 'center',
    position: 'relative',
    backgroundColor: theme.content.backgroundColor,
    padding: theme.content.padding,
    // no shrinking or growing (fix for chrome)
    flexShrink: '0',
    flexGrow: '0',
    // height at least fill the viewport
    minHeight: '100vh',
    // width at least fit to children without them overflowing
    minWidth: 'min-content',
    width: theme.content.width,
    maxWidth: '100%',
    overflowY: 'visible', // allow content to go down offscreen
    // positioning children
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    pointerEvents: 'none', // not pointer events by default
    color: theme.general.color // set default color for children
  };

  const globalStyle = {
    a: {
      pointerEvents: 'auto',
      textDecoration: 'none'
    },
    h2: { ...theme.heading },
    h3: { ...theme.subheading },
    h4: {
      ...theme.subheading,
      fontWeight: '400',
      fontSize: '1.25rem',
      textAlign: 'start'
    },
    p: { ...theme.text }
  };

  const bodyStyle = {
    gridArea: 'body',
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'fit-content',
    alignContent: 'center',
    paddingTop: '2rem',
    paddingBottom: '2rem'
  };

  const Loader = ({ wrapperStyle }) => (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        ...wrapperStyle
      }}
    >
      Loading Meow...
    </div>
  );

  return (
    <div css={scrollContainer}>
      <Global styles={globalStyle} />
      <div css={contentContainer}>
        {/* Header and navigation */}
        <Suspense fallback={<Loader />}>
          <Header />
          <Nav />
        </Suspense>
        {/* body*/}
        <Suspense fallback={<Loader />}>
          <Router css={bodyStyle}>
            <Home path='/' default />
            <About path='about' />
            <Commissions path='commissions' />
            <ToS path='tos' />
            <Contact path='contact' />
          </Router>
        </Suspense>
        {/* Footer*/}
        <Suspense fallback={<Loader />}>
          <Footer icons={socialMediaIcons} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
