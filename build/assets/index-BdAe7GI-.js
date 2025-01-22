(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function kc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Js = { exports: {} },
  ol = {},
  bs = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var er = Symbol.for("react.element"),
  xc = Symbol.for("react.portal"),
  wc = Symbol.for("react.fragment"),
  Sc = Symbol.for("react.strict_mode"),
  jc = Symbol.for("react.profiler"),
  Nc = Symbol.for("react.provider"),
  Cc = Symbol.for("react.context"),
  Ec = Symbol.for("react.forward_ref"),
  Lc = Symbol.for("react.suspense"),
  Pc = Symbol.for("react.memo"),
  zc = Symbol.for("react.lazy"),
  Uo = Symbol.iterator;
function Mc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Uo && e[Uo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var eu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  tu = Object.assign,
  nu = {};
function cn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = nu),
    (this.updater = n || eu);
}
cn.prototype.isReactComponent = {};
cn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
cn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ru() {}
ru.prototype = cn.prototype;
function Wi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = nu),
    (this.updater = n || eu);
}
var Qi = (Wi.prototype = new ru());
Qi.constructor = Wi;
tu(Qi, cn.prototype);
Qi.isPureReactComponent = !0;
var Ho = Array.isArray,
  lu = Object.prototype.hasOwnProperty,
  qi = { current: null },
  iu = { key: !0, ref: !0, __self: !0, __source: !0 };
function ou(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      lu.call(t, r) && !iu.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), d = 0; d < u; d++) a[d] = arguments[d + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: er,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: qi.current,
  };
}
function Tc(e, t) {
  return {
    $$typeof: er,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ki(e) {
  return typeof e == "object" && e !== null && e.$$typeof === er;
}
function Oc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Vo = /\/+/g;
function Nl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Oc("" + e.key)
    : t.toString(36);
}
function jr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case er:
          case xc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Nl(o, 0) : r),
      Ho(l)
        ? ((n = ""),
          e != null && (n = e.replace(Vo, "$&/") + "/"),
          jr(l, t, n, "", function (d) {
            return d;
          }))
        : l != null &&
          (Ki(l) &&
            (l = Tc(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Vo, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Ho(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var a = r + Nl(i, u);
      o += jr(i, t, n, a, l);
    }
  else if (((a = Mc(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Nl(i, u++)), (o += jr(i, t, n, a, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function sr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    jr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Rc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  Nr = { transition: null },
  Dc = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: Nr,
    ReactCurrentOwner: qi,
  };
function su() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = {
  map: sr,
  forEach: function (e, t, n) {
    sr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      sr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      sr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ki(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = cn;
z.Fragment = wc;
z.Profiler = jc;
z.PureComponent = Wi;
z.StrictMode = Sc;
z.Suspense = Lc;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dc;
z.act = su;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = tu({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = qi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      lu.call(t, a) &&
        !iu.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var d = 0; d < a; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: er, type: e.type, key: l, ref: i, props: r, _owner: o };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: Cc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Nc, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = ou;
z.createFactory = function (e) {
  var t = ou.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: Ec, render: e };
};
z.isValidElement = Ki;
z.lazy = function (e) {
  return { $$typeof: zc, _payload: { _status: -1, _result: e }, _init: Rc };
};
z.memo = function (e, t) {
  return { $$typeof: Pc, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Nr.transition;
  Nr.transition = {};
  try {
    e();
  } finally {
    Nr.transition = t;
  }
};
z.unstable_act = su;
z.useCallback = function (e, t) {
  return ue.current.useCallback(e, t);
};
z.useContext = function (e) {
  return ue.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return ue.current.useEffect(e, t);
};
z.useId = function () {
  return ue.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return ue.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return ue.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return ue.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return ue.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return ue.current.useRef(e);
};
z.useState = function (e) {
  return ue.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return ue.current.useTransition();
};
z.version = "18.3.1";
bs.exports = z;
var Oe = bs.exports;
const it = kc(Oe);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ic = Oe,
  Fc = Symbol.for("react.element"),
  Bc = Symbol.for("react.fragment"),
  Ac = Object.prototype.hasOwnProperty,
  Uc = Ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Hc = { key: !0, ref: !0, __self: !0, __source: !0 };
function uu(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Ac.call(t, r) && !Hc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Fc,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Uc.current,
  };
}
ol.Fragment = Bc;
ol.jsx = uu;
ol.jsxs = uu;
Js.exports = ol;
var s = Js.exports,
  Gl = {},
  au = { exports: {} },
  _e = {},
  cu = { exports: {} },
  du = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, L) {
    var P = j.length;
    j.push(L);
    e: for (; 0 < P; ) {
      var W = (P - 1) >>> 1,
        X = j[W];
      if (0 < l(X, L)) (j[W] = L), (j[P] = X), (P = W);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var L = j[0],
      P = j.pop();
    if (P !== L) {
      j[0] = P;
      e: for (var W = 0, X = j.length, ir = X >>> 1; W < ir; ) {
        var kt = 2 * (W + 1) - 1,
          jl = j[kt],
          xt = kt + 1,
          or = j[xt];
        if (0 > l(jl, P))
          xt < X && 0 > l(or, jl)
            ? ((j[W] = or), (j[xt] = P), (W = xt))
            : ((j[W] = jl), (j[kt] = P), (W = kt));
        else if (xt < X && 0 > l(or, P)) (j[W] = or), (j[xt] = P), (W = xt);
        else break e;
      }
    }
    return L;
  }
  function l(j, L) {
    var P = j.sortIndex - L.sortIndex;
    return P !== 0 ? P : j.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var a = [],
    d = [],
    v = 1,
    m = null,
    h = 3,
    _ = !1,
    k = !1,
    x = !1,
    F = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(j) {
    for (var L = n(d); L !== null; ) {
      if (L.callback === null) r(d);
      else if (L.startTime <= j)
        r(d), (L.sortIndex = L.expirationTime), t(a, L);
      else break;
      L = n(d);
    }
  }
  function g(j) {
    if (((x = !1), p(j), !k))
      if (n(a) !== null) (k = !0), wl(S);
      else {
        var L = n(d);
        L !== null && Sl(g, L.startTime - j);
      }
  }
  function S(j, L) {
    (k = !1), x && ((x = !1), f(E), (E = -1)), (_ = !0);
    var P = h;
    try {
      for (
        p(L), m = n(a);
        m !== null && (!(m.expirationTime > L) || (j && !Ee()));

      ) {
        var W = m.callback;
        if (typeof W == "function") {
          (m.callback = null), (h = m.priorityLevel);
          var X = W(m.expirationTime <= L);
          (L = e.unstable_now()),
            typeof X == "function" ? (m.callback = X) : m === n(a) && r(a),
            p(L);
        } else r(a);
        m = n(a);
      }
      if (m !== null) var ir = !0;
      else {
        var kt = n(d);
        kt !== null && Sl(g, kt.startTime - L), (ir = !1);
      }
      return ir;
    } finally {
      (m = null), (h = P), (_ = !1);
    }
  }
  var N = !1,
    C = null,
    E = -1,
    $ = 5,
    M = -1;
  function Ee() {
    return !(e.unstable_now() - M < $);
  }
  function pn() {
    if (C !== null) {
      var j = e.unstable_now();
      M = j;
      var L = !0;
      try {
        L = C(!0, j);
      } finally {
        L ? hn() : ((N = !1), (C = null));
      }
    } else N = !1;
  }
  var hn;
  if (typeof c == "function")
    hn = function () {
      c(pn);
    };
  else if (typeof MessageChannel < "u") {
    var Ao = new MessageChannel(),
      _c = Ao.port2;
    (Ao.port1.onmessage = pn),
      (hn = function () {
        _c.postMessage(null);
      });
  } else
    hn = function () {
      F(pn, 0);
    };
  function wl(j) {
    (C = j), N || ((N = !0), hn());
  }
  function Sl(j, L) {
    E = F(function () {
      j(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      k || _ || ((k = !0), wl(S));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : ($ = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (j) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = h;
      }
      var P = h;
      h = L;
      try {
        return j();
      } finally {
        h = P;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, L) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var P = h;
      h = j;
      try {
        return L();
      } finally {
        h = P;
      }
    }),
    (e.unstable_scheduleCallback = function (j, L, P) {
      var W = e.unstable_now();
      switch (
        (typeof P == "object" && P !== null
          ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? W + P : W))
          : (P = W),
        j)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = P + X),
        (j = {
          id: v++,
          callback: L,
          priorityLevel: j,
          startTime: P,
          expirationTime: X,
          sortIndex: -1,
        }),
        P > W
          ? ((j.sortIndex = P),
            t(d, j),
            n(a) === null &&
              j === n(d) &&
              (x ? (f(E), (E = -1)) : (x = !0), Sl(g, P - W)))
          : ((j.sortIndex = X), t(a, j), k || _ || ((k = !0), wl(S))),
        j
      );
    }),
    (e.unstable_shouldYield = Ee),
    (e.unstable_wrapCallback = function (j) {
      var L = h;
      return function () {
        var P = h;
        h = L;
        try {
          return j.apply(this, arguments);
        } finally {
          h = P;
        }
      };
    });
})(du);
cu.exports = du;
var Vc = cu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $c = Oe,
  ye = Vc;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var fu = new Set(),
  In = {};
function Dt(e, t) {
  nn(e, t), nn(e + "Capture", t);
}
function nn(e, t) {
  for (In[e] = t, e = 0; e < t.length; e++) fu.add(t[e]);
}
var Ke = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Jl = Object.prototype.hasOwnProperty,
  Wc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  $o = {},
  Wo = {};
function Qc(e) {
  return Jl.call(Wo, e)
    ? !0
    : Jl.call($o, e)
    ? !1
    : Wc.test(e)
    ? (Wo[e] = !0)
    : (($o[e] = !0), !1);
}
function qc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Kc(e, t, n, r) {
  if (t === null || typeof t > "u" || qc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ae(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Zi = /[\-:]([a-z])/g;
function Yi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Zi, Yi);
    te[t] = new ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Zi, Yi);
    te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Zi, Yi);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xi(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Kc(t, n, l, r) && (n = null),
    r || l === null
      ? Qc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ge = $c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ur = Symbol.for("react.element"),
  Bt = Symbol.for("react.portal"),
  At = Symbol.for("react.fragment"),
  Gi = Symbol.for("react.strict_mode"),
  bl = Symbol.for("react.profiler"),
  pu = Symbol.for("react.provider"),
  hu = Symbol.for("react.context"),
  Ji = Symbol.for("react.forward_ref"),
  ei = Symbol.for("react.suspense"),
  ti = Symbol.for("react.suspense_list"),
  bi = Symbol.for("react.memo"),
  be = Symbol.for("react.lazy"),
  mu = Symbol.for("react.offscreen"),
  Qo = Symbol.iterator;
function mn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Qo && e[Qo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var H = Object.assign,
  Cl;
function Sn(e) {
  if (Cl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Cl = (t && t[1]) || "";
    }
  return (
    `
` +
    Cl +
    e
  );
}
var El = !1;
function Ll(e, t) {
  if (!e || El) return "";
  El = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          r = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var l = d.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var a =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (El = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Sn(e) : "";
}
function Zc(e) {
  switch (e.tag) {
    case 5:
      return Sn(e.type);
    case 16:
      return Sn("Lazy");
    case 13:
      return Sn("Suspense");
    case 19:
      return Sn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ll(e.type, !1)), e;
    case 11:
      return (e = Ll(e.type.render, !1)), e;
    case 1:
      return (e = Ll(e.type, !0)), e;
    default:
      return "";
  }
}
function ni(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case At:
      return "Fragment";
    case Bt:
      return "Portal";
    case bl:
      return "Profiler";
    case Gi:
      return "StrictMode";
    case ei:
      return "Suspense";
    case ti:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case hu:
        return (e.displayName || "Context") + ".Consumer";
      case pu:
        return (e._context.displayName || "Context") + ".Provider";
      case Ji:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case bi:
        return (
          (t = e.displayName || null), t !== null ? t : ni(e.type) || "Memo"
        );
      case be:
        (t = e._payload), (e = e._init);
        try {
          return ni(e(t));
        } catch {}
    }
  return null;
}
function Yc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ni(t);
    case 8:
      return t === Gi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function mt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function vu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Xc(e) {
  var t = vu(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ar(e) {
  e._valueTracker || (e._valueTracker = Xc(e));
}
function gu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = vu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ir(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ri(e, t) {
  var n = t.checked;
  return H({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function qo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = mt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function yu(e, t) {
  (t = t.checked), t != null && Xi(e, "checked", t, !1);
}
function li(e, t) {
  yu(e, t);
  var n = mt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ii(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ii(e, t.type, mt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ko(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ii(e, t, n) {
  (t !== "number" || Ir(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var jn = Array.isArray;
function Xt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + mt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function oi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Zo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (jn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: mt(n) };
}
function _u(e, t) {
  var n = mt(t.value),
    r = mt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Yo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ku(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function si(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ku(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var cr,
  xu = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        cr = cr || document.createElement("div"),
          cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = cr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Fn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var En = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Gc = ["Webkit", "ms", "Moz", "O"];
Object.keys(En).forEach(function (e) {
  Gc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (En[t] = En[e]);
  });
});
function wu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (En.hasOwnProperty(e) && En[e])
    ? ("" + t).trim()
    : t + "px";
}
function Su(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = wu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Jc = H(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ui(e, t) {
  if (t) {
    if (Jc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function ai(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ci = null;
function eo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var di = null,
  Gt = null,
  Jt = null;
function Xo(e) {
  if ((e = rr(e))) {
    if (typeof di != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = dl(t)), di(e.stateNode, e.type, t));
  }
}
function ju(e) {
  Gt ? (Jt ? Jt.push(e) : (Jt = [e])) : (Gt = e);
}
function Nu() {
  if (Gt) {
    var e = Gt,
      t = Jt;
    if (((Jt = Gt = null), Xo(e), t)) for (e = 0; e < t.length; e++) Xo(t[e]);
  }
}
function Cu(e, t) {
  return e(t);
}
function Eu() {}
var Pl = !1;
function Lu(e, t, n) {
  if (Pl) return e(t, n);
  Pl = !0;
  try {
    return Cu(e, t, n);
  } finally {
    (Pl = !1), (Gt !== null || Jt !== null) && (Eu(), Nu());
  }
}
function Bn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = dl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var fi = !1;
if (Ke)
  try {
    var vn = {};
    Object.defineProperty(vn, "passive", {
      get: function () {
        fi = !0;
      },
    }),
      window.addEventListener("test", vn, vn),
      window.removeEventListener("test", vn, vn);
  } catch {
    fi = !1;
  }
function bc(e, t, n, r, l, i, o, u, a) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (v) {
    this.onError(v);
  }
}
var Ln = !1,
  Fr = null,
  Br = !1,
  pi = null,
  ed = {
    onError: function (e) {
      (Ln = !0), (Fr = e);
    },
  };
function td(e, t, n, r, l, i, o, u, a) {
  (Ln = !1), (Fr = null), bc.apply(ed, arguments);
}
function nd(e, t, n, r, l, i, o, u, a) {
  if ((td.apply(this, arguments), Ln)) {
    if (Ln) {
      var d = Fr;
      (Ln = !1), (Fr = null);
    } else throw Error(y(198));
    Br || ((Br = !0), (pi = d));
  }
}
function It(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Pu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Go(e) {
  if (It(e) !== e) throw Error(y(188));
}
function rd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = It(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Go(l), e;
        if (i === r) return Go(l), t;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function zu(e) {
  return (e = rd(e)), e !== null ? Mu(e) : null;
}
function Mu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Mu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Tu = ye.unstable_scheduleCallback,
  Jo = ye.unstable_cancelCallback,
  ld = ye.unstable_shouldYield,
  id = ye.unstable_requestPaint,
  Q = ye.unstable_now,
  od = ye.unstable_getCurrentPriorityLevel,
  to = ye.unstable_ImmediatePriority,
  Ou = ye.unstable_UserBlockingPriority,
  Ar = ye.unstable_NormalPriority,
  sd = ye.unstable_LowPriority,
  Ru = ye.unstable_IdlePriority,
  sl = null,
  Ue = null;
function ud(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(sl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Re = Math.clz32 ? Math.clz32 : dd,
  ad = Math.log,
  cd = Math.LN2;
function dd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ad(e) / cd) | 0)) | 0;
}
var dr = 64,
  fr = 4194304;
function Nn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ur(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Nn(u)) : ((i &= o), i !== 0 && (r = Nn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Nn(o)) : i !== 0 && (r = Nn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Re(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function fd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function pd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Re(i),
      u = 1 << o,
      a = l[o];
    a === -1
      ? (!(u & n) || u & r) && (l[o] = fd(u, t))
      : a <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function hi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Du() {
  var e = dr;
  return (dr <<= 1), !(dr & 4194240) && (dr = 64), e;
}
function zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function tr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Re(t)),
    (e[t] = n);
}
function hd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Re(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function no(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Re(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var O = 0;
function Iu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Fu,
  ro,
  Bu,
  Au,
  Uu,
  mi = !1,
  pr = [],
  ot = null,
  st = null,
  ut = null,
  An = new Map(),
  Un = new Map(),
  tt = [],
  md =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function bo(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ot = null;
      break;
    case "dragenter":
    case "dragleave":
      st = null;
      break;
    case "mouseover":
    case "mouseout":
      ut = null;
      break;
    case "pointerover":
    case "pointerout":
      An.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Un.delete(t.pointerId);
  }
}
function gn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = rr(t)), t !== null && ro(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function vd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ot = gn(ot, e, t, n, r, l)), !0;
    case "dragenter":
      return (st = gn(st, e, t, n, r, l)), !0;
    case "mouseover":
      return (ut = gn(ut, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return An.set(i, gn(An.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Un.set(i, gn(Un.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Hu(e) {
  var t = Nt(e.target);
  if (t !== null) {
    var n = It(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Pu(n)), t !== null)) {
          (e.blockedOn = t),
            Uu(e.priority, function () {
              Bu(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Cr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = vi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ci = r), n.target.dispatchEvent(r), (ci = null);
    } else return (t = rr(n)), t !== null && ro(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function es(e, t, n) {
  Cr(e) && n.delete(t);
}
function gd() {
  (mi = !1),
    ot !== null && Cr(ot) && (ot = null),
    st !== null && Cr(st) && (st = null),
    ut !== null && Cr(ut) && (ut = null),
    An.forEach(es),
    Un.forEach(es);
}
function yn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    mi ||
      ((mi = !0),
      ye.unstable_scheduleCallback(ye.unstable_NormalPriority, gd)));
}
function Hn(e) {
  function t(l) {
    return yn(l, e);
  }
  if (0 < pr.length) {
    yn(pr[0], e);
    for (var n = 1; n < pr.length; n++) {
      var r = pr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ot !== null && yn(ot, e),
      st !== null && yn(st, e),
      ut !== null && yn(ut, e),
      An.forEach(t),
      Un.forEach(t),
      n = 0;
    n < tt.length;
    n++
  )
    (r = tt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tt.length && ((n = tt[0]), n.blockedOn === null); )
    Hu(n), n.blockedOn === null && tt.shift();
}
var bt = Ge.ReactCurrentBatchConfig,
  Hr = !0;
function yd(e, t, n, r) {
  var l = O,
    i = bt.transition;
  bt.transition = null;
  try {
    (O = 1), lo(e, t, n, r);
  } finally {
    (O = l), (bt.transition = i);
  }
}
function _d(e, t, n, r) {
  var l = O,
    i = bt.transition;
  bt.transition = null;
  try {
    (O = 4), lo(e, t, n, r);
  } finally {
    (O = l), (bt.transition = i);
  }
}
function lo(e, t, n, r) {
  if (Hr) {
    var l = vi(e, t, n, r);
    if (l === null) Ul(e, t, r, Vr, n), bo(e, r);
    else if (vd(l, e, t, n, r)) r.stopPropagation();
    else if ((bo(e, r), t & 4 && -1 < md.indexOf(e))) {
      for (; l !== null; ) {
        var i = rr(l);
        if (
          (i !== null && Fu(i),
          (i = vi(e, t, n, r)),
          i === null && Ul(e, t, r, Vr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Ul(e, t, r, null, n);
  }
}
var Vr = null;
function vi(e, t, n, r) {
  if (((Vr = null), (e = eo(r)), (e = Nt(e)), e !== null))
    if (((t = It(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Pu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Vr = e), null;
}
function Vu(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (od()) {
        case to:
          return 1;
        case Ou:
          return 4;
        case Ar:
        case sd:
          return 16;
        case Ru:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null,
  io = null,
  Er = null;
function $u() {
  if (Er) return Er;
  var e,
    t = io,
    n = t.length,
    r,
    l = "value" in rt ? rt.value : rt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Er = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Lr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function hr() {
  return !0;
}
function ts() {
  return !1;
}
function ke(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? hr
        : ts),
      (this.isPropagationStopped = ts),
      this
    );
  }
  return (
    H(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = hr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = hr));
      },
      persist: function () {},
      isPersistent: hr,
    }),
    t
  );
}
var dn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  oo = ke(dn),
  nr = H({}, dn, { view: 0, detail: 0 }),
  kd = ke(nr),
  Ml,
  Tl,
  _n,
  ul = H({}, nr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: so,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== _n &&
            (_n && e.type === "mousemove"
              ? ((Ml = e.screenX - _n.screenX), (Tl = e.screenY - _n.screenY))
              : (Tl = Ml = 0),
            (_n = e)),
          Ml);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Tl;
    },
  }),
  ns = ke(ul),
  xd = H({}, ul, { dataTransfer: 0 }),
  wd = ke(xd),
  Sd = H({}, nr, { relatedTarget: 0 }),
  Ol = ke(Sd),
  jd = H({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Nd = ke(jd),
  Cd = H({}, dn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ed = ke(Cd),
  Ld = H({}, dn, { data: 0 }),
  rs = ke(Ld),
  Pd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  zd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Md = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Td(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Md[e]) ? !!t[e] : !1;
}
function so() {
  return Td;
}
var Od = H({}, nr, {
    key: function (e) {
      if (e.key) {
        var t = Pd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Lr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? zd[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: so,
    charCode: function (e) {
      return e.type === "keypress" ? Lr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Lr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Rd = ke(Od),
  Dd = H({}, ul, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ls = ke(Dd),
  Id = H({}, nr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: so,
  }),
  Fd = ke(Id),
  Bd = H({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ad = ke(Bd),
  Ud = H({}, ul, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Hd = ke(Ud),
  Vd = [9, 13, 27, 32],
  uo = Ke && "CompositionEvent" in window,
  Pn = null;
Ke && "documentMode" in document && (Pn = document.documentMode);
var $d = Ke && "TextEvent" in window && !Pn,
  Wu = Ke && (!uo || (Pn && 8 < Pn && 11 >= Pn)),
  is = " ",
  os = !1;
function Qu(e, t) {
  switch (e) {
    case "keyup":
      return Vd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function qu(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ut = !1;
function Wd(e, t) {
  switch (e) {
    case "compositionend":
      return qu(t);
    case "keypress":
      return t.which !== 32 ? null : ((os = !0), is);
    case "textInput":
      return (e = t.data), e === is && os ? null : e;
    default:
      return null;
  }
}
function Qd(e, t) {
  if (Ut)
    return e === "compositionend" || (!uo && Qu(e, t))
      ? ((e = $u()), (Er = io = rt = null), (Ut = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Wu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var qd = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ss(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!qd[e.type] : t === "textarea";
}
function Ku(e, t, n, r) {
  ju(r),
    (t = $r(t, "onChange")),
    0 < t.length &&
      ((n = new oo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var zn = null,
  Vn = null;
function Kd(e) {
  la(e, 0);
}
function al(e) {
  var t = $t(e);
  if (gu(t)) return e;
}
function Zd(e, t) {
  if (e === "change") return t;
}
var Zu = !1;
if (Ke) {
  var Rl;
  if (Ke) {
    var Dl = "oninput" in document;
    if (!Dl) {
      var us = document.createElement("div");
      us.setAttribute("oninput", "return;"),
        (Dl = typeof us.oninput == "function");
    }
    Rl = Dl;
  } else Rl = !1;
  Zu = Rl && (!document.documentMode || 9 < document.documentMode);
}
function as() {
  zn && (zn.detachEvent("onpropertychange", Yu), (Vn = zn = null));
}
function Yu(e) {
  if (e.propertyName === "value" && al(Vn)) {
    var t = [];
    Ku(t, Vn, e, eo(e)), Lu(Kd, t);
  }
}
function Yd(e, t, n) {
  e === "focusin"
    ? (as(), (zn = t), (Vn = n), zn.attachEvent("onpropertychange", Yu))
    : e === "focusout" && as();
}
function Xd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return al(Vn);
}
function Gd(e, t) {
  if (e === "click") return al(t);
}
function Jd(e, t) {
  if (e === "input" || e === "change") return al(t);
}
function bd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ie = typeof Object.is == "function" ? Object.is : bd;
function $n(e, t) {
  if (Ie(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Jl.call(t, l) || !Ie(e[l], t[l])) return !1;
  }
  return !0;
}
function cs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ds(e, t) {
  var n = cs(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = cs(n);
  }
}
function Xu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Xu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Gu() {
  for (var e = window, t = Ir(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ir(e.document);
  }
  return t;
}
function ao(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function ef(e) {
  var t = Gu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Xu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ao(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = ds(n, i));
        var o = ds(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var tf = Ke && "documentMode" in document && 11 >= document.documentMode,
  Ht = null,
  gi = null,
  Mn = null,
  yi = !1;
function fs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  yi ||
    Ht == null ||
    Ht !== Ir(r) ||
    ((r = Ht),
    "selectionStart" in r && ao(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Mn && $n(Mn, r)) ||
      ((Mn = r),
      (r = $r(gi, "onSelect")),
      0 < r.length &&
        ((t = new oo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ht))));
}
function mr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Vt = {
    animationend: mr("Animation", "AnimationEnd"),
    animationiteration: mr("Animation", "AnimationIteration"),
    animationstart: mr("Animation", "AnimationStart"),
    transitionend: mr("Transition", "TransitionEnd"),
  },
  Il = {},
  Ju = {};
Ke &&
  ((Ju = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Vt.animationend.animation,
    delete Vt.animationiteration.animation,
    delete Vt.animationstart.animation),
  "TransitionEvent" in window || delete Vt.transitionend.transition);
function cl(e) {
  if (Il[e]) return Il[e];
  if (!Vt[e]) return e;
  var t = Vt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ju) return (Il[e] = t[n]);
  return e;
}
var bu = cl("animationend"),
  ea = cl("animationiteration"),
  ta = cl("animationstart"),
  na = cl("transitionend"),
  ra = new Map(),
  ps =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function gt(e, t) {
  ra.set(e, t), Dt(t, [e]);
}
for (var Fl = 0; Fl < ps.length; Fl++) {
  var Bl = ps[Fl],
    nf = Bl.toLowerCase(),
    rf = Bl[0].toUpperCase() + Bl.slice(1);
  gt(nf, "on" + rf);
}
gt(bu, "onAnimationEnd");
gt(ea, "onAnimationIteration");
gt(ta, "onAnimationStart");
gt("dblclick", "onDoubleClick");
gt("focusin", "onFocus");
gt("focusout", "onBlur");
gt(na, "onTransitionEnd");
nn("onMouseEnter", ["mouseout", "mouseover"]);
nn("onMouseLeave", ["mouseout", "mouseover"]);
nn("onPointerEnter", ["pointerout", "pointerover"]);
nn("onPointerLeave", ["pointerout", "pointerover"]);
Dt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Dt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Dt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Dt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Cn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  lf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));
function hs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), nd(r, t, void 0, e), (e.currentTarget = null);
}
function la(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            a = u.instance,
            d = u.currentTarget;
          if (((u = u.listener), a !== i && l.isPropagationStopped())) break e;
          hs(l, u, d), (i = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (a = u.instance),
            (d = u.currentTarget),
            (u = u.listener),
            a !== i && l.isPropagationStopped())
          )
            break e;
          hs(l, u, d), (i = a);
        }
    }
  }
  if (Br) throw ((e = pi), (Br = !1), (pi = null), e);
}
function D(e, t) {
  var n = t[Si];
  n === void 0 && (n = t[Si] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ia(t, e, 2, !1), n.add(r));
}
function Al(e, t, n) {
  var r = 0;
  t && (r |= 4), ia(n, e, r, t);
}
var vr = "_reactListening" + Math.random().toString(36).slice(2);
function Wn(e) {
  if (!e[vr]) {
    (e[vr] = !0),
      fu.forEach(function (n) {
        n !== "selectionchange" && (lf.has(n) || Al(n, !1, e), Al(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[vr] || ((t[vr] = !0), Al("selectionchange", !1, t));
  }
}
function ia(e, t, n, r) {
  switch (Vu(t)) {
    case 1:
      var l = yd;
      break;
    case 4:
      l = _d;
      break;
    default:
      l = lo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !fi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Ul(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Nt(u)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Lu(function () {
    var d = i,
      v = eo(n),
      m = [];
    e: {
      var h = ra.get(e);
      if (h !== void 0) {
        var _ = oo,
          k = e;
        switch (e) {
          case "keypress":
            if (Lr(n) === 0) break e;
          case "keydown":
          case "keyup":
            _ = Rd;
            break;
          case "focusin":
            (k = "focus"), (_ = Ol);
            break;
          case "focusout":
            (k = "blur"), (_ = Ol);
            break;
          case "beforeblur":
          case "afterblur":
            _ = Ol;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            _ = ns;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = wd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = Fd;
            break;
          case bu:
          case ea:
          case ta:
            _ = Nd;
            break;
          case na:
            _ = Ad;
            break;
          case "scroll":
            _ = kd;
            break;
          case "wheel":
            _ = Hd;
            break;
          case "copy":
          case "cut":
          case "paste":
            _ = Ed;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            _ = ls;
        }
        var x = (t & 4) !== 0,
          F = !x && e === "scroll",
          f = x ? (h !== null ? h + "Capture" : null) : h;
        x = [];
        for (var c = d, p; c !== null; ) {
          p = c;
          var g = p.stateNode;
          if (
            (p.tag === 5 &&
              g !== null &&
              ((p = g),
              f !== null && ((g = Bn(c, f)), g != null && x.push(Qn(c, g, p)))),
            F)
          )
            break;
          c = c.return;
        }
        0 < x.length &&
          ((h = new _(h, k, null, n, v)), m.push({ event: h, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (_ = e === "mouseout" || e === "pointerout"),
          h &&
            n !== ci &&
            (k = n.relatedTarget || n.fromElement) &&
            (Nt(k) || k[Ze]))
        )
          break e;
        if (
          (_ || h) &&
          ((h =
            v.window === v
              ? v
              : (h = v.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          _
            ? ((k = n.relatedTarget || n.toElement),
              (_ = d),
              (k = k ? Nt(k) : null),
              k !== null &&
                ((F = It(k)), k !== F || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((_ = null), (k = d)),
          _ !== k)
        ) {
          if (
            ((x = ns),
            (g = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = ls),
              (g = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (F = _ == null ? h : $t(_)),
            (p = k == null ? h : $t(k)),
            (h = new x(g, c + "leave", _, n, v)),
            (h.target = F),
            (h.relatedTarget = p),
            (g = null),
            Nt(v) === d &&
              ((x = new x(f, c + "enter", k, n, v)),
              (x.target = p),
              (x.relatedTarget = F),
              (g = x)),
            (F = g),
            _ && k)
          )
            t: {
              for (x = _, f = k, c = 0, p = x; p; p = Ft(p)) c++;
              for (p = 0, g = f; g; g = Ft(g)) p++;
              for (; 0 < c - p; ) (x = Ft(x)), c--;
              for (; 0 < p - c; ) (f = Ft(f)), p--;
              for (; c--; ) {
                if (x === f || (f !== null && x === f.alternate)) break t;
                (x = Ft(x)), (f = Ft(f));
              }
              x = null;
            }
          else x = null;
          _ !== null && ms(m, h, _, x, !1),
            k !== null && F !== null && ms(m, F, k, x, !0);
        }
      }
      e: {
        if (
          ((h = d ? $t(d) : window),
          (_ = h.nodeName && h.nodeName.toLowerCase()),
          _ === "select" || (_ === "input" && h.type === "file"))
        )
          var S = Zd;
        else if (ss(h))
          if (Zu) S = Jd;
          else {
            S = Xd;
            var N = Yd;
          }
        else
          (_ = h.nodeName) &&
            _.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (S = Gd);
        if (S && (S = S(e, d))) {
          Ku(m, S, n, v);
          break e;
        }
        N && N(e, h, d),
          e === "focusout" &&
            (N = h._wrapperState) &&
            N.controlled &&
            h.type === "number" &&
            ii(h, "number", h.value);
      }
      switch (((N = d ? $t(d) : window), e)) {
        case "focusin":
          (ss(N) || N.contentEditable === "true") &&
            ((Ht = N), (gi = d), (Mn = null));
          break;
        case "focusout":
          Mn = gi = Ht = null;
          break;
        case "mousedown":
          yi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (yi = !1), fs(m, n, v);
          break;
        case "selectionchange":
          if (tf) break;
        case "keydown":
        case "keyup":
          fs(m, n, v);
      }
      var C;
      if (uo)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        Ut
          ? Qu(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (Wu &&
          n.locale !== "ko" &&
          (Ut || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && Ut && (C = $u())
            : ((rt = v),
              (io = "value" in rt ? rt.value : rt.textContent),
              (Ut = !0))),
        (N = $r(d, E)),
        0 < N.length &&
          ((E = new rs(E, e, null, n, v)),
          m.push({ event: E, listeners: N }),
          C ? (E.data = C) : ((C = qu(n)), C !== null && (E.data = C)))),
        (C = $d ? Wd(e, n) : Qd(e, n)) &&
          ((d = $r(d, "onBeforeInput")),
          0 < d.length &&
            ((v = new rs("onBeforeInput", "beforeinput", null, n, v)),
            m.push({ event: v, listeners: d }),
            (v.data = C)));
    }
    la(m, t);
  });
}
function Qn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function $r(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Bn(e, n)),
      i != null && r.unshift(Qn(e, i, l)),
      (i = Bn(e, t)),
      i != null && r.push(Qn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Ft(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ms(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      d = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      d !== null &&
      ((u = d),
      l
        ? ((a = Bn(n, i)), a != null && o.unshift(Qn(n, a, u)))
        : l || ((a = Bn(n, i)), a != null && o.push(Qn(n, a, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var of = /\r\n?/g,
  sf = /\u0000|\uFFFD/g;
function vs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      of,
      `
`
    )
    .replace(sf, "");
}
function gr(e, t, n) {
  if (((t = vs(t)), vs(e) !== t && n)) throw Error(y(425));
}
function Wr() {}
var _i = null,
  ki = null;
function xi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var wi = typeof setTimeout == "function" ? setTimeout : void 0,
  uf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  gs = typeof Promise == "function" ? Promise : void 0,
  af =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof gs < "u"
      ? function (e) {
          return gs.resolve(null).then(e).catch(cf);
        }
      : wi;
function cf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Hl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Hn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Hn(t);
}
function at(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ys(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var fn = Math.random().toString(36).slice(2),
  Ae = "__reactFiber$" + fn,
  qn = "__reactProps$" + fn,
  Ze = "__reactContainer$" + fn,
  Si = "__reactEvents$" + fn,
  df = "__reactListeners$" + fn,
  ff = "__reactHandles$" + fn;
function Nt(e) {
  var t = e[Ae];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ze] || n[Ae])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ys(e); e !== null; ) {
          if ((n = e[Ae])) return n;
          e = ys(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function rr(e) {
  return (
    (e = e[Ae] || e[Ze]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function $t(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function dl(e) {
  return e[qn] || null;
}
var ji = [],
  Wt = -1;
function yt(e) {
  return { current: e };
}
function I(e) {
  0 > Wt || ((e.current = ji[Wt]), (ji[Wt] = null), Wt--);
}
function R(e, t) {
  Wt++, (ji[Wt] = e.current), (e.current = t);
}
var vt = {},
  ie = yt(vt),
  fe = yt(!1),
  zt = vt;
function rn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function pe(e) {
  return (e = e.childContextTypes), e != null;
}
function Qr() {
  I(fe), I(ie);
}
function _s(e, t, n) {
  if (ie.current !== vt) throw Error(y(168));
  R(ie, t), R(fe, n);
}
function oa(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Yc(e) || "Unknown", l));
  return H({}, n, r);
}
function qr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || vt),
    (zt = ie.current),
    R(ie, e),
    R(fe, fe.current),
    !0
  );
}
function ks(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = oa(e, t, zt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      I(fe),
      I(ie),
      R(ie, e))
    : I(fe),
    R(fe, n);
}
var $e = null,
  fl = !1,
  Vl = !1;
function sa(e) {
  $e === null ? ($e = [e]) : $e.push(e);
}
function pf(e) {
  (fl = !0), sa(e);
}
function _t() {
  if (!Vl && $e !== null) {
    Vl = !0;
    var e = 0,
      t = O;
    try {
      var n = $e;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ($e = null), (fl = !1);
    } catch (l) {
      throw ($e !== null && ($e = $e.slice(e + 1)), Tu(to, _t), l);
    } finally {
      (O = t), (Vl = !1);
    }
  }
  return null;
}
var Qt = [],
  qt = 0,
  Kr = null,
  Zr = 0,
  xe = [],
  we = 0,
  Mt = null,
  We = 1,
  Qe = "";
function St(e, t) {
  (Qt[qt++] = Zr), (Qt[qt++] = Kr), (Kr = e), (Zr = t);
}
function ua(e, t, n) {
  (xe[we++] = We), (xe[we++] = Qe), (xe[we++] = Mt), (Mt = e);
  var r = We;
  e = Qe;
  var l = 32 - Re(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Re(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (We = (1 << (32 - Re(t) + l)) | (n << l) | r),
      (Qe = i + e);
  } else (We = (1 << i) | (n << l) | r), (Qe = e);
}
function co(e) {
  e.return !== null && (St(e, 1), ua(e, 1, 0));
}
function fo(e) {
  for (; e === Kr; )
    (Kr = Qt[--qt]), (Qt[qt] = null), (Zr = Qt[--qt]), (Qt[qt] = null);
  for (; e === Mt; )
    (Mt = xe[--we]),
      (xe[we] = null),
      (Qe = xe[--we]),
      (xe[we] = null),
      (We = xe[--we]),
      (xe[we] = null);
}
var ge = null,
  ve = null,
  B = !1,
  Me = null;
function aa(e, t) {
  var n = Se(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function xs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ge = e), (ve = at(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ge = e), (ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Mt !== null ? { id: We, overflow: Qe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Se(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ge = e),
            (ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ni(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ci(e) {
  if (B) {
    var t = ve;
    if (t) {
      var n = t;
      if (!xs(e, t)) {
        if (Ni(e)) throw Error(y(418));
        t = at(n.nextSibling);
        var r = ge;
        t && xs(e, t)
          ? aa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (B = !1), (ge = e));
      }
    } else {
      if (Ni(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (B = !1), (ge = e);
    }
  }
}
function ws(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ge = e;
}
function yr(e) {
  if (e !== ge) return !1;
  if (!B) return ws(e), (B = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !xi(e.type, e.memoizedProps))),
    t && (t = ve))
  ) {
    if (Ni(e)) throw (ca(), Error(y(418)));
    for (; t; ) aa(e, t), (t = at(t.nextSibling));
  }
  if ((ws(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = at(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ge ? at(e.stateNode.nextSibling) : null;
  return !0;
}
function ca() {
  for (var e = ve; e; ) e = at(e.nextSibling);
}
function ln() {
  (ve = ge = null), (B = !1);
}
function po(e) {
  Me === null ? (Me = [e]) : Me.push(e);
}
var hf = Ge.ReactCurrentBatchConfig;
function kn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function _r(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ss(e) {
  var t = e._init;
  return t(e._payload);
}
function da(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = pt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, c, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, p, g) {
    return c === null || c.tag !== 6
      ? ((c = Yl(p, f.mode, g)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function a(f, c, p, g) {
    var S = p.type;
    return S === At
      ? v(f, c, p.props.children, g, p.key)
      : c !== null &&
        (c.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === be &&
            Ss(S) === c.type))
      ? ((g = l(c, p.props)), (g.ref = kn(f, c, p)), (g.return = f), g)
      : ((g = Dr(p.type, p.key, p.props, null, f.mode, g)),
        (g.ref = kn(f, c, p)),
        (g.return = f),
        g);
  }
  function d(f, c, p, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = Xl(p, f.mode, g)), (c.return = f), c)
      : ((c = l(c, p.children || [])), (c.return = f), c);
  }
  function v(f, c, p, g, S) {
    return c === null || c.tag !== 7
      ? ((c = Pt(p, f.mode, g, S)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function m(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Yl("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ur:
          return (
            (p = Dr(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = kn(f, null, c)),
            (p.return = f),
            p
          );
        case Bt:
          return (c = Xl(c, f.mode, p)), (c.return = f), c;
        case be:
          var g = c._init;
          return m(f, g(c._payload), p);
      }
      if (jn(c) || mn(c))
        return (c = Pt(c, f.mode, p, null)), (c.return = f), c;
      _r(f, c);
    }
    return null;
  }
  function h(f, c, p, g) {
    var S = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return S !== null ? null : u(f, c, "" + p, g);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ur:
          return p.key === S ? a(f, c, p, g) : null;
        case Bt:
          return p.key === S ? d(f, c, p, g) : null;
        case be:
          return (S = p._init), h(f, c, S(p._payload), g);
      }
      if (jn(p) || mn(p)) return S !== null ? null : v(f, c, p, g, null);
      _r(f, p);
    }
    return null;
  }
  function _(f, c, p, g, S) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (f = f.get(p) || null), u(c, f, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ur:
          return (f = f.get(g.key === null ? p : g.key) || null), a(c, f, g, S);
        case Bt:
          return (f = f.get(g.key === null ? p : g.key) || null), d(c, f, g, S);
        case be:
          var N = g._init;
          return _(f, c, p, N(g._payload), S);
      }
      if (jn(g) || mn(g)) return (f = f.get(p) || null), v(c, f, g, S, null);
      _r(c, g);
    }
    return null;
  }
  function k(f, c, p, g) {
    for (
      var S = null, N = null, C = c, E = (c = 0), $ = null;
      C !== null && E < p.length;
      E++
    ) {
      C.index > E ? (($ = C), (C = null)) : ($ = C.sibling);
      var M = h(f, C, p[E], g);
      if (M === null) {
        C === null && (C = $);
        break;
      }
      e && C && M.alternate === null && t(f, C),
        (c = i(M, c, E)),
        N === null ? (S = M) : (N.sibling = M),
        (N = M),
        (C = $);
    }
    if (E === p.length) return n(f, C), B && St(f, E), S;
    if (C === null) {
      for (; E < p.length; E++)
        (C = m(f, p[E], g)),
          C !== null &&
            ((c = i(C, c, E)), N === null ? (S = C) : (N.sibling = C), (N = C));
      return B && St(f, E), S;
    }
    for (C = r(f, C); E < p.length; E++)
      ($ = _(C, f, E, p[E], g)),
        $ !== null &&
          (e && $.alternate !== null && C.delete($.key === null ? E : $.key),
          (c = i($, c, E)),
          N === null ? (S = $) : (N.sibling = $),
          (N = $));
    return (
      e &&
        C.forEach(function (Ee) {
          return t(f, Ee);
        }),
      B && St(f, E),
      S
    );
  }
  function x(f, c, p, g) {
    var S = mn(p);
    if (typeof S != "function") throw Error(y(150));
    if (((p = S.call(p)), p == null)) throw Error(y(151));
    for (
      var N = (S = null), C = c, E = (c = 0), $ = null, M = p.next();
      C !== null && !M.done;
      E++, M = p.next()
    ) {
      C.index > E ? (($ = C), (C = null)) : ($ = C.sibling);
      var Ee = h(f, C, M.value, g);
      if (Ee === null) {
        C === null && (C = $);
        break;
      }
      e && C && Ee.alternate === null && t(f, C),
        (c = i(Ee, c, E)),
        N === null ? (S = Ee) : (N.sibling = Ee),
        (N = Ee),
        (C = $);
    }
    if (M.done) return n(f, C), B && St(f, E), S;
    if (C === null) {
      for (; !M.done; E++, M = p.next())
        (M = m(f, M.value, g)),
          M !== null &&
            ((c = i(M, c, E)), N === null ? (S = M) : (N.sibling = M), (N = M));
      return B && St(f, E), S;
    }
    for (C = r(f, C); !M.done; E++, M = p.next())
      (M = _(C, f, E, M.value, g)),
        M !== null &&
          (e && M.alternate !== null && C.delete(M.key === null ? E : M.key),
          (c = i(M, c, E)),
          N === null ? (S = M) : (N.sibling = M),
          (N = M));
    return (
      e &&
        C.forEach(function (pn) {
          return t(f, pn);
        }),
      B && St(f, E),
      S
    );
  }
  function F(f, c, p, g) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === At &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case ur:
          e: {
            for (var S = p.key, N = c; N !== null; ) {
              if (N.key === S) {
                if (((S = p.type), S === At)) {
                  if (N.tag === 7) {
                    n(f, N.sibling),
                      (c = l(N, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  N.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === be &&
                    Ss(S) === N.type)
                ) {
                  n(f, N.sibling),
                    (c = l(N, p.props)),
                    (c.ref = kn(f, N, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            p.type === At
              ? ((c = Pt(p.props.children, f.mode, g, p.key)),
                (c.return = f),
                (f = c))
              : ((g = Dr(p.type, p.key, p.props, null, f.mode, g)),
                (g.ref = kn(f, c, p)),
                (g.return = f),
                (f = g));
          }
          return o(f);
        case Bt:
          e: {
            for (N = p.key; c !== null; ) {
              if (c.key === N)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, p.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = Xl(p, f.mode, g)), (c.return = f), (f = c);
          }
          return o(f);
        case be:
          return (N = p._init), F(f, c, N(p._payload), g);
      }
      if (jn(p)) return k(f, c, p, g);
      if (mn(p)) return x(f, c, p, g);
      _r(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = Yl(p, f.mode, g)), (c.return = f), (f = c)),
        o(f))
      : n(f, c);
  }
  return F;
}
var on = da(!0),
  fa = da(!1),
  Yr = yt(null),
  Xr = null,
  Kt = null,
  ho = null;
function mo() {
  ho = Kt = Xr = null;
}
function vo(e) {
  var t = Yr.current;
  I(Yr), (e._currentValue = t);
}
function Ei(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function en(e, t) {
  (Xr = e),
    (ho = Kt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (de = !0), (e.firstContext = null));
}
function Ne(e) {
  var t = e._currentValue;
  if (ho !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Kt === null)) {
      if (Xr === null) throw Error(y(308));
      (Kt = e), (Xr.dependencies = { lanes: 0, firstContext: e });
    } else Kt = Kt.next = e;
  return t;
}
var Ct = null;
function go(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function pa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), go(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ye(e, r)
  );
}
function Ye(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var et = !1;
function yo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ha(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), T & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ye(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), go(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ye(e, n)
  );
}
function Pr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), no(e, n);
  }
}
function js(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Gr(e, t, n, r) {
  var l = e.updateQueue;
  et = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      d = a.next;
    (a.next = null), o === null ? (i = d) : (o.next = d), (o = a);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (u = v.lastBaseUpdate),
      u !== o &&
        (u === null ? (v.firstBaseUpdate = d) : (u.next = d),
        (v.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var m = l.baseState;
    (o = 0), (v = d = a = null), (u = i);
    do {
      var h = u.lane,
        _ = u.eventTime;
      if ((r & h) === h) {
        v !== null &&
          (v = v.next =
            {
              eventTime: _,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var k = e,
            x = u;
          switch (((h = t), (_ = n), x.tag)) {
            case 1:
              if (((k = x.payload), typeof k == "function")) {
                m = k.call(_, m, h);
                break e;
              }
              m = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = x.payload),
                (h = typeof k == "function" ? k.call(_, m, h) : k),
                h == null)
              )
                break e;
              m = H({}, m, h);
              break e;
            case 2:
              et = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [u]) : h.push(u));
      } else
        (_ = {
          eventTime: _,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          v === null ? ((d = v = _), (a = m)) : (v = v.next = _),
          (o |= h);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (v === null && (a = m),
      (l.baseState = a),
      (l.firstBaseUpdate = d),
      (l.lastBaseUpdate = v),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Ot |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function Ns(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var lr = {},
  He = yt(lr),
  Kn = yt(lr),
  Zn = yt(lr);
function Et(e) {
  if (e === lr) throw Error(y(174));
  return e;
}
function _o(e, t) {
  switch ((R(Zn, t), R(Kn, e), R(He, lr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : si(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = si(t, e));
  }
  I(He), R(He, t);
}
function sn() {
  I(He), I(Kn), I(Zn);
}
function ma(e) {
  Et(Zn.current);
  var t = Et(He.current),
    n = si(t, e.type);
  t !== n && (R(Kn, e), R(He, n));
}
function ko(e) {
  Kn.current === e && (I(He), I(Kn));
}
var A = yt(0);
function Jr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var $l = [];
function xo() {
  for (var e = 0; e < $l.length; e++)
    $l[e]._workInProgressVersionPrimary = null;
  $l.length = 0;
}
var zr = Ge.ReactCurrentDispatcher,
  Wl = Ge.ReactCurrentBatchConfig,
  Tt = 0,
  U = null,
  Z = null,
  G = null,
  br = !1,
  Tn = !1,
  Yn = 0,
  mf = 0;
function ne() {
  throw Error(y(321));
}
function wo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ie(e[n], t[n])) return !1;
  return !0;
}
function So(e, t, n, r, l, i) {
  if (
    ((Tt = i),
    (U = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (zr.current = e === null || e.memoizedState === null ? _f : kf),
    (e = n(r, l)),
    Tn)
  ) {
    i = 0;
    do {
      if (((Tn = !1), (Yn = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
        (G = Z = null),
        (t.updateQueue = null),
        (zr.current = xf),
        (e = n(r, l));
    } while (Tn);
  }
  if (
    ((zr.current = el),
    (t = Z !== null && Z.next !== null),
    (Tt = 0),
    (G = Z = U = null),
    (br = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function jo() {
  var e = Yn !== 0;
  return (Yn = 0), e;
}
function Be() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return G === null ? (U.memoizedState = G = e) : (G = G.next = e), G;
}
function Ce() {
  if (Z === null) {
    var e = U.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = G === null ? U.memoizedState : G.next;
  if (t !== null) (G = t), (Z = e);
  else {
    if (e === null) throw Error(y(310));
    (Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      G === null ? (U.memoizedState = G = e) : (G = G.next = e);
  }
  return G;
}
function Xn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ql(e) {
  var t = Ce(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = Z,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      a = null,
      d = i;
    do {
      var v = d.lane;
      if ((Tt & v) === v)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var m = {
          lane: v,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        a === null ? ((u = a = m), (o = r)) : (a = a.next = m),
          (U.lanes |= v),
          (Ot |= v);
      }
      d = d.next;
    } while (d !== null && d !== i);
    a === null ? (o = r) : (a.next = u),
      Ie(r, t.memoizedState) || (de = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (U.lanes |= i), (Ot |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ql(e) {
  var t = Ce(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Ie(i, t.memoizedState) || (de = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function va() {}
function ga(e, t) {
  var n = U,
    r = Ce(),
    l = t(),
    i = !Ie(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (de = !0)),
    (r = r.queue),
    No(ka.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (G !== null && G.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Gn(9, _a.bind(null, n, r, l, t), void 0, null),
      J === null)
    )
      throw Error(y(349));
    Tt & 30 || ya(n, t, l);
  }
  return l;
}
function ya(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = U.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (U.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function _a(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), xa(t) && wa(e);
}
function ka(e, t, n) {
  return n(function () {
    xa(t) && wa(e);
  });
}
function xa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ie(e, n);
  } catch {
    return !0;
  }
}
function wa(e) {
  var t = Ye(e, 1);
  t !== null && De(t, e, 1, -1);
}
function Cs(e) {
  var t = Be();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = yf.bind(null, U, e)),
    [t.memoizedState, e]
  );
}
function Gn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = U.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (U.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Sa() {
  return Ce().memoizedState;
}
function Mr(e, t, n, r) {
  var l = Be();
  (U.flags |= e),
    (l.memoizedState = Gn(1 | t, n, void 0, r === void 0 ? null : r));
}
function pl(e, t, n, r) {
  var l = Ce();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Z !== null) {
    var o = Z.memoizedState;
    if (((i = o.destroy), r !== null && wo(r, o.deps))) {
      l.memoizedState = Gn(t, n, i, r);
      return;
    }
  }
  (U.flags |= e), (l.memoizedState = Gn(1 | t, n, i, r));
}
function Es(e, t) {
  return Mr(8390656, 8, e, t);
}
function No(e, t) {
  return pl(2048, 8, e, t);
}
function ja(e, t) {
  return pl(4, 2, e, t);
}
function Na(e, t) {
  return pl(4, 4, e, t);
}
function Ca(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ea(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), pl(4, 4, Ca.bind(null, t, e), n)
  );
}
function Co() {}
function La(e, t) {
  var n = Ce();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Pa(e, t) {
  var n = Ce();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function za(e, t, n) {
  return Tt & 21
    ? (Ie(n, t) || ((n = Du()), (U.lanes |= n), (Ot |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n));
}
function vf(e, t) {
  var n = O;
  (O = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Wl.transition;
  Wl.transition = {};
  try {
    e(!1), t();
  } finally {
    (O = n), (Wl.transition = r);
  }
}
function Ma() {
  return Ce().memoizedState;
}
function gf(e, t, n) {
  var r = ft(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ta(e))
  )
    Oa(t, n);
  else if (((n = pa(e, t, n, r)), n !== null)) {
    var l = se();
    De(n, e, r, l), Ra(n, t, r);
  }
}
function yf(e, t, n) {
  var r = ft(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ta(e)) Oa(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ie(u, o))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), go(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = pa(e, t, l, r)),
      n !== null && ((l = se()), De(n, e, r, l), Ra(n, t, r));
  }
}
function Ta(e) {
  var t = e.alternate;
  return e === U || (t !== null && t === U);
}
function Oa(e, t) {
  Tn = br = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ra(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), no(e, n);
  }
}
var el = {
    readContext: Ne,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  _f = {
    readContext: Ne,
    useCallback: function (e, t) {
      return (Be().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ne,
    useEffect: Es,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Mr(4194308, 4, Ca.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Mr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Mr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Be();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Be();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = gf.bind(null, U, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Be();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Cs,
    useDebugValue: Co,
    useDeferredValue: function (e) {
      return (Be().memoizedState = e);
    },
    useTransition: function () {
      var e = Cs(!1),
        t = e[0];
      return (e = vf.bind(null, e[1])), (Be().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = U,
        l = Be();
      if (B) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(y(349));
        Tt & 30 || ya(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Es(ka.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Gn(9, _a.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Be(),
        t = J.identifierPrefix;
      if (B) {
        var n = Qe,
          r = We;
        (n = (r & ~(1 << (32 - Re(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Yn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = mf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  kf = {
    readContext: Ne,
    useCallback: La,
    useContext: Ne,
    useEffect: No,
    useImperativeHandle: Ea,
    useInsertionEffect: ja,
    useLayoutEffect: Na,
    useMemo: Pa,
    useReducer: Ql,
    useRef: Sa,
    useState: function () {
      return Ql(Xn);
    },
    useDebugValue: Co,
    useDeferredValue: function (e) {
      var t = Ce();
      return za(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = Ql(Xn)[0],
        t = Ce().memoizedState;
      return [e, t];
    },
    useMutableSource: va,
    useSyncExternalStore: ga,
    useId: Ma,
    unstable_isNewReconciler: !1,
  },
  xf = {
    readContext: Ne,
    useCallback: La,
    useContext: Ne,
    useEffect: No,
    useImperativeHandle: Ea,
    useInsertionEffect: ja,
    useLayoutEffect: Na,
    useMemo: Pa,
    useReducer: ql,
    useRef: Sa,
    useState: function () {
      return ql(Xn);
    },
    useDebugValue: Co,
    useDeferredValue: function (e) {
      var t = Ce();
      return Z === null ? (t.memoizedState = e) : za(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = ql(Xn)[0],
        t = Ce().memoizedState;
      return [e, t];
    },
    useMutableSource: va,
    useSyncExternalStore: ga,
    useId: Ma,
    unstable_isNewReconciler: !1,
  };
function Pe(e, t) {
  if (e && e.defaultProps) {
    (t = H({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Li(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : H({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? It(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ft(e),
      i = qe(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = ct(e, i, l)),
      t !== null && (De(t, e, l, r), Pr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ft(e),
      i = qe(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ct(e, i, l)),
      t !== null && (De(t, e, l, r), Pr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = ft(e),
      l = qe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ct(e, l, r)),
      t !== null && (De(t, e, r, n), Pr(t, e, r));
  },
};
function Ls(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !$n(n, r) || !$n(l, i)
      : !0
  );
}
function Da(e, t, n) {
  var r = !1,
    l = vt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ne(i))
      : ((l = pe(t) ? zt : ie.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? rn(e, l) : vt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = hl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Ps(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && hl.enqueueReplaceState(t, t.state, null);
}
function Pi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), yo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ne(i))
    : ((i = pe(t) ? zt : ie.current), (l.context = rn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Li(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && hl.enqueueReplaceState(l, l.state, null),
      Gr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function un(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Zc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Kl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function zi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var wf = typeof WeakMap == "function" ? WeakMap : Map;
function Ia(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      nl || ((nl = !0), (Ui = r)), zi(e, t);
    }),
    n
  );
}
function Fa(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        zi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        zi(e, t),
          typeof r != "function" &&
            (dt === null ? (dt = new Set([this])) : dt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function zs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new wf();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = If.bind(null, e, t, n)), t.then(e, e));
}
function Ms(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ts(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = qe(-1, 1)), (t.tag = 2), ct(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Sf = Ge.ReactCurrentOwner,
  de = !1;
function oe(e, t, n, r) {
  t.child = e === null ? fa(t, null, n, r) : on(t, e.child, n, r);
}
function Os(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    en(t, l),
    (r = So(e, t, n, r, i, l)),
    (n = jo()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (B && n && co(t), (t.flags |= 1), oe(e, t, r, l), t.child)
  );
}
function Rs(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ro(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ba(e, t, i, r, l))
      : ((e = Dr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : $n), n(o, r) && e.ref === t.ref)
    )
      return Xe(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = pt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ba(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if ($n(i, r) && e.ref === t.ref)
      if (((de = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (de = !0);
      else return (t.lanes = e.lanes), Xe(e, t, l);
  }
  return Mi(e, t, n, r, l);
}
function Aa(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        R(Yt, me),
        (me |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          R(Yt, me),
          (me |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        R(Yt, me),
        (me |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      R(Yt, me),
      (me |= r);
  return oe(e, t, l, n), t.child;
}
function Ua(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Mi(e, t, n, r, l) {
  var i = pe(n) ? zt : ie.current;
  return (
    (i = rn(t, i)),
    en(t, l),
    (n = So(e, t, n, r, i, l)),
    (r = jo()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (B && r && co(t), (t.flags |= 1), oe(e, t, n, l), t.child)
  );
}
function Ds(e, t, n, r, l) {
  if (pe(n)) {
    var i = !0;
    qr(t);
  } else i = !1;
  if ((en(t, l), t.stateNode === null))
    Tr(e, t), Da(t, n, r), Pi(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var a = o.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = Ne(d))
      : ((d = pe(n) ? zt : ie.current), (d = rn(t, d)));
    var v = n.getDerivedStateFromProps,
      m =
        typeof v == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || a !== d) && Ps(t, o, r, d)),
      (et = !1);
    var h = t.memoizedState;
    (o.state = h),
      Gr(t, r, o, l),
      (a = t.memoizedState),
      u !== r || h !== a || fe.current || et
        ? (typeof v == "function" && (Li(t, n, v, r), (a = t.memoizedState)),
          (u = et || Ls(t, n, u, r, h, a, d))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = d),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      ha(e, t),
      (u = t.memoizedProps),
      (d = t.type === t.elementType ? u : Pe(t.type, u)),
      (o.props = d),
      (m = t.pendingProps),
      (h = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ne(a))
        : ((a = pe(n) ? zt : ie.current), (a = rn(t, a)));
    var _ = n.getDerivedStateFromProps;
    (v =
      typeof _ == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== m || h !== a) && Ps(t, o, r, a)),
      (et = !1),
      (h = t.memoizedState),
      (o.state = h),
      Gr(t, r, o, l);
    var k = t.memoizedState;
    u !== m || h !== k || fe.current || et
      ? (typeof _ == "function" && (Li(t, n, _, r), (k = t.memoizedState)),
        (d = et || Ls(t, n, d, r, h, k, a) || !1)
          ? (v ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, k, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, k, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (o.props = r),
        (o.state = k),
        (o.context = a),
        (r = d))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ti(e, t, n, r, i, l);
}
function Ti(e, t, n, r, l, i) {
  Ua(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && ks(t, n, !1), Xe(e, t, i);
  (r = t.stateNode), (Sf.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = on(t, e.child, null, i)), (t.child = on(t, null, u, i)))
      : oe(e, t, u, i),
    (t.memoizedState = r.state),
    l && ks(t, n, !0),
    t.child
  );
}
function Ha(e) {
  var t = e.stateNode;
  t.pendingContext
    ? _s(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && _s(e, t.context, !1),
    _o(e, t.containerInfo);
}
function Is(e, t, n, r, l) {
  return ln(), po(l), (t.flags |= 256), oe(e, t, n, r), t.child;
}
var Oi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ri(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Va(e, t, n) {
  var r = t.pendingProps,
    l = A.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    R(A, l & 1),
    e === null)
  )
    return (
      Ci(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = gl(o, r, 0, null)),
              (e = Pt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ri(n)),
              (t.memoizedState = Oi),
              e)
            : Eo(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return jf(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = pt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = pt(u, i)) : ((i = Pt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ri(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Oi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = pt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Eo(e, t) {
  return (
    (t = gl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function kr(e, t, n, r) {
  return (
    r !== null && po(r),
    on(t, e.child, null, n),
    (e = Eo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function jf(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Kl(Error(y(422)))), kr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = gl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Pt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && on(t, e.child, null, o),
        (t.child.memoizedState = Ri(o)),
        (t.memoizedState = Oi),
        i);
  if (!(t.mode & 1)) return kr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(y(419))), (r = Kl(i, r, void 0)), kr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), de || u)) {
    if (((r = J), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ye(e, l), De(r, e, l, -1));
    }
    return Oo(), (r = Kl(Error(y(421)))), kr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ff.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ve = at(l.nextSibling)),
      (ge = t),
      (B = !0),
      (Me = null),
      e !== null &&
        ((xe[we++] = We),
        (xe[we++] = Qe),
        (xe[we++] = Mt),
        (We = e.id),
        (Qe = e.overflow),
        (Mt = t)),
      (t = Eo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Fs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ei(e.return, t, n);
}
function Zl(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function $a(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((oe(e, t, r.children, n), (r = A.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Fs(e, n, t);
        else if (e.tag === 19) Fs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((R(A, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Jr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Zl(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Jr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Zl(t, !0, n, null, i);
        break;
      case "together":
        Zl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Tr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ot |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = pt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = pt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Nf(e, t, n) {
  switch (t.tag) {
    case 3:
      Ha(t), ln();
      break;
    case 5:
      ma(t);
      break;
    case 1:
      pe(t.type) && qr(t);
      break;
    case 4:
      _o(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      R(Yr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (R(A, A.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Va(e, t, n)
          : (R(A, A.current & 1),
            (e = Xe(e, t, n)),
            e !== null ? e.sibling : null);
      R(A, A.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return $a(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        R(A, A.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Aa(e, t, n);
  }
  return Xe(e, t, n);
}
var Wa, Di, Qa, qa;
Wa = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Di = function () {};
Qa = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Et(He.current);
    var i = null;
    switch (n) {
      case "input":
        (l = ri(e, l)), (r = ri(e, r)), (i = []);
        break;
      case "select":
        (l = H({}, l, { value: void 0 })),
          (r = H({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = oi(e, l)), (r = oi(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Wr);
    }
    ui(n, r);
    var o;
    n = null;
    for (d in l)
      if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
        if (d === "style") {
          var u = l[d];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (In.hasOwnProperty(d)
              ? i || (i = [])
              : (i = i || []).push(d, null));
    for (d in r) {
      var a = r[d];
      if (
        ((u = l != null ? l[d] : void 0),
        r.hasOwnProperty(d) && a !== u && (a != null || u != null))
      )
        if (d === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                u[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (i || (i = []), i.push(d, n)), (n = a);
        else
          d === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (i = i || []).push(d, a))
            : d === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(d, "" + a)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (In.hasOwnProperty(d)
                ? (a != null && d === "onScroll" && D("scroll", e),
                  i || u === a || (i = []))
                : (i = i || []).push(d, a));
    }
    n && (i = i || []).push("style", n);
    var d = i;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
qa = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xn(e, t) {
  if (!B)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Cf(e, t, n) {
  var r = t.pendingProps;
  switch ((fo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return re(t), null;
    case 1:
      return pe(t.type) && Qr(), re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        sn(),
        I(fe),
        I(ie),
        xo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (yr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Me !== null && ($i(Me), (Me = null)))),
        Di(e, t),
        re(t),
        null
      );
    case 5:
      ko(t);
      var l = Et(Zn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Qa(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return re(t), null;
        }
        if (((e = Et(He.current)), yr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ae] = t), (r[qn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Cn.length; l++) D(Cn[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D("error", r), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              qo(r, i), D("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                D("invalid", r);
              break;
            case "textarea":
              Zo(r, i), D("invalid", r);
          }
          ui(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      gr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      gr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : In.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  D("scroll", r);
            }
          switch (n) {
            case "input":
              ar(r), Ko(r, i, !0);
              break;
            case "textarea":
              ar(r), Yo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Wr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ku(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ae] = t),
            (e[qn] = r),
            Wa(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ai(n, r)), n)) {
              case "dialog":
                D("cancel", e), D("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Cn.length; l++) D(Cn[l], e);
                l = r;
                break;
              case "source":
                D("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                D("error", e), D("load", e), (l = r);
                break;
              case "details":
                D("toggle", e), (l = r);
                break;
              case "input":
                qo(e, r), (l = ri(e, r)), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = H({}, r, { value: void 0 })),
                  D("invalid", e);
                break;
              case "textarea":
                Zo(e, r), (l = oi(e, r)), D("invalid", e);
                break;
              default:
                l = r;
            }
            ui(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var a = u[i];
                i === "style"
                  ? Su(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && xu(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Fn(e, a)
                    : typeof a == "number" && Fn(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (In.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && D("scroll", e)
                      : a != null && Xi(e, i, a, o));
              }
            switch (n) {
              case "input":
                ar(e), Ko(e, r, !1);
                break;
              case "textarea":
                ar(e), Yo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + mt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Xt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Xt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Wr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) qa(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = Et(Zn.current)), Et(He.current), yr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ae] = t),
            (i = r.nodeValue !== n) && ((e = ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                gr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  gr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ae] = t),
            (t.stateNode = r);
      }
      return re(t), null;
    case 13:
      if (
        (I(A),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (B && ve !== null && t.mode & 1 && !(t.flags & 128))
          ca(), ln(), (t.flags |= 98560), (i = !1);
        else if (((i = yr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[Ae] = t;
          } else
            ln(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          re(t), (i = !1);
        } else Me !== null && ($i(Me), (Me = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || A.current & 1 ? Y === 0 && (Y = 3) : Oo())),
          t.updateQueue !== null && (t.flags |= 4),
          re(t),
          null);
    case 4:
      return (
        sn(), Di(e, t), e === null && Wn(t.stateNode.containerInfo), re(t), null
      );
    case 10:
      return vo(t.type._context), re(t), null;
    case 17:
      return pe(t.type) && Qr(), re(t), null;
    case 19:
      if ((I(A), (i = t.memoizedState), i === null)) return re(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) xn(i, !1);
        else {
          if (Y !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Jr(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    xn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return R(A, (A.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Q() > an &&
            ((t.flags |= 128), (r = !0), xn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Jr(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              xn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !B)
            )
              return re(t), null;
          } else
            2 * Q() - i.renderingStartTime > an &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), xn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Q()),
          (t.sibling = null),
          (n = A.current),
          R(A, r ? (n & 1) | 2 : n & 1),
          t)
        : (re(t), null);
    case 22:
    case 23:
      return (
        To(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? me & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function Ef(e, t) {
  switch ((fo(t), t.tag)) {
    case 1:
      return (
        pe(t.type) && Qr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        sn(),
        I(fe),
        I(ie),
        xo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ko(t), null;
    case 13:
      if ((I(A), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        ln();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return I(A), null;
    case 4:
      return sn(), null;
    case 10:
      return vo(t.type._context), null;
    case 22:
    case 23:
      return To(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xr = !1,
  le = !1,
  Lf = typeof WeakSet == "function" ? WeakSet : Set,
  w = null;
function Zt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        V(e, t, r);
      }
    else n.current = null;
}
function Ii(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var Bs = !1;
function Pf(e, t) {
  if (((_i = Hr), (e = Gu()), ao(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            a = -1,
            d = 0,
            v = 0,
            m = e,
            h = null;
          t: for (;;) {
            for (
              var _;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = o + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (a = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (_ = m.firstChild) !== null;

            )
              (h = m), (m = _);
            for (;;) {
              if (m === e) break t;
              if (
                (h === n && ++d === l && (u = o),
                h === i && ++v === r && (a = o),
                (_ = m.nextSibling) !== null)
              )
                break;
              (m = h), (h = m.parentNode);
            }
            m = _;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ki = { focusedElem: e, selectionRange: n }, Hr = !1, w = t; w !== null; )
    if (((t = w), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (w = e);
    else
      for (; w !== null; ) {
        t = w;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var x = k.memoizedProps,
                    F = k.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Pe(t.type, x),
                      F
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (g) {
          V(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (w = e);
          break;
        }
        w = t.return;
      }
  return (k = Bs), (Bs = !1), k;
}
function On(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Ii(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function ml(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Fi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ka(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ka(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ae], delete t[qn], delete t[Si], delete t[df], delete t[ff])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Za(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function As(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Za(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Bi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Wr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bi(e, t, n), e = e.sibling; e !== null; ) Bi(e, t, n), (e = e.sibling);
}
function Ai(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ai(e, t, n), e = e.sibling; e !== null; ) Ai(e, t, n), (e = e.sibling);
}
var b = null,
  ze = !1;
function Je(e, t, n) {
  for (n = n.child; n !== null; ) Ya(e, t, n), (n = n.sibling);
}
function Ya(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(sl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      le || Zt(n, t);
    case 6:
      var r = b,
        l = ze;
      (b = null),
        Je(e, t, n),
        (b = r),
        (ze = l),
        b !== null &&
          (ze
            ? ((e = b),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null &&
        (ze
          ? ((e = b),
            (n = n.stateNode),
            e.nodeType === 8
              ? Hl(e.parentNode, n)
              : e.nodeType === 1 && Hl(e, n),
            Hn(e))
          : Hl(b, n.stateNode));
      break;
    case 4:
      (r = b),
        (l = ze),
        (b = n.stateNode.containerInfo),
        (ze = !0),
        Je(e, t, n),
        (b = r),
        (ze = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Ii(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Je(e, t, n);
      break;
    case 1:
      if (
        !le &&
        (Zt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          V(n, t, u);
        }
      Je(e, t, n);
      break;
    case 21:
      Je(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((le = (r = le) || n.memoizedState !== null), Je(e, t, n), (le = r))
        : Je(e, t, n);
      break;
    default:
      Je(e, t, n);
  }
}
function Us(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Lf()),
      t.forEach(function (r) {
        var l = Bf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (b = u.stateNode), (ze = !1);
              break e;
            case 3:
              (b = u.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (b = u.stateNode.containerInfo), (ze = !0);
              break e;
          }
          u = u.return;
        }
        if (b === null) throw Error(y(160));
        Ya(i, o, l), (b = null), (ze = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (d) {
        V(l, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Xa(t, e), (t = t.sibling);
}
function Xa(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Le(t, e), Fe(e), r & 4)) {
        try {
          On(3, e, e.return), ml(3, e);
        } catch (x) {
          V(e, e.return, x);
        }
        try {
          On(5, e, e.return);
        } catch (x) {
          V(e, e.return, x);
        }
      }
      break;
    case 1:
      Le(t, e), Fe(e), r & 512 && n !== null && Zt(n, n.return);
      break;
    case 5:
      if (
        (Le(t, e),
        Fe(e),
        r & 512 && n !== null && Zt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Fn(l, "");
        } catch (x) {
          V(e, e.return, x);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && yu(l, i),
              ai(u, o);
            var d = ai(u, i);
            for (o = 0; o < a.length; o += 2) {
              var v = a[o],
                m = a[o + 1];
              v === "style"
                ? Su(l, m)
                : v === "dangerouslySetInnerHTML"
                ? xu(l, m)
                : v === "children"
                ? Fn(l, m)
                : Xi(l, v, m, d);
            }
            switch (u) {
              case "input":
                li(l, i);
                break;
              case "textarea":
                _u(l, i);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var _ = i.value;
                _ != null
                  ? Xt(l, !!i.multiple, _, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Xt(l, !!i.multiple, i.defaultValue, !0)
                      : Xt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[qn] = i;
          } catch (x) {
            V(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Le(t, e), Fe(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (x) {
          V(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Le(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Hn(t.containerInfo);
        } catch (x) {
          V(e, e.return, x);
        }
      break;
    case 4:
      Le(t, e), Fe(e);
      break;
    case 13:
      Le(t, e),
        Fe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (zo = Q())),
        r & 4 && Us(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((le = (d = le) || v), Le(t, e), (le = d)) : Le(t, e),
        Fe(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !v && e.mode & 1)
        )
          for (w = e, v = e.child; v !== null; ) {
            for (m = w = v; w !== null; ) {
              switch (((h = w), (_ = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  On(4, h, h.return);
                  break;
                case 1:
                  Zt(h, h.return);
                  var k = h.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (k.props = t.memoizedProps),
                        (k.state = t.memoizedState),
                        k.componentWillUnmount();
                    } catch (x) {
                      V(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Zt(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Vs(m);
                    continue;
                  }
              }
              _ !== null ? ((_.return = h), (w = _)) : Vs(m);
            }
            v = v.sibling;
          }
        e: for (v = null, m = e; ; ) {
          if (m.tag === 5) {
            if (v === null) {
              v = m;
              try {
                (l = m.stateNode),
                  d
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = m.stateNode),
                      (a = m.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = wu("display", o)));
              } catch (x) {
                V(e, e.return, x);
              }
            }
          } else if (m.tag === 6) {
            if (v === null)
              try {
                m.stateNode.nodeValue = d ? "" : m.memoizedProps;
              } catch (x) {
                V(e, e.return, x);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            v === m && (v = null), (m = m.return);
          }
          v === m && (v = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Le(t, e), Fe(e), r & 4 && Us(e);
      break;
    case 21:
      break;
    default:
      Le(t, e), Fe(e);
  }
}
function Fe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Za(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Fn(l, ""), (r.flags &= -33));
          var i = As(e);
          Ai(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = As(e);
          Bi(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (a) {
      V(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function zf(e, t, n) {
  (w = e), Ga(e);
}
function Ga(e, t, n) {
  for (var r = (e.mode & 1) !== 0; w !== null; ) {
    var l = w,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || xr;
      if (!o) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || le;
        u = xr;
        var d = le;
        if (((xr = o), (le = a) && !d))
          for (w = l; w !== null; )
            (o = w),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? $s(l)
                : a !== null
                ? ((a.return = o), (w = a))
                : $s(l);
        for (; i !== null; ) (w = i), Ga(i), (i = i.sibling);
        (w = l), (xr = u), (le = d);
      }
      Hs(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (w = i)) : Hs(e);
  }
}
function Hs(e) {
  for (; w !== null; ) {
    var t = w;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || ml(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Pe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Ns(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ns(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var d = t.alternate;
                if (d !== null) {
                  var v = d.memoizedState;
                  if (v !== null) {
                    var m = v.dehydrated;
                    m !== null && Hn(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        le || (t.flags & 512 && Fi(t));
      } catch (h) {
        V(t, t.return, h);
      }
    }
    if (t === e) {
      w = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (w = n);
      break;
    }
    w = t.return;
  }
}
function Vs(e) {
  for (; w !== null; ) {
    var t = w;
    if (t === e) {
      w = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (w = n);
      break;
    }
    w = t.return;
  }
}
function $s(e) {
  for (; w !== null; ) {
    var t = w;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ml(4, t);
          } catch (a) {
            V(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              V(t, l, a);
            }
          }
          var i = t.return;
          try {
            Fi(t);
          } catch (a) {
            V(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Fi(t);
          } catch (a) {
            V(t, o, a);
          }
      }
    } catch (a) {
      V(t, t.return, a);
    }
    if (t === e) {
      w = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (w = u);
      break;
    }
    w = t.return;
  }
}
var Mf = Math.ceil,
  tl = Ge.ReactCurrentDispatcher,
  Lo = Ge.ReactCurrentOwner,
  je = Ge.ReactCurrentBatchConfig,
  T = 0,
  J = null,
  q = null,
  ee = 0,
  me = 0,
  Yt = yt(0),
  Y = 0,
  Jn = null,
  Ot = 0,
  vl = 0,
  Po = 0,
  Rn = null,
  ce = null,
  zo = 0,
  an = 1 / 0,
  Ve = null,
  nl = !1,
  Ui = null,
  dt = null,
  wr = !1,
  lt = null,
  rl = 0,
  Dn = 0,
  Hi = null,
  Or = -1,
  Rr = 0;
function se() {
  return T & 6 ? Q() : Or !== -1 ? Or : (Or = Q());
}
function ft(e) {
  return e.mode & 1
    ? T & 2 && ee !== 0
      ? ee & -ee
      : hf.transition !== null
      ? (Rr === 0 && (Rr = Du()), Rr)
      : ((e = O),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Vu(e.type))),
        e)
    : 1;
}
function De(e, t, n, r) {
  if (50 < Dn) throw ((Dn = 0), (Hi = null), Error(y(185)));
  tr(e, n, r),
    (!(T & 2) || e !== J) &&
      (e === J && (!(T & 2) && (vl |= n), Y === 4 && nt(e, ee)),
      he(e, r),
      n === 1 && T === 0 && !(t.mode & 1) && ((an = Q() + 500), fl && _t()));
}
function he(e, t) {
  var n = e.callbackNode;
  pd(e, t);
  var r = Ur(e, e === J ? ee : 0);
  if (r === 0)
    n !== null && Jo(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Jo(n), t === 1))
      e.tag === 0 ? pf(Ws.bind(null, e)) : sa(Ws.bind(null, e)),
        af(function () {
          !(T & 6) && _t();
        }),
        (n = null);
    else {
      switch (Iu(r)) {
        case 1:
          n = to;
          break;
        case 4:
          n = Ou;
          break;
        case 16:
          n = Ar;
          break;
        case 536870912:
          n = Ru;
          break;
        default:
          n = Ar;
      }
      n = ic(n, Ja.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ja(e, t) {
  if (((Or = -1), (Rr = 0), T & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (tn() && e.callbackNode !== n) return null;
  var r = Ur(e, e === J ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ll(e, r);
  else {
    t = r;
    var l = T;
    T |= 2;
    var i = ec();
    (J !== e || ee !== t) && ((Ve = null), (an = Q() + 500), Lt(e, t));
    do
      try {
        Rf();
        break;
      } catch (u) {
        ba(e, u);
      }
    while (!0);
    mo(),
      (tl.current = i),
      (T = l),
      q !== null ? (t = 0) : ((J = null), (ee = 0), (t = Y));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = hi(e)), l !== 0 && ((r = l), (t = Vi(e, l)))), t === 1)
    )
      throw ((n = Jn), Lt(e, 0), nt(e, r), he(e, Q()), n);
    if (t === 6) nt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Tf(l) &&
          ((t = ll(e, r)),
          t === 2 && ((i = hi(e)), i !== 0 && ((r = i), (t = Vi(e, i)))),
          t === 1))
      )
        throw ((n = Jn), Lt(e, 0), nt(e, r), he(e, Q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          jt(e, ce, Ve);
          break;
        case 3:
          if (
            (nt(e, r), (r & 130023424) === r && ((t = zo + 500 - Q()), 10 < t))
          ) {
            if (Ur(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = wi(jt.bind(null, e, ce, Ve), t);
            break;
          }
          jt(e, ce, Ve);
          break;
        case 4:
          if ((nt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Re(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Mf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = wi(jt.bind(null, e, ce, Ve), r);
            break;
          }
          jt(e, ce, Ve);
          break;
        case 5:
          jt(e, ce, Ve);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return he(e, Q()), e.callbackNode === n ? Ja.bind(null, e) : null;
}
function Vi(e, t) {
  var n = Rn;
  return (
    e.current.memoizedState.isDehydrated && (Lt(e, t).flags |= 256),
    (e = ll(e, t)),
    e !== 2 && ((t = ce), (ce = n), t !== null && $i(t)),
    e
  );
}
function $i(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function Tf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Ie(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function nt(e, t) {
  for (
    t &= ~Po,
      t &= ~vl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Re(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ws(e) {
  if (T & 6) throw Error(y(327));
  tn();
  var t = Ur(e, 0);
  if (!(t & 1)) return he(e, Q()), null;
  var n = ll(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = hi(e);
    r !== 0 && ((t = r), (n = Vi(e, r)));
  }
  if (n === 1) throw ((n = Jn), Lt(e, 0), nt(e, t), he(e, Q()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    jt(e, ce, Ve),
    he(e, Q()),
    null
  );
}
function Mo(e, t) {
  var n = T;
  T |= 1;
  try {
    return e(t);
  } finally {
    (T = n), T === 0 && ((an = Q() + 500), fl && _t());
  }
}
function Rt(e) {
  lt !== null && lt.tag === 0 && !(T & 6) && tn();
  var t = T;
  T |= 1;
  var n = je.transition,
    r = O;
  try {
    if (((je.transition = null), (O = 1), e)) return e();
  } finally {
    (O = r), (je.transition = n), (T = t), !(T & 6) && _t();
  }
}
function To() {
  (me = Yt.current), I(Yt);
}
function Lt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), uf(n)), q !== null))
    for (n = q.return; n !== null; ) {
      var r = n;
      switch ((fo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Qr();
          break;
        case 3:
          sn(), I(fe), I(ie), xo();
          break;
        case 5:
          ko(r);
          break;
        case 4:
          sn();
          break;
        case 13:
          I(A);
          break;
        case 19:
          I(A);
          break;
        case 10:
          vo(r.type._context);
          break;
        case 22:
        case 23:
          To();
      }
      n = n.return;
    }
  if (
    ((J = e),
    (q = e = pt(e.current, null)),
    (ee = me = t),
    (Y = 0),
    (Jn = null),
    (Po = vl = Ot = 0),
    (ce = Rn = null),
    Ct !== null)
  ) {
    for (t = 0; t < Ct.length; t++)
      if (((n = Ct[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Ct = null;
  }
  return e;
}
function ba(e, t) {
  do {
    var n = q;
    try {
      if ((mo(), (zr.current = el), br)) {
        for (var r = U.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        br = !1;
      }
      if (
        ((Tt = 0),
        (G = Z = U = null),
        (Tn = !1),
        (Yn = 0),
        (Lo.current = null),
        n === null || n.return === null)
      ) {
        (Y = 1), (Jn = t), (q = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          a = t;
        if (
          ((t = ee),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var d = a,
            v = u,
            m = v.tag;
          if (!(v.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = v.alternate;
            h
              ? ((v.updateQueue = h.updateQueue),
                (v.memoizedState = h.memoizedState),
                (v.lanes = h.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var _ = Ms(o);
          if (_ !== null) {
            (_.flags &= -257),
              Ts(_, o, u, i, t),
              _.mode & 1 && zs(i, d, t),
              (t = _),
              (a = d);
            var k = t.updateQueue;
            if (k === null) {
              var x = new Set();
              x.add(a), (t.updateQueue = x);
            } else k.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              zs(i, d, t), Oo();
              break e;
            }
            a = Error(y(426));
          }
        } else if (B && u.mode & 1) {
          var F = Ms(o);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256),
              Ts(F, o, u, i, t),
              po(un(a, u));
            break e;
          }
        }
        (i = a = un(a, u)),
          Y !== 4 && (Y = 2),
          Rn === null ? (Rn = [i]) : Rn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Ia(i, a, t);
              js(i, f);
              break e;
            case 1:
              u = a;
              var c = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (dt === null || !dt.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = Fa(i, u, t);
                js(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      nc(n);
    } catch (S) {
      (t = S), q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ec() {
  var e = tl.current;
  return (tl.current = el), e === null ? el : e;
}
function Oo() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4),
    J === null || (!(Ot & 268435455) && !(vl & 268435455)) || nt(J, ee);
}
function ll(e, t) {
  var n = T;
  T |= 2;
  var r = ec();
  (J !== e || ee !== t) && ((Ve = null), Lt(e, t));
  do
    try {
      Of();
      break;
    } catch (l) {
      ba(e, l);
    }
  while (!0);
  if ((mo(), (T = n), (tl.current = r), q !== null)) throw Error(y(261));
  return (J = null), (ee = 0), Y;
}
function Of() {
  for (; q !== null; ) tc(q);
}
function Rf() {
  for (; q !== null && !ld(); ) tc(q);
}
function tc(e) {
  var t = lc(e.alternate, e, me);
  (e.memoizedProps = e.pendingProps),
    t === null ? nc(e) : (q = t),
    (Lo.current = null);
}
function nc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ef(n, t)), n !== null)) {
        (n.flags &= 32767), (q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Y = 6), (q = null);
        return;
      }
    } else if (((n = Cf(n, t, me)), n !== null)) {
      q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  Y === 0 && (Y = 5);
}
function jt(e, t, n) {
  var r = O,
    l = je.transition;
  try {
    (je.transition = null), (O = 1), Df(e, t, n, r);
  } finally {
    (je.transition = l), (O = r);
  }
  return null;
}
function Df(e, t, n, r) {
  do tn();
  while (lt !== null);
  if (T & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (hd(e, i),
    e === J && ((q = J = null), (ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      wr ||
      ((wr = !0),
      ic(Ar, function () {
        return tn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = je.transition), (je.transition = null);
    var o = O;
    O = 1;
    var u = T;
    (T |= 4),
      (Lo.current = null),
      Pf(e, n),
      Xa(n, e),
      ef(ki),
      (Hr = !!_i),
      (ki = _i = null),
      (e.current = n),
      zf(n),
      id(),
      (T = u),
      (O = o),
      (je.transition = i);
  } else e.current = n;
  if (
    (wr && ((wr = !1), (lt = e), (rl = l)),
    (i = e.pendingLanes),
    i === 0 && (dt = null),
    ud(n.stateNode),
    he(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (nl) throw ((nl = !1), (e = Ui), (Ui = null), e);
  return (
    rl & 1 && e.tag !== 0 && tn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Hi ? Dn++ : ((Dn = 0), (Hi = e))) : (Dn = 0),
    _t(),
    null
  );
}
function tn() {
  if (lt !== null) {
    var e = Iu(rl),
      t = je.transition,
      n = O;
    try {
      if (((je.transition = null), (O = 16 > e ? 16 : e), lt === null))
        var r = !1;
      else {
        if (((e = lt), (lt = null), (rl = 0), T & 6)) throw Error(y(331));
        var l = T;
        for (T |= 4, w = e.current; w !== null; ) {
          var i = w,
            o = i.child;
          if (w.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var d = u[a];
                for (w = d; w !== null; ) {
                  var v = w;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      On(8, v, i);
                  }
                  var m = v.child;
                  if (m !== null) (m.return = v), (w = m);
                  else
                    for (; w !== null; ) {
                      v = w;
                      var h = v.sibling,
                        _ = v.return;
                      if ((Ka(v), v === d)) {
                        w = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = _), (w = h);
                        break;
                      }
                      w = _;
                    }
                }
              }
              var k = i.alternate;
              if (k !== null) {
                var x = k.child;
                if (x !== null) {
                  k.child = null;
                  do {
                    var F = x.sibling;
                    (x.sibling = null), (x = F);
                  } while (x !== null);
                }
              }
              w = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (w = o);
          else
            e: for (; w !== null; ) {
              if (((i = w), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    On(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (w = f);
                break e;
              }
              w = i.return;
            }
        }
        var c = e.current;
        for (w = c; w !== null; ) {
          o = w;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (w = p);
          else
            e: for (o = c; w !== null; ) {
              if (((u = w), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ml(9, u);
                  }
                } catch (S) {
                  V(u, u.return, S);
                }
              if (u === o) {
                w = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (w = g);
                break e;
              }
              w = u.return;
            }
        }
        if (
          ((T = l), _t(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
        )
          try {
            Ue.onPostCommitFiberRoot(sl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (O = n), (je.transition = t);
    }
  }
  return !1;
}
function Qs(e, t, n) {
  (t = un(n, t)),
    (t = Ia(e, t, 1)),
    (e = ct(e, t, 1)),
    (t = se()),
    e !== null && (tr(e, 1, t), he(e, t));
}
function V(e, t, n) {
  if (e.tag === 3) Qs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Qs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (dt === null || !dt.has(r)))
        ) {
          (e = un(n, e)),
            (e = Fa(t, e, 1)),
            (t = ct(t, e, 1)),
            (e = se()),
            t !== null && (tr(t, 1, e), he(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function If(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    J === e &&
      (ee & n) === n &&
      (Y === 4 || (Y === 3 && (ee & 130023424) === ee && 500 > Q() - zo)
        ? Lt(e, 0)
        : (Po |= n)),
    he(e, t);
}
function rc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = fr), (fr <<= 1), !(fr & 130023424) && (fr = 4194304))
      : (t = 1));
  var n = se();
  (e = Ye(e, t)), e !== null && (tr(e, t, n), he(e, n));
}
function Ff(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), rc(e, n);
}
function Bf(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), rc(e, n);
}
var lc;
lc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || fe.current) de = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (de = !1), Nf(e, t, n);
      de = !!(e.flags & 131072);
    }
  else (de = !1), B && t.flags & 1048576 && ua(t, Zr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Tr(e, t), (e = t.pendingProps);
      var l = rn(t, ie.current);
      en(t, n), (l = So(null, t, r, e, l, n));
      var i = jo();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pe(r) ? ((i = !0), qr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            yo(t),
            (l.updater = hl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Pi(t, r, e, n),
            (t = Ti(null, t, r, !0, i, n)))
          : ((t.tag = 0), B && i && co(t), oe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Tr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Uf(r)),
          (e = Pe(r, e)),
          l)
        ) {
          case 0:
            t = Mi(null, t, r, e, n);
            break e;
          case 1:
            t = Ds(null, t, r, e, n);
            break e;
          case 11:
            t = Os(null, t, r, e, n);
            break e;
          case 14:
            t = Rs(null, t, r, Pe(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        Mi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        Ds(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ha(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          ha(e, t),
          Gr(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = un(Error(y(423)), t)), (t = Is(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = un(Error(y(424)), t)), (t = Is(e, t, r, n, l));
            break e;
          } else
            for (
              ve = at(t.stateNode.containerInfo.firstChild),
                ge = t,
                B = !0,
                Me = null,
                n = fa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ln(), r === l)) {
            t = Xe(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ma(t),
        e === null && Ci(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        xi(r, l) ? (o = null) : i !== null && xi(r, i) && (t.flags |= 32),
        Ua(e, t),
        oe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Ci(t), null;
    case 13:
      return Va(e, t, n);
    case 4:
      return (
        _o(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = on(t, null, r, n)) : oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        Os(e, t, r, l, n)
      );
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          R(Yr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Ie(i.value, o)) {
            if (i.children === l.children && !fe.current) {
              t = Xe(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = qe(-1, n & -n)), (a.tag = 2);
                      var d = i.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var v = d.pending;
                        v === null
                          ? (a.next = a)
                          : ((a.next = v.next), (v.next = a)),
                          (d.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Ei(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(y(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Ei(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        oe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        en(t, n),
        (l = Ne(l)),
        (r = r(l)),
        (t.flags |= 1),
        oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Pe(r, t.pendingProps)),
        (l = Pe(r.type, l)),
        Rs(e, t, r, l, n)
      );
    case 15:
      return Ba(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        Tr(e, t),
        (t.tag = 1),
        pe(r) ? ((e = !0), qr(t)) : (e = !1),
        en(t, n),
        Da(t, r, l),
        Pi(t, r, l, n),
        Ti(null, t, r, !0, e, n)
      );
    case 19:
      return $a(e, t, n);
    case 22:
      return Aa(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function ic(e, t) {
  return Tu(e, t);
}
function Af(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Se(e, t, n, r) {
  return new Af(e, t, n, r);
}
function Ro(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Uf(e) {
  if (typeof e == "function") return Ro(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ji)) return 11;
    if (e === bi) return 14;
  }
  return 2;
}
function pt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Se(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Dr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Ro(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case At:
        return Pt(n.children, l, i, t);
      case Gi:
        (o = 8), (l |= 8);
        break;
      case bl:
        return (
          (e = Se(12, n, t, l | 2)), (e.elementType = bl), (e.lanes = i), e
        );
      case ei:
        return (e = Se(13, n, t, l)), (e.elementType = ei), (e.lanes = i), e;
      case ti:
        return (e = Se(19, n, t, l)), (e.elementType = ti), (e.lanes = i), e;
      case mu:
        return gl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case pu:
              o = 10;
              break e;
            case hu:
              o = 9;
              break e;
            case Ji:
              o = 11;
              break e;
            case bi:
              o = 14;
              break e;
            case be:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Se(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Pt(e, t, n, r) {
  return (e = Se(7, e, r, t)), (e.lanes = n), e;
}
function gl(e, t, n, r) {
  return (
    (e = Se(22, e, r, t)),
    (e.elementType = mu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Yl(e, t, n) {
  return (e = Se(6, e, null, t)), (e.lanes = n), e;
}
function Xl(e, t, n) {
  return (
    (t = Se(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Hf(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = zl(0)),
    (this.expirationTimes = zl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Do(e, t, n, r, l, i, o, u, a) {
  return (
    (e = new Hf(e, t, n, u, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Se(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    yo(i),
    e
  );
}
function Vf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Bt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function oc(e) {
  if (!e) return vt;
  e = e._reactInternals;
  e: {
    if (It(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pe(n)) return oa(e, n, t);
  }
  return t;
}
function sc(e, t, n, r, l, i, o, u, a) {
  return (
    (e = Do(n, r, !0, e, l, i, o, u, a)),
    (e.context = oc(null)),
    (n = e.current),
    (r = se()),
    (l = ft(n)),
    (i = qe(r, l)),
    (i.callback = t ?? null),
    ct(n, i, l),
    (e.current.lanes = l),
    tr(e, l, r),
    he(e, r),
    e
  );
}
function yl(e, t, n, r) {
  var l = t.current,
    i = se(),
    o = ft(l);
  return (
    (n = oc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = qe(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ct(l, t, o)),
    e !== null && (De(e, l, o, i), Pr(e, l, o)),
    o
  );
}
function il(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function qs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Io(e, t) {
  qs(e, t), (e = e.alternate) && qs(e, t);
}
function $f() {
  return null;
}
var uc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Fo(e) {
  this._internalRoot = e;
}
_l.prototype.render = Fo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  yl(e, t, null, null);
};
_l.prototype.unmount = Fo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Rt(function () {
      yl(null, e, null, null);
    }),
      (t[Ze] = null);
  }
};
function _l(e) {
  this._internalRoot = e;
}
_l.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Au();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++);
    tt.splice(n, 0, e), n === 0 && Hu(e);
  }
};
function Bo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function kl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ks() {}
function Wf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var d = il(o);
        i.call(d);
      };
    }
    var o = sc(t, r, e, 0, null, !1, !1, "", Ks);
    return (
      (e._reactRootContainer = o),
      (e[Ze] = o.current),
      Wn(e.nodeType === 8 ? e.parentNode : e),
      Rt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var d = il(a);
      u.call(d);
    };
  }
  var a = Do(e, 0, !1, null, null, !1, !1, "", Ks);
  return (
    (e._reactRootContainer = a),
    (e[Ze] = a.current),
    Wn(e.nodeType === 8 ? e.parentNode : e),
    Rt(function () {
      yl(t, a, n, r);
    }),
    a
  );
}
function xl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = il(o);
        u.call(a);
      };
    }
    yl(t, o, e, l);
  } else o = Wf(n, t, e, l, r);
  return il(o);
}
Fu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Nn(t.pendingLanes);
        n !== 0 &&
          (no(t, n | 1), he(t, Q()), !(T & 6) && ((an = Q() + 500), _t()));
      }
      break;
    case 13:
      Rt(function () {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = se();
          De(r, e, 1, l);
        }
      }),
        Io(e, 1);
  }
};
ro = function (e) {
  if (e.tag === 13) {
    var t = Ye(e, 134217728);
    if (t !== null) {
      var n = se();
      De(t, e, 134217728, n);
    }
    Io(e, 134217728);
  }
};
Bu = function (e) {
  if (e.tag === 13) {
    var t = ft(e),
      n = Ye(e, t);
    if (n !== null) {
      var r = se();
      De(n, e, t, r);
    }
    Io(e, t);
  }
};
Au = function () {
  return O;
};
Uu = function (e, t) {
  var n = O;
  try {
    return (O = e), t();
  } finally {
    O = n;
  }
};
di = function (e, t, n) {
  switch (t) {
    case "input":
      if ((li(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = dl(r);
            if (!l) throw Error(y(90));
            gu(r), li(r, l);
          }
        }
      }
      break;
    case "textarea":
      _u(e, n);
      break;
    case "select":
      (t = n.value), t != null && Xt(e, !!n.multiple, t, !1);
  }
};
Cu = Mo;
Eu = Rt;
var Qf = { usingClientEntryPoint: !1, Events: [rr, $t, dl, ju, Nu, Mo] },
  wn = {
    findFiberByHostInstance: Nt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  qf = {
    bundleType: wn.bundleType,
    version: wn.version,
    rendererPackageName: wn.rendererPackageName,
    rendererConfig: wn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ge.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = zu(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wn.findFiberByHostInstance || $f,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Sr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Sr.isDisabled && Sr.supportsFiber)
    try {
      (sl = Sr.inject(qf)), (Ue = Sr);
    } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qf;
_e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Bo(t)) throw Error(y(200));
  return Vf(e, t, null, n);
};
_e.createRoot = function (e, t) {
  if (!Bo(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = uc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Do(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ze] = t.current),
    Wn(e.nodeType === 8 ? e.parentNode : e),
    new Fo(t)
  );
};
_e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = zu(t)), (e = e === null ? null : e.stateNode), e;
};
_e.flushSync = function (e) {
  return Rt(e);
};
_e.hydrate = function (e, t, n) {
  if (!kl(t)) throw Error(y(200));
  return xl(null, e, t, !0, n);
};
_e.hydrateRoot = function (e, t, n) {
  if (!Bo(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = uc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = sc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ze] = t.current),
    Wn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new _l(t);
};
_e.render = function (e, t, n) {
  if (!kl(t)) throw Error(y(200));
  return xl(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function (e) {
  if (!kl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Rt(function () {
        xl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ze] = null);
        });
      }),
      !0)
    : !1;
};
_e.unstable_batchedUpdates = Mo;
_e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!kl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return xl(e, t, n, !1, r);
};
_e.version = "18.3.1-next-f1338f8080-20240426";
function ac() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ac);
    } catch (e) {
      console.error(e);
    }
}
ac(), (au.exports = _e);
var Kf = au.exports,
  Zs = Kf;
(Gl.createRoot = Zs.createRoot), (Gl.hydrateRoot = Zs.hydrateRoot);
var cc = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ys = it.createContext && it.createContext(cc),
  ht = function () {
    return (
      (ht =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var l in t)
              Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
          }
          return e;
        }),
      ht.apply(this, arguments)
    );
  },
  Zf = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
        t.indexOf(r[l]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
          (n[r[l]] = e[r[l]]);
    return n;
  };
function dc(e) {
  return (
    e &&
    e.map(function (t, n) {
      return it.createElement(t.tag, ht({ key: n }, t.attr), dc(t.child));
    })
  );
}
function K(e) {
  return function (t) {
    return it.createElement(Yf, ht({ attr: ht({}, e.attr) }, t), dc(e.child));
  };
}
function Yf(e) {
  var t = function (n) {
    var r = e.attr,
      l = e.size,
      i = e.title,
      o = Zf(e, ["attr", "size", "title"]),
      u = l || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      it.createElement(
        "svg",
        ht(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: a,
            style: ht(ht({ color: e.color || n.color }, n.style), e.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && it.createElement("title", null, i),
        e.children
      )
    );
  };
  return Ys !== void 0
    ? it.createElement(Ys.Consumer, null, function (n) {
        return t(n);
      })
    : t(cc);
}
function Xf(e) {
  return K({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
          clipRule: "evenodd",
        },
      },
    ],
  })(e);
}
function Gf(e) {
  return K({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      { tag: "path", attr: { d: "M12 14l9-5-9-5-9 5 9 5z" } },
      {
        tag: "path",
        attr: {
          d: "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
        },
      },
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
        },
      },
    ],
  })(e);
}
function Jf(e) {
  return K({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17 13l-5 5m0 0l-5-5m5 5V6",
        },
      },
    ],
  })(e);
}
function fc(e) {
  return K({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M13 7l5 5m0 0l-5 5m5-5H6",
        },
      },
    ],
  })(e);
}
function bf(e) {
  return K({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 11l5-5m0 0l5 5m-5-5v12",
        },
      },
    ],
  })(e);
}
function ep(e) {
  return K({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
        },
      },
    ],
  })(e);
}
function tp(e) {
  return K({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        },
      },
    ],
  })(e);
}
function wt(e) {
  return K({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
        },
      },
    ],
  })(e);
}
function np(e) {
  return K({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        },
      },
    ],
  })(e);
}
function rp(e) {
  return K({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
        },
      },
    ],
  })(e);
}
function pc(e) {
  return K({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        },
      },
    ],
  })(e);
}
function lp(e) {
  return K({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 6h16M4 12h16M4 18h16",
        },
      },
    ],
  })(e);
}
function ip(e) {
  return K({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
        },
      },
    ],
  })(e);
}
function op(e) {
  return K({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
        },
      },
    ],
  })(e);
}
function sp(e) {
  return K({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
        },
      },
    ],
  })(e);
}
function up(e) {
  return K({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
        },
      },
    ],
  })(e);
}
const ap = () => {
  window.addEventListener("scroll", function () {
    const l = document.querySelector(".header");
    this.scrollY >= 80
      ? l.classList.add("scroll-header")
      : l.classList.remove("scroll-header");
  });
  const [e, t] = Oe.useState(!1),
    [n, r] = Oe.useState("#home");
  return s.jsx("header", {
    className: "header",
    children: s.jsxs("nav", {
      className: "nav container",
      children: [
        s.jsx("a", {
          href: "index.html",
          className: "nav__logo",
          children: "Portfolio",
        }),
        s.jsxs("div", {
          className: e ? "nav__menu show-menu" : "nav__menu",
          children: [
            s.jsxs("ul", {
              className: "nav__list grid",
              children: [
                s.jsx("li", {
                  className: "nav__item",
                  children: s.jsxs("a", {
                    href: "#home",
                    onClick: () => r("#home"),
                    className:
                      n === "#home" ? "nav__link active-link" : "nav__link",
                    children: [s.jsx(rp, { className: "nav__icon" }), "Home"],
                  }),
                }),
                s.jsx("li", {
                  className: "nav__item",
                  children: s.jsxs("a", {
                    href: "#about",
                    onClick: () => r("#about"),
                    className:
                      n === "#about" ? "nav__link active-link" : "nav__link",
                    children: [s.jsx(up, { className: "nav__icon" }), "About"],
                  }),
                }),
                s.jsx("li", {
                  className: "nav__item",
                  children: s.jsxs("a", {
                    href: "#skills",
                    onClick: () => r("#skills"),
                    className:
                      n === "#skills" ? "nav__link active-link" : "nav__link",
                    children: [s.jsx(ep, { className: "nav__icon" }), "Skills"],
                  }),
                }),
                s.jsx("li", {
                  className: "nav__item",
                  children: s.jsxs("a", {
                    href: "#portfolio",
                    onClick: () => r("#portfolio"),
                    className:
                      n === "#portfolio"
                        ? "nav__link active-link"
                        : "nav__link",
                    children: [
                      s.jsx(ip, { className: "nav__icon" }),
                      "Projects",
                    ],
                  }),
                }),
                s.jsx("li", {
                  className: "nav__item",
                  children: s.jsxs("a", {
                    href: "#contact",
                    onClick: () => r("#contact"),
                    className:
                      n === "#contact" ? "nav__link active-link" : "nav__link",
                    children: [
                      s.jsx(pc, { className: "nav__icon" }),
                      "Contact",
                    ],
                  }),
                }),
              ],
            }),
            s.jsx(Xf, { className: "nav__close", onClick: () => t(!e) }),
          ],
        }),
        s.jsx("div", {
          className: "nav__toggle",
          onClick: () => t(!e),
          children: s.jsx(lp, {}),
        }),
      ],
    }),
  });
};
function hc(e) {
  return K({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
        },
      },
    ],
  })(e);
}
function mc(e) {
  return K({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        },
      },
      { tag: "rect", attr: { x: "2", y: "9", width: "4", height: "12" } },
      { tag: "circle", attr: { cx: "4", cy: "4", r: "2" } },
    ],
  })(e);
}
function vc(e) {
  return K({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
        },
      },
    ],
  })(e);
}
const cp = () =>
    s.jsxs("div", {
      className: "home__social",
      children: [
        s.jsx("a", {
          href: "https://twitter.com/dipayan_porel",
          className: "home__social-icon",
          target: "_blank",
          children: s.jsx(vc, {}),
        }),
        s.jsx("a", {
          href: "https://www.github.com/DIPAYANPOREL",
          className: "home__social-icon",
          target: "_blank",
          children: s.jsx(hc, {}),
        }),
        s.jsx("a", {
          href: "https://www.linkedin.com/in/dipayan-porel/",
          className: "home__social-icon",
          target: "_blank",
          children: s.jsx(mc, {}),
        }),
      ],
    }),
  dp = () =>
    s.jsxs("div", {
      className: "home__data",
      children: [
        s.jsxs("h1", {
          className: "home__title",
          children: [
            "Dipayan Porel",
            s.jsxs("svg", {
              width: "36",
              height: "36",
              viewBox: "0 0 48 48",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              class: "home__hand",
              children: [
                s.jsx("path", {
                  d: "M25.4995 32.0305L31.3495 33.1555L36.1495 8.48051C36.4495 6.83051 35.3995 5.18051 33.8245 4.88051C32.1745 4.58051 30.5995 5.70551 30.2995 7.35551L25.4995 32.0305Z",
                  fill: "#B5D15E",
                }),
                s.jsx("path", {
                  d: "M33.8996 4.88018C33.6746 4.80518 33.5246 4.80518 33.2996 4.80518C34.6496 5.33018 35.3996 6.75518 35.0996 8.25518L30.2996 32.9302L31.3496 33.1552L36.1496 8.48018C36.5246 6.75518 35.4746 5.18018 33.8996 4.88018Z",
                  fill: "#89A635",
                }),
                s.jsx("path", {
                  d: "M19.4995 32.7802H26.5495V5.55518C26.5495 3.53018 24.9745 1.80518 23.0245 1.80518C21.1495 1.80518 19.4995 3.45518 19.4995 5.55518V32.7802Z",
                  fill: "#B5D15E",
                }),
                s.jsx("path", {
                  d: "M23.0995 1.80518C22.9495 1.80518 22.7245 1.80518 22.5745 1.88018C24.2995 2.18018 25.5745 3.68018 25.5745 5.55518V32.8552H26.6245V5.55518C26.6245 3.45518 25.0495 1.80518 23.0995 1.80518Z",
                  fill: "#89A635",
                }),
                s.jsx("path", {
                  d: "M15.7495 32.7054L21.7495 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541C9.74948 4.35541 8.77448 6.08041 9.22448 7.80541L15.7495 32.7054Z",
                  fill: "#B5D15E",
                }),
                s.jsx("path", {
                  d: "M11.3995 3.90541L10.9495 4.13041C12.4495 4.05541 13.7995 5.03041 14.2495 6.60541L20.7745 31.4304L21.8245 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541Z",
                  fill: "#89A635",
                }),
                s.jsx("path", {
                  d: "M2.99937 10.355C1.57437 11.03 1.12437 12.83 1.87437 14.33L11.7744 34.055L16.7994 31.505L6.89937 11.78C6.14937 10.28 4.42437 9.68 2.99937 10.355Z",
                  fill: "#B5D15E",
                }),
                s.jsx("path", {
                  d: "M2.99956 10.355C2.84956 10.43 2.69956 10.505 2.54956 10.655C3.82456 10.28 5.24956 10.955 5.92456 12.305L15.8246 32.03L16.7996 31.58L6.89956 11.78C6.14956 10.28 4.42456 9.68 2.99956 10.355Z",
                  fill: "#89A635",
                }),
                s.jsx("path", {
                  d: "M46.2744 22.2801C45.0744 19.9551 41.3244 20.1051 37.4994 24.3051C34.7994 27.2301 34.2744 28.2051 31.5744 28.1301V25.0551C31.5744 25.0551 25.7994 20.7801 14.3244 22.7301C14.3244 22.7301 7.79945 23.6301 7.79945 27.0801C7.79945 27.0801 6.67445 35.4051 8.99945 40.6551C12.4494 48.4551 30.1494 50.4801 35.6994 37.2051C36.8244 34.5801 39.0744 32.6301 41.0994 30.1551C43.4244 27.1551 47.5494 24.7551 46.2744 22.2801Z",
                  fill: "#B5D15E",
                }),
                s.jsx("path", {
                  d: "M46.2745 22.28C46.0495 21.83 45.7495 21.53 45.3745 21.23C45.4495 21.305 45.5245 21.38 45.5245 21.53C46.7995 24.08 42.6745 26.405 40.1995 29.405C38.1745 31.88 35.9245 33.83 34.7995 36.455C29.9995 47.93 16.0495 47.93 10.1995 42.68C15.5245 48.68 30.5245 49.28 35.5495 37.205C36.6745 34.58 38.9245 32.63 40.9495 30.155C43.4245 27.155 47.5495 24.755 46.2745 22.28ZM32.3245 28.13C27.4495 26.33 18.7495 29.63 19.9495 38.405C19.9495 30.23 27.3745 28.205 31.4245 28.205C32.0245 28.13 32.3245 28.13 32.3245 28.13Z",
                  fill: "#89A635",
                }),
              ],
            }),
          ],
        }),
        s.jsx("h3", {
          className: "home__subtitle",
          children: "Developer + Designer",
        }),
        s.jsx("p", {
          className: "home__description",
          children:
            "Front-end developer dedicated to design and creative solutions.",
        }),
        s.jsxs("a", {
          href: "#contact",
          className: "button button--flex",
          children: [
            "Say Hello",
            s.jsxs("svg", {
              class: "button__icon",
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              children: [
                s.jsx("path", {
                  d: "M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z",
                  fill: "var(--container-color)",
                }),
                s.jsx("path", {
                  d: "M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z",
                  fill: "var(--container-color)",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  fp = () =>
    s.jsx("div", {
      className: "home__scroll",
      children: s.jsxs("a", {
        href: "#about",
        className: "home__scroll-button button--flex",
        children: [
          s.jsxs("svg", {
            width: "32px",
            height: "32px",
            class: "home__scroll-mouse",
            viewBox: "0 0 247 390",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            style: {
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "1.5",
            },
            children: [
              s.jsx("path", {
                class: "wheel",
                d: "M123.359,79.775l0,72.843",
                style: {
                  fill: "none",
                  stroke: "var(--title-color)",
                  strokeWidth: "20px",
                },
              }),
              s.jsx("path", {
                id: "mouse",
                d: "M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z",
                style: {
                  fill: "none",
                  stroke: "var(--title-color)",
                  strokeWidth: "20px",
                },
              }),
            ],
          }),
          s.jsx("span", {
            className: "home__scroll-name",
            children: "Scroll Down",
          }),
          s.jsx(Jf, { className: "home__scroll-arrow" }),
        ],
      }),
    }),
  pp = () =>
    s.jsx("section", {
      className: "home section",
      id: "home",
      children: s.jsxs("div", {
        className: "home__container container grid",
        children: [
          s.jsxs("div", {
            className: "home__content grid",
            children: [
              s.jsx(cp, {}),
              s.jsx("div", { className: "home__img" }),
              s.jsx(dp, {}),
            ],
          }),
          s.jsx(fp, {}),
        ],
      }),
    }),
  hp = "/assets/profileBW-C_2UKnct.jpeg",
  mp = "/assets/Dipayan_Porel_CV-C9hT3g8z.pdf",
  vp = () =>
    s.jsxs("div", {
      className: "about__info grid",
      children: [
        s.jsxs("div", {
          className: "about__box",
          children: [
            s.jsx(np, { className: "about__icon" }),
            s.jsx("h3", { className: "about__title", children: "Experience" }),
            s.jsx("span", {
              className: "about__subtitle",
              children: "1+ Years",
            }),
          ],
        }),
        s.jsxs("div", {
          className: "about__box",
          children: [
            s.jsx(sp, { className: "about__icon" }),
            s.jsx("h3", { className: "about__title", children: "Completed" }),
            s.jsx("span", {
              className: "about__subtitle",
              children: "3 Projects",
            }),
          ],
        }),
        s.jsxs("div", {
          className: "about__box",
          children: [
            s.jsx(op, { className: "about__icon" }),
            s.jsx("h3", { className: "about__title", children: "Support" }),
            s.jsx("span", {
              className: "about__subtitle",
              children: "Online 24/7",
            }),
          ],
        }),
      ],
    }),
  gp = () =>
    s.jsxs("section", {
      className: "about section",
      id: "about",
      children: [
        s.jsx("h2", { className: "section__title", children: "About Me" }),
        s.jsx("span", {
          className: "section__subtitle",
          children: "A short introduction",
        }),
        s.jsxs("div", {
          className: "about__container container grid",
          children: [
            s.jsx("img", { src: hp, alt: "about", className: "about__img" }),
            s.jsxs("div", {
              className: "about__data",
              children: [
                s.jsx(vp, {}),
                s.jsx("p", {
                  className: "about__description",
                  children:
                    "I'm Dipayan, final year B.Tech student in IT. I am passonate about creating applications with highlighting minimal design and user-friendly UI/UX interfaces.",
                }),
                s.jsxs("a", {
                  download: "",
                  href: mp,
                  className: "button button--flex",
                  children: [
                    "Download CV",
                    s.jsxs("svg", {
                      class: "button__icon",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      children: [
                        s.jsx("path", {
                          d: "M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z",
                          fill: "var(--container-color)",
                        }),
                        s.jsx("path", {
                          d: "M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z",
                          fill: "var(--container-color)",
                        }),
                        s.jsx("path", {
                          d: "M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z",
                          fill: "var(--container-color)",
                        }),
                        s.jsx("path", {
                          d: "M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z",
                          fill: "var(--container-color)",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
function Te(e) {
  return K({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",
          clipRule: "evenodd",
        },
      },
    ],
  })(e);
}
const yp = () =>
    s.jsxs("div", {
      className: "skills__content",
      children: [
        s.jsx("h3", {
          className: "skills__title",
          children: "Frontend Developer",
        }),
        s.jsxs("div", {
          className: "skills__box",
          children: [
            s.jsxs("div", {
              className: "skills__group",
              children: [
                s.jsxs("div", {
                  className: "skills__data",
                  children: [
                    s.jsx(Te, {}),
                    s.jsxs("div", {
                      children: [
                        s.jsx("h3", {
                          className: "skills__name",
                          children: "HTML",
                        }),
                        s.jsx("span", {
                          className: "skills__level",
                          children: "Basic",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "skills__data",
                  children: [
                    s.jsx(Te, {}),
                    s.jsxs("div", {
                      children: [
                        s.jsx("h3", {
                          className: "skills__name",
                          children: "CSS/SASS",
                        }),
                        s.jsx("span", {
                          className: "skills__level",
                          children: "Intermediate",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "skills__data",
                  children: [
                    s.jsx(Te, {}),
                    s.jsxs("div", {
                      children: [
                        s.jsx("h3", {
                          className: "skills__name",
                          children: "Bootstrap",
                        }),
                        s.jsx("span", {
                          className: "skills__level",
                          children: "Intermediate",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "skills__group",
              children: [
                s.jsxs("div", {
                  className: "skills__data",
                  children: [
                    s.jsx(Te, {}),
                    s.jsxs("div", {
                      children: [
                        s.jsx("h3", {
                          className: "skills__name",
                          children: "JavaScript",
                        }),
                        s.jsx("span", {
                          className: "skills__level",
                          children: "Intermediate",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "skills__data",
                  children: [
                    s.jsx(Te, {}),
                    s.jsxs("div", {
                      children: [
                        s.jsx("h3", {
                          className: "skills__name",
                          children: "Typescript",
                        }),
                        s.jsx("span", {
                          className: "skills__level",
                          children: "Basic",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "skills__data",
                  children: [
                    s.jsx(Te, {}),
                    s.jsxs("div", {
                      children: [
                        s.jsx("h3", {
                          className: "skills__name",
                          children: "React",
                        }),
                        s.jsx("span", {
                          className: "skills__level",
                          children: "Basic",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  _p = () =>
    s.jsxs("div", {
      className: "skills__content",
      children: [
        s.jsx("h3", {
          className: "skills__title",
          children: "Learing Backend Technologies",
        }),
        s.jsxs("div", {
          className: "skills__box",
          children: [
            s.jsxs("div", {
              className: "skills__group",
              children: [
                s.jsxs("div", {
                  className: "skills__data",
                  children: [
                    s.jsx(Te, {}),
                    s.jsxs("div", {
                      children: [
                        s.jsx("h3", {
                          className: "skills__name",
                          children: "Java",
                        }),
                        s.jsx("span", {
                          className: "skills__level",
                          children: "Basic",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "skills__data",
                  children: [
                    s.jsx(Te, {}),
                    s.jsxs("div", {
                      children: [
                        s.jsx("h3", {
                          className: "skills__name",
                          children: "MySQL",
                        }),
                        s.jsx("span", {
                          className: "skills__level",
                          children: "Basic",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "skills__group",
              children: [
                s.jsxs("div", {
                  className: "skills__data",
                  children: [
                    s.jsx(Te, {}),
                    s.jsxs("div", {
                      children: [
                        s.jsx("h3", {
                          className: "skills__name",
                          children: "npm",
                        }),
                        s.jsx("span", {
                          className: "skills__level",
                          children: "Basic",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "skills__data",
                  children: [
                    s.jsx(Te, {}),
                    s.jsxs("div", {
                      children: [
                        s.jsx("h3", {
                          className: "skills__name",
                          children: "Python",
                        }),
                        s.jsx("span", {
                          className: "skills__level",
                          children: "Basic",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "skills__data",
                  children: [
                    s.jsx(Te, {}),
                    s.jsxs("div", {
                      children: [
                        s.jsx("h3", {
                          className: "skills__name",
                          children: "Git",
                        }),
                        s.jsx("span", {
                          className: "skills__level",
                          children: "Intermediate",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  kp = () =>
    s.jsxs("section", {
      className: "skills section",
      id: "skills",
      children: [
        s.jsx("h2", { className: "section__title", children: "Skills" }),
        s.jsx("span", {
          className: "section__subtitle",
          children: "Technical Lvl",
        }),
        s.jsxs("div", {
          className: "skills__container container grid",
          children: [s.jsx(yp, {}), s.jsx(_p, {})],
        }),
      ],
    }),
  xp = () => {
    const [e, t] = Oe.useState(2),
      n = (r) => {
        t(r);
      };
    return s.jsxs("section", {
      className: "qualification section",
      children: [
        s.jsx("h2", { className: "section__title", children: "Qualification" }),
        s.jsx("span", {
          className: "section__subtitle",
          children: "My Journey",
        }),
        s.jsxs("div", {
          className: "qualification__container container",
          children: [
            s.jsxs("div", {
              className: "qualification__tabs",
              children: [
                s.jsxs("div", {
                  className:
                    e === 1
                      ? "qualification__button button--flex qualification__active"
                      : "qualification__button button--flex",
                  onClick: () => n(1),
                  children: [
                    s.jsx(Gf, { className: "qualification__icon" }),
                    "Experience & Certification",
                  ],
                }),
                s.jsxs("div", {
                  className:
                    e === 2
                      ? "qualification__button button--flex qualification__active"
                      : "qualification__button button--flex",
                  onClick: () => n(2),
                  children: [
                    s.jsx(tp, { className: "qualification__icon" }),
                    "Education",
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "qualification__sections",
              children: [
                s.jsxs("div", {
                  className:
                    e === 1
                      ? "qualification__content qualification__content-active"
                      : "qualification__content",
                  children: [
                    s.jsxs("div", {
                      className: "qualification__data",
                      children: [
                        s.jsxs("div", {
                          children: [
                            s.jsx("h3", {
                              className: "qualification__title",
                              children: "React Basic & Advanced ",
                            }),
                            s.jsx("span", {
                              className: "qualification__subtitle",
                              children: "From COURSERA by META (Certification)",
                            }),
                            s.jsxs("div", {
                              className: "qualification__calendar",
                              children: [
                                s.jsx(wt, {
                                  className: "qualification__calendar-icon",
                                }),
                                "Nov 2023 - Jan 2024",
                              ],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          children: [
                            s.jsx("span", {
                              className: "qualification__rounder",
                            }),
                            s.jsx("span", { className: "qualification__line" }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "qualification__data",
                      children: [
                        s.jsx("div", {}),
                        s.jsxs("div", {
                          children: [
                            s.jsx("span", {
                              className: "qualification__rounder",
                            }),
                            s.jsx("span", { className: "qualification__line" }),
                          ],
                        }),
                        s.jsxs("div", {
                          children: [
                            s.jsx("h3", {
                              className: "qualification__title",
                              children: "Google UX Design",
                            }),
                            s.jsx("span", {
                              className: "qualification__subtitle",
                              children:
                                "From COURSERA by GOOGLE(Certification)",
                            }),
                            s.jsxs("div", {
                              className: "qualification__calendar",
                              children: [
                                s.jsx(wt, {
                                  className: "qualification__calendar-icon",
                                }),
                                "Jan 2024 - Jul 2024",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "qualification__data",
                      children: [
                        s.jsxs("div", {
                          children: [
                            s.jsx("h3", {
                              className: "qualification__title",
                              children: "SDE Intern",
                            }),
                            s.jsx("span", {
                              className: "qualification__subtitle",
                              children: "Salahkaar Consultant",
                            }),
                            s.jsxs("div", {
                              className: "qualification__calendar",
                              children: [
                                s.jsx(wt, {
                                  className: "qualification__calendar-icon",
                                }),
                                "Jul 2024 - Present",
                              ],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          children: [
                            s.jsx("span", {
                              className: "qualification__rounder",
                            }),
                            s.jsx("span", { className: "qualification__line" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className:
                    e === 2
                      ? "qualification__content qualification__content-active"
                      : "qualification__content",
                  children: [
                    s.jsxs("div", {
                      className: "qualification__data",
                      children: [
                        s.jsxs("div", {
                          children: [
                            s.jsx("h3", {
                              className: "qualification__title",
                              children: "10th Board",
                            }),
                            s.jsx("span", {
                              className: "qualification__subtitle",
                              children: "Howrah Vivekananda Institution",
                            }),
                            s.jsx("span", {
                              className: "qualification__subtitle",
                              children: "Marks - 81.86%",
                            }),
                            s.jsxs("div", {
                              className: "qualification__calendar",
                              children: [
                                s.jsx(wt, {
                                  className: "qualification__calendar-icon",
                                }),
                                "2017",
                              ],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          children: [
                            s.jsx("span", {
                              className: "qualification__rounder",
                            }),
                            s.jsx("span", { className: "qualification__line" }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "qualification__data",
                      children: [
                        s.jsx("div", {}),
                        s.jsxs("div", {
                          children: [
                            s.jsx("span", {
                              className: "qualification__rounder",
                            }),
                            s.jsx("span", { className: "qualification__line" }),
                          ],
                        }),
                        s.jsxs("div", {
                          children: [
                            s.jsx("h3", {
                              className: "qualification__title",
                              children: "12th Board",
                            }),
                            s.jsx("span", {
                              className: "qualification__subtitle",
                              children: "Howrah Vivekananda Institution",
                            }),
                            s.jsx("span", {
                              className: "qualification__subtitle",
                              children: "Marks - 64.6%",
                            }),
                            s.jsxs("div", {
                              className: "qualification__calendar",
                              children: [
                                s.jsx(wt, {
                                  className: "qualification__calendar-icon",
                                }),
                                "2017-2019",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "qualification__data",
                      children: [
                        s.jsxs("div", {
                          children: [
                            s.jsx("h3", {
                              className: "qualification__title",
                              children: "Diploma in ETCE",
                            }),
                            s.jsx("span", {
                              className: "qualification__subtitle",
                              children:
                                "Ramakrishna Mission Shilpamandira, Belur",
                            }),
                            s.jsx("span", {
                              className: "qualification__subtitle",
                              children: "Marks - 85.1%",
                            }),
                            s.jsxs("div", {
                              className: "qualification__calendar",
                              children: [
                                s.jsx(wt, {
                                  className: "qualification__calendar-icon",
                                }),
                                "2019-2022",
                              ],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          children: [
                            s.jsx("span", {
                              className: "qualification__rounder",
                            }),
                            s.jsx("span", { className: "qualification__line" }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "qualification__data",
                      children: [
                        s.jsx("div", {}),
                        s.jsxs("div", {
                          children: [
                            s.jsx("span", {
                              className: "qualification__rounder",
                            }),
                            s.jsx("span", { className: "qualification__line" }),
                          ],
                        }),
                        s.jsxs("div", {
                          children: [
                            s.jsx("h3", {
                              className: "qualification__title",
                              children: "Information Technology(B.Tech)",
                            }),
                            s.jsx("span", {
                              className: "qualification__subtitle",
                              children: "Heritage Institute of Technology",
                            }),
                            s.jsx("span", {
                              className: "qualification__subtitle",
                              children: "Marks - 7.32(CGPA)",
                            }),
                            s.jsxs("div", {
                              className: "qualification__calendar",
                              children: [
                                s.jsx(wt, {
                                  className: "qualification__calendar-icon",
                                }),
                                "2022-Present",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  bn = { _origin: "https://api.emailjs.com" },
  wp = (e, t = "https://api.emailjs.com") => {
    (bn._userID = e), (bn._origin = t);
  },
  gc = (e, t, n) => {
    if (!e)
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t)
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n)
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return !0;
  };
class Xs {
  constructor(t) {
    (this.status = t ? t.status : 0),
      (this.text = t ? t.responseText : "Network Error");
  }
}
const yc = (e, t, n = {}) =>
    new Promise((r, l) => {
      const i = new XMLHttpRequest();
      i.addEventListener("load", ({ target: o }) => {
        const u = new Xs(o);
        u.status === 200 || u.text === "OK" ? r(u) : l(u);
      }),
        i.addEventListener("error", ({ target: o }) => {
          l(new Xs(o));
        }),
        i.open("POST", bn._origin + e, !0),
        Object.keys(n).forEach((o) => {
          i.setRequestHeader(o, n[o]);
        }),
        i.send(t);
    }),
  Sp = (e, t, n, r) => {
    const l = r || bn._userID;
    return (
      gc(l, e, t),
      yc(
        "/api/v1.0/email/send",
        JSON.stringify({
          lib_version: "3.12.1",
          user_id: l,
          service_id: e,
          template_id: t,
          template_params: n,
        }),
        { "Content-type": "application/json" }
      )
    );
  },
  jp = (e) => {
    let t;
    if (
      (typeof e == "string" ? (t = document.querySelector(e)) : (t = e),
      !t || t.nodeName !== "FORM")
    )
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return t;
  },
  Np = (e, t, n, r) => {
    const l = r || bn._userID,
      i = jp(n);
    gc(l, e, t);
    const o = new FormData(i);
    return (
      o.append("lib_version", "3.12.1"),
      o.append("service_id", e),
      o.append("template_id", t),
      o.append("user_id", l),
      yc("/api/v1.0/email/send-form", o)
    );
  },
  Cp = { init: wp, send: Sp, sendForm: Np },
  Ep = () => {
    const e = Oe.useRef(),
      t = (n) => {
        n.preventDefault(),
          Cp.sendForm(
            "service_s53x8mc",
            "template_fwq8n7v",
            e.current,
            "cXginQ40keRVEt1YV"
          ),
          n.target.reset();
      };
    return s.jsxs("section", {
      className: "contact section",
      id: "contact",
      children: [
        s.jsx("h2", { className: "section__title", children: "Let's Connect" }),
        s.jsx("span", {
          className: "section__subtitle",
          children: "Contact Me",
        }),
        s.jsxs("div", {
          className: "contact__container container grid",
          children: [
            s.jsxs("div", {
              className: "contact__content",
              children: [
                s.jsx("h3", {
                  className: "contact__title",
                  children: "Talk to me",
                }),
                s.jsx("div", {
                  className: "contact__info",
                  children: s.jsxs("div", {
                    className: "contact__card",
                    children: [
                      s.jsx(pc, { className: "contact__card-icon" }),
                      s.jsx("h3", {
                        className: "contact__card-title",
                        children: "Email",
                      }),
                      s.jsx("span", {
                        className: "contact__card-data",
                        children: "rkms2022dipayanporeldetce18@gmail.com",
                      }),
                      s.jsxs("a", {
                        href: "mailto:cyphersylph@gmail.com",
                        className: "contact__button",
                        children: [
                          "Write Me",
                          " ",
                          s.jsx(fc, { className: "contact__button-icon" }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            s.jsxs("div", {
              className: "contact__content",
              children: [
                s.jsx("h3", {
                  className: "contact__title",
                  children: "What's the project?",
                }),
                s.jsxs("form", {
                  ref: e,
                  onSubmit: t,
                  className: "contact__form",
                  children: [
                    s.jsxs("div", {
                      className: "contact__form-div",
                      children: [
                        s.jsx("label", {
                          className: "contact__form-tag",
                          children: "Name",
                        }),
                        s.jsx("input", {
                          type: "text",
                          name: "name",
                          className: "contact__form-input",
                          placeholder: "Type your name",
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "contact__form-div",
                      children: [
                        s.jsx("label", {
                          className: "contact__form-tag",
                          children: "Email",
                        }),
                        s.jsx("input", {
                          type: "email",
                          name: "email",
                          className: "contact__form-input",
                          placeholder: "Type your email",
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "contact__form-div contact__form-area",
                      children: [
                        s.jsx("label", {
                          className: "contact__form-tag",
                          children: "Project",
                        }),
                        s.jsx("textarea", {
                          name: "project",
                          cols: "30",
                          rows: "10",
                          className: "contact__form-input",
                          placeholder: "Provide some project details...",
                        }),
                      ],
                    }),
                    s.jsxs("button", {
                      href: "#contact",
                      className: "button button--flex",
                      children: [
                        "Send Message",
                        s.jsxs("svg", {
                          class: "button__icon",
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          children: [
                            s.jsx("path", {
                              d: "M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z",
                              fill: "var(--container-color)",
                            }),
                            s.jsx("path", {
                              d: "M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z",
                              fill: "var(--container-color)",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Lp = () => (
    window.addEventListener("scroll", function () {
      const e = document.querySelector(".scrollup");
      this.scrollY >= 560
        ? e.classList.add("show-scroll")
        : e.classList.remove("show-scroll");
    }),
    s.jsx("a", {
      href: "#",
      className: "scrollup",
      children: s.jsx(bf, { className: "scrollup__icon" }),
    })
  ),
  Pp = "/assets/project1-D75pHR6_.webp",
  zp = "/assets/project2-DtirLhJp.webp",
  Mp = "/assets/project3-BbcqLZUD.webp",
  Gs = [
    {
      id: 1,
      image: Pp,
      title: "Figma design of a watch e-commerce",
      category: "A",
      link: "https://www.figma.com/design/jNPvrrQ5SB4PS5yuAS7Ira/Ecommerce-Website?node-id=0-1&t=pNgQPoDSYbrZqskk-1",
    },
    {
      id: 2,
      image: zp,
      title: "Real-esate website UI",
      category: "B",
      link: "https://real-estate-project-five.vercel.app/",
    },
    {
      id: 3,
      image: Mp,
      title: "Crypto value tracker",
      category: "C",
      link: "https://crypto-exchange-live-value.vercel.app/",
    },
  ],
  Tp = [{ name: "All" }, { name: "A" }, { name: "B" }, { name: "C" }],
  Op = ({ item: e }) =>
    s.jsxs(
      "div",
      {
        className: "project__card",
        children: [
          s.jsx("img", { className: "project__img", src: e.image, alt: "" }),
          s.jsx("h3", { className: "project__title", children: e.title }),
          s.jsxs("a", {
            href: e.link,
            className: "project__button",
            children: [
              "Demo ",
              s.jsx(fc, { className: "project__button-icon" }),
            ],
          }),
        ],
      },
      e.id
    ),
  Rp = () => {
    const [e, t] = Oe.useState({ name: "All" }),
      [n, r] = Oe.useState([]),
      [l, i] = Oe.useState(0);
    Oe.useEffect(() => {
      if (e.name === "All") r(Gs);
      else {
        const u = Gs.filter((a) => a.category === e.name);
        r(u);
      }
    }, [e]);
    const o = (u, a) => {
      t({ name: u.target.textContent }), i(a);
    };
    return s.jsxs("div", {
      children: [
        s.jsx("div", {
          className: "project__filters",
          children: Tp.map((u, a) =>
            s.jsx(
              "span",
              {
                onClick: (d) => {
                  o(d, a);
                },
                className: `${l === a ? "active-project" : ""} project__item`,
                children: u.name,
              },
              a
            )
          ),
        }),
        s.jsx("div", {
          className: "project__container container grid",
          children: n.map((u) => s.jsx(Op, { item: u }, u.id)),
        }),
      ],
    });
  },
  Dp = () =>
    s.jsxs("section", {
      className: "portfolio section",
      id: "portfolio",
      children: [
        s.jsx("h2", { className: "section__title", children: "Portfolio" }),
        s.jsx("span", {
          className: "section__subtitle",
          children: "Recent Projects",
        }),
        s.jsx(Rp, {}),
      ],
    }),
  Ip = () =>
    s.jsx("footer", {
      className: "footer",
      children: s.jsxs("div", {
        className: "footer__container container",
        children: [
          s.jsx("h1", { className: "footer__title", children: "Dipayan" }),
          s.jsxs("ul", {
            className: "footer__list",
            children: [
              s.jsx("li", {
                children: s.jsx("a", {
                  href: "#about",
                  className: "footer__link",
                  children: "About",
                }),
              }),
              s.jsx("li", {
                children: s.jsx("a", {
                  href: "#portfolio",
                  className: "footer__link",
                  children: "Projects",
                }),
              }),
              s.jsx("li", {
                children: s.jsx("a", {
                  href: "#skills",
                  className: "footer__link",
                  children: "Skills",
                }),
              }),
            ],
          }),
          s.jsxs("div", {
            className: "footer__social",
            children: [
              s.jsx("a", {
                href: "https://twitter.com/dipayan_porel",
                className: "home__social-icon",
                target: "_blank",
                rel: "noreferrer",
                children: s.jsx(vc, {}),
              }),
              s.jsx("a", {
                href: "https://www.github.com/DIPAYANPOREL",
                className: "home__social-icon",
                target: "_blank",
                rel: "noreferrer",
                children: s.jsx(hc, {}),
              }),
              s.jsx("a", {
                href: "https://www.linkedin.com/in/dipayan-porel/",
                className: "home__social-icon",
                target: "_blank",
                rel: "noreferrer",
                children: s.jsx(mc, {}),
              }),
            ],
          }),
        ],
      }),
    }),
  Fp = () =>
    s.jsxs(s.Fragment, {
      children: [
        s.jsx(ap, {}),
        s.jsxs("main", {
          className: "main",
          children: [
            s.jsx(pp, {}),
            s.jsx(gp, {}),
            s.jsx(kp, {}),
            s.jsx(xp, {}),
            s.jsx(Dp, {}),
            s.jsx(Ep, {}),
          ],
        }),
        s.jsx(Ip, {}),
        s.jsx(Lp, {}),
      ],
    });
Gl.createRoot(document.getElementById("root")).render(
  s.jsx(it.StrictMode, { children: s.jsx(Fp, {}) })
);
