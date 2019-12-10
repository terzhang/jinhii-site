/** @jsx jsx */
import { jsx } from '@emotion/core';

const ImageGridGallery = ({
  requireContext,
  imageLinks = null,
  gridSize = { width: '10vw', height: '10vw' },
  wrapperStyle,
  imageStyle
}) => {
  // using flexbox
  wrapperStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    a: { margin: '10px' },
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
    ...imageStyle
  };

  // display using require.context
  const galleryByContext = () =>
    requireContext.keys().map(fileName => {
      let src = requireContext(fileName);
      return (
        <a href={src} key={fileName}>
          <img src={src} alt='' css={imageStyle} />
        </a>
      );
    });

  // display using cdn links
  const galleryByCdn = () =>
    imageLinks.map(link => (
      <a href={link}>
        <img src={link} alt='' css={imageStyle} />
      </a>
    ));

  return (
    <div css={wrapperStyle}>
      {requireContext ? galleryByContext() : galleryByCdn()}
    </div>
  );
};

export default ImageGridGallery;
