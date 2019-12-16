/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Link } from '@reach/router';
import theme from '../theme';

// each property is the url param for commissions (ie commissions/spark_icons)
const typesObj = {
  sparkle_icons: {
    label: 'sparkle icons'
  },
  chibis: { label: 'chibis' },
  normal: { label: 'normal' },
  pixels: { label: 'pixels' },
  emotes_badges: {
    label: 'emotes/badges'
  },
  kofi_emotes: {
    label: 'ko-fi emotes'
  },
  custom_ugc: {
    label: 'custom ugc'
  },
  custom_wallpaper: {
    label: 'custom wallpaper'
  },
  logos: { label: 'logos' }
};

// render an array of type buttons
const TypeButtons = () => {
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

  const buttons = React.useMemo(() => {
    let buttonArray = [];
    for (const propName in typesObj) {
      const { label } = typesObj[propName]; // get label from current property
      // push a new button to the array
      // its onClick will set commission state to the property name
      buttonArray.push(
        <li key={propName}>
          <Link to={`${propName}`}>{label}</Link>
        </li>
      );
    }
    return buttonArray;
  }, []);

  return (
    <>
      <h2>✧ t y p e s ✧</h2>
      <ul css={buttonListStyle}>{buttons}</ul>
    </>
  );
};

export default TypeButtons;
