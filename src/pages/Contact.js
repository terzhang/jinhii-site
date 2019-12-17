/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { socialMediaIcons } from '../theme';
import useTextCopy from '../hooks/useTextCopy';

const Contact = ({ wrapperStyle }) => {
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
    <Footer icons={filteredIcons} wrapperStyle={style} />
  );

  wrapperStyle = {
    // position children
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // allow the spans and buttons to be clicked
    'button, span': {
      pointerEvents: 'auto'
    },
    ...wrapperStyle
  };

  const buttonStyle = { height: '2rem', marginLeft: '1rem' };

  const { textAreaRef, copyToClipboard, copySuccess } = useTextCopy();

  return (
    <div css={wrapperStyle}>
      {/* subheading */}
      <h2>✧ c o n t a c t ✧</h2>
      {/* mini footer */}
      {miniFooter({
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
          {copySuccess ? `Copied!` : 'Copy'}
        </button>
      </div>
    </div>
  );
};
export default Contact;
