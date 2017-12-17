'use strict';

import axios from 'axios';
import { wordsOptionsValidator } from './validators/words';
import { sugOptionsValidator } from './validators/sug';
import { objectToQueryParams } from './utils';

const datamuseApi = axios.create({
  baseURL: 'https://api.datamuse.com',
});

const doRequest = async (endpoint, optionsValidator, opts) => {
  const { error } = optionsValidator.validate(opts);
  if (error) {
    throw new Error(error);
  }

  const { data } = await datamuseApi.get(`/${endpoint}${objectToQueryParams(opts)}`);

  return data;
};

/**
 * Returns a list of words (and multiword expressions) from a given
 * vocabulary that match a given set of constraints
 *
 * @param {Object} opts
 * @returns Array
 */
export async function words(opts) {
  const results = await doRequest('words', wordsOptionsValidator, opts);

  return results;
}

/**
 * Provides word suggestions given a partially-entered query.
 * The suggestions perform live spelling correction and intelligently
 * fall back to choices that are phonetically or semantically similar when
 * an exact prefix match can't be found.
 *
 * @param {Object} opts
 * @returns Array
 */
export async function sug(opts) {
  const results = await doRequest('sug', sugOptionsValidator, opts);

  return results;
}
