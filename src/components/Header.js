/** @jsx jsx */
import { jsx } from '@emotion/core';
import HeaderButton from './HeaderButton';
import theme from '../theme';

const Header = ({ containerStyle, onClick }) => {
  // each element name in array is the same as the endpoint name (ie home => mysite.com/home)
  const navButtons = ['home', 'about', 'tos', 'commissions', 'contact'];

  containerStyle = {
    // position self
    ...containerStyle,
    // positioning children
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows:
      '[title-start] 60% [title-end] 0% [nav-start] 40% [nav-end]'
  };

  const navStyle = {
    display: 'grid', // div defaults to block display
    // fit to grid container
    gridRow: 'nav',
    gridColumn: '100%',
    width: '100%', // make all nav content stretch to grid item width
    justifySelf: 'center',
    // grid for nav buttons
    gridTemplateColumns: `repeat(${navButtons.length}, auto)`,
    gridTemplateRows: 'auto',
    gridGap: '1rem'
  };

  const titleStyle = {
    display: 'grid', // h1 defaults to block display
    // fit to grid container
    gridRow: 'title',
    gridColumn: '100%',
    /* width: '100%', */
    fontSize: theme.header.fontSize,
    // centered and centered on content
    justifySelf: 'center',
    alignSelf: 'center'
  };

  return (
    <div css={containerStyle}>
      <h1 css={titleStyle}>{theme.header.title}</h1>
      <div css={navStyle}>
        {navButtons.map(button => {
          return (
            <HeaderButton
              onClick={onClick}
              key={button}
              label={button}
              nav={button}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
