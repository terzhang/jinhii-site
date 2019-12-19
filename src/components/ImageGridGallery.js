/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useMemo } from 'react';

const ImageGridGallery = ({
  requireContext,
  mode = 'merge',
  imageLinks = null,
  gridSize = { width: '10vw', height: '10vw' },
  wrapperStyle,
  imageWrapperStyle,
  imageStyle
}) => {
  // using flexBox
  wrapperStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    ...wrapperStyle
  };

  // using css grid
  /* wrapperStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(${gridSize.width}, 1fr))`,
    // for implicitly generate new rows if overflow
    gridAutoFlow: 'row',
    gridAutoRows: `minmax(${gridSize.height}, 1fr)`, // assign implicit rows' dimensions
    // spacing between gallery items
    a: { margin: '10px' },
    ...wrapperStyle
  }; */

  imageStyle = {
    height: '100%',
    width: '100%',
    objectFit: 'none', // 'cover',
    objectPosition: 'center',
    maxWidth: '100%',
    maxHeight: '100%',
    padding: '10px',
    ...imageStyle
  };

  /* // display using cdn links
  const galleryByCdn = useCallback(
    () =>
      imageLinks.map(link => (
        <a href={link} css={imageWrapperStyle}>
          <img src={link} alt='' css={imageStyle} />
        </a>
      )),
    [imageLinks, imageStyle, imageWrapperStyle]
  ); */

  // display using require.context
  const galleryByContext = useMemo(
    () => context =>
      context
        .keys()
        .sort()
        .map(fileName => {
          let src = context(fileName);
          return (
            <a href={src} key={fileName} css={imageWrapperStyle}>
              <img src={src} alt='' css={imageStyle} />
            </a>
          );
        }),
    [imageStyle, imageWrapperStyle]
  );

  // reduce each context into one big gallery
  const mergeGalleries = useMemo(
    () => contexts => {
      const reducer = (pacMan, context) =>
        pacMan.concat(galleryByContext(context));
      return <div css={wrapperStyle}>{contexts.reduce(reducer, [])}</div>;
    },
    [galleryByContext, wrapperStyle]
  );

  // returns a list of galleries given each context
  const disjointGalleries = useMemo(
    () => contexts =>
      contexts.map(context => (
        <div css={wrapperStyle} key={context.id}>
          {galleryByContext(context)}
        </div>
      )),
    [galleryByContext, wrapperStyle]
  );

  const gallery = useMemo(() => {
    let newGallery;
    // check if require context is an array
    if (Array.isArray(requireContext)) {
      newGallery =
        mode === 'merge'
          ? mergeGalleries(requireContext)
          : disjointGalleries(requireContext);
    } else {
      // just one context, set the gallery
      newGallery = (
        <div css={wrapperStyle}>{galleryByContext(requireContext)}</div>
      );
    }
    return newGallery;
  }, [
    galleryByContext,
    disjointGalleries,
    mergeGalleries,
    mode,
    requireContext,
    wrapperStyle
  ]);

  return gallery;
};

export default ImageGridGallery;
