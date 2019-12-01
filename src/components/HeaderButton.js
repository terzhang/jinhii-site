/** @jsx jsx */
import { jsx } from '@emotion/core';
import theme from '../theme';

const HeaderButton = ({ onClick, label, nav }) => {
  const containerStyle = {
    // self pos
    gridColumn: 'span 1 / span 1',
    width: 'auto',
    height: '100%',
    // self style
    ...theme.button,
    textAlign: 'center',
    // onHover
    ':hover': {
      ...theme.button_hover
    },
    // child pos
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <a href={`#${nav}`} css={containerStyle} onClick={() => onClick(label)}>
      {label}
    </a>
  );
};

export default HeaderButton;
