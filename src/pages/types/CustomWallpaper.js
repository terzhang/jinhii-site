/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import ImageGridGallery from '../../components/ImageGridGallery';
import LabelledList from '../../components/LabelledList';
import { wallpapers } from '../../assets/customWallpaper/index';
import Fieldset from '../../components/Fieldset';

const CustomWallpaper = ({ wrapperStyle }) => {
  wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    ...wrapperStyle
  };

  const galleryImageStyle = {
    width: 'auto',
    height: '100%',
    maxWidth: '30vmin',
    maxHeight: 'unset'
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
    'phone or mixed'
    `
  };

  const phoneWallpaperOptions = [
    { label: 'Full size', detail: '1920 x 1080 px' },
    { label: 'Simple Flat Color/Shading', detail: '30 USD' },
    { label: 'Semi-detailed/Fully shaded', detail: '45USD' }
  ];

  const mixedDesignOptions = [
    'Will receive up to 4 free color edits/versions',
    'I can do OCs, fanart, and cute animals/etc!',
    'Please have a concept/idea in mind when ordering!'
  ];

  const wallpaperFields = [
    { label: 'username/alias', placeholder: '' },
    { label: 'style', placeholder: 'custom wallpaper' },
    { label: 'type', placeholder: '(simple flat color|fully shaded)' },
    { label: 'character ref', placeholder: '(if needed)' },
    { label: 'Theme/Concept', placeholder: '(be as specific as possible!)' },
    { label: 'BG', placeholder: '(simple and slightly detailed backgrounds)' },
    { label: 'important notes/questions', placeholder: '' }
  ];

  return (
    <div css={wrapperStyle}>
      <h2>✧ c u s t o m - w a l l p a p e r ✧</h2>
      <ImageGridGallery
        imageStyle={galleryImageStyle}
        requireContext={wallpapers}
      />
      {/* options */}
      <div css={optionSectionStyle}>
        <LabelledList
          wrapperStyle={{ gridArea: 'phone' }}
          listContainerStyle={{ justifyContent: 'space-around' }}
          listArray={phoneWallpaperOptions}
          title={'✧ Custom Phone Wallpaper ✧'}
        />
        <LabelledList
          wrapperStyle={{ gridArea: 'mixed', padding: '1rem' }}
          listArray={mixedDesignOptions}
          title={'✧ Simple-semi-detailed designs'}
        />
        {/* wallpaper form */}
      </div>
      <h2>✧ o r d e r - f o r m ✧</h2>
      <Fieldset
        formFields={wallpaperFields}
        legend={'✧ Custom Wallpaper Order Form ✧'}
      />
      <p
        css={{ alignSelf: 'center' }}
      >{`Contact me through one of the methods on the contacts page
         if you'd like to commission wallpaper(s)!`}</p>
    </div>
  );
};

export default CustomWallpaper;
