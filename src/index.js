'use strict';

import axios from 'axios';
import { optionsSchema } from './validators/words';
import { objectToQueryParams } from './utils';

const datamuseApi = axios.create({
  baseURL: 'https://api.datamuse.com',
});

/**
 * Returns a list of words (and multiword expressions) from a given
 * vocabulary that match a given set of constraints
 *
 * @param {Object} opts
 * @returns Array
 */
export async function words(opts) {
  const { error } = optionsSchema.validate(opts);
  if (error) {
    throw new Error(error);
  }

  const { data } = await datamuseApi.get(`/words${objectToQueryParams(opts)}`);

  return data;
}
