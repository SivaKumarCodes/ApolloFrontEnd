(function () {
  /*

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
      throw Error('a');
    },
    q = ca(this),
    r = function (a, b) {
      if (b)
        a: {
          var c = q;
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
  r('Symbol', function (a) {
    if (a) return a;
    var b = function (f, g) {
      this.sf = f;
      ba(this, 'description', { configurable: !0, writable: !0, value: g });
    };
    b.prototype.toString = function () {
      return this.sf;
    };
    var c = 'jscomp_symbol_' + ((1e9 * Math.random()) >>> 0) + '_',
      d = 0,
      e = function (f) {
        if (this instanceof e) throw new TypeError('b');
        return new b(c + (f || '') + '_' + d++, f);
      };
    return e;
  });
  r('Symbol.iterator', function (a) {
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
      var d = q[b[c]];
      'function' === typeof d &&
        'function' != typeof d.prototype[a] &&
        ba(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return da(aa(this));
          },
        });
    }
    return a;
  });
  r('Symbol.asyncIterator', function (a) {
    return a ? a : Symbol('Symbol.asyncIterator');
  });
  var da = function (a) {
      a = { next: a };
      a[Symbol.iterator] = function () {
        return this;
      };
      return a;
    },
    u = function (a) {
      var b =
        'undefined' != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : { next: aa(a) };
    },
    ea = function (a) {
      if (!(a instanceof Array)) {
        a = u(a);
        for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
        a = c;
      }
      return a;
    },
    fa = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    ha =
      'function' == typeof Object.assign
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d) for (var e in d) fa(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  r('Object.assign', function (a) {
    return a || ha;
  });
  var ia =
      'function' == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ja;
  if ('function' == typeof Object.setPrototypeOf) ja = Object.setPrototypeOf;
  else {
    var ka;
    a: {
      var la = { a: !0 },
        na = {};
      try {
        na.__proto__ = la;
        ka = na.a;
        break a;
      } catch (a) {}
      ka = !1;
    }
    ja = ka
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError('c`' + a);
          return a;
        }
      : null;
  }
  var oa = ja,
    v = function (a, b) {
      a.prototype = ia(b.prototype);
      a.prototype.constructor = a;
      if (oa) oa(a, b);
      else
        for (var c in b)
          if ('prototype' != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.nh = b.prototype;
    },
    pa = function () {
      this.Lb = !1;
      this.Ra = null;
      this.ee = void 0;
      this.ba = 1;
      this.Aa = this.Ta = 0;
      this.vd = this.Y = null;
    },
    ra = function (a) {
      if (a.Lb) throw new TypeError('e');
      a.Lb = !0;
    };
  pa.prototype.Qb = function (a) {
    this.ee = a;
  };
  pa.prototype.Xb = function (a) {
    this.Y = { ye: a, Qe: !0 };
    this.ba = this.Ta || this.Aa;
  };
  pa.prototype.return = function (a) {
    this.Y = { return: a };
    this.ba = this.Aa;
  };
  pa.prototype.ab = function (a) {
    this.ba = a;
  };
  var ta = function (a, b, c) {
      c = a.vd.splice(c || 0)[0];
      (c = a.Y = a.Y || c)
        ? c.Qe
          ? (a.ba = a.Ta || a.Aa)
          : void 0 != c.ab && a.Aa < c.ab
          ? ((a.ba = c.ab), (a.Y = null))
          : (a.ba = a.Aa)
        : (a.ba = b);
    },
    ua = function (a) {
      this.m = new pa();
      this.Ug = a;
    };
  ua.prototype.Qb = function (a) {
    ra(this.m);
    if (this.m.Ra) return va(this, this.m.Ra.next, a, this.m.Qb);
    this.m.Qb(a);
    return wa(this);
  };
  var xa = function (a, b) {
    ra(a.m);
    var c = a.m.Ra;
    if (c)
      return va(
        a,
        'return' in c
          ? c['return']
          : function (d) {
              return { value: d, done: !0 };
            },
        b,
        a.m.return
      );
    a.m.return(b);
    return wa(a);
  };
  ua.prototype.Xb = function (a) {
    ra(this.m);
    if (this.m.Ra) return va(this, this.m.Ra['throw'], a, this.m.Qb);
    this.m.Xb(a);
    return wa(this);
  };
  var va = function (a, b, c, d) {
      try {
        var e = b.call(a.m.Ra, c);
        if (!(e instanceof Object)) throw new TypeError('d`' + e);
        if (!e.done) return (a.m.Lb = !1), e;
        var f = e.value;
      } catch (g) {
        return (a.m.Ra = null), a.m.Xb(g), wa(a);
      }
      a.m.Ra = null;
      d.call(a.m, f);
      return wa(a);
    },
    wa = function (a) {
      for (; a.m.ba; )
        try {
          var b = a.Ug(a.m);
          if (b) return (a.m.Lb = !1), { value: b.value, done: !1 };
        } catch (c) {
          (a.m.ee = void 0), a.m.Xb(c);
        }
      a.m.Lb = !1;
      if (a.m.Y) {
        b = a.m.Y;
        a.m.Y = null;
        if (b.Qe) throw b.ye;
        return { value: b.return, done: !0 };
      }
      return { value: void 0, done: !0 };
    },
    ya = function (a) {
      this.next = function (b) {
        return a.Qb(b);
      };
      this.throw = function (b) {
        return a.Xb(b);
      };
      this.return = function (b) {
        return xa(a, b);
      };
      this[Symbol.iterator] = function () {
        return this;
      };
    },
    za = function (a) {
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
    Aa = function (a) {
      this[Symbol.asyncIterator] = function () {
        return this;
      };
      this[Symbol.iterator] = function () {
        return a;
      };
      this.next = function (b) {
        return Promise.resolve(a.next(b));
      };
      void 0 !== a['throw'] &&
        (this['throw'] = function (b) {
          return Promise.resolve(a['throw'](b));
        });
      void 0 !== a['return'] &&
        (this['return'] = function (b) {
          return Promise.resolve(a['return'](b));
        });
    },
    x = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
        b[c - a] = arguments[c];
      return b;
    };
  r('Promise', function (a) {
    function b() {
      this.Ja = null;
    }
    function c(g) {
      return g instanceof e
        ? g
        : new e(function (h) {
            h(g);
          });
    }
    if (a) return a;
    b.prototype.ne = function (g) {
      if (null == this.Ja) {
        this.Ja = [];
        var h = this;
        this.oe(function () {
          h.Wf();
        });
      }
      this.Ja.push(g);
    };
    var d = q.setTimeout;
    b.prototype.oe = function (g) {
      d(g, 0);
    };
    b.prototype.Wf = function () {
      for (; this.Ja && this.Ja.length; ) {
        var g = this.Ja;
        this.Ja = [];
        for (var h = 0; h < g.length; ++h) {
          var k = g[h];
          g[h] = null;
          try {
            k();
          } catch (l) {
            this.Ef(l);
          }
        }
      }
      this.Ja = null;
    };
    b.prototype.Ef = function (g) {
      this.oe(function () {
        throw g;
      });
    };
    var e = function (g) {
      this.wb = 0;
      this.Ub = void 0;
      this.pb = [];
      this.Te = !1;
      var h = this.md();
      try {
        g(h.resolve, h.reject);
      } catch (k) {
        h.reject(k);
      }
    };
    e.prototype.md = function () {
      function g(l) {
        return function (p) {
          k || ((k = !0), l.call(h, p));
        };
      }
      var h = this,
        k = !1;
      return { resolve: g(this.bh), reject: g(this.Qd) };
    };
    e.prototype.bh = function (g) {
      if (g === this) this.Qd(new TypeError('f'));
      else if (g instanceof e) this.gh(g);
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
        h ? this.ah(g) : this.Ae(g);
      }
    };
    e.prototype.ah = function (g) {
      var h = void 0;
      try {
        h = g.then;
      } catch (k) {
        this.Qd(k);
        return;
      }
      'function' == typeof h ? this.hh(h, g) : this.Ae(g);
    };
    e.prototype.Qd = function (g) {
      this.hf(2, g);
    };
    e.prototype.Ae = function (g) {
      this.hf(1, g);
    };
    e.prototype.hf = function (g, h) {
      if (0 != this.wb) throw Error('g`' + g + '`' + h + '`' + this.wb);
      this.wb = g;
      this.Ub = h;
      2 === this.wb && this.eh();
      this.Xf();
    };
    e.prototype.eh = function () {
      var g = this;
      d(function () {
        if (g.Lg()) {
          var h = q.console;
          'undefined' !== typeof h && h.error(g.Ub);
        }
      }, 1);
    };
    e.prototype.Lg = function () {
      if (this.Te) return !1;
      var g = q.CustomEvent,
        h = q.Event,
        k = q.dispatchEvent;
      if ('undefined' === typeof k) return !0;
      'function' === typeof g
        ? (g = new g('unhandledrejection', { cancelable: !0 }))
        : 'function' === typeof h
        ? (g = new h('unhandledrejection', { cancelable: !0 }))
        : ((g = q.document.createEvent('CustomEvent')),
          g.initCustomEvent('unhandledrejection', !1, !0, g));
      g.promise = this;
      g.reason = this.Ub;
      return k(g);
    };
    e.prototype.Xf = function () {
      if (null != this.pb) {
        for (var g = 0; g < this.pb.length; ++g) f.ne(this.pb[g]);
        this.pb = null;
      }
    };
    var f = new b();
    e.prototype.gh = function (g) {
      var h = this.md();
      g.lc(h.resolve, h.reject);
    };
    e.prototype.hh = function (g, h) {
      var k = this.md();
      try {
        g.call(h, k.resolve, k.reject);
      } catch (l) {
        k.reject(l);
      }
    };
    e.prototype.then = function (g, h) {
      function k(n, w) {
        return 'function' == typeof n
          ? function (A) {
              try {
                l(n(A));
              } catch (y) {
                p(y);
              }
            }
          : w;
      }
      var l,
        p,
        t = new e(function (n, w) {
          l = n;
          p = w;
        });
      this.lc(k(g, l), k(h, p));
      return t;
    };
    e.prototype.catch = function (g) {
      return this.then(void 0, g);
    };
    e.prototype.lc = function (g, h) {
      function k() {
        switch (l.wb) {
          case 1:
            g(l.Ub);
            break;
          case 2:
            h(l.Ub);
            break;
          default:
            throw Error('h`' + l.wb);
        }
      }
      var l = this;
      null == this.pb ? f.ne(k) : this.pb.push(k);
      this.Te = !0;
    };
    e.resolve = c;
    e.reject = function (g) {
      return new e(function (h, k) {
        k(g);
      });
    };
    e.race = function (g) {
      return new e(function (h, k) {
        for (var l = u(g), p = l.next(); !p.done; p = l.next())
          c(p.value).lc(h, k);
      });
    };
    e.all = function (g) {
      var h = u(g),
        k = h.next();
      return k.done
        ? c([])
        : new e(function (l, p) {
            function t(A) {
              return function (y) {
                n[A] = y;
                w--;
                0 == w && l(n);
              };
            }
            var n = [],
              w = 0;
            do
              n.push(void 0),
                w++,
                c(k.value).lc(t(n.length - 1), p),
                (k = h.next());
            while (!k.done);
          });
    };
    return e;
  });
  r('WeakMap', function (a) {
    function b() {}
    function c(k) {
      var l = typeof k;
      return ('object' === l && null !== k) || 'function' === l;
    }
    function d(k) {
      if (!fa(k, f)) {
        var l = new b();
        ba(k, f, { value: l });
      }
    }
    function e(k) {
      var l = Object[k];
      l &&
        (Object[k] = function (p) {
          if (p instanceof b) return p;
          Object.isExtensible(p) && d(p);
          return l(p);
        });
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1;
        try {
          var k = Object.seal({}),
            l = Object.seal({}),
            p = new a([
              [k, 2],
              [l, 3],
            ]);
          if (2 != p.get(k) || 3 != p.get(l)) return !1;
          p.delete(k);
          p.set(l, 4);
          return !p.has(k) && 4 == p.get(l);
        } catch (t) {
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
        this.Jb = (g += Math.random() + 1).toString();
        if (k) {
          k = u(k);
          for (var l; !(l = k.next()).done; )
            (l = l.value), this.set(l[0], l[1]);
        }
      };
    h.prototype.set = function (k, l) {
      if (!c(k)) throw Error('i');
      d(k);
      if (!fa(k, f)) throw Error('j`' + k);
      k[f][this.Jb] = l;
      return this;
    };
    h.prototype.get = function (k) {
      return c(k) && fa(k, f) ? k[f][this.Jb] : void 0;
    };
    h.prototype.has = function (k) {
      return c(k) && fa(k, f) && fa(k[f], this.Jb);
    };
    h.prototype.delete = function (k) {
      return c(k) && fa(k, f) && fa(k[f], this.Jb) ? delete k[f][this.Jb] : !1;
    };
    return h;
  });
  r('Map', function (a) {
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
            p = l.next();
          if (p.done || p.value[0] != h || 's' != p.value[1]) return !1;
          p = l.next();
          return p.done ||
            4 != p.value[0].x ||
            't' != p.value[1] ||
            !l.next().done
            ? !1
            : !0;
        } catch (t) {
          return !1;
        }
      })()
    )
      return a;
    var b = new WeakMap(),
      c = function (h) {
        this.Fb = {};
        this.Ca = f();
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
      l.list || (l.list = this.Fb[l.id] = []);
      l.L
        ? (l.L.value = k)
        : ((l.L = {
            next: this.Ca,
            Fa: this.Ca.Fa,
            head: this.Ca,
            key: h,
            value: k,
          }),
          l.list.push(l.L),
          (this.Ca.Fa.next = l.L),
          (this.Ca.Fa = l.L),
          this.size++);
      return this;
    };
    c.prototype.delete = function (h) {
      h = d(this, h);
      return h.L && h.list
        ? (h.list.splice(h.index, 1),
          h.list.length || delete this.Fb[h.id],
          (h.L.Fa.next = h.L.next),
          (h.L.next.Fa = h.L.Fa),
          (h.L.head = null),
          this.size--,
          !0)
        : !1;
    };
    c.prototype.clear = function () {
      this.Fb = {};
      this.Ca = this.Ca.Fa = f();
      this.size = 0;
    };
    c.prototype.has = function (h) {
      return !!d(this, h).L;
    };
    c.prototype.get = function (h) {
      return (h = d(this, h).L) && h.value;
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
      for (var l = this.entries(), p; !(p = l.next()).done; )
        (p = p.value), h.call(k, p[1], p[0], this);
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function (h, k) {
        var l = k && typeof k;
        'object' == l || 'function' == l
          ? b.has(k)
            ? (l = b.get(k))
            : ((l = '' + ++g), b.set(k, l))
          : (l = 'p_' + k);
        var p = h.Fb[l];
        if (p && fa(h.Fb, l))
          for (h = 0; h < p.length; h++) {
            var t = p[h];
            if ((k !== k && t.key !== t.key) || k === t.key)
              return { id: l, list: p, index: h, L: t };
          }
        return { id: l, list: p, index: -1, L: void 0 };
      },
      e = function (h, k) {
        var l = h.Ca;
        return da(function () {
          if (l) {
            for (; l.head != h.Ca; ) l = l.Fa;
            for (; l.next != l.head; )
              return (l = l.next), { done: !1, value: k(l) };
            l = null;
          }
          return { done: !0, value: void 0 };
        });
      },
      f = function () {
        var h = {};
        return (h.Fa = h.next = h.head = h);
      },
      g = 0;
    return c;
  });
  r('Number.isFinite', function (a) {
    return a
      ? a
      : function (b) {
          return 'number' !== typeof b
            ? !1
            : !isNaN(b) && Infinity !== b && -Infinity !== b;
        };
  });
  r('Number.isInteger', function (a) {
    return a
      ? a
      : function (b) {
          return Number.isFinite(b) ? b === Math.floor(b) : !1;
        };
  });
  r('Number.isNaN', function (a) {
    return a
      ? a
      : function (b) {
          return 'number' === typeof b && isNaN(b);
        };
  });
  var Ba = function (a, b) {
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
  r('Array.prototype.entries', function (a) {
    return a
      ? a
      : function () {
          return Ba(this, function (b, c) {
            return [b, c];
          });
        };
  });
  r('Array.from', function (a) {
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
  r('Array.prototype.keys', function (a) {
    return a
      ? a
      : function () {
          return Ba(this, function (b) {
            return b;
          });
        };
  });
  r('Array.prototype.values', function (a) {
    return a
      ? a
      : function () {
          return Ba(this, function (b, c) {
            return c;
          });
        };
  });
  r('Array.prototype.fill', function (a) {
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
  var Ca = function (a) {
    return a ? a : Array.prototype.fill;
  };
  r('Int8Array.prototype.fill', Ca);
  r('Uint8Array.prototype.fill', Ca);
  r('Uint8ClampedArray.prototype.fill', Ca);
  r('Int16Array.prototype.fill', Ca);
  r('Uint16Array.prototype.fill', Ca);
  r('Int32Array.prototype.fill', Ca);
  r('Uint32Array.prototype.fill', Ca);
  r('Float32Array.prototype.fill', Ca);
  r('Float64Array.prototype.fill', Ca);
  r('Set', function (a) {
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
      this.ta = new Map();
      if (c) {
        c = u(c);
        for (var d; !(d = c.next()).done; ) this.add(d.value);
      }
      this.size = this.ta.size;
    };
    b.prototype.add = function (c) {
      c = 0 === c ? 0 : c;
      this.ta.set(c, c);
      this.size = this.ta.size;
      return this;
    };
    b.prototype.delete = function (c) {
      c = this.ta.delete(c);
      this.size = this.ta.size;
      return c;
    };
    b.prototype.clear = function () {
      this.ta.clear();
      this.size = 0;
    };
    b.prototype.has = function (c) {
      return this.ta.has(c);
    };
    b.prototype.entries = function () {
      return this.ta.entries();
    };
    b.prototype.values = function () {
      return this.ta.values();
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function (c, d) {
      var e = this;
      this.ta.forEach(function (f) {
        return c.call(d, f, f, e);
      });
    };
    return b;
  });
  r('Object.entries', function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) fa(b, d) && c.push([d, b[d]]);
          return c;
        };
  });
  r('Object.values', function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) fa(b, d) && c.push(b[d]);
          return c;
        };
  });
  r('Object.is', function (a) {
    return a
      ? a
      : function (b, c) {
          return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
        };
  });
  r('Array.prototype.includes', function (a) {
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
  r('String.prototype.includes', function (a) {
    return a
      ? a
      : function (b, c) {
          if (null == this) throw new TypeError('k`includes');
          if (b instanceof RegExp) throw new TypeError('l`includes');
          return -1 !== (this + '').indexOf(b, c || 0);
        };
  });
  r('Array.prototype.flat', function (a) {
    return a
      ? a
      : function (b) {
          b = void 0 === b ? 1 : b;
          var c = [];
          Array.prototype.forEach.call(this, function (d) {
            Array.isArray(d) && 0 < b
              ? ((d = Array.prototype.flat.call(d, b - 1)), c.push.apply(c, d))
              : c.push(d);
          });
          return c;
        };
  });
  var Da = this || self,
    Ea = function (a) {
      var b = typeof a;
      return 'object' != b ? b : a ? (Array.isArray(a) ? 'array' : b) : 'null';
    },
    Ga = function (a) {
      var b = Ea(a);
      return 'array' == b || ('object' == b && 'number' == typeof a.length);
    },
    Ha = function (a) {
      var b = typeof a;
      return ('object' == b && null != a) || 'function' == b;
    },
    Ia = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.nh = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.Nh = function (d, e, f) {
        for (
          var g = Array(arguments.length - 2), h = 2;
          h < arguments.length;
          h++
        )
          g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g);
      };
    };
  var Ja = function (a, b) {
    b = Error.call(this, b ? a + ': ' + b : String(a));
    this.message = b.message;
    'stack' in b && (this.stack = b.stack);
    this.code = a;
    this.__proto__ = Ja.prototype;
    this.name = String(a);
  };
  v(Ja, Error);
  var Ka = function (a) {
    Ja.call(this, 1e3, 'sfr:"' + a + '"');
    this.Dg = a;
    this.__proto__ = Ka.prototype;
  };
  v(Ka, Ja);
  var La = function () {
    Ja.call(this, 1003);
    this.__proto__ = La.prototype;
  };
  v(La, Ja);
  var Na = function () {
    Ja.call(this, 1009);
    this.__proto__ = Na.prototype;
  };
  v(Na, Ja);
  var Oa = function () {
    Ja.call(this, 1007);
    this.__proto__ = La.prototype;
  };
  v(Oa, Ja);
  var Pa = function () {
    Ja.call(this, 1008);
    this.__proto__ = La.prototype;
  };
  v(Pa, Ja);
  var Qa = function () {
    Ja.call(this, 1001);
    this.__proto__ = Qa.prototype;
  };
  v(Qa, Ja);
  var Ra = function (a) {
    Ja.call(this, 1004, String(a));
    this.og = a;
    this.__proto__ = Ra.prototype;
  };
  v(Ra, Ja);
  var Ta = function (a) {
    Ja.call(this, 1010, a);
    this.__proto__ = Sa.prototype;
  };
  v(Ta, Ja);
  var Sa = function (a) {
    Ja.call(this, 1005, a);
    this.__proto__ = Sa.prototype;
  };
  v(Sa, Ja);
  var Va = Symbol('time-origin'),
    Wa = Symbol('date'),
    Xa = function (a, b) {
      this.value = a;
      this.timeline = b;
    },
    Ya = function (a, b) {
      if (b.timeline !== a.timeline) throw new Oa();
      return a.value - b.value;
    };
  Xa.prototype.equals = function (a) {
    return 0 === Ya(this, a);
  };
  Xa.prototype.maximum = function (a) {
    if (a.timeline !== this.timeline) throw new Oa();
    return this.value >= a.value ? this : a;
  };
  Xa.prototype.round = function () {
    return new Xa(Math.round(this.value), this.timeline);
  };
  Xa.prototype.toString = function () {
    return String(this.value);
  };
  function Za(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Za);
    else {
      var c = Error().stack;
      c && (this.stack = c);
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b);
  }
  Ia(Za, Error);
  Za.prototype.name = 'CustomError';
  var $a;
  function ab(a, b) {
    a = a.split('%s');
    for (var c = '', d = a.length - 1, e = 0; e < d; e++)
      c += a[e] + (e < b.length ? b[e] : '%s');
    Za.call(this, c + a[d]);
  }
  Ia(ab, Za);
  ab.prototype.name = 'AssertionError';
  function bb(a, b, c, d) {
    var e = 'Assertion failed';
    if (c) {
      e += ': ' + c;
      var f = d;
    } else a && ((e += ': ' + a), (f = b));
    throw new ab('' + e, f || []);
  }
  var D = function (a, b, c) {
      a || bb('', null, b, Array.prototype.slice.call(arguments, 2));
      return a;
    },
    cb = function (a, b, c) {
      null == a &&
        bb(
          'Expected to exist: %s.',
          [a],
          b,
          Array.prototype.slice.call(arguments, 2)
        );
      return a;
    },
    db = function (a, b) {
      throw new ab(
        'Failure' + (a ? ': ' + a : ''),
        Array.prototype.slice.call(arguments, 1)
      );
    },
    eb = function (a, b, c) {
      'number' !== typeof a &&
        bb(
          'Expected number but got %s: %s.',
          [Ea(a), a],
          b,
          Array.prototype.slice.call(arguments, 2)
        );
    },
    fb = function (a, b, c) {
      'string' !== typeof a &&
        bb(
          'Expected string but got %s: %s.',
          [Ea(a), a],
          b,
          Array.prototype.slice.call(arguments, 2)
        );
    },
    gb = function (a, b, c) {
      'function' !== typeof a &&
        bb(
          'Expected function but got %s: %s.',
          [Ea(a), a],
          b,
          Array.prototype.slice.call(arguments, 2)
        );
    },
    hb = function (a, b, c) {
      Ha(a) ||
        bb(
          'Expected object but got %s: %s.',
          [Ea(a), a],
          b,
          Array.prototype.slice.call(arguments, 2)
        );
    },
    ib = function (a, b, c) {
      Array.isArray(a) ||
        bb(
          'Expected array but got %s: %s.',
          [Ea(a), a],
          b,
          Array.prototype.slice.call(arguments, 2)
        );
    },
    kb = function (a, b, c, d) {
      a instanceof b ||
        bb(
          'Expected instanceof %s but got %s.',
          [jb(b), jb(a)],
          c,
          Array.prototype.slice.call(arguments, 3)
        );
      return a;
    };
  function jb(a) {
    return a instanceof Function
      ? a.displayName || a.name || 'unknown type name'
      : a instanceof Object
      ? a.constructor.displayName ||
        a.constructor.name ||
        Object.prototype.toString.call(a)
      : null === a
      ? 'null'
      : typeof a;
  }
  var nb = function (a, b) {
    return -1 != a.toLowerCase().indexOf(b.toLowerCase());
  };
  function ob() {
    var a = Da.navigator;
    return a && (a = a.userAgent) ? a : '';
  }
  function E(a) {
    return -1 != ob().indexOf(a);
  }
  function pb() {
    return (
      E('Safari') &&
      !(
        qb() ||
        E('Coast') ||
        E('Opera') ||
        E('Edge') ||
        E('Edg/') ||
        E('OPR') ||
        E('Firefox') ||
        E('FxiOS') ||
        E('Silk') ||
        E('Android')
      )
    );
  }
  function qb() {
    return ((E('Chrome') || E('CriOS')) && !E('Edge')) || E('Silk');
  }
  function rb() {
    return (
      E('Android') &&
      !(qb() || E('Firefox') || E('FxiOS') || E('Opera') || E('Silk'))
    );
  }
  var sb = Array.prototype.forEach
      ? function (a, b) {
          D(null != a.length);
          Array.prototype.forEach.call(a, b, void 0);
        }
      : function (a, b) {
          for (
            var c = a.length,
              d = 'string' === typeof a ? a.split('') : a,
              e = 0;
            e < c;
            e++
          )
            e in d && b.call(void 0, d[e], e, a);
        },
    tb = Array.prototype.map
      ? function (a, b) {
          D(null != a.length);
          return Array.prototype.map.call(a, b, void 0);
        }
      : function (a, b) {
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
    ub = Array.prototype.some
      ? function (a, b) {
          D(null != a.length);
          return Array.prototype.some.call(a, b, void 0);
        }
      : function (a, b) {
          for (
            var c = a.length,
              d = 'string' === typeof a ? a.split('') : a,
              e = 0;
            e < c;
            e++
          )
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
          return !1;
        };
  function vb(a) {
    return Array.prototype.concat.apply([], arguments);
  }
  function wb(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function xb(a, b, c) {
    if (!Ga(a) || !Ga(b) || a.length != b.length) return !1;
    var d = a.length;
    c = c || yb;
    for (var e = 0; e < d; e++) if (!c(a[e], b[e])) return !1;
    return !0;
  }
  function yb(a, b) {
    return a === b;
  }
  function zb(a, b) {
    return vb.apply([], tb(a, b));
  }
  var Ab = function (a) {
    Ab[' '](a);
    return a;
  };
  Ab[' '] = function () {};
  var Bb = function (a, b) {
    try {
      return Ab(a[b]), !0;
    } catch (c) {}
    return !1;
  };
  var Cb = E('Opera'),
    Db = E('Trident') || E('MSIE'),
    Fb = E('Edge'),
    Gb =
      E('Gecko') &&
      !(nb(ob(), 'WebKit') && !E('Edge')) &&
      !(E('Trident') || E('MSIE')) &&
      !E('Edge'),
    Hb = nb(ob(), 'WebKit') && !E('Edge'),
    Ib = function () {
      var a = Da.document;
      return a ? a.documentMode : void 0;
    },
    Jb;
  a: {
    var Kb = '',
      Lb = (function () {
        var a = ob();
        if (Gb) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Fb) return /Edge\/([\d\.]+)/.exec(a);
        if (Db) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Hb) return /WebKit\/(\S+)/.exec(a);
        if (Cb) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    Lb && (Kb = Lb ? Lb[1] : '');
    if (Db) {
      var Mb = Ib();
      if (null != Mb && Mb > parseFloat(Kb)) {
        Jb = String(Mb);
        break a;
      }
    }
    Jb = Kb;
  }
  var Nb = Jb,
    Ob;
  if (Da.document && Db) {
    var Pb = Ib();
    Ob = Pb ? Pb : parseInt(Nb, 10) || void 0;
  } else Ob = void 0;
  var Qb = Ob;
  rb();
  qb();
  pb();
  var Rb = {},
    Sb = null,
    Tb = Gb || Hb || 'function' == typeof Da.btoa,
    Ub = function (a) {
      var b;
      D(Ga(a), 'encodeByteArray takes an array as a parameter');
      void 0 === b && (b = 0);
      if (!Sb) {
        Sb = {};
        for (
          var c =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
                ''
              ),
            d = ['+/=', '+/', '-_=', '-_.', '-_'],
            e = 0;
          5 > e;
          e++
        ) {
          var f = c.concat(d[e].split(''));
          Rb[e] = f;
          for (var g = 0; g < f.length; g++) {
            var h = f[g],
              k = Sb[h];
            void 0 === k ? (Sb[h] = g) : D(k === g);
          }
        }
      }
      b = Rb[b];
      c = Array(Math.floor(a.length / 3));
      d = b[64] || '';
      for (e = f = 0; f < a.length - 2; f += 3) {
        k = a[f];
        var l = a[f + 1];
        h = a[f + 2];
        g = b[k >> 2];
        k = b[((k & 3) << 4) | (l >> 4)];
        l = b[((l & 15) << 2) | (h >> 6)];
        h = b[h & 63];
        c[e++] = '' + g + k + l + h;
      }
      g = 0;
      h = d;
      switch (a.length - f) {
        case 2:
          (g = a[f + 1]), (h = b[(g & 15) << 2] || d);
        case 1:
          (a = a[f]),
            (c[e] = '' + b[a >> 2] + b[((a & 3) << 4) | (g >> 4)] + h + d);
      }
      return c.join('');
    };
  var Vb = 'undefined' !== typeof Uint8Array,
    Wb = !Db && 'function' === typeof Da.btoa;
  var Xb =
    'function' === typeof Symbol && 'symbol' === typeof Symbol()
      ? Symbol('INTERNAL_ARRAY_STATE')
      : void 0;
  function Yb(a, b) {
    D((b & 255) == b);
    ib(a, 'state is only maintained on arrays.');
    if (Xb) return (a[Xb] |= b);
    if (void 0 !== a.Xa) return (a.Xa |= b);
    Object.defineProperties(a, {
      Xa: { value: b, configurable: !0, writable: !0, enumerable: !1 },
    });
    return b;
  }
  var Zb = Object.getOwnPropertyDescriptor(Array.prototype, 'wg');
  Object.defineProperties(Array.prototype, {
    wg: {
      get: function () {
        function a(e, f) {
          e & b && c.push(f);
        }
        var b = $b(this),
          c = [];
        a(1, 'IS_REPEATED_FIELD');
        a(2, 'IS_IMMUTABLE_ARRAY');
        a(4, 'IS_API_FORMATTED');
        a(8, 'ONLY_MUTABLE_VALUES');
        a(16, 'MUTABLE_REFERENCES_ARE_OWNED');
        a(32, 'CONSTRUCTED');
        a(64, 'TRANSFERRED');
        a(128, 'IS_FIXED_GROUP');
        var d = c.join(',');
        return Zb ? Zb.get.call(this) + '|' + d : d;
      },
      configurable: !0,
      enumerable: !1,
    },
  });
  function $b(a) {
    ib(a, 'state is only maintained on arrays.');
    a = Xb ? a[Xb] : a.Xa;
    return null == a ? 0 : a;
  }
  function ac(a, b) {
    ib(a, 'state is only maintained on arrays.');
    D((b & 255) == b);
    Xb
      ? (a[Xb] = b)
      : void 0 !== a.Xa
      ? (a.Xa = b)
      : Object.defineProperties(a, {
          Xa: { value: b, configurable: !0, writable: !0, enumerable: !1 },
        });
  }
  function bc(a) {
    Yb(a, 16);
    return a;
  }
  function cc(a, b) {
    ac(b, (a | 0) & -51);
  }
  function dc(a, b) {
    ac(b, (a | 18) & -41);
  }
  var ec = {};
  function fc(a) {
    return (
      null !== a &&
      'object' === typeof a &&
      !Array.isArray(a) &&
      a.constructor === Object
    );
  }
  var gc,
    hc,
    ic = [];
  ac(ic, 23);
  hc = Object.freeze(ic);
  function jc() {}
  function kc(a) {
    var b = a.length;
    (b = b ? a[b - 1] : void 0) && fc(b)
      ? (b.g = 1)
      : ((b = {}), a.push(((b.g = 1), b)));
  }
  function lc(a) {
    return a.displayName || a.name || 'unknown type name';
  }
  var mc = function () {
    throw Error('q');
  };
  if (
    'undefined' != typeof Symbol &&
    'undefined' != typeof Symbol.hasInstance
  ) {
    var nc = function () {
        throw Error('r');
      },
      oc = {};
    Object.defineProperties(
      mc,
      ((oc[Symbol.hasInstance] = {
        value: nc,
        configurable: !1,
        writable: !1,
        enumerable: !1,
      }),
      oc)
    );
    D(
      mc[Symbol.hasInstance] === nc,
      'defineProperties did not work: was it monkey-patched?'
    );
  }
  var pc = function (a) {
      var b = a.sb + a.Sa;
      D(0 <= b && Number.isInteger(b) && 4294967295 > b);
      return a.ja || (a.ja = a.B[b] = {});
    },
    qc = function (a, b, c) {
      return -1 === b
        ? null
        : b >= a.sb
        ? a.ja
          ? a.ja[b]
          : void 0
        : c && a.ja && ((c = a.ja[b]), null != c)
        ? c
        : a.B[b + a.Sa];
    },
    sc = function (a, b, c, d) {
      if ($b(a.B) & 2) throw Error('n');
      return rc(a, b, c, d);
    },
    rc = function (a, b, c, d) {
      a.Ne && (a.Ne = void 0);
      if (b >= a.sb || d) return (pc(a)[b] = c), a;
      a.B[b + a.Sa] = c;
      (c = a.ja) && b in c && delete c[b];
      return a;
    };
  function tc(a, b) {
    if (!a) return a;
    D($b(b.B) & 2 ? !!($b(a.B) & 2) : !0);
    return a;
  }
  var uc = function (a, b, c) {
      var d = qc(a, 3, c);
      var e = $b(a.B),
        f = !1;
      if (
        null == d ||
        'object' !== typeof d ||
        (f = Array.isArray(d)) ||
        d.Pb !== ec
      )
        if (f) {
          var g = (f = $b(d));
          0 === g && (g |= e & 16);
          g |= e & 2;
          g !== f && ac(d, g);
          b = new b(d);
        } else b = void 0;
      else b = d;
      b !== d && null != b && rc(a, 3, b, c);
      return tc(b, a);
    },
    xc = function (a) {
      var b = vc;
      var c = void 0 === c ? !1 : c;
      b = uc(a, b, c);
      if (null == b) return b;
      if (!($b(a.B) & 2)) {
        var d = b;
        if ($b(d.B) & 2) {
          var e = wc(d, !1);
          e.Ne = d;
          d = e;
        }
        d !== b && ((b = d), rc(a, 3, b, c));
      }
      return tc(b, a);
    },
    yc = function (a, b, c, d, e) {
      if ($b(a.B) & 2) throw Error('n');
      if (null == d) var f = hc;
      else (f = []), Yb(f, 1);
      var g = f;
      if (null != d) {
        ib(d);
        f = !!d.length;
        for (var h = 0; h < d.length; h++) {
          var k = d[h],
            l = cb(b);
          if (!(k instanceof l))
            throw Error('p`' + lc(l) + '`' + (k && lc(k.constructor)));
          f = f && !($b(k.B) & 2);
          g[h] = k.B;
        }
        b = g;
        f = (f ? 8 : 0) | 1;
        g = $b(b);
        (g & f) !== f &&
          (Object.isFrozen(b) && (b = Array.prototype.slice.call(b)),
          ac(b, g | f));
        g = b;
        a.Ya || (a.Ya = {});
        a.Ya[c] = d;
      } else a.Ya && (a.Ya[c] = void 0);
      return rc(a, c, g, e);
    },
    Ac = function (a, b) {
      return zc(qc(a, b), 0);
    };
  function zc(a, b) {
    return null == a ? b : a;
  }
  var Bc;
  function Cc(a, b) {
    D(!!($b(b) & 16));
    Bc = b;
    a = new a(b);
    Bc = void 0;
    return a;
  }
  function Dc(a) {
    switch (typeof a) {
      case 'number':
        return isFinite(a) ? a : String(a);
      case 'object':
        if (a)
          if (Array.isArray(a)) {
            if (0 !== ($b(a) & 128))
              return (a = Array.prototype.slice.call(a)), kc(a), a;
          } else if (Vb && null != a && a instanceof Uint8Array) {
            if (Wb) {
              for (var b = ''; 10240 < a.length; )
                (b += String.fromCharCode.apply(null, a.subarray(0, 10240))),
                  (a = a.subarray(10240));
              b += String.fromCharCode.apply(null, a);
              a = btoa(b);
            } else a = Ub(a);
            return a;
          }
    }
    return a;
  }
  function Ec(a, b, c, d) {
    if (null != a) {
      if (Array.isArray(a)) a = Fc(a, b, c, void 0 !== d);
      else if (fc(a)) {
        var e = {},
          f;
        for (f in a) e[f] = Ec(a[f], b, c, d);
        a = e;
      } else a = b(a, d);
      return a;
    }
  }
  function Fc(a, b, c, d) {
    var e = $b(a);
    d = d ? !!(e & 16) : void 0;
    a = Array.prototype.slice.call(a);
    for (var f = 0; f < a.length; f++) a[f] = Ec(a[f], b, c, d);
    c(e, a);
    return a;
  }
  function Gc(a) {
    return a.Pb === ec ? a.toJSON() : Dc(a);
  }
  function Hc(a, b) {
    a & 128 && kc(b);
  }
  function Ic(a, b, c) {
    c = void 0 === c ? dc : c;
    if (null != a) {
      if (Vb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        var d = $b(a);
        if (d & 2) return a;
        if (b && !(d & 32) && (d & 16 || 0 === d)) return ac(a, d | 18), a;
        a = Fc(a, Ic, d & 4 ? dc : c, !0);
        b = $b(a);
        b & 4 && b & 2 && Object.freeze(a);
        return a;
      }
      return a.Pb === ec ? Jc(a) : a;
    }
  }
  function Kc(a, b, c, d, e, f, g) {
    (a = a.Ya && a.Ya[c])
      ? ((d = 0 < a.length ? a[0].constructor : void 0),
        (f = $b(a)),
        f & 2 || ((a = tb(a, Jc)), dc(f, a), Object.freeze(a)),
        yc(b, d, c, a, e))
      : sc(b, c, Ic(d, f, g), e);
  }
  function Jc(a) {
    D(a.Pb === ec);
    if ($b(a.B) & 2) return a;
    a = wc(a, !0);
    Yb(a.B, 18);
    return a;
  }
  function wc(a, b) {
    D(a.Pb === ec);
    var c = a.B,
      d = bc([]),
      e = a.constructor.Eg;
    e && d.push(e);
    e = a.ja;
    if (e) {
      d.length = c.length;
      d.fill(void 0, d.length, c.length);
      var f = {};
      d[d.length - 1] = f;
    }
    0 !== ($b(c) & 128) && kc(d);
    b = b || $b(a.B) & 2 ? dc : cc;
    d = Cc(a.constructor, d);
    a.Oe && (d.Oe = a.Oe.slice());
    f = !!($b(c) & 16);
    for (var g = e ? c.length - 1 : c.length, h = 0; h < g; h++)
      Kc(a, d, h - a.Sa, c[h], !1, f, b);
    if (e)
      for (var k in e)
        (c = e[k]),
          (g = +k),
          D(
            !Number.isNaN(g),
            'should not have non-numeric keys in sparse objects after a constructor is called.'
          ),
          Kc(a, d, g, c, !0, f, b);
    return d;
  }
  if ('undefined' !== typeof Proxy) {
    var Mc = Lc;
    new Proxy(
      {},
      {
        getPrototypeOf: Mc,
        setPrototypeOf: Mc,
        isExtensible: Mc,
        preventExtensions: Mc,
        getOwnPropertyDescriptor: Mc,
        defineProperty: Mc,
        has: Mc,
        get: Mc,
        set: Mc,
        deleteProperty: Mc,
        apply: Mc,
        construct: Mc,
      }
    );
  }
  function Lc() {
    throw Error('s');
    throw Error();
  }
  var Nc = function (a, b, c, d) {
    kb(this, Nc, 'The message constructor should only be used by subclasses');
    D(
      this.constructor !== Nc,
      'Message is an abstract class and cannot be directly constructed'
    );
    null == a && (a = Bc);
    Bc = void 0;
    var e = this.constructor.Eg;
    if (null == a) {
      a = e ? [e] : [];
      var f = 48;
      var g = !0;
      d && (f |= 128);
      ac(a, f);
    } else {
      if (!Array.isArray(a))
        throw Error('t`' + JSON.stringify(a) + '`' + Ea(a));
      if (Object.isFrozen(a) || !Object.isExtensible(a) || Object.isSealed(a))
        throw Error('u');
      if (e && e !== a[0])
        throw Error('v`' + e + '`' + JSON.stringify(a[0]) + '`' + Ea(a[0]));
      f = Yb(a, 0) | 32;
      g = 0 !== (16 & f);
      if (d) {
        if (!(f & 128) && 0 < a.length) {
          var h = a[a.length - 1];
          if (fc(h) && 'g' in h) {
            f |= 128;
            delete h.g;
            var k = !0,
              l;
            for (l in h) {
              k = !1;
              break;
            }
            k && a.pop();
          } else throw Error('w');
        }
      } else if (128 & f) throw Error();
      ac(a, f);
    }
    this.Sa = e ? 0 : -1;
    this.Ya = void 0;
    this.B = a;
    this.preventPassingToStructuredClone = jc;
    a: {
      f = this.B.length;
      e = f - 1;
      if (f && ((f = this.B[e]), fc(f))) {
        this.ja = f;
        this.sb = e - this.Sa;
        break a;
      }
      void 0 !== b && -1 < b
        ? ((this.sb = Math.max(b, e + 1 - this.Sa)), (this.ja = void 0))
        : (this.sb = Number.MAX_VALUE);
    }
    if (!d && this.ja && 'g' in this.ja) throw Error('x');
    if (c) {
      b = g && !0;
      d = this.sb;
      var p;
      for (g = 0; g < c.length; g++)
        (e = c[g]),
          e < d
            ? ((e += this.Sa), (f = a[e]) ? Rc(f, b) : (a[e] = hc))
            : (p || (p = pc(this)), (f = p[e]) ? Rc(f, b) : (p[e] = hc));
    }
    D(!!($b(this.B) & 32));
  };
  m = Nc.prototype;
  m.toJSON = function () {
    var a = this.B;
    gc || (ib(a), (a = Fc(a, Gc, Hc)));
    return a;
  };
  m.vb = function () {
    gc = !0;
    try {
      return JSON.stringify(this.toJSON(), Sc);
    } finally {
      gc = !1;
    }
  };
  m.getExtension = function (a) {
    kb(this, a.ag);
    var b = kb(this, Nc);
    return a.od ? a.xd(b, a.od, a.ud, !0) : a.xd(b, a.ud, a.defaultValue, !0);
  };
  m.hasExtension = function (a) {
    D(!a.ug, "repeated extensions don't support hasExtension");
    D(!a.ug, "repeated extensions don't support getExtensionOrUndefined");
    kb(this, a.ag);
    var b = kb(this, Nc);
    a = a.od ? a.xd(b, a.od, a.ud, !0) : a.xd(b, a.ud, null, !0);
    return void 0 !== (null === a ? void 0 : a);
  };
  m.clone = function () {
    var a = kb(this, Nc);
    return wc(a, !1);
  };
  function Rc(a, b) {
    if (Array.isArray(a)) {
      var c = $b(a),
        d = 1;
      !b || c & 2 || (d |= 16);
      (c & d) !== d && ac(a, c | d);
    }
  }
  m.Pb = ec;
  m.toString = function () {
    return this.B.toString();
  };
  function Sc(a, b) {
    return Dc(b);
  }
  D(!0);
  function Tc(a, b) {
    b = void 0 === b ? new Set() : b;
    if (b.has(a)) return '(Recursive reference)';
    switch (typeof a) {
      case 'object':
        if (a) {
          var c = Object.getPrototypeOf(a);
          switch (c) {
            case Map.prototype:
            case Set.prototype:
            case Array.prototype:
              b.add(a);
              var d =
                '[' +
                Array.from(a, function (e) {
                  return Tc(e, b);
                }).join(', ') +
                ']';
              b.delete(a);
              c !== Array.prototype && (d = Uc(c.constructor) + '(' + d + ')');
              return d;
            case Object.prototype:
              return (
                b.add(a),
                (c =
                  '{' +
                  Object.entries(a)
                    .map(function (e) {
                      var f = u(e);
                      e = f.next().value;
                      f = f.next().value;
                      return e + ': ' + Tc(f, b);
                    })
                    .join(', ') +
                  '}'),
                b.delete(a),
                c
              );
            default:
              return (
                (d = 'Object'),
                c && c.constructor && (d = Uc(c.constructor)),
                'function' === typeof a.toString &&
                a.toString !== Object.prototype.toString
                  ? d + '(' + String(a) + ')'
                  : '(object ' + d + ')'
              );
          }
        }
        break;
      case 'function':
        return 'function ' + Uc(a);
      case 'number':
        if (!Number.isFinite(a)) return String(a);
        break;
      case 'bigint':
        return a.toString(10) + 'n';
      case 'symbol':
        return a.toString();
    }
    return JSON.stringify(a);
  }
  function Uc(a) {
    var b = a.name;
    b ||
      (b = (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : '(Anonymous)');
    return b;
  }
  function Vc(a, b) {
    a.De =
      'function' === typeof b
        ? b
        : function () {
            return b;
          };
    return a;
  }
  var Wc = void 0;
  var Xc = Nc;
  function Yc(a) {
    return function (b) {
      gb(a);
      if (null == b || '' == b) b = kb(new a(), Nc);
      else {
        fb(b);
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error('y`' + Ea(b) + '`' + b);
        b = Cc(a, bc(b));
      }
      return b;
    };
  }
  var Zc = function (a) {
    Xc.call(this, a);
  };
  v(Zc, Xc);
  var $c = Yc(Zc);
  var ad = function () {
    return (
      Math.floor(2147483648 * Math.random()).toString(36) +
      Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    );
  };
  var bd = !Db && !pb(),
    cd = function (a, b) {
      if (/-[a-z]/.test(b)) return null;
      if (bd && a.dataset) {
        if (rb() && !(b in a.dataset)) return null;
        a = a.dataset[b];
        return void 0 === a ? null : a;
      }
      return a.getAttribute(
        'data-' +
          String(b)
            .replace(/([A-Z])/g, '-$1')
            .toLowerCase()
      );
    }; /*


 Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
  var dd = !1,
    ed = {
      set ra(a) {
        a ? console.warn('A`' + Error().stack) : dd && console.log('B');
        dd = a;
      },
      get ra() {
        return dd;
      },
    };
  var fd =
    ('function' === typeof Symbol && Symbol.observable) || '@@observable';
  function gd(a) {
    setTimeout(function () {
      throw a;
    }, 0);
  }
  var hd = {
    closed: !0,
    next: function () {},
    error: function (a) {
      if (ed.ra) throw a;
      gd(a);
    },
    complete: function () {},
  };
  var id = (function () {
    function a(b) {
      this.message = b
        ? b.length +
          ' errors occurred during unsubscription:\n' +
          b
            .map(function (c, d) {
              return d + 1 + ') ' + c.toString();
            })
            .join('\n  ')
        : '';
      this.name = 'UnsubscriptionError';
      this.errors = b;
      return this;
    }
    a.prototype = Object.create(Error.prototype);
    return a;
  })();
  var jd =
    Array.isArray ||
    function (a) {
      return a && 'number' === typeof a.length;
    };
  function kd(a) {
    return 'function' === typeof a;
  }
  function ld(a) {
    return null !== a && 'object' === typeof a;
  }
  var H = function (a) {
    this.closed = !1;
    this.jb = this.yb = null;
    a && ((this.uf = !0), (this.ya = a));
  };
  H.prototype.unsubscribe = function () {
    if (!this.closed) {
      var a = this.yb,
        b = this.uf,
        c = this.ya,
        d = this.jb;
      this.closed = !0;
      this.jb = this.yb = null;
      if (a instanceof H) a.remove(this);
      else if (null !== a) for (var e = 0; e < a.length; ++e) a[e].remove(this);
      if (kd(c)) {
        b && (this.ya = void 0);
        try {
          c.call(this);
        } catch (k) {
          var f = k instanceof id ? md(k.errors) : [k];
        }
      }
      if (jd(d)) {
        e = -1;
        for (var g = d.length; ++e < g; ) {
          var h = d[e];
          if (ld(h))
            try {
              h.unsubscribe();
            } catch (k) {
              (f = f || []),
                k instanceof id ? (f = f.concat(md(k.errors))) : f.push(k);
            }
        }
      }
      if (f) throw new id(f);
    }
  };
  H.prototype.add = function (a) {
    var b = a;
    if (!a) return H.EMPTY;
    switch (typeof a) {
      case 'function':
        b = new H(a);
      case 'object':
        if (b === this || b.closed || 'function' !== typeof b.unsubscribe)
          return b;
        if (this.closed) return b.unsubscribe(), b;
        b instanceof H || ((a = b), (b = new H()), (b.jb = [a]));
        break;
      default:
        throw Error('C`' + a);
    }
    var c = b.yb;
    if (null === c) b.yb = this;
    else if (c instanceof H) {
      if (c === this) return b;
      b.yb = [c, this];
    } else if (-1 === c.indexOf(this)) c.push(this);
    else return b;
    a = this.jb;
    null === a ? (this.jb = [b]) : a.push(b);
    return b;
  };
  H.prototype.remove = function (a) {
    var b = this.jb;
    b && ((a = b.indexOf(a)), -1 !== a && b.splice(a, 1));
  };
  var nd = new H();
  nd.closed = !0;
  H.EMPTY = nd;
  function od(a) {
    return (
      a instanceof H ||
      (a &&
        'closed' in a &&
        'function' === typeof a.remove &&
        'function' === typeof a.add &&
        'function' === typeof a.unsubscribe)
    );
  }
  function md(a) {
    return a.reduce(function (b, c) {
      return b.concat(c instanceof id ? c.errors : c);
    }, []);
  }
  var I = function (a, b, c) {
    H.call(this);
    this.Nc = null;
    this.C = this.ea = this.Mc = !1;
    switch (arguments.length) {
      case 0:
        this.destination = hd;
        break;
      case 1:
        if (!a) {
          this.destination = hd;
          break;
        }
        if ('object' === typeof a) {
          a instanceof I
            ? ((this.ea = a.ea), (this.destination = a), a.add(this))
            : ((this.ea = !0), (this.destination = new pd(this, a)));
          break;
        }
      default:
        (this.ea = !0), (this.destination = new pd(this, a, b, c));
    }
  };
  v(I, H);
  I.EMPTY = H.EMPTY;
  I.create = function (a, b, c) {
    a = new I(a, b, c);
    a.ea = !1;
    return a;
  };
  m = I.prototype;
  m.next = function (a) {
    this.C || this.o(a);
  };
  m.error = function (a) {
    this.C || ((this.C = !0), this.T(a));
  };
  m.complete = function () {
    this.C || ((this.C = !0), this.A());
  };
  m.unsubscribe = function () {
    this.closed || ((this.C = !0), H.prototype.unsubscribe.call(this));
  };
  m.o = function (a) {
    this.destination.next(a);
  };
  m.T = function (a) {
    this.destination.error(a);
    this.unsubscribe();
  };
  m.A = function () {
    this.destination.complete();
    this.unsubscribe();
  };
  var pd = function (a, b, c, d) {
    I.call(this);
    this.zb = a;
    var e = this;
    if (kd(b)) var f = b;
    else
      b &&
        ((f = b.next),
        (c = b.error),
        (d = b.complete),
        b !== hd &&
          ((e = Object.create(b)),
          od(b) && b.add(this.unsubscribe.bind(this)),
          (e.unsubscribe = this.unsubscribe.bind(this))));
    this.xa = e;
    this.o = f;
    this.T = c;
    this.A = d;
  };
  v(pd, I);
  pd.EMPTY = I.EMPTY;
  pd.create = I.create;
  m = pd.prototype;
  m.next = function (a) {
    if (!this.C && this.o) {
      var b = this.zb;
      ed.ra && b.ea
        ? this.Vc(b, this.o, a) && this.unsubscribe()
        : this.Wc(this.o, a);
    }
  };
  m.error = function (a) {
    if (!this.C) {
      var b = this.zb,
        c = ed.ra;
      if (this.T)
        c && b.ea ? this.Vc(b, this.T, a) : this.Wc(this.T, a),
          this.unsubscribe();
      else if (b.ea) c ? ((b.Nc = a), (b.Mc = !0)) : gd(a), this.unsubscribe();
      else {
        this.unsubscribe();
        if (c) throw a;
        gd(a);
      }
    }
  };
  m.complete = function () {
    var a = this;
    if (!this.C) {
      var b = this.zb;
      if (this.A) {
        var c = function () {
          return a.A.call(a.xa);
        };
        ed.ra && b.ea ? this.Vc(b, c) : this.Wc(c);
      }
      this.unsubscribe();
    }
  };
  m.Wc = function (a, b) {
    try {
      a.call(this.xa, b);
    } catch (c) {
      this.unsubscribe();
      if (ed.ra) throw c;
      gd(c);
    }
  };
  m.Vc = function (a, b, c) {
    if (!ed.ra) throw Error('D');
    try {
      b.call(this.xa, c);
    } catch (d) {
      return ed.ra ? ((a.Nc = d), (a.Mc = !0)) : gd(d), !0;
    }
    return !1;
  };
  m.ya = function () {
    var a = this.zb;
    this.zb = this.xa = null;
    a.unsubscribe();
  };
  function qd(a) {
    return a;
  }
  function J() {
    return rd(x.apply(0, arguments));
  }
  function rd(a) {
    return 0 === a.length
      ? qd
      : 1 === a.length
      ? a[0]
      : function (b) {
          return a.reduce(function (c, d) {
            return d(c);
          }, b);
        };
  }
  function sd(a) {
    return (
      a &&
      'function' === typeof a.next &&
      'function' === typeof a.error &&
      'function' === typeof a.complete
    );
  }
  var td = function (a) {
    I.call(this);
    this.destination = a;
  };
  v(td, I);
  td.EMPTY = I.EMPTY;
  td.create = I.create;
  var K = function (a) {
    a && (this.X = a);
  };
  m = K.prototype;
  m.ob = function (a) {
    var b = new K();
    b.source = this;
    b.operator = a;
    return b;
  };
  m.subscribe = function (a, b, c) {
    var d = this.operator;
    a: {
      if (a) {
        if (a instanceof I || (sd(a) && od(a))) break a;
        if (sd(a)) {
          a = new td(a);
          break a;
        }
      }
      a = a || b || c ? new I(a, b, c) : new I(hd);
    }
    d
      ? a.add(d.call(a, this.source))
      : a.add(this.source || (ed.ra && !a.ea) ? this.X(a) : this.bd(a));
    if (ed.ra && a.ea && ((a.ea = !1), a.Mc)) throw a.Nc;
    return a;
  };
  m.bd = function (a) {
    try {
      return this.X(a);
    } catch (e) {
      ed.ra && ((a.Mc = !0), (a.Nc = e));
      var b;
      a: {
        for (b = a; b; ) {
          var c = b.destination,
            d = b.C;
          if (b.closed || d) {
            b = !1;
            break a;
          }
          b = c && c instanceof I ? c : null;
        }
        b = !0;
      }
      b ? a.error(e) : console.warn(e);
    }
  };
  m.forEach = function (a, b) {
    var c = this;
    b = ud(b);
    return new b(function (d, e) {
      var f = c.subscribe(
        function (g) {
          try {
            a(g);
          } catch (h) {
            e(h), f && f.unsubscribe();
          }
        },
        e,
        d
      );
    });
  };
  m.X = function (a) {
    var b = this.source;
    return b && b.subscribe(a);
  };
  K.prototype[fd] = function () {
    return this;
  };
  K.prototype.h = function () {
    var a = x.apply(0, arguments);
    return 0 === a.length ? this : rd(a)(this);
  };
  K.create = function (a) {
    return new K(a);
  };
  function ud(a) {
    a || (a = Promise);
    if (!a) throw Error('E');
    return a;
  }
  var vd =
    'function' === typeof Symbol && Symbol.iterator
      ? Symbol.iterator
      : '@@iterator';
  var wd = function (a) {
    return a && 'number' === typeof a.length && 'function' !== typeof a;
  };
  function xd(a) {
    return (
      !!a && 'function' !== typeof a.subscribe && 'function' === typeof a.then
    );
  }
  var yd = function (a) {
    return function (b) {
      for (var c = 0, d = a.length; c < d && !b.closed; c++) b.next(a[c]);
      b.complete();
    };
  };
  function zd(a) {
    return function (b) {
      Ad(a, b).catch(function (c) {
        return b.error(c);
      });
    };
  }
  function Ad(a, b) {
    var c, d, e, f, g, h;
    return za(
      new ya(
        new ua(function (k) {
          switch (k.ba) {
            case 1:
              k.Ta = 2;
              k.Aa = 3;
              var l = a[Symbol.asyncIterator];
              f = void 0 !== l ? l.call(a) : new Aa(u(a));
            case 5:
              return (l = f.next()), (k.ba = 8), { value: l };
            case 8:
              d = k.ee;
              if (d.done) {
                k.ab(3);
                break;
              }
              g = d.value;
              b.next(g);
              k.ab(5);
              break;
            case 3:
              k.vd = [k.Y];
              k.Ta = 0;
              k.Aa = 0;
              k.Ta = 0;
              k.Aa = 9;
              if (!d || d.done || !(e = f.return)) {
                k.ab(9);
                break;
              }
              l = e.call(f);
              k.ba = 9;
              return { value: l };
            case 9:
              k.vd[1] = k.Y;
              k.Ta = 0;
              k.Aa = 0;
              if (c) throw c.error;
              ta(k, 10, 1);
              break;
            case 10:
              ta(k, 4);
              break;
            case 2:
              k.Ta = 0;
              l = k.Y.ye;
              k.Y = null;
              h = l;
              c = { error: h };
              k.ab(3);
              break;
            case 4:
              b.complete(), (k.ba = 0);
          }
        })
      )
    );
  }
  var Bd = function (a) {
    return function (b) {
      var c = a[vd]();
      do {
        var d = void 0;
        try {
          d = c.next();
        } catch (e) {
          b.error(e);
          return;
        }
        if (d.done) {
          b.complete();
          break;
        }
        b.next(d.value);
        if (b.closed) break;
      } while (1);
      'function' === typeof c.return &&
        b.add(function () {
          c.return && c.return();
        });
      return b;
    };
  };
  var Cd = function (a) {
    return function (b) {
      var c = a[fd]();
      if ('function' !== typeof c.subscribe) throw new TypeError('F');
      return c.subscribe(b);
    };
  };
  var Dd = function (a) {
    return function (b) {
      a.then(
        function (c) {
          b.closed || (b.next(c), b.complete());
        },
        function (c) {
          return b.error(c);
        }
      ).then(null, gd);
      return b;
    };
  };
  var Ed = function (a) {
    if (a && 'function' === typeof a[fd]) return Cd(a);
    if (wd(a)) return yd(a);
    if (xd(a)) return Dd(a);
    if (a && 'function' === typeof a[vd]) return Bd(a);
    if (
      Symbol &&
      Symbol.asyncIterator &&
      a &&
      'function' === typeof a[Symbol.asyncIterator]
    )
      return zd(a);
    throw new TypeError('G`' + (ld(a) ? 'an invalid object' : "'" + a + "'"));
  };
  var Fd = function (a) {
    I.call(this);
    this.parent = a;
  };
  v(Fd, I);
  Fd.EMPTY = I.EMPTY;
  Fd.create = I.create;
  Fd.prototype.o = function (a) {
    this.parent.ua(a);
  };
  Fd.prototype.T = function (a) {
    this.parent.Pa(a);
    this.unsubscribe();
  };
  Fd.prototype.A = function () {
    this.parent.P();
    this.unsubscribe();
  };
  var Gd = function (a, b, c) {
    I.call(this);
    this.parent = a;
    this.bf = b;
    this.Tg = c;
  };
  v(Gd, I);
  Gd.EMPTY = I.EMPTY;
  Gd.create = I.create;
  Gd.prototype.o = function (a) {
    this.parent.ua(this.bf, a, this.Tg, this);
  };
  Gd.prototype.T = function (a) {
    this.parent.Pa(a);
    this.unsubscribe();
  };
  Gd.prototype.A = function () {
    this.parent.P(this);
    this.unsubscribe();
  };
  var L = function () {
    I.apply(this, arguments);
  };
  v(L, I);
  L.EMPTY = I.EMPTY;
  L.create = I.create;
  L.prototype.ua = function (a) {
    this.destination.next(a);
  };
  L.prototype.Pa = function (a) {
    this.destination.error(a);
  };
  L.prototype.P = function () {
    this.destination.complete();
  };
  var M = function () {
    I.apply(this, arguments);
  };
  v(M, I);
  M.EMPTY = I.EMPTY;
  M.create = I.create;
  M.prototype.ua = function (a, b) {
    this.destination.next(b);
  };
  M.prototype.Pa = function (a) {
    this.destination.error(a);
  };
  M.prototype.P = function () {
    this.destination.complete();
  };
  function Hd(a, b) {
    if (!b.closed) return a instanceof K ? a.subscribe(b) : Ed(a)(b);
  }
  function O(a, b) {
    if (a && 'function' === typeof a.ob) return a.ob(b);
    throw new TypeError('H');
  }
  var Id = function () {
    H.call(this);
  };
  v(Id, H);
  Id.EMPTY = H.EMPTY;
  Id.prototype.u = function () {
    return this;
  };
  var Kd = function (a, b) {
      var c = x.apply(2, arguments);
      return (null == Jd ? 0 : Jd.setInterval)
        ? Jd.setInterval.apply(Jd, [a, b].concat(ea(c)))
        : setInterval.apply(null, [a, b].concat(ea(c)));
    },
    Jd = void 0;
  var Ld = function (a, b) {
    H.call(this);
    this.da = a;
    this.Uc = b;
    this.pending = !1;
  };
  v(Ld, Id);
  Ld.EMPTY = Id.EMPTY;
  m = Ld.prototype;
  m.u = function (a, b) {
    b = void 0 === b ? 0 : b;
    if (this.closed) return this;
    this.state = a;
    a = this.id;
    var c = this.da;
    null != a && (this.id = this.Sb(c, a, b));
    this.pending = !0;
    this.delay = b;
    this.id = this.id || this.Tb(c, this.id, b);
    return this;
  };
  m.Tb = function (a, b, c) {
    return Kd(a.flush.bind(a, this), void 0 === c ? 0 : c);
  };
  m.Sb = function (a, b, c) {
    c = void 0 === c ? 0 : c;
    if (null !== c && this.delay === c && !1 === this.pending) return b;
    ((null == Jd ? void 0 : Jd.clearInterval) || clearInterval)(b);
  };
  m.execute = function (a, b) {
    if (this.closed) return Error('I');
    this.pending = !1;
    if ((a = this.ge(a, b))) return a;
    !1 === this.pending &&
      null != this.id &&
      (this.id = this.Sb(this.da, this.id, null));
  };
  m.ge = function (a) {
    var b = !1,
      c = void 0;
    try {
      this.Uc(a);
    } catch (d) {
      (b = !0), (c = (!!d && d) || Error(d));
    }
    if (b) return this.unsubscribe(), c;
  };
  m.ya = function () {
    var a = this.id,
      b = this.da,
      c = b.actions,
      d = c.indexOf(this);
    this.state = this.Uc = null;
    this.pending = !1;
    this.da = null;
    -1 !== d && c.splice(d, 1);
    null != a && (this.id = this.Sb(b, a, null));
    this.delay = null;
  };
  var Md = {
    now: function () {
      return (Md.Sf || Date).now();
    },
    Sf: void 0,
  };
  var Od = function (a, b) {
    b = void 0 === b ? Nd : b;
    this.tf = a;
    this.now = b;
  };
  Od.prototype.u = function (a, b, c) {
    b = void 0 === b ? 0 : b;
    return new this.tf(this, a).u(c, b);
  };
  var Nd = Md.now;
  var Pd = function (a, b) {
    b = void 0 === b ? Nd : b;
    Od.call(this, a, b);
    this.actions = [];
    this.active = !1;
    this.Lc = void 0;
  };
  v(Pd, Od);
  Pd.prototype.flush = function (a) {
    var b = this.actions;
    if (this.active) b.push(a);
    else {
      var c;
      this.active = !0;
      do if ((c = a.execute(a.state, a.delay))) break;
      while ((a = b.shift()));
      this.active = !1;
      if (c) {
        for (; (a = b.shift()); ) a.unsubscribe();
        throw c;
      }
    }
  };
  function Qd(a) {
    return a && 'function' === typeof a.u;
  }
  function Rd(a, b) {
    return new K(function (c) {
      var d = new H(),
        e = 0;
      d.add(
        b.u(function () {
          e === a.length
            ? c.complete()
            : (c.next(a[e++]), c.closed || d.add(this.u()));
        })
      );
      return d;
    });
  }
  function Sd(a, b) {
    if (!a) throw Error('J');
    return new K(function (c) {
      var d = new H();
      d.add(
        b.u(function () {
          var e = a[Symbol.asyncIterator]();
          d.add(
            b.u(function () {
              var f = this;
              e.next().then(function (g) {
                g.done ? c.complete() : (c.next(g.value), f.u());
              });
            })
          );
        })
      );
      return d;
    });
  }
  function Td(a, b) {
    if (!a) throw Error('J');
    return new K(function (c) {
      var d = new H(),
        e;
      d.add(function () {
        e && 'function' === typeof e.return && e.return();
      });
      d.add(
        b.u(function () {
          e = a[vd]();
          d.add(
            b.u(function () {
              if (!c.closed) {
                try {
                  var f = e.next();
                  var g = f.value;
                  var h = f.done;
                } catch (k) {
                  c.error(k);
                  return;
                }
                h ? c.complete() : (c.next(g), this.u());
              }
            })
          );
        })
      );
      return d;
    });
  }
  function Ud(a, b) {
    return new K(function (c) {
      var d = new H();
      d.add(
        b.u(function () {
          var e = a[fd]();
          d.add(
            e.subscribe({
              next: function (f) {
                d.add(
                  b.u(function () {
                    return c.next(f);
                  })
                );
              },
              error: function (f) {
                d.add(
                  b.u(function () {
                    return c.error(f);
                  })
                );
              },
              complete: function () {
                d.add(
                  b.u(function () {
                    return c.complete();
                  })
                );
              },
            })
          );
        })
      );
      return d;
    });
  }
  function Vd(a, b) {
    return new K(function (c) {
      var d = new H();
      d.add(
        b.u(function () {
          return a.then(
            function (e) {
              d.add(
                b.u(function () {
                  c.next(e);
                  d.add(
                    b.u(function () {
                      return c.complete();
                    })
                  );
                })
              );
            },
            function (e) {
              d.add(
                b.u(function () {
                  return c.error(e);
                })
              );
            }
          );
        })
      );
      return d;
    });
  }
  function Wd(a) {
    var b = Xd;
    if (null != a) {
      if (a && 'function' === typeof a[fd]) return Ud(a, b);
      if (xd(a)) return Vd(a, b);
      if (wd(a)) return Rd(a, b);
      if ((a && 'function' === typeof a[vd]) || 'string' === typeof a)
        return Td(a, b);
      if (
        Symbol &&
        Symbol.asyncIterator &&
        'function' === typeof a[Symbol.asyncIterator]
      )
        return Sd(a, b);
    }
    throw new TypeError('K`' + ((null !== a && typeof a) || a));
  }
  function Yd(a) {
    return a instanceof K ? a : new K(Ed(a));
  }
  function Zd(a) {
    return function (b) {
      return O(b, function (c) {
        var d = this,
          e = new H(),
          f = null,
          g = !1,
          h;
        f = c.subscribe({
          next: function (k) {
            return d.next(k);
          },
          error: function (k) {
            try {
              h = Yd(a(k, Zd(a)(c)));
            } catch (l) {
              d.error(l);
            }
            h &&
              (f
                ? (f.unsubscribe(), (f = null), e.add(h.subscribe(d)))
                : (g = !0));
          },
          complete: function () {
            return d.complete();
          },
        });
        g ? (f.unsubscribe(), (f = null), e.add(h.subscribe(d))) : e.add(f);
        return e;
      });
    };
  }
  function $d(a, b) {
    return b ? Rd(a, b) : new K(yd(a));
  }
  var ae = {};
  function P() {
    var a = x.apply(0, arguments),
      b = void 0,
      c = void 0,
      d = void 0;
    Qd(a[a.length - 1]) && (c = a.pop());
    'function' === typeof a[a.length - 1] && (b = a.pop());
    if (1 === a.length) {
      var e = a[0];
      jd(e) && (a = e);
      ld(e) &&
        Object.getPrototypeOf(e) === Object.prototype &&
        ((d = Object.keys(e)),
        (a = d.map(function (f) {
          return e[f];
        })));
    }
    return O($d(a, c), new be(b, d));
  }
  var be = function (a, b) {
    this.Kc = a;
    this.keys = b;
  };
  be.prototype.call = function (a, b) {
    return b.subscribe(new ce(a, this.Kc, this.keys));
  };
  var ce = function (a, b, c) {
    M.call(this, a);
    this.Kc = b;
    this.keys = c;
    this.active = 0;
    this.values = [];
    this.Qa = [];
  };
  v(ce, M);
  ce.EMPTY = M.EMPTY;
  ce.create = M.create;
  m = ce.prototype;
  m.o = function (a) {
    this.values.push(ae);
    this.Qa.push(a);
  };
  m.A = function () {
    var a = this.Qa,
      b = a.length;
    if (0 === b) this.destination.complete();
    else {
      this.hb = this.active = b;
      for (var c = 0; c < b; c++) this.add(Hd(a[c], new Gd(this, null, c)));
    }
  };
  m.P = function () {
    0 === --this.active && this.destination.complete();
  };
  m.ua = function (a, b, c) {
    var d = this.values,
      e = d[c];
    e = this.hb ? (e === ae ? --this.hb : this.hb) : 0;
    d[c] = b;
    0 === e &&
      (this.Kc
        ? this.wf(d)
        : this.destination.next(
            this.keys
              ? this.keys.reduce(function (f, g, h) {
                  return (f[g] = d[h]), f;
                }, {})
              : d.slice()
          ));
  };
  m.wf = function (a) {
    try {
      var b = this.Kc.apply(this, a);
    } catch (c) {
      this.destination.error(c);
      return;
    }
    this.destination.next(b);
  };
  function de() {
    var a = x.apply(0, arguments),
      b = void 0;
    'function' === typeof a[a.length - 1] && (b = a.pop());
    1 === a.length && jd(a[0]) && (a = a[0].slice());
    return function (c) {
      var d = Yd([c].concat(ea(a))),
        e = new be(b);
      if (c && 'function' === typeof c.ob) c = c.ob.call(d, e);
      else throw new TypeError('H');
      return c;
    };
  }
  function ee() {
    return de.apply(null, ea(x.apply(0, arguments)));
  }
  function Q() {
    var a = x.apply(0, arguments),
      b = a[a.length - 1];
    return Qd(b) ? (a.pop(), Rd(a, b)) : $d(a);
  }
  function R(a) {
    return function (b) {
      if ('function' !== typeof a) throw new TypeError('L');
      return O(b, new fe(a));
    };
  }
  var fe = function (a) {
    this.I = a;
    this.fa = void 0;
  };
  fe.prototype.call = function (a, b) {
    return b.subscribe(new ge(a, this.I, this.fa));
  };
  var ge = function (a, b, c) {
    I.call(this, a);
    this.I = b;
    this.count = 0;
    this.fa = c || this;
  };
  v(ge, I);
  ge.EMPTY = I.EMPTY;
  ge.create = I.create;
  ge.prototype.o = function (a) {
    try {
      var b = this.I.call(this.fa, a, this.count++);
    } catch (c) {
      this.destination.error(c);
      return;
    }
    this.destination.next(b);
  };
  function he(a, b) {
    var c = void 0 === c ? Infinity : c;
    if ('function' === typeof b)
      return function (d) {
        return d.h(
          he(function (e, f) {
            return Yd(a(e, f)).h(
              R(function (g, h) {
                return b(e, g, f, h);
              })
            );
          }, c)
        );
      };
    'number' === typeof b && (c = b);
    return function (d) {
      return O(d, new ie(a, c));
    };
  }
  var ie = function (a, b) {
    b = void 0 === b ? Infinity : b;
    this.I = a;
    this.jd = b;
  };
  ie.prototype.call = function (a, b) {
    return b.subscribe(new je(a, this.I, this.jd));
  };
  var je = function (a, b, c) {
    c = void 0 === c ? Infinity : c;
    L.call(this, a);
    this.destination = a;
    this.I = b;
    this.jd = c;
    this.Fe = !1;
    this.buffer = [];
    this.index = this.active = 0;
  };
  v(je, L);
  je.EMPTY = L.EMPTY;
  je.create = L.create;
  je.prototype.o = function (a) {
    if (this.active < this.jd) {
      var b = this.index++;
      try {
        var c = this.I(a, b);
      } catch (d) {
        this.destination.error(d);
        return;
      }
      this.active++;
      a = new Fd(this);
      this.destination.add(a);
      Hd(c, a);
    } else this.buffer.push(a);
  };
  je.prototype.A = function () {
    this.Fe = !0;
    0 === this.active &&
      0 === this.buffer.length &&
      this.destination.complete();
    this.unsubscribe();
  };
  je.prototype.ua = function (a) {
    this.destination.next(a);
  };
  je.prototype.P = function () {
    var a = this.buffer;
    this.active--;
    0 < a.length
      ? this.o(a.shift())
      : 0 === this.active && this.Fe && this.destination.complete();
  };
  function ke(a) {
    a = void 0 === a ? Infinity : a;
    return he(qd, a);
  }
  function le() {
    return ke(1)(Q.apply(null, ea(x.apply(0, arguments))));
  }
  function me(a) {
    a = void 0 === a ? null : a;
    return function (b) {
      return O(b, new ne(a));
    };
  }
  var ne = function (a) {
    this.defaultValue = a;
  };
  ne.prototype.call = function (a, b) {
    return b.subscribe(new oe(a, this.defaultValue));
  };
  var oe = function (a, b) {
    I.call(this, a);
    this.defaultValue = b;
    this.Id = !0;
  };
  v(oe, I);
  oe.EMPTY = I.EMPTY;
  oe.create = I.create;
  oe.prototype.o = function (a) {
    this.Id = !1;
    this.destination.next(a);
  };
  oe.prototype.A = function () {
    this.Id && this.destination.next(this.defaultValue);
    this.destination.complete();
  };
  function pe(a) {
    return function (b) {
      return O(b, new qe(a));
    };
  }
  var qe = function (a) {
    this.pd = a;
  };
  qe.prototype.call = function (a, b) {
    return b.subscribe(new re(a, this.pd));
  };
  var re = function (a, b) {
    M.call(this, a);
    this.pd = b;
    this.se = !1;
    this.rc = [];
    this.index = 0;
  };
  v(re, M);
  re.EMPTY = M.EMPTY;
  re.create = M.create;
  m = re.prototype;
  m.ua = function (a, b, c, d) {
    this.destination.next(a);
    se(this, d);
    te(this);
  };
  m.Pa = function (a) {
    this.T(a);
  };
  m.P = function (a) {
    (a = se(this, a)) && this.destination.next(a);
    te(this);
  };
  m.o = function (a) {
    var b = this.index++;
    try {
      var c = this.pd(a, b);
      if (c) {
        var d = Hd(c, new Gd(this, a, 0));
        d && !d.closed && (this.destination.add(d), this.rc.push(d));
      }
    } catch (e) {
      this.destination.error(e);
    }
  };
  m.A = function () {
    this.se = !0;
    te(this);
    this.unsubscribe();
  };
  var se = function (a, b) {
      b.unsubscribe();
      var c = a.rc.indexOf(b);
      -1 !== c && a.rc.splice(c, 1);
      return b.bf;
    },
    te = function (a) {
      a.se && 0 === a.rc.length && a.destination.complete();
    };
  var ue = new K(function (a) {
    return a.complete();
  });
  function ve(a) {
    return new K(function (b) {
      return b.error(a);
    });
  }
  function we(a) {
    return function (b) {
      return O(b, new xe(a));
    };
  }
  var xe = function (a) {
    this.Oa = a;
    this.gg = void 0;
  };
  xe.prototype.call = function (a, b) {
    return b.subscribe(new ye(a, this.Oa, this.gg));
  };
  var ye = function (a, b, c) {
    L.call(this, a);
    this.Oa = b;
    this.values = new Set();
    c && this.add(Hd(c, new Fd(this)));
  };
  v(ye, L);
  ye.EMPTY = L.EMPTY;
  ye.create = L.create;
  m = ye.prototype;
  m.ua = function () {
    this.values.clear();
  };
  m.Pa = function (a) {
    this.T(a);
  };
  m.o = function (a) {
    this.Oa ? this.xf(a) : this.he(a, a);
  };
  m.xf = function (a) {
    var b = this.destination;
    try {
      var c = this.Oa(a);
    } catch (d) {
      b.error(d);
      return;
    }
    this.he(c, a);
  };
  m.he = function (a, b) {
    var c = this.values;
    c.has(a) || (c.add(a), this.destination.next(b));
  };
  function S(a) {
    return function (b) {
      return O(b, new ze(a));
    };
  }
  var ze = function (a) {
    this.compare = a;
    this.Oa = void 0;
  };
  ze.prototype.call = function (a, b) {
    return b.subscribe(new Ae(a, this.compare, this.Oa));
  };
  var Ae = function (a, b, c) {
    I.call(this, a);
    this.Oa = c;
    this.He = !1;
    'function' === typeof b && (this.compare = b);
  };
  v(Ae, I);
  Ae.EMPTY = I.EMPTY;
  Ae.create = I.create;
  Ae.prototype.compare = function (a, b) {
    return a === b;
  };
  Ae.prototype.o = function (a) {
    try {
      var b = this.Oa;
      var c = b ? b(a) : a;
    } catch (e) {
      return this.destination.error(e);
    }
    b = !1;
    if (this.He)
      try {
        var d = this.compare;
        b = d(this.key, c);
      } catch (e) {
        return this.destination.error(e);
      }
    else this.He = !0;
    b || ((this.key = c), this.destination.next(a));
  };
  function U(a) {
    return function (b) {
      return O(b, new Be(a));
    };
  }
  var Be = function (a) {
    this.pa = a;
    this.fa = void 0;
  };
  Be.prototype.call = function (a, b) {
    return b.subscribe(new Ce(a, this.pa, this.fa));
  };
  var Ce = function (a, b, c) {
    I.call(this, a);
    this.pa = b;
    this.fa = c;
    this.count = 0;
  };
  v(Ce, I);
  Ce.EMPTY = I.EMPTY;
  Ce.create = I.create;
  Ce.prototype.o = function (a) {
    try {
      var b = this.pa.call(this.fa, a, this.count++);
    } catch (c) {
      this.destination.error(c);
      return;
    }
    b && this.destination.next(a);
  };
  var De = (function () {
    function a() {
      this.message = 'argument out of range';
      this.name = 'ArgumentOutOfRangeError';
      return this;
    }
    a.prototype = Object.create(Error.prototype);
    return a;
  })();
  function Ee(a) {
    if (isNaN(a)) throw new TypeError('M');
    if (0 > a) throw new De();
    return function (b) {
      return 0 === a ? ue : O(b, new Fe(a));
    };
  }
  var Fe = function (a) {
    this.count = a;
  };
  Fe.prototype.call = function (a, b) {
    return b.subscribe(new Ge(a, this.count));
  };
  var Ge = function (a, b) {
    I.call(this, a);
    this.count = b;
    this.yf = 0;
  };
  v(Ge, I);
  Ge.EMPTY = I.EMPTY;
  Ge.create = I.create;
  Ge.prototype.o = function (a) {
    var b = this.count,
      c = ++this.yf;
    c <= b &&
      (this.destination.next(a),
      c === b && (this.destination.complete(), this.unsubscribe()));
  };
  var He = (function () {
    function a() {
      this.message = 'no elements in sequence';
      this.name = 'EmptyError';
      return this;
    }
    a.prototype = Object.create(Error.prototype);
    return a;
  })();
  function Ie(a) {
    a = void 0 === a ? Je : a;
    return function (b) {
      return O(b, new Ke(a));
    };
  }
  var Ke = function (a) {
    this.rd = a;
  };
  Ke.prototype.call = function (a, b) {
    return b.subscribe(new Le(a, this.rd));
  };
  var Le = function (a, b) {
    I.call(this, a);
    this.rd = b;
    this.Ie = !1;
  };
  v(Le, I);
  Le.EMPTY = I.EMPTY;
  Le.create = I.create;
  Le.prototype.o = function (a) {
    this.Ie = !0;
    this.destination.next(a);
  };
  Le.prototype.A = function () {
    if (this.Ie) return this.destination.complete();
    try {
      var a = this.rd();
    } catch (b) {
      a = b;
    }
    this.destination.error(a);
  };
  function Je() {
    return new He();
  }
  function Me() {
    var a = x.apply(0, arguments);
    return function (b) {
      return le(b, Q.apply(null, ea(a)));
    };
  }
  function Ne(a) {
    return function (b) {
      return O(b, new Oe(a, b));
    };
  }
  var Oe = function (a, b) {
    this.pa = a;
    this.fa = void 0;
    this.source = b;
  };
  Oe.prototype.call = function (a, b) {
    return b.subscribe(new Pe(a, this.pa, this.fa, this.source));
  };
  var Pe = function (a, b, c, d) {
    I.call(this, a);
    this.pa = b;
    this.fa = c;
    this.source = d;
    this.index = 0;
    this.fa = c || this;
  };
  v(Pe, I);
  Pe.EMPTY = I.EMPTY;
  Pe.create = I.create;
  Pe.prototype.P = function (a) {
    this.destination.next(a);
    this.destination.complete();
  };
  Pe.prototype.o = function (a) {
    var b = !1;
    try {
      b = this.pa.call(this.fa, a, this.index++, this.source);
    } catch (c) {
      this.destination.error(c);
      return;
    }
    b || this.P(!1);
  };
  Pe.prototype.A = function () {
    this.P(!0);
  };
  var Qe = function (a, b) {
    H.call(this);
    this.kf = a;
    this.Wd = b;
    this.closed = !1;
  };
  v(Qe, H);
  Qe.EMPTY = H.EMPTY;
  Qe.prototype.unsubscribe = function () {
    if (!this.closed) {
      this.closed = !0;
      var a = this.kf,
        b = a.Ea;
      this.kf = null;
      !b ||
        0 === b.length ||
        a.C ||
        a.closed ||
        ((a = b.indexOf(this.Wd)), -1 !== a && b.splice(a, 1));
    }
  };
  var Re = (function () {
    function a() {
      this.message = 'object unsubscribed';
      this.name = 'ObjectUnsubscribedError';
      return this;
    }
    a.prototype = Object.create(Error.prototype);
    return a;
  })();
  var V = function () {
    this.Ea = [];
    this.Hb = this.C = this.closed = !1;
    this.Oc = null;
  };
  v(V, K);
  m = V.prototype;
  m.ob = function (a) {
    var b = new Se(this, this);
    b.operator = a;
    return b;
  };
  m.next = function (a) {
    if (this.closed) throw new Re();
    if (!this.C) {
      var b = this.Ea,
        c = b.length;
      b = b.slice();
      for (var d = 0; d < c; d++) b[d].next(a);
    }
  };
  m.error = function (a) {
    if (this.closed) throw new Re();
    this.Hb = !0;
    this.Oc = a;
    this.C = !0;
    var b = this.Ea,
      c = b.length;
    b = b.slice();
    for (var d = 0; d < c; d++) b[d].error(a);
    this.Ea.length = 0;
  };
  m.complete = function () {
    if (this.closed) throw new Re();
    this.C = !0;
    var a = this.Ea,
      b = a.length;
    a = a.slice();
    for (var c = 0; c < b; c++) a[c].complete();
    this.Ea.length = 0;
  };
  m.unsubscribe = function () {
    this.closed = this.C = !0;
    this.Ea = null;
  };
  m.bd = function (a) {
    if (this.closed) throw new Re();
    return K.prototype.bd.call(this, a);
  };
  m.X = function (a) {
    if (this.closed) throw new Re();
    if (this.Hb) return a.error(this.Oc), H.EMPTY;
    if (this.C) return a.complete(), H.EMPTY;
    this.Ea.push(a);
    return new Qe(this, a);
  };
  m.U = function () {
    var a = new K();
    a.source = this;
    return a;
  };
  V.create = function (a, b) {
    return new Se(a, b);
  };
  var Se = function (a, b) {
    V.call(this);
    this.destination = a;
    this.source = b;
  };
  v(Se, V);
  Se.create = V.create;
  Se.prototype.next = function (a) {
    var b = this.destination;
    b && b.next && b.next(a);
  };
  Se.prototype.error = function (a) {
    var b = this.destination;
    b && b.error && this.destination.error(a);
  };
  Se.prototype.complete = function () {
    var a = this.destination;
    a && a.complete && this.destination.complete();
  };
  Se.prototype.X = function (a) {
    return this.source ? this.source.subscribe(a) : H.EMPTY;
  };
  function Te() {
    return function (a) {
      return O(a, new Ue());
    };
  }
  var Ue = function () {};
  Ue.prototype.call = function (a, b) {
    return b.subscribe(new Ve(a));
  };
  var Ve = function () {
    I.apply(this, arguments);
  };
  v(Ve, I);
  Ve.EMPTY = I.EMPTY;
  Ve.create = I.create;
  Ve.prototype.o = function () {};
  function We() {
    if (isNaN(1)) throw new TypeError('M');
    return function (a) {
      return O(a, new Xe());
    };
  }
  var Xe = function () {
    this.total = 1;
  };
  Xe.prototype.call = function (a, b) {
    return b.subscribe(new Ye(a, this.total));
  };
  var Ye = function (a, b) {
    I.call(this, a);
    this.total = b;
    this.df = [];
    this.count = 0;
  };
  v(Ye, I);
  Ye.EMPTY = I.EMPTY;
  Ye.create = I.create;
  Ye.prototype.o = function (a) {
    var b = this.df,
      c = this.total,
      d = this.count++;
    b.length < c ? b.push(a) : (b[d % c] = a);
  };
  Ye.prototype.A = function () {
    var a = this.destination,
      b = this.count;
    if (0 < b)
      for (
        var c = this.count >= this.total ? this.total : this.count,
          d = this.df,
          e = 0;
        e < c;
        e++
      ) {
        var f = b++ % c;
        a.next(d[f]);
      }
    a.complete();
  };
  function Ze(a, b) {
    var c = 2 <= arguments.length;
    return function (d) {
      return d.h(
        a
          ? U(function (e, f) {
              return a(e, f, d);
            })
          : qd,
        We(),
        c
          ? me(b)
          : Ie(function () {
              return new He();
            })
      );
    };
  }
  function $e(a) {
    return function (b) {
      return O(b, new af(a));
    };
  }
  var af = function (a) {
    this.value = a;
  };
  af.prototype.call = function (a, b) {
    return b.subscribe(new bf(a, this.value));
  };
  var bf = function (a, b) {
    I.call(this, a);
    this.value = b;
  };
  v(bf, I);
  bf.EMPTY = I.EMPTY;
  bf.create = I.create;
  bf.prototype.o = function () {
    this.destination.next(this.value);
  };
  function cf(a, b) {
    var c = !1;
    2 <= arguments.length && (c = !0);
    return function (d) {
      return O(d, new df(a, b, c));
    };
  }
  var df = function (a, b, c) {
    this.dd = a;
    this.seed = b;
    this.mg = void 0 === c ? !1 : c;
  };
  df.prototype.call = function (a, b) {
    return b.subscribe(new ef(a, this.dd, this.seed, this.mg));
  };
  var ef = function (a, b, c, d) {
    I.call(this, a);
    this.dd = b;
    this.Xc = c;
    this.je = d;
    this.index = 0;
  };
  v(ef, I);
  ef.EMPTY = I.EMPTY;
  ef.create = I.create;
  ef.prototype.o = function (a) {
    var b = this.destination;
    if (this.je) {
      var c = this.index++;
      try {
        var d = this.dd(this.Xc, a, c);
      } catch (e) {
        b.error(e);
        return;
      }
      this.Xc = d;
      b.next(d);
    } else (this.Xc = a), (this.je = !0), b.next(a);
  };
  function ff() {
    var a = x.apply(0, arguments),
      b = Infinity,
      c = void 0,
      d = a[a.length - 1];
    Qd(d)
      ? ((c = a.pop()),
        1 < a.length && 'number' === typeof a[a.length - 1] && (b = a.pop()))
      : 'number' === typeof d && (b = a.pop());
    return !c && 1 === a.length && a[0] instanceof K ? a[0] : ke(b)($d(a, c));
  }
  function gf() {
    return function (a) {
      return O(a, new hf());
    };
  }
  var hf = function () {};
  hf.prototype.call = function (a, b) {
    b.Ab++;
    a = new jf(a, b);
    var c = b.subscribe(a);
    a.closed || (a.connection = b.connect());
    return c;
  };
  var jf = function (a, b) {
    I.call(this, a);
    this.kb = b;
    this.connection = null;
  };
  v(jf, I);
  jf.EMPTY = I.EMPTY;
  jf.create = I.create;
  jf.prototype.ya = function () {
    var a = this.kb;
    if (a) {
      this.kb = null;
      var b = a.Ab;
      0 >= b
        ? (this.connection = null)
        : ((a.Ab = b - 1),
          1 < b
            ? (this.connection = null)
            : ((b = this.connection),
              (a = a.ib),
              (this.connection = null),
              !a || (b && a !== b) || a.unsubscribe()));
    } else this.connection = null;
  };
  var kf = function (a, b) {
    this.source = a;
    this.lf = b;
    this.Ab = 0;
    this.dc = !1;
  };
  v(kf, K);
  kf.create = K.create;
  kf.prototype.X = function (a) {
    return this.vc().subscribe(a);
  };
  kf.prototype.vc = function () {
    var a = this.fc;
    if (!a || a.C) this.fc = this.lf();
    return this.fc;
  };
  kf.prototype.connect = function () {
    var a = this.ib;
    a ||
      ((this.dc = !1),
      (a = this.ib = new H()),
      a.add(this.source.subscribe(new lf(this.vc(), this))),
      a.closed && ((this.ib = null), (a = H.EMPTY)));
    return a;
  };
  kf.prototype.cf = function () {
    return gf()(this);
  };
  var of,
    pf = kf.prototype;
  of = {
    operator: { value: null },
    Ab: { value: 0, writable: !0 },
    fc: { value: null, writable: !0 },
    ib: { value: null, writable: !0 },
    X: { value: pf.X },
    dc: { value: pf.dc, writable: !0 },
    vc: { value: pf.vc },
    connect: { value: pf.connect },
    cf: { value: pf.cf },
  };
  var lf = function (a, b) {
    I.call(this);
    this.destination = a;
    this.kb = b;
  };
  v(lf, I);
  lf.EMPTY = I.EMPTY;
  lf.create = I.create;
  lf.prototype.T = function (a) {
    this.ya();
    I.prototype.T.call(this, a);
  };
  lf.prototype.A = function () {
    this.kb.dc = !0;
    this.ya();
    I.prototype.A.call(this);
  };
  lf.prototype.ya = function () {
    var a = this.kb;
    if (a) {
      this.kb = null;
      var b = a.ib;
      a.Ab = 0;
      a.fc = null;
      a.ib = null;
      b && b.unsubscribe();
    }
  };
  function qf(a) {
    return function (b) {
      var c =
        'function' === typeof a
          ? a
          : function () {
              return a;
            };
      var d = Object.create(b, of);
      d.source = b;
      d.lf = c;
      return d;
    };
  }
  function rf() {
    var a = x.apply(0, arguments);
    1 === a.length && jd(a[0]) && (a = a[0]);
    return function (b) {
      return O(b, new sf(a));
    };
  }
  var sf = function (a) {
    this.Pd = a;
  };
  sf.prototype.call = function (a, b) {
    return b.subscribe(new tf(a, this.Pd));
  };
  var tf = function (a, b) {
    L.call(this, a);
    this.destination = a;
    this.Pd = b;
  };
  v(tf, L);
  tf.EMPTY = L.EMPTY;
  tf.create = L.create;
  tf.prototype.Pa = function () {
    uf(this);
  };
  tf.prototype.P = function () {
    uf(this);
  };
  tf.prototype.T = function () {
    uf(this);
    this.unsubscribe();
  };
  tf.prototype.A = function () {
    uf(this);
    this.unsubscribe();
  };
  var uf = function (a) {
    var b = a.Pd.shift();
    if (b) {
      var c = new Fd(a);
      a.destination.add(c);
      Hd(b, c);
    } else a.destination.complete();
  };
  var vf = function (a) {
    V.call(this);
    this.cd = a;
  };
  v(vf, V);
  vf.create = V.create;
  vf.prototype.X = function (a) {
    var b = V.prototype.X.call(this, a);
    b && !b.closed && a.next(this.cd);
    return b;
  };
  vf.prototype.next = function (a) {
    V.prototype.next.call(this, (this.cd = a));
  };
  q.Object.defineProperties(vf.prototype, {
    value: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        if (this.Hb) throw this.Oc;
        if (this.closed) throw new Re();
        return this.cd;
      },
    },
  });
  var wf = function (a, b, c) {
    a = void 0 === a ? Infinity : a;
    b = void 0 === b ? Infinity : b;
    c = void 0 === c ? Md : c;
    V.call(this);
    this.rh = c;
    this.cc = [];
    this.ke = !1;
    this.fe = 1 > a ? 1 : a;
    this.zf = 1 > b ? 1 : b;
    Infinity === b
      ? ((this.ke = !0), (this.next = this.Ig))
      : (this.next = this.Kg);
  };
  v(wf, V);
  wf.create = V.create;
  m = wf.prototype;
  m.Ig = function (a) {
    var b = this.cc;
    b.push(a);
    b.length > this.fe && b.shift();
    V.prototype.next.call(this, a);
  };
  m.Kg = function (a) {
    this.cc.push({ time: this.ie(), value: a });
    this.le();
    V.prototype.next.call(this, a);
  };
  m.X = function (a) {
    var b = this.ke,
      c = b ? this.cc : this.le(),
      d = c.length;
    if (this.closed) throw new Re();
    if (this.C || this.Hb) var e = H.EMPTY;
    else this.Ea.push(a), (e = new Qe(this, a));
    if (b) for (var f = 0; f < d && !a.closed; f++) a.next(c[f]);
    else for (f = 0; f < d && !a.closed; f++) a.next(c[f].value);
    this.Hb ? a.error(this.Oc) : this.C && a.complete();
    return e;
  };
  m.ie = function () {
    var a = this.rh;
    return a ? a.now() : Md.now();
  };
  m.le = function () {
    for (
      var a = this.ie(),
        b = this.fe,
        c = this.zf,
        d = this.cc,
        e = d.length,
        f = 0;
      f < e && !(a - d[f].time < c);

    )
      f++;
    e > b && (f = Math.max(f, e - b));
    0 < f && d.splice(0, f);
    return d;
  };
  function xf(a) {
    var b = new wf(a, void 0, void 0);
    return function (c) {
      return qf(function () {
        return b;
      })(c);
    };
  }
  function yf() {
    var a = x.apply(0, arguments);
    if (1 === a.length)
      if (jd(a[0])) a = a[0];
      else return Yd(a[0]);
    return O($d(a), new zf());
  }
  var zf = function () {};
  zf.prototype.call = function (a, b) {
    return b.subscribe(new Af(a));
  };
  var Af = function (a) {
    M.call(this, a);
    this.Ib = !1;
    this.Qa = [];
    this.Wb = [];
  };
  v(Af, M);
  Af.EMPTY = M.EMPTY;
  Af.create = M.create;
  m = Af.prototype;
  m.o = function (a) {
    this.Qa.push(a);
  };
  m.A = function () {
    var a = this.Qa,
      b = a.length;
    if (0 === b) this.destination.complete();
    else {
      for (var c = 0; c < b && !this.Ib; c++) {
        var d = Hd(a[c], new Gd(this, null, c));
        this.Wb && this.Wb.push(d);
        this.add(d);
      }
      this.Qa = null;
    }
  };
  m.ua = function (a, b, c) {
    if (!this.Ib) {
      this.Ib = !0;
      for (var d = 0; d < this.Wb.length; d++)
        if (d !== c) {
          var e = this.Wb[d];
          e.unsubscribe();
          this.remove(e);
        }
      this.Wb = null;
    }
    this.destination.next(b);
  };
  m.P = function (a) {
    this.Ib = !0;
    M.prototype.P.call(this, a);
  };
  m.Pa = function (a) {
    this.Ib = !0;
    M.prototype.Pa.call(this, a);
  };
  function Bf() {
    var a = void 0 === a ? Infinity : a;
    return function (b) {
      return 0 >= a
        ? ue
        : O(b, function (c) {
            var d = this,
              e = 0,
              f = new H(),
              g,
              h = function () {
                var k = !1;
                g = c.subscribe({
                  next: function (l) {
                    return d.next(l);
                  },
                  error: function (l) {
                    return d.error(l);
                  },
                  complete: function () {
                    ++e < a
                      ? g
                        ? (g.unsubscribe(), (g = null), h())
                        : (k = !0)
                      : d.complete();
                  },
                });
                k ? (g.unsubscribe(), (g = null), h()) : f.add(g);
              };
            h();
            return f;
          });
    };
  }
  function Cf() {
    return new V();
  }
  function Df() {
    return function (a) {
      return gf()(qf(Cf)(a));
    };
  }
  (function () {
    function a(b) {
      this.message = b;
      this.name = 'NotFoundError';
      return this;
    }
    a.prototype = Object.create(Error.prototype);
    return a;
  })();
  (function () {
    function a(b) {
      this.message = b;
      this.name = 'SequenceError';
      return this;
    }
    a.prototype = Object.create(Error.prototype);
    return a;
  })();
  function W() {
    var a = x.apply(0, arguments),
      b = a[a.length - 1];
    return Qd(b)
      ? (a.pop(),
        function (c) {
          return le(a, c, b);
        })
      : function (c) {
          return le(a, c);
        };
  }
  var Ef = 1,
    Ff,
    Gf = {};
  function Hf(a) {
    return a in Gf ? (delete Gf[a], !0) : !1;
  }
  var If = function (a) {
      var b = Ef++;
      Gf[b] = !0;
      Ff || (Ff = Promise.resolve());
      Ff.then(function () {
        return Hf(b) && a();
      });
      return b;
    },
    Jf = function (a) {
      Hf(a);
    };
  var Lf = function () {
      return ((null == Kf ? void 0 : Kf.setImmediate) || If).apply(
        null,
        ea(x.apply(0, arguments))
      );
    },
    Kf = void 0;
  var Mf = function (a, b) {
    Ld.call(this, a, b);
    this.da = a;
    this.Uc = b;
  };
  v(Mf, Ld);
  Mf.EMPTY = Ld.EMPTY;
  Mf.prototype.Tb = function (a, b, c) {
    c = void 0 === c ? 0 : c;
    if (null !== c && 0 < c) return Ld.prototype.Tb.call(this, a, b, c);
    a.actions.push(this);
    return a.Lc || (a.Lc = Lf(a.flush.bind(a, void 0)));
  };
  Mf.prototype.Sb = function (a, b, c) {
    c = void 0 === c ? 0 : c;
    if ((null !== c && 0 < c) || (null === c && 0 < this.delay))
      return Ld.prototype.Sb.call(this, a, b, c);
    0 === a.actions.length &&
      (((null == Kf ? void 0 : Kf.clearImmediate) || Jf)(b), (a.Lc = void 0));
  };
  var Nf = function () {
    Pd.apply(this, arguments);
  };
  v(Nf, Pd);
  Nf.prototype.flush = function (a) {
    this.active = !0;
    this.Lc = void 0;
    var b = this.actions,
      c,
      d = -1;
    a = a || b.shift();
    var e = b.length;
    do if ((c = a.execute(a.state, a.delay))) break;
    while (++d < e && (a = b.shift()));
    this.active = !1;
    if (c) {
      for (; ++d < e && (a = b.shift()); ) a.unsubscribe();
      throw c;
    }
  };
  var Of = new Nf(Mf);
  var Pf = function (a, b, c) {
    b = void 0 === b ? 0 : b;
    c = void 0 === c ? Of : c;
    this.source = a;
    this.delayTime = b;
    this.da = c;
    0 > b && (this.delayTime = 0);
    Qd(c) || (this.da = Of);
  };
  v(Pf, K);
  Pf.create = K.create;
  Pf.Tf = function (a) {
    return this.add(a.source.subscribe(a.Wd));
  };
  Pf.prototype.X = function (a) {
    return this.da.u(Pf.Tf, this.delayTime, { source: this.source, Wd: a });
  };
  function Qf() {
    var a = Xd;
    var b = void 0 === b ? 0 : b;
    return function (c) {
      return O(c, new Rf(a, b));
    };
  }
  var Rf = function (a, b) {
    this.da = a;
    this.delay = b;
  };
  Rf.prototype.call = function (a, b) {
    return new Pf(b, this.delay, this.da).subscribe(a);
  };
  function X(a) {
    return function (b) {
      return O(b, new Sf(a));
    };
  }
  var Sf = function (a) {
    this.I = a;
  };
  Sf.prototype.call = function (a, b) {
    return b.subscribe(new Tf(a, this.I));
  };
  var Tf = function (a, b) {
    L.call(this, a);
    this.destination = a;
    this.I = b;
    this.index = 0;
  };
  v(Tf, L);
  Tf.EMPTY = L.EMPTY;
  Tf.create = L.create;
  m = Tf.prototype;
  m.o = function (a) {
    var b = this.index++;
    try {
      var c = this.I(a, b);
    } catch (d) {
      this.destination.error(d);
      return;
    }
    (a = this.zc) && a.unsubscribe();
    a = new Fd(this);
    this.destination.add(a);
    this.zc = a;
    Hd(c, a);
  };
  m.A = function () {
    var a = this.zc;
    (a && !a.closed) || L.prototype.A.call(this);
    this.unsubscribe();
  };
  m.ya = function () {
    this.zc = void 0;
  };
  m.P = function () {
    this.zc = void 0;
    this.C && L.prototype.A.call(this);
  };
  m.ua = function (a) {
    this.destination.next(a);
  };
  function Uf(a, b) {
    b = void 0 === b ? !1 : b;
    return function (c) {
      return O(c, new Vf(a, b));
    };
  }
  var Vf = function (a, b) {
    this.pa = a;
    this.Fd = b;
  };
  Vf.prototype.call = function (a, b) {
    return b.subscribe(new Wf(a, this.pa, this.Fd));
  };
  var Wf = function (a, b, c) {
    I.call(this, a);
    this.pa = b;
    this.Fd = c;
    this.index = 0;
  };
  v(Wf, I);
  Wf.EMPTY = I.EMPTY;
  Wf.create = I.create;
  Wf.prototype.o = function (a) {
    var b = this.destination;
    try {
      var c = this.pa(a, this.index++);
    } catch (d) {
      b.error(d);
      return;
    }
    b = this.destination;
    c ? b.next(a) : (this.Fd && b.next(a), b.complete());
  };
  function Xf() {}
  function Yf(a, b, c) {
    return function (d) {
      return O(d, new Zf(a, b, c));
    };
  }
  var Zf = function (a, b, c) {
    this.Jg = a;
    this.error = b;
    this.complete = c;
  };
  Zf.prototype.call = function (a, b) {
    return b.subscribe(new $f(a, this.Jg, this.error, this.complete));
  };
  var $f = function (a, b, c, d) {
    I.call(this, a);
    this.Yc = this.Zc = this.ad = Xf;
    this.Zc = c || Xf;
    this.Yc = d || Xf;
    kd(b)
      ? ((this.xa = this), (this.ad = b))
      : b &&
        ((this.xa = b),
        (this.ad = b.next || Xf),
        (this.Zc = b.error || Xf),
        (this.Yc = b.complete || Xf));
  };
  v($f, I);
  $f.EMPTY = I.EMPTY;
  $f.create = I.create;
  $f.prototype.o = function (a) {
    try {
      this.ad.call(this.xa, a);
    } catch (b) {
      this.destination.error(b);
      return;
    }
    this.destination.next(a);
  };
  $f.prototype.T = function (a) {
    try {
      this.Zc.call(this.xa, a);
    } catch (b) {
      this.destination.error(b);
      return;
    }
    this.destination.error(a);
  };
  $f.prototype.A = function () {
    try {
      this.Yc.call(this.xa);
    } catch (a) {
      this.destination.error(a);
      return;
    }
    return this.destination.complete();
  };
  (function () {
    function a(b) {
      this.message = 'Timeout has occurred';
      this.name = 'TimeoutError';
      this.info = void 0 === b ? null : b;
      return this;
    }
    a.prototype = Object.create(Error.prototype);
    return a;
  })();
  function ag() {
    var a = x.apply(0, arguments);
    return function (b) {
      var c;
      'function' === typeof a[a.length - 1] && (c = a.pop());
      return O(b, new bg(a, c));
    };
  }
  var bg = function (a, b) {
    this.Qa = a;
    this.I = b;
  };
  bg.prototype.call = function (a, b) {
    return b.subscribe(new cg(a, this.Qa, this.I));
  };
  var cg = function (a, b, c) {
    M.call(this, a);
    this.I = c;
    this.hb = [];
    a = b.length;
    this.values = Array(a);
    for (c = 0; c < a; c++) this.hb.push(c);
    for (c = 0; c < a; c++) this.add(Hd(b[c], new Gd(this, void 0, c)));
  };
  v(cg, M);
  cg.EMPTY = M.EMPTY;
  cg.create = M.create;
  cg.prototype.ua = function (a, b, c) {
    this.values[c] = b;
    b = this.hb;
    0 < b.length && ((c = b.indexOf(c)), -1 !== c && b.splice(c, 1));
  };
  cg.prototype.P = function () {};
  cg.prototype.o = function (a) {
    0 === this.hb.length &&
      ((a = [a].concat(ea(this.values))),
      this.I ? this.vf(a) : this.destination.next(a));
  };
  cg.prototype.vf = function (a) {
    try {
      var b = this.I.apply(this, a);
    } catch (c) {
      this.destination.error(c);
      return;
    }
    this.destination.next(b);
  };
  var dg = {},
    eg =
      ((dg['data-google-av-cxn'] = '_avicxn_'),
      (dg['data-google-av-cpmav'] = '_cvu_'),
      (dg['data-google-av-metadata'] = '_avm_'),
      (dg['data-google-av-adk'] = '_adk_'),
      (dg['data-google-av-btr'] = void 0),
      (dg['data-google-av-override'] = void 0),
      (dg['data-google-av-dm'] = void 0),
      (dg['data-google-av-immediate'] = void 0),
      (dg['data-google-av-aid'] = void 0),
      (dg['data-google-av-naid'] = void 0),
      (dg['data-google-av-inapp'] = void 0),
      (dg['data-google-av-slift'] = void 0),
      (dg['data-google-av-itpl'] = void 0),
      (dg['data-google-av-ext-cxn'] = void 0),
      (dg['data-google-av-rs'] = void 0),
      (dg['data-google-av-flags'] = void 0),
      (dg['data-google-av-turtlex'] = void 0),
      (dg['data-google-av-ufs-integrator-metadata'] = void 0),
      (dg['data-google-av-vattr'] = void 0),
      dg),
    fg = {},
    gg =
      ((fg['data-google-av-adk'] = 'googleAvAdk'),
      (fg['data-google-av-btr'] = 'googleAvBtr'),
      (fg['data-google-av-cpmav'] = 'googleAvCpmav'),
      (fg['data-google-av-dm'] = 'googleAvDm'),
      (fg['data-google-av-ext-cxn'] = 'googleAvExtCxn'),
      (fg['data-google-av-immediate'] = 'googleAvImmediate'),
      (fg['data-google-av-inapp'] = 'googleAvInapp'),
      (fg['data-google-av-itpl'] = 'googleAvItpl'),
      (fg['data-google-av-metadata'] = 'googleAvMetadata'),
      (fg['data-google-av-naid'] = 'googleAvNaid'),
      (fg['data-google-av-override'] = 'googleAvOverride'),
      (fg['data-google-av-rs'] = 'googleAvRs'),
      (fg['data-google-av-slift'] = 'googleAvSlift'),
      (fg['data-google-av-cxn'] = 'googleAvCxn'),
      (fg['data-google-av-aid'] = void 0),
      (fg['data-google-av-flags'] = 'googleAvFlags'),
      (fg['data-google-av-turtlex'] = 'googleAvTurtlex'),
      (fg['data-google-av-ufs-integrator-metadata'] =
        'googleAvUfsIntegratorMetadata'),
      (fg['data-google-av-vattr'] = 'googleAvVattr'),
      fg);
  function hg(a, b) {
    if (void 0 === a.j) return null;
    try {
      var c;
      var d = null != (c = a.j.getAttribute(b)) ? c : null;
      if (null !== d) return d;
    } catch (g) {}
    try {
      var e = eg[b];
      if (e && ((d = a.j[e]), void 0 !== d)) return d;
    } catch (g) {}
    try {
      var f = gg[b];
      if (f) return cd(a.j, f);
    } catch (g) {}
    return null;
  }
  function ig(a) {
    return R(function (b) {
      return hg(b, a);
    });
  }
  function jg(a, b, c) {
    if (kd(c)) {
      var d = c;
      c = void 0;
    }
    return d
      ? jg(a, b, c).h(
          R(function (e) {
            return jd(e) ? d.apply(null, ea(e)) : d(e);
          })
        )
      : new K(function (e) {
          kg(
            a,
            b,
            function (f) {
              1 < arguments.length
                ? e.next(Array.prototype.slice.call(arguments))
                : e.next(f);
            },
            e,
            c
          );
        });
  }
  function kg(a, b, c, d, e) {
    if (
      a &&
      'function' === typeof a.addEventListener &&
      'function' === typeof a.removeEventListener
    ) {
      a.addEventListener(b, c, e);
      var f = function () {
        return a.removeEventListener(b, c, e);
      };
    } else if (a && 'function' === typeof a.Og && 'function' === typeof a.Ng)
      a.Og(b, c),
        (f = function () {
          return a.Ng(b, c);
        });
    else if (
      a &&
      'function' === typeof a.addListener &&
      'function' === typeof a.removeListener
    )
      a.addListener(b, c),
        (f = function () {
          return a.removeListener(b, c);
        });
    else if (a && a.length)
      for (var g = 0, h = a.length; g < h; g++) kg(a[g], b, c, d, e);
    else throw new TypeError('N');
    d.add(f);
  }
  var lg = new K(Xf);
  var mg = function (a, b) {
    Ld.call(this, a, b);
    this.da = a;
    this.Uc = b;
  };
  v(mg, Ld);
  mg.EMPTY = Ld.EMPTY;
  mg.prototype.u = function (a, b) {
    b = void 0 === b ? 0 : b;
    if (0 < b) return Ld.prototype.u.call(this, a, b);
    this.delay = b;
    this.state = a;
    this.da.flush(this);
    return this;
  };
  mg.prototype.execute = function (a, b) {
    return 0 < b || this.closed
      ? Ld.prototype.execute.call(this, a, b)
      : this.ge(a, b);
  };
  mg.prototype.Tb = function (a, b, c) {
    c = void 0 === c ? 0 : c;
    return (null !== c && 0 < c) || (null === c && 0 < this.delay)
      ? Ld.prototype.Tb.call(this, a, b, c)
      : a.flush(this);
  };
  var ng = function () {
    Pd.apply(this, arguments);
  };
  v(ng, Pd);
  var Xd = new ng(mg);
  var og = J(
    (function (a) {
      return R(function (b) {
        return a.map(function (c) {
          return hg(b, c);
        });
      });
    })(['data-google-av-cxn', 'data-google-av-turtlex']),
    R(function (a) {
      var b = u(a);
      a = b.next().value;
      b = b.next().value;
      if (!a) {
        if (null !== b) return [];
        throw new Qa();
      }
      return a.split('|');
    })
  );
  var pg = function () {
    return J(
      he(function (a) {
        return a.element
          .h(
            og,
            Zd(function () {
              return Q(['']);
            })
          )
          .h(
            R(function (b) {
              return { wa: b, pc: a };
            })
          );
      }),
      we(function (a) {
        return a.wa.sort().join(';');
      }),
      R(function (a) {
        return a.pc;
      })
    );
  };
  var qg = function () {
      var a = {};
      this.va = ((a[3] = []), (a[2] = []), (a[1] = []), a);
      this.Jd = !1;
    },
    sg = function (a, b, c) {
      var d = rg(a, c);
      a.va[c].push(b);
      d && 1 === a.va[c].length && a.flush();
    },
    rg = function (a, b) {
      return Object.keys(a.va)
        .map(function (c) {
          return Number(c);
        })
        .filter(function (c) {
          return !isNaN(c) && c > b;
        })
        .every(function (c) {
          return 0 === a.va[c].length;
        });
    };
  qg.prototype.flush = function () {
    if (!this.Jd) {
      this.Jd = !0;
      try {
        for (
          ;
          Object.values(this.va).some(function (a) {
            return 0 < a.length;
          });

        )
          tg(this, 3), tg(this, 2), tg(this, 1);
      } catch (a) {
        throw (
          (Object.values(this.va).forEach(function (b) {
            return void b.splice(0, b.length);
          }),
          a)
        );
      } finally {
        this.Jd = !1;
      }
    }
  };
  var tg = function (a, b) {
    for (; rg(a, b) && 0 < a.va[b].length; ) a.va[b][0](), a.va[b].shift();
  };
  q.Object.defineProperties(qg.prototype, {
    ef: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return Object.values(this.va).some(function (a) {
          return 0 < a.length;
        });
      },
    },
  });
  function ug(a) {
    return function (b) {
      return b.h(vg(a, qf(new V())));
    };
  }
  function Y(a, b) {
    return function (c) {
      return c.h(vg(a, xf(b)));
    };
  }
  function vg(a, b) {
    function c(d) {
      return new K(function (e) {
        return d.subscribe(
          function (f) {
            sg(
              a,
              function () {
                return void e.next(f);
              },
              3
            );
          },
          function (f) {
            sg(
              a,
              function () {
                return void e.error(f);
              },
              3
            );
          },
          function () {
            sg(
              a,
              function () {
                return void e.complete();
              },
              3
            );
          }
        );
      });
    }
    return J(c, Qf(), b, gf(), c);
  }
  var Z = function (a) {
    this.value = a;
  };
  Z.prototype.U = function (a) {
    return Q(this.value).h(Y(a, 1));
  };
  var wg = function (a) {
    this.value = a;
    this.Rd = new V();
  };
  wg.prototype.release = function () {
    this.Rd.next();
    this.Rd.complete();
    this.value = void 0;
  };
  q.Object.defineProperties(wg.prototype, {
    j: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.value;
      },
    },
    released: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.Rd;
      },
    },
  });
  var yg = function () {
      return he(function (a) {
        return Yd(xg(a)).h(ug(a.i));
      });
    },
    xg = function (a) {
      return a.document
        .querySelectorAll('.GoogleActiveViewElement,.GoogleActiveViewClass')
        .map(function (b) {
          return new wg(b);
        });
    };
  function zg(a) {
    var b = a.af,
      c = a.document.Pg;
    return ff(Q({}), c, b).h(
      R(function () {
        return a;
      })
    );
  }
  function Ag() {
    return J(
      U(function (a) {
        return void 0 !== a;
      }),
      R(function (a) {
        return a;
      })
    );
  }
  function Bg() {
    return function (a) {
      var b = [];
      return a.h(
        U(function (c) {
          if (
            void 0 === c.j ||
            b.some(function (d) {
              return d.j === c.j;
            })
          )
            return !1;
          b.push(c);
          return !0;
        })
      );
    };
  }
  function Cg(a, b) {
    b = void 0 === b ? ue : b;
    return ff(zg(a), b).h(yg(), Bg(), Ag(), Y(a.i, 1));
  }
  var Dg = function (a) {
      this.key = a;
      this.defaultValue = !1;
      this.valueType = 'boolean';
    },
    Eg = function (a) {
      this.key = a;
      this.defaultValue = 0;
      this.valueType = 'number';
    };
  var Fg = new Dg('100006'),
    Gg = new Eg('45362137'),
    Hg = new Dg('45377435'),
    Ig = new Dg('45372163'),
    Jg = new Dg('45382077');
  var Kg = new Eg('45389692');
  function Lg(a, b) {
    return function (c) {
      return new K(function (d) {
        return c.subscribe(
          function (e) {
            a.Ha(b, function () {
              d.next(e);
            })();
          },
          function (e) {
            a.Ha(b, function () {
              d.error(e);
            })();
          },
          function () {
            a.Ha(b, function () {
              d.complete();
            })();
          }
        );
      });
    };
  }
  function Mg(a) {
    a = a.global;
    if ('undefined' === typeof a.__google_lidar_)
      return (a.__google_lidar_ = 1), !1;
    a.__google_lidar_ = Number(a.__google_lidar_) + 1;
    var b = a.__google_lidar_adblocks_count_;
    if (
      'number' === typeof b &&
      0 < b &&
      ((a = a.__google_lidar_radf_), 'function' === typeof a)
    )
      try {
        a();
      } catch (c) {}
    return !0;
  }
  function Ng(a) {
    var b = a.global;
    b.osdlfm = function () {
      return b.__google_lidar_radf_;
    };
    if (void 0 !== b.__google_lidar_radf_) return ue;
    b.__google_lidar_adblocks_count_ = 1;
    var c = new V();
    b.__google_lidar_radf_ = function () {
      return void c.next(a);
    };
    return c.h(Lg(a.s, 743));
  }
  var Og = function () {
      this.ze = {};
    },
    Pg = function (a, b) {
      a = a.ze[b.key];
      if ('proto' === b.valueType) {
        try {
          var c = JSON.parse(a);
          if (Array.isArray(c)) return c;
        } catch (d) {}
        return b.defaultValue;
      }
      return typeof a === typeof b.defaultValue ? a : b.defaultValue;
    };
  var Qg = function () {
    this.ue = new Map();
  };
  Qg.prototype.start = function (a, b, c, d) {
    var e = this;
    void 0 === this.Sd &&
      ((this.te = d),
      (c = Mg(a)),
      (d = Ng(a)),
      (d = Cg(a, d)),
      (this.Sd = (
        c
          ? ue
          : d.h(
              R(function (f) {
                return Object.freeze({ Gb: ad(), element: new Z(f).U(a.i) });
              }),
              pg()
            )
      ).subscribe(function (f) {
        var g = Symbol();
        e.ue.set(g, f);
        f.element.h(Ee(1)).subscribe(function (h) {
          var k = hg(h, 'data-google-av-flags'),
            l = new Og();
          if (null !== k)
            try {
              var p = JSON.parse(k)[0];
              k = '';
              for (var t = 0; t < p.length; t++)
                k += String.fromCharCode(
                  p.charCodeAt(t) ^
                    '\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003'.charCodeAt(
                      t % 10
                    )
                );
              l.ze = JSON.parse(k);
            } catch (sa) {}
          var n, w, A, y, C, G;
          p = {
            Kf: null != (n = null == l ? void 0 : Pg(l, Fg)) ? n : !1,
            cg: null != (w = null == l ? void 0 : Pg(l, Gg)) ? w : 0,
            dg: null != (A = null == l ? void 0 : Pg(l, Hg)) ? A : !1,
            dh: null != (y = null == l ? void 0 : Pg(l, Ig)) ? y : !1,
            ih: null != (C = null == l ? void 0 : Pg(l, Jg)) ? C : !1,
            Pf: null != (G = null == l ? void 0 : Pg(l, Kg)) ? G : 0,
          };
          h = hg(h, 'data-google-av-ufs-integrator-metadata');
          a: {
            if (null !== h)
              try {
                var N = $c(h);
                break a;
              } catch (sa) {}
            N = new Zc();
          }
          b(g, N, p);
        });
      })),
      c && this.lb());
  };
  Qg.prototype.lb = function () {
    var a, b;
    null == (a = this.Sd) || null == (b = a.unsubscribe) || b.call(a);
    this.Sd = void 0;
    var c;
    null == (c = this.te) || c.call(this);
    this.te = void 0;
  };
  var Rg = function (a, b, c) {
    this.context = a;
    this.rb = b;
    this.Ye = c;
  };
  Rg.prototype.ka = function (a) {
    var b,
      c = null != (b = null == a ? void 0 : a.fd) ? b : !1;
    b = !!this.rb.oh;
    return c && !b
      ? !1
      : (void 0 === a || void 0 === a.jc || a.jc === this.Ye) && this.rb.Cb;
  };
  Rg.prototype.N = function (a, b) {
    if (!this.ka(b)) throw new Na();
    return new Sg(this.context, this.rb, this.Ye, a);
  };
  var Sg = function (a, b, c, d) {
    var e = this;
    this.rb = b;
    this.method = c;
    this.url = d;
    this.Bc = !0;
    this.Ff = a.Ad().subscribe(function () {
      e.sendNow();
    });
  };
  Sg.prototype.deactivate = function () {
    this.Bc = !1;
  };
  Sg.prototype.sendNow = function () {
    if (this.Bc)
      if ((this.Ff.unsubscribe(), this.rb.Cb))
        try {
          this.rb.ping(this.url), (this.Bc = !1);
        } catch (a) {}
      else this.Bc = !1;
  };
  function Tg(a, b) {
    var c = !1;
    return new K(function (d) {
      var e = a.setTimeout(function () {
        c = !0;
        d.next(!0);
        d.complete();
      }, b);
      return function () {
        c || a.clearTimeout(e);
      };
    });
  }
  var Ug = function (a) {
    this.context = a;
    this.oh = !0;
  };
  Ug.prototype.ping = function () {
    var a = this;
    return ff
      .apply(
        null,
        ea(
          x.apply(0, arguments).map(function (b) {
            return Yd(
              a.context.global.fetch(b, {
                method: 'GET',
                cache: 'no-cache',
                keepalive: !0,
                mode: 'no-cors',
              })
            ).h(
              R(function (c) {
                return 200 === c.status;
              })
            );
          })
        )
      )
      .h(
        Ne(function (b) {
          return b;
        }),
        Ze()
      );
  };
  q.Object.defineProperties(Ug.prototype, {
    Cb: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return !Vg(this.context) && !!this.context.global.fetch;
      },
    },
  });
  function Wg(a) {
    a = a.global;
    if (a.PendingGetBeacon) return a.PendingGetBeacon;
  }
  var Zg = function (a) {
      this.context = a;
      if (void 0 === Xg) {
        var b,
          c,
          d =
            null == (b = a.global)
              ? void 0
              : null == (c = b.document)
              ? void 0
              : c.createElement('meta');
        try {
          d &&
            ((d.httpEquiv = 'origin-trial'),
            (d.content =
              'A/6hmwx8DpHud613fSYYa2C2T61iC513V4BYG/pBH4zs5sGsUc9RgaPKhfk3JhHF30N/9/NntWzEq28kkrMxpgQAAABweyJvcmlnaW4iOiJodHRwczovL2FkLmRvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUGVuZGluZ0JlYWNvbkFQSSIsImV4cGlyeSI6MTY3ODIzMzU5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=='),
            a.global.document.head.append(d));
        } catch (e) {}
        Xg = d;
      }
      Yg = !0;
    },
    Xg;
  Zg.prototype.ka = function (a) {
    return (
      Yg &&
      !Vg(this.context) &&
      void 0 !== Wg(this.context) &&
      (void 0 === a || void 0 === a.fd || !a.fd) &&
      (void 0 === a || void 0 === a.jc || 'GET' === a.jc)
    );
  };
  Zg.prototype.N = function (a, b) {
    if (!this.ka(b)) throw new Na();
    return new $g(this.context, a);
  };
  var Yg = !1,
    $g = function (a, b) {
      this.context = a;
      this.Zd = b;
      a = Wg(this.context);
      if (void 0 === a) throw Error();
      this.de = new a(ah(this), { backgroundTimeout: 0 });
    },
    ah = function (a) {
      a = a.Zd;
      return ('&' === a.slice(-1)[0] ? a : a + '&') + 'pbapi=1';
    };
  $g.prototype.deactivate = function () {
    this.de.deactivate();
  };
  $g.prototype.sendNow = function () {
    this.de.sendNow();
  };
  q.Object.defineProperties($g.prototype, {
    url: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.Zd;
      },
      set: function (a) {
        this.Zd = a;
        this.de.setURL(ah(this));
      },
    },
    method: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return 'GET';
      },
      set: function (a) {
        if ('GET' !== a) throw new Na();
      },
    },
  });
  function bh(a) {
    var b = ch(a);
    return null === b
      ? new Z(null)
      : b.h(
          R(function (c) {
            c = c.vb();
            if (Tb) c = Da.btoa(c);
            else {
              for (var d = [], e = 0, f = 0; f < c.length; f++) {
                var g = c.charCodeAt(f);
                if (255 < g) throw Error('m');
                d[e++] = g;
              }
              c = Ub(d);
            }
            return c;
          }),
          Ee(1),
          Y(a.i, 1)
        );
  }
  function dh(a) {
    function b(c) {
      return (
        'boolean' === typeof c ||
        'string' === typeof c ||
        'number' === typeof c ||
        void 0 === c ||
        null === c
      );
    }
    return b(a)
      ? !0
      : Array.isArray(a)
      ? a.every(b)
      : 'object' === typeof a
      ? Object.keys(a).every(function (c) {
          return 'string' === typeof c;
        }) &&
        Object.values(a).every(function (c) {
          return Array.isArray(c) ? c.every(b) : b(c);
        })
      : !1;
  }
  function eh(a) {
    return dh(a) ? a : String(a);
  }
  function fh(a) {
    var b, c, d;
    return (
      !!a &&
      'boolean' === typeof a.active &&
      'function' === typeof (null == (b = a.clock) ? void 0 : b.now) &&
      void 0 !== (null == (c = a.clock) ? void 0 : c.timeline) &&
      !(null == (d = a.D) || !d.timestamp) &&
      'function' === typeof a.Z &&
      'function' === typeof a.aa &&
      'function' === typeof a.ha &&
      'function' === typeof a.map &&
      'function' === typeof a.ma
    );
  }
  function gh(a, b) {
    return new K(function (c) {
      var d = !1,
        e = Array(b.length);
      e.fill(void 0);
      var f = new Set(),
        g = new Set(),
        h = function (t, n) {
          a.ef
            ? ((e[n] = t),
              f.add(n),
              d ||
                ((d = !0),
                sg(
                  a,
                  function () {
                    d = !1;
                    c.next(wb(e));
                  },
                  1
                )))
            : c.error(new Ra(n));
        },
        k = function (t, n) {
          g.add(n);
          f.add(n);
          sg(
            a,
            function () {
              c.error(t);
            },
            1
          );
        },
        l = function (t) {
          g.add(t);
          sg(
            a,
            function () {
              g.size === b.length && c.complete();
            },
            1
          );
        },
        p = b.map(function (t, n) {
          return t.subscribe(
            function (w) {
              return void h(w, n);
            },
            function (w) {
              return void k(w, n);
            },
            function () {
              return void l(n);
            }
          );
        });
      return function () {
        p.forEach(function (t) {
          return void t.unsubscribe();
        });
      };
    });
  }
  function hh(a, b, c) {
    function d() {
      if (b.Va) {
        var C = b.Va,
          G = C.next;
        var N = {
          Oh: c,
          ai: e,
          bi: Object.assign({}, f),
          Th: g,
          errorMessage: h,
          Rh: k,
        };
        N = {
          jh: 1,
          kh: 0,
          lh: 0,
          timestamp: Ya(b.l.now(), new Xa(0, b.l.timeline)),
          Ac: b.Ac,
          messageType: 2,
          Ph: N,
        };
        G.call(C, N);
      }
    }
    for (
      var e = Object.keys(a),
        f = {},
        g = !1,
        h = null,
        k = null,
        l = {},
        p = new Set(),
        t = [],
        n = [],
        w = {},
        A = u(e),
        y = A.next();
      !y.done;
      w = { S: w.S }, y = A.next()
    )
      (w.S = y.value),
        (y = a[w.S]),
        y instanceof Z
          ? ((l[w.S] = y.value), p.add(w.S), (f[String(w.S)] = eh(y.value)))
          : ((y = y.h(
              S(function (C, G) {
                return fh(C) || fh(G) ? !1 : C === G;
              }),
              R(
                (function (C) {
                  return function (G) {
                    f[String(C.S)] = eh(G);
                    d();
                    var N = {};
                    return (N[C.S] = G), N;
                  };
                })(w)
              ),
              Zd(
                (function (C) {
                  return function (G) {
                    if (G instanceof Ra) throw new Ta(String(C.S));
                    throw G;
                  };
                })(w)
              ),
              Yf(
                (function (C) {
                  return function () {
                    p.add(C.S);
                  };
                })(w),
                (function (C) {
                  return function (G) {
                    k = String(C.S);
                    h = String(G);
                    d();
                  };
                })(w),
                (function (C) {
                  return function () {
                    p.has(C.S) || ((g = !0), d());
                  };
                })(w)
              )
            )),
            n.push(w.S),
            t.push(y));
    (a = 0 < Object.keys(f).length) && d();
    w = gh(b.i, t).h(
      Zd(function (C) {
        if (C instanceof Ra) throw new Sa(String(n[C.og]));
        throw C;
      }),
      R(function (C) {
        return Object.freeze(
          Object.assign.apply(Object, [{}, l].concat(ea(C)))
        );
      })
    );
    return (t = 0 < t.length) && a
      ? ff(Q(Object.freeze(l)), w)
      : t
      ? w
      : Q(Object.freeze(l));
  }
  function ih(a, b, c, d) {
    var e = jh(kh(jh(lh, mh), nh), oh, ph);
    return a.s.Ha.bind(a.s)(733, function () {
      function f() {
        if (a.Va) {
          var l = a.Va,
            p = l.next;
          var t = { Vh: [].concat(ea(h.values())), Sh: k };
          t = {
            jh: 1,
            kh: 0,
            lh: 0,
            timestamp: Ya(a.l.now(), new Xa(0, a.l.timeline)),
            Ac: a.Ac,
            messageType: 1,
            Uh: t,
          };
          p.call(l, t);
        }
      }
      var g = {},
        h = new Set(),
        k = !1;
      try {
        return b
          .h(
            Zd(function (l) {
              d(Object.assign({}, g, { error: l }));
              return ue;
            }),
            Yf(
              function () {},
              function () {},
              function () {
                k = !0;
                f();
              }
            ),
            he(function (l) {
              h.add(l.Gb);
              f();
              try {
                var p = c(a, l);
              } catch (n) {
                return (
                  d(
                    Object.assign({}, g, {
                      error: n instanceof Error ? n : String(n),
                    })
                  ),
                  ue
                );
              }
              var t = {};
              return hh(p, a, l.Gb)
                .h(
                  Yf(function (n) {
                    t = n;
                  }),
                  xf(1),
                  gf()
                )
                .h(
                  e,
                  Zd(function (n) {
                    d(Object.assign({}, t, { error: n }));
                    return ue;
                  }),
                  Me(void 0),
                  R(function () {
                    h.delete(l.Gb) && f();
                    return !0;
                  })
                );
            })
          )
          .h(
            cf(function (l) {
              return l + 1;
            }, 0),
            Zd(function (l) {
              d(Object.assign({}, g, { error: l }));
              return ue;
            })
          );
      } catch (l) {
        return d(Object.assign({}, g, { error: l })), ue;
      }
    })();
  }
  function qh(a, b) {
    return J(
      X(function (c) {
        var d = a(c),
          e = b(c),
          f = {};
        return d && e && f
          ? new K(function (g) {
              e(d, f, function (h) {
                g.next(Object.assign({}, c, { If: h }));
                g.complete();
              });
              return function () {};
            })
          : lg;
      }),
      U(function (c) {
        return c.If;
      })
    );
  }
  var oh = J(
    U(function (a) {
      var b = a.H,
        c = a.kc,
        d = a.Tc,
        e = a.eb,
        f = a.Za,
        g = a.Bb;
      return (
        void 0 !== a.Wa &&
        void 0 !== g &&
        void 0 !== b &&
        void 0 !== c &&
        void 0 !== d &&
        (!f || void 0 !== e)
      );
    }),
    Uf(function (a) {
      return !(!1 === a.Pe && void 0 !== a.qd);
    }, !1),
    U(function (a) {
      return !0 === a.Pe;
    }),
    qh(
      function (a) {
        return a.Bb;
      },
      function (a) {
        return a.Wa;
      }
    ),
    R(function (a) {
      a.Za
        ? a.eb({
            eventType: 'active-view-begin-to-render',
            eventData: '',
            destination: ['buyer'],
          })
        : a.Tc(a.kc, a).forEach(function (b) {
            a.H.N(b).sendNow();
          });
    }),
    Ee(1),
    Te()
  );
  function rh(a) {
    var b = new Map();
    if ('object' !== typeof a || null === a) return b;
    Object.values(a).forEach(function (c) {
      c &&
        'function' === typeof c.aa &&
        (b.has(c.clock.timeline) || b.set(c.clock.timeline, c.clock.now()));
    });
    return b;
  }
  function sh(a, b) {
    var c = th,
      d = uh,
      e = vh;
    b = void 0 === b ? 0.01 : b;
    return function (f) {
      0 < b &&
        Math.random() <= b &&
        (a.global.HTMLFencedFrameElement &&
          a.global.fence &&
          'function' === typeof a.global.fence.reportEvent &&
          a.global.fence.reportEvent({
            eventType: 'active-view-error',
            eventData: '',
            destination: ['buyer'],
          }),
        (f = Object.assign({}, f, {
          errorMessage:
            f.error instanceof Error && f.error.message
              ? f.error.message
              : String(f.error),
          xe:
            f.error instanceof Error && f.error.stack
              ? String(f.error.stack)
              : null,
          Vf:
            f.error instanceof Error && f.error.name
              ? String(f.error.name)
              : null,
          Uf: String(a.s.pf),
        })),
        d(
          Object.assign({}, f, {
            ca: (function () {
              return function (g) {
                try {
                  return e(Object.assign({}, g));
                } catch (h) {
                  return {};
                }
              };
            })(),
            wa: [c],
          }),
          rh(f)
        ).forEach(function (g) {
          a.H.N(g).sendNow();
        }));
    };
  }
  var ph = J(
    R(function (a) {
      var b = a.H,
        c = a.bg;
      if (void 0 === b || void 0 === c) return !1;
      if (void 0 !== a.qd) return !0;
      if (null === c) return !1;
      for (a = 0; a < c; a++)
        b.N(
          'https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=extra&rnd=' +
            Math.floor(1e7 * Math.random())
        ).sendNow();
      return !0;
    }),
    Uf(function (a) {
      return !a;
    }),
    Te()
  );
  var vh = function (a) {
    return {
      id: a.Ic,
      mcvt: a.Nb,
      p: a.qc,
      asp: a.Kh,
      mtos: a.Ob,
      tos: a.Yb,
      v: a.Hf,
      bin: a.Gf,
      avms: a.Xe,
      bs: a.pe,
      mc: a.Ue,
      if: a.Of,
      vu: a.Rf,
      app: a.Ma,
      mse: a.Nd,
      mtop: a.Od,
      itpl: a.Gd,
      adk: a.ed,
      exk: a.Mh,
      rs: a.Ga,
      la: a.Se,
      cr: a.Hd,
      uach: a.ae,
      vs: a.Sc,
      r: a.Jc,
      pay: a.kg,
      rst: a.Bf,
      rpt: a.Af,
      isd: a.ng,
      lsd: a.yg,
      context: a.Uf,
      msg: a.errorMessage,
      stack: a.xe,
      name: a.Vf,
      ec: a.lg,
      sfr: a.Vd,
      met: a.Eb,
      wmsd: a.ce,
      pv: a.Xh,
      epv: a.Qh,
      pbe: a.Le,
      vae: a.Me,
      spb: a.mf,
    };
  };
  function jh() {
    var a = x.apply(0, arguments);
    return function (b) {
      var c = b.h(xf(1), gf());
      b = a.map(function (d) {
        return c.h(d, Me(!0));
      });
      return P(b).h(Ee(1), Te());
    };
  }
  function kh() {
    var a = x.apply(0, arguments);
    return function (b) {
      var c = b.h(xf(1), gf());
      b = a.map(function (d) {
        return c.h(d, Me(!0));
      });
      return ff.apply(null, ea(b)).h(Ee(1), Te());
    };
  }
  var mh = function (a) {
    var b = [];
    return a.h(
      R(function (c) {
        var d = c.H,
          e = c.eg,
          f = c.Yb,
          g = c.qh,
          h = c.ca,
          k = c.ph,
          l = c.Pc,
          p = c.xb,
          t = c.be,
          n = c.Ge,
          w = c.Le,
          A = c.mf;
        if (
          !c.wd ||
          !n ||
          void 0 === c.Ob ||
          void 0 === f ||
          void 0 === g ||
          void 0 === h ||
          void 0 === k ||
          void 0 === p ||
          void 0 === d
        )
          return !1;
        if (c.Za) {
          if (void 0 === l) return !1;
          g = c.eb;
          if (!g) return !1;
          g({
            eventType: 'active-view-time-on-screen',
            eventData: '',
            destination: ['buyer'],
          });
          return !0;
        }
        if (!w && !l) return !1;
        f = rh(c);
        var y;
        t = null != (y = null == t ? void 0 : t.ia(f).value) ? y : !1;
        c = p(
          Object.assign({}, c, {
            Ic: k,
            Sc: t ? 4 : 3,
            Jc: null != l ? l : 'u',
            ca: h,
            wa: g,
          }),
          f
        );
        if (w) {
          for (; b.length > g.length; )
            (w = void 0), null == (w = b.shift()) || w.deactivate();
          c.forEach(function (C, G) {
            G >= b.length ? b.push(d.N(C)) : (b[G].url = C);
          });
          return A && e && void 0 !== l
            ? (c.forEach(function (C) {
                e.N(C).sendNow();
              }),
              !0)
            : void 0 !== l;
        }
        return A && e && void 0 !== l
          ? (c.forEach(function (C) {
              e.N(C).sendNow();
            }),
            !0)
          : void 0 !== l
          ? (c.forEach(function (C) {
              d.N(C).sendNow();
            }),
            !0)
          : !1;
      }),
      Uf(function (c) {
        return !c;
      }),
      Te()
    );
  };
  function wh(a) {
    return function (b) {
      return b.h(
        R(function (c) {
          a.ef || db('Assertion on queued Observable output failed');
          return c;
        })
      );
    };
  }
  function xh(a) {
    return function (b) {
      return new K(function (c) {
        var d = !1,
          e = b.h(wh(a)).subscribe(
            function (f) {
              d = !0;
              c.next(f);
            },
            c.error.bind(c),
            c.complete.bind(c)
          );
        sg(
          a,
          function () {
            d || c.next(null);
          },
          3
        );
        return e;
      });
    };
  }
  function yh(a, b) {
    return function (c) {
      return c.h(
        X(function (d) {
          return new K(function (e) {
            function f() {
              h.disconnect();
              k.unsubscribe();
            }
            var g = a.MutationObserver;
            if (g && void 0 !== d.j) {
              var h = new g(function (l) {
                e.next(l);
              });
              h.observe(d.j, b);
              var k = d.released.subscribe(f);
              return f;
            }
          });
        })
      );
    };
  }
  var zh = {
    Jh: 0,
    Ah: 1,
    Ch: 2,
    Bh: 3,
    0: 'UNKNOWN',
    1: 'DEFER_MEASUREMENT',
    2: 'DO_NOT_DEFER_MEASUREMENT',
    3: 'DEFER_MEASUREMENT_AND_PING',
  };
  function Ah(a, b) {
    var c = b.h(yh(a, { attributes: !0 }), Y(a.i, 1));
    return P([b, c.h(Y(a.i, 1), xh(a.i))]).h(
      R(function (d) {
        return u(d).next().value;
      }),
      ig('data-google-av-dm'),
      R(Bh)
    );
  }
  function Bh(a) {
    return a && a in zh ? Number(a) : 2;
  }
  function Ch(a) {
    if (3 === a.Cg) return null;
    if (void 0 !== a.Pc) {
      var b = !1 === a.Nf ? 'n' : !1 === a.wd && a.Pc ? a.Pc : null;
      if (null !== b) return b;
    }
    return a.tc instanceof Ka
      ? 'msf'
      : a.kd instanceof La
      ? 'c'
      : !1 === a.Lf
      ? 'pv'
      : a.tc || a.kd
      ? 'x'
      : null;
  }
  var nh = J(
    U(function (a) {
      return (
        void 0 !== a.Kb &&
        void 0 !== a.ca &&
        void 0 !== a.xb &&
        void 0 !== a.xc &&
        void 0 !== a.H
      );
    }),
    U(function (a) {
      return null !== Ch(a);
    }),
    qh(
      function (a) {
        return a.hc;
      },
      function (a) {
        return a.Wa;
      }
    ),
    R(function (a) {
      if (a.Za) {
        var b = a.eb;
        b &&
          b({
            eventType: 'active-view-unmeasurable',
            eventData: '',
            destination: ['buyer'],
          });
      } else {
        var c = void 0,
          d = Ch(a);
        if ('x' === d) {
          var e,
            f = null != (e = a.tc) ? e : a.kd;
          f && ((b = f.stack), (c = f.message));
        }
        a.xb(
          Object.assign({}, a, {
            wa: a.Kb,
            ca: a.ca,
            Ic: a.xc,
            Sc: 2,
            Jc: d,
            errorMessage: c,
            xe: b,
          }),
          rh(a)
        ).forEach(function (g) {
          a.H.N(g).sendNow();
        });
      }
    }),
    Ee(1),
    Te()
  );
  function Dh(a, b) {
    return 'string' === typeof a
      ? encodeURIComponent(a)
      : 'number' === typeof a
      ? String(a)
      : Array.isArray(a)
      ? a
          .map(function (c) {
            return Dh(c, b);
          })
          .join(',')
      : a instanceof Xa
      ? a.toString()
      : a && 'function' === typeof a.aa
      ? Dh(a.ia(b).value, b)
      : !0 === a
      ? '1'
      : !1 === a
      ? '0'
      : void 0 === a || null === a
      ? null
      : [a.top, a.left, a.top + a.height, a.left + a.width].join();
  }
  function Eh(a, b) {
    a = Object.entries(a)
      .map(function (c) {
        var d = u(c);
        c = d.next().value;
        d = d.next().value;
        d = Dh(d, b);
        return null === d ? '' : c + '=' + d;
      })
      .filter(function (c) {
        return '' !== c;
      });
    return a.length ? a.join('&') : '';
  }
  function uh(a, b) {
    var c = a.ca(a),
      d = Eh(c, b);
    return d
      ? tb(a.wa, function (e) {
          e = 0 <= e.indexOf('?') ? e : e + '?';
          e = 0 <= '?&'.indexOf(e.slice(-1)) ? e : e + '&';
          return e + d;
        })
      : a.wa;
  }
  function Fh(a, b) {
    return tb(a, function (c) {
      if ('string' === typeof b.ae) {
        var d = '&' + Eh({ uach: b.ae }, new Map());
        return '&adurl=' == c.substring(c.length - 7)
          ? c.substring(0, c.length - 7) + d + '&adurl='
          : c + d;
      }
      return c;
    });
  }
  var lh = J(
    U(function (a) {
      return (
        void 0 !== a.ca &&
        void 0 !== a.Kb &&
        void 0 !== a.xb &&
        void 0 !== a.xc &&
        void 0 !== a.qf &&
        void 0 !== a.H
      );
    }),
    Uf(function (a) {
      return void 0 === a.qd;
    }),
    R(function (a) {
      return Object.assign({}, a, { Yd: rh(a) });
    }),
    U(function (a) {
      var b = a.be,
        c = a.Yd,
        d;
      return (
        !!a.Ge && (null != (d = null == b ? void 0 : b.ia(c).value) ? d : !1)
      );
    }),
    qh(
      function (a) {
        return a.ic;
      },
      function (a) {
        return a.Wa;
      }
    ),
    R(function (a) {
      var b = a.H;
      if (a.Za) {
        var c = a.eb;
        if (!c) return !1;
        c({
          eventType: 'active-view-viewable',
          eventData: '',
          destination: ['buyer'],
        });
        return !0;
      }
      c = a.xb(
        Object.assign({}, a, { wa: a.Kb, ca: a.ca, Ic: a.xc, Sc: 4, Jc: 'v' }),
        a.Yd
      );
      var d = a.ld;
      d &&
        0 < d.length &&
        a.Tc &&
        a.Tc(d, a).forEach(function (e) {
          b.N(e).sendNow();
        });
      c.forEach(function (e) {
        b.N(e).sendNow();
      });
      2 === a.Me &&
        a.Cc &&
        a
          .xb(
            Object.assign({}, a, {
              wa: a.Kb,
              ca: a.ca,
              Ic: a.qf,
              Sc: 4,
              Jc: 'v',
            }),
            a.Yd
          )
          .forEach(function (e) {
            b.N(e, { fd: a.Cc }).sendNow();
          });
      return !0;
    }),
    Uf(function (a) {
      return !a;
    }),
    Te()
  );
  var Gh = function (a, b) {
    this.a = a;
    this.b = b;
    if (a.clock.timeline !== b.clock.timeline) throw Error();
  };
  Gh.prototype.Z = function (a) {
    return a instanceof Gh ? this.a.Z(a.a) && this.b.Z(a.b) : !1;
  };
  Gh.prototype.ha = function (a) {
    var b = this.a.ha(a).value,
      c = this.b.ha(a).value;
    return { timestamp: a, value: [b, c] };
  };
  q.Object.defineProperties(Gh.prototype, {
    active: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.a.active || this.b.active;
      },
    },
    clock: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.a.clock;
      },
    },
    D: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        var a = this.a.D.timestamp.maximum(this.b.D.timestamp),
          b = this.a.D.timestamp.equals(a)
            ? this.a.D.value
            : this.a.ha(a).value,
          c = this.b.D.timestamp.equals(a)
            ? this.b.D.value
            : this.b.ha(a).value;
        return { timestamp: a, value: [b, c] };
      },
    },
  });
  var Hh = function (a, b) {
    this.input = a;
    this.Fc = b;
    this.D = {
      timestamp: this.input.D.timestamp,
      value: this.Fc(this.input.D.value),
    };
  };
  Hh.prototype.Z = function (a) {
    return a instanceof Hh ? this.input.Z(a.input) && this.Fc === a.Fc : !1;
  };
  Hh.prototype.ha = function (a) {
    a = this.input.ha(a);
    return { timestamp: a.timestamp, value: this.Fc(a.value) };
  };
  q.Object.defineProperties(Hh.prototype, {
    active: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.input.active;
      },
    },
    clock: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.input.clock;
      },
    },
  });
  function Ih(a, b, c) {
    c =
      void 0 === c
        ? function (d, e) {
            return d === e;
          }
        : c;
    return a.timestamp.equals(b.timestamp) && c(a.value, b.value);
  }
  var Jh = function (a, b, c) {
    this.clock = a;
    this.D = b;
    this.active = c;
  };
  Jh.prototype.Z = function (a) {
    return a instanceof Jh
      ? this.active === a.active &&
          this.clock.timeline === a.clock.timeline &&
          Ih(this.D, a.D)
      : !1;
  };
  Jh.prototype.ha = function (a) {
    return {
      timestamp: a,
      value: this.D.value + (this.active ? Ya(a, this.D.timestamp) : 0),
    };
  };
  var Kh = function () {};
  Kh.prototype.aa = function () {
    return this.ha(this.clock.now());
  };
  Kh.prototype.ia = function (a) {
    var b;
    a = null != (b = a.get(this.clock.timeline)) ? b : this.clock.now();
    return this.ha(a);
  };
  Kh.prototype.map = function (a) {
    return new Lh(this, a);
  };
  Kh.prototype.ma = function (a) {
    return new Mh(this, a);
  };
  var Mh = function () {
    Gh.apply(this, arguments);
    this.map = Kh.prototype.map;
    this.ma = Kh.prototype.ma;
    this.aa = Kh.prototype.aa;
    this.ia = Kh.prototype.ia;
  };
  v(Mh, Gh);
  var Nh = function () {
    Jh.apply(this, arguments);
    this.map = Kh.prototype.map;
    this.ma = Kh.prototype.ma;
    this.aa = Kh.prototype.aa;
    this.ia = Kh.prototype.ia;
  };
  v(Nh, Jh);
  var Lh = function () {
    Hh.apply(this, arguments);
    this.map = Kh.prototype.map;
    this.ma = Kh.prototype.ma;
    this.aa = Kh.prototype.aa;
    this.ia = Kh.prototype.ia;
  };
  v(Lh, Hh);
  var Oh = function (a, b) {
    this.D = b;
    this.aa = Kh.prototype.aa;
    this.ia = Kh.prototype.ia;
    this.map = Kh.prototype.map;
    this.ma = Kh.prototype.ma;
    this.clock = a;
  };
  Oh.prototype.Z = function (a) {
    return a.active;
  };
  Oh.prototype.ha = function () {
    return this.D;
  };
  q.Object.defineProperties(Oh.prototype, {
    active: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return !1;
      },
    },
  });
  var Ph = { left: 0, top: 0, width: 0, height: 0 };
  function Qh(a, b) {
    return (
      a.left === b.left &&
      a.top === b.top &&
      a.width === b.width &&
      a.height === b.height
    );
  }
  function Rh(a, b) {
    return {
      left: Math.max(a.left, b.left),
      top: Math.max(a.top, b.top),
      width: Math.max(
        0,
        Math.min(a.left + a.width, b.left + b.width) - Math.max(a.left, b.left)
      ),
      height: Math.max(
        0,
        Math.min(a.top + a.height, b.top + b.height) - Math.max(a.top, b.top)
      ),
    };
  }
  function Sh(a, b) {
    return {
      left: Math.round(a.left + b.x),
      top: Math.round(a.top + b.y),
      width: a.width,
      height: a.height,
    };
  }
  function Th(a, b, c, d) {
    var e = Object.keys(c).map(function (h) {
        return h;
      }),
      f = e.filter(function (h) {
        var k = c[h];
        h = d[h];
        return k instanceof Z && h instanceof Z && k.value === h.value;
      }),
      g = f.reduce(function (h, k) {
        var l = {};
        return Object.assign({}, h, ((l[k] = c[k]), l));
      }, {});
    return e.reduce(function (h, k) {
      if (0 <= f.indexOf(k)) return h;
      var l = {};
      return Object.assign(
        {},
        h,
        ((l[k] = b.h(
          X(function (p) {
            return (p = p ? c[k] : d[k]) &&
              (p instanceof K ||
                ('function' === typeof p.ob &&
                  'function' === typeof p.subscribe))
              ? p
              : p.U(a);
          })
        )),
        l)
      );
    }, g);
  }
  function Uh(a) {
    return J(
      R(function () {
        return !0;
      }),
      W(!1),
      Y(a, 1)
    );
  }
  var Vh = { yh: 'asmreq', zh: 'asmres' };
  var Wh = function (a) {
    Xc.call(this, a);
  };
  v(Wh, Xc);
  Wh.prototype.gf = function (a) {
    sc(this, 1, a);
  };
  var vc = function (a) {
    Xc.call(this, a);
  };
  v(vc, Xc);
  var Xh = function (a) {
    Xc.call(this, a);
  };
  v(Xh, Xc);
  Xh.prototype.gf = function (a) {
    sc(this, 1, a);
  };
  var Yh = Yc(Xh);
  function Zh(a, b) {
    var c = void 0 === c ? $h(a) : c;
    var d = new MessageChannel();
    b = b.h(
      R(function (f) {
        return Number(f);
      }),
      U(function (f) {
        return !isNaN(f) && 0 !== f;
      }),
      Yf(function (f) {
        var g = new Wh();
        g.gf(f);
        f = { type: 'asmreq', payload: g.vb() };
        c.postMessage(f, '*', [d.port2]);
      }),
      Ee(1)
    );
    var e = ai(a, d.port1).h(
      U(function (f) {
        return 'object' === typeof f.data;
      }),
      R(function (f) {
        var g = f.data,
          h = Object.values(Vh).includes(g.type);
        g = 'string' === typeof g.payload;
        if (!h || !g || 'asmres' !== f.data.type) return null;
        try {
          return Yh(f.data.payload);
        } catch (k) {
          return null;
        }
      }),
      U(function (f) {
        return null !== f;
      }),
      R(function (f) {
        return f;
      })
    );
    return b.h(
      X(function (f) {
        return Q(f).h(ee(e));
      }),
      U(function (f) {
        var g = u(f);
        f = g.next().value;
        g = g.next().value;
        return null != qc(g, 1) ? zc(qc(g, 1), 0) === f : !1;
      }),
      R(function (f) {
        f = u(f);
        f.next();
        return f.next().value;
      }),
      ug(a.i)
    );
  }
  function bi(a, b, c) {
    var d = b.Mb.h(
      Ee(1),
      X(function () {
        return Zh(a, c);
      }),
      U(function (f) {
        var g = qc(f, 2);
        return (
          zc(null == g ? g : !!g, !1) &&
          void 0 !== uc(f, vc, !1) &&
          null != qc(f, 4) &&
          null != qc(f, 5)
        );
      }),
      Ee(1),
      ug(a.i)
    );
    b = d.h(
      R(function (f) {
        return { x: Ac(xc(f), 2), y: Ac(xc(f), 1) };
      }),
      S(function (f, g) {
        return f.x === g.x && f.y === g.y;
      }),
      Y(a.i, 1)
    );
    var e = d.h(
      R(function (f) {
        return Ac(f, 4);
      }),
      Y(a.i, 1)
    );
    d = d.h(
      R(function (f) {
        return Ac(f, 5);
      }),
      Y(a.i, 1)
    );
    return { ng: e, Df: b, yg: d };
  }
  function ci(a, b) {
    return b.Mb.h(
      Ee(1),
      R(function () {
        return a.l.now().round();
      })
    );
  }
  function di(a, b) {
    var c = a.Ad().h(
      R(function () {
        return 'b';
      })
    );
    return yf(b, c).h(Ee(1), Y(a.i, 1));
  }
  function ei(a, b) {
    return b.h(
      R(function (c) {
        return new Oh(a.l, { timestamp: a.l.now(), value: c });
      })
    );
  }
  function fi(a) {
    var b = Math.pow(10, 2);
    return Math.round(a * b) / b;
  }
  var gi = R(function (a) {
    return [a.value.J.width, a.value.J.height];
  });
  var ii = {
    R: 'ns',
    V: Ph,
    J: Ph,
    O: new V(),
    K: 'ns',
    F: Ph,
    M: Ph,
    W: { x: 0, y: 0 },
  };
  function ji(a, b) {
    return (
      Qh(a.J, b.J) &&
      Qh(a.F, b.F) &&
      Qh(a.V, b.V) &&
      Qh(a.M, b.M) &&
      a.K === b.K &&
      a.O === b.O &&
      a.R === b.R &&
      a.W.x === b.W.x &&
      a.W.y === b.W.y
    );
  }
  function ki(a) {
    return function (b) {
      var c;
      return b.h(
        Yf(function (d) {
          return void (c = d.timestamp);
        }),
        R(function (d) {
          return d.value;
        }),
        a,
        R(function (d) {
          return { timestamp: c, value: d };
        })
      );
    };
  }
  var li = function (a) {
      return (a.M.width * a.M.height) / (a.F.width * a.F.height);
    },
    mi = ki(
      J(
        R(function (a) {
          var b;
          return null != (b = a.sc) ? b : li(a);
        }),
        R(function (a) {
          return isFinite(a) ? a : 0;
        })
      )
    ),
    ni = ki(
      J(
        R(function (a) {
          var b;
          return null != (b = a.sc) ? b : li(a);
        }),
        R(function (a) {
          return isFinite(a) ? a : -1;
        })
      )
    );
  function oi(a, b) {
    return 1 <= a ? !0 : 0 >= a ? !1 : a >= b;
  }
  function pi(a) {
    return function (b) {
      return b.h(
        ag(a),
        R(function (c) {
          var d = u(c);
          c = d.next().value;
          d = d.next().value;
          return { timestamp: c.timestamp, value: oi(c.value, d) };
        })
      );
    };
  }
  var qi = R(function (a) {
    if ('omid' === a.value.R) {
      if ('nio' === a.value.K) return 'omio';
      if ('geo' === a.value.K) return 'omgeo';
    }
    return 'geo' === a.value.K || 'nio' === a.value.K ? a.value.R : a.value.K;
  });
  function ri() {
    return J(
      U(function (a, b) {
        return 0 < b;
      }),
      si,
      W(-1),
      S()
    );
  }
  var si = J(
    U(function (a) {
      return !isNaN(a);
    }),
    cf(function (a, b) {
      return isNaN(a) ? b : Math.min(a, b);
    }, NaN),
    S()
  );
  var ti = ki(
    J(
      R(function (a) {
        return (a.M.width * a.M.height) / (a.V.width * a.V.height);
      }),
      R(function (a) {
        return isFinite(a) ? Math.min(1, a) : 0;
      })
    )
  );
  function ui(a, b, c) {
    return a
      ? P([b, c]).h(
          U(function (d) {
            var e = u(d);
            d = e.next().value;
            e = e.next().value;
            return d.timestamp.equals(e.timestamp);
          }),
          R(function (d) {
            var e = u(d);
            d = e.next().value;
            e = e.next().value;
            return d.value > e.value ? d : e;
          })
        )
      : b;
  }
  function vi(a) {
    return function (b) {
      var c = b.h(mi),
        d = b.h(ti);
      return a instanceof K
        ? a.h(
            X(function (e) {
              return ui(e, c, d);
            })
          )
        : ui(a.value, c, d);
    };
  }
  var wi = J(
    ki(
      R(function (a) {
        a = a.sc
          ? (a.sc * a.F.width * a.F.height) / (a.J.width * a.J.height)
          : (a.M.width * a.M.height) / (a.J.width * a.J.height);
        return isFinite(a) ? a : 0;
      })
    )
  );
  function xi(a, b, c, d) {
    var e = d.uc,
      f = d.td,
      g = d.rf,
      h = d.me,
      k = d.Kd,
      l = d.Ve;
    d = d.wc;
    b = yi(a, c, b);
    c = zi(a, c);
    var p = Ai(a, e, l, b),
      t = p.h(
        R(function (z) {
          return z.value;
        }),
        S(),
        Y(a, 1),
        cf(function (z, T) {
          return Math.max(z, T);
        }, 0)
      ),
      n = p.h(
        R(function (z) {
          return z.value;
        }),
        ri(),
        Y(a, 1)
      ),
      w = b.h(
        ni,
        R(function (z) {
          return z.value;
        }),
        Ee(2),
        S(),
        Y(a, 1)
      );
    g = Bi(a, b, g, h);
    var A = g.h(
      W(!1),
      S(),
      R(function (z) {
        return z ? k : f;
      })
    );
    h = p.h(pi(A), S(), Y(a, 1));
    var y = P([h, b]).h(
      U(function (z) {
        var T = u(z);
        z = T.next().value;
        T = T.next().value;
        return z.timestamp.equals(T.timestamp);
      }),
      R(function (z) {
        var T = u(z);
        z = T.next().value;
        T = T.next().value;
        return { visible: z.value, geometry: T.value.F };
      }),
      cf(
        function (z, T) {
          return !T.visible && z.visible ? z : T;
        },
        { visible: !1, geometry: Ph }
      ),
      R(function (z) {
        return z.geometry;
      }),
      W(Ph),
      Y(a, 1),
      S(Qh)
    );
    l = l instanceof K ? l.h(S(), $e()) : lg;
    A = P([l, A]).h($e());
    var C = b.h(
        U(function (z) {
          return 'ns' !== z.value.R && 'ns' !== z.value.K;
        }),
        cf(function (z) {
          return z + 1;
        }, 0),
        W(0),
        Y(a, 1)
      ),
      G = c.h($e(!0), W(!1), Y(a, 1));
    G = P([d, G]).h(
      R(function (z) {
        var T = u(z);
        z = T.next().value;
        T = T.next().value;
        return z && !T;
      }),
      Y(a, 1)
    );
    var N = b.h(wi, S()),
      sa = N.h(
        R(function (z) {
          return z.value;
        }),
        cf(function (z, T) {
          return Math.max(z, T);
        }, 0),
        S(),
        Y(a, 1)
      ),
      B = N.h(
        R(function (z) {
          return z.value;
        }),
        ri(),
        Y(a, 1)
      );
    return {
      Ud: l,
      Vb: A,
      Ba: {
        Wg: b,
        Xe: b.h(qi),
        qc: y.h(S(Qh)),
        visible: h.h(S(Ih)),
        Xd: p.h(S(Ih)),
        Ue: t,
        Gg: n,
        pe: b.h(gi, S(xb)),
        sh: N,
        Ag: sa,
        Fg: B,
        tc: c,
        O: new Z(new V()).U(a),
        Se: g,
        uc: e,
        wc: d,
        wd: G,
        th: C,
        xg: w,
      },
    };
  }
  function zi(a, b) {
    return b.h(
      U(function () {
        return !1;
      }),
      R(function (c) {
        return c;
      }),
      Zd(function (c) {
        return new Z(c).U(a);
      })
    );
  }
  function yi(a, b, c) {
    return b.h(rf(lg), Y(a, 1)).h(
      S(function (d, e) {
        return Ih(d, e, ji);
      }),
      W({ timestamp: c.now(), value: ii }),
      Y(a, 1)
    );
  }
  function Ai(a, b, c, d) {
    c = d.h(
      vi(c),
      ki(
        R(function (e) {
          return fi(e);
        })
      ),
      Y(a, 1)
    );
    return b instanceof Z
      ? c
      : P([c, b]).h(
          R(function (e) {
            var f = u(e);
            e = f.next().value;
            f = f.next().value;
            return {
              timestamp: f.timestamp.maximum(e.timestamp),
              value: f.value ? 0 : e.value,
            };
          }),
          S(Ih),
          Y(a, 10)
        );
  }
  function Bi(a, b, c, d) {
    b = [
      b.h(
        R(function (e) {
          return 242500 <= e.value.F.width * e.value.F.height;
        })
      ),
    ];
    c instanceof K &&
      b.push(
        c.h(
          R(function (e) {
            return !!e;
          })
        )
      );
    c = P(b);
    return d
      ? c.h(
          R(function (e) {
            return e.some(function (f) {
              return f;
            });
          }),
          W(!1),
          S(),
          Y(a, 1)
        )
      : new Z(!1).U(a);
  }
  function Ci(a) {
    return 0 >= a.length
      ? ue
      : P(
          a.map(function (b) {
            var c = 0;
            return b.h(
              R(function (d) {
                return { index: c++, value: d };
              })
            );
          })
        ).h(
          U(function (b) {
            return b.every(function (c) {
              return c.index === b[0].index;
            });
          }),
          R(function (b) {
            return b.map(function (c) {
              return c.value;
            });
          })
        );
  }
  function Di(a, b) {
    return function (c) {
      return Ci(
        b.map(function (d) {
          return c.h(a(d));
        })
      );
    };
  }
  function Ei(a, b) {
    a.za && (a.cb = a.za);
    a.za = b;
    a.cb && a.cb.value
      ? ((b = Math.max(0, Ya(b.timestamp, a.cb.timestamp))),
        (a.totalTime += b),
        (a.ga += b))
      : (a.ga = 0);
    return a;
  }
  function Fi(a) {
    return J(
      cf(Ei, { totalTime: 0, ga: 0 }),
      R(function (b) {
        return new Nh(
          a,
          { timestamp: b.za.timestamp, value: b.totalTime },
          b.za.value
        );
      })
    );
  }
  function Gi(a) {
    return J(
      cf(Ei, { totalTime: 0, ga: 0 }),
      R(function (b) {
        return new Nh(
          a,
          { timestamp: b.za.timestamp, value: b.ga },
          b.za.value
        );
      })
    );
  }
  function Hi(a) {
    return J(
      Gi(a),
      R(function (b) {
        return b.map(function (c) {
          return Math.round(c);
        });
      })
    );
  }
  function Ii(a) {
    var b = new Nh(a, { timestamp: a.now(), value: 0 }, !1);
    return J(
      Gi(a),
      cf(function (c, d) {
        return c.D.value > d.D.value ? new Nh(a, c.D, !1) : d;
      }, b),
      R(function (c) {
        return c.map(function (d) {
          return Math.round(d);
        });
      })
    );
  }
  function Ji(a) {
    return function (b) {
      return J(pi(Q(b)), Ii(a));
    };
  }
  function Ki(a) {
    return function (b) {
      return J(
        ki(
          R(function (c) {
            return oi(c, b);
          })
        ),
        Fi(a),
        R(function (c) {
          return c.map(function (d) {
            return Math.round(d);
          });
        })
      );
    };
  }
  function Li(a) {
    return a
      .map(function (b) {
        return b.map(function (c) {
          return [c];
        });
      })
      .reduce(function (b, c) {
        return b.ma(c).map(function (d) {
          return d.flat();
        });
      });
  }
  function Mi(a, b) {
    return a.ma(b).map(function (c) {
      var d = u(c);
      c = d.next().value;
      d = d.next().value;
      return c - d;
    });
  }
  function Ni(a, b, c, d, e, f) {
    var g = Oi;
    if (1 < g.length)
      for (var h = 0; h < g.length - 1; h++) if (g[h] < g[h + 1]) throw Error();
    h = f.h(
      W(void 0),
      X(function () {
        return d.h(Hi(a));
      }),
      S(function (k, l) {
        return k.Z(l);
      }),
      Y(b, 1)
    );
    f = f.h(
      W(void 0),
      X(function () {
        return d.h(Ii(a));
      }),
      S(function (k, l) {
        return k.Z(l);
      }),
      Y(b, 1)
    );
    return {
      Ob: e.h(
        W(void 0),
        X(function () {
          return c.h(Di(Ji(a), g));
        }),
        R(Li),
        S(function (k, l) {
          return k.Z(l);
        }),
        Y(b, 1)
      ),
      Yb: e.h(
        W(void 0),
        X(function () {
          return c.h(
            Di(Ki(a), g),
            R(function (k) {
              return k.map(function (l, p) {
                return 0 < p ? Mi(l, k[p - 1]) : l;
              });
            })
          );
        }),
        R(Li),
        S(function (k, l) {
          return k.Z(l);
        }),
        Y(b, 1)
      ),
      Nb: f,
      Ua: h.h(
        S(function (k, l) {
          return k.Z(l);
        }),
        Y(b, 1)
      ),
    };
  }
  var Pi = function (a) {
      this.l = a;
      this.Qc = null;
      this.timeout = new V();
    },
    Ri = function (a, b) {
      Qi(a);
      a.Qc = a.l.setTimeout(function () {
        return void a.timeout.next();
      }, b);
    },
    Qi = function (a) {
      null !== a.Qc && (a.l.clearTimeout(a.Qc), (a.Qc = null));
    };
  function Si(a, b, c, d) {
    var e = Ti.nf,
      f = new Pi(b);
    c = c
      .h(
        W(void 0),
        X(function () {
          Qi(f);
          return d;
        })
      )
      .h(
        R(function (g) {
          Qi(f);
          var h = g.D,
            k = g.active;
          h.value >= e ||
            !k ||
            ((k = b.now()),
            (k = Math.max(0, Ya(k, h.timestamp))),
            Ri(f, Math.max(0, e - h.value - k)));
          return g.map(function (l) {
            return l >= e;
          });
        })
      );
    return P([c, ff(f.timeout, Q(void 0))]).h(
      R(function (g) {
        return u(g).next().value;
      }),
      Uf(function (g) {
        return !g.aa().value;
      }, !0),
      Y(a, 1)
    );
  }
  function Ui(a, b, c, d) {
    var e = d.uc,
      f = d.td,
      g = d.rf,
      h = d.me,
      k = d.Kd,
      l = d.Ve;
    d = d.wc;
    b = Vi(a, c, b);
    c = Wi(a, c);
    var p = Xi(a, e, l, b),
      t = p.h(
        R(function (B) {
          return B.value;
        }),
        S(),
        Y(a, 1),
        cf(function (B, z) {
          return Math.max(B, z);
        }, 0)
      ),
      n = p.h(
        R(function (B) {
          return B.value;
        }),
        ri(),
        Y(a, 1)
      ),
      w = b.h(
        ni,
        R(function (B) {
          return B.value;
        }),
        Ee(2),
        S(),
        Y(a, 1)
      );
    g = Yi(a, b, g, h);
    var A = g.h(
      W(!1),
      S(),
      R(function (B) {
        return B ? k : f;
      })
    );
    h = p.h(pi(A), S(), Y(a, 1));
    var y = P([h, b]).h(
      U(function (B) {
        var z = u(B);
        B = z.next().value;
        z = z.next().value;
        return B.timestamp.equals(z.timestamp);
      }),
      R(function (B) {
        var z = u(B);
        B = z.next().value;
        z = z.next().value;
        return { visible: B.value, geometry: z.value.F };
      }),
      cf(
        function (B, z) {
          return !z.visible && B.visible ? B : z;
        },
        { visible: !1, geometry: Ph }
      ),
      R(function (B) {
        return B.geometry;
      }),
      W(Ph),
      Y(a, 1),
      S(Qh)
    );
    l = l instanceof K ? l.h(S(), $e()) : lg;
    A = P([l, A]).h($e());
    var C = b.h(
        U(function (B) {
          return 'ns' !== B.value.R && 'ns' !== B.value.K;
        }),
        cf(function (B) {
          return B + 1;
        }, 0),
        W(0),
        Y(a, 1)
      ),
      G = c.h($e(!0), W(!1), Y(a, 1));
    G = P([d, G]).h(
      R(function (B) {
        var z = u(B);
        B = z.next().value;
        z = z.next().value;
        return B && !z;
      }),
      Y(a, 1)
    );
    var N = b.h(wi, S()),
      sa = N.h(
        R(function (B) {
          return B.value;
        }),
        cf(function (B, z) {
          return Math.max(B, z);
        }, 0),
        S(),
        Y(a, 1)
      );
    a = N.h(
      R(function (B) {
        return B.value;
      }),
      ri(),
      Y(a, 1)
    );
    return {
      Ud: l,
      Vb: A,
      Ba: {
        Wg: b,
        Xe: b.h(qi),
        qc: y.h(S(Qh)),
        visible: h.h(S(Ih)),
        Xd: p.h(S(Ih)),
        Ue: t,
        Gg: n,
        pe: b.h(gi, S(xb)),
        sh: N,
        Ag: sa,
        Fg: a,
        tc: c,
        O: b.h(
          R(function (B) {
            return B.value.O;
          })
        ),
        Se: g,
        uc: e,
        wc: d,
        wd: G,
        th: C,
        xg: w,
      },
    };
  }
  function Wi(a, b) {
    return b.h(
      U(function () {
        return !1;
      }),
      R(function (c) {
        return c;
      }),
      Zd(function (c) {
        return new Z(c).U(a);
      })
    );
  }
  function Vi(a, b, c) {
    return b.h(rf(lg), Y(a, 1)).h(
      S(function (d, e) {
        return Ih(d, e, ji);
      }),
      W({ timestamp: c.now(), value: ii }),
      Y(a, 1)
    );
  }
  function Xi(a, b, c, d) {
    c = d.h(
      vi(c),
      ki(
        R(function (e) {
          return fi(e);
        })
      ),
      Y(a, 1)
    );
    return b instanceof Z
      ? c
      : P([c, b]).h(
          R(function (e) {
            var f = u(e);
            e = f.next().value;
            f = f.next().value;
            return {
              timestamp: f.timestamp.maximum(e.timestamp),
              value: f.value ? 0 : e.value,
            };
          }),
          S(Ih),
          Y(a, 1)
        );
  }
  function Yi(a, b, c, d) {
    b = [
      b.h(
        R(function (e) {
          return 242500 <= e.value.F.width * e.value.F.height;
        })
      ),
    ];
    c instanceof K &&
      b.push(
        c.h(
          R(function (e) {
            return !!e;
          })
        )
      );
    c = P(b);
    return d
      ? c.h(
          R(function (e) {
            return e.some(function (f) {
              return f;
            });
          }),
          W(!1),
          S(),
          Y(a, 1)
        )
      : new Z(!1).U(a);
  }
  var Zi = J(
    ig('data-google-av-itpl'),
    R(function (a) {
      return Number(a);
    }),
    R(function (a) {
      return isNaN(a) ? 1 : a;
    })
  );
  var aj = R($i);
  function $i(a) {
    var b = Number(hg(a, 'data-google-av-rs'));
    if (!isNaN(b) && 0 !== b) return b;
    var c;
    return (a = null == (c = a.j) ? void 0 : c.id)
      ? 0 == a.lastIndexOf('DfaVisibilityIdentifier', 0)
        ? 6
        : 0 == a.lastIndexOf('YtKevlarVisibilityIdentifier', 0)
        ? 15
        : 0 == a.lastIndexOf('YtSparklesVisibilityIdentifier', 0)
        ? 17
        : 0 == a.lastIndexOf('YtKabukiVisibilityIdentifier', 0)
        ? 18
        : 0
      : 0;
  }
  function bj(a, b) {
    return J(
      ig('data-google-av-metadata'),
      R(function (c) {
        if (null === c) return b(void 0);
        c = c
          .split('&')
          .map(function (d) {
            return d.split('=');
          })
          .filter(function (d) {
            return d[0] === a;
          });
        return 0 === c.length ? b(void 0) : b(c[0].slice(1).join('='));
      })
    );
  }
  var cj = {
      xh: 'addEventListener',
      Dh: 'getMaxSize',
      Eh: 'getScreenSize',
      Fh: 'getState',
      Gh: 'getVersion',
      Ih: 'removeEventListener',
      Hh: 'isViewable',
    },
    ej = function (a, b) {
      b =
        void 0 === b
          ? function (f) {
              return dj(f);
            }
          : b;
      this.qa = null;
      this.pg = new V();
      var c = a.Ed,
        d = !a.nb;
      if (c && d) {
        var e = a.global.top.mraid;
        if (e) {
          this.oc = b(e);
          this.qa = e;
          this.gb = 3;
          return;
        }
      }
      (a = a.global.mraid)
        ? ((this.oc = b(a)), (this.qa = a), (this.gb = c ? (d ? 2 : 1) : 0))
        : ((this.gb = -1), (this.oc = 2));
    };
  ej.prototype.addEventListener = function (a, b) {
    return this.tb('addEventListener', a, b);
  };
  ej.prototype.removeEventListener = function (a, b) {
    return this.tb('removeEventListener', a, b);
  };
  ej.prototype.Ce = function () {
    var a = this.tb('getVersion');
    return 'string' === typeof a ? a : '';
  };
  ej.prototype.getState = function () {
    var a = this.tb('getState');
    return 'string' === typeof a ? a : '';
  };
  var fj = function (a) {
      a = a.tb('isViewable');
      return 'boolean' === typeof a ? a : !1;
    },
    gj = function (a) {
      if (a.qa)
        return (a = a.qa.AFMA_LIDAR), 'string' === typeof a ? a : void 0;
    },
    dj = function (a) {
      return a
        ? a.IS_GMA_SDK
          ? Object.values(cj).every(function (b) {
              return 'function' === typeof a[b];
            })
            ? 0
            : 1
          : 2
        : 1;
    };
  ej.prototype.tb = function (a) {
    var b = x.apply(1, arguments);
    if (this.qa)
      try {
        return this.qa[a].apply(this.qa, ea(b));
      } catch (c) {
        this.pg.next(a);
      }
  };
  q.Object.defineProperties(ej.prototype, {
    we: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        if (this.qa) {
          var a = this.qa.AFMA_LIDAR_EXP_1;
          return void 0 === a ? void 0 : !!a;
        }
      },
      set: function (a) {
        this.qa && (this.qa.AFMA_LIDAR_EXP_1 = a);
      },
    },
  });
  function hj(a, b) {
    return -1 !== new ej(a).gb
      ? new Z(!0).U(a.i)
      : b.h(
          ig('data-google-av-inapp'),
          R(function (c) {
            return null !== c;
          }),
          Y(a.i, 1)
        );
  }
  function ij(a, b) {
    return {
      ed: b.h(ig('data-google-av-adk')),
      kc: b.h(
        ig('data-google-av-btr'),
        S(),
        R(function (c) {
          return null === c
            ? []
            : c.split('|').filter(function (d) {
                return '' !== d;
              });
        })
      ),
      ld: b.h(
        ig('data-google-av-cpmav'),
        S(),
        R(function (c) {
          return null === c
            ? []
            : c.split('|').filter(function (d) {
                return '' !== d;
              });
        })
      ),
      Qf: Ah(a, b),
      flags: b.h(ig('data-google-av-flags'), S()),
      Ma: hj(a, b),
      Hd: b.h(
        bj('cr', function (c) {
          return '1' === c;
        }),
        S()
      ),
      tg: b.h(
        bj('omid', function (c) {
          return '1' === c;
        }),
        S()
      ),
      Gd: b.h(Zi),
      metadata: b.h(ig('data-google-av-metadata')),
      Ga: b.h(aj),
      wa: b.h(og),
      wh: b.h(
        bj('la', function (c) {
          return '1' === c;
        }),
        S()
      ),
      Za: b.h(
        ig('data-google-av-turtlex'),
        R(function (c) {
          return null !== c;
        }),
        S()
      ),
      Cc: b.h(
        ig('data-google-av-vattr'),
        R(function (c) {
          return null !== c;
        }),
        S()
      ),
    };
  }
  function jj(a, b, c, d, e) {
    c = c.h(
      R(function () {
        return !1;
      })
    );
    d = P([e, d]).h(
      X(function (f) {
        f = u(f).next().value;
        return kj(b, f);
      })
    );
    return ff(Q(!1), c, d).h(S(), Y(a.i, 1));
  }
  function kj(a, b) {
    return a.h(
      R(function (c) {
        return b || 0 === c || 2 === c;
      })
    );
  }
  function lj(a) {
    var b;
    if ((b = mj(a)))
      b =
        !nj(a, 'abgcp') &&
        !nj(a, 'abgc') &&
        !('string' === typeof a.id && 'abgb' === a.id) &&
        !('string' === typeof a.id && 'mys-abgc' === a.id) &&
        !nj(a, 'cbb');
    return b;
  }
  function nj(a, b) {
    return a.classList
      ? a.classList.contains(b)
      : -1 < (' ' + a.className + ' ').indexOf(' ' + b + ' ');
  }
  function mj(a) {
    try {
      var b = a.getBoundingClientRect();
      return b && 30 <= b.height && 30 <= b.width;
    } catch (c) {
      return !1;
    }
  }
  function oj(a, b) {
    if (void 0 === a.j || !a.j.children) return a;
    for (var c = wb(a.j.children); c.length; ) {
      var d = b ? c.filter(lj) : c.filter(mj);
      if (1 === d.length) return new wg(d[0]);
      if (1 < d.length) break;
      c = zb(c, function (e) {
        return wb(e.children);
      });
    }
    return a;
  }
  function pj(a, b, c, d, e) {
    if (c) return { pc: b, fb: Q(null) };
    c = b.element.h(
      R(function (f) {
        a: if (void 0 === f.j || mj(f.j)) f = { Gc: f, fb: 'mue' };
        else {
          var g = oj(f, e);
          if (void 0 !== g.j && mj(g.j)) f = { Gc: g, fb: 'ie' };
          else {
            if (d || a.Ed)
              if (
                (g = a.document.querySelector(
                  '.GoogleActiveViewInnerContainer'
                ))
              ) {
                f = { Gc: new wg(g), fb: 'ce' };
                break a;
              }
            f = { Gc: f, fb: 'mue' };
          }
        }
        return f;
      }),
      Df()
    );
    return {
      pc: {
        Gb: b.Gb,
        element: c.h(
          R(function (f) {
            return f.Gc;
          })
        ),
      },
      fb: c.h(
        R(function (f) {
          return f.fb;
        })
      ),
    };
  }
  var qj = [33, 32],
    rj = J(
      Zi,
      R(function (a) {
        return 0 <= qj.indexOf(a);
      }),
      S()
    );
  function sj(a, b, c, d, e, f) {
    var g = c.h(
        R(function (k) {
          return 9 === k;
        })
      ),
      h = b.element.h(rj);
    c = e.h(
      U(function (k) {
        return k;
      }),
      X(function () {
        return P([g, h]);
      }),
      R(function (k) {
        k = u(k);
        var l = k.next().value;
        return !k.next().value || l;
      }),
      S()
    );
    f = P([c, d.h(S()), f]).h(
      R(function (k) {
        var l = u(k);
        k = l.next().value;
        var p = l.next().value;
        l = l.next().value;
        return pj(a, b, !k, p, l);
      }),
      xf(1),
      gf()
    );
    d = f.h(
      R(function (k) {
        return k.pc;
      })
    );
    f = f.h(
      X(function (k) {
        return k.fb;
      }),
      W(null),
      S(),
      Y(a.i, 1)
    );
    return { Da: d, Eb: f };
  }
  function tj(a) {
    var b = void 0 === b ? !1 : b;
    return J(
      X(function (c) {
        return uj(a.document, c, b);
      }),
      Y(a.i, 1)
    );
  }
  var vj = function (a, b, c, d, e, f) {
    this.Mb = b.element.h(tj(a), Y(a.i, 1));
    this.jf = jj(a, c, b.element, this.Mb, d);
    c = sj(a, b, e, d, this.jf, f);
    d = c.Eb;
    this.Da = c.Da;
    this.Eb = d;
    this.ce = ff(
      new Z(1).U(a.i),
      b.element.h(
        Ee(1),
        R(function () {
          return 2;
        }),
        Y(a.i, 1)
      ),
      this.Mb.h(
        Ee(1),
        R(function () {
          return 3;
        }),
        Y(a.i, 1)
      ),
      this.jf.h(
        U(Boolean),
        Ee(1),
        R(function () {
          return 0;
        }),
        Y(a.i, 1)
      )
    ).h(
      Uf(function (g) {
        return 0 !== g;
      }, !0),
      Y(a.i, 0)
    );
  };
  function wj(a) {
    var b = new Ka(13);
    if (1 > a.length) return { re: ue, hd: ue };
    var c = new V();
    return {
      re: a
        .slice(1)
        .reduce(function (d, e) {
          return d.h(
            Zd(function (f) {
              c.next(f);
              return e;
            })
          );
        }, a[0])
        .h(
          Zd(function (d) {
            c.next(d);
            return ve(b);
          }),
          qf(new V()),
          gf()
        ),
      hd: c,
    };
  }
  var xj = function () {};
  var yj = function (a, b) {
    this.context = a;
    this.mh = b;
  };
  v(yj, xj);
  yj.prototype.Ka = function (a, b) {
    var c = this.mh.map(function (f) {
        return f.Ka(a, b);
      }),
      d = wj(
        c.map(function (f) {
          return f.La;
        })
      ),
      e = d.hd.h(zj());
    return {
      La: d.re.h(Y(this.context.i, 1)),
      Ia: Object.assign.apply(
        Object,
        [{ Vd: e, ci: d.hd }].concat(
          ea(
            c.map(function (f) {
              return f.Ia;
            })
          )
        )
      ),
    };
  };
  var zj = function () {
    return cf(function (a, b) {
      b instanceof Ka ? a.push(b.Dg) : a.push(-1);
      return a;
    }, []);
  };
  var Aj = function (a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0;
  };
  m = Aj.prototype;
  m.clone = function () {
    return new Aj(this.x, this.y);
  };
  m.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
  };
  m.equals = function (a) {
    return (
      a instanceof Aj &&
      (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    );
  };
  m.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  m.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  m.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  m.translate = function (a, b) {
    a instanceof Aj
      ? ((this.x += a.x), (this.y += a.y))
      : ((this.x += Number(a)), 'number' === typeof b && (this.y += b));
    return this;
  };
  m.scale = function (a, b) {
    this.x *= a;
    this.y *= 'number' === typeof b ? b : a;
    return this;
  };
  var Bj = function (a, b) {
    this.width = a;
    this.height = b;
  };
  m = Bj.prototype;
  m.clone = function () {
    return new Bj(this.width, this.height);
  };
  m.toString = function () {
    return '(' + this.width + ' x ' + this.height + ')';
  };
  m.aspectRatio = function () {
    return this.width / this.height;
  };
  m.Id = function () {
    return !(this.width * this.height);
  };
  m.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  m.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  m.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  m.scale = function (a, b) {
    this.width *= a;
    this.height *= 'number' === typeof b ? b : a;
    return this;
  };
  var Ej = function (a) {
      return a ? new Cj(Dj(a)) : $a || ($a = new Cj());
    },
    Fj = function (a) {
      var b = a.scrollingElement
        ? a.scrollingElement
        : Hb || 'CSS1Compat' != a.compatMode
        ? a.body || a.documentElement
        : a.documentElement;
      a = a.parentWindow || a.defaultView;
      return Db && a.pageYOffset != b.scrollTop
        ? new Aj(b.scrollLeft, b.scrollTop)
        : new Aj(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
    },
    Gj = function (a, b, c) {
      function d(h) {
        h && b.appendChild('string' === typeof h ? a.createTextNode(h) : h);
      }
      for (var e = 1; e < c.length; e++) {
        var f = c[e];
        if (!Ga(f) || (Ha(f) && 0 < f.nodeType)) d(f);
        else {
          a: {
            if (f && 'number' == typeof f.length) {
              if (Ha(f)) {
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
          sb(g ? wb(f) : f, d);
        }
      }
    },
    Dj = function (a) {
      D(a, 'Node cannot be null or undefined.');
      return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    },
    Hj = function (a, b) {
      a && (a = a.parentNode);
      for (var c = 0; a; ) {
        D('parentNode' != a.name);
        if (b(a)) return a;
        a = a.parentNode;
        c++;
      }
      return null;
    },
    Cj = function (a) {
      this.mb = a || Da.document || document;
    };
  m = Cj.prototype;
  m.getElementsByTagName = function (a, b) {
    return (b || this.mb).getElementsByTagName(String(a));
  };
  m.createElement = function (a) {
    var b = this.mb;
    a = String(a);
    'application/xhtml+xml' === b.contentType && (a = a.toLowerCase());
    return b.createElement(a);
  };
  m.createTextNode = function (a) {
    return this.mb.createTextNode(String(a));
  };
  m.appendChild = function (a, b) {
    D(
      null != a && null != b,
      'goog.dom.appendChild expects non-null arguments'
    );
    a.appendChild(b);
  };
  m.append = function (a, b) {
    Gj(Dj(a), a, arguments);
  };
  m.canHaveChildren = function (a) {
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
  m.removeNode = function (a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null;
  };
  m.contains = function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ('undefined' != typeof a.compareDocumentPosition)
      return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
  };
  var Ij = function (a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d;
  };
  m = Ij.prototype;
  m.Bd = function () {
    return this.right - this.left;
  };
  m.yd = function () {
    return this.bottom - this.top;
  };
  m.clone = function () {
    return new Ij(this.top, this.right, this.bottom, this.left);
  };
  m.toString = function () {
    return (
      '(' +
      this.top +
      't, ' +
      this.right +
      'r, ' +
      this.bottom +
      'b, ' +
      this.left +
      'l)'
    );
  };
  m.contains = function (a) {
    return this && a
      ? a instanceof Ij
        ? a.left >= this.left &&
          a.right <= this.right &&
          a.top >= this.top &&
          a.bottom <= this.bottom
        : a.x >= this.left &&
          a.x <= this.right &&
          a.y >= this.top &&
          a.y <= this.bottom
      : !1;
  };
  m.expand = function (a, b, c, d) {
    Ha(a)
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
  m.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  m.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  m.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };
  m.translate = function (a, b) {
    a instanceof Aj
      ? ((this.left += a.x),
        (this.right += a.x),
        (this.top += a.y),
        (this.bottom += a.y))
      : (eb(a),
        (this.left += a),
        (this.right += a),
        'number' === typeof b && ((this.top += b), (this.bottom += b)));
    return this;
  };
  m.scale = function (a, b) {
    b = 'number' === typeof b ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= b;
    this.bottom *= b;
    return this;
  };
  var Jj = function (a) {
    try {
      return a.getBoundingClientRect();
    } catch (b) {
      return { left: 0, top: 0, right: 0, bottom: 0 };
    }
  };
  function Kj(a, b) {
    return function (c) {
      return function (d) {
        var e = d.h(qf(new V()), gf());
        d = c.element.h(S());
        e = e.h(
          R(function (f) {
            return f.value;
          })
        );
        return P([d, e, b]).h(
          R(function (f) {
            var g = u(f);
            f = g.next().value;
            var h = g.next().value;
            g = g.next().value;
            if (void 0 === f.j)
              var k = { top: 0, left: 0, width: 0, height: 0 };
            else {
              k = f.j.getBoundingClientRect();
              var l = f.j,
                p = a.global,
                t = new Aj(0, 0);
              var n = (n = Dj(l)) ? n.parentWindow || n.defaultView : window;
              if (Bb(n, 'parent')) {
                do {
                  if (n == p) {
                    var w = l,
                      A = Dj(w);
                    hb(w, 'Parameter is required');
                    var y = new Aj(0, 0);
                    var C = A ? Dj(A) : document;
                    C =
                      !Db ||
                      9 <= Number(Qb) ||
                      'CSS1Compat' == Ej(C).mb.compatMode
                        ? C.documentElement
                        : C.body;
                    w != C &&
                      ((w = Jj(w)),
                      (A = Fj(Ej(A).mb)),
                      (y.x = w.left + A.x),
                      (y.y = w.top + A.y));
                  } else (y = D(l)), (y = Jj(y)), (y = new Aj(y.left, y.top));
                  t.x += y.x;
                  t.y += y.y;
                } while (
                  n &&
                  n != p &&
                  n != n.parent &&
                  (l = n.frameElement) &&
                  (n = n.parent)
                );
              }
              k = { top: t.y, left: t.x, width: k.width, height: k.height };
            }
            k = Sh(k, h.W);
            p = Rh(k, h.V);
            t = a.l.now();
            n = Object;
            l = n.assign;
            if (2 !== g || a.nb || 0 >= p.width || 0 >= p.height) var G = !1;
            else
              try {
                var N = a.document.elementFromPoint(
                  p.left + p.width / 2,
                  p.top + p.height / 2
                );
                G = N ? !Lj(N, f) : !1;
              } catch (sa) {
                G = !1;
              }
            return {
              timestamp: t,
              value: l.call(n, {}, h, { K: 'geo', M: G ? ii.M : p, F: k }),
            };
          }),
          ug(a.i)
        );
      };
    };
  }
  function Lj(a, b, c) {
    c = void 0 === c ? 0 : c;
    return void 0 === a.j || void 0 === b.j
      ? !1
      : a.j === b.j ||
        Hj(b.j, function (d) {
          return d === a.j;
        })
      ? !0
      : b.j.ownerDocument &&
        b.j.ownerDocument.defaultView &&
        b.j.ownerDocument.defaultView === b.j.ownerDocument.defaultView.top
      ? !1
      : 10 > c &&
        b.j.ownerDocument &&
        b.j.ownerDocument.defaultView &&
        b.j.ownerDocument.defaultView.frameElement
      ? Lj(a, new wg(b.j.ownerDocument.defaultView.frameElement), c + 1)
      : !0;
  }
  function Mj(a, b) {
    return a && 0 === b ? 15 : a || 1 !== b ? null : 14;
  }
  function Nj(a, b, c) {
    return b instanceof K
      ? b.h(
          X(function (d) {
            return (d = Mj(d, c)) ? ve(new Ka(d)) : a;
          })
        )
      : (b = Mj(b.value, c))
      ? ve(new Ka(b))
      : a;
  }
  function Oj(a, b) {
    var c = a.h(qf(new V()), gf());
    return X(function (d) {
      return c.h(b(d));
    });
  }
  function Pj(a, b) {
    var c =
      void 0 === c
        ? function () {
            var f = (Qj(a.global) ? a.global.innerWidth : 0) || a.Bd() || 0,
              g = (Qj(a.global) ? a.global.innerHeight : 0) || a.yd() || 0;
            return { left: 0, top: 0, width: f, height: g };
          }
        : c;
    var d = a.nb
      ? Rj(a.document)
        ? a.sg
          ? null
          : ve(new Ka(5))
        : ve(new Ka(4))
      : ve(new Ka(3));
    if (d) return d;
    var e = new V();
    return ff(Q({}), b, e).h(
      R(function () {
        var f = Sj(a, c);
        return {
          timestamp: a.l.now(),
          value: { R: 'iem', V: f, J: f, O: e, W: { x: 0, y: 0 } },
        };
      }),
      Y(a.i, 1)
    );
  }
  function Sj(a, b) {
    b = b();
    var c = Fj(document),
      d = function (n, w) {
        return !!a.document.elementFromPoint(n, w);
      },
      e = Math.floor(b.left - c.x),
      f = Math.floor(b.top - c.y),
      g = Math.floor(b.left + b.width - c.x),
      h = Math.floor(b.top + b.height - c.y);
    b = d(e, f);
    c = d(g, h);
    if (b && c) return { top: f, left: e, width: g - e, height: h - f };
    var k = d(g, f),
      l = d(e, h);
    if (b)
      (h = Tj(f, h, function (n) {
        return d(e, n);
      })),
        (g = Tj(e, g, function (n) {
          return d(n, f);
        }));
    else if (k)
      (h = Tj(f, h, function (n) {
        return d(g, n);
      })),
        (e = Tj(g, e, function (n) {
          return d(n, f);
        }));
    else if (l)
      (f = Tj(h, f, function (n) {
        return d(e, n);
      })),
        (g = Tj(e, g, function (n) {
          return d(n, h);
        }));
    else if (c)
      (f = Tj(h, f, function (n) {
        return d(g, n);
      })),
        (e = Tj(g, e, function (n) {
          return d(n, h);
        }));
    else {
      var p = Math.floor((e + g) / 2),
        t = Math.floor((f + h) / 2);
      if (!d(p, t)) return { left: 0, top: 0, width: 0, height: 0 };
      f = Tj(t, f, function (n) {
        return d(p, n);
      });
      h = Tj(t, h, function (n) {
        return d(p, n);
      });
      e = Tj(p, e, function (n) {
        return d(n, t);
      });
      g = Tj(p, g, function (n) {
        return d(n, t);
      });
    }
    return { top: f, left: e, width: g - e, height: h - f };
  }
  function Tj(a, b, c) {
    if (c(b)) return b;
    for (var d = 15; d--; ) {
      var e = Math.floor((a + b) / 2);
      if (e === a || e === b) break;
      c(e) ? (a = e) : (b = e);
    }
    return a;
  }
  var Uj = function (a, b) {
    this.context = a;
    this.oa = b;
  };
  v(Uj, xj);
  Uj.prototype.Ka = function (a, b) {
    var c = Oj(Pj(this.context, this.oa), Kj(this.context, b.Ga));
    return { La: Nj(a.Da.h(c), b.Ma, 0), Ia: {} };
  };
  var Wj = function () {
      return (
        !Vj() && (E('iPod') || E('iPhone') || E('Android') || E('IEMobile'))
      );
    },
    Vj = function () {
      return E('iPad') || (E('Android') && !E('Mobile')) || E('Silk');
    };
  var Xj = function (a, b) {
    this.name = a;
    this.value = b;
  };
  Xj.prototype.toString = function () {
    return this.name;
  };
  var Yj = new Xj('OFF', Infinity),
    Zj = new Xj('WARNING', 900),
    ak = new Xj('CONFIG', 700),
    bk = function () {
      this.nc = 0;
      this.clear();
    },
    ck;
  bk.prototype.clear = function () {
    this.qe = Array(this.nc);
    this.ve = -1;
    this.Re = !1;
  };
  var dk = function (a, b, c) {
    this.reset(a || Yj, b, c, void 0, void 0);
  };
  dk.prototype.reset = function (a, b, c, d) {
    d || Date.now();
    this.Hg = b;
  };
  dk.prototype.getMessage = function () {
    return this.Hg;
  };
  var ek = function (a, b) {
      this.level = null;
      this.jg = [];
      this.parent = (void 0 === b ? null : b) || null;
      this.children = [];
      this.zg = {
        zd: function () {
          return a;
        },
      };
    },
    fk = function (a) {
      if (a.level) return a.level;
      if (a.parent) return fk(a.parent);
      db('Root logger has no level set.');
      return Yj;
    },
    gk = function (a, b) {
      for (; a; )
        a.jg.forEach(function (c) {
          c(b);
        }),
          (a = a.parent);
    },
    hk = function () {
      this.entries = {};
      var a = new ek('');
      a.level = ak;
      this.entries[''] = a;
    },
    ik,
    jk = function (a, b) {
      var c = a.entries[b];
      if (c) return c;
      c = jk(a, b.slice(0, Math.max(b.lastIndexOf('.'), 0)));
      var d = new ek(b, c);
      a.entries[b] = d;
      c.children.push(d);
      return d;
    },
    kk = function () {
      ik || (ik = new hk());
      return ik;
    }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var lk = [],
    mk = function (a) {
      var b;
      if ((b = jk(kk(), 'safevalues').zg)) {
        var c = "A URL with content '" + a + "' was sanitized away.",
          d = Zj;
        if ((a = b))
          if ((a = b && d)) {
            a = d.value;
            var e = b ? fk(jk(kk(), b.zd())) : Yj;
            a = a >= e.value;
          }
        if (a) {
          d = d || Yj;
          a = jk(kk(), b.zd());
          'function' === typeof c && (c = c());
          ck || (ck = new bk());
          e = ck;
          b = b.zd();
          if (0 < e.nc) {
            var f = (e.ve + 1) % e.nc;
            e.ve = f;
            e.Re
              ? ((e = e.qe[f]), e.reset(d, c, b), (b = e))
              : ((e.Re = f == e.nc - 1), (b = e.qe[f] = new dk(d, c, b)));
          } else b = new dk(d, c, b);
          gk(a, b);
        }
      }
    };
  -1 === lk.indexOf(mk) && lk.push(mk);
  var Qj = function (a) {
    try {
      return !!a && null != a.location.href && Bb(a, 'foo');
    } catch (b) {
      return !1;
    }
  };
  function nk(a, b) {
    if (a.nb) return ve(new Ka(6));
    var c = new V();
    return ff(Q({}), b, c).h(
      R(function () {
        return {
          timestamp: a.l.now(),
          value: { R: 'geo', V: ok(a), J: pk(a, !0), O: c, W: { x: 0, y: 0 } },
        };
      }),
      ug(a.i)
    );
  }
  function ok(a) {
    var b = pk(a, !1);
    if (!a.Ed || !Qj(a.global.parent) || a.global.parent === a.global) return b;
    var c = new qk(a.global.parent, a.Va);
    c.H = a.H;
    c = ok(c);
    a = a.global.frameElement.getBoundingClientRect();
    return Rh(Sh(Rh(c, a), { x: b.left - a.left, y: b.top - a.top }), b);
  }
  var rk = function (a, b) {
    this.context = a;
    this.oa = b;
  };
  v(rk, xj);
  rk.prototype.Ka = function (a, b) {
    var c = Oj(nk(this.context, this.oa), Kj(this.context, b.Ga));
    return { La: Nj(a.Da.h(c), b.Ma, 0), Ia: {} };
  };
  function sk(a) {
    var b = void 0 === b ? {} : b;
    if ('function' === typeof Event) return new Event(a, b);
    if ('undefined' !== typeof document) {
      var c = document.createEvent('CustomEvent');
      c.initCustomEvent(a, b.bubbles || !1, b.cancelable || !1, b.detail);
      return c;
    }
    throw Error();
  }
  function tk(a) {
    return function (b) {
      return b.h(a.ResizeObserver ? uk(a) : vk(a), xf(1), gf());
    };
  }
  function uk(a) {
    return function (b) {
      return b.h(
        X(function (c) {
          var d = a.ResizeObserver;
          if (!d || void 0 === c.j) return Q(ii.F);
          var e = new K(function (f) {
            function g() {
              void 0 !== c.j && h.unobserve(c.j);
              h.disconnect();
              k.unsubscribe();
            }
            if (void 0 === c.j) return f.complete(), function () {};
            var h = new d(function (l) {
              l.forEach(function (p) {
                f.next(p);
              });
            });
            h.observe(c.j);
            var k = c.released.subscribe(g);
            return g;
          }).h(
            Lg(a.s, 736),
            R(function (f) {
              return f.contentRect;
            })
          );
          return ff(Q(c.j.getBoundingClientRect()), e);
        }),
        S(Qh)
      );
    };
  }
  function vk(a) {
    return function (b) {
      var c = b.h(
          yh(a, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0,
          })
        ),
        d = a.Rg;
      c = ff(
        b.h(
          R(function () {
            return sk('resize');
          })
        ),
        c,
        d
      );
      return P(b, c).h(
        Lg(a.s, 737),
        R(function (e) {
          e = u(e).next().value;
          return void 0 === e.j ? void 0 : e.j.getBoundingClientRect();
        }),
        Ag(),
        S(Qh)
      );
    };
  }
  function wk(a, b) {
    var c = xk(a, b).h(xf(1), gf());
    return function (d) {
      d = d.h(
        X(function (e) {
          return e.element;
        }),
        S()
      );
      return P([c, d]).h(
        X(function (e) {
          var f = u(e);
          e = f.next().value;
          f = f.next().value;
          return yk(a, e.qg, tk(a), e.Mg, e.fg, f);
        }),
        ug(a.i)
      );
    };
  }
  function zk(a, b) {
    var c = wk(a, b);
    return function (d) {
      var e = c(Q(d));
      return function (f) {
        return P([f, e]).h(
          R(function (g) {
            var h = u(g);
            g = h.next().value;
            h = h.next().value;
            var k = Sh(h.value.F, g.value.W),
              l = Rh(Sh(h.value.M, g.value.W), g.value.V);
            return {
              timestamp: g.timestamp.maximum(h.timestamp),
              value: Object.assign({}, g.value, { K: 'nio', M: l, F: k }),
            };
          })
        );
      };
    };
  }
  function Ak(a) {
    return R(function (b) {
      return 'nio' !== b.value.R
        ? b
        : Object.assign({}, b, {
            value: Object.assign({}, b.value, { V: pk(a, !0), J: pk(a, !0) }),
          });
    });
  }
  function Bk(a, b) {
    return Q(b).h(
      a,
      R(function () {
        return b;
      })
    );
  }
  function xk(a, b) {
    return a.l.timeline !== Va
      ? ve(new Ka(2))
      : a.MutationObserver
      ? 'undefined' === typeof IntersectionObserver
        ? ve(new Ka(0))
        : new K(function (c) {
            var d = new V(),
              e = new IntersectionObserver(d.next.bind(d), {
                threshold: [].concat(ea(b)),
              });
            c.next({
              Mg: d.h(Lg(a.s, 735)),
              qg: e,
              fg: function () {
                var f = e.takeRecords();
                0 < f.length && d.next(f);
              },
            });
          }).h(Ee(1), xf(1), gf())
      : ve(new Ka(1));
  }
  function Ck(a) {
    return Wd(
      a.sort(function (b, c) {
        return b.time - c.time;
      })
    );
  }
  function yk(a, b, c, d, e, f) {
    return new K(function (g) {
      function h() {
        w ||
          ((w = !0),
          void 0 !== f.j && b.unobserve(f.j),
          l.unsubscribe(),
          n.unsubscribe(),
          t.unsubscribe(),
          A.unsubscribe());
      }
      if (void 0 !== f.j) {
        b.observe(f.j);
        var k = new vf({
            timestamp: a.l.now(),
            value: Object.assign({}, ii, { R: 'nio', K: 'nio' }),
          }),
          l = d
            .h(
              he(function (y) {
                return Ck(y);
              }),
              U(function (y) {
                return y.target === f.j;
              }),
              R(function (y) {
                return {
                  timestamp: new Xa(y.time, Va),
                  value: {
                    R: 'nio',
                    V: y.rootBounds || Ph,
                    J: y.rootBounds || pk(a, !0),
                    O: p,
                    K: 'nio',
                    M: y.intersectionRect,
                    F: y.boundingClientRect,
                    W: { x: 0, y: 0 },
                  },
                };
              }),
              qf(k),
              gf()
            )
            .subscribe(g),
          p = new V(),
          t = p.subscribe(function () {
            e();
            g.next({ timestamp: a.l.now(), value: k.value.value });
            void 0 !== f.j && (b.unobserve(f.j), b.observe(f.j));
          }),
          n = Bk(c, f).subscribe(function () {
            p.next();
          }),
          w = !1,
          A = f.released.subscribe(function () {
            return h();
          });
        return h;
      }
    });
  }
  var Dk = function (a, b, c) {
    c = void 0 === c ? wk(a, b) : c;
    this.context = a;
    this.rg = c;
  };
  v(Dk, xj);
  Dk.prototype.Ka = function (a, b) {
    return { La: Nj(a.Da.h(this.rg, Ak(this.context)), b.Ma, 0), Ia: {} };
  };
  function Ek(a, b, c, d, e) {
    var f = void 0 === f ? new ej(a) : f;
    var g = void 0 === g ? Tg(a.l, 500) : g;
    var h = void 0 === h ? Tg(a.l, 100) : h;
    e = Q(f).h(
      Fk(c),
      Yf(function (k) {
        d.next(k.gb);
      }),
      Gk(a, h),
      Hk(a),
      Ik(a, e),
      xf(1),
      gf()
    );
    f = new V();
    b = ff(Q({}), b, f);
    return e.h(Jk(a, f, b, g, c), Y(a.i, 1));
  }
  function Ik(a, b) {
    return J(
      function (c) {
        return P([c, b]);
      },
      pe(function (c) {
        c = u(c);
        var d = c.next().value;
        return 9 !== c.next().value || fj(d)
          ? Q(!0)
          : Kk(a, d, 'viewableChange').h(
              U(function (e) {
                return u(e).next().value;
              }),
              Ee(1)
            );
      }),
      R(function (c) {
        return u(c).next().value;
      })
    );
  }
  function Fk(a) {
    return X(function (b) {
      if (-1 === b.gb) return a.next('if'), ve(new Ka(7));
      if (0 !== b.oc)
        switch (b.oc) {
          case 1:
            return a.next('mm'), ve(new Ka(18));
          case 2:
            return a.next('ng'), ve(new Ka(17));
          default:
            return a.next('i'), ve(new Ka(8));
        }
      return Q(b);
    });
  }
  function Gk(a, b) {
    return pe(function () {
      var c = a.af;
      return 'complete' === Lk(a.document)
        ? Q(!0)
        : c.h(
            pe(function () {
              return b;
            })
          );
    });
  }
  var Hk = function (a) {
    return X(function (b) {
      return 'loading' !== b.getState()
        ? Q(b)
        : Kk(a, b, 'ready').h(
            R(function () {
              return b;
            })
          );
    });
  };
  function Jk(a, b, c, d, e) {
    return X(function (f) {
      var g = gj(f);
      if ('string' !== typeof g) return e.next('nc'), ve(new Ka(9));
      void 0 !== f.we && (f.we = !0);
      g = Kk(a, f, g, Mk);
      var h = { version: f.Ce(), gb: f.gb };
      g = g.h(
        R(function (l) {
          return Nk.apply(null, [a, b, f, h].concat(ea(l)));
        })
      );
      var k = d.h(
        Yf(function () {
          e.next('mt');
        }),
        X(function () {
          return ve(new Ka(10));
        })
      );
      g = yf(g, k);
      return P([g, c]).h(
        R(function (l) {
          l = u(l).next().value;
          return Object.assign({}, l, { timestamp: a.l.now() });
        })
      );
    });
  }
  function Mk(a, b) {
    return (
      (null === b || 'number' === typeof b) &&
      (null === a ||
        (!!a &&
          'number' === typeof a.height &&
          'number' === typeof a.width &&
          'number' === typeof a.x &&
          'number' === typeof a.y))
    );
  }
  function Nk(a, b, c, d, e, f) {
    e = e ? { left: e.x, top: e.y, width: e.width, height: e.height } : Ph;
    c = c.tb('getMaxSize');
    var g =
      null != c && 'number' === typeof c.width && 'number' === typeof c.height
        ? c
        : { width: 0, height: 0 };
    c = { left: 0, top: 0, width: -1, height: -1 };
    if (g) {
      var h = Number(String(g.width));
      g = Number(String(g.height));
      c = isNaN(h) || isNaN(g) ? c : { left: 0, top: 0, width: h, height: g };
    }
    a = {
      value: { V: e, J: c, R: 'mraid', O: b, W: { x: 0, y: 0 } },
      timestamp: a.l.now(),
    };
    return Object.assign({}, a, d, { Lh: f });
  }
  function Kk(a, b, c, d) {
    d =
      void 0 === d
        ? function () {
            return !0;
          }
        : d;
    return new K(function (e) {
      var f = a.s.Ha(745, function () {
        e.next(x.apply(0, arguments));
      });
      b.addEventListener(c, f);
      return function () {
        b.removeEventListener(c, f);
      };
    }).h(
      U(function (e) {
        return d.apply(null, ea(e));
      })
    );
  }
  var Ok = function (a, b) {
    this.context = a;
    this.oa = b;
  };
  v(Ok, xj);
  Ok.prototype.Ka = function (a, b) {
    var c = new wf(1),
      d = new wf(1),
      e = Oj(Ek(this.context, this.oa, c, d, b.Ga), Kj(this.context, b.Ga));
    return {
      La: Nj(a.Da.h(e), b.Ma, 1),
      Ia: { Nd: c.h(Y(this.context.i, 1)), Od: d.h(Y(this.context.i, 1)) },
    };
  };
  function Pk(a) {
    return ['backgrounded', 'notFound', 'hidden', 'noOutputDevice'].includes(a);
  }
  function Qk() {
    var a = Error;
    return Vc(
      function (b) {
        return b instanceof a;
      },
      function () {
        return Uc(a);
      }
    );
  }
  function Rk(a, b) {
    var c = void 0 === c ? null : c;
    var d = new V(),
      e = void 0,
      f = a.Be,
      g = d.h(
        R(function () {
          return e ? Object.assign({}, e, { timestamp: a.l.now() }) : null;
        }),
        U(function (k) {
          return null !== k;
        }),
        R(function (k) {
          return k;
        })
      );
    b = P([ff(f, g), b]);
    var h = c;
    return b.h(
      U(function (k) {
        k = u(k).next().value;
        null === h && (h = k.value.Cf);
        return k.value.Cf === h;
      }),
      Yf(function (k) {
        return void (e = u(k).next().value);
      }),
      R(function (k) {
        var l = u(k);
        k = l.next().value;
        l = l.next().value;
        try {
          var p = k.value.data,
            t = k.timestamp,
            n = p.viewport,
            w,
            A,
            y = Object.assign({}, n, {
              width: null != (w = null == n ? void 0 : n.width) ? w : 0,
              height: null != (A = null == n ? void 0 : n.height) ? A : 0,
              x: 0,
              y: 0,
              Yh: n ? n.width * n.height : 0,
            }),
            C = Sk(y),
            G = p.adView,
            N =
              G.measuringElement && G.containerGeometry
                ? Sk(G.containerGeometry)
                : Sk(G.geometry),
            sa = Sk(G.geometry),
            B = G.reasons.some(Pk),
            z = B ? Ph : Sk(G.onScreenGeometry),
            T;
          l && (T = G.percentageInView / 100);
          l && B && (T = 0);
          return {
            timestamp: t,
            value: {
              R: 'omid',
              V: N,
              J: C,
              O: d,
              K: 'omid',
              F: sa,
              W: { x: N.left, y: N.top },
              M: z,
              sc: T,
            },
          };
        } catch (ma) {
          A = ma;
          p = Qk();
          t = Wc;
          Wc = void 0;
          n = [];
          w = p(A, n);
          !w && n && ((A = 'Expected ' + p.De() + ', got ' + Tc(A)), n.push(A));
          if (!w) {
            var Ua = '';
            t && (Ua = t() + '\n');
            throw Error(
              'z`' + Ua + '`' + p.De() + '`' + n.reverse().join('\n')
            );
          }
          var Oc;
          p =
            null != (Oc = null == (Ua = ma) ? void 0 : Ua.message)
              ? Oc
              : 'An unknown error occurred';
          Ua =
            'Error while processing geometryChange event: ' +
            JSON.stringify(k.value) +
            '; ' +
            p;
          throw Error(Ua);
        }
      }),
      xf(1),
      gf()
    );
  }
  function Sk(a) {
    var b, c, d, e;
    return {
      left: Math.floor(null != (b = null == a ? void 0 : a.x) ? b : 0),
      top: Math.floor(null != (c = null == a ? void 0 : a.y) ? c : 0),
      width: Math.floor(null != (d = null == a ? void 0 : a.width) ? d : 0),
      height: Math.floor(null != (e = null == a ? void 0 : a.height) ? e : 0),
    };
  }
  function Tk(a, b, c, d) {
    c = void 0 === c ? lg : c;
    var e = a.i;
    if (null === b) return ve(new Ka(20));
    if (!b.validate()) return ve(new Ka(21));
    var f;
    d = Uk(e, b, d).h(
      R(function (g) {
        var h = g.value;
        g = g.timestamp;
        var k = b.l,
          l = a.l;
        if (k.timeline !== g.timeline) throw new Pa();
        g = new Xa(g.value - k.now().value + l.now().value, l.timeline);
        return (f = { value: h, timestamp: g });
      })
    );
    return ff(
      d,
      c.h(
        R(function () {
          return f;
        })
      )
    ).h(
      U(function (g) {
        return void 0 !== g;
      }),
      R(function (g) {
        return g;
      }),
      Y(a.i, 1)
    );
  }
  function Uk(a, b, c) {
    return Rk(b, c).h(
      Y(a, 1),
      R(function (d) {
        return {
          timestamp: d.timestamp,
          value: {
            W: { x: d.value.F.left, y: d.value.F.top },
            V: d.value.M,
            J: d.value.J,
            R: d.value.K,
            O: d.value.O,
          },
        };
      })
    );
  }
  var Vk = function (a, b, c) {
    this.bb = a;
    this.Zb = b;
    this.oa = c;
  };
  v(Vk, xj);
  Vk.prototype.Ka = function (a, b) {
    var c = b.Ga;
    b = Tk(this.Zb, this.bb, this.oa, b.Ze);
    c = Oj(b, Kj(this.Zb, c));
    return { La: a.Da.h(c), Ia: {} };
  };
  var Wk = function (a, b, c) {
    this.bb = a;
    this.Zb = b;
    this.Zf = c;
  };
  v(Wk, xj);
  Wk.prototype.Ka = function (a, b) {
    b = Tk(this.Zb, this.bb, void 0, b.Ze);
    var c = zk(this.Zb, this.Zf);
    b = Oj(b, c);
    return { La: a.Da.h(b), Ia: {} };
  };
  function Xk(a) {
    return a.document.Sg.h(
      R(function (b) {
        return 'visible' === b;
      }),
      S(),
      Y(a.i, 1)
    );
  }
  var Yk;
  Yk = ['av.key', 'js', '20230215'].slice(-1)[0];
  function Zk(a, b, c) {
    var d;
    return b.h(
      S(),
      X(function (e) {
        return c.h(
          R(function () {
            if (!d) {
              d = !0;
              try {
                e.next();
              } finally {
                d = !1;
              }
            }
            return !0;
          })
        );
      }),
      W(!1),
      Y(a.i, 1)
    );
  }
  function $k(a, b) {
    a.za && (a.cb = a.za);
    a.za = b;
    a.cb && a.cb.value
      ? ((b = Math.max(0, Ya(b.timestamp, a.cb.timestamp))),
        (a.totalTime += b),
        (a.ga += b))
      : (a.ga = 0);
    return a;
  }
  function al() {
    return J(
      cf($k, { totalTime: 0, ga: 0 }),
      R(function (a) {
        return a.totalTime;
      })
    );
  }
  function bl() {
    return J(
      cf($k, { totalTime: 0, ga: 0 }),
      R(function (a) {
        return a.ga;
      })
    );
  }
  function cl() {
    var a;
    return J(
      Yf(function (b) {
        return void (a = b.timestamp);
      }),
      bl(),
      R(function (b) {
        return { timestamp: a, value: Math.round(b) };
      })
    );
  }
  function dl() {
    return J(
      bl(),
      cf(function (a, b) {
        return Math.max(a, b);
      }, 0),
      R(function (a) {
        return Math.round(a);
      })
    );
  }
  function el(a) {
    return J(pi(Q(a)), dl());
  }
  function fl(a) {
    return J(
      ki(
        R(function (b) {
          return oi(b, a);
        })
      ),
      al(),
      R(function (b) {
        return Math.round(b);
      })
    );
  }
  function gl(a, b, c, d, e) {
    var f = Oi;
    if (1 < f.length)
      for (var g = 0; g < f.length - 1; g++) if (f[g] < f[g + 1]) throw Error();
    g = e.h(
      W(void 0),
      X(function () {
        return c.h(cl());
      }),
      S(),
      Y(a, 1)
    );
    e = e.h(
      W(void 0),
      X(function () {
        return c.h(dl());
      }),
      S(),
      Y(a, 1)
    );
    return {
      Ob: d.h(
        W(void 0),
        X(function () {
          return b.h(Di(el, f));
        }),
        S(xb),
        Y(a, 1)
      ),
      Yb: d.h(
        W(void 0),
        X(function () {
          return b.h(
            Di(fl, f),
            R(function (h) {
              return h.map(function (k, l) {
                return 0 < l ? k - h[l - 1] : k;
              });
            })
          );
        }),
        S(xb),
        Y(a, 1)
      ),
      Nb: e,
      Ua: g.h(S(Ih), Y(a, 1)),
    };
  }
  var il = function (a, b) {
      var c = this;
      this.l = a;
      this.Ld = this.Dc = null;
      this.Zg = b.h(S()).subscribe(function (d) {
        hl(c);
        c.Ld = d;
      });
    },
    jl = function (a, b) {
      hl(a);
      a.Dc = a.l.setTimeout(function () {
        var c;
        return void (null == (c = a.Ld) ? void 0 : c.next());
      }, b);
    },
    hl = function (a) {
      null !== a.Dc && a.l.clearTimeout(a.Dc);
      a.Dc = null;
    };
  il.prototype.lb = function () {
    hl(this);
    this.Zg.unsubscribe();
    this.Ld = null;
  };
  function kl(a, b, c, d, e) {
    var f = Ti.nf;
    var g = void 0 === g ? new il(b, d) : g;
    return new K(function (h) {
      var k = c
        .h(
          W(void 0),
          X(function () {
            return ll(e);
          })
        )
        .h(
          R(function (l) {
            var p = l.value;
            l = l.timestamp;
            var t = p.visible;
            p = p.Ua;
            var n = p >= f;
            n || !t
              ? hl(g)
              : ((l = Math.max(0, Ya(b.now(), l))),
                jl(g, Math.max(0, f - p - l)));
            return n;
          }),
          cf(function (l, p) {
            return p || l;
          }, !1),
          S()
        )
        .subscribe(h);
      return function () {
        g.lb();
        k.unsubscribe();
      };
    }).h(
      Uf(function (h) {
        return !h;
      }, !0),
      Y(a, 1)
    );
  }
  function ll(a) {
    return Ci([a, a.h(cl())]).h(
      R(function (b) {
        var c = u(b);
        b = c.next().value;
        c = c.next().value;
        return {
          timestamp: b.timestamp,
          value: { visible: b.value, Ua: c.value },
        };
      }),
      S(function (b, c) {
        return Ih(b, c, function (d, e) {
          return d.Ua === e.Ua && d.visible === e.visible;
        });
      })
    );
  }
  function ml(a, b, c) {
    var d = c.h(
      R(function (e) {
        return { value: e, timestamp: a.l.now() };
      }),
      S(Ih)
    );
    return b instanceof K
      ? b.h(
          S(),
          X(function (e) {
            return e ? new Z({ value: !1, timestamp: a.l.now() }).U(a.i) : d;
          })
        )
      : !1 === b.value
      ? d
      : new Z(!1);
  }
  function nl(a, b, c, d, e, f) {
    var g = Ti;
    b = b instanceof K ? b.h(W(!1), S()) : b;
    var h = !(Vj() || Wj());
    c = ml(a, c, d);
    a = f.Da.h(Uh(a.i));
    return Object.assign({}, g, { uc: c, rf: e, me: h, Ve: b, wc: a });
  }
  function ol() {
    var a = ob();
    return a
      ? ub(
          'Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX'.split(
            ';'
          ),
          function (b) {
            return nb(a, b);
          }
        ) ||
        (nb(a, 'OMI/') && !nb(a, 'XiaoMi/'))
        ? !0
        : nb(a, 'Presto') &&
          nb(a, 'Linux') &&
          !nb(a, 'X11') &&
          !nb(a, 'Android') &&
          !nb(a, 'Mobi')
      : !1;
  }
  function pl() {
    var a = void 0 === a ? Da : a;
    return (a = a.performance) && a.now ? a.now() : null;
  }
  var Ti = Object.freeze({ nf: 1e3, td: 0.5, Kd: 0.3 }),
    Oi = Object.freeze([1, 0.75, Ti.td, Ti.Kd, 0]),
    th =
      'https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&bin=7&v=' +
      Yk;
  function ql(a, b) {
    return { sd: 0.01, Md: Tg(a.l, 36e5), oa: a.l.Na(100).h(Y(a.i, 1)), bb: b };
  }
  var rl = function (a, b) {
    var c = Symbol(),
      d = Symbol(),
      e = Symbol(),
      f = Symbol(),
      g = this;
    this.Vg = a;
    this.Ec = b;
    this.Je = c;
    this.Bb = d;
    this.hc = e;
    this.ic = f;
    this.We = new wf();
    this.Bg = new K(function (h) {
      var k = g.We.subscribe(h);
      return function () {
        k.unsubscribe();
        g.lb();
      };
    });
    this.Mf = [];
    this.nd = new wf();
    this.Mf.push(this.Je, this.Bb, this.hc, this.ic);
  };
  rl.prototype.start = function (a) {
    void 0 === this.Cd &&
      (this.Cd = sl(
        a,
        this.nd.h(Y(a.i, 1)),
        this.Ec.sd,
        this.Ec.Md,
        this.Ec.oa,
        this.Ec.bb,
        this.Je,
        this.Bb,
        this.hc,
        this.ic
      ).subscribe(this.We));
  };
  rl.prototype.lb = function () {
    this.nd.complete();
    var a;
    null == (a = this.Cd) || a.unsubscribe();
    this.Cd = void 0;
  };
  rl.prototype.handleEvent = function () {};
  function sl(a, b, c, d, e, f, g, h, k, l) {
    var p = Xk(a).h(
        R(function (n) {
          return !n;
        })
      ),
      t = new yj(a, [
        new Dk(a, Oi),
        new rk(a, e),
        new Uj(a, e),
        new Wk(f, a, Oi),
        new Vk(f, a, e),
        new Ok(a, e),
      ]);
    return ih(
      a,
      b,
      function (n, w) {
        var A = ij(n, w.element),
          y = A.ed,
          C = A.kc,
          G = A.ld,
          N = A.Qf,
          sa = A.Ma,
          B = A.tg,
          z = A.Gd,
          T = A.Hd,
          Ua = A.Ga,
          Oc = A.wa,
          ma = A.wh,
          hi = A.Za;
        A = A.Cc;
        var Eb = new Z(w.Yf).U(n.i),
          lb = Eb.h(
            R(function (F) {
              return F.ih;
            })
          ),
          Ma = sa.h(
            ee(B),
            R(function (F) {
              var Fa = u(F);
              F = Fa.next().value;
              Fa = Fa.next().value;
              (F = F || Fa) ||
                ((F =
                  nb(ob(), 'CrKey') ||
                  nb(ob(), 'PlayStation') ||
                  nb(ob(), 'Roku') ||
                  ol() ||
                  nb(ob(), 'Xbox')) ||
                  ((F = ob()),
                  (F =
                    nb(F, 'AppleTV') ||
                    nb(F, 'Apple TV') ||
                    nb(F, 'CFNetwork') ||
                    nb(F, 'tvOS'))),
                F ||
                  ((F = ob()),
                  (F = nb(F, 'sdk_google_atv_x86') || nb(F, 'Android TV'))));
              return F;
            })
          );
        B = new vj(n, w, N, sa, Ua, lb);
        lb = Eb.h(
          R(function (F) {
            return F.Kf;
          })
        );
        lb = t.Ka(B, { Ma: sa, Ga: Ua, Ze: lb });
        var qa = lb.La,
          Pc = lb.Ia;
        lb = Pc.Nd;
        var hm = Pc.Od;
        Pc = Pc.Vd;
        var mb = nl(n, T, Ma, p, ma, B);
        ma = Ui(n.i, n.l, qa, mb);
        Ma = gl(n.i, ma.Ba.Xd, ma.Ba.visible, ma.Ud, ma.Vb);
        var Qc = kl(n.i, n.l, ma.Vb, ma.Ba.O, ma.Ba.visible);
        qa = xi(n.i, n.l, qa, mb);
        mb = Ni(n.l, n.i, qa.Ba.Xd, qa.Ba.visible, qa.Ud, qa.Vb);
        var mf = { be: Si(n.i, n.l, qa.Vb, mb.Nb) },
          nf = Eb.h(
            R(function (F) {
              return F.dg;
            }),
            W(!1)
          );
        ma = Th(
          n.i,
          nf,
          Object.assign({}, qa.Ba, mb, mf),
          Object.assign({}, ma.Ba, {
            be: ei(n, Qc),
            Ob: ei(n, Ma.Ob),
            Yb: ei(n, Ma.Yb),
            Nb: ei(n, Ma.Nb),
            Ua: Ma.Ua.h(
              R(function (F) {
                return new Oh(n.l, F);
              })
            ),
          })
        );
        qa = di(n, d.h($e('t')));
        Ma = null !== f && f.validate();
        Qc = (Ma ? f.fh : lg).h(Y(n.i, 1), $e('u'));
        qa = yf(qa, Qc);
        Ma = (Ma ? f.Ke.h(Ee(1), $e(!0), W(!1)) : new Z(!0).U(n.i)).h(
          X(function (F) {
            return F
              ? new K(function (Fa) {
                  w.Wa(g, {}, function (im) {
                    Fa.next(im);
                    Fa.complete();
                  });
                })
              : lg;
          }),
          W(!1),
          Y(n.i, 1)
        );
        Qc = Zk(
          n,
          ma.O,
          qa.h(
            U(function (F) {
              return null !== F;
            })
          )
        );
        mb = tl(n, B, y);
        mf = ul(n, qa, w.element);
        nf = mb.Df.h(W({ x: 0, y: 0 }));
        var lm = Eb.h(
          R(function (F) {
            return F.dh;
          }),
          W(!1),
          S(),
          Yf(function (F) {
            Yg = F;
          }),
          Y(n.i, 1)
        );
        return Object.assign(
          {},
          {
            H: new Z(n.H),
            xc: new Z('lidar2'),
            ph: new Z('lidartos'),
            qf: new Z('vattr'),
            Hf: new Z(Yk),
            Gf: new Z(7),
            kd: new Z(n.validate() ? null : new La()),
            Lf: new Z(vl(n.document)),
            ca: new Z(vh),
            qd: qa,
            Pc: qa,
            Zh: Qc,
            Ge: Ma,
            Wa: new Z(w.Wa),
            Bb: new Z(h),
            hc: new Z(k),
            ic: new Z(l),
            Of: new Z(n.nb ? 1 : void 0),
            Rf: new Z(n.Jf ? 1 : void 0),
            Ma: sa,
            Za: hi,
            eb: hi.h(
              U(function (F) {
                return F;
              }),
              R(function () {
                return n.eb.bind(n);
              })
            ),
            Nd: lb.h(Y(n.i, 1)),
            Od: hm.h(Y(n.i, 1)),
            bg: Eb.h(
              R(function (F) {
                return F.cg;
              })
            ),
            Le: lm,
            Cc: A,
            Me: Eb.h(
              R(function (F) {
                return F.Pf;
              })
            ),
            eg: new Z(new Rg(n, new Ug(n), 'GET')),
            mf: new Z(Yg && new Zg(n).ka({ jc: 'GET' })),
            Nf: w.element.h(
              R(function (F) {
                return null !== F;
              })
            ),
            Kb: Oc,
            qh: Oc,
            ld: G.h(W([])),
            kg: G.h(
              R(function (F) {
                return 0 < F.length ? !0 : null;
              }),
              W(null),
              S()
            ),
            kc: C.h(W([]), Y(n.i, 1)),
            Wh: Eb,
            ed: y,
            Eb: B.Eb,
            Gd: z.h(W(0), Y(n.i, 1)),
            Cg: N,
            Ga: Ua.h(W(0), Y(n.i, 1)),
            xb: new Z(uh),
            Tc: new Z(Fh),
            Hd: T,
            Pe: B.Mb.h(Uh(n.i)),
            ce: B.ce,
          },
          ma,
          {
            qc: P([ma.qc, nf]).h(
              R(function (F) {
                var Fa = u(F);
                F = Fa.next().value;
                Fa = Fa.next().value;
                return Sh(F, Fa);
              }),
              S(Qh)
            ),
          },
          mb,
          { ae: bh(n), lg: mf, Vd: Pc }
        );
      },
      sh(a, c)
    );
  }
  function tl(a, b, c) {
    var d = void 0 === d ? Da : d;
    var e, f;
    d =
      (null == (e = d.performance)
        ? void 0
        : null == (f = e.timing)
        ? void 0
        : f.navigationStart) || 0;
    return Object.assign({}, { Bf: new Z(d), Af: ci(a, b) }, bi(a, b, c));
  }
  function ul(a, b, c) {
    return b.h(
      U(function (d) {
        return null !== d;
      }),
      X(function () {
        return c;
      }),
      R(function (d) {
        var e = xg(a);
        return 0 < e.length && 0 <= e.indexOf(d);
      }),
      R(function (d) {
        return !d;
      })
    );
  }
  var wl = function () {
    this.pf = 0;
  };
  wl.prototype.Ha = function (a, b) {
    var c = this;
    return function () {
      var d = x.apply(0, arguments);
      c.pf = a;
      return b.apply(null, ea(d));
    };
  };
  var xl = function () {
    this.s = new wl();
    this.i = new qg();
    this.id = ad();
  };
  xl.prototype.Ad = function () {
    return lg;
  };
  q.Object.defineProperties(xl.prototype, {
    Ac: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.id;
      },
    },
  });
  var yl = function (a) {
    var b = x.apply(1, arguments),
      c = this;
    this.qb = [];
    this.qb.push(a);
    b.forEach(function (d) {
      c.qb.push(d);
    });
  };
  yl.prototype.ka = function (a) {
    return this.qb.some(function (b) {
      return b.ka(a);
    });
  };
  yl.prototype.N = function (a, b) {
    for (var c = 0; c < this.qb.length; c++)
      if (this.qb[c].ka(b)) return this.qb[c].N(a, b);
    throw new Na();
  };
  var zl = function (a) {
    this.na = a;
  };
  zl.prototype.ping = function () {
    var a = this,
      b = Q.apply(null, ea(x.apply(0, arguments))).h(
        he(function (c) {
          return Al(a, c);
        }),
        Ne(function (c) {
          return c;
        }),
        xf(1)
      );
    b.connect();
    return b;
  };
  var Al = function (a, b) {
    var c = new wf(1);
    Bl(
      a.na,
      b,
      function () {
        c.next(!0);
        c.complete();
      },
      function () {
        c.next(!1);
        c.complete();
      }
    );
    return c;
  };
  q.Object.defineProperties(zl.prototype, {
    Cb: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.na.ka();
      },
    },
  });
  var Cl = function (a) {
    this.na = a;
    this.timeline = Wa;
  };
  m = Cl.prototype;
  m.setTimeout = function (a, b) {
    return Number(
      this.na.setTimeout(function () {
        return a();
      }, b)
    );
  };
  m.clearTimeout = function (a) {
    this.na.clearTimeout(a);
  };
  m.now = function () {
    return new Xa(Date.now(), this.timeline);
  };
  m.interval = function (a, b) {
    var c = this.Na(a).subscribe(b);
    return function () {
      return void c.unsubscribe();
    };
  };
  m.Na = function (a) {
    return Tg(this, a).h(
      Bf(),
      cf(function (b) {
        return b + 1;
      }, -1)
    );
  };
  m.sa = function () {
    return !0;
  };
  function Dl(a) {
    var b = Object.assign({}, a);
    delete b.timestamp;
    return { timestamp: new Xa(a.timestamp, Wa), value: b };
  }
  function El(a) {
    return (
      void 0 !== a &&
      'number' === typeof a.x &&
      'number' === typeof a.y &&
      'number' === typeof a.width &&
      'number' === typeof a.height
    );
  }
  var Gl = function (a, b, c) {
    c = void 0 === c ? null : c;
    xl.call(this);
    this.na = a;
    this.uh = b;
    this.Va = c;
    this.Td = new wf(3);
    this.Td.h(
      U(function (d) {
        return 'sessionStart' === d.value.type;
      })
    );
    this.fh = this.Td.h(
      U(function (d) {
        return 'sessionFinish' === d.value.type;
      })
    );
    this.Ke = new wf(1);
    this.vh = new wf();
    this.Be = new wf(10);
    this.l = new Cl(a);
    this.H = new Rg(this, new zl(a), 'GET');
    this.vg = this.na.ka();
    Fl(this);
  };
  v(Gl, xl);
  Gl.prototype.validate = function () {
    return this.vg;
  };
  var Fl = function (a) {
    Hl(
      a.na,
      function (e) {
        return void a.Td.next(Dl(e));
      },
      a.uh
    );
    a.na.addEventListener('geometryChange', function (e) {
      if (void 0 === e) var f = !1;
      else {
        f = e.data;
        var g;
        (g = void 0 === f) ||
          ((g = f.viewport),
          (g =
            void 0 === g ||
            (void 0 !== g &&
              'number' === typeof g.width &&
              'number' === typeof g.height)));
        g
          ? ((f = f.adView),
            (f =
              void 0 !== f &&
              'number' === typeof f.percentageInView &&
              (void 0 === f.geometry || El(f.geometry)) &&
              (void 0 === f.onScreenGeometry || El(f.onScreenGeometry))))
          : (f = !1);
      }
      f
        ? a.Be.next(Dl(e))
        : 0.01 >= Math.random() &&
          ((e =
            'https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&name=invalid_geo&context=1092&msg=' +
            JSON.stringify(e)),
          a.H.N(e).sendNow());
    });
    for (
      var b = {},
        c = u(
          'loaded start firstQuartile midpoint thirdQuartile complete pause resume bufferStart bufferFinish skipped volumeChange playerStateChange adUserInteraction'.split(
            ' '
          )
        ),
        d = c.next();
      !d.done;
      b = { ac: b.ac }, d = c.next()
    )
      (b.ac = d.value),
        a.na.addEventListener(
          b.ac,
          (function (e) {
            return function (f) {
              f.type === e.ac && a.vh.next(Dl(f));
            };
          })(b)
        );
    a.na.addEventListener('impression', function (e) {
      a.Ke.next(Dl(e));
    });
  };
  q.Object.defineProperties(Gl.prototype, {
    global: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return Il;
      },
    },
  });
  var Il = {};
  var Jl = function (a, b) {
      b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
      2048 > b.length && b.push(a);
    },
    Kl = function (a, b) {
      var c = void 0 === c ? !1 : c;
      var d = window,
        e = 'undefined' !== typeof queueMicrotask;
      return function () {
        c &&
          e &&
          queueMicrotask(function () {
            d.google_rum_task_id_counter = d.google_rum_task_id_counter || 1;
            d.google_rum_task_id_counter += 1;
          });
        var f = pl(),
          g = 3;
        try {
          var h = b.apply(this, arguments);
        } catch (l) {
          throw ((g = 13), l);
        } finally {
          if (d.google_measure_js_timing && f) {
            var k = pl() || 0;
            Jl(
              Object.assign(
                {},
                { label: a.toString(), value: f, duration: k - f, type: g },
                c &&
                  e && {
                    taskId: (d.google_rum_task_id_counter =
                      d.google_rum_task_id_counter || 1),
                  }
              ),
              d
            );
          }
        }
        return h;
      };
    };
  var Ll = function () {
    wl.apply(this, arguments);
  };
  v(Ll, wl);
  Ll.prototype.Ha = function (a, b) {
    return wl.prototype.Ha.call(this, a, Kl(a, b));
  };
  var Nl = function () {
    for (var a = u(x.apply(0, arguments)), b = a.next(); !b.done; b = a.next())
      if (((b = b.value), b.sa())) {
        this.l = b;
        return;
      }
    this.l = new Ml();
  };
  m = Nl.prototype;
  m.sa = function () {
    return this.l.sa();
  };
  m.now = function () {
    return this.l.now();
  };
  m.setTimeout = function (a, b) {
    return this.l.setTimeout(a, b);
  };
  m.clearTimeout = function (a) {
    this.l.clearTimeout(a);
  };
  m.interval = function (a, b) {
    var c = this.Na(a).subscribe(b);
    return function () {
      return void c.unsubscribe();
    };
  };
  m.Na = function (a) {
    return this.l.Na(a);
  };
  q.Object.defineProperties(Nl.prototype, {
    timeline: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.l.timeline;
      },
    },
  });
  var Ml = function () {
    this.timeline = Symbol();
  };
  m = Ml.prototype;
  m.sa = function () {
    return !1;
  };
  m.now = function () {
    return new Xa(0, this.timeline);
  };
  m.setTimeout = function () {
    return 0;
  };
  m.clearTimeout = function () {};
  m.interval = function () {
    return function () {};
  };
  m.Na = function () {
    return lg;
  };
  var Ol = function (a, b) {
    this.G = a;
    this.s = b;
  };
  m = Ol.prototype;
  m.setTimeout = function (a, b) {
    return this.G.setTimeout(this.s.Ha(734, a), b);
  };
  m.clearTimeout = function (a) {
    this.G.clearTimeout(a);
  };
  m.interval = function (a, b) {
    var c = this.Na(a).subscribe(b);
    return function () {
      return void c.unsubscribe();
    };
  };
  m.Na = function (a) {
    var b = this;
    return new K(function (c) {
      var d = 0,
        e = b.G.setInterval(function () {
          c.next(d++);
        }, a);
      return function () {
        b.G.clearInterval(e);
      };
    });
  };
  m.sa = function () {
    return (
      !!this.G.clearTimeout &&
      'setTimeout' in this.G &&
      'setInterval' in this.G &&
      !!this.G.clearInterval
    );
  };
  var Pl = function (a, b) {
    Ol.call(this, a, b);
    this.timeline = Wa;
  };
  v(Pl, Ol);
  Pl.prototype.now = function () {
    return new Xa(this.G.Date.now(), this.timeline);
  };
  Pl.prototype.sa = function () {
    return !!this.G.Date && !!this.G.Date.now && Ol.prototype.sa.call(this);
  };
  var Ql = function (a, b) {
    Ol.call(this, a, b);
    this.timeline = Va;
  };
  v(Ql, Ol);
  Ql.prototype.now = function () {
    return new Xa(this.G.performance.now(), this.timeline);
  };
  Ql.prototype.sa = function () {
    return (
      !!this.G.performance &&
      !!this.G.performance.now &&
      Ol.prototype.sa.call(this)
    );
  };
  var Rl = function (a) {
    this.context = a;
  };
  Rl.prototype.ping = function () {
    var a = this;
    return Q(
      x
        .apply(0, arguments)
        .map(function (b) {
          try {
            var c = a.context.global;
            c.google_image_requests || (c.google_image_requests = []);
            var d = c.document;
            d = void 0 === d ? document : d;
            var e = d.createElement('img');
            e.src = b;
            c.google_image_requests.push(e);
            return !0;
          } catch (f) {
            return !1;
          }
        })
        .every(function (b) {
          return b;
        })
    );
  };
  q.Object.defineProperties(Rl.prototype, {
    Cb: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return !Vg(this.context);
      },
    },
  });
  var Sl = function (a) {
    this.context = a;
  };
  Sl.prototype.ping = function () {
    var a = this;
    return Q(
      x
        .apply(0, arguments)
        .map(function (b) {
          var c;
          return null == (c = a.context.global.navigator)
            ? void 0
            : c.sendBeacon(b);
        })
        .every(function (b) {
          return b;
        })
    );
  };
  q.Object.defineProperties(Sl.prototype, {
    Cb: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        var a;
        return (
          !Vg(this.context) &&
          void 0 !==
            (null == (a = this.context.global.navigator)
              ? void 0
              : a.sendBeacon)
        );
      },
    },
  });
  var Tl = ['FRAME', 'IMG', 'IFRAME'],
    Ul = /^[01](px)?$/;
  function Vl(a) {
    return 'string' === typeof a ? document.getElementById(a) : a;
  }
  function Wl(a, b) {
    var c = !0,
      d = !0,
      e = void 0,
      f = !0;
    c = void 0 === c ? !0 : c;
    d = void 0 === d ? !1 : d;
    f = void 0 === f ? !1 : f;
    if ((a = Vl(a))) {
      e ||
        (e = function (N, sa, B) {
          N.addEventListener(sa, B);
        });
      for (
        var g = !1,
          h = function (N) {
            g || ((g = !0), b(N));
          },
          k,
          l,
          p = 0;
        p < Tl.length;
        ++p
      )
        if (Tl[p] == a.tagName) {
          l = 3;
          k = [a];
          break;
        }
      k || ((k = a.querySelectorAll(Tl.join(','))), (l = 2));
      var t = 0,
        n = 0,
        w = (a = !1);
      p = {};
      for (var A = 0; A < k.length; p = { bc: p.bc }, A++) {
        var y = k[A];
        if (
          !('IMG' != y.tagName ||
          !y.complete ||
          (y.naturalWidth && y.naturalHeight)
            ? Ul.test(y.getAttribute('width')) &&
              Ul.test(y.getAttribute('height'))
            : 1)
        ) {
          if ('IMG' == y.tagName)
            var C = y.naturalWidth && y.naturalHeight ? !0 : !1;
          else
            try {
              C =
                'complete' ===
                (y.readyState
                  ? y.readyState
                  : y.contentWindow &&
                    y.contentWindow.document &&
                    y.contentWindow.document.readyState)
                  ? !0
                  : !1;
            } catch (N) {
              C = void 0 === d ? !1 : d;
            }
          if (C) a = !0;
          else {
            t++;
            p.bc = 'IMG' === y.tagName;
            var G = (function (N) {
              return function () {
                t--;
                t || h(l);
                N.bc && (n--, !n && w && h(l));
              };
            })(p);
            e(y, 'load', G);
            p.bc && (n++, e(y, 'error', G));
          }
        }
      }
      k = null;
      if (0 === t && !a && 'complete' === Da.document.readyState) l = 5;
      else if (t || !a) {
        e(Da, 'load', function () {
          f && n ? (w = !0) : h(4);
        });
        return;
      }
      c && h(l);
    }
  }
  function Xl(a, b, c) {
    if (a) for (var d = 0; null != a && 500 > d && !c(a); ++d) a = b(a);
  }
  function Yl(a, b) {
    Xl(
      a,
      function (c) {
        try {
          return c === c.parent ? null : c.parent;
        } catch (d) {}
        return null;
      },
      b
    );
  }
  function Zl(a, b) {
    if ('IFRAME' == a.tagName) b(a);
    else {
      a = a.querySelectorAll('IFRAME');
      for (var c = 0; c < a.length && !b(a[c]); ++c);
    }
  }
  function $l(a) {
    return ((a = a.ownerDocument) && (a.parentWindow || a.defaultView)) || null;
  }
  function am(a, b, c) {
    try {
      var d = JSON.parse(c.data);
    } catch (g) {}
    if ('object' === typeof d && d && 'creativeLoad' === d.type) {
      var e = $l(a);
      if (c.source && e) {
        var f;
        Yl(c.source, function (g) {
          try {
            if (g.parent === e) return (f = g), !0;
          } catch (h) {}
        });
        f &&
          Zl(a, function (g) {
            if (g.contentWindow === f) return b(d), !0;
          });
      }
    }
  }
  function bm(a) {
    return 'string' === typeof a ? document.getElementById(a) : a;
  }
  var cm = function (a, b) {
    var c = bm(a);
    if (c)
      if (c.onCreativeLoad) c.onCreativeLoad(b);
      else {
        var d = b ? [b] : [],
          e = function (f) {
            for (var g = 0; g < d.length; ++g)
              try {
                d[g](1, f);
              } catch (h) {}
            d = {
              push: function (h) {
                h(1, f);
              },
            };
          };
        c.onCreativeLoad = function (f) {
          d.push(f);
        };
        c.setAttribute('data-creative-load-listener', '');
        c.addEventListener('creativeLoad', function (f) {
          e(f.detail);
        });
        Da.addEventListener('message', function (f) {
          am(c, e, f);
        });
      }
  };
  var dm = function (a, b) {
      var c = this;
      this.global = a;
      this.Hc = b;
      this.Sg = this.document
        ? ff(Q(!0), jg(this.document, 'visibilitychange')).h(
            Lg(this.Hc.s, 748),
            R(function () {
              return c.document ? c.document.visibilityState : 'visible';
            }),
            S()
          )
        : Q('visible');
      this.Pg = this.document
        ? jg(this.document, 'DOMContentLoaded').h(Lg(this.Hc.s, 739), Ee(1))
        : Q(sk('DOMContentLoaded'));
    },
    Lk = function (a) {
      return a.document ? a.document.readyState : 'complete';
    },
    vl = function (a) {
      return null !== a.document && void 0 !== a.document.visibilityState;
    };
  dm.prototype.querySelector = function (a) {
    return this.document ? this.document.querySelector(a) : null;
  };
  dm.prototype.querySelectorAll = function (a) {
    return this.document ? wb(this.document.querySelectorAll(a)) : [];
  };
  var Rj = function (a) {
    return (
      null !== a.document && 'function' === typeof a.document.elementFromPoint
    );
  };
  dm.prototype.elementFromPoint = function (a, b) {
    if (!this.document || !Rj(this)) return null;
    a = this.document.elementFromPoint(a, b);
    return null === a ? null : new wg(a);
  };
  var uj = function (a, b, c) {
    c = void 0 === c ? !1 : c;
    if (void 0 === b.j || !a.document) return Q(b).h(Lg(a.Hc.s, 749));
    var d = new wf(1),
      e = function () {
        d.next(b);
      };
    c || cm(b.j, e);
    Wl(b.j, e);
    return d.h(Lg(a.Hc.s, 749), Ee(1));
  };
  q.Object.defineProperties(dm.prototype, {
    document: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return Bb(this.global, 'document')
          ? this.global.document || null
          : null;
      },
    },
  });
  var em = function (a) {
    Xc.call(this, a);
  };
  v(em, Xc);
  em.prototype.Ce = function () {
    return zc(qc(this, 2), '');
  };
  var gm = function (a) {
    Xc.call(this, a, -1, fm);
  };
  v(gm, Xc);
  var jm = function (a, b) {
      return sc(a, 2, b);
    },
    km = function (a, b) {
      return sc(a, 3, b);
    },
    mm = function (a, b) {
      return sc(a, 4, b);
    },
    nm = function (a, b) {
      return sc(a, 5, b);
    },
    om = function (a, b) {
      return sc(a, 9, b);
    },
    pm = function (a, b) {
      return yc(a, em, 10, b);
    },
    qm = function (a, b) {
      return sc(a, 11, b);
    },
    rm = function (a, b) {
      return sc(a, 1, b);
    },
    sm = function (a, b) {
      return sc(a, 7, b);
    },
    fm = [10, 6];
  var tm =
    'platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64'.split(
      ' '
    );
  function um(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : (a.google_tag_data = {});
  }
  function vm(a) {
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
  function wm(a) {
    if (!vm(a)) return null;
    var b = um(a);
    if (b.uach_promise) return b.uach_promise;
    a = a.navigator.userAgentData.getHighEntropyValues(tm).then(function (c) {
      null != b.uach || (b.uach = c);
      return c;
    });
    return (b.uach_promise = a);
  }
  function xm(a) {
    var b;
    return qm(
      pm(
        nm(
          jm(
            rm(
              mm(
                sm(
                  om(km(new gm(), a.architecture || ''), a.bitness || ''),
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
              var d = new em();
              d = sc(d, 1, c.brand);
              return sc(d, 2, c.version);
            })) || []
      ),
      a.wow64 || !1
    );
  }
  function ym(a) {
    var b, c;
    return null !=
      (c =
        null == (b = wm(a))
          ? void 0
          : b.then(function (d) {
              return xm(d);
            }))
      ? c
      : null;
  }
  var qk = function (a, b, c) {
    a = void 0 === a ? window : a;
    b = void 0 === b ? null : b;
    c = void 0 === c ? new wl() : c;
    xl.call(this);
    this.global = a;
    this.Va = b;
    this.s = c;
    this.Qg = jg(this.global, 'pagehide').h(Lg(this.s, 941));
    this.af = jg(this.global, 'load').h(Lg(this.s, 738), Ee(1));
    this.Rg = jg(this.global, 'resize').h(Lg(this.s, 741));
    this.onMessage = jg(this.global, 'message').h(Lg(this.s, 740));
    this.document = new dm(this.global, this);
    this.l = new Nl(new Ql(this.G, this.s), new Pl(this.G, this.s));
    this.H = new yl(
      new Zg(this),
      new Rg(this, new Ug(this), 'GET'),
      new Rg(this, new Sl(this), 'POST'),
      new Rg(this, new Rl(this), 'GET')
    );
  };
  v(qk, xl);
  var Vg = function (a) {
    var b = a.global;
    return (
      !!a.global.HTMLFencedFrameElement &&
      !!b.fence &&
      'function' === typeof b.fence.reportEvent
    );
  };
  qk.prototype.eb = function (a) {
    Vg(this) && this.global.fence.reportEvent(a);
  };
  qk.prototype.Ad = function () {
    return this.Qg.h(
      Lg(this.s, 942),
      Y(this.i, 1),
      R(function () {})
    );
  };
  var $h = function (a) {
      var b = new qk(a.global.top, a.Va);
      b.H = a.H;
      return b;
    },
    ai = function (a, b) {
      b.start();
      return jg(b, 'message').h(Lg(a.s, 740));
    };
  qk.prototype.postMessage = function (a, b, c) {
    c = void 0 === c ? [] : c;
    this.global.postMessage(a, b, c);
  };
  qk.prototype.Bd = function () {
    return Qj(this.global) ? this.global.width : 0;
  };
  qk.prototype.yd = function () {
    return Qj(this.global) ? this.global.height : 0;
  };
  var pk = function (a, b) {
    try {
      var c = a.global;
      try {
        b && (c = c.top);
        a = c;
        var d = Vj() || Wj();
        b && null !== a && a != a.top && (a = a.top);
        try {
          if (void 0 === d ? 0 : d)
            var e = new Bj(a.innerWidth, a.innerHeight).round();
          else {
            var f = (a || window).document,
              g = 'CSS1Compat' == f.compatMode ? f.documentElement : f.body;
            e = new Bj(g.clientWidth, g.clientHeight).round();
          }
          var h = e;
        } catch (A) {
          h = new Bj(-12245933, -12245933);
        }
        b = h;
        var k = b.height,
          l = b.width;
        if (-12245933 === l) var p = new Ij(l, l, l, l);
        else {
          var t = Fj(Ej(c.document).mb),
            n = t.x,
            w = t.y;
          p = new Ij(w, n + l, w + k, n);
        }
      } catch (A) {
        p = new Ij(-12245933, -12245933, -12245933, -12245933);
      }
      return { left: p.left, top: p.top, width: p.Bd(), height: p.yd() };
    } catch (A) {
      return Ph;
    }
  };
  qk.prototype.validate = function () {
    return this.global && this.l.sa() && this.H.ka();
  };
  var ch = function (a) {
    return (a = ym(a.global)) ? Yd(a) : null;
  };
  q.Object.defineProperties(qk.prototype, {
    G: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return window;
      },
    },
    nb: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return !Qj(this.global.top);
      },
    },
    Ed: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.nb || this.global.top !== this.global;
      },
    },
    scrollY: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.global.scrollY;
      },
    },
    MutationObserver: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.G.MutationObserver;
      },
    },
    ResizeObserver: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.G.ResizeObserver;
      },
    },
    sg: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        D(!0, 'Major version must be an integer');
        var a = ob();
        if (E('Trident') || E('MSIE')) {
          var b = /rv: *([\d\.]*)/.exec(a);
          if (b && b[1]) a = b[1];
          else {
            b = '';
            var c = /MSIE +([\d\.]+)/.exec(a);
            if (c && c[1])
              if (((a = /Trident\/(\d.\d)/.exec(a)), '7.0' == c[1]))
                if (a && a[1])
                  switch (a[1]) {
                    case '4.0':
                      b = '8.0';
                      break;
                    case '5.0':
                      b = '9.0';
                      break;
                    case '6.0':
                      b = '10.0';
                      break;
                    case '7.0':
                      b = '11.0';
                  }
                else b = '7.0';
              else b = c[1];
            a = b;
          }
        } else a = '';
        '' === a
          ? (a = NaN)
          : ((a = a.split('.')), (a = 0 === a.length ? NaN : Number(a[0])));
        return 8 <= a;
      },
    },
    Jf: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return 'vu' in this.global || 'vv' in this.global;
      },
    },
  });
  function zm(a, b, c, d, e) {
    var f = new Qg(),
      g = new rl(f, { sd: b, Md: c, oa: d, bb: e });
    g.start(a);
    var h = function (k, l, p) {
      p(!0);
    };
    f.start(
      a,
      function (k, l, p) {
        g.nd.next(
          Object.assign({}, g.Vg.ue.get(k), {
            metadata: l,
            Yf: p,
            di: k,
            Wa: h,
          })
        );
      },
      function () {},
      function () {
        g.lb();
      }
    );
    return g.Bg;
  }
  function Am(a, b) {
    if (!b) throw Error('O`' + a);
    if ('string' !== typeof b && !(b instanceof String)) throw Error('P`' + a);
    if ('' === b.trim()) throw Error('Q`' + a);
  }
  function Bm(a) {
    if (!a) throw Error('T`functionToExecute');
  }
  function Cm(a, b) {
    if (null == b) throw Error('R`' + a);
    if ('number' !== typeof b || isNaN(b)) throw Error('S`' + a);
    if (0 > b) throw Error('U`' + a);
  }
  function Dm() {
    return /\d+\.\d+\.\d+(-.*)?/.test('1.4.1-google_20221025');
  }
  function Em() {
    for (var a = ['1', '4', '1'], b = ['1', '0', '3'], c = 0; 3 > c; c++) {
      var d = parseInt(a[c], 10),
        e = parseInt(b[c], 10);
      if (d > e) break;
      else if (d < e) return !1;
    }
    return !0;
  }
  var Fm = function (a, b, c, d) {
      this.Ee = a;
      this.method = b;
      this.version = c;
      this.args = d;
    },
    Gm = function (a) {
      return (
        !!a &&
        void 0 !== a.omid_message_guid &&
        void 0 !== a.omid_message_method &&
        void 0 !== a.omid_message_version &&
        'string' === typeof a.omid_message_guid &&
        'string' === typeof a.omid_message_method &&
        'string' === typeof a.omid_message_version &&
        (void 0 === a.omid_message_args || void 0 !== a.omid_message_args)
      );
    },
    Hm = function (a) {
      return new Fm(
        a.omid_message_guid,
        a.omid_message_method,
        a.omid_message_version,
        a.omid_message_args
      );
    };
  Fm.prototype.vb = function () {
    var a = {};
    a =
      ((a.omid_message_guid = this.Ee),
      (a.omid_message_method = this.method),
      (a.omid_message_version = this.version),
      a);
    void 0 !== this.args && (a.omid_message_args = this.args);
    return a;
  };
  var Im = function (a) {
    this.Rc = a;
  };
  Im.prototype.vb = function () {
    return JSON.stringify(void 0);
  };
  function Jm(a, b) {
    return a && (a[b] || (a[b] = {}));
  }
  function Km() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (a) {
        var b = (16 * Math.random()) | 0;
        return 'y' === a ? ((b & 3) | 8).toString(16) : b.toString(16);
      }
    );
  }
  function Lm() {
    var a = x.apply(0, arguments);
    Mm(
      function () {
        throw new (Function.prototype.bind.apply(
          Error,
          [null, 'Could not complete the test successfully - '].concat(ea(a))
        ))();
      },
      function () {
        return console.error.apply(console, ea(a));
      }
    );
  }
  function Mm(a, b) {
    'undefined' !== typeof jasmine && jasmine
      ? a()
      : 'undefined' !== typeof console && console && console.error && b();
  }
  var Nm = (function () {
    if ('undefined' !== typeof omidGlobal && omidGlobal) return omidGlobal;
    if ('undefined' !== typeof global && global) return global;
    if ('undefined' !== typeof window && window) return window;
    if ('undefined' !== typeof globalThis && globalThis) return globalThis;
    var a = Function('return this')();
    if (a) return a;
    throw Error('V');
  })();
  var Om = function (a) {
    try {
      return a.frames ? !!a.frames.omid_v1_present : !1;
    } catch (b) {
      return !1;
    }
  };
  var Pm = function (a) {
    this.Rc = a;
    this.handleExportedMessage = Pm.prototype.hg.bind(this);
  };
  v(Pm, Im);
  Pm.prototype.sendMessage = function (a, b) {
    b = void 0 === b ? this.Rc : b;
    if (!b) throw Error('W');
    b.handleExportedMessage(a.vb(), this);
  };
  Pm.prototype.hg = function (a, b) {
    if (Gm(a) && this.onMessage) this.onMessage(Hm(a), b);
  };
  function Qm(a) {
    return null != a && 'undefined' !== typeof a.top && null != a.top;
  }
  function Rm(a) {
    if (a === Nm) return !1;
    try {
      if ('undefined' === typeof a.location.hostname) return !0;
    } catch (b) {
      return !0;
    }
    return !1;
  }
  var Sm = function (a, b) {
    this.Rc = b = void 0 === b ? Nm : b;
    var c = this;
    a.addEventListener('message', function (d) {
      if ('object' === typeof d.data) {
        var e = d.data;
        if (Gm(e) && d.source && c.onMessage) c.onMessage(Hm(e), d.source);
      }
    });
  };
  v(Sm, Im);
  Sm.prototype.sendMessage = function (a, b) {
    b = void 0 === b ? this.Rc : b;
    if (!b) throw Error('W');
    b.postMessage(a.vb(), '*');
  };
  var Tm = ['omid', 'v1_VerificationServiceCommunication'],
    Um = ['omidVerificationProperties', 'serviceWindow'];
  function Vm(a, b) {
    return b.reduce(function (c, d) {
      return c && c[d];
    }, a);
  }
  var Wm = function (a) {
    if (!a) {
      var b;
      'undefined' === typeof b &&
        'undefined' !== typeof window &&
        window &&
        (b = window);
      b = Qm(b) ? b : Nm;
      var c = void 0 === c ? Om : c;
      a = [];
      var d = Vm(b, Um);
      d && a.push(d);
      a.push(Qm(b) ? b.top : Nm);
      a: {
        a = u(a);
        for (var e = a.next(); !e.done; e = a.next()) {
          b: {
            d = b;
            e = e.value;
            var f = c;
            if (!Rm(e))
              try {
                var g = Vm(e, Tm);
                if (g) {
                  var h = new Pm(g);
                  break b;
                }
              } catch (k) {}
            h = f(e) ? new Sm(d, e) : null;
          }
          if ((d = h)) {
            a = d;
            break a;
          }
        }
        a = null;
      }
    }
    if ((this.Db = a)) this.Db.onMessage = this.ig.bind(this);
    else if (
      (c =
        (c = Nm.omid3p) &&
        'function' === typeof c.registerSessionObserver &&
        'function' === typeof c.addEventListener
          ? c
          : null)
    )
      this.Rb = c;
    this.Xg = this.Yg = 0;
    this.gd = {};
    this.Dd = [];
    this.yc = (c = Nm.omidVerificationProperties) ? c.injectionId : void 0;
  };
  Wm.prototype.ka = function () {
    return !(!this.Db && !this.Rb);
  };
  var Hl = function (a, b, c) {
    Bm(b);
    a.Rb
      ? a.Rb.registerSessionObserver(b, c, a.yc)
      : a.ub('addSessionListener', b, c, a.yc);
  };
  Wm.prototype.addEventListener = function (a, b) {
    Am('eventType', a);
    Bm(b);
    this.Rb
      ? this.Rb.addEventListener(a, b, this.yc)
      : this.ub('addEventListener', b, a, this.yc);
  };
  var Bl = function (a, b, c, d) {
      Am('url', b);
      Nm.document && Nm.document.createElement
        ? Xm(a, b, c, d)
        : a.ub(
            'sendUrl',
            function (e) {
              e && c ? c() : !e && d && d();
            },
            b
          );
    },
    Xm = function (a, b, c, d) {
      var e = Nm.document.createElement('img');
      a.Dd.push(e);
      var f = function (g) {
        var h = a.Dd.indexOf(e);
        0 <= h && a.Dd.splice(h, 1);
        g && g();
      };
      e.addEventListener('load', f.bind(a, c));
      e.addEventListener('error', f.bind(a, d));
      e.src = b;
    };
  Wm.prototype.setTimeout = function (a, b) {
    Bm(a);
    Cm('timeInMillis', b);
    if (Ym()) return Nm.setTimeout(a, b);
    var c = this.Yg++;
    this.ub('setTimeout', a, c, b);
    return c;
  };
  Wm.prototype.clearTimeout = function (a) {
    Cm('timeoutId', a);
    Ym() ? Nm.clearTimeout(a) : this.ff('clearTimeout', a);
  };
  Wm.prototype.setInterval = function (a, b) {
    Bm(a);
    Cm('timeInMillis', b);
    if (Zm()) return Nm.setInterval(a, b);
    var c = this.Xg++;
    this.ub('setInterval', a, c, b);
    return c;
  };
  Wm.prototype.clearInterval = function (a) {
    Cm('intervalId', a);
    Zm() ? Nm.clearInterval(a) : this.ff('clearInterval', a);
  };
  var Ym = function () {
      return (
        'function' === typeof Nm.setTimeout &&
        'function' === typeof Nm.clearTimeout
      );
    },
    Zm = function () {
      return (
        'function' === typeof Nm.setInterval &&
        'function' === typeof Nm.clearInterval
      );
    };
  Wm.prototype.ig = function (a) {
    var b = a.method,
      c = a.Ee;
    a = a.args;
    if ('response' === b && this.gd[c]) {
      var d =
        Dm() && Em()
          ? a
            ? a
            : []
          : a && 'string' === typeof a
          ? JSON.parse(a)
          : [];
      this.gd[c].apply(this, d);
    }
    'error' === b && window.console && Lm(a);
  };
  Wm.prototype.ff = function (a) {
    this.ub.apply(this, [a, null].concat(ea(x.apply(1, arguments))));
  };
  Wm.prototype.ub = function (a, b) {
    var c = x.apply(2, arguments);
    if (this.Db) {
      var d = Km();
      b && (this.gd[d] = b);
      var e = 'VerificationService.' + a;
      c = Dm() && Em() ? c : JSON.stringify(c);
      this.Db.sendMessage(new Fm(d, e, '1.4.1-google_20221025', c));
    }
  };
  var $m = void 0;
  if (
    ($m =
      void 0 === $m
        ? 'undefined' === typeof omidExports
          ? null
          : omidExports
        : $m)
  ) {
    var an = ['OmidVerificationClient'];
    an.slice(0, an.length - 1).reduce(Jm, $m)[an[an.length - 1]] = Wm;
  }
  var bn = null;
  try {
    var cn = new Wm();
    bn = new Gl(cn, 'doubleclickbygoogle.com-omid');
  } catch (a) {
    bn = null;
  }
  (function (a, b, c, d, e) {
    var f = ql(a, void 0 === e ? null : e);
    return a.s.Ha(742, function () {
      return zm(
        a,
        null != b ? b : f.sd,
        null != c ? c : f.Md,
        null != d ? d : f.oa,
        f.bb
      );
    })();
  })(new qk(window, null, new Ll()), void 0, void 0, void 0, bn).subscribe();
}).call(this);
