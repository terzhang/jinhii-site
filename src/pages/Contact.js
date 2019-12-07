/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { socialMediaIcons } from '../theme';
import useTextCopy from '../hooks/useTextCopy';

const Contact = ({ containerStyle }) => {
  const [filteredIcons, setFilteredIcons] = useState({});

  // filter the icons based on the iconSelected array on mount and recalculates when the array changes
  useEffect(() => {
    const iconSelected = ['discord', 'deviantArt', 'email'];
    let iconSubset = {},
      index;
    for (index in iconSelected) {
      let key = iconSelected[index];
      iconSubset[key] = socialMediaIcons[key];
    }
    setFilteredIcons(iconSubset);
  }, []);

  // method that render a mini footer given a style
  const miniFooter = style => (
    <Footer icons={filteredIcons} containerStyle={style} />
  );

  containerStyle = {
    // position children
    display: 'grid',
    gridTemplateRows: 'repeat(3, minmax(auto, max-content))',
    gridTemplateAreas: `
    'title' 'icons' 'text'
    `,
    justifyItems: 'center',
    button: {
      pointerEvents: 'auto'
    },
    ...containerStyle
  };

  const buttonStyle = { height: '2rem', marginLeft: '1rem' };

  const { textAreaRef, copyToClipboard, copySuccess } = useTextCopy();

  return (
    <div css={containerStyle}>
      {/* subheading */}
      <h2 css={{ gridArea: 'title' }}>✧ c o n t a c t ✧</h2>
      {/* mini footer */}
      {miniFooter({
        gridArea: 'icons',
        // size is mainly by width
        width: '20%',
        height: '100%',
        pointerEvents: 'auto'
      })}
      {/* best contact method */}
      <div css={{ display: 'flex', flexDirection: 'row' }}>
        <p css={{ gridArea: 'text' }}>
          Discord (best method): <span ref={textAreaRef}>Jinhii#2087</span>
        </p>
        <button css={buttonStyle} onClick={copyToClipboard}>
          {copySuccess ? `Copied!` : 'Copy me'}
        </button>
      </div>
    </div>
  );
};
export default Contact;
