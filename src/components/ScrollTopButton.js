/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import useScrollToTop from '../hooks/useScrollToTop';

export const ScrollTopButton = ({ buttonStyle, offset = 300 }) => {
  const { mayScroll, scrollToTop } = useScrollToTop(offset);

  buttonStyle = {
    borderRadius: '20rem 20rem 0 0',
    backgroundColor: 'pink',
    color: 'white',
    width: '8rem',
    height: '5rem',
    visibility: mayScroll ? 'visible' : 'hidden',
    margin: 0,
    pointerEvents: 'auto',
    zIndex: '99',
    ...buttonStyle
  };

  return (
    <button css={buttonStyle} onClick={() => scrollToTop()}>
      {'TOP'}
    </button>
  );
};

export default ScrollTopButton;
