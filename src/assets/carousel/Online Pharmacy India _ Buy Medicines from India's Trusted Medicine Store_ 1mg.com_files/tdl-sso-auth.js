(() => {
  var t = {
      757: (t, e, r) => {
        t.exports = r(666);
      },
      666: (t) => {
        var e = (function (t) {
          'use strict';
          var e,
            r = Object.prototype,
            n = r.hasOwnProperty,
            a = 'function' == typeof Symbol ? Symbol : {},
            o = a.iterator || '@@iterator',
            i = a.asyncIterator || '@@asyncIterator',
            s = a.toStringTag || '@@toStringTag';
          function c(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            c({}, '');
          } catch (t) {
            c = function (t, e, r) {
              return (t[e] = r);
            };
          }
          function u(t, e, r, n) {
            var a = e && e.prototype instanceof m ? e : m,
              o = Object.create(a.prototype),
              i = new B(n || []);
            return (
              (o._invoke = (function (t, e, r) {
                var n = d;
                return function (a, o) {
                  if (n === f) throw new Error('Generator is already running');
                  if (n === h) {
                    if ('throw' === a) throw o;
                    return O();
                  }
                  for (r.method = a, r.arg = o; ; ) {
                    var i = r.delegate;
                    if (i) {
                      var s = E(i, r);
                      if (s) {
                        if (s === y) continue;
                        return s;
                      }
                    }
                    if ('next' === r.method) r.sent = r._sent = r.arg;
                    else if ('throw' === r.method) {
                      if (n === d) throw ((n = h), r.arg);
                      r.dispatchException(r.arg);
                    } else 'return' === r.method && r.abrupt('return', r.arg);
                    n = f;
                    var c = l(t, e, r);
                    if ('normal' === c.type) {
                      if (((n = r.done ? h : p), c.arg === y)) continue;
                      return { value: c.arg, done: r.done };
                    }
                    'throw' === c.type &&
                      ((n = h), (r.method = 'throw'), (r.arg = c.arg));
                  }
                };
              })(t, r, i)),
              o
            );
          }
          function l(t, e, r) {
            try {
              return { type: 'normal', arg: t.call(e, r) };
            } catch (t) {
              return { type: 'throw', arg: t };
            }
          }
          t.wrap = u;
          var d = 'suspendedStart',
            p = 'suspendedYield',
            f = 'executing',
            h = 'completed',
            y = {};
          function m() {}
          function g() {}
          function v() {}
          var T = {};
          c(T, o, function () {
            return this;
          });
          var A = Object.getPrototypeOf,
            S = A && A(A(C([])));
          S && S !== r && n.call(S, o) && (T = S);
          var w = (v.prototype = m.prototype = Object.create(T));
          function I(t) {
            ['next', 'throw', 'return'].forEach(function (e) {
              c(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function b(t, e) {
            function r(a, o, i, s) {
              var c = l(t[a], t, o);
              if ('throw' !== c.type) {
                var u = c.arg,
                  d = u.value;
                return d && 'object' == typeof d && n.call(d, '__await')
                  ? e.resolve(d.__await).then(
                      function (t) {
                        r('next', t, i, s);
                      },
                      function (t) {
                        r('throw', t, i, s);
                      }
                    )
                  : e.resolve(d).then(
                      function (t) {
                        (u.value = t), i(u);
                      },
                      function (t) {
                        return r('throw', t, i, s);
                      }
                    );
              }
              s(c.arg);
            }
            var a;
            this._invoke = function (t, n) {
              function o() {
                return new e(function (e, a) {
                  r(t, n, e, a);
                });
              }
              return (a = a ? a.then(o, o) : o());
            };
          }
          function E(t, r) {
            var n = t.iterator[r.method];
            if (n === e) {
              if (((r.delegate = null), 'throw' === r.method)) {
                if (
                  t.iterator.return &&
                  ((r.method = 'return'),
                  (r.arg = e),
                  E(t, r),
                  'throw' === r.method)
                )
                  return y;
                (r.method = 'throw'),
                  (r.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return y;
            }
            var a = l(n, t.iterator, r.arg);
            if ('throw' === a.type)
              return (
                (r.method = 'throw'), (r.arg = a.arg), (r.delegate = null), y
              );
            var o = a.arg;
            return o
              ? o.done
                ? ((r[t.resultName] = o.value),
                  (r.next = t.nextLoc),
                  'return' !== r.method && ((r.method = 'next'), (r.arg = e)),
                  (r.delegate = null),
                  y)
                : o
              : ((r.method = 'throw'),
                (r.arg = new TypeError('iterator result is not an object')),
                (r.delegate = null),
                y);
          }
          function P(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function L(t) {
            var e = t.completion || {};
            (e.type = 'normal'), delete e.arg, (t.completion = e);
          }
          function B(t) {
            (this.tryEntries = [{ tryLoc: 'root' }]),
              t.forEach(P, this),
              this.reset(!0);
          }
          function C(t) {
            if (t) {
              var r = t[o];
              if (r) return r.call(t);
              if ('function' == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var a = -1,
                  i = function r() {
                    for (; ++a < t.length; )
                      if (n.call(t, a))
                        return (r.value = t[a]), (r.done = !1), r;
                    return (r.value = e), (r.done = !0), r;
                  };
                return (i.next = i);
              }
            }
            return { next: O };
          }
          function O() {
            return { value: e, done: !0 };
          }
          return (
            (g.prototype = v),
            c(w, 'constructor', v),
            c(v, 'constructor', g),
            (g.displayName = c(v, s, 'GeneratorFunction')),
            (t.isGeneratorFunction = function (t) {
              var e = 'function' == typeof t && t.constructor;
              return (
                !!e &&
                (e === g || 'GeneratorFunction' === (e.displayName || e.name))
              );
            }),
            (t.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, v)
                  : ((t.__proto__ = v), c(t, s, 'GeneratorFunction')),
                (t.prototype = Object.create(w)),
                t
              );
            }),
            (t.awrap = function (t) {
              return { __await: t };
            }),
            I(b.prototype),
            c(b.prototype, i, function () {
              return this;
            }),
            (t.AsyncIterator = b),
            (t.async = function (e, r, n, a, o) {
              void 0 === o && (o = Promise);
              var i = new b(u(e, r, n, a), o);
              return t.isGeneratorFunction(r)
                ? i
                : i.next().then(function (t) {
                    return t.done ? t.value : i.next();
                  });
            }),
            I(w),
            c(w, s, 'Generator'),
            c(w, o, function () {
              return this;
            }),
            c(w, 'toString', function () {
              return '[object Generator]';
            }),
            (t.keys = function (t) {
              var e = [];
              for (var r in t) e.push(r);
              return (
                e.reverse(),
                function r() {
                  for (; e.length; ) {
                    var n = e.pop();
                    if (n in t) return (r.value = n), (r.done = !1), r;
                  }
                  return (r.done = !0), r;
                }
              );
            }),
            (t.values = C),
            (B.prototype = {
              constructor: B,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = e),
                  this.tryEntries.forEach(L),
                  !t)
                )
                  for (var r in this)
                    't' === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = e);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var r = this;
                function a(n, a) {
                  return (
                    (s.type = 'throw'),
                    (s.arg = t),
                    (r.next = n),
                    a && ((r.method = 'next'), (r.arg = e)),
                    !!a
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    s = i.completion;
                  if ('root' === i.tryLoc) return a('end');
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, 'catchLoc'),
                      u = n.call(i, 'finallyLoc');
                    if (c && u) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          'try statement without catch or finally'
                        );
                      if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var a = this.tryEntries[r];
                  if (
                    a.tryLoc <= this.prev &&
                    n.call(a, 'finallyLoc') &&
                    this.prev < a.finallyLoc
                  ) {
                    var o = a;
                    break;
                  }
                }
                o &&
                  ('break' === t || 'continue' === t) &&
                  o.tryLoc <= e &&
                  e <= o.finallyLoc &&
                  (o = null);
                var i = o ? o.completion : {};
                return (
                  (i.type = t),
                  (i.arg = e),
                  o
                    ? ((this.method = 'next'), (this.next = o.finallyLoc), y)
                    : this.complete(i)
                );
              },
              complete: function (t, e) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return this.complete(r.completion, r.afterLoc), L(r), y;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ('throw' === n.type) {
                      var a = n.arg;
                      L(r);
                    }
                    return a;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function (t, r, n) {
                return (
                  (this.delegate = {
                    iterator: C(t),
                    resultName: r,
                    nextLoc: n,
                  }),
                  'next' === this.method && (this.arg = e),
                  y
                );
              },
            }),
            t
          );
        })(t.exports);
        try {
          regeneratorRuntime = e;
        } catch (t) {
          'object' == typeof globalThis
            ? (globalThis.regeneratorRuntime = e)
            : Function('r', 'regeneratorRuntime = r')(e);
        }
      },
    },
    e = {};
  function r(n) {
    var a = e[n];
    if (void 0 !== a) return a.exports;
    var o = (e[n] = { exports: {} });
    return t[n](o, o.exports, r), o.exports;
  }
  (r.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return r.d(e, { a: e }), e;
  }),
    (r.d = (t, e) => {
      for (var n in e)
        r.o(e, n) &&
          !r.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      'use strict';
      function t(t, e, r, n, a, o, i) {
        try {
          var s = t[o](i),
            c = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(c) : Promise.resolve(c).then(n, a);
      }
      function e(e) {
        return function () {
          var r = this,
            n = arguments;
          return new Promise(function (a, o) {
            var i = e.apply(r, n);
            function s(e) {
              t(i, a, o, s, c, 'next', e);
            }
            function c(e) {
              t(i, a, o, s, c, 'throw', e);
            }
            s(void 0);
          });
        };
      }
      var n = r(757),
        a = r.n(n),
        o = function (t) {
          var e,
            r =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            n = new Uint8Array(t),
            a = n.length,
            o = '';
          for (e = 0; e < a; e += 3)
            (o += r[n[e] >> 2]),
              (o += r[((3 & n[e]) << 4) | (n[e + 1] >> 4)]),
              (o += r[((15 & n[e + 1]) << 2) | (n[e + 2] >> 6)]),
              (o += r[63 & n[e + 2]]);
          return (
            a % 3 == 2
              ? (o = ''.concat(o.substring(0, o.length - 1), '='))
              : a % 3 == 1 &&
                (o = ''.concat(o.substring(0, o.length - 2), '==')),
            o
          );
        },
        i = (function () {
          var t = e(
            a().mark(function t(e) {
              var r, n, i, s;
              return a().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (r = new TextEncoder()),
                        (n = r.encode(e)),
                        (t.next = 4),
                        window.crypto.subtle.digest('SHA-256', n)
                      );
                    case 4:
                      return (
                        (i = t.sent),
                        (s = o(i)),
                        t.abrupt(
                          'return',
                          s
                            .replace(/\+/g, '-')
                            .replace(/\//g, '_')
                            .replace(/=/g, '')
                        )
                      );
                    case 7:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      function s(t) {
        for (
          var e = '',
            r =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~',
            n = 0;
          n < t;
          n += 1
        )
          e += r.charAt(Math.floor(Math.random() * r.length));
        return e;
      }
      (window.codeVerifierTdlSsoAuth = s(128)),
        (window.codeChallengeTdlSsoAuth = i(window.codeVerifierTdlSsoAuth));
      var c,
        u = window.location.href,
        l =
          (c = document.currentScript.src).includes('localhost') ||
          c.includes('0.0.0.0')
            ? 'http://localhost:8080/v2/'
            : c.includes('dev')
            ? 'https://dev-account.tatadigital.com/v2/'
            : c.includes('sit-account')
            ? 'https://sit-account.tatadigital.com/v2/'
            : c.includes('pt')
            ? 'https://pt-account.tatadigital.com/v2/'
            : c.includes('sit-r2-account')
            ? 'https://sit-r2-account.tatadigital.com/v2/'
            : c.includes('accounts')
            ? 'https://accounts.tatadigital.com/v2/'
            : c.includes('bf')
            ? 'https://bf-account.tatadigital.com/v2/'
            : 'https://dev-account.tatadigital.com/v2/',
        d = function () {
          var t = l;
          return t.includes('localhost') ||
            t.includes('0.0.0.0') ||
            t.includes('dev')
            ? 'https://dapi.tatadigital.com'
            : t.includes('sit-account')
            ? 'https://sapi.tatadigital.com'
            : t.includes('sit-r2-account')
            ? 'https://ppapi.tatadigital.com'
            : t.includes('pt')
            ? 'https://pfapi.tatadigital.com'
            : t.includes('accounts')
            ? 'https://api.tatadigital.com'
            : t.includes('bf')
            ? 'https://bapi.tatadigital.com'
            : 'https://dapi.tatadigital.com';
        },
        p = function () {
          var t = l;
          return t.includes('dev')
            ? 'https://tatadigital-dev.adobecqms.net'
            : t.includes('sit-r2-account') || t.includes('pt')
            ? 'https://aem-sit-r2.tatadigital.com'
            : t.includes('accounts')
            ? 'https://tatadigital.com'
            : 'https://tatadigital-dev.adobecqms.net';
        };
      window.ssoSdkGetClientId = function (t) {
        return [
          'tajhotels.com',
          'amastaysandtrails.com',
          'vivantahotels.com',
          'seleqtionshotels.com',
          'taj-dev65-02.adobecqms.net',
          'taj-stage65-1.adobecqms.net',
          'gingerhotels',
        ].find(function (e) {
          return t.includes(e);
        })
          ? 'IHCL-WEB-APP'
          : '';
      };
      var f = {};
      function h() {
        return ''.concat(
          (function () {
            var t = window.tdlSsoAuthScriptSrc,
              e = 'd';
            return (
              t.includes('sit-account')
                ? (e = 's')
                : t.includes('pt')
                ? (e = 'pt')
                : t.includes('sit-r2-account')
                ? (e = 'pp')
                : t.includes('accounts') || t.includes('members')
                ? (e = '')
                : t.includes('bf') && (e = 'bf'),
              'https://'.concat(e, 'api.tatadigital.com')
            );
          })(),
          '/analytics-engine'
        );
      }
      (window.ssoSdkGenerateAuthCodeForTargetDomain = (function () {
        var t = e(
          a().mark(function t(e, r, n, o) {
            var i, s, c;
            return a().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (i = ''.concat(
                        d(),
                        '/api/v2/sso/redirect-client-auth-code'
                      )),
                      (s = {
                        redirectClientId: window.ssoSdkGetClientId(r.origin),
                        redirectUrl: r.href,
                        codeChallenge: f.codeChallenge,
                      }),
                      (t.next = 4),
                      fetch(i, {
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                          client_id: n,
                          client_secret: o,
                          'Access-Control-Allow-Origin': d(),
                          Authorization: 'Bearer '.concat(e),
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(s),
                      })
                    );
                  case 4:
                    return (c = (c = t.sent).json()), t.abrupt('return', c);
                  case 7:
                  case 'end':
                    return t.stop();
                }
            }, t);
          })
        );
        return function (e, r, n, a) {
          return t.apply(this, arguments);
        };
      })()),
        (window.tdlSsoAuth = {});
      var y,
        m = {
          'finbox.in': 'FS-BNPL-FINBOX-WEB-APP',
          'bigbasket.com': 'BIGBASKET-WEB-MOBILE-APP',
          'www.tatadigital.com': 'TCP-WEB-APP',
          'aem-sit-r2.tatadigital.com': 'TCP-WEB-APP',
          'tatadigital-dev.adobecqms.net': 'TCP-WEB-APP',
          'cult.fit': 'CULTFIT-WEB-APP',
          'cultsport.com': 'CULTFIT-WEB-APP',
          'tatacliq.com': 'TATACLIQ-WEB-APP',
          'tataunistore.com': 'TATACLIQ-WEB-APP',
          qmin: 'QMIN-WEB-APP',
          'luxury.tatacliq': 'TATACLIQ-LUXURY-WEB-APP',
          'luxpreprod1.tataunistore': 'TATACLIQ-LUXURY-WEB-APP',
          '1mg.com': 'ONEMG-WEB-APP',
          'croma.com': 'CROMA-WEB-APP',
          'tajhotels.com': 'IHCL-WEB-APP',
          'amastaysandtrails.com': 'IHCL-AMA-WEB-APP',
          'vivantahotels.com': 'IHCL-VIVANTA-WEB-APP',
          'seleqtionshotels.com': 'IHCL-SELEQTIONS-WEB-APP',
          'taj-dev65-02.adobecqms.net': 'IHCL-WEB-APP',
          'taj-stage65-1.adobecqms.net': 'IHCL-WEB-APP',
          airasia: 'AIRASIA-WEB-APP',
          westside: 'WESTSIDE-WEB-APP',
          tatamotor: 'TATAMOTORS-WEB-APP',
          'qe-fastrack': 'TITAN-FASTRACK-WEB-APP',
          titaneyeplus: 'TITAN-EYEPLUS-WEB-APP',
          taneira: 'TITAN-TANEIRA-WEB-APP',
          traqgear: 'TITAN-TRAQ-WEB-APP',
          zoya: 'TITAN-ZOYA-WEB-APP',
          sonatawatches: 'TITAN-SONATA-WEB-APP',
          fastrack: 'TITAN-FASTRACK-WATCH-WEB-APP',
          skinn: 'TITAN-SKINN-WEB-APP',
          miabytanishq: 'TITAN-MIA-WEB-APP',
          'tanishq.co.in': 'TITAN-TANISHQ-WEB-APP',
          capitalfloat: 'AXIO-CAPITALFLOAT-WEB-APP',
          titan: 'TITAN-WATCH-WEB-APP',
          gingerhotels: 'IHCL-GINGER-WEB-APP',
          simplotel: 'IHCL-GINGER-WEB-APP',
        },
        g = {
          'IHCL-VIVANTA-WEB-APP': 'IHCL',
          'IHCL-AMA-WEB-APP': 'IHCL',
          'IHCL-SELEQTIONS-WEB-APP': 'IHCL',
          'QMIN-WEB-APP': 'IHCL',
          'TATACLIQ-WEB-APP': 'TATACLIQ',
          'FS-BNPL-FINBOX-WEB-APP': 'FS',
          'TCP-WEB-APP': 'TATADIGITAL',
          'BIGBASKET-WEB-MOBILE-APP': 'BIGBASKET',
          'IHCL-WEB-APP': 'IHCL',
          'IHCL-GINGER-WEB-APP': 'IHCL',
          'TATACLIQ-LUXURY-WEB-APP': 'TATACLIQ-LUXURY',
          'CULTFIT-WEB-APP': 'CULTFIT',
          'ONEMG-WEB-APP': 'ONEMG',
          'CROMA-WEB-APP': 'CROMA',
          'AIRASIA-WEB-APP': 'AIRASIA',
          'WESTSIDE-WEB-APP': 'WESTSIDE',
          'TATAMOTORS-WEB-APP': 'TATAMOTORS',
          'TITAN-FASTRACK-WEB-APP': 'FASTRACK-EYEWEAR',
          'TITAN-EYEPLUS-WEB-APP': 'EYEPLUS',
          'TITAN-TANEIRA-WEB-APP': 'TANEIRA',
          'TITAN-TRAQ-WEB-APP': 'TRAQ',
          'TITAN-ZOYA-WEB-APP': 'ZOYA',
          'TITAN-SONATA-WEB-APP': 'SONATA',
          'TITAN-FASTRACK-WATCH-WEB-APP': 'FASTRACK-WATCH',
          'TITAN-SKINN-WEB-APP': 'SKINN',
          'TITAN-MIA-WEB-APP': 'MIA',
          'TITAN-TANISHQ-WEB-APP': 'TANISHQ',
          'AXIO-CAPITALFLOAT-WEB-APP': 'CAPITALFLOAT',
          'TITAN-WATCH-WEB-APP': 'TITAN',
        },
        v = {
          'clientId=IHCL-WEB-APP': 'IHCL-WEB-APP',
          'clientId=GINGER-WEB-APP': 'IHCL-GINGER-WEB-APP',
        };
      function T() {
        sessionStorage.getItem('analyticsConfig') ||
          sessionStorage.setItem(
            'analyticsConfig',
            JSON.stringify({
              isSentryEnabled: !1,
              clientIdToBrandMap: g,
              domainToClientIdMap: m,
              hrefToClientIdMap: v,
              brandsToRecordWebVitalsOn: [
                'TATADIGITAL',
                'IHCL',
                'AIRASIA',
                'BIGBASKET',
                'CROMA',
                'ONEMG',
                'TATACLIQ',
                'TATACLIQ-LUXURY',
                'EYEPLUS',
                'TITAN',
                'TANISHQ',
                'WESTSIDE',
                'QMIN',
              ],
              maxClicksToRecordPerSecond: 10,
              modifyHistoryOwnMethodsOnBrands: [
                'AIRASIA',
                'BIGBASKET',
                'CROMA',
              ],
              dataLayerArgumentEventsToRecord: {
                DEFAULT: ['gtm.load', 'gtm.dom', 'gtm.click'],
                CROMA: ['gtm.click', 'page_view'],
                BIGBASKET: [],
                TATACLIQ: ['page_view'],
                TANISHQ: [],
              },
              dataLayerObjectEventsToRecord: {
                DEFAULT: ['gtm.dom', 'gtm.load', 'gtm.click'],
                CROMA: ['gtm.scrollDepth', 'gtm.linkClick'],
                BIGBASKET: [],
                TATACLIQ: [],
                TITAN: [],
                TANISHQ: [],
              },
              listenToPastDataLayerEvents: !0,
              isRetryFailedRequests: !0,
              recordGTMDataOnBrands: [
                'CROMA',
                'TANISHQ',
                'TITAN',
                'ONEMG',
                'BIGBASKET',
                'EYEPLUS',
                'TATACLIQ',
                'TATACLIQ-LUXURY',
              ],
              redirectedFromTCPFlagExpiresInS: 86400,
              sessionIdExpiresInS: 86400,
              testUsers: [],
              maxRetryCountFailedRequests: 3,
              maxFailedRequestsInLocalStorage: 5,
              failedRequestsRetryIntervalInS: 300,
              featuresOnBrands: { captureDigitalData: ['TATADIGITAL'] },
              featuresOnBrandsConfig: {
                captureDigitalData: {
                  eventNames: [
                    'tap',
                    'SLP : Launcher',
                    'SLP : Banner',
                    'SLP : Click',
                  ],
                },
              },
              urls: [
                'reqbin',
                'transaction',
                'checkout',
                'orderConfirmation',
                'order-confirmation',
                'potential-order',
                'order',
              ],
              syncTrackingUrls: [
                'createOrderForTcp',
                'sandbox.juspay.in/txns',
                'paymentconfirmation',
                'payment/status/ui',
                'detail?isGetCart',
                'getAllWishlist',
                'cartDetails_V2',
              ],
              brand: 'default',
              brandsForAnalytics: [
                'FS',
                'BIGBASKET',
                'ONEMG',
                'CROMA',
                'IHCL',
                'TATACLIQ',
                'TATACLIQ-LUXURY',
                'WESTSIDE',
                'AIRASIA',
                'TATADIGITAL',
                'QMIN',
                'CULTFIT',
                'TANEIRA',
                'TRAQ',
                'ZOYA',
                'SONATA',
                'TITAN',
                'FASTRACK-EYEWEAR',
                'FASTRACK-WATCH',
                'SKINN',
                'MIA',
                'TANISHQ',
                'EYEPLUS',
              ],
              htmlPageScriptTagKeywords: {
                WESTSIDE: [
                  {
                    pageUrl: '/thank_you',
                    stringsToMatch: ['Shopify.checkout', 'customer_id'],
                    shouldStartAfter: '',
                    shouldEndBefore: '',
                  },
                ],
              },
              events: [
                {
                  tcpBrand: 'ALL',
                  urlMatch: '',
                  class: '',
                  innerText: '',
                  id: '',
                  elementType: '',
                  captureEvents: ['onclick'],
                },
                {
                  tcpBrand: 'CROMA',
                  urlMatch: '',
                  class: '',
                  innerText: 'Add to cart',
                  id: '',
                  elementType: 'button',
                  captureEvents: ['onclick'],
                },
                {
                  tcpBrand: 'CROMA',
                  urlMatch: '',
                  class: 'buyNowBtn',
                  innerText: 'buy now',
                  id: '',
                  elementType: 'button',
                  captureEvents: ['onclick'],
                },
                {
                  tcpBrand: 'CROMA',
                  urlMatch: 'https://preprod-pwa.croma.com/cart',
                  class: 'checkout-btn',
                  innerText: ' CHECKOUT ',
                  id: '',
                  elementType: 'button',
                  captureEvents: ['onclick', 'onfocus'],
                },
                {
                  tcpBrand: 'CROMA',
                  urlMatch: 'https://preprod-pwa.croma.com/checkout',
                  class: '',
                  innerText: 'select payment',
                  id: '',
                  elementType: 'button',
                  captureEvents: ['onclick', 'onfocus'],
                },
                {
                  tcpBrand: 'TATACLIQ',
                  urlMatch: 'https://preprod1.tataunistore.com/cart',
                  class: 'Button__base',
                  innerText: 'BUY NOW',
                  id: '',
                  elementType: 'div',
                  captureEvents: ['onclick'],
                },
                {
                  tcpBrand: 'TATACLIQ',
                  urlMatch: 'https://preprod1.tataunistore.com/cart',
                  class: 'Button__base',
                  innerText: 'ADD TO BAG',
                  id: '',
                  elementType: 'div',
                  captureEvents: ['onclick'],
                },
                {
                  tcpBrand: 'TATACLIQ',
                  urlMatch: 'https://preprod1.tataunistore.com/checkout',
                  class: 'Button__base',
                  innerText: 'Continue',
                  id: '',
                  elementType: 'div',
                  captureEvents: ['onclick'],
                },
                {
                  tcpBrand: 'TATACLIQ',
                  urlMatch: 'https://preprod1.tataunistore.com/checkout',
                  class: 'UpiForm__verifyBtn',
                  innerText: 'Verify',
                  id: '',
                  elementType: 'button',
                  captureEvents: ['onclick'],
                },
                {
                  tcpBrand: 'TATACLIQ',
                  urlMatch: 'https://preprod1.tataunistore.com/checkout',
                  class: 'UpiForm__payNow',
                  innerText: 'Pay Now',
                  id: '',
                  elementType: 'button',
                  captureEvents: ['onclick'],
                },
                {
                  tcpBrand: 'BIGBASKET',
                  urlMatch: 'https://hqa1.bigbasket.com',
                  class: 'btn btn-add col-xs-9',
                  innerText: 'Add',
                  id: '',
                  elementType: 'button',
                  captureEvents: ['onclick', 'ng-click'],
                },
                {
                  tcpBrand: 'BIGBASKET',
                  urlMatch: 'https://hqa1.bigbasket.com/basket/?ver=1',
                  class: 'icon icon-increase-qty-search-popup',
                  innerText: '+',
                  id: '',
                  elementType: 'button',
                  captureEvents: ['onclick'],
                },
                {
                  tcpBrand: 'BIGBASKET',
                  urlMatch: 'https://hqa1.bigbasket.com',
                  class: 'btn btn-default dropdown-toggle form-control',
                  innerText: ' - Rs ',
                  id: '',
                  elementType: 'button',
                  captureEvents: ['onclick', 'ng-click'],
                },
                {
                  tcpBrand: 'BIGBASKET',
                  urlMatch: 'https://hqa1.bigbasket.com/basket/?ver=1',
                  class: 'icon icon-decrease-qty-search-popup',
                  innerText: '-',
                  id: '',
                  elementType: 'button',
                  captureEvents: ['onclick'],
                },
                {
                  tcpBrand: 'BIGBASKET',
                  urlMatch: 'https://hqa1.bigbasket.com/basket/?ver=1',
                  class: 'uiv2-empty-basket',
                  innerText: 'EMPTY BASKET',
                  id: '',
                  elementType: 'a',
                  captureEvents: ['onclick'],
                },
                {
                  tcpBrand: 'BIGBASKET',
                  urlMatch: 'https://hqa1.bigbasket.com/basket/?ver=1',
                  class: 'uiv2-removerow ',
                  innerText: 'x',
                  id: 'p_10000144_remove',
                  elementType: 'a',
                  captureEvents: ['onclick'],
                },
                {
                  tcpBrand: 'BIGBASKET',
                  urlMatch: 'https://hqa1.bigbasket.com/co/checkout/',
                  class:
                    'btn btn-lg btn-primary margin-top-15 margin-bottom-10',
                  innerText: 'PROCEED TO PAYMENT',
                  id: '',
                  elementType: 'button',
                  captureEvents: ['onclick'],
                },
                {
                  tcpBrand: 'BIGBASKET',
                  urlMatch: 'https://hqa1.bigbasket.com/basket/?ver=1',
                  class: 'uiv2-checkout-button',
                  innerText: 'CHECKOUT',
                  id: 'checkout',
                  elementType: 'button',
                  captureEvents: ['onclick'],
                },
                {
                  tcpBrand: 'BIGBASKET',
                  urlMatch: 'https://hqa1.bigbasket.com/basket/?ver=1',
                  class: 'uiv2-continue-shopping-button',
                  innerText: 'CONTINUE SHOPPING',
                  id: '',
                  elementType: 'a',
                  captureEvents: ['onclick'],
                },
              ],
              cartAndWishListConfig: {
                CROMA: {
                  'detail?isGetCart': {
                    type: 'cart',
                    products: ['entries'],
                    keysToCapture: {
                      productId: ['product', 'code'],
                      quantity: ['quantity'],
                      productName: ['product', 'name'],
                      price: ['product', 'price', 'value'],
                    },
                  },
                  'detail?fields=FULL': {
                    type: 'wishlist',
                    products: ['entries'],
                    keysToCapture: {
                      productId: ['product', 'code'],
                      quantity: ['quantity'],
                      productName: ['product', 'name'],
                      price: ['product', 'price', 'value'],
                    },
                  },
                },
                TATACLIQ: {
                  getAllWishlist: {
                    type: 'wishlist',
                    products: ['wishList', 0, 'products'],
                    keysToCapture: {
                      productId: ['USSID'],
                      quantity: ['quantity'],
                      productName: ['productName'],
                      price: ['mrp', 'value'],
                    },
                  },
                  cartDetails_V2: {
                    type: 'cart',
                    products: ['products'],
                    keysToCapture: {
                      productId: ['USSID'],
                      quantity: ['qtySelectedByUser'],
                      productName: ['productName'],
                      price: ['price'],
                    },
                  },
                },
                'TATACLIQ-LUXURY': {
                  getAllWishlist: {
                    type: 'wishlist',
                    products: ['wishList', 0, 'products'],
                    keysToCapture: {
                      productId: ['USSID'],
                      quantity: ['quantity'],
                      productName: ['productName'],
                      price: ['mrp', 'value'],
                    },
                  },
                  'cartDetails?access_token': {
                    type: 'cart',
                    products: ['products'],
                    keysToCapture: {
                      productId: ['USSID'],
                      quantity: ['quantity'],
                      productName: ['productName'],
                      price: ['price'],
                    },
                  },
                },
                WESTSIDE: {
                  'cart.js': {
                    type: 'cart',
                    products: ['items'],
                    keysToCapture: {
                      productId: ['product_id'],
                      quantity: ['quantity'],
                      productName: ['title'],
                      price: ['price'],
                    },
                  },
                },
              },
              clientId: 'TCP-WEB-APP',
              bufferArrayLength: 20,
              bufferIntervalInSeconds: 30,
              bufferSizeInKb: 0,
              dataPublishEndpoint: ''.concat(h(), '/events/v1'),
            })
          );
      }
      function A() {
        try {
          var t = JSON.parse(sessionStorage.getItem('analyticsConfig'));
          return (
            t ||
              (T(),
              (t = JSON.parse(sessionStorage.getItem('analyticsConfig')))),
            [
              'urls',
              'brandsForAnalytics',
              'events',
              'syncTrackingUrls',
            ].forEach(function (e) {
              'string' == typeof t[e] && (t[e] = JSON.parse(t[e]));
            }),
            t.htmlPageScriptTagKeywords &&
              Object.keys(t.htmlPageScriptTagKeywords).forEach(function (e) {
                'string' == typeof t.htmlPageScriptTagKeywords[e] &&
                  (t.htmlPageScriptTagKeywords[e] = JSON.parse(
                    t.htmlPageScriptTagKeywords[e]
                  ));
              }),
            t
          );
        } catch (t) {
          return (
            console.log(
              'TDPL-Error: fetching config from session storage failed with',
              t
            ),
            {}
          );
        }
      }
      var S = function () {
          var t, e;
          y || (y = A());
          var r,
            n,
            a = y,
            o = a.domainToClientIdMap,
            i = void 0 === o ? {} : o,
            s = a.clientIdToBrandMap,
            c = void 0 === s ? {} : s,
            u = a.hrefToClientIdMap,
            l = void 0 === u ? {} : u,
            d = window.location,
            p = d.origin,
            f = d.href,
            h = Object.keys(i).find(function (t) {
              return p.includes(t);
            });
          return (
            h ||
              (n = Object.keys(l).find(function (t) {
                return f.includes(t);
              })),
            h ? (r = i[h]) : n && (r = l[n]),
            {
              brand:
                null !==
                  (e =
                    c[
                      (r = null !== (t = r) && void 0 !== t ? t : 'DEFAULT')
                    ]) && void 0 !== e
                  ? e
                  : 'DEFAULT',
              clientId: r,
            }
          );
        },
        w = function () {
          var t;
          return null ===
            (t = document.head.querySelector('meta[name=tdl-sso-client_id]')) ||
            void 0 === t
            ? void 0
            : t.content;
        },
        I = function () {
          var t = w();
          return (t && 'CLIENT-ID' !== t) || (t = S().clientId), t;
        };
      function b() {
        var t;
        return (
          y || (y = A()),
          null !== (t = y.clientIdToBrandMap[w()]) && void 0 !== t
            ? t
            : S().brand
        );
      }
      var E = function (t) {
          if (!t) return null;
          for (
            var e = [], r = 0;
            r < t.length && 'body' !== t[r].localName;
            r += 1
          )
            e.push({
              elementType: t[r].localName,
              id: t[r].id,
              class: t[r].className,
            });
          return e;
        },
        P = function () {
          var t = [];
          try {
            var e;
            A().htmlPageScriptTagKeywords &&
              (null === (e = A().htmlPageScriptTagKeywords[b()]) ||
                void 0 === e ||
                e.forEach(function (e) {
                  if (window.location.href.includes(e.pageUrl)) {
                    var r = document.documentElement.innerHTML
                      .split('<script')
                      .filter(function (t) {
                        var r = !0;
                        return (
                          e.stringsToMatch.every(function (e) {
                            return r && (r = t.includes(e)), r;
                          }),
                          r
                        );
                      });
                    r.length > 0 &&
                      (t = r.map(function (t) {
                        return (
                          e.shouldStartAfter &&
                            (t = t.split(e.shouldStartAfter)[1]),
                          e.shouldEndBefore &&
                            (t = t.split(e.shouldEndBefore)[0]),
                          t
                        );
                      }));
                  }
                }));
          } catch (e) {
            return t;
          }
          return t;
        };
      function L() {
        var t = JSON.parse(localStorage.getItem('tdl-sso-redirect-tcp-flag'));
        return (
          !(null == t || !t.isRedirectedFromTCP || null == t || !t.setAt) &&
          (Date.now() - t.setAt < 1e3 * A().redirectedFromTCPFlagExpiresInS ||
            ((t.isRedirectedFromTCP = !1),
            sessionStorage.setItem('isRedirectedFromTCP', 'false'),
            localStorage.setItem(
              'tdl-sso-redirect-tcp-flag',
              JSON.stringify(t)
            )),
          t.isRedirectedFromTCP)
        );
      }
      function B(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function C(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function O(t, e) {
        if (t) {
          if ('string' == typeof t) return C(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === r && t.constructor && (r = t.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(t)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? C(t, e)
              : void 0
          );
        }
      }
      function k(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return C(t);
          })(t) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(t) ||
          O(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function N(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r =
              null == t
                ? null
                : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != r) {
              var n,
                a,
                o = [],
                i = !0,
                s = !1;
              try {
                for (
                  r = r.call(t);
                  !(i = (n = r.next()).done) &&
                  (o.push(n.value), !e || o.length !== e);
                  i = !0
                );
              } catch (t) {
                (s = !0), (a = t);
              } finally {
                try {
                  i || null == r.return || r.return();
                } finally {
                  if (s) throw a;
                }
              }
              return o;
            }
          })(t, e) ||
          O(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function x(t) {
        return (
          (x =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          x(t)
        );
      }
      var R = function () {
        return !window.tdlSsoAuthScriptSrc.includes('accounts');
      };
      function q(t) {
        var e = '; '.concat(document.cookie).split('; '.concat(t, '='));
        return 2 === e.length ? e.pop().split(';').shift() : null;
      }
      function D(t) {
        return (
          !t.includes('/analytics-engine/') &&
          A().urls.find(function (e) {
            return t.toLowerCase().includes(e.toLowerCase());
          })
        );
      }
      function M(t) {
        return A().syncTrackingUrls.find(function (e) {
          return t.toLowerCase().includes(e.toLowerCase());
        });
      }
      function H() {
        var t = new WeakSet();
        return function (e, r) {
          if ('object' === x(r) && null !== r) {
            if (t.has(r) || void 0 !== r.isConnected) return;
            t.add(r);
          }
          return r;
        };
      }
      function U() {
        var t;
        R() && (t = console).log.apply(t, arguments);
      }
      var W,
        F = function (t) {
          var e;
          return null ===
            (e = document.cookie.split(';').find(function (e) {
              return e.startsWith(''.concat(t)) || e.startsWith(' '.concat(t));
            })) || void 0 === e
            ? void 0
            : e.split('=')[1];
        },
        j = function () {
          var t, e, r, n;
          try {
            switch (b()) {
              case 'CROMA':
                n = localStorage.getItem('customer_hash');
                break;
              case 'TATADIGITAL':
                if (localStorage.getItem('customer_hash')) {
                  n = localStorage.getItem('customer_hash');
                  break;
                }
                if (localStorage.getItem('microsegment')) {
                  var a, o;
                  n =
                    null !==
                      (a =
                        null ===
                          (o = JSON.parse(
                            localStorage.getItem('microsegment')
                          )) || void 0 === o
                          ? void 0
                          : o.customerHash) && void 0 !== a
                      ? a
                      : null;
                  break;
                }
                try {
                  var i = window.CryptoJS;
                  i &&
                    (n = N(
                      i.AES.decrypt(
                        localStorage.getItem('__ENCY__'),
                        'tdl-encrypt'
                      )
                        .toString(i.enc.Utf8)
                        .split('|'),
                      2
                    )[1]);
                } catch (t) {
                  n = null;
                }
                break;
              case 'ONEMG':
                (n = localStorage.getItem('tata_customer_hash')) ||
                  (n = F('tata_customer_hash'));
                break;
              case 'CULTFIT':
                n =
                  null !==
                    (t =
                      null === (e = JSON.parse(localStorage.getItem('user'))) ||
                      void 0 === e
                        ? void 0
                        : e.userId) && void 0 !== t
                    ? t
                    : null;
                break;
              case 'AIRASIA':
                n = sessionStorage.getItem('customerhash');
                break;
              case 'WESTSIDE':
                n = localStorage.getItem('customerHash');
                break;
              case 'BIGBASKET':
                if (localStorage.getItem('SSOInfo')) {
                  var s, c;
                  n =
                    null !==
                      (s =
                        null ===
                          (c = JSON.parse(localStorage.getItem('SSOInfo'))) ||
                        void 0 === c
                          ? void 0
                          : c.customer_hash) && void 0 !== s
                      ? s
                      : null;
                  break;
                }
                sessionStorage.getItem('customerHash') &&
                  (n = sessionStorage.getItem('customerHash'));
                break;
              case 'IHCL':
                var u, l;
                localStorage.getItem('user') &&
                  (n =
                    null !==
                      (u =
                        null ===
                          (l = JSON.parse(localStorage.getItem('user'))) ||
                        void 0 === l
                          ? void 0
                          : l.customerHash) && void 0 !== u
                      ? u
                      : null);
                break;
              case 'TATACLIQ':
              case 'TATACLIQ-LUXURY':
                if (localStorage.getItem('customerHash')) {
                  n = localStorage.getItem('customerHash');
                  break;
                }
                if (localStorage.getItem('customerHashTD')) {
                  n = localStorage.getItem('customerHashTD');
                  break;
                }
                if (localStorage.getItem('customerDetailsTd')) {
                  var d, p;
                  n =
                    null !==
                      (d =
                        null ===
                          (p = JSON.parse(
                            localStorage.getItem('customerDetailsTd')
                          )) || void 0 === p
                          ? void 0
                          : p.customerHash) && void 0 !== d
                      ? d
                      : null;
                  break;
                }
                if (!n) {
                  var f,
                    h,
                    y = F('ssoAccessToken');
                  y &&
                    (n =
                      null === (f = JSON.parse(y)) ||
                      void 0 === f ||
                      null === (h = f.idToken) ||
                      void 0 === h
                        ? void 0
                        : h.customerHash);
                }
                if (!n) {
                  var m,
                    g,
                    v = F('customerAccessTokenTD');
                  v &&
                    (n =
                      null === (m = JSON.parse(v)) ||
                      void 0 === m ||
                      null === (g = m.idToken) ||
                      void 0 === g
                        ? void 0
                        : g.customerHash);
                }
                if (!n) {
                  var T,
                    A = F('ssoUserDetails');
                  A &&
                    (n =
                      null === (T = JSON.parse(A)) || void 0 === T
                        ? void 0
                        : T.customerHash);
                }
                break;
              case 'TANEIRA':
              case 'TRAQ':
              case 'ZOYA':
              case 'SONATA':
              case 'TITAN':
              case 'FASTRACK-EYEWEAR':
              case 'FASTRACK-WATCH':
              case 'SKINN':
              case 'MIA':
              case 'TANISHQ':
              case 'EYEPLUS':
                n = F('customerHash');
                break;
              case 'CAPITALFLOAT':
                break;
              default:
                n = 'default';
            }
          } catch (t) {
            U(t);
          }
          return (
            n && 'default' !== n && localStorage.setItem('tdl-sso-c-hash', n),
            n ||
              (localStorage.getItem('tdl-sso-c-hash') &&
                (n = localStorage.getItem('tdl-sso-c-hash'))),
            null !== (r = n) && void 0 !== r ? r : 'default'
          );
        };
      !(function (t) {
        t.compress = function (e, r) {
          if ((void 0 === r && (r = {}), null == e))
            throw new TypeError('compress: undefined or null input received');
          var n = new t.Compressor().compressBlock(e);
          return o(n);
        };
      })(W || (W = {}));
      var J = new TextEncoder();
      !(function (t) {
        var e = (function () {
          function e(e) {
            void 0 === e && (e = !0),
              (this.MinimumSequenceLength = 4),
              (this.MaximumSequenceLength = 31),
              (this.MaximumMatchDistance = 32767),
              (this.PrefixHashTableSize = 65537),
              (this.inputBufferStreamOffset = 1),
              e &&
                'function' == typeof Uint32Array &&
                (this.prefixHashTable = new t.CompressorCustomHashTable(
                  this.PrefixHashTableSize
                ));
          }
          return (
            (e.prototype.compressBlock = function (e) {
              if (null == e)
                throw new TypeError(
                  'compressBlock: undefined or null input received'
                );
              return (
                'string' == typeof e && (e = J.encode(e)),
                (e = t.BufferTools.convertToUint8ArrayIfNeeded(e)),
                this.compressUtf8Block(e)
              );
            }),
            (e.prototype.compressUtf8Block = function (t) {
              if (!t || 0 == t.length) return new Uint8Array(0);
              var e = this.cropAndAddNewBytesToInputBuffer(t),
                r = this.inputBuffer,
                n = this.inputBuffer.length;
              (this.outputBuffer = new Uint8Array(t.length)),
                (this.outputBufferPosition = 0);
              for (var a = 0, o = e; o < n; o++) {
                var i = r[o],
                  s = o < a;
                if (o > n - this.MinimumSequenceLength)
                  s || this.outputRawByte(i);
                else {
                  var c = this.getBucketIndexForPrefix(o);
                  if (!s) {
                    var u = this.findLongestMatch(o, c);
                    null != u &&
                      (this.outputPointerBytes(u.length, u.distance),
                      (a = o + u.length),
                      (s = !0));
                  }
                  s || this.outputRawByte(i);
                  var l = this.inputBufferStreamOffset + o;
                  this.prefixHashTable.addValueToBucket(c, l);
                }
              }
              return this.outputBuffer.subarray(0, this.outputBufferPosition);
            }),
            (e.prototype.findLongestMatch = function (t, e) {
              var r = this.prefixHashTable.getArraySegmentForBucketIndex(
                e,
                this.reusableArraySegmentObject
              );
              if (null == r) return null;
              for (
                var n, a = this.inputBuffer, o = 0, i = 0;
                i < r.length;
                i++
              ) {
                var s,
                  c = r.getInReversedOrder(i) - this.inputBufferStreamOffset,
                  u = t - c;
                if (
                  ((s =
                    void 0 === n
                      ? this.MinimumSequenceLength - 1
                      : n < 128 && u >= 128
                      ? o + (o >>> 1)
                      : o),
                  u > this.MaximumMatchDistance ||
                    s >= this.MaximumSequenceLength ||
                    t + s >= a.length)
                )
                  break;
                if (a[c + s] === a[t + s])
                  for (var l = 0; ; l++) {
                    if (t + l === a.length || a[c + l] !== a[t + l]) {
                      l > s && ((n = u), (o = l));
                      break;
                    }
                    if (l === this.MaximumSequenceLength)
                      return {
                        distance: u,
                        length: this.MaximumSequenceLength,
                      };
                  }
              }
              return void 0 !== n ? { distance: n, length: o } : null;
            }),
            (e.prototype.getBucketIndexForPrefix = function (t) {
              return (
                (7880599 * this.inputBuffer[t] +
                  39601 * this.inputBuffer[t + 1] +
                  199 * this.inputBuffer[t + 2] +
                  this.inputBuffer[t + 3]) %
                this.PrefixHashTableSize
              );
            }),
            (e.prototype.outputPointerBytes = function (t, e) {
              e < 128
                ? (this.outputRawByte(192 | t), this.outputRawByte(e))
                : (this.outputRawByte(224 | t),
                  this.outputRawByte(e >>> 8),
                  this.outputRawByte(255 & e));
            }),
            (e.prototype.outputRawByte = function (t) {
              this.outputBuffer[this.outputBufferPosition++] = t;
            }),
            (e.prototype.cropAndAddNewBytesToInputBuffer = function (e) {
              if (void 0 === this.inputBuffer) return (this.inputBuffer = e), 0;
              var r = Math.min(
                  this.inputBuffer.length,
                  this.MaximumMatchDistance
                ),
                n = this.inputBuffer.length - r;
              return (
                (this.inputBuffer =
                  t.CompressionCommon.getCroppedAndAppendedByteArray(
                    this.inputBuffer,
                    n,
                    r,
                    e
                  )),
                (this.inputBufferStreamOffset += n),
                r
              );
            }),
            e
          );
        })();
        t.Compressor = e;
      })(W || (W = {})),
        (function (t) {
          var e;
          ((e =
            t.CompressionCommon ||
            (t.CompressionCommon = {})).getCroppedAndAppendedByteArray =
            function (e, r, n, a) {
              return t.ArrayTools.concatUint8Arrays([e.subarray(r, r + n), a]);
            }),
            (e.encodeCompressedBytes = function (e, r) {
              return t.encodeBase64(e);
            });
        })(W || (W = {})),
        (function (t) {
          var e = (function () {
            function e(t) {
              (this.minimumBucketCapacity = 4),
                (this.maximumBucketCapacity = 64),
                (this.bucketLocators = new Uint32Array(2 * t)),
                (this.storage = new Uint32Array(2 * t)),
                (this.storageIndex = 1);
            }
            return (
              (e.prototype.addValueToBucket = function (e, r) {
                (e <<= 1),
                  this.storageIndex >= this.storage.length >>> 1 &&
                    this.compact();
                var n,
                  a = this.bucketLocators[e];
                if (0 === a)
                  (a = this.storageIndex),
                    (n = 1),
                    (this.storage[this.storageIndex] = r),
                    (this.storageIndex += this.minimumBucketCapacity);
                else {
                  (n = this.bucketLocators[e + 1]) ===
                    this.maximumBucketCapacity - 1 &&
                    (n = this.truncateBucketToNewerElements(
                      a,
                      n,
                      this.maximumBucketCapacity / 2
                    ));
                  var o = a + n;
                  0 === this.storage[o]
                    ? ((this.storage[o] = r),
                      o === this.storageIndex && (this.storageIndex += n))
                    : (t.ArrayTools.copyElements(
                        this.storage,
                        a,
                        this.storage,
                        this.storageIndex,
                        n
                      ),
                      (a = this.storageIndex),
                      (this.storageIndex += n),
                      (this.storage[this.storageIndex++] = r),
                      (this.storageIndex += n)),
                    n++;
                }
                (this.bucketLocators[e] = a), (this.bucketLocators[e + 1] = n);
              }),
              (e.prototype.truncateBucketToNewerElements = function (e, r, n) {
                var a = e + r - n;
                return (
                  t.ArrayTools.copyElements(
                    this.storage,
                    a,
                    this.storage,
                    e,
                    n
                  ),
                  t.ArrayTools.zeroElements(this.storage, e + n, r - n),
                  n
                );
              }),
              (e.prototype.compact = function () {
                var e,
                  r = this.bucketLocators,
                  n = this.storage;
                for (
                  this.bucketLocators = new Uint32Array(
                    this.bucketLocators.length
                  ),
                    this.storageIndex = 1,
                    e = 0;
                  e < r.length;
                  e += 2
                ) {
                  var a = r[e + 1];
                  0 !== a &&
                    ((this.bucketLocators[e] = this.storageIndex),
                    (this.bucketLocators[e + 1] = a),
                    (this.storageIndex += Math.max(
                      Math.min(2 * a, this.maximumBucketCapacity),
                      this.minimumBucketCapacity
                    )));
                }
                for (
                  this.storage = new Uint32Array(8 * this.storageIndex), e = 0;
                  e < r.length;
                  e += 2
                ) {
                  var o = r[e];
                  if (0 !== o) {
                    var i = this.bucketLocators[e],
                      s = this.bucketLocators[e + 1];
                    t.ArrayTools.copyElements(n, o, this.storage, i, s);
                  }
                }
              }),
              (e.prototype.getArraySegmentForBucketIndex = function (e, r) {
                e <<= 1;
                var n = this.bucketLocators[e];
                return 0 === n
                  ? null
                  : (void 0 === r &&
                      (r = new t.ArraySegment(
                        this.storage,
                        n,
                        this.bucketLocators[e + 1]
                      )),
                    r);
              }),
              e
            );
          })();
          t.CompressorCustomHashTable = e;
        })(W || (W = {})),
        (function (t) {
          var e;
          ((e =
            t.BufferTools || (t.BufferTools = {})).convertToUint8ArrayIfNeeded =
            function (t) {
              return 'function' == typeof Buffer && Buffer.isBuffer(t)
                ? e.bufferToUint8Array(t)
                : t;
            }),
            (e.uint8ArrayToBuffer = function (t) {
              if (Buffer.prototype instanceof Uint8Array) {
                var e = new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
                return Object.setPrototypeOf(e, Buffer.prototype), e;
              }
              for (var r = t.length, n = new Buffer(r), a = 0; a < r; a++)
                n[a] = t[a];
              return n;
            }),
            (e.bufferToUint8Array = function (t) {
              if (Buffer.prototype instanceof Uint8Array)
                return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
              for (var e = t.length, r = new Uint8Array(e), n = 0; n < e; n++)
                r[n] = t[n];
              return r;
            });
        })(W || (W = {})),
        (function (t) {
          var e = (function () {
            function t(t, e, r) {
              (this.container = t), (this.startPosition = e), (this.length = r);
            }
            return (
              (t.prototype.getInReversedOrder = function (t) {
                return this.container[this.startPosition + this.length - 1 - t];
              }),
              (t.prototype.set = function (t, e) {
                this.container[this.startPosition + t] = e;
              }),
              t
            );
          })();
          t.ArraySegment = e;
        })(W || (W = {})),
        (function (t) {
          var e;
          ((e = t.ArrayTools || (t.ArrayTools = {})).concatUint8Arrays =
            function (t) {
              for (var e, r = 0, n = 0, a = t; n < a.length; n++)
                r += (e = a[n]).length;
              for (
                var o = new Uint8Array(r), i = 0, s = 0, c = t;
                s < c.length;
                s++
              )
                (e = c[s]), o.set(e, i), (i += e.length);
              return o;
            }),
            (e.copyElements = function (t, e, r, n, a) {
              for (; a--; ) r[n++] = t[e++];
            }),
            (e.zeroElements = function (t, e, r) {
              for (; r--; ) t[e++] = 0;
            });
        })(W || (W = {}));
      const G = W;
      var _,
        K = function (t) {
          var e = t.target,
            r = void 0 === e ? {} : e,
            n = t.type,
            a = void 0 === n ? '' : n,
            o = t.composedPath,
            i = void 0 === o ? [] : o,
            s = {
              url: window.location,
              path: E(i),
              target: r.outerHTML,
              timeStamp: Date.now(),
              type: a,
            };
          return JSON.stringify(s, null, 2);
        },
        Q = function (t) {
          return fetch(
            A().dataPublishEndpoint ||
              'https://ppapi.tatadigital.com/analytics-engine/events/v1',
            {
              mode: 'cors',
              method: 'POST',
              cache: 'no-cache',
              body: t,
              credentials: 'include',
              headers: {
                'Content-Type': 'application/json',
                'customer-hash': j(),
                client_id: I(),
                session: q('isTataNue'),
              },
            }
          );
        },
        V = function (t) {
          return navigator.sendBeacon(
            A().dataPublishEndpoint ||
              'https://dapi.tatadigital.com/analytics-engine/events/v1',
            t
          );
        },
        Y = new Uint8Array(16);
      function X() {
        if (
          !_ &&
          !(_ =
            ('undefined' != typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ('undefined' != typeof msCrypto &&
              'function' == typeof msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error(
            'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
          );
        return _(Y);
      }
      const z =
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
        Z = function (t) {
          return 'string' == typeof t && z.test(t);
        };
      for (var $ = [], tt = 0; tt < 256; ++tt)
        $.push((tt + 256).toString(16).substr(1));
      const et = function (t, e, r) {
        var n = (t = t || {}).random || (t.rng || X)();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
          r = r || 0;
          for (var a = 0; a < 16; ++a) e[r + a] = n[a];
          return e;
        }
        return (function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            r = (
              $[t[e + 0]] +
              $[t[e + 1]] +
              $[t[e + 2]] +
              $[t[e + 3]] +
              '-' +
              $[t[e + 4]] +
              $[t[e + 5]] +
              '-' +
              $[t[e + 6]] +
              $[t[e + 7]] +
              '-' +
              $[t[e + 8]] +
              $[t[e + 9]] +
              '-' +
              $[t[e + 10]] +
              $[t[e + 11]] +
              $[t[e + 12]] +
              $[t[e + 13]] +
              $[t[e + 14]] +
              $[t[e + 15]]
            ).toLowerCase();
          if (!Z(r)) throw TypeError('Stringified UUID is invalid');
          return r;
        })(n);
      };
      var rt,
        nt = function (t) {
          t &&
            localStorage.setItem(
              'tdl-sso-session-id',
              JSON.stringify({ sessionId: t, setAt: Date.now() })
            );
        },
        at = function () {
          var t = { sessionId: et(), setAt: Date.now() };
          return (
            localStorage.setItem('tdl-sso-session-id', JSON.stringify(t)), t
          );
        },
        ot = function () {
          var t;
          (t = JSON.parse(localStorage.getItem('tdl-sso-redirect-tcp-flag'))) &&
            Date.now() - t.setAt < 1e3 * A().redirectedFromTCPFlagExpiresInS &&
            (sessionStorage.getItem('isRedirectedFromTCP') !==
              t.isRedirectedFromTCP &&
              sessionStorage.setItem(
                'isRedirectedFromTCP',
                t.isRedirectedFromTCP
              ),
            (t.setAt = Date.now()),
            localStorage.setItem(
              'tdl-sso-redirect-tcp-flag',
              JSON.stringify(t)
            ));
          var e = JSON.parse(localStorage.getItem('tdl-sso-session-id'));
          e
            ? Date.now() - e.setAt < 1e3 * A().sessionIdExpiresInS &&
              ((e.setAt = Date.now()),
              localStorage.setItem('tdl-sso-session-id', JSON.stringify(e)))
            : at();
        },
        it = function () {
          return ''
            .concat(
              ((e = JSON.parse(localStorage.getItem('tdl-sso-session-id'))),
              e &&
              e.sessionId &&
              (Date.now() - e.setAt) / 1e3 < A().sessionIdExpiresInS
                ? e.sessionId
                : at().sessionId),
              '.'
            )
            .concat(
              (t = localStorage.getItem('tdl-sso-user-id')) ||
                ((t = et()), localStorage.setItem('tdl-sso-user-id', t), t)
            );
          var t, e;
        },
        st = {
          bufferData: [],
          pushEvent: function (t) {
            this.bufferData.push({ timestamp: Date.now(), data: t }),
              (new Blob(this.bufferData).size > A().bufferSizeInKb ||
                this.bufferData.length >= A().bufferArrayLength) &&
                this.sendAnalyticsData();
          },
          sendAnalyticsData: function () {
            var t = this;
            return e(
              a().mark(function e() {
                var r;
                return a().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (t.restartBufferTimer(), 0 !== t.bufferData.length)
                        ) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt('return');
                      case 3:
                        return (
                          (r = k(t.bufferData)),
                          (t.bufferData = []),
                          (e.next = 7),
                          t.fireAnalyticsEvent(r)
                        );
                      case 7:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          updateLsRequestBuffer: function (t, e) {
            var r = JSON.parse(localStorage.getItem('tdl-sso-request-buffer'));
            !t || (200 !== t.status && 401 !== t.status && 403 !== t.status)
              ? r[e] && (r[e].timesRetried += 1)
              : delete r[e],
              localStorage.setItem('tdl-sso-request-buffer', JSON.stringify(r));
          },
          appendLsRequestBuffer: function (t, e) {
            var r,
              n = JSON.parse(localStorage.getItem('tdl-sso-request-buffer'));
            n
              ? Object.keys(n).length <
                (null !== (r = A().maxFailedRequestsInLocalStorage) &&
                void 0 !== r
                  ? r
                  : 5)
                ? ((n[t] = { data: e, timesRetried: -1 }),
                  localStorage.setItem(
                    'tdl-sso-request-buffer',
                    JSON.stringify(n)
                  ))
                : U('Storage limit reached.')
              : localStorage.setItem(
                  'tdl-sso-request-buffer',
                  JSON.stringify(B({}, t, { data: e, timesRetried: -1 }))
                );
          },
          constructPayload: function (t) {
            rt || (rt = I());
            var e,
              r,
              n = window.location.href,
              a = Math.floor(1e6 * Math.random()),
              o = JSON.stringify({
                reqId: a,
                isRedirectedFromTCP: L(),
                url: n,
                eventData: t,
                customerHash: j(),
                ecid:
                  ((r =
                    null !==
                      (e = JSON.parse(
                        localStorage.getItem(
                          'com.adobe.reactor.dataElements.ECID'
                        )
                      )) && void 0 !== e
                      ? e
                      : JSON.parse(
                          sessionStorage.getItem(
                            'com.adobe.reactor.dataElements.ECID'
                          )
                        )),
                  null != r ? r : 'Unknown'),
                clientId: rt,
                sessionId: it(),
                brand: b(),
                timestamp: Date.now(),
                device: window.navigator.userAgent,
              });
            return (
              A().testUsers &&
                !A().testUsers.includes(j()) &&
                (o = (function (t) {
                  try {
                    var e = G.compress(t);
                    return JSON.stringify({ secure: !0, ePayload: e });
                  } catch (e) {
                    return U('Error in compressing.'), t;
                  }
                })(o)),
              { payload: o, reqId: a }
            );
          },
          fireAnalyticsEvent: function (t) {
            var r = arguments,
              n = this;
            return e(
              a().mark(function e() {
                var o, i, s, c, u, l;
                return a().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((o = r.length > 1 && void 0 !== r[1] && r[1]),
                          (i = n.constructPayload(t)),
                          (s = i.payload),
                          (c = i.reqId),
                          n.appendLsRequestBuffer(c, s),
                          !o || !navigator.sendBeacon)
                        ) {
                          e.next = 7;
                          break;
                        }
                        return (
                          (u = V(s)) &&
                            n.updateLsRequestBuffer({ status: 200 }, c),
                          e.abrupt('return', u)
                        );
                      case 7:
                        return (e.next = 9), Q(s);
                      case 9:
                        return (
                          (l = e.sent),
                          n.updateLsRequestBuffer(l, c),
                          e.abrupt('return', l)
                        );
                      case 12:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          retryRequest: function (t, r) {
            var n = this;
            return e(
              a().mark(function e() {
                var o, i, s, c;
                return a().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((i = r),
                          null !==
                            (o =
                              r[t].timesRetried >=
                              A().maxRetryCountFailedRequests) &&
                            void 0 !== o &&
                            !o)
                        ) {
                          e.next = 5;
                          break;
                        }
                        return (
                          delete i[t],
                          localStorage.setItem(
                            'tdl-sso-request-buffer',
                            JSON.stringify(i)
                          ),
                          e.abrupt('return')
                        );
                      case 5:
                        return (s = r[t].data), (e.next = 8), Q(s);
                      case 8:
                        (c = e.sent), n.updateLsRequestBuffer(c, t);
                      case 10:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          restartBufferTimer: function () {
            var t,
              e = this;
            this.analyticsTimeout && clearTimeout(this.analyticsTimeout),
              (this.analyticsTimeout = setTimeout(
                function () {
                  return e.sendAnalyticsData();
                },
                null !== (t = 1e3 * A().bufferIntervalInSeconds) && void 0 !== t
                  ? t
                  : 3e4
              ));
          },
        };
      function ct(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ut(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ct(Object(r), !0).forEach(function (e) {
                B(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ct(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var lt = function (t, e) {
        try {
          var r = {
              addedToCart: [],
              removedFromCart: [],
              addedToWishlist: [],
              removedFromWishlist: [],
            },
            n = A().cartAndWishListConfig;
          if (!n) return null;
          if (!Object.keys(n).includes(b())) return null;
          var a = Object.keys(n[b()]).find(function (e) {
            return t.toLowerCase().includes(e.toLowerCase());
          });
          if (!a) return null;
          var o = n[b()][a],
            i = 'string' == typeof e ? JSON.parse(e) : e;
          o.products.forEach(function (t) {
            var e;
            i = null !== (e = i[t]) && void 0 !== e ? e : [];
          });
          var s = i.map(function (t) {
              var e = {};
              return (
                Object.keys(o.keysToCapture).forEach(function (r) {
                  (e[r] = t),
                    o.keysToCapture[r].forEach(function (t) {
                      e[r] = e[r][t];
                    });
                }),
                'string' == typeof e.quantity &&
                  (e.quantity = parseInt(e.quantity, 10)),
                e
              );
            }),
            c = 'cart' === o.type ? 'addedToCart' : 'addedToWishlist',
            u = 'cart' === o.type ? 'removedFromCart' : 'removedFromWishlist',
            l = localStorage.getItem('tdl-sso-cart-wishlist');
          if (!l) {
            var d,
              p = { cart: [], wishlist: [] };
            return (
              (p[o.type] = s),
              localStorage.setItem('tdl-sso-cart-wishlist', JSON.stringify(p)),
              (d = r[c]).push.apply(d, k(s)),
              r
            );
          }
          var f,
            h = JSON.parse(l),
            y = h[o.type];
          return 0 !== y.length && y
            ? (s.forEach(function (t) {
                var e = y.find(function (e) {
                  return e.productId === t.productId;
                });
                e
                  ? e.quantity !== t.quantity && e.quantity > t.quantity
                    ? r[u].push(
                        ut(ut({}, e), {}, { quantity: e.quantity - t.quantity })
                      )
                    : e.quantity !== t.quantity &&
                      e.quantity < t.quantity &&
                      r[c].push(
                        ut(ut({}, e), {}, { quantity: t.quantity - e.quantity })
                      )
                  : r[c].push(t);
              }),
              y.forEach(function (t) {
                s.find(function (e) {
                  return e.productId === t.productId;
                }) || r[u].push(t);
              }),
              (h[o.type] = s),
              localStorage.setItem('tdl-sso-cart-wishlist', JSON.stringify(h)),
              r)
            : ((h[o.type] = s),
              localStorage.setItem('tdl-sso-cart-wishlist', JSON.stringify(h)),
              (f = r[c]).push.apply(f, k(s)),
              r);
        } catch (t) {
          return U(t), null;
        }
      };
      function dt() {
        var t = L();
        if (t) {
          document.cookie = 'isRedirectedFromTCP='.concat(t, '; Path=/;');
          var e = it();
          document.cookie = 'tneuSessionId='.concat(e, '; Path=/;');
        }
      }
      var pt,
        ft,
        ht = 5;
      function yt() {
        ht < 0 ||
          (Object.hasOwn(window, 'analytics')
            ? (window.analytics.realPushEvent ||
                (window.analytics.realPushEvent = window.analytics.pushEvent),
              (window.analytics.pushEvent = function (t) {
                if (
                  A().featuresOnBrandsConfig.captureDigitalData.eventNames.includes(
                    t.event
                  )
                ) {
                  var e = t.digitalData;
                  st.fireAnalyticsEvent([
                    {
                      timestamp: Date.now(),
                      data: JSON.stringify({ event: 'aem-click', payload: e }),
                    },
                  ]);
                }
                window.analytics.realPushEvent(t);
              }))
            : ((ht -= 1), setTimeout(yt, 1e3)));
      }
      function mt() {
        if (localStorage.getItem('tdl-sso-request-buffer'))
          for (
            var t = JSON.parse(localStorage.getItem('tdl-sso-request-buffer')),
              e = 0;
            e < Object.keys(t).length;
            e += 1
          )
            st.retryRequest(Object.keys(t)[e], t).catch(function (t) {
              U('TDPL-SSO: Failed requests retry failed with', t);
            });
      }
      var gt = (function () {
        var t = e(
          a().mark(function t() {
            var e, r;
            return a().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        U('Fetching config'),
                        (t.prev = 1),
                        (t.next = 4),
                        (n = ''.concat(h(), '/config/v1')),
                        fetch(n, {
                          method: 'GET',
                          headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                          },
                        })
                      );
                    case 4:
                      return (e = t.sent), (t.next = 7), e.json();
                    case 7:
                      'Config fetched' === (r = t.sent).success &&
                        sessionStorage.setItem(
                          'analyticsConfig',
                          JSON.stringify(r.config)
                        ),
                        (t.next = 14);
                      break;
                    case 11:
                      (t.prev = 11), (t.t0 = t.catch(1)), U(t.t0);
                    case 14:
                    case 'end':
                      return t.stop();
                  }
                var n;
              },
              t,
              null,
              [[1, 11]]
            );
          })
        );
        return function () {
          return t.apply(this, arguments);
        };
      })();
      function vt() {
        var t = new URLSearchParams(window.location.search);
        if (!L())
          if ('true' === q('isRedirectedFromTCP'))
            'isRedirectedFromTCP',
              (document.cookie = ''.concat(
                'isRedirectedFromTCP',
                '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
              )),
              sessionStorage.setItem('isRedirectedFromTCP', 'true'),
              localStorage.setItem(
                'tdl-sso-redirect-tcp-flag',
                JSON.stringify({ isRedirectedFromTCP: !0, setAt: Date.now() })
              );
          else if ('TATADIGITAL' === b())
            sessionStorage.setItem('isRedirectedFromTCP', 'true'),
              localStorage.setItem(
                'tdl-sso-redirect-tcp-flag',
                JSON.stringify({ isRedirectedFromTCP: !0, setAt: Date.now() })
              );
          else {
            var e = t.get('utm_source'),
              r = [
                'tcp',
                'tatadigital.com',
                'tata neu',
                'tataneu',
                'Website',
                'neu',
              ].includes(e);
            localStorage.setItem(
              'tdl-sso-redirect-tcp-flag',
              JSON.stringify({ isRedirectedFromTCP: r, setAt: Date.now() })
            ),
              sessionStorage.setItem('isRedirectedFromTCP', r.toString());
          }
        var n,
          a,
          o = t.get('sessionId');
        if (
          (o &&
            (2 === (null == (a = o) ? void 0 : a.split('.').length)
              ? (function (t) {
                  if (t) {
                    var e = N(t.split('.'), 2),
                      r = e[0],
                      n = e[1];
                    r
                      ? (nt(r),
                        n &&
                          (function (t) {
                            t && localStorage.setItem('tdl-sso-user-id', t);
                          })(n))
                      : U('Invalid jarvis-id');
                  }
                })(o)
              : 1 === (null == (n = o) ? void 0 : n.split('.').length)
              ? nt(o)
              : U('Invalid sessionId')),
          t.has('authCode'))
        ) {
          var i = Date.now(),
            s = new Date(i + 864e5).toUTCString();
          document.cookie = 'isTataNue=true; expires='.concat(s, '; path=/');
        }
        if (t.has('jarvis_appVersion')) {
          var c = {
            platform: 'native',
            deviceVersion: t.get('jarvis_appVersion'),
          };
          localStorage.setItem('tneu.deviceInfo', JSON.stringify(c));
        } else
          localStorage.getItem('tneu.deviceInfo') ||
            localStorage.setItem(
              'tneu.deviceInfo',
              JSON.stringify({ platform: 'web', deviceVersion: '0' })
            );
      }
      var Tt,
        At = {};
      function St(t) {
        return wt.apply(this, arguments);
      }
      function wt() {
        return (wt = e(
          a().mark(function t(e) {
            return a().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return t.abrupt(
                      'return',
                      new Promise(function (t) {
                        setTimeout(function () {
                          t(JSON.stringify(e, H()));
                        }, 0);
                      })
                    );
                  case 1:
                  case 'end':
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function It(t) {
        return bt.apply(this, arguments);
      }
      function bt() {
        return (
          (bt = e(
            a().mark(function t(e) {
              var r, n, o, i, s, c, u, l, d, p, f, h, y, m;
              return a().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        (Tt || (Tt = b()),
                        (r = {}),
                        (n = !1),
                        (o = A()),
                        (i = o.dataLayerArgumentEventsToRecord),
                        (s = o.dataLayerObjectEventsToRecord),
                        !e.length)
                      ) {
                        t.next = 23;
                        break;
                      }
                      (u = Array.from(e)),
                        (l = null !== (c = i[Tt]) && void 0 !== c ? c : []),
                        (d = i.DEFAULT),
                        l.push.apply(l, k(d)),
                        (p = 0);
                    case 10:
                      if (!(p < l.length)) {
                        t.next = 17;
                        break;
                      }
                      if (!u.includes(l[p])) {
                        t.next = 14;
                        break;
                      }
                      return (n = !0), t.abrupt('break', 17);
                    case 14:
                      (p += 1), (t.next = 10);
                      break;
                    case 17:
                      if (!n) {
                        t.next = 21;
                        break;
                      }
                      return (t.next = 20), St(u);
                    case 20:
                      r = t.sent;
                    case 21:
                      t.next = 38;
                      break;
                    case 23:
                      (h = null !== (f = s[Tt]) && void 0 !== f ? f : []),
                        (y = s.DEFAULT),
                        h.push.apply(h, k(y)),
                        (m = 0);
                    case 27:
                      if (!(m < h.length)) {
                        t.next = 34;
                        break;
                      }
                      if (!Object.values(e).includes(h[m])) {
                        t.next = 31;
                        break;
                      }
                      return (n = !0), t.abrupt('break', 34);
                    case 31:
                      (m += 1), (t.next = 27);
                      break;
                    case 34:
                      if (!n) {
                        t.next = 38;
                        break;
                      }
                      return (t.next = 37), St(e);
                    case 37:
                      r = t.sent;
                    case 38:
                      'string' == typeof r &&
                        st.fireAnalyticsEvent([
                          {
                            timestamp: Date.now(),
                            data: JSON.stringify({
                              event: 'gtm-event',
                              data: r,
                            }),
                          },
                        ]);
                    case 39:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            })
          )),
          bt.apply(this, arguments)
        );
      }
      (At.DataLayerHelper = function (t, e, r) {
        (this.dataLayer = t),
          (this.listener = e || function () {}),
          (this.executingListener = !1),
          (this.unprocessed = []),
          this.processStates(t, !r);
        var n = t.push,
          a = this;
        this.dataLayer.push = function () {
          for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
            r[o] = arguments[o];
          var i = [].slice.call(r, 0),
            s = n.apply(t, i);
          return a.processStates(i), s;
        };
      }),
        (window.TdlDataLayerHelper = At.DataLayerHelper),
        (At.DataLayerHelper.prototype.processStates = function (t, e) {
          var r;
          for (
            (r = this.unprocessed).push.apply(r, k(t));
            !1 === this.executingListener && this.unprocessed.length > 0;

          ) {
            var n = this.unprocessed.shift();
            e ||
              ((this.executingListener = !0),
              this.listener(n),
              (this.executingListener = !1));
          }
        });
      var Et = 0,
        Pt = function () {
          if (window.dataLayer) {
            clearInterval(Et);
            var t = A().listenToPastDataLayerEvents;
            new window.TdlDataLayerHelper(window.dataLayer, It, t);
          }
        };
      var Lt,
        Bt,
        Ct,
        Ot,
        kt = -1,
        Nt = function (t) {
          addEventListener(
            'pageshow',
            function (e) {
              e.persisted && ((kt = e.timeStamp), t(e));
            },
            !0
          );
        },
        xt = function () {
          return (
            window.performance &&
            performance.getEntriesByType &&
            performance.getEntriesByType('navigation')[0]
          );
        },
        Rt = function () {
          var t = xt();
          return (t && t.activationStart) || 0;
        },
        qt = function (t, e) {
          var r = xt(),
            n = 'navigate';
          return (
            kt >= 0
              ? (n = 'back-forward-cache')
              : r &&
                (n =
                  document.prerendering || Rt() > 0
                    ? 'prerender'
                    : document.wasDiscarded
                    ? 'restore'
                    : r.type.replace(/_/g, '-')),
            {
              name: t,
              value: void 0 === e ? -1 : e,
              rating: 'good',
              delta: 0,
              entries: [],
              id: 'v3-'
                .concat(Date.now(), '-')
                .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
              navigationType: n,
            }
          );
        },
        Dt = function (t, e, r) {
          try {
            if (PerformanceObserver.supportedEntryTypes.includes(t)) {
              var n = new PerformanceObserver(function (t) {
                Promise.resolve().then(function () {
                  e(t.getEntries());
                });
              });
              return (
                n.observe(Object.assign({ type: t, buffered: !0 }, r || {})), n
              );
            }
          } catch (t) {}
        },
        Mt = function (t, e, r, n) {
          var a, o;
          return function (i) {
            e.value >= 0 &&
              (i || n) &&
              ((o = e.value - (a || 0)) || void 0 === a) &&
              ((a = e.value),
              (e.delta = o),
              (e.rating = (function (t, e) {
                return t > e[1]
                  ? 'poor'
                  : t > e[0]
                  ? 'needs-improvement'
                  : 'good';
              })(e.value, r)),
              t(e));
          };
        },
        Ht = function (t) {
          requestAnimationFrame(function () {
            return requestAnimationFrame(function () {
              return t();
            });
          });
        },
        Ut = function (t) {
          var e = function (e) {
            ('pagehide' !== e.type && 'hidden' !== document.visibilityState) ||
              t(e);
          };
          addEventListener('visibilitychange', e, !0),
            addEventListener('pagehide', e, !0);
        },
        Wt = function (t) {
          var e = !1;
          return function (r) {
            e || (t(r), (e = !0));
          };
        },
        Ft = -1,
        jt = function () {
          return 'hidden' !== document.visibilityState || document.prerendering
            ? 1 / 0
            : 0;
        },
        Jt = function (t) {
          'hidden' === document.visibilityState &&
            Ft > -1 &&
            ((Ft = 'visibilitychange' === t.type ? t.timeStamp : 0), _t());
        },
        Gt = function () {
          addEventListener('visibilitychange', Jt, !0),
            addEventListener('prerenderingchange', Jt, !0);
        },
        _t = function () {
          removeEventListener('visibilitychange', Jt, !0),
            removeEventListener('prerenderingchange', Jt, !0);
        },
        Kt = function () {
          return (
            Ft < 0 &&
              ((Ft = jt()),
              Gt(),
              Nt(function () {
                setTimeout(function () {
                  (Ft = jt()), Gt();
                }, 0);
              })),
            {
              get firstHiddenTime() {
                return Ft;
              },
            }
          );
        },
        Qt = function (t) {
          document.prerendering
            ? addEventListener(
                'prerenderingchange',
                function () {
                  return t();
                },
                !0
              )
            : t();
        },
        Vt = { passive: !0, capture: !0 },
        Yt = new Date(),
        Xt = function (t, e) {
          Lt ||
            ((Lt = e),
            (Bt = t),
            (Ct = new Date()),
            $t(removeEventListener),
            zt());
        },
        zt = function () {
          if (Bt >= 0 && Bt < Ct - Yt) {
            var t = {
              entryType: 'first-input',
              name: Lt.type,
              target: Lt.target,
              cancelable: Lt.cancelable,
              startTime: Lt.timeStamp,
              processingStart: Lt.timeStamp + Bt,
            };
            Ot.forEach(function (e) {
              e(t);
            }),
              (Ot = []);
          }
        },
        Zt = function (t) {
          if (t.cancelable) {
            var e =
              (t.timeStamp > 1e12 ? new Date() : performance.now()) -
              t.timeStamp;
            'pointerdown' == t.type
              ? (function (t, e) {
                  var r = function () {
                      Xt(t, e), a();
                    },
                    n = function () {
                      a();
                    },
                    a = function () {
                      removeEventListener('pointerup', r, Vt),
                        removeEventListener('pointercancel', n, Vt);
                    };
                  addEventListener('pointerup', r, Vt),
                    addEventListener('pointercancel', n, Vt);
                })(e, t)
              : Xt(e, t);
          }
        },
        $t = function (t) {
          ['mousedown', 'keydown', 'touchstart', 'pointerdown'].forEach(
            function (e) {
              return t(e, Zt, Vt);
            }
          );
        },
        te = {};
      function ee(t) {
        st.fireAnalyticsEvent(
          [
            {
              timestamp: Date.now(),
              data: JSON.stringify({ event: 'web-vitals', data: t }),
            },
          ],
          !0
        );
      }
      var re = function () {
          var t,
            e = null !== (t = navigator.connection) && void 0 !== t ? t : {},
            r = e.downlink,
            n = e.effectiveType;
          st.fireAnalyticsEvent([
            {
              timestamp: Date.now(),
              data: JSON.stringify({
                event: 'network-info',
                data: { downlink: r, effectiveType: n },
              }),
            },
          ]);
        },
        ne = function () {
          window.addEventListener('load', re),
            (function (t, e) {
              (e = e || {}),
                (function (t, e) {
                  (e = e || {}),
                    Qt(function () {
                      var r,
                        n = [1800, 3e3],
                        a = Kt(),
                        o = qt('FCP'),
                        i = Dt('paint', function (t) {
                          t.forEach(function (t) {
                            'first-contentful-paint' === t.name &&
                              (i.disconnect(),
                              t.startTime < a.firstHiddenTime &&
                                ((o.value = Math.max(t.startTime - Rt(), 0)),
                                o.entries.push(t),
                                r(!0)));
                          });
                        });
                      i &&
                        ((r = Mt(t, o, n, e.reportAllChanges)),
                        Nt(function (a) {
                          (o = qt('FCP')),
                            (r = Mt(t, o, n, e.reportAllChanges)),
                            Ht(function () {
                              (o.value = performance.now() - a.timeStamp),
                                r(!0);
                            });
                        }));
                    });
                })(
                  Wt(function () {
                    var r,
                      n = [0.1, 0.25],
                      a = qt('CLS', 0),
                      o = 0,
                      i = [],
                      s = function (t) {
                        t.forEach(function (t) {
                          if (!t.hadRecentInput) {
                            var e = i[0],
                              r = i[i.length - 1];
                            o &&
                            t.startTime - r.startTime < 1e3 &&
                            t.startTime - e.startTime < 5e3
                              ? ((o += t.value), i.push(t))
                              : ((o = t.value), (i = [t]));
                          }
                        }),
                          o > a.value && ((a.value = o), (a.entries = i), r());
                      },
                      c = Dt('layout-shift', s);
                    c &&
                      ((r = Mt(t, a, n, e.reportAllChanges)),
                      Ut(function () {
                        s(c.takeRecords()), r(!0);
                      }),
                      Nt(function () {
                        (o = 0),
                          (a = qt('CLS', 0)),
                          (r = Mt(t, a, n, e.reportAllChanges)),
                          Ht(function () {
                            return r();
                          });
                      }),
                      setTimeout(r, 0));
                  })
                );
            })(ee),
            (function (t, e) {
              (e = e || {}),
                Qt(function () {
                  var r,
                    n = [100, 300],
                    a = Kt(),
                    o = qt('FID'),
                    i = function (t) {
                      t.startTime < a.firstHiddenTime &&
                        ((o.value = t.processingStart - t.startTime),
                        o.entries.push(t),
                        r(!0));
                    },
                    s = function (t) {
                      t.forEach(i);
                    },
                    c = Dt('first-input', s);
                  (r = Mt(t, o, n, e.reportAllChanges)),
                    c &&
                      Ut(
                        Wt(function () {
                          s(c.takeRecords()), c.disconnect();
                        })
                      ),
                    c &&
                      Nt(function () {
                        var a;
                        (o = qt('FID')),
                          (r = Mt(t, o, n, e.reportAllChanges)),
                          (Ot = []),
                          (Bt = -1),
                          (Lt = null),
                          $t(addEventListener),
                          (a = i),
                          Ot.push(a),
                          zt();
                      });
                });
            })(ee),
            (function (t, e) {
              (e = e || {}),
                Qt(function () {
                  var r,
                    n = [2500, 4e3],
                    a = Kt(),
                    o = qt('LCP'),
                    i = function (t) {
                      var e = t[t.length - 1];
                      if (e) {
                        var n = Math.max(e.startTime - Rt(), 0);
                        n < a.firstHiddenTime &&
                          ((o.value = n), (o.entries = [e]), r());
                      }
                    },
                    s = Dt('largest-contentful-paint', i);
                  if (s) {
                    r = Mt(t, o, n, e.reportAllChanges);
                    var c = Wt(function () {
                      te[o.id] ||
                        (i(s.takeRecords()),
                        s.disconnect(),
                        (te[o.id] = !0),
                        r(!0));
                    });
                    ['keydown', 'click'].forEach(function (t) {
                      addEventListener(t, c, !0);
                    }),
                      Ut(c),
                      Nt(function (a) {
                        (o = qt('LCP')),
                          (r = Mt(t, o, n, e.reportAllChanges)),
                          Ht(function () {
                            (o.value = performance.now() - a.timeStamp),
                              (te[o.id] = !0),
                              r(!0);
                          });
                      });
                  }
                });
            })(ee);
        };
      try {
        !(function () {
          var t = document.head.querySelector(
            '[name=tdl-sso-client_id][content]'
          );
          if (t) {
            var r = t.content;
            r &&
              ((window.tdlSsoAuth.createSession = (function () {
                var t = e(
                  a().mark(function t(e) {
                    var n;
                    return a().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              fetch(
                                ''.concat(d(), '/api/v2/sso/create-session'),
                                {
                                  mode: 'cors',
                                  method: 'POST',
                                  credentials: 'include',
                                  headers: {
                                    'Content-Type': 'application/json',
                                    'Access-Control-Allow-Origin': d(),
                                    client_id: r,
                                    Authorization: 'Bearer '.concat(e),
                                  },
                                }
                              )
                            );
                          case 2:
                            return (
                              (n = t.sent), t.abrupt('return', 200 === n.status)
                            );
                          case 4:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()),
              (window.tdlSsoAuth.getSession = e(
                a().mark(function t() {
                  var e;
                  return a().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.t0 = fetch),
                            (t.t1 = ''.concat(
                              d(),
                              '/api/v2/sso/check-session'
                            )),
                            (t.t2 = JSON),
                            (t.next = 5),
                            window.codeChallengeTdlSsoAuth
                          );
                        case 5:
                          return (
                            (t.t3 = t.sent),
                            (t.t4 = u),
                            (t.t5 = { codeChallenge: t.t3, redirectUrl: t.t4 }),
                            (t.t6 = t.t2.stringify.call(t.t2, t.t5)),
                            (t.t7 = {
                              'Content-Type': 'application/json',
                              'Access-Control-Allow-Origin': d(),
                              client_id: r,
                            }),
                            (t.t8 = {
                              mode: 'cors',
                              method: 'POST',
                              body: t.t6,
                              credentials: 'include',
                              headers: t.t7,
                            }),
                            (t.next = 13),
                            (0, t.t0)(t.t1, t.t8)
                          );
                        case 13:
                          if (200 !== (e = t.sent).status) {
                            t.next = 16;
                            break;
                          }
                          return t.abrupt(
                            'return',
                            e.json().then(function (t) {
                              return t.authCode
                                ? {
                                    authCode: t.authCode,
                                    codeVerifier: window.codeVerifierTdlSsoAuth,
                                  }
                                : { authCode: null, codeVerifier: null };
                            })
                          );
                        case 16:
                          return t.abrupt('return', {
                            authCode: null,
                            codeVerifier: null,
                          });
                        case 17:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                })
              )),
              (window.tdlSsoAuth.deleteSession = (function () {
                var t = e(
                  a().mark(function t(e) {
                    var n;
                    return a().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              fetch(''.concat(d(), '/api/v2/sso/signout'), {
                                mode: 'cors',
                                method: 'POST',
                                credentials: 'include',
                                headers: {
                                  'Content-Type': 'application/json',
                                  'Access-Control-Allow-Origin': d(),
                                  client_id: r,
                                  Authorization: 'Bearer '.concat(e),
                                },
                              })
                            );
                          case 2:
                            return (
                              (n = t.sent), t.abrupt('return', 200 === n.status)
                            );
                          case 4:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()),
              (window.tdlSsoAuth.openBrandUrlWithAuthCode = (function () {
                var t = e(
                  a().mark(function t(e) {
                    var n, o, c, u, l, d, p;
                    return a().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                ((n = e.accessToken),
                                (o = e.url),
                                (c = e.clientSecret),
                                (u = e.target),
                                o)
                              ) {
                                t.next = 4;
                                break;
                              }
                              return (
                                console.log(
                                  'TDPL-SSO: please pass in the URL to be opened in the url property.'
                                ),
                                t.abrupt('return')
                              );
                            case 4:
                              if (n && c) {
                                t.next = 8;
                                break;
                              }
                              return (
                                console.log(
                                  'TDPL-SSO: missing accessToken or clientSecret.'
                                ),
                                u ? window.open(o, u) : window.open(o),
                                t.abrupt('return')
                              );
                            case 8:
                              return (
                                (f.codeVerifier = s(128)),
                                (t.next = 11),
                                i(f.codeVerifier)
                              );
                            case 11:
                              (f.codeChallenge = t.sent),
                                (t.prev = 12),
                                (l = new URL(o)),
                                (t.next = 21);
                              break;
                            case 16:
                              return (
                                (t.prev = 16),
                                (t.t0 = t.catch(12)),
                                console.log(
                                  "Passed in url couldn't be parsed into a URL object."
                                ),
                                u ? window.open(o, u) : window.open(o),
                                t.abrupt('return')
                              );
                            case 21:
                              return (
                                (d = o),
                                (t.next = 24),
                                window.ssoSdkGenerateAuthCodeForTargetDomain(
                                  n,
                                  l,
                                  r,
                                  c
                                )
                              );
                            case 24:
                              (p = t.sent).authCode &&
                                ((d += d.includes('?') ? '&' : '?'),
                                (d += 'authCode='.concat(p.authCode)),
                                (d += '&codeVerifier='.concat(f.codeVerifier))),
                                u ? window.open(d, u) : window.open(d);
                            case 27:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[12, 16]]
                    );
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()),
              (window.tdlSsoAuth.doNativeLogin = function () {
                var t = (
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
                ).returnURL;
                window.location = t
                  ? ''.concat(p(), '/auth/login?next=').concat(t)
                  : ''.concat(p(), '/auth/login');
              }));
          } else
            console.log(
              'TDPL-SSO [Error Log]: Please add <meta name="tdl-sso-client_id" content="CLIENT-ID"> in html head'
            );
        })(),
          (function () {
            try {
              localStorage.setItem('tdl-sso-version', '3.2.2'),
                (window.tdlSsoAuthScriptSrc = document.currentScript.src);
              try {
                T(),
                  gt().catch(function (t) {
                    return U('TDL-SSO: config set failed with', t);
                  });
              } catch (t) {
                U('TDPL-SSO: config set failed with', t);
              }
              if (
                (st.restartBufferTimer(), A().brandsForAnalytics.includes(b()))
              ) {
                U('Starting Jarvis Analytics');
                try {
                  vt();
                } catch (t) {
                  U('TDPL-SSO: cookie and session set failed with', t);
                }
                try {
                  'CULTFIT' === b()
                    ? document.addEventListener(
                        'readystatechange',
                        e(
                          a().mark(function t() {
                            return a().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.next = 2),
                                      st.fireAnalyticsEvent([
                                        {
                                          timestamp: Date.now(),
                                          data: JSON.stringify({
                                            event: 'pageLoad',
                                            url: window.location.href,
                                          }),
                                        },
                                      ])
                                    );
                                  case 2:
                                  case 'end':
                                    return t.stop();
                                }
                            }, t);
                          })
                        )
                      )
                    : window.addEventListener(
                        'load',
                        e(
                          a().mark(function t() {
                            var e, r, n;
                            return a().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      ot(),
                                      (r = { url: window.location.href }),
                                      'IHCL' === b() &&
                                        (window.location.href.includes(
                                          'booking-cart'
                                        ) ||
                                          window.location.href.includes(
                                            'booking-confirmation'
                                          )) &&
                                        window.location.href.includes(
                                          'status'
                                        ) &&
                                        (e = JSON.stringify(
                                          null ===
                                            (n = JSON.parse(
                                              sessionStorage.getItem('tajData')
                                            )) || void 0 === n
                                            ? void 0
                                            : n.bookingDetailsRequest
                                        )) &&
                                        (r.tajData = e),
                                      P().length > 0 &&
                                        (r.htmlContentScriptData =
                                          JSON.stringify(P())),
                                      (t.next = 6),
                                      st.fireAnalyticsEvent([
                                        {
                                          timestamp: Date.now(),
                                          data: JSON.stringify({
                                            event: 'pageLoad',
                                            payload: r,
                                          }),
                                        },
                                      ])
                                    );
                                  case 6:
                                  case 'end':
                                    return t.stop();
                                }
                            }, t);
                          })
                        )
                      );
                } catch (t) {
                  U('TDPL-SSO: pageLoad capturing failed with', t);
                }
                try {
                  A().brandsToRecordWebVitalsOn.includes(b()) && ne();
                } catch (t) {
                  U('TDPL-SSO: Web Vitals capturing failed with', t);
                }
                try {
                  History.prototype.realPushState ||
                    (History.prototype.realPushState =
                      History.prototype.pushState),
                    (History.prototype.pushState = function () {
                      for (
                        var t = arguments.length, e = new Array(t), r = 0;
                        r < t;
                        r++
                      )
                        e[r] = arguments[r];
                      History.prototype.realPushState.apply(window.history, e),
                        st.fireAnalyticsEvent([
                          {
                            timestamp: Date.now(),
                            data: JSON.stringify({
                              event: 'pageLoad',
                              payload: { url: window.location.toString() },
                            }),
                          },
                        ]);
                    }),
                    'WESTSIDE' !== b() &&
                      (History.prototype.realReplaceState ||
                        (History.prototype.realReplaceState =
                          History.prototype.replaceState),
                      (History.prototype.replaceState = function () {
                        for (
                          var t = arguments.length, e = new Array(t), r = 0;
                          r < t;
                          r++
                        )
                          e[r] = arguments[r];
                        History.prototype.realReplaceState.apply(
                          window.history,
                          e
                        ),
                          st.fireAnalyticsEvent([
                            {
                              timestamp: Date.now(),
                              data: JSON.stringify({
                                event: 'pageLoad',
                                payload: { url: window.location.toString() },
                              }),
                            },
                          ]);
                      })),
                    'TATACLIQ' === b() &&
                      window.addEventListener(
                        'popstate',
                        e(
                          a().mark(function t() {
                            return a().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    st.fireAnalyticsEvent([
                                      {
                                        timestamp: Date.now(),
                                        data: JSON.stringify({
                                          event: 'pageLoad',
                                          payload: {
                                            url: window.location.href,
                                          },
                                        }),
                                      },
                                    ]);
                                  case 1:
                                  case 'end':
                                    return t.stop();
                                }
                            }, t);
                          })
                        )
                      ),
                    window.realOpen || (window.realOpen = window.open),
                    (window.open = function () {
                      for (
                        var t = arguments.length, e = new Array(t), r = 0;
                        r < t;
                        r++
                      )
                        e[r] = arguments[r];
                      var n = e;
                      if (0 !== arguments.length) {
                        var a;
                        if ('object' === x(e[0])) a = e[0];
                        else {
                          var o;
                          if ('string' != typeof e[0])
                            return dt(), (o = this.realOpen).apply.apply(o, e);
                          e[0].startsWith('/') &&
                            (n[0] = window.location.origin + e[0]),
                            e[0].startsWith('?') &&
                              (n[0] =
                                window.location.origin +
                                window.location.pathname +
                                e[0]);
                          try {
                            a = new URL(n[0]);
                          } catch (t) {
                            return U(t), dt(), this.realOpen.apply(this, e);
                          }
                        }
                        var i = a.searchParams.get('swtUrl'),
                          s = '';
                        i &&
                          !i.includes('sessionId') &&
                          ((s = ''
                            .concat(i)
                            .concat(i.includes('?') ? '&' : '?', 'sessionId=')
                            .concat(it())),
                          a.searchParams.set('swtUrl', 'swtUrlUpdated')),
                          ('http:' !== a.protocol && 'https:' !== a.protocol) ||
                            a.searchParams.get('sessionId') ||
                            i ||
                            a.origin === window.location.origin ||
                            a.searchParams.set('sessionId', it()),
                          (n[0] = a.href.replace('swtUrlUpdated', s));
                      }
                      return dt(), this.realOpen.apply(this, n);
                    }),
                    document.addEventListener('click', function (t) {
                      t.target.closest('a[target=_blank]') && dt();
                    }),
                    XMLHttpRequest.prototype.realOpen ||
                      (XMLHttpRequest.prototype.realOpen =
                        XMLHttpRequest.prototype.open),
                    (XMLHttpRequest.prototype.open = function () {
                      for (
                        var t = arguments.length, e = new Array(t), r = 0;
                        r < t;
                        r++
                      )
                        e[r] = arguments[r];
                      (this.requestType = e[0]),
                        (this.requestUrl = e[1]),
                        this.realOpen.apply(this, e);
                    }),
                    XMLHttpRequest.prototype.realSetRequestHeader ||
                      (XMLHttpRequest.prototype.realSetRequestHeader =
                        XMLHttpRequest.prototype.setRequestHeader),
                    (XMLHttpRequest.prototype.setRequestHeader = function () {
                      this.requestHeaders || (this.requestHeaders = {});
                      for (
                        var t = arguments.length, e = new Array(t), r = 0;
                        r < t;
                        r++
                      )
                        e[r] = arguments[r];
                      (this.requestHeaders[e[0]] = e[1]),
                        this.realSetRequestHeader.apply(this, e);
                    }),
                    XMLHttpRequest.prototype.realSend ||
                      (XMLHttpRequest.prototype.realSend =
                        XMLHttpRequest.prototype.send),
                    (XMLHttpRequest.prototype.send = function () {
                      for (
                        var t = arguments.length, r = new Array(t), n = 0;
                        n < t;
                        n++
                      )
                        r[n] = arguments[n];
                      if (
                        this.requestType &&
                        ('post' === this.requestType.toLowerCase() ||
                          'put' === this.requestType.toLowerCase())
                      )
                        try {
                          this.requestBody =
                            r[0] instanceof FormData
                              ? k(r[0]).toString()
                              : r[0];
                        } catch (t) {
                          this.requestBody = r[0];
                        }
                      M(this.requestUrl)
                        ? this.addEventListener(
                            'readystatechange',
                            (function () {
                              var t = e(
                                a().mark(function t() {
                                  var e, r;
                                  return a().wrap(
                                    function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            if (4 !== this.readyState) {
                                              t.next = 6;
                                              break;
                                            }
                                            return (
                                              (e = {
                                                requestHeaders:
                                                  this.requestHeaders,
                                                requestType: this.requestType,
                                                requestUrl: this.requestUrl,
                                                requestBody: this.requestBody,
                                                response: this.response,
                                                status: this.status,
                                              }),
                                              (r = lt(
                                                this.requestUrl,
                                                this.response
                                              )) &&
                                                (e.cartOrWishListUpdate = r),
                                              (t.next = 6),
                                              st.fireAnalyticsEvent([
                                                {
                                                  timestamp: Date.now(),
                                                  data: JSON.stringify({
                                                    event: 'request',
                                                    payload: e,
                                                  }),
                                                },
                                              ])
                                            );
                                          case 6:
                                          case 'end':
                                            return t.stop();
                                        }
                                    },
                                    t,
                                    this
                                  );
                                })
                              );
                              return function () {
                                return t.apply(this, arguments);
                              };
                            })(),
                            !1
                          )
                        : D(this.requestUrl) &&
                          this.addEventListener(
                            'readystatechange',
                            function () {
                              4 === this.readyState &&
                                st.pushEvent(
                                  JSON.stringify({
                                    event: 'request',
                                    payload: {
                                      requestHeaders: this.requestHeaders,
                                      requestType: this.requestType,
                                      requestUrl: this.requestUrl,
                                      requestBody: this.requestBody,
                                      response: this.response,
                                      status: this.status,
                                    },
                                  })
                                );
                            },
                            !1
                          ),
                        this.realSend.apply(this, r);
                    }),
                    window.realFetch || (window.realFetch = fetch),
                    (window.fetch = function () {
                      for (
                        var t, r = arguments.length, n = new Array(r), o = 0;
                        o < r;
                        o++
                      )
                        n[o] = arguments[o];
                      return (t = window).realFetch
                        .apply(t, n)
                        .then(
                          (function () {
                            var t = e(
                              a().mark(function t(e) {
                                var r, o, i, s, c, u, l, d, p, f, h, y, m, g;
                                return a().wrap(
                                  function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          if (
                                            ((t.prev = 0),
                                            (l = e.clone()),
                                            (d = l),
                                            null === (r = e.headers) ||
                                              void 0 === r ||
                                              null ===
                                                (o = r.get('content-type')) ||
                                              void 0 === o ||
                                              !o.includes('application/json'))
                                          ) {
                                            t.next = 8;
                                            break;
                                          }
                                          return (t.next = 6), l.json();
                                        case 6:
                                          (d = t.sent), (u = lt(e.url, d));
                                        case 8:
                                          (p =
                                            (null === (i = n[1]) || void 0 === i
                                              ? void 0
                                              : i.body) instanceof
                                            URLSearchParams
                                              ? null === (s = n[1]) ||
                                                void 0 === s
                                                ? void 0
                                                : s.body.toString()
                                              : null === (c = n[1]) ||
                                                void 0 === c
                                              ? void 0
                                              : c.body),
                                            M(''.concat(e.url))
                                              ? ((y = {
                                                  requestHeaders:
                                                    null === (f = n[1]) ||
                                                    void 0 === f
                                                      ? void 0
                                                      : f.headers,
                                                  requestType:
                                                    (null === (h = n[1]) ||
                                                    void 0 === h
                                                      ? void 0
                                                      : h.method) || 'GET',
                                                  requestUrl: l.url,
                                                  requestBody: p,
                                                  response: d,
                                                  status:
                                                    null == l
                                                      ? void 0
                                                      : l.status,
                                                }),
                                                u &&
                                                  (y.cartOrWishListUpdate = u),
                                                st.fireAnalyticsEvent([
                                                  {
                                                    timestamp: Date.now(),
                                                    data: JSON.stringify({
                                                      event: 'request',
                                                      payload: y,
                                                    }),
                                                  },
                                                ]))
                                              : e &&
                                                D(''.concat(e.url)) &&
                                                st.pushEvent(
                                                  JSON.stringify({
                                                    event: 'request',
                                                    payload: {
                                                      requestHeaders:
                                                        null === (m = n[1]) ||
                                                        void 0 === m
                                                          ? void 0
                                                          : m.headers,
                                                      requestType:
                                                        (null === (g = n[1]) ||
                                                        void 0 === g
                                                          ? void 0
                                                          : g.method) || 'GET',
                                                      requestUrl: l.url,
                                                      requestBody: p,
                                                      response: d,
                                                      status:
                                                        null == l
                                                          ? void 0
                                                          : l.status,
                                                    },
                                                  })
                                                ),
                                            (t.next = 16);
                                          break;
                                        case 12:
                                          return (
                                            (t.prev = 12),
                                            (t.t0 = t.catch(0)),
                                            U(t.t0),
                                            t.abrupt('return', e)
                                          );
                                        case 16:
                                          return t.abrupt('return', e);
                                        case 17:
                                        case 'end':
                                          return t.stop();
                                      }
                                  },
                                  t,
                                  null,
                                  [[0, 12]]
                                );
                              })
                            );
                            return function (e) {
                              return t.apply(this, arguments);
                            };
                          })()
                        )
                        .catch(function (t) {
                          U(t);
                        });
                    });
                } catch (t) {
                  U('TDPL-SSO: modification of native methods failed with', t);
                }
                try {
                  A().modifyHistoryOwnMethodsOnBrands.includes(b()) &&
                    Object.hasOwn(window.history, 'pushState') &&
                    (Object.hasOwn(window.history, 'realPushState') ||
                      (window.history.realPushState = window.history.pushState),
                    (window.history.pushState = function () {
                      var t;
                      (t = window.history).realPushState.apply(t, arguments),
                        st.fireAnalyticsEvent([
                          {
                            timestamp: Date.now(),
                            data: JSON.stringify({
                              event: 'pageLoad',
                              payload: { url: window.location.toString() },
                            }),
                          },
                        ]);
                    }),
                    Object.hasOwn(window.history, 'replaceState') &&
                      (Object.hasOwn(window.history, 'realReplaceState') ||
                        (window.history.realReplaceState =
                          window.history.replaceState),
                      (window.history.replaceState = function () {
                        var t;
                        (t = window.history).realReplaceState.apply(
                          t,
                          arguments
                        ),
                          st.fireAnalyticsEvent([
                            {
                              timestamp: Date.now(),
                              data: JSON.stringify({
                                event: 'pageLoad',
                                payload: { url: window.location.toString() },
                              }),
                            },
                          ]);
                      })));
                } catch (t) {
                  U(
                    "TDPL-SSO: modification of history's own methods failed with",
                    t
                  );
                }
                try {
                  !(function () {
                    try {
                      var t = [];
                      A().events.forEach(function (e) {
                        window.location.href.includes(e.urlMatch) &&
                          e.captureEvents.forEach(function (e) {
                            t.includes(e) || t.push(e);
                          });
                      }),
                        t.forEach(function (t) {
                          window.addEventListener(
                            t.slice(2),
                            function (e) {
                              if ((ot(), 'click' === t.slice(2)))
                                !(function (t) {
                                  var e,
                                    r,
                                    n = t.target,
                                    a = void 0 === n ? {} : n,
                                    o = t.type,
                                    i = void 0 === o ? '' : o,
                                    s = t.composedPath ? t.composedPath() : [];
                                  ft ||
                                    (ft =
                                      null !==
                                        (e =
                                          null === (r = A()) || void 0 === r
                                            ? void 0
                                            : r.maxClicksToRecordPerSecond) &&
                                      void 0 !== e
                                        ? e
                                        : 10),
                                    pt && clearTimeout(pt),
                                    (pt = setTimeout(function () {
                                      st.pushEvent(
                                        K({
                                          target: a,
                                          type: i,
                                          composedPath: s,
                                        })
                                      ),
                                        (pt = void 0);
                                    }, 1e3 / ft));
                                })(e);
                              else
                                try {
                                  A().events.forEach(function (t) {
                                    (('ALL' === t.tcpBrand &&
                                      t.captureEvents.find(function (t) {
                                        return t.slice(2) === e.type;
                                      })) ||
                                      (e.isTrusted &&
                                        t.captureEvents.find(function (t) {
                                          return t.slice(2) === e.type;
                                        }) &&
                                        t.urlMatch &&
                                        window.location.href.includes(
                                          t.urlMatch
                                        ) &&
                                        e.target.localName === t.elementType &&
                                        ((t.class &&
                                          e.target.className.includes(
                                            t.class
                                          )) ||
                                          (t.id && e.target.id === t.id) ||
                                          (t.innerText &&
                                            e.target.innerText ===
                                              t.innerText) ||
                                          (t.path &&
                                            (function (t, e) {
                                              var r = !1;
                                              if (
                                                e.length &&
                                                e.length > t.length
                                              )
                                                for (
                                                  var n = 0;
                                                  n < e.length &&
                                                  'body' !== e[n].localName &&
                                                  (t[n].elementType &&
                                                    (r =
                                                      t[n].elementType ===
                                                      e[n].localName),
                                                  t[n].id &&
                                                    (r = t[n].id === e[n].id),
                                                  t[n].class &&
                                                    (r =
                                                      t[n].class ===
                                                      e[n].className),
                                                  r);
                                                  n += 1
                                                );
                                              return r;
                                            })(t.path, e.path))))) &&
                                      st.pushEvent(K(e));
                                  });
                                } catch (t) {
                                  U('Some error in logging event', t);
                                }
                            },
                            !0
                          );
                        });
                    } catch (t) {
                      U('Error in capturing events', t);
                    }
                  })();
                } catch (t) {
                  U('TDPL-SSO: events capture failed with', t);
                }
                try {
                  !(function () {
                    try {
                      (t = 'captureDigitalData'),
                        A().featuresOnBrands &&
                          A().featuresOnBrands[t] &&
                          A().featuresOnBrands[t].includes(b()) &&
                          yt();
                    } catch (t) {
                      U('Error in capturing digitalData', t);
                    }
                    var t;
                  })();
                } catch (t) {
                  U('TDPL-SSO: Adobe data capture failed with', t);
                }
                try {
                  !(function () {
                    var t;
                    if (
                      (Tt || (Tt = b()),
                      null !== (t = A().recordGTMDataOnBrands) &&
                        void 0 !== t &&
                        t.includes(Tt))
                    )
                      try {
                        Pt(), window.dataLayer || (Et = setInterval(Pt, 1e3));
                      } catch (t) {
                        U('Error recording GTM data: '.concat(t));
                      }
                  })();
                } catch (t) {
                  U('TDPL-SSO: GTM data capture failed with', t);
                }
                try {
                  !(function () {
                    try {
                      var t,
                        e,
                        r =
                          null !== (t = A().failedRequestsRetryIntervalInS) &&
                          void 0 !== t
                            ? t
                            : 30;
                      null !== (e = A().isRetryFailedRequests) &&
                        void 0 !== e &&
                        e &&
                        setInterval(mt, 1e3 * r);
                    } catch (t) {
                      U(
                        'There was an error in re-making the canceled API requests:',
                        t
                      );
                    }
                  })();
                } catch (t) {
                  U('TDPL-SSO: failed requests retry failed with', t);
                }
              }
            } catch (t) {
              U('TDPL-SSO: analytics start failed with', t);
            }
          })();
      } catch (Lt) {
        console.log(Lt),
          console.log('Some error occurred in starting the Jarvis');
      }
    })();
})();
