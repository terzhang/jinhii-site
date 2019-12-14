/** @jsx jsx */
import { jsx } from '@emotion/core';
import NavButton from './NavButton';
import theme from '../theme';

const Nav = ({ wrapperStyle, navStyle, buttonStyle }) => {
  // each element name in array is the same as the endpoint name (ie home => mysite.com/home)
  const navButtons = ['home', 'about', 'tos', 'commissions', 'contact'];

  wrapperStyle = {
    // fit to grid container
    gridRow: 'nav',
    gridColumn: '100%',
    width: '100%', // make all nav content stretch to grid item width
    justifySelf: 'center',
    ...wrapperStyle
  };

  navStyle = {
    // style self
    display: 'flex',
    width: '100%',
    height: '100%',
    ...navStyle
  };

  buttonStyle = {
    // self style
    ...theme.button,
    // onHover
    ':hover': theme.button_hover
  };

  return (
    <nav css={wrapperStyle}>
      <ul css={navStyle}>
        {navButtons.map(button => (
          <NavButton
            key={button}
            label={button}
            to={`${button}`}
            buttonStyle={buttonStyle}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
