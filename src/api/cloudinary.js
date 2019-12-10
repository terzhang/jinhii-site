const api = 'https://res.cloudinary.com/diwkn7amg/';

// path is the absolute path of the image within cloudinary (ie jinhii-site/sparkle-icons/bases)
export const tagJsonLink = path => api + 'image/list/' + path + '.json';

// path is the absolute path of the image within cloudinary media library
export const imageLink = ({
  type = 'upload',
  version = null,
  path,
  fileName = null,
  format = 'png'
}) =>
  api +
  'image/' +
  type +
  '/' +
  // version is given -> 'version/', else -> ''
  (version ? `v${version}/` : '') +
  // path has '/' at end -> remove it
  (path.slice(-1) === '/' ? path.slice(0, -1) : path) +
  // fileName is gven -> '/fileName', else -> ''
  (fileName ? `/${fileName}` : '') +
  '.' +
  format;
