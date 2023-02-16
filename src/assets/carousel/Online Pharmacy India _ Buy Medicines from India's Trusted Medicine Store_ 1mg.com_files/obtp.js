(() => {
  'use strict';
  var e = {
      865: (e, t) => {
        var n;
        (t.__esModule = !0),
          (t.Zone = t.GDPR_PURPOSE_CONSENTS = t.HAS_CONSENT_EVENT = void 0),
          (t.HAS_CONSENT_EVENT = 'has_concent_event'),
          (t.GDPR_PURPOSE_CONSENTS = [1, 3, 4]),
          ((n = t.Zone || (t.Zone = {})).Default = 'all'),
          (n.EuZone1 = 'euZone1'),
          (n.EuZone2 = 'euZone2');
      },
      778: (e, t) => {
        (t.__esModule = !0),
          (t.API_NAME =
            t.GDPR_CALL_ID =
            t.GDPR_VENDOR_ID =
            t.DOMAIN_URL_PARAMETER_NAME =
            t.NO_CLICK_ID_COOKIE_NAME =
            t.CLICK_ID_COOKIE_NAME =
            t.CLICK_ID_URL_PARAM =
            t.CLICK_ID_REDIRECTOR_URL_PARAM =
            t.PAGE_VIEW_NAME =
            t.BASE_URL =
              void 0),
          (t.BASE_URL = '//tr.outbrain.com'),
          (t.PAGE_VIEW_NAME = 'PAGE_VIEW'),
          (t.CLICK_ID_REDIRECTOR_URL_PARAM = ''),
          (t.CLICK_ID_URL_PARAM = 'dicbo'),
          (t.CLICK_ID_COOKIE_NAME = 'outbrain_click_id'),
          (t.NO_CLICK_ID_COOKIE_NAME = 'outbrain_cid_fetch'),
          (t.DOMAIN_URL_PARAMETER_NAME = 'ob_cvr_pixel_domain'),
          (t.GDPR_VENDOR_ID = 164),
          (t.GDPR_CALL_ID = 'obamplify'),
          (t.API_NAME = 'obApi');
      },
      368: function (e, t, n) {
        var r =
          (this && this.__assign) ||
          function () {
            return (
              (r =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  return e;
                }),
              r.apply(this, arguments)
            );
          };
        (t.__esModule = !0),
          (t.transformMarketerId =
            t.runQ =
            t.logger =
            t.decorate =
            t.dummyFunc =
            t.isArray =
            t.removeEmptyProperties =
            t.getObjectWithoutProperties =
            t.isInIframe =
            t.getRandomInt =
            t.version =
              void 0);
        var o = n(778);
        (t.version = '2.0.5'),
          (t.getRandomInt = function () {
            return Math.random().toString().replace('.', '');
          }),
          (t.isInIframe = function () {
            try {
              return window.self !== window.top;
            } catch (e) {
              return !0;
            }
          }),
          (t.getObjectWithoutProperties = function (e, t) {
            var n = r({}, e);
            for (var o in n) t.indexOf(o) > -1 && delete n[o];
            return n;
          }),
          (t.removeEmptyProperties = function (e) {
            var t = r({}, e);
            for (var n in t)
              (null !== t[n] && void 0 !== t[n] && '' !== t[n]) || delete t[n];
            return t;
          }),
          (t.isArray = function (e) {
            return '[object Array]' === Object.prototype.toString.call(e);
          }),
          (t.dummyFunc = function () {}),
          (t.decorate = function (e, t, n) {
            var r = e[t];
            e[t] = function () {
              var e = r.apply(this, arguments);
              return n.apply(this, arguments), e;
            };
          }),
          (t.logger = function (e, n, r) {
            (window.postMessage || t.dummyFunc)(
              {
                action: 'log',
                type: e,
                message: n,
                name: r ? r.replace(/ /g, '-') : '',
              },
              '*'
            );
          }),
          (t.runQ = function () {
            for (var e = !1; apiObj.queue.length; ) {
              var t = apiObj.queue.shift();
              if (t[1] === o.PAGE_VIEW_NAME && !t[2]) {
                if (e) continue;
                e = !0;
              }
              apiObj.dispatch.apply(apiObj, t);
            }
          }),
          (t.transformMarketerId = function (e) {
            if (e) return (0, t.isArray)(e) ? e : e.replace(' ', '').split(',');
          });
      },
      894: (e, t) => {
        (t.__esModule = !0),
          (t.getBaseUrl = t.logError = void 0),
          (t.logError = function (e, t) {
            new Image().src =
              '//tr.outbrain.com/log?apiObjVersion=' +
              t.version +
              '&obtpVersion=' +
              t.obtpVersion +
              '&msg=' +
              encodeURIComponent(
                '{"error":"LOAD", "apiObjVersion": ' +
                  t.version +
                  ', "marketerID": ' +
                  t.marketerId +
                  ', "referrer": ' +
                  document.referrer +
                  ', "extra": {"name":"' +
                  e.name +
                  '","line":"' +
                  (e.lineNumber || e.line) +
                  '","script":"' +
                  (e.fileName || e.sourceURL || e.script) +
                  '","stack":"' +
                  (e.stackTrace || e.stack) +
                  '","message":"' +
                  e.message +
                  '"}}'
              );
          }),
          (t.getBaseUrl = function () {
            return '//tr.outbrain.com/unifiedPixel?';
          });
      },
      857: (e, t) => {
        var n;
        (t.__esModule = !0),
          (t.LOG_TYPES = t.CONTENT_TYPE = void 0),
          ((t.CONTENT_TYPE || (t.CONTENT_TYPE = {})).Product = 'product'),
          ((n = t.LOG_TYPES || (t.LOG_TYPES = {})).Log = 'log'),
          (n.Warning = 'warning'),
          (n.Info = 'info'),
          (n.Error = 'error');
      },
      81: (e, t, n) => {
        t.T = void 0;
        var r = n(261),
          o = n(859),
          i = n(368),
          a = n(894),
          s = n(599),
          c = n(784),
          d = n(865);
        t.T = d.Zone.Default;
        try {
          (window.apiObj = new r.ApiService(window).apiObj),
            window.apiObj.setZone(t.T),
            new o.HistoryObserverService(),
            (0, i.runQ)(),
            new s.KickstartService().getCachedClickId(),
            (0, c.loadWaves)();
        } catch (e) {
          (0, a.logError)(e, window.apiObj);
        }
      },
      994: (e, t, n) => {
        (t.__esModule = !0),
          (t.gdprCcpaValidator = t.GDPRCcpaValidator = void 0);
        var r = n(865),
          o = (function () {
            function e() {}
            return (
              (e.prototype.hasConsent = function () {
                return window.__uspapi && 'function' == typeof window.__uspapi;
              }),
              (e.prototype.handleConsent = function (e) {
                window.__uspapi('getUSPData', 1, function (t, n) {
                  if (t.uspString)
                    n &&
                    '1YYN' !== t.uspString.toUpperCase() &&
                    '1NYN' !== t.uspString.toUpperCase()
                      ? e(!0)
                      : e(!1);
                  else {
                    var o = apiObj.zone === r.Zone.Default;
                    e(o);
                  }
                });
              }),
              e
            );
          })();
        (t.GDPRCcpaValidator = o), (t.gdprCcpaValidator = new o());
      },
      471: (e, t, n) => {
        (t.__esModule = !0),
          (t.gdprTcf1ValidatorService = t.GDPRTcf1ValidatorService = void 0);
        var r = n(778),
          o = n(865),
          i = (function () {
            function e() {}
            return (
              (e.prototype.hasConsent = function () {
                return !!window.__cmp || !!this.getCmpFrame();
              }),
              (e.prototype.handleConsent = function (e) {
                (this.cb = e), this.callCmp(this.callback);
              }),
              (e.prototype.getCmpFrame = function () {
                var e = window;
                try {
                  for (; e && !e.frames.__cmpLocator; ) {
                    if (e === window.top) return;
                    e = e.parent;
                  }
                  return e;
                } catch (e) {}
              }),
              (e.prototype.callback = function () {
                window.removeEventListener
                  ? window.removeEventListener(
                      'message',
                      this.postMsgCB.bind(this),
                      !1
                    )
                  : window.detachEvent &&
                    window.detachEvent(
                      'message',
                      this.postMsgCB.bind(this),
                      !1
                    ),
                  this.cb.apply(this.cb, arguments);
              }),
              (e.prototype.postMsgCB = function (e) {
                var t;
                try {
                  t =
                    e && 'string' == typeof e.data
                      ? JSON.parse(e.data)
                      : e.data;
                } catch (e) {
                  var n = apiObj.zone === o.Zone.Default;
                  this.callback.apply(this.callback, [n]);
                }
                t &&
                  t.__cmpReturn &&
                  this.onCmpCB(
                    this.callback,
                    t.__cmpReturn.returnValue,
                    t.__cmpReturn.success
                  );
              }),
              (e.prototype.callCmp = function (e) {
                if ('function' == typeof window.__cmp) {
                  var t = this;
                  window.__cmp(
                    'getVendorConsents',
                    [r.GDPR_VENDOR_ID],
                    function (n, r) {
                      t.onCmpCB(e.bind(t), n, r);
                    }
                  );
                } else {
                  var n = this.getCmpFrame();
                  if (
                    (window.addEventListener
                      ? window.addEventListener('message', this.postMsgCB, !1)
                      : window.attachEvent &&
                        window.attachEvent('message', this.postMsgCB, !1),
                    !n)
                  )
                    return void this.callback.apply(this.callback, [
                      { msg: 'CMP not found' },
                      !1,
                    ]);
                  var o = {
                    __cmpCall: {
                      command: 'getVendorConsents',
                      parameter: [r.GDPR_VENDOR_ID],
                      callId: r.GDPR_CALL_ID,
                    },
                  };
                  n.postMessage(o, '*');
                }
              }),
              (e.prototype.hasPurposeConsent = function (e) {
                if (!e) return !0;
                var t = !0;
                for (var n in e)
                  if (e.hasOwnProperty(n) && ((t = !1), e[n])) return !0;
                return t;
              }),
              (e.prototype.onCmpCB = function (e, t, n) {
                if (
                  (!n ||
                    !t ||
                    !t.vendorConsents ||
                    void 0 === t.vendorConsents[r.GDPR_VENDOR_ID] ||
                    !0 === t.vendorConsents[r.GDPR_VENDOR_ID]) &&
                  this.hasPurposeConsent(t.purposeConsents)
                )
                  return e(!0);
                e(!1);
              }),
              e
            );
          })();
        (t.GDPRTcf1ValidatorService = i),
          (t.gdprTcf1ValidatorService = new i());
      },
      677: (e, t, n) => {
        (t.__esModule = !0),
          (t.gdprTcf2ValidatorService = t.GDPRTcf2ValidatorService = void 0);
        var r = n(778),
          o = n(865),
          i = (function () {
            function e() {}
            return (
              (e.prototype.hasConsent = function () {
                return !!window.__tcfapi || !!this.getTCF2Window();
              }),
              (e.prototype.handleConsent = function (e) {
                if (((this.cb = e), window.__tcfapi))
                  window.__tcfapi(
                    'addEventListener',
                    2,
                    this.onTCFChanges.bind(this)
                  ),
                    window.__tcfapi(
                      'getTCData',
                      2,
                      this.onTCFChanges.bind(this),
                      [r.GDPR_VENDOR_ID]
                    );
                else {
                  var t = this.getTCF2Window();
                  window.addEventListener
                    ? window.addEventListener(
                        'message',
                        this.postMsgCB.bind(this),
                        !1
                      )
                    : window.attachEvent &&
                      window.attachEvent(
                        'message',
                        this.postMsgCB.bind(this),
                        !1
                      );
                  var n = {
                    __tcfapiCall: {
                      command: 'getTCData',
                      parameter: [r.GDPR_VENDOR_ID],
                      version: 2,
                      callId: r.GDPR_CALL_ID,
                    },
                  };
                  t.postMessage(n, '*');
                }
              }),
              (e.prototype.hasPurposeConsent = function (e) {
                if (!(null == e ? void 0 : e.consents)) return !0;
                var t = e.consents,
                  n = o.GDPR_PURPOSE_CONSENTS,
                  r = !0;
                return (
                  n.forEach(function (e) {
                    t.hasOwnProperty(e) && !1 === t[e] && (r = !1);
                  }),
                  r
                );
              }),
              (e.prototype.postMsgCB = function (e) {
                e.data.__tcfapiReturn &&
                  e.data.__tcfapiReturn.callId === r.GDPR_CALL_ID &&
                  this.onTCFCB(e.data.__tcfapiReturn.returnValue, !0);
              }),
              (e.prototype.onTCFCB = function (e, t) {
                t && 'tcloaded' === e.eventStatus
                  ? ((e &&
                      e.vendor &&
                      e.vendor.consents &&
                      !1 === e.vendor.consents[r.GDPR_VENDOR_ID]) ||
                    !e ||
                    !this.hasPurposeConsent(e.purpose)
                      ? this.cb(!1)
                      : this.cb(!0),
                    window.__tcfapi(
                      'removeEventListener',
                      2,
                      this.onTCFChanges.bind(this)
                    ))
                  : this.cb(!0);
              }),
              (e.prototype.onTCFChanges = function (e, t) {
                this.onTCFCB(e, t);
              }),
              (e.prototype.getTCF2Window = function () {
                var e = window;
                try {
                  for (; e && !e.frames.__tcfapiLocator; ) {
                    if (e === window.top) return;
                    e = e.parent;
                  }
                  return e;
                } catch (e) {}
              }),
              e
            );
          })();
        (t.GDPRTcf2ValidatorService = i),
          (t.gdprTcf2ValidatorService = new i());
      },
      895: (e, t, n) => {
        (t.__esModule = !0),
          (t.gdprValidatorService = t.GDPRValidatorService = void 0);
        var r = n(471),
          o = n(677),
          i = n(994),
          a = n(865),
          s = (function () {
            function e() {
              this.consentHandlerType = void 0;
            }
            return (
              (e.prototype.checkHasConsent = function (e) {
                var t = apiObj.zone === a.Zone.Default,
                  n = this.clearAndCallback.bind(this, e);
                try {
                  (this.timeout = setTimeout(function () {
                    e(t);
                  }, 500)),
                    r.gdprTcf1ValidatorService.hasConsent()
                      ? ((this.consentHandlerType = 'cmp'),
                        r.gdprTcf1ValidatorService.handleConsent(n))
                      : o.gdprTcf2ValidatorService.hasConsent()
                      ? ((this.consentHandlerType = 'tcf'),
                        o.gdprTcf2ValidatorService.handleConsent(n))
                      : i.gdprCcpaValidator.hasConsent()
                      ? ((this.consentHandlerType = 'ccpa'),
                        i.gdprCcpaValidator.handleConsent(n))
                      : n(t);
                } catch (n) {
                  throw (this.clearAndCallback(e, t), n);
                }
              }),
              (e.prototype.clearAndCallback = function (e, t) {
                clearTimeout(this.timeout), e(t, this.consentHandlerType);
              }),
              e
            );
          })();
        (t.GDPRValidatorService = s), (t.gdprValidatorService = new s());
      },
      261: (e, t, n) => {
        (t.__esModule = !0), (t.ApiService = void 0);
        var r = n(368),
          o = n(896),
          i = n(778);
        t.ApiService = function (e) {
          var t = window[i.API_NAME],
            n = function () {
              n.dispatch.apply(n, arguments);
            };
          (n.version = t.version),
            (n.loaded = t.loaded),
            (n.marketerId = (0, r.transformMarketerId)(t.marketerId)),
            (n.queue = t.queue);
          var a = new o.DispatcherService();
          (n.dispatch = a.dispatch.bind(a)),
            (n.addMarketer = function (e) {
              n.marketerId = n.marketerId.concat((0, r.transformMarketerId)(e));
            }),
            (n.obtpVersion = r.version),
            (n.setZone = function (e) {
              return (n.zone = e);
            }),
            (e[i.API_NAME] = n),
            (this.apiObj = n);
        };
      },
      63: (e, t, n) => {
        (t.__esModule = !0), (t.cookiesService = t.CookiesService = void 0);
        var r = n(388),
          o = n(865),
          i = (function () {
            function e(e) {
              this.cookiesToProcess = [];
              var t = this;
              e.on(o.HAS_CONSENT_EVENT, function (e) {
                if (((t.hasConsent = e), t.hasConsent))
                  for (; t.cookiesToProcess.length; ) {
                    var n = t.cookiesToProcess.pop();
                    t.set(n.name, n.value, n.expirationInDays, n.domain);
                  }
              });
            }
            return (
              (e.prototype.set = function (e, t, n, r) {
                if (this.hasConsent) {
                  var o = new Date();
                  o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
                  var i = 'expires=' + o.toUTCString(),
                    a =
                      encodeURIComponent(e) +
                      '=' +
                      encodeURIComponent(t) +
                      '; ' +
                      i +
                      '; path=/;';
                  r && (a += 'domain=' + r + ';'), (document.cookie = a);
                } else
                  this.cookiesToProcess.push({
                    name: e,
                    value: t,
                    expirationInDays: n,
                    domain: r,
                  });
              }),
              (e.prototype.get = function (e) {
                if (!document.cookie) return '';
                var t = '';
                try {
                  t = decodeURIComponent(document.cookie);
                } catch (e) {}
                var n = t.indexOf(e + '=');
                if (n < 0) return '';
                var r = n + (e + '=').length,
                  o = t.indexOf(';', r),
                  i = o > 0 ? o : document.cookie.length;
                return t.substring(r, i);
              }),
              e
            );
          })();
        (t.CookiesService = i), (t.cookiesService = new i(r.eventBusService));
      },
      896: (e, t, n) => {
        (t.__esModule = !0), (t.DispatcherService = void 0);
        var r = n(368),
          o = n(466),
          i = n(857),
          a = n(3),
          s = n(63),
          c = n(895),
          d = n(388),
          p = n(865),
          u = n(778),
          l = n(894),
          f = n(778),
          v = (function () {
            function e() {
              (this.hasConsent = !1),
                (this.pixelsWaitingForConsent = []),
                (this.hasConsentCalled = !1),
                (this.isCheckConsentRespond = !1);
            }
            return (
              (e.prototype.firePixel = function (e) {
                if (this.isCheckConsentRespond)
                  return this.fire(e, this.hasConsent);
                if (
                  (this.pixelsWaitingForConsent.push(e), !this.hasConsentCalled)
                ) {
                  this.hasConsentCalled = !0;
                  var t = this;
                  c.gdprValidatorService.checkHasConsent(function (n, r) {
                    for (
                      r && (e.cht = r),
                        t.isCheckConsentRespond = !0,
                        t.hasConsent = !!n,
                        d.eventBusService.dispatch(
                          p.HAS_CONSENT_EVENT,
                          t.hasConsent
                        );
                      t.pixelsWaitingForConsent.length > 0;

                    )
                      t.fire(t.pixelsWaitingForConsent.shift(), t.hasConsent);
                  });
                }
              }),
              (e.prototype.fire = function (e, t) {
                this.fireUnifiedPixel(e, t);
              }),
              (e.prototype.fireUnifiedPixel = function (e, t) {
                var n = this.clone(e);
                delete n.content,
                  delete n.contentType,
                  (n.optOut = t ? 'false' : 'true');
                var o = this.getClickIdCookieCached();
                o && (n.ob_click_id = o),
                  (new Image().src =
                    (0, l.getBaseUrl)() +
                    this.buildParams(n) +
                    '&bust=' +
                    (0, r.getRandomInt)() +
                    '&referrer=' +
                    encodeURIComponent(document.referrer));
              }),
              (e.prototype.buildParams = function (e) {
                var t = ['dl', 'name'],
                  n = [];
                for (var r in e)
                  e.hasOwnProperty(r) &&
                    (t.indexOf(r) > -1
                      ? n.push(r + '=' + encodeURIComponent(e[r]))
                      : n.push(r + '=' + e[r]));
                return n.join('&');
              }),
              (e.prototype.dispatch = function () {
                var e = arguments;
                if (!e[1])
                  throw new Error(
                    "can't dispatch pixel, event name is missing"
                  );
                var t = e[0],
                  n = e[2] && 'object' == typeof e[2] ? e[2] : {};
                'string' == typeof apiObj.marketerId &&
                  (apiObj.marketerId = [apiObj.marketerId]);
                var s = this.unique(apiObj.marketerId),
                  c = {};
                for (var d in n) c[d] = n[d];
                (c.marketerId = s.toString()),
                  (c[''.concat(f.API_NAME, 'Version')] = apiObj.version),
                  (c.obtpVersion = apiObj.obtpVersion),
                  (c.name = e[1].replace(/ /g, '-')),
                  (c.dl = a.urlService.getLocation()),
                  (c.g = this.hasGtm() ? 1 : 0),
                  'track' === t
                    ? (o.validatorService.validate(c), this.firePixel(c))
                    : (0, r.logger)(
                        i.LOG_TYPES.Error,
                        'Command type ' + t + ' is not recognized',
                        c.name
                      );
              }),
              (e.prototype.unique = function (e) {
                for (var t = [], n = {}, r = 0; r < e.length; r++)
                  n[e[r]] || t.push(e[r]), (n[e[r]] = !0);
                return t;
              }),
              (e.prototype.clone = function (e) {
                var t = {};
                for (var n in e) t[n] = e[n];
                return t;
              }),
              (e.prototype.getClickIdCookieCached = function () {
                var e,
                  t = a.urlService.getParamFromUrl(u.DOMAIN_URL_PARAMETER_NAME),
                  n = a.urlService.getParamFromUrl(u.CLICK_ID_URL_PARAM);
                return (
                  n
                    ? (s.cookiesService.set(u.CLICK_ID_COOKIE_NAME, n, 1, t),
                      (e = n))
                    : (e = s.cookiesService.get(u.CLICK_ID_COOKIE_NAME)),
                  e
                );
              }),
              (e.prototype.hasGtm = function () {
                return !!document.querySelector(
                  'script[src*="googletagmanager.com/gtm.js"]'
                );
              }),
              e
            );
          })();
        t.DispatcherService = v;
      },
      388: function (e, t) {
        var n =
          (this && this.__spreadArray) ||
          function (e, t, n) {
            if (n || 2 === arguments.length)
              for (var r, o = 0, i = t.length; o < i; o++)
                (!r && o in t) ||
                  (r || (r = Array.prototype.slice.call(t, 0, o)),
                  (r[o] = t[o]));
            return e.concat(r || Array.prototype.slice.call(t));
          };
        (t.__esModule = !0), (t.eventBusService = t.EventBusService = void 0);
        var r = (function () {
          function e() {
            this.listeners = {};
          }
          return (
            (e.prototype.on = function (e, t) {
              var n = this;
              return (
                -1 === Object.keys(this.listeners).indexOf(e) &&
                  (this.listeners[e] = []),
                this.listeners[e].push(t),
                function () {
                  n.listeners[e] = n.listeners[e].filter(function (e) {
                    return e != t;
                  });
                }
              );
            }),
            (e.prototype.dispatch = function (e) {
              for (var t = [], r = 1; r < arguments.length; r++)
                t[r - 1] = arguments[r];
              -1 !== Object.keys(this.listeners).indexOf(e) &&
                this.listeners[e].forEach(function (e) {
                  return e.call.apply(e, n([null], t, !1));
                });
            }),
            e
          );
        })();
        (t.EventBusService = r), (t.eventBusService = new r());
      },
      859: (e, t, n) => {
        (t.__esModule = !0), (t.HistoryObserverService = void 0);
        var r = n(368),
          o = n(778);
        t.HistoryObserverService = function () {
          if (
            history.pushState &&
            history.replaceState &&
            window.addEventListener
          ) {
            var e = this,
              t = function (t) {
                location.href !== e.lastVisited &&
                  t &&
                  ((e.lastVisited = location.href),
                  apiObj('track', o.PAGE_VIEW_NAME));
              };
            (0, r.decorate)(history, 'pushState', t),
              (0, r.decorate)(history, 'replaceState', t),
              window.addEventListener('popstate', t, !1);
          }
        };
      },
      599: (e, t, n) => {
        (t.__esModule = !0), (t.KickstartService = void 0);
        var r = n(368),
          o = n(63),
          i = n(3),
          a = n(778),
          s = (function () {
            function e() {}
            return (
              (e.prototype.getCachedClickId = function () {
                var e, t;
                o.cookiesService.get(a.CLICK_ID_COOKIE_NAME) ||
                  o.cookiesService.get(a.NO_CLICK_ID_COOKIE_NAME) ||
                  i.urlService.getParamFromUrl(a.CLICK_ID_URL_PARAM) ||
                  (apiObj.setCachedClickId =
                    ((t = document.createElement('script')),
                    'string' == typeof window.apiObj.marketerId
                      ? (e = window.apiObj.marketerId)
                      : (0, r.isArray)(window.apiObj) &&
                        (e = window.apiObj.marketerId.join(',')),
                    (t.src = a.BASE_URL + '/cachedClickId?marketerId=' + e),
                    document.body.appendChild(t),
                    function (e) {
                      if ('optout' !== e)
                        if ('NoClickId' === e)
                          o.cookiesService.set(
                            a.NO_CLICK_ID_COOKIE_NAME,
                            !0,
                            5 / 1440
                          );
                        else {
                          var t = i.urlService.getParamFromUrl(
                            a.DOMAIN_URL_PARAMETER_NAME
                          );
                          o.cookiesService.set(a.CLICK_ID_COOKIE_NAME, e, 1, t);
                        }
                    }));
              }),
              e
            );
          })();
        t.KickstartService = s;
      },
      3: (e, t) => {
        (t.__esModule = !0), (t.urlService = t.UrlService = void 0);
        var n = (function () {
          function e() {}
          return (
            (e.prototype.getParamFromUrl = function (e) {
              var t = this.getLocation();
              t.indexOf('#') > -1 && (t = t.substring(0, t.indexOf('#')));
              for (
                var n = (t.split('?')[1] || '').split(/&/), r = 0;
                r < n.length;
                r++
              )
                if (this.startsWith(n[r], e)) return this.getParamValue(n[r]);
              return '';
            }),
            (e.prototype.getLocation = function () {
              var e = '';
              try {
                e = window.top.location.href || document.location.href;
              } catch (t) {
                e = document.location.href;
              }
              return e || '';
            }),
            (e.prototype.startsWith = function (e, t) {
              return 0 === e.indexOf(t + '=');
            }),
            (e.prototype.getParamValue = function (e) {
              return e.split('=')[1].split('#')[0];
            }),
            e
          );
        })();
        (t.UrlService = n), (t.urlService = new n());
      },
      466: (e, t, n) => {
        (t.__esModule = !0), (t.validatorService = t.ValidatorService = void 0);
        var r = n(857),
          o = n(368),
          i = n(778),
          a = (function () {
            function e() {
              (this.validCurrencies = [
                'USD',
                'CAD',
                'EUR',
                'GBP',
                'ILS',
                'AUD',
                'MXN',
                'BRL',
                'SEK',
                'SGD',
                'RUB',
                'NZD',
                'INR',
                'JPY',
                'PHP',
                'CHF',
              ]),
                (this.validNameRegX = new RegExp(
                  '^[A-Za-z0-9]+[A-Za-z0-9-]*$'
                )),
                (this.validNumber = new RegExp('^[0-9]+[.0-9]*$')),
                (this.validNameLength = 100);
            }
            return (
              (e.prototype.validate = function (e) {
                return (
                  e.content && e.content.id,
                  e.orderValue && !e.currency
                    ? ((0, o.logger)(
                        r.LOG_TYPES.Warning,
                        'Order value reported but no currency is declared',
                        e.name
                      ),
                      !1)
                    : e.currency &&
                      -1 === this.validCurrencies.indexOf(e.currency)
                    ? ((0, o.logger)(
                        r.LOG_TYPES.Warning,
                        'Currency not recognized',
                        e.name
                      ),
                      !1)
                    : e.orderValue && !this.validNumber.test(e.orderValue)
                    ? ((0, o.logger)(
                        r.LOG_TYPES.Warning,
                        'Order value can only be a positive number',
                        e.name
                      ),
                      !1)
                    : e.name === i.PAGE_VIEW_NAME ||
                      this.validNameRegX.test(e.name)
                    ? !(
                        e.name !== i.PAGE_VIEW_NAME &&
                        e.name.length > this.validNameLength &&
                        ((0, o.logger)(
                          r.LOG_TYPES.Warning,
                          'Event name length cannot exceed 100 characters',
                          e.name
                        ),
                        1)
                      )
                    : ((0, o.logger)(
                        r.LOG_TYPES.Warning,
                        'Event Name invalid',
                        e.name
                      ),
                      !1)
                );
              }),
              e
            );
          })();
        (t.ValidatorService = a), (t.validatorService = new a());
      },
      784: (e, t) => {
        (t.__esModule = !0),
          (t.loadWaves = void 0),
          (t.loadWaves = function () {
            function e(e) {
              var t = document.createElement('script');
              (t.async = !0), (t.src = e), (t.type = 'text/javascript');
              var n = document.getElementsByTagName('script')[0];
              n.parentNode.insertBefore(t, n);
            }
            window.addEventListener('message', function (t) {
              var n;
              ['https://my.outbrain.com', 'http://localhost:4949'].indexOf(
                t.origin
              ) > -1 &&
                'SHOW_EVENT_PICKER' ===
                  (null === (n = t.data) || void 0 === n
                    ? void 0
                    : n.message) &&
                (e('https://my.outbrain.com/events-picker-app'),
                window.opener.postMessage(
                  { message: 'EVENT_PICKER_CONNECTED' },
                  t.origin
                ));
            });
            var t = [
              '00538945db33fa7a7705d45670ccc3912a',
              '00828acc846e44356aac0b8f10d381d69f',
              '00e2e50096dcc67415ebb484f11dcdb213',
              '0026fc2cc364aa0cd2fa6de4146fc2c8b6',
              '003ca3d94af87c082812859ece689385df',
              '005330249d4fb35d028c0011becd1b0833',
              '008a94464dfbbe84c9d01851caa9fa02f4',
              '0029126269a650c9809d8135dde0fa01c5',
              '00ebcc522805c7e78b7da896d6ec3472f5',
            ].find(function (e) {
              return apiObj.marketerId.indexOf(e) > -1;
            });
            t &&
              e('https://wave.outbrain.com/mtWavesBundler/handler/'.concat(t));
          });
      },
    },
    t = {};
  !(function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  })(81);
})();
