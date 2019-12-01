/** @jsx jsx */
import { jsx } from '@emotion/core';
import theme from '../theme';
import FooterItem from './FooterItem';

const Footer = ({ icons, containerStyle }) => {
  const renderIcons = () => {
    return Object.keys(icons).map((key, index) => {
      let icon = icons[key]; // deconstruct out each icon's property
      return (
        <FooterItem
          key={key} // children in list needs a key
          icon={icon}
          color={theme.icon.color}
          // width={theme.icon.width}
          // height={theme.icon.height}
          viewBox={theme.icon.viewBox}
          svgStyle={{ ':hover': { ...theme.footer_hover } }}
        />
      );
    });
  };

  containerStyle = {
    display: 'grid',
    width: '100%',
    height: '100%',
    // position childrens
    gridTemplateColumns: `repeat(${
      Object.getOwnPropertyNames(icons).length
    }, auto)`,
    gridTemplateRows: 'auto',
    gridGap: '2%',
    gridAutoFlow: 'row', // overflowing grid items gets squeezed onto the next row
    ...containerStyle
  };

  return <div css={containerStyle}>{renderIcons()}</div>;
};

export default Footer;
