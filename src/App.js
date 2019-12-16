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
const typesPath = './pages/types/';
// commission types
const SparkleIcons = lazy(() => import(typesPath + 'SparkleIcons'));
const Chibis = lazy(() => import(typesPath + 'Chibis'));
const Normal = lazy(() => import(typesPath + 'Normal'));
const Pixels = lazy(() => import(typesPath + 'Pixels'));
const EmotesBadges = lazy(() => import(typesPath + 'EmotesBadges'));
const KofiEmotes = lazy(() => import(typesPath + 'KofiEmotes'));
const CustomUgc = lazy(() => import(typesPath + 'CustomUgc'));
const CustomWallpaper = lazy(() => import(typesPath + 'CustomWallpaper'));
const Logos = lazy(() => import(typesPath + 'Logos'));
const TypeButtons = lazy(() => import('./components/TypeButtons'));

const pageWrapper = {
  // direct descendants gets a bottom margin to space out
  '& > *': {
    marginBottom: theme.general.marginBottom
  }
};

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
            <Commissions path='commissions'>
              <TypeButtons path='/' default wrapperStyle={pageWrapper} />
              <SparkleIcons path='sparkle_icons' wrapperStyle={pageWrapper} />
              <Chibis path='chibis' wrapperStyle={pageWrapper} />
              <Normal path='normal' wrapperStyle={pageWrapper} />
              <Pixels path='pixels' wrapperStyle={pageWrapper} />
              <EmotesBadges path='emotes_badges' wrapperStyle={pageWrapper} />
              <KofiEmotes path='kofi_emotes' wrapperStyle={pageWrapper} />
              <CustomUgc path='custom_ugc' wrapperStyle={pageWrapper} />
              <CustomWallpaper
                path='custom_wallpaper'
                wrapperStyle={pageWrapper}
              />
              <Logos path='logos' wrapperStyle={pageWrapper} />
            </Commissions>
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
