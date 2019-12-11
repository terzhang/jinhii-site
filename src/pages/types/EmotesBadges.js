/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { emotes, subBadges } from '../../assets/emoteBadges/index';
import ImageGridGallery from '../../components/ImageGridGallery';
import LabelledList from '../../components/LabelledList';
import Fieldset from '../../components/Fieldset';

const EmotesBadges = () => {
  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column'
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
    'twitch . discord'
    `
  };

  const optionStyle = {
    gridTemplateColumns: '1fr 1fr'
  };

  const twitchOptions = [
    { label: '1 emote', detail: '30 USD' },
    { label: '3 emote', detail: '75 USD (25 USD/emote)' },
    { label: '5 emote', detail: '100 USD (20 USD/emote)' }
  ];

  const discordOptions = [
    { label: '1 emote', detail: '30 USD' },
    { label: '3 emote', detail: '75 USD (25 USD/emote)' },
    { label: '5 emote', detail: '100 USD (20 USD/emote)' },
    { label: '25 emote', detail: '375 USD (15 USD/emote)' },
    { label: 'Animation', detail: '5 - 35 USD' }
  ];

  const twitchFormFields = [
    { label: 'username/alias:', placeholder: '' },
    { label: 'type', placeholder: 'Regular/Pixel Twitch emote' },
    { label: 'references', placeholder: '[images]' },
    {
      label: 'description',
      placeholder: 'clear description of what you want:'
    },
    { label: 'important notes/questions:', placeholder: '' }
  ];

  const discordFormFields = [
    { label: 'username/alias', placeholder: '' },
    { label: 'type', placeholder: 'discord emote' },
    { label: 'references', placeholder: '[images]' },
    {
      label: 'description',
      placeholder: 'clear description of what you want:'
    },
    { label: 'important notes/questions:', placeholder: '' }
  ];

  const subBadgeOptions = [
    { label: 'Every unique badge', detail: '25 USD' },
    { label: '+ extra with same base', detail: '10 USD' }
  ];

  const subBadgeFields = [
    { label: 'username/alias', placeholder: '' },
    { label: 'type', placeholder: ' regular/pixel sub/bit badges' },
    { label: 'references', placeholder: '[images]' },
    {
      label: 'description',
      placeholder: 'clear description of what you want:'
    },
    { label: 'important notes/questions:', placeholder: '' }
  ];

  return (
    <div css={wrapperStyle}>
      {/* emotes */}
      <h2>✧ t w i t c h / d i s c o r d - e m o t e s ✧</h2>
      <ImageGridGallery requireContext={emotes} />
      {/* twitch and discord emotes options */}
      <div css={optionSectionStyle}>
        <LabelledList
          containerStyle={{ gridArea: 'twitch' }}
          listStyle={optionStyle}
          listArray={twitchOptions}
          title={'✧ Twitch Emotes ✧'}
        />
        <LabelledList
          containerStyle={{ gridArea: 'discord' }}
          listStyle={optionStyle}
          listArray={discordOptions}
          title={'✧ Discord Emotes ✧'}
        />
      </div>
      {/* twitch and discord emotes forms */}
      <h2>✧ o r d e r - f o r m s ✧</h2>
      <Fieldset
        formFields={twitchFormFields}
        legend={'✧ Twitch Emote Order Form ✧'}
      />
      <Fieldset
        formFields={discordFormFields}
        legend={'✧ Discord Emote Order Form ✧'}
      />
      {/* sub badges */}
      <h2>✧ t w i t c h - s u b/b i t - b a d g e s ✧</h2>
      <ImageGridGallery requireContext={subBadges} />
      {/* sub badges options */}
      <LabelledList
        listStyle={optionStyle}
        listArray={subBadgeOptions}
        title={'✧ Sub Badges ✧'}
      />
      <p
        css={{ justifySelf: 'center' }}
      >{`*Please note that these are extremely tiny,
        and highly detailed designs will not look good!
        Simple designs work best`}</p>
      {/* sub badges form */}
      <h2>✧ o r d e r - f o r m ✧</h2>
      <Fieldset
        formFields={subBadgeFields}
        legend={'✧ Sub/Bit Badge Order Form ✧'}
      />
    </div>
  );
};

export default EmotesBadges;
