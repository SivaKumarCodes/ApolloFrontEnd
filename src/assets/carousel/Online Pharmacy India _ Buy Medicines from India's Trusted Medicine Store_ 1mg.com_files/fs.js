//!This code is part of the Services provided by FullStory, Inc. For license information, please refer to https://www.fullstory.com/legal/terms-and-conditions/
//!Portions of this code are licensed under the following license:
//!  For license information please see fs.js.LICENSE.txt
!(function () {
  'use strict';
  var e = {
      248: function (e, t, n) {
        var r,
          i = n(940);
        function o(e) {}
        !(function (e) {
          (e[(e.Unknown = 0)] = 'Unknown'),
            (e[(e.Clean = 1)] = 'Clean'),
            (e[(e.UnrecoverableFailure = 2)] = 'UnrecoverableFailure');
        })(r || (r = {}));
        var s = new ((function () {
          function e(e) {
            this.rebuildFromSnapshot(e);
          }
          return (
            (e.prototype.rebuildFromSnapshot = function (e) {
              var t = this.snapshot;
              if (((this.snapshot = e), !t || t.functions !== e.functions)) {
                var n = e.functions;
                (this.arrayIsArray = n.arrayIsArray),
                  (this.clearWindowInterval = u(n.clearWindowInterval)),
                  (this.clearWindowTimeout = u(n.clearWindowTimeout)),
                  (this.dateGetTime = u(n.dateGetTime)),
                  (this.dateNow = n.dateNow),
                  (this.docFragQuerySelectorAll = u(n.docFragQuerySelectorAll)),
                  (this.docQuerySelectorAll = u(n.docQuerySelectorAll)),
                  (this.elMatches = u(n.elMatches)),
                  (this.elQuerySelectorAll = u(n.elQuerySelectorAll)),
                  (this.jsonParse = n.jsonParse),
                  (this.jsonStringify = n.jsonStringify),
                  (this.matchMedia = c(n.matchMedia)),
                  (this.mathAbs = n.mathAbs),
                  (this.mathFloor = n.mathFloor),
                  (this.mathMax = n.mathMax),
                  (this.mathMin = n.mathMin),
                  (this.mathPow = n.mathPow),
                  (this.mathRandom = n.mathRandom),
                  (this.mathRound = n.mathRound),
                  (this.objectHasOwnProp = u(n.objectHasOwnProp)),
                  (this.objectKeys = n.objectKeys),
                  (this.objectValues = n.objectValues || null),
                  (this.requestWindowAnimationFrame = c(
                    n.requestWindowAnimationFrame
                  )),
                  (this.requestWindowIdleCallback = c(
                    n.requestWindowIdleCallback
                  )),
                  (this.setWindowInterval = u(n.setWindowInterval)),
                  (this.setWindowTimeout = u(n.setWindowTimeout));
              }
            }),
            e
          );
        })())(a(window));
        function a(e, t) {
          void 0 === t && (t = r.Unknown);
          var n = t,
            i = [],
            o = function (e) {
              return (
                (n = r.UnrecoverableFailure),
                i.push('Snapshot failed: ' + e),
                function () {
                  throw new Error('Invoked failed snapshot');
                }
              );
            },
            s = function (e) {
              try {
                return e();
              } catch (e) {
                return o(e.message);
              }
            },
            a = function (e) {
              try {
                return e() || o('snapshot not found');
              } catch (e) {
                return o(e.message);
              }
            },
            u = {
              arrayIsArray: s(function () {
                return e.Array.isArray;
              }),
              clearWindowInterval: s(function () {
                return e.clearInterval;
              }),
              clearWindowTimeout: s(function () {
                return e.clearTimeout;
              }),
              dateGetTime: s(function () {
                return e.Date.prototype.getTime;
              }),
              dateNow: s(function () {
                return e.Date.now;
              }),
              docFragQuerySelectorAll: a(function () {
                var t;
                return null === (t = e.DocumentFragment) || void 0 === t
                  ? void 0
                  : t.prototype.querySelectorAll;
              }),
              docQuerySelectorAll: a(function () {
                var t;
                return null !== (t = e.Document.prototype.querySelectorAll) &&
                  void 0 !== t
                  ? t
                  : e.document.querySelectorAll;
              }),
              elMatches: a(function () {
                return l(e, h);
              }),
              elQuerySelectorAll: a(function () {
                return l(e, d);
              }),
              jsonParse: s(function () {
                return e.JSON.parse;
              }),
              jsonStringify: s(function () {
                return e.JSON.stringify;
              }),
              matchMedia: s(function () {
                return e.matchMedia;
              }),
              mathAbs: s(function () {
                return e.Math.abs;
              }),
              mathFloor: s(function () {
                return e.Math.floor;
              }),
              mathMax: s(function () {
                return e.Math.max;
              }),
              mathMin: s(function () {
                return e.Math.min;
              }),
              mathPow: s(function () {
                return e.Math.pow;
              }),
              mathRandom: s(function () {
                return e.Math.random;
              }),
              mathRound: s(function () {
                return e.Math.round;
              }),
              objectHasOwnProp: s(function () {
                return e.Object.prototype.hasOwnProperty;
              }),
              objectKeys: s(function () {
                return e.Object.keys;
              }),
              objectValues: s(function () {
                return e.Object.values;
              }),
              requestWindowAnimationFrame: s(function () {
                return e.requestAnimationFrame;
              }),
              requestWindowIdleCallback: s(function () {
                return e.requestIdleCallback;
              }),
              setWindowInterval: s(function () {
                return e.setInterval;
              }),
              setWindowTimeout: s(function () {
                return e.setTimeout;
              }),
            },
            c = {
              functionToString: s(function () {
                return e.Function.prototype.toString;
              }),
              objectToString: s(function () {
                return e.Object.prototype.toString;
              }),
            };
          return { status: n, functions: u, helpers: c, errors: i };
        }
        function u(e) {
          return function (t) {
            for (var n = [], r = 1; r < arguments.length; r++)
              n[r - 1] = arguments[r];
            return e.apply(t, n);
          };
        }
        function c(e) {
          return e ? u(e) : null;
        }
        function h(e) {
          return (
            e.matches ||
            e.webkitMatchesSelector ||
            e.msMatchesSelector ||
            e.mozMatchesSelector
          );
        }
        function d(e) {
          return e.querySelectorAll;
        }
        function l(e, t) {
          var n,
            r,
            i = (
              null === (n = e.Element) || void 0 === n ? void 0 : n.prototype
            )
              ? t(
                  null === (r = e.Element) || void 0 === r
                    ? void 0
                    : r.prototype
                )
              : void 0,
            o = e.document ? e.document.documentElement : void 0;
          if ((!o || (i && o instanceof e.Element) || (i = t(o)), !i))
            throw new Error('Unabled to find Element proto function');
          return i;
        }
        function p() {
          var e = function () {
            return s.dateNow();
          };
          return (
            'number' != typeof e() &&
              (e = function () {
                return s.dateGetTime(new Date());
              }),
            e
          );
        }
        var f = (function () {
          var e,
            t = p(),
            n =
              null !==
                (e = (function () {
                  var e;
                  if (
                    (function () {
                      var e = window.performance;
                      return !(!e || !e.now);
                    })()
                  ) {
                    var t = window.performance,
                      n = t.now();
                    if ('number' == typeof n && isFinite(n) && !(n <= 0)) {
                      var r = t.timeOrigin;
                      if ('number' != typeof r) {
                        var i = p()() - t.now(),
                          o =
                            null === (e = t.timing) || void 0 === e
                              ? void 0
                              : e.navigationStart;
                        r = o ? Math.min(i, o) : i;
                      }
                      var s = Math.round(r);
                      if ('number' == typeof s && isFinite(s) && !(s <= 0))
                        return s;
                    }
                  }
                })()) && void 0 !== e
                ? e
                : t();
          return {
            now: t,
            timeOrigin: n,
            msSinceDocumentStart: function () {
              return t() - n;
            },
          };
        })();
        function _() {
          return f.now();
        }
        function v() {
          return f.msSinceDocumentStart();
        }
        var g,
          y,
          m = [
            '',
            '0',
            '1',
            '-1',
            'true',
            'false',
            'n/a',
            'nan',
            'undefined',
            'null',
            'nil',
            'the_id_that_you_use_in_your_app_for_this_user',
          ],
          S = [
            '811c9dc5',
            '350ca8af',
            '340ca71c',
            '14cd0a2b',
            '4db211e5',
            '0b069958',
            '3613e041',
            '2f8f13ba',
            '9b61ad43',
            '77074ba4',
            '0da3f8ec',
            '1c750511',
          ],
          w = function () {
            return s.mathFloor(_() / 1e3);
          },
          E = function () {
            return w() + 31536e3;
          };
        function b(e) {
          if (!e) return null;
          var t,
            n = e.split('#');
          if (n.length < 3) return null;
          for (var r = 2; r < n.length; r++) {
            var i = n[r];
            if (i.indexOf('/') >= 0) {
              var o = i.split('/'),
                s = o[0],
                a = o[1];
              (n[r] = s), (t = a);
              break;
            }
          }
          var u = (function (e) {
            var t = parseInt(null != e ? e : '', 10),
              n = w(),
              r = E();
            return isNaN(t) ? r : t <= n ? void 0 : t > r ? r : t;
          })(t);
          if (!u) return null;
          n[0];
          var c = n[1],
            h = n[2],
            d = n[3],
            l = '';
          d &&
            ((l = decodeURIComponent(d)),
            (m.indexOf(l) >= 0 || S.indexOf(l) >= 0) && (l = ''));
          var p = (null != h ? h : '').split(':'),
            f = p[0],
            _ = p[1],
            v = p[2];
          return (
            p[3],
            {
              appKeyHash: l,
              expirationAbsTimeSeconds: u,
              userId: f,
              orgId: c,
              pageCount: C(p[4]),
              sessionId: null != _ ? _ : '',
              sessionStartTime: C(v),
            }
          );
        }
        function T(e) {
          var t = {};
          try {
            for (var n = e.cookie.split(';'), r = 0; r < n.length; r++) {
              var i = n[r].replace(/^\s+|\s+$/g, '').split('=');
              t[i[0]] || (t[i[0]] = i[1]);
            }
          } catch (e) {}
          return t;
        }
        function C(e) {
          var t = parseInt(null != e ? e : '', 10);
          return isNaN(t) ? void 0 : t;
        }
        function I(e) {
          if (g) return g;
          var t = k(e);
          return t || (t = e._fs_namespace) ? ((g = t), t) : (g = 'FS');
        }
        function k(e) {
          return e._fs_loaded;
        }
        function A(e) {
          return e[I(e)];
        }
        function x(e) {
          return 'localhost' == e || '127.0.0.1' == e;
        }
        !(function (e) {
          var t, n, r;
          ((r =
            (t = e.V1 || (e.V1 = {})).OperationName ||
            (t.OperationName = {})).Consent = 'consent'),
            (r.Log = 'log'),
            (r.Record = 'rec'),
            ((n = t.VarOperationName || (t.VarOperationName = {})).Event =
              'event'),
            (n.Page = 'page'),
            (n.Vars = 'setVars'),
            (n.User = 'user'),
            (function (e) {
              var t;
              !(function (e) {
                (e.TrackEvent = 'trackEvent'),
                  (e.GetSession = 'getSession'),
                  (e.Init = 'init'),
                  (e.Log = 'log'),
                  (e.Source = 'source'),
                  (e.Observe = 'observe'),
                  (e.Restart = 'restart'),
                  (e.SetIdentity = 'setIdentity'),
                  (e.SetConfig = 'setConfig'),
                  (e.SetPage = 'setPage'),
                  (e.SetProperties = 'setProperties'),
                  (e.Shutdown = 'shutdown'),
                  (e.Start = 'start'),
                  (e.Stat = 'stat');
              })(e.OperationName || (e.OperationName = {})),
                (function (e) {
                  (e.START = 'start'),
                    (e.SHUTDOWN = 'shutdown'),
                    (e.INTERNAL_BUNDLE = 'internal/bundle'),
                    (e.INTERNAL_ERROR = 'internal/error'),
                    (e.INTERNAL_FS_INIT = 'internal/fs-init');
                })((t = e.EventTypeName || (e.EventTypeName = {}))),
                (e.EventTypes = [
                  t.START,
                  t.SHUTDOWN,
                  t.INTERNAL_BUNDLE,
                  t.INTERNAL_ERROR,
                  t.INTERNAL_FS_INIT,
                ]);
            })(e.V2 || (e.V2 = {}));
        })(y || (y = {}));
        var R = /^([^.]+\.)*(fullstory|onfire).[^.]+(\/|$)/;
        function P(e) {
          return M(e, 'edge');
        }
        var O = ['rs', 'rs-2', 'edge', 'www', 'app'];
        function M(e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          if (!e) return e;
          if (!R.test(e)) return e;
          if (
            t.some(function (t) {
              return 0 === e.lastIndexOf(t + '.', 0);
            })
          )
            return e;
          for (var r = t[0], i = 0, o = O; i < o.length; i++) {
            var s = o[i];
            if (0 === e.lastIndexOf(s + '.', 0))
              return r + '.' + e.slice((s + '.').length);
          }
          return r + '.' + e;
        }
        function L(e) {
          return R.test(e);
        }
        function U(e, t, n) {
          void 0 === n && (n = 'string');
          var r = e[t];
          if (typeof r === n) return r;
        }
        function N(e) {
          return U(e, '_fs_script') || Y(Q(e));
        }
        function D(e) {
          var t;
          return null !== (t = U(e, '_fs_rec_settings_host')) && void 0 !== t
            ? t
            : P(Q(e));
        }
        function F(e) {
          return U(e, '_fs_rec_host') || M(Q(e), 'rs', 'rs-2');
        }
        function H(e) {
          return U(e, '_fs_app_host') || G(Q(e));
        }
        function q(e) {
          return U(e, '_fs_ext_org') || U(e, '_fs_org');
        }
        function W(e) {
          return !!U(e, '_fs_capture_on_start', 'boolean');
        }
        function B(e) {
          return !!U(e, '_fs_is_outer_script', 'boolean');
        }
        function j(e) {
          return e._fs_transport;
        }
        function V(e) {
          var t = A(e);
          if (!t) return [];
          var n = t.q;
          return n ? (delete t.q, n) : [];
        }
        function K(e, t) {
          var n = A(e);
          if (n) {
            var r = n.q;
            r || (r = n.q = []), r.push(t);
          }
        }
        function z(e) {
          var t = A(e);
          return (null == t ? void 0 : t._v) || 'unknown';
        }
        function Q(e) {
          var t = U(e, '_fs_ext_host') || U(e, '_fs_host');
          if (t) {
            var n = (function (e) {
              var t,
                n,
                r =
                  null !==
                    (n =
                      null === (t = q(e)) || void 0 === t
                        ? void 0
                        : t.split('-')) && void 0 !== n
                    ? n
                    : [];
              if (!(r.length < 3)) {
                var i = r[0],
                  o = r[r.length - 1];
                if (!('na1' === o || i.length > 1)) return o;
              }
            })(e);
            if (!n || !L(t)) return t;
            var r = '';
            return (
              0 === t.indexOf('www.') && ((t = t.slice(4)), (r = 'www.')),
              0 === t.indexOf(n + '.') && (t = t.slice((n + '.').length)),
              '' + r + n + '.' + t
            );
          }
        }
        function G(e) {
          return e
            ? x(
                (function (e) {
                  var t = e,
                    n = t.indexOf(':');
                  return n >= 0 && (t = t.slice(0, n)), t;
                })(e)
              )
              ? e
              : 0 == e.indexOf('www.')
              ? 'app.' + e.slice(4)
              : 'app.' + e
            : e;
        }
        function Y(e) {
          var t = P(e);
          if (t) return t + '/s/fs.js';
        }
        function X(e, t) {
          return function () {
            for (var n = [], r = 0; r < arguments.length; r++)
              n[r] = arguments[r];
            try {
              return e.apply(this, n);
            } catch (e) {
              try {
                t && t(e);
              } catch (e) {}
            }
          };
        }
        var Z = function () {},
          J = '_fs_weak_map_key',
          $ = (function () {
            function e(e) {
              this._wm = new WeakMap(e);
            }
            return (
              (e.prototype.get = function (e) {
                var t = this._wm.get(e);
                return void 0 === t ? this._wm.get(e[J] || {}) : t;
              }),
              (e.prototype.set = function (e, t) {
                try {
                  this._wm.set(e, t);
                } catch (n) {
                  (e[J] = e[J] || {}), this._wm.set(e[J], t);
                }
                return this;
              }),
              (e.prototype['delete'] = function (e) {
                return this._wm['delete'](e) || this._wm['delete'](e[J] || {});
              }),
              (e.prototype.has = function (e) {
                return this._wm.has(e) || this._wm.has(e[J] || {});
              }),
              e
            );
          })();
        function ee(e) {
          return s.arrayIsArray(e);
        }
        var te =
          'function' == typeof s.objectKeys
            ? function (e) {
                return s.objectKeys(e);
              }
            : function (e) {
                var t = [];
                for (var n in e) s.objectHasOwnProp(e, n) && t.push(n);
                return t;
              };
        function ne(e, t) {
          return 0 == e.lastIndexOf(t, 0);
        }
        function re(e, t) {
          for (var n in e) s.objectHasOwnProp(e, n) && t(e[n], n, e);
        }
        function ie(e) {
          for (var t in e)
            if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
        }
        function oe(e, t) {
          var n = 0;
          for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r) && ++n > t)
              return !1;
          return n == t;
        }
        function se(e, t) {
          var n = 0;
          for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r) && ++n > t)
              return !0;
          return !1;
        }
        function ae(e) {
          var t = e.nextSibling;
          return t && e.parentNode && t === e.parentNode.firstChild ? null : t;
        }
        function ue(e) {
          var t = e.previousSibling;
          return t && e.parentNode && t === e.parentNode.lastChild ? null : t;
        }
        function ce(e) {
          return function () {
            for (var t = this, n = [], r = 0; r < arguments.length; r++)
              n[r] = arguments[r];
            var i = window;
            return i.Zone && i.Zone.root && 'function' == typeof i.Zone.root.run
              ? i.Zone.root.run(function () {
                  return e.apply(t, n);
                })
              : e.apply(this, n);
          };
        }
        function he(e) {
          try {
            var t = window;
            if (t.Zone && t.Zone.root && 'function' == typeof t.Zone.root.wrap)
              return t.Zone.root.wrap(e);
          } catch (e) {}
          return e;
        }
        function de(e, t, n) {
          if ((void 0 === n && (n = he), !e)) return Z;
          var r = n(e);
          return X(t ? r.bind(t) : r, function (e) {});
        }
        function le(e) {
          var t,
            n = Object.getOwnPropertyDescriptor(Array.prototype, 'toJSON'),
            r = Object.getOwnPropertyDescriptor(String.prototype, 'toJSON');
          try {
            n && n.value && n.configurable && delete Array.prototype.toJSON,
              r && r.value && r.configurable && delete String.prototype.toJSON,
              (t = s.jsonStringify(e));
          } catch (e) {
            t = pe(e);
          } finally {
            (null == n ? void 0 : n.value) &&
              X(function () {
                return Object.defineProperty(Array.prototype, 'toJSON', n);
              })(),
              (null == r ? void 0 : r.value) &&
                X(function () {
                  return Object.defineProperty(String.prototype, 'toJSON', r);
                })();
          }
          return t;
        }
        function pe(e) {
          var t = 'Internal error: unable to determine what JSON error was';
          try {
            t = (t = '' + e).replace(/[^a-zA-Z0-9.:!, ]/g, '_');
          } catch (e) {}
          return '"' + t + '"';
        }
        function fe(e) {
          var t = e.doctype;
          if (!t) return '';
          var n = '<!DOCTYPE ';
          return (
            (n += t.name),
            t.publicId && (n += ' PUBLIC "' + t.publicId + '"'),
            t.systemId && (n += ' "' + t.systemId + '"'),
            n + '>'
          );
        }
        function _e(e) {
          return s.jsonParse(e);
        }
        var ve = (function () {
            function e(e, t, n) {
              void 0 === n && (n = !1),
                (this._target = e),
                (this._propertyName = t),
                (this._overrideToString = n),
                (this._before = Z),
                (this._afterSync = Z),
                (this._afterAsync = Z),
                (this._on = !1);
            }
            return (
              (e.prototype.before = function (e) {
                return (this._before = de(e)), this;
              }),
              (e.prototype.afterSync = function (e) {
                return (this._afterSync = de(e)), this;
              }),
              (e.prototype.afterAsync = function (e) {
                return (
                  (this._afterAsync = de(function (t) {
                    s.setWindowTimeout(
                      window,
                      X(function () {
                        e(t);
                      }),
                      0
                    );
                  })),
                  this
                );
              }),
              (e.prototype.disable = function () {
                if (((this._on = !1), this._shim)) {
                  var e = this._shim,
                    t = e.override,
                    n = e['native'];
                  this._target[this._propertyName] === t &&
                    ((this._target[this._propertyName] = n),
                    (this._shim = void 0));
                }
              }),
              (e.prototype.enable = function () {
                if (((this._on = !0), this._shim)) return !0;
                this._shim = this._makeShim();
                try {
                  this._target[this._propertyName] = this._shim.override;
                } catch (e) {
                  return !1;
                }
                return !0;
              }),
              (e.prototype.getTarget = function () {
                return this._target;
              }),
              (e.prototype._makeShim = function () {
                var e = this,
                  t = this,
                  n = this._target[this._propertyName],
                  r = function () {
                    for (var e = [], r = 0; r < arguments.length; r++)
                      e[r] = arguments[r];
                    var i = { that: this, args: e, result: null };
                    t._on && t._before(i);
                    var o = n.apply(this, e);
                    return (
                      (i.result = o),
                      t._on && (t._afterSync(i), t._afterAsync(i)),
                      i.result
                    );
                  };
                return (
                  this._overrideToString &&
                    (r.toString = function () {
                      var t;
                      return (
                        'function ' +
                        (null !== (t = e._propertyName) && void 0 !== t
                          ? t
                          : '') +
                        '() { [native code] }'
                      );
                    }),
                  { native: n, override: r }
                );
              }),
              e
            );
          })(),
          ge = {};
        function ye(e, t, n) {
          var r;
          if ((void 0 === n && (n = !1), !e || 'function' != typeof e[t]))
            return null;
          ge[t] = null !== (r = ge[t]) && void 0 !== r ? r : new $();
          var i = ge[t].get(e);
          return (
            i || ((i = new ve(e, t, n)), ge[t].set(e, i)), i.enable() ? i : null
          );
        }
        function me(e, t, n) {
          return Se(null == e ? void 0 : e.prototype, t, n);
        }
        function Se(e, t, n) {
          if (!e) return function () {};
          var r = Object.getOwnPropertyDescriptor(e, t);
          if (!r || !r.set) return function () {};
          var o = r.set,
            s = de(n),
            a = !0;
          function u(e) {
            o.call(this, e), a && s(this, e);
          }
          return (
            Object.defineProperty(
              e,
              t,
              (0, i.__assign)((0, i.__assign)({}, r), { set: u })
            ),
            function () {
              a = !1;
              var n = Object.getOwnPropertyDescriptor(e, t);
              n &&
                u === n.set &&
                Object.defineProperty(
                  e,
                  t,
                  (0, i.__assign)((0, i.__assign)({}, n), { set: o })
                );
            }
          );
        }
        function we(e) {
          var t = e.navigator.languages;
          return t && ee(t)
            ? t.join(',')
            : e.navigator.userLanguage || e.navigator.language;
        }
        function Ee(e) {
          if (!e) return !1;
          var t = e.isConnected;
          return 'boolean' == typeof t
            ? t
            : (function (e) {
                for (var t = e, n = void 0; t; t = n)
                  if (!(n = t.parentNode)) return t;
                return e;
              })(e).nodeType === Node.DOCUMENT_NODE;
        }
        var be = '[anonymous]',
          Te = /function\s*([\w\-$]+)?\s*\(/i;
        function Ce(e) {
          return e.stack || e.backtrace || e.stacktrace;
        }
        function Ie() {
          var e, t;
          try {
            throw new Error('');
          } catch (n) {
            (e = '<generated>\n'), (t = Ce(n));
          }
          if (!t) {
            e = '<generated-ie>\n';
            var n = [];
            try {
              for (
                var r = arguments.callee.caller.caller;
                r && n.length < 10;

              ) {
                var i = (Te.test(r.toString()) && RegExp.$1) || be;
                n.push(i), (r = r.caller);
              }
            } catch (e) {
              e.toString();
            }
            t = n.join('\n');
          }
          return e + t;
        }
        function ke() {
          try {
            return window.self !== window.top;
          } catch (e) {
            return !0;
          }
        }
        var Ae = (function () {
          function e() {}
          return (
            (e.wrap = function (t, n) {
              return (
                void 0 === n && (n = 'error'),
                X(t, function (t) {
                  return e.sendToBugsnag(t, n);
                })
              );
            }),
            (e._errorLimit = 15),
            (e.sendToBugsnag = function (t, n, r) {
              if (!(e._errorLimit <= 0)) {
                e._errorLimit--;
                var i = t;
                'string' == typeof i && (i = new Error(i));
                var o = T(document).fs_uid,
                  s = o ? b(o) : void 0;
                s && s.orgId != q(window) && (s = void 0);
                var a = new Date(1676333975e3).toISOString(),
                  u = {
                    projectRoot: window.location.origin,
                    deviceTime: _(),
                    inIframe: ke(),
                    CompiledVersion: '62394952df',
                    CompiledTimestamp: 1676333975,
                    CompiledTime: a,
                    orgId: q(window),
                    'userId:sessionId': s ? s.userId + ':' + s.sessionId : 'NA',
                    context: document.location && document.location.pathname,
                    message: i.message,
                    name: 'Recording Error',
                    releaseStage: 'production ' + a,
                    severity: n,
                    language: we(window),
                    stacktrace: Ce(i) || Ie(),
                  },
                  c = function (e, t, n) {
                    var r = encodeURIComponent(t) + '=' + encodeURIComponent(n);
                    e.push(r);
                  },
                  h = [];
                for (var d in u) c(h, d, u[d] || '');
                if (r) for (var d in r) c(h, 'aux_' + d, xe(r[d]));
                new Image().src =
                  'https://' + F(window) + '/rec/except?' + h.join('&');
              }
            }),
            e
          );
        })();
        function xe(e) {
          try {
            var t = typeof e + ': ' + le(e);
            return (
              'function' == typeof e.toString &&
                (t += ' (toString: ' + e.toString() + ')'),
              t
            );
          } catch (e) {
            return (
              'failed to serialize "' + (null == e ? void 0 : e.message) + '"'
            );
          }
        }
        var Re = {};
        function Pe(e, t, n) {
          if ((void 0 === n && (n = 1), e)) return !0;
          if (((Re[t] = Re[t] || 0), Re[t]++, Re[t] > n)) return !1;
          var r = new Error('Assertion failed: ' + t);
          return Ae.sendToBugsnag(r, 'error'), e;
        }
        var Oe,
          Me,
          Le,
          Ue,
          Ne,
          De,
          Fe = {};
        function He(e, t, n) {
          var r;
          (Fe[e] = null !== (r = Fe[e]) && void 0 !== r ? r : 0),
            Fe[e]++,
            Fe[e] > 1 || Ae.sendToBugsnag(t, 'error', n);
        }
        !(function (e) {
          (e.MUT_INSERT = 2),
            (e.MUT_REMOVE = 3),
            (e.MUT_ATTR = 4),
            (e.MUT_TEXT = 6),
            (e.MOUSEMOVE = 8),
            (e.MOUSEMOVE_CURVE = 9),
            (e.SCROLL_LAYOUT = 10),
            (e.SCROLL_LAYOUT_CURVE = 11),
            (e.MOUSEDOWN = 12),
            (e.MOUSEUP = 13),
            (e.CLICK = 16),
            (e.FOCUS = 17),
            (e.VALUECHANGE = 18),
            (e.RESIZE_LAYOUT = 19),
            (e.DOMLOADED = 20),
            (e.LOAD = 21),
            (e.PLACEHOLDER_SIZE = 22),
            (e.UNLOAD = 23),
            (e.BLUR = 24),
            (e.SET_FRAME_BASE = 25),
            (e.TOUCHSTART = 32),
            (e.TOUCHEND = 33),
            (e.TOUCHCANCEL = 34),
            (e.TOUCHMOVE = 35),
            (e.TOUCHMOVE_CURVE = 36),
            (e.NAVIGATE = 37),
            (e.PLAY = 38),
            (e.PAUSE = 39),
            (e.RESIZE_VISUAL = 40),
            (e.RESIZE_VISUAL_CURVE = 41),
            (e.RESIZE_DOCUMENT_CONTENT = 42),
            (e.RESIZE_SCROLLABLE_ELEMENT_CONTENT = 43),
            (e.LOG = 48),
            (e.ERROR = 49),
            (e.DBL_CLICK = 50),
            (e.FORM_SUBMIT = 51),
            (e.WINDOW_FOCUS = 52),
            (e.WINDOW_BLUR = 53),
            (e.HEARTBEAT = 54),
            (e.WATCHED_ELEM = 56),
            (e.PERF_ENTRY = 57),
            (e.REC_FEAT_SUPPORTED = 58),
            (e.SELECT = 59),
            (e.CSSRULE_INSERT = 60),
            (e.CSSRULE_DELETE = 61),
            (e.FAIL_THROTTLED = 62),
            (e.AJAX_REQUEST = 63),
            (e.SCROLL_VISUAL_OFFSET = 64),
            (e.SCROLL_VISUAL_OFFSET_CURVE = 65),
            (e.MEDIA_QUERY_CHANGE = 66),
            (e.RESOURCE_TIMING_BUFFER_FULL = 67),
            (e.MUT_SHADOW = 68),
            (e.DISABLE_STYLESHEET = 69),
            (e.FULLSCREEN = 70),
            (e.FULLSCREEN_ERROR = 71),
            (e.ADOPTED_STYLESHEETS = 72),
            (e.CUSTOM_ELEMENT_DEFINED = 73),
            (e.MODAL_OPEN = 74),
            (e.MODAL_CLOSE = 75),
            (e.SLOW_INTERACTION = 76),
            (e.LONG_FRAME = 77),
            (e.TIMING = 78),
            (e.STORAGE_WRITE_FAILURE = 79),
            (e.DOCUMENT_PROPERTIES = 80),
            (e.ENTRY_NAVIGATE = 81),
            (e.STATS = 82),
            (e.VIEWPORT_INTERSECTION = 83),
            (e.COPY = 84),
            (e.PASTE = 85),
            (e.URL_SALT = 86),
            (e.URL_ID = 87),
            (e.FRAME_STATUS = 88),
            (e.SCRIPT_COMPILED_VERSION = 89),
            (e.RESET_CSS_SHEET = 90),
            (e.ANIMATION_CREATED = 91),
            (e.ANIMATION_METHOD_CALLED = 92),
            (e.ANIMATION_PROPERTY_SET = 93),
            (e.DOCUMENT_TIMELINE_CREATED = 94),
            (e.KEYFRAME_EFFECT_CREATED = 95),
            (e.KEYFRAME_EFFECT_METHOD_CALLED = 96),
            (e.KEYFRAME_EFFECT_PROPERTY_SET = 97),
            (e.CAPTURE_SOURCE = 98),
            (e.PAGE_DATA = 99),
            (e.VISIBILITY_STATE = 100),
            (e.DIALOG = 101),
            (e.CSSRULE_UPDATE = 102),
            (e.CANVAS = 103),
            (e.CANVAS_DETACHED_DIMENSION = 104),
            (e.INIT_API = 105),
            (e.DEFERRED_RESOLVED = 106),
            (e.KEEP_ELEMENT = 2e3),
            (e.KEEP_URL = 2001),
            (e.KEEP_BOUNCE = 2002),
            (e.SYS_SETVAR = 8193),
            (e.SYS_RESOURCEHASH = 8195),
            (e.SYS_SETCONSENT = 8196),
            (e.SYS_CUSTOM = 8197),
            (e.SYS_REPORTCONSENT = 8198),
            (e.SYS_LETHE_MOBILE_BUNDLE_SEQ = 8199);
        })(Oe || (Oe = {})),
          (function (e) {
            (e.Animation = 0), (e.CSSAnimation = 1), (e.CSSTransition = 2);
          })(Me || (Me = {})),
          (function (e) {
            (e.Unknown = 0), (e.Serialization = 1);
          })(Le || (Le = {})),
          (function (e) {
            (e.Unknown = 0),
              (e.Successful = 1),
              (e.BlocklistedFrame = 2),
              (e.PartiallyLoaded = 3),
              (e.MissingWindowOrDocument = 4),
              (e.MissingDocumentHead = 5),
              (e.MissingBodyOrChildren = 6),
              (e.AlreadyDefined = 7),
              (e.NoNonScriptElement = 8),
              (e.Exception = 9);
          })(Ue || (Ue = {})),
          (function (e) {
            (e.Unknown = 0),
              (e.DomSnapshot = 1),
              (e.NodeEncoding = 2),
              (e.LzEncoding = 3);
          })(Ne || (Ne = {})),
          (function (e) {
            (e.Internal = 0), (e.Public = 1);
          })(De || (De = {}));
        var qe,
          We,
          Be,
          je,
          Ve,
          Ke,
          ze,
          Qe,
          Ge,
          Ye,
          Xe,
          Ze,
          Je,
          $e,
          et,
          tt,
          nt,
          rt,
          it,
          ot,
          st,
          at,
          ut,
          ct = ['print', 'alert', 'confirm'];
        function ht(e) {
          switch (e) {
            case Oe.MOUSEDOWN:
            case Oe.MOUSEMOVE:
            case Oe.MOUSEMOVE_CURVE:
            case Oe.MOUSEUP:
            case Oe.TOUCHSTART:
            case Oe.TOUCHEND:
            case Oe.TOUCHMOVE:
            case Oe.TOUCHMOVE_CURVE:
            case Oe.TOUCHCANCEL:
            case Oe.CLICK:
            case Oe.SCROLL_LAYOUT:
            case Oe.SCROLL_LAYOUT_CURVE:
            case Oe.SCROLL_VISUAL_OFFSET:
            case Oe.SCROLL_VISUAL_OFFSET_CURVE:
            case Oe.NAVIGATE:
              return !0;
          }
          return !1;
        }
        !(function (e) {
          (e[(e.Index = 1)] = 'Index'), (e[(e.Cached = 2)] = 'Cached');
        })(qe || (qe = {})),
          (function (e) {
            (e.GrantConsent = !0), (e.RevokeConsent = !1);
          })(We || (We = {})),
          (function (e) {
            (e.Page = 0), (e.Document = 1);
          })(Be || (Be = {})),
          (function (e) {
            (e.Unknown = 0),
              (e.Api = 1),
              (e.FsShutdownFrame = 2),
              (e.Hibernation = 3),
              (e.Reidentify = 4),
              (e.SettingsBlocked = 5),
              (e.Size = 6),
              (e.Unload = 7),
              (e.Hidden = 8);
          })(je || (je = {})),
          (function (e) {
            (e.Unknown = 0), (e.NotEmpty = 1), (e.EmptyBody = 2);
          })(Ve || (Ve = {})),
          (function (e) {
            (e.Timing = 0),
              (e.Navigation = 1),
              (e.Resource = 2),
              (e.Paint = 3),
              (e.Mark = 4),
              (e.Measure = 5),
              (e.Memory = 6),
              (e.TimeOrigin = 7),
              (e.LayoutShift = 8),
              (e.FirstInput = 9),
              (e.LargestContentfulPaint = 10),
              (e.LongTask = 11);
          })(Ke || (Ke = {})),
          (function (e) {
            (e.Timing = [
              'navigationStart',
              'unloadEventStart',
              'unloadEventEnd',
              'redirectStart',
              'redirectEnd',
              'fetchStart',
              'domainLookupStart',
              'domainLookupEnd',
              'connectStart',
              'connectEnd',
              'secureConnectionStart',
              'requestStart',
              'responseStart',
              'responseEnd',
              'domLoading',
              'domInteractive',
              'domContentLoadedEventStart',
              'domContentLoadedEventEnd',
              'domComplete',
              'loadEventStart',
              'loadEventEnd',
            ]),
              (e.Navigation = [
                'name',
                'startTime',
                'duration',
                'initiatorType',
                'redirectStart',
                'redirectEnd',
                'fetchStart',
                'domainLookupStart',
                'domainLookupEnd',
                'connectStart',
                'connectEnd',
                'secureConnectionStart',
                'requestStart',
                'responseStart',
                'responseEnd',
                'unloadEventStart',
                'unloadEventEnd',
                'domInteractive',
                'domContentLoadedEventStart',
                'domContentLoadedEventEnd',
                'domComplete',
                'loadEventStart',
                'loadEventEnd',
                'type',
                'redirectCount',
                'decodedBodySize',
                'encodedBodySize',
                'transferSize',
              ]),
              (e.Resource = [
                'name',
                'startTime',
                'duration',
                'initiatorType',
                'redirectStart',
                'redirectEnd',
                'fetchStart',
                'domainLookupStart',
                'domainLookupEnd',
                'connectStart',
                'connectEnd',
                'secureConnectionStart',
                'requestStart',
                'responseStart',
                'responseEnd',
                'decodedBodySize',
                'encodedBodySize',
                'transferSize',
              ]),
              (e.Measure = ['name', 'startTime', 'duration']),
              (e.Memory = [
                'jsHeapSizeLimit',
                'totalJSHeapSize',
                'usedJSHeapSize',
              ]),
              (e.TimeOrigin = ['timeOrigin']),
              (e.LayoutShift = ['startTime', 'value', 'hadRecentInput']),
              (e.FirstInput = [
                'name',
                'startTime',
                'duration',
                'processingStart',
              ]),
              (e.LargestContentfulPaint = [
                'name',
                'startTime',
                'duration',
                'renderTime',
                'loadTime',
                'size',
              ]);
          })(ze || (ze = {})),
          (function (e) {
            (e.Performance = 0),
              (e.PerformanceEntries = 1),
              (e.PerformanceMemory = 2),
              (e.Console = 3),
              (e.Ajax = 4),
              (e.PerformanceObserver = 5),
              (e.AjaxFetch = 6),
              (e.PerformanceTimeOrigin = 7),
              (e.WebAnimation = 8),
              (e.LayoutShift = 9),
              (e.FirstInput = 10),
              (e.LargestContentfulPaint = 11),
              (e.LongTask = 12),
              (e.HTMLDialogElement = 13),
              (e.CaptureOnStartEnabled = 14),
              (e.CanvasWatcherEnabled = 15);
          })(Qe || (Qe = {})),
          (function (e) {
            (e.Node = 1), (e.Sheet = 2);
          })(Ge || (Ge = {})),
          (function (e) {
            (e.StyleSheetHooks = 0), (e.SetPropertyHooks = 1);
          })(Ye || (Ye = {})),
          (function (e) {
            (e.Document = 'document'),
              (e.Event = 'evt'),
              (e.Page = 'page'),
              (e.User = 'user');
          })(Xe || (Xe = {})),
          (function (e) {
            (e.FsId = 'fsidentity'), (e.NewUid = 'newuid');
          })(Ze || (Ze = {})),
          (function (e) {
            (e.Elide = 0), (e.Record = 1), (e.Allowlist = 2);
          })(Je || (Je = {})),
          (function (e) {
            (e.Any = 0), (e.Exclude = 1), (e.Mask = 2);
          })($e || ($e = {})),
          (function (e) {
            (e.Erase = 0), (e.MaskText = 1), (e.ScrubUrl = 2), (e.ScrubCss = 3);
          })(et || (et = {})),
          (function (e) {
            (e.Static = 0), (e.Prefix = 1);
          })(tt || (tt = {})),
          (function (e) {
            (e.SignalInvalid = 0),
              (e.SignalDeadClick = 1),
              (e.SignalRageClick = 2);
          })(nt || (nt = {})),
          (function (e) {
            (e.ReasonNoSuchOrg = 1),
              (e.ReasonOrgDisabled = 2),
              (e.ReasonOrgOverQuota = 3),
              (e.ReasonBlockedDomain = 4),
              (e.ReasonBlockedIp = 5),
              (e.ReasonBlockedUserAgent = 6),
              (e.ReasonBlockedGeo = 7),
              (e.ReasonBlockedTrafficRamping = 8),
              (e.ReasonInvalidURL = 9),
              (e.ReasonUserOptOut = 10),
              (e.ReasonInvalidRecScript = 11),
              (e.ReasonDeletingUser = 12),
              (e.ReasonNativeHookFailure = 13);
          })(rt || (rt = {})),
          (function (e) {
            (e.Unset = 0),
              (e.Exclude = 1),
              (e.Mask = 2),
              (e.Unmask = 3),
              (e.Watch = 4),
              (e.Keep = 5),
              (e.Defer = 6);
          })(it || (it = {})),
          (function (e) {
            (e.Unset = 0), (e.Click = 1);
          })(ot || (ot = {})),
          (function (e) {
            (e[(e.Page = 1)] = 'Page'), (e[(e.Bundle = 2)] = 'Bundle');
          })(st || (st = {})),
          (function (e) {
            (e[(e.Error = 3)] = 'Error'),
              (e[(e.Page = 4)] = 'Page'),
              (e[(e.Bundle = 5)] = 'Bundle'),
              (e[(e.Settings = 6)] = 'Settings');
          })(at || (at = {})),
          (function (e) {
            (e.MaxPerfMarksPerPage = 16384),
              (e.MaxLogsPerPage = 1024),
              (e.MaxUrlLength = 2048),
              (e.MutationProcessingInterval = 250),
              (e.CurveSamplingInterval = 142),
              (e.DefaultBundleUploadInterval = 5e3),
              (e.HeartbeatInitial = 4e3),
              (e.HeartbeatMax = 256200),
              (e.PageInactivityTimeout = 18e5),
              (e.BackoffMax = 3e5),
              (e.ScrollSampleInterval = e.MutationProcessingInterval / 5),
              (e.InactivityThreshold = 4e3),
              (e.MaxAjaxPayloadLength = 16384),
              (e.DefaultOrgSettings = {
                MaxPerfMarksPerPage: e.MaxPerfMarksPerPage,
                MaxConsoleLogPerPage: e.MaxLogsPerPage,
                MaxAjaxPayloadLength: e.MaxAjaxPayloadLength,
                MaxUrlLength: e.MaxUrlLength,
                RecordPerformanceResourceImg: !0,
                RecordPerformanceResourceTiming: !0,
                HttpRequestHeadersAllowlist: [],
                HttpResponseHeadersAllowlist: [],
                UrlPrivacyConfig: [
                  {
                    Exclude: {
                      Hash: [{ Expression: '#.*' }],
                      QueryParam: [{ Expression: '(=)(.*)' }],
                    },
                  },
                ],
                AttributeBlocklist: [
                  {
                    Target: $e.Any,
                    Tag: '*',
                    Name: '',
                    Type: tt.Prefix,
                    Action: et.Erase,
                  },
                ],
              }),
              (e.DefaultStatsSettings = {
                MaxPayloadLength: 8192,
                MaxEventTypeLength: 1024,
              }),
              (e.BlockedFieldValue = '__fs__redacted');
          })(ut || (ut = {}));
        var dt,
          lt,
          pt,
          ft = '_fs_uid',
          _t = '_fs_cid',
          vt = '_fs_lua';
        function gt(e, t, n, r) {
          void 0 !== n &&
            ('function' == typeof e.addEventListener
              ? e.addEventListener(t, n, r)
              : 'function' == typeof e.addListener && e.addListener(n));
        }
        function yt(e, t, n, r) {
          void 0 !== n &&
            ('function' == typeof e.removeEventListener
              ? e.removeEventListener(t, n, r)
              : 'function' == typeof e.removeListener && e.removeListener(n));
        }
        !(function (e) {
          (e[(e.Shutdown = 1)] = 'Shutdown'),
            (e[(e.Starting = 2)] = 'Starting'),
            (e[(e.Started = 3)] = 'Started');
        })(dt || (dt = {})),
          (function (e) {
            (e.Set = 0), (e.Function = 1);
          })(lt || (lt = {})),
          (function (e) {
            (e[(e.Disabled = 0)] = 'Disabled'),
              (e[(e.CaptureCanvasOps = 1)] = 'CaptureCanvasOps'),
              (e[(e.ScreenshotCanvas = 2)] = 'ScreenshotCanvas');
          })(pt || (pt = {}));
        var mt = (function () {
          function e() {
            var e = this;
            (this._listeners = []),
              (this._children = []),
              (this._yesCapture = !0),
              (this._noCapture = !1);
            try {
              var t = Object.defineProperty({}, 'passive', {
                get: function () {
                  (e._yesCapture = { capture: !0, passive: !0 }),
                    (e._noCapture = { capture: !1, passive: !0 });
                },
              });
              window.addEventListener('test', Z, t);
            } catch (e) {}
          }
          return (
            (e.prototype.add = function (e, t, n, r, i) {
              return void 0 === i && (i = !1), this.addCustom(e, t, n, r, i);
            }),
            (e.prototype.addCustom = function (e, t, n, r, i) {
              void 0 === i && (i = !1);
              var o = {
                target: e,
                type: t,
                fn: Ae.wrap(function (e) {
                  (i ||
                    !1 !== e.isTrusted ||
                    'message' == t ||
                    e._fs_trust_event) &&
                    r(e);
                }),
                options: n ? this._yesCapture : this._noCapture,
                index: this._listeners.length,
              };
              return this._listeners.push(o), gt(e, t, o.fn, o.options), o;
            }),
            (e.prototype.remove = function (e) {
              e.target &&
                (yt(e.target, e.type, e.fn, e.options),
                (e.target = null),
                (e.fn = void 0));
            }),
            (e.prototype.clear = function () {
              for (var e = 0; e < this._listeners.length; e++)
                this._listeners[e].target && this.remove(this._listeners[e]);
              this._listeners = [];
            }),
            (e.prototype.createChild = function () {
              var t = new e();
              return this._children.push(t), t;
            }),
            (e.prototype.refresh = function () {
              for (var e = 0, t = this._listeners; e < t.length; e++) {
                var n = t[e];
                n.target &&
                  (yt(n.target, n.type, n.fn, n.options),
                  gt(n.target, n.type, n.fn, n.options));
              }
              for (var r = 0, i = this._children; r < i.length; r++)
                i[r].refresh();
            }),
            e
          );
        })();
        function St(e) {
          return 'function' == typeof e;
        }
        var wt,
          Et,
          bt,
          Tt,
          Ct,
          It = Array.isArray
            ? Array.isArray
            : function (e) {
                return '[object Array]' === Object.prototype.toString.call(e);
              },
          kt = 0,
          At = function (e, t) {
            (xt[kt] = e), (xt[kt + 1] = t), 2 === (kt += 2) && wt();
          },
          xt = new Array(1e3);
        function Rt() {
          for (var e = 0; e < kt; e += 2)
            (0, xt[e])(xt[e + 1]), (xt[e] = void 0), (xt[e + 1] = void 0);
          kt = 0;
        }
        function Pt(e, t) {
          var n = arguments,
            r = this,
            i = new this.constructor(Lt);
          void 0 === i[Mt] && Yt(i);
          var o,
            s = r._state;
          return (
            s
              ? ((o = n[s - 1]),
                At(function () {
                  return Qt(s, i, o, r._result);
                }))
              : jt(r, i, e, t),
            i
          );
        }
        function Ot(e) {
          if (e && 'object' == typeof e && e.constructor === this) return e;
          var t = new this(Lt);
          return Ht(t, e), t;
        }
        window.MutationObserver
          ? ((bt = 0),
            (Tt = new MutationObserver(Rt)),
            (Ct = document.createTextNode('')),
            Tt.observe(Ct, { characterData: !0 }),
            (wt = function () {
              var e = (bt = ++bt % 2);
              Ct.data = '' + e;
            }))
          : ((Et = setTimeout),
            (wt = function () {
              return Et(Rt, 1);
            }));
        var Mt = Math.random().toString(36).substring(16);
        function Lt() {}
        var Ut = void 0,
          Nt = new Kt();
        function Dt(e) {
          try {
            return e.then;
          } catch (e) {
            return (Nt.error = e), Nt;
          }
        }
        function Ft(e, t, n) {
          t.constructor === e.constructor &&
          n === Pt &&
          t.constructor.resolve === Ot
            ? (function (e, t) {
                1 === t._state
                  ? Wt(e, t._result)
                  : 2 === t._state
                  ? Bt(e, t._result)
                  : jt(
                      t,
                      void 0,
                      function (t) {
                        return Ht(e, t);
                      },
                      function (t) {
                        return Bt(e, t);
                      }
                    );
              })(e, t)
            : n === Nt
            ? (Bt(e, Nt.error), (Nt.error = null))
            : void 0 === n
            ? Wt(e, t)
            : St(n)
            ? (function (e, t, n) {
                At(function (e) {
                  var r = !1,
                    i = (function (n, i, o, s, a) {
                      try {
                        n.call(
                          i,
                          function (n) {
                            r || ((r = !0), t !== n ? Ht(e, n) : Wt(e, n));
                          },
                          function (t) {
                            r || ((r = !0), Bt(e, t));
                          }
                        );
                      } catch (e) {
                        return e;
                      }
                    })(n, t, 0, 0, e._label);
                  !r && i && ((r = !0), Bt(e, i));
                }, e);
              })(e, t, n)
            : Wt(e, t);
        }
        function Ht(e, t) {
          var n;
          e === t
            ? Bt(e, new TypeError('You cannot resolve a promise with itself'))
            : 'function' == typeof (n = t) ||
              ('object' == typeof n && null !== n)
            ? Ft(e, t, Dt(t))
            : Wt(e, t);
        }
        function qt(e) {
          e._onerror && e._onerror(e._result), Vt(e);
        }
        function Wt(e, t) {
          e._state === Ut &&
            ((e._result = t),
            (e._state = 1),
            0 !== e._subscribers.length && At(Vt, e));
        }
        function Bt(e, t) {
          e._state === Ut && ((e._state = 2), (e._result = t), At(qt, e));
        }
        function jt(e, t, n, r) {
          var i = e._subscribers,
            o = i.length;
          (e._onerror = null),
            (i[o] = t),
            (i[o + 1] = n),
            (i[o + 2] = r),
            0 === o && e._state && At(Vt, e);
        }
        function Vt(e) {
          var t = e._subscribers,
            n = e._state;
          if (0 !== t.length) {
            for (var r, i, o = e._result, s = 0; s < t.length; s += 3)
              (r = t[s]), (i = t[s + n]), r ? Qt(n, r, i, o) : i(o);
            e._subscribers.length = 0;
          }
        }
        function Kt() {
          this.error = null;
        }
        var zt = new Kt();
        function Qt(e, t, n, r) {
          var i,
            o,
            s = St(n),
            a = !1,
            u = !1;
          if (s) {
            if (
              ((i = (function (e, t) {
                try {
                  return e(t);
                } catch (e) {
                  return (zt.error = e), zt;
                }
              })(n, r)),
              i === zt ? ((u = !0), (o = i.error), (i.error = null)) : (a = !0),
              t === i)
            )
              return void Bt(
                t,
                new TypeError(
                  'A promises callback cannot return that same promise.'
                )
              );
          } else (i = r), (a = !0);
          t._state !== Ut ||
            (s && a
              ? Ht(t, i)
              : u
              ? Bt(t, o)
              : 1 === e
              ? Wt(t, i)
              : 2 === e && Bt(t, i));
        }
        var Gt = 0;
        function Yt(e) {
          (e[Mt] = Gt++),
            (e._state = void 0),
            (e._result = void 0),
            (e._subscribers = []);
        }
        function Xt(e, t) {
          (this._instanceConstructor = e),
            (this.promise = new e(Lt)),
            this.promise[Mt] || Yt(this.promise),
            It(t)
              ? ((this._input = t),
                (this.length = t.length),
                (this._remaining = t.length),
                (this._result = new Array(this.length)),
                0 === this.length
                  ? Wt(this.promise, this._result)
                  : ((this.length = this.length || 0),
                    this._enumerate(),
                    0 === this._remaining && Wt(this.promise, this._result)))
              : Bt(
                  this.promise,
                  new Error('Array Methods must be provided an Array')
                );
        }
        (Xt.prototype._enumerate = function () {
          for (
            var e = this.length, t = this._input, n = 0;
            this._state === Ut && n < e;
            n++
          )
            this._eachEntry(t[n], n);
        }),
          (Xt.prototype._eachEntry = function (e, t) {
            var n = this._instanceConstructor,
              r = n.resolve;
            if (r === Ot) {
              var i = Dt(e);
              if (i === Pt && e._state !== Ut)
                this._settledAt(e._state, t, e._result);
              else if ('function' != typeof i)
                this._remaining--, (this._result[t] = e);
              else if (n === Zt) {
                var o = new n(Lt);
                Ft(o, e, i), this._willSettleAt(o, t);
              } else
                this._willSettleAt(
                  new n(function (t) {
                    return t(e);
                  }),
                  t
                );
            } else this._willSettleAt(r(e), t);
          }),
          (Xt.prototype._settledAt = function (e, t, n) {
            var r = this.promise;
            r._state === Ut &&
              (this._remaining--, 2 === e ? Bt(r, n) : (this._result[t] = n)),
              0 === this._remaining && Wt(r, this._result);
          }),
          (Xt.prototype._willSettleAt = function (e, t) {
            var n = this;
            jt(
              e,
              void 0,
              function (e) {
                return n._settledAt(1, t, e);
              },
              function (e) {
                return n._settledAt(2, t, e);
              }
            );
          });
        var Zt = function (e) {
          (this[Mt] = Gt++),
            (this._result = this._state = void 0),
            (this._subscribers = []),
            Lt !== e &&
              ('function' != typeof e &&
                (function () {
                  throw new TypeError(
                    'You must pass a resolver function as the first argument to the promise constructor'
                  );
                })(),
              this instanceof Zt
                ? (function (e, t) {
                    try {
                      t(
                        function (t) {
                          Ht(e, t);
                        },
                        function (t) {
                          Bt(e, t);
                        }
                      );
                    } catch (t) {
                      Bt(e, t);
                    }
                  })(this, e)
                : (function () {
                    throw new TypeError(
                      "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                    );
                  })());
        };
        (Zt.all = function (e) {
          return new Xt(this, e).promise;
        }),
          (Zt.race = function (e) {
            var t = this;
            return It(e)
              ? new t(function (n, r) {
                  for (var i = e.length, o = 0; o < i; o++)
                    t.resolve(e[o]).then(n, r);
                })
              : new t(function (e, t) {
                  return t(new TypeError('You must pass an array to race.'));
                });
          }),
          (Zt.resolve = Ot),
          (Zt.reject = function (e) {
            var t = new this(Lt);
            return Bt(t, e), t;
          }),
          (Zt._setAsap = function (e) {
            At = e;
          }),
          (Zt._asap = At),
          (Zt.prototype = {
            constructor: Zt,
            then: Pt,
            catch: function (e) {
              return this.then(null, e);
            },
          });
        var Jt = 'function' == typeof window.Promise ? window.Promise : Zt;
        function $t() {
          var e, t;
          return {
            promise: new Jt(function (n, r) {
              (e = n), (t = r);
            }),
            resolve: e,
            reject: t,
          };
        }
        function en(e) {
          return new Jt(function (t) {
            s.setWindowTimeout(window, X(t), e);
          });
        }
        var tn,
          nn = (function () {
            try {
              var e = new MessageChannel();
              return e.port1.start(), e;
            } catch (e) {
              return null;
            }
          })(),
          rn = function () {
            return nn
              ? new Jt(function (e) {
                  var t = nn.port1,
                    n = nn.port2,
                    r = function () {
                      e(), t.removeEventListener('message', r);
                    };
                  t.addEventListener('message', r), n.postMessage(void 0);
                })
              : en(0);
          };
        function on(e, t) {
          return (
            void 0 === t && (t = e),
            (0, i.__awaiter)(this, void 0, Jt, function () {
              var n, r;
              return (0, i.__generator)(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, en(e)];
                  case 1:
                    return (
                      i.sent(),
                      (n = s.requestWindowIdleCallback)
                        ? [
                            2,
                            new Jt(function (e) {
                              n(window, e, { timeout: t });
                            }),
                          ]
                        : ((r = Date.now() + 25),
                          [
                            2,
                            {
                              timeRemaining: function () {
                                return Math.max(0, r - Date.now());
                              },
                              didTimeout: !1,
                            },
                          ])
                    );
                }
              });
            })
          );
        }
        !(function (e) {
          (e.Essential = '0'), (e.High = '1'), (e.Medium = '2'), (e.Low = '3');
        })(tn || (tn = {}));
        var sn = ['0', '1', '2', '3'],
          an = (function () {
            function e(e) {
              var t = this;
              (this._measurementTasks = null),
                (this._performingMeasurements = !1),
                (this._recursionDepth = 0),
                (this._bugsnagNonce = !0),
                (this.performMeasurements = Ae.wrap(function () {
                  if (t._performingMeasurements)
                    Ae.sendToBugsnag(
                      'performMeasurements() already in progress',
                      'error'
                    );
                  else {
                    t.wnd;
                    var e = _(),
                      n = e + 150;
                    t._performingMeasurements = !0;
                    try {
                      if (!t._measurementTasks) return;
                      e: for (var r = 0, i = sn; r < i.length; r++)
                        for (
                          var o = i[r], s = t._measurementTasks[o], a = 0;
                          a < s.length;
                          a++
                        ) {
                          s[a]();
                          var u = _();
                          if (u > n) {
                            t._bugsnagNonce ||
                              ((t._bugsnagNonce = !0),
                              Ae.sendToBugsnag(
                                'Out of time for remaining measurement tasks.',
                                'warning',
                                { totalRunningTimeMs: u - e }
                              ));
                            break e;
                          }
                        }
                      t._measurementTasks = null;
                    } finally {
                      (t._performingMeasurements = !1), t.wnd;
                    }
                  }
                })),
                (this.wnd = e);
            }
            return (
              (e.create = function (e) {
                return e.ResizeObserver
                  ? new un(e, e.ResizeObserver)
                  : new cn(e);
              }),
              (e.prototype.requestMeasureTask = function (e, t) {
                var n,
                  r = this;
                if (this._recursionDepth > 16)
                  Ae.sendToBugsnag(
                    'Too much synchronous recursion in requestMeasureTask',
                    'error'
                  );
                else {
                  var i = this._performingMeasurements
                      ? this._recursionDepth
                      : 0,
                    o = Ae.wrap(function () {
                      var e = r._recursionDepth;
                      r._recursionDepth = i + 1;
                      try {
                        t();
                      } finally {
                        r._recursionDepth = e;
                      }
                    });
                  this._measurementTasks
                    ? this._measurementTasks[e].push(o)
                    : ((this._measurementTasks =
                        (((n = {})[tn.Essential] = []),
                        (n[tn.High] = []),
                        (n[tn.Medium] = []),
                        (n[tn.Low] = []),
                        (n[e] = [o]),
                        n)),
                      this.schedule());
                }
              }),
              (e.prototype.performMeasurementsNow = function () {
                this.performMeasurements();
              }),
              e
            );
          })(),
          un = (function (e) {
            function t(t, n) {
              var r = e.call(this, t) || this;
              return (r._resizeObserver = n), r;
            }
            return (
              (0, i.__extends)(t, e),
              (t.prototype.schedule = function () {
                var e = this,
                  t = this._resizeObserver,
                  n = this.wnd.document,
                  r = n.documentElement || n.body || n.head,
                  i = new t(function () {
                    i.unobserve(r), e.performMeasurements();
                  });
                i.observe(r);
              }),
              t
            );
          })(an),
          cn = (function (e) {
            function t(t) {
              return e.call(this, t) || this;
            }
            return (
              (0, i.__extends)(t, e),
              (t.prototype.schedule = function () {
                (0, i.__awaiter)(void 0, void 0, Jt, function () {
                  var e;
                  return (0, i.__generator)(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (e = s.requestWindowAnimationFrame)
                          ? [
                              4,
                              new Jt(function (t) {
                                return e(window, t);
                              }),
                            ]
                          : [3, 2];
                      case 1:
                        t.sent(), (t.label = 2);
                      case 2:
                        return [4, rn()];
                      case 3:
                        return t.sent(), [2];
                    }
                  });
                }).then(this.performMeasurements);
              }),
              t
            );
          })(an);
        function hn(e, t) {
          return t && e.pageLeft == t.pageLeft && e.pageTop == t.pageTop;
        }
        function dn(e, t) {
          return t && e.width == t.width && e.height == t.height;
        }
        function ln(e) {
          return {
            pageLeft: e.pageLeft,
            pageTop: e.pageTop,
            width: e.width,
            height: e.height,
          };
        }
        var pn = [
            ['@import\\s+"', '"'],
            ["@import\\s+'", "'"],
          ].concat([
            ['url\\(\\s*"', '"\\s*\\)'],
            ["url\\(\\s*'", "'\\s*\\)"],
            ['url\\(\\s*', '\\s*\\)'],
          ]),
          fn = '.*?' + /(?:[^\\](?:\\\\)*)/.source,
          _n = new RegExp(
            pn
              .map(function (e) {
                var t = e[0],
                  n = e[1];
                return '(' + t + ')(' + fn + ')(' + n + ')';
              })
              .join('|'),
            'g'
          ),
          vn = /url\(["']?(.+?)["']?\)/g,
          gn = /^\s*\/\//;
        function yn(e) {
          return 'BackCompat' == e.compatMode;
        }
        function mn(e) {
          return e && e.body && e.documentElement
            ? yn(e)
              ? [e.body.clientWidth, e.body.clientHeight]
              : [e.documentElement.clientWidth, e.documentElement.clientHeight]
            : [0, 0];
        }
        var Sn = (function () {
          function e(e, t) {
            var n, r, i, o;
            (this.hasKnownPosition = !1),
              (this.pageLeft = 0),
              (this.pageTop = 0),
              (this.width = 0),
              (this.height = 0),
              (this.clientWidth = 0),
              (this.clientHeight = 0);
            var s = e.document;
            if (s && s.documentElement && s.body) {
              (n = mn(s)),
                (this.clientWidth = n[0]),
                (this.clientHeight = n[1]);
              var a = e.visualViewport;
              if (a) {
                (this.hasKnownPosition = !0),
                  (this.pageTop = a.pageTop - a.offsetTop),
                  (this.pageLeft = a.pageLeft - a.offsetLeft),
                  0 == this.pageTop && (this.pageTop = 0),
                  0 == this.pageLeft && (this.pageLeft = 0);
                var u =
                    null !== (i = bn(e, 'innerWidth')) && void 0 !== i ? i : 0,
                  c =
                    null !== (o = bn(e, 'innerHeight')) && void 0 !== o ? o : 0;
                if (u > 0 && c > 0)
                  return (this.width = u), void (this.height = c);
              }
              if (
                void 0 !== t &&
                this.clientWidth == t.clientWidth &&
                this.clientHeight == t.clientHeight &&
                t.width > 0 &&
                t.height > 0
              )
                return (this.width = t.width), void (this.height = t.height);
              (r = this._computeLayoutViewportSizeFromMediaQueries(e)),
                (this.width = r[0]),
                (this.height = r[1]);
            }
          }
          return (
            (e.prototype._computeLayoutViewportSizeFromMediaQueries = function (
              e
            ) {
              var t = this._findMediaValue(
                e,
                'width',
                this.clientWidth,
                this.clientWidth + 128
              );
              void 0 === t && (t = bn(e, 'innerWidth')),
                void 0 === t && (t = this.clientWidth);
              var n = this._findMediaValue(
                e,
                'height',
                this.clientHeight,
                this.clientHeight + 128
              );
              return (
                void 0 === n && (n = bn(e, 'innerHeight')),
                void 0 === n && (n = this.clientHeight),
                [t, n]
              );
            }),
            (e.prototype._findMediaValue = function (e, t, n, r) {
              if (s.matchMedia) {
                var i = n,
                  o = r,
                  a = s.matchMedia(e, '(min-' + t + ': ' + i + 'px)');
                if (null != a) {
                  if (
                    a.matches &&
                    s.matchMedia(e, '(max-' + t + ': ' + i + 'px)').matches
                  )
                    return i;
                  for (; i <= o; ) {
                    var u = s.mathFloor((i + o) / 2);
                    if (
                      s.matchMedia(e, '(min-' + t + ': ' + u + 'px)').matches
                    ) {
                      if (
                        s.matchMedia(e, '(max-' + t + ': ' + u + 'px)').matches
                      )
                        return u;
                      i = u + 1;
                    } else o = u - 1;
                  }
                }
              }
            }),
            e
          );
        })();
        function wn(e, t) {
          return new Sn(e, t);
        }
        var En = function (e, t) {
          (this.offsetLeft = 0),
            (this.offsetTop = 0),
            (this.pageLeft = 0),
            (this.pageTop = 0),
            (this.width = 0),
            (this.height = 0),
            (this.scale = 0);
          var n = e.document;
          if (n.body) {
            'pageXOffset' in e
              ? ((this.pageLeft = e.pageXOffset),
                (this.pageTop = e.pageYOffset))
              : n.scrollingElement
              ? ((this.pageLeft = n.scrollingElement.scrollLeft),
                (this.pageTop = n.scrollingElement.scrollTop))
              : yn(n)
              ? ((this.pageLeft = n.body.scrollLeft),
                (this.pageTop = n.body.scrollTop))
              : n.documentElement &&
                (n.documentElement.scrollLeft > 0 ||
                  n.documentElement.scrollTop > 0)
              ? ((this.pageLeft = n.documentElement.scrollLeft),
                (this.pageTop = n.documentElement.scrollTop))
              : ((this.pageLeft = n.body.scrollLeft || 0),
                (this.pageTop = n.body.scrollTop || 0)),
              (this.offsetLeft = this.pageLeft - t.pageLeft),
              (this.offsetTop = this.pageTop - t.pageTop);
            var r = 0,
              i = 0;
            try {
              (r = e.innerWidth), (i = e.innerHeight);
            } catch (e) {
              return;
            }
            if (0 != r && 0 != i) {
              (this.scale = t.width / r), this.scale < 1 && (this.scale = 1);
              var o = t.width - t.clientWidth,
                s = t.height - t.clientHeight;
              (this.width = r - o / this.scale),
                (this.height = i - s / this.scale);
            }
          }
        };
        function bn(e, t) {
          try {
            return e[t];
          } catch (e) {
            return;
          }
        }
        function Tn(e) {
          var t = e;
          return t.tagName
            ? 'object' == typeof t.tagName
              ? 'form'
              : t.tagName.toLowerCase()
            : null;
        }
        var Cn,
          In,
          kn = new RegExp('[^\\s]'),
          An = new RegExp('[\\s]*$');
        function xn(e) {
          var t = kn.exec(e);
          if (!t) return e;
          for (
            var n = t.index,
              r = (t = An.exec(e)) ? e.length - t.index : 0,
              i = '\uFFFF',
              o = e.slice(n, e.length - r).split(/\r\n?|\n/g),
              s = 0;
            s < o.length;
            s++
          )
            (i += '' + o[s].length), s != o.length - 1 && (i += ':');
          return (n || r) && (i += ' ' + n + ' ' + r), i;
        }
        String.prototype,
          (function (e) {
            (e[(e.Exclude = 2)] = 'Exclude'),
              (e[(e.Mask = 4)] = 'Mask'),
              (e[(e.Unmask = 8)] = 'Unmask'),
              (e[(e.Watch = 16)] = 'Watch'),
              (e[(e.Keep = 32)] = 'Keep'),
              (e[(e.Defer = 64)] = 'Defer');
          })(Cn || (Cn = {})),
          (function (e) {
            (e[(e.Immediate = 1)] = 'Immediate'),
              (e[(e.Deferred = 2)] = 'Deferred');
          })(In || (In = {}));
        var Rn = [Cn.Exclude, Cn.Mask, Cn.Unmask],
          Pn = [Cn.Watch, Cn.Keep, Cn.Defer],
          On = Rn.concat(Pn),
          Mn = {},
          Ln = 1;
        function Un(e, t) {
          var n, r;
          return (
            void 0 === t && (t = Hn(e)),
            null !==
              (r =
                null === (n = null == t ? void 0 : t.watchKind) || void 0 === n
                  ? void 0
                  : n.hasKinds()) &&
              void 0 !== r &&
              r
          );
        }
        function Nn(e, t) {
          var n, r;
          return (
            void 0 === t && (t = Hn(e)),
            null !==
              (r =
                null === (n = null == t ? void 0 : t.watchKind) || void 0 === n
                  ? void 0
                  : n.has(Cn.Exclude)) &&
              void 0 !== r &&
              r
          );
        }
        function Dn(e, t) {
          return void 0 === t && (t = Hn(e)), !!t && !!t.mask;
        }
        function Fn(e, t) {
          return void 0 === t && (t = Hn(e)), null == t ? void 0 : t.watchKind;
        }
        function Hn(e) {
          var t = e ? e._fs : null;
          return t ? Mn[t] : null;
        }
        function qn(e) {
          return Mn[e];
        }
        function Wn(e) {
          try {
            return (e && e._fs) || 0;
          } catch (e) {
            return 0;
          }
        }
        function Bn(e) {
          return e && !Nn(e) ? Wn(e) : 0;
        }
        function jn(e, t) {
          e.parent &&
            (t.unobserveSubtree(e.node),
            e.parent.child == e && (e.parent.child = e.next),
            e.parent.lastChild == e && (e.parent.lastChild = e.prev),
            e.prev && (e.prev.next = e.next),
            e.next && (e.next.prev = e.prev),
            (e.parent = e.prev = e.next = null),
            delete Mn[e.id],
            e.node._fs == e.id && (e.node._fs = 0),
            (e.id = 0),
            e.child && Vn(e.child));
        }
        function Vn(e) {
          for (var t = [e]; t.length > 0 && t.length < 1e4; ) {
            var n = t.pop();
            delete Mn[n.id],
              n.node._fs == n.id && (n.node._fs = 0),
              (n.id = 0),
              n.next && t.push(n.next),
              n.child && t.push(n.child);
          }
          Pe(t.length < 1e4, 'clearIds is fast');
        }
        function Kn(e, t) {
          void 0 === t && (t = 1024);
          try {
            var n = { tokens: [], opath: [], cyclic: zn(e, t / 4) };
            return Gn(e, t, 0, n), n.tokens.join('');
          } catch (e) {
            return pe(e);
          }
        }
        function zn(e, t) {
          var n = 0;
          try {
            s.jsonStringify(e, function (e, r) {
              if (n++ > t) throw 'break';
              if ('object' == typeof r) return r;
            });
          } catch (e) {
            return 'break' != e;
          }
          return !1;
        }
        var Qn = function (e, t, n) {
          return (
            void 0 === n && (n = '...'),
            e.length <= t
              ? e
              : e.length <= n.length || t <= n.length
              ? e.substring(0, t)
              : e.substring(0, t - n.length) + n
          );
        };
        function Gn(e, t, n, r) {
          if (t < 1) return 0;
          var i = (function (e) {
            switch (!0) {
              case (function (e) {
                return !(!e || e.constructor != Date);
              })(e):
                return (t = e), isNaN(t) ? 'Invalid Date' : t.toUTCString();
              case (function (e) {
                return 'object' == typeof Node
                  ? e instanceof Node
                  : e &&
                      'object' == typeof e &&
                      e.nodeType > 0 &&
                      'string' == typeof e.nodeName;
              })(e):
                return (function (e) {
                  return e.toString();
                })(e);
              case void 0 === e:
                return 'undefined';
              case 'object' != typeof e || null == e:
                return e;
              case e instanceof Error:
                return [e.toString(), e.stack].filter(Boolean).join(',');
            }
            var t;
          })(e);
          if (void 0 !== i) {
            var o = (function (e, t) {
              var n = s.jsonStringify(e);
              return n && '"' == n[0] ? Qn(n, t, '..."') : n;
            })(i, t);
            return 'string' == typeof o && o.length <= t
              ? (r.tokens.push(o), o.length)
              : 0;
          }
          if (r.cyclic) {
            r.opath.splice(n);
            var a = r.opath.lastIndexOf(e);
            if (a > -1) {
              var u = '<Cycle to ancestor #' + (n - a - 1) + '>';
              return (u = '"' + Qn(u, t - 2) + '"'), r.tokens.push(u), u.length;
            }
            r.opath.push(e);
          }
          var c = t,
            h = function (e) {
              return c >= e.length && ((c -= e.length), r.tokens.push(e), !0);
            },
            d = function (e) {
              var t = r.tokens.length - 1;
              ',' === r.tokens[t] ? (r.tokens[t] = e) : h(e);
            };
          if (c < 2) return 0;
          if (ee(e)) {
            h('[');
            for (var l = 0; l < e.length && c > 0; l++) {
              var p = Gn(e[l], c - 1, n + 1, r);
              if (((c -= p), 0 == p && !h('null'))) break;
              h(',');
            }
            d(']');
          } else {
            h('{');
            var f = te(e);
            for (l = 0; l < f.length && c > 0; l++) {
              var _ = f[l],
                v = e[_];
              if (!h('"' + _ + '":')) break;
              if (0 == (p = Gn(v, c - 1, n + 1, r))) {
                r.tokens.pop();
                break;
              }
              (c -= p), h(',');
            }
            d('}');
          }
          return t == 1 / 0 ? 1 : t - c;
        }
        var Yn,
          Xn,
          Zn = (function () {
            function e() {
              var t = this;
              (this._wrappedTick = Ae.wrap(function () {
                t.unregister(), t._tick && t._tick();
              })),
                (this._due = 0),
                (this._id = e._nextId++);
            }
            return (
              (e._rearm = function () {
                (e.checkedAlready = !1), (e._lastCheck = 0);
              }),
              (e.checkForBrokenSchedulers = function () {
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  var t, n;
                  return (0, i.__generator)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return !s.requestWindowAnimationFrame ||
                          e.checkedAlready ||
                          (t = _()) - e._lastCheck < 100
                          ? [2, !1]
                          : ((e._lastCheck = t),
                            (e.checkedAlready = !0),
                            [
                              4,
                              new Jt(function (e) {
                                return s.requestWindowAnimationFrame(window, e);
                              }),
                            ]);
                      case 1:
                        return (
                          r.sent(),
                          (n = []),
                          re(e._registry, function (e) {
                            var r = e._maybeForceTick(t);
                            r && n.push(r);
                          }),
                          [4, Jt.all(n)]
                        );
                      case 2:
                        return (
                          r.sent(),
                          s.requestWindowAnimationFrame(
                            window,
                            Ae.wrap(function () {
                              e.checkedAlready = !1;
                            })
                          ),
                          [2, !0]
                        );
                    }
                  });
                });
              }),
              (e.stopAll = function () {
                re(this._registry, function (e) {
                  return e.stop();
                });
              }),
              (e.prototype.setTick = function (e) {
                this._tick = e;
              }),
              (e.prototype.stop = function () {
                this.cancel(), delete e._registry[this._id];
              }),
              (e.prototype.register = function (t) {
                (this._due = _() + 100 + 1.5 * t),
                  (e._registry[this._id] = this);
              }),
              (e.prototype.timerIsRunning = function () {
                return null != e._registry[this._id];
              }),
              (e.prototype.unregister = function () {
                delete e._registry[this._id];
              }),
              (e.prototype._maybeForceTick = function (e) {
                if (e > this._due)
                  return Jt.resolve()
                    .then(this._wrappedTick)
                    ['catch'](function () {});
              }),
              (e._registry = {}),
              (e._nextId = 0),
              (e.checkedAlready = !1),
              (e._lastCheck = 0),
              e
            );
          })(),
          Jn = (function (e) {
            function t(t) {
              var n = e.call(this) || this;
              return (n._interval = t), (n._handle = -1), n;
            }
            return (
              (0, i.__extends)(t, e),
              (t.prototype.start = function (e) {
                var t = this;
                -1 == this._handle &&
                  (this.setTick(function () {
                    e(), t.register(t._interval);
                  }),
                  (this._handle = s.setWindowInterval(
                    window,
                    this._wrappedTick,
                    this._interval
                  )),
                  this.register(this._interval));
              }),
              (t.prototype.cancel = function () {
                -1 != this._handle &&
                  (s.clearWindowInterval(window, this._handle),
                  (this._handle = -1),
                  this.setTick(function () {}));
              }),
              t
            );
          })(Zn),
          $n = (function (e) {
            function t(t, n, r) {
              void 0 === n && (n = 0);
              for (var i = [], o = 3; o < arguments.length; o++)
                i[o - 3] = arguments[o];
              var s = e.call(this) || this;
              return (
                (s._delay = n),
                (s._timer = -1),
                s.setTick(function () {
                  s.stop(), t.apply(void 0 === r ? window : r, i);
                }),
                s
              );
            }
            return (
              (0, i.__extends)(t, e),
              (t.prototype.start = function (e) {
                return (
                  void 0 === e && (e = this._delay),
                  (this._delay = e),
                  s.clearWindowTimeout(window, this._timer),
                  (this._timer = s.setWindowTimeout(
                    window,
                    this._wrappedTick,
                    this._delay
                  )),
                  this.register(e),
                  this
                );
              }),
              (t.prototype.isRunning = function () {
                return this.timerIsRunning();
              }),
              (t.prototype.cancel = function () {
                -1 != this._timer &&
                  (s.clearWindowTimeout(window, this._timer),
                  (this._timer = -1));
              }),
              t
            );
          })(Zn),
          er = (function () {
            function e(e, t, n) {
              (this._limit = e),
                (this._breaker = n),
                (this._remaining = 0),
                (this._ticker = new Jn(t)),
                this.open();
            }
            return (
              (e.prototype.guard = function (e) {
                var t = this;
                return function () {
                  for (var n = [], r = 0; r < arguments.length; r++)
                    n[r] = arguments[r];
                  return 0 == t._remaining
                    ? (t._breaker(), void t._remaining--)
                    : t._remaining < 0
                    ? void 0
                    : (t._remaining--, e.apply(this, n));
                };
              }),
              (e.prototype.close = function () {
                return this._ticker.stop(), this;
              }),
              (e.prototype.open = function () {
                var e = this;
                return (
                  (this._remaining = this._limit),
                  this._ticker.start(function () {
                    e._remaining = e._limit;
                  }),
                  this
                );
              }),
              e
            );
          })(),
          tr = (function () {
            function e() {
              (this._skew = 0), (this._startTime = _());
            }
            return (
              (e.prototype.wallTime = function () {
                return _();
              }),
              (e.prototype.now = function () {
                var e = this.wallTime() - this._startTime;
                return (
                  e < 0 && this._reportTimeSkew('timekeeper now() is negative'),
                  e
                );
              }),
              (e.prototype.startTime = function () {
                return this._startTime;
              }),
              (e.prototype.setStartTime = function (e) {
                var t = this.wallTime();
                (this._startTime = e),
                  e > t &&
                    ((this._skew = e - t),
                    this._skew > 1e3 &&
                      this._reportTimeSkew('timekeeper set with future ts'));
              }),
              (e.prototype._reportTimeSkew = function (e) {
                Kn(
                  {
                    msg: e,
                    skew: this._skew,
                    startTime: this._startTime,
                    wallTime: this.wallTime(),
                  },
                  1024
                );
              }),
              e
            );
          })(),
          nr = (function () {
            function e(e, t) {
              (this._ctx = e),
                (this._queue = t),
                (this._fallback = !1),
                (this._elemsWithDeferredChanges = {}),
                (this._values = {}),
                (this._radios = {}),
                (this._hasCheckedForReactDoms = !1),
                (this._needsInstanceHooks = !1),
                (Yn = this),
                (this._doc = e.window.document);
            }
            return (
              (e.prototype.hookEvents = function () {
                var e;
                ((e = Object.getOwnPropertyDescriptor(
                  HTMLInputElement.prototype,
                  'value'
                )) &&
                  e.set &&
                  (rr ||
                    (me(HTMLInputElement, 'value', ur),
                    me(HTMLInputElement, 'checked', ur),
                    me(HTMLSelectElement, 'value', ur),
                    me(HTMLTextAreaElement, 'value', ur),
                    me(HTMLSelectElement, 'selectedIndex', ur),
                    me(HTMLOptionElement, 'selected', ur),
                    (rr = !0)),
                  1)) ||
                  (this._fallback = !0);
              }),
              (e.prototype.hookInstance = function (e) {
                if ('input' === Tn(e))
                  switch (e.type) {
                    case 'checkbox':
                    case 'radio':
                      Se(e, 'checked', ur);
                      break;
                    default:
                      Se(e, 'value', ur);
                  }
              }),
              (e.prototype.addInput = function (e) {
                if (e) {
                  var t = Bn(e);
                  if (t) {
                    'input' === Tn(e) && this._checkReactDomHooks(e);
                    var n = !1;
                    if (
                      ((function (e) {
                        switch (e.type) {
                          case 'checkbox':
                          case 'radio':
                            return e.checked != e.hasAttribute('checked');
                          default:
                            return (
                              (e.value || '') !=
                              (function (e) {
                                if ('select' != Tn(e))
                                  return e.getAttribute('value') || '';
                                var t = e,
                                  n =
                                    t.querySelector('option[selected]') ||
                                    t.querySelector('option');
                                return (n && n.value) || '';
                              })(e)
                            );
                        }
                      })(e) && (this._addChangeForElem(e), (n = !0)),
                      this._fallback &&
                        (this._elemsWithDeferredChanges[t] = { elem: e }),
                      !n)
                    )
                      if (hr(e)) {
                        var r = sr(e);
                        e.checked && (this._radios[r] = t);
                      } else this._values[t] = cr(e);
                  }
                }
              }),
              (e.prototype._checkReactDomHooks = function (e) {
                if (this._hasCheckedForReactDoms)
                  this._needsInstanceHooks && this.hookInstance(e);
                else {
                  var t =
                      'checkbox' === e.type || 'radio' === e.type
                        ? 'checked'
                        : 'value',
                    n = Object.getOwnPropertyDescriptor(
                      HTMLInputElement.prototype,
                      t
                    ),
                    r = Object.getOwnPropertyDescriptor(e, t);
                  n &&
                    r &&
                    n !== r &&
                    ((this._needsInstanceHooks = !0), this.hookInstance(e)),
                    (this._hasCheckedForReactDoms = !0);
                }
              }),
              (e.prototype.diffValue = function (e, t) {
                void 0 === t && (t = cr(e));
                var n = Bn(e);
                if (!e || !n) return !1;
                if (hr(e)) {
                  var r = sr(e);
                  return (this._radios[r] === n) != ('true' === t);
                }
                return this._values[n] !== t;
              }),
              (e.prototype.onChange = function (e, t, n) {
                void 0 === n && (n = cr(e));
                var r = Bn(e);
                e &&
                  r &&
                  (t || this.diffValue(e, n)) &&
                  this._addChangeForElem(e, t);
              }),
              (e.prototype.onKeyboardChange = function (e) {
                var t,
                  n = (function (e) {
                    for (var t = e.activeElement; t && t.shadowRoot; ) {
                      var n = t.shadowRoot.activeElement;
                      if (!n) return t;
                      t = n;
                    }
                    return t;
                  })(this._doc);
                n &&
                  ('value' in (t = n) || 'checked' in t) &&
                  !Nn(n) &&
                  this.diffValue(n) &&
                  this._addChangeForElem(n, e);
              }),
              (e.prototype.tick = function () {
                for (var e in this._elemsWithDeferredChanges) {
                  var t = this._elemsWithDeferredChanges[e],
                    n = t.elem;
                  if (Bn(n))
                    try {
                      delete this._elemsWithDeferredChanges[e];
                      var r = cr(n);
                      if (this.diffValue(n, r)) this._addChangeForElem(n);
                      else if (t.noFsIdInOption) {
                        var i = n;
                        Array.prototype.slice
                          .call(i.options)
                          .every(function (e) {
                            return Bn(e);
                          }) &&
                          ((t.noFsIdInOption = !1), this._addChangeForElem(n));
                      }
                    } finally {
                      this._fallback && (this._elemsWithDeferredChanges[e] = t);
                    }
                  else
                    delete this._elemsWithDeferredChanges[e],
                      delete this._values[e],
                      hr(n) && delete this._radios[sr(n)];
                }
              }),
              (e.prototype.shutdown = function () {
                Yn = void 0;
              }),
              (e.prototype._addChangeForElem = function (e, t) {
                var n = this;
                void 0 === t && (t = !1);
                var r = Bn(e);
                if (e && r && !this._deferredChange(r, e)) {
                  var i = cr(e);
                  if (hr(e)) {
                    var o = sr(e);
                    'false' === i && this._radios[o] === r
                      ? delete this._radios[o]
                      : 'true' === i && (this._radios[o] = r);
                  } else this._values[r] = i;
                  this._ctx.measurer.requestMeasureTask(tn.Medium, function () {
                    var o = e.getBoundingClientRect(),
                      s = o.width > 0 && o.height > 0,
                      a = Dn(e) ? xn(i) : i;
                    n._queue.enqueue({
                      Kind: Oe.VALUECHANGE,
                      Args: [r, a, t, s],
                    });
                  });
                }
              }),
              (e.prototype._deferredChange = function (e, t) {
                if (this._elemsWithDeferredChanges[e]) return !0;
                if ('select' !== Tn(t)) return !1;
                for (var n = t.options, r = 0; r < n.length; r++)
                  if (!Bn(n[r]))
                    return (
                      (this._elemsWithDeferredChanges[e] = {
                        elem: t,
                        noFsIdInOption: !0,
                      }),
                      !0
                    );
                return !1;
              }),
              e
            );
          })(),
          rr = !1,
          ir = {};
        function or() {
          try {
            if (Yn)
              for (var e in ir) {
                var t = ir[e],
                  n = t[0],
                  r = t[1];
                Yn.onChange(n, !1, r);
              }
          } finally {
            (Xn = null), (ir = {});
          }
        }
        function sr(e) {
          if (!e) return '';
          for (var t = e; t && 'form' != Tn(t); ) t = t.parentElement;
          return (
            (t && 'form' == Tn(t) ? Wn(t) : 0) +
            ':' +
            (e.name || '_fs_' + Wn(e))
          );
        }
        function ar(e, t) {
          if ((void 0 === t && (t = 2), t <= 0)) return e;
          var n = Tn(e);
          return ('option' != n && 'optgroup' != n) || !e.parentElement
            ? e
            : ar(e.parentElement, t - 1);
        }
        function ur(e, t) {
          if (Yn) {
            var n = ar(e),
              r = Bn(n);
            r &&
              Yn.diffValue(n, '' + t) &&
              ((ir[r] = [n, '' + t]), Xn || (Xn = new $n(or)).start());
          }
        }
        function cr(e) {
          if (!e) return '';
          switch (e.type) {
            case 'checkbox':
            case 'radio':
              return '' + e.checked;
            default:
              var t = e.value;
              return t || (t = ''), '' + t;
          }
        }
        function hr(e) {
          return e && 'radio' == e.type;
        }
        var dr = (function () {
          function e(e, t, n) {
            var r = this;
            (this._recAnimationObjectIds = new WeakMap()),
              (this._isRecording = !1),
              (this._isRecordingSupported = !1),
              (this._nextId = 1),
              (this._shims = []),
              (this._hooks = []),
              (this._snapshotAnimation = Ae.wrap(function (e) {
                var t = (function (e, t) {
                    void 0 === t && (t = window);
                    var n = t.KeyframeEffect,
                      r = e.effect;
                    return r && (void 0 === n || r instanceof n) ? r : null;
                  })(e, r._window),
                  n = (function (e, t) {
                    void 0 === t && (t = window);
                    var n = t.DocumentTimeline,
                      r = e.timeline;
                    return r && (void 0 === n || r instanceof n) ? r : null;
                  })(e, r._window),
                  o = _r(e);
                if (
                  (null == t ? void 0 : t.target) &&
                  0 !== Bn(null == t ? void 0 : t.target) &&
                  n === r._window.document.timeline &&
                  o === Me.Animation
                ) {
                  var s = Wn(t.target);
                  if (r._recAnimationObjectIds.has(t)) {
                    var a = r._recAnimationObjectIds.get(t) || [],
                      u = ((c = a[0]), a.slice(1));
                    -1 === u.indexOf(s) &&
                      (r._enqueueTargetChangeEvent(t, s),
                      r._recAnimationObjectIds.set(
                        t,
                        (0, i.__spreadArray)((0, i.__spreadArray)([c], u), [s])
                      ));
                  } else {
                    var c = r._nextId++;
                    r._recAnimationObjectIds.set(t, [c, s]),
                      r._eventQueue.enqueue({
                        Kind: Oe.KEYFRAME_EFFECT_CREATED,
                        Args: [c, s, fr(t), pr(t)],
                      });
                  }
                  if (!r._recAnimationObjectIds.has(e)) {
                    var h = r._nextId++,
                      d =
                        ((c = r._getAnimationObjectId(t)),
                        r._getAnimationObjectId(n));
                    switch (
                      (r._recAnimationObjectIds.set(e, [h]),
                      r._eventQueue.enqueue({
                        Kind: Oe.ANIMATION_CREATED,
                        Args: [h, _r(e), c, d],
                      }),
                      e.playState)
                    ) {
                      case 'finished':
                        r._eventQueue.enqueue({
                          Kind: Oe.ANIMATION_METHOD_CALLED,
                          Args: [h, ['finish', []]],
                        });
                        break;
                      case 'paused':
                      case 'running':
                        r._eventQueue.enqueue({
                          Kind: Oe.ANIMATION_PROPERTY_SET,
                          Args: [h, ['currentTime', e.currentTime]],
                        });
                        var l = 'paused' === e.playState ? 'pause' : 'play';
                        r._eventQueue.enqueue({
                          Kind: Oe.ANIMATION_METHOD_CALLED,
                          Args: [h, [l, []]],
                        });
                    }
                    r._listeners.add(e, 'cancel', !0, function () {
                      r._eventQueue.enqueue({
                        Kind: Oe.ANIMATION_METHOD_CALLED,
                        Args: [h, ['cancel', []]],
                      });
                    }),
                      r._listeners.add(e, 'finish', !0, function () {
                        r._eventQueue.enqueue({
                          Kind: Oe.ANIMATION_METHOD_CALLED,
                          Args: [h, ['finish', []]],
                        });
                      });
                  }
                }
              })),
              (this._eventQueue = t),
              (this._window = e.window),
              (this._listeners = n.createChild()),
              (this._isRecordingSupported = (function (e) {
                void 0 === e && (e = window);
                var t = e.Animation,
                  n = e.Document,
                  r = e.Element;
                return (
                  void 0 !== t &&
                  'effect' in t.prototype &&
                  'getAnimations' in n.prototype &&
                  'animate' in r.prototype
                );
              })(this._window));
          }
          return (
            Object.defineProperty(e.prototype, 'nextId', {
              get: function () {
                return this._nextId;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.snapshot = function (e) {
              var t,
                n = this,
                r = 'getAnimations' in e;
              this._isRecording &&
                this._isRecordingSupported &&
                r &&
                (null !== (t = e.getAnimations()) && void 0 !== t
                  ? t
                  : []
                ).forEach(function (e) {
                  n._snapshotAnimation(e);
                });
            }),
            (e.prototype.start = function () {
              var e,
                t = this,
                n = this._window,
                r = n.document,
                i = n.Element;
              this._eventQueue.enqueue({
                Kind: Oe.REC_FEAT_SUPPORTED,
                Args: [Qe.WebAnimation, this._isRecordingSupported],
              }),
                this._isRecordingSupported &&
                  ((this._isRecording = !0),
                  this.snapshot(r),
                  this._addHook(
                    null === (e = ye(i.prototype, 'animate')) || void 0 === e
                      ? void 0
                      : e.afterSync(function (e) {
                          t._snapshotAnimation(e.result);
                        })
                  ),
                  this._addAnimationMethodCalledHook('play'),
                  this._addAnimationMethodCalledHook('pause'),
                  this._addAnimationMethodCalledHook('cancel'),
                  this._addAnimationMethodCalledHook('finish'),
                  this._addKeyframeMethodCalledHook('updateTiming'),
                  this._addKeyframeMethodCalledHook('setKeyframes'),
                  this._shims.push(
                    me(KeyframeEffect, 'target', function (e, n) {
                      t._enqueueTargetChangeEvent(e, Wn(n));
                    })
                  ));
            }),
            (e.prototype.stop = function () {
              this._listeners.clear(),
                (this._isRecording = !1),
                this._hooks.forEach(function (e) {
                  return e && e.disable();
                }),
                (this._hooks = []),
                this._shims.forEach(function (e) {
                  return e();
                }),
                (this._shims = []);
            }),
            (e.prototype._enqueueTargetChangeEvent = function (e, t) {
              var n = this._getAnimationObjectId(e);
              n &&
                this._eventQueue.enqueue({
                  Kind: Oe.KEYFRAME_EFFECT_PROPERTY_SET,
                  Args: [n, ['target', t]],
                });
            }),
            (e.prototype._getAnimationObjectId = function (e) {
              return (this._recAnimationObjectIds.get(e) || [])[0];
            }),
            (e.prototype._addHook = function (e) {
              e && this._hooks.push(e);
            }),
            (e.prototype._addAnimationMethodCalledHook = function (e) {
              var t,
                n = this;
              this._addHook(
                null === (t = ye(Animation.prototype, e)) || void 0 === t
                  ? void 0
                  : t.afterSync(function (t) {
                      var r = n._getAnimationObjectId(t.that);
                      r &&
                        n._eventQueue.enqueue({
                          Kind: Oe.ANIMATION_METHOD_CALLED,
                          Args: [r, [e, []]],
                        });
                    })
              );
            }),
            (e.prototype._addKeyframeMethodCalledHook = function (e) {
              var t,
                n = this;
              this._addHook(
                null === (t = ye(KeyframeEffect.prototype, e)) || void 0 === t
                  ? void 0
                  : t.afterSync(function (t) {
                      var r,
                        i,
                        o = n._getAnimationObjectId(t.that);
                      if (o)
                        switch (e) {
                          case 'updateTiming':
                            var a = t.args[0];
                            n._eventQueue.enqueue({
                              Kind: Oe.KEYFRAME_EFFECT_METHOD_CALLED,
                              Args: [o, ['updateTiming', [lr(a)]]],
                            });
                            break;
                          case 'setKeyframes':
                            var u = t.args[0];
                            n._eventQueue.enqueue({
                              Kind: Oe.KEYFRAME_EFFECT_METHOD_CALLED,
                              Args: [
                                o,
                                [
                                  'setKeyframes',
                                  [
                                    ((r = u),
                                    (i = (s.arrayIsArray(r) ? r : [r]).map(
                                      function (e) {
                                        var t = [];
                                        return (
                                          re(e, function (e, n) {
                                            t.push([n, e]);
                                          }),
                                          [t, null, null, null]
                                        );
                                      }
                                    )),
                                    i),
                                  ],
                                ],
                              ],
                            });
                        }
                    })
              );
            }),
            e
          );
        })();
        function lr(e) {
          return [
            e.delay,
            e.direction,
            e.duration,
            e.easing,
            e.endDelay,
            e.fill,
            e.iterationStart,
            '' + e.iterations,
          ];
        }
        function pr(e) {
          var t = e.getTiming(),
            n = e.composite,
            r = void 0 === n ? 'replace' : n,
            o = e.iterationComposite,
            s = void 0 === o ? 'replace' : o;
          return (0, i.__spreadArray)((0, i.__spreadArray)([], lr(t)), [r, s]);
        }
        function fr(e) {
          return e.getKeyframes().map(function (e) {
            var t = e.composite,
              n = e.easing,
              r = e.offset,
              i = [];
            return (
              re(e, function (e, t) {
                'composite' !== t &&
                  'computedOffset' !== t &&
                  'easing' !== t &&
                  'offset' !== t &&
                  i.push([t, e]);
              }),
              [i, t, n, r]
            );
          });
        }
        function _r(e) {
          return 'animationName' in e
            ? Me.CSSAnimation
            : 'transitionProperty' in e
            ? Me.CSSTransition
            : Me.Animation;
        }
        var vr = navigator.userAgent,
          gr = vr.indexOf('MSIE ') > -1 || vr.indexOf('Trident/') > -1,
          yr =
            (gr && vr.indexOf('Trident/5'),
            gr && vr.indexOf('Trident/6'),
            gr && vr.indexOf('rv:11') > -1),
          mr = vr.indexOf('Edge/') > -1,
          Sr = (vr.indexOf('CriOS'), vr.indexOf('Snapchat') > -1),
          wr = /^((?!chrome|android).)*safari/i.test(
            window.navigator.userAgent
          );
        function Er() {
          var e = window.navigator.userAgent.match(/Version\/(\d+)/);
          return e && e[1] ? parseInt(e[1], 10) : -1;
        }
        function br(e) {
          if (!wr) return !1;
          var t = Er();
          return t >= 0 && t === e;
        }
        function Tr(e) {
          if (!wr) return !1;
          var t = Er();
          return t >= 0 && t < e;
        }
        br(9), br(10);
        var Cr = Tr(8);
        function Ir(e, t) {
          for (
            var n =
                0 === t.indexOf('on')
                  ? function (e) {
                      return 'on' + e + t.slice(2);
                    }
                  : function (e) {
                      return '' + e + t.charAt(0).toUpperCase() + t.slice(1);
                    },
              r = 0,
              i = [
                function () {
                  return t;
                },
                function () {
                  return n('webkit');
                },
                function () {
                  return n('moz');
                },
                function () {
                  return n('ms');
                },
              ];
            r < i.length;
            r++
          ) {
            var o = (0, i[r])();
            if (o in e) return o;
          }
          return t;
        }
        Tr(10), Tr(12);
        var kr = n(220),
          Ar = {},
          xr = '__default';
        function Rr(e) {
          void 0 === e && (e = xr);
          var t = Ar[e];
          return (
            t ||
              ((t = (function () {
                var e = document.implementation.createHTMLDocument('');
                return (
                  e.head ||
                    e.documentElement.appendChild(e.createElement('head')),
                  e.body ||
                    e.documentElement.appendChild(e.createElement('body')),
                  e
                );
              })()),
              e !== xr && (t.open(), t.write(e), t.close()),
              (Ar[e] = t)),
            t
          );
        }
        var Pr = new ((function () {
          function e() {
            var e = Rr(),
              t = e.getElementById('urlresolver-base');
            t ||
              (((t = e.createElement('base')).id = 'urlresolver-base'),
              e.head.appendChild(t));
            var n = e.getElementById('urlresolver-parser');
            n ||
              (((n = e.createElement('a')).id = 'urlresolver-parser'),
              e.head.appendChild(n)),
              (this.base = t),
              (this.parser = n);
          }
          return (
            (e.prototype.parseUrl = function (e, t) {
              var n = e;
              if ('undefined' != typeof URL)
                try {
                  n || (n = document.baseURI);
                  var r = n ? new URL(t, n) : new URL(t);
                  if (r.href) return r;
                } catch (e) {}
              return this.parseUrlUsingBaseAndAnchor(n, t);
            }),
            (e.prototype.parseUrlUsingBaseAndAnchor = function (e, t) {
              this.base.setAttribute('href', e),
                this.parser.setAttribute('href', t);
              var n = document.createElement('a');
              return (n.href = this.parser.href), n;
            }),
            (e.prototype.resolveUrl = function (e, t) {
              return this.parseUrl(e, t).href;
            }),
            (e.prototype.resolveToDocument = function (e, t) {
              var n = Mr(e);
              return null == n ? t : this.resolveUrl(n, t);
            }),
            e
          );
        })())();
        function Or(e, t) {
          return Pr.parseUrl(e, t);
        }
        function Mr(e) {
          var t = e.document,
            n = e.location.href;
          if ('string' == typeof t.baseURI) n = t.baseURI;
          else {
            var r = t.getElementsByTagName('base')[0];
            r && r.href && (n = r.href);
          }
          return 'about:blank' == n && e.parent != e ? Mr(e.parent) : n;
        }
        var Lr = [
            'allowReorder',
            'attributeName',
            'attributeType',
            'autoReverse',
            'baseFrequency',
            'baseProfile',
            'calcMode',
            'clipPathUnits',
            'contentScriptType',
            'contentStyleType',
            'diffuseConstant',
            'edgeMode',
            'externalResourcesRequired',
            'filterRes',
            'filterUnits',
            'glyphRef',
            'gradientTransform',
            'gradientUnits',
            'kernelMatrix',
            'kernelUnitLength',
            'keyPoints',
            'keySplines',
            'keyTimes',
            'lengthAdjust',
            'limitingConeAngle',
            'markerHeight',
            'markerUnits',
            'markerWidth',
            'maskContentUnits',
            'maskUnits',
            'numOctaves',
            'pathLength',
            'patternContentUnits',
            'patternTransform',
            'patternUnits',
            'pointsAtX',
            'pointsAtY',
            'pointsAtZ',
            'preserveAlpha',
            'preserveAspectRatio',
            'primitiveUnits',
            'refX',
            'refY',
            'referrerPolicy',
            'repeatCount',
            'repeatDur',
            'requiredExtensions',
            'requiredFeatures',
            'specularConstant',
            'specularExponent',
            'spreadMethod',
            'startOffset',
            'stdDeviation',
            'stitchTiles',
            'surfaceScale',
            'systemLanguage',
            'tableValues',
            'targetX',
            'targetY',
            'textLength',
            'viewBox',
            'viewTarget',
            'xChannelSelector',
            'yChannelSelector',
            'zoomAndPan',
          ].reduce(function (e, t) {
            return (e[t] = t), (e[t.toUpperCase()] = t), e;
          }, {}),
          Ur = function (e) {
            for (var t = [], n = 0, r = e; n < r.length; n++) {
              var i = r[n],
                o = { Exclude: Nr(i.Exclude) };
              if (i.If) {
                o.If = [];
                for (var s = 0, a = i.If; s < a.length; s++) {
                  var u = a[s];
                  o.If.push(Nr(u, !0));
                }
              }
              t.push(o);
            }
            return t;
          };
        function Nr(e, t) {
          return (
            void 0 === t && (t = !1),
            {
              Hash: Dr(e.Hash, t),
              Host: Dr(e.Host, t),
              Path: Dr(e.Path, t),
              QueryParam: Dr(e.QueryParam, t),
              Query: Dr(e.Query, t),
            }
          );
        }
        function Dr(e, t) {
          return e
            ? t
              ? [
                  new RegExp(
                    e
                      .map(function (e) {
                        return e.Expression;
                      })
                      .join('|'),
                    'ig'
                  ),
                ]
              : e.map(function (e) {
                  return new RegExp(e.Expression, 'ig');
                })
            : [];
        }
        var Fr = '--blocked--',
          Hr = function (e, t, n) {
            if ((void 0 === n && (n = Fr), !t || 0 === e.length)) return t;
            for (var r = [], i = 0, o = e; i < o.length; i++)
              for (var s = o[i], a = 0, u = qr(s, t); a < u.length; a++) {
                var c = u[a];
                r.push(c);
              }
            if (0 === r.length) return t;
            for (var h = '', d = 0, l = 0, p = (r = Wr(r)); l < p.length; l++) {
              var f = p[l],
                _ = f[0],
                v = f[1];
              (h += '' + t.substring(d, _) + n), (d = v);
            }
            return h + t.slice(d);
          },
          qr = function (e, t) {
            var n,
              r = [];
            for (e.lastIndex = 0; null !== (n = e.exec(t)); )
              if (n) {
                if ('' === n[0])
                  return (
                    '.*' !== e.source &&
                      Ae.sendToBugsnag(
                        'detected possible infinite loop when matching zero-length characters',
                        'error',
                        { re: e.source }
                      ),
                    [[0, t.length]]
                  );
                if (1 !== n.length)
                  for (var i = n.index, o = 0, s = 1; s < n.length; s++) {
                    var a = n[s];
                    if (a && 0 !== a.length)
                      if (s % 2 != 1) {
                        var u = i + o,
                          c = u + a.length;
                        r.push([u, c]), (o += a.length);
                      } else o += a.length;
                  }
                else r.push([n.index, e.lastIndex]);
              }
            return r;
          },
          Wr = function (e) {
            if (e.length <= 1) return e;
            e.sort(function (e, t) {
              return e[0] - t[0];
            });
            for (var t = [], n = e[0], r = 1; r < e.length; r++) {
              var i = e[r];
              n[1] <= i[0]
                ? (t.push(n), (n = i))
                : n[1] < i[1] && (n[1] = i[1]);
            }
            return t.push(n), t;
          },
          Br = function (e, t) {
            if (0 === e.length || !t) return !0;
            for (var n = 0, r = t.split('?'); n < r.length; n++)
              for (
                var i = 0, o = r[n].replace('?', '').split('&');
                i < o.length;
                i++
              ) {
                var s = o[i];
                if (Vr(e, s)) return !0;
              }
            return !1;
          },
          jr = function (e, t) {
            if (!e) return !0;
            for (var n = zr(t.pathname), r = 0, i = e; r < i.length; r++) {
              var o = i[r];
              if (
                Vr(o.Hash, t.hash) &&
                Vr(o.Host, t.host) &&
                Vr(o.Path, n) &&
                Br(o.QueryParam, t.search) &&
                Vr(o.Query, t.search)
              )
                return !0;
            }
            return !1;
          },
          Vr = function (e, t) {
            return (
              0 === e.length ||
              !t ||
              e.every(function (e) {
                return (e.lastIndex = 0), e.test(t);
              })
            );
          },
          Kr = function (e, t) {
            var n, r, i, o, s;
            (n = e.Hash).push.apply(n, t.Hash),
              (r = e.Host).push.apply(r, t.Host),
              (i = e.Path).push.apply(i, t.Path),
              (o = e.QueryParam).push.apply(o, t.QueryParam),
              (s = e.Query).push.apply(s, t.Query);
          };
        function zr(e) {
          return '/' !== e.charAt(0) ? '/' + e : e;
        }
        var Qr = /[-\\^$*+?.()|[\]{}]/g,
          Gr = new RegExp(Qr.source),
          Yr = JSON.parse(
            '{"W1MPQ":[{"Exclude":{"Path":[{"Expression":"(/auth/recover/)(.*)"}]}}],"K54HA":[{"Exclude":{"Path":[{"Expression":"(/verify-email/)(.*)"}]}}],"AGQFM":[{"Exclude":{"Path":[{"Expression":"(/reset-password/)(.*)"}]}}],"95NJ7":[{"Exclude":{"Path":[{"Expression":"(/reset-password/)(.*)"}]}}],"GBNRN":[{"Exclude":{"Path":[{"Expression":"(/reset-password/)(.*)"}]}}],"RV68C":[{"Exclude":{"Path":[{"Expression":"(/dl/)(.*)"}]}}],"QS8RG":[{"Exclude":{"Path":[{"Expression":"(/visitor/)(.*)"},{"Expression":"(/account/)(.*)"},{"Expression":"(/parentAccount/)(.*)"}]}}],"FP60X":[{"Exclude":{"Path":[{"Expression":"(/retailer/)(.*)"},{"Expression":"(/ocadotech/)(.*)"},{"Expression":"(/serviceAccounts/)(.*)"}]}}],"7R98D":[{"Exclude":{"Path":[{"Expression":"(/signup/)(.*)"}]}}],"WEN2C":[{"Exclude":{"Path":[{"Expression":"(/studies/)(.*)"},{"Expression":"(/EU/)(.*)"},{"Expression":"(/findings/)(.*)"}]}}],"WQF2B":[{"Exclude":{"Path":[{"Expression":"(/app/accounts/)(.*)"},{"Expression":"(/app/order/)(.*)"},{"Expression":"(/app/trade/)(.*)"}]}}],"QKM7G":[{"If":[{"Path":[{"Expression":"/hc/en-us/requests/new"}]}],"Exclude":{"QueryParam":[{"Expression":"(tf_)(.*)"}]}}],"14WAK8":[{"If":[{"Host":[{"Expression":"px.scs.splunk.com"}]}],"Exclude":{"Path":[{"Expression":"^/[^/]*"}]}},{"If":[{"Host":[{"Expression":"api.scs.splunk.com"}]},{"Host":[{"Expression":"api.playground.scs.splunk.com"}]}],"Exclude":{"Host":[{"Expression":".*"}],"Hash":[{"Expression":".*"}],"Path":[{"Expression":".*"}],"Query":[{"Expression":".*"}]}}],"141MBA":[{"If":[{"Host":[{"Expression":"px.scs.splunk.com"}]}],"Exclude":{"Path":[{"Expression":"^/[^/]*"}]}},{"If":[{"Host":[{"Expression":"api.scs.splunk.com"}]},{"Host":[{"Expression":"api.playground.scs.splunk.com"}]}],"Exclude":{"Host":[{"Expression":".*"}],"Hash":[{"Expression":".*"}],"Path":[{"Expression":".*"}],"Query":[{"Expression":".*"}]}}],"138HN0":[{"If":[{"Host":[{"Expression":"px.scs.splunk.com"}]},{"Host":[{"Expression":"px.playground.scs.splunk.com"}]}],"Exclude":{"Path":[{"Expression":"^/[^/]*"}]}},{"If":[{"Host":[{"Expression":"api.scs.splunk"}]},{"Host":[{"Expression":"api.playground.scs.splunk.com"}]},{"Host":[{"Expression":"api.staging.scs.splunk.com"}]}],"Exclude":{"Host":[{"Expression":".*"}],"Hash":[{"Expression":".*"}],"Path":[{"Expression":".*"}],"Query":[{"Expression":".*"}]}}],"18789V":[{"If":[{"Host":[{"Expression":"cae.scs.splunk.com"}]},{"Host":[{"Expression":"cae.playground.scs.splunk.com"}]},{"Host":[{"Expression":"cae.staging.scs.splunk.com"}]}],"Exclude":{"Path":[{"Expression":"^/[^/]*"}]}},{"If":[{"Host":[{"Expression":"api.playground.scs.splunk.com"}]},{"Host":[{"Expression":"api.scs.splunk.com"}]},{"Host":[{"Expression":"api.staging.scs.splunk.com"}]}],"Exclude":{"Host":[{"Expression":"()(.*).scs.splunk.com"}],"Path":[{"Expression":".*"}],"Query":[{"Expression":".*"}],"Hash":[{"Expression":".*"}]}}],"o-19X3N0-na1":[{"If":[{"Path":[{"Expression":"/account/recurringPayment/.*"}]},{"Path":[{"Expression":"/account/payNow/.*"}]},{"Path":[{"Expression":"/account/notifications/.*"}]},{"Path":[{"Expression":"/account/paymentMethod/.*"}]},{"Path":[{"Expression":"/account/trustAccount/.*"}]},{"Path":[{"Expression":"/testTransactions/.*"}]},{"Path":[{"Expression":"/api/.*"}]}],"Exclude":{"Path":[{"Expression":"(/(?:account/recurringPayment|account/payNow|api|account/notifications|account/paymentMethod|account/trustAccount|testTransactions)/)(.*)"}],"Query":[{"Expression":".*"}],"Hash":[{"Expression":".*"}]}}],"1878HN":[{"Exclude":{"Host":[{"Expression":".*"}]}},{"If":[{"Path":[{"Expression":"/app"}]}],"Exclude":{"Hash":[{"Expression":"(deployments/?)(.*)"}]}},{"If":[{"Path":[{"Expression":"/deployments"}]},{"Path":[{"Expression":"/authentication/users"}]}],"Exclude":{"Query":[{"Expression":".*"}],"Hash":[{"Expression":".*"}]}}],"ZHBMT":[{"Exclude":{"Query":[{"Expression":".*"}]}}],"12FMQA":[{"Exclude":{"Path":[{"Expression":"(/vehicles/)(.*)"},{"Expression":"(/orders/)(.*)"},{"Expression":"(/overview/)(.*)"},{"Expression":"(/services/)(.*)"},{"Expression":"(/timeslots/)(.*)"},{"Expression":"(/summary/)(.*)"},{"Expression":"(/confirmation/)(.*)"}]}},{"If":[{"Host":[{"Expression":"api.porsche.com"}],"Path":[{"Expression":"/vehicles/.*"}]},{"Host":[{"Expression":"api.porsche.com"}],"Path":[{"Expression":"/sloffermgm-datavolume/.*"}]}],"Exclude":{"Hash":[{"Expression":".*"}],"Path":[{"Expression":"(^/(?:vehicles|sloffermgm-datavolume)/)(.*)"}],"QueryParam":[{"Expression":".*"}]}},{"If":[{"Host":[{"Expression":"api.porsche.(?:com|cn)"}]}],"Exclude":{"Path":[{"Expression":"(^/(?:admin/api/v2/[^/]*/[^/]*/acquire|predictive-maintenance/information|vehicle-data/[^/]*/[^/]*/status|manuals/[^/]*|service-vehicle/vcs/capabilities|service-vehicle/vehicle-summary|service-vehicle/[^/]*/[^/]*/connected-navigation/points-of-interest|track-your-dream/[^/]*/orders)/)(.*)"}],"QueryParam":[{"Expression":"(gaClientId=)(.*)"}]}},{"If":[{"Host":[{"Expression":"my.porsche.(?:com|cn)"}]}],"Exclude":{"Path":[{"Expression":"(^/core/[^/]*/[^/]*/(?:home|track-your-dream)/)(.*)"}]}},{"If":[{"Host":[{"Expression":"signup.porsche.com"}],"Path":[{"Expression":".*confirm/"}]}],"Exclude":{"Path":[{"Expression":"(confirm/)(.*)"}]}}],"ZXFPS":[{"Exclude":{"Path":[{"Expression":"(/vehicles/)(.*)"},{"Expression":"(/overview/)(.*)"},{"Expression":"(/services/)(.*)"},{"Expression":"(/timeslots/)(.*)"},{"Expression":"(/summary/)(.*)"},{"Expression":"(/confirmation/)(.*)"}]}},{"If":[{"Host":[{"Expression":"api.porsche(?:-preview)?.(?:com|cn)"}]}],"Exclude":{"Path":[{"Expression":"(^/(?:admin/api/v2/[^/]*/[^/]*/acquire|predictive-maintenance/information|vehicle-data/[^/]*/[^/]*/status|manuals/[^/]*|service-vehicle/vcs/capabilities|service-vehicle/vehicle-summary|service-vehicle/[^/]*/[^/]*/connected-navigation/points-of-interest|track-your-dream/[^/]*/orders)/)(.*)"}],"QueryParam":[{"Expression":"(gaClientId=)(.*)"}]}},{"If":[{"Host":[{"Expression":"my.porsche(?:-preview)?.(?:com|cn)"}]}],"Exclude":{"Path":[{"Expression":"(^/core/[^/]*/[^/]*/(?:home|track-your-dream)/)(.*)"}]}}],"o-19WA8S-na1":[{"If":[{"Path":[{"Expression":"/app-mobile/.*"}]}],"Exclude":{"Path":[{"Expression":"(/app-mobile/)(.*)"}]}}],"o-1A7PWH-na1":[{"If":[{"Host":[{"Expression":"express.adobe.com"}],"Path":[{"Expression":"^/(post/|video/|page/).*"}]}],"Exclude":{"Path":[{"Expression":"(post/|video/|page/)(.*)"}]}},{"If":[{"Path":[{"Expression":"/sp/design/post/new"}]}],"Exclude":{"QueryParam":[{"Expression":"(.*=)(.*)"}]}},{"If":[{"Path":[{"Expression":"/(urn:aaid:sc:|urn%3Aaaid%3Asc%3A).*"}]}],"Exclude":{"Path":[{"Expression":"(urn:aaid:sc:|urn%3Aaaid%3Asc%3A)(.*)"}]}}],"o-1CJXPY-na1":[{"If":[{"Host":[{"Expression":"splunkcloud.com"}]}],"Exclude":{"Host":[{"Expression":"()([^.]+)(?:\\\\.[^.]+)?\\\\.splunkcloud\\\\.com"}],"Hash":[{"Expression":".*"}],"Path":[{"Expression":".*"}],"Query":[{"Expression":".*"}]}}],"o-19PMKB-na1":[{"If":[{"Host":[{"Expression":"splunkcloud.com"}]}],"Exclude":{"Host":[{"Expression":"()([^.]+)(?:\\\\.[^.]+)?\\\\.splunkcloud\\\\.com"}],"Hash":[{"Expression":".*"}],"Path":[{"Expression":".*"}],"Query":[{"Expression":".*"}]}}],"16GN0J":[{"Exclude":{"Path":[{"Expression":"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"},{"Expression":"(/book/confirmation/stays/|/book/stays/|/contact_host/|/guest/inbox/|/hosting/inbox/folder/all/thread/|/hosting/p/inbox/folder/all/thread/|/hosting/inbox/settings/quick-replies/edit/|/hosting/listings/|/hosting/reservations/details/|/hotels/|/luxury/listing/|/manage-your-space/|/multicalendar/|/performance/quality/overall/review/|/performance/quality/overall/reviews/review/|/progress/opportunities/basic/|/progress/reviews/details/|/progress/views/|/rooms/plus/|/rooms/|/split-stays/|/users/transaction_history/|/users/show/|/users/|/wishlists/v/|/wishlists/)([^/]*)"},{"Expression":"(/trips/v1/(?:[^/]*/)?ro/[^/]*/)([^/]*)"}],"QueryParam":[{"Expression":"(.*=)(.*[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}.*)"},{"Expression":"(tpiId=|tpiFormNameAndFullName=|productId=|_branch_referrer=|.*deeplink_path.*=|user_id=|_branch_match_id=|query=|confirmationCode=|federated_search_id=|lid%5B%5D=|lid\\\\[\\\\]=|modalItem=|other_listing=|cc=|refinement_paths%5B%5D=|refinement_paths\\\\[\\\\]=)(.*)"}]}},{"If":[{"Path":[{"Expression":"/account-settings/payments/payout-methods/redirect/paypal"}]}],"Exclude":{"Hash":[{"Expression":".*"}],"Query":[{"Expression":".*"}]}},{"Exclude":{"Path":[{"Expression":"(/multicalendar/)([^/]*)(/reservation/)([^/]*)"}]}}],"o-1EX0X1-na1":[{"If":[{"Path":[{"Expression":"/business/[^/]*/dashboard"}]}],"Exclude":{"Path":[{"Expression":"(/business/)([^/]*)"}]}}],"197Q72":[{"If":[{"Host":[{"Expression":"api.accuweather.com"}],"Path":[{"Expression":"/locations/v1/cities/geoposition/search.json"}]}],"Exclude":{"Query":[{"Expression":".*"}]}},{"If":[{"Path":[{"Expression":"/if9/jlr/users"}]}],"Exclude":{"Query":[{"Expression":".*"}]}},{"Exclude":{"Path":[{"Expression":"(/if9/jlr/vehicles/)(.*)"}]}}],"o-1CMWCC-na1":[{"If":[{"Host":[{"Expression":"harveynorman.com"}]}],"Exclude":{"Path":[{"Expression":"(email/)(.*)"}]}}],"13NHFR":[{"If":[{"Host":[{"Expression":"cm.com"}]}],"Exclude":{"Path":[{"Expression":"[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}"}],"QueryParam":[{"Expression":"(.*=)(.*[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}.*)"}]}}]}'
          ),
          Xr = [
            {
              Exclude: {
                Hash: [{ Expression: '#.*' }],
                QueryParam: [
                  { Expression: '(password.*=)(.*)' },
                  { Expression: '(token.*=)(.*)' },
                  { Expression: '^(jwt=)(.*)' },
                  { Expression: '^(code=)(.*)' },
                ],
              },
            },
          ],
          Zr = {};
        for (var Jr in Yr) {
          var $r = Yr[Jr];
          Zr[Jr] = Xr.concat($r);
        }
        var ei = Zr,
          ti = 16e6;
        function ni(e, t, n) {
          void 0 === n && (n = !1);
          var r = e.textContent;
          if (!r) return '';
          var i = t;
          if (!i && !(i = Hn(e))) return '';
          var o = r.length;
          return o > ti
            ? (Ae.sendToBugsnag('Ignoring huge text node', 'warning', {
                length: o,
              }),
              '')
            : e.parentNode && 'style' == Tn(e.parentNode)
            ? r
            : i.mask
            ? xn(r)
            : r;
        }
        function ri(e) {
          return Lr[e] || e.toLowerCase();
        }
        var ii = /^\s*((prefetch|preload|prerender)\s*)+$/i,
          oi = /^\s*.*((worklet|script|worker|font|fetch)\s*)+$/i;
        function si(e, t, n, r, i) {
          var o, a;
          if (
            (void 0 === r && (r = Tn(e)),
            void 0 === i && (i = Hn(e)),
            null === r || '' === t)
          )
            return null;
          if (
            'link' === r &&
            ii.test(
              null !== (o = e.getAttribute('rel')) && void 0 !== o ? o : ''
            ) &&
            !oi.test(
              null !== (a = e.getAttribute('as')) && void 0 !== a ? a : ''
            )
          )
            return null;
          var u,
            c = 'style' === t ? ui(n) : n,
            h = (function (e, t, n) {
              var r,
                i,
                o,
                a,
                u,
                c,
                h,
                d,
                l,
                p,
                f,
                _,
                v,
                g = void 0;
              (
                null === (r = null == t ? void 0 : t.watchKind) || void 0 === r
                  ? void 0
                  : r.has(Cn.Exclude)
              )
                ? (g = $e.Exclude)
                : (null == t ? void 0 : t.mask) && (g = $e.Mask);
              var y = [
                null ===
                  (a =
                    null ===
                      (o =
                        null === (i = wi.blocklist[$e.Any]) || void 0 === i
                          ? void 0
                          : i[e]) || void 0 === o
                      ? void 0
                      : o['static']) || void 0 === a
                  ? void 0
                  : a[n],
                null ===
                  (h =
                    null ===
                      (c =
                        null === (u = wi.blocklist[$e.Any]) || void 0 === u
                          ? void 0
                          : u['*']) || void 0 === c
                      ? void 0
                      : c['static']) || void 0 === h
                  ? void 0
                  : h[n],
                g
                  ? null ===
                      (p =
                        null ===
                          (l =
                            null === (d = wi.blocklist[g]) || void 0 === d
                              ? void 0
                              : d[e]) || void 0 === l
                          ? void 0
                          : l['static']) || void 0 === p
                    ? void 0
                    : p[n]
                  : void 0,
                g
                  ? null ===
                      (v =
                        null ===
                          (_ =
                            null === (f = wi.blocklist[g]) || void 0 === f
                              ? void 0
                              : f['*']) || void 0 === _
                          ? void 0
                          : _['static']) || void 0 === v
                    ? void 0
                    : v[n]
                  : void 0,
              ];
              return (
                wi.hasPrefix &&
                  y.push(
                    Ti($e.Any, e, n),
                    Ti($e.Any, '*', n),
                    g ? Ti(g, e, n) : void 0,
                    g ? Ti(g, '*', n) : void 0
                  ),
                (function (e) {
                  var t = e.filter(function (e) {
                    return void 0 !== e;
                  });
                  if (0 !== t.length) return s.mathMin.apply(s, t);
                })(y)
              );
            })(r, i, t);
          if (void 0 === h && !i) return null;
          switch (h) {
            case void 0:
              return c;
            case et.Erase:
              return null;
            case et.MaskText:
              return xn(c);
            case et.ScrubCss:
              return (
                (u = function (e, t, n) {
                  return '' + e + Ei + n;
                }),
                c.replace(_n, function (e) {
                  for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                  var r = t[0] || t[3] || t[6] || t[9] || t[12],
                    i =
                      (t[1] || t[4] || t[7] || t[10] || t[13],
                      t[2] || t[5] || t[8] || t[11] || t[14]);
                  return t[15], u(r, 0, i);
                })
              );
            case et.ScrubUrl:
              var d = hi(c, { source: 'dom', type: r });
              if ('#' === c[0]) {
                var l = d.indexOf('#');
                if (l > -1) return d.substring(l);
              }
              return d;
            default:
              return (0, kr.nt)(h);
          }
        }
        var ai = {},
          ui = function (e, t) {
            void 0 === t && (t = window);
            try {
              var n = t.location,
                r = '' + n.origin + n.pathname + n.search,
                i = ai[r];
              return (
                i
                  ? (i.lastIndex = 0)
                  : ((i = new RegExp(
                      ((o = r),
                      (Gr.test(o) ? o.replace(Qr, '\\$&') : o) + '/?(#)'),
                      'g'
                    )),
                    (ai[r] = i)),
                e.replace(i, 'https://fs-currenturl.invalid$1')
              );
            } catch (t) {
              return He('cleanCSS', t), e;
            }
            var o;
          },
          ci = /^data:/i;
        function hi(e, t) {
          if (ci.test(e)) return e;
          switch (t.source) {
            case 'dom':
              switch ((n = t.type)) {
                case 'frame':
                case 'iframe':
                  return vi(e);
                default:
                  return di(e);
              }
            case 'event':
              switch ((n = t.type)) {
                case Oe.AJAX_REQUEST:
                case Oe.NAVIGATE:
                  return di(e);
                case Oe.SET_FRAME_BASE:
                  return vi(e);
                default:
                  return (0, kr.nt)(n);
              }
            case 'log':
              return vi(e);
            case 'page':
              var n;
              switch ((n = t.type)) {
                case 'base':
                  return vi(e);
                case 'referrer':
                case 'url':
                  return di(e);
                default:
                  return (0, kr.nt)(n);
              }
            case 'perfEntry':
              switch (t.type) {
                case 'frame':
                case 'iframe':
                case 'navigation':
                case 'other':
                  return vi(e);
                default:
                  return di(e);
              }
            default:
              return (0, kr.nt)(t);
          }
        }
        function di(e) {
          return gi(fi, e);
        }
        var li = ut.DefaultOrgSettings.MaxUrlLength,
          pi = Ur(ut.DefaultOrgSettings.UrlPrivacyConfig),
          fi = Ur(ut.DefaultOrgSettings.UrlPrivacyConfig);
        function _i(e, t) {
          (pi = Ur(ut.DefaultOrgSettings.UrlPrivacyConfig.concat(e))),
            (fi = Ur(e)),
            (li = t || ut.DefaultOrgSettings.MaxUrlLength);
        }
        function vi(e) {
          return gi(pi, e);
        }
        function gi(e, t) {
          return (function (e, t, n) {
            void 0 === n && (n = Fr);
            for (
              var r = {
                  Hash: [],
                  Host: [],
                  Path: [],
                  QueryParam: [],
                  Query: [],
                },
                i = 0,
                o = e;
              i < o.length;
              i++
            ) {
              var s = o[i];
              jr(s.If, t) && Kr(r, s.Exclude);
            }
            var a,
              u,
              c = Hr(r.Host, t.host, n);
            return (
              (t.host = c),
              t.port &&
                ((a = c),
                (u = t.port),
                a.substring(a.length - u.length) !== u) &&
                (t.port = ''),
              (t.pathname = Hr(r.Path, zr(t.pathname), n)),
              t.hash && (t.hash = Hr(r.Hash, t.hash, n)),
              t.search &&
                ((t.search = (function (e, t, n) {
                  return (
                    void 0 === n && (n = Fr),
                    t
                      .split('?')
                      .map(function (t) {
                        return t
                          .replace('?', '')
                          .split('&')
                          .map(function (t) {
                            return Hr(e, t, n);
                          })
                          .join('&');
                      })
                      .join('?')
                  );
                })(r.QueryParam, t.search, n)),
                (t.search = Hr(r.Query, t.search, n))),
              t.href
            );
          })(e, Or('', t)).substring(0, li);
        }
        var yi = /([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/gi,
          mi =
            /(?:(http)|(ftp)|(ws)|(blob)|(file))[s]?:\/\/(?:[a-zA-Z]|[0-9]|[$-_@.&+#]|[!*(),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+/gi;
        function Si(e) {
          return e.replace(yi, '<email>').replace(mi, function (e) {
            return hi(e, { source: 'log', type: 'debug' });
          });
        }
        var wi,
          Ei = 'https://fs-excluded.invalid';
        function bi(e) {
          var t, n, r, i, o, s, a, u, c, h, d, l, p, f, _, v;
          try {
            for (
              var g = (wi = { blocklist: {}, hasPrefix: !1 }).blocklist,
                y =
                  (null !== (r = null == e ? void 0 : e.length) && void 0 !== r
                    ? r
                    : 0) > 0
                    ? e
                    : ut.DefaultOrgSettings.AttributeBlocklist,
                m = {},
                S = 0,
                w = y;
              S < w.length;
              S++
            ) {
              var E = w[S],
                b = E.Action;
              switch (b) {
                case et.Erase:
                case et.MaskText:
                case et.ScrubCss:
                case et.ScrubUrl:
                  break;
                default:
                  Ae.sendToBugsnag(
                    'Detected unexpected attribute block action ' + b,
                    'warning'
                  ),
                    (b = et.Erase);
              }
              if (
                ((null !== (i = g[(h = E.Target)]) && void 0 !== i) ||
                  (g[h] = {}),
                (null !== (o = (d = g[E.Target])[(l = E.Tag)]) &&
                  void 0 !== o) ||
                  (d[l] = { static: {}, regex: {} }),
                E.Type === tt.Prefix)
              )
                (null !== (s = m[(p = E.Target)]) && void 0 !== s) ||
                  (m[p] = {}),
                  (null !== (a = (f = m[E.Target])[(_ = E.Tag)]) &&
                    void 0 !== a) ||
                    (f[_] = {}),
                  (null !== (u = (v = m[E.Target][E.Tag])[b]) &&
                    void 0 !== u) ||
                    (v[b] = []),
                  m[E.Target][E.Tag][b].push(
                    null !== (c = E.Name) && void 0 !== c ? c : ''
                  );
              else {
                if (!E.Name) {
                  Ae.sendToBugsnag(
                    'Detected an empty named static attribute ' +
                      JSON.stringify(E),
                    'warning'
                  );
                  continue;
                }
                g[E.Target][E.Tag]['static'][E.Name] = b;
              }
            }
            for (var T in m)
              for (var C in m[T])
                for (var I in m[T][C]) {
                  var k = m[T][C][I];
                  (g[T][C].regex[I] = new RegExp(
                    '^(?:' + k.join('|') + ')',
                    'i'
                  )),
                    (wi.hasPrefix = !0);
                }
          } catch (e) {
            Ae.sendToBugsnag(e, 'warning'),
              (wi = {
                blocklist:
                  ((t = {}),
                  (t[$e.Any] = {
                    '*': {
                      static: {},
                      regex: ((n = {}), (n[et.Erase] = /.*/), n),
                    },
                  }),
                  t),
                hasPrefix: !0,
              });
          }
        }
        function Ti(e, t, n) {
          var r,
            i,
            o =
              null ===
                (i =
                  null === (r = wi.blocklist[e]) || void 0 === r
                    ? void 0
                    : r[t]) || void 0 === i
                ? void 0
                : i.regex;
          if (o) for (var s in o) if (o[s].test(n)) return Number(s);
        }
        bi();
        var Ci = {
          target: { any: $e.Any, exclude: $e.Exclude, mask: $e.Mask },
          action: {
            erase: et.Erase,
            maskText: et.MaskText,
            scrubUrl: et.ScrubUrl,
            scrubCss: et.ScrubCss,
          },
          type: { static: tt.Static, prefix: tt.Prefix },
        };
        function Ii(e) {
          var t;
          return {
            Tag: e.tag,
            Name: e.name,
            Target: Ci.target[e.target],
            Action: Ci.action[e.action],
            Type: Ci.type[null !== (t = e.type) && void 0 !== t ? t : 'static'],
          };
        }
        function ki(e) {
          return (
            'function' == typeof (t = e.constructor) &&
            Function.prototype.toString.call(t).indexOf('[native code]') > -1
          );
          var t;
        }
        var Ai = '#polyfillshadow';
        function xi(e) {
          var t;
          return (
            (null === (t = e.childNodes) || void 0 === t ? void 0 : t.length) >
            0
          );
        }
        function Ri(e, t) {
          Oi(e.childNodes, t);
        }
        function Pi(e, t) {
          Oi(e.childNodes, t, !0);
        }
        function Oi(e, t, n) {
          void 0 === n && (n = !1);
          for (var r = n ? e.length - 1 : 0, i = n ? -1 : e.length; r !== i; ) {
            var o = e[r];
            o && 'frag' in o && !Ee(o) && Array.isArray(o.frag)
              ? o.frag.length && Oi(o.childNodes, t, n)
              : t(o),
              n ? --r : ++r;
          }
        }
        var Mi = { INPUT: !0, TEXTAREA: !0, NOSCRIPT: !0 },
          Li = (function () {
            function e(e, t, n) {
              (this._watcher = e),
                (this._resizer = t),
                (this._watchedElIntersectionObserver = n),
                (Mn = {}),
                (Ln = 1);
            }
            return (
              (e.prototype.tokenizeNode = function (e, t, n, r, i, o, s) {
                var a = this,
                  u = Hn(t),
                  c = Hn(n),
                  h = [];
                return (
                  (function (t) {
                    var n = Ln;
                    try {
                      return a._tokeNode(e, u, c, r, h, i, o, s), !0;
                    } catch (e) {
                      return (Ln = n), !1;
                    }
                  })() || (h = []),
                  h
                );
              }),
              (e.prototype._tokeNode = function (e, t, n, r, o, s, a, u) {
                for (
                  var c,
                    h,
                    d = [{ parentMirror: t, nextMirror: n, node: r }],
                    l = function (e, t) {
                      return function (n) {
                        n &&
                          e.push({
                            parentMirror: t,
                            nextMirror: null,
                            node: n,
                          });
                      };
                    };
                  d.length;

                ) {
                  var p = d.pop();
                  if (p)
                    if ('string' != typeof p) {
                      var f = p.node,
                        _ = Tn(f),
                        v = this._encodeNode(e, _, p, o, s, a);
                      if (
                        null != v &&
                        !(null === (c = v.watchKind) || void 0 === c
                          ? void 0
                          : c.has(Cn.Exclude))
                      ) {
                        var g = 1 === f.nodeType ? f.shadowRoot : null,
                          y =
                            v.shadowRootType === Ai &&
                            window.HTMLSlotElement &&
                            'slot' === _ &&
                            f.assignedNodes();
                        if (g || y || xi(f))
                          if (
                            null === (h = v.watchKind) || void 0 === h
                              ? void 0
                              : h.has(Cn.Defer)
                          )
                            u(v.node, In.Deferred);
                          else {
                            if ((d.push(']'), Pi(f, l(d, v)), g))
                              d.push({
                                parentMirror: v,
                                nextMirror: null,
                                node: g,
                              });
                            else if (y && y.length > 0) {
                              for (
                                var m = [], S = !1, w = 0, E = y;
                                w < E.length;
                                w++
                              ) {
                                var b = Wn(E[w]);
                                if (!b) {
                                  S = !0;
                                  break;
                                }
                                var T = '<$' + b;
                                m.unshift(T);
                              }
                              S
                                ? u(f, In.Immediate)
                                : d.push.apply(
                                    d,
                                    (0, i.__spreadArray)(
                                      (0, i.__spreadArray)([']'], m),
                                      ['[', '<#assigned-nodes']
                                    )
                                  );
                            }
                            d.push('[');
                          }
                      }
                    } else '<' === p[0] && ++Ln, o.push(p);
                }
              }),
              (e.prototype._encodeNode = function (e, t, n, r, i, o) {
                var s,
                  a,
                  u,
                  c = n.node,
                  h = n.parentMirror,
                  d = n.nextMirror;
                if (!this._shouldEncode(t, c, h)) return null;
                var l,
                  p,
                  f,
                  _ = (function (e) {
                    if (e.constructor === window.ShadowRoot)
                      return ki(e) ? '#shadow' : Ai;
                  })(c),
                  v = (function (e) {
                    var t = { id: Ln++, node: e };
                    return (Mn[t.id] = t), (e._fs = t.id), t;
                  })(c);
                if (
                  ((v.shadowRootType =
                    _ || (null == h ? void 0 : h.shadowRootType)),
                  h &&
                    (_
                      ? ((h.shadow = v), (v.parent = h))
                      : ((l = h),
                        (f = d),
                        jn((p = v), this._resizer),
                        (p.parent = l),
                        (p.next = f),
                        f && ((p.prev = f.prev), (f.prev = p)),
                        null == p.next
                          ? ((p.prev = l.lastChild), (l.lastChild = p))
                          : (p.next.prev = p),
                        null == p.prev ? (l.child = p) : (p.prev.next = p))),
                  10 == c.nodeType)
                ) {
                  var g = c;
                  return (
                    r.push(
                      '<!DOCTYPE',
                      ':name',
                      g.name,
                      ':publicId',
                      g.publicId || '',
                      ':systemId',
                      g.systemId || ''
                    ),
                    v
                  );
                }
                v.mask =
                  null === (s = v.parent) || void 0 === s ? void 0 : s.mask;
                try {
                  switch (c.nodeType) {
                    default:
                      r.push('<' + c.nodeName), Ui(c, i);
                      break;
                    case 11:
                    case 9:
                      var y = void 0;
                      (y = _ || c.nodeName), r.push('<' + y), Ui(c, i);
                      break;
                    case 3:
                      void 0 === v.mask &&
                        (v.mask = !v.parent || v.parent.mask),
                        v.mask && this._resizer.observe(c.parentElement),
                        Ui(c, i),
                        r.push('<' + c.nodeName, ni(c, v, !0));
                      break;
                    case 1:
                      var m = c;
                      (y = m.nodeName),
                        'http://www.w3.org/2000/svg' == m.namespaceURI &&
                          (y = 'svg:' + y),
                        r.push('<' + y);
                      var S = this.getWatchState(m, !!v.shadowRootType, e);
                      if (null != S) {
                        v.watchKind = S;
                        var w = !1;
                        S.has(Cn.Watch) &&
                          ((w = !0),
                          null === (a = this._watchedElIntersectionObserver) ||
                            void 0 === a ||
                            a.observe(m)),
                          S.has(Cn.Exclude) &&
                            ((w = !0), r.push(':_fs_excluded', 'true')),
                          S.has(Cn.Unmask) && (v.mask = !1),
                          S.has(Cn.Mask) && (v.mask = !0),
                          S.has(Cn.Defer) &&
                            ((w = !0), r.push(':_fs_deferred', 'true')),
                          w && this._resizer.observe(m);
                      }
                      v.mask && r.push(':_fs_masked', 'true'),
                        (null === (u = v.watchKind) || void 0 === u
                          ? void 0
                          : u.has(Cn.Exclude)) || Ui(c, i);
                      var E = !1,
                        b = {};
                      if (
                        ((function (e, t, n, r) {
                          var i;
                          if (!mr || 'output' !== t) {
                            var o = n;
                            if (
                              !(
                                (void 0 !== o.hasAttributes &&
                                  !o.hasAttributes()) ||
                                (void 0 === o.hasAttributes &&
                                  o.attributes &&
                                  o.attributes.length <= 0)
                              )
                            )
                              if (void 0 !== o.getAttributeNames)
                                for (
                                  var s = 0,
                                    a =
                                      null !== (i = o.getAttributeNames()) &&
                                      void 0 !== i
                                        ? i
                                        : [];
                                  s < a.length;
                                  s++
                                ) {
                                  var u = a[s];
                                  Ni(e, t, n, r, u, o.getAttribute(u));
                                }
                              else
                                for (var c = 0; c < o.attributes.length; c++) {
                                  var h = o.attributes[c];
                                  null != h && Ni(e, t, n, r, h.name, h.value);
                                }
                          }
                        })(v, t, m, function (e, t) {
                          (E = !0), r.push(':' + e), r.push(t), (b[e] = t);
                        }),
                        E)
                      )
                        try {
                          o(t, m, b);
                        } catch (e) {
                          Ae.sendToBugsnag(e, 'error');
                        }
                  }
                } catch (e) {
                  Ae.sendToBugsnag(e, 'error');
                }
                return v;
              }),
              (e.prototype._shouldEncode = function (e, t, n) {
                return 'script' != e && 8 != t.nodeType;
              }),
              (e.prototype.getWatchState = function (e, t, n) {
                return t || null == n || Mi[e.nodeName]
                  ? this._watcher.isWatched(e)
                  : n.get(e);
              }),
              e
            );
          })();
        function Ui(e, t) {
          try {
            t(e);
          } catch (e) {
            Ae.sendToBugsnag(e, 'error');
          }
        }
        function Ni(e, t, n, r, i, o) {
          if (null !== o) {
            if ('open' === i && 'dialog' === t) return;
            var s = ri(i),
              a = si(n, s, o, t, e);
            null !== a && r(s, a);
          }
        }
        var Di = JSON.parse(
            '[{"Selector":"input[type=password]","Consent":false,"Type":1},{"Selector":"input[type=hidden]","Consent":false,"Type":1},{"Selector":"[autocomplete^=cc-]","Consent":false,"Type":1},{"Selector":"object:not([type^=\\"image/\\"])","Consent":false,"Type":1},{"Selector":"embed:not([type^=\\"image/\\"])","Consent":false,"Type":1},{"Selector":"noscript","Consent":false,"Type":1},{"Selector":".fs-hide","Consent":false,"Type":1},{"Selector":".fs-exclude","Consent":false,"Type":1},{"Selector":".fs-exclude-without-consent","Consent":true,"Type":1},{"Selector":".fs-mask","Consent":false,"Type":2},{"Selector":".fs-mask-without-consent","Consent":true,"Type":2},{"Selector":".fs-unmask","Consent":false,"Type":3},{"Selector":".fs-unmask-with-consent","Consent":true,"Type":3},{"Selector":".fs-block","Consent":false,"Type":1},{"Selector":".fs-record-with-consent","Consent":true,"Type":1}]'
          ),
          Fi = function (e, t) {
            return e | t;
          },
          Hi = Pn.reduce(Fi, 0),
          qi = Rn.reduce(Fi, 0),
          Wi = (function () {
            function e(e) {
              void 0 === e && (e = 0), (this._elementKinds = e);
            }
            return (
              (e.prototype.has = function (e) {
                return !!(this._elementKinds & e);
              }),
              (e.prototype.set = function (t) {
                if (this._elementKinds & qi && t & qi) {
                  var n = this._elementKinds | t,
                    r = e._getStrictestPrivacyKind(n);
                  this._elementKinds = e._combineBits(r, this._elementKinds);
                } else this._elementKinds |= t;
              }),
              (e.prototype.hasKinds = function () {
                return 0 !== this._elementKinds;
              }),
              (e.areEqual = function (e, t) {
                return (
                  (null == e && null == t) ||
                  (null != e && null != t && e.equals(t))
                );
              }),
              (e.prototype.getStrictestPrivacyKind = function () {
                return e._getStrictestPrivacyKind(this._elementKinds);
              }),
              (e._getStrictestPrivacyKind = function (e) {
                for (var t = 0, n = Rn; t < n.length; t++) {
                  var r = n[t];
                  if (e & r) return r;
                }
                return null;
              }),
              (e.needsToObserve = function (e, t) {
                var n,
                  r,
                  i =
                    null !== (n = null == e ? void 0 : e._elementKinds) &&
                    void 0 !== n
                      ? n
                      : 0;
                return !!(
                  (null !== (r = null == t ? void 0 : t._elementKinds) &&
                  void 0 !== r
                    ? r
                    : 0) &
                  ~i &
                  Hi
                );
              }),
              (e.combineKindsPreservePrivacy = function (t, n) {
                var r,
                  i,
                  o = e._combineBits(
                    null !== (r = null == t ? void 0 : t._elementKinds) &&
                      void 0 !== r
                      ? r
                      : 0,
                    null !== (i = null == n ? void 0 : n._elementKinds) &&
                      void 0 !== i
                      ? i
                      : 0
                  );
                return new e(o);
              }),
              (e._combineBits = function (e, t) {
                return (e & qi) | (t & Hi);
              }),
              (e.prototype.equals = function (e) {
                return !!e && this._elementKinds === e._elementKinds;
              }),
              e
            );
          })();
        function Bi(e) {
          var t = document.documentElement || document.createElement('div');
          try {
            return s.elMatches(t, e), !0;
          } catch (t) {
            return (
              Ae.sendToBugsnag('Browser rejected rule', 'warning', {
                selector: e,
                error: t.toString(),
              }),
              !1
            );
          }
        }
        var ji = {
            1: 'exclude',
            2: 'mask',
            3: 'unmask',
            4: 'watch',
            5: 'keep',
            6: 'defer',
          },
          Vi = (function () {
            function e() {
              (this._withConsent = Ki()), (this._withoutConsent = Ki());
            }
            return (
              (e.prototype.forConsentState = function (e) {
                return e ? this._withConsent : this._withoutConsent;
              }),
              (e.prototype.addElementBlockRules = function (e) {
                var t = this,
                  n = Ki(),
                  r = Ki();
                e.map(Qi)
                  .filter(function (e) {
                    return zi(e.selector);
                  })
                  .forEach(function (e) {
                    if (e.consent)
                      return e.kind === Cn.Unmask
                        ? void n[e.kind].push(e)
                        : void r[e.kind].push(e);
                    n[e.kind].push(e), r[e.kind].push(e);
                  });
                for (
                  var i =
                      document.documentElement || document.createElement('div'),
                    o = function (e, n) {
                      try {
                        if (0 === e.length) return;
                        var r = e
                          .map(function (e) {
                            return e.selector;
                          })
                          .join(', ');
                        s.elMatches(i, r), n.push(r);
                      } catch (n) {
                        Ae.sendToBugsnag(
                          'Browser rejected optimistic merge rule',
                          'warning'
                        ),
                          t._fallback(e);
                      }
                    },
                    a = 0,
                    u = On;
                  a < u.length;
                  a++
                ) {
                  var c = u[a];
                  o(n[c], this._withConsent[c]),
                    o(r[c], this._withoutConsent[c]);
                }
              }),
              (e.prototype.addRule = function (e, t, n) {
                if (this._tryToAddRule(e, t, n)) return !0;
                switch (e) {
                  case Cn.Watch:
                  case Cn.Unmask:
                  case Cn.Keep:
                  case Cn.Defer:
                    break;
                  case Cn.Mask:
                  case Cn.Exclude:
                  default:
                    (this._withConsent[e] = ['*']),
                      (this._withoutConsent[e] = ['*']);
                }
                return !1;
              }),
              (e.prototype._tryToAddRule = function (e, t, n) {
                try {
                  if (zi(n)) {
                    if (t) {
                      var r = this._getConsentRulesForKind(e);
                      return this._mergeRule(e, r, n);
                    }
                    return (
                      this._mergeRule(e, this._withoutConsent, n) &&
                      this._mergeRule(e, this._withConsent, n)
                    );
                  }
                  return !0;
                } catch (e) {
                  return (
                    Ae.sendToBugsnag('Error adding block rule', 'error', {
                      selector: n,
                      error: e.toString(),
                    }),
                    !1
                  );
                }
              }),
              (e.prototype._mergeRule = function (e, t, n) {
                var r =
                    document.documentElement || document.createElement('div'),
                  i = e;
                switch (i) {
                  case Cn.Exclude:
                  case Cn.Mask:
                  case Cn.Unmask:
                  case Cn.Watch:
                  case Cn.Keep:
                  case Cn.Defer:
                    break;
                  default:
                    i = Cn.Exclude;
                }
                if (0 == t[i].length) return !!Bi(n) && (t[i].push(n), !0);
                var o = t[i].length - 1,
                  a = t[i][o].concat(', ', n);
                try {
                  s.elMatches(r, a);
                } catch (e) {
                  return (
                    !!Bi(n) &&
                    (t[i].push(n),
                    Ae.sendToBugsnag(
                      'Browser rejected merged rule',
                      'warning',
                      { kind: ji[i], selector: n, error: e.toString() }
                    ),
                    !0)
                  );
                }
                return (t[i][o] = a), !0;
              }),
              (e.prototype.addElementBlock = function (e) {
                var t = Qi(e),
                  n = t.kind,
                  r = t.consent,
                  i = t.selector;
                return this.addRule(n, r, i);
              }),
              (e.prototype._fallback = function (e) {
                for (var t = 0, n = e; t < n.length; t++) {
                  var r = n[t],
                    i = r.kind,
                    o = r.consent,
                    s = r.selector;
                  this.addRule(i, o, s);
                }
              }),
              (e.prototype._getConsentRulesForKind = function (e) {
                var t = e === Cn.Unmask;
                return this.forConsentState(t);
              }),
              e
            );
          })();
        function Ki() {
          for (
            var e = Object.create ? Object.create(null) : {}, t = 0, n = On;
            t < n.length;
            t++
          )
            e[n[t]] = [];
          return e;
        }
        function zi(e) {
          return !e.match(gn) && '' != e.trim();
        }
        function Qi(e) {
          var t = Cn.Exclude;
          switch (e.Type) {
            case it.Unset:
            case it.Exclude:
              t = Cn.Exclude;
              break;
            case it.Mask:
              t = Cn.Mask;
              break;
            case it.Unmask:
              t = Cn.Unmask;
              break;
            case it.Watch:
              t = Cn.Watch;
              break;
            case it.Keep:
              t = Cn.Keep;
              break;
            case it.Defer:
              t = Cn.Defer;
              break;
            default:
              (0, kr.nt)(e.Type, 'Unexpected block type: ' + e.Type);
          }
          return { kind: t, consent: e.Consent, selector: e.Selector };
        }
        function Gi(e) {
          if (!(null == e ? void 0 : e.hasKinds())) return 0;
          var t = e.getStrictestPrivacyKind();
          return null === t ? 0 : Rn.length - Rn.indexOf(t);
        }
        var Yi = (function () {
          function e() {
            (this._rules = new Vi()), (this._qsaStrategyEnabled = !Sr);
          }
          return (
            (e.prototype.initialize = function (e) {
              var t = e.blocks,
                n = e.deferreds,
                r = e.keeps,
                o = e.watches,
                s = e.canvasWatcherMode,
                a = (0, i.__spreadArray)([], Di);
              if (t)
                for (var u = 0, c = t; u < c.length; u++) {
                  var h = c[u];
                  a.push(h);
                }
              if (
                ((null != s ? s : pt.Disabled) === pt.Disabled &&
                  a.push({ Consent: !1, Selector: 'canvas', Type: it.Exclude }),
                o)
              )
                for (var d = 0, l = o; d < l.length; d++) {
                  var p = l[d];
                  a.push({
                    Type: it.Watch,
                    Consent: We.RevokeConsent,
                    Selector: p.Selector,
                  });
                }
              if (n)
                for (var f = 0, _ = n; f < _.length; f++) {
                  var v = _[f];
                  a.push({
                    Type: it.Defer,
                    Consent: We.RevokeConsent,
                    Selector: v.Selector,
                  });
                }
              if ((this._rules.addElementBlockRules(a), r))
                for (var g = 0, y = r; g < y.length; g++) {
                  var m = y[g];
                  this.addElementKeep(m);
                }
            }),
            (e.prototype.isWatched = function (e) {
              var t,
                n = new Wi(),
                r = this._rules.forConsentState(
                  null !== (t = this._userHasConsented) && void 0 !== t && t
                ),
                i = this._firstMatches(e, Rn, r) | this._findMatches(e, Pn, r);
              return n.set(i), n.hasKinds() ? n : null;
            }),
            (e.prototype._firstMatches = function (e, t, n) {
              return this._findMatches(e, t, n, !0);
            }),
            (e.prototype._findMatches = function (e, t, n, r) {
              void 0 === r && (r = !1);
              for (var i = 0, o = 0, a = t; o < a.length; o++) {
                for (var u = a[o], c = !1, h = 0, d = n[u]; h < d.length; h++) {
                  var l = d[h];
                  if (s.elMatches(e, l)) {
                    (i |= u), (c = !0);
                    break;
                  }
                }
                if (c && r) break;
              }
              return i;
            }),
            (e.prototype.addElementBlock = function (e) {
              return this._rules.addElementBlock(e);
            }),
            (e.prototype.addElementKeep = function (e) {
              var t = Cn.Keep;
              return (
                e.Type === ot.Click && this.addRule(t, e.Consent, e.Selector)
              );
            }),
            (e.prototype.addRule = function (e, t, n) {
              return this._rules.addRule(e, t, n);
            }),
            (e.prototype.getConsent = function () {
              return this._userHasConsented;
            }),
            (e.prototype.initializeConsent = function (e) {
              void 0 === this._userHasConsented && this._setConsent(e, !1);
            }),
            (e.prototype.setConsent = function (e) {
              this._setConsent(e, !0);
            }),
            (e.prototype._setConsent = function (e, t) {
              void 0 === t && (t = !0),
                this._userHasConsented !== e &&
                  ((this._userHasConsented = e),
                  t && this.onConsentChange && this.onConsentChange());
            }),
            (e.prototype.allWatchedElements = function (e) {
              var t;
              if (!this._qsaStrategyEnabled) return null;
              for (
                var n = new WeakMap(),
                  r = !1,
                  i = function (e, t) {
                    var i,
                      o =
                        null !== (i = n.get(e)) && void 0 !== i ? i : new Wi();
                    o.set(t), n.set(e, o), (r = !0);
                  },
                  o = this._rules.forConsentState(
                    null !== (t = this._userHasConsented) && void 0 !== t && t
                  ),
                  a = 0,
                  u = On;
                a < u.length;
                a++
              )
                for (var c = u[a], h = 0, d = o[c]; h < d.length; h++) {
                  var l = d[h];
                  Zi(e) && s.elMatches(e, l) && i(e, c);
                  for (var p = Xi(e, l), f = 0; f < p.length; f++) i(p[f], c);
                }
              return r ? n : null;
            }),
            e
          );
        })();
        function Xi(e, t) {
          return Zi(e)
            ? s.elQuerySelectorAll(e, t)
            : (function (e) {
                return 9 === e.nodeType;
              })(e)
            ? s.docQuerySelectorAll(e, t)
            : (function (e) {
                return 11 === e.nodeType;
              })(e)
            ? s.docFragQuerySelectorAll(e, t)
            : e.querySelectorAll(t);
        }
        function Zi(e) {
          return 1 === e.nodeType;
        }
        var Ji = (function () {
            function e(e) {
              (this._ctx = e),
                (this._recordedDims = {}),
                (this._observedDims = {});
            }
            return (
              (e.create = function (e) {
                return $i.isSupported(e.window) ? new $i(e) : new eo(e);
              }),
              (e.prototype.collect = function (e) {
                var t = [];
                for (var n in this._observedDims)
                  this.addPlaceholderResize(e, t, parseInt(n, 10));
                return (this._observedDims = {}), t;
              }),
              (e.prototype.isObserved = function (e) {
                return !!this._recordedDims[e];
              }),
              (e.prototype._getSize = function (e, t) {
                if (1 !== (null == e ? void 0 : e.nodeType))
                  return { width: 0, height: 0 };
                if (!t || (s.arrayIsArray(t) && 0 === t.length))
                  return e.getBoundingClientRect();
                var n = Array.isArray(t) ? t[0] : t;
                switch (getComputedStyle(e).writingMode) {
                  case 'horizontal-tb':
                    return { width: n.inlineSize, height: n.blockSize };
                  case 'vertical-lr':
                  case 'vertical-rl':
                    return { width: n.blockSize, height: n.inlineSize };
                  default:
                    return e.getBoundingClientRect();
                }
              }),
              (e.prototype.addEntry = function (e, t) {
                try {
                  var n = Wn(e);
                  if (!n) return;
                  if (1 != e.nodeType) return;
                  var r = e,
                    i = this._getSize(r, t);
                  this._observedDims[n] = i;
                  var o = this._ctx.queue();
                  if (!this._recordedDims[n] && void 0 !== o)
                    for (
                      var s = this.flushSizeEvents(n), a = 0, u = s;
                      a < u.length;
                      a++
                    ) {
                      var c = u[a];
                      o.enqueue(c);
                    }
                } catch (e) {}
              }),
              (e.prototype.addPlaceholderResize = function (e, t, n) {
                for (
                  var r = 0, o = this.flushSizeEvents(n);
                  r < o.length;
                  r++
                ) {
                  var s = o[r];
                  t.push((0, i.__assign)((0, i.__assign)({}, s), { When: e }));
                }
              }),
              (e.prototype.flushSizeEvents = function (e) {
                var t = this._observedDims[e];
                if (!t) return [];
                var n = qn(e);
                if (!n) return [];
                var r = n.watchKind,
                  i = t.width,
                  o = t.height,
                  s = this._recordedDims[e];
                if (s && s.w == i && s.h == o) return [];
                this._recordedDims[e] = { w: i, h: o };
                var a = [];
                if (null == r ? void 0 : r.has(Cn.Watch)) {
                  var u = 0 != i && 0 != o;
                  (!!s && 0 != s.w && 0 != s.h) != u &&
                    a.push({ Kind: Oe.WATCHED_ELEM, Args: [e, u] });
                }
                var c = n.node,
                  h = 'scrollLeft' in c;
                return (
                  ((null == r ? void 0 : r.has(Cn.Exclude)) ||
                    (null == r ? void 0 : r.has(Cn.Defer)) ||
                    n.mask ||
                    h) &&
                    (a.push({ Kind: Oe.PLACEHOLDER_SIZE, Args: [e, i, o] }),
                    h &&
                      a.push({
                        Kind: Oe.RESIZE_SCROLLABLE_ELEMENT_CONTENT,
                        Args: [e, c.scrollWidth, c.scrollHeight],
                      })),
                  a
                );
              }),
              e
            );
          })(),
          $i = (function (e) {
            function t(t) {
              var n = e.call(this, t) || this;
              return (
                (n._inlineGroups = new WeakMap()),
                (n._observedInlines = new WeakMap()),
                (n._obs = new t.window.ResizeObserver(function (e) {
                  for (var t = 0, r = e; t < r.length; t++) {
                    var i = r[t],
                      o = i.target,
                      s = i.borderBoxSize;
                    n.addEntry(o, s);
                  }
                })),
                (n._inlineGroupObs = new t.window.ResizeObserver(function (e) {
                  for (var t = 0, r = e; t < r.length; t++) {
                    var i = r[t].target;
                    n._addEntriesForInlineGroup(i);
                  }
                })),
                n
              );
            }
            return (
              (0, i.__extends)(t, e),
              (t.isSupported = function (e) {
                return 'function' == typeof e.ResizeObserver;
              }),
              (t.prototype.observe = function (e) {
                var t = this;
                if (e && 1 == e.nodeType) {
                  var n = e;
                  this._obs.unobserve(n),
                    this._obs.observe(n),
                    this._ctx.measurer.requestMeasureTask(
                      tn.Medium,
                      function () {
                        t._addToInlineGroupIfNeeded(n);
                      }
                    );
                }
              }),
              (t.prototype.unobserveSubtree = function (e) {}),
              (t.prototype.nodeChanged = function (e) {
                var t = this,
                  n = this._observedInlines.get(e);
                'number' == typeof n &&
                  Wn(e) === n &&
                  this._ctx.measurer.requestMeasureTask(tn.Medium, function () {
                    t.addEntry(e);
                  });
              }),
              (t.prototype._addEntriesForInlineGroup = function (e) {
                var t = this._inlineGroups.get(e);
                if (t)
                  for (var n in t) {
                    var r = qn(t[n]);
                    r ? this.addEntry(r.node) : delete t[n];
                  }
              }),
              (t.prototype._addToInlineGroupIfNeeded = function (e) {
                var t = this,
                  n = Wn(e);
                if (n) {
                  var r = this._nearestNonInlineElementAncestorOf(e);
                  if (r && r !== e) {
                    this._observedInlines.set(e, n), this.addEntry(e);
                    var i = this._inlineGroups.get(r);
                    i ||
                      ((i = Object.create(null)), this._inlineGroups.set(r, i)),
                      (i[n] = n),
                      s.setWindowTimeout(
                        this._ctx.window,
                        X(function () {
                          t._inlineGroupObs.observe(r);
                        }),
                        0
                      );
                  }
                }
              }),
              (t.prototype._nearestNonInlineElementAncestorOf = function (e) {
                for (var t = 0, n = e; ; ) {
                  if (t++ > 1e3) return null;
                  if (!n || 1 != n.nodeType) return null;
                  var r = n;
                  if (getComputedStyle(r).display.indexOf('inline') < 0)
                    return r;
                  n = n.parentNode;
                }
              }),
              t
            );
          })(Ji),
          eo = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              (0, i.__extends)(t, e),
              (t.prototype.observe = function (e) {
                var t = this;
                if (e && 1 == e.nodeType) {
                  var n = e;
                  this._growWatchedIndex(Hn(e)),
                    this._ctx.measurer.requestMeasureTask(
                      tn.Medium,
                      function () {
                        t.addEntry(n);
                      }
                    );
                }
              }),
              (t.prototype.unobserveSubtree = function (e) {
                var t = Hn(e);
                t && this._clearWatchedIndex(t);
              }),
              (t.prototype.nodeChanged = function (e) {
                var t = this,
                  n = this._relatedWatched(e);
                this._ctx.measurer.requestMeasureTask(tn.Medium, function () {
                  for (var e = 0, r = n; e < r.length; e++) {
                    var i = r[e];
                    t.addEntry(i);
                  }
                });
              }),
              (t.prototype.watchedChildren = function (e) {
                return e.watchedChildren;
              }),
              (t.prototype._growWatchedIndex = function (e) {
                if (e && Un(e.node))
                  for (var t = e, n = e.parent; n; n = n.parent) {
                    if (
                      (this.watchedChildren(n) || (n.watchedChildren = {}),
                      this.watchedChildren(t))
                    )
                      for (var r in this.watchedChildren(t))
                        delete this.watchedChildren(n)[r];
                    if (
                      ((this.watchedChildren(n)[t.id] = t),
                      oe(this.watchedChildren(n), 2))
                    )
                      t = n;
                    else if (se(this.watchedChildren(n), 2)) break;
                  }
              }),
              (t.prototype._relatedWatched = function (e) {
                var t = [],
                  n = Hn(e);
                if (n)
                  for (var r = [n], i = 0; r.length && ++i < 1e3; ) {
                    var o = r.pop();
                    Un(o.node) && t.push(o.node),
                      this.watchedChildren(o) &&
                        re(this.watchedChildren(o), function (e) {
                          r.push(e);
                        });
                  }
                else {
                  for (var s = e; s && !Wn(s); ) s = s.parentNode;
                  s && Un(s) && t.push(s);
                }
                return t;
              }),
              (t.prototype._clearWatchedIndex = function (e) {
                if (se(this.watchedChildren(e), 0) || Un(e.node))
                  for (
                    var t =
                        (this.watchedChildren(e) &&
                          se(this.watchedChildren(e), 1)) ||
                        Un(e.node)
                          ? e.id
                          : (function (e) {
                              for (var t in e)
                                if (Object.prototype.hasOwnProperty.call(e, t))
                                  return t;
                            })(this.watchedChildren(e)),
                      n = t ? e.parent : null;
                    n && this.watchedChildren(n) && this.watchedChildren(n)[t];

                  ) {
                    if (
                      (delete this.watchedChildren(n)[t],
                      oe(this.watchedChildren(n), 1))
                    ) {
                      var r = n.id,
                        i = ie(this.watchedChildren(n));
                      for (
                        n = n.parent;
                        n &&
                        this.watchedChildren(n) &&
                        this.watchedChildren(n)[r];

                      )
                        delete this.watchedChildren(n)[r],
                          (this.watchedChildren(n)[i.id] = i),
                          (n = n.parent);
                      break;
                    }
                    n = n.parent;
                  }
              }),
              t
            );
          })(Ji),
          to = {
            attributeName: null,
            attributeNamespace: null,
            addedNodes: [],
            removedNodes: [],
            nextSibling: null,
            previousSibling: null,
            oldValue: null,
          };
        function no(e) {
          return (0, i.__assign)((0, i.__assign)((0, i.__assign)({}, to), e), {
            type: 'childList',
          });
        }
        function ro(e, t) {
          return 0 === t.length
            ? no({ target: e })
            : no({
                addedNodes: t,
                nextSibling: ae(t[t.length - 1]),
                previousSibling: ue(t[0]),
                target: e,
              });
        }
        function io(e) {
          var t = [];
          return (
            Ri(e, function (e) {
              t.push(e);
            }),
            ro(e, t)
          );
        }
        var oo = (function () {
          function e(e, t, n, r, i, o) {
            var s = this;
            void 0 === n && (n = function () {}),
              void 0 === r && (r = function () {}),
              void 0 === i && (i = function () {}),
              (this._watcher = t),
              (this._nodeVisitor = n),
              (this._beforeRemove = r),
              (this._attrsVisitor = i),
              (this._watchedElIntersectionObserver = o),
              (this._sentDomSnapshot = !1),
              (this._newShadowContainers = []),
              (this._toRefresh = []),
              (this._deferredNodes = []),
              (this._pendingDeferreds = []),
              (this._records = []),
              (this._setPropertyWasThrottled = !1),
              (this._wnd = e.window),
              (this._resizer = Ji.create(e)),
              (this._encoder = new Li(
                t,
                this._resizer,
                this._watchedElIntersectionObserver
              )),
              Pe(
                !this._watcher.onConsentChange,
                'This is the only consent change listener.'
              ),
              (this._watcher.onConsentChange = function () {
                return s.updateConsent();
              });
          }
          return (
            (e.prototype.hookMutations = function (e) {
              void 0 === e && (e = this._wnd.document),
                (this._root = e),
                (this._sentDomSnapshot = !1);
              var t = !0;
              if (gr)
                try {
                  this.setUpIEWorkarounds();
                } catch (e) {
                  t = !1;
                }
              t &&
                (this._observer = new MutationObserver(
                  this._addMutations.bind(this)
                ));
            }),
            (e.prototype._observerOff = function () {
              this._observer && this._observer.disconnect();
            }),
            (e.prototype._addMutations = function (e) {
              for (var t = 0, n = e; t < n.length; t++) {
                var r = n[t];
                this._records.push(r);
              }
            }),
            (e.prototype.resizer = function () {
              return this._resizer;
            }),
            (e.prototype.shutdown = function () {
              this._observer && this._observer.disconnect();
              var e = Hn(this._root);
              e && Vn(e),
                (this._records = []),
                gr && this.tearDownIEWorkarounds(),
                (this._watcher.onConsentChange = null),
                this._attachShadowHook &&
                  (this._attachShadowHook.disable(),
                  (this._attachShadowHook = null));
            }),
            (e.prototype.processMutations = function (e) {
              var t;
              if (!this._root) return [];
              var n = [];
              if (
                (this._maybeGetInitialSnapshot(e, n),
                this._setPropertyWasThrottled &&
                  (n.push({
                    Kind: Oe.FAIL_THROTTLED,
                    Args: [Ye.SetPropertyHooks],
                    When: e,
                  }),
                  (this._setPropertyWasThrottled = !1)),
                this._records.length > 0 || this._toRefresh.length > 0)
              ) {
                var r = {},
                  o = {};
                for (var s in (this._processRecords(e, n, o, r), o)) {
                  var a = s.split('\t');
                  n.push({
                    Kind: Oe.MUT_ATTR,
                    Args: [parseInt(a[0], 10), a[1], o[s]],
                    When: e,
                  });
                }
                for (var s in r)
                  n.push({
                    Kind: Oe.MUT_TEXT,
                    Args: [parseInt(s, 10), r[s]],
                    When: e,
                  });
              }
              var u = this._newShadowContainers;
              this._newShadowContainers = [];
              for (var c = 0; c < u.length; c++) {
                var h = u[c].shadowRoot;
                h &&
                  0 != Wn(u[c]) &&
                  0 == Wn(h) &&
                  (this._observe(h), this._genShadow(null, e, n, u[c], h));
              }
              if (
                (n.push.apply(n, this._resizer.collect(e)),
                (this._records = []),
                this._pendingDeferreds.length > 0 &&
                  (n.push({
                    Kind: Oe.DEFERRED_RESOLVED,
                    Args: (0, i.__spreadArray)([], this._pendingDeferreds),
                    When: e,
                  }),
                  (this._pendingDeferreds = [])),
                this._deferredNodes.length > 0)
              ) {
                for (var d = 0, l = this._deferredNodes; d < l.length; d++) {
                  var p = l[d];
                  this._pendingDeferreds.push(Wn(p)),
                    (null === (t = p.childNodes) || void 0 === t
                      ? void 0
                      : t.length) > 0 && this._records.push(io(p));
                }
                this._deferredNodes = [];
              }
              return n;
            }),
            (e.prototype.recordingIsDetached = function () {
              return !!this._root && this._root != this._wnd.document;
            }),
            (e.prototype._maybeGetInitialSnapshot = function (e, t) {
              if (!this._sentDomSnapshot && this._root) {
                window;
                var n = this._watcher.allWatchedElements(this._root);
                this._genInsert(n, e, t, null, this._root, null),
                  this._resizer.nodeChanged(this._root),
                  this._observer && this._observe(this._root),
                  (this._sentDomSnapshot = !0),
                  this._hookAttachShadow(),
                  window;
              }
            }),
            (e.prototype._hookAttachShadow = function () {
              var e = this;
              (this._attachShadowHook = ye(
                Element.prototype,
                'attachShadow',
                !0
              )),
                this._attachShadowHook &&
                  this._attachShadowHook.before(function (t) {
                    t.that.shadowRoot || e._newShadowContainers.push(t.that);
                  });
            }),
            (e.prototype._observe = function (e) {
              var t;
              try {
                null === (t = this._observer) ||
                  void 0 === t ||
                  t.observe(e, {
                    childList: !0,
                    attributes: !0,
                    characterData: !0,
                    subtree: !0,
                    attributeOldValue: !0,
                    characterDataOldValue: !0,
                  });
              } catch (e) {}
            }),
            (e.prototype._processRecords = function (e, t, n, r) {
              for (
                var i,
                  o,
                  s,
                  a,
                  u = this,
                  c = {},
                  h = {},
                  d = function (n) {
                    if (Hn(n)) {
                      u._genRemove(e, t, Hn(n));
                      var r = Hn(n.parentNode);
                      r && (h[r.id] = r.node);
                    }
                  },
                  l = 0;
                l < this._records.length;
                ++l
              )
                try {
                  var p = this._records[l];
                  if (
                    'childList' === p.type &&
                    1 ===
                      (null === (o = p.target) || void 0 === o
                        ? void 0
                        : o.nodeType) &&
                    'SLOT' === p.target.tagName
                  ) {
                    var f = so(p.target);
                    if (f) {
                      var _ = f[0],
                        v = f[1];
                      h[_] = v;
                    }
                  }
                  var g = Wn(p.target);
                  if (!g) continue;
                  switch (((c[g] = p.target), p.type)) {
                    case 'childList':
                      if (p.removedNodes.length > 0)
                        for (var y = 0; y < p.removedNodes.length; ++y)
                          (w = Hn(p.removedNodes[y])) &&
                            w.id &&
                            this._genRemove(e, t, w);
                      if (p.addedNodes.length > 0) {
                        h[g] = p.target;
                        var m =
                          !(null == (A = p.target) ? void 0 : A.shadowRoot) ||
                          ki(A.shadowRoot)
                            ? null
                            : Hn(A.shadowRoot);
                        m && (h[m.id] = m.node);
                      }
                      break;
                    case 'characterData':
                      Nn(p.target) ||
                        (p.oldValue != p.target.textContent &&
                          (r[g] = ni(p.target)));
                      break;
                    case 'attributes':
                      var S = Tn((P = p.target));
                      if (
                        'link' === S &&
                        'rel' === p.attributeName &&
                        ii.test(
                          null !== (s = p.oldValue) && void 0 !== s ? s : ''
                        )
                      ) {
                        d(P);
                        break;
                      }
                      var w,
                        E = Fn(P),
                        b = this._watcher.isWatched(P);
                      if (Gi(b) > Gi(E)) {
                        d(P);
                        break;
                      }
                      Wi.needsToObserve(E, b) &&
                        (this._resizer.observe(P),
                        (null == b ? void 0 : b.has(Cn.Watch)) &&
                          (null === (a = this._watchedElIntersectionObserver) ||
                            void 0 === a ||
                            a.observe(P)),
                        (w = Hn(P)) &&
                          (w.watchKind = Wi.combineKindsPreservePrivacy(E, b)));
                      var T =
                          (void 0 === (k = p.attributeNamespace) && (k = ''),
                          (null === k
                            ? ''
                            : {
                                'http://www.w3.org/1999/xlink': 'xlink:',
                                'http://www.w3.org/XML/1998/namespace': 'xml:',
                                'http://www.w3.org/2000/xmlns/': 'xmlns:',
                              }[k] || '') + (p.attributeName || '')),
                        C = ri(T);
                      if ('dialog' === S && 'open' === T) break;
                      if (P.hasAttribute(T)) {
                        var I = p.target.getAttribute(T);
                        p.oldValue != I &&
                          ((I = si(p.target, C, I || '', S)),
                          this._attrsVisitor(
                            S,
                            p.target,
                            (((i = {})[C] = I || ''), i)
                          ),
                          null !== I && (n[g + '\t' + C] = I));
                      } else n[g + '\t' + C] = null;
                  }
                } catch (e) {}
              for (var k, A, x = 0, R = this._toRefresh; x < R.length; x++) {
                var P = R[x];
                try {
                  d(P);
                } catch (e) {
                  Ae.sendToBugsnag(e, 'error');
                }
              }
              for (var O in ((this._toRefresh = []), h)) {
                var M = Hn((L = h[O]));
                M && M.id && this._diff(e, t, L, M);
              }
              for (var O in c) {
                var L = c[O];
                this._resizer.nodeChanged(L);
              }
            }),
            (e.prototype._checkForMissingInsertions = function (e) {
              return this._sentDomSnapshot && e && this._root
                ? (this._walkAddRecords(this._root), [])
                : [];
            }),
            (e.prototype._walkAddRecords = function (e) {
              var t = this;
              Wn(e) || null === e.parentNode
                ? Ri(e, function (e) {
                    t._walkAddRecords(e);
                  })
                : this._records.push(ro(e.parentNode, [e]));
            }),
            (e.prototype._diff = function (e, t, n, r) {
              var i = [],
                o = r.child;
              for (
                Ri(n, function (e) {
                  if (o)
                    for (var t = Hn(e); o; ) {
                      if (!Wn(e)) {
                        i.push({ insert: [n, e, o.node] });
                        break;
                      }
                      if (t && o.id == t.id) {
                        o = o.next;
                        break;
                      }
                      i.push({ remove: o }), (o = o.next);
                    }
                  else i.push({ insert: [n, e, null] });
                });
                o;
                o = o.next
              )
                i.push({ remove: o });
              for (var s = !1, a = 0; a < i.length; a++) {
                var u = i[a];
                u.insert
                  ? this._genInsert(
                      null,
                      e,
                      t,
                      u.insert[0],
                      u.insert[1],
                      u.insert[2]
                    )
                  : u.remove && ((s = !0), this._genRemove(e, t, u.remove));
              }
              Pe(
                !s,
                'All remove events should have been generated earlier, in MutationWatcher.processMutations'
              );
            }),
            (e.prototype._genShadow = function (e, t, n, r, i) {
              var o = Wn(r),
                s = _(),
                a = this._genDocStream(e, r, i, null),
                u = _() - s;
              a.length > 0 &&
                n.push(
                  { Kind: Oe.MUT_SHADOW, Args: [o, a], When: t },
                  {
                    Kind: Oe.TIMING,
                    Args: [
                      [De.Internal, Le.Serialization, Ne.NodeEncoding, t, u],
                    ],
                    When: t,
                  }
                );
            }),
            (e.prototype._genInsert = function (e, t, n, r, i, o) {
              var s = Wn(r) || -1,
                a = Wn(o) || -1,
                u = -1 === s && -1 === a,
                c = _();
              window;
              var h = this._genDocStream(e, r, i, o);
              window;
              var d = _() - c;
              h.length > 0 &&
                n.push(
                  { Kind: Oe.MUT_INSERT, Args: [s, a, h], When: t },
                  {
                    Kind: Oe.TIMING,
                    Args: [
                      [
                        De.Internal,
                        Le.Serialization,
                        u ? Ne.DomSnapshot : Ne.NodeEncoding,
                        t,
                        d,
                      ],
                    ],
                    When: t,
                  }
                );
            }),
            (e.prototype._genDocStream = function (e, t, n, r) {
              var i = this;
              if (t && Nn(t)) return [];
              for (
                var o = [],
                  s = this._encoder.tokenizeNode(
                    e,
                    t,
                    r,
                    n,
                    function (e) {
                      if (1 == e.nodeType) {
                        var t = e;
                        if (
                          (t.shadowRoot && i._observe(t.shadowRoot),
                          'SLOT' === e.nodeName)
                        ) {
                          var n = Hn(e);
                          (null == n ? void 0 : n.shadowRootType) === Ai &&
                            e.addEventListener(
                              'slotchange',
                              Ae.wrap(function (t) {
                                var n;
                                i._toRefresh.push(
                                  null !== (n = t.target) && void 0 !== n
                                    ? n
                                    : e
                                );
                              })
                            );
                        }
                      }
                      i._nodeVisitor(e, o);
                    },
                    this._attrsVisitor,
                    function (e, t) {
                      switch (t) {
                        case In.Immediate:
                          i.refreshElement(e);
                          break;
                        case In.Deferred:
                          i._deferredNodes.push(e);
                      }
                    }
                  ),
                  a = 0,
                  u = o;
                a < u.length;
                a++
              )
                (0, u[a])();
              return s;
            }),
            (e.prototype._genRemove = function (e, t, n) {
              var r = n.id;
              if ((this._beforeRemove(n), jn(n, this._resizer), t.length > 0)) {
                var i = t[t.length - 1];
                if (i.Kind == Oe.MUT_REMOVE) return void i.Args.push(r);
              }
              t.push({ Kind: Oe.MUT_REMOVE, Args: [r], When: e });
            }),
            (e.prototype.setUpIEWorkarounds = function () {
              var t = this;
              if (yr) {
                var n = Object.getOwnPropertyDescriptor(
                    Node.prototype,
                    'textContent'
                  ),
                  r = n && n.set;
                if (!n || !r)
                  throw new Error(
                    'Missing textContent setter -- not safe to record mutations.'
                  );
                Object.defineProperty(
                  Element.prototype,
                  'textContent',
                  (0, i.__assign)((0, i.__assign)({}, n), {
                    set: function (e) {
                      try {
                        for (var t = void 0; (t = this.firstChild); )
                          this.removeChild(t);
                        if (null === e || '' == e) return;
                        var n = (this.ownerDocument || document).createTextNode(
                          e
                        );
                        this.appendChild(n);
                      } catch (t) {
                        r && r.call(this, e);
                      }
                    },
                  })
                );
              }
              this._setPropertyThrottle = new er(
                e.ThrottleMax,
                e.ThrottleInterval,
                function () {
                  return new $n(function () {
                    (t._setPropertyWasThrottled = !0),
                      t.tearDownIEWorkarounds();
                  }).start();
                }
              );
              var o = this._setPropertyThrottle.guard(function (e) {
                var t = e.cssText;
                e.cssText = t;
              });
              this._setPropertyThrottle.open(),
                (this._setPropertyHook = ye(
                  CSSStyleDeclaration.prototype,
                  'setProperty'
                )),
                this._setPropertyHook &&
                  this._setPropertyHook.afterSync(function (e) {
                    o(e.that);
                  }),
                (this._removePropertyHook = ye(
                  CSSStyleDeclaration.prototype,
                  'removeProperty'
                )),
                this._removePropertyHook &&
                  this._removePropertyHook.afterSync(function (e) {
                    o(e.that);
                  });
            }),
            (e.prototype.tearDownIEWorkarounds = function () {
              this._setPropertyThrottle && this._setPropertyThrottle.close(),
                this._setPropertyHook && this._setPropertyHook.disable(),
                this._removePropertyHook && this._removePropertyHook.disable();
            }),
            (e.prototype.updateConsent = function () {
              var e = this;
              this._root &&
                Ri(this._root, function (t) {
                  return e.refreshElement(t);
                });
            }),
            (e.prototype.refreshElement = function (e) {
              Wn(e) && this._toRefresh.push(e);
            }),
            (e.ThrottleMax = 1024),
            (e.ThrottleInterval = 1e4),
            e
          );
        })();
        function so(e) {
          for (var t = new WeakMap(), n = e; n; n = n.parentNode) {
            if (t.has(n)) return null;
            if ((t.set(n, !0), 11 === n.nodeType)) break;
          }
          if (!n) return null;
          var r = Hn(n);
          return (null == r ? void 0 : r.shadowRootType) === Ai &&
            (null == r ? void 0 : r.parent)
            ? [r.parent.id, r.parent.node]
            : null;
        }
        var ao = 'navigation',
          uo = 'resource',
          co = 'paint',
          ho = 'measure',
          lo = 'mark',
          po = 'layout-shift',
          fo = 'first-input',
          _o = 'largest-contentful-paint',
          vo = 'longtask',
          go = (function () {
            function e(e, t, n, r) {
              var i = this;
              (this._ctx = e),
                (this._queue = t),
                (this._urlPrivacy = r),
                (this._recordResourceImgs = !1),
                (this._recordResourceTimings = !1),
                (this._perfSupported = !1),
                (this._timingSupported = !1),
                (this._getEntriesSupported = !1),
                (this._memorySupported = !1),
                (this._timeOriginSupported = !1),
                (this._maxPerfMarksPerPage =
                  ut.DefaultOrgSettings.MaxPerfMarksPerPage),
                (this._numOfPerfMarkEntries = 0),
                (this._layoutShiftSupported = !1),
                (this._firstInputSupported = !1),
                (this._largestContentfulPaintSupported = !1),
                (this._longTaskSupported = !1),
                (this._lastUsedJSHeapSize = 0),
                (this._gotLoad = !1),
                (this._observer = null),
                (this._observedBatches = []),
                (this._finalTask = new Jt(function (e) {
                  i._resolveFinalTask = function () {
                    e({
                      timeRemaining: function () {
                        return Number.POSITIVE_INFINITY;
                      },
                      didTimeout: !1,
                    }),
                      (i._resolveFinalTask = void 0);
                  };
                })),
                (this._isRunningIdleTaskLoop = !1);
              var o = window.performance;
              o &&
                ((this._perfSupported = !0),
                o.timing && (this._timingSupported = !0),
                o.memory && (this._memorySupported = !0),
                o.timeOrigin && (this._timeOriginSupported = !0),
                'function' == typeof o.getEntries &&
                  (this._getEntriesSupported = !0),
                (this._layoutShiftSupported = yo(window, po)),
                (this._firstInputSupported = yo(window, fo)),
                (this._largestContentfulPaintSupported = yo(window, _o)),
                (this._longTaskSupported = yo(window, vo)),
                (this._listeners = n.createChild()));
            }
            return (
              (e.prototype.start = function (e) {
                var t = this,
                  n = e.resourceUploader,
                  r = e.recTimings,
                  i = e.recImgs,
                  o = e.maxPerfMarksPerPage;
                (this._resourceUploader = n),
                  (this._recordResourceTimings = r),
                  (this._recordResourceImgs = i),
                  (this._maxPerfMarksPerPage =
                    o || ut.DefaultOrgSettings.MaxPerfMarksPerPage),
                  (this._numOfPerfMarkEntries = 0);
                var s = window.performance;
                s &&
                  (this._ctx.recording.inFrame ||
                    this._queue.enqueue({
                      Kind: Oe.REC_FEAT_SUPPORTED,
                      Args: [
                        Qe.Performance,
                        this._timingSupported,
                        Qe.PerformanceEntries,
                        this._getEntriesSupported,
                        Qe.PerformanceMemory,
                        this._memorySupported,
                        Qe.PerformanceObserver,
                        !!window.PerformanceObserver,
                        Qe.PerformanceTimeOrigin,
                        this._timeOriginSupported,
                        Qe.LayoutShift,
                        this._layoutShiftSupported,
                        Qe.FirstInput,
                        this._firstInputSupported,
                        Qe.LargestContentfulPaint,
                        this._largestContentfulPaintSupported,
                        Qe.LongTask,
                        this._longTaskSupported,
                      ],
                    }),
                  this._observe(),
                  !this._observer &&
                    s.addEventListener &&
                    s.removeEventListener &&
                    this._listeners &&
                    this._listeners.add(
                      s,
                      'resourcetimingbufferfull',
                      !0,
                      function () {
                        t._queue.enqueue({
                          Kind: Oe.RESOURCE_TIMING_BUFFER_FULL,
                          Args: [],
                        });
                      }
                    ),
                  this._checkMemory(),
                  this._recordTimeOrigin());
              }),
              (e.prototype._startIdleTaskLoop = function () {
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  return (0, i.__generator)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        if (
                          !this._perfSupported ||
                          !this._getEntriesSupported ||
                          0 == this._observedBatches.length
                        )
                          return [2];
                        if (this._isRunningIdleTaskLoop) return [2];
                        (this._isRunningIdleTaskLoop = !0), (e.label = 1);
                      case 1:
                        return (
                          e.trys.push([1, , 3, 4]),
                          [4, this._startIdleTaskLoopImpl()]
                        );
                      case 2:
                        return e.sent(), [3, 4];
                      case 3:
                        return (
                          (this._isRunningIdleTaskLoop = !1),
                          (this._observedBatches = []),
                          [7]
                        );
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (e.prototype._idleTask = function () {
                return this._resolveFinalTask
                  ? Jt.race([this._finalTask, on(250, 1e3)])
                  : this._finalTask;
              }),
              (e.prototype._startIdleTaskLoopImpl = function () {
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  var e, t, n, r, o, s, a, u;
                  return (0, i.__generator)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        (e = 0),
                          (t = 0),
                          (n = this._observedBatches),
                          (i.label = 1);
                      case 1:
                        if (!(t < n.length)) return [3, 7];
                        (r = n[t]), (o = 0), (s = r), (i.label = 2);
                      case 2:
                        return o < s.length
                          ? ((a = s[o]),
                            _() > e ? [4, this._idleTask()] : [3, 4])
                          : [3, 6];
                      case 3:
                        (u = i.sent()),
                          (e = _() + Math.max(u.timeRemaining(), 15)),
                          (i.label = 4);
                      case 4:
                        this._recordEntry(a), (i.label = 5);
                      case 5:
                        return o++, [3, 2];
                      case 6:
                        return t++, [3, 1];
                      case 7:
                        return [2];
                    }
                  });
                });
              }),
              (e.prototype.onLoad = function () {
                this._gotLoad ||
                  ((this._gotLoad = !0),
                  this._timingSupported &&
                    (this._recordTiming(performance.timing),
                    this._startIdleTaskLoop()));
              }),
              (e.prototype.tick = function () {
                this._checkMemory();
              }),
              (e.prototype.shutdown = function () {
                var e;
                this._listeners && this._listeners.clear(),
                  (this._resourceUploader = void 0);
                var t = [];
                this._observer
                  ? (this._observer.takeRecords &&
                      (t = this._observer.takeRecords()),
                    this._observer.disconnect())
                  : window.performance &&
                    window.performance.getEntries &&
                    (t = window.performance.getEntries()),
                  t.length > 300 &&
                    ((t = t.slice(0, 300)),
                    this._queue.enqueue({
                      Kind: Oe.RESOURCE_TIMING_BUFFER_FULL,
                      Args: [],
                    })),
                  this._checkMemory(),
                  null === (e = this._resolveFinalTask) ||
                    void 0 === e ||
                    e.call(this),
                  this._observedBatches.push(t),
                  this._startIdleTaskLoop();
              }),
              (e.prototype._observe = function () {
                var e = this;
                if (
                  !this._observer &&
                  this._getEntriesSupported &&
                  window.PerformanceObserver
                ) {
                  this._observedBatches.push(performance.getEntries()),
                    this._startIdleTaskLoop(),
                    (this._observer = new window.PerformanceObserver(function (
                      t
                    ) {
                      var n = t.getEntries();
                      e._observedBatches.push(n), e._startIdleTaskLoop();
                    }));
                  var t = [ao, uo, ho, lo];
                  window.PerformancePaintTiming && t.push(co),
                    this._layoutShiftSupported && t.push(po),
                    this._firstInputSupported && t.push(fo),
                    this._largestContentfulPaintSupported && t.push(_o),
                    this._longTaskSupported && t.push(vo),
                    this._observer.observe({ entryTypes: t });
                }
              }),
              (e.prototype._checkMemory = function () {
                if (this._memorySupported && !this._ctx.recording.inFrame) {
                  var e = performance.memory;
                  if (e) {
                    var t = e.usedJSHeapSize - this._lastUsedJSHeapSize;
                    (0 == this._lastUsedJSHeapSize ||
                      s.mathAbs(t / this._lastUsedJSHeapSize) > 0.2) &&
                      (this._addPerfEvent(Ke.Memory, e, ze.Memory),
                      (this._lastUsedJSHeapSize = e.usedJSHeapSize));
                  }
                }
              }),
              (e.prototype._recordTimeOrigin = function () {
                var e = { timeOrigin: f.timeOrigin };
                this._addPerfEvent(Ke.TimeOrigin, e, ze.TimeOrigin);
              }),
              (e.prototype._recordEntry = function (e) {
                switch (e.entryType) {
                  case ao:
                    this._recordNavigation(e);
                    break;
                  case uo:
                    this._recordResource(e);
                    break;
                  case co:
                    this._recordPaint(e);
                    break;
                  case ho:
                    this._recordMeasure(e);
                    break;
                  case lo:
                    this._recordMark(e);
                    break;
                  case po:
                    this._recordLayoutShift(e);
                    break;
                  case fo:
                    this._recordFirstInput(e);
                    break;
                  case _o:
                    this._recordLargestContentfulPaint(e);
                    break;
                  case vo:
                    this._recordLongTask(e);
                }
              }),
              (e.prototype._recordTiming = function (e) {
                this._addPerfEvent(Ke.Timing, e, ze.Timing);
              }),
              (e.prototype._recordNavigation = function (e) {
                this._addPerfEvent(Ke.Navigation, e, ze.Navigation, {
                  name: ao,
                });
              }),
              (e.prototype._recordResource = function (e) {
                if (this._recordResourceTimings) {
                  var t = e.initiatorType;
                  (this._recordResourceImgs ||
                    ('img' !== t && 'image' !== t)) &&
                    this._addPerfEvent(Ke.Resource, e, ze.Resource, {
                      name: t,
                    });
                }
              }),
              (e.prototype._recordPaint = function (e) {
                this._addPerfEvent(Ke.Paint, e, ze.Measure);
              }),
              (e.prototype._recordMark = function (e) {
                this._addPerfEvent(Ke.Mark, e, ze.Measure);
              }),
              (e.prototype._recordMeasure = function (e) {
                this._addPerfEvent(Ke.Measure, e, ze.Measure);
              }),
              (e.prototype._recordLayoutShift = function (e) {
                this._addPerfEvent(Ke.LayoutShift, e, ze.LayoutShift);
              }),
              (e.prototype._recordFirstInput = function (e) {
                this._addPerfEvent(Ke.FirstInput, e, ze.FirstInput);
              }),
              (e.prototype._recordLargestContentfulPaint = function (e) {
                this._addPerfEvent(
                  Ke.LargestContentfulPaint,
                  e,
                  ze.LargestContentfulPaint
                );
              }),
              (e.prototype._recordLongTask = function (e) {
                this._addPerfEvent(Ke.LongTask, e, ze.Measure);
              }),
              (e.prototype._addPerfEvent = function (e, t, n, r) {
                if ((void 0 === r && (r = {}), !this.atLimit(e))) {
                  for (var i = [e], o = 0, s = n; o < s.length; o++) {
                    var a = s[o],
                      u = t[a];
                    if ((void 0 === u && (u = -1), a in r)) {
                      var c = hi(u, { source: 'perfEntry', type: r[a] }),
                        h = u === c;
                      u = this._rewriteUrl(e, t, c, h);
                    }
                    i.push(u);
                  }
                  this._queue.enqueue({ Kind: Oe.PERF_ENTRY, Args: i });
                }
              }),
              (e.prototype._rewriteUrl = function (e, t, n, r) {
                if (e === Ke.Resource)
                  switch (t.initiatorType) {
                    case '':
                    case 'xmlhttprequest':
                    case 'fetch':
                    case 'script':
                    case 'beacon':
                      return n;
                    case 'css':
                      if (this._resourceUploader && !r) {
                        var i = Or('', n);
                        this._resourceUploader.uploadIfNeeded(
                          this._ctx.window,
                          i
                        );
                      }
                      return this._urlPrivacy.obfuscateUrl(n, 'css');
                    default:
                      return this._urlPrivacy.obfuscateUrl(n);
                  }
              }),
              (e.prototype.atLimit = function (e) {
                switch (e) {
                  case Ke.Mark:
                  case Ke.Measure:
                    if (this._numOfPerfMarkEntries >= this._maxPerfMarksPerPage)
                      return !0;
                    this._numOfPerfMarkEntries++;
                }
                return !1;
              }),
              e
            );
          })();
        function yo(e, t) {
          var n, r;
          return (
            (null !==
              (r =
                null === (n = e.PerformanceObserver) || void 0 === n
                  ? void 0
                  : n.supportedEntryTypes) && void 0 !== r
              ? r
              : []
            ).indexOf(t) > -1
          );
        }
        function mo(e) {
          var t = 0,
            n = { id: t++, edges: {} };
          return (
            e.split('\n').forEach(function (e) {
              var r = e.trim();
              if ('' != r) {
                if (0 == r.indexOf('/') || r.lastIndexOf('/') == r.length - 1)
                  throw new Error(
                    'Leading and trailing slashes are not supported'
                  );
                var i = n,
                  o = r.split('/');
                o.forEach(function (e, n) {
                  var r = e.trim();
                  if ('' === r)
                    throw new Error('Empty elements are not allowed');
                  if ('**' != r && '*' != r && -1 != r.indexOf('*'))
                    throw new Error('Embedded wildcards are not supported');
                  var s = null;
                  r in i.edges && (s = i.edges[r]),
                    s || ((s = { id: t++, edges: {} }), (i.edges[r] = s)),
                    n == o.length - 1 && (s.term = !0),
                    (i = s);
                });
              }
            }),
            n
          );
        }
        var So = mo('**');
        function wo(e, t, n) {
          if (!Oo(n)) {
            try {
              for (var r = [], i = 0, o = n; i < o.length; i++) {
                var a = o[i];
                if (!a) return;
                var u = new Eo(!0 === a ? So : a);
                r.push(u);
              }
              var c = (function (e, t) {
                  for (
                    var n = {},
                      r = function (t) {
                        n[t] = function () {
                          for (var n = [], r = 0; r < arguments.length; r++)
                            n[r] = arguments[r];
                          for (var i = 0, o = e; i < o.length; i++) {
                            var s = o[i];
                            s[t].apply(s, n);
                          }
                        };
                      },
                      i = 0,
                      o = ['push', 'pop'];
                    i < o.length;
                    i++
                  )
                    r(o[i]);
                  return n;
                })(r),
                h = 0,
                d = [1],
                l = !1;
              return s.jsonStringify(e, function (e, n) {
                var i = n,
                  o = i && 'object' == typeof i;
                if ('' == e && 1 == d.length)
                  return d[0]--, o && d.push(s.objectKeys(i).length), i;
                for (
                  c.push(e),
                    r.some(function (e) {
                      return e.isRedacted(!o);
                    }) && ((i = ut.BlockedFieldValue), (o = !1)),
                    h += e.length + 2,
                    (h += o ? 2 : null === i ? 4 : i.toString().length) >= t &&
                      (l
                        ? (i = void 0)
                        : ((i = '_fs_trimmed_values'), (l = !0))),
                    d[d.length - 1]--,
                    i && i !== ut.BlockedFieldValue && o
                      ? d.push(s.objectKeys(i).length)
                      : c.pop();
                  d[d.length - 1] <= 0;

                )
                  d.pop(), c.pop();
                for (var a = 0, u = r; a < u.length; a++) {
                  var p = u[a].depth();
                  if (void 0 !== p && d.length > 0 && p !== d.length - 1)
                    throw new Error('Property matcher depth out of sync');
                }
                return i;
              });
            } catch (e) {
              Ae.sendToBugsnag(e, 'error');
            }
            return '[error serializing ' + e.constructor.name + ']';
          }
        }
        var Eo = (function () {
          function e(e) {
            this._depth = 1;
            var t = [e];
            e.edges['**'] && t.push(e.edges['**']), (this._stateSets = [t]);
          }
          return (
            (e.prototype._currentStates = function () {
              if (this._stateSets.length <= 0) return [];
              var e = this._stateSets.length - 1,
                t = this._stateSets[e];
              return 'number' == typeof t ? this._stateSets[e - 1] : t;
            }),
            (e.prototype.depth = function () {
              return this._depth;
            }),
            (e.prototype.isRedacted = function (e) {
              var t = this._currentStates();
              return (
                0 === t.length ||
                (e &&
                  !t.some(function (e) {
                    return e.term;
                  }))
              );
            }),
            (e.prototype.push = function (e) {
              var t;
              this._depth++;
              var n = this._currentStates(),
                r = [];
              function i(t) {
                t.edges['**'] &&
                  (r.push(t.edges['**'], bo(t)), i(t.edges['**'])),
                  t.edges['*'] && r.push(t.edges['*']),
                  t.edges[e] && r.push(t.edges[e]);
              }
              for (var o = 0, s = n; o < s.length; o++) {
                var a = s[o];
                if (
                  null === (t = a.edges['**']) || void 0 === t ? void 0 : t.term
                ) {
                  r = [bo(a), a.edges['**']];
                  break;
                }
                i(a);
              }
              var u = !1;
              if (r.length !== n.length) u = !0;
              else
                for (var c = 0; c < r.length; c++)
                  if (r[c].id !== n[c].id) {
                    u = !0;
                    break;
                  }
              u
                ? this._stateSets.push(r)
                : ('number' !=
                    typeof this._stateSets[this._stateSets.length - 1] &&
                    this._stateSets.push(0),
                  this._stateSets[this._stateSets.length - 1]++);
            }),
            (e.prototype.pop = function () {
              this._depth > 0 && this._depth--;
              var e = this._stateSets[this._stateSets.length - 1];
              'number' == typeof e && e > 1
                ? this._stateSets[this._stateSets.length - 1]--
                : this._stateSets.pop();
            }),
            e
          );
        })();
        function bo(e) {
          var t = e.edges['**'];
          if (!t) throw new Error('Node must have double-wildcard edge.');
          return se(e.edges, 1) ? { id: -t.id, edges: { '**': t } } : e;
        }
        var To,
          Co,
          Io,
          ko = (function () {
            function e(e) {
              (this._requestTracker = e), (this._hook = null);
            }
            return (
              (e.prototype.disable = function () {
                this._hook && (this._hook.disable(), (this._hook = null));
              }),
              (e.prototype.enable = function (e) {
                var t,
                  n = this,
                  r = A(e),
                  o =
                    null === (t = null == r ? void 0 : r._w) || void 0 === t
                      ? void 0
                      : t.fetch;
                (o || e.fetch) &&
                  ((this._hook = ye(o ? r._w : e, 'fetch')),
                  this._hook &&
                    this._hook.afterSync(function (e) {
                      var t = e.result;
                      e.result = (0, i.__awaiter)(
                        n,
                        void 0,
                        void 0,
                        function () {
                          return (0, i.__generator)(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return (
                                  n.trys.push([0, 2, , 3]),
                                  [
                                    4,
                                    this._recordFetch(t, e.args[0], e.args[1]),
                                  ]
                                );
                              case 1:
                              case 2:
                                return n.sent(), [3, 3];
                              case 3:
                                return [2, t];
                            }
                          });
                        }
                      );
                    }));
              }),
              (e.prototype._recordFetch = function (e, t, n) {
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  var r, o, s, a, u, c;
                  return (0, i.__generator)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          (r = 'GET'),
                          (o = ''),
                          (u = !1),
                          'string' == typeof t
                            ? (o = t)
                            : 'url' in t
                            ? ((o = t.url),
                              (r = t.method),
                              (s = t.body),
                              (a = t.headers),
                              (u = !!t.signal))
                            : (o = '' + t),
                          o
                            ? (n &&
                                ((r = n.method || r),
                                (a = Bo(n.headers)),
                                (s = n.body || s),
                                (u = !!n.signal || u)),
                              (c = this._getResponse(e)),
                              u && o.search(/\/(graphql|gql)/i) > -1
                                ? [4, Jt.race([c, en(5e3)])]
                                : [3, 2])
                            : [2]
                        );
                      case 1:
                        i.sent(), (i.label = 2);
                      case 2:
                        return (
                          this._requestTracker.startRequest(
                            r,
                            o,
                            {
                              body: function () {
                                return s;
                              },
                              headers: a,
                            },
                            c
                          ),
                          [2]
                        );
                    }
                  });
                });
              }),
              (e.prototype._getResponse = function (e) {
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  var t, n, r, o;
                  return (0, i.__generator)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return [4, e];
                      case 1:
                        if (
                          ((t = i.sent()),
                          (n = t.headers),
                          (r = (n.get('content-type') || 'default').split(
                            ';'
                          )[0]),
                          !(
                            [
                              'default',
                              'text/plain',
                              'text/json',
                              'application/json',
                            ].indexOf(r) > -1
                          ))
                        )
                          return [
                            2,
                            {
                              status: t.status,
                              data: { headers: n, body: null },
                            },
                          ];
                        (o = null), (i.label = 2);
                      case 2:
                        return i.trys.push([2, 4, , 5]), [4, t.clone().text()];
                      case 3:
                        return (o = i.sent()), [3, 5];
                      case 4:
                        return i.sent(), [3, 5];
                      case 5:
                        return [
                          2,
                          { status: t.status, data: { headers: n, body: o } },
                        ];
                    }
                  });
                });
              }),
              e
            );
          })(),
          Ao = (function () {
            function e(e) {
              (this._requestTracker = e), (this._requestData = new WeakMap());
            }
            return (
              (e.prototype.disable = function () {
                this._xhrOpenHook &&
                  (this._xhrOpenHook.disable(), (this._xhrOpenHook = null)),
                  this._xhrSendHook &&
                    (this._xhrSendHook.disable(), (this._xhrSendHook = null)),
                  this._xhrSetHeaderHook &&
                    (this._xhrSetHeaderHook.disable(),
                    (this._xhrSetHeaderHook = null));
              }),
              (e.prototype._getRequestData = function (e) {
                var t = this._requestData.get(e);
                if (t) return t;
                var n = {};
                return this._requestData.set(e, n), n;
              }),
              (e.prototype.enable = function (e) {
                var t,
                  n,
                  r,
                  o,
                  s = this,
                  a = A(e),
                  u =
                    (null === (t = null == a ? void 0 : a._w) || void 0 === t
                      ? void 0
                      : t.XMLHttpRequest) || e.XMLHttpRequest;
                if (u) {
                  var c = u.prototype;
                  (this._xhrOpenHook =
                    null === (n = ye(c, 'open')) || void 0 === n
                      ? void 0
                      : n.before(function (e) {
                          var t = s._getRequestData(e.that);
                          (t.method = e.args[0]), (t.url = e.args[1]);
                        })),
                    (this._xhrSetHeaderHook =
                      null === (r = ye(c, 'setRequestHeader')) || void 0 === r
                        ? void 0
                        : r.before(function (e) {
                            var t = e.that,
                              n = e.args[0],
                              r = e.args[1],
                              i = s._getRequestData(t);
                            i.headers || (i.headers = []),
                              i.headers.push([n, r]);
                          })),
                    (this._xhrSendHook =
                      null === (o = ye(c, 'send')) || void 0 === o
                        ? void 0
                        : o.before(function (e) {
                            var t = e.that,
                              n = e.args[0],
                              r = s._getRequestData(t),
                              o = r.url,
                              a = r.method,
                              u = r.headers;
                            void 0 !== o &&
                              void 0 !== a &&
                              (s._requestData['delete'](t),
                              s._requestTracker.startRequest(
                                a,
                                o,
                                { headers: Bo(u), body: n },
                                (function (e) {
                                  return (0, i.__awaiter)(
                                    this,
                                    void 0,
                                    Jt,
                                    function () {
                                      var t;
                                      return (0, i.__generator)(
                                        this,
                                        function (n) {
                                          switch (n.label) {
                                            case 0:
                                              return [
                                                4,
                                                new Jt(function (t) {
                                                  e.addEventListener(
                                                    'readystatechange',
                                                    function () {
                                                      e.readyState ===
                                                        XMLHttpRequest.DONE &&
                                                        t();
                                                    }
                                                  ),
                                                    e.addEventListener(
                                                      'load',
                                                      t
                                                    ),
                                                    e.addEventListener(
                                                      'error',
                                                      t
                                                    );
                                                }),
                                              ];
                                            case 1:
                                              return (
                                                n.sent(),
                                                (t = (function (e) {
                                                  if (e)
                                                    return {
                                                      forEach: function (t) {
                                                        for (
                                                          var n,
                                                            r =
                                                              /([^:]*):\s+(.*)(?:\r\n|$)/g;
                                                          (n = r.exec(e));

                                                        )
                                                          t(n[2], n[1]);
                                                      },
                                                    };
                                                })(e.getAllResponseHeaders())),
                                                [
                                                  2,
                                                  {
                                                    status: e.status,
                                                    data: {
                                                      headers: t,
                                                      body: function () {
                                                        return 'text' ===
                                                          e.responseType
                                                          ? e.responseText
                                                          : e.response;
                                                      },
                                                    },
                                                  },
                                                ]
                                              );
                                          }
                                        }
                                      );
                                    }
                                  );
                                })(t)
                              ));
                          }));
                }
              }),
              e
            );
          })(),
          xo = /^data:/i,
          Ro = (function () {
            function e(e, t) {
              (this._ctx = e),
                (this._queue = t),
                (this._enabled = !1),
                (this._tracker = new Po(e, t)),
                (this._xhr = new Ao(this._tracker)),
                (this._fetch = new ko(this._tracker));
            }
            return (
              (e.prototype.isEnabled = function () {
                return this._enabled;
              }),
              (e.prototype.enable = function (e) {
                this._enabled ||
                  ((this._enabled = !0),
                  this._queue.enqueue({
                    Kind: Oe.REC_FEAT_SUPPORTED,
                    Args: [Qe.Ajax, !0, Qe.AjaxFetch, !!e],
                  }),
                  this._xhr.enable(this._ctx.window),
                  e && this._fetch.enable(this._ctx.window));
              }),
              (e.prototype.disable = function () {
                this._enabled &&
                  ((this._enabled = !1),
                  this._xhr.disable(),
                  this._fetch.disable());
              }),
              (e.prototype.tick = function () {
                this._tracker.tick();
              }),
              (e.prototype.setWatches = function (e) {
                this._tracker.setWatches(e);
              }),
              (e.prototype.initialize = function (e) {
                this._tracker.initialize(e);
              }),
              e
            );
          })(),
          Po = (function () {
            function e(e, t) {
              (this._ctx = e),
                (this._queue = t),
                (this._urlConfigs = []),
                (this._reqHeaderAllowlist = {}),
                (this._rspHeaderAllowlist = {}),
                (this._events = []),
                (this._maxAjaxPayloadLength = 0);
              var n = ut.DefaultOrgSettings;
              this.initialize({
                requests: n.HttpRequestHeadersAllowlist,
                responses: n.HttpResponseHeadersAllowlist,
                maxAjaxPayloadLength: n.MaxAjaxPayloadLength,
              });
            }
            return (
              (e.prototype._getAllowlists = function (e) {
                for (
                  var t = !1,
                    n = !1,
                    r = [],
                    i = [],
                    o = 0,
                    s = this._urlConfigs;
                  o < s.length;
                  o++
                ) {
                  var a = s[o],
                    u = a.urlPattern,
                    c = a.reqFields,
                    h = a.rspFields;
                  if (t && n) break;
                  u.test(e) &&
                    (!1 === c && ((r = [!1]), (t = !0)),
                    t || r.push(c),
                    !1 === h && ((i = [!1]), (n = !0)),
                    n || i.push(h));
                }
                return [r, i];
              }),
              (e.prototype._pushEvent = function (e) {
                this._events.push(e);
              }),
              (e.prototype.setWatches = function (e) {
                this._urlConfigs = e.map(function (e) {
                  return {
                    urlPattern: new RegExp(e.URLRegex),
                    reqFields: Ho(e.RecordReq, e.ReqAllowlist),
                    rspFields: Ho(e.RecordRsp, e.RspAllowlist),
                  };
                });
              }),
              (e.prototype.initialize = function (e) {
                var t = this,
                  n = e.requests,
                  r = e.responses,
                  i = e.maxAjaxPayloadLength;
                (this._reqHeaderAllowlist = {}),
                  (this._rspHeaderAllowlist = {}),
                  null == n ||
                    n.forEach(function (e) {
                      return (t._reqHeaderAllowlist[e] = !0);
                    }),
                  null == r ||
                    r.forEach(function (e) {
                      return (t._rspHeaderAllowlist[e] = !0);
                    }),
                  (this._maxAjaxPayloadLength =
                    i || ut.DefaultOrgSettings.MaxAjaxPayloadLength);
              }),
              (e.prototype.addHeaderAllowlist = function (e, t) {
                var n = this;
                null == e ||
                  e.forEach(function (e) {
                    return (n._reqHeaderAllowlist[e] = !0);
                  }),
                  null == t ||
                    t.forEach(function (e) {
                      return (n._rspHeaderAllowlist[e] = !0);
                    });
              }),
              (e.prototype.tick = function () {
                for (var e = 0; e < this._events.length; e++)
                  this._queue.enqueue({
                    Kind: Oe.AJAX_REQUEST,
                    Args: this._events[e],
                  });
                this._events = [];
              }),
              (e.prototype.startRequest = function (e, t, n, r) {
                var o, s;
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  var a, u, c, h, d, l, p, f, v, g, y, m;
                  return (0, i.__generator)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return xo.test(t)
                          ? [2]
                          : ((a = _()),
                            (u = (function (e, t) {
                              return Pr.resolveToDocument(e, t);
                            })(this._ctx.window, t)),
                            (c = this._getAllowlists(u)),
                            (h = c[0]),
                            (d = c[1]),
                            [4, this._processRequest(h, n)]);
                      case 1:
                        return (
                          (l = i.sent()),
                          [
                            4,
                            r['catch'](function () {
                              return {
                                status: 0,
                                data: {
                                  headers: { forEach: function () {} },
                                  body: void 0,
                                },
                              };
                            }),
                          ]
                        );
                      case 2:
                        return (
                          (p = i.sent()),
                          (f = p.status),
                          (v = p.data),
                          (g = _() - a),
                          [4, this._processResponse(d, v)]
                        );
                      case 3:
                        return (
                          (y = i.sent()),
                          (m = [
                            e,
                            hi(u, { source: 'event', type: Oe.AJAX_REQUEST }),
                            g,
                            f,
                            l.headers,
                            y.headers,
                            a,
                            l.size,
                            y.size,
                            null !== (o = l.text) && void 0 !== o ? o : null,
                            null !== (s = y.text) && void 0 !== s ? s : null,
                            l.legibility,
                            y.legibility,
                          ]),
                          this._pushEvent(m),
                          [2]
                        );
                    }
                  });
                });
              }),
              (e.prototype._processRequest = function (e, t) {
                return qo(
                  this._reqHeaderAllowlist,
                  e,
                  this._maxAjaxPayloadLength,
                  t
                );
              }),
              (e.prototype._processResponse = function (e, t) {
                return qo(
                  this._rspHeaderAllowlist,
                  e,
                  this._maxAjaxPayloadLength,
                  t
                );
              }),
              e
            );
          })();
        function Oo(e) {
          return 0 === e.length || e.indexOf(!1) > -1;
        }
        function Mo(e, t, n) {
          return [e.length, Fo(e, t, n)];
        }
        function Lo(e, t, n) {
          var r = void 0;
          return Oo(t) || (r = wo(e, n, t)), [Do(e), r];
        }
        function Uo(e, t) {
          var n = e.byteLength,
            r = void 0;
          return Oo(t) || (r = '[ArrayBuffer]'), [n, r];
        }
        function No(e, t, n) {
          return (0, i.__awaiter)(this, void 0, Jt, function () {
            var r, o, s, a, u;
            return (0, i.__generator)(this, function (i) {
              switch (i.label) {
                case 0:
                  if (((o = (r = e).size), Oo(t))) return [2, [o, void 0]];
                  switch (r.type) {
                    case 'application/json':
                    case 'application/vnd.api+json':
                    case 'text/plain':
                      return [3, 1];
                  }
                  return [3, 4];
                case 1:
                  return (
                    i.trys.push([1, 3, , 4]),
                    [
                      4,
                      r.text()['catch'](function (e) {
                        Ae.sendToBugsnag(e, 'warning');
                      }),
                    ]
                  );
                case 2:
                  return (s = i.sent()) && (a = Fo(s, t, n))
                    ? [2, [o, a]]
                    : [3, 4];
                case 3:
                  return (u = i.sent()), Ae.sendToBugsnag(u, 'warning'), [3, 4];
                case 4:
                  return [2, [o, '[Blob]']];
              }
            });
          });
        }
        function Do(e) {
          try {
            return s.jsonStringify(e).length;
          } catch (e) {}
          return 0;
        }
        function Fo(e, t, n) {
          if (!Oo(t))
            try {
              return wo(s.jsonParse(e), n, t);
            } catch (r) {
              return t.length > 0 &&
                t.every(function (e) {
                  return !0 === e;
                })
                ? e.slice(0, n)
                : void 0;
            }
        }
        function Ho(e, t) {
          switch (e) {
            default:
            case Je.Elide:
              return !1;
            case Je.Record:
              return !0;
            case Je.Allowlist:
              try {
                return mo(t);
              } catch (e) {
                return !1;
              }
          }
        }
        function qo(e, t, n, r) {
          var o;
          return (0, i.__awaiter)(this, void 0, Jt, function () {
            var s, a, u, c, h, d, l;
            return (0, i.__generator)(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (s = ''),
                    null === (o = r.headers) ||
                      void 0 === o ||
                      o.forEach(function (t, n) {
                        var r = n.toLowerCase(),
                          i = e[r];
                        s += r + (i ? ': ' + t : '') + '\r\n';
                      }),
                    'function' != typeof (a = null == r ? void 0 : r.body)
                      ? [3, 2]
                      : [4, a()]
                  );
                case 1:
                  return (u = i.sent()), [3, 3];
                case 2:
                  (u = a), (i.label = 3);
                case 3:
                  return [4, Wo(t, u, n)];
                case 4:
                  return (
                    (c = i.sent()),
                    (h = c[0]),
                    (d = c[1]),
                    (l = 0 !== h || d ? Ve.NotEmpty : Ve.Unknown),
                    [2, { headers: s, text: d, size: h, legibility: l }]
                  );
              }
            });
          });
        }
        function Wo(e, t, n) {
          return (
            void 0 === n && (n = ut.DefaultOrgSettings.MaxAjaxPayloadLength),
            (0, i.__awaiter)(this, void 0, Jt, function () {
              var r;
              return (0, i.__generator)(this, function (i) {
                if (null == t) return [2, [0, void 0]];
                switch (typeof t) {
                  default:
                    return [2, [-1, Oo(e) ? void 0 : '[unknown]']];
                  case 'string':
                    return [2, Mo(t, e, n)];
                  case 'object':
                    switch ((r = t.constructor)) {
                      case Object:
                      default:
                        return [2, Lo(t, e, n)];
                      case Blob:
                        return [2, No(t, e, n)];
                      case ArrayBuffer:
                        return [2, Uo(t, e)];
                      case Document:
                      case FormData:
                      case URLSearchParams:
                      case ReadableStream:
                        return [2, [-1, Oo(e) ? void 0 : '' + r.name]];
                    }
                }
                return [2];
              });
            })
          );
        }
        function Bo(e) {
          return e
            ? ee(e)
              ? {
                  forEach: function (t) {
                    for (var n = 0, r = e; n < r.length; n++) {
                      var i = r[n],
                        o = i[0];
                      t(i[1], o);
                    }
                  },
                }
              : 'function' == typeof e.forEach
              ? e
              : {
                  forEach: function (t) {
                    for (var n in e)
                      Object.prototype.hasOwnProperty.call(e, n) && t(e[n], n);
                  },
                }
            : e;
        }
        function jo(e) {
          return e ? e.sheet : void 0;
        }
        function Vo(e) {
          try {
            return e ? e.cssRules || e.rules : void 0;
          } catch (e) {
            return;
          }
        }
        !(function (e) {
          (e[(e.CSS_INHERIT = 0)] = 'CSS_INHERIT'),
            (e[(e.CSS_PRIMITIVE_VALUE = 1)] = 'CSS_PRIMITIVE_VALUE'),
            (e[(e.CSS_VALUE_LIST = 2)] = 'CSS_VALUE_LIST'),
            (e[(e.CSS_CUSTOM = 3)] = 'CSS_CUSTOM');
        })(To || (To = {})),
          (function (e) {
            (e[(e.CSS_UNKNOWN = 0)] = 'CSS_UNKNOWN'),
              (e[(e.CSS_NUMBER = 1)] = 'CSS_NUMBER'),
              (e[(e.CSS_PERCENTAGE = 2)] = 'CSS_PERCENTAGE'),
              (e[(e.CSS_EMS = 3)] = 'CSS_EMS'),
              (e[(e.CSS_EXS = 4)] = 'CSS_EXS'),
              (e[(e.CSS_PX = 5)] = 'CSS_PX'),
              (e[(e.CSS_CM = 6)] = 'CSS_CM'),
              (e[(e.CSS_MM = 7)] = 'CSS_MM'),
              (e[(e.CSS_IN = 8)] = 'CSS_IN'),
              (e[(e.CSS_PT = 9)] = 'CSS_PT'),
              (e[(e.CSS_PC = 10)] = 'CSS_PC'),
              (e[(e.CSS_DEG = 11)] = 'CSS_DEG'),
              (e[(e.CSS_RAD = 12)] = 'CSS_RAD'),
              (e[(e.CSS_GRAD = 13)] = 'CSS_GRAD'),
              (e[(e.CSS_MS = 14)] = 'CSS_MS'),
              (e[(e.CSS_S = 15)] = 'CSS_S'),
              (e[(e.CSS_HZ = 16)] = 'CSS_HZ'),
              (e[(e.CSS_KHZ = 17)] = 'CSS_KHZ'),
              (e[(e.CSS_DIMENSION = 18)] = 'CSS_DIMENSION'),
              (e[(e.CSS_STRING = 19)] = 'CSS_STRING'),
              (e[(e.CSS_URI = 20)] = 'CSS_URI'),
              (e[(e.CSS_IDENT = 21)] = 'CSS_IDENT'),
              (e[(e.CSS_ATTR = 22)] = 'CSS_ATTR'),
              (e[(e.CSS_COUNTER = 23)] = 'CSS_COUNTER'),
              (e[(e.CSS_RECT = 24)] = 'CSS_RECT'),
              (e[(e.CSS_RGBCOLOR = 25)] = 'CSS_RGBCOLOR'),
              (e[(e.CSS_VW = 26)] = 'CSS_VW'),
              (e[(e.CSS_VH = 27)] = 'CSS_VH'),
              (e[(e.CSS_VMIN = 28)] = 'CSS_VMIN'),
              (e[(e.CSS_VMAX = 29)] = 'CSS_VMAX');
          })(Co || (Co = {}));
        var Ko =
            "EventQueue not defined for 'withEventQueueFor', likely caused by holding ref to callback",
          zo = '_fs_stylesheet_hooked',
          Qo = ['CSSMediaRule', 'CSSSupportsRule'],
          Go = (function () {
            function e(t, n, r) {
              var i = this;
              void 0 === r && (r = $n),
                (this._ctx = t),
                (this._queue = n),
                (this._hooks = []),
                (this._removeShims = []),
                (this._nextSheetId = 1),
                (this._isStarted = !1),
                (this._dirtyRules = new Map()),
                (this._styleProxies = new $()),
                (this._ruleIdCache = new $()),
                (this._nextRuleId = 0),
                (this._adoptedStylesheets = new $());
              var o = e;
              (this._throttle = new er(
                o.ThrottleMax,
                o.ThrottleInterval,
                function () {
                  return setTimeout(function () {
                    i._queue.enqueue({
                      Kind: Oe.FAIL_THROTTLED,
                      Args: [Ye.StyleSheetHooks],
                    }),
                      i.stop();
                  });
                }
              )),
                (this.addInsert = this._throttle.guard(this.addInsert)),
                (this.addDelete = this._throttle.guard(this.addDelete)),
                (this._flushDirtyCssTimeout = new r(function () {
                  i._flushRuleUpdates();
                }, e.FlushCSSInterval)),
                (this._onSetProperty = de(function (e, t) {
                  var n, r;
                  if (
                    !(null === (n = e.parentRule) || void 0 === n
                      ? void 0
                      : n.parentStyleSheet) ||
                    !i._isStarted
                  )
                    return !0;
                  var o = e.parentRule;
                  return (
                    i._dirtyRules.has(o) || i._dirtyRules.set(o, new Set()),
                    null === (r = i._dirtyRules.get(o)) ||
                      void 0 === r ||
                      r.add(t),
                    i._flushDirtyCssTimeout.isRunning() ||
                      i._flushDirtyCssTimeout.start(),
                    !0
                  );
                }));
            }
            return (
              (e.prototype.start = function () {
                var e = this;
                this._throttle.open();
                var t = this._ctx.window;
                if (t.CSSStyleSheet && t.StyleSheet) {
                  var n = t.CSSStyleSheet.prototype;
                  this._hook(n),
                    this._hookGroupingRule(t),
                    this._hookStyleDeclarations(t),
                    this._removeShims.push(
                      me(t.StyleSheet, 'disabled', function (t, n) {
                        return e.onDisableSheet(t, n);
                      }),
                      me(t.Document, 'adoptedStyleSheets', function (t, n) {
                        return e.onSetAdoptedStyleSheets(t);
                      }),
                      me(t.ShadowRoot, 'adoptedStyleSheets', function (t, n) {
                        return e.onSetAdoptedStyleSheets(t);
                      })
                    ),
                    (this._isStarted = !0);
                }
              }),
              (e.prototype._hookGroupingRule = function (e) {
                var t,
                  n,
                  r = this,
                  i = function (e) {
                    var t = ye(e, 'insertRule');
                    t &&
                      (t.afterSync(function (e) {
                        r._groupingRuleInsert(e.that, e.args[0], e.args[1]);
                      }),
                      r._hooks.push(t)),
                      (t = ye(e, 'deleteRule')) &&
                        (t.afterSync(function (e) {
                          r._groupingRuleDelete(e.that, e.args[0]);
                        }),
                        r._hooks.push(t));
                  };
                if (
                  'function' ==
                  typeof (null === (t = e.CSSGroupingRule) || void 0 === t
                    ? void 0
                    : t.prototype.insertRule)
                )
                  i(e.CSSGroupingRule.prototype);
                else
                  for (var o = 0, s = Qo; o < s.length; o++) {
                    var a =
                      null === (n = e[s[o]]) || void 0 === n
                        ? void 0
                        : n.prototype;
                    a && i(a);
                  }
              }),
              (e.prototype._hookStyleDeclarations = function (e) {
                var t = this;
                if (!this._isStarted) {
                  var n = ye(CSSStyleDeclaration.prototype, 'setProperty');
                  n &&
                    (n.afterSync(function (e) {
                      t._onSetProperty(e.that, e.args[0]);
                    }),
                    this._hooks.push(n));
                  var r = CSSStyleRule.prototype,
                    o = Object.getOwnPropertyDescriptor(r, 'style');
                  this._previousRuleStyleGetter ||
                    (this._previousRuleStyleGetter =
                      null == o ? void 0 : o.get);
                  var s = this;
                  this._styleGetter = function () {
                    var e,
                      t =
                        null === (e = null == o ? void 0 : o.get) ||
                        void 0 === e
                          ? void 0
                          : e.apply(this);
                    return (
                      de(function () {
                        t = s._getStyleProxy(t);
                      })(),
                      t
                    );
                  };
                  try {
                    Object.defineProperty(
                      r,
                      'style',
                      (0, i.__assign)((0, i.__assign)({}, o), {
                        get: s._styleGetter,
                      })
                    );
                  } catch (e) {}
                }
              }),
              (e.prototype._getStyleProxy = function (e) {
                var t = this._styleProxies.get(e);
                if (t) return t;
                var n = (function (e, t, n) {
                  if ('function' != typeof e.Proxy) return t;
                  var r = new e.Proxy(t, {
                    get: function (e, t) {
                      var n = e[t];
                      return 'function' != typeof n
                        ? n
                        : function () {
                            for (var t = [], i = 0; i < arguments.length; i++)
                              t[i] = arguments[i];
                            var o = this;
                            return o === r && (o = e), n.apply(o, t);
                          };
                    },
                    set: function (e, t, r) {
                      var i = e[t];
                      return (
                        (e[t] = r),
                        'function' == typeof i ||
                          'symbol' == typeof t ||
                          n(e, t),
                        !0
                      );
                    },
                  });
                  return r;
                })(this._ctx.window, e, X(this._onSetProperty));
                return this._styleProxies.set(e, n), n;
              }),
              (e.prototype._flushRuleUpdates = function () {
                var e = this,
                  t = this._dirtyRules;
                (this._dirtyRules = new Map()),
                  t.forEach(function (t, n) {
                    var r = n.parentStyleSheet;
                    if (r) {
                      var i = e._getRuleId(r, n);
                      if (void 0 !== i) {
                        var o = {};
                        t.forEach(function (e) {
                          o[e] = n.style[e];
                        }),
                          e._withEventQueueForSheet(r, function (e) {
                            e.enqueue({
                              Kind: Oe.CSSRULE_UPDATE,
                              Args: [i, o],
                            });
                          });
                      }
                    }
                  });
              }),
              (e.prototype._groupingRuleInsert = function (e, t, n) {
                var r = this._getPath(e);
                this.addInsert(e.parentStyleSheet, t, n, r);
              }),
              (e.prototype._groupingRuleDelete = function (e, t) {
                var n = this._getPath(e);
                this.addDelete(e.parentStyleSheet, t, n);
              }),
              (e.prototype._getPath = function (e) {
                for (var t = [], n = e; n.parentRule || n.parentStyleSheet; ) {
                  var r;
                  if (
                    !(null ==
                    (r = n.parentRule ? n.parentRule : n.parentStyleSheet)
                      ? void 0
                      : r.cssRules)
                  )
                    return (
                      Ae.sendToBugsnag(
                        'Could not find a path to target rule',
                        'warning'
                      ),
                      t
                    );
                  var i = this._indexOf(r.cssRules, n);
                  if (i > -1) {
                    if ((t.unshift(i), r instanceof CSSStyleSheet)) break;
                    n = r;
                  } else
                    Ae.sendToBugsnag(
                      'Could not find intermediate rule in parent',
                      'warning'
                    );
                }
                return t;
              }),
              (e.prototype._indexOf = function (e, t) {
                for (var n = 0; n < e.length; n++) if (e[n] === t) return n;
                return -1;
              }),
              (e.prototype._hook = function (e) {
                var t,
                  n = this;
                (t = ye(e, 'insertRule')) &&
                  (t.afterSync(function (e) {
                    n.addInsert(e.that, e.args[0], e.args[1]);
                  }),
                  this._hooks.push(t)),
                  (t = ye(e, 'deleteRule')) &&
                    (t.afterSync(function (e) {
                      n.addDelete(e.that, e.args[0]);
                    }),
                    this._hooks.push(t)),
                  (t = ye(e, 'replaceSync')) &&
                    (t.afterSync(function (e) {
                      n.snapshotConstructedStylesheet(e.that, !0);
                    }),
                    this._hooks.push(t)),
                  (t = ye(e, 'replace')) &&
                    (t.afterSync(function (e) {
                      return (0, i.__awaiter)(n, void 0, Jt, function () {
                        return (0, i.__generator)(this, function (t) {
                          switch (t.label) {
                            case 0:
                              return 'object' != typeof e.result ||
                                'function' != typeof e.result.then
                                ? [2]
                                : [4, e.result];
                            case 1:
                              return (
                                t.sent(),
                                this.snapshotConstructedStylesheet(e.that, !0),
                                [2]
                              );
                          }
                        });
                      });
                    }),
                    this._hooks.push(t)),
                  Object.defineProperty(e, zo, { value: !0, configurable: !0 });
              }),
              (e.prototype.onSetAdoptedStyleSheets = function (e) {
                if (Wn(e)) {
                  var t = e.adoptedStyleSheets;
                  if (t) {
                    for (var n = [], r = 0, i = t; r < i.length; r++) {
                      var o = i[r],
                        s = this.snapshotConstructedStylesheet(o);
                      n.push(s),
                        !0 === o.disabled && this.onDisableSheet(o, !0);
                    }
                    this._queue.enqueue({
                      Kind: Oe.ADOPTED_STYLESHEETS,
                      Args: [Wn(e), n],
                    });
                  }
                }
              }),
              (e.prototype.snapshotEl = function (e, t) {
                void 0 === t && (t = 0);
                var n = Wn(e);
                if (n) {
                  var r = jo(e);
                  r && this._snapshot([Ge.Node, n], r, t);
                }
              }),
              (e.prototype.snapshotConstructedStylesheet = function (e, t) {
                void 0 === t && (t = !1);
                var n = $o(this._adoptedStylesheets, e);
                return t || void 0 === n
                  ? (void 0 === n &&
                      ((n = this._nextSheetId++),
                      (function (e, t, n) {
                        e.set(t, n);
                      })(this._adoptedStylesheets, e, n)),
                    this._snapshot([Ge.Sheet, n], e),
                    n)
                  : n;
              }),
              (e.prototype._snapshot = function (e, t, n) {
                void 0 === n && (n = 0),
                  this._queue.enqueue({ Kind: Oe.RESET_CSS_SHEET, Args: [e] });
                var r = Vo(t);
                if (r) {
                  for (var i = [], o = n; o < r.length; o++)
                    try {
                      var s = es(Xo(r[o]));
                      i.push(s);
                    } catch (e) {
                      i.push('html {}');
                    }
                  this._queue.enqueue({
                    Kind: Oe.CSSRULE_INSERT,
                    Args: [e, i, n],
                  });
                }
              }),
              (e.prototype.addInsert = function (e, t, n, r) {
                var i = Jo(this._adoptedStylesheets, e, Ge.Node);
                if (i && 'string' == typeof t) {
                  var o = [i, [es(t)]];
                  void 0 !== n && (o[2] = n),
                    void 0 !== r && (o[3] = r),
                    this._withEventQueueForSheet(e, function (e) {
                      return e.enqueue({ Kind: Oe.CSSRULE_INSERT, Args: o });
                    });
                }
              }),
              (e.prototype.addDelete = function (e, t, n) {
                var r = Jo(this._adoptedStylesheets, e, Ge.Node);
                r &&
                  this._withEventQueueForSheet(e, function (e) {
                    return e.enqueue({
                      Kind: Oe.CSSRULE_DELETE,
                      Args: n ? [r, t, n] : [r, t],
                    });
                  });
              }),
              (e.prototype.onDisableSheet = function (e, t) {
                var n = Jo(this._adoptedStylesheets, e, Ge.Node);
                n &&
                  this._withEventQueueForSheet(e, function (e) {
                    return e.enqueue({
                      Kind: Oe.DISABLE_STYLESHEET,
                      Args: [n, !!t],
                    });
                  });
              }),
              (e.prototype._withEventQueueForSheet = function (e, t) {
                if (e.ownerNode)
                  return (
                    (n = this._ctx),
                    (r = e.ownerNode),
                    (i = t),
                    void (
                      (o = A(
                        (function (e) {
                          var t = e.ownerDocument;
                          return t && t.defaultView;
                        })(r) || n.window
                      )) &&
                      'function' == typeof o._withEventQueue &&
                      o._withEventQueue(
                        n.recording.pageSignature(),
                        function (e) {
                          var t = e;
                          i({
                            enqueue: function (e) {
                              Pe(null != t, Ko) && t.enqueue(e);
                            },
                            enqueueFirst: function (e) {
                              Pe(null != t, Ko) && t.enqueueFirst(e);
                            },
                          }),
                            (t = null);
                        }
                      )
                    )
                  );
                var n, r, i, o;
                t(this._queue);
              }),
              (e.prototype._getRuleId = function (e, t) {
                var n;
                if (this._ruleIdCache.has(t))
                  return [qe.Cached, this._ruleIdCache.get(t)];
                var r = Array.prototype.indexOf.call(
                  null === (n = t.parentStyleSheet) || void 0 === n
                    ? void 0
                    : n.cssRules,
                  t
                );
                if (-1 !== r) {
                  var i = Jo(this._adoptedStylesheets, e, Ge.Node);
                  if (i) {
                    var o = this._nextRuleId++;
                    return this._ruleIdCache.set(t, o), [qe.Index, i, r];
                  }
                }
              }),
              (e.prototype.stop = function () {
                (this._isStarted = !1), this._throttle.close();
                for (var e = 0, t = this._hooks; e < t.length; e++) {
                  var n = t[e];
                  n.disable(),
                    Object.defineProperty(n.getTarget(), zo, {
                      value: !1,
                      configurable: !0,
                    });
                }
                this._hooks = [];
                for (var r = 0, o = this._removeShims; r < o.length; r++)
                  (0, o[r])();
                if (((this._removeShims = []), this._previousRuleStyleGetter)) {
                  this._flushDirtyCssTimeout.stop();
                  try {
                    var s = CSSStyleRule.prototype,
                      a = Object.getOwnPropertyDescriptor(s, 'style');
                    if ((null == a ? void 0 : a.get) !== this._styleGetter)
                      return;
                    Object.defineProperty(
                      s,
                      'style',
                      (0, i.__assign)((0, i.__assign)({}, a), {
                        get: this._previousRuleStyleGetter,
                      })
                    );
                  } catch (e) {}
                }
              }),
              (e.prototype.ensureHook = function (e) {
                this._skipInstanceHook(e) || e[zo] || this._hook(e);
              }),
              (e.prototype.removeHook = function (e) {
                if (!this._skipInstanceHook(e))
                  for (var t = 0; t < this._hooks.length; t++) {
                    var n = this._hooks[t],
                      r = n.getTarget();
                    if (e === r) {
                      n.disable(),
                        this._hooks.splice(t, 1),
                        Object.defineProperty(r, zo, {
                          value: !1,
                          configurable: !0,
                        });
                      break;
                    }
                  }
              }),
              (e.prototype._skipInstanceHook = function (e) {
                return (
                  Object.getPrototypeOf(e) === this._ctx.window.CSSStyleSheet
                );
              }),
              (e.ThrottleMax = 1e4),
              (e.ThrottleInterval = 1e4),
              (e.FlushCSSInterval = 50),
              e
            );
          })(),
          Yo = document.createElement('div');
        Yo.style.width = 'initial';
        var Xo =
            '' != Yo.style.cssText
              ? function (e) {
                  return e.cssText;
                }
              : function e(t, n) {
                  if (
                    (void 0 === n && (n = 0),
                    !Pe(n <= 20, 'No deep recursion for CSS rules'))
                  )
                    return 'html { /* Depth limit exceeded! */ }';
                  var r = (function (e) {
                    switch (e.type) {
                      case CSSRule.PAGE_RULE:
                        var t = e.selectorText || '';
                        return t && ne(t, '@page') ? t : '@page ' + t;
                      case CSSRule.KEYFRAME_RULE:
                        return e.keyText;
                      case CSSRule.STYLE_RULE:
                        return e.selectorText;
                      case CSSRule.MEDIA_RULE:
                        return '@media ' + e.media.mediaText;
                      case CSSRule.KEYFRAMES_RULE:
                        return '@keyframes ' + e.name;
                      case CSSRule.SUPPORTS_RULE:
                        return '@supports ' + e.conditionText;
                      default:
                        return null;
                    }
                  })(t);
                  if (null == r) return t.cssText;
                  var i = (function (t, n) {
                    var r,
                      i,
                      o,
                      s,
                      a = t,
                      u = a.style;
                    if (u) {
                      for (var c = '', h = 0; h < u.length; h++) {
                        var d = u[h],
                          l =
                            void 0 !==
                            (s = (function (e, t) {
                              var n = e;
                              if ('function' == typeof n.getPropertyCSSValue) {
                                var r = n.getPropertyCSSValue(t);
                                if (null != r) {
                                  var i;
                                  switch (r.cssValueType) {
                                    case To.CSS_PRIMITIVE_VALUE:
                                      i = r;
                                      break;
                                    case To.CSS_VALUE_LIST:
                                      if (1 !== r.length) return;
                                      var o = r.item(0);
                                      if (null == o) return;
                                      if (
                                        o.cssValueType !==
                                        To.CSS_PRIMITIVE_VALUE
                                      )
                                        return;
                                      i = o;
                                      break;
                                    default:
                                      return;
                                  }
                                  if (i.primitiveType === Co.CSS_STRING) {
                                    var s = Rr();
                                    Io || (Io = s.createElement('div'));
                                    var a = i.cssText;
                                    try {
                                      Io.style.cssText = t + ': "' + a + '";';
                                      var u = Io.style.getPropertyCSSValue(t);
                                      if (null == u) return;
                                      if (a !== u.cssText) return;
                                    } catch (e) {
                                      return;
                                    } finally {
                                      Io.style.cssText = '';
                                    }
                                    return '"' + a + '"';
                                  }
                                }
                              }
                            })((i = u), (o = d)))
                              ? s
                              : i.getPropertyValue(o);
                        ('initial' === l ||
                          (('"' === (r = l)[0] || "'" === r[0]) &&
                            r[r.length - 1] === r[0])) &&
                          ((c += d + ': ' + l),
                          'important' === u.getPropertyPriority(d) &&
                            (c += ' !important'),
                          (c += '; '));
                      }
                      return [u.cssText, c].filter(Boolean).join('\n');
                    }
                    var p = a.cssRules;
                    if (!p) return null;
                    var f = '';
                    for (h = 0; h < p.length; h++) f += e(p[h], n + 1);
                    return f;
                  })(t, n);
                  return null == i ? t.cssText : r + ' { ' + i + '} ';
                },
          Zo = /^\s*$/;
        function Jo(e, t, n) {
          var r = (function (e, t) {
            var n = $o(e, t);
            if (n) return [Ge.Sheet, n];
            var r = Wn(t.ownerNode);
            return r ? [Ge.Node, r] : void 0;
          })(e, t);
          if (r) {
            var i = r[0],
              o = r[1];
            return i === n ? o : r;
          }
        }
        function $o(e, t) {
          return e.get(t);
        }
        function es(e) {
          return e.length <= ti
            ? e
            : (e.length, ':root { --fs-dropped-large-rule: 0 }');
        }
        var ts,
          ns = (function () {
            function e(e, t, n) {
              (this._ctx = e),
                (this._q = t),
                (this._listeners = n.createChild());
            }
            return (
              (e.prototype.start = function () {
                var e = this,
                  t = this._ctx.window.document;
                this._listeners.addCustom(
                  t,
                  this._getFullscreenChangeEvent(),
                  !0,
                  function (t) {
                    e.onFullscreenChange(t);
                  }
                ),
                  this._listeners.addCustom(
                    t,
                    this._getFullscreenErrorEvent(),
                    !0,
                    function (t) {
                      e.onFullscreenError(t);
                    }
                  );
              }),
              (e.prototype.stop = function () {
                this._listeners && this._listeners.clear();
              }),
              (e.prototype.onFullscreenChange = function (e) {
                var t = this._getFullscreenElement();
                if (t) {
                  var n = Wn(t);
                  this._previousFullscreenFSID,
                    this._q.enqueue({ Kind: Oe.FULLSCREEN, Args: [n, !0] }),
                    (this._previousFullscreenFSID = n);
                } else
                  this._previousFullscreenFSID,
                    this._q.enqueue({
                      Kind: Oe.FULLSCREEN,
                      Args: [this._previousFullscreenFSID, !1],
                    }),
                    (this._previousFullscreenFSID = void 0);
              }),
              (e.prototype.onFullscreenError = function (e) {
                this._q.enqueue({ Kind: Oe.FULLSCREEN_ERROR, Args: [] });
              }),
              (e.prototype._getFullscreenElement = function () {
                var e = this._ctx.window.document;
                return e[Ir(e, 'fullscreenElement')];
              }),
              (e.prototype._getFullscreenChangeEvent = function () {
                return Ir(
                  this._ctx.window.document,
                  'onfullscreenchange'
                ).slice(2);
              }),
              (e.prototype._getFullscreenErrorEvent = function () {
                return Ir(this._ctx.window.document, 'onfullscreenerror').slice(
                  2
                );
              }),
              e
            );
          })(),
          rs = ns,
          is = (function () {
            function e(e, t) {
              (this._queue = t),
                (this._registry = null),
                (this._checkedNodeTags = {});
              var n = e.window;
              'customElements' in n &&
                'get' in n.customElements &&
                'whenDefined' in n.customElements &&
                (this._registry = n.customElements);
            }
            return (
              (e.prototype.onCustomNodeVisited = function (e) {
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  var t, n;
                  return (0, i.__generator)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        if (!this._registry) return [2];
                        if (
                          ((t = e.nodeName.toLowerCase()),
                          Object.prototype.hasOwnProperty.call(
                            this._checkedNodeTags,
                            t
                          ))
                        )
                          return [2];
                        r.label = 1;
                      case 1:
                        return (
                          r.trys.push([1, 3, , 4]),
                          (n = !!this._registry.get(t)),
                          (this._checkedNodeTags[t] = n),
                          [4, this._registry.whenDefined(t)]
                        );
                      case 2:
                        return r.sent(), this._enqueue(t), [3, 4];
                      case 3:
                        return r.sent(), [3, 4];
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (e.prototype._enqueue = function (e) {
                this._queue.enqueue({
                  Kind: Oe.CUSTOM_ELEMENT_DEFINED,
                  Args: [e],
                });
              }),
              e
            );
          })(),
          os = (function () {
            function e(e, t) {
              var n;
              (this._wnd = e),
                (this._queue = []),
                (this._flushPending = !1),
                (this._interval =
                  null !== (n = t.interval) && void 0 !== n ? n : 1e3),
                (this._onFlush = t.onFlush);
            }
            return (
              (e.prototype.append = function (e) {
                this.schedule(), this._queue.push(e);
              }),
              (e.prototype.flush = function () {
                (this._flushPending = !1),
                  this._onFlush(this._queue),
                  (this._queue = []);
              }),
              (e.prototype.schedule = function () {
                this._flushPending ||
                  (s.setWindowTimeout(
                    this._wnd,
                    X(this.flush.bind(this)),
                    this._interval
                  ),
                  (this._flushPending = !0));
              }),
              e
            );
          })(),
          ss = (function () {
            function e(e) {
              (this._pendingFlush = !1), (this._onFlush = e);
            }
            return (
              (e.prototype.flush = function () {
                this._onFlush(), (this._pendingFlush = !1);
              }),
              (e.prototype.schedule = function () {
                var e = this;
                this._pendingFlush ||
                  ((this._pendingFlush = !0),
                  Jt.resolve()
                    .then(function () {
                      e.flush();
                    })
                    ['catch'](function (e) {
                      return Ae.sendToBugsnag(e, 'error');
                    }));
              }),
              e
            );
          })(),
          as = (function () {
            function e(e, t) {
              (this._isRecordingSupported = !1),
                (this._hooks = []),
                (this._eventQueue = t),
                (this._window = e.window),
                (this._isRecordingSupported = us(this._window));
            }
            return (
              (e.prototype.start = function () {
                this._eventQueue.enqueue({
                  Kind: Oe.REC_FEAT_SUPPORTED,
                  Args: [Qe.HTMLDialogElement, this._isRecordingSupported],
                }),
                  this._isRecordingSupported &&
                    (this._addHook('show'),
                    this._addHook('showModal'),
                    this._addHook('close'));
              }),
              (e.prototype.stop = function () {
                this._hooks.forEach(function (e) {
                  return e.disable();
                }),
                  (this._hooks = []);
              }),
              (e.prototype._addHook = function (e) {
                var t = this,
                  n = ye(this._window.HTMLDialogElement.prototype, e);
                null == n ||
                  n.afterSync(function (n) {
                    var r = Wn(n.that),
                      i = 'close' !== e,
                      o = 'showModal' === e;
                    t._eventQueue.enqueue({ Kind: Oe.DIALOG, Args: [r, i, o] });
                  }),
                  n && this._hooks.push(n);
              }),
              e
            );
          })(),
          us = function (e) {
            return void 0 !== e.HTMLDialogElement;
          },
          cs = function (e) {
            try {
              return s.elMatches(e, 'dialog:modal');
            } catch (e) {
              return !0;
            }
          },
          hs = (function () {
            function e() {}
            return (
              (e.prototype.now = function () {
                return Date.now();
              }),
              e
            );
          })(),
          ds = new ((function () {
            function e(e, t, n, r) {
              void 0 === n && (n = t),
                void 0 === r && (r = new hs()),
                (this._tokensPerMs = e),
                (this._capacity = t),
                (this._clock = r),
                (this._last = r.now()),
                (this._count = n);
            }
            return (
              (e.prototype.hasCapacityFor = function (e) {
                var t = this._clock.now(),
                  n = (t - this._last) * this._tokensPerMs;
                return (
                  (this._count = Math.min(this._capacity, this._count + n)),
                  (this._last = t),
                  this._count >= e
                    ? ((this._count -= e), [!0, 0])
                    : [!1, (e - this._count) / this._tokensPerMs]
                );
              }),
              e
            );
          })())(2, 2e5),
          ls = new Set([
            'measureText',
            'getImageData',
            'getError',
            'getTransform',
            'isContextLost',
            'isEnabled',
            'isFramebuffer',
            'isProgram',
            'isRenderbuffer',
            'isShader',
            'isTexture',
          ]),
          ps = new Set(['fillText']),
          fs = (function () {
            function e(e, t, n, r) {
              (this._queue = t),
                (this._resourceUploader = n),
                (this._urlPrivacy = r),
                (this._mode = pt.CaptureCanvasOps),
                (this._methodHooks = []),
                (this._setterHookUndo = []),
                (this._seenCanvas = new WeakMap()),
                (this._modifiedCanvas = new WeakMap()),
                (this._connectedCanvases = new Set()),
                (this._screenshotInterval = 0),
                (this._lastScreenshot = new WeakMap()),
                (this._started = !1),
                (this._queued = new WeakMap()),
                (this._queuedCanvases = new Set()),
                (this._detachedIds = new WeakMap()),
                (this._nextDetachedId = 1),
                (this._refs = new WeakMap()),
                (this._nextRefId = 1),
                (this._argCounter = 0),
                (this._exceededRate = !1);
            }
            return (
              (e.prototype.start = function (e) {
                var t = this;
                if (
                  (void 0 === e && (e = pt.CaptureCanvasOps),
                  (this._started = !0),
                  (this._mode = e),
                  this._hook('2d', CanvasRenderingContext2D),
                  this._hook('webgl', WebGLRenderingContext),
                  this._mode === pt.ScreenshotCanvas)
                ) {
                  if (!HTMLCanvasElement.prototype.toDataURL) return;
                  this._screenshotInterval = setInterval(function () {
                    return t.screenshotConnectedCanvases();
                  }, 1e3);
                }
              }),
              (e.prototype._maybeCreateObjRefId = function (e, t) {
                return 'object' != typeof t
                  ? [void 0, 0]
                  : (this._refs.has(t) ||
                      this._refs.set(t, [e, this._nextRefId++]),
                    this._refs.get(t));
              }),
              (e.prototype._hook = function (e, t) {
                var n = this;
                if (t)
                  for (
                    var r = t.prototype,
                      i = function (i) {
                        if (ls.has(i)) return 'continue';
                        var s = Object.getOwnPropertyDescriptor(r, i);
                        if (
                          'function' == typeof (null == s ? void 0 : s.value)
                        ) {
                          var a = ye(r, i);
                          a &&
                            (a.afterSync(function (t) {
                              return n._addCanvasFunctionOp(
                                e,
                                i,
                                t.that,
                                t.args,
                                t.result
                              );
                            }),
                            o._methodHooks.push(a));
                        } else
                          'function' == typeof (null == s ? void 0 : s.set) &&
                            o._setterHookUndo.push(
                              me(t, i, o._getSetterHookToAddSetOp(e, i))
                            );
                      },
                      o = this,
                      s = 0,
                      a = Object.keys(r);
                    s < a.length;
                    s++
                  )
                    i(a[s]);
              }),
              (e.prototype._deferCanvasOps = function (e, t) {
                var n;
                this._queued.has(e) || this._queued.set(e, []),
                  null === (n = this._queued.get(e)) ||
                    void 0 === n ||
                    n.push.apply(n, t);
              }),
              (e.prototype._getIdAndMaybeSendDimensions = function (e) {
                var t = e instanceof HTMLCanvasElement ? Wn(e) : 0;
                if (t) return t;
                if (this._detachedIds.has(e))
                  return { id: this._detachedIds.get(e) };
                var n = { id: this._nextDetachedId };
                return (
                  this._measureDetachedCanvas(e, n),
                  this._detachedIds.set(e, this._nextDetachedId),
                  ++this._nextDetachedId,
                  n
                );
              }),
              (e.prototype._measureDetachedCanvas = function (e, t) {
                this._queue.enqueue({
                  Kind: Oe.CANVAS_DETACHED_DIMENSION,
                  Args: [t, e.width, e.height],
                });
              }),
              (e.prototype.flush = function (e, t) {
                var n, r;
                if (this._started) {
                  this._mode === pt.ScreenshotCanvas &&
                    e instanceof HTMLCanvasElement &&
                    (this._connectedCanvases.add(e),
                    this._modifiedCanvas.set(e, !0));
                  var i = this._getIdAndMaybeSendDimensions(e),
                    o =
                      null !== (n = this._queued.get(e)) && void 0 !== n
                        ? n
                        : [];
                  if ((this._queued['delete'](e), o.length > 0)) {
                    var s = t;
                    if (!s) {
                      var a = e instanceof HTMLCanvasElement ? Hn(e) : void 0,
                        u = e instanceof HTMLCanvasElement && Ee(e);
                      s =
                        null !== (r = null == a ? void 0 : a.mask) &&
                        void 0 !== r
                          ? r
                          : u;
                    }
                    this._enqueueOpsToEvents(e, i, o, s);
                  }
                  return i;
                }
              }),
              (e.prototype._processArg = function (e, t, n, r, i, o, s) {
                var a;
                switch (typeof r) {
                  case 'string':
                    return i ? xn(r) : r;
                  case 'number':
                  case 'boolean':
                  case 'bigint':
                    return r;
                  case 'undefined':
                    return { undef: !0 };
                  case 'object':
                    if (!r) return r;
                    try {
                      s.set(r, !0);
                    } catch (e) {}
                    var u =
                        null === (a = Object.getPrototypeOf(r)) || void 0 === a
                          ? void 0
                          : a.constructor,
                      c =
                        (null == u ? void 0 : u.name) ||
                        (function (e) {
                          var t;
                          if (e) {
                            var n = e.toString(),
                              r = vs.exec(n);
                            return (
                              r || (r = gs.exec(n)),
                              null === (t = null == r ? void 0 : r[1]) ||
                              void 0 === t
                                ? void 0
                                : t.trim()
                            );
                          }
                        })(u),
                      h = { ctor: c };
                    if (r instanceof Node && (p = Wn(r))) return (h.id = p), h;
                    switch (c) {
                      case 'Array':
                        return (
                          (this._argCounter += r.length),
                          this._processArgs(e, t, n, r, i, o, s)
                        );
                      case 'CanvasGradient':
                        return h;
                      case 'HTMLImageElement':
                        var d = hi(r.src, { source: 'dom', type: 'canvas' });
                        return this._urlPrivacy.record(d), (h.src = d), h;
                      case 'HTMLCanvasElement':
                        var l = r,
                          p = this.flush(l, i);
                        return (h.srcId = p), h;
                    }
                    if (
                      (function (e) {
                        var t;
                        return !!(null ===
                          (t = Object.prototype.toString.call(e)) ||
                        void 0 === t
                          ? void 0
                          : t.match(_s));
                      })(r)
                    )
                      return this._refs.has(r)
                        ? this._useRef(r, h, i)
                        : ((h.typedArray = '[' + r.toString() + ']'),
                          (this._argCounter += r.length),
                          h);
                    if ('object' == typeof r && this._refs.has(r))
                      return this._useRef(r, h, i);
                    if (r instanceof WebGLBuffer || r instanceof WebGLTexture) {
                      var f = void 0;
                      switch (o) {
                        case 'bindTexture':
                          f = this._backfillReference(
                            e,
                            'createTexture',
                            t,
                            n,
                            r
                          );
                          break;
                        case 'bindBuffer':
                          f = this._backfillReference(
                            e,
                            'createBuffer',
                            t,
                            n,
                            r
                          );
                      }
                      if (void 0 !== f) return this._useRef(r, h, i);
                    }
                    var _ = r;
                    for (var v in ((h.obj = {}), _)) {
                      try {
                        switch (typeof _[v]) {
                          case 'function':
                            continue;
                          case 'object':
                            if (_[v] && s.has(_[v])) continue;
                        }
                      } catch (e) {
                        continue;
                      }
                      ++this._argCounter,
                        (h.obj[v] = this._processArg(e, t, n, _[v], i, o, s));
                    }
                    return h;
                  default:
                    return null;
                }
              }),
              (e.prototype._useRef = function (e, t, n) {
                var r = this._refs.get(e),
                  i = r[0],
                  o = r[1];
                return this.flush(i, n), (t.ref = o), delete t.ctor, t;
              }),
              (e.prototype._backfillReference = function (e, t, n, r, i) {
                var o = this._maybeCreateObjRefId(n, i),
                  s = (o[0], o[1]);
                return this._enqueueEvent(r, [[e, lt.Function, t, [], s]]), s;
              }),
              (e.prototype._processArgs = function (e, t, n, r, i, o, s) {
                var a = this;
                return (
                  void 0 === s && (s = new WeakMap()),
                  (this._argCounter += r.length + 1),
                  r.map(function (r) {
                    return a._processArg(e, t, n, r, i, o, s);
                  })
                );
              }),
              (e.prototype._enqueueOpsToEvents = function (e, t, n, r) {
                var i = this;
                if ((void 0 === r && (r = !1), !this._exceededRate)) {
                  var o = n.map(function (n) {
                    var o = n[0],
                      s = n[1],
                      a = n[2],
                      u = n[3],
                      c = n[4];
                    return [
                      o,
                      s,
                      a,
                      i._processArgs(o, e, t, u, r && ps.has(a), a),
                      c,
                    ];
                  });
                  if (
                    !this._seenCanvas.has(e) &&
                    (this._seenCanvas.set(e, !0),
                    n.some(function (e) {
                      return '2d' === e[0];
                    }))
                  ) {
                    var s = this._getInitialOps(e);
                    if (s.length > 0)
                      return s.push.apply(s, o), void this._enqueueEvent(t, s);
                  }
                  this._enqueueEvent(t, o);
                }
              }),
              (e.prototype._enqueueEvent = function (e, t) {
                if (!this._exceededRate) {
                  var n = ds.hasCapacityFor(this._argCounter),
                    r = n[0];
                  n[1],
                    (this._argCounter = 0),
                    r
                      ? this._queue.enqueue({ Kind: Oe.CANVAS, Args: [e, t] })
                      : (this._exceededRate = !0);
                }
              }),
              (e.prototype._getInitialOps = function (e) {
                var t = e.getContext('2d');
                if (!t) return [];
                var n = [];
                if (
                  (t instanceof CanvasRenderingContext2D ||
                    t instanceof OffscreenCanvasRenderingContext2D) &&
                  'function' == typeof t.getTransform
                ) {
                  var r = t.getTransform();
                  if (!r.isIdentity) {
                    var i = r.a,
                      o = r.b,
                      s = r.c,
                      a = r.d,
                      u = r.e,
                      c = r.f;
                    n.push([
                      '2d',
                      lt.Function,
                      'transform',
                      [i, o, s, a, u, c],
                      -1,
                    ]);
                  }
                }
                return n;
              }),
              (e.prototype._enqueueOps = function (e, t) {
                e instanceof HTMLCanvasElement &&
                  (this._mode === pt.ScreenshotCanvas
                    ? (this._modifiedCanvas.set(e, !0),
                      this._connectedCanvases.add(e))
                    : (this._queuedCanvases.add(e),
                      this._deferCanvasOps(e, t)));
              }),
              (e.prototype._addCanvasFunctionOp = function (e, t, n, r, i) {
                for (var o = [], s = 0; s < r.length; s++) o.push(r[s]);
                var a = this._maybeCreateObjRefId(n.canvas, i),
                  u = (a[0], a[1]);
                this._enqueueOps(n.canvas, [[e, lt.Function, t, o, u]]);
              }),
              (e.prototype._getSetterHookToAddSetOp = function (e, t) {
                var n = this;
                return function (r, i) {
                  n._enqueueOps(r.canvas, [[e, lt.Set, t, [i], 0]]);
                };
              }),
              (e.prototype.stop = function () {
                (this._started = !1),
                  this._methodHooks.forEach(function (e) {
                    return e.disable();
                  }),
                  this._setterHookUndo.forEach(function (e) {
                    return e();
                  }),
                  (this._methodHooks = []),
                  (this._setterHookUndo = []),
                  this._screenshotInterval &&
                    (clearInterval(this._screenshotInterval),
                    (this._screenshotInterval = 0));
              }),
              (e.prototype.screenshotConnectedCanvases = function () {
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  var e,
                    t,
                    n = this;
                  return (0, i.__generator)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (
                          (e = []),
                          (t = []),
                          this._connectedCanvases.forEach(function (r) {
                            var i = Wn(r);
                            Ee(r) && i
                              ? n._modifiedCanvas.has(r) &&
                                t.push(n._screenshotCanvas(r, i))
                              : e.push(r);
                          }),
                          e.forEach(function (e) {
                            return n._connectedCanvases['delete'](e);
                          }),
                          [4, Jt.all(t)]
                        );
                      case 1:
                        return r.sent(), [2];
                    }
                  });
                });
              }),
              (e.prototype._screenshotCanvas = function (e, t) {
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  var n, r, o, s;
                  return (0, i.__generator)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          (n = e.toDataURL()),
                          (r = this._lastScreenshot.get(e)),
                          [
                            4,
                            this._resourceUploader.uploadDataUrlIfNeeded(
                              n,
                              function (e) {
                                var t;
                                return (
                                  e.url !== r &&
                                  !!(null === (t = e.contentType) ||
                                  void 0 === t
                                    ? void 0
                                    : t.match(/^image/i))
                                );
                              }
                            ),
                          ]
                        );
                      case 1:
                        return (o = i.sent())
                          ? ((s = o.url),
                            this._lastScreenshot.set(e, s),
                            o.url === r ||
                              this._enqueueEvent(t, [
                                [
                                  '2d',
                                  lt.Function,
                                  'drawImage',
                                  [{ ctor: 'HTMLImageElement', src: s }, 0, 0],
                                  0,
                                ],
                              ]),
                            [2])
                          : [2];
                    }
                  });
                });
              }),
              (e.prototype._afterSnapshot = function () {
                var e = this,
                  t = [];
                this._queuedCanvases.forEach(function (n) {
                  !Wn(n) && Ee(n) && (e._queued['delete'](n), t.push(n));
                });
                for (var n = 0, r = t; n < r.length; n++) {
                  var i = r[n];
                  this._queuedCanvases['delete'](i);
                }
              }),
              (e.prototype.tick = function () {
                var e = this;
                this._started &&
                  (this._afterSnapshot(),
                  this._mode !== pt.ScreenshotCanvas &&
                    this._queuedCanvases.forEach(function (t) {
                      var n = Wn(t);
                      if (n) {
                        var r = Hn(t),
                          i = e._queued.get(t);
                        i &&
                          0 !== i.length &&
                          (e._enqueueOpsToEvents(
                            t,
                            n,
                            i,
                            !!(null == r ? void 0 : r.mask)
                          ),
                          e._queued['delete'](t));
                      }
                    }));
              }),
              e
            );
          })(),
          _s =
            /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/,
          vs = /^\[object ([^\]]+?)(?:Constructor)?\]/,
          gs = /^function ([^(]+)/;
        !(function (e) {
          (e[(e.Scroll = 1)] = 'Scroll'), (e[(e.Resize = 2)] = 'Resize');
        })(ts || (ts = {}));
        var ys = (function () {
          function e(e, t, n, r, i, o, s, a, u) {
            var c = this;
            (this._ctx = e),
              (this._queue = t),
              (this._keep = n),
              (this._onFrameCreated = o),
              (this._beforeFrameRemoved = s),
              (this._resourceUploader = a),
              (this._urlPrivacy = u),
              (this._curSelection = []),
              (this._scrollTimeouts = {}),
              (this._uploadResources = !1),
              (this._modalHooks = []),
              (this._initialized = !1),
              (this._wnd = e.window),
              (this._doc = this._wnd.document),
              (this._loc = this._wnd.location),
              (this._hst = this._wnd.history),
              (this._listeners = i.createChild()),
              (this._currentUrl = this._loc.href),
              (this._inputWatcher = new nr(e, t)),
              (this._animationWatcher = new dr(e, t, this._listeners)),
              (this._canvasWatcher = new fs(e, t, a, this._urlPrivacy)),
              (this._ajaxWatcher = new Ro(e, t)),
              (this._perfWatcher = new go(
                e,
                t,
                this._listeners,
                this._urlPrivacy
              )),
              (this._styleSheetWatcher = new Go(e, t)),
              (this._fullscreenWatcher = new rs(e, t, this._listeners)),
              (this._dialogWatcher = new as(e, t)),
              (this._customElementWatcher = new is(e, t)),
              (this._intersectionWatcher = (function (e, t) {
                void 0 === t && (t = 0.25);
                var n = e.window.IntersectionObserver;
                if (n)
                  return new n(
                    function (t) {
                      for (var n, r = 0, i = t; r < i.length; r++) {
                        var o = i[r],
                          s = o.target,
                          a = o.intersectionRatio,
                          u = Wn(s);
                        u &&
                          (null === (n = e.queue()) ||
                            void 0 === n ||
                            n.enqueue({
                              Kind: Oe.VIEWPORT_INTERSECTION,
                              Args: [u, a],
                            }));
                      }
                    },
                    { threshold: [t, 1] }
                  );
              })(e)),
              (this._mutWatcher = new oo(
                e,
                r,
                this._visitNode.bind(this),
                this._beforeRemove.bind(this),
                this.attributesVisitor.bind(this),
                this._intersectionWatcher
              )),
              (this._urlPrivacyOnlyScheduler = new os(this._wnd, {
                interval: 40,
                onFlush: function (e) {
                  return c._processUrls(e);
                },
              })),
              (this._processUrlsScheduler = new os(this._wnd, {
                interval: 40,
                onFlush: function (e) {
                  return c._processUrls(e, !0);
                },
              }));
          }
          return (
            (e.prototype.getResourceUploader = function () {
              return this._resourceUploader;
            }),
            (e.prototype.watchEvents = function (e) {
              var t = this;
              void 0 === e && (e = {}),
                this._mutWatcher.hookMutations(),
                this._inputWatcher.hookEvents(),
                e.CaptureAnimations && this._animationWatcher.start(),
                this._styleSheetWatcher.start(),
                this._fullscreenWatcher.start(),
                this._dialogWatcher.start(),
                (null == e ? void 0 : e.CanvasWatcherMode) &&
                  (this._queue.enqueue({
                    Kind: Oe.REC_FEAT_SUPPORTED,
                    Args: [Qe.CanvasWatcherEnabled, !0],
                  }),
                  this._canvasWatcher.start(e.CanvasWatcherMode)),
                e.DisableCopyPasteListener ||
                  (this._listeners.add(
                    this._wnd,
                    'copy',
                    !1,
                    this._addCopyEvent.bind(this)
                  ),
                  this._listeners.add(
                    this._wnd,
                    'paste',
                    !1,
                    this._addPasteEvent.bind(this)
                  )),
                this._listeners.add(this._wnd, 'mousemove', !0, function (e) {
                  t._isSafePointerEvent(e) && t._addMouseMove(e);
                }),
                this._listeners.add(this._wnd, 'mousedown', !0, function (e) {
                  t._isSafePointerEvent(e) && t._addMouseDown(e);
                }),
                this._listeners.add(this._wnd, 'mouseup', !0, function (e) {
                  t._isSafePointerEvent(e) && t._addMouseUp(e);
                }),
                this._listeners.add(this._wnd, 'keydown', !0, function (e) {
                  t._inputWatcher.onKeyboardChange(bs(e));
                }),
                this._listeners.add(this._wnd, 'keyup', !0, function (e) {
                  t._inputWatcher.onKeyboardChange(bs(e));
                }),
                this._listeners.add(this._wnd, 'click', !0, function (e) {
                  t._isSafePointerEvent(e) && t._addClick(e);
                }),
                this._listeners.add(this._wnd, 'dblclick', !0, function (e) {
                  t._addDblClick(e);
                }),
                this._listeners.add(
                  this._wnd,
                  'focus',
                  !0,
                  function (e) {
                    t._addFocus(e, bs(e));
                  },
                  !0
                ),
                this._listeners.add(
                  this._wnd,
                  'blur',
                  !0,
                  function (e) {
                    t._addBlur(e, bs(e));
                  },
                  !0
                ),
                this._listeners.add(
                  this._wnd,
                  'change',
                  !0,
                  function (e) {
                    t._addChange(e, bs(e));
                  },
                  !0
                ),
                this._listeners.add(this._wnd, 'touchstart', !0, function (e) {
                  t._isSafePointerEvent(e) &&
                    (t._addTouchEvent(e, Oe.TOUCHSTART), t._addWindowScroll());
                }),
                this._listeners.add(this._wnd, 'touchend', !0, function (e) {
                  t._isSafePointerEvent(e) &&
                    (t._addTouchEvent(e, Oe.TOUCHEND), t._addWindowScroll());
                }),
                this._listeners.add(this._wnd, 'touchmove', !0, function (e) {
                  t._isSafePointerEvent(e) &&
                    (t._addTouchEvent(e, Oe.TOUCHMOVE), t._addWindowScroll());
                }),
                this._listeners.add(this._wnd, 'touchcancel', !0, function (e) {
                  t._isSafePointerEvent(e) &&
                    t._addTouchEvent(e, Oe.TOUCHCANCEL);
                }),
                this._listeners.add(this._wnd, 'play', !0, function (e) {
                  t._addPlayEvent(e);
                }),
                this._listeners.add(this._wnd, 'pause', !0, function (e) {
                  t._addPauseEvent(e);
                }),
                this._listeners.add(this._wnd, 'scroll', !0, function (e) {
                  e.bubbles ? t._addWindowScroll() : t._addScroll(Es(e));
                }),
                this._listeners.add(this._wnd, 'resize', !1, function () {
                  t._addWindowResize();
                }),
                this._listeners.add(this._wnd, 'submit', !1, function (e) {
                  t._addFormSubmit(e);
                }),
                this._listeners.add(this._wnd, 'focus', !1, function () {
                  t._addWindowFocus();
                }),
                this._listeners.add(this._wnd, 'blur', !1, function () {
                  t._addWindowBlur();
                }),
                this._listeners.add(this._wnd, 'popstate', !1, function () {
                  t._addNavigate();
                }),
                this._listeners.add(this._wnd, 'selectstart', !0, function () {
                  t._addSelection();
                }),
                this._listeners.add(
                  this._doc,
                  'selectionchange',
                  !0,
                  function () {
                    t._addSelection();
                  }
                ),
                this._listeners.add(
                  this._wnd,
                  'visibilitychange',
                  !1,
                  function (e) {
                    t.addVisibilityChangeEvent();
                  }
                );
              var n = this._wnd.visualViewport;
              n
                ? (this._listeners.add(n, 'scroll', !0, function () {
                    return t._addWindowScroll();
                  }),
                  this._listeners.add(n, 'resize', !0, function () {
                    return t._addWindowResize();
                  }))
                : this._listeners.add(this._wnd, 'mousewheel', !0, function () {
                    t._addWindowScroll();
                  }),
                (this._pushHook = ye(this._hst, 'pushState', !0)),
                this._pushHook &&
                  this._pushHook.afterSync(function () {
                    return t._addNavigate();
                  }),
                (this._replaceHook = ye(this._hst, 'replaceState', !0)),
                this._replaceHook &&
                  this._replaceHook.afterSync(function () {
                    return t._addNavigate();
                  });
              for (
                var r = function (e) {
                    var n = ye(i._wnd, e);
                    if (!n) return 'continue';
                    i._modalHooks.push(n),
                      n
                        .before(function () {
                          t._queue.enqueue({ Kind: Oe.MODAL_OPEN, Args: [e] });
                        })
                        .afterSync(function () {
                          t._queue.enqueue({ Kind: Oe.MODAL_CLOSE, Args: [e] });
                        });
                  },
                  i = this,
                  o = 0,
                  a = ct;
                o < a.length;
                o++
              )
                r(a[o]);
              if (
                ('function' == typeof this._wnd.document.hasFocus &&
                  this._queue.enqueue({
                    Kind: this._wnd.document.hasFocus()
                      ? Oe.WINDOW_FOCUS
                      : Oe.WINDOW_BLUR,
                    Args: [],
                  }),
                s.matchMedia)
              )
                for (
                  var u = function (e, n, r) {
                      var i = s.matchMedia(c._wnd, r);
                      if (!i) return 'continue';
                      var o = function () {
                        i.matches &&
                          t._queue.enqueue({
                            Kind: Oe.MEDIA_QUERY_CHANGE,
                            Args: [e, n],
                          });
                      };
                      c._listeners.add(i, 'change', !0, o), o();
                    },
                    c = this,
                    h = 0,
                    d = [
                      [
                        'any-pointer',
                        'coarse',
                        'not screen and (any-pointer: fine)',
                      ],
                      [
                        'any-pointer',
                        'fine',
                        'only screen and (any-pointer: fine)',
                      ],
                      [
                        'any-hover',
                        'none',
                        'not screen and (any-hover: hover)',
                      ],
                      [
                        'any-hover',
                        'hover',
                        'only screen and (any-hover: hover)',
                      ],
                      ['pointer', 'none', '(pointer: none)'],
                      ['pointer', 'coarse', '(pointer: coarse)'],
                      ['pointer', 'fine', '(pointer: fine)'],
                      [
                        'prefers-color-scheme',
                        'no-preference',
                        '(prefers-color-scheme: no-preference)',
                      ],
                      [
                        'prefers-color-scheme',
                        'light',
                        '(prefers-color-scheme: light)',
                      ],
                      [
                        'prefers-color-scheme',
                        'dark',
                        '(prefers-color-scheme: dark)',
                      ],
                    ];
                  h < d.length;
                  h++
                ) {
                  var l = d[h];
                  u(l[0], l[1], l[2]);
                }
              this._initialized = !0;
            }),
            (e.prototype.initResourceUploading = function () {
              this._resourceUploader.init(), (this._uploadResources = !0);
            }),
            (e.prototype.onDomLoad = function () {
              this._addDomLoaded(),
                this._addViewportChange(!0),
                this._mutWatcher._checkForMissingInsertions(gr);
            }),
            (e.prototype.onLoad = function () {
              var e = this,
                t = !1,
                n = Ae.wrap(function () {
                  t ||
                    ((t = !0),
                    e._perfWatcher.onLoad(),
                    e._addLoad(),
                    e._addViewportChange());
                }, 'error');
              new $n(n, 0).start(),
                s.requestWindowAnimationFrame &&
                  s.requestWindowAnimationFrame(this._wnd, n);
            }),
            (e.prototype.ajaxWatcher = function () {
              return this._ajaxWatcher;
            }),
            (e.prototype.perfWatcher = function () {
              return this._perfWatcher;
            }),
            (e.prototype.bundleEvents = function () {
              var e = this;
              return this._queue.enqueueSimultaneousEventsIn(function (t) {
                var n = e._mutWatcher.processMutations(t);
                return (
                  e._inputWatcher.tick(),
                  e._perfWatcher.tick(),
                  e._ajaxWatcher.tick(),
                  e._canvasWatcher.tick(),
                  e._addViewportChange(),
                  n
                );
              });
            }),
            (e.prototype.shutdown = function (e) {
              var t;
              if (this._initialized) {
                (this._initialized = !1),
                  this._listeners && this._listeners.clear(),
                  this._pushHook && this._pushHook.disable(),
                  this._replaceHook && this._replaceHook.disable();
                for (var n = 0, r = this._modalHooks; n < r.length; n++)
                  r[n].disable();
                (this._modalHooks = []),
                  this._perfWatcher.onLoad(),
                  this._ctx.measurer.performMeasurementsNow(),
                  this._queue.processEvents(),
                  this._processUrlsScheduler.flush(),
                  this._urlPrivacyOnlyScheduler.flush(),
                  this._urlPrivacy.flush(),
                  this._inputWatcher.shutdown(),
                  this._mutWatcher.shutdown(),
                  this._ajaxWatcher.disable(),
                  this._animationWatcher.stop(),
                  this._perfWatcher.shutdown(),
                  this._styleSheetWatcher.stop(),
                  this._fullscreenWatcher.stop(),
                  this._dialogWatcher.stop(),
                  this._canvasWatcher.stop(),
                  null === (t = this._intersectionWatcher) ||
                    void 0 === t ||
                    t.disconnect(),
                  this._queue.shutdown(e);
              }
            }),
            (e.prototype.recordingIsDetached = function () {
              return this._mutWatcher.recordingIsDetached();
            }),
            (e.prototype._visitNode = function (e, t) {
              var n = this;
              switch (e.nodeName) {
                case '#document':
                case '#document-fragment':
                  '#document-fragment' === e.nodeName &&
                    this._listeners.add(e, 'scroll', !0, function (e) {
                      return n._addScroll(Es(e));
                    });
                  var r = e;
                  try {
                    if (
                      !r.adoptedStyleSheets ||
                      0 === r.adoptedStyleSheets.length
                    )
                      break;
                  } catch (e) {
                    break;
                  }
                  null == t ||
                    t.push(function () {
                      n._styleSheetWatcher.onSetAdoptedStyleSheets(e);
                    });
                  break;
                case 'BODY':
                  this._addViewportChange(), this._addSelection();
                  break;
                case 'INPUT':
                case 'TEXTAREA':
                case 'SELECT':
                  this._inputWatcher.addInput(e);
                  break;
                case 'FRAME':
                case 'IFRAME':
                  this._onFrameCreated(e);
                  break;
                case 'VIDEO':
                case 'AUDIO':
                  e.paused ||
                    this._queue.enqueue({ Kind: Oe.PLAY, Args: [Wn(e)] });
                  break;
                case 'DIALOG':
                  var i = e;
                  i.open &&
                    this._queue.enqueue({
                      Kind: Oe.DIALOG,
                      Args: [Wn(i), !0, cs(i)],
                    });
                  break;
                case 'LINK':
                case 'STYLE':
                  var o = e,
                    s = o.sheet;
                  if (!s) break;
                  this._styleSheetWatcher.ensureHook(s),
                    !0 === s.disabled &&
                      this._styleSheetWatcher.onDisableSheet(s, !0),
                    (function (e) {
                      var t = e.textContent || '';
                      if (t.length > 5e5) return !1;
                      var n = Vo(jo(e));
                      return (
                        !!n &&
                        (!!('style' === Tn(e) && n.length > 0 && Zo.test(t)) ||
                          (function (e) {
                            var t;
                            try {
                              if (
                                (null === (t = e.classList) || void 0 === t
                                  ? void 0
                                  : t.contains('fs-css-in-js')) ||
                                e.hasAttribute('data-fela-type') ||
                                e.hasAttribute('data-aphrodite')
                              )
                                return !0;
                            } catch (e) {
                              Ae.sendToBugsnag(e, 'error');
                            }
                            return !1;
                          })(e))
                      );
                    })(o) &&
                      (null == t ||
                        t.push(function () {
                          n._styleSheetWatcher.snapshotEl(o),
                            'link' === Tn(o) &&
                              n._listeners.add(o, 'load', !1, function () {
                                n._styleSheetWatcher.snapshotEl(o);
                              });
                        }));
                  break;
                case 'CANVAS':
                  this._ctx.measurer.requestMeasureTask(tn.Low, function () {
                    return n._canvasWatcher.flush(e);
                  });
                  break;
                default:
                  e.nodeName &&
                    '#' !== e.nodeName[0] &&
                    e.nodeName.indexOf('-') > -1 &&
                    this._customElementWatcher.onCustomNodeVisited(e);
              }
              if ('scrollLeft' in e && 'scrollTop' in e) {
                var a = e;
                this._ctx.measurer.requestMeasureTask(tn.Low, function () {
                  (0 == a.scrollLeft && 0 == a.scrollTop) || n._addScroll(a);
                });
              }
              null == t ||
                t.push(function () {
                  n._ctx.measurer.requestMeasureTask(tn.Low, function () {
                    n._animationWatcher.snapshot(e);
                  });
                });
            }),
            (e.prototype._beforeRemove = function (e) {
              var t,
                n = e.node,
                r = Tn(e.node);
              if ('iframe' === r) this._beforeFrameRemoved(e.node);
              else if ('function' == typeof n.getElementsByTagName)
                for (
                  var i =
                      null !== (t = n.getElementsByTagName('iframe')) &&
                      void 0 !== t
                        ? t
                        : [],
                    o = 0;
                  o < i.length;
                  o++
                ) {
                  var s = i[o];
                  this._beforeFrameRemoved(s);
                }
              else if ('link' === r || 'style' === r) {
                var a = n.sheet;
                if (!a) return;
                this._styleSheetWatcher.removeHook(a);
              }
            }),
            (e.prototype.attributesVisitor = function (e, t, n) {
              if (
                !(function (e, t) {
                  return void 0 === t && (t = Hn(e)), Nn(e, t) || Dn(e, t);
                })(t)
              ) {
                var r = (function (e, t, n) {
                  for (var r, i, o = [], s = 0, a = ws; s < a.length; s++) {
                    var u = a[s];
                    n[u] && Ss[u][e] && o.push(n[u]);
                  }
                  if (
                    ('link' === e &&
                      n.href &&
                      (r = n.rel) &&
                      r.indexOf('stylesheet') > -1 &&
                      o.push(n.href),
                    ('img' === e || 'source' === e) &&
                      (i = n.srcset) &&
                      null == i.match(/^\s*$/))
                  )
                    for (var c = 0, h = i.split(','); c < h.length; c++) {
                      var d = h[c];
                      o.push(d.trim().split(/\s+/)[0]);
                    }
                  var l = t;
                  if (n.style && l.style) {
                    var p = l.style.backgroundImage;
                    if (p && p.length <= 300) {
                      var f = void 0;
                      for (vn.lastIndex = 0; (f = vn.exec(p)); ) {
                        var _ = f[1];
                        _ && o.push(_.trim());
                      }
                    }
                  }
                  return o;
                })(e, t, n);
                if (0 === r.length)
                  for (var i = 0, o = ws; i < o.length; i++) {
                    var s = o[i];
                    n[s] && this._urlPrivacyOnlyScheduler.append(n[s]);
                  }
                else
                  for (var a = 0, u = r; a < u.length; a++) {
                    var c = u[a];
                    this._processUrlsScheduler.append(c);
                  }
              }
            }),
            (e.prototype._processUrls = function (e, t) {
              void 0 === t && (t = !1), window;
              for (var n = Mr(this._wnd), r = 0, i = e; r < i.length; r++) {
                var o = Or(n, i[r]);
                this._uploadResources &&
                  t &&
                  this._resourceUploader.uploadIfNeeded(this._wnd, o),
                  this._urlPrivacy.record(o.href);
              }
              window;
            }),
            (e.prototype._isSafePointerEvent = function (e) {
              var t = Es(e);
              return !!Wn(t) && !Nn(t);
            }),
            (e.prototype._addMouseMove = function (e) {
              var t = Wn(Es(e));
              this._queue.enqueue({
                Kind: Oe.MOUSEMOVE,
                Args: t ? [e.clientX, e.clientY, t] : [e.clientX, e.clientY],
              });
            }),
            (e.prototype._addMouseDown = function (e) {
              this._queue.enqueue({
                Kind: Oe.MOUSEDOWN,
                Args: [e.clientX, e.clientY],
              });
            }),
            (e.prototype._addMouseUp = function (e) {
              this._queue.enqueue({
                Kind: Oe.MOUSEUP,
                Args: [e.clientX, e.clientY],
              });
            }),
            (e.prototype._addTouchEvent = function (e, t) {
              if (void 0 !== e.changedTouches)
                for (var n = 0; n < e.changedTouches.length; ++n) {
                  var r = e.changedTouches[n];
                  isNaN(parseInt(r.identifier, 10)) && (r.identifier = 0);
                  var i = [r.identifier, r.clientX, r.clientY];
                  this._queue.enqueue({ Kind: t, Args: i });
                }
            }),
            (e.prototype._addPlayEvent = function (e) {
              var t = Wn(Es(e));
              t && this._queue.enqueue({ Kind: Oe.PLAY, Args: [t] });
            }),
            (e.prototype._addPauseEvent = function (e) {
              var t = Wn(Es(e));
              t && this._queue.enqueue({ Kind: Oe.PAUSE, Args: [t] });
            }),
            (e.prototype._addWindowFocus = function () {
              this._queue.enqueue({ Kind: Oe.WINDOW_FOCUS, Args: [] });
            }),
            (e.prototype._addWindowBlur = function () {
              this._queue.enqueue({ Kind: Oe.WINDOW_BLUR, Args: [] });
            }),
            (e.prototype._addViewportChange = function (e) {
              var t = this;
              void 0 === e && (e = !1),
                this._ctx.measurer.requestMeasureTask(tn.High, function () {
                  return t._addViewportChangeImpl(e);
                });
            }),
            (e.prototype._addViewportChangeImpl = function (e) {
              var t,
                n =
                  (t = this._wnd.document).scrollingElement ||
                  t.body ||
                  t.documentElement,
                r = Wn(n);
              if (r) {
                var i = (function (e, t) {
                  var n,
                    r = e.documentElement.getBoundingClientRect(),
                    i =
                      null !== (n = e.body) && void 0 !== n
                        ? n
                        : { scrollHeight: 0, scrollWidth: 0 };
                  return {
                    width: Math.max(r.width, t.scrollWidth, i.scrollWidth),
                    height: Math.max(r.height, t.scrollHeight, i.scrollHeight),
                  };
                })(this._wnd.document, n);
                dn(i, this._curDocSize) ||
                  ((this._curDocSize = i),
                  this._queue.enqueue({
                    Kind: Oe.RESIZE_DOCUMENT_CONTENT,
                    Args: [i.width, i.height],
                  }));
                var o,
                  s,
                  a,
                  u,
                  c = wn(this._wnd, e ? void 0 : this._curLayoutViewport),
                  h = (function (e, t) {
                    var n = e.visualViewport;
                    if (n) return n;
                    var r = t;
                    return void 0 === r && (r = wn(e)), new En(e, r);
                  })(this._wnd, c);
                if (
                  (c.hasKnownPosition
                    ? (hn(c, this._curLayoutViewport) ||
                        this._queue.enqueue({
                          Kind: Oe.SCROLL_LAYOUT,
                          Args: [r, c.pageLeft, c.pageTop],
                        }),
                      (o = h),
                      ((s = this._curVisualViewport) &&
                        o.offsetLeft == s.offsetLeft &&
                        o.offsetTop == s.offsetTop) ||
                        this._queue.enqueue({
                          Kind: Oe.SCROLL_VISUAL_OFFSET,
                          Args: [r, h.offsetLeft, h.offsetTop],
                        }))
                    : hn(h, this._curVisualViewport) ||
                      this._queue.enqueue({
                        Kind: Oe.SCROLL_LAYOUT,
                        Args: [r, h.pageLeft, h.pageTop],
                      }),
                  !(function (e, t) {
                    return (
                      t &&
                      e.width == t.width &&
                      e.height == t.height &&
                      e.clientWidth == t.clientWidth &&
                      e.clientHeight == t.clientHeight
                    );
                  })(c, this._curLayoutViewport))
                ) {
                  var d = [c.clientWidth, c.clientHeight];
                  (c.width === c.clientWidth && c.height === c.clientHeight) ||
                    d.push(c.width, c.height),
                    this._queue.enqueue({ Kind: Oe.RESIZE_LAYOUT, Args: d });
                }
                dn(h, this._curVisualViewport) ||
                  this._queue.enqueue({
                    Kind: Oe.RESIZE_VISUAL,
                    Args: [h.width, h.height],
                  }),
                  (this._curLayoutViewport =
                    (((u = ln((a = c))).clientWidth = a.clientWidth),
                    (u.clientHeight = a.clientHeight),
                    u)),
                  (this._curVisualViewport = (function (e) {
                    var t = ln(e);
                    return (
                      (t.offsetLeft = e.offsetLeft),
                      (t.offsetTop = e.offsetTop),
                      t
                    );
                  })(h));
              }
            }),
            (e.prototype._doWorkInScrollTimeout = function (e, t) {
              var n = this;
              e in this._scrollTimeouts ||
                ((this._scrollTimeouts[e] = t),
                new $n(function () {
                  n._ctx.measurer.requestMeasureTask(tn.High, function () {
                    if (e in n._scrollTimeouts) {
                      var t = n._scrollTimeouts[e];
                      delete n._scrollTimeouts[e], t();
                    }
                  });
                }, ut.ScrollSampleInterval).start());
            }),
            (e.prototype._fireScrollTimeouts = function () {
              for (var e in this._scrollTimeouts)
                this._scrollTimeouts[e](), delete this._scrollTimeouts[e];
              this._scrollTimeouts = [];
            }),
            (e.prototype._addWindowScroll = function () {
              var e = this;
              this._doWorkInScrollTimeout(ts.Scroll, function () {
                return e._addViewportChange(!1);
              });
            }),
            (e.prototype._addWindowResize = function () {
              var e = this;
              this._doWorkInScrollTimeout(ts.Resize, function () {
                return e._addViewportChange(!0);
              });
            }),
            (e.prototype._addScroll = function (e) {
              var t = this,
                n = Wn(e);
              n &&
                this._doWorkInScrollTimeout(n, function () {
                  if (Wn(e) === n) {
                    var r = e;
                    n &&
                      'number' == typeof r.scrollLeft &&
                      (t._queue.enqueue({
                        Kind: Oe.RESIZE_SCROLLABLE_ELEMENT_CONTENT,
                        Args: [n, r.scrollWidth, r.scrollHeight],
                      }),
                      t._queue.enqueue({
                        Kind: Oe.SCROLL_LAYOUT,
                        Args: [n, r.scrollLeft, r.scrollTop],
                      }),
                      rn().then(function () {
                        t._mutWatcher.resizer().isObserved(n) ||
                          t._mutWatcher.resizer().observe(e);
                      }));
                  }
                });
            }),
            (e.prototype._addDomLoaded = function () {
              this._queue.enqueue({ Kind: Oe.DOMLOADED, Args: [] });
            }),
            (e.prototype._addLoad = function () {
              this._queue.enqueue({ Kind: Oe.LOAD, Args: [] });
            }),
            (e.prototype.getNavigateEvent = function (e, t) {
              void 0 === t && (t = Oe.NAVIGATE);
              var n = {
                Kind: t,
                Args: [hi(e, { source: 'event', type: Oe.NAVIGATE })],
              };
              return t === Oe.ENTRY_NAVIGATE
                ? (n.Args.push(this._getNavigationTimingType()), n)
                : n;
            }),
            (e.prototype._addNavigate = function () {
              var e = this._loc.href;
              this._currentUrl != e &&
                ((this._currentUrl = e),
                this._keep.onNavigate(e),
                this._queue.enqueue(this.getNavigateEvent(e)));
            }),
            (e.prototype._getNavigationTimingType = function () {
              try {
                var e = this._wnd.performance;
                if (!e || !e.navigation) return 'unknown';
                switch (e.navigation.type) {
                  case PerformanceNavigation.TYPE_NAVIGATE:
                    return 'navigate';
                  case PerformanceNavigation.TYPE_RELOAD:
                    return 'reload';
                  case PerformanceNavigation.TYPE_BACK_FORWARD:
                    return 'back_forward';
                  default:
                    return 'unknown';
                }
              } catch (e) {
                return 'unknown';
              }
            }),
            (e.prototype._addClick = function (e) {
              var t = Es(e),
                n = Wn(t);
              if (n) {
                var r = 0,
                  i = 0,
                  o = 0,
                  s = 0;
                if (t && t.getBoundingClientRect) {
                  var a = t.getBoundingClientRect();
                  (r = a.left), (i = a.top), (o = a.width), (s = a.height);
                }
                var u = Hn(t);
                this._keep.onClick(u),
                  this._queue.enqueue({
                    Kind: Oe.CLICK,
                    Args: [n, e.clientX, e.clientY, r, i, o, s],
                  });
              }
            }),
            (e.prototype._addDblClick = function (e) {
              var t = Wn(Es(e));
              t && this._queue.enqueue({ Kind: Oe.DBL_CLICK, Args: [t] });
            }),
            (e.prototype._addFormSubmit = function (e) {
              var t = Wn(Es(e));
              t && this._queue.enqueue({ Kind: Oe.FORM_SUBMIT, Args: [t] });
            }),
            (e.prototype._addFocus = function (e, t) {
              var n = Wn(Es(e));
              n && this._queue.enqueue({ Kind: Oe.FOCUS, Args: [n, t] });
            }),
            (e.prototype._addBlur = function (e, t) {
              var n = Wn(Es(e));
              n && this._queue.enqueue({ Kind: Oe.BLUR, Args: [n, t] });
            }),
            (e.prototype._addChange = function (e, t) {
              this._inputWatcher.onChange(Es(e), t);
            }),
            (e.prototype._addSelection = function () {
              var e = this;
              this._ctx.measurer.requestMeasureTask(tn.High, function () {
                var t;
                try {
                  t = e.selectionArgs();
                } catch (e) {
                  return;
                }
                for (var n = !1, r = 0; r < 4; r++)
                  if (e._curSelection[r] !== t[r]) {
                    n = !0;
                    break;
                  }
                n &&
                  ((e._curSelection = t),
                  e._queue.enqueue({ Kind: Oe.SELECT, Args: t }));
              });
            }),
            (e.prototype.selectionArgs = function () {
              if (!this._wnd.getSelection) return [];
              var e = this._wnd.getSelection();
              if (!e) return [];
              if ('None' == e.type) return [];
              if ('Caret' == e.type) {
                var t = Wn(e.anchorNode);
                return t ? [t, e.anchorOffset] : [];
              }
              if (!e.anchorNode || !e.focusNode) return [];
              var n = ms(e.anchorNode, e.anchorOffset),
                r = n[0],
                i = n[1],
                o = ms(e.focusNode, e.focusOffset),
                s = o[0],
                a = o[1],
                u = Boolean(
                  r.compareDocumentPosition(s) &
                    Node.DOCUMENT_POSITION_FOLLOWING
                ),
                c = u ? [r, s] : [s, r],
                h = c[0],
                d = c[1],
                l = u ? [i, a] : [a, i],
                p = l[0],
                f = l[1];
              for (Wn(h) || (p = 0); h && !Wn(h) && h != d; )
                h = ae(h) || h.parentNode;
              for (Wn(d) || (f = 0); d && !Wn(d) && d != h; )
                d = ue(d) || d.parentNode;
              if (h == d && p == f) return [];
              var _ = Wn(h),
                v = Wn(d);
              return h && d && _ && v ? [_, p, v, f, u] : [];
            }),
            (e.prototype._addCopyEvent = function () {
              this._queue.enqueue({ Kind: Oe.COPY, Args: [] });
            }),
            (e.prototype._addPasteEvent = function () {
              this._queue.enqueue({ Kind: Oe.PASTE, Args: [] });
            }),
            (e.prototype.addVisibilityChangeEvent = function () {
              this._queue.enqueue({
                Kind: Oe.VISIBILITY_STATE,
                Args: [document.visibilityState],
              }),
                'hidden' === document.visibilityState &&
                  this._queue.singSwanSong(je.Hidden);
            }),
            e
          );
        })();
        function ms(e, t) {
          var n = e;
          if (!n.firstChild) return [n, t];
          n = n.firstChild;
          for (var r = 0; r < t - 1; r++) {
            var i = ae(n);
            if (!i) return [n, 0];
            n = i;
          }
          return [n, 0];
        }
        var Ss = {
            src: { img: !0, embed: !0 },
            href: { use: !0, image: !0 },
            data: { object: !0 },
          },
          ws = s.objectKeys(Ss);
        function Es(e) {
          if (e.composed && e.target) {
            var t = e.target;
            if (1 == t.nodeType && t.shadowRoot) {
              var n = e.composedPath();
              if (n.length > 0) return n[0];
            }
          }
          return e.target;
        }
        function bs(e) {
          var t;
          return !!(
            (null !== (t = e._fs_trust_event) && void 0 !== t && t) ||
            e.isTrusted
          );
        }
        var Ts = /^\s*at .*(\S+:\d+|native|(<anonymous>))/m,
          Cs = /^(eval@)?(\[native code\])?$/;
        function Is(e) {
          if (!e || 'string' != typeof e.stack) return [];
          var t = e;
          return t.stack.match(Ts)
            ? t.stack
                .split('\n')
                .filter(function (e) {
                  return !!e.match(Ts);
                })
                .map(function (e) {
                  var t = e;
                  t.indexOf('(eval ') > -1 &&
                    (t = t
                      .replace(/eval code/g, 'eval')
                      .replace(/(\(eval at [^()]*)|(\),.*$)/g, ''));
                  var n = t
                      .replace(/^\s+/, '')
                      .replace(/\(eval code/g, '(')
                      .replace(/\(native code\)/, '')
                      .split(/\s+/)
                      .slice(1),
                    r = As(n.pop());
                  return ks(
                    n.join(' '),
                    ['eval', '<anonymous>'].indexOf(r[0]) > -1 ? '' : r[0],
                    r[1],
                    r[2]
                  );
                })
            : t.stack
                .split('\n')
                .filter(function (e) {
                  return !e.match(Cs);
                })
                .map(function (e) {
                  var t = e;
                  if (
                    (t.indexOf(' > eval') > -1 &&
                      (t = t.replace(
                        / line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,
                        ':$1'
                      )),
                    -1 === t.indexOf('@') && -1 === t.indexOf(':'))
                  )
                    return [t, '', -1, -1];
                  var n = t.split('@'),
                    r = As(n.pop());
                  return ks(n.join('@'), r[0], r[1], r[2]);
                });
        }
        function ks(e, t, n, r) {
          return [
            e || '',
            t || '',
            parseInt(n || '-1', 10),
            parseInt(r || '-1', 10),
          ];
        }
        function As(e) {
          if (!e || -1 === e.indexOf(':')) return ['', '', ''];
          var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ''));
          return t ? [t[1] || '', t[2] || '', t[3] || ''] : ['', '', ''];
        }
        var xs,
          Rs = [
            'log',
            'info',
            'warn',
            'error',
            'debug',
            '_fs_debug',
            'assert',
            'trace',
          ],
          Ps = Rs.filter(function (e) {
            return !/debug/.test(e);
          }),
          Os = function (e, t, n) {
            void 0 === n && (n = !0);
            var r = Kn(e, t);
            return n ? Si(r) : r;
          },
          Ms = (function () {
            function e(e, t, n) {
              (this._queue = t),
                (this._enabled = !1),
                (this._overflow = !1),
                (this._total = 0),
                (this._hooks = []),
                (this._maxLogsPerPage =
                  ut.DefaultOrgSettings.MaxConsoleLogPerPage),
                (this._wnd = e.window),
                (this._listeners = n.createChild());
            }
            return (
              (e.prototype.initializeMaxLogsPerPage = function (e) {
                this._maxLogsPerPage =
                  e || ut.DefaultOrgSettings.MaxConsoleLogPerPage;
              }),
              (e.prototype._overflowMsg = function () {
                return (
                  '"[received more than ' + this._maxLogsPerPage + ' messages]"'
                );
              }),
              (e.prototype.enable = function () {
                var e = this;
                if (
                  (this._listeners.add(this._wnd, 'error', !0, function (t) {
                    return e.addError(t);
                  }),
                  this._listeners.add(
                    this._wnd,
                    'unhandledrejection',
                    !0,
                    function (t) {
                      e.addError({
                        error: t.reason,
                        message: 'Uncaught (in promise)',
                        filename: '',
                        lineno: 0,
                        colno: 0,
                      });
                    },
                    !0
                  ),
                  !this._enabled)
                )
                  if (
                    ((this._enabled = !0),
                    this._queue.enqueue({
                      Kind: Oe.REC_FEAT_SUPPORTED,
                      Args: [Qe.Console, !0],
                    }),
                    this._wnd.console)
                  )
                    for (
                      var t = function (t) {
                          var r = ye(n._wnd.console, t);
                          if (!r) return 'continue';
                          'assert' === t
                            ? r.before(function (n) {
                                var r = n.args;
                                r[0] ||
                                  e._addLog(
                                    t,
                                    Array.prototype.slice.apply(r, [1])
                                  );
                              })
                            : r.before(function (n) {
                                var r = n.args;
                                return e._addLog(t, r);
                              }),
                            n._hooks.push(r);
                        },
                        n = this,
                        r = 0,
                        i = Ps;
                      r < i.length;
                      r++
                    )
                      t(i[r]);
                  else
                    this._addLog('log', [
                      'NOTE: Log messages cannot be captured on IE9',
                    ]);
              }),
              (e.prototype.isEnabled = function () {
                return this._enabled;
              }),
              (e.prototype.disable = function () {
                var e;
                if ((this._listeners && this._listeners.clear(), this._enabled))
                  for (this._enabled = !1; (e = this._hooks.pop()); )
                    e.disable();
              }),
              (e.prototype.logEvent = function (e, t, n) {
                if ((void 0 === n && (n = 'console'), !this._checkOverflow()))
                  return null;
                for (
                  var r =
                      -1 === Rs.indexOf(e) ? [n, 'log', Os(e, 1e3)] : [n, e],
                    i = 0;
                  i < t.length;
                  ++i
                )
                  r.push(Os(t[i], 1e3));
                return { Kind: Oe.LOG, Args: r };
              }),
              (e.prototype._addLog = function (e, t) {
                var n = this.logEvent(e, t);
                n && this._queue.enqueue(n);
              }),
              (e.prototype.addError = function (e) {
                var t = e.lineno,
                  n = e.filename;
                if (void 0 !== e.error || void 0 !== e.message || n || t) {
                  var r = e.error
                    ? e.message +
                      ' ' +
                      ('object' == typeof e.error ? Os(e.error, 1e3) : e.error)
                    : e.message;
                  this._checkOverflow() &&
                    ('object' == typeof n && (n = Os(n, 100, !1)),
                    'object' == typeof t && (t = -1),
                    this._queue.enqueue({
                      Kind: Oe.ERROR,
                      Args: (0, i.__spreadArray)([r, n, t], Is(e.error)),
                    }));
                }
              }),
              (e.prototype._checkOverflow = function () {
                return (
                  !this._overflow &&
                  (this._total == this._maxLogsPerPage
                    ? (this._queue.enqueue({
                        Kind: Oe.LOG,
                        Args: ['console', 'warn', this._overflowMsg()],
                      }),
                      (this._overflow = !0),
                      !1)
                    : (this._total++, !0))
                );
              }),
              e
            );
          })(),
          Ls = (function () {
            function e(e, t) {
              (this._q = e),
                (this._valueIndices = t),
                (this._evts = []),
                (this._curveEndMs = 0);
            }
            return (
              (e.prototype.add = function (e) {
                this._evts.length > 0 &&
                  this._evts[this._evts.length - 1].When === e.When &&
                  this._evts.pop(),
                  0 === this._evts.length
                    ? (this._q.push(e), (this._curveEndMs = e.When))
                    : e.When > this._curveEndMs && (this._curveEndMs = e.When),
                  this._evts.push(e);
              }),
              (e.prototype.finish = function (e, t) {
                void 0 === t && (t = []);
                var n = this._evts.length;
                if (n <= 1) return !1;
                for (
                  var r = [],
                    o = this._evts[0].When,
                    s = this._evts[n - 1].When,
                    a = s - o != 0 ? s - o : 1,
                    u = 0;
                  u < this._valueIndices.length;
                  ++u
                ) {
                  var c = this._valueIndices[u],
                    h = this._evts[0].Args[c],
                    d = (this._evts[1].When - o) / a,
                    l = (this._evts[1].Args[c] - h) / d,
                    p = this._evts[n - 2].Args[c],
                    f = (s - this._evts[n - 2].When) / a,
                    _ = this._evts[n - 1].Args[c],
                    v = (_ - p) / f;
                  r.push(h, _, l, v);
                }
                return (
                  (this._evts[0].Kind = e),
                  (this._evts[0].Args = (0, i.__spreadArray)(
                    (0, i.__spreadArray)([this._curveEndMs], t),
                    r
                  )),
                  !0
                );
              }),
              (e.prototype.evts = function () {
                return this._evts;
              }),
              e
            );
          })(),
          Us = (function () {
            function e() {
              (this._size = 0),
                (this._root = {}),
                (this._root.next = this._root.prev = this._root);
            }
            return (
              (e.prototype.first = function () {
                return this._root.next.value;
              }),
              (e.prototype.last = function () {
                return this._root.prev.value;
              }),
              (e.prototype.size = function () {
                return this._size;
              }),
              (e.prototype.push = function (e) {
                this._size++, Ns(this._root.prev, { value: e });
              }),
              (e.prototype.unshift = function (e) {
                this._size++, Ns(this._root, { value: e });
              }),
              (e.prototype.pop = function () {
                return this._size > 0 && this._size--, Ds(this._root.prev);
              }),
              (e.prototype.shift = function () {
                return this._size > 0 && this._size--, Ds(this._root.next);
              }),
              e
            );
          })();
        function Ns(e, t) {
          var n = e.next;
          (t.next = n), (t.prev = e), (e.next = n.prev = t);
        }
        function Ds(e) {
          var t = e.prev,
            n = e.next;
          return (t.next = n), (n.prev = t), e.value;
        }
        !(function (e) {
          (e[(e.rageWindowMillis = 2e3)] = 'rageWindowMillis'),
            (e[(e.defaultRageThreshold = 5)] = 'defaultRageThreshold'),
            (e[(e.rageThresholdIfPageChanges = 8)] =
              'rageThresholdIfPageChanges'),
            (e[(e.thresholdChangeQuiescenceMillis = 2e3)] =
              'thresholdChangeQuiescenceMillis');
        })(xs || (xs = {}));
        var Fs = (function () {
            function e(e, t) {
              var n, r;
              void 0 === t && (t = v),
                (this._ctx = e),
                (this._msSinceDocumentStart = t),
                (this._clickTimes = new Us()),
                (this._rageThreshold = xs.defaultRageThreshold),
                (this._thresholdRaisedAt = -1),
                (this._isIgnoredCache = new WeakMap());
              var i = e.recording.pageResponse();
              if (!i)
                throw new Error(
                  'Attempt to construct EasyBake before rec/page response is set.'
                );
              for (
                var o = ['.fs-ignore-rage-clicks', '.fs-ignore-rage-clicks *'],
                  s = 0,
                  a =
                    null !==
                      (r =
                        null === (n = i.BehaviorSignalSettings) || void 0 === n
                          ? void 0
                          : n.ElementBlocks) && void 0 !== r
                      ? r
                      : [];
                s < a.length;
                s++
              ) {
                var u = a[s];
                u.Signals.indexOf(nt.SignalRageClick) > -1 &&
                  (o.push(u.Selector), o.push(u.Selector + ' *'));
              }
              var c = o.join(', ');
              Bi(c)
                ? (this._ignoreRageClickSelectors = [c])
                : (this._ignoreRageClickSelectors = o);
            }
            return (
              (e.prototype._isIgnored = function (e) {
                var t = this._isIgnoredCache.get(e);
                if (void 0 !== t) return t;
                for (
                  var n = 0, r = this._ignoreRageClickSelectors;
                  n < r.length;
                  n++
                ) {
                  var i = r[n];
                  if (s.elMatches(e, i))
                    return this._isIgnoredCache.set(e, !0), !0;
                }
                return this._isIgnoredCache.set(e, !1), !1;
              }),
              (e.prototype.onEvent = function (e) {
                var t;
                if (
                  (function (e) {
                    switch (e) {
                      case Oe.VALUECHANGE:
                      case Oe.SCROLL_LAYOUT:
                      case Oe.SCROLL_LAYOUT_CURVE:
                      case Oe.SCROLL_VISUAL_OFFSET:
                      case Oe.SCROLL_VISUAL_OFFSET_CURVE:
                      case Oe.MUT_INSERT:
                      case Oe.MUT_REMOVE:
                      case Oe.MUT_ATTR:
                      case Oe.MUT_SHADOW:
                      case Oe.MUT_TEXT:
                      case Oe.NAVIGATE:
                      case Oe.LOAD:
                      case Oe.FOCUS:
                      case Oe.BLUR:
                      case Oe.SELECT:
                      case Oe.FORM_SUBMIT:
                      case Oe.PLAY:
                      case Oe.PAUSE:
                      case Oe.MODAL_OPEN:
                      case Oe.MODAL_CLOSE:
                        return !0;
                    }
                    return !1;
                  })(e.Kind) &&
                  this._rageThreshold !== xs.rageThresholdIfPageChanges
                )
                  return (
                    (this._rageThreshold = xs.rageThresholdIfPageChanges),
                    void (this._thresholdRaisedAt =
                      this._msSinceDocumentStart())
                  );
                if (e.Kind === Oe.CLICK) {
                  var n = this._msSinceDocumentStart(),
                    r =
                      null === (t = qn(e.Args[0])) || void 0 === t
                        ? void 0
                        : t.node;
                  if (r) {
                    var i = 1 === r.nodeType ? r : r.parentElement;
                    if (!this._isIgnored(i)) {
                      var o = Tn(r);
                      if (
                        !o ||
                        ('textarea' !== o &&
                          'select' !== o &&
                          ('input' !== o || 'submit' === r.type))
                      ) {
                        this._clickTimes.push(n);
                        for (var s = n - xs.rageWindowMillis; ; ) {
                          var a = this._clickTimes.first();
                          if (!(void 0 !== a && a < s)) break;
                          this._clickTimes.shift();
                        }
                        if (
                          (this._thresholdRaisedAt <
                            n - xs.thresholdChangeQuiescenceMillis &&
                            (this._rageThreshold = xs.defaultRageThreshold),
                          this._clickTimes.size() >= this._rageThreshold)
                        ) {
                          var u = this._ctx.recording.getCurrentSessionURL,
                            c = {
                              eventStartTimeStamp: this._clickTimes.first(),
                              eventEndTimeStamp: n,
                              eventReplayUrlAtStart: u(),
                              eventReplayUrlAtCurrentTime: u(!0),
                            };
                          this.dispatchRageClickEvent(r, c),
                            (this._rageThreshold = xs.defaultRageThreshold),
                            (this._clickTimes = new Us());
                        }
                      }
                    }
                  }
                }
              }),
              (e.prototype.dispatchRageClickEvent = function (e, t) {
                var n,
                  r = 'fullstory/rageclick';
                try {
                  n = new CustomEvent(r, {
                    detail: t,
                    bubbles: !0,
                    cancelable: !0,
                  });
                } catch (e) {
                  (n = document.createEvent('customevent')).initCustomEvent(
                    r,
                    !0,
                    !0,
                    t
                  );
                }
                s.setWindowTimeout(
                  window,
                  Ae.wrap(function () {
                    e.dispatchEvent(n);
                  }),
                  0
                );
              }),
              e
            );
          })(),
          Hs = (function () {
            function e(e) {
              (this._ctx = e),
                (this._lastActivityTs = this._ctx.time.wallTime()),
                (this._hibernating = !1);
            }
            return (
              (e.prototype.getLastUserAcitivityTS = function () {
                return this._lastActivityTs;
              }),
              (e.prototype.getMsSinceLastUserAcivity = function () {
                return s.mathFloor(
                  this._ctx.time.wallTime() - this._lastActivityTs
                );
              }),
              (e.prototype.resetUserActivity = function () {
                this._lastActivityTs = this._ctx.time.wallTime();
              }),
              (e.prototype.isHibernating = function () {
                return this._hibernating;
              }),
              (e.prototype.setHibernating = function () {
                this._hibernating = !0;
              }),
              e
            );
          })(),
          qs = (function () {
            function e(e, t, n, r) {
              void 0 === r && (r = $n),
                (this._ctx = e),
                (this._activityModel = t),
                (this._queue = n),
                (this._pendingHibernation = !1),
                (this._hasSplit = !1),
                (this._heartbeatIntervalTs = ut.HeartbeatInitial),
                (this._hibernationIntervalTs = ut.PageInactivityTimeout),
                (this.heartbeatTimeout = new r(this._onHeartbeat.bind(this))),
                (this.hibernationTimeout = new r(
                  this._onHibernate.bind(this),
                  this._hibernationIntervalTs
                ));
            }
            return (
              (e.prototype.getUserActivityModel = function () {
                return this._activityModel;
              }),
              (e.prototype.manualHibernateCheck = function () {
                this._activityModel.isHibernating() ||
                  (this._activityModel.getMsSinceLastUserAcivity() >=
                    ut.PageInactivityTimeout + 5e3 &&
                    this._onHibernate());
              }),
              (e.prototype.scanEvents = function (e) {
                if (!this._pendingHibernation) {
                  this.manualHibernateCheck();
                  for (var t = !1, n = 0, r = e; n < r.length; n++)
                    if (ht(r[n].Kind)) {
                      t = !0;
                      break;
                    }
                  t &&
                    (this._activityModel.isHibernating()
                      ? this._splitPage()
                      : this.start());
                }
              }),
              (e.prototype.shutdown = function () {
                this.heartbeatTimeout.stop(), this.hibernationTimeout.stop();
              }),
              (e.prototype.start = function () {
                this._activityModel.resetUserActivity(),
                  (this._heartbeatIntervalTs = ut.HeartbeatInitial),
                  (this._hibernationIntervalTs = ut.PageInactivityTimeout),
                  this.heartbeatTimeout.start(this._heartbeatIntervalTs),
                  this.hibernationTimeout.start(this._hibernationIntervalTs);
              }),
              (e.prototype._onHeartbeat = function () {
                var e = this._activityModel.getMsSinceLastUserAcivity();
                e <= ut.PageInactivityTimeout &&
                  this._queue.enqueue({ Kind: Oe.HEARTBEAT, Args: [e] }),
                  (this._heartbeatIntervalTs *= 2),
                  this._heartbeatIntervalTs > ut.HeartbeatMax &&
                    (this._heartbeatIntervalTs = ut.HeartbeatMax),
                  this.heartbeatTimeout.start(this._heartbeatIntervalTs);
              }),
              (e.prototype._onHibernate = function () {
                if (!this._activityModel.isHibernating()) {
                  var e = !1;
                  this._activityModel.getMsSinceLastUserAcivity() <=
                  2 * ut.PageInactivityTimeout
                    ? this._queue.enqueue({
                        Kind: Oe.UNLOAD,
                        Args: [je.Hibernation],
                      })
                    : (e = !0);
                  try {
                    (this._pendingHibernation = !0),
                      this._activityModel.setHibernating(),
                      this.shutdown(),
                      this._queue.onHibernate(e);
                  } finally {
                    this._pendingHibernation = !1;
                  }
                }
              }),
              (e.prototype._splitPage = function () {
                this._hasSplit ||
                  ((this._hasSplit = !0),
                  this._ctx.recording.splitPage(je.Hibernation));
              }),
              e
            );
          })(),
          Ws = (function () {
            function e(e, t, n, r, i, o) {
              void 0 === r &&
                (r = function () {
                  return [];
                }),
                void 0 === i && (i = Jn),
                void 0 === o && (o = $n),
                (this._ctx = e),
                (this._transport = t),
                (this._gatherExternalEvents = r),
                (this._tickerFactory = i),
                (this._frameId = 0),
                (this._parentIds = []),
                (this._pipelineStarted = !1),
                (this._recordingDisabled = !1),
                (this._activeSimultaneousEventsTransactions = 0),
                (this._lastWhen = -1),
                (this._gotUnload = !1),
                (this._eventQueue = []),
                (this._sampleCurvesTicker = new this._tickerFactory(
                  ut.CurveSamplingInterval
                )),
                (this._processMutationsTicker = new this._tickerFactory(
                  ut.MutationProcessingInterval
                )),
                n && (this._activityMonitor = new qs(this._ctx, n, this, o));
            }
            return (
              (e.prototype.startPipeline = function (e) {
                var t;
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  var n,
                    r = this;
                  return (0, i.__generator)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return this._recordingDisabled || this._pipelineStarted
                          ? [2]
                          : ((this._pipelineStarted = !0),
                            e.frameId && (this._frameId = e.frameId),
                            e.parentIds && (this._parentIds = e.parentIds),
                            (n = !0),
                            [4, rn()]);
                      case 1:
                        return i.sent(), this.processEvents(), [4, rn()];
                      case 2:
                        return (
                          i.sent(),
                          window,
                          this._processMutationsTicker.start(function () {
                            window, r.processEvents(), window;
                          }),
                          this._sampleCurvesTicker.start(function () {
                            window, r.processEvents(n), window;
                          }),
                          null === (t = this._activityMonitor) ||
                            void 0 === t ||
                            t.start(),
                          this._transport.startPipeline(e),
                          window,
                          [2]
                        );
                    }
                  });
                });
              }),
              (e.prototype.enableEasyBake = function () {
                this._easyBake = new Fs(this._ctx);
              }),
              (e.prototype.enqueueSimultaneousEventsIn = function (e) {
                if (0 === this._activeSimultaneousEventsTransactions) {
                  var t = this._ctx.time.now();
                  this._lastWhen = t > this._lastWhen ? t : this._lastWhen;
                }
                try {
                  return (
                    this._activeSimultaneousEventsTransactions++,
                    e(this._lastWhen)
                  );
                } finally {
                  this._activeSimultaneousEventsTransactions--,
                    this._activeSimultaneousEventsTransactions < 0 &&
                      (this._activeSimultaneousEventsTransactions = 0);
                }
              }),
              (e.prototype.enqueue = function (e) {
                var t =
                  this._activeSimultaneousEventsTransactions > 0
                    ? this._lastWhen
                    : this._ctx.time.now();
                this._enqueueAt(t, e), Zn.checkForBrokenSchedulers();
              }),
              (e.prototype._enqueueAt = function (e, t) {
                var n;
                if (!this._recordingDisabled) {
                  var r = e;
                  r < this._lastWhen && (r = this._lastWhen),
                    (this._lastWhen = r);
                  var i = t;
                  (i.When = r), this._eventQueue.push(i);
                  try {
                    null === (n = this._easyBake) ||
                      void 0 === n ||
                      n.onEvent(i);
                  } catch (e) {
                    Ae.sendToBugsnag(e, 'error');
                  }
                }
              }),
              (e.prototype.enqueueFirst = function (e) {
                if (this._eventQueue.length > 0) {
                  var t = e;
                  (t.When = this._eventQueue[0].When),
                    this._eventQueue.unshift(t);
                } else this.enqueue(e);
              }),
              (e.prototype.addUnload = function (e) {
                this._gotUnload ||
                  ((this._gotUnload = !0),
                  this.enqueue({ Kind: Oe.UNLOAD, Args: [e] }),
                  this.singSwanSong(e));
              }),
              (e.prototype.shutdown = function (e) {
                this.addUnload(e),
                  this._flush(),
                  (this._recordingDisabled = !0),
                  this._stopPipeline();
              }),
              (e.prototype._flush = function () {
                this.processEvents(), this._transport.flush();
              }),
              (e.prototype.singSwanSong = function (e) {
                this._recordingDisabled ||
                  (window,
                  this._flush(),
                  (e === je.Hidden && this._gotUnload) ||
                    this._transport.singSwanSong(),
                  window);
              }),
              (e.prototype.rebaseIframe = function (e, t) {
                for (
                  var n = Math.max(0, t),
                    r = this._ctx.time.startTime(),
                    i = function (t) {
                      var i = r + t - e;
                      return i >= n ? i : n;
                    },
                    o = 0,
                    s = this._eventQueue;
                  o < s.length;
                  o++
                ) {
                  var a = s[o];
                  a.When = i(a.When);
                }
                -1 === this._lastWhen
                  ? (this._lastWhen = n)
                  : (this._lastWhen = i(this._lastWhen));
              }),
              (e.prototype.processEvents = function (e) {
                if (this._pipelineStarted) {
                  var t = this._eventQueue;
                  this._eventQueue = [];
                  var n = (function (e) {
                    if (0 == e.length) return e;
                    for (
                      var t,
                        n = [],
                        r = new Ls(n, [0, 1]),
                        i = {},
                        o = {},
                        s = {},
                        a = 0,
                        u = e;
                      a < u.length;
                      a++
                    ) {
                      var c = u[a];
                      switch (c.Kind) {
                        case Oe.MOUSEMOVE:
                          r.add(c);
                          break;
                        case Oe.TOUCHMOVE:
                          (l = c.Args[0]) in i || (i[l] = new Ls(n, [1, 2])),
                            i[l].add(c);
                          break;
                        case Oe.SCROLL_LAYOUT:
                          (l = c.Args[0]) in o || (o[l] = new Ls(n, [1, 2])),
                            o[l].add(c);
                          break;
                        case Oe.SCROLL_VISUAL_OFFSET:
                          (l = c.Args[0]) in s || (s[l] = new Ls(n, [1, 2])),
                            s[l].add(c);
                          break;
                        case Oe.RESIZE_VISUAL:
                          t || (t = new Ls(n, [0, 1])), t.add(c);
                          break;
                        default:
                          n.push(c);
                      }
                    }
                    if (r.finish(Oe.MOUSEMOVE_CURVE)) {
                      var h = r.evts();
                      if (h.length > 0) {
                        var d = h[h.length - 1].Args[2];
                        d && (h[0].Args[9] = d);
                      }
                    }
                    for (var l in o)
                      o[(p = parseInt(l, 10))].finish(Oe.SCROLL_LAYOUT_CURVE, [
                        p,
                      ]);
                    for (var l in s)
                      s[(p = parseInt(l, 10))].finish(
                        Oe.SCROLL_VISUAL_OFFSET_CURVE,
                        [p]
                      );
                    for (var l in i) {
                      var p;
                      i[(p = parseInt(l, 10))].finish(Oe.TOUCHMOVE_CURVE, [p]);
                    }
                    return t && t.finish(Oe.RESIZE_VISUAL_CURVE), n;
                  })(t);
                  e || (n = n.concat(this._gatherExternalEvents())),
                    this._ensureFrameIds(n),
                    this.sendEvents(this._ctx.recording.pageSignature(), n);
                }
              }),
              (e.prototype.sendEvents = function (e, t) {
                var n;
                0 != t.length &&
                  (null === (n = this._activityMonitor) ||
                    void 0 === n ||
                    n.scanEvents(t),
                  this._transport.enqueueEvents(e, t));
              }),
              (e.prototype.onHibernate = function (e) {
                e || this._flush(),
                  this._transport.singSwanSong(),
                  this._transport.stopPipeline();
              }),
              (e.prototype._ensureFrameIds = function (e) {
                if (this._frameId)
                  for (
                    var t = this._parentIds, n = t && t.length > 0, r = 0;
                    r < e.length;
                    ++r
                  ) {
                    var i = e[r];
                    i.FId || (i.FId = this._frameId),
                      n && !i.PIds && (i.PIds = t);
                  }
              }),
              (e.prototype._stopPipeline = function () {
                var e;
                this._pipelineStarted &&
                  (this._sampleCurvesTicker.stop(),
                  this._processMutationsTicker.stop(),
                  (this._eventQueue = []),
                  null === (e = this._activityMonitor) ||
                    void 0 === e ||
                    e.shutdown(),
                  this._transport.stopPipeline());
              }),
              e
            );
          })(),
          Bs = (function () {
            function e(e) {
              void 0 === e && (e = 4),
                (this.hashCount = e),
                (this.idx = 0),
                (this.hashMask = e - 1),
                this.reset();
            }
            return (
              (e.prototype.reset = function () {
                (this.idx = 0), (this.hash = []);
                for (var e = 0; e < this.hashCount; ++e)
                  this.hash.push(2166136261);
              }),
              (e.prototype.write = function (e) {
                for (
                  var t = this.hashMask, n = this.idx, r = 0;
                  r < e.length;
                  r++
                )
                  (this.hash[n] = this.hash[n] ^ e[r]),
                    (this.hash[n] +=
                      (this.hash[n] << 1) +
                      (this.hash[n] << 4) +
                      (this.hash[n] << 7) +
                      (this.hash[n] << 8) +
                      (this.hash[n] << 24)),
                    (n = (n + 1) & t);
                this.idx = n;
              }),
              (e.prototype.writeAscii = function (e) {
                for (
                  var t = this.hashMask, n = this.idx, r = 0;
                  r < e.length;
                  r++
                )
                  (this.hash[n] = this.hash[n] ^ e.charCodeAt(r)),
                    (this.hash[n] +=
                      (this.hash[n] << 1) +
                      (this.hash[n] << 4) +
                      (this.hash[n] << 7) +
                      (this.hash[n] << 8) +
                      (this.hash[n] << 24)),
                    (n = (n + 1) & t);
                this.idx = n;
              }),
              (e.prototype.sum = function () {
                var e;
                return (
                  (e = this.sumAsHex()
                    .replace(/\r|\n/g, '')
                    .replace(/([\da-fA-F]{2}) ?/g, '0x$1 ')
                    .replace(/ +$/, '')
                    .split(' ')
                    .map(Number)),
                  Ks(String.fromCharCode.apply(window, e))
                );
              }),
              (e.prototype.sumAsHex = function () {
                for (var e = '', t = 0; t < this.hashCount; ++t)
                  e += ('00000000' + (this.hash[t] >>> 0).toString(16)).slice(
                    -8
                  );
                return e;
              }),
              e
            );
          })();
        function js(e) {
          var t = new Bs(1);
          return t.writeAscii(e), t.sumAsHex();
        }
        function Vs(e) {
          var t = new Uint8Array(e);
          return Ks(String.fromCharCode.apply(null, t));
        }
        function Ks(e) {
          var t;
          return (null !== (t = window.btoa) && void 0 !== t ? t : zs)(e)
            .replace(/\+/g, '-')
            .replace(/\//g, '_');
        }
        function zs(e) {
          for (
            var t = String(e),
              n = [],
              r = 0,
              i = 0,
              o = 0,
              s =
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            t.charAt(0 | o) || ((s = '='), o % 1);
            n.push(s.charAt(63 & (r >> (8 - (o % 1) * 8))))
          ) {
            if ((i = t.charCodeAt((o += 3 / 4))) > 255)
              throw new Error(
                "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range."
              );
            r = (r << 8) | i;
          }
          return n.join('');
        }
        function Qs(e, t, n, r) {
          return (
            void 0 === r && (r = new Bs()),
            (0, i.__awaiter)(this, void 0, Jt, function () {
              var o, s, a, u;
              return (0, i.__generator)(this, function (i) {
                switch (i.label) {
                  case 0:
                    (o = e.now()), (s = n.byteLength), (a = 0), (i.label = 1);
                  case 1:
                    return a < s
                      ? e.now() - o > 25
                        ? [4, t(100)]
                        : [3, 3]
                      : [3, 5];
                  case 2:
                    i.sent(), (o = e.now()), (i.label = 3);
                  case 3:
                    (u = new Uint8Array(n, a, Math.min(s - a, 1e4))),
                      r.write(u),
                      (i.label = 4);
                  case 4:
                    return (a += 1e4), [3, 1];
                  case 5:
                    return [2, { hash: r.sum(), hasher: r }];
                }
              });
            })
          );
        }
        var Gs = 6e6,
          Ys = 'resource-uploader',
          Xs = (function () {
            function e(e, t, n, r, i) {
              void 0 === r && (r = window.FormData),
                void 0 === i && (i = $n),
                (this._ctx = e),
                (this._queue = t),
                (this._protocol = n),
                (this._formDataCtr = r),
                (this._timeout = i),
                (this._started = {}),
                (this._byUrl = {}),
                (this._batchReady = !1),
                (this._existsBatch = []);
            }
            return (
              (e.prototype.init = function () {
                this._formDataCtr &&
                  this._main()['catch'](function (e) {
                    Ae.sendToBugsnag(e, 'error');
                  });
              }),
              (e.prototype._main = function () {
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  var e,
                    t,
                    n,
                    r,
                    o,
                    s,
                    a,
                    u,
                    c,
                    h,
                    d,
                    l,
                    p,
                    f,
                    _,
                    v,
                    g,
                    y,
                    m,
                    S,
                    w,
                    E,
                    b,
                    T,
                    C;
                  return (0, i.__generator)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        (e = this._ctx.options.orgId), (i.label = 1);
                      case 1:
                        return [4, this._getBatch()];
                      case 2:
                        for (
                          t = i.sent(),
                            n = { fsnv: {}, sha1: {} },
                            r = {},
                            o = 0,
                            s = t;
                          o < s.length;
                          o++
                        )
                          (y = s[o]),
                            (n[y.hashAlgorithm][y.hash] = !0),
                            (l = r[y.hash]) ? l.push(y) : (r[y.hash] = [y]);
                        (a = {
                          fsnv: Object.keys(n.fsnv),
                          sha1: Object.keys(n.sha1),
                        }),
                          (u = void 0),
                          (i.label = 3);
                      case 3:
                        return (
                          i.trys.push([3, 5, , 6]),
                          [
                            4,
                            this._protocol.queryResources({
                              OrgId: e,
                              HashesByAlgorithm: a,
                            }),
                          ]
                        );
                      case 4:
                        return (u = i.sent()), [3, 6];
                      case 5:
                        return i.sent(), [3, 1];
                      case 6:
                        (c = 0), (h = u), (i.label = 7);
                      case 7:
                        if (!(c < h.length)) return [3, 15];
                        if (
                          ((d = h[c]),
                          !(null == (l = r[d.QueryHash]) ? void 0 : l.length))
                        )
                          return He(Ys, 'No resource found for hash'), [3, 14];
                        if (!d.Found || !d.CanonicalHash) return [3, 8];
                        for (p = 0, f = l; p < f.length; p++)
                          ((y = f[p]).blob = y.stringData = null),
                            'fsnv' === (_ = d.CanonicalHash.Algorithm)
                              ? this._queue.enqueue({
                                  Kind: Oe.SYS_RESOURCEHASH,
                                  Args: ['url', y.url, d.CanonicalHash.Hash],
                                })
                              : He(Ys, 'Unrecognized canonical hash type', {
                                  hashAlgorithm: _,
                                });
                        return [3, 14];
                      case 8:
                        (v = 0), (g = l), (i.label = 9);
                      case 9:
                        if (!(v < g.length)) return [3, 14];
                        if (
                          ((y = g[v]),
                          (m = y.url),
                          (S = y.contentType),
                          !(w = y.blob || y.stringData))
                        )
                          return He(Ys, 'Missing resource contents'), [3, 13];
                        if (
                          ((E = y.blob || new Blob([w], { type: S })),
                          (b = new this._formDataCtr()).append('orgId', e),
                          b.append('baseUrl', m),
                          'fsnv' === d.QueryAlgorithm)
                        )
                          b.append('fsnvHash', d.QueryHash);
                        else {
                          if ('sha1' !== d.QueryAlgorithm)
                            return (
                              He(
                                Ys,
                                'Unrecognized hash type from resource query',
                                { hashAlgorithm: d.QueryAlgorithm }
                              ),
                              [3, 13]
                            );
                          b.append('sha1Hash', d.QueryHash);
                        }
                        b.append('contents', E, 'blob'),
                          (y.blob = y.stringData = null),
                          (i.label = 10);
                      case 10:
                        return (
                          i.trys.push([10, 12, , 13]),
                          [4, this._protocol.uploadResource(b)]
                        );
                      case 11:
                        return (
                          (T = i.sent()),
                          'fsnv' != (C = JSON.parse(T)).Algorithm &&
                            He(
                              Ys,
                              'Unexpected hash type from resource upload',
                              { hashAlgorithm: C.Algorithm }
                            ),
                          this._queue.enqueue({
                            Kind: Oe.SYS_RESOURCEHASH,
                            Args: ['url', m, C.Hash],
                          }),
                          [3, 13]
                        );
                      case 12:
                        return i.sent(), [3, 13];
                      case 13:
                        return v++, [3, 9];
                      case 14:
                        return c++, [3, 7];
                      case 15:
                        return [3, 1];
                      case 16:
                        return [2];
                    }
                  });
                });
              }),
              (e.prototype._getBatch = function () {
                var e = this,
                  t = $t(),
                  n = t.resolve,
                  r = t.promise,
                  i = function () {
                    (e._popBatch = null), (e._batchReady = !1);
                    var t = e._existsBatch;
                    (e._existsBatch = []), n(t);
                  };
                return this._batchReady ? i() : (this._popBatch = i), r;
              }),
              (e.prototype.uploadIfNeeded = function (e, t) {
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  var n, r;
                  return (0, i.__generator)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return this._formDataCtr
                          ? ((n = t.href),
                            this._started[n]
                              ? [2]
                              : (function (e, t) {
                                  switch (t.protocol) {
                                    case 'blob:':
                                      return !0;
                                    case 'http:':
                                    case 'https:':
                                      switch (t.hostname) {
                                        case 'localhost':
                                        case '127.0.0.1':
                                        case '[::1]':
                                          return (
                                            e.location.protocol ===
                                              t.protocol &&
                                            e.location.host === t.host
                                          );
                                        case '::1':
                                          var n = t.port
                                            ? '[::1]:' + t.port
                                            : '[::1]';
                                          return (
                                            e.location.protocol ===
                                              t.protocol &&
                                            e.location.host === n
                                          );
                                        default:
                                          return !1;
                                      }
                                    default:
                                      return !1;
                                  }
                                })(e, t)
                              ? ((this._started[n] = !0),
                                [4, this.processResource(n)])
                              : [2])
                          : [2];
                      case 1:
                        return (r = i.sent())
                          ? (this._queueResource(r), [2])
                          : [2];
                    }
                  });
                });
              }),
              (e.prototype._queueResource = function (e) {
                var t = this,
                  n = 0 == this._existsBatch.length;
                this._existsBatch.push(e),
                  n &&
                    new this._timeout(function () {
                      (t._batchReady = !0), t._popBatch && t._popBatch();
                    }, 50).start();
              }),
              (e.prototype.processResource = function (e) {
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  var t, n, r, o, s;
                  return (0, i.__generator)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return this._byUrl[e]
                          ? [2, this._byUrl[e]]
                          : [4, Zs(e)];
                      case 1:
                        return (t = i.sent())
                          ? [4, Js(this._ctx, t.buffer)]
                          : [2, null];
                      case 2:
                        return (
                          (n = i.sent()),
                          (r = n.hash),
                          (o = n.algorithm),
                          (s = {
                            hash: r,
                            hashAlgorithm: o,
                            url: e,
                            blob: t.blob,
                            contentType: t.contentType,
                          }),
                          (this._byUrl[s.url] = s),
                          this._queueResource(s),
                          [2, s]
                        );
                    }
                  });
                });
              }),
              (e.prototype.uploadDataUrlIfNeeded = function (e, t) {
                return (
                  void 0 === t &&
                    (t = function () {
                      return !0;
                    }),
                  (0, i.__awaiter)(this, void 0, Jt, function () {
                    var n, r, o, s, a;
                    return (0, i.__generator)(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return (
                            (n = (function (e) {
                              var t,
                                n = e.indexOf(',');
                              if (-1 !== n)
                                try {
                                  var r = e.substring(0, n).match($s),
                                    i = void 0,
                                    o = void 0;
                                  r &&
                                    ((i = r[1]),
                                    (o =
                                      null === (t = r[2]) || void 0 === t
                                        ? void 0
                                        : t.substring(1)));
                                  for (
                                    var s = atob(e.substring(n + 1)),
                                      a = new ArrayBuffer(s.length),
                                      u = new Uint8Array(a),
                                      c = 0;
                                    c < s.length;
                                    ++c
                                  )
                                    u[c] = s.charCodeAt(c);
                                  return {
                                    blob: new Blob([a], { type: i }),
                                    buffer: a,
                                    contentType: i,
                                    charset: o,
                                  };
                                } catch (t) {
                                  return void Ae.sendToBugsnag(ea, 'warning', {
                                    input: e.substring(0, 100),
                                    err: t,
                                  });
                                }
                              else
                                Ae.sendToBugsnag(ea, 'warning', {
                                  input: e.substring(0, 100),
                                });
                            })(e)),
                            n ? [4, Js(this._ctx, n.buffer)] : [2, void 0]
                          );
                        case 1:
                          return (
                            (r = i.sent()),
                            (o = r.hash),
                            (s = r.algorithm),
                            (a = {
                              hash: o,
                              hashAlgorithm: s,
                              url: 'https://data-url.fs.invalid/' + s + '/' + o,
                              blob: n.blob,
                              contentType:
                                n.blob.type || 'application/octet-stream',
                            }),
                            t(a)
                              ? ((this._byUrl[a.url] = a),
                                this._queueResource(a),
                                [2, a])
                              : [2, a]
                          );
                      }
                    });
                  })
                );
              }),
              e
            );
          })();
        function Zs(e) {
          var t = $t(),
            n = t.resolve,
            r = t.promise,
            i = new XMLHttpRequest();
          return 'string' != typeof i.responseType
            ? (n(null), r)
            : (i.open('GET', e, !0),
              (i.responseType = 'blob'),
              (i.onerror = function () {
                n(null);
              }),
              (i.onload = function () {
                if (200 != i.status && 0 !== i.status)
                  return hi(e, { source: 'log', type: 'debug' }), void n(null);
                var t = i.response;
                if ((t.size || t.length) > Gs) {
                  var r = hi(e, { source: 'log', type: 'bugsnag' });
                  return (
                    Ae.sendToBugsnag(
                      'Size of blob resource exceeds limit',
                      'warning',
                      { url: r, MaxResourceSizeBytes: Gs }
                    ),
                    void n(null)
                  );
                }
                (function (e) {
                  var t = $t(),
                    n = t.resolve,
                    r = t.promise,
                    i = new FileReader();
                  return (
                    i.readAsArrayBuffer(e),
                    (i.onload = function () {
                      n(i.result);
                    }),
                    (i.onerror = function (e) {
                      Ae.sendToBugsnag(e, 'error'), n(null);
                    }),
                    r
                  );
                })(t).then(function (e) {
                  n(e ? { buffer: e, blob: t, contentType: t.type } : null);
                });
              }),
              i.send(),
              r);
        }
        function Js(e, t) {
          var n, r;
          return (0, i.__awaiter)(this, void 0, Jt, function () {
            var o;
            return (0, i.__generator)(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (o = e.window),
                    (
                      null ===
                        (r =
                          null === (n = o.crypto) || void 0 === n
                            ? void 0
                            : n.subtle) || void 0 === r
                        ? void 0
                        : r.digest
                    )
                      ? [4, o.crypto.subtle.digest({ name: 'sha-1' }, t)]
                      : [3, 2]
                  );
                case 1:
                  return [2, { hash: Vs(i.sent()), algorithm: 'sha1' }];
                case 2:
                  return [4, Qs(e.time, en, t)];
                case 3:
                  return [2, { hash: i.sent().hash, algorithm: 'fsnv' }];
              }
            });
          });
        }
        var $s = /^data:([^;,]*)(;?charset=[^;]+)?(?:;base64)?$/i,
          ea = 'Could not parse data url',
          ta = function (e, t, n) {
            (this.name = 'ProtocolError'),
              (this.message = t),
              (this.status = e),
              (this.data = n);
          };
        function na(e) {
          return (e >= 400 && 502 !== e) || 202 == e || 206 == e;
        }
        var ra = (function () {
            function e(e) {
              (this._byteCount = 0),
                (this._scheme = e.options.scheme),
                (this._cdnHost = e.options.cdnHost),
                (this._ctx = e);
            }
            return (
              (e.prototype.page = function (e) {
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  return (0, i.__generator)(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [
                          4,
                          sa(this._scheme, da(this._ctx), '/rec/page', le(e)),
                        ];
                      case 1:
                        return [2, _e(t.sent().text)];
                    }
                  });
                });
              }),
              (e.prototype.settings = function (e) {
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  var t;
                  return (0, i.__generator)(this, function (n) {
                    return (
                      (t =
                        e.previewMode || e.fallback
                          ? da(this._ctx)
                          : this._cdnHost),
                      [2, ha(this._scheme, t, e)]
                    );
                  });
                });
              }),
              (e.prototype.bundle = function (e) {
                var t;
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  var n, r, o, s;
                  return (0, i.__generator)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return [4, rn()];
                      case 1:
                        return (
                          i.sent(),
                          window,
                          (n = le(e.bundle)),
                          (this._byteCount += n.length),
                          this._byteCount,
                          window,
                          n.length > 2e6 ? [4, rn()] : [3, 3]
                        );
                      case 2:
                        i.sent(), (i.label = 3);
                      case 3:
                        return (
                          window,
                          (r = oa(e.bundle.Seq, e)),
                          [
                            4,
                            sa(
                              this._scheme,
                              null !== (t = e.recHost) && void 0 !== t
                                ? t
                                : da(this._ctx),
                              r,
                              n
                            ),
                          ]
                        );
                      case 4:
                        return (
                          (o = i.sent().text),
                          (s = _e(o)),
                          window,
                          [2, [this._byteCount, s]]
                        );
                    }
                  });
                });
              }),
              (e.prototype.bundleBeacon = function (e) {
                var t;
                return ca(
                  this._scheme,
                  null !== (t = e.recHost) && void 0 !== t ? t : da(this._ctx),
                  e
                );
              }),
              (e.prototype.exponentialBackoffMs = function (e, t) {
                var n = s.mathMin(ut.BackoffMax, 5e3 * s.mathPow(2, e));
                return t ? n + 0.25 * s.mathRandom() * n : n;
              }),
              e
            );
          })(),
          ia = (function () {
            function e(e) {
              (this._scheme = e.options.scheme), (this._ctx = e);
            }
            return (
              (e.prototype.uploadResource = function (e) {
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  return (0, i.__generator)(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [
                          4,
                          sa(
                            this._scheme,
                            da(this._ctx),
                            '/rec/uploadResource',
                            e
                          ),
                        ];
                      case 1:
                        return [2, t.sent().text];
                    }
                  });
                });
              }),
              (e.prototype.queryResources = function (e) {
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  return (0, i.__generator)(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [
                          4,
                          sa(
                            this._scheme,
                            da(this._ctx),
                            '/rec/queryResources',
                            le(e)
                          ),
                        ];
                      case 1:
                        return [2, _e(t.sent().text)];
                    }
                  });
                });
              }),
              e
            );
          })();
        function oa(e, t) {
          var n =
            '/rec/bundle' +
            ('v2' === t.version ? '/v2' : '') +
            '?OrgId=' +
            t.orgId +
            '&UserId=' +
            t.userId +
            '&SessionId=' +
            t.sessionId +
            '&PageId=' +
            t.pageId +
            '&Seq=' +
            e;
          return (
            null != t.serverPageStart &&
              (n += '&PageStart=' + t.serverPageStart),
            null != t.serverBundleTime &&
              (n += '&PrevBundleTime=' + t.serverBundleTime),
            null != t.lastUserActivity &&
              (n += '&LastActivity=' + t.lastUserActivity),
            t.isNewSession && (n += '&IsNewSession=true'),
            null != t.deltaT && (n += '&DeltaT=' + t.deltaT),
            n
          );
        }
        function sa(e, t, n, r) {
          return (0, i.__awaiter)(this, void 0, Jt, function () {
            return (0, i.__generator)(this, function (i) {
              return [2, ua('POST', e, t, la(n), !0, r)];
            });
          });
        }
        function aa(e, t, n) {
          return (0, i.__awaiter)(this, void 0, Jt, function () {
            return (0, i.__generator)(this, function (r) {
              return [2, ua('GET', e, t, la(n), !1)];
            });
          });
        }
        function ua(e, t, n, r, o, s) {
          return (0, i.__awaiter)(this, void 0, Jt, function () {
            return (0, i.__generator)(this, function (i) {
              return [
                2,
                new Jt(function (i, a) {
                  var u = '//' + n + r,
                    c = !1,
                    h = new XMLHttpRequest(),
                    d = 'withCredentials' in h;
                  Pe(d, 'XHR missing CORS support'),
                    d &&
                      ((h.onreadystatechange = function () {
                        if (4 == h.readyState) {
                          if (c) return;
                          c = !0;
                          try {
                            var e = { text: h.responseText };
                            if (200 == h.status) return void i(e);
                            var t = void 0;
                            try {
                              t = _e(e.text);
                            } catch (e) {}
                            a(new ta(h.status, e.text, t));
                          } catch (e) {
                            Ae.sendToBugsnag(e, 'error'), a(e);
                          }
                        }
                      }),
                      h.open(e, t + u, !0),
                      (h.withCredentials = o),
                      s &&
                        'function' != typeof s.append &&
                        h.setRequestHeader('Content-Type', 'text/plain'),
                      h.send(s));
                }),
              ];
            });
          });
        }
        function ca(e, t, n) {
          if ('function' == typeof navigator.sendBeacon) {
            var r =
                e + '//' + t + oa(n.bundle.Seq, n) + '&SkipResponseBody=true',
              i = le(n.bundle);
            try {
              return navigator.sendBeacon.bind(navigator)(r, i);
            } catch (e) {}
          }
          return !1;
        }
        function ha(e, t, n) {
          var r;
          return (0, i.__awaiter)(this, void 0, Jt, function () {
            var o, s;
            return (0, i.__generator)(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (o = null !== (r = n.version) && void 0 !== r ? r : 'v1'),
                    (s = n.previewMode ? '?previewMode=true' : ''),
                    [
                      4,
                      aa(e, t, '/s/settings/' + n.orgId + '/' + o + '/web' + s),
                    ]
                  );
                case 1:
                  return [2, _e(i.sent().text)];
              }
            });
          });
        }
        function da(e) {
          var t,
            n =
              null === (t = e.recording.pageResponse()) || void 0 === t
                ? void 0
                : t.GCLBSubdomain,
            r = e.options.recHost;
          return n && L(r) ? r.replace(/^rs\./, n + '.') : r;
        }
        function la(e) {
          if (!window.Zone) return e;
          var t = '?';
          return (
            e.indexOf(t) > -1 && (t = '&'), '' + e + t + 'ngsw-bypass=true'
          );
        }
        var pa,
          fa = (function () {
            function e(e, t, n) {
              void 0 === n && (n = new _a()),
                (this._ctx = e),
                (this._q = t),
                (this._matcher = n);
            }
            return (
              (e.prototype.initialize = function (e) {
                var t;
                if (e) {
                  this._setUrlKeeps(e);
                  var n =
                    null === (t = this._ctx.window.location) || void 0 === t
                      ? void 0
                      : t.href;
                  this.onNavigate(n);
                }
              }),
              (e.prototype.onNavigate = function (e) {
                return (
                  !!this._matcher.matches(e) &&
                  (this._q.enqueue({
                    Kind: Oe.KEEP_URL,
                    Args: [this._scrubUrl(e)],
                  }),
                  !0)
                );
              }),
              (e.prototype.onClick = function (e) {
                var t;
                return (
                  !!(null === (t = null == e ? void 0 : e.watchKind) ||
                  void 0 === t
                    ? void 0
                    : t.has(Cn.Keep)) &&
                  (this._q.enqueue({ Kind: Oe.KEEP_ELEMENT, Args: [e.id] }), !0)
                );
              }),
              (e.prototype.urlMatches = function (e) {
                return this._matcher.matches(e);
              }),
              (e.prototype._setUrlKeeps = function (e) {
                this._matcher.setRules(e);
              }),
              (e.prototype._scrubUrl = function (e) {
                return hi(e, { source: 'page', type: 'base' });
              }),
              e
            );
          })(),
          _a = (function () {
            function e() {
              this._regexes = null;
            }
            return (
              (e.prototype.setRules = function (e) {
                var t = e
                  .map(function (e) {
                    return e.Regex;
                  })
                  .filter(this._isValidRegex);
                t.length > 0 && (this._regexes = this._joinRegexes(t));
              }),
              (e.prototype.matches = function (e) {
                return !!this._regexes && this._regexes.test(e);
              }),
              (e.prototype._isValidRegex = function (e) {
                try {
                  return new RegExp(e), !0;
                } catch (t) {
                  return (
                    Ae.sendToBugsnag(
                      'Browser rejected UrlKeep.Regex',
                      'error',
                      { expr: e, error: t.toString() }
                    ),
                    !1
                  );
                }
              }),
              (e.prototype._joinRegexes = function (e) {
                try {
                  return new RegExp('(' + e.join(')|(') + ')', 'i');
                } catch (t) {
                  return (
                    Ae.sendToBugsnag(
                      'Browser rejected joining UrlKeep.Regexs',
                      'error',
                      { exprs: e, error: t.toString() }
                    ),
                    null
                  );
                }
              }),
              e
            );
          })(),
          va = function (e) {
            var t = (void 0 === e ? {} : e).wnd,
              n = void 0 === t ? window : t;
            !(function (e, t, n, r, i, o, s, a) {
              var u, c;
              function h(e) {
                var t,
                  n = [];
                function r() {
                  t &&
                    (n.forEach(function (e) {
                      var n;
                      try {
                        n = e[t[0]] && e[t[0]](t[1]);
                      } catch (t) {
                        return void (e[3] && e[3](t));
                      }
                      n && n.then ? n.then(e[2], e[3]) : e[2] && e[2](n);
                    }),
                    (n.length = 0));
                }
                function i(e) {
                  return function (n) {
                    t || ((t = [e, n]), r());
                  };
                }
                return (
                  e(i(0), i(1)),
                  {
                    then: function (e, t) {
                      return h(function (i, o) {
                        n.push([e, t, i, o]), r();
                      });
                    },
                  }
                );
              }
              (!(n in e) ||
                (e.console &&
                  e.console.log &&
                  e.console.log(
                    'FullStory namespace conflict. Please set window["_fs_namespace"].'
                  ),
                0)) &&
                ((a = e[n] =
                  (function () {
                    var e = function (e, n, r) {
                      function i(i, o) {
                        t(e, n, r, i, o);
                      }
                      var o = /Async$/;
                      return o.test(e)
                        ? ((e = e.replace(o, '')),
                          'function' == typeof Promise ? new Promise(i) : h(i))
                        : t(e, n, r);
                    };
                    function t(t, n, r, i, o) {
                      return e._api
                        ? e._api(t, n, r, i, o)
                        : (e.q && e.q.push([t, n, r, i, o]), null);
                    }
                    return (e.q = []), e;
                  })()),
                (function () {
                  function e() {}
                  function t(e, t, n) {
                    a('setProperties', { type: e, properties: t }, n);
                  }
                  function n(e, n) {
                    t('user', e, n);
                  }
                  function r(e, t, r) {
                    n({ uid: e }, r), t && n(t, r);
                  }
                  (a.identify = r),
                    (a.setUserVars = n),
                    (a.identifyAccount = e),
                    (a.clearUserCookie = e),
                    (a.setVars = t),
                    (a.event = function (e, t, n) {
                      a('trackEvent', { name: e, properties: t }, n);
                    }),
                    (a.anonymize = function () {
                      r(!1);
                    }),
                    (a.shutdown = function () {
                      a('shutdown');
                    }),
                    (a.restart = function () {
                      a('restart');
                    }),
                    (a.log = function (e, t) {
                      a('log', { level: e, msg: t });
                    }),
                    (a.consent = function (e) {
                      a('setIdentity', { consent: !arguments.length || e });
                    });
                })(),
                (u = 'fetch'),
                (c = 'XMLHttpRequest'),
                (a._w = {}),
                (a._w[c] = e[c]),
                (a._w[u] = e[u]),
                e[u] &&
                  (e[u] = function () {
                    return a._w[u].apply(this, arguments);
                  }),
                (a._v = '2.0.0'));
            })(n, n.document, n._fs_namespace, 0, 0, n._fs_script);
          };
        function ga(e, t) {
          if (e && e.postMessage)
            try {
              e.postMessage(
                (function (e) {
                  var t;
                  return le((((t = {}).__fs = e), t));
                })(t),
                '*'
              );
            } catch (e) {
              He('postMessage', e);
            }
        }
        function ya(e) {
          try {
            var t = _e(e);
            if ('__fs' in t) return t.__fs;
          } catch (e) {}
          return [pa.Unknown];
        }
        function ma(e, t, n, r) {
          var i = j(e);
          if (!i) return !1;
          try {
            i.send(t, n, r);
          } catch (e) {
            i.send(t, n);
          }
          return !0;
        }
        !(function (e) {
          (e.EndPreviewMode = 'EndPreviewMode'),
            (e.EvtBundle = 'EvtBundle'),
            (e.GreetFrame = 'GreetFrame'),
            (e.InitFrameMobile = 'InitFrameMobile'),
            (e.RequestFrameId = 'RequestFrameId'),
            (e.RestartFrame = 'RestartFrame'),
            (e.SetConsent = 'SetConsent'),
            (e.SetFrameId = 'SetFrameId'),
            (e.ShutdownFrame = 'ShutdownFrame'),
            (e.Unknown = 'Unknown');
        })(pa || (pa = {}));
        var Sa = new RegExp(/^\s+$/),
          wa = /^fb\d{18}$/,
          Ea = function (e) {
            var t = e.frame,
              n = e.orgId,
              r = e.scheme,
              i = e.script,
              o = e.recHost,
              a = e.cdnHost,
              u = e.appHost,
              c = e.namespace,
              h = (e.desc, e.snippetVersion);
            try {
              if (
                (function (e) {
                  return e.id == e.name && wa.test(e.id);
                })(t)
              )
                return Ue.BlocklistedFrame;
              if (
                (function (e) {
                  return (
                    !(
                      e.contentDocument &&
                      e.contentWindow &&
                      e.contentWindow.location
                    ) ||
                    ((function (e) {
                      return (
                        !!e.src &&
                        'about:blank' != e.src &&
                        e.src.indexOf('javascript:') < 0
                      );
                    })(e) &&
                      e.src != e.contentWindow.location.href &&
                      'loading' == e.contentDocument.readyState)
                  );
                })(t)
              )
                return Ue.PartiallyLoaded;
              var d = t.contentWindow,
                l = t.contentDocument;
              if (!d || !l) return Ue.MissingWindowOrDocument;
              if (!l.head) return Ue.MissingDocumentHead;
              if (!l.body || 0 === l.body.childNodes.length)
                return Ue.MissingBodyOrChildren;
              for (
                var p = !1, f = l.body.childNodes, _ = 0;
                _ < f.length;
                _++
              ) {
                switch (f[_].nodeType) {
                  case Node.ELEMENT_NODE:
                    if ('SCRIPT' === f[_].tagName) continue;
                    break;
                  case Node.TEXT_NODE:
                    var v = f[_].textContent;
                    if (null === v || Sa.test(v)) continue;
                    break;
                  case Node.COMMENT_NODE:
                    continue;
                }
                p = !0;
                break;
              }
              if (!p) return Ue.NoNonScriptElement;
              if (A(d)) return Ue.AlreadyDefined;
              var g = d;
              return (
                (g._fs_org = n),
                (g._fs_script = i),
                (g._fs_rec_host = o),
                (g._fs_rec_settings_host = a),
                (g._fs_app_host = u),
                (g._fs_run_in_iframe = !0),
                (g._fs_namespace = c),
                (g._fs_transport = (function (e) {
                  return {
                    send: function (t, n, r) {
                      if (void 0 !== e.parent) {
                        var i = A(e.parent);
                        void 0 !== i &&
                          'function' == typeof i._withRecorder &&
                          i._withRecorder(r, function (i) {
                            try {
                              i.onMessageReceived(e, [t, s.jsonParse(n), r]);
                            } catch (e) {
                              e instanceof SyntaxError &&
                                Ae.sendToBugsnag(e, 'error', {
                                  msg: 'Received invalid JSON',
                                });
                            }
                          });
                      }
                    },
                  };
                })(g)),
                (function (e, t, n, r, i, o) {
                  /^2\./.test(o)
                    ? va({ wnd: e })
                    : (function (e) {
                        var t,
                          n,
                          r,
                          i,
                          o,
                          s = (void 0 === e ? {} : e).wnd,
                          a = void 0 === s ? window : s;
                        (t = a),
                          a.document,
                          (n = a._fs_namespace),
                          (r = 'user'),
                          n in t
                            ? t.console &&
                              t.console.log &&
                              t.console.log(
                                'FullStory namespace conflict. Please set window["_fs_namespace"].'
                              )
                            : (((i = t[n] =
                                function (e, t, n) {
                                  i.q ? i.q.push([e, t, n]) : i._api(e, t, n);
                                }).q = []),
                              (i.identify = function (e, t, n) {
                                i(r, { uid: e }, n), t && i(r, t, n);
                              }),
                              (i.setUserVars = function (e, t) {
                                i(r, e, t);
                              }),
                              (i.event = function (e, t, n) {
                                i('event', { n: e, p: t }, n);
                              }),
                              (i.anonymize = function () {
                                i.identify(!1);
                              }),
                              (i.shutdown = function () {
                                i('rec', !1);
                              }),
                              (i.restart = function () {
                                i('rec', !0);
                              }),
                              (i.log = function (e, t) {
                                i('log', [e, t]);
                              }),
                              (i.consent = function (e) {
                                i('consent', !arguments.length || e);
                              }),
                              (i.identifyAccount = function (e, t) {
                                ((t = t || {}).acctId = e), i('account', t);
                              }),
                              (i.clearUserCookie = function () {}),
                              (i.setVars = function (e, t) {
                                i('setVars', [e, t]);
                              }),
                              (i._w = {}),
                              (o = 'XMLHttpRequest'),
                              (i._w[o] = t[o]),
                              (o = 'fetch'),
                              (i._w[o] = t[o]),
                              t[o] &&
                                (t[o] = function () {
                                  return i._w[o].apply(this, arguments);
                                }),
                              (i._v = '1.3.0'));
                      })({ wnd: e });
                  var s = t.createElement('script');
                  (s.async = !0),
                    (s.crossOrigin = 'anonymous'),
                    (s.src = n + '//' + r),
                    'testdrive' == i && (s.src += '?allowMoo=true'),
                    t.head.appendChild(s);
                })(g, l, r, i, n, h),
                Ue.Successful
              );
            } catch (e) {
              return Ue.Exception;
            }
          };
        function ba(e) {
          var t = '' + Wn(e);
          return (
            e.id && (t += '#' + e.id),
            t + '[src=' + hi(e.src, { source: 'log', type: 'debug' }) + ']'
          );
        }
        var Ta,
          Ca = 'https://fs-obfuscated.invalid',
          Ia = (function () {
            function e(e, t) {
              var n = this;
              (this._wnd = e),
                (this._queue = t),
                (this._idCounter = 0),
                (this._allEntries = {}),
                (this._salt = (function (e) {
                  var t;
                  try {
                    if (
                      'function' ==
                      typeof (null === (t = e.crypto) || void 0 === t
                        ? void 0
                        : t.getRandomValues)
                    ) {
                      var n = '',
                        r = new Uint32Array(2);
                      e.crypto.getRandomValues(r);
                      for (var i = 0; i < r.length; i++) n += r[i].toString(16);
                      return n;
                    }
                  } catch (e) {}
                  return s
                    .mathFloor(1e20 * (s.mathRandom() + 0.1))
                    .toString(16);
                })(this._wnd)),
                this._queue.enqueue({ Kind: Oe.URL_SALT, Args: [this._salt] }),
                (this._scheduler = new os(this._wnd, {
                  interval: 500,
                  onFlush: function (e) {
                    return n._onFlush(e);
                  },
                }));
            }
            return (
              (e.prototype.flush = function () {
                this._scheduler.flush();
              }),
              (e.prototype._onFlush = function (e) {
                0 !== e.length &&
                  this._queue.enqueue({ Kind: Oe.URL_ID, Args: e });
              }),
              (e.prototype.record = function (e) {
                if (/^(file|http)/i.test(e)) {
                  var t = this._add(e, !0),
                    n = t[0];
                  t[1] && this._scheduler.append([e, n]);
                }
              }),
              (e.prototype.seen = function (e) {
                return this._add(e, !1)[0];
              }),
              (e.prototype._add = function (e, t) {
                var n = e.substring(0, 5e3);
                if (void 0 === this._allEntries[n]) {
                  var r = this._idCounter++;
                  return (this._allEntries[n] = { id: r, record: t }), [r, t];
                }
                var i = !1;
                return (
                  t &&
                    ((i = !1 === this._allEntries[n].record),
                    (this._allEntries[n].record = !0)),
                  [this._allEntries[n].id, i]
                );
              }),
              (e.prototype.obfuscateUrl = function (e, t) {
                return 'css' === t
                  ? this._hashObfuscatedUrl(e)
                  : this._fullyObfuscatedUrl(e);
              }),
              (e.prototype._hashObfuscatedUrl = function (e) {
                var t = js(e.substring(0, 5e3) + this._salt);
                return Ca + '?hash=' + t + '&algorithm=fnv32';
              }),
              (e.prototype._fullyObfuscatedUrl = function (e) {
                var t = this.seen(e);
                return Ca + '?url-id=' + t;
              }),
              e
            );
          })();
        !(function (e) {
          (e[(e.NoInfoYet = 1)] = 'NoInfoYet'),
            (e[(e.Enabled = 2)] = 'Enabled'),
            (e[(e.Disabled = 3)] = 'Disabled');
        })(Ta || (Ta = {}));
        var ka,
          Aa = (function () {
            function e(e, t, n, r, i) {
              var o = this;
              (this._ctx = e),
                (this._injector = i),
                (this._orgSettings = ut.DefaultOrgSettings),
                (this._useClientSessionId = !1),
                (this._frameId = null),
                (this._parentIds = []),
                (this._bundleUploadInterval = ut.DefaultBundleUploadInterval),
                (this._childFrames = []),
                (this._childFrameListeners = new WeakMap()),
                (this._pendingChildFrameIdInits = []),
                (this._listeners = new mt()),
                (this._getCurrentSessionEnabled = Ta.NoInfoYet),
                (this._resourceUploadingEnabled = !1),
                (this._pendingShutdown = !1),
                (this._pendingIframes = {}),
                (this._queue = new Ws(
                  e,
                  r,
                  n,
                  function () {
                    return o._eventWatcher.bundleEvents();
                  },
                  t
                ));
              var s = new Xs(e, this._queue, new ia(e)),
                a = new Ia(e.window, this._queue);
              (this._watcher = new Yi()),
                (this._keep = new fa(e, this._queue)),
                (this._eventWatcher = new ys(
                  e,
                  this._queue,
                  this._keep,
                  this._watcher,
                  this._listeners,
                  function (e) {
                    return o._onFrameCreated(e);
                  },
                  function (e) {
                    return o._beforeFrameRemoved(e);
                  },
                  s,
                  a
                )),
                (this._consoleWatcher = new Ms(
                  e,
                  this._queue,
                  this._listeners
                )),
                (this._scheme = e.options.scheme),
                (this._script = e.options.script),
                (this._recHost = e.options.recHost),
                (this._cdnHost = e.options.cdnHost),
                (this._appHost = e.options.appHost),
                (this._orgId = e.options.orgId),
                (this._wnd = e.window);
            }
            return (
              (e.prototype.getPageResponse = function () {
                return this._pageRsp;
              }),
              (e.prototype.bundleUploadInterval = function () {
                return this._bundleUploadInterval;
              }),
              (e.prototype.orgSettings = function () {
                return this._orgSettings;
              }),
              (e.prototype.setInitConfig = function (e) {
                this._initConfig = e;
              }),
              (e.prototype.start = function (e, t, n) {
                var r = this;
                (this._onFullyStarted = t),
                  (this._onFailedToStart = n),
                  'onpagehide' in this._wnd
                    ? this._listeners.add(
                        this._wnd,
                        'pagehide',
                        !1,
                        function (e) {
                          (null == e ? void 0 : e.persisted)
                            ? r._queue.singSwanSong(je.Unload)
                            : r._onUnload();
                        }
                      )
                    : this._listeners.add(
                        this._wnd,
                        'unload',
                        !1,
                        function (e) {
                          r._onUnload();
                        }
                      ),
                  this._listeners.add(this._wnd, 'message', !1, function (e) {
                    var t = e.data;
                    if ('string' == typeof t) {
                      var n = e.source;
                      r.onMessageReceived(n, ya(t));
                    }
                  });
                var i = this._wnd.Document
                  ? this._wnd.Document.prototype
                  : this._wnd.document;
                (this._docCloseHook = ye(i, 'close')),
                  this._docCloseHook &&
                    this._docCloseHook.afterAsync(function () {
                      r._listeners.refresh();
                    });
              }),
              (e.prototype.tellAllFramesTo = function (e) {
                for (var t = 0, n = this._childFrames; t < n.length; t++) {
                  var r = n[t];
                  r.contentWindow && ga(r.contentWindow, e);
                }
              }),
              (e.prototype.queue = function () {
                return this._queue;
              }),
              (e.prototype.eventWatcher = function () {
                return this._eventWatcher;
              }),
              (e.prototype.console = function () {
                return this._consoleWatcher;
              }),
              (e.prototype.onDomLoad = function () {
                this._eventWatcher.onDomLoad();
              }),
              (e.prototype.onLoad = function () {
                this._eventWatcher.onLoad();
              }),
              (e.prototype.shutdown = function (e) {
                (this._pendingShutdown = !0),
                  this._eventWatcher.shutdown(e),
                  this._consoleWatcher.disable(),
                  this._listeners && this._listeners.clear(),
                  this._docCloseHook && this._docCloseHook.disable(),
                  this.tellAllFramesTo([pa.ShutdownFrame]);
              }),
              (e.prototype.getCurrentSessionURL = function (e) {
                var t = this._getCurrentSessionEnabled;
                if (t == Ta.NoInfoYet) return null;
                if (t == Ta.Disabled)
                  return this._scheme + '//' + this._appHost + '/opt/upgrade';
                var n = this.getCurrentSession();
                return n
                  ? (e && (n += ':' + this._ctx.time.wallTime()),
                    this._scheme +
                      '//' +
                      this._appHost +
                      '/ui/' +
                      this._ctx.options.orgId +
                      '/' +
                      (this._useClientSessionId ? 'client-' : '') +
                      'session/' +
                      encodeURIComponent(n))
                  : null;
              }),
              (e.prototype.getCurrentSession = function () {
                var e = this._getCurrentSessionEnabled;
                return e == Ta.NoInfoYet || e == Ta.Disabled
                  ? null
                  : this._userId && this._sessionId
                  ? this._userId + ':' + this._sessionId
                  : null;
              }),
              (e.prototype.setConsent = function (e) {
                var t,
                  n = this;
                null === (t = this._ctx.recording.identity) ||
                  void 0 === t ||
                  t.getConsentStore().setConsentState(e);
                var r = function () {
                    n._watcher.setConsent(e), n._queue.processEvents();
                  },
                  i = function () {
                    n._queue.enqueue({
                      Kind: Oe.SYS_SETCONSENT,
                      Args: [e, Be.Document],
                    });
                  };
                switch (e) {
                  case We.GrantConsent:
                    i(), r();
                    break;
                  case We.RevokeConsent:
                    r(), i();
                }
                this.tellAllFramesTo([pa.SetConsent, e]);
              }),
              (e.prototype.pageSignature = function () {
                return (
                  this._userId + ':' + this._sessionId + ':' + this._pageId
                );
              }),
              (e.prototype.getBundleApiVersion = function () {
                return this._useClientSessionId ? 'v2' : 'v1';
              }),
              (e.prototype.fireFsReady = function (e) {
                var t, n;
                void 0 === e && (e = !1),
                  null === (t = this._ctx.recording.observer) ||
                    void 0 === t ||
                    t.onStart(
                      null !== (n = this.getCurrentSessionURL()) && void 0 !== n
                        ? n
                        : '',
                      this._orgSettings
                    );
                var r = U(this._wnd, '_fs_ready', 'function');
                if (r)
                  try {
                    e ? r(!0) : r();
                  } catch (e) {}
              }),
              (e.prototype._onUnload = function () {
                this._queue.addUnload(je.Unload), Zn.stopAll();
              }),
              (e.prototype.isSafeResponse = function (e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  s,
                  a,
                  u,
                  c =
                    (null !==
                      (n =
                        null === (t = e.ElementBlocks) || void 0 === t
                          ? void 0
                          : t.length) && void 0 !== n
                      ? n
                      : 0) > 0 &&
                    (null !==
                      (o =
                        null ===
                          (i =
                            null === (r = e.OrgSettings) || void 0 === r
                              ? void 0
                              : r.UrlPrivacyConfig) || void 0 === i
                          ? void 0
                          : i.length) && void 0 !== o
                      ? o
                      : 0) > 0 &&
                    (null !==
                      (u =
                        null ===
                          (a =
                            null === (s = e.OrgSettings) || void 0 === s
                              ? void 0
                              : s.AttributeBlocklist) || void 0 === a
                          ? void 0
                          : a.length) && void 0 !== u
                      ? u
                      : 0) > 0;
                return (
                  c ||
                    Ae.sendToBugsnag('Invalid page response', 'error', {
                      rsp: e,
                    }),
                  c
                );
              }),
              (e.prototype.handleResponse = function (e, t) {
                var n,
                  r,
                  i,
                  o,
                  s = e.Flags,
                  a = s.AjaxFetch,
                  u = s.AjaxWatcher,
                  c = s.ClientSideRageClick,
                  h = s.ConsoleWatcher,
                  d = s.GetCurrentSession,
                  l = s.ResourceUploading,
                  p = s.UseClientSideId;
                (this._pageRsp = e),
                  (this._userId = e.UserIntId),
                  (this._sessionId = e.SessionIntId),
                  (this._pageId = e.PageIntId),
                  (this._serverPageStart = e.PageStart),
                  (this._getCurrentSessionEnabled = d
                    ? Ta.Enabled
                    : Ta.Disabled),
                  (this._orgSettings = e.OrgSettings),
                  _i(
                    null !== (n = this._orgSettings.UrlPrivacyConfig) &&
                      void 0 !== n
                      ? n
                      : ut.DefaultOrgSettings.UrlPrivacyConfig,
                    this._orgSettings.MaxUrlLength
                  );
                var f =
                  null !== (r = this._orgSettings.AttributeBlocklist) &&
                  void 0 !== r
                    ? r
                    : [];
                (null ===
                  (o =
                    null === (i = this._initConfig) || void 0 === i
                      ? void 0
                      : i.privacy) || void 0 === o
                  ? void 0
                  : o.attributeBlocklist) &&
                  (this._initConfig.privacy.attributeBlocklist.length,
                  f.push.apply(
                    f,
                    this._initConfig.privacy.attributeBlocklist.map(Ii)
                  )),
                  bi(f),
                  this._consoleWatcher.initializeMaxLogsPerPage(
                    this._orgSettings.MaxConsoleLogPerPage
                  ),
                  this._eventWatcher
                    .ajaxWatcher()
                    .initialize({
                      requests: this._orgSettings.HttpRequestHeadersAllowlist,
                      responses: this._orgSettings.HttpResponseHeadersAllowlist,
                      maxAjaxPayloadLength:
                        this._orgSettings.MaxAjaxPayloadLength,
                    }),
                  this._eventWatcher
                    .perfWatcher()
                    .start({
                      resourceUploader:
                        this._eventWatcher.getResourceUploader(),
                      recTimings:
                        !!this._orgSettings.RecordPerformanceResourceTiming,
                      recImgs: !!this._orgSettings.RecordPerformanceResourceImg,
                      maxPerfMarksPerPage:
                        this._orgSettings.MaxPerfMarksPerPage,
                    }),
                  this._watcher.initialize({
                    canvasWatcherMode: e.Flags.CanvasWatcherMode,
                    blocks: e.ElementBlocks,
                    deferreds: e.ElementDeferreds,
                    keeps: e.ElementKeeps,
                    watches: e.ElementWatches,
                  }),
                  this._keep.initialize(e.UrlKeeps),
                  this._watcher.initializeConsent(
                    null != t ? t : !!e.Consented
                  ),
                  'number' == typeof e.BundleUploadInterval &&
                    (this._bundleUploadInterval = e.BundleUploadInterval),
                  l && this.enableResourceUploading(),
                  u && this.enableAjaxWatcher(!!a),
                  h && this.enableConsoleWatcher(),
                  u &&
                    e.AjaxWatches &&
                    this._eventWatcher.ajaxWatcher().setWatches(e.AjaxWatches),
                  c && this._queue.enableEasyBake(),
                  p && (this._useClientSessionId = !0),
                  this._eventWatcher.watchEvents(e.Flags);
              }),
              (e.prototype.fullyStarted = function () {
                this._onFullyStarted && this._onFullyStarted();
              }),
              (e.prototype.enableResourceUploading = function () {
                (this._resourceUploadingEnabled = !0),
                  this._eventWatcher.initResourceUploading();
              }),
              (e.prototype.enableAjaxWatcher = function (e) {
                this.eventWatcher().ajaxWatcher().enable(e);
              }),
              (e.prototype.enableConsoleWatcher = function () {
                this.console().enable();
              }),
              (e.prototype.flushPendingChildFrameInits = function () {
                if (this._pendingChildFrameIdInits.length > 0) {
                  for (
                    var e = 0;
                    e < this._pendingChildFrameIdInits.length;
                    e++
                  )
                    this._pendingChildFrameIdInits[e]();
                  this._pendingChildFrameIdInits = [];
                }
              }),
              (e.prototype._inject = function (e) {
                var t = this;
                this._ctx.measurer.requestMeasureTask(
                  tn.Essential,
                  function () {
                    var n = ba(e),
                      r = t._injector({
                        frame: e,
                        orgId: t._orgId,
                        scheme: t._scheme,
                        script: t._script,
                        recHost: t._recHost,
                        cdnHost: t._cdnHost,
                        appHost: t._appHost,
                        namespace: I(t._wnd),
                        desc: n,
                        snippetVersion: z(t._wnd),
                      });
                    (r !== Ue.MissingDocumentHead &&
                      r !== Ue.MissingBodyOrChildren &&
                      r !== Ue.NoNonScriptElement) ||
                      !e.contentDocument ||
                      new MutationObserver(function (n, r) {
                        t._inject(e), r.disconnect();
                      }).observe(e.contentDocument, {
                        childList: !0,
                        subtree: !0,
                      }),
                      t._queue.enqueue({
                        Kind: Oe.FRAME_STATUS,
                        Args: [Wn(e), n, r],
                      });
                  }
                );
              }),
              (e.prototype.addInitEvent = function () {
                var e, t;
                (null === (e = this._initConfig) || void 0 === e
                  ? void 0
                  : e.privacy) &&
                  this._queue.enqueue({
                    Kind: Oe.INIT_API,
                    Args: [
                      'privacy',
                      [
                        'attributeBlocklist',
                        (null !==
                          (t = this._initConfig.privacy.attributeBlocklist) &&
                        void 0 !== t
                          ? t
                          : []
                        ).map(function (e) {
                          return [e.target, e.tag, e.name, e.action, e.type];
                        }),
                      ],
                    ],
                  });
              }),
              (e.prototype._onFrameCreated = function (e) {
                var t = Wn(e);
                if (t) {
                  this._childFrames.push(e);
                  var n = !1;
                  if (e.contentWindow)
                    try {
                      n = !!A(e.contentWindow);
                    } catch (e) {
                      n = !0;
                    }
                  var r = (function (e) {
                      var t = e.src,
                        n = location.protocol + '//' + location.host;
                      return (
                        !t ||
                        'about:blank' == t ||
                        ne(t, 'javascript:') ||
                        ne(t, n)
                      );
                    })(e),
                    i = e.contentWindow && e.contentWindow.postMessage;
                  (r && !n) || !i
                    ? r
                      ? this._initSameOriginIframe(e)
                      : ba(e)
                    : this._initCrossOriginIframe(e, t);
                } else ba(e);
              }),
              (e.prototype._initCrossOriginIframe = function (e, t) {
                e.contentWindow && e.contentWindow.postMessage
                  ? (ba(e), ga(e.contentWindow, [pa.GreetFrame, t]))
                  : ba(e);
              }),
              (e.prototype._initSameOriginIframe = function (e) {
                var t = this;
                ba(e), this._inject(e);
                var n = this._listeners.add(
                  e,
                  'load',
                  !1,
                  Ae.wrap(function () {
                    ba(e), t._inject(e);
                  })
                );
                this._childFrameListeners.set(e, n);
              }),
              (e.prototype._beforeFrameRemoved = function (e) {
                if (Wn(e)) {
                  var t = this._childFrameListeners.get(e);
                  void 0 !== t &&
                    (this._listeners.remove(t),
                    this._childFrameListeners['delete'](e)),
                    (this._childFrames = this._childFrames.filter(function (t) {
                      return t !== e;
                    }));
                }
              }),
              (e.prototype.onMessageReceived = function (e, t) {
                if (!e || e.parent == this._wnd)
                  switch (t[0]) {
                    case pa.EvtBundle:
                      var n = t[1],
                        r = t[2],
                        i = this.pageSignature();
                      if (i !== r)
                        return (
                          Kn(
                            {
                              msg: 'Page signature mismatch',
                              pageSignature: i,
                              messageSignature: r,
                            },
                            1024
                          ),
                          void (e && ga(e, [pa.ShutdownFrame]))
                        );
                      n.length > 0 && this._queue.sendEvents(i, n);
                      break;
                    case pa.RequestFrameId:
                      if (!e) return;
                      var o = this._getFrameId(e);
                      void 0 === o ||
                        ((this._pendingIframes[o] = !1),
                        this._sendFrameIdToInnerFrame(e, o));
                    case pa.Unknown:
                  }
              }),
              (e.prototype._getFrameId = function (e) {
                for (var t = 0, n = this._childFrames; t < n.length; t++) {
                  var r = n[t];
                  if (r.contentWindow === e) return Wn(r);
                }
              }),
              (e.prototype._sendFrameIdToInnerFrame = function (e, t) {
                var n = this,
                  r = function () {
                    var r = [];
                    0 != n._frameId &&
                      null !== n._frameId &&
                      (r = n._parentIds
                        ? n._parentIds.concat(n._frameId)
                        : [n._frameId]);
                    var i = n._ctx.time.startTime();
                    ga(e, [
                      pa.SetFrameId,
                      t,
                      r,
                      i,
                      n._scheme,
                      n._script,
                      n._appHost,
                      n._orgId,
                      n._initConfig,
                      n._pageRsp,
                      n._watcher.getConsent(),
                      n._ctx.time.now(),
                    ]);
                  };
                null == this._frameId
                  ? this._pendingChildFrameIdInits.push(r)
                  : r();
              }),
              (e.prototype.enqueueDocumentProperties = function (e) {
                var t = this;
                this._ctx.measurer.requestMeasureTask(
                  tn.Essential,
                  function () {
                    t._queue.enqueue({
                      Kind: Oe.DOCUMENT_PROPERTIES,
                      Args: [Wn(e.scrollingElement), e.compatMode],
                    });
                  }
                );
              }),
              e
            );
          })(),
          xa = (function () {
            function e(e, t, n, r) {
              void 0 === r && (r = $n),
                (this._ctx = e),
                (this._protocol = t),
                (this._identity = n),
                (this._timeoutFactory = r),
                this.sing();
            }
            return (
              (e.prototype.store = function (e) {
                var t;
                e.bundles.length;
                var n = le({
                  Bundles: e.bundles,
                  IsNewSession: e.isNewSession,
                  LastBundleTime: e.lastBundleTime,
                  OrgId: this._identity.getOrgId(),
                  PageId: e.pageId,
                  PageStartTime: this._ctx.time.startTime(),
                  RecHost: da(this._ctx),
                  ServerBundleTime: e.serverBundleTime,
                  ServerPageStart: e.serverPageStart,
                  SessionId:
                    null !== (t = this._identity.getSessionId()) && void 0 !== t
                      ? t
                      : '',
                  UserId: this._identity.getUserId(),
                  Version: e.version,
                });
                if (!(n.length > 2e6))
                  try {
                    localStorage._fs_swan_song = n;
                  } catch (e) {}
              }),
              (e.prototype.sing = function () {
                try {
                  var e = this.purge();
                  if (void 0 === e) return;
                  if (!(e.Bundles && e.UserId && e.SessionId && e.PageId))
                    return;
                  e.OrgId || (e.OrgId = this._identity.getOrgId()),
                    e.Bundles.length > 0 &&
                      (e.Bundles.length, this._sendSwanSongBundles(e));
                } catch (e) {}
              }),
              (e.prototype.purge = function () {
                try {
                  if ('_fs_swan_song' in localStorage) {
                    var e = localStorage._fs_swan_song;
                    return delete localStorage._fs_swan_song, _e(e);
                  }
                } catch (e) {}
              }),
              (e.prototype._sendSwanSongBundles = function (e, t) {
                return (
                  void 0 === t && (t = 0),
                  (0, i.__awaiter)(this, void 0, Jt, function () {
                    var n, r, o, s;
                    return (0, i.__generator)(this, function (a) {
                      switch (a.label) {
                        case 0:
                          if (
                            ((n = null),
                            !ee(e.Bundles) ||
                              0 === e.Bundles.length ||
                              void 0 === e.Bundles[0])
                          )
                            return [2];
                          1 == e.Bundles.length &&
                            (n =
                              this._ctx.time.wallTime() -
                              (e.LastBundleTime || 0)),
                            (a.label = 1);
                        case 1:
                          return (
                            a.trys.push([1, 3, , 4]),
                            [
                              4,
                              this._protocol.bundle({
                                bundle: e.Bundles[0],
                                deltaT: n,
                                isNewSession: e.IsNewSession,
                                orgId: e.OrgId,
                                pageId: e.PageId,
                                recHost: e.RecHost,
                                serverBundleTime: e.ServerBundleTime,
                                serverPageStart: e.ServerPageStart,
                                sessionId: e.SessionId,
                                userId: e.UserId,
                                version: e.Version,
                              }),
                            ]
                          );
                        case 2:
                          return (
                            (r = a.sent()),
                            (o = r[1]),
                            e.Bundles[0].Evts.length,
                            e.Bundles[0].Seq,
                            e.Bundles.shift(),
                            e.Bundles.length > 0 &&
                              this._sendSwanSongBundles(
                                (0, i.__assign)((0, i.__assign)({}, e), {
                                  ServerBundleTime: o.BundleTime,
                                })
                              ),
                            [3, 4]
                          );
                        case 3:
                          return (s = a.sent()) instanceof ta && na(s.status)
                            ? [2]
                            : ((this._lastSwanSongRetryTimeout =
                                new this._timeoutFactory(
                                  this._sendSwanSongBundles,
                                  this._protocol.exponentialBackoffMs(t, !0),
                                  this,
                                  e,
                                  t + 1
                                ).start()),
                              [3, 4]);
                        case 4:
                          return [2];
                      }
                    });
                  })
                );
              }),
              e
            );
          })(),
          Ra = (function () {
            function e() {}
            return (
              (e.prototype.encode = function (e) {
                return e;
              }),
              e
            );
          })(),
          Pa = (function () {
            function e() {
              (this.dict = { idx: -1, map: {} }),
                (this.nodeCount = 1),
                (this.startIdx = 0);
            }
            return (
              (e.prototype.encode = function (t) {
                if (0 == t.length) return [];
                var n,
                  r,
                  i = t[0],
                  o = Object.prototype.hasOwnProperty.call(this.dict.map, i)
                    ? this.dict.map[i]
                    : void 0,
                  s = [],
                  a = 1;
                function u() {
                  o ? (a > 1 ? s.push([o.idx, a]) : s.push(o.idx)) : s.push(i);
                }
                for (n = 1; n < t.length; n++)
                  if (
                    ((r = t[n]),
                    o && Object.prototype.hasOwnProperty.call(o.map, r))
                  )
                    a++, (i = r), (o = o.map[r]);
                  else {
                    u();
                    var c = this.startIdx + n - a;
                    null == o &&
                      this.nodeCount < e.MAX_NODES &&
                      ((o = { idx: c, map: {} }),
                      (this.dict.map[i] = o),
                      this.nodeCount++),
                      o &&
                        this.nodeCount < e.MAX_NODES &&
                        ((o.map[r] = { idx: c, map: {} }), this.nodeCount++),
                      (a = 1),
                      (i = r),
                      (o = Object.prototype.hasOwnProperty.call(
                        this.dict.map,
                        r
                      )
                        ? this.dict.map[r]
                        : void 0);
                  }
                return u(), (this.startIdx += t.length), s;
              }),
              (e.MAX_NODES = 1e4),
              e
            );
          })(),
          Oa =
            (((ka = {})[Oe.PERF_ENTRY] = !0), (ka[Oe.AJAX_REQUEST] = !0), ka),
          Ma = (function () {
            function e(e, t, n, r, i, o) {
              void 0 === r && (r = !0),
                void 0 === i && (i = Jn),
                void 0 === o && (o = $n),
                (this._ctx = e),
                (this._protocol = t),
                (this._activityModel = n),
                (this._compress = r),
                (this._tickerFactory = i),
                (this._pendingBundleFailed = !1),
                (this._backoffRetries = 0),
                (this._backoffTime = 0),
                (this._bundleSeq = 1),
                (this._lastPostTime = 0),
                (this._isNewSession = !1),
                (this._compressors = {}),
                (this._largePageSize = 16e6),
                (this._serverBundleTime = 0),
                (this._inProgressBundle = new La(1)),
                (this._bundleQueue = []),
                (this._identity = e.recording.identity),
                (this._scheme = e.options.scheme),
                (this._lastBundleTime = e.time.wallTime()),
                (this._swanSong = new xa(e, this._protocol, this._identity, o));
            }
            return (
              (e.prototype.setPageData = function (e) {
                this._pageDataEvent = e;
              }),
              (e.prototype.onShutdown = function (e) {
                this._onShutdown = e;
              }),
              (e.prototype.scheme = function () {
                return this._scheme;
              }),
              (e.prototype.enqueueEvents = function (e, t) {
                for (var n = 0, r = t; n < r.length; n++) {
                  var i = r[n];
                  this._inProgressBundle.pushEvent(i);
                }
              }),
              (e.prototype.initUploadTicker = function () {
                this._uploadTicker = new this._tickerFactory(
                  this._ctx.recording.bundleUploadInterval()
                );
              }),
              (e.prototype.startPipeline = function (e) {
                var t,
                  n = this;
                (this._pageId = e.pageId),
                  (this._serverPageStart = e.serverPageStart),
                  (this._isNewSession = e.isNewSession),
                  this._enqueueAndSendBundle(),
                  this._uploadTicker || this.initUploadTicker(),
                  null === (t = this._uploadTicker) ||
                    void 0 === t ||
                    t.start(function () {
                      n._enqueueAndSendBundle();
                    });
              }),
              (e.prototype.stopPipeline = function () {
                this._uploadTicker && this._uploadTicker.stop(),
                  (this._inProgressBundle = new La(
                    this._inProgressBundle.bundle.Seq
                  )),
                  (this._bundleQueue = []),
                  (this._compressors = {}),
                  (this._pageId = void 0),
                  (this._serverPageStart = void 0),
                  (this._isNewSession = !1);
              }),
              (e.prototype.flush = function () {
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  return (0, i.__generator)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return (
                          this._enqueueNextBundle(),
                          [4, this._maybeSendNextBundle()]
                        );
                      case 1:
                        return e.sent(), [2];
                    }
                  });
                });
              }),
              (e.prototype.singSwanSong = function () {
                var e;
                if (this._pageId) {
                  this._enqueueNextBundle();
                  var t = [];
                  this._pendingBundle && t.push(this._pendingBundle);
                  for (var n = 0, r = this._bundleQueue; n < r.length; n++) {
                    var i = r[n];
                    t.push(i);
                  }
                  if (0 !== t.length) {
                    void 0 !== this._serverPageStart &&
                      this._swanSong.store({
                        pageId: this._pageId,
                        bundles: t,
                        lastBundleTime: this._lastBundleTime,
                        serverPageStart: this._serverPageStart,
                        serverBundleTime: this._serverBundleTime,
                        isNewSession: this._isNewSession,
                        version: this._ctx.recording.bundleApiVersion(),
                      });
                    for (
                      var o = 0, s = t;
                      o < s.length &&
                      ((i = s[o]),
                      this._protocol.bundleBeacon({
                        bundle: i,
                        deltaT: null,
                        orgId: this._identity.getOrgId(),
                        pageId: this._pageId,
                        serverBundleTime: this._serverBundleTime,
                        serverPageStart: this._serverPageStart,
                        isNewSession: this._isNewSession,
                        sessionId:
                          null !== (e = this._identity.getSessionId()) &&
                          void 0 !== e
                            ? e
                            : '',
                        userId: this._identity.getUserId(),
                        version: this._ctx.recording.bundleApiVersion(),
                      }));
                      o++
                    );
                  }
                }
              }),
              (e.prototype._enqueueAndSendBundle = function () {
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  return (0, i.__generator)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return this._pendingBundle
                          ? (this._pendingBundleFailed &&
                              this._sendPendingBundle(),
                            [2])
                          : (this._inProgressBundle.hasActiveEvents() &&
                              this._enqueueNextBundle(),
                            [4, this._maybeSendNextBundle()]);
                      case 1:
                        return e.sent(), [2];
                    }
                  });
                });
              }),
              (e.prototype._enqueueNextBundle = function () {
                if (this._inProgressBundle.hasAnyEvents()) {
                  var e = this._compressBundle(this._inProgressBundle.bundle);
                  return (
                    (this._inProgressBundle =
                      this._inProgressBundle.createNext()),
                    this._bundleQueue.push(e),
                    e
                  );
                }
              }),
              (e.prototype._maybeSendNextBundle = function () {
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  return (0, i.__generator)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return this._pageId &&
                          this._serverPageStart &&
                          !this._pendingBundle &&
                          0 != this._bundleQueue.length
                          ? ((this._pendingBundle = this._bundleQueue.shift()),
                            [4, this._sendPendingBundle()])
                          : [2];
                      case 1:
                        return e.sent(), [2];
                    }
                  });
                });
              }),
              (e.prototype._sendPendingBundle = function () {
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  var e, t, n, r;
                  return (0, i.__generator)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        if ((e = this._ctx.time.wallTime()) < this._backoffTime)
                          return [2];
                        if (!(t = this._pendingBundle)) return [2];
                        (this._pendingBundleFailed = !1),
                          (this._lastPostTime = this._lastBundleTime = e),
                          (i.label = 1);
                      case 1:
                        return (
                          i.trys.push([1, 5, , 6]), [4, this._sendBundle(t)]
                        );
                      case 2:
                        return (n = i.sent())
                          ? (t.Seq,
                            t.Evts.length,
                            (this._serverBundleTime = n.BundleTime),
                            (this._pendingBundle = void 0),
                            (this._backoffTime = 0),
                            (this._backoffRetries = 0),
                            this._ctx.time.wallTime() - this._lastPostTime >
                            this._ctx.recording.bundleUploadInterval()
                              ? [4, this._maybeSendNextBundle()]
                              : [3, 4])
                          : [2];
                      case 3:
                        i.sent(), (i.label = 4);
                      case 4:
                        return [3, 6];
                      case 5:
                        if ((r = i.sent()) instanceof ta) {
                          if (na(r.status))
                            return (
                              206 == r.status
                                ? Ae.sendToBugsnag(
                                    'Failed to send bundle, probably because of its large size',
                                    'error'
                                  )
                                : r.status >= 500 &&
                                  Ae.sendToBugsnag(
                                    'Failed to send bundle, recording outage likely',
                                    'error'
                                  ),
                              this._onShutdown && this._onShutdown(),
                              [2]
                            );
                        } else Ae.sendToBugsnag('Failed to send bundle, unknown err', 'error', { err: r });
                        return (
                          (this._pendingBundleFailed = !0),
                          (this._backoffTime =
                            this._lastPostTime +
                            this._protocol.exponentialBackoffMs(
                              this._backoffRetries++,
                              !1
                            )),
                          [3, 6]
                        );
                      case 6:
                        return [2];
                    }
                  });
                });
              }),
              (e.prototype._sendBundle = function (e) {
                var t, n;
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  var r, o, s, a;
                  return (0, i.__generator)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return this._pageId
                          ? (window,
                            (r =
                              this._activityModel.getMsSinceLastUserAcivity()),
                            [
                              4,
                              this._protocol.bundle({
                                bundle: e,
                                deltaT: null,
                                lastUserActivity: r,
                                orgId: this._identity.getOrgId(),
                                pageId: this._pageId,
                                serverBundleTime: this._serverBundleTime,
                                serverPageStart: this._serverPageStart,
                                isNewSession: this._isNewSession,
                                sessionId:
                                  null !==
                                    (t = this._identity.getSessionId()) &&
                                  void 0 !== t
                                    ? t
                                    : '',
                                userId: this._identity.getUserId(),
                                version: this._ctx.recording.bundleApiVersion(),
                              }),
                            ])
                          : [2];
                      case 1:
                        return (
                          (o = i.sent()),
                          (s = o[0]),
                          (a = o[1]),
                          null === (n = this._ctx.recording.observer) ||
                            void 0 === n ||
                            n.onBundleSent(s),
                          s > this._largePageSize &&
                            this._bundleSeq > 16 &&
                            this._ctx.recording.splitPage(je.Size),
                          window,
                          [2, a]
                        );
                    }
                  });
                });
              }),
              (e.prototype._compressBundle = function (e) {
                if (0 === e.Evts.length) return e;
                for (var t = [], n = 0, r = e.Evts; n < r.length; n++) {
                  var o = r[n];
                  switch (o.Kind) {
                    case Oe.SET_FRAME_BASE:
                      var s = Ua(o.PIds, o.FId);
                      delete this._compressors[s];
                      break;
                    case Oe.MUT_INSERT:
                      var a = _();
                      (o.Args[2] = this._encodeStream(
                        o.PIds,
                        o.FId,
                        o.Args[2]
                      )),
                        t.push(_() - a);
                      break;
                    case Oe.MUT_SHADOW:
                      (a = _()),
                        (o.Args[1] = this._encodeStream(
                          o.PIds,
                          o.FId,
                          o.Args[1]
                        )),
                        t.push(_() - a);
                  }
                }
                var u = e.Evts[e.Evts.length - 1];
                if (
                  (this._pageDataEvent &&
                    e.Evts.push(
                      (0, i.__assign)(
                        (0, i.__assign)({}, u),
                        this._pageDataEvent
                      )
                    ),
                  0 === t.length)
                )
                  return e;
                var c = t[0],
                  h = t.slice(1);
                return (
                  e.Evts.push(
                    (0, i.__assign)((0, i.__assign)({}, u), {
                      Kind: Oe.TIMING,
                      Args: [
                        (0, i.__spreadArray)(
                          [
                            De.Internal,
                            Le.Serialization,
                            Ne.LzEncoding,
                            u.When,
                            c,
                          ],
                          h.map(function (e) {
                            return [Ne.LzEncoding, e];
                          })
                        ),
                      ],
                    })
                  ),
                  e
                );
              }),
              (e.prototype._encodeStream = function (e, t, n) {
                void 0 === e && (e = []), void 0 === t && (t = 0);
                var r = Ua(e, t);
                return (
                  this._compressors[r] ||
                    (this._compressors[r] = this._compress
                      ? new Pa()
                      : new Ra()),
                  this._compressors[r].encode(n)
                );
              }),
              e
            );
          })(),
          La = (function () {
            function e(e) {
              (this._active = !1),
                (this._bundle = { Seq: e, When: -1, Evts: [] });
            }
            return (
              Object.defineProperty(e.prototype, 'bundle', {
                get: function () {
                  return this._bundle;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.createNext = function () {
                return new e(this._bundle.Seq + 1);
              }),
              (e.prototype.hasAnyEvents = function () {
                return this._bundle.Evts.length > 0;
              }),
              (e.prototype.hasActiveEvents = function () {
                return this._active;
              }),
              (e.prototype.pushEvent = function (e) {
                Oa[e.Kind] || (this._active = !0),
                  this._bundle.When < 0 && (this._bundle.When = e.When),
                  this._bundle.Evts.push(e);
              }),
              e
            );
          })();
        function Ua(e, t) {
          void 0 === e && (e = []), void 0 === t && (t = 0);
          for (var n = '', r = 0, i = e; r < i.length; r++) n += '/' + i[r];
          return n + '/' + t;
        }
        var Na = new RegExp('(^\\?|&)_fs_preview=(?:true|false)(&|$)'),
          Da = (function () {
            function e(e, t, n) {
              (this._wnd = t),
                (this._clientStore = n),
                (this._previewModeCookieName = 'fs_preview_' + e);
            }
            return (
              (e.prototype.isPreviewMode = function () {
                return (
                  this._queryContainsPreviewModeFlag() ||
                  this._clientStoreContainsPreviewModeFlag()
                );
              }),
              (e.prototype.clear = function () {
                this._clientStore.setValue(
                  this._previewModeCookieName,
                  '',
                  new Date(1970, 1, 1).toUTCString()
                );
              }),
              (e.prototype.write = function () {
                var e = this._queryContainsPreviewModeFlag(),
                  t = this._queryContainsClearPreviewModeFlag();
                (e || t) &&
                  (e
                    ? this._clientStore.setValue(
                        this._previewModeCookieName,
                        'true',
                        new Date(_() + 432e5).toUTCString()
                      )
                    : this.clear(),
                  this._removeQuery());
              }),
              (e.prototype._removeQuery = function () {
                if (this._wnd.history) {
                  var e = location.search.replace(Na, function (e, t, n) {
                    return n ? t : '';
                  });
                  this._wnd.history.replaceState(
                    {},
                    '',
                    this._wnd.location.href.replace(location.search, e)
                  );
                }
              }),
              (e.prototype._queryContainsPreviewModeFlag = function () {
                return (
                  this._wnd.document.location.search.indexOf(
                    '_fs_preview=true'
                  ) > -1
                );
              }),
              (e.prototype._queryContainsClearPreviewModeFlag = function () {
                return (
                  this._wnd.document.location.search.indexOf(
                    '_fs_preview=false'
                  ) > -1
                );
              }),
              (e.prototype._clientStoreContainsPreviewModeFlag = function () {
                return !!this._clientStore.getValue(
                  this._previewModeCookieName
                );
              }),
              e
            );
          })();
        function Fa(e) {
          var t, n, r;
          return {
            Kind: Oe.CAPTURE_SOURCE,
            Args: [
              e.type,
              e.entrypoint,
              'dom',
              null ===
                (n =
                  null === (t = e.source) || void 0 === t
                    ? void 0
                    : t.integration) || void 0 === n
                ? void 0
                : n.slice(0, 1024),
              !!(null === (r = e.source) || void 0 === r
                ? void 0
                : r.userInitiated),
            ],
          };
        }
        function Ha(e) {
          return (0, i.__awaiter)(this, void 0, Jt, function () {
            var t, n, r, o;
            return (0, i.__generator)(this, function (i) {
              if (
                ((t = (function (e) {
                  return 'msCrypto' in e ? e.msCrypto : e.crypto;
                })(e)),
                'function' == typeof (null == t ? void 0 : t.randomUUID))
              )
                return [2, t.randomUUID()];
              for (
                n = new Uint8Array(16),
                  t.getRandomValues(n),
                  n[6] = (15 & n[6]) | 64,
                  n[8] = (63 & n[8]) | 128,
                  r = [],
                  o = 0;
                o < n.length;
                o++
              )
                r.push(
                  (function (e, t, n) {
                    for (var r = e; r.length < 2; ) r = '0' + r;
                    return r;
                  })(n[o].toString(16))
                );
              return [
                2,
                [
                  '' + r[0] + r[1] + r[2] + r[3],
                  '' + r[4] + r[5],
                  '' + r[6] + r[7],
                  '' + r[8] + r[9],
                  '' + r[10] + r[11] + r[12] + r[13] + r[14] + r[15],
                ].join('-'),
              ];
            });
          });
        }
        var qa =
          /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        function Wa(e) {
          return 36 === e.length && qa.test(e);
        }
        var Ba = void 0,
          ja = 18e5,
          Va = (function () {
            function e(e, t, n, r) {
              void 0 === r && (r = $n),
                (this._ctx = e),
                (this._activityModel = t),
                (this._store = n),
                (this.lastUserActivityTS = 0),
                (this.lastUserActivityTimeout = new r(
                  this._onLastUserActivity.bind(this)
                ));
            }
            return (
              (e.prototype.createUserSessionPage = function () {
                var e;
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  var t, n, r, o, s, a;
                  return (0, i.__generator)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          (t = this.getExistingSession()),
                          (n = t === Ba),
                          (r = this._ctx.time.wallTime()),
                          n ? [4, this._getUserId()] : [3, 3]
                        );
                      case 1:
                        return (o = i.sent()), [4, Ha(this._ctx.window)];
                      case 2:
                        return (
                          (s = i.sent()),
                          this._store.create({
                            userId: o,
                            sessionId: s,
                            sessionStartTime: r,
                            lastUserActivityTime: r,
                            pageCount: 1,
                          }),
                          [3, 4]
                        );
                      case 3:
                        this._store.setLastUserActivityTimeMS(r),
                          this._store.setPageCount(
                            (null !== (e = this._store.getPageCount()) &&
                            void 0 !== e
                              ? e
                              : 0) + 1
                          ),
                          (i.label = 4);
                      case 4:
                        return [4, Ha(this._ctx.window)];
                      case 5:
                        return (
                          (a = i.sent()),
                          [
                            2,
                            {
                              userId: this._store.getUserId(),
                              sessionId: this._store.getSessionId(),
                              pageId: a,
                              isNewSession: n,
                            },
                          ]
                        );
                    }
                  });
                });
              }),
              (e.prototype.getExistingSession = function () {
                var e,
                  t,
                  n,
                  r = this._store.getUserId();
                if (!r || !Wa(r)) return Ba;
                var i = this._store.getSessionId();
                if (!i || !Wa(i)) return Ba;
                var o = this._ctx.time.wallTime(),
                  a =
                    null !== (e = this._store.getSessionStartTimeMS()) &&
                    void 0 !== e
                      ? e
                      : 0,
                  u = s.mathAbs(o - a);
                if (0 === a || u >= 864e5) return Ba;
                var c =
                  null !== (t = this._store.getLastUserActivityTimeMS()) &&
                  void 0 !== t
                    ? t
                    : a;
                return s.mathAbs(o - c) >= ja ||
                  (null !== (n = this._store.getPageCount()) && void 0 !== n
                    ? n
                    : 0) >= 250
                  ? Ba
                  : i;
              }),
              (e.prototype.start = function () {
                this.lastUserActivityTimeout.start(3e5);
              }),
              (e.prototype.stop = function () {
                this.lastUserActivityTimeout.stop();
              }),
              (e.prototype._getUserId = function () {
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  var e;
                  return (0, i.__generator)(this, function (t) {
                    return (e = this._store.getUserId()) && Wa(e)
                      ? [2, e]
                      : [2, Ha(this._ctx.window)];
                  });
                });
              }),
              (e.prototype._onLastUserActivity = function () {
                var e = this._activityModel.getLastUserAcitivityTS();
                e !== this.lastUserActivityTS &&
                  ((this.lastUserActivityTS = e),
                  this._store.setLastUserActivityTimeMS(e),
                  this.start());
              }),
              e
            );
          })(),
          Ka = (function (e) {
            function t(t, n, r, i, o, s, a) {
              void 0 === r && (r = !0),
                void 0 === i && (i = new Hs(t)),
                void 0 === o && (o = new Ma(t, n, i, r)),
                void 0 === s && (s = Jn),
                void 0 === a && (a = Ea);
              var u,
                c = e.call(this, t, s, i, o, a) || this;
              return (
                (c._protocol = n),
                (c._transport = o),
                (c._domLoaded = !1),
                (c._recordingDisabled = !1),
                (c._integrationScriptFetched = !1),
                o.onShutdown(function () {
                  return c.shutdown(je.SettingsBlocked);
                }),
                (c._doc = c._wnd.document),
                (c._frameId = 0),
                (c._identity = t.recording.identity),
                (c._previewMode = new Da(
                  c._orgId,
                  c._wnd,
                  c._identity.getClientStore()
                )),
                (c._getCurrentSessionEnabled = Ta.NoInfoYet),
                (c._sessionLifecycle = new Va(t, i, c._identity)),
                (u = function (e) {
                  if ((c._eventWatcher.shutdown(je.Api), e)) {
                    var t = c._doc.getElementById(e);
                    t &&
                      c._embedToken &&
                      t.setAttribute('_fs_embed_token', c._embedToken);
                  }
                }),
                (c._wnd._fs_shutdown = u),
                c
              );
            }
            return (
              (0, i.__extends)(t, e),
              (t.prototype.onDomLoad = function () {
                var t = this;
                e.prototype.onDomLoad.call(this),
                  (this._domLoaded = !0),
                  this._injectIntegrationScript(function () {
                    t.fireFsReady(t._recordingDisabled);
                  });
              }),
              (t.prototype._getReplayFlags = function () {
                var e = U(this._wnd, '_fs_replay_flags');
                if (
                  /[?&]_fs_force_session=true(&|#|$)/.test(location.search) &&
                  ((e += ',forceSession'), this._wnd.history)
                ) {
                  var t = location.search.replace(
                    /(^\?|&)_fs_force_session=true(&|$)/,
                    function (e, t, n) {
                      return n ? t : '';
                    }
                  );
                  this._wnd.history.replaceState(
                    {},
                    '',
                    this._wnd.location.href.replace(location.search, t)
                  );
                }
                return e;
              }),
              (t.prototype.start = function (t, n, r) {
                var o, s, a;
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  var u,
                    c,
                    h,
                    d,
                    l,
                    p,
                    f,
                    _,
                    v,
                    g,
                    y,
                    m,
                    S,
                    w,
                    E,
                    b,
                    T,
                    C,
                    I,
                    k,
                    A,
                    x,
                    R,
                    P = this;
                  return (0, i.__generator)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        e.prototype.start.call(this, t, n, r),
                          (u = this._getReplayFlags()),
                          (c = mn(this._doc)),
                          (h = c[0]),
                          (d = c[1]),
                          (O = this._wnd),
                          (M = 0),
                          (L = 0),
                          (l =
                            null == O.screen
                              ? [M, L]
                              : ((M = parseInt(String(O.screen.width), 10)),
                                (L = parseInt(String(O.screen.height), 10)),
                                [
                                  (M = isNaN(M) ? 0 : M),
                                  (L = isNaN(L) ? 0 : L),
                                ])),
                          (p = l[0]),
                          (f = l[1]),
                          (_ = ''),
                          t || (_ = this._identity.getUserId()),
                          (v =
                            null !==
                              (a =
                                null ===
                                  (s =
                                    null === (o = this._ctx) || void 0 === o
                                      ? void 0
                                      : o.recording) || void 0 === s
                                  ? void 0
                                  : s.preroll) && void 0 !== a
                              ? a
                              : -1),
                          (g = function () {
                            return hi(Mr(P._wnd), {
                              source: 'page',
                              type: 'base',
                            });
                          }),
                          (y = function () {
                            return hi(P._wnd.location.href, {
                              source: 'page',
                              type: 'url',
                            });
                          }),
                          (m = function () {
                            return '' === P._doc.referrer
                              ? ''
                              : hi(P._doc.referrer, {
                                  source: 'page',
                                  type: 'referrer',
                                });
                          }),
                          (S = (function (e) {
                            var t,
                              n = '_fs_tab_id';
                            try {
                              var r = e.sessionStorage.getItem(n);
                              if (r) return r;
                              var i = Math.floor(1e17 * Math.random()).toString(
                                16
                              );
                              return (
                                e.sessionStorage.setItem(n, i),
                                null !== (t = e.sessionStorage.getItem(n)) &&
                                void 0 !== t
                                  ? t
                                  : void 0
                              );
                            } catch (e) {
                              return;
                            }
                          })(this._wnd)),
                          (w = {
                            OrgId: this._orgId,
                            UserId: _,
                            Url: y(),
                            Base: g(),
                            Width: h,
                            Height: d,
                            ScreenWidth: p,
                            ScreenHeight: f,
                            SnippetVersion: z(this._wnd),
                            Referrer: m(),
                            Preroll: v,
                            Doctype: fe(this._doc),
                            CompiledVersion: '62394952df',
                            CompiledTimestamp: 1676333975,
                            AppId: this._identity.getAppId(),
                            TabId: S,
                            PreviewMode:
                              this._previewMode.isPreviewMode() || void 0,
                          }),
                          u && (w.ReplayFlags = u),
                          (i.label = 1);
                      case 1:
                        return (
                          i.trys.push([1, 5, , 6]),
                          (E = this._processOverrides),
                          [4, this._protocol.page(w)]
                        );
                      case 2:
                        return [4, E.apply(this, [i.sent()])];
                      case 3:
                        return (
                          (R = i.sent()),
                          this.isSafeResponse(R)
                            ? this._pendingShutdown
                              ? [2]
                              : (window,
                                this.handleResponse(R),
                                window,
                                this._handleIdentity(
                                  R.CookieDomain,
                                  R.UserIntId,
                                  R.SessionIntId,
                                  R.PageIntId,
                                  R.EmbedToken
                                ),
                                R.Flags.UseStatelessConsent ||
                                  this._identity
                                    .getConsentStore()
                                    .setConsentState(!!R.Consented),
                                this._handleIntegrationScript(),
                                R.PreviewMode &&
                                  this._maybeInjectPreviewScript(),
                                (b = (function (e) {
                                  return U(e, '_fs_pagestart', 'function');
                                })(this._wnd)),
                                b && b(),
                                this._queue.enqueueFirst(
                                  this._eventWatcher.getNavigateEvent(
                                    this._wnd.location.href,
                                    Oe.ENTRY_NAVIGATE
                                  )
                                ),
                                (T = !!R.Consented),
                                this._queue.enqueueFirst({
                                  Kind: Oe.SYS_REPORTCONSENT,
                                  Args: [T, Be.Document],
                                }),
                                (C = fe(this._doc)),
                                (I = y()),
                                (k = m()),
                                (A = g()),
                                this._queue.enqueueFirst({
                                  Kind: Oe.SET_FRAME_BASE,
                                  Args: [
                                    hi(Mr(this._wnd), {
                                      source: 'event',
                                      type: Oe.SET_FRAME_BASE,
                                    }),
                                    C,
                                    I,
                                    k,
                                  ],
                                }),
                                this._transport.setPageData({
                                  Kind: Oe.PAGE_DATA,
                                  Args: [
                                    I,
                                    A,
                                    h,
                                    d,
                                    p,
                                    f,
                                    z(this._wnd),
                                    k,
                                    C,
                                    v,
                                    _,
                                    R.PageStart,
                                    we(this._wnd),
                                    this._wnd.navigator.userAgent,
                                    S,
                                    !!R.IsNewSession,
                                  ],
                                }),
                                this._queue.enqueue({
                                  Kind: Oe.SCRIPT_COMPILED_VERSION,
                                  Args: ['62394952df'],
                                }),
                                this._queue.enqueue(Fa({ type: 'default' })),
                                this._eventWatcher.addVisibilityChangeEvent(),
                                this.addInitEvent(),
                                [
                                  4,
                                  this._queue.startPipeline({
                                    pageId: R.PageIntId,
                                    serverPageStart: R.PageStart,
                                    isNewSession: !!R.IsNewSession,
                                  }),
                                ])
                            : [2, this._disableBecauseRecPageSaidSo()]
                        );
                      case 4:
                        return (
                          i.sent(),
                          this.enqueueDocumentProperties(this._doc),
                          this.fullyStarted(),
                          [3, 6]
                        );
                      case 5:
                        return (
                          (x = i.sent()) instanceof ta &&
                            (R = x.data) &&
                            R.user_id &&
                            R.cookie_domain &&
                            R.reason_code === rt.ReasonBlockedTrafficRamping &&
                            _ !== R.user_id &&
                            this._handleIdentity(
                              R.cookie_domain,
                              R.user_id,
                              '',
                              '',
                              ''
                            ),
                          this._disableBecauseRecPageSaidSo(),
                          [3, 6]
                        );
                      case 6:
                        return [2];
                    }
                    var O, M, L;
                  });
                });
              }),
              (t.prototype._handleIntegrationScript = function () {
                var e = this;
                (this._integrationScriptFetched = !0),
                  this._injectIntegrationScript(function () {
                    e.fireFsReady(e._recordingDisabled);
                  });
              }),
              (t.prototype._handleIdentity = function (e, t, n, r, i) {
                var o = this._identity;
                o.setIds(this._wnd, e, t, n),
                  (this._embedToken = i),
                  this._previewMode.write(),
                  o.getUserId(),
                  o.getSessionId();
              }),
              (t.prototype._injectIntegrationScript = function (e) {
                var t, n;
                if (this._domLoaded && this._integrationScriptFetched)
                  if (
                    null ===
                      (n =
                        null === (t = this._pageRsp) || void 0 === t
                          ? void 0
                          : t.Flags) || void 0 === n
                      ? void 0
                      : n.FetchIntegrations
                  ) {
                    var r = this._doc.createElement('script');
                    r.addEventListener('load', e),
                      r.addEventListener('error', e),
                      (r.async = !0),
                      (r.src =
                        this._scheme +
                        '//' +
                        this._recHost +
                        '/rec/integrations?OrgId=' +
                        this._orgId),
                      this._doc.head.appendChild(r);
                  } else e();
              }),
              (t.prototype._maybeInjectPreviewScript = function () {
                var e = 'FullStory-preview-script';
                if (!this._doc.getElementById(e)) {
                  var t = this._doc.createElement('script');
                  (t.id = e),
                    (t.async = !0),
                    (t.src =
                      this._scheme + '//' + this._appHost + '/s/fspreview.js'),
                    this._doc.head.appendChild(t);
                }
              }),
              (t.prototype._disableBecauseRecPageSaidSo = function () {
                this._onFailedToStart && this._onFailedToStart(),
                  this.shutdown(je.SettingsBlocked),
                  (this._recordingDisabled = !0),
                  this.fireFsReady(this._recordingDisabled);
              }),
              (t.prototype._processOverrides = function (e) {
                var t;
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  var n, r, o, s, a;
                  return (0, i.__generator)(this, function (u) {
                    switch (u.label) {
                      case 0:
                        return (n = (0, i.__assign)({}, e)).Flags
                          .UseStaticSettings
                          ? ((r = this._previewMode.isPreviewMode()),
                            [
                              4,
                              this._protocol
                                .settings({
                                  orgId: this._orgId,
                                  previewMode: r,
                                  fallback: !1,
                                })
                                ['catch'](function (e) {
                                  Ae.sendToBugsnag(
                                    'Edge Rec settings error',
                                    'error',
                                    { err: e }
                                  );
                                }),
                            ])
                          : [3, 4];
                      case 1:
                        return (o = u.sent())
                          ? [3, 3]
                          : [
                              4,
                              this._protocol
                                .settings({
                                  orgId: this._orgId,
                                  previewMode: r,
                                  fallback: !0,
                                })
                                ['catch'](function (e) {
                                  Ae.sendToBugsnag(
                                    'Rs Rec settings error',
                                    'error',
                                    { err: e }
                                  );
                                }),
                            ];
                      case 2:
                        (o = u.sent()), (u.label = 3);
                      case 3:
                        o && (n = (0, i.__assign)((0, i.__assign)({}, n), o)),
                          (u.label = 4);
                      case 4:
                        return n.Flags.UseClientSideId
                          ? (this._identity.setCookieDomain(
                              this._wnd,
                              n.CookieDomain
                            ),
                            Wa(
                              (s =
                                null !== (t = e.UserUUID) && void 0 !== t
                                  ? t
                                  : '')
                            ) && this._identity.setUserId(s),
                            [4, this._sessionLifecycle.createUserSessionPage()])
                          : [3, 6];
                      case 5:
                        (a = u.sent()),
                          this._sessionLifecycle.start(),
                          (n = (0, i.__assign)((0, i.__assign)({}, n), {
                            UserIntId: a.userId,
                            SessionIntId: a.sessionId,
                            PageIntId: a.pageId,
                            IsNewSession: a.isNewSession,
                            PageStart: _(),
                          })),
                          (u.label = 6);
                      case 6:
                        return (
                          n.Flags.UseStatelessConsent &&
                            (n = (0, i.__assign)((0, i.__assign)({}, n), {
                              Consented: this._identity
                                .getConsentStore()
                                .getConsentState(),
                            })),
                          [2, n]
                        );
                    }
                  });
                });
              }),
              (t.prototype.onMessageReceived = function (t, n) {
                e.prototype.onMessageReceived.call(this, t, n),
                  (null == t ? void 0 : t.parent) == this._wnd &&
                    n[0] === pa.EndPreviewMode &&
                    this._previewMode.clear();
              }),
              t
            );
          })(Aa),
          za = (function () {
            function e(e, t) {
              void 0 === t && (t = new Qa(e)),
                (this._wnd = e),
                (this._messagePoster = t);
            }
            return (
              (e.prototype.enqueueEvents = function (e, t) {
                var n = null != e ? e : void 0;
                this._messagePoster.postMessage(
                  this._wnd.parent,
                  [pa.EvtBundle, t, n],
                  n
                );
              }),
              (e.prototype.startPipeline = function () {}),
              (e.prototype.stopPipeline = function () {}),
              (e.prototype.flush = function () {
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  return (0, i.__generator)(this, function (e) {
                    return [2];
                  });
                });
              }),
              (e.prototype.singSwanSong = function () {}),
              (e.prototype.onShutdown = function (e) {}),
              (e.prototype.setPageData = function (e) {}),
              e
            );
          })(),
          Qa = (function () {
            function e(e) {
              this._wnd = e;
            }
            return (
              (e.prototype.postMessage = function (e, t, n) {
                switch (t[0]) {
                  case pa.EvtBundle:
                    ma(this._wnd, t[0], le(t[1]), n) || ga(e, t);
                    break;
                  case pa.RequestFrameId:
                    ma(this._wnd, t[0], '[]', n) || ga(e, t);
                    break;
                  default:
                    t[0];
                }
              }),
              e
            );
          })(),
          Ga = (function (e) {
            function t(t, n, r, i, o) {
              void 0 === n && (n = new Qa(t.window)),
                void 0 === r && (r = new za(t.window, n)),
                void 0 === i && (i = Jn),
                void 0 === o && (o = Ea);
              var s = e.call(this, t, i, void 0, r, o) || this;
              return (s._messagePoster = n), s;
            }
            return (
              (0, i.__extends)(t, e),
              (t.prototype.start = function (t, n, r) {
                var i = this;
                e.prototype.start.call(this, t, n, r),
                  this._sendRequestForFrameId(),
                  this._listeners.add(this._wnd, 'load', !1, function () {
                    i._eventWatcher.recordingIsDetached() &&
                      i._ctx.recording.splitPage(je.FsShutdownFrame);
                  }),
                  this._eventWatcher.addVisibilityChangeEvent();
              }),
              (t.prototype.onMessageReceived = function (t, n) {
                if (
                  (e.prototype.onMessageReceived.call(this, t, n),
                  t === this._wnd.parent || t === this._wnd)
                )
                  switch (n[0]) {
                    case pa.GreetFrame:
                      this._sendRequestForFrameId(n[1]);
                      break;
                    case pa.SetFrameId:
                      try {
                        var r = n[1];
                        if (!r)
                          return void hi(location.href, {
                            source: 'log',
                            type: 'debug',
                          });
                        this._setFrameIdFromOutside({
                          frameId: r,
                          parentIds: n[2],
                          outerStartTime: n[3],
                          scheme: n[4],
                          script: n[5],
                          appHost: n[6],
                          orgId: n[7],
                          initConfig: n[8],
                          pageRsp: n[9],
                          consentOverride: n[10],
                          minimumWhen: n[11],
                        });
                      } catch (e) {
                        le(n);
                      }
                      break;
                    case pa.SetConsent:
                      this.setConsent(n[1]);
                      break;
                    case pa.InitFrameMobile:
                      try {
                        var i = JSON.parse(n[1]),
                          o = i.StartTime;
                        if (n.length > 2 && n[2]) {
                          var s = n[2];
                          Object.prototype.hasOwnProperty.call(
                            s,
                            'ProtocolVersion'
                          ) &&
                            s.ProtocolVersion >= 20180723 &&
                            Object.prototype.hasOwnProperty.call(
                              s,
                              'OuterStartTime'
                            ) &&
                            (o = s.OuterStartTime);
                        }
                        var a = i.Host;
                        this._setFrameIdFromOutside({
                          frameId: 0,
                          parentIds: [],
                          outerStartTime: o,
                          scheme: 'https:',
                          script: Y(a),
                          appHost: G(a),
                          orgId: i.OrgId,
                          initConfig: void 0,
                          pageRsp: i.PageResponse,
                          consentOverride: this._watcher.getConsent(),
                        });
                      } catch (e) {
                        le(n);
                      }
                  }
              }),
              (t.prototype._sendRequestForFrameId = function (e) {
                (this._frameId && this._frameId === e) ||
                  (0 != this._frameId &&
                    this._wnd.parent &&
                    this._messagePoster.postMessage(this._wnd.parent, [
                      pa.RequestFrameId,
                    ]));
              }),
              (t.prototype._setFrameIdFromOutside = function (e) {
                var t,
                  n,
                  r = this;
                if (this._frameId)
                  this._frameId !== e.frameId
                    ? (this._frameId,
                      e.frameId,
                      this._ctx.recording.splitPage(je.FsShutdownFrame))
                    : this._frameId;
                else if (
                  (hi(location.href, { source: 'log', type: 'debug' }),
                  e.frameId,
                  (this._scheme = e.scheme),
                  (this._script = e.script),
                  (this._appHost = e.appHost),
                  (this._orgId = e.orgId),
                  (this._initConfig = e.initConfig),
                  (this._frameId = e.frameId),
                  (this._parentIds = e.parentIds),
                  e.pageRsp && this.isSafeResponse(e.pageRsp))
                ) {
                  if (!this._pendingShutdown) {
                    var i =
                      null !== (t = e.consentOverride) && void 0 !== t
                        ? t
                        : !!e.pageRsp.Consented;
                    this.handleResponse(e.pageRsp, i),
                      this.fireFsReady(),
                      this._queue.enqueueFirst({
                        Kind: Oe.SYS_REPORTCONSENT,
                        Args: [i, Be.Document],
                      }),
                      this._queue.enqueueFirst({
                        Kind: Oe.SET_FRAME_BASE,
                        Args: [
                          hi(Mr(this._wnd), {
                            source: 'event',
                            type: Oe.SET_FRAME_BASE,
                          }),
                          fe(this._wnd.document),
                        ],
                      }),
                      this._queue.enqueue({
                        Kind: Oe.SCRIPT_COMPILED_VERSION,
                        Args: ['62394952df'],
                      }),
                      this._queue.enqueue(Fa({ type: 'default' })),
                      this.addInitEvent(),
                      this._queue.rebaseIframe(
                        e.outerStartTime,
                        null !== (n = e.minimumWhen) && void 0 !== n ? n : 0
                      ),
                      this._ctx.time.setStartTime(e.outerStartTime),
                      this._pageId &&
                        this._queue
                          .startPipeline({
                            pageId: this._pageId,
                            serverPageStart: e.pageRsp.PageStart,
                            isNewSession: !!e.pageRsp.IsNewSession,
                            frameId: e.frameId,
                            parentIds: e.parentIds,
                          })
                          .then(function () {
                            r.flushPendingChildFrameInits(),
                              r.enqueueDocumentProperties(r._wnd.document),
                              r.fullyStarted();
                          });
                  }
                } else this.shutdown(je.FsShutdownFrame);
              }),
              t
            );
          })(Aa),
          Ya = (function () {
            function e(e, t, n) {
              void 0 === t && (t = function () {}),
                void 0 === n && (n = !1),
                (this._doc = e),
                (this._onWriteFailure = t),
                (this._disableWrites = n),
                (this._cookies = {}),
                (this._cookies = T(this._doc));
            }
            return (
              (e.prototype.setDomain = function (e) {
                this._domain = e;
              }),
              (e.prototype.getValue = function (e, t) {
                var n = this._cookies[e];
                if (!n)
                  try {
                    n = localStorage[null != t ? t : e];
                  } catch (e) {}
                return n;
              }),
              (e.prototype.setValue = function (e, t, n, r) {
                if (null != this._domain && !this._disableWrites) {
                  var i = [];
                  this._setCookie(e, t, n, i),
                    this._setLocalStorage(null != r ? r : e, t, i, e),
                    i.length > 0 && this._onWriteFailure(i);
                }
              }),
              (e.prototype.setCookie = function (e, t, n) {
                this._setCookie(e, t, n, []);
              }),
              Object.defineProperty(e.prototype, 'cookies', {
                get: function () {
                  return this._cookies;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.clearCookie = function (e, t) {
                if (
                  (this._cookies[e] &&
                    ((this._doc.cookie = Xa(
                      this._domain,
                      e,
                      '',
                      'Thu, 01 Jan 1970 00:00:01 GMT'
                    )),
                    delete this._cookies[e]),
                  t)
                )
                  try {
                    delete localStorage[t];
                  } catch (e) {}
              }),
              (e.prototype._setCookie = function (e, t, n, r) {
                try {
                  (this._doc.cookie = Xa(this._domain, e, t, n)),
                    -1 === this._doc.cookie.indexOf(t) && r.push([e, 'cookie']);
                } finally {
                  this._cookies = T(this._doc);
                }
              }),
              (e.prototype._setLocalStorage = function (e, t, n, r) {
                try {
                  (localStorage[e] = t),
                    localStorage[e] !== t &&
                      n.push([null != r ? r : e, 'localStorage']);
                } catch (t) {
                  n.push([null != r ? r : e, 'localStorage', String(t)]);
                }
              }),
              e
            );
          })();
        function Xa(e, t, n, r) {
          var i = t + '=' + n;
          return (
            (i +=
              '; domain=' +
              (function (e) {
                return e ? '.' + encodeURIComponent(e) : '';
              })(e)),
            (i += '; Expires=' + r + '; path=/; SameSite=Strict'),
            'https:' === location.protocol && (i += '; Secure'),
            i
          );
        }
        var Za,
          Ja = 'fs_cid',
          $a = (function () {
            function e(e) {
              (this._store = e), (this._version = 1);
              var t = this._store.getValue(Ja, _t);
              this._cookie = (function (e) {
                var t = { consent: We.RevokeConsent };
                if (!e) return t;
                var n = e.split('.');
                return n.length < 1
                  ? t
                  : (n[0], '1' === n[1] ? { consent: We.GrantConsent } : t);
              })(t);
            }
            return (
              (e.prototype.getConsentState = function () {
                return this._cookie.consent;
              }),
              (e.prototype.setConsentState = function (e) {
                if (((this._cookie.consent = e), e !== We.RevokeConsent)) {
                  var t = this._encode(),
                    n = this._expiry();
                  this._store.setValue(Ja, t, n, _t);
                } else this._store.clearCookie(Ja, _t);
              }),
              (e.prototype._encode = function () {
                return [
                  this._version,
                  this._cookie.consent === We.GrantConsent ? 1 : 0,
                ].join('.');
              }),
              (e.prototype._expiry = function () {
                return new Date(1e3 * E()).toUTCString();
              }),
              e
            );
          })(),
          eu = 'fs_lua',
          tu = (function () {
            function e(e) {
              (this._version = 1), (this._store = e);
              var t = this._store.getValue(eu, vt);
              this._cookie = (function (e) {
                var t = { lastUserActivityTime: void 0 };
                if (!e) return t;
                var n = e.split('.');
                return n.length < 1
                  ? t
                  : (n[0], { lastUserActivityTime: C(n[1]) });
              })(t);
            }
            return (
              (e.prototype.getLastUserActivityTimeMS = function () {
                return this._cookie.lastUserActivityTime;
              }),
              (e.prototype.setLastUserActivityTimeMS = function (e) {
                this._cookie.lastUserActivityTime = e;
                var t = this._encode(),
                  n = this._expiry();
                this._store.setValue(eu, t, n, vt);
              }),
              (e.prototype._encode = function () {
                var e;
                return [
                  this._version,
                  null !== (e = this._cookie.lastUserActivityTime) &&
                  void 0 !== e
                    ? e
                    : '',
                ].join('.');
              }),
              (e.prototype._expiry = function () {
                return new Date(_() + ja).toUTCString();
              }),
              e
            );
          })(),
          nu = 'fs_uid',
          ru = (function () {
            function e(e, t, n, r) {
              void 0 === t && (t = document),
                void 0 === n && (n = function () {}),
                void 0 === r && (r = !1),
                (this._appId = void 0),
                (this._clientStore = new Ya(t, n, r)),
                (this._consentStore = new $a(this._clientStore)),
                (this._lastUserActivityStore = new tu(this._clientStore)),
                (this._cookie = this._readUserCookie(e));
            }
            return (
              (e.prototype._readUserCookie = function (e) {
                var t = b(this._clientStore.getValue(nu, ft));
                return t && t.orgId == e
                  ? t
                  : {
                      expirationAbsTimeSeconds: E(),
                      orgId: e,
                      userId: '',
                      sessionId: '',
                      appKeyHash: '',
                    };
              }),
              (e.prototype.getConsentStore = function () {
                return this._consentStore;
              }),
              (e.prototype.clear = function () {
                this._lastUserActivityStore.setLastUserActivityTimeMS(void 0),
                  (this._cookie.sessionStartTime = this._cookie.pageCount =
                    void 0),
                  (this._cookie.userId =
                    this._cookie.sessionId =
                    this._cookie.appKeyHash =
                    this._appId =
                      ''),
                  (this._cookie.expirationAbsTimeSeconds = E()),
                  this._write();
              }),
              (e.prototype.create = function (e) {
                this._lastUserActivityStore.setLastUserActivityTimeMS(
                  e.lastUserActivityTime
                ),
                  (this._cookie = (0, i.__assign)(
                    (0, i.__assign)({}, this._cookie),
                    e
                  )),
                  this._write();
              }),
              (e.prototype.getOrgId = function () {
                return this._cookie.orgId;
              }),
              (e.prototype.getUserId = function () {
                return this._cookie.userId;
              }),
              (e.prototype.setUserId = function (e) {
                (this._cookie.userId = e), this._write();
              }),
              (e.prototype.getSessionId = function () {
                return this._cookie.sessionId;
              }),
              (e.prototype.getAppKeyHash = function () {
                return this._cookie.appKeyHash;
              }),
              (e.prototype.getCookies = function () {
                return this._clientStore.cookies;
              }),
              (e.prototype.setAppId = function (e) {
                (this._appId = e),
                  (this._cookie.appKeyHash = js(e)),
                  this._write();
              }),
              (e.prototype.getAppId = function () {
                return this._appId;
              }),
              (e.prototype.setSessionStartTimeMS = function (e) {
                (this._cookie.sessionStartTime = e), this._write();
              }),
              (e.prototype.getSessionStartTimeMS = function () {
                return this._cookie.sessionStartTime;
              }),
              (e.prototype.setLastUserActivityTimeMS = function (e) {
                this._lastUserActivityStore.setLastUserActivityTimeMS(e);
              }),
              (e.prototype.getLastUserActivityTimeMS = function () {
                return this._lastUserActivityStore.getLastUserActivityTimeMS();
              }),
              (e.prototype.setPageCount = function (e) {
                (this._cookie.pageCount = e), this._write();
              }),
              (e.prototype.getPageCount = function () {
                return this._cookie.pageCount;
              }),
              (e.prototype.getClientStore = function () {
                return this._clientStore;
              }),
              (e.prototype.setCookie = function (e, t, n) {
                void 0 === n && (n = new Date(_() + 6048e5).toUTCString()),
                  this._clientStore.setCookie(e, t, n);
              }),
              (e.prototype.setCookieDomain = function (e, t) {
                var n = t;
                (x(n) ||
                  n.match(
                    /^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/g
                  )) &&
                  (n = '');
                var r = (function (e) {
                  return U(e, '_fs_cookie_domain');
                })(e);
                'string' == typeof r && (n = r), this._clientStore.setDomain(n);
              }),
              (e.prototype.setIds = function (e, t, n, r) {
                this.setCookieDomain(e, t),
                  (this._cookie.userId = n),
                  (this._cookie.sessionId = r),
                  this._write();
              }),
              (e.prototype.clearAppId = function () {
                return (
                  !!this._cookie.appKeyHash &&
                  ((this._appId = ''),
                  (this._cookie.appKeyHash = ''),
                  this._write(),
                  !0)
                );
              }),
              (e.prototype.encode = function () {
                var e,
                  t,
                  n,
                  r = [
                    this._cookie.userId,
                    null !== (e = this._cookie.sessionId) && void 0 !== e
                      ? e
                      : '',
                    '' +
                      (null !== (t = this._cookie.sessionStartTime) &&
                      void 0 !== t
                        ? t
                        : ''),
                    '',
                    '' +
                      (null !== (n = this._cookie.pageCount) && void 0 !== n
                        ? n
                        : ''),
                  ].join(':'),
                  i = ['', this._cookie.orgId, r];
                return (
                  this._cookie.appKeyHash &&
                    i.push(encodeURIComponent(this._cookie.appKeyHash)),
                  i.push('/' + this._cookie.expirationAbsTimeSeconds),
                  i.join('#')
                );
              }),
              (e.prototype._write = function () {
                var e = this.encode(),
                  t = new Date(
                    1e3 * this._cookie.expirationAbsTimeSeconds
                  ).toUTCString();
                this._clientStore.setValue(nu, e, t, ft);
              }),
              e
            );
          })(),
          iu =
            (((Za = {})[Xe.Document] = {
              assetMapId: 'str',
              releaseDatetime: 'date',
              releaseVersion: 'str',
            }),
            (Za[Xe.Event] = {}),
            (Za[Xe.Page] = {
              pageName: 'str',
              releaseVersion: 'str',
              releaseDatetime: 'str',
            }),
            (Za[Xe.User] = { uid: 'str', displayName: 'str', email: 'str' }),
            Za),
          ou = {
            str: su,
            bool: au,
            real: uu,
            int: cu,
            date: hu,
            strs: du(su),
            bools: du(au),
            reals: du(uu),
            ints: du(cu),
            dates: du(hu),
            objs: du(lu),
            obj: lu,
          };
        function su(e) {
          return 'string' == typeof e;
        }
        function au(e) {
          return 'boolean' == typeof e;
        }
        function uu(e) {
          return 'number' == typeof e;
        }
        function cu(e) {
          return 'number' == typeof e && e - s.mathFloor(e) == 0;
        }
        function hu(e) {
          return !(
            !e ||
            (e.constructor === Date
              ? isNaN(e)
              : ('number' != typeof e && 'string' != typeof e) ||
                isNaN(new Date(e)))
          );
        }
        function du(e) {
          return function (t) {
            if (!(t instanceof Array)) return !1;
            for (var n = 0; n < t.length; n++) if (!e(t[n])) return !1;
            return !0;
          };
        }
        function lu(e) {
          return !!e && 'object' == typeof e;
        }
        var pu = /^[a-zA-Z][a-zA-Z0-9_]*$/,
          fu = (function () {
            function e(e) {
              (this._identity = e), (this._documentVars = {});
            }
            return (
              (e.prototype.setIdentity = function (e) {
                this._identity = e;
              }),
              (e.prototype.unloadCrossPageVars = function (e) {
                switch (e) {
                  case je.Hibernation:
                  case je.Size:
                    break;
                  default:
                    this._lastPageVars = void 0;
                }
              }),
              (e.prototype.getCrossPageVars = function () {
                return this._lastPageVars;
              }),
              (e.prototype.getDocumentVars = function () {
                var e,
                  t = {},
                  n = void 0;
                for (var r in this._documentVars) {
                  var i = this._documentVars[r],
                    o = i.value;
                  if (void 0 === (h = i.apiSource)) {
                    var s = null != n ? n : {};
                    (s[r] = o), (n = s);
                  } else {
                    var a = null !== (e = t[h]) && void 0 !== e ? e : {};
                    (a[r] = o), (t[h] = a);
                  }
                }
                var u = [],
                  c = function (e) {
                    e && u.push(e);
                  };
                for (var h in (n &&
                  c(
                    this._buildVarRawEvent(Xe.Document, {
                      PayloadToSend: n,
                      ValidationErrors: [],
                    })
                  ),
                t))
                  c(
                    this._buildVarRawEvent(
                      Xe.Document,
                      { PayloadToSend: t[h], ValidationErrors: [] },
                      h
                    )
                  );
                return u;
              }),
              (e.prototype.api = function (e) {
                var t,
                  n = !1,
                  r = [],
                  i = function (e) {
                    e && r.push(e);
                  };
                try {
                  var o = (function (e) {
                      switch (e.operation) {
                        case y.V2.OperationName.TrackEvent:
                          return Xe.Event;
                        case y.V2.OperationName.SetPage:
                          return Xe.Page;
                        case y.V2.OperationName.SetProperties:
                          var t = e.option.type;
                          switch (t) {
                            case Xe.Document:
                            case Xe.Page:
                            case Xe.User:
                              return t;
                            case Xe.Event:
                              throw new Error('Invalid scope: Event');
                            default:
                              return (0, kr.nt)(t, 'Invalid scope: ' + t);
                          }
                        default:
                          (0, kr.nt)(e, 'Unsupported');
                      }
                    })(e),
                    a =
                      null === (t = e.source) || void 0 === t
                        ? void 0
                        : t.integration;
                  switch (o) {
                    case Xe.Document:
                      var u = e.option;
                      if (
                        !(h = this._updateDocumentVars(_u(o, u.properties), a))
                      )
                        break;
                      i(this._buildVarRawEvent(o, h, a));
                      break;
                    case Xe.Event:
                      var c = (u = e.option).name;
                      if ('string' != typeof c) break;
                      Su(e.source, 'event', i),
                        i(this._buildVarRawEvent(o, _u(o, u.properties), a, c));
                      break;
                    case Xe.Page:
                      var h = (u = e.option).properties || u;
                      (this._lastPageVars = this._buildVarRawEvent(
                        o,
                        _u(o, h),
                        a
                      )),
                        i(this._lastPageVars);
                      break;
                    case Xe.User:
                      if ('object' != typeof (u = e.option).properties)
                        u.properties, le(u.properties);
                      else if ('uid' in u.properties) {
                        var d = u.properties.uid;
                        if (!1 === d)
                          this._identity.clearAppId() && (n = !0),
                            delete u.properties.uid;
                        else {
                          var l = (function (e, t) {
                              var n = e;
                              if (
                                ('number' == typeof n &&
                                  s.mathFloor(n) == n &&
                                  (n = '' + n),
                                'string' != typeof n)
                              )
                                return [void 0, Ze.FsId];
                              var r = n.trim();
                              if (m.indexOf(r.toLowerCase()) >= 0)
                                return [void 0, Ze.FsId];
                              var i = js(r),
                                o = void 0;
                              return (
                                t &&
                                  t._cookie.appKeyHash &&
                                  t._cookie.appKeyHash !== i &&
                                  t._cookie.appKeyHash !== r &&
                                  (t._cookie.appKeyHash, (o = Ze.NewUid)),
                                [r, o]
                              );
                            })(d, this._identity),
                            p = l[0],
                            f = l[1];
                          if (!p) return Ze.FsId, { events: r };
                          (u.properties.uid = p),
                            this._identity.setAppId(p),
                            f === Ze.NewUid && (n = !0);
                        }
                      }
                      Su(e.source, 'setVars', i),
                        i(this._buildVarRawEvent(o, _u(o, u.properties), a));
                      break;
                    default:
                      (0, kr.nt)(o, 'Unsupported');
                  }
                } catch (t) {
                  e.operation, t.message;
                }
                return { events: r, reidentify: n };
              }),
              (e.prototype._buildVarRawEvent = function (e, t, n, r) {
                var i = le(t.PayloadToSend),
                  o = !!n && 'fs' !== n;
                switch (e) {
                  case Xe.Event:
                    return {
                      When: 0,
                      Kind: Oe.SYS_CUSTOM,
                      Args: o ? [r, i, n] : [r, i],
                    };
                  case Xe.Document:
                  case Xe.Page:
                  case Xe.User:
                    return {
                      When: 0,
                      Kind: Oe.SYS_SETVAR,
                      Args: o ? [e, i, n] : [e, i],
                    };
                  default:
                    (0, kr.nt)(e, 'Unsupported');
                }
              }),
              (e.prototype._updateDocumentVars = function (e, t) {
                var n = e.PayloadToSend;
                if (n && 'object' == typeof n) {
                  var r = 0,
                    i = {};
                  for (var o in n)
                    if (!(o in this._documentVars)) {
                      var s = n[o];
                      (this._documentVars[o] = { value: s, apiSource: t }),
                        (i[o] = s),
                        r++;
                    }
                  if (0 !== r)
                    return {
                      PayloadToSend: i,
                      ValidationErrors: e.ValidationErrors,
                    };
                }
              }),
              e
            );
          })();
        function _u(e, t) {
          var n = 1500;
          return vu(
            function () {
              return --n;
            },
            e,
            t
          );
        }
        var vu = function (e, t, n) {
          var r,
            i,
            o = { PayloadToSend: {}, ValidationErrors: [] },
            a = function (n) {
              var r = vu(e, t, n);
              return (
                (o.ValidationErrors = o.ValidationErrors.concat(
                  r.ValidationErrors
                )),
                r.PayloadToSend
              );
            };
          for (var u in n)
            if (s.objectHasOwnProp(n, u)) {
              if (e() <= 0) break;
              var c = n[u],
                h = yu(t, u, c, o.ValidationErrors);
              if (h) {
                var d = h.name;
                if ('obj' !== h.type) {
                  if ('objs' !== h.type)
                    o.PayloadToSend[d] = gu(h.type, h.value);
                  else {
                    t != Xe.Event &&
                      o.ValidationErrors.push({
                        Type: 'vartype',
                        FieldName: d,
                        ValueType: 'Array<Object> (unsupported)',
                      });
                    for (var l = [], p = 0; p < h.value.length; p++)
                      (f = a(h.value[p])) && l.push(f);
                    l.length > 0 && (o.PayloadToSend[d] = l);
                  }
                } else {
                  var f = a(h.value),
                    _ =
                      (i = '_obj').length > (r = u).length ||
                      r.substring(r.length - i.length) != i
                        ? d.substring(0, d.length - '_obj'.length)
                        : d;
                  o.PayloadToSend[_] = f;
                }
              } else o.PayloadToSend[u] = gu('str', c);
            }
          return o;
        };
        function gu(e, t) {
          var n = t;
          return (
            'str' == e && 'string' == typeof n && (n = n.trim()),
            null == n ||
              ('date' != e && n.constructor != Date) ||
              (n = (function (e) {
                var t = e.constructor === Date ? e : new Date(e);
                try {
                  return t.toISOString();
                } catch (e) {
                  return null;
                }
              })(n)),
            n
          );
        }
        function yu(e, t, n, r) {
          var i = t,
            o = i,
            a = typeof n;
          if ('undefined' === a)
            return (
              r.push({
                Type: 'vartype',
                FieldName: i,
                ValueType: a + ' (unsupported)',
              }),
              null
            );
          var u = iu[e];
          if (s.objectHasOwnProp(u, i))
            return { name: i, type: u[i], value: n };
          var c = i.lastIndexOf('_');
          if (-1 == c || !mu(i.substring(c + 1))) {
            var h = (function (e) {
              for (var t in ou) if (ou[t](e)) return t;
              return null;
            })(n);
            if (null == h)
              return (
                n
                  ? r.push({ Type: 'vartype', FieldName: i })
                  : r.push({
                      Type: 'vartype',
                      FieldName: i,
                      ValueType: 'null (unsupported)',
                    }),
                null
              );
            (c = i.length), (i = i + '_' + h);
          }
          var d = i.substring(0, c),
            l = i.substring(c + 1);
          if ('object' === a && !n)
            return (
              r.push({
                Type: 'vartype',
                FieldName: o,
                ValueType: 'null (unsupported)',
              }),
              null
            );
          if (!pu.test(d)) {
            (d = d.replace(/[^a-zA-Z0-9_]/g, '').replace(/^[0-9]+/, '')),
              /[0-9]/.test(d[0]) && (d = d.substring(1)),
              r.push({ Type: 'varname', FieldName: o });
            var p = d + '_' + l;
            if ((pu.source, '' == d)) return null;
            i = p;
          }
          return mu(l)
            ? (function (e, t) {
                return ou[e](t);
              })(l, n)
              ? { name: i, type: l, value: n }
              : (le(n),
                'number' === a
                  ? (a = n % 1 == 0 ? 'integer' : 'real')
                  : 'object' == a &&
                    null != n &&
                    n.constructor == Date &&
                    (a = isNaN(n) ? 'invalid date' : 'date'),
                r.push({ Type: 'vartype', FieldName: o, ValueType: a }),
                null)
            : (r.push({ Type: 'varname', FieldName: o }), null);
        }
        function mu(e) {
          return !!ou[e];
        }
        function Su(e, t, n) {
          var r = Fa({ source: e, type: 'api', entrypoint: t });
          r && n({ When: 0, Kind: r.Kind, Args: r.Args });
        }
        function wu(e, t) {
          return (0, i.__awaiter)(this, void 0, Jt, function () {
            var n, o, s, u, c;
            return (0, i.__generator)(this, function (h) {
              switch (h.label) {
                case 0:
                  if (
                    (h.trys.push([0, 2, , 3]),
                    gr ||
                      mr ||
                      (function (e) {
                        return !!U(e, '_fs_use_polyfilled_apis', 'boolean');
                      })(e))
                  )
                    return [
                      2,
                      (0, i.__assign)((0, i.__assign)({}, t), {
                        status: r.Clean,
                      }),
                    ];
                  if (!e.document || t.status !== r.Unknown) return [2, t];
                  if (
                    ((n = (function (e, t) {
                      var n = t.functions,
                        o = {},
                        s = (0, i.__assign)({}, t.helpers);
                      if (
                        ((s.functionToString = (function (e, t) {
                          var n,
                            r,
                            i =
                              null === (n = e['__core-js_shared__']) ||
                              void 0 === n
                                ? void 0
                                : n.inspectSource;
                          if (i) {
                            var o = function () {
                              return i(this);
                            };
                            if (bu(o, 2)) return o;
                          }
                          var s =
                            null === (r = e['__core-js_shared__']) ||
                            void 0 === r
                              ? void 0
                              : r['native-function-to-string'];
                          if (bu(s)) return s;
                          var a = t.__zone_symbol__OriginalDelegate;
                          return bu(a) ? a : bu(t) ? t : void 0;
                        })(e, s.functionToString)),
                        !s.functionToString)
                      )
                        return t;
                      var a = !1;
                      for (var u in n)
                        if (n[u]) {
                          if (
                            ((o[u] = Iu(s.functionToString, n[u])),
                            o[u] || (o[u] = ku(s.functionToString, s, u)),
                            !o[u])
                          )
                            return t;
                          o[u] !== n[u] && (a = !0);
                        } else o[u] = void 0;
                      return {
                        status: r.Clean,
                        functions: a ? o : n,
                        helpers: s,
                        errors: [],
                      };
                    })(e, t)),
                    n.status === r.Clean)
                  )
                    return [2, n];
                  ((o = e.document.createElement('iframe')).id =
                    'FullStory-iframe'),
                    (o.className = 'fs-hide'),
                    (o.style.display = 'none'),
                    (s =
                      e.document.body ||
                      e.document.head ||
                      e.document.documentElement ||
                      e.document);
                  try {
                    s.appendChild(o);
                  } catch (e) {
                    return [
                      2,
                      (0, i.__assign)((0, i.__assign)({}, t), {
                        status: r.Clean,
                      }),
                    ];
                  }
                  return o.contentWindow
                    ? ((u = a(o.contentWindow, r.Clean)),
                      o.parentNode && o.parentNode.removeChild(o),
                      u.status === r.UnrecoverableFailure
                        ? [
                            2,
                            (0, i.__assign)((0, i.__assign)({}, t), {
                              status: r.Clean,
                            }),
                          ]
                        : [4, Eu(u, t)])
                    : [
                        2,
                        (0, i.__assign)((0, i.__assign)({}, t), {
                          status: r.Clean,
                        }),
                      ];
                case 1:
                  return [2, h.sent()];
                case 2:
                  return (
                    (c = h.sent()),
                    Ae.sendToBugsnag(c, 'error'),
                    [
                      2,
                      (0, i.__assign)((0, i.__assign)({}, t), {
                        status: r.Clean,
                      }),
                    ]
                  );
                case 3:
                  return [2];
              }
            });
          });
        }
        function Eu(e, t) {
          var n,
            o = new Jt(function (e) {
              return (n = e);
            });
          return (
            setTimeout(function () {
              try {
                e.functions.jsonParse('[]').push(0);
              } catch (e) {
                n((0, i.__assign)((0, i.__assign)({}, t), { status: r.Clean }));
              }
              n(e);
            }),
            o
          );
        }
        function bu(e, t) {
          var n;
          if ((void 0 === t && (t = 0), !e)) return !1;
          try {
            e.call(function () {});
          } catch (e) {
            return !1;
          }
          var r = function (e) {
              try {
                return void e.call(null);
              } catch (e) {
                return (e.stack || '').replace(
                  /__fs_nomangle_check_stack(.|\n)*$/,
                  ''
                );
              }
            },
            i = void 0;
          0 !== t &&
            'number' == typeof Error.stackTraceLimit &&
            ((i = Error.stackTraceLimit),
            (Error.stackTraceLimit = Number.POSITIVE_INFINITY));
          var o = [
              function () {
                throw new Error('');
              },
              e,
            ],
            s = (function __fs_nomangle_check_stack() {
              return o.map(r);
            })(),
            a = s[0],
            u = s[1];
          if ((void 0 !== i && (Error.stackTraceLimit = i), !a || !u))
            return !1;
          for (
            var c = '\n'.charCodeAt(0),
              h = a.length > u.length ? u.length : a.length,
              d = 1,
              l = d;
            l < h;
            l++
          ) {
            var p = a.charCodeAt(a.length - l),
              f = u.charCodeAt(u.length - l);
            if (p != f) break;
            (f != c && l != h - 1) || (d = l);
          }
          return (
            (null !==
              (n = u.slice(0, u.length - d + 1).match(/\.js:\d+([:)]|$)/gm)) &&
            void 0 !== n
              ? n
              : []
            ).length <= t
          );
        }
        function Tu(e, t) {
          return e.call(t).indexOf('[native code]') >= 0;
        }
        var Cu = ['__zone_symbol__OriginalDelegate', 'nr@original'];
        function Iu(e, t) {
          if (t) {
            for (var n = 0, r = Cu; n < r.length; n++) {
              var i = t[r[n]];
              if ('function' == typeof i && Tu(e, i)) return i;
            }
            return Tu(e, t) ? t : void 0;
          }
        }
        function ku(e, t, n) {
          if ('arrayIsArray' === n) {
            var r = Iu(e, t.objectToString);
            if (!r) return;
            return (
              (t.objectToString = r),
              function (e) {
                return '[object Array]' == r.call(e);
              }
            );
          }
        }
        var Au = (function () {
          function e(e, t) {
            void 0 === t &&
              (t = function (e) {
                return new WebSocket(e);
              }),
              (this._newSock = t),
              (this._connecting = !1),
              (this._connected = !1),
              (this._queue = {}),
              (this._seq = 1),
              (this._ctx = e),
              (this._scheme = e.options.scheme),
              (this._cdnHost = e.options.cdnHost);
          }
          return (
            (e.isSupported = function () {
              return 'WebSocket' in window;
            }),
            (e.prototype.page = function (e) {
              var t = this;
              return new Jt(function (n, r) {
                t._request(
                  { Cmd: st.Page, Page: e },
                  da(t._ctx),
                  function (e) {
                    e.Cmd === at.Page ? n(e.Page) : (e.Cmd, r(e.Cmd));
                  },
                  r
                );
              });
            }),
            (e.prototype.settings = function (e) {
              var t = e.previewMode ? da(this._ctx) : this._cdnHost;
              return ha(this._scheme, t, e);
            }),
            (e.prototype.bundle = function (e) {
              return (0, i.__awaiter)(this, void 0, Jt, function () {
                var t,
                  n,
                  r,
                  o = this;
                return (0, i.__generator)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return [4, rn()];
                    case 1:
                      return (
                        i.sent(),
                        (t = e.deltaT),
                        (n = e.serverPageStart),
                        (r = e.serverBundleTime),
                        [
                          2,
                          new Jt(function (i, s) {
                            var a = da(o._ctx);
                            xu(e.recHost, a);
                            var u = o._request(
                              {
                                Cmd: st.Bundle,
                                Bundle: {
                                  Bundle: e.bundle,
                                  DeltaT: null === t ? void 0 : t,
                                  OrgId: e.orgId,
                                  PageId: e.pageId,
                                  PageStart: null == n ? void 0 : n,
                                  PrevBundleTime: null == r ? void 0 : r,
                                  Seq: e.bundle.Seq,
                                  SessionId: e.sessionId,
                                  UserId: e.userId,
                                },
                              },
                              a,
                              function (e) {
                                e.Cmd === at.Bundle
                                  ? i([null != u ? u : 0, e.Bundle])
                                  : e.Cmd;
                              },
                              s
                            );
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.bundleBeacon = function (e) {
              var t = da(this._ctx);
              return xu(e.recHost, t), ca(this._scheme, t, e);
            }),
            (e.prototype.exponentialBackoffMs = function (e, t) {
              var n = s.mathMin(ut.BackoffMax, 5e3 * s.mathPow(2, e));
              return t ? n + 0.25 * s.mathRandom() * n : n;
            }),
            (e.prototype._request = function (e, t, n, r) {
              var i = e;
              i.Seq = this._seq++;
              var o = le(i);
              return (
                (this._queue[i.Seq] = { payload: o, win: n, lose: r }),
                this._maybeConnect(t),
                o.length
              );
            }),
            (e.prototype._handleMessage = function (e) {
              var t;
              try {
                t = _e(e);
              } catch (e) {
                return;
              }
              var n = this._queue[t.Seq];
              delete this._queue[t.Seq],
                n
                  ? t.Cmd === at.Error
                    ? (t.Fail.Error,
                      n.lose(new ta(t.Fail.Status, t.Fail.Error)))
                    : n.win(t)
                  : t.Seq;
            }),
            (e.prototype._drainQueue = function () {
              if (this._connected && this._sock)
                for (var e in this._queue) {
                  var t = this._queue[e];
                  t.sent || (this._sock.send(t.payload), (t.sent = !0));
                }
            }),
            (e.prototype._failPending = function () {
              for (var e in this._queue) {
                var t = this._queue[e];
                t.sent &&
                  (delete this._queue[e], t.lose(new ta(0, 'Pending request')));
              }
            }),
            (e.prototype._maybeConnect = function (e) {
              var t = this;
              if (this._connected) this._drainQueue();
              else if (!this._connecting) {
                this._connecting = !0;
                var n =
                  ('https:' == this._scheme ? 'wss:' : 'ws:') +
                  '//' +
                  e +
                  '/rec/sock';
                (this._sock = this._newSock(n)),
                  (this._sock.onopen = function (e) {
                    (t._connecting = !1), (t._connected = !0), t._drainQueue();
                  }),
                  (this._sock.onmessage = function (e) {
                    t._handleMessage(e.data), t._drainQueue();
                  }),
                  (this._sock.onclose = function (e) {
                    (t._connecting = t._connected = !1), t._failPending();
                  }),
                  (this._sock.onerror = function (e) {
                    (t._connecting = t._connected = !1), t._failPending();
                  });
              }
            }),
            e
          );
        })();
        function xu(e, t) {
          e && Pe(t === e, 'sock recHost mismatch');
        }
        var Ru,
          Pu,
          Ou,
          Mu,
          Lu = y.V2.EventTypes,
          Uu = y.V2.EventTypeName,
          Nu = (function () {
            function e() {
              this._callbacks = {
                start: [],
                shutdown: [],
                'internal/bundle': [],
                'internal/error': [],
                'internal/fs-init': [],
              };
            }
            return (
              (e.prototype.registerListener = function (e, t) {
                var n;
                if (-1 === Lu.indexOf(e) || !t)
                  throw new Error('Invalid event type or missing callback.');
                var r = { disconnected: !1, callback: t },
                  i = (
                    null !== (n = this._callbacks[e]) && void 0 !== n ? n : []
                  ).filter(function (e) {
                    return !e.disconnected;
                  });
                return (
                  i.push(r),
                  (this._callbacks[e] = i),
                  {
                    disconnect: function () {
                      r.disconnected = !0;
                    },
                  }
                );
              }),
              (e.prototype.hasListeners = function (e) {
                var t;
                return (
                  (null !== (t = this._callbacks[e]) && void 0 !== t ? t : [])
                    .length > 0 &&
                  this._callbacks[e].some(function (e) {
                    return !e.disconnected;
                  })
                );
              }),
              (e.prototype.takeRecords = function (e) {
                var t,
                  n =
                    null !== (t = this._callbacks[e.type]) && void 0 !== t
                      ? t
                      : [];
                if (0 !== n.length)
                  for (var r = 0, i = n; r < i.length; r++) {
                    var o = i[r],
                      s = o.disconnected,
                      a = o.callback;
                    if (!s)
                      try {
                        a(e.data);
                      } catch (e) {
                        Ae.sendToBugsnag(
                          'Recording observer callback error',
                          'error',
                          { err: e }
                        );
                      }
                  }
              }),
              e
            );
          })(),
          Du = (function () {
            function e(e) {
              var t = this;
              (this._observer = e),
                (this._queue = []),
                (this._scheduler = new ss(function () {
                  t._onFlush();
                }));
            }
            return (
              (e.prototype.addEvent = function (e, t) {
                this._observer.hasListeners(e) &&
                  (this._queue.push({ type: e, data: t }),
                  this._scheduler.schedule());
              }),
              (e.prototype.onStart = function (e, t) {
                this.addEvent(Uu.START, { sessionUrl: e, settings: t });
              }),
              (e.prototype.onShutdown = function (e) {
                this.addEvent(Uu.SHUTDOWN, { reason: e });
              }),
              (e.prototype.onBundleSent = function (e) {
                this.addEvent(Uu.INTERNAL_BUNDLE, { size: e });
              }),
              (e.prototype.onFSInit = function () {
                this.addEvent(Uu.INTERNAL_FS_INIT, {});
              }),
              (e.prototype._onFlush = function () {
                for (var e = 0, t = this._queue; e < t.length; e++) {
                  var n = t[e];
                  this._observer.takeRecords(n);
                }
                this._queue = [];
              }),
              e
            );
          })(),
          Fu =
            ((Pu = (Ru = window.navigator).vendor),
            (Ou = void 0 !== window.opr),
            (Mu = Ru.userAgent.indexOf('Edge') > -1),
            !!Ru.userAgent.match('CriOS') ||
              ('Google Inc.' === Pu && !Ou && !Mu)),
          Hu = /Firefox/.test(window.navigator.userAgent);
        function qu(e) {
          if (!Hu) return !1;
          var t = window.navigator.userAgent.match(/Firefox\/(\d+)/);
          return !(!t || !t[1]) && parseInt(t[1], 10) < e;
        }
        function Wu(e) {
          if (!Fu) return !1;
          var t = window.navigator.userAgent.match(/Chrome\/(\d+)/);
          return !(!t || !t[1]) && parseInt(t[1], 10) < e;
        }
        function Bu(e) {
          if (
            e === top ||
            B(e) ||
            (function (e) {
              return !!U(e, '_fs_run_in_iframe', 'boolean');
            })(e) ||
            j(e)
          )
            return !0;
          try {
            return e.parent.document, Bu(e.parent);
          } catch (e) {}
          return !1;
        }
        function ju(e) {
          return !Cr &&
            e.postMessage &&
            e.MutationObserver &&
            Vu(e.Map) &&
            Vu(e.Set) &&
            Vu(e.WeakMap) &&
            s.snapshot.status !== r.UnrecoverableFailure
            ? !!Bu(e) || !1
            : ((function (e) {
                try {
                  e.snapshot.status === r.UnrecoverableFailure &&
                    (Ae.sendToBugsnag(e.snapshot.errors[0], 'error'),
                    e.snapshot.errors.forEach(o));
                } catch (e) {}
              })(s),
              !1);
        }
        function Vu(e) {
          try {
            if (e) return new e(), !0;
          } catch (e) {}
          return !1;
        }
        qu(28), qu(27), Wu(23), Wu(38), Wu(57), Wu(60);
        var Ku = function (e, t) {
          var n, r, i;
          switch (t) {
            case 'url.now':
              return null !== (n = e.getCurrentSessionURL(!0)) && void 0 !== n
                ? n
                : null;
            case 'id':
              return null !== (r = e.getCurrentSession()) && void 0 !== r
                ? r
                : null;
            default:
              return null !== (i = e.getCurrentSessionURL()) && void 0 !== i
                ? i
                : null;
          }
        };
        function zu(e, t) {
          switch (e) {
            case 'getSession':
            case 'init':
            case 'observe':
            case 'restart':
            case 'setConfig':
            case 'setIdentity':
            case 'setPage':
            case 'shutdown':
            case 'source':
            case 'start':
            case 'trackEvent':
              return { operation: e, option: t };
            case 'stat':
              return {
                operation: e,
                option: {
                  event_type: (n = t).eventType || n.event_type,
                  properties: n.payload || n.properties,
                },
              };
            case 'log':
              var n = t;
              return (
                s.arrayIsArray(t) && (n = { level: t[0], msg: t[1] }),
                { operation: e, option: n }
              );
            case 'setVars':
            case 'setProperties':
              var r = y.V2.OperationName.SetProperties;
              return (
                (n = t),
                s.arrayIsArray(t) &&
                  (n = { type: t[0], properties: (i = t[1]) }),
                { operation: r, option: n }
              );
            case 'event':
              return (
                (n = t),
                t &&
                  'object' == typeof t &&
                  'n' in t &&
                  (n = { name: t.n, properties: t.p }),
                { operation: (r = y.V2.OperationName.TrackEvent), option: n }
              );
            case 'user':
              var i = t;
              return {
                operation: (r = y.V2.OperationName.SetProperties),
                option: { type: 'user', properties: i },
              };
            case 'consent':
              var o = t;
              return {
                operation: (r = y.V2.OperationName.SetIdentity),
                option: { consent: o },
              };
            case 'rec':
              return t
                ? { operation: y.V2.OperationName.Restart }
                : { operation: (r = y.V2.OperationName.Shutdown) };
          }
        }
        var Qu = 'must be an object';
        function Gu(e) {
          return !!e && 'object' == typeof e;
        }
        function Yu(e, t) {
          return t in e;
        }
        function Xu(e, t) {
          return 'Init Api - invalid ' + e + ' config, ' + t;
        }
        function Zu(e) {
          var t;
          if (!e || 'object' != typeof e) return !1;
          var n = e;
          return (
            Ju(n.target, ['any', 'exclude', 'mask']) &&
            Ju(n.tag) &&
            Ju(n.action, ['erase', 'maskText', 'scrubUrl', 'scrubCss']) &&
            Ju(null !== (t = n.type) && void 0 !== t ? t : 'static', [
              'static',
              'prefix',
            ])
          );
        }
        function Ju(e, t) {
          return (
            void 0 === t && (t = []),
            'string' == typeof e && (0 === t.length || -1 !== t.indexOf(e))
          );
        }
        var $u = X(function () {}),
          ec = { commit: $u, discard: $u },
          tc = [
            y.V2.OperationName.Source,
            y.V2.OperationName.TrackEvent,
            y.V2.OperationName.GetSession,
          ],
          nc = (function () {
            function e() {}
            return (
              (e.prototype.createTopRecorder = function (e) {
                var t =
                  U(e.window, '_fs_use_socket', 'boolean') && Au.isSupported()
                    ? new Au(e)
                    : new ra(e);
                return new Ka(e, t);
              }),
              (e.prototype.createInnerRecorder = function (e) {
                return new Ga(e);
              }),
              e
            );
          })(),
          rc = (function () {
            function e(e, t) {
              void 0 === e && (e = window),
                void 0 === t && (t = new nc()),
                (this._wnd = e),
                (this._recMaker = t),
                (this._scheme = 'https:'),
                (this._domDoneLoaded = !1),
                (this._canRecord = !0),
                (this._identity = null),
                (this._waitingOnStart = !1),
                (this._captureState = dt.Shutdown),
                (this._recordingObserver = new Nu()),
                (this._recordingSubject = new Du(this._recordingObserver));
            }
            return (
              (e.prototype.init = function () {
                var e, t;
                k(this._wnd) ||
                  (this._wnd,
                  (e = this._wnd),
                  (t = I(this._wnd)),
                  (e._fs_loaded = t),
                  t in e || (e[t] = {}),
                  (function (e) {
                    (0, i.__awaiter)(this, void 0, Jt, function () {
                      var t;
                      return (0, i.__generator)(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return [4, wu(e, s.snapshot)];
                          case 1:
                            return (
                              (t = n.sent()), s.rebuildFromSnapshot(t), [2]
                            );
                        }
                      });
                    });
                  })(this._wnd),
                  this._initApi(),
                  this._start(),
                  this._wnd,
                  this._recordingSubject.onFSInit());
              }),
              (e.prototype.initCaptureSettings = function () {
                var e = (function (e) {
                  var t = {
                    orgId: q(e) || '',
                    script: N(e) || '',
                    recHost: F(e) || '',
                    cdnHost: D(e) || '',
                    appHost: H(e) || '',
                    captureOnStart: W(e),
                  };
                  return t.orgId &&
                    t.script &&
                    t.recHost &&
                    t.cdnHost &&
                    t.appHost
                    ? t
                    : null;
                })(this._wnd);
                if (null === e) return !1;
                var t = e.appHost,
                  n = e.cdnHost,
                  r = e.orgId,
                  i = e.recHost,
                  o = e.script,
                  s = e.captureOnStart;
                return (
                  (this._appHost = t),
                  (this._cdnHost = n),
                  (this._orgId = r),
                  (this._recHost = i),
                  (this._script = o),
                  (this._captureOnStart = s),
                  'localhost:8080' == this._recHost && (this._scheme = 'http:'),
                  (function (e) {
                    var t;
                    _i(
                      null !== (t = ei[e]) && void 0 !== t
                        ? t
                        : ut.DefaultOrgSettings.UrlPrivacyConfig,
                      ut.DefaultOrgSettings.MaxUrlLength
                    );
                  })(r),
                  ju(this._wnd)
                );
              }),
              (e.prototype.log = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                this._handleApiOperation([y.V1.OperationName.Log, e]);
              }),
              (e.prototype.getCurrentSessionURL = function (e) {
                return this._getSession(e ? 'url.now' : 'url');
              }),
              (e.prototype.getCurrentSession = function () {
                return this._getSession('id');
              }),
              (e.prototype._getSession = function (e) {
                return this._recorder ? Ku(this._recorder, e) : null;
              }),
              (e.prototype.enableConsole = function () {
                this._handleApiOperation([
                  y.V2.OperationName.SetConfig,
                  { console: !0 },
                ]);
              }),
              (e.prototype.disableConsole = function () {
                this._handleApiOperation([
                  y.V2.OperationName.SetConfig,
                  { console: !1 },
                ]);
              }),
              (e.prototype.shutdown = function (e) {
                void 0 === e && (e = je.Api),
                  (this._captureState = dt.Shutdown),
                  this._recorder &&
                    !this._deferredStart &&
                    (this._recorder.shutdown(e),
                    (this._recorder = null),
                    !this.inFrame() &&
                      this._vars &&
                      this._vars.unloadCrossPageVars(e),
                    this._recordingSubject.onShutdown(e));
              }),
              (e.prototype.restart = function () {
                if (this._canRecord)
                  return this._deferredStart
                    ? (this._deferredStart(), void (this._deferredStart = null))
                    : void (this._recorder || this._onCreateRecorder(!0));
              }),
              (e.prototype.splitPage = function (e, t) {
                return (0, i.__awaiter)(this, void 0, Jt, function () {
                  return (0, i.__generator)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return t && null == this._identity
                          ? [2]
                          : this._waitingOnStart
                          ? ((this._splitPending = [e, t]), [2])
                          : (this.shutdown(e), [4, en(0)]);
                      case 1:
                        return n.sent(), [4, en(0)];
                      case 2:
                        return (
                          n.sent(),
                          t && this._identity && this._identity.clear(),
                          this.restart(),
                          [2]
                        );
                    }
                  });
                });
              }),
              (e.prototype._api = function (e, t, n, r, i) {
                var o;
                return (
                  this._handleApiOperation([
                    e,
                    t,
                    n,
                    r ||
                      function (e) {
                        o = e;
                      },
                    i,
                  ]),
                  o
                );
              }),
              (e.prototype.executeApiSequenceWrapper = function (e, t) {
                return (function (e, t) {
                  for (
                    var n,
                      r,
                      i,
                      o,
                      s,
                      a,
                      u,
                      c = t.inFrame,
                      h = t.initConfig,
                      d = t.recorder,
                      l = t.recordingObserver,
                      p = t.state,
                      f = t.vars,
                      _ = (function (e) {
                        for (var t = [], n = 0, r = e; n < r.length; n++) {
                          var i = r[n],
                            o = i[0],
                            s = i[1],
                            a = i[2],
                            u = i[3],
                            c = i[4],
                            h = zu(o, s);
                          h &&
                            ((h.source =
                              'string' == typeof a ? { integration: a } : a),
                            (h.resolve = u),
                            (h.reject = c),
                            t.push(h));
                        }
                        return t;
                      })(e),
                      v = [],
                      g = !1,
                      m = !1,
                      S = [],
                      w = [],
                      E = function (e) {
                        if (f) {
                          var t = f.api(e),
                            n = t.events;
                          t.reidentify &&
                            ((v = []), (g = !0), w.push.apply(w, S), (S = [])),
                            v.push.apply(v, n);
                        }
                      },
                      b = function (e, t) {
                        S.push(
                          (function (e, t) {
                            return e
                              ? {
                                  commit: X(function () {
                                    return e(t);
                                  }),
                                  discard: X(function () {
                                    return e(t);
                                  }),
                                }
                              : ec;
                          })(e.resolve, t)
                        );
                      },
                      T = function (e, t) {
                        var n, r;
                        S.push(
                          ((n = e.reject),
                          (r = t),
                          n
                            ? {
                                commit: X(function () {
                                  return n(r);
                                }),
                                discard: X(function () {
                                  return n(r);
                                }),
                              }
                            : ec)
                        );
                      },
                      C = function (e) {
                        try {
                          if (
                            (e.operation, c && -1 === tc.indexOf(e.operation))
                          ) {
                            var t =
                              'FS.' +
                              e.operation +
                              '() is not available in an inner frame';
                            return (
                              m || (m = !0), T(e, new Error(t)), 'continue'
                            );
                          }
                          switch (e.operation) {
                            case y.V2.OperationName.Restart:
                            case y.V2.OperationName.Start:
                              (s = !0), b(e);
                              break;
                            case y.V2.OperationName.Shutdown:
                              (s = !1), b(e);
                              break;
                            case y.V2.OperationName.Log:
                              var f = e.option,
                                _ = f.level,
                                g =
                                  ((t = f.msg),
                                  d.console().logEvent(_, t ? [t] : [], 'fs'));
                              g && v.push(g), b(e);
                              break;
                            case y.V2.OperationName.SetIdentity:
                              var w = function (t) {
                                E({
                                  operation: y.V2.OperationName.SetProperties,
                                  option: t,
                                  source: e.source,
                                  resolve: e.resolve,
                                  reject: e.reject,
                                });
                              };
                              e.option && 'object' == typeof e.option
                                ? (Object.prototype.hasOwnProperty.call(
                                    e.option,
                                    'consent'
                                  ) &&
                                    (a =
                                      null !== (n = e.option.consent) &&
                                      void 0 !== n &&
                                      n),
                                  Object.prototype.hasOwnProperty.call(
                                    e.option,
                                    'uid'
                                  ) &&
                                    w({
                                      type: 'user',
                                      properties: { uid: e.option.uid },
                                    }),
                                  Object.prototype.hasOwnProperty.call(
                                    e.option,
                                    'properties'
                                  ) &&
                                    w({
                                      type: 'user',
                                      properties:
                                        null !== (r = e.option.properties) &&
                                        void 0 !== r
                                          ? r
                                          : {},
                                    }),
                                  (null === (i = e.option) || void 0 === i
                                    ? void 0
                                    : i.anonymous) &&
                                    w({
                                      type: 'user',
                                      properties: { uid: !1 },
                                    }))
                                : w({
                                    type: 'user',
                                    properties: { uid: e.option },
                                  }),
                                b(e);
                              break;
                            case y.V2.OperationName.TrackEvent:
                            case y.V2.OperationName.SetPage:
                            case y.V2.OperationName.SetProperties:
                              E(e), b(e);
                              break;
                            case y.V2.OperationName.GetSession:
                              var C = Ku(
                                d,
                                null === (o = e.option) || void 0 === o
                                  ? void 0
                                  : o.format
                              );
                              b(e, C);
                              break;
                            case y.V2.OperationName.SetConfig:
                              var I = e.option.console;
                              S.push({
                                commit: X(function () {
                                  I
                                    ? d.console().enable()
                                    : d.console().disable();
                                }),
                                discard: X(function () {}),
                              }),
                                b(e);
                              break;
                            case y.V2.OperationName.Stat:
                              var k = e.option,
                                A = k.event_type,
                                x = k.properties;
                              v.push(
                                (function (e, t) {
                                  var n = ut.DefaultStatsSettings,
                                    r = n.MaxEventTypeLength,
                                    i = n.MaxPayloadLength,
                                    o =
                                      'string' == typeof e
                                        ? e.trim().slice(0, r)
                                        : '';
                                  return {
                                    Kind: Oe.STATS,
                                    Args: [o, Si(Kn(t, i))],
                                  };
                                })(A, x)
                              ),
                                b(e);
                              break;
                            case y.V2.OperationName.Observe:
                              var R = e.option,
                                P = R.type,
                                O = R.callback;
                              b(
                                e,
                                null == l ? void 0 : l.registerListener(P, O)
                              );
                              break;
                            case y.V2.OperationName.Source:
                              var M = Fa({
                                source: e.option.source,
                                type: 'default',
                                entrypoint: 'source',
                              });
                              v.push(M), b(e);
                              break;
                            case y.V2.OperationName.Init:
                              if (p !== dt.Shutdown) {
                                (t =
                                  'Capture already started - init rejected.'),
                                  T(e, new Error(t));
                                break;
                              }
                              if (void 0 !== u || void 0 !== h) {
                                (t = 'Multiple calls to init - init rejected.'),
                                  T(e, new Error(t));
                                break;
                              }
                              var L = (function (e) {
                                  var t,
                                    n = { recoverable: [], unrecoverable: [] };
                                  if (!Gu(e))
                                    return (
                                      n.unrecoverable.push(Xu('options', Qu)),
                                      [n, null]
                                    );
                                  var r = {};
                                  if (Yu(e, 'privacy')) {
                                    var i = (function (e) {
                                        var t = 'privacy.attributeBlocklist',
                                          n = [];
                                        if (!Gu(e))
                                          return (
                                            n.push(Xu('privacy', Qu)),
                                            [n, void 0]
                                          );
                                        if (!Yu(e, 'attributeBlocklist'))
                                          return [n, void 0];
                                        if (!ee(e.attributeBlocklist))
                                          return (
                                            n.push(Xu(t, 'must be an array')),
                                            [n, void 0]
                                          );
                                        for (
                                          var r = { attributeBlocklist: [] },
                                            i = 0,
                                            o = e.attributeBlocklist;
                                          i < o.length;
                                          i++
                                        ) {
                                          var s = o[i];
                                          Zu(s)
                                            ? r.attributeBlocklist.push(s)
                                            : n.push(
                                                Xu(t, 'invalid rule: ' + Kn(s))
                                              );
                                        }
                                        return [n, r];
                                      })(e.privacy),
                                      o = i[0],
                                      s = i[1];
                                    (t = n.recoverable).push.apply(t, o),
                                      (r.privacy = s);
                                  }
                                  return [n, r];
                                })(e.option),
                                U = L[0],
                                N = L[1];
                              if (U.unrecoverable.length > 0 || null === N) {
                                (t =
                                  'Init config rejected: ' +
                                  U.unrecoverable.join(',\n')),
                                  T(e, new Error(t));
                                break;
                              }
                              U.recoverable.length > 0 &&
                                (t =
                                  'Init config partially rejected: ' +
                                  U.recoverable.join(',\n')),
                                (u = N),
                                b(e);
                              break;
                            default:
                              (0, kr.nt)(e, 'invalid operation');
                          }
                        } catch (t) {
                          Ae.sendToBugsnag(t, 'error'), T(e, t);
                        }
                      },
                      I = 0,
                      k = _;
                    I < k.length;
                    I++
                  )
                    C(k[I]);
                  return {
                    applyApi: function () {
                      for (var e = d.queue(), t = 0, n = v; t < n.length; t++) {
                        var r = n[t];
                        e.enqueue(r);
                      }
                      void 0 !== a && d.setConsent(a),
                        void 0 !== u && d.setInitConfig(u),
                        w.forEach(function (e) {
                          return e.discard();
                        }),
                        S.forEach(function (e) {
                          return e.commit();
                        });
                    },
                    initConfig: u,
                    recordingShouldBeEnabled: s,
                    reidentified: g,
                  };
                })(t, {
                  inFrame: this.inFrame(),
                  initConfig: this._initConfig,
                  recorder: e,
                  recordingObserver: this._recordingObserver,
                  state: this._captureState,
                  vars: this._vars,
                });
              }),
              (e.prototype._handleApiOperation = function (e) {
                var t;
                if (this._recorder && !this._splitPending) {
                  var n =
                      null !==
                        (t = this.executeApiSequenceWrapper(this._recorder, [
                          e,
                        ])) && void 0 !== t
                        ? t
                        : { reidentified: !1, applyApi: function () {} },
                    r = n.applyApi,
                    i = n.initConfig,
                    o = n.recordingShouldBeEnabled;
                  n.reidentified
                    ? (K(this._wnd, e), this.splitPage(je.Reidentify, !0))
                    : (void 0 !== i && (this._initConfig = i), r()),
                    void 0 !== o &&
                      (o ? this.restart() : this.shutdown(je.Api));
                } else {
                  var s = e[0],
                    a = e[3];
                  'restart' === s || 'start' === s
                    ? ((void 0 === a ? function () {} : a)(null),
                      this.restart())
                    : K(this._wnd, e);
                }
              }),
              (e.prototype._cookies = function () {
                return this._identity ? this._identity.getCookies() : null;
              }),
              (e.prototype._setCookie = function (e, t) {
                this._identity && this._identity.setCookie(e, t);
              }),
              (e.prototype._withEventQueue = function (e, t) {
                if (this._recorder) {
                  var n = this._recorder.queue(),
                    r = this._recorder.pageSignature();
                  null != n &&
                    null != r &&
                    (e === r
                      ? t(n)
                      : Kn(
                          {
                            msg: 'Error in _withEventQueue: Page Signature mismatch',
                            pageSignature: r,
                            callerSignature: e,
                          },
                          1024
                        ));
                }
              }),
              (e.prototype._withRecorder = function (e, t) {
                if (this._recorder) {
                  var n = this._recorder.pageSignature();
                  null !== n &&
                    (void 0 === e || e === n
                      ? t(this._recorder)
                      : Kn(
                          {
                            msg: 'Error in _withRecorder: Page Signature mismatch',
                            pageSignature: n,
                            callerSignature: e,
                          },
                          1024
                        ));
                }
              }),
              (e.prototype._initApi = function () {
                var e = A(this._wnd);
                if (e)
                  for (
                    var t = 0,
                      n = [
                        'disableConsole',
                        'enableConsole',
                        'log',
                        'restart',
                        'shutdown',
                        'getCurrentSession',
                        'getCurrentSessionURL',
                        '_api',
                        '_withEventQueue',
                        '_withRecorder',
                        '_cookies',
                        '_setCookie',
                      ];
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    e[r] = de(this[r], this, ce);
                  }
              }),
              (e.prototype._start = function () {
                var e = this;
                (this._canRecord = this.initCaptureSettings()),
                  this._canRecord &&
                    (this._onCreateRecorder(!1),
                    this._hookLoadEvents(),
                    this._wnd.addEventListener(
                      'message',
                      Ae.wrap(function (t) {
                        return e._onMessage(t);
                      })
                    ));
              }),
              (e.prototype._resetState = function () {
                var e = this;
                if (this._orgId) {
                  var t = this.inFrame();
                  (this._identity = new ru(
                    this._orgId,
                    this._wnd.document,
                    function (t) {
                      for (var n, r = 0, i = t; r < i.length; r++) {
                        var o = i[r];
                        null === (n = e._recorder) ||
                          void 0 === n ||
                          n
                            .queue()
                            .enqueue({
                              Kind: Oe.STORAGE_WRITE_FAILURE,
                              Args: o,
                            });
                      }
                    },
                    t
                  )),
                    this._vars
                      ? this._vars.setIdentity(this._identity)
                      : (this._vars = new fu(this._identity));
                }
              }),
              (e.prototype._onMessage = function (e) {
                if (
                  'string' == typeof e.data &&
                  (e.source == this._wnd.parent || e.source == this._wnd)
                )
                  switch (ya(e.data)[0]) {
                    case pa.ShutdownFrame:
                      this.shutdown(je.FsShutdownFrame);
                      break;
                    case pa.RestartFrame:
                      this.restart();
                  }
              }),
              (e.prototype._onCreateRecorder = function (e) {
                this._resetState(),
                  (this._recorder = this._createRecorder(e)),
                  this._recorder;
              }),
              (e.prototype._context = function (e, t) {
                var n,
                  r = this,
                  i = s.mathRound(
                    null !==
                      (n = X(function () {
                        var e;
                        return null === (e = window.performance) || void 0 === e
                          ? void 0
                          : e.now();
                      })()) && void 0 !== n
                      ? n
                      : -1
                  );
                return {
                  window: this._wnd,
                  time: new tr(),
                  measurer: an.create(this._wnd),
                  options: {
                    appHost: this._appHost,
                    orgId: this._orgId,
                    recHost: this._recHost,
                    cdnHost: this._cdnHost,
                    scheme: this._scheme,
                    script: this._script,
                  },
                  recording: {
                    bundleUploadInterval: function () {
                      var t, n;
                      return null !==
                        (n =
                          null === (t = e()) || void 0 === t
                            ? void 0
                            : t.bundleUploadInterval()) && void 0 !== n
                        ? n
                        : ut.DefaultBundleUploadInterval;
                    },
                    getCurrentSessionURL: function (t) {
                      var n, r;
                      return null !==
                        (r =
                          null === (n = e()) || void 0 === n
                            ? void 0
                            : n.getCurrentSessionURL(t)) && void 0 !== r
                        ? r
                        : null;
                    },
                    identity: this._identity,
                    inFrame: t,
                    pageResponse: function () {
                      var t;
                      return null === (t = e()) || void 0 === t
                        ? void 0
                        : t.getPageResponse();
                    },
                    pageSignature: function () {
                      var t, n;
                      return null !==
                        (n =
                          null === (t = e()) || void 0 === t
                            ? void 0
                            : t.pageSignature()) && void 0 !== n
                        ? n
                        : null;
                    },
                    preroll: i,
                    splitPage: function (e, t) {
                      return r.splitPage(e, t);
                    },
                    vars: this._vars,
                    observer: this._recordingSubject,
                    bundleApiVersion: function () {
                      var t, n;
                      return null !==
                        (n =
                          null === (t = e()) || void 0 === t
                            ? void 0
                            : t.getBundleApiVersion()) && void 0 !== n
                        ? n
                        : 'v1';
                    },
                  },
                  queue: function () {
                    var t;
                    return null === (t = e()) || void 0 === t
                      ? void 0
                      : t.queue();
                  },
                };
              }),
              (e.prototype._addPreservedVarRawEvents = function (e, t) {
                if (t && this._vars) {
                  for (
                    var n = 0, r = this._vars.getDocumentVars();
                    n < r.length;
                    n++
                  ) {
                    var i = r[n];
                    e.enqueue(i);
                  }
                  var o = this._vars.getCrossPageVars();
                  void 0 !== o && e.enqueue(o);
                }
              }),
              (e.prototype._createRecorder = function (e) {
                var t,
                  n = this,
                  r = this.inFrame();
                if (void 0 === r) return null;
                var i = this._context(function () {
                    return t;
                  }, !!r),
                  o = function (r) {
                    void 0 === r && (r = !1),
                      (n._captureState = dt.Starting),
                      t.start(
                        r,
                        function () {
                          (n._captureState = dt.Started),
                            (n._waitingOnStart = !1),
                            e && t.tellAllFramesTo([pa.RestartFrame]),
                            n._splitPending &&
                              (n.splitPage(
                                n._splitPending[0],
                                n._splitPending[1]
                              ),
                              (n._splitPending = null));
                        },
                        function () {
                          n._captureState = dt.Shutdown;
                        }
                      );
                  };
                return (
                  r
                    ? ((t = this._recMaker.createInnerRecorder(i)),
                      this._onCreateInnerRecorder(t, o))
                    : ((t = this._recMaker.createTopRecorder(i)),
                      this._onCreateTopRecorder(t, o, e)),
                  t
                );
              }),
              (e.prototype._onCreateTopRecorder = function (e, t, n) {
                var r;
                this._waitingOnStart = !0;
                var i,
                  o = !1,
                  s = [];
                this._addPreservedVarRawEvents(e.queue(), n);
                var a = U(this._wnd, '_fs_asset_map_id');
                a &&
                  s.push([
                    y.V1.VarOperationName.Vars,
                    [Xe.Document, { assetMapId: a }],
                  ]),
                  s.push.apply(s, V(this._wnd));
                var u =
                    null !== (r = this.executeApiSequenceWrapper(e, s)) &&
                    void 0 !== r
                      ? r
                      : { applyApi: function () {} },
                  c = u.applyApi,
                  h = u.initConfig,
                  d = u.recordingShouldBeEnabled,
                  l = u.reidentified;
                e
                  .queue()
                  .enqueue({
                    Kind: Oe.REC_FEAT_SUPPORTED,
                    Args: [Qe.CaptureOnStartEnabled, !!this._captureOnStart],
                  }),
                  void 0 !== d ? (o = !d) : this._captureOnStart && (o = !0),
                  (this._captureOnStart = !1),
                  void 0 !== h && (this._initConfig = h),
                  (i = !!l),
                  c(),
                  o
                    ? (this._deferredStart = function () {
                        return t(i);
                      })
                    : t(i);
              }),
              (e.prototype._onCreateInnerRecorder = function (e, t) {
                var n;
                (this._waitingOnStart = !0),
                  (0,
                  (null !==
                    (n = this.executeApiSequenceWrapper(e, V(this._wnd))) &&
                  void 0 !== n
                    ? n
                    : { applyApi: function () {} }
                  ).applyApi)(),
                  t(!1);
              }),
              (e.prototype.inFrame = function () {
                return (
                  'boolean' == typeof this._inFrame ||
                    (this._inFrame =
                      ((e = this._orgId),
                      (r = j((t = this._wnd))),
                      B(t)
                        ? (n = !1)
                        : t !== top
                        ? (n = !0)
                        : r
                        ? e && r.init && r.init(e) && (n = !0)
                        : (n = !1),
                      n)),
                  this._inFrame
                );
                var e, t, n, r;
              }),
              (e.prototype._hookLoadEvents = function () {
                var e = this,
                  t = function () {
                    e._domDoneLoaded ||
                      ((e._domDoneLoaded = !0),
                      e._recorder && e._recorder.onDomLoad());
                  },
                  n = !1,
                  r = function () {
                    n || ((n = !0), e._recorder && e._recorder.onLoad());
                  };
                switch (document.readyState) {
                  case 'interactive':
                    t();
                    break;
                  case 'complete':
                    t(), r();
                }
                this._domDoneLoaded ||
                  document.addEventListener('DOMContentLoaded', Ae.wrap(t)),
                  n ||
                    this._wnd.addEventListener(
                      'load',
                      Ae.wrap(function (e) {
                        t(), r();
                      })
                    );
              }),
              e
            );
          })();
        !(function () {
          try {
            new rc().init();
          } catch (e) {
            Ae.sendToBugsnag(e, 'error');
          }
        })();
      },
      220: function (e, t, n) {
        (t.nt = void 0),
          n(940),
          n(327),
          (t.nt = function (e, t) {
            throw (
              (void 0 === t &&
                (t = 'Reached unexpected case in exhaustive switch'),
              new Error(t))
            );
          });
      },
      327: function (e, t) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.ExtendedObject = void 0),
          (t.ExtendedObject = Object);
      },
      940: function (e, t, n) {
        n.r(t),
          n.d(t, {
            __extends: function () {
              return i;
            },
            __assign: function () {
              return o;
            },
            __rest: function () {
              return s;
            },
            __decorate: function () {
              return a;
            },
            __param: function () {
              return u;
            },
            __metadata: function () {
              return c;
            },
            __awaiter: function () {
              return h;
            },
            __generator: function () {
              return d;
            },
            __createBinding: function () {
              return l;
            },
            __exportStar: function () {
              return p;
            },
            __values: function () {
              return f;
            },
            __read: function () {
              return _;
            },
            __spread: function () {
              return v;
            },
            __spreadArrays: function () {
              return g;
            },
            __spreadArray: function () {
              return y;
            },
            __await: function () {
              return m;
            },
            __asyncGenerator: function () {
              return S;
            },
            __asyncDelegator: function () {
              return w;
            },
            __asyncValues: function () {
              return E;
            },
            __makeTemplateObject: function () {
              return b;
            },
            __importStar: function () {
              return C;
            },
            __importDefault: function () {
              return I;
            },
            __classPrivateFieldGet: function () {
              return k;
            },
            __classPrivateFieldSet: function () {
              return A;
            },
            __classPrivateFieldIn: function () {
              return x;
            },
          });
        var r = function (e, t) {
          return (
            (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }),
            r(e, t)
          );
        };
        function i(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Class extends value ' +
                String(t) +
                ' is not a constructor or null'
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }
        var o = function () {
          return (
            (o =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            o.apply(this, arguments)
          );
        };
        function s(e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        }
        function a(e, t, n, r) {
          var i,
            o = arguments.length,
            s =
              o < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r;
          if (
            'object' == typeof Reflect &&
            'function' == typeof Reflect.decorate
          )
            s = Reflect.decorate(e, t, n, r);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (i = e[a]) &&
                (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
          return o > 3 && s && Object.defineProperty(t, n, s), s;
        }
        function u(e, t) {
          return function (n, r) {
            t(n, r, e);
          };
        }
        function c(e, t) {
          if (
            'object' == typeof Reflect &&
            'function' == typeof Reflect.metadata
          )
            return Reflect.metadata(e, t);
        }
        function h(e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function s(e) {
              try {
                u(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
              try {
                u(r['throw'](e));
              } catch (e) {
                o(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, a);
            }
            u((r = r.apply(e, t || [])).next());
          });
        }
        function d(e, t) {
          var n,
            r,
            i,
            o,
            s = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            'function' == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function a(o) {
            return function (a) {
              return (function (o) {
                if (n) throw new TypeError('Generator is already executing.');
                for (; s; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & o[0]
                            ? r['return']
                            : o[0]
                            ? r['throw'] || ((i = r['return']) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, o[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return s.label++, { value: o[1], done: !1 };
                      case 5:
                        s.label++, (r = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(
                            (i = (i = s.trys).length > 0 && i[i.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0])
                          )
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                          (s.label = i[1]), (i = o);
                          break;
                        }
                        if (i && s.label < i[2]) {
                          (s.label = i[2]), s.ops.push(o);
                          break;
                        }
                        i[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    o = t.call(e, s);
                  } catch (e) {
                    (o = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, a]);
            };
          }
        }
        var l = Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              (i &&
                !('get' in i ? !t.__esModule : i.writable || i.configurable)) ||
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i);
            }
          : function (e, t, n, r) {
              void 0 === r && (r = n), (e[r] = t[n]);
            };
        function p(e, t) {
          for (var n in e)
            'default' === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              l(t, e, n);
        }
        function f(e) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
          if (n) return n.call(e);
          if (e && 'number' == typeof e.length)
            return {
              next: function () {
                return (
                  e && r >= e.length && (e = void 0),
                  { value: e && e[r++], done: !e }
                );
              },
            };
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
          );
        }
        function _(e, t) {
          var n = 'function' == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            o = n.call(e),
            s = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
              s.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = o['return']) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return s;
        }
        function v() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(_(arguments[t]));
          return e;
        }
        function g() {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
          var r = Array(e),
            i = 0;
          for (t = 0; t < n; t++)
            for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++)
              r[i] = o[s];
          return r;
        }
        function y(e, t, n) {
          if (n || 2 === arguments.length)
            for (var r, i = 0, o = t.length; i < o; i++)
              (!r && i in t) ||
                (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
          return e.concat(r || Array.prototype.slice.call(t));
        }
        function m(e) {
          return this instanceof m ? ((this.v = e), this) : new m(e);
        }
        function S(e, t, n) {
          if (!Symbol.asyncIterator)
            throw new TypeError('Symbol.asyncIterator is not defined.');
          var r,
            i = n.apply(e, t || []),
            o = [];
          return (
            (r = {}),
            s('next'),
            s('throw'),
            s('return'),
            (r[Symbol.asyncIterator] = function () {
              return this;
            }),
            r
          );
          function s(e) {
            i[e] &&
              (r[e] = function (t) {
                return new Promise(function (n, r) {
                  o.push([e, t, n, r]) > 1 || a(e, t);
                });
              });
          }
          function a(e, t) {
            try {
              (n = i[e](t)).value instanceof m
                ? Promise.resolve(n.value.v).then(u, c)
                : h(o[0][2], n);
            } catch (e) {
              h(o[0][3], e);
            }
            var n;
          }
          function u(e) {
            a('next', e);
          }
          function c(e) {
            a('throw', e);
          }
          function h(e, t) {
            e(t), o.shift(), o.length && a(o[0][0], o[0][1]);
          }
        }
        function w(e) {
          var t, n;
          return (
            (t = {}),
            r('next'),
            r('throw', function (e) {
              throw e;
            }),
            r('return'),
            (t[Symbol.iterator] = function () {
              return this;
            }),
            t
          );
          function r(r, i) {
            t[r] = e[r]
              ? function (t) {
                  return (n = !n)
                    ? { value: m(e[r](t)), done: 'return' === r }
                    : i
                    ? i(t)
                    : t;
                }
              : i;
          }
        }
        function E(e) {
          if (!Symbol.asyncIterator)
            throw new TypeError('Symbol.asyncIterator is not defined.');
          var t,
            n = e[Symbol.asyncIterator];
          return n
            ? n.call(e)
            : ((e = f(e)),
              (t = {}),
              r('next'),
              r('throw'),
              r('return'),
              (t[Symbol.asyncIterator] = function () {
                return this;
              }),
              t);
          function r(n) {
            t[n] =
              e[n] &&
              function (t) {
                return new Promise(function (r, i) {
                  !(function (e, t, n, r) {
                    Promise.resolve(r).then(function (t) {
                      e({ value: t, done: n });
                    }, t);
                  })(r, i, (t = e[n](t)).done, t.value);
                });
              };
          }
        }
        function b(e, t) {
          return (
            Object.defineProperty
              ? Object.defineProperty(e, 'raw', { value: t })
              : (e.raw = t),
            e
          );
        }
        var T = Object.create
          ? function (e, t) {
              Object.defineProperty(e, 'default', { enumerable: !0, value: t });
            }
          : function (e, t) {
              e['default'] = t;
            };
        function C(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              'default' !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                l(t, e, n);
          return T(t, e), t;
        }
        function I(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function k(e, t, n, r) {
          if ('a' === n && !r)
            throw new TypeError(
              'Private accessor was defined without a getter'
            );
          if ('function' == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              'Cannot read private member from an object whose class did not declare it'
            );
          return 'm' === n ? r : 'a' === n ? r.call(e) : r ? r.value : t.get(e);
        }
        function A(e, t, n, r, i) {
          if ('m' === r) throw new TypeError('Private method is not writable');
          if ('a' === r && !i)
            throw new TypeError(
              'Private accessor was defined without a setter'
            );
          if ('function' == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              'Cannot write private member to an object whose class did not declare it'
            );
          return 'a' === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n;
        }
        function x(e, t) {
          if (null === t || ('object' != typeof t && 'function' != typeof t))
            throw new TypeError("Cannot use 'in' operator on non-object");
          return 'function' == typeof e ? t === e : e.has(t);
        }
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.d = function (e, t) {
    for (var r in t)
      n.o(t, r) &&
        !n.o(e, r) &&
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    n(248);
})();
