/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import useInput from '../hooks/useInput';
import theme from '../theme';

const Form = ({ onSubmit, containerStyle, inputList }) => {
  const { value: fields, setValue: setFields, reset: resetFields } = useInput(
    {}
  );

  // form container styling
  containerStyle = {
    position: 'relative',
    width: '100%',
    height: 'fit-content',
    // inner grid
    display: 'grid',
    gridTemplateRows: `repeat(${inputList.length}, minmax(0, 1fr))`,
    gridTemplateColumns:
      '[outer-start] 1fr [button-start] 1fr [button-end] 1fr [outer-end]', // cause overflowing
    // estimated along with bar style's padding
    /* gridRowGap: '2%', */ gridColumnGap: '1%',
    pointerEvents: 'auto',
    p: {
      textAlign: 'end',
      justifySelf: 'end',
      alignSelf: 'center',
      gridColumn: '1/2'
    },
    ...containerStyle
  };

  // the inputs
  const inputStyle = {
    gridColumn: '2 / 3',
    /* gridColumn: 'input', */
    /* width: '100%',
    height: '100%', */
    maxHeight: 'max-content',
    // space outside border
    margin: '5%',
    // space inside border and around contents
    padding: '10px',
    background: 'transparent',
    border: `2px solid ${theme.general.color}`
  };

  // the submit button
  const buttonStyle = {
    gridRow: 'button',
    gridColumn: 'button',
    boxSizing: 'border-box',
    ...theme.button,
    ':hover': theme.button_hover
  };

  // render a list of inputs given an input list
  const renderInputs = list => {
    const array = list.map((key, index) => {
      let inputValue, inputLabel, placeHolder;
      if (typeof key === 'string') {
        // input value, value change func, input label
        inputValue = fields[key];
        inputLabel = key;
        placeHolder = key;
      } else {
        inputValue = fields[key.label];
        inputLabel = key.label;
        placeHolder = key.placeholder;
      }

      const onChange = event =>
        setFields({ ...fields, [key]: event.target.value });

      // generate inputs & bars via an array
      return (
        <React.Fragment key={inputLabel}>
          <p>{inputLabel}</p>
          <input
            type='text'
            value={inputValue}
            onChange={onChange}
            css={inputStyle}
            placeholder={placeHolder}
          />
        </React.Fragment>
      );
    });
    return array;
  };

  return (
    <form onSubmit={onSubmit(fields)} css={containerStyle}>
      {renderInputs(inputList)}
      <input type='submit' value='Submit' css={buttonStyle} />
    </form>
  );
};

export default Form;
