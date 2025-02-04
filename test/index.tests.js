/* global expect */

import chai from 'chai';
const {expect} = chai;
import mocha from 'mocha';
const {describe,it,beforeEach,afterEach} = mocha;
import {cookieStore, CookieStore, CookieChangeEvent, document} from '../dist/index.js'

globalThis.cookieStore = cookieStore;
globalThis.CookieStore = CookieStore;
globalThis.CookieChangeEvent = CookieChangeEvent;
globalThis.document = document;

describe('Cookie Store', () => {
  beforeEach(() => {
    Object.defineProperty(document, 'cookie', {
      value: '',
      writable: true,
    });
  });
  afterEach(() => {
    document.cookie = '';
  });

  it('is a class, instanceof CookieStore', () => {
    expect(globalThis.cookieStore).to.be.instanceof(globalThis.CookieStore);
  });

  it('is an instanceof EventTarget', () => {
    expect(globalThis.cookieStore).to.be.instanceof(globalThis.EventTarget);
  });

  it('has a toStringTag of CookieStore', () => {
    expect(globalThis.cookieStore[Symbol.toStringTag]).to.equal('CookieStore');
  });

  it('cannot be constructed', () => {
    expect(() => new globalThis.CookieStore()).to.throw(TypeError, 'Illegal');
  });

  describe('get', () => {
    it('returns cookie matching supplied name', async () => {
      const foo = 'foo';
      const bar = 'bar';
      document.cookie = `${foo}=${bar}`;
      const result = await globalThis.cookieStore.get(foo);
      expect(result).to.deep.equal({ name: foo, value: bar });
    });
    it('returns undefined when no cookie is found', async () => {
      const foo = 'foo';
      const bar = 'bar';
      document.cookie = `${foo}=${bar}`;
      const result = await globalThis.cookieStore.get(bar);
      expect(result).to.deep.equal(undefined);
    });
  });
  describe('getAll', () => {
    it('returns an array with all cookies if no name is provided', async () => {
      const foo = 'foo';
      const bar = 'bar';
      const baz = 'baz';
      document.cookie = `${foo}=${bar}; ${bar}=${baz}`;
      const result = await globalThis.cookieStore.getAll();
      expect(result).to.deep.equal([
        { name: foo, value: bar },
        { name: bar, value: baz },
      ]);
    });
    it('returns an array with cookies that match name', async () => {
      const foo = 'foo';
      const bar = 'bar';
      const baz = 'baz';
      document.cookie = `${foo}=${bar}; ${bar}=${baz}`;
      const result = await globalThis.cookieStore.getAll(bar);
      expect(result).to.deep.equal([{ name: bar, value: baz }]);
    });
    it('returns an empty when no matching cookies are found', async () => {
      const foo = 'foo';
      const bar = 'bar';
      const baz = 'baz';
      document.cookie = `${foo}=${bar}; ${bar}=${baz}`;
      const result = await globalThis.cookieStore.getAll(baz);
      expect(result).to.deep.equal([]);
    });
  });
});
