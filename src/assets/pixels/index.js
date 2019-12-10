// create a context for the files in directory selected by RegEx
const pixels = require.context('./', false, /\.(png|jpe?g|svg|gif)$/);

export default pixels;
