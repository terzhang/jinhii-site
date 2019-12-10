// create a context for the files in directory selected by RegEx
export const bigPixels = require.context(
  './big',
  false,
  /\.(png|jpe?g|svg|gif)$/
);
export const smallPixels = require.context(
  './small',
  false,
  /\.(png|jpe?g|svg|gif)$/
);
