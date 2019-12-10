/** @jsx jsx */
import { Global, jsx } from '@emotion/core';
import React, { lazy, Suspense } from 'react';
import './App.css';
import theme, { socialMediaIcons } from './theme';
import { Router } from '@reach/router';
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
// lazy dynamic importing for suspense
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Commissions = lazy(() => import('./pages/Commissions'));
const ToS = lazy(() => import('./pages/ToS'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  const scrollContainer = {
    display: 'grid',
    position: 'relative', // creates absolute positioning containing block
    height: 'auto',
    width: '100vw',
    minHeight: '100vh', // full scrollable height always
    overflowY: 'scroll',
    gridTemplateColumns: '10% [content-start] 80% [content-end] 10%',
    backgroundImage: `url(${theme.background.uri})`, // background uri
    backgroundAttachment: 'scroll', // bg image scrolls with content
    backgroundSize: 'cover' // stretch to fit container... does not shrink
  };

  const contentContainer = {
    // positioning self
    position: 'absolute',
    zIndex: '2', // pos above background
    gridColumn: 'content',
    backgroundColor: theme.content.backgroundColor,
    width: '100%',
    height: 'fit-content', // fit to content's demand height if content overflows the page
    minHeight: '100vh', // always at least fill the viewport
    overflowY: 'visible',
    pointerEvents: 'none', // not pointer events by default
    // grid for positioning grid contents
    display: 'grid',
    gridTemplateColumns: `${theme.content.padding} auto  ${theme.content.padding}`,
    gridTemplateRows: `${theme.content.padding} auto max-content auto ${theme.content.padding}`,
    gridTemplateAreas: `
    '. . .'
    '. header .'
    '. body .'
    '. footer .'
    '. . .'
    `,
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
    alignContent: 'center'
  };

  const Loader = () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      Loading Meow...
    </div>
  );

  return (
    <div css={scrollContainer}>
      <Global styles={globalStyle} />
      <div css={contentContainer}>
        {/* Header */}
        <Suspense fallback={<Loader />}>
          <Header containerStyle={{ gridArea: 'header' }} />
        </Suspense>
        {/* body*/}
        <Suspense fallback={<Loader />}>
          <Router css={bodyStyle}>
            <Home path='/' default />
            <About path='about' />
            <Commissions path='commissions'></Commissions>
            <ToS path='tos' />
            <Contact path='contact' />
          </Router>
        </Suspense>
        {/* Footer*/}
        <Suspense fallback={<Loader />}>
          <Footer
            containerStyle={{ gridArea: 'footer' }}
            icons={socialMediaIcons}
          />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
