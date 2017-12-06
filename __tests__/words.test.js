'use strict';

import toBeType from 'jest-tobetype';
import { words } from '../src';

expect.extend(toBeType);


describe('#Words tests (promise)', () => {
  it('Should throw exception if no options', async () => {
    try {
      await words();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it('Should throw exception if invalid option(s)', async () => {
    try {
      await words({
        foo: 'bar',
      });
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it('Should throw exception if option value isn\'t a string', async () => {
    try {
      await words({
        ml: 42,
      });
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it('Should not throw exception if options are valid', async () => {
    try {
      await words({
        ml: 'duck',
        sp: 'b*',
      });
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it('Should return a promise', () => {
    const promise = words({
      ml: 'promise',
    });
    expect(promise instanceof Promise).toBe(true);
  });

  it('Should return an array', async () => {
    const data = await words({
      ml: 'promise',
    });

    expect(Array.isArray(data)).toBe(true);
  });
});
