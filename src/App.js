/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import './App.css';
import Header from './components/Header';
import theme, { socialMediaIcons } from './theme';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Commissions from './pages/Commissions';
import ToS from './pages/ToS';
import Contact from './pages/Contact';

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
    zIndex: '2',
    gridColumn: 'content',
    backgroundColor: theme.content.backgroundColor,
    height: 'fit-content', // content heights are dynamic so make this container fit to content
    width: '100%',
    overflowY: 'visible',
    pointerEvents: 'none', // off by default
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
    }
  };

  const [body, setBody] = React.useState('commissions');

  // conditionally render the body section
  const renderBody = body => {
    switch (body) {
      case 'home':
        return <Home containerStyle={{ gridArea: 'body' }} />;
      case 'about':
        return <About containerStyle={{ gridArea: 'body' }} />;
      case 'commissions':
        return <Commissions containerStyle={{ gridArea: 'body' }} />;
      case 'tos':
        return <ToS containerStyle={{ gridArea: 'body' }} />;
      case 'contact':
        return <Contact containerStyle={{ gridArea: 'body' }} />;
      default:
        return <Home containerStyle={{ gridArea: 'body' }} />;
    }
  };

  const handleNavClick = label => {
    setBody(label);
  };

  return (
    <div css={scrollContainer}>
      <div css={contentContainer}>
        <Header
          containerStyle={{ gridArea: 'header' }}
          onClick={handleNavClick} // props drilling setBody -> Header -> HeaderButton
        />
        {renderBody(body)}
        <Footer
          containerStyle={{ gridArea: 'footer' }}
          icons={socialMediaIcons}
        />
      </div>
    </div>
  );
}

export default App;
