'use strict';

import { options } from './validators/utils';

export const objectToQueryParams = (obj = {}) => {
  const { error } = options.validate(obj);
  if (error) {
    throw new Error();
  }

  return Object.keys(obj).reduce((queryString, key, currentIndex) => {
    const newString = currentIndex === 0 ? `${queryString}${key}=${obj[key]}` : `${queryString}&${key}=${obj[key]}`;
    return newString;
  }, '?');
};
