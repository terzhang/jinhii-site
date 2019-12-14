/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from '@reach/router';
import React, { useState, lazy } from 'react';
import theme from '../theme';
import { cssUnitToNumber, urlFriendlyFormat } from '../helper/methods';
// lazy import commission types
const typesPath = './types/';
const SparkleIcons = lazy(() => import(typesPath + 'SparkleIcons'));
const Chibis = lazy(() => import(typesPath + 'Chibis'));
const Normal = lazy(() => import(typesPath + 'Normal'));
const Pixels = lazy(() => import(typesPath + 'Pixels'));
const EmotesBadges = lazy(() => import(typesPath + 'EmotesBadges'));
const KofiEmotes = lazy(() => import(typesPath + 'KofiEmotes'));
const CustomUgc = lazy(() => import(typesPath + 'CustomUgc'));
const CustomWallpaper = lazy(() => import(typesPath + 'CustomWallpaper'));
const Logos = lazy(() => import(typesPath + 'Logos'));

const typesObj = {
  sparkleIcons: {
    label: 'sparkle icons',
    render: <SparkleIcons />
  },
  chibis: { label: 'chibis', render: <Chibis /> },
  normal: { label: 'normal', render: <Normal /> },
  pixels: { label: 'pixels', render: <Pixels /> },
  emotesBadges: {
    label: 'emotes/badges',
    render: <EmotesBadges />
  },
  kofiEmotes: {
    label: 'ko-fi emotes',
    render: <KofiEmotes />
  },
  customUgc: { label: 'custom ugc', render: <CustomUgc /> },
  customWallpaper: {
    label: 'custom wallpaper',
    render: <CustomWallpaper />
  },
  logos: { label: 'logos', render: <Logos /> }
};

const Commissions = ({ containerStyle }) => {
  const [commissionType, setCommissionType] = useState('default');

  containerStyle = {
    // position children
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    ...containerStyle
  };

  const buttonListStyle = {
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
      // height and width decided by font size and padding
      width: 'auto',
      height: 'auto',
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
        <ul css={buttonListStyle}>{buttonArray}</ul>
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
          {/* remember the slash or else it's relative navigation */}
          <Link to='/tos' css={{ fontWeight: 'bolder' }}>
            Terms of Service
          </Link>
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
