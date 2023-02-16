(function (E) {
  var window = this;
  if (window.googletag && googletag.evalScripts) {
    googletag.evalScripts();
  }
  if (window.googletag && googletag._loaded_) return; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var m,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ba =
      'function' == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    ca = function (a) {
      a = [
        'object' == typeof globalThis && globalThis,
        a,
        'object' == typeof window && window,
        'object' == typeof self && self,
        'object' == typeof global && global,
      ];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error('Cannot find global object');
    },
    da = ca(this),
    ea = 'function' === typeof Symbol && 'symbol' === typeof Symbol('x'),
    q = {},
    fa = {},
    r = function (a, b) {
      var c = fa[b];
      if (null == c) return a[b];
      c = a[c];
      return void 0 !== c ? c : a[b];
    },
    t = function (a, b, c) {
      if (b)
        a: {
          var d = a.split('.');
          a = 1 === d.length;
          var e = d[0],
            f;
          !a && e in q ? (f = q) : (f = da);
          for (e = 0; e < d.length - 1; e++) {
            var g = d[e];
            if (!(g in f)) break a;
            f = f[g];
          }
          d = d[d.length - 1];
          c = ea && 'es6' === c ? f[d] : null;
          b = b(c);
          null != b &&
            (a
              ? ba(q, d, { configurable: !0, writable: !0, value: b })
              : b !== c &&
                (void 0 === fa[d] &&
                  ((a = (1e9 * Math.random()) >>> 0),
                  (fa[d] = ea ? da.Symbol(d) : '$jscp$' + a + '$' + d)),
                ba(f, fa[d], { configurable: !0, writable: !0, value: b })));
        }
    };
  t(
    'Symbol',
    function (a) {
      if (a) return a;
      var b = function (f, g) {
        this.h = f;
        ba(this, 'description', { configurable: !0, writable: !0, value: g });
      };
      b.prototype.toString = function () {
        return this.h;
      };
      var c = 'jscomp_symbol_' + ((1e9 * Math.random()) >>> 0) + '_',
        d = 0,
        e = function (f) {
          if (this instanceof e)
            throw new TypeError('Symbol is not a constructor');
          return new b(c + (f || '') + '_' + d++, f);
        };
      return e;
    },
    'es6'
  );
  t(
    'Symbol.iterator',
    function (a) {
      if (a) return a;
      a = (0, q.Symbol)('Symbol.iterator');
      for (
        var b =
            'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(
              ' '
            ),
          c = 0;
        c < b.length;
        c++
      ) {
        var d = da[b[c]];
        'function' === typeof d &&
          'function' != typeof d.prototype[a] &&
          ba(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
              return ha(aa(this));
            },
          });
      }
      return a;
    },
    'es6'
  );
  var ha = function (a) {
      a = { next: a };
      a[r(q.Symbol, 'iterator')] = function () {
        return this;
      };
      return a;
    },
    ja = function (a) {
      return (a.raw = a);
    },
    u = function (a) {
      var b =
        'undefined' != typeof q.Symbol &&
        r(q.Symbol, 'iterator') &&
        a[r(q.Symbol, 'iterator')];
      return b ? b.call(a) : { next: aa(a) };
    },
    v = function (a) {
      if (!(a instanceof Array)) {
        a = u(a);
        for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
        a = c;
      }
      return a;
    },
    w = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    ka =
      ea && 'function' == typeof r(Object, 'assign')
        ? r(Object, 'assign')
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d) for (var e in d) w(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  t(
    'Object.assign',
    function (a) {
      return a || ka;
    },
    'es6'
  );
  var la =
      'function' == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ma;
  if (ea && 'function' == typeof Object.setPrototypeOf)
    ma = Object.setPrototypeOf;
  else {
    var na;
    a: {
      var oa = { a: !0 },
        pa = {};
      try {
        pa.__proto__ = oa;
        na = pa.a;
        break a;
      } catch (a) {}
      na = !1;
    }
    ma = na
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
          return a;
        }
      : null;
  }
  var qa = ma,
    x = function (a, b) {
      a.prototype = la(b.prototype);
      a.prototype.constructor = a;
      if (qa) qa(a, b);
      else
        for (var c in b)
          if ('prototype' != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Ra = b.prototype;
    },
    ra = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
      return b;
    };
  t(
    'WeakMap',
    function (a) {
      function b() {}
      function c(g) {
        var h = typeof g;
        return ('object' === h && null !== g) || 'function' === h;
      }
      if (
        (function () {
          if (!a || !Object.seal) return !1;
          try {
            var g = Object.seal({}),
              h = Object.seal({}),
              k = new a([
                [g, 2],
                [h, 3],
              ]);
            if (2 != k.get(g) || 3 != k.get(h)) return !1;
            k.delete(g);
            k.set(h, 4);
            return !k.has(g) && 4 == k.get(h);
          } catch (l) {
            return !1;
          }
        })()
      )
        return a;
      var d = '$jscomp_hidden_' + Math.random(),
        e = 0,
        f = function (g) {
          this.h = (e += Math.random() + 1).toString();
          if (g) {
            g = u(g);
            for (var h; !(h = g.next()).done; )
              (h = h.value), this.set(h[0], h[1]);
          }
        };
      f.prototype.set = function (g, h) {
        if (!c(g)) throw Error('Invalid WeakMap key');
        if (!w(g, d)) {
          var k = new b();
          ba(g, d, { value: k });
        }
        if (!w(g, d)) throw Error('WeakMap key fail: ' + g);
        g[d][this.h] = h;
        return this;
      };
      f.prototype.get = function (g) {
        return c(g) && w(g, d) ? g[d][this.h] : void 0;
      };
      f.prototype.has = function (g) {
        return c(g) && w(g, d) && w(g[d], this.h);
      };
      f.prototype.delete = function (g) {
        return c(g) && w(g, d) && w(g[d], this.h) ? delete g[d][this.h] : !1;
      };
      return f;
    },
    'es6'
  );
  t(
    'Map',
    function (a) {
      if (
        (function () {
          if (
            !a ||
            'function' != typeof a ||
            !a.prototype.entries ||
            'function' != typeof Object.seal
          )
            return !1;
          try {
            var h = Object.seal({ x: 4 }),
              k = new a(u([[h, 's']]));
            if (
              's' != k.get(h) ||
              1 != k.size ||
              k.get({ x: 4 }) ||
              k.set({ x: 4 }, 't') != k ||
              2 != k.size
            )
              return !1;
            var l = k.entries(),
              n = l.next();
            if (n.done || n.value[0] != h || 's' != n.value[1]) return !1;
            n = l.next();
            return n.done ||
              4 != n.value[0].x ||
              't' != n.value[1] ||
              !l.next().done
              ? !1
              : !0;
          } catch (p) {
            return !1;
          }
        })()
      )
        return a;
      var b = new q.WeakMap(),
        c = function (h) {
          this.i = {};
          this.h = f();
          this.size = 0;
          if (h) {
            h = u(h);
            for (var k; !(k = h.next()).done; )
              (k = k.value), this.set(k[0], k[1]);
          }
        };
      c.prototype.set = function (h, k) {
        h = 0 === h ? 0 : h;
        var l = d(this, h);
        l.list || (l.list = this.i[l.id] = []);
        l.o
          ? (l.o.value = k)
          : ((l.o = {
              next: this.h,
              D: this.h.D,
              head: this.h,
              key: h,
              value: k,
            }),
            l.list.push(l.o),
            (this.h.D.next = l.o),
            (this.h.D = l.o),
            this.size++);
        return this;
      };
      c.prototype.delete = function (h) {
        h = d(this, h);
        return h.o && h.list
          ? (h.list.splice(h.index, 1),
            h.list.length || delete this.i[h.id],
            (h.o.D.next = h.o.next),
            (h.o.next.D = h.o.D),
            (h.o.head = null),
            this.size--,
            !0)
          : !1;
      };
      c.prototype.clear = function () {
        this.i = {};
        this.h = this.h.D = f();
        this.size = 0;
      };
      c.prototype.has = function (h) {
        return !!d(this, h).o;
      };
      c.prototype.get = function (h) {
        return (h = d(this, h).o) && h.value;
      };
      c.prototype.entries = function () {
        return e(this, function (h) {
          return [h.key, h.value];
        });
      };
      c.prototype.keys = function () {
        return e(this, function (h) {
          return h.key;
        });
      };
      c.prototype.values = function () {
        return e(this, function (h) {
          return h.value;
        });
      };
      c.prototype.forEach = function (h, k) {
        for (var l = this.entries(), n; !(n = l.next()).done; )
          (n = n.value), h.call(k, n[1], n[0], this);
      };
      c.prototype[r(q.Symbol, 'iterator')] = c.prototype.entries;
      var d = function (h, k) {
          var l = k && typeof k;
          'object' == l || 'function' == l
            ? b.has(k)
              ? (l = b.get(k))
              : ((l = '' + ++g), b.set(k, l))
            : (l = 'p_' + k);
          var n = h.i[l];
          if (n && w(h.i, l))
            for (h = 0; h < n.length; h++) {
              var p = n[h];
              if ((k !== k && p.key !== p.key) || k === p.key)
                return { id: l, list: n, index: h, o: p };
            }
          return { id: l, list: n, index: -1, o: void 0 };
        },
        e = function (h, k) {
          var l = h.h;
          return ha(function () {
            if (l) {
              for (; l.head != h.h; ) l = l.D;
              for (; l.next != l.head; )
                return (l = l.next), { done: !1, value: k(l) };
              l = null;
            }
            return { done: !0, value: void 0 };
          });
        },
        f = function () {
          var h = {};
          return (h.D = h.next = h.head = h);
        },
        g = 0;
      return c;
    },
    'es6'
  );
  var sa = function (a, b) {
    a instanceof String && (a += '');
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var f = c++;
            return { value: b(f, a[f]), done: !1 };
          }
          d = !0;
          return { done: !0, value: void 0 };
        },
      };
    e[r(q.Symbol, 'iterator')] = function () {
      return e;
    };
    return e;
  };
  t(
    'Array.prototype.keys',
    function (a) {
      return a
        ? a
        : function () {
            return sa(this, function (b) {
              return b;
            });
          };
    },
    'es6'
  );
  t(
    'Array.prototype.values',
    function (a) {
      return a
        ? a
        : function () {
            return sa(this, function (b, c) {
              return c;
            });
          };
    },
    'es8'
  );
  t(
    'Array.prototype.fill',
    function (a) {
      return a
        ? a
        : function (b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this;
          };
    },
    'es6'
  );
  var ta = function (a) {
    return a ? a : r(Array.prototype, 'fill');
  };
  t('Int8Array.prototype.fill', ta, 'es6');
  t('Uint8Array.prototype.fill', ta, 'es6');
  t('Uint8ClampedArray.prototype.fill', ta, 'es6');
  t('Int16Array.prototype.fill', ta, 'es6');
  t('Uint16Array.prototype.fill', ta, 'es6');
  t('Int32Array.prototype.fill', ta, 'es6');
  t('Uint32Array.prototype.fill', ta, 'es6');
  t('Float32Array.prototype.fill', ta, 'es6');
  t('Float64Array.prototype.fill', ta, 'es6');
  t(
    'Set',
    function (a) {
      if (
        (function () {
          if (
            !a ||
            'function' != typeof a ||
            !a.prototype.entries ||
            'function' != typeof Object.seal
          )
            return !1;
          try {
            var c = Object.seal({ x: 4 }),
              d = new a(u([c]));
            if (
              !d.has(c) ||
              1 != d.size ||
              d.add(c) != d ||
              1 != d.size ||
              d.add({ x: 4 }) != d ||
              2 != d.size
            )
              return !1;
            var e = d.entries(),
              f = e.next();
            if (f.done || f.value[0] != c || f.value[1] != c) return !1;
            f = e.next();
            return f.done ||
              f.value[0] == c ||
              4 != f.value[0].x ||
              f.value[1] != f.value[0]
              ? !1
              : e.next().done;
          } catch (g) {
            return !1;
          }
        })()
      )
        return a;
      var b = function (c) {
        this.h = new q.Map();
        if (c) {
          c = u(c);
          for (var d; !(d = c.next()).done; ) this.add(d.value);
        }
        this.size = this.h.size;
      };
      b.prototype.add = function (c) {
        c = 0 === c ? 0 : c;
        this.h.set(c, c);
        this.size = this.h.size;
        return this;
      };
      b.prototype.delete = function (c) {
        c = this.h.delete(c);
        this.size = this.h.size;
        return c;
      };
      b.prototype.clear = function () {
        this.h.clear();
        this.size = 0;
      };
      b.prototype.has = function (c) {
        return this.h.has(c);
      };
      b.prototype.entries = function () {
        return this.h.entries();
      };
      b.prototype.values = function () {
        return r(this.h, 'values').call(this.h);
      };
      b.prototype.keys = r(b.prototype, 'values');
      b.prototype[r(q.Symbol, 'iterator')] = r(b.prototype, 'values');
      b.prototype.forEach = function (c, d) {
        var e = this;
        this.h.forEach(function (f) {
          return c.call(d, f, f, e);
        });
      };
      return b;
    },
    'es6'
  );
  var va = function (a, b, c) {
    if (null == a)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          c +
          ' must not be null or undefined'
      );
    if (b instanceof RegExp)
      throw new TypeError(
        'First argument to String.prototype.' +
          c +
          ' must not be a regular expression'
      );
    return a + '';
  };
  t(
    'String.prototype.startsWith',
    function (a) {
      return a
        ? a
        : function (b, c) {
            var d = va(this, b, 'startsWith'),
              e = d.length,
              f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
            return g >= f;
          };
    },
    'es6'
  );
  t(
    'String.prototype.repeat',
    function (a) {
      return a
        ? a
        : function (b) {
            var c = va(this, null, 'repeat');
            if (0 > b || 1342177279 < b)
              throw new RangeError('Invalid count value');
            b |= 0;
            for (var d = ''; b; ) if ((b & 1 && (d += c), (b >>>= 1))) c += c;
            return d;
          };
    },
    'es6'
  );
  t(
    'globalThis',
    function (a) {
      return a || da;
    },
    'es_2020'
  );
  t(
    'String.prototype.padStart',
    function (a) {
      return a
        ? a
        : function (b, c) {
            var d = va(this, null, 'padStart');
            b -= d.length;
            c = void 0 !== c ? String(c) : ' ';
            return (
              (0 < b && c
                ? r(c, 'repeat')
                    .call(c, Math.ceil(b / c.length))
                    .substring(0, b)
                : '') + d
            );
          };
    },
    'es8'
  );
  t(
    'Object.is',
    function (a) {
      return a
        ? a
        : function (b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
          };
    },
    'es6'
  );
  t(
    'Array.prototype.includes',
    function (a) {
      return a
        ? a
        : function (b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
              var f = d[c];
              if (f === b || r(Object, 'is').call(Object, f, b)) return !0;
            }
            return !1;
          };
    },
    'es7'
  );
  t(
    'String.prototype.includes',
    function (a) {
      return a
        ? a
        : function (b, c) {
            return -1 !== va(this, b, 'includes').indexOf(b, c || 0);
          };
    },
    'es6'
  );
  var z = this || self,
    wa = function (a) {
      a = a.split('.');
      for (var b = z, c = 0; c < a.length; c++)
        if (((b = b[a[c]]), null == b)) return null;
      return b;
    },
    xa = function (a, b) {
      a = a.split('.');
      var c = z;
      a[0] in c ||
        'undefined' == typeof c.execScript ||
        c.execScript('var ' + a[0]);
      for (var d; a.length && (d = a.shift()); )
        a.length || void 0 === b
          ? c[d] && c[d] !== Object.prototype[d]
            ? (c = c[d])
            : (c = c[d] = {})
          : (c[d] = b);
    };
  var ya = function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    },
    Ga = function (a) {
      if (!za.test(a)) return a;
      -1 != a.indexOf('&') && (a = a.replace(Aa, '&amp;'));
      -1 != a.indexOf('<') && (a = a.replace(Ba, '&lt;'));
      -1 != a.indexOf('>') && (a = a.replace(Ca, '&gt;'));
      -1 != a.indexOf('"') && (a = a.replace(Da, '&quot;'));
      -1 != a.indexOf("'") && (a = a.replace(Ea, '&#39;'));
      -1 != a.indexOf('\x00') && (a = a.replace(Fa, '&#0;'));
      return a;
    },
    Aa = /&/g,
    Ba = /</g,
    Ca = />/g,
    Da = /"/g,
    Ea = /'/g,
    Fa = /\x00/g,
    za = /[\x00&<>"']/,
    Ia = function (a, b) {
      var c = 0;
      a = ya(String(a)).split('.');
      b = ya(String(b)).split('.');
      for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
        var f = a[e] || '',
          g = b[e] || '';
        do {
          f = /(\d*)(\D*)(.*)/.exec(f) || ['', '', '', ''];
          g = /(\d*)(\D*)(.*)/.exec(g) || ['', '', '', ''];
          if (0 == f[0].length && 0 == g[0].length) break;
          c =
            Ha(
              0 == f[1].length ? 0 : parseInt(f[1], 10),
              0 == g[1].length ? 0 : parseInt(g[1], 10)
            ) ||
            Ha(0 == f[2].length, 0 == g[2].length) ||
            Ha(f[2], g[2]);
          f = f[3];
          g = g[3];
        } while (0 == c);
      }
      return c;
    },
    Ha = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  function Ja() {
    var a = z.navigator;
    return a && (a = a.userAgent) ? a : '';
  }
  function A(a) {
    return -1 != Ja().indexOf(a);
  }
  var Ka = function (a, b) {
      Array.prototype.forEach.call(a, b, void 0);
    },
    La = function (a, b) {
      return Array.prototype.filter.call(a, b, void 0);
    },
    Ma = function (a, b) {
      return Array.prototype.map.call(a, b, void 0);
    };
  function Na(a, b) {
    a: {
      for (
        var c = a.length, d = 'string' === typeof a ? a.split('') : a, e = 0;
        e < c;
        e++
      )
        if (e in d && b.call(void 0, d[e], e, a)) {
          b = e;
          break a;
        }
      b = -1;
    }
    return 0 > b ? null : 'string' === typeof a ? a.charAt(b) : a[b];
  }
  function Oa(a, b) {
    a: {
      for (
        var c = 'string' === typeof a ? a.split('') : a, d = a.length - 1;
        0 <= d;
        d--
      )
        if (d in c && b.call(void 0, c[d], d, a)) {
          b = d;
          break a;
        }
      b = -1;
    }
    return 0 > b ? null : 'string' === typeof a ? a.charAt(b) : a[b];
  }
  function Qa(a, b) {
    return 0 <= Array.prototype.indexOf.call(a, b, void 0);
  }
  var Ra = function (a) {
    Ra[' '](a);
    return a;
  };
  Ra[' '] = function () {};
  var Sa = {},
    Ta = null,
    Va = function (a) {
      var b = [];
      Ua(a, function (c) {
        b.push(c);
      });
      return b;
    },
    Ua = function (a, b) {
      function c(k) {
        for (; d < a.length; ) {
          var l = a.charAt(d++),
            n = Ta[l];
          if (null != n) return n;
          if (!/^[\s\xa0]*$/.test(l))
            throw Error('Unknown base64 encoding at char: ' + l);
        }
        return k;
      }
      Wa();
      for (var d = 0; ; ) {
        var e = c(-1),
          f = c(0),
          g = c(64),
          h = c(64);
        if (64 === h && -1 === e) break;
        b((e << 2) | (f >> 4));
        64 != g &&
          (b(((f << 4) & 240) | (g >> 2)), 64 != h && b(((g << 6) & 192) | h));
      }
    },
    Wa = function () {
      if (!Ta) {
        Ta = {};
        for (
          var a =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
                ''
              ),
            b = ['+/=', '+/', '-_=', '-_.', '-_'],
            c = 0;
          5 > c;
          c++
        ) {
          var d = a.concat(b[c].split(''));
          Sa[c] = d;
          for (var e = 0; e < d.length; e++) {
            var f = d[e];
            void 0 === Ta[f] && (Ta[f] = e);
          }
        }
      }
    };
  var Xa = 'undefined' !== typeof Uint8Array,
    Ya = !(A('Trident') || A('MSIE')) && 'function' === typeof z.btoa;
  var B =
    'function' === typeof q.Symbol && 'symbol' === typeof (0, q.Symbol)()
      ? (0, q.Symbol)()
      : void 0;
  function Za(a, b) {
    if (B) return (a[B] |= b);
    if (void 0 !== a.C) return (a.C |= b);
    Object.defineProperties(a, {
      C: { value: b, configurable: !0, writable: !0, enumerable: !1 },
    });
    return b;
  }
  function $a(a, b) {
    var c = C(a);
    (c & b) !== b &&
      (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), D(a, c | b));
    return a;
  }
  function C(a) {
    var b;
    B ? (b = a[B]) : (b = a.C);
    return null == b ? 0 : b;
  }
  function D(a, b) {
    B
      ? (a[B] = b)
      : void 0 !== a.C
      ? (a.C = b)
      : Object.defineProperties(a, {
          C: { value: b, configurable: !0, writable: !0, enumerable: !1 },
        });
  }
  function ab(a) {
    Za(a, 1);
    return a;
  }
  function bb(a) {
    Za(a, 16);
    return a;
  }
  function cb(a, b) {
    D(b, (a | 0) & -51);
  }
  function db(a, b) {
    D(b, (a | 18) & -41);
  }
  var eb = {};
  function fb(a) {
    return (
      null !== a &&
      'object' === typeof a &&
      !Array.isArray(a) &&
      a.constructor === Object
    );
  }
  var gb,
    hb,
    ib = [];
  D(ib, 23);
  hb = Object.freeze(ib);
  function jb(a) {
    if (C(a.l) & 2) throw Error();
  }
  function kb(a) {
    var b = a.length;
    (b = b ? a[b - 1] : void 0) && fb(b)
      ? (b.g = 1)
      : ((b = {}), a.push(((b.g = 1), b)));
  }
  function lb(a, b) {
    var c = C(a),
      d = c;
    0 === d && (d |= b & 16);
    d |= b & 2;
    d !== c && D(a, d);
  }
  var mb = function (a) {
      var b = a.i + a.G;
      return a.B || (a.B = a.l[b] = {});
    },
    F = function (a, b, c) {
      return -1 === b
        ? null
        : b >= a.i
        ? a.B
          ? a.B[b]
          : void 0
        : c && a.B && ((c = a.B[b]), null != c)
        ? c
        : a.l[b + a.G];
    },
    H = function (a, b, c, d) {
      jb(a);
      return G(a, b, c, d);
    },
    G = function (a, b, c, d) {
      a.j && (a.j = void 0);
      if (b >= a.i || d) return (mb(a)[b] = c), a;
      a.l[b + a.G] = c;
      (c = a.B) && b in c && delete c[b];
      return a;
    };
  function nb(a, b, c, d, e) {
    var f = F(a, b, d);
    Array.isArray(f) || (f = hb);
    var g = C(f);
    g & 1 || ab(f);
    if (e) g & 2 || Za(f, 18), c & 1 || Object.freeze(f);
    else {
      e = !(c & 2);
      var h = g & 2;
      c & 1 || !h
        ? e &&
          g & 16 &&
          !h &&
          ((a = f), B ? a[B] && (a[B] &= -17) : void 0 !== a.C && (a.C &= -17))
        : ((f = ab(Array.prototype.slice.call(f))), G(a, b, f, d));
    }
    return f;
  }
  function ob(a, b) {
    var c = !!(C(a.l) & 2),
      d = nb(a, b, 1, !1, c),
      e = C(d);
    if (!(e & 4)) {
      Object.isFrozen(d) && ((d = ab(d.slice())), G(a, b, d, !1));
      for (var f = 0, g = 0; f < d.length; f++) {
        var h = d[f];
        null != h && (d[g++] = h);
      }
      g < f && (d.length = g);
      e |= 5;
      c && (e |= 18);
      D(d, e);
      e & 2 && Object.freeze(d);
    }
    !c &&
      (e & 2 || Object.isFrozen(d)) &&
      ((d = Array.prototype.slice.call(d)), Za(d, 5), G(a, b, d, !1));
    return d;
  }
  function pb(a, b, c) {
    if (null == c) H(a, b, hb);
    else {
      var d = C(c);
      if (!(d & 4)) {
        if (d & 2 || Object.isFrozen(c)) c = Array.prototype.slice.call(c);
        for (var e = 0; e < c.length; e++) c[e] = c[e];
        D(c, d | 5);
      }
      H(a, b, c);
    }
  }
  var qb = function (a, b, c) {
    c = null == c ? hb : $a(c, 1);
    return H(a, b, c);
  };
  function I(a, b, c, d) {
    jb(a);
    c !== d ? G(a, b, c) : G(a, b, void 0, !1);
    return a;
  }
  var sb = function (a, b, c, d) {
      jb(a);
      (c = rb(a, c)) && c !== b && null != d && G(a, c, void 0, !1);
      return G(a, b, d);
    },
    J = function (a, b, c) {
      return rb(a, b) === c ? c : -1;
    },
    rb = function (a, b) {
      for (var c = 0, d = 0; d < b.length; d++) {
        var e = b[d];
        null != F(a, e) && (0 !== c && G(a, c, void 0, !1), (c = e));
      }
      return c;
    },
    tb = function (a, b, c, d) {
      var e = F(a, c, d);
      var f = !1;
      null == e || 'object' !== typeof e || (f = Array.isArray(e)) || e.V !== eb
        ? f
          ? (lb(e, C(a.l)), (b = new b(e)))
          : (b = void 0)
        : (b = e);
      b !== e && null != b && G(a, c, b, d);
      return b;
    },
    K = function (a, b, c) {
      var d = void 0 === d ? !1 : d;
      b = tb(a, b, c, d);
      if (null == b) return b;
      if (!(C(a.l) & 2)) {
        var e = ub(b);
        e !== b && ((b = e), G(a, c, b, d));
      }
      return b;
    },
    L = function (a, b, c) {
      var d = C(a.l),
        e = !!(d & 2);
      var f = !!(d & 2);
      a.h || (a.h = {});
      var g = a.h[c];
      var h = nb(a, c, 3, void 0, f);
      if (g)
        f ||
          ((f = Object.isFrozen(g)),
          e && !f
            ? Object.freeze(g)
            : !e && f && ((g = Array.prototype.slice.call(g)), (a.h[c] = g)));
      else {
        var k = h;
        g = [];
        f = !!(d & 2);
        h = !!(C(k) & 2);
        var l = k;
        !f && h && (k = Array.prototype.slice.call(k));
        var n = d | (h ? 2 : 0);
        d = h;
        for (var p = 0; p < k.length; p++) {
          var y = k[p];
          var ua = b;
          Array.isArray(y) ? (lb(y, n), (y = new ua(y))) : (y = void 0);
          void 0 !== y && (d || (d = !!(2 & C(y.l))), g.push(y));
        }
        a.h[c] = g;
        n = C(k);
        b = n | 33;
        b = d ? b & -9 : b | 8;
        n != b &&
          ((d = k),
          Object.isFrozen(d) && (d = Array.prototype.slice.call(d)),
          D(d, b),
          (k = d));
        l !== k && G(a, c, k);
        (f || (e && h)) && Za(g, 18);
        e && Object.freeze(g);
      }
      a = nb(a, c, 3, void 0, e);
      if (!(e || C(a) & 8)) {
        for (e = 0; e < g.length; e++)
          (c = g[e]), (f = ub(c)), c !== f && ((g[e] = f), (a[e] = f.l));
        Za(a, 8);
      }
      return g;
    },
    wb = function (a, b, c) {
      jb(a);
      null == c && (c = void 0);
      return G(a, b, c);
    },
    xb = function (a, b, c, d) {
      jb(a);
      null == d && (d = void 0);
      return sb(a, b, c, d);
    },
    yb = function (a, b, c, d) {
      jb(a);
      var e = null == c ? hb : ab([]);
      if (null != c) {
        for (var f = !!c.length, g = 0; g < c.length; g++) {
          var h = c[g];
          f = f && !(C(h.l) & 2);
          e[g] = h.l;
        }
        e = $a(e, (f ? 8 : 0) | 1);
        a.h || (a.h = {});
        a.h[b] = c;
      } else a.h && (a.h[b] = void 0);
      return G(a, b, e, d);
    };
  function M(a, b) {
    return null == a ? b : a;
  }
  var zb = function (a, b) {
      return M(F(a, b), '');
    },
    Ab = function (a, b) {
      a = F(a, b);
      return M(null == a ? a : !!a, !1);
    },
    Bb = function (a, b) {
      var c = void 0 === c ? 0 : c;
      var d = F(a, b);
      var e =
        null == d
          ? d
          : 'number' === typeof d ||
            'NaN' === d ||
            'Infinity' === d ||
            '-Infinity' === d
          ? Number(d)
          : void 0;
      null != e && e !== d && G(a, b, e);
      return M(e, c);
    },
    N = function (a, b) {
      return M(F(a, b), 0);
    };
  var Cb;
  function Db(a, b) {
    Cb = b;
    a = new a(b);
    Cb = void 0;
    return a;
  }
  function Eb(a) {
    switch (typeof a) {
      case 'number':
        return isFinite(a) ? a : String(a);
      case 'object':
        if (a)
          if (Array.isArray(a)) {
            if (0 !== (C(a) & 128))
              return (a = Array.prototype.slice.call(a)), kb(a), a;
          } else if (Xa && null != a && a instanceof Uint8Array) {
            if (Ya) {
              for (var b = ''; 10240 < a.length; )
                (b += String.fromCharCode.apply(null, a.subarray(0, 10240))),
                  (a = a.subarray(10240));
              b += String.fromCharCode.apply(null, a);
              a = btoa(b);
            } else {
              void 0 === b && (b = 0);
              Wa();
              b = Sa[b];
              for (
                var c = Array(Math.floor(a.length / 3)),
                  d = b[64] || '',
                  e = 0,
                  f = 0;
                e < a.length - 2;
                e += 3
              ) {
                var g = a[e],
                  h = a[e + 1],
                  k = a[e + 2],
                  l = b[g >> 2];
                g = b[((g & 3) << 4) | (h >> 4)];
                h = b[((h & 15) << 2) | (k >> 6)];
                k = b[k & 63];
                c[f++] = l + g + h + k;
              }
              l = 0;
              k = d;
              switch (a.length - e) {
                case 2:
                  (l = a[e + 1]), (k = b[(l & 15) << 2] || d);
                case 1:
                  (a = a[e]),
                    (c[f] = b[a >> 2] + b[((a & 3) << 4) | (l >> 4)] + k + d);
              }
              a = c.join('');
            }
            return a;
          }
    }
    return a;
  }
  function Fb(a, b, c, d) {
    if (null != a) {
      if (Array.isArray(a)) a = Gb(a, b, c, void 0 !== d);
      else if (fb(a)) {
        var e = {},
          f;
        for (f in a)
          Object.prototype.hasOwnProperty.call(a, f) &&
            (e[f] = Fb(a[f], b, c, d));
        a = e;
      } else a = b(a, d);
      return a;
    }
  }
  function Gb(a, b, c, d) {
    var e = C(a);
    d = d ? !!(e & 16) : void 0;
    a = Array.prototype.slice.call(a);
    for (var f = 0; f < a.length; f++) a[f] = Fb(a[f], b, c, d);
    c(e, a);
    return a;
  }
  function Hb(a) {
    return a.V === eb ? a.toJSON() : Eb(a);
  }
  function Ib(a, b) {
    a & 128 && kb(b);
  }
  function Jb(a, b, c) {
    c = void 0 === c ? db : c;
    if (null != a) {
      if (Xa && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        var d = C(a);
        if (d & 2) return a;
        if (b && !(d & 32) && (d & 16 || 0 === d)) return D(a, d | 18), a;
        a = Gb(a, Jb, d & 4 ? db : c, !0);
        b = C(a);
        b & 4 && b & 2 && Object.freeze(a);
        return a;
      }
      return a.V === eb ? Kb(a) : a;
    }
  }
  function Lb(a, b, c, d, e, f, g) {
    (a = a.h && a.h[c])
      ? ((d = C(a)),
        d & 2
          ? (d = a)
          : ((f = Ma(a, Kb)), db(d, f), Object.freeze(f), (d = f)),
        yb(b, c, d, e))
      : H(b, c, Jb(d, f, g), e);
  }
  function Kb(a) {
    if (C(a.l) & 2) return a;
    a = Mb(a, !0);
    Za(a.l, 18);
    return a;
  }
  function Mb(a, b) {
    var c = a.l,
      d = bb([]),
      e = a.constructor.messageId;
    e && d.push(e);
    e = a.B;
    if (e) {
      d.length = c.length;
      r(d, 'fill').call(d, void 0, d.length, c.length);
      var f = {};
      d[d.length - 1] = f;
    }
    0 !== (C(c) & 128) && kb(d);
    b = b || C(a.l) & 2 ? db : cb;
    d = Db(a.constructor, d);
    a.la && (d.la = a.la.slice());
    f = !!(C(c) & 16);
    for (var g = e ? c.length - 1 : c.length, h = 0; h < g; h++)
      Lb(a, d, h - a.G, c[h], !1, f, b);
    if (e) for (var k in e) Lb(a, d, +k, e[k], !0, f, b);
    return d;
  }
  function ub(a) {
    if (!(C(a.l) & 2)) return a;
    var b = Mb(a, !1);
    b.j = a;
    return b;
  }
  var O = function (a, b, c, d) {
    null == a && (a = Cb);
    Cb = void 0;
    var e = this.constructor.messageId;
    if (null == a) {
      a = e ? [e] : [];
      var f = 48;
      var g = !0;
      d && (f |= 128);
      D(a, f);
    } else {
      if (!Array.isArray(a)) throw Error();
      if (e && e !== a[0]) throw Error();
      f = Za(a, 0) | 32;
      g = 0 !== (16 & f);
      if (d) {
        if (!(f & 128) && 0 < a.length) {
          var h = a[a.length - 1];
          if (fb(h) && 'g' in h) {
            f |= 128;
            delete h.g;
            var k = !0,
              l;
            for (l in h) {
              k = !1;
              break;
            }
            k && a.pop();
          } else throw Error();
        }
      } else if (128 & f) throw Error();
      D(a, f);
    }
    this.G = e ? 0 : -1;
    this.h = void 0;
    this.l = a;
    a: {
      f = this.l.length;
      e = f - 1;
      if (f && ((f = this.l[e]), fb(f))) {
        this.B = f;
        this.i = e - this.G;
        break a;
      }
      void 0 !== b && -1 < b
        ? ((this.i = Math.max(b, e + 1 - this.G)), (this.B = void 0))
        : (this.i = Number.MAX_VALUE);
    }
    if (!d && this.B && 'g' in this.B)
      throw Error(
        'Unexpected "g" flag in sparse object of message that is not a group type.'
      );
    if (c) {
      b = g && !0;
      d = this.i;
      var n;
      for (g = 0; g < c.length; g++)
        (e = c[g]),
          e < d
            ? ((e += this.G), (f = a[e]) ? Nb(f, b) : (a[e] = hb))
            : (n || (n = mb(this)), (f = n[e]) ? Nb(f, b) : (n[e] = hb));
    }
  };
  O.prototype.toJSON = function () {
    var a = this.l;
    return gb ? a : Gb(a, Hb, Ib);
  };
  function Nb(a, b) {
    if (Array.isArray(a)) {
      var c = C(a),
        d = 1;
      !b || c & 2 || (d |= 16);
      (c & d) !== d && D(a, c | d);
    }
  }
  O.prototype.V = eb;
  function Ob(a, b) {
    return Eb(b);
  }
  var Pb = void 0;
  function Qb() {
    var a = !P(Rb).h,
      b = Pb;
    Pb = void 0;
    if (!a) {
      if (b) throw Error(b());
      throw Error(String(a));
    }
  }
  function Sb(a) {
    return function (b) {
      if (null == b || '' == b) b = new a();
      else {
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error(void 0);
        b = Db(a, bb(b));
      }
      return b;
    };
  }
  var Vb = function (a, b) {
    this.i = (a === Tb && b) || '';
    this.j = Ub;
  };
  Vb.prototype.J = !0;
  Vb.prototype.h = function () {
    return this.i;
  };
  var Wb = function (a) {
      return a instanceof Vb && a.constructor === Vb && a.j === Ub
        ? a.i
        : 'type_error:Const';
    },
    Q = function (a) {
      return new Vb(Tb, a);
    },
    Ub = {},
    Tb = {};
  var Xb = function (a) {
    var b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  };
  var Yb = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function Zb(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b;
  }
  var $b = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
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
  };
  var R = function (a, b) {
    this.i = b === ac ? a : '';
  };
  R.prototype.toString = function () {
    return this.i + '';
  };
  R.prototype.J = !0;
  R.prototype.h = function () {
    return this.i.toString();
  };
  var ec = function (a, b) {
      a = bc.exec(cc(a).toString());
      var c = a[3] || '';
      return new R(a[1] + dc('?', a[2] || '', b) + dc('#', c), ac);
    },
    cc = function (a) {
      return a instanceof R && a.constructor === R
        ? a.i
        : 'type_error:TrustedResourceUrl';
    },
    bc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
    fc = function (a) {
      for (var b = '', c = 0; c < a.length; c++) b += Wb(a[c]);
      return new R(b, ac);
    },
    ac = {},
    dc = function (a, b, c) {
      if (null == c) return b;
      if ('string' === typeof c) return c ? a + encodeURIComponent(c) : '';
      for (var d in c)
        if (Object.prototype.hasOwnProperty.call(c, d)) {
          var e = c[d];
          e = Array.isArray(e) ? e : [e];
          for (var f = 0; f < e.length; f++) {
            var g = e[f];
            null != g &&
              (b || (b = a),
              (b +=
                (b.length > a.length ? '&' : '') +
                encodeURIComponent(d) +
                '=' +
                encodeURIComponent(String(g))));
          }
        }
      return b;
    };
  var S = function (a, b) {
    this.i = b === gc ? a : '';
  };
  S.prototype.toString = function () {
    return this.i.toString();
  };
  S.prototype.J = !0;
  S.prototype.h = function () {
    return this.i.toString();
  };
  var hc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    ic = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    gc = {},
    jc = new S('about:invalid#zClosurez', gc);
  var kc = {},
    lc = function (a, b) {
      this.i = b === kc ? a : '';
      this.J = !0;
    };
  lc.prototype.h = function () {
    return this.i.toString();
  };
  lc.prototype.toString = function () {
    return this.i.toString();
  };
  var mc = function (a) {
      return a instanceof lc && a.constructor === lc
        ? a.i
        : 'type_error:SafeHtml';
    },
    nc = function (a) {
      return a instanceof lc
        ? a
        : new lc(Ga('object' == typeof a && a.J ? a.h() : String(a)), kc);
    },
    rc = function (a, b) {
      var c = { src: a },
        d = {};
      a = {};
      for (var e in c)
        Object.prototype.hasOwnProperty.call(c, e) && (a[e] = c[e]);
      for (var f in d)
        Object.prototype.hasOwnProperty.call(d, f) && (a[f] = d[f]);
      if (b)
        for (var g in b)
          if (Object.prototype.hasOwnProperty.call(b, g)) {
            e = g.toLowerCase();
            if (e in c) throw Error('');
            e in d && delete a[e];
            a[g] = b[g];
          }
      var h;
      b = '';
      if (a)
        for (k in a)
          if (Object.prototype.hasOwnProperty.call(a, k)) {
            if (!oc.test(k)) throw Error('');
            c = a[k];
            if (null != c) {
              g = k;
              if (c instanceof Vb) c = Wb(c);
              else {
                if ('style' == g.toLowerCase()) throw Error('');
                if (/^on/i.test(g)) throw Error('');
                if (g.toLowerCase() in pc)
                  if (c instanceof R) c = cc(c).toString();
                  else if (c instanceof S)
                    c =
                      c instanceof S && c.constructor === S
                        ? c.i
                        : 'type_error:SafeUrl';
                  else if ('string' === typeof c)
                    c instanceof S ||
                      ((c = 'object' == typeof c && c.J ? c.h() : String(c)),
                      ic.test(c)
                        ? (c = new S(c, gc))
                        : ((c = String(c)),
                          (c = c.replace(/(%0A|%0D)/g, '')),
                          (c = c.match(hc) ? new S(c, gc) : null))),
                      (c = (c || jc).h());
                  else throw Error('');
              }
              c.J && (c = c.h());
              g = g + '="' + Ga(String(c)) + '"';
              b += ' ' + g;
            }
          }
      var k = '<script' + b;
      null == h ? (h = []) : Array.isArray(h) || (h = [h]);
      !0 === $b.script
        ? (k += '>')
        : ((h = qc(h)), (k += '>' + mc(h).toString() + '\x3c/script>'));
      return new lc(k, kc);
    },
    tc = function (a) {
      var b = nc(sc),
        c = [],
        d = function (e) {
          Array.isArray(e)
            ? e.forEach(d)
            : ((e = nc(e)), c.push(mc(e).toString()));
        };
      a.forEach(d);
      return new lc(c.join(mc(b).toString()), kc);
    },
    qc = function (a) {
      return tc(Array.prototype.slice.call(arguments));
    },
    oc = /^[a-zA-Z0-9-]+$/,
    pc = {
      action: !0,
      cite: !0,
      data: !0,
      formaction: !0,
      href: !0,
      manifest: !0,
      poster: !0,
      src: !0,
    },
    sc = new lc((z.trustedTypes && z.trustedTypes.emptyHTML) || '', kc);
  var vc = function () {
      a: {
        var a = z.document;
        if (
          a.querySelector &&
          (a = a.querySelector('script[nonce]')) &&
          (a = a.nonce || a.getAttribute('nonce')) &&
          uc.test(a)
        )
          break a;
        a = '';
      }
      return a;
    },
    uc = /^[\w+/_-]+[=]{0,2}$/;
  var wc = function () {
    return A('iPad') || (A('Android') && !A('Mobile')) || A('Silk');
  };
  var xc = RegExp(
      '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$'
    ),
    yc = function (a) {
      return a ? decodeURI(a) : a;
    },
    zc = /#|$/,
    Ac = function (a, b) {
      var c = a.search(zc);
      a: {
        var d = 0;
        for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
          var f = a.charCodeAt(d - 1);
          if (38 == f || 63 == f)
            if (
              ((f = a.charCodeAt(d + e)), !f || 61 == f || 38 == f || 35 == f)
            )
              break a;
          d += e + 1;
        }
        d = -1;
      }
      if (0 > d) return null;
      e = a.indexOf('&', d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, ' ')
      );
    }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  function Bc(a) {
    var b,
      c,
      d =
        null ==
        (c = (b = ((a.ownerDocument && a.ownerDocument.defaultView) || window)
          .document).querySelector)
          ? void 0
          : c.call(b, 'script[nonce]');
    (b = d ? d.nonce || d.getAttribute('nonce') || '' : '') &&
      a.setAttribute('nonce', b);
  }
  function Cc(a, b) {
    a.write(mc(b));
  }
  var Dc = function (a) {
      try {
        var b;
        if ((b = !!a && null != a.location.href))
          a: {
            try {
              Ra(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Ec = function (a) {
      var b = void 0 === b ? !1 : b;
      var c = void 0 === c ? z : c;
      for (var d = 0; c && 40 > d++ && ((!b && !Dc(c)) || !a(c)); )
        a: {
          try {
            var e = c.parent;
            if (e && e != c) {
              c = e;
              break a;
            }
          } catch (f) {}
          c = null;
        }
    },
    Fc = function (a) {
      var b = a;
      Ec(function (c) {
        b = c;
        return !1;
      });
      return b;
    },
    Jc = function (a, b) {
      if (!Gc() && !Hc()) {
        var c = Math.random();
        if (c < b) return (c = Ic()), a[Math.floor(c * a.length)];
      }
      return null;
    },
    Ic = function () {
      if (!q.globalThis.crypto) return Math.random();
      try {
        var a = new Uint32Array(1);
        q.globalThis.crypto.getRandomValues(a);
        return a[0] / 65536 / 65536;
      } catch (b) {
        return Math.random();
      }
    },
    Kc = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    },
    Lc = function (a) {
      var b = a.length;
      if (0 == b) return 0;
      for (var c = 305419896, d = 0; d < b; d++)
        c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
      return 0 < c ? c : 4294967296 + c;
    },
    Hc = Xb(function () {
      return (
        Array.prototype.some.call(
          [
            'Google Web Preview',
            'Mediapartners-Google',
            'Google-Read-Aloud',
            'Google-Adwords',
          ],
          Mc,
          void 0
        ) || 1e-4 > Math.random()
      );
    }),
    Gc = Xb(function () {
      return Mc('MSIE');
    }),
    Mc = function (a) {
      return -1 != Ja().indexOf(a);
    },
    Nc = /^(-?[0-9.]{1,30})$/;
  function Oc(a) {
    if (!Nc.test(a)) return null;
    a = Number(a);
    return isNaN(a) ? null : a;
  }
  var Pc = Xb(function () {
      return !wc() &&
        (A('iPod') || A('iPhone') || A('Android') || A('IEMobile'))
        ? 2
        : wc()
        ? 1
        : 0;
    }),
    Qc = function (a) {
      if ('number' !== typeof a.goog_pvsid)
        try {
          Object.defineProperty(a, 'goog_pvsid', {
            value: Math.floor(Math.random() * Math.pow(2, 52)),
            configurable: !1,
          });
        } catch (b) {}
      return Number(a.goog_pvsid) || -1;
    },
    Rc = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Sc(a) {
    var b = ra.apply(1, arguments);
    if (0 === b.length) return new R(a[0], ac);
    for (var c = [a[0]], d = 0; d < b.length; d++)
      c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
    return new R(c.join(''), ac);
  }
  var Tc = {
    Ga: 0,
    Fa: 1,
    Ca: 2,
    xa: 3,
    Da: 4,
    ya: 5,
    Ea: 6,
    Aa: 7,
    Ba: 8,
    wa: 9,
    za: 10,
  };
  var Uc = { Ia: 0, Ja: 1, Ha: 2 };
  var Vc = 'a'.charCodeAt(),
    Wc = Zb(Tc),
    Xc = Zb(Uc);
  var Yc = function (a) {
      if (/[^01]/.test(a))
        throw Error('Input bitstring ' + a + ' is malformed!');
      this.i = a;
      this.h = 0;
    },
    ad = function (a) {
      var b = T(a, 16);
      return !0 === !!T(a, 1)
        ? ((a = Zc(a)),
          a.forEach(function (c) {
            if (c > b)
              throw Error('ID ' + c + ' is past MaxVendorId ' + b + '!');
          }),
          a)
        : $c(a, b);
    },
    Zc = function (a) {
      for (var b = T(a, 12), c = []; b--; ) {
        var d = !0 === !!T(a, 1),
          e = T(a, 16);
        if (d) for (d = T(a, 16); e <= d; e++) c.push(e);
        else c.push(e);
      }
      c.sort(function (f, g) {
        return f - g;
      });
      return c;
    },
    $c = function (a, b, c) {
      for (var d = [], e = 0; e < b; e++)
        if (T(a, 1)) {
          var f = e + 1;
          if (c && -1 === c.indexOf(f))
            throw Error('ID: ' + f + ' is outside of allowed values!');
          d.push(f);
        }
      return d;
    },
    T = function (a, b) {
      if (a.h + b > a.i.length)
        throw Error('Requested length ' + b + ' is past end of string.');
      var c = a.i.substring(a.h, a.h + b);
      a.h += b;
      return parseInt(c, 2);
    };
  var cd = function (a, b) {
      try {
        var c = Va(a.split('.')[0])
            .map(function (e) {
              return ((m = e.toString(2)), r(m, 'padStart')).call(m, 8, '0');
            })
            .join(''),
          d = new Yc(c);
        c = {};
        c.tcString = a;
        c.gdprApplies = !0;
        d.h += 78;
        c.cmpId = T(d, 12);
        c.cmpVersion = T(d, 12);
        d.h += 30;
        c.tcfPolicyVersion = T(d, 6);
        c.isServiceSpecific = !!T(d, 1);
        c.useNonStandardStacks = !!T(d, 1);
        c.specialFeatureOptins = bd($c(d, 12, Xc), Xc);
        c.purpose = {
          consents: bd($c(d, 24, Wc), Wc),
          legitimateInterests: bd($c(d, 24, Wc), Wc),
        };
        c.purposeOneTreatment = !!T(d, 1);
        c.publisherCC =
          String.fromCharCode(Vc + T(d, 6)) + String.fromCharCode(Vc + T(d, 6));
        c.vendor = {
          consents: bd(ad(d), b),
          legitimateInterests: bd(ad(d), b),
        };
        return c;
      } catch (e) {
        return null;
      }
    },
    bd = function (a, b) {
      var c = {};
      if (Array.isArray(b) && 0 !== b.length) {
        b = u(b);
        for (var d = b.next(); !d.done; d = b.next())
          (d = d.value), (c[d] = -1 !== a.indexOf(d));
      } else
        for (a = u(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
      delete c[0];
      return c;
    };
  function dd(a) {
    return JSON.stringify([
      a.map(function (b) {
        var c = {};
        return [((c[b.na] = b.message.toJSON()), c)];
      }),
    ]);
  }
  var ed = function (a, b) {
    if (q.globalThis.fetch)
      q.globalThis
        .fetch(a, {
          method: 'POST',
          body: b,
          keepalive: 65536 > b.length,
          credentials: 'omit',
          mode: 'no-cors',
          redirect: 'follow',
        })
        .catch(function () {});
    else {
      var c = new XMLHttpRequest();
      c.open('POST', a, !0);
      c.send(b);
    }
  };
  var fd = function (a) {
    O.call(this, a);
  };
  x(fd, O);
  var gd = function (a, b) {
      return I(a, 1, b, 0);
    },
    hd = function (a, b) {
      return I(a, 2, b, 0);
    };
  var id = function (a) {
    O.call(this, a);
  };
  x(id, O);
  var jd = [1, 2];
  var ld = function (a) {
    O.call(this, a, -1, kd);
  };
  x(ld, O);
  var md = function (a, b) {
      return wb(a, 1, b);
    },
    nd = function (a, b) {
      return yb(a, 2, b);
    },
    od = function (a, b) {
      return qb(a, 4, b);
    },
    pd = function (a, b) {
      return yb(a, 5, b);
    },
    qd = function (a, b) {
      return I(a, 6, b, 0);
    },
    kd = [2, 4, 5];
  var sd = function (a) {
    O.call(this, a, -1, rd);
  };
  x(sd, O);
  var rd = [5],
    td = [1, 2, 3, 4];
  var vd = function (a) {
    O.call(this, a, -1, ud);
  };
  x(vd, O);
  var ud = [2, 3];
  var wd = function (a) {
    O.call(this, a);
  };
  x(wd, O);
  wd.prototype.getTagSessionCorrelator = function () {
    return M(F(this, 2), 0);
  };
  var yd = function (a) {
      var b = new wd();
      return xb(b, 4, xd, a);
    },
    xd = [4, 5, 7];
  var Ad = function (a) {
    O.call(this, a, -1, zd);
  };
  x(Ad, O);
  var zd = [3];
  var Cd = function (a) {
    O.call(this, a, -1, Bd);
  };
  x(Cd, O);
  var Bd = [4, 5];
  var Ed = function (a) {
    O.call(this, a, -1, Dd);
  };
  x(Ed, O);
  Ed.prototype.getTagSessionCorrelator = function () {
    return M(F(this, 1), 0);
  };
  var Dd = [2];
  var Fd = function (a) {
    O.call(this, a);
  };
  x(Fd, O);
  var Gd = [4];
  function Hd(a) {
    a.ma.apply(
      a,
      v(
        ra.apply(1, arguments).map(function (b) {
          return { na: 2, message: b };
        })
      )
    );
  }
  function Id(a) {
    a.ma.apply(
      a,
      v(
        ra.apply(1, arguments).map(function (b) {
          return { na: 4, message: b };
        })
      )
    );
  }
  var Jd = function () {
    this.j = this.j;
    this.m = this.m;
  };
  Jd.prototype.j = !1;
  Jd.prototype.W = function () {
    if (this.m) for (; this.m.length; ) this.m.shift()();
  };
  var Kd = function (a, b, c, d, e) {
      this.H = a;
      this.u = b;
      this.I = c;
      this.j = d;
      this.m = e;
      this.h = [];
      this.i = null;
    },
    Ld = function (a) {
      null !== a.i && (clearTimeout(a.i), (a.i = null));
      if (a.h.length) {
        var b = dd(a.h);
        a.u(a.H + '?e=1', b);
        a.h = [];
      }
    };
  Kd.prototype.ma = function () {
    var a = ra.apply(0, arguments),
      b = this;
    this.m && 65536 <= dd(this.h.concat(a)).length && Ld(this);
    this.h.push.apply(this.h, v(a));
    this.h.length >= this.j && Ld(this);
    this.h.length &&
      null === this.i &&
      (this.i = setTimeout(function () {
        Ld(b);
      }, this.I));
  };
  var Md = function (a, b, c) {
    Kd.call(
      this,
      'https://pagead2.googlesyndication.com/pagead/ping',
      ed,
      void 0 === a ? 1e3 : a,
      void 0 === b ? 100 : b,
      (void 0 === c ? !1 : c) && !!q.globalThis.fetch
    );
  };
  x(Md, Kd);
  var Nd = function (a) {
      this.h = a;
      this.defaultValue = !1;
    },
    Od = function (a) {
      this.h = a;
      this.defaultValue = 0;
    };
  var Pd = new Nd(501898423),
    Qd = new Nd(427549339),
    Rd = new Od(428094087),
    Sd = new Nd(494337909),
    Td = new Od(24),
    Ud = new (function (a, b) {
      b = void 0 === b ? [] : b;
      this.h = a;
      this.defaultValue = b;
    })(1934, [
      'Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==',
      'A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==',
      'A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==',
    ]),
    Wd = new Nd(203);
  var Xd = function () {
    this.h = {};
  };
  var Yd = function (a) {
    O.call(this, a);
  };
  x(Yd, O);
  var Zd = function (a) {
    O.call(this, a);
  };
  x(Zd, O);
  var $d = function (a) {
    O.call(this, a);
  };
  x($d, O);
  var ae = [8, 11, 12, 13, 15, 17, 18, 19, 20, 21, 22, 25, 26, 27];
  var be = function () {};
  var ce = function (a) {
    O.call(this, a);
  };
  x(ce, O);
  var de = function (a) {
    O.call(this, a);
  };
  x(de, O);
  var fe = function (a) {
    O.call(this, a, -1, ee);
  };
  x(fe, O);
  var ge = Sb(fe),
    ee = [7];
  var he = function (a) {
    this.h = a || { cookie: '' };
  };
  he.prototype.set = function (a, b, c) {
    var d = !1;
    if ('object' === typeof c) {
      var e = c.Oa;
      d = c.Pa || !1;
      var f = c.domain || void 0;
      var g = c.path || void 0;
      var h = c.ta;
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === h && (h = -1);
    this.h.cookie =
      a +
      '=' +
      b +
      (f ? ';domain=' + f : '') +
      (g ? ';path=' + g : '') +
      (0 > h
        ? ''
        : 0 == h
        ? ';expires=' + new Date(1970, 1, 1).toUTCString()
        : ';expires=' + new Date(Date.now() + 1e3 * h).toUTCString()) +
      (d ? ';secure' : '') +
      (null != e ? ';samesite=' + e : '');
  };
  he.prototype.get = function (a, b) {
    for (
      var c = a + '=', d = (this.h.cookie || '').split(';'), e = 0, f;
      e < d.length;
      e++
    ) {
      f = ya(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
      if (f == a) return '';
    }
    return b;
  };
  he.prototype.isEmpty = function () {
    return !this.h.cookie;
  };
  he.prototype.clear = function () {
    for (
      var a = (this.h.cookie || '').split(';'), b = [], c = [], d, e, f = 0;
      f < a.length;
      f++
    )
      (e = ya(a[f])),
        (d = e.indexOf('=')),
        -1 == d
          ? (b.push(''), c.push(e))
          : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--)
      (c = b[a]),
        this.get(c),
        this.set(c, '', { ta: 0, path: void 0, domain: void 0 });
  };
  var ie = new (function (a, b) {
    this.key = a;
    this.defaultValue = void 0 === b ? !1 : b;
    this.valueType = 'boolean';
  })('45369554');
  var je = function () {
      this.h = {};
      var a = z.__fcexpdef || '';
      try {
        var b = JSON.parse(a)[0];
        a = '';
        for (var c = 0; c < b.length; c++)
          a += String.fromCharCode(
            b.charCodeAt(c) ^
              '\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003'.charCodeAt(
                c % 10
              )
          );
        this.h = JSON.parse(a);
      } catch (d) {}
    },
    ke;
  x(je, Xd);
  function le(a) {
    return (a = me(a)) ? K(a, de, 4) : null;
  }
  function me(a) {
    if ((a = new he(a).get('FCCDCF', '')))
      if (r(a, 'startsWith').call(a, '%'))
        try {
          var b = decodeURIComponent(a);
        } catch (c) {
          ne(1), (b = null);
        }
      else b = a;
    else b = null;
    try {
      return b ? ge(b) : null;
    } catch (c) {
      return ne(2), null;
    }
  }
  function ne(a) {
    new be();
    var b = new Yd();
    a = H(b, 7, a);
    b = new Zd();
    a = wb(b, 1, a);
    b = new $d();
    xb(b, 22, ae, a);
    ke || (ke = new je());
    a = ke.h[ie.key];
    if ('proto' === ie.valueType)
      try {
        JSON.parse(a);
      } catch (c) {}
  }
  Zb(Tc).map(function (a) {
    return Number(a);
  });
  Zb(Uc).map(function (a) {
    return Number(a);
  });
  var oe = function (a) {
      this.h = a;
      this.i = null;
    },
    qe = function (a) {
      a.__tcfapiPostMessageReady || pe(new oe(a));
    },
    pe = function (a) {
      a.i = function (b) {
        var c = 'string' == typeof b.data;
        try {
          var d = c ? JSON.parse(b.data) : b.data;
        } catch (f) {
          return;
        }
        var e = d.__tcfapiCall;
        !e ||
          ('ping' !== e.command &&
            'getTCData' !== e.command &&
            'addEventListener' !== e.command &&
            'removeEventListener' !== e.command) ||
          a.h.__tcfapi(
            e.command,
            e.version,
            function (f, g) {
              var h = {};
              h.__tcfapiReturn =
                'removeEventListener' === e.command
                  ? { success: f, callId: e.callId }
                  : { returnValue: f, success: g, callId: e.callId };
              f = c ? JSON.stringify(h) : h;
              b.source &&
                'function' === typeof b.source.postMessage &&
                b.source.postMessage(f, b.origin);
              return f;
            },
            e.parameter
          );
      };
      a.h.addEventListener('message', a.i);
      a.h.__tcfapiPostMessageReady = !0;
    };
  var re = function (a, b) {
    var c = a.document,
      d = function () {
        if (!a.frames[b])
          if (c.body) {
            var e = Rc('IFRAME', c);
            e.style.display = 'none';
            e.style.width = '0px';
            e.style.height = '0px';
            e.style.border = 'none';
            e.style.zIndex = '-1000';
            e.style.left = '-1000px';
            e.style.top = '-1000px';
            e.name = b;
            c.body.appendChild(e);
          } else a.setTimeout(d, 5);
      };
    d();
  };
  var se = function (a) {
      this.h = a;
      this.i = a.document;
      this.u = (a = (a = me(this.i)) ? K(a, ce, 5) || null : null)
        ? F(a, 2)
        : null;
      this.j = (a = le(this.i)) && null != F(a, 1) ? F(a, 1) : null;
      this.m = (a = le(this.i)) && null != F(a, 2) ? F(a, 2) : null;
    },
    ve = function (a) {
      a.__uspapi || a.frames.__uspapiLocator || ((a = new se(a)), te(a), ue(a));
    },
    te = function (a) {
      !a.u ||
        a.h.__uspapi ||
        a.h.frames.__uspapiLocator ||
        ((a.h.__uspapiManager = 'fc'),
        re(a.h, '__uspapiLocator'),
        xa('__uspapi', function () {
          return a.I.apply(a, v(ra.apply(0, arguments)));
        }));
    };
  se.prototype.I = function (a, b, c) {
    'function' === typeof c &&
      'getUSPData' === a &&
      c({ version: 1, uspString: this.u }, !0);
  };
  var ue = function (a) {
    !a.j ||
      a.h.__tcfapi ||
      a.h.frames.__tcfapiLocator ||
      ((a.h.__tcfapiManager = 'fc'),
      re(a.h, '__tcfapiLocator'),
      (a.h.__tcfapiEventListeners = a.h.__tcfapiEventListeners || []),
      xa('__tcfapi', function () {
        return a.H.apply(a, v(ra.apply(0, arguments)));
      }),
      qe(a.h));
  };
  se.prototype.H = function (a, b, c, d) {
    d = void 0 === d ? null : d;
    if ('function' === typeof c)
      if (b && 2 !== b) c(null, !1);
      else
        switch (((b = this.h.__tcfapiEventListeners), a)) {
          case 'getTCData':
            !d ||
            (Array.isArray(d) &&
              d.every(function (e) {
                return 'number' === typeof e;
              }))
              ? c(we(this, d, null), !0)
              : c(null, !1);
            break;
          case 'ping':
            c({
              gdprApplies: !0,
              cmpLoaded: !0,
              cmpStatus: 'loaded',
              displayStatus: 'disabled',
              apiVersion: '2.0',
              cmpVersion: 1,
              cmpId: 300,
            });
            break;
          case 'addEventListener':
            a = b.push(c);
            c(we(this, null, a - 1), !0);
            break;
          case 'removeEventListener':
            b[d] ? ((b[d] = null), c(!0)) : c(!1);
            break;
          case 'getInAppTCData':
          case 'getVendorList':
            c(null, !1);
        }
  };
  var we = function (a, b, c) {
    if (!a.j) return null;
    b = cd(a.j, b);
    b.addtlConsent = null != a.m ? a.m : void 0;
    b.cmpStatus = 'loaded';
    b.eventStatus = 'tcloaded';
    null != c && (b.listenerId = c);
    return b;
  };
  var xe = function (a) {
    return 'string' === typeof a;
  };
  var ye = function (a, b) {
    var c = void 0 === c ? {} : c;
    this.error = a;
    this.context = b.context;
    this.msg = b.message || '';
    this.id = b.id || 'jserror';
    this.meta = c;
  };
  var ze = null,
    Ae = function () {
      if (null === ze) {
        ze = '';
        try {
          var a = '';
          try {
            a = z.top.location.hash;
          } catch (c) {
            a = z.location.hash;
          }
          if (a) {
            var b = a.match(/\bdeid=([\d,]+)/);
            ze = b ? b[1] : '';
          }
        } catch (c) {}
      }
      return ze;
    };
  var Ce = function (a) {
    O.call(this, a, -1, Be);
  };
  x(Ce, O);
  var Be = [2, 8],
    De = [3, 4, 5],
    Ee = [6, 7];
  function Fe(a) {
    return null != a ? !a : a;
  }
  function Ge(a, b) {
    for (var c = !1, d = 0; d < a.length; d++) {
      var e = a[d]();
      if (e === b) return e;
      null == e && (c = !0);
    }
    if (!c) return !b;
  }
  function He(a, b) {
    var c = L(a, Ce, 2);
    if (!c.length) return Ie(a, b);
    a = N(a, 1);
    if (1 === a) return Fe(He(c[0], b));
    c = Ma(c, function (d) {
      return function () {
        return He(d, b);
      };
    });
    switch (a) {
      case 2:
        return Ge(c, !1);
      case 3:
        return Ge(c, !0);
    }
  }
  function Ie(a, b) {
    var c = rb(a, De);
    a: {
      switch (c) {
        case 3:
          var d = N(a, J(a, De, 3));
          break a;
        case 4:
          d = N(a, J(a, De, 4));
          break a;
        case 5:
          d = N(a, J(a, De, 5));
          break a;
      }
      d = void 0;
    }
    if (d && (b = (b = b[c]) && b[d])) {
      try {
        var e = b.apply(null, v(ob(a, 8)));
      } catch (f) {
        return;
      }
      b = N(a, 1);
      if (4 === b) return !!e;
      if (5 === b) return null != e;
      if (12 === b) a = zb(a, J(a, Ee, 7));
      else
        a: {
          switch (c) {
            case 4:
              a = Bb(a, J(a, Ee, 6));
              break a;
            case 5:
              a = zb(a, J(a, Ee, 7));
              break a;
          }
          a = void 0;
        }
      if (null != a) {
        if (6 === b) return e === a;
        if (9 === b) return null != e && 0 === Ia(String(e), a);
        if (null != e)
          switch (b) {
            case 7:
              return e < a;
            case 8:
              return e > a;
            case 12:
              return xe(a) && xe(e) && new RegExp(a).test(e);
            case 10:
              return null != e && -1 === Ia(String(e), a);
            case 11:
              return null != e && 1 === Ia(String(e), a);
          }
      }
    }
  }
  function Je(a, b) {
    return !a || !(!b || !He(a, b));
  }
  var Le = function (a) {
    O.call(this, a, -1, Ke);
  };
  x(Le, O);
  var Ke = [4];
  var Me = function (a) {
    O.call(this, a);
  };
  x(Me, O);
  var Oe = function (a) {
    O.call(this, a, -1, Ne);
  };
  x(Oe, O);
  var Pe = Sb(Oe),
    Ne = [5],
    Qe = [1, 2, 3, 6, 7];
  var Re = function (a, b, c) {
      var d = void 0 === d ? new Md(b) : d;
      this.u = a;
      this.m = c;
      this.i = d;
      this.h = [];
      this.j = 0 < a && Ic() < 1 / a;
    },
    Te = function (a, b, c, d, e, f) {
      if (a.j) {
        var g = hd(gd(new fd(), b), c);
        b = qd(nd(md(pd(od(new ld(), d), e), g), a.h.slice()), f);
        b = yd(b);
        Id(a.i, Se(a, b));
        if (
          1 === f ||
          3 === f ||
          (4 === f &&
            !a.h.some(function (h) {
              return N(h, 1) === N(g, 1) && N(h, 2) === c;
            }))
        )
          a.h.push(g), 100 < a.h.length && a.h.shift();
      }
    },
    Ue = function (a, b, c, d) {
      if (a.j && a.m) {
        var e = new vd();
        b = yb(e, 2, b);
        c = yb(b, 3, c);
        d && I(c, 1, d, 0);
        d = new wd();
        d = xb(d, 7, xd, c);
        Id(a.i, Se(a, d));
      }
    },
    Se = function (a, b) {
      b = I(b, 1, Date.now(), 0);
      var c = Qc(window);
      b = I(b, 2, c, 0);
      return I(b, 6, a.u, 0);
    };
  var P = function (a) {
    var b = 'T';
    if (a.T && a.hasOwnProperty(b)) return a.T;
    b = new a();
    return (a.T = b);
  };
  var Ve = function () {
    var a = {};
    this.s = ((a[3] = {}), (a[4] = {}), (a[5] = {}), a);
  };
  var We = /^true$/.test('false');
  function Xe(a, b) {
    switch (b) {
      case 1:
        return N(a, J(a, Qe, 1));
      case 2:
        return N(a, J(a, Qe, 2));
      case 3:
        return N(a, J(a, Qe, 3));
      case 6:
        return N(a, J(a, Qe, 6));
      default:
        return null;
    }
  }
  function Ye(a, b) {
    if (!a) return null;
    switch (b) {
      case 1:
        return Ab(a, 1);
      case 7:
        return zb(a, 3);
      case 2:
        return Bb(a, 2);
      case 3:
        return zb(a, 3);
      case 6:
        return ob(a, 4);
      default:
        return null;
    }
  }
  var Ze = Xb(function () {
    if (!We) return {};
    try {
      var a = window.sessionStorage && window.sessionStorage.getItem('GGDFSSK');
      if (a) return JSON.parse(a);
    } catch (b) {}
    return {};
  });
  function $e(a, b, c, d) {
    var e = (d = void 0 === d ? 0 : d),
      f,
      g;
    P(U).j[e] =
      null != (g = null == (f = P(U).j[e]) ? void 0 : f.add(b))
        ? g
        : new q.Set().add(b);
    e = Ze();
    if (null != e[b]) return e[b];
    b = af(d)[b];
    if (!b) return c;
    b = Pe(JSON.stringify(b));
    b = bf(b);
    a = Ye(b, a);
    return null != a ? a : c;
  }
  function bf(a) {
    var b = P(Ve).s;
    if (b) {
      var c = Oa(L(a, Me, 5), function (f) {
        return Je(K(f, Ce, 1), b);
      });
      if (c) {
        var d;
        return null != (d = K(c, Le, 2)) ? d : null;
      }
    }
    var e;
    return null != (e = K(a, Le, 4)) ? e : null;
  }
  var U = function () {
    this.i = {};
    this.m = [];
    this.j = {};
    this.h = new q.Map();
  };
  function cf(a, b, c) {
    return !!$e(1, a, void 0 === b ? !1 : b, c);
  }
  function df(a, b, c) {
    b = void 0 === b ? 0 : b;
    a = Number($e(2, a, b, c));
    return isNaN(a) ? b : a;
  }
  function ef(a, b, c) {
    b = void 0 === b ? '' : b;
    a = $e(3, a, b, c);
    return 'string' === typeof a ? a : b;
  }
  function ff(a, b, c) {
    b = void 0 === b ? [] : b;
    a = $e(6, a, b, c);
    return Array.isArray(a) ? a : b;
  }
  function af(a) {
    return P(U).i[a] || (P(U).i[a] = {});
  }
  function gf(a, b) {
    var c = af(b);
    Kc(a, function (d, e) {
      return (c[e] = d);
    });
  }
  function hf(a, b, c, d, e) {
    e = void 0 === e ? !1 : e;
    var f = [],
      g = [];
    Ka(b, function (h) {
      var k = af(h);
      Ka(a, function (l) {
        var n = rb(l, Qe),
          p = Xe(l, n);
        if (p) {
          var y, ua, Vd;
          var vb =
            null !=
            (Vd =
              null == (y = P(U).h.get(h))
                ? void 0
                : null == (ua = y.get(p))
                ? void 0
                : ua.slice(0))
              ? Vd
              : [];
          a: {
            y = new sd();
            switch (n) {
              case 1:
                sb(y, 1, td, p);
                break;
              case 2:
                sb(y, 2, td, p);
                break;
              case 3:
                sb(y, 3, td, p);
                break;
              case 6:
                sb(y, 4, td, p);
                break;
              default:
                n = void 0;
                break a;
            }
            qb(y, 5, vb);
            n = y;
          }
          if ((vb = n)) {
            var Pa;
            vb = !(null == (Pa = P(U).j[h]) || !Pa.has(p));
          }
          vb && f.push(n);
          if ((Pa = n)) {
            var ia;
            Pa = !(null == (ia = P(U).h.get(h)) || !ia.has(p));
          }
          Pa && g.push(n);
          e ||
            ((ia = P(U)),
            ia.h.has(h) || ia.h.set(h, new q.Map()),
            ia.h.get(h).has(p) || ia.h.get(h).set(p, []),
            d && ia.h.get(h).get(p).push(d));
          k[p] = l.toJSON();
        }
      });
    });
    (f.length || g.length) && Ue(c, f, g, null != d ? d : void 0);
  }
  function jf(a, b) {
    var c = af(b);
    Ka(a, function (d) {
      var e = Pe(JSON.stringify(d)),
        f = rb(e, Qe);
      (e = Xe(e, f)) && (c[e] || (c[e] = d));
    });
  }
  function kf() {
    return Ma(r(Object, 'keys').call(Object, P(U).i), function (a) {
      return Number(a);
    });
  }
  function lf(a) {
    Qa(P(U).m, a) || gf(af(4), a);
  }
  function V(a, b, c) {
    c.hasOwnProperty(a) || Object.defineProperty(c, String(a), { value: b });
  }
  function W(a, b, c) {
    return b[a] || c;
  }
  function mf(a) {
    V(5, cf, a);
    V(6, df, a);
    V(7, ef, a);
    V(8, ff, a);
    V(13, jf, a);
    V(15, lf, a);
  }
  function nf(a) {
    V(
      4,
      function (b) {
        P(Ve).s = b;
      },
      a
    );
    V(
      9,
      function (b, c) {
        var d = P(Ve);
        null == d.s[3][b] && (d.s[3][b] = c);
      },
      a
    );
    V(
      10,
      function (b, c) {
        var d = P(Ve);
        null == d.s[4][b] && (d.s[4][b] = c);
      },
      a
    );
    V(
      11,
      function (b, c) {
        var d = P(Ve);
        null == d.s[5][b] && (d.s[5][b] = c);
      },
      a
    );
    V(
      14,
      function (b) {
        for (
          var c = P(Ve), d = u([3, 4, 5]), e = d.next();
          !e.done;
          e = d.next()
        )
          (e = e.value), r(Object, 'assign').call(Object, c.s[e], b[e]);
      },
      a
    );
  }
  function of(a) {
    a.hasOwnProperty('init-done') ||
      Object.defineProperty(a, 'init-done', { value: !0 });
  }
  var pf = function () {};
  pf.prototype.i = function () {};
  pf.prototype.h = function () {
    return [];
  };
  var qf = function (a, b, c) {
    a.i = function (d) {
      W(2, b, function () {
        return [];
      })(d, c);
    };
    a.h = function () {
      return W(3, b, function () {
        return [];
      })(c);
    };
  };
  function rf(a, b) {
    if (a.length && b.head) {
      a = u(a);
      for (var c = a.next(); !c.done; c = a.next())
        if ((c = c.value) && b.head) {
          var d = Rc('META');
          b.head.appendChild(d);
          d.httpEquiv = 'origin-trial';
          d.content = c;
        }
    }
  }
  function sf(a, b) {
    try {
      var c = a.split('.');
      a = z;
      for (var d = 0, e; null != a && d < c.length; d++)
        (e = a), (a = a[c[d]]), 'function' === typeof a && (a = e[c[d]]());
      var f = a;
      if (typeof f === b) return f;
    } catch (g) {}
  }
  var tf = {},
    uf = {},
    vf = {},
    wf = {},
    xf =
      ((wf[3] =
        ((tf[8] = function (a) {
          try {
            return null != wa(a);
          } catch (b) {}
        }),
        (tf[9] = function (a) {
          try {
            var b = wa(a);
          } catch (c) {
            return;
          }
          if ((a = 'function' === typeof b))
            (b = b && b.toString && b.toString()),
              (a = 'string' === typeof b && -1 != b.indexOf('[native code]'));
          return a;
        }),
        (tf[10] = function () {
          return window === window.top;
        }),
        (tf[6] = function (a) {
          return Qa(P(pf).h(), Number(a));
        }),
        (tf[27] = function (a) {
          a = sf(a, 'boolean');
          return void 0 !== a ? a : void 0;
        }),
        (tf[60] = function (a) {
          try {
            return !!z.document.querySelector(a);
          } catch (b) {}
        }),
        (tf[69] = function (a) {
          var b = z.document;
          b = void 0 === b ? document : b;
          var c;
          return !(
            null == (c = b.featurePolicy) ||
            !((m = c.features()), r(m, 'includes')).call(m, a)
          );
        }),
        (tf[70] = function (a) {
          var b = z.document;
          b = void 0 === b ? document : b;
          var c;
          return !(
            null == (c = b.featurePolicy) ||
            !((m = c.allowedFeatures()), r(m, 'includes')).call(m, a)
          );
        }),
        tf)),
      (wf[4] =
        ((uf[3] = function () {
          return Pc();
        }),
        (uf[6] = function (a) {
          a = sf(a, 'number');
          return void 0 !== a ? a : void 0;
        }),
        uf)),
      (wf[5] =
        ((vf[2] = function () {
          return window.location.href;
        }),
        (vf[3] = function () {
          try {
            return window.top.location.hash;
          } catch (a) {
            return '';
          }
        }),
        (vf[4] = function (a) {
          a = sf(a, 'string');
          return void 0 !== a ? a : void 0;
        }),
        vf)),
      wf);
  function yf() {
    var a = void 0 === a ? z : a;
    return a.ggeac || (a.ggeac = {});
  }
  var Af = function (a) {
    O.call(this, a, -1, zf);
  };
  x(Af, O);
  Af.prototype.getId = function () {
    return M(F(this, 1), 0);
  };
  var zf = [2];
  var Cf = function (a) {
    O.call(this, a, -1, Bf);
  };
  x(Cf, O);
  var Bf = [2];
  var Ef = function (a) {
    O.call(this, a, -1, Df);
  };
  x(Ef, O);
  var Df = [2];
  var Ff = function (a) {
    O.call(this, a);
  };
  x(Ff, O);
  var Hf = function (a) {
    O.call(this, a, -1, Gf);
  };
  x(Hf, O);
  var Gf = [1, 4, 2, 3];
  var If = [12, 13, 20],
    Jf = function () {
      this.i = [];
      this.A = null;
      this.j = {};
      this.L = !1;
      this.K = {};
      this.F = {};
      this.h = {};
    },
    Kf = function (a, b, c, d, e) {
      var f = void 0 === e ? {} : e,
        g = void 0 === f.L ? !1 : f.L;
      e = void 0 === f.F ? [] : f.F;
      f = void 0 === f.K ? {} : f.K;
      a.i = b.slice();
      a.A = d;
      a.j = {};
      a.L = g;
      a.K = f;
      b = {};
      a.F = ((b[c] = []), (b[4] = []), b);
      a.h = {};
      (c = Ae()) &&
        Ka(c.split(',') || [], function (h) {
          (h = Number(h)) && (a.h[h] = !0);
        });
      Ka(e, function (h) {
        a.h[h] = !0;
      });
      return a;
    },
    Of = function (a, b, c) {
      var d = [],
        e = Lf(a.i, b),
        f;
      if ((f = 9 !== b)) a.j[b] ? (f = !0) : ((a.j[b] = !0), (f = !1));
      if (f) return Te(a.A, b, c, d, [], 4), d;
      if (!e.length) return Te(a.A, b, c, d, [], 3), d;
      var g = Qa(If, b),
        h = [];
      Ka(e, function (k) {
        var l = new id();
        if ((k = Mf(a, k, c, l)))
          0 !== rb(l, jd) && h.push(l),
            (l = k.getId()),
            d.push(l),
            Nf(a, l, g ? 4 : c),
            (k = L(k, Oe, 2)) && (g ? hf(k, kf(), a.A, l) : hf(k, [c], a.A, l));
      });
      Te(a.A, b, c, d, h, 1);
      return d;
    },
    Nf = function (a, b, c) {
      a.F[c] || (a.F[c] = []);
      a = a.F[c];
      Qa(a, b) || a.push(b);
    },
    Pf = function (a, b) {
      a.i.push.apply(
        a.i,
        v(
          La(
            Ma(b, function (c) {
              return new Ef(c);
            }),
            function (c) {
              return !Qa(If, N(c, 1));
            }
          )
        )
      );
    },
    Mf = function (a, b, c, d) {
      var e = P(Ve).s;
      if (!Je(K(b, Ce, 3), e)) return null;
      var f = L(b, Af, 2),
        g = N(b, 6);
      if (g) {
        sb(d, 1, jd, g);
        f = e[4];
        switch (c) {
          case 2:
            var h = f[8];
            break;
          case 1:
            h = f[7];
        }
        c = void 0;
        if (h)
          try {
            (c = h(g)), I(d, 3, c, 0);
          } catch (k) {}
        return (b = Qf(b, c)) ? Rf(a, [b], 1) : null;
      }
      if ((g = N(b, 10))) {
        sb(d, 2, jd, g);
        h = null;
        switch (c) {
          case 1:
            h = e[4][9];
            break;
          case 2:
            h = e[4][10];
            break;
          default:
            return null;
        }
        c = h ? h(String(g)) : void 0;
        if (void 0 === c && 1 === N(b, 11)) return null;
        void 0 !== c && I(d, 3, c, 0);
        return (b = Qf(b, c)) ? Rf(a, [b], 1) : null;
      }
      d = e
        ? La(f, function (k) {
            return Je(K(k, Ce, 3), e);
          })
        : f;
      if (!d.length) return null;
      c = d.length * M(F(b, 1), 0);
      return (b = N(b, 4)) ? Sf(a, b, c, d) : Rf(a, d, c / 1e3);
    },
    Sf = function (a, b, c, d) {
      var e = null != a.K[b] ? a.K[b] : 1e3;
      if (0 >= e) return null;
      d = Rf(a, d, c / e);
      a.K[b] = d ? 0 : e - c;
      return d;
    },
    Rf = function (a, b, c) {
      var d = a.h,
        e = Na(b, function (f) {
          return !!d[f.getId()];
        });
      return e ? e : a.L ? null : Jc(b, c);
    },
    Tf = function (a, b) {
      V(
        1,
        function (c) {
          a.h[c] = !0;
        },
        b
      );
      V(
        2,
        function (c, d) {
          return Of(a, c, d);
        },
        b
      );
      V(
        3,
        function (c) {
          return (a.F[c] || []).concat(a.F[4]);
        },
        b
      );
      V(
        12,
        function (c) {
          return void Pf(a, c);
        },
        b
      );
      V(
        16,
        function (c, d) {
          return void Nf(a, c, d);
        },
        b
      );
    };
  function Lf(a, b) {
    return (
      ((a = Na(a, function (c) {
        return N(c, 1) === b;
      })) &&
        L(a, Cf, 2)) ||
      []
    );
  }
  function Qf(a, b) {
    var c = L(a, Af, 2),
      d = c.length,
      e = M(F(a, 8), 0);
    a = d * M(F(a, 1), 0) - 1;
    b = void 0 !== b ? b : Math.floor(1e3 * Ic());
    d = (b - e) % d;
    if (b < e || b - e - d >= a) return null;
    c = c[d];
    e = P(Ve).s;
    return !c || (e && !Je(K(c, Ce, 3), e)) ? null : c;
  }
  var Uf = function () {
    var a = {};
    this.i = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.h = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.u = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.j = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.m = function () {};
  };
  function Vf(a) {
    return P(Uf).i(a.h, a.defaultValue);
  }
  var Wf = function () {
      this.h = function () {};
    },
    Xf = function (a, b) {
      a.h = W(14, b, function () {});
    };
  function Yf(a) {
    P(Wf).h(a);
  }
  var Zf, $f, ag, bg, cg, dg;
  function eg(a) {
    var b = a.qa,
      c = a.s,
      d = a.Ka,
      e = void 0 === a.oa ? yf() : a.oa,
      f = void 0 === a.ja ? 0 : a.ja;
    a =
      void 0 === a.A
        ? new Re(
            null != (bg = null == (Zf = K(b, Ff, 5)) ? void 0 : M(F(Zf, 2), 0))
              ? bg
              : 0,
            null != (cg = null == ($f = K(b, Ff, 5)) ? void 0 : M(F($f, 4), 0))
              ? cg
              : 0,
            null != (dg = null == (ag = K(b, Ff, 5)) ? void 0 : Ab(ag, 3))
              ? dg
              : !1
          )
        : a.A;
    e.hasOwnProperty('init-done')
      ? (W(12, e, function () {})(
          Ma(L(b, Ef, 2), function (g) {
            return g.toJSON();
          })
        ),
        W(13, e, function () {})(
          Ma(L(b, Oe, 1), function (g) {
            return g.toJSON();
          }),
          f
        ),
        c && W(14, e, function () {})(c),
        fg(f, e))
      : (Tf(Kf(P(Jf), L(b, Ef, 2), f, a, d), e),
        mf(e),
        nf(e),
        of(e),
        fg(f, e),
        hf(L(b, Oe, 1), [f], a, void 0, !0),
        (We = We || !(!d || !d.La)),
        Yf(xf),
        c && Yf(c));
  }
  function fg(a, b) {
    var c = (b = void 0 === b ? yf() : b);
    qf(P(pf), c, a);
    gg(b, a);
    a = b;
    Xf(P(Wf), a);
    P(Uf).m();
  }
  function gg(a, b) {
    var c = P(Uf);
    c.i = function (d, e) {
      return W(5, a, function () {
        return !1;
      })(d, e, b);
    };
    c.h = function (d, e) {
      return W(6, a, function () {
        return 0;
      })(d, e, b);
    };
    c.u = function (d, e) {
      return W(7, a, function () {
        return '';
      })(d, e, b);
    };
    c.j = function (d, e) {
      return W(8, a, function () {
        return [];
      })(d, e, b);
    };
    c.m = function () {
      W(15, a, function () {})(b);
    };
  }
  var hg = ja(['https://pagead2.googlesyndication.com/pagead/js/err_rep.js']),
    ig = function () {
      var a = void 0 === a ? 'jserror' : a;
      var b = void 0 === b ? 0.01 : b;
      var c = void 0 === c ? Sc(hg) : c;
      this.j = a;
      this.i = b;
      this.h = c;
    };
  function jg(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Rc('IMG', a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            h = Array.prototype.indexOf.call(g, e, void 0);
          0 <= h && Array.prototype.splice.call(g, h, 1);
        }
        e.removeEventListener && e.removeEventListener('load', f, !1);
        e.removeEventListener && e.removeEventListener('error', f, !1);
      };
      Yb(e, 'load', f);
      Yb(e, 'error', f);
    }
    d && (e.attributionsrc = '');
    e.src = b;
    a.google_image_requests.push(e);
  }
  var lg = function (a) {
      var b = void 0 === b ? !1 : b;
      var c =
        'https://pagead2.googlesyndication.com/pagead/gen_204?id=gpt_inv_ver';
      Kc(a, function (d, e) {
        d && (c += '&' + e + '=' + encodeURIComponent(d));
      });
      kg(c, b);
    },
    kg = function (a, b) {
      var c = window;
      b = void 0 === b ? !1 : b;
      var d = void 0 === d ? !1 : d;
      c.fetch
        ? ((b = {
            keepalive: !0,
            credentials: 'include',
            redirect: 'follow',
            method: 'get',
            mode: 'no-cors',
          }),
          d &&
            ((b.mode = 'cors'),
            (b.headers = { 'Attribution-Reporting-Eligible': 'event-source' })),
          c.fetch(a, b))
        : jg(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var mg = Q('gpt/pubads_impl_'),
    ng = Q('pagead/managed/js/gpt/');
  function og(a) {
    a = void 0 === a ? z : a;
    return (a = a.performance) && a.now ? a.now() : null;
  }
  var pg = function (a, b) {
      b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
      2048 > b.length && b.push(a);
    },
    qg = function (a, b) {
      var c = og(b);
      c && pg({ label: a, type: 9, value: c }, b);
    },
    rg = function (a, b, c) {
      var d = !1;
      d = void 0 === d ? !1 : d;
      var e = window,
        f = 'undefined' !== typeof queueMicrotask;
      return function () {
        d &&
          f &&
          queueMicrotask(function () {
            e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
            e.google_rum_task_id_counter += 1;
          });
        var g = og(),
          h = 3;
        try {
          var k = b.apply(this, arguments);
        } catch (l) {
          h = 13;
          if (!c) throw l;
          c(a, l);
        } finally {
          e.google_measure_js_timing &&
            g &&
            pg(
              r(Object, 'assign').call(
                Object,
                {},
                {
                  label: a.toString(),
                  value: g,
                  duration: (og() || 0) - g,
                  type: h,
                },
                d &&
                  f && {
                    taskId: (e.google_rum_task_id_counter =
                      e.google_rum_task_id_counter || 1),
                  }
              ),
              e
            );
        }
        return k;
      };
    },
    sg = function (a, b) {
      return rg(a, b, function (c, d) {
        var e = new ig();
        var f = void 0 === f ? e.i : f;
        var g = void 0 === g ? e.j : g;
        Math.random() > f ||
          ((d.error && d.meta && d.id) ||
            (d = new ye(d, { context: c, id: g })),
          (z.google_js_errors = z.google_js_errors || []),
          z.google_js_errors.push(d),
          z.error_rep_loaded ||
            ((f = z.document),
            (c = Rc('SCRIPT', f)),
            (c.src = cc(e.h)),
            Bc(c),
            (e = f.getElementsByTagName('script')[0]) &&
              e.parentNode &&
              e.parentNode.insertBefore(c, e),
            (z.error_rep_loaded = !0)));
      });
    };
  function X(a, b) {
    return null == b ? '&' + a + '=null' : '&' + a + '=' + Math.floor(b);
  }
  function tg(a, b) {
    return '&' + a + '=' + b.toFixed(3);
  }
  function ug() {
    var a = new q.Set();
    var b = void 0 === b ? window : b;
    b = b.googletag;
    b = (null == b ? 0 : b.apiReady) ? b : void 0;
    try {
      if (!b) return a;
      for (
        var c = b.pubads(), d = u(c.getSlots()), e = d.next();
        !e.done;
        e = d.next()
      )
        a.add(e.value.getSlotId().getDomId());
    } catch (f) {}
    return a;
  }
  function vg(a) {
    a = a.id;
    return (
      null != a &&
      (ug().has(a) ||
        r(a, 'startsWith').call(a, 'google_ads_iframe_') ||
        r(a, 'startsWith').call(a, 'aswift'))
    );
  }
  function wg(a, b, c) {
    if (!a.sources) return !1;
    switch (xg(a)) {
      case 2:
        var d = yg(a);
        if (d)
          return c.some(function (f) {
            return zg(d, f);
          });
      case 1:
        var e = Ag(a);
        if (e)
          return b.some(function (f) {
            return zg(e, f);
          });
    }
    return !1;
  }
  function xg(a) {
    if (!a.sources) return 0;
    a = a.sources.filter(function (b) {
      return b.previousRect && b.currentRect;
    });
    if (1 <= a.length) {
      a = a[0];
      if (a.previousRect.top < a.currentRect.top) return 2;
      if (a.previousRect.top > a.currentRect.top) return 1;
    }
    return 0;
  }
  function Ag(a) {
    return Bg(a, function (b) {
      return b.currentRect;
    });
  }
  function yg(a) {
    return Bg(a, function (b) {
      return b.previousRect;
    });
  }
  function Bg(a, b) {
    return a.sources.reduce(function (c, d) {
      d = b(d);
      return c
        ? d && 0 !== d.width * d.height
          ? d.top < c.top
            ? d
            : c
          : c
        : d;
    }, null);
  }
  var Cg = function () {
    Jd.call(this);
    this.i = this.h = this.O = this.N = this.I = 0;
    this.fa = this.ca = Number.NEGATIVE_INFINITY;
    this.Y =
      this.aa =
      this.ba =
      this.da =
      this.ia =
      this.u =
      this.ha =
      this.S =
        0;
    this.Z = !1;
    this.P = this.M = this.H = 0;
    var a = document.querySelector('[data-google-query-id]');
    this.ga = a ? a.getAttribute('data-google-query-id') : null;
    this.R = null;
    this.ea = !1;
    this.X = function () {};
  };
  x(Cg, Jd);
  var Eg = function () {
    var a = new Cg();
    if (Vf(Wd)) {
      var b = window;
      if (!b.google_plmetrics && window.PerformanceObserver) {
        b.google_plmetrics = !0;
        b = u([
          'layout-shift',
          'largest-contentful-paint',
          'first-input',
          'longtask',
        ]);
        for (var c = b.next(); !c.done; c = b.next())
          (c = c.value), a.A().observe({ type: c, buffered: !0 });
        Dg(a);
      }
    }
  };
  Cg.prototype.A = function () {
    var a = this;
    this.R ||
      (this.R = new PerformanceObserver(
        sg(640, function (b) {
          var c = Fg !== window.scrollX || Gg !== window.scrollY ? [] : Hg,
            d = Ig();
          b = u(b.getEntries());
          for (var e = b.next(); !e.done; e = b.next())
            switch (((e = e.value), e.entryType)) {
              case 'layout-shift':
                if (!e.hadRecentInput) {
                  a.I += Number(e.value);
                  Number(e.value) > a.N && (a.N = Number(e.value));
                  a.O += 1;
                  var f = wg(e, c, d);
                  f && ((a.u += e.value), a.da++);
                  if (5e3 < e.startTime - a.ca || 1e3 < e.startTime - a.fa)
                    (a.ca = e.startTime), (a.h = 0), (a.i = 0);
                  a.fa = e.startTime;
                  a.h += e.value;
                  f && (a.i += e.value);
                  a.h > a.S &&
                    ((a.S = a.h),
                    (a.ia = a.i),
                    (a.ha = e.startTime + e.duration));
                }
                break;
              case 'largest-contentful-paint':
                a.ba = Math.floor(e.renderTime || e.loadTime);
                a.aa = e.size;
                break;
              case 'first-input':
                a.Y = Number((e.processingStart - e.startTime).toFixed(3));
                a.Z = !0;
                break;
              case 'longtask':
                (e = Math.max(0, e.duration - 50)),
                  (a.H += e),
                  (a.M = Math.max(a.M, e)),
                  (a.P += 1);
            }
        })
      ));
    return this.R;
  };
  var Dg = function (a) {
    var b = sg(641, function () {
        var d = document;
        2 ==
          (d.prerendering
            ? 3
            : { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
                d.visibilityState ||
                  d.webkitVisibilityState ||
                  d.mozVisibilityState ||
                  ''
              ] || 0) && Jg(a);
      }),
      c = sg(641, function () {
        return void Jg(a);
      });
    document.addEventListener('visibilitychange', b);
    document.addEventListener('pagehide', c);
    a.X = function () {
      document.removeEventListener('visibilitychange', b);
      document.removeEventListener('pagehide', c);
      a.A().disconnect();
    };
  };
  Cg.prototype.W = function () {
    Jd.prototype.W.call(this);
    this.X();
  };
  var Jg = function (a) {
      if (!a.ea) {
        a.ea = !0;
        a.A().takeRecords();
        var b =
          'https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics';
        window.LayoutShift &&
          ((b += tg('cls', a.I)),
          (b += tg('mls', a.N)),
          (b += X('nls', a.O)),
          window.LayoutShiftAttribution &&
            ((b += tg('cas', a.u)), (b += X('nas', a.da))),
          (b += tg('wls', a.S)),
          (b += tg('tls', a.ha)),
          window.LayoutShiftAttribution && (b += tg('was', a.ia)));
        window.LargestContentfulPaint &&
          ((b += X('lcp', a.ba)), (b += X('lcps', a.aa)));
        window.PerformanceEventTiming && a.Z && (b += X('fid', a.Y));
        window.PerformanceLongTaskTiming &&
          ((b += X('cbt', a.H)), (b += X('mbt', a.M)), (b += X('nlt', a.P)));
        for (
          var c = 0,
            d = u(document.getElementsByTagName('iframe')),
            e = d.next();
          !e.done;
          e = d.next()
        )
          vg(e.value) && c++;
        b += X('nif', c);
        c = window.google_unique_id;
        b += X('ifi', 'number' === typeof c ? c : 0);
        c = P(pf).h();
        b += '&eid=' + encodeURIComponent(c.join());
        b += '&top=' + (z === z.top ? 1 : 0);
        b += a.ga ? '&qqid=' + encodeURIComponent(a.ga) : X('pvsid', Qc(z));
        window.googletag && (b += '&gpt=1');
        window.fetch(b, {
          keepalive: !0,
          credentials: 'include',
          redirect: 'follow',
          method: 'get',
          mode: 'no-cors',
        });
        a.j || ((a.j = !0), a.W());
      }
    },
    zg = function (a, b) {
      var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
      a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
      return 0 >= c || 0 >= a
        ? !1
        : 50 <= (100 * c * a) / ((b.right - b.left) * (b.bottom - b.top));
    },
    Ig = function () {
      var a = [].concat(v(document.getElementsByTagName('iframe'))).filter(vg),
        b = []
          .concat(v(ug()))
          .map(function (c) {
            return document.getElementById(c);
          })
          .filter(function (c) {
            return null !== c;
          });
      Fg = window.scrollX;
      Gg = window.scrollY;
      return (Hg = [].concat(v(a), v(b)).map(function (c) {
        return c.getBoundingClientRect();
      }));
    },
    Fg = void 0,
    Gg = void 0,
    Hg = [];
  var Kg = function (a) {
    O.call(this, a);
  };
  x(Kg, O);
  Kg.prototype.getVersion = function () {
    return zb(this, 2);
  };
  var Mg = function (a) {
    O.call(this, a, -1, Lg);
  };
  x(Mg, O);
  var Ng = function (a, b) {
      return H(a, 2, b);
    },
    Og = function (a, b) {
      return H(a, 3, b);
    },
    Pg = function (a, b) {
      return H(a, 4, b);
    },
    Qg = function (a, b) {
      return H(a, 5, b);
    },
    Rg = function (a, b) {
      return H(a, 9, b);
    },
    Sg = function (a, b) {
      return yb(a, 10, b);
    },
    Tg = function (a, b) {
      return H(a, 11, b);
    },
    Ug = function (a, b) {
      return H(a, 1, b);
    },
    Vg = function (a, b) {
      return H(a, 7, b);
    },
    Lg = [10, 6];
  var Wg =
    'platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64'.split(
      ' '
    );
  function Xg(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : (a.google_tag_data = {});
  }
  function Yg(a) {
    var b, c;
    return (
      'function' ===
      typeof (null == (b = a.navigator)
        ? void 0
        : null == (c = b.userAgentData)
        ? void 0
        : c.getHighEntropyValues)
    );
  }
  function Zg(a) {
    if (!Yg(a)) return null;
    var b = Xg(a);
    if (b.uach_promise) return b.uach_promise;
    a = a.navigator.userAgentData.getHighEntropyValues(Wg).then(function (c) {
      null != b.uach || (b.uach = c);
      return c;
    });
    return (b.uach_promise = a);
  }
  function $g(a) {
    var b;
    return Tg(
      Sg(
        Qg(
          Ng(
            Ug(
              Pg(
                Vg(
                  Rg(Og(new Mg(), a.architecture || ''), a.bitness || ''),
                  a.mobile || !1
                ),
                a.model || ''
              ),
              a.platform || ''
            ),
            a.platformVersion || ''
          ),
          a.uaFullVersion || ''
        ),
        (null == (b = a.fullVersionList)
          ? void 0
          : b.map(function (c) {
              var d = new Kg();
              d = H(d, 1, c.brand);
              return H(d, 2, c.version);
            })) || []
      ),
      a.wow64 || !1
    );
  }
  function ah(a) {
    var b, c;
    return null !=
      (c =
        null == (b = Zg(a))
          ? void 0
          : b.then(function (d) {
              return $g(d);
            }))
      ? c
      : null;
  }
  var Y = {},
    bh =
      ((Y[23] = 0.001),
      (Y[253] = !1),
      (Y[246] = []),
      (Y[150] = '.google.co.in'),
      (Y[221] = /^true$/.test('')),
      (Y[36] = /^true$/.test('false')),
      (Y[172] = null),
      (Y[260] = void 0),
      (Y[251] = null),
      Y),
    Rb = function () {
      this.h = !1;
    };
  function ch(a) {
    P(Rb).h = !0;
    return bh[a];
  }
  function dh(a, b) {
    P(Rb).h = !0;
    bh[a] = b;
  }
  var eh =
    /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js|\/pagead\/managed\/js\/gpt\.js)/;
  function fh(a, b, c) {
    var d = a ? !eh.test(a.src) : !0,
      e = {},
      f = {},
      g = {};
    return (
      (g[3] =
        ((e[3] = function () {
          return !d;
        }),
        (e[59] = function () {
          var h = ra.apply(0, arguments),
            k = r(h, 'includes'),
            l = String,
            n;
          var p = void 0 === p ? window : p;
          var y;
          p =
            null !=
            (y =
              null == (n = yc(p.location.href.match(xc)[3] || null))
                ? void 0
                : n.split('.'))
              ? y
              : [];
          n =
            2 > p.length
              ? null
              : 'uk' === p[p.length - 1]
              ? 3 > p.length
                ? null
                : Lc(p.splice(p.length - 3).join('.'))
              : Lc(p.splice(p.length - 2).join('.'));
          return k.call(h, l(n));
        }),
        (e[61] = function () {
          return c;
        }),
        (e[63] = function () {
          return c || '.google.ch' === ch(150);
        }),
        e)),
      (g[4] =
        ((f[1] = function () {
          var h;
          return null != (h = Oc('{{MOD}}')) ? h : -1;
        }),
        (f[4] = function () {
          return Oc('7') || 0;
        }),
        (f[12] = function () {
          if (a) {
            var h = RegExp('[?&]gmeid=([^&]*)').exec(a.src);
            var k;
            h = h ? (null != (k = Oc(h[1])) ? k : -1) : -1;
          } else h = -1;
          return h;
        }),
        (f[13] = function () {
          return b;
        }),
        f)),
      (g[5] = {}),
      g
    );
  }
  function gh(a, b, c, d) {
    var e = new Hf(ch(246));
    if (!L(e, Oe, 1).length && L(a, Oe, 1).length) {
      var f = L(a, Oe, 1);
      yb(e, 1, f);
    }
    !L(e, Ef, 2).length &&
      L(a, Ef, 2).length &&
      ((f = L(a, Ef, 2)), yb(e, 2, f));
    void 0 === tb(e, Ff, 5, !1) &&
      void 0 !== tb(a, Ff, 5, !1) &&
      ((a = K(a, Ff, 5)), wb(e, 5, a));
    eg({ qa: e, s: fh(b, c, d), ja: 2 });
  }
  var hh = function (a) {
    O.call(this, a);
  };
  x(hh, O);
  var jh = function () {
      return [].concat(v(r(ih, 'values').call(ih))).reduce(function (a, b) {
        return a + b;
      }, 0);
    },
    ih = new q.Map();
  function kh() {
    var a;
    return null != (a = z.googletag) ? a : (z.googletag = { cmd: [] });
  }
  function lh(a, b) {
    var c = kh();
    c.hasOwnProperty(a) || (c[a] = b);
  }
  function mh() {
    var a = nh,
      b = kh(),
      c,
      d = null != (c = b.fifWin) ? c : window,
      e = d.document;
    c = b.fifWin ? window : d;
    var f = oh(),
      g = new hh();
    Qb();
    r(Object, 'assign').call(Object, bh, b._vars_);
    b._vars_ = bh;
    g &&
      (Ab(g, 3) && dh(36, !0),
      Ab(g, 5) && dh(221, !0),
      zb(g, 6) && dh(150, zb(g, 6)));
    lh('_loaded_', !0);
    var h = ph(f, g);
    lh('cmd', []);
    var k;
    f = null != (k = qh(e)) ? k : rh(e);
    sh(
      void 0 !== tb(g, Hf, 1, !1) ? K(g, Hf, 1) : new Hf(a),
      d,
      f,
      M(F(g, 2), 0),
      Ab(g, 5)
    );
    try {
      Eg();
    } catch (ua) {}
    qg('1', d);
    a = th(h, f);
    d = !1;
    if (!uh(e)) {
      k = 'gpt-impl-' + Math.random();
      try {
        Cc(e, rc(a, { id: k, nonce: vc() }));
      } catch (ua) {}
      e.getElementById(k) && (Vf(Pd) ? (d = !0) : (b._loadStarted_ = !0));
    }
    if (Vf(Pd) ? !d : !b._loadStarted_) {
      var l = Rc('SCRIPT');
      l.src = cc(a);
      Bc(l);
      l.async = !0;
      e = b.fifWin ? c.document : e;
      a = e.body;
      d = e.documentElement;
      var n,
        p,
        y = null != (p = null != (n = e.head) ? n : a) ? p : d;
      'complete' !== c.document.readyState && b.fifWin
        ? Yb(c, 'load', function () {
            return void y.appendChild(l);
          })
        : y.appendChild(l);
      Vf(Pd) || (b._loadStarted_ = !0);
    }
    c === c.top && ve(c);
    Fc(c) === (Dc(c.top) ? c.top : null) && vh(c.top, f);
  }
  function oh() {
    var a = Number('2023021401');
    1 > a || Math.floor(a) !== a
      ? (lg({ v: '2023021401' }), (a = '1'))
      : (a = '2023021401');
    return { ra: a, U: '', ua: new Md(), va: 0.01 > Ic(), pa: 100 };
  }
  function ph(a, b) {
    var c = Q('2023021401');
    var d = a.U;
    /m\d+/.test(d)
      ? (d = Number(d.substring(1)))
      : (d && lg({ mjsv: d }), (d = void 0));
    return r(Object, 'assign').call(Object, {}, a, {
      ka: c,
      Ma: d,
      sa: Q(''),
      Na: Qc(window),
      Qa: b,
    });
  }
  function qh(a) {
    return (a = a.currentScript) ? a : null;
  }
  function rh(a) {
    var b;
    a = u(null != (b = a.scripts) ? b : []);
    for (b = a.next(); !b.done; b = a.next())
      if (((b = b.value), r(b.src, 'includes').call(b.src, '/tag/js/gpt')))
        return b;
    return null;
  }
  function th(a, b) {
    b = wh(b)
      ? Q('https://pagead2.googlesyndication.com/')
      : Q('https://securepubads.g.doubleclick.net/');
    a = a.U
      ? fc([b, ng, a.sa, Q('/pubads_impl.js')])
      : Vf(Qd)
      ? fc([b, ng, Q('m'), a.ka, Q('/pubads_impl.js')])
      : fc([b, mg, a.ka, Q('.js')]);
    b = {};
    var c = P(Uf).h(Td.h, Td.defaultValue),
      d = P(Uf).h(Rd.h, Rd.defaultValue);
    c && (b.cb = c);
    d && (b.mcb = d);
    return r(Object, 'keys').call(Object, b).length ? ec(a, b) : a;
  }
  function sh(a, b, c, d, e) {
    dh(172, c);
    gh(a, c, d, e);
    P(pf).i(12);
    P(pf).i(5);
    Vf(Sd) ||
      ((a = ah(b)) &&
        a.then(function (f) {
          a: {
            gb = !0;
            try {
              var g = JSON.stringify(f.toJSON(), Ob);
              break a;
            } finally {
              gb = !1;
            }
            g = void 0;
          }
          return void dh(251, g);
        }));
    rf(P(Uf).j(Ud.h, Ud.defaultValue), b.document);
  }
  function uh(a) {
    var b = qh(a);
    return (
      'complete' === a.readyState ||
      'loaded' === a.readyState ||
      !(null == b || !b.async)
    );
  }
  var xh = function () {
    this.h = [];
  };
  xh.prototype.addListener = function (a) {
    void 0 !== this.i || this.error ? a(this.i, this.error) : this.h.push(a);
  };
  var yh = function (a, b, c) {
    a.i = b;
    a.error = c;
    for (var d = u(a.h), e = d.next(); !e.done; e = d.next())
      (e = e.value), e(b, c);
    a.h.length = 0;
  };
  function vh(a, b) {
    var c = new xh();
    ch(260);
    dh(260, function (e) {
      return void c.addListener(e);
    });
    if ((a = zh(a, b))) {
      var d = new q.globalThis.XMLHttpRequest();
      d.open('GET', a.toString(), !0);
      d.withCredentials = !1;
      d.onload = function () {
        300 > d.status
          ? (qg('13', window), yh(c, 204 === d.status ? '' : d.responseText))
          : yh(c, void 0, new q.globalThis.Error('resp:' + d.status));
      };
      d.onerror = function () {
        return void yh(
          c,
          void 0,
          new q.globalThis.Error('s:' + d.status + ' rs:' + d.readyState)
        );
      };
      d.send();
    } else
      yh(c, void 0, new q.globalThis.Error('no provided or inferred data'));
  }
  function zh(a, b) {
    if (!b) return null;
    a = a.location.host;
    var c = Ac(b.src, 'domain'),
      d = Ac(b.src, 'network-code');
    if (!a && !c && !d) return null;
    b = wh(b)
      ? Q('https://pagead2.googlesyndication.com')
      : Q('https://securepubads.g.doubleclick.net');
    return ec(fc([b, Q('/pagead/ppub_config')]), {
      ippd: a,
      pppd: c,
      pppnc: d,
    });
  }
  function wh(a) {
    return (
      !(null == a || !a.src) &&
      'pagead2.googlesyndication.com' === yc(a.src.match(xc)[3] || null)
    );
  }
  var nh;
  a: {
    try {
      if (Array.isArray(E)) {
        nh = E;
        break a;
      }
    } catch (a) {}
    nh = [];
  }
  try {
    mh();
  } catch (a) {
    try {
      var Ah = oh();
      if (Ah.va) {
        var Bh,
          Z = a.error && a.meta && a.id ? a.error : a,
          Ch,
          Dh = new Fd(),
          Eh = new Ed();
        try {
          var Fh = Qc(window);
          I(Eh, 1, Fh, 0);
        } catch (b) {}
        try {
          var Gh = P(pf).h();
          qb(Eh, 2, Gh);
        } catch (b) {}
        try {
          I(Eh, 3, window.document.URL, '');
        } catch (b) {}
        Ch = wb(Dh, 2, Eh);
        var Hh,
          Ih = new Cd();
        Hh = I(Ih, 1, 420, 0);
        try {
          var Jh = xe(null == Z ? void 0 : Z.name) ? Z.name : 'Unknown error';
          I(Hh, 2, Jh, '');
        } catch (b) {}
        try {
          var Kh = xe(null == Z ? void 0 : Z.message)
            ? Z.message
            : 'Caught ' + Z;
          I(Hh, 3, Kh, '');
        } catch (b) {}
        try {
          var Lh = xe(null == Z ? void 0 : Z.stack) ? Z.stack : Error().stack;
          Lh && pb(Hh, 4, Lh.split(/\n\s*/));
        } catch (b) {}
        Bh = wb(Ch, 1, Hh);
        var Mh = new Ad();
        try {
          I(Mh, 1, Ah.U || Ah.ra, '');
        } catch (b) {}
        try {
          var Nh = jh();
          I(Mh, 2, Nh, 0);
        } catch (b) {}
        try {
          var Oh = [].concat(v(r(ih, 'keys').call(ih)));
          pb(Mh, 3, Oh);
        } catch (b) {}
        xb(Bh, 4, Gd, Mh);
        I(Bh, 5, Ah.pa, 0);
        Hd(Ah.ua, Bh);
      }
    } catch (b) {}
  }
}).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, [
  [
    [null, 472785970, null, [null, 500]],
    [447540096, null, null, [1]],
    [null, 7, null, [null, 0.1]],
    [null, 448338836, null, [null, 0.01]],
    [null, 408380992, null, [null, 0.01]],
    [null, 377289019, null, [null, 10000]],
    [499549170, null, null, [1]],
    [null, 529, null, [null, 20]],
    [488999963, null, null, [1]],
    [492198798, null, null, [1]],
    [null, 447000223, null, [null, 0.01]],
    [360245597, null, null, [1]],
    [null, 494, null, [null, 10000]],
    [505725833, null, null, [1]],
    [486179632, null, null, [1]],
    [501943234, null, null, [1]],
    [504138873, null, null, [1]],
    [505115439, null, null, [1]],
    [null, 492, null, [null, 0.01]],
    [null, 398776877, null, [null, 60000]],
    [null, 374201269, null, [null, 60000]],
    [null, 371364213, null, [null, 60000]],
    [null, 376149757, null, [null, 0.0025]],
    [377936516, null, null, [1]],
    [null, null, 2, [null, null, '1-0-40']],
    [null, 506394061, null, [null, 100]],
    [null, null, null, [], null, 489],
    [392065905, null, null, null, [[[4, null, 68], [1]]]],
    [null, 360245595, null, [null, 500]],
    [null, 397316938, null, [null, 1000]],
    [440148282, null, null, [1]],
    [503991213, null, null, [1]],
    [null, null, null, [], null, 489560439],
    [null, null, null, [], null, 505762507],
    [null, 1921, null, [null, 72]],
    [null, 1920, null, [null, 12]],
    [null, 426169222, null, [null, 1000]],
    [null, 1917, null, [null, 300]],
    [null, 1916, null, [null, 0.001]],
    [490296336, null, null, [1]],
    [504077577, null, null, [1]],
    [478498873, null, null, [1]],
    [
      null,
      null,
      null,
      [
        null,
        null,
        null,
        [
          'Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==',
          'A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==',
          'A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==',
        ],
      ],
      null,
      1934,
    ],
    [1957, null, null, [1]],
    [1971, null, null, [1]],
    [null, 1972, null, []],
    [null, 1142, null, [null, 8]],
    [null, 1158, null, [null, 45]],
    [null, 501545963, null, [null, 1]],
    [null, 1195, null, [null, 1]],
    [null, 1119, null, [null, 300]],
    [null, 1193, null, [null, 100]],
    [505942137, null, null, [1]],
    [null, 501545962, null, [null, 1]],
    [null, 495583959, null, [null, -1]],
    [null, 45388309, null, [null, -1]],
    [null, 1114, null, [null, 1]],
    [null, 1116, null, [null, 300]],
    [null, 1110, null, [null, 5]],
    [null, 1111, null, [null, 5]],
    [null, 1112, null, [null, 5]],
    [null, 1108, null, [null, 1000]],
    [1203, null, null, [1]],
    [null, 1115, null, [null, -1]],
    [501545959, null, null, [1]],
    [null, 1194, null, [null, 1]],
    [500169372, null, null, [1]],
    [504834127, null, null, [1]],
    [469675169, null, null, [1]],
    [null, 469675170, null, [null, 30000]],
    [392736476, null, null, []],
    [null, null, null, [], null, 1932],
    [432938498, null, null, []],
    [485990406, null, null, []],
    [501411886, null, null, [1]],
  ],
  [
    [
      2,
      [
        [
          1,
          [[44782477], [44782478, [[45388169, null, null, [1]]]]],
          null,
          null,
          null,
          null,
          null,
          301,
          null,
          102,
        ],
        [
          100,
          [
            [31071083],
            [
              31071084,
              [
                [
                  null,
                  null,
                  null,
                  [
                    null,
                    null,
                    null,
                    [
                      '["424397508",[["pubcid.org",null,true]]]',
                      '["170737076",[["pubcid.org",null,true]]]',
                      '["24132379",[["pubcid.org",null,true]]]',
                      '["21869819039",[["pubcid.org",null,true]]]',
                      '["6556",[["pubcid.org",null,true]]]',
                      '["344101295",[["pubcid.org",null,true]]]',
                      '["62532913",[["pubcid.org",null,true]]]',
                      '["152344380",[["pubcid.org",null,true]]]',
                      '["127641337",[["pubcid.org",null,true]]]',
                    ],
                  ],
                  null,
                  471270390,
                ],
              ],
            ],
          ],
          [
            3,
            [
              [4, null, 15, null, null, null, null, ['424397508']],
              [4, null, 15, null, null, null, null, ['170737076']],
              [4, null, 15, null, null, null, null, ['24132379']],
              [4, null, 15, null, null, null, null, ['21869819039']],
              [4, null, 15, null, null, null, null, ['6556']],
              [4, null, 15, null, null, null, null, ['344101295']],
              [4, null, 15, null, null, null, null, ['62532913']],
              [4, null, 15, null, null, null, null, ['152344380']],
              [4, null, 15, null, null, null, null, ['127641337']],
            ],
          ],
          67,
        ],
        [
          10,
          [
            [31071324],
            [31071325, [[null, 363650251, null, [null, 2]]]],
            [31071326, [[null, 363650251, null, [null, 1]]]],
          ],
          null,
          null,
          null,
          null,
          null,
          1,
          null,
          102,
        ],
        [
          10,
          [[31072260], [31072261, [[null, 504377075, null, [null, 2]]]]],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          116,
        ],
        [
          10,
          [
            [31072472],
            [31072473, [[501, null, null, [1]]]],
            [
              31072474,
              [
                [441529989, null, null, [1]],
                [501, null, null, [1]],
              ],
            ],
          ],
          [
            2,
            [
              [4, null, 66],
              [6, null, null, 3, null, 2],
              [
                12,
                null,
                null,
                null,
                4,
                null,
                'Chrome\\/((?!100|101|102|103|104|105)\\d{3,})',
                ['navigator.userAgent'],
              ],
              [
                1,
                [
                  [
                    4,
                    null,
                    8,
                    null,
                    null,
                    null,
                    null,
                    ['navigator.serviceWorker.controller'],
                  ],
                ],
              ],
              [
                4,
                null,
                9,
                null,
                null,
                null,
                null,
                ['document.head.appendChild'],
              ],
            ],
          ],
          62,
        ],
        [
          1,
          [
            [31072475],
            [
              31072476,
              [
                [441529989, null, null, [1]],
                [501, null, null, [1]],
              ],
            ],
          ],
          [
            2,
            [
              [4, null, 66],
              [
                12,
                null,
                null,
                null,
                4,
                null,
                'Chrome\\/((?!100|101|102|103|104|105)\\d{3,})',
                ['navigator.userAgent'],
              ],
              [
                1,
                [
                  [
                    4,
                    null,
                    8,
                    null,
                    null,
                    null,
                    null,
                    ['navigator.serviceWorker.controller'],
                  ],
                ],
              ],
              [
                4,
                null,
                9,
                null,
                null,
                null,
                null,
                ['document.head.appendChild'],
              ],
            ],
          ],
          62,
        ],
        [
          10,
          [[44752585], [44752586, [[392065905, null, null, [1]]]]],
          null,
          41,
        ],
        [
          50,
          [[44777628], [44777629, [[392065905, null, null, []]]]],
          [4, null, 68],
          41,
        ],
      ],
    ],
    [
      4,
      [
        [
          null,
          [
            [44714449, [[null, 7, null, [null, 1]]]],
            [
              676982961,
              [
                [null, 7, null, [null, 0.4]],
                [212, null, null, [1]],
              ],
            ],
            [676982996, [[null, 7, null, [null, 1]]]],
          ],
        ],
      ],
    ],
    [
      3,
      [
        [null, [[676982960], [676982998]]],
        [
          null,
          [
            [
              1337,
              [
                [77, null, null, [1]],
                [78, null, null, [1]],
                [85, null, null, [1]],
                [80, null, null, [1]],
                [76, null, null, [1]],
                [84, null, null, [1]],
                [188, null, null, [1]],
              ],
            ],
          ],
        ],
        [
          null,
          [
            [31070955],
            [31070956],
            [31070957, [[502572081, null, null, [1]]]],
            [31072370],
            [31072371, [[502572081, null, null, [1]]]],
          ],
          [
            2,
            [
              [4, null, 70, null, null, null, null, ['run-ad-auction']],
              [
                12,
                null,
                null,
                null,
                4,
                null,
                'Chrome\\/((?!10\\d)(?!110)\\d{3,})',
                ['navigator.userAgent'],
              ],
            ],
          ],
        ],
        [1, [[31071119], [44780084]]],
        [
          1000,
          [[31071234, [[477812799, null, null, [1]]]]],
          [4, null, 8, null, null, null, null, ['sharedStorage']],
        ],
        [10, [[31071432], [31071433]]],
      ],
    ],
    [
      5,
      [
        [
          50,
          [
            [21062785, null, [4, null, 8, null, null, null, null, ['_gmptnl']]],
            [
              21062786,
              [[23, null, null, [1]]],
              [4, null, 8, null, null, null, null, ['_gmptnl']],
            ],
          ],
          [
            12,
            null,
            null,
            null,
            2,
            null,
            'today\\.line\\.me/.+/(main|article)',
          ],
          43,
        ],
        [
          900,
          [
            [
              21062812,
              [[23, null, null, [1]]],
              [4, null, 8, null, null, null, null, ['_gmptnl']],
            ],
          ],
          [
            12,
            null,
            null,
            null,
            2,
            null,
            'today\\.line\\.me/.+/(main|article)',
          ],
          43,
        ],
        [
          50,
          [
            [
              21063916,
              null,
              [
                4,
                null,
                8,
                null,
                null,
                null,
                null,
                ['webkit.messageHandlers._gmptnl'],
              ],
            ],
            [
              21063917,
              [[23, null, null, [1]]],
              [
                4,
                null,
                8,
                null,
                null,
                null,
                null,
                ['webkit.messageHandlers._gmptnl'],
              ],
            ],
          ],
          [
            12,
            null,
            null,
            null,
            2,
            null,
            'today\\.line\\.me/.+/(main|article)',
          ],
          44,
        ],
        [
          900,
          [
            [
              21064113,
              [[23, null, null, [1]]],
              [
                4,
                null,
                8,
                null,
                null,
                null,
                null,
                ['webkit.messageHandlers._gmptnl'],
              ],
            ],
          ],
          [
            12,
            null,
            null,
            null,
            2,
            null,
            'today\\.line\\.me/.+/(main|article)',
          ],
          44,
        ],
        [
          50,
          [
            [31067420],
            [31067421, [[360245597, null, null, []]]],
            [44776073],
            [44776367],
            [44779108],
            [44779905],
            [44784467],
          ],
          [
            3,
            [
              [4, null, 8, null, null, null, null, ['gmaSdk.getQueryInfo']],
              [
                4,
                null,
                8,
                null,
                null,
                null,
                null,
                ['webkit.messageHandlers.getGmaQueryInfo.postMessage'],
              ],
              [
                4,
                null,
                8,
                null,
                null,
                null,
                null,
                ['webkit.messageHandlers.getGmaSig.postMessage'],
              ],
            ],
          ],
          69,
        ],
        [
          10,
          [
            [31071361],
            [31071362, [[489217043, null, null, [1]]]],
            [31071363, [[495013820, null, null, [1]]]],
          ],
        ],
        [
          10,
          [
            [31071499, [[499996722, null, null, [1]]]],
            [
              31071500,
              [
                [485209195, null, null, [1]],
                [499996722, null, null, [1]],
              ],
            ],
          ],
        ],
        [
          1000,
          [
            [
              31071817,
              [[null, 428094087, null, [null, 31071817]]],
              [6, null, null, 12, null, 31071817],
            ],
            [
              31071818,
              [[null, 428094087, null, [null, 31071818]]],
              [6, null, null, 12, null, 31071818],
            ],
            [
              31072025,
              [[null, 428094087, null, [null, 31072025]]],
              [6, null, null, 4, null, 44],
            ],
            [
              31072026,
              [[null, 428094087, null, [null, 31072026]]],
              [6, null, null, 12, null, 31072026],
            ],
            [
              31072027,
              [[null, 428094087, null, [null, 31072027]]],
              [6, null, null, 12, null, 31072027],
            ],
          ],
        ],
        [1, [[31071991], [31071992, [[501898423, null, null, [1]]]]]],
        [100, [[31072019], [31072020, [[471855283, null, null, [1]]]]]],
        [100, [[31072028], [31072029, [[503331120, null, null, [1]]]]]],
        [
          1000,
          [
            [
              31072099,
              [[null, 24, null, [null, 31072099]]],
              [6, null, null, 13, null, 31072099],
            ],
            [
              31072100,
              [[null, 24, null, [null, 31072100]]],
              [6, null, null, 13, null, 31072100],
            ],
          ],
          [4, null, 3],
          1,
        ],
        [50, [[31072119], [31072120, [[499549170, null, null, []]]]]],
        [10, [[31072356], [31072357, [[474633725, null, null, [1]]]]]],
        [
          1000,
          [
            [
              31072461,
              [[null, 24, null, [null, 31072461]]],
              [6, null, null, 4, null, 6],
            ],
            [
              31072462,
              [[null, 24, null, [null, 31072462]]],
              [6, null, null, 4, null, 7],
            ],
          ],
          [4, null, 3],
          1,
        ],
        [
          1000,
          [
            [
              31072497,
              [[null, 24, null, [null, 31072497]]],
              [6, null, null, 4, null, 2],
            ],
            [
              31072498,
              [[null, 24, null, [null, 31072498]]],
              [6, null, null, 4, null, 3],
            ],
          ],
          [4, null, 3],
          1,
        ],
        [10, [[31072517], [31072518, [[478009624, null, null, [1]]]]]],
        [10, [[31072519], [31072520, [[508245849, null, null, [1]]]]]],
        [50, [[44761477], [44761478, [[null, 427198696, null, [null, 1]]]]]],
        [
          10,
          [[44776366], [44779256]],
          [
            3,
            [
              [4, null, 8, null, null, null, null, ['gmaSdk.getQueryInfo']],
              [
                4,
                null,
                8,
                null,
                null,
                null,
                null,
                ['webkit.messageHandlers.getGmaQueryInfo.postMessage'],
              ],
              [
                4,
                null,
                8,
                null,
                null,
                null,
                null,
                ['webkit.messageHandlers.getGmaSig.postMessage'],
              ],
            ],
          ],
          69,
        ],
      ],
    ],
    [
      25,
      [
        [
          10,
          [[31064132], [31064133, [[null, 438663674, null, [null, 1]]]]],
          [
            2,
            [
              [4, null, 68],
              [
                3,
                [
                  [
                    6,
                    null,
                    null,
                    null,
                    4,
                    null,
                    '2g',
                    ['navigator.connection.effectiveType'],
                  ],
                  [
                    6,
                    null,
                    null,
                    null,
                    4,
                    null,
                    '2g',
                    ['navigator.mozConnection.effectiveType'],
                  ],
                  [
                    6,
                    null,
                    null,
                    null,
                    4,
                    null,
                    '2g',
                    ['navigator.webkitConnection.effectiveType'],
                  ],
                ],
              ],
            ],
          ],
          40,
        ],
        [50, [[31068366], [31068367, [[null, 455645877, null, [null, 0.1]]]]]],
        [10, [[31068825], [31068826, [[null, 462420536, null, [null, 0.1]]]]]],
        [50, [[31070232], [31070233, [[476475256, null, null, [1]]]]]],
      ],
    ],
    [
      12,
      [
        [
          20,
          [[21065724], [21065725, [[203, null, null, [1]]]]],
          [4, null, 9, null, null, null, null, ['LayoutShift']],
          71,
        ],
        [
          10,
          [
            [31061690],
            [
              31061691,
              [
                [83, null, null, [1]],
                [84, null, null, [1]],
              ],
            ],
          ],
          null,
          61,
        ],
        [50, [[31071662], [31071663, [[1974, null, null, [1]]]]]],
        [50, [[31071975], [31071976, [[1975, null, null, [1]]]]]],
        [100, [[31072426], [31072427, [[50227136, null, null, [1]]]]]],
        [10, [[31072499], [31072500, [[506738119, null, null, [1]]]]]],
        [10, [[44769661], [44769662, [[1973, null, null, [1]]]]]],
      ],
    ],
    [
      13,
      [
        [
          500,
          [
            [31061692],
            [
              31061693,
              [
                [77, null, null, [1]],
                [78, null, null, [1]],
                [85, null, null, [1]],
                [80, null, null, [1]],
                [76, null, null, [1]],
              ],
            ],
          ],
          [4, null, 6, null, null, null, null, ['31061691']],
        ],
        [
          1000,
          [
            [
              31067146,
              null,
              [4, null, 9, null, null, null, null, ['document.browsingTopics']],
            ],
          ],
          [
            12,
            null,
            null,
            null,
            4,
            null,
            'Chrome/((?!100)\\d{3,})',
            ['navigator.userAgent'],
          ],
        ],
        [
          1000,
          [
            [
              31067147,
              null,
              [
                2,
                [
                  [
                    4,
                    null,
                    9,
                    null,
                    null,
                    null,
                    null,
                    ['navigator.runAdAuction'],
                  ],
                  [
                    4,
                    null,
                    9,
                    null,
                    null,
                    null,
                    null,
                    ['navigator.joinAdInterestGroup'],
                  ],
                ],
              ],
            ],
          ],
          [
            12,
            null,
            null,
            null,
            4,
            null,
            'Chrome/((?!100)\\d{3,})',
            ['navigator.userAgent'],
          ],
        ],
        [
          1000,
          [
            [
              31067148,
              null,
              [4, null, 69, null, null, null, null, ['attribution-reporting']],
            ],
          ],
          [
            12,
            null,
            null,
            null,
            4,
            null,
            'Chrome/((?!100)\\d{3,})',
            ['navigator.userAgent'],
          ],
        ],
        [
          1000,
          [
            [
              31067672,
              null,
              [
                2,
                [
                  [4, null, 69, null, null, null, null, ['browsing-topics']],
                  [
                    1,
                    [
                      [
                        4,
                        null,
                        70,
                        null,
                        null,
                        null,
                        null,
                        ['browsing-topics'],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [
            12,
            null,
            null,
            null,
            4,
            null,
            'Chrome/((?!100)\\d{3,})',
            ['navigator.userAgent'],
          ],
        ],
        [
          1000,
          [
            [
              31067673,
              null,
              [
                2,
                [
                  [
                    4,
                    null,
                    69,
                    null,
                    null,
                    null,
                    null,
                    ['join-ad-interest-group'],
                  ],
                  [
                    1,
                    [
                      [
                        4,
                        null,
                        70,
                        null,
                        null,
                        null,
                        null,
                        ['join-ad-interest-group'],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [
            12,
            null,
            null,
            null,
            4,
            null,
            'Chrome/((?!100)\\d{3,})',
            ['navigator.userAgent'],
          ],
        ],
        [
          1000,
          [
            [
              31067674,
              null,
              [
                2,
                [
                  [4, null, 69, null, null, null, null, ['run-ad-auction']],
                  [
                    1,
                    [[4, null, 70, null, null, null, null, ['run-ad-auction']]],
                  ],
                ],
              ],
            ],
          ],
          [
            12,
            null,
            null,
            null,
            4,
            null,
            'Chrome/((?!100)\\d{3,})',
            ['navigator.userAgent'],
          ],
        ],
        [
          1000,
          [
            [
              31067675,
              null,
              [
                2,
                [
                  [
                    4,
                    null,
                    69,
                    null,
                    null,
                    null,
                    null,
                    ['attribution-reporting'],
                  ],
                  [
                    1,
                    [
                      [
                        4,
                        null,
                        70,
                        null,
                        null,
                        null,
                        null,
                        ['attribution-reporting'],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [
            12,
            null,
            null,
            null,
            4,
            null,
            'Chrome/((?!100)\\d{3,})',
            ['navigator.userAgent'],
          ],
        ],
        [
          1000,
          [
            [
              31068556,
              null,
              [4, null, 8, null, null, null, null, ['sharedStorage']],
            ],
          ],
          [
            12,
            null,
            null,
            null,
            4,
            null,
            'Chrome/((?!100)\\d{3,})',
            ['navigator.userAgent'],
          ],
        ],
        [
          1000,
          [
            [
              31068557,
              null,
              [
                2,
                [
                  [4, null, 69, null, null, null, null, ['shared-storage']],
                  [
                    1,
                    [[4, null, 70, null, null, null, null, ['shared-storage']]],
                  ],
                ],
              ],
            ],
          ],
          [
            12,
            null,
            null,
            null,
            4,
            null,
            'Chrome/((?!100)\\d{3,})',
            ['navigator.userAgent'],
          ],
        ],
        [
          null,
          [
            [
              31070383,
              null,
              [4, null, 27, null, null, null, null, ['crossOriginIsolated']],
            ],
            [
              31070384,
              [[439828594, null, null, [1]]],
              [4, null, 27, null, null, null, null, ['crossOriginIsolated']],
            ],
          ],
          [
            2,
            [
              [
                12,
                null,
                null,
                null,
                4,
                null,
                'Chrome\\/((?!10\\d)\\d{3,})',
                ['navigator.userAgent'],
              ],
            ],
          ],
          70,
        ],
        [
          null,
          [
            [31070594],
            [
              31070595,
              [
                [439828594, null, null, [1]],
                [483962503, null, null, [1]],
              ],
            ],
          ],
          [
            2,
            [
              [
                12,
                null,
                null,
                null,
                4,
                null,
                'Chrome\\/((?!10\\d)\\d{3,})',
                ['navigator.userAgent'],
              ],
            ],
          ],
          70,
        ],
        [
          null,
          [
            [
              44768158,
              null,
              [4, null, 70, null, null, null, null, ['attribution-reporting']],
            ],
            [
              44768159,
              null,
              [4, null, 70, null, null, null, null, ['attribution-reporting']],
            ],
          ],
        ],
        [
          50,
          [
            [
              44776500,
              null,
              [4, null, 70, null, null, null, null, ['attribution-reporting']],
            ],
            [
              44776501,
              null,
              [4, null, 70, null, null, null, null, ['attribution-reporting']],
            ],
          ],
        ],
        [
          100,
          [
            [
              44776502,
              null,
              [4, null, 70, null, null, null, null, ['attribution-reporting']],
            ],
            [
              44776503,
              null,
              [4, null, 70, null, null, null, null, ['attribution-reporting']],
            ],
          ],
        ],
        [
          null,
          [
            [
              44783616,
              null,
              [4, null, 70, null, null, null, null, ['attribution-reporting']],
            ],
            [
              44783617,
              null,
              [4, null, 70, null, null, null, null, ['attribution-reporting']],
            ],
          ],
        ],
      ],
    ],
    [
      20,
      [
        [
          1000,
          [
            [
              31070530,
              null,
              [4, null, 27, null, null, null, null, ['crossOriginIsolated']],
            ],
          ],
          [
            2,
            [
              [
                12,
                null,
                null,
                null,
                4,
                null,
                'Chrome\\/((?!10\\d)\\d{3,})',
                ['navigator.userAgent'],
              ],
            ],
          ],
        ],
        [
          1000,
          [
            [
              31070531,
              null,
              [
                2,
                [
                  [
                    4,
                    null,
                    27,
                    null,
                    null,
                    null,
                    null,
                    ['crossOriginIsolated'],
                  ],
                  [4, null, 8, null, null, null, null, ['credentialless']],
                ],
              ],
            ],
          ],
          [
            2,
            [
              [
                12,
                null,
                null,
                null,
                4,
                null,
                'Chrome\\/((?!10\\d)\\d{3,})',
                ['navigator.userAgent'],
              ],
            ],
          ],
        ],
        [
          1000,
          [
            [
              31070532,
              null,
              [4, null, 9, null, null, null, null, ['SharedArrayBuffer']],
            ],
          ],
          [
            2,
            [
              [
                12,
                null,
                null,
                null,
                4,
                null,
                'Chrome\\/((?!10\\d)\\d{3,})',
                ['navigator.userAgent'],
              ],
            ],
          ],
        ],
      ],
    ],
  ],
  null,
  null,
  [null, 1000, 1, 1000],
]);
