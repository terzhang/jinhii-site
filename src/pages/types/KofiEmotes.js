/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import ImageGridGallery from '../../components/ImageGridGallery';
import LabelledList from '../../components/LabelledList';
import { sipEmotes, bases } from '../../assets/kofiEmotes/index';
import Fieldset from '../../components/Fieldset';

const KofiEmotes = ({ wrapperStyle }) => {
  wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    ...wrapperStyle
  };

  const galleryColumn = 4;

  const emoteWrapperStyle = {
    width: `calc(100% / ${galleryColumn})`,
    height: 'auto'
  };

  const baseImageStyle = {
    objectFit: 'contain'
  };

  const sipEmoteOptions = [
    { label: '1 emote', detail: '18 USD or 6 ko-fi' },
    {
      label: 'Extra variations (different eyes/drinks)',
      detail: '3 USD or 1 ko-fi each'
    }
  ];

  const sipEmoteFields = [
    { label: 'name/contact info', placeholder: '' },
    { label: 'type', placeholder: 'sip emote' },
    { label: 'Chara ref', placeholder: '[images]' },
    { label: 'eyes', placeholder: ' [1/2/3]' },
    { label: 'drinks', placeholder: '[mug/frappe/boba/juicebox]' },
    {
      label: 'details',
      placeholder: '[symbol/drink flavor or color/straw color/etc]'
    },
    { label: 'important notes/questions' }
  ];

  return (
    <div css={wrapperStyle}>
      <h2>✧ k o - f i - e m o t e s ✧</h2>
      <ImageGridGallery
        requireContext={sipEmotes}
        imageWrapperStyle={emoteWrapperStyle}
        imageStyle={{ objectFit: 'contain' }}
      />
      <LabelledList listArray={sipEmoteOptions} title={'✧ Sip Emotes ✧'} />
      <p css={{ alignSelf: 'center' }}>
        {`*Orders + payments for these can be made through my `}
        <span href={'https://ko-fi.com/A202O7L'}>ko-fi page!</span>
      </p>
      <br />
      <p>
        {`I can also accept payment through PayPal if you'd prefer.
      These are all on a pre-made base, hence the lower pricing than my normal emotes!
      You will receive all three twitch emote sizes and the original size(500x500px)`}
      </p>
      <h2>✧ b a s e - o p t i o n s ✧</h2>
      <h3>✧ e y e s ✧</h3>
      <img
        src={require('../../assets/kofiEmotes/bases/bases_eyes.png')}
        css={baseImageStyle}
        alt=''
      />
      <h3>✧ d r i n k s ✧</h3>
      <img
        src={require('../../assets/kofiEmotes/bases/bases_drinks.png')}
        css={baseImageStyle}
        alt=''
      />
      <h2>✧ o r d e r - f o r m s ✧</h2>
      <Fieldset
        formFields={sipEmoteFields}
        legend={'✧ Sip Emote Order Form ✧'}
      />
      <p>{`Contact me through one of the methods on the contacts page
      if you'd like to commission any sip emote(s) or have questions about anything!
      For these you may also order through a ko-fi donation and send the form(s) in your message <3`}</p>
    </div>
  );
};

export default KofiEmotes;
