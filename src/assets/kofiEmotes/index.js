export const sipEmotes = require.context(
  './sipEmotes',
  false,
  /\.(png|jpe?g|svg)$/
);
export const bases = require.context('./bases', false, /\.(png|jpe?g|svg)$/);
