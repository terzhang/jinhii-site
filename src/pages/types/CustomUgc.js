/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import ImageGridGallery from '../../components/ImageGridGallery';
import LabelledList from '../../components/LabelledList';
import { ugcs } from '../../assets/customUgc/index';
import Fieldset from '../../components/Fieldset';

const CustomUgc = () => {
  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  const ugcGalleryStyle = {
    // style its inner anchor tags
    a: {
      display: 'flex',
      flexGrow: '1',
      flexShrink: '1',
      margin: '0.5rem'
    }
  };

  const ugcImageStyle = {
    // allow the image to flex bigger or smaller
    flexGrow: '1',
    flexShrink: '1',
    // free the width and height to be flexed
    width: 'auto',
    height: 'auto',
    // cap the height but not the width.
    maxHeight: '13vmin',
    // to prevent overflow
    maxWidth: '100%',
    objectFit: 'cover', // allow for width to grow
    borderRadius: '12rem' // very round
  };

  const ugcOptions = [
    { label: 'Tops/Bottoms', detail: '20-40 USD' },
    { label: 'Headgear/Gloves/Capes/Shoes', detail: '20-40 USD' },
    { label: 'Suits/Weapons', detail: '40-60 USD' },
    { label: 'Mounts', detail: '15-40 USD' },
    {
      label: 'Anything else',
      detail:
        'Please ask me if you are looking for something else and wish to discuss possibilities with me!'
    }
  ];

  const ugcFields = [
    { label: 'In-game Name(IGN)', placeholder: '' },
    { label: 'Server', placeholder: '(NA East/NA West/etc)' },
    {
      label: 'Type',
      placeholder: '(Top/Bottoms/Headgear/Gloves/Cape/Shoes/Suit/Weapon)'
    },
    { label: 'Gender (for template)', placeholder: '(M / F)' },
    { label: 'Design Details', placeholder: 'references helps a lot!' },
    { label: 'Any questions?', placeholder: '' }
  ];

  return (
    <div css={wrapperStyle}>
      <h2>✧ c u s t o m - u g c ✧</h2>
      <ImageGridGallery
        requireContext={ugcs}
        wrapperStyle={ugcGalleryStyle}
        imageStyle={ugcImageStyle}
      />
      <LabelledList listArray={ugcOptions} />
      <h2>✧ o r d e r - f o r m ✧</h2>
      <Fieldset formFields={ugcFields} legend={'✧ UGC Order Form ✧'} />
      <p>
        {`Contact me through one of the methods on the contacts page if you'd like to commission any UGC(s)!`}
        <br />
        {`Also feel free to join my `}
        <span href={'https://discord.gg/XEeuRwW'}>discord server</span>
        {`for my UGC listings and freebies!`}
      </p>
    </div>
  );
};

export default CustomUgc;
