/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { Suspense } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import theme, { socialMediaIcons } from './theme';
import Footer from './components/Footer';
// lazy dynamic importing for suspense
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Commissions = React.lazy(() => import('./pages/Commissions'));
const ToS = React.lazy(() => import('./pages/ToS'));
const Contact = React.lazy(() => import('./pages/Contact'));

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
    // grid for positioning contents
    display: 'grid',
    gridTemplateColumns: `${theme.content.padding} auto  ${theme.content.padding}`,
    gridTemplateRows: `${theme.content.padding} auto auto auto ${theme.content.padding}`,
    gridTemplateAreas: `
    '. . .'
    '. header .'
    '. body .'
    '. footer .'
    '. . .'
    `,
    // styling childrens
    color: theme.general.color, // set default color for children
    // defaults for children
    a: {
      pointerEvents: 'auto',
      textDecoration: 'none'
    },
    h2: { ...theme.heading },
    h3: { ...theme.subheading },
    p: { ...theme.text }
  };

  const Loader = () => <div>Loading Meow...</div>;

  return (
    <div css={scrollContainer}>
      <div css={contentContainer}>
        <Header containerStyle={{ gridArea: 'header' }} />
        {/* {renderBody(body)} */}
        <Suspense fallback={<Loader />}>
          <Router css={{ gridArea: 'body' }}>
            <Home path='/' default />
            <About path='about' />
            <Commissions path='commissions' />
            <ToS path='tos' />
            <Contact path='contact' />
          </Router>
        </Suspense>
        <Footer
          containerStyle={{ gridArea: 'footer' }}
          icons={socialMediaIcons}
        />
      </div>
    </div>
  );
}

export default App;
