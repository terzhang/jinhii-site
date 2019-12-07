/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

const LabelledList = ({
  listArray,
  mainLabel = true,
  labelStyle = {},
  subLabelStyle = {},
  detailContainerStyle = {},
  containerStyle = {},
  listContainerStyle = {},
  detailListContainerStyle = {}
}) => {
  // wraps all the given lists
  containerStyle = {
    // style self
    width: '100%',
    maxHeight: '100%',
    // style children
    display: 'flex',
    flexDirection: 'column',
    // margin for list childrens.. kind of hacky
    '& div': { marginTop: '0.25rem', marginBottom: '0.25rem' },
    ...containerStyle
  };

  // wraps both each label and detail pairs inside the list
  listContainerStyle = {
    // style self
    width: '100%',
    maxHeight: '100%',
    // style content
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    // needs double quote and each string in the quote tag is a row
    gridTemplateAreas: `'labels details'`,
    gridGap: '2%',
    ...listContainerStyle
  };

  // wraps the whole detail section (grid area: details in listContainer)
  // override some of its parent container's style (if needed)
  detailContainerStyle = {
    ...containerStyle,
    // acts like an inner container
    // ! missed the 's' again
    gridArea: 'details',
    // inner list containers pushed down as a visual indicator being a child
    paddingTop: '1rem',
    ...detailContainerStyle
  };

  // wraps each nested label and detail pairs inside detailContainer
  // override some of its parent listContainer's style to become skinnier
  detailListContainerStyle = {
    ...listContainerStyle,
    // shrink width by changing column template
    gridTemplateColumns: 'max-content max-content'
  };

  // the actual line of text inside the detailContainer
  const detailStyle = {
    // details stick to the left end
    alignItems: 'start'
  };

  // wraps the whole label section (left in listContainer)
  labelStyle = {
    //! stop forgetting the 's'es in words
    gridArea: 'labels',
    // !having full width disallows alignments
    /* width: '100%', */
    // being a css grid item -> justify-self to align horizontally
    justifySelf: 'end',
    textAlign: 'end',
    // align-self to align vertically
    alignSelf: 'start',
    // scale line-height to 1 removes line spaces above and below
    // since label are always single lined, so this aligns itself to the top truly
    lineHeight: '1',
    maxHeight: '100%',
    ...labelStyle
  };

  // inner label that wraps nested labels inside a detailContainer
  subLabelStyle = {
    ...labelStyle,
    textAlign: 'start',
    ...subLabelStyle
  };

  const renderLabel = text => {
    if (mainLabel) {
      return <h3 css={labelStyle}>{text}</h3>;
    } else {
      return <h4 css={subLabelStyle}>{text}</h4>;
    }
  };

  const renderDetail = detail => {
    // recursively render if detail is an array, otherwise, render a line of text
    if (detail && typeof detail === 'string') {
      return <p>{detail}</p>;
    } else if (Array.isArray(detail)) {
      // nested labels aren't main labels anymore
      return (
        <LabelledList
          listArray={detail}
          mainLabel={false}
          // nested labelledlist's container is a child of this listContainer
          containerStyle={detailContainerStyle}
          // inner listContainer needs to have the list skinnier
          listContainerStyle={detailListContainerStyle}
        />
      );
    } else if (detail === null) {
      return <p>{`N/A`}</p>;
    }
  };

  // listArray<Array> = [ list<Object>... ]
  // listObj<Object> = { label<any>: labelString<String>, detail<any>: detailString<String> || listArray<Array> }
  const renderArrayObj = obj => {
    // obj is a string simply render the text
    if (obj && typeof obj === 'string') {
      return (
        <div css={listContainerStyle} key={obj}>
          <p>{obj}</p>
        </div>
      );
    } else if (typeof obj === 'object') {
      // give it a label too if it's an object
      const { label, detail } = obj;
      return (
        <div css={listContainerStyle} key={label}>
          {renderLabel(label)}
          {renderDetail(detail)}
        </div>
      );
    }
  };

  return (
    <div css={{ ...containerStyle, p: detailStyle }}>
      {listArray.map(obj => renderArrayObj(obj))}
    </div>
  );
};

export default LabelledList;
