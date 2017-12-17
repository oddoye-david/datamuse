'use strict';

import toBeType from 'jest-tobetype';
import { sug } from '../src/datamuse';

expect.extend(toBeType);

jest.mock('../src/datamuse.js');

describe('Sug', () => {
  it('Should throw exception if no options', () => expect(sug()).rejects.toBeDefined());

  it('Should throw exception if invalid option(s)', () =>
    expect(sug({
      foo: 'bar',
    })).rejects.toBeDefined());

  it('Should not throw exception if options are valid', async () =>
    expect(sug({
      s: 'duck',
      max: 42,
    })).resolves.toBeDefined());

  it('Should return a promise', () =>
    expect(sug({
      s: 'promise',
    })).toBeType('object'));

  it('Should return an array', () =>
    expect(sug({
      s: 'promise',
    })).resolves.toBeType('array'));
});
