/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import useScrollToTop from '../hooks/useScrollToTop';
import Up from './Up.js';

export const ScrollTopButton = ({ buttonStyle, offset = 300 }) => {
  const { mayScroll, scrollToTop } = useScrollToTop(offset);

  buttonStyle = {
    borderRadius: '20rem 20rem 0 0',
    backgroundColor: 'pink',
    color: 'white',
    width: '8rem',
    height: '5rem',
    visibility: mayScroll ? 'visible' : 'hidden',
    margin: 0, // override default margin
    pointerEvents: 'auto',
    zIndex: '99',
    right: '5%',
    // define transition on transform
    transition: 'transform 500ms ease-out',
    transform: `scaleY(${mayScroll ? '1' : '0'})`,
    transformOrigin: '50% 100%',
    willChange: 'transform', // let browser know it'll transform
    // translate a bit on active (press)
    ':active': {
      transition: 'transform 0ms', // override previous set transition
      transform: 'scaleY(0.95)'
    },
    ...buttonStyle
  };

  return (
    <button css={buttonStyle} onClick={() => scrollToTop()}>
      <Up fill='#FFF' height='100%' />
    </button>
  );
};

export default ScrollTopButton;
