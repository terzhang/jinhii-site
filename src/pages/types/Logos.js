/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import ImageGridGallery from '../../components/ImageGridGallery';
import LabelledList from '../../components/LabelledList';
import { logos } from '../../assets/logos/index';
import Fieldset from '../../components/Fieldset';

const Logos = ({ wrapperStyle }) => {
  wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    ...wrapperStyle
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
    'commercial . non-commercial'
    `
  };

  const commercialOptions = [
    { label: 'Simple ', detail: '50 USD' },
    { label: 'Complex ', detail: '75 USD' }
  ];

  const nonCommercialOptions = [
    { label: 'Simple ', detail: '100 USD' },
    { label: 'Complex ', detail: '200 USD' }
  ];

  const logoFields = [
    { label: 'username/alias', placeholder: '' },
    { label: 'style', placeholder: '(commercial/non-commercial)' },
    { label: 'type', placeholder: '(simple/complex)' },
    { label: 'detailed description', placeholder: '' },
    { label: 'important notes/questions', placeholder: '' }
  ];

  return (
    <div css={wrapperStyle}>
      <h2>✧ l o g o s ✧</h2>
      <ImageGridGallery
        imageStyle={{ objectFit: 'contain', height: '15vmin', width: '15vmin' }}
        requireContext={logos}
      />
      <div css={optionSectionStyle}>
        <LabelledList
          wrapperStyle={{ gridArea: 'commercial' }}
          listArray={commercialOptions}
          title={'✧ Non-Commercial ✧'}
        />
        <LabelledList
          wrapperStyle={{ gridArea: 'non-commercial' }}
          listArray={nonCommercialOptions}
          title={'✧ Commercial ✧'}
        />
      </div>
      <h2>✧ o r d e r - f o r m ✧</h2>
      <Fieldset formFields={logoFields} legend={'✧ Logo Order Form ✧'} />
      <p
        css={{ alignSelf: 'center' }}
      >{`Contact me through one of the methods on the contacts page
          if you'd like to commission a logo(s)!`}</p>
    </div>
  );
};

export default Logos;
