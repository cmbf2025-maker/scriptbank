/* console.log('>>> start'); */
function Es(s, e) {
  for (var t = 0; t < e.length; t++) {
    const r = e[t];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const n in r)
        if (n !== "default" && !(n in s)) {
          const i = Object.getOwnPropertyDescriptor(r, n);
          i && Object.defineProperty(s, n, i.get ? i : {
            enumerable: !0,
            get: () => r[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
function Ss(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
function me(s) {
  if (Object.prototype.hasOwnProperty.call(s, "__esModule")) return s;
  var e = s.default;
  if (typeof e == "function") {
    var t = function r() {
      var n = !1;
      try {
        n = this instanceof r;
      } catch {
      }
      return n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(s).forEach(function(r) {
    var n = Object.getOwnPropertyDescriptor(s, r);
    Object.defineProperty(t, r, n.get ? n : {
      enumerable: !0,
      get: function() {
        return s[r];
      }
    });
  }), t;
}
var M = {}, Oe = {}, nt = function(s, e) {
  return nt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, nt(s, e);
};
function or(s, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  nt(s, e);
  function t() {
    this.constructor = s;
  }
  s.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var De = function() {
  return De = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, De.apply(this, arguments);
};
function de(s, e) {
  var t = {};
  for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && e.indexOf(r) < 0 && (t[r] = s[r]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(s); n < r.length; n++)
      e.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(s, r[n]) && (t[r[n]] = s[r[n]]);
  return t;
}
function ar(s, e, t, r) {
  var n = arguments.length, i = n < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, t) : r, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(s, e, t, r);
  else for (var a = s.length - 1; a >= 0; a--) (o = s[a]) && (i = (n < 3 ? o(i) : n > 3 ? o(e, t, i) : o(e, t)) || i);
  return n > 3 && i && Object.defineProperty(e, t, i), i;
}
function lr(s, e) {
  return function(t, r) {
    e(t, r, s);
  };
}
function ur(s, e, t, r, n, i) {
  function o(w) {
    if (w !== void 0 && typeof w != "function") throw new TypeError("Function expected");
    return w;
  }
  for (var a = r.kind, l = a === "getter" ? "get" : a === "setter" ? "set" : "value", u = !e && s ? r.static ? s : s.prototype : null, c = e || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}), d, f = !1, h = t.length - 1; h >= 0; h--) {
    var g = {};
    for (var _ in r) g[_] = _ === "access" ? {} : r[_];
    for (var _ in r.access) g.access[_] = r.access[_];
    g.addInitializer = function(w) {
      if (f) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(o(w || null));
    };
    var p = (0, t[h])(a === "accessor" ? { get: c.get, set: c.set } : c[l], g);
    if (a === "accessor") {
      if (p === void 0) continue;
      if (p === null || typeof p != "object") throw new TypeError("Object expected");
      (d = o(p.get)) && (c.get = d), (d = o(p.set)) && (c.set = d), (d = o(p.init)) && n.unshift(d);
    } else (d = o(p)) && (a === "field" ? n.unshift(d) : c[l] = d);
  }
  u && Object.defineProperty(u, r.name, c), f = !0;
}
function cr(s, e, t) {
  for (var r = arguments.length > 2, n = 0; n < e.length; n++)
    t = r ? e[n].call(s, t) : e[n].call(s);
  return r ? t : void 0;
}
function hr(s) {
  return typeof s == "symbol" ? s : "".concat(s);
}
function dr(s, e, t) {
  return typeof e == "symbol" && (e = e.description ? "[".concat(e.description, "]") : ""), Object.defineProperty(s, "name", { configurable: !0, value: t ? "".concat(t, " ", e) : e });
}
function fr(s, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(s, e);
}
function y(s, e, t, r) {
  function n(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (d) {
        o(d);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (d) {
        o(d);
      }
    }
    function u(c) {
      c.done ? i(c.value) : n(c.value).then(a, l);
    }
    u((r = r.apply(s, e || [])).next());
  });
}
function gr(s, e) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, n, i, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = a(0), o.throw = a(1), o.return = a(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(u) {
    return function(c) {
      return l([u, c]);
    };
  }
  function l(u) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, u[0] && (t = 0)), t; ) try {
      if (r = 1, n && (i = u[0] & 2 ? n.return : u[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, u[1])).done) return i;
      switch (n = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
        case 0:
        case 1:
          i = u;
          break;
        case 4:
          return t.label++, { value: u[1], done: !1 };
        case 5:
          t.label++, n = u[1], u = [0];
          continue;
        case 7:
          u = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            t = 0;
            continue;
          }
          if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
            t.label = u[1];
            break;
          }
          if (u[0] === 6 && t.label < i[1]) {
            t.label = i[1], i = u;
            break;
          }
          if (i && t.label < i[2]) {
            t.label = i[2], t.ops.push(u);
            break;
          }
          i[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      u = e.call(s, t);
    } catch (c) {
      u = [6, c], n = 0;
    } finally {
      r = i = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
var He = Object.create ? (function(s, e, t, r) {
  r === void 0 && (r = t);
  var n = Object.getOwnPropertyDescriptor(e, t);
  (!n || ("get" in n ? !e.__esModule : n.writable || n.configurable)) && (n = { enumerable: !0, get: function() {
    return e[t];
  } }), Object.defineProperty(s, r, n);
}) : (function(s, e, t, r) {
  r === void 0 && (r = t), s[r] = e[t];
});
function pr(s, e) {
  for (var t in s) t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && He(e, s, t);
}
function Le(s) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && s[e], r = 0;
  if (t) return t.call(s);
  if (s && typeof s.length == "number") return {
    next: function() {
      return s && r >= s.length && (s = void 0), { value: s && s[r++], done: !s };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function mt(s, e) {
  var t = typeof Symbol == "function" && s[Symbol.iterator];
  if (!t) return s;
  var r = t.call(s), n, i = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(n = r.next()).done; ) i.push(n.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      n && !n.done && (t = r.return) && t.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}
function _r() {
  for (var s = [], e = 0; e < arguments.length; e++)
    s = s.concat(mt(arguments[e]));
  return s;
}
function vr() {
  for (var s = 0, e = 0, t = arguments.length; e < t; e++) s += arguments[e].length;
  for (var r = Array(s), n = 0, e = 0; e < t; e++)
    for (var i = arguments[e], o = 0, a = i.length; o < a; o++, n++)
      r[n] = i[o];
  return r;
}
function wr(s, e, t) {
  if (t || arguments.length === 2) for (var r = 0, n = e.length, i; r < n; r++)
    (i || !(r in e)) && (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
  return s.concat(i || Array.prototype.slice.call(e));
}
function ce(s) {
  return this instanceof ce ? (this.v = s, this) : new ce(s);
}
function yr(s, e, t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = t.apply(s, e || []), n, i = [];
  return n = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", o), n[Symbol.asyncIterator] = function() {
    return this;
  }, n;
  function o(h) {
    return function(g) {
      return Promise.resolve(g).then(h, d);
    };
  }
  function a(h, g) {
    r[h] && (n[h] = function(_) {
      return new Promise(function(p, w) {
        i.push([h, _, p, w]) > 1 || l(h, _);
      });
    }, g && (n[h] = g(n[h])));
  }
  function l(h, g) {
    try {
      u(r[h](g));
    } catch (_) {
      f(i[0][3], _);
    }
  }
  function u(h) {
    h.value instanceof ce ? Promise.resolve(h.value.v).then(c, d) : f(i[0][2], h);
  }
  function c(h) {
    l("next", h);
  }
  function d(h) {
    l("throw", h);
  }
  function f(h, g) {
    h(g), i.shift(), i.length && l(i[0][0], i[0][1]);
  }
}
function br(s) {
  var e, t;
  return e = {}, r("next"), r("throw", function(n) {
    throw n;
  }), r("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function r(n, i) {
    e[n] = s[n] ? function(o) {
      return (t = !t) ? { value: ce(s[n](o)), done: !1 } : i ? i(o) : o;
    } : i;
  }
}
function mr(s) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = s[Symbol.asyncIterator], t;
  return e ? e.call(s) : (s = typeof Le == "function" ? Le(s) : s[Symbol.iterator](), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
    return this;
  }, t);
  function r(i) {
    t[i] = s[i] && function(o) {
      return new Promise(function(a, l) {
        o = s[i](o), n(a, l, o.done, o.value);
      });
    };
  }
  function n(i, o, a, l) {
    Promise.resolve(l).then(function(u) {
      i({ value: u, done: a });
    }, o);
  }
}
function Er(s, e) {
  return Object.defineProperty ? Object.defineProperty(s, "raw", { value: e }) : s.raw = e, s;
}
var Os = Object.create ? (function(s, e) {
  Object.defineProperty(s, "default", { enumerable: !0, value: e });
}) : function(s, e) {
  s.default = e;
}, it = function(s) {
  return it = Object.getOwnPropertyNames || function(e) {
    var t = [];
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
    return t;
  }, it(s);
};
function Sr(s) {
  if (s && s.__esModule) return s;
  var e = {};
  if (s != null) for (var t = it(s), r = 0; r < t.length; r++) t[r] !== "default" && He(e, s, t[r]);
  return Os(e, s), e;
}
function Or(s) {
  return s && s.__esModule ? s : { default: s };
}
function Tr(s, e, t, r) {
  if (t === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? s !== e || !r : !e.has(s)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? r : t === "a" ? r.call(s) : r ? r.value : e.get(s);
}
function kr(s, e, t, r, n) {
  if (r === "m") throw new TypeError("Private method is not writable");
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? s !== e || !n : !e.has(s)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? n.call(s, t) : n ? n.value = t : e.set(s, t), t;
}
function Ar(s, e) {
  if (e === null || typeof e != "object" && typeof e != "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof s == "function" ? e === s : s.has(e);
}
function Rr(s, e, t) {
  if (e != null) {
    if (typeof e != "object" && typeof e != "function") throw new TypeError("Object expected.");
    var r, n;
    if (t) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      r = e[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      r = e[Symbol.dispose], t && (n = r);
    }
    if (typeof r != "function") throw new TypeError("Object not disposable.");
    n && (r = function() {
      try {
        n.call(this);
      } catch (i) {
        return Promise.reject(i);
      }
    }), s.stack.push({ value: e, dispose: r, async: t });
  } else t && s.stack.push({ async: !0 });
  return e;
}
var Ts = typeof SuppressedError == "function" ? SuppressedError : function(s, e, t) {
  var r = new Error(t);
  return r.name = "SuppressedError", r.error = s, r.suppressed = e, r;
};
function jr(s) {
  function e(i) {
    s.error = s.hasError ? new Ts(i, s.error, "An error was suppressed during disposal.") : i, s.hasError = !0;
  }
  var t, r = 0;
  function n() {
    for (; t = s.stack.pop(); )
      try {
        if (!t.async && r === 1) return r = 0, s.stack.push(t), Promise.resolve().then(n);
        if (t.dispose) {
          var i = t.dispose.call(t.value);
          if (t.async) return r |= 2, Promise.resolve(i).then(n, function(o) {
            return e(o), n();
          });
        } else r |= 1;
      } catch (o) {
        e(o);
      }
    if (r === 1) return s.hasError ? Promise.reject(s.error) : Promise.resolve();
    if (s.hasError) throw s.error;
  }
  return n();
}
function Pr(s, e) {
  return typeof s == "string" && /^\.\.?\//.test(s) ? s.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(t, r, n, i, o) {
    return r ? e ? ".jsx" : ".js" : n && (!i || !o) ? t : n + i + "." + o.toLowerCase() + "js";
  }) : s;
}
const ks = {
  __extends: or,
  __assign: De,
  __rest: de,
  __decorate: ar,
  __param: lr,
  __esDecorate: ur,
  __runInitializers: cr,
  __propKey: hr,
  __setFunctionName: dr,
  __metadata: fr,
  __awaiter: y,
  __generator: gr,
  __createBinding: He,
  __exportStar: pr,
  __values: Le,
  __read: mt,
  __spread: _r,
  __spreadArrays: vr,
  __spreadArray: wr,
  __await: ce,
  __asyncGenerator: yr,
  __asyncDelegator: br,
  __asyncValues: mr,
  __makeTemplateObject: Er,
  __importStar: Sr,
  __importDefault: Or,
  __classPrivateFieldGet: Tr,
  __classPrivateFieldSet: kr,
  __classPrivateFieldIn: Ar,
  __addDisposableResource: Rr,
  __disposeResources: jr,
  __rewriteRelativeImportExtension: Pr
}, As = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __addDisposableResource: Rr,
  get __assign() {
    return De;
  },
  __asyncDelegator: br,
  __asyncGenerator: yr,
  __asyncValues: mr,
  __await: ce,
  __awaiter: y,
  __classPrivateFieldGet: Tr,
  __classPrivateFieldIn: Ar,
  __classPrivateFieldSet: kr,
  __createBinding: He,
  __decorate: ar,
  __disposeResources: jr,
  __esDecorate: ur,
  __exportStar: pr,
  __extends: or,
  __generator: gr,
  __importDefault: Or,
  __importStar: Sr,
  __makeTemplateObject: Er,
  __metadata: fr,
  __param: lr,
  __propKey: hr,
  __read: mt,
  __rest: de,
  __rewriteRelativeImportExtension: Pr,
  __runInitializers: cr,
  __setFunctionName: dr,
  __spread: _r,
  __spreadArray: wr,
  __spreadArrays: vr,
  __values: Le,
  default: ks
}, Symbol.toStringTag, { value: "Module" })), Rs = (s) => s ? (...e) => s(...e) : (...e) => fetch(...e);
let Ge = class extends Error {
  constructor(e, t = "FunctionsError", r) {
    super(e), this.name = t, this.context = r;
  }
}, Cr = class extends Ge {
  constructor(e) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
  }
}, ot = class extends Ge {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}, at = class extends Ge {
  constructor(e) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
  }
};
var Be;
(function(s) {
  s.Any = "any", s.ApNortheast1 = "ap-northeast-1", s.ApNortheast2 = "ap-northeast-2", s.ApSouth1 = "ap-south-1", s.ApSoutheast1 = "ap-southeast-1", s.ApSoutheast2 = "ap-southeast-2", s.CaCentral1 = "ca-central-1", s.EuCentral1 = "eu-central-1", s.EuWest1 = "eu-west-1", s.EuWest2 = "eu-west-2", s.EuWest3 = "eu-west-3", s.SaEast1 = "sa-east-1", s.UsEast1 = "us-east-1", s.UsWest1 = "us-west-1", s.UsWest2 = "us-west-2";
})(Be || (Be = {}));
class js {
  /**
   * Creates a new Functions client bound to an Edge Functions URL.
   *
   * @example
   * ```ts
   * import { FunctionsClient, FunctionRegion } from '@supabase/functions-js'
   *
   * const functions = new FunctionsClient('https://xyzcompany.supabase.co/functions/v1', {
   *   headers: { apikey: 'public-anon-key' },
   *   region: FunctionRegion.UsEast1,
   * })
   * ```
   */
  constructor(e, { headers: t = {}, customFetch: r, region: n = Be.Any } = {}) {
    this.url = e, this.headers = t, this.region = n, this.fetch = Rs(r);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   * @example
   * ```ts
   * functions.setAuth(session.access_token)
   * ```
   */
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   * @example
   * ```ts
   * const { data, error } = await functions.invoke('hello-world', {
   *   body: { name: 'Ada' },
   * })
   * ```
   */
  invoke(e) {
    return y(this, arguments, void 0, function* (t, r = {}) {
      var n;
      let i, o;
      try {
        const { headers: a, method: l, body: u, signal: c, timeout: d } = r;
        let f = {}, { region: h } = r;
        h || (h = this.region);
        const g = new URL(`${this.url}/${t}`);
        h && h !== "any" && (f["x-region"] = h, g.searchParams.set("forceFunctionRegion", h));
        let _;
        u && (a && !Object.prototype.hasOwnProperty.call(a, "Content-Type") || !a) ? typeof Blob < "u" && u instanceof Blob || u instanceof ArrayBuffer ? (f["Content-Type"] = "application/octet-stream", _ = u) : typeof u == "string" ? (f["Content-Type"] = "text/plain", _ = u) : typeof FormData < "u" && u instanceof FormData ? _ = u : (f["Content-Type"] = "application/json", _ = JSON.stringify(u)) : _ = u;
        let p = c;
        d && (o = new AbortController(), i = setTimeout(() => o.abort(), d), c ? (p = o.signal, c.addEventListener("abort", () => o.abort())) : p = o.signal);
        const w = yield this.fetch(g.toString(), {
          method: l || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, f), this.headers), a),
          body: _,
          signal: p
        }).catch((T) => {
          throw new Cr(T);
        }), b = w.headers.get("x-relay-error");
        if (b && b === "true")
          throw new ot(w);
        if (!w.ok)
          throw new at(w);
        let v = ((n = w.headers.get("Content-Type")) !== null && n !== void 0 ? n : "text/plain").split(";")[0].trim(), S;
        return v === "application/json" ? S = yield w.json() : v === "application/octet-stream" || v === "application/pdf" ? S = yield w.blob() : v === "text/event-stream" ? S = w : v === "multipart/form-data" ? S = yield w.formData() : S = yield w.text(), { data: S, error: null, response: w };
      } catch (a) {
        return {
          data: null,
          error: a,
          response: a instanceof at || a instanceof ot ? a.context : void 0
        };
      } finally {
        i && clearTimeout(i);
      }
    });
  }
}
const Ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FunctionRegion() {
    return Be;
  },
  FunctionsClient: js,
  FunctionsError: Ge,
  FunctionsFetchError: Cr,
  FunctionsHttpError: at,
  FunctionsRelayError: ot
}, Symbol.toStringTag, { value: "Module" })), Ir = /* @__PURE__ */ me(Ps);
var $ = {};
const fe = /* @__PURE__ */ me(As);
var Te = {}, ke = {}, Ae = {}, Re = {}, je = {}, Pe = {}, Pt;
function $r() {
  if (Pt) return Pe;
  Pt = 1, Object.defineProperty(Pe, "__esModule", { value: !0 });
  class s extends Error {
    /**
     * @example
     * ```ts
     * import PostgrestError from '@supabase/postgrest-js'
     *
     * throw new PostgrestError({
     *   message: 'Row level security prevented the request',
     *   details: 'RLS denied the insert',
     *   hint: 'Check your policies',
     *   code: 'PGRST301',
     * })
     * ```
     */
    constructor(t) {
      super(t.message), this.name = "PostgrestError", this.details = t.details, this.hint = t.hint, this.code = t.code;
    }
  }
  return Pe.default = s, Pe;
}
var Ct;
function xr() {
  if (Ct) return je;
  Ct = 1, Object.defineProperty(je, "__esModule", { value: !0 });
  const e = fe.__importDefault($r());
  let t = class {
    /**
     * Creates a builder configured for a specific PostgREST request.
     *
     * @example
     * ```ts
     * import PostgrestQueryBuilder from '@supabase/postgrest-js'
     *
     * const builder = new PostgrestQueryBuilder(
     *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
     *   { headers: new Headers({ apikey: 'public-anon-key' }) }
     * )
     * ```
     */
    constructor(n) {
      var i, o;
      this.shouldThrowOnError = !1, this.method = n.method, this.url = n.url, this.headers = new Headers(n.headers), this.schema = n.schema, this.body = n.body, this.shouldThrowOnError = (i = n.shouldThrowOnError) !== null && i !== void 0 ? i : !1, this.signal = n.signal, this.isMaybeSingle = (o = n.isMaybeSingle) !== null && o !== void 0 ? o : !1, n.fetch ? this.fetch = n.fetch : this.fetch = fetch;
    }
    /**
     * If there's an error with the query, throwOnError will reject the promise by
     * throwing the error instead of returning it as part of a successful response.
     *
     * {@link https://github.com/supabase/supabase-js/issues/92}
     */
    throwOnError() {
      return this.shouldThrowOnError = !0, this;
    }
    /**
     * Set an HTTP header for the request.
     */
    setHeader(n, i) {
      return this.headers = new Headers(this.headers), this.headers.set(n, i), this;
    }
    then(n, i) {
      this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)), this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json");
      const o = this.fetch;
      let a = o(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal
      }).then(async (l) => {
        var u, c, d, f;
        let h = null, g = null, _ = null, p = l.status, w = l.statusText;
        if (l.ok) {
          if (this.method !== "HEAD") {
            const T = await l.text();
            T === "" || (this.headers.get("Accept") === "text/csv" || this.headers.get("Accept") && (!((u = this.headers.get("Accept")) === null || u === void 0) && u.includes("application/vnd.pgrst.plan+text")) ? g = T : g = JSON.parse(T));
          }
          const v = (c = this.headers.get("Prefer")) === null || c === void 0 ? void 0 : c.match(/count=(exact|planned|estimated)/), S = (d = l.headers.get("content-range")) === null || d === void 0 ? void 0 : d.split("/");
          v && S && S.length > 1 && (_ = parseInt(S[1])), this.isMaybeSingle && this.method === "GET" && Array.isArray(g) && (g.length > 1 ? (h = {
            // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
            code: "PGRST116",
            details: `Results contain ${g.length} rows, application/vnd.pgrst.object+json requires 1 row`,
            hint: null,
            message: "JSON object requested, multiple (or no) rows returned"
          }, g = null, _ = null, p = 406, w = "Not Acceptable") : g.length === 1 ? g = g[0] : g = null);
        } else {
          const v = await l.text();
          try {
            h = JSON.parse(v), Array.isArray(h) && l.status === 404 && (g = [], h = null, p = 200, w = "OK");
          } catch {
            l.status === 404 && v === "" ? (p = 204, w = "No Content") : h = {
              message: v
            };
          }
          if (h && this.isMaybeSingle && (!((f = h?.details) === null || f === void 0) && f.includes("0 rows")) && (h = null, p = 200, w = "OK"), h && this.shouldThrowOnError)
            throw new e.default(h);
        }
        return {
          error: h,
          data: g,
          count: _,
          status: p,
          statusText: w
        };
      });
      return this.shouldThrowOnError || (a = a.catch((l) => {
        var u, c, d, f, h, g;
        let _ = "";
        const p = l?.cause;
        if (p) {
          const w = (u = p?.message) !== null && u !== void 0 ? u : "", b = (c = p?.code) !== null && c !== void 0 ? c : "";
          _ = `${(d = l?.name) !== null && d !== void 0 ? d : "FetchError"}: ${l?.message}`, _ += `

Caused by: ${(f = p?.name) !== null && f !== void 0 ? f : "Error"}: ${w}`, b && (_ += ` (${b})`), p?.stack && (_ += `
${p.stack}`);
        } else
          _ = (h = l?.stack) !== null && h !== void 0 ? h : "";
        return {
          error: {
            message: `${(g = l?.name) !== null && g !== void 0 ? g : "FetchError"}: ${l?.message}`,
            details: _,
            hint: "",
            code: ""
          },
          data: null,
          count: null,
          status: 0,
          statusText: ""
        };
      })), a.then(n, i);
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
     */
    returns() {
      return this;
    }
    /**
     * Override the type of the returned `data` field in the response.
     *
     * @typeParam NewResult - The new type to cast the response data to
     * @typeParam Options - Optional type configuration (defaults to { merge: true })
     * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
     * @example
     * ```typescript
     * // Merge with existing types (default behavior)
     * const query = supabase
     *   .from('users')
     *   .select()
     *   .overrideTypes<{ custom_field: string }>()
     *
     * // Replace existing types completely
     * const replaceQuery = supabase
     *   .from('users')
     *   .select()
     *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
     * ```
     * @returns A PostgrestBuilder instance with the new type
     */
    overrideTypes() {
      return this;
    }
  };
  return je.default = t, je;
}
var It;
function Ur() {
  if (It) return Re;
  It = 1, Object.defineProperty(Re, "__esModule", { value: !0 });
  const e = fe.__importDefault(xr());
  let t = class extends e.default {
    /**
     * Perform a SELECT on the query result.
     *
     * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
     * return modified rows. By calling this method, modified rows are returned in
     * `data`.
     *
     * @param columns - The columns to retrieve, separated by commas
     */
    select(n) {
      let i = !1;
      const o = (n ?? "*").split("").map((a) => /\s/.test(a) && !i ? "" : (a === '"' && (i = !i), a)).join("");
      return this.url.searchParams.set("select", o), this.headers.append("Prefer", "return=representation"), this;
    }
    /**
     * Order the query result by `column`.
     *
     * You can call this method multiple times to order by multiple columns.
     *
     * You can order referenced tables, but it only affects the ordering of the
     * parent table if you use `!inner` in the query.
     *
     * @param column - The column to order by
     * @param options - Named parameters
     * @param options.ascending - If `true`, the result will be in ascending order
     * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
     * `null`s appear last.
     * @param options.referencedTable - Set this to order a referenced table by
     * its columns
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */
    order(n, { ascending: i = !0, nullsFirst: o, foreignTable: a, referencedTable: l = a } = {}) {
      const u = l ? `${l}.order` : "order", c = this.url.searchParams.get(u);
      return this.url.searchParams.set(u, `${c ? `${c},` : ""}${n}.${i ? "asc" : "desc"}${o === void 0 ? "" : o ? ".nullsfirst" : ".nullslast"}`), this;
    }
    /**
     * Limit the query result by `count`.
     *
     * @param count - The maximum number of rows to return
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */
    limit(n, { foreignTable: i, referencedTable: o = i } = {}) {
      const a = typeof o > "u" ? "limit" : `${o}.limit`;
      return this.url.searchParams.set(a, `${n}`), this;
    }
    /**
     * Limit the query result by starting at an offset `from` and ending at the offset `to`.
     * Only records within this range are returned.
     * This respects the query order and if there is no order clause the range could behave unexpectedly.
     * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
     * and fourth rows of the query.
     *
     * @param from - The starting index from which to limit the result
     * @param to - The last index to which to limit the result
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */
    range(n, i, { foreignTable: o, referencedTable: a = o } = {}) {
      const l = typeof a > "u" ? "offset" : `${a}.offset`, u = typeof a > "u" ? "limit" : `${a}.limit`;
      return this.url.searchParams.set(l, `${n}`), this.url.searchParams.set(u, `${i - n + 1}`), this;
    }
    /**
     * Set the AbortSignal for the fetch request.
     *
     * @param signal - The AbortSignal to use for the fetch request
     */
    abortSignal(n) {
      return this.signal = n, this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be one row (e.g. using `.limit(1)`), otherwise this
     * returns an error.
     */
    single() {
      return this.headers.set("Accept", "application/vnd.pgrst.object+json"), this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
     * this returns an error.
     */
    maybeSingle() {
      return this.method === "GET" ? this.headers.set("Accept", "application/json") : this.headers.set("Accept", "application/vnd.pgrst.object+json"), this.isMaybeSingle = !0, this;
    }
    /**
     * Return `data` as a string in CSV format.
     */
    csv() {
      return this.headers.set("Accept", "text/csv"), this;
    }
    /**
     * Return `data` as an object in [GeoJSON](https://geojson.org) format.
     */
    geojson() {
      return this.headers.set("Accept", "application/geo+json"), this;
    }
    /**
     * Return `data` as the EXPLAIN plan for the query.
     *
     * You need to enable the
     * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
     * setting before using this method.
     *
     * @param options - Named parameters
     *
     * @param options.analyze - If `true`, the query will be executed and the
     * actual run time will be returned
     *
     * @param options.verbose - If `true`, the query identifier will be returned
     * and `data` will include the output columns of the query
     *
     * @param options.settings - If `true`, include information on configuration
     * parameters that affect query planning
     *
     * @param options.buffers - If `true`, include information on buffer usage
     *
     * @param options.wal - If `true`, include information on WAL record generation
     *
     * @param options.format - The format of the output, can be `"text"` (default)
     * or `"json"`
     */
    explain({ analyze: n = !1, verbose: i = !1, settings: o = !1, buffers: a = !1, wal: l = !1, format: u = "text" } = {}) {
      var c;
      const d = [
        n ? "analyze" : null,
        i ? "verbose" : null,
        o ? "settings" : null,
        a ? "buffers" : null,
        l ? "wal" : null
      ].filter(Boolean).join("|"), f = (c = this.headers.get("Accept")) !== null && c !== void 0 ? c : "application/json";
      return this.headers.set("Accept", `application/vnd.pgrst.plan+${u}; for="${f}"; options=${d};`), u === "json" ? this : this;
    }
    /**
     * Rollback the query.
     *
     * `data` will still be returned, but the query is not committed.
     */
    rollback() {
      return this.headers.append("Prefer", "tx=rollback"), this;
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
     */
    returns() {
      return this;
    }
    /**
     * Set the maximum number of rows that can be affected by the query.
     * Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
     *
     * @param value - The maximum number of rows that can be affected
     */
    maxAffected(n) {
      return this.headers.append("Prefer", "handling=strict"), this.headers.append("Prefer", `max-affected=${n}`), this;
    }
  };
  return Re.default = t, Re;
}
var $t;
function Et() {
  if ($t) return Ae;
  $t = 1, Object.defineProperty(Ae, "__esModule", { value: !0 });
  const e = fe.__importDefault(Ur()), t = new RegExp("[,()]");
  let r = class extends e.default {
    /**
     * Match only rows where `column` is equal to `value`.
     *
     * To check if the value of `column` is NULL, you should use `.is()` instead.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    eq(i, o) {
      return this.url.searchParams.append(i, `eq.${o}`), this;
    }
    /**
     * Match only rows where `column` is not equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    neq(i, o) {
      return this.url.searchParams.append(i, `neq.${o}`), this;
    }
    /**
     * Match only rows where `column` is greater than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    gt(i, o) {
      return this.url.searchParams.append(i, `gt.${o}`), this;
    }
    /**
     * Match only rows where `column` is greater than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    gte(i, o) {
      return this.url.searchParams.append(i, `gte.${o}`), this;
    }
    /**
     * Match only rows where `column` is less than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    lt(i, o) {
      return this.url.searchParams.append(i, `lt.${o}`), this;
    }
    /**
     * Match only rows where `column` is less than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    lte(i, o) {
      return this.url.searchParams.append(i, `lte.${o}`), this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-sensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */
    like(i, o) {
      return this.url.searchParams.append(i, `like.${o}`), this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    likeAllOf(i, o) {
      return this.url.searchParams.append(i, `like(all).{${o.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    likeAnyOf(i, o) {
      return this.url.searchParams.append(i, `like(any).{${o.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-insensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */
    ilike(i, o) {
      return this.url.searchParams.append(i, `ilike.${o}`), this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    ilikeAllOf(i, o) {
      return this.url.searchParams.append(i, `ilike(all).{${o.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    ilikeAnyOf(i, o) {
      return this.url.searchParams.append(i, `ilike(any).{${o.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` matches the PostgreSQL regex `pattern`
     * case-sensitively (using the `~` operator).
     *
     * @param column - The column to filter on
     * @param pattern - The PostgreSQL regular expression pattern to match with
     */
    regexMatch(i, o) {
      return this.url.searchParams.append(i, `match.${o}`), this;
    }
    /**
     * Match only rows where `column` matches the PostgreSQL regex `pattern`
     * case-insensitively (using the `~*` operator).
     *
     * @param column - The column to filter on
     * @param pattern - The PostgreSQL regular expression pattern to match with
     */
    regexIMatch(i, o) {
      return this.url.searchParams.append(i, `imatch.${o}`), this;
    }
    /**
     * Match only rows where `column` IS `value`.
     *
     * For non-boolean columns, this is only relevant for checking if the value of
     * `column` is NULL by setting `value` to `null`.
     *
     * For boolean columns, you can also set `value` to `true` or `false` and it
     * will behave the same way as `.eq()`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    is(i, o) {
      return this.url.searchParams.append(i, `is.${o}`), this;
    }
    /**
     * Match only rows where `column` IS DISTINCT FROM `value`.
     *
     * Unlike `.neq()`, this treats `NULL` as a comparable value. Two `NULL` values
     * are considered equal (not distinct), and comparing `NULL` with any non-NULL
     * value returns true (distinct).
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    isDistinct(i, o) {
      return this.url.searchParams.append(i, `isdistinct.${o}`), this;
    }
    /**
     * Match only rows where `column` is included in the `values` array.
     *
     * @param column - The column to filter on
     * @param values - The values array to filter with
     */
    in(i, o) {
      const a = Array.from(new Set(o)).map((l) => typeof l == "string" && t.test(l) ? `"${l}"` : `${l}`).join(",");
      return this.url.searchParams.append(i, `in.(${a})`), this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * `column` contains every element appearing in `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */
    contains(i, o) {
      return typeof o == "string" ? this.url.searchParams.append(i, `cs.${o}`) : Array.isArray(o) ? this.url.searchParams.append(i, `cs.{${o.join(",")}}`) : this.url.searchParams.append(i, `cs.${JSON.stringify(o)}`), this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * every element appearing in `column` is contained by `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */
    containedBy(i, o) {
      return typeof o == "string" ? this.url.searchParams.append(i, `cd.${o}`) : Array.isArray(o) ? this.url.searchParams.append(i, `cd.{${o.join(",")}}`) : this.url.searchParams.append(i, `cd.${JSON.stringify(o)}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is greater than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeGt(i, o) {
      return this.url.searchParams.append(i, `sr.${o}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or greater than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeGte(i, o) {
      return this.url.searchParams.append(i, `nxl.${o}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is less than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeLt(i, o) {
      return this.url.searchParams.append(i, `sl.${o}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or less than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeLte(i, o) {
      return this.url.searchParams.append(i, `nxr.${o}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where `column` is
     * mutually exclusive to `range` and there can be no element between the two
     * ranges.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeAdjacent(i, o) {
      return this.url.searchParams.append(i, `adj.${o}`), this;
    }
    /**
     * Only relevant for array and range columns. Match only rows where
     * `column` and `value` have an element in common.
     *
     * @param column - The array or range column to filter on
     * @param value - The array or range value to filter with
     */
    overlaps(i, o) {
      return typeof o == "string" ? this.url.searchParams.append(i, `ov.${o}`) : this.url.searchParams.append(i, `ov.{${o.join(",")}}`), this;
    }
    /**
     * Only relevant for text and tsvector columns. Match only rows where
     * `column` matches the query string in `query`.
     *
     * @param column - The text or tsvector column to filter on
     * @param query - The query text to match with
     * @param options - Named parameters
     * @param options.config - The text search configuration to use
     * @param options.type - Change how the `query` text is interpreted
     */
    textSearch(i, o, { config: a, type: l } = {}) {
      let u = "";
      l === "plain" ? u = "pl" : l === "phrase" ? u = "ph" : l === "websearch" && (u = "w");
      const c = a === void 0 ? "" : `(${a})`;
      return this.url.searchParams.append(i, `${u}fts${c}.${o}`), this;
    }
    /**
     * Match only rows where each column in `query` keys is equal to its
     * associated value. Shorthand for multiple `.eq()`s.
     *
     * @param query - The object to filter with, with column names as keys mapped
     * to their filter values
     */
    match(i) {
      return Object.entries(i).forEach(([o, a]) => {
        this.url.searchParams.append(o, `eq.${a}`);
      }), this;
    }
    /**
     * Match only rows which doesn't satisfy the filter.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to be negated to filter with, following
     * PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */
    not(i, o, a) {
      return this.url.searchParams.append(i, `not.${o}.${a}`), this;
    }
    /**
     * Match only rows which satisfy at least one of the filters.
     *
     * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure it's properly sanitized.
     *
     * It's currently not possible to do an `.or()` filter across multiple tables.
     *
     * @param filters - The filters to use, following PostgREST syntax
     * @param options - Named parameters
     * @param options.referencedTable - Set this to filter on referenced tables
     * instead of the parent table
     * @param options.foreignTable - Deprecated, use `referencedTable` instead
     */
    or(i, { foreignTable: o, referencedTable: a = o } = {}) {
      const l = a ? `${a}.or` : "or";
      return this.url.searchParams.append(l, `(${i})`), this;
    }
    /**
     * Match only rows which satisfy the filter. This is an escape hatch - you
     * should use the specific filter methods wherever possible.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to filter with, following PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */
    filter(i, o, a) {
      return this.url.searchParams.append(i, `${o}.${a}`), this;
    }
  };
  return Ae.default = r, Ae;
}
var xt;
function Nr() {
  if (xt) return ke;
  xt = 1, Object.defineProperty(ke, "__esModule", { value: !0 });
  const e = fe.__importDefault(Et());
  let t = class {
    /**
     * Creates a query builder scoped to a Postgres table or view.
     *
     * @example
     * ```ts
     * import PostgrestQueryBuilder from '@supabase/postgrest-js'
     *
     * const query = new PostgrestQueryBuilder(
     *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
     *   { headers: { apikey: 'public-anon-key' } }
     * )
     * ```
     */
    constructor(n, { headers: i = {}, schema: o, fetch: a }) {
      this.url = n, this.headers = new Headers(i), this.schema = o, this.fetch = a;
    }
    /**
     * Perform a SELECT query on the table or view.
     *
     * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
     *
     * @param options - Named parameters
     *
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     *
     * @param options.count - Count algorithm to use to count rows in the table or view.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    select(n, i) {
      const { head: o = !1, count: a } = i ?? {}, l = o ? "HEAD" : "GET";
      let u = !1;
      const c = (n ?? "*").split("").map((d) => /\s/.test(d) && !u ? "" : (d === '"' && (u = !u), d)).join("");
      return this.url.searchParams.set("select", c), a && this.headers.append("Prefer", `count=${a}`), new e.default({
        method: l,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch
      });
    }
    /**
     * Perform an INSERT into the table or view.
     *
     * By default, inserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to insert. Pass an object to insert a single row
     * or an array to insert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count inserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. Only applies for bulk
     * inserts.
     */
    insert(n, { count: i, defaultToNull: o = !0 } = {}) {
      var a;
      const l = "POST";
      if (i && this.headers.append("Prefer", `count=${i}`), o || this.headers.append("Prefer", "missing=default"), Array.isArray(n)) {
        const u = n.reduce((c, d) => c.concat(Object.keys(d)), []);
        if (u.length > 0) {
          const c = [...new Set(u)].map((d) => `"${d}"`);
          this.url.searchParams.set("columns", c.join(","));
        }
      }
      return new e.default({
        method: l,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: n,
        fetch: (a = this.fetch) !== null && a !== void 0 ? a : fetch
      });
    }
    /**
    * Perform an UPSERT on the table or view. Depending on the column(s) passed
    * to `onConflict`, `.upsert()` allows you to perform the equivalent of
    * `.insert()` if a row with the corresponding `onConflict` columns doesn't
    * exist, or if it does exist, perform an alternative action depending on
    * `ignoreDuplicates`.
    *
    * By default, upserted rows are not returned. To return it, chain the call
    * with `.select()`.
    *
    * @param values - The values to upsert with. Pass an object to upsert a
    * single row or an array to upsert multiple rows.
    *
    * @param options - Named parameters
    *
    * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
    * duplicate rows are determined. Two rows are duplicates if all the
    * `onConflict` columns are equal.
    *
    * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
    * `false`, duplicate rows are merged with existing rows.
    *
    * @param options.count - Count algorithm to use to count upserted rows.
    *
    * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
    * hood.
    *
    * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
    * statistics under the hood.
    *
    * `"estimated"`: Uses exact count for low numbers and planned count for high
    * numbers.
    *
    * @param options.defaultToNull - Make missing fields default to `null`.
    * Otherwise, use the default value for the column. This only applies when
    * inserting new rows, not when merging with existing rows under
    * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
    *
    * @example Upsert a single row using a unique key
    * ```ts
    * // Upserting a single row, overwriting based on the 'username' unique column
    * const { data, error } = await supabase
    *   .from('users')
    *   .upsert({ username: 'supabot' }, { onConflict: 'username' })
    *
    * // Example response:
    * // {
    * //   data: [
    * //     { id: 4, message: 'bar', username: 'supabot' }
    * //   ],
    * //   error: null
    * // }
    * ```
    *
    * @example Upsert with conflict resolution and exact row counting
    * ```ts
    * // Upserting and returning exact count
    * const { data, error, count } = await supabase
    *   .from('users')
    *   .upsert(
    *     {
    *       id: 3,
    *       message: 'foo',
    *       username: 'supabot'
    *     },
    *     {
    *       onConflict: 'username',
    *       count: 'exact'
    *     }
    *   )
    *
    * // Example response:
    * // {
    * //   data: [
    * //     {
    * //       id: 42,
    * //       handle: "saoirse",
    * //       display_name: "Saoirse"
    * //     }
    * //   ],
    * //   count: 1,
    * //   error: null
    * // }
    * ```
    */
    upsert(n, { onConflict: i, ignoreDuplicates: o = !1, count: a, defaultToNull: l = !0 } = {}) {
      var u;
      const c = "POST";
      if (this.headers.append("Prefer", `resolution=${o ? "ignore" : "merge"}-duplicates`), i !== void 0 && this.url.searchParams.set("on_conflict", i), a && this.headers.append("Prefer", `count=${a}`), l || this.headers.append("Prefer", "missing=default"), Array.isArray(n)) {
        const d = n.reduce((f, h) => f.concat(Object.keys(h)), []);
        if (d.length > 0) {
          const f = [...new Set(d)].map((h) => `"${h}"`);
          this.url.searchParams.set("columns", f.join(","));
        }
      }
      return new e.default({
        method: c,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: n,
        fetch: (u = this.fetch) !== null && u !== void 0 ? u : fetch
      });
    }
    /**
     * Perform an UPDATE on the table or view.
     *
     * By default, updated rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param values - The values to update with
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count updated rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    update(n, { count: i } = {}) {
      var o;
      const a = "PATCH";
      return i && this.headers.append("Prefer", `count=${i}`), new e.default({
        method: a,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: n,
        fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch
      });
    }
    /**
     * Perform a DELETE on the table or view.
     *
     * By default, deleted rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count deleted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    delete({ count: n } = {}) {
      var i;
      const o = "DELETE";
      return n && this.headers.append("Prefer", `count=${n}`), new e.default({
        method: o,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch
      });
    }
  };
  return ke.default = t, ke;
}
var Ut;
function Cs() {
  if (Ut) return Te;
  Ut = 1, Object.defineProperty(Te, "__esModule", { value: !0 });
  const s = fe, e = s.__importDefault(Nr()), t = s.__importDefault(Et());
  let r = class Dr {
    // TODO: Add back shouldThrowOnError once we figure out the typings
    /**
     * Creates a PostgREST client.
     *
     * @param url - URL of the PostgREST endpoint
     * @param options - Named parameters
     * @param options.headers - Custom headers
     * @param options.schema - Postgres schema to switch to
     * @param options.fetch - Custom fetch
     * @example
     * ```ts
     * import PostgrestClient from '@supabase/postgrest-js'
     *
     * const postgrest = new PostgrestClient('https://xyzcompany.supabase.co/rest/v1', {
     *   headers: { apikey: 'public-anon-key' },
     *   schema: 'public',
     * })
     * ```
     */
    constructor(i, { headers: o = {}, schema: a, fetch: l } = {}) {
      this.url = i, this.headers = new Headers(o), this.schemaName = a, this.fetch = l;
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */
    from(i) {
      if (!i || typeof i != "string" || i.trim() === "")
        throw new Error("Invalid relation name: relation must be a non-empty string.");
      const o = new URL(`${this.url}/${i}`);
      return new e.default(o, {
        headers: new Headers(this.headers),
        schema: this.schemaName,
        fetch: this.fetch
      });
    }
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */
    schema(i) {
      return new Dr(this.url, {
        headers: this.headers,
        schema: i,
        fetch: this.fetch
      });
    }
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.get - When set to `true`, the function will be called with
     * read-only access mode.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @example
     * ```ts
     * // For cross-schema functions where type inference fails, use overrideTypes:
     * const { data } = await supabase
     *   .schema('schema_b')
     *   .rpc('function_a', {})
     *   .overrideTypes<{ id: string; user_id: string }[]>()
     * ```
     */
    rpc(i, o = {}, { head: a = !1, get: l = !1, count: u } = {}) {
      var c;
      let d;
      const f = new URL(`${this.url}/rpc/${i}`);
      let h;
      a || l ? (d = a ? "HEAD" : "GET", Object.entries(o).filter(([_, p]) => p !== void 0).map(([_, p]) => [_, Array.isArray(p) ? `{${p.join(",")}}` : `${p}`]).forEach(([_, p]) => {
        f.searchParams.append(_, p);
      })) : (d = "POST", h = o);
      const g = new Headers(this.headers);
      return u && g.set("Prefer", `count=${u}`), new t.default({
        method: d,
        url: f,
        headers: g,
        schema: this.schemaName,
        body: h,
        fetch: (c = this.fetch) !== null && c !== void 0 ? c : fetch
      });
    }
  };
  return Te.default = r, Te;
}
var Nt;
function Lr() {
  if (Nt) return $;
  Nt = 1, Object.defineProperty($, "__esModule", { value: !0 }), $.PostgrestError = $.PostgrestBuilder = $.PostgrestTransformBuilder = $.PostgrestFilterBuilder = $.PostgrestQueryBuilder = $.PostgrestClient = void 0;
  const s = fe, e = s.__importDefault(Cs());
  $.PostgrestClient = e.default;
  const t = s.__importDefault(Nr());
  $.PostgrestQueryBuilder = t.default;
  const r = s.__importDefault(Et());
  $.PostgrestFilterBuilder = r.default;
  const n = s.__importDefault(Ur());
  $.PostgrestTransformBuilder = n.default;
  const i = s.__importDefault(xr());
  $.PostgrestBuilder = i.default;
  const o = s.__importDefault($r());
  return $.PostgrestError = o.default, $.default = {
    PostgrestClient: e.default,
    PostgrestQueryBuilder: t.default,
    PostgrestFilterBuilder: r.default,
    PostgrestTransformBuilder: n.default,
    PostgrestBuilder: i.default,
    PostgrestError: o.default
  }, $;
}
class Br {
  /**
   * Static-only utility – prevent instantiation.
   */
  constructor() {
  }
  static detectEnvironment() {
    var e;
    if (typeof WebSocket < "u")
      return { type: "native", constructor: WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
      return { type: "native", constructor: globalThis.WebSocket };
    if (typeof global < "u" && typeof global.WebSocket < "u")
      return { type: "native", constructor: global.WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocketPair < "u" && typeof globalThis.WebSocket > "u")
      return {
        type: "cloudflare",
        error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
      };
    if (typeof globalThis < "u" && globalThis.EdgeRuntime || typeof navigator < "u" && (!((e = navigator.userAgent) === null || e === void 0) && e.includes("Vercel-Edge")))
      return {
        type: "unsupported",
        error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
      };
    if (typeof process < "u") {
      const t = process.versions;
      if (t && t.node) {
        const r = t.node, n = parseInt(r.replace(/^v/, "").split(".")[0]);
        return n >= 22 ? typeof globalThis.WebSocket < "u" ? { type: "native", constructor: globalThis.WebSocket } : {
          type: "unsupported",
          error: `Node.js ${n} detected but native WebSocket not found.`,
          workaround: "Provide a WebSocket implementation via the transport option."
        } : {
          type: "unsupported",
          error: `Node.js ${n} detected without native WebSocket support.`,
          workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`
        };
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
    };
  }
  /**
   * Returns the best available WebSocket constructor for the current runtime.
   *
   * @example
   * ```ts
   * const WS = WebSocketFactory.getWebSocketConstructor()
   * const socket = new WS('wss://realtime.supabase.co/socket')
   * ```
   */
  static getWebSocketConstructor() {
    const e = this.detectEnvironment();
    if (e.constructor)
      return e.constructor;
    let t = e.error || "WebSocket not supported in this environment.";
    throw e.workaround && (t += `

Suggested solution: ${e.workaround}`), new Error(t);
  }
  /**
   * Creates a WebSocket using the detected constructor.
   *
   * @example
   * ```ts
   * const socket = WebSocketFactory.createWebSocket('wss://realtime.supabase.co/socket')
   * ```
   */
  static createWebSocket(e, t) {
    const r = this.getWebSocketConstructor();
    return new r(e, t);
  }
  /**
   * Detects whether the runtime can establish WebSocket connections.
   *
   * @example
   * ```ts
   * if (!WebSocketFactory.isWebSocketSupported()) {
   *   console.warn('Falling back to long polling')
   * }
   * ```
   */
  static isWebSocketSupported() {
    try {
      const e = this.detectEnvironment();
      return e.type === "native" || e.type === "ws";
    } catch {
      return !1;
    }
  }
}
const Is = "2.87.1", $s = `realtime-js/${Is}`, qr = "1.0.0", xs = "2.0.0", Dt = qr, lt = 1e4, Us = 1e3, Ns = 100;
var Z;
(function(s) {
  s[s.connecting = 0] = "connecting", s[s.open = 1] = "open", s[s.closing = 2] = "closing", s[s.closed = 3] = "closed";
})(Z || (Z = {}));
var j;
(function(s) {
  s.closed = "closed", s.errored = "errored", s.joined = "joined", s.joining = "joining", s.leaving = "leaving";
})(j || (j = {}));
var B;
(function(s) {
  s.close = "phx_close", s.error = "phx_error", s.join = "phx_join", s.reply = "phx_reply", s.leave = "phx_leave", s.access_token = "access_token";
})(B || (B = {}));
var ut;
(function(s) {
  s.websocket = "websocket";
})(ut || (ut = {}));
var ee;
(function(s) {
  s.Connecting = "connecting", s.Open = "open", s.Closing = "closing", s.Closed = "closed";
})(ee || (ee = {}));
class Ds {
  constructor(e) {
    this.HEADER_LENGTH = 1, this.USER_BROADCAST_PUSH_META_LENGTH = 6, this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }, this.BINARY_ENCODING = 0, this.JSON_ENCODING = 1, this.BROADCAST_EVENT = "broadcast", this.allowedMetadataKeys = [], this.allowedMetadataKeys = e ?? [];
  }
  encode(e, t) {
    if (e.event === this.BROADCAST_EVENT && !(e.payload instanceof ArrayBuffer) && typeof e.payload.event == "string")
      return t(this._binaryEncodeUserBroadcastPush(e));
    let r = [e.join_ref, e.ref, e.topic, e.event, e.payload];
    return t(JSON.stringify(r));
  }
  _binaryEncodeUserBroadcastPush(e) {
    var t;
    return this._isArrayBuffer((t = e.payload) === null || t === void 0 ? void 0 : t.payload) ? this._encodeBinaryUserBroadcastPush(e) : this._encodeJsonUserBroadcastPush(e);
  }
  _encodeBinaryUserBroadcastPush(e) {
    var t, r;
    const n = (r = (t = e.payload) === null || t === void 0 ? void 0 : t.payload) !== null && r !== void 0 ? r : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(e, this.BINARY_ENCODING, n);
  }
  _encodeJsonUserBroadcastPush(e) {
    var t, r;
    const n = (r = (t = e.payload) === null || t === void 0 ? void 0 : t.payload) !== null && r !== void 0 ? r : {}, o = new TextEncoder().encode(JSON.stringify(n)).buffer;
    return this._encodeUserBroadcastPush(e, this.JSON_ENCODING, o);
  }
  _encodeUserBroadcastPush(e, t, r) {
    var n, i;
    const o = e.topic, a = (n = e.ref) !== null && n !== void 0 ? n : "", l = (i = e.join_ref) !== null && i !== void 0 ? i : "", u = e.payload.event, c = this.allowedMetadataKeys ? this._pick(e.payload, this.allowedMetadataKeys) : {}, d = Object.keys(c).length === 0 ? "" : JSON.stringify(c);
    if (l.length > 255)
      throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);
    if (a.length > 255)
      throw new Error(`ref length ${a.length} exceeds maximum of 255`);
    if (o.length > 255)
      throw new Error(`topic length ${o.length} exceeds maximum of 255`);
    if (u.length > 255)
      throw new Error(`userEvent length ${u.length} exceeds maximum of 255`);
    if (d.length > 255)
      throw new Error(`metadata length ${d.length} exceeds maximum of 255`);
    const f = this.USER_BROADCAST_PUSH_META_LENGTH + l.length + a.length + o.length + u.length + d.length, h = new ArrayBuffer(this.HEADER_LENGTH + f);
    let g = new DataView(h), _ = 0;
    g.setUint8(_++, this.KINDS.userBroadcastPush), g.setUint8(_++, l.length), g.setUint8(_++, a.length), g.setUint8(_++, o.length), g.setUint8(_++, u.length), g.setUint8(_++, d.length), g.setUint8(_++, t), Array.from(l, (w) => g.setUint8(_++, w.charCodeAt(0))), Array.from(a, (w) => g.setUint8(_++, w.charCodeAt(0))), Array.from(o, (w) => g.setUint8(_++, w.charCodeAt(0))), Array.from(u, (w) => g.setUint8(_++, w.charCodeAt(0))), Array.from(d, (w) => g.setUint8(_++, w.charCodeAt(0)));
    var p = new Uint8Array(h.byteLength + r.byteLength);
    return p.set(new Uint8Array(h), 0), p.set(new Uint8Array(r), h.byteLength), p.buffer;
  }
  decode(e, t) {
    if (this._isArrayBuffer(e)) {
      let r = this._binaryDecode(e);
      return t(r);
    }
    if (typeof e == "string") {
      const r = JSON.parse(e), [n, i, o, a, l] = r;
      return t({ join_ref: n, ref: i, topic: o, event: a, payload: l });
    }
    return t({});
  }
  _binaryDecode(e) {
    const t = new DataView(e), r = t.getUint8(0), n = new TextDecoder();
    switch (r) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(e, t, n);
    }
  }
  _decodeUserBroadcast(e, t, r) {
    const n = t.getUint8(1), i = t.getUint8(2), o = t.getUint8(3), a = t.getUint8(4);
    let l = this.HEADER_LENGTH + 4;
    const u = r.decode(e.slice(l, l + n));
    l = l + n;
    const c = r.decode(e.slice(l, l + i));
    l = l + i;
    const d = r.decode(e.slice(l, l + o));
    l = l + o;
    const f = e.slice(l, e.byteLength), h = a === this.JSON_ENCODING ? JSON.parse(r.decode(f)) : f, g = {
      type: this.BROADCAST_EVENT,
      event: c,
      payload: h
    };
    return o > 0 && (g.meta = JSON.parse(d)), { join_ref: null, ref: null, topic: u, event: this.BROADCAST_EVENT, payload: g };
  }
  _isArrayBuffer(e) {
    var t;
    return e instanceof ArrayBuffer || ((t = e?.constructor) === null || t === void 0 ? void 0 : t.name) === "ArrayBuffer";
  }
  _pick(e, t) {
    return !e || typeof e != "object" ? {} : Object.fromEntries(Object.entries(e).filter(([r]) => t.includes(r)));
  }
}
class Fr {
  constructor(e, t) {
    this.callback = e, this.timerCalc = t, this.timer = void 0, this.tries = 0, this.callback = e, this.timerCalc = t;
  }
  reset() {
    this.tries = 0, clearTimeout(this.timer), this.timer = void 0;
  }
  // Cancels any previous scheduleTimeout and schedules callback
  scheduleTimeout() {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      this.tries = this.tries + 1, this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}
var k;
(function(s) {
  s.abstime = "abstime", s.bool = "bool", s.date = "date", s.daterange = "daterange", s.float4 = "float4", s.float8 = "float8", s.int2 = "int2", s.int4 = "int4", s.int4range = "int4range", s.int8 = "int8", s.int8range = "int8range", s.json = "json", s.jsonb = "jsonb", s.money = "money", s.numeric = "numeric", s.oid = "oid", s.reltime = "reltime", s.text = "text", s.time = "time", s.timestamp = "timestamp", s.timestamptz = "timestamptz", s.timetz = "timetz", s.tsrange = "tsrange", s.tstzrange = "tstzrange";
})(k || (k = {}));
const Lt = (s, e, t = {}) => {
  var r;
  const n = (r = t.skipTypes) !== null && r !== void 0 ? r : [];
  return e ? Object.keys(e).reduce((i, o) => (i[o] = Ls(o, s, e, n), i), {}) : {};
}, Ls = (s, e, t, r) => {
  const n = e.find((a) => a.name === s), i = n?.type, o = t[s];
  return i && !r.includes(i) ? Mr(i, o) : ct(o);
}, Mr = (s, e) => {
  if (s.charAt(0) === "_") {
    const t = s.slice(1, s.length);
    return Ms(e, t);
  }
  switch (s) {
    case k.bool:
      return Bs(e);
    case k.float4:
    case k.float8:
    case k.int2:
    case k.int4:
    case k.int8:
    case k.numeric:
    case k.oid:
      return qs(e);
    case k.json:
    case k.jsonb:
      return Fs(e);
    case k.timestamp:
      return Ws(e);
    // Format to be consistent with PostgREST
    case k.abstime:
    // To allow users to cast it based on Timezone
    case k.date:
    // To allow users to cast it based on Timezone
    case k.daterange:
    case k.int4range:
    case k.int8range:
    case k.money:
    case k.reltime:
    // To allow users to cast it based on Timezone
    case k.text:
    case k.time:
    // To allow users to cast it based on Timezone
    case k.timestamptz:
    // To allow users to cast it based on Timezone
    case k.timetz:
    // To allow users to cast it based on Timezone
    case k.tsrange:
    case k.tstzrange:
      return ct(e);
    default:
      return ct(e);
  }
}, ct = (s) => s, Bs = (s) => {
  switch (s) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return s;
  }
}, qs = (s) => {
  if (typeof s == "string") {
    const e = parseFloat(s);
    if (!Number.isNaN(e))
      return e;
  }
  return s;
}, Fs = (s) => {
  if (typeof s == "string")
    try {
      return JSON.parse(s);
    } catch (e) {
      return console.log(`JSON parse error: ${e}`), s;
    }
  return s;
}, Ms = (s, e) => {
  if (typeof s != "string")
    return s;
  const t = s.length - 1, r = s[t];
  if (s[0] === "{" && r === "}") {
    let i;
    const o = s.slice(1, t);
    try {
      i = JSON.parse("[" + o + "]");
    } catch {
      i = o ? o.split(",") : [];
    }
    return i.map((a) => Mr(e, a));
  }
  return s;
}, Ws = (s) => typeof s == "string" ? s.replace(" ", "T") : s, Wr = (s) => {
  const e = new URL(s);
  return e.protocol = e.protocol.replace(/^ws/i, "http"), e.pathname = e.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""), e.pathname === "" || e.pathname === "/" ? e.pathname = "/api/broadcast" : e.pathname = e.pathname + "/api/broadcast", e.href;
};
class Ye {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(e, t, r = {}, n = lt) {
    this.channel = e, this.event = t, this.payload = r, this.timeout = n, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null;
  }
  resend(e) {
    this.timeout = e, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send();
  }
  send() {
    this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload,
      ref: this.ref,
      join_ref: this.channel._joinRef()
    }));
  }
  updatePayload(e) {
    this.payload = Object.assign(Object.assign({}, this.payload), e);
  }
  receive(e, t) {
    var r;
    return this._hasReceived(e) && t((r = this.receivedResp) === null || r === void 0 ? void 0 : r.response), this.recHooks.push({ status: e, callback: t }), this;
  }
  startTimeout() {
    if (this.timeoutTimer)
      return;
    this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
    const e = (t) => {
      this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = t, this._matchReceive(t);
    };
    this.channel._on(this.refEvent, {}, e), this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  trigger(e, t) {
    this.refEvent && this.channel._trigger(this.refEvent, { status: e, response: t });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0;
  }
  _matchReceive({ status: e, response: t }) {
    this.recHooks.filter((r) => r.status === e).forEach((r) => r.callback(t));
  }
  _hasReceived(e) {
    return this.receivedResp && this.receivedResp.status === e;
  }
}
var ht;
(function(s) {
  s.SYNC = "sync", s.JOIN = "join", s.LEAVE = "leave";
})(ht || (ht = {}));
let Vr = class $e {
  /**
   * Creates a Presence helper that keeps the local presence state in sync with the server.
   *
   * @param channel - The realtime channel to bind to.
   * @param opts - Optional custom event names, e.g. `{ events: { state: 'state', diff: 'diff' } }`.
   *
   * @example
   * ```ts
   * const presence = new RealtimePresence(channel)
   *
   * channel.on('presence', ({ event, key }) => {
   *   console.log(`Presence ${event} on ${key}`)
   * })
   * ```
   */
  constructor(e, t) {
    this.channel = e, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.enabled = !1, this.caller = {
      onJoin: () => {
      },
      onLeave: () => {
      },
      onSync: () => {
      }
    };
    const r = t?.events || {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.channel._on(r.state, {}, (n) => {
      const { onJoin: i, onLeave: o, onSync: a } = this.caller;
      this.joinRef = this.channel._joinRef(), this.state = $e.syncState(this.state, n, i, o), this.pendingDiffs.forEach((l) => {
        this.state = $e.syncDiff(this.state, l, i, o);
      }), this.pendingDiffs = [], a();
    }), this.channel._on(r.diff, {}, (n) => {
      const { onJoin: i, onLeave: o, onSync: a } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(n) : (this.state = $e.syncDiff(this.state, n, i, o), a());
    }), this.onJoin((n, i, o) => {
      this.channel._trigger("presence", {
        event: "join",
        key: n,
        currentPresences: i,
        newPresences: o
      });
    }), this.onLeave((n, i, o) => {
      this.channel._trigger("presence", {
        event: "leave",
        key: n,
        currentPresences: i,
        leftPresences: o
      });
    }), this.onSync(() => {
      this.channel._trigger("presence", { event: "sync" });
    });
  }
  /**
   * Used to sync the list of presences on the server with the
   * client's state.
   *
   * An optional `onJoin` and `onLeave` callback can be provided to
   * react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @internal
   */
  static syncState(e, t, r, n) {
    const i = this.cloneDeep(e), o = this.transformState(t), a = {}, l = {};
    return this.map(i, (u, c) => {
      o[u] || (l[u] = c);
    }), this.map(o, (u, c) => {
      const d = i[u];
      if (d) {
        const f = c.map((p) => p.presence_ref), h = d.map((p) => p.presence_ref), g = c.filter((p) => h.indexOf(p.presence_ref) < 0), _ = d.filter((p) => f.indexOf(p.presence_ref) < 0);
        g.length > 0 && (a[u] = g), _.length > 0 && (l[u] = _);
      } else
        a[u] = c;
    }), this.syncDiff(i, { joins: a, leaves: l }, r, n);
  }
  /**
   * Used to sync a diff of presence join and leave events from the
   * server, as they happen.
   *
   * Like `syncState`, `syncDiff` accepts optional `onJoin` and
   * `onLeave` callbacks to react to a user joining or leaving from a
   * device.
   *
   * @internal
   */
  static syncDiff(e, t, r, n) {
    const { joins: i, leaves: o } = {
      joins: this.transformState(t.joins),
      leaves: this.transformState(t.leaves)
    };
    return r || (r = () => {
    }), n || (n = () => {
    }), this.map(i, (a, l) => {
      var u;
      const c = (u = e[a]) !== null && u !== void 0 ? u : [];
      if (e[a] = this.cloneDeep(l), c.length > 0) {
        const d = e[a].map((h) => h.presence_ref), f = c.filter((h) => d.indexOf(h.presence_ref) < 0);
        e[a].unshift(...f);
      }
      r(a, c, l);
    }), this.map(o, (a, l) => {
      let u = e[a];
      if (!u)
        return;
      const c = l.map((d) => d.presence_ref);
      u = u.filter((d) => c.indexOf(d.presence_ref) < 0), e[a] = u, n(a, u, l), u.length === 0 && delete e[a];
    }), e;
  }
  /** @internal */
  static map(e, t) {
    return Object.getOwnPropertyNames(e).map((r) => t(r, e[r]));
  }
  /**
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example
   * // returns {
   *  abc123: [
   *    { presence_ref: '2', user_id: 1 },
   *    { presence_ref: '3', user_id: 2 }
   *  ]
   * }
   * RealtimePresence.transformState({
   *  abc123: {
   *    metas: [
   *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
   *      { phx_ref: '3', user_id: 2 }
   *    ]
   *  }
   * })
   *
   * @internal
   */
  static transformState(e) {
    return e = this.cloneDeep(e), Object.getOwnPropertyNames(e).reduce((t, r) => {
      const n = e[r];
      return "metas" in n ? t[r] = n.metas.map((i) => (i.presence_ref = i.phx_ref, delete i.phx_ref, delete i.phx_ref_prev, i)) : t[r] = n, t;
    }, {});
  }
  /** @internal */
  static cloneDeep(e) {
    return JSON.parse(JSON.stringify(e));
  }
  /** @internal */
  onJoin(e) {
    this.caller.onJoin = e;
  }
  /** @internal */
  onLeave(e) {
    this.caller.onLeave = e;
  }
  /** @internal */
  onSync(e) {
    this.caller.onSync = e;
  }
  /** @internal */
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
};
var dt;
(function(s) {
  s.ALL = "*", s.INSERT = "INSERT", s.UPDATE = "UPDATE", s.DELETE = "DELETE";
})(dt || (dt = {}));
var le;
(function(s) {
  s.BROADCAST = "broadcast", s.PRESENCE = "presence", s.POSTGRES_CHANGES = "postgres_changes", s.SYSTEM = "system";
})(le || (le = {}));
var q;
(function(s) {
  s.SUBSCRIBED = "SUBSCRIBED", s.TIMED_OUT = "TIMED_OUT", s.CLOSED = "CLOSED", s.CHANNEL_ERROR = "CHANNEL_ERROR";
})(q || (q = {}));
const Vs = j;
let Kr = class _e {
  /**
   * Creates a channel that can broadcast messages, sync presence, and listen to Postgres changes.
   *
   * The topic determines which realtime stream you are subscribing to. Config options let you
   * enable acknowledgement for broadcasts, presence tracking, or private channels.
   *
   * @example
   * ```ts
   * import RealtimeClient from '@supabase/realtime-js'
   *
   * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
   *   params: { apikey: 'public-anon-key' },
   * })
   * const channel = new RealtimeChannel('realtime:public:messages', { config: {} }, client)
   * ```
   */
  constructor(e, t = { config: {} }, r) {
    var n, i;
    if (this.topic = e, this.params = t, this.socket = r, this.bindings = {}, this.state = j.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = e.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "", enabled: !1 },
      private: !1
    }, t.config), this.timeout = this.socket.timeout, this.joinPush = new Ye(this, B.join, this.params, this.timeout), this.rejoinTimer = new Fr(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
      this.state = j.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((o) => o.send()), this.pushBuffer = [];
    }), this._onClose(() => {
      this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = j.closed, this.socket._remove(this);
    }), this._onError((o) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, o), this.state = j.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("timeout", () => {
      this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = j.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("error", (o) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, o), this.state = j.errored, this.rejoinTimer.scheduleTimeout());
    }), this._on(B.reply, {}, (o, a) => {
      this._trigger(this._replyEventName(a), o);
    }), this.presence = new Vr(this), this.broadcastEndpointURL = Wr(this.socket.endPoint), this.private = this.params.config.private || !1, !this.private && (!((i = (n = this.params.config) === null || n === void 0 ? void 0 : n.broadcast) === null || i === void 0) && i.replay))
      throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
  }
  /** Subscribe registers your client with the server */
  subscribe(e, t = this.timeout) {
    var r, n, i;
    if (this.socket.isConnected() || this.socket.connect(), this.state == j.closed) {
      const { config: { broadcast: o, presence: a, private: l } } = this.params, u = (n = (r = this.bindings.postgres_changes) === null || r === void 0 ? void 0 : r.map((h) => h.filter)) !== null && n !== void 0 ? n : [], c = !!this.bindings[le.PRESENCE] && this.bindings[le.PRESENCE].length > 0 || ((i = this.params.config.presence) === null || i === void 0 ? void 0 : i.enabled) === !0, d = {}, f = {
        broadcast: o,
        presence: Object.assign(Object.assign({}, a), { enabled: c }),
        postgres_changes: u,
        private: l
      };
      this.socket.accessTokenValue && (d.access_token = this.socket.accessTokenValue), this._onError((h) => e?.(q.CHANNEL_ERROR, h)), this._onClose(() => e?.(q.CLOSED)), this.updateJoinPayload(Object.assign({ config: f }, d)), this.joinedOnce = !0, this._rejoin(t), this.joinPush.receive("ok", async ({ postgres_changes: h }) => {
        var g;
        if (this.socket._isManualToken() || this.socket.setAuth(), h === void 0) {
          e?.(q.SUBSCRIBED);
          return;
        } else {
          const _ = this.bindings.postgres_changes, p = (g = _?.length) !== null && g !== void 0 ? g : 0, w = [];
          for (let b = 0; b < p; b++) {
            const v = _[b], { filter: { event: S, schema: T, table: O, filter: R } } = v, K = h && h[b];
            if (K && K.event === S && _e.isFilterValueEqual(K.schema, T) && _e.isFilterValueEqual(K.table, O) && _e.isFilterValueEqual(K.filter, R))
              w.push(Object.assign(Object.assign({}, v), { id: K.id }));
            else {
              this.unsubscribe(), this.state = j.errored, e?.(q.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = w, e && e(q.SUBSCRIBED);
          return;
        }
      }).receive("error", (h) => {
        this.state = j.errored, e?.(q.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(h).join(", ") || "error")));
      }).receive("timeout", () => {
        e?.(q.TIMED_OUT);
      });
    }
    return this;
  }
  /**
   * Returns the current presence state for this channel.
   *
   * The shape is a map keyed by presence key (for example a user id) where each entry contains the
   * tracked metadata for that user.
   */
  presenceState() {
    return this.presence.state;
  }
  /**
   * Sends the supplied payload to the presence tracker so other subscribers can see that this
   * client is online. Use `untrack` to stop broadcasting presence for the same key.
   */
  async track(e, t = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: e
    }, t.timeout || this.timeout);
  }
  /**
   * Removes the current presence state for this client.
   */
  async untrack(e = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, e);
  }
  on(e, t, r) {
    return this.state === j.joined && e === le.PRESENCE && (this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`), this.unsubscribe().then(async () => await this.subscribe())), this._on(e, t, r);
  }
  /**
   * Sends a broadcast message explicitly via REST API.
   *
   * This method always uses the REST API endpoint regardless of WebSocket connection state.
   * Useful when you want to guarantee REST delivery or when gradually migrating from implicit REST fallback.
   *
   * @param event The name of the broadcast event
   * @param payload Payload to be sent (required)
   * @param opts Options including timeout
   * @returns Promise resolving to object with success status, and error details if failed
   */
  async httpSend(e, t, r = {}) {
    var n;
    const i = this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "";
    if (t == null)
      return Promise.reject("Payload is required for httpSend()");
    const o = {
      method: "POST",
      headers: {
        Authorization: i,
        apikey: this.socket.apiKey ? this.socket.apiKey : "",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messages: [
          {
            topic: this.subTopic,
            event: e,
            payload: t,
            private: this.private
          }
        ]
      })
    }, a = await this._fetchWithTimeout(this.broadcastEndpointURL, o, (n = r.timeout) !== null && n !== void 0 ? n : this.timeout);
    if (a.status === 202)
      return { success: !0 };
    let l = a.statusText;
    try {
      const u = await a.json();
      l = u.error || u.message || l;
    } catch {
    }
    return Promise.reject(new Error(l));
  }
  /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   */
  async send(e, t = {}) {
    var r, n;
    if (!this._canPush() && e.type === "broadcast") {
      console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
      const { event: i, payload: o } = e, l = {
        method: "POST",
        headers: {
          Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: i,
              payload: o,
              private: this.private
            }
          ]
        })
      };
      try {
        const u = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (r = t.timeout) !== null && r !== void 0 ? r : this.timeout);
        return await ((n = u.body) === null || n === void 0 ? void 0 : n.cancel()), u.ok ? "ok" : "error";
      } catch (u) {
        return u.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((i) => {
        var o, a, l;
        const u = this._push(e.type, e, t.timeout || this.timeout);
        e.type === "broadcast" && !(!((l = (a = (o = this.params) === null || o === void 0 ? void 0 : o.config) === null || a === void 0 ? void 0 : a.broadcast) === null || l === void 0) && l.ack) && i("ok"), u.receive("ok", () => i("ok")), u.receive("error", () => i("error")), u.receive("timeout", () => i("timed out"));
      });
  }
  /**
   * Updates the payload that will be sent the next time the channel joins (reconnects).
   * Useful for rotating access tokens or updating config without re-creating the channel.
   */
  updateJoinPayload(e) {
    this.joinPush.updatePayload(e);
  }
  /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   */
  unsubscribe(e = this.timeout) {
    this.state = j.leaving;
    const t = () => {
      this.socket.log("channel", `leave ${this.topic}`), this._trigger(B.close, "leave", this._joinRef());
    };
    this.joinPush.destroy();
    let r = null;
    return new Promise((n) => {
      r = new Ye(this, B.leave, {}, e), r.receive("ok", () => {
        t(), n("ok");
      }).receive("timeout", () => {
        t(), n("timed out");
      }).receive("error", () => {
        n("error");
      }), r.send(), this._canPush() || r.trigger("ok", {});
    }).finally(() => {
      r?.destroy();
    });
  }
  /**
   * Teardown the channel.
   *
   * Destroys and stops related timers.
   */
  teardown() {
    this.pushBuffer.forEach((e) => e.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = j.closed, this.bindings = {};
  }
  /** @internal */
  async _fetchWithTimeout(e, t, r) {
    const n = new AbortController(), i = setTimeout(() => n.abort(), r), o = await this.socket.fetch(e, Object.assign(Object.assign({}, t), { signal: n.signal }));
    return clearTimeout(i), o;
  }
  /** @internal */
  _push(e, t, r = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let n = new Ye(this, e, t, r);
    return this._canPush() ? n.send() : this._addToPushBuffer(n), n;
  }
  /** @internal */
  _addToPushBuffer(e) {
    if (e.startTimeout(), this.pushBuffer.push(e), this.pushBuffer.length > Ns) {
      const t = this.pushBuffer.shift();
      t && (t.destroy(), this.socket.log("channel", `discarded push due to buffer overflow: ${t.event}`, t.payload));
    }
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling before dispatching to the channel callbacks.
   * Must return the payload, modified or unmodified.
   *
   * @internal
   */
  _onMessage(e, t, r) {
    return t;
  }
  /** @internal */
  _isMember(e) {
    return this.topic === e;
  }
  /** @internal */
  _joinRef() {
    return this.joinPush.ref;
  }
  /** @internal */
  _trigger(e, t, r) {
    var n, i;
    const o = e.toLocaleLowerCase(), { close: a, error: l, leave: u, join: c } = B;
    if (r && [a, l, u, c].indexOf(o) >= 0 && r !== this._joinRef())
      return;
    let f = this._onMessage(o, t, r);
    if (t && !f)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(o) ? (n = this.bindings.postgres_changes) === null || n === void 0 || n.filter((h) => {
      var g, _, p;
      return ((g = h.filter) === null || g === void 0 ? void 0 : g.event) === "*" || ((p = (_ = h.filter) === null || _ === void 0 ? void 0 : _.event) === null || p === void 0 ? void 0 : p.toLocaleLowerCase()) === o;
    }).map((h) => h.callback(f, r)) : (i = this.bindings[o]) === null || i === void 0 || i.filter((h) => {
      var g, _, p, w, b, v;
      if (["broadcast", "presence", "postgres_changes"].includes(o))
        if ("id" in h) {
          const S = h.id, T = (g = h.filter) === null || g === void 0 ? void 0 : g.event;
          return S && ((_ = t.ids) === null || _ === void 0 ? void 0 : _.includes(S)) && (T === "*" || T?.toLocaleLowerCase() === ((p = t.data) === null || p === void 0 ? void 0 : p.type.toLocaleLowerCase()));
        } else {
          const S = (b = (w = h?.filter) === null || w === void 0 ? void 0 : w.event) === null || b === void 0 ? void 0 : b.toLocaleLowerCase();
          return S === "*" || S === ((v = t?.event) === null || v === void 0 ? void 0 : v.toLocaleLowerCase());
        }
      else
        return h.type.toLocaleLowerCase() === o;
    }).map((h) => {
      if (typeof f == "object" && "ids" in f) {
        const g = f.data, { schema: _, table: p, commit_timestamp: w, type: b, errors: v } = g;
        f = Object.assign(Object.assign({}, {
          schema: _,
          table: p,
          commit_timestamp: w,
          eventType: b,
          new: {},
          old: {},
          errors: v
        }), this._getPayloadRecords(g));
      }
      h.callback(f, r);
    });
  }
  /** @internal */
  _isClosed() {
    return this.state === j.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === j.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === j.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === j.leaving;
  }
  /** @internal */
  _replyEventName(e) {
    return `chan_reply_${e}`;
  }
  /** @internal */
  _on(e, t, r) {
    const n = e.toLocaleLowerCase(), i = {
      type: n,
      filter: t,
      callback: r
    };
    return this.bindings[n] ? this.bindings[n].push(i) : this.bindings[n] = [i], this;
  }
  /** @internal */
  _off(e, t) {
    const r = e.toLocaleLowerCase();
    return this.bindings[r] && (this.bindings[r] = this.bindings[r].filter((n) => {
      var i;
      return !(((i = n.type) === null || i === void 0 ? void 0 : i.toLocaleLowerCase()) === r && _e.isEqual(n.filter, t));
    })), this;
  }
  /** @internal */
  static isEqual(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
      return !1;
    for (const r in e)
      if (e[r] !== t[r])
        return !1;
    return !0;
  }
  /**
   * Compares two optional filter values for equality.
   * Treats undefined, null, and empty string as equivalent empty values.
   * @internal
   */
  static isFilterValueEqual(e, t) {
    return (e ?? void 0) === (t ?? void 0);
  }
  /** @internal */
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
  }
  /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */
  _onClose(e) {
    this._on(B.close, {}, e);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(e) {
    this._on(B.error, {}, (t) => e(t));
  }
  /**
   * Returns `true` if the socket is connected and the channel has been joined.
   *
   * @internal
   */
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  /** @internal */
  _rejoin(e = this.timeout) {
    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = j.joining, this.joinPush.resend(e));
  }
  /** @internal */
  _getPayloadRecords(e) {
    const t = {
      new: {},
      old: {}
    };
    return (e.type === "INSERT" || e.type === "UPDATE") && (t.new = Lt(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (t.old = Lt(e.columns, e.old_record)), t;
  }
};
const Qe = () => {
}, Ce = {
  HEARTBEAT_INTERVAL: 25e3,
  RECONNECT_DELAY: 10,
  HEARTBEAT_TIMEOUT_FALLBACK: 100
}, Ks = [1e3, 2e3, 5e3, 1e4], Hs = 1e4, Gs = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
let Js = class {
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket. This can be a custom implementation
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers Deprecated: headers cannot be set on websocket connections and this option will be removed in the future.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.heartbeatCallback The optional function to handle heartbeat status.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.logLevel Sets the log level for Realtime
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   * @param options.worker Use Web Worker to set a side flow. Defaults to false.
   * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
   * @example
   * ```ts
   * import RealtimeClient from '@supabase/realtime-js'
   *
   * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
   *   params: { apikey: 'public-anon-key' },
   * })
   * client.connect()
   * ```
   */
  constructor(e, t) {
    var r;
    if (this.accessTokenValue = null, this.apiKey = null, this._manuallySetToken = !1, this.channels = new Array(), this.endPoint = "", this.httpEndpoint = "", this.headers = {}, this.params = {}, this.timeout = lt, this.transport = null, this.heartbeatIntervalMs = Ce.HEARTBEAT_INTERVAL, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.heartbeatCallback = Qe, this.ref = 0, this.reconnectTimer = null, this.vsn = Dt, this.logger = Qe, this.conn = null, this.sendBuffer = [], this.serializer = new Ds(), this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    }, this.accessToken = null, this._connectionState = "disconnected", this._wasManualDisconnect = !1, this._authPromise = null, this._resolveFetch = (n) => n ? (...i) => n(...i) : (...i) => fetch(...i), !(!((r = t?.params) === null || r === void 0) && r.apikey))
      throw new Error("API key is required to connect to Realtime");
    this.apiKey = t.params.apikey, this.endPoint = `${e}/${ut.websocket}`, this.httpEndpoint = Wr(e), this._initializeOptions(t), this._setupReconnectionTimer(), this.fetch = this._resolveFetch(t?.fetch);
  }
  /**
   * Connects the socket, unless already connected.
   */
  connect() {
    if (!(this.isConnecting() || this.isDisconnecting() || this.conn !== null && this.isConnected())) {
      if (this._setConnectionState("connecting"), this.accessToken && !this._authPromise && this._setAuthSafely("connect"), this.transport)
        this.conn = new this.transport(this.endpointURL());
      else
        try {
          this.conn = Br.createWebSocket(this.endpointURL());
        } catch (e) {
          this._setConnectionState("disconnected");
          const t = e.message;
          throw t.includes("Node.js") ? new Error(`${t}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`) : new Error(`WebSocket not available: ${t}`);
        }
      this._setupConnectionHandlers();
    }
  }
  /**
   * Returns the URL of the websocket.
   * @returns string The URL of the websocket.
   */
  endpointURL() {
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: this.vsn }));
  }
  /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   */
  disconnect(e, t) {
    if (!this.isDisconnecting())
      if (this._setConnectionState("disconnecting", !0), this.conn) {
        const r = setTimeout(() => {
          this._setConnectionState("disconnected");
        }, 100);
        this.conn.onclose = () => {
          clearTimeout(r), this._setConnectionState("disconnected");
        }, typeof this.conn.close == "function" && (e ? this.conn.close(e, t ?? "") : this.conn.close()), this._teardownConnection();
      } else
        this._setConnectionState("disconnected");
  }
  /**
   * Returns all created channels
   */
  getChannels() {
    return this.channels;
  }
  /**
   * Unsubscribes and removes a single channel
   * @param channel A RealtimeChannel instance
   */
  async removeChannel(e) {
    const t = await e.unsubscribe();
    return this.channels.length === 0 && this.disconnect(), t;
  }
  /**
   * Unsubscribes and removes all channels
   */
  async removeAllChannels() {
    const e = await Promise.all(this.channels.map((t) => t.unsubscribe()));
    return this.channels = [], this.disconnect(), e;
  }
  /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden.
   */
  log(e, t, r) {
    this.logger(e, t, r);
  }
  /**
   * Returns the current state of the socket.
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case Z.connecting:
        return ee.Connecting;
      case Z.open:
        return ee.Open;
      case Z.closing:
        return ee.Closing;
      default:
        return ee.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === ee.Open;
  }
  /**
   * Returns `true` if the connection is currently connecting.
   */
  isConnecting() {
    return this._connectionState === "connecting";
  }
  /**
   * Returns `true` if the connection is currently disconnecting.
   */
  isDisconnecting() {
    return this._connectionState === "disconnecting";
  }
  /**
   * Creates (or reuses) a {@link RealtimeChannel} for the provided topic.
   *
   * Topics are automatically prefixed with `realtime:` to match the Realtime service.
   * If a channel with the same topic already exists it will be returned instead of creating
   * a duplicate connection.
   */
  channel(e, t = { config: {} }) {
    const r = `realtime:${e}`, n = this.getChannels().find((i) => i.topic === r);
    if (n)
      return n;
    {
      const i = new Kr(`realtime:${e}`, t, this);
      return this.channels.push(i), i;
    }
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   */
  push(e) {
    const { topic: t, event: r, payload: n, ref: i } = e, o = () => {
      this.encode(e, (a) => {
        var l;
        (l = this.conn) === null || l === void 0 || l.send(a);
      });
    };
    this.log("push", `${t} ${r} (${i})`, n), this.isConnected() ? o() : this.sendBuffer.push(o);
  }
  /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * If param is null it will use the `accessToken` callback function or the token set on the client.
   *
   * On callback used, it will set the value of the token internal to the client.
   *
   * When a token is explicitly provided, it will be preserved across channel operations
   * (including removeChannel and resubscribe). The `accessToken` callback will not be
   * invoked until `setAuth()` is called without arguments.
   *
   * @param token A JWT string to override the token set on the client.
   *
   * @example
   * // Use a manual token (preserved across resubscribes, ignores accessToken callback)
   * client.realtime.setAuth('my-custom-jwt')
   *
   * // Switch back to using the accessToken callback
   * client.realtime.setAuth()
   */
  async setAuth(e = null) {
    this._authPromise = this._performAuth(e);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  /**
   * Returns true if the current access token was explicitly set via setAuth(token),
   * false if it was obtained via the accessToken callback.
   * @internal
   */
  _isManualToken() {
    return this._manuallySetToken;
  }
  /**
   * Sends a heartbeat message if the socket is connected.
   */
  async sendHeartbeat() {
    var e;
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback("disconnected");
      } catch (t) {
        this.log("error", "error in heartbeat callback", t);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
      try {
        this.heartbeatCallback("timeout");
      } catch (t) {
        this.log("error", "error in heartbeat callback", t);
      }
      this._wasManualDisconnect = !1, (e = this.conn) === null || e === void 0 || e.close(Us, "heartbeat timeout"), setTimeout(() => {
        var t;
        this.isConnected() || (t = this.reconnectTimer) === null || t === void 0 || t.scheduleTimeout();
      }, Ce.HEARTBEAT_TIMEOUT_FALLBACK);
      return;
    }
    this.pendingHeartbeatRef = this._makeRef(), this.push({
      topic: "phoenix",
      event: "heartbeat",
      payload: {},
      ref: this.pendingHeartbeatRef
    });
    try {
      this.heartbeatCallback("sent");
    } catch (t) {
      this.log("error", "error in heartbeat callback", t);
    }
    this._setAuthSafely("heartbeat");
  }
  /**
   * Sets a callback that receives lifecycle events for internal heartbeat messages.
   * Useful for instrumenting connection health (e.g. sent/ok/timeout/disconnected).
   */
  onHeartbeat(e) {
    this.heartbeatCallback = e;
  }
  /**
   * Flushes send buffer
   */
  flushSendBuffer() {
    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((e) => e()), this.sendBuffer = []);
  }
  /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */
  _makeRef() {
    let e = this.ref + 1;
    return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString();
  }
  /**
   * Unsubscribe from channels with the specified topic.
   *
   * @internal
   */
  _leaveOpenTopic(e) {
    let t = this.channels.find((r) => r.topic === e && (r._isJoined() || r._isJoining()));
    t && (this.log("transport", `leaving duplicate topic "${e}"`), t.unsubscribe());
  }
  /**
   * Removes a subscription from the socket.
   *
   * @param channel An open subscription.
   *
   * @internal
   */
  _remove(e) {
    this.channels = this.channels.filter((t) => t.topic !== e.topic);
  }
  /** @internal */
  _onConnMessage(e) {
    this.decode(e.data, (t) => {
      if (t.topic === "phoenix" && t.event === "phx_reply")
        try {
          this.heartbeatCallback(t.payload.status === "ok" ? "ok" : "error");
        } catch (u) {
          this.log("error", "error in heartbeat callback", u);
        }
      t.ref && t.ref === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null);
      const { topic: r, event: n, payload: i, ref: o } = t, a = o ? `(${o})` : "", l = i.status || "";
      this.log("receive", `${l} ${r} ${n} ${a}`.trim(), i), this.channels.filter((u) => u._isMember(r)).forEach((u) => u._trigger(n, i, o)), this._triggerStateCallbacks("message", t);
    });
  }
  /**
   * Clear specific timer
   * @internal
   */
  _clearTimer(e) {
    var t;
    e === "heartbeat" && this.heartbeatTimer ? (clearInterval(this.heartbeatTimer), this.heartbeatTimer = void 0) : e === "reconnect" && ((t = this.reconnectTimer) === null || t === void 0 || t.reset());
  }
  /**
   * Clear all timers
   * @internal
   */
  _clearAllTimers() {
    this._clearTimer("heartbeat"), this._clearTimer("reconnect");
  }
  /**
   * Setup connection handlers for WebSocket events
   * @internal
   */
  _setupConnectionHandlers() {
    this.conn && ("binaryType" in this.conn && (this.conn.binaryType = "arraybuffer"), this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = (e) => this._onConnError(e), this.conn.onmessage = (e) => this._onConnMessage(e), this.conn.onclose = (e) => this._onConnClose(e));
  }
  /**
   * Teardown connection and cleanup resources
   * @internal
   */
  _teardownConnection() {
    if (this.conn) {
      if (this.conn.readyState === Z.open || this.conn.readyState === Z.connecting)
        try {
          this.conn.close();
        } catch (e) {
          this.log("error", "Error closing connection", e);
        }
      this.conn.onopen = null, this.conn.onerror = null, this.conn.onmessage = null, this.conn.onclose = null, this.conn = null;
    }
    this._clearAllTimers(), this.channels.forEach((e) => e.teardown());
  }
  /** @internal */
  _onConnOpen() {
    this._setConnectionState("connected"), this.log("transport", `connected to ${this.endpointURL()}`), (this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())).then(() => {
      this.flushSendBuffer();
    }).catch((t) => {
      this.log("error", "error waiting for auth on connect", t), this.flushSendBuffer();
    }), this._clearTimer("reconnect"), this.worker ? this.workerRef || this._startWorkerHeartbeat() : this._startHeartbeat(), this._triggerStateCallbacks("open");
  }
  /** @internal */
  _startHeartbeat() {
    this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
  }
  /** @internal */
  _startWorkerHeartbeat() {
    this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
    const e = this._workerObjectUrl(this.workerUrl);
    this.workerRef = new Worker(e), this.workerRef.onerror = (t) => {
      this.log("worker", "worker error", t.message), this.workerRef.terminate();
    }, this.workerRef.onmessage = (t) => {
      t.data.event === "keepAlive" && this.sendHeartbeat();
    }, this.workerRef.postMessage({
      event: "start",
      interval: this.heartbeatIntervalMs
    });
  }
  /** @internal */
  _onConnClose(e) {
    var t;
    this._setConnectionState("disconnected"), this.log("transport", "close", e), this._triggerChanError(), this._clearTimer("heartbeat"), this._wasManualDisconnect || (t = this.reconnectTimer) === null || t === void 0 || t.scheduleTimeout(), this._triggerStateCallbacks("close", e);
  }
  /** @internal */
  _onConnError(e) {
    this._setConnectionState("disconnected"), this.log("transport", `${e}`), this._triggerChanError(), this._triggerStateCallbacks("error", e);
  }
  /** @internal */
  _triggerChanError() {
    this.channels.forEach((e) => e._trigger(B.error));
  }
  /** @internal */
  _appendParams(e, t) {
    if (Object.keys(t).length === 0)
      return e;
    const r = e.match(/\?/) ? "&" : "?", n = new URLSearchParams(t);
    return `${e}${r}${n}`;
  }
  _workerObjectUrl(e) {
    let t;
    if (e)
      t = e;
    else {
      const r = new Blob([Gs], { type: "application/javascript" });
      t = URL.createObjectURL(r);
    }
    return t;
  }
  /**
   * Set connection state with proper state management
   * @internal
   */
  _setConnectionState(e, t = !1) {
    this._connectionState = e, e === "connecting" ? this._wasManualDisconnect = !1 : e === "disconnecting" && (this._wasManualDisconnect = t);
  }
  /**
   * Perform the actual auth operation
   * @internal
   */
  async _performAuth(e = null) {
    let t, r = !1;
    if (e)
      t = e, r = !0;
    else if (this.accessToken)
      try {
        t = await this.accessToken();
      } catch (n) {
        this.log("error", "Error fetching access token from callback", n), t = this.accessTokenValue;
      }
    else
      t = this.accessTokenValue;
    r ? this._manuallySetToken = !0 : this.accessToken && (this._manuallySetToken = !1), this.accessTokenValue != t && (this.accessTokenValue = t, this.channels.forEach((n) => {
      const i = {
        access_token: t,
        version: $s
      };
      t && n.updateJoinPayload(i), n.joinedOnce && n._isJoined() && n._push(B.access_token, {
        access_token: t
      });
    }));
  }
  /**
   * Wait for any in-flight auth operations to complete
   * @internal
   */
  async _waitForAuthIfNeeded() {
    this._authPromise && await this._authPromise;
  }
  /**
   * Safely call setAuth with standardized error handling
   * @internal
   */
  _setAuthSafely(e = "general") {
    this._isManualToken() || this.setAuth().catch((t) => {
      this.log("error", `Error setting auth in ${e}`, t);
    });
  }
  /**
   * Trigger state change callbacks with proper error handling
   * @internal
   */
  _triggerStateCallbacks(e, t) {
    try {
      this.stateChangeCallbacks[e].forEach((r) => {
        try {
          r(t);
        } catch (n) {
          this.log("error", `error in ${e} callback`, n);
        }
      });
    } catch (r) {
      this.log("error", `error triggering ${e} callbacks`, r);
    }
  }
  /**
   * Setup reconnection timer with proper configuration
   * @internal
   */
  _setupReconnectionTimer() {
    this.reconnectTimer = new Fr(async () => {
      setTimeout(async () => {
        await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
      }, Ce.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  /**
   * Initialize client options with defaults
   * @internal
   */
  _initializeOptions(e) {
    var t, r, n, i, o, a, l, u, c, d, f, h;
    switch (this.transport = (t = e?.transport) !== null && t !== void 0 ? t : null, this.timeout = (r = e?.timeout) !== null && r !== void 0 ? r : lt, this.heartbeatIntervalMs = (n = e?.heartbeatIntervalMs) !== null && n !== void 0 ? n : Ce.HEARTBEAT_INTERVAL, this.worker = (i = e?.worker) !== null && i !== void 0 ? i : !1, this.accessToken = (o = e?.accessToken) !== null && o !== void 0 ? o : null, this.heartbeatCallback = (a = e?.heartbeatCallback) !== null && a !== void 0 ? a : Qe, this.vsn = (l = e?.vsn) !== null && l !== void 0 ? l : Dt, e?.params && (this.params = e.params), e?.logger && (this.logger = e.logger), (e?.logLevel || e?.log_level) && (this.logLevel = e.logLevel || e.log_level, this.params = Object.assign(Object.assign({}, this.params), { log_level: this.logLevel })), this.reconnectAfterMs = (u = e?.reconnectAfterMs) !== null && u !== void 0 ? u : ((g) => Ks[g - 1] || Hs), this.vsn) {
      case qr:
        this.encode = (c = e?.encode) !== null && c !== void 0 ? c : ((g, _) => _(JSON.stringify(g))), this.decode = (d = e?.decode) !== null && d !== void 0 ? d : ((g, _) => _(JSON.parse(g)));
        break;
      case xs:
        this.encode = (f = e?.encode) !== null && f !== void 0 ? f : this.serializer.encode.bind(this.serializer), this.decode = (h = e?.decode) !== null && h !== void 0 ? h : this.serializer.decode.bind(this.serializer);
        break;
      default:
        throw new Error(`Unsupported serializer version: ${this.vsn}`);
    }
    if (this.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.workerUrl = e?.workerUrl;
    }
  }
};
const zs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  REALTIME_CHANNEL_STATES: Vs,
  get REALTIME_LISTEN_TYPES() {
    return le;
  },
  get REALTIME_POSTGRES_CHANGES_LISTEN_EVENT() {
    return dt;
  },
  get REALTIME_PRESENCE_LISTEN_EVENTS() {
    return ht;
  },
  get REALTIME_SUBSCRIBE_STATES() {
    return q;
  },
  RealtimeChannel: Kr,
  RealtimeClient: Js,
  RealtimePresence: Vr,
  WebSocketFactory: Br
}, Symbol.toStringTag, { value: "Module" })), Hr = /* @__PURE__ */ me(zs);
class Ee extends Error {
  constructor(e) {
    super(e), this.__isStorageError = !0, this.name = "StorageError";
  }
}
function A(s) {
  return typeof s == "object" && s !== null && "__isStorageError" in s;
}
class Gr extends Ee {
  constructor(e, t, r) {
    super(e), this.name = "StorageApiError", this.status = t, this.statusCode = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
}
class qe extends Ee {
  constructor(e, t) {
    super(e), this.name = "StorageUnknownError", this.originalError = t;
  }
}
const St = (s) => s ? (...e) => s(...e) : (...e) => fetch(...e), Ys = () => Response, ft = (s) => {
  if (Array.isArray(s))
    return s.map((t) => ft(t));
  if (typeof s == "function" || s !== Object(s))
    return s;
  const e = {};
  return Object.entries(s).forEach(([t, r]) => {
    const n = t.replace(/([-_][a-z])/gi, (i) => i.toUpperCase().replace(/[-_]/g, ""));
    e[n] = ft(r);
  }), e;
}, Qs = (s) => {
  if (typeof s != "object" || s === null)
    return !1;
  const e = Object.getPrototypeOf(s);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in s) && !(Symbol.iterator in s);
}, Xs = (s) => !s || typeof s != "string" || s.length === 0 || s.length > 100 || s.trim() !== s || s.includes("/") || s.includes("\\") ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(s), Xe = (s) => {
  var e;
  return s.msg || s.message || s.error_description || (typeof s.error == "string" ? s.error : (e = s.error) === null || e === void 0 ? void 0 : e.message) || JSON.stringify(s);
}, Zs = (s, e, t) => y(void 0, void 0, void 0, function* () {
  const r = yield Ys();
  s instanceof r && !t?.noResolveJson ? s.json().then((n) => {
    const i = s.status || 500, o = n?.statusCode || i + "";
    e(new Gr(Xe(n), i, o));
  }).catch((n) => {
    e(new qe(Xe(n), n));
  }) : e(new qe(Xe(s), s));
}), en = (s, e, t, r) => {
  const n = { method: s, headers: e?.headers || {} };
  return s === "GET" || !r ? n : (Qs(r) ? (n.headers = Object.assign({ "Content-Type": "application/json" }, e?.headers), n.body = JSON.stringify(r)) : n.body = r, e?.duplex && (n.duplex = e.duplex), Object.assign(Object.assign({}, n), t));
};
function Se(s, e, t, r, n, i) {
  return y(this, void 0, void 0, function* () {
    return new Promise((o, a) => {
      s(t, en(e, r, n, i)).then((l) => {
        if (!l.ok)
          throw l;
        return r?.noResolveJson ? l : l.json();
      }).then((l) => o(l)).catch((l) => Zs(l, a, r));
    });
  });
}
function ye(s, e, t, r) {
  return y(this, void 0, void 0, function* () {
    return Se(s, "GET", e, t, r);
  });
}
function L(s, e, t, r, n) {
  return y(this, void 0, void 0, function* () {
    return Se(s, "POST", e, r, n, t);
  });
}
function gt(s, e, t, r, n) {
  return y(this, void 0, void 0, function* () {
    return Se(s, "PUT", e, r, n, t);
  });
}
function tn(s, e, t, r) {
  return y(this, void 0, void 0, function* () {
    return Se(s, "HEAD", e, Object.assign(Object.assign({}, t), { noResolveJson: !0 }), r);
  });
}
function Ot(s, e, t, r, n) {
  return y(this, void 0, void 0, function* () {
    return Se(s, "DELETE", e, r, n, t);
  });
}
class rn {
  constructor(e, t) {
    this.downloadFn = e, this.shouldThrowOnError = t;
  }
  then(e, t) {
    return this.execute().then(e, t);
  }
  execute() {
    return y(this, void 0, void 0, function* () {
      try {
        return {
          data: (yield this.downloadFn()).body,
          error: null
        };
      } catch (e) {
        if (this.shouldThrowOnError)
          throw e;
        if (A(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
}
var Jr;
class sn {
  constructor(e, t) {
    this.downloadFn = e, this.shouldThrowOnError = t, this[Jr] = "BlobDownloadBuilder", this.promise = null;
  }
  asStream() {
    return new rn(this.downloadFn, this.shouldThrowOnError);
  }
  then(e, t) {
    return this.getPromise().then(e, t);
  }
  catch(e) {
    return this.getPromise().catch(e);
  }
  finally(e) {
    return this.getPromise().finally(e);
  }
  getPromise() {
    return this.promise || (this.promise = this.execute()), this.promise;
  }
  execute() {
    return y(this, void 0, void 0, function* () {
      try {
        return {
          data: yield (yield this.downloadFn()).blob(),
          error: null
        };
      } catch (e) {
        if (this.shouldThrowOnError)
          throw e;
        if (A(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
}
Jr = Symbol.toStringTag;
const nn = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, Bt = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
class on {
  constructor(e, t = {}, r, n) {
    this.shouldThrowOnError = !1, this.url = e, this.headers = t, this.bucketId = r, this.fetch = St(n);
  }
  /**
   * Enable throwing errors instead of returning them.
   *
   * @category File Buckets
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
   * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
   *
   * @param method HTTP method.
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadOrUpdate(e, t, r, n) {
    return y(this, void 0, void 0, function* () {
      try {
        let i;
        const o = Object.assign(Object.assign({}, Bt), n);
        let a = Object.assign(Object.assign({}, this.headers), e === "POST" && { "x-upsert": String(o.upsert) });
        const l = o.metadata;
        typeof Blob < "u" && r instanceof Blob ? (i = new FormData(), i.append("cacheControl", o.cacheControl), l && i.append("metadata", this.encodeMetadata(l)), i.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (i = r, i.has("cacheControl") || i.append("cacheControl", o.cacheControl), l && !i.has("metadata") && i.append("metadata", this.encodeMetadata(l))) : (i = r, a["cache-control"] = `max-age=${o.cacheControl}`, a["content-type"] = o.contentType, l && (a["x-metadata"] = this.toBase64(this.encodeMetadata(l))), (typeof ReadableStream < "u" && i instanceof ReadableStream || i && typeof i == "object" && "pipe" in i && typeof i.pipe == "function") && !o.duplex && (o.duplex = "half")), n?.headers && (a = Object.assign(Object.assign({}, a), n.headers));
        const u = this._removeEmptyFolders(t), c = this._getFinalPath(u), d = yield (e == "PUT" ? gt : L)(this.fetch, `${this.url}/object/${c}`, i, Object.assign({ headers: a }, o?.duplex ? { duplex: o.duplex } : {}));
        return {
          data: { path: u, id: d.Id, fullPath: d.Key },
          error: null
        };
      } catch (i) {
        if (this.shouldThrowOnError)
          throw i;
        if (A(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Uploads a file to an existing bucket.
   *
   * @category File Buckets
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   * @param fileOptions Optional file upload options including cacheControl, contentType, upsert, and metadata.
   * @returns Promise with response containing file path, id, and fullPath or error
   *
   * @example Upload file
   * ```js
   * const avatarFile = event.target.files[0]
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .upload('public/avatar1.png', avatarFile, {
   *     cacheControl: '3600',
   *     upsert: false
   *   })
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "path": "public/avatar1.png",
   *     "fullPath": "avatars/public/avatar1.png"
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Upload file using `ArrayBuffer` from base64 file data
   * ```js
   * import { decode } from 'base64-arraybuffer'
   *
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .upload('public/avatar1.png', decode('base64FileData'), {
   *     contentType: 'image/png'
   *   })
   * ```
   */
  upload(e, t, r) {
    return y(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", e, t, r);
    });
  }
  /**
   * Upload a file with a token generated from `createSignedUploadUrl`.
   *
   * @category File Buckets
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param token The token generated from `createSignedUploadUrl`
   * @param fileBody The body of the file to be stored in the bucket.
   * @param fileOptions HTTP headers (cacheControl, contentType, etc.).
   * **Note:** The `upsert` option has no effect here. To enable upsert behavior,
   * pass `{ upsert: true }` when calling `createSignedUploadUrl()` instead.
   * @returns Promise with response containing file path and fullPath or error
   *
   * @example Upload to a signed URL
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .uploadToSignedUrl('folder/cat.jpg', 'token-from-createSignedUploadUrl', file)
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "path": "folder/cat.jpg",
   *     "fullPath": "avatars/folder/cat.jpg"
   *   },
   *   "error": null
   * }
   * ```
   */
  uploadToSignedUrl(e, t, r, n) {
    return y(this, void 0, void 0, function* () {
      const i = this._removeEmptyFolders(e), o = this._getFinalPath(i), a = new URL(this.url + `/object/upload/sign/${o}`);
      a.searchParams.set("token", t);
      try {
        let l;
        const u = Object.assign({ upsert: Bt.upsert }, n), c = Object.assign(Object.assign({}, this.headers), { "x-upsert": String(u.upsert) });
        typeof Blob < "u" && r instanceof Blob ? (l = new FormData(), l.append("cacheControl", u.cacheControl), l.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (l = r, l.append("cacheControl", u.cacheControl)) : (l = r, c["cache-control"] = `max-age=${u.cacheControl}`, c["content-type"] = u.contentType);
        const d = yield gt(this.fetch, a.toString(), l, { headers: c });
        return {
          data: { path: i, fullPath: d.Key },
          error: null
        };
      } catch (l) {
        if (this.shouldThrowOnError)
          throw l;
        if (A(l))
          return { data: null, error: l };
        throw l;
      }
    });
  }
  /**
   * Creates a signed upload URL.
   * Signed upload URLs can be used to upload files to the bucket without further authentication.
   * They are valid for 2 hours.
   *
   * @category File Buckets
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
   * @returns Promise with response containing signed upload URL, token, and path or error
   *
   * @example Create Signed Upload URL
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .createSignedUploadUrl('folder/cat.jpg')
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "signedUrl": "https://example.supabase.co/storage/v1/object/upload/sign/avatars/folder/cat.jpg?token=<TOKEN>",
   *     "path": "folder/cat.jpg",
   *     "token": "<TOKEN>"
   *   },
   *   "error": null
   * }
   * ```
   */
  createSignedUploadUrl(e, t) {
    return y(this, void 0, void 0, function* () {
      try {
        let r = this._getFinalPath(e);
        const n = Object.assign({}, this.headers);
        t?.upsert && (n["x-upsert"] = "true");
        const i = yield L(this.fetch, `${this.url}/object/upload/sign/${r}`, {}, { headers: n }), o = new URL(this.url + i.url), a = o.searchParams.get("token");
        if (!a)
          throw new Ee("No token returned by API");
        return { data: { signedUrl: o.toString(), path: e, token: a }, error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (A(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Replaces an existing file at the specified path with a new one.
   *
   * @category File Buckets
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
   * @param fileBody The body of the file to be stored in the bucket.
   * @param fileOptions Optional file upload options including cacheControl, contentType, upsert, and metadata.
   * @returns Promise with response containing file path, id, and fullPath or error
   *
   * @example Update file
   * ```js
   * const avatarFile = event.target.files[0]
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .update('public/avatar1.png', avatarFile, {
   *     cacheControl: '3600',
   *     upsert: true
   *   })
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "path": "public/avatar1.png",
   *     "fullPath": "avatars/public/avatar1.png"
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Update file using `ArrayBuffer` from base64 file data
   * ```js
   * import {decode} from 'base64-arraybuffer'
   *
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .update('public/avatar1.png', decode('base64FileData'), {
   *     contentType: 'image/png'
   *   })
   * ```
   */
  update(e, t, r) {
    return y(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", e, t, r);
    });
  }
  /**
   * Moves an existing file to a new path in the same bucket.
   *
   * @category File Buckets
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
   * @param options The destination options.
   * @returns Promise with response containing success message or error
   *
   * @example Move file
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .move('public/avatar1.png', 'private/avatar2.png')
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "message": "Successfully moved"
   *   },
   *   "error": null
   * }
   * ```
   */
  move(e, t, r) {
    return y(this, void 0, void 0, function* () {
      try {
        return { data: yield L(this.fetch, `${this.url}/object/move`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: t,
          destinationBucket: r?.destinationBucket
        }, { headers: this.headers }), error: null };
      } catch (n) {
        if (this.shouldThrowOnError)
          throw n;
        if (A(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Copies an existing file to a new path in the same bucket.
   *
   * @category File Buckets
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
   * @param options The destination options.
   * @returns Promise with response containing copied file path or error
   *
   * @example Copy file
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .copy('public/avatar1.png', 'private/avatar2.png')
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "path": "avatars/private/avatar2.png"
   *   },
   *   "error": null
   * }
   * ```
   */
  copy(e, t, r) {
    return y(this, void 0, void 0, function* () {
      try {
        return { data: { path: (yield L(this.fetch, `${this.url}/object/copy`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: t,
          destinationBucket: r?.destinationBucket
        }, { headers: this.headers })).Key }, error: null };
      } catch (n) {
        if (this.shouldThrowOnError)
          throw n;
        if (A(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
   *
   * @category File Buckets
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   * @returns Promise with response containing signed URL or error
   *
   * @example Create Signed URL
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .createSignedUrl('folder/avatar1.png', 60)
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Create a signed URL for an asset with transformations
   * ```js
   * const { data } = await supabase
   *   .storage
   *   .from('avatars')
   *   .createSignedUrl('folder/avatar1.png', 60, {
   *     transform: {
   *       width: 100,
   *       height: 100,
   *     }
   *   })
   * ```
   *
   * @example Create a signed URL which triggers the download of the asset
   * ```js
   * const { data } = await supabase
   *   .storage
   *   .from('avatars')
   *   .createSignedUrl('folder/avatar1.png', 60, {
   *     download: true,
   *   })
   * ```
   */
  createSignedUrl(e, t, r) {
    return y(this, void 0, void 0, function* () {
      try {
        let n = this._getFinalPath(e), i = yield L(this.fetch, `${this.url}/object/sign/${n}`, Object.assign({ expiresIn: t }, r?.transform ? { transform: r.transform } : {}), { headers: this.headers });
        const o = r?.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
        return i = { signedUrl: encodeURI(`${this.url}${i.signedURL}${o}`) }, { data: i, error: null };
      } catch (n) {
        if (this.shouldThrowOnError)
          throw n;
        if (A(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
   *
   * @category File Buckets
   * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
   * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @returns Promise with response containing array of objects with signedUrl, path, and error or error
   *
   * @example Create Signed URLs
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .createSignedUrls(['folder/avatar1.png', 'folder/avatar2.png'], 60)
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": [
   *     {
   *       "error": null,
   *       "path": "folder/avatar1.png",
   *       "signedURL": "/object/sign/avatars/folder/avatar1.png?token=<TOKEN>",
   *       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
   *     },
   *     {
   *       "error": null,
   *       "path": "folder/avatar2.png",
   *       "signedURL": "/object/sign/avatars/folder/avatar2.png?token=<TOKEN>",
   *       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar2.png?token=<TOKEN>"
   *     }
   *   ],
   *   "error": null
   * }
   * ```
   */
  createSignedUrls(e, t, r) {
    return y(this, void 0, void 0, function* () {
      try {
        const n = yield L(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn: t, paths: e }, { headers: this.headers }), i = r?.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
        return {
          data: n.map((o) => Object.assign(Object.assign({}, o), { signedUrl: o.signedURL ? encodeURI(`${this.url}${o.signedURL}${i}`) : null })),
          error: null
        };
      } catch (n) {
        if (this.shouldThrowOnError)
          throw n;
        if (A(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
   *
   * @category File Buckets
   * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
   * @param options.transform Transform the asset before serving it to the client.
   * @returns BlobDownloadBuilder instance for downloading the file
   *
   * @example Download file
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .download('folder/avatar1.png')
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": <BLOB>,
   *   "error": null
   * }
   * ```
   *
   * @example Download file with transformations
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .download('folder/avatar1.png', {
   *     transform: {
   *       width: 100,
   *       height: 100,
   *       quality: 80
   *     }
   *   })
   * ```
   */
  download(e, t) {
    const n = typeof t?.transform < "u" ? "render/image/authenticated" : "object", i = this.transformOptsToQueryString(t?.transform || {}), o = i ? `?${i}` : "", a = this._getFinalPath(e), l = () => ye(this.fetch, `${this.url}/${n}/${a}${o}`, {
      headers: this.headers,
      noResolveJson: !0
    });
    return new sn(l, this.shouldThrowOnError);
  }
  /**
   * Retrieves the details of an existing file.
   *
   * @category File Buckets
   * @param path The file path, including the file name. For example `folder/image.png`.
   * @returns Promise with response containing file metadata or error
   *
   * @example Get file info
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .info('folder/avatar1.png')
   * ```
   */
  info(e) {
    return y(this, void 0, void 0, function* () {
      const t = this._getFinalPath(e);
      try {
        const r = yield ye(this.fetch, `${this.url}/object/info/${t}`, {
          headers: this.headers
        });
        return { data: ft(r), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (A(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Checks the existence of a file.
   *
   * @category File Buckets
   * @param path The file path, including the file name. For example `folder/image.png`.
   * @returns Promise with response containing boolean indicating file existence or error
   *
   * @example Check file existence
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .exists('folder/avatar1.png')
   * ```
   */
  exists(e) {
    return y(this, void 0, void 0, function* () {
      const t = this._getFinalPath(e);
      try {
        return yield tn(this.fetch, `${this.url}/object/${t}`, {
          headers: this.headers
        }), { data: !0, error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (A(r) && r instanceof qe) {
          const n = r.originalError;
          if ([400, 404].includes(n?.status))
            return { data: !1, error: r };
        }
        throw r;
      }
    });
  }
  /**
   * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
   * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
   *
   * @category File Buckets
   * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
   * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   * @returns Object with public URL
   *
   * @example Returns the URL for an asset in a public bucket
   * ```js
   * const { data } = supabase
   *   .storage
   *   .from('public-bucket')
   *   .getPublicUrl('folder/avatar1.png')
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "publicUrl": "https://example.supabase.co/storage/v1/object/public/public-bucket/folder/avatar1.png"
   *   }
   * }
   * ```
   *
   * @example Returns the URL for an asset in a public bucket with transformations
   * ```js
   * const { data } = supabase
   *   .storage
   *   .from('public-bucket')
   *   .getPublicUrl('folder/avatar1.png', {
   *     transform: {
   *       width: 100,
   *       height: 100,
   *     }
   *   })
   * ```
   *
   * @example Returns the URL which triggers the download of an asset in a public bucket
   * ```js
   * const { data } = supabase
   *   .storage
   *   .from('public-bucket')
   *   .getPublicUrl('folder/avatar1.png', {
   *     download: true,
   *   })
   * ```
   */
  getPublicUrl(e, t) {
    const r = this._getFinalPath(e), n = [], i = t?.download ? `download=${t.download === !0 ? "" : t.download}` : "";
    i !== "" && n.push(i);
    const a = typeof t?.transform < "u" ? "render/image" : "object", l = this.transformOptsToQueryString(t?.transform || {});
    l !== "" && n.push(l);
    let u = n.join("&");
    return u !== "" && (u = `?${u}`), {
      data: { publicUrl: encodeURI(`${this.url}/${a}/public/${r}${u}`) }
    };
  }
  /**
   * Deletes files within the same bucket
   *
   * @category File Buckets
   * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
   * @returns Promise with response containing array of deleted file objects or error
   *
   * @example Delete file
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .remove(['folder/avatar1.png'])
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": [],
   *   "error": null
   * }
   * ```
   */
  remove(e) {
    return y(this, void 0, void 0, function* () {
      try {
        return { data: yield Ot(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: e }, { headers: this.headers }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (A(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Get file metadata
   * @param id the file id to retrieve metadata
   */
  // async getMetadata(
  //   id: string
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Update file metadata
   * @param id the file id to update metadata
   * @param meta the new file metadata
   */
  // async updateMetadata(
  //   id: string,
  //   meta: Metadata
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await post(
  //       this.fetch,
  //       `${this.url}/metadata/${id}`,
  //       { ...meta },
  //       { headers: this.headers }
  //     )
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Lists all the files and folders within a path of the bucket.
   *
   * @category File Buckets
   * @param path The folder path.
   * @param options Search options including limit (defaults to 100), offset, sortBy, and search
   * @param parameters Optional fetch parameters including signal for cancellation
   * @returns Promise with response containing array of files or error
   *
   * @example List files in a bucket
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .list('folder', {
   *     limit: 100,
   *     offset: 0,
   *     sortBy: { column: 'name', order: 'asc' },
   *   })
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": [
   *     {
   *       "name": "avatar1.png",
   *       "id": "e668cf7f-821b-4a2f-9dce-7dfa5dd1cfd2",
   *       "updated_at": "2024-05-22T23:06:05.580Z",
   *       "created_at": "2024-05-22T23:04:34.443Z",
   *       "last_accessed_at": "2024-05-22T23:04:34.443Z",
   *       "metadata": {
   *         "eTag": "\"c5e8c553235d9af30ef4f6e280790b92\"",
   *         "size": 32175,
   *         "mimetype": "image/png",
   *         "cacheControl": "max-age=3600",
   *         "lastModified": "2024-05-22T23:06:05.574Z",
   *         "contentLength": 32175,
   *         "httpStatusCode": 200
   *       }
   *     }
   *   ],
   *   "error": null
   * }
   * ```
   *
   * @example Search files in a bucket
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .from('avatars')
   *   .list('folder', {
   *     limit: 100,
   *     offset: 0,
   *     sortBy: { column: 'name', order: 'asc' },
   *     search: 'jon'
   *   })
   * ```
   */
  list(e, t, r) {
    return y(this, void 0, void 0, function* () {
      try {
        const n = Object.assign(Object.assign(Object.assign({}, nn), t), { prefix: e || "" });
        return { data: yield L(this.fetch, `${this.url}/object/list/${this.bucketId}`, n, { headers: this.headers }, r), error: null };
      } catch (n) {
        if (this.shouldThrowOnError)
          throw n;
        if (A(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * @experimental this method signature might change in the future
   *
   * @category File Buckets
   * @param options search options
   * @param parameters
   */
  listV2(e, t) {
    return y(this, void 0, void 0, function* () {
      try {
        const r = Object.assign({}, e);
        return { data: yield L(this.fetch, `${this.url}/object/list-v2/${this.bucketId}`, r, { headers: this.headers }, t), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (A(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  encodeMetadata(e) {
    return JSON.stringify(e);
  }
  toBase64(e) {
    return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
  }
  _getFinalPath(e) {
    return `${this.bucketId}/${e.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(e) {
    return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(e) {
    const t = [];
    return e.width && t.push(`width=${e.width}`), e.height && t.push(`height=${e.height}`), e.resize && t.push(`resize=${e.resize}`), e.format && t.push(`format=${e.format}`), e.quality && t.push(`quality=${e.quality}`), t.join("&");
  }
}
const zr = "2.87.1", Yr = {
  "X-Client-Info": `storage-js/${zr}`
};
class an {
  constructor(e, t = {}, r, n) {
    this.shouldThrowOnError = !1;
    const i = new URL(e);
    n?.useNewHostname && /supabase\.(co|in|red)$/.test(i.hostname) && !i.hostname.includes("storage.supabase.") && (i.hostname = i.hostname.replace("supabase.", "storage.supabase.")), this.url = i.href.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, Yr), t), this.fetch = St(r);
  }
  /**
   * Enable throwing errors instead of returning them.
   *
   * @category File Buckets
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
   * Retrieves the details of all Storage buckets within an existing project.
   *
   * @category File Buckets
   * @param options Query parameters for listing buckets
   * @param options.limit Maximum number of buckets to return
   * @param options.offset Number of buckets to skip
   * @param options.sortColumn Column to sort by ('id', 'name', 'created_at', 'updated_at')
   * @param options.sortOrder Sort order ('asc' or 'desc')
   * @param options.search Search term to filter bucket names
   * @returns Promise with response containing array of buckets or error
   *
   * @example List buckets
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .listBuckets()
   * ```
   *
   * @example List buckets with options
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .listBuckets({
   *     limit: 10,
   *     offset: 0,
   *     sortColumn: 'created_at',
   *     sortOrder: 'desc',
   *     search: 'prod'
   *   })
   * ```
   */
  listBuckets(e) {
    return y(this, void 0, void 0, function* () {
      try {
        const t = this.listBucketOptionsToQueryString(e);
        return { data: yield ye(this.fetch, `${this.url}/bucket${t}`, {
          headers: this.headers
        }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (A(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Retrieves the details of an existing Storage bucket.
   *
   * @category File Buckets
   * @param id The unique identifier of the bucket you would like to retrieve.
   * @returns Promise with response containing bucket details or error
   *
   * @example Get bucket
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .getBucket('avatars')
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "id": "avatars",
   *     "name": "avatars",
   *     "owner": "",
   *     "public": false,
   *     "file_size_limit": 1024,
   *     "allowed_mime_types": [
   *       "image/png"
   *     ],
   *     "created_at": "2024-05-22T22:26:05.100Z",
   *     "updated_at": "2024-05-22T22:26:05.100Z"
   *   },
   *   "error": null
   * }
   * ```
   */
  getBucket(e) {
    return y(this, void 0, void 0, function* () {
      try {
        return { data: yield ye(this.fetch, `${this.url}/bucket/${e}`, { headers: this.headers }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (A(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Creates a new Storage bucket
   *
   * @category File Buckets
   * @param id A unique identifier for the bucket you are creating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   * @param options.type (private-beta) specifies the bucket type. see `BucketType` for more details.
   *   - default bucket type is `STANDARD`
   * @returns Promise with response containing newly created bucket name or error
   *
   * @example Create bucket
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .createBucket('avatars', {
   *     public: false,
   *     allowedMimeTypes: ['image/png'],
   *     fileSizeLimit: 1024
   *   })
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "name": "avatars"
   *   },
   *   "error": null
   * }
   * ```
   */
  createBucket(e) {
    return y(this, arguments, void 0, function* (t, r = {
      public: !1
    }) {
      try {
        return { data: yield L(this.fetch, `${this.url}/bucket`, {
          id: t,
          name: t,
          type: r.type,
          public: r.public,
          file_size_limit: r.fileSizeLimit,
          allowed_mime_types: r.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (n) {
        if (this.shouldThrowOnError)
          throw n;
        if (A(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Updates a Storage bucket
   *
   * @category File Buckets
   * @param id A unique identifier for the bucket you are updating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   * @returns Promise with response containing success message or error
   *
   * @example Update bucket
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .updateBucket('avatars', {
   *     public: false,
   *     allowedMimeTypes: ['image/png'],
   *     fileSizeLimit: 1024
   *   })
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "message": "Successfully updated"
   *   },
   *   "error": null
   * }
   * ```
   */
  updateBucket(e, t) {
    return y(this, void 0, void 0, function* () {
      try {
        return { data: yield gt(this.fetch, `${this.url}/bucket/${e}`, {
          id: e,
          name: e,
          public: t.public,
          file_size_limit: t.fileSizeLimit,
          allowed_mime_types: t.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (A(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Removes all objects inside a single bucket.
   *
   * @category File Buckets
   * @param id The unique identifier of the bucket you would like to empty.
   * @returns Promise with success message or error
   *
   * @example Empty bucket
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .emptyBucket('avatars')
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "message": "Successfully emptied"
   *   },
   *   "error": null
   * }
   * ```
   */
  emptyBucket(e) {
    return y(this, void 0, void 0, function* () {
      try {
        return { data: yield L(this.fetch, `${this.url}/bucket/${e}/empty`, {}, { headers: this.headers }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (A(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
   * You must first `empty()` the bucket.
   *
   * @category File Buckets
   * @param id The unique identifier of the bucket you would like to delete.
   * @returns Promise with success message or error
   *
   * @example Delete bucket
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .deleteBucket('avatars')
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "message": "Successfully deleted"
   *   },
   *   "error": null
   * }
   * ```
   */
  deleteBucket(e) {
    return y(this, void 0, void 0, function* () {
      try {
        return { data: yield Ot(this.fetch, `${this.url}/bucket/${e}`, {}, { headers: this.headers }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (A(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  listBucketOptionsToQueryString(e) {
    const t = {};
    return e && ("limit" in e && (t.limit = String(e.limit)), "offset" in e && (t.offset = String(e.offset)), e.search && (t.search = e.search), e.sortColumn && (t.sortColumn = e.sortColumn), e.sortOrder && (t.sortOrder = e.sortOrder)), Object.keys(t).length > 0 ? "?" + new URLSearchParams(t).toString() : "";
  }
}
var be = class extends Error {
  constructor(s, e) {
    super(s), this.name = "IcebergError", this.status = e.status, this.icebergType = e.icebergType, this.icebergCode = e.icebergCode, this.details = e.details, this.isCommitStateUnknown = e.icebergType === "CommitStateUnknownException" || [500, 502, 504].includes(e.status) && e.icebergType?.includes("CommitState") === !0;
  }
  /**
   * Returns true if the error is a 404 Not Found error.
   */
  isNotFound() {
    return this.status === 404;
  }
  /**
   * Returns true if the error is a 409 Conflict error.
   */
  isConflict() {
    return this.status === 409;
  }
  /**
   * Returns true if the error is a 419 Authentication Timeout error.
   */
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function ln(s, e, t) {
  const r = new URL(e, s);
  if (t)
    for (const [n, i] of Object.entries(t))
      i !== void 0 && r.searchParams.set(n, i);
  return r.toString();
}
async function un(s) {
  return !s || s.type === "none" ? {} : s.type === "bearer" ? { Authorization: `Bearer ${s.token}` } : s.type === "header" ? { [s.name]: s.value } : s.type === "custom" ? await s.getHeaders() : {};
}
function cn(s) {
  const e = s.fetchImpl ?? globalThis.fetch;
  return {
    async request({
      method: t,
      path: r,
      query: n,
      body: i,
      headers: o
    }) {
      const a = ln(s.baseUrl, r, n), l = await un(s.auth), u = await e(a, {
        method: t,
        headers: {
          ...i ? { "Content-Type": "application/json" } : {},
          ...l,
          ...o
        },
        body: i ? JSON.stringify(i) : void 0
      }), c = await u.text(), d = (u.headers.get("content-type") || "").includes("application/json"), f = d && c ? JSON.parse(c) : c;
      if (!u.ok) {
        const h = d ? f : void 0, g = h?.error;
        throw new be(
          g?.message ?? `Request failed with status ${u.status}`,
          {
            status: u.status,
            icebergType: g?.type,
            icebergCode: g?.code,
            details: h
          }
        );
      }
      return { status: u.status, headers: u.headers, data: f };
    }
  };
}
function Ie(s) {
  return s.join("");
}
var hn = class {
  constructor(s, e = "") {
    this.client = s, this.prefix = e;
  }
  async listNamespaces(s) {
    const e = s ? { parent: Ie(s.namespace) } : void 0;
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces`,
      query: e
    })).data.namespaces.map((r) => ({ namespace: r }));
  }
  async createNamespace(s, e) {
    const t = {
      namespace: s.namespace,
      properties: e?.properties
    };
    return (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces`,
      body: t
    })).data;
  }
  async dropNamespace(s) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${Ie(s.namespace)}`
    });
  }
  async loadNamespaceMetadata(s) {
    return {
      properties: (await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces/${Ie(s.namespace)}`
      })).data.properties
    };
  }
  async namespaceExists(s) {
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${Ie(s.namespace)}`
      }), !0;
    } catch (e) {
      if (e instanceof be && e.status === 404)
        return !1;
      throw e;
    }
  }
  async createNamespaceIfNotExists(s, e) {
    try {
      return await this.createNamespace(s, e);
    } catch (t) {
      if (t instanceof be && t.status === 409)
        return;
      throw t;
    }
  }
};
function re(s) {
  return s.join("");
}
var dn = class {
  constructor(s, e = "", t) {
    this.client = s, this.prefix = e, this.accessDelegation = t;
  }
  async listTables(s) {
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${re(s.namespace)}/tables`
    })).data.identifiers;
  }
  async createTable(s, e) {
    const t = {};
    return this.accessDelegation && (t["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${re(s.namespace)}/tables`,
      body: e,
      headers: t
    })).data.metadata;
  }
  async updateTable(s, e) {
    const t = await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${re(s.namespace)}/tables/${s.name}`,
      body: e
    });
    return {
      "metadata-location": t.data["metadata-location"],
      metadata: t.data.metadata
    };
  }
  async dropTable(s, e) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${re(s.namespace)}/tables/${s.name}`,
      query: { purgeRequested: String(e?.purge ?? !1) }
    });
  }
  async loadTable(s) {
    const e = {};
    return this.accessDelegation && (e["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${re(s.namespace)}/tables/${s.name}`,
      headers: e
    })).data.metadata;
  }
  async tableExists(s) {
    const e = {};
    this.accessDelegation && (e["X-Iceberg-Access-Delegation"] = this.accessDelegation);
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${re(s.namespace)}/tables/${s.name}`,
        headers: e
      }), !0;
    } catch (t) {
      if (t instanceof be && t.status === 404)
        return !1;
      throw t;
    }
  }
  async createTableIfNotExists(s, e) {
    try {
      return await this.createTable(s, e);
    } catch (t) {
      if (t instanceof be && t.status === 409)
        return await this.loadTable({ namespace: s.namespace, name: e.name });
      throw t;
    }
  }
}, fn = class {
  /**
   * Creates a new Iceberg REST Catalog client.
   *
   * @param options - Configuration options for the catalog client
   */
  constructor(s) {
    let e = "v1";
    s.catalogName && (e += `/${s.catalogName}`);
    const t = s.baseUrl.endsWith("/") ? s.baseUrl : `${s.baseUrl}/`;
    this.client = cn({
      baseUrl: t,
      auth: s.auth,
      fetchImpl: s.fetch
    }), this.accessDelegation = s.accessDelegation?.join(","), this.namespaceOps = new hn(this.client, e), this.tableOps = new dn(this.client, e, this.accessDelegation);
  }
  /**
   * Lists all namespaces in the catalog.
   *
   * @param parent - Optional parent namespace to list children under
   * @returns Array of namespace identifiers
   *
   * @example
   * ```typescript
   * // List all top-level namespaces
   * const namespaces = await catalog.listNamespaces();
   *
   * // List namespaces under a parent
   * const children = await catalog.listNamespaces({ namespace: ['analytics'] });
   * ```
   */
  async listNamespaces(s) {
    return this.namespaceOps.listNamespaces(s);
  }
  /**
   * Creates a new namespace in the catalog.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespace(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * console.log(response.namespace); // ['analytics']
   * console.log(response.properties); // { owner: 'data-team', ... }
   * ```
   */
  async createNamespace(s, e) {
    return this.namespaceOps.createNamespace(s, e);
  }
  /**
   * Drops a namespace from the catalog.
   *
   * The namespace must be empty (contain no tables) before it can be dropped.
   *
   * @param id - Namespace identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropNamespace({ namespace: ['analytics'] });
   * ```
   */
  async dropNamespace(s) {
    await this.namespaceOps.dropNamespace(s);
  }
  /**
   * Loads metadata for a namespace.
   *
   * @param id - Namespace identifier to load
   * @returns Namespace metadata including properties
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadNamespaceMetadata({ namespace: ['analytics'] });
   * console.log(metadata.properties);
   * ```
   */
  async loadNamespaceMetadata(s) {
    return this.namespaceOps.loadNamespaceMetadata(s);
  }
  /**
   * Lists all tables in a namespace.
   *
   * @param namespace - Namespace identifier to list tables from
   * @returns Array of table identifiers
   *
   * @example
   * ```typescript
   * const tables = await catalog.listTables({ namespace: ['analytics'] });
   * console.log(tables); // [{ namespace: ['analytics'], name: 'events' }, ...]
   * ```
   */
  async listTables(s) {
    return this.tableOps.listTables(s);
  }
  /**
   * Creates a new table in the catalog.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTable(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     },
   *     'partition-spec': {
   *       'spec-id': 0,
   *       fields: [
   *         { source_id: 2, field_id: 1000, name: 'ts_day', transform: 'day' }
   *       ]
   *     }
   *   }
   * );
   * ```
   */
  async createTable(s, e) {
    return this.tableOps.createTable(s, e);
  }
  /**
   * Updates an existing table's metadata.
   *
   * Can update the schema, partition spec, or properties of a table.
   *
   * @param id - Table identifier to update
   * @param request - Update request with fields to modify
   * @returns Response containing the metadata location and updated table metadata
   *
   * @example
   * ```typescript
   * const response = await catalog.updateTable(
   *   { namespace: ['analytics'], name: 'events' },
   *   {
   *     properties: { 'read.split.target-size': '134217728' }
   *   }
   * );
   * console.log(response['metadata-location']); // s3://...
   * console.log(response.metadata); // TableMetadata object
   * ```
   */
  async updateTable(s, e) {
    return this.tableOps.updateTable(s, e);
  }
  /**
   * Drops a table from the catalog.
   *
   * @param id - Table identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropTable({ namespace: ['analytics'], name: 'events' });
   * ```
   */
  async dropTable(s, e) {
    await this.tableOps.dropTable(s, e);
  }
  /**
   * Loads metadata for a table.
   *
   * @param id - Table identifier to load
   * @returns Table metadata including schema, partition spec, location, etc.
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadTable({ namespace: ['analytics'], name: 'events' });
   * console.log(metadata.schema);
   * console.log(metadata.location);
   * ```
   */
  async loadTable(s) {
    return this.tableOps.loadTable(s);
  }
  /**
   * Checks if a namespace exists in the catalog.
   *
   * @param id - Namespace identifier to check
   * @returns True if the namespace exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.namespaceExists({ namespace: ['analytics'] });
   * console.log(exists); // true or false
   * ```
   */
  async namespaceExists(s) {
    return this.namespaceOps.namespaceExists(s);
  }
  /**
   * Checks if a table exists in the catalog.
   *
   * @param id - Table identifier to check
   * @returns True if the table exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.tableExists({ namespace: ['analytics'], name: 'events' });
   * console.log(exists); // true or false
   * ```
   */
  async tableExists(s) {
    return this.tableOps.tableExists(s);
  }
  /**
   * Creates a namespace if it does not exist.
   *
   * If the namespace already exists, returns void. If created, returns the response.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties, or void if it already exists
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespaceIfNotExists(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * if (response) {
   *   console.log('Created:', response.namespace);
   * } else {
   *   console.log('Already exists');
   * }
   * ```
   */
  async createNamespaceIfNotExists(s, e) {
    return this.namespaceOps.createNamespaceIfNotExists(s, e);
  }
  /**
   * Creates a table if it does not exist.
   *
   * If the table already exists, returns its metadata instead.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created or existing table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTableIfNotExists(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     }
   *   }
   * );
   * ```
   */
  async createTableIfNotExists(s, e) {
    return this.tableOps.createTableIfNotExists(s, e);
  }
};
class Qr {
  /**
   * @alpha
   *
   * Creates a new StorageAnalyticsClient instance
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Analytics Buckets
   * @param url - The base URL for the storage API
   * @param headers - HTTP headers to include in requests
   * @param fetch - Optional custom fetch implementation
   *
   * @example
   * ```typescript
   * const client = new StorageAnalyticsClient(url, headers)
   * ```
   */
  constructor(e, t = {}, r) {
    this.shouldThrowOnError = !1, this.url = e.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, Yr), t), this.fetch = St(r);
  }
  /**
   * @alpha
   *
   * Enable throwing errors instead of returning them in the response
   * When enabled, failed operations will throw instead of returning { data: null, error }
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Analytics Buckets
   * @returns This instance for method chaining
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
   * @alpha
   *
   * Creates a new analytics bucket using Iceberg tables
   * Analytics buckets are optimized for analytical queries and data processing
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Analytics Buckets
   * @param name A unique name for the bucket you are creating
   * @returns Promise with response containing newly created analytics bucket or error
   *
   * @example Create analytics bucket
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .analytics
   *   .createBucket('analytics-data')
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "name": "analytics-data",
   *     "type": "ANALYTICS",
   *     "format": "iceberg",
   *     "created_at": "2024-05-22T22:26:05.100Z",
   *     "updated_at": "2024-05-22T22:26:05.100Z"
   *   },
   *   "error": null
   * }
   * ```
   */
  createBucket(e) {
    return y(this, void 0, void 0, function* () {
      try {
        return { data: yield L(this.fetch, `${this.url}/bucket`, { name: e }, { headers: this.headers }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (A(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * @alpha
   *
   * Retrieves the details of all Analytics Storage buckets within an existing project
   * Only returns buckets of type 'ANALYTICS'
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Analytics Buckets
   * @param options Query parameters for listing buckets
   * @param options.limit Maximum number of buckets to return
   * @param options.offset Number of buckets to skip
   * @param options.sortColumn Column to sort by ('name', 'created_at', 'updated_at')
   * @param options.sortOrder Sort order ('asc' or 'desc')
   * @param options.search Search term to filter bucket names
   * @returns Promise with response containing array of analytics buckets or error
   *
   * @example List analytics buckets
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .analytics
   *   .listBuckets({
   *     limit: 10,
   *     offset: 0,
   *     sortColumn: 'created_at',
   *     sortOrder: 'desc'
   *   })
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": [
   *     {
   *       "name": "analytics-data",
   *       "type": "ANALYTICS",
   *       "format": "iceberg",
   *       "created_at": "2024-05-22T22:26:05.100Z",
   *       "updated_at": "2024-05-22T22:26:05.100Z"
   *     }
   *   ],
   *   "error": null
   * }
   * ```
   */
  listBuckets(e) {
    return y(this, void 0, void 0, function* () {
      try {
        const t = new URLSearchParams();
        e?.limit !== void 0 && t.set("limit", e.limit.toString()), e?.offset !== void 0 && t.set("offset", e.offset.toString()), e?.sortColumn && t.set("sortColumn", e.sortColumn), e?.sortOrder && t.set("sortOrder", e.sortOrder), e?.search && t.set("search", e.search);
        const r = t.toString(), n = r ? `${this.url}/bucket?${r}` : `${this.url}/bucket`;
        return { data: yield ye(this.fetch, n, { headers: this.headers }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (A(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * @alpha
   *
   * Deletes an existing analytics bucket
   * A bucket can't be deleted with existing objects inside it
   * You must first empty the bucket before deletion
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Analytics Buckets
   * @param bucketName The unique identifier of the bucket you would like to delete
   * @returns Promise with response containing success message or error
   *
   * @example Delete analytics bucket
   * ```js
   * const { data, error } = await supabase
   *   .storage
   *   .analytics
   *   .deleteBucket('analytics-data')
   * ```
   *
   * Response:
   * ```json
   * {
   *   "data": {
   *     "message": "Successfully deleted"
   *   },
   *   "error": null
   * }
   * ```
   */
  deleteBucket(e) {
    return y(this, void 0, void 0, function* () {
      try {
        return { data: yield Ot(this.fetch, `${this.url}/bucket/${e}`, {}, { headers: this.headers }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (A(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * @alpha
   *
   * Get an Iceberg REST Catalog client configured for a specific analytics bucket
   * Use this to perform advanced table and namespace operations within the bucket
   * The returned client provides full access to the Apache Iceberg REST Catalog API
   * with the Supabase `{ data, error }` pattern for consistent error handling on all operations.
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Analytics Buckets
   * @param bucketName - The name of the analytics bucket (warehouse) to connect to
   * @returns The wrapped Iceberg catalog client
   * @throws {StorageError} If the bucket name is invalid
   *
   * @example Get catalog and create table
   * ```js
   * // First, create an analytics bucket
   * const { data: bucket, error: bucketError } = await supabase
   *   .storage
   *   .analytics
   *   .createBucket('analytics-data')
   *
   * // Get the Iceberg catalog for that bucket
   * const catalog = supabase.storage.analytics.from('analytics-data')
   *
   * // Create a namespace
   * const { error: nsError } = await catalog.createNamespace({ namespace: ['default'] })
   *
   * // Create a table with schema
   * const { data: tableMetadata, error: tableError } = await catalog.createTable(
   *   { namespace: ['default'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true },
   *         { id: 3, name: 'user_id', type: 'string', required: false }
   *       ],
   *       'schema-id': 0,
   *       'identifier-field-ids': [1]
   *     },
   *     'partition-spec': {
   *       'spec-id': 0,
   *       fields: []
   *     },
   *     'write-order': {
   *       'order-id': 0,
   *       fields: []
   *     },
   *     properties: {
   *       'write.format.default': 'parquet'
   *     }
   *   }
   * )
   * ```
   *
   * @example List tables in namespace
   * ```js
   * const catalog = supabase.storage.analytics.from('analytics-data')
   *
   * // List all tables in the default namespace
   * const { data: tables, error: listError } = await catalog.listTables({ namespace: ['default'] })
   * if (listError) {
   *   if (listError.isNotFound()) {
   *     console.log('Namespace not found')
   *   }
   *   return
   * }
   * console.log(tables) // [{ namespace: ['default'], name: 'events' }]
   * ```
   *
   * @example Working with namespaces
   * ```js
   * const catalog = supabase.storage.analytics.from('analytics-data')
   *
   * // List all namespaces
   * const { data: namespaces } = await catalog.listNamespaces()
   *
   * // Create namespace with properties
   * await catalog.createNamespace(
   *   { namespace: ['production'] },
   *   { properties: { owner: 'data-team', env: 'prod' } }
   * )
   * ```
   *
   * @example Cleanup operations
   * ```js
   * const catalog = supabase.storage.analytics.from('analytics-data')
   *
   * // Drop table with purge option (removes all data)
   * const { error: dropError } = await catalog.dropTable(
   *   { namespace: ['default'], name: 'events' },
   *   { purge: true }
   * )
   *
   * if (dropError?.isNotFound()) {
   *   console.log('Table does not exist')
   * }
   *
   * // Drop namespace (must be empty)
   * await catalog.dropNamespace({ namespace: ['default'] })
   * ```
   *
   * @remarks
   * This method provides a bridge between Supabase's bucket management and the standard
   * Apache Iceberg REST Catalog API. The bucket name maps to the Iceberg warehouse parameter.
   * All authentication and configuration is handled automatically using your Supabase credentials.
   *
   * **Error Handling**: Invalid bucket names throw immediately. All catalog
   * operations return `{ data, error }` where errors are `IcebergError` instances from iceberg-js.
   * Use helper methods like `error.isNotFound()` or check `error.status` for specific error handling.
   * Use `.throwOnError()` on the analytics client if you prefer exceptions for catalog operations.
   *
   * **Cleanup Operations**: When using `dropTable`, the `purge: true` option permanently
   * deletes all table data. Without it, the table is marked as deleted but data remains.
   *
   * **Library Dependency**: The returned catalog wraps `IcebergRestCatalog` from iceberg-js.
   * For complete API documentation and advanced usage, refer to the
   * [iceberg-js documentation](https://supabase.github.io/iceberg-js/).
   */
  from(e) {
    if (!Xs(e))
      throw new Ee("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
    const t = new fn({
      baseUrl: this.url,
      catalogName: e,
      // Maps to the warehouse parameter in Supabase's implementation
      auth: {
        type: "custom",
        getHeaders: () => y(this, void 0, void 0, function* () {
          return this.headers;
        })
      },
      fetch: this.fetch
    }), r = this.shouldThrowOnError;
    return new Proxy(t, {
      get(i, o) {
        const a = i[o];
        return typeof a != "function" ? a : (...l) => y(this, void 0, void 0, function* () {
          try {
            return { data: yield a.apply(i, l), error: null };
          } catch (u) {
            if (r)
              throw u;
            return { data: null, error: u };
          }
        });
      }
    });
  }
}
const Tt = {
  "X-Client-Info": `storage-js/${zr}`,
  "Content-Type": "application/json"
};
class kt extends Error {
  constructor(e) {
    super(e), this.__isStorageVectorsError = !0, this.name = "StorageVectorsError";
  }
}
function U(s) {
  return typeof s == "object" && s !== null && "__isStorageVectorsError" in s;
}
class xe extends kt {
  constructor(e, t, r) {
    super(e), this.name = "StorageVectorsApiError", this.status = t, this.statusCode = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
}
class Xr extends kt {
  constructor(e, t) {
    super(e), this.name = "StorageVectorsUnknownError", this.originalError = t;
  }
}
var pt;
(function(s) {
  s.InternalError = "InternalError", s.S3VectorConflictException = "S3VectorConflictException", s.S3VectorNotFoundException = "S3VectorNotFoundException", s.S3VectorBucketNotEmpty = "S3VectorBucketNotEmpty", s.S3VectorMaxBucketsExceeded = "S3VectorMaxBucketsExceeded", s.S3VectorMaxIndexesExceeded = "S3VectorMaxIndexesExceeded";
})(pt || (pt = {}));
const Je = (s) => s ? (...e) => s(...e) : (...e) => fetch(...e), gn = () => Response, Zr = (s) => {
  if (typeof s != "object" || s === null)
    return !1;
  const e = Object.getPrototypeOf(s);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in s) && !(Symbol.iterator in s);
}, pn = (s) => Array.from(new Float32Array(s)), _n = (s, e) => {
  if (e !== void 0 && s.float32.length !== e)
    throw new Error(`Vector dimension mismatch: expected ${e}, got ${s.float32.length}`);
}, qt = (s) => s.msg || s.message || s.error_description || s.error || JSON.stringify(s), vn = (s, e, t) => y(void 0, void 0, void 0, function* () {
  if (s && typeof s == "object" && "status" in s && "ok" in s && typeof s.status == "number" && !t?.noResolveJson) {
    const n = s.status || 500, i = s;
    if (typeof i.json == "function")
      i.json().then((o) => {
        const a = o?.statusCode || o?.code || n + "";
        e(new xe(qt(o), n, a));
      }).catch(() => {
        const o = n + "", a = i.statusText || `HTTP ${n} error`;
        e(new xe(a, n, o));
      });
    else {
      const o = n + "", a = i.statusText || `HTTP ${n} error`;
      e(new xe(a, n, o));
    }
  } else
    e(new Xr(qt(s), s));
}), wn = (s, e, t, r) => {
  const n = { method: s, headers: e?.headers || {} };
  return r ? (Zr(r) ? (n.headers = Object.assign({ "Content-Type": "application/json" }, e?.headers), n.body = JSON.stringify(r)) : n.body = r, Object.assign(Object.assign({}, n), t)) : n;
};
function yn(s, e, t, r, n, i) {
  return y(this, void 0, void 0, function* () {
    return new Promise((o, a) => {
      s(t, wn(e, r, n, i)).then((l) => {
        if (!l.ok)
          throw l;
        if (r?.noResolveJson)
          return l;
        const u = l.headers.get("content-type");
        return !u || !u.includes("application/json") ? {} : l.json();
      }).then((l) => o(l)).catch((l) => vn(l, a, r));
    });
  });
}
function N(s, e, t, r, n) {
  return y(this, void 0, void 0, function* () {
    return yn(s, "POST", e, r, n, t);
  });
}
class es {
  /** Creates a new VectorIndexApi instance */
  constructor(e, t = {}, r) {
    this.shouldThrowOnError = !1, this.url = e.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, Tt), t), this.fetch = Je(r);
  }
  /** Enable throwing errors instead of returning them in the response */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /** Creates a new vector index within a bucket */
  createIndex(e) {
    return y(this, void 0, void 0, function* () {
      try {
        return { data: (yield N(this.fetch, `${this.url}/CreateIndex`, e, {
          headers: this.headers
        })) || {}, error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (U(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /** Retrieves metadata for a specific vector index */
  getIndex(e, t) {
    return y(this, void 0, void 0, function* () {
      try {
        return { data: yield N(this.fetch, `${this.url}/GetIndex`, { vectorBucketName: e, indexName: t }, { headers: this.headers }), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (U(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /** Lists vector indexes within a bucket with optional filtering and pagination */
  listIndexes(e) {
    return y(this, void 0, void 0, function* () {
      try {
        return { data: yield N(this.fetch, `${this.url}/ListIndexes`, e, {
          headers: this.headers
        }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (U(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /** Deletes a vector index and all its data */
  deleteIndex(e, t) {
    return y(this, void 0, void 0, function* () {
      try {
        return { data: (yield N(this.fetch, `${this.url}/DeleteIndex`, { vectorBucketName: e, indexName: t }, { headers: this.headers })) || {}, error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (U(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
}
class ts {
  /** Creates a new VectorDataApi instance */
  constructor(e, t = {}, r) {
    this.shouldThrowOnError = !1, this.url = e.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, Tt), t), this.fetch = Je(r);
  }
  /** Enable throwing errors instead of returning them in the response */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /** Inserts or updates vectors in batch (1-500 per request) */
  putVectors(e) {
    return y(this, void 0, void 0, function* () {
      try {
        if (e.vectors.length < 1 || e.vectors.length > 500)
          throw new Error("Vector batch size must be between 1 and 500 items");
        return { data: (yield N(this.fetch, `${this.url}/PutVectors`, e, {
          headers: this.headers
        })) || {}, error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (U(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /** Retrieves vectors by their keys in batch */
  getVectors(e) {
    return y(this, void 0, void 0, function* () {
      try {
        return { data: yield N(this.fetch, `${this.url}/GetVectors`, e, {
          headers: this.headers
        }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (U(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /** Lists vectors in an index with pagination */
  listVectors(e) {
    return y(this, void 0, void 0, function* () {
      try {
        if (e.segmentCount !== void 0) {
          if (e.segmentCount < 1 || e.segmentCount > 16)
            throw new Error("segmentCount must be between 1 and 16");
          if (e.segmentIndex !== void 0 && (e.segmentIndex < 0 || e.segmentIndex >= e.segmentCount))
            throw new Error(`segmentIndex must be between 0 and ${e.segmentCount - 1}`);
        }
        return { data: yield N(this.fetch, `${this.url}/ListVectors`, e, {
          headers: this.headers
        }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (U(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /** Queries for similar vectors using approximate nearest neighbor search */
  queryVectors(e) {
    return y(this, void 0, void 0, function* () {
      try {
        return { data: yield N(this.fetch, `${this.url}/QueryVectors`, e, {
          headers: this.headers
        }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (U(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /** Deletes vectors by their keys in batch (1-500 per request) */
  deleteVectors(e) {
    return y(this, void 0, void 0, function* () {
      try {
        if (e.keys.length < 1 || e.keys.length > 500)
          throw new Error("Keys batch size must be between 1 and 500 items");
        return { data: (yield N(this.fetch, `${this.url}/DeleteVectors`, e, {
          headers: this.headers
        })) || {}, error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (U(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
}
class rs {
  /** Creates a new VectorBucketApi instance */
  constructor(e, t = {}, r) {
    this.shouldThrowOnError = !1, this.url = e.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, Tt), t), this.fetch = Je(r);
  }
  /** Enable throwing errors instead of returning them in the response */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /** Creates a new vector bucket */
  createBucket(e) {
    return y(this, void 0, void 0, function* () {
      try {
        return { data: (yield N(this.fetch, `${this.url}/CreateVectorBucket`, { vectorBucketName: e }, { headers: this.headers })) || {}, error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (U(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /** Retrieves metadata for a specific vector bucket */
  getBucket(e) {
    return y(this, void 0, void 0, function* () {
      try {
        return { data: yield N(this.fetch, `${this.url}/GetVectorBucket`, { vectorBucketName: e }, { headers: this.headers }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (U(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /** Lists vector buckets with optional filtering and pagination */
  listBuckets() {
    return y(this, arguments, void 0, function* (e = {}) {
      try {
        return { data: yield N(this.fetch, `${this.url}/ListVectorBuckets`, e, {
          headers: this.headers
        }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (U(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /** Deletes a vector bucket (must be empty first) */
  deleteBucket(e) {
    return y(this, void 0, void 0, function* () {
      try {
        return { data: (yield N(this.fetch, `${this.url}/DeleteVectorBucket`, { vectorBucketName: e }, { headers: this.headers })) || {}, error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (U(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
}
class ss extends rs {
  /**
   * @alpha
   *
   * Creates a StorageVectorsClient that can manage buckets, indexes, and vectors.
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param url - Base URL of the Storage Vectors REST API.
   * @param options.headers - Optional headers (for example `Authorization`) applied to every request.
   * @param options.fetch - Optional custom `fetch` implementation for non-browser runtimes.
   *
   * @example
   * ```typescript
   * const client = new StorageVectorsClient(url, options)
   * ```
   */
  constructor(e, t = {}) {
    super(e, t.headers || {}, t.fetch);
  }
  /**
   *
   * @alpha
   *
   * Access operations for a specific vector bucket
   * Returns a scoped client for index and vector operations within the bucket
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param vectorBucketName - Name of the vector bucket
   * @returns Bucket-scoped client with index and vector operations
   *
   * @example
   * ```typescript
   * const bucket = supabase.storage.vectors.from('embeddings-prod')
   * ```
   */
  from(e) {
    return new ns(this.url, this.headers, e, this.fetch);
  }
  /**
   *
   * @alpha
   *
   * Creates a new vector bucket
   * Vector buckets are containers for vector indexes and their data
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param vectorBucketName - Unique name for the vector bucket
   * @returns Promise with empty response on success or error
   *
   * @example
   * ```typescript
   * const { data, error } = await supabase
   *   .storage
   *   .vectors
   *   .createBucket('embeddings-prod')
   * ```
   */
  createBucket(e) {
    const t = Object.create(null, {
      createBucket: { get: () => super.createBucket }
    });
    return y(this, void 0, void 0, function* () {
      return t.createBucket.call(this, e);
    });
  }
  /**
   *
   * @alpha
   *
   * Retrieves metadata for a specific vector bucket
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param vectorBucketName - Name of the vector bucket
   * @returns Promise with bucket metadata or error
   *
   * @example
   * ```typescript
   * const { data, error } = await supabase
   *   .storage
   *   .vectors
   *   .getBucket('embeddings-prod')
   *
   * console.log('Bucket created:', data?.vectorBucket.creationTime)
   * ```
   */
  getBucket(e) {
    const t = Object.create(null, {
      getBucket: { get: () => super.getBucket }
    });
    return y(this, void 0, void 0, function* () {
      return t.getBucket.call(this, e);
    });
  }
  /**
   *
   * @alpha
   *
   * Lists all vector buckets with optional filtering and pagination
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param options - Optional filters (prefix, maxResults, nextToken)
   * @returns Promise with list of buckets or error
   *
   * @example
   * ```typescript
   * const { data, error } = await supabase
   *   .storage
   *   .vectors
   *   .listBuckets({ prefix: 'embeddings-' })
   *
   * data?.vectorBuckets.forEach(bucket => {
   *   console.log(bucket.vectorBucketName)
   * })
   * ```
   */
  listBuckets() {
    const e = Object.create(null, {
      listBuckets: { get: () => super.listBuckets }
    });
    return y(this, arguments, void 0, function* (t = {}) {
      return e.listBuckets.call(this, t);
    });
  }
  /**
   *
   * @alpha
   *
   * Deletes a vector bucket (bucket must be empty)
   * All indexes must be deleted before deleting the bucket
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param vectorBucketName - Name of the vector bucket to delete
   * @returns Promise with empty response on success or error
   *
   * @example
   * ```typescript
   * const { data, error } = await supabase
   *   .storage
   *   .vectors
   *   .deleteBucket('embeddings-old')
   * ```
   */
  deleteBucket(e) {
    const t = Object.create(null, {
      deleteBucket: { get: () => super.deleteBucket }
    });
    return y(this, void 0, void 0, function* () {
      return t.deleteBucket.call(this, e);
    });
  }
}
class ns extends es {
  /**
   * @alpha
   *
   * Creates a helper that automatically scopes all index operations to the provided bucket.
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @example
   * ```typescript
   * const bucket = supabase.storage.vectors.from('embeddings-prod')
   * ```
   */
  constructor(e, t, r, n) {
    super(e, t, n), this.vectorBucketName = r;
  }
  /**
   *
   * @alpha
   *
   * Creates a new vector index in this bucket
   * Convenience method that automatically includes the bucket name
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param options - Index configuration (vectorBucketName is automatically set)
   * @returns Promise with empty response on success or error
   *
   * @example
   * ```typescript
   * const bucket = supabase.storage.vectors.from('embeddings-prod')
   * await bucket.createIndex({
   *   indexName: 'documents-openai',
   *   dataType: 'float32',
   *   dimension: 1536,
   *   distanceMetric: 'cosine',
   *   metadataConfiguration: {
   *     nonFilterableMetadataKeys: ['raw_text']
   *   }
   * })
   * ```
   */
  createIndex(e) {
    const t = Object.create(null, {
      createIndex: { get: () => super.createIndex }
    });
    return y(this, void 0, void 0, function* () {
      return t.createIndex.call(this, Object.assign(Object.assign({}, e), { vectorBucketName: this.vectorBucketName }));
    });
  }
  /**
   *
   * @alpha
   *
   * Lists indexes in this bucket
   * Convenience method that automatically includes the bucket name
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param options - Listing options (vectorBucketName is automatically set)
   * @returns Promise with response containing indexes array and pagination token or error
   *
   * @example
   * ```typescript
   * const bucket = supabase.storage.vectors.from('embeddings-prod')
   * const { data } = await bucket.listIndexes({ prefix: 'documents-' })
   * ```
   */
  listIndexes() {
    const e = Object.create(null, {
      listIndexes: { get: () => super.listIndexes }
    });
    return y(this, arguments, void 0, function* (t = {}) {
      return e.listIndexes.call(this, Object.assign(Object.assign({}, t), { vectorBucketName: this.vectorBucketName }));
    });
  }
  /**
   *
   * @alpha
   *
   * Retrieves metadata for a specific index in this bucket
   * Convenience method that automatically includes the bucket name
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param indexName - Name of the index to retrieve
   * @returns Promise with index metadata or error
   *
   * @example
   * ```typescript
   * const bucket = supabase.storage.vectors.from('embeddings-prod')
   * const { data } = await bucket.getIndex('documents-openai')
   * console.log('Dimension:', data?.index.dimension)
   * ```
   */
  getIndex(e) {
    const t = Object.create(null, {
      getIndex: { get: () => super.getIndex }
    });
    return y(this, void 0, void 0, function* () {
      return t.getIndex.call(this, this.vectorBucketName, e);
    });
  }
  /**
   *
   * @alpha
   *
   * Deletes an index from this bucket
   * Convenience method that automatically includes the bucket name
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param indexName - Name of the index to delete
   * @returns Promise with empty response on success or error
   *
   * @example
   * ```typescript
   * const bucket = supabase.storage.vectors.from('embeddings-prod')
   * await bucket.deleteIndex('old-index')
   * ```
   */
  deleteIndex(e) {
    const t = Object.create(null, {
      deleteIndex: { get: () => super.deleteIndex }
    });
    return y(this, void 0, void 0, function* () {
      return t.deleteIndex.call(this, this.vectorBucketName, e);
    });
  }
  /**
   *
   * @alpha
   *
   * Access operations for a specific index within this bucket
   * Returns a scoped client for vector data operations
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param indexName - Name of the index
   * @returns Index-scoped client with vector data operations
   *
   * @example
   * ```typescript
   * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
   *
   * // Insert vectors
   * await index.putVectors({
   *   vectors: [
   *     { key: 'doc-1', data: { float32: [...] }, metadata: { title: 'Intro' } }
   *   ]
   * })
   *
   * // Query similar vectors
   * const { data } = await index.queryVectors({
   *   queryVector: { float32: [...] },
   *   topK: 5
   * })
   * ```
   */
  index(e) {
    return new is(this.url, this.headers, this.vectorBucketName, e, this.fetch);
  }
}
class is extends ts {
  /**
   *
   * @alpha
   *
   * Creates a helper that automatically scopes all vector operations to the provided bucket/index names.
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @example
   * ```typescript
   * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
   * ```
   */
  constructor(e, t, r, n, i) {
    super(e, t, i), this.vectorBucketName = r, this.indexName = n;
  }
  /**
   *
   * @alpha
   *
   * Inserts or updates vectors in this index
   * Convenience method that automatically includes bucket and index names
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param options - Vector insertion options (bucket and index names automatically set)
   * @returns Promise with empty response on success or error
   *
   * @example
   * ```typescript
   * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
   * await index.putVectors({
   *   vectors: [
   *     {
   *       key: 'doc-1',
   *       data: { float32: [0.1, 0.2, ...] },
   *       metadata: { title: 'Introduction', page: 1 }
   *     }
   *   ]
   * })
   * ```
   */
  putVectors(e) {
    const t = Object.create(null, {
      putVectors: { get: () => super.putVectors }
    });
    return y(this, void 0, void 0, function* () {
      return t.putVectors.call(this, Object.assign(Object.assign({}, e), { vectorBucketName: this.vectorBucketName, indexName: this.indexName }));
    });
  }
  /**
   *
   * @alpha
   *
   * Retrieves vectors by keys from this index
   * Convenience method that automatically includes bucket and index names
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param options - Vector retrieval options (bucket and index names automatically set)
   * @returns Promise with response containing vectors array or error
   *
   * @example
   * ```typescript
   * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
   * const { data } = await index.getVectors({
   *   keys: ['doc-1', 'doc-2'],
   *   returnMetadata: true
   * })
   * ```
   */
  getVectors(e) {
    const t = Object.create(null, {
      getVectors: { get: () => super.getVectors }
    });
    return y(this, void 0, void 0, function* () {
      return t.getVectors.call(this, Object.assign(Object.assign({}, e), { vectorBucketName: this.vectorBucketName, indexName: this.indexName }));
    });
  }
  /**
   *
   * @alpha
   *
   * Lists vectors in this index with pagination
   * Convenience method that automatically includes bucket and index names
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param options - Listing options (bucket and index names automatically set)
   * @returns Promise with response containing vectors array and pagination token or error
   *
   * @example
   * ```typescript
   * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
   * const { data } = await index.listVectors({
   *   maxResults: 500,
   *   returnMetadata: true
   * })
   * ```
   */
  listVectors() {
    const e = Object.create(null, {
      listVectors: { get: () => super.listVectors }
    });
    return y(this, arguments, void 0, function* (t = {}) {
      return e.listVectors.call(this, Object.assign(Object.assign({}, t), { vectorBucketName: this.vectorBucketName, indexName: this.indexName }));
    });
  }
  /**
   *
   * @alpha
   *
   * Queries for similar vectors in this index
   * Convenience method that automatically includes bucket and index names
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param options - Query options (bucket and index names automatically set)
   * @returns Promise with response containing matches array of similar vectors ordered by distance or error
   *
   * @example
   * ```typescript
   * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
   * const { data } = await index.queryVectors({
   *   queryVector: { float32: [0.1, 0.2, ...] },
   *   topK: 5,
   *   filter: { category: 'technical' },
   *   returnDistance: true,
   *   returnMetadata: true
   * })
   * ```
   */
  queryVectors(e) {
    const t = Object.create(null, {
      queryVectors: { get: () => super.queryVectors }
    });
    return y(this, void 0, void 0, function* () {
      return t.queryVectors.call(this, Object.assign(Object.assign({}, e), { vectorBucketName: this.vectorBucketName, indexName: this.indexName }));
    });
  }
  /**
   *
   * @alpha
   *
   * Deletes vectors by keys from this index
   * Convenience method that automatically includes bucket and index names
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @param options - Deletion options (bucket and index names automatically set)
   * @returns Promise with empty response on success or error
   *
   * @example
   * ```typescript
   * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
   * await index.deleteVectors({
   *   keys: ['doc-1', 'doc-2', 'doc-3']
   * })
   * ```
   */
  deleteVectors(e) {
    const t = Object.create(null, {
      deleteVectors: { get: () => super.deleteVectors }
    });
    return y(this, void 0, void 0, function* () {
      return t.deleteVectors.call(this, Object.assign(Object.assign({}, e), { vectorBucketName: this.vectorBucketName, indexName: this.indexName }));
    });
  }
}
class bn extends an {
  /**
   * Creates a client for Storage buckets, files, analytics, and vectors.
   *
   * @category File Buckets
   * @example
   * ```ts
   * import { StorageClient } from '@supabase/storage-js'
   *
   * const storage = new StorageClient('https://xyzcompany.supabase.co/storage/v1', {
   *   apikey: 'public-anon-key',
   * })
   * const avatars = storage.from('avatars')
   * ```
   */
  constructor(e, t = {}, r, n) {
    super(e, t, r, n);
  }
  /**
   * Perform file operation in a bucket.
   *
   * @category File Buckets
   * @param id The bucket id to operate on.
   *
   * @example
   * ```typescript
   * const avatars = supabase.storage.from('avatars')
   * ```
   */
  from(e) {
    return new on(this.url, this.headers, e, this.fetch);
  }
  /**
   *
   * @alpha
   *
   * Access vector storage operations.
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Vector Buckets
   * @returns A StorageVectorsClient instance configured with the current storage settings.
   */
  get vectors() {
    return new ss(this.url + "/vector", {
      headers: this.headers,
      fetch: this.fetch
    });
  }
  /**
   *
   * @alpha
   *
   * Access analytics storage operations using Iceberg tables.
   *
   * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
   *
   * @category Analytics Buckets
   * @returns A StorageAnalyticsClient instance configured with the current storage settings.
   */
  get analytics() {
    return new Qr(this.url + "/iceberg", this.headers, this.fetch);
  }
}
const mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  StorageAnalyticsClient: Qr,
  StorageApiError: Gr,
  StorageClient: bn,
  StorageError: Ee,
  StorageUnknownError: qe,
  StorageVectorsApiError: xe,
  StorageVectorsClient: ss,
  StorageVectorsError: kt,
  get StorageVectorsErrorCode() {
    return pt;
  },
  StorageVectorsUnknownError: Xr,
  VectorBucketApi: rs,
  VectorBucketScope: ns,
  VectorDataApi: ts,
  VectorIndexApi: es,
  VectorIndexScope: is,
  isPlainObject: Zr,
  isStorageError: A,
  isStorageVectorsError: U,
  normalizeToFloat32: pn,
  resolveFetch: Je,
  resolveResponse: gn,
  validateVectorDimension: _n
}, Symbol.toStringTag, { value: "Module" })), En = /* @__PURE__ */ me(mn);
var Ze = {}, ge = {}, Ft;
function Sn() {
  return Ft || (Ft = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.version = void 0, ge.version = "2.87.1"), ge;
}
var Mt;
function On() {
  return Mt || (Mt = 1, (function(s) {
    Object.defineProperty(s, "__esModule", { value: !0 }), s.DEFAULT_REALTIME_OPTIONS = s.DEFAULT_AUTH_OPTIONS = s.DEFAULT_DB_OPTIONS = s.DEFAULT_GLOBAL_OPTIONS = s.DEFAULT_HEADERS = void 0;
    const e = /* @__PURE__ */ Sn();
    let t = "";
    typeof Deno < "u" ? t = "deno" : typeof document < "u" ? t = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? t = "react-native" : t = "node", s.DEFAULT_HEADERS = { "X-Client-Info": `supabase-js-${t}/${e.version}` }, s.DEFAULT_GLOBAL_OPTIONS = {
      headers: s.DEFAULT_HEADERS
    }, s.DEFAULT_DB_OPTIONS = {
      schema: "public"
    }, s.DEFAULT_AUTH_OPTIONS = {
      autoRefreshToken: !0,
      persistSession: !0,
      detectSessionInUrl: !0,
      flowType: "implicit"
    }, s.DEFAULT_REALTIME_OPTIONS = {};
  })(Ze)), Ze;
}
var et = {}, Wt;
function Tn() {
  return Wt || (Wt = 1, (function(s) {
    Object.defineProperty(s, "__esModule", { value: !0 }), s.fetchWithAuth = s.resolveHeadersConstructor = s.resolveFetch = void 0;
    const e = (n) => n ? (...i) => n(...i) : (...i) => fetch(...i);
    s.resolveFetch = e;
    const t = () => Headers;
    s.resolveHeadersConstructor = t;
    const r = (n, i, o) => {
      const a = (0, s.resolveFetch)(o), l = (0, s.resolveHeadersConstructor)();
      return async (u, c) => {
        var d;
        const f = (d = await i()) !== null && d !== void 0 ? d : n;
        let h = new l(c?.headers);
        return h.has("apikey") || h.set("apikey", n), h.has("Authorization") || h.set("Authorization", `Bearer ${f}`), a(u, Object.assign(Object.assign({}, c), { headers: h }));
      };
    };
    s.fetchWithAuth = r;
  })(et)), et;
}
var W = {}, Vt;
function kn() {
  if (Vt) return W;
  Vt = 1, Object.defineProperty(W, "__esModule", { value: !0 }), W.isBrowser = void 0, W.uuid = s, W.ensureTrailingSlash = e, W.applySettingDefaults = r, W.validateSupabaseUrl = n;
  function s() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(i) {
      var o = Math.random() * 16 | 0, a = i == "x" ? o : o & 3 | 8;
      return a.toString(16);
    });
  }
  function e(i) {
    return i.endsWith("/") ? i : i + "/";
  }
  const t = () => typeof window < "u";
  W.isBrowser = t;
  function r(i, o) {
    var a, l;
    const { db: u, auth: c, realtime: d, global: f } = i, { db: h, auth: g, realtime: _, global: p } = o, w = {
      db: Object.assign(Object.assign({}, h), u),
      auth: Object.assign(Object.assign({}, g), c),
      realtime: Object.assign(Object.assign({}, _), d),
      storage: {},
      global: Object.assign(Object.assign(Object.assign({}, p), f), { headers: Object.assign(Object.assign({}, (a = p?.headers) !== null && a !== void 0 ? a : {}), (l = f?.headers) !== null && l !== void 0 ? l : {}) }),
      accessToken: async () => ""
    };
    return i.accessToken ? w.accessToken = i.accessToken : delete w.accessToken, w;
  }
  function n(i) {
    const o = i?.trim();
    if (!o)
      throw new Error("supabaseUrl is required.");
    if (!o.match(/^https?:\/\//i))
      throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
    try {
      return new URL(e(o));
    } catch {
      throw Error("Invalid supabaseUrl: Provided URL is malformed.");
    }
  }
  return W;
}
var pe = {};
const os = "2.87.1", oe = 30 * 1e3, _t = 3, tt = _t * oe, An = "http://localhost:9999", Rn = "supabase.auth.token", jn = { "X-Client-Info": `gotrue-js/${os}` }, vt = "X-Supabase-Api-Version", as = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
}, Pn = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, Cn = 600 * 1e3;
let he = class extends Error {
  constructor(e, t, r) {
    super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = t, this.code = r;
  }
};
function m(s) {
  return typeof s == "object" && s !== null && "__isAuthError" in s;
}
let ls = class extends he {
  constructor(e, t, r) {
    super(e, t, r), this.name = "AuthApiError", this.status = t, this.code = r;
  }
};
function us(s) {
  return m(s) && s.name === "AuthApiError";
}
let H = class extends he {
  constructor(e, t) {
    super(e), this.name = "AuthUnknownError", this.originalError = t;
  }
}, V = class extends he {
  constructor(e, t, r, n) {
    super(e, r, n), this.name = t, this.status = r;
  }
}, x = class extends V {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
};
function cs(s) {
  return m(s) && s.name === "AuthSessionMissingError";
}
let Y = class extends V {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}, ve = class extends V {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, void 0);
  }
}, we = class extends V {
  constructor(e, t = null) {
    super(e, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = t;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
};
function hs(s) {
  return m(s) && s.name === "AuthImplicitGrantRedirectError";
}
let wt = class extends V {
  constructor(e, t = null) {
    super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = t;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}, Fe = class extends V {
  constructor(e, t) {
    super(e, "AuthRetryableFetchError", t, void 0);
  }
};
function Ue(s) {
  return m(s) && s.name === "AuthRetryableFetchError";
}
let yt = class extends V {
  constructor(e, t, r) {
    super(e, "AuthWeakPasswordError", t, "weak_password"), this.reasons = r;
  }
};
function In(s) {
  return m(s) && s.name === "AuthWeakPasswordError";
}
let Me = class extends V {
  constructor(e) {
    super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
};
const We = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), Kt = ` 	
\r=`.split(""), $n = (() => {
  const s = new Array(128);
  for (let e = 0; e < s.length; e += 1)
    s[e] = -1;
  for (let e = 0; e < Kt.length; e += 1)
    s[Kt[e].charCodeAt(0)] = -2;
  for (let e = 0; e < We.length; e += 1)
    s[We[e].charCodeAt(0)] = e;
  return s;
})();
function Ht(s, e, t) {
  if (s !== null)
    for (e.queue = e.queue << 8 | s, e.queuedBits += 8; e.queuedBits >= 6; ) {
      const r = e.queue >> e.queuedBits - 6 & 63;
      t(We[r]), e.queuedBits -= 6;
    }
  else if (e.queuedBits > 0)
    for (e.queue = e.queue << 6 - e.queuedBits, e.queuedBits = 6; e.queuedBits >= 6; ) {
      const r = e.queue >> e.queuedBits - 6 & 63;
      t(We[r]), e.queuedBits -= 6;
    }
}
function ds(s, e, t) {
  const r = $n[s];
  if (r > -1)
    for (e.queue = e.queue << 6 | r, e.queuedBits += 6; e.queuedBits >= 8; )
      t(e.queue >> e.queuedBits - 8 & 255), e.queuedBits -= 8;
  else {
    if (r === -2)
      return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(s)}"`);
  }
}
function Gt(s) {
  const e = [], t = (o) => {
    e.push(String.fromCodePoint(o));
  }, r = {
    utf8seq: 0,
    codepoint: 0
  }, n = { queue: 0, queuedBits: 0 }, i = (o) => {
    Nn(o, r, t);
  };
  for (let o = 0; o < s.length; o += 1)
    ds(s.charCodeAt(o), n, i);
  return e.join("");
}
function xn(s, e) {
  if (s <= 127) {
    e(s);
    return;
  } else if (s <= 2047) {
    e(192 | s >> 6), e(128 | s & 63);
    return;
  } else if (s <= 65535) {
    e(224 | s >> 12), e(128 | s >> 6 & 63), e(128 | s & 63);
    return;
  } else if (s <= 1114111) {
    e(240 | s >> 18), e(128 | s >> 12 & 63), e(128 | s >> 6 & 63), e(128 | s & 63);
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${s.toString(16)}`);
}
function Un(s, e) {
  for (let t = 0; t < s.length; t += 1) {
    let r = s.charCodeAt(t);
    if (r > 55295 && r <= 56319) {
      const n = (r - 55296) * 1024 & 65535;
      r = (s.charCodeAt(t + 1) - 56320 & 65535 | n) + 65536, t += 1;
    }
    xn(r, e);
  }
}
function Nn(s, e, t) {
  if (e.utf8seq === 0) {
    if (s <= 127) {
      t(s);
      return;
    }
    for (let r = 1; r < 6; r += 1)
      if ((s >> 7 - r & 1) === 0) {
        e.utf8seq = r;
        break;
      }
    if (e.utf8seq === 2)
      e.codepoint = s & 31;
    else if (e.utf8seq === 3)
      e.codepoint = s & 15;
    else if (e.utf8seq === 4)
      e.codepoint = s & 7;
    else
      throw new Error("Invalid UTF-8 sequence");
    e.utf8seq -= 1;
  } else if (e.utf8seq > 0) {
    if (s <= 127)
      throw new Error("Invalid UTF-8 sequence");
    e.codepoint = e.codepoint << 6 | s & 63, e.utf8seq -= 1, e.utf8seq === 0 && t(e.codepoint);
  }
}
function ue(s) {
  const e = [], t = { queue: 0, queuedBits: 0 }, r = (n) => {
    e.push(n);
  };
  for (let n = 0; n < s.length; n += 1)
    ds(s.charCodeAt(n), t, r);
  return new Uint8Array(e);
}
function Dn(s) {
  const e = [];
  return Un(s, (t) => e.push(t)), new Uint8Array(e);
}
function te(s) {
  const e = [], t = { queue: 0, queuedBits: 0 }, r = (n) => {
    e.push(n);
  };
  return s.forEach((n) => Ht(n, t, r)), Ht(null, t, r), e.join("");
}
function Ln(s) {
  return Math.round(Date.now() / 1e3) + s;
}
function Bn() {
  return Symbol("auth-callback");
}
const I = () => typeof window < "u" && typeof document < "u", J = {
  tested: !1,
  writable: !1
}, fs = () => {
  if (!I())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (J.tested)
    return J.writable;
  const s = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(s, s), globalThis.localStorage.removeItem(s), J.tested = !0, J.writable = !0;
  } catch {
    J.tested = !0, J.writable = !1;
  }
  return J.writable;
};
function qn(s) {
  const e = {}, t = new URL(s);
  if (t.hash && t.hash[0] === "#")
    try {
      new URLSearchParams(t.hash.substring(1)).forEach((n, i) => {
        e[i] = n;
      });
    } catch {
    }
  return t.searchParams.forEach((r, n) => {
    e[n] = r;
  }), e;
}
const gs = (s) => s ? (...e) => s(...e) : (...e) => fetch(...e), Fn = (s) => typeof s == "object" && s !== null && "status" in s && "ok" in s && "json" in s && typeof s.json == "function", ae = async (s, e, t) => {
  await s.setItem(e, JSON.stringify(t));
}, z = async (s, e) => {
  const t = await s.getItem(e);
  if (!t)
    return null;
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}, C = async (s, e) => {
  await s.removeItem(e);
};
class ze {
  constructor() {
    this.promise = new ze.promiseConstructor((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
}
ze.promiseConstructor = Promise;
function rt(s) {
  const e = s.split(".");
  if (e.length !== 3)
    throw new Me("Invalid JWT structure");
  for (let r = 0; r < e.length; r++)
    if (!Pn.test(e[r]))
      throw new Me("JWT not in base64url format");
  return {
    // using base64url lib
    header: JSON.parse(Gt(e[0])),
    payload: JSON.parse(Gt(e[1])),
    signature: ue(e[2]),
    raw: {
      header: e[0],
      payload: e[1]
    }
  };
}
async function Mn(s) {
  return await new Promise((e) => {
    setTimeout(() => e(null), s);
  });
}
function Wn(s, e) {
  return new Promise((r, n) => {
    (async () => {
      for (let i = 0; i < 1 / 0; i++)
        try {
          const o = await s(i);
          if (!e(i, null, o)) {
            r(o);
            return;
          }
        } catch (o) {
          if (!e(i, o)) {
            n(o);
            return;
          }
        }
    })();
  });
}
function Vn(s) {
  return ("0" + s.toString(16)).substr(-2);
}
function Kn() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", r = t.length;
    let n = "";
    for (let i = 0; i < 56; i++)
      n += t.charAt(Math.floor(Math.random() * r));
    return n;
  }
  return crypto.getRandomValues(e), Array.from(e, Vn).join("");
}
async function Hn(s) {
  const t = new TextEncoder().encode(s), r = await crypto.subtle.digest("SHA-256", t), n = new Uint8Array(r);
  return Array.from(n).map((i) => String.fromCharCode(i)).join("");
}
async function Gn(s) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), s;
  const t = await Hn(s);
  return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function se(s, e, t = !1) {
  const r = Kn();
  let n = r;
  t && (n += "/PASSWORD_RECOVERY"), await ae(s, `${e}-code-verifier`, n);
  const i = await Gn(r);
  return [i, r === i ? "plain" : "s256"];
}
const Jn = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function zn(s) {
  const e = s.headers.get(vt);
  if (!e || !e.match(Jn))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function Yn(s) {
  if (!s)
    throw new Error("Missing exp claim");
  const e = Math.floor(Date.now() / 1e3);
  if (s <= e)
    throw new Error("JWT has expired");
}
function Qn(s) {
  switch (s) {
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: { name: "SHA-256" }
      };
    case "ES256":
      return {
        name: "ECDSA",
        namedCurve: "P-256",
        hash: { name: "SHA-256" }
      };
    default:
      throw new Error("Invalid alg claim");
  }
}
const Xn = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function ne(s) {
  if (!Xn.test(s))
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function st() {
  const s = {};
  return new Proxy(s, {
    get: (e, t) => {
      if (t === "__isUserNotAvailableProxy")
        return !0;
      if (typeof t == "symbol") {
        const r = t.toString();
        if (r === "Symbol(Symbol.toPrimitive)" || r === "Symbol(Symbol.toStringTag)" || r === "Symbol(util.inspect.custom)")
          return;
      }
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`);
    },
    set: (e, t) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    },
    deleteProperty: (e, t) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    }
  });
}
function Zn(s, e) {
  return new Proxy(s, {
    get: (t, r, n) => {
      if (r === "__isInsecureUserWarningProxy")
        return !0;
      if (typeof r == "symbol") {
        const i = r.toString();
        if (i === "Symbol(Symbol.toPrimitive)" || i === "Symbol(Symbol.toStringTag)" || i === "Symbol(util.inspect.custom)" || i === "Symbol(nodejs.util.inspect.custom)")
          return Reflect.get(t, r, n);
      }
      return !e.value && typeof r == "string" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), e.value = !0), Reflect.get(t, r, n);
    }
  });
}
function Jt(s) {
  return JSON.parse(JSON.stringify(s));
}
const Q = (s) => s.msg || s.message || s.error_description || s.error || JSON.stringify(s), ei = [502, 503, 504];
async function zt(s) {
  var e;
  if (!Fn(s))
    throw new Fe(Q(s), 0);
  if (ei.includes(s.status))
    throw new Fe(Q(s), s.status);
  let t;
  try {
    t = await s.json();
  } catch (i) {
    throw new H(Q(i), i);
  }
  let r;
  const n = zn(s);
  if (n && n.getTime() >= as["2024-01-01"].timestamp && typeof t == "object" && t && typeof t.code == "string" ? r = t.code : typeof t == "object" && t && typeof t.error_code == "string" && (r = t.error_code), r) {
    if (r === "weak_password")
      throw new yt(Q(t), s.status, ((e = t.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
    if (r === "session_not_found")
      throw new x();
  } else if (typeof t == "object" && t && typeof t.weak_password == "object" && t.weak_password && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.reasons.reduce((i, o) => i && typeof o == "string", !0))
    throw new yt(Q(t), s.status, t.weak_password.reasons);
  throw new ls(Q(t), s.status || 500, r);
}
const ti = (s, e, t, r) => {
  const n = { method: s, headers: e?.headers || {} };
  return s === "GET" ? n : (n.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, e?.headers), n.body = JSON.stringify(r), Object.assign(Object.assign({}, n), t));
};
async function E(s, e, t, r) {
  var n;
  const i = Object.assign({}, r?.headers);
  i[vt] || (i[vt] = as["2024-01-01"].name), r?.jwt && (i.Authorization = `Bearer ${r.jwt}`);
  const o = (n = r?.query) !== null && n !== void 0 ? n : {};
  r?.redirectTo && (o.redirect_to = r.redirectTo);
  const a = Object.keys(o).length ? "?" + new URLSearchParams(o).toString() : "", l = await ri(s, e, t + a, {
    headers: i,
    noResolveJson: r?.noResolveJson
  }, {}, r?.body);
  return r?.xform ? r?.xform(l) : { data: Object.assign({}, l), error: null };
}
async function ri(s, e, t, r, n, i) {
  const o = ti(e, r, n, i);
  let a;
  try {
    a = await s(t, Object.assign({}, o));
  } catch (l) {
    throw console.error(l), new Fe(Q(l), 0);
  }
  if (a.ok || await zt(a), r?.noResolveJson)
    return a;
  try {
    return await a.json();
  } catch (l) {
    await zt(l);
  }
}
function D(s) {
  var e;
  let t = null;
  ii(s) && (t = Object.assign({}, s), s.expires_at || (t.expires_at = Ln(s.expires_in)));
  const r = (e = s.user) !== null && e !== void 0 ? e : s;
  return { data: { session: t, user: r }, error: null };
}
function Yt(s) {
  const e = D(s);
  return !e.error && s.weak_password && typeof s.weak_password == "object" && Array.isArray(s.weak_password.reasons) && s.weak_password.reasons.length && s.weak_password.message && typeof s.weak_password.message == "string" && s.weak_password.reasons.reduce((t, r) => t && typeof r == "string", !0) && (e.data.weak_password = s.weak_password), e;
}
function G(s) {
  var e;
  return { data: { user: (e = s.user) !== null && e !== void 0 ? e : s }, error: null };
}
function si(s) {
  return { data: s, error: null };
}
function ni(s) {
  const { action_link: e, email_otp: t, hashed_token: r, redirect_to: n, verification_type: i } = s, o = de(s, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), a = {
    action_link: e,
    email_otp: t,
    hashed_token: r,
    redirect_to: n,
    verification_type: i
  }, l = Object.assign({}, o);
  return {
    data: {
      properties: a,
      user: l
    },
    error: null
  };
}
function Qt(s) {
  return s;
}
function ii(s) {
  return s.access_token && s.refresh_token && s.expires_in;
}
const Ne = ["global", "local", "others"];
let At = class {
  /**
   * Creates an admin API client that can be used to manage users and OAuth clients.
   *
   * @example
   * ```ts
   * import { GoTrueAdminApi } from '@supabase/auth-js'
   *
   * const admin = new GoTrueAdminApi({
   *   url: 'https://xyzcompany.supabase.co/auth/v1',
   *   headers: { Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}` },
   * })
   * ```
   */
  constructor({ url: e = "", headers: t = {}, fetch: r }) {
    this.url = e, this.headers = t, this.fetch = gs(r), this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    }, this.oauth = {
      listClients: this._listOAuthClients.bind(this),
      createClient: this._createOAuthClient.bind(this),
      getClient: this._getOAuthClient.bind(this),
      updateClient: this._updateOAuthClient.bind(this),
      deleteClient: this._deleteOAuthClient.bind(this),
      regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   */
  async signOut(e, t = Ne[0]) {
    if (Ne.indexOf(t) < 0)
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Ne.join(", ")}`);
    try {
      return await E(this.fetch, "POST", `${this.url}/logout?scope=${t}`, {
        headers: this.headers,
        jwt: e,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (r) {
      if (m(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   */
  async inviteUserByEmail(e, t = {}) {
    try {
      return await E(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: e, data: t.data },
        headers: this.headers,
        redirectTo: t.redirectTo,
        xform: G
      });
    } catch (r) {
      if (m(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param email The user's email.
   * @param options.password User password. For signup only.
   * @param options.data Optional user metadata. For signup only.
   * @param options.redirectTo The redirect url which should be appended to the generated link
   */
  async generateLink(e) {
    try {
      const { options: t } = e, r = de(e, ["options"]), n = Object.assign(Object.assign({}, r), t);
      return "newEmail" in r && (n.new_email = r?.newEmail, delete n.newEmail), await E(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: n,
        headers: this.headers,
        xform: ni,
        redirectTo: t?.redirectTo
      });
    } catch (t) {
      if (m(t))
        return {
          data: {
            properties: null,
            user: null
          },
          error: t
        };
      throw t;
    }
  }
  // User Admin API
  /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async createUser(e) {
    try {
      return await E(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: G
      });
    } catch (t) {
      if (m(t))
        return { data: { user: null }, error: t };
      throw t;
    }
  }
  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   */
  async listUsers(e) {
    var t, r, n, i, o, a, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 }, c = await E(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (r = (t = e?.page) === null || t === void 0 ? void 0 : t.toString()) !== null && r !== void 0 ? r : "",
          per_page: (i = (n = e?.perPage) === null || n === void 0 ? void 0 : n.toString()) !== null && i !== void 0 ? i : ""
        },
        xform: Qt
      });
      if (c.error)
        throw c.error;
      const d = await c.json(), f = (o = c.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0, h = (l = (a = c.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
      return h.length > 0 && (h.forEach((g) => {
        const _ = parseInt(g.split(";")[0].split("=")[1].substring(0, 1)), p = JSON.parse(g.split(";")[1].split("=")[1]);
        u[`${p}Page`] = _;
      }), u.total = parseInt(f)), { data: Object.assign(Object.assign({}, d), u), error: null };
    } catch (u) {
      if (m(u))
        return { data: { users: [] }, error: u };
      throw u;
    }
  }
  /**
   * Get user by id.
   *
   * @param uid The user's unique identifier
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async getUserById(e) {
    ne(e);
    try {
      return await E(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: G
      });
    } catch (t) {
      if (m(t))
        return { data: { user: null }, error: t };
      throw t;
    }
  }
  /**
   * Updates the user data.
   *
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async updateUserById(e, t) {
    ne(e);
    try {
      return await E(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: t,
        headers: this.headers,
        xform: G
      });
    } catch (r) {
      if (m(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Delete a user. Requires a `service_role` key.
   *
   * @param id The user id you want to remove.
   * @param shouldSoftDelete If true, then the user will be soft-deleted from the auth schema. Soft deletion allows user identification from the hashed user ID but is not reversible.
   * Defaults to false for backward compatibility.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async deleteUser(e, t = !1) {
    ne(e);
    try {
      return await E(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: {
          should_soft_delete: t
        },
        xform: G
      });
    } catch (r) {
      if (m(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  async _listFactors(e) {
    ne(e.userId);
    try {
      const { data: t, error: r } = await E(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
        headers: this.headers,
        xform: (n) => ({ data: { factors: n }, error: null })
      });
      return { data: t, error: r };
    } catch (t) {
      if (m(t))
        return { data: null, error: t };
      throw t;
    }
  }
  async _deleteFactor(e) {
    ne(e.userId), ne(e.id);
    try {
      return { data: await E(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
        headers: this.headers
      }), error: null };
    } catch (t) {
      if (m(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Lists all OAuth clients with optional pagination.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _listOAuthClients(e) {
    var t, r, n, i, o, a, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 }, c = await E(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (r = (t = e?.page) === null || t === void 0 ? void 0 : t.toString()) !== null && r !== void 0 ? r : "",
          per_page: (i = (n = e?.perPage) === null || n === void 0 ? void 0 : n.toString()) !== null && i !== void 0 ? i : ""
        },
        xform: Qt
      });
      if (c.error)
        throw c.error;
      const d = await c.json(), f = (o = c.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0, h = (l = (a = c.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
      return h.length > 0 && (h.forEach((g) => {
        const _ = parseInt(g.split(";")[0].split("=")[1].substring(0, 1)), p = JSON.parse(g.split(";")[1].split("=")[1]);
        u[`${p}Page`] = _;
      }), u.total = parseInt(f)), { data: Object.assign(Object.assign({}, d), u), error: null };
    } catch (u) {
      if (m(u))
        return { data: { clients: [] }, error: u };
      throw u;
    }
  }
  /**
   * Creates a new OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _createOAuthClient(e) {
    try {
      return await E(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: e,
        headers: this.headers,
        xform: (t) => ({ data: t, error: null })
      });
    } catch (t) {
      if (m(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Gets details of a specific OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _getOAuthClient(e) {
    try {
      return await E(this.fetch, "GET", `${this.url}/admin/oauth/clients/${e}`, {
        headers: this.headers,
        xform: (t) => ({ data: t, error: null })
      });
    } catch (t) {
      if (m(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Updates an existing OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _updateOAuthClient(e, t) {
    try {
      return await E(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${e}`, {
        body: t,
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (m(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Deletes an OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _deleteOAuthClient(e) {
    try {
      return await E(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${e}`, {
        headers: this.headers,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (t) {
      if (m(t))
        return { data: null, error: t };
      throw t;
    }
  }
  /**
   * Regenerates the secret for an OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _regenerateOAuthClientSecret(e) {
    try {
      return await E(this.fetch, "POST", `${this.url}/admin/oauth/clients/${e}/regenerate_secret`, {
        headers: this.headers,
        xform: (t) => ({ data: t, error: null })
      });
    } catch (t) {
      if (m(t))
        return { data: null, error: t };
      throw t;
    }
  }
};
function Xt(s = {}) {
  return {
    getItem: (e) => s[e] || null,
    setItem: (e, t) => {
      s[e] = t;
    },
    removeItem: (e) => {
      delete s[e];
    }
  };
}
const X = {
  /**
   * @experimental
   */
  debug: !!(globalThis && fs() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class Rt extends Error {
  constructor(e) {
    super(e), this.isAcquireTimeout = !0;
  }
}
let ps = class extends Rt {
};
class oi extends Rt {
}
async function _s(s, e, t) {
  X.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", s, e);
  const r = new globalThis.AbortController();
  return e > 0 && setTimeout(() => {
    r.abort(), X.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", s);
  }, e), await Promise.resolve().then(() => globalThis.navigator.locks.request(s, e === 0 ? {
    mode: "exclusive",
    ifAvailable: !0
  } : {
    mode: "exclusive",
    signal: r.signal
  }, async (n) => {
    if (n) {
      X.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", s, n.name);
      try {
        return await t();
      } finally {
        X.debug && console.log("@supabase/gotrue-js: navigatorLock: released", s, n.name);
      }
    } else {
      if (e === 0)
        throw X.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", s), new ps(`Acquiring an exclusive Navigator LockManager lock "${s}" immediately failed`);
      if (X.debug)
        try {
          const i = await globalThis.navigator.locks.query();
          console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(i, null, "  "));
        } catch (i) {
          console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", i);
        }
      return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await t();
    }
  }));
}
const Zt = {};
async function ai(s, e, t) {
  var r;
  const n = (r = Zt[s]) !== null && r !== void 0 ? r : Promise.resolve(), i = Promise.race([
    n.catch(() => null),
    e >= 0 ? new Promise((o, a) => {
      setTimeout(() => {
        a(new oi(`Acquring process lock with name "${s}" timed out`));
      }, e);
    }) : null
  ].filter((o) => o)).catch((o) => {
    if (o && o.isAcquireTimeout)
      throw o;
    return null;
  }).then(async () => await t());
  return Zt[s] = i.catch(async (o) => {
    if (o && o.isAcquireTimeout)
      return await n, null;
    throw o;
  }), await i;
}
function li() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: !0
      }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
function vs(s) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(s))
    throw new Error(`@supabase/auth-js: Address "${s}" is invalid.`);
  return s.toLowerCase();
}
function ui(s) {
  return parseInt(s, 16);
}
function ci(s) {
  const e = new TextEncoder().encode(s);
  return "0x" + Array.from(e, (r) => r.toString(16).padStart(2, "0")).join("");
}
function hi(s) {
  var e;
  const { chainId: t, domain: r, expirationTime: n, issuedAt: i = /* @__PURE__ */ new Date(), nonce: o, notBefore: a, requestId: l, resources: u, scheme: c, uri: d, version: f } = s;
  {
    if (!Number.isInteger(t))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);
    if (!r)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');
    if (o && o.length < 8)
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${o}`);
    if (!d)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');
    if (f !== "1")
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${f}`);
    if (!((e = s.statement) === null || e === void 0) && e.includes(`
`))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${s.statement}`);
  }
  const h = vs(s.address), g = c ? `${c}://${r}` : r, _ = s.statement ? `${s.statement}
` : "", p = `${g} wants you to sign in with your Ethereum account:
${h}

${_}`;
  let w = `URI: ${d}
Version: ${f}
Chain ID: ${t}${o ? `
Nonce: ${o}` : ""}
Issued At: ${i.toISOString()}`;
  if (n && (w += `
Expiration Time: ${n.toISOString()}`), a && (w += `
Not Before: ${a.toISOString()}`), l && (w += `
Request ID: ${l}`), u) {
    let b = `
Resources:`;
    for (const v of u) {
      if (!v || typeof v != "string")
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${v}`);
      b += `
- ${v}`;
    }
    w += b;
  }
  return `${p}
${w}`;
}
class P extends Error {
  constructor({ message: e, code: t, cause: r, name: n }) {
    var i;
    super(e, { cause: r }), this.__isWebAuthnError = !0, this.name = (i = n ?? (r instanceof Error ? r.name : void 0)) !== null && i !== void 0 ? i : "Unknown Error", this.code = t;
  }
}
class Ve extends P {
  constructor(e, t) {
    super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: t,
      message: e
    }), this.name = "WebAuthnUnknownError", this.originalError = t;
  }
}
function di({ error: s, options: e }) {
  var t, r, n;
  const { publicKey: i } = e;
  if (!i)
    throw Error("options was missing required publicKey property");
  if (s.name === "AbortError") {
    if (e.signal instanceof AbortSignal)
      return new P({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: s
      });
  } else if (s.name === "ConstraintError") {
    if (((t = i.authenticatorSelection) === null || t === void 0 ? void 0 : t.requireResidentKey) === !0)
      return new P({
        message: "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: s
      });
    if (
      // @ts-ignore: `mediation` doesn't yet exist on CredentialCreationOptions but it's possible as of Sept 2024
      e.mediation === "conditional" && ((r = i.authenticatorSelection) === null || r === void 0 ? void 0 : r.userVerification) === "required"
    )
      return new P({
        message: "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: s
      });
    if (((n = i.authenticatorSelection) === null || n === void 0 ? void 0 : n.userVerification) === "required")
      return new P({
        message: "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: s
      });
  } else {
    if (s.name === "InvalidStateError")
      return new P({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: s
      });
    if (s.name === "NotAllowedError")
      return new P({
        message: s.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: s
      });
    if (s.name === "NotSupportedError")
      return i.pubKeyCredParams.filter((a) => a.type === "public-key").length === 0 ? new P({
        message: 'No entry in pubKeyCredParams was of type "public-key"',
        code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
        cause: s
      }) : new P({
        message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
        code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
        cause: s
      });
    if (s.name === "SecurityError") {
      const o = window.location.hostname;
      if (ws(o)) {
        if (i.rp.id !== o)
          return new P({
            message: `The RP ID "${i.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: s
          });
      } else return new P({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: s
      });
    } else if (s.name === "TypeError") {
      if (i.user.id.byteLength < 1 || i.user.id.byteLength > 64)
        return new P({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: s
        });
    } else if (s.name === "UnknownError")
      return new P({
        message: "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: s
      });
  }
  return new P({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: s
  });
}
function fi({ error: s, options: e }) {
  const { publicKey: t } = e;
  if (!t)
    throw Error("options was missing required publicKey property");
  if (s.name === "AbortError") {
    if (e.signal instanceof AbortSignal)
      return new P({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: s
      });
  } else {
    if (s.name === "NotAllowedError")
      return new P({
        message: s.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: s
      });
    if (s.name === "SecurityError") {
      const r = window.location.hostname;
      if (ws(r)) {
        if (t.rpId !== r)
          return new P({
            message: `The RP ID "${t.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: s
          });
      } else return new P({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: s
      });
    } else if (s.name === "UnknownError")
      return new P({
        message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: s
      });
  }
  return new P({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: s
  });
}
class gi {
  /**
   * Create an abort signal for a new WebAuthn operation.
   * Automatically cancels any existing operation.
   *
   * @returns {AbortSignal} Signal to pass to navigator.credentials.create() or .get()
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal MDN - AbortSignal}
   */
  createNewAbortSignal() {
    if (this.controller) {
      const t = new Error("Cancelling existing WebAuthn API call for new one");
      t.name = "AbortError", this.controller.abort(t);
    }
    const e = new AbortController();
    return this.controller = e, e.signal;
  }
  /**
   * Manually cancel the current WebAuthn operation.
   * Useful for cleaning up when user cancels or navigates away.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort MDN - AbortController.abort}
   */
  cancelCeremony() {
    if (this.controller) {
      const e = new Error("Manually cancelling existing WebAuthn API call");
      e.name = "AbortError", this.controller.abort(e), this.controller = void 0;
    }
  }
}
const pi = new gi();
function _i(s) {
  if (!s)
    throw new Error("Credential creation options are required");
  if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function")
    return PublicKeyCredential.parseCreationOptionsFromJSON(
      /** we assert the options here as typescript still doesn't know about future webauthn types */
      s
    );
  const { challenge: e, user: t, excludeCredentials: r } = s, n = de(
    s,
    ["challenge", "user", "excludeCredentials"]
  ), i = ue(e).buffer, o = Object.assign(Object.assign({}, t), { id: ue(t.id).buffer }), a = Object.assign(Object.assign({}, n), {
    challenge: i,
    user: o
  });
  if (r && r.length > 0) {
    a.excludeCredentials = new Array(r.length);
    for (let l = 0; l < r.length; l++) {
      const u = r[l];
      a.excludeCredentials[l] = Object.assign(Object.assign({}, u), {
        id: ue(u.id).buffer,
        type: u.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: u.transports
      });
    }
  }
  return a;
}
function vi(s) {
  if (!s)
    throw new Error("Credential request options are required");
  if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function")
    return PublicKeyCredential.parseRequestOptionsFromJSON(s);
  const { challenge: e, allowCredentials: t } = s, r = de(
    s,
    ["challenge", "allowCredentials"]
  ), n = ue(e).buffer, i = Object.assign(Object.assign({}, r), { challenge: n });
  if (t && t.length > 0) {
    i.allowCredentials = new Array(t.length);
    for (let o = 0; o < t.length; o++) {
      const a = t[o];
      i.allowCredentials[o] = Object.assign(Object.assign({}, a), {
        id: ue(a.id).buffer,
        type: a.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: a.transports
      });
    }
  }
  return i;
}
function wi(s) {
  var e;
  if ("toJSON" in s && typeof s.toJSON == "function")
    return s.toJSON();
  const t = s;
  return {
    id: s.id,
    rawId: s.id,
    response: {
      attestationObject: te(new Uint8Array(s.response.attestationObject)),
      clientDataJSON: te(new Uint8Array(s.response.clientDataJSON))
    },
    type: "public-key",
    clientExtensionResults: s.getClientExtensionResults(),
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (e = t.authenticatorAttachment) !== null && e !== void 0 ? e : void 0
  };
}
function yi(s) {
  var e;
  if ("toJSON" in s && typeof s.toJSON == "function")
    return s.toJSON();
  const t = s, r = s.getClientExtensionResults(), n = s.response;
  return {
    id: s.id,
    rawId: s.id,
    // W3C spec expects rawId to match id for JSON format
    response: {
      authenticatorData: te(new Uint8Array(n.authenticatorData)),
      clientDataJSON: te(new Uint8Array(n.clientDataJSON)),
      signature: te(new Uint8Array(n.signature)),
      userHandle: n.userHandle ? te(new Uint8Array(n.userHandle)) : void 0
    },
    type: "public-key",
    clientExtensionResults: r,
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (e = t.authenticatorAttachment) !== null && e !== void 0 ? e : void 0
  };
}
function ws(s) {
  return (
    // Consider localhost valid as well since it's okay wrt Secure Contexts
    s === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(s)
  );
}
function er() {
  var s, e;
  return !!(I() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof ((s = navigator?.credentials) === null || s === void 0 ? void 0 : s.create) == "function" && typeof ((e = navigator?.credentials) === null || e === void 0 ? void 0 : e.get) == "function");
}
async function bi(s) {
  try {
    const e = await navigator.credentials.create(
      /** we assert the type here until typescript types are updated */
      s
    );
    return e ? e instanceof PublicKeyCredential ? { data: e, error: null } : {
      data: null,
      error: new Ve("Browser returned unexpected credential type", e)
    } : {
      data: null,
      error: new Ve("Empty credential response", e)
    };
  } catch (e) {
    return {
      data: null,
      error: di({
        error: e,
        options: s
      })
    };
  }
}
async function mi(s) {
  try {
    const e = await navigator.credentials.get(
      /** we assert the type here until typescript types are updated */
      s
    );
    return e ? e instanceof PublicKeyCredential ? { data: e, error: null } : {
      data: null,
      error: new Ve("Browser returned unexpected credential type", e)
    } : {
      data: null,
      error: new Ve("Empty credential response", e)
    };
  } catch (e) {
    return {
      data: null,
      error: fi({
        error: e,
        options: s
      })
    };
  }
}
const Ei = {
  hints: ["security-key"],
  authenticatorSelection: {
    authenticatorAttachment: "cross-platform",
    requireResidentKey: !1,
    /** set to preferred because older yubikeys don't have PIN/Biometric */
    userVerification: "preferred",
    residentKey: "discouraged"
  },
  attestation: "direct"
}, Si = {
  /** set to preferred because older yubikeys don't have PIN/Biometric */
  userVerification: "preferred",
  hints: ["security-key"],
  attestation: "direct"
};
function Ke(...s) {
  const e = (n) => n !== null && typeof n == "object" && !Array.isArray(n), t = (n) => n instanceof ArrayBuffer || ArrayBuffer.isView(n), r = {};
  for (const n of s)
    if (n)
      for (const i in n) {
        const o = n[i];
        if (o !== void 0)
          if (Array.isArray(o))
            r[i] = o;
          else if (t(o))
            r[i] = o;
          else if (e(o)) {
            const a = r[i];
            e(a) ? r[i] = Ke(a, o) : r[i] = Ke(o);
          } else
            r[i] = o;
      }
  return r;
}
function Oi(s, e) {
  return Ke(Ei, s, e || {});
}
function Ti(s, e) {
  return Ke(Si, s, e || {});
}
class ki {
  constructor(e) {
    this.client = e, this.enroll = this._enroll.bind(this), this.challenge = this._challenge.bind(this), this.verify = this._verify.bind(this), this.authenticate = this._authenticate.bind(this), this.register = this._register.bind(this);
  }
  /**
   * Enroll a new WebAuthn factor.
   * Creates an unverified WebAuthn factor that must be verified with a credential.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Omit<MFAEnrollWebauthnParams, 'factorType'>} params - Enrollment parameters (friendlyName required)
   * @returns {Promise<AuthMFAEnrollWebauthnResponse>} Enrolled factor details or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-registering-a-new-credential W3C WebAuthn Spec - Registering a New Credential}
   */
  async _enroll(e) {
    return this.client.mfa.enroll(Object.assign(Object.assign({}, e), { factorType: "webauthn" }));
  }
  /**
   * Challenge for WebAuthn credential creation or authentication.
   * Combines server challenge with browser credential operations.
   * Handles both registration (create) and authentication (request) flows.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {MFAChallengeWebauthnParams & { friendlyName?: string; signal?: AbortSignal }} params - Challenge parameters including factorId
   * @param {Object} overrides - Allows you to override the parameters passed to navigator.credentials
   * @param {PublicKeyCredentialCreationOptionsFuture} overrides.create - Override options for credential creation
   * @param {PublicKeyCredentialRequestOptionsFuture} overrides.request - Override options for credential request
   * @returns {Promise<RequestResult>} Challenge response with credential or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-credential-creation W3C WebAuthn Spec - Credential Creation}
   * @see {@link https://w3c.github.io/webauthn/#sctn-verifying-assertion W3C WebAuthn Spec - Verifying Assertion}
   */
  async _challenge({ factorId: e, webauthn: t, friendlyName: r, signal: n }, i) {
    try {
      const { data: o, error: a } = await this.client.mfa.challenge({
        factorId: e,
        webauthn: t
      });
      if (!o)
        return { data: null, error: a };
      const l = n ?? pi.createNewAbortSignal();
      if (o.webauthn.type === "create") {
        const { user: u } = o.webauthn.credential_options.publicKey;
        u.name || (u.name = `${u.id}:${r}`), u.displayName || (u.displayName = u.name);
      }
      switch (o.webauthn.type) {
        case "create": {
          const u = Oi(o.webauthn.credential_options.publicKey, i?.create), { data: c, error: d } = await bi({
            publicKey: u,
            signal: l
          });
          return c ? {
            data: {
              factorId: e,
              challengeId: o.id,
              webauthn: {
                type: o.webauthn.type,
                credential_response: c
              }
            },
            error: null
          } : { data: null, error: d };
        }
        case "request": {
          const u = Ti(o.webauthn.credential_options.publicKey, i?.request), { data: c, error: d } = await mi(Object.assign(Object.assign({}, o.webauthn.credential_options), { publicKey: u, signal: l }));
          return c ? {
            data: {
              factorId: e,
              challengeId: o.id,
              webauthn: {
                type: o.webauthn.type,
                credential_response: c
              }
            },
            error: null
          } : { data: null, error: d };
        }
      }
    } catch (o) {
      return m(o) ? { data: null, error: o } : {
        data: null,
        error: new H("Unexpected error in challenge", o)
      };
    }
  }
  /**
   * Verify a WebAuthn credential with the server.
   * Completes the WebAuthn ceremony by sending the credential to the server for verification.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Verification parameters
   * @param {string} params.challengeId - ID of the challenge being verified
   * @param {string} params.factorId - ID of the WebAuthn factor
   * @param {MFAVerifyWebauthnParams<T>['webauthn']} params.webauthn - WebAuthn credential response
   * @returns {Promise<AuthMFAVerifyResponse>} Verification result with session or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-verifying-assertion W3C WebAuthn Spec - Verifying an Authentication Assertion}
   * */
  async _verify({ challengeId: e, factorId: t, webauthn: r }) {
    return this.client.mfa.verify({
      factorId: t,
      challengeId: e,
      webauthn: r
    });
  }
  /**
   * Complete WebAuthn authentication flow.
   * Performs challenge and verification in a single operation for existing credentials.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Authentication parameters
   * @param {string} params.factorId - ID of the WebAuthn factor to authenticate with
   * @param {Object} params.webauthn - WebAuthn configuration
   * @param {string} params.webauthn.rpId - Relying Party ID (defaults to current hostname)
   * @param {string[]} params.webauthn.rpOrigins - Allowed origins (defaults to current origin)
   * @param {AbortSignal} params.webauthn.signal - Optional abort signal
   * @param {PublicKeyCredentialRequestOptionsFuture} overrides - Override options for navigator.credentials.get
   * @returns {Promise<RequestResult<AuthMFAVerifyResponseData, WebAuthnError | AuthError>>} Authentication result
   * @see {@link https://w3c.github.io/webauthn/#sctn-authentication W3C WebAuthn Spec - Authentication Ceremony}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions MDN - PublicKeyCredentialRequestOptions}
   */
  async _authenticate({ factorId: e, webauthn: { rpId: t = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: r = typeof window < "u" ? [window.location.origin] : void 0, signal: n } = {} }, i) {
    if (!t)
      return {
        data: null,
        error: new he("rpId is required for WebAuthn authentication")
      };
    try {
      if (!er())
        return {
          data: null,
          error: new H("Browser does not support WebAuthn", null)
        };
      const { data: o, error: a } = await this.challenge({
        factorId: e,
        webauthn: { rpId: t, rpOrigins: r },
        signal: n
      }, { request: i });
      if (!o)
        return { data: null, error: a };
      const { webauthn: l } = o;
      return this._verify({
        factorId: e,
        challengeId: o.challengeId,
        webauthn: {
          type: l.type,
          rpId: t,
          rpOrigins: r,
          credential_response: l.credential_response
        }
      });
    } catch (o) {
      return m(o) ? { data: null, error: o } : {
        data: null,
        error: new H("Unexpected error in authenticate", o)
      };
    }
  }
  /**
   * Complete WebAuthn registration flow.
   * Performs enrollment, challenge, and verification in a single operation for new credentials.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Registration parameters
   * @param {string} params.friendlyName - User-friendly name for the credential
   * @param {string} params.rpId - Relying Party ID (defaults to current hostname)
   * @param {string[]} params.rpOrigins - Allowed origins (defaults to current origin)
   * @param {AbortSignal} params.signal - Optional abort signal
   * @param {PublicKeyCredentialCreationOptionsFuture} overrides - Override options for navigator.credentials.create
   * @returns {Promise<RequestResult<AuthMFAVerifyResponseData, WebAuthnError | AuthError>>} Registration result
   * @see {@link https://w3c.github.io/webauthn/#sctn-registering-a-new-credential W3C WebAuthn Spec - Registration Ceremony}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions MDN - PublicKeyCredentialCreationOptions}
   */
  async _register({ friendlyName: e, webauthn: { rpId: t = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: r = typeof window < "u" ? [window.location.origin] : void 0, signal: n } = {} }, i) {
    if (!t)
      return {
        data: null,
        error: new he("rpId is required for WebAuthn registration")
      };
    try {
      if (!er())
        return {
          data: null,
          error: new H("Browser does not support WebAuthn", null)
        };
      const { data: o, error: a } = await this._enroll({
        friendlyName: e
      });
      if (!o)
        return await this.client.mfa.listFactors().then((c) => {
          var d;
          return (d = c.data) === null || d === void 0 ? void 0 : d.all.find((f) => f.factor_type === "webauthn" && f.friendly_name === e && f.status !== "unverified");
        }).then((c) => c ? this.client.mfa.unenroll({ factorId: c?.id }) : void 0), { data: null, error: a };
      const { data: l, error: u } = await this._challenge({
        factorId: o.id,
        friendlyName: o.friendly_name,
        webauthn: { rpId: t, rpOrigins: r },
        signal: n
      }, {
        create: i
      });
      return l ? this._verify({
        factorId: o.id,
        challengeId: l.challengeId,
        webauthn: {
          rpId: t,
          rpOrigins: r,
          type: l.webauthn.type,
          credential_response: l.webauthn.credential_response
        }
      }) : { data: null, error: u };
    } catch (o) {
      return m(o) ? { data: null, error: o } : {
        data: null,
        error: new H("Unexpected error in register", o)
      };
    }
  }
}
li();
const Ai = {
  url: An,
  storageKey: Rn,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: jn,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1
};
async function tr(s, e, t) {
  return await t();
}
const ie = {};
let jt = class bt {
  /**
   * The JWKS used for verifying asymmetric JWTs
   */
  get jwks() {
    var e, t;
    return (t = (e = ie[this.storageKey]) === null || e === void 0 ? void 0 : e.jwks) !== null && t !== void 0 ? t : { keys: [] };
  }
  set jwks(e) {
    ie[this.storageKey] = Object.assign(Object.assign({}, ie[this.storageKey]), { jwks: e });
  }
  get jwks_cached_at() {
    var e, t;
    return (t = (e = ie[this.storageKey]) === null || e === void 0 ? void 0 : e.cachedAt) !== null && t !== void 0 ? t : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(e) {
    ie[this.storageKey] = Object.assign(Object.assign({}, ie[this.storageKey]), { cachedAt: e });
  }
  /**
   * Create a new client for use in the browser.
   *
   * @example
   * ```ts
   * import { GoTrueClient } from '@supabase/auth-js'
   *
   * const auth = new GoTrueClient({
   *   url: 'https://xyzcompany.supabase.co/auth/v1',
   *   headers: { apikey: 'public-anon-key' },
   *   storageKey: 'supabase-auth',
   * })
   * ```
   */
  constructor(e) {
    var t, r, n;
    this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log;
    const i = Object.assign(Object.assign({}, Ai), e);
    if (this.storageKey = i.storageKey, this.instanceID = (t = bt.nextInstanceID[this.storageKey]) !== null && t !== void 0 ? t : 0, bt.nextInstanceID[this.storageKey] = this.instanceID + 1, this.logDebugMessages = !!i.debug, typeof i.debug == "function" && (this.logger = i.debug), this.instanceID > 0 && I()) {
      const o = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      console.warn(o), this.logDebugMessages && console.trace(o);
    }
    if (this.persistSession = i.persistSession, this.autoRefreshToken = i.autoRefreshToken, this.admin = new At({
      url: i.url,
      headers: i.headers,
      fetch: i.fetch
    }), this.url = i.url, this.headers = i.headers, this.fetch = gs(i.fetch), this.lock = i.lock || tr, this.detectSessionInUrl = i.detectSessionInUrl, this.flowType = i.flowType, this.hasCustomAuthorizationHeader = i.hasCustomAuthorizationHeader, this.throwOnError = i.throwOnError, i.lock ? this.lock = i.lock : this.persistSession && I() && (!((r = globalThis?.navigator) === null || r === void 0) && r.locks) ? this.lock = _s : this.lock = tr, this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
      webauthn: new ki(this)
    }, this.oauth = {
      getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
      approveAuthorization: this._approveAuthorization.bind(this),
      denyAuthorization: this._denyAuthorization.bind(this),
      listGrants: this._listOAuthGrants.bind(this),
      revokeGrant: this._revokeOAuthGrant.bind(this)
    }, this.persistSession ? (i.storage ? this.storage = i.storage : fs() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = Xt(this.memoryStorage)), i.userStorage && (this.userStorage = i.userStorage)) : (this.memoryStorage = {}, this.storage = Xt(this.memoryStorage)), I() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (o) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", o);
      }
      (n = this.broadcastChannel) === null || n === void 0 || n.addEventListener("message", async (o) => {
        this._debug("received broadcast notification from other tab or client", o), await this._notifyAllSubscribers(o.data.event, o.data.session, !1);
      });
    }
    this.initialize();
  }
  /**
   * Returns whether error throwing mode is enabled for this client.
   */
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  /**
   * Centralizes return handling with optional error throwing. When `throwOnError` is enabled
   * and the provided result contains a non-nullish error, the error is thrown instead of
   * being returned. This ensures consistent behavior across all public API methods.
   */
  _returnResult(e) {
    if (this.throwOnError && e && e.error)
      throw e.error;
    return e;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${os}) ${(/* @__PURE__ */ new Date()).toISOString()}`;
  }
  _debug(...e) {
    return this.logDebugMessages && this.logger(this._logPrefix(), ...e), this;
  }
  /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   */
  async initialize() {
    return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(), await this.initializePromise);
  }
  /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */
  async _initialize() {
    var e;
    try {
      let t = {}, r = "none";
      if (I() && (t = qn(window.location.href), this._isImplicitGrantCallback(t) ? r = "implicit" : await this._isPKCECallback(t) && (r = "pkce")), I() && this.detectSessionInUrl && r !== "none") {
        const { data: n, error: i } = await this._getSessionFromURL(t, r);
        if (i) {
          if (this._debug("#_initialize()", "error detecting session from URL", i), hs(i)) {
            const l = (e = i.details) === null || e === void 0 ? void 0 : e.code;
            if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
              return { error: i };
          }
          return await this._removeSession(), { error: i };
        }
        const { session: o, redirectType: a } = n;
        return this._debug("#_initialize()", "detected session in URL", o, "redirect type", a), await this._saveSession(o), setTimeout(async () => {
          a === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", o) : await this._notifyAllSubscribers("SIGNED_IN", o);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (t) {
      return m(t) ? this._returnResult({ error: t }) : this._returnResult({
        error: new H("Unexpected error during initialization", t)
      });
    } finally {
      await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
    }
  }
  /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   */
  async signInAnonymously(e) {
    var t, r, n;
    try {
      const i = await E(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (r = (t = e?.options) === null || t === void 0 ? void 0 : t.data) !== null && r !== void 0 ? r : {},
          gotrue_meta_security: { captcha_token: (n = e?.options) === null || n === void 0 ? void 0 : n.captchaToken }
        },
        xform: D
      }), { data: o, error: a } = i;
      if (a || !o)
        return this._returnResult({ data: { user: null, session: null }, error: a });
      const l = o.session, u = o.user;
      return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", l)), this._returnResult({ data: { user: u, session: l }, error: null });
    } catch (i) {
      if (m(i))
        return this._returnResult({ data: { user: null, session: null }, error: i });
      throw i;
    }
  }
  /**
   * Creates a new user.
   *
   * Be aware that if a user account exists in the system you may get back an
   * error message that attempts to hide this information from the user.
   * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   */
  async signUp(e) {
    var t, r, n;
    try {
      let i;
      if ("email" in e) {
        const { email: c, password: d, options: f } = e;
        let h = null, g = null;
        this.flowType === "pkce" && ([h, g] = await se(this.storage, this.storageKey)), i = await E(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: f?.emailRedirectTo,
          body: {
            email: c,
            password: d,
            data: (t = f?.data) !== null && t !== void 0 ? t : {},
            gotrue_meta_security: { captcha_token: f?.captchaToken },
            code_challenge: h,
            code_challenge_method: g
          },
          xform: D
        });
      } else if ("phone" in e) {
        const { phone: c, password: d, options: f } = e;
        i = await E(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: c,
            password: d,
            data: (r = f?.data) !== null && r !== void 0 ? r : {},
            channel: (n = f?.channel) !== null && n !== void 0 ? n : "sms",
            gotrue_meta_security: { captcha_token: f?.captchaToken }
          },
          xform: D
        });
      } else
        throw new ve("You must provide either an email or phone number and a password");
      const { data: o, error: a } = i;
      if (a || !o)
        return await C(this.storage, `${this.storageKey}-code-verifier`), this._returnResult({ data: { user: null, session: null }, error: a });
      const l = o.session, u = o.user;
      return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", l)), this._returnResult({ data: { user: u, session: l }, error: null });
    } catch (i) {
      if (await C(this.storage, `${this.storageKey}-code-verifier`), m(i))
        return this._returnResult({ data: { user: null, session: null }, error: i });
      throw i;
    }
  }
  /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   */
  async signInWithPassword(e) {
    try {
      let t;
      if ("email" in e) {
        const { email: i, password: o, options: a } = e;
        t = await E(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: i,
            password: o,
            gotrue_meta_security: { captcha_token: a?.captchaToken }
          },
          xform: Yt
        });
      } else if ("phone" in e) {
        const { phone: i, password: o, options: a } = e;
        t = await E(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: i,
            password: o,
            gotrue_meta_security: { captcha_token: a?.captchaToken }
          },
          xform: Yt
        });
      } else
        throw new ve("You must provide either an email or phone number and a password");
      const { data: r, error: n } = t;
      if (n)
        return this._returnResult({ data: { user: null, session: null }, error: n });
      if (!r || !r.session || !r.user) {
        const i = new Y();
        return this._returnResult({ data: { user: null, session: null }, error: i });
      }
      return r.session && (await this._saveSession(r.session), await this._notifyAllSubscribers("SIGNED_IN", r.session)), this._returnResult({
        data: Object.assign({ user: r.user, session: r.session }, r.weak_password ? { weakPassword: r.weak_password } : null),
        error: n
      });
    } catch (t) {
      if (m(t))
        return this._returnResult({ data: { user: null, session: null }, error: t });
      throw t;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   */
  async signInWithOAuth(e) {
    var t, r, n, i;
    return await this._handleProviderSignIn(e.provider, {
      redirectTo: (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo,
      scopes: (r = e.options) === null || r === void 0 ? void 0 : r.scopes,
      queryParams: (n = e.options) === null || n === void 0 ? void 0 : n.queryParams,
      skipBrowserRedirect: (i = e.options) === null || i === void 0 ? void 0 : i.skipBrowserRedirect
    });
  }
  /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   */
  async exchangeCodeForSession(e) {
    return await this.initializePromise, this._acquireLock(-1, async () => this._exchangeCodeForSession(e));
  }
  /**
   * Signs in a user by verifying a message signed by the user's private key.
   * Supports Ethereum (via Sign-In-With-Ethereum) & Solana (Sign-In-With-Solana) standards,
   * both of which derive from the EIP-4361 standard
   * With slight variation on Solana's side.
   * @reference https://eips.ethereum.org/EIPS/eip-4361
   */
  async signInWithWeb3(e) {
    const { chain: t } = e;
    switch (t) {
      case "ethereum":
        return await this.signInWithEthereum(e);
      case "solana":
        return await this.signInWithSolana(e);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${t}"`);
    }
  }
  async signInWithEthereum(e) {
    var t, r, n, i, o, a, l, u, c, d, f;
    let h, g;
    if ("message" in e)
      h = e.message, g = e.signature;
    else {
      const { chain: _, wallet: p, statement: w, options: b } = e;
      let v;
      if (I())
        if (typeof p == "object")
          v = p;
        else {
          const F = window;
          if ("ethereum" in F && typeof F.ethereum == "object" && "request" in F.ethereum && typeof F.ethereum.request == "function")
            v = F.ethereum;
          else
            throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof p != "object" || !b?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        v = p;
      }
      const S = new URL((t = b?.url) !== null && t !== void 0 ? t : window.location.href), T = await v.request({
        method: "eth_requestAccounts"
      }).then((F) => F).catch(() => {
        throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid");
      });
      if (!T || T.length === 0)
        throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
      const O = vs(T[0]);
      let R = (r = b?.signInWithEthereum) === null || r === void 0 ? void 0 : r.chainId;
      if (!R) {
        const F = await v.request({
          method: "eth_chainId"
        });
        R = ui(F);
      }
      const K = {
        domain: S.host,
        address: O,
        statement: w,
        uri: S.href,
        version: "1",
        chainId: R,
        nonce: (n = b?.signInWithEthereum) === null || n === void 0 ? void 0 : n.nonce,
        issuedAt: (o = (i = b?.signInWithEthereum) === null || i === void 0 ? void 0 : i.issuedAt) !== null && o !== void 0 ? o : /* @__PURE__ */ new Date(),
        expirationTime: (a = b?.signInWithEthereum) === null || a === void 0 ? void 0 : a.expirationTime,
        notBefore: (l = b?.signInWithEthereum) === null || l === void 0 ? void 0 : l.notBefore,
        requestId: (u = b?.signInWithEthereum) === null || u === void 0 ? void 0 : u.requestId,
        resources: (c = b?.signInWithEthereum) === null || c === void 0 ? void 0 : c.resources
      };
      h = hi(K), g = await v.request({
        method: "personal_sign",
        params: [ci(h), O]
      });
    }
    try {
      const { data: _, error: p } = await E(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({
          chain: "ethereum",
          message: h,
          signature: g
        }, !((d = e.options) === null || d === void 0) && d.captchaToken ? { gotrue_meta_security: { captcha_token: (f = e.options) === null || f === void 0 ? void 0 : f.captchaToken } } : null),
        xform: D
      });
      if (p)
        throw p;
      if (!_ || !_.session || !_.user) {
        const w = new Y();
        return this._returnResult({ data: { user: null, session: null }, error: w });
      }
      return _.session && (await this._saveSession(_.session), await this._notifyAllSubscribers("SIGNED_IN", _.session)), this._returnResult({ data: Object.assign({}, _), error: p });
    } catch (_) {
      if (m(_))
        return this._returnResult({ data: { user: null, session: null }, error: _ });
      throw _;
    }
  }
  async signInWithSolana(e) {
    var t, r, n, i, o, a, l, u, c, d, f, h;
    let g, _;
    if ("message" in e)
      g = e.message, _ = e.signature;
    else {
      const { chain: p, wallet: w, statement: b, options: v } = e;
      let S;
      if (I())
        if (typeof w == "object")
          S = w;
        else {
          const O = window;
          if ("solana" in O && typeof O.solana == "object" && ("signIn" in O.solana && typeof O.solana.signIn == "function" || "signMessage" in O.solana && typeof O.solana.signMessage == "function"))
            S = O.solana;
          else
            throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof w != "object" || !v?.url)
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        S = w;
      }
      const T = new URL((t = v?.url) !== null && t !== void 0 ? t : window.location.href);
      if ("signIn" in S && S.signIn) {
        const O = await S.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, v?.signInWithSolana), {
          // non-overridable properties
          version: "1",
          domain: T.host,
          uri: T.href
        }), b ? { statement: b } : null));
        let R;
        if (Array.isArray(O) && O[0] && typeof O[0] == "object")
          R = O[0];
        else if (O && typeof O == "object" && "signedMessage" in O && "signature" in O)
          R = O;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
        if ("signedMessage" in R && "signature" in R && (typeof R.signedMessage == "string" || R.signedMessage instanceof Uint8Array) && R.signature instanceof Uint8Array)
          g = typeof R.signedMessage == "string" ? R.signedMessage : new TextDecoder().decode(R.signedMessage), _ = R.signature;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
      } else {
        if (!("signMessage" in S) || typeof S.signMessage != "function" || !("publicKey" in S) || typeof S != "object" || !S.publicKey || !("toBase58" in S.publicKey) || typeof S.publicKey.toBase58 != "function")
          throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
        g = [
          `${T.host} wants you to sign in with your Solana account:`,
          S.publicKey.toBase58(),
          ...b ? ["", b, ""] : [""],
          "Version: 1",
          `URI: ${T.href}`,
          `Issued At: ${(n = (r = v?.signInWithSolana) === null || r === void 0 ? void 0 : r.issuedAt) !== null && n !== void 0 ? n : (/* @__PURE__ */ new Date()).toISOString()}`,
          ...!((i = v?.signInWithSolana) === null || i === void 0) && i.notBefore ? [`Not Before: ${v.signInWithSolana.notBefore}`] : [],
          ...!((o = v?.signInWithSolana) === null || o === void 0) && o.expirationTime ? [`Expiration Time: ${v.signInWithSolana.expirationTime}`] : [],
          ...!((a = v?.signInWithSolana) === null || a === void 0) && a.chainId ? [`Chain ID: ${v.signInWithSolana.chainId}`] : [],
          ...!((l = v?.signInWithSolana) === null || l === void 0) && l.nonce ? [`Nonce: ${v.signInWithSolana.nonce}`] : [],
          ...!((u = v?.signInWithSolana) === null || u === void 0) && u.requestId ? [`Request ID: ${v.signInWithSolana.requestId}`] : [],
          ...!((d = (c = v?.signInWithSolana) === null || c === void 0 ? void 0 : c.resources) === null || d === void 0) && d.length ? [
            "Resources",
            ...v.signInWithSolana.resources.map((R) => `- ${R}`)
          ] : []
        ].join(`
`);
        const O = await S.signMessage(new TextEncoder().encode(g), "utf8");
        if (!O || !(O instanceof Uint8Array))
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        _ = O;
      }
    }
    try {
      const { data: p, error: w } = await E(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({ chain: "solana", message: g, signature: te(_) }, !((f = e.options) === null || f === void 0) && f.captchaToken ? { gotrue_meta_security: { captcha_token: (h = e.options) === null || h === void 0 ? void 0 : h.captchaToken } } : null),
        xform: D
      });
      if (w)
        throw w;
      if (!p || !p.session || !p.user) {
        const b = new Y();
        return this._returnResult({ data: { user: null, session: null }, error: b });
      }
      return p.session && (await this._saveSession(p.session), await this._notifyAllSubscribers("SIGNED_IN", p.session)), this._returnResult({ data: Object.assign({}, p), error: w });
    } catch (p) {
      if (m(p))
        return this._returnResult({ data: { user: null, session: null }, error: p });
      throw p;
    }
  }
  async _exchangeCodeForSession(e) {
    const t = await z(this.storage, `${this.storageKey}-code-verifier`), [r, n] = (t ?? "").split("/");
    try {
      const { data: i, error: o } = await E(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: e,
          code_verifier: r
        },
        xform: D
      });
      if (await C(this.storage, `${this.storageKey}-code-verifier`), o)
        throw o;
      if (!i || !i.session || !i.user) {
        const a = new Y();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: a
        });
      }
      return i.session && (await this._saveSession(i.session), await this._notifyAllSubscribers("SIGNED_IN", i.session)), this._returnResult({ data: Object.assign(Object.assign({}, i), { redirectType: n ?? null }), error: o });
    } catch (i) {
      if (await C(this.storage, `${this.storageKey}-code-verifier`), m(i))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: i
        });
      throw i;
    }
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   */
  async signInWithIdToken(e) {
    try {
      const { options: t, provider: r, token: n, access_token: i, nonce: o } = e, a = await E(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: r,
          id_token: n,
          access_token: i,
          nonce: o,
          gotrue_meta_security: { captcha_token: t?.captchaToken }
        },
        xform: D
      }), { data: l, error: u } = a;
      if (u)
        return this._returnResult({ data: { user: null, session: null }, error: u });
      if (!l || !l.session || !l.user) {
        const c = new Y();
        return this._returnResult({ data: { user: null, session: null }, error: c });
      }
      return l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), this._returnResult({ data: l, error: u });
    } catch (t) {
      if (m(t))
        return this._returnResult({ data: { user: null, session: null }, error: t });
      throw t;
    }
  }
  /**
   * Log in a user using magiclink or a one-time password (OTP).
   *
   * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
   * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
   * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or, that the account
   * can only be accessed via social login.
   *
   * Do note that you will need to configure a Whatsapp sender on Twilio
   * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
   * channel is not supported on other providers
   * at this time.
   * This method supports PKCE when an email is passed.
   */
  async signInWithOtp(e) {
    var t, r, n, i, o;
    try {
      if ("email" in e) {
        const { email: a, options: l } = e;
        let u = null, c = null;
        this.flowType === "pkce" && ([u, c] = await se(this.storage, this.storageKey));
        const { error: d } = await E(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: a,
            data: (t = l?.data) !== null && t !== void 0 ? t : {},
            create_user: (r = l?.shouldCreateUser) !== null && r !== void 0 ? r : !0,
            gotrue_meta_security: { captcha_token: l?.captchaToken },
            code_challenge: u,
            code_challenge_method: c
          },
          redirectTo: l?.emailRedirectTo
        });
        return this._returnResult({ data: { user: null, session: null }, error: d });
      }
      if ("phone" in e) {
        const { phone: a, options: l } = e, { data: u, error: c } = await E(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: a,
            data: (n = l?.data) !== null && n !== void 0 ? n : {},
            create_user: (i = l?.shouldCreateUser) !== null && i !== void 0 ? i : !0,
            gotrue_meta_security: { captcha_token: l?.captchaToken },
            channel: (o = l?.channel) !== null && o !== void 0 ? o : "sms"
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: u?.message_id },
          error: c
        });
      }
      throw new ve("You must provide either an email or phone number.");
    } catch (a) {
      if (await C(this.storage, `${this.storageKey}-code-verifier`), m(a))
        return this._returnResult({ data: { user: null, session: null }, error: a });
      throw a;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   */
  async verifyOtp(e) {
    var t, r;
    try {
      let n, i;
      "options" in e && (n = (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo, i = (r = e.options) === null || r === void 0 ? void 0 : r.captchaToken);
      const { data: o, error: a } = await E(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: i } }),
        redirectTo: n,
        xform: D
      });
      if (a)
        throw a;
      if (!o)
        throw new Error("An error occurred on token verification.");
      const l = o.session, u = o.user;
      return l?.access_token && (await this._saveSession(l), await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)), this._returnResult({ data: { user: u, session: l }, error: null });
    } catch (n) {
      if (m(n))
        return this._returnResult({ data: { user: null, session: null }, error: n });
      throw n;
    }
  }
  /**
   * Attempts a single-sign on using an enterprise Identity Provider. A
   * successful SSO attempt will redirect the current page to the identity
   * provider authorization page. The redirect URL is implementation and SSO
   * protocol specific.
   *
   * You can use it by providing a SSO domain. Typically you can extract this
   * domain by asking users for their email address. If this domain is
   * registered on the Auth instance the redirect will use that organization's
   * currently active SSO Identity Provider for the login.
   *
   * If you have built an organization-specific login page, you can use the
   * organization's SSO Identity Provider UUID directly instead.
   */
  async signInWithSSO(e) {
    var t, r, n, i, o;
    try {
      let a = null, l = null;
      this.flowType === "pkce" && ([a, l] = await se(this.storage, this.storageKey));
      const u = await E(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? { provider_id: e.providerId } : null), "domain" in e ? { domain: e.domain } : null), { redirect_to: (r = (t = e.options) === null || t === void 0 ? void 0 : t.redirectTo) !== null && r !== void 0 ? r : void 0 }), !((n = e?.options) === null || n === void 0) && n.captchaToken ? { gotrue_meta_security: { captcha_token: e.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: a, code_challenge_method: l }),
        headers: this.headers,
        xform: si
      });
      return !((i = u.data) === null || i === void 0) && i.url && I() && !(!((o = e.options) === null || o === void 0) && o.skipBrowserRedirect) && window.location.assign(u.data.url), this._returnResult(u);
    } catch (a) {
      if (await C(this.storage, `${this.storageKey}-code-verifier`), m(a))
        return this._returnResult({ data: null, error: a });
      throw a;
    }
  }
  /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   */
  async reauthenticate() {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (e) => {
        const { data: { session: t }, error: r } = e;
        if (r)
          throw r;
        if (!t)
          throw new x();
        const { error: n } = await E(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: t.access_token
        });
        return this._returnResult({ data: { user: null, session: null }, error: n });
      });
    } catch (e) {
      if (m(e))
        return this._returnResult({ data: { user: null, session: null }, error: e });
      throw e;
    }
  }
  /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   */
  async resend(e) {
    try {
      const t = `${this.url}/resend`;
      if ("email" in e) {
        const { email: r, type: n, options: i } = e, { error: o } = await E(this.fetch, "POST", t, {
          headers: this.headers,
          body: {
            email: r,
            type: n,
            gotrue_meta_security: { captcha_token: i?.captchaToken }
          },
          redirectTo: i?.emailRedirectTo
        });
        return this._returnResult({ data: { user: null, session: null }, error: o });
      } else if ("phone" in e) {
        const { phone: r, type: n, options: i } = e, { data: o, error: a } = await E(this.fetch, "POST", t, {
          headers: this.headers,
          body: {
            phone: r,
            type: n,
            gotrue_meta_security: { captcha_token: i?.captchaToken }
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: o?.message_id },
          error: a
        });
      }
      throw new ve("You must provide either an email or phone number and a type");
    } catch (t) {
      if (m(t))
        return this._returnResult({ data: { user: null, session: null }, error: t });
      throw t;
    }
  }
  /**
   * Returns the session, refreshing it if necessary.
   *
   * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
   *
   * **IMPORTANT:** This method loads values directly from the storage attached
   * to the client. If that storage is based on request cookies for example,
   * the values in it may not be authentic and therefore it's strongly advised
   * against using this method and its results in such circumstances. A warning
   * will be emitted if this is detected. Use {@link #getUser()} instead.
   */
  async getSession() {
    return await this.initializePromise, await this._acquireLock(-1, async () => this._useSession(async (t) => t));
  }
  /**
   * Acquires a global lock based on the storage key.
   */
  async _acquireLock(e, t) {
    this._debug("#_acquireLock", "begin", e);
    try {
      if (this.lockAcquired) {
        const r = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), n = (async () => (await r, await t()))();
        return this.pendingInLock.push((async () => {
          try {
            await n;
          } catch {
          }
        })()), n;
      }
      return await this.lock(`lock:${this.storageKey}`, e, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = !0;
          const r = t();
          for (this.pendingInLock.push((async () => {
            try {
              await r;
            } catch {
            }
          })()), await r; this.pendingInLock.length; ) {
            const n = [...this.pendingInLock];
            await Promise.all(n), this.pendingInLock.splice(0, n.length);
          }
          return await r;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  /**
   * Use instead of {@link #getSession} inside the library. It is
   * semantically usually what you want, as getting a session involves some
   * processing afterwards that requires only one client operating on the
   * session at once across multiple tabs or processes.
   */
  async _useSession(e) {
    this._debug("#_useSession", "begin");
    try {
      const t = await this.__loadSession();
      return await e(t);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  /**
   * NEVER USE DIRECTLY!
   *
   * Always use {@link #_useSession}.
   */
  async __loadSession() {
    this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    try {
      let e = null;
      const t = await z(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", t), t !== null && (this._isValidSession(t) ? e = t : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e)
        return { data: { session: null }, error: null };
      const r = e.expires_at ? e.expires_at * 1e3 - Date.now() < tt : !1;
      if (this._debug("#__loadSession()", `session has${r ? "" : " not"} expired`, "expires_at", e.expires_at), !r) {
        if (this.userStorage) {
          const o = await z(this.userStorage, this.storageKey + "-user");
          o?.user ? e.user = o.user : e.user = st();
        }
        if (this.storage.isServer && e.user && !e.user.__isUserNotAvailableProxy) {
          const o = { value: this.suppressGetSessionWarning };
          e.user = Zn(e.user, o), o.value && (this.suppressGetSessionWarning = !0);
        }
        return { data: { session: e }, error: null };
      }
      const { data: n, error: i } = await this._callRefreshToken(e.refresh_token);
      return i ? this._returnResult({ data: { session: null }, error: i }) : this._returnResult({ data: { session: n }, error: null });
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   */
  async getUser(e) {
    if (e)
      return await this._getUser(e);
    await this.initializePromise;
    const t = await this._acquireLock(-1, async () => await this._getUser());
    return t.data.user && (this.suppressGetSessionWarning = !0), t;
  }
  async _getUser(e) {
    try {
      return e ? await E(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: e,
        xform: G
      }) : await this._useSession(async (t) => {
        var r, n, i;
        const { data: o, error: a } = t;
        if (a)
          throw a;
        return !(!((r = o.session) === null || r === void 0) && r.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new x() } : await E(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (i = (n = o.session) === null || n === void 0 ? void 0 : n.access_token) !== null && i !== void 0 ? i : void 0,
          xform: G
        });
      });
    } catch (t) {
      if (m(t))
        return cs(t) && (await this._removeSession(), await C(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ data: { user: null }, error: t });
      throw t;
    }
  }
  /**
   * Updates user data for a logged in user.
   */
  async updateUser(e, t = {}) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._updateUser(e, t));
  }
  async _updateUser(e, t = {}) {
    try {
      return await this._useSession(async (r) => {
        const { data: n, error: i } = r;
        if (i)
          throw i;
        if (!n.session)
          throw new x();
        const o = n.session;
        let a = null, l = null;
        this.flowType === "pkce" && e.email != null && ([a, l] = await se(this.storage, this.storageKey));
        const { data: u, error: c } = await E(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: t?.emailRedirectTo,
          body: Object.assign(Object.assign({}, e), { code_challenge: a, code_challenge_method: l }),
          jwt: o.access_token,
          xform: G
        });
        if (c)
          throw c;
        return o.user = u.user, await this._saveSession(o), await this._notifyAllSubscribers("USER_UPDATED", o), this._returnResult({ data: { user: o.user }, error: null });
      });
    } catch (r) {
      if (await C(this.storage, `${this.storageKey}-code-verifier`), m(r))
        return this._returnResult({ data: { user: null }, error: r });
      throw r;
    }
  }
  /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   */
  async setSession(e) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._setSession(e));
  }
  async _setSession(e) {
    try {
      if (!e.access_token || !e.refresh_token)
        throw new x();
      const t = Date.now() / 1e3;
      let r = t, n = !0, i = null;
      const { payload: o } = rt(e.access_token);
      if (o.exp && (r = o.exp, n = r <= t), n) {
        const { data: a, error: l } = await this._callRefreshToken(e.refresh_token);
        if (l)
          return this._returnResult({ data: { user: null, session: null }, error: l });
        if (!a)
          return { data: { user: null, session: null }, error: null };
        i = a;
      } else {
        const { data: a, error: l } = await this._getUser(e.access_token);
        if (l)
          throw l;
        i = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: a.user,
          token_type: "bearer",
          expires_in: r - t,
          expires_at: r
        }, await this._saveSession(i), await this._notifyAllSubscribers("SIGNED_IN", i);
      }
      return this._returnResult({ data: { user: i.user, session: i }, error: null });
    } catch (t) {
      if (m(t))
        return this._returnResult({ data: { session: null, user: null }, error: t });
      throw t;
    }
  }
  /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   */
  async refreshSession(e) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._refreshSession(e));
  }
  async _refreshSession(e) {
    try {
      return await this._useSession(async (t) => {
        var r;
        if (!e) {
          const { data: o, error: a } = t;
          if (a)
            throw a;
          e = (r = o.session) !== null && r !== void 0 ? r : void 0;
        }
        if (!e?.refresh_token)
          throw new x();
        const { data: n, error: i } = await this._callRefreshToken(e.refresh_token);
        return i ? this._returnResult({ data: { user: null, session: null }, error: i }) : n ? this._returnResult({ data: { user: n.user, session: n }, error: null }) : this._returnResult({ data: { user: null, session: null }, error: null });
      });
    } catch (t) {
      if (m(t))
        return this._returnResult({ data: { user: null, session: null }, error: t });
      throw t;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(e, t) {
    try {
      if (!I())
        throw new we("No browser detected.");
      if (e.error || e.error_description || e.error_code)
        throw new we(e.error_description || "Error in URL with unspecified error_description", {
          error: e.error || "unspecified_error",
          code: e.error_code || "unspecified_code"
        });
      switch (t) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new wt("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new we("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (t === "pkce") {
        if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code)
          throw new wt("No code detected.");
        const { data: b, error: v } = await this._exchangeCodeForSession(e.code);
        if (v)
          throw v;
        const S = new URL(window.location.href);
        return S.searchParams.delete("code"), window.history.replaceState(window.history.state, "", S.toString()), { data: { session: b.session, redirectType: null }, error: null };
      }
      const { provider_token: r, provider_refresh_token: n, access_token: i, refresh_token: o, expires_in: a, expires_at: l, token_type: u } = e;
      if (!i || !a || !o || !u)
        throw new we("No session defined in URL");
      const c = Math.round(Date.now() / 1e3), d = parseInt(a);
      let f = c + d;
      l && (f = parseInt(l));
      const h = f - c;
      h * 1e3 <= oe && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${h}s, should have been closer to ${d}s`);
      const g = f - d;
      c - g >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", g, f, c) : c - g < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", g, f, c);
      const { data: _, error: p } = await this._getUser(i);
      if (p)
        throw p;
      const w = {
        provider_token: r,
        provider_refresh_token: n,
        access_token: i,
        expires_in: d,
        expires_at: f,
        refresh_token: o,
        token_type: u,
        user: _.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), this._returnResult({ data: { session: w, redirectType: e.type }, error: null });
    } catch (r) {
      if (m(r))
        return this._returnResult({ data: { session: null, redirectType: null }, error: r });
      throw r;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   */
  _isImplicitGrantCallback(e) {
    return !!(e.access_token || e.error_description);
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCECallback(e) {
    const t = await z(this.storage, `${this.storageKey}-code-verifier`);
    return !!(e.code && t);
  }
  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   */
  async signOut(e = { scope: "global" }) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(e));
  }
  async _signOut({ scope: e } = { scope: "global" }) {
    return await this._useSession(async (t) => {
      var r;
      const { data: n, error: i } = t;
      if (i)
        return this._returnResult({ error: i });
      const o = (r = n.session) === null || r === void 0 ? void 0 : r.access_token;
      if (o) {
        const { error: a } = await this.admin.signOut(o, e);
        if (a && !(us(a) && (a.status === 404 || a.status === 401 || a.status === 403)))
          return this._returnResult({ error: a });
      }
      return e !== "others" && (await this._removeSession(), await C(this.storage, `${this.storageKey}-code-verifier`)), this._returnResult({ error: null });
    });
  }
  onAuthStateChange(e) {
    const t = Bn(), r = {
      id: t,
      callback: e,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", t), this.stateChangeEmitters.delete(t);
      }
    };
    return this._debug("#onAuthStateChange()", "registered callback with id", t), this.stateChangeEmitters.set(t, r), (async () => (await this.initializePromise, await this._acquireLock(-1, async () => {
      this._emitInitialSession(t);
    })))(), { data: { subscription: r } };
  }
  async _emitInitialSession(e) {
    return await this._useSession(async (t) => {
      var r, n;
      try {
        const { data: { session: i }, error: o } = t;
        if (o)
          throw o;
        await ((r = this.stateChangeEmitters.get(e)) === null || r === void 0 ? void 0 : r.callback("INITIAL_SESSION", i)), this._debug("INITIAL_SESSION", "callback id", e, "session", i);
      } catch (i) {
        await ((n = this.stateChangeEmitters.get(e)) === null || n === void 0 ? void 0 : n.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", e, "error", i), console.error(i);
      }
    });
  }
  /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   */
  async resetPasswordForEmail(e, t = {}) {
    let r = null, n = null;
    this.flowType === "pkce" && ([r, n] = await se(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await E(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: r,
          code_challenge_method: n,
          gotrue_meta_security: { captcha_token: t.captchaToken }
        },
        headers: this.headers,
        redirectTo: t.redirectTo
      });
    } catch (i) {
      if (await C(this.storage, `${this.storageKey}-code-verifier`), m(i))
        return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  /**
   * Gets all the identities linked to a user.
   */
  async getUserIdentities() {
    var e;
    try {
      const { data: t, error: r } = await this.getUser();
      if (r)
        throw r;
      return this._returnResult({ data: { identities: (e = t.user.identities) !== null && e !== void 0 ? e : [] }, error: null });
    } catch (t) {
      if (m(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async linkIdentity(e) {
    return "token" in e ? this.linkIdentityIdToken(e) : this.linkIdentityOAuth(e);
  }
  async linkIdentityOAuth(e) {
    var t;
    try {
      const { data: r, error: n } = await this._useSession(async (i) => {
        var o, a, l, u, c;
        const { data: d, error: f } = i;
        if (f)
          throw f;
        const h = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
          redirectTo: (o = e.options) === null || o === void 0 ? void 0 : o.redirectTo,
          scopes: (a = e.options) === null || a === void 0 ? void 0 : a.scopes,
          queryParams: (l = e.options) === null || l === void 0 ? void 0 : l.queryParams,
          skipBrowserRedirect: !0
        });
        return await E(this.fetch, "GET", h, {
          headers: this.headers,
          jwt: (c = (u = d.session) === null || u === void 0 ? void 0 : u.access_token) !== null && c !== void 0 ? c : void 0
        });
      });
      if (n)
        throw n;
      return I() && !(!((t = e.options) === null || t === void 0) && t.skipBrowserRedirect) && window.location.assign(r?.url), this._returnResult({
        data: { provider: e.provider, url: r?.url },
        error: null
      });
    } catch (r) {
      if (m(r))
        return this._returnResult({ data: { provider: e.provider, url: null }, error: r });
      throw r;
    }
  }
  async linkIdentityIdToken(e) {
    return await this._useSession(async (t) => {
      var r;
      try {
        const { error: n, data: { session: i } } = t;
        if (n)
          throw n;
        const { options: o, provider: a, token: l, access_token: u, nonce: c } = e, d = await E(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
          headers: this.headers,
          jwt: (r = i?.access_token) !== null && r !== void 0 ? r : void 0,
          body: {
            provider: a,
            id_token: l,
            access_token: u,
            nonce: c,
            link_identity: !0,
            gotrue_meta_security: { captcha_token: o?.captchaToken }
          },
          xform: D
        }), { data: f, error: h } = d;
        return h ? this._returnResult({ data: { user: null, session: null }, error: h }) : !f || !f.session || !f.user ? this._returnResult({
          data: { user: null, session: null },
          error: new Y()
        }) : (f.session && (await this._saveSession(f.session), await this._notifyAllSubscribers("USER_UPDATED", f.session)), this._returnResult({ data: f, error: h }));
      } catch (n) {
        if (await C(this.storage, `${this.storageKey}-code-verifier`), m(n))
          return this._returnResult({ data: { user: null, session: null }, error: n });
        throw n;
      }
    });
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   */
  async unlinkIdentity(e) {
    try {
      return await this._useSession(async (t) => {
        var r, n;
        const { data: i, error: o } = t;
        if (o)
          throw o;
        return await E(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
          headers: this.headers,
          jwt: (n = (r = i.session) === null || r === void 0 ? void 0 : r.access_token) !== null && n !== void 0 ? n : void 0
        });
      });
    } catch (t) {
      if (m(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  async _refreshAccessToken(e) {
    const t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
    this._debug(t, "begin");
    try {
      const r = Date.now();
      return await Wn(async (n) => (n > 0 && await Mn(200 * Math.pow(2, n - 1)), this._debug(t, "refreshing attempt", n), await E(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: e },
        headers: this.headers,
        xform: D
      })), (n, i) => {
        const o = 200 * Math.pow(2, n);
        return i && Ue(i) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + o - r < oe;
      });
    } catch (r) {
      if (this._debug(t, "error", r), m(r))
        return this._returnResult({ data: { session: null, user: null }, error: r });
      throw r;
    } finally {
      this._debug(t, "end");
    }
  }
  _isValidSession(e) {
    return typeof e == "object" && e !== null && "access_token" in e && "refresh_token" in e && "expires_at" in e;
  }
  async _handleProviderSignIn(e, t) {
    const r = await this._getUrlForProvider(`${this.url}/authorize`, e, {
      redirectTo: t.redirectTo,
      scopes: t.scopes,
      queryParams: t.queryParams
    });
    return this._debug("#_handleProviderSignIn()", "provider", e, "options", t, "url", r), I() && !t.skipBrowserRedirect && window.location.assign(r), { data: { provider: e, url: r }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes the token
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var e, t;
    const r = "#_recoverAndRefresh()";
    this._debug(r, "begin");
    try {
      const n = await z(this.storage, this.storageKey);
      if (n && this.userStorage) {
        let o = await z(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer && Object.is(this.storage, this.userStorage) && !o && (o = { user: n.user }, await ae(this.userStorage, this.storageKey + "-user", o)), n.user = (e = o?.user) !== null && e !== void 0 ? e : st();
      } else if (n && !n.user && !n.user) {
        const o = await z(this.storage, this.storageKey + "-user");
        o && o?.user ? (n.user = o.user, await C(this.storage, this.storageKey + "-user"), await ae(this.storage, this.storageKey, n)) : n.user = st();
      }
      if (this._debug(r, "session from storage", n), !this._isValidSession(n)) {
        this._debug(r, "session is not valid"), n !== null && await this._removeSession();
        return;
      }
      const i = ((t = n.expires_at) !== null && t !== void 0 ? t : 1 / 0) * 1e3 - Date.now() < tt;
      if (this._debug(r, `session has${i ? "" : " not"} expired with margin of ${tt}s`), i) {
        if (this.autoRefreshToken && n.refresh_token) {
          const { error: o } = await this._callRefreshToken(n.refresh_token);
          o && (console.error(o), Ue(o) || (this._debug(r, "refresh failed with a non-retryable error, removing the session", o), await this._removeSession()));
        }
      } else if (n.user && n.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: o, error: a } = await this._getUser(n.access_token);
          !a && o?.user ? (n.user = o.user, await this._saveSession(n), await this._notifyAllSubscribers("SIGNED_IN", n)) : this._debug(r, "could not get user data, skipping SIGNED_IN notification");
        } catch (o) {
          console.error("Error getting user data:", o), this._debug(r, "error getting user data, skipping SIGNED_IN notification", o);
        }
      else
        await this._notifyAllSubscribers("SIGNED_IN", n);
    } catch (n) {
      this._debug(r, "error", n), console.error(n);
      return;
    } finally {
      this._debug(r, "end");
    }
  }
  async _callRefreshToken(e) {
    var t, r;
    if (!e)
      throw new x();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const n = `#_callRefreshToken(${e.substring(0, 5)}...)`;
    this._debug(n, "begin");
    try {
      this.refreshingDeferred = new ze();
      const { data: i, error: o } = await this._refreshAccessToken(e);
      if (o)
        throw o;
      if (!i.session)
        throw new x();
      await this._saveSession(i.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
      const a = { data: i.session, error: null };
      return this.refreshingDeferred.resolve(a), a;
    } catch (i) {
      if (this._debug(n, "error", i), m(i)) {
        const o = { data: null, error: i };
        return Ue(i) || await this._removeSession(), (t = this.refreshingDeferred) === null || t === void 0 || t.resolve(o), o;
      }
      throw (r = this.refreshingDeferred) === null || r === void 0 || r.reject(i), i;
    } finally {
      this.refreshingDeferred = null, this._debug(n, "end");
    }
  }
  async _notifyAllSubscribers(e, t, r = !0) {
    const n = `#_notifyAllSubscribers(${e})`;
    this._debug(n, "begin", t, `broadcast = ${r}`);
    try {
      this.broadcastChannel && r && this.broadcastChannel.postMessage({ event: e, session: t });
      const i = [], o = Array.from(this.stateChangeEmitters.values()).map(async (a) => {
        try {
          await a.callback(e, t);
        } catch (l) {
          i.push(l);
        }
      });
      if (await Promise.all(o), i.length > 0) {
        for (let a = 0; a < i.length; a += 1)
          console.error(i[a]);
        throw i[0];
      }
    } finally {
      this._debug(n, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(e) {
    this._debug("#_saveSession()", e), this.suppressGetSessionWarning = !0, await C(this.storage, `${this.storageKey}-code-verifier`);
    const t = Object.assign({}, e), r = t.user && t.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !r && t.user && await ae(this.userStorage, this.storageKey + "-user", {
        user: t.user
      });
      const n = Object.assign({}, t);
      delete n.user;
      const i = Jt(n);
      await ae(this.storage, this.storageKey, i);
    } else {
      const n = Jt(t);
      await ae(this.storage, this.storageKey, n);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()"), this.suppressGetSessionWarning = !1, await C(this.storage, this.storageKey), await C(this.storage, this.storageKey + "-code-verifier"), await C(this.storage, this.storageKey + "-user"), this.userStorage && await C(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  /**
   * Removes any registered visibilitychange callback.
   *
   * {@see #startAutoRefresh}
   * {@see #stopAutoRefresh}
   */
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const e = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      e && I() && window?.removeEventListener && window.removeEventListener("visibilitychange", e);
    } catch (t) {
      console.error("removing visibilitychange callback failed", t);
    }
  }
  /**
   * This is the private implementation of {@link #startAutoRefresh}. Use this
   * within the library.
   */
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const e = setInterval(() => this._autoRefreshTokenTick(), oe);
    this.autoRefreshTicker = e, e && typeof e == "object" && typeof e.unref == "function" ? e.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(e), setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
  }
  /**
   * This is the private implementation of {@link #stopAutoRefresh}. Use this
   * within the library.
   */
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const e = this.autoRefreshTicker;
    this.autoRefreshTicker = null, e && clearInterval(e);
  }
  /**
   * Starts an auto-refresh process in the background. The session is checked
   * every few seconds. Close to the time of expiration a process is started to
   * refresh the session. If refreshing fails it will be retried for as long as
   * necessary.
   *
   * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
   * to call this function, it will be called for you.
   *
   * On browsers the refresh process works only when the tab/window is in the
   * foreground to conserve resources as well as prevent race conditions and
   * flooding auth with requests. If you call this method any managed
   * visibility change callback will be removed and you must manage visibility
   * changes on your own.
   *
   * On non-browser platforms the refresh process works *continuously* in the
   * background, which may not be desirable. You should hook into your
   * platform's foreground indication mechanism and call these methods
   * appropriately to conserve resources.
   *
   * {@see #stopAutoRefresh}
   */
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  /**
   * Stops an active auto refresh process running in the background (if any).
   *
   * If you call this method any managed visibility change callback will be
   * removed and you must manage visibility changes on your own.
   *
   * See {@link #startAutoRefresh} for more details.
   */
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  /**
   * Runs the auto refresh token tick.
   */
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const e = Date.now();
          try {
            return await this._useSession(async (t) => {
              const { data: { session: r } } = t;
              if (!r || !r.refresh_token || !r.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const n = Math.floor((r.expires_at * 1e3 - e) / oe);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${n} ticks, a tick lasts ${oe}ms, refresh threshold is ${_t} ticks`), n <= _t && await this._callRefreshToken(r.refresh_token);
            });
          } catch (t) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", t);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (e.isAcquireTimeout || e instanceof Rt)
        this._debug("auto refresh token tick lock not available");
      else
        throw e;
    }
  }
  /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */
  async _handleVisibilityChange() {
    if (this._debug("#_handleVisibilityChange()"), !I() || !window?.addEventListener)
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1), window?.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
    } catch (e) {
      console.error("_handleVisibilityChange", e);
    }
  }
  /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */
  async _onVisibilityChanged(e) {
    const t = `#_onVisibilityChanged(${e})`;
    this._debug(t, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), e || (await this.initializePromise, await this._acquireLock(-1, async () => {
      if (document.visibilityState !== "visible") {
        this._debug(t, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
        return;
      }
      await this._recoverAndRefresh();
    }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
  }
  /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */
  async _getUrlForProvider(e, t, r) {
    const n = [`provider=${encodeURIComponent(t)}`];
    if (r?.redirectTo && n.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`), r?.scopes && n.push(`scopes=${encodeURIComponent(r.scopes)}`), this.flowType === "pkce") {
      const [i, o] = await se(this.storage, this.storageKey), a = new URLSearchParams({
        code_challenge: `${encodeURIComponent(i)}`,
        code_challenge_method: `${encodeURIComponent(o)}`
      });
      n.push(a.toString());
    }
    if (r?.queryParams) {
      const i = new URLSearchParams(r.queryParams);
      n.push(i.toString());
    }
    return r?.skipBrowserRedirect && n.push(`skip_http_redirect=${r.skipBrowserRedirect}`), `${e}?${n.join("&")}`;
  }
  async _unenroll(e) {
    try {
      return await this._useSession(async (t) => {
        var r;
        const { data: n, error: i } = t;
        return i ? this._returnResult({ data: null, error: i }) : await E(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
          headers: this.headers,
          jwt: (r = n?.session) === null || r === void 0 ? void 0 : r.access_token
        });
      });
    } catch (t) {
      if (m(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async _enroll(e) {
    try {
      return await this._useSession(async (t) => {
        var r, n;
        const { data: i, error: o } = t;
        if (o)
          return this._returnResult({ data: null, error: o });
        const a = Object.assign({ friendly_name: e.friendlyName, factor_type: e.factorType }, e.factorType === "phone" ? { phone: e.phone } : e.factorType === "totp" ? { issuer: e.issuer } : {}), { data: l, error: u } = await E(this.fetch, "POST", `${this.url}/factors`, {
          body: a,
          headers: this.headers,
          jwt: (r = i?.session) === null || r === void 0 ? void 0 : r.access_token
        });
        return u ? this._returnResult({ data: null, error: u }) : (e.factorType === "totp" && l.type === "totp" && (!((n = l?.totp) === null || n === void 0) && n.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`), this._returnResult({ data: l, error: null }));
      });
    } catch (t) {
      if (m(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async _verify(e) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (t) => {
          var r;
          const { data: n, error: i } = t;
          if (i)
            return this._returnResult({ data: null, error: i });
          const o = Object.assign({ challenge_id: e.challengeId }, "webauthn" in e ? {
            webauthn: Object.assign(Object.assign({}, e.webauthn), { credential_response: e.webauthn.type === "create" ? wi(e.webauthn.credential_response) : yi(e.webauthn.credential_response) })
          } : { code: e.code }), { data: a, error: l } = await E(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
            body: o,
            headers: this.headers,
            jwt: (r = n?.session) === null || r === void 0 ? void 0 : r.access_token
          });
          return l ? this._returnResult({ data: null, error: l }) : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + a.expires_in }, a)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a), this._returnResult({ data: a, error: l }));
        });
      } catch (t) {
        if (m(t))
          return this._returnResult({ data: null, error: t });
        throw t;
      }
    });
  }
  async _challenge(e) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (t) => {
          var r;
          const { data: n, error: i } = t;
          if (i)
            return this._returnResult({ data: null, error: i });
          const o = await E(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
            body: e,
            headers: this.headers,
            jwt: (r = n?.session) === null || r === void 0 ? void 0 : r.access_token
          });
          if (o.error)
            return o;
          const { data: a } = o;
          if (a.type !== "webauthn")
            return { data: a, error: null };
          switch (a.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, a), { webauthn: Object.assign(Object.assign({}, a.webauthn), { credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: _i(a.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, a), { webauthn: Object.assign(Object.assign({}, a.webauthn), { credential_options: Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: vi(a.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
          }
        });
      } catch (t) {
        if (m(t))
          return this._returnResult({ data: null, error: t });
        throw t;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(e) {
    const { data: t, error: r } = await this._challenge({
      factorId: e.factorId
    });
    return r ? this._returnResult({ data: null, error: r }) : await this._verify({
      factorId: e.factorId,
      challengeId: t.id,
      code: e.code
    });
  }
  /**
   * {@see GoTrueMFAApi#listFactors}
   */
  async _listFactors() {
    var e;
    const { data: { user: t }, error: r } = await this.getUser();
    if (r)
      return { data: null, error: r };
    const n = {
      all: [],
      phone: [],
      totp: [],
      webauthn: []
    };
    for (const i of (e = t?.factors) !== null && e !== void 0 ? e : [])
      n.all.push(i), i.status === "verified" && n[i.factor_type].push(i);
    return {
      data: n,
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel() {
    var e, t;
    const { data: { session: r }, error: n } = await this.getSession();
    if (n)
      return this._returnResult({ data: null, error: n });
    if (!r)
      return {
        data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
        error: null
      };
    const { payload: i } = rt(r.access_token);
    let o = null;
    i.aal && (o = i.aal);
    let a = o;
    ((t = (e = r.user.factors) === null || e === void 0 ? void 0 : e.filter((c) => c.status === "verified")) !== null && t !== void 0 ? t : []).length > 0 && (a = "aal2");
    const u = i.amr || [];
    return { data: { currentLevel: o, nextLevel: a, currentAuthenticationMethods: u }, error: null };
  }
  /**
   * Retrieves details about an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * Returns authorization details including client info, scopes, and user information.
   * If the API returns a redirect_uri, it means consent was already given - the caller
   * should handle the redirect manually if needed.
   */
  async _getAuthorizationDetails(e) {
    try {
      return await this._useSession(async (t) => {
        const { data: { session: r }, error: n } = t;
        return n ? this._returnResult({ data: null, error: n }) : r ? await E(this.fetch, "GET", `${this.url}/oauth/authorizations/${e}`, {
          headers: this.headers,
          jwt: r.access_token,
          xform: (i) => ({ data: i, error: null })
        }) : this._returnResult({ data: null, error: new x() });
      });
    } catch (t) {
      if (m(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  /**
   * Approves an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _approveAuthorization(e, t) {
    try {
      return await this._useSession(async (r) => {
        const { data: { session: n }, error: i } = r;
        if (i)
          return this._returnResult({ data: null, error: i });
        if (!n)
          return this._returnResult({ data: null, error: new x() });
        const o = await E(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
          headers: this.headers,
          jwt: n.access_token,
          body: { action: "approve" },
          xform: (a) => ({ data: a, error: null })
        });
        return o.data && o.data.redirect_url && I() && !t?.skipBrowserRedirect && window.location.assign(o.data.redirect_url), o;
      });
    } catch (r) {
      if (m(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Denies an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _denyAuthorization(e, t) {
    try {
      return await this._useSession(async (r) => {
        const { data: { session: n }, error: i } = r;
        if (i)
          return this._returnResult({ data: null, error: i });
        if (!n)
          return this._returnResult({ data: null, error: new x() });
        const o = await E(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
          headers: this.headers,
          jwt: n.access_token,
          body: { action: "deny" },
          xform: (a) => ({ data: a, error: null })
        });
        return o.data && o.data.redirect_url && I() && !t?.skipBrowserRedirect && window.location.assign(o.data.redirect_url), o;
      });
    } catch (r) {
      if (m(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Lists all OAuth grants that the authenticated user has authorized.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (e) => {
        const { data: { session: t }, error: r } = e;
        return r ? this._returnResult({ data: null, error: r }) : t ? await E(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: t.access_token,
          xform: (n) => ({ data: n, error: null })
        }) : this._returnResult({ data: null, error: new x() });
      });
    } catch (e) {
      if (m(e))
        return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  /**
   * Revokes a user's OAuth grant for a specific client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _revokeOAuthGrant(e) {
    try {
      return await this._useSession(async (t) => {
        const { data: { session: r }, error: n } = t;
        return n ? this._returnResult({ data: null, error: n }) : r ? (await E(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: r.access_token,
          query: { client_id: e.clientId },
          noResolveJson: !0
        }), { data: {}, error: null }) : this._returnResult({ data: null, error: new x() });
      });
    } catch (t) {
      if (m(t))
        return this._returnResult({ data: null, error: t });
      throw t;
    }
  }
  async fetchJwk(e, t = { keys: [] }) {
    let r = t.keys.find((a) => a.kid === e);
    if (r)
      return r;
    const n = Date.now();
    if (r = this.jwks.keys.find((a) => a.kid === e), r && this.jwks_cached_at + Cn > n)
      return r;
    const { data: i, error: o } = await E(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (o)
      throw o;
    return !i.keys || i.keys.length === 0 || (this.jwks = i, this.jwks_cached_at = n, r = i.keys.find((a) => a.kid === e), !r) ? null : r;
  }
  /**
   * Extracts the JWT claims present in the access token by first verifying the
   * JWT against the server's JSON Web Key Set endpoint
   * `/.well-known/jwks.json` which is often cached, resulting in significantly
   * faster responses. Prefer this method over {@link #getUser} which always
   * sends a request to the Auth server for each JWT.
   *
   * If the project is not using an asymmetric JWT signing key (like ECC or
   * RSA) it always sends a request to the Auth server (similar to {@link
   * #getUser}) to verify the JWT.
   *
   * @param jwt An optional specific JWT you wish to verify, not the one you
   *            can obtain from {@link #getSession}.
   * @param options Various additional options that allow you to customize the
   *                behavior of this method.
   */
  async getClaims(e, t = {}) {
    try {
      let r = e;
      if (!r) {
        const { data: h, error: g } = await this.getSession();
        if (g || !h.session)
          return this._returnResult({ data: null, error: g });
        r = h.session.access_token;
      }
      const { header: n, payload: i, signature: o, raw: { header: a, payload: l } } = rt(r);
      t?.allowExpired || Yn(i.exp);
      const u = !n.alg || n.alg.startsWith("HS") || !n.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(n.kid, t?.keys ? { keys: t.keys } : t?.jwks);
      if (!u) {
        const { error: h } = await this.getUser(r);
        if (h)
          throw h;
        return {
          data: {
            claims: i,
            header: n,
            signature: o
          },
          error: null
        };
      }
      const c = Qn(n.alg), d = await crypto.subtle.importKey("jwk", u, c, !0, [
        "verify"
      ]);
      if (!await crypto.subtle.verify(c, d, o, Dn(`${a}.${l}`)))
        throw new Me("Invalid JWT signature");
      return {
        data: {
          claims: i,
          header: n,
          signature: o
        },
        error: null
      };
    } catch (r) {
      if (m(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
};
jt.nextInstanceID = {};
const Ri = At, ji = jt, Pi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AuthAdminApi: Ri,
  AuthApiError: ls,
  AuthClient: ji,
  AuthError: he,
  AuthImplicitGrantRedirectError: we,
  AuthInvalidCredentialsError: ve,
  AuthInvalidJwtError: Me,
  AuthInvalidTokenResponseError: Y,
  AuthPKCEGrantCodeExchangeError: wt,
  AuthRetryableFetchError: Fe,
  AuthSessionMissingError: x,
  AuthUnknownError: H,
  AuthWeakPasswordError: yt,
  CustomAuthError: V,
  GoTrueAdminApi: At,
  GoTrueClient: jt,
  NavigatorLockAcquireTimeoutError: ps,
  SIGN_OUT_SCOPES: Ne,
  isAuthApiError: us,
  isAuthError: m,
  isAuthImplicitGrantRedirectError: hs,
  isAuthRetryableFetchError: Ue,
  isAuthSessionMissingError: cs,
  isAuthWeakPasswordError: In,
  lockInternals: X,
  navigatorLock: _s,
  processLock: ai
}, Symbol.toStringTag, { value: "Module" })), ys = /* @__PURE__ */ me(Pi);
var rr;
function Ci() {
  if (rr) return pe;
  rr = 1, Object.defineProperty(pe, "__esModule", { value: !0 }), pe.SupabaseAuthClient = void 0;
  const s = ys;
  let e = class extends s.AuthClient {
    constructor(r) {
      super(r);
    }
  };
  return pe.SupabaseAuthClient = e, pe;
}
var sr;
function nr() {
  if (sr) return Oe;
  sr = 1, Object.defineProperty(Oe, "__esModule", { value: !0 });
  const s = Ir, e = Lr(), t = Hr, r = En, n = /* @__PURE__ */ On(), i = /* @__PURE__ */ Tn(), o = /* @__PURE__ */ kn(), a = /* @__PURE__ */ Ci();
  class l {
    /**
     * Create a new client for use in the browser.
     * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
     * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
     * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
     * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
     * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
     * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
     * @param options.realtime Options passed along to realtime-js constructor.
     * @param options.storage Options passed along to the storage-js constructor.
     * @param options.global.fetch A custom fetch implementation.
     * @param options.global.headers Any additional headers to send with each network request.
     * @example
     * ```ts
     * import { createClient } from '@supabase/supabase-js'
     *
     * const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
     * const { data } = await supabase.from('profiles').select('*')
     * ```
     */
    constructor(c, d, f) {
      var h, g, _;
      this.supabaseUrl = c, this.supabaseKey = d;
      const p = (0, o.validateSupabaseUrl)(c);
      if (!d)
        throw new Error("supabaseKey is required.");
      this.realtimeUrl = new URL("realtime/v1", p), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", p), this.storageUrl = new URL("storage/v1", p), this.functionsUrl = new URL("functions/v1", p);
      const w = `sb-${p.hostname.split(".")[0]}-auth-token`, b = {
        db: n.DEFAULT_DB_OPTIONS,
        realtime: n.DEFAULT_REALTIME_OPTIONS,
        auth: Object.assign(Object.assign({}, n.DEFAULT_AUTH_OPTIONS), { storageKey: w }),
        global: n.DEFAULT_GLOBAL_OPTIONS
      }, v = (0, o.applySettingDefaults)(f ?? {}, b);
      this.storageKey = (h = v.auth.storageKey) !== null && h !== void 0 ? h : "", this.headers = (g = v.global.headers) !== null && g !== void 0 ? g : {}, v.accessToken ? (this.accessToken = v.accessToken, this.auth = new Proxy({}, {
        get: (S, T) => {
          throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(T)} is not possible`);
        }
      })) : this.auth = this._initSupabaseAuthClient((_ = v.auth) !== null && _ !== void 0 ? _ : {}, this.headers, v.global.fetch), this.fetch = (0, i.fetchWithAuth)(d, this._getAccessToken.bind(this), v.global.fetch), this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers, accessToken: this._getAccessToken.bind(this) }, v.realtime)), this.accessToken && this.accessToken().then((S) => this.realtime.setAuth(S)).catch((S) => console.warn("Failed to set initial Realtime auth token:", S)), this.rest = new e.PostgrestClient(new URL("rest/v1", p).href, {
        headers: this.headers,
        schema: v.db.schema,
        fetch: this.fetch
      }), this.storage = new r.StorageClient(this.storageUrl.href, this.headers, this.fetch, f?.storage), v.accessToken || this._listenForAuthEvents();
    }
    /**
     * Supabase Functions allows you to deploy and invoke edge functions.
     */
    get functions() {
      return new s.FunctionsClient(this.functionsUrl.href, {
        headers: this.headers,
        customFetch: this.fetch
      });
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */
    from(c) {
      return this.rest.from(c);
    }
    // NOTE: signatures must be kept in sync with PostgrestClient.schema
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */
    schema(c) {
      return this.rest.schema(c);
    }
    // NOTE: signatures must be kept in sync with PostgrestClient.rpc
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.get - When set to `true`, the function will be called with
     * read-only access mode.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    rpc(c, d = {}, f = {
      head: !1,
      get: !1,
      count: void 0
    }) {
      return this.rest.rpc(c, d, f);
    }
    /**
     * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
     *
     * @param {string} name - The name of the Realtime channel.
     * @param {Object} opts - The options to pass to the Realtime channel.
     *
     */
    channel(c, d = { config: {} }) {
      return this.realtime.channel(c, d);
    }
    /**
     * Returns all Realtime channels.
     */
    getChannels() {
      return this.realtime.getChannels();
    }
    /**
     * Unsubscribes and removes Realtime channel from Realtime client.
     *
     * @param {RealtimeChannel} channel - The name of the Realtime channel.
     *
     */
    removeChannel(c) {
      return this.realtime.removeChannel(c);
    }
    /**
     * Unsubscribes and removes all Realtime channels from Realtime client.
     */
    removeAllChannels() {
      return this.realtime.removeAllChannels();
    }
    async _getAccessToken() {
      var c, d;
      if (this.accessToken)
        return await this.accessToken();
      const { data: f } = await this.auth.getSession();
      return (d = (c = f.session) === null || c === void 0 ? void 0 : c.access_token) !== null && d !== void 0 ? d : this.supabaseKey;
    }
    _initSupabaseAuthClient({ autoRefreshToken: c, persistSession: d, detectSessionInUrl: f, storage: h, userStorage: g, storageKey: _, flowType: p, lock: w, debug: b, throwOnError: v }, S, T) {
      const O = {
        Authorization: `Bearer ${this.supabaseKey}`,
        apikey: `${this.supabaseKey}`
      };
      return new a.SupabaseAuthClient({
        url: this.authUrl.href,
        headers: Object.assign(Object.assign({}, O), S),
        storageKey: _,
        autoRefreshToken: c,
        persistSession: d,
        detectSessionInUrl: f,
        storage: h,
        userStorage: g,
        flowType: p,
        lock: w,
        debug: b,
        throwOnError: v,
        fetch: T,
        // auth checks if there is a custom authorizaiton header using this flag
        // so it knows whether to return an error when getUser is called with no session
        hasCustomAuthorizationHeader: Object.keys(this.headers).some((R) => R.toLowerCase() === "authorization")
      });
    }
    _initRealtimeClient(c) {
      return new t.RealtimeClient(this.realtimeUrl.href, Object.assign(Object.assign({}, c), { params: Object.assign({ apikey: this.supabaseKey }, c?.params) }));
    }
    _listenForAuthEvents() {
      return this.auth.onAuthStateChange((d, f) => {
        this._handleTokenChanged(d, "CLIENT", f?.access_token);
      });
    }
    _handleTokenChanged(c, d, f) {
      (c === "TOKEN_REFRESHED" || c === "SIGNED_IN") && this.changedAccessToken !== f ? (this.changedAccessToken = f, this.realtime.setAuth(f)) : c === "SIGNED_OUT" && (this.realtime.setAuth(), d == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
    }
  }
  return Oe.default = l, Oe;
}
var ir;
function Ii() {
  return ir || (ir = 1, (function(s) {
    var e = M && M.__createBinding || (Object.create ? (function(c, d, f, h) {
      h === void 0 && (h = f);
      var g = Object.getOwnPropertyDescriptor(d, f);
      (!g || ("get" in g ? !d.__esModule : g.writable || g.configurable)) && (g = { enumerable: !0, get: function() {
        return d[f];
      } }), Object.defineProperty(c, h, g);
    }) : (function(c, d, f, h) {
      h === void 0 && (h = f), c[h] = d[f];
    })), t = M && M.__exportStar || function(c, d) {
      for (var f in c) f !== "default" && !Object.prototype.hasOwnProperty.call(d, f) && e(d, c, f);
    }, r = M && M.__importDefault || function(c) {
      return c && c.__esModule ? c : { default: c };
    };
    Object.defineProperty(s, "__esModule", { value: !0 }), s.createClient = s.SupabaseClient = s.FunctionRegion = s.FunctionsError = s.FunctionsRelayError = s.FunctionsFetchError = s.FunctionsHttpError = s.PostgrestError = void 0;
    const n = r(/* @__PURE__ */ nr());
    t(ys, s);
    var i = Lr();
    Object.defineProperty(s, "PostgrestError", { enumerable: !0, get: function() {
      return i.PostgrestError;
    } });
    var o = Ir;
    Object.defineProperty(s, "FunctionsHttpError", { enumerable: !0, get: function() {
      return o.FunctionsHttpError;
    } }), Object.defineProperty(s, "FunctionsFetchError", { enumerable: !0, get: function() {
      return o.FunctionsFetchError;
    } }), Object.defineProperty(s, "FunctionsRelayError", { enumerable: !0, get: function() {
      return o.FunctionsRelayError;
    } }), Object.defineProperty(s, "FunctionsError", { enumerable: !0, get: function() {
      return o.FunctionsError;
    } }), Object.defineProperty(s, "FunctionRegion", { enumerable: !0, get: function() {
      return o.FunctionRegion;
    } }), t(Hr, s);
    var a = /* @__PURE__ */ nr();
    Object.defineProperty(s, "SupabaseClient", { enumerable: !0, get: function() {
      return r(a).default;
    } });
    const l = (c, d, f) => new n.default(c, d, f);
    s.createClient = l;
    function u() {
      if (typeof window < "u" || typeof process > "u")
        return !1;
      const c = process.version;
      if (c == null)
        return !1;
      const d = c.match(/^v(\d+)\./);
      return d ? parseInt(d[1], 10) <= 18 : !1;
    }
    u() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
  })(M)), M;
}
var bs = /* @__PURE__ */ Ii();
const ms = /* @__PURE__ */ Ss(bs), $i = /* @__PURE__ */ Es({
  __proto__: null,
  default: ms
}, [bs]), {
  PostgrestError: ao,
  FunctionsHttpError: lo,
  FunctionsFetchError: uo,
  FunctionsRelayError: co,
  FunctionsError: ho,
  FunctionRegion: fo,
  SupabaseClient: go,
  createClient: xi,
  GoTrueAdminApi: po,
  GoTrueClient: _o,
  AuthAdminApi: vo,
  AuthClient: wo,
  navigatorLock: yo,
  NavigatorLockAcquireTimeoutError: bo,
  lockInternals: mo,
  processLock: Eo,
  SIGN_OUT_SCOPES: So,
  AuthError: Oo,
  AuthApiError: To,
  AuthUnknownError: ko,
  CustomAuthError: Ao,
  AuthSessionMissingError: Ro,
  AuthInvalidTokenResponseError: jo,
  AuthInvalidCredentialsError: Po,
  AuthImplicitGrantRedirectError: Co,
  AuthPKCEGrantCodeExchangeError: Io,
  AuthRetryableFetchError: $o,
  AuthWeakPasswordError: xo,
  AuthInvalidJwtError: Uo,
  isAuthError: No,
  isAuthApiError: Do,
  isAuthSessionMissingError: Lo,
  isAuthImplicitGrantRedirectError: Bo,
  isAuthRetryableFetchError: qo,
  isAuthWeakPasswordError: Fo,
  RealtimePresence: Mo,
  RealtimeChannel: Wo,
  RealtimeClient: Vo,
  REALTIME_LISTEN_TYPES: Ko,
  REALTIME_POSTGRES_CHANGES_LISTEN_EVENT: Ho,
  REALTIME_PRESENCE_LISTEN_EVENTS: Go,
  REALTIME_SUBSCRIBE_STATES: Jo,
  REALTIME_CHANNEL_STATES: zo
} = ms || $i, Ui = "https://svtbqnysmjffbstuotwd.supabase.co", Ni = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2dGJxbnlzbWpmZmJzdHVvdHdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2OTE4NDcsImV4cCI6MjA3OTI2Nzg0N30.5DTPDygrRnQDW5W-NadS7cYr_PmQuVGC5K8BXWBsqtQ", Yo = xi(Ui, Ni);
export {
  Yo as supabase
};
