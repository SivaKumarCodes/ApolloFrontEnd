!(function () {
  'use strict';
  var t,
    e,
    n,
    o,
    r,
    i = {
      634: function (t) {
        (t.exports = function (t, e) {
          if (!(t instanceof e))
            throw new TypeError('Cannot call a class as a function');
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      73: function (t) {
        function e(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        (t.exports = function (t, n, o) {
          return (
            n && e(t.prototype, n),
            o && e(t, o),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            t
          );
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      192: function (t) {
        (t.exports = function (t) {
          return t && t.__esModule ? t : { default: t };
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      300: function (t) {
        function e(n) {
          return (
            (t.exports = e =
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
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports),
            e(n)
          );
        }
        (t.exports = e),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      232: function (t, e, n) {
        var o = n(192),
          r = o(n(634)),
          i = o(n(73)),
          a = (function () {
            function t(e) {
              (0, r.default)(this, t), (this.app = e);
            }
            return (
              (0, i.default)(t, [
                {
                  key: 'ampApi',
                  value: function () {
                    var t = this;
                    return new Promise(function (e, n) {
                      if (t.app.isAmp())
                        try {
                          (t.app.ampConsentData =
                            t.app.context.context.initialConsentValue),
                            t.app.log('Consents. AMP API done.'),
                            e();
                        } catch (t) {
                          n(t);
                        }
                      else e();
                    });
                  },
                },
                {
                  key: 'initTCFv2Proxy',
                  value: function () {
                    if ('function' != typeof this.app.context.__tcfapi) {
                      for (var t, e = this.app.context, n = {}; e; ) {
                        try {
                          if (e.frames.__tcfapiLocator) {
                            t = e;
                            break;
                          }
                        } catch (t) {}
                        if (e === this.app.context.top) break;
                        e = e.parent;
                      }
                      t &&
                        ((this.app.context.__tcfapi = function (e, o, r, i) {
                          var a = Math.random() + '',
                            s = {
                              __tcfapiCall: {
                                command: e,
                                parameter: i,
                                version: o,
                                callId: a,
                              },
                            };
                          (n[a] = r), t.postMessage(s, '*');
                        }),
                        this.app.context.addEventListener(
                          'message',
                          function (t) {
                            var e = {};
                            try {
                              e =
                                'string' == typeof t.data
                                  ? JSON.parse(t.data)
                                  : t.data;
                            } catch (t) {}
                            var o = e.__tcfapiReturn;
                            o &&
                              'function' == typeof n[o.callId] &&
                              (n[o.callId](o.returnValue, o.success),
                              (n[o.callId] = null));
                          },
                          !1
                        ));
                    }
                  },
                },
                {
                  key: 'tcfv2Api',
                  value: function () {
                    var t = this;
                    return (
                      this.initTCFv2Proxy(),
                      new Promise(function (e, n) {
                        if ('function' == typeof t.app.context.__tcfapi) {
                          (t.app.tcfv2Enabled = !0),
                            (t.app.requestParams = t.app.requestParams || {}),
                            (t.app.requestParams.tcfV2 = 'tcfV2=1');
                          try {
                            t.app.context.__tcfapi(
                              'getTCData',
                              2,
                              function (n, o) {
                                o
                                  ? ((t.app.tcfv2Data = n),
                                    t.app.context.localStorage &&
                                      t.app.context.localStorage.setItem(
                                        'MG_tcfv2Data',
                                        JSON.stringify(n)
                                      ),
                                    t.app.log('Consents. TCFv2 API done.'))
                                  : t.app.log('Consents. TCFv2 API fail.'),
                                  e();
                              }
                            );
                          } catch (t) {
                            n(t);
                          }
                        } else e();
                      })
                    );
                  },
                },
                {
                  key: 'gdprApi',
                  value: function () {
                    var t = this;
                    return new Promise(function (e, n) {
                      var o = t.app.getMostTopWindow();
                      if ('function' == typeof o.__cmp) {
                        (t.app.cmpEnabled = !0),
                          (t.app.requestParams = t.app.requestParams || {}),
                          (t.app.requestParams.tcfV1 = 'tcfV1=1');
                        try {
                          o.__cmp('getConsentData', null, function (n) {
                            (t.app.consentData = n),
                              t.app.context.localStorage &&
                                t.app.context.localStorage.setItem(
                                  'MG_ConsentData',
                                  JSON.stringify(n)
                                ),
                              t.app.log('Consents. TCFv1 API done.'),
                              e();
                          });
                        } catch (t) {
                          n(t);
                        }
                      } else e();
                    });
                  },
                },
                {
                  key: 'ccpaApi',
                  value: function () {
                    var t = this;
                    return new Promise(function (e, n) {
                      var o = t.app.getMostTopWindow();
                      if ('function' == typeof o.__uspapi) {
                        t.app.uspEnabled = !0;
                        try {
                          o.__uspapi('getUSPData', 1, function (n, o) {
                            o
                              ? ((t.app.uspString = n.uspString || ''),
                                t.app.context.localStorage &&
                                  '' !== t.app.uspString &&
                                  t.app.context.localStorage.setItem(
                                    'MG_uspString',
                                    t.app.uspString
                                  ),
                                t.app.log('Consents. CCPA API done.'))
                              : t.app.log('Consents. CCPA API fail.'),
                              e();
                          });
                        } catch (t) {
                          n(t);
                        }
                      } else e();
                    });
                  },
                },
                {
                  key: 'getGdprData',
                  value: function () {
                    var t = null;
                    if (
                      this.app.cmpEnabled ||
                      this.app.tcfv2Enabled ||
                      this.app.isAmp()
                    )
                      (t = { consentData: '', gdprApplies: 0 }),
                        this.app.isAmp() &&
                        1 === this.app.context.context.initialConsentState
                          ? (t = {
                              consentData: this.app.ampConsentData,
                              gdprApplies:
                                +this.app.context.context.initialConsentState,
                            })
                          : void 0 !== this.app.tcfv2Data &&
                            void 0 !== this.app.tcfv2Data.gdprApplies &&
                            void 0 !== this.app.tcfv2Data.tcString
                          ? (t = {
                              consentData: this.app.tcfv2Data.tcString,
                              gdprApplies: +this.app.tcfv2Data.gdprApplies,
                            })
                          : void 0 !== this.app.consentData &&
                            void 0 !== this.app.consentData.gdprApplies &&
                            void 0 !== this.app.consentData.consentData &&
                            (t = {
                              consentData: this.app.consentData.consentData,
                              gdprApplies: +this.app.consentData.gdprApplies,
                            });
                    else
                      try {
                        if (this.app.context.localStorage) {
                          var e = JSON.parse(
                            this.app.context.localStorage.getItem(
                              'MG_ConsentData'
                            )
                          );
                          null != e &&
                            void 0 !== e.gdprApplies &&
                            void 0 !== e.consentData &&
                            (t = {
                              consentData: e.consentData,
                              gdprApplies: +e.gdprApplies,
                            }),
                            null !=
                              (e = JSON.parse(
                                this.app.context.localStorage.getItem(
                                  'MG_tcfv2Data'
                                )
                              )) &&
                              void 0 !== e.gdprApplies &&
                              void 0 !== e.tcString &&
                              (t = {
                                consentData: e.tcString,
                                gdprApplies: +e.gdprApplies,
                              });
                        }
                      } catch (t) {
                        this.app.log('getGdprData -> ' + t.message);
                      }
                    return t;
                  },
                },
                {
                  key: 'getUspData',
                  value: function () {
                    var t = null;
                    if (this.app.uspEnabled)
                      (t = { uspString: '' }),
                        '' != this.app.uspString &&
                          void 0 !== this.app.uspString &&
                          (t.uspString = this.app.uspString);
                    else
                      try {
                        if (this.app.context.localStorage) {
                          var e =
                            this.app.context.localStorage.getItem(
                              'MG_uspString'
                            );
                          null != e &&
                            '' != e &&
                            void 0 !== e &&
                            (t = { uspString: e });
                        }
                      } catch (t) {
                        this.app.log('getUspData -> ' + t.message);
                      }
                    return t;
                  },
                },
                {
                  key: 'getConsentData',
                  value: function () {
                    var t = null,
                      e = this.getGdprData(),
                      n = this.getUspData();
                    return (
                      null != e &&
                        ((t = t || {}),
                        Object.keys(e).forEach(function (n) {
                          return (t[n] = e[n]);
                        })),
                      null != n &&
                        ((t = t || {}),
                        Object.keys(n).forEach(function (e) {
                          return (t[e] = n[e]);
                        })),
                      t
                    );
                  },
                },
                {
                  key: 'fetchConsents',
                  value: function () {
                    var t = this;
                    return Promise.allSettled([
                      this.ampApi(),
                      this.tcfv2Api(),
                      this.gdprApi(),
                      this.ccpaApi(),
                    ]).then(function () {
                      return t.getConsentData();
                    });
                  },
                },
              ]),
              t
            );
          })();
        t.exports = a;
      },
      334: function (t, e, n) {
        var o = n(192);
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = void 0);
        var r = o(n(300));
        e.default = function (t) {
          return new this(function (e, n) {
            if (!t || void 0 === t.length)
              return n(
                new TypeError(
                  (0, r.default)(t) +
                    ' ' +
                    t +
                    ' is not iterable(cannot read property Symbol(Symbol.iterator))'
                )
              );
            var o = Array.prototype.slice.call(t);
            if (0 === o.length) return e([]);
            var i = o.length;
            function a(t, n) {
              if (
                n &&
                ('object' === (0, r.default)(n) || 'function' == typeof n)
              ) {
                var s = n.then;
                if ('function' == typeof s)
                  return void s.call(
                    n,
                    function (e) {
                      a(t, e);
                    },
                    function (n) {
                      (o[t] = { status: 'rejected', reason: n }),
                        0 == --i && e(o);
                    }
                  );
              }
              (o[t] = { status: 'fulfilled', value: n }), 0 == --i && e(o);
            }
            for (var s = 0; s < o.length; s++) a(s, o[s]);
          });
        };
      },
      673: function (t, e) {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = void 0);
        e.default = function (t) {
          var e = this.constructor;
          return this.then(
            function (n) {
              return e.resolve(t()).then(function () {
                return n;
              });
            },
            function (n) {
              return e.resolve(t()).then(function () {
                return e.reject(n);
              });
            }
          );
        };
      },
      205: function (t, e, n) {
        var o = n(192);
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.default = void 0);
        var r = o(n(300)),
          i = o(n(673)),
          a = o(n(334)),
          s = setTimeout,
          p = 'undefined' != typeof setImmediate ? setImmediate : null;
        function c(t) {
          return Boolean(t && void 0 !== t.length);
        }
        function u() {}
        function l(t) {
          if (!(this instanceof l))
            throw new TypeError('Promises must be constructed via new');
          if ('function' != typeof t) throw new TypeError('not a function');
          (this._state = 0),
            (this._handled = !1),
            (this._value = void 0),
            (this._deferreds = []),
            w(t, this);
        }
        function f(t, e) {
          for (; 3 === t._state; ) t = t._value;
          0 !== t._state
            ? ((t._handled = !0),
              l._immediateFn(function () {
                var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                if (null !== n) {
                  var o;
                  try {
                    o = n(t._value);
                  } catch (t) {
                    return void g(e.promise, t);
                  }
                  d(e.promise, o);
                } else (1 === t._state ? d : g)(e.promise, t._value);
              }))
            : t._deferreds.push(e);
        }
        function d(t, e) {
          try {
            if (e === t)
              throw new TypeError('A promise cannot be resolved with itself.');
            if (
              e &&
              ('object' === (0, r.default)(e) || 'function' == typeof e)
            ) {
              var n = e.then;
              if (e instanceof l)
                return (t._state = 3), (t._value = e), void v(t);
              if ('function' == typeof n)
                return void w(
                  ((o = n),
                  (i = e),
                  function () {
                    o.apply(i, arguments);
                  }),
                  t
                );
            }
            (t._state = 1), (t._value = e), v(t);
          } catch (e) {
            g(t, e);
          }
          var o, i;
        }
        function g(t, e) {
          (t._state = 2), (t._value = e), v(t);
        }
        function v(t) {
          2 === t._state &&
            0 === t._deferreds.length &&
            l._immediateFn(function () {
              t._handled || l._unhandledRejectionFn(t._value);
            });
          for (var e = 0, n = t._deferreds.length; e < n; e++)
            f(t, t._deferreds[e]);
          t._deferreds = null;
        }
        function h(t, e, n) {
          (this.onFulfilled = 'function' == typeof t ? t : null),
            (this.onRejected = 'function' == typeof e ? e : null),
            (this.promise = n);
        }
        function w(t, e) {
          var n = !1;
          try {
            t(
              function (t) {
                n || ((n = !0), d(e, t));
              },
              function (t) {
                n || ((n = !0), g(e, t));
              }
            );
          } catch (t) {
            if (n) return;
            (n = !0), g(e, t);
          }
        }
        (l.prototype.catch = function (t) {
          return this.then(null, t);
        }),
          (l.prototype.then = function (t, e) {
            var n = new this.constructor(u);
            return f(this, new h(t, e, n)), n;
          }),
          (l.prototype.finally = i.default),
          (l.all = function (t) {
            return new l(function (e, n) {
              if (!c(t))
                return n(new TypeError('Promise.all accepts an array'));
              var o = Array.prototype.slice.call(t);
              if (0 === o.length) return e([]);
              var i = o.length;
              function a(t, s) {
                try {
                  if (
                    s &&
                    ('object' === (0, r.default)(s) || 'function' == typeof s)
                  ) {
                    var p = s.then;
                    if ('function' == typeof p)
                      return void p.call(
                        s,
                        function (e) {
                          a(t, e);
                        },
                        n
                      );
                  }
                  (o[t] = s), 0 == --i && e(o);
                } catch (t) {
                  n(t);
                }
              }
              for (var s = 0; s < o.length; s++) a(s, o[s]);
            });
          }),
          (l.allSettled = a.default),
          (l.resolve = function (t) {
            return t && 'object' === (0, r.default)(t) && t.constructor === l
              ? t
              : new l(function (e) {
                  e(t);
                });
          }),
          (l.reject = function (t) {
            return new l(function (e, n) {
              n(t);
            });
          }),
          (l.race = function (t) {
            return new l(function (e, n) {
              if (!c(t))
                return n(new TypeError('Promise.race accepts an array'));
              for (var o = 0, r = t.length; o < r; o++)
                l.resolve(t[o]).then(e, n);
            });
          }),
          (l._immediateFn =
            ('function' == typeof p &&
              function (t) {
                p(t);
              }) ||
            function (t) {
              s(t, 0);
            }),
          (l._unhandledRejectionFn = function (t) {
            'undefined' != typeof console &&
              console &&
              console.warn('Possible Unhandled Promise Rejection:', t);
          });
        var m = l;
        e.default = m;
      },
    },
    a = {};
  function s(t) {
    var e = a[t];
    if (void 0 !== e) return e.exports;
    var n = (a[t] = { exports: {} });
    return i[t](n, n.exports, s), n.exports;
  }
  (s.g = (function () {
    if ('object' == typeof globalThis) return globalThis;
    try {
      return this || new Function('return this')();
    } catch (t) {
      if ('object' == typeof window) return window;
    }
  })()),
    (e = (t = s(192))(s(205))),
    (n = t(s(673))),
    (o = t(s(334))),
    'function' !=
    typeof (r = (function () {
      if ('undefined' != typeof self) return self;
      if ('undefined' != typeof window) return window;
      if (void 0 !== s.g) return s.g;
      throw new Error('unable to locate global object');
    })()).Promise
      ? (r.Promise = e.default)
      : (r.Promise.prototype.finally ||
          (r.Promise.prototype.finally = n.default),
        r.Promise.allSettled || (r.Promise.allSettled = o.default)),
    (function () {
      var t = s(192),
        e = t(s(300)),
        n = t(s(232));
      !(function () {
        var t = String('a.mgid.com'),
          o = function (o) {
            var r,
              i,
              a = 'https://' + t + '/1x1.gif',
              s = 'https://' + t + '/auto.gif',
              p = 'https://' + t.replace(/^[^.]./, 'cm.') + '/sm.js',
              c = document.location.href,
              u = this,
              l = !1,
              f = !1,
              d = 0,
              g = new n.default({
                context: window,
                log: function () {},
                isAmp: function () {
                  return !1;
                },
                getMostTopWindow: function () {
                  return window;
                },
              }),
              v = function () {
                var e = /a\.([^\.]*)\.(.*)/.exec(t);
                return e[1] ? e[1].charAt(0).toUpperCase() + e[1].slice(1) : 0;
              },
              h = function (t, e) {
                var n = new Date();
                n.setTime(n.getTime() + 7776e6);
                var o = 'expires=' + n.toUTCString();
                document.cookie = v() + t + '=' + e + ';path=/; ' + o;
              },
              w = function (t) {
                var e;
                return (e = document.cookie.match(
                  new RegExp('(?:^|; )' + v() + t + '=([^;]*)')
                ))
                  ? e[1]
                  : '';
              },
              m = function (t) {
                (t += '&' + y()), (new Image().src = t);
              },
              y = function () {
                return 'd=' + (Date.now ? Date.now() : new Date().valueOf());
              };
            (this.invoke = function (t, n) {
              (function () {
                var t = {},
                  e = location.search.substr(1).split('&');
                f = !1;
                for (var n = 0, o = e.length; n < o; n++) {
                  var r = e[n];
                  if ('' !== r) {
                    var i = r.split('=');
                    'utm_campaign' !== i[0] &&
                      (t[i[0]] =
                        i[1] && decodeURIComponent(i[1].replace(/\+/g, ' ')));
                  }
                }
                t.utm_source &&
                  w('SensorUtmSource') !== t.utm_source &&
                  (f = !0),
                  t.utm_content &&
                    t.utm_term &&
                    t.utm_source &&
                    h('SensorUtmSource', t.utm_source);
                var a = t.adclid || (t.adclida ? t[t.adclida] : null);
                'string' == typeof a && (a = a.split('?')[0]),
                  a && (h('SensorClid', a), h('SensorClidV', 1)),
                  !a && f && h('SensorClidV', 0);
              })(),
                (i = Number(w('SensorNVis'))),
                1 == (w('SensorHref') == c) || i++,
                h('SensorNVis', i),
                h('SensorHref', c),
                (i = Number(w('SensorNVis'))),
                (r = w('SensorClid')),
                (d = Number(w('SensorClidV'))),
                g.fetchConsents().then(function (c) {
                  !(function (t, n, s) {
                    var p =
                      a +
                      '?id=' +
                      (o.cid ? o.cid : o.id) +
                      (o.cid ? '&type=c' : '&type=s') +
                      '&tg=' +
                      t +
                      '&r=' +
                      encodeURIComponent(document.location.href);
                    (p += '&nv=' + Number(i)),
                      (p += '&clid=' + r),
                      (p += '&clidv=' + d),
                      null !== s &&
                        (s.consentData &&
                          (p += '&consentData=' + s.consentData),
                        s.gdprApplies && (p += '&gdprApplies=' + s.gdprApplies),
                        s.uspString && (p += '&uspString=' + s.uspString)),
                      'object' === (0, e.default)(n) &&
                        (n.gtm_stage && (p += '&gtms=' + n.gtm_stage),
                        n.gtm_revenue && (p += '&gtmr=' + n.gtm_revenue),
                        n.gtm_category && (p += '&gtmc=' + n.gtm_category),
                        n.revenue && (p += '&rvn=' + n.revenue)),
                      m(p);
                  })(t, n, c),
                    (o.eid || o.goods) &&
                      (function (t) {
                        null == o.eid && (o.eid = ''),
                          null == o.goods && (o.goods = []),
                          null == o.partner && (o.partner = '');
                        var e =
                          s +
                          '?sid=' +
                          (o.cid ? o.cid : o.id) +
                          '&eid=' +
                          o.eid +
                          (o.cid ? '&type=c' : '&type=s') +
                          '&goods=' +
                          o.goods.join(',') +
                          '&partner=' +
                          o.partner +
                          '&referer=' +
                          encodeURIComponent(document.referrer);
                        null !== t &&
                          (t.consentData &&
                            (e += '&consentData=' + t.consentData),
                          t.gdprApplies &&
                            (e += '&gdprApplies=' + t.gdprApplies),
                          t.uspString && (e += '&uspString=' + t.uspString)),
                          m(e),
                          (function (t) {
                            var e = document,
                              n = e.getElementsByTagName('body')[0],
                              o = e.createElement('script');
                            (o.type = 'text/javascript'),
                              (o.async = !0),
                              (o.src = p + '?' + y()),
                              null !== t &&
                                (t.consentData &&
                                  (o.src += '&consentData=' + t.consentData),
                                t.gdprApplies &&
                                  (o.src += '&gdprApplies=' + t.gdprApplies),
                                t.uspString &&
                                  (o.src += '&uspString=' + t.uspString)),
                              n.appendChild(o, n);
                          })(t);
                      })(c);
                });
            }),
              (this.invokeAll = function (t) {
                if (void 0 !== t)
                  for (var e = 0; e < t.length; e++)
                    u.addInvokeQueue(t[e][0], t[e][1] || []);
                else for (var n in u.getAllInvokers()) u.addInvokeQueue(n);
              }),
              (this.getAllInvokers = function () {
                return window._mgr;
              }),
              (this.mgqWorker = function () {
                for (var t = 0; t < window._mgq.length; t++) {
                  var e = window._mgq[t];
                  'function' == typeof window[e[0]] &&
                    (window[e[0]].apply(window, e.slice(1)),
                    window._mgq.splice(t, 1));
                }
                window._mgqi ||
                  (window._mgqi = window.setInterval(function () {
                    u.mgqWorker();
                  }, 5)),
                  l ||
                    (new Date().getTime() - window._mgqt > 1e4 &&
                      ((l = !0),
                      window.clearInterval(window._mgqi),
                      (window._mgqi = window.setInterval(function () {
                        u.mgqWorker();
                      }, 100))));
              }),
              (this.addInvokeQueue = function (t, e) {
                window._mgq.push([t, e || []]);
              }),
              (this.mgqInit = function () {
                (window._mgq = window._mgq || []),
                  void 0 === window._mgqp &&
                    ((window._mgqp = u.mgqWorker),
                    (window._mgqt = new Date().getTime()),
                    u.mgqWorker());
              });
          },
          r = function (t) {
            void 0 === window._mgr && (window._mgr = {}), (window._mgr[t] = t);
          },
          i = 'MgSensorInvoke';
        if ('[object Array]' === Object.prototype.toString.call(MgSensorData)) {
          for (var a = {}, s = 0; s < MgSensorData.length; s++)
            if (
              void 0 === a[MgSensorData.cid] &&
              MgSensorData[s].project === t
            ) {
              var p = new o(MgSensorData[s]),
                c = i + s;
              (window.MgSensor = p),
                (window[c] = window.MgSensorInvoke = p.invoke),
                p.mgqInit(),
                r(c),
                p.addInvokeQueue(c, ['']),
                (a[MgSensorData.cid] = MgSensorData.cid);
            }
        } else
          MgSensorData &&
            (MgSensorData.id || MgSensorData.cid) &&
            ((window.MgSensor = new o(MgSensorData)),
            (window.MgSensorInvoke = window.MgSensor.invoke),
            window.MgSensor.mgqInit(),
            r(i),
            window.MgSensor.addInvokeQueue(i, ['']));
        void 0 !== window.history &&
          (function () {
            if (!window._mghl) {
              window._mghl = { oldUrl: window.location.href };
              var t = function () {
                  window._mghl.oldUrl !== window.location.href &&
                    (window.MgSensor.invokeAll(),
                    (window._mghl.oldUrl = window.location.href));
                },
                e = function (e) {
                  return function () {
                    var n = e.apply(this, arguments);
                    return t(), n;
                  };
                };
              'function' == typeof window.history.pushState &&
                (window.history.pushState = e(window.history.pushState)),
                'function' == typeof window.history.replaceState &&
                  (window.history.replaceState = e(
                    window.history.replaceState
                  )),
                window.addEventListener('popstate', t);
            }
          })();
      })();
    })();
})();
