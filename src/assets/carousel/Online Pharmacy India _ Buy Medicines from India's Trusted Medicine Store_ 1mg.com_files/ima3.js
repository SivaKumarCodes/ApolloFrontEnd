// Copyright 2011 Google Inc. All Rights Reserved.
(function () {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var l,
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
    fa = ca(this),
    p = function (a, b) {
      if (b)
        a: {
          var c = fa;
          a = a.split('.');
          for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e];
          }
          a = a[a.length - 1];
          d = c[a];
          b = b(d);
          b != d &&
            null != b &&
            ba(c, a, { configurable: !0, writable: !0, value: b });
        }
    };
  p('Symbol', function (a) {
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
  });
  p('Symbol.iterator', function (a) {
    if (a) return a;
    a = Symbol('Symbol.iterator');
    for (
      var b =
          'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(
            ' '
          ),
        c = 0;
      c < b.length;
      c++
    ) {
      var d = fa[b[c]];
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
  });
  var ha = function (a) {
      a = { next: a };
      a[Symbol.iterator] = function () {
        return this;
      };
      return a;
    },
    q = function (a) {
      return (a.raw = a);
    },
    r = function (a) {
      var b =
        'undefined' != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : { next: aa(a) };
    },
    ia = function (a) {
      if (!(a instanceof Array)) {
        a = r(a);
        for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
        a = c;
      }
      return a;
    },
    ka = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    la =
      'function' == typeof Object.assign
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d) for (var e in d) ka(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  p('Object.assign', function (a) {
    return a || la;
  });
  var ma =
      'function' == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    na = (function () {
      function a() {
        function c() {}
        new c();
        Reflect.construct(c, [], function () {});
        return new c() instanceof c;
      }
      if ('undefined' != typeof Reflect && Reflect.construct) {
        if (a()) return Reflect.construct;
        var b = Reflect.construct;
        return function (c, d, e) {
          c = b(c, d);
          e && Reflect.setPrototypeOf(c, e.prototype);
          return c;
        };
      }
      return function (c, d, e) {
        void 0 === e && (e = c);
        e = ma(e.prototype || Object.prototype);
        return Function.prototype.apply.call(c, e, d) || e;
      };
    })(),
    oa;
  if ('function' == typeof Object.setPrototypeOf) oa = Object.setPrototypeOf;
  else {
    var pa;
    a: {
      var qa = { a: !0 },
        ra = {};
      try {
        ra.__proto__ = qa;
        pa = ra.a;
        break a;
      } catch (a) {}
      pa = !1;
    }
    oa = pa
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
          return a;
        }
      : null;
  }
  var sa = oa,
    t = function (a, b) {
      a.prototype = ma(b.prototype);
      a.prototype.constructor = a;
      if (sa) sa(a, b);
      else
        for (var c in b)
          if ('prototype' != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Ba = b.prototype;
    },
    ta = function () {
      this.B = !1;
      this.l = null;
      this.A = void 0;
      this.h = 1;
      this.I = this.j = 0;
      this.o = null;
    },
    va = function (a) {
      if (a.B) throw new TypeError('Generator is already running');
      a.B = !0;
    };
  ta.prototype.C = function (a) {
    this.A = a;
  };
  var wa = function (a, b) {
    a.o = { Wd: b, Ff: !0 };
    a.h = a.j || a.I;
  };
  ta.prototype.return = function (a) {
    this.o = { return: a };
    this.h = this.I;
  };
  var xa = function (a, b, c) {
      a.h = c;
      return { value: b };
    },
    ya = function (a) {
      a.j = 0;
      var b = a.o.Wd;
      a.o = null;
      return b;
    },
    za = function (a) {
      this.h = new ta();
      this.j = a;
    },
    Da = function (a, b) {
      va(a.h);
      var c = a.h.l;
      if (c)
        return Aa(
          a,
          'return' in c
            ? c['return']
            : function (d) {
                return { value: d, done: !0 };
              },
          b,
          a.h.return
        );
      a.h.return(b);
      return Ca(a);
    },
    Aa = function (a, b, c, d) {
      try {
        var e = b.call(a.h.l, c);
        if (!(e instanceof Object))
          throw new TypeError('Iterator result ' + e + ' is not an object');
        if (!e.done) return (a.h.B = !1), e;
        var f = e.value;
      } catch (g) {
        return (a.h.l = null), wa(a.h, g), Ca(a);
      }
      a.h.l = null;
      d.call(a.h, f);
      return Ca(a);
    },
    Ca = function (a) {
      for (; a.h.h; )
        try {
          var b = a.j(a.h);
          if (b) return (a.h.B = !1), { value: b.value, done: !1 };
        } catch (c) {
          (a.h.A = void 0), wa(a.h, c);
        }
      a.h.B = !1;
      if (a.h.o) {
        b = a.h.o;
        a.h.o = null;
        if (b.Ff) throw b.Wd;
        return { value: b.return, done: !0 };
      }
      return { value: void 0, done: !0 };
    },
    Ea = function (a) {
      this.next = function (b) {
        va(a.h);
        a.h.l ? (b = Aa(a, a.h.l.next, b, a.h.C)) : (a.h.C(b), (b = Ca(a)));
        return b;
      };
      this.throw = function (b) {
        va(a.h);
        a.h.l
          ? (b = Aa(a, a.h.l['throw'], b, a.h.C))
          : (wa(a.h, b), (b = Ca(a)));
        return b;
      };
      this.return = function (b) {
        return Da(a, b);
      };
      this[Symbol.iterator] = function () {
        return this;
      };
    },
    Fa = function (a) {
      function b(d) {
        return a.next(d);
      }
      function c(d) {
        return a.throw(d);
      }
      return new Promise(function (d, e) {
        function f(g) {
          g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e);
        }
        f(a.next());
      });
    },
    Ga = function (a) {
      return Fa(new Ea(new za(a)));
    },
    Ha = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
      return b;
    };
  p('Reflect', function (a) {
    return a ? a : {};
  });
  p('Reflect.construct', function () {
    return na;
  });
  p('Reflect.setPrototypeOf', function (a) {
    return a
      ? a
      : sa
      ? function (b, c) {
          try {
            return sa(b, c), !0;
          } catch (d) {
            return !1;
          }
        }
      : null;
  });
  p('Promise', function (a) {
    function b() {
      this.h = null;
    }
    function c(g) {
      return g instanceof e
        ? g
        : new e(function (h) {
            h(g);
          });
    }
    if (a) return a;
    b.prototype.j = function (g) {
      if (null == this.h) {
        this.h = [];
        var h = this;
        this.l(function () {
          h.A();
        });
      }
      this.h.push(g);
    };
    var d = fa.setTimeout;
    b.prototype.l = function (g) {
      d(g, 0);
    };
    b.prototype.A = function () {
      for (; this.h && this.h.length; ) {
        var g = this.h;
        this.h = [];
        for (var h = 0; h < g.length; ++h) {
          var k = g[h];
          g[h] = null;
          try {
            k();
          } catch (n) {
            this.o(n);
          }
        }
      }
      this.h = null;
    };
    b.prototype.o = function (g) {
      this.l(function () {
        throw g;
      });
    };
    var e = function (g) {
      this.h = 0;
      this.l = void 0;
      this.j = [];
      this.C = !1;
      var h = this.o();
      try {
        g(h.resolve, h.reject);
      } catch (k) {
        h.reject(k);
      }
    };
    e.prototype.o = function () {
      function g(n) {
        return function (m) {
          k || ((k = !0), n.call(h, m));
        };
      }
      var h = this,
        k = !1;
      return { resolve: g(this.H), reject: g(this.A) };
    };
    e.prototype.H = function (g) {
      if (g === this)
        this.A(new TypeError('A Promise cannot resolve to itself'));
      else if (g instanceof e) this.L(g);
      else {
        a: switch (typeof g) {
          case 'object':
            var h = null != g;
            break a;
          case 'function':
            h = !0;
            break a;
          default:
            h = !1;
        }
        h ? this.G(g) : this.B(g);
      }
    };
    e.prototype.G = function (g) {
      var h = void 0;
      try {
        h = g.then;
      } catch (k) {
        this.A(k);
        return;
      }
      'function' == typeof h ? this.M(h, g) : this.B(g);
    };
    e.prototype.A = function (g) {
      this.I(2, g);
    };
    e.prototype.B = function (g) {
      this.I(1, g);
    };
    e.prototype.I = function (g, h) {
      if (0 != this.h)
        throw Error(
          'Cannot settle(' +
            g +
            ', ' +
            h +
            '): Promise already settled in state' +
            this.h
        );
      this.h = g;
      this.l = h;
      2 === this.h && this.J();
      this.K();
    };
    e.prototype.J = function () {
      var g = this;
      d(function () {
        if (g.F()) {
          var h = fa.console;
          'undefined' !== typeof h && h.error(g.l);
        }
      }, 1);
    };
    e.prototype.F = function () {
      if (this.C) return !1;
      var g = fa.CustomEvent,
        h = fa.Event,
        k = fa.dispatchEvent;
      if ('undefined' === typeof k) return !0;
      'function' === typeof g
        ? (g = new g('unhandledrejection', { cancelable: !0 }))
        : 'function' === typeof h
        ? (g = new h('unhandledrejection', { cancelable: !0 }))
        : ((g = fa.document.createEvent('CustomEvent')),
          g.initCustomEvent('unhandledrejection', !1, !0, g));
      g.promise = this;
      g.reason = this.l;
      return k(g);
    };
    e.prototype.K = function () {
      if (null != this.j) {
        for (var g = 0; g < this.j.length; ++g) f.j(this.j[g]);
        this.j = null;
      }
    };
    var f = new b();
    e.prototype.L = function (g) {
      var h = this.o();
      g.ec(h.resolve, h.reject);
    };
    e.prototype.M = function (g, h) {
      var k = this.o();
      try {
        g.call(h, k.resolve, k.reject);
      } catch (n) {
        k.reject(n);
      }
    };
    e.prototype.then = function (g, h) {
      function k(u, y) {
        return 'function' == typeof u
          ? function (A) {
              try {
                n(u(A));
              } catch (F) {
                m(F);
              }
            }
          : y;
      }
      var n,
        m,
        x = new e(function (u, y) {
          n = u;
          m = y;
        });
      this.ec(k(g, n), k(h, m));
      return x;
    };
    e.prototype.catch = function (g) {
      return this.then(void 0, g);
    };
    e.prototype.ec = function (g, h) {
      function k() {
        switch (n.h) {
          case 1:
            g(n.l);
            break;
          case 2:
            h(n.l);
            break;
          default:
            throw Error('Unexpected state: ' + n.h);
        }
      }
      var n = this;
      null == this.j ? f.j(k) : this.j.push(k);
      this.C = !0;
    };
    e.resolve = c;
    e.reject = function (g) {
      return new e(function (h, k) {
        k(g);
      });
    };
    e.race = function (g) {
      return new e(function (h, k) {
        for (var n = r(g), m = n.next(); !m.done; m = n.next())
          c(m.value).ec(h, k);
      });
    };
    e.all = function (g) {
      var h = r(g),
        k = h.next();
      return k.done
        ? c([])
        : new e(function (n, m) {
            function x(A) {
              return function (F) {
                u[A] = F;
                y--;
                0 == y && n(u);
              };
            }
            var u = [],
              y = 0;
            do
              u.push(void 0),
                y++,
                c(k.value).ec(x(u.length - 1), m),
                (k = h.next());
            while (!k.done);
          });
    };
    return e;
  });
  p('Array.prototype.find', function (a) {
    return a
      ? a
      : function (b, c) {
          a: {
            var d = this;
            d instanceof String && (d = String(d));
            for (var e = d.length, f = 0; f < e; f++) {
              var g = d[f];
              if (b.call(c, g, f, d)) {
                b = g;
                break a;
              }
            }
            b = void 0;
          }
          return b;
        };
  });
  p('WeakMap', function (a) {
    function b() {}
    function c(k) {
      var n = typeof k;
      return ('object' === n && null !== k) || 'function' === n;
    }
    function d(k) {
      if (!ka(k, f)) {
        var n = new b();
        ba(k, f, { value: n });
      }
    }
    function e(k) {
      var n = Object[k];
      n &&
        (Object[k] = function (m) {
          if (m instanceof b) return m;
          Object.isExtensible(m) && d(m);
          return n(m);
        });
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1;
        try {
          var k = Object.seal({}),
            n = Object.seal({}),
            m = new a([
              [k, 2],
              [n, 3],
            ]);
          if (2 != m.get(k) || 3 != m.get(n)) return !1;
          m.delete(k);
          m.set(n, 4);
          return !m.has(k) && 4 == m.get(n);
        } catch (x) {
          return !1;
        }
      })()
    )
      return a;
    var f = '$jscomp_hidden_' + Math.random();
    e('freeze');
    e('preventExtensions');
    e('seal');
    var g = 0,
      h = function (k) {
        this.h = (g += Math.random() + 1).toString();
        if (k) {
          k = r(k);
          for (var n; !(n = k.next()).done; )
            (n = n.value), this.set(n[0], n[1]);
        }
      };
    h.prototype.set = function (k, n) {
      if (!c(k)) throw Error('Invalid WeakMap key');
      d(k);
      if (!ka(k, f)) throw Error('WeakMap key fail: ' + k);
      k[f][this.h] = n;
      return this;
    };
    h.prototype.get = function (k) {
      return c(k) && ka(k, f) ? k[f][this.h] : void 0;
    };
    h.prototype.has = function (k) {
      return c(k) && ka(k, f) && ka(k[f], this.h);
    };
    h.prototype.delete = function (k) {
      return c(k) && ka(k, f) && ka(k[f], this.h) ? delete k[f][this.h] : !1;
    };
    return h;
  });
  p('Map', function (a) {
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
            k = new a(r([[h, 's']]));
          if (
            's' != k.get(h) ||
            1 != k.size ||
            k.get({ x: 4 }) ||
            k.set({ x: 4 }, 't') != k ||
            2 != k.size
          )
            return !1;
          var n = k.entries(),
            m = n.next();
          if (m.done || m.value[0] != h || 's' != m.value[1]) return !1;
          m = n.next();
          return m.done ||
            4 != m.value[0].x ||
            't' != m.value[1] ||
            !n.next().done
            ? !1
            : !0;
        } catch (x) {
          return !1;
        }
      })()
    )
      return a;
    var b = new WeakMap(),
      c = function (h) {
        this.j = {};
        this.h = f();
        this.size = 0;
        if (h) {
          h = r(h);
          for (var k; !(k = h.next()).done; )
            (k = k.value), this.set(k[0], k[1]);
        }
      };
    c.prototype.set = function (h, k) {
      h = 0 === h ? 0 : h;
      var n = d(this, h);
      n.list || (n.list = this.j[n.id] = []);
      n.oa
        ? (n.oa.value = k)
        : ((n.oa = {
            next: this.h,
            Ra: this.h.Ra,
            head: this.h,
            key: h,
            value: k,
          }),
          n.list.push(n.oa),
          (this.h.Ra.next = n.oa),
          (this.h.Ra = n.oa),
          this.size++);
      return this;
    };
    c.prototype.delete = function (h) {
      h = d(this, h);
      return h.oa && h.list
        ? (h.list.splice(h.index, 1),
          h.list.length || delete this.j[h.id],
          (h.oa.Ra.next = h.oa.next),
          (h.oa.next.Ra = h.oa.Ra),
          (h.oa.head = null),
          this.size--,
          !0)
        : !1;
    };
    c.prototype.clear = function () {
      this.j = {};
      this.h = this.h.Ra = f();
      this.size = 0;
    };
    c.prototype.has = function (h) {
      return !!d(this, h).oa;
    };
    c.prototype.get = function (h) {
      return (h = d(this, h).oa) && h.value;
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
      for (var n = this.entries(), m; !(m = n.next()).done; )
        (m = m.value), h.call(k, m[1], m[0], this);
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function (h, k) {
        var n = k && typeof k;
        'object' == n || 'function' == n
          ? b.has(k)
            ? (n = b.get(k))
            : ((n = '' + ++g), b.set(k, n))
          : (n = 'p_' + k);
        var m = h.j[n];
        if (m && ka(h.j, n))
          for (h = 0; h < m.length; h++) {
            var x = m[h];
            if ((k !== k && x.key !== x.key) || k === x.key)
              return { id: n, list: m, index: h, oa: x };
          }
        return { id: n, list: m, index: -1, oa: void 0 };
      },
      e = function (h, k) {
        var n = h.h;
        return ha(function () {
          if (n) {
            for (; n.head != h.h; ) n = n.Ra;
            for (; n.next != n.head; )
              return (n = n.next), { done: !1, value: k(n) };
            n = null;
          }
          return { done: !0, value: void 0 };
        });
      },
      f = function () {
        var h = {};
        return (h.Ra = h.next = h.head = h);
      },
      g = 0;
    return c;
  });
  p('Math.trunc', function (a) {
    return a
      ? a
      : function (b) {
          b = Number(b);
          if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b)
            return b;
          var c = Math.floor(Math.abs(b));
          return 0 > b ? -c : c;
        };
  });
  var Ia = function (a, b) {
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
    e[Symbol.iterator] = function () {
      return e;
    };
    return e;
  };
  p('Array.from', function (a) {
    return a
      ? a
      : function (b, c, d) {
          c =
            null != c
              ? c
              : function (h) {
                  return h;
                };
          var e = [],
            f =
              'undefined' != typeof Symbol &&
              Symbol.iterator &&
              b[Symbol.iterator];
          if ('function' == typeof f) {
            b = f.call(b);
            for (var g = 0; !(f = b.next()).done; )
              e.push(c.call(d, f.value, g++));
          } else
            for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
          return e;
        };
  });
  p('Array.prototype.keys', function (a) {
    return a
      ? a
      : function () {
          return Ia(this, function (b) {
            return b;
          });
        };
  });
  p('Array.prototype.values', function (a) {
    return a
      ? a
      : function () {
          return Ia(this, function (b, c) {
            return c;
          });
        };
  });
  p('Array.prototype.fill', function (a) {
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
  });
  var Ja = function (a) {
    return a ? a : Array.prototype.fill;
  };
  p('Int8Array.prototype.fill', Ja);
  p('Uint8Array.prototype.fill', Ja);
  p('Uint8ClampedArray.prototype.fill', Ja);
  p('Int16Array.prototype.fill', Ja);
  p('Uint16Array.prototype.fill', Ja);
  p('Int32Array.prototype.fill', Ja);
  p('Uint32Array.prototype.fill', Ja);
  p('Float32Array.prototype.fill', Ja);
  p('Float64Array.prototype.fill', Ja);
  p('Object.setPrototypeOf', function (a) {
    return a || sa;
  });
  var Ka = function (a, b, c) {
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
  p('String.prototype.startsWith', function (a) {
    return a
      ? a
      : function (b, c) {
          var d = Ka(this, b, 'startsWith');
          b += '';
          var e = d.length,
            f = b.length;
          c = Math.max(0, Math.min(c | 0, d.length));
          for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
          return g >= f;
        };
  });
  p('String.prototype.repeat', function (a) {
    return a
      ? a
      : function (b) {
          var c = Ka(this, null, 'repeat');
          if (0 > b || 1342177279 < b)
            throw new RangeError('Invalid count value');
          b |= 0;
          for (var d = ''; b; ) if ((b & 1 && (d += c), (b >>>= 1))) c += c;
          return d;
        };
  });
  p('Object.is', function (a) {
    return a
      ? a
      : function (b, c) {
          return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
        };
  });
  p('Array.prototype.includes', function (a) {
    return a
      ? a
      : function (b, c) {
          var d = this;
          d instanceof String && (d = String(d));
          var e = d.length;
          c = c || 0;
          for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0;
          }
          return !1;
        };
  });
  p('String.prototype.includes', function (a) {
    return a
      ? a
      : function (b, c) {
          return -1 !== Ka(this, b, 'includes').indexOf(b, c || 0);
        };
  });
  p('String.prototype.padStart', function (a) {
    return a
      ? a
      : function (b, c) {
          var d = Ka(this, null, 'padStart');
          b -= d.length;
          c = void 0 !== c ? String(c) : ' ';
          return (
            (0 < b && c
              ? c.repeat(Math.ceil(b / c.length)).substring(0, b)
              : '') + d
          );
        };
  });
  p('Math.imul', function (a) {
    return a
      ? a
      : function (b, c) {
          b = Number(b);
          c = Number(c);
          var d = b & 65535,
            e = c & 65535;
          return (
            (d * e +
              (((((b >>> 16) & 65535) * e + d * ((c >>> 16) & 65535)) << 16) >>>
                0)) |
            0
          );
        };
  });
  p('Array.prototype.flatMap', function (a) {
    return a
      ? a
      : function (b, c) {
          var d = [];
          Array.prototype.forEach.call(this, function (e, f) {
            e = b.call(c, e, f, this);
            Array.isArray(e) ? d.push.apply(d, e) : d.push(e);
          });
          return d;
        };
  });
  var La = La || {},
    v = this || self,
    w = function (a, b, c) {
      a = a.split('.');
      c = c || v;
      a[0] in c ||
        'undefined' == typeof c.execScript ||
        c.execScript('var ' + a[0]);
      for (var d; a.length && (d = a.shift()); )
        a.length || void 0 === b
          ? c[d] && c[d] !== Object.prototype[d]
            ? (c = c[d])
            : (c = c[d] = {})
          : (c[d] = b);
    },
    Ma = function (a, b) {
      a = a.split('.');
      b = b || v;
      for (var c = 0; c < a.length; c++)
        if (((b = b[a[c]]), null == b)) return null;
      return b;
    },
    Na = function (a) {
      var b = typeof a;
      b = 'object' != b ? b : a ? (Array.isArray(a) ? 'array' : b) : 'null';
      return 'array' == b || ('object' == b && 'number' == typeof a.length);
    },
    Oa = function (a) {
      var b = typeof a;
      return ('object' == b && null != a) || 'function' == b;
    },
    Ra = function (a) {
      return (
        (Object.prototype.hasOwnProperty.call(a, Pa) && a[Pa]) || (a[Pa] = ++Qa)
      );
    },
    Sa = function (a) {
      null !== a && 'removeAttribute' in a && a.removeAttribute(Pa);
      try {
        delete a[Pa];
      } catch (b) {}
    },
    Pa = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
    Qa = 0,
    Ta = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    Ua = function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    },
    Va = function (a, b, c) {
      Function.prototype.bind &&
      -1 != Function.prototype.bind.toString().indexOf('native code')
        ? (Va = Ta)
        : (Va = Ua);
      return Va.apply(null, arguments);
    },
    Wa = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d);
      };
    },
    Xa = function () {
      return Date.now();
    },
    Ya = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.Ba = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.ji = function (d, e, f) {
        for (
          var g = Array(arguments.length - 2), h = 2;
          h < arguments.length;
          h++
        )
          g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g);
      };
    },
    Za = function (a) {
      return a;
    };
  function $a(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, $a);
    else {
      var c = Error().stack;
      c && (this.stack = c);
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b);
  }
  Ya($a, Error);
  $a.prototype.name = 'CustomError';
  var ab;
  var bb,
    cb = 'undefined' !== typeof TextEncoder;
  function db(a) {
    v.setTimeout(function () {
      throw a;
    }, 0);
  }
  var eb = function (a, b) {
      var c = a.length - b.length;
      return 0 <= c && a.indexOf(b, c) == c;
    },
    fb = function (a) {
      return /^[\s\xa0]*$/.test(a);
    },
    ib = String.prototype.trim
      ? function (a) {
          return a.trim();
        }
      : function (a) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
        },
    jb = /&/g,
    kb = /</g,
    lb = />/g,
    nb = /"/g,
    ob = /'/g,
    pb = /\x00/g,
    qb = /[\x00&<>"']/,
    rb = function (a, b) {
      return -1 != a.toLowerCase().indexOf(b.toLowerCase());
    },
    tb = function (a, b) {
      var c = 0;
      a = ib(String(a)).split('.');
      b = ib(String(b)).split('.');
      for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
        var f = a[e] || '',
          g = b[e] || '';
        do {
          f = /(\d*)(\D*)(.*)/.exec(f) || ['', '', '', ''];
          g = /(\d*)(\D*)(.*)/.exec(g) || ['', '', '', ''];
          if (0 == f[0].length && 0 == g[0].length) break;
          c =
            sb(
              0 == f[1].length ? 0 : parseInt(f[1], 10),
              0 == g[1].length ? 0 : parseInt(g[1], 10)
            ) ||
            sb(0 == f[2].length, 0 == g[2].length) ||
            sb(f[2], g[2]);
          f = f[3];
          g = g[3];
        } while (0 == c);
      }
      return c;
    },
    sb = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  function ub() {
    var a = v.navigator;
    return a && (a = a.userAgent) ? a : '';
  }
  function z(a) {
    return -1 != ub().indexOf(a);
  }
  function vb() {
    return z('Trident') || z('MSIE');
  }
  function wb() {
    return z('Firefox') || z('FxiOS');
  }
  function xb() {
    return (
      z('Safari') &&
      !(
        yb() ||
        z('Coast') ||
        z('Opera') ||
        z('Edge') ||
        z('Edg/') ||
        z('OPR') ||
        wb() ||
        z('Silk') ||
        z('Android')
      )
    );
  }
  function yb() {
    return ((z('Chrome') || z('CriOS')) && !z('Edge')) || z('Silk');
  }
  function zb() {
    return z('iPhone') && !z('iPod') && !z('iPad');
  }
  var Ab = function (a, b) {
      if ('string' === typeof a)
        return 'string' !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
      for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
      return -1;
    },
    Bb = function (a, b) {
      for (
        var c = a.length, d = 'string' === typeof a ? a.split('') : a, e = 0;
        e < c;
        e++
      )
        e in d && b.call(void 0, d[e], e, a);
    };
  function Cb(a, b) {
    for (
      var c = 'string' === typeof a ? a.split('') : a, d = a.length - 1;
      0 <= d;
      --d
    )
      d in c && b.call(void 0, c[d], d, a);
  }
  var Db = function (a, b) {
      for (
        var c = a.length,
          d = [],
          e = 0,
          f = 'string' === typeof a ? a.split('') : a,
          g = 0;
        g < c;
        g++
      )
        if (g in f) {
          var h = f[g];
          b.call(void 0, h, g, a) && (d[e++] = h);
        }
      return d;
    },
    Eb = function (a, b) {
      for (
        var c = a.length,
          d = Array(c),
          e = 'string' === typeof a ? a.split('') : a,
          f = 0;
        f < c;
        f++
      )
        f in e && (d[f] = b.call(void 0, e[f], f, a));
      return d;
    },
    Fb = function (a, b, c) {
      var d = c;
      Bb(a, function (e, f) {
        d = b.call(void 0, d, e, f, a);
      });
      return d;
    },
    Gb = function (a, b) {
      for (
        var c = a.length, d = 'string' === typeof a ? a.split('') : a, e = 0;
        e < c;
        e++
      )
        if (e in d && b.call(void 0, d[e], e, a)) return !0;
      return !1;
    };
  function Hb(a, b) {
    b = Ib(a, b);
    return 0 > b ? null : 'string' === typeof a ? a.charAt(b) : a[b];
  }
  function Ib(a, b) {
    for (
      var c = a.length, d = 'string' === typeof a ? a.split('') : a, e = 0;
      e < c;
      e++
    )
      if (e in d && b.call(void 0, d[e], e, a)) return e;
    return -1;
  }
  function Jb(a, b) {
    for (
      var c = 'string' === typeof a ? a.split('') : a, d = a.length - 1;
      0 <= d;
      d--
    )
      if (d in c && b.call(void 0, c[d], d, a)) return d;
    return -1;
  }
  function Kb(a, b) {
    return 0 <= Ab(a, b);
  }
  function Lb(a, b) {
    b = Ab(a, b);
    var c;
    (c = 0 <= b) && Mb(a, b);
    return c;
  }
  function Mb(a, b) {
    return 1 == Array.prototype.splice.call(a, b, 1).length;
  }
  function Nb(a, b) {
    var c = 0;
    Cb(a, function (d, e) {
      b.call(void 0, d, e, a) && Mb(a, e) && c++;
    });
  }
  function Ob(a) {
    return Array.prototype.concat.apply([], arguments);
  }
  function Pb(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function Qb(a) {
    for (var b = 0, c = 0, d = {}; c < a.length; ) {
      var e = a[c++],
        f = Oa(e) ? 'o' + Ra(e) : (typeof e).charAt(0) + e;
      Object.prototype.hasOwnProperty.call(d, f) || ((d[f] = !0), (a[b++] = e));
    }
    a.length = b;
  }
  function Rb(a, b) {
    a.sort(b || Sb);
  }
  function Sb(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  function Tb(a) {
    for (var b = [], c = 0; c < a; c++) b[c] = '';
    return b;
  }
  var Ub = function (a) {
    Ub[' '](a);
    return a;
  };
  Ub[' '] = function () {};
  var Vb = function (a, b) {
      try {
        return Ub(a[b]), !0;
      } catch (c) {}
      return !1;
    },
    Xb = function (a) {
      var b = Wb;
      return Object.prototype.hasOwnProperty.call(b, 8) ? b[8] : (b[8] = a(8));
    };
  var Yb = z('Opera'),
    Zb = vb(),
    $b = z('Edge'),
    ac =
      z('Gecko') &&
      !(rb(ub(), 'WebKit') && !z('Edge')) &&
      !(z('Trident') || z('MSIE')) &&
      !z('Edge'),
    bc = rb(ub(), 'WebKit') && !z('Edge'),
    cc = z('Macintosh'),
    ec = z('Android'),
    fc = zb(),
    gc = z('iPad'),
    hc = z('iPod'),
    ic = zb() || z('iPad') || z('iPod'),
    jc = function () {
      var a = v.document;
      return a ? a.documentMode : void 0;
    },
    kc;
  a: {
    var lc = '',
      mc = (function () {
        var a = ub();
        if (ac) return /rv:([^\);]+)(\)|;)/.exec(a);
        if ($b) return /Edge\/([\d\.]+)/.exec(a);
        if (Zb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (bc) return /WebKit\/(\S+)/.exec(a);
        if (Yb) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    mc && (lc = mc ? mc[1] : '');
    if (Zb) {
      var nc = jc();
      if (null != nc && nc > parseFloat(lc)) {
        kc = String(nc);
        break a;
      }
    }
    kc = lc;
  }
  var oc = kc,
    Wb = {},
    pc = function () {
      return Xb(function () {
        return 0 <= tb(oc, 8);
      });
    },
    qc;
  if (v.document && Zb) {
    var rc = jc();
    qc = rc ? rc : parseInt(oc, 10) || void 0;
  } else qc = void 0;
  var sc = qc;
  var tc = wb(),
    uc = z('Android') && !(yb() || wb() || z('Opera') || z('Silk')),
    vc = yb();
  xb();
  var wc = {},
    xc = null,
    Ac = function (a, b) {
      void 0 === b && (b = 0);
      zc();
      b = wc[b];
      for (
        var c = Array(Math.floor(a.length / 3)), d = b[64] || '', e = 0, f = 0;
        e < a.length - 2;
        e += 3
      ) {
        var g = a[e],
          h = a[e + 1],
          k = a[e + 2],
          n = b[g >> 2];
        g = b[((g & 3) << 4) | (h >> 4)];
        h = b[((h & 15) << 2) | (k >> 6)];
        k = b[k & 63];
        c[f++] = '' + n + g + h + k;
      }
      n = 0;
      k = d;
      switch (a.length - e) {
        case 2:
          (n = a[e + 1]), (k = b[(n & 15) << 2] || d);
        case 1:
          (a = a[e]),
            (c[f] = '' + b[a >> 2] + b[((a & 3) << 4) | (n >> 4)] + k + d);
      }
      return c.join('');
    },
    Cc = function (a) {
      var b = [];
      Bc(a, function (c) {
        b.push(c);
      });
      return b;
    },
    Bc = function (a, b) {
      function c(k) {
        for (; d < a.length; ) {
          var n = a.charAt(d++),
            m = xc[n];
          if (null != m) return m;
          if (!fb(n)) throw Error('Unknown base64 encoding at char: ' + n);
        }
        return k;
      }
      zc();
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
    zc = function () {
      if (!xc) {
        xc = {};
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
          wc[c] = d;
          for (var e = 0; e < d.length; e++) {
            var f = d[e];
            void 0 === xc[f] && (xc[f] = e);
          }
        }
      }
    };
  var Dc = 'undefined' !== typeof Uint8Array,
    Ec = !Zb && 'function' === typeof v.btoa,
    Fc,
    Gc = {};
  var Hc =
    'function' === typeof Symbol && 'symbol' === typeof Symbol()
      ? Symbol()
      : void 0;
  function Ic(a, b) {
    if (Hc) return (a[Hc] |= b);
    if (void 0 !== a.Ga) return (a.Ga |= b);
    Object.defineProperties(a, {
      Ga: { value: b, configurable: !0, writable: !0, enumerable: !1 },
    });
    return b;
  }
  function Jc(a, b) {
    var c = Kc(a);
    (c & b) !== b &&
      (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), Lc(a, c | b));
    return a;
  }
  function Mc(a, b) {
    Hc ? a[Hc] && (a[Hc] &= ~b) : void 0 !== a.Ga && (a.Ga &= ~b);
  }
  function Kc(a) {
    var b;
    Hc ? (b = a[Hc]) : (b = a.Ga);
    return null == b ? 0 : b;
  }
  function Lc(a, b) {
    Hc
      ? (a[Hc] = b)
      : void 0 !== a.Ga
      ? (a.Ga = b)
      : Object.defineProperties(a, {
          Ga: { value: b, configurable: !0, writable: !0, enumerable: !1 },
        });
  }
  function Nc(a) {
    Ic(a, 1);
    return a;
  }
  function Oc(a) {
    return !!(Kc(a) & 2);
  }
  function Pc(a) {
    Ic(a, 16);
    return a;
  }
  function Qc(a, b) {
    Lc(b, (a | 0) & -51);
  }
  function Rc(a, b) {
    Lc(b, (a | 18) & -41);
  }
  var Sc = {};
  function Tc(a) {
    return (
      null !== a &&
      'object' === typeof a &&
      !Array.isArray(a) &&
      a.constructor === Object
    );
  }
  var Uc,
    Vc,
    Wc = [];
  Lc(Wc, 23);
  Vc = Object.freeze(Wc);
  var Xc = function (a) {
    if (Oc(a.da)) throw Error('Cannot mutate an immutable Message');
  };
  function Yc(a) {
    var b = a.length;
    (b = b ? a[b - 1] : void 0) && Tc(b)
      ? (b.g = 1)
      : ((b = {}), a.push(((b.g = 1), b)));
  }
  function Zc(a) {
    if (null != a && 'number' !== typeof a)
      throw Error(
        'Value of float/double field must be a number|null|undefined, found ' +
          typeof a +
          ': ' +
          a
      );
    return a;
  }
  function $c(a, b, c) {
    var d = !1;
    if (
      null != a &&
      'object' === typeof a &&
      !(d = Array.isArray(a)) &&
      a.kd === Sc
    )
      return a;
    if (d) return new b(a);
    if (c) return new b();
  }
  var ad = function (a) {
      var b = a.j + a.fb;
      return a.xa || (a.xa = a.da[b] = {});
    },
    B = function (a, b, c) {
      return -1 === b
        ? null
        : b >= a.j
        ? a.xa
          ? a.xa[b]
          : void 0
        : c && a.xa && ((c = a.xa[b]), null != c)
        ? c
        : a.da[b + a.fb];
    },
    C = function (a, b, c, d) {
      Xc(a);
      return bd(a, b, c, d);
    },
    bd = function (a, b, c, d) {
      a.l && (a.l = void 0);
      if (b >= a.j || d) return (ad(a)[b] = c), a;
      a.da[b + a.fb] = c;
      (c = a.xa) && b in c && delete c[b];
      return a;
    };
  function cd(a, b, c, d, e) {
    var f = B(a, b, d);
    Array.isArray(f) || (f = Vc);
    var g = Kc(f);
    g & 1 || Nc(f);
    if (e) g & 2 || Ic(f, 2), c & 1 || Object.freeze(f);
    else {
      e = !(c & 2);
      var h = g & 2;
      c & 1 || !h
        ? e && g & 16 && !h && Mc(f, 16)
        : ((f = Nc(Array.prototype.slice.call(f))), bd(a, b, f, d));
    }
    return f;
  }
  var dd = function (a, b, c) {
      return cd(a, b, 0, void 0 === c ? !1 : c, Oc(a.da));
    },
    ed = function (a, b) {
      var c = B(a, b);
      var d =
        null == c
          ? c
          : 'number' === typeof c ||
            'NaN' === c ||
            'Infinity' === c ||
            '-Infinity' === c
          ? Number(c)
          : void 0;
      null != d && d !== c && bd(a, b, d);
      return d;
    },
    fd = function (a, b) {
      a = B(a, b);
      return null == a ? a : !!a;
    },
    gd = function (a, b, c, d) {
      c = null == c ? Vc : Jc(c, 1);
      return C(a, b, c, d);
    };
  function hd(a, b, c, d) {
    Xc(a);
    c !== d ? bd(a, b, c) : bd(a, b, void 0, !1);
    return a;
  }
  var id = function (a, b) {
      for (var c = 0, d = 0; d < b.length; d++) {
        var e = b[d];
        null != B(a, e) && (0 !== c && bd(a, c, void 0, !1), (c = e));
      }
      return c;
    },
    kd = function (a, b, c) {
      var d = void 0 === d ? !1 : d;
      var e = B(a, c, d);
      b = $c(e, b);
      b !== e && null != b && (bd(a, c, b, d), Ic(b.da, Kc(a.da) & 18));
      e = b;
      if (null == e) return e;
      Oc(a.da) || ((b = jd(e)), b !== e && ((e = b), bd(a, c, e, d)));
      return e;
    };
  function ld(a, b, c, d, e) {
    a.h || (a.h = {});
    var f = a.h[c],
      g = cd(a, c, 3, void 0, e);
    if (!f) {
      var h = g;
      f = [];
      var k = !!(Kc(a.da) & 16);
      g = Oc(h);
      var n = h;
      !e && g && (h = Array.prototype.slice.call(h));
      for (var m = g, x = 0; x < h.length; x++) {
        var u = h[x];
        var y = b,
          A = !1;
        A = void 0 === A ? !1 : A;
        u = Array.isArray(u) ? new y(u) : A ? new y() : void 0;
        if (void 0 !== u) {
          y = u.da;
          var F = (A = Kc(y));
          g && (F |= 2);
          k && (F |= 16);
          F != A && Lc(y, F);
          y = F;
          m = m || !!(2 & y);
          f.push(u);
        }
      }
      a.h[c] = f;
      k = Kc(h);
      b = k | 33;
      b = m ? b & -9 : b | 8;
      k != b &&
        ((m = h),
        Object.isFrozen(m) && (m = Array.prototype.slice.call(m)),
        Lc(m, b),
        (h = m));
      n !== h && bd(a, c, h);
      (e || (d && g)) && Ic(f, 2);
      d && Object.freeze(f);
      return f;
    }
    e ||
      ((e = Object.isFrozen(f)),
      d && !e
        ? Object.freeze(f)
        : !d && e && ((f = Array.prototype.slice.call(f)), (a.h[c] = f)));
    return f;
  }
  var md = function (a, b, c) {
      var d = Oc(a.da);
      b = ld(a, b, c, d, d);
      a = cd(a, c, 3, void 0, d);
      if (!(d || Kc(a) & 8)) {
        for (d = 0; d < b.length; d++) {
          c = b[d];
          var e = jd(c);
          c !== e && ((b[d] = e), (a[d] = e.da));
        }
        Ic(a, 8);
      }
      return b;
    },
    nd = function (a, b, c) {
      Xc(a);
      null == c && (c = void 0);
      return bd(a, b, c);
    },
    od = function (a, b, c, d) {
      Xc(a);
      var e = null == c ? Vc : Nc([]);
      if (null != c) {
        for (var f = !!c.length, g = 0; g < c.length; g++) {
          var h = c[g];
          f = f && !Oc(h.da);
          e[g] = h.da;
        }
        e = Jc(e, (f ? 8 : 0) | 1);
        a.h || (a.h = {});
        a.h[b] = c;
      } else a.h && (a.h[b] = void 0);
      return bd(a, b, e, d);
    },
    pd = function (a, b, c, d) {
      Xc(a);
      var e = ld(a, c, b, !1, !1);
      c = null != d ? d : new c();
      a = cd(a, b, 2, void 0, !1);
      e.push(c);
      a.push(c.da);
      Oc(c.da) && Mc(a, 8);
      return c;
    },
    qd = function (a) {
      a = B(a, 7);
      return null == a ? void 0 : a;
    };
  function rd(a, b) {
    return null == a ? b : a;
  }
  var sd = function (a, b, c) {
    c = id(a, c) === b;
    return rd(B(a, c ? b : -1), 0);
  };
  var td;
  function ud(a, b) {
    td = b;
    a = new a(b);
    td = void 0;
    return a;
  }
  function vd(a) {
    switch (typeof a) {
      case 'number':
        return isFinite(a) ? a : String(a);
      case 'object':
        if (a)
          if (Array.isArray(a)) {
            if (0 !== (Kc(a) & 128))
              return (a = Array.prototype.slice.call(a)), Yc(a), a;
          } else if (Dc && null != a && a instanceof Uint8Array) {
            if (Ec) {
              for (var b = ''; 10240 < a.length; )
                (b += String.fromCharCode.apply(null, a.subarray(0, 10240))),
                  (a = a.subarray(10240));
              b += String.fromCharCode.apply(null, a);
              a = btoa(b);
            } else a = Ac(a);
            return a;
          }
    }
    return a;
  }
  function xd(a, b, c, d) {
    if (null != a) {
      if (Array.isArray(a)) a = yd(a, b, c, void 0 !== d);
      else if (Tc(a)) {
        var e = {},
          f;
        for (f in a) e[f] = xd(a[f], b, c, d);
        a = e;
      } else a = b(a, d);
      return a;
    }
  }
  function yd(a, b, c, d) {
    var e = Kc(a);
    d = d ? !!(e & 16) : void 0;
    a = Array.prototype.slice.call(a);
    for (var f = 0; f < a.length; f++) a[f] = xd(a[f], b, c, d);
    c(e, a);
    return a;
  }
  function zd(a) {
    return a.kd === Sc ? a.toJSON() : vd(a);
  }
  function Ad(a, b) {
    a & 128 && Yc(b);
  }
  function Bd(a, b, c) {
    c = void 0 === c ? Rc : c;
    if (null != a) {
      if (Dc && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        var d = Kc(a);
        if (d & 2) return a;
        if (b && !(d & 32) && (d & 16 || 0 === d)) return Lc(a, d | 2), a;
        a = yd(a, Bd, d & 4 ? Rc : c, !0);
        b = Kc(a);
        b & 4 && b & 2 && Object.freeze(a);
        return a;
      }
      return a.kd === Sc ? Cd(a) : a;
    }
  }
  function Dd(a, b, c, d, e, f, g) {
    (a = a.h && a.h[c])
      ? ((d = Kc(a)),
        d & 2
          ? (d = a)
          : ((f = Eb(a, Cd)), Rc(d, f), Object.freeze(f), (d = f)),
        od(b, c, d, e))
      : C(b, c, Bd(d, f, g), e);
  }
  function Cd(a) {
    if (Oc(a.da)) return a;
    a = Ed(a, !0);
    Ic(a.da, 2);
    return a;
  }
  function Ed(a, b) {
    var c = a.da,
      d = Pc([]),
      e = a.constructor.messageId;
    e && d.push(e);
    e = a.xa;
    if (e) {
      d.length = c.length;
      d.fill(void 0, d.length, c.length);
      var f = {};
      d[d.length - 1] = f;
    }
    0 !== (Kc(c) & 128) && Yc(d);
    b = b || Oc(a.da) ? Rc : Qc;
    d = ud(a.constructor, d);
    a.ed && (d.ed = a.ed.slice());
    f = !!(Kc(c) & 16);
    for (var g = e ? c.length - 1 : c.length, h = 0; h < g; h++)
      Dd(a, d, h - a.fb, c[h], !1, f, b);
    if (e) for (var k in e) Dd(a, d, +k, e[k], !0, f, b);
    return d;
  }
  function jd(a) {
    if (!Oc(a.da)) return a;
    var b = Ed(a, !1);
    b.l = a;
    return b;
  }
  var D = function (a, b, c, d) {
    null == a && (a = td);
    td = void 0;
    var e = this.constructor.messageId,
      f = !1;
    if (null == a) {
      a = e ? [e] : [];
      var g = 48;
      var h = !0;
      d && (g |= 128);
      Lc(a, g);
    } else {
      if (!Array.isArray(a)) throw Error();
      if (e && e !== a[0]) throw Error();
      var k = (g = Ic(a, 0));
      if ((h = 0 !== (16 & k))) (f = 0 !== (32 & k)) || (k |= 32);
      if (d) {
        if (!(k & 128) && 0 < a.length) {
          var n = a[a.length - 1];
          if (Tc(n) && 'g' in n) {
            k |= 128;
            delete n.g;
            var m = !0,
              x;
            for (x in n) {
              m = !1;
              break;
            }
            m && a.pop();
          } else throw Error();
        }
      } else if (128 & k) throw Error();
      g !== k && Lc(a, k);
    }
    this.fb = e ? 0 : -1;
    this.h = void 0;
    this.da = a;
    a: {
      g = this.da.length;
      e = g - 1;
      if (g && ((g = this.da[e]), Tc(g))) {
        this.xa = g;
        this.j = e - this.fb;
        break a;
      }
      void 0 !== b && -1 < b
        ? ((this.j = Math.max(b, e + 1 - this.fb)), (this.xa = void 0))
        : (this.j = Number.MAX_VALUE);
    }
    if (!d && this.xa && 'g' in this.xa)
      throw Error(
        'Unexpected "g" flag in sparse object of message that is not a group type.'
      );
    if (c) {
      b = h && !f && !0;
      d = this.j;
      var u;
      for (h = 0; h < c.length; h++)
        (f = c[h]),
          f < d
            ? ((f += this.fb), (e = a[f]) ? Fd(e, b) : (a[f] = Vc))
            : (u || (u = ad(this)), (e = u[f]) ? Fd(e, b) : (u[f] = Vc));
    }
  };
  D.prototype.toJSON = function () {
    var a = this.da;
    return Uc ? a : yd(a, zd, Ad);
  };
  var Hd = function (a) {
    Uc = !0;
    try {
      return JSON.stringify(a.toJSON(), Gd);
    } finally {
      Uc = !1;
    }
  };
  function Fd(a, b) {
    if (Array.isArray(a)) {
      var c = Kc(a),
        d = 1;
      !b || c & 2 || (d |= 16);
      (c & d) !== d && Lc(a, c | d);
    }
  }
  D.prototype.kd = Sc;
  D.prototype.toString = function () {
    return this.da.toString();
  };
  function Gd(a, b) {
    return vd(b);
  }
  var Id = 0,
    Jd = 0;
  function Kd(a) {
    var b = 0 > a;
    a = Math.abs(a);
    var c = a >>> 0;
    a = Math.floor((a - c) / 4294967296);
    b &&
      ((c = r(Ld(c, a))), (b = c.next().value), (a = c.next().value), (c = b));
    Id = c >>> 0;
    Jd = a >>> 0;
  }
  var Md = 'function' === typeof BigInt;
  function Nd(a) {
    if (16 > a.length) Kd(Number(a));
    else if (Md)
      (a = BigInt(a)),
        (Id = Number(a & BigInt(4294967295)) >>> 0),
        (Jd = Number((a >> BigInt(32)) & BigInt(4294967295)));
    else {
      var b = +('-' === a[0]);
      Jd = Id = 0;
      for (
        var c = a.length, d = 0 + b, e = ((c - b) % 6) + b;
        e <= c;
        d = e, e += 6
      )
        (d = Number(a.slice(d, e))),
          (Jd *= 1e6),
          (Id = 1e6 * Id + d),
          4294967296 <= Id &&
            ((Jd += (Id / 4294967296) | 0), (Id %= 4294967296));
      b &&
        ((b = r(Ld(Id, Jd))),
        (a = b.next().value),
        (b = b.next().value),
        (Id = a),
        (Jd = b));
    }
  }
  function Ld(a, b) {
    b = ~b;
    a ? (a = ~a + 1) : (b += 1);
    return [a, b];
  }
  var Od = function (a, b) {
      this.j = a >>> 0;
      this.h = b >>> 0;
    },
    Qd = function (a) {
      if (!a) return Pd || (Pd = new Od(0, 0));
      if (!/^\d+$/.test(a)) return null;
      Nd(a);
      return new Od(Id, Jd);
    },
    Pd,
    Rd = function (a, b) {
      this.j = a >>> 0;
      this.h = b >>> 0;
    },
    Td = function (a) {
      if (!a) return Sd || (Sd = new Rd(0, 0));
      if (!/^-?\d+$/.test(a)) return null;
      Nd(a);
      return new Rd(Id, Jd);
    },
    Sd;
  var Ud = function () {
    this.h = [];
  };
  Ud.prototype.length = function () {
    return this.h.length;
  };
  Ud.prototype.end = function () {
    var a = this.h;
    this.h = [];
    return a;
  };
  var Vd = function (a, b, c) {
      for (; 0 < c || 127 < b; )
        a.h.push((b & 127) | 128),
          (b = ((b >>> 7) | (c << 25)) >>> 0),
          (c >>>= 7);
      a.h.push(b);
    },
    Wd = function (a, b) {
      for (; 127 < b; ) a.h.push((b & 127) | 128), (b >>>= 7);
      a.h.push(b);
    },
    Xd = function (a, b) {
      if (0 <= b) Wd(a, b);
      else {
        for (var c = 0; 9 > c; c++) a.h.push((b & 127) | 128), (b >>= 7);
        a.h.push(1);
      }
    },
    Yd = function (a, b) {
      a.h.push((b >>> 0) & 255);
      a.h.push((b >>> 8) & 255);
      a.h.push((b >>> 16) & 255);
      a.h.push((b >>> 24) & 255);
    };
  var Zd = function () {
      this.l = [];
      this.j = 0;
      this.h = new Ud();
    },
    $d = function (a, b) {
      0 !== b.length && (a.l.push(b), (a.j += b.length));
    },
    be = function (a, b) {
      ae(a, b, 2);
      b = a.h.end();
      $d(a, b);
      b.push(a.j);
      return b;
    },
    ce = function (a, b) {
      var c = b.pop();
      for (c = a.j + a.h.length() - c; 127 < c; )
        b.push((c & 127) | 128), (c >>>= 7), a.j++;
      b.push(c);
      a.j++;
    },
    de = function (a, b) {
      if ((b = b.ed)) {
        $d(a, a.h.end());
        for (var c = 0; c < b.length; c++)
          $d(a, b[c].pi(Gc) || Fc || (Fc = new Uint8Array(0)));
      }
    },
    ae = function (a, b, c) {
      Wd(a.h, 8 * b + c);
    };
  function ee(a, b, c) {
    if (c) {
      var d = {},
        e;
      for (e in c) {
        var f = c[e],
          g = f.ng;
        g ||
          ((d.Gb = f.si || f.yi.Mc),
          f.cf
            ? ((d.Pc = fe(f.cf)),
              (g = (function (h) {
                return function (k, n, m) {
                  return h.Gb(k, n, m, h.Pc);
                };
              })(d)))
            : f.Jf
            ? ((d.Oc = ge(f.mf.Ud, f.Jf)),
              (g = (function (h) {
                return function (k, n, m) {
                  return h.Gb(k, n, m, h.Oc);
                };
              })(d)))
            : (g = d.Gb),
          (f.ng = g));
        g(b, a, f.mf);
        d = { Gb: d.Gb, Pc: d.Pc, Oc: d.Oc };
      }
    }
    de(b, a);
  }
  function he(a, b) {
    var c = a[b];
    'function' == typeof c && 0 === c.length && ((c = c()), (a[b] = c));
    return Array.isArray(c) &&
      (ie in c || je in c || (0 < c.length && 'function' == typeof c[0]))
      ? c
      : void 0;
  }
  var ke = Symbol();
  function fe(a) {
    var b = a[ke];
    if (!b) {
      var c = le(a);
      b = function (d, e) {
        return me(d, e, c);
      };
      a[ke] = b;
    }
    return b;
  }
  function ge(a, b) {
    var c = a[ke];
    c ||
      ((c = function (d, e) {
        return ee(d, e, b);
      }),
      (a[ke] = c));
    return c;
  }
  var je = Symbol();
  function ne(a, b) {
    a.push(b);
  }
  function oe(a, b, c) {
    a.push(b, c.Mc);
  }
  function pe(a, b, c, d) {
    var e = fe(d),
      f = le(d).Ud,
      g = c.Mc;
    a.push(b, function (h, k, n) {
      return g(h, k, n, f, e);
    });
  }
  function qe(a, b, c, d, e, f) {
    var g = ge(d, f),
      h = c.Mc;
    a.push(b, function (k, n, m) {
      return h(k, n, m, d, g);
    });
  }
  function le(a) {
    var b = a[je];
    if (b) return b;
    b = a[je] = [];
    var c = ne,
      d = oe,
      e = pe,
      f = qe;
    b.Ud = a[0];
    var g = 1;
    if (a.length > g && 'number' !== typeof a[g]) {
      var h = a[g++];
      c(b, h);
    }
    for (; g < a.length; ) {
      c = a[g++];
      for (var k = g + 1; k < a.length && 'number' !== typeof a[k]; ) k++;
      h = a[g++];
      k -= g;
      switch (k) {
        case 0:
          d(b, c, h);
          break;
        case 1:
          (k = he(a, g)) ? (g++, e(b, c, h, k)) : d(b, c, h, a[g++]);
          break;
        case 2:
          k = b;
          var n = g++;
          n = he(a, n);
          e(k, c, h, n, a[g++]);
          break;
        case 3:
          f(b, c, h, a[g++], a[g++], a[g++]);
          break;
        case 4:
          f(b, c, h, a[g++], a[g++], a[g++], a[g++]);
          break;
        default:
          throw Error('unexpected number of binary field arguments: ' + k);
      }
    }
    ie in a && je in a && (a.length = 0);
    return b;
  }
  var ie = Symbol();
  function me(a, b, c) {
    for (var d = c.length, e = 1 == d % 2, f = e ? 1 : 0; f < d; f += 2)
      (0, c[f + 1])(b, a, c[f]);
    ee(a, b, e ? c[0] : void 0);
  }
  function re(a, b) {
    return { xi: a, Mc: b };
  }
  function se(a, b, c) {
    b = B(b, c);
    null != b &&
      ('string' === typeof b && Td(b),
      null != b &&
        (ae(a, c, 0),
        'number' === typeof b
          ? ((a = a.h), Kd(b), Vd(a, Id, Jd))
          : ((c = Td(b)), Vd(a.h, c.j, c.h))));
  }
  function te(a, b, c) {
    b = B(b, c);
    null != b && null != b && (ae(a, c, 0), Xd(a.h, b));
  }
  var ue = re(
      function (a, b, c) {
        if (1 !== a.h()) return !1;
        a = a.B();
        hd(b, c, Zc(a), 0);
        return !0;
      },
      function (a, b, c) {
        b = ed(b, c);
        if (null != b) {
          ae(a, c, 1);
          a = a.h;
          var d = +b;
          if (0 === d) (Jd = 0 < 1 / d ? 0 : 2147483648), (Id = 0);
          else if (isNaN(d)) (Jd = 2147483647), (Id = 4294967295);
          else if (
            ((d = (c = 0 > d ? -2147483648 : 0) ? -d : d),
            1.7976931348623157e308 < d)
          )
            (Jd = (c | 2146435072) >>> 0), (Id = 0);
          else if (2.2250738585072014e-308 > d)
            (b = d / Math.pow(2, -1074)),
              (Jd = (c | (b / 4294967296)) >>> 0),
              (Id = b >>> 0);
          else {
            var e = d;
            b = 0;
            if (2 <= e) for (; 2 <= e && 1023 > b; ) b++, (e /= 2);
            else for (; 1 > e && -1022 < b; ) (e *= 2), b--;
            d *= Math.pow(2, -b);
            Jd = (c | ((b + 1023) << 20) | ((1048576 * d) & 1048575)) >>> 0;
            Id = (4503599627370496 * d) >>> 0;
          }
          Yd(a, Id);
          Yd(a, Jd);
        }
      }
    ),
    ve = re(
      function (a, b, c) {
        if (5 !== a.h()) return !1;
        C(b, c, a.I());
        return !0;
      },
      function (a, b, c) {
        b = ed(b, c);
        if (null != b) {
          ae(a, c, 5);
          a = a.h;
          var d = +b;
          0 === d
            ? 0 < 1 / d
              ? (Id = Jd = 0)
              : ((Jd = 0), (Id = 2147483648))
            : isNaN(d)
            ? ((Jd = 0), (Id = 2147483647))
            : ((d = (c = 0 > d ? -2147483648 : 0) ? -d : d),
              3.4028234663852886e38 < d
                ? ((Jd = 0), (Id = (c | 2139095040) >>> 0))
                : 1.1754943508222875e-38 > d
                ? ((d = Math.round(d / Math.pow(2, -149))),
                  (Jd = 0),
                  (Id = (c | d) >>> 0))
                : ((b = Math.floor(Math.log(d) / Math.LN2)),
                  (d *= Math.pow(2, -b)),
                  (d = Math.round(8388608 * d)),
                  16777216 <= d && ++b,
                  (Jd = 0),
                  (Id = (c | ((b + 127) << 23) | (d & 8388607)) >>> 0)));
          Yd(a, Id);
        }
      }
    ),
    we = re(function (a, b, c) {
      if (0 !== a.h()) return !1;
      C(b, c, a.l());
      return !0;
    }, se),
    xe = re(function (a, b, c) {
      if (0 !== a.h()) return !1;
      a = a.l();
      hd(b, c, a, 0);
      return !0;
    }, se),
    ye = re(
      function (a, b, c) {
        if (0 !== a.h()) return !1;
        C(b, c, a.K());
        return !0;
      },
      function (a, b, c) {
        b = B(b, c);
        null != b &&
          ('string' === typeof b && Qd(b),
          null != b &&
            (ae(a, c, 0),
            'number' === typeof b
              ? ((a = a.h), Kd(b), Vd(a, Id, Jd))
              : ((c = Qd(b)), Vd(a.h, c.j, c.h))));
      }
    ),
    ze = re(function (a, b, c) {
      if (0 !== a.h()) return !1;
      C(b, c, a.j());
      return !0;
    }, te),
    Ae = re(function (a, b, c) {
      if (0 !== a.h()) return !1;
      a = a.j();
      hd(b, c, a, 0);
      return !0;
    }, te),
    Be = re(
      function (a, b, c) {
        if (0 !== a.h()) return !1;
        C(b, c, a.A());
        return !0;
      },
      function (a, b, c) {
        b = fd(b, c);
        null != b && (ae(a, c, 0), a.h.h.push(b ? 1 : 0));
      }
    ),
    Ce = re(
      function (a, b, c) {
        if (2 !== a.h()) return !1;
        C(b, c, a.F());
        return !0;
      },
      function (a, b, c) {
        b = B(b, c);
        if (null != b) {
          var d = !1;
          d = void 0 === d ? !1 : d;
          if (cb) {
            if (
              d &&
              /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(
                b
              )
            )
              throw Error('Found an unpaired surrogate');
            b = (bb || (bb = new TextEncoder())).encode(b);
          } else {
            for (
              var e = 0, f = new Uint8Array(3 * b.length), g = 0;
              g < b.length;
              g++
            ) {
              var h = b.charCodeAt(g);
              if (128 > h) f[e++] = h;
              else {
                if (2048 > h) f[e++] = (h >> 6) | 192;
                else {
                  if (55296 <= h && 57343 >= h) {
                    if (56319 >= h && g < b.length) {
                      var k = b.charCodeAt(++g);
                      if (56320 <= k && 57343 >= k) {
                        h = 1024 * (h - 55296) + k - 56320 + 65536;
                        f[e++] = (h >> 18) | 240;
                        f[e++] = ((h >> 12) & 63) | 128;
                        f[e++] = ((h >> 6) & 63) | 128;
                        f[e++] = (h & 63) | 128;
                        continue;
                      } else g--;
                    }
                    if (d) throw Error('Found an unpaired surrogate');
                    h = 65533;
                  }
                  f[e++] = (h >> 12) | 224;
                  f[e++] = ((h >> 6) & 63) | 128;
                }
                f[e++] = (h & 63) | 128;
              }
            }
            b = e === f.length ? f : f.subarray(0, e);
          }
          ae(a, c, 2);
          Wd(a.h, b.length);
          $d(a, a.h.end());
          $d(a, b);
        }
      }
    ),
    De = re(
      function (a, b, c, d, e) {
        if (2 !== a.h()) return !1;
        var f = a.o;
        Xc(b);
        var g = B(b, c);
        d = jd($c(g, d, !0));
        g !== d && bd(b, c, d);
        f.call(a, d, e);
        return !0;
      },
      function (a, b, c, d, e) {
        b = kd(b, d, c);
        null != b && ((c = be(a, c)), e(b, a), ce(a, c));
      }
    ),
    Ee = re(
      function (a, b, c, d, e) {
        if (2 !== a.h()) return !1;
        a.o(pd(b, c, d), e);
        return !0;
      },
      function (a, b, c, d, e) {
        b = md(b, d, c);
        if (null != b)
          for (d = 0; d < b.length; d++) {
            var f = be(a, c);
            e(b[d], a);
            ce(a, f);
          }
      }
    ),
    Fe = re(
      function (a, b, c) {
        if (0 !== a.h()) return !1;
        C(b, c, a.C());
        return !0;
      },
      function (a, b, c) {
        b = B(b, c);
        null != b && ((b = parseInt(b, 10)), ae(a, c, 0), Xd(a.h, b));
      }
    );
  function Ge(a) {
    return function () {
      var b = new Zd();
      me(this, b, le(a));
      $d(b, b.h.end());
      for (
        var c = new Uint8Array(b.j), d = b.l, e = d.length, f = 0, g = 0;
        g < e;
        g++
      ) {
        var h = d[g];
        c.set(h, f);
        f += h.length;
      }
      b.l = [c];
      return c;
    };
  }
  function He(a) {
    return function (b) {
      if (null == b || '' == b) b = new a();
      else {
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error(void 0);
        b = ud(a, Pc(b));
      }
      return b;
    };
  }
  var Ke = function (a, b) {
    this.h = (a === Ie && b) || '';
    this.j = Je;
  };
  Ke.prototype.Ya = !0;
  Ke.prototype.La = function () {
    return this.h;
  };
  var Le = function (a) {
      return a instanceof Ke && a.constructor === Ke && a.j === Je
        ? a.h
        : 'type_error:Const';
    },
    Je = {},
    Ie = {};
  var Me = function () {},
    Ne = function (a) {
      var b = !1,
        c;
      return function () {
        b || ((c = a()), (b = !0));
        return c;
      };
    },
    Oe = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    },
    Pe = function (a) {
      var b = 0,
        c = !1,
        d = [],
        e = function () {
          b = 0;
          c && ((c = !1), f());
        },
        f = function () {
          b = v.setTimeout(e, 1e3);
          var g = d;
          d = [];
          a.apply(void 0, g);
        };
      return function (g) {
        d = arguments;
        b ? (c = !0) : f();
      };
    };
  var Qe = Ne(function () {
    var a = !1;
    try {
      var b = Object.defineProperty({}, 'passive', {
        get: function () {
          a = !0;
        },
      });
      v.addEventListener('test', null, b);
    } catch (c) {}
    return a;
  });
  function Re(a) {
    return a ? (a.passive && Qe() ? a : a.capture || !1) : !1;
  }
  var Se = function (a, b, c, d) {
      return a.addEventListener ? (a.addEventListener(b, c, Re(d)), !0) : !1;
    },
    Te = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, Re());
    };
  function Ue(a) {
    a && 'function' == typeof a.W && a.W();
  }
  var E = function () {
    this.K = this.K;
    this.I = this.I;
  };
  E.prototype.K = !1;
  E.prototype.ya = function () {
    return this.K;
  };
  E.prototype.W = function () {
    this.K || ((this.K = !0), this.N());
  };
  var We = function (a, b) {
      Ve(a, Wa(Ue, b));
    },
    Ve = function (a, b) {
      a.K ? b() : (a.I || (a.I = []), a.I.push(b));
    };
  E.prototype.N = function () {
    if (this.I) for (; this.I.length; ) this.I.shift()();
  };
  var Xe = function (a, b) {
      this.h = a;
      this.defaultValue = void 0 === b ? !1 : b;
    },
    Ye = function (a, b) {
      this.h = a;
      this.defaultValue = void 0 === b ? 0 : b;
    },
    Ze = function (a) {
      var b = void 0 === b ? [] : b;
      this.h = a;
      this.defaultValue = b;
    };
  var $e = new Xe(471855283),
    af = new Xe(1930),
    bf = new Ye(494575051),
    cf = new Ze(489560439),
    df = new Ze(505762507),
    ef = new Ye(360261971),
    ff = new Ye(1921, 72),
    gf = new Ye(1920, 12),
    jf = new Ye(426169222, 1e3),
    kf = new Ye(1917, 300),
    lf = new Ye(1916, 0.001),
    mf = new Xe(478498873, !0),
    nf = new Xe(478009624),
    of = new Xe(370946349),
    pf = new Ye(406149835),
    qf = new Ze(1932);
  var rf = function () {
    var a;
    this.h = a = void 0 === a ? {} : a;
  };
  rf.prototype.reset = function () {
    this.h = {};
  };
  var sf = Zb || bc;
  function tf(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a);
  }
  function uf(a, b) {
    var c = {},
      d;
    for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c;
  }
  function vf(a) {
    var b = wf,
      c;
    for (c in b) if (a.call(void 0, b[c], c, b)) return !0;
    return !1;
  }
  function xf(a) {
    var b = yf,
      c;
    for (c in b) if (!a.call(void 0, b[c], c, b)) return !1;
    return !0;
  }
  function zf(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b;
  }
  function Af(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = d;
    return b;
  }
  function Bf(a, b) {
    var c = Na(b),
      d = c ? b : arguments;
    for (c = c ? 0 : 1; c < d.length; c++) {
      if (null == a) return;
      a = a[d[c]];
    }
    return a;
  }
  function Cf(a, b) {
    return null !== a && b in a;
  }
  function Df(a, b) {
    for (var c in a) if (a[c] == b) return !0;
    return !1;
  }
  function Ef(a) {
    var b = Ff,
      c;
    for (c in b) if (a.call(void 0, b[c], c, b)) return c;
  }
  function Gf(a) {
    for (var b in a) return !1;
    return !0;
  }
  function Hf(a) {
    for (var b in a) delete a[b];
  }
  function If(a, b, c) {
    return null !== a && b in a ? a[b] : c;
  }
  var Jf =
    'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
      ' '
    );
  function Kf(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < Jf.length; f++)
        (c = Jf[f]),
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  var Lf,
    Mf = function () {
      if (void 0 === Lf) {
        var a = null,
          b = v.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy('goog#html', {
              createHTML: Za,
              createScript: Za,
              createScriptURL: Za,
            });
          } catch (c) {
            v.console && v.console.error(c.message);
          }
          Lf = a;
        } else Lf = a;
      }
      return Lf;
    };
  var Of = function (a, b) {
    this.h = b === Nf ? a : '';
  };
  Of.prototype.toString = function () {
    return this.h + '';
  };
  Of.prototype.Ya = !0;
  Of.prototype.La = function () {
    return this.h.toString();
  };
  var Pf = function (a) {
      return a instanceof Of && a.constructor === Of
        ? a.h
        : 'type_error:TrustedResourceUrl';
    },
    Nf = {},
    Qf = function (a) {
      var b = Mf();
      a = b ? b.createScriptURL(a) : a;
      return new Of(a, Nf);
    };
  var Sf = function (a, b) {
    this.h = b === Rf ? a : '';
  };
  Sf.prototype.toString = function () {
    return this.h.toString();
  };
  Sf.prototype.Ya = !0;
  Sf.prototype.La = function () {
    return this.h.toString();
  };
  var Tf = function (a) {
      return a instanceof Sf && a.constructor === Sf
        ? a.h
        : 'type_error:SafeUrl';
    },
    Uf = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    Vf = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    Xf = function (a) {
      if (a instanceof Sf) return a;
      a = 'object' == typeof a && a.Ya ? a.La() : String(a);
      Vf.test(a)
        ? (a = Wf(a))
        : ((a = String(a).replace(/(%0A|%0D)/g, '')),
          (a = a.match(Uf) ? Wf(a) : null));
      return a;
    },
    Yf;
  try {
    new URL('s://g'), (Yf = !0);
  } catch (a) {
    Yf = !1;
  }
  var Zf = Yf,
    Rf = {},
    Wf = function (a) {
      return new Sf(a, Rf);
    },
    $f = Wf('about:invalid#zClosurez');
  var ag = {},
    bg = function (a, b) {
      this.h = b === ag ? a : '';
      this.Ya = !0;
    };
  bg.prototype.La = function () {
    return this.h;
  };
  bg.prototype.toString = function () {
    return this.h.toString();
  };
  var cg = new bg('', ag);
  var dg = {},
    eg = function (a, b) {
      this.h = b === dg ? a : '';
      this.Ya = !0;
    };
  eg.prototype.La = function () {
    return this.h.toString();
  };
  eg.prototype.toString = function () {
    return this.h.toString();
  };
  var fg = function (a) {
      return a instanceof eg && a.constructor === eg
        ? a.h
        : 'type_error:SafeHtml';
    },
    gg = function (a) {
      var b = Mf();
      a = b ? b.createHTML(a) : a;
      return new eg(a, dg);
    };
  var hg = /^[\w+/_-]+[=]{0,2}$/,
    ig = function (a, b) {
      b = (b || v).document;
      return b.querySelector
        ? (a = b.querySelector(a)) &&
          (a = a.nonce || a.getAttribute('nonce')) &&
          hg.test(a)
          ? a
          : ''
        : '';
    };
  var jg = function (a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0;
  };
  l = jg.prototype;
  l.wb = function (a) {
    return (
      a instanceof jg &&
      (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    );
  };
  l.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  l.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  l.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  l.scale = function (a, b) {
    this.x *= a;
    this.y *= 'number' === typeof b ? b : a;
    return this;
  };
  var G = function (a, b) {
    this.width = a;
    this.height = b;
  };
  l = G.prototype;
  l.aspectRatio = function () {
    return this.width / this.height;
  };
  l.isEmpty = function () {
    return !(this.width * this.height);
  };
  l.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  l.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  l.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  l.scale = function (a, b) {
    this.width *= a;
    this.height *= 'number' === typeof b ? b : a;
    return this;
  };
  var kg = function (a) {
      return decodeURIComponent(a.replace(/\+/g, ' '));
    },
    lg = function (a, b) {
      a.length > b && (a = a.substring(0, b - 3) + '...');
      return a;
    },
    mg = String.prototype.repeat
      ? function (a, b) {
          return a.repeat(b);
        }
      : function (a, b) {
          return Array(b + 1).join(a);
        },
    ng = function (a) {
      return null == a ? '' : String(a);
    },
    og = (2147483648 * Math.random()) | 0,
    pg = function (a) {
      return String(a).replace(/\-([a-z])/g, function (b, c) {
        return c.toUpperCase();
      });
    },
    qg = function () {
      return 'googleAvInapp'.replace(/([A-Z])/g, '-$1').toLowerCase();
    },
    rg = function (a) {
      return a.replace(RegExp('(^|[\\s]+)([a-z])', 'g'), function (b, c, d) {
        return c + d.toUpperCase();
      });
    },
    sg = function (a) {
      isFinite(a) && (a = String(a));
      return 'string' === typeof a
        ? /^\s*-?0x/i.test(a)
          ? parseInt(a, 16)
          : parseInt(a, 10)
        : NaN;
    };
  var vg = function (a) {
      return a ? new tg(ug(a)) : ab || (ab = new tg());
    },
    wg = function (a) {
      var b = document;
      return 'string' === typeof a ? b.getElementById(a) : a;
    },
    yg = function (a, b) {
      tf(b, function (c, d) {
        c && 'object' == typeof c && c.Ya && (c = c.La());
        'style' == d
          ? (a.style.cssText = c)
          : 'class' == d
          ? (a.className = c)
          : 'for' == d
          ? (a.htmlFor = c)
          : xg.hasOwnProperty(d)
          ? a.setAttribute(xg[d], c)
          : 0 == d.lastIndexOf('aria-', 0) || 0 == d.lastIndexOf('data-', 0)
          ? a.setAttribute(d, c)
          : (a[d] = c);
      });
    },
    xg = {
      cellpadding: 'cellPadding',
      cellspacing: 'cellSpacing',
      colspan: 'colSpan',
      frameborder: 'frameBorder',
      height: 'height',
      maxlength: 'maxLength',
      nonce: 'nonce',
      role: 'role',
      rowspan: 'rowSpan',
      type: 'type',
      usemap: 'useMap',
      valign: 'vAlign',
      width: 'width',
    },
    Ag = function (a) {
      a = a.document;
      a = zg(a) ? a.documentElement : a.body;
      return new G(a.clientWidth, a.clientHeight);
    },
    Bg = function (a) {
      var b = a.scrollingElement
        ? a.scrollingElement
        : !bc && zg(a)
        ? a.documentElement
        : a.body || a.documentElement;
      a = a.parentWindow || a.defaultView;
      return Zb && a.pageYOffset != b.scrollTop
        ? new jg(b.scrollLeft, b.scrollTop)
        : new jg(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
    },
    H = function (a) {
      return a ? a.parentWindow || a.defaultView : window;
    },
    Eg = function (a, b, c) {
      var d = arguments,
        e = document,
        f = d[1],
        g = Cg(e, String(d[0]));
      f &&
        ('string' === typeof f
          ? (g.className = f)
          : Array.isArray(f)
          ? (g.className = f.join(' '))
          : yg(g, f));
      2 < d.length && Dg(e, g, d, 2);
      return g;
    },
    Dg = function (a, b, c, d) {
      function e(h) {
        h && b.appendChild('string' === typeof h ? a.createTextNode(h) : h);
      }
      for (; d < c.length; d++) {
        var f = c[d];
        if (!Na(f) || (Oa(f) && 0 < f.nodeType)) e(f);
        else {
          a: {
            if (f && 'number' == typeof f.length) {
              if (Oa(f)) {
                var g =
                  'function' == typeof f.item || 'string' == typeof f.item;
                break a;
              }
              if ('function' === typeof f) {
                g = 'function' == typeof f.item;
                break a;
              }
            }
            g = !1;
          }
          Bb(g ? Pb(f) : f, e);
        }
      }
    },
    Cg = function (a, b) {
      b = String(b);
      'application/xhtml+xml' === a.contentType && (b = b.toLowerCase());
      return a.createElement(b);
    },
    zg = function (a) {
      return 'CSS1Compat' == a.compatMode;
    },
    Fg = function (a) {
      a && a.parentNode && a.parentNode.removeChild(a);
    },
    Gg = function (a) {
      var b;
      if (sf && (b = a.parentElement)) return b;
      b = a.parentNode;
      return Oa(b) && 1 == b.nodeType ? b : null;
    },
    Hg = function (a, b) {
      if (!a || !b) return !1;
      if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
      if ('undefined' != typeof a.compareDocumentPosition)
        return a == b || !!(a.compareDocumentPosition(b) & 16);
      for (; b && a != b; ) b = b.parentNode;
      return b == a;
    },
    ug = function (a) {
      return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    },
    Ig = function (a) {
      try {
        return (
          a.contentWindow || (a.contentDocument ? H(a.contentDocument) : null)
        );
      } catch (b) {}
      return null;
    },
    Jg = function (a, b) {
      a && (a = a.parentNode);
      for (var c = 0; a; ) {
        if (b(a)) return a;
        a = a.parentNode;
        c++;
      }
      return null;
    },
    tg = function (a) {
      this.h = a || v.document || document;
    };
  tg.prototype.getElementsByTagName = function (a, b) {
    return (b || this.h).getElementsByTagName(String(a));
  };
  tg.prototype.appendChild = function (a, b) {
    a.appendChild(b);
  };
  tg.prototype.append = function (a, b) {
    Dg(ug(a), a, arguments, 1);
  };
  tg.prototype.canHaveChildren = function (a) {
    if (1 != a.nodeType) return !1;
    switch (a.tagName) {
      case 'APPLET':
      case 'AREA':
      case 'BASE':
      case 'BR':
      case 'COL':
      case 'COMMAND':
      case 'EMBED':
      case 'FRAME':
      case 'HR':
      case 'IMG':
      case 'INPUT':
      case 'IFRAME':
      case 'ISINDEX':
      case 'KEYGEN':
      case 'LINK':
      case 'NOFRAMES':
      case 'NOSCRIPT':
      case 'META':
      case 'OBJECT':
      case 'PARAM':
      case 'SCRIPT':
      case 'SOURCE':
      case 'STYLE':
      case 'TRACK':
      case 'WBR':
        return !1;
    }
    return !0;
  };
  var Lg = function () {
      return (
        !Kg() && (z('iPod') || z('iPhone') || z('Android') || z('IEMobile'))
      );
    },
    Kg = function () {
      return z('iPad') || (z('Android') && !z('Mobile')) || z('Silk');
    };
  var Mg = RegExp(
      '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$'
    ),
    Ng = function (a) {
      var b = a.match(Mg);
      a = b[1];
      var c = b[3];
      b = b[4];
      var d = '';
      a && (d += a + ':');
      c && ((d = d + '//' + c), b && (d += ':' + b));
      return d;
    },
    Og = function (a, b) {
      if (a) {
        a = a.split('&');
        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf('='),
            e = null;
          if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
          } else f = a[c];
          b(f, e ? kg(e) : '');
        }
      }
    },
    Pg = /#|$/,
    Qg = function (a, b) {
      var c = a.search(Pg);
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
      return kg(a.slice(d, -1 !== e ? e : 0));
    };
  var Rg = function (a) {
    var b = [],
      c = [],
      d = {},
      e = function (f, g) {
        var h = g + '  ';
        try {
          if (void 0 === f) b.push('undefined');
          else if (null === f) b.push('NULL');
          else if ('string' === typeof f)
            b.push('"' + f.replace(/\n/g, '\n' + g) + '"');
          else if ('function' === typeof f)
            b.push(String(f).replace(/\n/g, '\n' + g));
          else if (Oa(f)) {
            f[Pa] || c.push(f);
            var k = Ra(f);
            if (d[k]) b.push('*** reference loop detected (id=' + k + ') ***');
            else {
              d[k] = !0;
              b.push('{');
              for (var n in f)
                'function' !== typeof f[n] &&
                  (b.push('\n'), b.push(h), b.push(n + ' = '), e(f[n], h));
              b.push('\n' + g + '}');
              delete d[k];
            }
          } else b.push(f);
        } catch (m) {
          b.push('*** ' + m + ' ***');
        }
      };
    e(a, '');
    for (a = 0; a < c.length; a++) Sa(c[a]);
    return b.join('');
  }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var Sg;
  try {
    new URL('s://g'), (Sg = !0);
  } catch (a) {
    Sg = !1;
  }
  var Tg = Sg;
  function Ug(a, b) {
    if (void 0 !== a.tagName) {
      if ('script' === a.tagName.toLowerCase()) throw Error('');
      if ('style' === a.tagName.toLowerCase()) throw Error('');
    }
    a.innerHTML = fg(b);
  }
  function Vg(a) {
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
  function Wg(a, b) {
    a.write(fg(b));
  }
  var Xg = function (a) {
    this.Hf = a;
  };
  function Yg(a) {
    return new Xg(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ':';
    });
  }
  var Zg = [
    Yg('data'),
    Yg('http'),
    Yg('https'),
    Yg('mailto'),
    Yg('ftp'),
    new Xg(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  var $g = function (a) {
      try {
        return !!a && null != a.location.href && Vb(a, 'foo');
      } catch (b) {
        return !1;
      }
    },
    bh = function (a) {
      var b = void 0 === b ? !1 : b;
      var c = void 0 === c ? v : c;
      for (var d = 0; c && 40 > d++ && ((!b && !$g(c)) || !a(c)); ) c = ah(c);
    },
    ch = function () {
      var a = window;
      bh(function (b) {
        a = b;
        return !1;
      });
      return a;
    },
    ah = function (a) {
      try {
        var b = a.parent;
        if (b && b != a) return b;
      } catch (c) {}
      return null;
    },
    dh = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    },
    eh = function (a) {
      var b = a.length;
      if (0 == b) return 0;
      for (var c = 305419896, d = 0; d < b; d++)
        c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
      return 0 < c ? c : 4294967296 + c;
    };
  function fh(a) {
    var b, c;
    return null !=
      (c = null == (b = /https?:\/\/[^\/]+/.exec(a)) ? void 0 : b[0])
      ? c
      : '';
  }
  var gh = function () {
      var a = v;
      try {
        for (var b = null; b != a; b = a, a = a.parent)
          switch (a.location.protocol) {
            case 'https:':
              return !0;
            case 'file:':
              return !0;
            case 'http:':
              return !1;
          }
      } catch (c) {}
      return !0;
    },
    hh = function (a, b) {
      try {
        return !(!a.frames || !a.frames[b]);
      } catch (c) {
        return !1;
      }
    },
    ih = function (a, b) {
      for (var c = 0; 50 > c; ++c) {
        if (hh(a, b)) return a;
        if (!(a = ah(a))) break;
      }
      return null;
    };
  function jh(a, b) {
    if (a.length && b.head) {
      a = r(a);
      for (var c = a.next(); !c.done; c = a.next())
        if ((c = c.value) && b.head) {
          var d = kh('META');
          b.head.appendChild(d);
          d.httpEquiv = 'origin-trial';
          d.content = c;
        }
    }
  }
  var lh = function () {
      var a = window;
      if ('number' !== typeof a.goog_pvsid)
        try {
          Object.defineProperty(a, 'goog_pvsid', {
            value: Math.floor(Math.random() * Math.pow(2, 52)),
            configurable: !1,
          });
        } catch (b) {}
      return Number(a.goog_pvsid) || -1;
    },
    kh = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    },
    mh = function (a) {
      for (var b = a; a && a != a.parent; ) (a = a.parent), $g(a) && (b = a);
      return b;
    };
  var I = function (a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d;
  };
  I.prototype.getWidth = function () {
    return this.right - this.left;
  };
  I.prototype.getHeight = function () {
    return this.bottom - this.top;
  };
  var nh = function (a) {
    return new I(a.top, a.right, a.bottom, a.left);
  };
  I.prototype.expand = function (a, b, c, d) {
    Oa(a)
      ? ((this.top -= a.top),
        (this.right += a.right),
        (this.bottom += a.bottom),
        (this.left -= a.left))
      : ((this.top -= a),
        (this.right += Number(b)),
        (this.bottom += Number(c)),
        (this.left -= Number(d)));
    return this;
  };
  var oh = function (a, b) {
    return a == b
      ? !0
      : a && b
      ? a.top == b.top &&
        a.right == b.right &&
        a.bottom == b.bottom &&
        a.left == b.left
      : !1;
  };
  I.prototype.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  I.prototype.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  I.prototype.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };
  var ph = function (a, b, c) {
    b instanceof jg
      ? ((a.left += b.x), (a.right += b.x), (a.top += b.y), (a.bottom += b.y))
      : ((a.left += b),
        (a.right += b),
        'number' === typeof c && ((a.top += c), (a.bottom += c)));
    return a;
  };
  I.prototype.scale = function (a, b) {
    b = 'number' === typeof b ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= b;
    this.bottom *= b;
    return this;
  };
  var qh = function (a, b, c, d) {
      this.left = a;
      this.top = b;
      this.width = c;
      this.height = d;
    },
    rh = function (a) {
      return new I(a.top, a.left + a.width, a.top + a.height, a.left);
    };
  l = qh.prototype;
  l.yb = function () {
    return new G(this.width, this.height);
  };
  l.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  l.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  l.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  l.scale = function (a, b) {
    b = 'number' === typeof b ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= b;
    this.height *= b;
    return this;
  };
  function sh(a) {
    a = void 0 === a ? v : a;
    var b = a.context || a.AMP_CONTEXT_DATA;
    if (!b)
      try {
        b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
      } catch (e) {}
    var c, d;
    return (null == (c = b) ? 0 : c.pageViewId) &&
      (null == (d = b) ? 0 : d.canonicalUrl)
      ? b
      : null;
  }
  var th = function () {
      this.S = {};
    },
    uh = function () {
      var a = sh(window);
      if (a) {
        if (a) {
          var b = a.pageViewId;
          a = a.clientId;
          'string' === typeof a && (b += a.replace(/\D/g, '').substr(0, 6));
        } else b = null;
        return +b;
      }
      b = mh(window);
      (a = b.google_global_correlator) ||
        (b.google_global_correlator = a =
          1 + Math.floor(Math.random() * Math.pow(2, 43)));
      return a;
    },
    wh = function (a, b) {
      var c = vh[7] || 'google_ps_7';
      a = a.S;
      var d = a[c];
      return void 0 === d ? ((a[c] = b()), a[c]) : d;
    },
    xh = function (a) {
      var b = uh();
      return wh(a, function () {
        return b;
      });
    },
    zh = function () {
      if (yh) var a = yh;
      else {
        a =
          ((a = void 0 === a ? sh() : a)
            ? $g(a.master)
              ? a.master
              : null
            : null) || window;
        var b = a.google_persistent_state_async;
        a =
          null != b &&
          'object' == typeof b &&
          null != b.S &&
          'object' == typeof b.S
            ? (yh = b)
            : (a.google_persistent_state_async = yh = new th());
      }
      return xh(a);
    },
    yh = null,
    Ah = {},
    vh =
      ((Ah[8] = 'google_prev_ad_formats_by_region'),
      (Ah[9] = 'google_prev_ad_slotnames_by_region'),
      Ah);
  var Ch = function (a, b, c, d, e) {
    Bh(
      a,
      b,
      void 0 === c ? null : c,
      void 0 === d ? !1 : d,
      void 0 === e ? !1 : e
    );
  };
  function Bh(a, b, c, d, e) {
    e = void 0 === e ? !1 : e;
    a.google_image_requests || (a.google_image_requests = []);
    var f = kh('IMG', a.document);
    if (c || d) {
      var g = function (h) {
        c && c(h);
        d && Lb(a.google_image_requests, f);
        Te(f, 'load', g);
        Te(f, 'error', g);
      };
      Se(f, 'load', g);
      Se(f, 'error', g);
    }
    e && (f.attributionsrc = '');
    f.src = b;
    a.google_image_requests.push(f);
  }
  var Eh = function (a, b) {
      var c = void 0 === c ? !1 : c;
      var d = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=' + b;
      dh(a, function (e, f) {
        e && (d += '&' + f + '=' + encodeURIComponent(e));
      });
      Dh(d, c);
    },
    Dh = function (a, b) {
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
        : Ch(c, a, void 0, b, d);
    };
  var Fh = function (a, b, c) {
      c = void 0 === c ? {} : c;
      this.error = a;
      this.context = b.context;
      this.msg = b.message || '';
      this.id = b.id || 'jserror';
      this.meta = c;
    },
    Gh = function (a) {
      return !!(a.error && a.meta && a.id);
    };
  function J(a) {
    var b = Ha.apply(1, arguments);
    if (0 === b.length) return Qf(a[0]);
    for (var c = [a[0]], d = 0; d < b.length; d++)
      c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
    return Qf(c.join(''));
  }
  function Hh(a, b) {
    var c = Pf(a).toString();
    if (/#/.test(c)) throw Error('');
    var d = /\?/.test(c) ? '&' : '?';
    b.forEach(function (e, f) {
      e = e instanceof Array ? e : [e];
      for (var g = 0; g < e.length; g++) {
        var h = e[g];
        null !== h &&
          void 0 !== h &&
          ((c +=
            d + encodeURIComponent(f) + '=' + encodeURIComponent(String(h))),
          (d = '&'));
      }
    });
    return Qf(c);
  }
  var Ih = q(['https://pagead2.googlesyndication.com/pagead/js/err_rep.js']),
    Jh = function () {
      var a = void 0 === a ? 'jserror' : a;
      var b = void 0 === b ? 0.01 : b;
      var c = void 0 === c ? J(Ih) : c;
      this.j = a;
      this.l = !1;
      this.h = null;
      this.o = !1;
      this.C = Math.random();
      this.A = b;
      this.B = this.Pa;
      this.I = c;
    };
  l = Jh.prototype;
  l.xd = function (a) {
    this.j = a;
  };
  l.Ic = function (a) {
    this.h = a;
  };
  l.yd = function (a) {
    this.l = a;
  };
  l.zd = function (a) {
    this.o = a;
  };
  l.Pa = function (a, b, c, d, e) {
    c = void 0 === c ? this.A : c;
    e = void 0 === e ? this.j : e;
    if ((this.o ? this.C : Math.random()) > c) return this.l;
    Gh(b) || (b = new Fh(b, { context: a, id: e }));
    if (d || this.h) (b.meta = {}), this.h && this.h(b.meta), d && d(b.meta);
    v.google_js_errors = v.google_js_errors || [];
    v.google_js_errors.push(b);
    v.error_rep_loaded ||
      ((b = v.document),
      (a = kh('SCRIPT', b)),
      (a.src = Pf(this.I)),
      Vg(a),
      (b = b.getElementsByTagName('script')[0]) &&
        b.parentNode &&
        b.parentNode.insertBefore(a, b),
      (v.error_rep_loaded = !0));
    return this.l;
  };
  l.nb = function (a, b, c) {
    try {
      return b();
    } catch (d) {
      if (!this.B(a, d, this.A, c, this.j)) throw d;
    }
  };
  l.td = function (a, b, c, d) {
    var e = this;
    return function () {
      var f = Ha.apply(0, arguments);
      return e.nb(
        a,
        function () {
          return b.apply(c, f);
        },
        d
      );
    };
  };
  var Kh = function (a) {
      return a.prerendering
        ? 3
        : { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
            a.visibilityState ||
              a.webkitVisibilityState ||
              a.mozVisibilityState ||
              ''
          ] || 0;
    },
    Lh = function (a) {
      var b;
      a.visibilityState
        ? (b = 'visibilitychange')
        : a.mozVisibilityState
        ? (b = 'mozvisibilitychange')
        : a.webkitVisibilityState && (b = 'webkitvisibilitychange');
      return b;
    };
  var Mh = null;
  function Nh() {
    var a = void 0 === a ? v : a;
    return (a = a.performance) && a.now && a.timing
      ? Math.floor(a.now() + a.timing.navigationStart)
      : Xa();
  }
  function Oh() {
    var a = void 0 === a ? v : a;
    return (a = a.performance) && a.now ? a.now() : null;
  }
  function Ph(a, b) {
    b = void 0 === b ? v : b;
    var c, d;
    return (
      (null == (c = b.performance)
        ? void 0
        : null == (d = c.timing)
        ? void 0
        : d[a]) || 0
    );
  }
  function Qh() {
    var a = void 0 === a ? v : a;
    var b = Math.min(
      Ph('domLoading', a) || Infinity,
      Ph('domInteractive', a) || Infinity
    );
    return Infinity === b
      ? Math.max(Ph('responseEnd', a), Ph('navigationStart', a))
      : b;
  }
  var Rh = function (a, b, c, d) {
    this.label = a;
    this.type = b;
    this.value = c;
    this.duration = void 0 === d ? 0 : d;
    this.uniqueId = Math.random();
    this.taskId = this.slotId = void 0;
  };
  var Sh = v.performance,
    Th = !!(Sh && Sh.mark && Sh.measure && Sh.clearMarks),
    Uh = Ne(function () {
      var a;
      if ((a = Th)) {
        var b;
        if (null === Mh) {
          Mh = '';
          try {
            a = '';
            try {
              a = v.top.location.hash;
            } catch (c) {
              a = v.location.hash;
            }
            a && (Mh = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : '');
          } catch (c) {}
        }
        b = Mh;
        a = !!b.indexOf && 0 <= b.indexOf('1337');
      }
      return a;
    }),
    Vh = function (a, b) {
      this.C = [];
      this.h = b || v;
      var c = null;
      b &&
        ((b.google_js_reporting_queue = b.google_js_reporting_queue || []),
        (this.C = b.google_js_reporting_queue),
        (c = b.google_measure_js_timing));
      this.l = Uh() || (null != c ? c : Math.random() < a);
    };
  Vh.prototype.I = function () {
    this.l = !1;
    this.C != this.h.google_js_reporting_queue &&
      (Uh() && Bb(this.C, Wh), (this.C.length = 0));
  };
  Vh.prototype.K = function (a) {
    !this.l || 2048 < this.C.length || this.C.push(a);
  };
  var Wh = function (a) {
    a &&
      Sh &&
      Uh() &&
      (Sh.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_start'),
      Sh.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_end'));
  };
  Vh.prototype.start = function (a, b) {
    if (!this.l) return null;
    a = new Rh(a, b, Oh() || Nh());
    b = 'goog_' + a.label + '_' + a.uniqueId + '_start';
    Sh && Uh() && Sh.mark(b);
    return a;
  };
  Vh.prototype.end = function (a) {
    if (this.l && 'number' === typeof a.value) {
      a.duration = (Oh() || Nh()) - a.value;
      var b = 'goog_' + a.label + '_' + a.uniqueId + '_end';
      Sh && Uh() && Sh.mark(b);
      this.K(a);
    }
  };
  var Xh = function (a) {
    a = a._google_rum_ns_ = a._google_rum_ns_ || {};
    return (a.pq = a.pq || []);
  };
  var Yh = function (a, b, c) {
      dh(b, function (d, e) {
        var f = c && c[e];
        (!d && 0 !== d) ||
          f ||
          ((a +=
            '&' + encodeURIComponent(e) + '=' + encodeURIComponent(String(d))),
          c && (c[e] = !0));
      });
      return a;
    },
    ei = function (a, b, c, d, e, f, g, h) {
      f = void 0 === f ? Infinity : f;
      g = void 0 === g ? !1 : g;
      Vh.call(this, a, h);
      var k = this;
      this.F = 0;
      this.M = f;
      this.aa = b;
      this.L = c;
      this.Z = d;
      this.ia = e;
      a = this.h.navigator;
      this.X = !('csi.gstatic.com' !== this.L || !a || !a.sendBeacon);
      this.A = {};
      this.J = {};
      (this.h.performance && this.h.performance.now) || Zh(this, 'dat', 1);
      a && a.deviceMemory && Zh(this, 'dmc', a.deviceMemory);
      this.h === this.h.top && Zh(this, 'top', 1);
      this.V = !g;
      this.O = function () {
        k.h.setTimeout(function () {
          return $h(k);
        }, 1100);
      };
      this.ca = [];
      this.U = function () {
        Zh(k, 'uet', 2);
        for (var m = r(k.ca), x = m.next(); !x.done; x = m.next()) {
          x = x.value;
          try {
            x();
          } catch (y) {}
        }
        m = k.h;
        var u = void 0 === u ? {} : u;
        'function' === typeof window.CustomEvent
          ? (x = new CustomEvent('rum_blp', u))
          : ((x = document.createEvent('CustomEvent')),
            x.initCustomEvent(
              'rum_blp',
              !!u.bubbles,
              !!u.cancelable,
              u.detail
            ));
        m.dispatchEvent(x);
        $h(k);
        null != k.A.uet && ((k.o -= 3 + k.A.uet.length + 2), delete k.A.uet);
      };
      this.na = Pe(function () {
        $h(k);
      });
      this.ua = function () {
        var m = k.h.document;
        (null != m.hidden
          ? m.hidden
          : null != m.mozHidden
          ? m.mozHidden
          : null != m.webkitHidden && m.webkitHidden) && k.na();
      };
      this.G = this.h.setTimeout(function () {
        return $h(k);
      }, 5e3);
      this.B = {};
      this.o = b.length + c.length + d.length + e.length + 3;
      this.j = 0;
      Bb(this.C, function (m) {
        return ai(k, m);
      });
      this.H = [];
      b = Xh(this.h);
      var n = function (m) {
        var x = m[0];
        m = m[1];
        var u = x.length + m.length + 2;
        8e3 < k.o + k.j + u && $h(k);
        k.H.push([x, m]);
        k.j += u;
        bi(k);
        return 0;
      };
      Bb(b, function (m) {
        return n(m);
      });
      b.length = 0;
      b.push = n;
      ci(this);
      di(this);
    };
  t(ei, Vh);
  var di = function (a) {
      'complete' === a.h.document.readyState
        ? a.h.setTimeout(function () {
            return $h(a);
          }, 0)
        : Se(a.h, 'load', a.O);
      var b = Lh(a.h.document);
      'undefined' !== typeof b && Se(a.h, b, a.ua);
      Se(a.h, 'pagehide', a.U);
    },
    Zh = function (a, b, c) {
      c = String(c);
      a.o =
        null != a.A[b]
          ? a.o + (c.length - a.A[b].length)
          : a.o + (b.length + c.length + 2);
      a.A[b] = c;
    },
    hi = function (a, b, c, d, e) {
      e = void 0 === e ? '' : e;
      var f = fi(a, b, c, d, e);
      8e3 < a.o + a.j + f && ($h(a), (f = b.length + c.length + 2));
      gi(a, b, c, d, e);
      a.j += f;
      bi(a);
    },
    fi = function (a, b, c, d, e) {
      return null == a.B[b]
        ? b.length + c.length + 2
        : d
        ? c.length + (void 0 === e ? '' : e).length
        : c.length - a.B[b].length;
    },
    gi = function (a, b, c, d, e) {
      a.B[b] =
        d && null != a.B[b] ? a.B[b] + ('' + (void 0 === e ? '' : e) + c) : c;
    },
    bi = function (a) {
      6e3 <= a.o + a.j && $h(a);
    },
    $h = function (a) {
      if (a.l && a.V) {
        try {
          if (a.j) {
            var b = a.B;
            a.F++;
            var c = ii(a, b);
            b = !1;
            try {
              b = !!(a.X && a.h.navigator && a.h.navigator.sendBeacon(c, null));
            } catch (d) {
              a.X = !1;
            }
            b || Ch(a.h, c);
            ci(a);
            a.F === a.M && a.I();
          }
        } catch (d) {
          new Jh().Pa(358, d);
        }
        a.B = {};
        a.j = 0;
        a.C.length = 0;
        a.h.clearTimeout(a.G);
        a.G = 0;
      }
    },
    ii = function (a, b) {
      var c = a.aa + '//' + a.L + a.Z + a.ia,
        d = {};
      c = Yh(c, a.A, d);
      c = Yh(c, b, d);
      b = a.h;
      b.google_timing_params &&
        ((c = Yh(c, b.google_timing_params, d)),
        (b.google_timing_params = void 0));
      Bb(a.H, function (e) {
        var f = r(e);
        e = f.next().value;
        f = f.next().value;
        var g = {};
        c = Yh(c, ((g[e] = f), g));
      });
      a.H.length = 0;
      return c;
    },
    ci = function (a) {
      Zh(a, 'puid', (a.F + 1).toString(36) + '~' + Xa().toString(36));
    },
    ai = function (a, b) {
      var c = 'met.' + b.type,
        d =
          'number' === typeof b.value
            ? Math.round(b.value).toString(36)
            : b.value,
        e = Math.round(b.duration);
      b =
        '' +
        b.label +
        (null != b.slotId ? '_' + b.slotId : '') +
        ('.' + d) +
        (0 < e ? '_' + e.toString(36) : '') +
        (null != b.taskId ? '__' + Math.round(b.taskId).toString(36) : '');
      hi(a, c, b, !0, '~');
    };
  ei.prototype.K = function (a) {
    this.l && this.F < this.M && (Vh.prototype.K.call(this, a), ai(this, a));
  };
  ei.prototype.I = function () {
    Vh.prototype.I.call(this);
    this.h.clearTimeout(this.G);
    this.j = this.G = 0;
    this.B = {};
    Hf(this.J);
    Hf(this.A);
    Te(this.h, 'load', this.O);
    Te(this.h, 'pagehide', this.U);
  };
  var K = function (a) {
    var b = 'kb';
    if (a.kb && a.hasOwnProperty(b)) return a.kb;
    b = new a();
    return (a.kb = b);
  };
  var L = function () {
      this.h = new ei(
        1,
        'https:',
        'csi.gstatic.com',
        '/csi?v=2&s=',
        'ima',
        void 0,
        !0
      );
      var a = zh();
      null != a && Zh(this.h, 'c', a);
      a = parseInt(this.h.A.c, 10) / 2;
      null != a && Zh(this.h, 'slotId', a);
    },
    M = function (a, b, c) {
      if (null != c) {
        a = a.h;
        var d = b + '=' + c;
        a.J[d] || (hi(a, b, c, !1), 1e3 > d.length && (a.J[d] = !0));
      }
    },
    ji = function (a, b) {
      for (var c in b)
        b[c] =
          'object' === typeof b[c]
            ? encodeURIComponent(JSON.stringify(b[c]))
            : encodeURIComponent(String(b[c]));
      a = a.h;
      c = !1;
      var d = 0,
        e;
      for (e in b) null != a.B[e] && (c = !0), (d += fi(a, e, b[e], !1));
      (8e3 < a.o + a.j + d || c) && $h(a);
      for (var f in b) gi(a, f, b[f], !1);
      a.j += d;
      bi(a);
    },
    ki = function (a) {
      var b = L.h().h,
        c = Nh() - 0;
      b.l && b.K(new Rh(a, 4, c, 0));
    };
  L.h = function () {
    return K(L);
  };
  var li = function (a) {
      return /^\s*$/.test(a)
        ? !1
        : /^[\],:{}\s\u2028\u2029]*$/.test(
            a
              .replace(/\\["\\\/bfnrtu]/g, '@')
              .replace(
                /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                ']'
              )
              .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, '')
          );
    },
    mi = function (a) {
      try {
        return v.JSON.parse(a);
      } catch (b) {}
      a = String(a);
      if (li(a))
        try {
          return eval('(' + a + ')');
        } catch (b) {}
      throw Error('Invalid JSON string: ' + a);
    },
    ni = function (a) {
      this.h = a;
    },
    pi = function (a, b) {
      var c = [];
      oi(a, b, c);
      return c.join('');
    },
    oi = function (a, b, c) {
      if (null == b) c.push('null');
      else {
        if ('object' == typeof b) {
          if (Array.isArray(b)) {
            var d = b;
            b = d.length;
            c.push('[');
            for (var e = '', f = 0; f < b; f++)
              c.push(e),
                (e = d[f]),
                oi(a, a.h ? a.h.call(d, String(f), e) : e, c),
                (e = ',');
            c.push(']');
            return;
          }
          if (
            b instanceof String ||
            b instanceof Number ||
            b instanceof Boolean
          )
            b = b.valueOf();
          else {
            c.push('{');
            f = '';
            for (d in b)
              Object.prototype.hasOwnProperty.call(b, d) &&
                ((e = b[d]),
                'function' != typeof e &&
                  (c.push(f),
                  qi(d, c),
                  c.push(':'),
                  oi(a, a.h ? a.h.call(b, d, e) : e, c),
                  (f = ',')));
            c.push('}');
            return;
          }
        }
        switch (typeof b) {
          case 'string':
            qi(b, c);
            break;
          case 'number':
            c.push(isFinite(b) && !isNaN(b) ? String(b) : 'null');
            break;
          case 'boolean':
            c.push(String(b));
            break;
          case 'function':
            c.push('null');
            break;
          default:
            throw Error('Unknown type: ' + typeof b);
        }
      }
    },
    ri = {
      '"': '\\"',
      '\\': '\\\\',
      '/': '\\/',
      '\b': '\\b',
      '\f': '\\f',
      '\n': '\\n',
      '\r': '\\r',
      '\t': '\\t',
      '\v': '\\u000b',
    },
    si = /\uffff/.test('\uffff')
      ? /[\\"\x00-\x1f\x7f-\uffff]/g
      : /[\\"\x00-\x1f\x7f-\xff]/g,
    qi = function (a, b) {
      b.push(
        '"',
        a.replace(si, function (c) {
          var d = ri[c];
          d ||
            ((d = '\\u' + (c.charCodeAt(0) | 65536).toString(16).slice(1)),
            (ri[c] = d));
          return d;
        }),
        '"'
      );
    };
  var ti = function () {
      this.l = null;
      this.h = 'missing-id';
      this.j = !1;
    },
    vi = function (a) {
      var b = null;
      try {
        b = document.getElementsByClassName('lima-exp-data');
      } catch (c) {
        return ui('missing-element', a.h), null;
      }
      if (1 < b.length) return ui('multiple-elements', a.h), null;
      b = b[0];
      return b ? b.innerHTML : (ui('missing-element', a.h), null);
    },
    xi = function () {
      var a = wi,
        b = vi(a);
      if (null !== b)
        if (li(b)) {
          var c = JSON.parse(b);
          b = c.experimentIds;
          var d = c.binaryIdentifier;
          c = c.adEventId;
          var e = 'string' === typeof d;
          if ('string' == typeof c) {
            var f = L.h();
            null != c && Zh(f.h, 'qqid', c);
          }
          e && (a.h = d);
          'string' !== typeof b
            ? ui('missing-flags', a.h)
            : (e || ui('missing-binary-id', a.h), (a.l = b));
        } else ui('invalid-json', a.h);
    };
  ti.prototype.reset = function () {
    this.l = null;
    this.h = 'missing-id';
  };
  var zi = function (a, b, c, d, e) {
      this.id = a;
      this.D = b;
      this.o = c;
      this.h = !1;
      this.l = d;
      this.j = e;
      this.o && yi(this);
    },
    Ai = function (a) {
      return a.h || a.o;
    },
    yi = function (a) {
      if (a.l && a.j) {
        var b = a.l;
        b && Object.assign(a.j.h, b);
      }
    },
    Bi = function () {
      this.h = [];
    },
    Ci = function () {
      this.h = new Map();
      this.j = !1;
      this.A = new Bi();
      this.B = new zi(0, 0, !1);
      this.l = [this.A];
      this.o = new rf();
    },
    N = function (a) {
      var b = Di;
      if (
        b.j ||
        b.h.has(a.id) ||
        (null == a.D && null == a.control) ||
        0 == a.gf
      )
        return b.B;
      var c = b.A;
      if (null != a.control)
        for (var d = r(b.l), e = d.next(); !e.done; e = d.next()) {
          if (((e = e.value), e.h.includes(a.control))) {
            c = e;
            break;
          }
        }
      else null != a.Y && (c = a.Y);
      d = 0;
      null != a.control ? (d = a.control.D) : null != a.D && (d = a.D);
      a = new zi(a.id, d, !!a.mi, a.flags, b.o);
      c.h.push(a);
      b.l.includes(c) || b.l.push(c);
      b.h.set(a.id, a);
      return a;
    },
    Ei = function () {
      var a = Di;
      return [].concat(ia(a.h.keys())).filter(function (b) {
        return Ai(this.h.get(b));
      }, a);
    },
    Fi = function (a) {
      var b = Di;
      b.j || (a.h(b.l, b.h), (b.j = !0));
    };
  Ci.prototype.reset = function () {
    for (var a = r(this.h), b = a.next(); !b.done; b = a.next())
      (b = r(b.value)), b.next(), (b.next().value.h = !1);
    this.j = !1;
    this.o.reset();
  };
  var Di = new Ci(),
    Hi = function () {
      return Gi.h
        .filter(function (a) {
          return Ai(a);
        })
        .map(function (a) {
          return a.id;
        });
    };
  var Ii = function () {};
  Ii.prototype.h = function (a) {
    a = r(a);
    for (var b = a.next(); !b.done; b = a.next()) {
      var c = 0,
        d = Math.floor(1e3 * Math.random());
      b = r(b.value.h);
      for (var e = b.next(); !e.done; e = b.next())
        if (((e = e.value), (c += e.D), d < c)) {
          e.h = !0;
          yi(e);
          break;
        }
    }
  };
  var Ki = function (a) {
    D.call(this, a, -1, Ji);
  };
  t(Ki, D);
  var Ji = [2, 8],
    Li = [3, 4, 5];
  var Ni = function (a) {
    D.call(this, a, -1, Mi);
  };
  t(Ni, D);
  var Mi = [4];
  var Pi = function (a) {
    D.call(this, a, -1, Oi);
  };
  t(Pi, D);
  var Oi = [5],
    Qi = [1, 2, 3, 6, 7];
  var Si = function (a) {
    D.call(this, a, -1, Ri);
  };
  t(Si, D);
  Si.prototype.getId = function () {
    return rd(B(this, 1), 0);
  };
  var Ri = [2];
  var Ui = function (a) {
    D.call(this, a, -1, Ti);
  };
  t(Ui, D);
  var Ti = [2];
  var Wi = function (a) {
    D.call(this, a, -1, Vi);
  };
  t(Wi, D);
  var Vi = [2];
  var Yi = function (a) {
    D.call(this, a, -1, Xi);
  };
  t(Yi, D);
  var Xi = [1, 4, 2, 3];
  function Zi(a, b) {
    switch (b) {
      case 1:
        return sd(a, 1, Qi);
      case 2:
        return sd(a, 2, Qi);
      case 3:
        return sd(a, 3, Qi);
      case 6:
        return sd(a, 6, Qi);
      default:
        return null;
    }
  }
  function $i(a, b) {
    if (!a) return null;
    switch (b) {
      case 1:
        return rd(fd(a, 1), !1);
      case 7:
        return rd(B(a, 3), '');
      case 2:
        var c = void 0 === c ? 0 : c;
        return rd(ed(a, 2), c);
      case 3:
        return rd(B(a, 3), '');
      case 6:
        b = Oc(a.da);
        c = cd(a, 4, 1, !1, b);
        var d = Kc(c);
        if (!(d & 4)) {
          Object.isFrozen(c) && ((c = Nc(c.slice())), bd(a, 4, c, !1));
          for (var e = 0, f = 0; e < c.length; e++) {
            var g = c[e];
            null != g && (c[f++] = g);
          }
          f < e && (c.length = f);
          Ic(c, 5);
          b && (Ic(c, 2), Object.freeze(c));
        }
        !b &&
          (d & 2 || Object.isFrozen(c)) &&
          ((c = Array.prototype.slice.call(c)), Ic(c, 5), gd(a, 4, c, !1));
        return c;
      default:
        return null;
    }
  }
  var aj = {},
    bj = ((aj[47] = tc), aj);
  function cj() {
    var a = dj,
      b = md(new Yi(ej), Wi, 2);
    1 == b.length &&
      16 == rd(B(b[0], 1), 0) &&
      md(b[0], Ui, 2).forEach(function (c) {
        var d = rd(B(c, 1), 0),
          e = kd(c, Ki, 3),
          f = a[rd(B(c, 4), 0)];
        md(c, Si, 2).forEach(function (g) {
          var h = d || rd(B(g, 4), 0),
            k = g.getId(),
            n = e || kd(g, Ki, 3);
          n = n ? sd(n, 3, Li) : null;
          n = bj[n];
          g = fj(md(g, Pi, 2));
          N({ id: k, D: h, Y: f, gf: n, flags: g });
        });
      });
  }
  function fj(a) {
    if (a.length) {
      var b = {};
      a.forEach(function (c) {
        var d = id(c, Qi),
          e = kd(c, Ni, 4);
        e && ((c = Zi(c, d)), (d = $i(e, d)), (b[c] = d));
      });
      return b;
    }
  }
  var gj = function (a) {
    this.j = a;
  };
  gj.prototype.h = function (a, b) {
    a = r(this.j);
    for (var c = a.next(); !c.done; c = a.next())
      if ((c = b.get(c.value))) (c.h = !0), yi(c);
  };
  var hj = function (a, b) {
    this.j = a;
    this.l = b;
  };
  t(hj, gj);
  hj.prototype.h = function (a, b) {
    gj.prototype.h.call(this, a, b);
    var c = [];
    a = [];
    for (var d = r(this.j), e = d.next(); !e.done; e = d.next())
      (e = e.value), b.get(e) ? c.push(e) : a.push(e);
    b = c.map(String).join(',') || '0';
    a = a.map(String).join(',') || '0';
    M(L.h(), 'sei', b);
    M(L.h(), 'nsei', a);
    M(L.h(), 'bi', this.l);
  };
  var ij = function () {
    ti.apply(this, arguments);
  };
  t(ij, ti);
  var ui = function (a, b) {
    var c = L.h();
    M(c, 'eee', a);
    M(c, 'bi', b);
  };
  ij.h = function () {
    return K(ij);
  };
  function jj() {
    return kj
      .split(',')
      .map(function (a) {
        return parseInt(a, 10);
      })
      .filter(function (a) {
        return !isNaN(a);
      });
  }
  var Gi = new Bi(),
    lj = new Bi(),
    mj = new Bi(),
    nj = new Bi(),
    oj = new Bi(),
    pj = new Bi(),
    qj = new Bi(),
    rj = new Bi(),
    sj = new Bi(),
    tj = new Bi(),
    uj = new Bi(),
    vj = new Bi(),
    wj = new Bi(),
    xj = new Bi(),
    yj = new Bi(),
    zj = new Bi();
  N({ id: 318475490, D: 0 });
  N({ id: 324123032, D: 0 });
  N({ id: 418572103, D: 0 });
  N({ id: 420706097, D: 10 });
  N({ id: 420706098, D: 10 });
  N({ id: 21062100, D: 0 });
  N({ id: 420706105, D: 0 });
  N({ id: 420706106, D: 0 });
  N({ id: 21064018, D: 0 });
  N({ id: 21064020, D: 0 });
  N({ id: 21064022, D: 0 });
  N({ id: 21064024, D: 0 });
  N({ id: 21064075, D: 0 });
  N({ id: 21064201, D: 0 });
  N({ id: 420706142, D: 0 });
  N({ id: 21064347, D: 0 });
  N({ id: 44745813, D: 0 });
  N({ id: 44746068, D: 0 });
  N({ id: 21064565, D: 0 });
  N({ id: 21064567, D: 0 });
  N({ id: 418572006, D: 10 });
  N({ id: 44768716, D: 10, Y: vj });
  var Aj = N({ id: 44768717, D: 10, Y: vj }),
    Bj = N({ id: 44744588, D: 10 }),
    Cj = N({ id: 44747319, D: 10 });
  N({ id: 44740339, D: 10 });
  var Dj = N({ id: 44740340, D: 10 });
  N({ id: 44749839, D: 0 });
  var Ej = N({ id: 44749840, D: 0 });
  N({ id: 44749841, D: 0 });
  var Fj = N({ id: 44749842, D: 0 });
  N({ id: 44749843, D: 1 });
  var Gj = N({ id: 44749844, D: 1 });
  N({ id: 44749845, D: 1 });
  var Hj = N({ id: 44749846, D: 1 });
  N({ id: 44714743, D: 0 });
  N({ id: 44719216, D: 0 });
  N({ id: 44730895, D: 10 });
  N({ id: 44730896, D: 10 });
  N({ id: 44736292, D: 10 });
  N({ id: 44736293, D: 10 });
  N({ id: 44772138, D: 10 });
  N({ id: 44772139, D: 10 });
  N({ id: 31061774, D: 10 });
  var Ij = N({ id: 31061775, D: 10 });
  N({ id: 44715336, D: 10 });
  N({ id: 44729309, D: 10 });
  N({ id: 75259410, D: 0 });
  N({ id: 75259412, D: 0 });
  N({ id: 75259413, D: 0 });
  N({ id: 44773378, D: 10, Y: mj });
  var Jj = N({ id: 44773379, D: 10, Y: mj });
  N({ id: 44724516, D: 0 });
  N({ id: 44726389, D: 10 });
  N({ id: 44752711, D: 50 });
  N({ id: 44752052, D: 50 });
  N({ id: 44752657, D: 50 });
  N({ id: 44781407, Y: nj, D: 10 });
  N({ id: 44781408, Y: nj, D: 10 });
  N({ id: 44781409, Y: nj, D: 10 });
  N({ id: 44777647, Y: oj, D: 0 });
  N({ id: 44777648, Y: oj, D: 0 });
  N({ id: 44777649, Y: oj, D: 1e3 });
  N({ id: 44781752, Y: qj, D: 10 });
  N({ id: 44781753, Y: qj, D: 10 });
  N({ id: 44782990, Y: rj, D: 10 });
  N({ id: 44782991, Y: rj, D: 10 });
  N({ id: 44727953, D: 0 });
  N({ id: 44729911, D: 0 });
  N({ id: 44782089, Y: pj, D: 10 });
  N({ id: 44782090, Y: pj, D: 10 });
  N({ id: 44730425, D: 0 });
  N({ id: 44730426, D: 0 });
  N({ id: 44733246, D: 10 });
  N({ id: 44750823, D: 10, Y: tj });
  N({ id: 44750824, D: 10, Y: tj });
  N({ id: 44750822, D: 10, Y: tj });
  N({ id: 44737473, D: 10, Y: lj });
  N({ id: 44771449, D: 10, Y: lj });
  N({ id: 44771450, D: 10, Y: lj });
  N({ id: 44751889, D: 10 });
  N({ id: 44751890, D: 10 });
  N({ id: 44738437, D: 0, Y: uj });
  var Kj = N({ id: 44738438, D: 0, Y: uj });
  N({ id: 44783707, D: 10 });
  var Lj = N({ id: 44783708, D: 10 });
  N({ id: 44752995, D: 10 });
  N({ id: 44752996, D: 10 });
  var Mj = N({ id: 44748969, D: 1e3, Y: xj });
  N({ id: 44762627, D: 0 });
  N({ id: 44762628, D: 0 });
  N({ id: 44752538, D: 0 });
  N({ id: 44754608, D: 10 });
  N({ id: 44754609, D: 10 });
  N({ id: 44770822, D: 10 });
  N({ id: 44770823, D: 10 });
  N({ id: 44770824, D: 10 });
  N({ id: 44770825, D: 10 });
  N({ id: 75259414, D: 0 });
  N({ id: 44731964, D: 50, Y: Gi });
  N({ id: 44731965, D: 50, Y: Gi });
  N({ id: 44765701, D: 1e3, Y: wj });
  N({ id: 44767584, D: 0 });
  var Nj,
    Oj = (
      null == (Nj = window.document.featurePolicy)
        ? 0
        : Nj.allowedFeatures().includes('attribution-reporting')
    )
      ? 300
      : 0;
  N({ id: 44776494, D: Oj, Y: yj });
  N({ id: 44776495, D: Oj, Y: yj });
  var Pj,
    Qj =
      (null == (Pj = window.document.featurePolicy) ||
        Pj.allowedFeatures().includes('attribution-reporting'),
      0);
  N({ id: 44769484, D: Qj, Y: zj });
  N({ id: 44769485, D: Qj, Y: zj });
  N({ id: 44776384, D: 0 });
  N({ id: 44773331, D: 10 });
  N({ id: 44773332, D: 10 });
  N({ id: 44775192, D: 10 });
  N({ id: 44775193, D: 10 });
  N({ id: 44783566, D: 1 });
  N({ id: 45390960, D: 1 });
  N({ id: 44783518, D: 0 });
  N({ id: 44783849, D: 0 });
  var Rj = {},
    dj = ((Rj[32] = Gi), (Rj[35] = sj), Rj);
  dj = void 0 === dj ? {} : dj;
  if (
    !/^\{+IMA_EXPERIMENT_STATE_JSPB\}+$/.test('{{IMA_EXPERIMENT_STATE_JSPB}}')
  )
    try {
      var ej = JSON.parse('{{IMA_EXPERIMENT_STATE_JSPB}}');
      ej instanceof Array && cj();
    } catch (a) {
      M(L.h(), 'espe', a.message);
    }
  if ('undefined' === typeof window.v8_flag_map) {
    var wi = ij.h();
    wi.j || (xi(), (wi.j = !0));
    var kj = wi.l,
      Sj;
    wi.j || (xi(), (wi.j = !0));
    Sj = wi.h;
    if (null != kj) {
      var Tj = new hj(jj(), Sj);
      Fi(Tj);
    }
  }
  var Uj = [
    'AyzXKL8MdBHvOVVzOBruMH4ejTtc1ZYFY15XURvuVFNIaGRUMEWwUuOwPk/7RTLViwZhNSTz/my1X90KqvXn1wYAAAB4eyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9',
  ];
  var Vj = function () {
    var a = {};
    this.h = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.j = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.l = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
  };
  function Wj(a) {
    return K(Vj).h(a.h, a.defaultValue);
  }
  function Xj(a) {
    return K(Vj).j(a.h, a.defaultValue);
  }
  function Yj(a) {
    return K(Vj).l(a.h, a.defaultValue);
  }
  var Zj = {
      issuerOrigin: 'https://attestation.android.com',
      issuancePath: '/att/i',
      redemptionPath: '/att/r',
    },
    ak = {
      issuerOrigin: 'https://pagead2.googlesyndication.com',
      issuancePath: '/dtt/i',
      redemptionPath: '/dtt/r',
      getStatePath: '/dtt/s',
    };
  var ck = function (a, b, c) {
    E.call(this);
    var d = this;
    this.j = a;
    this.h = [];
    b && bk() && this.h.push(Zj);
    c && this.h.push(ak);
    if (document.hasTrustToken && !Wj(of)) {
      var e = new Map();
      this.h.forEach(function (f) {
        e.set(f.issuerOrigin, {
          issuerOrigin: f.issuerOrigin,
          state: d.j ? 1 : 12,
          hasRedemptionRecord: !1,
        });
      });
      window.goog_tt_state_map =
        window.goog_tt_state_map && window.goog_tt_state_map instanceof Map
          ? new Map([].concat(ia(e), ia(window.goog_tt_state_map)))
          : e;
      (window.goog_tt_promise_map &&
        window.goog_tt_promise_map instanceof Map) ||
        (window.goog_tt_promise_map = new Map());
    }
  };
  t(ck, E);
  var bk = function () {
      var a = void 0 === a ? window : a;
      a = a.navigator.userAgent;
      var b = /Chrome/.test(a);
      return /Android/.test(a) && b;
    },
    dk = function (a, b, c) {
      var d,
        e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
      e && ((e.state = b), void 0 != c && (e.hasRedemptionRecord = c));
    },
    ek = function () {
      var a = '' + Zj.issuerOrigin + Zj.redemptionPath,
        b = {
          keepalive: !0,
          trustToken: {
            type: 'token-redemption',
            issuer: Zj.issuerOrigin,
            refreshPolicy: 'none',
          },
        };
      dk(Zj.issuerOrigin, 2);
      return window
        .fetch(a, b)
        .then(function (c) {
          if (!c.ok) throw Error(c.status + ': Network response was not ok!');
          dk(Zj.issuerOrigin, 6, !0);
        })
        .catch(function (c) {
          c && 'NoModificationAllowedError' === c.name
            ? dk(Zj.issuerOrigin, 6, !0)
            : dk(Zj.issuerOrigin, 5);
        });
    },
    fk = function () {
      var a = '' + Zj.issuerOrigin + Zj.issuancePath;
      dk(Zj.issuerOrigin, 8);
      return window
        .fetch(a, { keepalive: !0, trustToken: { type: 'token-request' } })
        .then(function (b) {
          if (!b.ok) throw Error(b.status + ': Network response was not ok!');
          dk(Zj.issuerOrigin, 10);
          return ek();
        })
        .catch(function (b) {
          if (b && 'NoModificationAllowedError' === b.name)
            return dk(Zj.issuerOrigin, 10), ek();
          dk(Zj.issuerOrigin, 9);
        });
    },
    gk = function () {
      dk(Zj.issuerOrigin, 13);
      return document.hasTrustToken(Zj.issuerOrigin).then(function (a) {
        return a ? ek() : fk();
      });
    },
    hk = function () {
      dk(ak.issuerOrigin, 13);
      if (window.Promise) {
        var a = document
            .hasTrustToken(ak.issuerOrigin)
            .then(function (e) {
              return e;
            })
            .catch(function (e) {
              return window.Promise.reject({ state: 19, error: e });
            }),
          b = '' + ak.issuerOrigin + ak.redemptionPath,
          c = {
            keepalive: !0,
            trustToken: { type: 'token-redemption', refreshPolicy: 'none' },
          };
        dk(ak.issuerOrigin, 16);
        a = a
          .then(function (e) {
            return window
              .fetch(b, c)
              .then(function (f) {
                if (!f.ok)
                  throw Error(f.status + ': Network response was not ok!');
                dk(ak.issuerOrigin, 18, !0);
              })
              .catch(function (f) {
                if (f && 'NoModificationAllowedError' === f.name)
                  dk(ak.issuerOrigin, 18, !0);
                else {
                  if (e) return window.Promise.reject({ state: 17, error: f });
                  dk(ak.issuerOrigin, 17);
                }
              });
          })
          .then(function () {
            return document
              .hasTrustToken(ak.issuerOrigin)
              .then(function (e) {
                return e;
              })
              .catch(function (e) {
                return window.Promise.reject({ state: 19, error: e });
              });
          })
          .then(function (e) {
            var f = '' + ak.issuerOrigin + ak.getStatePath;
            dk(ak.issuerOrigin, 20);
            return window
              .fetch(f + '?ht=' + e, {
                trustToken: {
                  type: 'send-redemption-record',
                  issuers: [ak.issuerOrigin],
                },
              })
              .then(function (g) {
                if (!g.ok)
                  throw Error(g.status + ': Network response was not ok!');
                dk(ak.issuerOrigin, 22);
                return g.text().then(function (h) {
                  return JSON.parse(h);
                });
              })
              .catch(function (g) {
                return window.Promise.reject({ state: 21, error: g });
              });
          });
        var d = lh();
        return a
          .then(function (e) {
            var f = '' + ak.issuerOrigin + ak.issuancePath;
            return e && e.srqt && e.cs
              ? (dk(ak.issuerOrigin, 23),
                window
                  .fetch(f + '?cs=' + e.cs + '&correlator=' + d, {
                    keepalive: !0,
                    trustToken: { type: 'token-request' },
                  })
                  .then(function (g) {
                    if (!g.ok)
                      throw Error(g.status + ': Network response was not ok!');
                    dk(ak.issuerOrigin, 25);
                    return e;
                  })
                  .catch(function (g) {
                    return window.Promise.reject({ state: 24, error: g });
                  }))
              : e;
          })
          .then(function (e) {
            if (e && e.srdt && e.cs)
              return (
                dk(ak.issuerOrigin, 26),
                window
                  .fetch(b + '?cs=' + e.cs + '&correlator=' + d, {
                    keepalive: !0,
                    trustToken: {
                      type: 'token-redemption',
                      refreshPolicy: 'refresh',
                    },
                  })
                  .then(function (f) {
                    if (!f.ok)
                      throw Error(f.status + ': Network response was not ok!');
                    dk(ak.issuerOrigin, 28, !0);
                  })
                  .catch(function (f) {
                    return window.Promise.reject({ state: 27, error: f });
                  })
              );
          })
          .then(function () {
            dk(ak.issuerOrigin, 29);
          })
          .catch(function (e) {
            if (
              e instanceof Object &&
              e.hasOwnProperty('state') &&
              e.hasOwnProperty('error')
            )
              if ('number' === typeof e.state && e.error instanceof Error) {
                dk(ak.issuerOrigin, e.state);
                var f = Xj(pf);
                Math.random() <= f &&
                  Eh({ state: e.state, err: e.error.toString() }, 'dtt_err');
              } else throw Error(e);
            else throw e;
          });
      }
    },
    ik = function (a) {
      if (document.hasTrustToken && !Wj(of) && a.j) {
        var b = window.goog_tt_promise_map;
        if (b && b instanceof Map) {
          var c = [];
          if (
            a.h.some(function (e) {
              return e.issuerOrigin === Zj.issuerOrigin;
            })
          ) {
            var d = b.get(Zj.issuerOrigin);
            d || ((d = gk()), b.set(Zj.issuerOrigin, d));
            c.push(d);
          }
          a.h.some(function (e) {
            return e.issuerOrigin === ak.issuerOrigin;
          }) &&
            ((a = b.get(ak.issuerOrigin)),
            a || ((a = hk()), b.set(ak.issuerOrigin, a)),
            c.push(a));
          if (0 < c.length && window.Promise && window.Promise.all)
            return window.Promise.all(c);
        }
      }
    };
  try {
    var jk;
    jk = void 0 === jk ? window.document : jk;
    var kk = Yj(qf);
    jh(kk, jk);
    jh(Uj, window.document);
  } catch (a) {}
  Di.reset();
  Fi(new Ii());
  v.console &&
    'function' === typeof v.console.log &&
    Va(v.console.log, v.console);
  var lk = function (a) {
    for (var b = [], c = (a = H(a.ownerDocument)); c != a.top; c = c.parent)
      if (c.frameElement) b.push(c.frameElement);
      else break;
    return b;
  };
  var mk = function (a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.j = !1;
  };
  mk.prototype.stopPropagation = function () {
    this.j = !0;
  };
  mk.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
  };
  var nk = (function () {
    if (!v.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, 'passive', {
        get: function () {
          a = !0;
        },
      });
    try {
      v.addEventListener('test', function () {}, b),
        v.removeEventListener('test', function () {}, b);
    } catch (c) {}
    return a;
  })();
  var ok = function (a, b) {
    mk.call(this, a ? a.type : '');
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = '';
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = '';
    this.h = null;
    a && this.init(a, b);
  };
  Ya(ok, mk);
  var pk = { 2: 'touch', 3: 'pen', 4: 'mouse' };
  ok.prototype.init = function (a, b) {
    var c = (this.type = a.type),
      d =
        a.changedTouches && a.changedTouches.length
          ? a.changedTouches[0]
          : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    (b = a.relatedTarget)
      ? ac && (Vb(b, 'nodeName') || (b = null))
      : 'mouseover' == c
      ? (b = a.fromElement)
      : 'mouseout' == c && (b = a.toElement);
    this.relatedTarget = b;
    d
      ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
        (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
        (this.screenX = d.screenX || 0),
        (this.screenY = d.screenY || 0))
      : ((this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
        (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
        (this.screenX = a.screenX || 0),
        (this.screenY = a.screenY || 0));
    this.button = a.button;
    this.key = a.key || '';
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType =
      'string' === typeof a.pointerType
        ? a.pointerType
        : pk[a.pointerType] || '';
    this.state = a.state;
    this.h = a;
    a.defaultPrevented && ok.Ba.preventDefault.call(this);
  };
  ok.prototype.stopPropagation = function () {
    ok.Ba.stopPropagation.call(this);
    this.h.stopPropagation
      ? this.h.stopPropagation()
      : (this.h.cancelBubble = !0);
  };
  ok.prototype.preventDefault = function () {
    ok.Ba.preventDefault.call(this);
    var a = this.h;
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
  };
  var qk = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
    rk = function (a) {
      return !(!a || !a[qk]);
    };
  var sk = 0;
  var tk = function (a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.tc = e;
      this.key = ++sk;
      this.Vb = this.dc = !1;
    },
    uk = function (a) {
      a.Vb = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.tc = null;
    };
  var vk = function (a) {
    this.src = a;
    this.h = {};
    this.j = 0;
  };
  vk.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.h[f];
    a || ((a = this.h[f] = []), this.j++);
    var g = wk(a, b, d, e);
    -1 < g
      ? ((b = a[g]), c || (b.dc = !1))
      : ((b = new tk(b, this.src, f, !!d, e)), (b.dc = c), a.push(b));
    return b;
  };
  vk.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.h)) return !1;
    var e = this.h[a];
    b = wk(e, b, c, d);
    return -1 < b
      ? (uk(e[b]), Mb(e, b), 0 == e.length && (delete this.h[a], this.j--), !0)
      : !1;
  };
  var xk = function (a, b) {
    var c = b.type;
    c in a.h &&
      Lb(a.h[c], b) &&
      (uk(b), 0 == a.h[c].length && (delete a.h[c], a.j--));
  };
  vk.prototype.Ob = function (a, b, c, d) {
    a = this.h[a.toString()];
    var e = -1;
    a && (e = wk(a, b, c, d));
    return -1 < e ? a[e] : null;
  };
  var wk = function (a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.Vb && f.listener == b && f.capture == !!c && f.tc == d) return e;
    }
    return -1;
  };
  var yk = 'closure_lm_' + ((1e6 * Math.random()) | 0),
    zk = {},
    Ak = 0,
    Ck = function (a, b, c, d, e) {
      if (d && d.once) return Bk(a, b, c, d, e);
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) Ck(a, b[f], c, d, e);
        return null;
      }
      c = Dk(c);
      return rk(a)
        ? a.P(b, c, Oa(d) ? !!d.capture : !!d, e)
        : Ek(a, b, c, !1, d, e);
    },
    Ek = function (a, b, c, d, e, f) {
      if (!b) throw Error('Invalid event type');
      var g = Oa(e) ? !!e.capture : !!e,
        h = Fk(a);
      h || (a[yk] = h = new vk(a));
      c = h.add(b, c, d, g, f);
      if (c.proxy) return c;
      d = Gk();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener)
        nk || (e = g),
          void 0 === e && (e = !1),
          a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent) a.attachEvent(Hk(b.toString()), d);
      else if (a.addListener && a.removeListener) a.addListener(d);
      else throw Error('addEventListener and attachEvent are unavailable.');
      Ak++;
      return c;
    },
    Gk = function () {
      var a = Ik,
        b = function (c) {
          return a.call(b.src, b.listener, c);
        };
      return b;
    },
    Bk = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) Bk(a, b[f], c, d, e);
        return null;
      }
      c = Dk(c);
      return rk(a)
        ? a.Sb(b, c, Oa(d) ? !!d.capture : !!d, e)
        : Ek(a, b, c, !0, d, e);
    },
    Jk = function (a, b, c, d, e) {
      if (Array.isArray(b))
        for (var f = 0; f < b.length; f++) Jk(a, b[f], c, d, e);
      else
        (d = Oa(d) ? !!d.capture : !!d),
          (c = Dk(c)),
          rk(a)
            ? a.ob(b, c, d, e)
            : a && (a = Fk(a)) && (b = a.Ob(b, c, d, e)) && Kk(b);
    },
    Kk = function (a) {
      if ('number' !== typeof a && a && !a.Vb) {
        var b = a.src;
        if (rk(b)) xk(b.o, a);
        else {
          var c = a.type,
            d = a.proxy;
          b.removeEventListener
            ? b.removeEventListener(c, d, a.capture)
            : b.detachEvent
            ? b.detachEvent(Hk(c), d)
            : b.addListener && b.removeListener && b.removeListener(d);
          Ak--;
          (c = Fk(b))
            ? (xk(c, a), 0 == c.j && ((c.src = null), (b[yk] = null)))
            : uk(a);
        }
      }
    },
    Hk = function (a) {
      return a in zk ? zk[a] : (zk[a] = 'on' + a);
    },
    Ik = function (a, b) {
      if (a.Vb) a = !0;
      else {
        b = new ok(b, this);
        var c = a.listener,
          d = a.tc || a.src;
        a.dc && Kk(a);
        a = c.call(d, b);
      }
      return a;
    },
    Fk = function (a) {
      a = a[yk];
      return a instanceof vk ? a : null;
    },
    Lk = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0),
    Dk = function (a) {
      if ('function' === typeof a) return a;
      a[Lk] ||
        (a[Lk] = function (b) {
          return a.handleEvent(b);
        });
      return a[Lk];
    };
  var O = function () {
    E.call(this);
    this.o = new vk(this);
    this.cc = this;
    this.ia = null;
  };
  Ya(O, E);
  O.prototype[qk] = !0;
  l = O.prototype;
  l.addEventListener = function (a, b, c, d) {
    Ck(this, a, b, c, d);
  };
  l.removeEventListener = function (a, b, c, d) {
    Jk(this, a, b, c, d);
  };
  l.dispatchEvent = function (a) {
    var b,
      c = this.ia;
    if (c) for (b = []; c; c = c.ia) b.push(c);
    c = this.cc;
    var d = a.type || a;
    if ('string' === typeof a) a = new mk(a, c);
    else if (a instanceof mk) a.target = a.target || c;
    else {
      var e = a;
      a = new mk(d, c);
      Kf(a, e);
    }
    e = !0;
    if (b)
      for (var f = b.length - 1; !a.j && 0 <= f; f--) {
        var g = (a.currentTarget = b[f]);
        e = Mk(g, d, !0, a) && e;
      }
    a.j ||
      ((g = a.currentTarget = c),
      (e = Mk(g, d, !0, a) && e),
      a.j || (e = Mk(g, d, !1, a) && e));
    if (b)
      for (f = 0; !a.j && f < b.length; f++)
        (g = a.currentTarget = b[f]), (e = Mk(g, d, !1, a) && e);
    return e;
  };
  l.N = function () {
    O.Ba.N.call(this);
    if (this.o) {
      var a = this.o,
        b = 0,
        c;
      for (c in a.h) {
        for (var d = a.h[c], e = 0; e < d.length; e++) ++b, uk(d[e]);
        delete a.h[c];
        a.j--;
      }
    }
    this.ia = null;
  };
  l.P = function (a, b, c, d) {
    return this.o.add(String(a), b, !1, c, d);
  };
  l.Sb = function (a, b, c, d) {
    return this.o.add(String(a), b, !0, c, d);
  };
  l.ob = function (a, b, c, d) {
    this.o.remove(String(a), b, c, d);
  };
  var Mk = function (a, b, c, d) {
    b = a.o.h[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.Vb && g.capture == c) {
        var h = g.listener,
          k = g.tc || g.src;
        g.dc && xk(a.o, g);
        e = !1 !== h.call(k, d) && e;
      }
    }
    return e && !d.defaultPrevented;
  };
  O.prototype.Ob = function (a, b, c, d) {
    return this.o.Ob(String(a), b, c, d);
  };
  var Nk = function (a, b) {
    this.l = a;
    this.o = b;
    this.j = 0;
    this.h = null;
  };
  Nk.prototype.get = function () {
    if (0 < this.j) {
      this.j--;
      var a = this.h;
      this.h = a.next;
      a.next = null;
    } else a = this.l();
    return a;
  };
  var Ok = function (a, b) {
    a.o(b);
    100 > a.j && (a.j++, (b.next = a.h), (a.h = b));
  };
  var Pk,
    Qk = function () {
      var a = v.MessageChannel;
      'undefined' === typeof a &&
        'undefined' !== typeof window &&
        window.postMessage &&
        window.addEventListener &&
        !z('Presto') &&
        (a = function () {
          var e = Cg(document, 'IFRAME');
          e.style.display = 'none';
          document.documentElement.appendChild(e);
          var f = e.contentWindow;
          e = f.document;
          e.open();
          e.close();
          var g = 'callImmediate' + Math.random(),
            h =
              'file:' == f.location.protocol
                ? '*'
                : f.location.protocol + '//' + f.location.host;
          e = Va(function (k) {
            if (('*' == h || k.origin == h) && k.data == g)
              this.port1.onmessage();
          }, this);
          f.addEventListener('message', e, !1);
          this.port1 = {};
          this.port2 = {
            postMessage: function () {
              f.postMessage(g, h);
            },
          };
        });
      if ('undefined' !== typeof a && !vb()) {
        var b = new a(),
          c = {},
          d = c;
        b.port1.onmessage = function () {
          if (void 0 !== c.next) {
            c = c.next;
            var e = c.Sd;
            c.Sd = null;
            e();
          }
        };
        return function (e) {
          d.next = { Sd: e };
          d = d.next;
          b.port2.postMessage(0);
        };
      }
      return function (e) {
        v.setTimeout(e, 0);
      };
    };
  var Rk = function () {
    this.j = this.h = null;
  };
  Rk.prototype.add = function (a, b) {
    var c = Sk.get();
    c.set(a, b);
    this.j ? (this.j.next = c) : (this.h = c);
    this.j = c;
  };
  Rk.prototype.remove = function () {
    var a = null;
    this.h &&
      ((a = this.h),
      (this.h = this.h.next),
      this.h || (this.j = null),
      (a.next = null));
    return a;
  };
  var Sk = new Nk(
      function () {
        return new Tk();
      },
      function (a) {
        return a.reset();
      }
    ),
    Tk = function () {
      this.next = this.h = this.j = null;
    };
  Tk.prototype.set = function (a, b) {
    this.j = a;
    this.h = b;
    this.next = null;
  };
  Tk.prototype.reset = function () {
    this.next = this.h = this.j = null;
  };
  var Uk,
    Vk = !1,
    Wk = new Rk(),
    Yk = function (a, b) {
      Uk || Xk();
      Vk || (Uk(), (Vk = !0));
      Wk.add(a, b);
    },
    Xk = function () {
      if (v.Promise && v.Promise.resolve) {
        var a = v.Promise.resolve(void 0);
        Uk = function () {
          a.then(Zk);
        };
      } else
        Uk = function () {
          var b = Zk;
          'function' !== typeof v.setImmediate ||
          (v.Window &&
            v.Window.prototype &&
            !z('Edge') &&
            v.Window.prototype.setImmediate == v.setImmediate)
            ? (Pk || (Pk = Qk()), Pk(b))
            : v.setImmediate(b);
        };
    },
    Zk = function () {
      for (var a; (a = Wk.remove()); ) {
        try {
          a.j.call(a.h);
        } catch (b) {
          db(b);
        }
        Ok(Sk, a);
      }
      Vk = !1;
    };
  var $k = function (a) {
    if (!a) return !1;
    try {
      return !!a.$goog_Thenable;
    } catch (b) {
      return !1;
    }
  };
  var bl = function (a) {
      this.h = 0;
      this.C = void 0;
      this.o = this.j = this.l = null;
      this.A = this.B = !1;
      if (a != Me)
        try {
          var b = this;
          a.call(
            void 0,
            function (c) {
              al(b, 2, c);
            },
            function (c) {
              al(b, 3, c);
            }
          );
        } catch (c) {
          al(this, 3, c);
        }
    },
    cl = function () {
      this.next = this.context = this.j = this.l = this.h = null;
      this.o = !1;
    };
  cl.prototype.reset = function () {
    this.context = this.j = this.l = this.h = null;
    this.o = !1;
  };
  var dl = new Nk(
      function () {
        return new cl();
      },
      function (a) {
        a.reset();
      }
    ),
    el = function (a, b, c) {
      var d = dl.get();
      d.l = a;
      d.j = b;
      d.context = c;
      return d;
    };
  bl.prototype.then = function (a, b, c) {
    return fl(
      this,
      'function' === typeof a ? a : null,
      'function' === typeof b ? b : null,
      c
    );
  };
  bl.prototype.$goog_Thenable = !0;
  bl.prototype.I = function (a, b) {
    return fl(this, null, a, b);
  };
  bl.prototype.catch = bl.prototype.I;
  bl.prototype.cancel = function (a) {
    if (0 == this.h) {
      var b = new gl(a);
      Yk(function () {
        hl(this, b);
      }, this);
    }
  };
  var hl = function (a, b) {
      if (0 == a.h)
        if (a.l) {
          var c = a.l;
          if (c.j) {
            for (
              var d = 0, e = null, f = null, g = c.j;
              g && (g.o || (d++, g.h == a && (e = g), !(e && 1 < d)));
              g = g.next
            )
              e || (f = g);
            e &&
              (0 == c.h && 1 == d
                ? hl(c, b)
                : (f
                    ? ((d = f),
                      d.next == c.o && (c.o = d),
                      (d.next = d.next.next))
                    : il(c),
                  jl(c, e, 3, b)));
          }
          a.l = null;
        } else al(a, 3, b);
    },
    ll = function (a, b) {
      a.j || (2 != a.h && 3 != a.h) || kl(a);
      a.o ? (a.o.next = b) : (a.j = b);
      a.o = b;
    },
    fl = function (a, b, c, d) {
      var e = el(null, null, null);
      e.h = new bl(function (f, g) {
        e.l = b
          ? function (h) {
              try {
                var k = b.call(d, h);
                f(k);
              } catch (n) {
                g(n);
              }
            }
          : f;
        e.j = c
          ? function (h) {
              try {
                var k = c.call(d, h);
                void 0 === k && h instanceof gl ? g(h) : f(k);
              } catch (n) {
                g(n);
              }
            }
          : g;
      });
      e.h.l = a;
      ll(a, e);
      return e.h;
    };
  bl.prototype.F = function (a) {
    this.h = 0;
    al(this, 2, a);
  };
  bl.prototype.G = function (a) {
    this.h = 0;
    al(this, 3, a);
  };
  var al = function (a, b, c) {
      if (0 == a.h) {
        a === c &&
          ((b = 3), (c = new TypeError('Promise cannot resolve to itself')));
        a.h = 1;
        a: {
          var d = c,
            e = a.F,
            f = a.G;
          if (d instanceof bl) {
            ll(d, el(e || Me, f || null, a));
            var g = !0;
          } else if ($k(d)) d.then(e, f, a), (g = !0);
          else {
            if (Oa(d))
              try {
                var h = d.then;
                if ('function' === typeof h) {
                  ml(d, h, e, f, a);
                  g = !0;
                  break a;
                }
              } catch (k) {
                f.call(a, k);
                g = !0;
                break a;
              }
            g = !1;
          }
        }
        g ||
          ((a.C = c),
          (a.h = b),
          (a.l = null),
          kl(a),
          3 != b || c instanceof gl || nl(a, c));
      }
    },
    ml = function (a, b, c, d, e) {
      var f = !1,
        g = function (k) {
          f || ((f = !0), c.call(e, k));
        },
        h = function (k) {
          f || ((f = !0), d.call(e, k));
        };
      try {
        b.call(a, g, h);
      } catch (k) {
        h(k);
      }
    },
    kl = function (a) {
      a.B || ((a.B = !0), Yk(a.K, a));
    },
    il = function (a) {
      var b = null;
      a.j && ((b = a.j), (a.j = b.next), (b.next = null));
      a.j || (a.o = null);
      return b;
    };
  bl.prototype.K = function () {
    for (var a; (a = il(this)); ) jl(this, a, this.h, this.C);
    this.B = !1;
  };
  var jl = function (a, b, c, d) {
      if (3 == c && b.j && !b.o) for (; a && a.A; a = a.l) a.A = !1;
      if (b.h) (b.h.l = null), ol(b, c, d);
      else
        try {
          b.o ? b.l.call(b.context) : ol(b, c, d);
        } catch (e) {
          pl.call(null, e);
        }
      Ok(dl, b);
    },
    ol = function (a, b, c) {
      2 == b ? a.l.call(a.context, c) : a.j && a.j.call(a.context, c);
    },
    nl = function (a, b) {
      a.A = !0;
      Yk(function () {
        a.A && pl.call(null, b);
      });
    },
    pl = db,
    gl = function (a) {
      $a.call(this, a);
    };
  Ya(gl, $a);
  gl.prototype.name = 'cancel';
  var ql = function (a, b) {
    O.call(this);
    this.j = a || 1;
    this.h = b || v;
    this.l = Va(this.eg, this);
    this.A = Xa();
  };
  Ya(ql, O);
  l = ql.prototype;
  l.qb = !1;
  l.Ja = null;
  l.eg = function () {
    if (this.qb) {
      var a = Xa() - this.A;
      0 < a && a < 0.8 * this.j
        ? (this.Ja = this.h.setTimeout(this.l, this.j - a))
        : (this.Ja && (this.h.clearTimeout(this.Ja), (this.Ja = null)),
          this.dispatchEvent('tick'),
          this.qb && (this.stop(), this.start()));
    }
  };
  l.start = function () {
    this.qb = !0;
    this.Ja || ((this.Ja = this.h.setTimeout(this.l, this.j)), (this.A = Xa()));
  };
  l.stop = function () {
    this.qb = !1;
    this.Ja && (this.h.clearTimeout(this.Ja), (this.Ja = null));
  };
  l.N = function () {
    ql.Ba.N.call(this);
    this.stop();
    delete this.h;
  };
  var rl = function (a, b, c) {
      if ('function' === typeof a) c && (a = Va(a, c));
      else if (a && 'function' == typeof a.handleEvent)
        a = Va(a.handleEvent, a);
      else throw Error('Invalid listener argument');
      return 2147483647 < Number(b) ? -1 : v.setTimeout(a, b || 0);
    },
    sl = function () {
      var a = null;
      return new bl(function (b, c) {
        a = rl(function () {
          b('timed out');
        }, 200);
        -1 == a && c(Error('Failed to schedule timer.'));
      }).I(function (b) {
        v.clearTimeout(a);
        throw b;
      });
    };
  var tl = function () {
    return Math.round(Date.now() / 1e3);
  };
  var ul = function () {
    this.h = {};
    return this;
  };
  ul.prototype.remove = function (a) {
    var b = this.h;
    a in b && delete b[a];
  };
  ul.prototype.set = function (a, b) {
    this.h[a] = b;
  };
  var vl = function (a, b) {
    a.h.eb = If(a.h, 'eb', 0) | b;
  };
  ul.prototype.get = function (a) {
    return If(this.h, a, null);
  };
  var wl = null,
    xl = function () {
      this.h = {};
      this.j = 0;
    },
    yl = function () {
      wl || (wl = new xl());
      return wl;
    },
    zl = function (a, b) {
      a.h[b.getName()] = b;
    },
    Al = function (a, b) {
      this.o = a;
      this.l = !0;
      this.h = b;
    };
  Al.prototype.getName = function () {
    return this.o;
  };
  Al.prototype.j = function () {
    return String(this.h);
  };
  var Bl = function (a, b) {
    Al.call(this, String(a), b);
    this.A = a;
    this.h = !!b;
  };
  t(Bl, Al);
  Bl.prototype.j = function () {
    return this.h ? '1' : '0';
  };
  var Cl = function (a, b) {
    Al.call(this, a, b);
  };
  t(Cl, Al);
  Cl.prototype.j = function () {
    return this.h
      ? Math.round(this.h.top) +
          '.' +
          Math.round(this.h.left) +
          '.' +
          (Math.round(this.h.top) + Math.round(this.h.height)) +
          '.' +
          (Math.round(this.h.left) + Math.round(this.h.width))
      : '';
  };
  var Dl = function (a) {
    if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
      a = a.split('.');
      var b = Number(a[0]),
        c = Number(a[1]);
      return new Cl('', new qh(c, b, Number(a[3]) - c, Number(a[2]) - b));
    }
    return new Cl('', new qh(0, 0, 0, 0));
  };
  var Fl = function (a, b) {
      if ('string' === typeof b) (b = El(a, b)) && (a.style[b] = void 0);
      else
        for (var c in b) {
          var d = a,
            e = b[c],
            f = El(d, c);
          f && (d.style[f] = e);
        }
    },
    Gl = {},
    El = function (a, b) {
      var c = Gl[b];
      if (!c) {
        var d = pg(b);
        c = d;
        void 0 === a.style[d] &&
          ((d = (bc ? 'Webkit' : ac ? 'Moz' : Zb ? 'ms' : null) + rg(d)),
          void 0 !== a.style[d] && (c = d));
        Gl[b] = c;
      }
      return c;
    },
    Hl = function (a, b) {
      var c = a.style[pg(b)];
      return 'undefined' !== typeof c ? c : a.style[El(a, b)] || '';
    },
    Il = function (a, b) {
      var c = ug(a);
      return c.defaultView &&
        c.defaultView.getComputedStyle &&
        (a = c.defaultView.getComputedStyle(a, null))
        ? a[b] || a.getPropertyValue(b) || ''
        : '';
    },
    Jl = function (a) {
      try {
        return a.getBoundingClientRect();
      } catch (b) {
        return { left: 0, top: 0, right: 0, bottom: 0 };
      }
    },
    Kl = function (a) {
      var b = ug(a),
        c = new jg(0, 0);
      var d = b ? ug(b) : document;
      d = !Zb || 9 <= Number(sc) || zg(vg(d).h) ? d.documentElement : d.body;
      if (a == d) return c;
      a = Jl(a);
      b = Bg(vg(b).h);
      c.x = a.left + b.x;
      c.y = a.top + b.y;
      return c;
    },
    Ll = function (a, b) {
      var c = new jg(0, 0),
        d = H(ug(a));
      if (!Vb(d, 'parent')) return c;
      do {
        if (d == b) var e = Kl(a);
        else (e = Jl(a)), (e = new jg(e.left, e.top));
        c.x += e.x;
        c.y += e.y;
      } while (
        d &&
        d != b &&
        d != d.parent &&
        (a = d.frameElement) &&
        (d = d.parent)
      );
      return c;
    },
    Ml = function () {
      var a = '100%';
      'number' == typeof a && (a = Math.round(a) + 'px');
      return a;
    },
    Ol = function (a) {
      var b = Nl;
      if (
        'none' !=
        (Il(a, 'display') ||
          (a.currentStyle ? a.currentStyle.display : null) ||
          (a.style && a.style.display))
      )
        return b(a);
      var c = a.style,
        d = c.display,
        e = c.visibility,
        f = c.position;
      c.visibility = 'hidden';
      c.position = 'absolute';
      c.display = 'inline';
      a = b(a);
      c.display = d;
      c.position = f;
      c.visibility = e;
      return a;
    },
    Nl = function (a) {
      var b = a.offsetWidth,
        c = a.offsetHeight,
        d = bc && !b && !c;
      return (void 0 === b || d) && a.getBoundingClientRect
        ? ((a = Jl(a)), new G(a.right - a.left, a.bottom - a.top))
        : new G(b, c);
    },
    Sl = function (a) {
      var b = ug(a),
        c = Zb && a.currentStyle;
      if (
        c &&
        zg(vg(b).h) &&
        'auto' != c.width &&
        'auto' != c.height &&
        !c.boxSizing
      )
        return (
          (b = Pl(a, c.width, 'width', 'pixelWidth')),
          (a = Pl(a, c.height, 'height', 'pixelHeight')),
          new G(b, a)
        );
      c = new G(a.offsetWidth, a.offsetHeight);
      if (Zb) {
        b = Ql(a, 'paddingLeft');
        var d = Ql(a, 'paddingRight'),
          e = Ql(a, 'paddingTop'),
          f = Ql(a, 'paddingBottom');
        b = new I(e, d, f, b);
      } else
        (b = Il(a, 'paddingLeft')),
          (d = Il(a, 'paddingRight')),
          (e = Il(a, 'paddingTop')),
          (f = Il(a, 'paddingBottom')),
          (b = new I(
            parseFloat(e),
            parseFloat(d),
            parseFloat(f),
            parseFloat(b)
          ));
      !Zb || 9 <= Number(sc)
        ? ((d = Il(a, 'borderLeftWidth')),
          (e = Il(a, 'borderRightWidth')),
          (f = Il(a, 'borderTopWidth')),
          (a = Il(a, 'borderBottomWidth')),
          (a = new I(
            parseFloat(f),
            parseFloat(e),
            parseFloat(a),
            parseFloat(d)
          )))
        : ((d = Rl(a, 'borderLeft')),
          (e = Rl(a, 'borderRight')),
          (f = Rl(a, 'borderTop')),
          (a = Rl(a, 'borderBottom')),
          (a = new I(f, e, a, d)));
      return new G(
        c.width - a.left - b.left - b.right - a.right,
        c.height - a.top - b.top - b.bottom - a.bottom
      );
    },
    Pl = function (a, b, c, d) {
      if (/^\d+px?$/.test(b)) return parseInt(b, 10);
      var e = a.style[c],
        f = a.runtimeStyle[c];
      a.runtimeStyle[c] = a.currentStyle[c];
      a.style[c] = b;
      b = a.style[d];
      a.style[c] = e;
      a.runtimeStyle[c] = f;
      return +b;
    },
    Ql = function (a, b) {
      return (b = a.currentStyle ? a.currentStyle[b] : null)
        ? Pl(a, b, 'left', 'pixelLeft')
        : 0;
    },
    Tl = { thin: 2, medium: 4, thick: 6 },
    Rl = function (a, b) {
      if ('none' == (a.currentStyle ? a.currentStyle[b + 'Style'] : null))
        return 0;
      b = a.currentStyle ? a.currentStyle[b + 'Width'] : null;
      return b in Tl ? Tl[b] : Pl(a, b, 'left', 'pixelLeft');
    };
  var Ul = function (a) {
      var b = new qh(
          -Number.MAX_VALUE / 2,
          -Number.MAX_VALUE / 2,
          Number.MAX_VALUE,
          Number.MAX_VALUE
        ),
        c = new qh(0, 0, 0, 0);
      if (!a || 0 == a.length) return c;
      for (var d = 0; d < a.length; d++) {
        a: {
          var e = b;
          var f = a[d],
            g = Math.max(e.left, f.left),
            h = Math.min(e.left + e.width, f.left + f.width);
          if (g <= h) {
            var k = Math.max(e.top, f.top);
            f = Math.min(e.top + e.height, f.top + f.height);
            if (k <= f) {
              e.left = g;
              e.top = k;
              e.width = h - g;
              e.height = f - k;
              e = !0;
              break a;
            }
          }
          e = !1;
        }
        if (!e) return c;
      }
      return b;
    },
    Vl = function (a, b) {
      var c = a.getBoundingClientRect();
      a = Ll(a, b);
      return new qh(
        Math.round(a.x),
        Math.round(a.y),
        Math.round(c.right - c.left),
        Math.round(c.bottom - c.top)
      );
    },
    Wl = function (a, b, c) {
      if (b && c) {
        a: {
          var d = Math.max(b.left, c.left);
          var e = Math.min(b.left + b.width, c.left + c.width);
          if (d <= e) {
            var f = Math.max(b.top, c.top),
              g = Math.min(b.top + b.height, c.top + c.height);
            if (f <= g) {
              d = new qh(d, f, e - d, g - f);
              break a;
            }
          }
          d = null;
        }
        e = d ? d.height * d.width : 0;
        f = d ? b.height * b.width : 0;
        d = d && f ? Math.round((e / f) * 100) : 0;
        zl(a, new Al('vp', d));
        d && 0 < d
          ? ((e = rh(b)), (f = rh(c)), (e = e.top >= f.top && e.top < f.bottom))
          : (e = !1);
        zl(a, new Bl(512, e));
        d && 0 < d
          ? ((e = rh(b)),
            (f = rh(c)),
            (e = e.bottom <= f.bottom && e.bottom > f.top))
          : (e = !1);
        zl(a, new Bl(1024, e));
        d && 0 < d
          ? ((e = rh(b)),
            (f = rh(c)),
            (e = e.left >= f.left && e.left < f.right))
          : (e = !1);
        zl(a, new Bl(2048, e));
        d && 0 < d
          ? ((b = rh(b)),
            (c = rh(c)),
            (c = b.right <= c.right && b.right > c.left))
          : (c = !1);
        zl(a, new Bl(4096, c));
      }
    };
  var Xl = function (a, b) {
    var c = 0;
    Bf(H(), 'ima', 'video', 'client', 'tagged') && (c = 1);
    var d = null;
    a && (d = a());
    if (d) {
      a = yl();
      a.h = {};
      var e = new Bl(32, !0);
      e.l = !1;
      zl(a, e);
      e = H().document;
      e =
        e.visibilityState ||
        e.webkitVisibilityState ||
        e.mozVisibilityState ||
        e.msVisibilityState ||
        '';
      zl(
        a,
        new Bl(
          64,
          'hidden' != e.toLowerCase().substring(e.length - 6) ? !0 : !1
        )
      );
      try {
        var f = H().top;
        try {
          var g = !!f.location.href || '' === f.location.href;
        } catch (m) {
          g = !1;
        }
        if (g) {
          var h = lk(d);
          var k = h && 0 != h.length ? '1' : '0';
        } else k = '2';
      } catch (m) {
        k = '2';
      }
      zl(a, new Bl(256, '2' == k));
      zl(a, new Bl(128, '1' == k));
      h = g = H().top;
      '2' == k && (h = H());
      f = Vl(d, h);
      zl(a, new Cl('er', f));
      try {
        var n = h.document && !h.document.body ? null : Ag(h || window);
      } catch (m) {
        n = null;
      }
      n
        ? ((h = Bg(vg(h.document).h)),
          zl(a, new Bl(16384, !!h)),
          (n = h ? new qh(h.x, h.y, n.width, n.height) : null))
        : (n = null);
      zl(a, new Cl('vi', n));
      if (n && '1' == k) {
        k = lk(d);
        d = [];
        for (h = 0; h < k.length; h++) (e = Vl(k[h], g)) && d.push(e);
        d.push(n);
        n = Ul(d);
      }
      Wl(a, f, n);
      a.j && zl(a, new Al('ts', tl() - a.j));
      a.j = tl();
    } else (a = yl()), (a.h = {}), (a.j = tl()), zl(a, new Bl(32, !1));
    this.l = a;
    this.h = new ul();
    this.h.set('ve', 4);
    c && vl(this.h, 1);
    Bf(H(), 'ima', 'video', 'client', 'crossdomainTag') && vl(this.h, 4);
    Bf(H(), 'ima', 'video', 'client', 'sdkTag') && vl(this.h, 8);
    Bf(H(), 'ima', 'video', 'client', 'jsTag') && vl(this.h, 2);
    b && If(b, 'fullscreen', !1) && vl(this.h, 16);
    this.j = b = null;
    if (c && ((c = Bf(H(), 'ima', 'video', 'client')), c.getEData)) {
      this.j = c.getEData();
      if ((c = Bf(H(), 'ima', 'video', 'client', 'getLastSnapshotFromTop')))
        if ((a = c()))
          this.j.extendWithDataFromTopIframe(
            a.tagstamp,
            a.playstamp,
            a.lactstamp
          ),
            (c = this.l),
            (b = a.er),
            (a = a.vi),
            b &&
              a &&
              ((b = Dl(b).h),
              (a = Dl(a).h),
              (k = null),
              If(c.h, 'er', null) &&
                ((k = If(c.h, 'er', null).h),
                (k.top += b.top),
                (k.left += b.left),
                zl(c, new Cl('er', k))),
              If(c.h, 'vi', null) &&
                ((n = If(c.h, 'vi', null).h),
                (n.top += b.top),
                (n.left += b.left),
                (d = []),
                d.push(n),
                d.push(b),
                d.push(a),
                (b = Ul(d)),
                Wl(c, k, b),
                zl(c, new Cl('vi', a))));
      a: {
        if (this.j) {
          if (this.j.getTagLoadTimestamp) {
            b = this.j.getTagLoadTimestamp();
            break a;
          }
          if (this.j.getTimeSinceTagLoadSeconds) {
            b = this.j.getTimeSinceTagLoadSeconds();
            break a;
          }
        }
        b = null;
      }
    }
    c = this.h;
    a =
      window.performance &&
      window.performance.timing &&
      window.performance.timing.domLoading &&
      0 < window.performance.timing.domLoading
        ? Math.round(window.performance.timing.domLoading / 1e3)
        : null;
    c.set.call(c, 'td', tl() - (null != a ? a : null != b ? b : tl()));
  };
  var Yl = new ql(200),
    Zl = function (a, b) {
      try {
        var c = new Xl(a, b);
        a = [];
        var d = Number(c.h.get('eb'));
        c.h.remove('eb');
        var e,
          f = c.h;
        b = [];
        for (var g in f.h) b.push(g + f.h[g]);
        (e = b.join('_')) && a.push(e);
        if (c.j) {
          var h = c.j.serialize();
          h && a.push(h);
        }
        var k,
          n = c.l;
        e = d;
        f = [];
        e || (e = 0);
        for (var m in n.h) {
          var x = n.h[m];
          if (x instanceof Bl) x.h && (e |= x.A);
          else {
            var u = n.h[m],
              y = u.l ? u.j() : '';
            y && f.push(m + y);
          }
        }
        f.push('eb' + String(e));
        (k = f.join('_')) && a.push(k);
        c.h.set('eb', d);
        return a.join('_');
      } catch (A) {
        return 'tle;' + lg(A.name, 12) + ';' + lg(A.message, 40);
      }
    },
    $l = function (a, b) {
      Ck(Yl, 'tick', function () {
        var c = Zl(b);
        a(c);
      });
      Yl.start();
      Yl.dispatchEvent('tick');
    };
  var am = function (a) {
    D.call(this, a);
  };
  t(am, D);
  var bm = function (a) {
    D.call(this, a);
  };
  t(bm, D);
  var cm = function (a, b) {
      return C(a, 1, b);
    },
    dm = [bm, 1, Fe];
  var em = function (a) {
    D.call(this, a);
  };
  t(em, D);
  var fm = function (a) {
      var b = new em();
      return C(b, 1, a);
    },
    gm = function (a, b) {
      return C(a, 8, Zc(b));
    };
  em.prototype.getError = function () {
    return kd(this, bm, 10);
  };
  em.prototype.Ia = function (a) {
    return nd(this, 10, a);
  };
  var hm = He(em),
    im = [
      em,
      1,
      Ce,
      2,
      Ce,
      3,
      we,
      7,
      we,
      8,
      ve,
      4,
      ze,
      5,
      ze,
      6,
      ze,
      9,
      Be,
      11,
      Be,
      10,
      De,
      dm,
    ];
  var jm = function (a) {
    D.call(this, a);
  };
  t(jm, D);
  var km = [jm, 4, Fe, 5, Ce];
  var lm = function (a) {
    D.call(this, a);
  };
  t(lm, D);
  var mm = [lm, 1, ye, 2, ye, 3, ye];
  var nm = function (a) {
    D.call(this, a);
  };
  t(nm, D);
  nm.prototype.getError = function () {
    return kd(this, jm, 7);
  };
  nm.prototype.Ia = function (a) {
    return nd(this, 7, a);
  };
  var om = [nm, 5, Ce, 4, Ce, 2, De, mm, 3, De, mm, 6, Be, 7, De, km, 8, we];
  var qm = function (a) {
    D.call(this, a, -1, pm);
  };
  t(qm, D);
  var pm = [1, 2];
  qm.prototype.o = Ge([qm, 1, Ee, om, 2, Ee, im]);
  var rm = function (a) {
    D.call(this, a);
  };
  t(rm, D);
  rm.prototype.getVersion = function () {
    return B(this, 5);
  };
  var sm = He(rm);
  var tm;
  tm = ['av.default', 'js', 'unreleased'].slice(-1)[0];
  var um = new (function (a, b) {
    this.key = a;
    this.defaultValue = void 0 === b ? !1 : b;
    this.valueType = 'boolean';
  })('45378663');
  var vm = document,
    P = window;
  var wm = function (a) {
    var b = {};
    Bb(a, function (c) {
      var d = c.h,
        e = b[d];
      b.hasOwnProperty(d)
        ? null !== e && (c.wb(e) || (b[d] = null))
        : (b[d] = c);
    });
    Nb(a, function (c) {
      return null === b[c.h];
    });
  };
  var xm = { NONE: 0, Eg: 1 },
    ym = { Cg: 0, Hh: 1, Gh: 2, Ih: 3 },
    zm = { ue: 'a', Dg: 'd', Ye: 'v' };
  var Am = function () {
    this.ba = 0;
    this.h = !1;
    this.j = -1;
    this.lb = !1;
    this.sa = 0;
  };
  Am.prototype.isVisible = function () {
    return this.lb ? 0.3 <= this.ba : 0.5 <= this.ba;
  };
  var Bm = { Bg: 0, Hg: 1 },
    Cm = { 668123728: 0, 668123729: 1 },
    Dm = { 44731964: 0, 44731965: 1 },
    Em = { NONE: 0, lh: 1, Mg: 2 },
    Fm = { 480596784: 0, 480596785: 1, 21063355: 2 };
  var Gm = function () {
      this.h = null;
      this.o = !1;
      this.l = null;
    },
    Hm = function (a) {
      a.o = !0;
      return a;
    },
    Im = function (a, b) {
      a.l &&
        Bb(b, function (c) {
          c = a.l[c];
          void 0 !== c && a.j(c);
        });
    },
    Jm = function (a) {
      Gm.call(this);
      this.A = a;
    };
  t(Jm, Gm);
  Jm.prototype.j = function (a) {
    null === this.h && Df(this.A, a) && (this.h = a);
  };
  var Km = function () {
    Gm.call(this);
  };
  t(Km, Gm);
  Km.prototype.j = function (a) {
    null === this.h && 'number' === typeof a && (this.h = a);
  };
  var Lm = function () {
    Gm.call(this);
  };
  t(Lm, Gm);
  Lm.prototype.j = function (a) {
    null === this.h && 'string' === typeof a && (this.h = a);
  };
  var Mm = function () {
    this.h = {};
    this.l = !0;
    this.j = {};
  };
  Mm.prototype.reset = function () {
    this.h = {};
    this.l = !0;
    this.j = {};
  };
  var Nm = function (a, b, c) {
      a.h[b] || (a.h[b] = new Jm(c));
      return a.h[b];
    },
    Om = function (a) {
      a.h.queryid || (a.h.queryid = new Lm());
    },
    Pm = function (a, b, c) {
      (a = a.h[b]) && a.j(c);
    },
    Qm = function (a, b) {
      if (Cf(a.j, b)) return a.j[b];
      if ((a = a.h[b])) return a.h;
    },
    Rm = function (a) {
      var b = {},
        c = uf(a.h, function (d) {
          return d.o;
        });
      tf(
        c,
        function (d, e) {
          d =
            void 0 !== a.j[e]
              ? String(a.j[e])
              : d.o && null !== d.h
              ? String(d.h)
              : '';
          0 < d.length && (b[e] = d);
        },
        a
      );
      return b;
    },
    Sm = function (a) {
      a = Rm(a);
      var b = [];
      tf(a, function (c, d) {
        d in Object.prototype ||
          ('undefined' != typeof c && b.push([d, ':', c].join('')));
      });
      return b;
    },
    Tm = function () {
      var a = Q().R,
        b = Hi();
      a.l &&
        Bb(zf(a.h), function (c) {
          return Im(c, b);
        });
    };
  var Um = function (a) {
    Nm(a, 'od', xm);
    Hm(Nm(a, 'opac', Bm));
    Hm(Nm(a, 'sbeos', Bm));
    Hm(Nm(a, 'prf', Bm));
    Hm(Nm(a, 'mwt', Bm));
    Nm(a, 'iogeo', Bm);
  };
  var Vm = !Zb && !xb();
  var Wm = function () {
    this.h = this.ab = null;
  };
  var Xm = function () {};
  Xm.prototype.h = function () {
    return 0;
  };
  Xm.prototype.l = function () {
    return 0;
  };
  Xm.prototype.o = function () {
    return 0;
  };
  Xm.prototype.j = function () {
    return 0;
  };
  var Zm = function () {
    if (!Ym()) throw Error();
  };
  t(Zm, Xm);
  var Ym = function () {
    return !(!P || !P.performance);
  };
  Zm.prototype.h = function () {
    return Ym() && P.performance.now
      ? P.performance.now()
      : Xm.prototype.h.call(this);
  };
  Zm.prototype.l = function () {
    return Ym() && P.performance.memory
      ? P.performance.memory.totalJSHeapSize || 0
      : Xm.prototype.l.call(this);
  };
  Zm.prototype.o = function () {
    return Ym() && P.performance.memory
      ? P.performance.memory.usedJSHeapSize || 0
      : Xm.prototype.o.call(this);
  };
  Zm.prototype.j = function () {
    return Ym() && P.performance.memory
      ? P.performance.memory.jsHeapSizeLimit || 0
      : Xm.prototype.j.call(this);
  };
  var $m = function () {};
  $m.prototype.isVisible = function () {
    return 1 === Kh(vm);
  };
  var an = RegExp('^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)'),
    en = function (a) {
      a = a || bn();
      for (
        var b = new cn(v.location.href, !1), c = null, d = a.length - 1, e = d;
        0 <= e;
        --e
      ) {
        var f = a[e];
        !c && an.test(f.url) && (c = f);
        if (f.url && !f.fd) {
          b = f;
          break;
        }
      }
      e = null;
      f = a.length && a[d].url;
      0 != b.depth && f && (e = a[d]);
      return new dn(b, e, c);
    },
    bn = function () {
      var a = v,
        b = [],
        c = null;
      do {
        var d = a;
        if ($g(d)) {
          var e = d.location.href;
          c = (d.document && d.document.referrer) || null;
        } else (e = c), (c = null);
        b.push(new cn(e || ''));
        try {
          a = d.parent;
        } catch (f) {
          a = null;
        }
      } while (a && d != a);
      d = 0;
      for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
      d = v;
      if (
        d.location &&
        d.location.ancestorOrigins &&
        d.location.ancestorOrigins.length == b.length - 1
      )
        for (a = 1; a < b.length; ++a)
          (e = b[a]),
            e.url ||
              ((e.url = d.location.ancestorOrigins[a - 1] || ''), (e.fd = !0));
      return b;
    },
    dn = function (a, b, c) {
      this.h = a;
      this.j = b;
      this.l = c;
    },
    cn = function (a, b) {
      this.url = a;
      this.fd = !!b;
      this.depth = null;
    };
  var fn = function () {
      this.l = '&';
      this.j = {};
      this.o = 0;
      this.h = [];
    },
    gn = function (a, b) {
      var c = {};
      c[a] = b;
      return [c];
    },
    jn = function (a, b, c, d, e) {
      var f = [];
      dh(a, function (g, h) {
        (g = hn(g, b, c, d, e)) && f.push(h + '=' + g);
      });
      return f.join(b);
    },
    hn = function (a, b, c, d, e) {
      if (null == a) return '';
      b = b || '&';
      c = c || ',$';
      'string' == typeof c && (c = c.split(''));
      if (a instanceof Array) {
        if (((d = d || 0), d < c.length)) {
          for (var f = [], g = 0; g < a.length; g++)
            f.push(hn(a[g], b, c, d + 1, e));
          return f.join(c[d]);
        }
      } else if ('object' == typeof a)
        return (
          (e = e || 0),
          2 > e ? encodeURIComponent(jn(a, b, c, d, e + 1)) : '...'
        );
      return encodeURIComponent(String(a));
    },
    kn = function (a, b, c) {
      a.h.push(b);
      a.j[b] = c;
    },
    ln = function (a, b, c, d) {
      a.h.push(b);
      a.j[b] = gn(c, d);
    },
    nn = function (a, b, c) {
      b = b + '//pagead2.googlesyndication.com' + c;
      var d = mn(a) - c.length;
      if (0 > d) return '';
      a.h.sort(function (m, x) {
        return m - x;
      });
      c = null;
      for (var e = '', f = 0; f < a.h.length; f++)
        for (var g = a.h[f], h = a.j[g], k = 0; k < h.length; k++) {
          if (!d) {
            c = null == c ? g : c;
            break;
          }
          var n = jn(h[k], a.l, ',$');
          if (n) {
            n = e + n;
            if (d >= n.length) {
              d -= n.length;
              b += n;
              e = a.l;
              break;
            }
            c = null == c ? g : c;
          }
        }
      a = '';
      null != c && (a = e + 'trn=' + c);
      return b + a;
    },
    mn = function (a) {
      var b = 1,
        c;
      for (c in a.j) b = c.length > b ? c.length : b;
      return 3997 - b - a.l.length - 1;
    };
  var on = function (a, b) {
      this.h = a;
      this.depth = b;
    },
    qn = function () {
      var a = bn(),
        b = Math.max(a.length - 1, 0),
        c = en(a);
      a = c.h;
      var d = c.j,
        e = c.l,
        f = [];
      c = function (h, k) {
        return null == h ? k : h;
      };
      e && f.push(new on([e.url, e.fd ? 2 : 0], c(e.depth, 1)));
      d && d != e && f.push(new on([d.url, 2], 0));
      a.url && a != e && f.push(new on([a.url, 0], c(a.depth, b)));
      var g = Eb(f, function (h, k) {
        return f.slice(0, f.length - k);
      });
      !a.url ||
        ((e || d) && a != e) ||
        ((d = fh(a.url)) && g.push([new on([d, 1], c(a.depth, b))]));
      g.push([]);
      return Eb(g, function (h) {
        return pn(b, h);
      });
    };
  function pn(a, b) {
    var c = Fb(
        b,
        function (e, f) {
          return Math.max(e, f.depth);
        },
        -1
      ),
      d = Tb(c + 2);
    d[0] = a;
    Bb(b, function (e) {
      return (d[e.depth + 1] = e.h);
    });
    return d;
  }
  function rn() {
    var a = void 0 === a ? qn() : a;
    return a.map(function (b) {
      return hn(b);
    });
  }
  var sn = function () {
      this.j = new $m();
      this.h = Ym() ? new Zm() : new Xm();
    },
    un = function () {
      tn();
      var a = P.document;
      return !!(
        a &&
        a.body &&
        a.body.getBoundingClientRect &&
        'function' === typeof P.setInterval &&
        'function' === typeof P.clearInterval &&
        'function' === typeof P.setTimeout &&
        'function' === typeof P.clearTimeout
      );
    };
  sn.prototype.setTimeout = function (a, b) {
    return P.setTimeout(a, b);
  };
  sn.prototype.clearTimeout = function (a) {
    P.clearTimeout(a);
  };
  var vn = function () {
    tn();
    return rn();
  };
  var wn = function () {},
    tn = function () {
      var a = K(wn);
      if (!a.h) {
        if (!P)
          throw Error('Context has not been set and window is undefined.');
        a.h = K(sn);
      }
      return a.h;
    };
  var xn = function (a) {
    D.call(this, a);
  };
  t(xn, D);
  xn.prototype.o = Ge([xn, 1, ue, 2, xe, 3, xe, 4, xe, 5, Ae]);
  var yn = function (a) {
      this.l = a;
      this.h = -1;
      this.j = this.o = 0;
    },
    zn = function (a, b) {
      return function () {
        var c = Ha.apply(0, arguments);
        if (-1 < a.h) return b.apply(null, ia(c));
        try {
          return (a.h = a.l.h.h()), b.apply(null, ia(c));
        } finally {
          (a.o += a.l.h.h() - a.h), (a.h = -1), (a.j += 1);
        }
      };
    };
  var An = function (a, b) {
    this.j = a;
    this.l = b;
    this.h = new yn(a);
  };
  var Bn = function () {
      this.h = {};
    },
    Cn = function () {
      var a = Q().flags.h[um.key];
      if ('proto' === um.valueType) {
        try {
          var b = JSON.parse(a);
          if (Array.isArray(b)) return b;
        } catch (c) {}
        return um.defaultValue;
      }
      return typeof a === typeof um.defaultValue ? a : um.defaultValue;
    };
  var Dn = { Ch: 1, di: 2, th: 3 };
  var En = function () {
    this.l = void 0;
    this.j = this.B = 0;
    this.A = -1;
    this.R = new Mm();
    Hm(Nm(this.R, 'mv', Em)).l = void 0 === Fm ? null : Fm;
    Nm(this.R, 'omid', Bm);
    Hm(Nm(this.R, 'epoh', Bm));
    Hm(Nm(this.R, 'epph', Bm));
    Hm(Nm(this.R, 'umt', Bm)).l = void 0 === Cm ? null : Cm;
    Hm(Nm(this.R, 'phel', Bm));
    Hm(Nm(this.R, 'phell', Bm));
    Hm(Nm(this.R, 'oseid', Dn));
    var a = this.R;
    a.h.sloi || (a.h.sloi = new Km());
    Hm(a.h.sloi);
    Nm(this.R, 'mm', zm);
    Hm(Nm(this.R, 'ovms', ym));
    Hm(Nm(this.R, 'xdi', Bm));
    Hm(Nm(this.R, 'amp', Bm));
    Hm(Nm(this.R, 'prf', Bm));
    Hm(Nm(this.R, 'gtx', Bm));
    Hm(Nm(this.R, 'mvp_lv', Bm));
    Hm(Nm(this.R, 'ssmol', Bm)).l = void 0 === Dm ? null : Dm;
    Hm(Nm(this.R, 'fmd', Bm));
    this.h = new An(tn(), this.R);
    this.o = !1;
    this.flags = new Bn();
  };
  En.prototype.rd = function (a) {
    if ('string' === typeof a && 0 != a.length) {
      var b = this.R;
      if (b.l) {
        a = a.split('&');
        for (var c = a.length - 1; 0 <= c; c--) {
          var d = a[c].split('='),
            e = decodeURIComponent(d[0]);
          1 < d.length
            ? ((d = decodeURIComponent(d[1])),
              (d = /^[0-9]+$/g.exec(d) ? parseInt(d, 10) : d))
            : (d = 1);
          (e = b.h[e]) && e.j(d);
        }
      }
    }
  };
  var Q = function () {
    return K(En);
  };
  var Fn = function (a, b, c, d, e) {
    if ((d ? a.l : Math.random()) < (e || a.h))
      try {
        if (c instanceof fn) var f = c;
        else
          (f = new fn()),
            dh(c, function (h, k) {
              var n = f,
                m = n.o++;
              kn(n, m, gn(k, h));
            });
        var g = nn(f, a.j, '/pagead/gen_204?id=' + b + '&');
        g && (tn(), Ch(P, g));
      } catch (h) {}
  };
  var In = function () {
    var a = Gn;
    this.B = Hn;
    this.A = 'jserror';
    this.l = !0;
    this.j = null;
    this.C = this.Pa;
    this.h = void 0 === a ? null : a;
    this.o = !1;
  };
  l = In.prototype;
  l.Ic = function (a) {
    this.j = a;
  };
  l.xd = function (a) {
    this.A = a;
  };
  l.yd = function (a) {
    this.l = a;
  };
  l.zd = function (a) {
    this.o = a;
  };
  l.nb = function (a, b, c) {
    var d = this;
    return zn(Q().h.h, function () {
      try {
        if (d.h && d.h.l) {
          var e = d.h.start(a.toString(), 3);
          var f = b();
          d.h.end(e);
        } else f = b();
      } catch (h) {
        var g = d.l;
        try {
          Wh(e), (g = d.C(a, new Jn(Kn(h)), void 0, c));
        } catch (k) {
          d.Pa(217, k);
        }
        if (!g) throw h;
      }
      return f;
    })();
  };
  l.td = function (a, b, c, d) {
    var e = this;
    return zn(Q().h.h, function () {
      var f = Ha.apply(0, arguments);
      return e.nb(
        a,
        function () {
          return b.apply(c, f);
        },
        d
      );
    });
  };
  l.Pa = function (a, b, c, d, e) {
    e = e || this.A;
    try {
      var f = new fn();
      ln(f, 1, 'context', a);
      Gh(b) || (b = new Jn(Kn(b)));
      b.msg && ln(f, 2, 'msg', b.msg.substring(0, 512));
      var g = b.meta || {};
      if (this.j)
        try {
          this.j(g);
        } catch (k) {}
      if (d)
        try {
          d(g);
        } catch (k) {}
      kn(f, 3, [g]);
      var h = en();
      h.j && ln(f, 4, 'top', h.j.url || '');
      kn(f, 5, [{ url: h.h.url || '' }, { url: h.h.url ? Ng(h.h.url) : '' }]);
      Fn(this.B, e, f, this.o, c);
    } catch (k) {
      try {
        Fn(
          this.B,
          e,
          { context: 'ecmserr', rctx: a, msg: Kn(k), url: h && h.h.url },
          this.o,
          c
        );
      } catch (n) {}
    }
    return this.l;
  };
  var Kn = function (a) {
      var b = a.toString();
      a.name && -1 == b.indexOf(a.name) && (b += ': ' + a.name);
      a.message && -1 == b.indexOf(a.message) && (b += ': ' + a.message);
      if (a.stack) {
        a = a.stack;
        var c = b;
        try {
          -1 == a.indexOf(c) && (a = c + '\n' + a);
          for (var d; a != d; )
            (d = a),
              (a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, '$1'));
          b = a.replace(/\n */g, '\n');
        } catch (e) {
          b = c;
        }
      }
      return b;
    },
    Jn = function (a) {
      Fh.call(this, Error(a), { message: a });
    };
  t(Jn, Fh);
  var Hn,
    Ln,
    Gn = new Vh(1, window),
    Mn = function () {
      P &&
        'undefined' != typeof P.google_measure_js_timing &&
        (P.google_measure_js_timing || Gn.I());
    };
  Hn = new (function () {
    var a = 'https:';
    P && P.location && 'http:' === P.location.protocol && (a = 'http:');
    this.j = a;
    this.h = 0.01;
    this.l = Math.random();
  })();
  Ln = new In();
  P &&
    P.document &&
    ('complete' == P.document.readyState
      ? Mn()
      : Gn.l &&
        Se(P, 'load', function () {
          Mn();
        }));
  var Nn = function (a) {
      Ln.Ic(function (b) {
        Bb(a, function (c) {
          c(b);
        });
      });
    },
    On = function (a, b) {
      return Ln.nb(a, b);
    },
    Pn = function (a, b, c, d) {
      return Ln.td(a, b, c, d);
    },
    Qn = function (a, b, c, d) {
      Ln.Pa(a, b, c, d);
    };
  var Rn = Date.now(),
    Sn = -1,
    Tn = -1,
    Un,
    Vn = -1,
    Wn = !1,
    Xn = function () {
      return Date.now() - Rn;
    },
    Yn = function () {
      var a = Q().l,
        b = 0 <= Tn ? Xn() - Tn : -1,
        c = Wn ? Xn() - Sn : -1,
        d = 0 <= Vn ? Xn() - Vn : -1;
      if (947190542 == a) return 100;
      if (79463069 == a) return 200;
      a = [2e3, 4e3];
      var e = [250, 500, 1e3];
      Qn(637, Error(), 0.001);
      var f = b;
      -1 != c && c < b && (f = c);
      for (b = 0; b < a.length; ++b)
        if (f < a[b]) {
          var g = e[b];
          break;
        }
      void 0 === g && (g = e[a.length]);
      return -1 != d && 1500 < d && 4e3 > d ? 500 : g;
    };
  var Zn = function (a, b, c) {
    var d = new I(0, 0, 0, 0);
    this.time = a;
    this.volume = null;
    this.l = b;
    this.h = d;
    this.j = c;
  };
  Zn.prototype.wb = function (a, b) {
    return (
      !!a &&
      (!(void 0 === b ? 0 : b) || this.volume == a.volume) &&
      this.l == a.l &&
      oh(this.h, a.h) &&
      !0
    );
  };
  var $n = function (a, b, c, d, e, f, g, h) {
    this.l = a;
    this.I = b;
    this.j = c;
    this.A = d;
    this.h = e;
    this.o = f;
    this.C = g;
    this.B = h;
  };
  $n.prototype.getTimestamp = function () {
    return this.C;
  };
  $n.prototype.wb = function (a, b) {
    return (
      this.l.wb(a.l, void 0 === b ? !1 : b) &&
      this.I == a.I &&
      oh(this.j, a.j) &&
      oh(this.A, a.A) &&
      this.h == a.h &&
      this.o == a.o &&
      this.C == a.C &&
      this.B == a.B
    );
  };
  var ao = {
      currentTime: 1,
      duration: 2,
      isVpaid: 4,
      volume: 8,
      isYouTube: 16,
      isPlaying: 32,
    },
    Ff = {
      Md: 'start',
      FIRST_QUARTILE: 'firstquartile',
      MIDPOINT: 'midpoint',
      THIRD_QUARTILE: 'thirdquartile',
      COMPLETE: 'complete',
      Ee: 'error',
      Ke: 'metric',
      Ld: 'pause',
      Te: 'resume',
      SKIPPED: 'skip',
      VIEWABLE_IMPRESSION: 'viewable_impression',
      Le: 'mute',
      Xe: 'unmute',
      FULLSCREEN: 'fullscreen',
      Fe: 'exitfullscreen',
      ze: 'bufferstart',
      ye: 'bufferfinish',
      Gd: 'fully_viewable_audible_half_duration_impression',
      Kd: 'measurable_impression',
      te: 'abandon',
      Fd: 'engagedview',
      IMPRESSION: 'impression',
      Be: 'creativeview',
      LOADED: 'loaded',
      Eh: 'progress',
      vg: 'close',
      wg: 'collapse',
      Me: 'overlay_resize',
      Ne: 'overlay_unmeasurable_impression',
      Oe: 'overlay_unviewable_impression',
      Qe: 'overlay_viewable_immediate_impression',
      Pe: 'overlay_viewable_end_of_session_impression',
      Ce: 'custom_metric_viewable',
      xh: 'verification_debug',
      ve: 'audio_audible',
      xe: 'audio_measurable',
      we: 'audio_impression',
    },
    bo = 'start firstquartile midpoint thirdquartile resume loaded'.split(' '),
    co = ['start', 'firstquartile', 'midpoint', 'thirdquartile'],
    eo = ['abandon'],
    fo = {
      Xh: -1,
      Md: 0,
      FIRST_QUARTILE: 1,
      MIDPOINT: 2,
      THIRD_QUARTILE: 3,
      COMPLETE: 4,
      Ke: 5,
      Ld: 6,
      Te: 7,
      SKIPPED: 8,
      VIEWABLE_IMPRESSION: 9,
      Le: 10,
      Xe: 11,
      FULLSCREEN: 12,
      Fe: 13,
      Gd: 14,
      Kd: 15,
      te: 16,
      Fd: 17,
      IMPRESSION: 18,
      Be: 19,
      LOADED: 20,
      Ce: 21,
      ze: 22,
      ye: 23,
      we: 27,
      xe: 28,
      ve: 29,
    };
  var yf = {
      og: 'addEventListener',
      Ng: 'getMaxSize',
      Og: 'getScreenSize',
      Pg: 'getState',
      Qg: 'getVersion',
      Fh: 'removeEventListener',
      mh: 'isViewable',
    },
    go = function (a) {
      var b = a !== a.top,
        c = a.top === mh(a),
        d = -1,
        e = 0;
      if (b && c && a.top.mraid) {
        d = 3;
        var f = a.top.mraid;
      } else d = (f = a.mraid) ? (b ? (c ? 2 : 1) : 0) : -1;
      f &&
        (f.IS_GMA_SDK || (e = 2),
        xf(function (g) {
          return 'function' === typeof f[g];
        }) || (e = 1));
      return { za: f, kc: e, bg: d };
    };
  var ho = function () {
    var a = window.document;
    return a && 'function' === typeof a.elementFromPoint;
  };
  function io(a, b, c) {
    try {
      a && (b = b.top);
      var d = b;
      a && null !== d && d != d.top && (d = d.top);
      try {
        var e = (void 0 === c ? 0 : c)
          ? new G(d.innerWidth, d.innerHeight).round()
          : Ag(d || window).round();
      } catch (m) {
        e = new G(-12245933, -12245933);
      }
      a = e;
      var f = a.height,
        g = a.width;
      if (-12245933 === g) return new I(g, g, g, g);
      var h = Bg(vg(b.document).h),
        k = h.x,
        n = h.y;
      return new I(n, k + g, n + f, k);
    } catch (m) {
      return new I(-12245933, -12245933, -12245933, -12245933);
    }
  }
  var jo = function (a, b) {
    b = Math.pow(10, b);
    return Math.floor(a * b) / b;
  };
  function ko(a, b, c, d) {
    if (!a) return { value: d, done: !1 };
    d = b(d, a);
    var e = c(d, a);
    return !e && Vb(a, 'parentElement')
      ? ko(Gg(a), b, c, d)
      : { done: e, value: d };
  }
  var lo = function (a, b, c, d) {
    if (!a) return d;
    d = ko(a, b, c, d);
    if (!d.done)
      try {
        var e = ug(a),
          f = e && H(e);
        return lo(f && f.frameElement, b, c, d.value);
      } catch (g) {}
    return d.value;
  };
  function mo(a) {
    var b = !Zb || pc();
    return lo(
      a,
      function (c, d) {
        c = Vb(d, 'style') && d.style && Hl(d, 'visibility');
        return { hidden: 'hidden' === c, visible: b && 'visible' === c };
      },
      function (c) {
        return c.hidden || c.visible;
      },
      { hidden: !1, visible: !1 }
    ).hidden;
  }
  var no = function (a) {
      return lo(
        a,
        function (b, c) {
          return !(!Vb(c, 'style') || !c.style || 'none' !== Hl(c, 'display'));
        },
        function (b) {
          return b;
        },
        !1
      )
        ? !0
        : mo(a);
    },
    oo = function (a) {
      return new I(a.top, a.right, a.bottom, a.left);
    },
    po = function (a) {
      var b = a.top || 0,
        c = a.left || 0;
      return new I(b, c + (a.width || 0), b + (a.height || 0), c);
    },
    qo = function (a) {
      return null != a && 0 <= a && 1 >= a;
    };
  function ro() {
    var a = ub();
    return a
      ? Gb(
          'Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX'.split(
            ';'
          ),
          function (b) {
            return rb(a, b);
          }
        ) ||
        (rb(a, 'OMI/') && !rb(a, 'XiaoMi/'))
        ? !0
        : rb(a, 'Presto') &&
          rb(a, 'Linux') &&
          !rb(a, 'X11') &&
          !rb(a, 'Android') &&
          !rb(a, 'Mobi')
      : !1;
  }
  function so() {
    var a = ub();
    return (
      rb(a, 'AppleTV') ||
      rb(a, 'Apple TV') ||
      rb(a, 'CFNetwork') ||
      rb(a, 'tvOS')
    );
  }
  function to() {
    var a;
    (a =
      rb(ub(), 'CrKey') ||
      rb(ub(), 'PlayStation') ||
      rb(ub(), 'Roku') ||
      ro() ||
      rb(ub(), 'Xbox') ||
      so()) ||
      ((a = ub()), (a = rb(a, 'sdk_google_atv_x86') || rb(a, 'Android TV')));
    return a;
  }
  var vo = function () {
      this.l = !$g(P.top);
      this.C = Kg() || Lg();
      var a = bn();
      a =
        0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url
          ? ((a = a[a.length - 1].url.match(Mg)[3] || null)
              ? decodeURI(a)
              : a) || ''
          : '';
      this.domain = a;
      this.h = new I(0, 0, 0, 0);
      this.A = new G(0, 0);
      this.o = new G(0, 0);
      this.I = new I(0, 0, 0, 0);
      this.B = 0;
      this.K = !1;
      this.j = !(!P || !go(P).za);
      uo(this);
    },
    wo = function (a, b) {
      b && b.screen && (a.A = new G(b.screen.width, b.screen.height));
    },
    xo = function (a, b) {
      var c = a.h ? new G(a.h.getWidth(), a.h.getHeight()) : new G(0, 0);
      b = void 0 === b ? P : b;
      null !== b && b != b.top && (b = b.top);
      var d = 0,
        e = 0;
      try {
        var f = b.document,
          g = f.body,
          h = f.documentElement;
        if ('CSS1Compat' == f.compatMode && h.scrollHeight)
          (d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight),
            (e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth);
        else {
          var k = h.scrollHeight,
            n = h.scrollWidth,
            m = h.offsetHeight,
            x = h.offsetWidth;
          h.clientHeight != m &&
            ((k = g.scrollHeight),
            (n = g.scrollWidth),
            (m = g.offsetHeight),
            (x = g.offsetWidth));
          k > c.height
            ? k > m
              ? ((d = k), (e = n))
              : ((d = m), (e = x))
            : k < m
            ? ((d = k), (e = n))
            : ((d = m), (e = x));
        }
        var u = new G(e, d);
      } catch (y) {
        u = new G(-12245933, -12245933);
      }
      a.o = u;
    },
    uo = function (a) {
      P &&
        P.document &&
        ((a.I = io(!1, P, a.C)), (a.h = io(!0, P, a.C)), xo(a, P), wo(a, P));
    },
    zo = function () {
      var a = yo();
      if (0 < a.B || a.K) return !0;
      a = tn().j.isVisible();
      var b = 0 === Kh(vm);
      return a || b;
    },
    yo = function () {
      return K(vo);
    };
  var Ao = function (a) {
    this.l = a;
    this.j = 0;
    this.h = null;
  };
  Ao.prototype.cancel = function () {
    tn().clearTimeout(this.h);
    this.h = null;
  };
  var Bo = function (a) {
    var b = tn(),
      c = Q().h.h;
    a.h = b.setTimeout(
      zn(
        c,
        Pn(143, function () {
          a.j++;
          a.l.sample();
        })
      ),
      Yn()
    );
  };
  var Co = function (a, b, c) {
    this.l = a;
    this.na = void 0 === c ? 'na' : c;
    this.A = [];
    this.B = !1;
    this.o = new Zn(-1, !0, this);
    this.h = this;
    this.F = b;
    this.J = this.G = !1;
    this.X = 'uk';
    this.O = !1;
    this.I = !0;
  };
  Co.prototype.H = function () {
    return !1;
  };
  Co.prototype.initialize = function () {
    return (this.B = !0);
  };
  Co.prototype.xb = function () {
    return this.h.X;
  };
  Co.prototype.Pb = function () {
    return this.h.J;
  };
  var Eo = function (a, b, c) {
    if (!a.J || (void 0 === c ? 0 : c))
      (a.J = !0), (a.X = b), (a.F = 0), a.h != a || Do(a);
  };
  Co.prototype.getName = function () {
    return this.h.na;
  };
  Co.prototype.Wa = function () {
    return this.h.Z();
  };
  Co.prototype.Z = function () {
    return {};
  };
  Co.prototype.Ma = function () {
    return this.h.F;
  };
  var Fo = function (a, b) {
    Kb(a.A, b) || (a.A.push(b), b.Ab(a.h), b.Xa(a.o), b.Ha() && (a.G = !0));
  };
  Co.prototype.U = function () {
    var a = yo();
    a.h = io(!0, this.l, a.C);
  };
  Co.prototype.V = function () {
    wo(yo(), this.l);
  };
  Co.prototype.aa = function () {
    return this.o.h;
  };
  var Go = function (a) {
    a = a.h;
    a.V();
    a.U();
    var b = yo();
    b.I = io(!1, a.l, b.C);
    xo(yo(), a.l);
    a.o.h = a.aa();
  };
  Co.prototype.sample = function () {};
  Co.prototype.isActive = function () {
    return this.h.I;
  };
  var Ho = function (a) {
      a.G = a.A.length
        ? Gb(a.A, function (b) {
            return b.Ha();
          })
        : !1;
    },
    Io = function (a) {
      var b = Pb(a.A);
      Bb(b, function (c) {
        c.Xa(a.o);
      });
    },
    Do = function (a) {
      var b = Pb(a.A);
      Bb(b, function (c) {
        c.Ab(a.h);
      });
      a.h != a || Io(a);
    };
  l = Co.prototype;
  l.Ab = function (a) {
    var b = this.h;
    this.h = a.Ma() >= this.F ? a : this;
    b !== this.h
      ? ((this.I = this.h.I), Do(this))
      : this.I !== this.h.I && ((this.I = this.h.I), Do(this));
  };
  l.Xa = function (a) {
    if (a.j === this.h) {
      var b = !this.o.wb(a, this.G);
      this.o = a;
      b && Io(this);
    }
  };
  l.Ha = function () {
    return this.G;
  };
  l.W = function () {
    this.O = !0;
  };
  l.ya = function () {
    return this.O;
  };
  var Jo = function (a, b, c, d) {
    this.j = a;
    this.h = new I(0, 0, 0, 0);
    this.A = new I(0, 0, 0, 0);
    this.l = b;
    this.R = c;
    this.H = d;
    this.G = !1;
    this.timestamp = -1;
    this.I = new $n(b.o, this.j, this.h, new I(0, 0, 0, 0), 0, 0, Xn(), 0);
  };
  l = Jo.prototype;
  l.Qc = function () {
    return !0;
  };
  l.Xb = function () {};
  l.W = function () {
    if (!this.ya()) {
      var a = this.l;
      Lb(a.A, this);
      a.G && this.Ha() && Ho(a);
      this.Xb();
      this.G = !0;
    }
  };
  l.ya = function () {
    return this.G;
  };
  l.Wa = function () {
    return this.l.Wa();
  };
  l.Ma = function () {
    return this.l.Ma();
  };
  l.xb = function () {
    return this.l.xb();
  };
  l.Pb = function () {
    return this.l.Pb();
  };
  l.Ab = function () {};
  l.Xa = function () {
    this.Va();
  };
  l.Ha = function () {
    return this.H;
  };
  var Ko = function (a) {
    this.A = !1;
    this.h = a;
    this.o = function () {};
  };
  l = Ko.prototype;
  l.Ma = function () {
    return this.h.Ma();
  };
  l.xb = function () {
    return this.h.xb();
  };
  l.Pb = function () {
    return this.h.Pb();
  };
  l.create = function (a, b, c) {
    var d = null;
    this.h && ((d = this.Yb(a, b, c)), Fo(this.h, d));
    return d;
  };
  l.Hd = function () {
    return this.Jb();
  };
  l.Jb = function () {
    return !1;
  };
  l.init = function (a) {
    return this.h.initialize() ? (Fo(this.h, this), (this.o = a), !0) : !1;
  };
  l.Ab = function (a) {
    0 == a.Ma() && this.o(a.xb(), this);
  };
  l.Xa = function () {};
  l.Ha = function () {
    return !1;
  };
  l.W = function () {
    this.A = !0;
  };
  l.ya = function () {
    return this.A;
  };
  l.Wa = function () {
    return {};
  };
  var Lo = function (a, b, c) {
      this.l = void 0 === c ? 0 : c;
      this.j = a;
      this.h = null == b ? '' : b;
    },
    Mo = function (a) {
      switch (Math.trunc(a.l)) {
        case -16:
          return -16;
        case -8:
          return -8;
        case 0:
          return 0;
        case 8:
          return 8;
        case 16:
          return 16;
        default:
          return 16;
      }
    },
    No = function (a, b) {
      return a.l < b.l
        ? !0
        : a.l > b.l
        ? !1
        : a.j < b.j
        ? !0
        : a.j > b.j
        ? !1
        : typeof a.h < typeof b.h
        ? !0
        : typeof a.h > typeof b.h
        ? !1
        : a.h < b.h;
    };
  var Oo = function () {
    this.l = 0;
    this.h = [];
    this.j = !1;
  };
  Oo.prototype.add = function (a, b, c) {
    ++this.l;
    a = new Lo(a, b, c);
    this.h.push(new Lo(a.j, a.h, a.l + this.l / 4096));
    this.j = !0;
    return this;
  };
  var Po = function (a, b) {
      Bb(b.h, function (c) {
        a.add(c.j, c.h, Mo(c));
      });
    },
    Qo = function (a, b) {
      var c = void 0 === c ? 0 : c;
      var d = void 0 === d ? !0 : d;
      dh(b, function (e, f) {
        (d && void 0 === e) || a.add(f, e, c);
      });
      return a;
    },
    So = function (a) {
      var b = Ro;
      a.j &&
        (Rb(a.h, function (c, d) {
          return No(d, c) ? 1 : No(c, d) ? -1 : 0;
        }),
        (a.j = !1));
      return Fb(
        a.h,
        function (c, d) {
          d = b(d);
          return '' + c + ('' != c && '' != d ? '&' : '') + d;
        },
        ''
      );
    };
  var Ro = function (a) {
    var b = a.j;
    a = a.h;
    return '' === a
      ? b
      : 'boolean' === typeof a
      ? a
        ? b
        : ''
      : Array.isArray(a)
      ? 0 === a.length
        ? b
        : b + '=' + a.join()
      : b + '=' + (Kb(['mtos', 'tos', 'p'], b) ? a : encodeURIComponent(a));
  };
  var To = function (a) {
    var b = void 0 === b ? !0 : b;
    this.h = new Oo();
    void 0 !== a && Po(this.h, a);
    b && this.h.add('v', tm, -16);
  };
  To.prototype.toString = function () {
    var a = '//pagead2.googlesyndication.com//pagead/gen_204',
      b = So(this.h);
    0 < b.length && (a += '?' + b);
    return a;
  };
  var Uo = function (a) {
      var b = [],
        c = [];
      tf(a, function (d, e) {
        if (!(e in Object.prototype) && 'undefined' != typeof d)
          switch (
            (Array.isArray(d) && (d = d.join(',')),
            (d = [e, '=', d].join('')),
            e)
          ) {
            case 'adk':
            case 'r':
            case 'tt':
            case 'error':
            case 'mtos':
            case 'tos':
            case 'p':
            case 'bs':
              b.unshift(d);
              break;
            case 'req':
            case 'url':
            case 'referrer':
            case 'iframe_loc':
              c.push(d);
              break;
            default:
              b.push(d);
          }
      });
      return b.concat(c);
    },
    Vo = function () {
      if (tm && 'unreleased' !== tm) return tm;
    },
    Wo = function (a) {
      var b = void 0 === b ? 4e3 : b;
      a = a.toString();
      if (!/&v=[^&]+/.test(a)) {
        var c = Vo();
        a = c ? a + '&v=' + encodeURIComponent(c) : a;
      }
      b = a = a.substring(0, b);
      tn();
      Ch(P, b);
    };
  var Xo = function () {
    this.h = 0;
  };
  var Yo = function (a, b, c) {
    Bb(a.l, function (d) {
      var e = a.h;
      if (!d.h && (d.l(b, c), d.o())) {
        d.h = !0;
        var f = d.j(),
          g = new Oo();
        g.add('id', 'av-js');
        g.add('type', 'verif');
        g.add('vtype', d.A);
        d = K(Xo);
        g.add('i', d.h++);
        g.add('adk', e);
        Qo(g, f);
        e = new To(g);
        Wo(e);
      }
    });
  };
  var Zo = function () {
      this.j = this.l = this.o = this.h = 0;
    },
    $o = function (a, b, c, d) {
      b && ((a.h += c), (a.j += c), (a.o += c), (a.l = Math.max(a.l, a.o)));
      if (void 0 === d ? !b : d) a.o = 0;
    };
  var ap = [1, 0.75, 0.5, 0.3, 0],
    bp = function (a) {
      this.j = a = void 0 === a ? ap : a;
      this.h = Eb(this.j, function () {
        return new Zo();
      });
    },
    dp = function (a, b) {
      return cp(
        a,
        function (c) {
          return c.h;
        },
        void 0 === b ? !0 : b
      );
    },
    fp = function (a, b) {
      return ep(a, b, function (c) {
        return c.h;
      });
    },
    gp = function (a, b) {
      return cp(
        a,
        function (c) {
          return c.l;
        },
        void 0 === b ? !0 : b
      );
    },
    hp = function (a, b) {
      return ep(a, b, function (c) {
        return c.l;
      });
    },
    ip = function (a, b) {
      return ep(a, b, function (c) {
        return c.j;
      });
    },
    jp = function (a) {
      Bb(a.h, function (b) {
        b.j = 0;
      });
    },
    kp = function (a, b, c, d, e, f, g) {
      g = void 0 === g ? !0 : g;
      c = f ? Math.min(b, c) : c;
      for (f = 0; f < a.j.length; f++) {
        var h = a.j[f],
          k = 0 < c && c >= h;
        h = !(0 < b && b >= h) || d;
        $o(a.h[f], g && k, e, !g || h);
      }
    },
    cp = function (a, b, c) {
      a = Eb(a.h, function (d) {
        return b(d);
      });
      return c ? a : lp(a);
    },
    ep = function (a, b, c) {
      var d = Jb(a.j, function (e) {
        return b <= e;
      });
      return -1 == d ? 0 : c(a.h[d]);
    },
    lp = function (a) {
      return Eb(a, function (b, c, d) {
        return 0 < c ? d[c] - d[c - 1] : d[c];
      });
    };
  var mp = function () {
      this.j = new bp();
      this.V = new Zo();
      this.H = this.C = -1;
      this.aa = 1e3;
      this.ca = new bp([1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0]);
      this.M = this.J = -1;
    },
    np = function (a, b) {
      return gp(a.j, void 0 === b ? !0 : b);
    };
  mp.prototype.K = function (a, b, c, d) {
    this.C = -1 != this.C ? Math.min(this.C, b.ba) : b.ba;
    this.H = Math.max(this.H, b.ba);
    this.J = -1 != this.J ? Math.min(this.J, b.sa) : b.sa;
    this.M = Math.max(this.M, b.sa);
    kp(this.ca, b.sa, c.sa, b.h, a, d);
    kp(this.j, b.ba, c.ba, b.h, a, d);
    c = d || c.lb != b.lb ? c.isVisible() && b.isVisible() : c.isVisible();
    b = !b.isVisible() || b.h;
    $o(this.V, c, a, b);
  };
  mp.prototype.Oa = function () {
    return this.V.l >= this.aa;
  };
  if (vm && vm.URL) {
    var op = vm.URL,
      pp;
    if ((pp = !!op)) {
      var qp;
      a: {
        if (op) {
          var rp = RegExp('.*[&#?]google_debug(=[^&]*)?(&.*)?$');
          try {
            var sp = rp.exec(decodeURIComponent(op));
            if (sp) {
              qp = sp[1] && 1 < sp[1].length ? sp[1].substring(1) : 'true';
              break a;
            }
          } catch (a) {}
        }
        qp = '';
      }
      pp = 0 < qp.length;
    }
    Ln.yd(!pp);
  }
  var tp = function (a, b, c, d) {
    var e = void 0 === e ? !1 : e;
    c = Pn(d, c);
    Se(a, b, c, { capture: e });
  };
  var up = new I(0, 0, 0, 0);
  function vp(a, b) {
    b = wp(b);
    return 0 === b ? 0 : wp(a) / b;
  }
  function wp(a) {
    return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0);
  }
  function xp(a, b) {
    if (!a || !b) return !1;
    for (var c = 0; null !== a && 100 > c++; ) {
      if (a === b) return !0;
      try {
        if ((a = Gg(a) || a)) {
          var d = ug(a),
            e = d && H(d),
            f = e && e.frameElement;
          f && (a = f);
        }
      } catch (g) {
        break;
      }
    }
    return !1;
  }
  function yp(a, b, c) {
    if (!a || !b) return !1;
    b = ph(nh(a), -b.left, -b.top);
    a = (b.left + b.right) / 2;
    b = (b.top + b.bottom) / 2;
    $g(window.top) &&
      window.top &&
      window.top.document &&
      (window = window.top);
    if (!ho()) return !1;
    a = window.document.elementFromPoint(a, b);
    if (!a) return !1;
    b =
      (b = (b = ug(c)) && b.defaultView && b.defaultView.frameElement) &&
      xp(b, a);
    var d = a === c;
    a =
      !d &&
      a &&
      Jg(a, function (e) {
        return e === c;
      });
    return !(b || d || a);
  }
  function zp(a, b, c, d) {
    return yo().l
      ? !1
      : 0 >= a.getWidth() || 0 >= a.getHeight()
      ? !0
      : c && d
      ? On(208, function () {
          return yp(a, b, c);
        })
      : !1;
  }
  var Ap = new I(0, 0, 0, 0),
    Cp = function (a, b, c) {
      E.call(this);
      this.position = nh(Ap);
      this.zc = this.sc();
      this.hd = -2;
      this.fg = Date.now();
      this.qe = -1;
      this.vc = b;
      this.uc = null;
      this.Nb = !1;
      this.Ec = null;
      this.opacity = -1;
      this.Vf = c;
      this.gg = !1;
      this.jd = function () {};
      this.re = function () {};
      this.ta = new Wm();
      this.ta.ab = a;
      this.ta.h = a;
      this.Na = !1;
      this.gb = { md: null, ld: null };
      this.oe = !0;
      this.Wb = null;
      this.Bb = this.Gf = !1;
      Q().B++;
      this.qa = this.bd();
      this.pe = -1;
      this.fa = null;
      this.ce = this.Ef = !1;
      this.R = new Mm();
      Um(this.R);
      Bp(this);
      1 == this.Vf ? Pm(this.R, 'od', 1) : Pm(this.R, 'od', 0);
    };
  t(Cp, E);
  Cp.prototype.N = function () {
    this.ta.h &&
      (this.gb.md &&
        (Te(this.ta.h, 'mouseover', this.gb.md), (this.gb.md = null)),
      this.gb.ld &&
        (Te(this.ta.h, 'mouseout', this.gb.ld), (this.gb.ld = null)));
    this.Wb && this.Wb.W();
    this.fa && this.fa.W();
    delete this.zc;
    delete this.jd;
    delete this.re;
    delete this.ta.ab;
    delete this.ta.h;
    delete this.gb;
    delete this.Wb;
    delete this.fa;
    delete this.R;
    E.prototype.N.call(this);
  };
  Cp.prototype.jb = function () {
    return this.fa ? this.fa.h : this.position;
  };
  Cp.prototype.rd = function (a) {
    Q().rd(a);
  };
  var Bp = function (a) {
    a = a.ta.ab;
    var b;
    if ((b = a && a.getAttribute))
      b = /-[a-z]/.test('googleAvInapp')
        ? !1
        : Vm && a.dataset
        ? 'googleAvInapp' in a.dataset
        : a.hasAttribute
        ? a.hasAttribute('data-' + qg())
        : !!a.getAttribute('data-' + qg());
    b && (yo().j = !0);
  };
  Cp.prototype.Ha = function () {
    return !1;
  };
  Cp.prototype.sc = function () {
    return new mp();
  };
  Cp.prototype.pa = function () {
    return this.zc;
  };
  var Dp = function (a, b) {
      b != a.Bb && ((a.Bb = b), (a = yo()), b ? a.B++ : 0 < a.B && a.B--);
    },
    Ep = function (a, b) {
      if (a.fa) {
        if (b.getName() === a.fa.getName()) return;
        a.fa.W();
        a.fa = null;
      }
      b = b.create(a.ta.h, a.R, a.Ha());
      if ((b = null != b && b.Qc() ? b : null)) a.fa = b;
    },
    Fp = function (a, b, c) {
      if (
        !a.uc ||
        -1 == a.vc ||
        -1 === b.getTimestamp() ||
        -1 === a.uc.getTimestamp()
      )
        return 0;
      a = b.getTimestamp() - a.uc.getTimestamp();
      return a > c ? 0 : a;
    };
  Cp.prototype.Zd = function (a) {
    return Fp(this, a, 1e4);
  };
  var Gp = function (a, b, c) {
      if (a.fa) {
        a.fa.Va();
        var d = a.fa.I,
          e = d.l,
          f = e.h;
        if (null != d.A) {
          var g = d.j;
          a.Ec = new jg(g.left - f.left, g.top - f.top);
        }
        f = a.Jc() ? Math.max(d.h, d.o) : d.h;
        g = {};
        null !== e.volume && (g.volume = e.volume);
        e = a.Zd(d);
        a.uc = d;
        a.Cd(f, b, c, !1, g, e, d.B);
      }
    },
    Hp = function (a) {
      if (a.Nb && a.Wb) {
        var b = 1 == Qm(a.R, 'od'),
          c = yo().h,
          d = a.Wb,
          e = a.fa ? a.fa.getName() : 'ns',
          f = new G(c.getWidth(), c.getHeight());
        c = a.Jc();
        a = { dg: e, Ec: a.Ec, mg: f, Jc: c, ba: a.qa.ba, ig: b };
        if ((b = d.j)) {
          b.Va();
          e = b.I;
          f = e.l.h;
          var g = null,
            h = null;
          null != e.A &&
            f &&
            ((g = e.j),
            (g = new jg(g.left - f.left, g.top - f.top)),
            (h = new G(f.right - f.left, f.bottom - f.top)));
          e = c ? Math.max(e.h, e.o) : e.h;
          c = { dg: b.getName(), Ec: g, mg: h, Jc: c, ig: !1, ba: e };
        } else c = null;
        c && Yo(d, a, c);
      }
    };
  l = Cp.prototype;
  l.Cd = function (a, b, c, d, e, f, g) {
    this.Na ||
      (this.Nb &&
        ((a = this.Tc(a, c, e, g)),
        (d = d && this.qa.ba >= (this.lb() ? 0.3 : 0.5)),
        this.Dd(f, a, d),
        (this.vc = b),
        0 < a.ba && -1 === this.pe && (this.pe = b),
        -1 == this.qe && this.Oa() && (this.qe = b),
        -2 == this.hd && (this.hd = wp(this.jb()) ? a.ba : -1),
        (this.qa = a)),
      this.jd(this));
  };
  l.Dd = function (a, b, c) {
    this.pa().K(a, b, this.qa, c);
  };
  l.bd = function () {
    return new Am();
  };
  l.Tc = function (a, b, c, d) {
    c = this.bd();
    c.h = b;
    b = tn().j;
    b = 0 === Kh(vm) ? -1 : b.isVisible() ? 0 : 1;
    c.j = b;
    c.ba = this.Vc(a);
    c.lb = this.lb();
    c.sa = d;
    return c;
  };
  l.Vc = function (a) {
    return 0 === this.opacity && 1 === Qm(this.R, 'opac') ? 0 : a;
  };
  l.lb = function () {
    return !1;
  };
  l.Jc = function () {
    return this.Ef || this.Gf;
  };
  l.va = function () {
    return 0;
  };
  l.Oa = function () {
    return this.zc.Oa();
  };
  l.be = function () {
    var a = this.Nb;
    a = (this.ce || this.ya()) && !a;
    var b = 2 !== Q().j || this.gg;
    return this.Na || (b && a) ? 2 : this.Oa() ? 4 : 3;
  };
  l.qc = function () {
    return 0;
  };
  var Ip = function (a, b, c) {
    b && (a.jd = b);
    c && (a.re = c);
  };
  var Jp = function () {};
  Jp.prototype.next = function () {
    return Kp;
  };
  var Kp = { done: !0, value: void 0 };
  Jp.prototype.sb = function () {
    return this;
  };
  var Lp = function () {
      this.o = this.h = this.l = this.j = this.A = 0;
    },
    Mp = function (a) {
      var b = {};
      b = ((b.ptlt = Xa() - a.A), b);
      var c = a.j;
      c && (b.pnk = c);
      (c = a.l) && (b.pnc = c);
      (c = a.o) && (b.pnmm = c);
      (a = a.h) && (b.pns = a);
      return b;
    };
  var Np = function () {
    Am.call(this);
    this.fullscreen = !1;
    this.volume = void 0;
    this.paused = !1;
    this.mediaTime = -1;
  };
  t(Np, Am);
  var Op = function (a) {
    return qo(a.volume) && 0 < a.volume;
  };
  var Qp = function (a, b, c, d) {
      c = void 0 === c ? !0 : c;
      d =
        void 0 === d
          ? function () {
              return !0;
            }
          : d;
      return function (e) {
        var f = e[a];
        if (Array.isArray(f) && d(e)) return Pp(f, b, c);
      };
    },
    Rp = function (a, b) {
      return function (c) {
        return b(c) ? c[a] : void 0;
      };
    },
    Sp = function (a) {
      return function (b) {
        for (var c = 0; c < a.length; c++)
          if (a[c] === b.e || (void 0 === a[c] && !b.hasOwnProperty('e')))
            return !0;
        return !1;
      };
    },
    Pp = function (a, b, c) {
      return void 0 === c || c
        ? Db(a, function (d, e) {
            return Kb(b, e);
          })
        : Eb(b, function (d, e, f) {
            return a
              .slice(0 < e ? f[e - 1] + 1 : 0, d + 1)
              .reduce(function (g, h) {
                return g + h;
              }, 0);
          });
    };
  var Tp = Sp([void 0, 1, 2, 3, 4, 8, 16]),
    Up = Sp([void 0, 4, 8, 16]),
    Vp = {
      sv: 'sv',
      v: 'v',
      cb: 'cb',
      e: 'e',
      nas: 'nas',
      msg: 'msg',
      if: 'if',
      sdk: 'sdk',
      p: 'p',
      p0: Rp('p0', Up),
      p1: Rp('p1', Up),
      p2: Rp('p2', Up),
      p3: Rp('p3', Up),
      cp: 'cp',
      tos: 'tos',
      mtos: 'mtos',
      amtos: 'amtos',
      mtos1: Qp('mtos1', [0, 2, 4], !1, Up),
      mtos2: Qp('mtos2', [0, 2, 4], !1, Up),
      mtos3: Qp('mtos3', [0, 2, 4], !1, Up),
      mcvt: 'mcvt',
      ps: 'ps',
      scs: 'scs',
      bs: 'bs',
      vht: 'vht',
      mut: 'mut',
      a: 'a',
      a0: Rp('a0', Up),
      a1: Rp('a1', Up),
      a2: Rp('a2', Up),
      a3: Rp('a3', Up),
      ft: 'ft',
      dft: 'dft',
      at: 'at',
      dat: 'dat',
      as: 'as',
      vpt: 'vpt',
      gmm: 'gmm',
      std: 'std',
      efpf: 'efpf',
      swf: 'swf',
      nio: 'nio',
      px: 'px',
      nnut: 'nnut',
      vmer: 'vmer',
      vmmk: 'vmmk',
      vmiec: 'vmiec',
      nmt: 'nmt',
      tcm: 'tcm',
      bt: 'bt',
      pst: 'pst',
      vpaid: 'vpaid',
      dur: 'dur',
      vmtime: 'vmtime',
      dtos: 'dtos',
      dtoss: 'dtoss',
      dvs: 'dvs',
      dfvs: 'dfvs',
      dvpt: 'dvpt',
      fmf: 'fmf',
      vds: 'vds',
      is: 'is',
      i0: 'i0',
      i1: 'i1',
      i2: 'i2',
      i3: 'i3',
      ic: 'ic',
      cs: 'cs',
      c: 'c',
      c0: Rp('c0', Up),
      c1: Rp('c1', Up),
      c2: Rp('c2', Up),
      c3: Rp('c3', Up),
      mc: 'mc',
      nc: 'nc',
      mv: 'mv',
      nv: 'nv',
      qmt: Rp('qmtos', Tp),
      qnc: Rp('qnc', Tp),
      qmv: Rp('qmv', Tp),
      qnv: Rp('qnv', Tp),
      raf: 'raf',
      rafc: 'rafc',
      lte: 'lte',
      ces: 'ces',
      tth: 'tth',
      femt: 'femt',
      femvt: 'femvt',
      emc: 'emc',
      emuc: 'emuc',
      emb: 'emb',
      avms: 'avms',
      nvat: 'nvat',
      qi: 'qi',
      psm: 'psm',
      psv: 'psv',
      psfv: 'psfv',
      psa: 'psa',
      pnk: 'pnk',
      pnc: 'pnc',
      pnmm: 'pnmm',
      pns: 'pns',
      ptlt: 'ptlt',
      pngs: 'pings',
      veid: 'veid',
      ssb: 'ssb',
      ss0: Rp('ss0', Up),
      ss1: Rp('ss1', Up),
      ss2: Rp('ss2', Up),
      ss3: Rp('ss3', Up),
      dc_rfl: 'urlsigs',
      obd: 'obd',
      omidp: 'omidp',
      omidr: 'omidr',
      omidv: 'omidv',
      omida: 'omida',
      omids: 'omids',
      omidpv: 'omidpv',
      omidam: 'omidam',
      omidct: 'omidct',
      omidia: 'omidia',
      omiddc: 'omiddc',
      omidlat: 'omidlat',
      omiddit: 'omiddit',
      nopd: 'nopd',
    },
    Wp = Object.assign({}, Vp, {
      avid: (function (a) {
        return function () {
          return a;
        };
      })('audio'),
      avas: 'avas',
      vs: 'vs',
    }),
    Xp = {
      atos: 'atos',
      avt: Qp('atos', [2]),
      davs: 'davs',
      dafvs: 'dafvs',
      dav: 'dav',
      ss: (function (a, b) {
        return function (c) {
          return void 0 === c[a] && void 0 !== b ? b : c[a];
        };
      })('ss', 0),
      t: 't',
    };
  var Yp = function () {
    this.j = this.h = '';
  };
  var Zp = function () {},
    $p = function (a, b) {
      var c = {};
      if (void 0 !== a)
        if (null != b)
          for (var d in b) {
            var e = b[d];
            d in Object.prototype ||
              (null != e && (c[d] = 'function' === typeof e ? e(a) : a[e]));
          }
        else Kf(c, a);
      return So(Qo(new Oo(), c));
    };
  var aq = function () {
      var a = {};
      this.j =
        ((a.vs = [1, 0]),
        (a.vw = [0, 1]),
        (a.am = [2, 2]),
        (a.a = [4, 4]),
        (a.f = [8, 8]),
        (a.bm = [16, 16]),
        (a.b = [32, 32]),
        (a.avw = [0, 64]),
        (a.avs = [64, 0]),
        (a.pv = [256, 256]),
        (a.gdr = [0, 512]),
        (a.p = [0, 1024]),
        (a.r = [0, 2048]),
        (a.m = [0, 4096]),
        (a.um = [0, 8192]),
        (a.ef = [0, 16384]),
        (a.s = [0, 32768]),
        (a.pmx = [0, 16777216]),
        (a.mut = [33554432, 33554432]),
        (a.umutb = [67108864, 67108864]),
        a);
      this.h = {};
      for (var b in this.j) 0 < this.j[b][1] && (this.h[b] = 0);
      this.l = 0;
    },
    bq = function (a, b) {
      var c = a.j[b],
        d = c[1];
      a.l += c[0];
      0 < d && 0 == a.h[b] && (a.h[b] = 1);
    },
    cq = function (a) {
      var b = Af(a.j),
        c = 0,
        d;
      for (d in a.h)
        Kb(b, d) && 1 == a.h[d] && ((c += a.j[d][1]), (a.h[d] = 2));
      return c;
    },
    dq = function (a) {
      var b = 0,
        c;
      for (c in a.h) {
        var d = a.h[c];
        if (1 == d || 2 == d) b += a.j[c][1];
      }
      return b;
    };
  var eq = function () {
      this.j = this.h = 0;
    },
    fq = function (a, b, c) {
      32 <= b ||
        (a.j & (1 << b) && !c
          ? (a.h &= ~(1 << b))
          : a.j & (1 << b) || !c || (a.h |= 1 << b),
        (a.j |= 1 << b));
    };
  var gq = function () {
    mp.call(this);
    this.l = new Zo();
    this.U = this.F = this.L = 0;
    this.I = -1;
    this.ia = new Zo();
    this.A = new Zo();
    this.h = new bp();
    this.B = this.o = -1;
    this.G = new Zo();
    this.aa = 2e3;
    this.O = new eq();
    this.Z = new eq();
    this.X = new eq();
  };
  t(gq, mp);
  var hq = function (a, b, c) {
    var d = a.U;
    Wn || c || -1 == a.I || (d += b - a.I);
    return d;
  };
  gq.prototype.K = function (a, b, c, d) {
    if (!b.paused) {
      mp.prototype.K.call(this, a, b, c, d);
      var e = Op(b) && Op(c),
        f = 0.5 <= (d ? Math.min(b.ba, c.ba) : c.ba);
      qo(b.volume) &&
        ((this.o = -1 != this.o ? Math.min(this.o, b.volume) : b.volume),
        (this.B = Math.max(this.B, b.volume)));
      f && ((this.L += a), (this.F += e ? a : 0));
      kp(this.h, b.ba, c.ba, b.h, a, d, e);
      $o(this.l, !0, a);
      $o(this.A, e, a);
      $o(this.G, c.fullscreen, a);
      $o(this.ia, e && !f, a);
      a = Math.floor(b.mediaTime / 1e3);
      fq(this.O, a, b.isVisible());
      fq(this.Z, a, 1 <= b.ba);
      fq(this.X, a, Op(b));
    }
  };
  var iq = function () {
    this.l = !1;
  };
  iq.prototype.j = function (a) {
    this.l ||
      (this.h(a)
        ? ((a = this.K.report(this.o, a)), (this.A |= a), (a = 0 == a))
        : (a = !1),
      (this.l = a));
  };
  var jq = function (a, b) {
    this.l = !1;
    this.o = a;
    this.K = b;
    this.A = 0;
  };
  t(jq, iq);
  jq.prototype.h = function () {
    return !0;
  };
  jq.prototype.B = function () {
    return !1;
  };
  jq.prototype.getId = function () {
    var a = this,
      b = Ef(function (c) {
        return c == a.o;
      });
    return fo[b].toString();
  };
  jq.prototype.toString = function () {
    var a = '';
    this.B() && (a += 'c');
    this.l && (a += 's');
    0 < this.A && (a += ':' + this.A);
    return this.getId() + a;
  };
  var kq = function (a, b) {
    jq.call(this, a, b);
    this.C = [];
  };
  t(kq, jq);
  kq.prototype.j = function (a, b) {
    b = void 0 === b ? null : b;
    null != b && this.C.push(b);
    jq.prototype.j.call(this, a);
  };
  var lq = function () {};
  var mq = function () {};
  t(mq, lq);
  mq.prototype.j = function () {
    return null;
  };
  mq.prototype.l = function () {
    return [];
  };
  var nq = function (a, b, c, d) {
    Jo.call(this, a, b, c, d);
  };
  t(nq, Jo);
  l = nq.prototype;
  l.Uc = function () {
    if (this.j) {
      var a = this.j,
        b = this.l.h.l;
      try {
        try {
          var c = oo(a.getBoundingClientRect());
        } catch (n) {
          c = new I(0, 0, 0, 0);
        }
        var d = c.right - c.left,
          e = c.bottom - c.top,
          f = Ll(a, b),
          g = f.x,
          h = f.y;
        var k = new I(
          Math.round(h),
          Math.round(g + d),
          Math.round(h + e),
          Math.round(g)
        );
      } catch (n) {
        k = nh(up);
      }
      this.h = k;
    }
  };
  l.Pd = function () {
    this.A = this.l.o.h;
  };
  l.de = function (a) {
    return zp(a, this.A, this.j, 1 == Qm(this.R, 'od'));
  };
  l.Qd = function () {
    this.timestamp = Xn();
  };
  l.Va = function () {
    this.Qd();
    this.Uc();
    if (
      this.j &&
      'number' === typeof this.j.videoWidth &&
      'number' === typeof this.j.videoHeight
    ) {
      var a = this.j;
      var b = new G(a.videoWidth, a.videoHeight);
      a = this.h;
      var c = a.getWidth(),
        d = a.getHeight(),
        e = b.width;
      b = b.height;
      0 >= e ||
        0 >= b ||
        0 >= c ||
        0 >= d ||
        ((e /= b),
        (a = nh(a)),
        e > c / d
          ? ((c /= e),
            (d = (d - c) / 2),
            0 < d &&
              ((d = a.top + d),
              (a.top = Math.round(d)),
              (a.bottom = Math.round(d + c))))
          : ((d *= e),
            (c = Math.round((c - d) / 2)),
            0 < c &&
              ((c = a.left + c),
              (a.left = Math.round(c)),
              (a.right = Math.round(c + d)))));
      this.h = a;
    }
    this.Pd();
    a = this.h;
    c = this.A;
    a =
      a.left <= c.right &&
      c.left <= a.right &&
      a.top <= c.bottom &&
      c.top <= a.bottom
        ? new I(
            Math.max(a.top, c.top),
            Math.min(a.right, c.right),
            Math.min(a.bottom, c.bottom),
            Math.max(a.left, c.left)
          )
        : new I(0, 0, 0, 0);
    c = a.top >= a.bottom || a.left >= a.right ? new I(0, 0, 0, 0) : a;
    a = this.l.o;
    b = e = d = 0;
    0 < (this.h.bottom - this.h.top) * (this.h.right - this.h.left) &&
      (this.de(c)
        ? (c = new I(0, 0, 0, 0))
        : ((d = yo().A),
          (b = new I(0, d.height, d.width, 0)),
          (d = vp(c, this.h)),
          (e = vp(c, yo().h)),
          (b = vp(c, b))));
    c =
      c.top >= c.bottom || c.left >= c.right
        ? new I(0, 0, 0, 0)
        : ph(c, -this.h.left, -this.h.top);
    zo() || (e = d = 0);
    this.I = new $n(a, this.j, this.h, c, d, e, this.timestamp, b);
  };
  l.getName = function () {
    return this.l.getName();
  };
  var oq = new I(0, 0, 0, 0),
    pq = function (a, b, c) {
      Jo.call(this, null, a, b, c);
      this.C = a.isActive();
      this.B = 0;
    };
  t(pq, nq);
  l = pq.prototype;
  l.Qc = function () {
    this.o();
    return !0;
  };
  l.Xa = function () {
    nq.prototype.Va.call(this);
  };
  l.Qd = function () {};
  l.Uc = function () {};
  l.Va = function () {
    this.o();
    nq.prototype.Va.call(this);
  };
  l.Ab = function (a) {
    a = a.isActive();
    a !== this.C &&
      (a
        ? this.o()
        : ((yo().h = new I(0, 0, 0, 0)),
          (this.h = new I(0, 0, 0, 0)),
          (this.A = new I(0, 0, 0, 0)),
          (this.timestamp = -1)));
    this.C = a;
  };
  function qq(a) {
    return [a.top, a.left, a.bottom, a.right];
  }
  var rq = {},
    sq =
      ((rq.firstquartile = 0),
      (rq.midpoint = 1),
      (rq.thirdquartile = 2),
      (rq.complete = 3),
      rq),
    tq = function (a, b, c, d, e, f) {
      f = void 0 === f ? new mq() : f;
      Cp.call(this, b, c, d);
      this.qd = e;
      this.Yc = 0;
      this.ka = {};
      this.ha = new aq();
      this.se = {};
      this.ma = '';
      this.playerId = null;
      this.ua = !1;
      this.h = [];
      this.Qa = f.j();
      this.B = f.l();
      this.A = null;
      this.l = -1;
      this.V = this.G = void 0;
      this.J = this.H = 0;
      this.O = -1;
      this.ca = this.aa = !1;
      this.M = this.F = this.j = this.Fb = this.na = 0;
      new bp();
      this.U = this.X = 0;
      this.Z = -1;
      this.la = 0;
      this.C = Me;
      this.L = [this.sc()];
      this.Ka = 2;
      this.pb = {};
      this.pb.pause = 'p';
      this.pb.resume = 'r';
      this.pb.skip = 's';
      this.pb.mute = 'm';
      this.pb.unmute = 'um';
      this.pb.exitfullscreen = 'ef';
      this.o = null;
      this.ia = !1;
    };
  t(tq, Cp);
  tq.prototype.Ha = function () {
    return !0;
  };
  var uq = function (a) {
      a.ce = !0;
      0 != a.la && (a.la = 3);
    },
    vq = function (a) {
      return void 0 === a ? a : Number(a) ? jo(a, 3) : 0;
    };
  l = tq.prototype;
  l.Zd = function (a) {
    return Fp(this, a, Math.max(1e4, this.l / 3));
  };
  l.Cd = function (a, b, c, d, e, f, g) {
    var h = this,
      k = this.C(this) || {};
    Kf(k, e);
    this.l = k.duration || this.l;
    this.G = k.isVpaid || this.G;
    this.V = k.isYouTube || this.V;
    e = wq(this, b);
    1 === xq(this) && (f = e);
    Cp.prototype.Cd.call(this, a, b, c, d, k, f, g);
    this.Qa &&
      this.Qa.l &&
      Bb(this.B, function (n) {
        n.j(h);
      });
  };
  l.Dd = function (a, b, c) {
    Cp.prototype.Dd.call(this, a, b, c);
    yq(this).K(a, b, this.qa, c);
    this.ca = Op(this.qa) && Op(b);
    -1 == this.O && this.aa && (this.O = this.pa().l.h);
    this.ha.l = 0;
    a = this.Oa();
    b.isVisible() && bq(this.ha, 'vs');
    a && bq(this.ha, 'vw');
    qo(b.volume) && bq(this.ha, 'am');
    Op(b) ? bq(this.ha, 'a') : bq(this.ha, 'mut');
    this.Bb && bq(this.ha, 'f');
    -1 != b.j &&
      (bq(this.ha, 'bm'),
      1 == b.j && (bq(this.ha, 'b'), Op(b) && bq(this.ha, 'umutb')));
    Op(b) && b.isVisible() && bq(this.ha, 'avs');
    this.ca && a && bq(this.ha, 'avw');
    0 < b.ba && bq(this.ha, 'pv');
    zq(this, this.pa().l.h, !0) && bq(this.ha, 'gdr');
    2e3 <= hp(this.pa().j, 1) && bq(this.ha, 'pmx');
  };
  l.sc = function () {
    return new gq();
  };
  l.pa = function () {
    return this.zc;
  };
  var yq = function (a, b) {
    return a.L[null != b && b < a.L.length ? b : a.L.length - 1];
  };
  tq.prototype.bd = function () {
    return new Np();
  };
  tq.prototype.Tc = function (a, b, c, d) {
    a = Cp.prototype.Tc.call(this, a, b, c, void 0 === d ? -1 : d);
    a.fullscreen = this.Bb;
    a.paused = 2 == this.la;
    a.volume = c.volume;
    qo(a.volume) ||
      (this.na++, (b = this.qa), qo(b.volume) && (a.volume = b.volume));
    c = c.currentTime;
    a.mediaTime = void 0 !== c && 0 <= c ? c : -1;
    return a;
  };
  var xq = function (a) {
      var b = !!Qm(Q().R, 'umt');
      return a.G || (!b && !a.V) ? 0 : 1;
    },
    wq = function (a, b) {
      2 == a.la
        ? (b = 0)
        : -1 == a.vc
        ? (b = 0)
        : ((b -= a.vc), (b = b > Math.max(1e4, a.l / 3) ? 0 : b));
      var c = a.C(a) || {};
      c = void 0 !== c.currentTime ? c.currentTime : a.H;
      var d = c - a.H,
        e = 0;
      0 <= d
        ? ((a.J += b), (a.U += Math.max(b - d, 0)), (e = Math.min(d, a.J)))
        : (a.X += Math.abs(d));
      0 != d && (a.J = 0);
      -1 == a.Z && 0 < d && (a.Z = 0 <= Vn ? Xn() - Vn : -1);
      a.H = c;
      return e;
    };
  tq.prototype.Vc = function (a) {
    return yo(), this.Bb ? 1 : Cp.prototype.Vc.call(this, a);
  };
  tq.prototype.va = function () {
    return 1;
  };
  tq.prototype.getDuration = function () {
    return this.l;
  };
  var Aq = function (a, b) {
      Gb(a.B, function (c) {
        return c.o == b.o;
      }) || a.B.push(b);
    },
    Bq = function (a) {
      var b = fp(a.pa().h, 1);
      return zq(a, b);
    },
    zq = function (a, b, c) {
      return 15e3 <= b
        ? !0
        : a.aa
        ? (void 0 === c ? 0 : c)
          ? !0
          : 0 < a.l
          ? b >= a.l / 2
          : 0 < a.O
          ? b >= a.O
          : !1
        : !1;
    },
    Cq = function (a) {
      var b = {},
        c = yo();
      b.insideIframe = c.l;
      b.unmeasurable = a.Na;
      b.position = a.jb();
      b.exposure = a.qa.ba;
      b.documentSize = c.o;
      b.viewportSize = new G(c.h.getWidth(), c.h.getHeight());
      null != a.o && (b.presenceData = a.o);
      b.screenShare = a.qa.sa;
      return b;
    },
    Dq = function (a) {
      var b = jo(a.qa.ba, 2),
        c = a.ha.l,
        d = a.qa,
        e = yq(a),
        f = vq(e.o),
        g = vq(e.B),
        h = vq(d.volume),
        k = jo(e.C, 2),
        n = jo(e.H, 2),
        m = jo(d.ba, 2),
        x = jo(e.J, 2),
        u = jo(e.M, 2);
      d = jo(d.sa, 2);
      a = nh(a.jb());
      a.round();
      e = np(e, !1);
      return {
        lg: b,
        Qb: c,
        Ac: f,
        wc: g,
        Kb: h,
        Bc: k,
        xc: n,
        ba: m,
        Cc: x,
        yc: u,
        sa: d,
        position: a,
        Dc: e,
      };
    },
    Fq = function (a, b) {
      Eq(a.h, b, function () {
        return {
          lg: 0,
          Qb: void 0,
          Ac: -1,
          wc: -1,
          Kb: -1,
          Bc: -1,
          xc: -1,
          ba: -1,
          Cc: -1,
          yc: -1,
          sa: -1,
          position: void 0,
          Dc: [],
        };
      });
      a.h[b] = Dq(a);
    },
    Eq = function (a, b, c) {
      for (var d = a.length; d < b + 1; ) a.push(c()), d++;
    },
    Iq = function (a, b, c) {
      var d = a.se[b];
      if (null != d) return d;
      d = Gq(a, b);
      var e = Ef(function (f) {
        return f == b;
      });
      a = Hq(a, d, d, c, sq[Ff[e]]);
      'fully_viewable_audible_half_duration_impression' == b && (a.std = 'csm');
      return a;
    },
    Jq = function (a, b, c) {
      var d = [b];
      if (a != b || c != b) d.unshift(a), d.push(c);
      return d;
    },
    Hq = function (a, b, c, d, e) {
      if (a.Na) return { if: 0, vs: 0 };
      var f = nh(a.jb());
      f.round();
      var g = yo(),
        h = Q(),
        k = a.pa(),
        n = a.fa ? a.fa.getName() : 'ns',
        m = {};
      m['if'] = g.l ? 1 : void 0;
      m.sdk = a.A ? a.A : void 0;
      m.t = a.fg;
      m.p = [f.top, f.left, f.bottom, f.right];
      m.tos = dp(k.j, !1);
      m.mtos = np(k);
      m.mcvt = k.V.l;
      m.ps = void 0;
      m.vht = hq(k, Xn(), 2 == a.la);
      m.mut = k.ia.l;
      m.a = vq(a.qa.volume);
      m.mv = vq(k.B);
      m.fs = a.Bb ? 1 : 0;
      m.ft = k.G.h;
      m.at = k.A.h;
      m.as = 0 < k.o ? 1 : 0;
      m.atos = dp(k.h);
      m.ssb = dp(k.ca, !1);
      m.amtos = gp(k.h, !1);
      m.uac = a.na;
      m.vpt = k.l.h;
      'nio' == n && ((m.nio = 1), (m.avms = 'nio'));
      m.gmm = '4';
      m.gdr = zq(a, k.l.h, !0) ? 1 : 0;
      m.efpf = a.Ka;
      if ('gsv' == n || 'nis' == n) (f = a.fa), 0 < f.B && (m.nnut = f.B);
      m.tcm = xq(a);
      m.nmt = a.X;
      m.bt = a.U;
      m.pst = a.Z;
      m.vpaid = a.G;
      m.dur = a.l;
      m.vmtime = a.H;
      m.is = a.ha.l;
      1 <= a.h.length &&
        ((m.i0 = a.h[0].Qb),
        (m.a0 = [a.h[0].Kb]),
        (m.c0 = [a.h[0].ba]),
        (m.ss0 = [a.h[0].sa]),
        (f = a.h[0].position),
        (m.p0 = f ? qq(f) : void 0));
      2 <= a.h.length &&
        ((m.i1 = a.h[1].Qb),
        (m.a1 = Jq(a.h[1].Ac, a.h[1].Kb, a.h[1].wc)),
        (m.c1 = Jq(a.h[1].Bc, a.h[1].ba, a.h[1].xc)),
        (m.ss1 = Jq(a.h[1].Cc, a.h[1].sa, a.h[1].yc)),
        (f = a.h[1].position),
        (m.p1 = f ? qq(f) : void 0),
        (m.mtos1 = a.h[1].Dc));
      3 <= a.h.length &&
        ((m.i2 = a.h[2].Qb),
        (m.a2 = Jq(a.h[2].Ac, a.h[2].Kb, a.h[2].wc)),
        (m.c2 = Jq(a.h[2].Bc, a.h[2].ba, a.h[2].xc)),
        (m.ss2 = Jq(a.h[2].Cc, a.h[2].sa, a.h[2].yc)),
        (f = a.h[2].position),
        (m.p2 = f ? qq(f) : void 0),
        (m.mtos2 = a.h[2].Dc));
      4 <= a.h.length &&
        ((m.i3 = a.h[3].Qb),
        (m.a3 = Jq(a.h[3].Ac, a.h[3].Kb, a.h[3].wc)),
        (m.c3 = Jq(a.h[3].Bc, a.h[3].ba, a.h[3].xc)),
        (m.ss3 = Jq(a.h[3].Cc, a.h[3].sa, a.h[3].yc)),
        (f = a.h[3].position),
        (m.p3 = f ? qq(f) : void 0),
        (m.mtos3 = a.h[3].Dc));
      m.cs = dq(a.ha);
      b &&
        ((m.ic = cq(a.ha)),
        (m.dvpt = k.l.j),
        (m.dvs = ip(k.j, 0.5)),
        (m.dfvs = ip(k.j, 1)),
        (m.davs = ip(k.h, 0.5)),
        (m.dafvs = ip(k.h, 1)),
        c && ((k.l.j = 0), jp(k.j), jp(k.h)),
        a.Oa() &&
          ((m.dtos = k.L),
          (m.dav = k.F),
          (m.dtoss = a.Yc + 1),
          c && ((k.L = 0), (k.F = 0), a.Yc++)),
        (m.dat = k.A.j),
        (m.dft = k.G.j),
        c && ((k.A.j = 0), (k.G.j = 0)));
      m.ps = [g.o.width, g.o.height];
      m.bs = [g.h.getWidth(), g.h.getHeight()];
      m.scs = [g.A.width, g.A.height];
      m.dom = g.domain;
      a.Fb && (m.vds = a.Fb);
      if (0 < a.B.length || a.Qa)
        (b = Pb(a.B)),
          a.Qa && b.push(a.Qa),
          (m.pings = Eb(b, function (x) {
            return x.toString();
          }));
      b = Eb(
        Db(a.B, function (x) {
          return x.B();
        }),
        function (x) {
          return x.getId();
        }
      );
      Qb(b);
      m.ces = b;
      a.j && (m.vmer = a.j);
      a.F && (m.vmmk = a.F);
      a.M && (m.vmiec = a.M);
      m.avms = a.fa ? a.fa.getName() : 'ns';
      a.fa && Kf(m, a.fa.Wa());
      d
        ? ((m.c = jo(a.qa.ba, 2)), (m.ss = jo(a.qa.sa, 2)))
        : (m.tth = Xn() - Un);
      m.mc = jo(k.H, 2);
      m.nc = jo(k.C, 2);
      m.mv = vq(k.B);
      m.nv = vq(k.o);
      m.lte = jo(a.hd, 2);
      d = yq(a, e);
      np(k);
      m.qmtos = np(d);
      m.qnc = jo(d.C, 2);
      m.qmv = vq(d.B);
      m.qnv = vq(d.o);
      m.qas = 0 < d.o ? 1 : 0;
      m.qi = a.ma;
      m.avms || (m.avms = 'geo');
      m.psm = k.O.j;
      m.psv = k.O.h;
      m.psfv = k.Z.h;
      m.psa = k.X.h;
      h = Sm(h.R);
      h.length && (m.veid = h);
      a.o && Kf(m, Mp(a.o));
      m.avas = a.qc();
      m.vs = a.be();
      return m;
    },
    Gq = function (a, b) {
      if (Kb(eo, b)) return !0;
      var c = a.ka[b];
      return void 0 !== c ? ((a.ka[b] = !0), !c) : !1;
    };
  tq.prototype.be = function () {
    return this.Na ? 2 : Bq(this) ? 5 : this.Oa() ? 4 : 3;
  };
  tq.prototype.qc = function () {
    return this.ia ? (2e3 <= this.pa().A.l ? 4 : 3) : 2;
  };
  var Kq = Xa(),
    Nq = function () {
      this.h = {};
      var a = H();
      Lq(this, a, document);
      var b = Mq();
      try {
        if ('1' == b) {
          for (var c = a.parent; c != a.top; c = c.parent)
            Lq(this, c, c.document);
          Lq(this, a.top, a.top.document);
        }
      } catch (d) {}
    },
    Mq = function () {
      var a = document.documentElement;
      try {
        if (!$g(H().top)) return '2';
        var b = [],
          c = H(a.ownerDocument);
        for (a = c; a != c.top; a = a.parent)
          if (a.frameElement) b.push(a.frameElement);
          else break;
        return b && 0 != b.length ? '1' : '0';
      } catch (d) {
        return '2';
      }
    },
    Lq = function (a, b, c) {
      tp(
        c,
        'mousedown',
        function () {
          return Oq(a);
        },
        301
      );
      tp(
        b,
        'scroll',
        function () {
          return Pq(a);
        },
        302
      );
      tp(
        c,
        'touchmove',
        function () {
          return Qq(a);
        },
        303
      );
      tp(
        c,
        'mousemove',
        function () {
          return Rq(a);
        },
        304
      );
      tp(
        c,
        'keydown',
        function () {
          return Sq(a);
        },
        305
      );
    },
    Oq = function (a) {
      tf(a.h, function (b) {
        1e5 < b.l || ++b.l;
      });
    },
    Pq = function (a) {
      tf(a.h, function (b) {
        1e5 < b.h || ++b.h;
      });
    },
    Qq = function (a) {
      tf(a.h, function (b) {
        1e5 < b.h || ++b.h;
      });
    },
    Sq = function (a) {
      tf(a.h, function (b) {
        1e5 < b.j || ++b.j;
      });
    },
    Rq = function (a) {
      tf(a.h, function (b) {
        1e5 < b.o || ++b.o;
      });
    };
  var Tq = function () {
      this.h = [];
      this.j = [];
    },
    Uq = function (a, b) {
      return Hb(a.h, function (c) {
        return c.ma == b;
      });
    },
    Vq = function (a, b) {
      return b
        ? Hb(a.h, function (c) {
            return c.ta.ab == b;
          })
        : null;
    },
    Wq = function (a, b) {
      return Hb(a.j, function (c) {
        return 2 == c.va() && c.ma == b;
      });
    },
    Yq = function () {
      var a = Xq;
      return 0 == a.h.length ? a.j : 0 == a.j.length ? a.h : Ob(a.j, a.h);
    };
  Tq.prototype.reset = function () {
    this.h = [];
    this.j = [];
  };
  var Zq = function (a, b) {
      a = 1 == b.va() ? a.h : a.j;
      var c = Ib(a, function (d) {
        return d == b;
      });
      return -1 != c ? (a.splice(c, 1), b.fa && b.fa.Xb(), b.W(), !0) : !1;
    },
    $q = function (a) {
      var b = Xq;
      if (Zq(b, a)) {
        switch (a.va()) {
          case 0:
            var c = function () {
              return null;
            };
          case 2:
            c = function () {
              return Wq(b, a.ma);
            };
            break;
          case 1:
            c = function () {
              return Uq(b, a.ma);
            };
        }
        for (var d = c(); d; d = c()) Zq(b, d);
      }
    },
    ar = function (a) {
      var b = Xq;
      a = Db(a, function (c) {
        return !Vq(b, c.ta.ab);
      });
      b.h.push.apply(b.h, ia(a));
    },
    br = function (a) {
      var b = [];
      Bb(a, function (c) {
        Gb(Xq.h, function (d) {
          return d.ta.ab === c.ta.ab && d.ma === c.ma;
        }) || (Xq.h.push(c), b.push(c));
      });
    },
    Xq = K(Tq);
  var cr = function () {
      this.h = this.j = null;
    },
    dr = function (a, b) {
      if (null == a.j) return !1;
      var c = function (d, e) {
        b(d, e);
      };
      a.h = Hb(a.j, function (d) {
        return null != d && d.Hd();
      });
      a.h && (a.h.init(c) ? Go(a.h.h) : b(a.h.h.xb(), a.h));
      return null != a.h;
    };
  var fr = function (a) {
    a = er(a);
    Ko.call(this, a.length ? a[a.length - 1] : new Co(P, 0));
    this.l = a;
    this.j = null;
  };
  t(fr, Ko);
  l = fr.prototype;
  l.getName = function () {
    return (this.j ? this.j : this.h).getName();
  };
  l.Wa = function () {
    return (this.j ? this.j : this.h).Wa();
  };
  l.Ma = function () {
    return (this.j ? this.j : this.h).Ma();
  };
  l.init = function (a) {
    var b = !1;
    Bb(this.l, function (c) {
      c.initialize() && (b = !0);
    });
    b && ((this.o = a), Fo(this.h, this));
    return b;
  };
  l.W = function () {
    Bb(this.l, function (a) {
      a.W();
    });
    Ko.prototype.W.call(this);
  };
  l.Hd = function () {
    return Gb(this.l, function (a) {
      return a.H();
    });
  };
  l.Jb = function () {
    return Gb(this.l, function (a) {
      return a.H();
    });
  };
  l.Yb = function (a, b, c) {
    return new nq(a, this.h, b, c);
  };
  l.Xa = function (a) {
    this.j = a.j;
  };
  var er = function (a) {
    if (!a.length) return [];
    a = Db(a, function (c) {
      return null != c && c.H();
    });
    for (var b = 1; b < a.length; b++) Fo(a[b - 1], a[b]);
    return a;
  };
  var gr = { threshold: [0, 0.3, 0.5, 0.75, 1] },
    hr = function (a, b, c, d) {
      Jo.call(this, a, b, c, d);
      this.F = this.K = this.B = this.C = this.o = null;
    };
  t(hr, nq);
  hr.prototype.Qc = function () {
    var a = this;
    this.F || (this.F = Xn());
    if (
      On(298, function () {
        return ir(a);
      })
    )
      return !0;
    Eo(this.l, 'msf');
    return !1;
  };
  hr.prototype.Xb = function () {
    if (this.o && this.j)
      try {
        this.o.unobserve(this.j),
          this.C
            ? (this.C.unobserve(this.j), (this.C = null))
            : this.B && (this.B.disconnect(), (this.B = null));
      } catch (a) {}
  };
  var jr = function (a) {
      return a.o && a.o.takeRecords ? a.o.takeRecords() : [];
    },
    ir = function (a) {
      if (!a.j) return !1;
      var b = a.j,
        c = a.l.h.l,
        d = Q().h.h;
      a.o = new c.IntersectionObserver(
        zn(d, function (e) {
          return kr(a, e);
        }),
        gr
      );
      d = zn(d, function () {
        a.o.unobserve(b);
        a.o.observe(b);
        kr(a, jr(a));
      });
      c.ResizeObserver
        ? ((a.C = new c.ResizeObserver(d)), a.C.observe(b))
        : c.MutationObserver &&
          ((a.B = new v.MutationObserver(d)),
          a.B.observe(b, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0,
          }));
      a.o.observe(b);
      kr(a, jr(a));
      return !0;
    },
    kr = function (a, b) {
      try {
        if (b.length) {
          a.K || (a.K = Xn());
          var c = lr(b),
            d = Ll(a.j, a.l.h.l),
            e = d.x,
            f = d.y;
          a.h = new I(
            Math.round(f),
            Math.round(e) + c.boundingClientRect.width,
            Math.round(f) + c.boundingClientRect.height,
            Math.round(e)
          );
          var g = oo(c.intersectionRect);
          a.A = ph(g, a.h.left - g.left, a.h.top - g.top);
        }
      } catch (h) {
        a.Xb(), Qn(299, h);
      }
    },
    lr = function (a) {
      return Fb(
        a,
        function (b, c) {
          return b.time > c.time ? b : c;
        },
        a[0]
      );
    };
  l = hr.prototype;
  l.Va = function () {
    var a = jr(this);
    0 < a.length && kr(this, a);
    nq.prototype.Va.call(this);
  };
  l.Uc = function () {};
  l.de = function () {
    return !1;
  };
  l.Pd = function () {};
  l.Wa = function () {
    var a = {};
    return Object.assign(
      this.l.Wa(),
      ((a.niot_obs = this.F), (a.niot_cbk = this.K), a)
    );
  };
  l.getName = function () {
    return 'nio';
  };
  var mr = function (a) {
    a = void 0 === a ? P : a;
    Ko.call(this, new Co(a, 2));
  };
  t(mr, Ko);
  mr.prototype.getName = function () {
    return 'nio';
  };
  mr.prototype.Jb = function () {
    return !yo().j && null != this.h.h.l.IntersectionObserver;
  };
  mr.prototype.Yb = function (a, b, c) {
    return new hr(a, this.h, b, c);
  };
  var or = function () {
    var a = nr();
    Co.call(this, P.top, a, 'geo');
  };
  t(or, Co);
  or.prototype.aa = function () {
    return yo().h;
  };
  or.prototype.H = function () {
    var a = nr();
    this.F !== a &&
      (this.h != this && a > this.h.F && ((this.h = this), Do(this)),
      (this.F = a));
    return 2 == a;
  };
  var nr = function () {
    Q();
    var a = yo();
    return a.l || a.j ? 0 : 2;
  };
  var pr = function () {};
  var qr = function () {
      this.done = !1;
      this.h = {
        Ze: 0,
        Nd: 0,
        Ai: 0,
        Vd: 0,
        dd: -1,
        jf: 0,
        hf: 0,
        kf: 0,
        cg: 0,
      };
      this.A = null;
      this.B = !1;
      this.l = null;
      this.C = 0;
      this.j = new Ao(this);
    },
    tr = function () {
      var a = rr;
      a.B ||
        ((a.B = !0),
        sr(a, function () {
          return a.o.apply(a, ia(Ha.apply(0, arguments)));
        }),
        a.o());
    };
  qr.prototype.sample = function () {
    ur(this, Yq(), !1);
  };
  var vr = function () {
      K(pr);
      var a = K(cr);
      null != a.h && a.h.h ? Go(a.h.h) : uo(yo());
    },
    ur = function (a, b, c) {
      if (!a.done && (a.j.cancel(), 0 != b.length)) {
        a.l = null;
        try {
          vr();
          var d = Xn();
          Q().A = d;
          if (null != K(cr).h)
            for (var e = 0; e < b.length; e++) Gp(b[e], d, c);
          for (d = 0; d < b.length; d++) Hp(b[d]);
          ++a.h.Vd;
        } finally {
          c
            ? Bb(b, function (f) {
                f.qa.ba = 0;
              })
            : Bo(a.j);
        }
      }
    },
    sr = function (a, b) {
      if (!a.A) {
        b = Pn(142, b);
        tn();
        var c = Lh(vm);
        c && Se(vm, c, b, { capture: !1 }) && (a.A = b);
      }
    };
  qr.prototype.o = function () {
    var a = zo(),
      b = Xn();
    a
      ? (Wn ||
          ((Sn = b),
          Bb(Xq.h, function (c) {
            var d = c.pa();
            d.U = hq(d, b, 1 != c.la);
          })),
        (Wn = !0))
      : ((this.C = wr(this, b)),
        (Wn = !1),
        (Un = b),
        Bb(Xq.h, function (c) {
          c.Nb && (c.pa().I = b);
        }));
    ur(this, Yq(), !a);
  };
  var xr = function () {
      var a = K(cr);
      if (null != a.h) {
        var b = a.h;
        Bb(Yq(), function (c) {
          return Ep(c, b);
        });
      }
    },
    wr = function (a, b) {
      a = a.C;
      Wn && (a += b - Sn);
      return a;
    },
    yr = function (a) {
      a =
        void 0 === a
          ? function () {
              return {};
            }
          : a;
      Ln.xd('av-js');
      Hn.h = 0.01;
      Nn([
        function (b) {
          var c = Q(),
            d = {};
          d = ((d.bin = c.j), (d.type = 'error'), d);
          c = Rm(c.R);
          if (!rr.l) {
            var e = rr,
              f = P.document,
              g = 0 <= Tn ? Xn() - Tn : -1,
              h = Xn();
            -1 == e.h.dd && (g = h);
            var k = yo(),
              n = Q(),
              m = Rm(n.R),
              x = Yq();
            try {
              if (0 < x.length) {
                var u = k.h;
                u && (m.bs = [u.getWidth(), u.getHeight()]);
                var y = k.o;
                y && (m.ps = [y.width, y.height]);
                P.screen && (m.scs = [P.screen.width, P.screen.height]);
              } else
                (m.url = encodeURIComponent(P.location.href.substring(0, 512))),
                  f.referrer &&
                    (m.referrer = encodeURIComponent(
                      f.referrer.substring(0, 512)
                    ));
              m.tt = g;
              m.pt = Tn;
              m.bin = n.j;
              void 0 !== P.google_osd_load_pub_page_exp &&
                (m.olpp = P.google_osd_load_pub_page_exp);
              m.deb = [
                1,
                e.h.Ze,
                e.h.Nd,
                e.h.Vd,
                e.h.dd,
                0,
                e.j.j,
                e.h.jf,
                e.h.hf,
                e.h.kf,
                e.h.cg,
                -1,
              ].join(';');
              m.tvt = wr(e, h);
              k.j && (m.inapp = 1);
              if (null !== P && P != P.top) {
                0 < x.length &&
                  (m.iframe_loc = encodeURIComponent(
                    P.location.href.substring(0, 512)
                  ));
                var A = k.I;
                m.is = [A.getWidth(), A.getHeight()];
              }
            } catch (da) {
              m.error = 1;
            }
            rr.l = m;
          }
          y = rr.l;
          u = {};
          for (var F in y) u[F] = y[F];
          F = Q().h;
          1 == Qm(F.l, 'prf')
            ? ((y = new xn()),
              (A = F.h),
              (e = 0),
              -1 < A.h && (e = A.l.h.h() - A.h),
              (y = hd(y, 1, Zc(A.o + e), 0)),
              (A = F.h),
              (y = hd(y, 5, -1 < A.h ? A.j + 1 : A.j, 0)),
              (y = hd(y, 2, F.j.h.o(), 0)),
              (y = hd(y, 3, F.j.h.l(), 0)),
              (F = hd(y, 4, F.j.h.j(), 0)),
              (y = {}),
              (F = ((y.pf = Ac(F.o())), y)))
            : (F = {});
          Kf(u, F);
          Kf(b, d, c, u, a());
          if ((d = Vo())) (c = {}), Kf(b, ((c.v = encodeURIComponent(d)), c));
        },
      ]);
    },
    rr = K(qr);
  var zr = null,
    Ar = '',
    Br = !1,
    Cr = function () {
      var a = zr || P;
      if (!a) return '';
      var b = [];
      if (!a.location || !a.location.href) return '';
      b.push('url=' + encodeURIComponent(a.location.href.substring(0, 512)));
      a.document &&
        a.document.referrer &&
        b.push(
          'referrer=' +
            encodeURIComponent(a.document.referrer.substring(0, 512))
        );
      return b.join('&');
    };
  function Dr() {
    var a =
        'av.default_js_unreleased_RCxx'.match(/_(\d{8})_RC\d+$/) ||
        'av.default_js_unreleased_RCxx'.match(/_(\d{8})_\d+_\d+$/) ||
        'av.default_js_unreleased_RCxx'.match(/_(\d{8})_\d+\.\d+$/) ||
        'av.default_js_unreleased_RCxx'.match(/_(\d{8})_\d+_RC\d+$/),
      b;
    if (2 == (null == (b = a) ? void 0 : b.length)) return a[1];
    a = 'av.default_js_unreleased_RCxx'.match(
      /.*_(\d{2})\.(\d{4})\.\d+_RC\d+$/
    );
    var c;
    return 3 == (null == (c = a) ? void 0 : c.length)
      ? '20' + a[1] + a[2]
      : null;
  }
  var Er = function () {
      return 'ima_html5_sdk'.includes('ima_html5_sdk')
        ? { Da: 'ima', Ea: null }
        : 'ima_html5_sdk'.includes('ima_native_sdk')
        ? { Da: 'nima', Ea: null }
        : 'ima_html5_sdk'.includes('admob-native-video-javascript')
        ? { Da: 'an', Ea: null }
        : 'av.default_js_unreleased_RCxx'.includes('cast_js_sdk')
        ? { Da: 'cast', Ea: Dr() }
        : 'av.default_js_unreleased_RCxx'.includes('youtube.player.web')
        ? { Da: 'yw', Ea: Dr() }
        : 'av.default_js_unreleased_RCxx'.includes('outstream_web_client')
        ? { Da: 'out', Ea: Dr() }
        : 'av.default_js_unreleased_RCxx'.includes('drx_rewarded_web')
        ? { Da: 'r', Ea: Dr() }
        : 'av.default_js_unreleased_RCxx'.includes('gam_native_web_video')
        ? { Da: 'n', Ea: Dr() }
        : 'av.default_js_unreleased_RCxx'.includes('admob_interstitial_video')
        ? { Da: 'int', Ea: Dr() }
        : { Da: 'j', Ea: null };
    },
    Fr = Er().Da,
    Gr = Er().Ea;
  var Ir = function (a, b) {
      var c = { sv: '948' };
      null !== Gr && (c.v = Gr);
      c.cb = Fr;
      c.nas = Xq.h.length;
      c.msg = a;
      void 0 !== b && (a = Hr(b)) && (c.e = fo[a]);
      return c;
    },
    Jr = function (a) {
      return 0 == a.lastIndexOf('custom_metric_viewable', 0);
    },
    Hr = function (a) {
      var b = Jr(a) ? 'custom_metric_viewable' : a.toLowerCase();
      return Ef(function (c) {
        return c == b;
      });
    };
  var Kr = { Ig: 'visible', rg: 'audible', Rh: 'time', Th: 'timetype' },
    Lr = {
      visible: function (a) {
        return /^(100|[0-9]{1,2})$/.test(a);
      },
      audible: function (a) {
        return '0' == a || '1' == a;
      },
      timetype: function (a) {
        return 'mtos' == a || 'tos' == a;
      },
      time: function (a) {
        return /^(100|[0-9]{1,2})%$/.test(a) || /^([0-9])+ms$/.test(a);
      },
    },
    Mr = function () {
      this.h = void 0;
      this.j = !1;
      this.l = 0;
      this.o = -1;
      this.A = 'tos';
    },
    Nr = function (a) {
      try {
        var b = a.split(',');
        return b.length > Af(Kr).length
          ? null
          : Fb(
              b,
              function (c, d) {
                d = d.toLowerCase().split('=');
                if (2 != d.length || void 0 === Lr[d[0]] || !Lr[d[0]](d[1]))
                  throw Error('Entry (' + d[0] + ', ' + d[1] + ') is invalid.');
                c[d[0]] = d[1];
                return c;
              },
              {}
            );
      } catch (c) {
        return null;
      }
    },
    Or = function (a, b) {
      if (void 0 == a.h) return 0;
      switch (a.A) {
        case 'mtos':
          return a.j ? hp(b.h, a.h) : hp(b.j, a.h);
        case 'tos':
          return a.j ? fp(b.h, a.h) : fp(b.j, a.h);
      }
      return 0;
    };
  var Pr = function (a, b, c, d) {
    jq.call(this, b, d);
    this.C = a;
    this.I = c;
  };
  t(Pr, jq);
  Pr.prototype.getId = function () {
    return this.C;
  };
  Pr.prototype.B = function () {
    return !0;
  };
  Pr.prototype.h = function (a) {
    var b = a.pa(),
      c = a.getDuration();
    return Gb(this.I, function (d) {
      if (void 0 != d.h) var e = Or(d, b);
      else
        b: {
          switch (d.A) {
            case 'mtos':
              e = d.j ? b.A.l : b.l.h;
              break b;
            case 'tos':
              e = d.j ? b.A.h : b.l.h;
              break b;
          }
          e = 0;
        }
      0 == e
        ? (d = !1)
        : ((d = -1 != d.l ? d.l : void 0 !== c && 0 < c ? d.o * c : -1),
          (d = -1 != d && e >= d));
      return d;
    });
  };
  var Qr = function () {};
  t(Qr, Zp);
  Qr.prototype.h = function (a) {
    var b = new Yp();
    b.h = $p(a, Vp);
    b.j = $p(a, Xp);
    return b;
  };
  var Rr = function (a) {
    jq.call(this, 'fully_viewable_audible_half_duration_impression', a);
  };
  t(Rr, jq);
  Rr.prototype.h = function (a) {
    return Bq(a);
  };
  var Sr = function (a) {
    this.h = a;
  };
  t(Sr, lq);
  var Tr = function (a, b) {
    jq.call(this, a, b);
  };
  t(Tr, jq);
  Tr.prototype.h = function (a) {
    return a.pa().Oa();
  };
  var Ur = function (a) {
    kq.call(this, 'measurable_impression', a);
  };
  t(Ur, kq);
  Ur.prototype.h = function (a) {
    var b = Kb(this.C, Qm(Q().R, 'ovms'));
    return !a.Na && (0 != a.la || b);
  };
  var Vr = function () {
    Sr.apply(this, arguments);
  };
  t(Vr, Sr);
  Vr.prototype.j = function () {
    return new Ur(this.h);
  };
  Vr.prototype.l = function () {
    return [new Tr('viewable_impression', this.h), new Rr(this.h)];
  };
  var Wr = function (a, b, c) {
    pq.call(this, a, b, c);
  };
  t(Wr, pq);
  Wr.prototype.o = function () {
    var a = Ma('ima.admob.getViewability'),
      b = Qm(this.R, 'queryid');
    'function' === typeof a && b && a(b);
  };
  Wr.prototype.getName = function () {
    return 'gsv';
  };
  var Xr = function (a) {
    a = void 0 === a ? P : a;
    Ko.call(this, new Co(a, 2));
  };
  t(Xr, Ko);
  Xr.prototype.getName = function () {
    return 'gsv';
  };
  Xr.prototype.Jb = function () {
    var a = yo();
    Q();
    return a.j && !1;
  };
  Xr.prototype.Yb = function (a, b, c) {
    return new Wr(this.h, b, c);
  };
  var Yr = function (a, b, c) {
    pq.call(this, a, b, c);
  };
  t(Yr, pq);
  Yr.prototype.o = function () {
    var a = this,
      b = Ma('ima.bridge.getNativeViewability'),
      c = Qm(this.R, 'queryid');
    'function' === typeof b &&
      c &&
      b(c, function (d) {
        Gf(d) && a.B++;
        var e = d.opt_nativeViewVisibleBounds || {},
          f = d.opt_nativeViewHidden;
        a.h = po(d.opt_nativeViewBounds || {});
        var g = a.l.o;
        g.h = f ? nh(oq) : po(e);
        a.timestamp = d.opt_nativeTime || -1;
        yo().h = g.h;
        d = d.opt_nativeVolume;
        void 0 !== d && (g.volume = d);
      });
  };
  Yr.prototype.getName = function () {
    return 'nis';
  };
  var Zr = function (a) {
    a = void 0 === a ? P : a;
    Ko.call(this, new Co(a, 2));
  };
  t(Zr, Ko);
  Zr.prototype.getName = function () {
    return 'nis';
  };
  Zr.prototype.Jb = function () {
    var a = yo();
    Q();
    return a.j && !1;
  };
  Zr.prototype.Yb = function (a, b, c) {
    return new Yr(this.h, b, c);
  };
  var $r = function () {
    Co.call(this, P, 2, 'mraid');
    this.ca = 0;
    this.L = this.M = !1;
    this.K = null;
    this.j = go(this.l);
    this.o.h = new I(0, 0, 0, 0);
    this.ia = !1;
  };
  t($r, Co);
  $r.prototype.H = function () {
    return null != this.j.za;
  };
  $r.prototype.Z = function () {
    var a = {};
    this.ca && (a.mraid = this.ca);
    this.M && (a.mlc = 1);
    a.mtop = this.j.bg;
    this.K && (a.mse = this.K);
    this.ia && (a.msc = 1);
    a.mcp = this.j.kc;
    return a;
  };
  $r.prototype.C = function (a) {
    var b = Ha.apply(1, arguments);
    try {
      return this.j.za[a].apply(this.j.za, b);
    } catch (c) {
      Qn(538, c, 0.01, function (d) {
        d.method = a;
      });
    }
  };
  var as = function (a, b, c) {
    a.C('addEventListener', b, c);
  };
  $r.prototype.initialize = function () {
    var a = this;
    if (this.B) return !this.Pb();
    this.B = !0;
    if (2 === this.j.kc) return (this.K = 'ng'), Eo(this, 'w'), !1;
    if (1 === this.j.kc) return (this.K = 'mm'), Eo(this, 'w'), !1;
    yo().K = !0;
    this.l.document.readyState && 'complete' == this.l.document.readyState
      ? bs(this)
      : tp(
          this.l,
          'load',
          function () {
            tn().setTimeout(
              Pn(292, function () {
                return bs(a);
              }),
              100
            );
          },
          292
        );
    return !0;
  };
  var bs = function (a) {
      Q().o = !!a.C('isViewable');
      as(a, 'viewableChange', cs);
      'loading' === a.C('getState') ? as(a, 'ready', ds) : es(a);
    },
    es = function (a) {
      'string' === typeof a.j.za.AFMA_LIDAR
        ? ((a.M = !0), fs(a))
        : ((a.j.kc = 3), (a.K = 'nc'), Eo(a, 'w'));
    },
    fs = function (a) {
      a.L = !1;
      var b = 1 == Qm(Q().R, 'rmmt'),
        c = !!a.C('isViewable');
      (b ? !c : 1) &&
        tn().setTimeout(
          Pn(524, function () {
            a.L || (gs(a), Qn(540, Error()), (a.K = 'mt'), Eo(a, 'w'));
          }),
          500
        );
      hs(a);
      as(a, a.j.za.AFMA_LIDAR, is);
    },
    hs = function (a) {
      var b = 1 == Qm(Q().R, 'sneio'),
        c = void 0 !== a.j.za.AFMA_LIDAR_EXP_1,
        d = void 0 !== a.j.za.AFMA_LIDAR_EXP_2;
      (b = b && d) && (a.j.za.AFMA_LIDAR_EXP_2 = !0);
      c && (a.j.za.AFMA_LIDAR_EXP_1 = !b);
    },
    gs = function (a) {
      a.C('removeEventListener', a.j.za.AFMA_LIDAR, is);
      a.M = !1;
    };
  $r.prototype.U = function () {
    var a = yo(),
      b = js(this, 'getMaxSize');
    a.h = new I(0, b.width, b.height, 0);
  };
  $r.prototype.V = function () {
    yo().A = js(this, 'getScreenSize');
  };
  var js = function (a, b) {
    if ('loading' === a.C('getState')) return new G(-1, -1);
    b = a.C(b);
    if (!b) return new G(-1, -1);
    a = parseInt(b.width, 10);
    b = parseInt(b.height, 10);
    return isNaN(a) || isNaN(b) ? new G(-1, -1) : new G(a, b);
  };
  $r.prototype.W = function () {
    gs(this);
    Co.prototype.W.call(this);
  };
  var ds = function () {
      try {
        var a = K($r);
        a.C('removeEventListener', 'ready', ds);
        es(a);
      } catch (b) {
        Qn(541, b);
      }
    },
    is = function (a, b) {
      try {
        var c = K($r);
        c.L = !0;
        var d = a
          ? new I(a.y, a.x + a.width, a.y + a.height, a.x)
          : new I(0, 0, 0, 0);
        var e = Xn(),
          f = zo();
        var g = new Zn(e, f, c);
        g.h = d;
        g.volume = b;
        c.Xa(g);
      } catch (h) {
        Qn(542, h);
      }
    },
    cs = function (a) {
      var b = Q(),
        c = K($r);
      a && !b.o && ((b.o = !0), (c.ia = !0), c.K && Eo(c, 'w', !0));
    };
  var ls = function () {
    this.l = this.B = !1;
    this.h = this.j = null;
    var a = {};
    this.M =
      ((a.start = this.Bf),
      (a.firstquartile = this.wf),
      (a.midpoint = this.yf),
      (a.thirdquartile = this.Cf),
      (a.complete = this.tf),
      (a.error = this.uf),
      (a.pause = this.pd),
      (a.resume = this.ne),
      (a.skip = this.Af),
      (a.viewable_impression = this.Fa),
      (a.mute = this.Eb),
      (a.unmute = this.Eb),
      (a.fullscreen = this.xf),
      (a.exitfullscreen = this.vf),
      (a.fully_viewable_audible_half_duration_impression = this.Fa),
      (a.measurable_impression = this.Fa),
      (a.abandon = this.pd),
      (a.engagedview = this.Fa),
      (a.impression = this.Fa),
      (a.creativeview = this.Fa),
      (a.progress = this.Eb),
      (a.custom_metric_viewable = this.Fa),
      (a.bufferstart = this.pd),
      (a.bufferfinish = this.ne),
      (a.audio_measurable = this.Fa),
      (a.audio_audible = this.Fa),
      a);
    a = {};
    this.U =
      ((a.overlay_resize = this.zf),
      (a.abandon = this.cd),
      (a.close = this.cd),
      (a.collapse = this.cd),
      (a.overlay_unmeasurable_impression = function (b) {
        return Iq(b, 'overlay_unmeasurable_impression', zo());
      }),
      (a.overlay_viewable_immediate_impression = function (b) {
        return Iq(b, 'overlay_viewable_immediate_impression', zo());
      }),
      (a.overlay_unviewable_impression = function (b) {
        return Iq(b, 'overlay_unviewable_impression', zo());
      }),
      (a.overlay_viewable_end_of_session_impression = function (b) {
        return Iq(b, 'overlay_viewable_end_of_session_impression', zo());
      }),
      a);
    Q().j = 3;
    ks(this);
  };
  ls.prototype.A = function (a) {
    Dp(a, !1);
    $q(a);
  };
  ls.prototype.K = function () {};
  var ms = function (a, b, c, d) {
    a = a.C(null, d, !0, b);
    a.A = c;
    ar([a]);
    return a;
  };
  ls.prototype.C = function (a, b, c, d) {
    var e = this;
    a = new tq(P, a, c ? b : -1, 7, this.Wc(), this.Td());
    a.ma = d;
    Om(a.R);
    Pm(a.R, 'queryid', a.ma);
    a.rd('');
    Ip(
      a,
      function () {
        return e.L.apply(e, ia(Ha.apply(0, arguments)));
      },
      function () {
        return e.O.apply(e, ia(Ha.apply(0, arguments)));
      }
    );
    (d = K(cr).h) && Ep(a, d);
    a.ta.ab && K(pr);
    return a;
  };
  var ns = function (a, b, c) {
      wm(b);
      var d = a.h;
      Bb(b, function (e) {
        var f = Eb(e.j, function (g) {
          var h = Nr(g);
          if (null == h) g = null;
          else if (
            ((g = new Mr()),
            null != h.visible && (g.h = h.visible / 100),
            null != h.audible && (g.j = 1 == h.audible),
            null != h.time)
          ) {
            var k = 'mtos' == h.timetype ? 'mtos' : 'tos',
              n = eb(h.time, '%') ? '%' : 'ms';
            h = parseInt(h.time, 10);
            '%' == n && (h /= 100);
            'ms' == n ? ((g.l = h), (g.o = -1)) : ((g.l = -1), (g.o = h));
            g.A = void 0 === k ? 'tos' : k;
          }
          return g;
        });
        Gb(f, function (g) {
          return null == g;
        }) || Aq(c, new Pr(e.id, e.h, f, d));
      });
    },
    os = function () {
      var a = [],
        b = Q();
      a.push(K(or));
      Qm(b.R, 'mvp_lv') && a.push(K($r));
      b = [new Xr(), new Zr()];
      b.push(new fr(a));
      b.push(new mr(P));
      return b;
    },
    qs = function (a) {
      if (!a.B) {
        a.B = !0;
        try {
          var b = Xn(),
            c = Q(),
            d = yo();
          Tn = b;
          c.l = 79463069;
          'o' !== a.j && (zr = mh(P));
          if (un()) {
            rr.h.Nd = 0;
            rr.h.dd = Xn() - b;
            var e = os(),
              f = K(cr);
            f.j = e;
            dr(f, function () {
              ps();
            })
              ? rr.done || (xr(), Fo(f.h.h, a), tr())
              : d.l
              ? ps()
              : tr();
          } else Br = !0;
        } catch (g) {
          throw (Xq.reset(), g);
        }
      }
    },
    rs = function (a) {
      rr.j.cancel();
      Ar = a;
      rr.done = !0;
    },
    ts = function (a) {
      if (a.j) return a.j;
      var b = K(cr).h;
      if (b)
        switch (b.getName()) {
          case 'nis':
            a.j = 'n';
            break;
          case 'gsv':
            a.j = 'm';
        }
      a.j || (a.j = 'h');
      return a.j;
    },
    us = function (a, b, c) {
      if (null == a.h) return (b.Fb |= 4), !1;
      a = a.h.report(c, b);
      b.Fb |= a;
      return 0 == a;
    };
  ls.prototype.Ab = function (a) {
    switch (a.Ma()) {
      case 0:
        if ((a = K(cr).h)) (a = a.h), Lb(a.A, this), a.G && this.Ha() && Ho(a);
        ps();
        break;
      case 2:
        tr();
    }
  };
  ls.prototype.Xa = function () {};
  ls.prototype.Ha = function () {
    return !1;
  };
  var ps = function () {
    var a = [new mr(P)],
      b = K(cr);
    b.j = a;
    dr(b, function () {
      rs('i');
    })
      ? rr.done || (xr(), tr())
      : rs('i');
  };
  ls.prototype.O = function (a, b) {
    a.Na = !0;
    switch (a.va()) {
      case 1:
        vs(a, b);
        break;
      case 2:
        this.ud(a);
    }
    this.wd(a);
  };
  var vs = function (a, b) {
    if (!a.ua) {
      var c = Iq(a, 'start', zo());
      c = a.qd.h(c).h;
      var d = { id: 'lidarv' };
      d.r = b;
      d.sv = '948';
      null !== Gr && (d.v = Gr);
      Og(c, function (e, f) {
        return (d[e] = 'mtos' == e || 'tos' == e ? f : encodeURIComponent(f));
      });
      b = Cr();
      Og(b, function (e, f) {
        return (d[e] = encodeURIComponent(f));
      });
      b =
        '//pagead2.googlesyndication.com/pagead/gen_204?' + So(Qo(new Oo(), d));
      Wo(b);
      a.ua = !0;
    }
  };
  l = ls.prototype;
  l.Bf = function (a) {
    var b = a.C(a);
    b && ((b = b.volume), (a.ia = qo(b) && 0 < b));
    Fq(a, 0);
    return Iq(a, 'start', zo());
  };
  l.Eb = function (a, b, c) {
    ur(rr, [a], !zo());
    return this.Fa(a, b, c);
  };
  l.Fa = function (a, b, c) {
    return Iq(a, c, zo());
  };
  l.wf = function (a) {
    return ws(a, 'firstquartile', 1);
  };
  l.yf = function (a) {
    a.aa = !0;
    return ws(a, 'midpoint', 2);
  };
  l.Cf = function (a) {
    return ws(a, 'thirdquartile', 3);
  };
  l.tf = function (a) {
    var b = ws(a, 'complete', 4);
    uq(a);
    return b;
  };
  l.uf = function (a) {
    a.la = 3;
    return Iq(a, 'error', zo());
  };
  var ws = function (a, b, c) {
    ur(rr, [a], !zo());
    Fq(a, c);
    4 != c && Eq(a.L, c, a.sc);
    return Iq(a, b, zo());
  };
  l = ls.prototype;
  l.ne = function (a, b, c) {
    b = zo();
    2 != a.la || b || (a.pa().I = Xn());
    ur(rr, [a], !b);
    2 == a.la && (a.la = 1);
    return Iq(a, c, b);
  };
  l.Af = function (a, b) {
    b = this.Eb(a, b || {}, 'skip');
    uq(a);
    return b;
  };
  l.xf = function (a, b) {
    Dp(a, !0);
    return this.Eb(a, b || {}, 'fullscreen');
  };
  l.vf = function (a, b) {
    Dp(a, !1);
    return this.Eb(a, b || {}, 'exitfullscreen');
  };
  l.pd = function (a, b, c) {
    b = a.pa();
    b.U = hq(b, Xn(), 1 != a.la);
    ur(rr, [a], !zo());
    1 == a.la && (a.la = 2);
    return Iq(a, c, zo());
  };
  l.zf = function (a) {
    ur(rr, [a], !zo());
    return a.j();
  };
  l.cd = function (a) {
    ur(rr, [a], !zo());
    this.ke(a);
    uq(a);
    return a.j();
  };
  var ks = function (a) {
      yr(function () {
        var b = xs();
        null != a.j && (b.sdk = a.j);
        var c = K(cr);
        null != c.h && (b.avms = c.h.getName());
        return b;
      });
    },
    ys = function (a, b, c, d) {
      var e = Vq(Xq, c);
      null !== e && e.ma !== b && (a.A(e), (e = null));
      e ||
        ((b = a.C(c, Xn(), !1, b)),
        0 == Xq.j.length && (Q().l = 79463069),
        br([b]),
        (e = b),
        (e.A = ts(a)),
        d && (e.playerId = d));
      return e;
    };
  ls.prototype.L = function () {};
  var As = function (a, b) {
    b.F = 0;
    for (var c in ao) null == a[c] && (b.F |= ao[c]);
    zs(a, 'currentTime');
    zs(a, 'duration');
  };
  l = ls.prototype;
  l.ud = function () {};
  l.ke = function () {};
  l.Id = function () {};
  l.wd = function () {};
  l.Xc = function () {};
  l.Td = function () {
    this.h || (this.h = this.Xc());
    return null == this.h || this.l ? new mq() : new Vr(this.h);
  };
  l.Wc = function () {
    return new Qr();
  };
  var zs = function (a, b) {
      var c = a[b];
      void 0 !== c && 0 < c && (a[b] = Math.floor(1e3 * c));
    },
    xs = function () {
      var a = yo(),
        b = {},
        c = {},
        d = {};
      return Object.assign(
        {},
        ((b.sv = '948'), b),
        null !== Gr && ((c.v = Gr), c),
        ((d['if'] = a.l ? '1' : '0'), (d.nas = String(Xq.h.length)), d)
      );
    };
  var Bs = function (a) {
    jq.call(this, 'audio_audible', a);
  };
  t(Bs, jq);
  Bs.prototype.h = function (a) {
    return 4 == a.qc();
  };
  var Cs = function (a) {
    kq.call(this, 'audio_measurable', a);
  };
  t(Cs, kq);
  Cs.prototype.h = function (a) {
    a = a.qc();
    return 3 == a || 4 == a;
  };
  var Ds = function () {
    Sr.apply(this, arguments);
  };
  t(Ds, Sr);
  Ds.prototype.j = function () {
    return new Cs(this.h);
  };
  Ds.prototype.l = function () {
    return [new Bs(this.h)];
  };
  var Es = function () {};
  t(Es, Zp);
  Es.prototype.h = function (a) {
    a &&
      (28 === a.e && (a = Object.assign({}, a, { avas: 3 })),
      4 === a.vs || 5 === a.vs) &&
      (a = Object.assign({}, a, { vs: 3 }));
    var b = new Yp();
    b.h = $p(a, Wp);
    b.j = $p(a, Xp);
    return b;
  };
  var Fs = function (a) {
    this.j = a;
  };
  Fs.prototype.report = function (a, b) {
    var c = this.h(b);
    if ('function' === typeof c) {
      var d = {};
      var e = {};
      d = Object.assign(
        {},
        null !== Gr && ((d.v = Gr), d),
        ((e.sv = '948'), (e.cb = Fr), (e.e = Gs(a)), e)
      );
      e = Iq(b, a, zo());
      Kf(d, e);
      b.se[a] = e;
      d = 2 == b.va() ? Uo(d).join('&') : b.qd.h(d).h;
      try {
        return c(b.ma, d, a), 0;
      } catch (f) {
        return 2;
      }
    } else return 1;
  };
  var Gs = function (a) {
    var b = Jr(a) ? 'custom_metric_viewable' : a;
    a = Ef(function (c) {
      return c == b;
    });
    return fo[a];
  };
  Fs.prototype.h = function () {
    return Ma(this.j);
  };
  var Hs = function (a, b) {
    this.j = a;
    this.l = b;
  };
  t(Hs, Fs);
  Hs.prototype.h = function (a) {
    if (!a.playerId) return Fs.prototype.h.call(this, a);
    if (this.l[a.playerId]) return function () {};
    Qn(393, Error());
    return null;
  };
  var Is = function () {
    ls.call(this);
    this.G = void 0;
    this.H = null;
    this.F = !1;
    this.o = {};
    this.J = 0;
    this.I = 'ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED';
  };
  t(Is, ls);
  Is.prototype.K = function (a, b) {
    var c = this,
      d = K(cr);
    if (null != d.h)
      switch (d.h.getName()) {
        case 'nis':
          var e = Js(this, a, b);
          break;
        case 'gsv':
          e = Ks(this, a, b);
          break;
        case 'exc':
          e = Ls(this, a);
      }
    e ||
      (b.opt_overlayAdElement
        ? (e = void 0)
        : b.opt_adElement && (e = ys(this, a, b.opt_adElement, b.opt_osdId)));
    e &&
      1 == e.va() &&
      (e.C == Me &&
        (e.C = function (f) {
          return c.Id(f);
        }),
      Ms(this, e, b));
    return e;
  };
  var Ms = function (a, b, c) {
    c = c.opt_configurable_tracking_events;
    null != a.h && Array.isArray(c) && ns(a, c, b);
  };
  Is.prototype.Id = function (a) {
    a.j = 0;
    a.M = 0;
    if ('h' == a.A || 'n' == a.A) {
      var b;
      Q();
      if (a.playerId && Ns(this)) {
        var c = this.o[a.playerId];
        c
          ? (b = function (e) {
              return Os(c, e);
            })
          : null !== c && Qn(379, Error());
      } else b = Ma('ima.common.getVideoMetadata');
      if ('function' === typeof b)
        try {
          var d = b(a.ma);
        } catch (e) {
          a.j |= 4;
        }
      else a.j |= 2;
    } else if ('b' == a.A)
      if (((b = Ma('ytads.bulleit.getVideoMetadata')), 'function' === typeof b))
        try {
          d = b(a.ma);
        } catch (e) {
          a.j |= 4;
        }
      else a.j |= 2;
    else if ('ml' == a.A)
      if (((b = Ma('ima.common.getVideoMetadata')), 'function' === typeof b))
        try {
          d = b(a.ma);
        } catch (e) {
          a.j |= 4;
        }
      else a.j |= 2;
    else a.j |= 1;
    a.j ||
      (void 0 === d
        ? (a.j |= 8)
        : null === d
        ? (a.j |= 16)
        : Gf(d)
        ? (a.j |= 32)
        : null != d.errorCode && ((a.M = d.errorCode), (a.j |= 64)));
    null == d && (d = {});
    As(d, a);
    qo(d.volume) && qo(this.G) && (d.volume *= this.G);
    return d;
  };
  var Ks = function (a, b, c) {
      var d = Uq(Xq, b);
      d ||
        ((d = c.opt_nativeTime || -1),
        (d = ms(a, b, ts(a), d)),
        c.opt_osdId && (d.playerId = c.opt_osdId));
      return d;
    },
    Js = function (a, b, c) {
      var d = Uq(Xq, b);
      d || (d = ms(a, b, 'n', c.opt_nativeTime || -1));
      return d;
    },
    Ls = function (a, b) {
      var c = Uq(Xq, b);
      c || (c = ms(a, b, 'h', -1));
      return c;
    };
  Is.prototype.Xc = function () {
    if (Ns(this))
      return new Hs('ima.common.triggerExternalActivityEvent', this.o);
    var a = Ps(this);
    return null != a ? new Fs(a) : null;
  };
  var Ps = function (a) {
    Q();
    switch (ts(a)) {
      case 'b':
        return 'ytads.bulleit.triggerExternalActivityEvent';
      case 'n':
        return 'ima.bridge.triggerExternalActivityEvent';
      case 'h':
      case 'm':
      case 'ml':
        return 'ima.common.triggerExternalActivityEvent';
    }
    return null;
  };
  Is.prototype.ud = function (a) {
    !a.h &&
      a.Na &&
      us(this, a, 'overlay_unmeasurable_impression') &&
      (a.h = !0);
  };
  Is.prototype.ke = function (a) {
    a.oe &&
      (a.Oa()
        ? us(this, a, 'overlay_viewable_end_of_session_impression')
        : us(this, a, 'overlay_unviewable_impression'),
      (a.oe = !1));
  };
  var Qs = function (a, b, c, d) {
    c = void 0 === c ? {} : c;
    var e = {};
    Kf(e, { opt_adElement: void 0, opt_fullscreen: void 0 }, c);
    var f = a.K(b, c);
    c = f ? f.qd : a.Wc();
    if (e.opt_bounds) return c.h(Ir('ol', d));
    if (void 0 !== d)
      if (void 0 !== Hr(d))
        if (Br) a = Ir('ue', d);
        else if ((qs(a), 'i' == Ar)) (a = Ir('i', d)), (a['if'] = 0);
        else if ((b = a.K(b, e))) {
          b: {
            'i' == Ar && ((b.Na = !0), a.wd(b));
            f = e.opt_fullscreen;
            void 0 !== f && Dp(b, !!f);
            var g;
            if ((f = !yo().j && !to())) tn(), (f = 0 === Kh(vm));
            if ((g = f)) {
              switch (b.va()) {
                case 1:
                  vs(b, 'pv');
                  break;
                case 2:
                  a.ud(b);
              }
              rs('pv');
            }
            f = d.toLowerCase();
            if ((g = !g))
              c: {
                if (Qm(Q().R, 'ssmol') && ((g = a.l), 'loaded' === f)) break c;
                g = Kb(bo, f);
              }
            if (g && 0 == b.la) {
              'i' != Ar && (rr.done = !1);
              g = void 0 !== e ? e.opt_nativeTime : void 0;
              Vn = g = 'number' === typeof g ? g : Xn();
              b.Nb = !0;
              var h = zo();
              b.la = 1;
              b.ka = {};
              b.ka.start = !1;
              b.ka.firstquartile = !1;
              b.ka.midpoint = !1;
              b.ka.thirdquartile = !1;
              b.ka.complete = !1;
              b.ka.resume = !1;
              b.ka.pause = !1;
              b.ka.skip = !1;
              b.ka.mute = !1;
              b.ka.unmute = !1;
              b.ka.viewable_impression = !1;
              b.ka.measurable_impression = !1;
              b.ka.fully_viewable_audible_half_duration_impression = !1;
              b.ka.fullscreen = !1;
              b.ka.exitfullscreen = !1;
              b.Yc = 0;
              h || (b.pa().I = g);
              ur(rr, [b], !h);
            }
            (g = b.pb[f]) && bq(b.ha, g);
            Qm(Q().R, 'fmd') || (Kb(co, f) && b.Qa && b.Qa.j(b, null));
            switch (b.va()) {
              case 1:
                var k = Jr(f) ? a.M.custom_metric_viewable : a.M[f];
                break;
              case 2:
                k = a.U[f];
            }
            if (
              k &&
              ((d = k.call(a, b, e, d)),
              Qm(Q().R, 'fmd') && Kb(co, f) && b.Qa && b.Qa.j(b, null),
              void 0 !== d)
            ) {
              e = Ir(void 0, f);
              Kf(e, d);
              d = e;
              break b;
            }
            d = void 0;
          }
          3 == b.la && a.A(b);
          a = d;
        } else a = Ir('nf', d);
      else a = void 0;
    else
      Br
        ? (a = Ir('ue'))
        : f
        ? ((a = Ir()), Kf(a, Hq(f, !0, !1, !1)))
        : (a = Ir('nf'));
    return 'string' === typeof a ? c.h() : c.h(a);
  };
  Is.prototype.L = function (a) {
    this.l && 1 == a.va() && Rs(this, a);
  };
  Is.prototype.wd = function (a) {
    this.l && 1 == a.va() && Rs(this, a);
  };
  var Rs = function (a, b) {
      var c;
      if (b.playerId && Ns(a)) {
        var d = a.o[b.playerId];
        d
          ? (c = function (f, g) {
              Ss(d, f, g);
            })
          : null !== d && Qn(379, Error());
      } else c = Ma('ima.common.triggerViewabilityMeasurementUpdate');
      if ('function' === typeof c) {
        var e = Cq(b);
        e.nativeVolume = a.G;
        c(b.ma, e);
      }
    },
    Ts = function (a, b, c) {
      a.o[b] = c;
    },
    Ns = function (a) {
      return (Q(), 'h' != ts(a) && 'm' != ts(a)) ? !1 : 0 != a.J;
    };
  Is.prototype.C = function (a, b, c, d) {
    if (Cn()) {
      var e = Qm(Q().R, 'mm'),
        f = {};
      (e = ((f[zm.ue] = 'ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO'),
      (f[zm.Ye] = 'ACTIVE_VIEW_TRAFFIC_TYPE_VIDEO'),
      f)[e]) &&
        e &&
        (this.I = e);
      'ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED' === this.I && Qn(1044, Error());
    }
    a = ls.prototype.C.call(this, a, b, c, d);
    this.F &&
      ((b = this.H),
      null == a.o && (a.o = new Lp()),
      (b.h[a.ma] = a.o),
      (a.o.A = Kq));
    return a;
  };
  Is.prototype.A = function (a) {
    a && 1 == a.va() && this.F && delete this.H.h[a.ma];
    return ls.prototype.A.call(this, a);
  };
  Is.prototype.Td = function () {
    this.h || (this.h = this.Xc());
    return null == this.h || this.l
      ? new mq()
      : 'ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO' === this.I
      ? new Ds(this.h)
      : new Vr(this.h);
  };
  Is.prototype.Wc = function () {
    return 'ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO' === this.I ? new Es() : new Qr();
  };
  var Us = function (a) {
      var b = {};
      return (b.viewability = a.h), (b.googleViewability = a.j), b;
    },
    Vs = function (a, b, c) {
      c = void 0 === c ? {} : c;
      a = Qs(K(Is), b, c, a);
      return Us(a);
    },
    Ws = Pn(193, Vs, void 0, xs);
  w('Goog_AdSense_Lidar_sendVastEvent', Ws);
  var Xs = Pn(194, function (a, b) {
    b = void 0 === b ? {} : b;
    a = Qs(K(Is), a, b);
    return Us(a);
  });
  w('Goog_AdSense_Lidar_getViewability', Xs);
  var Ys = Pn(195, function () {
    return vn();
  });
  w('Goog_AdSense_Lidar_getUrlSignalsArray', Ys);
  var Zs = Pn(196, function () {
    return JSON.stringify(vn());
  });
  w('Goog_AdSense_Lidar_getUrlSignalsList', Zs);
  var $s = function () {
      this.h = Math.random();
    },
    bt = function () {
      var a = at,
        b = window.google_srt;
      0 <= b && 1 >= b && (a.h = b);
    },
    ct = function (a, b, c, d, e) {
      if (((void 0 === d ? 0 : d) ? a.h : Math.random()) < (e || 0.01))
        try {
          if (c instanceof fn) var f = c;
          else
            (f = new fn()),
              dh(c, function (h, k) {
                var n = f,
                  m = n.o++;
                kn(n, m, gn(k, h));
              });
          var g = nn(f, 'https:', '/pagead/gen_204?id=' + b + '&');
          g && Ch(v, g);
        } catch (h) {}
    };
  var et = function () {
    var a = dt;
    this.B = at;
    this.A = 'jserror';
    this.l = !0;
    this.j = null;
    this.C = this.Pa;
    this.h = void 0 === a ? null : a;
    this.o = !1;
  };
  l = et.prototype;
  l.Ic = function (a) {
    this.j = a;
  };
  l.xd = function (a) {
    this.A = a;
  };
  l.yd = function (a) {
    this.l = a;
  };
  l.zd = function (a) {
    this.o = a;
  };
  l.nb = function (a, b, c) {
    try {
      if (this.h && this.h.l) {
        var d = this.h.start(a.toString(), 3);
        var e = b();
        this.h.end(d);
      } else e = b();
    } catch (h) {
      b = this.l;
      try {
        Wh(d), (b = this.C(a, new Fh(h, { message: ft(h) }), void 0, c));
      } catch (k) {
        this.Pa(217, k);
      }
      if (b) {
        var f, g;
        null == (f = window.console) || null == (g = f.error) || g.call(f, h);
      } else throw h;
    }
    return e;
  };
  l.td = function (a, b, c, d) {
    var e = this;
    return function () {
      var f = Ha.apply(0, arguments);
      return e.nb(
        a,
        function () {
          return b.apply(c, f);
        },
        d
      );
    };
  };
  l.Pa = function (a, b, c, d, e) {
    e = e || this.A;
    try {
      var f = new fn();
      ln(f, 1, 'context', a);
      Gh(b) || (b = new Fh(b, { message: ft(b) }));
      b.msg && ln(f, 2, 'msg', b.msg.substring(0, 512));
      var g = b.meta || {};
      if (this.j)
        try {
          this.j(g);
        } catch (k) {}
      if (d)
        try {
          d(g);
        } catch (k) {}
      kn(f, 3, [g]);
      var h = en();
      h.j && ln(f, 4, 'top', h.j.url || '');
      kn(f, 5, [{ url: h.h.url || '' }, { url: h.h.url ? Ng(h.h.url) : '' }]);
      ct(this.B, e, f, this.o, c);
    } catch (k) {
      try {
        ct(
          this.B,
          e,
          { context: 'ecmserr', rctx: a, msg: ft(k), url: h && h.h.url },
          this.o,
          c
        );
      } catch (n) {}
    }
    return this.l;
  };
  var ft = function (a) {
    var b = a.toString();
    a.name && -1 == b.indexOf(a.name) && (b += ': ' + a.name);
    a.message && -1 == b.indexOf(a.message) && (b += ': ' + a.message);
    if (a.stack) {
      a = a.stack;
      var c = b;
      try {
        -1 == a.indexOf(c) && (a = c + '\n' + a);
        for (var d; a != d; )
          (d = a),
            (a = a.replace(
              RegExp('((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2'),
              '$1'
            ));
        b = a.replace(RegExp('\n *', 'g'), '\n');
      } catch (e) {
        b = c;
      }
    }
    return b;
  };
  var gt = function () {};
  var at,
    ht,
    dt = new Vh(1, window);
  (function (a) {
    at = null != a ? a : new $s();
    'number' !== typeof window.google_srt &&
      (window.google_srt = Math.random());
    bt();
    ht = new et();
    ht.Ic(function () {});
    ht.zd(!0);
    'complete' == window.document.readyState
      ? window.google_measure_js_timing || dt.I()
      : dt.l &&
        Se(window, 'load', function () {
          window.google_measure_js_timing || dt.I();
        });
  })();
  var jt = function (a) {
    D.call(this, a, -1, it);
  };
  t(jt, D);
  var it = [3];
  var lt = function (a) {
    D.call(this, a, -1, kt);
  };
  t(lt, D);
  var mt = function (a, b) {
      return gd(a, 1, b);
    },
    nt = function (a, b) {
      return gd(a, 2, b);
    },
    ot = function (a, b) {
      return gd(a, 3, b);
    },
    pt = function (a, b) {
      gd(a, 4, b);
    },
    kt = [1, 2, 3, 4];
  var qt = function (a) {
    D.call(this, a);
  };
  t(qt, D);
  var tt = function (a) {
    D.call(this, a, -1, rt);
  };
  t(tt, D);
  tt.prototype.getVersion = function () {
    return rd(B(this, 1), 0);
  };
  var ut = function (a, b) {
      return hd(a, 1, b, 0);
    },
    vt = function (a, b) {
      return nd(a, 2, b);
    },
    wt = function (a, b) {
      return nd(a, 3, b);
    },
    xt = function (a, b) {
      return hd(a, 4, b, 0);
    },
    yt = function (a, b) {
      return hd(a, 5, b, 0);
    },
    zt = function (a, b) {
      return hd(a, 6, b, 0);
    },
    At = function (a, b) {
      return hd(a, 7, b, '');
    },
    Bt = function (a, b) {
      return hd(a, 8, b, 0);
    },
    Ct = function (a, b) {
      return hd(a, 9, b, 0);
    },
    Dt = function (a, b) {
      return hd(a, 10, b, !1);
    },
    Et = function (a, b) {
      return hd(a, 11, b, !1);
    },
    Ft = function (a, b) {
      return gd(a, 12, b);
    },
    Gt = function (a, b) {
      return gd(a, 13, b);
    },
    Ht = function (a, b) {
      return gd(a, 14, b);
    },
    It = function (a, b) {
      return hd(a, 15, b, !1);
    },
    Jt = function (a, b) {
      return hd(a, 16, b, '');
    },
    Kt = function (a, b) {
      return gd(a, 17, b);
    },
    Lt = function (a, b) {
      return gd(a, 18, b);
    },
    Mt = function (a, b) {
      return od(a, 19, b);
    },
    rt = [12, 13, 14, 17, 18, 19];
  var Nt = function (a) {
    D.call(this, a);
  };
  t(Nt, D);
  var Ot = 'a'.charCodeAt(),
    Pt = zf({
      hh: 0,
      gh: 1,
      bh: 2,
      Wg: 3,
      eh: 4,
      Xg: 5,
      fh: 6,
      Zg: 7,
      ah: 8,
      Vg: 9,
      Yg: 10,
    }),
    Qt = zf({ jh: 0, kh: 1, ih: 2 });
  var Rt = function (a) {
      if (/[^01]/.test(a))
        throw Error('Input bitstring ' + a + ' is malformed!');
      this.j = a;
      this.h = 0;
    },
    Tt = function (a) {
      a = St(a, 36);
      var b = new qt();
      b = hd(b, 1, Math.floor(a / 10), 0);
      return hd(b, 2, (a % 10) * 1e8, 0);
    },
    Ut = function (a) {
      return (
        String.fromCharCode(Ot + St(a, 6)) + String.fromCharCode(Ot + St(a, 6))
      );
    },
    Xt = function (a) {
      var b = St(a, 16);
      return !0 === !!St(a, 1)
        ? ((a = Vt(a)),
          a.forEach(function (c) {
            if (c > b)
              throw Error('ID ' + c + ' is past MaxVendorId ' + b + '!');
          }),
          a)
        : Wt(a, b);
    },
    Yt = function (a) {
      for (var b = [], c = St(a, 12); c--; ) {
        var d = St(a, 6),
          e = St(a, 2),
          f = Vt(a),
          g = b,
          h = g.push,
          k = new jt();
        d = hd(k, 1, d, 0);
        e = hd(d, 2, e, 0);
        f = gd(e, 3, f);
        h.call(g, f);
      }
      return b;
    },
    Vt = function (a) {
      for (var b = St(a, 12), c = []; b--; ) {
        var d = !0 === !!St(a, 1),
          e = St(a, 16);
        if (d) for (d = St(a, 16); e <= d; e++) c.push(e);
        else c.push(e);
      }
      c.sort(function (f, g) {
        return f - g;
      });
      return c;
    },
    Wt = function (a, b, c) {
      for (var d = [], e = 0; e < b; e++)
        if (St(a, 1)) {
          var f = e + 1;
          if (c && -1 === c.indexOf(f))
            throw Error('ID: ' + f + ' is outside of allowed values!');
          d.push(f);
        }
      return d;
    },
    St = function (a, b) {
      if (a.h + b > a.j.length)
        throw Error('Requested length ' + b + ' is past end of string.');
      var c = a.j.substring(a.h, a.h + b);
      a.h += b;
      return parseInt(c, 2);
    };
  Rt.prototype.skip = function (a) {
    this.h += a;
  };
  var Zt = function (a) {
    try {
      var b = Cc(a)
          .map(function (f) {
            return f.toString(2).padStart(8, '0');
          })
          .join(''),
        c = new Rt(b);
      if (3 !== St(c, 3)) return null;
      var d = nt(mt(new lt(), Wt(c, 24, Pt)), Wt(c, 24, Pt)),
        e = St(c, 6);
      0 !== e && pt(ot(d, Wt(c, e)), Wt(c, e));
      return d;
    } catch (f) {
      return null;
    }
  };
  var $t = function (a) {
    try {
      var b = Cc(a)
          .map(function (d) {
            return d.toString(2).padStart(8, '0');
          })
          .join(''),
        c = new Rt(b);
      return Mt(
        Lt(
          Kt(
            Jt(
              It(
                Ht(
                  Gt(
                    Ft(
                      Et(
                        Dt(
                          Ct(
                            Bt(
                              At(
                                zt(
                                  yt(
                                    xt(
                                      wt(
                                        vt(ut(new tt(), St(c, 6)), Tt(c)),
                                        Tt(c)
                                      ),
                                      St(c, 12)
                                    ),
                                    St(c, 12)
                                  ),
                                  St(c, 6)
                                ),
                                Ut(c)
                              ),
                              St(c, 12)
                            ),
                            St(c, 6)
                          ),
                          !!St(c, 1)
                        ),
                        !!St(c, 1)
                      ),
                      Wt(c, 12, Qt)
                    ),
                    Wt(c, 24, Pt)
                  ),
                  Wt(c, 24, Pt)
                ),
                !!St(c, 1)
              ),
              Ut(c)
            ),
            Xt(c)
          ),
          Xt(c)
        ),
        Yt(c)
      );
    } catch (d) {
      return null;
    }
  };
  var bu = function (a) {
      if (!a) return null;
      var b = a.split('.');
      if (4 < b.length) return null;
      a = $t(b[0]);
      if (!a) return null;
      var c = new Nt();
      a = nd(c, 1, a);
      b.shift();
      b = r(b);
      for (c = b.next(); !c.done; c = b.next())
        switch (((c = c.value), au(c))) {
          case 1:
          case 2:
            break;
          case 3:
            c = Zt(c);
            if (!c) return null;
            nd(a, 2, c);
            break;
          default:
            return null;
        }
      return a;
    },
    au = function (a) {
      try {
        var b = Cc(a)
          .map(function (c) {
            return c.toString(2).padStart(8, '0');
          })
          .join('');
        return St(new Rt(b), 3);
      } catch (c) {
        return -1;
      }
    };
  var cu = function (a, b) {
    var c = {};
    if (Array.isArray(b) && 0 !== b.length) {
      b = r(b);
      for (var d = b.next(); !d.done; d = b.next())
        (d = d.value), (c[d] = -1 !== a.indexOf(d));
    } else for (a = r(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
    delete c[0];
    return c;
  };
  var du = /^((market|itms|intent|itms-appss):\/\/)/i;
  var R = function (a, b) {
    this.j = this.B = this.o = '';
    this.K = null;
    this.F = this.h = '';
    this.A = !1;
    var c;
    a instanceof R
      ? ((this.A = void 0 !== b ? b : a.A),
        eu(this, a.o),
        (this.B = a.B),
        (this.j = a.j),
        fu(this, a.K),
        (this.h = a.h),
        gu(this, hu(a.l)),
        (this.F = a.C()))
      : a && (c = String(a).match(Mg))
      ? ((this.A = !!b),
        eu(this, c[1] || '', !0),
        (this.B = iu(c[2] || '')),
        (this.j = iu(c[3] || '', !0)),
        fu(this, c[4]),
        (this.h = iu(c[5] || '', !0)),
        gu(this, c[6] || '', !0),
        (this.F = iu(c[7] || '')))
      : ((this.A = !!b), (this.l = new ju(null, this.A)));
  };
  R.prototype.toString = function () {
    var a = [],
      b = this.o;
    b && a.push(ku(b, lu, !0), ':');
    var c = this.j;
    if (c || 'file' == b)
      a.push('//'),
        (b = this.B) && a.push(ku(b, lu, !0), '@'),
        a.push(
          encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')
        ),
        (c = this.K),
        null != c && a.push(':', String(c));
    if ((c = this.h))
      this.j && '/' != c.charAt(0) && a.push('/'),
        a.push(ku(c, '/' == c.charAt(0) ? mu : nu, !0));
    (c = this.l.toString()) && a.push('?', c);
    (c = this.C()) && a.push('#', ku(c, ou));
    return a.join('');
  };
  R.prototype.resolve = function (a) {
    var b = this.G(),
      c = !!a.o;
    c ? eu(b, a.o) : (c = !!a.B);
    c ? (b.B = a.B) : (c = !!a.j);
    c ? (b.j = a.j) : (c = null != a.K);
    var d = a.h;
    if (c) fu(b, a.K);
    else if ((c = !!a.h)) {
      if ('/' != d.charAt(0))
        if (this.j && !this.h) d = '/' + d;
        else {
          var e = b.h.lastIndexOf('/');
          -1 != e && (d = b.h.slice(0, e + 1) + d);
        }
      e = d;
      if ('..' == e || '.' == e) d = '';
      else if (-1 != e.indexOf('./') || -1 != e.indexOf('/.')) {
        d = 0 == e.lastIndexOf('/', 0);
        e = e.split('/');
        for (var f = [], g = 0; g < e.length; ) {
          var h = e[g++];
          '.' == h
            ? d && g == e.length && f.push('')
            : '..' == h
            ? ((1 < f.length || (1 == f.length && '' != f[0])) && f.pop(),
              d && g == e.length && f.push(''))
            : (f.push(h), (d = !0));
        }
        d = f.join('/');
      } else d = e;
    }
    c ? (b.h = d) : (c = '' !== a.l.toString());
    c ? gu(b, hu(a.l)) : (c = !!a.F);
    c && (b.F = a.C());
    return b;
  };
  R.prototype.G = function () {
    return new R(this);
  };
  var eu = function (a, b, c) {
      a.o = c ? iu(b, !0) : b;
      a.o && (a.o = a.o.replace(/:$/, ''));
    },
    fu = function (a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error('Bad port number ' + b);
        a.K = b;
      } else a.K = null;
    },
    gu = function (a, b, c) {
      b instanceof ju
        ? ((a.l = b), pu(a.l, a.A))
        : (c || (b = ku(b, qu)), (a.l = new ju(b, a.A)));
    },
    ru = function (a, b, c) {
      a.l.set(b, c);
      return a;
    };
  R.prototype.C = function () {
    return this.F;
  };
  var tu = function (a) {
      return a instanceof R ? a.G() : new R(a, void 0);
    },
    iu = function (a, b) {
      return a
        ? b
          ? decodeURI(a.replace(/%25/g, '%2525'))
          : decodeURIComponent(a)
        : '';
    },
    ku = function (a, b, c) {
      return 'string' === typeof a
        ? ((a = encodeURI(a).replace(b, uu)),
          c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
          a)
        : null;
    },
    uu = function (a) {
      a = a.charCodeAt(0);
      return '%' + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
    },
    lu = /[#\/\?@]/g,
    nu = /[#\?:]/g,
    mu = /[#\?]/g,
    qu = /[#\?@]/g,
    ou = /#/g,
    ju = function (a, b) {
      this.j = this.h = null;
      this.l = a || null;
      this.o = !!b;
    },
    vu = function (a) {
      a.h ||
        ((a.h = new Map()),
        (a.j = 0),
        a.l &&
          Og(a.l, function (b, c) {
            a.add(kg(b), c);
          }));
    };
  ju.prototype.add = function (a, b) {
    vu(this);
    this.l = null;
    a = wu(this, a);
    var c = this.h.get(a);
    c || this.h.set(a, (c = []));
    c.push(b);
    this.j += 1;
    return this;
  };
  ju.prototype.remove = function (a) {
    vu(this);
    a = wu(this, a);
    return this.h.has(a)
      ? ((this.l = null), (this.j -= this.h.get(a).length), this.h.delete(a))
      : !1;
  };
  ju.prototype.clear = function () {
    this.h = this.l = null;
    this.j = 0;
  };
  ju.prototype.isEmpty = function () {
    vu(this);
    return 0 == this.j;
  };
  var xu = function (a, b) {
    vu(a);
    b = wu(a, b);
    return a.h.has(b);
  };
  l = ju.prototype;
  l.forEach = function (a, b) {
    vu(this);
    this.h.forEach(function (c, d) {
      c.forEach(function (e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };
  l.rc = function () {
    vu(this);
    for (
      var a = Array.from(this.h.values()),
        b = Array.from(this.h.keys()),
        c = [],
        d = 0;
      d < b.length;
      d++
    )
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  l.zb = function (a) {
    vu(this);
    var b = [];
    if ('string' === typeof a)
      xu(this, a) && (b = b.concat(this.h.get(wu(this, a))));
    else {
      a = Array.from(this.h.values());
      for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
    }
    return b;
  };
  l.set = function (a, b) {
    vu(this);
    this.l = null;
    a = wu(this, a);
    xu(this, a) && (this.j -= this.h.get(a).length);
    this.h.set(a, [b]);
    this.j += 1;
    return this;
  };
  l.get = function (a, b) {
    if (!a) return b;
    a = this.zb(a);
    return 0 < a.length ? String(a[0]) : b;
  };
  l.toString = function () {
    if (this.l) return this.l;
    if (!this.h) return '';
    for (var a = [], b = Array.from(this.h.keys()), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = this.zb(d);
      for (var f = 0; f < d.length; f++) {
        var g = e;
        '' !== d[f] && (g += '=' + encodeURIComponent(String(d[f])));
        a.push(g);
      }
    }
    return (this.l = a.join('&'));
  };
  var hu = function (a) {
      var b = new ju();
      b.l = a.l;
      a.h && ((b.h = new Map(a.h)), (b.j = a.j));
      return b;
    },
    wu = function (a, b) {
      b = String(b);
      a.o && (b = b.toLowerCase());
      return b;
    },
    pu = function (a, b) {
      b &&
        !a.o &&
        (vu(a),
        (a.l = null),
        a.h.forEach(function (c, d) {
          var e = d.toLowerCase();
          d != e &&
            (this.remove(d),
            this.remove(e),
            0 < c.length &&
              ((this.l = null),
              this.h.set(wu(this, e), Pb(c)),
              (this.j += c.length)));
        }, a));
      a.o = b;
    };
  var yu =
      '://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav'.split(
        ' '
      ),
    zu = /\bocr\b/,
    Au = 0,
    Bu = {};
  function Cu(a) {
    if (fb(ng(a))) return !1;
    if (
      0 <=
      a.indexOf('://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&')
    )
      return !0;
    try {
      var b = new R(a);
    } catch (c) {
      return (
        null !=
        Hb(yu, function (d) {
          return 0 < a.search(d);
        })
      );
    }
    return b.C().match(zu)
      ? !0
      : null !=
          Hb(yu, function (c) {
            return null != a.match(c);
          });
  }
  function Du(a, b) {
    if (a && ((a = Eu(a)), !fb(a))) {
      var c = 'javascript:"<body><img src=\\""+' + a + '+"\\"></body>"';
      b
        ? Fu(function (d) {
            Gu(
              d
                ? c
                : 'javascript:"<body><object data=\\""+' +
                    a +
                    '+"\\" type=\\"text/html\\" width=1 height=1 style=\\"visibility:hidden;\\"></body>"'
            );
          })
        : Gu(c);
    }
  }
  function Gu(a) {
    var b = Eg('IFRAME', { src: a, style: 'display:none' });
    a = ug(b).body;
    var c = rl(function () {
      Kk(d);
      Fg(b);
    }, 15e3);
    var d = Bk(b, ['load', 'error'], function () {
      rl(function () {
        v.clearTimeout(c);
        Fg(b);
      }, 5e3);
    });
    a.appendChild(b);
  }
  function Fu(a) {
    var b = Bu.imageLoadingEnabled;
    if (null != b) a(b);
    else {
      var c = !1;
      Hu(function (d, e) {
        delete Bu[e];
        c ||
          ((c = !0),
          null == Bu.imageLoadingEnabled && (Bu.imageLoadingEnabled = d),
          a(d));
      });
    }
  }
  function Hu(a) {
    var b = new Image(),
      c = '' + Au++;
    Bu[c] = b;
    b.onload = function () {
      clearTimeout(d);
      a(!0, c);
    };
    var d = setTimeout(function () {
      a(!1, c);
    }, 300);
    b.src =
      'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
  }
  function Iu(a) {
    if (a) {
      var b = Cg(document, 'OBJECT');
      b.data = a;
      b.width = '1';
      b.height = '1';
      b.style.visibility = 'hidden';
      var c = '' + Au++;
      Bu[c] = b;
      b.onload = b.onerror = function () {
        delete Bu[c];
      };
      document.body.appendChild(b);
    }
  }
  function Ju(a) {
    if (a) {
      var b = new Image(),
        c = '' + Au++;
      Bu[c] = b;
      b.onload = b.onerror = function () {
        delete Bu[c];
      };
      b.src = a;
    }
  }
  function Ku(a, b) {
    a &&
      (b
        ? Fu(function (c) {
            c ? Ju(a) : Iu(a);
          })
        : Ju(a));
  }
  function Eu(a) {
    a = Tf(Xf(a) || $f);
    if ('about:invalid#zClosurez' === a) return '';
    a instanceof eg ||
      ((a = 'object' == typeof a && a.Ya ? a.La() : String(a)),
      qb.test(a) &&
        (-1 != a.indexOf('&') && (a = a.replace(jb, '&amp;')),
        -1 != a.indexOf('<') && (a = a.replace(kb, '&lt;')),
        -1 != a.indexOf('>') && (a = a.replace(lb, '&gt;')),
        -1 != a.indexOf('"') && (a = a.replace(nb, '&quot;')),
        -1 != a.indexOf("'") && (a = a.replace(ob, '&#39;')),
        -1 != a.indexOf('\x00') && (a = a.replace(pb, '&#0;'))),
      (a = gg(a)));
    return encodeURIComponent(String(pi(new ni(), fg(a).toString())));
  }
  var Lu = 'ad_type vpos mridx pos vad_type videoad_start_delay'.split(' ');
  var Mu = function (a) {
    var b = a.Ua,
      c = a.height,
      d = a.width,
      e = void 0 === a.Aa ? !1 : a.Aa;
    this.bb = a.bb;
    this.Ua = b;
    this.height = c;
    this.width = d;
    this.Aa = e;
  };
  Mu.prototype.getHeight = function () {
    return this.height;
  };
  Mu.prototype.getWidth = function () {
    return this.width;
  };
  var Nu = function (a) {
    var b = a.kg,
      c = a.bf,
      d = a.jg,
      e = a.af;
    Mu.call(this, {
      bb: a.bb,
      Ua: a.Ua,
      height: a.height,
      width: a.width,
      Aa: void 0 === a.Aa ? !1 : a.Aa,
    });
    this.o = b;
    this.j = c;
    this.l = d;
    this.h = e;
  };
  t(Nu, Mu);
  var Ou = function (a) {
    var b = a.If;
    Mu.call(this, {
      bb: a.bb,
      Ua: a.Ua,
      height: a.height,
      width: a.width,
      Aa: void 0 === a.Aa ? !1 : a.Aa,
    });
    this.h = b;
  };
  t(Ou, Mu);
  Ou.prototype.getMediaUrl = function () {
    return this.h;
  };
  function Pu(a) {
    return new (Function.prototype.bind.apply(
      a,
      [null].concat(ia(Ha.apply(1, arguments)))
    ))();
  }
  var Qu,
    Ru,
    Su,
    Tu = function () {
      return v.navigator ? v.navigator.userAgent : '';
    },
    Uu =
      -1 != Tu().indexOf('(iPad') ||
      -1 != Tu().indexOf('(Macintosh') ||
      -1 != Tu().indexOf('(iPod') ||
      -1 != Tu().indexOf('(iPhone');
  var Vu =
      'ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com'.split(
        ' '
      ),
    Wu = ['c.googlesyndication.com'];
  function Xu(a, b) {
    b = void 0 === b ? window.location.protocol : b;
    var c = !1;
    Yu(a, Wu) ? (c = !1) : b.includes('https') && Yu(a, Vu) && (c = !0);
    if (c) {
      b = new R(a);
      if ('https' == b.o) return a;
      M(L.h(), 'htp', '1');
      eu(b, 'https');
      return b.toString();
    }
    return a;
  }
  function Zu(a) {
    if (!a) return !1;
    try {
      var b = new R(a);
      return 'gcache' == b.o && !!b.l.get('url');
    } catch (c) {
      return !1;
    }
  }
  function $u(a) {
    try {
      var b = new R(a);
      if ('gcache' == b.o) {
        var c = b.l.get('url');
        if (c && !fb(ng(c))) return c;
      }
    } catch (d) {}
    return a;
  }
  function Yu(a, b) {
    return new RegExp(
      '^https?://([a-z0-9-]{1,63}\\.)*(' +
        b.join('|').replace(/\./g, '\\.') +
        ')(:[0-9]+)?([/?#]|$)',
      'i'
    ).test(a);
  }
  var av = -1;
  function bv(a, b) {
    b = null != b ? b : '';
    Zb && (b = '');
    if (!fb(ng(a))) {
      var c = a instanceof Sf || !du.test(a) ? a : Wf(a);
      if (c instanceof Sf) var d = c;
      else {
        d = void 0 === d ? Zg : d;
        a: {
          d = void 0 === d ? Zg : d;
          for (c = 0; c < d.length; ++c) {
            var e = d[c];
            if (e instanceof Xg && e.Hf(a)) {
              a = Wf(a);
              break a;
            }
          }
          a = void 0;
        }
        d = a || $f;
      }
      a = window;
      if (d instanceof Sf) var f = Tf(d);
      else {
        b: if (Tg) {
          try {
            f = new URL(d);
          } catch (g) {
            f = 'https:';
            break b;
          }
          f = f.protocol;
        } else
          c: {
            f = document.createElement('a');
            try {
              f.href = d;
            } catch (g) {
              f = void 0;
              break c;
            }
            f = f.protocol;
            f = ':' === f || '' === f ? 'https:' : f;
          }
        f = 'javascript:' !== f ? d : void 0;
      }
      void 0 !== f && a.open(f, '_blank', b);
    }
  }
  var cv = /OS (\S+) like/,
    dv = /Android ([\d\.]+)/;
  function ev(a, b) {
    a = (a = a.exec(ub())) ? a[1] : '';
    a = a.replace(/_/g, '.');
    return 0 <= tb(a, b);
  }
  var fv = function () {
      return cc && 'ontouchstart' in document.documentElement;
    },
    gv = function (a) {
      return ic && ev(cv, a);
    },
    hv = function (a) {
      return (a = void 0 === a ? null : a) &&
        'function' === typeof a.getAttribute
        ? a.getAttribute('playsinline')
          ? !0
          : !1
        : !1;
    };
  var iv = function (a) {
    O.call(this);
    this.h = a;
    this.A = this.B = !1;
    this.C = this.F = 0;
    this.j = new ql(1e3);
    We(this, this.j);
    Ck(this.j, 'tick', this.G, !1, this);
    Ck(this.h, 'pause', this.l, !1, this);
    Ck(this.h, 'playing', this.l, !1, this);
    Ck(this.h, 'ended', this.l, !1, this);
    Ck(this.h, 'timeupdate', this.l, !1, this);
  };
  t(iv, O);
  var jv = function (a) {
    var b;
    return null != (b = a.h.currentTime) ? b : a.h.getCurrentTime();
  };
  iv.prototype.l = function (a) {
    switch (a.type) {
      case 'playing':
        kv(this);
        break;
      case 'pause':
      case 'ended':
        this.j.qb && this.j.stop();
        break;
      case 'timeupdate':
        !this.B && 0 < jv(this) && ((this.B = !0), kv(this));
    }
  };
  var kv = function (a) {
    !a.j.qb &&
      a.B &&
      ((a.F = 1e3 * jv(a)), (a.C = Date.now()), (a.A = !1), a.j.start());
  };
  iv.prototype.G = function () {
    var a = Date.now(),
      b = a - this.C,
      c = 1e3 * jv(this);
    c - this.F < 0.5 * b
      ? this.A || ((this.A = !0), this.dispatchEvent('playbackStalled'))
      : (this.A = !1);
    this.F = c;
    this.C = a;
  };
  var lv =
      '://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav'.split(
        ' '
      ),
    mv = /\bocr\b/;
  function nv(a) {
    if (fb(ng(a)) || (Zb && 2048 < a.length)) return !1;
    try {
      if (new R(a).C().match(mv)) return !0;
    } catch (b) {}
    return (
      null !=
      lv.find(function (b) {
        return null != a.match(b);
      })
    );
  }
  var ov = new Map(),
    pv = function () {
      this.j = this.h = null;
    };
  function qv(a, b, c, d) {
    var e = Ol(a);
    b.width <= e.width && b.height <= e.height
      ? (rv(d), c(e))
      : ((e = setTimeout(function () {
          return qv(a, b, c, d);
        }, 200)),
        (d.j = e));
  }
  function tv(a, b) {
    b = void 0 === b ? new G(1, 1) : b;
    var c = new pv(),
      d = new Promise(function (e) {
        var f = Ol(a);
        if (b.width <= f.width && b.height <= f.height) return e(f);
        'ResizeObserver' in window
          ? ((f = new ResizeObserver(function (g) {
              window.requestAnimationFrame(function () {
                for (
                  var h = new G(0, 0), k = r(g), n = k.next();
                  !n.done;
                  n = k.next()
                )
                  if (
                    ((n = n.value),
                    n.contentBoxSize
                      ? ((n = Array.isArray(n.contentBoxSize)
                          ? n.contentBoxSize[0]
                          : n.contentBoxSize),
                        (h.width = Math.floor(n.inlineSize)),
                        (h.height = Math.floor(n.blockSize)))
                      : ((h.width = Math.floor(n.contentRect.width)),
                        (h.height = Math.floor(n.contentRect.height))),
                    b.width <= h.width && b.height <= h.height)
                  )
                    return rv(c), e(h);
              });
            })),
            (c.h = f),
            f.observe(a))
          : qv(a, b, e, c);
      });
    ov.set(d, c);
    return d;
  }
  function rv(a) {
    a.j && window.clearTimeout(a.j);
    a.h && (a.h.disconnect(), (a.h = null));
  }
  function uv(a, b) {
    return fb(b) ? !1 : new RegExp(a).test(b);
  }
  function vv(a) {
    var b = {};
    a.split(',').forEach(function (c) {
      var d = c.split('=');
      2 == d.length &&
        ((c = ib(d[0])), (d = ib(d[1])), 0 < c.length && (b[c] = d));
    });
    return b;
  }
  function wv(a) {
    var b =
      'af am ar_eg ar_sa ar_xb ar be bg bn ca cs da de_at de_cn de el en_au en_ca en_gb en_ie en_in en_sg en_xa en_xc en_za en es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et eu fa fi fil fr_ca fr_ch fr gl gsw gu he hi hr hu id in is it iw ja kn ko ln lo lt lv ml mo mr ms nb ne nl no pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv sw ta te th tl tr uk ur vi zh_cn zh_hk zh_tw zh zu'.split(
        ' '
      );
    if (!a) return null;
    a = a.toLowerCase().replace('-', '_');
    if (b.includes(a)) return a;
    a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, '') : '';
    return b.includes(a) ? a : null;
  }
  var xv = function () {
    this.h = Date.now();
  };
  xv.prototype.reset = function () {
    this.h = Date.now();
  };
  var yv = function (a) {
    a = a.h + 5e3 - Date.now();
    return 0 < a ? a : 0;
  };
  var zv = function (a) {
    var b = Error.call(this, a);
    this.message = b.message;
    'stack' in b && (this.stack = b.stack);
    this.errorCode = a;
  };
  t(zv, Error);
  var Av = function () {
      if (!Zb) return !1;
      try {
        return new ActiveXObject('MSXML2.DOMDocument'), !0;
      } catch (a) {
        return !1;
      }
    },
    Bv = Zb && Av();
  var Cv = function (a) {
    E.call(this);
    this.o = a;
    this.j = {};
  };
  Ya(Cv, E);
  var Dv = [];
  Cv.prototype.P = function (a, b, c, d) {
    return Ev(this, a, b, c, d);
  };
  var Ev = function (a, b, c, d, e, f) {
    Array.isArray(c) || (c && (Dv[0] = c.toString()), (c = Dv));
    for (var g = 0; g < c.length; g++) {
      var h = Ck(b, c[g], d || a.handleEvent, e || !1, f || a.o || a);
      if (!h) break;
      a.j[h.key] = h;
    }
    return a;
  };
  Cv.prototype.Sb = function (a, b, c, d) {
    return Fv(this, a, b, c, d);
  };
  var Fv = function (a, b, c, d, e, f) {
    if (Array.isArray(c))
      for (var g = 0; g < c.length; g++) Fv(a, b, c[g], d, e, f);
    else {
      b = Bk(b, c, d || a.handleEvent, e, f || a.o || a);
      if (!b) return a;
      a.j[b.key] = b;
    }
    return a;
  };
  Cv.prototype.ob = function (a, b, c, d, e) {
    if (Array.isArray(b))
      for (var f = 0; f < b.length; f++) this.ob(a, b[f], c, d, e);
    else
      (c = c || this.handleEvent),
        (d = Oa(d) ? !!d.capture : !!d),
        (e = e || this.o || this),
        (c = Dk(c)),
        (d = !!d),
        (b = rk(a)
          ? a.Ob(b, c, d, e)
          : a
          ? (a = Fk(a))
            ? a.Ob(b, c, d, e)
            : null
          : null),
        b && (Kk(b), delete this.j[b.key]);
  };
  var Gv = function (a) {
    tf(
      a.j,
      function (b, c) {
        this.j.hasOwnProperty(c) && Kk(b);
      },
      a
    );
    a.j = {};
  };
  Cv.prototype.N = function () {
    Cv.Ba.N.call(this);
    Gv(this);
  };
  Cv.prototype.handleEvent = function () {
    throw Error('EventHandler.handleEvent not implemented');
  };
  var Hv = function () {};
  Hv.prototype.h = null;
  var Jv = function (a) {
    var b;
    (b = a.h) || ((b = {}), Iv(a) && ((b[0] = !0), (b[1] = !0)), (b = a.h = b));
    return b;
  };
  var Kv,
    Lv = function () {};
  Ya(Lv, Hv);
  var Mv = function (a) {
      return (a = Iv(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
    },
    Iv = function (a) {
      if (
        !a.j &&
        'undefined' == typeof XMLHttpRequest &&
        'undefined' != typeof ActiveXObject
      ) {
        for (
          var b = [
              'MSXML2.XMLHTTP.6.0',
              'MSXML2.XMLHTTP.3.0',
              'MSXML2.XMLHTTP',
              'Microsoft.XMLHTTP',
            ],
            c = 0;
          c < b.length;
          c++
        ) {
          var d = b[c];
          try {
            return new ActiveXObject(d), (a.j = d);
          } catch (e) {}
        }
        throw Error(
          'Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed'
        );
      }
      return a.j;
    };
  Kv = new Lv();
  var Nv = function (a) {
    O.call(this);
    this.headers = new Map();
    this.H = a || null;
    this.j = !1;
    this.G = this.h = null;
    this.M = '';
    this.A = 0;
    this.l = this.L = this.B = this.J = !1;
    this.F = 0;
    this.C = null;
    this.Z = '';
    this.U = this.V = !1;
    this.O = null;
  };
  Ya(Nv, O);
  var Ov = /^https?$/i,
    Pv = ['POST', 'PUT'];
  Nv.prototype.setTrustToken = function (a) {
    this.O = a;
  };
  var Tv = function (a, b, c, d) {
      if (a.h)
        throw Error(
          '[goog.net.XhrIo] Object is active with another request=' +
            a.M +
            '; newUri=' +
            b
        );
      c = c ? c.toUpperCase() : 'GET';
      a.M = b;
      a.A = 0;
      a.J = !1;
      a.j = !0;
      a.h = a.H ? Mv(a.H) : Mv(Kv);
      a.G = a.H ? Jv(a.H) : Jv(Kv);
      a.h.onreadystatechange = Va(a.X, a);
      try {
        (a.L = !0), a.h.open(c, String(b), !0), (a.L = !1);
      } catch (g) {
        Qv(a);
        return;
      }
      b = d || '';
      d = new Map(a.headers);
      var e = Array.from(d.keys()).find(function (g) {
          return 'content-type' == g.toLowerCase();
        }),
        f = v.FormData && b instanceof v.FormData;
      !Kb(Pv, c) ||
        e ||
        f ||
        d.set(
          'Content-Type',
          'application/x-www-form-urlencoded;charset=utf-8'
        );
      c = r(d);
      for (d = c.next(); !d.done; d = c.next())
        (e = r(d.value)),
          (d = e.next().value),
          (e = e.next().value),
          a.h.setRequestHeader(d, e);
      a.Z && (a.h.responseType = a.Z);
      'withCredentials' in a.h &&
        a.h.withCredentials !== a.V &&
        (a.h.withCredentials = a.V);
      if ('setTrustToken' in a.h && a.O)
        try {
          a.h.setTrustToken(a.O);
        } catch (g) {}
      try {
        Rv(a),
          0 < a.F &&
            ((a.U = Sv(a.h)),
            a.U
              ? ((a.h.timeout = a.F), (a.h.ontimeout = Va(a.aa, a)))
              : (a.C = rl(a.aa, a.F, a))),
          (a.B = !0),
          a.h.send(b),
          (a.B = !1);
      } catch (g) {
        Qv(a);
      }
    },
    Sv = function (a) {
      return Zb && 'number' === typeof a.timeout && void 0 !== a.ontimeout;
    };
  Nv.prototype.aa = function () {
    'undefined' != typeof La &&
      this.h &&
      ((this.A = 8), this.dispatchEvent('timeout'), this.abort(8));
  };
  var Qv = function (a) {
      a.j = !1;
      a.h && ((a.l = !0), a.h.abort(), (a.l = !1));
      a.A = 5;
      Uv(a);
      Vv(a);
    },
    Uv = function (a) {
      a.J ||
        ((a.J = !0), a.dispatchEvent('complete'), a.dispatchEvent('error'));
    };
  Nv.prototype.abort = function (a) {
    this.h &&
      this.j &&
      ((this.j = !1),
      (this.l = !0),
      this.h.abort(),
      (this.l = !1),
      (this.A = a || 7),
      this.dispatchEvent('complete'),
      this.dispatchEvent('abort'),
      Vv(this));
  };
  Nv.prototype.N = function () {
    this.h &&
      (this.j && ((this.j = !1), (this.l = !0), this.h.abort(), (this.l = !1)),
      Vv(this, !0));
    Nv.Ba.N.call(this);
  };
  Nv.prototype.X = function () {
    this.ya() || (this.L || this.B || this.l ? Wv(this) : this.ca());
  };
  Nv.prototype.ca = function () {
    Wv(this);
  };
  var Wv = function (a) {
      if (
        a.j &&
        'undefined' != typeof La &&
        (!a.G[1] || 4 != Xv(a) || 2 != Yv(a))
      )
        if (a.B && 4 == Xv(a)) rl(a.X, 0, a);
        else if ((a.dispatchEvent('readystatechange'), 4 == Xv(a))) {
          a.j = !1;
          try {
            var b = Yv(a);
            a: switch (b) {
              case 200:
              case 201:
              case 202:
              case 204:
              case 206:
              case 304:
              case 1223:
                var c = !0;
                break a;
              default:
                c = !1;
            }
            var d;
            if (!(d = c)) {
              var e;
              if ((e = 0 === b)) {
                var f = String(a.M).match(Mg)[1] || null;
                !f &&
                  v.self &&
                  v.self.location &&
                  (f = v.self.location.protocol.slice(0, -1));
                e = !Ov.test(f ? f.toLowerCase() : '');
              }
              d = e;
            }
            d
              ? (a.dispatchEvent('complete'), a.dispatchEvent('success'))
              : ((a.A = 6), Uv(a));
          } finally {
            Vv(a);
          }
        }
    },
    Vv = function (a, b) {
      if (a.h) {
        Rv(a);
        var c = a.h,
          d = a.G[0] ? function () {} : null;
        a.h = null;
        a.G = null;
        b || a.dispatchEvent('ready');
        try {
          c.onreadystatechange = d;
        } catch (e) {}
      }
    },
    Rv = function (a) {
      a.h && a.U && (a.h.ontimeout = null);
      a.C && (v.clearTimeout(a.C), (a.C = null));
    };
  Nv.prototype.isActive = function () {
    return !!this.h;
  };
  var Xv = function (a) {
      return a.h ? a.h.readyState : 0;
    },
    Yv = function (a) {
      try {
        return 2 < Xv(a) ? a.h.status : -1;
      } catch (b) {
        return -1;
      }
    },
    Zv = function (a) {
      if (a.h) {
        a: {
          a = a.h.responseText;
          if (v.JSON)
            try {
              var b = v.JSON.parse(a);
              break a;
            } catch (c) {}
          b = mi(a);
        }
        return b;
      }
    };
  var $v = function () {};
  $v.prototype.get = function (a) {
    return aw({
      url: a.url,
      timeout: a.timeout,
      withCredentials: void 0 === a.withCredentials ? !0 : a.withCredentials,
      method: 'GET',
      Ta: void 0 === a.Ta ? void 0 : a.Ta,
    });
  };
  var aw = function (a) {
      var b = a.url,
        c = a.timeout,
        d = a.withCredentials,
        e = a.method,
        f = void 0 === a.content ? void 0 : a.content,
        g = void 0 === a.Ta ? void 0 : a.Ta,
        h = void 0 === a.headers ? {} : a.headers;
      return bw({
        url: b,
        timeout: c,
        withCredentials: d,
        method: e,
        content: f,
        Ta: g,
        headers: h,
      }).then(
        function (k) {
          return Promise.resolve(k);
        },
        function (k) {
          return k instanceof Error && 6 == k.message && d
            ? bw({
                url: b,
                timeout: c,
                withCredentials: !d,
                method: e,
                content: f,
                Ta: g,
                headers: h,
              })
            : Promise.reject(k);
        }
      );
    },
    bw = function (a) {
      var b = a.url,
        c = a.timeout,
        d = a.withCredentials,
        e = a.method,
        f = void 0 === a.content ? void 0 : a.content,
        g = void 0 === a.Ta ? void 0 : a.Ta;
      a = void 0 === a.headers ? {} : a.headers;
      var h = new Nv();
      h.V = d;
      h.F = Math.max(0, yv(c));
      h.setTrustToken && g && h.setTrustToken(g);
      for (var k in a) h.headers.set(k, a[k]);
      var n = new Cv();
      return new Promise(function (m, x) {
        n.Sb(h, 'success', function () {
          a: {
            if (so())
              try {
                Zv(h);
                var u = 'application/json';
                break a;
              } catch (F) {
                u = 'application/xml';
                break a;
              }
            h.h && 4 == Xv(h)
              ? ((u = h.h.getResponseHeader('Content-Type')),
                (u = null === u ? void 0 : u))
              : (u = void 0);
            u = u || '';
          }
          if (-1 != u.indexOf('application/json')) m(Zv(h) || {});
          else {
            try {
              var y = h.h ? h.h.responseXML : null;
            } catch (F) {
              y = null;
            }
            if (null == y) {
              try {
                var A = h.h ? h.h.responseText : '';
              } catch (F) {
                A = '';
              }
              y = A;
              if ('undefined' != typeof DOMParser)
                (A = new DOMParser()),
                  (y = gg(y)),
                  (y = A.parseFromString(fg(y), 'application/xml'));
              else if (Bv) {
                A = new ActiveXObject('MSXML2.DOMDocument');
                A.resolveExternals = !1;
                A.validateOnParse = !1;
                try {
                  A.setProperty('ProhibitDTD', !0),
                    A.setProperty('MaxXMLSize', 2048),
                    A.setProperty('MaxElementDepth', 256);
                } catch (F) {}
                A.loadXML(y);
                y = A;
              } else
                throw Error(
                  'Your browser does not support loading xml documents'
                );
            }
            m(y);
          }
          n.W();
          h.W();
        });
        n.Sb(h, ['error', 'timeout'], function () {
          x(new zv(h.A, Yv(h)));
          n.W();
          h.W();
        });
        Tv(h, Xu(b), e, f);
      });
    };
  w('google.javascript.ads.imalib.common.UrlLoader', $v);
  var ew = function (a, b, c) {
      if (so()) new $v().get({ url: b, timeout: new xv() });
      else if (c) {
        if (((a = Tf(Xf(b) || $f)), 'about:invalid#zClosurez' !== a)) {
          var d = void 0 === d ? {} : d;
          a = a
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
          d.ui && (a = a.replace(/(^|[\r\n\t ]) /g, '$1&#160;'));
          d.ti && (a = a.replace(/(\r\n|\n|\r)/g, '<br>'));
          d.wi &&
            (a = a.replace(
              /(\t+)/g,
              '<span style="white-space:pre">$1</span>'
            ));
          d = gg(a);
          d =
            'javascript:"<body><img src=\\""+' +
            encodeURIComponent(String(pi(new ni(), fg(d).toString()))) +
            '+"\\"></body>"';
          cw(d);
        }
      } else dw(a, b);
    },
    fw = function (a, b, c) {
      M(L.h(), 'faa', '1');
      var d = {
        keepalive: !0,
        method: 'get',
        mode: 'no-cors',
        redirect: 'follow',
      };
      c && (d.referrerPolicy = 'no-referrer');
      fetch(b, d)
        .then(function () {
          M(L.h(), 'fas', '1');
        })
        .catch(function () {
          M(L.h(), 'faf', '1');
          a.j = !1;
          ew(a, b, c);
        });
    },
    cw = function (a) {
      var b = Eg('IFRAME', { src: a, style: 'display:none' });
      a = ug(b).body;
      Bk(b, ['load', 'error'], function () {
        rl(function () {
          Fg(b);
        }, 5e3);
      });
      a.appendChild(b);
    },
    dw = function (a, b) {
      var c = new Image(),
        d = (a.l++).toString();
      a.h.set(d, c);
      c.onload = c.onerror = function () {
        a.h.delete(d);
      };
      c.src = b;
    };
  var gw = {
    AUTOPLAY_DISALLOWED: 'autoplayDisallowed',
    sg: 'beginFullscreen',
    tg: 'canPlay',
    ug: 'canPlayThrough',
    CLICK: 'click',
    DURATION_CHANGE: 'durationChange',
    Fg: 'end',
    Gg: 'endFullscreen',
    Ee: 'error',
    Kg: 'focusSkipButton',
    Je: 'loadStart',
    LOADED: 'loaded',
    qh: 'mediaLoadTimeout',
    rh: 'mediaPlaybackTimeout',
    Ld: 'pause',
    Ah: 'play',
    Bh: 'playing',
    Jh: 'seeked',
    Kh: 'seeking',
    Lh: 'skip',
    Ue: 'skipShown',
    Nh: 'stalled',
    Md: 'start',
    Uh: 'timeUpdate',
    Sh: 'timedMetadata',
    ei: 'volumeChange',
    fi: 'waiting',
    Lg: 'fullyLoaded',
  };
  var iw = function (a) {
      this.h = a;
      this.j = hw(a);
    },
    hw = function (a) {
      return new Map(
        a.h.split('/').reduce(function (b, c, d) {
          d % 2 ? b[b.length - 1].push(c) : b.push([c]);
          return b;
        }, [])
      );
    };
  iw.prototype.getId = function () {
    return jw(this, 'id');
  };
  var jw = function (a, b) {
    var c = a.h.l.get(b);
    return c ? c : (a = a.j.get(b)) ? a : null;
  };
  var kw = function () {};
  var S = {},
    lw =
      ((S[18] = -1),
      (S[22] = -1),
      (S[43] = 350),
      (S[44] = 350),
      (S[45] = 350),
      (S[59] = -1),
      (S[133] = 350),
      (S[134] = 350),
      (S[135] = 350),
      (S[136] = 350),
      (S[139] = 50),
      (S[140] = 50),
      (S[141] = 50),
      (S[160] = 350),
      (S[242] = 150),
      (S[243] = 150),
      (S[244] = 150),
      (S[245] = 150),
      (S[249] = 50),
      (S[250] = 50),
      (S[251] = 50),
      (S[278] = 150),
      (S[342] = -1),
      (S[343] = -1),
      (S[344] = -1),
      (S[345] = -1),
      (S[346] = -1),
      (S[347] = -1),
      (S[396] = -1),
      (S[398] = -1),
      S),
    mw = {},
    nw =
      ((mw[18] = !1),
      (mw[22] = !1),
      (mw[43] = !0),
      (mw[44] = !0),
      (mw[45] = !0),
      (mw[59] = !1),
      (mw[133] = !0),
      (mw[134] = !0),
      (mw[135] = !0),
      (mw[136] = !0),
      (mw[139] = !0),
      (mw[140] = !0),
      (mw[141] = !0),
      (mw[160] = !0),
      (mw[242] = !0),
      (mw[243] = !0),
      (mw[244] = !0),
      (mw[245] = !0),
      (mw[249] = !0),
      (mw[250] = !0),
      (mw[251] = !0),
      (mw[278] = !0),
      (mw[342] = !1),
      (mw[343] = !1),
      (mw[344] = !1),
      (mw[345] = !1),
      (mw[346] = !1),
      (mw[347] = !1),
      (mw[396] = !0),
      (mw[398] = !0),
      mw),
    ow = {},
    pw =
      ((ow[18] = 'video/mp4'),
      (ow[22] = 'video/mp4'),
      (ow[43] = 'video/webm'),
      (ow[44] = 'video/webm'),
      (ow[45] = 'video/webm'),
      (ow[59] = 'video/mp4'),
      (ow[133] = 'video/mp4'),
      (ow[134] = 'video/mp4'),
      (ow[135] = 'video/mp4'),
      (ow[136] = 'video/mp4'),
      (ow[139] = 'audio/mp4'),
      (ow[140] = 'audio/mp4'),
      (ow[141] = 'audio/mp4'),
      (ow[160] = 'video/mp4'),
      (ow[242] = 'video/webm'),
      (ow[243] = 'video/webm'),
      (ow[244] = 'video/webm'),
      (ow[245] = 'video/webm'),
      (ow[249] = 'audio/webm'),
      (ow[250] = 'audio/webm'),
      (ow[251] = 'audio/webm'),
      (ow[278] = 'video/webm'),
      (ow[342] = 'video/mp4'),
      (ow[343] = 'video/mp4'),
      (ow[344] = 'video/mp4'),
      (ow[345] = 'video/mp4'),
      (ow[346] = 'video/mp4'),
      (ow[347] = 'video/mp4'),
      (ow[396] = 'video/mp4'),
      (ow[398] = 'video/mp4'),
      ow),
    qw = {},
    rw =
      ((qw[18] = 'avc1.42001E, mp4a.40.2'),
      (qw[22] = 'avc1.64001F, mp4a.40.2'),
      (qw[43] = 'vp8, vorbis'),
      (qw[44] = 'vp8, vorbis'),
      (qw[45] = 'vp8, vorbis'),
      (qw[59] = 'avc1.4D001F, mp4a.40.2'),
      (qw[133] = 'avc1.4D401E'),
      (qw[134] = 'avc1.4D401E'),
      (qw[135] = 'avc1.4D401E'),
      (qw[136] = 'avc1.4D401E'),
      (qw[139] = 'mp4a.40.2'),
      (qw[140] = 'mp4a.40.2'),
      (qw[141] = 'mp4a.40.2'),
      (qw[160] = 'avc1.4D401E'),
      (qw[242] = 'vp9'),
      (qw[243] = 'vp9'),
      (qw[244] = 'vp9'),
      (qw[245] = 'vp9'),
      (qw[249] = 'opus'),
      (qw[250] = 'opus'),
      (qw[251] = 'opus'),
      (qw[278] = 'vp9'),
      (qw[342] = 'avc1.42E01E, mp4a.40.2'),
      (qw[343] = 'avc1.42E01E, mp4a.40.2'),
      (qw[344] = 'avc1.42E01E, mp4a.40.2'),
      (qw[345] = 'avc1.42E01E, mp4a.40.2'),
      (qw[346] = 'avc1.42E01E, mp4a.40.2'),
      (qw[347] = 'avc1.4D001F, mp4a.40.2'),
      (qw[396] = 'av01.0.05M.08'),
      (qw[398] = 'av01.0.05M.08'),
      qw);
  var tw = RegExp('/itag/(\\d+)/');
  function uw(a) {
    var b = parseInt(Qg(a, 'itag'), 10);
    return b
      ? b
      : (a = a.match(tw)) && 2 == a.length
      ? parseInt(a[1], 10)
      : null;
  }
  function vw(a) {
    var b = pw[a];
    a = rw[a];
    b
      ? ((b = ng(b).toLowerCase()),
        (b = a ? b + '; codecs="' + ng(a) + '"' : b))
      : (b = '');
    return b;
  }
  function ww(a, b) {
    if ('function' === typeof CustomEvent)
      return new CustomEvent(a, { detail: b });
    var c = document.createEvent('CustomEvent');
    c.initCustomEvent(a, !1, !0, b);
    return c;
  }
  var xw = ['doubleclick.net'];
  function yw() {
    if (zb() || z('iPad') || z('iPod')) return !1;
    if (z('Android')) {
      if (void 0 === Su) {
        a: {
          if (void 0 === Qu) {
            if (Uu) {
              var a = -1 != Tu().indexOf('Safari');
              var b = new R(window.location.href).l.zb('js');
              b: {
                if (
                  (b = b.length ? b[0] : '') &&
                  0 == b.lastIndexOf('afma-', 0)
                ) {
                  var c = b.lastIndexOf('v');
                  if (
                    -1 < c &&
                    (b = b
                      .substr(c + 1)
                      .match(/^(\d+\.\d+\.\d+|^\d+\.\d+|^\d+)(-.*)?$/))
                  ) {
                    b = b[1];
                    break b;
                  }
                }
                b = '0.0.0';
              }
              if (!a || '0.0.0' !== b) {
                a = Qu = !0;
                break a;
              }
            }
            Qu = !1;
          }
          a = Qu;
        }
        a ||
          (void 0 === Ru && (Ru = -1 != Tu().indexOf('afma-sdk-a') ? !0 : !1),
          (a = Ru));
        Su = a;
      }
      return Su ? !0 : Kg() ? !1 : zw();
    }
    a = z('Macintosh') || z('Linux') || z('Windows') || z('CrOS');
    return (Ai(Dj) || Ai(Bj) || Ai(Cj)) && a && yb() ? zw() : !1;
  }
  function zw() {
    var a = !1,
      b = new R(window.location.href).j;
    xw.forEach(function (c) {
      b.includes(c) && (a = !0);
    });
    return a;
  }
  function Aw(a) {
    for (var b = 0, c = 0; c < a.length; c++)
      b = (Math.imul(31, b) + a.charCodeAt(c)) | 0;
    return b.toString();
  }
  var Bw,
    Ew = function (a, b, c) {
      if ('number' === typeof a) var d = { name: Cw(a) };
      else (d = a), (a = Dw(a.name));
      this.code = a;
      this.h = d;
      b = 'Error ' + b + ': ' + this.getName();
      c && (b += ', ' + c);
      $a.call(this, b);
    };
  Ya(Ew, $a);
  Ew.prototype.getName = function () {
    return this.h.name || '';
  };
  var Fw = {
      We: 1,
      vh: 2,
      NOT_FOUND_ERR: 3,
      Ae: 4,
      De: 5,
      wh: 6,
      Ve: 7,
      ABORT_ERR: 8,
      Se: 9,
      Wh: 10,
      TIMEOUT_ERR: 11,
      Re: 12,
      INVALID_ACCESS_ERR: 13,
      INVALID_STATE_ERR: 14,
    },
    Gw = (v.h || v.j || Fw).We,
    Hw = (v.h || v.j || Fw).NOT_FOUND_ERR,
    Iw = (v.h || v.j || Fw).Ae,
    Jw = (v.h || v.j || Fw).De,
    Kw = (v.h || v.j || Fw).Ve,
    Lw = (v.h || v.j || Fw).ABORT_ERR,
    Mw = (v.h || v.j || Fw).Se,
    Nw = (v.h || v.j || Fw).TIMEOUT_ERR,
    Ow = (v.h || v.j || Fw).Re,
    Pw = (v.DOMException || Fw).INVALID_ACCESS_ERR,
    Qw = (v.DOMException || Fw).INVALID_STATE_ERR,
    Dw = function (a) {
      switch (a) {
        case 'UnknownError':
          return Gw;
        case 'NotFoundError':
          return Hw;
        case 'ConstraintError':
          return Iw;
        case 'DataError':
          return Jw;
        case 'TransactionInactiveError':
          return Kw;
        case 'AbortError':
          return Lw;
        case 'ReadOnlyError':
          return Mw;
        case 'TimeoutError':
          return Nw;
        case 'QuotaExceededError':
          return Ow;
        case 'InvalidAccessError':
          return Pw;
        case 'InvalidStateError':
          return Qw;
        default:
          return Gw;
      }
    },
    Cw = function (a) {
      switch (a) {
        case Gw:
          return 'UnknownError';
        case Hw:
          return 'NotFoundError';
        case Iw:
          return 'ConstraintError';
        case Jw:
          return 'DataError';
        case Kw:
          return 'TransactionInactiveError';
        case Lw:
          return 'AbortError';
        case Mw:
          return 'ReadOnlyError';
        case Nw:
          return 'TimeoutError';
        case Ow:
          return 'QuotaExceededError';
        case Pw:
          return 'InvalidAccessError';
        case Qw:
          return 'InvalidStateError';
        default:
          return 'UnknownError';
      }
    },
    Rw = function (a, b) {
      return 'error' in a
        ? new Ew(a.error, b)
        : new Ew({ name: 'UnknownError' }, b);
    },
    Sw = function (a, b) {
      return 'name' in a
        ? new Ew(a, b + ': ' + a.message)
        : new Ew({ name: 'UnknownError' }, b);
    };
  var Tw = function (a) {
      this.h = a;
    },
    Uw = v.IDBKeyRange || v.webkitIDBKeyRange;
  function Vw() {} /*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
  var Ww = function (a, b) {
    this.A = [];
    this.H = a;
    this.G = b || null;
    this.o = this.l = !1;
    this.j = void 0;
    this.K = this.J = this.C = !1;
    this.B = 0;
    this.h = null;
    this.I = 0;
  };
  Ya(Ww, Vw);
  Ww.prototype.cancel = function (a) {
    if (this.l) this.j instanceof Ww && this.j.cancel();
    else {
      if (this.h) {
        var b = this.h;
        delete this.h;
        a ? b.cancel(a) : (b.I--, 0 >= b.I && b.cancel());
      }
      this.H ? this.H.call(this.G, this) : (this.K = !0);
      this.l || Xw(this, new Yw(this));
    }
  };
  Ww.prototype.F = function (a, b) {
    this.C = !1;
    Zw(this, a, b);
  };
  var Zw = function (a, b, c) {
      a.l = !0;
      a.j = c;
      a.o = !b;
      $w(a);
    },
    bx = function (a) {
      if (a.l) {
        if (!a.K) throw new ax(a);
        a.K = !1;
      }
    };
  Ww.prototype.callback = function (a) {
    bx(this);
    Zw(this, !0, a);
  };
  var Xw = function (a, b) {
    bx(a);
    Zw(a, !1, b);
  };
  Ww.prototype.Sc = function (a) {
    return cx(this, a, null);
  };
  var cx = function (a, b, c, d) {
    a.A.push([b, c, d]);
    a.l && $w(a);
    return a;
  };
  Ww.prototype.then = function (a, b, c) {
    var d,
      e,
      f = new bl(function (g, h) {
        e = g;
        d = h;
      });
    cx(
      this,
      e,
      function (g) {
        g instanceof Yw ? f.cancel() : d(g);
        return dx;
      },
      this
    );
    return f.then(a, b, c);
  };
  Ww.prototype.$goog_Thenable = !0;
  var ex = function (a) {
      return Gb(a.A, function (b) {
        return 'function' === typeof b[1];
      });
    },
    dx = {},
    $w = function (a) {
      if (a.B && a.l && ex(a)) {
        var b = a.B,
          c = fx[b];
        c && (v.clearTimeout(c.h), delete fx[b]);
        a.B = 0;
      }
      a.h && (a.h.I--, delete a.h);
      b = a.j;
      for (var d = (c = !1); a.A.length && !a.C; ) {
        var e = a.A.shift(),
          f = e[0],
          g = e[1];
        e = e[2];
        if ((f = a.o ? g : f))
          try {
            var h = f.call(e || a.G, b);
            h === dx && (h = void 0);
            void 0 !== h &&
              ((a.o = a.o && (h == b || h instanceof Error)), (a.j = b = h));
            if (
              $k(b) ||
              ('function' === typeof v.Promise && b instanceof v.Promise)
            )
              (d = !0), (a.C = !0);
          } catch (k) {
            (b = k), (a.o = !0), ex(a) || (c = !0);
          }
      }
      a.j = b;
      d &&
        ((h = Va(a.F, a, !0)),
        (d = Va(a.F, a, !1)),
        b instanceof Ww ? (cx(b, h, d), (b.J = !0)) : b.then(h, d));
      c && ((b = new gx(b)), (fx[b.h] = b), (a.B = b.h));
    },
    ax = function () {
      $a.call(this);
    };
  Ya(ax, $a);
  ax.prototype.message = 'Deferred has already fired';
  ax.prototype.name = 'AlreadyCalledError';
  var Yw = function () {
    $a.call(this);
  };
  Ya(Yw, $a);
  Yw.prototype.message = 'Deferred was canceled';
  Yw.prototype.name = 'CanceledError';
  var gx = function (a) {
    this.h = v.setTimeout(Va(this.l, this), 0);
    this.j = a;
  };
  gx.prototype.l = function () {
    delete fx[this.h];
    throw this.j;
  };
  var fx = {};
  var hx = function () {
    O.call(this);
  };
  Ya(hx, O);
  hx.prototype.h = null;
  hx.prototype.next = function (a) {
    if (a) this.h['continue'](a);
    else this.h['continue']();
  };
  hx.prototype.remove = function () {
    var a = new Ww();
    try {
      var b = this.h['delete']();
    } catch (c) {
      return Xw(a, Sw(c, 'deleting via cursor')), a;
    }
    b.onsuccess = function () {
      a.callback();
    };
    b.onerror = function (c) {
      Xw(a, Rw(c.target, 'deleting via cursor'));
    };
    return a;
  };
  var ix = function (a, b) {
    var c = new hx();
    try {
      var d = a.openCursor(b ? b.h : null);
    } catch (e) {
      throw (c.W(), Sw(e, a.name));
    }
    d.onsuccess = function (e) {
      c.h = e.target.result || null;
      c.h ? c.dispatchEvent('n') : c.dispatchEvent('c');
    };
    d.onerror = function () {
      c.dispatchEvent('e');
    };
    return c;
  };
  var jx = function (a) {
    this.h = a;
  };
  jx.prototype.getName = function () {
    return this.h.name;
  };
  var kx = function (a, b, c) {
    var d = new Ww();
    try {
      var e = a.h.get(c);
    } catch (f) {
      return (b += ' with key ' + Rg(c)), Xw(d, Sw(f, b)), d;
    }
    e.onsuccess = function (f) {
      d.callback(f.target.result);
    };
    e.onerror = function (f) {
      b += ' with key ' + Rg(c);
      Xw(d, Rw(f.target, b));
    };
    return d;
  };
  jx.prototype.get = function (a) {
    return kx(this, 'getting from index ' + this.getName(), a);
  };
  var lx = function (a, b) {
    return ix(a.h, b);
  };
  var mx = function (a) {
    this.h = a;
  };
  mx.prototype.getName = function () {
    return this.h.name;
  };
  var nx = function (a, b, c, d, e) {
      var f = new Ww();
      try {
        var g = e ? a.h[b](d, e) : a.h[b](d);
      } catch (h) {
        return (
          (c += Rg(d)), e && (c += ', with key ' + Rg(e)), Xw(f, Sw(h, c)), f
        );
      }
      g.onsuccess = function (h) {
        f.callback(h.target.result);
      };
      g.onerror = function (h) {
        c += Rg(d);
        e && (c += ', with key ' + Rg(e));
        Xw(f, Rw(h.target, c));
      };
      return f;
    },
    ox = function (a, b) {
      return nx(a, 'put', 'putting into ' + a.getName() + ' with value', b);
    };
  mx.prototype.add = function (a, b) {
    return nx(
      this,
      'add',
      'adding into ' + this.getName() + ' with value ',
      a,
      b
    );
  };
  mx.prototype.remove = function (a) {
    var b = new Ww();
    try {
      var c = this.h['delete'](a instanceof Tw ? a.h : a);
    } catch (e) {
      return (
        (c = 'removing from ' + this.getName() + ' with key ' + Rg(a)),
        Xw(b, Sw(e, c)),
        b
      );
    }
    c.onsuccess = function () {
      b.callback();
    };
    var d = this;
    c.onerror = function (e) {
      var f = 'removing from ' + d.getName() + ' with key ' + Rg(a);
      Xw(b, Rw(e.target, f));
    };
    return b;
  };
  mx.prototype.get = function (a) {
    var b = new Ww();
    try {
      var c = this.h.get(a);
    } catch (e) {
      return (
        (c = 'getting from ' + this.getName() + ' with key ' + Rg(a)),
        Xw(b, Sw(e, c)),
        b
      );
    }
    c.onsuccess = function (e) {
      b.callback(e.target.result);
    };
    var d = this;
    c.onerror = function (e) {
      var f = 'getting from ' + d.getName() + ' with key ' + Rg(a);
      Xw(b, Rw(e.target, f));
    };
    return b;
  };
  mx.prototype.clear = function () {
    var a = 'clearing store ' + this.getName(),
      b = new Ww();
    try {
      var c = this.h.clear();
    } catch (d) {
      return Xw(b, Sw(d, a)), b;
    }
    c.onsuccess = function () {
      b.callback();
    };
    c.onerror = function (d) {
      Xw(b, Rw(d.target, a));
    };
    return b;
  };
  var px = function (a) {
    try {
      return new jx(a.h.index('timestamp'));
    } catch (b) {
      throw Sw(b, 'getting index timestamp');
    }
  };
  var qx = function (a, b) {
    O.call(this);
    this.h = a;
    this.l = b;
    this.j = new Cv(this);
    this.j.P(this.h, 'complete', Va(this.dispatchEvent, this, 'complete'));
    this.j.P(this.h, 'abort', Va(this.dispatchEvent, this, 'abort'));
    this.j.P(this.h, 'error', this.Ge);
  };
  Ya(qx, O);
  l = qx.prototype;
  l.Ge = function (a) {
    a.target instanceof Ew
      ? this.dispatchEvent({ type: 'error', target: a.target })
      : this.dispatchEvent({
          type: 'error',
          target: Rw(a.target, 'in transaction'),
        });
  };
  l.objectStore = function (a) {
    try {
      return new mx(this.h.objectStore(a));
    } catch (b) {
      throw Sw(b, 'getting object store ' + a);
    }
  };
  l.commit = function (a) {
    if (this.h.commit || !a)
      try {
        this.h.commit();
      } catch (b) {
        throw Sw(b, 'cannot commit the transaction');
      }
  };
  l.wait = function () {
    var a = new Ww();
    Bk(this, 'complete', Va(a.callback, a));
    var b = Bk(this, 'abort', function () {
      Kk(c);
      Xw(a, new Ew(Lw, 'waiting for transaction to complete'));
    });
    var c = Bk(this, 'error', function (e) {
      Kk(b);
      Xw(a, e.target);
    });
    var d = this.l;
    return a.Sc(function () {
      return d;
    });
  };
  l.abort = function () {
    this.h.abort();
  };
  l.N = function () {
    qx.Ba.N.call(this);
    this.j.W();
  };
  var rx = function (a) {
    O.call(this);
    this.h = a;
    this.j = new Cv(this);
    this.j.P(this.h, 'abort', Va(this.dispatchEvent, this, 'abort'));
    this.j.P(this.h, 'error', this.He);
    this.j.P(this.h, 'versionchange', this.lf);
    this.j.P(this.h, 'close', Va(this.dispatchEvent, this, 'close'));
  };
  Ya(rx, O);
  l = rx.prototype;
  l.nd = !0;
  l.He = function (a) {
    a = (a = a.target) && a.error;
    this.dispatchEvent({ type: 'error', errorCode: a && a.severity });
  };
  l.lf = function (a) {
    this.dispatchEvent(new sx(a.oldVersion, a.newVersion));
  };
  l.close = function () {
    this.nd && (this.h.close(), (this.nd = !1));
  };
  l.getName = function () {
    return this.h.name;
  };
  l.getVersion = function () {
    return Number(this.h.version);
  };
  var tx = function (a) {
    var b = ['MediaSourceVideoChunk'];
    try {
      var c = a.h.transaction(b, 'readwrite');
      return new qx(c, a);
    } catch (d) {
      throw Sw(d, 'creating transaction');
    }
  };
  rx.prototype.N = function () {
    rx.Ba.N.call(this);
    this.j.W();
  };
  var sx = function (a, b) {
    mk.call(this, 'versionchange');
    this.oldVersion = a;
    this.newVersion = b;
  };
  Ya(sx, mk);
  var ux = function (a) {
    var b = new Ww();
    void 0 == Bw &&
      (Bw =
        v.indexedDB || v.mozIndexedDB || v.webkitIndexedDB || v.moz_indexedDB);
    var c = Bw.open('VideoChunkPersistentStorage', 5);
    c.onsuccess = function (d) {
      d = new rx(d.target.result);
      b.callback(d);
    };
    c.onerror = function (d) {
      Xw(b, Rw(d.target, 'opening database VideoChunkPersistentStorage'));
    };
    c.onupgradeneeded = function (d) {
      if (a) {
        var e = new rx(d.target.result);
        a(
          new sx(d.oldVersion, d.newVersion),
          e,
          new qx(d.target.transaction, e)
        );
      }
    };
    c.onblocked = function () {};
    return b;
  };
  var vx = { ci: 'videoId', nh: 'itag', Mh: 'source', Oh: 'startIndex' },
    wx = function () {
      O.call(this);
      this.h = null;
    };
  t(wx, O);
  wx.prototype.initialize = function () {
    var a = this;
    return Promise.resolve(ux(this.j)).then(
      function (b) {
        return (a.h = b);
      },
      function (b) {
        M(L.h(), 'codf', b.message);
      }
    );
  };
  var xx = function (a) {
    return null !== a.h && a.h.nd;
  };
  wx.prototype.close = function () {
    var a = this;
    return new Promise(function (b) {
      return yx(a, b);
    })
      .then(function () {
        return zx();
      })
      .then(function () {
        return a.h.close();
      });
  };
  var zx = function () {
      return 'storage' in navigator && 'estimate' in navigator.storage
        ? navigator.storage.estimate().then(function (a) {
            M(L.h(), 'csue', String(a.usage));
          })
        : Promise.resolve(void 0);
    },
    Dx = function (a, b) {
      b = Ax(b);
      if (!b) return Promise.resolve(null);
      var c = Bx(b);
      return Cx(a, c, b.lmt);
    },
    Fx = function (a, b, c, d) {
      if ((c = Ax(c))) {
        var e = Bx(c),
          f = c.startIndex;
        Ex(a, {
          cacheId: e,
          startIndex: f,
          endIndex: f + b.byteLength - 1,
          lmt: c.lmt,
          timestamp: new Date(Date.now()),
          isLastVideoChunk: d,
          video: b,
        });
      } else Promise.resolve(void 0);
    };
  wx.prototype.j = function (a, b) {
    if (b.h.objectStoreNames.contains('MediaSourceVideoChunk'))
      try {
        b.h.deleteObjectStore('MediaSourceVideoChunk');
      } catch (d) {
        throw Sw(d, 'deleting object store MediaSourceVideoChunk');
      }
    a = { keyPath: 'cacheId' };
    try {
      var c = new mx(b.h.createObjectStore('MediaSourceVideoChunk', a));
    } catch (d) {
      throw Sw(d, 'creating object store MediaSourceVideoChunk');
    }
    b = { unique: !1 };
    try {
      c.h.createIndex('timestamp', 'timestamp', b);
    } catch (d) {
      throw Sw(d, 'creating new index timestamp with key path timestamp');
    }
  };
  var yx = function (a, b) {
      var c = new Date(Date.now());
      c.setDate(c.getDate() - 30);
      c = new Tw(Uw.upperBound(c, void 0));
      var d = lx(px(tx(a.h).objectStore('MediaSourceVideoChunk')), c),
        e = d.P('n', function () {
          d.remove();
          d.next();
        });
      Bk(d, 'c', function () {
        Kk(e);
        b();
      });
    },
    Ax = function (a) {
      var b = new iw(a);
      a = b.getId();
      var c = jw(b, 'itag'),
        d = jw(b, 'source'),
        e = jw(b, 'lmt');
      (b = b.h.l.get('range'))
        ? ((b = b.split('-')[0]), (b = !b || isNaN(b) ? null : parseInt(b, 10)))
        : (b = null);
      var f = [];
      a
        ? c
          ? d
            ? e
              ? null === b && f.push('startIndex')
              : f.push('lmt')
            : f.push('source')
          : f.push('itag')
        : f.push('videoId');
      return 0 < f.length
        ? (M(L.h(), 'civp', f.join('-')), null)
        : { videoId: a, itag: c, source: d, lmt: e, startIndex: b + 0 };
    },
    Bx = function (a) {
      var b = Object.keys(vx)
        .sort()
        .map(function (c) {
          return a[vx[c]];
        })
        .join(',');
      return Aw(b);
    },
    Cx = function (a, b, c) {
      var d = tx(a.h).objectStore('MediaSourceVideoChunk');
      return Promise.resolve(d.get(b)).then(
        function (e) {
          if (!e) return M(L.h(), 'cenf', '1'), null;
          if (e.lmt !== c)
            return (
              M(L.h(), 'cdl', '1'),
              d.remove(b).then(null, function (f) {
                M(L.h(), 'crdlvf', f.message);
              }),
              null
            );
          M(L.h(), 'cefml', '1');
          return {
            endIndex: e.endIndex,
            isLastVideoChunk: e.isLastVideoChunk,
            video: e.video,
          };
        },
        function (e) {
          M(L.h(), 'cgvf', e.message);
        }
      );
    },
    Ex = function (a, b) {
      a = tx(a.h).objectStore('MediaSourceVideoChunk');
      Promise.resolve(ox(a, b)).then(
        function () {
          M(L.h(), 'cavs', '1');
        },
        function (c) {
          M(L.h(), 'cavf', c.message);
        }
      );
    };
  var Gx = function (a) {
    O.call(this);
    var b = this;
    this.F = new R(a);
    this.G = this.h = this.l = this.j = 0;
    this.A = (this.C = yw()) ? Pu(wx) : null;
    Ve(this, function () {
      Ue(b.A);
    });
    this.H = this.C ? this.A.initialize() : null;
    this.B = null;
  };
  t(Gx, O);
  var Ix = function (a) {
      Ga(function (b) {
        if (1 == b.h) return 2 === a.h && (a.h = 1), xa(b, Hx(a), 4);
        var c = 3 < a.G;
        if (c && null !== a.B) {
          var d = ww('media_source_error', {
            code:
              0 < a.l
                ? MediaError.MEDIA_ERR_NETWORK
                : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
            message:
              'Response code "' +
              a.B +
              '" with ' +
              a.j +
              ' bytes requested and ' +
              a.l +
              ' bytes loaded',
          });
          a.dispatchEvent(d);
        }
        a.l < a.j && 3 !== a.h && !c
          ? (b.h = 1)
          : (3 !== a.h && (a.h = 0), (b.h = 0));
      });
    },
    Hx = function (a) {
      var b;
      return Ga(function (c) {
        switch (c.h) {
          case 1:
            b = a.l + '-' + (a.j - 1);
            ru(a.F, 'range', b);
            if (!a.C) {
              c.h = 2;
              break;
            }
            return xa(c, a.H, 3);
          case 3:
            return c.return(Jx(a));
          case 2:
            return (c.j = 4), xa(c, Kx(a), 6);
          case 6:
            c.h = 0;
            c.j = 0;
            break;
          case 4:
            ya(c), a.G++, (c.h = 0);
        }
      });
    },
    Jx = function (a) {
      var b;
      return Ga(function (c) {
        switch (c.h) {
          case 1:
            return xa(c, Dx(a.A, a.F), 2);
          case 2:
            if ((b = c.A)) {
              b.isLastVideoChunk && (a.h = 3);
              Lx(a, b.video, 0);
              c.h = 0;
              break;
            }
            c.j = 4;
            return xa(c, Kx(a), 6);
          case 6:
            c.h = 0;
            c.j = 0;
            break;
          case 4:
            ya(c), a.G++, (c.h = 0);
        }
      });
    },
    Kx = function (a) {
      return new Promise(function (b, c) {
        var d = new XMLHttpRequest(),
          e = 0,
          f = a.j - a.l;
        d.addEventListener('load', function () {
          ki('lvlcl');
          if (400 <= d.status)
            return (
              M(L.h(), 'lvlxes', d.status.toString()), (a.B = d.status), c()
            );
          var g = d.response;
          g.byteLength < f && (a.h = 3);
          var h = Lx(a, g, e);
          e += h;
          a.C && 0 < g.byteLength && Fx(a.A, g, a.F, g.byteLength < f);
          b();
        });
        d.addEventListener('timeout', function () {
          ki('lvlct');
          a.B = d.status;
          c();
        });
        d.addEventListener('error', function () {
          ki('lvlce');
          a.B = d.status;
          c();
        });
        d.addEventListener('progress', function () {
          if (400 <= d.status) a.B = d.status;
          else {
            var g = Lx(a, d.response, e);
            e += g;
          }
        });
        d.responseType = 'arraybuffer';
        d.open('get', a.F.toString());
        d.send(null);
      });
    },
    Lx = function (a, b, c) {
      if (null === b) return 0;
      b = b.slice(c);
      a.l += b.byteLength;
      a.dispatchEvent({ type: 'progress', df: b });
      return b.byteLength;
    };
  Gx.prototype.N = function () {
    this.C && xx(this.A) && this.A.close();
    O.prototype.N.call(this);
  };
  function Mx() {
    return !!window.MediaSource;
  }
  function Nx(a) {
    return [43, 44, 45].includes(a) && tc
      ? !1
      : nw[a]
      ? ((a = vw(a)), !!a && Mx() && MediaSource.isTypeSupported(a))
      : !1;
  }
  var Ox = function () {};
  Ox.prototype.h = function (a, b, c) {
    return 0 === c ? 1e6 : 5e3 > b - a ? 3e5 : 0;
  };
  var Px = function (a, b, c, d) {
    this.url = a;
    this.mimeType = b;
    this.h = c;
    this.j = void 0 === d ? null : d;
  };
  var Sx = function (a) {
    O.call(this);
    var b = this;
    this.j = a;
    this.A = this.j.map(function (c) {
      return Pu(Gx, c.url);
    });
    this.ga = Pu(MediaSource);
    this.h = [];
    this.l = window.URL.createObjectURL(this.ga);
    this.G = 0;
    this.F = !1;
    this.C = function () {
      return Qx(b);
    };
    this.ga.addEventListener('sourceopen', this.C);
    this.H = Rx(this);
    this.B = 0;
  };
  t(Sx, O);
  var Rx = function (a) {
      for (var b = [], c = 0; c < a.j.length; ++c) b.push(new Ox());
      return b;
    },
    Qx = function (a) {
      ki('msms_oso');
      for (var b = {}, c = 0; c < a.j.length; b = { Ib: b.Ib, Hb: b.Hb }, ++c) {
        var d = a.j[c];
        M(L.h(), 'msms_mime' + c, d.mimeType);
        M(L.h(), 'msms_cs' + c, d.h.toString());
        b.Ib = a.ga.addSourceBuffer(d.mimeType);
        b.Hb = a.A[c];
        b.Hb.P(
          'progress',
          (function (e) {
            return function (f) {
              var g = e.Hb;
              f = f.df;
              0 !== f.byteLength && e.Ib.appendBuffer(f);
              3 === g.h && (a.G++, a.G === a.h.length && Tx(a));
            };
          })(b)
        );
        b.Hb.P('media_source_error', function (e) {
          a.dispatchEvent(e);
        });
        b.Ib ? a.h.push(b.Ib) : ki('msms_sbf' + c);
      }
      M(L.h(), 'msms_ns', a.h.length.toString());
      a.F = !0;
      Ux(a);
    },
    Tx = function (a) {
      Promise.all(
        a.h.map(function (b) {
          return new Promise(function (c) {
            b.updating
              ? b.addEventListener('updateend', function () {
                  c();
                })
              : c();
          });
        })
      ).then(function () {
        return a.ga.endOfStream();
      });
    },
    Ux = function (a) {
      if (a.F)
        for (var b = 0; b < a.j.length; ++b) {
          var c = a.A[b],
            d = a.h[b];
          d = 0 === d.buffered.length ? 0 : 1e3 * d.buffered.end(0);
          d = a.H[b].h(a.B, d, c.j);
          0 !== d &&
            (1 === c.h
              ? ((c.j += d), (c.h = 2))
              : 0 === c.h && ((c.j += d), (c.h = 1), Ix(c)));
        }
    };
  Sx.prototype.N = function () {
    this.l && window.URL.revokeObjectURL(this.l);
    for (var a = r(this.A), b = a.next(); !b.done; b = a.next()) b.value.W();
    this.ga.removeEventListener('sourceopen', this.C);
    O.prototype.N.call(this);
  };
  var Vx = RegExp(
      '/pagead/conversion|/pagead/adview|/pagead/gen_204|/activeview?|csi.gstatic.com/csi|google.com/pagead/xsul|google.com/ads/measurement/l|googleads.g.doubleclick.net/pagead/ide_cookie|googleads.g.doubleclick.net/xbbe/pixel'
    ),
    Wx = RegExp('outstream.min.js'),
    Xx = RegExp('outstream.min.css'),
    Yx = RegExp('fonts.gstatic.com'),
    Zx = RegExp(
      'googlevideo.com/videoplayback|c.2mdn.net/videoplayback|gcdn.2mdn.net/videoplayback'
    ),
    $x = RegExp('custom.elements.min.js');
  function ay(a, b) {
    var c = 0,
      d = 0,
      e = 0,
      f = 0,
      g = 0,
      h = 0,
      k = 0,
      n = !1,
      m = !1;
    if (
      'function' === typeof Ma('performance.getEntriesByType', v) &&
      'transferSize' in v.PerformanceResourceTiming.prototype
    ) {
      var x = v.performance.getEntriesByType('resource');
      x = r(x);
      for (var u = x.next(); !u.done; u = x.next())
        (u = u.value),
          Vx.test(u.name) ||
            ((f += 1),
            u.transferSize
              ? ((c += u.transferSize),
                u.encodedBodySize &&
                  u.transferSize < u.encodedBodySize &&
                  ((h += 1),
                  (e += u.encodedBodySize),
                  Wx.test(u.name) && (n = !0),
                  Xx.test(u.name) && (m = !0)),
                Zx.test(u.name) && (d += u.transferSize))
              : 0 == u.transferSize && 0 == u.encodedBodySize
              ? $x.test(u.name)
                ? (c += 6686)
                : Yx.test(u.name) ||
                  ((k += 1),
                  ji(L.h(), {
                    event_name: 'unmeasurable_asset',
                    resource_name: u.name,
                    encoded_body_size: u.encodedBodySize,
                    transfer_size: u.transferSize,
                  }))
              : ((g += 1),
                (e += u.encodedBodySize),
                Wx.test(u.name) && (n = !0),
                Xx.test(u.name) && (m = !0)));
      x = 0;
      if (a.duration) {
        for (u = 0; u < a.buffered.length; u++)
          x += a.buffered.end(u) - a.buffered.start(u);
        x = Math.min(x, a.duration);
      }
      ji(L.h(), {
        event_name: b,
        asset_bytes: c,
        video_bytes: d,
        cached_data_bytes: e,
        js_cached: n,
        css_cached: m,
        num_assets: f,
        num_assets_cached: g,
        num_assets_cache_validated: h,
        num_assets_unmeasurable: k,
        video_played_seconds: a.currentTime.toFixed(2),
        video_muted: a.muted,
        video_seconds_loaded: x.toFixed(2),
      });
    } else M(L.h(), 'error', 'reporting_timing_not_supported');
  }
  function by(a) {
    var b = L.h(),
      c = a.getVideoPlaybackQuality && a.getVideoPlaybackQuality();
    c
      ? ((a = a.currentTime),
        M(b, 'vqdf', String(c.droppedVideoFrames)),
        M(b, 'vqtf', String(c.totalVideoFrames)),
        M(b, 'vqfr', String(Math.round(c.totalVideoFrames / a))))
      : M(b, 'vqu', '1');
  }
  var cy = function () {};
  cy.prototype.toString = function () {
    return 'video_mute';
  };
  var dy = new cy();
  var ey = function (a) {
    E.call(this);
    this.B = 1;
    this.l = [];
    this.o = 0;
    this.h = [];
    this.j = {};
    this.F = !!a;
  };
  Ya(ey, E);
  var fy = function (a, b, c) {
      var d = dy.toString(),
        e = a.j[d];
      e || (e = a.j[d] = []);
      var f = a.B;
      a.h[f] = d;
      a.h[f + 1] = b;
      a.h[f + 2] = c;
      a.B = f + 3;
      e.push(f);
    },
    gy = function (a, b, c) {
      var d = a.j[dy.toString()];
      if (d) {
        var e = a.h;
        (d = d.find(function (f) {
          return e[f + 1] == b && e[f + 2] == c;
        })) && a.A(d);
      }
    };
  ey.prototype.A = function (a) {
    var b = this.h[a];
    if (b) {
      var c = this.j[b];
      0 != this.o
        ? (this.l.push(a), (this.h[a + 1] = function () {}))
        : (c && Lb(c, a),
          delete this.h[a],
          delete this.h[a + 1],
          delete this.h[a + 2]);
    }
    return !!b;
  };
  ey.prototype.C = function (a, b) {
    var c = this.j[a];
    if (c) {
      for (
        var d = Array(arguments.length - 1), e = 1, f = arguments.length;
        e < f;
        e++
      )
        d[e - 1] = arguments[e];
      if (this.F)
        for (e = 0; e < c.length; e++) {
          var g = c[e];
          hy(this.h[g + 1], this.h[g + 2], d);
        }
      else {
        this.o++;
        try {
          for (e = 0, f = c.length; e < f && !this.ya(); e++)
            (g = c[e]), this.h[g + 1].apply(this.h[g + 2], d);
        } finally {
          if ((this.o--, 0 < this.l.length && 0 == this.o))
            for (; (c = this.l.pop()); ) this.A(c);
        }
      }
    }
  };
  var hy = function (a, b, c) {
    Yk(function () {
      a.apply(b, c);
    });
  };
  ey.prototype.clear = function (a) {
    if (a) {
      var b = this.j[a];
      b && (b.forEach(this.A, this), delete this.j[a]);
    } else (this.h.length = 0), (this.j = {});
  };
  ey.prototype.N = function () {
    ey.Ba.N.call(this);
    this.clear();
    this.l.length = 0;
  };
  var iy = function (a) {
    E.call(this);
    this.h = new ey(a);
    We(this, this.h);
  };
  Ya(iy, E);
  iy.prototype.clear = function (a) {
    this.h.clear(void 0 !== a ? a.toString() : void 0);
  };
  var jy = function (a) {
    a = void 0 === a ? null : a;
    E.call(this);
    this.h = new Cv(this);
    We(this, this.h);
    this.Db = a;
  };
  t(jy, E);
  var ky = function (a, b, c) {
    a.Db &&
      (fy(a.Db.h, b, c),
      Ve(a, function () {
        gy(a.Db.h, b, c);
      }));
  };
  var ly = function (a, b) {
    jy.call(this, b);
    ky(
      this,
      function (c) {
        a.h.mode = c ? 'showing' : 'hidden';
      },
      this
    );
  };
  t(ly, jy);
  var my = function () {
    O.call(this);
    this.j = new Cv(this);
    We(this, this.j);
  };
  t(my, O);
  var oy = function (a, b, c) {
    c = void 0 === c ? !0 : c;
    my.call(this);
    a.setAttribute('crossorigin', 'anonymous');
    var d = Eg('TRACK');
    d.setAttribute('kind', 'captions');
    d.setAttribute('src', b);
    d.setAttribute('default', '');
    a.appendChild(d);
    this.h = a.textTracks[0];
    ny(this);
    this.h.mode = c ? 'showing' : 'hidden';
  };
  t(oy, my);
  var ny = function (a) {
    var b = a.h;
    b.addEventListener(
      'cuechange',
      function () {
        for (var c = b.cues, d = 0; d < c.length; d++) {
          var e = c[d];
          e.align = 'center';
          e.position = 'auto';
        }
      },
      { once: !0 }
    );
  };
  function py(a, b) {
    if ('undefined' !== typeof ReportingObserver) {
      var c = function (e) {
          e = r(e);
          for (var f = e.next(); !f.done; f = e.next())
            (f = f.value), a(f) && b(f);
        },
        d = new ReportingObserver(c, { buffered: !0 });
      v.addEventListener('pagehide', function () {
        c(d.takeRecords(), d);
        d.disconnect();
      });
      d.observe();
    }
  }
  function qy(a) {
    a = void 0 === a ? null : a;
    py(
      function (b) {
        return b.body && 'HeavyAdIntervention' === b.body.id;
      },
      function (b) {
        var c = b.body.message,
          d = L.h();
        M(d, 'ham', c);
        c.includes('CPU')
          ? M(d, 'hacpu', 'true')
          : c.includes('network') && M(d, 'habytes', 'true');
        a && a(b);
      }
    );
  }
  var ry =
      'autoplay controls crossorigin demuxedaudiosrc demuxedvideosrc loop muted playsinline poster preload src webkit-playsinline x-webkit-airplay'.split(
        ' '
      ),
    sy =
      'autoplay buffered controls crossOrigin currentSrc currentTime defaultMuted defaultPlaybackRate disableRemotePlayback duration ended loop muted networkState onerror onwaitingforkey paused played playsinline poster preload preservesPitch mozPreservesPitch webkitPreservesPitch readyState seekable videoWidth videoHeight volume textTracks canPlayType captureStream getVideoPlaybackQuality load pause play setSinkId oncanplay oncanplaythrough onload onplay onpause onended onfullscreenchange onfullscreenerror addEventListener dispatchEvent removeEventListener requestFullscreen'.split(
        ' '
      ),
    ty = { childList: !0 },
    uy = !RegExp('^\\s*class\\s*\\{\\s*\\}\\s*$').test(
      function () {}.toString()
    ),
    vy = HTMLElement;
  uy &&
    ((vy = function () {
      var a = Object.getPrototypeOf(this).constructor;
      return v.Reflect.construct(HTMLElement, [], a);
    }),
    Object.setPrototypeOf(vy, HTMLElement),
    Object.setPrototypeOf(vy.prototype, HTMLElement.prototype));
  var wy = function (a) {
      if (null !== a) {
        a = r(a);
        for (var b = a.next(); !b.done; b = a.next())
          if (((b = b.value), b.nodeName === 'TRACK'.toString())) return b;
      }
      return null;
    },
    yy = function (a, b) {
      this.code = a;
      this.message = void 0 === b ? '' : b;
    },
    zy = function (a) {
      yy.call(
        this,
        MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
        void 0 === a ? '' : a
      );
    };
  t(zy, yy);
  var Dy = function () {
    var a = vy.call(this) || this;
    M(L.h(), 'ulv', '1');
    a.ga = null;
    a.ie = null;
    a.Od = null;
    a.T = Eg('VIDEO');
    Ay(a);
    a.Db = new iy();
    By(a);
    a.hc = null;
    Cy(a);
    a.attachShadow({ mode: 'open' });
    a.shadowRoot.appendChild(a.T);
    qy(function () {
      M(L.h(), 'has', a.src || a.vb);
      M(L.h(), 'hat', String(a.T.currentTime));
    });
    a.Gc = !1;
    a.me = !1;
    a.Tb = null;
    a.Sa = null;
    a.hg = !1;
    return a;
  };
  t(Dy, vy);
  Dy.prototype.attributeChangedCallback = function (a, b, c) {
    switch (a) {
      case 'src':
        Ey(this, c);
        break;
      case 'demuxedaudiosrc':
      case 'demuxedvideosrc':
        Fy(this);
        break;
      case 'muted':
        this.T[a] = '' === c ? !0 : !!c;
        Gy(this, a, c);
        break;
      default:
        Gy(this, a, c);
    }
  };
  var Gy = function (a, b, c) {
      c !== a.T.getAttribute(b) &&
        (null === c ? a.T.removeAttribute(b) : a.T.setAttribute(b, c));
    },
    Hy = function (a) {
      a.ga &&
        (a.T.removeEventListener('timeupdate', a.Tb), a.ga.W(), (a.ga = null));
    },
    Iy = function (a, b) {
      a.Od = b;
      a.T.dispatchEvent(new Event('error'));
    },
    Ay = function (a) {
      Jy(a);
      Ky(a);
      a.T.addEventListener('loadedmetadata', function () {
        a.Sa = tv(a);
        a.Sa.then(function (b) {
          var c = a.T.videoWidth,
            d = a.T.videoHeight,
            e = b.width,
            f = b.height;
          0 < c &&
            0 < d &&
            0 < e &&
            0 < f &&
            ((b = b.width / b.height),
            (c /= d),
            0.97 <= Math.min(c, b) / Math.max(c, b)
              ? Fl(a.T, { 'object-fit': 'cover' })
              : Fl(a.T, { 'object-fit': 'contain' }));
        });
      });
      a.T.addEventListener('play', function () {
        a.me || (ay(a.T, 'first_play'), (a.me = !0));
      });
      a.T.addEventListener('pause', function () {
        a.Gc || (ay(a.T, 'first_pause'), by(a.T), (a.Gc = !0));
      });
      Ck(v, 'pagehide', function () {
        a.Gc || (ay(a.T, 'first_pause'), by(a.T), (a.Gc = !0));
      });
      a.T.addEventListener('stalled', function () {
        M(L.h(), 'ves', '1');
      });
      new iv(a.T).P('playbackStalled', function () {
        return M(L.h(), 'pbs', '1');
      });
      a.T.addEventListener('media_source_error', function (b) {
        Hy(a);
        b = b.detail;
        Iy(a, new yy(b.code, b.message));
      });
      Ly(a);
    },
    Cy = function (a) {
      var b = wy(a.childNodes);
      b && My(a, b);
      null === a.hc && Ny(a);
    },
    Ny = function (a) {
      if (v.MutationObserver) {
        var b = new MutationObserver(function (c) {
          c = r(c);
          for (var d = c.next(); !d.done; d = c.next())
            if (
              ((d = d.value), 'childList' === d.type && (d = wy(d.addedNodes)))
            ) {
              My(a, d);
              b.disconnect();
              break;
            }
        });
        b.observe(a, ty);
      }
    },
    By = function (a) {
      a.T.addEventListener('volumechange', function () {
        a.Db.h.C(dy.toString(), a.T.muted);
      });
    },
    My = function (a, b) {
      if (null === a.hc && b.hasAttribute('src')) {
        var c = b.getAttribute('src');
        a.hc = new oy(a.T, c, b.hasAttribute('default'));
        new ly(a.hc, a.Db);
        c.includes('kind=asr') && M(L.h(), 'act', '1');
      }
    },
    Ey = function (a, b) {
      if (b !== a.ie) {
        a.ie = b;
        a.hg && b && Zu(b) && (b = $u(b));
        var c = b ? uw(b) : null,
          d = !!c && Nx(c);
        M(L.h(), 'umsem', d ? '1' : '0');
        d
          ? ((b = Pu(Px, b, vw(c), 1e3 * lw[c], null)),
            (a.ga = Pu(Sx, [b])),
            a.ga.P('media_source_error', function (e) {
              e = ww('media_source_error', e.detail);
              a.T.dispatchEvent(e);
            }),
            (a.Tb = function () {
              var e = a.ga;
              e.B = 1e3 * a.T.currentTime;
              Ux(e);
            }),
            a.T.addEventListener('timeupdate', a.Tb),
            Gy(a, 'src', a.ga.l))
          : (Hy(a), Gy(a, 'src', b));
        a.T.load();
      }
    },
    Fy = function (a) {
      a.src &&
        Iy(
          a,
          new yy(
            MediaError.MEDIA_ERR_ABORTED,
            'Setting demuxed src after src is already set.'
          )
        );
      if (!a.Mb && !a.vb && a.ga) Hy(a), Gy(a, 'src', null), a.T.load();
      else if (a.Mb && a.vb) {
        var b = uw(a.Mb),
          c = uw(a.vb);
        if (c && Nx(c))
          if (b && Nx(b)) {
            var d = !!c && Nx(c) && !!b && Nx(b);
            M(L.h(), 'umsed', d ? '1' : '0');
            c = Pu(Px, a.vb, vw(c), -1, null);
            b = Pu(Px, a.Mb, vw(b), -1, null);
            a.ga = Pu(Sx, [c, b]);
            a.ga.P('media_source_error', function (e) {
              e = ww('media_source_error', e.detail);
              a.T.dispatchEvent(e);
            });
            a.Tb = function () {
              var e = a.ga;
              e.B = 1e3 * a.T.currentTime;
              Ux(e);
            };
            a.T.addEventListener('timeupdate', a.Tb);
            Gy(a, 'src', a.ga.l);
            a.T.load();
          } else Iy(a, new zy('Audio itag "' + b + '" not supported.'));
        else Iy(a, new zy('Video itag "' + c + '" not supported.'));
      }
    },
    Jy = function (a) {
      for (
        var b = {}, c = r(sy), d = c.next();
        !d.done;
        b = { Ca: b.Ca, Nc: b.Nc }, d = c.next()
      )
        (b.Ca = d.value),
          b.Ca in a.T &&
            ('function' === typeof a.T[b.Ca]
              ? ((b.Nc = a.T[b.Ca].bind(a.T)),
                Object.defineProperty(a, b.Ca, {
                  set: (function (e) {
                    return function (f) {
                      a.T[e.Ca] = f;
                    };
                  })(b),
                  get: (function (e) {
                    return function () {
                      return e.Nc;
                    };
                  })(b),
                }))
              : Object.defineProperty(a, b.Ca, {
                  set: (function (e) {
                    return function (f) {
                      a.T[e.Ca] = f;
                    };
                  })(b),
                  get: (function (e) {
                    return function () {
                      return a.T[e.Ca];
                    };
                  })(b),
                }));
    },
    Ky = function (a) {
      Object.defineProperty(a, 'error', {
        set: function () {},
        get: function () {
          return a.T.error ? a.T.error : a.Od;
        },
      });
    },
    Ly = function (a) {
      a.T.style.width = Ml();
      a.T.style.height = Ml();
    };
  Dy.prototype.disconnectedCallback = function () {
    if (this.Sa) {
      var a = ov.get(this.Sa);
      rv(a);
    }
    vy.prototype.disconnectedCallback &&
      vy.prototype.disconnectedCallback.call(this);
  };
  fa.Object.defineProperties(Dy.prototype, {
    Mb: {
      configurable: !0,
      enumerable: !0,
      set: function (a) {
        this.setAttribute('demuxedaudiosrc', a);
      },
      get: function () {
        return this.getAttribute('demuxedaudiosrc');
      },
    },
    vb: {
      configurable: !0,
      enumerable: !0,
      set: function (a) {
        this.setAttribute('demuxedvideosrc', a);
      },
      get: function () {
        return this.getAttribute('demuxedvideosrc');
      },
    },
    src: {
      configurable: !0,
      enumerable: !0,
      set: function (a) {
        this.setAttribute('src', a);
      },
      get: function () {
        return this.getAttribute('src');
      },
    },
  });
  fa.Object.defineProperties(Dy, {
    observedAttributes: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return ry;
      },
    },
  });
  v.customElements &&
    (v.customElements.get('lima-video') ||
      v.customElements.define('lima-video', Dy));
  function Oy() {
    var a = Pu(wx);
    a.initialize().then(function (b) {
      b && ((b = ww('initialized')), a.dispatchEvent(b));
    });
    return a;
  }
  var Qy = function (a, b, c, d, e) {
    E.call(this);
    this.J = a;
    this.O = new R(b.url);
    this.j = c;
    this.o = e;
    this.H = b.h;
    this.ua = d;
    (this.V = b.j) || this.O.l.remove('alr');
    M(L.h(), 'sl_dv' + this.o, (null != this.V).toString());
    this.X = !this.V;
    this.cc = 0;
    this.h = new XMLHttpRequest();
    this.aa = this.U = this.ub = this.F = this.l = 0;
    this.Z = 0.1;
    this.C = [];
    this.M = !1;
    this.ca = this.na = this.ia = null;
    this.Ka = !1;
    this.lc = this.L = this.B = this.rb = this.tb = null;
    this.G = !1;
    if ((this.A = yw())) (this.B = Oy()), We(this, this.B);
    Py(this);
  };
  t(Qy, E);
  var Ry = function (a, b) {
      b = ww('media_source_error', b);
      a.J.dispatchEvent(b);
    },
    Sy = function (a, b) {
      Ry(a, {
        code:
          1 < a.l
            ? MediaError.MEDIA_ERR_NETWORK
            : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
        message: b,
      });
    },
    Py = function (a) {
      a.ia = function () {
        Ty(a);
        if (a.X) {
          var b = a.h.responseText;
          a.M = !b || b.length < a.H;
          a.U = 0;
          ki('sl_cc' + a.o + '_' + a.l);
          a.F++;
          Uy(a);
        }
      };
      a.na = function () {
        return Ty(a);
      };
      a.ca = function () {
        ki('sl_ec' + a.o + '_' + a.l);
        Sy(a, 'Failed to load chunk ' + a.l + ' for stream ' + a.o);
      };
      a.h.addEventListener('load', a.ia);
      a.h.addEventListener('progress', a.na);
      a.h.addEventListener('error', a.ca);
      a.j.addEventListener('updateend', function () {
        a.j.buffered.length &&
          ((a.ub = a.j.buffered.end(0)),
          a.A
            ? a.G && !a.j.updating && a.l === a.F && (ki('sl_lc' + a.o), a.ua())
            : a.M &&
              !a.j.updating &&
              a.l === a.F &&
              (ki('sl_lc' + a.o), a.ua()));
        !a.Ka && 1 < a.J.buffered.length && (M(L.h(), 'dbr', '1'), (a.Ka = !0));
      });
      a.j.addEventListener('update', function () {
        a.C.length && !a.j.updating && a.j.appendBuffer(a.C.shift());
      });
      a.j.addEventListener('error', function () {
        ki('msb_err' + a.o);
        Ry(a, {
          code: MediaError.MEDIA_ERR_DECODE,
          message: 'Error on SourceBuffer ' + a.o,
        });
      });
      a.A
        ? (xx(a.B)
            ? Vy(a)
            : (a.tb = Ck(a.B, 'initialized', function () {
                Vy(a);
              })),
          (a.rb = Ck(a.B, 'get_video_succeeded', function () {
            Uy(a);
          })))
        : Vy(a);
    },
    Xy = function (a) {
      ki('sl_rc' + a.o + '-' + a.l);
      var b = Wy(a);
      a.h.open('get', b);
      a.h.overrideMimeType('text/plain; charset=x-user-defined');
      a.h.send(null);
      a.A && ((a.L = null), (a.lc = b));
    },
    Ty = function (a) {
      if (400 <= a.h.status)
        Sy(
          a,
          'Response code "' +
            a.h.status +
            '" on loading chunk ' +
            a.l +
            ' for stream ' +
            a.o
        );
      else {
        if (!a.X) {
          var b = a.h.getResponseHeader('content-type');
          if (b && 0 <= b.indexOf('text/plain')) {
            a.h.readyState === XMLHttpRequest.DONE &&
              ((a.O = new R(a.h.response)),
              (a.l = 0),
              (a.F = 0),
              a.cc++,
              Vy(a));
            return;
          }
          a.X = !0;
          ki('sl_redc' + a.o);
          M(L.h(), 'sl_tr' + a.o, a.cc.toString());
        }
        a.O.l.remove('alr');
        if (
          a.h.readyState === XMLHttpRequest.LOADING ||
          a.h.readyState === XMLHttpRequest.DONE
        )
          (b = Yy(a, a.U)),
            (a.U = a.h.response.length),
            (a.aa += b.byteLength),
            Zy(a, b);
        if (
          a.A &&
          a.h.readyState === XMLHttpRequest.DONE &&
          ((b = Yy(a, 0)), 0 < b.byteLength)
        ) {
          var c = a.h.responseText;
          a.G = !c || c.length < a.H;
          Fx(a.B, b, new R(a.lc), a.G);
        }
      }
    },
    Zy = function (a, b) {
      0 < b.byteLength &&
        (a.j.updating || a.C.length ? a.C.push(b) : a.j.appendBuffer(b));
    },
    Yy = function (a, b) {
      a = a.h.response;
      for (var c = new Uint8Array(a.length - b), d = 0; d < c.length; d++)
        c[d] = a.charCodeAt(d + b) & 255;
      return c.buffer;
    },
    Uy = function (a) {
      var b = av;
      -1 != b && b < a.aa + a.H
        ? (a.J.pause(), (av = -1), (b = !1))
        : ((b = a.F === a.l && !a.j.updating && !a.C.length),
          (b = a.A
            ? !a.G && b && a.J.currentTime >= a.Z
            : !a.M && b && a.J.currentTime >= a.Z));
      b && ((a.Z = a.ub + 0.1), Vy(a));
    },
    Wy = function (a) {
      var b = a.A && a.L ? a.L + 1 : a.l * a.H;
      return ru(a.O, 'range', b + '-' + (b + a.H - 1)).toString();
    },
    Vy = function (a) {
      if (a.A) {
        var b = new R(Wy(a));
        Dx(a.B, b).then(function (c) {
          c
            ? ((a.L = parseInt(c.endIndex, 10)),
              (a.G = c.isLastVideoChunk),
              Zy(a, c.video),
              (c = ww('get_video_succeeded')),
              a.B.dispatchEvent(c),
              a.F++)
            : Xy(a);
          a.l++;
        });
      } else Xy(a), a.l++;
    };
  Qy.prototype.N = function () {
    this.A && xx(this.B) && this.B.close();
    this.h.removeEventListener('load', this.ia);
    this.h.removeEventListener('progress', this.na);
    this.h.removeEventListener('error', this.ca);
    Kk(this.tb);
    Kk(this.rb);
    E.prototype.N.call(this);
  };
  var az = function (a, b) {
    E.call(this);
    var c = this;
    this.o = a;
    this.F = b;
    this.ga = new MediaSource();
    this.C = [];
    this.j = [];
    this.h = this.l = null;
    this.A = !1;
    this.B = function () {
      return $y(c);
    };
    this.ga.addEventListener('sourceopen', this.B);
  };
  t(az, E);
  var bz = function (a) {
      a.l && a.o.removeEventListener('timeupdate', a.l);
    },
    $y = function (a) {
      ki('msmsw_oso');
      a.l = function () {
        if (!a.A)
          for (var e = r(a.j), f = e.next(); !f.done; f = e.next()) Uy(f.value);
      };
      a.o.addEventListener('timeupdate', a.l);
      for (var b = 0; b < a.F.length; b++) {
        var c = a.F[b];
        M(L.h(), 'msmsw_mime' + b, c.mimeType);
        M(L.h(), 'msmsw_cs' + b, c.h.toString());
        var d = a.ga.addSourceBuffer(c.mimeType);
        d
          ? (a.C.push(d),
            (c = Pu(
              Qy,
              a.o,
              c,
              d,
              function () {
                a: if (!a.A) {
                  for (var e = r(a.j), f = e.next(); !f.done; f = e.next())
                    if (
                      ((f = f.value),
                      f.A
                        ? !f.G || f.j.updating || f.C.length
                        : !f.M || f.j.updating || f.C.length)
                    )
                      break a;
                  a.ga.endOfStream();
                  a.A = !0;
                  bz(a);
                }
              },
              b
            )),
            a.j.push(c))
          : ki('msmsw_sbf' + b);
      }
      M(L.h(), 'msmsw_ns', a.C.length.toString());
    };
  az.prototype.N = function () {
    this.h && window.URL.revokeObjectURL(this.h);
    for (var a = r(this.j), b = a.next(); !b.done; b = a.next()) b.value.W();
    bz(this);
    this.ga.removeEventListener('sourceopen', this.B);
    E.prototype.N.call(this);
  };
  var cz = function () {
    throw Error('Do not instantiate directly');
  };
  cz.prototype.h = null;
  cz.prototype.getContent = function () {
    return this.content;
  };
  cz.prototype.toString = function () {
    return this.content;
  };
  var dz = function () {
    cz.call(this);
  };
  Ya(dz, cz);
  var ez = (function (a) {
    function b(c) {
      this.content = c;
    }
    b.prototype = a.prototype;
    return function (c, d) {
      c = new b(String(c));
      void 0 !== d && (c.h = d);
      return c;
    };
  })(dz); /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
  var fz =
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
        ''
      ),
    gz = function () {
      for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++)
        8 == d || 13 == d || 18 == d || 23 == d
          ? (a[d] = '-')
          : 14 == d
          ? (a[d] = '4')
          : (2 >= b && (b = (33554432 + 16777216 * Math.random()) | 0),
            (c = b & 15),
            (b >>= 4),
            (a[d] = fz[19 == d ? (c & 3) | 8 : c]));
      return a.join('');
    };
  var iz = function (a) {
    R.call(this, a);
    this.I = new Map();
    a = this.h;
    var b = a.indexOf(';'),
      c = null;
    0 <= b
      ? ((this.h = a.substring(0, b)), (c = a.substring(b + 1)))
      : (this.h = a);
    hz(this, c);
  };
  t(iz, R);
  iz.prototype.toString = function () {
    return jz(this, R.prototype.toString.call(this));
  };
  iz.prototype.C = function () {
    return '';
  };
  var hz = function (a, b) {
      fb(ng(b)) ||
        b.split(';').forEach(function (c) {
          var d = c.indexOf('=');
          if (!(0 >= d)) {
            var e = kg(c.substring(0, d));
            c = kg(c.substring(d + 1));
            d = a.I.get(e);
            null != d ? d.includes(c) || d.push(c) : (d = [ng(c)]);
            a.I.set(e, d);
          }
        }, a);
    },
    kz = function (a) {
      if (fb(ng('ord'))) return null;
      a = a.I.get('ord');
      return null != a ? a : null;
    },
    lz = function (a, b) {
      fb(ng('ord')) || ((b = b.map(ng)), a.I.set('ord', b));
    },
    jz = function (a, b) {
      b = [ng(b)];
      b.push.apply(b, ia(mz(a)));
      return b.join(';');
    },
    mz = function (a) {
      var b = kz(a);
      null == b ? (b = [ng(Date.now())]) : fb(ng('ord')) || a.I.delete('ord');
      var c = [];
      a.I.forEach(function (d, e) {
        d.forEach(function (f) {
          c.push(e + '=' + f);
        });
      });
      c.push('ord=' + b[0]);
      lz(a, b);
      return c;
    };
  iz.prototype.G = function () {
    return new iz(this.toString());
  };
  var T = {
    DEPRECATED_ERROR_CODE: -1,
    VAST_MALFORMED_RESPONSE: 100,
    VAST_SCHEMA_VALIDATION_ERROR: 101,
    VAST_UNSUPPORTED_VERSION: 102,
    VAST_TRAFFICKING_ERROR: 200,
    VAST_UNEXPECTED_LINEARITY: 201,
    VAST_UNEXPECTED_DURATION_ERROR: 202,
    VAST_WRAPPER_ERROR: 300,
    VAST_LOAD_TIMEOUT: 301,
    VAST_TOO_MANY_REDIRECTS: 302,
    VAST_NO_ADS_AFTER_WRAPPER: 303,
    VIDEO_PLAY_ERROR: 400,
    VAST_MEDIA_LOAD_TIMEOUT: 402,
    VAST_LINEAR_ASSET_MISMATCH: 403,
    VAST_PROBLEM_DISPLAYING_MEDIA_FILE: 405,
    OVERLAY_AD_PLAYING_FAILED: 500,
    NONLINEAR_DIMENSIONS_ERROR: 501,
    OVERLAY_AD_LOADING_FAILED: 502,
    VAST_NONLINEAR_ASSET_MISMATCH: 503,
    COMPANION_REQUIRED_ERROR: 602,
    COMPANION_AD_LOADING_FAILED: 603,
    UNKNOWN_ERROR: 900,
    VPAID_ERROR: 901,
    FAILED_TO_REQUEST_ADS: 1005,
    VAST_ASSET_NOT_FOUND: 1007,
    VAST_EMPTY_RESPONSE: 1009,
    UNKNOWN_AD_RESPONSE: 1010,
    UNSUPPORTED_LOCALE: 1011,
    ADS_REQUEST_NETWORK_ERROR: 1012,
    INVALID_AD_TAG: 1013,
    STREAM_INITIALIZATION_FAILED: 1020,
    ASSET_FALLBACK_FAILED: 1021,
    INVALID_ARGUMENTS: 1101,
    NATIVE_MESSAGE_ERROR: 1204,
    AUTOPLAY_DISALLOWED: 1205,
    CONSENT_MANAGEMENT_PROVIDER_NOT_READY: 1300,
    Ph: 2002,
  };
  T[-1] = 'DEPRECATED_ERROR_CODE';
  T[100] = 'VAST_MALFORMED_RESPONSE';
  T[101] = 'VAST_SCHEMA_VALIDATION_ERROR';
  T[102] = 'VAST_UNSUPPORTED_VERSION';
  T[200] = 'VAST_TRAFFICKING_ERROR';
  T[201] = 'VAST_UNEXPECTED_LINEARITY';
  T[202] = 'VAST_UNEXPECTED_DURATION_ERROR';
  T[300] = 'VAST_WRAPPER_ERROR';
  T[301] = 'VAST_LOAD_TIMEOUT';
  T[302] = 'VAST_TOO_MANY_REDIRECTS';
  T[303] = 'VAST_NO_ADS_AFTER_WRAPPER';
  T[400] = 'VIDEO_PLAY_ERROR';
  T[402] = 'VAST_MEDIA_LOAD_TIMEOUT';
  T[403] = 'VAST_LINEAR_ASSET_MISMATCH';
  T[405] = 'VAST_PROBLEM_DISPLAYING_MEDIA_FILE';
  T[500] = 'OVERLAY_AD_PLAYING_FAILED';
  T[501] = 'NONLINEAR_DIMENSIONS_ERROR';
  T[502] = 'OVERLAY_AD_LOADING_FAILED';
  T[503] = 'VAST_NONLINEAR_ASSET_MISMATCH';
  T[602] = 'COMPANION_REQUIRED_ERROR';
  T[603] = 'COMPANION_AD_LOADING_FAILED';
  T[900] = 'UNKNOWN_ERROR';
  T[901] = 'VPAID_ERROR';
  T[1005] = 'FAILED_TO_REQUEST_ADS';
  T[1007] = 'VAST_ASSET_NOT_FOUND';
  T[1009] = 'VAST_EMPTY_RESPONSE';
  T[1010] = 'UNKNOWN_AD_RESPONSE';
  T[1011] = 'UNSUPPORTED_LOCALE';
  T[1012] = 'ADS_REQUEST_NETWORK_ERROR';
  T[1013] = 'INVALID_AD_TAG';
  T[1020] = 'STREAM_INITIALIZATION_FAILED';
  T[1021] = 'ASSET_FALLBACK_FAILED';
  T[1101] = 'INVALID_ARGUMENTS';
  T[1204] = 'NATIVE_MESSAGE_ERROR';
  T[1205] = 'AUTOPLAY_DISALLOWED';
  T[1300] = 'CONSENT_MANAGEMENT_PROVIDER_NOT_READY';
  T[2002] = 'SUPPORTED_ADS_NOT_FOUND';
  var nz = function (a, b, c) {
    var d = Error.call(this);
    this.message = d.message;
    'stack' in d && (this.stack = d.stack);
    this.l = b;
    this.h = c;
    this.o = a;
  };
  t(nz, Error);
  l = nz.prototype;
  l.getAd = function () {
    return null;
  };
  l.getInnerError = function () {
    return this.j;
  };
  l.getMessage = function () {
    return this.l;
  };
  l.getErrorCode = function () {
    return this.h;
  };
  l.getVastErrorCode = function () {
    return 1e3 > this.h ? this.h : 900;
  };
  l.getType = function () {
    return this.o;
  };
  l.toString = function () {
    return (
      'AdError ' +
      this.getErrorCode() +
      ': ' +
      this.getMessage() +
      (null != this.getInnerError()
        ? ' Caused by: ' + this.getInnerError()
        : '')
    );
  };
  var oz = function (a) {
    O.call(this);
    this.A = [];
    this.j = !1;
    this.l = a || 'goog_' + og++;
  };
  t(oz, O);
  oz.prototype.connect = function () {
    for (this.j = !0; 0 !== this.A.length; ) {
      var a = this.A.shift();
      a && this.sendMessage(a.name, a.type, a.data);
    }
  };
  var pz = function (a, b, c, d) {
    a.j ? a.sendMessage(b, c, d) : a.A.push({ name: b, type: c, data: d });
  };
  oz.prototype.sendMessage = function () {};
  var qz = function (a, b, c, d, e) {
    e = void 0 === e ? '' : e;
    mk.call(this, a);
    this.messageType = b;
    this.ra = c;
    this.Zb = d;
    this.origin = e;
  };
  t(qz, mk);
  qz.prototype.toString = function () {
    return '';
  };
  var rz = { IMAGE: 'Image', FLASH: 'Flash', ALL: 'All' },
    sz = { HTML: 'Html', IFRAME: 'IFrame', STATIC: 'Static', ALL: 'All' },
    tz = {
      IGNORE: 'IgnoreSize',
      SELECT_EXACT_MATCH: 'SelectExactMatch',
      SELECT_NEAR_MATCH: 'SelectNearMatch',
      SELECT_FLUID: 'SelectFluid',
    },
    uz = function () {
      this.allowCustom = !0;
      this.creativeType = this.resourceType = 'All';
      this.sizeCriteria = 'SelectExactMatch';
      this.nearMatchPercent = 90;
      this.adSlotIds = [];
    };
  w(
    'module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.CreativeType',
    rz
  );
  w(
    'module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.ResourceType',
    sz
  );
  w(
    'module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.SizeCriteria',
    tz
  );
  var wz = function (a, b) {
      b = void 0 === b ? new uz() : b;
      this.h = a;
      this.settings = b ? b : new uz();
      this.resourceType = vz(sz, this.settings.resourceType)
        ? this.settings.resourceType
        : 'All';
      this.creativeType = vz(rz, this.settings.creativeType)
        ? this.settings.creativeType
        : 'All';
      this.sizeCriteria = vz(tz, this.settings.sizeCriteria)
        ? this.settings.sizeCriteria
        : 'SelectExactMatch';
      this.adSlotIds =
        null != this.settings.adSlotIds ? this.settings.adSlotIds : [];
      this.nearMatchPercent =
        'number' === typeof this.settings.nearMatchPercent &&
        0 < this.settings.nearMatchPercent &&
        100 >= this.settings.nearMatchPercent
          ? this.settings.nearMatchPercent
          : 90;
    },
    zz = function (a, b) {
      var c = [];
      b.forEach(function (d) {
        a.settings.allowCustom &&
          (!fb(d.getContent()) &&
          (isNaN(d.wa.sequenceNumber) ||
            isNaN(d.wa.mainAdSequenceNumber) ||
            d.wa.mainAdSequenceNumber === d.wa.sequenceNumber) &&
          xz(a, d)
            ? c.push(d)
            : ((d = yz(a, d)), null != d && !fb(d.getContent()) && c.push(d)));
      });
      return c;
    };
  wz.prototype.ae = function () {
    return this.resourceType;
  };
  var xz = function (a, b) {
      var c;
      if ((c = 'Flash' !== b.getContentType())) {
        if ((c = 'All' === a.resourceType || a.resourceType === b.ae()))
          (c = b.getContentType()),
            (c =
              null == c
                ? !0
                : 'All' === a.creativeType || a.creativeType === c);
        c &&
          ((c = b.getAdSlotId()),
          (c =
            0 === a.adSlotIds.length
              ? !0
              : null != c
              ? a.adSlotIds.includes(c)
              : !1));
      }
      if (c)
        if (((c = b.yb()), (b = !!b.wa.fluidSize) || a.h.Xd)) a = b && a.h.Xd;
        else if (
          ((b = 'IgnoreSize' === a.sizeCriteria) ||
            ((b = a.h.size),
            (b =
              b == c
                ? !0
                : b && c
                ? b.width == c.width && b.height == c.height
                : !1)),
          b)
        )
          a = !0;
        else {
          if ((b = 'SelectNearMatch' === a.sizeCriteria))
            (b = c.width),
              (c = c.height),
              (b =
                b > a.h.size.width ||
                c > a.h.size.height ||
                b < (a.nearMatchPercent / 100) * a.h.size.width ||
                c < (a.nearMatchPercent / 100) * a.h.size.height
                  ? !1
                  : !0);
          a = b;
        }
      else a = !1;
      return a;
    },
    yz = function (a, b) {
      b = Az(b);
      return null == b
        ? null
        : b.find(function (c) {
            return xz(a, c);
          }) || null;
    },
    vz = function (a, b) {
      return null != b && Df(a, b);
    };
  var Bz = function (a) {
    var b = {};
    b =
      ((b.IABUSPrivacy_String = 'uspString'),
      (b.IABTCF_gdprApplies = 'gdprApplies'),
      (b.IABTCF_TCString = 'tcString'),
      (b.IABTCF_AddtlConsent = 'addtlConsent'),
      b);
    for (var c in b) null != a[c] && ((a[b[c]] = a[c]), delete a[c]);
    this.ee = a.isGdprLoader || !1;
    this.uspString = a.uspString || '';
    c = a.gdprApplies;
    this.j =
      'boolean' == typeof c
        ? c
          ? '1'
          : '0'
        : 'number' != typeof c || (1 !== c && 0 !== c)
        ? 'string' != typeof c || ('1' !== c && '0' !== c)
          ? ''
          : '1' == c
          ? '1'
          : '0'
        : 1 == c
        ? '1'
        : '0';
    this.h = a.tcString || '';
    /^[\.\w_-]*$/.test(this.h) || (this.h = encodeURIComponent(this.h));
  };
  var Cz = function (a) {
      this.h = a;
    },
    Dz = function (a, b) {
      return Cf(a.h, b) && ((a = a.h[b]), 'boolean' === typeof a) ? a : !1;
    },
    Ez = function (a) {
      if (Cf(a.h, 'forceExperimentIds')) {
        a = a.h.forceExperimentIds;
        var b = [],
          c = 0;
        Array.isArray(a) &&
          a.forEach(function (d) {
            'number' === typeof d && (b[c++] = d);
          });
        return b;
      }
      return null;
    };
  var V = function () {
      this.I = 'always';
      this.M = 4;
      this.l = 1;
      this.h = 0;
      this.j = !0;
      this.L = 'en';
      this.J = !1;
      this.V = this.U = '';
      this.A = null;
      this.Z = this.O = -1;
      this.X = this.H = this.C = '';
      this.F = !1;
      this.K = !0;
      this.B = gz();
      this.G = {};
      try {
        this.ca = qn()[0];
      } catch (a) {}
    },
    Fz = function (a) {
      a = ng(a);
      fb(a) || (a = a.substring(0, 20));
      return a;
    };
  l = V.prototype;
  l.setCompanionBackfill = function (a) {
    this.I = a;
  };
  l.getCompanionBackfill = function () {
    return this.I;
  };
  l.setNumRedirects = function (a) {
    this.M = a;
  };
  l.getNumRedirects = function () {
    return this.M;
  };
  l.setPpid = function (a) {
    this.aa = a;
  };
  l.getPpid = function () {
    return this.aa;
  };
  l.setVpaidAllowed = function (a) {
    'boolean' === typeof a && (this.l = a ? 1 : 0);
  };
  l.setVpaidMode = function (a) {
    this.l = a;
  };
  l.sf = function () {
    return this.l;
  };
  l.setAutoPlayAdBreaks = function (a) {
    this.j = a;
  };
  l.Df = function () {
    return this.j;
  };
  l.Yf = function (a) {
    this.J = a;
  };
  l.Rb = function () {
    return this.J;
  };
  l.setLocale = function (a) {
    if ((a = wv(a))) this.L = a;
  };
  l.getLocale = function () {
    return this.L;
  };
  l.setPlayerType = function (a) {
    this.U = Fz(a);
  };
  l.getPlayerType = function () {
    return this.U;
  };
  l.setPlayerVersion = function (a) {
    this.V = Fz(a);
  };
  l.getPlayerVersion = function () {
    return this.V;
  };
  var Gz = function (a) {
    if (null == a.A) {
      var b = {},
        c = new R(H().location.href).l;
      if (xu(c, 'tcnfp'))
        try {
          b = JSON.parse(c.get('tcnfp'));
        } catch (d) {}
      a.A = new Cz(b);
    }
    return a.A;
  };
  l = V.prototype;
  l.Zf = function (a) {
    this.O = a;
  };
  l.ag = function (a) {
    this.Z = a;
  };
  l.setDisableCustomPlaybackForIOS10Plus = function (a) {
    this.F = a;
  };
  l.getDisableCustomPlaybackForIOS10Plus = function () {
    return this.F;
  };
  l.isCookiesEnabled = function () {
    return this.K;
  };
  l.setCookiesEnabled = function (a) {
    null != a && (this.K = a);
  };
  l.setSessionId = function (a) {
    this.B = a;
  };
  l.Xf = function () {};
  l.rf = function () {
    return !0;
  };
  l.setFeatureFlags = function (a) {
    this.G = a;
  };
  l.getFeatureFlags = function () {
    return this.G;
  };
  V.prototype.getFeatureFlags = V.prototype.getFeatureFlags;
  V.prototype.setFeatureFlags = V.prototype.setFeatureFlags;
  V.prototype.getDisableFlashAds = V.prototype.rf;
  V.prototype.setDisableFlashAds = V.prototype.Xf;
  V.prototype.setSessionId = V.prototype.setSessionId;
  V.prototype.setCookiesEnabled = V.prototype.setCookiesEnabled;
  V.prototype.isCookiesEnabled = V.prototype.isCookiesEnabled;
  V.prototype.getDisableCustomPlaybackForIOS10Plus =
    V.prototype.getDisableCustomPlaybackForIOS10Plus;
  V.prototype.setDisableCustomPlaybackForIOS10Plus =
    V.prototype.setDisableCustomPlaybackForIOS10Plus;
  V.prototype.setStreamCorrelator = V.prototype.ag;
  V.prototype.setPageCorrelator = V.prototype.Zf;
  V.prototype.getPlayerVersion = V.prototype.getPlayerVersion;
  V.prototype.setPlayerVersion = V.prototype.setPlayerVersion;
  V.prototype.getPlayerType = V.prototype.getPlayerType;
  V.prototype.setPlayerType = V.prototype.setPlayerType;
  V.prototype.getLocale = V.prototype.getLocale;
  V.prototype.setLocale = V.prototype.setLocale;
  V.prototype.isVpaidAdapter = V.prototype.Rb;
  V.prototype.setIsVpaidAdapter = V.prototype.Yf;
  V.prototype.isAutoPlayAdBreaks = V.prototype.Df;
  V.prototype.setAutoPlayAdBreaks = V.prototype.setAutoPlayAdBreaks;
  V.prototype.getVpaidMode = V.prototype.sf;
  V.prototype.setVpaidMode = V.prototype.setVpaidMode;
  V.prototype.setVpaidAllowed = V.prototype.setVpaidAllowed;
  V.prototype.getPpid = V.prototype.getPpid;
  V.prototype.setPpid = V.prototype.setPpid;
  V.prototype.getNumRedirects = V.prototype.getNumRedirects;
  V.prototype.setNumRedirects = V.prototype.setNumRedirects;
  V.prototype.getCompanionBackfill = V.prototype.getCompanionBackfill;
  V.prototype.setCompanionBackfill = V.prototype.setCompanionBackfill;
  var Hz = new V();
  var Iz = function (a) {
    D.call(this, a);
  };
  t(Iz, D);
  var Jz = function (a) {
      void 0 !== a.addtlConsent &&
        'string' !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        'boolean' !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && 'string' !== typeof a.tcString) ||
        (void 0 !== a.listenerId && 'number' !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && 'error' !== a.cmpStatus
        ? 0
        : 3;
    },
    Kz = function (a, b) {
      b = void 0 === b ? {} : b;
      E.call(this);
      this.j = a;
      this.h = null;
      this.B = {};
      this.C = 0;
      var c;
      this.o = null != (c = b.Lc) ? c : 500;
      var d;
      this.A = null != (d = b.ki) ? d : !1;
      this.l = null;
    };
  t(Kz, E);
  Kz.prototype.N = function () {
    this.B = {};
    this.l && (Te(this.j, 'message', this.l), delete this.l);
    delete this.B;
    delete this.j;
    delete this.h;
    E.prototype.N.call(this);
  };
  var Mz = function (a) {
      return 'function' === typeof a.j.__tcfapi || null != Lz(a);
    },
    Pz = function (a, b) {
      var c = { internalErrorState: 0, internalBlockOnErrors: a.A },
        d = Oe(function () {
          return b(c);
        }),
        e = 0;
      -1 !== a.o &&
        (e = setTimeout(function () {
          e = 0;
          c.tcString = 'tcunavailable';
          c.internalErrorState = 1;
          d();
        }, a.o));
      Nz(a, 'addEventListener', function (f) {
        f &&
          ((c = f),
          (c.internalErrorState = Jz(c)),
          (c.internalBlockOnErrors = a.A),
          Oz(c)
            ? (0 != c.internalErrorState && (c.tcString = 'tcunavailable'),
              Nz(a, 'removeEventListener', null, c.listenerId),
              (f = e) && clearTimeout(f),
              d())
            : ('error' === c.cmpStatus || 0 !== c.internalErrorState) &&
              (f = e) &&
              clearTimeout(f));
      });
    };
  Kz.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.A },
      d = Oe(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.o &&
      (e = setTimeout(function () {
        c.tcString = 'tcunavailable';
        c.internalErrorState = 1;
        d();
      }, this.o));
    var f = function (g, h) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Jz(c)),
          (c.internalBlockOnErrors = b.A),
          (h && 0 === c.internalErrorState) ||
            ((c.tcString = 'tcunavailable'), h || (c.internalErrorState = 3)))
        : ((c.tcString = 'tcunavailable'), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Nz(this, 'addEventListener', f);
    } catch (g) {
      (c.tcString = 'tcunavailable'),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Kz.prototype.removeEventListener = function (a) {
    a && a.listenerId && Nz(this, 'removeEventListener', null, a.listenerId);
  };
  var Nz = function (a, b, c, d) {
      c || (c = function () {});
      if ('function' === typeof a.j.__tcfapi) (a = a.j.__tcfapi), a(b, 2, c, d);
      else if (Lz(a)) {
        Qz(a);
        var e = ++a.C;
        a.B[e] = c;
        a.h &&
          ((c = {}),
          a.h.postMessage(
            ((c.__tcfapiCall = {
              command: b,
              version: 2,
              callId: e,
              parameter: d,
            }),
            c),
            '*'
          ));
      } else c({}, !1);
    },
    Lz = function (a) {
      if (a.h) return a.h;
      a.h = ih(a.j, '__tcfapiLocator');
      return a.h;
    },
    Qz = function (a) {
      a.l ||
        ((a.l = function (b) {
          try {
            var c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.B[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        Se(a.j, 'message', a.l));
    },
    Oz = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Jz(a));
      return 'error' === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (Eh({ e: String(a.internalErrorState) }, 'tcfe'), !1)
          : !0
        : 'loaded' !== a.cmpStatus ||
          ('tcloaded' !== a.eventStatus &&
            'useractioncomplete' !== a.eventStatus)
        ? !1
        : !0;
    };
  function Rz(a) {
    var b = {};
    new R(a).l.forEach(function (c, d) {
      b[d] = c;
    });
    return b;
  }
  var Sz = function (a, b) {
      a = void 0 === a ? {} : a;
      b = void 0 === b ? {} : b;
      this.h = a;
      this.j = new Bz(b);
    },
    Tz = function (a, b) {
      var c = new R(a);
      var d = c.h;
      (c =
        eb(c.j, 'googleads.g.doubleclick.net') &&
        uv('/pagead/(live/)?ads', d)) ||
        ((d = new iz(a)),
        (c = d.j),
        (d = jz(d, d.h)),
        (c =
          !eb(c, '.g.doubleclick.net') &&
          eb(c, 'doubleclick.net') &&
          uv('/(ad|pfad)[x|i|j]?/', d)));
      c ||
        ((c = new R(a)),
        (d = c.h),
        (c = eb(c.j, 'doubleclick.net') && uv('/gampad/(live/)?ads', d)));
      (c = c || 'bid.g.doubleclick.net' == new R(a).j) ||
        ((c = new R(a)),
        (d = c.h),
        (c = 'ad.doubleclick.net' === c.j && uv('/dv3/adv', d)));
      c ||
        ((c = new R(a)),
        (d = c.h),
        'pubads.g.doubleclick.net' === c.j &&
          (uv('/ssai/', d) || uv('/ondemand/', d)));
      return new Sz(Rz(a), b);
    },
    Uz = function (a, b) {
      if (a.h.hasOwnProperty(b)) return a.h[b];
    },
    Vz = function (a) {
      var b, c;
      if (!(b = '1' == (null == (c = Uz(a, 'ltd')) ? void 0 : c.toString()))) {
        var d;
        b = null == (d = Uz(a, 'gdpr')) ? void 0 : d.toString();
        d = a.j.j;
        d = ('1' == d || '0' == d ? d : void 0 != b ? b : '').toLowerCase();
        if ('true' === d || '1' === d)
          if (
            ((d = a.j.h),
            (a = Uz(a, 'gdpr_consent')),
            (a =
              d && 'tcunavailable' != d
                ? d
                : 'tcunavailable' == d
                ? a || d
                : a || ''),
            'tcunavailable' === a)
          )
            var e = !1;
          else {
            if ((d = bu(a)) && a) {
              var f = kd(d, tt, 1);
              d = kd(d, lt, 2) || new lt();
              b = rd(B(f, 9), 0);
              c = rd(B(f, 4), 0);
              var g = rd(B(f, 5), 0),
                h = rd(fd(f, 10), !1),
                k = rd(fd(f, 11), !1),
                n = rd(B(f, 16), ''),
                m = rd(fd(f, 15), !1),
                x = {
                  consents: cu(dd(f, 13, !1), Pt),
                  legitimateInterests: cu(dd(f, 14, !1), Pt),
                },
                u = {
                  consents: cu(dd(f, 17)),
                  legitimateInterests: cu(dd(f, 18)),
                },
                y = cu(dd(f, 12, !1), Qt),
                A = md(f, jt, 19);
              f = {};
              A = r(A);
              for (var F = A.next(); !F.done; F = A.next()) {
                F = F.value;
                var da = rd(B(F, 1), 0);
                f[da] = f[da] || {};
                for (
                  var ea = r(dd(F, 3)), Ba = ea.next();
                  !Ba.done;
                  Ba = ea.next()
                )
                  f[da][Ba.value] = rd(B(F, 2), 0);
              }
              a = {
                tcString: a,
                tcfPolicyVersion: b,
                gdprApplies: !0,
                cmpId: c,
                cmpVersion: g,
                isServiceSpecific: h,
                useNonStandardStacks: k,
                publisherCC: n,
                purposeOneTreatment: m,
                purpose: x,
                vendor: u,
                specialFeatureOptins: y,
                publisher: {
                  restrictions: f,
                  consents: cu(dd(d, 1, !1), Pt),
                  legitimateInterests: cu(dd(d, 2, !1), Pt),
                  customPurposes: {
                    consents: cu(dd(d, 3)),
                    legitimateInterests: cu(dd(d, 4)),
                  },
                },
              };
            } else a = null;
            if (a) {
              var ua = void 0 === ua ? !1 : ua;
              if (Oz(a))
                if (
                  !1 === a.gdprApplies ||
                  'tcunavailable' === a.tcString ||
                  (void 0 === a.gdprApplies && !ua) ||
                  'string' !== typeof a.tcString ||
                  !a.tcString.length
                )
                  e = !0;
                else {
                  e = void 0 === e ? '755' : e;
                  c: {
                    if (
                      a.publisher &&
                      a.publisher.restrictions &&
                      ((ua = a.publisher.restrictions['1']), void 0 !== ua)
                    ) {
                      ua = ua[void 0 === e ? '755' : e];
                      break c;
                    }
                    ua = void 0;
                  }
                  0 === ua
                    ? (e = !1)
                    : a.purpose && a.vendor
                    ? ((ua = a.vendor.consents),
                      (e = !(!ua || !ua[void 0 === e ? '755' : e])) &&
                      a.purposeOneTreatment &&
                      'CH' === a.publisherCC
                        ? (e = !0)
                        : e &&
                          ((e = a.purpose.consents), (e = !(!e || !e['1']))))
                    : (e = !0);
                }
              else e = !1;
            } else e = !1;
          }
        else e = !0;
        b = !e;
      }
      return b;
    },
    Wz = function (a) {
      var b = new Iz();
      a = !Vz(a);
      C(b, 5, a);
      return b;
    };
  var Xz = function (a, b) {
    this.message = a;
    this.errorCode = b;
  };
  Xz.prototype.getErrorCode = function () {
    return this.errorCode;
  };
  Xz.prototype.getMessage = function () {
    return this.message;
  };
  var Yz = new Xz(
      'Failed to initialize ad playback element before starting ad playback.',
      400
    ),
    Zz = new Xz('The provided {0} information: {1} is invalid.', 1101);
  function $z(a, b) {
    var c = void 0 === b ? null : b;
    var d = Ha.apply(2, arguments);
    if (!(c instanceof nz)) {
      var e = a.getErrorCode(),
        f = a.getMessage();
      if (0 < d.length)
        for (var g = 0; g < d.length; g++)
          f = f.replace(new RegExp('\\{' + g + '\\}', 'ig'), d[g]);
      d = new nz('adPlayError', f, e);
      d.j = c;
      c = d;
    }
    return c;
  }
  var aA = function () {};
  aA.h = function () {
    throw Error('Must be overridden');
  };
  var bA = function () {
    this.h = 0;
  };
  t(bA, aA);
  bA.kb = void 0;
  bA.h = function () {
    return bA.kb ? bA.kb : (bA.kb = new bA());
  };
  function W(a, b, c, d) {
    c = void 0 === c ? null : c;
    d = void 0 === d ? {} : d;
    var e = bA.h();
    0 === e.h && (e.h = Math.random() < Xj(lf) ? 2 : 1);
    if (2 === e.h) {
      e = {};
      var f = Object,
        g = f.assign;
      e.c = String(a);
      e.pc = String(lh());
      e.em = c;
      e.lid = b;
      K(gt);
      Eh(g.call(f, {}, ((e.eids = ''), e), d), 'esp');
    }
  }
  var cA = function () {
      this.cache = {};
    },
    gA = function () {
      dA || ((eA = Xj(gf)), (fA = Xj(ff)), (dA = new cA()));
      return dA;
    },
    hA = function (a) {
      if (void 0 !== a)
        for (var b = r(Object.keys(a)), c = b.next(); !c.done; c = b.next())
          if (((c = c.value), c.startsWith('_GESPSK')))
            try {
              a.removeItem(c);
            } catch (d) {}
      dA = new cA();
    },
    iA = function (a) {
      var b = B(a, 3);
      if (!b) return 3;
      if (void 0 === B(a, 2)) return 4;
      a = Date.now();
      return a > b + 36e5 * fA ? 2 : a > b + 36e5 * eA ? 1 : 0;
    };
  cA.prototype.get = function (a, b) {
    if (this.cache[a]) return { Cb: this.cache[a], success: !0 };
    var c = '';
    try {
      c = b.getItem('_GESPSK-' + a);
    } catch (g) {
      var d;
      W(6, a, null == (d = g) ? void 0 : d.message);
      return { Cb: null, success: !1 };
    }
    if (!c) return { Cb: null, success: !0 };
    try {
      var e = hm(c);
      this.cache[a] = e;
      return { Cb: e, success: !0 };
    } catch (g) {
      var f;
      W(5, a, null == (f = g) ? void 0 : f.message);
      return { Cb: null, success: !1 };
    }
  };
  cA.prototype.set = function (a, b) {
    var c = B(a, 1),
      d = '_GESPSK-' + c;
    C(a, 3, Date.now());
    try {
      b.setItem(d, Hd(a));
    } catch (f) {
      var e;
      W(7, c, null == (e = f) ? void 0 : e.message);
      return !1;
    }
    this.cache[c] = a;
    return !0;
  };
  cA.prototype.remove = function (a, b) {
    a = B(a, 1);
    try {
      b.removeItem('_GESPSK-' + a), delete this.cache[a];
    } catch (d) {
      var c;
      W(8, a, null == (c = d) ? void 0 : c.message);
    }
  };
  var dA = null,
    eA = 24,
    fA = 72;
  function jA(a, b, c, d) {
    W(18, a);
    try {
      var e = Nh();
      Xj(ef) &&
        (gm(b, Number((ed(b, 8) - 1).toFixed(3))),
        C(b, 7, Math.round(e / 1e3 / 60)));
      return c()
        .then(function (f) {
          W(29, a, null, { delta: String(Nh() - e) });
          if (null == f) return W(41, a), kA(b, 111, d), b;
          null != f &&
            ('string' !== typeof f ? W(21, a) : f.length || W(20, a));
          f = C(b, 2, f);
          C(f, 10, void 0, !1);
          gA().set(b, d) && W(27, a);
          return b;
        })
        .catch(function (f) {
          kA(b, 106, d);
          W(28, a, lA(f));
          return b;
        });
    } catch (f) {
      return kA(b, 107, d), W(1, a, lA(f)), Promise.resolve(b);
    }
  }
  function kA(a, b, c) {
    var d;
    a.Ia(cm(null != (d = a.getError()) ? d : new bm(), b));
    gA().set(a, c);
  }
  var lA = function (a) {
    return 'string' === typeof a ? a : a instanceof Error ? a.message : null;
  };
  function mA() {
    var a = window;
    var b = void 0 === b ? function () {} : b;
    return new Promise(function (c) {
      var d = function () {
        c(b());
        Te(a, 'load', d);
      };
      Se(a, 'load', d);
    });
  }
  function nA(a) {
    var b = Xj(kf),
      c = new qm(),
      d = []
        .flatMap(function (e) {
          return md(e, am, 2);
        })
        .map(function (e) {
          return rd(B(e, 1), '');
        });
    oA(c, a, b, d);
    Wj(mf);
    if (!md(c, em, 2).length) return null;
    W(50, '');
    return Ac(c.o(), 3);
  }
  function oA(a, b, c, d) {
    if (b) {
      Xj(jf);
      var e = [],
        f = RegExp('^_GESPSK-(.+)$');
      try {
        for (var g = 0; g < b.length; g++) {
          var h = (f.exec(b.key(g)) || [])[1];
          h && e.push(h);
        }
      } catch (n) {}
      e = r(e);
      for (f = e.next(); !f.done; f = e.next())
        if (((f = f.value), (g = void 0), null == (g = d) || !g.includes(f)))
          if ((g = gA().get(f, b).Cb))
            if (((h = iA(g)), 2 !== h && 3 !== h)) {
              C(g, 9, !1);
              h = B(g, 2);
              if (!Wj(nf)) {
                var k = c;
                0 <= k &&
                  h &&
                  h.length > k &&
                  ((k = {}),
                  W(12, f, null, ((k.sl = String(h.length)), k)),
                  kA(g, 108, b),
                  C(g, 2, void 0, !1));
              }
              pd(a, 2, em, g);
              g = {};
              W(19, f, null, ((g.hs = h ? '1' : '0'), g));
            }
    }
  }
  var pA = function (a) {
    E.call(this);
    this.o = a;
    this.h = [];
    this.j = [];
    this.l = [];
  };
  t(pA, E);
  var qA = function (a, b) {
    a.j.push({ bc: !1, ib: b });
    Wj($e) && b.Sc(a.o);
  };
  pA.prototype.N = function () {
    this.h.length = 0;
    this.l.length = 0;
    if (Wj($e))
      for (var a = r(this.j), b = a.next(); !b.done; b = a.next())
        b.value.ib.fc.length = 0;
    this.j.length = 0;
    E.prototype.N.call(this);
  };
  var rA = function () {
    var a = this;
    this.promise = new Promise(function (b, c) {
      a.resolve = b;
      a.reject = c;
    });
  };
  var sA = function (a) {
    a = Error.call(this, a);
    this.message = a.message;
    'stack' in a && (this.stack = a.stack);
    Object.setPrototypeOf(this, sA.prototype);
    this.name = 'InputError';
  };
  t(sA, Error);
  var tA = function () {
      this.Za = !1;
    },
    uA = function () {
      tA.apply(this, arguments);
      this.fc = [];
      this.Fc = new rA();
    };
  t(uA, tA);
  var wA = function (a, b) {
      a.Za || ((a.Za = !0), (a.Ub = b), a.Fc.resolve(b), Wj($e) && vA(a));
    },
    vA = function (a) {
      for (var b = r(a.fc), c = b.next(); !c.done; c = b.next())
        (c = c.value), c(a.Ub);
      a.fc.length = 0;
    };
  uA.prototype.Sc = function (a) {
    Wj($e) && this.fc.push(a);
  };
  fa.Object.defineProperties(uA.prototype, {
    promise: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.Fc.promise;
      },
    },
    Hc: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.Za;
      },
    },
    error: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.od;
      },
    },
  });
  var xA = function () {
    uA.apply(this, arguments);
  };
  t(xA, uA);
  var yA = function (a, b) {
      wA(a, b);
    },
    zA = function (a, b) {
      b.then(function (c) {
        wA(a, c);
      });
    };
  xA.prototype.Ia = function (a) {
    this.Za ||
      ((this.Za = !0),
      (this.Ub = null),
      (this.od = a),
      this.Fc.reject(a),
      Wj($e) && vA(this));
  };
  var AA = function (a) {
    this.Za = !1;
    this.h = a;
  };
  t(AA, tA);
  AA.prototype.Hc = function () {
    return this.h.Za;
  };
  fa.Object.defineProperties(AA.prototype, {
    error: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.h.od;
      },
    },
  });
  var BA = function (a) {
    AA.call(this, a);
    this.h = a;
  };
  t(BA, AA);
  fa.Object.defineProperties(BA.prototype, {
    value: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.h.Ub;
      },
    },
  });
  var CA = function (a) {
    AA.call(this, a);
    this.h = a;
  };
  t(CA, AA);
  fa.Object.defineProperties(CA.prototype, {
    value: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        var a;
        return null != (a = this.h.Ub) ? a : null;
      },
    },
  });
  function DA(a, b) {
    var c, d, e;
    return Ga(function (f) {
      if (1 == f.h)
        return (
          (c = b
            ? a.filter(function (g) {
                return !g.bc;
              })
            : a),
          xa(
            f,
            Promise.all(
              c.map(function (g) {
                return g.ib.promise;
              })
            ),
            2
          )
        );
      if (3 != f.h) {
        if (a.length === c.length) return f.return(0);
        d = a.filter(function (g) {
          return g.bc;
        });
        e = Nh();
        return xa(
          f,
          Promise.race([
            Promise.all(
              d.map(function (g) {
                return g.ib.promise;
              })
            ),
            new Promise(function (g) {
              return void setTimeout(g, b);
            }),
          ]),
          3
        );
      }
      return f.return(Nh() - e);
    });
  }
  var FA = function (a, b) {
    E.call(this);
    var c = this;
    this.id = a;
    this.Lc = b;
    this.G = this.F = this.C = this.o = !1;
    this.L = -1;
    this.j = new pA(function () {
      EA(c);
    });
    We(this, this.j);
  };
  t(FA, E);
  FA.prototype.start = function () {
    var a = this,
      b,
      c;
    return Ga(function (d) {
      switch (d.h) {
        case 1:
          if (a.o) return d.return();
          a.o = !0;
          d.j = 2;
          b = a;
          return xa(d, DA(a.j.j, a.Lc), 4);
        case 4:
          b.L = d.A;
          if (a.ya()) {
            d.h = 5;
            break;
          }
          for (var e = 0, f = r(a.j.l), g = f.next(); !g.done; g = f.next()) {
            if (null == g.value.h.Ub)
              throw Error('missing input: ' + a.id + '/' + e);
            ++e;
          }
          return xa(d, a.h(), 5);
        case 5:
          d.h = 0;
          d.j = 0;
          break;
        case 2:
          c = ya(d);
          if (a.ya()) return d.return();
          !(c instanceof sA) &&
            c instanceof Error &&
            (a.A(a.id, c), a.j.h.length && GA(a, new sA(c.message)));
          d.h = 0;
      }
    });
  };
  var EA = function (a) {
      if (!a.o && a.C)
        try {
          var b = a.j.j,
            c = a.Lc
              ? b.filter(function (g) {
                  return !g.bc;
                })
              : b,
            d = b.filter(function (g) {
              return g.bc;
            }),
            e,
            f =
              null ==
              (e = b.find(function (g) {
                return void 0 !== g.ib.error;
              }))
                ? void 0
                : e.ib.error;
          if (f) throw ((a.o = !0), f);
          if (
            !c.some(function (g) {
              return !g.ib.Hc;
            })
          ) {
            if (
              d.length &&
              (a.F ||
                ((a.F = !0),
                setTimeout(function () {
                  a.G = !0;
                  EA(a);
                }, a.Lc)),
              d.some(function (g) {
                return !g.ib.Hc;
              }) && !a.G)
            )
              return;
            a.o = !0;
            a.h();
          }
        } catch (g) {
          !(a.ya() || g instanceof sA) &&
            g instanceof Error &&
            (a.A(a.id, g), a.j.h.length && GA(a, new sA(g.message)));
        }
    },
    HA = function (a) {
      var b = new xA();
      a.j.h.push(b);
      return b;
    },
    IA = function (a, b) {
      qA(a.j, b);
      b = new BA(b);
      a.j.l.push(b);
      return b;
    },
    JA = function (a, b) {
      qA(a.j, b);
      return new CA(b);
    },
    GA = function (a, b) {
      a = r(a.j.h);
      for (var c = a.next(); !c.done; c = a.next())
        if (((c = c.value), !c.Hc)) {
          var d = b;
          c.Za = !0;
          c.od = d;
          c.Fc.reject(d);
          Wj($e) && vA(c);
        }
    };
  var KA = function (a, b) {
    FA.call(this, a);
    this.id = a;
    this.A = b;
  };
  t(KA, FA);
  var LA = function (a, b, c) {
    KA.call(this, 1041, c);
    this.storage = b;
    this.l = IA(this, a);
  };
  t(LA, KA);
  LA.prototype.h = function () {
    var a = this.l.value;
    gA().set(a, this.storage) && null != B(a, 2) && W(27, B(a, 1));
  };
  var MA = function (a, b) {
    KA.call(this, 1048, b);
    this.l = HA(this);
    this.B = HA(this);
    this.H = IA(this, a);
  };
  t(MA, KA);
  MA.prototype.h = function () {
    var a = this.H.value,
      b = function (c) {
        var d = {};
        W(
          c,
          B(a, 1),
          null,
          ((d.tic = String(Math.round((Date.now() - B(a, 3)) / 6e4))), d)
        );
      };
    switch (iA(a)) {
      case 0:
        b(24);
        break;
      case 1:
        b(25);
        wA(this.B, a);
        break;
      case 2:
        b(26);
        wA(this.l, a);
        break;
      case 3:
        W(9, B(a, 1));
        wA(this.l, a);
        break;
      case 4:
        b(23), wA(this.l, a);
    }
  };
  function NA(a) {
    var b = function (c) {
      var d = {};
      W(
        c,
        B(a, 1),
        null,
        ((d.tic = String(Math.round((Date.now() - B(a, 3)) / 6e4))), d)
      );
    };
    switch (iA(a)) {
      case 0:
        b(24);
        break;
      case 1:
        b(25);
        break;
      case 2:
        b(26);
        break;
      case 3:
        W(9, B(a, 1));
        break;
      case 4:
        b(23);
    }
  }
  var OA = function (a, b, c, d) {
    KA.call(this, 658, d);
    this.collectorFunction = a;
    this.storage = c;
    this.l = HA(this);
    this.H = HA(this);
    this.B = JA(this, b);
  };
  t(OA, KA);
  OA.prototype.h = function () {
    var a = this;
    if (this.B.value) {
      var b = function (f) {
          wA(a.l, { id: B(f, 1), collectorGeneratedData: B(f, 2) });
        },
        c = this.B.value,
        d = B(c, 1),
        e = iA(c);
      NA(c);
      switch (e) {
        case 0:
          b(c);
          break;
        case 1:
          b(c);
          wA(this.H, c);
          break;
        case 3:
        case 2:
        case 4:
          C(c, 2, null), jA(d, c, this.collectorFunction, this.storage).then(b);
      }
    } else wA(this.l, null);
  };
  var PA = function (a, b, c) {
    KA.call(this, 1027, c);
    this.jc = a;
    this.storage = b;
    this.l = HA(this);
    this.B = HA(this);
  };
  t(PA, KA);
  PA.prototype.h = function () {
    var a = gA().get(this.jc, this.storage).Cb;
    if (!a) {
      a = gm(fm(this.jc), Xj(ef) || null);
      a = C(a, 3, Date.now());
      var b = a.Ia(cm(new bm(), 100));
      wA(this.B, b);
    }
    wA(this.l, a);
  };
  var QA = function (a, b, c) {
    KA.call(this, 1029, c);
    this.l = b;
    this.B = HA(this);
    this.H = IA(this, a);
  };
  t(QA, KA);
  QA.prototype.h = function () {
    var a = this.H.value,
      b = Date.now();
    if (this.l) {
      var c = ed(a, 8),
        d,
        e = null != (d = qd(a)) ? d : b;
      c < this.l &&
        C(
          a,
          8,
          Zc(
            Math.min(
              c + Number(((this.l * (b / 1e3 / 60 - e)) / 60).toFixed(3)),
              this.l
            )
          )
        );
    }
    wA(this.B, a);
  };
  var RA = function (a, b, c) {
    KA.call(this, 1047, c);
    this.collectorFunction = a;
    this.B = HA(this);
    this.l = HA(this);
    this.H = HA(this);
    this.J = IA(this, b);
  };
  t(RA, KA);
  RA.prototype.h = function () {
    var a = this,
      b = this.J.value,
      c = B(b, 1);
    W(18, c);
    try {
      var d = Nh();
      this.collectorFunction()
        .then(function (e) {
          W(29, c, null, { delta: String(Nh() - d) });
          var f = C(b, 2, e);
          wA(a.B, f);
          wA(a.H, null != e ? e : null);
        })
        .catch(function (e) {
          W(28, c, SA(e));
          e = b.Ia(cm(new bm(), 106));
          wA(a.l, e);
        });
    } catch (e) {
      W(1, c, SA(e)), yA(this.l, b.Ia(cm(new bm(), 107)));
    }
  };
  function SA(a) {
    return 'string' === typeof a ? a : a instanceof Error ? a.message : null;
  }
  var TA = function (a, b, c) {
    KA.call(this, 1030, c);
    this.H = b;
    this.l = HA(this);
    this.B = HA(this);
    this.J = IA(this, a);
  };
  t(TA, KA);
  TA.prototype.h = function () {
    var a = this.J.value,
      b,
      c = null != (b = ed(a, 8)) ? b : 0,
      d;
    b = null != (d = qd(a)) ? d : Date.now();
    1 > c && this.H
      ? ((d = {}),
        W(
          22,
          B(a, 1),
          null,
          ((d.t = String(b)), (d.cr = String(c)), (d.cs = String(iA(a))), d)
        ),
        (a = a.Ia(cm(new bm(), 104))),
        wA(this.B, a))
      : wA(this.l, a);
  };
  var UA = function (a, b, c, d) {
    KA.call(this, 662, d);
    this.l = a;
    this.storage = c;
    this.B = IA(this, b);
  };
  t(UA, KA);
  UA.prototype.h = function () {
    var a = this;
    mA().then(function () {
      var b = a.B.value;
      jA(B(b, 1), b, a.l, a.storage);
    });
  };
  var VA = function (a, b, c) {
    KA.call(this, 1028, c);
    this.l = b;
    this.B = HA(this);
    this.H = IA(this, a);
  };
  t(VA, KA);
  VA.prototype.h = function () {
    var a = this.H.value,
      b = B(a, 1);
    this.l &&
      (null == ed(a, 8) && (W(33, b), C(a, 8, Zc(this.l))),
      null == B(a, 7) &&
        (W(34, b), C(a, 7, Math.round(Date.now() / 1e3 / 60))));
    null != B(a, 3) || W(35, b);
    wA(this.B, a);
  };
  var WA = function (a, b, c, d, e) {
    KA.call(this, 1050, e);
    this.J = c;
    this.H = d;
    this.l = HA(this);
    this.B = IA(this, a);
    this.M = JA(this, b);
  };
  t(WA, KA);
  WA.prototype.h = function () {
    var a = this.B.value,
      b = B(a, 1),
      c = this.M.value;
    if (null == c) W(41, b), a.Ia(cm(new bm(), 111));
    else if ('string' === typeof c)
      if (!c.length) W(20, b);
      else {
        if (c.length > (/^(\d+)$/.test(b) ? this.H : this.J)) {
          var d = {};
          W(12, b, null, ((d.sl = String(c.length)), d));
          b = a.Ia(cm(new bm(), 108));
          C(b, 2, void 0, !1);
        }
      }
    else W(21, b);
    wA(this.l, a);
  };
  var XA = function () {
    E.apply(this, arguments);
    this.h = [];
  };
  t(XA, E);
  var YA = function (a, b) {
      We(a, b);
      a.h.push(b);
    },
    ZA = function (a, b) {
      b = r(b);
      for (var c = b.next(); !c.done; c = b.next()) YA(a, c.value);
    },
    $A = function (a) {
      a = r(a.h);
      for (var b = a.next(); !b.done; b = a.next())
        (b = b.value), Wj($e) ? ((b.C = !0), EA(b)) : b.start();
    };
  XA.prototype.N = function () {
    E.prototype.N.call(this);
    this.h.length = 0;
  };
  function aB(a, b, c, d) {
    var e, f, g, h, k, n, m, x, u, y, A, F, da, ea, Ba;
    return Ga(function (ua) {
      e = new XA();
      f = Xj(ef);
      g = new PA(a, c, d);
      h = new LA(g.B, c, d);
      k = new VA(g.l, f, d);
      n = new QA(k.B, f, d);
      m = new TA(n.B, f, d);
      x = new LA(m.B, c, d);
      y = u = null;
      Wj(nf)
        ? ((A = new MA(m.l, d)),
          YA(e, A),
          (u = A.B),
          (F = new RA(b, A.l, d)),
          YA(e, F),
          YA(e, new LA(F.l, c, d)),
          (da = new WA(F.B, F.H, Xj(kf), Xj(jf), d)),
          YA(e, da),
          YA(e, new LA(da.l, c, d)),
          (y = function () {
            var gb, dc, hf;
            return Ga(function (U) {
              if (1 == U.h) return (hf = a), xa(U, da.l.promise, 2);
              var yc = U.return;
              if (null == (gb = U.A)) var wd = void 0;
              else (wd = B(gb, 2)), (wd = null == wd ? void 0 : wd);
              return yc.call(U, {
                id: hf,
                collectorGeneratedData: null != (dc = wd) ? dc : null,
              });
            });
          }))
        : ((ea = new OA(b, m.l, c, d)),
          YA(e, ea),
          (u = ea.H),
          (y = function () {
            var gb;
            return Ga(function (dc) {
              return 1 == dc.h
                ? xa(dc, ea.l.promise, 2)
                : dc.return(
                    null != (gb = dc.A)
                      ? gb
                      : { id: a, collectorGeneratedData: null }
                  );
            });
          }));
      Ba = new UA(b, u, c, d);
      ZA(e, [g, h, k, n, m, x, Ba]);
      $A(e);
      return ua.return(y());
    });
  }
  var bB = function (a, b, c, d) {
    KA.call(this, 1059, d);
    this.B = b;
    this.storage = c;
    this.l = HA(this);
    this.H = IA(this, a);
  };
  t(bB, KA);
  bB.prototype.h = function () {
    var a = this.H.value,
      b = a.id,
      c = a.collectorFunction,
      d;
    a = null != (d = a.networkCode) ? d : b;
    b = {};
    W(42, a, null, ((b.ea = String(Number(this.B))), b));
    zA(this.l, aB(a, c, this.storage, this.A));
  };
  var cB = function (a, b) {
    KA.call(this, 1057, b);
    this.l = a;
    this.B = HA(this);
    this.H = HA(this);
  };
  t(cB, KA);
  cB.prototype.h = function () {
    if (this.l)
      if ('object' !== typeof this.l)
        W(46, 'UNKNOWN_COLLECTOR_ID'), dB(this, 'UNKNOWN_COLLECTOR_ID', 112);
      else {
        var a = this.l.id,
          b = this.l.networkCode;
        a && b && (delete this.l.id, W(47, a + ';' + b));
        a = null != b ? b : a;
        'string' !== typeof a
          ? ((b = {}),
            W(
              37,
              'INVALID_COLLECTOR_ID',
              null,
              ((b.ii = JSON.stringify(a)), b)
            ),
            dB(this, 'INVALID_COLLECTOR_ID', 102))
          : 'function' !== typeof this.l.collectorFunction
          ? (W(14, a), dB(this, a, 105))
          : Yj(df).includes(a)
          ? (W(22, a), dB(this, a, 104))
          : wA(this.H, this.l);
      }
    else W(39, 'UNKNOWN_COLLECTOR_ID'), dB(this, 'UNKNOWN_COLLECTOR_ID', 110);
  };
  var dB = function (a, b, c) {
    b = fm(b).Ia(cm(new bm(), c));
    wA(a.B, b);
  };
  var eB = function (a, b, c) {
    var d = void 0 === d ? document : d;
    this.storage = b;
    this.B = c;
    this.j = d;
    this.A = [];
    this.o = [];
    this.l = [];
    this.h = 0;
    a = r(a);
    for (b = a.next(); !b.done; b = a.next()) this.push(b.value);
  };
  l = eB.prototype;
  l.push = function (a) {
    a = new cB(a, this.Rc);
    var b = new LA(a.B, this.storage, this.Rc),
      c = new bB(a.H, this.B, this.storage, this.Rc),
      d = new XA();
    ZA(d, [a, b, c]);
    $A(d);
    a = c.l.promise;
    this.A.push(a);
    b = r(this.o);
    for (c = b.next(); !c.done; c = b.next()) a.then(c.value);
  };
  l.addOnSignalResolveCallback = function (a) {
    this.o.push(a);
    for (var b = r(this.A), c = b.next(); !c.done; c = b.next())
      c.value.then(a);
  };
  l.addErrorHandler = function (a) {
    this.l.push(a);
  };
  l.clearAllCache = function () {
    var a = this,
      b =
        this.j.currentScript instanceof HTMLScriptElement
          ? this.j.currentScript.src
          : '';
    if (1 === this.h) {
      var c = {};
      W(49, '', null, ((c.url = b), c));
    } else
      (c = String(eh(null != b ? b : ''))),
        Yj(cf).includes(c)
          ? ((c = {}), W(48, '', null, ((c.url = b), c)))
          : (hA(this.storage),
            (this.h = 1),
            setTimeout(function () {
              a.h = 0;
            }, 1e3 * Xj(bf)),
            (c = {}),
            W(43, '', null, ((c.url = b), c)));
  };
  l.Rc = function (a, b) {
    for (var c = r(this.l), d = c.next(); !d.done; d = c.next())
      (d = d.value), d(a, b);
  };
  var fB = function (a) {
    this.push = function (b) {
      a.push(b);
    };
    this.addOnSignalResolveCallback = function (b) {
      a.addOnSignalResolveCallback(b);
    };
    this.addErrorHandler = function (b) {
      a.addErrorHandler(b);
    };
    this.clearAllCache = function () {
      a.clearAllCache();
    };
  };
  function gB(a, b, c, d) {
    if (b) {
      var e = ch();
      var f = window;
      f = $g(f.top) ? f.top : null;
      e === f || Wj(af)
        ? (hB(a, 'encryptedSignalProviders', c, d) &&
            hB(a, 'secureSignalProviders', c, d)) ||
          (W(38, ''),
          iB(a, 'encryptedSignalProviders', b, c, d),
          iB(a, 'secureSignalProviders', b, c, d))
        : W(16, '');
    } else W(15, '');
  }
  function hB(a, b, c, d) {
    if (void 0 === a[b] || a[b] instanceof Array) return !1;
    a = a[b];
    d && a.addOnSignalResolveCallback(d);
    a.addErrorHandler(c);
    return !0;
  }
  function iB(a, b, c, d, e) {
    var f,
      g = new eB(null != (f = a[b]) ? f : [], c, 'secureSignalProviders' === b);
    a[b] = new fB(g);
    e && g.addOnSignalResolveCallback(e);
    g.addErrorHandler(d);
  }
  function jB(a, b, c, d) {
    var e = new Map();
    b = b.map(function (f) {
      var g = f.jc;
      return new Promise(function (h) {
        e.set(g, h);
      });
    });
    gB(a, c, d, function (f) {
      var g = f.collectorGeneratedData;
      f = f.id;
      var h;
      return void (null == (h = e.get(f))
        ? void 0
        : h({ collectorGeneratedData: g, id: f }));
    });
    return b;
  }
  function kB() {
    var a;
    return null != (a = v.googletag) ? a : (v.googletag = { cmd: [] });
  }
  function lB(a) {
    if (!a || Vz(a)) return null;
    try {
      return window.localStorage;
    } catch (b) {
      return null;
    }
  }
  function mB(a, b) {
    a = lB(a);
    gB(kB(), a, function () {}, b);
  }
  function nB(a, b) {
    return (b = lB(b)) && 0 != a.length ? jB(kB(), a, b, function () {}) : null;
  }
  var X = {},
    oB =
      ((X.creativeView = 'creativeview'),
      (X.start = 'start'),
      (X.midpoint = 'midpoint'),
      (X.firstQuartile = 'firstquartile'),
      (X.thirdQuartile = 'thirdquartile'),
      (X.complete = 'complete'),
      (X.mute = 'mute'),
      (X.unmute = 'unmute'),
      (X.pause = 'pause'),
      (X.rewind = 'rewind'),
      (X.resume = 'resume'),
      (X.fullscreen = 'fullscreen'),
      (X.exitFullscreen = 'exitfullscreen'),
      (X.expand = 'expand'),
      (X.collapse = 'collapse'),
      (X.close = 'close'),
      (X.acceptInvitation = 'acceptinvitation'),
      (X.adCanPlay = 'adCanPlay'),
      (X.adStarted = 'adStarted'),
      (X.abandon = 'abandon'),
      (X.acceptInvitationLinear = 'acceptinvitationlinear'),
      (X.engagedView = 'engagedview'),
      (X.instreamAdComplete = 'instreamAdComplete'),
      (X.skipShown = 'skipshown'),
      (X.skippableStateChanged = 'skippableStateChanged'),
      (X.skip = 'skip'),
      (X.progress = 'progress'),
      (X.publisher_invoked_skip = 'PUBLISHER_INVOKED_SKIP'),
      (X.annotation_start = 'annotation_start'),
      (X.annotation_click = 'annotation_click'),
      (X.annotation_close = 'annotation_close'),
      (X.cta_annotation_shown = 'cta_annotation_shown'),
      (X.cta_annotation_clicked = 'cta_annotation_clicked'),
      (X.cta_annotation_closed = 'cta_annotation_closed'),
      (X.replay = 'replay'),
      (X.stop = 'stop'),
      (X.autoplayDisallowed = 'autoplayDisallowed'),
      (X.error = 'error'),
      (X.mediaLoadTimeout = 'mediaLoadTimeout'),
      (X.linearChanged = 'linearChanged'),
      (X.click = 'click'),
      (X.contentPauseRequested = 'contentPauseRequested'),
      (X.contentResumeRequested = 'contentResumeRequested'),
      (X.discardAdBreak = 'discardAdBreak'),
      (X.updateAdsRenderingSettings = 'updateAdsRenderingSettings'),
      (X.durationChange = 'durationChange'),
      (X.expandedChanged = 'expandedChanged'),
      (X.autoClose = 'autoClose'),
      (X.userClose = 'userClose'),
      (X.userRecall = 'userRecall'),
      (X.prefetched = 'prefetched'),
      (X.loaded = 'loaded'),
      (X.init = 'init'),
      (X.allAdsCompleted = 'allAdsCompleted'),
      (X.adMetadata = 'adMetadata'),
      (X.adBreakReady = 'adBreakReady'),
      (X.adBreakFetchError = 'adBreakFetchError'),
      (X.log = 'log'),
      (X.volumeChange = 'volumeChange'),
      (X.companionBackfill = 'companionBackfill'),
      (X.companionInitialized = 'companionInitialized'),
      (X.companionImpression = 'companionImpression'),
      (X.companionClick = 'companionClick'),
      (X.impression = 'impression'),
      (X.interaction = 'interaction'),
      (X.adProgress = 'adProgress'),
      (X.adBuffering = 'adBuffering'),
      (X.trackingUrlPinged = 'trackingUrlPinged'),
      (X.measurable_impression = 'measurable_impression'),
      (X.custom_metric_viewable = 'custom_metric_viewable'),
      (X.viewable_impression = 'viewable_impression'),
      (X.fully_viewable_audible_half_duration_impression =
        'fully_viewable_audible_half_duration_impression'),
      (X.audio_audible = 'audio_audible'),
      (X.audio_measurable = 'audio_measurable'),
      (X.overlay_resize = 'overlay_resize'),
      (X.overlay_unmeasurable_impression = 'overlay_unmeasurable_impression'),
      (X.overlay_unviewable_impression = 'overlay_unviewable_impression'),
      (X.overlay_viewable_immediate_impression =
        'overlay_viewable_immediate_impression'),
      (X.overlay_viewable_end_of_session_impression =
        'overlay_viewable_end_of_session_impression'),
      (X.externalActivityEvent = 'externalActivityEvent'),
      (X.adEvent = 'adEvent'),
      (X.configure = 'configure'),
      (X.remainingTime = 'remainingTime'),
      (X.destroy = 'destroy'),
      (X.resize = 'resize'),
      (X.volume = 'volume'),
      (X.authorIconClicked = 'videoAuthorIconClicked'),
      (X.authorNameClicked = 'videoAuthorClicked'),
      (X.videoClicked = 'videoClicked'),
      (X.videoIconClicked = 'videoIconClicked'),
      (X.learnMoreClicked = 'videoLearnMoreClicked'),
      (X.muteClicked = 'videoMuteClicked'),
      (X.titleClicked = 'videoTitleClicked'),
      (X.videoSkipClicked = 'SKIPPED'),
      (X.unmuteClicked = 'videoUnmuteClicked'),
      (X.vpaidEvent = 'vpaidEvent'),
      (X.show_ad = 'show_ad'),
      (X.video_card_endcap_collapse = 'video_card_endcap_collapse'),
      (X.video_card_endcap_dismiss = 'video_card_endcap_dismiss'),
      (X.video_card_endcap_impression = 'video_card_endcap_impression'),
      (X.mediaUrlPinged = 'mediaUrlPinged'),
      (X.breakStart = 'breakstart'),
      (X.breakEnd = 'breakend'),
      (X.omidReady = 'omidReady'),
      (X.omidUnavailable = 'omidUnavailable'),
      (X.omidAdSessionCompleted = 'omidAdSessionCompleted'),
      (X.omidAdSessionAbandoned = 'omidAdSessionAbandoned'),
      (X.verificationNotExecuted = 'verificationNotExecuted'),
      (X.loadStart = 'loadStart'),
      (X.seeked = 'seeked'),
      (X.seeking = 'seeking'),
      X);
  var pB = function (a) {
    D.call(this, a);
  };
  t(pB, D);
  pB.prototype.getVersion = function () {
    return rd(B(this, 2), '');
  };
  var rB = function (a) {
    D.call(this, a, -1, qB);
  };
  t(rB, D);
  var sB = function (a, b) {
      return C(a, 2, b);
    },
    tB = function (a, b) {
      return C(a, 3, b);
    },
    uB = function (a, b) {
      return C(a, 4, b);
    },
    vB = function (a, b) {
      return C(a, 5, b);
    },
    wB = function (a, b) {
      return C(a, 9, b);
    },
    xB = function (a, b) {
      return od(a, 10, b);
    },
    yB = function (a, b) {
      return C(a, 11, b);
    },
    zB = function (a, b) {
      return C(a, 1, b);
    },
    AB = function (a, b) {
      return C(a, 7, b);
    },
    qB = [10, 6];
  var BB =
    'platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64'.split(
      ' '
    );
  function CB(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : (a.google_tag_data = {});
  }
  function DB(a) {
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
  function EB() {
    var a = window;
    if (!DB(a)) return null;
    var b = CB(a);
    if (b.uach_promise) return b.uach_promise;
    a = a.navigator.userAgentData.getHighEntropyValues(BB).then(function (c) {
      null != b.uach || (b.uach = c);
      return c;
    });
    return (b.uach_promise = a);
  }
  function FB(a) {
    var b;
    return yB(
      xB(
        vB(
          sB(
            zB(
              uB(
                AB(
                  wB(tB(new rB(), a.architecture || ''), a.bitness || ''),
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
              var d = new pB();
              d = C(d, 1, c.brand);
              return C(d, 2, c.version);
            })) || []
      ),
      a.wow64 || !1
    );
  }
  function GB() {
    var a, b;
    return null !=
      (b =
        null == (a = EB())
          ? void 0
          : a.then(function (c) {
              return FB(c);
            }))
      ? b
      : null;
  }
  var IB = function () {
      new Sz();
      gz();
      this.deviceId = '';
      this.h = this.referrer = null;
      HB(this);
    },
    JB = function () {
      IB.h();
      var a = 'h.3.556.1';
      Hz.Rb() && (a += '/vpaid_adapter');
      return a;
    },
    HB = function (a) {
      var b = GB();
      b &&
        b.then(function (c) {
          if (null == c) c = null;
          else {
            c = Hd(c);
            for (var d = [], e = 0, f = 0; f < c.length; f++) {
              var g = c.charCodeAt(f);
              255 < g && ((d[e++] = g & 255), (g >>= 8));
              d[e++] = g;
            }
            c = Ac(d, 3);
          }
          a.h = c;
        });
    };
  IB.h = function () {
    return K(IB);
  };
  var LB = function (a) {
      var b = Gz(Hz);
      if ((b && Dz(b, 'forceCustomPlayback')) || Hz.Rb()) return !0;
      if ((gc || fv()) && a) return !1;
      a =
        a &&
        (gc || fv() || gv(10)) &&
        Hz.getDisableCustomPlaybackForIOS10Plus();
      return ((fc || hc) && !a) || (ec && (!ec || !ev(dv, 4))) || KB()
        ? !0
        : !1;
    },
    MB = function (a) {
      return null == a
        ? !1
        : Hz.Rb()
        ? !0
        : ic || gc || fv()
        ? hv(a)
          ? gc || fv() || (gv(10) && Hz.getDisableCustomPlaybackForIOS10Plus())
            ? !1
            : !0
          : !0
        : (ec && (!ec || !ev(dv, 4))) || KB()
        ? !0
        : !1;
    },
    NB = function () {
      var a = Gz(Hz);
      return a && Dz(a, 'disableOnScreenDetection') ? !1 : !so();
    },
    KB = function () {
      return 1 == OB() || 2 == OB();
    },
    OB = function () {
      return (IB.h(), IB.h(), 'tvos' == (IB.h(), null)) ? 1 : to() ? 2 : 0;
    };
  var PB = function (a, b) {
    return 0 == a.indexOf(b) ? a.substr(b.length) : null;
  };
  function QB() {
    var a = H(),
      b = document;
    return new R(a.parent === a ? a.location.href : b.referrer);
  }
  function RB(a, b) {
    ru(a, 'url', '');
    try {
      var c = 2083 - a.toString().length - 1;
      if (0 >= c) return a.toString();
      for (
        var d = b.slice(0, c), e = encodeURIComponent(d), f = c;
        0 < f && e.length > c;

      )
        (d = b.slice(0, f--)), (e = encodeURIComponent(d));
      ru(a, 'url', d);
    } catch (g) {}
    return a.toString();
  }
  var SB = {
      Rf: function (a, b) {
        a && (Cu(a) ? Du(a, b) : Ku(a, b));
      },
    },
    TB = new (function () {
      this.h = new Map();
      this.l = 0;
      this.j = null != window.fetch;
    })();
  function UB(a) {
    var b = void 0 === b ? TB : b;
    if (Ai(Lj)) {
      var c = void 0 === c ? !1 : c;
      try {
        (a = Xu(a)), (c = c || nv(a)), b.j ? fw(b, a, c) : ew(b, a, c);
      } catch (d) {}
    } else if (((a = Xu(a, so() ? 'https' : window.location.protocol)), so()))
      VB(a);
    else
      try {
        SB.Rf(a, !0);
      } catch (d) {}
  }
  function VB(a) {
    new $v().get({ url: a, timeout: new xv() }).then(
      function () {},
      function () {}
    );
  }
  var WB = function () {
    this.j = 0.01 > Math.random();
    this.h = Math.floor(4503599627370496 * Math.random());
  };
  WB.prototype.report = function (a, b, c) {
    b = void 0 === b ? {} : b;
    if (null == v.G_testRunner && (this.j || (void 0 === c ? 0 : c))) {
      b.lid = a;
      b.sdkv = JB();
      a = Ei().sort().join(',');
      fb(ng(a)) || (b.e = a);
      b = XB(this, b);
      var d = new R('http://pagead2.googlesyndication.com/pagead/gen_204');
      tf(
        b,
        function (e, f) {
          ru(
            d,
            f,
            null == e ? '' : 'boolean' === typeof e ? (e ? 't' : 'f') : '' + e
          );
        },
        this
      );
      b = QB();
      eu(d, b.o);
      b = d.toString();
      a = d.l.get('url');
      null != a && vb() && 2083 < b.length && (b = RB(d, a));
      UB(b);
    }
  };
  var XB = function (a, b) {
    b.id = 'ima_html5';
    var c = QB();
    b.c = a.h;
    b.domain = c.j;
    return b;
  };
  WB.h = function () {
    return K(WB);
  };
  function YB(a, b) {
    return b instanceof RegExp ? '__REGEXP' + b.toString() : b;
  }
  function ZB(a, b) {
    return b && 0 == b.toString().indexOf('__REGEXP')
      ? ((a = b.split('__REGEXP')[1].match(/\/(.*)\/(.*)?/)),
        new RegExp(a[1], a[2] || ''))
      : b;
  }
  var $B = function (a, b) {
    oz.call(this, b);
    this.B = a;
    this.h = null;
    this.C = new Cv(this);
    this.C.P(H(), 'message', this.F);
  };
  t($B, oz);
  var aC = function (a) {
    if (null == a || 'string' !== typeof a || 0 != a.lastIndexOf('ima://', 0))
      return null;
    a = a.substr(6);
    try {
      return JSON.parse(a, ZB);
    } catch (b) {
      return null;
    }
  };
  $B.prototype.sendMessage = function (a, b, c) {
    if (null != this.h && null != this.h.postMessage) {
      var d = this.h,
        e = d.postMessage,
        f = {};
      f.name = a;
      f.type = b;
      null != c && (f.data = c);
      f.sid = this.l;
      f.channel = this.B;
      a = 'ima://' + pi(new ni(YB), f);
      e.call(d, a, '*');
    }
    null != this.h && null == this.h.postMessage && WB.h().report(11);
  };
  $B.prototype.N = function () {
    Ue(this.C);
    this.h = null;
    oz.prototype.N.call(this);
  };
  $B.prototype.F = function (a) {
    a = a.h;
    var b = aC(a.data);
    if (bC(this, b)) {
      if (null == this.h) (this.h = a.source), this.j || this.connect();
      else if (this.h != a.source) return;
      bC(this, b) &&
        this.dispatchEvent(
          new qz(b.name, b.type, b.data || {}, b.sid, a.origin)
        );
    }
  };
  var bC = function (a, b) {
    if (null == b) return !1;
    var c = b.channel;
    if (null == c || c != a.B) return !1;
    b = b.sid;
    return null == b || ('*' != a.l && b != a.l) ? !1 : !0;
  };
  var cC = function () {
    O.call(this);
    this.G = !1;
    this.h = null;
    this.B = this.F = this.L = !1;
    this.j = 0;
    this.A = [];
    this.C = !1;
    this.O = this.M = Infinity;
    this.l = 0;
    this.J = new Cv(this);
    We(this, this.J);
    this.H = {};
  };
  t(cC, O);
  var eC = function (a, b) {
      null == b || a.G || ((a.h = b), dC(a), (a.G = !0));
    },
    gC = function (a) {
      null != a.h &&
        a.G &&
        (fC(a),
        (a.G = !1),
        (a.F = !1),
        (a.B = !1),
        (a.j = 0),
        (a.A = []),
        (a.C = !1));
    },
    dC = function (a) {
      fC(a);
      !(a.h instanceof O) && 'ontouchstart' in document.documentElement && ic
        ? ((a.H = {
            touchstart: function (b) {
              a.F = !0;
              a.j = b.touches.length;
              a.l && (window.clearTimeout(a.l), (a.l = 0), (a.L = !0));
              a.C = hC(a, b.touches) || 1 != b.touches.length;
              a.C
                ? ((a.M = Infinity), (a.O = Infinity))
                : ((a.M = b.touches[0].clientX), (a.O = b.touches[0].clientY));
              b = b.touches;
              a.A = [];
              for (var c = 0; c < b.length; c++) a.A.push(b[c].identifier);
            },
            touchmove: function (b) {
              a.j = b.touches.length;
              if (
                !gv(8) ||
                Math.pow(b.changedTouches[0].clientX - a.M, 2) +
                  Math.pow(b.changedTouches[0].clientY - a.O, 2) >
                  Math.pow(5, 2)
              )
                a.B = !0;
            },
            touchend: function (b) {
              return void iC(a, b);
            },
          }),
          tf(a.H, function (b, c) {
            a.h.addEventListener(c, b, !1);
          }))
        : a.J.P(a.h, 'click', a.U);
    },
    fC = function (a) {
      a.J.ob(a.h, 'click', a.U);
      tf(
        a.H,
        function (b, c) {
          this.h.removeEventListener(c, b, !1);
        },
        a
      );
      a.H = {};
    },
    iC = function (a, b) {
      !a.F ||
        1 != a.j ||
        a.B ||
        a.L ||
        a.C ||
        !hC(a, b.changedTouches) ||
        (a.l = window.setTimeout(function () {
          return void jC(a);
        }, 300));
      a.j = b.touches.length;
      0 == a.j && ((a.F = !1), (a.B = !1), (a.A = []));
      a.L = !1;
    };
  cC.prototype.U = function () {
    jC(this);
  };
  var hC = function (a, b) {
      for (var c = 0; c < b.length; c++)
        if (a.A.includes(b[c].identifier)) return !0;
      return !1;
    },
    jC = function (a) {
      a.l = 0;
      a.dispatchEvent(new mk('click'));
    };
  cC.prototype.N = function () {
    gC(this);
    O.prototype.N.call(this);
  };
  var kC = function (a, b, c) {
    this.j = c;
    0 == b.length && (b = [[]]);
    this.h = b.map(function (d) {
      d = a.concat(d);
      for (var e = [], f = 0, g = 0; f < d.length; ) {
        var h = d[f++];
        if (128 > h) e[g++] = String.fromCharCode(h);
        else if (191 < h && 224 > h) {
          var k = d[f++];
          e[g++] = String.fromCharCode(((h & 31) << 6) | (k & 63));
        } else if (239 < h && 365 > h) {
          k = d[f++];
          var n = d[f++],
            m = d[f++];
          h =
            (((h & 7) << 18) | ((k & 63) << 12) | ((n & 63) << 6) | (m & 63)) -
            65536;
          e[g++] = String.fromCharCode(55296 + (h >> 10));
          e[g++] = String.fromCharCode(56320 + (h & 1023));
        } else
          (k = d[f++]),
            (n = d[f++]),
            (e[g++] = String.fromCharCode(
              ((h & 15) << 12) | ((k & 63) << 6) | (n & 63)
            ));
      }
      return new RegExp(e.join(''));
    });
  };
  kC.prototype.match = function (a) {
    var b = this;
    return this.h.some(function (c) {
      c = a.match(c);
      return null == c
        ? !1
        : !b.j ||
          (1 <= c.length && '3.556.1' == c[1]) ||
          (2 <= c.length && '3.556.1' == c[2])
        ? !0
        : !1;
    });
  };
  var lC = [
      104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92,
      46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109,
      47, 106, 115, 47, 40, 115, 100, 107, 108, 111, 97, 100, 101, 114, 124, 99,
      111, 114, 101, 41, 47,
    ],
    mC = [
      104, 116, 116, 112, 115, 63, 58, 47, 47, 115, 48, 92, 46, 50, 109, 100,
      110, 92, 46, 110, 101, 116, 47, 105, 110, 115, 116, 114, 101, 97, 109, 47,
      104, 116, 109, 108, 53, 47,
    ],
    nC = [
      104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92,
      46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109,
      47, 112, 114, 101, 114, 101, 108, 101, 97, 115, 101, 47, 106, 115, 47, 91,
      48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 47,
    ],
    oC = [
      [105, 109, 97, 51, 92, 46, 106, 115],
      [105, 109, 97, 51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115],
      [105, 109, 97, 51, 95, 101, 97, 112, 46, 106, 115],
    ],
    pC = [
      [
        98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48,
        45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93,
        41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116,
        109, 108,
      ],
      [
        98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48,
        45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91,
        97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44,
        50, 125, 92, 46, 104, 116, 109, 108,
      ],
      [
        98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57,
        93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104,
        116, 109, 108,
      ],
    ],
    qC = [
      [111, 117, 116, 115, 116, 114, 101, 97, 109, 92, 46, 106, 115],
      [
        111, 117, 116, 115, 116, 114, 101, 97, 109, 95, 100, 101, 98, 117, 103,
        92, 46, 106, 115,
      ],
    ],
    rC = new kC(lC, oC, !1),
    sC = new kC(lC, pC, !0),
    tC = new kC(mC, oC, !1),
    uC = new kC(mC, pC, !0),
    vC = new kC(nC, oC, !1),
    wC = new kC(
      [
        104, 116, 116, 112, 115, 63, 58, 47, 47, 40, 112, 97, 103, 101, 97, 100,
        50, 124, 116, 112, 99, 41, 92, 46, 103, 111, 111, 103, 108, 101, 115,
        121, 110, 100, 105, 99, 97, 116, 105, 111, 110, 92, 46, 99, 111, 109,
        47, 112, 97, 103, 101, 97, 100, 47, 40, 103, 97, 100, 103, 101, 116,
        115, 124, 106, 115, 41, 47,
      ],
      [],
      !1
    ),
    xC = new kC(
      lC,
      [
        [
          100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93,
          43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97,
          45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44,
          50, 125, 92, 46, 104, 116, 109, 108,
        ],
        [
          100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93,
          43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117,
          103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51,
          125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108,
        ],
        [
          100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 95, 40, 91, 97, 45,
          122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50,
          125, 92, 46, 104, 116, 109, 108,
        ],
      ],
      !0
    ),
    yC = new kC(lC, qC, !1),
    zC = new kC(nC, qC, !1),
    wf = {
      Tg: rC,
      Rg: sC,
      ph: tC,
      oh: uC,
      Ug: vC,
      Qh: wC,
      Sg: xC,
      yh: yC,
      zh: zC,
    };
  function AC(a) {
    for (var b = null, c = 0; c < a.length; c++)
      if (
        ((b = a[c]),
        vf(function (d) {
          return d.match(b.src);
        }))
      )
        return b;
    return null;
  }
  var BC =
    'abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting'.split(
      ' '
    );
  var CC = Qf(
      Le(
        new Ke(
          Ie,
          'https://pagead2.googlesyndication.com/omsdk/releases/live/omweb-v1.js'
        )
      )
    ),
    DC = Qf(
      Le(
        new Ke(
          Ie,
          'https://pagead2.googlesyndication.com/omsdk/releases/canary/omweb-v1.js'
        )
      )
    );
  var GC = function (a, b) {
      EC ? (a.srcdoc = b) : (a = a.contentWindow) && FC(a.document, b);
    },
    EC = bc && 'srcdoc' in Cg(document, 'IFRAME'),
    FC = function (a, b) {
      a.open('text/html', 'replace');
      Wg(a, gg(b));
      a.close();
    };
  function HC(a) {
    return (a = Ig(a)) && a.omidSessionInterface
      ? a.omidSessionInterface
      : null;
  }
  function IC(a, b) {
    var c = Eg('IFRAME', {
      sandbox: 'allow-scripts allow-same-origin',
      style: 'display: none',
    });
    a.appendChild(c);
    a = '<script src=' + (Ai(Aj) ? DC : CC).La() + '>\x3c/script>';
    b &&
      (a +=
        "\n      <script>\n        window.addEventListener('message', function(e) {\n          if (e.data.type === 'innerBridgeIframeLoaded') {\n            window.frameElement.parentElement\n              .querySelector('#" +
        b +
        "').contentWindow\n              .postMessage({type: 'omidIframeLoaded'}, '*');\n          }\n        });\n      \x3c/script>\n    ");
    b = new Promise(function (d, e) {
      c.addEventListener('load', function () {
        HC(c) ? d(c) : e();
      });
    });
    GC(c, a);
    return b;
  }
  var JC = function (a, b) {
    O.call(this);
    this.j = HC(a);
    this.h = b;
  };
  t(JC, O);
  var LC = function (a) {
      try {
        a.j.registerSessionObserver(function (b) {
          'sessionStart' == b.type
            ? KC(a, a.h)
            : 'sessionFinish' == b.type && LC(a);
        });
      } catch (b) {
        a.dispatchEvent(new Event('error'));
      }
    },
    KC = function (a, b) {
      b instanceof Dy && (b = b.T);
      try {
        a.j.setVideoElement(b);
      } catch (c) {
        a.dispatchEvent(new Event('error'));
      }
    };
  var MC = function (a) {
    this.data = a;
  };
  l = MC.prototype;
  l.getTotalAds = function () {
    return this.data.totalAds;
  };
  l.getMaxDuration = function () {
    return this.data.maxDuration;
  };
  l.getAdPosition = function () {
    return this.data.adPosition;
  };
  l.getPodIndex = function () {
    return this.data.podIndex;
  };
  l.getTimeOffset = function () {
    return this.data.timeOffset;
  };
  l.getIsBumper = function () {
    return this.data.isBumper;
  };
  MC.prototype.getIsBumper = MC.prototype.getIsBumper;
  MC.prototype.getTimeOffset = MC.prototype.getTimeOffset;
  MC.prototype.getPodIndex = MC.prototype.getPodIndex;
  MC.prototype.getAdPosition = MC.prototype.getAdPosition;
  MC.prototype.getMaxDuration = MC.prototype.getMaxDuration;
  MC.prototype.getTotalAds = MC.prototype.getTotalAds;
  var NC = function (a) {
    this.wa = a;
  };
  l = NC.prototype;
  l.getContent = function () {
    return this.wa.content;
  };
  l.getContentType = function () {
    return this.wa.contentType;
  };
  l.getWidth = function () {
    return this.yb().width;
  };
  l.getHeight = function () {
    return this.yb().height;
  };
  l.getAdSlotId = function () {
    return this.wa.adSlotId;
  };
  l.yb = function () {
    return this.wa.size;
  };
  l.ae = function () {
    return this.wa.resourceType;
  };
  var Az = function (a) {
    return (a = a.wa.backupCompanions)
      ? a.map(function (b) {
          return new NC(b);
        })
      : [];
  };
  NC.prototype.getAdSlotId = NC.prototype.getAdSlotId;
  NC.prototype.getHeight = NC.prototype.getHeight;
  NC.prototype.getWidth = NC.prototype.getWidth;
  NC.prototype.getContentType = NC.prototype.getContentType;
  NC.prototype.getContent = NC.prototype.getContent;
  var OC = function (a, b) {
    this.j = a;
    this.h = b;
  };
  OC.prototype.getAdIdValue = function () {
    return this.j;
  };
  OC.prototype.getAdIdRegistry = function () {
    return this.h;
  };
  OC.prototype.getAdIdRegistry = OC.prototype.getAdIdRegistry;
  OC.prototype.getAdIdValue = OC.prototype.getAdIdValue;
  var Y = function (a) {
    this.h = a;
  };
  Y.prototype.getAdId = function () {
    return this.h.adId;
  };
  Y.prototype.getCreativeAdId = function () {
    return this.h.creativeAdId;
  };
  Y.prototype.getCreativeId = function () {
    return this.h.creativeId;
  };
  var PC = function (a) {
    return a.h.adQueryId;
  };
  l = Y.prototype;
  l.getAdSystem = function () {
    return this.h.adSystem;
  };
  l.getAdvertiserName = function () {
    return this.h.advertiserName;
  };
  l.getApiFramework = function () {
    return this.h.apiFramework;
  };
  l.getWrapperAdIds = function () {
    return this.h.adWrapperIds;
  };
  l.getWrapperCreativeIds = function () {
    return this.h.adWrapperCreativeIds;
  };
  l.getWrapperAdSystems = function () {
    return this.h.adWrapperSystems;
  };
  l.isLinear = function () {
    return this.h.linear;
  };
  l.isSkippable = function () {
    return this.h.skippable;
  };
  l.getContentType = function () {
    return this.h.contentType;
  };
  l.getDescription = function () {
    return this.h.description;
  };
  l.getTitle = function () {
    return this.h.title;
  };
  l.getDuration = function () {
    return this.h.duration;
  };
  l.getVastMediaWidth = function () {
    return this.h.vastMediaWidth;
  };
  l.getVastMediaHeight = function () {
    return this.h.vastMediaHeight;
  };
  l.getWidth = function () {
    return this.h.width;
  };
  l.getHeight = function () {
    return this.h.height;
  };
  l.getUiElements = function () {
    return this.h.uiElements;
  };
  l.getMinSuggestedDuration = function () {
    return this.h.minSuggestedDuration;
  };
  l.getAdPodInfo = function () {
    return new MC(this.h.adPodInfo);
  };
  l.getCompanionAds = function (a, b, c) {
    if (!this.h.companions) return [];
    var d = this.h.companions.map(function (e) {
      return new NC(e);
    });
    return zz(
      new wz(
        { size: new G(a, b), Xd: c ? 'SelectFluid' == c.sizeCriteria : !1 },
        c
      ),
      d
    );
  };
  l.getTraffickingParameters = function () {
    return vv(ng(this.h.traffickingParameters));
  };
  l.getTraffickingParametersString = function () {
    return this.h.traffickingParameters;
  };
  l.getVastMediaBitrate = function () {
    return this.h.vastMediaBitrate;
  };
  l.getMediaUrl = function () {
    return this.h.mediaUrl;
  };
  l.getSurveyUrl = function () {
    return this.h.surveyUrl;
  };
  l.getDealId = function () {
    return this.h.dealId;
  };
  l.getUniversalAdIds = function () {
    return (this.h.universalAdIds || []).map(function (a) {
      return new OC(a.adIdValue, a.adIdRegistry);
    });
  };
  l.getUniversalAdIdValue = function () {
    return this.h.universalAdIdValue;
  };
  l.getUniversalAdIdRegistry = function () {
    return this.h.universalAdIdRegistry;
  };
  l.getSkipTimeOffset = function () {
    return this.h.skipTimeOffset;
  };
  l.fe = function () {
    return this.h.disableUi;
  };
  Y.prototype.isUiDisabled = Y.prototype.fe;
  Y.prototype.getSkipTimeOffset = Y.prototype.getSkipTimeOffset;
  Y.prototype.getUniversalAdIdRegistry = Y.prototype.getUniversalAdIdRegistry;
  Y.prototype.getUniversalAdIdValue = Y.prototype.getUniversalAdIdValue;
  Y.prototype.getUniversalAdIds = Y.prototype.getUniversalAdIds;
  Y.prototype.getDealId = Y.prototype.getDealId;
  Y.prototype.getSurveyUrl = Y.prototype.getSurveyUrl;
  Y.prototype.getMediaUrl = Y.prototype.getMediaUrl;
  Y.prototype.getVastMediaBitrate = Y.prototype.getVastMediaBitrate;
  Y.prototype.getTraffickingParametersString =
    Y.prototype.getTraffickingParametersString;
  Y.prototype.getTraffickingParameters = Y.prototype.getTraffickingParameters;
  Y.prototype.getCompanionAds = Y.prototype.getCompanionAds;
  Y.prototype.getAdPodInfo = Y.prototype.getAdPodInfo;
  Y.prototype.getMinSuggestedDuration = Y.prototype.getMinSuggestedDuration;
  Y.prototype.getUiElements = Y.prototype.getUiElements;
  Y.prototype.getHeight = Y.prototype.getHeight;
  Y.prototype.getWidth = Y.prototype.getWidth;
  Y.prototype.getVastMediaHeight = Y.prototype.getVastMediaHeight;
  Y.prototype.getVastMediaWidth = Y.prototype.getVastMediaWidth;
  Y.prototype.getDuration = Y.prototype.getDuration;
  Y.prototype.getTitle = Y.prototype.getTitle;
  Y.prototype.getDescription = Y.prototype.getDescription;
  Y.prototype.getContentType = Y.prototype.getContentType;
  Y.prototype.isSkippable = Y.prototype.isSkippable;
  Y.prototype.isLinear = Y.prototype.isLinear;
  Y.prototype.getWrapperAdSystems = Y.prototype.getWrapperAdSystems;
  Y.prototype.getWrapperCreativeIds = Y.prototype.getWrapperCreativeIds;
  Y.prototype.getWrapperAdIds = Y.prototype.getWrapperAdIds;
  Y.prototype.getApiFramework = Y.prototype.getApiFramework;
  Y.prototype.getAdvertiserName = Y.prototype.getAdvertiserName;
  Y.prototype.getAdSystem = Y.prototype.getAdSystem;
  Y.prototype.getCreativeId = Y.prototype.getCreativeId;
  Y.prototype.getCreativeAdId = Y.prototype.getCreativeAdId;
  Y.prototype.getAdId = Y.prototype.getAdId;
  var QC = function (a) {
    this.h = a;
  };
  QC.prototype.getCuePoints = function () {
    return this.h;
  };
  QC.prototype.getCuePoints = QC.prototype.getCuePoints;
  var RC = function () {
      this.autoAlign = !0;
      this.bitrate = -1;
      this.enablePreloading = this.disableUi = this.disableClickThrough = !1;
      this.loadVideoTimeout = 8e3;
      this.mimeTypes = null;
      this.playAdsAfterTime = -1;
      this.restoreCustomPlaybackStateOnAdBreakComplete = !1;
      this.uiElements = null;
      this.useStyledNonLinearAds =
        this.useStyledLinearAds =
        this.useLearnMoreButton =
          !1;
      this.useVideoAdUi = !0;
    },
    SC = function (a, b) {
      var c = {};
      Object.assign(c, a);
      b && (c.disableClickThrough = !0);
      return c;
    };
  RC.prototype.append = function (a) {
    if (a) {
      null != a.autoAlign && (this.autoAlign = a.autoAlign);
      var b = sg(a.bitrate);
      'number' === typeof b && !isNaN(b) && 0 < b && (this.bitrate = b);
      this.disableClickThrough =
        a.disableClickThrough || this.disableClickThrough;
      this.disableUi = a.disableUi || this.disableUi;
      this.enablePreloading = a.enablePreloading || this.enablePreloading;
      a.mimeTypes && 0 != a.mimeTypes.length && (this.mimeTypes = a.mimeTypes);
      b = sg(a.playAdsAfterTime);
      'number' === typeof b &&
        !isNaN(b) &&
        0 < b &&
        (this.playAdsAfterTime = b);
      this.restoreCustomPlaybackStateOnAdBreakComplete =
        a.restoreCustomPlaybackStateOnAdBreakComplete ||
        this.restoreCustomPlaybackStateOnAdBreakComplete;
      b = sg(a.loadVideoTimeout);
      'number' === typeof b &&
        !isNaN(b) &&
        0 < b &&
        (this.loadVideoTimeout = b);
      this.uiElements = a.uiElements || this.uiElements;
      this.useLearnMoreButton = a.useLearnMoreButton || this.useLearnMoreButton;
      this.useStyledLinearAds = a.useStyledLinearAds || this.useStyledLinearAds;
      this.useStyledNonLinearAds =
        a.useStyledNonLinearAds || this.useStyledNonLinearAds;
      this.useVideoAdUi = !1 === a.useVideoAdUi ? !1 : this.useVideoAdUi;
    }
  };
  w(
    'module$contents$ima$AdsRenderingSettings_AdsRenderingSettings.AUTO_SCALE',
    -1
  );
  var TC = null,
    UC = function () {
      O.call(this);
      this.h = null;
      this.C = new Cv(this);
      We(this, this.C);
      this.j = new Map();
      this.A = new Map();
      this.l = this.F = !1;
      this.B = null;
    },
    VC;
  t(UC, O);
  var WC = function () {
      null == TC && (TC = new UC());
      return TC;
    },
    Ss = function (a, b, c) {
      var d = {};
      d.queryId = b;
      d.viewabilityData = c;
      a.h && pz(a.h, 'activityMonitor', 'viewabilityMeasurement', d);
    };
  UC.prototype.destroy = function () {
    this.C.ob(this.h, 'activityMonitor', this.G);
    this.l = !1;
    this.j.clear();
    this === VC && (VC = null);
  };
  UC.prototype.N = function () {
    this.destroy();
    O.prototype.N.call(this);
  };
  UC.prototype.init = function (a) {
    if (!this.l) {
      if ((this.h = a || null))
        this.C.P(this.h, 'activityMonitor', this.G), XC(this);
      if (
        !(
          v.ima &&
          v.ima.video &&
          v.ima.video.client &&
          v.ima.video.client.tagged
        )
      ) {
        w('ima.video.client.sdkTag', !0);
        var b = v.document;
        a = Cg(document, 'SCRIPT');
        var c = Qf(
          Le(new Ke(Ie, 'https://s0.2mdn.net/instream/video/client.js'))
        );
        a.src = Pf(c);
        Vg(a);
        a.async = !0;
        a.type = 'text/javascript';
        b = b.getElementsByTagName('script')[0];
        b.parentNode.insertBefore(a, b);
      }
      Tm();
      K(Is).J = Hz.h;
      this.F = !0;
      K(Is).l = !0;
      this.B = null;
      a = K(Is);
      b = 'h' == ts(a) || 'b' == ts(a);
      c = !(Q(), !1);
      b && c && ((a.F = !0), (a.H = new Nq()));
      this.l = !0;
    }
  };
  var ZC = function (a) {
      if (null == a) return !1;
      if ((fc || hc) && null != a.webkitDisplayingFullscreen)
        return a.webkitDisplayingFullscreen;
      a = YC(a);
      var b = window.screen.availHeight || window.screen.height;
      return (
        0 >= (window.screen.availWidth || window.screen.width) - a.width &&
        42 >= b - a.height
      );
    },
    YC = function (a) {
      var b = {
        left: a.offsetLeft,
        top: a.offsetTop,
        width: a.offsetWidth,
        height: a.offsetHeight,
      };
      try {
        'function' === typeof a.getBoundingClientRect &&
          Hg(ug(a), a) &&
          (b = a.getBoundingClientRect());
      } catch (c) {}
      return b;
    },
    $C = function (a, b, c, d, e) {
      e = void 0 === e ? {} : e;
      if (a.l) {
        d && null == e.opt_osdId && (e.opt_osdId = d);
        if (a.B) return a.B(b, c, e);
        if ((a = d ? a.A.get(d) : Hz.o))
          null == e.opt_fullscreen && (e.opt_fullscreen = ZC(a)),
            null == e.opt_adElement && (e.opt_adElement = a);
        return ht.nb(469, Wa(Vs, b, c, e)) || {};
      }
      return {};
    },
    aD = function (a) {
      var b;
      0 != Hz.h ? (b = K(Is).l) : (b = a.F);
      return b;
    },
    bD = function (a, b) {
      var c = String(Math.floor(1e9 * Math.random()));
      a.A.set(c, b);
      if (Ai(Ij))
        try {
          $l(
            function (d) {
              if (a.h) {
                var e = {};
                e.engagementString = d;
                pz(a.h, 'activityMonitor', 'engagementData', e);
              }
            },
            function () {
              return b;
            }
          );
        } catch (d) {}
      0 != Hz.h && Ts(K(Is), c, a);
      return c;
    },
    cD = function (a, b, c) {
      if (c) a.j.get(c) == b && a.j.delete(c);
      else {
        var d = [];
        a.j.forEach(function (e, f) {
          e == b && d.push(f);
        });
        d.forEach(a.j.delete, a.j);
      }
    },
    Os = function (a, b) {
      a = a.j.get(b);
      return 'function' === typeof a ? a() : {};
    },
    XC = function (a) {
      if ('function' === typeof window.Goog_AdSense_Lidar_getUrlSignalsArray) {
        var b = {};
        b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
        pz(a.h, 'activityMonitor', 'pageSignals', b);
      }
    };
  UC.prototype.G = function (a) {
    var b = a.ra,
      c = b.queryId,
      d = {},
      e = null;
    d.eventId = b.eventId;
    switch (a.messageType) {
      case 'getPageSignals':
        XC(this);
        break;
      case 'reportVastEvent':
        e = b.vastEvent;
        a = b.osdId;
        var f = {};
        f.opt_fullscreen = b.isFullscreen;
        b.isOverlay && (f.opt_bounds = b.overlayBounds);
        d.viewabilityData = $C(this, e, c, a, f);
        pz(this.h, 'activityMonitor', 'viewability', d);
        break;
      case 'fetchAdTagUrl':
        (c = {}),
          (c.eventId = b.eventId),
          (a = b.osdId),
          Cf(b, 'isFullscreen') && (e = b.isFullscreen),
          Cf(b, 'loggingId') &&
            ((b = b.loggingId),
            (c.loggingId = b),
            WB.h().report(43, {
              step: 'beforeLookup',
              logid: b,
              time: Date.now(),
            })),
          (c.engagementString = dD(this, a, e)),
          this.h && pz(this.h, 'activityMonitor', 'engagement', c);
    }
  };
  var dD = function (a, b, c) {
    var d = b ? a.A.get(b) : Hz.o;
    a = {};
    null != c && (a.fullscreen = c);
    c = '';
    try {
      c = Zl(function () {
        return d;
      }, a);
    } catch (e) {
      c = 'sdktle;' + lg(e.name, 12) + ';' + lg(e.message, 40);
    }
    return c;
  };
  w('ima.common.getVideoMetadata', function (a) {
    return Os(WC(), a);
  });
  w('ima.common.triggerViewabilityMeasurementUpdate', function (a, b) {
    Ss(WC(), a, b);
  });
  var eD = function (a) {
      this.h = a;
      this.l = '';
      this.j = -1;
      this.o = !1;
    },
    gD = function (a, b) {
      if (0 <= a.j) {
        var c = null == b ? function () {} : b,
          d = function () {
            fD(a, c);
            a.h.removeEventListener('loadedmetadata', d, !1);
          };
        a.h.addEventListener('loadedmetadata', d, !1);
        a.h.src = a.l;
        a.h.load();
      } else null != b && b();
    },
    fD = function (a, b) {
      var c = 0 < a.h.seekable.length;
      a.o
        ? c
          ? ((a.h.currentTime = a.j), hD(a), b())
          : setTimeout(function () {
              return void fD(a, b);
            }, 100)
        : (hD(a), b());
    },
    hD = function (a) {
      a.j = -1;
      a.l = '';
      a.o = !1;
    };
  var iD = new G(5, 5),
    jD = function (a) {
      O.call(this);
      this.h = a;
      this.aa = null;
      this.B = new eD(a);
      this.j = new Cv(this);
      We(this, this.j);
      this.A = 0;
      this.J = this.F = this.M = this.Z = this.H = !1;
      this.L = this.l = null;
      this.U = new G(this.h.offsetWidth, this.h.offsetHeight);
      this.Sa = null;
      this.V = ZC(this.h);
      this.X = !1;
    };
  t(jD, O);
  l = jD.prototype;
  l.Jd = function () {
    var a = this.B;
    a.l = a.h.currentSrc;
    a.o = 0 < a.h.seekable.length;
    a.j = a.h.ended ? -1 : a.h.currentTime;
  };
  l.ac = function (a) {
    gD(this.B, a);
  };
  l.load = function (a, b) {
    var c = L.h().h;
    c.V = !0;
    $h(c);
    ki('hvd_lc');
    kD(this);
    this.M = !1;
    if (b)
      if ((ki('hvd_ad'), b instanceof Ou)) {
        if ((ki('hvd_mad'), (c = b.getMediaUrl()))) {
          ki('hvd_admu');
          ki('hvd_src');
          this.h.src = c;
          this.h.load();
          return;
        }
      } else if (b instanceof Nu) {
        ki('hvd_dad');
        c = b.o;
        var d = b.j,
          e = b.l,
          f = b.h,
          g = b.bb,
          h = b.Ua;
        if (c && d && e && f && g && h && (ki('hvd_addu'), b.Aa)) {
          ki('hvd_admse');
          b = e + '; codecs="' + g + '"';
          f = f + '; codecs="' + h + '"';
          if (
            Mx() &&
            Mx() &&
            MediaSource.isTypeSupported(b) &&
            Mx() &&
            MediaSource.isTypeSupported(f)
          ) {
            ki('hvd_ymse');
            ki('hvd_mse');
            a = !1;
            try {
              -1 != window.location.search.indexOf('goog_limavideo=true') &&
                (a = !0);
            } catch (k) {}
            v.customElements
              ? a
                ? (a = !0)
                : (Ai(Jj) && WB.h().report(153, { limvid: 'vd' }),
                  (a =
                    Ai(Jj) ||
                    Ai(Dj) ||
                    Ai(Hj) ||
                    Ai(Gj) ||
                    Ai(Ej) ||
                    Ai(Fj) ||
                    Ai(Bj) ||
                    Ai(Cj)
                      ? !0
                      : !1))
              : (a = !1);
            a && this.h instanceof Dy
              ? ((a = this.h), (a.vb = c), (a.Mb = d))
              : ((this.aa = new az(this.h, [
                  new Px(c, b, 35e4, new kw()),
                  new Px(d, f, 82e3, new kw()),
                ])),
                We(this, this.aa),
                (c = this.h),
                (d = this.aa),
                d.h || (d.h = window.URL.createObjectURL(d.ga)),
                (d = d.h),
                (c.src = d));
            this.h.load();
            return;
          }
          ki('hvd_nmse');
        }
      } else ki('hvd_uad');
    a ? (ki('hvd_src'), (this.h.src = a)) : ki('hvd_vn');
    this.h.load();
  };
  l.setVolume = function (a) {
    this.h.volume = Math.max(a, 0);
    this.h.muted = 0 == a ? !0 : !1;
  };
  l.getVolume = function () {
    return this.h.muted ? 0 : this.h.volume;
  };
  var lD = function (a) {
    a.X = !1;
    a.M || vb()
      ? ((a.J = !1),
        (a.l = a.h.play()),
        null != a.l &&
          ((a.L = null),
          a.l
            .then(function () {
              a.l = null;
              a.he(a.L);
              a.L = null;
            })
            .catch(function (b) {
              a.l = null;
              var c = '';
              null != b && null != b.name && (c = b.name);
              'AbortError' == c || 'NotAllowedError' == c
                ? a.dispatchEvent('autoplayDisallowed')
                : a.ca();
            })))
      : (a.J = !0);
  };
  jD.prototype.pause = function () {
    null == this.l && ((this.X = !0), this.h.pause());
  };
  jD.prototype.getCurrentTime = function () {
    return this.h.currentTime;
  };
  jD.prototype.getDuration = function () {
    return isNaN(this.h.duration) ? -1 : this.h.duration;
  };
  jD.prototype.N = function () {
    if (this.Sa) {
      var a = ov.get(this.Sa);
      rv(a);
    }
    mD(this);
    O.prototype.N.call(this);
  };
  var mD = function (a) {
      null != a.C && (gC(a.C), (a.C = null));
      null != a.O && a.O.W();
      Gv(a.j);
      kD(a);
    },
    kD = function (a) {
      a.Z = !1;
      a.F = !1;
      a.H = !1;
      a.J = !1;
      a.A = 0;
      a.l = null;
      a.L = null;
      Ue(a.G);
    };
  jD.prototype.tb = function (a) {
    this.dispatchEvent(a.type);
  };
  var oD = function (a) {
    if (!a.F) {
      a.F = !0;
      a.dispatchEvent('start');
      try {
        if (Ai(Jj) && v.customElements) {
          var b = v.customElements.get('lima-video');
          a.h instanceof b
            ? WB.h().report(153, { limvid: 'limastart' })
            : WB.h().report(153, { limvid: 'videostart' });
        }
      } catch (c) {
        WB.h().report(153, { limvid: 'startfail' });
      }
      b =
        'function' === typeof a.h.getAttribute &&
        null != a.h.getAttribute('playsinline');
      b = void 0 === b ? !1 : b;
      ((gc || fv() || gv(10)) && (b || (IB.h(), 1))) ||
        (IB.h(), rb(ub(), 'Xbox')) ||
        (fc || hc
          ? 0
          : (!ec || (ec && ev(dv, 4))) && (so() ? (IB.h(), !1) : !KB())) ||
        !ec ||
        (ec && ev(dv, 3)) ||
        ((fc || hc) && !gv(4)) ||
        nD(a);
    }
  };
  l = jD.prototype;
  l.Lf = function () {
    this.M = !0;
    this.J && lD(this);
    this.J = !1;
    pD(this);
  };
  l.Mf = function () {
    this.Z || ((this.Z = !0), this.dispatchEvent('loaded'));
  };
  l.he = function (a) {
    null != this.l
      ? (this.L = a)
      : (this.dispatchEvent('play'), ic || gc || fv() || uc || oD(this));
  };
  l.Pf = function (a) {
    if (!this.F && (ic || gc || fv() || uc)) {
      if (0 >= this.getCurrentTime()) return;
      if (uc && this.h.ended && 1 == this.getDuration()) {
        this.ca(a);
        return;
      }
      oD(this);
    }
    if (ic || rb(ub(), 'Nintendo WiiU')) {
      if (1.5 < this.getCurrentTime() - this.A) {
        this.H = !0;
        this.h.currentTime = this.A;
        return;
      }
      this.H = !1;
      this.getCurrentTime() > this.A && (this.A = this.getCurrentTime());
    }
    this.dispatchEvent('timeUpdate');
  };
  l.Qf = function () {
    this.dispatchEvent('volumeChange');
  };
  l.Of = function () {
    if (this.F && ic && !this.X && (2 > qD(this) || this.H)) {
      this.G = new ql(250);
      this.j.P(this.G, 'tick', this.Ka);
      this.G.start();
      var a = !0;
    } else a = !1;
    a || this.l || this.dispatchEvent('pause');
  };
  l.Kf = function () {
    var a = !0;
    if (ic || rb(ub(), 'Nintendo WiiU')) a = this.A >= this.h.duration - 1.5;
    !this.H && a && this.dispatchEvent('end');
  };
  var nD = function (a) {
    a.dispatchEvent('beginFullscreen');
  };
  jD.prototype.na = function () {
    this.dispatchEvent('endFullscreen');
  };
  jD.prototype.ca = function () {
    this.dispatchEvent('error');
  };
  jD.prototype.ua = function () {
    this.dispatchEvent('click');
  };
  var pD = function (a) {
    a.h instanceof HTMLElement &&
      ((a.Sa = tv(a.h, iD)),
      a.Sa.then(function (b) {
        a.ya() || M(L.h(), 'ps', b.width + 'x' + b.height);
      }));
  };
  jD.prototype.rb = function () {
    var a = new G(this.h.offsetWidth, this.h.offsetHeight),
      b = ZC(this.h);
    if (a.width != this.U.width || a.height != this.U.height)
      !this.V && b ? nD(this) : this.V && !b && this.na(),
        (this.U = a),
        (this.V = b);
  };
  jD.prototype.Ka = function () {
    if (
      !this.h.ended &&
      this.h.paused &&
      (ic || vc ? this.h.currentTime < this.h.duration : 1)
    ) {
      var a = this.h.duration - this.h.currentTime,
        b = qD(this);
      0 < b && (2 <= b || 2 > a) && (Ue(this.G), lD(this));
    } else Ue(this.G);
  };
  var qD = function (a) {
    var b;
    a: {
      for (b = a.h.buffered.length - 1; 0 <= b; ) {
        if (a.h.buffered.start(b) <= a.h.currentTime) {
          b = a.h.buffered.end(b);
          break a;
        }
        b--;
      }
      b = 0;
    }
    return b - a.h.currentTime;
  };
  jD.prototype.ub = function () {
    WB.h().report(139);
    nD(this);
  };
  var sD = function (a, b, c, d) {
    E.call(this);
    this.B = a;
    this.A = b;
    this.l = c;
    this.C = d;
    this.o = !1;
    a = new Cv(this);
    We(this, a);
    this.h = this.j = null;
    rD(this);
  };
  t(sD, E);
  var uD = function (a) {
      a.o = !0;
      tD(a);
    },
    rD = function (a) {
      IC(a.B, a.C)
        .then(function (b) {
          return void vD(a, b);
        })
        .catch(function () {
          return void wD(a);
        });
    },
    tD = function (a) {
      a.j &&
        a.o &&
        Ig(a.j).postMessage({ type: 'innerBridgeIframeLoaded' }, '*');
    },
    vD = function (a, b) {
      a.j = b;
      a.h = new JC(b, a.l);
      a.h.P('error', function () {
        return void wD(a);
      });
      LC(a.h);
      tD(a);
    },
    wD = function (a) {
      pz(a.A, 'omid', 'iframeFailed');
      a.W();
    };
  sD.prototype.N = function () {
    this.j && (Fg(this.j), (this.j = null));
    E.prototype.N.call(this);
  };
  var xD = function (a, b, c, d) {
    E.call(this);
    this.o = a;
    this.l = b;
    this.h = c;
    this.C = d;
    this.j = new Cv(this);
    We(this, this.j);
    this.j.P(this.o, d, this.B);
  };
  t(xD, E);
  var zD = function (a, b) {
    var c = b.ra;
    switch (b.messageType) {
      case 'showVideo':
        c = a.l;
        null != c.j && yD(c.j.h, !0);
        break;
      case 'hide':
        c = a.l;
        null != c.j && yD(c.j.h, !1);
        break;
      case 'resizeAndPositionVideo':
        a = a.l.h;
        c = new qh(c.x, c.y, c.width, c.height);
        a.h.style.left = String(c.left) + 'px';
        a.h.style.top = String(c.top) + 'px';
        a.h.style.width = String(c.width) + 'px';
        a.h.style.height = String(c.height) + 'px';
        break;
      case 'restoreSizeAndPositionVideo':
        (c = a.l.h),
          (c.h.style.width = '100%'),
          (c.h.style.height = '100%'),
          (c.h.style.left = '0'),
          (c.h.style.right = '0');
    }
  };
  xD.prototype.B = function (a) {
    var b = a.ra;
    switch (a.messageType) {
      case 'activate':
        a = this.l;
        var c = this.h;
        a.h != c &&
          a.j &&
          a.o &&
          a.l &&
          (c.setVolume(a.h.getVolume()),
          (c = a.h),
          (a.h = a.l),
          (a.l = c),
          (c = a.j),
          (a.j = a.o),
          (a.o = c),
          yD(a.o.h, !1),
          null != (c = a.K.F) &&
            ((a = a.h.B.h),
            (c.l = a),
            c.h && ((c = c.h), (c.h = a), KC(c, a))));
        break;
      case 'startTracking':
        a = this.h;
        c = this.A;
        this.j.P(a, zf(gw), c);
        this.j.P(a, BC, c);
        a = this.h;
        mD(a);
        a.j.P(a.h, BC, a.tb);
        a.j.P(a.h, 'ended', a.Kf);
        a.j.P(a.h, 'webkitbeginfullscreen', a.ub);
        a.j.P(a.h, 'webkitendfullscreen', a.na);
        a.j.P(a.h, 'loadedmetadata', a.Lf);
        a.j.P(a.h, 'pause', a.Of);
        a.j.P(a.h, 'playing', a.he);
        a.j.P(a.h, 'timeupdate', a.Pf);
        a.j.P(a.h, 'volumechange', a.Qf);
        a.j.P(a.h, 'error', a.ca);
        a.j.P(a.h, uc || (ic && !gv(8)) ? 'loadeddata' : 'canplay', a.Mf);
        a.C = new cC();
        a.j.P(a.C, 'click', a.ua);
        eC(a.C, a.h);
        a.O = new ql(1e3);
        a.j.P(a.O, 'tick', a.rb);
        a.O.start();
        break;
      case 'stopTracking':
        a = this.h;
        c = this.A;
        this.j.ob(a, zf(gw), c);
        this.j.ob(a, BC, c);
        mD(this.h);
        break;
      case 'exitFullscreen':
        a = this.h;
        (fc || hc) &&
          a.h.webkitDisplayingFullscreen &&
          a.h.webkitExitFullscreen();
        break;
      case 'play':
        lD(this.h);
        break;
      case 'pause':
        this.h.pause();
        break;
      case 'load':
        a = this.h;
        c = b.videoUrl;
        var d = b.muxedMediaUrl,
          e = b.muxedMimeType,
          f = b.muxedAudioCodec,
          g = b.muxedVideoCodec,
          h = b.demuxedAudioUrl,
          k = b.demuxedVideoUrl,
          n = b.demuxedAudioMimeType,
          m = b.demuxedVideoMimeType,
          x = b.demuxedAudioCodec,
          u = b.demuxedVideoCodec;
        b = b.mseCompatible;
        var y = null;
        k &&
          h &&
          b &&
          m &&
          n &&
          u &&
          x &&
          (y = new Nu({
            kg: k,
            bf: h,
            Ei: null,
            hi: null,
            jg: m,
            af: n,
            bb: u,
            Ua: x,
            height: null,
            width: null,
            Aa: b,
            Di: null,
            gi: null,
          }));
        h = null;
        d &&
          e &&
          g &&
          f &&
          (h = new Ou({
            If: d,
            ri: null,
            mimeType: e,
            bb: g,
            Ua: f,
            height: null,
            width: null,
            Aa: b,
            li: null,
          }));
        y ? a.load(c, y) : h ? a.load(c, h) : a.load(c, null);
        break;
      case 'unload':
        a = this.h;
        kD(a);
        a.M = !1;
        'removeAttribute' in a.h ? a.h.removeAttribute('src') : (a.h.src = '');
        a.h.load();
        break;
      case 'setCurrentTime':
        this.h.h.currentTime = b.currentTime;
        break;
      case 'setVolume':
        this.h.setVolume(b.volume);
    }
  };
  xD.prototype.A = function (a) {
    var b = {};
    switch (a.type) {
      case 'autoplayDisallowed':
        a = 'autoplayDisallowed';
        break;
      case 'beginFullscreen':
        a = 'fullscreen';
        break;
      case 'endFullscreen':
        a = 'exitFullscreen';
        break;
      case 'click':
        a = 'click';
        break;
      case 'end':
        a = 'end';
        break;
      case 'error':
        a = 'error';
        break;
      case 'loaded':
        a = 'loaded';
        break;
      case 'mediaLoadTimeout':
        a = 'mediaLoadTimeout';
        break;
      case 'pause':
        a = 'pause';
        b.ended = this.h.h.ended;
        break;
      case 'play':
        a = 'play';
        break;
      case 'skip':
        a = 'skip';
        break;
      case 'start':
        a = 'start';
        b.volume = this.h.getVolume();
        break;
      case 'timeUpdate':
        a = 'timeupdate';
        b.currentTime = this.h.getCurrentTime();
        b.duration = this.h.getDuration();
        break;
      case 'volumeChange':
        a = 'volumeChange';
        b.volume = this.h.getVolume();
        break;
      case 'loadedmetadata':
        a = a.type;
        b.duration = this.h.getDuration();
        break;
      case 'abort':
      case 'canplay':
      case 'canplaythrough':
      case 'durationchange':
      case 'emptied':
      case 'loadstart':
      case 'loadeddata':
      case 'progress':
      case 'ratechange':
      case 'seeked':
      case 'seeking':
      case 'stalled':
      case 'suspend':
      case 'waiting':
        a = a.type;
        break;
      default:
        return;
    }
    pz(this.o, this.C, a, b);
  };
  var AD = function (a, b) {
    E.call(this);
    this.j = b;
    this.l = new xD(a, b, this.j.h, 'videoDisplay1');
    We(this, this.l);
    this.h = null;
    var c = this.j.l;
    null != c &&
      ((this.h = new xD(a, b, c, 'videoDisplay2')), We(this, this.h));
  };
  t(AD, E);
  var BD = function (a, b, c, d) {
    var e = kh('IFRAME');
    e.id = b;
    e.name = b;
    e.width = String(c);
    e.height = String(d);
    e.allowTransparency = 'true';
    e.scrolling = 'no';
    e.marginWidth = '0';
    e.marginHeight = '0';
    e.frameBorder = '0';
    e.style.border = '0';
    e.style.verticalAlign = 'bottom';
    e.src = 'about:blank';
    e.setAttribute('role', 'region');
    e.setAttribute('aria-label', 'Advertisement');
    e.title = '3rd party ad content';
    e.tabIndex = 0;
    a.appendChild(e);
    return e;
  };
  function CD(a) {
    return gg(null === a ? 'null' : void 0 === a ? 'undefined' : a);
  }
  function DD() {
    var a;
    var b = H();
    b = void 0 === b ? window : b;
    b = void 0 === b ? window : b;
    b = b.googletag;
    b = (null == b ? 0 : b.apiReady) ? b : void 0;
    return null == b
      ? void 0
      : null == (a = b.companionAds)
      ? void 0
      : a.call(b);
  }
  function ED(a) {
    var b = {};
    b.slotId = a.getSlotId().getId();
    var c = [];
    a = r(a.getSizes() || []);
    for (var d = a.next(); !d.done; d = a.next())
      if (((d = d.value), 'string' !== typeof d)) {
        var e = {};
        c.push(((e.adWidth = d.getWidth()), (e.adHeight = d.getHeight()), e));
      } else 'fluid' === d && ((d = {}), c.push(((d.fluidSize = !0), d)));
    return (b.adSizes = c), b;
  }
  function FD(a) {
    var b = DD();
    if (b && a && Array.isArray(a)) {
      var c = new Map(
        b.getSlots().map(function (u) {
          return [u.getSlotId().getId(), u];
        })
      );
      a = r(a);
      for (var d = a.next(); !d.done; d = a.next()) {
        var e = d.value,
          f = c.get(e.slotId);
        if (f && !b.isSlotAPersistentRoadblock(f)) {
          var g = e.adContent;
          if (g && (d = wg(f.getSlotId().getDomId()))) {
            d.style.display = '';
            var h = e.adWidth,
              k = e.adHeight;
            e.fluidSize && ((k = Sl(d)), (h = k.width), (k = k.height));
            d.textContent = '';
            if (e.friendlyIframeRendering)
              try {
                var n = 'google_companion_' + f.getSlotId().getId(),
                  m = BD(d, n, h, k),
                  x = m.contentWindow
                    ? m.contentWindow.document
                    : m.contentDocument;
                ac && x.open('text/html', 'replace');
                Wg(x, CD(g));
                x.close();
              } catch (u) {}
            else
              Ug(d, CD(g)),
                (d.style.width = h + 'px'),
                (d.style.height = k + 'px');
            b.slotRenderEnded(f, h, k);
            (e = e.onAdContentSet) && e(d);
          }
        }
      }
    }
  }
  var GD = function (a, b, c, d, e, f) {
    qz.call(this, a, b, c, d, e);
    this.h = f;
  };
  t(GD, qz);
  var HD = function (a, b) {
    O.call(this);
    this.A = a;
    this.l = b;
    this.h = {};
    this.j = new Cv(this);
    We(this, this.j);
    this.j.P(H(), 'message', this.B);
  };
  t(HD, O);
  var ID = function (a, b) {
      var c = b.h;
      a.h.hasOwnProperty(c) && pz(a.h[c], b.type, b.messageType, b.ra);
    },
    JD = function (a, b, c, d) {
      a.h.hasOwnProperty(b) ||
        ((c = new $B(b, c)),
        a.j.P(c, a.A, function (e) {
          this.dispatchEvent(
            new GD(e.type, e.messageType, e.ra, e.Zb, e.origin, b)
          );
        }),
        (c.h = d),
        c.connect(),
        (a.h[b] = c));
    };
  HD.prototype.N = function () {
    for (var a in this.h) Ue(this.h[a]);
    O.prototype.N.call(this);
  };
  HD.prototype.B = function (a) {
    a = a.h;
    var b = aC(a.data);
    if (null != b) {
      var c = b.channel;
      if (this.l && !this.h.hasOwnProperty(c)) {
        var d = b.sid;
        JD(this, c, d, a.source);
        this.dispatchEvent(
          new GD(b.name, b.type, b.data || {}, d, a.origin, c)
        );
      }
    }
  };
  function KD() {
    return !!Ma('googletag.cmd', H());
  }
  function LD() {
    var a = Ma('googletag.console', H());
    return null != a ? a : null;
  }
  var MD = function () {
    Cv.call(this);
    this.l = new HD('gpt', !0);
    We(this, this.l);
    this.P(this.l, 'gpt', this.B);
    this.h = null;
    KD() ||
      H().top === H() ||
      ((this.h = new HD('gpt', !1)),
      We(this, this.h),
      this.P(this.h, 'gpt', this.A));
  };
  t(MD, Cv);
  MD.prototype.B = function (a) {
    var b = a.origin,
      c = '//imasdk.googleapis.com'.match(Mg);
    b = b.match(Mg);
    if (c[3] == b[3] && c[4] == b[4])
      if (null != this.h)
        JD(this.h, a.h, a.Zb, H().parent), null != this.h && ID(this.h, a);
      else if (((c = a.ra), null != c && void 0 !== c.scope)) {
        b = c.scope;
        c = c.args;
        var d;
        if ('proxy' == b) {
          var e = a.messageType;
          'isGptPresent' == e
            ? (d = KD())
            : 'isConsolePresent' == e && (d = null != LD());
        } else if (KD())
          if ('pubads' == b || 'companionAds' == b) {
            d = a.messageType;
            var f = H().googletag;
            if (
              null != f &&
              null != f[b] &&
              ((b = f[b]()), null != b && ((d = b[d]), null != d))
            )
              try {
                e = d.apply(b, c);
              } catch (g) {}
            d = e;
          } else if ('console' == b) {
            if (((e = LD()), null != e && ((b = e[a.messageType]), null != b)))
              try {
                b.apply(e, c);
              } catch (g) {}
          } else
            null === b &&
              ((e = a.messageType),
              'googleGetCompanionAdSlots' == e
                ? (e = DD())
                  ? ((e = e.getSlots().map(ED)), (d = e.length ? e : null))
                  : (d = null)
                : ('googleSetCompanionAdContents' == e && FD(c[0]),
                  (d = null)));
        void 0 !== d && ((a.ra.returnValue = d), ID(this.l, a));
      }
  };
  MD.prototype.A = function (a) {
    ID(this.l, a);
  };
  var ND = function (a, b) {
    if (a.h) {
      var c = a.h;
      Ue(c.h[b]);
      delete c.h[b];
    }
    a.l && ((a = a.l), Ue(a.h[b]), delete a.h[b]);
  };
  var PD = function (a, b) {
      var c = Array.prototype.slice.call(arguments),
        d = c.shift();
      if ('undefined' == typeof d)
        throw Error('[goog.string.format] Template required');
      return d.replace(
        /%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g,
        function (e, f, g, h, k, n, m, x) {
          if ('%' == n) return '%';
          var u = c.shift();
          if ('undefined' == typeof u)
            throw Error('[goog.string.format] Not enough arguments');
          arguments[0] = u;
          return OD[n].apply(null, arguments);
        }
      );
    },
    OD = {
      s: function (a, b, c) {
        return isNaN(c) || '' == c || a.length >= Number(c)
          ? a
          : (a =
              -1 < b.indexOf('-', 0)
                ? a + mg(' ', Number(c) - a.length)
                : mg(' ', Number(c) - a.length) + a);
      },
      f: function (a, b, c, d, e) {
        d = a.toString();
        isNaN(e) || '' == e || (d = parseFloat(a).toFixed(e));
        var f =
          0 > Number(a)
            ? '-'
            : 0 <= b.indexOf('+')
            ? '+'
            : 0 <= b.indexOf(' ')
            ? ' '
            : '';
        0 <= Number(a) && (d = f + d);
        if (isNaN(c) || d.length >= Number(c)) return d;
        d = isNaN(e)
          ? Math.abs(Number(a)).toString()
          : Math.abs(Number(a)).toFixed(e);
        a = Number(c) - d.length - f.length;
        return (d =
          0 <= b.indexOf('-', 0)
            ? f + d + mg(' ', a)
            : f + mg(0 <= b.indexOf('0', 0) ? '0' : ' ', a) + d);
      },
      d: function (a, b, c, d, e, f, g, h) {
        return OD.f(parseInt(a, 10), b, c, d, 0, f, g, h);
      },
    };
  OD.i = OD.d;
  OD.u = OD.d;
  function QD() {
    return ['autoplay', 'trust-token-redemption', 'attribution-reporting']
      .filter(function (a) {
        var b = document.featurePolicy;
        return (
          void 0 !== b &&
          'function' == typeof b.allowedFeatures &&
          'object' == typeof b.allowedFeatures() &&
          b.allowedFeatures().includes(a)
        );
      })
      .join(';');
  }
  var SD = function (a, b) {
    O.call(this);
    this.l = new Cv(this);
    We(this, this.l);
    this.L = this.J = null;
    this.H = !1;
    this.C = 'goog_' + og++;
    this.B = new Map();
    var c = this.C,
      d =
        (gh() ? 'https:' : 'http:') +
        PD(
          '//imasdk.googleapis.com/js/core/bridge3.556.1_%s.html',
          Hz.getLocale()
        );
    a: {
      var e = window;
      try {
        do {
          try {
            if (
              0 == e.location.href.indexOf(d) ||
              0 == e.document.referrer.indexOf(d)
            ) {
              var f = !0;
              break a;
            }
          } catch (g) {}
          e = e.parent;
        } while (e != e.top);
      } catch (g) {}
      f = !1;
    }
    f && (d += '?f=' + c);
    f = QD();
    c = Eg('IFRAME', {
      src: d + '#' + c,
      allowFullscreen: !0,
      allow: f,
      id: c,
      style:
        'border:0; opacity:0; margin:0; padding:0; position:relative; color-scheme: light;',
    });
    this.l.Sb(c, 'load', this.Z);
    a.appendChild(c);
    this.h = c;
    this.A = RD(this);
    this.G = b;
    this.j = null;
    this.M = new AD(this.A, this.G);
    We(this, this.M);
    this.G.h && this.l.P(this.A, 'displayContainer', this.U);
    this.l.P(this.A, 'mouse', this.V);
    this.l.P(this.A, 'touch', this.X);
    c = H();
    d = Ma('google.ima.gptProxyInstance', c);
    null != d
      ? (c = d)
      : ((d = new MD()), w('google.ima.gptProxyInstance', d, c), (c = d));
    this.O = c;
    KB() || ((this.F = new sD(a, this.A, b.h.B.h, this.C)), We(this, this.F));
  };
  t(SD, O);
  var RD = function (a, b) {
    b = void 0 === b ? '*' : b;
    var c = a.B.get(b);
    null == c &&
      ((c = new $B(a.C, b)),
      a.H && ((c.h = Ig(a.h)), c.connect()),
      a.B.set(b, c));
    return c;
  };
  SD.prototype.N = function () {
    null !== this.j && (this.j.W(), (this.j = null));
    this.B.forEach(function (a) {
      Ue(a);
    });
    this.B.clear();
    ND(this.O, this.C);
    Fg(this.h);
    O.prototype.N.call(this);
  };
  SD.prototype.V = function (a) {
    var b = a.ra,
      c = Kl(this.h),
      d = document.createEvent('MouseEvent');
    d.initMouseEvent(
      a.messageType,
      !0,
      !0,
      window,
      b.detail,
      b.screenX,
      b.screenY,
      b.clientX + c.x,
      b.clientY + c.y,
      b.ctrlKey,
      b.altKey,
      b.shiftKey,
      b.metaKey,
      b.button,
      null
    );
    this.h.dispatchEvent(d);
  };
  var TD = function (a, b) {
    var c = Kl(a.h),
      d = !!('TouchEvent' in window && 0 < TouchEvent.length);
    b = b.map(function (e) {
      return d
        ? new Touch({
            identifier: e.identifier,
            target: a.h,
            clientX: e.clientX,
            clientY: e.clientY,
            screenX: e.screenX,
            screenY: e.screenY,
            pageX: e.pageX + c.x,
            pageY: e.pageY + c.y,
          })
        : document.createTouch(
            window,
            a.h,
            e.identifier,
            e.pageX + c.x,
            e.pageY + c.y,
            e.screenX,
            e.screenY
          );
    });
    return d ? b : document.createTouchList.apply(document, b);
  };
  SD.prototype.X = function (a) {
    var b = a.ra,
      c = Kl(this.h);
    if ('TouchEvent' in window && 0 < TouchEvent.length)
      (b = {
        bubbles: !0,
        cancelable: !0,
        view: window,
        detail: b.detail,
        ctrlKey: b.ctrlKey,
        altKey: b.altKey,
        shiftKey: b.shiftKey,
        metaKey: b.metaKey,
        touches: TD(this, b.touches),
        targetTouches: TD(this, b.targetTouches),
        changedTouches: TD(this, b.changedTouches),
      }),
        (a = new TouchEvent(a.messageType, b)),
        this.h.dispatchEvent(a);
    else {
      var d = document.createEvent('TouchEvent');
      d.initTouchEvent(
        a.messageType,
        !0,
        !0,
        window,
        b.detail,
        b.screenX,
        b.screenY,
        b.clientX + c.x,
        b.clientY + c.y,
        b.ctrlKey,
        b.altKey,
        b.shiftKey,
        b.metaKey,
        TD(this, b.touches),
        TD(this, b.targetTouches),
        TD(this, b.changedTouches),
        b.scale,
        b.rotation
      );
      this.h.dispatchEvent(d);
    }
  };
  SD.prototype.U = function (a) {
    switch (a.messageType) {
      case 'showVideo':
        null == this.j
          ? ((this.j = new cC()), this.l.P(this.j, 'click', this.aa))
          : gC(this.j);
        eC(this.j, UD(this.G));
        break;
      case 'hide':
        null !== this.j && (this.j.W(), (this.j = null));
    }
    var b = this.M;
    zD(b.l, a);
    b.h && zD(b.h, a);
  };
  SD.prototype.aa = function () {
    pz(this.A, 'displayContainer', 'videoClick');
  };
  SD.prototype.Z = function () {
    var a = this;
    this.J = Qh();
    this.L = Nh();
    this.B.forEach(function (c) {
      c.h = Ig(a.h);
      c.connect();
    });
    var b;
    null == (b = this.F) || uD(b);
    this.H = !0;
  };
  var VD = function (a, b) {
    this.h = a[v.Symbol.iterator]();
    this.j = b;
  };
  VD.prototype[Symbol.iterator] = function () {
    return this;
  };
  VD.prototype.next = function () {
    var a = this.h.next();
    return {
      value: a.done ? void 0 : this.j.call(void 0, a.value),
      done: a.done,
    };
  };
  var WD = function (a, b) {
    return new VD(a, b);
  };
  var $D = function (a) {
      if (a instanceof XD || a instanceof YD || a instanceof ZD) return a;
      if ('function' == typeof a.next)
        return new XD(function () {
          return a;
        });
      if ('function' == typeof a[Symbol.iterator])
        return new XD(function () {
          return a[Symbol.iterator]();
        });
      if ('function' == typeof a.sb)
        return new XD(function () {
          return a.sb();
        });
      throw Error('Not an iterator or iterable.');
    },
    XD = function (a) {
      this.h = a;
    };
  XD.prototype.sb = function () {
    return new YD(this.h());
  };
  XD.prototype[Symbol.iterator] = function () {
    return new ZD(this.h());
  };
  XD.prototype.j = function () {
    return new ZD(this.h());
  };
  var YD = function (a) {
    this.h = a;
  };
  t(YD, Jp);
  YD.prototype.next = function () {
    return this.h.next();
  };
  YD.prototype[Symbol.iterator] = function () {
    return new ZD(this.h);
  };
  YD.prototype.j = function () {
    return new ZD(this.h);
  };
  var ZD = function (a) {
    XD.call(this, function () {
      return a;
    });
    this.l = a;
  };
  t(ZD, XD);
  ZD.prototype.next = function () {
    return this.l.next();
  };
  var aE = function (a, b) {
    this.j = {};
    this.h = [];
    this.l = this.size = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error('Uneven number of arguments');
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else if (a)
      if (a instanceof aE)
        for (c = a.rc(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
      else for (d in a) this.set(d, a[d]);
  };
  aE.prototype.zb = function () {
    bE(this);
    for (var a = [], b = 0; b < this.h.length; b++) a.push(this.j[this.h[b]]);
    return a;
  };
  aE.prototype.rc = function () {
    bE(this);
    return this.h.concat();
  };
  aE.prototype.has = function (a) {
    return cE(this.j, a);
  };
  aE.prototype.wb = function (a, b) {
    if (this === a) return !0;
    if (this.size != a.size) return !1;
    b = b || dE;
    bE(this);
    for (var c, d = 0; (c = this.h[d]); d++)
      if (!b(this.get(c), a.get(c))) return !1;
    return !0;
  };
  var dE = function (a, b) {
    return a === b;
  };
  aE.prototype.isEmpty = function () {
    return 0 == this.size;
  };
  aE.prototype.clear = function () {
    this.j = {};
    this.l = this.size = this.h.length = 0;
  };
  aE.prototype.remove = function (a) {
    cE(this.j, a)
      ? (delete this.j[a],
        --this.size,
        this.l++,
        this.h.length > 2 * this.size && bE(this),
        (a = !0))
      : (a = !1);
    return a;
  };
  var bE = function (a) {
    if (a.size != a.h.length) {
      for (var b = 0, c = 0; b < a.h.length; ) {
        var d = a.h[b];
        cE(a.j, d) && (a.h[c++] = d);
        b++;
      }
      a.h.length = c;
    }
    if (a.size != a.h.length) {
      var e = {};
      for (c = b = 0; b < a.h.length; )
        (d = a.h[b]), cE(e, d) || ((a.h[c++] = d), (e[d] = 1)), b++;
      a.h.length = c;
    }
  };
  l = aE.prototype;
  l.get = function (a, b) {
    return cE(this.j, a) ? this.j[a] : b;
  };
  l.set = function (a, b) {
    cE(this.j, a) || ((this.size += 1), this.h.push(a), this.l++);
    this.j[a] = b;
  };
  l.forEach = function (a, b) {
    for (var c = this.rc(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  l.keys = function () {
    return $D(this.sb(!0)).j();
  };
  l.values = function () {
    return $D(this.sb(!1)).j();
  };
  l.entries = function () {
    var a = this;
    return WD(this.keys(), function (b) {
      return [b, a.get(b)];
    });
  };
  l.sb = function (a) {
    bE(this);
    var b = 0,
      c = this.l,
      d = this,
      e = new Jp();
    e.next = function () {
      if (c != d.l)
        throw Error('The map has changed since the iterator was created');
      if (b >= d.h.length) return Kp;
      var f = d.h[b++];
      return { value: a ? f : d.j[f], done: !1 };
    };
    return e;
  };
  var cE = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  var fE = function () {
    O.call(this);
    this.buffered = new eE();
    this.seekable = new eE();
    this.j = new Cv(this);
    We(this, this.j);
    this.src = this.l = '';
    this.A = !1;
    this.h = null;
    var a = Gz(Hz);
    if (a) {
      a: {
        if (
          Cf(a.h, 'videoElementFakeDuration') &&
          ((a = a.h.videoElementFakeDuration), 'number' === typeof a)
        )
          break a;
        a = NaN;
      }
      this.duration = a;
    }
  };
  t(fE, O);
  var gE = function () {
    var a = ['video/mp4'],
      b = ['video/ogg'],
      c = new fE();
    c.canPlayType = function (d) {
      return a.includes(d) ? 'probably' : b.includes(d) ? 'maybe' : '';
    };
    c.width = 0;
    c.height = 0;
    c.offsetWidth = 0;
    c.offsetHeight = 0;
    return c;
  };
  l = fE.prototype;
  l.pause = function () {
    this.paused ||
      (null.stop(),
      (this.paused = !0),
      this.dispatchEvent('timeupdate'),
      this.dispatchEvent('pause'));
  };
  l.load = function () {
    this.readyState = 0;
    this.paused = !0;
    this.seeking = !1;
    this.dispatchEvent('loadstart');
    var a;
    isNaN(this.duration) ? (a = 10 + 20 * Math.random()) : (a = this.duration);
    this.setProperty('duration', a);
    a = this.seekable;
    a.h.push(new hE(this.duration));
    a.length = a.h.length;
    a = this.buffered;
    a.h.push(new hE(this.duration));
    a.length = a.h.length;
    this.dispatchEvent('loadedmetadata');
    0 < this.currentTime && this.dispatchEvent('timeupdate');
    this.dispatchEvent('loadeddata');
    this.dispatchEvent('canplay');
    this.dispatchEvent('canplaythrough');
    this.dispatchEvent('progress');
    this.playbackRate = this.defaultPlaybackRate;
  };
  l.setProperty = function (a, b) {
    switch (a) {
      case 'currentTime':
        a = Number(b);
        this.seeking = !0;
        this.dispatchEvent('seeking');
        this.seeking = !1;
        this.currentTime = a;
        this.dispatchEvent('seeked');
        a = Xa() - this.gd;
        b = this.currentTime + a / 1e3;
        this.gd += a;
        2 < this.readyState && (this.currentTime = Math.min(b, this.duration));
        this.dispatchEvent('timeupdate');
        this.currentTime == this.duration &&
          ((this.ended = this.paused = !0),
          null.stop(),
          this.dispatchEvent('ended'));
        break;
      case 'duration':
        this.duration = Number(b);
        this.dispatchEvent('durationchange');
        break;
      case 'volume':
        this.volume = Number(b);
        this.dispatchEvent('volumechange');
        break;
      default:
        throw 'Property setter not implemented';
    }
  };
  l.setAttribute = function (a, b) {
    null != a && iE.set(a, b);
  };
  l.getAttribute = function (a) {
    return iE.get(a);
  };
  l.Ie = function (a) {
    var b = null,
      c = null;
    switch (a.type) {
      case 'loadeddata':
        b = 'Loaded';
        break;
      case 'playing':
        b = 'Playing';
        c = '#00f';
        break;
      case 'pause':
        b = 'Paused';
        break;
      case 'ended':
        (b = 'Ended'), (c = '#000');
    }
    b && this.Kc && (this.Kc.innerText = b);
    c && this.Lb && (this.Lb.style.backgroundColor = c);
  };
  var iE = new aE(),
    hE = function (a) {
      this.startTime = 0;
      this.endTime = a;
    },
    eE = function () {
      this.length = 0;
      this.h = [];
    };
  eE.prototype.start = function (a) {
    return this.h[a].startTime;
  };
  eE.prototype.end = function (a) {
    return this.h[a].endTime;
  };
  l = fE.prototype;
  l.readyState = 0;
  l.seeking = !1;
  l.currentTime = 0;
  l.initialTime = void 0;
  l.duration = NaN;
  l.paused = !0;
  l.ended = !1;
  l.volume = 1;
  l.muted = !1;
  Object.defineProperty(fE.prototype, 'src', {
    get: function () {
      return fE.prototype.l;
    },
    set: function (a) {
      var b = fE.prototype;
      b.A && null != b.h ? (b.h.reject(), (b.h = null)) : (b.l = a);
    },
  });
  l = fE.prototype;
  l.currentSrc = '';
  l.defaultPlaybackRate = 1;
  l.playbackRate = 0;
  l.gd = 0;
  l.Lb = null;
  l.Kc = null;
  var lE = function (a, b) {
    E.call(this);
    this.o = a;
    this.l = this.h = null;
    this.j = jE();
    kE(this, b);
    qy(function () {
      M(L.h(), 'haob', '1');
    });
  };
  t(lE, E);
  lE.prototype.initialize = function () {
    this.j && this.j.load();
  };
  lE.prototype.N = function () {
    Fg(this.h);
    E.prototype.N.call(this);
  };
  var kE = function (a, b) {
      a.h = Eg('DIV', { style: 'display:none;' });
      a.o.appendChild(a.h);
      a.h.appendChild(a.j);
      b &&
        ((a.l = Eg('DIV', {
          style: 'position:absolute;width:100%;height:100%;left:0px;top:0px',
        })),
        a.h.appendChild(a.l));
    },
    jE = function () {
      var a = Gz(Hz);
      if (Dz(a, 'useVideoElementFake')) {
        a = gE();
        var b = Eg('DIV', {
          style: 'position:absolute;width:100%;height:100%;top:0px;left:0px;',
        });
        Object.assign(b, a);
        a.Lb = Eg('DIV', {
          style:
            'position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000',
        });
        a.Kc = Eg('P', {
          style:
            'position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;',
        });
        a.Lb.appendChild(a.Kc);
        b.appendChild(a.Lb);
        a.j.P(a, ['loadeddata', 'playing', 'pause', 'ended'], a.Ie);
        a = b;
      } else {
        a = !1;
        try {
          -1 != window.location.search.indexOf('goog_limavideo=true') &&
            (a = !0);
        } catch (c) {}
        v.customElements
          ? a
            ? (b = !0)
            : (Ai(Jj) && WB.h().report(153, { limvid: 'vw' }),
              (b = Ai(Dj) || Ai(Jj) || Ai(Bj) || Ai(Cj) ? !0 : !1))
          : (b = !1);
        if (b) {
          a && console.log('force lima video in wrapper');
          a = null;
          try {
            a = new Dy();
          } catch (c) {
            (a = Eg('lima-video')),
              Ai(Jj) && WB.h().report(153, { limvid: 'firefail' });
          }
          a.style.backgroundColor = '#000';
          a.style.height = '100%';
          a.style.width = '100%';
          a.style.position = 'absolute';
          a.style.left = '0';
          a.style.top = '0';
        } else
          a = Eg('VIDEO', {
            style:
              'background-color:#000;position:absolute;width:100%;height:100%;left:0;top:0;',
            title: ez('Advertisement').toString(),
          });
      }
      a.setAttribute('webkit-playsinline', !0);
      a.setAttribute('playsinline', !0);
      return a;
    },
    yD = function (a, b) {
      null != a && (a.style.display = b ? 'block' : 'none');
    };
  var oE = function (a, b, c) {
    var d = a && a.getRootNode ? a.getRootNode({ composed: !0 }) : a;
    if (null == a || !Hg(ug(d), d))
      throw $z(Zz, null, 'containerElement', 'element');
    this.C = b;
    this.aa = MB(this.C || null);
    this.Z = hv(this.C || null);
    this.X = String(Math.floor(1e9 * Math.random()));
    this.M = !1;
    this.H = a;
    this.V = null != b;
    Hz.h = 2;
    this.G = mE(b ? b : null);
    d = Eg('DIV', { style: 'position:absolute' });
    a.insertBefore(d, a.firstChild);
    this.A = d;
    this.j = null;
    nE(this) && b
      ? (a = new jD(b))
      : ((this.j = new lE(this.A, !0)), (a = new jD(this.j.j)));
    this.h = a;
    this.l = this.o = null;
    if ((a = this.j && Hz.j))
      a = !(nE(this) || fc || hc || to() || (ec && (!ec || !ev(dv, 4))));
    a && ((this.o = new lE(this.A, !0)), (this.l = new jD(this.o.j)));
    this.I = c || null;
    this.U = null != this.I;
    nE(this) && b
      ? 'function' !== typeof b.getBoundingClientRect
        ? ((c = this.A), (Hz.o = c))
        : (c = b)
      : (c = this.A);
    this.F = c;
    this.K = new SD(this.A, this);
    this.O = new G(0, 0);
    this.J = '';
    b &&
      ((b = tu(b.src || b.currentSrc)),
      200 > b.toString().length
        ? (this.J = b.toString())
        : 200 > b.j.length && (this.J = b.j));
    this.L = new Map();
    this.L.set('videoDisplay1', this.h);
    this.l && this.L.set('videoDisplay2', this.l);
  };
  oE.prototype.initialize = function () {
    this.M = !0;
    null != this.j && this.j.initialize();
    null != this.o && this.o.initialize();
  };
  oE.prototype.B = function () {
    return this.M;
  };
  oE.prototype.destroy = function () {
    var a = this;
    this.C = null;
    Ue(this.j);
    Ue(this.o);
    Ue(this.K);
    this.h.ac(function () {
      return Ue(a.h);
    });
    null != this.l &&
      this.l.ac(function () {
        return Ue(a.l);
      });
    Fg(this.A);
  };
  var UD = function (a) {
      return a.U && a.I ? a.I : null != a.j ? a.j.l : null;
    },
    nE = function (a) {
      return LB(a.G) && a.V;
    };
  oE.prototype.yb = function () {
    return this.O;
  };
  var mE = function (a) {
    return null != a &&
      'function' === typeof a.getAttribute &&
      null != a.getAttribute('playsinline')
      ? !0
      : !1;
  };
  oE.prototype.destroy = oE.prototype.destroy;
  oE.prototype.initialize = oE.prototype.initialize;
  var pE = function (a) {
    var b = Error.call(this);
    this.message = b.message;
    'stack' in b && (this.stack = b.stack);
    this.h = a;
  };
  t(pE, Error);
  l = pE.prototype;
  l.getInnerError = function () {
    var a = this.h.innerError;
    return a instanceof Object ? new pE(a) : null != a ? Error(a) : null;
  };
  l.getMessage = function () {
    return this.h.errorMessage;
  };
  l.getErrorCode = function () {
    return this.h.errorCode;
  };
  l.getVastErrorCode = function () {
    var a = this.getErrorCode();
    return 1e3 > a ? a : 900;
  };
  l.getType = function () {
    return this.h.type;
  };
  l.toString = function () {
    return (
      'AdError ' +
      this.getErrorCode() +
      ': ' +
      this.getMessage() +
      (null != this.getInnerError()
        ? ' Caused by: ' + this.getInnerError()
        : '')
    );
  };
  pE.prototype.getType = pE.prototype.getType;
  pE.prototype.getVastErrorCode = pE.prototype.getVastErrorCode;
  pE.prototype.getErrorCode = pE.prototype.getErrorCode;
  pE.prototype.getMessage = pE.prototype.getMessage;
  pE.prototype.getInnerError = pE.prototype.getInnerError;
  var qE = { AD_LOAD: 'adLoadError', AD_PLAY: 'adPlayError' };
  w('module$contents$ima$AdError_AdError.Type', qE);
  var rE = function (a, b) {
    b = void 0 === b ? null : b;
    mk.call(this, 'adError');
    this.h = a;
    this.l = b;
  };
  t(rE, mk);
  rE.prototype.getError = function () {
    return this.h;
  };
  rE.prototype.getUserRequestContext = function () {
    return this.l;
  };
  rE.prototype.getUserRequestContext = rE.prototype.getUserRequestContext;
  rE.prototype.getError = rE.prototype.getError;
  var sE = { AD_ERROR: 'adError' };
  w('module$contents$ima$AdErrorEvent_AdErrorEvent.Type', sE);
  var tE = function (a, b, c) {
    b = void 0 === b ? null : b;
    c = void 0 === c ? null : c;
    mk.call(this, a);
    this.h = b;
    this.o = c;
  };
  t(tE, mk);
  tE.prototype.getAd = function () {
    return this.h;
  };
  tE.prototype.getAdData = function () {
    return this.o;
  };
  tE.prototype.getAdData = tE.prototype.getAdData;
  tE.prototype.getAd = tE.prototype.getAd;
  var uE = {
    AD_CAN_PLAY: 'adCanPlay',
    qg: 'adStarted',
    CONTENT_PAUSE_REQUESTED: 'contentPauseRequested',
    CONTENT_RESUME_REQUESTED: 'contentResumeRequested',
    CLICK: 'click',
    VIDEO_CLICKED: 'videoClicked',
    VIDEO_ICON_CLICKED: 'videoIconClicked',
    Fd: 'engagedView',
    EXPANDED_CHANGED: 'expandedChanged',
    STARTED: 'start',
    AD_PROGRESS: 'adProgress',
    AD_BUFFERING: 'adBuffering',
    IMPRESSION: 'impression',
    Kd: 'measurable_impression',
    VIEWABLE_IMPRESSION: 'viewable_impression',
    Gd: 'fully_viewable_audible_half_duration_impression',
    Me: 'overlay_resize',
    Ne: 'overlay_unmeasurable_impression',
    Oe: 'overlay_unviewable_impression',
    Qe: 'overlay_viewable_immediate_impression',
    Pe: 'overlay_viewable_end_of_session_impression',
    Jg: 'externalActivityEvent',
    PAUSED: 'pause',
    RESUMED: 'resume',
    FIRST_QUARTILE: 'firstQuartile',
    MIDPOINT: 'midpoint',
    THIRD_QUARTILE: 'thirdQuartile',
    COMPLETE: 'complete',
    DURATION_CHANGE: 'durationChange',
    USER_CLOSE: 'userClose',
    Yh: 'userRecall',
    Dh: 'prefetched',
    LOADED: 'loaded',
    ALL_ADS_COMPLETED: 'allAdsCompleted',
    SKIPPED: 'skip',
    Ue: 'skipShown',
    LINEAR_CHANGED: 'linearChanged',
    SKIPPABLE_STATE_CHANGED: 'skippableStateChanged',
    AD_METADATA: 'adMetadata',
    pg: 'adBreakFetchError',
    AD_BREAK_READY: 'adBreakReady',
    LOG: 'log',
    VOLUME_CHANGED: 'volumeChange',
    VOLUME_MUTED: 'mute',
    INTERACTION: 'interaction',
    xg: 'companionBackfill',
    Vh: 'trackingUrlPinged',
    Zh: 'video_card_endcap_collapse',
    ai: 'video_card_endcap_dismiss',
    bi: 'video_card_endcap_impression',
    Ag: 'companionInitialized',
    zg: 'companionImpression',
    yg: 'companionClick',
    sh: 'mediaUrlPinged',
    Je: 'loadStart',
    uh: 'navigationRequested',
  };
  w('module$contents$ima$AdEvent_AdEvent.Type', uE);
  var vE = function (a, b) {
    b = void 0 === b ? null : b;
    tE.call(this, 'adMetadata', a);
    this.l = b;
  };
  t(vE, tE);
  vE.prototype.nf = function () {
    return this.l;
  };
  vE.prototype.getAdCuePoints = vE.prototype.nf;
  var wE = function (a) {
    this.adBreakDuration = a.adBreakDuration;
    this.adPosition = a.adPosition;
    this.currentTime = a.currentTime;
    this.duration = a.duration;
    this.totalAds = a.totalAds;
  };
  var xE = function (a, b) {
    O.call(this);
    this.l = a;
    this.B = b;
    this.j = this.l.currentTime;
    this.h = new ql(250);
    We(this, this.h);
    this.A = new Cv(this);
    We(this, this.A);
    Ev(this.A, this.h, 'tick', this.C, !1, this);
  };
  t(xE, O);
  xE.prototype.jb = function () {
    return this.j;
  };
  xE.prototype.start = function () {
    yE(this);
    this.h.start();
  };
  xE.prototype.stop = function () {
    this.h.stop();
  };
  xE.prototype.C = function () {
    var a = this.l.currentTime;
    a !== this.jb() && ((this.j = a), yE(this));
  };
  var yE = function (a) {
    var b = {};
    b.currentTime = a.jb();
    pz(a.B, 'contentTimeUpdate', 'contentTimeUpdate', b);
  };
  var zE = {
      rgb: !0,
      rgba: !0,
      alpha: !0,
      rect: !0,
      image: !0,
      'linear-gradient': !0,
      'radial-gradient': !0,
      'repeating-linear-gradient': !0,
      'repeating-radial-gradient': !0,
      'cubic-bezier': !0,
      matrix: !0,
      perspective: !0,
      rotate: !0,
      rotate3d: !0,
      rotatex: !0,
      rotatey: !0,
      steps: !0,
      rotatez: !0,
      scale: !0,
      scale3d: !0,
      scalex: !0,
      scaley: !0,
      scalez: !0,
      skew: !0,
      skewx: !0,
      skewy: !0,
      translate: !0,
      translate3d: !0,
      translatex: !0,
      translatey: !0,
      translatez: !0,
    },
    AE = function (a) {
      a = ib(a);
      if ('' == a) return null;
      var b = String(a.slice(0, 4)).toLowerCase();
      if (0 == ('url(' < b ? -1 : 'url(' == b ? 0 : 1)) return null;
      if (0 < a.indexOf('(')) {
        if (/"|'/.test(a)) return null;
        b = /([\-\w]+)\(/g;
        for (var c; (c = b.exec(a)); )
          if (!(c[1].toLowerCase() in zE)) return null;
      }
      return a;
    };
  function BE(a, b) {
    a = v[a];
    return a && a.prototype
      ? ((b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get) || null
      : null;
  }
  function CE(a) {
    var b = v.CSSStyleDeclaration;
    return (b && b.prototype && b.prototype[a]) || null;
  }
  BE('Element', 'attributes') || BE('Node', 'attributes');
  BE('Element', 'innerHTML') || BE('HTMLElement', 'innerHTML');
  BE('Node', 'nodeName');
  BE('Node', 'nodeType');
  BE('Node', 'parentNode');
  BE('Node', 'childNodes');
  BE('HTMLElement', 'style') || BE('Element', 'style');
  BE('HTMLStyleElement', 'sheet');
  var DE = CE('getPropertyValue'),
    EE = CE('setProperty');
  BE('Element', 'namespaceURI') || BE('Node', 'namespaceURI');
  function FE(a, b, c, d) {
    if (a) return a.apply(b, d);
    if (Zb && 10 > document.documentMode) {
      if (!b[c].call) throw Error('IE Clobbering detected');
    } else if ('function' != typeof b[c]) throw Error('Clobbering detected');
    return b[c].apply(b, d);
  }
  var GE = {
      '-webkit-border-horizontal-spacing': !0,
      '-webkit-border-vertical-spacing': !0,
    },
    IE = function (a) {
      if (!a) return cg;
      var b = document.createElement('div').style;
      HE(a).forEach(function (c) {
        var d =
          bc && c in GE
            ? c
            : c.replace(
                /^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i,
                ''
              );
        0 != d.lastIndexOf('--', 0) &&
          0 != d.lastIndexOf('var', 0) &&
          ((c =
            FE(
              DE,
              a,
              a.getPropertyValue ? 'getPropertyValue' : 'getAttribute',
              [c]
            ) || ''),
          (c = AE(c)),
          null != c &&
            FE(EE, b, b.setProperty ? 'setProperty' : 'setAttribute', [d, c]));
      });
      return new bg(b.cssText || '', ag);
    },
    HE = function (a) {
      Na(a) ? (a = Pb(a)) : ((a = Af(a)), Lb(a, 'cssText'));
      return a;
    };
  var JE = function (a, b, c) {
    O.call(this);
    this.j = a;
    this.h = null;
    this.H = '';
    this.J = cg;
    this.L = 0;
    this.C = this.l = null;
    this.A = b;
    this.B = null;
    this.F = '';
    this.G = c;
  };
  t(JE, O);
  JE.prototype.init = function (a) {
    this.F = a;
    a = 'about:blank';
    Zb && (a = '');
    this.l = Eg('IFRAME', {
      src: a,
      allowtransparency: !0,
      background: 'transparent',
    });
    Fl(this.l, { display: 'none', width: '0', height: '0' });
    a = this.j.H;
    a.appendChild(this.l);
    a = a.ownerDocument;
    a = a.defaultView || a.parentWindow;
    null == this.B && (this.B = new Cv(this));
    this.B.P(a, 'message', this.M);
    a =
      '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js">\x3c/script><script>loader = new VPAIDLoader(false, "' +
      (this.F + '");\x3c/script></body>');
    if (vc || tc || $b) {
      var b = this.l.contentWindow;
      b && FC(b.document, a);
    } else GC(this.l, a);
  };
  JE.prototype.M = function (a) {
    try {
      var b = a.h.data;
      try {
        var c = JSON.parse(b);
      } catch (da) {
        return;
      }
      var d = c.session;
      if (null != d && this.F == d)
        switch (c.type) {
          case 'friendlyReady':
            var e = KE(this);
            if (null != e) {
              this.h = e;
              this.H = e.currentSrc;
              var f = e.style.cssText;
              if (Zb && 10 > document.documentMode) var g = cg;
              else {
                var h = document;
                'function' === typeof HTMLTemplateElement &&
                  (h = Cg(document, 'TEMPLATE').content.ownerDocument);
                var k = h.implementation
                  .createHTMLDocument('')
                  .createElement('DIV');
                k.style.cssText = f;
                g = IE(k.style);
              }
              this.J = g;
              this.L = e.currentTime;
            } else {
              var n = this.j.H,
                m = this.j.yb();
              var x =
                'border: 0; margin: 0; padding: 0; position: absolute; width:' +
                (m.width + 'px; ');
              x += 'height:' + m.height + 'px;';
              this.h = Eg('VIDEO', { style: x, autoplay: !0 });
              n.appendChild(this.h);
            }
            var u = this.j.H;
            e = 'border: 0; margin: 0; padding: 0;position: absolute; ';
            var y = Ol(this.h);
            e += 'width:' + y.width + 'px; ';
            e += 'height:' + y.height + 'px;';
            this.C = Eg('DIV', { style: e });
            u.appendChild(this.C);
            try {
              this.l.contentWindow.loader.initFriendly(this.h, this.C);
            } catch (da) {
              LE(this);
            }
            pz(this.A, 'vpaid', '', b);
            break;
          case 'becameLinear':
            this.h && !Lg() && !Kg() && Fl(this.h, { visibility: 'visible' });
            pz(this.A, 'vpaid', '', b);
            break;
          case 'becameNonlinear':
            ME(this);
            pz(this.A, 'vpaid', '', b);
            break;
          case 'startAd':
            u = {};
            if (this.h) {
              h = this.h.paused;
              var A = 0 < this.h.currentTime;
              u.apl = A && !h ? '1' : '0';
              u.ip = h ? '1' : '0';
              u.iavp = A ? '1' : '0';
            } else u.apl = 'n';
            WB.h().report(99, u);
            pz(this.A, 'vpaid', '', b);
            if (null != KE(this)) {
              var F = this.j;
              null != F.j && yD(F.j.h, !0);
            }
            break;
          default:
            pz(this.A, 'vpaid', '', b);
        }
    } catch (da) {
      LE(this);
    }
  };
  var LE = function (a) {
      var b = { type: 'error' };
      b.session = a.F;
      a = JSON.stringify(b);
      window.postMessage(a, '*');
    },
    KE = function (a) {
      return ('videoDisplayUnknown' == a.G ? a.j.h : a.j.L.get(a.G)).B.h;
    },
    ME = function (a) {
      a.h && !Lg() && !Kg() && Fl(a.h, { visibility: 'hidden' });
    };
  JE.prototype.N = function () {
    E.prototype.N.call(this);
    Ue(this.B);
    this.B = null;
    Fg(this.C);
    this.C = null;
    Fg(this.l);
    this.l = null;
    var a = KE(this);
    if (null != a) {
      var b = this.J;
      a.style.cssText =
        b instanceof bg && b.constructor === bg ? b.h : 'type_error:SafeStyle';
      Lg() || Kg()
        ? ((a.src = this.H), (a.currentTime = this.L))
        : (a.removeAttribute('src'),
          (a = this.j),
          null != a.j && yD(a.j.h, !1));
    } else Fg(this.h), (this.h = null);
  };
  var NE = function (a, b) {
    E.call(this);
    this.j = a;
    this.l = b;
    this.h = new Map();
  };
  t(NE, E);
  var OE = function (a, b) {
    try {
      var c = b.ra,
        d = c.session;
      switch (c.vpaidEventType) {
        case 'createFriendlyIframe':
          b = 'videoDisplayUnknown';
          c.videoDisplayName && (b = c.videoDisplayName);
          var e = c.session,
            f = new JE(a.j, a.l, b);
          a.h.set(e, f);
          f.init(e);
          break;
        case 'vpaidNonLinear':
          var g = a.h.get(d);
          g && ME(g);
          break;
        case 'destroyFriendlyIframe':
          var h = a.h.get(d);
          h && (h.W(), a.h.delete(d));
      }
    } catch (k) {
      WB.h().report(125, { msg: k.message });
    }
  };
  NE.prototype.N = function () {
    this.h.forEach(function (a) {
      return a.W();
    });
  };
  var PE = function (a) {
    this.h = a || { cookie: '' };
  };
  l = PE.prototype;
  l.set = function (a, b, c) {
    var d = !1;
    if ('object' === typeof c) {
      var e = c.zi;
      d = c.Wf || !1;
      var f = c.domain || void 0;
      var g = c.path || void 0;
      var h = c.ge;
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
  l.get = function (a, b) {
    for (
      var c = a + '=', d = (this.h.cookie || '').split(';'), e = 0, f;
      e < d.length;
      e++
    ) {
      f = ib(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
      if (f == a) return '';
    }
    return b;
  };
  l.remove = function (a, b, c) {
    var d = void 0 !== this.get(a);
    this.set(a, '', { ge: 0, path: b, domain: c });
    return d;
  };
  l.rc = function () {
    return QE(this).keys;
  };
  l.zb = function () {
    return QE(this).values;
  };
  l.isEmpty = function () {
    return !this.h.cookie;
  };
  l.clear = function () {
    for (var a = QE(this).keys, b = a.length - 1; 0 <= b; b--)
      this.remove(a[b]);
  };
  var QE = function (a) {
    a = (a.h.cookie || '').split(';');
    for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
      (e = ib(a[f])),
        (d = e.indexOf('=')),
        -1 == d
          ? (b.push(''), c.push(e))
          : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    return { keys: b, values: c };
  };
  function RE(a) {
    return 'null' !== a.origin;
  }
  function SE(a, b, c) {
    b = fd(b, 5) && RE(c) ? c.document.cookie : null;
    return null === b ? null : new PE({ cookie: b }).get(a) || '';
  }
  var TE = function () {
      this.h = window;
      this.j = 0;
    },
    UE = function (a, b, c, d) {
      if (d) {
        var e = {
          ge: B(c, 2) - Date.now() / 1e3,
          path: B(c, 3),
          domain: B(c, 4),
          Wf: !1,
        };
        a = a.h;
        fd(d, 5) && RE(a) && new PE(a.document).set(b, B(c, 1), e);
      }
    },
    VE = function (a, b, c) {
      if (c && SE(b, c, a.h)) {
        var d = a.h.location.hostname;
        if ('localhost' === d) d = ['localhost'];
        else if (((d = d.split('.')), 2 > d.length)) d = [];
        else {
          for (var e = [], f = 0; f < d.length - 1; ++f)
            e.push(d.slice(f).join('.'));
          d = e;
        }
        d = r(d);
        for (e = d.next(); !e.done; e = d.next())
          (f = a.h),
            fd(c, 5) && RE(f) && new PE(f.document).remove(b, '/', e.value);
      }
    };
  var WE = function () {
    this.h = [];
    this.j = [];
  };
  WE.prototype.isEmpty = function () {
    return 0 === this.h.length && 0 === this.j.length;
  };
  WE.prototype.clear = function () {
    this.h = [];
    this.j = [];
  };
  WE.prototype.remove = function (a) {
    var b = this.h;
    b: {
      var c = b.length - 1;
      0 > c && (c = Math.max(0, b.length + c));
      if ('string' === typeof b)
        c = 'string' !== typeof a || 1 != a.length ? -1 : b.lastIndexOf(a, c);
      else {
        for (; 0 <= c; c--) if (c in b && b[c] === a) break b;
        c = -1;
      }
    }
    0 <= c ? (Mb(b, c), (b = !0)) : (b = !1);
    return b || Lb(this.j, a);
  };
  WE.prototype.zb = function () {
    for (var a = [], b = this.h.length - 1; 0 <= b; --b) a.push(this.h[b]);
    var c = this.j.length;
    for (b = 0; b < c; ++b) a.push(this.j[b]);
    return a;
  };
  var Z = function (a, b, c, d, e, f, g, h) {
    O.call(this);
    var k = this;
    this.H = a;
    this.h = b;
    this.L = c;
    this.tb = e;
    this.A = new RC();
    this.F = g;
    this.rb = h;
    this.M = !1;
    this.U = 1;
    this.ub = d;
    this.ca = -1;
    this.l = this.j = null;
    this.B = new xE({ currentTime: 0 }, this.F);
    this.G = new WE();
    this.na = this.X = !1;
    this.Z = new Map();
    this.aa = this.ua = !1;
    this.Ka = new NE(b, g);
    We(this, this.Ka);
    this.J = f && null != this.h.I;
    this.O = function () {
      var n = k.h.h,
        m = n.getCurrentTime();
      n = n.getDuration();
      return { currentTime: m, duration: n, isPlaying: !0, volume: k.U };
    };
    this.V = new Cv(this);
    this.V.P(this.F, 'adsManager', this.lc);
  };
  t(Z, O);
  Z.prototype.lc = function (a) {
    var b = this,
      c = a.messageType,
      d = a.ra;
    switch (c) {
      case 'error':
        XE(this);
        YE(this, d);
        break;
      case 'contentPauseRequested':
        WB.h().report(130);
        ZE(this);
        this.B.stop();
        $E(this, c, d);
        break;
      case 'contentResumeRequested':
        aF(this, function () {
          return $E(b, c, d);
        });
        break;
      case 'remainingTime':
        this.ca = d.remainingTime;
        break;
      case 'skip':
        $E(this, c, d);
        break;
      case 'log':
        $E(this, c, d, d.logData);
        break;
      case 'companionBackfill':
        a = Ma('window.google_show_companion_ad');
        null != a && a();
        break;
      case 'skipShown':
        this.M = !0;
        $E(this, c, d);
        break;
      case 'interaction':
        $E(this, c, d, d.interactionData);
        break;
      case 'vpaidEvent':
        OE(this.Ka, a);
        break;
      case 'skippableStateChanged':
        a = d.adData;
        null != a.skippable && (this.M = a.skippable);
        $E(this, c, d);
        break;
      case 'volumeChange':
        a = d.adData;
        null != a && 'number' === typeof a.volume && (this.U = a.volume);
        $E(this, c, d);
        break;
      case 'firstQuartile':
        $E(this, oB.firstQuartile, d);
        $E(this, c, d);
        break;
      case 'thirdQuartile':
        $E(this, oB.thirdQuartile, d);
        $E(this, c, d);
        break;
      case 'updateGfpCookie':
        bF(this, d);
        break;
      default:
        $E(this, c, d);
    }
  };
  var $E = function (a, b, c, d) {
      if (null == c.companions) {
        var e = a.Z.get(c.adId);
        c.companions = null != e ? e : [];
      }
      var f = c.adData;
      if ((e = null == f ? null : new Y(f))) a.j = e;
      switch (b) {
        case 'adBreakReady':
        case 'mediaUrlPinged':
          b = new tE(b, null, c);
          break;
        case 'adMetadata':
          b = null;
          null != c.adCuePoints && (b = new QC(c.adCuePoints));
          b = new vE(e, b);
          break;
        case 'allAdsCompleted':
          a.j = null;
          a.ua = !0;
          b = new tE(b, e);
          break;
        case 'contentPauseRequested':
          a.aa = !1;
          b = new tE(b, e);
          break;
        case 'contentResumeRequested':
          a.j = null;
          a.aa = !0;
          b = new tE(b, e);
          break;
        case 'loaded':
          a.ca = e.getDuration();
          a.M = !1;
          NB() &&
            ((d = a.H),
            (c = a.tb),
            d.j.set(PC(e), a.O),
            aD(d) && $C(d, 'loaded', PC(e), c));
          b = new tE(b, e, f);
          break;
        case 'start':
          a.Z.set(c.adId, c.companions);
          null != UD(a.h) &&
            (null == a.l
              ? ((a.l = new cC()), a.V.P(a.l, 'click', a.Nf))
              : gC(a.l),
            eC(a.l, UD(a.h)));
          b = new tE(b, e);
          break;
        case 'complete':
          null != a.l && gC(a.l);
          NB() && cD(a.H, a.O, PC(e));
          a.j = null;
          a.Z.delete(c.adId);
          b = new tE(b, e);
          break;
        case 'log':
          c = null;
          null != d && null != d.type
            ? ((f = d.type), (f = 'adLoadError' == f || 'adPlayError' == f))
            : (f = !1);
          f && (c = { adError: new pE(d) });
          b = new tE(b, e, c);
          break;
        case 'interaction':
          b = new tE(b, e, d);
          break;
        case 'adProgress':
          b = new tE(b, e, new wE(c));
          break;
        default:
          b = new tE(b, e);
      }
      a.dispatchEvent(b);
      a.ua && a.aa && a.destroy();
    },
    YE = function (a, b) {
      var c = new rE(new pE(b));
      a.X
        ? (a.dispatchEvent(c),
          NB() && a.j && cD(a.H, a.O, PC(a.j)),
          (a.j = null))
        : a.G.j.push(c);
      a = { error: b.errorCode, vis: Kh(document) };
      WB.h().report(7, a);
    },
    cF = function (a, b, c) {
      pz(a.F, 'adsManager', b, c);
    },
    aF = function (a, b) {
      WB.h().report(131);
      XE(a, b);
      a.B.start();
    },
    ZE = function (a) {
      var b = a.h.h;
      nE(a.h) &&
        a.A.restoreCustomPlaybackStateOnAdBreakComplete &&
        null != b.Jd &&
        b.Jd();
    },
    XE = function (a, b) {
      var c = a.h.h;
      nE(a.h) && a.A.restoreCustomPlaybackStateOnAdBreakComplete && null != c.ac
        ? c.ac(b)
        : b && b();
    };
  l = Z.prototype;
  l.configureAdsManager = function (a, b) {
    this.C = a;
    null != a.currentTime && ((this.B = new xE(a, this.F)), this.B.start());
    null != b && (this.A = dF(b));
  };
  l.init = function (a, b, c, d) {
    if (this.G.isEmpty()) {
      var e = this.h,
        f = null;
      e.C && null == d && (f = { vd: 'setnull' });
      e.C && e.C === d && (f = { vd: 'match' });
      if (e.C && e.C !== d) {
        f = MB(d || null);
        var g = hv(d || null);
        f = { vd: 'diff', oc: e.aa, nc: f, oi: e.Z, ni: g };
      }
      !e.C && d && (f = { vd: 'new' });
      f && ((f.custVid = e.X), WB.h().report(93, f));
      null != d &&
        ((e.G = mE(d)),
        LB(e.G) &&
          ((e.V = !0),
          Ue(e.j),
          Ue(e.o),
          Ue(e.l),
          (e.j = null),
          (e.o = null),
          (e.l = null),
          Ue(e.h),
          (e.h = new jD(d)),
          'function' !== typeof d.getBoundingClientRect
            ? ((e.F = e.A), (Hz.o = e.F))
            : (e.F = d),
          null != (d = e.K.F) &&
            ((e = e.h.B.h),
            (d.l = e),
            d.h && ((d = d.h), (d.h = e), KC(d, e)))));
      this.X = !0;
      this.resize(a, b, c);
      e = SC(this.A, this.J);
      cF(this, 'init', {
        adsRenderingSettings: e,
        width: a,
        height: b,
        viewMode: c,
      });
    } else {
      for (; !this.G.isEmpty(); )
        (b = a = this.G),
          0 === b.h.length && ((b.h = b.j), b.h.reverse(), (b.j = [])),
          (a = a.h.pop()),
          this.dispatchEvent(a);
      this.W();
    }
  };
  l.isCustomPlaybackUsed = function () {
    return nE(this.h);
  };
  l.isCustomClickTrackingUsed = function () {
    return this.J;
  };
  l.getRemainingTime = function () {
    return this.ca;
  };
  l.getAdSkippableState = function () {
    return this.M;
  };
  l.discardAdBreak = function () {
    cF(this, 'discardAdBreak');
  };
  l.updateAdsRenderingSettings = function (a) {
    if (null != a) {
      a = dF(a);
      var b = this.A.bitrate,
        c = a.bitrate;
      WB.h().report(96, {
        init: this.X ? '1' : '0',
        start: this.na ? '1' : '0',
        old: b,
        new: c,
        changed: b != c ? '1' : '0',
      });
      this.A = a;
      a = SC(this.A, this.J);
      cF(this, 'updateAdsRenderingSettings', { adsRenderingSettings: a });
    }
  };
  l.skip = function () {
    cF(this, 'skip');
  };
  l.start = function () {
    if (this.L) {
      (fc || hc) && WB.h().report(50, { customPlayback: nE(this.h) });
      this.h.B() ||
        WB.h().report(26, { adtagurl: this.L, customPlayback: nE(this.h) });
      no(this.h.A) &&
        WB.h().report(30, { adtagurl: this.L, customPlayback: nE(this.h) });
      var a = this.h.I,
        b = this.h.A,
        c;
      if ((c = a && b && !no(a)))
        (a = YC(a)),
          (b = YC(b)),
          (c =
            0 < a.width &&
            0 < a.height &&
            0 < b.width &&
            0 < b.height &&
            a.left <= b.left + b.width &&
            b.left <= a.left + a.width &&
            a.top <= b.top + b.height &&
            b.top <= a.top + a.height);
      c && WB.h().report(31, { adtagurl: this.L, customPlayback: nE(this.h) });
    }
    if (!this.h.B() && !nE(this.h)) throw $z(Yz);
    b = this.h;
    b.U = this.J && null != b.I;
    this.h.K.h.style.opacity = 1;
    null != this.C &&
      1 == this.getVolume() &&
      ('boolean' === typeof this.C.muted && this.C.muted
        ? this.setVolume(0)
        : 'number' === typeof this.C.volume &&
          ((b = this.C.volume),
          0 <= b && 1 >= b && this.setVolume(this.C.volume)));
    this.na = !0;
    cF(this, 'start');
  };
  l.Nf = function () {
    if (!this.A.disableClickThrough && null != this.j) {
      var a = this.j.h.clickThroughUrl;
      null != a && bv(a, this.j.h.attributionParams);
    }
  };
  l.resize = function (a, b, c) {
    var d = this.h,
      e = d.A;
    null != e &&
      (-1 == a
        ? ((e.style.right = '0'), (e.style.left = '0'))
        : (e.style.width = a + 'px'),
      -1 == b
        ? ((e.style.bottom = '0'), (e.style.top = '0'))
        : (e.style.height = b + 'px'));
    e = d.K;
    e.h.width = -1 == a ? '100%' : a;
    e.h.height = -1 == b ? '100%' : b;
    try {
      e.h.offsetTop = e.h.offsetTop;
    } catch (f) {}
    d.O = new G(a, b);
    cF(this, 'resize', { width: a, height: b, viewMode: c });
  };
  l.stop = function () {
    cF(this, 'stop');
  };
  l.expand = function () {
    cF(this, 'expand');
  };
  l.collapse = function () {
    cF(this, 'collapse');
  };
  l.getVolume = function () {
    return this.U;
  };
  l.setVolume = function (a) {
    this.U = a;
    this.h.h.setVolume(a);
    cF(this, 'volume', { volume: a });
  };
  l.pause = function () {
    cF(this, 'pause');
  };
  l.resume = function () {
    cF(this, 'resume');
  };
  l.destroy = function () {
    this.W();
  };
  l.getCuePoints = function () {
    return this.ub;
  };
  l.qf = function () {
    return this.j;
  };
  l.N = function () {
    cF(this, 'destroy');
    null != this.l && this.l.W();
    this.V.W();
    this.G.clear();
    this.B && (this.B.stop(), this.B.W());
    NB() && cD(this.H, this.O);
    O.prototype.N.call(this);
  };
  l.ff = function () {
    WB.h().report(124, { api: 'clicked' });
    var a = this.j && this.j.h.clickThroughUrl;
    a && this.j.fe() && bv(a, this.j.h.attributionParams);
    cF(this, 'click');
  };
  l.focus = function () {
    pz(this.F, 'userInteraction', 'focusUiElement');
  };
  var bF = function (a, b) {
    var c = b.gfpCookieUserEnabled;
    b = b.gfpCookieClearData;
    var d = new rm();
    d = C(d, 1, c ? '0' : '1');
    d = C(d, 2, 2147483647);
    d = C(d, 3, '/');
    d = C(d, 4, window.location.hostname);
    var e = new TE(),
      f,
      g;
    a = null != (g = null == (f = a.rb) ? void 0 : Wz(f)) ? g : null;
    UE(e, '__gpi_opt_out', d, a);
    if (!c || b) VE(e, '__gads', a), VE(e, '__gpi', a);
  };
  Z.prototype.clicked = Z.prototype.ff;
  Z.prototype.getCurrentAd = Z.prototype.qf;
  Z.prototype.getCuePoints = Z.prototype.getCuePoints;
  Z.prototype.destroy = Z.prototype.destroy;
  Z.prototype.resume = Z.prototype.resume;
  Z.prototype.pause = Z.prototype.pause;
  Z.prototype.setVolume = Z.prototype.setVolume;
  Z.prototype.getVolume = Z.prototype.getVolume;
  Z.prototype.collapse = Z.prototype.collapse;
  Z.prototype.expand = Z.prototype.expand;
  Z.prototype.stop = Z.prototype.stop;
  Z.prototype.resize = Z.prototype.resize;
  Z.prototype.start = Z.prototype.start;
  Z.prototype.skip = Z.prototype.skip;
  Z.prototype.updateAdsRenderingSettings =
    Z.prototype.updateAdsRenderingSettings;
  Z.prototype.discardAdBreak = Z.prototype.discardAdBreak;
  Z.prototype.getAdSkippableState = Z.prototype.getAdSkippableState;
  Z.prototype.getRemainingTime = Z.prototype.getRemainingTime;
  Z.prototype.isCustomClickTrackingUsed = Z.prototype.isCustomClickTrackingUsed;
  Z.prototype.isCustomPlaybackUsed = Z.prototype.isCustomPlaybackUsed;
  Z.prototype.init = Z.prototype.init;
  function dF(a) {
    if (a instanceof RC) return a;
    var b = new RC();
    b.append(a);
    return b;
  }
  var eF = function (a, b) {
    mk.call(this, 'adsManagerLoaded');
    this.h = a;
    this.l = b;
  };
  t(eF, mk);
  eF.prototype.getAdsManager = function (a, b) {
    a = a || { currentTime: null };
    this.h.configureAdsManager(a, b);
    return this.h;
  };
  eF.prototype.getUserRequestContext = function () {
    return this.l;
  };
  eF.prototype.getUserRequestContext = eF.prototype.getUserRequestContext;
  eF.prototype.getAdsManager = eF.prototype.getAdsManager;
  var fF = { ADS_MANAGER_LOADED: 'adsManagerLoaded' };
  w('module$contents$ima$AdsManagerLoadedEvent_AdsManagerLoadedEvent.Type', fF);
  var gF = function () {
    this.l = this.j = 'unknown';
    this.h = '0';
    this.nonLinearAdSlotHeight =
      this.nonLinearAdSlotWidth =
      this.linearAdSlotHeight =
      this.linearAdSlotWidth =
      this.liveStreamPrefetchSeconds =
        0;
    this.forceNonLinearFullSlot = !1;
    this.contentTitle = this.contentKeywords = this.contentDuration = null;
    this.vastLoadTimeout = 5e3;
    this.omidAccessModeRules = {};
    this.pageUrl = null;
  };
  gF.prototype.setAdWillAutoPlay = function (a) {
    this.j = a ? 'auto' : 'click';
  };
  gF.prototype.setAdWillPlayMuted = function (a) {
    this.l = a ? 'muted' : 'unmuted';
  };
  gF.prototype.setContinuousPlayback = function (a) {
    this.h = a ? '2' : '1';
  };
  gF.prototype.setContinuousPlayback = gF.prototype.setContinuousPlayback;
  gF.prototype.setAdWillPlayMuted = gF.prototype.setAdWillPlayMuted;
  gF.prototype.setAdWillAutoPlay = gF.prototype.setAdWillAutoPlay;
  var hF = q(['https://adservice.google.com/adsid/integrator.', '']),
    iF = q(['https://adservice.google.ad/adsid/integrator.', '']),
    jF = q(['https://adservice.google.ae/adsid/integrator.', '']),
    kF = q(['https://adservice.google.com.af/adsid/integrator.', '']),
    lF = q(['https://adservice.google.com.ag/adsid/integrator.', '']),
    mF = q(['https://adservice.google.com.ai/adsid/integrator.', '']),
    nF = q(['https://adservice.google.al/adsid/integrator.', '']),
    oF = q(['https://adservice.google.co.ao/adsid/integrator.', '']),
    pF = q(['https://adservice.google.com.ar/adsid/integrator.', '']),
    qF = q(['https://adservice.google.as/adsid/integrator.', '']),
    rF = q(['https://adservice.google.at/adsid/integrator.', '']),
    sF = q(['https://adservice.google.com.au/adsid/integrator.', '']),
    tF = q(['https://adservice.google.az/adsid/integrator.', '']),
    uF = q(['https://adservice.google.com.bd/adsid/integrator.', '']),
    vF = q(['https://adservice.google.be/adsid/integrator.', '']),
    wF = q(['https://adservice.google.bf/adsid/integrator.', '']),
    xF = q(['https://adservice.google.bg/adsid/integrator.', '']),
    yF = q(['https://adservice.google.com.bh/adsid/integrator.', '']),
    zF = q(['https://adservice.google.bi/adsid/integrator.', '']),
    AF = q(['https://adservice.google.bj/adsid/integrator.', '']),
    BF = q(['https://adservice.google.com.bn/adsid/integrator.', '']),
    CF = q(['https://adservice.google.com.bo/adsid/integrator.', '']),
    DF = q(['https://adservice.google.com.br/adsid/integrator.', '']),
    EF = q(['https://adservice.google.bs/adsid/integrator.', '']),
    FF = q(['https://adservice.google.bt/adsid/integrator.', '']),
    GF = q(['https://adservice.google.co.bw/adsid/integrator.', '']),
    HF = q(['https://adservice.google.com.bz/adsid/integrator.', '']),
    IF = q(['https://adservice.google.ca/adsid/integrator.', '']),
    JF = q(['https://adservice.google.cd/adsid/integrator.', '']),
    KF = q(['https://adservice.google.cf/adsid/integrator.', '']),
    LF = q(['https://adservice.google.cg/adsid/integrator.', '']),
    MF = q(['https://adservice.google.ch/adsid/integrator.', '']),
    NF = q(['https://adservice.google.ci/adsid/integrator.', '']),
    OF = q(['https://adservice.google.co.ck/adsid/integrator.', '']),
    PF = q(['https://adservice.google.cl/adsid/integrator.', '']),
    QF = q(['https://adservice.google.cm/adsid/integrator.', '']),
    RF = q(['https://adservice.google.com.co/adsid/integrator.', '']),
    SF = q(['https://adservice.google.co.cr/adsid/integrator.', '']),
    TF = q(['https://adservice.google.com.cu/adsid/integrator.', '']),
    UF = q(['https://adservice.google.cv/adsid/integrator.', '']),
    VF = q(['https://adservice.google.com.cy/adsid/integrator.', '']),
    WF = q(['https://adservice.google.cz/adsid/integrator.', '']),
    XF = q(['https://adservice.google.de/adsid/integrator.', '']),
    YF = q(['https://adservice.google.dj/adsid/integrator.', '']),
    ZF = q(['https://adservice.google.dk/adsid/integrator.', '']),
    $F = q(['https://adservice.google.dm/adsid/integrator.', '']),
    aG = q(['https://adservice.google.dz/adsid/integrator.', '']),
    bG = q(['https://adservice.google.com.ec/adsid/integrator.', '']),
    cG = q(['https://adservice.google.ee/adsid/integrator.', '']),
    dG = q(['https://adservice.google.com.eg/adsid/integrator.', '']),
    eG = q(['https://adservice.google.es/adsid/integrator.', '']),
    fG = q(['https://adservice.google.com.et/adsid/integrator.', '']),
    gG = q(['https://adservice.google.fi/adsid/integrator.', '']),
    hG = q(['https://adservice.google.com.fj/adsid/integrator.', '']),
    iG = q(['https://adservice.google.fm/adsid/integrator.', '']),
    jG = q(['https://adservice.google.fr/adsid/integrator.', '']),
    kG = q(['https://adservice.google.ga/adsid/integrator.', '']),
    lG = q(['https://adservice.google.ge/adsid/integrator.', '']),
    mG = q(['https://adservice.google.gg/adsid/integrator.', '']),
    nG = q(['https://adservice.google.com.gh/adsid/integrator.', '']),
    oG = q(['https://adservice.google.com.gi/adsid/integrator.', '']),
    pG = q(['https://adservice.google.gl/adsid/integrator.', '']),
    qG = q(['https://adservice.google.gm/adsid/integrator.', '']),
    rG = q(['https://adservice.google.gr/adsid/integrator.', '']),
    sG = q(['https://adservice.google.com.gt/adsid/integrator.', '']),
    tG = q(['https://adservice.google.gy/adsid/integrator.', '']),
    uG = q(['https://adservice.google.com.hk/adsid/integrator.', '']),
    vG = q(['https://adservice.google.hn/adsid/integrator.', '']),
    wG = q(['https://adservice.google.hr/adsid/integrator.', '']),
    xG = q(['https://adservice.google.ht/adsid/integrator.', '']),
    yG = q(['https://adservice.google.hu/adsid/integrator.', '']),
    zG = q(['https://adservice.google.co.id/adsid/integrator.', '']),
    AG = q(['https://adservice.google.ie/adsid/integrator.', '']),
    BG = q(['https://adservice.google.co.il/adsid/integrator.', '']),
    CG = q(['https://adservice.google.im/adsid/integrator.', '']),
    DG = q(['https://adservice.google.co.in/adsid/integrator.', '']),
    EG = q(['https://adservice.google.iq/adsid/integrator.', '']),
    FG = q(['https://adservice.google.is/adsid/integrator.', '']),
    GG = q(['https://adservice.google.it/adsid/integrator.', '']),
    HG = q(['https://adservice.google.je/adsid/integrator.', '']),
    IG = q(['https://adservice.google.com.jm/adsid/integrator.', '']),
    JG = q(['https://adservice.google.jo/adsid/integrator.', '']),
    KG = q(['https://adservice.google.co.jp/adsid/integrator.', '']),
    LG = q(['https://adservice.google.co.ke/adsid/integrator.', '']),
    MG = q(['https://adservice.google.com.kh/adsid/integrator.', '']),
    NG = q(['https://adservice.google.ki/adsid/integrator.', '']),
    OG = q(['https://adservice.google.kg/adsid/integrator.', '']),
    PG = q(['https://adservice.google.co.kr/adsid/integrator.', '']),
    QG = q(['https://adservice.google.com.kw/adsid/integrator.', '']),
    RG = q(['https://adservice.google.kz/adsid/integrator.', '']),
    SG = q(['https://adservice.google.la/adsid/integrator.', '']),
    TG = q(['https://adservice.google.com.lb/adsid/integrator.', '']),
    UG = q(['https://adservice.google.li/adsid/integrator.', '']),
    VG = q(['https://adservice.google.lk/adsid/integrator.', '']),
    WG = q(['https://adservice.google.co.ls/adsid/integrator.', '']),
    XG = q(['https://adservice.google.lt/adsid/integrator.', '']),
    YG = q(['https://adservice.google.lu/adsid/integrator.', '']),
    ZG = q(['https://adservice.google.lv/adsid/integrator.', '']),
    $G = q(['https://adservice.google.com.ly/adsid/integrator.', '']),
    aH = q(['https://adservice.google.md/adsid/integrator.', '']),
    bH = q(['https://adservice.google.me/adsid/integrator.', '']),
    cH = q(['https://adservice.google.mg/adsid/integrator.', '']),
    dH = q(['https://adservice.google.mk/adsid/integrator.', '']),
    eH = q(['https://adservice.google.ml/adsid/integrator.', '']),
    fH = q(['https://adservice.google.com.mm/adsid/integrator.', '']),
    gH = q(['https://adservice.google.mn/adsid/integrator.', '']),
    hH = q(['https://adservice.google.ms/adsid/integrator.', '']),
    iH = q(['https://adservice.google.com.mt/adsid/integrator.', '']),
    jH = q(['https://adservice.google.mu/adsid/integrator.', '']),
    kH = q(['https://adservice.google.mv/adsid/integrator.', '']),
    lH = q(['https://adservice.google.mw/adsid/integrator.', '']),
    mH = q(['https://adservice.google.com.mx/adsid/integrator.', '']),
    nH = q(['https://adservice.google.com.my/adsid/integrator.', '']),
    oH = q(['https://adservice.google.co.mz/adsid/integrator.', '']),
    pH = q(['https://adservice.google.com.na/adsid/integrator.', '']),
    qH = q(['https://adservice.google.com.ng/adsid/integrator.', '']),
    rH = q(['https://adservice.google.com.ni/adsid/integrator.', '']),
    sH = q(['https://adservice.google.ne/adsid/integrator.', '']),
    tH = q(['https://adservice.google.nl/adsid/integrator.', '']),
    uH = q(['https://adservice.google.no/adsid/integrator.', '']),
    vH = q(['https://adservice.google.com.np/adsid/integrator.', '']),
    wH = q(['https://adservice.google.nr/adsid/integrator.', '']),
    xH = q(['https://adservice.google.nu/adsid/integrator.', '']),
    yH = q(['https://adservice.google.co.nz/adsid/integrator.', '']),
    zH = q(['https://adservice.google.com.om/adsid/integrator.', '']),
    AH = q(['https://adservice.google.com.pa/adsid/integrator.', '']),
    BH = q(['https://adservice.google.com.pe/adsid/integrator.', '']),
    CH = q(['https://adservice.google.com.pg/adsid/integrator.', '']),
    DH = q(['https://adservice.google.com.ph/adsid/integrator.', '']),
    EH = q(['https://adservice.google.com.pk/adsid/integrator.', '']),
    FH = q(['https://adservice.google.pl/adsid/integrator.', '']),
    GH = q(['https://adservice.google.pn/adsid/integrator.', '']),
    HH = q(['https://adservice.google.com.pr/adsid/integrator.', '']),
    IH = q(['https://adservice.google.ps/adsid/integrator.', '']),
    JH = q(['https://adservice.google.pt/adsid/integrator.', '']),
    KH = q(['https://adservice.google.com.py/adsid/integrator.', '']),
    LH = q(['https://adservice.google.com.qa/adsid/integrator.', '']),
    MH = q(['https://adservice.google.ro/adsid/integrator.', '']),
    NH = q(['https://adservice.google.rw/adsid/integrator.', '']),
    OH = q(['https://adservice.google.com.sa/adsid/integrator.', '']),
    PH = q(['https://adservice.google.com.sb/adsid/integrator.', '']),
    QH = q(['https://adservice.google.sc/adsid/integrator.', '']),
    RH = q(['https://adservice.google.se/adsid/integrator.', '']),
    SH = q(['https://adservice.google.com.sg/adsid/integrator.', '']),
    TH = q(['https://adservice.google.sh/adsid/integrator.', '']),
    UH = q(['https://adservice.google.si/adsid/integrator.', '']),
    VH = q(['https://adservice.google.sk/adsid/integrator.', '']),
    WH = q(['https://adservice.google.sn/adsid/integrator.', '']),
    XH = q(['https://adservice.google.so/adsid/integrator.', '']),
    YH = q(['https://adservice.google.sm/adsid/integrator.', '']),
    ZH = q(['https://adservice.google.sr/adsid/integrator.', '']),
    $H = q(['https://adservice.google.st/adsid/integrator.', '']),
    aI = q(['https://adservice.google.com.sv/adsid/integrator.', '']),
    bI = q(['https://adservice.google.td/adsid/integrator.', '']),
    cI = q(['https://adservice.google.tg/adsid/integrator.', '']),
    dI = q(['https://adservice.google.co.th/adsid/integrator.', '']),
    eI = q(['https://adservice.google.com.tj/adsid/integrator.', '']),
    fI = q(['https://adservice.google.tl/adsid/integrator.', '']),
    gI = q(['https://adservice.google.tm/adsid/integrator.', '']),
    hI = q(['https://adservice.google.tn/adsid/integrator.', '']),
    iI = q(['https://adservice.google.to/adsid/integrator.', '']),
    jI = q(['https://adservice.google.com.tr/adsid/integrator.', '']),
    kI = q(['https://adservice.google.tt/adsid/integrator.', '']),
    lI = q(['https://adservice.google.com.tw/adsid/integrator.', '']),
    mI = q(['https://adservice.google.co.tz/adsid/integrator.', '']),
    nI = q(['https://adservice.google.com.ua/adsid/integrator.', '']),
    oI = q(['https://adservice.google.co.ug/adsid/integrator.', '']),
    pI = q(['https://adservice.google.co.uk/adsid/integrator.', '']),
    qI = q(['https://adservice.google.com.uy/adsid/integrator.', '']),
    rI = q(['https://adservice.google.co.uz/adsid/integrator.', '']),
    sI = q(['https://adservice.google.com.vc/adsid/integrator.', '']),
    tI = q(['https://adservice.google.co.ve/adsid/integrator.', '']),
    uI = q(['https://adservice.google.vg/adsid/integrator.', '']),
    vI = q(['https://adservice.google.co.vi/adsid/integrator.', '']),
    wI = q(['https://adservice.google.com.vn/adsid/integrator.', '']),
    xI = q(['https://adservice.google.vu/adsid/integrator.', '']),
    yI = q(['https://adservice.google.ws/adsid/integrator.', '']),
    zI = q(['https://adservice.google.rs/adsid/integrator.', '']),
    AI = q(['https://adservice.google.co.za/adsid/integrator.', '']),
    BI = q(['https://adservice.google.co.zm/adsid/integrator.', '']),
    CI = q(['https://adservice.google.co.zw/adsid/integrator.', '']),
    DI = q(['https://adservice.google.cat/adsid/integrator.', '']),
    EI = new Map(
      [
        [
          '.google.com',
          function (a) {
            return J(hF, a);
          },
        ],
        [
          '.google.ad',
          function (a) {
            return J(iF, a);
          },
        ],
        [
          '.google.ae',
          function (a) {
            return J(jF, a);
          },
        ],
        [
          '.google.com.af',
          function (a) {
            return J(kF, a);
          },
        ],
        [
          '.google.com.ag',
          function (a) {
            return J(lF, a);
          },
        ],
        [
          '.google.com.ai',
          function (a) {
            return J(mF, a);
          },
        ],
        [
          '.google.al',
          function (a) {
            return J(nF, a);
          },
        ],
        [
          '.google.co.ao',
          function (a) {
            return J(oF, a);
          },
        ],
        [
          '.google.com.ar',
          function (a) {
            return J(pF, a);
          },
        ],
        [
          '.google.as',
          function (a) {
            return J(qF, a);
          },
        ],
        [
          '.google.at',
          function (a) {
            return J(rF, a);
          },
        ],
        [
          '.google.com.au',
          function (a) {
            return J(sF, a);
          },
        ],
        [
          '.google.az',
          function (a) {
            return J(tF, a);
          },
        ],
        [
          '.google.com.bd',
          function (a) {
            return J(uF, a);
          },
        ],
        [
          '.google.be',
          function (a) {
            return J(vF, a);
          },
        ],
        [
          '.google.bf',
          function (a) {
            return J(wF, a);
          },
        ],
        [
          '.google.bg',
          function (a) {
            return J(xF, a);
          },
        ],
        [
          '.google.com.bh',
          function (a) {
            return J(yF, a);
          },
        ],
        [
          '.google.bi',
          function (a) {
            return J(zF, a);
          },
        ],
        [
          '.google.bj',
          function (a) {
            return J(AF, a);
          },
        ],
        [
          '.google.com.bn',
          function (a) {
            return J(BF, a);
          },
        ],
        [
          '.google.com.bo',
          function (a) {
            return J(CF, a);
          },
        ],
        [
          '.google.com.br',
          function (a) {
            return J(DF, a);
          },
        ],
        [
          '.google.bs',
          function (a) {
            return J(EF, a);
          },
        ],
        [
          '.google.bt',
          function (a) {
            return J(FF, a);
          },
        ],
        [
          '.google.co.bw',
          function (a) {
            return J(GF, a);
          },
        ],
        [
          '.google.com.bz',
          function (a) {
            return J(HF, a);
          },
        ],
        [
          '.google.ca',
          function (a) {
            return J(IF, a);
          },
        ],
        [
          '.google.cd',
          function (a) {
            return J(JF, a);
          },
        ],
        [
          '.google.cf',
          function (a) {
            return J(KF, a);
          },
        ],
        [
          '.google.cg',
          function (a) {
            return J(LF, a);
          },
        ],
        [
          '.google.ch',
          function (a) {
            return J(MF, a);
          },
        ],
        [
          '.google.ci',
          function (a) {
            return J(NF, a);
          },
        ],
        [
          '.google.co.ck',
          function (a) {
            return J(OF, a);
          },
        ],
        [
          '.google.cl',
          function (a) {
            return J(PF, a);
          },
        ],
        [
          '.google.cm',
          function (a) {
            return J(QF, a);
          },
        ],
        [
          '.google.com.co',
          function (a) {
            return J(RF, a);
          },
        ],
        [
          '.google.co.cr',
          function (a) {
            return J(SF, a);
          },
        ],
        [
          '.google.com.cu',
          function (a) {
            return J(TF, a);
          },
        ],
        [
          '.google.cv',
          function (a) {
            return J(UF, a);
          },
        ],
        [
          '.google.com.cy',
          function (a) {
            return J(VF, a);
          },
        ],
        [
          '.google.cz',
          function (a) {
            return J(WF, a);
          },
        ],
        [
          '.google.de',
          function (a) {
            return J(XF, a);
          },
        ],
        [
          '.google.dj',
          function (a) {
            return J(YF, a);
          },
        ],
        [
          '.google.dk',
          function (a) {
            return J(ZF, a);
          },
        ],
        [
          '.google.dm',
          function (a) {
            return J($F, a);
          },
        ],
        [
          '.google.dz',
          function (a) {
            return J(aG, a);
          },
        ],
        [
          '.google.com.ec',
          function (a) {
            return J(bG, a);
          },
        ],
        [
          '.google.ee',
          function (a) {
            return J(cG, a);
          },
        ],
        [
          '.google.com.eg',
          function (a) {
            return J(dG, a);
          },
        ],
        [
          '.google.es',
          function (a) {
            return J(eG, a);
          },
        ],
        [
          '.google.com.et',
          function (a) {
            return J(fG, a);
          },
        ],
        [
          '.google.fi',
          function (a) {
            return J(gG, a);
          },
        ],
        [
          '.google.com.fj',
          function (a) {
            return J(hG, a);
          },
        ],
        [
          '.google.fm',
          function (a) {
            return J(iG, a);
          },
        ],
        [
          '.google.fr',
          function (a) {
            return J(jG, a);
          },
        ],
        [
          '.google.ga',
          function (a) {
            return J(kG, a);
          },
        ],
        [
          '.google.ge',
          function (a) {
            return J(lG, a);
          },
        ],
        [
          '.google.gg',
          function (a) {
            return J(mG, a);
          },
        ],
        [
          '.google.com.gh',
          function (a) {
            return J(nG, a);
          },
        ],
        [
          '.google.com.gi',
          function (a) {
            return J(oG, a);
          },
        ],
        [
          '.google.gl',
          function (a) {
            return J(pG, a);
          },
        ],
        [
          '.google.gm',
          function (a) {
            return J(qG, a);
          },
        ],
        [
          '.google.gr',
          function (a) {
            return J(rG, a);
          },
        ],
        [
          '.google.com.gt',
          function (a) {
            return J(sG, a);
          },
        ],
        [
          '.google.gy',
          function (a) {
            return J(tG, a);
          },
        ],
        [
          '.google.com.hk',
          function (a) {
            return J(uG, a);
          },
        ],
        [
          '.google.hn',
          function (a) {
            return J(vG, a);
          },
        ],
        [
          '.google.hr',
          function (a) {
            return J(wG, a);
          },
        ],
        [
          '.google.ht',
          function (a) {
            return J(xG, a);
          },
        ],
        [
          '.google.hu',
          function (a) {
            return J(yG, a);
          },
        ],
        [
          '.google.co.id',
          function (a) {
            return J(zG, a);
          },
        ],
        [
          '.google.ie',
          function (a) {
            return J(AG, a);
          },
        ],
        [
          '.google.co.il',
          function (a) {
            return J(BG, a);
          },
        ],
        [
          '.google.im',
          function (a) {
            return J(CG, a);
          },
        ],
        [
          '.google.co.in',
          function (a) {
            return J(DG, a);
          },
        ],
        [
          '.google.iq',
          function (a) {
            return J(EG, a);
          },
        ],
        [
          '.google.is',
          function (a) {
            return J(FG, a);
          },
        ],
        [
          '.google.it',
          function (a) {
            return J(GG, a);
          },
        ],
        [
          '.google.je',
          function (a) {
            return J(HG, a);
          },
        ],
        [
          '.google.com.jm',
          function (a) {
            return J(IG, a);
          },
        ],
        [
          '.google.jo',
          function (a) {
            return J(JG, a);
          },
        ],
        [
          '.google.co.jp',
          function (a) {
            return J(KG, a);
          },
        ],
        [
          '.google.co.ke',
          function (a) {
            return J(LG, a);
          },
        ],
        [
          '.google.com.kh',
          function (a) {
            return J(MG, a);
          },
        ],
        [
          '.google.ki',
          function (a) {
            return J(NG, a);
          },
        ],
        [
          '.google.kg',
          function (a) {
            return J(OG, a);
          },
        ],
        [
          '.google.co.kr',
          function (a) {
            return J(PG, a);
          },
        ],
        [
          '.google.com.kw',
          function (a) {
            return J(QG, a);
          },
        ],
        [
          '.google.kz',
          function (a) {
            return J(RG, a);
          },
        ],
        [
          '.google.la',
          function (a) {
            return J(SG, a);
          },
        ],
        [
          '.google.com.lb',
          function (a) {
            return J(TG, a);
          },
        ],
        [
          '.google.li',
          function (a) {
            return J(UG, a);
          },
        ],
        [
          '.google.lk',
          function (a) {
            return J(VG, a);
          },
        ],
        [
          '.google.co.ls',
          function (a) {
            return J(WG, a);
          },
        ],
        [
          '.google.lt',
          function (a) {
            return J(XG, a);
          },
        ],
        [
          '.google.lu',
          function (a) {
            return J(YG, a);
          },
        ],
        [
          '.google.lv',
          function (a) {
            return J(ZG, a);
          },
        ],
        [
          '.google.com.ly',
          function (a) {
            return J($G, a);
          },
        ],
        [
          '.google.md',
          function (a) {
            return J(aH, a);
          },
        ],
        [
          '.google.me',
          function (a) {
            return J(bH, a);
          },
        ],
        [
          '.google.mg',
          function (a) {
            return J(cH, a);
          },
        ],
        [
          '.google.mk',
          function (a) {
            return J(dH, a);
          },
        ],
        [
          '.google.ml',
          function (a) {
            return J(eH, a);
          },
        ],
        [
          '.google.com.mm',
          function (a) {
            return J(fH, a);
          },
        ],
        [
          '.google.mn',
          function (a) {
            return J(gH, a);
          },
        ],
        [
          '.google.ms',
          function (a) {
            return J(hH, a);
          },
        ],
        [
          '.google.com.mt',
          function (a) {
            return J(iH, a);
          },
        ],
        [
          '.google.mu',
          function (a) {
            return J(jH, a);
          },
        ],
        [
          '.google.mv',
          function (a) {
            return J(kH, a);
          },
        ],
        [
          '.google.mw',
          function (a) {
            return J(lH, a);
          },
        ],
        [
          '.google.com.mx',
          function (a) {
            return J(mH, a);
          },
        ],
        [
          '.google.com.my',
          function (a) {
            return J(nH, a);
          },
        ],
        [
          '.google.co.mz',
          function (a) {
            return J(oH, a);
          },
        ],
        [
          '.google.com.na',
          function (a) {
            return J(pH, a);
          },
        ],
        [
          '.google.com.ng',
          function (a) {
            return J(qH, a);
          },
        ],
        [
          '.google.com.ni',
          function (a) {
            return J(rH, a);
          },
        ],
        [
          '.google.ne',
          function (a) {
            return J(sH, a);
          },
        ],
        [
          '.google.nl',
          function (a) {
            return J(tH, a);
          },
        ],
        [
          '.google.no',
          function (a) {
            return J(uH, a);
          },
        ],
        [
          '.google.com.np',
          function (a) {
            return J(vH, a);
          },
        ],
        [
          '.google.nr',
          function (a) {
            return J(wH, a);
          },
        ],
        [
          '.google.nu',
          function (a) {
            return J(xH, a);
          },
        ],
        [
          '.google.co.nz',
          function (a) {
            return J(yH, a);
          },
        ],
        [
          '.google.com.om',
          function (a) {
            return J(zH, a);
          },
        ],
        [
          '.google.com.pa',
          function (a) {
            return J(AH, a);
          },
        ],
        [
          '.google.com.pe',
          function (a) {
            return J(BH, a);
          },
        ],
        [
          '.google.com.pg',
          function (a) {
            return J(CH, a);
          },
        ],
        [
          '.google.com.ph',
          function (a) {
            return J(DH, a);
          },
        ],
        [
          '.google.com.pk',
          function (a) {
            return J(EH, a);
          },
        ],
        [
          '.google.pl',
          function (a) {
            return J(FH, a);
          },
        ],
        [
          '.google.pn',
          function (a) {
            return J(GH, a);
          },
        ],
        [
          '.google.com.pr',
          function (a) {
            return J(HH, a);
          },
        ],
        [
          '.google.ps',
          function (a) {
            return J(IH, a);
          },
        ],
        [
          '.google.pt',
          function (a) {
            return J(JH, a);
          },
        ],
        [
          '.google.com.py',
          function (a) {
            return J(KH, a);
          },
        ],
        [
          '.google.com.qa',
          function (a) {
            return J(LH, a);
          },
        ],
        [
          '.google.ro',
          function (a) {
            return J(MH, a);
          },
        ],
        [
          '.google.rw',
          function (a) {
            return J(NH, a);
          },
        ],
        [
          '.google.com.sa',
          function (a) {
            return J(OH, a);
          },
        ],
        [
          '.google.com.sb',
          function (a) {
            return J(PH, a);
          },
        ],
        [
          '.google.sc',
          function (a) {
            return J(QH, a);
          },
        ],
        [
          '.google.se',
          function (a) {
            return J(RH, a);
          },
        ],
        [
          '.google.com.sg',
          function (a) {
            return J(SH, a);
          },
        ],
        [
          '.google.sh',
          function (a) {
            return J(TH, a);
          },
        ],
        [
          '.google.si',
          function (a) {
            return J(UH, a);
          },
        ],
        [
          '.google.sk',
          function (a) {
            return J(VH, a);
          },
        ],
        [
          '.google.sn',
          function (a) {
            return J(WH, a);
          },
        ],
        [
          '.google.so',
          function (a) {
            return J(XH, a);
          },
        ],
        [
          '.google.sm',
          function (a) {
            return J(YH, a);
          },
        ],
        [
          '.google.sr',
          function (a) {
            return J(ZH, a);
          },
        ],
        [
          '.google.st',
          function (a) {
            return J($H, a);
          },
        ],
        [
          '.google.com.sv',
          function (a) {
            return J(aI, a);
          },
        ],
        [
          '.google.td',
          function (a) {
            return J(bI, a);
          },
        ],
        [
          '.google.tg',
          function (a) {
            return J(cI, a);
          },
        ],
        [
          '.google.co.th',
          function (a) {
            return J(dI, a);
          },
        ],
        [
          '.google.com.tj',
          function (a) {
            return J(eI, a);
          },
        ],
        [
          '.google.tl',
          function (a) {
            return J(fI, a);
          },
        ],
        [
          '.google.tm',
          function (a) {
            return J(gI, a);
          },
        ],
        [
          '.google.tn',
          function (a) {
            return J(hI, a);
          },
        ],
        [
          '.google.to',
          function (a) {
            return J(iI, a);
          },
        ],
        [
          '.google.com.tr',
          function (a) {
            return J(jI, a);
          },
        ],
        [
          '.google.tt',
          function (a) {
            return J(kI, a);
          },
        ],
        [
          '.google.com.tw',
          function (a) {
            return J(lI, a);
          },
        ],
        [
          '.google.co.tz',
          function (a) {
            return J(mI, a);
          },
        ],
        [
          '.google.com.ua',
          function (a) {
            return J(nI, a);
          },
        ],
        [
          '.google.co.ug',
          function (a) {
            return J(oI, a);
          },
        ],
        [
          '.google.co.uk',
          function (a) {
            return J(pI, a);
          },
        ],
        [
          '.google.com.uy',
          function (a) {
            return J(qI, a);
          },
        ],
        [
          '.google.co.uz',
          function (a) {
            return J(rI, a);
          },
        ],
        [
          '.google.com.vc',
          function (a) {
            return J(sI, a);
          },
        ],
        [
          '.google.co.ve',
          function (a) {
            return J(tI, a);
          },
        ],
        [
          '.google.vg',
          function (a) {
            return J(uI, a);
          },
        ],
        [
          '.google.co.vi',
          function (a) {
            return J(vI, a);
          },
        ],
        [
          '.google.com.vn',
          function (a) {
            return J(wI, a);
          },
        ],
        [
          '.google.vu',
          function (a) {
            return J(xI, a);
          },
        ],
        [
          '.google.ws',
          function (a) {
            return J(yI, a);
          },
        ],
        [
          '.google.rs',
          function (a) {
            return J(zI, a);
          },
        ],
        [
          '.google.co.za',
          function (a) {
            return J(AI, a);
          },
        ],
        [
          '.google.co.zm',
          function (a) {
            return J(BI, a);
          },
        ],
        [
          '.google.co.zw',
          function (a) {
            return J(CI, a);
          },
        ],
        [
          '.google.cat',
          function (a) {
            return J(DI, a);
          },
        ],
      ].map(function (a) {
        var b = r(a);
        a = b.next().value;
        b = b.next().value;
        var c = {};
        return [
          a,
          ((c.json = b('json')),
          (c.js = b('js')),
          (c['sync.js'] = b('sync.js')),
          c),
        ];
      })
    );
  var FI = function (a, b, c) {
    var d = kh('LINK', a);
    try {
      if (((d.rel = 'preload'), rb('preload', 'stylesheet'))) {
        d.href = Pf(b).toString();
        var e = ig(
          'style[nonce],link[rel="stylesheet"][nonce]',
          d.ownerDocument && d.ownerDocument.defaultView
        );
        e && d.setAttribute('nonce', e);
      } else {
        if (b instanceof Of) var f = Pf(b).toString();
        else {
          if (b instanceof Sf) var g = Tf(b);
          else {
            if (b instanceof Sf) var h = b;
            else {
              b = 'object' == typeof b && b.Ya ? b.La() : String(b);
              b: if (((e = b), Zf)) {
                try {
                  var k = new URL(e);
                } catch (u) {
                  var n = 'https:';
                  break b;
                }
                n = k.protocol;
              } else
                c: {
                  var m = document.createElement('a');
                  try {
                    m.href = e;
                  } catch (u) {
                    n = void 0;
                    break c;
                  }
                  var x = m.protocol;
                  n = ':' === x || '' === x ? 'https:' : x;
                }
              'javascript:' === n && (b = 'about:invalid#zClosurez');
              h = Wf(b);
            }
            g = Tf(h);
          }
          f = g;
        }
        d.href = f;
      }
    } catch (u) {
      return;
    }
    d.as = 'script';
    c && d.setAttribute('nonce', c);
    if ((a = a.getElementsByTagName('head')[0]))
      try {
        a.appendChild(d);
      } catch (u) {}
  };
  var GI = v,
    II = function (a) {
      var b = new Map([['domain', v.location.hostname]]);
      HI[3] >= Xa() && b.set('adsid', HI[1]);
      return Hh(EI.get(a).js, b);
    },
    HI,
    JI,
    KI = function () {
      GI = v;
      HI = GI.googleToken = GI.googleToken || {};
      var a = Xa();
      (HI[1] && HI[3] > a && 0 < HI[2]) ||
        ((HI[1] = ''), (HI[2] = -1), (HI[3] = -1), (HI[4] = ''), (HI[6] = ''));
      JI = GI.googleIMState = GI.googleIMState || {};
      EI.has(JI[1]) || (JI[1] = '.google.com');
      Array.isArray(JI[5]) || (JI[5] = []);
      'boolean' !== typeof JI[6] && (JI[6] = !1);
      Array.isArray(JI[7]) || (JI[7] = []);
      'number' !== typeof JI[8] && (JI[8] = 0);
    },
    LI = {
      Zc: function () {
        return 0 < JI[8];
      },
      Sf: function () {
        JI[8]++;
      },
      Tf: function () {
        0 < JI[8] && JI[8]--;
      },
      Uf: function () {
        JI[8] = 0;
      },
      Bi: function () {
        return !1;
      },
      Yd: function () {
        return JI[5];
      },
      Rd: function (a) {
        try {
          a();
        } catch (b) {
          v.setTimeout(function () {
            throw b;
          }, 0);
        }
      },
      je: function () {
        if (!LI.Zc()) {
          var a = v.document,
            b = function (e) {
              e = II(e);
              a: {
                try {
                  var f = ig('script[nonce]');
                  break a;
                } catch (g) {}
                f = void 0;
              }
              FI(a, e.toString(), f);
              f = kh('SCRIPT', a);
              f.type = 'text/javascript';
              f.onerror = function () {
                return v.processGoogleToken({}, 2);
              };
              f.src = Pf(e);
              Vg(f);
              try {
                (a.head || a.body || a.documentElement).appendChild(f), LI.Sf();
              } catch (g) {}
            },
            c = JI[1];
          b(c);
          '.google.com' != c && b('.google.com');
          b = {};
          var d = ((b.newToken = 'FBT'), b);
          v.setTimeout(function () {
            return v.processGoogleToken(d, 1);
          }, 1e3);
        }
      },
    };
  function MI(a) {
    KI();
    var b = GI.googleToken[5] || 0;
    a && (0 != b || HI[3] >= Xa() ? LI.Rd(a) : (LI.Yd().push(a), LI.je()));
    (HI[3] >= Xa() && HI[2] >= Xa()) || LI.je();
  }
  var NI = function (a) {
    v.processGoogleToken =
      v.processGoogleToken ||
      function (b, c) {
        var d = b;
        d = void 0 === d ? {} : d;
        c = void 0 === c ? 0 : c;
        b = d.newToken || '';
        var e = 'NT' == b,
          f = parseInt(d.freshLifetimeSecs || '', 10),
          g = parseInt(d.validLifetimeSecs || '', 10),
          h = d['1p_jar'] || '';
        d = d.pucrd || '';
        KI();
        1 == c ? LI.Uf() : LI.Tf();
        var k = (GI.googleToken = GI.googleToken || {}),
          n =
            0 == c &&
            b &&
            'string' === typeof b &&
            !e &&
            'number' === typeof f &&
            0 < f &&
            'number' === typeof g &&
            0 < g &&
            'string' === typeof h;
        e = e && !LI.Zc() && (!(HI[3] >= Xa()) || 'NT' == HI[1]);
        var m = !(HI[3] >= Xa()) && 0 != c;
        if (n || e || m)
          (e = Xa()),
            (f = e + 1e3 * f),
            (g = e + 1e3 * g),
            1e-5 > Math.random() &&
              Ch(
                v,
                'https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=' +
                  c
              ),
            (k[5] = c),
            (k[1] = b),
            (k[2] = f),
            (k[3] = g),
            (k[4] = h),
            (k[6] = d),
            KI();
        if (n || !LI.Zc()) {
          c = LI.Yd();
          for (b = 0; b < c.length; b++) LI.Rd(c[b]);
          c.length = 0;
        }
      };
    MI(a);
  };
  var OI = function (a) {
    E.call(this);
    this.j = a;
    this.h = null;
    this.o = {};
    this.A = 0;
    this.l = null;
  };
  t(OI, E);
  OI.prototype.N = function () {
    this.l && Te(this.j, 'message', this.l);
    E.prototype.N.call(this);
  };
  var QI = function (a) {
      var b;
      return (
        'function' === typeof (null == (b = a.j) ? void 0 : b.__uspapi) ||
        null != PI(a)
      );
    },
    SI = function (a, b) {
      var c = {};
      if (QI(a)) {
        var d = Oe(function () {
          return b(c);
        });
        RI(a, function (e, f) {
          f && (c = e);
          d();
        });
        setTimeout(d, 500);
      } else b(c);
    },
    RI = function (a, b) {
      var c;
      'function' === typeof (null == (c = a.j) ? void 0 : c.__uspapi)
        ? ((a = a.j.__uspapi), a('getUSPData', 1, b))
        : PI(a) &&
          (TI(a),
          (c = ++a.A),
          (a.o[c] = b),
          a.h &&
            ((b = {}),
            a.h.postMessage(
              ((b.__uspapiCall = {
                command: 'getUSPData',
                version: 1,
                callId: c,
              }),
              b),
              '*'
            )));
    },
    PI = function (a) {
      if (a.h) return a.h;
      a.h = ih(a.j, '__uspapiLocator');
      return a.h;
    },
    TI = function (a) {
      a.l ||
        ((a.l = function (b) {
          try {
            var c = {};
            'string' === typeof b.data
              ? (c = JSON.parse(b.data))
              : (c = b.data);
            var d = c.__uspapiReturn;
            var e;
            null == (e = a.o) || e[d.callId](d.returnValue, d.success);
          } catch (f) {}
        }),
        Se(a.j, 'message', a.l));
    };
  (function () {
    if (
      !vf(function (b) {
        return b.match(H().location.href);
      })
    ) {
      var a = AC(
        document.querySelectorAll && document.querySelector
          ? document.querySelectorAll('SCRIPT')
          : document.getElementsByTagName('SCRIPT')
      );
      null == a &&
        document.querySelectorAll &&
        (a = AC(document.querySelectorAll('script')));
      if (null == a)
        throw Error(
          'IMA SDK is either not loaded from a google domain or is not a supported version.'
        );
    }
  })();
  var UI = function (a) {
    O.call(this);
    var b = this,
      c = Ez(Gz(this.getSettings()));
    c && 0 < c.length && (Di.reset(), Fi(new gj(c)));
    this.B = new TE();
    this.h = a;
    this.F = new Map();
    this.A = this.h.K;
    this.J = new Cv(this);
    We(this, this.J);
    this.L = new Kz(window);
    this.M = new OI(window);
    this.j = null;
    this.G = {};
    this.H = [];
    0 != Hz.h ? ((this.l = new UC()), We(this, this.l)) : (this.l = WC());
    NB() &&
      (this.l.init(RD(this.A)),
      (this.C = bD(this.l, this.h.F)),
      Ve(this, function () {
        var d = b.C;
        b.l.A.delete(d);
        0 != Hz.h && (K(Is).o[d] = null);
      }));
  };
  t(UI, O);
  UI.prototype.destroy = function () {
    this.W();
  };
  UI.prototype.getVersion = function () {
    return 'h.3.556.1';
  };
  UI.prototype.requestAds = function (a, b) {
    var c = this,
      d = [],
      e = null;
    Mz(this.L) &&
      d.push(
        new Promise(function (g) {
          Pz(c.L, function (h) {
            e = h;
            g();
          });
        })
      );
    var f = null;
    QI(this.M) &&
      d.push(
        new Promise(function (g) {
          SI(c.M, function (h) {
            f = h;
            g();
          });
        })
      );
    Promise.all(d).then(function () {
      VI(c, a, b, { Bd: e, Ed: f });
    });
  };
  var VI = function (a, b, c, d) {
    var e = b.adTagUrl;
    e &&
      WB.h().report(8, {
        adtagurl: e,
        customPlayback: nE(a.h),
        customClick: null != a.h.I,
      });
    var f = 'goog_' + og++;
    a.F.set(f, c || null);
    var g = WI({ adTagUrl: e, ee: !1, Bd: d.Bd, Ed: d.Ed });
    a.j = Tz(e, g || {});
    mB(a.j, function () {
      XI(a);
    });
    c = [YI(a)];
    ZI(Vz(a.j)) && c.push($I());
    Promise.all(c).then(function () {
      var h = {};
      h = ((h.limaExperimentIds = Ei().sort().join(',')), h);
      var k = a.getSettings(),
        n = aD(a.l);
      n = void 0 === n ? null : n;
      var m = {};
      null != n && (m.activeViewPushUpdates = n);
      m.activityMonitorMode = k.h;
      m.adsToken = k.C;
      m.autoPlayAdBreaks = k.j;
      m.companionBackfill = k.getCompanionBackfill();
      m.cookiesEnabled = k.isCookiesEnabled();
      m.disableCustomPlaybackForIOS10Plus =
        k.getDisableCustomPlaybackForIOS10Plus();
      m.engagementDetection = !0;
      m.isFunctionalTest = !1;
      m.isVpaidAdapter = k.Rb();
      m['1pJar'] = k.H;
      m.numRedirects = k.getNumRedirects();
      m.pageCorrelator = k.O;
      m.persistentStateCorrelator = zh();
      m.playerType = k.getPlayerType();
      m.playerVersion = k.getPlayerVersion();
      m.ppid = k.getPpid();
      m.privacyControls = k.X;
      m.reportMediaRequests = !1;
      m.sessionId = k.B;
      m.streamCorrelator = k.Z;
      m.testingConfig = Gz(k).h;
      m.urlSignals = k.ca;
      m.vpaidMode = k.l;
      m.featureFlags = k.getFeatureFlags();
      n = b.adTagUrl;
      k = {};
      k.contentMediaUrl = a.h.J;
      k.customClickTrackingProvided = null != a.h.I;
      a: {
        var x = bn();
        x = r(x);
        for (var u = x.next(); !u.done; u = x.next())
          if (((u = u.value), u.url && u.url.includes('amp=1'))) {
            x = !0;
            break a;
          }
        x =
          null != window.context
            ? 0 < parseInt(window.context.ampcontextVersion, 10)
            : null != en().l;
      }
      k.isAmp = x;
      a: {
        try {
          var y = window.top.location.href;
        } catch (wd) {
          y = 2;
          break a;
        }
        y = null == y ? 2 : y == window.document.location.href ? 0 : 1;
      }
      k.iframeState = y;
      k.imaHostingDomain = window.document.domain;
      k.imaHostingPageUrl = window.document.URL;
      if (so()) var A = window.location.href;
      else {
        u = en();
        y = u.j;
        x = u.h;
        u = u.l;
        var F = null;
        if (u)
          try {
            A = tu(u.url);
            var da = A.h,
              ea = PB(da, '/v/');
            ea || (ea = PB(da, '/a/'));
            if (!ea) throw Error('Can not extract standalone amp url.');
            var Ba = PB('/' + ea, '/s/'),
              ua = hu(A.l);
            ua.remove('amp_js_v');
            ua.remove('amp_lite');
            var gb = Ba ? tu('https://' + Ba) : tu('http://' + ea);
            gu(gb, ua);
            F = gb.toString();
          } catch (wd) {
            F = null;
          }
        A = F ? F : y && y.url ? y.url : x && x.url ? x.url : '';
      }
      k.topAccessiblePageUrl = A;
      k.referrer = window.document.referrer;
      k.domLoadTime = a.A.J;
      k.sdkImplLoadTime = a.A.L;
      k.supportsResizing = !nE(a.h);
      A = H().location.ancestorOrigins;
      k.topOrigin = A
        ? 0 < A.length && 200 > A[A.length - 1].length
          ? A[A.length - 1]
          : ''
        : null;
      k.osdId = a.C;
      k.usesCustomVideoPlayback = nE(a.h);
      k.usesInlinePlayback = a.h.G;
      da = a.h.H;
      A = [];
      Ba = ea = '';
      if (null != da) {
        ea = da;
        Ba = !0;
        Ba = void 0 === Ba ? !1 : Ba;
        ua = [];
        for (gb = 0; ea && 25 > gb; ++gb) {
          y = '';
          (void 0 !== Ba && Ba) ||
            (y = (y = 9 !== ea.nodeType && ea.id) ? '/' + y : '');
          a: {
            if (ea && ea.nodeName && ea.parentElement) {
              x = ea.nodeName.toString().toLowerCase();
              u = ea.parentElement.childNodes;
              for (var dc = (F = 0); dc < u.length; ++dc) {
                var hf = u[dc];
                if (hf.nodeName && hf.nodeName.toString().toLowerCase() === x) {
                  if (ea === hf) {
                    x = '.' + F;
                    break a;
                  }
                  ++F;
                }
              }
            }
            x = '';
          }
          ua.push(
            (ea.nodeName && ea.nodeName.toString().toLowerCase()) + y + x
          );
          ea = ea.parentElement;
        }
        ea = ua.join();
        if (da) {
          da =
            ((da = da.ownerDocument) && (da.defaultView || da.parentWindow)) ||
            null;
          Ba = [];
          if (da)
            try {
              var U = da.parent;
              for (ua = 0; U && U !== da && 25 > ua; ++ua) {
                var yc = U.frames;
                for (gb = 0; gb < yc.length; ++gb)
                  if (da === yc[gb]) {
                    Ba.push(gb);
                    break;
                  }
                da = U;
                U = da.parent;
              }
            } catch (wd) {}
          Ba = Ba.join();
        } else Ba = '';
      }
      A.push(ea, Ba);
      if (null != n) {
        for (U = 0; U < Lu.length - 1; ++U) A.push(Qg(n, Lu[U]) || '');
        U = Qg(n, 'videoad_start_delay');
        yc = '';
        U &&
          ((U = parseInt(U, 10)),
          (yc = 0 > U ? 'postroll' : 0 == U ? 'preroll' : 'midroll'));
        A.push(yc);
      } else for (U = 0; U < Lu.length; ++U) A.push('');
      k = ((k.videoAdKey = eh(A.join(':')).toString()), k);
      U = {};
      h =
        ((U.consentSettings = g),
        (U.imalibExperiments = h),
        (U.settings = m),
        (U.videoEnvironment = k),
        U);
      m = {};
      m.adsResponse = b.adsResponse;
      m.videoPlayActivation = b.j;
      m.videoPlayMuted = b.l;
      m.videoContinuousPlay = b.h;
      m.adTagUrl = b.adTagUrl;
      m.contentDuration = b.contentDuration;
      m.contentKeywords = b.contentKeywords;
      m.contentTitle = b.contentTitle;
      m.linearAdSlotWidth = b.linearAdSlotWidth;
      m.linearAdSlotHeight = b.linearAdSlotHeight;
      m.nonLinearAdSlotWidth = b.nonLinearAdSlotWidth;
      m.nonLinearAdSlotHeight = b.nonLinearAdSlotHeight;
      m.forceNonLinearFullSlot = b.forceNonLinearFullSlot;
      m.liveStreamPrefetchSeconds = b.liveStreamPrefetchSeconds;
      m.vastLoadTimeout = b.vastLoadTimeout;
      m.omidAccessModeRules = b.omidAccessModeRules;
      m.pageUrl = b.pageUrl;
      Object.assign(h, m);
      if (a.j && Hz.isCookiesEnabled()) {
        m = Wz(a.j);
        k = a.B;
        if (0 === k.j) {
          if (m && SE('__gads', m, k.h)) U = !0;
          else if (
            ((U = k.h),
            fd(m, 5) &&
              RE(U) &&
              new PE(U.document).set('GoogleAdServingTest', 'Good', void 0),
            (U = 'Good' === SE('GoogleAdServingTest', m, k.h)))
          )
            (yc = k.h),
              fd(m, 5) &&
                RE(yc) &&
                new PE(yc.document).remove(
                  'GoogleAdServingTest',
                  void 0,
                  void 0
                );
          k.j = U ? 2 : 1;
        }
        h.isBrowserCookieEnabled = 2 === k.j;
        k = m ? SE('__gads', m, a.B.h) : null;
        null !== k && (h.gfpCookieValue = k);
        Ai(Mj) &&
          ((k = m ? SE('__gpi', m, a.B.h) : null),
          null !== k && (h.gfpCookieV2Id = k),
          (m = m ? SE('__gpi_opt_out', m, a.B.h) : null),
          null !== m && (h.gfpCookieV2OptOut = m));
      }
      h.trustTokenStatuses = a.H;
      if ((m = nA(lB(a.j)))) (a.G.espSignals = m), (h.espSignals = m);
      h.isEapLoader = !1;
      m = RD(a.A, f);
      a.J.P(m, 'adsLoader', a.O);
      pz(m, 'adsLoader', 'requestAds', h);
    });
  };
  UI.prototype.getSettings = function () {
    return Hz;
  };
  UI.prototype.contentComplete = function () {
    pz(RD(this.A), 'adsLoader', 'contentComplete');
  };
  var ZI = function (a) {
    return a ? !1 : !KB();
  };
  UI.prototype.O = function (a) {
    var b = a.messageType;
    switch (b) {
      case 'adsLoaded':
        b = a.ra;
        a = a.Zb;
        b = new Z(
          this.l,
          this.h,
          b.adTagUrl || '',
          b.adCuePoints,
          this.C,
          b.isCustomClickTrackingAllowed,
          RD(this.A, a),
          this.j
        );
        this.dispatchEvent(new eF(b, aJ(this, a)));
        break;
      case 'error':
        b = a.ra;
        this.dispatchEvent(new rE(new pE(b), aJ(this, a.Zb)));
        a = { error: b.errorCode, vis: Kh(document) };
        WB.h().report(7, a);
        break;
      case 'cookieUpdate':
        a = a.ra;
        if (null == a) break;
        if (Hz.isCookiesEnabled()) {
          b = new Iz();
          C(b, 5, !0);
          var c = a.gfpCookie;
          c && UE(this.B, '__gads', sm(c), b);
          Ai(Mj) && (c = a.gfpCookieV2) && UE(this.B, '__gpi', sm(c), b);
        }
        bJ(this, a.encryptedSignalBidderIds || []);
        break;
      case 'trackingUrlPinged':
        this.dispatchEvent(new tE(b, null, a.ra));
    }
  };
  var bJ = function (a, b) {
      0 != b.length &&
        (b = nB(
          b.map(function (c) {
            return { jc: c };
          }),
          a.j
        )) &&
        b.forEach(function (c) {
          return c.then(function (d) {
            d && XI(a);
          });
        });
    },
    XI = function (a) {
      var b = nA(lB(a.j));
      b &&
        ((a.G.espSignals = b), pz(RD(a.A), 'adsLoader', 'signalsRefresh', a.G));
    },
    aJ = function (a, b) {
      var c = a.F.get(b);
      a.F.delete(b);
      return c;
    },
    WI = function (a) {
      var b,
        c = (b = void 0 === b ? v : b);
      c = void 0 === c ? v : c;
      (c = !!c.googlefc) ||
        ((c = b.top),
        (c = void 0 === c ? v.top : c),
        (c = hh(c, 'googlefcPresent')));
      var d = void 0 === d ? v : d;
      d = hh(d.top, 'googlefcLoaded');
      b = a.Bd;
      var e = a.Ed,
        f = {};
      return (
        (f.gfcPresent = !1),
        (f.gfcLoaded = d),
        (f.gfcUserConsent = c ? 4 : 0),
        (f.isGdprLoader = a.ee),
        (f.addtlConsent = b ? b.addtlConsent : null),
        (f.gdprApplies = b ? b.gdprApplies : null),
        (f.tcString = b ? b.tcString : null),
        (f.uspString = e ? e.uspString : null),
        f
      );
    },
    $I = function () {
      return new Promise(function (a) {
        NI(function () {
          KI();
          Hz.C = HI[1] || '';
          KI();
          Hz.X = HI[6] || '';
          KI();
          Hz.H = HI[4] || '';
          a();
        });
      });
    },
    YI = function (a) {
      var b = !!document.hasTrustToken,
        c = {};
      WB.h().report(158, ((c.tte = b), c));
      if (!Ai(Kj) || !b) return Promise.resolve();
      var d;
      c = null != (d = ik(new ck(!Vz(a.j), !1, !0))) ? d : Promise.resolve();
      return Promise.race([c, sl()]).then(function (e) {
        var f = window.goog_tt_state_map,
          g,
          h = [];
        (g = null == f ? void 0 : f.get(ak.issuerOrigin)) && h.push(g);
        a.H = h;
        f = {};
        WB.h().report(
          158,
          ((f.Ci = 'timed out' == e),
          (f.status = JSON.stringify(a.H)),
          (f.tte = b),
          f)
        );
      });
    };
  UI.prototype.contentComplete = UI.prototype.contentComplete;
  UI.prototype.getSettings = UI.prototype.getSettings;
  UI.prototype.requestAds = UI.prototype.requestAds;
  UI.prototype.getVersion = UI.prototype.getVersion;
  UI.prototype.destroy = UI.prototype.destroy;
  w('google.ima.AdCuePoints.POSTROLL', -1, window);
  w('google.ima.AdCuePoints.PREROLL', 0, window);
  w('google.ima.AdDisplayContainer', oE, window);
  w('google.ima.AdError.ErrorCode', T, window);
  w('google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED', -1, window);
  w('google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED', -1, window);
  w('google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR', -1, window);
  w('google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE', -1, window);
  w('google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED', -1, window);
  w('google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE', -1, window);
  w('google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED', -1, window);
  w('google.ima.AdError.Type', qE, window);
  w('google.ima.AdErrorEvent.Type', sE, window);
  w('google.ima.AdEvent.Type', uE, window);
  w('google.ima.AdsLoader', UI, window);
  w('google.ima.AdsManagerLoadedEvent.Type', fF, window);
  w('google.ima.CompanionAdSelectionSettings', uz, window);
  w('google.ima.CompanionAdSelectionSettings.CreativeType', rz);
  w('google.ima.CompanionAdSelectionSettings.ResourceType', sz);
  w('google.ima.CompanionAdSelectionSettings.SizeCriteria', tz);
  w(
    'google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED',
    'deprecated-event',
    window
  );
  w('ima.ImaSdkSettings', V, window);
  w('google.ima.settings', Hz, window);
  w('google.ima.ImaSdkSettings.CompanionBackfillMode', {
    ALWAYS: 'always',
    ON_MASTER_AD: 'on_master_ad',
  });
  w('google.ima.ImaSdkSettings.VpaidMode', {
    DISABLED: 0,
    ENABLED: 1,
    INSECURE: 2,
  });
  w('google.ima.AdsRenderingSettings', RC, window);
  w('google.ima.AdsRenderingSettings.AUTO_SCALE', -1, window);
  w('google.ima.AdsRequest', gF, window);
  w('google.ima.VERSION', '3.556.1');
  w('google.ima.OmidAccessMode', {
    LIMITED: 'limited',
    DOMAIN: 'domain',
    FULL: 'full',
  });
  w('google.ima.OmidVerificationVendor', {
    COMSCORE: 7,
    DOUBLEVERIFY: 3,
    GOOGLE: 9,
    INTEGRAL_AD_SCIENCE: 4,
    MEETRICS: 8,
    MOAT: 2,
    NIELSEN: 6,
    PIXELATE: 5,
    OTHER: 1,
    7: 'COMSCORE',
    3: 'DOUBLEVERIFY',
    9: 'GOOGLE',
    4: 'INTEGRAL_AD_SCIENCE',
    8: 'MEETRICS',
    2: 'MOAT',
    6: 'NIELSEN',
    5: 'PIXELATE',
    1: 'OTHER',
  });
  w('google.ima.UiElements', {
    AD_ATTRIBUTION: 'adAttribution',
    COUNTDOWN: 'countdown',
  });
  w('google.ima.ViewMode', { NORMAL: 'normal', FULLSCREEN: 'fullscreen' });
})();
