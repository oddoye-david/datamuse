import { wordsOptionsValidator } from '../validators/words';
import { sugOptionsValidator } from '../validators/sug';

const data = [
  {
    word: 'foo',
    score: 42,
  },
  {
    word: 'fizz',
    score: 24,
  },
];


const doRequest = (endpoint, optionsValidator, opts) => {
  const { error } = optionsValidator.validate(opts);
  if (error) {
    throw new Error(error);
  }

  return Promise.resolve(data);
};


export async function words(opts) {
  const results = await doRequest('words', wordsOptionsValidator, opts);

  return results;
}

export async function sug(opts) {
  const results = await doRequest('sug', sugOptionsValidator, opts);

  return results;
}
