/** @jsx jsx */
import { jsx } from '@emotion/core';
import theme from '../theme';

const Header = ({ wrapperStyle }) => {
  wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    ...wrapperStyle
  };

  const titleStyle = {
    // fit to parent container
    gridColumn: '100%',
    ...theme.header,
    // centered and centered on content
    justifySelf: 'center',
    alignSelf: 'center'
  };

  return (
    <div css={wrapperStyle}>
      <h1 css={titleStyle}>{theme.header.title}</h1>
    </div>
  );
};

export default Header;
