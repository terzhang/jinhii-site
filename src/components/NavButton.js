/** @jsx jsx */
import { jsx, ClassNames } from '@emotion/core';
import React from 'react';
import theme from '../theme';
import { Link } from '@reach/router';

const NavButton = ({ label, to, listItemStyle, buttonStyle }) => {
  listItemStyle = {
    // fills and shrink to a factor of 1
    flex: '1',
    ...listItemStyle
  };

  buttonStyle = {
    // style children
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...buttonStyle
  };

  // Link styled differently (like hovered) if App is at the Link's pointed location
  const isWithinLocation = ({ isPartiallyCurrent }) =>
    isPartiallyCurrent ? theme.button_hover : {};

  // uses render prop from 'ClassNames' package
  // https://emotion.sh/docs/class-names
  // to generate className for Link Component to pass to its inner anchor tag
  // https://reach.tech/router/api/Link
  return (
    /* so all item */
    <li css={listItemStyle}>
      <ClassNames>
        {({ css, cx }) => (
          <Link
            to={to}
            // getProps={props => isWithinLocation(props)}
            className={css(buttonStyle)}
          >
            {label}
          </Link>
        )}
      </ClassNames>
    </li>
  );
};

export default NavButton;
