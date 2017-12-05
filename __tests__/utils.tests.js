'use strict';

import { objectToQueryParams } from '../src/utils';

describe('#objectToQueryParams', () => {
  it('Should throw if no function params', () => {
    expect(() => objectToQueryParams()).toThrow();
  });

  it('Should throw if non object function param', () => {
    expect(() => objectToQueryParams('foo')).toThrow();
  });

  it('Should throw if empty object as function params', () => {
    expect(() => objectToQueryParams({})).toThrow();
  });

  it('Should return valid query string given simple object', () => {
    const correctQueryString = '?foo=bar';
    const queryString = objectToQueryParams({ foo: 'bar' });
    expect(queryString).toBe(correctQueryString);
  });

  it('Should return valid query string given complex object', () => {
    const correctQueryString = '?foo=bar&fizz=buzz';
    const queryString = objectToQueryParams({ foo: 'bar', fizz: 'buzz' });
    expect(queryString).toBe(correctQueryString);
  });
});
