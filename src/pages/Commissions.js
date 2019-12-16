/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from '@reach/router';
import React from 'react';
import theme from '../theme';

const Commissions = ({ wrapperStyle, children }) => {
  wrapperStyle = {
    // position children
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    // commission page's direct descendants also gets a bottom margin
    '& > *': {
      marginBottom: theme.general.marginBottom
    },
    ...wrapperStyle
  };

  return (
    <div css={wrapperStyle}>
      <h2 css={{ textAlign: 'center' }}>✧ c o m m i s s i o n s ✧</h2>
      <span css={{ textAlign: 'center' }}>
        <strong>
          {`If you haven't yet, please read my `}
          {/* remember the slash or else it's relative navigation */}
          <Link to='/tos' css={{ fontWeight: 'bolder' }}>
            Terms of Service
          </Link>
          {` before requesting a commission!`}
        </strong>
      </span>
      <br />
      <h2 css={{ textAlign: 'center' }}>✧ d o ' s - a n d - d o n ' t s ✧</h2>
      <p css={{ textAlign: 'start' }}>
        <span role='img' aria-label='check-mark'>
          ✔️
        </span>
        {` Humans, Human-faced anthros, Animal/creature-like characters, Young
        characters, Cute characters, Mild NSFW (may require extra fee)`}
        <br />
        <br />
        <span role='img' aria-label='cross-mark'>
          ❌
        </span>
        {` Muzzled Anthros/Furries, Certain non-humanoid characters, Very old
        characters, Extreme NSFW, Extreme gore/violence, Full armor, Mecha,
        Extremely detailed weapons`}
        <br />
        <br />
        <em>
          {`Some things may be discussed and negotiated for the right price.
          Please ask me if you are unsure or have anything in mind that isn't
          listed!`}
        </em>
      </p>
      {children}
    </div>
  );
};

export default Commissions;
