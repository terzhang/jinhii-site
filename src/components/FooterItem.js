/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

const FooterItem = ({
  icon,
  color = 'black',
  width,
  height,
  viewBox,
  svgStyle
}) => {
  return (
    <a href={icon.link}>
      <svg
        viewBox={viewBox}
        fill={color}
        // width={width}
        // height={height}
        css={svgStyle}
      >
        <path d={icon.path} />
      </svg>
    </a>
  );
};

export default FooterItem;
