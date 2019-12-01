// replace all the non-numberic and non period characters
export const cssUnitToNumber = string => string.replace(/[^0-9.]/g, '');

export const urlFriendlyFormat = string => {
  // convert to lower case first, then...
  // replace all non-alpha-numeric characters and spaces with underscore
  // + means match multiple to avoid multiple underscore together
  return string.toLowerCase().replace(/[^A-Z0-9]+/gi, '_');
};

// inject the properties in an object into the target object and make it non-enumerable
// nonEnumObj === { name1: value1, name2: value2, ...}
export const addNonEnumProps = (targetObj, nonEnumObj) => {
  let newObj = {};
  for (const propName in nonEnumObj) {
    newObj[propName] = { enumerable: false, value: nonEnumObj[propName] };
  }
  Object.defineProperties(targetObj, newObj);
};
