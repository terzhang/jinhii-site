/** @jsx jsx */
import { jsx } from '@emotion/core';
import theme from '../../theme';
import React from 'react';
import { linedChibis, linelessChibis } from '../../assets/chibis/index';
import Form from '../../components/Form';
import RenderList from '../../components/RenderList';

const Chibis = ({ containerStyle }) => {
  containerStyle = {
    width: '100%',
    height: 'fit-content',
    // container needs to flex to fit child contents
    display: 'flex',
    flexDirection: 'column',
    ...containerStyle
  };

  const linedGallerySectionStyle = {
    // style self
    display: 'grid',
    maxHeight: '100%',
    // style self
    gridTemplateColumns: `repeat(3, minmax(0, 1fr))`,
    /* gridTemplateRows: 'repeat(auto-fit, minmax(0, 1fr))', */
    // for implicitly generated grids items
    gridAutoFlow: 'row',
    gridAutoRows: '1fr',
    gridGap: '2%',
    // * centering last child is hacky, it assumes there's 3 columns and last child is alone on a new row
    '& :last-child': { gridColumn: '2 / 3' }
  };

  const galleryImageStyle = {
    background: 'none',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    // so it doesn't overflow each grid item
    maxWidth: '100%',
    maxHeight: '100%',
    minWidth: '0'
  };

  const linelessGallerySectionStyle = {
    // style self
    display: 'grid',
    maxHeight: '100%',
    // style self
    gridTemplateColumns: `repeat(3, minmax(0, 1fr))`,
    gridTemplateRows: 'repeat(auto-fit, minmax(0, 1fr))',
    // for implicitly generated grids items
    gridAutoFlow: 'row',
    gridGap: '2%'
  };

  const renderGallery = chibis =>
    chibis.keys().map(fileName => {
      let src = chibis(fileName);
      return (
        <a href={src} key={fileName}>
          <img src={src} alt='' css={galleryImageStyle} />
        </a>
      );
    });

  const handleSubmit = fields => {
    console.log(fields);
  };

  const fieldList = [
    { label: 'username/alias', placeholder: '' },
    { label: 'type', placeholder: 'lined/lineless chibi' },
    { label: 'references', placeholder: '(images)' },
    { label: 'clear description of what you want', placeholder: '' },
    { label: 'important notes/questions', placeholder: '' }
  ];

  const lineChibiDetails = [
    'cleaned sketch - 35 USD per character',
    'thick lines - 65 USD per character',
    'thin lines - 70 USD per character',
    'transparent/simple pattern/color/gradient background - included',
    'semi-detailed background - 5-25 USD',
    'detailed background - 30+ USD'
  ];

  return (
    <div css={containerStyle}>
      <h2 css={{ ...theme.heading, textAlign: 'center' }}>✧ c h i b i s ✧</h2>
      {/* Lined chibi gallery */}
      <h3 css={{ ...theme.heading, textAlign: 'center' }}>✧ Lined Chibis ✧</h3>
      <div css={linedGallerySectionStyle}>{renderGallery(linedChibis)}</div>
      <RenderList listArray={lineChibiDetails} label={null} />
      <h3 css={{ ...theme.heading, textAlign: 'center' }}>
        ✧ Lineless Chibis ✧
      </h3>
      <div css={linelessGallerySectionStyle}>
        {renderGallery(linelessChibis)}
      </div>
      <h3>✧ o r d e r - f o r m ✧</h3>
      <Form
        inputList={fieldList}
        onSubmit={handleSubmit}
        containerStyle={{ pointerEvent: 'auto' }}
      />
    </div>
  );
};

export default Chibis;
