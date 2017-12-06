'use strict';

import { optionsSchema } from './validators/utils';

/**
 * Convert Objects to query params
 *
 * @param {Object} obj
 * @returns String
 */
export function objectToQueryParams(obj) {
  const { error } = optionsSchema.validate(obj);
  if (error) {
    throw new Error(error);
  }

  return Object.keys(obj).reduce((queryString, key, currentIndex) => {
    const newString = currentIndex === 0 ? `${queryString}${key}=${obj[key]}` : `${queryString}&${key}=${obj[key]}`;
    return newString;
  }, '?');
}
