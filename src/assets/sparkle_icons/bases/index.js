// create a context for the files in directory selected by RegEx
const iconBases = require.context('./', false, /\.(png|jpe?g|svg)$/);

export default iconBases;
