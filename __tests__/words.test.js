'use strict';

import toBeType from 'jest-tobetype';
import { words } from '../src/datamuse';

expect.extend(toBeType);

jest.mock('../src/datamuse.js');

describe('Words', () => {
  it('Should throw exception if no options', () => expect(words()).rejects.toBeDefined());

  it('Should throw exception if invalid option(s)', () =>
    expect(words({
      foo: 'bar',
    })).rejects.toBeDefined());

  it('Should not throw exception if options are valid', async () =>
    expect(words({
      ml: 'duck',
      sp: 'b*',
    })).resolves.toBeDefined());

  it('Should return a promise', () =>
    expect(words({
      ml: 'promise',
    })).toBeType('object'));

  it('Should return an array', () =>
    expect(words({
      ml: 'promise',
    })).resolves.toBeType('array'));
});
