/** @jsx jsx */
import { jsx } from '@emotion/core';
import HeaderButton from './HeaderButton';
import theme from '../theme';

const Header = ({ containerStyle }) => {
  // each element name in array is the same as the endpoint name (ie home => mysite.com/home)
  const navButtons = ['home', 'about', 'tos', 'commissions', 'contact'];

  containerStyle = {
    // positioning children
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows:
      '[title-start] 60% [title-end] 0% [nav-start] 40% [nav-end]',
    ...containerStyle
  };

  const navStyle = {
    // fit to grid container
    gridRow: 'nav',
    gridColumn: '100%',
    width: '100%', // make all nav content stretch to grid item width
    justifySelf: 'center'
  };

  const navButtonsStyle = {
    // style self
    display: 'grid',
    width: '100%',
    height: '100%',
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
      <nav css={navStyle}>
        <ul css={navButtonsStyle}>
          {navButtons.map(button => (
            <HeaderButton key={button} label={button} nav={`${button}`} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
