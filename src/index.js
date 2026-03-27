"use strict";
var __extends = (this && this.__extends) || (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
      ({
          __proto__: []
        }
        instanceof Array && function(d, b) {
          d.__proto__ = b;
        }) ||
      function(d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __assign = (this && this.__assign) || function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new(P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = (this && this.__generator) || function(thisArg, body) {
  var _ = {
      label: 0,
      sent: function() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f, y, t, g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;

  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1], done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
var __spreadArrays = (this && this.__spreadArrays) || function() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
exports.__esModule = true;
exports.document = exports.CookieChangeEvent = exports.CookieStore = exports.cookieStore = void 0;
var decode = decodeURIComponent;
var pairSplitRegExp = /; */;
var quoteRegExp = /^[\s'"`]+|[\s'"`]+$/g;
// All the utils
var q = function(varFn) {
  try {
    return varFn === null || varFn === void 0 ? void 0 : varFn();
  } catch (e) {
    if (e.name != 'ReferenceError') {
      throw e;
    }
  }
};
var Q = function(varFn) {
  try {
    return varFn === null || varFn === void 0 ? void 0 : varFn();
  } catch (_a) {}
};
var G = (_e = (_d = (_c = (_b = (_a = q(function() {
    return globalThis;
  })) !== null && _a !== void 0 ? _a : q(function() {
    return self;
  })) !== null && _b !== void 0 ? _b :
  //@ts-ignore
  q(function() {
    return global;
  })) !== null && _c !== void 0 ? _c : q(function() {
  return window;
})) !== null && _d !== void 0 ? _d : this) !== null && _e !== void 0 ? _e : {};
for (var _i = 0, _o = ['globalThis', 'self', 'global']; _i < _o.length; _i++) {
  var x = _o[_i];
  G[x] = G;
}
(_f = G.WeakSet) !== null && _f !== void 0 ? _f : (G.WeakSet = G.Set);
(_g = G.WeakMap) !== null && _g !== void 0 ? _g : (G.WeakMap = G.Map);
var window = G;
var newQ = function() {
  var _a;
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var fn = (_a = args === null || args === void 0 ? void 0 : args.shift) === null || _a === void 0 ? void 0 : _a.call(args);
  return fn && new(fn.bind.apply(fn, __spreadArrays([void 0], args)))();
};
var instanceOf = function(x, y) {
  return !!Q(function() {
    return x instanceof y;
  });
};
var isIn = function(x, y) {
  return !!Q(function() {
    return x in y;
  });
};
var isString = function(x) {
  return typeof x === 'string' || instanceOf(x, String);
};
var isBoolean = function(x) {
  return typeof x === 'boolean' || instanceOf(x, Boolean);
};
var isNumber = function(x) {
  return typeof x === 'number' || instanceOf(x, Number);
};
var isNullish = function(x) {
  return x === null || x === undefined;
};
var isObject = function(x) {
  return typeof x === 'object' && !isNullish(x);
};
var document = (_j = (_h = G.document) !== null && _h !== void 0 ? _h : newQ(G.Document)) !== null && _j !== void 0 ? _j : new( /** @class */ (function() {
  function Document() {
    this.cookie = '';
  }
  return Document;
}()));
exports.document = document;
// Try decoding a string using a decoding function.
function tryDecode(str, decode) {
  try {
    return isBoolean(decode) ? decodeURIComponent(str) : decode(str);
  } catch (e) {
    return str;
  }
}
var CookieSameSite;
(function(CookieSameSite) {
  CookieSameSite["strict"] = "strict";
  CookieSameSite["lax"] = "lax";
  CookieSameSite["none"] = "none";
})(CookieSameSite || (CookieSameSite = {}));
/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 */
function parse(str, options) {
  var _a;
  if (options === void 0) {
    options = {};
  }
  if (!isString(str)) {
    throw new TypeError('argument str must be a string');
  }
  var obj = [];
  var opt = Object(options);
  var pairs = str.split(pairSplitRegExp);
  var dec = (_a = opt.decode) !== null && _a !== void 0 ? _a : decode;
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eqIdx = pair.indexOf('=');
    // skip things that don't look like key=value
    if (eqIdx < 0) {
      continue;
    }
    var key = pair.substr(0, eqIdx).trim();
    var val = pair.substr(++eqIdx, pair.length).trim();
    // quoted values
    val = val.replace(quoteRegExp, '');
    // only assign once
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (isNullish(obj[key])) {
      obj.push({
        name: key,
        value: tryDecode(val, dec)
      });
    }
  }
  return obj;
}
var CookieChangeEvent = /** @class */ (function(_super) {
  __extends(CookieChangeEvent, _super);

  function CookieChangeEvent(type, eventInitDict) {
    if (eventInitDict === void 0) {
      eventInitDict = {
        changed: [],
        deleted: []
      };
    }
    var _a, _b;
    var _this = _super.call(this, type, eventInitDict) || this;
    _this.changed = (_a = eventInitDict.changed) !== null && _a !== void 0 ? _a : [];
    _this.deleted = (_b = eventInitDict.deleted) !== null && _b !== void 0 ? _b : [];
    return _this;
  }
  return CookieChangeEvent;
}(Event));
exports.CookieChangeEvent = CookieChangeEvent;
var CookieStore = /** @class */ (function(_super) {
  __extends(CookieStore, _super);

  function CookieStore() {
    var _this = _super.call(this) || this;
    throw new TypeError('Illegal Constructor');
    return _this;
  }
  Object.defineProperty(CookieStore.prototype, Symbol.toStringTag, {
    get: function() {
      return 'CookieStore';
    },
    enumerable: false,
    configurable: true
  });
  CookieStore.prototype.get = function(init) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (isNullish(init)) {
              throw new TypeError('CookieStoreGetOptions must not be empty');
            } else if (init instanceof Object && !Object.keys(init).length) {
              throw new TypeError('CookieStoreGetOptions must not be empty');
            }
            return [4 /*yield*/ , this.getAll(init)];
          case 1:
            return [2 /*return*/ , (_a.sent())[0]];
        }
      });
    });
  };
  CookieStore.prototype.set = function(init, possibleValue) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    return __awaiter(this, void 0, void 0, function() {
      var item, cookieString, previousCookie, changed, deleted, _r, event_1;
      return __generator(this, function(_s) {
        switch (_s.label) {
          case 0:
            item = {
              name: '',
              value: '',
              path: '/',
              secure: false,
              sameSite: CookieSameSite.strict,
              expires: null,
              domain: null
            };
            if (isString(init)) {
              item.name = init;
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              item.value = possibleValue;
            } else {
              Object.assign(item, init);
              if (item.path && !item.path.startsWith('/')) {
                throw new TypeError('Cookie path must start with "/"');
              }
              if ((_b = (_a = item.domain) === null || _a === void 0 ? void 0 : _a.startsWith) === null || _b === void 0 ? void 0 : _b.call(_a, '.')) {
                throw new TypeError('Cookie domain cannot start with "."');
              }
              if (item.domain && item.domain !== ((_c = globalThis.location) === null || _c === void 0 ? void 0 : _c.hostname)) {
                throw new TypeError('Cookie domain must domain-match current host');
              }
              if (((_e = (_d = item.name) === null || _d === void 0 ? void 0 : _d.startsWith) === null || _e === void 0 ? void 0 : _e.call(_d, '__Host')) && item.domain) {
                throw new TypeError('Cookie domain must not be specified for host cookies');
              }
              if (((_g = (_f = item.name) === null || _f === void 0 ? void 0 : _f.startsWith) === null || _g === void 0 ? void 0 : _g.call(_f, '__Host')) && item.path != '/') {
                throw new TypeError('Cookie path must not be specified for host cookies');
              }
              if ((_j = (_h = item === null || item === void 0 ? void 0 : item.path) === null || _h === void 0 ? void 0 : _h.endsWith) === null || _j === void 0 ? void 0 : _j.call(_h, '/')) {
                item.path = item.path.slice(0, -1);
              }
              if (item.path === '') {
                item.path = '/';
              }
            }
            if (item.name === '' && ((_l = (_k = item === null || item === void 0 ? void 0 : item.value) === null || _k === void 0 ? void 0 : _k.includes) === null || _l === void 0 ? void 0 : _l.call(_k, '='))) {
              throw new TypeError("Cookie value cannot contain '=' if the name is empty");
            }
            if ((_o = (_m = item === null || item === void 0 ? void 0 : item.name) === null || _m === void 0 ? void 0 : _m.startsWith) === null || _o === void 0 ? void 0 : _o.call(_m, '__Host')) {
              item.secure = true;
            }
            cookieString = (item === null || item === void 0 ? void 0 : item.name) + "=" + encodeURIComponent(String(item === null || item === void 0 ? void 0 : item.value));
            if (item.domain) {
              cookieString += '; Domain=' + item.domain;
            }
            if (item.path) {
              cookieString += '; Path=' + item.path;
            }
            if (isNumber(item.expires)) {
              cookieString += '; Expires=' + new Date(item.expires).toUTCString();
            } else if (instanceOf(item.expires, Date)) {
              cookieString += '; Expires=' + item.expires.toUTCString();
            }
            if (((_q = (_p = item === null || item === void 0 ? void 0 : item.name) === null || _p === void 0 ? void 0 : _p.startsWith) === null || _q === void 0 ? void 0 : _q.call(_p, '__Secure')) || item.secure) {
              item.sameSite = CookieSameSite.lax;
              cookieString += '; Secure';
            }
            switch (item.sameSite) {
              case CookieSameSite.lax:
                cookieString += '; SameSite=Lax';
                break;
              case CookieSameSite.strict:
                cookieString += '; SameSite=Strict';
                break;
              case CookieSameSite.none:
                cookieString += '; SameSite=None';
                break;
            }
            previousCookie = this.get(item);
            document.cookie = cookieString;
            if (!this.onchange) return [3 /*break*/ , 3];
            changed = [];
            deleted = [];
            _r = previousCookie;
            if (!_r) return [3 /*break*/ , 2];
            return [4 /*yield*/ , this.get(item)];
          case 1:
            _r = !(_s.sent());
            _s.label = 2;
          case 2:
            if (_r) {
              deleted.push(__assign(__assign({}, item), {
                value: undefined
              }));
            } else {
              changed.push(item);
            }
            event_1 = new CookieChangeEvent('change', {
              changed: changed,
              deleted: deleted
            });
            this.onchange(event_1);
            _s.label = 3;
          case 3:
            return [2 /*return*/ ];
        }
      });
    });
  };
  CookieStore.prototype.getAll = function(init) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function() {
      var cookies, name, url, parsedURL;
      return __generator(this, function(_d) {
        cookies = parse(document.cookie);
        if (Object.keys(init !== null && init !== void 0 ? init : {}).length === 0) {
          return [2 /*return*/ , cookies];
        }
        if (isString(init)) {
          name = String(init);
        } else {
          name = init.name;
          url = init.url;
        }
        if (url) {
          parsedURL = new URL(url, (_a = G.location) === null || _a === void 0 ? void 0 : _a.origin);
          if (((_b = G.location) === null || _b === void 0 ? void 0 : _b.href) !== parsedURL.href ||
            ((_c = G.location) === null || _c === void 0 ? void 0 : _c.origin) !== parsedURL.origin) {
            throw new TypeError('URL must match the document URL');
          }
          return [2 /*return*/ , cookies.slice(0, 1)];
        }
        return [2 /*return*/ , cookies.filter(function(cookie) {
          return cookie.name === name;
        })];
      });
    });
  };
  CookieStore.prototype["delete"] = function(init) {
    return __awaiter(this, void 0, void 0, function() {
      var item;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            item = {
              name: '',
              value: '',
              path: '/',
              secure: false,
              sameSite: CookieSameSite.strict,
              expires: null,
              domain: null
            };
            if (isString(init)) {
              item.name = String(init);
            } else {
              Object.assign(item, init);
            }
            item.expires = 0;
            return [4 /*yield*/ , this.set(item)];
          case 1:
            _a.sent();
            return [2 /*return*/ ];
        }
      });
    });
  };
  return CookieStore;
}(EventTarget));
exports.CookieStore = CookieStore;
var workerSubscriptions = new WeakMap();
var registrations = new WeakMap();
var CookieStoreManager = /** @class */ (function() {
  function CookieStoreManager() {
    throw new TypeError('Illegal Constructor');
  }
  Object.defineProperty(CookieStoreManager.prototype, Symbol.toStringTag, {
    get: function() {
      return 'CookieStoreManager';
    },
    enumerable: false,
    configurable: true
  });
  CookieStoreManager.prototype.subscribe = function(subscriptions) {
    return __awaiter(this, void 0, void 0, function() {
      var currentSubcriptions, worker, _loop_1, _i, subscriptions_1, subscription;
      return __generator(this, function(_a) {
        currentSubcriptions = workerSubscriptions.get(this) || [];
        worker = registrations.get(this);
        if (!worker)
          throw new TypeError('Illegal invocation');
        _loop_1 = function(subscription) {
          var name_1 = subscription.name;
          var url = new URL((subscription === null || subscription === void 0 ? void 0 : subscription.url) || '', worker.scope).toString();
          if (currentSubcriptions.some(function(x) {
              return x.name === name_1 && x.url === url;
            }))
            return "continue";
          currentSubcriptions.push({
            name: subscription.name,
            url: url
          });
        };
        for (_i = 0, subscriptions_1 = subscriptions; _i < subscriptions_1.length; _i++) {
          subscription = subscriptions_1[_i];
          _loop_1(subscription);
        }
        workerSubscriptions.set(this, currentSubcriptions);
        return [2 /*return*/ ];
      });
    });
  };
  CookieStoreManager.prototype.getSubscriptions = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        return [2 /*return*/ , (workerSubscriptions.get(this) || []).map(function(_a) {
          var name = _a.name,
            url = _a.url;
          return ({
            name: name,
            url: url
          });
        })];
      });
    });
  };
  CookieStoreManager.prototype.unsubscribe = function(subscriptions) {
    return __awaiter(this, void 0, void 0, function() {
      var currentSubcriptions, worker, _loop_2, _i, subscriptions_2, subscription;
      return __generator(this, function(_a) {
        currentSubcriptions = workerSubscriptions.get(this) || [];
        worker = registrations.get(this);
        if (!worker)
          throw new TypeError('Illegal invocation');
        _loop_2 = function(subscription) {
          var name_2 = subscription.name;
          // TODO: Parse the url with the relevant settings objects API base URL.
          // https://wicg.github.io/cookie-store/#CookieStoreManager-unsubscribe
          var url = new URL(subscription.url || '', worker.scope).toString();
          currentSubcriptions = currentSubcriptions.filter(function(x) {
            if (x.name !== name_2)
              return true;
            if (x.url !== url)
              return true;
            return false;
          });
        };
        for (_i = 0, subscriptions_2 = subscriptions; _i < subscriptions_2.length; _i++) {
          subscription = subscriptions_2[_i];
          _loop_2(subscription);
        }
        workerSubscriptions.set(this, currentSubcriptions);
        return [2 /*return*/ ];
      });
    });
  };
  return CookieStoreManager;
}());
if (!isIn('cookies', (_k = G.ServiceWorkerRegistration) === null || _k === void 0 ? void 0 : _k.prototype)) {
  Object.defineProperty((_m = (_l = G.ServiceWorkerRegistration) === null || _l === void 0 ? void 0 : _l.prototype) !== null && _m !== void 0 ? _m : {}, 'cookies', {
    configurable: true,
    enumerable: true,
    get: function() {
      var manager = Object.create(CookieStoreManager.prototype);
      registrations.set(manager, this);
      Object.defineProperty(this, 'cookies', {
        value: manager
      });
      return manager;
    }
  });
}
var cookieStore = Object.create(CookieStore.prototype);
exports.cookieStore = cookieStore;
