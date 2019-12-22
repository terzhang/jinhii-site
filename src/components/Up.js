import React from 'react';

const SvgComponent = props => (
  <svg data-name='Layer 1' viewBox='0 0 128 160' {...props}>
    <g
      fill={props.fill}
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={14}
    >
      <path d='M64 41.5l45 45M64 41.5l-45 45' />
    </g>
  </svg>
);

export default SvgComponent;
