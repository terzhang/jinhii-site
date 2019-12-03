/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import theme from '../../theme';
import RenderList from '../../components/RenderList';
import { iconBases, icons } from '../../assets/sparkle_icons/index';

const SparkleIcons = ({ containerStyle }) => {
  containerStyle = {
    width: '100%',
    height: 'fit-content',
    // container needs to flex to fit child contents
    display: 'flex',
    flexDirection: 'column',
    ...containerStyle
  };

  const galleryContainerStyle = {
    // style self
    display: 'grid',
    width: '1fr',
    height: '1fr',
    maxHeight: '100%',
    // style self
    gridTemplateColumns: `repeat(5, minmax(0, 1fr))`,
    gridTemplateRows: 'repeat(auto-fit, minmax(0, 1fr))',
    // for implicitly generated grids items
    gridAutoFlow: 'row',
    gridGap: '2%'
  };

  const galleryIconStyle = {
    backgroundColor: 'pink',
    borderRadius: '3rem',
    objectFit: 'cover',
    width: '100%',
    // so it doesn't overflow each grid item
    maxWidth: '100%',
    maxHeight: '100%',
    minWidth: '0'
    /* // space around
    margin: '1rem' */
  };

  const headingStyle = {
    ...theme.heading,
    textAlign: 'center'
  };

  const subheadingStyle = {
    ...theme.subheading,
    textAlign: 'center'
  };

  const optionSectionStyle = {
    // style self
    width: '100%',
    height: 'auto',
    // style content
    display: 'inline-grid',
    gridTemplateColumns: '1fr 5% 1fr',
    gridTemplateRows: 'max-content',
    gridTemplateAreas: `
    'option1 or option2'
    `
  };

  const optionsList = {
    singleIcons: [
      `✧ 20 USD per icon/character (includes all pre-made base options)`,
      `✧ +10USD for complex/detailed character designs`,
      `✧ +5-10USD for any customized requests!`
    ],
    iconSet: [
      `✧ 20USD for initial icon (includes all pre-made base options)`,
      `✧ +10USD for complex/detailed character designs`,
      `✧ +5-10USD for any customized requests`,
      `✧ +5USD per extra icon of the same character with different options (expressions, poses, etc)`
    ]
  };

  // style each option
  const optionContainerStyle = {
    display: 'flex',
    flexDirection: 'column', // top to bottom
    border: '2px solid pink',
    borderRadius: '2rem'
  };

  const listLabelStyle = {
    marginTop: '-1rem', // shift up to be on the border
    background: theme.content.backgroundColor, // match content background color
    alignSelf: 'center', // center itself in the cross axis,
    // horizontal padding to cut more border off
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem'
  };

  const baseOptions = [
    { label: '✧ e y e s ✧', alt: '' },
    { label: '✧ e y e b r o w s ✧', alt: '' },
    { label: '✧ m o u t h s ✧', alt: '' },
    { label: '✧ b l u s h e s ✧', alt: '' },
    { label: '✧ h a n d s ✧', alt: '' },
    { label: '✧ e x t r a s ✧', alt: '' },
    { label: '✧ f i l t e r s ✧', alt: '' }
  ];

  const renderGalleryIcons = () =>
    icons.keys().map((fileName, index) => {
      let src = require('../../assets/sparkle_icons/icons/' +
        fileName.slice(2));
      return (
        <a href={src} key={fileName}>
          <img src={src} alt='' css={galleryIconStyle} />
        </a>
      );
    });

  const baseSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 'fit-content'
  };

  const baseImageStyle = {
    width: '100%',
    height: 'auto'
  };

  const renderBaseOptions = () =>
    iconBases.keys().map((fileName, index) => {
      let src = require('../../assets/sparkle_icons/' + fileName.slice(2));
      return (
        <div css={baseSectionStyle} key={fileName}>
          <h3 css={subheadingStyle}>{baseOptions[index].label}</h3>
          <img src={src} css={baseImageStyle} alt={baseOptions[index].alt} />
        </div>
      );
    });

  return (
    <div css={containerStyle}>
      {/* gallery */}
      <h2 css={headingStyle}>✧ s p a r k l e - i c o n s ✧</h2>
      <div css={galleryContainerStyle}>{renderGalleryIcons()}</div>
      {/* options */}
      <div css={optionSectionStyle}>
        <RenderList
          listArray={optionsList['singleIcons']}
          label={'single icons'}
          labelStyle={listLabelStyle}
          containerStyle={{ gridArea: 'option1', ...optionContainerStyle }}
        />
        <span
          css={{ gridArea: 'or', alignSelf: 'center', textAlign: 'center' }}
        >
          OR
        </span>
        <RenderList
          listArray={optionsList['iconSet']}
          label={'icons set'}
          labelStyle={listLabelStyle}
          containerStyle={{ gridArea: 'option2', ...optionContainerStyle }}
        />
      </div>
      {/* base options */}
      <h2 css={headingStyle}>✧ b a s e - o p t i o n s ✧</h2>
      {renderBaseOptions()}
      {/* Order Form */}
      <h2 css={headingStyle}>✧ o r d e r - f o r m ✧</h2>
      <p css={{ display: 'grid', textAlign: 'center', width: '100%' }}>
        {`Please fill out a separate one for every icon!`}
        <span css={{ color: 'red' }}>{` * means it is required.`}</span>
        <br />
        {`The rest you can leave blank if you don't want anything for them`}
      </p>
      <h3 css={headingStyle}>✧ Sparkle Icon Order Form ✧</h3>
    </div>
  );
};

export default SparkleIcons;
