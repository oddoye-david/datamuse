'use strict';

const VALID_KEYS = {
  ml: 'string',
  sl: 'string',
  sp: 'string',
  rel_: 'string',
  rel_jja: 'string',
  rel_jjb: 'string',
  rel_syn: 'string',
  rel_trg: 'string',
  rel_ant: 'string',
  rel_spc: 'string',
  rel_gen: 'string',
  rel_com: 'string',
  rel_par: 'string',
  rel_bga: 'string',
  rel_bgb: 'string',
  rel_rhy: 'string',
  rel_nry: 'string',
  rel_hom: 'string',
  rel_cns: 'string',
  v: 'string',
  topics: 'string',
  lc: 'string',
  rc: 'string',
  max: 'number',
  md: 'string',
  qe: 'string',
};

export const options = {
  validate(opts) {
    const optsKeys = Object.keys(opts);
    if (!optsKeys.length) {
      return { error: new Error('Options must have at least one key') };
    }

    const invalidKeys = optsKeys.filter((optsKey) => {
      const validKeyType = VALID_KEYS[optsKey];
      if (validKeyType) {
        if (optsKey === 'md') {
          return !(['d', 'p', 's', 'r', 'f'].includes(opts[optsKey]));
        }
        return typeof opts[optsKey] !== validKeyType; // eslint-disable-line
      }

      return false;
    });
    if (invalidKeys.length) {
      return { error: new Error('Options includes invalid keys') };
    }

    return { error: null };
  },
};
