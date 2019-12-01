import React, { useState, useRef } from 'react';

const useTextCopy = (input = false) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const textAreaRef = useRef(null);

  // copying from input elements
  if (input) {
    textAreaRef.current.select();
    document.execCommand('copy');
    setCopySuccess(true);
  }

  // copying from non-input elements
  const copyToClipboard = e => {
    if (document.selection) {
      let range = document.body.createTextRange();
      range.moveToElementText(textAreaRef.current);
      range.select().createTextRange();
      document.execCommand('copy');
      setCopySuccess(true);
    } else if (window.getSelection) {
      // select the text area and copy
      let range = document.createRange(); // create selection range
      range.selectNode(textAreaRef.current); // have the selection range be on ref node
      window.getSelection().addRange(range); // select the range
      document.execCommand('copy'); // copy
      window.getSelection().removeAllRanges(); // remove the range selection
      setCopySuccess(true);
    }
  };

  // export the ref to hook, function to execute, and whether it succeeded
  return { textAreaRef, copyToClipboard, copySuccess };
};

export default useTextCopy;
