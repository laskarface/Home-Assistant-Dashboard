function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = true,
    u = false;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = true, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: true
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(true);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = false, next;
            return next.value = t, next.done = true, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: true
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: true
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = false, next;
      }
      return next.done = true, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = true;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, true);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, true);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
  return t;
}
function _superPropGet(t, o, e, r) {
  var p = _get(_getPrototypeOf(t.prototype ), o, e);
  return 2 & r && "function" == typeof p ? function (t) {
    return p.apply(e, t);
  } : p;
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (String )(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function (t) {
    if (null === t || !_isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return _construct(t, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), _setPrototypeOf(Wrapper, t);
  }, _wrapNativeSuper(t);
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var t$3=globalThis,e$7=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),o$7=new WeakMap();var n$5=function(){function n(t,e,o){_classCallCheck(this,n);if(this._$cssResult$=true,o!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}return _createClass(n,[{key:"styleSheet",get:function get(){var t=this.o;var s=this.t;if(e$7&&void 0===t){var _e=void 0!==s&&1===s.length;_e&&(t=o$7.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet()).replaceSync(this.cssText),_e&&o$7.set(s,t));}return t;}},{key:"toString",value:function toString(){return this.cssText;}}]);}();var r$6=function r(t){return new n$5("string"==typeof t?t:t+"",void 0,s$3);},i$6=function i(t){for(var _len=arguments.length,e=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){e[_key-1]=arguments[_key];}var o=1===t.length?t[0]:e.reduce(function(e,s,o){return e+function(t){if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");}(s)+t[o+1];},t[0]);return new n$5(o,t,s$3);},S$1=function S(s,o){if(e$7)s.adoptedStyleSheets=o.map(function(t){return t instanceof CSSStyleSheet?t:t.styleSheet;});else {var _iterator=_createForOfIteratorHelper(o),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var _e2=_step.value;var _o=document.createElement("style"),_n=t$3.litNonce;void 0!==_n&&_o.setAttribute("nonce",_n),_o.textContent=_e2.cssText,s.appendChild(_o);}}catch(err){_iterator.e(err);}finally{_iterator.f();}}},c$3=e$7?function(t){return t;}:function(t){return t instanceof CSSStyleSheet?function(t){var e="";var _iterator2=_createForOfIteratorHelper(t.cssRules),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var _s=_step2.value;e+=_s.cssText;}}catch(err){_iterator2.e(err);}finally{_iterator2.f();}return r$6(e);}(t):t;};

var _Symbol$metadata,_a$litPropertyMetadat,_a$reactiveElementVer;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var i$5=Object.is,e$6=Object.defineProperty,h$2=Object.getOwnPropertyDescriptor,r$5=Object.getOwnPropertyNames,o$6=Object.getOwnPropertySymbols,n$4=Object.getPrototypeOf,a$2=globalThis,c$2=a$2.trustedTypes,l$1=c$2?c$2.emptyScript:"",p$2=a$2.reactiveElementPolyfillSupport,d$2=function d(t,s){return t;},u$2={toAttribute:function toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t;},fromAttribute:function fromAttribute(t,s){var i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i;}},f$1=function f(t,s){return !i$5(t,s);},b$1={attribute:true,type:String,converter:u$2,reflect:false,useDefault:false,hasChanged:f$1};(_Symbol$metadata=Symbol.metadata)!==null&&_Symbol$metadata!==void 0?_Symbol$metadata:Symbol.metadata=Symbol("metadata"),(_a$litPropertyMetadat=a$2.litPropertyMetadata)!==null&&_a$litPropertyMetadat!==void 0?_a$litPropertyMetadat:a$2.litPropertyMetadata=new WeakMap();var y$1=function(_HTMLElement){function y(){var _this;_classCallCheck(this,y);_this=_callSuper(this,y),_this._$Ep=void 0,_this.isUpdatePending=false,_this.hasUpdated=false,_this._$Em=null,_this._$Ev();return _this;}_inherits(y,_HTMLElement);return _createClass(y,[{key:"_$Ev",value:function _$Ev(){var _this2=this,_this$constructor$l;this._$ES=new Promise(function(t){return _this2.enableUpdating=t;}),this._$AL=new Map(),this._$E_(),this.requestUpdate(),(_this$constructor$l=this.constructor.l)===null||_this$constructor$l===void 0?void 0:_this$constructor$l.forEach(function(t){return t(_this2);});}},{key:"addController",value:function addController(t){var _this$_$EO,_t$hostConnected;((_this$_$EO=this._$EO)!==null&&_this$_$EO!==void 0?_this$_$EO:this._$EO=new Set()).add(t),void 0!==this.renderRoot&&this.isConnected&&((_t$hostConnected=t.hostConnected)===null||_t$hostConnected===void 0?void 0:_t$hostConnected.call(t));}},{key:"removeController",value:function removeController(t){var _this$_$EO2;(_this$_$EO2=this._$EO)===null||_this$_$EO2===void 0||_this$_$EO2.delete(t);}},{key:"_$E_",value:function _$E_(){var t=new Map(),s=this.constructor.elementProperties;var _iterator=_createForOfIteratorHelper(s.keys()),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var _i=_step.value;this.hasOwnProperty(_i)&&(t.set(_i,this[_i]),delete this[_i]);}}catch(err){_iterator.e(err);}finally{_iterator.f();}t.size>0&&(this._$Ep=t);}},{key:"createRenderRoot",value:function createRenderRoot(){var _this$shadowRoot;var t=(_this$shadowRoot=this.shadowRoot)!==null&&_this$shadowRoot!==void 0?_this$shadowRoot:this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t;}},{key:"connectedCallback",value:function connectedCallback(){var _this$renderRoot,_this$_$EO3;(_this$renderRoot=this.renderRoot)!==null&&_this$renderRoot!==void 0?_this$renderRoot:this.renderRoot=this.createRenderRoot(),this.enableUpdating(true),(_this$_$EO3=this._$EO)===null||_this$_$EO3===void 0?void 0:_this$_$EO3.forEach(function(t){var _t$hostConnected2;return (_t$hostConnected2=t.hostConnected)===null||_t$hostConnected2===void 0?void 0:_t$hostConnected2.call(t);});}},{key:"enableUpdating",value:function enableUpdating(t){}},{key:"disconnectedCallback",value:function disconnectedCallback(){var _this$_$EO4;(_this$_$EO4=this._$EO)===null||_this$_$EO4===void 0||_this$_$EO4.forEach(function(t){var _t$hostDisconnected;return (_t$hostDisconnected=t.hostDisconnected)===null||_t$hostDisconnected===void 0?void 0:_t$hostDisconnected.call(t);});}},{key:"attributeChangedCallback",value:function attributeChangedCallback(t,s,i){this._$AK(t,i);}},{key:"_$ET",value:function _$ET(t,s){var i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){var _i$converter;var _h=(void 0!==((_i$converter=i.converter)===null||_i$converter===void 0?void 0:_i$converter.toAttribute)?i.converter:u$2).toAttribute(s,i.type);this._$Em=t,null==_h?this.removeAttribute(e):this.setAttribute(e,_h),this._$Em=null;}}},{key:"_$AK",value:function _$AK(t,s){var i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){var _t$converter,_ref,_h2$fromAttribute,_this$_$Ej;var _t=i.getPropertyOptions(e),_h2="function"==typeof _t.converter?{fromAttribute:_t.converter}:void 0!==((_t$converter=_t.converter)===null||_t$converter===void 0?void 0:_t$converter.fromAttribute)?_t.converter:u$2;this._$Em=e,this[e]=(_ref=(_h2$fromAttribute=_h2.fromAttribute(s,_t.type))!==null&&_h2$fromAttribute!==void 0?_h2$fromAttribute:(_this$_$Ej=this._$Ej)===null||_this$_$Ej===void 0?void 0:_this$_$Ej.get(e))!==null&&_ref!==void 0?_ref:null,this._$Em=null;}}},{key:"requestUpdate",value:function requestUpdate(t,s,i){if(void 0!==t){var _i$hasChanged,_this$_$Ej2;var _e=this.constructor,_h3=this[t];if(i!==null&&i!==void 0?i:i=_e.getPropertyOptions(t),!(((_i$hasChanged=i.hasChanged)!==null&&_i$hasChanged!==void 0?_i$hasChanged:f$1)(_h3,s)||i.useDefault&&i.reflect&&_h3===((_this$_$Ej2=this._$Ej)===null||_this$_$Ej2===void 0?void 0:_this$_$Ej2.get(t))&&!this.hasAttribute(_e._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}},{key:"C",value:function C(t,s,_ref2,r){var _this$_$Ej3,_ref3,_this$_$Eq;var i=_ref2.useDefault,e=_ref2.reflect,h=_ref2.wrapped;i&&!((_this$_$Ej3=this._$Ej)!==null&&_this$_$Ej3!==void 0?_this$_$Ej3:this._$Ej=new Map()).has(t)&&(this._$Ej.set(t,(_ref3=r!==null&&r!==void 0?r:s)!==null&&_ref3!==void 0?_ref3:this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&((_this$_$Eq=this._$Eq)!==null&&_this$_$Eq!==void 0?_this$_$Eq:this._$Eq=new Set()).add(t));}},{key:"_$EP",value:function(){var _$EP2=_asyncToGenerator(_regeneratorRuntime().mark(function _callee(){var t;return _regeneratorRuntime().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:this.isUpdatePending=true;_context.prev=1;_context.next=4;return this._$ES;case 4:_context.next=9;break;case 6:_context.prev=6;_context.t0=_context["catch"](1);Promise.reject(_context.t0);case 9:t=this.scheduleUpdate();_context.t1=null!=t;if(!_context.t1){_context.next=14;break;}_context.next=14;return t;case 14:return _context.abrupt("return",!this.isUpdatePending);case 15:case "end":return _context.stop();}},_callee,this,[[1,6]]);}));function _$EP(){return _$EP2.apply(this,arguments);}return _$EP;}()},{key:"scheduleUpdate",value:function scheduleUpdate(){return this.performUpdate();}},{key:"performUpdate",value:function performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){var _this$renderRoot2;if((_this$renderRoot2=this.renderRoot)!==null&&_this$renderRoot2!==void 0?_this$renderRoot2:this.renderRoot=this.createRenderRoot(),this._$Ep){var _iterator2=_createForOfIteratorHelper(this._$Ep),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var _step2$value=_slicedToArray(_step2.value,2),_t2=_step2$value[0],_s=_step2$value[1];this[_t2]=_s;}}catch(err){_iterator2.e(err);}finally{_iterator2.f();}this._$Ep=void 0;}var _t3=this.constructor.elementProperties;if(_t3.size>0){var _iterator3=_createForOfIteratorHelper(_t3),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var _step3$value=_slicedToArray(_step3.value,2),_s2=_step3$value[0],_i2=_step3$value[1];var _t4=_i2.wrapped,_e2=this[_s2];!0!==_t4||this._$AL.has(_s2)||void 0===_e2||this.C(_s2,void 0,_i2,_e2);}}catch(err){_iterator3.e(err);}finally{_iterator3.f();}}}var t=false;var s=this._$AL;try{var _this$_$EO5;t=this.shouldUpdate(s),t?(this.willUpdate(s),(_this$_$EO5=this._$EO)!==null&&_this$_$EO5!==void 0&&_this$_$EO5.forEach(function(t){var _t$hostUpdate;return (_t$hostUpdate=t.hostUpdate)===null||_t$hostUpdate===void 0?void 0:_t$hostUpdate.call(t);}),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s;}t&&this._$AE(s);}},{key:"willUpdate",value:function willUpdate(t){}},{key:"_$AE",value:function _$AE(t){var _this$_$EO6;(_this$_$EO6=this._$EO)!==null&&_this$_$EO6!==void 0&&_this$_$EO6.forEach(function(t){var _t$hostUpdated;return (_t$hostUpdated=t.hostUpdated)===null||_t$hostUpdated===void 0?void 0:_t$hostUpdated.call(t);}),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}},{key:"_$EM",value:function _$EM(){this._$AL=new Map(),this.isUpdatePending=false;}},{key:"updateComplete",get:function get(){return this.getUpdateComplete();}},{key:"getUpdateComplete",value:function getUpdateComplete(){return this._$ES;}},{key:"shouldUpdate",value:function shouldUpdate(t){return  true;}},{key:"update",value:function update(t){var _this3=this;this._$Eq&&(this._$Eq=this._$Eq.forEach(function(t){return _this3._$ET(t,_this3[t]);})),this._$EM();}},{key:"updated",value:function updated(t){}},{key:"firstUpdated",value:function firstUpdated(t){}}],[{key:"addInitializer",value:function addInitializer(t){var _this$l;this._$Ei(),((_this$l=this.l)!==null&&_this$l!==void 0?_this$l:this.l=[]).push(t);}},{key:"observedAttributes",get:function get(){return this.finalize(),this._$Eh&&_toConsumableArray(this._$Eh.keys());}},{key:"createProperty",value:function createProperty(t){var s=arguments.length>1&&arguments[1]!==undefined?arguments[1]:b$1;if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){var _i3=Symbol(),_h4=this.getPropertyDescriptor(t,_i3,s);void 0!==_h4&&e$6(this.prototype,t,_h4);}}},{key:"getPropertyDescriptor",value:function getPropertyDescriptor(t,s,i){var _h5;var _ref4=(_h5=h$2(this.prototype,t))!==null&&_h5!==void 0?_h5:{get:function get(){return this[s];},set:function set(t){this[s]=t;}},e=_ref4.get,r=_ref4.set;return {get:e,set:function set(s){var h=e===null||e===void 0?void 0:e.call(this);r!==null&&r!==void 0&&r.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true};}},{key:"getPropertyOptions",value:function getPropertyOptions(t){var _this$elementProperti;return (_this$elementProperti=this.elementProperties.get(t))!==null&&_this$elementProperti!==void 0?_this$elementProperti:b$1;}},{key:"_$Ei",value:function _$Ei(){if(this.hasOwnProperty(d$2("elementProperties")))return;var t=n$4(this);t.finalize(),void 0!==t.l&&(this.l=_toConsumableArray(t.l)),this.elementProperties=new Map(t.elementProperties);}},{key:"finalize",value:function finalize(){if(this.hasOwnProperty(d$2("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$2("properties"))){var _t5=this.properties,_s3=[].concat(_toConsumableArray(r$5(_t5)),_toConsumableArray(o$6(_t5)));var _iterator4=_createForOfIteratorHelper(_s3),_step4;try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){var _i4=_step4.value;this.createProperty(_i4,_t5[_i4]);}}catch(err){_iterator4.e(err);}finally{_iterator4.f();}}var t=this[Symbol.metadata];if(null!==t){var _s4=litPropertyMetadata.get(t);if(void 0!==_s4){var _iterator5=_createForOfIteratorHelper(_s4),_step5;try{for(_iterator5.s();!(_step5=_iterator5.n()).done;){var _step5$value=_slicedToArray(_step5.value,2),_t6=_step5$value[0],_i5=_step5$value[1];this.elementProperties.set(_t6,_i5);}}catch(err){_iterator5.e(err);}finally{_iterator5.f();}}}this._$Eh=new Map();var _iterator6=_createForOfIteratorHelper(this.elementProperties),_step6;try{for(_iterator6.s();!(_step6=_iterator6.n()).done;){var _step6$value=_slicedToArray(_step6.value,2),_t7=_step6$value[0],_s5=_step6$value[1];var _i6=this._$Eu(_t7,_s5);void 0!==_i6&&this._$Eh.set(_i6,_t7);}}catch(err){_iterator6.e(err);}finally{_iterator6.f();}this.elementStyles=this.finalizeStyles(this.styles);}},{key:"finalizeStyles",value:function finalizeStyles(s){var i=[];if(Array.isArray(s)){var _e3=new Set(s.flat(1/0).reverse());var _iterator7=_createForOfIteratorHelper(_e3),_step7;try{for(_iterator7.s();!(_step7=_iterator7.n()).done;){var _s6=_step7.value;i.unshift(c$3(_s6));}}catch(err){_iterator7.e(err);}finally{_iterator7.f();}}else void 0!==s&&i.push(c$3(s));return i;}},{key:"_$Eu",value:function _$Eu(t,s){var i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0;}}]);}(_wrapNativeSuper(HTMLElement));y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$2("elementProperties")]=new Map(),y$1[d$2("finalized")]=new Map(),p$2!==null&&p$2!==void 0&&p$2({ReactiveElement:y$1}),((_a$reactiveElementVer=a$2.reactiveElementVersions)!==null&&_a$reactiveElementVer!==void 0?_a$reactiveElementVer:a$2.reactiveElementVersions=[]).push("2.1.0");

var _t$litHtmlVersions;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var t$2=globalThis,i$4=t$2.trustedTypes,s$2=i$4?i$4.createPolicy("lit-html",{createHTML:function createHTML(t){return t;}}):void 0,e$5="$lit$",h$1="lit$".concat(Math.random().toFixed(9).slice(2),"$"),o$5="?"+h$1,n$3="<".concat(o$5,">"),r$4=document,l=function l(){return r$4.createComment("");},c$1=function c(t){return null===t||"object"!=_typeof(t)&&"function"!=typeof t;},a$1=Array.isArray,u$1=function u(t){return a$1(t)||"function"==typeof(t===null||t===void 0?void 0:t[Symbol.iterator]);},d$1="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_$1=/>/g,m=RegExp(">|".concat(d$1,"(?:([^\\s\"'>=/]+)(").concat(d$1,"*=").concat(d$1,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),p$1=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=function y(t){return function(i){for(var _len=arguments.length,s=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){s[_key-1]=arguments[_key];}return {_$litType$:t,strings:i,values:s};};},x=y(1),b=y(2),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap(),C=r$4.createTreeWalker(r$4,129);function P(t,i){if(!a$1(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$2?s$2.createHTML(i):i;}var V=function V(t,i){var s=t.length-1,o=[];var r,l=2===i?"<svg>":3===i?"<math>":"",c=f;for(var _i=0;_i<s;_i++){var _s=t[_i];var _a=void 0,_u=void 0,_d=-1,_y=0;for(;_y<_s.length&&(c.lastIndex=_y,_u=c.exec(_s),null!==_u);)_y=c.lastIndex,c===f?"!--"===_u[1]?c=v:void 0!==_u[1]?c=_$1:void 0!==_u[2]?($.test(_u[2])&&(r=RegExp("</"+_u[2],"g")),c=m):void 0!==_u[3]&&(c=m):c===m?">"===_u[0]?(c=r!==null&&r!==void 0?r:f,_d=-1):void 0===_u[1]?_d=-2:(_d=c.lastIndex-_u[2].length,_a=_u[1],c=void 0===_u[3]?m:'"'===_u[3]?g:p$1):c===g||c===p$1?c=m:c===v||c===_$1?c=f:(c=m,r=void 0);var _x=c===m&&t[_i+1].startsWith("/>")?" ":"";l+=c===f?_s+n$3:_d>=0?(o.push(_a),_s.slice(0,_d)+e$5+_s.slice(_d)+h$1+_x):_s+h$1+(-2===_d?_i:_x);}return [P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o];};var N=function(){function N(_ref,n){var t=_ref.strings,s=_ref._$litType$;_classCallCheck(this,N);var r;this.parts=[];var c=0,a=0;var u=t.length-1,d=this.parts,_V=V(t,s),_V2=_slicedToArray(_V,2),f=_V2[0],v=_V2[1];if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){var _t=this.el.content.firstChild;_t.replaceWith.apply(_t,_toConsumableArray(_t.childNodes));}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes()){var _iterator=_createForOfIteratorHelper(r.getAttributeNames()),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var _t2=_step.value;if(_t2.endsWith(e$5)){var _i2=v[a++],_s2=r.getAttribute(_t2).split(h$1),_e=/([.?@])?(.*)/.exec(_i2);d.push({type:1,index:c,name:_e[2],strings:_s2,ctor:"."===_e[1]?H:"?"===_e[1]?I:"@"===_e[1]?L:k}),r.removeAttribute(_t2);}else _t2.startsWith(h$1)&&(d.push({type:6,index:c}),r.removeAttribute(_t2));}}catch(err){_iterator.e(err);}finally{_iterator.f();}}if($.test(r.tagName)){var _t3=r.textContent.split(h$1),_s3=_t3.length-1;if(_s3>0){r.textContent=i$4?i$4.emptyScript:"";for(var _i3=0;_i3<_s3;_i3++)r.append(_t3[_i3],l()),C.nextNode(),d.push({type:2,index:++c});r.append(_t3[_s3],l());}}}else if(8===r.nodeType)if(r.data===o$5)d.push({type:2,index:c});else {var _t4=-1;for(;-1!==(_t4=r.data.indexOf(h$1,_t4+1));)d.push({type:7,index:c}),_t4+=h$1.length-1;}c++;}}return _createClass(N,null,[{key:"createElement",value:function createElement(t,i){var s=r$4.createElement("template");return s.innerHTML=t,s;}}]);}();function S(t,i){var _s$_$Co,_h,_h2,_h2$_$AO,_s$_$Co2;var s=arguments.length>2&&arguments[2]!==undefined?arguments[2]:t;var e=arguments.length>3?arguments[3]:undefined;if(i===T)return i;var h=void 0!==e?(_s$_$Co=s._$Co)===null||_s$_$Co===void 0?void 0:_s$_$Co[e]:s._$Cl;var o=c$1(i)?void 0:i._$litDirective$;return ((_h=h)===null||_h===void 0?void 0:_h.constructor)!==o&&((_h2=h)!==null&&_h2!==void 0&&(_h2$_$AO=_h2._$AO)!==null&&_h2$_$AO!==void 0&&_h2$_$AO.call(_h2,false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?((_s$_$Co2=s._$Co)!==null&&_s$_$Co2!==void 0?_s$_$Co2:s._$Co=[])[e]=h:s._$Cl=h),void 0!==h&&(i=S(t,h._$AS(t,i.values),h,e)),i;}var M=function(){function M(t,i){_classCallCheck(this,M);this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}return _createClass(M,[{key:"parentNode",get:function get(){return this._$AM.parentNode;}},{key:"_$AU",get:function get(){return this._$AM._$AU;}},{key:"u",value:function u(t){var _t$creationScope;var _this$_$AD=this._$AD,i=_this$_$AD.el.content,s=_this$_$AD.parts,e=((_t$creationScope=t===null||t===void 0?void 0:t.creationScope)!==null&&_t$creationScope!==void 0?_t$creationScope:r$4).importNode(i,true);C.currentNode=e;var h=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){var _l;if(o===l.index){var _i4=void 0;2===l.type?_i4=new R(h,h.nextSibling,this,t):1===l.type?_i4=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(_i4=new z(h,this,t)),this._$AV.push(_i4),l=s[++n];}o!==((_l=l)===null||_l===void 0?void 0:_l.index)&&(h=C.nextNode(),o++);}return C.currentNode=r$4,e;}},{key:"p",value:function p(t){var i=0;var _iterator2=_createForOfIteratorHelper(this._$AV),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var _s4=_step2.value;void 0!==_s4&&(void 0!==_s4.strings?(_s4._$AI(t,_s4,i),i+=_s4.strings.length-2):_s4._$AI(t[i])),i++;}}catch(err){_iterator2.e(err);}finally{_iterator2.f();}}}]);}();var R=function(){function R(t,i,s,e){var _e$isConnected;_classCallCheck(this,R);this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=(_e$isConnected=e===null||e===void 0?void 0:e.isConnected)!==null&&_e$isConnected!==void 0?_e$isConnected:true;}return _createClass(R,[{key:"_$AU",get:function get(){var _this$_$AM$_$AU,_this$_$AM;return (_this$_$AM$_$AU=(_this$_$AM=this._$AM)===null||_this$_$AM===void 0?void 0:_this$_$AM._$AU)!==null&&_this$_$AM$_$AU!==void 0?_this$_$AM$_$AU:this._$Cv;}},{key:"parentNode",get:function get(){var _t5;var t=this._$AA.parentNode;var i=this._$AM;return void 0!==i&&11===((_t5=t)===null||_t5===void 0?void 0:_t5.nodeType)&&(t=i.parentNode),t;}},{key:"startNode",get:function get(){return this._$AA;}},{key:"endNode",get:function get(){return this._$AB;}},{key:"_$AI",value:function _$AI(t){var i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this;t=S(this,t,i),c$1(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u$1(t)?this.k(t):this._(t);}},{key:"O",value:function O(t){return this._$AA.parentNode.insertBefore(t,this._$AB);}},{key:"T",value:function T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}},{key:"_",value:function _(t){this._$AH!==E&&c$1(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$4.createTextNode(t)),this._$AH=t;}},{key:"$",value:function $(t){var _this$_$AH;var i=t.values,s=t._$litType$,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if(((_this$_$AH=this._$AH)===null||_this$_$AH===void 0?void 0:_this$_$AH._$AD)===e)this._$AH.p(i);else {var _t6=new M(e,this),_s5=_t6.u(this.options);_t6.p(i),this.T(_s5),this._$AH=_t6;}}},{key:"_$AC",value:function _$AC(t){var i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N(t)),i;}},{key:"k",value:function k(t){a$1(this._$AH)||(this._$AH=[],this._$AR());var i=this._$AH;var s,e=0;var _iterator3=_createForOfIteratorHelper(t),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var _h3=_step3.value;e===i.length?i.push(s=new R(this.O(l()),this.O(l()),this,this.options)):s=i[e],s._$AI(_h3),e++;}}catch(err){_iterator3.e(err);}finally{_iterator3.f();}e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}},{key:"_$AR",value:function _$AR(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this._$AA.nextSibling;var i=arguments.length>1?arguments[1]:undefined;for((_this$_$AP=this._$AP)===null||_this$_$AP===void 0?void 0:_this$_$AP.call(this,false,true,i);t&&t!==this._$AB;){var _this$_$AP;var _i5=t.nextSibling;t.remove(),t=_i5;}}},{key:"setConnected",value:function setConnected(t){var _this$_$AP2;void 0===this._$AM&&(this._$Cv=t,(_this$_$AP2=this._$AP)===null||_this$_$AP2===void 0?void 0:_this$_$AP2.call(this,t));}}]);}();var k=function(){function k(t,i,s,e,h){_classCallCheck(this,k);this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String()),this.strings=s):this._$AH=E;}return _createClass(k,[{key:"tagName",get:function get(){return this.element.tagName;}},{key:"_$AU",get:function get(){return this._$AM._$AU;}},{key:"_$AI",value:function _$AI(t){var i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this;var s=arguments.length>2?arguments[2]:undefined;var e=arguments.length>3?arguments[3]:undefined;var h=this.strings;var o=false;if(void 0===h)t=S(this,t,i,0),o=!c$1(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else {var _e2=t;var _n,_r;for(t=h[0],_n=0;_n<h.length-1;_n++)_r=S(this,_e2[s+_n],i,_n),_r===T&&(_r=this._$AH[_n]),o||(o=!c$1(_r)||_r!==this._$AH[_n]),_r===E?t=E:t!==E&&(t+=(_r!==null&&_r!==void 0?_r:"")+h[_n+1]),this._$AH[_n]=_r;}o&&!e&&this.j(t);}},{key:"j",value:function j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!==null&&t!==void 0?t:"");}}]);}();var H=function(_k){function H(){var _this;_classCallCheck(this,H);_this=_callSuper(this,H,arguments),_this.type=3;return _this;}_inherits(H,_k);return _createClass(H,[{key:"j",value:function j(t){this.element[this.name]=t===E?void 0:t;}}]);}(k);var I=function(_k2){function I(){var _this2;_classCallCheck(this,I);_this2=_callSuper(this,I,arguments),_this2.type=4;return _this2;}_inherits(I,_k2);return _createClass(I,[{key:"j",value:function j(t){this.element.toggleAttribute(this.name,!!t&&t!==E);}}]);}(k);var L=function(_k3){function L(t,i,s,e,h){var _this3;_classCallCheck(this,L);_this3=_callSuper(this,L,[t,i,s,e,h]),_this3.type=5;return _this3;}_inherits(L,_k3);return _createClass(L,[{key:"_$AI",value:function _$AI(t){var _S;var i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this;if((t=(_S=S(this,t,i,0))!==null&&_S!==void 0?_S:E)===T)return;var s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}},{key:"handleEvent",value:function handleEvent(t){var _this$options$host,_this$options;"function"==typeof this._$AH?this._$AH.call((_this$options$host=(_this$options=this.options)===null||_this$options===void 0?void 0:_this$options.host)!==null&&_this$options$host!==void 0?_this$options$host:this.element,t):this._$AH.handleEvent(t);}}]);}(k);var z=function(){function z(t,i,s){_classCallCheck(this,z);this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}return _createClass(z,[{key:"_$AU",get:function get(){return this._$AM._$AU;}},{key:"_$AI",value:function _$AI(t){S(this,t);}}]);}();var j=t$2.litHtmlPolyfillSupport;j!==null&&j!==void 0&&j(N,R),((_t$litHtmlVersions=t$2.litHtmlVersions)!==null&&_t$litHtmlVersions!==void 0?_t$litHtmlVersions:t$2.litHtmlVersions=[]).push("3.3.0");var B=function B(t,i,s){var _s$renderBefore;var e=(_s$renderBefore=s===null||s===void 0?void 0:s.renderBefore)!==null&&_s$renderBefore!==void 0?_s$renderBefore:i;var h=e._$litPart$;if(void 0===h){var _s$renderBefore2;var _t7=(_s$renderBefore2=s===null||s===void 0?void 0:s.renderBefore)!==null&&_s$renderBefore2!==void 0?_s$renderBefore2:null;e._$litPart$=h=new R(i.insertBefore(l(),_t7),_t7,void 0,s!==null&&s!==void 0?s:{});}return h._$AI(t),h;};

var _s$litElementHydrateS,_s$litElementVersions;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$1=globalThis;var i$3=function(_t){function i(){var _this;_classCallCheck(this,i);_this=_callSuper(this,i,arguments),_this.renderOptions={host:_assertThisInitialized(_this)},_this._$Do=void 0;return _this;}_inherits(i,_t);return _createClass(i,[{key:"createRenderRoot",value:function createRenderRoot(){var _this$renderOptions,_this$renderOptions$r;var t=_superPropGet(i,"createRenderRoot",this,3)([]);return (_this$renderOptions$r=(_this$renderOptions=this.renderOptions).renderBefore)!==null&&_this$renderOptions$r!==void 0?_this$renderOptions$r:_this$renderOptions.renderBefore=t.firstChild,t;}},{key:"update",value:function update(t){var r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),_superPropGet(i,"update",this,3)([t]),this._$Do=B(r,this.renderRoot,this.renderOptions);}},{key:"connectedCallback",value:function connectedCallback(){var _this$_$Do;_superPropGet(i,"connectedCallback",this,3)([]),(_this$_$Do=this._$Do)===null||_this$_$Do===void 0?void 0:_this$_$Do.setConnected(true);}},{key:"disconnectedCallback",value:function disconnectedCallback(){var _this$_$Do2;_superPropGet(i,"disconnectedCallback",this,3)([]),(_this$_$Do2=this._$Do)===null||_this$_$Do2===void 0?void 0:_this$_$Do2.setConnected(false);}},{key:"render",value:function render(){return T;}}]);}(y$1);i$3._$litElement$=true,i$3["finalized"]=true,(_s$litElementHydrateS=s$1.litElementHydrateSupport)===null||_s$litElementHydrateS===void 0?void 0:_s$litElementHydrateS.call(s$1,{LitElement:i$3});var o$4=s$1.litElementPolyfillSupport;o$4===null||o$4===void 0||o$4({LitElement:i$3});((_s$litElementVersions=s$1.litElementVersions)!==null&&_s$litElementVersions!==void 0?_s$litElementVersions:s$1.litElementVersions=[]).push("4.2.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var t$1=function t(_t){return function(e,o){ void 0!==o?o.addInitializer(function(){customElements.define(_t,e);}):customElements.define(_t,e);};};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var o$3={attribute:true,type:String,converter:u$2,reflect:false,hasChanged:f$1},r$3=function r(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:o$3;var e=arguments.length>1?arguments[1]:undefined;var r=arguments.length>2?arguments[2]:undefined;var n=r.kind,i=r.metadata;var s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map()),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){var _o=r.name;return {set:function set(r){var n=e.get.call(this);e.set.call(this,r),this.requestUpdate(_o,n,t);},init:function init(e){return void 0!==e&&this.C(_o,void 0,t,e),e;}};}if("setter"===n){var _o2=r.name;return function(r){var n=this[_o2];e.call(this,r),this.requestUpdate(_o2,n,t);};}throw Error("Unsupported decorator location: "+n);};function n$2(t){return function(e,o){return "object"==_typeof(o)?r$3(t,e,o):function(t,e,o){var r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0;}(t,e,o);};}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r$2(r){return n$2(_objectSpread2(_objectSpread2({},r),{},{state:true,attribute:false}));}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var e$4=function e(_e,t,c){return c.configurable=true,c.enumerable=true,Reflect.decorate&&"object"!=_typeof(t)&&Object.defineProperty(_e,t,c),c;};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r$1(r){return function(n,e){return e$4(n,e,{get:function get(){var _this=this;return _asyncToGenerator(_regeneratorRuntime().mark(function _callee(){var _this$renderRoot$quer,_this$renderRoot;return _regeneratorRuntime().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:_context.next=2;return _this.updateComplete;case 2:return _context.abrupt("return",(_this$renderRoot$quer=(_this$renderRoot=_this.renderRoot)===null||_this$renderRoot===void 0?void 0:_this$renderRoot.querySelector(r))!==null&&_this$renderRoot$quer!==void 0?_this$renderRoot$quer:null);case 3:case "end":return _context.stop();}},_callee);}))();}});};}

function hasAction(config){return config!==undefined&&config.action!=="none";}

var DEFAULT_MIN=0;var DEFAULT_MAX=100;var MAX_ANGLE$1=270;var HALF_ANGLE=180;var FULL_ANGLE=359.99;var GAUGE_TYPE_ANGLES={standard:MAX_ANGLE$1,half:HALF_ANGLE,full:FULL_ANGLE};var RADIUS$1=47;var INNER_RADIUS=42;var TERTIARY_RADIUS=37;var NUMBER_ENTITY_DOMAINS=["sensor","number","counter","input_number","timer"];var TIMESTAMP_STATE_DOMAINS=["button","input_button","scene"];var NON_NUMERIC_ATTRIBUTES=["access_token","auto_update","available_modes","away_mode","changed_by","code_format","color_modes","current_activity","device_class","editable","effect_list","effect","entity_picture","event_type","event_types","fan_mode","fan_modes","fan_speed_list","forecast","friendly_name","frontend_stream_type","has_date","has_time","hs_color","hvac_mode","hvac_modes","icon","media_album_name","media_artist","media_content_type","media_position_updated_at","media_title","next_dawn","next_dusk","next_midnight","next_noon","next_rising","next_setting","operation_list","operation_mode","options","preset_mode","preset_modes","release_notes","release_summary","release_url","restored","rgb_color","rgbw_color","shuffle","sound_mode_list","sound_mode","source_list","source_type","source","state_class","supported_features","swing_mode","swing_mode","swing_modes","title","token","unit_of_measurement","xy_color"];

var rgbToHex=function rgbToHex(rgb){if(!rgb)return "";return "#".concat(rgb.map(function(x){return x.toString(16).padStart(2,"0");}).join(""));};var hexToRgb=function hexToRgb(hex){if(!hex.startsWith("#"))return hex;hex=hex.replace("#","");return [parseInt(hex.substring(0,2),16),parseInt(hex.substring(2,4),16),parseInt(hex.substring(4,6),16)];};var interpolateColor=function interpolateColor(from,to,percentage){if(from===to){return from;}var fromColor=from;var toColor=to;if(!from.startsWith("#")){fromColor=colourNameToHex(from);}if(!to.startsWith("#")){toColor=colourNameToHex(to);}var fromColorRgb=hexToRgb(fromColor);var toColorRgb=hexToRgb(toColor);var q=1-percentage;var red=Math.round(fromColorRgb[0]*q+toColorRgb[0]*percentage);var green=Math.round(fromColorRgb[1]*q+toColorRgb[1]*percentage);var blue=Math.round(fromColorRgb[2]*q+toColorRgb[2]*percentage);return rgbToHex([red,green,blue]);};var colourNameToHex=function colourNameToHex(color){var colors={"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff","beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887","cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff","darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f","darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1","darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff","firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff","gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f","honeydew":"#f0fff0","hotpink":"#ff69b4","indianred ":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c","lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2","lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de","lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6","magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee","mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5","navajowhite":"#ffdead","navy":"#000080","oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6","palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080","rebeccapurple":"#663399","red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1","saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4","tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0","violet":"#ee82ee","wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5","yellow":"#ffff00","yellowgreen":"#9acd32"};if(typeof colors[color.toLowerCase()]!='undefined')return colors[color.toLowerCase()];return "#000000";};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var t={ATTRIBUTE:1},e$3=function e(t){return function(){for(var _len=arguments.length,e=new Array(_len),_key=0;_key<_len;_key++){e[_key]=arguments[_key];}return {_$litDirective$:t,values:e};};};var i$2=function(){function i(t){_classCallCheck(this,i);}return _createClass(i,[{key:"_$AU",get:function get(){return this._$AM._$AU;}},{key:"_$AT",value:function _$AT(t,e,_i){this._$Ct=t,this._$AM=e,this._$Ci=_i;}},{key:"_$AS",value:function _$AS(t,e){return this.update(t,e);}},{key:"update",value:function update(t,e){return this.render.apply(this,_toConsumableArray(e));}}]);}();

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$1="important",i$1=" !"+n$1,o$2=e$3(function(_r){function _class(t$1){var _t$strings;var _this;_classCallCheck(this,_class);if(_this=_callSuper(this,_class,[t$1]),t$1.type!==t.ATTRIBUTE||"style"!==t$1.name||((_t$strings=t$1.strings)===null||_t$strings===void 0?void 0:_t$strings.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");return _this;}_inherits(_class,_r);return _createClass(_class,[{key:"render",value:function render(t){return Object.keys(t).reduce(function(e,r){var s=t[r];return null==s?e:e+"".concat(r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase(),":").concat(s,";");},"");}},{key:"update",value:function update(e,_ref){var _ref2=_slicedToArray(_ref,1),r=_ref2[0];var s=e.element.style;if(void 0===this.ft)return this.ft=new Set(Object.keys(r)),this.render(r);var _iterator=_createForOfIteratorHelper(this.ft),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var _t2=_step.value;null==r[_t2]&&(this.ft.delete(_t2),_t2.includes("-")?s.removeProperty(_t2):s[_t2]=null);}}catch(err){_iterator.e(err);}finally{_iterator.f();}for(var _t in r){var _e=r[_t];if(null!=_e){this.ft.add(_t);var _r2="string"==typeof _e&&_e.endsWith(i$1);_t.includes("-")||_r2?s.setProperty(_t,_r2?_e.slice(0,-11):_e,_r2?n$1:""):s[_t]=_e;}}return T;}}]);}(i$2));

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var o$1=function o(_o){return _o!==null&&_o!==void 0?_o:E;};

var THEME_COLORS=new Set(["primary","accent","disabled","red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","light-grey","grey","dark-grey","blue-grey","black","white"]);function computeCssColor(color){if(THEME_COLORS.has(color)){return "var(--".concat(color,"-color)");}return color;}

var _templateObject$b,_templateObject2$a,_templateObject3$7;var rotateVector=function rotateVector(_ref,_ref2){var _ref3=_slicedToArray(_ref,2),_ref3$=_slicedToArray(_ref3[0],2),a=_ref3$[0],b=_ref3$[1],_ref3$2=_slicedToArray(_ref3[1],2),c=_ref3$2[0],d=_ref3$2[1];var _ref4=_slicedToArray(_ref2,2),x=_ref4[0],y=_ref4[1];return [a*x+b*y,c*x+d*y];};var createRotateMatrix=function createRotateMatrix(x){return [[Math.cos(x),-Math.sin(x)],[Math.sin(x),Math.cos(x)]];};var addVector=function addVector(_ref5,_ref6){var _ref7=_slicedToArray(_ref5,2),a1=_ref7[0],a2=_ref7[1];var _ref8=_slicedToArray(_ref6,2),b1=_ref8[0],b2=_ref8[1];return [a1+b1,a2+b2];};var toRadian=function toRadian(angle){return angle/180*Math.PI;};var clamp=function clamp(value,min,max){return Math.min(Math.max(value,min),max);};var svgArc=function svgArc(options){var x=options.x,y=options.y,r=options.r,start=options.start,end=options.end,_options$rotate=options.rotate,rotate=_options$rotate===void 0?0:_options$rotate;var cx=x;var cy=y;var rx=r;var ry=r;var t1=toRadian(start);var t2=toRadian(end);var delta=(t2-t1)%(2*Math.PI);var phi=toRadian(rotate);var rotMatrix=createRotateMatrix(phi);var _addVector=addVector(rotateVector(rotMatrix,[rx*Math.cos(t1),ry*Math.sin(t1)]),[cx,cy]),_addVector2=_slicedToArray(_addVector,2),sX=_addVector2[0],sY=_addVector2[1];var _addVector3=addVector(rotateVector(rotMatrix,[rx*Math.cos(t1+delta),ry*Math.sin(t1+delta)]),[cx,cy]),_addVector4=_slicedToArray(_addVector3,2),eX=_addVector4[0],eY=_addVector4[1];var fA=delta>Math.PI?1:0;var fS=delta>0?1:0;return ["M",sX,sY,"A",rx,ry,phi/(2*Math.PI)*360,fA,fS,eX,eY].join(" ");};var strokeDashArc=function strokeDashArc(from,to,min,max,radius){var maxAngle=arguments.length>5&&arguments[5]!==undefined?arguments[5]:MAX_ANGLE$1;var linePadding=arguments.length>6?arguments[6]:undefined;var offset=arguments.length>7?arguments[7]:undefined;var invertedMode=arguments.length>8?arguments[8]:undefined;var start=valueToPercentage(from,min,max,from==to?invertedMode:false);var end=valueToPercentage(to,min,max,invertedMode);var padding=linePadding?linePadding:0;var track=radius*2*Math.PI*maxAngle/360;var arc=Math.max((end-start)*track-padding,0);var arcOffset=start*track-0.5;var strokeDasharray="".concat(arc," ").concat(track-arc+padding);var strokeDashOffset="-".concat(arcOffset+(offset!==null&&offset!==void 0?offset:0));return [strokeDasharray,strokeDashOffset];};var getAngle=function getAngle(value,min,max){var maxAngle=arguments.length>3&&arguments[3]!==undefined?arguments[3]:MAX_ANGLE$1;var invertedMode=arguments.length>4?arguments[4]:undefined;return valueToPercentage(isNaN(value)?min:value,min,max,invertedMode)*maxAngle;};var valueToPercentage=function valueToPercentage(value,min,max,invertedMode){if(invertedMode){return 1-(clamp(value,min,max)-min)/(max-min);}else {return (clamp(value,min,max)-min)/(max-min);}};var valueToPercentageUnclamped=function valueToPercentageUnclamped(value,min,max){return (value-min)/(max-min);};var currentDashArc=function currentDashArc(value,min,max,radius,startFromZero){var maxAngle=arguments.length>5&&arguments[5]!==undefined?arguments[5]:MAX_ANGLE$1;var linePadding=arguments.length>6?arguments[6]:undefined;var offset=arguments.length>7?arguments[7]:undefined;var invertedMode=arguments.length>8?arguments[8]:undefined;if(startFromZero&&!invertedMode){return strokeDashArc(value>0?0:value,value>0?value:0,min,max,radius,maxAngle,linePadding,offset,invertedMode);}else {return strokeDashArc(min,value,min,max,radius,maxAngle,linePadding,offset,invertedMode);}};function renderPath(pathClass,d){var strokeDash=arguments.length>2&&arguments[2]!==undefined?arguments[2]:undefined;var style=arguments.length>3&&arguments[3]!==undefined?arguments[3]:undefined;return b(_templateObject$b||(_templateObject$b=_taggedTemplateLiteral(["\n    <path\n      class=\"","\"\n      d=","\n      stroke-dasharray=","\n      stroke-dashoffset=","\n      style=","\n    />"])),pathClass,d,o$1(strokeDash?strokeDash[0]:undefined),o$1(strokeDash?strokeDash[1]:undefined),o$1(style));}function renderColorSegments(segments,min,max,radius,smooth_segments){var maxAngle=arguments.length>5&&arguments[5]!==undefined?arguments[5]:MAX_ANGLE$1;if(smooth_segments){return renderSegmentsGradient(segments,min,max,maxAngle);}else {return renderSegments(segments,min,max,radius,maxAngle);}}function renderSegmentsGradient(segments,min,max){var maxAngle=arguments.length>3&&arguments[3]!==undefined?arguments[3]:MAX_ANGLE$1;if(segments){var sortedSegments=_toConsumableArray(segments).sort(function(a,b){return Number(a.from)-Number(b.from);});var gradient="";var angleOffset=maxAngle==180?0:maxAngle>359?0:45;var rotateAngle=maxAngle==180?180:maxAngle>359?90:45;if(maxAngle==180){gradient="from 0.75turn at 50% 97%,";}sortedSegments.map(function(segment,index){var angle=getAngle(Number(segment.from),min,max,maxAngle)+angleOffset;var color=_typeof(segment.color)==="object"?rgbToHex(segment.color):computeCssColor(segment.color);gradient+="".concat(color," ").concat(angle,"deg").concat(index!=sortedSegments.length-1?",":"");});return [b(_templateObject2$a||(_templateObject2$a=_taggedTemplateLiteral(["\n      <foreignObject x=\"-55\" y=\"-55\" width=\"110%\" height="," overflow=\"visible\" transform=\"rotate(",")\">\n        <div style=",">\n        </div>\n      </foreignObject>\n    "])),maxAngle==180?"120%":"110%",rotateAngle,o$2({"width":"110px","height":maxAngle==180?"60px":"110px","background-image":"conic-gradient(".concat(gradient,")")}))];}return [];}function renderSegments(segments,min,max,radius){var maxAngle=arguments.length>4&&arguments[4]!==undefined?arguments[4]:MAX_ANGLE$1;if(segments){var sortedSegments=_toConsumableArray(segments).sort(function(a,b){return Number(a.from)-Number(b.from);});return _toConsumableArray(sortedSegments).map(function(segment,index){var roundEnd;var startAngle=index===0?0:getAngle(Number(segment.from),min,max,maxAngle);var angle=index===sortedSegments.length-1?maxAngle:getAngle(Number(sortedSegments[index+1].from),min,max,maxAngle);var color=_typeof(segment.color)==="object"?rgbToHex(segment.color):computeCssColor(segment.color);var segmentPath=svgArc({x:0,y:0,start:startAngle,end:angle,r:radius});if(index===0||index===sortedSegments.length-1){var endPath=svgArc({x:0,y:0,start:index===0?0:maxAngle,end:index===0?0:maxAngle,r:radius});roundEnd=renderPath("segment",endPath,undefined,o$2({"stroke":color,"stroke-linecap":"round"}));}return b(_templateObject3$7||(_templateObject3$7=_taggedTemplateLiteral(["","\n        ","\n      "])),roundEnd,renderPath("segment",segmentPath,undefined,o$2({"stroke":color})));});}return [];}function computeSegments(numberState,segments,smooth_segments,element){if(segments){var sortedSegments=_toConsumableArray(segments).sort(function(a,b){return Number(a.from)-Number(b.from);});for(var i=0;i<sortedSegments.length;i++){var segment=sortedSegments[i];if(segment&&(numberState>=Number(segment.from)||i===0)&&(i+1==(sortedSegments===null||sortedSegments===void 0?void 0:sortedSegments.length)||numberState<Number(sortedSegments[i+1].from))){if(smooth_segments){var color=_typeof(segment.color)==="object"?rgbToHex(segment.color):computeCssColor(segment.color);if(color.includes("var(--")&&element){color=getComputedStyle(element).getPropertyValue(color.replace(/(var\()|(\))/g,"").trim());}var nextSegment=sortedSegments[i+1]?sortedSegments[i+1]:segment;var nextColor=_typeof(nextSegment.color)==="object"?rgbToHex(nextSegment.color):computeCssColor(nextSegment.color);if(nextColor.includes("var(--")&&element){nextColor=getComputedStyle(element).getPropertyValue(nextColor.replace(/(var\()|(\))/g,"").trim());}return interpolateColor(color,nextColor,valueToPercentage(numberState,Number(segment.from),Number(nextSegment.from)));}else {var _color=_typeof(segment.color)==="object"?rgbToHex(segment.color):computeCssColor(segment.color);return _color;}}}}return undefined;}

function registerCustomCard(params){var windowWithCards=window;windowWithCards.customCards=windowWithCards.customCards||[];windowWithCards.customCards.push(Object.assign(Object.assign({},params),{preview:true,documentationURL:"https://github.com/selvalt7/modern-circular-gauge"}));}

var fireEvent=function fireEvent(node,type,detail,options){options=options||{};detail=detail===null||detail===undefined?{}:detail;var event=new Event(type,{bubbles:options.bubbles===undefined?true:options.bubbles,cancelable:Boolean(options.cancelable),composed:options.composed===undefined?true:options.composed});event.detail=detail;node.dispatchEvent(event);return event;};

var handleAction=function(){var _ref=_asyncToGenerator(_regeneratorRuntime().mark(function _callee(node,_hass,config,action){return _regeneratorRuntime().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:fireEvent(node,"hass-action",{config:config,action:action});case 1:case "end":return _context.stop();}},_callee);}));return function handleAction(_x,_x2,_x3,_x4){return _ref.apply(this,arguments);};}();

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var e$2=e$3(function(_i){function _class(t$1){var _t$strings;var _this;_classCallCheck(this,_class);if(_this=_callSuper(this,_class,[t$1]),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||((_t$strings=t$1.strings)===null||_t$strings===void 0?void 0:_t$strings.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");return _this;}_inherits(_class,_i);return _createClass(_class,[{key:"render",value:function render(t){return " "+Object.keys(t).filter(function(s){return t[s];}).join(" ")+" ";}},{key:"update",value:function update(s,_ref){var _ref2=_slicedToArray(_ref,1),i=_ref2[0];if(void 0===this.st){this.st=new Set(),void 0!==s.strings&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(function(t){return ""!==t;})));for(var _t in i){var _this$nt;i[_t]&&!((_this$nt=this.nt)!==null&&_this$nt!==void 0&&_this$nt.has(_t))&&this.st.add(_t);}return this.render(i);}var r=s.element.classList;var _iterator=_createForOfIteratorHelper(this.st),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var _t3=_step.value;_t3 in i||(r.remove(_t3),this.st.delete(_t3));}}catch(err){_iterator.e(err);}finally{_iterator.f();}for(var _t2 in i){var _this$nt2;var _s=!!i[_t2];_s===this.st.has(_t2)||((_this$nt2=this.nt)===null||_this$nt2===void 0?void 0:_this$nt2.has(_t2))||(_s?(r.add(_t2),this.st.add(_t2)):(r.remove(_t2),this.st.delete(_t2)));}return T;}}]);}(i$2));

var getActionHandler=function getActionHandler(){var body=document.body;if(body.querySelector("action-handler")){return body.querySelector("action-handler");}var actionhandler=document.createElement("action-handler");body.appendChild(actionhandler);return actionhandler;};var actionHandlerBind=function actionHandlerBind(element,options){var actionhandler=getActionHandler();if(!actionhandler){return;}actionhandler.bind(element,options);};var actionHandler=e$3(function(_Directive){function _class(){_classCallCheck(this,_class);return _callSuper(this,_class,arguments);}_inherits(_class,_Directive);return _createClass(_class,[{key:"update",value:function update(part,_ref){var _ref2=_slicedToArray(_ref,1),options=_ref2[0];actionHandlerBind(part.element,options);return T;}},{key:"render",value:function render(_options){}}]);}(i$2));

var subscribeRenderTemplate=function subscribeRenderTemplate(conn,onChange,params){return conn.subscribeMessage(function(msg){return onChange(msg);},Object.assign({type:"render_template"},params));};

var isTemplateRegex=/{%|{{/;var JSTemplateRegex=/^\s*\[\[\[([\s\S]+)\]\]\]\s*$/;var isJSTemplateRegex=/\[\[\[/;var isTemplate=function isTemplate(value){return isTemplateRegex.test(value)||JSTemplateRegex.test(value)||isJSTemplateRegex.test(value);};var isJSTemplate=function isJSTemplate(value){return isJSTemplateRegex.test(value);};

var _templateObject$a,_templateObject2$9,_templateObject3$6,_templateObject4$5,_templateObject5$3,_templateObject6$3,_templateObject7$3,_templateObject8$2,_templateObject9$2,_templateObject10$2,_templateObject11$2;var ModernCircularGaugeElement=function(_LitElement){function ModernCircularGaugeElement(){var _this;_classCallCheck(this,ModernCircularGaugeElement);_this=_callSuper(this,ModernCircularGaugeElement,arguments);_this.min=DEFAULT_MIN;_this.max=DEFAULT_MAX;_this.value=0;_this.radius=47;_this.gaugeType="standard";_this.rotateGauge=false;_this.smoothSegments=false;_this.needle=false;_this.startFromZero=false;_this.invertedMode=false;_this.outter=false;_this.error=false;_this.disableBackground=false;_this.gaugeRotationOffset=0;_this.flipGauge=false;_this.linePadding=0;_this.lineOffset=0;_this._updated=false;_this._maxAngle=MAX_ANGLE$1;return _this;}_inherits(ModernCircularGaugeElement,_LitElement);return _createClass(ModernCircularGaugeElement,[{key:"connectedCallback",value:function connectedCallback(){var _a;_superPropGet(ModernCircularGaugeElement,"connectedCallback",this,3)([]);if(!this._updated){this._maxAngle=(_a=GAUGE_TYPE_ANGLES[this.gaugeType])!==null&&_a!==void 0?_a:MAX_ANGLE$1;this._path=svgArc({x:0,y:0,start:0,end:this._maxAngle,r:this.radius});this._rotateAngle=360-this._maxAngle/2-90+(this.gaugeType=="full"&&this.rotateGauge?180:0);this._updated=true;}}},{key:"render",value:function render(){var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_0,_1,_2,_3,_4,_5;if(!this._path){return E;}if(this.error){return x(_templateObject$a||(_templateObject$a=_taggedTemplateLiteral(["\n      <svg viewBox=\"-50 -50 100 ","\" preserveAspectRatio=\"xMidYMid\"\n        overflow=\"visible\"\n      >\n        <g transform=\"rotate(",")\">\n          ","\n        </g>\n      </svg>"])),this.gaugeType=="half"?50:100,this._rotateAngle,!this.disableBackground?renderPath("arc clear",this._path):E);}if(this.outter){var current=strokeDashArc(this.value,this.value,this.min,this.max,this.radius,this._maxAngle,undefined,undefined,this.invertedMode);return x(_templateObject2$9||(_templateObject2$9=_taggedTemplateLiteral(["\n      <svg viewBox=\"-50 -50 100 ","\" preserveAspectRatio=\"xMidYMid\"\n        overflow=\"visible\"\n        style=","\n      >\n        <g transform=\"rotate(",")\">\n          ","\n          ","\n        </g>\n      </svg>\n      "])),this.gaugeType=="half"?50:100,o$2({"--gauge-stroke-width":((_a=this.foregroundStyle)===null||_a===void 0?void 0:_a.width)?"".concat((_b=this.foregroundStyle)===null||_b===void 0?void 0:_b.width,"px"):undefined,"--gauge-color":((_c=this.foregroundStyle)===null||_c===void 0?void 0:_c.color)&&((_d=this.foregroundStyle)===null||_d===void 0?void 0:_d.color)!="adaptive"?computeCssColor((_e=this.foregroundStyle)===null||_e===void 0?void 0:_e.color):computeSegments(this.value,this.segments,this.smoothSegments,this)}),this._rotateAngle,!((_f=this.foregroundStyle)===null||_f===void 0?void 0:_f.color)?renderPath("dot border",this._path,current,o$2({"opacity":(_h=(_g=this.foregroundStyle)===null||_g===void 0?void 0:_g.opacity)!==null&&_h!==void 0?_h:1,"stroke-width":(_j=this.foregroundStyle)===null||_j===void 0?void 0:_j.width})):E,renderPath("dot",this._path,current,o$2({"opacity":(_l=(_k=this.foregroundStyle)===null||_k===void 0?void 0:_k.opacity)!==null&&_l!==void 0?_l:1,"stroke":computeCssColor((_o=(_m=this.foregroundStyle)===null||_m===void 0?void 0:_m.color)!==null&&_o!==void 0?_o:""),"stroke-width":(_p=this.foregroundStyle)===null||_p===void 0?void 0:_p.width})));}else {var min=this.flipGauge?-this.max:this.min;var max=this.flipGauge?this.min:this.max;var _current=this.needle?undefined:currentDashArc(this.value*(this.flipGauge?-1:1.0),min,max,this.radius,this.startFromZero||this.flipGauge,this._maxAngle,this.linePadding,this.lineOffset,this.invertedMode);var needle=this.needle?strokeDashArc(this.value,this.value,min,max,this.radius,this._maxAngle,undefined,undefined,this.invertedMode):undefined;return x(_templateObject3$6||(_templateObject3$6=_taggedTemplateLiteral(["\n        <svg viewBox=\"-50 -50 100 ","\" preserveAspectRatio=\"xMidYMid\"\n          overflow=\"visible\"\n          style=","\n        >\n          <g transform=\"rotate(",")\">\n            <defs>\n              <mask id=\"needle-border-mask\">\n                <rect x=\"-70\" y=\"-70\" width=\"140\" height=\"140\" fill=\"white\"/>\n                ","\n              </mask>\n              ","\n              <mask id=\"gradient-current-path\">\n                ","\n              </mask>\n            </defs>\n            ","\n            ","\n            ","\n          </g>\n        </svg>\n      "])),this.gaugeType=="half"?50:100,o$2({"--gauge-stroke-width":((_q=this.foregroundStyle)===null||_q===void 0?void 0:_q.width)?"".concat((_r=this.foregroundStyle)===null||_r===void 0?void 0:_r.width,"px"):undefined,"--gauge-color":((_s=this.foregroundStyle)===null||_s===void 0?void 0:_s.color)&&((_t=this.foregroundStyle)===null||_t===void 0?void 0:_t.color)!="adaptive"?computeCssColor((_u=this.foregroundStyle)===null||_u===void 0?void 0:_u.color):computeSegments(this.value,this.segments,this.smoothSegments,this)}),this._rotateAngle,needle?b(_templateObject4$5||(_templateObject4$5=_taggedTemplateLiteral(["\n                <path\n                  class=\"needle-border\"\n                  d=","\n                  stroke-dasharray=\"","\"\n                  stroke-dashoffset=\"","\"\n                  stroke=\"black\"\n                />\n                "])),this._path,needle[0],needle[1]):E,!this.disableBackground?b(_templateObject5$3||(_templateObject5$3=_taggedTemplateLiteral(["\n              <mask id=\"gradient-path\">\n                ","\n              </mask>\n              "])),renderPath("arc",this._path,undefined,o$2({"stroke":"white","stroke-width":((_v=this.backgroundStyle)===null||_v===void 0?void 0:_v.width)?"".concat((_w=this.backgroundStyle)===null||_w===void 0?void 0:_w.width,"px"):undefined}))):E,_current?renderPath("arc current",this._path,_current,o$2({"stroke":"white","visibility":this.value<=min&&min>=0?"hidden":"visible"})):E,!this.disableBackground?b(_templateObject6$3||(_templateObject6$3=_taggedTemplateLiteral(["\n            <g class=\"background\" mask="," style=",">\n              ","\n            </g>\n            "])),o$1(needle?"url(#needle-border-mask)":undefined),o$2({"opacity":(_x=this.backgroundStyle)===null||_x===void 0?void 0:_x.opacity,"--gauge-stroke-width":((_y=this.backgroundStyle)===null||_y===void 0?void 0:_y.width)?"".concat((_z=this.backgroundStyle)===null||_z===void 0?void 0:_z.width,"px"):undefined}),this.segments&&(needle||((_0=this.backgroundStyle)===null||_0===void 0?void 0:_0.color)=="adaptive")?b(_templateObject7$3||(_templateObject7$3=_taggedTemplateLiteral(["\n              <g class="," mask=",">\n                ","\n              </g>"])),e$2({"segments":true,"segments-opaque":typeof((_1=this.backgroundStyle)===null||_1===void 0?void 0:_1.opacity)!="undefined"}),o$1(this.smoothSegments?"url(#gradient-path)":undefined),renderColorSegments(this.segments,min,max,this.radius,this.smoothSegments,this._maxAngle)):b(_templateObject8$2||(_templateObject8$2=_taggedTemplateLiteral(["\n              ","\n              "])),renderPath("arc clear",this._path,undefined,o$2({"stroke":((_2=this.backgroundStyle)===null||_2===void 0?void 0:_2.color)&&this.backgroundStyle.color!="adaptive"?computeCssColor(this.backgroundStyle.color):undefined})))):E,_current?((_3=this.foregroundStyle)===null||_3===void 0?void 0:_3.color)=="adaptive"&&this.segments?b(_templateObject9$2||(_templateObject9$2=_taggedTemplateLiteral(["\n            <g class=\"foreground-segments\" mask=\"url(#gradient-current-path)\" style=",">\n              ","\n            </g>\n            "])),o$2({"opacity":(_4=this.foregroundStyle)===null||_4===void 0?void 0:_4.opacity}),renderColorSegments(this.segments,min,max,this.radius,this.smoothSegments,this._maxAngle)):renderPath("arc current",this._path,_current,o$2({"visibility":(this.invertedMode?this.value>=max:this.value<=min&&min>=0)||this.flipGauge&&this.value<=this.min?"hidden":"visible","opacity":(_5=this.foregroundStyle)===null||_5===void 0?void 0:_5.opacity})):E,needle?b(_templateObject10$2||(_templateObject10$2=_taggedTemplateLiteral(["\n            ","\n            "])),renderPath("needle",this._path,needle)):E);}}}],[{key:"styles",get:function get(){return i$6(_templateObject11$2||(_templateObject11$2=_taggedTemplateLiteral(["\n    :host {\n      --gauge-primary-color: var(--light-blue-color);\n\n      --gauge-color: var(--gauge-primary-color);\n      --gauge-stroke-width: 6px;\n    }\n    svg {\n      width: 100%;\n      height: 100%;\n      display: block;\n    }\n    g {\n      fill: none;\n    }\n    .arc {\n      fill: none;\n      stroke-linecap: round;\n      stroke-width: var(--gauge-stroke-width);\n    }\n\n    .arc.clear {\n      stroke: var(--primary-background-color);\n    }\n\n    .arc.current {\n      stroke: var(--gauge-color);\n      transition: all 1s ease 0s;\n    }\n\n    .segment {\n      fill: none;\n      stroke-width: var(--gauge-stroke-width);\n    }\n\n    .segments {\n      opacity: var(--gauge-segments-opacity, 0.45);\n    }\n\n    .segments-opaque {\n      opacity: var(--gauge-segments-opacity, 1);\n    }\n\n    .needle {\n      fill: none;\n      stroke-linecap: round;\n      stroke-width: var(--gauge-stroke-width);\n      stroke: var(--gauge-color);\n      transition: all 1s ease 0s;\n    }\n\n    .needle-border {\n      fill: none;\n      stroke-linecap: round;\n      stroke-width: calc(var(--gauge-stroke-width) + 4px);\n      transition: all 1s ease 0s, stroke 0.3s ease-out;\n    }\n    \n    .dot {\n      fill: none;\n      stroke-linecap: round;\n      stroke-width: calc(var(--gauge-stroke-width) / 2);\n      stroke: var(--primary-text-color);\n      transition: all 1s ease 0s;\n    }\n\n    .dot.border {\n      stroke: var(--gauge-color);\n      stroke-width: var(--gauge-stroke-width);\n    }\n    "])));}}]);}(i$3);__decorate([n$2({type:Number})],ModernCircularGaugeElement.prototype,"min",void 0);__decorate([n$2({type:Number})],ModernCircularGaugeElement.prototype,"max",void 0);__decorate([n$2({type:Number})],ModernCircularGaugeElement.prototype,"value",void 0);__decorate([n$2({type:Number})],ModernCircularGaugeElement.prototype,"radius",void 0);__decorate([n$2({type:String})],ModernCircularGaugeElement.prototype,"gaugeType",void 0);__decorate([n$2({type:Boolean})],ModernCircularGaugeElement.prototype,"rotateGauge",void 0);__decorate([n$2({type:Array})],ModernCircularGaugeElement.prototype,"segments",void 0);__decorate([n$2({type:Boolean})],ModernCircularGaugeElement.prototype,"smoothSegments",void 0);__decorate([n$2({type:Object})],ModernCircularGaugeElement.prototype,"foregroundStyle",void 0);__decorate([n$2({type:Object})],ModernCircularGaugeElement.prototype,"backgroundStyle",void 0);__decorate([n$2({type:Boolean})],ModernCircularGaugeElement.prototype,"needle",void 0);__decorate([n$2({type:Boolean})],ModernCircularGaugeElement.prototype,"startFromZero",void 0);__decorate([n$2({type:Boolean})],ModernCircularGaugeElement.prototype,"invertedMode",void 0);__decorate([n$2({type:Boolean})],ModernCircularGaugeElement.prototype,"outter",void 0);__decorate([n$2({type:Boolean})],ModernCircularGaugeElement.prototype,"error",void 0);__decorate([n$2({type:Boolean})],ModernCircularGaugeElement.prototype,"disableBackground",void 0);__decorate([n$2({type:Number})],ModernCircularGaugeElement.prototype,"gaugeRotationOffset",void 0);__decorate([n$2({type:Boolean})],ModernCircularGaugeElement.prototype,"flipGauge",void 0);__decorate([n$2({type:Number})],ModernCircularGaugeElement.prototype,"linePadding",void 0);__decorate([n$2({type:Number})],ModernCircularGaugeElement.prototype,"lineOffset",void 0);__decorate([r$2()],ModernCircularGaugeElement.prototype,"_updated",void 0);__decorate([r$2()],ModernCircularGaugeElement.prototype,"_path",void 0);__decorate([r$2()],ModernCircularGaugeElement.prototype,"_rotateAngle",void 0);__decorate([r$2()],ModernCircularGaugeElement.prototype,"_maxAngle",void 0);ModernCircularGaugeElement=__decorate([t$1("modern-circular-gauge-element")],ModernCircularGaugeElement);

var computeDomain=function computeDomain(entityId){return entityId.substring(0,entityId.indexOf("."));};

var computeStateDomain=function computeStateDomain(stateObj){if(!stateObj||!stateObj.entity_id){return "";}return computeDomain(stateObj.entity_id);};

var NumberFormat;(function(NumberFormat){NumberFormat["language"]="language";NumberFormat["system"]="system";NumberFormat["comma_decimal"]="comma_decimal";NumberFormat["decimal_comma"]="decimal_comma";NumberFormat["space_comma"]="space_comma";NumberFormat["none"]="none";})(NumberFormat||(NumberFormat={}));var TimeFormat;(function(TimeFormat){TimeFormat["language"]="language";TimeFormat["system"]="system";TimeFormat["am_pm"]="12";TimeFormat["twenty_four"]="24";})(TimeFormat||(TimeFormat={}));var TimeZone;(function(TimeZone){TimeZone["local"]="local";TimeZone["server"]="server";})(TimeZone||(TimeZone={}));var DateFormat;(function(DateFormat){DateFormat["language"]="language";DateFormat["system"]="system";DateFormat["DMY"]="DMY";DateFormat["MDY"]="MDY";DateFormat["YMD"]="YMD";})(DateFormat||(DateFormat={}));var FirstWeekday;(function(FirstWeekday){FirstWeekday["language"]="language";FirstWeekday["monday"]="monday";FirstWeekday["tuesday"]="tuesday";FirstWeekday["wednesday"]="wednesday";FirstWeekday["thursday"]="thursday";FirstWeekday["friday"]="friday";FirstWeekday["saturday"]="saturday";FirstWeekday["sunday"]="sunday";})(FirstWeekday||(FirstWeekday={}));

var numberFormatToLocale=function numberFormatToLocale(localeOptions){switch(localeOptions.number_format){case NumberFormat.comma_decimal:return ["en-US","en"];case NumberFormat.decimal_comma:return ["de","es","it"];case NumberFormat.space_comma:return ["fr","sv","cs"];case NumberFormat.system:return undefined;default:return localeOptions.language;}};var round=function round(value){var precision=arguments.length>1&&arguments[1]!==undefined?arguments[1]:2;return Math.round(value*Math.pow(10,precision))/Math.pow(10,precision);};var formatNumber=function formatNumber(num,localeOptions,options){var locale=localeOptions?numberFormatToLocale(localeOptions):undefined;Number.isNaN=Number.isNaN||function isNaN(input){return typeof input==="number"&&isNaN(input);};if((localeOptions===null||localeOptions===void 0?void 0:localeOptions.number_format)!==NumberFormat.none&&!Number.isNaN(Number(num))){return new Intl.NumberFormat(locale,getDefaultFormatOptions(num,options)).format(Number(num));}if(!Number.isNaN(Number(num))&&num!==""&&(localeOptions===null||localeOptions===void 0?void 0:localeOptions.number_format)===NumberFormat.none){return new Intl.NumberFormat("en-US",getDefaultFormatOptions(num,Object.assign(Object.assign({},options),{useGrouping:false}))).format(Number(num));}if(typeof num==="string"){return num;}return "".concat(round(num,options===null||options===void 0?void 0:options.maximumFractionDigits).toString()).concat((options===null||options===void 0?void 0:options.style)==="currency"?" ".concat(options.currency):"");};var getNumberFormatOptions=function getNumberFormatOptions(entityState,entity){var _a;var precision=entity===null||entity===void 0?void 0:entity.display_precision;if(precision!=null){return {maximumFractionDigits:precision,minimumFractionDigits:precision};}if(Number.isInteger(Number((_a=entityState===null||entityState===void 0?void 0:entityState.attributes)===null||_a===void 0?void 0:_a.step))&&Number.isInteger(Number(entityState===null||entityState===void 0?void 0:entityState.state))){return {maximumFractionDigits:0};}return undefined;};var getDefaultFormatOptions=function getDefaultFormatOptions(num,options){var defaultOptions=Object.assign({maximumFractionDigits:2},options);if(typeof num!=="string"){return defaultOptions;}if(!options||options.minimumFractionDigits===undefined&&options.maximumFractionDigits===undefined){var digits=num.indexOf(".")>-1?num.split(".")[1].length:0;defaultOptions.minimumFractionDigits=digits;defaultOptions.maximumFractionDigits=digits;}return defaultOptions;};

var leftPad=function leftPad(num){return num<10?"0".concat(num):num;};function secondsToDuration(d){var showSeconds=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;if(d===undefined){return undefined;}var h=Math.floor(d/3600);var m=Math.floor(d%3600/60);if(showSeconds){var s=Math.floor(d%3600%60);if(h>0){return "".concat(h,":").concat(leftPad(m),":").concat(leftPad(s));}if(m>0){return "".concat(m,":").concat(leftPad(s));}if(s>0){return ""+s;}}if(h>0){return "".concat(h,":").concat(leftPad(m));}if(m>0){return "00:".concat(leftPad(m));}return undefined;}

function computeState(hass,stateObj,entityAttribute,stateOverride,decimals,showSeconds){var _a,_b,_c,_d;if(!stateObj&&stateOverride!==undefined){if(!Number.isNaN(Number(stateOverride))){var formatOptions=getDefaultFormatOptions(stateOverride,{maximumFractionDigits:decimals,minimumFractionDigits:decimals});return formatNumber(stateOverride,hass===null||hass===void 0?void 0:hass.locale,formatOptions);}return stateOverride;}if(stateObj){var domain=computeStateDomain(stateObj);var secondsUntil;if(((_a=stateObj===null||stateObj===void 0?void 0:stateObj.attributes)===null||_a===void 0?void 0:_a.device_class)==="timestamp"||TIMESTAMP_STATE_DOMAINS.includes(domain)){var timestamp=new Date(stateObj.state);secondsUntil=Math.round(Math.abs(timestamp.getTime()-Date.now())/1000);return secondsToDuration(secondsUntil,showSeconds!==null&&showSeconds!==void 0?showSeconds:true)||"0";}if(domain==="timer"){secondsUntil=0;if(stateObj.state==="active"){var _timestamp=new Date((_b=stateObj.attributes)===null||_b===void 0?void 0:_b.finishes_at);secondsUntil=Math.round(Math.abs(_timestamp.getTime()-Date.now())/1000);return secondsToDuration(secondsUntil,showSeconds!==null&&showSeconds!==void 0?showSeconds:true)||"0";}}var state=(_c=stateOverride!==null&&stateOverride!==void 0?stateOverride:stateObj.attributes[entityAttribute])!==null&&_c!==void 0?_c:stateObj.state;var attributes=(_d=stateObj.attributes)!==null&&_d!==void 0?_d:undefined;var _formatOptions=Object.assign({},getNumberFormatOptions({state:state,attributes:attributes},hass===null||hass===void 0?void 0:hass.entities[stateObj===null||stateObj===void 0?void 0:stateObj.entity_id]));if(decimals!==undefined){_formatOptions.maximumFractionDigits=decimals;_formatOptions.minimumFractionDigits=decimals;}var entityState=Number.isNaN(state)?state:formatNumber(state,hass===null||hass===void 0?void 0:hass.locale,_formatOptions);return entityState;}return "";}

var _templateObject$9,_templateObject2$8,_templateObject3$5,_templateObject4$4;var ModernCircularGaugeState=function(_LitElement){function ModernCircularGaugeState(){var _this;_classCallCheck(this,ModernCircularGaugeState);_this=_callSuper(this,ModernCircularGaugeState,arguments);_this.showUnit=true;_this.gaugeType="standard";_this.small=false;_this.stateMargin=82;_this.showSeconds=true;_this._updated=false;return _this;}_inherits(ModernCircularGaugeState,_LitElement);return _createClass(ModernCircularGaugeState,[{key:"connectedCallback",value:function connectedCallback(){_superPropGet(ModernCircularGaugeState,"connectedCallback",this,3)([]);}},{key:"disconnectedCallback",value:function disconnectedCallback(){_superPropGet(ModernCircularGaugeState,"disconnectedCallback",this,3)([]);}},{key:"firstUpdated",value:function firstUpdated(_changedProperties){this._updated=true;this._scaleText();}},{key:"updated",value:function updated(_changedProperties){_superPropGet(ModernCircularGaugeState,"updated",this,3)([_changedProperties]);if(!this._updated){return;}this._scaleText();}},{key:"_scaleText",value:function _scaleText(){var _a,_b;var svgRoot=this.shadowRoot.querySelector(".state");if(!svgRoot){return;}var svgText=svgRoot.querySelector("text");var bbox=svgText.getBBox();var maxWidth=Math.abs(this.stateMargin*(((_a=this.horizontalOffset)!==null&&_a!==void 0?_a:0)==0?1.0:0.5))-Math.abs(((_b=this.verticalOffset)!==null&&_b!==void 0?_b:0)*0.5);if(bbox.width>maxWidth){var scale=maxWidth/bbox.width;if(this.verticalOffset){svgText.setAttribute("transform","translate(0 ".concat(this.verticalOffset,") scale(").concat(scale,") translate(0 ").concat(-this.verticalOffset,")"));}else {svgText.setAttribute("transform","scale(".concat(scale,")"));}}else {svgText.removeAttribute("transform");}}},{key:"render",value:function render(){var _a,_b;if(!this.hass||!this.stateObj&&this.stateOverride===undefined){return x(_templateObject$9||(_templateObject$9=_taggedTemplateLiteral([""])));}var state=computeState(this.hass,this.stateObj,this.entityAttribute,this.stateOverride,this.decimals,this.showSeconds);var verticalOffset=(_a=this.verticalOffset)!==null&&_a!==void 0?_a:0;return x(_templateObject2$8||(_templateObject2$8=_taggedTemplateLiteral(["\n    <svg class=\"state ","\" overflow=\"visible\" viewBox=\""," -50 100 ","\">\n      <text x=\"0\" y="," class=\"value\">\n        ","\n        ","\n      </text>\n      <text class=\"state-label\" style="," y=",">\n        ","\n      </text>\n    </svg>\n    "])),e$2({"small":this.small}),-50+((_b=this.horizontalOffset)!==null&&_b!==void 0?_b:0),this.gaugeType=="half"?50:100,verticalOffset,state,this.showUnit?this.small?this.unit:b(_templateObject3$5||(_templateObject3$5=_taggedTemplateLiteral(["\n        <tspan class=\"unit\" dx="," dy=",">","</tspan>\n        "])),-4,-6,this.unit):E,o$2({"font-size":this.labelFontSize?"".concat(this.labelFontSize,"px"):undefined}),verticalOffset+(this.small?9*Math.sign(verticalOffset):13),this.label);}}],[{key:"styles",get:function get(){return i$6(_templateObject4$4||(_templateObject4$4=_taggedTemplateLiteral(["\n    :host {\n      --state-text-color: var(--primary-text-color);\n      --state-font-size: 24px;\n      --state-pointer-events: auto;\n\n      pointer-events: none;\n    }\n\n    :host(.preview) {\n      --state-pointer-events: none;\n    }\n\n    svg {\n      width: 100%;\n      height: 100%;\n      display: block;\n      pointer-events: none;\n    }\n\n    .state {\n      text-anchor: middle;\n    }\n\n    .value {\n      font-size: var(--state-font-size-override, var(--state-font-size));\n      fill: var(--state-text-color-override, var(--state-text-color));\n      dominant-baseline: middle;\n      pointer-events: var(--state-pointer-events);\n    }\n\n    .unit {\n      font-size: var(--unit-font-size, .33em);\n      opacity: 0.6;\n    }\n\n    .small {\n      --state-text-color: var(--state-text-color-override, var(--secondary-text-color));\n    }\n\n    .small .unit {\n      opacity: 1;\n      font-size: inherit;\n    }\n\n    .small .value {\n      --state-font-size: 10px;\n      fill: var(--state-text-color);\n    }\n\n    .state-label {\n      font-size: 0.49em;\n      fill: var(--state-label-color-override, var(--secondary-text-color));\n      dominant-baseline: middle;\n    }\n    "])));}}]);}(i$3);__decorate([n$2({attribute:false})],ModernCircularGaugeState.prototype,"hass",void 0);__decorate([n$2({type:Object})],ModernCircularGaugeState.prototype,"stateObj",void 0);__decorate([n$2({type:String})],ModernCircularGaugeState.prototype,"entityAttribute",void 0);__decorate([n$2()],ModernCircularGaugeState.prototype,"unit",void 0);__decorate([n$2({type:Boolean})],ModernCircularGaugeState.prototype,"showUnit",void 0);__decorate([n$2()],ModernCircularGaugeState.prototype,"label",void 0);__decorate([n$2({type:Number})],ModernCircularGaugeState.prototype,"decimals",void 0);__decorate([n$2({type:Number})],ModernCircularGaugeState.prototype,"labelFontSize",void 0);__decorate([n$2({type:String})],ModernCircularGaugeState.prototype,"gaugeType",void 0);__decorate([n$2({type:Boolean})],ModernCircularGaugeState.prototype,"small",void 0);__decorate([n$2({type:Number})],ModernCircularGaugeState.prototype,"verticalOffset",void 0);__decorate([n$2({type:Number})],ModernCircularGaugeState.prototype,"horizontalOffset",void 0);__decorate([n$2()],ModernCircularGaugeState.prototype,"stateOverride",void 0);__decorate([n$2({type:Number})],ModernCircularGaugeState.prototype,"stateMargin",void 0);__decorate([n$2({type:Boolean})],ModernCircularGaugeState.prototype,"showSeconds",void 0);__decorate([r$2()],ModernCircularGaugeState.prototype,"_updated",void 0);ModernCircularGaugeState=__decorate([t$1("modern-circular-gauge-state")],ModernCircularGaugeState);

function getEntityPictureUrl(hass,entity){if(!hass||!entity||!entity.attributes){return undefined;}var entityPicture=entity.attributes.entity_picture_local||entity.attributes.entity_picture;if(!entityPicture)return undefined;var imageUrl=hass.hassUrl(entityPicture);return imageUrl;}

var _templateObject$8,_templateObject2$7,_templateObject3$4,_templateObject4$3;var ICONPOSITIONS=[-3.6,-4.8,-5.52,-12];var ICONSIZES=[0.12,0.12,0.18,0.3];var ModernCircularGaugeIcon=function(_LitElement){function ModernCircularGaugeIcon(){var _this;_classCallCheck(this,ModernCircularGaugeIcon);_this=_callSuper(this,ModernCircularGaugeIcon,arguments);_this.showEntityPicture=false;_this.position=2;_this._updated=false;return _this;}_inherits(ModernCircularGaugeIcon,_LitElement);return _createClass(ModernCircularGaugeIcon,[{key:"firstUpdated",value:function firstUpdated(_changedProperties){_superPropGet(ModernCircularGaugeIcon,"firstUpdated",this,3)([_changedProperties]);}},{key:"updated",value:function updated(_changedProperties){var _this2=this;_superPropGet(ModernCircularGaugeIcon,"updated",this,3)([_changedProperties]);if(this._updated){return;}if(this.showEntityPicture){return;}this._haStateIcon.then(function(){var _ref=_asyncToGenerator(_regeneratorRuntime().mark(function _callee(haStateIcon){var observer;return _regeneratorRuntime().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:if(!(!haStateIcon||!haStateIcon.shadowRoot)){_context.next=2;break;}return _context.abrupt("return");case 2:_this2._getSvgFromHaStateIcon(haStateIcon);if(!_this2._updated){observer=new MutationObserver(function(){_this2._getSvgFromHaStateIcon(haStateIcon);observer.disconnect();});observer.observe(haStateIcon.shadowRoot,{childList:true,subtree:true});}case 4:case "end":return _context.stop();}},_callee);}));return function(_x){return _ref.apply(this,arguments);};}());}},{key:"_getSvgFromHaStateIcon",value:function _getSvgFromHaStateIcon(haStateIconEl){var _this3=this;var _a,_b;var haIcon=(_a=haStateIconEl.shadowRoot)===null||_a===void 0?void 0:_a.querySelector('ha-icon');if(!haIcon){return;}(_b=haIcon===null||haIcon===void 0?void 0:haIcon.updateComplete)===null||_b===void 0?void 0:_b.then(function(){var _a,_b;var haSvgIcon=(_a=haIcon===null||haIcon===void 0?void 0:haIcon.shadowRoot)===null||_a===void 0?void 0:_a.querySelector('ha-svg-icon');var svg=(_b=haSvgIcon===null||haSvgIcon===void 0?void 0:haSvgIcon.shadowRoot)===null||_b===void 0?void 0:_b.querySelector('svg');if(svg){var gaugeIcon=_this3.shadowRoot.querySelector('.gauge-icon-group');var iconGroup=svg.querySelector('g');if(gaugeIcon&&iconGroup){gaugeIcon.appendChild(iconGroup);_this3._updated=true;}}});}},{key:"_computeIconPosition",value:function _computeIconPosition(){if(this.iconVerticalPositionOverride!==undefined){return this.iconVerticalPositionOverride*24*-0.01;}return ICONPOSITIONS[this.position];}},{key:"_computeIconSize",value:function _computeIconSize(){if(this.iconSizeOverride!==undefined){return this.iconSizeOverride*0.01;}return ICONSIZES[this.position];}},{key:"render",value:function render(){var imageUrl=this.showEntityPicture?getEntityPictureUrl(this.hass,this.stateObj):undefined;return x(_templateObject$8||(_templateObject$8=_taggedTemplateLiteral(["\n    ","\n    <svg class=\"gauge-icon\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g class=\"gauge-icon-group\" transform=\"translate(0 12) translate(0 ",") translate(12 12) scale(",") translate(-12 -12)\">\n        ","\n      </g>\n    </svg>"])),!imageUrl?x(_templateObject2$7||(_templateObject2$7=_taggedTemplateLiteral(["\n      <ha-state-icon\n        .hass=","\n        .stateObj=","\n        .icon=","\n      ></ha-state-icon>\n    "])),this.hass,this.stateObj,this.icon):E,this._computeIconPosition(),this._computeIconSize(),imageUrl?b(_templateObject3$4||(_templateObject3$4=_taggedTemplateLiteral(["\n          <image href=\"","\" width=\"24\" height=\"24\"></image>\n        "])),imageUrl):E);}}]);}(i$3);ModernCircularGaugeIcon.styles=i$6(_templateObject4$3||(_templateObject4$3=_taggedTemplateLiteral(["\n    :host {\n      width: 100%;\n      height: 100%;\n      fill: var(--icon-primary-color, currentcolor);\n    }\n\n    svg {\n      width: 100%;\n      height: 100%;\n      display: block;\n    }\n\n    path.primary-path {\n      opacity: var(--icon-primary-opactity, 1);\n    }\n    path.secondary-path {\n      fill: var(--icon-secondary-color, currentcolor);\n      opacity: var(--icon-secondary-opactity, 0.5);\n    }\n\n    image {\n      clip-path: inset(0 round 50%);\n    }\n\n    ha-state-icon {\n      visibility: hidden;\n      position: absolute;\n    }\n  "])));__decorate([n$2({attribute:false})],ModernCircularGaugeIcon.prototype,"hass",void 0);__decorate([n$2({attribute:false})],ModernCircularGaugeIcon.prototype,"stateObj",void 0);__decorate([n$2()],ModernCircularGaugeIcon.prototype,"icon",void 0);__decorate([n$2({type:Boolean})],ModernCircularGaugeIcon.prototype,"showEntityPicture",void 0);__decorate([n$2({type:Number})],ModernCircularGaugeIcon.prototype,"position",void 0);__decorate([n$2({type:Number})],ModernCircularGaugeIcon.prototype,"iconVerticalPositionOverride",void 0);__decorate([n$2({type:Number})],ModernCircularGaugeIcon.prototype,"iconSizeOverride",void 0);__decorate([r$1('ha-state-icon')],ModernCircularGaugeIcon.prototype,"_haStateIcon",void 0);__decorate([r$2()],ModernCircularGaugeIcon.prototype,"_updated",void 0);ModernCircularGaugeIcon=__decorate([t$1("modern-circular-gauge-icon")],ModernCircularGaugeIcon);

var isComponentLoaded=function isComponentLoaded(hass,component){return hass&&hass.config.components.includes(component);};

var HistoryStream=function(){function HistoryStream(hass,hoursToShow){_classCallCheck(this,HistoryStream);this.hass=hass;this.hoursToShow=hoursToShow;this.combinedHistory={};}return _createClass(HistoryStream,[{key:"processMessage",value:function processMessage(streamMessage){if(!this.combinedHistory||!Object.keys(this.combinedHistory).length){this.combinedHistory=streamMessage.states;return this.combinedHistory;}if(!Object.keys(streamMessage.states).length){return this.combinedHistory;}var purgeBeforePythonTime=this.hoursToShow?(new Date().getTime()-60*60*this.hoursToShow*1000)/1000:undefined;var newHistory={};for(var _i=0,_Object$keys=Object.keys(this.combinedHistory);_i<_Object$keys.length;_i++){var entityId=_Object$keys[_i];newHistory[entityId]=[];}for(var _i2=0,_Object$keys2=Object.keys(streamMessage.states);_i2<_Object$keys2.length;_i2++){var _entityId=_Object$keys2[_i2];newHistory[_entityId]=[];}for(var _i3=0,_Object$keys3=Object.keys(newHistory);_i3<_Object$keys3.length;_i3++){var _entityId2=_Object$keys3[_i3];if(_entityId2 in this.combinedHistory&&_entityId2 in streamMessage.states){var entityCombinedHistory=this.combinedHistory[_entityId2];var lastEntityCombinedHistory=entityCombinedHistory[entityCombinedHistory.length-1];newHistory[_entityId2]=entityCombinedHistory.concat(streamMessage.states[_entityId2]);if(streamMessage.states[_entityId2][0].lu<lastEntityCombinedHistory.lu){newHistory[_entityId2]=newHistory[_entityId2].sort(function(a,b){return a.lu-b.lu;});}}else if(_entityId2 in this.combinedHistory){newHistory[_entityId2]=this.combinedHistory[_entityId2];}else {newHistory[_entityId2]=streamMessage.states[_entityId2];}if(purgeBeforePythonTime&&_entityId2 in this.combinedHistory){var expiredStates=newHistory[_entityId2].filter(function(state){return state.lu<purgeBeforePythonTime;});if(!expiredStates.length){continue;}newHistory[_entityId2]=newHistory[_entityId2].filter(function(state){return state.lu>=purgeBeforePythonTime;});if(newHistory[_entityId2].length&&newHistory[_entityId2][0].lu===purgeBeforePythonTime){continue;}var lastExpiredState=expiredStates[expiredStates.length-1];lastExpiredState.lu=purgeBeforePythonTime;newHistory[_entityId2].unshift(lastExpiredState);}}this.combinedHistory=newHistory;return this.combinedHistory;}}]);}();var subscribeHistoryStatesTimeWindow=function subscribeHistoryStatesTimeWindow(hass,callbackFunction,hoursToShow,entityIds,noAttributes){var minimalResponse=arguments.length>5&&arguments[5]!==undefined?arguments[5]:true;var significantChangesOnly=arguments.length>6&&arguments[6]!==undefined?arguments[6]:true;var params={type:"history/stream",entity_ids:entityIds,start_time:new Date(new Date().getTime()-60*60*hoursToShow*1000).toISOString(),minimal_response:minimalResponse,significant_changes_only:significantChangesOnly,no_attributes:noAttributes};var stream=new HistoryStream(hass,hoursToShow);return hass.connection.subscribeMessage(function(message){return callbackFunction(stream.processMessage(message));},params);};

var _templateObject$7,_templateObject2$6,_templateObject3$3,_templateObject4$2,_templateObject5$2,_templateObject6$2,_templateObject7$2;var DEFAULT_HOURS_TO_SHOW=24;var DEFAULT_POINTS_PER_HOUR=2;var ModernCircularGaugeGraph=function(_LitElement){function ModernCircularGaugeGraph(){var _this;_classCallCheck(this,ModernCircularGaugeGraph);_this=_callSuper(this,ModernCircularGaugeGraph,arguments);_this._coordinates=new Map();_this._limits=new Map();return _this;}_inherits(ModernCircularGaugeGraph,_LitElement);return _createClass(ModernCircularGaugeGraph,[{key:"connectedCallback",value:function connectedCallback(){_superPropGet(ModernCircularGaugeGraph,"connectedCallback",this,3)([]);if(this.config){this._subscribed=this._subscribeHistory();}}},{key:"disconnectedCallback",value:function disconnectedCallback(){_superPropGet(ModernCircularGaugeGraph,"disconnectedCallback",this,3)([]);this._unsubscribeHistory();}},{key:"render",value:function render(){var _this2=this;if(!this._coordinates){return x(_templateObject$7||(_templateObject$7=_taggedTemplateLiteral([""])));}var graphs=[];this._coordinates.forEach(function(coords,entity){var _a,_b,_c,_d,_e,_f,_g,_h,_j;if(coords.length===0){return;}var path=_this2._getPath(coords);var entityConfig=(_b=(_a=_this2.config)===null||_a===void 0?void 0:_a.entitys)===null||_b===void 0?void 0:_b.get(entity);var segmentsGradient=_this2._computeGradient((_c=entityConfig===null||entityConfig===void 0?void 0:entityConfig.segments)!==null&&_c!==void 0?_c:[],(_f=(_e=(_d=_this2._limits)===null||_d===void 0?void 0:_d.get(entity))===null||_e===void 0?void 0:_e.min)!==null&&_f!==void 0?_f:DEFAULT_MIN,(_j=(_h=(_g=_this2._limits)===null||_g===void 0?void 0:_g.get(entity))===null||_h===void 0?void 0:_h.max)!==null&&_j!==void 0?_j:DEFAULT_MAX);graphs.push(b(_templateObject2$6||(_templateObject2$6=_taggedTemplateLiteral(["\n        <g class="," mask=\"url(#gradient)\">\n          ","\n          <mask id=",">\n            <path\n              vector-effect=\"non-scaling-stroke\"\n              class='line'\n              fill=\"none\"\n              stroke=\"white\"\n              stroke-width=\"4\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n              d=","\n            ></path>\n          </mask>\n          <rect height=\"16%\" width=\"38%\" style="," mask=\"url(#",")\"></rect>\n        </g>\n      "])),entity,segmentsGradient.length?b(_templateObject3$3||(_templateObject3$3=_taggedTemplateLiteral(["\n            <linearGradient id="," x1=\"0%\" y1=\"1\" x2=\"0%\" y2=\"0\">\n              ","\n            </linearGradient>\n          "])),entity.concat("-grad"),segmentsGradient):E,entity.concat("-line"),path,o$2({"fill":segmentsGradient.length?"url(#".concat(entity,"-grad)"):undefined}),entity.concat("-line")));});return x(_templateObject4$2||(_templateObject4$2=_taggedTemplateLiteral(["\n    <svg viewBox=\"-31 -18 100 100\" preserveAspectRatio=\"xMidYMid\">\n      <defs>\n        <linearGradient id=\"grad\" x1=\"0%\" y1=\"0%\" x2=\"38%\" y2=\"0%\">\n          <stop offset=\"0%\" stop-color=\"black\" />\n          <stop offset=\"10%\" stop-color=\"white\" />\n          <stop offset=\"90%\" stop-color=\"white\" />\n          <stop offset=\"100%\" stop-color=\"black\" />\n        </linearGradient>\n        <mask id=\"gradient\">\n          <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"url(#grad)\"/>\n        </mask>\n      </defs>\n      ","\n    </svg>\n    "])),graphs);}},{key:"_computeGradient",value:function _computeGradient(segments,min,max){var _this3=this;if(segments){var sortedSegments=_toConsumableArray(segments).sort(function(a,b){return Number(a.from)-Number(b.from);});var height=16;var strokeWidth=4;var halfStrokeWidth=strokeWidth/2;return _toConsumableArray(sortedSegments).map(function(segment,index){var _a;var offset=_this3._remapValue(valueToPercentageUnclamped(Number(segment.from),min!==null&&min!==void 0?min:DEFAULT_MIN,max!==null&&max!==void 0?max:DEFAULT_MAX),0.0,1.0,halfStrokeWidth/height,(height-halfStrokeWidth)/height)*100;var color=_typeof(segment.color)==="object"?"rgb(".concat(segment.color[0],",").concat(segment.color[1],",").concat(segment.color[2],")"):segment.color;var hardStop;if(sortedSegments[index+1]&&!((_a=_this3.config)===null||_a===void 0?void 0:_a.smooth_segments)){var nextOffset=_this3._remapValue(valueToPercentageUnclamped(Number(sortedSegments[index+1].from),min!==null&&min!==void 0?min:DEFAULT_MIN,max!==null&&max!==void 0?max:DEFAULT_MAX),0.0,1.0,halfStrokeWidth/height,(height-halfStrokeWidth)/height)*100;hardStop=b(_templateObject5$2||(_templateObject5$2=_taggedTemplateLiteral(["<stop offset=\"","%\" stop-color=\"","\" />"])),nextOffset,color);}return b(_templateObject6$2||(_templateObject6$2=_taggedTemplateLiteral(["<stop offset=\"","%\" stop-color=\"","\" />",""])),offset,color,hardStop||"");});}return [];}},{key:"_remapValue",value:function _remapValue(value,inMin,inMax,outMin,outMax){var newRange=(value-inMin)*(outMax-outMin)/(inMax-inMin)+outMin;return newRange;}},{key:"_subscribeHistory",value:function(){var _subscribeHistory2=_asyncToGenerator(_regeneratorRuntime().mark(function _callee(){var _this4=this;var _a,_b,_c,_d,entities,hourToShow;return _regeneratorRuntime().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:entities=Array.from(((_b=(_a=this.config)===null||_a===void 0?void 0:_a.entitys)===null||_b===void 0?void 0:_b.values())||[]).map(function(e){return e.entity;});if(!(!isComponentLoaded(this.hass,"history")||!this.config||!((_c=this.config)===null||_c===void 0?void 0:_c.entitys))){_context.next=3;break;}return _context.abrupt("return",function(){return Promise.resolve();});case 3:hourToShow=(_d=this.config.hours_to_show)!==null&&_d!==void 0?_d:DEFAULT_HOURS_TO_SHOW;return _context.abrupt("return",subscribeHistoryStatesTimeWindow(this.hass,function(historyStates){var _a,_b;if(!historyStates){return undefined;}(_b=(_a=_this4.config)===null||_a===void 0?void 0:_a.entitys)===null||_b===void 0?void 0:_b.forEach(function(entity,entityName){var _a,_b,_c,_d,_e;if(!entity.entity){(_a=_this4._coordinates)===null||_a===void 0?void 0:_a.delete(entityName);return;}if(!historyStates[entity.entity]){(_b=_this4._coordinates)===null||_b===void 0?void 0:_b.delete(entityName);return;}var history=historyStates[entity.entity].map(function(item){return {state:Number(item.s),last_changed:item.lu*1000};});(_c=_this4._coordinates)===null||_c===void 0?void 0:_c.set(entityName,_this4._calcCoordinates(entityName,history,hourToShow,38,Math.max(0,(_e=(_d=_this4.config)===null||_d===void 0?void 0:_d.points_per_hour)!==null&&_e!==void 0?_e:DEFAULT_POINTS_PER_HOUR),{min:entity.adaptive_range?undefined:entity.min,max:entity.adaptive_range?undefined:entity.max})||[]);});_this4.requestUpdate();},hourToShow,entities,false));case 5:case "end":return _context.stop();}},_callee,this);}));function _subscribeHistory(){return _subscribeHistory2.apply(this,arguments);}return _subscribeHistory;}()},{key:"_unsubscribeHistory",value:function _unsubscribeHistory(){if(this._subscribed){this._subscribed.then(function(unsub){return unsub===null||unsub===void 0?void 0:unsub();});this._subscribed=undefined;}}},{key:"_calcCoordinates",value:function _calcCoordinates(entity,history,hours,width,detail,limits){var _a;history=history.filter(function(item){return !Number.isNaN(item.state);});var min=(limits===null||limits===void 0?void 0:limits.min)!==undefined?limits.min:Math.min.apply(Math,_toConsumableArray(history.map(function(item){return item.state;})));var max=(limits===null||limits===void 0?void 0:limits.max)!==undefined?limits.max:Math.max.apply(Math,_toConsumableArray(history.map(function(item){return item.state;})));(_a=this._limits)===null||_a===void 0?void 0:_a.set(entity,{min:min,max:max});var now=new Date().getTime();var graphStart=now-hours*3600*1000;var initialValue=null;for(var i=history.length-1;i>=0;i--){if(history[i].last_changed<graphStart){initialValue=history[i];break;}}var totalPoints=Math.max(2,Math.ceil(hours*detail));var msPerBucket=3600*1000/detail;var buckets=Array.from({length:totalPoints},function(){return [];});var _iterator=_createForOfIteratorHelper(history),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var item=_step.value;var ageMs=now-item.last_changed;var bucketIdx=Math.floor((hours*3600*1000-ageMs)/msPerBucket);if(bucketIdx>=0&&bucketIdx<totalPoints){buckets[bucketIdx].push(item);}}}catch(err){_iterator.e(err);}finally{_iterator.f();}if(initialValue){buckets[0].unshift(initialValue);}if(!buckets.length){return undefined;}return this._calcPoints(buckets,hours,width,detail,min,max);}},{key:"_average",value:function _average(items){if(!Array.isArray(items)||items.length===0)return 0;return items.reduce(function(sum,entry){return sum+parseFloat(entry.state);},0)/items.length;}},{key:"_lastValue",value:function _lastValue(items){if(!Array.isArray(items)||items.length===0)return 0;return parseFloat(items[items.length-1].state)||0;}},{key:"_calcPoints",value:function _calcPoints(history,hours,width,detail,min,max){var _a,_b,_c;var coords=[];var height=12;var strokeWidth=4;var totalPoints=Math.ceil(hours*detail);var xRatio=width/Math.max(1,totalPoints-1);xRatio=isFinite(xRatio)?xRatio:width;var getY=function getY(value){return Math.abs(valueToPercentage(value,min,max)-1)*height+strokeWidth/2;};var lastValue=(_c=(_b=(_a=history.find(function(b){return b.length;}))===null||_a===void 0?void 0:_a[0])===null||_b===void 0?void 0:_b.state)!==null&&_c!==void 0?_c:min;for(var i=0;i<history.length;i+=1){var value=void 0;if(history[i].length){value=this._average(history[i]);lastValue=value;}else {value=lastValue;}coords.push([xRatio*i,getY(value)]);}coords.push([width,getY(lastValue)]);return coords;}},{key:"_midPoint",value:function _midPoint(_Ax,_Ay,_Bx,_By){var zX=(_Ax-_Bx)/2+_Bx;var zY=(_Ay-_By)/2+_By;return [zX,zY];}},{key:"_getPath",value:function _getPath(coords){if(!coords.length){return "";}var next;var Z;var X=0;var Y=1;var path="";var last=coords.filter(Boolean)[0];path+="M ".concat(last[X],",").concat(last[Y]);var _iterator2=_createForOfIteratorHelper(coords),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var coord=_step2.value;next=coord;Z=this._midPoint(last[X],last[Y],next[X],next[Y]);path+=" ".concat(Z[X],",").concat(Z[Y]);path+=" Q".concat(next[X],",").concat(next[Y]);last=next;}}catch(err){_iterator2.e(err);}finally{_iterator2.f();}path+=" ".concat(next[X],",").concat(next[Y]);return path;}}],[{key:"styles",get:function get(){return i$6(_templateObject7$2||(_templateObject7$2=_taggedTemplateLiteral(["\n    svg {\n      width: 100%;\n      height: 100%;\n      display: block;\n    }\n    g {\n      fill: none;\n    }\n\n    .primary rect {\n      fill: var(--gauge-color);\n    }\n    .secondary rect {\n      fill: var(--gauge-secondary-color, var(--gauge-color));\n    }\n    .tertiary rect {\n      fill: var(--gauge-tertiary-color, var(--gauge-color));\n    }\n    "])));}}]);}(i$3);__decorate([n$2({attribute:false,hasChanged:function hasChanged(){return false;}})],ModernCircularGaugeGraph.prototype,"hass",void 0);__decorate([n$2({attribute:false})],ModernCircularGaugeGraph.prototype,"config",void 0);__decorate([r$2()],ModernCircularGaugeGraph.prototype,"_coordinates",void 0);ModernCircularGaugeGraph=__decorate([t$1("modern-circular-gauge-graph")],ModernCircularGaugeGraph);

function durationToSeconds(duration){var parts=duration.split(":").map(Number);return parts[0]*3600+parts[1]*60+parts[2];}

function getTimerRemainingSeconds(stateObj){var _a,_b,_c;var durationSeconds=0;if(stateObj.state==="active"){var timestamp=new Date((_a=stateObj.attributes)===null||_a===void 0?void 0:_a.finishes_at);durationSeconds=Math.round(Math.abs(timestamp.getTime()-Date.now())/1000);}if(stateObj.state==="paused"){durationSeconds=durationToSeconds((_c=(_b=stateObj.attributes)===null||_b===void 0?void 0:_b.remaining)!==null&&_c!==void 0?_c:"00:00");}return durationSeconds;}function getTimestampRemainingSeconds(stateObj){var timestamp=new Date(stateObj.state);return Math.round(Math.abs(Math.max(0,timestamp.getTime()-Date.now()))/1000);}

function compareHass(oldHass,newHass,entities){if(!oldHass){return true;}var _iterator=_createForOfIteratorHelper(entities),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var entityId=_step.value;if(oldHass.states[entityId]!==newHass.states[entityId]){return true;}}}catch(err){_iterator.e(err);}finally{_iterator.f();}return false;}

var e$1=function(e,r,t){var o;void 0===t&&(t={});var i=t.retries,n=void 0===i?10:i,s=t.delay,a=void 0===s?10:s,v=t.shouldReject,u=void 0===v||v,c=null!==(o=t.rejectMessage)&&void 0!==o?o:"Could not get the result after {{ retries }} retries";return new Promise((function(t,o){var i=0,s=function(){var v=e();r(v)?t(v):++i<n?setTimeout(s,a):u?o(new Error(c.replace(/\{\{\s*retries\s*\}\}/g,"".concat(n)))):t(v);};s();}))};

var e=function(){return e=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},e.apply(this,arguments)};function n(t,e,n){if(2===arguments.length)for(var i,s=0,r=e.length;s<r;s++)!i&&s in e||(i||(i=Array.prototype.slice.call(e,0,s)),i[s]=e[s]);return t.concat(i||Array.prototype.slice.call(e))}"function"==typeof SuppressedError&&SuppressedError;var i,s,r,a,o="[home-assistant-javascript-templates]",c=/^([a-z_]+)\.(\w+)$/;!function(t){t.UNKNOWN="unknown",t.UNAVAILABLE="unavailable";}(i||(i={})),function(t){t.AREA_ID="area_id",t.NAME="name";}(s||(s={})),function(t){t.PANEL_URL="panel_url",t.LANG="lang";}(r||(r={})),function(t){t.LOCATION_CHANGED="location-changed",t.TRANSLATIONS_UPDATED="translations-updated",t.POPSTATE="popstate",t.SUBSCRIBE_EVENTS="subscribe_events",t.STATE_CHANGE_EVENT="state_changed";}(a||(a={}));var u=function(t){return t.reduce((function(t,e){var n=e[0],i=e[1];return t[n.replace(c,"$2")]=i,t}),{})},d=function(t){return t.includes(".")};function _(t,e,n){var c=function(){return Object.entries(t.hass.areas)},_=function(){return Object.entries(t.hass.devices)},h=function(){return Object.entries(t.hass.entities)},p=new Set,v=new Map,l="ref",f="value",b="toJSON",y=function(t){return "".concat(l,".").concat(t)},g=function(t,e){n&&console.warn("".concat(t," ").concat(e," used in a JavaScript template doesn't exist"));},w=function(t){return g("Entity",t)},m=function(t){return g("Domain",t)},E=function(t){var i=new SyntaxError(t);if(e)throw i;n&&console.warn(i);},A=function(e){t.hass.states[e]?p.add(e):w(e);},N=function(t){p.add(t);},T=function(e,n){var i=n.with_unit,s=void 0!==i&&i,r=n.rounded,a=void 0!==r&&r;if(e){var o=e.state,c=e.attributes.unit_of_measurement,u=Number(a),d=false===a||isNaN(Number(o))?o:new Intl.NumberFormat(t.hass.language,{minimumFractionDigits:u,maximumFractionDigits:u}).format(Number(o));return s&&c?"".concat(d," ").concat(c):d}},S=function(t){return new Proxy(t,{get:function(t,e){return "state_with_unit"===e?T(t,{rounded:true,with_unit:true}):t[e]}})};return {get hass(){return t.hass},states:new Proxy((function(e,n){if(void 0===n&&(n={}),d(e))return A(e),T(t.hass.states[e],n);throw SyntaxError("".concat(o,": states method cannot be used with a domain, use it as an object instead."))}),{get:function(e,n){if(d(n))return A(n),S(t.hass.states[n]);var i=Object.entries(t.hass.states).filter((function(t){return t[0].startsWith(n)}));return i.length||m(n),new Proxy(u(i),{get:function(t,e){return A("".concat(n,".").concat(e)),S(t[e])}})}}),state_translated:function(e){if(A(e),t.hass.states[e])return t.hass.formatEntityState(t.hass.states[e])},is_state:function(e,n){var i;return A(e),Array.isArray(n)?n.some((function(n){var i;return (null===(i=t.hass.states[e])||void 0===i?void 0:i.state)===n})):(null===(i=t.hass.states[e])||void 0===i?void 0:i.state)===n},state_attr:function(e,n){var i,s;return A(e),null===(s=null===(i=t.hass.states[e])||void 0===i?void 0:i.attributes)||void 0===s?void 0:s[n]},is_state_attr:function(t,e,n){return this.state_attr(t,e)===n},has_value:function(t){return this.states(t)?!(this.is_state(t,i.UNKNOWN)||this.is_state(t,i.UNAVAILABLE)):(w(t),false)},entities:new Proxy((function(e){if(void 0===e)return t.hass.entities;if(d(e))return A(e),t.hass.entities[e];var n=h().filter((function(t){return t[0].startsWith(e)}));return n.length||m(e),new Proxy(u(n),{get:function(t,n){return A("".concat(e,".").concat(n)),t[n]}})}),{get:function(t,e){return t(e)}}),entity_prop:function(e,n){var i;return A(e),null===(i=t.hass.entities[e])||void 0===i?void 0:i[n]},is_entity_prop:function(t,e,n){return this.entity_prop(t,e)===n},devices:new Proxy((function(e){if(void 0===e)return t.hass.devices;if(d(e))throw SyntaxError("".concat(o,": devices method cannot be used with an entity id, you should use a device id instead."));return t.hass.devices[e]}),{get:function(e,n){if(d(n))throw SyntaxError("".concat(o,": devices cannot be accesed using an entity id, you should use a device id instead."));return t.hass.devices[n]}}),device_attr:function(e,n){var i,s,r;if(d(e)){A(e);var a=null===(i=t.hass.entities[e])||void 0===i?void 0:i.device_id;return null===(s=t.hass.devices[a])||void 0===s?void 0:s[n]}return null===(r=t.hass.devices[e])||void 0===r?void 0:r[n]},is_device_attr:function(t,e,n){return this.device_attr(t,e)===n},device_id:function(e){var n;if(d(e))return A(e),null===(n=t.hass.entities[e])||void 0===n?void 0:n.device_id;var i=_().find((function(t){return t[1].name===e}));return null==i?void 0:i[0]},device_name:function(e){var n,i,s;if(d(e)){A(e);var r=null===(n=t.hass.entities[e])||void 0===n?void 0:n.device_id;return null===(i=t.hass.devices[r])||void 0===i?void 0:i.name}return null===(s=t.hass.devices[e])||void 0===s?void 0:s.name},areas:function(){return c().map((function(t){return t[1].area_id}))},area_id:function(e){var n,i;if(e in t.hass.devices)return this.device_attr(e,s.AREA_ID);var r=null===(n=t.hass.entities[e])||void 0===n?void 0:n.device_id;if(r)return this.device_attr(r,s.AREA_ID);var a=c().find((function(t){return t[1].name===e}));return null===(i=null==a?void 0:a[1])||void 0===i?void 0:i.area_id},area_name:function(e){var n,i,r;e in t.hass.devices&&(r=this.device_attr(e,s.AREA_ID));var a=null===(n=t.hass.entities[e])||void 0===n?void 0:n.device_id;a&&(r=this.device_attr(a,s.AREA_ID));var o=c().find((function(t){var n=t[1];return n.area_id===e||n.area_id===r}));return null===(i=null==o?void 0:o[1])||void 0===i?void 0:i.name},area_entities:function(t){var e=c().find((function(e){var n=e[1];return n.area_id===t||n.name===t}));return e?h().filter((function(t){return t[1].area_id===e[1].area_id})).map((function(t){return t[0]})):[]},area_devices:function(t){var e=c().find((function(e){var n=e[1];return n.area_id===t||n.name===t}));return e?_().filter((function(t){return t[1].area_id===e[1].area_id})).map((function(t){return t[1].id})):[]},get user_name(){return t.hass.user.name},get user_is_admin(){return t.hass.user.is_admin},get user_is_owner(){return t.hass.user.is_owner},get user_agent(){return window.navigator.userAgent},get tracked(){return p},cleanTracked:function(){p.clear();},ref:function(t,e){var n,i=y(e);if(v.has(e))return v.get(e);var s=new Proxy(((n={})[f]=void 0,n[b]=function(){return this[f]},n),{get:function(t,e,n){if(e===f||e===b)return N(i),Reflect.get(t,e,n);E("".concat(e," is not a valid ").concat(l," property. A ").concat(l,' only exposes a "').concat(f,'" property'));},set:function(e,n,s){if(n===f){var r=e[f];return e[f]=s,t({event_type:a.STATE_CHANGE_EVENT,data:{entity_id:i,old_state:{state:JSON.stringify(r)},new_state:{state:JSON.stringify(s)}}}),true}return E('property "'.concat(n,'" cannot be set in a ').concat(l)),false}});return v.set(e,s),s},unref:function(t,e){var n=y(e);v.has(e)?(v.delete(e),t(n)):E("".concat(e," is not a ref or it has been unrefed already"));},clientSideProxy:new Proxy({},{get:function(e,i){switch(Object.values(r).includes(i)&&N(i),i){case r.PANEL_URL:return location.pathname;case r.LANG:return t.hass.language}n&&console.warn("clientSideProxy should only be used to access these variables: ".concat(Object.values(r).join(", ")));}})}}var h=function(){function t(t,e){var n=e.throwErrors,i=void 0!==n&&n,s=e.throwWarnings,a=void 0===s||s,o=e.variables,c=void 0===o?{}:o,u=e.autoReturn,d=void 0===u||u;this._throwErrors=i,this._throwWarnings=a,this._variables=c,this._autoReturn=d,this._subscriptions=new Map,this._clientSideEntitiesRegExp=new RegExp("(^|[ \\?(+:\\{\\[><,])(".concat(Object.values(r).join("|"),")($|[ \\?)+:\\}\\]><.,])"),"gm"),this._scopped=_(t,i,a),this._watchForPanelUrlChange(),this._watchForEntitiesChange(),this._watchForLanguageChange();}return t.prototype._executeRenderingFunctions=function(t){var e=this;this._subscriptions.get(t).forEach((function(t,n){t.forEach((function(t,i){e.trackTemplate(n,i,t);}));}));},t.prototype._watchForPanelUrlChange=function(){var t=this;window.addEventListener(a.LOCATION_CHANGED,(function(){t._panelUrlWatchCallback();})),window.addEventListener(a.POPSTATE,(function(){t._panelUrlWatchCallback();}));},t.prototype._panelUrlWatchCallback=function(){this._subscriptions.has(r.PANEL_URL)&&this._executeRenderingFunctions(r.PANEL_URL);},t.prototype._watchForEntitiesChange=function(){var t=this;window.hassConnection.then((function(e){e.conn.subscribeMessage((function(e){return t._entityWatchCallback(e)}),{type:a.SUBSCRIBE_EVENTS,event_type:a.STATE_CHANGE_EVENT});}));},t.prototype._watchForLanguageChange=function(){var t=this;window.addEventListener(a.TRANSLATIONS_UPDATED,(function(){t._subscriptions.has(r.LANG)&&t._executeRenderingFunctions(r.LANG);}));},t.prototype._entityWatchCallback=function(t){if(this._subscriptions.size){var e=t.data.entity_id;this._subscriptions.has(e)&&this._executeRenderingFunctions(e);}},t.prototype._storeTracked=function(t,e,n){var i=this;this._scopped.tracked.forEach((function(s){var r=[e,n];if(i._subscriptions.has(s)){var a=i._subscriptions.get(s);if(a.has(t)){var o=a.get(t);o.has(e)||o.set.apply(o,r);}else a.set(t,new Map([r]));}else i._subscriptions.set(s,new Map([[t,new Map([r])]]));}));},t.prototype._untrackTemplate=function(t,e){var n=this;this._subscriptions.forEach((function(i,s){if(i.has(t)){var r=i.get(t);r.delete(e),0===r.size&&(i.delete(t),0===i.size&&n._subscriptions.delete(s));}}));},t.prototype.renderTemplate=function(t,i){ void 0===i&&(i={});try{var s=new Map(Object.entries(e(e({},this._variables),i))),r=t.trim().replace(this._clientSideEntitiesRegExp,"$1clientSide.$2$3"),a=r.includes("return")||!this._autoReturn?r:"return ".concat(r);return (new(Function.bind.apply(Function,n(n([void 0,"hass","states","state_translated","is_state","state_attr","is_state_attr","has_value","entities","entity_prop","is_entity_prop","devices","device_attr","is_device_attr","device_id","device_name","areas","area_id","area_name","area_entities","area_devices","user_name","user_is_admin","user_is_owner","user_agent","clientSide","ref","unref"],Array.from(s.keys()),!1),["".concat('"use strict";'," ").concat(a)],!1)))).apply(void 0,n([this._scopped.hass,this._scopped.states,this._scopped.state_translated.bind(this._scopped),this._scopped.is_state.bind(this._scopped),this._scopped.state_attr.bind(this._scopped),this._scopped.is_state_attr.bind(this._scopped),this._scopped.has_value.bind(this._scopped),this._scopped.entities,this._scopped.entity_prop,this._scopped.is_entity_prop.bind(this._scopped),this._scopped.devices,this._scopped.device_attr.bind(this._scopped),this._scopped.is_device_attr.bind(this._scopped),this._scopped.device_id.bind(this._scopped),this._scopped.device_name.bind(this._scopped),this._scopped.areas.bind(this._scopped),this._scopped.area_id.bind(this._scopped),this._scopped.area_name.bind(this._scopped),this._scopped.area_entities.bind(this._scopped),this._scopped.area_devices.bind(this._scopped),this._scopped.user_name,this._scopped.user_is_admin,this._scopped.user_is_owner,this._scopped.user_agent,this._scopped.clientSideProxy,this._scopped.ref.bind(this._scopped,this._entityWatchCallback.bind(this)),this._scopped.unref.bind(this._scopped,this.cleanTracked.bind(this))],Array.from(s.values()),!1))}catch(t){if(this._throwErrors)throw t;return void(this._throwWarnings&&console.warn(t))}},t.prototype.trackTemplate=function(t,e,n){var i=this;void 0===n&&(n={}),this._scopped.cleanTracked();var s=this.renderTemplate(t,n);return this._storeTracked(t,e,n),e(s),function(){return i._untrackTemplate(t,e)}},t.prototype.cleanTracked=function(t){t?this._subscriptions.has(t)&&this._subscriptions.delete(t):this._subscriptions.clear();},Object.defineProperty(t.prototype,"variables",{get:function(){return this._variables},set:function(t){this._variables=t;},enumerable:false,configurable:true}),t}(),p=function(){function e(e,n){ void 0===n&&(n={}),this._renderer=e$1((function(){return e.hass}),(function(t){return !!(t&&t.areas&&t.devices&&t.entities&&t.states&&t.user)}),{retries:100,delay:50,rejectMessage:"The provided element doesn't contain a proper or initialised hass object"}).then((function(){return new h(e,n)}));}return e.prototype.getRenderer=function(){return this._renderer},e}();

var getHaJsTemplates=function getHaJsTemplates(){if(!window.__mcg_haJsTemplates){window.__mcg_haJsTemplates=new p(document.querySelector("home-assistant"));}return window.__mcg_haJsTemplates;};

function compareTemplateResult(oldResult,newResult){var _a,_b;if(!oldResult||!newResult){return true;}var keys=Object.keys(newResult);for(var _i=0,_keys=keys;_i<_keys.length;_i++){var key=_keys[_i];if(oldResult[key]!==newResult[key]){return true;}var oldValue=(_a=oldResult[key])===null||_a===void 0?void 0:_a.result;var newValue=(_b=newResult[key])===null||_b===void 0?void 0:_b.result;if(oldValue!==newValue){return true;}}return false;}

var _templateObject$6,_templateObject2$5,_templateObject3$2,_templateObject4$1,_templateObject5$1,_templateObject6$1,_templateObject7$1,_templateObject8$1,_templateObject9$1,_templateObject10$1,_templateObject11$1,_templateObject12$1,_templateObject13$1,_templateObject14$1,_templateObject15$1,_templateObject16,_templateObject17,_templateObject18,_templateObject19,_templateObject20,_templateObject21,_templateObject22,_templateObject23,_templateObject24,_templateObject25,_templateObject26,_templateObject27,_templateObject28,_templateObject29,_templateObject30,_templateObject31,_templateObject32,_templateObject33,_templateObject34,_templateObject35,_templateObject36,_templateObject37,_templateObject38,_templateObject39,_templateObject40,_templateObject41,_templateObject42,_templateObject43,_templateObject44,_templateObject45,_templateObject46,_templateObject47,_templateObject48;registerCustomCard({type:"modern-circular-gauge",name:"Modern Circular Gauge",description: ''

function registerCustomBadge(params){var windowWithCards=window;windowWithCards.customBadges=windowWithCards.customBadges||[];windowWithCards.customBadges.push(Object.assign(Object.assign({},params),{preview:true,documentationURL:"https://github.com/selvalt7/modern-circular-gauge"}));}


var mdiAlertCircle = "M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z";
var mdiChartLineVariant = "M3.5,18.5L9.5,12.5L13.5,16.5L22,6.92L20.59,5.5L13.5,13.5L9.5,9.5L2,17L3.5,18.5Z";
var mdiClose = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
var mdiCodeBraces = "M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z";
var mdiFlipToBack = "M15,17H17V15H15M15,5H17V3H15M5,7H3V19A2,2 0 0,0 5,21H17V19H5M19,17A2,2 0 0,0 21,15H19M19,9H21V7H19M19,13H21V11H19M9,17V15H7A2,2 0 0,0 9,17M13,3H11V5H13M19,3V5H21C21,3.89 20.1,3 19,3M13,15H11V17H13M9,3C7.89,3 7,3.89 7,5H9M9,11H7V13H9M9,7H7V9H9V7Z";
var mdiFlipToFront = "M7,21H9V19H7M11,21H13V19H11M19,15H9V5H19M19,3H9C7.89,3 7,3.89 7,5V15A2,2 0 0,0 9,17H14L18,17H19A2,2 0 0,0 21,15V5C21,3.89 20.1,3 19,3M15,21H17V19H15M3,9H5V7H3M5,21V19H3A2,2 0 0,0 5,21M3,17H5V15H3M3,13H5V11H3V13Z";
var mdiGauge = "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12C20,14.4 19,16.5 17.3,18C15.9,16.7 14,16 12,16C10,16 8.2,16.7 6.7,18C5,16.5 4,14.4 4,12A8,8 0 0,1 12,4M14,5.89C13.62,5.9 13.26,6.15 13.1,6.54L11.81,9.77L11.71,10C11,10.13 10.41,10.6 10.14,11.26C9.73,12.29 10.23,13.45 11.26,13.86C12.29,14.27 13.45,13.77 13.86,12.74C14.12,12.08 14,11.32 13.57,10.76L13.67,10.5L14.96,7.29L14.97,7.26C15.17,6.75 14.92,6.17 14.41,5.96C14.28,5.91 14.15,5.89 14,5.89M10,6A1,1 0 0,0 9,7A1,1 0 0,0 10,8A1,1 0 0,0 11,7A1,1 0 0,0 10,6M7,9A1,1 0 0,0 6,10A1,1 0 0,0 7,11A1,1 0 0,0 8,10A1,1 0 0,0 7,9M17,9A1,1 0 0,0 16,10A1,1 0 0,0 17,11A1,1 0 0,0 18,10A1,1 0 0,0 17,9Z";
var mdiListBoxOutline = "M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z";
var mdiNumeric2BoxOutline = "M15,15H11V13H13A2,2 0 0,0 15,11V9C15,7.89 14.1,7 13,7H9V9H13V11H11A2,2 0 0,0 9,13V17H15M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z";
var mdiNumeric3BoxOutline = "M15,15V13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 15,10.5V9C15,7.89 14.1,7 13,7H9V9H13V11H11V13H13V15H9V17H13A2,2 0 0,0 15,15M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z";
var mdiPalette = "M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z";
var mdiPlus = "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
var mdiSegment = "M21,8H3V6H21M9,13H21V11H9M9,18H21V16H9";

var _templateObject$5;var McgBadgeState=function(_LitElement){function McgBadgeState(){var _this;_classCallCheck(this,McgBadgeState);_this=_callSuper(this,McgBadgeState,arguments);_this.showUnit=true;_this.showSeconds=true;return _this;}_inherits(McgBadgeState,_LitElement);return _createClass(McgBadgeState,[{key:"connectedCallback",value:function connectedCallback(){_superPropGet(McgBadgeState,"connectedCallback",this,3)([]);}},{key:"disconnectedCallback",value:function disconnectedCallback(){_superPropGet(McgBadgeState,"disconnectedCallback",this,3)([]);}},{key:"render",value:function render(){var state=computeState(this.hass,this.stateObj,this.entityAttribute,this.stateOverride,this.decimals,this.showSeconds);return x(_templateObject$5||(_templateObject$5=_taggedTemplateLiteral(["\n      "," ","\n    "])),state,this.unit);}}]);}(i$3);__decorate([n$2({attribute:false})],McgBadgeState.prototype,"hass",void 0);__decorate([n$2({type:Object})],McgBadgeState.prototype,"stateObj",void 0);__decorate([n$2({type:String})],McgBadgeState.prototype,"entityAttribute",void 0);__decorate([n$2({type:String})],McgBadgeState.prototype,"unit",void 0);__decorate([n$2({type:Number})],McgBadgeState.prototype,"decimals",void 0);__decorate([n$2({type:Boolean})],McgBadgeState.prototype,"showUnit",void 0);__decorate([n$2({type:String})],McgBadgeState.prototype,"stateOverride",void 0);__decorate([n$2({type:Boolean})],McgBadgeState.prototype,"showSeconds",void 0);McgBadgeState=__decorate([t$1("mcg-badge-state")],McgBadgeState);

var _templateObject$4,_templateObject2$4,_templateObject3$1,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15;var MAX_ANGLE=270;var ROTATE_ANGLE=360-MAX_ANGLE/2-90;var RADIUS=42;registerCustomBadge({type:"modern-circular-gauge-badge",name:"Modern Circular Gauge Badge",description: ''

var version = "0.13.3";

console.info("%cModern Circular Gauge%cv".concat(version),"background-color: #57BB30; color: #2C412D; padding: 4px 6px; font-weight: bold","background-color: gray; padding: 4px 6px; font-weight: bold");

var getSecondaryGaugeSchema=function getSecondaryGaugeSchema(showGaugeOptions){return [{name:"show_gauge",selector:{select:{options:[{value:"none",label:"None"},{value:"inner",label:"Inner gauge"},{value:"outer",label:"Outer gauge"}],mode:"dropdown",translation_key:"show_gauge_options"}}},{name:"",type:"grid",disabled:!showGaugeOptions,schema:[{name:"min",type:"mcg-template",default:DEFAULT_MIN,schema:{number:{step:0.1}}},{name:"max",type:"mcg-template",default:DEFAULT_MAX,schema:{number:{step:0.1}}}]}];};var getSegmentsSchema=function getSegmentsSchema(){return [{name:"segments",type:"mcg-list",iconPath:mdiSegment,schema:[{name:"",type:"grid",column_min_width:"100px",schema:[{name:"from",type:"mcg-template",required:true,schema:{number:{step:0.1}}},{name:"color",type:"mcg-template",required:true,schema:{color_rgb:{}}}]}]}];};var getGaugeStyleSchema=function getGaugeStyleSchema(){var gaugeDefaultWidth=arguments.length>0&&arguments[0]!==undefined?arguments[0]:6;var gaugeDefaultOpacity=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;return [{name:"",type:"grid",schema:[{name:"width",default:gaugeDefaultWidth,selector:{number:{step:"any",min:0}}},{name:"color",helper:"gauge_color",selector:{text:{}}},{name:"opacity",default:gaugeDefaultOpacity,selector:{number:{step:"any",min:0,max:1}}}]}];};var getEntityStyleSchema=function getEntityStyleSchema(showGaugeOptions){var gaugeDefaultRadius=arguments.length>1&&arguments[1]!==undefined?arguments[1]:RADIUS$1;var labelHelper=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"label";var gaugeDefaultBackgroundOpacity=arguments.length>3&&arguments[3]!==undefined?arguments[3]:1;return [{name:"label",helper:labelHelper,selector:{text:{}}},{name:"",type:"grid",schema:[{name:"needle",disabled:!showGaugeOptions,selector:{boolean:{}}},{name:"start_from_zero",helper:"start_from_zero",disabled:!showGaugeOptions,selector:{boolean:{}}},{name:"show_state",default:true,selector:{boolean:{}}},{name:"show_unit",default:true,selector:{boolean:{}}},{name:"show_seconds",default:true,helper:"show_seconds",selector:{boolean:{}}},{name:"adaptive_state_color",default:false,selector:{boolean:{}}},{name:"adaptive_label_color",default:false,selector:{boolean:{}}},{name:"decimals",selector:{number:{step:1,min:0}}},{name:"inverted_mode",default:false,selector:{boolean:{}}},{name:"show_in_graph",default:labelHelper==="primary_label",selector:{boolean:{}}},{name:"adaptive_graph_range",default:false,selector:{boolean:{}}}]},{name:"state_text",helper:"state_text",selector:{template:{}}},{name:"gauge_radius",default:gaugeDefaultRadius,disabled:!showGaugeOptions,selector:{number:{step:1}}},{name:"gauge_foreground_style",type:"expandable",iconPath:mdiFlipToFront,schema:getGaugeStyleSchema(gaugeDefaultRadius==RADIUS$1?6:4)},{name:"gauge_background_style",type:"expandable",iconPath:mdiFlipToBack,schema:getGaugeStyleSchema(gaugeDefaultRadius==RADIUS$1?6:4,gaugeDefaultBackgroundOpacity)}];};function getSecondarySchema(showGaugeOptions,entities){var gaugeDefaultBackgroundOpacity=arguments.length>2&&arguments[2]!==undefined?arguments[2]:1;var _a;return {name:"secondary",type:"expandable",iconPath:mdiNumeric2BoxOutline,schema:[{name:"entity",type:"mcg-template",schema:{entity:{domain:NUMBER_ENTITY_DOMAINS}}},{name:"attribute",selector:{attribute:{hide_attributes:NON_NUMERIC_ATTRIBUTES,entity_id:(_a=entities===null||entities===void 0?void 0:entities.get("secondary"))!==null&&_a!==void 0?_a:undefined}}},{name:"",type:"grid",schema:[{name:"unit",selector:{text:{}}},{name:"state_size",selector:{select:{options:[{value:"small",label:"Small"},{value:"big",label:"Big"}],mode:"dropdown",translation_key:"state_size_options"}}}]}].concat(_toConsumableArray(getSecondaryGaugeSchema(showGaugeOptions)),[{name:"secondary_entity_style",type:"expandable",flatten:true,iconPath:mdiGauge,schema:getEntityStyleSchema(showGaugeOptions,INNER_RADIUS,"label",gaugeDefaultBackgroundOpacity)}],_toConsumableArray(getSegmentsSchema()),[{name:"tap_action",selector:{ui_action:{}}}])};}function getTertiarySchema(disableTertiary,showGaugeOptions,entities){var gaugeDefaultBackgroundOpacity=arguments.length>3&&arguments[3]!==undefined?arguments[3]:1;var _a;return {name:"tertiary",type:"expandable",iconPath:mdiNumeric3BoxOutline,disabled:disableTertiary,helper:disableTertiary?"tertiary_combined":undefined,schema:[{name:"entity",type:"mcg-template",schema:{entity:{domain:NUMBER_ENTITY_DOMAINS}}},{name:"attribute",selector:{attribute:{hide_attributes:NON_NUMERIC_ATTRIBUTES,entity_id:(_a=entities===null||entities===void 0?void 0:entities.get("tertiary"))!==null&&_a!==void 0?_a:undefined}}},{name:"unit",selector:{text:{}}}].concat(_toConsumableArray(getSecondaryGaugeSchema(showGaugeOptions)),[{name:"tertiary_entity_style",type:"expandable",flatten:true,iconPath:mdiGauge,schema:getEntityStyleSchema(showGaugeOptions,TERTIARY_RADIUS,"label",gaugeDefaultBackgroundOpacity)}],_toConsumableArray(getSegmentsSchema()),[{name:"tap_action",selector:{ui_action:{}}}])};}var standardGaugeIcon="data:image/svg+xml;base64,PHN2ZwogICB3aWR0aD0iOTQiCiAgIGhlaWdodD0iOTQiCiAgIHZpZXdCb3g9IjAgMCA5NCA5NCIKICAgZmlsbD0ibm9uZSIKICAgaWQ9InN2ZzMiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9Ijk0IiBoZWlnaHQ9Ijk0IiByeD0iOCIgZmlsbD0id2hpdGUiLz4KICA8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjkzIiBoZWlnaHQ9IjkzIiByeD0iNy41IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utb3BhY2l0eT0iMC4xMiIvPgogIDxwYXRoCiAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6NjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6OC42O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuMzIxNTY5IgogICAgIGlkPSJwYXRoNSIKICAgICBkPSJNIDM4LjM3OTA0MSwtNjcuMjQzOTQyIEEgMzcuNjAzMDAxLDM3LjYwMzAwMSAwIDAgMSAxNS4wNDQ3MywtMzIuNDUzMjgxIDM3LjYwMzAwMSwzNy42MDMwMDEgMCAwIDEgLTI1Ljk5ODI3NiwtNDAuODQwODggMzcuNjAzMDAxLDM3LjYwMzAwMSAwIDAgMSAtMzMuODEyMDA4LC04MS45OTY5OTUgMzcuNjAzMDAxLDM3LjYwMzAwMSAwIDAgMSAxLjMwMTA1OTQsLTEwNC44NDMyOCIKICAgICB0cmFuc2Zvcm09InJvdGF0ZSgxMzUpIiAvPgogIDxyZWN0CiAgICAgZmlsbD0iYmxhY2siCiAgICAgZmlsbC1vcGFjaXR5PSIwLjEyIgogICAgIGlkPSJyZWN0MyIKICAgICB3aWR0aD0iMzYuNTkwNTkxIgogICAgIGhlaWdodD0iMTUuOTYwMTU1IgogICAgIHg9IjI4LjcwNDcwNCIKICAgICB5PSIzOS4wMTk5MjQiCiAgICAgcnk9IjUuMzg0NjYwNyIgLz4KICA8cmVjdAogICAgIGZpbGw9ImJsYWNrIgogICAgIGZpbGwtb3BhY2l0eT0iMC4xMiIKICAgICBpZD0icmVjdDMtNCIKICAgICB3aWR0aD0iMzYuNTkwNTkxIgogICAgIGhlaWdodD0iNS44MzUxNTQ1IgogICAgIHg9IjI4LjcwNDcwNCIKICAgICB5PSI4My43NjQ5OTkiCiAgICAgcnk9IjIuOTE3NTc3MyIgLz4KPC9zdmc+Cg==";var standardDarkGaugeIcon="data:image/svg+xml;base64,PHN2ZwogICB3aWR0aD0iOTQiCiAgIGhlaWdodD0iOTQiCiAgIHZpZXdCb3g9IjAgMCA5NCA5NCIKICAgZmlsbD0ibm9uZSIKICAgaWQ9InN2ZzMiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgIDxyZWN0IHdpZHRoPSI5NCIgaGVpZ2h0PSI5NCIgcng9IjgiIGZpbGw9IiMxQzFDMUMiLz4KICAgPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI5MyIgaGVpZ2h0PSI5MyIgcng9IjcuNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMjQiLz4KICAgPHBhdGgKICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo4LjY7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC40Nzg0MzEiCiAgICAgaWQ9InBhdGg1IgogICAgIGQ9Ik0gMzguMzc5MDQxLC02Ny4yNDM5NDIgQSAzNy42MDMwMDEsMzcuNjAzMDAxIDAgMCAxIDE1LjA0NDczLC0zMi40NTMyODEgMzcuNjAzMDAxLDM3LjYwMzAwMSAwIDAgMSAtMjUuOTk4Mjc2LC00MC44NDA4OCAzNy42MDMwMDEsMzcuNjAzMDAxIDAgMCAxIC0zMy44MTIwMDgsLTgxLjk5Njk5NSAzNy42MDMwMDEsMzcuNjAzMDAxIDAgMCAxIDEuMzAxMDU5NCwtMTA0Ljg0MzI4IgogICAgIHRyYW5zZm9ybT0icm90YXRlKDEzNSkiIC8+CiAgIDxyZWN0CiAgICAgZmlsbD0id2hpdGUiCiAgICAgZmlsbC1vcGFjaXR5PSIwLjI0IgogICAgIGlkPSJyZWN0MyIKICAgICB3aWR0aD0iMzYuNTkwNTkxIgogICAgIGhlaWdodD0iMTUuOTYwMTU1IgogICAgIHg9IjI4LjcwNDcwNCIKICAgICB5PSIzOS4wMTk5MjQiCiAgICAgcnk9IjUuMzg0NjYwNyIgLz4KICA8cmVjdAogICAgIGZpbGw9IndoaXRlIgogICAgIGZpbGwtb3BhY2l0eT0iMC4yNCIKICAgICBpZD0icmVjdDMtNCIKICAgICB3aWR0aD0iMzYuNTkwNTkxIgogICAgIGhlaWdodD0iNS44MzUxNTQ1IgogICAgIHg9IjI4LjcwNDcwNCIKICAgICB5PSI4My43NjQ5OTkiCiAgICAgcnk9IjIuOTE3NTc3MyIgLz4KPC9zdmc+Cg==";var halfGaugeIcon="data:image/svg+xml;base64,PHN2ZwogICB3aWR0aD0iOTQiCiAgIGhlaWdodD0iOTQiCiAgIHZpZXdCb3g9IjAgMCA5NCA5NCIKICAgZmlsbD0ibm9uZSIKICAgaWQ9InN2ZzMiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9Ijk0IiBoZWlnaHQ9Ijk0IiByeD0iOCIgZmlsbD0id2hpdGUiLz4KICA8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjkzIiBoZWlnaHQ9IjkzIiByeD0iNy41IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utb3BhY2l0eT0iMC4xMiIvPgogIDxwYXRoCiAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6NjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6OC42O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjAuMzIxNTY5IgogICAgIGlkPSJwYXRoNSIKICAgICBkPSJtIC05LjM5Njk5OTQsLTY1LjgwMDU5OCBhIDM3LjYwMzAwMSwzNy42MDMwMDEgMCAwIDEgLTE4LjgwMTUwMDYsMzIuNTY1MTU0IDM3LjYwMzAwMSwzNy42MDMwMDEgMCAwIDEgLTM3LjYwMzAwMSwtMTBlLTcgMzcuNjAzMDAxLDM3LjYwMzAwMSAwIDAgMSAtMTguODAxNSwtMzIuNTY1MTUzIgogICAgIHRyYW5zZm9ybT0icm90YXRlKDE4MCkiIC8+CiAgPHJlY3QKICAgICBmaWxsPSJibGFjayIKICAgICBmaWxsLW9wYWNpdHk9IjAuMTIiCiAgICAgaWQ9InJlY3QzIgogICAgIHdpZHRoPSIzNi41OTA1OTEiCiAgICAgaGVpZ2h0PSIxNS45NjAxNTUiCiAgICAgeD0iMjguNzA0NzA0IgogICAgIHk9IjQ4LjkxOTk5OCIKICAgICByeT0iNS4zODQ2NjA3IiAvPgogIDxyZWN0CiAgICAgZmlsbD0iYmxhY2siCiAgICAgZmlsbC1vcGFjaXR5PSIwLjEyIgogICAgIGlkPSJyZWN0My00IgogICAgIHdpZHRoPSIzNi41OTA1OTEiCiAgICAgaGVpZ2h0PSI1LjgzNTE1NDUiCiAgICAgeD0iMjguMDk1MzAxIgogICAgIHk9IjgzLjc2NDk5OSIKICAgICByeT0iMi45MTc1NzczIiAvPgo8L3N2Zz4K";var halfDarkGaugeIcon="data:image/svg+xml;base64,PHN2ZwogICB3aWR0aD0iOTQiCiAgIGhlaWdodD0iOTQiCiAgIHZpZXdCb3g9IjAgMCA5NCA5NCIKICAgZmlsbD0ibm9uZSIKICAgaWQ9InN2ZzMiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgIDxyZWN0IHdpZHRoPSI5NCIgaGVpZ2h0PSI5NCIgcng9IjgiIGZpbGw9IiMxQzFDMUMiLz4KICAgPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI5MyIgaGVpZ2h0PSI5MyIgcng9IjcuNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMjQiLz4KICAgPHBhdGgKICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo2O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo4LjY7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MC40Nzg0MzEiCiAgICAgaWQ9InBhdGg1IgogICAgIGQ9Im0gLTkuMzk2OTk5NCwtNjUuODAwNTk4IGEgMzcuNjAzMDAxLDM3LjYwMzAwMSAwIDAgMSAtMTguODAxNTAwNiwzMi41NjUxNTQgMzcuNjAzMDAxLDM3LjYwMzAwMSAwIDAgMSAtMzcuNjAzMDAxLC0xMGUtNyAzNy42MDMwMDEsMzcuNjAzMDAxIDAgMCAxIC0xOC44MDE1LC0zMi41NjUxNTMiCiAgICAgdHJhbnNmb3JtPSJyb3RhdGUoMTgwKSIgLz4KICAgPHJlY3QKICAgICBmaWxsPSJ3aGl0ZSIKICAgICBmaWxsLW9wYWNpdHk9IjAuMjQiCiAgICAgaWQ9InJlY3QzIgogICAgIHdpZHRoPSIzNi41OTA1OTEiCiAgICAgaGVpZ2h0PSIxNS45NjAxNTUiCiAgICAgeD0iMjguNzA0NzA0IgogICAgIHk9IjQ4LjkxOTk5OCIKICAgICByeT0iNS4zODQ2NjA3IiAvPgogIDxyZWN0CiAgICAgZmlsbD0id2hpdGUiCiAgICAgZmlsbC1vcGFjaXR5PSIwLjI0IgogICAgIGlkPSJyZWN0My00IgogICAgIHdpZHRoPSIzNi41OTA1OTEiCiAgICAgaGVpZ2h0PSI1LjgzNTE1NDUiCiAgICAgeD0iMjguMDk1MzAxIgogICAgIHk9IjgzLjc2NDk5OSIKICAgICByeT0iMi45MTc1NzczIiAvPgo8L3N2Zz4K";var fullGaugeIcon="data:image/svg+xml;base64,PHN2ZwogICB3aWR0aD0iOTQiCiAgIGhlaWdodD0iMTA2IgogICB2aWV3Qm94PSIwIDAgOTQgMTA2IgogICBmaWxsPSJub25lIgogICBpZD0ic3ZnMyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iOTQiIGhlaWdodD0iMTA2IiByeD0iOCIgZmlsbD0id2hpdGUiLz4KICA8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjkzIiBoZWlnaHQ9IjEwNSIgcng9IjcuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLW9wYWNpdHk9IjAuMTIiLz4KICAgPGNpcmNsZQogICAgIGN4PSI0NyIKICAgICBjeT0iNTMiCiAgICAgcj0iMzcuNjAzMDAxIgogICAgIGZpbGw9Im5vbmUiCiAgICAgc3Ryb2tlPSJibGFjayIKICAgICBzdHJva2Utb3BhY2l0eT0iMC4zMjE1NjkiCiAgICAgc3Ryb2tlLXdpZHRoPSI2IiAvPgogIDxyZWN0CiAgICAgZmlsbD0iYmxhY2siCiAgICAgZmlsbC1vcGFjaXR5PSIwLjEyIgogICAgIGlkPSJyZWN0MyIKICAgICB3aWR0aD0iMzYuNTkwNTkxIgogICAgIGhlaWdodD0iMTUuOTYwMTU1IgogICAgIHg9IjI4LjcwNDcwNCIKICAgICB5PSI0NS4wMTk5MjQiCiAgICAgcnk9IjUuMzg0NjYwNyIgLz4KICA8cmVjdAogICAgIGZpbGw9ImJsYWNrIgogICAgIGZpbGwtb3BhY2l0eT0iMC4xMiIKICAgICBpZD0icmVjdDMtNCIKICAgICB3aWR0aD0iMzYuNTkwNTkxIgogICAgIGhlaWdodD0iNS44MzUxNTQ1IgogICAgIHg9IjI4LjcwNDcwNCIKICAgICB5PSI5NC43NjQ5OTkiCiAgICAgcnk9IjIuOTE3NTc3MyIgLz4KPC9zdmc+Cg==";var fullDarkGaugeIcon="data:image/svg+xml;base64,PHN2ZwogICB3aWR0aD0iOTQiCiAgIGhlaWdodD0iMTA2IgogICB2aWV3Qm94PSIwIDAgOTQgMTA2IgogICBmaWxsPSJub25lIgogICBpZD0ic3ZnMyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iOTQiIGhlaWdodD0iMTA2IiByeD0iOCIgZmlsbD0iIzFDMUMxQyIvPgogIDxyZWN0IHg9IjAuNSIgeT0iMC41IiB3aWR0aD0iOTMiIGhlaWdodD0iMTA1IiByeD0iNy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4yNCIvPgogICA8Y2lyY2xlCiAgICAgY3g9IjQ3IgogICAgIGN5PSI1MyIKICAgICByPSIzNy42MDMwMDEiCiAgICAgZmlsbD0ibm9uZSIKICAgICBzdHJva2U9IndoaXRlIgogICAgIHN0cm9rZS1vcGFjaXR5PSIwLjQ3IgogICAgIHN0cm9rZS13aWR0aD0iNiIgLz4KICA8cmVjdAogICAgIGZpbGw9IndoaXRlIgogICAgIGZpbGwtb3BhY2l0eT0iMC4yNCIKICAgICBpZD0icmVjdDMiCiAgICAgd2lkdGg9IjM2LjU5MDU5MSIKICAgICBoZWlnaHQ9IjE1Ljk2MDE1NSIKICAgICB4PSIyOC43MDQ3MDQiCiAgICAgeT0iNDUuMDE5OTI0IgogICAgIHJ5PSI1LjM4NDY2MDciIC8+CiAgPHJlY3QKICAgICBmaWxsPSJ3aGl0ZSIKICAgICBmaWxsLW9wYWNpdHk9IjAuMjQiCiAgICAgaWQ9InJlY3QzLTQiCiAgICAgd2lkdGg9IjM2LjU5MDU5MSIKICAgICBoZWlnaHQ9IjUuODM1MTU0NSIKICAgICB4PSIyOC43MDQ3MDQiCiAgICAgeT0iOTQuNzY0OTk5IgogICAgIHJ5PSIyLjkxNzU3NzMiIC8+Cjwvc3ZnPgo=";

var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var cache = null;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
            return cache.lastResult;
        }
        var lastResult = resultFn.apply(this, newArgs);
        cache = {
            lastResult: lastResult,
            lastArgs: newArgs,
            lastThis: this,
        };
        return lastResult;
    }
    memoized.clear = function clear() {
        cache = null;
    };
    return memoized;
}

var editor$1 = {
	min: "Minimum",
	max: "Maximum",
	needle: "Display as needle gauge",
	secondary: "Secondary info",
	tertiary: "Tertiary info",
	state_size: "State size",
	show_gauge: "Gauge visibility",
	header_position: "Header position",
	show_header: "Show header",
	adaptive_icon_color: "Adaptive icon color",
	icon_entity: "Icon entity",
	adaptive_state_color: "Adaptive state color",
	adaptive_label_color: "Adaptive label color",
	show_unit: "Show unit",
	smooth_segments: "Smooth segments",
	segments: "Color segments",
	from: "From",
	color: "Color",
	label: "Label",
	switch_to_form: "Switch To Form",
	switch_to_template: "Switch To Template",
	start_from_zero: "Start from zero",
	gauge_radius: "Gauge radius",
	width: "Width",
	opacity: "Opacity",
	gauge_foreground_style: "Gauge foreground style",
	gauge_background_style: "Gauge background style",
	appearance: "Card appearance",
	badge_appearance: "Badge appearance",
	state_text: "State text",
	primary_entity_style: "Entity style",
	secondary_entity_style: "Entity style",
	tertiary_entity_style: "Entity style",
	decimals: "Decimals",
	gauge_type: "Gauge type",
	show_entity_picture: "Show entity picture",
	show_seconds: "Show seconds",
	rotate_gauge: "Rotate gauge",
	combine_gauges: "Combine primary and secondary entity",
	show_in_graph: "Show in graph",
	adaptive_graph_range: "Adaptive graph range",
	graph: "Graph settings",
	show_graph: "Show graph",
	graph_hours_to_show: "Hours to show",
	graph_points_per_hour: "Points per hour",
	inverted_mode: "Inverted mode",
	helper: {
		start_from_zero: "Gauge starts from zero instead of min",
		primary_label: "Text displayed under the main state when secondary state size is set to big",
		label: "Text displayed under the state",
		gauge_color: "Accepts hex, rgb, CSS variables or \"adaptive\" for segmented style",
		icon_entity: "Select which entity to use for icon selection and coloring",
		state_text: "Overrides displayed state without overriding gauge data, accepts template",
		half_gauge_icon_unavailable: "Icon is unavailable when gauge type is set to half",
		show_seconds: "Show seconds in time-based states",
		rotate_gauge: "Rotates the full gauge type 180 degrees",
		combine_gauges: "Combines primary and secondary entity into one full gauge, only available when gauge type is set to full",
		tertiary_combined: "Tertiary entity is disabled when combining primary and secondary entity"
	},
	header_position_options: {
		options: {
			top: "Top",
			bottom: "Bottom"
		}
	},
	icon_entity_options: {
		options: {
			primary: "Primary",
			secondary: "Secondary",
			tertiary: "Tertiary"
		}
	},
	show_gauge_options: {
		options: {
			none: "None",
			inner: "Inner gauge",
			outer: "Outer gauge"
		}
	},
	state_size_options: {
		options: {
			small: "Small",
			big: "Big"
		}
	},
	gauge_type_options: {
		options: {
			standard: "Standard",
			half: "Half",
			full: "Full"
		}
	}
};
var en = {
	editor: editor$1
};

var en$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: en,
  editor: editor$1
});

var editor = {
	min: "Minimum",
	max: "Maksimum",
	needle: "Wyświetl jako wskaźnik igłowy",
	secondary: "Informacja drugorzędna",
	tertiary: "Informacja trzeciorzędna",
	state_size: "Rozmiar stanu",
	show_gauge: "Widoczność wskaźnika",
	header_position: "Pozycja nagłówka",
	show_header: "Pokaż nagłówek",
	adaptive_icon_color: "Adaptywny kolor ikony",
	icon_entity: "Encja ikony",
	adaptive_state_color: "Adaptywny kolor stanu",
	adaptive_label_color: "Adaptywny kolor etykiety",
	show_unit: "Pokaż jednostkę",
	smooth_segments: "Wygładzone segmenty",
	segments: "Segmenty kolorów",
	from: "Od",
	color: "Kolor",
	label: "Etykieta",
	switch_to_form: "Przełącz na Selektor",
	switch_to_template: "Przełącz na Template",
	start_from_zero: "Rozpocznij od zera",
	gauge_radius: "Promień wskaźnika",
	width: "Szerokość",
	opacity: "Nieprzezroczystość",
	gauge_foreground_style: "Styl wskaźnika",
	gauge_background_style: "Styl tła wskaźnika",
	appearance: "Wygląd karty",
	badge_appearance: "Wygląd odznaki",
	state_text: "Tekst stanu",
	primary_entity_style: "Styl encji",
	secondary_entity_style: "Styl encji",
	tertiary_entity_style: "Styl encji",
	decimals: "Miejsca dziesiętne",
	gauge_type: "Typ wskaźnika",
	show_entity_picture: "Pokaż zdjęcie encji",
	show_seconds: "Pokaż sekundy",
	rotate_gauge: "Obróć wskaźnik",
	combine_gauges: "Połącz encję pierwszorzędną i drugorzędną",
	show_in_graph: "Pokaż na wykresie",
	adaptive_graph_range: "Adaptywny zakres wykresu",
	graph: "Ustawienia wykresu",
	show_graph: "Pokaż wykres",
	graph_hours_to_show: "Godziny do wyświetlenia",
	graph_points_per_hour: "Punkty na godzinę",
	inverted_mode: "Tryb odwrócony",
	helper: {
		start_from_zero: "Wskaźnik rozpoczyna się od zera zamiast od minimum",
		primary_label: "Tekst wyświetlony pod głównym stanem, gdy rozmiar stanu informacji drugorzędnej jest duży",
		label: "Tekst wyświetlony pod stanem",
		gauge_color: "Przyjmuje wartości hex, rgb, zmienne CSS lub \"adaptive\" dla stylu segmentów kolorów",
		icon_entity: "Wybierz encję, której chcesz użyć do wyboru ikon i ich kolorowania",
		state_text: "Nadpisuje wyświetlany stan bez nadpisywania danych wskaźnika, akceptuje template",
		half_gauge_icon_unavailable: "Ikona jest niedostępna, gdy typ wskaźnika jest ustawiony na połówkę",
		show_seconds: "Pokaż sekundy w stanach opartych na czasie",
		rotate_gauge: "Obraca pełny wskaźnik o 180 stopni",
		combine_gauges: "Łączy encję pierwszorzędną i drugorzędną w jeden pełny wskaźnik, dostępne tylko gdy typ wskaźnika jest ustawiony na pełny",
		tertiary_combined: "Encja trzeciorzędna jest wyłączona podczas łączenia encji pierwszorzędnej i drugorzędnej"
	},
	header_position_options: {
		options: {
			top: "Na górze",
			bottom: "Na dole"
		}
	},
	icon_entity_options: {
		options: {
			primary: "Pierwszorzędna",
			secondary: "Drugorzędna",
			tertiary: "Trzeciorzędna"
		}
	},
	show_gauge_options: {
		options: {
			none: "Brak",
			inner: "Wewnętrzny wskaźnik",
			outer: "Zewnętrzny wskaźnik"
		}
	},
	state_size_options: {
		options: {
			small: "Mały",
			big: "Duży"
		}
	},
	gauge_type_options: {
		options: {
			standard: "Standard",
			half: "Połówka",
			full: "Pełny"
		}
	}
};
var pl = {
	editor: editor
};

var pl$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: pl,
  editor: editor
});

var languages={en:en$1,pl:pl$1};var DEFAULT_LANG="en";function getTranslatedString(key){var lang=arguments.length>1&&arguments[1]!==undefined?arguments[1]:DEFAULT_LANG;try{return key.split('.').reduce(function(o,i){return o[i];},languages[lang]);}catch(_){return undefined;}}function localize(hass,key){var lang=hass.locale.language||DEFAULT_LANG;var translatedString=getTranslatedString(key,lang);if(!translatedString){translatedString=getTranslatedString(key,DEFAULT_LANG);}return translatedString!==null&&translatedString!==void 0?translatedString:key;}

var _templateObject$3,_templateObject2$3,_templateObject3;var MCG_List=function(_LitElement){function MCG_List(){var _this;_classCallCheck(this,MCG_List);_this=_callSuper(this,MCG_List,arguments);_this.disabled=false;_this._computeLabel=function(schema,data,options){if(!_this.computeLabel)return _this._computeLabel;return _this.computeLabel(schema,data,Object.assign(Object.assign({},options),{path:[].concat(_toConsumableArray((options===null||options===void 0?void 0:options.path)||[]),[_this.schema.name])}));};return _this;}_inherits(MCG_List,_LitElement);return _createClass(MCG_List,[{key:"render",value:function render(){var _this2=this;var _a,_b;return x(_templateObject$3||(_templateObject$3=_taggedTemplateLiteral(["\n    <ha-expansion-panel outlined .expanded=",">\n      <div\n        slot=\"header\"\n        role=\"heading\"\n      >\n        <ha-svg-icon .path=","></ha-svg-icon>\n        ","\n      </div>\n      <div class=\"content\">\n        ","\n        <ha-button size=\"small\" appearance=\"plain\" .disabled="," @click=",">\n          ","\n          <ha-svg-icon slot=\"start\" .path=","></ha-svg-icon>\n          <ha-svg-icon slot=\"icon\" .path=","></ha-svg-icon>\n        </ha-button>\n      </div>\n    </ha-expansion-panel>\n    "])),Boolean(this.schema.expanded),this.schema.iconPath,localize(this.hass,"editor.".concat(this.schema.name)),this.data?this.data.map(function(row,index){return x(_templateObject2$3||(_templateObject2$3=_taggedTemplateLiteral(["\n          <div class=\"entry\">\n            <ha-form\n              .hass=","\n              .data=","\n              .schema=","\n              .index=","\n              .disabled=","\n              .computeLabel=","\n              @value-changed=","\n            ></ha-form>\n            <ha-icon-button\n              .label=","\n              .path=","\n              .index=","\n              @click=","\n            >\n          </div>\n        "])),_this2.hass,row,_this2.schema.schema,index,_this2.disabled,_this2._computeLabel,_this2._valueChanged,_this2.hass.localize("ui.common.remove"),mdiClose,index,_this2._removeRow);}):E,this.disabled,this._addRow,(_b=(_a=this.hass)===null||_a===void 0?void 0:_a.localize("ui.common.add"))!==null&&_b!==void 0?_b:"Add",mdiPlus,mdiPlus);}},{key:"_valueChanged",value:function _valueChanged(ev){ev.stopPropagation();var data=_toConsumableArray(this.data);data[ev.target.index]=ev.detail.value;fireEvent(this,"value-changed",{value:data});}},{key:"_addRow",value:function _addRow(){if(this.data===undefined){fireEvent(this,"value-changed",{value:[{}]});return;}var data=[].concat(_toConsumableArray(this.data),[{}]);fireEvent(this,"value-changed",{value:data});}},{key:"_removeRow",value:function _removeRow(ev){var data=_toConsumableArray(this.data);data.splice(ev.target.index,1);fireEvent(this,"value-changed",{value:data});}}],[{key:"styles",get:function get(){return i$6(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n      .content {\n        display: flex;\n        justify-items: center;\n        flex-direction: column;\n        padding: 12px;\n      }\n      \n      .entry {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        padding-top: 12px;\n        margin-bottom: 12px;\n        border-top: 1px solid var(--divider-color);\n      }\n\n      .entry:first-child {\n        border-top: none;\n      }\n\n      .entry ha-form {\n        flex: 1;\n      }\n\n      ha-button ha-svg-icon {\n        color: inherit;\n      }\n\n      ha-svg-icon, ha-icon-button {\n        color: var(--secondary-text-color);\n      }\n    "])));}}]);}(i$3);__decorate([n$2({attribute:false})],MCG_List.prototype,"hass",void 0);__decorate([n$2({attribute:false})],MCG_List.prototype,"data",void 0);__decorate([n$2({attribute:false})],MCG_List.prototype,"schema",void 0);__decorate([n$2({attribute:false})],MCG_List.prototype,"computeLabel",void 0);__decorate([n$2({type:Boolean})],MCG_List.prototype,"disabled",void 0);MCG_List=__decorate([t$1("ha-form-mcg-list")],MCG_List);

var _templateObject$2,_templateObject2$2;var HaFormMCGTemplate=function(_LitElement){function HaFormMCGTemplate(){var _this;_classCallCheck(this,HaFormMCGTemplate);_this=_callSuper(this,HaFormMCGTemplate,arguments);_this.disabled=false;_this._templateMode=false;return _this;}_inherits(HaFormMCGTemplate,_LitElement);return _createClass(HaFormMCGTemplate,[{key:"connectedCallback",value:function connectedCallback(){_superPropGet(HaFormMCGTemplate,"connectedCallback",this,3)([]);var DATA=this.schema.flatten?this.data:_defineProperty({},this.schema.name,this.data);this._templateMode=isTemplate(DATA[this.schema.name])||isJSTemplate(DATA[this.schema.name]);}},{key:"_computeSelector",value:function _computeSelector(){return [{name:this.schema.name,label:this.schema.label,selector:this.schema.schema,required:this.schema.required,default:this.schema.default,context:this.schema.context||undefined}];}},{key:"render",value:function render(){var _a;var DATA=this.schema.flatten?this.data:_defineProperty({},this.schema.name,this.data);var dataIsTemplate=(_a=this._templateMode)!==null&&_a!==void 0?_a:isTemplate(DATA[this.schema.name])||isJSTemplate(DATA[this.schema.name]);var schema=Array.isArray(this.schema.schema)?this.schema.schema:this._computeSelector();if(dataIsTemplate){schema=[{name:this.schema.name,label:this.schema.label,required:this.schema.required,selector:{template:{}}}];}return x(_templateObject$2||(_templateObject$2=_taggedTemplateLiteral(["\n      <div class=\"selector-container\">\n        <ha-form\n          .hass=","\n          .data=","\n          .schema=","\n          .computeLabel=","\n          .disabled=","\n          @value-changed=","\n        >\n        </ha-form>\n        <ha-button appearance=\"plain\" size=\"small\" .disabled="," @click=",">\n          ","\n          <ha-svg-icon slot=\"start\" .path=","></ha-svg-icon>\n          <ha-svg-icon slot=\"icon\" .path=","></ha-svg-icon>\n        </ha-button>\n      </div>\n    "])),this.hass,DATA,schema,this.computeLabel,this.disabled,this._valueChanged,this.disabled,this._toggleTemplateMode,this._templateMode?localize(this.hass,"editor.switch_to_form"):localize(this.hass,"editor.switch_to_template"),this._templateMode?mdiListBoxOutline:mdiCodeBraces,this._templateMode?mdiListBoxOutline:mdiCodeBraces);}},{key:"_toggleTemplateMode",value:function _toggleTemplateMode(){this._templateMode=!this._templateMode;var value=this.schema.flatten?this.data[this.schema.name]:this.data;if(this._templateMode){var newValue=this.schema.flatten?Object.assign(Object.assign({},this.data),_defineProperty({},this.schema.name,String(value!==null&&value!==void 0?value:""))):String(value!==null&&value!==void 0?value:"");fireEvent(this,"value-changed",{value:newValue});}else {if(value===""){var _newValue=this.schema.flatten?Object.assign(Object.assign({},this.data),_defineProperty({},this.schema.name,undefined)):undefined;fireEvent(this,"value-changed",{value:_newValue});}}}},{key:"_valueChanged",value:function _valueChanged(ev){ev.stopPropagation();var value=ev.detail.value[this.schema.name];var oldValue=this.schema.flatten?this.data[this.schema.name]:this.data;if(value===oldValue){return;}if(value===""){value=undefined;}var data=this.schema.flatten?{value:Object.assign(Object.assign({},this.data),_defineProperty({},this.schema.name,value))}:{value:value};fireEvent(this,"value-changed",data);}}]);}(i$3);HaFormMCGTemplate.styles=i$6(_templateObject2$2||(_templateObject2$2=_taggedTemplateLiteral(["\n    :host {\n      display: block;\n    }\n    .selector-container {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      gap: 8px;\n    }\n    ha-form {\n      flex: 1;\n      width: 100%;\n    }\n  "])));__decorate([n$2({attribute:false})],HaFormMCGTemplate.prototype,"hass",void 0);__decorate([n$2({attribute:false})],HaFormMCGTemplate.prototype,"data",void 0);__decorate([n$2({attribute:false})],HaFormMCGTemplate.prototype,"schema",void 0);__decorate([n$2({type:Boolean})],HaFormMCGTemplate.prototype,"disabled",void 0);__decorate([n$2({attribute:false})],HaFormMCGTemplate.prototype,"computeLabel",void 0);__decorate([r$2()],HaFormMCGTemplate.prototype,"_templateMode",void 0);HaFormMCGTemplate=__decorate([t$1("ha-form-mcg-template")],HaFormMCGTemplate);

var _templateObject$1,_templateObject2$1;var ModernCircularGaugeEditor=function(_LitElement){function ModernCircularGaugeEditor(){var _this;_classCallCheck(this,ModernCircularGaugeEditor);_this=_callSuper(this,ModernCircularGaugeEditor,arguments);_this._schema=memoizeOne(function(showInnerGaugeOptions,showTertiaryGaugeOptions,disableTertiary,gaugeType,entities,defaultBackgroundOpacity){var _a;return [{name:"entity",type:"mcg-template",required:true,schema:{entity:{domain:NUMBER_ENTITY_DOMAINS}}},{name:"attribute",selector:{attribute:{hide_attributes:NON_NUMERIC_ATTRIBUTES,entity_id:(_a=entities===null||entities===void 0?void 0:entities.get("primary"))!==null&&_a!==void 0?_a:undefined}}},{name:"name",type:"mcg-template",schema:{text:{}}},{name:"",type:"grid",schema:[{name:"icon",type:"mcg-template",flatten:true,disabled:gaugeType==="half",helper:gaugeType==="half"?"half_gauge_icon_unavailable":undefined,schema:{icon:{}},context:{icon_entity:"entity"}},{name:"unit",selector:{text:{}}},{name:"min",type:"mcg-template",default:DEFAULT_MIN,schema:{number:{step:0.1}}},{name:"max",type:"mcg-template",default:DEFAULT_MAX,schema:{number:{step:0.1}}}]},{name:"primary_entity_style",type:"expandable",flatten:true,iconPath:mdiGauge,schema:getEntityStyleSchema(true,RADIUS$1,"primary_label",defaultBackgroundOpacity===null||defaultBackgroundOpacity===void 0?void 0:defaultBackgroundOpacity.get("primary"))},getSecondarySchema(showInnerGaugeOptions,entities,defaultBackgroundOpacity===null||defaultBackgroundOpacity===void 0?void 0:defaultBackgroundOpacity.get("secondary")),getTertiarySchema(disableTertiary,showTertiaryGaugeOptions,entities,defaultBackgroundOpacity===null||defaultBackgroundOpacity===void 0?void 0:defaultBackgroundOpacity.get("tertiary")),{name:"appearance",type:"expandable",flatten:true,iconPath:mdiPalette,schema:[{name:"header_position",default:"bottom",selector:{select:{options:[{label:"Bottom",value:"bottom"},{label:"Top",value:"top"}],translation_key:"header_position_options",mode:"box"}}},{name:"",type:"grid",schema:[{name:"smooth_segments",selector:{boolean:{}}},{name:"show_header",default:true,selector:{boolean:{}}},{name:"show_icon",default:true,disabled:gaugeType==="half",helper:gaugeType==="half"?"half_gauge_icon_unavailable":undefined,selector:{boolean:{}}},{name:"adaptive_icon_color",default:false,disabled:gaugeType==="half",helper:gaugeType==="half"?"half_gauge_icon_unavailable":undefined,selector:{boolean:{}}},{name:"show_entity_picture",default:false,disabled:gaugeType==="half",helper:gaugeType==="half"?"half_gauge_icon_unavailable":undefined,selector:{boolean:{}}},{name:"icon_entity",default:"primary",disabled:gaugeType==="half",helper:gaugeType==="half"?"half_gauge_icon_unavailable":"icon_entity",selector:{select:{options:[{value:"primary",label:"Primary"},{value:"secondary",label:"Secondary"},{value:"tertiary",label:"Tertiary"}],mode:"dropdown",translation_key:"icon_entity_options"}}},{name:"combine_gauges",default:false,disabled:gaugeType!=="full",helper:"combine_gauges",selector:{boolean:{}}},{name:"rotate_gauge",default:false,disabled:gaugeType!=="full",helper:"rotate_gauge",selector:{boolean:{}}}]},{name:"graph",type:"expandable",flatten:true,disabled:gaugeType==="half",iconPath:mdiChartLineVariant,schema:[{name:"",type:"grid",schema:[{name:"show_graph",default:false,selector:{boolean:{}}},{name:"graph_hours_to_show",default:24,selector:{number:{min:1,max:168,step:1,mode:"box"}}},{name:"graph_points_per_hour",default:1,selector:{number:{min:0.1,max:16,step:0.1,mode:"box"}}}]}]},{name:"gauge_type",default:"standard",selector:{select:{options:[{label:"Standard",value:"standard",image:{src:standardGaugeIcon,src_dark:standardDarkGaugeIcon}},{label:"Half",value:"half",image:{src:halfGaugeIcon,src_dark:halfDarkGaugeIcon}},{label:"Full",value:"full",image:{src:fullGaugeIcon,src_dark:fullDarkGaugeIcon}}],translation_key:"gauge_type_options",box_max_columns:2,mode:"box"}}}]},{name:"segments",type:"mcg-list",iconPath:mdiSegment,schema:[{name:"",type:"grid",column_min_width:"100px",schema:[{name:"from",type:"mcg-template",required:true,schema:{number:{step:0.1}}},{name:"color",type:"mcg-template",required:true,schema:{color_rgb:{}}}]},{name:"label",type:"mcg-template",schema:{text:{}}}]},{name:"tap_action",selector:{ui_action:{}}}];});_this._localizeValue=function(key){return localize(_this.hass,"editor.".concat(key));};_this._computeLabel=function(schema){var _a;return ((_a=_this.hass)===null||_a===void 0?void 0:_a.localize("ui.panel.lovelace.editor.card.generic.".concat(schema.name)))||localize(_this.hass,"editor.".concat(schema.name));};_this._computeHelper=function(schema){if("helper"in schema){if(!schema.helper){return undefined;}return localize(_this.hass,"editor.helper.".concat(schema.helper));}return undefined;};return _this;}_inherits(ModernCircularGaugeEditor,_LitElement);return _createClass(ModernCircularGaugeEditor,[{key:"setConfig",value:function setConfig(config){var secondary=config.secondary;if(secondary===undefined&&config.secondary_entity!==undefined){secondary=config.secondary_entity;}if(_typeof(secondary)==="object"){var template=secondary.template||"";if(template.length>0){secondary=template;}}this._config=Object.assign(Object.assign({},config),{secondary:secondary,secondary_entity:undefined});}},{key:"render",value:function render(){var _a,_b,_c,_d,_e,_f,_g;if(!this.hass||!this._config){return E;}var entities=new Map();entities.set("primary",this._config.entity);var secondary=typeof this._config.secondary==="string"?this._config.secondary:(_a=this._config.secondary)===null||_a===void 0?void 0:_a.entity;if(secondary!==undefined){entities.set("secondary",secondary);}var tertiary=typeof this._config.tertiary==="string"?this._config.tertiary:(_b=this._config.tertiary)===null||_b===void 0?void 0:_b.entity;if(tertiary!==undefined){entities.set("tertiary",tertiary);}var defaultBackgroundOpacity=new Map();defaultBackgroundOpacity.set("primary",this._config.segments&&(this._config.needle||((_c=this._config.gauge_background_style)===null||_c===void 0?void 0:_c.color)=="adaptive")?0.45:1);if(this._config.secondary&&typeof this._config.secondary!="string"){defaultBackgroundOpacity.set("secondary",this._config.secondary.segments&&(this._config.secondary.needle||((_d=this._config.secondary.gauge_background_style)===null||_d===void 0?void 0:_d.color)=="adaptive")?0.45:1);}if(this._config.tertiary&&typeof this._config.tertiary!="string"){defaultBackgroundOpacity.set("tertiary",this._config.tertiary.segments&&(this._config.tertiary.needle||((_e=this._config.tertiary.gauge_background_style)===null||_e===void 0?void 0:_e.color)=="adaptive")?0.45:1);}var schema=this._schema(typeof this._config.secondary!="string"&&((_f=this._config.secondary)===null||_f===void 0?void 0:_f.show_gauge)=="inner",typeof this._config.tertiary!="string"&&((_g=this._config.tertiary)===null||_g===void 0?void 0:_g.show_gauge)=="inner",this._config.combine_gauges===true&&this._config.gauge_type==="full",this._config.gauge_type||"standard",entities,defaultBackgroundOpacity);var DATA=Object.assign({},this._config);return x(_templateObject$1||(_templateObject$1=_taggedTemplateLiteral(["\n    <ha-form\n      .hass=","\n      .data=","\n      .schema=","\n      .computeLabel=","\n      .localizeValue=","\n      .computeHelper=","\n      @value-changed=","\n    ></ha-form>\n    "])),this.hass,DATA,schema,this._computeLabel,this._localizeValue,this._computeHelper,this._valueChanged);}},{key:"_valueChanged",value:function _valueChanged(ev){var _a;var config=ev.detail.value;if(!config){return;}var newSecondary={};if(typeof((_a=this._config)===null||_a===void 0?void 0:_a.secondary)==="string"){newSecondary=Object.assign(Object.assign({},newSecondary),{entity:this._config.secondary});}if(_typeof(config.secondary)==="object"){Object.entries(config.secondary).forEach(function(_ref){var _ref2=_slicedToArray(_ref,2),key=_ref2[0],value=_ref2[1];if(isNaN(Number(key))){newSecondary=Object.assign(Object.assign({},newSecondary),_defineProperty({},key,value));}});}config.secondary=newSecondary;fireEvent(this,"config-changed",{config:config});}}],[{key:"styles",get:function get(){return i$6(_templateObject2$1||(_templateObject2$1=_taggedTemplateLiteral(["\n    "])));}}]);}(i$3);__decorate([n$2({attribute:false})],ModernCircularGaugeEditor.prototype,"hass",void 0);__decorate([r$2()],ModernCircularGaugeEditor.prototype,"_config",void 0);ModernCircularGaugeEditor=__decorate([t$1("modern-circular-gauge-editor")],ModernCircularGaugeEditor);

var mcgEditor = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get ModernCircularGaugeEditor () { return ModernCircularGaugeEditor; }
});

var _templateObject,_templateObject2;var ModernCircularGaugeBadgeEditor=function(_LitElement){function ModernCircularGaugeBadgeEditor(){var _this;_classCallCheck(this,ModernCircularGaugeBadgeEditor);_this=_callSuper(this,ModernCircularGaugeBadgeEditor,arguments);_this._schema=memoizeOne(function(defaultBackgroundOpacity){return [{name:"entity",type:"mcg-template",required:true,schema:{entity:{domain:NUMBER_ENTITY_DOMAINS}}},{name:"attribute",selector:{attribute:{hide_attributes:NON_NUMERIC_ATTRIBUTES}},context:{filter_entity:"entity"}},{name:"name",type:"mcg-template",schema:{text:{}}},{name:"",type:"grid",schema:[{name:"icon",type:"mcg-template",flatten:true,schema:{icon:{}},context:{icon_entity:"entity"}},{name:"unit",selector:{text:{}}},{name:"min",type:"mcg-template",default:DEFAULT_MIN,schema:{number:{step:0.1}}},{name:"max",type:"mcg-template",default:DEFAULT_MAX,schema:{number:{step:0.1}}}]},{name:"badge_appearance",type:"expandable",iconPath:mdiPalette,flatten:true,schema:[{name:"",type:"grid",schema:[{name:"needle",selector:{boolean:{}}},{name:"show_name",default:false,selector:{boolean:{}}},{name:"show_state",default:true,selector:{boolean:{}}},{name:"show_unit",default:true,selector:{boolean:{}}},{name:"show_icon",default:true,selector:{boolean:{}}},{name:"show_entity_picture",default:false,selector:{boolean:{}}},{name:"show_seconds",default:true,helper:"show_seconds",selector:{boolean:{}}},{name:"smooth_segments",selector:{boolean:{}}},{name:"start_from_zero",helper:"start_from_zero",selector:{boolean:{}}},{name:"decimals",selector:{number:{step:1,min:0}}},{name:"inverted_mode",default:false,selector:{boolean:{}}}]},{name:"state_text",helper:"state_text",selector:{template:{}}},{name:"gauge_foreground_style",type:"expandable",iconPath:mdiFlipToFront,schema:getGaugeStyleSchema(14)},{name:"gauge_background_style",type:"expandable",iconPath:mdiFlipToBack,schema:getGaugeStyleSchema(14,defaultBackgroundOpacity)}]},{name:"segments",type:"mcg-list",iconPath:mdiSegment,schema:[{name:"",type:"grid",column_min_width:"100px",schema:[{name:"from",type:"mcg-template",required:true,schema:{number:{step:0.1}}},{name:"color",type:"mcg-template",required:true,schema:{color_rgb:{}}}]}]},{name:"tap_action",selector:{ui_action:{}}}];});_this._computeLabel=function(schema){var _a;return ((_a=_this.hass)===null||_a===void 0?void 0:_a.localize("ui.panel.lovelace.editor.card.generic.".concat(schema.name)))||localize(_this.hass,"editor.".concat(schema.name));};_this._computeHelper=function(schema){if("helper"in schema){return localize(_this.hass,"editor.helper.".concat(schema.helper));}return undefined;};return _this;}_inherits(ModernCircularGaugeBadgeEditor,_LitElement);return _createClass(ModernCircularGaugeBadgeEditor,[{key:"setConfig",value:function setConfig(config){this._config=config;}},{key:"render",value:function render(){var _a;if(!this.hass||!this._config){return E;}var FORM=this._schema(this._config.segments&&(this._config.needle||((_a=this._config.gauge_background_style)===null||_a===void 0?void 0:_a.color)=="adaptive")?0.45:1);var DATA=this._config;return x(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    <ha-form\n      .hass=","\n      .data=","\n      .schema=","\n      .computeLabel=","\n      .computeHelper=","\n      @value-changed=","\n    ></ha-form>\n    "])),this.hass,DATA,FORM,this._computeLabel,this._computeHelper,this._valueChanged);}},{key:"_valueChanged",value:function _valueChanged(ev){var config=ev.detail.value;if(!config){return;}fireEvent(this,"config-changed",{config:config});}}],[{key:"styles",get:function get(){return i$6(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    "])));}}]);}(i$3);__decorate([n$2({attribute:false})],ModernCircularGaugeBadgeEditor.prototype,"hass",void 0);__decorate([r$2()],ModernCircularGaugeBadgeEditor.prototype,"_config",void 0);ModernCircularGaugeBadgeEditor=__decorate([t$1("modern-circular-gauge-badge-editor")],ModernCircularGaugeBadgeEditor);

var gaugeBadgeEditor = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get ModernCircularGaugeBadgeEditor () { return ModernCircularGaugeBadgeEditor; }
});
