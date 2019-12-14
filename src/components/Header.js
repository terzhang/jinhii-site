/** @jsx jsx */
import { jsx } from '@emotion/core';
import theme from '../theme';

const Header = ({ containerStyle }) => {
  containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    ...containerStyle
  };

  const titleStyle = {
    // fit to parent container
    gridColumn: '100%',
    fontSize: theme.header.fontSize,
    // centered and centered on content
    justifySelf: 'center',
    alignSelf: 'center'
  };

  return (
    <div css={containerStyle}>
      <h1 css={titleStyle}>{theme.header.title}</h1>
    </div>
  );
};

export default Header;
