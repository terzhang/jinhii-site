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
      '[outer-start] 1fr [button-start] 1fr [button-end] 1fr [outer-end]',
    // estimated along with bar style's padding
    gridRowGap: '2%',
    gridColumnGap: '1%',
    pointerEvents: 'auto',
    p: {
      textAlign: 'end',
      gridColumn: '1/2'
    },
    ...containerStyle
  };

  // each input bar
  const barStyle = {
    // style self
    gridColumn: '2 / 3',
    margin: '5%',
    // style content
    display: 'inline-grid',
    gridTemplateColumns: '[input-start] 1fr [input-end]',
    height: '100%',
    width: '100%',
    boxSizing: 'border-box',
    border: `2px solid ${theme.general.color}`,
    ...theme.input
  };

  // the inputs
  const inputStyle = {
    gridColumn: 'input',
    width: '100%',
    height: '100%',
    background: 'transparent',
    border: 'none'
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
          <div css={{ ...barStyle }}>
            <input
              type='text'
              value={inputValue}
              onChange={onChange}
              css={inputStyle}
              placeholder={placeHolder}
            />
          </div>
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
