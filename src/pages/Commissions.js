/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import theme from '../theme';
import { cssUnitToNumber, urlFriendlyFormat } from '../helper/methods';
import * as Types from './types/index';

const typesObj = {
  sparkleIcons: {
    label: 'sparkle icons',
    render: <Types.SparkleIcons />
  },
  chibis: { label: 'chibis', render: <Types.Chibis /> },
  normal: { label: 'normal', render: <Types.Normal /> },
  pixels: { label: 'pixels', render: <Types.Pixels /> },
  emotesBadges: {
    label: 'emotes/badges',
    render: <Types.EmotesBadges />
  },
  kofiEmotes: {
    label: 'ko-fi emotes',
    render: <Types.KofiEmotes />
  },
  customUgc: { label: 'custom ugc', render: <Types.CustomUgc /> },
  customWallpaper: {
    label: 'custom wallpaper',
    render: <Types.CustomWallpaper />
  },
  logos: { label: 'logos', render: <Types.Logos /> }
};

const Commissions = ({ containerStyle }) => {
  const [commissionType, setCommissionType] = useState('default');

  containerStyle = {
    // position children
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.general.margin, // to indent texts a bit
    marginRight: theme.general.margin,
    height: '100%',
    ...containerStyle
  };

  const typesButtonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    li: {
      display: 'inline-flex',
      width: '100%',
      marginBottom: '1rem',
      justifyContent: 'center'
    },
    a: {
      ...theme.typesButton,
      ':hover': { ...theme.typesButton_hover },
      width: 'auto',
      height: String(cssUnitToNumber(theme.typesButton.fontSize) * 1.5) + 'rem',
      textAlign: 'center',
      alignItems: 'center'
    }
  };

  const handleTypeButtonClick = type => {
    setCommissionType(type);
  };

  // render an array of type buttons
  const renderTypeButtons = () => {
    let buttonArray = [];
    for (const propName in typesObj) {
      const { label } = typesObj[propName]; // get label from current property
      // push a new button to the array
      // its onClick will set commission state to the property name
      buttonArray.push(
        <li key={propName}>
          <a
            href={`#${urlFriendlyFormat(label)}`}
            onClick={() => handleTypeButtonClick(propName)}
          >
            {label}
          </a>
        </li>
      );
    }
    return (
      <>
        <h2>✧ t y p e s ✧</h2>
        <ul css={typesButtonContainerStyle}>{buttonArray}</ul>
      </>
    );
  };

  // render a commission type depending on state: commissionType
  const renderCommissionType = () => {
    if (commissionType === 'default') {
      return renderTypeButtons();
    } else if (typesObj.hasOwnProperty(commissionType)) {
      return typesObj[commissionType].render; // ! lesson: variable -> bracket notation
    } else {
      console.log('Nothing rendered');
    }
  };

  return (
    <div css={containerStyle}>
      <h2 css={{ textAlign: 'center' }}>✧ c o m m i s s i o n s ✧</h2>
      <p css={{ textAlign: 'center' }}>
        <strong>
          {`If you haven't yet, please read my `}
          <a href='#tos'>Terms of Service</a>
          {` before requesting a commission!`}
        </strong>
      </p>
      <br />
      <h2 css={{ textAlign: 'center' }}>✧ d o ' s - a n d - d o n ' t s ✧</h2>
      <p css={{ textAlign: 'start' }}>
        <span role='img' aria-label='check-mark'>
          ✔️
        </span>
        {` Humans, Human-faced anthros, Animal/creature-like characters, Young
        characters, Cute characters, Mild NSFW (may require extra fee)`}
        <br />
        <br />
        <span role='img' aria-label='cross-mark'>
          ❌
        </span>
        {` Muzzled Anthros/Furries, Certain non-humanoid characters, Very old
        characters, Extreme NSFW, Extreme gore/violence, Full armor, Mecha,
        Extremely detailed weapons`}
        <br />
        <br />
        <em>
          {`Some things may be discussed and negotiated for the right price.
          Please ask me if you are unsure or have anything in mind that isn't
          listed!`}
        </em>
      </p>
      {renderCommissionType(commissionType)}
    </div>
  );
};

export default Commissions;
