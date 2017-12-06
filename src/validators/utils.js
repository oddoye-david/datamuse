'use strict';

export const options = {
  validate(opts = {}) {
    if (opts !== null && typeof opts === 'object') {
      return Object.keys(opts).length ? { error: null } : { error: new Error('Invalid options') };
    }

    return { error: new Error('Invalid options') };
  },
};
