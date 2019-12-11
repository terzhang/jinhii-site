/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import theme from '../../theme';
import RenderList from '../../components/RenderList';
import { iconBases, icons } from '../../assets/sparkle_icons/index';
import Fieldset from '../../components/Fieldset';
import ImageGridGallery from '../../components/ImageGridGallery';

const SparkleIcons = ({ containerStyle }) => {
  const [totalPrice, setTotalPrice] = React.useState(0);

  containerStyle = {
    width: '100%',
    height: 'fit-content',
    // container needs to flex to fit child contents
    display: 'flex',
    flexDirection: 'column',
    ...containerStyle
  };

  const galleryIconStyle = {
    width: '15vmin',
    height: 'auto',
    borderRadius: '3rem',
    objectFit: 'container',
    // so it doesn't overflow each grid item
    maxWidth: '100%',
    maxHeight: '100%',
    minWidth: '0'
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

  const renderBaseOptions = iconBases =>
    iconBases.keys().map((fileName, index) => {
      let src = iconBases(fileName);
      return (
        <div css={baseSectionStyle} key={fileName}>
          <h3 css={theme.subheading}>{baseOptions[index].label}</h3>
          <img src={src} css={baseImageStyle} alt={baseOptions[index].alt} />
        </div>
      );
    });

  const formFields = [
    { label: 'Name/Alias', placeholder: '(#/custom)' },
    { label: 'Character Ref(s)' },
    { label: 'Eyes', placeholder: '(#/custom)' },
    { label: 'Eyebrows', placeholder: '(#/custom)' },
    { label: 'Mouth', placeholder: '(#/none)' },
    { label: 'Blush', placeholder: '(#/custom)' },
    { label: 'Hands', placeholder: '(#/none/custom)' },
    { label: 'Extra', placeholder: '(#/none/custom)' },
    { label: 'Filter', placeholder: '(#/none/custom)' },
    {
      label: 'BG',
      placeholder:
        '(choose 1-2 colors or I will choose what I feel is suitable)'
    },
    { label: 'Any additional requests/questions?' }
  ];

  const handleSubmit = fields => {
    console.log(fields);
  };

  return (
    <div css={containerStyle}>
      {/* gallery */}
      <h2 css={theme.heading}>✧ s p a r k l e - i c o n s ✧</h2>
      <ImageGridGallery
        requireContext={icons}
        //wrapperStyle={galleryContainerStyle}
        imageStyle={galleryIconStyle}
      />
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
      <h2 css={theme.heading}>✧ b a s e - o p t i o n s ✧</h2>
      {renderBaseOptions(iconBases)}
      {/* Order Form */}
      <h2 css={theme.heading}>✧ o r d e r - f o r m ✧</h2>
      <p css={{ display: 'grid', textAlign: 'center', width: '100%' }}>
        {`Please fill out a separate one for every icon!`}
        <span css={{ color: 'red' }}>{` * means it is required.`}</span>
        <br />
        {`The rest you can leave blank if you don't want anything for them`}
      </p>
      {/* form field */}
      <Fieldset
        formFields={formFields}
        legend={'✧ Sparkle Icon Order Form ✧'}
        onSubmit={handleSubmit}
      />
      <p css={{ alignSelf: 'center', fontWeight: 'bold' }}>
        {`Total Price: ${totalPrice}`}
      </p>
    </div>
  );
};

export default SparkleIcons;
