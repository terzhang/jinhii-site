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
    border: `5px solid ${theme.general.color}`,
    display: 'flex',
    flexDirection: 'column',
    ...wrapperStyle
  };

  legendStyle = {
    ...theme.subheading,
    textAlign: 'center',
    marginLeft: '35%',
    ...legendStyle
  };

  return (
    <fieldset css={wrapperStyle}>
      <legend css={legendStyle}>{legend}</legend>
      {
        <Form
          inputList={formFields}
          onSubmit={fields => onSubmit(fields)}
          containerStyle={{ pointerEvents: 'auto' }}
        />
      }
    </fieldset>
  );
};

export default Fieldset;
