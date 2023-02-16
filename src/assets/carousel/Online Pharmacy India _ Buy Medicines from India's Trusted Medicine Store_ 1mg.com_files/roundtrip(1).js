window.__adroll ||
  (function () {
    function f() {
      this.version = '1.0';
      this.exp = 8760;
      this.eexp = 720;
      this.pv = 1e11 * Math.random();
      this.__adc = '__ar_v4';
      this._nad = 0;
      this._lce = null;
      this._loaded = this._broken = !1;
      this._url = 2e3;
      this._kwl = 300;
      this._r = {};
      this.cm_urls = [];
      this._logs = [];
      this.consent_networks = { facebook: 'f', linkedin: 'linkedin' };
      this.pixelstart = this.session_time = 0;
      this._init_idb();
      this._init_floc_trial();
      for (var a = Array(4), b = 0; b < a.length; b++)
        a[b] = (
          Math.round(1e11 * Math.random()).toString(16) + Array(9).join('0')
        ).substr(0, 8);
      this._set_global('adroll_sid', a.join(''));
      this._has_global('adroll_adv_id') &&
        (this.load_experiment_js(),
        this.init_pixchk(),
        this._load_precheck_js(),
        this.trigger_gtm_consent_event(),
        this.load_pixel_assistant(),
        ['adroll_adv_id', 'adroll_pix_id'].forEach(function (a) {
          window.hasOwnProperty(a) &&
            ('string' === typeof window[a] || window[a] instanceof String) &&
            (window[a] = window[a].replace(/[^A-Z0-9_]/g, ''));
        }));
      window.adroll = window.adroll || {};
      window.adroll.identify_email = this.identify_email.bind(this);
      a =
        'U4ZFS2QH4VB65A54O43AEQ 65OTM34PRZGIFD3IBONXTO X7AGHV4DPFEGRDGZEXB4UZ YVM7PLFDONAC7LRNYNXJF7 5DEKGEZXIZFGBAVTF7IHV4 FYTZRQUEVVGS7EWCIOE64A JUWZDLBKWFDCTN75AR2KST BJ2LEY7ICBALDJY44RXUPT'.split(
          ' '
        );
      this._has_global('adroll_adv_id') &&
        0 <= a.indexOf(window.adroll_adv_id) &&
        this._pixel_timing(!0, !0, null);
    }
    f.prototype.call_consent_check = function () {
      function a() {
        var a = ['_s=' + b.get_adroll_sid(), '_b=2'];
        '#_ar_gdpr=' === (window.location.hash || '').substr(0, 10) &&
          a.push('dbg=' + unescape((window.location.hash || '').substr(10)));
        window.adroll_fpconsent && a.push('_afc=1');
        a = b._srv(
          '/consent/check/' + b._global('adroll_adv_id') + '?' + a.join('&')
        );
        b.add_script_element(a);
      }
      var b = this;
      this._is_defined(window.adroll_fpconsent)
        ? a()
        : window.setTimeout(a, 100);
    };
    f.prototype.call_consent_write = function (a) {
      window.adroll_fpconsent && (a += '&_afc=1');
      this.add_script_element(this._srv('/consent/write?' + a));
    };
    f.prototype._consent_cookie = function (a) {
      return a
        ? (this.set('__adroll_consent', a, 8760), a)
        : this.get('__adroll_consent');
    };
    f.prototype.load_consent_banner = function () {
      window.document.getElementById('__adroll_consent_banner_el') ||
        this.add_script_element('s.adroll.com/j/consent_tcfv2.js', {
          id: '__adroll_consent_banner_el',
        });
    };
    f.prototype.get_consent_params = function () {
      return this.get('__adroll_consent_params');
    };
    f.prototype.set_consent_params = function (a) {
      this.set('__adroll_consent_params', a);
    };
    f.prototype.clear_consent_params = function () {
      this.del('__adroll_consent_params');
    };
    f.prototype.handle_null_consent = function (a) {
      a || ((a = this.get_consent_params()) && this.call_consent_write(a));
    };
    f.prototype.save_first_party_consent = function (a) {
      var b = (a || {}).euconsent;
      if ((a = (a || {}).arconsent) || b)
        this._consent_cookie(a),
          window.localStorage.setItem(
            '__adroll_consent_data',
            this.jsonStringify({ arconsent: a, euconsent: b })
          );
    };
    f.prototype.get_first_party_consent = function () {
      if (this._has_global('__adroll_consent_data'))
        return this._global('__adroll_consent_data');
      var a = null;
      try {
        if (window.localStorage) {
          var b = window.localStorage.getItem('__adroll_consent_data');
          b && (a = this.jsonParse(b));
        }
      } catch (c) {}
      if ((b = this._consent_cookie())) (a = a || {}), (a.arconsent = b);
      this._set_global('__adroll_consent_data', a);
      return a;
    };
    f.prototype.trigger_gtm_consent_event = function (a) {
      function b(a, b, c) {
        b = isNaN(Number(b)) ? 'c:' + b : 'tcf:' + b;
        !0 !== c && !1 !== c && (c = 'unknown');
        a[c][b] = 1;
      }
      function c(a) {
        return ',' + n.object_keys(a).join(',') + ',';
      }
      if (!window.dataLayer || 'function' === typeof window.dataLayer.push)
        if (((window.dataLayer = window.dataLayer || []), a)) {
          var d = this._global('__adroll_consent'),
            e = this._global('__adroll_consent_data') || {},
            m = e.eucookie || {},
            p = m.max_vendor_id || e.max_vendor_id || 0,
            q = e.networks || [],
            l = m.purposes_allowed || 0,
            g = { true: {}, false: {}, unknown: {} },
            h = { true: {}, false: {}, unknown: {} },
            k = { true: {}, false: {} },
            n = this,
            r;
          if ('boolean' === typeof d) {
            for (r = 0; r < q.length; r++) b(g, q[r], d);
            for (r = 1; r < p; r++) b(g, r, d), b(h, r, d);
            for (r = 1; 25 > r; r++) k[d][r] = 1;
          } else {
            for (r in d) d.hasOwnProperty(r) && b(g, r, d[r]);
            for (r = 1; r <= p; r++) b(h, r, (m.vendor_consent || {})[r]);
            for (r = 0; 24 > r; r++) k[!!(l & (1 << r))][r + 1] = 1;
          }
          window.dataLayer.push({
            event: a,
            nextrollVendorsConsent: c(g['true']),
            nextrollVendorsConsentUnknown: c(g.unknown),
            nextrollVendorsConsentDenied: c(g['false']),
            nextrollVendorsRawConsent: c(h['true']),
            nextrollVendorsRawConsentUnknown: c(h.unknown),
            nextrollVendorsRawConsentDenied: c(h['false']),
            nextrollPurposesConsent: c(k['true']),
            nextrollPurposesConsentUnknown: null,
            nextrollPurposesConsentDenied: c(k['false']),
            nextrollgdpr: this._global('__adroll_consent_is_gdpr'),
            nextrolliab: e.euconsent,
          });
        } else window.dataLayer.push({ event: 'nextroll-ready' });
    };
    f.prototype.set_consent = function (a, b, c, d, e, m) {
      if (0 === arguments.length) {
        if (!this._has_global('__adroll_consent')) return;
        a = this._global('__adroll_consent');
      }
      var p = 'nextroll-consent';
      this._has_global('__adroll_consent') && (p = 'nextroll-consent-modified');
      this._set_global('__adroll_consent', a);
      this._set_global('__adroll_consent_is_gdpr', c);
      this._set_global('__adroll_consent_data', m || {});
      d && this._set_global('__adroll_consent_user_country', d);
      e && this._set_global('__adroll_consent_adv_country', e);
      var q = [
          '5L5IV3X4ZNCUZFMLN5KKOD',
          'VMYZUWPHFRH37EAOEU2EQS',
          '3QOM4TKN4RD7TO3HCPYRKV',
        ],
        l = this._global('adroll_adv_id');
      'CA' === d && 0 <= q.indexOf(l) && (c = !0);
      c && ('adroll' === (m || {}).banner || b) && this.load_consent_banner();
      if (this._install_cmp) this._install_cmp();
      else {
        var g = this;
        window.setTimeout(function () {
          g._install_cmp && g._install_cmp();
        }, 1e3);
      }
      null === a
        ? this.handle_null_consent(b)
        : (this.save_first_party_consent(m),
          b || this.clear_consent_params(),
          this._trigger_consent_event && this._trigger_consent_event(),
          !1 !== a &&
            !1 !== (a || {}).a &&
            (this._log_floc_cohort(),
            this._sync_fpid(),
            this.trigger_gtm_consent_event(p),
            this._load_black_crow(),
            this.call_next_tpc()));
    };
    f.prototype._load_precheck_js = function () {
      this.add_script_element(
        'https://s.adroll.com/j/pre/' +
          window.adroll_adv_id +
          '/' +
          window.adroll_pix_id +
          '/fpconsent.js'
      );
      this.add_script_element(
        'https://s.adroll.com/j/pre/' +
          window.adroll_adv_id +
          '/' +
          window.adroll_pix_id +
          '/index.js'
      );
    };
    f.prototype.cookieEnabled = function (a) {
      if (
        this._global('adroll_ext_network') ||
        this._global('adroll_optout') ||
        this._broken
      )
        return !1;
      if (2 <= this._nad || a) return this._lce;
      this.set('_te_', '1');
      return '1' === this.get('_te_')
        ? (this.del('_te_'),
          0 < this._nad && !this.get(this.__adc)
            ? (this._lce = !1)
            : (this._lce = !0))
        : (this._lce = !1);
    };
    f.prototype.get = function (a) {
      var b = window.document.cookie;
      if (null === b) return (this._broken = !0), null;
      var c;
      0 > b.indexOf(a + '=')
        ? (b = null)
        : ((a = b.indexOf(a + '=') + a.length + 1),
          (c = b.indexOf(';', a)),
          -1 === c && (c = b.length),
          (b = b.substring(a, c)),
          (b = '' === b ? null : window.unescape(b)));
      return b;
    };
    f.prototype.set = function (a, b, c) {
      var d;
      c && 'number' === typeof c
        ? ((d = new Date()),
          d.setTime(d.getTime() + 36e5 * c),
          (c = d.toGMTString()),
          (c = '; expires=' + c))
        : (c = '');
      d = '; domain=' + window.location.hostname;
      b = window.escape(b);
      window.document.cookie =
        a + '=' + b + c + '; path=/' + d + '; samesite=lax';
    };
    f.prototype.del = function (a) {
      this.set(a, '', -8760);
    };
    f.prototype.check_cookie = function (a, b) {
      if (this._global('adroll_ext_network') || this._global('adroll_optout'))
        return '';
      for (var c = a.split('|'), d = c.length - 1; 0 <= d; d--)
        if (c[d]) {
          var e = c[d].split(':');
          b === e[0] &&
            ((e[2] = '' + (parseInt(e[2]) + 1)), (c[d] = e.join(':')));
        }
      return c.join('|');
    };
    f.prototype.handle = function (a) {
      var b = this.get(this.__adc) || '';
      -1 !== b.indexOf(a)
        ? this.set(this.__adc, this.check_cookie(b, a), this.exp)
        : ((a = [b, [a, this.get_date(this.eexp), '1'].join(':')].join('|')),
          this.set(this.__adc, a, this.exp));
    };
    f.prototype.expire_old = function () {
      if (
        !this._global('adroll_ext_network') &&
        !this._global('adroll_optout')
      ) {
        for (
          var a = this.get_date(!1),
            b = this.get(this.__adc),
            b = b ? b.split('|') : [''],
            c = [],
            d = b.length - 1;
          0 <= d;
          d--
        )
          b[d] && b[d].split(':')[1] > a && c.push(b[d]);
        this.set(this.__adc, c.join('|'), this.exp);
      }
    };
    f.prototype.get_date = function (a) {
      var b = new Date();
      a && b.setTime(b.getTime() + 36e5 * a);
      a = '' + b.getUTCFullYear();
      var c = b.getUTCMonth(),
        c = 10 <= c ? c : '0' + c,
        b = b.getUTCDate();
      return [a, c, 10 <= b ? b : '0' + b].join('');
    };
    f.prototype.consent_allowed = function (a) {
      var b = this._global('__adroll_consent');
      return 'object' === typeof b ? b[a] : b;
    };
    f.prototype.generate_link = function () {
      return '';
    };
    f.prototype.view = function (a) {
      var b = new window.Image();
      b.src = this._srv('/view/' + a);
      b.setAttribute('width', '1');
      b.setAttribute('height', '1');
      b.setAttribute('border', '0');
      b.setAttribute('alt', '');
      this._head().appendChild(b);
    };
    f.prototype.set_cookie = function () {};
    f.prototype.reset = function () {
      this._set_global('adroll_c_id', null);
      this._set_global('adroll_url_macro', '');
      this._set_global('adroll_c_macro', '');
      this._set_global('adroll_cpm_macro', '');
      this._set_global('adroll_ext_network', null);
      this._set_global('adroll_subnetwork', null);
      this._set_global('adroll_ad_payload', null);
      this._set_global('adroll_win_notif', null);
    };
    f.prototype.set_pixel_cookie = function (a, b, c) {
      this._global('adroll_optout') ||
        (this.handle(a), this.handle(b), this.handle(c), this.pixel_loaded());
    };
    f.prototype.add_pixel_load_callback = function (a) {
      this._loaded ? a() : this._ensure_global('adroll_callbacks', []).push(a);
    };
    f.prototype.pixel_loaded = function () {
      this._loaded = !0;
      for (
        var a = this._ensure_global('adroll_callbacks', []), b = 0;
        b < a.length;
        b++
      )
        a[b].called || (a[b](), (a[b].called = !0));
    };
    f.prototype.addLoadEvent = function (a) {
      if (
        (this._has_global('__adroll_loaded') &&
          this._global('__adroll_loaded')) ||
        (this._has_global('_adroll_ie') && this._global('_adroll_ie')) ||
        /msie/i.test(window.navigator.userAgent)
      )
        return a();
      if (/WebKit/i.test(window.navigator.userAgent)) {
        var b = window.setInterval(function () {
          /loaded|complete/.test(window.document.readyState) &&
            window.clearInterval(b);
          a();
        }, 10);
        return null;
      }
      var c = window.onload;
      window.onload = function () {
        a();
        c && c();
      };
    };
    f.prototype._head = function () {
      return (
        (window.document.getElementsByTagName('head') || [null])[0] ||
        (window.document.getElementsByTagName('body') || [null])[0] ||
        window.document.getElementsByTagName('script')[0].parentNode
      );
    };
    f.prototype._body = function () {
      return (
        window.document.body ||
        (window.document.getElementsByTagName('body') || [null])[0]
      );
    };
    f.prototype.listenToEvent = function (a, b, c) {
      a.addEventListener
        ? a.addEventListener(b, this.wrapException(c), !1)
        : a.attachEvent('on' + b, this.wrapException(c));
    };
    f.prototype.matchesSelector = function (a, b) {
      var c =
        a.matches ||
        a.webkitMatchesSelector ||
        a.mozMatchesSelector ||
        a.msMatchesSelector ||
        a.oMatchesSelector;
      return c && c.call(a, b);
    };
    f.prototype.runCookieMatch = function () {
      var a = this.cm_urls.length;
      if (!(0 >= a)) for (var b = 0; b <= a; b++) this.popAndSend();
    };
    f.prototype.popAndSend = function () {
      if (!(0 >= this.cm_urls.length)) {
        var a = this.cm_urls.shift(),
          b = new Image();
        b.src = a;
        b.setAttribute('alt', '');
      }
    };
    f.prototype.add_param_to_url = function (a, b) {
      var c = a.indexOf('?'),
        d = '',
        e = '';
      -1 !== c
        ? ((d = a.slice(0, c + 1)), (e = '&' + a.slice(c + 1)))
        : ((c = a.indexOf('#', -1 === c ? 0 : c)),
          -1 === c
            ? (d = a + '?')
            : ((d = a.slice(0, c) + '?'), (e = a.slice(c))));
      return d + b + e;
    };
    f.prototype._init_idb = function () {
      function a() {
        return b._adroll_idb
          .transaction('adroll', 'readwrite')
          .objectStore('adroll');
      }
      var b = this,
        c =
          window.indexedDB ||
          window.mozIndexedDB ||
          window.webkitIndexedDB ||
          window.msIndexedDB;
      if (c && !this._adroll_idb) {
        this._adroll_idb = !0;
        var d = c.open('adroll', 1);
        d.onupgradeneeded = function () {
          b._adroll_idb = d.result;
          b._adroll_idb.createObjectStore('adroll', { keyPath: 'id' });
          b._adroll_idb.getStore = a;
        };
        d.onsuccess = function () {
          b._adroll_idb = d.result;
          b._adroll_idb.getStore = a;
        };
        d.onblocked = function () {
          b._adroll_idb = null;
        };
      }
    };
    f.prototype._get_idb_row = function (a, b, c) {
      var d = this;
      if (this._adroll_idb)
        if (!0 === this._adroll_idb)
          5 > c
            ? window.setTimeout(
                this._get_idb_row.call(this, a, b, (c || 1) + 1),
                100
              )
            : b && b.call(d, null);
        else {
          var e = b,
            m = window.setTimeout(function () {
              e && e.call(d, null);
            }, 1e3);
          this._adroll_idb.getStore().get(a).onsuccess = function () {
            e = null;
            window.clearTimeout(m);
            b && b.call(d, this.result);
          };
        }
      else b.call(this, null);
    };
    f.prototype._set_idb_row = function (a, b, c) {
      if ('object' !== typeof b) throw Error('Row must be object');
      this._adroll_idb &&
        (!0 === this._adroll_idb
          ? 5 > c &&
            window.setTimeout(
              this._set_idb_row.call(this, a, b, (c || 1) + 1),
              100
            )
          : ((b.id = a), this._adroll_idb.getStore().put(b)));
    };
    f.prototype.closest = function (a, b) {
      if (a.closest) return a.closest(b);
      if (!b) return null;
      for (var c = a; null !== c; c = c.parentNode) {
        var d =
          c.matches ||
          c.webkitMatchesSelector ||
          c.mozMatchesSelector ||
          c.msMatchesSelector ||
          c.oMatchesSelector;
        if (d && d.call(c, b)) return c;
      }
      return null;
    };
    f.prototype.is_under_experiment = function (a) {
      return window.adroll_exp_list && 0 <= window.adroll_exp_list.indexOf(a);
    };
    f.prototype.load_experiment_js = function () {
      var a = window.document.getElementById('adroll_scr_exp');
      return a
        ? a
        : this.add_script_element(
            'https://s.adroll.com/j/exp/' + window.adroll_adv_id + '/index.js',
            { id: 'adroll_scr_exp', onError: 'window.adroll_exp_list = [];' }
          );
    };
    f.prototype.is_experiment_js_loaded = function () {
      return !!window.adroll_exp_list;
    };
    f.prototype.is_test_advertisable = function () {
      return 'ADV_EID' === this._global('adroll_adv_id');
    };
    f.prototype.if_under_experiment_js = function (a, b, c, d) {
      var e = this;
      this.load_experiment_js();
      this.on_experiment_loaded(function () {
        e.is_under_experiment(a)
          ? 'function' === typeof b && b.call(e)
          : 'function' === typeof c && c.call(e);
      }, d);
    };
    f.prototype.on_experiment_loaded = function (a, b) {
      function c() {
        if (e.is_experiment_js_loaded() || e.is_test_advertisable()) d = !0;
        d ? a.call(e) : window.setTimeout(c, 10);
      }
      var d = !1,
        e = this;
      window.setTimeout(function () {
        d = !0;
      }, b || 500);
      c();
    };
    f.prototype.external_data_to_qs = function (a) {
      var b = [],
        c = this.get_external_data();
      if (!c) return null;
      for (var d in c)
        c.hasOwnProperty(d) &&
          this._is_defined(c[d]) &&
          null !== c[d] &&
          b.push(
            this.normalize_var(
              window.escape('' + d) + '=' + window.escape('' + c[d]),
              !1
            )
          );
      b = b.join('&');
      a && (b = window.escape(b));
      return 'adroll_external_data=' + b;
    };
    f.prototype.replace_external_data = function (a) {
      var b = this.get_external_data(),
        c = this.get_conversion_value(),
        d = null,
        e;
      if (b)
        for (e in b)
          b.hasOwnProperty(e) &&
            ((d = new RegExp('\\[' + e + '\\]', 'gi')),
            (a = a.replace(d, b[e])),
            (d = new RegExp('\\[' + e + '_ESC\\]', 'gi')),
            (a = a.replace(d, window.escape(b[e]))));
      if (c)
        for (e in c)
          c.hasOwnProperty(e) &&
            ((d = new RegExp('\\[' + e + '\\]', 'gi')),
            (a = a.replace(d, c[e])),
            (d = new RegExp('\\[' + e + '_ESC\\]', 'gi')),
            (a = a.replace(d, window.escape(c[e]))));
      return a;
    };
    f.prototype.get_external_data = function () {
      if (this._has_global('adroll_custom_data')) {
        var a = this._global('adroll_custom_data'),
          b = {},
          c;
        for (c in a)
          a.hasOwnProperty(c) &&
            'undefined' !== a[c] &&
            (b[c.toLowerCase()] = a[c]);
        return b;
      }
      return null;
    };
    f.prototype.get_conversion_value = function () {
      var a = this._ensure_global('adroll_currency', null),
        b = this._ensure_global('adroll_conversion_value', null),
        c = this._ensure_global('adroll_conversion_value_in_dollars', null);
      return b
        ? { conv_value: '' + b, currency: a }
        : c
        ? { conv_value: '' + parseInt(100 * c), currency: 'USC' }
        : null;
    };
    f.prototype._form_attach = function () {
      var a = this._form_els_allowed();
      if (a) {
        var b = [],
          c;
        for (c in a) a.hasOwnProperty(c) && 'submit' === a[c].type && b.push(c);
        this._adroll_submit_sels = b.join(',');
        a = window.document.querySelectorAll('input,select,textarea');
        for (b = 0; b < a.length; b++) this._form_data(a[b]);
        a = this._body();
        this.listenToEvent(a, 'blur', this._form_change.bind(this));
        this.listenToEvent(a, 'change', this._form_change.bind(this));
        this.listenToEvent(a, 'focusout', this._form_change.bind(this));
        this.listenToEvent(a, 'click', this._form_click.bind(this));
        this.listenToEvent(a, 'submit', this._form_save.bind(this));
      }
    };
    f.prototype._form_els_allowed = function () {
      return 0 ===
        this.object_keys(this._ensure_global('adroll_form_fields', {})).length
        ? null
        : this._global('adroll_form_fields');
    };
    f.prototype._form_el_allowed = function (a) {
      if (!a || !a.type || !this._form_els_allowed())
        return (a._adroll_el_ok = !1);
      if (this._is_defined(a._adroll_el_ok)) return a._adroll_el_ok;
      var b = a.type.toLowerCase(),
        c = (a.name || '').toLowerCase(),
        d = this._form_els_allowed(),
        e = this._desc_el(a);
      if (
        'password' === b ||
        'file' === b ||
        c.match(/cc_number|credit_card|card_number|cv[cv]_code/)
      )
        return (a._adroll_el_ok = !1);
      if (this._is_defined(d.length)) {
        if (0 <= d.indexOf(e)) return (a._adroll_el_ok = !0);
        for (e = 0; e < d.length; e++)
          if (this.closest(a, d[e])) return (a._adroll_el_ok = !0);
      } else {
        if (d[e]) return (a._adroll_el_ok = d[e]);
        for (e in d)
          if (
            d.hasOwnProperty(e) &&
            (b = this.closest(a, e.replace(/\s*:is\(.*/, ''))) &&
            b === a
          )
            return (a._adroll_el_ok = d[e]);
      }
      return (a._adroll_el_ok = !1);
    };
    f.prototype._desc_el = function (a) {
      if (!a) return '';
      var b = a.tagName.toLowerCase();
      a.id
        ? (b = b + '#' + a.id)
        : a.getAttribute('name')
        ? (b = b + '[name="' + a.getAttribute('name') + '"]')
        : a.className && (b = b + '.' + a.className.replace(/ /g, '.'));
      return b;
    };
    f.prototype._find_el = function (a, b) {
      var c;
      b = b || window.document;
      try {
        c = b.querySelector(a);
      } catch (e) {
        c = null;
      }
      if (c) return c;
      try {
        c = this.matchesSelector(b, a) && b;
      } catch (e) {
        c = null;
      }
      if (c) return c;
      var d = a.match(/(\s*):is\(([^\)]*)\)/);
      d &&
        (c = d[1] ? b.querySelector(d[2]) : this.matchesSelector(b, d[2]) && b);
      return c || null;
    };
    f.prototype._form_data = function (a) {
      var b = 'form' === a.tagName.toLowerCase(),
        c = this._desc_el(b ? a : a.form);
      this._is_defined(this._adroll_form_data) || (this._adroll_form_data = {});
      this._is_defined(this._adroll_form_data[c]) ||
        (this._adroll_form_data[c] = { data: {}, kind: {}, contact: {} });
      if (!b) {
        var b = this._form_el_allowed(a),
          d = this._desc_el(a);
        if (!b) return delete this._adroll_form_data[c].contact[d], null;
        if (':contact' === b.type)
          return (
            this._find_el(b.sel, a)
              ? (this._adroll_form_data[c].contact[d] = b.sel)
              : delete this._adroll_form_data[c].contact[d],
            null
          );
        var e = a.value,
          m = b.auth || 0;
        this._is_defined(a.options) && this._is_defined(a.selectedIndex)
          ? (e = (a.options[a.selectedIndex] || {}).value)
          : 'button' === a.tagName.toLowerCase() && (e = e || a.textContent);
        e
          ? ((this._adroll_form_data[c].data[d] = { val: e, auth: m }),
            b.type &&
              (this._adroll_form_data[c].kind[b.type] = { val: e, auth: m }))
          : (delete this._adroll_form_data[c].data[d],
            b.type && delete this._adroll_form_data[c].kind[b.type]);
      }
      a = {
        contact: this._adroll_form_data[c].contact,
        data: {},
        kind: this._adroll_form_data[c].kind,
      };
      a.data[c] = this._adroll_form_data[c].data;
      return 0 === this.object_keys(a.data[c]).length ? null : a;
    };
    f.prototype._form_change = function (a) {
      a = a.target;
      this._form_el_allowed(a) && this._form_data(a);
    };
    f.prototype._form_click = function (a) {
      a = a.target;
      this.closest(a, this._adroll_submit_sels) &&
        (a = this.closest(a, 'form')) &&
        this._form_save({ target: a });
    };
    f.prototype._form_save = function (a) {
      var b = this._form_data(a.target);
      b &&
        b.contact &&
        ((a = this.object_keys(b.contact)),
        0 < a.length ? (b.contact = a) : delete b.contact);
      a = this._redact_pci(this.jsonStringify(b));
      b &&
        !a.match(/^{"data":{"contact":\[[^\]]*\],"[^"]+":{}},"kind":{}}$/) &&
        (b.kind.email &&
          b.kind.email.auth &&
          this.identify_email(b.kind.email.val),
        (b = this._ensure_global('adroll_adv_id', '')),
        (b = this._srv('/form/' + b + '?pv=' + encodeURIComponent(this.pv))),
        this._xhr({
          body: a,
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          url: b,
          withCredentials: !0,
        }));
    };
    f.prototype._redact_pci = function (a) {
      a = a.split(/([\d\-\.\ ]+)/);
      for (var b = 0; b < a.length; b++)
        this.is_luhn(a[b]) && (a[b] = ' <PCI_REDACTED> ');
      return a.join('');
    };
    f.prototype._xhr = function (a) {
      a = a || {};
      var b = new XMLHttpRequest();
      b.open(a.method || 'GET', a.url, !1 !== a.async);
      for (var c in a.headers || {})
        a.headers.hasOwnProperty(c) && b.setRequestHeader(c, a.headers[c]);
      a.withCredentials && (b.withCredentials = a.withCredentials);
      b.send(a.body || null);
    };
    f.prototype._has_global = function (a) {
      return this._is_defined(this._global(a));
    };
    f.prototype._global = function (a) {
      return window[a];
    };
    f.prototype._set_global = function (a, b) {
      window[a] = b;
    };
    f.prototype._unset_global = function (a) {
      delete window[a];
    };
    f.prototype._ensure_global = function (a, b) {
      this._has_global(a) || this._set_global(a, b);
      return this._global(a);
    };
    f.prototype.set_first_party_cookie = function (a) {
      if ((a = this.get_first_party_cookie() || a))
        return this.set('__adroll_fpc', a, 8766), a;
      a =
        this.md5(
          new Date().getTime() +
            Math.round(1e11 * Math.random()) +
            window.navigator.userAgent.toLowerCase() +
            window.document.referrer
        ) +
        '-' +
        new Date().getTime();
      this.set('__adroll_fpc', a, 8766);
      return a;
    };
    f.prototype.get_first_party_cookie = function () {
      try {
        var a = this.get('__adroll_fpc');
        if (a) {
          var b = a.replace('-s2-', '-').replace(/-$/, '');
          if ('-' === b.charAt(32) && b.substr(33).match(/\D/) && Date.parse) {
            var c = new Date(b.substr(33));
            if (c && !isNaN(c.getTime())) return b.substr(0, 33) + c.getTime();
          }
          return b;
        }
      } catch (d) {}
      return null;
    };
    f.prototype._get_fpid_ls = function () {
      return window.localStorage.getItem('__adroll_fpc');
    };
    f.prototype._set_fpid_ls = function (a) {
      window.localStorage.setItem('__adroll_fpc', a);
    };
    f.prototype._get_fpid_idb = function (a) {
      var b = this;
      this._get_idb_row('__adroll_fpc', function (c) {
        a && a.call(b, (c || {}).val);
      });
    };
    f.prototype._set_fpid_idb = function (a) {
      this._set_idb_row('__adroll_fpc', { val: a });
    };
    f.prototype._sync_fpid = function () {
      var a = this;
      this.if_under_experiment_js(
        'fpidexp',
        function () {
          var b = a.get_first_party_cookie(),
            c = a._get_fpid_ls();
          a._get_fpid_idb(function (d) {
            a._log_pex_event('fpidexp', 'load', '', '', {
              fpc: b || '',
              lsid: c || '',
              idbid: d || '',
            });
            (d = b || c || d)
              ? a.set_first_party_cookie(d)
              : (d = a.set_first_party_cookie());
            a._set_fpid_ls(d);
            a._set_fpid_idb(d);
          });
        },
        function () {
          this.set_first_party_cookie();
        }
      );
    };
    f.prototype.jsonStringify = function (a) {
      this.jsonStringifyFunc || this.initJsonStringify();
      return this.jsonStringifyFunc(a);
    };
    f.prototype.jsonParse = function (a) {
      var b = this._global('JSON');
      return 'function' === typeof b.parse ? b.parse(a) : eval('(' + a + ')');
    };
    f.prototype.initJsonStringify = function () {
      var a = this._global('JSON');
      this.jsonStringifyFunc =
        a && a.stringify && 'function' === typeof a.stringify
          ? a.stringify
          : (function () {
              function a(b) {
                return (
                  e[b] ||
                  '\\u' + (b.charCodeAt(0) + 65536).toString(16).substr(1)
                );
              }
              var c = Object.prototype.toString,
                d =
                  Array.isArray ||
                  function (a) {
                    return '[object Array]' === c.call(a);
                  },
                e = {
                  '"': '\\"',
                  '\\': '\\\\',
                  '\b': '\\b',
                  '\f': '\\f',
                  '\n': '\\n',
                  '\r': '\\r',
                  '\t': '\\t',
                },
                m = /[\\"\u0000-\u001F\u2028\u2029]/g;
              return function q(e) {
                if (null === e) return 'null';
                if ('number' === typeof e)
                  return isFinite(e) ? e.toString() : 'null';
                if ('boolean' === typeof e) return e.toString();
                if ('object' === typeof e) {
                  if ('function' === typeof e.toJSON) return q(e.toJSON());
                  if (d(e)) {
                    for (var g = '[', h = 0; h < e.length; h++)
                      g += (h ? ', ' : '') + q(e[h]);
                    return g + ']';
                  }
                  if ('[object Object]' === c.call(e)) {
                    g = [];
                    for (h in e)
                      e.hasOwnProperty(h) && g.push(q(h) + ': ' + q(e[h]));
                    return '{' + g.join(', ') + '}';
                  }
                }
                return '"' + e.toString().replace(m, a) + '"';
              };
            })();
    };
    f.prototype.macro_values = function () {
      var a = this._ensure_global('adroll_cpm_macro', null),
        b = this._ensure_global('adroll_url_macro', null),
        c = this._ensure_global('adroll_c_macro', null),
        d = this._ensure_global('adroll_subnetwork', null),
        e = this._ensure_global('adroll_ad_payload', null),
        m = this._ensure_global('adroll_win_notif', null),
        p = this._ensure_global('adroll_rtb_dict', null),
        q = this._ensure_global('adroll_debug_string', null),
        l = this._ensure_global('adroll_ad_container_version', null),
        g = this._ensure_global('adroll_pixalate_click_url', null),
        h = {
          r: /^\$\{.*\}$/i,
          g: /^%%.*%%$/i,
          b: /^\[.*\]$/i,
          x: /^\$\{.*\}$/i,
          t: /INSERTCLICKTRACKER/,
        }[this._global('adroll_ext_network')],
        h = this._is_defined(h) ? h : /CANNOT_MATCH_THIS/,
        k = {};
      a && !h.test(a) && (k.adroll_cpm_macro = a);
      q && !h.test(q) && (k.adroll_debug_string = q);
      l && !h.test(l) && (k.adroll_ad_container_version = l);
      b && !h.test(b) && (k.adroll_url_macro = b);
      c && !h.test(c) && (k.adroll_c_macro = c);
      d && !h.test(d) && (k.adroll_subnetwork = d);
      e && !h.test(e) && (k.adroll_ad_payload = e);
      m && !/^[|$]/.test(m) && (k.adroll_win_notif = m);
      g && !h.test(g) && (k.adroll_pixalate_click_url = g);
      if (p && ('string' !== typeof p || !/^[|$]/.test(p))) {
        if ('string' === typeof p)
          try {
            0 === p.indexOf('b64:') && (p = atob(p.substr(4))),
              (p = this.jsonParse(p));
          } catch (n) {
            this.log('failed to parse: ' + n), (p = {});
          }
        'object' === typeof p && (k.adroll_rtb_dict = p);
      }
      return k;
    };
    f.prototype.format_macros = function (a, b, c, d) {
      return this.macro_url_params(this.macro_values(), a, b, c, d);
    };
    f.prototype.macro_url_params = function (a, b, c, d, e) {
      e = this._is_defined(e) ? e : !1;
      var m = d
          ? window.escape
          : function (a) {
              return a;
            },
        p = a.adroll_cpm_macro,
        q = a.adroll_url_macro,
        l = c ? a.adroll_c_macro : null,
        g = [],
        h = this.is_lenient_click(b);
      l && 0 === l.indexOf('http')
        ? ((h = m),
          'g' === this._global('adroll_ext_network') &&
            (h = d
              ? function (a) {
                  return a;
                }
              : window.unescape),
          g.push(['clickurl', h(l)]))
        : h && e && g.push(['clickurl', '']);
      this._global('adroll_ad_destination_url') &&
        !e &&
        g.push(['desturl', m(this._global('adroll_ad_destination_url'))]);
      this._global('adroll_ext_network') &&
        g.push(['adroll_network', this._global('adroll_ext_network')]);
      p && g.push(['cpm', p]);
      a.adroll_subnetwork && g.push(['adroll_subnetwork', a.adroll_subnetwork]);
      a.adroll_ad_payload && g.push(['adroll_ad_payload', a.adroll_ad_payload]);
      a.adroll_debug_string &&
        g.push(['debug_string', m(a.adroll_debug_string)]);
      a.adroll_ad_container_version &&
        g.push([
          'adroll_ad_container_version',
          m(a.adroll_ad_container_version),
        ]);
      a.adroll_pixalate_click_url &&
        g.push(['adroll_pixalate_click_url', m(a.adroll_pixalate_click_url)]);
      q &&
        ((a = this.parseUri(window.unescape(q))),
        g.push(['site_url', m('http://' + a.host)]),
        c &&
          (g.push(['adroll_width', m(this._global('adroll_width'))]),
          g.push(['adroll_height', m(this._global('adroll_height'))])));
      this._global('adroll_insertion_id') &&
        g.push(['adroll_insertion_id', this._global('adroll_insertion_id')]);
      this.log('Macros found ' + this.serialize(g));
      return b ? this.buildurl(b, g) : this.serialize(g);
    };
    f.prototype.serialize = function (a) {
      if (a.length) {
        for (var b = [], c = a.length - 1; 0 <= c; c--) b.push(a[c].join('='));
        return b.join('&');
      }
      return '';
    };
    f.prototype.includes = function (a, b) {
      return -1 !== a.indexOf(b);
    };
    f.prototype.startswith = function (a, b) {
      return 0 === a.indexOf(b);
    };
    f.prototype.endswith = function (a, b) {
      return -1 !== a.indexOf(b, a.length - b.length);
    };
    f.prototype.buildurl = function (a, b) {
      var c = this.serialize(b),
        d = a.indexOf('?');
      return c
        ? d === a.length - 1
          ? a + c
          : -1 !== d
          ? '&' === a[a.length - 1]
            ? a + c
            : a + '&' + c
          : a + '?' + c
        : a;
    };
    f.prototype.md5 = (function () {
      function a(a, b) {
        var c = (a & 65535) + (b & 65535);
        return (((a >> 16) + (b >> 16) + (c >> 16)) << 16) | (c & 65535);
      }
      function b(b, c, d, e, k, n) {
        c = a(a(c, b), a(e, n));
        return a((c << k) | (c >>> (32 - k)), d);
      }
      function c(a, c, d, e, k, n, m) {
        return b((c & d) | (~c & e), a, c, k, n, m);
      }
      function d(a, c, d, e, k, n, m) {
        return b((c & e) | (d & ~e), a, c, k, n, m);
      }
      function e(a, c, d, e, k, n, m) {
        return b(d ^ (c | ~e), a, c, k, n, m);
      }
      function m(m, l) {
        var g = m[0],
          h = m[1],
          k = m[2],
          n = m[3],
          g = c(g, h, k, n, l[0], 7, -680876936),
          n = c(n, g, h, k, l[1], 12, -389564586),
          k = c(k, n, g, h, l[2], 17, 606105819),
          h = c(h, k, n, g, l[3], 22, -1044525330),
          g = c(g, h, k, n, l[4], 7, -176418897),
          n = c(n, g, h, k, l[5], 12, 1200080426),
          k = c(k, n, g, h, l[6], 17, -1473231341),
          h = c(h, k, n, g, l[7], 22, -45705983),
          g = c(g, h, k, n, l[8], 7, 1770035416),
          n = c(n, g, h, k, l[9], 12, -1958414417),
          k = c(k, n, g, h, l[10], 17, -42063),
          h = c(h, k, n, g, l[11], 22, -1990404162),
          g = c(g, h, k, n, l[12], 7, 1804603682),
          n = c(n, g, h, k, l[13], 12, -40341101),
          k = c(k, n, g, h, l[14], 17, -1502002290),
          h = c(h, k, n, g, l[15], 22, 1236535329),
          g = d(g, h, k, n, l[1], 5, -165796510),
          n = d(n, g, h, k, l[6], 9, -1069501632),
          k = d(k, n, g, h, l[11], 14, 643717713),
          h = d(h, k, n, g, l[0], 20, -373897302),
          g = d(g, h, k, n, l[5], 5, -701558691),
          n = d(n, g, h, k, l[10], 9, 38016083),
          k = d(k, n, g, h, l[15], 14, -660478335),
          h = d(h, k, n, g, l[4], 20, -405537848),
          g = d(g, h, k, n, l[9], 5, 568446438),
          n = d(n, g, h, k, l[14], 9, -1019803690),
          k = d(k, n, g, h, l[3], 14, -187363961),
          h = d(h, k, n, g, l[8], 20, 1163531501),
          g = d(g, h, k, n, l[13], 5, -1444681467),
          n = d(n, g, h, k, l[2], 9, -51403784),
          k = d(k, n, g, h, l[7], 14, 1735328473),
          h = d(h, k, n, g, l[12], 20, -1926607734),
          g = b(h ^ k ^ n, g, h, l[5], 4, -378558),
          n = b(g ^ h ^ k, n, g, l[8], 11, -2022574463),
          k = b(n ^ g ^ h, k, n, l[11], 16, 1839030562),
          h = b(k ^ n ^ g, h, k, l[14], 23, -35309556),
          g = b(h ^ k ^ n, g, h, l[1], 4, -1530992060),
          n = b(g ^ h ^ k, n, g, l[4], 11, 1272893353),
          k = b(n ^ g ^ h, k, n, l[7], 16, -155497632),
          h = b(k ^ n ^ g, h, k, l[10], 23, -1094730640),
          g = b(h ^ k ^ n, g, h, l[13], 4, 681279174),
          n = b(g ^ h ^ k, n, g, l[0], 11, -358537222),
          k = b(n ^ g ^ h, k, n, l[3], 16, -722521979),
          h = b(k ^ n ^ g, h, k, l[6], 23, 76029189),
          g = b(h ^ k ^ n, g, h, l[9], 4, -640364487),
          n = b(g ^ h ^ k, n, g, l[12], 11, -421815835),
          k = b(n ^ g ^ h, k, n, l[15], 16, 530742520),
          h = b(k ^ n ^ g, h, k, l[2], 23, -995338651),
          g = e(g, h, k, n, l[0], 6, -198630844),
          n = e(n, g, h, k, l[7], 10, 1126891415),
          k = e(k, n, g, h, l[14], 15, -1416354905),
          h = e(h, k, n, g, l[5], 21, -57434055),
          g = e(g, h, k, n, l[12], 6, 1700485571),
          n = e(n, g, h, k, l[3], 10, -1894986606),
          k = e(k, n, g, h, l[10], 15, -1051523),
          h = e(h, k, n, g, l[1], 21, -2054922799),
          g = e(g, h, k, n, l[8], 6, 1873313359),
          n = e(n, g, h, k, l[15], 10, -30611744),
          k = e(k, n, g, h, l[6], 15, -1560198380),
          h = e(h, k, n, g, l[13], 21, 1309151649),
          g = e(g, h, k, n, l[4], 6, -145523070),
          n = e(n, g, h, k, l[11], 10, -1120210379),
          k = e(k, n, g, h, l[2], 15, 718787259),
          h = e(h, k, n, g, l[9], 21, -343485551);
        m[0] = a(g, m[0]);
        m[1] = a(h, m[1]);
        m[2] = a(k, m[2]);
        m[3] = a(n, m[3]);
      }
      var p = '0123456789abcdef'.split('');
      return function (a) {
        var b = a;
        /[\x80-\xFF]/.test(b) && (b = unescape(encodeURI(b)));
        var c = b.length;
        a = [1732584193, -271733879, -1732584194, 271733878];
        var d;
        for (d = 64; d <= b.length; d += 64) {
          for (
            var e = b.substring(d - 64, d), n = [], r = void 0, r = 0;
            64 > r;
            r += 4
          )
            n[r >> 2] =
              e.charCodeAt(r) +
              (e.charCodeAt(r + 1) << 8) +
              (e.charCodeAt(r + 2) << 16) +
              (e.charCodeAt(r + 3) << 24);
          m(a, n);
        }
        b = b.substring(d - 64);
        e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (d = 0; d < b.length; d++)
          e[d >> 2] |= b.charCodeAt(d) << (d % 4 << 3);
        e[d >> 2] |= 128 << (d % 4 << 3);
        if (55 < d) for (m(a, e), d = 0; 16 > d; d++) e[d] = 0;
        e[14] = 8 * c;
        m(a, e);
        for (b = 0; b < a.length; b++) {
          c = a;
          d = b;
          e = a[b];
          n = '';
          for (r = 0; 4 > r; r++)
            n += p[(e >> (8 * r + 4)) & 15] + p[(e >> (8 * r)) & 15];
          c[d] = n;
        }
        return a.join('');
      };
    })();
    f.prototype._init_floc_trial = function () {
      var a = window.document.createElement('meta');
      a.httpEquiv = 'origin-trial';
      a.content =
        'A41wt2Lsq30A9Ox/WehogvJckPI4aY9RoSxhb8FMtVnqaUle1AtI6Yf7Wk+7+Wm0AfDDOkMX+Wn6wnDpBWYgWwYAAAB8eyJvcmlnaW4iOiJodHRwczovL2Fkcm9sbC5jb206NDQzIiwiZmVhdHVyZSI6IkludGVyZXN0Q29ob3J0QVBJIiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==';
      this._head().appendChild(a);
    };
    f.prototype._log_floc_cohort = function () {
      var a = this._global('adroll_seg_eid') || '';
      if ('function' === typeof window.document.interestCohort) {
        var b = this;
        window.document
          .interestCohort()
          .then(function (c) {
            if (c) {
              var d = c.id;
              c = c.version;
              d && c && b._log_pex_event('floc', d, c, { seg: a }, null);
            }
          })
          ['catch'](function (a) {
            b.log('floc-error:' + a);
          });
      }
    };
    f.prototype._log_pex_event = function (a, b, c, d, e) {
      a = encodeURIComponent(a);
      b = encodeURIComponent(b);
      c = encodeURIComponent(c);
      var m = this._ensure_global('adroll_adv_id', ''),
        p = this._ensure_global('adroll_pix_id', '');
      e = e ? '&ex=' + encodeURIComponent(this.jsonStringify(e)) : '';
      var q = '';
      'object' === typeof d && (q = '&' + this.object_to_querystring(d));
      d = this._srv(
        '/pex/' +
          m +
          '/' +
          p +
          '?ev=' +
          a +
          '&es=' +
          b +
          '&esv=' +
          c +
          '&pv=' +
          this.pv +
          q +
          e
      );
      'function' === typeof navigator.sendBeacon
        ? navigator.sendBeacon(d)
        : this.imgRequest(d);
    };
    f.prototype._pixel_timing = function (a, b, c) {
      function d() {
        q.session_time += new Date().getTime() - (c || 0);
      }
      function e(a, b) {
        var d = b;
        18e5 < q.session_time &&
          ((d = 'newsession'),
          (q.preconsent_sent = !1),
          (q.prepixel_sent = !1));
        b = d;
        if (
          !(
            ('preconsent' === b && q.preconsent_sent) ||
            ('prepixel' === b && q.prepixel_sent)
          )
        ) {
          d = b;
          q.preconsent_sent = q.preconsent_sent || 'preconsent' === d;
          q.prepixel_sent = q.prepixel_sent || 'prepixel' === d;
          'newsession' === b &&
            ((a = 0),
            (c = l = new Date().getTime()),
            (q.pixelstart = l),
            (q.session_time = 0));
          d = ['f=' + a];
          'undefined' !== typeof b && d.push('ft=' + b);
          var e = q._global('adct');
          e && 'undefined' !== e && d.push('adct=' + window.escape(e));
          d = encodeURIComponent(d.join('&'));
          d = q._srv(
            '/onp/' +
              q._global('adroll_adv_id') +
              '/' +
              q._global('adroll_pix_id') +
              '?ev=' +
              d
          );
          'function' === typeof navigator.sendBeacon
            ? navigator.sendBeacon(d)
            : q.imgRequest(d);
        }
      }
      function m(a, b) {
        window.setTimeout(function () {
          !b ||
            (!0 !== window.__adroll_consent &&
              !0 !== (window.__adroll_consent || {}).a) ||
            (d(),
            e(q.session_time, 'preconsent'),
            'object' === typeof window.performance &&
              e(
                q.pixelstart - window.performance.timing.domInteractive,
                'prepixel'
              ));
        }, 500 * Math.random());
      }
      function p(a) {
        if ('visible' === window.document.visibilityState || a.type in g)
          q._pixel_timing(!1, !1, l);
        else if ('hidden' === window.document.visibilityState || a.type in h)
          !0 === window.__adroll_consent ||
          !0 === (window.__adroll_consent || {}).a
            ? (d(), e(q.session_time))
            : d();
      }
      var q = this,
        l = new Date().getTime(),
        g = ['focus', 'focusin', 'pageshow'],
        h = ['blur', 'focusout', 'pagehide'];
      0 === q.pixelstart && (q.pixelstart = l);
      'function' === typeof window.__tcfapi &&
        !0 === b &&
        ((b = !1), window.__tcfapi('addEventListener', 2, m));
      !0 !== window.__adroll_consent && !0 !== (window.__adroll_consent || {}).a
        ? window.setTimeout(function () {
            q._pixel_timing(!0, b, l);
          }, 500)
        : !0 === a &&
          ('hidden' in window.document
            ? window.document.addEventListener('visibilitychange', p)
            : 'mozHidden' in window.document
            ? window.document.addEventListener('mozvisibilitychange', p)
            : 'webkitHidden' in window.document
            ? window.document.addEventListener('webkitvisibilitychange', p)
            : 'msHidden' in window.document
            ? window.document.addEventListener('msvisibilitychange', p)
            : 'onfocusin' in window.document
            ? (window.document.addEventListener('focusin', p),
              window.document.addEventListener('focusout', p))
            : (window.document.addEventListener('pageshow', p),
              window.document.addEventListener('pagehide', p),
              window.document.addEventListener('focus', p),
              window.document.addEventListener('blur', p)));
    };
    f.prototype._gurl = function () {
      var a = window.location;
      return this.normalize_url(a.pathname + a.search);
    };
    f.prototype.get_dummy_product_for_facebook = function (a) {
      return {
        product_id: 'adroll_dummy_product',
        product_group: a,
        product_action: null,
        product_category: null,
      };
    };
    f.prototype.facebook_dummy_product_enabled = function () {
      return !0;
    };
    f.prototype.extract_pid = function (a, b, c) {
      function d(a) {
        return a ? ((a = new RegExp(a, 'gi')), !!a.exec(l)) : null;
      }
      a || (a = {});
      var e = null,
        m = null,
        p = null,
        q = null,
        l = this._gurl(),
        g = this.get_external_data();
      g &&
        ((m = g.product_id),
        (e = g.product_group),
        (p = g.product_action),
        (q = g.adroll_product_category_id));
      if (
        !m &&
        a.regexp_group &&
        !('string' === a.regexp_group && a.regexp_group instanceof String) &&
        'html' === a.regexp_group.scheme
      ) {
        if (d(a.blacklist_regexp) || !0 !== d(a.regexp)) return '';
        m = this.get_product_id_from_dom(a.regexp_group);
      } else if (!m) {
        if (d(a.blacklist_regexp)) return '';
        m = this.get_product_id_from_url(l, a.regexp, a.regexp_group);
      }
      e ||
      !a.product_group_group ||
      ('string' === a.product_group_group &&
        a.product_group_group instanceof String) ||
      'html' !== a.product_group_group.scheme
        ? e ||
          (a.product_group_regexp &&
            (e = this.get_product_id_from_url(
              l,
              a.product_group_regexp,
              a.product_group_group
            )))
        : (e = this.get_product_id_from_dom(a.product_group_group));
      if (m)
        a = {
          product_id: m,
          product_group: e,
          product_action: p,
          product_category: q,
        };
      else if (this.facebook_dummy_product_enabled() && 'facebook' === b)
        a = this.get_dummy_product_for_facebook(e);
      else return null;
      c && c(a);
      return a;
    };
    f.prototype.get_pid = function (a) {
      this.extract_pid(
        a,
        'adroll',
        function (a) {
          if (a) {
            var c = a.product_id,
              d = a.product_group,
              e = a.product_action,
              m = a.product_category;
            a = [];
            var p;
            if (c instanceof Array)
              for (p = 0; p < c.length; p++)
                a.push([
                  'adroll_product_id',
                  this.normalize_var((c[p] + '').toLowerCase(), !0),
                ]);
            else
              a.push([
                'adroll_product_id',
                this.normalize_var((c + '').toLowerCase(), !0),
              ]);
            if (m instanceof Array)
              for (p = 0; p < m.length; p++)
                a.push([
                  'adroll_product_category_id',
                  this.normalize_var((m[p] + '').toLowerCase(), !0),
                ]);
            else
              m &&
                a.push([
                  'adroll_product_category_id',
                  this.normalize_var((m + '').toLowerCase(), !0),
                ]);
            d &&
              a.push([
                'adroll_product_group',
                this.normalize_var((d + '').toLowerCase(), !0),
              ]);
            e &&
              a.push([
                'adroll_product_action',
                this.normalize_var((e + '').toLowerCase(), !0),
              ]);
            (c = this.external_data_to_qs(!0)) && a.push([c]);
            c = this._srv(
              this.buildurl('/p/' + this._global('adroll_adv_id') + '/', a)
            );
            d = window.document.createElement('img');
            d.src = c;
            d.height = d.width = 1;
            d.border = 0;
            d.setAttribute('alt', '');
            this._head().appendChild(d);
          }
        }.bind(this)
      );
    };
    f.prototype.get_product_id_from_dom = function (a) {
      var b = null,
        c;
      a.path &&
        (window.jQuery
          ? ((c = window.jQuery(a.path)),
            c.length &&
              ((c = c.eq(0)),
              (b = 'text' === a.attribute ? c.text() : c.attr(a.attribute))))
          : window.Prototype && window.$$
          ? ((c = window.$$(a.path)),
            c.length &&
              ((c = c[0]),
              (b =
                'text' === a.attribute
                  ? c.innerText && !window.opera
                    ? c.innerText
                    : c.innerHTML
                        .stripScripts()
                        .unescapeHTML()
                        .replace(/[\n\r\s]+/g, ' ')
                  : c.readAttribute(a.attribute))))
          : window.YUI
          ? ((c = window.YUI().use('node')),
            c.one &&
              ((c = c.one(a.path)),
              (b = null),
              c &&
                (b =
                  'text' === a.attribute
                    ? c.get('text')
                    : c.getAttribute(a.attribute))))
          : window.$$ &&
            ((c = window.$$(a.path)),
            c.length &&
              ((c = c[0]),
              (b =
                'text' === a.attribute
                  ? c.get('text')
                  : c.getProperty(a.attribute)))));
      if (
        b &&
        ((b = b.replace(/^\s\s*/, '').replace(/\s\s*$/, '')),
        a.regular_expression && a.regular_expression_replace)
      )
        if (
          ((c = new RegExp(a.regular_expression, 'gi')),
          (b = c.exec(b)),
          null !== b)
        ) {
          a = a.regular_expression_replace;
          for (c = 0; c < b.length; c++)
            a = a.replace(new RegExp('\\\\' + c, 'gi'), b[c] || '');
          b = a;
        } else b = '';
      return b;
    };
    f.prototype.get_product_id_from_url = function (a, b, c) {
      var d = null;
      try {
        d = parseInt(c);
      } catch (e) {}
      return null !== d &&
        !isNaN(d) &&
        b &&
        ((a = new RegExp(b, 'gi').exec(a)), null !== a && d in a)
        ? a[d]
        : null;
    };
    f.prototype.store_adroll_loaded_record = function (a, b) {
      window.adroll_loaded = (window.adroll_loaded || []).concat({
        version: this.version,
        ts: new Date().getTime(),
        adroll_adv_id: a,
        adroll_pix_id: b,
      });
      if (this.__nrpa_event_handler)
        try {
          this.__nrpa_event_handler({ adroll_loaded: window.adroll_loaded });
        } catch (c) {}
    };
    f.prototype.render_pixel_code = function (a, b) {
      var c = this;
      c._has_global('adroll_tpc')
        ? c.render_pixel_code_exec(a, b)
        : c.load_adroll_tpc(function () {
            c.render_pixel_code_exec(a, b);
          });
    };
    f.prototype.render_pixel_code_exec = function (a, b) {
      this.expire_old();
      var c = this.get_keywords();
      this.addLoadEvent(
        (function (d) {
          return function () {
            var e = [];
            try {
              200 >= window.document.referrer.length &&
                e.push(
                  'adroll_s_ref=' + window.escape(window.document.referrer)
                );
            } catch (h) {}
            try {
              e.push('keyw=' + window.escape(c));
            } catch (h) {}
            try {
              d._has_global('adroll_segments') &&
                e.push(
                  'name=' +
                    window.escape(d._global('adroll_segments').toLowerCase())
                );
            } catch (h) {}
            try {
              d._has_global('adroll_p') &&
                e.push('adroll_p=' + window.escape(d._global('adroll_p')));
            } catch (h) {}
            try {
              d._has_global('adroll_u') &&
                e.push('adroll_u=' + window.escape(d._global('adroll_u')));
            } catch (h) {}
            try {
              d._has_global('adroll_m') &&
                d._has_global('adroll_m_type') &&
                (e.push('adroll_m=' + window.escape(d._global('adroll_m'))),
                e.push(
                  'adroll_m_type=' + window.escape(d._global('adroll_m_type'))
                ));
            } catch (h) {}
            try {
              var m = d.get_conversion_value();
              m.conv_value && e.push('conv_value=' + m.conv_value);
              m.currency && e.push('adroll_currency=' + m.currency);
            } catch (h) {}
            try {
              if (d._has_user_identifier()) {
                var p = d._global('adroll_user_identifier'),
                  p = p.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
                e.push('user_identifier=' + window.encodeURIComponent(p));
              }
            } catch (h) {}
            try {
              var q = d._global('adct'),
                l = d.extract_query_param(
                  'adct',
                  window.location.search.substr(1)
                );
              l &&
                'undefined' !== l &&
                q !== l &&
                (d._set_global('adct', l), e.push('adct=' + window.escape(l)));
            } catch (h) {}
            try {
              d._has_global('adroll_shop_id') &&
                ((m = {}),
                d._has_global('adroll_custom_data')
                  ? (m = d._global('adroll_custom_data'))
                  : d._set_global('adroll_custom_data', m),
                'undefined' === typeof m.adroll_shop_id &&
                  (m.adroll_shop_id = d._global('adroll_shop_id')));
              var g = d.external_data_to_qs(!0);
              g && e.push(g);
            } catch (h) {}
            e = d.get_base_url('', a, b, null, '', e);
            d.add_script_element(d._srv('/pixel' + e), { async: 'true' });
            d.is_ipv6() && d.imgRequest(d._srv('/px4' + e, !0));
          };
        })(this)
      );
      this.addLoadEvent(
        (function (a) {
          return function () {
            var b = a._global('adroll');
            if (b && 'object' === typeof b) {
              b.identify = function () {
                return a.identify.apply(a, arguments);
              };
              b.identify_email = function () {
                return a.identify_email.apply(a, arguments);
              };
              b.track = function () {
                return a.track.apply(a, arguments);
              };
              for (var c, p, q = 0; q < b.length; q++)
                (c = b[q][0]),
                  (p = b[q][1]),
                  'identify' === c
                    ? a.identify.apply(a, p)
                    : 'identify_email' === c
                    ? a.identify_email.apply(a, p)
                    : 'track' === c && a.track.apply(a, p);
            }
          };
        })(this)
      );
    };
    f.prototype.render_ad_code = function (a, b) {
      b = this._is_defined(b) ? b : null;
      if (!this._is_defined(this._r[a]) || b) {
        var c = [
          'width=' + this._global('adroll_width'),
          'height=' + this._global('adroll_height'),
          'x=0',
          'y=0',
        ];
        if (b) {
          var d = this.macro_values(),
            e = this.macro_url_params(d, !1, !1, !1, !1);
          c.push(e);
          this.render_win_notification(d);
          this.render_extra_script(d);
        }
        this.expire_old();
        c = this._srv('/impression?' + c.join('&'));
        window.document.write('<script src="' + c + '">\x3c/script>');
        this._nad += 1;
        this._r[a] = 1;
      }
    };
    f.prototype.render_win_notification = function (a) {
      if (a.adroll_cpm_macro && a.adroll_win_notif) {
        var b =
          (this._secure() ? 'https://' : 'http://') +
          a.adroll_win_notif +
          a.adroll_cpm_macro;
        a.adroll_ad_payload &&
          ((a.adroll_rtb_dict && a.adroll_rtb_dict.waap) ||
            (/waap=1&/.test(a.adroll_win_notif) &&
              !this._is_defined(a.adroll_rtb_dict))) &&
          (b += '&ad_payload=' + a.adroll_ad_payload);
        this.imgRequest(b);
      }
    };
    f.prototype.render_extra_script = function (a) {
      a.adroll_rtb_dict &&
        a.adroll_rtb_dict.extra_script_src &&
        this.add_script_element(a.adroll_rtb_dict.extra_script_src, {});
    };
    f.prototype.add_script_element = function (a, b) {
      var c = window.document.createElement('script'),
        d = this._secure() ? 'https://' : 'http://';
      a.match(/^(\w+:)*\/\//) && (d = '');
      for (var e in b)
        b.hasOwnProperty(e) && 'src' !== e && c.setAttribute(e, b[e]);
      c.type = 'text/javascript';
      c.src = d + a;
      this._head().appendChild(c);
      return c;
    };
    f.prototype.get_base_url = function (a, b, c, d, e, m) {
      var p = a.split('?');
      a = p[0] + '/' + b + '/' + c + (d ? '/' + d : '') + (e ? '/' + e : '');
      var q = '?';
      p[1] && ((a += '?' + p[1]), (q = '&'));
      var p = q + 'no-cookies=1',
        l = '';
      this.cookieEnabled(!1)
        ? ((l = window.escape(this.get_eids())), (a += q + 'cookie=' + l))
        : (a += p);
      m && (a += '&' + m.join('&'));
      a = this.add_tpc_to_url(a);
      if (a.length > this._url) {
        try {
          this.del(this.__adc);
        } catch (g) {}
        if (a.length - l.length > this._url) return a;
        this.log('Url was too big, shrinking it');
        return this.get_url(b, c, d, e, m);
      }
      this.log('Generated url: ' + a);
      return a;
    };
    f.prototype.get_url = function (a, b, c, d, e) {
      var m = c ? this._srv('/c') : this._srv('/r');
      return this.get_base_url(m, a, b, c, d, e);
    };
    f.prototype.get_eids = function () {
      if (this._global('adroll_ext_network') || this._global('adroll_optout'))
        return '';
      try {
        for (
          var a = this.get(this.__adc),
            b = a ? a.split('|') : '',
            a = [],
            c = b.length - 1;
          0 <= c;
          c--
        )
          if (b[c]) {
            var d = b[c].split(':');
            a.push([d[0], d[2]].join(':'));
          }
        return a.join('|');
      } catch (e) {
        return this.del(this.__adc), '';
      }
    };
    f.prototype.sha256 = function (a) {
      function b(a, b) {
        return (a >>> b) | (a << (32 - b));
      }
      var c = window.unescape(window.encodeURIComponent(a)),
        d = Math.pow(2, 32),
        e,
        m = '',
        p = [],
        q = 8 * c.length,
        l = [],
        g = [];
      e = 0;
      for (var h = {}, k = 2; 64 > e; k++)
        if (!h[k]) {
          for (a = 0; 313 > a; a += k) h[a] = k;
          l[e] = (Math.pow(k, 0.5) * d) | 0;
          g[e++] = (Math.pow(k, 1 / 3) * d) | 0;
        }
      for (c += '\u0080'; 0 !== (c.length % 64) - 56; ) c += '\x00';
      for (a = 0; a < c.length; a++) {
        e = c.charCodeAt(a);
        if (e >> 8) return null;
        p[a >> 2] |= e << (((3 - a) % 4) * 8);
      }
      p[p.length] = (q / d) | 0;
      p[p.length] = q;
      for (e = 0; e < p.length; ) {
        c = p.slice(e, (e += 16));
        d = l;
        l = l.slice(0, 8);
        for (a = 0; 64 > a; a++) {
          var h = c[a - 15],
            k = c[a - 2],
            q = l[0],
            n = l[4],
            h =
              l[7] +
              (b(n, 6) ^ b(n, 11) ^ b(n, 25)) +
              ((n & l[5]) ^ (~n & l[6])) +
              g[a] +
              (c[a] =
                16 > a
                  ? c[a]
                  : (c[a - 16] +
                      (b(h, 7) ^ b(h, 18) ^ (h >>> 3)) +
                      c[a - 7] +
                      (b(k, 17) ^ b(k, 19) ^ (k >>> 10))) |
                    0),
            q =
              (b(q, 2) ^ b(q, 13) ^ b(q, 22)) +
              ((q & l[1]) ^ (q & l[2]) ^ (l[1] & l[2])),
            l = [(h + q) | 0].concat(l);
          l[4] = (l[4] + h) | 0;
        }
        for (a = 0; 8 > a; a++) l[a] = (l[a] + d[a]) | 0;
      }
      for (a = 0; 8 > a; a++)
        for (e = 3; e + 1; e--)
          (p = (l[a] >> (8 * e)) & 255),
            (m += (16 > p ? 0 : '') + p.toString(16));
      return m;
    };
    f.prototype._container_is_secure = function (a) {
      return this._is_defined(a) ? a : this._secure();
    };
    f.prototype.ad_servers_url = function (a, b) {
      return (
        (this._container_is_secure(b) ? 'https://' : 'http://') +
        'd.adroll.com' +
        a
      );
    };
    f.prototype.ad_request_url = function (a, b, c, d, e) {
      var m = this._global('adroll_a_id'),
        p = this._global('adroll_s_id'),
        q = this._global('adroll_insertion_id');
      a = this.ad_servers_url('/r/' + p + '/' + m + '/' + q + '.' + a, e);
      return this.format_macros(a, b, c, d);
    };
    f.prototype.click_url = function (a, b) {
      var c = this.ad_servers_url(a ? '/click/lenient/' : '/click/', !1);
      return this.format_macros(c, !0, !0, b);
    };
    f.prototype.engage_url = function () {
      var a = this.ad_servers_url('/event/');
      return this.format_macros(a, !1, !0, !1);
    };
    f.prototype.cdn_url = function (a, b) {
      return (
        (this._container_is_secure(b)
          ? 'https://s.adroll.com'
          : 'http://a.adroll.com') + a
      );
    };
    f.prototype.ad_file_url = function (a, b) {
      var c = this._global('adroll_ad_filename');
      a = a ? c.split('.')[0] + a : c;
      c = '/a/' + c.substring(0, 3) + '/' + c.substring(3, 6) + '/' + a;
      return this.cdn_url(c, b);
    };
    f.prototype.roll_crawl_url = function () {
      return 'https://d.adroll.com/p';
    };
    f.prototype.is_lenient_click = function (a) {
      return (
        (a = a ? this.parseUri(a) : null) && this.includes(a.path, 'lenient')
      );
    };
    f.prototype.record_user = function (a) {
      var b =
          'adroll_conversion_value adroll_conversion_value_in_dollars adroll_segments adroll_email adroll_user_identifier adroll_currency'.split(
            ' '
          ),
        c,
        d;
      a = a || {};
      var e = { adroll_user_identifier: !0 };
      for (c = 0; c < b.length; c++) {
        try {
          this._unset_global(b[c]);
        } catch (m) {}
        if (b[c] in a) {
          b[c] in e
            ? this._set_global(b[c], window.escape(a[b[c]]))
            : 'adroll_email' !== b[c] && this._set_global(b[c], a[b[c]]);
          try {
            delete a[b[c]];
          } catch (m) {}
        }
      }
      try {
        this._unset_global('adroll_custom_data');
      } catch (m) {}
      for (d in a)
        if (a.hasOwnProperty(d)) {
          this._set_global('adroll_custom_data', a);
          break;
        }
      this.render_pixel_code(
        this._global('adroll_adv_id'),
        this._global('adroll_pix_id')
      );
    };
    f.prototype.record_adroll_email = function (a) {
      this._record_adroll_email(a, '/id');
    };
    f.prototype.record_adroll_private_email = function (a) {
      this._record_adroll_email(a, '/idp');
    };
    f.prototype._record_adroll_email = function (a, b) {
      if (this._has_email()) {
        var c = this._global('_adroll_email'),
          c = c.replace(/^\s+|\s+$/g, ''),
          d,
          e,
          m = c.toLowerCase(),
          p = this.is_email_valid(c);
        this.is_already_hashed(m)
          ? (d = m)
          : p && ((d = this.md5(m)), (e = this.sha256(m)));
        c = (b || '/id') + '/' + this._global('adroll_adv_id') + '/';
        d = { hashed_email: d, sha256_email: e };
        p && ((m = m.split('@')[1]), (d.email_domain = m));
        a && (d.idsource = a);
        c += this._reg_lpq('?epq', d);
        this.imgRequest(this._srv(c));
      }
    };
    f.prototype._send_plain_text_identifiers = function (a, b, c) {
      if ((a || b) && c) {
        c = { idsource: c };
        var d =
          (!1 === window.adroll_sendrolling_cross_device ? '/idp/' : '/id/') +
          this._global('adroll_adv_id') +
          '/';
        a &&
          ((a = a.replace(/^\s+|\s+$/g, '').toLowerCase()),
          (c.email = a),
          (c.hashed_email = this.md5(a)),
          (c.sha256_email = this.sha256(a)),
          (a = a.split('@')[1]),
          (c.email_domain = a));
        b && (c.user_identifier = b);
        d += this._reg_lpq('?epq', c);
        this.imgRequest(this._srv(d));
      }
    };
    f.prototype._has_email = function () {
      return this._has_global('_adroll_email');
    };
    f.prototype._has_user_identifier = function () {
      return (
        this._has_global('adroll_user_identifier') &&
        'example_user_id' !== this._global('adroll_user_identifier')
      );
    };
    f.prototype.is_already_hashed = function (a) {
      return /^[a-f0-9]{32}$/.test(a);
    };
    f.prototype.is_email_valid = function (a) {
      return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        a
      );
    };
    f.prototype.identify = function (a, b) {
      (a.email || a.userId) &&
        this._send_plain_text_identifiers(
          a.email,
          a.userId,
          b || 'adroll-identify'
        );
      a.email && this._set_global('_adroll_email', a.email);
      var c = this.copyObj(a, ['email', 'userId']);
      c &&
        ((c =
          '/uat/' +
          this._global('adroll_adv_id') +
          '/' +
          this._global('adroll_pix_id') +
          '/?user_attributes=' +
          window.encodeURIComponent(this.jsonStringify(c))),
        b && (c += '&idsource=' + b),
        this.imgRequest(this._srv(c)));
      this._queueAndCallback('identify', [a, b]);
    };
    f.prototype.identify_email = function (a) {
      var b = this;
      this.add_pixel_load_callback(function () {
        function c() {
          if (window.__adroll_idem0)
            window.__adroll_idem0(a, 'adroll-identify-email');
          else if (0 < d) {
            --d;
            for (
              var e = window.document.querySelectorAll('script'), m = 0;
              m < e.length;
              m++
            )
              if (e[m].src.match(/sendrolling/)) {
                window.setTimeout(c, 500);
                return;
              }
            b.identify({ email: a }, 'adroll-identify-email');
          }
        }
        var d = 3;
        c();
      });
    };
    f.prototype.track = function (a, b) {
      this._track_pxl_assistant(a, b);
      if (a) {
        var c =
            '/uev/' +
            this._global('adroll_adv_id') +
            '/' +
            this._global('adroll_pix_id') +
            '/?event_name=' +
            window.encodeURIComponent(a),
          d = this.copyObj(b);
        d &&
          (c +=
            '&event_attributes=' +
            window.encodeURIComponent(this.jsonStringify(d)));
        this.imgRequest(this._srv(c));
        this._queueAndCallback('track', [a, b]);
      }
    };
    f.prototype._reg_lpq = function (a, b) {
      var c,
        d,
        e = [],
        m = {},
        p = btoa(this.object_to_querystring(b));
      if (!p) return '';
      for (c = 65; 91 > c; c++) e.push(String.fromCharCode(c));
      p = p.split('');
      e.push('-', '_', '\t');
      p = p.reverse();
      e.splice(13, 0, '+', '/', '=');
      for (c = 0; c < e.length - 3; c++)
        (d = e.concat(e)[c + e.length / 2]),
          (m[e[c]] = d),
          (m[e[c].toLowerCase()] = d.toLowerCase());
      return (e = p
        .map(function (a) {
          return m[a] || a;
        })
        .join('')
        .trim())
        ? a + '=' + e
        : '';
    };
    f.prototype._registerCallback = function (a, b, c) {
      this.callbacks = this.callbacks || {};
      this.callbackNames = this.callbackNames || [];
      this.callbacks[a] = this.callbacks[a] || [];
      if (
        !('function' !== typeof b || -1 < this.callbackNames.indexOf(c)) &&
        (this.callbackNames.push(c),
        this.callbacks[a].push(b),
        this.callbackQueues &&
          this.callbackQueues[a] &&
          this.callbackQueues[a].length)
      )
        for (c = 0; c < this.callbackQueues[a].length; c++)
          b.apply(null, this.callbackQueues[a][c]);
    };
    f.prototype._queueAndCallback = function (a, b) {
      this.callbackQueues = this.callbackQueues || {};
      this.callbackQueues[a] = this.callbackQueues[a] || [];
      this.callbackQueues[a].push(b);
      if (this.callbacks && this.callbacks[a] && this.callbacks[a].length)
        for (var c = 0; c < this.callbacks[a].length; c++)
          this.callbacks[a][c].apply(null, b);
    };
    f.prototype.registerIdentifyCallback = function (a, b) {
      this._registerCallback('identify', a, b);
    };
    f.prototype.registerTrackCallback = function (a, b) {
      this._registerCallback('track', a, b);
    };
    f.prototype._track_pxl_assistant = function (a, b) {
      this._has_global('__adroll_pxl_assistant_track') ||
        this._set_global('__adroll_pxl_assistant_track', []);
      this._global('__adroll_pxl_assistant_track').push({
        eventName: a,
        eventAttrs: b,
      });
      if (this.__nrpa_event_handler)
        try {
          this.__nrpa_event_handler({
            track: this._global('__adroll_pxl_assistant_track'),
          });
        } catch (c) {}
    };
    f.prototype._is_defined = function (a) {
      return 'undefined' !== typeof a;
    };
    f.prototype.normalize_var = function (a, b) {
      if (!a) return '';
      a = a.toString().substr(0, this._kwl).replace(/,/gi, '.');
      b && (a = window.escape(a));
      return a;
    };
    f.prototype.get_keywords = function () {
      try {
        var a = window.document.referrer || '';
        if (!a) return '';
        var b = this.parseUri(a);
        return -1 !== b.host.indexOf('www.google.')
          ? b.queryKey.q.substring(0, this._kwl)
          : -1 !== b.host.indexOf('bing.com')
          ? b.queryKey.q.substring(0, this._kwl)
          : '';
      } catch (c) {
        return '';
      }
    };
    f.prototype.parseUri = function (a) {
      a =
        /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(
          a
        );
      for (
        var b = { queryKey: {} },
          c = 14,
          d =
            'source protocol authority userInfo user password host port relative path directory file query anchor'.split(
              ' '
            );
        c--;

      )
        b[d[c]] = a[c] || '';
      b[d[12]].replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (a, c, d) {
        c && (b.queryKey[c] = d);
      });
      return b;
    };
    f.prototype._secure = function () {
      return !0;
    };
    f.prototype._protocol = function () {
      return window.document.location.protocol;
    };
    f.prototype._native = function () {
      try {
        return 'http' !== this._protocol().slice(0, 4);
      } catch (a) {
        return !0;
      }
    };
    f.prototype.has_param_in_url = function (a, b) {
      var c = a.split('?');
      return 1 < c.length && -1 !== ('&' + c[1]).indexOf('&' + b + '=');
    };
    f.prototype._srv = function (a, b) {
      a = this._is_defined(a) ? a : '';
      var c = 'd.adroll.com';
      b && (c = 'ipv4.d.adroll.com');
      c = this.add_tpc_to_url('https://' + c + a);
      if (!this.has_param_in_url(c, 'arrfrr'))
        var d = this._get_arrfrr(),
          c = this.add_param_to_url(c, 'arrfrr=' + encodeURIComponent(d));
      this.has_param_in_url(c, 'pv') ||
        (c = this.add_param_to_url(c, 'pv=' + this.pv));
      return this.add_consent_to_url(this.add_fpc_to_url(c));
    };
    f.prototype._get_arrfrr = function (a) {
      a || (a = window.location.href);
      var b = a.split('#');
      a = b.shift();
      var b = b.length ? '#' + b.join('#') : null,
        c = a.split('?'),
        d = this;
      if (1 < c.length) {
        var e = c[1].replace(/([^&=]+)=([^&]+)/g, function (a, b, c) {
          return b.match(/cc_number|credit_card|card_number|cv[cv]_code/) ||
            d.is_luhn(unescape(c))
            ? b + '=NR_REDACT'
            : b + '=' + c;
        });
        c[1] !== e && (a = c[0] + '?' + e);
      }
      b && (a += b);
      return a;
    };
    f.prototype.is_luhn = function (a) {
      if ('string' !== typeof a) return !1;
      a = a.replace(/\D/g, '');
      if (13 > a.length || 19 < a.length) return !1;
      for (var b = 0, c = !1, d, e = a.length - 1; 0 <= e; e--)
        (d = parseInt(a.charAt(e), 10)),
          c && ((d *= 2), 9 < d && (d -= 9)),
          (b += d),
          (c = !c);
      return 0 === b % 10;
    };
    f.prototype._cdn = function (a) {
      a = this._is_defined(a) ? a : '';
      return 'https://s.adroll.com' + a;
    };
    f.prototype.log = function (a) {
      this._logs.push(a);
    };
    f.prototype.read_log = function (a) {
      return this._logs.join(a ? '\n' : '<br>\n');
    };
    f.prototype.normalize_url = function (a) {
      return a.toLowerCase();
    };
    f.prototype.imgRequest = function (a) {
      var b = new window.Image();
      b.src = this.add_tpc_to_url(a);
      b.setAttribute('width', '1');
      b.setAttribute('height', '1');
      b.setAttribute('border', '0');
      b.setAttribute('alt', '');
      return this._head().appendChild(b);
    };
    f.prototype.b64toint = function (a) {
      function b(a, c) {
        if (1 > c) return '';
        if (c % 2) return b(a, c - 1) + a;
        var d = b(a, c / 2);
        return d + d;
      }
      var c = '',
        d;
      a = a.replace('-', '+').replace('_', '/');
      for (var e = 0; e < a.length; e++)
        (d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
          .indexOf(a[e])
          .toString(2)),
          (c = c + b('0', 6 - d.length) + d);
      return parseInt(c, 2);
    };
    f.prototype.copyObj = function (a, b) {
      if (!a) return null;
      var c = {},
        d = 0,
        e;
      for (e in a)
        !a.hasOwnProperty(e) ||
          (b && -1 !== b.indexOf(e)) ||
          (d++, (c[e] = a[e]));
      return d ? c : null;
    };
    f.prototype.object_keys = function (a) {
      if (window.Object && window.Object.keys) return Object.keys(a);
      if ('object' === typeof a) return [];
      var b = [],
        c;
      for (c in a) a.hasOwnProperty(c) && b.push(c);
      return b;
    };
    f.prototype.wrapException = function (a) {
      return function (b) {
        try {
          return a(b);
        } catch (c) {}
      };
    };
    f.prototype.add_tpc_to_url = function (a) {
      var b = this._global('adroll_tpc');
      if (!a || !b) return a;
      var c = a.substr(a.indexOf('://') + 3).split('/')[0];
      return a.match(/[?&]adroll_tpc=/) && 'd.adroll.com' !== c
        ? a
        : this.add_param_to_url(a, 'adroll_tpc=' + encodeURIComponent(b));
    };
    f.prototype.add_fpc_to_url = function (a) {
      var b = this.get_first_party_cookie();
      if (!a || !b) return a;
      var c = this.parseUri(a);
      return c.queryKey.adroll_fpc ||
        ('d.adroll.com' !== c.host &&
          'ipv4.d.adroll.com' !== c.host &&
          'd.adroll.com' !== c.host + ':' + c.port &&
          'ipv4.d.adroll.com' !== c.host + ':' + c.port)
        ? a
        : this.add_param_to_url(a, 'adroll_fpc=' + encodeURIComponent(b));
    };
    f.prototype.add_consent_to_url = function (a) {
      if (!a) return a;
      if (this.has_param_in_url(a, '_arc')) return a;
      var b = this.get_first_party_consent();
      if (!b || !b.arconsent) return a;
      var c = a.match(/^\w+:\/\/([^\/]+)/);
      return c && 'd.adroll.com' !== c[1] && 'ipv4.d.adroll.com' !== c[1]
        ? a
        : this.add_param_to_url(a, '_arc=' + encodeURIComponent(b.arconsent));
    };
    f.prototype.getSafariVersion = function () {
      var a =
        /^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[^ ]+ \(KHTML, like Gecko\) Version\/([^ ]+)( Mobile\/[^ ]+)? Safari\/[^ ]+$/i.exec(
          navigator.userAgent
        );
      return a ? a[1] : null;
    };
    f.prototype.set_tpc = function (a, b) {
      a &&
        b &&
        this._set_global(
          'adroll_tpc',
          encodeURIComponent(a) + '=' + encodeURIComponent(b)
        );
    };
    f.prototype.tpc_callback = function (a) {
      var b = window.adroll_tpc_callback,
        c = this;
      if (!a) return (window.adroll_tpc_callback = a), b;
      window.adroll_tpc_callback = function () {
        if (b)
          try {
            b.call(c);
          } catch (d) {
            c.log('tpc callback failed: ' + d);
          }
        try {
          a.call(c);
        } catch (d) {
          c.log('tpc callback failed: ' + d);
        }
      };
      return null;
    };
    f.prototype.call_next_tpc = function () {
      var a = this.tpc_callback();
      window.adroll_lex33_called
        ? a && a.call(this)
        : ((window.adroll_lex33_called = 1), this._call_33across(a));
    };
    f.prototype.extract_query_param = function (a, b) {
      for (var c = b.split('&'), d = 0; d < c.length; d++) {
        var e = c[d].split('=');
        if (decodeURIComponent(e[0]) === a) return decodeURIComponent(e[1]);
      }
      return null;
    };
    f.prototype.get_adroll_sid = function () {
      var a = this.get_consent_params();
      return a && (a = this.extract_query_param('_s', a))
        ? a
        : this._global('adroll_sid');
    };
    f.prototype.load_adroll_tpc = function (a) {
      this.tpc_callback(a);
      if (this._consent_checked) return this.set_consent();
      this._consent_checked = !0;
      this.call_consent_check();
    };
    f.prototype.get_tpc_decode_timeout = function () {
      return 1500;
    };
    f.prototype.init_pixchk = function () {
      this.if_under_experiment_js(
        'pixchk',
        function () {
          window.addEventListener('message', this.pixchk_handler, !1);
        },
        function () {},
        1e3
      );
    };
    f.prototype.pixchk_handler = function (a) {
      if (a.origin.match(/^https?:\/\/[^\/:]*\.adroll\.com\b/))
        try {
          var b = JSON.parse(a.data);
          'pixchk' === b.cmd &&
            a.source.postMessage(
              JSON.stringify({
                cmd: 'pixrpl',
                adv_id: window.adroll_adv_id,
                pix_id: window.adroll_pix_id,
                token: b.token,
              }),
              '*'
            );
        } catch (c) {}
    };
    f.prototype.load_pixel_assistant = function () {
      if (!window.document.getElementById('adroll_nrpa_sdk')) {
        var a = (window.location.hash || '').match(
            'nrpa=([A-Z0-7]+)8([A-F0-9]+Z)'
          ),
          b = Math.floor(new Date().getTime() / 1e3) - 3600;
        (window.sessionStorage.getItem('adroll_nrpa_sdk') ||
          (a && a[1] === window.adroll_adv_id && !(parseInt(a[2], 16) < b))) &&
          this.add_script_element('https://s.adroll.com/j/nrpa.js', {
            id: 'adroll_nrpa_sdk',
          });
      }
    };
    f.prototype.set_suspended = function () {
      this._set_global('__adroll_data_suspended', !0);
    };
    f.prototype.is_suspended = function () {
      return this._has_global('__adroll_data_suspended');
    };
    f.prototype.object_to_querystring = function (a) {
      var b = null;
      if (
        'object' === typeof a &&
        ('function' === typeof window.URLSearchParams &&
          ((b = new window.URLSearchParams(a).toString()),
          '[object URLSearchParams]' === b && (b = null)),
        null === b)
      ) {
        var b = '',
          c;
        for (c in a)
          a.hasOwnProperty(c) &&
            (b =
              b + '&' + encodeURIComponent(c) + '=' + encodeURIComponent(a[c]));
        b = b.substr(1);
      }
      return b;
    };
    f.prototype._get_lex_timeout = function () {
      return 1e3;
    };
    f.prototype.is_ipv6 = function () {
      return (this._global('__adroll_consent_data') || {}).isipv6;
    };
    f.prototype._call_33across = function (a) {
      function b() {
        a && a.call(c);
      }
      var c = this;
      if (!0 === this._ensure_global('__adroll_consent_is_gdpr', null)) b();
      else {
        var d = (this._global('__adroll_consent_data') || {}).ipgeo || {},
          e = (d.country_code || '').toLowerCase(),
          d = (d.region_name || '').toLowerCase();
        'us' !== e || 'california' === d
          ? b()
          : -1 === navigator.userAgent.toLowerCase().indexOf('safari/')
          ? b()
          : ((e = c._ensure_global('adroll_adv_id', '')),
            (d = c._ensure_global('adroll_pix_id', '')),
            (e = c._srv('/lex/' + e + '/' + d + '?id=${PUBTOK}&pv=' + c.pv)),
            (e =
              'https://lex.33across.com/ps/v1/pubtoken/?pid=115&event=rtg&us_privacy=&rnd=<RANDOM>&ru=<URL>'
                .replace('<RANDOM>', c.pv)
                .replace('<URL>', encodeURIComponent(e))),
            (window.adroll_lex_cb = a),
            (window.adroll_lex_to = window.setTimeout(function () {
              window.adroll_lex_to = null;
              window.adroll_lex_cb = null;
              b();
            }, c._get_lex_timeout())),
            c.add_script_element(e));
      }
    };
    f.prototype.set_lex_id = function (a) {
      window.adroll_lex_to &&
        (window.clearTimeout(window.adroll_lex_to),
        (window.adroll_lex_to = null));
      this.set_tpc('lx3', a);
      a = window.adroll_lex_cb;
      window.adroll_lex_cb = null;
      a && a.call(this);
    };
    f.prototype._load_black_crow = function () {
      var a = this;
      if (!0 !== this._ensure_global('__adroll_consent_is_gdpr', null)) {
        var b = (this._global('__adroll_consent_data') || {}).ipgeo || {},
          c = (b.country_code || '').toLowerCase(),
          b = (b.region_name || '').toLowerCase();
        'us' === c &&
          'california' !== b &&
          this.if_under_experiment_js('blackcrow', function () {
            window.blackcrow = window.blackcrow || [];
            window.blackcrow.push({
              app_name: 'audience',
              bind: 'scores_update',
              callback: function (b) {
                a._log_pex_event('blackcrow', 'audience', 'scores_update', '', {
                  scores: b,
                });
              },
            });
            var b = a._ensure_global('adroll_adv_id', 'adroll');
            this.add_script_element(
              'https://init.blackcrow.ai/js/core/<ADV_EID>.js'.replace(
                '<ADV_EID>',
                b
              )
            );
          });
      }
    };
    var t =
        'SPTMCKQ7D5FL5MJTLABTVU U4ZFS2QH4VB65A54O43AEQ X7AGHV4DPFEGRDGZEXB4UZ 5DEKGEZXIZFGBAVTF7IHV4 ZMTHE43EC5E3PIT3ZKY7M7 LKQZXD5OZRHQFODVWGCQUL FYTZRQUEVVGS7EWCIOE64A BJ2LEY7ICBALDJY44RXUPT 4UHU5P4P3FESHLUMNBLWAU'.split(
          ' '
        ),
      u = window.adroll_adv_id;
    u && 0 <= t.indexOf(u)
      ? ((window.__adroll_v1_to_v2_shim = !0),
        (window.adroll_version = '2.0'),
        (function (a, b, c, d, e) {
          a.__adroll_loaded = !0;
          a.adroll = a.adroll || [];
          a.adroll.f = ['setProperties', 'identify', 'track'];
          var m = 'https://s.adroll.com/j/' + u + '/roundtrip.js';
          for (e = 0; e < a.adroll.f.length; e++)
            a.adroll[a.adroll.f[e]] =
              a.adroll[a.adroll.f[e]] ||
              (function (b) {
                return function () {
                  a.adroll.push([b, arguments]);
                };
              })(a.adroll.f[e]);
          c = b.createElement('script');
          d = b.getElementsByTagName('script')[0];
          c.async = 1;
          c.src = m;
          d.parentNode.insertBefore(c, d);
        })(window, document),
        window.adroll.track('pageView'))
      : (window.__adroll = window.__adroll || new f());
  })();
(function (a) {
  a.adroll_optout = !1;
  !0 === a.__adroll_v1_to_v2_shim
    ? (a.adroll_loaded = (a.adroll_loaded || []).concat({
        version: a.adroll_version,
        ts: new Date().getTime(),
        adroll_adv_id: a.adroll_adv_id,
        adroll_pix_id: a.adroll_pix_id,
      }))
    : (a.__adroll.store_adroll_loaded_record(a.adroll_adv_id, a.adroll_pix_id),
      '2.0' === a.adroll_version
        ? a.console &&
          a.console.debug &&
          a.console.debug('Both the NextRoll v1 and v2 pixel detected?')
        : ((a.adroll_ext_network = null),
          (a.adroll_callbacks =
            'undefined' === typeof a.adroll_callbacks
              ? []
              : a.adroll_callbacks),
          a.__adroll.render_pixel_code(a.adroll_adv_id, a.adroll_pix_id)));
})(window);
