let hadExports = true;
const isObject = x => typeof x === 'object' && x !== null;
if(!isObject(globalThis.exports)){
  hadExports = false;
  globalThis.exports = Object(globalThis.exports);
}
await import('./index.js');
const module = exports;
if(!hadExports)delete globalThis.exports;
export const cookieStore = module.cookieStore;
export const CookieStore = module.CookieStore;
export const CookieChangeEvent = module.CookieChangeEvent;
export const document = module.document;
export default module;