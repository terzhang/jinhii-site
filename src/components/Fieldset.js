/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import theme from '../theme';
import Form from './Form';

const Fieldset = ({
  formFields,
  legend,
  wrapperStyle,
  legendStyle,
  onSubmit
}) => {
  wrapperStyle = {
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: theme.general.color,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    ...wrapperStyle
  };

  legendStyle = {
    ...theme.subheading,
    textAlign: 'center',
    position: 'absolute',
    // shift it up relative to parent to sit on border
    top: `calc((-${theme.subheading.fontSize} / 2 ) - ${wrapperStyle.borderWidth})`,
    backgroundColor: theme.content.backgroundColor,
    alignSelf: 'center',
    ...legendStyle
  };

  return (
    <fieldset css={wrapperStyle}>
      <legend css={legendStyle}>{legend}</legend>
      {
        <Form
          inputList={formFields}
          onSubmit={fields => onSubmit(fields)}
          wrapperStyle={{ pointerEvents: 'auto' }}
        />
      }
    </fieldset>
  );
};

export default Fieldset;
