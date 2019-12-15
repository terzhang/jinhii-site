/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import theme from '../theme';

// given an array filled with strings
const RenderList = ({
  listArray,
  label,
  labelStyle,
  wrapperStyle,
  textStyle
}) => {
  wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    ...wrapperStyle
  };

  textStyle = {
    // to make a hanging indent
    marginLeft: '1rem', // de-indent first line of text block
    textIndent: '-1rem', // indent the whole text block, canceling first line's de-indent but indenting subsequent lines
    // text-indent doesn't work with inline
    display: 'inline-flex',
    padding: '2%',
    ...textStyle
  };

  labelStyle = {
    ...theme.subheading,
    textAlign: 'center',
    ...labelStyle
  };

  const list = listArray.map(text => (
    <React.Fragment key={text}>
      <p css={textStyle}>{text}</p>
    </React.Fragment>
  ));

  return (
    <div css={wrapperStyle}>
      {label && <h3 css={labelStyle}>{label}</h3>}
      {list}
    </div>
  );
};

export default RenderList;
