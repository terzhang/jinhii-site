/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import useInput from '../hooks/useInput';
import theme from '../theme';

const Form = ({ onSubmit, wrapperStyle, inputList }) => {
  const { value: fields, setValue: setFields, reset: resetFields } = useInput(
    {}
  );

  // form container styling
  wrapperStyle = {
    position: 'relative',
    width: '100%',
    height: 'fit-content',
    // padding top is great since label dips a bit
    paddingTop: '2rem',
    paddingBottom: '1rem',
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
    ...wrapperStyle
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

      // replace the state with a new state that's the old state spread...
      // with current key's label as the new key and the current input value as value
      const onChange = event =>
        setFields({ ...fields, [key.label]: event.target.value });

      // generate inputs & bars via an array
      return (
        <React.Fragment key={inputLabel}>
          <p>{inputLabel}</p>
          <input
            type='text'
            // if initial value is undefined, component becomes uncontrolled
            value={inputValue || ''}
            onChange={onChange}
            css={inputStyle}
            placeholder={placeHolder}
          />
        </React.Fragment>
      );
    });
    return array;
  };

  const handleSubmit = () => {
    // only when user typed something
    // TODO: check if certain fields are filled properly
    if (Object.keys(fields).length > 0) {
      onSubmit(fields);
      // clear the fields
      resetFields();
    } else {
      // TODO: make this red and appearing between fields
      console.log('Please fill in the fields marked with *');
    }
  };

  return (
    <form onSubmit={handleSubmit} css={wrapperStyle}>
      {renderInputs(inputList)}
      <input type='submit' value='Submit' css={buttonStyle} />
    </form>
  );
};

export default Form;
