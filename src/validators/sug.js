'use strict';

const VALID_KEYS = {
  s: 'string',
  v: 'string',
  max: 'number',
};

export const sugOptionsValidator = {
  validate(opts) {
    const optsKeys = Object.keys(opts);
    if (!optsKeys.length) {
      return { error: new Error('Options must have at least one key') };
    }

    const invalidKeys = optsKeys.filter((optsKey) => {
      const validKeyType = VALID_KEYS[optsKey];
      if (validKeyType) {
        return typeof opts[optsKey] !== validKeyType; // eslint-disable-line
      }
      return true;
    });
    if (invalidKeys.length) {
      return { error: new Error('Options includes invalid keys') };
    }

    return { error: null };
  },
};
