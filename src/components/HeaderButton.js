/** @jsx jsx */
import { jsx, ClassNames } from '@emotion/core';
import React from 'react';
import theme from '../theme';
import { Link } from '@reach/router';

/* const HeaderButton = ({ onClick, label, nav }) => { */
const HeaderButton = props => {
  const { label, nav } = props;
  console.log('props for header buttons:', props);
  const containerStyle = {
    // self pos
    gridColumn: 'span 1 / span 1',
    width: 'auto',
    height: '100%',
    // self style
    ...theme.button,
    textAlign: 'center',
    // onHover
    ':hover': theme.button_hover,
    // child pos
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  // Link styled differently (like hovered) if App is at the Link's pointed location
  const isWithinLocation = ({ isPartiallyCurrent }) =>
    isPartiallyCurrent ? theme.button_hover : {};

  // uses render prop from 'ClassNames' package
  // https://emotion.sh/docs/class-names
  // to generate className for Link Component to pass to its inner anchor tag
  // https://reach.tech/router/api/Link
  return (
    <li>
      <ClassNames>
        {({ css, cx }) => (
          <Link
            to={nav}
            // getProps={props => isWithinLocation(props)}
            className={css({ ...containerStyle })}
          >
            {label}
          </Link>
        )}
      </ClassNames>
    </li>
  );
};

export default HeaderButton;
