/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from '@reach/router';
import React from 'react';
import theme from '../theme';
import ScrollTopButton from '../components/ScrollTopButton';

const Commissions = ({ wrapperStyle, children }) => {
  wrapperStyle = {
    // position children
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    // commission page's direct descendants also gets a bottom margin
    ...wrapperStyle
  };

  const scrollButtonStyle = {
    display: 'block',
    position: 'fixed',
    bottom: '0',
    maxWidth: '7vw',
    minWidth: '5rem',
    maxHeight: 'calc(7vw * 0.6)',
    minHeight: 'calc(5rem * 0.6)',
    ...theme.scroll_to_top_button
  };

  // target the children of each type components
  // each type component is wrapped by another div due to router grouping so...
  // ... target the children of the children of our children
  const typeWrapperStyle = {
    '& > * > *': {
      marginBottom: theme.general.marginBottom
    }
  };

  // https://reactjs.org/docs/react-api.html#reactchildren
  let child = React.Children.only(children);

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
      <ScrollTopButton
        buttonStyle={scrollButtonStyle}
        offset={1000}
        innerColor={'white'}
      />
      <child.type {...child.props} css={typeWrapperStyle} />
    </div>
  );
};

export default Commissions;
