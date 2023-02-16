(function (_) {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  /*

 SPDX-License-Identifier: Apache-2.0
*/
  var aa,
    ea,
    ha,
    ia,
    ja,
    oa,
    qa,
    sa,
    wa,
    pa,
    va,
    xa,
    ya,
    za,
    Aa,
    Ba,
    Ea,
    Fa,
    Ha,
    Ja,
    Ka,
    Ma,
    La,
    Pa,
    Qa,
    Va,
    Wa,
    Ya,
    $a,
    bb,
    db,
    gb,
    ib,
    ob,
    sb,
    vb,
    yb,
    zb,
    Bb,
    Eb,
    Gb,
    Jb,
    Kb,
    Hb,
    Ib,
    Lb,
    Mb,
    Nb,
    Ob,
    Pb,
    Qb,
    Rb,
    Ub,
    Wb,
    Vb,
    Xb,
    Yb,
    Zb,
    $b,
    ac,
    ec,
    dc,
    cc,
    gc,
    ic,
    jc,
    kc,
    lc,
    oc,
    pc,
    qc,
    rc,
    vc,
    xc,
    yc,
    Ac,
    Dc,
    Fc,
    Ec,
    Ic,
    Gc,
    Hc,
    Jc,
    Oc,
    Kc,
    Pc,
    hc,
    Qc,
    Rc,
    Vc,
    Xc,
    Sc,
    ad,
    dd,
    Yc,
    Zc,
    hd,
    id,
    jd,
    kd,
    fd,
    gd,
    ld,
    pd,
    qd,
    sd,
    td,
    ud,
    xd,
    yd,
    zd,
    Bd,
    Gd,
    Hd,
    B,
    Jd,
    Kd,
    Md,
    Nd,
    Od,
    Qd,
    Sd,
    Ud,
    ie,
    $d,
    ke,
    me,
    ne,
    oe,
    qe,
    ue,
    ve,
    we,
    ze,
    Ae,
    De,
    Ee,
    Ie,
    Qe,
    Me,
    Ue,
    Ve,
    df,
    bf,
    af,
    Ye,
    ff,
    qf,
    rf,
    sf,
    Hf,
    Nf,
    Lf,
    Mf,
    Sf,
    Wf,
    Xf,
    $f,
    dg,
    bg,
    ug,
    zg,
    Ag,
    Cg,
    Dg,
    Hg,
    Ig,
    Jg,
    Fg,
    Gg,
    Kg,
    Lg,
    Ng,
    Og,
    Mg,
    Sg,
    Ug,
    Vg,
    Wg,
    dh,
    hh,
    J,
    mh,
    Ah,
    Eh,
    Gh,
    Hh,
    Jh,
    Kh,
    Mh,
    Oh,
    Rh,
    Uh,
    Wh,
    $h,
    Yh,
    ai,
    hi,
    ii,
    ji,
    ki,
    bi,
    li,
    ci,
    ni,
    pi,
    qi,
    si,
    ri,
    Ai,
    yi,
    Bi,
    Ki,
    Ni,
    Fi,
    Gi,
    Oi,
    Pi,
    Ri,
    Si,
    Ti,
    Ui,
    Yi,
    cj,
    Zi,
    Wi,
    lj,
    jj,
    kj,
    mj,
    nj,
    oj,
    qj,
    Cj,
    Dj,
    Fj,
    Ij,
    Kj,
    M,
    Mj,
    Nj,
    Oj,
    Qj,
    Sj,
    Tj,
    Uj,
    Xj,
    Wj,
    Vj,
    fk,
    ik,
    pk,
    qk,
    sk,
    tk,
    xk,
    zk,
    Dk,
    Jk,
    Lk,
    Nk,
    Ok,
    Pk,
    Sk,
    Vk,
    Xk,
    Zk,
    $k,
    bl,
    dl,
    el,
    cl,
    ra,
    il,
    kl,
    ll,
    nl,
    sl,
    Bl,
    El,
    Hl,
    ul,
    Ql,
    Rl,
    Tl,
    Vl,
    bm,
    fm,
    gm,
    nm,
    om,
    pm,
    qm,
    rm,
    tm,
    um,
    vm,
    wm,
    zm,
    xm,
    Am,
    Bm,
    Cm,
    Dm,
    Em,
    Fm,
    Im,
    Km,
    Lm,
    Mm,
    Pm,
    Nm,
    Om,
    Wm,
    cn,
    fn,
    dn,
    en,
    qn,
    sn,
    tn,
    un,
    vn,
    wn,
    zn,
    Bn,
    In,
    Cn,
    Dn,
    yn,
    Ln,
    Nn,
    On,
    Rn,
    ko,
    lo,
    no,
    to,
    wo,
    xo,
    yo,
    Eo,
    Fo,
    Io,
    Jo,
    Oo,
    Po,
    Uo,
    Vo,
    Xo,
    Yo,
    Zo,
    $o,
    gp,
    np,
    pp,
    qp,
    fq,
    iq,
    jq,
    kq,
    sq,
    uq,
    wq,
    zq,
    E,
    Aq,
    Bq,
    Cq,
    Dq,
    Eq,
    v,
    Fq,
    Gq,
    Hq,
    P,
    Iq,
    Jq,
    Kq,
    Rq,
    Sq,
    Tq,
    kb,
    mb,
    nb,
    Vq,
    Yq,
    Wq,
    Xq,
    Zq,
    $q,
    eb,
    ta,
    la,
    na,
    er,
    fr,
    re;
  ea = function (a) {
    return a ? (a.passive && da() ? a : a.capture || !1) : !1;
  };
  ha = function (a, b) {
    b = _.fa(a, b);
    var c;
    (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
    return c;
  };
  ia = function (a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  };
  ja = function (a, b, c) {
    return 2 >= arguments.length
      ? Array.prototype.slice.call(a, b)
      : Array.prototype.slice.call(a, b, c);
  };
  oa = function (a) {
    for (var b = 0, c = 0, d = {}; c < a.length; ) {
      var e = a[c++],
        f = _.ka(e)
          ? 'o' +
            ((Object.prototype.hasOwnProperty.call(e, la) && e[la]) ||
              (e[la] = ++na))
          : (typeof e).charAt(0) + e;
      Object.prototype.hasOwnProperty.call(d, f) || ((d[f] = !0), (a[b++] = e));
    }
    a.length = b;
  };
  qa = function (a, b) {
    a.sort(b || pa);
  };
  sa = function (a) {
    for (var b = ra, c = Array(a.length), d = 0; d < a.length; d++)
      c[d] = { index: d, value: a[d] };
    var e = b || pa;
    qa(c, function (f, g) {
      return e(f.value, g.value) || f.index - g.index;
    });
    for (b = 0; b < a.length; b++) a[b] = c[b].value;
  };
  wa = function (a, b) {
    if (!ta(a) || !ta(b) || a.length != b.length) return !1;
    for (var c = a.length, d = va, e = 0; e < c; e++)
      if (!d(a[e], b[e])) return !1;
    return !0;
  };
  pa = function (a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  };
  va = function (a, b) {
    return a === b;
  };
  xa = function (a, b) {
    for (var c = {}, d = 0; d < a.length; d++) {
      var e = a[d],
        f = b.call(void 0, e, d, a);
      void 0 !== f && (c[f] || (c[f] = [])).push(e);
    }
    return c;
  };
  ya = function (a) {
    for (var b = [], c = 0; c < arguments.length; c++) {
      var d = arguments[c];
      if (Array.isArray(d))
        for (var e = 0; e < d.length; e += 8192)
          for (
            var f = ya.apply(null, ja(d, e, e + 8192)), g = 0;
            g < f.length;
            g++
          )
            b.push(f[g]);
      else b.push(d);
    }
    return b;
  };
  za = function (a, b) {
    for (var c in a) b.call(void 0, a[c], c, a);
  };
  Aa = function (a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b;
  };
  Ba = function (a, b) {
    for (var c in a) if (b.call(void 0, a[c], c, a)) return c;
  };
  Ea = function (a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < Da.length; f++)
        (c = Da[f]),
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  };
  Fa = function () {
    var a = _.q.navigator;
    return a && (a = a.userAgent) ? a : '';
  };
  Ha = function (a) {
    return -1 != Fa().indexOf(a);
  };
  Ja = function (a) {
    for (
      var b = RegExp('([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?', 'g'),
        c = [],
        d;
      (d = b.exec(a));

    )
      c.push([d[1], d[2], d[3] || void 0]);
    return c;
  };
  Ka = function () {
    return Ha('Firefox') || Ha('FxiOS');
  };
  Ma = function () {
    return (
      Ha('Safari') &&
      !(
        La() ||
        Ha('Coast') ||
        Ha('Opera') ||
        Ha('Edge') ||
        Ha('Edg/') ||
        Ha('OPR') ||
        Ka() ||
        Ha('Silk') ||
        Ha('Android')
      )
    );
  };
  La = function () {
    return ((Ha('Chrome') || Ha('CriOS')) && !Ha('Edge')) || Ha('Silk');
  };
  Pa = function (a) {
    var b = {};
    a.forEach(function (c) {
      b[c[0]] = c[1];
    });
    return function (c) {
      return (
        b[
          _.t(c, 'find').call(c, function (d) {
            return d in b;
          })
        ] || ''
      );
    };
  };
  Qa = function () {
    var a = Fa();
    if (Ha('Trident') || Ha('MSIE')) {
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
      return a;
    }
    a = Ja(a);
    b = Pa(a);
    return Ha('Opera')
      ? b(['Version', 'Opera'])
      : Ha('Edge')
      ? b(['Edge'])
      : Ha('Edg/')
      ? b(['Edg'])
      : Ha('Silk')
      ? b(['Silk'])
      : La()
      ? b(['Chrome', 'CriOS', 'HeadlessChrome'])
      : ((a = a[2]) && a[1]) || '';
  };
  _.Ua = function (a) {
    if (a instanceof Ra) a = Sa(a);
    else {
      b: if (Ta) {
        try {
          var b = new URL(a);
        } catch (c) {
          b = 'https:';
          break b;
        }
        b = b.protocol;
      } else
        c: {
          b = document.createElement('a');
          try {
            b.href = a;
          } catch (c) {
            b = void 0;
            break c;
          }
          b = b.protocol;
          b = ':' === b || '' === b ? 'https:' : b;
        }
      a = 'javascript:' !== b ? a : void 0;
    }
    return a;
  };
  Va = function (a) {
    throw Error('unexpected value ' + a + '!');
  };
  Wa = function (a) {
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
  };
  Ya = function (a, b) {
    a.textContent =
      b instanceof Xa && b.constructor === Xa ? b.j : 'type_error:SafeScript';
    Wa(a);
  };
  $a = function (a, b) {
    a.src = Za(b);
    Wa(a);
  };
  bb = function (a, b) {
    a.write(ab(b));
  };
  db = function (a) {
    return new _.cb(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ':';
    });
  };
  gb = function (a) {
    for (var b = eb.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++)
      c.push(String(b[d])), c.push(a[d + 1]);
    return _.fb(c.join(''));
  };
  ib = function (a) {
    var b = window,
      c = !0;
    c = void 0 === c ? !1 : c;
    new v.Promise(function (d, e) {
      function f() {
        g.onload = null;
        g.onerror = null;
        var h;
        null == (h = g.parentElement) || h.removeChild(g);
      }
      var g = b.document.createElement('script');
      g.onload = function () {
        f();
        d();
      };
      g.onerror = function () {
        f();
        e(void 0);
      };
      g.type = 'text/javascript';
      $a(g, a);
      c && 'complete' !== b.document.readyState
        ? _.hb(b, 'load', function () {
            b.document.body.appendChild(g);
          })
        : b.document.body.appendChild(g);
    });
  };
  ob = function (a) {
    var b, c, d, e, f, g;
    return _.jb(function (h) {
      switch (h.j) {
        case 1:
          return (
            (b =
              'https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=' +
              a.j +
              ('&tv=' + a.m + '&st=') +
              a.Fb),
            (c = void 0),
            (h.D = 2),
            kb(h, lb(b), 4)
          );
        case 4:
          c = h.m;
          mb(h, 3);
          break;
        case 2:
          nb(h);
        case 3:
          if (!c) return h.return(void 0);
          d = a.jc || c.sodar_query_id;
          e = void 0 !== c.rc_enable && a.D ? c.rc_enable : 'n';
          f = void 0 === c.bg_snapshot_delay_ms ? '0' : c.bg_snapshot_delay_ms;
          g = void 0 === c.is_gen_204 ? '1' : c.is_gen_204;
          return d && c.bg_hash_basename && c.bg_binary
            ? h.return({
                context: a.J,
                Ue: c.bg_hash_basename,
                Te: c.bg_binary,
                Mf: a.j + '_' + a.m,
                jc: d,
                Fb: a.Fb,
                Pc: e,
                dd: f,
                Oc: g,
              })
            : h.return(void 0);
      }
    });
  };
  sb = function (a) {
    var b;
    return _.jb(function (c) {
      if (1 == c.j) return kb(c, ob(a), 2);
      if ((b = c.m)) {
        var d = 'sodar2';
        d = void 0 === d ? 'sodar2' : d;
        var e = window,
          f = e.GoogleGcLKhOms;
        (f && 'function' === typeof f.push) || (f = e.GoogleGcLKhOms = []);
        var g = {};
        f.push(
          ((g._ctx_ = b.context),
          (g._bgv_ = b.Ue),
          (g._bgp_ = b.Te),
          (g._li_ = b.Mf),
          (g._jk_ = b.jc),
          (g._st_ = b.Fb),
          (g._rc_ = b.Pc),
          (g._dl_ = b.dd),
          (g._g2_ = b.Oc),
          g)
        );
        if ((f = e.GoogleDX5YKUSk)) (e.GoogleDX5YKUSk = void 0), f[1]();
        d = pb(qb, { basename: d });
        ib(d);
      }
      return c.return(b);
    });
  };
  vb = function (a) {
    var b = !1;
    b = void 0 === b ? !1 : b;
    if (tb) {
      if (
        b &&
        /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(
          a
        )
      )
        throw Error('Found an unpaired surrogate');
      a = (ub || (ub = new TextEncoder())).encode(a);
    } else {
      for (
        var c = 0, d = new Uint8Array(3 * a.length), e = 0;
        e < a.length;
        e++
      ) {
        var f = a.charCodeAt(e);
        if (128 > f) d[c++] = f;
        else {
          if (2048 > f) d[c++] = (f >> 6) | 192;
          else {
            if (55296 <= f && 57343 >= f) {
              if (56319 >= f && e < a.length) {
                var g = a.charCodeAt(++e);
                if (56320 <= g && 57343 >= g) {
                  f = 1024 * (f - 55296) + g - 56320 + 65536;
                  d[c++] = (f >> 18) | 240;
                  d[c++] = ((f >> 12) & 63) | 128;
                  d[c++] = ((f >> 6) & 63) | 128;
                  d[c++] = (f & 63) | 128;
                  continue;
                } else e--;
              }
              if (b) throw Error('Found an unpaired surrogate');
              f = 65533;
            }
            d[c++] = (f >> 12) | 224;
            d[c++] = ((f >> 6) & 63) | 128;
          }
          d[c++] = (f & 63) | 128;
        }
      }
      a = c === d.length ? d : d.subarray(0, c);
    }
    return a;
  };
  yb = function (a) {
    if (!wb) return xb(a);
    for (var b = ''; 10240 < a.length; )
      (b += String.fromCharCode.apply(null, a.subarray(0, 10240))),
        (a = a.subarray(10240));
    b += String.fromCharCode.apply(null, a);
    return btoa(b);
  };
  zb = function (a) {
    switch (a) {
      case '-':
        return '+';
      case '_':
        return '/';
      case '.':
        return '=';
      default:
        return '';
    }
  };
  Bb = function (a) {
    return Ab && null != a && a instanceof Uint8Array;
  };
  Eb = function (a) {
    if (a !== Db) throw Error('illegal external caller');
  };
  Gb = function (a, b) {
    if (Fb) return (a[Fb] |= b);
    if (void 0 !== a.Ma) return (a.Ma |= b);
    Object.defineProperties(a, {
      Ma: { value: b, configurable: !0, writable: !0, enumerable: !1 },
    });
    return b;
  };
  Jb = function (a, b) {
    var c = Hb(a);
    (c & b) !== b &&
      (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), Ib(a, c | b));
    return a;
  };
  Kb = function (a, b) {
    Fb ? a[Fb] && (a[Fb] &= ~b) : void 0 !== a.Ma && (a.Ma &= ~b);
  };
  Hb = function (a) {
    var b;
    Fb ? (b = a[Fb]) : (b = a.Ma);
    return null == b ? 0 : b;
  };
  Ib = function (a, b) {
    Fb
      ? (a[Fb] = b)
      : void 0 !== a.Ma
      ? (a.Ma = b)
      : Object.defineProperties(a, {
          Ma: { value: b, configurable: !0, writable: !0, enumerable: !1 },
        });
  };
  Lb = function (a) {
    Gb(a, 1);
    return a;
  };
  Mb = function (a) {
    return !!(Hb(a) & 2);
  };
  Nb = function (a) {
    Gb(a, 18);
    return a;
  };
  Ob = function (a) {
    Gb(a, 16);
    return a;
  };
  Pb = function (a, b) {
    Ib(b, (a | 0) & -51);
  };
  Qb = function (a, b) {
    Ib(b, (a | 18) & -41);
  };
  Rb = function (a) {
    return (
      null !== a &&
      'object' === typeof a &&
      !Array.isArray(a) &&
      a.constructor === Object
    );
  };
  Ub = function (a, b, c) {
    if (null != a)
      if ('string' === typeof a) a = a ? new Sb(a, Db) : Tb();
      else if (a.constructor !== Sb)
        if (Bb(a)) {
          var d;
          c
            ? (d = 0 == a.length ? Tb() : new Sb(a, Db))
            : (d = a.length ? new Sb(new Uint8Array(a), Db) : Tb());
          a = d;
        } else {
          if (!b) throw Error();
          a = void 0;
        }
    return a;
  };
  Wb = function (a) {
    Vb(Hb(a.fa));
  };
  Vb = function (a) {
    if (a & 2) throw Error();
  };
  Xb = function (a) {
    var b = a.length;
    (b = b ? a[b - 1] : void 0) && Rb(b)
      ? (b.g = 1)
      : ((b = {}), a.push(((b.g = 1), b)));
  };
  Yb = function (a) {
    if (null != a && 'number' !== typeof a)
      throw Error(
        'Value of float/double field must be a number|null|undefined, found ' +
          typeof a +
          ': ' +
          a
      );
    return a;
  };
  Zb = function (a) {
    return a;
  };
  $b = function (a) {
    return a;
  };
  ac = function (a) {
    return a;
  };
  ec = function (a, b, c, d) {
    var e = !1;
    if (
      null != a &&
      'object' === typeof a &&
      !(e = Array.isArray(a)) &&
      a.Gd === bc
    )
      return a;
    if (!e) return c ? (d & 2 ? cc(b) : new b()) : void 0;
    dc(a, d);
    return new b(a);
  };
  dc = function (a, b) {
    var c = Hb(a),
      d = c;
    0 === d && (d |= b & 16);
    d |= b & 2;
    d !== c && Ib(a, d);
  };
  cc = function (a) {
    var b = a[fc];
    if (b) return b;
    b = new a();
    Nb(b.fa);
    return (a[fc] = b);
  };
  gc = function (a, b) {
    a = '' + a;
    b = '' + b;
    return a > b ? 1 : a < b ? -1 : 0;
  };
  ic = function (a, b, c, d) {
    a = ec(a, b, !0, d);
    c && (a = hc(a));
    return a;
  };
  jc = function (a) {
    return a;
  };
  kc = function (a) {
    return a;
  };
  lc = function (a) {
    return a;
  };
  oc = function (a, b, c, d, e) {
    var f = x(a, b, d);
    Array.isArray(f) || (f = mc);
    var g = Hb(f);
    g & 1 || Lb(f);
    if (e) g & 2 || Nb(f), c & 1 || Object.freeze(f);
    else {
      e = !(c & 2);
      var h = g & 2;
      c & 1 || !h
        ? e && g & 16 && !h && Kb(f, 16)
        : ((f = Lb(Array.prototype.slice.call(f))), nc(a, b, f, d));
    }
    return f;
  };
  pc = function (a, b, c, d) {
    var e = Mb(a.fa),
      f = oc(a, b, 1, d, e),
      g = Hb(f);
    if (!(g & 4)) {
      Object.isFrozen(f) && ((f = Lb(f.slice())), nc(a, b, f, d));
      for (var h = 0, l = 0; h < f.length; h++) {
        var k = c(f[h]);
        null != k && (f[l++] = k);
      }
      l < h && (f.length = l);
      g |= 5;
      e && (g |= 18);
      Ib(f, g);
      g & 2 && Object.freeze(f);
    }
    !e &&
      (g & 2 || Object.isFrozen(f)) &&
      ((f = Array.prototype.slice.call(f)), Gb(f, 5), nc(a, b, f, d));
    return f;
  };
  qc = function (a) {
    return Ub(a, !0, !0);
  };
  rc = function (a) {
    return Ub(a, !0, !1);
  };
  vc = function (a, b, c) {
    var d = !1;
    if (null == b) {
      if (c) return sc || (sc = new tc(Nb([])));
      b = [];
    } else if (b.constructor === tc) {
      if (0 == (b.m & 2) || c) return b;
      b = uc(b);
    } else Array.isArray(b) ? (d = Mb(b)) : (b = []);
    if (c) {
      if (!b.length) return sc || (sc = new tc(Nb([])));
      d || ((d = !0), Nb(b));
    } else if (d)
      for (
        d = !1, b = Array.prototype.slice.call(b), c = 0;
        c < b.length;
        c++
      ) {
        var e = (b[c] = Array.prototype.slice.call(b[c]));
        Array.isArray(e[1]) && (e[1] = Nb(e[1]));
      }
    d || (Hb(b) & 32 ? Kb(b, 16) : Hb(a.fa) & 16 && Ob(b));
    d = new tc(b, void 0);
    nc(a, 26, d, !1);
    return d;
  };
  _.y = function (a, b, c, d) {
    Wb(a);
    c !== d ? nc(a, b, c) : nc(a, b, void 0, !1);
    return a;
  };
  xc = function (a, b, c, d, e) {
    var f = !!(e & 2);
    a.j || (a.j = {});
    var g = a.j[c],
      h = oc(a, c, 3, void 0, f);
    if (!g) {
      var l = h;
      g = [];
      f = !!(e & 2);
      h = !!(Hb(l) & 2);
      var k = l;
      !f && h && (l = Array.prototype.slice.call(l));
      var m = e | (h ? 2 : 0);
      e = h;
      for (var n = 0; n < l.length; n++) {
        var p = l[n];
        var r = b;
        Array.isArray(p) ? (dc(p, m), (p = new r(p))) : (p = void 0);
        void 0 !== p && ((e = e || !!(2 & Hb(p.fa))), g.push(p));
      }
      a.j[c] = g;
      m = Hb(l);
      b = m | 33;
      b = e ? b & -9 : b | 8;
      m != b &&
        ((e = l),
        Object.isFrozen(e) && (e = Array.prototype.slice.call(e)),
        Ib(e, b),
        (l = e));
      k !== l && nc(a, c, l);
      (f || (d && h)) && Nb(g);
      d && Object.freeze(g);
      return g;
    }
    f ||
      ((f = Object.isFrozen(g)),
      d && !f
        ? Object.freeze(g)
        : !d && f && ((g = Array.prototype.slice.call(g)), (a.j[c] = g)));
    return g;
  };
  yc = function (a, b) {
    return null == a ? b : a;
  };
  Ac = function (a, b) {
    zc = b;
    a = new a(b);
    zc = void 0;
    return a;
  };
  Dc = function (a) {
    switch (typeof a) {
      case 'number':
        return isFinite(a) ? a : String(a);
      case 'object':
        if (a)
          if (Array.isArray(a)) {
            if (0 !== (Hb(a) & 128))
              return (a = Array.prototype.slice.call(a)), Xb(a), a;
          } else {
            if (Bb(a)) return yb(a);
            if (a instanceof Sb) return Bc(a);
            if (a instanceof tc) return Cc(a);
          }
    }
    return a;
  };
  Fc = function (a, b, c, d) {
    if (null != a) {
      if (Array.isArray(a)) a = Ec(a, b, c, void 0 !== d);
      else if (Rb(a)) {
        var e = {},
          f;
        for (f in a)
          Object.prototype.hasOwnProperty.call(a, f) &&
            (e[f] = Fc(a[f], b, c, d));
        a = e;
      } else a = b(a, d);
      return a;
    }
  };
  Ec = function (a, b, c, d) {
    var e = Hb(a);
    d = d ? !!(e & 16) : void 0;
    a = Array.prototype.slice.call(a);
    for (var f = 0; f < a.length; f++) a[f] = Fc(a[f], b, c, d);
    c(e, a);
    return a;
  };
  Ic = function (a) {
    return Fc(a, Gc, Hc);
  };
  Gc = function (a) {
    return a.Gd === bc ? a.toJSON() : a instanceof tc ? Cc(a, Ic) : Dc(a);
  };
  Hc = function (a, b) {
    a & 128 && Xb(b);
  };
  Jc = function (a, b, c) {
    c = void 0 === c ? Qb : c;
    if (null != a) {
      if (Ab && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        var d = Hb(a);
        if (d & 2) return a;
        if (b && !(d & 32) && (d & 16 || 0 === d)) return Ib(a, d | 18), a;
        a = Ec(a, Jc, d & 4 ? Qb : c, !0);
        b = Hb(a);
        b & 4 && b & 2 && Object.freeze(a);
        return a;
      }
      a.Gd === bc
        ? (a = Kc(a))
        : a instanceof tc &&
          ((b = Nb(uc(a, Jc))), (a = new tc(b, a.J, a.D, a.l)));
      return a;
    }
  };
  Oc = function (a, b, c, d, e, f, g) {
    (a = a.j && a.j[c])
      ? ((d = Hb(a)),
        d & 2
          ? (d = a)
          : ((f = _.Lc(a, Kc)), Qb(d, f), Object.freeze(f), (d = f)),
        Nc(b, c, d, e))
      : _.z(b, c, Jc(d, f, g), e);
  };
  Kc = function (a) {
    if (Mb(a.fa)) return a;
    a = Pc(a, !0);
    Nb(a.fa);
    return a;
  };
  Pc = function (a, b) {
    var c = a.fa,
      d = Ob([]),
      e = a.constructor.messageId;
    e && d.push(e);
    e = a.Ha;
    if (e) {
      d.length = c.length;
      _.t(d, 'fill').call(d, void 0, d.length, c.length);
      var f = {};
      d[d.length - 1] = f;
    }
    0 !== (Hb(c) & 128) && Xb(d);
    b = b || Mb(a.fa) ? Qb : Pb;
    d = Ac(a.constructor, d);
    a.Cd && (d.Cd = a.Cd.slice());
    f = !!(Hb(c) & 16);
    for (var g = e ? c.length - 1 : c.length, h = 0; h < g; h++)
      Oc(a, d, h - a.nb, c[h], !1, f, b);
    if (e) for (var l in e) Oc(a, d, +l, e[l], !0, f, b);
    return d;
  };
  hc = function (a) {
    if (!Mb(a.fa)) return a;
    var b = Pc(a, !1);
    b.B = a;
    return b;
  };
  Qc = function (a, b) {
    if (Array.isArray(a)) {
      var c = Hb(a),
        d = 1;
      !b || c & 2 || (d |= 16);
      (c & d) !== d && Ib(a, c | d);
    }
  };
  Rc = function (a, b) {
    return Dc(b);
  };
  Vc = function (a) {
    var b = 0 > a;
    a = Math.abs(a);
    var c = a >>> 0;
    a = Math.floor((a - c) / 4294967296);
    b &&
      ((c = _.A(Sc(c, a))),
      (b = c.next().value),
      (a = c.next().value),
      (c = b));
    Tc = c >>> 0;
    Uc = a >>> 0;
  };
  Xc = function (a) {
    if (16 > a.length) Vc(Number(a));
    else if (Wc)
      (a = BigInt(a)),
        (Tc = Number(a & BigInt(4294967295)) >>> 0),
        (Uc = Number((a >> BigInt(32)) & BigInt(4294967295)));
    else {
      var b = +('-' === a[0]);
      Uc = Tc = 0;
      for (
        var c = a.length, d = b, e = ((c - b) % 6) + b;
        e <= c;
        d = e, e += 6
      )
        (d = Number(a.slice(d, e))),
          (Uc *= 1e6),
          (Tc = 1e6 * Tc + d),
          4294967296 <= Tc &&
            ((Uc += (Tc / 4294967296) | 0), (Tc %= 4294967296));
      b &&
        ((b = _.A(Sc(Tc, Uc))),
        (a = b.next().value),
        (b = b.next().value),
        (Tc = a),
        (Uc = b));
    }
  };
  Sc = function (a, b) {
    b = ~b;
    a ? (a = ~a + 1) : (b += 1);
    return [a, b];
  };
  ad = function (a, b, c) {
    if (c) {
      var d = {},
        e;
      for (e in c) {
        if (Object.prototype.hasOwnProperty.call(c, e)) {
          var f = c[e],
            g = f.Eg;
          g ||
            ((d.Kb = f.Ph || f.Wh.fd),
            f.Re
              ? ((d.ld = Yc(f.Re)),
                (g = (function (h) {
                  return function (l, k, m) {
                    return h.Kb(l, k, m, h.ld);
                  };
                })(d)))
              : f.Nf
              ? ((d.kd = Zc(f.jf.ce, f.Nf)),
                (g = (function (h) {
                  return function (l, k, m) {
                    return h.Kb(l, k, m, h.kd);
                  };
                })(d)))
              : (g = d.Kb),
            (f.Eg = g));
          g(b, a, f.jf);
        }
        d = { Kb: d.Kb, ld: d.ld, kd: d.kd };
      }
    }
    $c(b, a);
  };
  dd = function (a, b) {
    var c = a[b];
    'function' == typeof c && 0 === c.length && ((c = c()), (a[b] = c));
    return Array.isArray(c) &&
      (bd in c || cd in c || (0 < c.length && 'function' == typeof c[0]))
      ? c
      : void 0;
  };
  Yc = function (a) {
    var b = a[ed];
    if (!b) {
      var c = fd(a);
      b = function (d, e) {
        return gd(d, e, c);
      };
      a[ed] = b;
    }
    return b;
  };
  Zc = function (a, b) {
    var c = a[ed];
    c ||
      ((c = function (d, e) {
        return ad(d, e, b);
      }),
      (a[ed] = c));
    return c;
  };
  hd = function (a, b) {
    a.push(b);
  };
  id = function (a, b, c) {
    a.push(b, c.fd);
  };
  jd = function (a, b, c, d) {
    var e = Yc(d),
      f = fd(d).ce,
      g = c.fd;
    a.push(b, function (h, l, k) {
      return g(h, l, k, f, e);
    });
  };
  kd = function (a, b, c, d, e, f) {
    var g = Zc(d, f),
      h = c.fd;
    a.push(b, function (l, k, m) {
      return h(l, k, m, d, g);
    });
  };
  fd = function (a) {
    var b = a[cd];
    if (b) return b;
    b = a[cd] = [];
    var c = hd,
      d = id,
      e = jd,
      f = kd;
    b.ce = a[0];
    var g = 1;
    if (a.length > g && 'number' !== typeof a[g]) {
      var h = a[g++];
      c(b, h);
    }
    for (; g < a.length; ) {
      c = a[g++];
      for (var l = g + 1; l < a.length && 'number' !== typeof a[l]; ) l++;
      h = a[g++];
      l -= g;
      switch (l) {
        case 0:
          d(b, c, h);
          break;
        case 1:
          (l = dd(a, g)) ? (g++, e(b, c, h, l)) : d(b, c, h, a[g++]);
          break;
        case 2:
          l = b;
          var k = g++;
          k = dd(a, k);
          e(l, c, h, k, a[g++]);
          break;
        case 3:
          f(b, c, h, a[g++], a[g++], a[g++]);
          break;
        case 4:
          f(b, c, h, a[g++], a[g++], a[g++], a[g++]);
          break;
        default:
          throw Error('unexpected number of binary field arguments: ' + l);
      }
    }
    bd in a && cd in a && (a.length = 0);
    return b;
  };
  gd = function (a, b, c) {
    for (var d = c.length, e = 1 == d % 2, f = e ? 1 : 0; f < d; f += 2)
      (0, c[f + 1])(b, a, c[f]);
    ad(a, b, e ? c[0] : void 0);
  };
  ld = function (a, b) {
    return { Vh: a, fd: b };
  };
  pd = function (a, b, c) {
    b = x(b, c);
    null != b &&
      ('string' === typeof b && md(b),
      null != b &&
        (nd(a.j, 8 * c),
        'number' === typeof b
          ? ((a = a.j), Vc(b), od(a, Tc, Uc))
          : ((c = md(b)), od(a.j, c.m, c.j))));
  };
  qd = function (a) {
    return a;
  };
  sd = function (a, b) {
    var c = rd;
    rd = void 0;
    if (!b(a)) throw ((b = c ? c() + '\n' : ''), Error(b + String(a)));
  };
  td = function (a, b, c) {
    sd(a, b, c);
    return a;
  };
  ud = function (a, b, c) {
    b = rd;
    rd = void 0;
    if (!a) {
      if (b) throw Error(b());
      if (c && 0 < c.length) throw Error('[' + c.map(String).join(',') + ']');
      throw Error(String(a));
    }
  };
  xd = function (a) {
    return function () {
      var b = new vd();
      gd(this, b, fd(a));
      wd(b, b.j.end());
      for (
        var c = new Uint8Array(b.m), d = b.D, e = d.length, f = 0, g = 0;
        g < e;
        g++
      ) {
        var h = d[g];
        c.set(h, f);
        f += h.length;
      }
      b.D = [c];
      return c;
    };
  };
  yd = function (a) {
    return function (b) {
      if (null == b || '' == b) b = new a();
      else {
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error(void 0);
        b = Ac(a, Ob(b));
      }
      return b;
    };
  };
  zd = function (a) {
    switch (a) {
      case 1:
        return 'gda';
      case 2:
        return 'gpt';
      case 3:
        return 'ima';
      case 4:
        return 'pal';
      case 5:
        return 'xfad';
      case 6:
        return 'dv3n';
      case 7:
        return 'spa';
      default:
        return 'unk';
    }
  };
  Bd = function (a) {
    var b = document;
    if (a.length && b.head) {
      a = _.A(a);
      for (var c = a.next(); !c.done; c = a.next())
        if ((c = c.value) && b.head) {
          var d = _.Ad('META');
          b.head.appendChild(d);
          d.httpEquiv = 'origin-trial';
          d.content = c;
        }
    }
  };
  Gd = function (a, b, c, d) {
    d = void 0 === d ? [] : d;
    var e = new a.MutationObserver(function (f) {
      f = _.A(f);
      for (var g = f.next(); !g.done; g = f.next()) {
        g = _.A(g.value.removedNodes);
        for (var h = g.next(); !h.done; h = g.next())
          if (((h = h.value), d && (h === b || Cd(h, b)))) {
            f = _.A(d);
            for (g = f.next(); !g.done; g = f.next()) g.value.disconnect();
            d.length = 0;
            c();
            return;
          }
      }
    });
    d.push(e);
    e.observe(a.document.documentElement, { childList: !0, subtree: !0 });
    Dd(
      function (f) {
        if (!f.parent || !Ed(f.parent)) return !1;
        for (
          var g = f.parent.document.getElementsByTagName('iframe'), h = 0;
          h < g.length;
          h++
        )
          try {
            if (Fd(g[h]) == f) {
              Gd(f.parent, g[h], c, d);
              break;
            }
          } catch (l) {}
        return !1;
      },
      !1,
      !1,
      a
    );
  };
  Hd = function (a) {
    a = void 0 === a ? _.q : a;
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
  };
  B = function (a) {
    var b = eb.apply(1, arguments);
    if (0 === b.length) return Id(a[0]);
    for (var c = [a[0]], d = 0; d < b.length; d++)
      c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
    return Id(c.join(''));
  };
  Jd = function (a, b) {
    var c = Za(a).toString();
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
    return Id(c);
  };
  Kd = function (a) {
    return JSON.stringify([
      a.map(function (b) {
        var c = {};
        return [((c[b.Fe] = b.message.toJSON()), c)];
      }),
    ]);
  };
  Md = function (a) {
    a.De.apply(
      a,
      _.Ld(
        eb.apply(1, arguments).map(function (b) {
          return { Fe: 2, message: b };
        })
      )
    );
  };
  Nd = function (a) {
    a.De.apply(
      a,
      _.Ld(
        eb.apply(1, arguments).map(function (b) {
          return { Fe: 5, message: b };
        })
      )
    );
  };
  Od = function (a) {
    a && 'function' == typeof a.Ea && a.Ea();
  };
  Qd = function (a, b, c, d, e) {
    e = void 0 === e ? !1 : e;
    a.google_image_requests || (a.google_image_requests = []);
    var f = _.Ad('IMG', a.document);
    if (c || d) {
      var g = function (h) {
        c && c(h);
        d && ha(a.google_image_requests, f);
        _.Pd(f, 'load', g);
        _.Pd(f, 'error', g);
      };
      _.hb(f, 'load', g);
      _.hb(f, 'error', g);
    }
    e && (f.attributionsrc = '');
    f.src = b;
    a.google_image_requests.push(f);
  };
  Sd = function () {
    var a = Rd;
    return (0, C.zd)(
      function (b) {
        for (var c in a) if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
        return !1;
      },
      function () {
        return 'unknown enum';
      }
    );
  };
  Ud = function () {
    var a = Td;
    return (0, C.zd)(
      function (b) {
        return b instanceof a;
      },
      function () {
        var b = a.name;
        b ||
          (b = (b = /function\s+([^\(]+)/m.exec(String(a)))
            ? b[1]
            : '(Anonymous)');
        return b;
      }
    );
  };
  ie = function (a, b) {
    var c;
    a: {
      try {
        if (a) {
          var d = a.getItem('google_experiment_mod');
          break a;
        }
      } catch (g) {}
      d = null;
    }
    d = null != (c = d) ? c : '';
    try {
      var e = Vd(d);
      if (d) {
        var f = Vd(d);
        Wd(f, Xd(Yd(1), -1));
        Zd(f);
      }
    } catch (g) {
      $d(d), (e = new ae());
    }
    if (
      (c = ((E = be(e, ce, 1)), _.t(E, 'find')).call(E, function (g) {
        return de(g, 1, 0) === b;
      }))
    )
      if (((f = ee(c, 2)), null === f || isNaN(f))) $d(d);
      else return f;
    d = fe() ? null : Math.floor(1e3 * ge());
    if (null === d) return null;
    c ? Xd(c, d) : Wd(e, Xd(Yd(b), d));
    return he(a, Zd(e)) ? d : null;
  };
  $d = function (a) {
    0.01 > Math.random() && je({ data: a }, 'ls_tamp');
  };
  ke = function (a) {
    var b = {};
    'string' === typeof a.data ? (b = JSON.parse(a.data)) : (b = a.data);
    return { payload: b, Od: b.__uspapiReturn.callId };
  };
  me = function (a) {
    a = le(a.data.__fciReturn);
    return { payload: a, Od: x(a, 1) };
  };
  ne = function (a, b) {
    b = void 0 === b ? window : b;
    if (G(a, 5))
      try {
        return b.localStorage;
      } catch (c) {}
    return null;
  };
  oe = function (a) {
    return 'null' !== a.origin;
  };
  qe = function (a, b, c) {
    b = G(b, 5) && oe(c) ? c.document.cookie : null;
    return null === b ? null : new pe({ cookie: b }).get(a) || '';
  };
  _.se = function (a) {
    a = void 0 === a ? _.q : a;
    return (a = a.performance) && a.now && a.timing
      ? Math.floor(a.now() + a.timing.navigationStart)
      : re();
  };
  _.te = function (a) {
    a = void 0 === a ? _.q : a;
    return (a = a.performance) && a.now ? a.now() : null;
  };
  ue = function (a, b) {
    b = void 0 === b ? _.q : b;
    var c, d;
    return (
      (null == (c = b.performance)
        ? void 0
        : null == (d = c.timing)
        ? void 0
        : d[a]) || 0
    );
  };
  ve = function (a) {
    a = void 0 === a ? _.q : a;
    var b = Math.min(
      ue('domLoading', a) || Infinity,
      ue('domInteractive', a) || Infinity
    );
    return Infinity === b
      ? Math.max(ue('responseEnd', a), ue('navigationStart', a))
      : b;
  };
  we = function (a, b, c) {
    return b[a] || c;
  };
  ze = function (a) {
    _.xe(ye).J(a);
  };
  Ae = function (a) {
    return _.xe(ye).D(a);
  };
  _.H = function (a) {
    return _.xe(Be).j(a.j, a.defaultValue);
  };
  _.Ce = function (a) {
    return _.xe(Be).m(a.j, a.defaultValue);
  };
  De = function (a) {
    return _.xe(Be).D(a.j, a.defaultValue);
  };
  Ee = function (a) {
    return _.xe(Be).J(a.j, a.defaultValue);
  };
  Ie = function (a, b, c, d) {
    c = void 0 === c ? null : c;
    d = void 0 === d ? {} : d;
    var e = Fe.j();
    0 === e.j && (e.j = Math.random() < _.Ce(Ge) ? 2 : 1);
    2 === e.j &&
      ((e = {}),
      je(
        _.t(Object, 'assign').call(
          Object,
          {},
          ((e.c = String(a)),
          (e.pc = String(He(window))),
          (e.em = c),
          (e.lid = b),
          (e.eids = _.xe(ye).j().join()),
          e),
          d
        ),
        'esp'
      ));
  };
  Qe = function (a, b, c, d) {
    Ie(18, a);
    try {
      var e = _.se();
      _.Ce(Je) &&
        (Ke(b, Number(((0, C.K)(Le(b, 8)) - 1).toFixed(3))),
        _.z(b, 7, Math.round(e / 1e3 / 60)));
      return c()
        .then(function (f) {
          Ie(29, a, null, { delta: String(_.se() - e) });
          if (null == f) return Ie(41, a), Me(b, 111, d), b;
          null != f &&
            ('string' !== typeof f ? Ie(21, a) : f.length || Ie(20, a));
          Ne(_.z(b, 2, f), 10);
          Oe().set(b, d) && Ie(27, a);
          return b;
        })
        .catch(function (f) {
          Me(b, 106, d);
          Ie(28, a, Pe(f));
          return b;
        });
    } catch (f) {
      return Me(b, 107, d), Ie(1, a, Pe(f)), v.Promise.resolve(b);
    }
  };
  Me = function (a, b, c) {
    var d;
    a.za(Re(null != (d = Se(a, Te, 10)) ? d : new Te(), b));
    Oe().set(a, c);
  };
  Ue = function () {
    var a = window;
    var b = void 0 === b ? function () {} : b;
    return new v.Promise(function (c) {
      var d = function () {
        c(b());
        _.Pd(a, 'load', d);
      };
      _.hb(a, 'load', d);
    });
  };
  Ve = function (a) {
    var b = [],
      c = RegExp('^_GESPSK-(.+)$');
    try {
      for (var d = 0; d < a.length; d++) {
        var e = (c.exec(a.key(d)) || [])[1];
        e && b.push(e);
      }
    } catch (f) {}
    return b;
  };
  df = function (a, b, c, d, e) {
    var f = _.Ce(We),
      g = new Xe(),
      h = Ye(c, b),
      l = _.t(h, 'flatMap')
        .call(h, function (k) {
          return k.D();
        })
        .map(function (k) {
          return k.D();
        });
    af(g, a, f, b, l, e);
    bf(g, f, h.concat(null != d ? d : []), c, b, a);
    if (!be(g, cf, 2).length) return null;
    Ie(50, '');
    return xb(g.D(), 3);
  };
  bf = function (a, b, c, d, e, f) {
    if (e && d && c && 'function' === typeof d.getUserIdsAsEidBySource) {
      if ('function' === typeof d.getUserIdsAsEids)
        try {
          for (
            var g = _.A(d.getUserIdsAsEids()), h = g.next();
            !h.done;
            h = g.next()
          ) {
            var l = h.value;
            'string' === typeof l.source && Ie(52, l.source);
          }
        } catch (p) {
          var k;
          Ie(45, '', null == (k = p) ? void 0 : k.message);
        }
      c = _.A(c);
      for (g = c.next(); !g.done; g = c.next())
        if (((g = g.value), String(ef(g, 1)) === e))
          for (g = _.A(g.D()), h = g.next(); !h.done; h = g.next())
            if (((h = h.value.D()), !ff(a, h))) {
              l = null;
              try {
                var m = (k = void 0),
                  n = void 0;
                l =
                  null == (k = d.getUserIdsAsEidBySource(h))
                    ? void 0
                    : null == (m = k.uids)
                    ? void 0
                    : null == (n = m[0])
                    ? void 0
                    : n.id;
              } catch (p) {
                (k = void 0), Ie(45, h, null == (k = p) ? void 0 : k.message);
              }
              l
                ? l.length > b
                  ? ((k = {}),
                    Ie(
                      12,
                      h,
                      null,
                      ((k.sl = String(l.length)), (k.fp = '1'), k)
                    ))
                  : ((k = gf(h)),
                    (k = _.z(k, 2, l)),
                    (k = _.z(k, 11, !0)),
                    hf(a, 2, cf, k),
                    (k = {}),
                    Ie(19, h, null, ((k.fp = '1'), (k.hs = l ? '1' : '0'), k)))
                : ((k = l = void 0),
                  _.H(jf) &&
                    f &&
                    (null == (l = Oe().get(h, f).lb)
                      ? 0
                      : null == (k = x(l, 2))
                      ? 0
                      : k.length) &&
                    Ie(51, h));
            }
    }
  };
  af = function (a, b, c, d, e, f) {
    if (b)
      for (
        var g = _.Ce(kf), h = _.A(Ve(b)), l = h.next();
        !l.done;
        l = h.next()
      ) {
        l = l.value;
        var k = void 0;
        if (null == (k = e) || !_.t(k, 'includes').call(k, l))
          if ((k = Oe().get(l, b).lb)) {
            var m = lf(k);
            if (2 !== m && 3 !== m) {
              m = !1;
              if (d) {
                var n = void 0,
                  p = null == (n = f) ? void 0 : n.get(d);
                if (p && !p.has(l) && _.H(mf)) continue;
                if (
                  (n = /^(\d+)$/.exec(l)) &&
                  !(m = _.t(d.split(','), 'includes').call(d.split(','), n[1]))
                )
                  continue;
              }
              _.z(k, 9, m);
              n = x(k, 2);
              _.H(nf) ||
                ((m = m ? g : c),
                0 <= m &&
                  n &&
                  n.length > m &&
                  ((m = {}),
                  Ie(12, l, null, ((m.sl = String(n.length)), m)),
                  Me(k, 108, b),
                  Ne(k, 2)));
              hf(a, 2, cf, k);
              k = {};
              Ie(19, l, null, ((k.hs = n ? '1' : '0'), k));
            }
          }
      }
  };
  Ye = function (a, b) {
    if (
      !b ||
      'function' !== typeof (null == a ? void 0 : a.getUserIdsAsEidBySource)
    )
      return [];
    a = [];
    for (var c = _.A(Ee(of)), d = c.next(); !d.done; d = c.next()) {
      d = d.value;
      var e = null;
      try {
        e = pf(d);
      } catch (f) {
        d = void 0;
        Ie(44, 'UNKNOWN_ID', null == (d = f) ? void 0 : d.message);
        continue;
      }
      ef(e, 1) === b && a.push(e);
    }
    return a;
  };
  ff = function (a, b) {
    return be(a, cf, 2).some(function (c) {
      return x(c, 1) === b && null != x(c, 2);
    });
  };
  qf = function (a, b) {
    var c, d, e;
    return _.jb(function (f) {
      if (1 == f.j)
        return (
          (c = b
            ? a.filter(function (g) {
                return !g.mb;
              })
            : a),
          kb(
            f,
            v.Promise.all(
              c.map(function (g) {
                return g.ob.promise;
              })
            ),
            2
          )
        );
      if (3 != f.j) {
        if (a.length === c.length) return f.return(0);
        d = a.filter(function (g) {
          return g.mb;
        });
        e = _.se();
        return kb(
          f,
          v.Promise.race([
            v.Promise.all(
              d.map(function (g) {
                return g.ob.promise;
              })
            ),
            new v.Promise(function (g) {
              return void setTimeout(g, b);
            }),
          ]),
          3
        );
      }
      return f.return(_.se() - e);
    });
  };
  rf = function (a) {
    var b = function (c) {
      var d = {};
      Ie(
        c,
        (0, C.K)(x(a, 1)),
        null,
        ((d.tic = String(Math.round((Date.now() - (0, C.K)(x(a, 3))) / 6e4))),
        d)
      );
    };
    switch (lf(a)) {
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
        Ie(9, (0, C.K)(x(a, 1)));
        break;
      case 4:
        b(23);
    }
  };
  sf = function (a) {
    return 'string' === typeof a ? a : a instanceof Error ? a.message : null;
  };
  Hf = function (a, b, c, d) {
    var e, f, g, h, l, k, m, n, p, r, u, w, D, K, F;
    return _.jb(function (R) {
      e = new tf();
      f = _.Ce(Je);
      g = new uf(a, c, d);
      h = new vf(g.o, c, d);
      l = new wf(g.l, f, d);
      k = new xf(l.l, f, d);
      m = new yf(k.o, f, d);
      n = new vf(m.o, c, d);
      r = p = null;
      _.H(nf)
        ? ((u = new zf(m.l, d)),
          I(e, u),
          (p = u.o),
          (w = new Af(b, u.l, d)),
          I(e, w),
          I(e, new vf(w.l, c, d)),
          (D = new Bf(w.o, w.F, _.Ce(We), _.Ce(kf), d)),
          I(e, D),
          I(e, new vf(D.l, c, d)),
          (r = function () {
            var T, Q, ba;
            return _.jb(function (ca) {
              return 1 == ca.j
                ? ((ba = a), kb(ca, D.l.promise, 2))
                : ca.return({
                    id: ba,
                    collectorGeneratedData:
                      null != (Q = null == (T = ca.m) ? void 0 : Cf(T, 2))
                        ? Q
                        : null,
                  });
            });
          }))
        : ((K = new Df(b, m.l, c, d)),
          I(e, K),
          (p = K.F),
          (r = function () {
            var T;
            return _.jb(function (Q) {
              return 1 == Q.j
                ? kb(Q, K.l.promise, 2)
                : Q.return(
                    null != (T = Q.m)
                      ? T
                      : { id: a, collectorGeneratedData: null }
                  );
            });
          }));
      F = new Ef(b, p, c, d);
      Ff(e, [g, h, l, k, m, n, F]);
      Gf(e);
      return R.return(r());
    });
  };
  Nf = function (a, b, c) {
    b
      ? If() === Jf(window) || _.H(Kf)
        ? (Lf(a, 'encryptedSignalProviders', c) &&
            Lf(a, 'secureSignalProviders', c)) ||
          (Ie(38, ''),
          Mf(a, 'encryptedSignalProviders', b, c),
          Mf(a, 'secureSignalProviders', b, c))
        : Ie(16, '')
      : Ie(15, '');
  };
  Lf = function (a, b, c) {
    if (void 0 === a[b] || a[b] instanceof Array) return !1;
    a[b].addErrorHandler(c);
    return !0;
  };
  Mf = function (a, b, c, d) {
    var e,
      f = new Of(null != (e = a[b]) ? e : [], c, 'secureSignalProviders' === b);
    a[b] = new Pf(f);
    f.addErrorHandler(d);
  };
  Sf = function (a, b) {
    var c = new tf(),
      d = new Qf(b);
    a = new Rf(d.A, a, b);
    Ff(c, [d, a]);
    Gf(c);
    return c;
  };
  Wf = function (a, b, c, d) {
    if (!c) return null;
    var e = b.toString();
    if (Tf.has(e)) return null;
    Tf.add(e);
    var f = _.Ce(Je);
    e = new tf();
    a = new uf(a, c, d);
    var g = new vf(a.o, c, d),
      h = new Uf(a.l, d),
      l = new wf(h.l, f, d);
    f = new yf(l.l, f, d);
    var k = new vf(f.o, c, d);
    b = new Vf(f.l, b, d);
    c = new vf(b.l, c, d);
    Ff(e, [a, g, h, l, f, k, b, c]);
    Gf(e);
    return e;
  };
  Xf = function (a, b) {
    b = void 0 === b ? document : b;
    var c;
    return !(
      null == (c = b.featurePolicy) ||
      !((E = c.allowedFeatures()), _.t(E, 'includes')).call(E, a)
    );
  };
  $f = function (a) {
    _.xe(Yf).j(a);
  };
  dg = function () {
    if (void 0 === b) {
      var a = void 0 === a ? _.q : a;
      var b = a.ggeac || (a.ggeac = {});
    }
    a = b;
    ag(_.xe(ye), a);
    bg(b);
    cg(_.xe(Yf), b);
    _.xe(Be).B();
  };
  bg = function (a) {
    var b = _.xe(Be);
    b.j = function (c, d) {
      return we(5, a, function () {
        return !1;
      })(c, d, 2);
    };
    b.m = function (c, d) {
      return we(6, a, function () {
        return 0;
      })(c, d, 2);
    };
    b.D = function (c, d) {
      return we(7, a, function () {
        return '';
      })(c, d, 2);
    };
    b.J = function (c, d) {
      return we(8, a, function () {
        return [];
      })(c, d, 2);
    };
    b.B = function () {
      we(15, a, function () {})(2);
    };
  };
  ug = function (a) {
    var b = void 0 === b ? eg : b;
    var c = _.t(Object, 'assign').call(Object, {}, a),
      d = a.id,
      e = a.style;
    a = a.data;
    c = (delete c.id, delete c.style, delete c.data, c);
    if (_.t(Object, 'keys').call(Object, c).length)
      throw Error(
        'Invalid attribute(s): ' + _.t(Object, 'keys').call(Object, c)
      );
    d = { id: d, style: e ? e : void 0 };
    if (a)
      for (
        e = _.A(_.t(a, 'entries').call(a)), a = e.next();
        !a.done;
        a = e.next()
      )
        (c = _.A(a.value)),
          (a = c.next().value),
          (c = c.next().value),
          (0, C.ue)(fg.test(a)),
          (d[a] = c);
    if (!gg.test('div')) throw Error('');
    if ('DIV' in hg) throw Error('');
    e = '';
    if (d)
      for (f in d)
        if (Object.prototype.hasOwnProperty.call(d, f)) {
          if (!gg.test(f)) throw Error('');
          c = d[f];
          if (null != c) {
            a = f;
            if (c instanceof ig) c = jg(c);
            else {
              if ('style' == a.toLowerCase()) throw Error('');
              if (/^on/i.test(a)) throw Error('');
              if (a.toLowerCase() in kg)
                if (c instanceof lg) c = Za(c).toString();
                else if (c instanceof Ra) c = Sa(c);
                else if ('string' === typeof c)
                  c instanceof Ra ||
                    ((c = 'object' == typeof c && c.Ta ? c.Ka() : String(c)),
                    mg.test(c)
                      ? (c = _.fb(c))
                      : ((c = String(c)),
                        (c = c.replace(/(%0A|%0D)/g, '')),
                        (c = c.match(ng) ? _.fb(c) : null))),
                    (c = (c || _.og).Ka());
                else throw Error('');
            }
            c.Ta && (c = c.Ka());
            a = a + '="' + pg(String(c)) + '"';
            e += ' ' + a;
          }
        }
    var f = '<div' + e;
    null == b ? (b = []) : Array.isArray(b) || (b = [b]);
    !0 === qg.div
      ? (f += '>')
      : ((d = rg(b)), (f += '>' + ab(d).toString() + '</div>'));
    return new sg(f, tg);
  };
  zg = function (a) {
    vg();
    var b = wg.googleToken[5] || 0;
    a && (0 != b || xg[3] >= re() ? yg.Xd(a) : (yg.Jc().push(a), yg.ve()));
    (xg[3] >= re() && xg[2] >= re()) || yg.ve();
  };
  Ag = function (a) {
    a = _.Lc(a.split(/\s+/), function (b) {
      return (b = /^(-?\d+)(px|%)$/.exec(b))
        ? { value: parseFloat(b[1]), type: b[2] }
        : { value: 0, type: 'px' };
    });
    a[1] = a[1] || a[0];
    a[2] = a[2] || a[0];
    a[3] = a[3] || a[1];
    return a;
  };
  Cg = function (a) {
    if (!a) return [0];
    a = 'number' === typeof a ? [a] : a;
    a = _.Bg(a, function (b) {
      return 'number' === typeof b && 0 <= b && 1 >= b ? !0 : !1;
    });
    oa(a);
    qa(a, function (b, c) {
      return b - c;
    });
    return a;
  };
  Dg = function (a) {
    try {
      var b = a.getBoundingClientRect();
    } catch (c) {}
    return b
      ? {
          top: b.top,
          right: b.right,
          bottom: b.bottom,
          left: b.left,
          width: b.width || b.right - b.left,
          height: b.height || b.bottom - b.top,
        }
      : { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
  };
  Hg = function (a, b, c, d) {
    var e = new _.Eg(),
      f = '',
      g = function (l) {
        try {
          var k = 'object' === typeof l.data ? l.data : JSON.parse(l.data);
          f === k.paw_id &&
            (_.Pd(a, 'message', g),
            k.error ? e.reject(Error(k.error)) : e.resolve(d(k)));
        } catch (m) {}
      },
      h = Fg(a);
    return h
      ? (_.hb(a, 'message', g), (f = c(h)), e.promise)
      : (c = Gg(a))
      ? ((f = String(Math.floor(2147483647 * ge()))),
        _.hb(a, 'message', g),
        b(c, f),
        e.promise)
      : null;
  };
  Ig = function (a) {
    return Hg(
      a,
      function (b, c) {
        var d, e;
        return void (null ==
        (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig)
          ? void 0
          : d.postMessage(c));
      },
      function (b) {
        return b.getQueryInfo();
      },
      function (b) {
        return b.signal;
      }
    );
  };
  Jg = function (a) {
    return !!Fg(a) || !!Gg(a);
  };
  Fg = function (a) {
    var b;
    if (
      'function' === typeof (null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo)
    )
      return a.gmaSdk;
  };
  Gg = function (a) {
    var b, c, d, e, f, g;
    if (
      'function' ===
        typeof (null == (b = a.webkit)
          ? void 0
          : null == (c = b.messageHandlers)
          ? void 0
          : null == (d = c.getGmaQueryInfo)
          ? void 0
          : d.postMessage) ||
      'function' ===
        typeof (null == (e = a.webkit)
          ? void 0
          : null == (f = e.messageHandlers)
          ? void 0
          : null == (g = f.getGmaSig)
          ? void 0
          : g.postMessage)
    )
      return a.webkit.messageHandlers;
  };
  Kg = function (a) {
    var b, c;
    return null !=
      (c = ((E = ['pbjs']
        .concat(null != (b = a._pbjsGlobals) ? b : [])
        .map(function (d) {
          return a[d];
        })),
      _.t(E, 'find')).call(E, function (d) {
        return Array.isArray(null == d ? void 0 : d.que);
      }))
      ? c
      : null;
  };
  Lg = function (a, b, c, d) {
    try {
      if ((a.setAttribute('data-google-query-id', c), !d)) {
        null != b.googletag || (b.googletag = { cmd: [] });
        var e,
          f = null != (e = b.googletag.queryIds) ? e : [];
        f.push(c);
        500 < f.length && f.shift();
        b.googletag.queryIds = f;
      }
    } catch (g) {}
  };
  Ng = function (a, b, c) {
    c = void 0 === c ? null : c;
    b = _.A(b);
    for (var d = b.next(); !d.done; d = b.next()) {
      var e = a,
        f = d.value;
      d = c;
      d = void 0 === d ? null : d;
      var g = e.document;
      var h = f.x,
        l = f.y;
      g.hasOwnProperty('_goog_efp_called_') ||
        (g._goog_efp_called_ = g.elementFromPoint(h, l));
      if ((g = g.elementFromPoint(h, l))) {
        if (!(h = Mg(g, e, f, d)))
          a: {
            d = void 0 === d ? null : d;
            h = e.document;
            for (g = g.offsetParent; g && g !== h.body; g = g.offsetParent)
              if ((l = Mg(g, e, f, d))) {
                h = l;
                break a;
              }
            h = null;
          }
        d = h || null;
      } else d = null;
      if (d) return d;
    }
    return null;
  };
  Og = function (a, b, c, d, e) {
    for (var f = [], g = 0; g < e; g++)
      for (var h = 0; h < b; h++) {
        var l = f,
          k = b - 1,
          m = e - 1;
        l.push.call(l, {
          x: (0 === k ? 0 : h / k) * a,
          y: c + (0 === m ? 0 : g / m) * (d - c),
        });
      }
    return f;
  };
  Mg = function (a, b, c, d) {
    d = void 0 === d ? null : d;
    if ('fixed' !== Pg(a, 'position')) return null;
    var e =
      'GoogleActiveViewInnerContainer' === a.getAttribute('class') ||
      (1 >= _.Qg(_.Rg, a).width && 1 >= _.Qg(_.Rg, a).height)
        ? !0
        : !1;
    if (d) {
      var f, g;
      d.j(
        'ach_evt',
        {
          tn: a.tagName,
          id: null != (f = a.getAttribute('id')) ? f : '',
          cls: null != (g = a.getAttribute('class')) ? g : '',
          ign: String(e),
          pw: b.innerWidth,
          ph: b.innerHeight,
          x: c.x,
          y: c.y,
        },
        !0,
        1
      );
    }
    return e ? null : a;
  };
  Sg = function (a, b) {
    b = void 0 === b ? [] : b;
    var c = Date.now();
    return _.Bg(b, function (d) {
      return c - d < 1e3 * a;
    });
  };
  Ug = function (a, b) {
    try {
      var c = a.getItem('__lsv__');
      if (!c) return [];
      try {
        var d = JSON.parse(c);
      } catch (e) {}
      if (
        !Array.isArray(d) ||
        _.Tg(d, function (e) {
          return !_.t(Number, 'isInteger').call(Number, e);
        })
      )
        return a.removeItem('__lsv__'), [];
      d = Sg(b, d);
      d.length || null == a || a.removeItem('__lsv__');
      return d;
    } catch (e) {
      return null;
    }
  };
  Vg = function (a, b) {
    0.001 > ge() && je({ c: a, s: b }, 'gpt_whirs');
  };
  Wg = function (a) {
    var b = a.split('/');
    return '/' === a.charAt(0) && 2 <= b.length
      ? b[1]
      : '/' !== a.charAt(0) && 1 <= b.length
      ? b[0]
      : '';
  };
  _.Zg = function (a) {
    _.xe(Xg).j = !0;
    return Yg[a];
  };
  dh = function (a) {
    var b = new $g();
    b = _.y(b, 1, Date.now(), 0);
    b = _.y(b, 2, a.pvsid, 0);
    b = _.y(b, 3, a.Ga, '');
    var c = _.xe(ye).j();
    b = ah(b, 4, c);
    b = _.y(b, 5, a.Lf, 0);
    a = _.y(b, 12, a.cf, '');
    var d;
    if ((b = null == (d = v.globalThis.performance) ? void 0 : d.memory)) {
      d = new bh();
      try {
        _.y(d, 1, b.jsHeapSizeLimit, 0);
      } catch (e) {}
      try {
        _.y(d, 2, b.totalJSHeapSize, 0);
      } catch (e) {}
      try {
        _.y(d, 3, b.usedJSHeapSize, 0);
      } catch (e) {}
    } else d = void 0;
    d && _.ch(a, 10, d);
    return a;
  };
  hh = function (a) {
    var b = ve();
    if (a.mc) {
      var c = a.vb;
      a = dh(a);
      var d = new eh();
      b = _.y(d, 2, b, 0);
      b = fh(a, 6, gh, b);
      Nd(c, b);
    }
  };
  J = function (a, b, c) {
    var d = void 0 === d ? !1 : d;
    return function () {
      var e = eb.apply(0, arguments),
        f = _.ih(a, b, c, d).apply(this, e);
      try {
        var g = e.length;
        if (a.mc && a.kg) {
          var h = a.vb,
            l = dh(a);
          var k = _.y(l, 5, a.Kf, 0);
          var m = new jh();
          var n = _.y(m, 1, b, 0);
          var p = _.y(n, 2, g, 0);
          var r = fh(k, 9, gh, p);
          Nd(h, r);
        }
      } catch (u) {}
      return f;
    };
  };
  _.ih = function (a, b, c, d) {
    d = void 0 === d ? !1 : d;
    return function () {
      var e = eb.apply(0, arguments),
        f = void 0,
        g = !1,
        h = null,
        l = _.xe(kh);
      try {
        var k = _.H(lh);
        k && l && (h = l.start(b.toString(), 3));
        f = c.apply(this, e);
        g = !0;
        k && l && l.end(h);
      } catch (m) {
        try {
          if (g) mh.call(this, a, 110, m);
          else if ((mh.call(this, a, b, m), !d)) throw m;
        } catch (n) {
          if (
            ((e = h) &&
              nh &&
              oh() &&
              (nh.clearMarks('goog_' + e.label + '_' + e.uniqueId + '_start'),
              nh.clearMarks('goog_' + e.label + '_' + e.uniqueId + '_end')),
            !g && !d)
          )
            throw m;
        }
      }
      return f;
    };
  };
  _.ph = function (a, b, c, d) {
    return _.ih(a, b, c, void 0 === d ? !1 : d)();
  };
  mh = function (a, b, c) {
    if (a.Ce) {
      c = c.error && c.meta && c.id ? c.error : c;
      var d = new qh(),
        e = new rh();
      try {
        var f = He(window);
        _.y(e, 1, f, 0);
      } catch (p) {}
      try {
        var g = _.xe(ye).j();
        ah(e, 2, g);
      } catch (p) {}
      try {
        _.y(e, 3, window.document.URL, '');
      } catch (p) {}
      f = _.ch(d, 2, e);
      g = new sh();
      b = _.y(g, 1, b, 0);
      try {
        var h = th(null == c ? void 0 : c.name) ? c.name : 'Unknown error';
        _.y(b, 2, h, '');
      } catch (p) {}
      try {
        var l = th(null == c ? void 0 : c.message) ? c.message : 'Caught ' + c;
        _.y(b, 3, l, '');
      } catch (p) {}
      try {
        var k = th(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
        k && _.uh(b, 4, k.split(/\n\s*/));
      } catch (p) {}
      h = _.ch(f, 1, b);
      l = new vh();
      try {
        _.y(l, 1, a.hb || a.Ga, '');
      } catch (p) {}
      try {
        var m = wh();
        _.y(l, 2, m, 0);
      } catch (p) {}
      try {
        var n = [].concat(_.Ld(_.t(xh, 'keys').call(xh)));
        _.uh(l, 3, n);
      } catch (p) {}
      fh(h, 4, yh, l);
      _.y(h, 5, a.de, 0);
      Md(a.vb, h);
    }
  };
  Ah = function (a, b) {
    var c, d;
    return null !=
      (d =
        null ==
        (c = _.t(a, 'find').call(a, function (e) {
          e = (0, C.K)(Se(e, zh, 1));
          return x(e, 1) <= x(b, 1) && x(e, 2) <= x(b, 2);
        }))
          ? void 0
          : be(c, zh, 2))
      ? d
      : null;
  };
  Eh = function (a, b, c) {
    return 'number' === typeof b && 'number' === typeof c && be(a, Bh, 6).length
      ? Ah(be(a, Bh, 6), Ch(Dh(new zh(), b), c))
      : be(a, zh, 5);
  };
  Gh = function (a) {
    var b = void 0 === b ? window : b;
    var c = null;
    b.top === b && ((b = Fh(!1, b)), (c = Eh(a, b.width, b.height)));
    null != c || (c = Eh(a));
    return null == c
      ? []
      : c.map(function (d) {
          return G(d, 3) ? 'fluid' : [(0, C.ra)(x(d, 1)), (0, C.ra)(x(d, 2))];
        });
  };
  Hh = function (a) {
    var b = [],
      c = !1;
    a = _.A(Gh(a));
    for (var d = a.next(); !d.done; d = a.next())
      (d = d.value),
        Array.isArray(d)
          ? b.push(d.join('x'))
          : 'fluid' === d
          ? (c = !0)
          : b.push(d);
    c && b.unshift('320x50');
    return b.join('|');
  };
  Jh = function (a, b) {
    b = void 0 === b ? null : b;
    var c = [];
    a && (c.push(x(a, 1)), c.push(Hh(a)), c.push(x(a, 2)));
    if (b) {
      a = [];
      for (var d = 0; b && 25 > d; b = b.parentNode, ++d)
        9 === b.nodeType ? a.push('') : a.push(b.id);
      (b = a.join()) && c.push(b);
    }
    return c.length ? Ih(c.join(':')).toString() : '0';
  };
  Kh = function (a) {
    return 0 !== a && 1 !== a;
  };
  Mh = function (a, b) {
    var c;
    return !(null != (c = Lh(b, 22)) ? !c : !G(a, 15));
  };
  Oh = function (a) {
    var b = a.document;
    return Nh(a) ? b.URL : b.referrer;
  };
  Rh = function (a) {
    try {
      return Ph(a, window.top);
    } catch (b) {
      return new _.Qh(-12245933, -12245933);
    }
  };
  Uh = function (a) {
    if (!a) return null;
    var b, c;
    a.getBoundingClientRect
      ? ((a = _.Qg(Sh, a)), (a = new _.Th(a.right - a.left, a.bottom - a.top)))
      : (a = null);
    return null != (c = null == (b = a) ? void 0 : b.floor()) ? c : null;
  };
  Wh = function (a, b) {
    for (
      var c = {}, d = _.A(_.t(Object, 'keys').call(Object, b)), e = d.next();
      !e.done;
      e = d.next()
    ) {
      e = e.value;
      var f = Pc(b[e], !1),
        g = _.xe(Vh),
        h = g.j.get(e);
      null == h ? (h = ++_.xe(kh).D) : g.j.delete(e);
      _.z(f, 20, h);
      c[e] = f;
    }
    return { U: Pc(a, !1), V: c };
  };
  $h = function () {
    switch (_.Ce(Xh)) {
      case 1:
        return Yh();
      case 2:
        return '9901b501132b9fabe59d89fcfe6bb421';
      default:
        return Zh();
    }
  };
  Yh = function () {
    for (var a = '', b = _.A(ai()), c = b.next(); !c.done; c = b.next())
      (c = c.value), 15 >= c && (a += '0'), (a += c.toString(16));
    return a;
  };
  ai = function () {
    var a;
    if (
      'function' ===
      typeof (null == (a = window.crypto) ? void 0 : a.getRandomValues)
    )
      return (a = new Uint8Array(16)), window.crypto.getRandomValues(a), a;
    a = window;
    var b;
    if (
      'function' ===
      typeof (null == (b = a.msCrypto) ? void 0 : b.getRandomValues)
    )
      return (b = new Uint8Array(16)), a.msCrypto.getRandomValues(b), b;
    a = Array(16);
    for (b = 0; b < a.length; b++) a[b] = Math.floor(255 * Math.random());
    return a;
  };
  hi = function (a, b, c, d) {
    var e = bi(b, a) || ci(b, a);
    if (!e) return null;
    var f = Rh(e),
      g = e === ci(b, a),
      h = di(function () {
        var p = g ? ci(b, a) : e;
        return p && ei(p, window);
      }),
      l = function (p) {
        var r;
        return null == (r = h()) ? void 0 : r.getPropertyValue(p);
      };
    c = Gh(c)[0];
    var k = !1;
    Array.isArray(c) && (k = d ? g : 0 === f.x && 'center' === l('text-align'));
    k &&
      (f.x += Math.round(
        Math.max(
          0,
          (g ? e.clientWidth : e.parentElement.clientWidth) - Number(c[0])
        ) / 2
      ));
    if (g) {
      var m;
      f.y += Math.round(
        Math.min(null != (m = fi(l('padding-top'))) ? m : 0, e.clientHeight)
      );
      if (!k) {
        d = e.clientWidth;
        var n;
        f.x += Math.round(
          Math.min(null != (n = fi(l('padding-left'))) ? n : 0, d)
        );
      }
    }
    return f && gi(e) ? f : new _.Qh(-12245933, -12245933);
  };
  ii = function (a, b, c, d) {
    var e = ci(a, c),
      f = 'none' === (null == e ? void 0 : e.style.display);
    f && (e.style.display = 'block');
    a = hi(c, a, b, d);
    f && (e.style.display = 'none');
    return a;
  };
  ji = function (a) {
    return 'google_ads_iframe_' + a.toString();
  };
  ki = function (a) {
    return ji(a) + '__container__';
  };
  bi = function (a, b) {
    var c;
    return (
      (null == (c = ci(a, b))
        ? void 0
        : c.querySelector('[id="' + ki(a) + '"]')) || null
    );
  };
  li = function (a, b) {
    var c, d;
    return null !=
      (d =
        null == (c = bi(a, b))
          ? void 0
          : c.querySelector('iframe[id="' + ji(a) + '"]'))
      ? d
      : null;
  };
  ci = function (a, b) {
    b = void 0 === b ? document : b;
    return mi().D.get(a) || b.getElementById(a.getDomId());
  };
  ni = function (a) {
    return Math.round(Number(fi(a)));
  };
  pi = function (a, b, c) {
    for (var d = 100; a && a !== b && --d; ) _.oi(a, c), (a = a.parentElement);
  };
  qi = function (a, b, c, d, e) {
    _.oi(a, { 'margin-left': '0px', 'margin-right': '0px' });
    var f = {},
      g = 'rtl' === d.direction,
      h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
    d = function () {
      var l = a.getBoundingClientRect().left;
      return g ? h - l : l - h;
    };
    b = d();
    return 0 !== b
      ? ((c = function (l) {
          g ? (f['margin-right'] = l + 'px') : (f['margin-left'] = l + 'px');
        }),
        c(-b),
        _.oi(a, f),
        (d = d()),
        0 !== d && b !== d && (c((b / (d - b)) * b), _.oi(a, f)),
        !0)
      : !1;
  };
  si = function (a, b, c, d, e, f, g, h, l) {
    var k = Hh(d);
    _.q.setTimeout(
      _.ih(a, 459, function () {
        return void ri(a, b, c, e, f, g, k, h, l);
      }),
      500
    );
  };
  ri = function (a, b, c, d, e, f, g, h, l) {
    if (_.q.IntersectionObserver) {
      var k = null,
        m,
        n = null != (m = li(c, b)) ? m : ci(c, b);
      m = _.ih(a, 459, function (p) {
        if ((p = p && p[0])) {
          var r = p.boundingClientRect,
            u = window.innerWidth,
            w = Math.round(r.left),
            D = Math.round(r.right),
            K = 0 > w + 2,
            F = 0 < D - (u + 2);
          if (
            p.intersectionRatio >=
              1 -
                ((0 <= Math.round(r.left) ? 0 : 2) +
                  (Math.round(r.right) <= window.innerWidth ? 0 : 2)) /
                  e ||
            K ||
            F
          )
            ti(
              h,
              function (R) {
                if (K || F) {
                  var T = new xi();
                  T.set(8);
                  yi(n) && T.set(10);
                  T = zi(T);
                } else T = Ai(b, c);
                var Q = Bi(c, n, f),
                  ba = Q.Ef;
                Q = Q.Ff;
                Ci(R, a);
                L(R, 'qid', l);
                L(R, 'iu', c.getAdUnitPath());
                L(R, 'e', String(T));
                K && L(R, 'ofl', String(w));
                F && L(R, 'ofr', String(D - u));
                L(R, 'ret', e + 'x' + f);
                L(R, 'req', g);
                L(R, 'bm', String(d));
                L(R, 'efh', Number(ba));
                L(R, 'stk', Number(Q));
                L(R, 'ifi', Di(window));
              },
              _.Ce(Ei)
            ),
              k && k.unobserve((0, C.K)(n));
        }
      });
      n &&
        ((k = new _.q.IntersectionObserver(m, { threshold: [1] })),
        (0, C.K)(k).observe(n));
    }
  };
  Ai = function (a, b) {
    var c = li(b, a) || ci(b, a),
      d = new xi();
    try {
      var e = c.getBoundingClientRect(),
        f = e.left,
        g = e.top,
        h = e.width,
        l = e.height,
        k = ci(b, a),
        m = (0, C.K)(ei(k, window));
      if ('hidden' === m.visibility || 'none' === m.display) return zi(d);
      var n = ni(m.getPropertyValue('border-top-width') || 0) + 1;
      b = f + h;
      l = g + l;
      var p = a.elementsFromPoint(f + n + 2, g + n);
      var r = a.elementsFromPoint(b - n - 2, g + n);
      var u = a.elementsFromPoint(b - n - 2, l - n);
      var w = a.elementsFromPoint(f + n + 2, l - n);
      var D = a.elementsFromPoint(b / 2, l - n);
    } catch (F) {
      return d.set(1), zi(d);
    }
    if (
      !(
        p &&
        p.length &&
        r &&
        r.length &&
        u &&
        u.length &&
        w &&
        w.length &&
        D &&
        D.length
      )
    )
      return d.set(7), zi(d);
    a = function (F, R) {
      for (var T = !1, Q = 0; Q < F.length; Q++) {
        var ba = F[Q];
        if (T) {
          var ca = ei(ba, window);
          if ('hidden' !== ca.visibility && !Fi(ba) && !K(c, ba)) {
            d.set(R);
            'absolute' === ca.position && d.set(11);
            break;
          }
        } else c === ba && (T = !0);
      }
    };
    Gi(c) && d.set(9);
    var K = function (F, R) {
      return Hi(F, R) || Hi(R, F);
    };
    f = p[0];
    c === f || K(c, f) || Fi(f) || d.set(2);
    f = r[0];
    c === f || K(c, f) || Fi(f) || d.set(3);
    f = u[0];
    c === f || K(c, f) || Fi(f) || d.set(4);
    f = w[0];
    c === f || K(c, f) || Fi(f) || d.set(5);
    if (Fi(c)) return zi(d);
    a(p, 12);
    a(r, 13);
    a(u, 14);
    a(w, 15);
    a(D, 6);
    return zi(d);
  };
  yi = function (a) {
    var b = !1,
      c = !1;
    return Ii(a, function (d) {
      c = c || 'scroll' === d.overflowX || 'auto' === d.overflowX;
      return (b = b || 'flex' === d.display) && c;
    });
  };
  Bi = function (a, b, c) {
    var d = (a = ci(a)) && ei(a, window),
      e = d ? 'absolute' !== d.position : !0,
      f = !1,
      g = a && a.parentElement,
      h = !1;
    Ji(
      b,
      function (l) {
        var k = l.style;
        if (e)
          if (h || (h = l === g)) e = Ki(l, _.q, -1, -1);
          else {
            k = k && k.height;
            var m = (k && _.t(k, 'endsWith').call(k, 'px') ? ni(k) : 0) >= c;
            !k ||
              m ||
              ('string' === typeof k && _.t(Li, 'includes').call(Li, k)) ||
              (e = !1);
          }
        f ||
          ((l = ei(l, _.q)),
          'sticky' !== l.position && 'fixed' !== l.position) ||
          (f = !0);
        return !(f && !e);
      },
      100
    );
    return { Ef: e, Ff: f };
  };
  Ki = function (a, b, c, d) {
    var e = a.style;
    return ((null == e ? 0 : e.height) &&
      !_.t(Li, 'includes').call(Li, e.height)) ||
      ((null == e ? 0 : e.maxHeight) &&
        !_.t(Mi, 'includes').call(Mi, e.maxHeight)) ||
      Ni(
        a,
        b.document,
        function (f) {
          var g = f.style.height;
          f = f.style.getPropertyValue('max-height');
          return (
            (!!g && !_.t(Li, 'includes').call(Li, g)) ||
            (!!f && !_.t(Mi, 'includes').call(Mi, f))
          );
        },
        c,
        d
      )
      ? !1
      : !0;
  };
  Ni = function (a, b, c, d, e) {
    b = b.styleSheets;
    if (!b) return !1;
    var f = a.matches || a.msMatchesSelector;
    d = -1 === d ? Infinity : d;
    e = -1 === e ? Infinity : e;
    for (var g = 0; g < Math.min(b.length, d); ++g) {
      var h = null;
      try {
        var l = b[g],
          k = null;
        try {
          k = l.cssRules || l.rules;
        } catch (R) {
          if (15 == R.code) throw ((R.styleSheet = l), R);
        }
        h = k;
      } catch (R) {
        continue;
      }
      k = void 0;
      if (null != (k = h) && k.length)
        for (k = 0; k < Math.min(h.length, e); ++k)
          try {
            var m = h[k],
              n,
              p = c;
            if (!(n = f.call(a, m.selectorText) && p(m)))
              a: {
                var r = void 0;
                p = a;
                var u = c,
                  w = e,
                  D = null != (r = m.cssRules) ? r : [];
                for (r = 0; r < Math.min(D.length, w); r++) {
                  var K = D[r],
                    F = u;
                  if (f.call(p, K.selectorText) && F(K)) {
                    n = !0;
                    break a;
                  }
                }
                n = !1;
              }
            if (n) return !0;
          } catch (R) {}
    }
    return !1;
  };
  Fi = function (a) {
    return Ii(a, function (b) {
      return 'fixed' === b.position || 'sticky' === b.position;
    });
  };
  Gi = function (a) {
    return Ii(a, function (b) {
      var c;
      return ((E = ['left', 'right']), _.t(E, 'includes')).call(
        E,
        null != (c = b['float']) ? c : b.cssFloat
      );
    });
  };
  Oi = function (a) {
    return 'number' === typeof a || 'string' === typeof a;
  };
  Pi = function (a, b) {
    /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(b) &&
      ((b = Id(b)), (a.src = Za(b).toString()));
  };
  Ri = function (a, b, c) {
    c = void 0 === c ? Qi : c;
    a.goog_sdr_l ||
      (Object.defineProperty(a, 'goog_sdr_l', { value: !0 }),
      'complete' === a.document.readyState
        ? c(a, b)
        : _.hb(a, 'load', function () {
            return void c(a, b);
          }));
  };
  Si = function (a) {
    try {
      var b, c;
      return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {})
        .google_ads_top_frame;
    } catch (d) {}
    return null;
  };
  Ti = function (a) {
    var b = RegExp('^https?://[^/#?]+/?$');
    return !!a && !b.test(a);
  };
  Ui = function (a) {
    if (a === a.top || Ed(a.top)) return v.Promise.resolve({ status: 4 });
    var b = Si(a);
    if (!b) return v.Promise.resolve({ status: 2 });
    if (a.parent === a.top && Ti(a.document.referrer))
      return v.Promise.resolve({ status: 3 });
    var c = new _.Eg();
    a = new MessageChannel();
    a.port1.onmessage = function (d) {
      '__goog_top_url_resp' === d.data.msgType &&
        c.resolve({ Ec: d.data.topUrl, status: d.data.topUrl ? 0 : 1 });
    };
    b.postMessage({ msgType: '__goog_top_url_req' }, '*', [a.port2]);
    return c.promise;
  };
  Yi = function (a) {
    var b = void 0 === b ? Vi : b;
    var c = Wi(a);
    return c.messageChannelSendRequestFn
      ? v.Promise.resolve(c.messageChannelSendRequestFn)
      : new v.Promise(function (d) {
          function e(l) {
            return h.j(l).then(function (k) {
              return k.data;
            });
          }
          var f = _.Ad('IFRAME');
          f.style.display = 'none';
          f.name = 'goog_topics_frame';
          f.src = Za(b).toString();
          var g = new URL(b.toString()).origin,
            h = Xi({
              destination: a,
              Nc: f,
              origin: g,
              Ja: 'goog:gRpYw:doubleclick',
            });
          h.j('goog:topics:frame:handshake:ack').then(function (l) {
            'goog:topics:frame:handshake:ack' === l.data && d(e);
          });
          c.messageChannelSendRequestFn = e;
          a.document.documentElement.appendChild(f);
        });
  };
  cj = function (a, b, c, d) {
    var e = void 0 === e ? !1 : e;
    var f = Zi(d),
      g = f.Ac,
      h = f.zc;
    b = Wi(b);
    b.getTopicsPromise ||
      ((a = a({
        message: 'goog:topics:frame:get:topics',
        skipTopicsObservation: e,
      }).then(function (l) {
        var k = h;
        if (l instanceof Uint8Array)
          k || (k = !(g instanceof Uint8Array && wa(l, g)));
        else if (Sd()(l)) k || (k = l !== g);
        else return (l = Error(JSON.stringify(l))), mh(c.context, 989, l), 7;
        if (k && d)
          try {
            var m = new $i();
            var n = _.z(m, 2, _.se());
            l instanceof Uint8Array
              ? aj(n, 1, bj, Ub(l, !1, !1))
              : aj(n, 3, bj, l);
            d.setItem('goog:cached:topics', Zd(n));
          } catch (p) {}
        return l;
      })),
      (b.getTopicsPromise = (0, C.ra)(a)));
    return g && !h ? v.Promise.resolve(g) : b.getTopicsPromise;
  };
  Zi = function (a) {
    if (!a) return { Ac: null, zc: !0 };
    try {
      var b = a.getItem('goog:cached:topics');
      if (!b) return { Ac: null, zc: !0 };
      var c = dj(b),
        d = ej(c, bj);
      switch (d) {
        case 0:
          var e = null;
          break;
        case 1:
          var f = fj(c, bj, 1),
            g = x(c, f),
            h = Ub(g, !0, !!(Hb(c.fa) & 18));
          null != h && h !== g && nc(c, f, h);
          var l = null == h ? Tb() : h;
          var k = gj(l);
          e = k ? new Uint8Array(k) : hj || (hj = new Uint8Array(0));
          break;
        case 3:
          e = de(c, fj(c, bj, 3), 0);
          break;
        default:
          Va(d);
      }
      var m = ij(c, 2) + 6048e5 < _.se();
      return { Ac: e, zc: m };
    } catch (n) {
      return { Ac: null, zc: !0 };
    }
  };
  Wi = function (a) {
    var b;
    return null != (b = a.google_tag_topics_state)
      ? b
      : (a.google_tag_topics_state = {});
  };
  lj = function (a) {
    if (La()) {
      var b = a.document.documentElement.lang;
      jj(a)
        ? kj(He(a), !0, '', b)
        : new MutationObserver(function (c, d) {
            jj(a) &&
              (kj(He(a), !1, b, a.document.documentElement.lang),
              d.disconnect());
          }).observe(a.document.documentElement, {
            attributeFilter: ['class'],
          });
    }
  };
  jj = function (a) {
    var b, c;
    a =
      null == (b = a.document)
        ? void 0
        : null == (c = b.documentElement)
        ? void 0
        : c.classList;
    return !!(
      (null == a ? 0 : a.contains('translated-rtl')) ||
      (null == a ? 0 : a.contains('translated-ltr'))
    );
  };
  kj = function (a, b, c, d) {
    je(
      { ptt: '17', pvsid: '' + a, ibatl: String(b), pl: c, nl: d },
      'translate-event'
    );
  };
  mj = function (a) {
    var b = '';
    Dd(
      function (c) {
        if (c === c.top) return !0;
        var d;
        if (null == (d = c.document) ? 0 : d.referrer) b = c.document.referrer;
        return !1;
      },
      !1,
      !1,
      a
    );
    return b;
  };
  nj = function (a) {
    var b;
    return null != (b = a.google_tag_data) ? b : (a.google_tag_data = {});
  };
  oj = function (a) {
    var b, c;
    return (
      'function' ===
      typeof (null == (b = a.navigator)
        ? void 0
        : null == (c = b.userAgentData)
        ? void 0
        : c.getHighEntropyValues)
    );
  };
  qj = function () {
    var a = window;
    if (!oj(a)) return null;
    var b = nj(a);
    if (b.uach_promise) return b.uach_promise;
    a = a.navigator.userAgentData.getHighEntropyValues(pj).then(function (c) {
      null != b.uach || (b.uach = c);
      return c;
    });
    return (b.uach_promise = a);
  };
  Cj = function (a) {
    var b;
    return rj(
      sj(
        tj(
          uj(
            vj(
              wj(
                xj(
                  yj(zj(new Aj(), a.architecture || ''), a.bitness || ''),
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
              var d = new Bj();
              d = _.z(d, 1, c.brand);
              return _.z(d, 2, c.version);
            })) || []
      ),
      a.wow64 || !1
    );
  };
  Dj = function () {
    var a, b;
    return null !=
      (b =
        null == (a = qj())
          ? void 0
          : a.then(function (c) {
              return Cj(c);
            }))
      ? b
      : null;
  };
  Fj = function (a) {
    a = (Ed(a.top) ? a.top : a).AMP;
    return (
      'object' === typeof a &&
      !!Ej(a, function (b, c) {
        return !/^inabox/i.test(c);
      })
    );
  };
  Ij = function (a, b) {
    var c = Gj.get(a);
    c || ((b = c = b()), Hj.set(b, a), Gj.set(a, b));
    return c;
  };
  Kj = function (a, b) {
    return (0, C.ra)(
      Ij(b, function () {
        return new Jj(a, b);
      })
    );
  };
  M = function (a) {
    return function () {
      return new Lj(a, [].concat(_.Ld(eb.apply(0, arguments))));
    };
  };
  Mj = function (a) {
    return (
      '[' +
      a
        .map(function (b) {
          return 'string' === typeof b
            ? "'" + b + "'"
            : Array.isArray(b)
            ? Mj(b)
            : String(b);
        })
        .join(', ') +
      ']'
    );
  };
  Nj = function (a, b) {
    b = Mj(b);
    b = b.substring(1, b.length - 1);
    return new Lj(96, [a, b]);
  };
  Oj = function (a) {
    return ((E =
      'rewardedSlotReady rewardedSlotGranted rewardedSlotClosed slotAdded slotRequested slotResponseReceived slotRenderEnded slotOnload slotVisibilityChanged impressionViewable'.split(
        ' '
      )),
    _.t(E, 'includes')).call(E, a)
      ? a
      : null;
  };
  Qj = function (a, b, c) {
    return Ij(c, function () {
      return new Pj(a, b, c);
    });
  };
  Sj = function (a, b, c) {
    return Ij(c, function () {
      return new Rj(a, b, c);
    });
  };
  Tj = function () {
    var a;
    return null != (a = _.q.googletag) ? a : (_.q.googletag = { cmd: [] });
  };
  Uj = function () {
    var a = Tj();
    a.hasOwnProperty('pubadsReady') || (a.pubadsReady = !0);
  };
  Xj = function (a) {
    var b = window;
    'complete' === _.q.document.readyState
      ? _.ph(a, 94, function () {
          Tj()._pubconsole_disable_ || (null !== Vj(b) && Wj(a, b));
        })
      : _.hb(
          _.q,
          'load',
          _.ih(a, 94, function () {
            Tj()._pubconsole_disable_ || (null !== Vj(b) && Wj(a, b));
          })
        );
  };
  Wj = function (a, b) {
    b = void 0 === b ? _.q : b;
    if (!Yj) {
      var c = new Zj('gpt_pubconsole_loaded');
      Ci(c, a);
      L(c, 'param', String(Vj(b)));
      L(c, 'api', String(ak));
      bk(c);
      ck(b.document, dk);
      Yj = !0;
    }
  };
  Vj = function (a) {
    var b = Oh(a),
      c;
    return null !=
      (c = ((E = [
        'google_debug',
        'dfpdeb',
        'google_console',
        'google_force_console',
        'googfc',
      ]),
      _.t(E, 'find')).call(E, function (d) {
        return null !== ek(b, d);
      }))
      ? c
      : null;
  };
  fk = function () {
    Tj()._pubconsole_disable_ = !0;
  };
  ik = function () {
    gk && ((0, C.K)(Tj().console).openConsole(hk), (hk = void 0), (gk = !1));
  };
  pk = function (a, b, c, d, e) {
    if ('string' !== typeof c || jk(c))
      N(e, Nj('Slot.setTargeting', [c, d]), a);
    else {
      var f = [];
      Array.isArray(d)
        ? (f = d)
        : ta(d)
        ? (f = _.t(Array, 'from').call(Array, d))
        : d && (f = [d]);
      f = f.map(String);
      (d = ((E = kk(b)), _.t(E, 'find')).call(E, function (g) {
        return x(g, 1) === c;
      }))
        ? lk(d, f)
        : ((d = lk(mk(new nk(), c), f)), hf(b, 9, nk, d));
      e.info(ok(c, f.join(), (0, C.K)(b.getAdUnitPath())), a);
    }
  };
  qk = function (a, b, c, d) {
    if (null != c && 'object' === typeof c)
      for (
        var e = _.A(_.t(Object, 'keys').call(Object, c)), f = e.next();
        !f.done;
        f = e.next()
      )
        (f = f.value), pk(a, b, f, c[f], d);
    else d.error(Nj('Slot.updateTargetingFromMap', [c]), a);
  };
  sk = function (a, b, c) {
    return Ij(c, function () {
      return new rk(a, b, c, c.j);
    });
  };
  tk = function (a) {
    return _.t(Object, 'assign').call(
      Object,
      {},
      a,
      _.t(Object, 'fromEntries').call(
        Object,
        _.t(Object, 'entries')
          .call(Object, a)
          .map(function (b) {
            b = _.A(b);
            var c = b.next().value;
            return [b.next().value, c];
          })
      )
    );
  };
  xk = function () {
    var a = {},
      b = tk(uk);
    a.OutOfPageFormat = b;
    b = tk(vk);
    a.TrafficSource = b;
    b = tk(wk);
    a.Taxonomy = b;
    return a;
  };
  zk = function () {
    for (
      var a = De(yk) || '0-0-0',
        b = a.split('-').map(function (e) {
          return Number(e);
        }),
        c = ['1', '0', '40'].map(function (e) {
          return Number(e);
        }),
        d = 0;
      d < b.length;
      d++
    ) {
      if (b[d] > c[d]) return a;
      if (b[d] < c[d]) break;
    }
    return '1-0-40';
  };
  Dk = function () {
    if (Ak) return Ak;
    for (var a = Ee(Bk), b = [], c = 0; c < a.length; c += 2)
      Ck(a[c], a[c + 1], b);
    return (Ak = b.join('&'));
  };
  Jk = function (a, b) {
    if (!b || !_.ka(b)) return null;
    var c = !1,
      d = new Ek();
    _.Fk(b, function (e, f) {
      var g = !1;
      switch (f) {
        case 'allowOverlayExpansion':
          'boolean' === typeof e
            ? _.z(d, 1, b.allowOverlayExpansion)
            : (c = g = !0);
          break;
        case 'allowPushExpansion':
          'boolean' === typeof e
            ? _.z(d, 2, b.allowPushExpansion)
            : (c = g = !0);
          break;
        case 'sandbox':
          !0 === e ? _.z(d, 3, b.sandbox) : (c = g = !0);
          break;
        case 'useUniqueDomain':
          Gk();
          return;
        default:
          g = !0;
      }
      g && a.error(Hk('setSafeFrameConfig', Ik(b), f, Ik(e)));
    });
    return c ? null : d;
  };
  Lk = function (a) {
    var b = new Ek();
    a = _.A(a);
    for (var c = a.next(); !c.done; c = a.next())
      if ((c = c.value))
        Kk(c, 1) && _.z(b, 1, G(c, 1)),
          Kk(c, 2) && _.z(b, 2, G(c, 2)),
          Kk(c, 3) && _.z(b, 3, G(c, 3)),
          Kk(c, 4) && _.z(b, 4, G(c, 4));
    return b;
  };
  Nk = function () {
    var a, b, c;
    return (
      'pagead2.googlesyndication.com' ===
      (null !=
      (c = Mk.exec(
        null != (b = null == (a = _.Zg(172)) ? void 0 : a.src) ? b : ''
      ))
        ? c
        : [])[1]
    );
  };
  Ok = function (a) {
    return (
      a +
      'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
    );
  };
  Pk = function (a, b) {
    var c = b.j;
    return a
      .map(function (d) {
        return _.t(c, 'find').call(c, function (e) {
          return e.j === d;
        });
      })
      .filter(Ud());
  };
  Sk = function (a, b) {
    b = _.H(Qk) ? b : _.xe(Rk);
    var c = [];
    a = _.A(a);
    for (var d = a.next(); !d.done; d = a.next()) {
      d = d.value;
      b.J = d;
      var e = Ae(9);
      1 === e.length && (c.push(d), c.push(d + '-' + e[0]));
    }
    return c;
  };
  Vk = function (a, b, c, d, e, f) {
    var g = Tk(f, a, b, d, e, void 0, !0);
    f = g.slotId;
    g = g.Ya;
    if (!f || !g) return N(b, Nj('PubAdsService.definePassback', [d, e])), null;
    _.z(g, 17, !0);
    c.slotAdded(f, g);
    return { te: sk(a, b, new Uk(a, f, c)), Ya: g };
  };
  Xk = function (a, b, c, d, e) {
    return Ij(c, function () {
      return new Wk(a, b, c, d, e);
    });
  };
  Zk = function (a) {
    return Array.isArray(a) && 2 === a.length ? a.every(Yk) : 'fluid' === a;
  };
  $k = function (a) {
    return Array.isArray(a) && 2 === a.length && Yk(a[0]) && Yk(a[1]);
  };
  bl = function (a) {
    return Array.isArray(a)
      ? Ch(Dh(new zh(), (0, C.ra)(a[0])), (0, C.ra)(a[1]))
      : al();
  };
  dl = function (a) {
    var b = [];
    if (cl(a)) b.push(bl((0, C.K)(a)));
    else if (Array.isArray(a)) {
      a = _.A(a);
      for (var c = a.next(); !c.done; c = a.next())
        (c = c.value),
          cl(c) ? b.push(bl((0, C.K)(c))) : wa(c, ['fluid']) && b.push(al());
    }
    return b;
  };
  el = function (a) {
    var b = void 0 === b ? window : b;
    if (!a) return [];
    if (!a.length) {
      var c, d;
      null == (c = b.console) ||
        null == (d = c.warn) ||
        d.call(c, 'Invalid GPT fixed size specification: ' + JSON.stringify(a));
    }
    return dl(a);
  };
  cl = function (a) {
    return _.H(fl)
      ? Array.isArray(a) && 2 === a.length
        ? a.every(gl)
        : 'fluid' === a
      : Array.isArray(a) && 1 < a.length
      ? 'number' === typeof a[0] && 'number' === typeof a[1]
      : 'fluid' === a;
  };
  ra = function (a, b) {
    a: {
      b = (0, C.ra)(b[0]);
      a = (0, C.ra)(a[0]);
      for (var c = pa, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
        var f = c(b[e], a[e]);
        if (0 != f) {
          b = f;
          break a;
        }
      }
      b = pa(b.length, a.length);
    }
    return b;
  };
  il = function (a) {
    if (!Array.isArray(a) || 2 !== a.length)
      throw new hl('Each mapping entry must be an array of size 2');
    var b = a[0];
    if (!$k(b))
      throw new hl('Size must be an array of two non-negative integers');
    b = Ch(Dh(new zh(), b[0]), b[1]);
    if (Array.isArray(a[1]) && 0 === a[1].length) a = [];
    else if (((a = dl(a[1])), 0 === a.length))
      throw new hl('At least one slot size must be present');
    var c = new Bh();
    b = _.ch(c, 1, b);
    return Nc(b, 2, a);
  };
  kl = function (a, b, c) {
    return Ij(c, function () {
      return new jl(a, b, c);
    });
  };
  ll = function (a) {
    var b = a.match(/\/?([0-9]+)(?:,[0-9]+)?((?:\/.+?)+?)(?:\/*)$/);
    return 3 !== (null == b ? void 0 : b.length) ? a : '/' + b[1] + b[2];
  };
  nl = function (a, b) {
    var c, d;
    return null !=
      (d =
        null != (c = null == b ? void 0 : b.get(_.H(ml) ? ll(a) : a))
          ? c
          : null == b
          ? void 0
          : b.get(Ih(a)))
      ? d
      : 0;
  };
  sl = function (a, b, c, d, e) {
    if (null != b && b.size) {
      var f, g;
      e =
        null !=
        (g =
          null != (f = null == e ? void 0 : e.adUnits)
            ? f
            : null == a
            ? void 0
            : a.adUnits)
          ? g
          : [];
      a = {};
      f = _.A(e);
      for (g = f.next(); !g.done; a = { wc: a.wc }, g = f.next()) {
        e = g.value;
        g = e.code;
        var h = e.bids;
        e = void 0;
        if (
          g &&
          null != (e = h) &&
          e.length &&
          ((g = nl(g, b)), (a.wc = g / 1e6), !(0 >= g))
        ) {
          var l = void 0;
          e = {};
          h = _.A(null != (l = h) ? l : []);
          for (l = h.next(); !l.done; e = { Oa: e.Oa, hd: e.hd }, l = h.next())
            (l = l.value),
              (e.hd = 'function' === typeof l.getFloor ? l.getFloor : void 0),
              (e.Oa = ol(pl(ql(new rl(), 4), g), c)),
              (l.getFloor = (function (k, m) {
                return function (n) {
                  4 === de(k.Oa, 1, 0) && ql(k.Oa, 1);
                  var p,
                    r = null == (p = k.hd) ? void 0 : p.apply(this, [n]);
                  n = c ? r || {} : { currency: 'USD', floor: m.wc };
                  return null != r && r.floor
                    ? (null == r ? 0 : r.currency) && 'USD' !== r.currency
                      ? (1 === de(k.Oa, 1, 0) &&
                          ((n = pl(ql(k.Oa, 6), 1e6 * r.floor)),
                          _.z(n, 3, r.currency)),
                        r)
                      : (r.floor || 0) > m.wc
                      ? (1 === de(k.Oa, 1, 0) && pl(ql(k.Oa, 5), 1e6 * r.floor),
                        r)
                      : n
                    : n;
                };
              })(e, a)),
              d.set(l.getFloor, e.Oa);
        }
      }
    }
  };
  Bl = function (a, b, c, d, e) {
    var f,
      g,
      h =
        null == (f = e.getBidResponsesForAdUnitCode)
          ? void 0
          : null == (g = f.call(e, b.getDomId()))
          ? void 0
          : g.bids,
      l;
    if (null == (l = h) || !l.length) {
      var k;
      h =
        (null ==
        (k = (0, C.K)(e.getBidResponsesForAdUnitCode)(b.getAdUnitPath()))
          ? void 0
          : k.bids) || [];
    }
    f = h.filter(function (m) {
      return (
        m.auctionId !== c &&
        d.some(function (n) {
          return ((E = tl(n, 2)), _.t(E, 'includes')).call(E, m.adId);
        })
      );
    });
    f = _.A(f);
    for (g = f.next(); !g.done; g = f.next())
      (g = g.value),
        (l = h = void 0),
        (k = ul(
          g,
          d,
          null == (h = e.adUnits)
            ? void 0
            : null ==
              (l = _.t(h, 'find').call(h, function (m) {
                m = m.code;
                return m === b.getAdUnitPath() || m === b.getDomId();
              }))
            ? void 0
            : l.mediaTypes
        )),
        (h = vl(a, wl(_.z(xl(yl(new zl(), g.bidder), 1), 6, !0), k))),
        'number' === typeof g.timeToRespond && Al(h, g.timeToRespond);
  };
  El = function (a, b, c) {
    null != x(a, 3) ||
      (c === b.getAdUnitPath()
        ? _.z(a, 3, 1)
        : c === b.getDomId() && _.z(a, 3, 2));
  };
  Hl = function (a, b, c, d, e, f, g) {
    f = f.get(
      null != g
        ? g
        : function () {
            return null;
          }
    );
    1 !== (null == f ? void 0 : de(f, 1, 0)) && _.ch(b, 5, f);
    Fl(a, rl, 5) ||
      (f
        ? 1 === de(f, 1, 0)
          ? Gl(a, f)
          : Gl(a, pl(ql(ol(new rl(), e), 1), nl(c, d)))
        : Gl(a, ql(ol(new rl(), e), nl(c, d) ? 2 : 3)));
  };
  ul = function (a, b, c) {
    var d = a.cpm,
      e = a.originalCpm,
      f = a.currency,
      g = a.originalCurrency,
      h = a.dealId,
      l = a.adserverTargeting,
      k = a.bidder,
      m = a.adUnitCode,
      n = a.adId,
      p = a.mediaType,
      r = a.height;
    a = a.width;
    var u = new Il();
    'number' === typeof d &&
      (_.z(u, 2, Math.round(1e6 * d)),
      (g && g !== f) ||
        ((d = Math.round(1e6 * Number(e))),
        isNaN(d) || d === ij(u, 2) || _.z(u, 8, d)));
    'string' === typeof f && _.z(u, 3, f);
    'string' === typeof h && Jl(u, Kl(h));
    if ('object' === typeof l)
      for (
        b = _.t(Object, 'fromEntries').call(
          Object,
          b.map(function (K) {
            return [x(K, 1), tl(K, 2)];
          })
        ),
          f = _.A(['', '_' + k]),
          h = f.next();
        !h.done;
        h = f.next()
      ) {
        h = h.value;
        d = [];
        e = _.A(_.t(Object, 'entries').call(Object, l));
        for (g = e.next(); !g.done; g = e.next()) {
          g = _.A(g.value);
          var w = g.next().value;
          g = g.next().value;
          w = (w + h).slice(0, 20);
          var D = void 0;
          if (null != (D = b[w]) && D.length)
            if (b[w][0] === String(g)) d.push(w);
            else {
              d = [];
              break;
            }
        }
        Ll(u, tl(u, 4).concat(d));
      }
    switch (p || 'banner') {
      case 'banner':
        _.z(u, 5, 1);
        break;
      case 'native':
        _.z(u, 5, 2);
        ti(
          'hbyg_nat',
          function (K) {
            L(K, 'pub_url', document.URL);
            L(K, 'b', k);
            L(K, 'auc', null != m ? m : '');
            L(K, 'hmt', Number(!!c));
            var F;
            L(
              K,
              'hat',
              Number(
                !!(null == c ? 0 : null == (F = c.native) ? 0 : F.adTemplate)
              )
            );
          },
          _.Ce(Ml)
        );
        break;
      case 'video':
        _.z(u, 5, 3);
    }
    'number' === typeof r && 'number' === typeof a && Nl(u, Ol(Pl(a), r));
    'string' === typeof n && _.z(u, 1, n);
    return u;
  };
  Ql = function (a, b) {
    var c = new v.Map(),
      d = function (l) {
        var k = c.get(l);
        k || ((k = {}), c.set(l, k));
        return k;
      },
      e = [];
    a = _.A(a);
    for (var f = a.next(); !f.done; f = a.next()) {
      f = f.value;
      var g = f.args,
        h = f.eventType;
      f = f.elapsedTime;
      'bidTimeout' === h && e.push.apply(e, _.Ld(g));
      switch (h) {
        case 'bidRequested':
          if (g.auctionId !== b) continue;
          if (!Array.isArray(g.bids)) continue;
          g = _.A(g.bids);
          for (h = g.next(); !h.done; h = g.next())
            if ((h = h.value.bidId)) d(h).requestTime = f;
          break;
        case 'noBid':
          g.auctionId === b && g.bidId && (d(g.bidId).fg = f);
      }
    }
    d = new v.Map();
    a = _.A(_.t(c, 'entries').call(c));
    for (f = a.next(); !f.done; f = a.next())
      (g = _.A(f.value)),
        (f = g.next().value),
        (h = g.next().value),
        (g = h.requestTime),
        (h = h.fg),
        g && h && d.set(f, { latency: h - g, me: !1 });
    e = _.A(e);
    for (a = e.next(); !a.done; a = e.next())
      if (
        ((f = a.value),
        (a = f.bidId),
        (f = f.auctionId),
        a && f === b && (a = d.get(a)))
      )
        a.me = !0;
    return d;
  };
  Rl = function (a, b) {
    var c = a.que,
      d = function () {
        var e;
        null == a ||
          null == (e = a.requestBids) ||
          e.before.call(
            b,
            function (f, g) {
              return Tj().pbjs_hooks.push({
                context: b,
                nextFunction: f,
                requestBidsConfig: g,
              });
            },
            0
          );
      };
    (null == c ? 0 : c.hasOwnProperty('push'))
      ? null == c || c.push(d)
      : null == c || c.unshift(d);
  };
  Tl = function (a, b) {
    return (0, C.ra)(
      Ij(b, function () {
        return new Sl(a, b);
      })
    );
  };
  Vl = function (a, b, c, d) {
    for (
      var e = _.A(_.t(Object, 'entries').call(Object, Ul)), f = e.next();
      !f.done;
      f = e.next()
    ) {
      var g = _.A(f.value);
      f = g.next().value;
      g = g.next().value;
      b & f && N(a, g(c, d));
    }
  };
  bm = function (a, b, c) {
    c = void 0 === c ? null : c;
    b = (void 0 === b ? 0 : b) ? 604800 : -1;
    if (!(0 < b) || (c && G(c, 5))) {
      var d = 0;
      try {
        (d |= a != a.top ? 512 : 0),
          (d |=
            a.navigator && /Android 2/.test(a.navigator.userAgent)
              ? 1048576
              : 0);
      } catch (g) {
        d |= 32;
      }
      c = c ? ne(c) : null;
      var e = 0;
      try {
        e |= Wl(a, 2500);
        if (_.H(Xl)) {
          var f = _.Yl(a).clientHeight;
          e |= f ? (320 > f ? 2097152 : 0) : 1073741824;
        }
        e |= Zl(a);
        0 < b && !_.$l(_.am(c, b)) && (e |= 134217728);
      } catch (g) {
        e |= 32;
      }
      a = d | e;
    } else a = 4194304;
    return a;
  };
  fm = function (a, b, c, d, e, f) {
    d = cm(d);
    if (5 !== d) return !1;
    var g = bm(e, !dm(c), f);
    if ((g &= -134217729))
      ti(
        'gpt_int_ns',
        function (h) {
          L(h, 'nsr', g);
          Ci(h, a);
        },
        _.Ce(em)
      ),
        Vl(b, g, d, c.getAdUnitPath());
    return !!g;
  };
  gm = function (a) {
    switch (a) {
      case 4:
        return 11;
      case 2:
        return 2;
      case 3:
        return 1;
      case 5:
        return 8;
      case 6:
        return 42;
    }
  };
  nm = function (a, b) {
    a = gm(a);
    if (!a) return null;
    var c = 0;
    if (11 !== a) {
      c |= _.q != _.q.top ? 512 : 0;
      var d = _.hm(_.q);
      d =
        26 !== a && 27 !== a && 40 !== a && 41 !== a && 10 !== a && d.adCount
          ? 1 == a || 2 == a
            ? !(!d.adCount[1] && !d.adCount[2])
            : (d = d.adCount[a])
            ? 1 <= d
            : !1
          : !1;
      d && (c |= 64);
      if (c) return c;
    }
    if (2 === a || 1 === a) {
      d = { Ca: _.q, pe: im, We: b ? a : void 0 };
      0 === (0, _.jm)() && ((d.pe = 3e3), (d.Pf = 650));
      b = d.Ca;
      var e = d.Pf,
        f = d.pe,
        g = d.We,
        h = d.Va,
        l = d.Kh;
      d = 0;
      try {
        d |= b != b.top ? 512 : 0;
        var k = Math.min(b.screen.width || 0, b.screen.height || 0);
        d |= k ? (320 > k ? 8192 : 0) : 2048;
        var m;
        if ((m = b.navigator)) {
          var n = b.navigator.userAgent;
          m =
            /Android 2/.test(n) ||
            /iPhone OS [34]_/.test(n) ||
            /Windows Phone (?:OS )?[67]/.test(n) ||
            /MSIE.*Windows NT/.test(n) ||
            /Windows NT.*Trident/.test(n);
        }
        d |= m ? 1048576 : 0;
        d = e ? d | (b.innerHeight >= e ? 0 : 1024) : d | (_.km(b) ? 0 : 8);
        d |= Wl(b, f);
        d |= Zl(b);
      } catch (p) {
        d |= 32;
      }
      switch (g) {
        case 2:
          k = h;
          k = void 0 === k ? null : k;
          m = Og(
            b.innerWidth,
            3,
            0,
            Math.min(Math.round((b.innerWidth / 320) * 50), lm) + 15,
            3
          );
          null != Ng(b, m, void 0 === k ? null : k) && (d |= 16777216);
          break;
        case 1:
          (k = h),
            (k = void 0 === k ? null : k),
            (m = b.innerWidth),
            (n = b.innerHeight),
            (e = Math.min(Math.round((b.innerWidth / 320) * 50), lm) + 15),
            (f = Og(m, 3, n - e, n, 3)),
            25 < e && f.push({ x: m - 25, y: n - 25 }),
            null != Ng(b, f, void 0 === k ? null : k) && (d |= 16777216);
      }
      l &&
        ((h = void 0 === h ? null : h),
        (h = void 0 === h ? null : h),
        (l = b.innerWidth),
        (k = b.innerHeight),
        (m = _.Ce(mm)),
        (l = Og(l, 10, k - m, k, 10)),
        (l = null != Ng(b, l, h)));
      l && (d |= 16777216);
      c |= d;
    } else 8 === a ? (c |= bm(_.q)) : 11 !== a && 42 !== a && (c |= 32);
    c ||
      ((b = _.hm(_.q)),
      (b.adCount = b.adCount || {}),
      (b.adCount[a] = b.adCount[a] + 1 || 1));
    return c;
  };
  om = function (a, b) {
    for (var c = new xi(), d = 0; d < a.length; d++)
      c.set(a.length - d - 1, b(a[d]));
    return zi(c);
  };
  pm = function (a, b, c) {
    c = void 0 === c ? {} : c;
    var d = void 0 === c.Yb ? '' : c.Yb;
    c = void 0 === c.sa ? ',' : c.sa;
    var e = !1;
    a = a.map(function (f) {
      f = b(f);
      e || (e = !!f);
      return String(f || d);
    });
    return e ? a.join(c) : null;
  };
  qm = function (a, b, c, d) {
    var e = _.Ad('DIV');
    e.id = b;
    e.name = b;
    b = e.style;
    b.border = '0pt none';
    c && ((b.margin = 'auto'), (b.textAlign = 'center'));
    d &&
      ((c = Array.isArray(d)),
      (b.width = c ? d[0] + 'px' : '100%'),
      (b.height = c ? d[1] + 'px' : '0%'));
    a.appendChild(e);
    return e;
  };
  rm = function (a) {
    return (
      'sticky' === (null == a ? void 0 : a.position) ||
      'fixed' === (null == a ? void 0 : a.position)
    );
  };
  tm = function (a, b, c, d) {
    try {
      var e;
      if (!(e = !b)) {
        var f;
        if (!(f = !sm(b, c, d))) {
          a: {
            do {
              var g = ei(b, c);
              if (g && 'fixed' == g.position) {
                var h = !1;
                break a;
              }
            } while ((b = b.parentElement));
            h = !0;
          }
          f = !h;
        }
        e = f;
      }
      e && (a.height = -1);
    } catch (l) {
      (a.width = -1), (a.height = -1);
    }
  };
  um = function (a) {
    if (61440 >= a.length) return { url: a, Yd: 0 };
    var b = a;
    61440 < b.length &&
      ((b = b.substring(0, 61432)),
      (b = b.replace(/%\w?$/, '')),
      (b = b.replace(/&[^=]*=?$/, '')),
      (b += '&trunc=1'));
    return { url: b, Yd: a.length - b.length + 8 };
  };
  vm = function (a, b) {
    b = void 0 === b ? window : b;
    return b.location
      ? b.URLSearchParams
        ? ((a = new URLSearchParams(b.location.search).get(a)),
          (null == a ? 0 : a.length) ? a : null)
        : (a = new RegExp('[?&]' + a + '=([^&]*)').exec(b.location.search))
        ? decodeURIComponent(a[1])
        : null
      : null;
  };
  wm = function (a, b) {
    b = void 0 === b ? window : b;
    return !!vm(a, b);
  };
  zm = function (a, b) {
    var c = b.V;
    return pm(
      a,
      function (d) {
        return xm(c[d.getDomId()]).join('&');
      },
      ym
    );
  };
  xm = function (a) {
    a = Am(a);
    var b = [];
    _.Fk(a, function (c, d) {
      c.length &&
        ((c = c.map(encodeURIComponent)),
        (d = encodeURIComponent(d)),
        b.push(d + '=' + c.join()));
    });
    return b;
  };
  Am = function (a) {
    for (var b = {}, c = _.A(kk(a)), d = c.next(); !d.done; d = c.next())
      (d = d.value), (b[(0, C.K)(x(d, 1))] = tl(d, 2));
    a = tl(a, 8);
    a.length && (null != b.excl_cat || (b.excl_cat = a));
    return b;
  };
  Bm = function (a) {
    var b = !1,
      c = be(a, nk, 2).map(function (d) {
        var e = (0, C.K)(x(d, 1));
        b = 'excl_cat' === e;
        d = tl(d, 2);
        return encodeURIComponent(e) + '=' + encodeURIComponent(d.join());
      });
    a = tl(a, 3);
    !b &&
      a.length &&
      c.push(
        encodeURIComponent('excl_cat') + '=' + encodeURIComponent(a.join())
      );
    return c;
  };
  Cm = function (a) {
    var b, c;
    return null !=
      (c =
        null ==
        (b = _.t(a, 'find').call(a, function (d) {
          return 'page_url' === x(d, 1);
        }))
          ? void 0
          : tl(b, 2)[0])
      ? c
      : null;
  };
  Dm = function (a) {
    var b = a.indexOf('google_preview=', a.lastIndexOf('?')),
      c = a.indexOf('&', b);
    -1 === c && ((c = a.length - 1), --b);
    return a.substring(0, b) + a.substring(c + 1, a.length);
  };
  Em = function (a) {
    var b;
    if (null == (b = a.location) ? 0 : b.ancestorOrigins)
      return a.location.ancestorOrigins.length;
    var c = 0;
    Dd(
      function () {
        c++;
        return !1;
      },
      !0,
      !0,
      a
    );
    return c;
  };
  Fm = function (a, b) {
    var c = b.V;
    return (
      !!Cm(b.U.ta()) ||
      a.some(function (d) {
        return null !== Cm(c[d.getDomId()].ta());
      })
    );
  };
  Im = function (a, b, c) {
    var d = null;
    try {
      var e = Gm(b.top.document, b.top).y;
      d = a.map(function (f) {
        var g = c.U,
          h = c.V[f.getDomId()],
          l;
        f = null == (l = ii(f, h, b.document, Mh(g, h))) ? void 0 : l.y;
        l = Fh(!0, b).height;
        return void 0 === f || -12245933 === f || -12245933 === l
          ? -1
          : f < e + l
          ? 0
          : ++Hm;
      });
    } catch (f) {}
    return d;
  };
  Km = function () {
    var a = void 0 === a ? window : a;
    Jm = _.se(a);
  };
  Lm = function (a, b) {
    var c;
    return !(null != (c = Lh(a, 11)) ? !c : !G(b, 10));
  };
  Mm = function (a, b, c, d) {
    if ((a = ci(a, b))) {
      var e;
      if ((c = null != (e = Lh(c, 24)) ? e : G(d, 30)))
        (c = a.getBoundingClientRect()),
          (d = c.top),
          (e = c.bottom),
          0 === c.height
            ? (c = !1)
            : ((c = _.q.innerHeight),
              (c = (0 < e && e < c) || (0 < d && d < c)));
      c || (a.style.display = 'none');
    }
  };
  Pm = function (a, b, c, d) {
    var e = d.Dc,
      f = d.adUnitPath;
    d = void 0 === d.Ia ? !1 : d.Ia;
    return 'string' === typeof f &&
      f.length &&
      (null == e || 'string' === typeof e || ('number' === typeof e && Nm(e)))
      ? Om(a, b, f, c, {
          fb: 'string' === typeof e ? e : void 0,
          format: 'number' === typeof e ? e : 1,
          Ia: d,
        })
      : (b.error(Nj('googletag.defineOutOfPageSlot', [f, e])), null);
  };
  Nm = function (a) {
    return (
      !!Ej(uk, function (b) {
        return b === a;
      }) || 6 === a
    );
  };
  Om = function (a, b, c, d, e) {
    var f = e.format;
    b = d.add(a, b, c, [1, 1], { fb: e.fb, format: f, Ia: e.Ia });
    a = b.slotId;
    b = b.Ya;
    a &&
      b &&
      (_.z(b, 15, f),
      _.Qm(a, function () {
        var g = window,
          h = gm((0, C.K)(f));
        if (h) {
          g = _.hm(g);
          var l = g.adCount && g.adCount[h];
          l && (g.adCount[h] = l - 1);
        }
      }));
    return null != a ? a : null;
  };
  Wm = function (a, b, c, d, e, f, g) {
    var h = new tf(),
      l = new Rm(a, d);
    I(h, l);
    f = new Sm(a, e, f);
    I(h, f);
    f = new Tm(a, b, e, g, l.eb);
    I(h, f);
    b = new Um(a, b, c, e, d, g, l.eb);
    I(h, b);
    a = new Vm(a, l.eb, b.l, f.l);
    I(h, a);
    Gf(h);
    return { eb: a.A, qa: h };
  };
  cn = function (a, b, c) {
    var d = window,
      e = new tf();
    d = _.H(Xm) ? new Ym(d) : new Zm(d);
    _.$m(e, d);
    c = new an(a, d, c);
    I(e, c);
    a = new bn(a, d, b, c.Ab);
    I(e, a);
    Gf(e);
    return { Ab: c.Ab, he: a.l, qa: e };
  };
  fn = function (a) {
    return dn(a) && en(a);
  };
  dn = function (a) {
    var b,
      c = null == (b = window.top) ? void 0 : b.location.href;
    if (!c) return !1;
    var d = Ih(c),
      e;
    return null == (e = be(a, gn, 1))
      ? void 0
      : e.some(function (f) {
          switch (ej(f, hn)) {
            case 1:
              f = (0, C.K)(jn(f, kn, 1, hn));
              if (null != x(f, 1) && null != x(f, 2)) {
                var g = (0, C.K)(ee(f, 1));
                f =
                  0 >= g || g > c.length
                    ? !1
                    : (0, C.K)(ee(f, 2)) === Ih(c.substring(0, g));
              } else f = !1;
              return f;
            case 2:
              return (0, C.K)(ee(f, fj(f, hn, 2))) === d;
            default:
              return !1;
          }
        });
  };
  en = function (a) {
    var b;
    return null == (b = ln(a, 2, !1))
      ? void 0
      : b.some(function (c) {
          switch (c) {
            case 0:
              return !1;
            case 1:
              return !0;
            case 2:
              return 0 === (0, _.jm)();
            case 4:
              return 2 === (0, _.jm)();
            case 3:
              return 1 === (0, _.jm)();
            default:
              return !1;
          }
        });
  };
  qn = function (a, b, c, d, e) {
    var f = [];
    c = _.A(be(c, mn, 3));
    for (var g = c.next(); !g.done; g = c.next())
      if (
        ((g = g.value),
        null != x(g, 1) &&
          null != x(g, 2) &&
          null != x(g, 3) &&
          null != x(g, 4))
      ) {
        var h = a.querySelector(ef(g, 1)),
          l = void 0;
        if (null != (l = h) && l.parentElement) {
          l = g.getAdUnitPath();
          var k = 'gpt_opp_' + l;
          if (!a.getElementById(k)) {
            var m = a.createElement('div');
            m.id = k;
            h.insertAdjacentElement('beforebegin', m);
            if ((g = b.defineSlot(l, [g.getWidth(), g.getHeight()], k)))
              g.addService(b.pubads()),
                (h = nn(mi(), g.getSlotElementId())),
                e && ((l = void 0), null == (l = h) || on(l, e)),
                f.push(g);
          }
        }
      }
    f.length &&
      pn(a, function () {
        for (var n = _.A(f), p = n.next(); !p.done; p = n.next())
          b.display(p.value);
        G(d, 4) && b.pubads().refresh(f);
      });
  };
  sn = function (a, b, c, d, e, f, g) {
    var h = document,
      l = c.getAdUnitPath();
    c = rn.get(de(c, 2, 0));
    if (l && c) {
      var k,
        m =
          null == (k = Pm(a, g, f, { Dc: c, adUnitPath: l, Ia: !0 }))
            ? void 0
            : k.j;
      m &&
        ((a = nn(mi(), m.getSlotElementId())),
        d && (null == a || on(a, d)),
        b.cmd.push(function () {
          m.addService(b.pubads());
        }),
        pn(h, function () {
          b.display(m);
          G(e, 4) && b.pubads().refresh([m]);
        }));
    }
  };
  tn = function (a) {
    switch (Number(a)) {
      case 2:
      case 3:
        return 'Anchor';
      case 5:
        return 'Interstitial';
      case 6:
        return 'Shoppit';
      default:
        return 'Out-of-page creative';
    }
  };
  un = function (a, b, c, d) {
    N(a, Hk('googletag.setConfig.commerce', Ik(b), c, Ik(d)));
  };
  vn = function (a) {
    return 'string' === typeof a && 0 < a.length && 5e3 > a.length;
  };
  wn = function (a) {
    if (!Array.isArray(a) || 0 === a.length) return !1;
    var b = a.length - 1;
    return a.every(function (c) {
      if ('string' !== typeof c || 0 === c.length) return !1;
      b += c.length;
      return 5e3 < b ? !1 : !0;
    });
  };
  zn = function (a, b, c) {
    if (
      'object' === typeof a &&
      null !== a &&
      _.t(Object, 'keys')
        .call(Object, (0, C.K)(a))
        .some(function (d) {
          return ((E = _.t(Object, 'values').call(Object, xn)),
          _.t(E, 'includes')).call(E, Number(d));
        })
    )
      return !0;
    yn('taxonomies', a, b, c);
    return !1;
  };
  Bn = function (a, b) {
    var c = be(b, An, 1).filter(function (d) {
      return de(d, 1, 0) !== a;
    });
    Nc(b, 1, c);
  };
  In = function (a, b, c, d) {
    if (void 0 !== _.t(b, 'values'))
      if (null === _.t(b, 'values')) Bn(a, c);
      else if (
        Cn(_.t(b, 'values'), d, b) &&
        ((b = Dn(a, _.t(b, 'values'), d, b)), b.length)
      ) {
        var e = ((E = be(c, An, 1)), _.t(E, 'find')).call(E, function (f) {
          return de(f, 1, 0) === a;
        });
        e ? En(e, b) : Fn(c, En(Gn(new An(), a), b));
        d.info(Hn(Ik(b), Ik(a)));
      }
  };
  Cn = function (a, b, c) {
    if (Array.isArray(a)) return !0;
    yn('taxonomyData.values', a, b, c);
    return !1;
  };
  Dn = function (a, b, c, d) {
    var e = [],
      f = [],
      g = !1;
    b = _.A(b);
    for (var h = b.next(); !h.done; h = b.next())
      (h = h.value),
        5 <= e.length && (g = !0),
        'string' !== typeof h ? f.push(h) : g || h in e || e.push(h);
    0 < f.length && yn('taxonomyData.values', f, c, d);
    g && N(c, Jn(Ik(a), Ik(5)));
    return e;
  };
  yn = function (a, b, c, d) {
    N(c, Hk('googletag.setConfig.pps', Ik(d), a, Ik(b)));
  };
  Ln = function (a) {
    Kn = a;
  };
  Nn = function () {
    for (
      var a = _.A(
          _.t(Array, 'from').call(
            Array,
            document.getElementsByTagName('script')
          )
        ),
        b = a.next();
      !b.done;
      b = a.next()
    ) {
      var c = (b = b.value),
        d = b.src;
      !d ||
        (-1 == d.indexOf('/tag/js/gpt.js') &&
          -1 == d.indexOf('/tag/js/gpt_mobile.js')) ||
        c.googletag_executed ||
        !b.textContent ||
        ((c.googletag_executed = !0),
        (c = document.createElement('script')),
        Ya(c, new Xa(b.textContent, Mn)),
        document.head.appendChild(c),
        document.head.removeChild(c));
    }
  };
  On = function (a, b) {
    b = _.A(_.t(Object, 'entries').call(Object, b));
    for (var c = b.next(); !c.done; c = b.next()) {
      var d = _.A(c.value);
      c = d.next().value;
      d = d.next().value;
      a.hasOwnProperty(c) || (a[c] = d);
    }
  };
  Rn = function (a, b, c) {
    var d = [];
    c = [].concat(_.Ld(c.Z)).slice();
    if (b) {
      if (!Array.isArray(b)) return N(a, Nj('googletag.destroySlots', [b])), !1;
      oa(b);
      d = c.filter(function (e) {
        return _.t(b, 'includes').call(b, e.j);
      });
    } else d = c;
    if (!d.length) return !1;
    Pn(d);
    Qn(d);
    return !0;
  };
  ko = function (a, b, c, d, e, f, g, h) {
    var l = Tj(),
      k,
      m,
      n = J(a, 74, function (r, u, w) {
        return e.defineSlot(a, b, r, u, w);
      }),
      p = {};
    n =
      ((p._loaded_ = !0),
      (p.cmd = []),
      (p._vars_ = l._vars_),
      (p.evalScripts = function () {
        try {
          Nn();
        } catch (w) {
          mh(a, 297, w);
          var r, u;
          null == (r = window.console) || null == (u = r.error) || u.call(r, w);
        }
      }),
      (p.display = J(a, 95, function (r) {
        void Sn(c, r, e);
      })),
      (p.defineOutOfPageSlot = J(a, 73, function (r, u) {
        return (r = Pm(a, b, e, { Dc: u, adUnitPath: r })) ? r.j : null;
      })),
      (p.getVersion = J(a, 946, function () {
        return a.rb ? String(a.rb) : a.Ga;
      })),
      (p.pubads = J(a, 947, function () {
        return Xk(a, b, c, e, h);
      })),
      (p.companionAds = J(a, 816, function () {
        null != k || (k = new Tn(b, c, f, h));
        return Qj(a, b, k);
      })),
      (p.content = J(a, 817, function () {
        null != m || (m = new Un(b, g));
        return Sj(a, b, m);
      })),
      (p.setAdIframeTitle = J(a, 729, Ln)),
      (p.getEventLog = J(a, 945, function () {
        return new Vn(a, b);
      })),
      (p.sizeMapping = J(a, 90, function () {
        return new Wn(a, b);
      })),
      (p.enableServices = J(a, 91, function () {
        for (var r = _.A(Xn), u = r.next(); !u.done; u = r.next())
          (u = u.value), u.B && b.info(Yn()), Zn(u);
      })),
      (p.destroySlots = J(a, 75, function (r) {
        return Rn(b, r, e);
      })),
      (p.enums = xk()),
      (p.defineSlot = n),
      (p.defineUnit = n),
      (p.getWindowsThatCanCommunicateWithHostpageLibrary = J(
        a,
        955,
        _.H($n)
          ? function (r) {
              return ao(_.xe(bo), r)
                .map(function (u) {
                  var w;
                  return null == (w = li(u, document))
                    ? void 0
                    : w.contentWindow;
                })
                .filter(function (u) {
                  return !!u;
                });
            }
          : function (r) {
              return co(r);
            }
      )),
      (p.disablePublisherConsole = J(a, 93, fk)),
      (p.onPubConsoleJsLoad = J(a, 731, ik)),
      (p.openConsole = J(a, 732, function (r) {
        ak = !0;
        var u;
        (null == (u = Tj()) ? 0 : u.console)
          ? (0, C.K)(Tj().console).openConsole(r)
          : (r && (hk = r), (gk = !0), Wj(a));
      })),
      (p.setConfig = J(a, 1034, function (r) {
        if (_.ka(r)) {
          var u = r.commerce,
            w = r.pps;
          if (null === u) Ne(eo(d, fo, 33), 1);
          else if (void 0 !== u)
            if (((r = eo(d, fo, 33)), _.ka(u))) {
              var D = u.query,
                K = u.categories,
                F = u.productIds,
                R = u.filter,
                T = Pc(go(r, ho, 1), !1);
              null === D
                ? Ne(T, 1)
                : vn(D)
                ? _.z(T, 1, D)
                : void 0 !== D && un(b, u, 'query', D);
              null === K
                ? _.z(T, 2, mc)
                : wn(K)
                ? _.uh(T, 2, K)
                : void 0 !== K && un(b, u, 'categories', K);
              null === F
                ? _.z(T, 3, mc)
                : wn(F)
                ? _.uh(T, 3, F)
                : void 0 !== F && un(b, u, 'productIds', F);
              null === R
                ? Ne(T, 4)
                : vn(R)
                ? _.z(T, 4, R)
                : void 0 !== R && un(b, u, 'filter', R);
              null != x(T, 1) || tl(T, 2).length ? _.ch(r, 1, T) : N(b, io());
            } else N(b, Nj('googletag.setConfig.commerce', [u]));
          if (null === w) Ne(eo(d, fo, 33), 2);
          else if (
            void 0 !== w &&
            ((u = eo(eo(d, fo, 33), jo, 2)),
            'object' === typeof w && (0, C.K)(w).hasOwnProperty('taxonomies')
              ? (r = !0)
              : (N(b, Nj('googletag.setConfig.pps', [w])), (r = !1)),
            r)
          )
            if (((r = w.taxonomies), void 0 === r)) yn('taxonomies', r, b, w);
            else if (null === r) Nc(u, 1);
            else if (zn(r, b, w))
              for (
                w = _.A(_.t(Object, 'entries').call(Object, r)), D = w.next();
                !D.done;
                D = w.next()
              ) {
                D = _.A(D.value);
                var Q = D.next().value;
                D = D.next().value;
                K = u;
                F = b;
                T = r;
                if (void 0 === Q || null === Q) yn('taxonomy', Q, F, T);
                else {
                  R = Number(Q);
                  var ba = R,
                    ca = F,
                    ma = T;
                  ((E = _.t(Object, 'values').call(Object, wk)),
                  _.t(E, 'includes')).call(E, Number(ba))
                    ? (Q = !0)
                    : (yn('taxonomy', Q, ca, ma), (Q = !1));
                  Q &&
                    void 0 !== D &&
                    (null === D
                      ? Bn(R, K)
                      : ((Q = F),
                        'object' === typeof D &&
                        (0, C.K)(D).hasOwnProperty('values')
                          ? (T = !0)
                          : (yn('taxonomyData', D, Q, T), (T = !1)),
                        T && In(R, D, K, F)));
                }
              }
        } else N(b, Nj('googletag.setConfig', [r]));
      })),
      (p.apiReady = !0),
      p);
    On(l, n);
  };
  lo = function (a) {
    var b = function () {
      return a.Reflect.construct(a.HTMLElement, [], this.constructor);
    };
    b.prototype = a.HTMLElement.prototype;
    b.prototype.constructor = b;
    _.t(Object, 'setPrototypeOf').call(Object, b, a.HTMLElement);
    return b;
  };
  no = function (a, b) {
    var c = _.Ce(mo);
    Math.random() <= c && je(b, a);
  };
  to = function (a, b, c) {
    var d = {};
    if (!c) return b.error(oo('missing data-rendering attribute')), d;
    try {
      var e = po(qo(c));
    } catch (l) {}
    var f;
    (null == (f = e) ? 0 : Fl(f, ro, 1))
      ? ((b = new so()),
        (b = _.y(b, 4, 1, 0)),
        (b = _.y(b, 2, 7, 0)),
        (a = _.y(b, 3, a.hb || a.Ga, '')),
        (b = Se(e, ro, 1)),
        (a = _.ch(a, 5, b)),
        (a = _.y(a, 6, !0, !1)),
        (d.mg = a))
      : b.error(oo('invalid data-rendering attribute'));
    var g;
    d.eg = null == (g = e) ? void 0 : ef(g, 2);
    var h;
    d.qd = null == (h = e) ? void 0 : ef(h, 3);
    return d;
  };
  wo = function (a, b) {
    var c, d, e, f, g, h, l, k, m, n;
    return _.jb(function (p) {
      c = ek(b, 'ai');
      if (!c || 0 === c.length) return p.return(v.Promise.resolve(b));
      d = uo();
      if (null == (e = d) ? 0 : e.gmaSdk) {
        if (
          (f = d.gmaSdk.getClickSignalsWithTimeout
            ? d.gmaSdk.getClickSignalsWithTimeout(c, 200)
            : d.gmaSdk.getClickSignals(c))
        )
          return p.return(
            v.Promise.resolve(
              b.replace('?', '?ms=' + encodeURIComponent(f) + '&')
            )
          );
      } else if (
        null == (g = d)
          ? 0
          : null == (h = g.webkit)
          ? 0
          : null == (l = h.messageHandlers)
          ? 0
          : l.getGmaClickSignals
      )
        return (
          (k = new _.Eg()),
          (m = k.resolve),
          (n = k.promise),
          vo(
            d.webkit.messageHandlers.getGmaClickSignals,
            { click_string: c },
            function (r) {
              m(b.replace('?', '?' + r + '&'));
            },
            function () {
              m(b);
            },
            function (r, u) {
              return _.ih(a, r, u);
            }
          ),
          p.return(n)
        );
      return p.return(v.Promise.resolve(b));
    });
  };
  xo = function (a, b, c, d) {
    var e, f, g;
    return _.jb(function (h) {
      e = b.getBoundingClientRect();
      f = {};
      var l = d.replace;
      var k =
        ((f.nx = Math.floor(c.clientX - e.x)),
        (f.ny = Math.floor(c.clientY - e.y)),
        (f.dim = Math.floor(e.width) + 'x' + Math.floor(e.height)),
        f);
      var m = [];
      for (n in k) Ck(n, k[n], m);
      k = m.join('&');
      if (k) {
        m = -1;
        0 > m && (m = 0);
        var n = -1;
        if (0 > n || n > m) {
          n = m;
          var p = '';
        } else p = ''.substring(n + 1, m);
        m = [''.slice(0, n), p, ''.slice(m)];
        n = m[1];
        m[1] = k ? (n ? n + '&' + k : k) : n;
        k = m[0] + (m[1] ? '?' + m[1] : '') + m[2];
      } else k = '';
      g = l.call(d, '?', k + '&');
      return h.return(wo(a, g));
    });
  };
  yo = function (a, b, c) {
    var d;
    if (null == c ? 0 : null == (d = c.gmaSdk) ? 0 : d.getViewSignals) {
      if ((c = c.gmaSdk.getViewSignals()))
        return (
          (c = b.replace(/^(.*?)(&adurl=)?$/, '$1&ms=' + c + '$2')),
          v.Promise.resolve(c)
        );
    } else {
      var e, f;
      if (
        null == c
          ? 0
          : null == (e = c.webkit)
          ? 0
          : null == (f = e.messageHandlers)
          ? 0
          : f.getGmaViewSignals
      ) {
        d = new _.Eg();
        var g = d.resolve;
        d = d.promise;
        vo(
          c.webkit.messageHandlers.getGmaViewSignals,
          {},
          function (h) {
            g(b.replace(/^(.*?)(&adurl=)?$/, '$1&' + h + '$2'));
          },
          function () {
            g(b);
          },
          function (h, l) {
            return _.ih(a, h, l);
          }
        );
        return d;
      }
    }
    return v.Promise.resolve(b);
  };
  Eo = function (a, b) {
    var c = window;
    var d = void 0 === d ? sb : d;
    var e;
    if (
      c.customElements &&
      null != (e = c.Reflect) &&
      e.construct &&
      !c.customElements.get('google-product-ad')
    ) {
      var f = uo(),
        g;
      null ==
        (g = f
          ? new zo(
              function (l, k) {
                return _.ih(a, l, k);
              },
              function () {}
            )
          : void 0) || Ao(g);
      var h = lo(c);
      e = function () {
        return h.apply(this, arguments) || this;
      };
      _.O(e, h);
      e.prototype.connectedCallback = function () {
        var l = to(a, b, this.dataset.rendering),
          k = l.mg,
          m = l.eg;
        l = l.qd;
        k && d(Bo(window, k));
        m &&
          yo(a, m, f).then(function (n) {
            return void Co(n);
          });
        l &&
          ('true' === this.getAttribute('data-enable-click') ||
          this.querySelector('[data-enable-click="true"]')
            ? ((this.qd = l), this.addEventListener('click', this.j))
            : N(b, Do(l)));
      };
      e.prototype.j = function (l) {
        var k =
          l.target instanceof c.HTMLElement
            ? l.target.closest('[data-enable-click]')
            : void 0;
        k instanceof c.HTMLElement &&
          'true' === k.getAttribute('data-enable-click') &&
          xo(a, this, l, this.qd).then(function (m) {
            return void Co(m);
          });
      };
      c.customElements.define('google-product-ad', e);
    }
  };
  Fo = function (a) {
    var b = {};
    a = _.A(a);
    for (var c = a.next(); !c.done; c = a.next())
      (c = c.value), (b[x(c, 1)] = x(c, 2));
    return b;
  };
  Io = function (a, b, c) {
    return new Go(c, a, Ho, function (d) {
      d = d.detail.data;
      try {
        var e = JSON.parse(d);
        if ('rewarded' === e.type && e.message === b) return e;
      } catch (f) {}
      return null;
    });
  };
  Jo = function (a) {
    0.001 > ge() && je({ c: 'sd', s: String(a) }, 'gpt_whirs');
  };
  Oo = function (a, b, c, d) {
    d = d.tg;
    var e = b.kind;
    switch (e) {
      case 0:
        return new (d ? Ko : Lo)(a, b, c);
      case 1:
        return new Mo(a, b, c);
      case 2:
        return new No(a, b, c);
      default:
        Va(e);
    }
  };
  Po = function (a) {
    if (!Ed(a)) return -1;
    a = a.pageYOffset;
    return 0 > a ? -1 : a;
  };
  Uo = function (a, b, c, d) {
    var e = ci(a, document);
    e && Lg(e, window, d, !0);
    Qo(_.xe(kh), '5', (0, C.K)(x(c.V[a.getDomId()], 20)));
    a.dispatchEvent(Ro, 801, { ae: null, isBackfill: !1 });
    if (_.So(b, a) && !li(a, document)) {
      b = c.U;
      c = c.V[a.getDomId()];
      var f;
      (null != (f = Lh(c, 10)) ? f : G(b, 11)) && Mm(a, document, c, b);
    }
    a.dispatchEvent(To, 825, { isEmpty: !0 });
  };
  Vo = function (a, b) {
    var c = _.Ad('DIV');
    c.id = a;
    c.textContent = b;
    _.oi(c, {
      height: '24px',
      'line-height': '24px',
      'text-align': 'center',
      'vertical-align': 'middle',
      color: 'white',
      'background-color': 'black',
      margin: '0',
      'font-family': 'Roboto',
      'font-style': 'normal',
      'font-weight': '500',
      'font-size': '11px',
      'letter-spacing': '0.08em',
    });
    return c;
  };
  Xo = function (a) {
    var b = { threshold: [0, 0.3, 0.5, 0.75, 1] };
    return window.IntersectionObserver
      ? new IntersectionObserver(a, b)
      : new Wo(a, b);
  };
  Yo = function (a) {
    return null != x(a, 1)
      ? null != Le(a, 3) && 0 !== (0, _.jm)()
        ? (0, C.ra)(x(a, 1)) * (0, C.ra)(Le(a, 3))
        : x(a, 1)
      : null;
  };
  Zo = function (a, b) {
    return 'undefined' === typeof IntersectionObserver
      ? new Wo(b, { rootMargin: a + '%' })
      : new IntersectionObserver(b, { rootMargin: a + '%' });
  };
  $o = function (a, b) {
    b.topLevelSellerSignals.resolve(a.sellerSignals);
    var c;
    if (
      (a =
        null == (c = a.componentAuctions)
          ? void 0
          : _.t(c, 'find').call(c, function (e) {
              return 'https://pubads.g.doubleclick.net' === e.seller;
            }))
    ) {
      b.auctionSignals.resolve(a.auctionSignals);
      b.j.resolve(a.sellerSignals);
      b.perBuyerSignals.resolve(a.perBuyerSignals);
      var d;
      b.perBuyerTimeouts.resolve(null != (d = a.perBuyerTimeouts) ? d : {});
    } else
      b.auctionSignals.resolve(void 0),
        b.j.resolve(void 0),
        b.perBuyerSignals.resolve({}),
        b.perBuyerTimeouts.resolve({});
  };
  gp = function (a) {
    var b = a.Ge,
      c = a.Xe;
    a = void 0 === a.Rd ? !1 : a.Rd;
    for (var d = {}, e = _.A(be(b, ap, 7)), f = e.next(); !f.done; f = e.next())
      (f = f.value), (d[ef(f, 1)] = JSON.parse(ef(f, 2)));
    if ((e = Se(b, bp, 6)))
      (d['https://googleads.g.doubleclick.net'] = e.toJSON()),
        (d['https://td.doubleclick.net'] = e.toJSON());
    e = {};
    f = _.A(be(b, cp, 11));
    for (var g = f.next(); !g.done; g = f.next())
      (g = g.value), (e[ef(g, 1)] = ee(g, 2));
    g = {};
    dp(b, 18) &&
      ((g['https://googleads.g.doubleclick.net'] = dp(b, 18)),
      (g['https://td.doubleclick.net'] = dp(b, 18)));
    var h;
    f = {
      seller: a
        ? ef(b, 1).split('/td/')[0]
        : 'https://pubads.g.doubleclick.net',
      decisionLogicUrl: ef(b, 1),
      trustedScoringSignalsUrl: ef(b, 2),
      interestGroupBuyers: tl(b, 3),
      sellerExperimentGroupId: dp(b, 17),
      auctionSignals: JSON.parse(ef(b, 4) || '{}'),
      sellerSignals: (null == (h = Se(b, ep, 5)) ? void 0 : h.toJSON()) || [],
      sellerTimeout: ee(b, 15) || 50,
      perBuyerExperimentGroupIds: g,
      perBuyerSignals: d,
      perBuyerTimeouts: e,
    };
    h = new ep();
    '0' !== yc(x(go(go(b, ep, 5), fp, 5), 2), '0') &&
      ((d = new fp()),
      (e = yc(x(go(go(b, ep, 5), fp, 5), 2), '0')),
      Wb(d),
      null != e && 0 !== +e ? nc(d, 2, e) : nc(d, 2, void 0, !1),
      _.ch(h, 5, d));
    return {
      seller: a
        ? ef(b, 1).split('/td/')[0]
        : 'https://pubads.g.doubleclick.net',
      decisionLogicUrl: ef(b, 1),
      sellerExperimentGroupId: dp(b, 17),
      sellerSignals: h.toJSON(),
      sellerTimeout: ee(b, 15) || 50,
      interestGroupBuyers: [],
      auctionSignals: {},
      perBuyerExperimentGroupIds: {},
      perBuyerSignals: {},
      perBuyerTimeouts: {},
      componentAuctions: [f].concat(_.Ld(null != c ? c : [])),
    };
  };
  np = function (a, b) {
    var c, d, e, f, g, h, l, k, m, n, p, r;
    return _.jb(function (u) {
      if (1 == u.j)
        return _.t(a, 'startsWith').call(a, 'urn:') &&
          hp.deprecatedURNToURL &&
          hp.deprecatedReplaceInURN
          ? kb(u, hp.deprecatedURNToURL(a), 2)
          : u.return();
      c = u.m;
      d = {};
      e = b.gdprApplies || '';
      (null != (f = c.match(ip)) ? f : []).forEach(function (w) {
        d[w] = e;
      });
      g = b.ie || '';
      (null != (h = c.match(jp)) ? h : []).forEach(function (w) {
        d[w] = g;
      });
      l = b.Vd || '';
      (null != (k = c.match(kp)) ? k : []).forEach(function (w) {
        d[w] = l;
      });
      m = b.Oe || '';
      (null != (n = c.match(lp)) ? n : []).forEach(function (w) {
        d[w] = m;
      });
      p = b.Le || '';
      (null != (r = c.match(mp)) ? r : []).forEach(function (w) {
        d[w] = p;
      });
      return kb(u, hp.deprecatedReplaceInURN(a, d), 0);
    });
  };
  pp = function (a, b, c) {
    var d =
        'https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner',
      e = op(c, 18),
      f = op(c, 7);
    if (f || e) d += '&isContextualWinner=1';
    f && (d += '&hasXfpAds=1');
    e = c.getEscapedQemQueryId();
    f = ef(c, 6);
    e && (d += '&winner_qid=' + encodeURIComponent(e));
    f && (d += '&xfpQid=' + encodeURIComponent(f));
    op(c, 4) && (d += '&is_plog=1');
    (e = ef(c, 11)) && (d += '&ecrs=' + e);
    (null == c ? 0 : op(c, 21)) || (d += '&turtlexTest=1');
    d += '&applied_timeout_ms=' + (b + '&duration_ms=' + Math.round(a));
    Co(d);
  };
  qp = function () {
    return new v.Promise(function (a) {
      setTimeout(function () {
        a(null);
      }, 0);
    });
  };
  fq = function (a, b, c, d, e, f, g, h, l, k, m, n, p, r, u, w, D, K) {
    var F = new tf(),
      R = Fh(!0, window),
      T = h.U,
      Q = h.V[d.getDomId()],
      ba = new rp(a, window);
    I(F, ba);
    var ca = l.wf,
      ma = l.Cg,
      Ga = l.nf,
      Na = l.fe,
      Ca = l.Qe,
      ua = l.Bf,
      Oa = l.ug,
      Ia = l.qf,
      rb = l.kf,
      Mc = l.yc,
      wc = l.vg,
      Ze = l.Af,
      $e = l.Jf,
      Zs = l.qg,
      Zf = l.zg,
      ui = l.Ag,
      Cl = l.xf,
      vi = l.ef,
      wi = l.Da,
      Dl = l.He,
      uC = l.Dg;
    l = l.Eb;
    0.01 > Math.random() &&
      ((w = new sp(a, uC, (null != K ? K : w).Wa, Oa, Na)), I(F, w));
    K = new tp();
    K.G(n);
    w = new up(a, window.top, K);
    I(F, w);
    k = new vp(a, console, k, w.A);
    I(F, k);
    k = new wp(a, cm(Q), R.height, rb, ca);
    I(F, k);
    ca = new xp(a, d, ci(d, m), d.getDomId(), ki(d), m, cm(Q), g, e);
    I(F, ca);
    wi = new yp(a, wi, Ca, ua, Oa);
    I(F, wi);
    Oa = new zp(a, T, Q, Ca, Oa);
    I(F, Oa);
    Zf = new Ap(a, Se(T, Bp, 5), Zf);
    I(F, Zf);
    ma = new Cp(a, d.getAdUnitPath(), Q, R.width, e, Mc, ma, k.A, wi.A, ca.A);
    I(F, ma);
    Mc = new Dp(a, Q, Dl);
    I(F, Mc);
    e = new Ep(a, g, n, e, Dl, Mc.A, ma.Da, ma.M, ca.A, p);
    I(F, e);
    if (f || _.H(Fp)) {
      var Cb = new Gp(a, d, h, g, Na, e.o);
      I(F, Cb);
      D = new Hp(a, D, e.o);
      I(F, D);
      Cb = new Ip(a, Cb.l, D.A);
      I(F, Cb);
      Cb = Cb.A;
    }
    D = new Jp(a, d, T, Q, cm(Q), m, g, ca.A, Oa.A, e.l, Ga, Cb);
    I(F, D);
    f = new Kp(a, D.A);
    I(F, f);
    n = new Lp(a, d, R, g, f.A, Zf.l, Cb);
    I(F, n);
    f = new Mp(a, window, ca.A);
    I(F, f);
    ui = new Np(a, n.A, D.A, ui, Zf.l, void 0, Cb);
    I(F, ui);
    R = new Op(a, m, d, Q, R, Ga, ca.A, D.A, e.l, ma.yc, f.A, Na, Cb);
    I(F, R);
    wc = new Pp(a, T, Q, e.Da, Oa.A, wc);
    I(F, wc);
    vi = new Qp(a, window, vi, ba.A, Cb);
    I(F, vi);
    f = new Rp(a, cm(Q), m);
    I(F, f);
    n = new Sp(a, window);
    I(F, n);
    u = new Tp(a, u, cm(Q), rb, Ia, Cb);
    I(F, u);
    $e = new Up(a, $e, Cb);
    I(F, $e);
    ua = new Vp(
      a,
      d,
      g,
      h,
      r,
      window,
      e.Da,
      Oa.A,
      ui.A,
      ca.A,
      D.A,
      e.l,
      Na,
      Ga,
      wc.A,
      ua,
      Ze,
      Zs,
      R.A,
      vi.A,
      f.A,
      u.A,
      Dl,
      n.A,
      Cb
    );
    I(F, ua);
    Ze = new Wp(a, window, d, ua.o, K);
    I(F, Ze);
    rb = new Xp(a, g, cm(Q), d, window, rb, ua.l, ca.A, u.A);
    I(F, rb);
    h = new Yp(a, d, cm(Q), (0, C.K)(h.Jb), Ia, ua.l, ca.A, w.A, u.A, Na);
    I(F, h);
    Q = new Zp(a, d, cm(Q), r, window, ua.l, ca.A);
    I(F, Q);
    m = new $p(a, d, ua.l, m, r);
    I(F, m);
    g = new aq(a, bq(g, d), window.top, ua.l, ba.A);
    I(F, g);
    d = new cq(a, d, Ga, Ca, Zs, ua.l, D.A, ua.C);
    I(F, d);
    Cl = new dq(a, window, Cl, ua.l, D.A, ca.A);
    I(F, Cl);
    I(F, new eq(a, Tj(), T, b, c, l));
    return F;
  };
  iq = function () {
    if (Ma()) {
      var a = Qa();
      var b = 0;
      a = gq(String(a)).split('.');
      for (
        var c = gq('11').split('.'), d = Math.max(a.length, c.length), e = 0;
        0 == b && e < d;
        e++
      ) {
        var f = a[e] || '',
          g = c[e] || '';
        do {
          f = /(\d*)(\D*)(.*)/.exec(f) || ['', '', '', ''];
          g = /(\d*)(\D*)(.*)/.exec(g) || ['', '', '', ''];
          if (0 == f[0].length && 0 == g[0].length) break;
          b =
            hq(
              0 == f[1].length ? 0 : parseInt(f[1], 10),
              0 == g[1].length ? 0 : parseInt(g[1], 10)
            ) ||
            hq(0 == f[2].length, 0 == g[2].length) ||
            hq(f[2], g[2]);
          f = f[3];
          g = g[3];
        } while (0 == b);
      }
      b = 0 <= b;
    } else
      (b = Ja(Fa())),
        Pa(b),
        (b = Ka() ? ((b = b[2]) && b[1]) || '' : ''),
        '' === b
          ? (b = NaN)
          : ((b = b.split('.')), (b = 0 === b.length ? NaN : Number(b[0]))),
        (b = 65 <= b);
    return b;
  };
  jq = function (a, b) {
    return window.IntersectionObserver
      ? new IntersectionObserver(a, { rootMargin: b })
      : new Wo(a, { rootMargin: b });
  };
  kq = function (a) {
    function b(f) {
      var g = f;
      return function () {
        var h = eb.apply(0, arguments);
        if (g) {
          var l = g;
          g = null;
          l.apply(null, _.Ld(h));
        }
      };
    }
    var c = null,
      d = 0,
      e = 0;
    return function () {
      var f, g, h, l;
      return _.jb(function (k) {
        if (1 == k.j)
          return (
            d && clearTimeout(d),
            (d = 0),
            (f = new _.Eg()),
            (g = b(f.resolve)),
            (h = ++e),
            kb(k, 0, 2)
          );
        if (e !== h) return g(!1), k.return(f.promise);
        c ? c(!1) : g(!0);
        l = b(function () {
          c = null;
          d = 0;
          g(!0);
        });
        d = setTimeout(l, 1e3);
        _.Qm(a, function () {
          return void g(!1);
        });
        c = g;
        return k.return(f.promise);
      });
    };
  };
  sq = function () {
    var a = new lq();
    var b = new mq().setCorrelator(He(_.q));
    var c = _.xe(ye).j().join();
    b = _.y(b, 5, c, '');
    b = _.y(b, 2, 1, 0);
    a = _.ch(a, 1, b);
    b = new nq();
    c = _.H(oq);
    b = _.y(b, 7, c, !1);
    c = _.H(pq);
    b = _.y(b, 8, c, !1);
    c = _.H(qq);
    b = _.y(b, 9, c, !1);
    b = _.y(b, 10, !0, !1);
    c = _.H(rq);
    b = _.y(b, 13, c, !1);
    b = _.y(b, 16, !0, !1);
    a = _.ch(a, 2, b);
    window.google_rum_config = a.toJSON();
  };
  uq = function () {
    var a = tq,
      b = Number(a);
    return 1 > b || Math.floor(b) !== b
      ? (je({ v: a }, 'gpt_inv_ver'), '1')
      : a;
  };
  wq = function (a) {
    var b = vq() || fe() ? 1 : ge(),
      c = 0.001 > b;
    c
      ? (((null != a ? a : _.xe(Rk)).l = !0), ze(31067358))
      : 0.002 > b && ze(31067357);
    Ae(23);
    return { mc: c, Lf: 1e3, kg: 1e-4 > b, Kf: 1e4, Ce: c, de: 1e3 };
  };
  zq = function (a) {
    var b = uq();
    var c = /m\d+/.test('') ? Number(''.substring(1)) : void 0;
    var d = He(window),
      e = window.document.URL,
      f = _.Ce(xq);
    return _.t(Object, 'assign').call(Object, {}, a, {
      Ga: b,
      hb: '',
      rb: c,
      pvsid: d,
      vb: new yq(f),
      cf: e,
    });
  };
  Aq = function (a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  };
  Bq =
    'function' == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        };
  Cq = function (a) {
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
  };
  Dq = Cq(this);
  Eq = 'function' === typeof Symbol && 'symbol' === typeof Symbol('x');
  v = {};
  Fq = {};
  _.t = function (a, b) {
    var c = Fq[b];
    if (null == c) return a[b];
    c = a[c];
    return void 0 !== c ? c : a[b];
  };
  Gq = function (a, b, c) {
    if (b)
      a: {
        var d = a.split('.');
        a = 1 === d.length;
        var e = d[0],
          f;
        !a && e in v ? (f = v) : (f = Dq);
        for (e = 0; e < d.length - 1; e++) {
          var g = d[e];
          if (!(g in f)) break a;
          f = f[g];
        }
        d = d[d.length - 1];
        c = Eq && 'es6' === c ? f[d] : null;
        b = b(c);
        null != b &&
          (a
            ? Bq(v, d, { configurable: !0, writable: !0, value: b })
            : b !== c &&
              (void 0 === Fq[d] &&
                ((a = (1e9 * Math.random()) >>> 0),
                (Fq[d] = Eq ? Dq.Symbol(d) : '$jscp$' + a + '$' + d)),
              Bq(f, Fq[d], { configurable: !0, writable: !0, value: b })));
      }
  };
  Gq(
    'Symbol',
    function (a) {
      if (a) return a;
      var b = function (f, g) {
        this.j = f;
        Bq(this, 'description', { configurable: !0, writable: !0, value: g });
      };
      b.prototype.toString = function () {
        return this.j;
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
  Gq(
    'Symbol.iterator',
    function (a) {
      if (a) return a;
      a = (0, v.Symbol)('Symbol.iterator');
      for (
        var b =
            'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(
              ' '
            ),
          c = 0;
        c < b.length;
        c++
      ) {
        var d = Dq[b[c]];
        'function' === typeof d &&
          'function' != typeof d.prototype[a] &&
          Bq(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
              return Hq(Aq(this));
            },
          });
      }
      return a;
    },
    'es6'
  );
  Hq = function (a) {
    a = { next: a };
    a[_.t(v.Symbol, 'iterator')] = function () {
      return this;
    };
    return a;
  };
  P = function (a) {
    return (a.raw = a);
  };
  Iq = function (a, b) {
    a.raw = b;
    return a;
  };
  _.A = function (a) {
    var b =
      'undefined' != typeof v.Symbol &&
      _.t(v.Symbol, 'iterator') &&
      a[_.t(v.Symbol, 'iterator')];
    return b ? b.call(a) : { next: Aq(a) };
  };
  _.Ld = function (a) {
    if (!(a instanceof Array)) {
      a = _.A(a);
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      a = c;
    }
    return a;
  };
  Jq = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  Kq =
    Eq && 'function' == typeof _.t(Object, 'assign')
      ? _.t(Object, 'assign')
      : function (a, b) {
          for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d) for (var e in d) Jq(d, e) && (a[e] = d[e]);
          }
          return a;
        };
  Gq(
    'Object.assign',
    function (a) {
      return a || Kq;
    },
    'es6'
  );
  var Lq =
      'function' == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    Mq = (function () {
      function a() {
        function c() {}
        new c();
        _.t(v.Reflect, 'construct').call(v.Reflect, c, [], function () {});
        return new c() instanceof c;
      }
      if (
        Eq &&
        'undefined' != typeof v.Reflect &&
        _.t(v.Reflect, 'construct')
      ) {
        if (a()) return _.t(v.Reflect, 'construct');
        var b = _.t(v.Reflect, 'construct');
        return function (c, d, e) {
          c = b(c, d);
          e && _.t(v.Reflect, 'setPrototypeOf').call(v.Reflect, c, e.prototype);
          return c;
        };
      }
      return function (c, d, e) {
        void 0 === e && (e = c);
        e = Lq(e.prototype || Object.prototype);
        return Function.prototype.apply.call(c, e, d) || e;
      };
    })(),
    Nq;
  if (Eq && 'function' == typeof _.t(Object, 'setPrototypeOf'))
    Nq = _.t(Object, 'setPrototypeOf');
  else {
    var Oq;
    a: {
      var Pq = { a: !0 },
        Qq = {};
      try {
        Qq.__proto__ = Pq;
        Oq = Qq.a;
        break a;
      } catch (a) {}
      Oq = !1;
    }
    Nq = Oq
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
          return a;
        }
      : null;
  }
  Rq = Nq;
  _.O = function (a, b) {
    a.prototype = Lq(b.prototype);
    a.prototype.constructor = a;
    if (Rq) Rq(a, b);
    else
      for (var c in b)
        if ('prototype' != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.ai = b.prototype;
  };
  Sq = function () {
    this.l = !1;
    this.J = null;
    this.m = void 0;
    this.j = 1;
    this.L = this.D = 0;
    this.B = null;
  };
  Tq = function (a) {
    if (a.l) throw new TypeError('Generator is already running');
    a.l = !0;
  };
  Sq.prototype.H = function (a) {
    this.m = a;
  };
  var Uq = function (a, b) {
    a.B = { ge: b, Df: !0 };
    a.j = a.D || a.L;
  };
  Sq.prototype.return = function (a) {
    this.B = { return: a };
    this.j = this.L;
  };
  kb = function (a, b, c) {
    a.j = c;
    return { value: b };
  };
  mb = function (a, b) {
    a.j = b;
    a.D = 0;
  };
  nb = function (a) {
    a.D = 0;
    var b = a.B.ge;
    a.B = null;
    return b;
  };
  Vq = function (a) {
    this.j = new Sq();
    this.m = a;
  };
  Yq = function (a, b) {
    Tq(a.j);
    var c = a.j.J;
    if (c)
      return Wq(
        a,
        'return' in c
          ? c['return']
          : function (d) {
              return { value: d, done: !0 };
            },
        b,
        a.j.return
      );
    a.j.return(b);
    return Xq(a);
  };
  Wq = function (a, b, c, d) {
    try {
      var e = b.call(a.j.J, c);
      if (!(e instanceof Object))
        throw new TypeError('Iterator result ' + e + ' is not an object');
      if (!e.done) return (a.j.l = !1), e;
      var f = e.value;
    } catch (g) {
      return (a.j.J = null), Uq(a.j, g), Xq(a);
    }
    a.j.J = null;
    d.call(a.j, f);
    return Xq(a);
  };
  Xq = function (a) {
    for (; a.j.j; )
      try {
        var b = a.m(a.j);
        if (b) return (a.j.l = !1), { value: b.value, done: !1 };
      } catch (c) {
        (a.j.m = void 0), Uq(a.j, c);
      }
    a.j.l = !1;
    if (a.j.B) {
      b = a.j.B;
      a.j.B = null;
      if (b.Df) throw b.ge;
      return { value: b.return, done: !0 };
    }
    return { value: void 0, done: !0 };
  };
  Zq = function (a) {
    this.next = function (b) {
      Tq(a.j);
      a.j.J ? (b = Wq(a, a.j.J.next, b, a.j.H)) : (a.j.H(b), (b = Xq(a)));
      return b;
    };
    this.throw = function (b) {
      Tq(a.j);
      a.j.J ? (b = Wq(a, a.j.J['throw'], b, a.j.H)) : (Uq(a.j, b), (b = Xq(a)));
      return b;
    };
    this.return = function (b) {
      return Yq(a, b);
    };
    this[_.t(v.Symbol, 'iterator')] = function () {
      return this;
    };
  };
  $q = function (a) {
    function b(d) {
      return a.next(d);
    }
    function c(d) {
      return a.throw(d);
    }
    return new v.Promise(function (d, e) {
      function f(g) {
        g.done ? d(g.value) : v.Promise.resolve(g.value).then(b, c).then(f, e);
      }
      f(a.next());
    });
  };
  _.jb = function (a) {
    return $q(new Zq(new Vq(a)));
  };
  eb = function () {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
      b[c - a] = arguments[c];
    return b;
  };
  Gq(
    'Reflect',
    function (a) {
      return a ? a : {};
    },
    'es6'
  );
  Gq(
    'Reflect.construct',
    function () {
      return Mq;
    },
    'es6'
  );
  Gq(
    'Reflect.setPrototypeOf',
    function (a) {
      return a
        ? a
        : Rq
        ? function (b, c) {
            try {
              return Rq(b, c), !0;
            } catch (d) {
              return !1;
            }
          }
        : null;
    },
    'es6'
  );
  Gq(
    'Promise',
    function (a) {
      function b() {
        this.j = null;
      }
      function c(g) {
        return g instanceof e
          ? g
          : new e(function (h) {
              h(g);
            });
      }
      if (a) return a;
      b.prototype.m = function (g) {
        if (null == this.j) {
          this.j = [];
          var h = this;
          this.D(function () {
            h.B();
          });
        }
        this.j.push(g);
      };
      var d = Dq.setTimeout;
      b.prototype.D = function (g) {
        d(g, 0);
      };
      b.prototype.B = function () {
        for (; this.j && this.j.length; ) {
          var g = this.j;
          this.j = [];
          for (var h = 0; h < g.length; ++h) {
            var l = g[h];
            g[h] = null;
            try {
              l();
            } catch (k) {
              this.J(k);
            }
          }
        }
        this.j = null;
      };
      b.prototype.J = function (g) {
        this.D(function () {
          throw g;
        });
      };
      var e = function (g) {
        this.m = 0;
        this.D = void 0;
        this.j = [];
        this.H = !1;
        var h = this.J();
        try {
          g(h.resolve, h.reject);
        } catch (l) {
          h.reject(l);
        }
      };
      e.prototype.J = function () {
        function g(k) {
          return function (m) {
            l || ((l = !0), k.call(h, m));
          };
        }
        var h = this,
          l = !1;
        return { resolve: g(this.T), reject: g(this.B) };
      };
      e.prototype.T = function (g) {
        if (g === this)
          this.B(new TypeError('A Promise cannot resolve to itself'));
        else if (g instanceof e) this.M(g);
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
          h ? this.ua(g) : this.l(g);
        }
      };
      e.prototype.ua = function (g) {
        var h = void 0;
        try {
          h = g.then;
        } catch (l) {
          this.B(l);
          return;
        }
        'function' == typeof h ? this.O(h, g) : this.l(g);
      };
      e.prototype.B = function (g) {
        this.L(2, g);
      };
      e.prototype.l = function (g) {
        this.L(1, g);
      };
      e.prototype.L = function (g, h) {
        if (0 != this.m)
          throw Error(
            'Cannot settle(' +
              g +
              ', ' +
              h +
              '): Promise already settled in state' +
              this.m
          );
        this.m = g;
        this.D = h;
        2 === this.m && this.F();
        this.o();
      };
      e.prototype.F = function () {
        var g = this;
        d(function () {
          if (g.C()) {
            var h = Dq.console;
            'undefined' !== typeof h && h.error(g.D);
          }
        }, 1);
      };
      e.prototype.C = function () {
        if (this.H) return !1;
        var g = Dq.CustomEvent,
          h = Dq.Event,
          l = Dq.dispatchEvent;
        if ('undefined' === typeof l) return !0;
        'function' === typeof g
          ? (g = new g('unhandledrejection', { cancelable: !0 }))
          : 'function' === typeof h
          ? (g = new h('unhandledrejection', { cancelable: !0 }))
          : ((g = Dq.document.createEvent('CustomEvent')),
            g.initCustomEvent('unhandledrejection', !1, !0, g));
        g.promise = this;
        g.reason = this.D;
        return l(g);
      };
      e.prototype.o = function () {
        if (null != this.j) {
          for (var g = 0; g < this.j.length; ++g) f.m(this.j[g]);
          this.j = null;
        }
      };
      var f = new b();
      e.prototype.M = function (g) {
        var h = this.J();
        g.Bc(h.resolve, h.reject);
      };
      e.prototype.O = function (g, h) {
        var l = this.J();
        try {
          g.call(h, l.resolve, l.reject);
        } catch (k) {
          l.reject(k);
        }
      };
      e.prototype.then = function (g, h) {
        function l(p, r) {
          return 'function' == typeof p
            ? function (u) {
                try {
                  k(p(u));
                } catch (w) {
                  m(w);
                }
              }
            : r;
        }
        var k,
          m,
          n = new e(function (p, r) {
            k = p;
            m = r;
          });
        this.Bc(l(g, k), l(h, m));
        return n;
      };
      e.prototype.catch = function (g) {
        return this.then(void 0, g);
      };
      e.prototype.Bc = function (g, h) {
        function l() {
          switch (k.m) {
            case 1:
              g(k.D);
              break;
            case 2:
              h(k.D);
              break;
            default:
              throw Error('Unexpected state: ' + k.m);
          }
        }
        var k = this;
        null == this.j ? f.m(l) : this.j.push(l);
        this.H = !0;
      };
      e.resolve = c;
      e.reject = function (g) {
        return new e(function (h, l) {
          l(g);
        });
      };
      e.race = function (g) {
        return new e(function (h, l) {
          for (var k = _.A(g), m = k.next(); !m.done; m = k.next())
            c(m.value).Bc(h, l);
        });
      };
      e.all = function (g) {
        var h = _.A(g),
          l = h.next();
        return l.done
          ? c([])
          : new e(function (k, m) {
              function n(u) {
                return function (w) {
                  p[u] = w;
                  r--;
                  0 == r && k(p);
                };
              }
              var p = [],
                r = 0;
              do
                p.push(void 0),
                  r++,
                  c(l.value).Bc(n(p.length - 1), m),
                  (l = h.next());
              while (!l.done);
            });
      };
      return e;
    },
    'es6'
  );
  Gq(
    'Object.setPrototypeOf',
    function (a) {
      return a || Rq;
    },
    'es6'
  );
  Gq(
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
              l = new a([
                [g, 2],
                [h, 3],
              ]);
            if (2 != l.get(g) || 3 != l.get(h)) return !1;
            l.delete(g);
            l.set(h, 4);
            return !l.has(g) && 4 == l.get(h);
          } catch (k) {
            return !1;
          }
        })()
      )
        return a;
      var d = '$jscomp_hidden_' + Math.random(),
        e = 0,
        f = function (g) {
          this.j = (e += Math.random() + 1).toString();
          if (g) {
            g = _.A(g);
            for (var h; !(h = g.next()).done; )
              (h = h.value), this.set(h[0], h[1]);
          }
        };
      f.prototype.set = function (g, h) {
        if (!c(g)) throw Error('Invalid WeakMap key');
        if (!Jq(g, d)) {
          var l = new b();
          Bq(g, d, { value: l });
        }
        if (!Jq(g, d)) throw Error('WeakMap key fail: ' + g);
        g[d][this.j] = h;
        return this;
      };
      f.prototype.get = function (g) {
        return c(g) && Jq(g, d) ? g[d][this.j] : void 0;
      };
      f.prototype.has = function (g) {
        return c(g) && Jq(g, d) && Jq(g[d], this.j);
      };
      f.prototype.delete = function (g) {
        return c(g) && Jq(g, d) && Jq(g[d], this.j) ? delete g[d][this.j] : !1;
      };
      return f;
    },
    'es6'
  );
  Gq(
    'Map',
    function (a) {
      if (
        (function () {
          if (
            !a ||
            'function' != typeof a ||
            !_.t(a.prototype, 'entries') ||
            'function' != typeof Object.seal
          )
            return !1;
          try {
            var h = Object.seal({ x: 4 }),
              l = new a(_.A([[h, 's']]));
            if (
              's' != l.get(h) ||
              1 != l.size ||
              l.get({ x: 4 }) ||
              l.set({ x: 4 }, 't') != l ||
              2 != l.size
            )
              return !1;
            var k = _.t(l, 'entries').call(l),
              m = k.next();
            if (m.done || m.value[0] != h || 's' != m.value[1]) return !1;
            m = k.next();
            return m.done ||
              4 != m.value[0].x ||
              't' != m.value[1] ||
              !k.next().done
              ? !1
              : !0;
          } catch (n) {
            return !1;
          }
        })()
      )
        return a;
      var b = new v.WeakMap(),
        c = function (h) {
          this.m = {};
          this.j = f();
          this.size = 0;
          if (h) {
            h = _.A(h);
            for (var l; !(l = h.next()).done; )
              (l = l.value), this.set(l[0], l[1]);
          }
        };
      c.prototype.set = function (h, l) {
        h = 0 === h ? 0 : h;
        var k = d(this, h);
        k.list || (k.list = this.m[k.id] = []);
        k.pa
          ? (k.pa.value = l)
          : ((k.pa = {
              next: this.j,
              Xa: this.j.Xa,
              head: this.j,
              key: h,
              value: l,
            }),
            k.list.push(k.pa),
            (this.j.Xa.next = k.pa),
            (this.j.Xa = k.pa),
            this.size++);
        return this;
      };
      c.prototype.delete = function (h) {
        h = d(this, h);
        return h.pa && h.list
          ? (h.list.splice(h.index, 1),
            h.list.length || delete this.m[h.id],
            (h.pa.Xa.next = h.pa.next),
            (h.pa.next.Xa = h.pa.Xa),
            (h.pa.head = null),
            this.size--,
            !0)
          : !1;
      };
      c.prototype.clear = function () {
        this.m = {};
        this.j = this.j.Xa = f();
        this.size = 0;
      };
      c.prototype.has = function (h) {
        return !!d(this, h).pa;
      };
      c.prototype.get = function (h) {
        return (h = d(this, h).pa) && h.value;
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
      c.prototype.forEach = function (h, l) {
        for (var k = _.t(this, 'entries').call(this), m; !(m = k.next()).done; )
          (m = m.value), h.call(l, m[1], m[0], this);
      };
      c.prototype[_.t(v.Symbol, 'iterator')] = _.t(c.prototype, 'entries');
      var d = function (h, l) {
          var k = l && typeof l;
          'object' == k || 'function' == k
            ? b.has(l)
              ? (k = b.get(l))
              : ((k = '' + ++g), b.set(l, k))
            : (k = 'p_' + l);
          var m = h.m[k];
          if (m && Jq(h.m, k))
            for (h = 0; h < m.length; h++) {
              var n = m[h];
              if ((l !== l && n.key !== n.key) || l === n.key)
                return { id: k, list: m, index: h, pa: n };
            }
          return { id: k, list: m, index: -1, pa: void 0 };
        },
        e = function (h, l) {
          var k = h.j;
          return Hq(function () {
            if (k) {
              for (; k.head != h.j; ) k = k.Xa;
              for (; k.next != k.head; )
                return (k = k.next), { done: !1, value: l(k) };
              k = null;
            }
            return { done: !0, value: void 0 };
          });
        },
        f = function () {
          var h = {};
          return (h.Xa = h.next = h.head = h);
        },
        g = 0;
      return c;
    },
    'es6'
  );
  var ar = function (a, b) {
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
    e[_.t(v.Symbol, 'iterator')] = function () {
      return e;
    };
    return e;
  };
  Gq(
    'Array.prototype.entries',
    function (a) {
      return a
        ? a
        : function () {
            return ar(this, function (b, c) {
              return [b, c];
            });
          };
    },
    'es6'
  );
  Gq(
    'Array.prototype.keys',
    function (a) {
      return a
        ? a
        : function () {
            return ar(this, function (b) {
              return b;
            });
          };
    },
    'es6'
  );
  var br = function (a, b, c) {
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
  Gq(
    'String.prototype.endsWith',
    function (a) {
      return a
        ? a
        : function (b, c) {
            var d = br(this, b, 'endsWith');
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c; )
              if (d[--c] != b[--e]) return !1;
            return 0 >= e;
          };
    },
    'es6'
  );
  var cr = function (a, b, c) {
    a instanceof String && (a = String(a));
    for (var d = a.length, e = 0; e < d; e++) {
      var f = a[e];
      if (b.call(c, f, e, a)) return { i: e, Ie: f };
    }
    return { i: -1, Ie: void 0 };
  };
  Gq(
    'Array.prototype.find',
    function (a) {
      return a
        ? a
        : function (b, c) {
            return cr(this, b, c).Ie;
          };
    },
    'es6'
  );
  Gq(
    'Number.isFinite',
    function (a) {
      return a
        ? a
        : function (b) {
            return 'number' !== typeof b
              ? !1
              : !isNaN(b) && Infinity !== b && -Infinity !== b;
          };
    },
    'es6'
  );
  Gq(
    'Number.isInteger',
    function (a) {
      return a
        ? a
        : function (b) {
            return _.t(Number, 'isFinite').call(Number, b)
              ? b === Math.floor(b)
              : !1;
          };
    },
    'es6'
  );
  Gq(
    'Array.from',
    function (a) {
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
                'undefined' != typeof v.Symbol &&
                _.t(v.Symbol, 'iterator') &&
                b[_.t(v.Symbol, 'iterator')];
            if ('function' == typeof f) {
              b = f.call(b);
              for (var g = 0; !(f = b.next()).done; )
                e.push(c.call(d, f.value, g++));
            } else
              for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e;
          };
    },
    'es6'
  );
  Gq(
    'Array.prototype.values',
    function (a) {
      return a
        ? a
        : function () {
            return ar(this, function (b, c) {
              return c;
            });
          };
    },
    'es8'
  );
  Gq(
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
  var dr = function (a) {
    return a ? a : _.t(Array.prototype, 'fill');
  };
  Gq('Int8Array.prototype.fill', dr, 'es6');
  Gq('Uint8Array.prototype.fill', dr, 'es6');
  Gq('Uint8ClampedArray.prototype.fill', dr, 'es6');
  Gq('Int16Array.prototype.fill', dr, 'es6');
  Gq('Uint16Array.prototype.fill', dr, 'es6');
  Gq('Int32Array.prototype.fill', dr, 'es6');
  Gq('Uint32Array.prototype.fill', dr, 'es6');
  Gq('Float32Array.prototype.fill', dr, 'es6');
  Gq('Float64Array.prototype.fill', dr, 'es6');
  Gq(
    'Set',
    function (a) {
      if (
        (function () {
          if (
            !a ||
            'function' != typeof a ||
            !_.t(a.prototype, 'entries') ||
            'function' != typeof Object.seal
          )
            return !1;
          try {
            var c = Object.seal({ x: 4 }),
              d = new a(_.A([c]));
            if (
              !d.has(c) ||
              1 != d.size ||
              d.add(c) != d ||
              1 != d.size ||
              d.add({ x: 4 }) != d ||
              2 != d.size
            )
              return !1;
            var e = _.t(d, 'entries').call(d),
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
        this.j = new v.Map();
        if (c) {
          c = _.A(c);
          for (var d; !(d = c.next()).done; ) this.add(d.value);
        }
        this.size = this.j.size;
      };
      b.prototype.add = function (c) {
        c = 0 === c ? 0 : c;
        this.j.set(c, c);
        this.size = this.j.size;
        return this;
      };
      b.prototype.delete = function (c) {
        c = this.j.delete(c);
        this.size = this.j.size;
        return c;
      };
      b.prototype.clear = function () {
        this.j.clear();
        this.size = 0;
      };
      b.prototype.has = function (c) {
        return this.j.has(c);
      };
      b.prototype.entries = function () {
        return _.t(this.j, 'entries').call(this.j);
      };
      b.prototype.values = function () {
        return _.t(this.j, 'values').call(this.j);
      };
      b.prototype.keys = _.t(b.prototype, 'values');
      b.prototype[_.t(v.Symbol, 'iterator')] = _.t(b.prototype, 'values');
      b.prototype.forEach = function (c, d) {
        var e = this;
        this.j.forEach(function (f) {
          return c.call(d, f, f, e);
        });
      };
      return b;
    },
    'es6'
  );
  Gq(
    'Object.entries',
    function (a) {
      return a
        ? a
        : function (b) {
            var c = [],
              d;
            for (d in b) Jq(b, d) && c.push([d, b[d]]);
            return c;
          };
    },
    'es8'
  );
  Gq(
    'String.prototype.startsWith',
    function (a) {
      return a
        ? a
        : function (b, c) {
            var d = br(this, b, 'startsWith'),
              e = d.length,
              f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
            return g >= f;
          };
    },
    'es6'
  );
  Gq(
    'globalThis',
    function (a) {
      return a || Dq;
    },
    'es_2020'
  );
  Gq(
    'Array.prototype.flatMap',
    function (a) {
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
    },
    'es9'
  );
  Gq(
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
  Gq(
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
              if (f === b || _.t(Object, 'is').call(Object, f, b)) return !0;
            }
            return !1;
          };
    },
    'es7'
  );
  Gq(
    'String.prototype.includes',
    function (a) {
      return a
        ? a
        : function (b, c) {
            return -1 !== br(this, b, 'includes').indexOf(b, c || 0);
          };
    },
    'es6'
  );
  Gq(
    'AggregateError',
    function (a) {
      if (a) return a;
      a = function (b, c) {
        c = Error(c);
        'stack' in c && (this.stack = c.stack);
        this.errors = b;
        this.message = c.message;
      };
      _.O(a, Error);
      a.prototype.name = 'AggregateError';
      return a;
    },
    'es_2021'
  );
  Gq(
    'Promise.any',
    function (a) {
      return a
        ? a
        : function (b) {
            b = b instanceof Array ? b : _.t(Array, 'from').call(Array, b);
            return v.Promise.all(
              b.map(function (c) {
                return v.Promise.resolve(c).then(
                  function (d) {
                    throw d;
                  },
                  function (d) {
                    return d;
                  }
                );
              })
            ).then(
              function (c) {
                throw new v.AggregateError(c, 'All promises were rejected');
              },
              function (c) {
                return c;
              }
            );
          };
    },
    'es_2021'
  );
  Gq(
    'Object.values',
    function (a) {
      return a
        ? a
        : function (b) {
            var c = [],
              d;
            for (d in b) Jq(b, d) && c.push(b[d]);
            return c;
          };
    },
    'es8'
  );
  Gq(
    'Object.fromEntries',
    function (a) {
      return a
        ? a
        : function (b) {
            var c = {};
            if (!(_.t(v.Symbol, 'iterator') in b))
              throw new TypeError('' + b + ' is not iterable');
            b = b[_.t(v.Symbol, 'iterator')].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
              d = d.value;
              if (Object(d) !== d)
                throw new TypeError(
                  'iterable for fromEntries should yield objects'
                );
              c[d[0]] = d[1];
            }
            return c;
          };
    },
    'es_2019'
  );
  Gq(
    'Array.prototype.findIndex',
    function (a) {
      return a
        ? a
        : function (b, c) {
            return cr(this, b, c).i;
          };
    },
    'es6'
  );
  Gq(
    'Array.prototype.flat',
    function (a) {
      return a
        ? a
        : function (b) {
            b = void 0 === b ? 1 : b;
            var c = [];
            Array.prototype.forEach.call(this, function (d) {
              Array.isArray(d) && 0 < b
                ? ((d = _.t(Array.prototype, 'flat').call(d, b - 1)),
                  c.push.apply(c, d))
                : c.push(d);
            });
            return c;
          };
    },
    'es9'
  );
  Gq(
    'Promise.prototype.finally',
    function (a) {
      return a
        ? a
        : function (b) {
            return this.then(
              function (c) {
                return v.Promise.resolve(b()).then(function () {
                  return c;
                });
              },
              function (c) {
                return v.Promise.resolve(b()).then(function () {
                  throw c;
                });
              }
            );
          };
    },
    'es9'
  );
  Gq(
    'String.raw',
    function (a) {
      return a
        ? a
        : function (b, c) {
            if (null == b)
              throw new TypeError('Cannot convert undefined or null to object');
            for (var d = b.raw, e = d.length, f = '', g = 0; g < e; ++g)
              (f += d[g]),
                g + 1 < e &&
                  g + 1 < arguments.length &&
                  (f += String(arguments[g + 1]));
            return f;
          };
    },
    'es6'
  );
  _.q = this || self;
  ta = function (a) {
    var b = typeof a;
    b = 'object' != b ? b : a ? (Array.isArray(a) ? 'array' : b) : 'null';
    return 'array' == b || ('object' == b && 'number' == typeof a.length);
  };
  _.ka = function (a) {
    var b = typeof a;
    return ('object' == b && null != a) || 'function' == b;
  };
  la = 'closure_uid_' + ((1e9 * Math.random()) >>> 0);
  na = 0;
  er = function (a, b, c) {
    return a.call.apply(a.bind, arguments);
  };
  fr = function (a, b, c) {
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
  };
  _.gr = function (a, b, c) {
    Function.prototype.bind &&
    -1 != Function.prototype.bind.toString().indexOf('native code')
      ? (_.gr = er)
      : (_.gr = fr);
    return _.gr.apply(null, arguments);
  };
  _.hr = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  };
  re = function () {
    return Date.now();
  };
  var ir;
  var ig = function (a, b) {
    this.j = (a === jr && b) || '';
    this.m = kr;
  };
  ig.prototype.Ta = !0;
  ig.prototype.Ka = function () {
    return this.j;
  };
  var jg = function (a) {
      return a instanceof ig && a.constructor === ig && a.m === kr
        ? a.j
        : 'type_error:Const';
    },
    lr = function (a) {
      return new ig(jr, a);
    },
    kr = {},
    jr = {};
  var qb = lr('https://tpc.googlesyndication.com/sodar/%{basename}.js');
  var mr, nr, di, pr;
  mr = function () {
    return !0;
  };
  nr = function (a) {
    return function () {
      return !a.apply(this, arguments);
    };
  };
  di = function (a) {
    var b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  };
  _.or = function (a) {
    var b = a;
    return function () {
      if (b) {
        var c = b;
        b = null;
        c();
      }
    };
  };
  pr = function (a, b, c) {
    var d = 0,
      e = !1,
      f = [],
      g = function () {
        d = 0;
        e && ((e = !1), h());
      },
      h = function () {
        d = _.q.setTimeout(g, b);
        var l = f;
        f = [];
        a.apply(c, l);
      };
    return function (l) {
      f = arguments;
      d ? (e = !0) : h();
    };
  };
  var qr, da;
  qr = { passive: !0 };
  da = di(function () {
    var a = !1;
    try {
      var b = Object.defineProperty({}, 'passive', {
        get: function () {
          a = !0;
        },
      });
      _.q.addEventListener('test', null, b);
    } catch (c) {}
    return a;
  });
  _.hb = function (a, b, c, d) {
    return a.addEventListener ? (a.addEventListener(b, c, ea(d)), !0) : !1;
  };
  _.Pd = function (a, b, c, d) {
    return a.removeEventListener
      ? (a.removeEventListener(b, c, ea(d)), !0)
      : !1;
  };
  var sr;
  _.fa = function (a, b) {
    return Array.prototype.indexOf.call(a, b, void 0);
  };
  _.rr = function (a, b) {
    Array.prototype.forEach.call(a, b, void 0);
  };
  _.Bg = function (a, b) {
    return Array.prototype.filter.call(a, b, void 0);
  };
  _.Lc = function (a, b) {
    return Array.prototype.map.call(a, b, void 0);
  };
  sr = function (a, b) {
    return Array.prototype.reduce.call(a, b, 0);
  };
  _.Tg = function (a, b) {
    return Array.prototype.some.call(a, b, void 0);
  };
  var Da =
    'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
      ' '
    );
  var qg = {
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
  var Mn = {},
    Xa = function (a, b) {
      this.j = b === Mn ? a : '';
      this.Ta = !0;
    };
  Xa.prototype.toString = function () {
    return this.j.toString();
  };
  Xa.prototype.Ka = function () {
    return this.j.toString();
  };
  var lg = function (a, b) {
    this.j = b === tr ? a : '';
  };
  lg.prototype.toString = function () {
    return this.j + '';
  };
  lg.prototype.Ta = !0;
  lg.prototype.Ka = function () {
    return this.j.toString();
  };
  var Za = function (a) {
      return a instanceof lg && a.constructor === lg
        ? a.j
        : 'type_error:TrustedResourceUrl';
    },
    pb = function (a, b) {
      var c = jg(a);
      if (!ur.test(c)) throw Error('Invalid TrustedResourceUrl format: ' + c);
      a = c.replace(vr, function (d, e) {
        if (!Object.prototype.hasOwnProperty.call(b, e))
          throw Error(
            'Found marker, "' +
              e +
              '", in format string, "' +
              c +
              '", but no valid label mapping found in args: ' +
              JSON.stringify(b)
          );
        d = b[e];
        return d instanceof ig ? jg(d) : encodeURIComponent(String(d));
      });
      return Id(a);
    },
    vr = /%{(\w+)}/g,
    ur = RegExp(
      '^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)',
      'i'
    ),
    wr = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
    tr = {},
    Id = function (a) {
      return new lg(a, tr);
    },
    xr = function (a, b, c) {
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
  var yr = function (a, b) {
      var c = a.length - b.length;
      return 0 <= c && a.indexOf(b, c) == c;
    },
    jk = function (a) {
      return /^[\s\xa0]*$/.test(a);
    },
    gq = function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    },
    pg = function (a) {
      if (!zr.test(a)) return a;
      -1 != a.indexOf('&') && (a = a.replace(Ar, '&amp;'));
      -1 != a.indexOf('<') && (a = a.replace(Br, '&lt;'));
      -1 != a.indexOf('>') && (a = a.replace(Cr, '&gt;'));
      -1 != a.indexOf('"') && (a = a.replace(Dr, '&quot;'));
      -1 != a.indexOf("'") && (a = a.replace(Er, '&#39;'));
      -1 != a.indexOf('\x00') && (a = a.replace(Fr, '&#0;'));
      return a;
    },
    Ar = /&/g,
    Br = /</g,
    Cr = />/g,
    Dr = /"/g,
    Er = /'/g,
    Fr = /\x00/g,
    zr = /[\x00&<>"']/,
    hq = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  var Ra = function (a, b) {
      this.j = b === Gr ? a : '';
    },
    Ir,
    Gr;
  Ra.prototype.toString = function () {
    return this.j.toString();
  };
  Ra.prototype.Ta = !0;
  Ra.prototype.Ka = function () {
    return this.j.toString();
  };
  var Sa = function (a) {
      return a instanceof Ra && a.constructor === Ra
        ? a.j
        : 'type_error:SafeUrl';
    },
    ng = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    mg = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    Hr;
  try {
    new URL('s://g'), (Hr = !0);
  } catch (a) {
    Hr = !1;
  }
  Ir = Hr;
  Gr = {};
  _.fb = function (a) {
    return new Ra(a, Gr);
  };
  _.og = _.fb('about:invalid#zClosurez');
  var tg = {},
    sg = function (a, b) {
      this.j = b === tg ? a : '';
      this.Ta = !0;
    };
  sg.prototype.Ka = function () {
    return this.j.toString();
  };
  sg.prototype.toString = function () {
    return this.j.toString();
  };
  var ab = function (a) {
      return a instanceof sg && a.constructor === sg
        ? a.j
        : 'type_error:SafeHtml';
    },
    Jr = function (a) {
      return a instanceof sg
        ? a
        : new sg(pg('object' == typeof a && a.Ta ? a.Ka() : String(a)), tg);
    },
    Kr = function (a) {
      var b = Jr(eg),
        c = [],
        d = function (e) {
          Array.isArray(e)
            ? e.forEach(d)
            : ((e = Jr(e)), c.push(ab(e).toString()));
        };
      a.forEach(d);
      return new sg(c.join(ab(b).toString()), tg);
    },
    rg = function (a) {
      return Kr(Array.prototype.slice.call(arguments));
    },
    gg = /^[a-zA-Z0-9-]+$/,
    kg = {
      action: !0,
      cite: !0,
      data: !0,
      formaction: !0,
      href: !0,
      manifest: !0,
      poster: !0,
      src: !0,
    },
    hg = {
      APPLET: !0,
      BASE: !0,
      EMBED: !0,
      IFRAME: !0,
      LINK: !0,
      MATH: !0,
      META: !0,
      OBJECT: !0,
      SCRIPT: !0,
      STYLE: !0,
      SVG: !0,
      TEMPLATE: !0,
    },
    eg = new sg((_.q.trustedTypes && _.q.trustedTypes.emptyHTML) || '', tg);
  var Lr;
  try {
    new URL('s://g'), (Lr = !0);
  } catch (a) {
    Lr = !1;
  }
  var Ta = Lr;
  var Mr = {
      bh: 0,
      Xg: 1,
      Yg: 2,
      0: 'HTML_FORMATTED_CONTENT',
      1: 'EMBEDDED_INTERNAL_CONTENT',
      2: 'EMBEDDED_TRUSTED_EXTERNAL_CONTENT',
    },
    Nr = function (a, b) {
      b = Error.call(this, a + ' cannot be used with intent ' + Mr[b]);
      this.message = b.message;
      'stack' in b && (this.stack = b.stack);
      this.type = a;
      this.name = 'TypeCannotBeUsedWithIntentError';
    };
  _.O(Nr, Error);
  _.cb = function (a) {
    this.Gf = a;
  };
  _.Or = [
    db('data'),
    db('http'),
    db('https'),
    db('mailto'),
    db('ftp'),
    new _.cb(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  var lb = function (a) {
    return new v.Promise(function (b, c) {
      var d = new XMLHttpRequest();
      d.onreadystatechange = function () {
        d.readyState === d.DONE &&
          (200 <= d.status && 300 > d.status
            ? b(JSON.parse(d.responseText))
            : c());
      };
      d.open('GET', a, !0);
      d.send();
    });
  };
  var ub,
    tb = 'undefined' !== typeof TextEncoder;
  var Pr = function (a) {
    Pr[' '](a);
    return a;
  };
  Pr[' '] = function () {};
  var Qr = function (a, b) {
    try {
      return Pr(a[b]), !0;
    } catch (c) {}
    return !1;
  };
  var Rr, Tr, Ur, Vr, Wr, Xr;
  Rr = Ha('Opera');
  _.Sr = Ha('Trident') || Ha('MSIE');
  Tr = Ha('Edge');
  Ur =
    Ha('Gecko') &&
    !(-1 != Fa().toLowerCase().indexOf('webkit') && !Ha('Edge')) &&
    !(Ha('Trident') || Ha('MSIE')) &&
    !Ha('Edge');
  Vr = -1 != Fa().toLowerCase().indexOf('webkit') && !Ha('Edge');
  Wr = function () {
    var a = _.q.document;
    return a ? a.documentMode : void 0;
  };
  a: {
    var Yr = '',
      Zr = (function () {
        var a = Fa();
        if (Ur) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Tr) return /Edge\/([\d\.]+)/.exec(a);
        if (_.Sr) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Vr) return /WebKit\/(\S+)/.exec(a);
        if (Rr) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    Zr && (Yr = Zr ? Zr[1] : '');
    if (_.Sr) {
      var $r = Wr();
      if (null != $r && $r > parseFloat(Yr)) {
        Xr = String($r);
        break a;
      }
    }
    Xr = Yr;
  }
  var as = Xr,
    bs;
  if (_.q.document && _.Sr) {
    var cs = Wr();
    bs = cs ? cs : parseInt(as, 10) || void 0;
  } else bs = void 0;
  var ds = bs;
  !Ha('Android') || La();
  La();
  Ma();
  var es = {},
    fs = null,
    gs = Ur || Vr || 'function' == typeof _.q.btoa,
    xb = function (a, b) {
      void 0 === b && (b = 0);
      hs();
      b = es[b];
      for (
        var c = Array(Math.floor(a.length / 3)), d = b[64] || '', e = 0, f = 0;
        e < a.length - 2;
        e += 3
      ) {
        var g = a[e],
          h = a[e + 1],
          l = a[e + 2],
          k = b[g >> 2];
        g = b[((g & 3) << 4) | (h >> 4)];
        h = b[((h & 15) << 2) | (l >> 6)];
        l = b[l & 63];
        c[f++] = k + g + h + l;
      }
      k = 0;
      l = d;
      switch (a.length - e) {
        case 2:
          (k = a[e + 1]), (l = b[(k & 15) << 2] || d);
        case 1:
          (a = a[e]), (c[f] = b[a >> 2] + b[((a & 3) << 4) | (k >> 4)] + l + d);
      }
      return c.join('');
    },
    is = function (a, b) {
      if (gs && !b) a = _.q.btoa(a);
      else {
        for (var c = [], d = 0, e = 0; e < a.length; e++) {
          var f = a.charCodeAt(e);
          255 < f && ((c[d++] = f & 255), (f >>= 8));
          c[d++] = f;
        }
        a = xb(c, b);
      }
      return a;
    },
    qo = function (a) {
      var b = '';
      js(a, function (c) {
        b += String.fromCharCode(c);
      });
      return b;
    },
    ks = function (a) {
      var b = a.length,
        c = (3 * b) / 4;
      c % 3
        ? (c = Math.floor(c))
        : -1 != '=.'.indexOf(a[b - 1]) &&
          (c = -1 != '=.'.indexOf(a[b - 2]) ? c - 2 : c - 1);
      var d = new Uint8Array(c),
        e = 0;
      js(a, function (f) {
        d[e++] = f;
      });
      return e !== c ? d.subarray(0, e) : d;
    },
    js = function (a, b) {
      function c(l) {
        for (; d < a.length; ) {
          var k = a.charAt(d++),
            m = fs[k];
          if (null != m) return m;
          if (!jk(k)) throw Error('Unknown base64 encoding at char: ' + k);
        }
        return l;
      }
      hs();
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
    hs = function () {
      if (!fs) {
        fs = {};
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
          es[c] = d;
          for (var e = 0; e < d.length; e++) {
            var f = d[e];
            void 0 === fs[f] && (fs[f] = e);
          }
        }
      }
    };
  var Ab = 'undefined' !== typeof Uint8Array,
    wb = !_.Sr && 'function' === typeof _.q.btoa,
    ls = RegExp('[-_.]', 'g'),
    hj,
    Db = {};
  var ms,
    Sb = function (a, b) {
      Eb(b);
      this.rc = a;
      if (null != a && 0 === a.length)
        throw Error('ByteString should be constructed with non-empty values');
    },
    Tb = function () {
      return ms || (ms = new Sb(null, Db));
    },
    Bc = function (a) {
      var b = a.rc;
      return null == b ? '' : 'string' === typeof b ? b : (a.rc = yb(b));
    };
  Sb.prototype.isEmpty = function () {
    return null == this.rc;
  };
  var gj = function (a) {
    Eb(Db);
    var b = a.rc;
    if (null != b && !Bb(b))
      if ('string' === typeof b)
        if (wb) {
          ls.test(b) && (b = b.replace(ls, zb));
          b = atob(b);
          for (var c = new Uint8Array(b.length), d = 0; d < b.length; d++)
            c[d] = b.charCodeAt(d);
          b = c;
        } else b = ks(b);
      else b = null;
    return null == b ? b : (a.rc = b);
  };
  var Fb =
    'function' === typeof v.Symbol && 'symbol' === typeof (0, v.Symbol)()
      ? (0, v.Symbol)()
      : void 0;
  var bc = {},
    ns,
    mc,
    os = [];
  Ib(os, 23);
  mc = Object.freeze(os);
  var ps = function (a) {
    this.ke = 0;
    this.Wd = a;
  };
  ps.prototype.next = function () {
    return this.ke < this.Wd.length
      ? { done: !1, value: this.Wd[this.ke++] }
      : { done: !0, value: void 0 };
  };
  ps.prototype[_.t(v.Symbol, 'iterator')] = function () {
    return this;
  };
  var fc = (0, v.Symbol)();
  var tc = function (a, b, c, d) {
      d = void 0 === d ? kc : d;
      c = Hb(a);
      c |= 32;
      Ib(a, c);
      this.m = c;
      this.D = (this.J = b) ? ic : jc;
      this.l = d;
      this.j = b = new v.Map();
      for (d = 0; d < a.length; d++) (c = a[d]), b.set(c[0], c[1]);
      this.size = b.size;
    },
    qs = function (a) {
      if (a.m & 2) throw Error('Cannot mutate an immutable Map');
    },
    Cc = function (a, b) {
      b = void 0 === b ? lc : b;
      for (var c = rs(a), d = 0; d < c.length; d++) {
        var e = c[d],
          f = a.j.get(c[d]);
        c[d] = [b(e), b(f)];
      }
      return c;
    },
    uc = function (a, b) {
      b = void 0 === b ? lc : b;
      var c = [];
      a = _.t(a.j, 'entries').call(a.j);
      for (var d; !(d = a.next()).done; )
        (d = d.value), (d[0] = b(d[0])), (d[1] = b(d[1])), c.push(d);
      return c;
    };
  aa = tc.prototype;
  aa.clear = function () {
    qs(this);
    this.j.clear();
    this.size = 0;
  };
  aa.delete = function (a) {
    qs(this);
    return this.j.delete(a) ? ((this.size = this.j.size), !0) : !1;
  };
  aa.entries = function () {
    for (var a = rs(this), b = 0; b < a.length; b++) {
      var c = a[b];
      a[b] = [c, this.get(c)];
    }
    return new ps(a);
  };
  aa.keys = function () {
    var a = rs(this);
    return new ps(a);
  };
  aa.values = function () {
    for (var a = rs(this), b = 0; b < a.length; b++) a[b] = this.get(a[b]);
    return new ps(a);
  };
  aa.forEach = function (a, b) {
    for (var c = rs(this), d = 0; d < c.length; d++) {
      var e = c[d];
      a.call(b, this.get(e), e, this);
    }
  };
  aa.set = function (a, b) {
    qs(this);
    var c = this.j;
    if (null == b) return c.delete(a), this;
    c.set(a, this.D(b, this.J, this.B, this.m));
    this.size = c.size;
    return this;
  };
  aa.get = function (a) {
    var b = this.j;
    if (b.has(a)) {
      var c = b.get(a),
        d = this.m,
        e = this.J;
      e && Array.isArray(c) && d & 16 && Ob(c);
      d = this.D(c, e, this.B, d);
      d !== c && b.set(a, d);
      return d;
    }
  };
  aa.has = function (a) {
    return this.j.has(a);
  };
  var rs = function (a) {
    return _.t(Array, 'from').call(Array, _.t(a.j, 'keys').call(a.j)).sort(gc);
  };
  tc.prototype[_.t(v.Symbol, 'iterator')] = function () {
    return _.t(this, 'entries').call(this);
  };
  var ss,
    x,
    nc,
    Kk,
    Fl,
    ln,
    Le,
    G,
    sc,
    ah,
    Ne,
    us,
    aj,
    fj,
    ej,
    eo,
    ts,
    go,
    Se,
    be,
    fh,
    Nc,
    vs,
    hf,
    ee,
    dp,
    ij,
    ws,
    xs,
    zs,
    tl,
    ef,
    op,
    de,
    As,
    jn,
    Lh,
    Cf,
    Bs;
  ss = function (a) {
    var b = a.m + a.nb;
    return a.Ha || (a.Ha = a.fa[b] = {});
  };
  x = function (a, b, c) {
    return -1 === b
      ? null
      : b >= a.m
      ? a.Ha
        ? a.Ha[b]
        : void 0
      : c && a.Ha && ((c = a.Ha[b]), null != c)
      ? c
      : a.fa[b + a.nb];
  };
  _.z = function (a, b, c, d) {
    Wb(a);
    return nc(a, b, c, d);
  };
  nc = function (a, b, c, d) {
    a.B && (a.B = void 0);
    if (b >= a.m || d) return (ss(a)[b] = c), a;
    a.fa[b + a.nb] = c;
    (c = a.Ha) && b in c && delete c[b];
    return a;
  };
  Kk = function (a, b) {
    return null != x(a, b, !1);
  };
  Fl = function (a, b, c) {
    return void 0 !== ts(a, b, c, !1);
  };
  ln = function (a, b, c) {
    return oc(a, b, 0, void 0 === c ? !1 : c, Mb(a.fa));
  };
  Le = function (a, b) {
    var c = x(a, b);
    var d =
      null == c
        ? c
        : 'number' === typeof c ||
          'NaN' === c ||
          'Infinity' === c ||
          '-Infinity' === c
        ? Number(c)
        : void 0;
    null != d && d !== c && nc(a, b, d);
    return d;
  };
  G = function (a, b) {
    a = x(a, b);
    return null == a ? a : !!a;
  };
  ah = function (a, b, c) {
    c = null == c ? mc : Jb(c, 1);
    return _.z(a, b, c);
  };
  _.uh = function (a, b, c) {
    if (null == c) a = _.z(a, b, mc);
    else {
      var d = Hb(c);
      if (!(d & 4)) {
        if (d & 2 || Object.isFrozen(c)) c = Array.prototype.slice.call(c);
        for (var e = 0; e < c.length; e++) c[e] = c[e];
        Ib(c, d | 5);
      }
      a = _.z(a, b, c);
    }
    return a;
  };
  Ne = function (a, b) {
    return _.z(a, b, void 0, !1);
  };
  us = function (a, b, c) {
    Wb(a);
    oc(a, b, 2, !1, !1).push(c);
    return a;
  };
  aj = function (a, b, c, d) {
    Wb(a);
    (c = ej(a, c)) && c !== b && null != d && nc(a, c, void 0, !1);
    return nc(a, b, d);
  };
  fj = function (a, b, c) {
    return ej(a, b) === c ? c : -1;
  };
  ej = function (a, b) {
    for (var c = 0, d = 0; d < b.length; d++) {
      var e = b[d];
      null != x(a, e) && (0 !== c && nc(a, c, void 0, !1), (c = e));
    }
    return c;
  };
  eo = function (a, b, c) {
    var d = Hb(a.fa);
    Vb(d);
    var e = x(a, c);
    b = hc(ec(e, b, !0, d));
    e !== b && nc(a, c, b);
    return b;
  };
  ts = function (a, b, c, d) {
    var e = x(a, c, d);
    b = ec(e, b, !1, Hb(a.fa));
    b !== e && null != b && nc(a, c, b, d);
    return b;
  };
  go = function (a, b, c) {
    return (a = ts(a, b, c, !1)) ? a : cc(b);
  };
  Se = function (a, b, c) {
    var d = void 0 === d ? !1 : d;
    b = ts(a, b, c, d);
    if (null == b) return b;
    if (!Mb(a.fa)) {
      var e = hc(b);
      e !== b && ((b = e), nc(a, c, b, d));
    }
    return b;
  };
  be = function (a, b, c) {
    var d = Hb(a.fa),
      e = !!(d & 2);
    b = xc(a, b, c, e, d);
    a = oc(a, c, 3, void 0, e);
    if (!(e || Hb(a) & 8)) {
      for (e = 0; e < b.length; e++)
        (c = b[e]), (d = hc(c)), c !== d && ((b[e] = d), (a[e] = d.fa));
      Gb(a, 8);
    }
    return b;
  };
  _.ch = function (a, b, c) {
    Wb(a);
    null == c && (c = void 0);
    return nc(a, b, c);
  };
  fh = function (a, b, c, d) {
    Wb(a);
    null == d && (d = void 0);
    return aj(a, b, c, d);
  };
  Nc = function (a, b, c, d) {
    Wb(a);
    var e = null == c ? mc : Lb([]);
    if (null != c) {
      for (var f = !!c.length, g = 0; g < c.length; g++) {
        var h = c[g];
        f = f && !Mb(h.fa);
        e[g] = h.fa;
      }
      e = Jb(e, (f ? 8 : 0) | 1);
      a.j || (a.j = {});
      a.j[b] = c;
    } else a.j && (a.j[b] = void 0);
    return nc(a, b, e, d);
  };
  vs = function (a, b, c, d) {
    var e = Hb(a.fa);
    Vb(e);
    e = xc(a, c, b, !1, e);
    c = null != d ? d : new c();
    a = oc(a, b, 2, void 0, !1);
    e.push(c);
    a.push(c.fa);
    Mb(c.fa) && Kb(a, 8);
    return c;
  };
  hf = function (a, b, c, d) {
    vs(a, b, c, d);
    return a;
  };
  ee = function (a, b) {
    return yc(x(a, b), 0);
  };
  dp = function (a, b) {
    return yc(x(a, b), 0);
  };
  ij = function (a, b, c) {
    return yc(x(a, b), void 0 === c ? 0 : c);
  };
  ws = function (a) {
    a = x(a, 7);
    return null == a ? void 0 : a;
  };
  xs = function () {
    var a = mi().j;
    return x(a, 26);
  };
  zs = function (a) {
    var b = ys;
    var c = void 0 === c ? 0 : c;
    return ij(a, fj(a, b, 3), c);
  };
  tl = function (a, b) {
    return pc(a, b, ac, !1);
  };
  ef = function (a, b) {
    return yc(x(a, b), '');
  };
  op = function (a, b, c) {
    return yc(G(a, b), void 0 === c ? !1 : c);
  };
  de = function (a, b, c) {
    return yc(x(a, b), void 0 === c ? 0 : c);
  };
  As = function (a, b) {
    return ef(a, fj(a, b, 2));
  };
  jn = function (a, b, c, d) {
    return Se(a, b, fj(a, d, c));
  };
  Lh = function (a, b) {
    a = G(a, b);
    return null == a ? void 0 : a;
  };
  Cf = function (a, b) {
    a = x(a, b);
    return null == a ? void 0 : a;
  };
  Bs = function (a, b) {
    a = x(a, b);
    return null == a ? void 0 : a;
  };
  var zc;
  _.S = function (a, b, c, d) {
    null == a && (a = zc);
    zc = void 0;
    var e = this.constructor.messageId;
    if (null == a) {
      a = e ? [e] : [];
      var f = 48;
      var g = !0;
      d && (f |= 128);
      Ib(a, f);
    } else {
      if (!Array.isArray(a)) throw Error();
      if (e && e !== a[0]) throw Error();
      f = Gb(a, 0) | 32;
      g = 0 !== (16 & f);
      if (d) {
        if (!(f & 128) && 0 < a.length) {
          var h = a[a.length - 1];
          if (Rb(h) && 'g' in h) {
            f |= 128;
            delete h.g;
            var l = !0,
              k;
            for (k in h) {
              l = !1;
              break;
            }
            l && a.pop();
          } else throw Error();
        }
      } else if (128 & f) throw Error();
      Ib(a, f);
    }
    this.nb = e ? 0 : -1;
    this.j = void 0;
    this.fa = a;
    a: {
      f = this.fa.length;
      e = f - 1;
      if (f && ((f = this.fa[e]), Rb(f))) {
        this.Ha = f;
        this.m = e - this.nb;
        break a;
      }
      void 0 !== b && -1 < b
        ? ((this.m = Math.max(b, e + 1 - this.nb)), (this.Ha = void 0))
        : (this.m = Number.MAX_VALUE);
    }
    if (!d && this.Ha && 'g' in this.Ha)
      throw Error(
        'Unexpected "g" flag in sparse object of message that is not a group type.'
      );
    if (c) {
      b = g && !0;
      d = this.m;
      var m;
      for (g = 0; g < c.length; g++)
        (e = c[g]),
          e < d
            ? ((e += this.nb), (f = a[e]) ? Qc(f, b) : (a[e] = mc))
            : (m || (m = ss(this)), (f = m[e]) ? Qc(f, b) : (m[e] = mc));
    }
  };
  _.S.prototype.toJSON = function () {
    var a = this.fa;
    return ns ? a : Ec(a, Gc, Hc);
  };
  var Zd = function (a) {
    ns = !0;
    try {
      return JSON.stringify(a.toJSON(), Rc);
    } finally {
      ns = !1;
    }
  };
  _.S.prototype.Gd = bc;
  var Tc = 0,
    Uc = 0,
    Wc = 'function' === typeof BigInt;
  var Cs = function (a, b) {
      this.m = a >>> 0;
      this.j = b >>> 0;
    },
    Es = function (a) {
      if (!a) return Ds || (Ds = new Cs(0, 0));
      if (!/^\d+$/.test(a)) return null;
      Xc(a);
      return new Cs(Tc, Uc);
    },
    Ds,
    Fs = function (a, b) {
      this.m = a >>> 0;
      this.j = b >>> 0;
    },
    md = function (a) {
      if (!a) return Gs || (Gs = new Fs(0, 0));
      if (!/^-?\d+$/.test(a)) return null;
      Xc(a);
      return new Fs(Tc, Uc);
    },
    Gs;
  var Hs = function () {
    this.j = [];
  };
  Hs.prototype.length = function () {
    return this.j.length;
  };
  Hs.prototype.end = function () {
    var a = this.j;
    this.j = [];
    return a;
  };
  var od = function (a, b, c) {
      for (; 0 < c || 127 < b; )
        a.j.push((b & 127) | 128),
          (b = ((b >>> 7) | (c << 25)) >>> 0),
          (c >>>= 7);
      a.j.push(b);
    },
    nd = function (a, b) {
      for (; 127 < b; ) a.j.push((b & 127) | 128), (b >>>= 7);
      a.j.push(b);
    },
    Is = function (a, b) {
      if (0 <= b) nd(a, b);
      else {
        for (var c = 0; 9 > c; c++) a.j.push((b & 127) | 128), (b >>= 7);
        a.j.push(1);
      }
    };
  var vd = function () {
      this.D = [];
      this.m = 0;
      this.j = new Hs();
    },
    wd = function (a, b) {
      0 !== b.length && (a.D.push(b), (a.m += b.length));
    },
    Js = function (a, b) {
      nd(a.j, 8 * b + 2);
      b = a.j.end();
      wd(a, b);
      b.push(a.m);
      return b;
    },
    Ks = function (a, b) {
      var c = b.pop();
      for (c = a.m + a.j.length() - c; 127 < c; )
        b.push((c & 127) | 128), (c >>>= 7), a.m++;
      b.push(c);
      a.m++;
    },
    $c = function (a, b) {
      if ((b = b.Cd)) {
        wd(a, a.j.end());
        for (var c = 0; c < b.length; c++)
          wd(a, gj(b[c]) || hj || (hj = new Uint8Array(0)));
      }
    },
    Ls = function (a, b, c) {
      nd(a.j, 8 * b + 2);
      nd(a.j, c.length);
      wd(a, a.j.end());
      wd(a, c);
    };
  var ed = (0, v.Symbol)(),
    cd = (0, v.Symbol)(),
    bd = (0, v.Symbol)(),
    Ms = ld(
      function (a, b, c) {
        if (5 !== a.j()) return !1;
        _.z(b, c, a.l());
        return !0;
      },
      function (a, b, c) {
        b = Le(b, c);
        if (null != b) {
          nd(a.j, 8 * c + 5);
          a = a.j;
          var d = +b;
          0 === d
            ? 0 < 1 / d
              ? (Tc = Uc = 0)
              : ((Uc = 0), (Tc = 2147483648))
            : isNaN(d)
            ? ((Uc = 0), (Tc = 2147483647))
            : ((d = (c = 0 > d ? -2147483648 : 0) ? -d : d),
              3.4028234663852886e38 < d
                ? ((Uc = 0), (Tc = (c | 2139095040) >>> 0))
                : 1.1754943508222875e-38 > d
                ? ((d = Math.round(d / Math.pow(2, -149))),
                  (Uc = 0),
                  (Tc = (c | d) >>> 0))
                : ((b = Math.floor(Math.log(d) / Math.LN2)),
                  (d *= Math.pow(2, -b)),
                  (d = Math.round(8388608 * d)),
                  16777216 <= d && ++b,
                  (Uc = 0),
                  (Tc = (c | ((b + 127) << 23) | (d & 8388607)) >>> 0)));
          c = Tc;
          a.j.push((c >>> 0) & 255);
          a.j.push((c >>> 8) & 255);
          a.j.push((c >>> 16) & 255);
          a.j.push((c >>> 24) & 255);
        }
      }
    ),
    Ns = ld(function (a, b, c) {
      if (0 !== a.j()) return !1;
      _.z(b, c, a.o());
      return !0;
    }, pd),
    Os = ld(function (a, b, c) {
      if (0 !== a.j()) return !1;
      _.z(b, c, a.L());
      return !0;
    }, pd),
    Ps = ld(
      function (a, b, c) {
        if (0 !== a.j()) return !1;
        _.z(b, c, a.C());
        return !0;
      },
      function (a, b, c) {
        b = x(b, c);
        null != b &&
          ('string' === typeof b && Es(b),
          null != b &&
            (nd(a.j, 8 * c),
            'number' === typeof b
              ? ((a = a.j), Vc(b), od(a, Tc, Uc))
              : ((c = Es(b)), od(a.j, c.m, c.j))));
      }
    ),
    Qs = ld(
      function (a, b, c) {
        if (0 !== a.j()) return !1;
        _.z(b, c, a.H());
        return !0;
      },
      function (a, b, c) {
        b = x(b, c);
        null != b && null != b && (nd(a.j, 8 * c), Is(a.j, b));
      }
    ),
    Rs = ld(
      function (a, b, c) {
        if (0 !== a.j()) return !1;
        _.z(b, c, a.J());
        return !0;
      },
      function (a, b, c) {
        b = G(b, c);
        null != b && (nd(a.j, 8 * c), a.j.j.push(b ? 1 : 0));
      }
    ),
    Ss = ld(
      function (a, b, c) {
        if (2 !== a.j()) return !1;
        _.z(b, c, a.D());
        return !0;
      },
      function (a, b, c) {
        b = x(b, c);
        null != b && Ls(a, c, vb(b));
      }
    ),
    Ts = ld(
      function (a, b, c) {
        if (2 !== a.j()) return !1;
        us(b, c, a.D());
        return !0;
      },
      function (a, b, c) {
        b = tl(b, c);
        if (null != b)
          for (var d = 0; d < b.length; d++) {
            var e = b[d];
            null != e && Ls(a, c, vb(e));
          }
      }
    ),
    Us = ld(
      function (a, b, c, d, e) {
        if (2 !== a.j()) return !1;
        a.m(eo(b, d, c), e);
        return !0;
      },
      function (a, b, c, d, e) {
        b = Se(b, d, c);
        null != b && ((c = Js(a, c)), e(b, a), Ks(a, c));
      }
    ),
    Vs = ld(
      function (a, b, c, d, e) {
        if (2 !== a.j()) return !1;
        a.m(vs(b, c, d), e);
        return !0;
      },
      function (a, b, c, d, e) {
        b = be(b, d, c);
        if (null != b)
          for (d = 0; d < b.length; d++) {
            var f = Js(a, c);
            e(b[d], a);
            Ks(a, f);
          }
      }
    ),
    Ws = ld(
      function (a, b, c) {
        if (0 !== a.j()) return !1;
        _.z(b, c, a.B());
        return !0;
      },
      function (a, b, c) {
        b = x(b, c);
        null != b && ((b = parseInt(b, 10)), nd(a.j, 8 * c), Is(a.j, b));
      }
    );
  var C = {
    Mh: function () {
      return '';
    },
  };
  C.zd = qd;
  var Xs = qd(function (a) {
    return null !== a && void 0 !== a;
  }, 'exists');
  C.assert = function () {};
  C.ra = function (a) {
    return a;
  };
  var rd = void 0;
  C.Qh = sd;
  C.Sh = td;
  C.Ih = function () {};
  C.Jh = function (a) {
    return a;
  };
  C.ue = ud;
  C.Uh = function (a, b) {
    ud(a, b);
    return a;
  };
  C.Hh = function () {};
  C.K = function (a) {
    return a;
  };
  C.Rh = function (a, b) {
    sd(a, Xs, b);
  };
  C.Th = function (a, b) {
    return td(a, Xs, b);
  };
  C.Lh = function (a, b) {
    return a(b);
  };
  C.Nh = function (a) {
    ud(!rd);
    rd = function () {
      var b = 'function' === typeof a ? a() : a;
      rd = void 0;
      return b;
    };
  };
  var ro = function (a) {
    _.S.call(this, a);
  };
  _.O(ro, _.S);
  var so = function (a) {
    _.S.call(this, a);
  };
  _.O(so, _.S);
  var Ys = function (a) {
      this.j = a.m;
      this.m = a.D;
      this.J = a.J;
      this.jc = a.jc;
      this.I = a.I;
      this.Fb = a.Fb;
      this.Pc = a.Pc;
      this.dd = a.dd;
      this.Oc = a.Oc;
      this.D = a.j;
    },
    $s = function (a, b, c) {
      this.m = a;
      this.D = b;
      this.J = c;
      this.I = window;
      this.Fb = 'env';
      this.Pc = 'n';
      this.dd = '0';
      this.Oc = '1';
      this.j = !0;
    };
  $s.prototype.build = function () {
    return new Ys(this);
  };
  var Bo = function (a, b) {
    var c = void 0 === op(b, 6) ? !0 : op(b, 6),
      d,
      e;
    a: switch (de(b, 4, 0)) {
      case 1:
        var f = 'pt';
        break a;
      case 2:
        f = 'cr';
        break a;
      default:
        f = '';
    }
    f = new $s(zd(de(b, 2, 0)), ef(b, 3), f);
    b = null != (e = null == (d = Se(b, ro, 5)) ? void 0 : ef(d, 1)) ? e : '';
    f.jc = b;
    f.j = c;
    f.I = a;
    return f.build();
  };
  var at = function (a) {
    _.S.call(this, a);
  };
  _.O(at, _.S);
  at.prototype.getId = function () {
    return ef(this, 1);
  };
  var Kl = function (a) {
      var b = new at();
      return _.z(b, 1, a);
    },
    bt = [at, 1, Ss];
  var ct = function (a) {
    _.S.call(this, a);
  };
  _.O(ct, _.S);
  ct.prototype.getWidth = function () {
    return ee(this, 1);
  };
  var Pl = function (a) {
    var b = new ct();
    return _.z(b, 1, a);
  };
  ct.prototype.getHeight = function () {
    return ee(this, 2);
  };
  var Ol = function (a, b) {
      return _.z(a, 2, b);
    },
    dt = [ct, 1, Qs, 2, Qs];
  var et = function (a) {
    _.S.call(this, a);
  };
  _.O(et, _.S);
  var ft = [et, 1, Os, 2, Rs];
  var Il = function (a) {
    _.S.call(this, a, -1, gt);
  };
  _.O(Il, _.S);
  var Ll = function (a, b) {
      _.uh(a, 4, b);
    },
    Jl = function (a, b) {
      _.ch(a, 6, b);
    },
    Nl = function (a, b) {
      _.ch(a, 7, b);
    },
    gt = [4],
    ht = [
      Il,
      1,
      Ss,
      2,
      Os,
      8,
      Os,
      3,
      Ss,
      4,
      Ts,
      5,
      Ws,
      6,
      Us,
      bt,
      7,
      Us,
      dt,
      9,
      Us,
      ft,
    ];
  var rl = function (a) {
    _.S.call(this, a);
  };
  _.O(rl, _.S);
  var ql = function (a, b) {
      return _.z(a, 1, b);
    },
    ol = function (a, b) {
      return _.z(a, 4, b);
    },
    pl = function (a, b) {
      return _.z(a, 2, b);
    },
    it = [rl, 1, Ws, 4, Rs, 2, Qs, 3, Ss];
  var zl = function (a) {
    _.S.call(this, a, -1, jt);
  };
  _.O(zl, _.S);
  var yl = function (a, b) {
      return _.z(a, 1, b);
    },
    Al = function (a, b) {
      _.z(a, 2, b);
    },
    wl = function (a, b) {
      return hf(a, 3, Il, b);
    },
    xl = function (a, b) {
      return _.z(a, 4, b);
    };
  zl.prototype.je = function () {
    return de(this, 7, 0);
  };
  var jt = [3],
    kt = [zl, 1, Ss, 2, Os, 3, Vs, ht, 4, Ws, 5, Us, it, 6, Rs, 7, Ws];
  var lt = function (a) {
    _.S.call(this, a);
  };
  _.O(lt, _.S);
  var mt = [lt, 1, Ws, 2, Rs];
  var ot = function (a) {
    _.S.call(this, a, -1, nt);
  };
  _.O(ot, _.S);
  var vl = function (a, b) {
      return vs(a, 2, zl, b);
    },
    Gl = function (a, b) {
      _.ch(a, 5, b);
    },
    nt = [2],
    pt = [
      ot,
      1,
      Ws,
      6,
      Ss,
      2,
      Vs,
      kt,
      3,
      Ws,
      4,
      Ss,
      5,
      Us,
      it,
      9,
      Us,
      mt,
      7,
      Rs,
      8,
      Qs,
    ];
  var rt = function (a) {
    _.S.call(this, a, -1, qt);
  };
  _.O(rt, _.S);
  var st = function (a) {
      var b = new ot();
      b = _.z(b, 1, 1);
      return vs(a, 1, ot, b);
    },
    qt = [1];
  rt.prototype.D = xd([rt, 1, Vs, pt]);
  var tt = function (a) {
    _.S.call(this, a);
  };
  _.O(tt, _.S);
  var ys = [2, 3];
  var vt = function (a) {
    _.S.call(this, a, -1, ut);
  };
  _.O(vt, _.S);
  var ut = [1];
  var xt = function (a) {
    _.S.call(this, a, -1, wt);
  };
  _.O(xt, _.S);
  var wt = [1];
  var yt = function (a) {
    _.S.call(this, a);
  };
  _.O(yt, _.S);
  yt.prototype.D = function () {
    return ef(this, 1);
  };
  yt.prototype.J = function () {
    return As(this, zt);
  };
  var zt = [2, 3];
  var Bt = function (a) {
    _.S.call(this, a, -1, At);
  };
  _.O(Bt, _.S);
  Bt.prototype.D = function () {
    return be(this, yt, 2);
  };
  var pf = yd(Bt),
    At = [2];
  var Dt = function (a) {
    _.S.call(this, a, -1, Ct);
  };
  _.O(Dt, _.S);
  var Ct = [4];
  var Et = function (a) {
    _.S.call(this, a);
  };
  _.O(Et, _.S);
  var Gt = function (a) {
    _.S.call(this, a, -1, Ft);
  };
  _.O(Gt, _.S);
  Gt.prototype.Kc = function () {
    return go(this, Et, 2);
  };
  var Ft = [1];
  var Ht = function (a) {
    _.S.call(this, a);
  };
  _.O(Ht, _.S);
  var Jt = function (a) {
    _.S.call(this, a, -1, It);
  };
  _.O(Jt, _.S);
  var It = [1];
  var Kt = function (a) {
    _.S.call(this, a);
  };
  _.O(Kt, _.S);
  var Lt = [Kt, 1, Ws, 2, Os];
  var Mt = function (a) {
    _.S.call(this, a);
  };
  _.O(Mt, _.S);
  var Nt = [Mt, 1, Ns];
  var Ot = function (a) {
    _.S.call(this, a);
  };
  _.O(Ot, _.S);
  Ot.prototype.getEscapedQemQueryId = function () {
    return ef(this, 1);
  };
  var Pt = [Ot, 1, Ss, 2, Us, Nt, 3, Us, Lt];
  var Qt = function (a) {
    _.S.call(this, a);
  };
  _.O(Qt, _.S);
  Qt.prototype.getAdUnitPath = function () {
    return ef(this, 1);
  };
  var kn = function (a) {
    _.S.call(this, a);
  };
  _.O(kn, _.S);
  var gn = function (a) {
    _.S.call(this, a);
  };
  _.O(gn, _.S);
  var hn = [1, 2];
  var St = function (a) {
    _.S.call(this, a, -1, Rt);
  };
  _.O(St, _.S);
  var Rt = [1, 2];
  var mn = function (a) {
    _.S.call(this, a);
  };
  _.O(mn, _.S);
  mn.prototype.getAdUnitPath = function () {
    return ef(this, 2);
  };
  mn.prototype.getWidth = function () {
    return ee(this, 3);
  };
  mn.prototype.getHeight = function () {
    return ee(this, 4);
  };
  var Ut = function (a) {
    _.S.call(this, a, -1, Tt);
  };
  _.O(Ut, _.S);
  var Tt = [3];
  var Vt = function (a) {
    _.S.call(this, a);
  };
  _.O(Vt, _.S);
  Vt.prototype.getAdUnitPath = function () {
    return ef(this, 3);
  };
  var Wt = function (a) {
    _.S.call(this, a);
  };
  _.O(Wt, _.S);
  var Xt = [5, 6, 7, 8, 9];
  var Zt = function (a) {
    _.S.call(this, a, -1, Yt);
  };
  _.O(Zt, _.S);
  var Yt = [4, 5, 6];
  var $t = function (a) {
    _.S.call(this, a);
  };
  _.O($t, _.S);
  $t.prototype.cc = function () {
    return null != x(this, 2);
  };
  var bu = function (a) {
    _.S.call(this, a, -1, au);
  };
  _.O(bu, _.S);
  var au = [13];
  var du = function (a) {
    _.S.call(this, a, -1, cu);
  };
  _.O(du, _.S);
  var cu = [13];
  var Te = function (a) {
    _.S.call(this, a);
  };
  _.O(Te, _.S);
  var Re = function (a, b) {
      return _.z(a, 1, b);
    },
    eu = [Te, 1, Ws];
  var cf = function (a) {
    _.S.call(this, a);
  };
  _.O(cf, _.S);
  var gf = function (a) {
      var b = new cf();
      return _.z(b, 1, a);
    },
    Ke = function (a, b) {
      return _.z(a, 8, Yb(b));
    };
  cf.prototype.za = function (a) {
    return _.ch(this, 10, a);
  };
  var fu = yd(cf),
    gu = [
      cf,
      1,
      Ss,
      2,
      Ss,
      3,
      Os,
      7,
      Os,
      8,
      Ms,
      4,
      Qs,
      5,
      Qs,
      6,
      Qs,
      9,
      Rs,
      11,
      Rs,
      10,
      Us,
      eu,
    ];
  var hu = function (a) {
    _.S.call(this, a);
  };
  _.O(hu, _.S);
  var iu = [hu, 4, Ws, 5, Ss];
  var ju = function (a) {
    _.S.call(this, a);
  };
  _.O(ju, _.S);
  var ku = [ju, 1, Ps, 2, Ps, 3, Ps];
  var lu = function (a) {
    _.S.call(this, a);
  };
  _.O(lu, _.S);
  lu.prototype.za = function (a) {
    return _.ch(this, 7, a);
  };
  var mu = [lu, 5, Ss, 4, Ss, 2, Us, ku, 3, Us, ku, 6, Rs, 7, Us, iu, 8, Os];
  var Xe = function (a) {
    _.S.call(this, a, -1, nu);
  };
  _.O(Xe, _.S);
  var nu = [1, 2];
  Xe.prototype.D = xd([Xe, 1, Vs, mu, 2, Vs, gu]);
  var ou = function (a) {
    _.S.call(this, a);
  };
  _.O(ou, _.S);
  ou.prototype.D = function () {
    return ef(this, 1);
  };
  ou.prototype.J = function () {
    return As(this, pu);
  };
  var pu = [2, 3];
  var ru = function (a) {
    _.S.call(this, a, -1, qu);
  };
  _.O(ru, _.S);
  ru.prototype.D = function () {
    return be(this, ou, 1);
  };
  var qu = [1];
  var su = function (a) {
    _.S.call(this, a);
  };
  _.O(su, _.S);
  su.prototype.cc = function () {
    return null != x(this, 1);
  };
  su.prototype.getVersion = function () {
    return x(this, 5);
  };
  var tu = function (a) {
    _.S.call(this, a);
  };
  _.O(tu, _.S);
  var uu = function (a) {
    _.S.call(this, a);
  };
  _.O(uu, _.S);
  var vu = function (a) {
    _.S.call(this, a);
  };
  _.O(vu, _.S);
  var bp = function (a) {
    _.S.call(this, a, -1, wu);
  };
  _.O(bp, _.S);
  bp.prototype.getEscapedQemQueryId = function () {
    return ef(this, 4);
  };
  var wu = [2];
  var ap = function (a) {
    _.S.call(this, a);
  };
  _.O(ap, _.S);
  var cp = function (a) {
    _.S.call(this, a);
  };
  _.O(cp, _.S);
  var fp = function (a) {
    _.S.call(this, a);
  };
  _.O(fp, _.S);
  var ep = function (a) {
    _.S.call(this, a);
  };
  _.O(ep, _.S);
  ep.prototype.getEscapedQemQueryId = function () {
    return ef(this, 2);
  };
  var yu = function (a) {
    _.S.call(this, a, -1, xu);
  };
  _.O(yu, _.S);
  yu.prototype.getWidth = function () {
    return ee(this, 9);
  };
  yu.prototype.getHeight = function () {
    return ee(this, 10);
  };
  var xu = [3, 7, 11];
  var Au = function (a) {
    _.S.call(this, a, -1, zu);
  };
  _.O(Au, _.S);
  Au.prototype.getHeight = function () {
    return x(this, 6);
  };
  Au.prototype.getWidth = function () {
    return x(this, 7);
  };
  Au.prototype.getEscapedQemQueryId = function () {
    return x(this, 34);
  };
  var zu = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 38, 53, 62, 63],
    Bu = [39, 48];
  var Cu = function (a) {
    _.S.call(this, a);
  };
  _.O(Cu, _.S);
  var po = yd(Cu);
  var Eu = function (a) {
    _.S.call(this, a, -1, Du);
  };
  _.O(Eu, _.S);
  var Fu = yd(Eu),
    Du = [1, 2, 3];
  var Gu = window;
  var nq = function (a) {
    _.S.call(this, a, -1, Hu);
  };
  _.O(nq, _.S);
  var Hu = [15];
  var mq = function (a) {
    _.S.call(this, a);
  };
  _.O(mq, _.S);
  mq.prototype.getCorrelator = function () {
    return ij(this, 1);
  };
  mq.prototype.setCorrelator = function (a) {
    return _.y(this, 1, a, 0);
  };
  var lq = function (a) {
    _.S.call(this, a);
  };
  _.O(lq, _.S);
  var Iu = _.Sr || Vr;
  var Ju = /^[\w+/_-]+[=]{0,2}$/,
    Ku = function () {
      var a = _.q.document;
      return a.querySelector
        ? (a = a.querySelector('script[nonce]')) &&
          (a = a.nonce || a.getAttribute('nonce')) &&
          Ju.test(a)
          ? a
          : ''
        : '';
    };
  _.Qh = function (a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0;
  };
  _.Qh.prototype.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  _.Qh.prototype.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  _.Qh.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  _.Th = function (a, b) {
    this.width = a;
    this.height = b;
  };
  aa = _.Th.prototype;
  aa.aspectRatio = function () {
    return this.width / this.height;
  };
  aa.isEmpty = function () {
    return !(this.width * this.height);
  };
  aa.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  aa.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  aa.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  var Lu, Mu, Nu, Pu;
  Lu = function (a) {
    return (a = pg(a));
  };
  Mu = function () {
    return (
      Math.floor(2147483648 * Math.random()).toString(36) +
      Math.abs(Math.floor(2147483648 * Math.random()) ^ re()).toString(36)
    );
  };
  Nu = (2147483648 * Math.random()) | 0;
  _.Ou = function (a) {
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  };
  Pu = function (a) {
    return a.replace(RegExp('(^|[\\s]+)([a-z])', 'g'), function (b, c, d) {
      return c + d.toUpperCase();
    });
  };
  var Su, Uu, Tu, Xu, Zu, Cd, Fd, Qu;
  Su = function (a) {
    return a ? new Qu(_.Ru(a)) : ir || (ir = new Qu());
  };
  Uu = function (a, b) {
    za(b, function (c, d) {
      c && 'object' == typeof c && c.Ta && (c = c.Ka());
      'style' == d
        ? (a.style.cssText = c)
        : 'class' == d
        ? (a.className = c)
        : 'for' == d
        ? (a.htmlFor = c)
        : Tu.hasOwnProperty(d)
        ? a.setAttribute(Tu[d], c)
        : 0 == d.lastIndexOf('aria-', 0) || 0 == d.lastIndexOf('data-', 0)
        ? a.setAttribute(d, c)
        : (a[d] = c);
    });
  };
  Tu = {
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
  };
  _.Wu = function (a) {
    a = a.document;
    a = _.Vu(a) ? a.documentElement : a.body;
    return new _.Th(a.clientWidth, a.clientHeight);
  };
  Xu = function (a) {
    return a.scrollingElement
      ? a.scrollingElement
      : !Vr && _.Vu(a)
      ? a.documentElement
      : a.body || a.documentElement;
  };
  _.Yu = function (a) {
    return a ? a.parentWindow || a.defaultView : window;
  };
  Zu = function (a, b, c) {
    function d(h) {
      h && b.appendChild('string' === typeof h ? a.createTextNode(h) : h);
    }
    for (var e = 1; e < c.length; e++) {
      var f = c[e];
      if (!ta(f) || (_.ka(f) && 0 < f.nodeType)) d(f);
      else {
        a: {
          if (f && 'number' == typeof f.length) {
            if (_.ka(f)) {
              var g = 'function' == typeof f.item || 'string' == typeof f.item;
              break a;
            }
            if ('function' === typeof f) {
              g = 'function' == typeof f.item;
              break a;
            }
          }
          g = !1;
        }
        _.rr(g ? ia(f) : f, d);
      }
    }
  };
  _.Vu = function (a) {
    return 'CSS1Compat' == a.compatMode;
  };
  _.$u = function (a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null;
  };
  _.av = function (a) {
    var b;
    if (Iu && (b = a.parentElement)) return b;
    b = a.parentNode;
    return _.ka(b) && 1 == b.nodeType ? b : null;
  };
  Cd = function (a) {
    var b,
      c = arguments.length;
    if (!c) return null;
    if (1 == c) return arguments[0];
    var d = [],
      e = Infinity;
    for (b = 0; b < c; b++) {
      for (var f = [], g = arguments[b]; g; ) f.unshift(g), (g = g.parentNode);
      d.push(f);
      e = Math.min(e, f.length);
    }
    f = null;
    for (b = 0; b < e; b++) {
      g = d[0][b];
      for (var h = 1; h < c; h++) if (g != d[h][b]) return f;
      f = g;
    }
    return f;
  };
  _.Ru = function (a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document;
  };
  Fd = function (a) {
    try {
      return (
        a.contentWindow || (a.contentDocument ? _.Yu(a.contentDocument) : null)
      );
    } catch (b) {}
    return null;
  };
  Qu = function (a) {
    this.j = a || _.q.document || document;
  };
  aa = Qu.prototype;
  aa.getElementsByTagName = function (a, b) {
    return (b || this.j).getElementsByTagName(String(a));
  };
  aa.createElement = function (a) {
    var b = this.j;
    a = String(a);
    'application/xhtml+xml' === b.contentType && (a = a.toLowerCase());
    return b.createElement(a);
  };
  aa.createTextNode = function (a) {
    return this.j.createTextNode(String(a));
  };
  aa.append = function (a, b) {
    Zu(_.Ru(a), a, arguments);
  };
  aa.Ke = _.$u;
  var bv = function () {
    return Ha('iPad') || (Ha('Android') && !Ha('Mobile')) || Ha('Silk');
  };
  var dv, Ck, ev, ek;
  _.cv = RegExp(
    '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$'
  );
  dv = function (a) {
    return a ? decodeURI(a) : a;
  };
  Ck = function (a, b, c) {
    if (Array.isArray(b))
      for (var d = 0; d < b.length; d++) Ck(a, String(b[d]), c);
    else
      null != b &&
        c.push(a + ('' === b ? '' : '=' + encodeURIComponent(String(b))));
  };
  ev = /#|$/;
  ek = function (a, b) {
    var c = a.search(ev);
    a: {
      var d = 0;
      for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
        var f = a.charCodeAt(d - 1);
        if (38 == f || 63 == f)
          if (((f = a.charCodeAt(d + e)), !f || 61 == f || 38 == f || 35 == f))
            break a;
        d += e + 1;
      }
      d = -1;
    }
    if (0 > d) return null;
    e = a.indexOf('&', d);
    if (0 > e || e > c) e = c;
    d += b.length + 1;
    return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, ' '));
  };
  var Ed,
    Dd,
    If,
    fv,
    Jf,
    ck,
    ei,
    ge,
    Ej,
    Ih,
    fe,
    he,
    vq,
    hv,
    iv,
    fi,
    jv,
    kv,
    lv,
    mv,
    nv,
    ov,
    pv,
    qv,
    rv,
    Hi,
    Ji,
    Ii,
    sv,
    tv,
    vv,
    wv,
    xv,
    yv,
    zv,
    He,
    Av,
    pn,
    gl,
    Yk,
    Ik,
    Bv;
  Ed = function (a) {
    try {
      return !!a && null != a.location.href && Qr(a, 'foo');
    } catch (b) {
      return !1;
    }
  };
  Dd = function (a, b, c, d) {
    b = void 0 === b ? !1 : b;
    d = void 0 === d ? _.q : d;
    c = (void 0 === c ? 0 : c) ? fv(d) : d;
    for (d = 0; c && 40 > d++ && ((!b && !Ed(c)) || !a(c)); ) c = fv(c);
  };
  If = function () {
    var a = window;
    Dd(function (b) {
      a = b;
      return !1;
    });
    return a;
  };
  fv = function (a) {
    try {
      var b = a.parent;
      if (b && b != a) return b;
    } catch (c) {}
    return null;
  };
  Jf = function (a) {
    return Ed(a.top) ? a.top : null;
  };
  ck = function (a, b) {
    var c = _.Ad('SCRIPT', a);
    $a(c, b);
    return (a = a.getElementsByTagName('script')[0]) && a.parentNode
      ? (a.parentNode.insertBefore(c, a), c)
      : null;
  };
  ei = function (a, b) {
    return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
  };
  ge = function () {
    if (!v.globalThis.crypto) return Math.random();
    try {
      var a = new Uint32Array(1);
      v.globalThis.crypto.getRandomValues(a);
      return a[0] / 65536 / 65536;
    } catch (b) {
      return Math.random();
    }
  };
  _.Fk = function (a, b) {
    if (a)
      for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  };
  _.gv = function (a) {
    var b = [];
    _.Fk(a, function (c) {
      b.push(c);
    });
    return b;
  };
  Ej = function (a, b) {
    return Ba(a, function (c, d) {
      return Object.prototype.hasOwnProperty.call(a, d) && b(c, d);
    });
  };
  Ih = function (a) {
    var b = a.length;
    if (0 == b) return 0;
    for (var c = 305419896, d = 0; d < b; d++)
      c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
    return 0 < c ? c : 4294967296 + c;
  };
  fe = di(function () {
    return (
      _.Tg(
        [
          'Google Web Preview',
          'Mediapartners-Google',
          'Google-Read-Aloud',
          'Google-Adwords',
        ],
        hv
      ) || 1e-4 > Math.random()
    );
  });
  he = function (a, b) {
    try {
      if (a) return a.setItem('google_experiment_mod', b), b;
    } catch (c) {}
    return null;
  };
  vq = di(function () {
    return hv('MSIE');
  });
  hv = function (a) {
    return -1 != Fa().indexOf(a);
  };
  iv = /^([0-9.]+)px$/;
  fi = function (a) {
    return (a = iv.exec(a)) ? +a[1] : null;
  };
  jv = function () {
    var a = window;
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
  };
  kv = function (a) {
    if (!a) return '';
    var b = RegExp('.*[&#?]google_debug(=[^&]*)?(&.*)?$');
    try {
      var c = b.exec(decodeURIComponent(a));
      if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : 'true';
    } catch (d) {}
    return '';
  };
  lv = {
    Jg: 'allow-forms',
    Kg: 'allow-modals',
    Lg: 'allow-orientation-lock',
    Mg: 'allow-pointer-lock',
    Ng: 'allow-popups',
    Og: 'allow-popups-to-escape-sandbox',
    Pg: 'allow-presentation',
    Qg: 'allow-same-origin',
    Rg: 'allow-scripts',
    Sg: 'allow-top-navigation',
    Tg: 'allow-top-navigation-by-user-activation',
  };
  mv = di(function () {
    return _.gv(lv);
  });
  nv = function (a) {
    var b = mv();
    return a.length
      ? _.Bg(b, function (c) {
          return !(0 <= _.fa(a, c));
        })
      : b;
  };
  ov = function () {
    var a = _.Ad('IFRAME'),
      b = {};
    _.rr(mv(), function (c) {
      a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0);
    });
    return b;
  };
  pv = function (a) {
    a = a && a.toString && a.toString();
    return 'string' === typeof a && -1 != a.indexOf('[native code]');
  };
  qv = function (a, b) {
    for (var c = 0; 50 > c; ++c) {
      try {
        var d = !(!a.frames || !a.frames[b]);
      } catch (e) {
        d = !1;
      }
      if (d) return a;
      if (!(a = fv(a))) break;
    }
    return null;
  };
  rv = function (a) {
    if (!a || !a.frames) return null;
    if (a.frames.google_ads_top_frame)
      return a.frames.google_ads_top_frame.frameElement;
    try {
      var b = a.document,
        c = b.head,
        d,
        e = null != (d = b.body) ? d : null == c ? void 0 : c.parentElement;
      if (e) {
        var f = _.Ad('IFRAME');
        f.name = 'google_ads_top_frame';
        f.id = 'google_ads_top_frame';
        f.style.display = 'none';
        f.style.position = 'fixed';
        f.style.left = '-999px';
        f.style.top = '-999px';
        f.style.width = '0px';
        f.style.height = '0px';
        e.appendChild(f);
        return f;
      }
    } catch (g) {}
    return null;
  };
  _.jm = di(function () {
    return !bv() &&
      (Ha('iPod') || Ha('iPhone') || Ha('Android') || Ha('IEMobile'))
      ? 2
      : bv()
      ? 1
      : 0;
  });
  Hi = function (a, b) {
    var c;
    for (c = void 0 === c ? 100 : c; a && c--; ) {
      if (a == b) return !0;
      a = a.parentElement;
    }
    return !1;
  };
  _.oi = function (a, b) {
    _.Fk(b, function (c, d) {
      a.style.setProperty(d, c, 'important');
    });
  };
  Ji = function (a, b, c) {
    for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a); )
      a = a.parentElement;
  };
  Ii = function (a, b) {
    for (var c = 100; a && c--; ) {
      var d = ei(a, window);
      if (d) {
        if (b(d)) return !0;
        a = a.parentElement;
      }
    }
    return !1;
  };
  sv = function (a) {
    if (!a) return null;
    a = a.transform;
    if (!a) return null;
    a = a.replace(/^.*\(([0-9., -]+)\)$/, '$1').split(/, /);
    return 6 != a.length ? null : _.Lc(a, parseFloat);
  };
  tv = {};
  _.uv =
    ((tv['http://googleads.g.doubleclick.net'] = !0),
    (tv['http://pagead2.googlesyndication.com'] = !0),
    (tv['https://googleads.g.doubleclick.net'] = !0),
    (tv['https://pagead2.googlesyndication.com'] = !0),
    tv);
  vv = function (a) {
    _.q.console && _.q.console.warn && _.q.console.warn(a);
  };
  wv = [];
  xv = function () {
    var a = wv;
    wv = [];
    a = _.A(a);
    for (var b = a.next(); !b.done; b = a.next()) {
      b = b.value;
      try {
        b();
      } catch (c) {}
    }
  };
  yv = function (a) {
    return a.replace(/\\(n|r|\\)/g, function (b, c) {
      return 'n' == c ? '\n' : 'r' == c ? '\r' : '\\';
    });
  };
  zv = function () {
    return Math.floor(Math.random() * Math.pow(2, 52));
  };
  He = function (a) {
    if ('number' !== typeof a.goog_pvsid)
      try {
        Object.defineProperty(a, 'goog_pvsid', {
          value: zv(),
          configurable: !1,
        });
      } catch (b) {}
    return Number(a.goog_pvsid) || -1;
  };
  Av = function (a, b) {
    Gd(_.Yu(_.Ru(a)), a, b);
  };
  pn = function (a, b) {
    'complete' === a.readyState || 'interactive' === a.readyState
      ? (wv.push(b),
        1 == wv.length &&
          (v.Promise
            ? v.Promise.resolve().then(xv)
            : window.setImmediate
            ? setImmediate(xv)
            : setTimeout(xv, 0)))
      : a.addEventListener('DOMContentLoaded', b);
  };
  gl = function (a) {
    return 'number' === typeof a && isFinite(a) && 0 == a % 1 && 0 < a;
  };
  Yk = function (a) {
    return 0 === a || gl(a);
  };
  Ik = function (a) {
    try {
      var b = JSON.stringify(a);
    } catch (c) {}
    return b || String(a);
  };
  _.Ad = function (a, b) {
    b = void 0 === b ? document : b;
    return b.createElement(String(a).toLowerCase());
  };
  Bv = function (a) {
    for (var b = a; a && a != a.parent; ) (a = a.parent), Ed(a) && (b = a);
    return b;
  };
  _.Cv = function (a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d;
  };
  _.Cv.prototype.getWidth = function () {
    return this.right - this.left;
  };
  _.Cv.prototype.getHeight = function () {
    return this.bottom - this.top;
  };
  _.Dv = function (a) {
    return new _.Cv(a.top, a.right, a.bottom, a.left);
  };
  _.Cv.prototype.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  _.Cv.prototype.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  _.Cv.prototype.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };
  var Ev = function (a, b, c, d) {
      this.left = a;
      this.top = b;
      this.width = c;
      this.height = d;
    },
    Fv = function (a) {
      return new _.Cv(a.top, a.left + a.width, a.top + a.height, a.left);
    },
    Gv = function (a, b) {
      var c = Math.max(a.left, b.left),
        d = Math.min(a.left + a.width, b.left + b.width);
      if (c <= d) {
        var e = Math.max(a.top, b.top);
        a = Math.min(a.top + a.height, b.top + b.height);
        if (e <= a) return new Ev(c, e, d - c, a - e);
      }
      return null;
    };
  Ev.prototype.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  Ev.prototype.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  Ev.prototype.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  var Hv = function (a) {
    return (a = void 0 === a ? Hd() : a)
      ? Ed(a.master)
        ? a.master
        : null
      : null;
  };
  var Kv, Pg, Sh, Mv, Nv, Ph;
  _.Jv = function (a, b, c) {
    if ('string' === typeof b) (b = _.Iv(a, b)) && (a.style[b] = c);
    else
      for (var d in b) {
        c = a;
        var e = b[d],
          f = _.Iv(c, d);
        f && (c.style[f] = e);
      }
  };
  Kv = {};
  _.Iv = function (a, b) {
    var c = Kv[b];
    if (!c) {
      var d = _.Ou(b);
      c = d;
      void 0 === a.style[d] &&
        ((d = (Vr ? 'Webkit' : Ur ? 'Moz' : _.Sr ? 'ms' : null) + Pu(d)),
        void 0 !== a.style[d] && (c = d));
      Kv[b] = c;
    }
    return c;
  };
  _.Lv = function (a, b) {
    var c = _.Ru(a);
    return c.defaultView &&
      c.defaultView.getComputedStyle &&
      (a = c.defaultView.getComputedStyle(a, null))
      ? a[b] || a.getPropertyValue(b) || ''
      : '';
  };
  Pg = function (a, b) {
    return (
      _.Lv(a, b) ||
      (a.currentStyle ? a.currentStyle[b] : null) ||
      (a.style && a.style[b])
    );
  };
  Sh = function (a) {
    try {
      return a.getBoundingClientRect();
    } catch (b) {
      return { left: 0, top: 0, right: 0, bottom: 0 };
    }
  };
  Mv = function (a) {
    if (_.Sr && !(8 <= Number(ds))) return a.offsetParent;
    var b = _.Ru(a),
      c = Pg(a, 'position'),
      d = 'fixed' == c || 'absolute' == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
      if (
        (11 == a.nodeType && a.host && (a = a.host),
        (c = Pg(a, 'position')),
        (d = d && 'static' == c && a != b.documentElement && a != b.body),
        !d &&
          (a.scrollWidth > a.clientWidth ||
            a.scrollHeight > a.clientHeight ||
            'fixed' == c ||
            'absolute' == c ||
            'relative' == c))
      )
        return a;
    return null;
  };
  Nv = function (a) {
    var b = _.Ru(a),
      c = new _.Qh(0, 0);
    var d = b ? _.Ru(b) : document;
    d = !_.Sr || 9 <= Number(ds) || _.Vu(Su(d).j) ? d.documentElement : d.body;
    if (a == d) return c;
    a = Sh(a);
    d = Su(b).j;
    b = Xu(d);
    d = d.parentWindow || d.defaultView;
    b =
      _.Sr && d.pageYOffset != b.scrollTop
        ? new _.Qh(b.scrollLeft, b.scrollTop)
        : new _.Qh(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
    c.x = a.left + b.x;
    c.y = a.top + b.y;
    return c;
  };
  Ph = function (a, b) {
    var c = new _.Qh(0, 0),
      d = _.Yu(_.Ru(a));
    if (!Qr(d, 'parent')) return c;
    do {
      var e = d == b ? Nv(a) : _.Ov(a);
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
  };
  _.Ov = function (a) {
    a = Sh(a);
    return new _.Qh(a.left, a.top);
  };
  _.Pv = function (a, b) {
    'number' == typeof a && (a = (b ? Math.round(a) : a) + 'px');
    return a;
  };
  _.Qg = function (a, b) {
    if ('none' != Pg(b, 'display')) return a(b);
    var c = b.style,
      d = c.display,
      e = c.visibility,
      f = c.position;
    c.visibility = 'hidden';
    c.position = 'absolute';
    c.display = 'inline';
    a = a(b);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a;
  };
  _.Rg = function (a) {
    var b = a.offsetWidth,
      c = a.offsetHeight,
      d = Vr && !b && !c;
    return (void 0 === b || d) && a.getBoundingClientRect
      ? ((a = Sh(a)), new _.Th(a.right - a.left, a.bottom - a.top))
      : new _.Th(b, c);
  };
  var Di = function (a) {
    a = Hv(Hd(a)) || a;
    a = a.google_unique_id;
    return 'number' === typeof a ? a : 0;
  };
  var Qv = function (a, b) {
    if (v.globalThis.fetch)
      v.globalThis
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
  var Rv = function (a) {
    _.S.call(this, a);
  };
  _.O(Rv, _.S);
  var Sv = function (a) {
    _.S.call(this, a);
  };
  _.O(Sv, _.S);
  var jh = function (a) {
    _.S.call(this, a);
  };
  _.O(jh, _.S);
  var eh = function (a) {
    _.S.call(this, a);
  };
  _.O(eh, _.S);
  var bh = function (a) {
    _.S.call(this, a);
  };
  _.O(bh, _.S);
  var Tv = function (a) {
    _.S.call(this, a);
  };
  _.O(Tv, _.S);
  var $g = function (a) {
    _.S.call(this, a, -1, Uv);
  };
  _.O($g, _.S);
  $g.prototype.getTagSessionCorrelator = function () {
    return ij(this, 2);
  };
  var Uv = [4],
    gh = [6, 7, 8, 9, 11];
  var vh = function (a) {
    _.S.call(this, a, -1, Vv);
  };
  _.O(vh, _.S);
  var Vv = [3];
  var sh = function (a) {
    _.S.call(this, a, -1, Wv);
  };
  _.O(sh, _.S);
  var Wv = [4, 5];
  var rh = function (a) {
    _.S.call(this, a, -1, Xv);
  };
  _.O(rh, _.S);
  rh.prototype.getTagSessionCorrelator = function () {
    return ij(this, 1);
  };
  var Xv = [2];
  var qh = function (a) {
    _.S.call(this, a);
  };
  _.O(qh, _.S);
  var yh = [4];
  _.U = function () {
    this.J = this.J;
    this.ua = this.ua;
  };
  _.U.prototype.J = !1;
  _.U.prototype.Ea = function () {
    this.J || ((this.J = !0), this.D());
  };
  _.$m = function (a, b) {
    _.Qm(a, _.hr(Od, b));
  };
  _.Qm = function (a, b) {
    a.J ? b() : (a.ua || (a.ua = []), a.ua.push(b));
  };
  _.U.prototype.D = function () {
    if (this.ua) for (; this.ua.length; ) this.ua.shift()();
  };
  var Yv = function (a, b, c, d, e) {
      this.l = a;
      this.B = b;
      this.H = c;
      this.D = d;
      this.J = e;
      this.j = [];
      this.m = null;
    },
    Zv = function (a) {
      null !== a.m && (clearTimeout(a.m), (a.m = null));
      if (a.j.length) {
        var b = Kd(a.j);
        a.B(a.l + '?e=1', b);
        a.j = [];
      }
    };
  Yv.prototype.De = function () {
    var a = eb.apply(0, arguments),
      b = this;
    this.J && 65536 <= Kd(this.j.concat(a)).length && Zv(this);
    this.j.push.apply(this.j, _.Ld(a));
    this.j.length >= this.D && Zv(this);
    this.j.length &&
      null === this.m &&
      (this.m = setTimeout(function () {
        Zv(b);
      }, this.H));
  };
  var yq = function (a, b, c) {
    Yv.call(
      this,
      'https://pagead2.googlesyndication.com/pagead/ping',
      Qv,
      void 0 === a ? 1e3 : a,
      void 0 === b ? 100 : b,
      (void 0 === c ? !1 : c) && !!v.globalThis.fetch
    );
  };
  _.O(yq, Yv);
  var V = function (a, b) {
      this.j = a;
      this.defaultValue = void 0 === b ? !1 : b;
    },
    $v = function (a, b) {
      this.j = a;
      this.defaultValue = void 0 === b ? 0 : b;
    },
    aw = function (a, b) {
      this.j = a;
      this.defaultValue = void 0 === b ? '' : b;
    },
    bw = function (a) {
      var b = void 0 === b ? [] : b;
      this.j = a;
      this.defaultValue = b;
    };
  var cw,
    dw,
    ew,
    Ei,
    fw,
    Ml,
    gw,
    hw,
    iw,
    ml,
    jw,
    kw,
    lw,
    mw,
    nw,
    $n,
    ow,
    pw,
    qw,
    rw,
    sw,
    tw,
    uw,
    vw,
    ww,
    xw,
    yw,
    zw,
    mo,
    Aw,
    Bw,
    Cw,
    Fp,
    Dw,
    Ew,
    Fw,
    Gw,
    Hw,
    Qk,
    Jw,
    Kw,
    em,
    Lw,
    Mw,
    Nw,
    lh,
    Ow,
    Pw,
    Qw,
    Rw,
    Sw,
    Tw,
    Uw,
    Vw,
    Ww,
    Xw,
    Yw,
    Bk,
    yk,
    Zw,
    $w,
    Xh,
    ax,
    bx,
    cx,
    fl,
    dx,
    xq,
    ex,
    fx,
    gx,
    hx,
    ix,
    jx,
    kx,
    lx,
    Kf,
    mx,
    nx,
    ox,
    px,
    qx,
    rx,
    Je,
    sx,
    tx,
    kf,
    We,
    Ge,
    of,
    jf,
    mf,
    ux,
    nf,
    vx,
    wx,
    pq,
    qq,
    Xl,
    rq,
    oq,
    xx,
    yx,
    zx,
    Ax,
    Xm,
    Bx,
    mm,
    Dx,
    Ex,
    Fx;
  cw = new V(1122, !0);
  dw = new aw(3);
  ew = new bw(481);
  Ei = new $v(7, 0.1);
  fw = new V(212);
  Ml = new $v(474069761);
  gw = new V(490560535);
  hw = new $v(455645877);
  iw = new $v(462420536);
  ml = new V(476475256);
  jw = new $v(448338836, 0.01);
  kw = new $v(427198696);
  lw = new $v(438663674);
  mw = new V(23);
  nw = new V(369430);
  $n = new V(508245849);
  ow = new V(477812799);
  pw = new $v(408380992, 0.01);
  qw = new $v(377289019, 1e4);
  rw = new V(499549170, !0);
  sw = new $v(488);
  tw = new $v(529, 20);
  uw = new aw(10);
  vw = new V(489217043);
  ww = new V(495013820);
  xw = new $v(428094087);
  yw = new V(488999963, !0);
  zw = new V(492198798, !0);
  mo = new $v(447000223, 0.01);
  Aw = new V(360245597, !0);
  Bw = new $v(494, 1e4);
  Cw = new V(505725833, !0);
  Fp = new V(485209195);
  Dw = new V(499996722);
  Ew = new V(471855283);
  Fw = new V(220);
  Gw = new V(200);
  Hw = new V(494337909);
  Qk = new V(486179632, !0);
  _.Iw = new V(503331120);
  Jw = new V(501943234, !0);
  Kw = new V(504138873, !0);
  em = new $v(492, 0.01);
  Lw = new $v(363650251);
  Mw = new $v(474872234);
  Nw = new V(83);
  lh = new V(85);
  Ow = new V(437061931);
  Pw = new bw(466086960);
  Qw = new V(45388169);
  Rw = new $v(398776877, 6e4);
  Sw = new $v(374201269, 6e4);
  Tw = new $v(371364213, 6e4);
  Uw = new $v(376149757, 0.0025);
  Vw = new V(453275889);
  Ww = new V(377936516, !0);
  Xw = new V(495689921);
  Yw = new $v(24);
  Bk = new bw(1);
  yk = new aw(2, '1-0-40');
  Zw = new V(441529989);
  $w = new V(437308144);
  Xh = new $v(504377075);
  ax = new bw(489);
  bx = new V(392065905);
  cx = new $v(360245595, 500);
  fl = new V(45397804);
  dx = new V(424117738);
  xq = new $v(397316938, 1e3);
  ex = new V(440148282, !0);
  fx = new V(399705355);
  gx = new V(508672391);
  hx = new V(502572081);
  ix = new V(501);
  jx = new bw(472572701);
  kx = new V(439828594);
  lx = new V(483962503);
  Kf = new V(1930);
  mx = new $v(494575051);
  nx = new bw(489560439);
  ox = new bw(505762507);
  px = new V(501917474);
  qx = new V(453);
  rx = new V(454);
  Je = new $v(360261971);
  sx = new $v(1921, 72);
  tx = new $v(1920, 12);
  kf = new $v(426169222, 1e3);
  We = new $v(1917, 300);
  Ge = new $v(1916, 0.001);
  of = new bw(471270390);
  jf = new V(490296336, !0);
  mf = new V(474633725);
  ux = new V(476437529);
  nf = new V(478009624);
  vx = new V(506738118);
  wx = new V(506738119);
  pq = new V(77);
  qq = new V(78);
  Xl = new V(309);
  rq = new V(80);
  oq = new V(76);
  xx = new V(84);
  yx = new V(1958);
  zx = new V(1973);
  Ax = new V(188);
  Xm = new V(1975);
  Bx = new V(1974);
  _.Cx = new $v(1972);
  mm = new $v(1158);
  Dx = new V(50227136);
  Ex = new V(485990406);
  Fx = new V(501411886, !0);
  var Gx = function (a, b, c, d, e, f) {
      try {
        var g = a.j,
          h = _.Ad('SCRIPT', g);
        h.async = !0;
        $a(h, b);
        g.head.appendChild(h);
        h.addEventListener('load', function () {
          e();
          d && g.head.removeChild(h);
        });
        h.addEventListener('error', function () {
          0 < c ? Gx(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f());
        });
      } catch (l) {
        f();
      }
    },
    Hx = function (a, b, c, d) {
      c = void 0 === c ? function () {} : c;
      d = void 0 === d ? function () {} : d;
      Gx(Su(a), b, 0, !1, c, d);
    };
  Aa({
    oh: 0,
    nh: 1,
    kh: 2,
    fh: 3,
    lh: 4,
    gh: 5,
    mh: 6,
    ih: 7,
    jh: 8,
    eh: 9,
    hh: 10,
  }).map(function (a) {
    return Number(a);
  });
  Aa({ rh: 0, sh: 1, qh: 2 }).map(function (a) {
    return Number(a);
  });
  var Ix = function (a) {
    var b = a.document,
      c = function () {
        if (!a.frames.googlefcPresent)
          if (b.body) {
            var d = _.Ad('IFRAME', b);
            d.style.display = 'none';
            d.style.width = '0px';
            d.style.height = '0px';
            d.style.border = 'none';
            d.style.zIndex = '-1000';
            d.style.left = '-1000px';
            d.style.top = '-1000px';
            d.name = 'googlefcPresent';
            b.body.appendChild(d);
          } else a.setTimeout(c, 5);
      };
    c();
  };
  var je, Co;
  _.Jx = function (a, b, c, d, e) {
    Qd(
      a,
      b,
      void 0 === c ? null : c,
      void 0 === d ? !1 : d,
      void 0 === e ? !1 : e
    );
  };
  je = function (a, b) {
    var c = void 0 === c ? !1 : c;
    var d = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=' + b;
    _.Fk(a, function (e, f) {
      e && (d += '&' + f + '=' + encodeURIComponent(e));
    });
    Co(d, c);
  };
  Co = function (a, b) {
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
      : _.Jx(c, a, void 0, b, d);
  };
  var Kx = function (a) {
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
    Lx = function (a, b) {
      b = void 0 === b ? {} : b;
      _.U.call(this);
      this.m = a;
      this.j = null;
      this.l = {};
      this.o = 0;
      var c;
      this.L = null != (c = b.oc) ? c : 500;
      var d;
      this.H = null != (d = b.Se) ? d : !1;
      this.B = null;
    };
  _.O(Lx, _.U);
  Lx.prototype.D = function () {
    this.l = {};
    this.B && (_.Pd(this.m, 'message', this.B), delete this.B);
    delete this.l;
    delete this.m;
    delete this.j;
    _.U.prototype.D.call(this);
  };
  var Nx = function (a) {
    return 'function' === typeof a.m.__tcfapi || null != Mx(a);
  };
  Lx.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.H },
      d = _.or(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.L &&
      (e = setTimeout(function () {
        c.tcString = 'tcunavailable';
        c.internalErrorState = 1;
        d();
      }, this.L));
    var f = function (g, h) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Kx(c)),
          (c.internalBlockOnErrors = b.H),
          (h && 0 === c.internalErrorState) ||
            ((c.tcString = 'tcunavailable'), h || (c.internalErrorState = 3)))
        : ((c.tcString = 'tcunavailable'), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Ox(this, 'addEventListener', f);
    } catch (g) {
      (c.tcString = 'tcunavailable'),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Lx.prototype.removeEventListener = function (a) {
    a && a.listenerId && Ox(this, 'removeEventListener', null, a.listenerId);
  };
  var Px = function (a, b) {
      var c = void 0 === c ? '755' : c;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var d = a.publisher.restrictions[b];
          if (void 0 !== d) {
            d = d[void 0 === c ? '755' : c];
            break a;
          }
        }
        d = void 0;
      }
      if (0 === d) return !1;
      a.purpose && a.vendor
        ? ((d = a.vendor.consents),
          (c = !(!d || !d[void 0 === c ? '755' : c])) &&
          '1' === b &&
          a.purposeOneTreatment &&
          'CH' === a.publisherCC
            ? (b = !0)
            : (c && ((a = a.purpose.consents), (c = !(!a || !a[b]))), (b = c)))
        : (b = !0);
      return b;
    },
    Ox = function (a, b, c, d) {
      c || (c = function () {});
      if ('function' === typeof a.m.__tcfapi) (a = a.m.__tcfapi), a(b, 2, c, d);
      else if (Mx(a)) {
        Qx(a);
        var e = ++a.o;
        a.l[e] = c;
        a.j &&
          ((c = {}),
          a.j.postMessage(
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
    Mx = function (a) {
      if (a.j) return a.j;
      a.j = qv(a.m, '__tcfapiLocator');
      return a.j;
    },
    Qx = function (a) {
      a.B ||
        ((a.B = function (b) {
          try {
            var c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.l[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        _.hb(a.m, 'message', a.B));
    },
    Rx = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Kx(a));
      return 'error' === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (je({ e: String(a.internalErrorState) }, 'tcfe'), !1)
          : !0
        : 'loaded' !== a.cmpStatus ||
          ('tcloaded' !== a.eventStatus &&
            'useractioncomplete' !== a.eventStatus)
        ? !1
        : !0;
    },
    Sx = function (a, b) {
      return !1 === a.gdprApplies
        ? !0
        : b.every(function (c) {
            return Px(a, c);
          });
    };
  var Tx = function (a, b, c) {
      this.j = a;
      this.D = b;
      this.m = void 0 === c ? function () {} : c;
    },
    Ux = function (a, b, c) {
      return new Tx(a, b, c);
    };
  Tx.prototype.start = function () {
    if (this.j === this.j.top)
      try {
        Ix(this.j), Vx(this);
      } catch (a) {}
  };
  var Vx = function (a) {
    var b = pb(
      lr('https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}'),
      { id: a.D, ers: 3 }
    );
    Hx(
      a.j,
      b,
      function () {
        a.m(!0);
      },
      function () {
        a.m(!1);
      }
    );
  };
  var Wx = v.Promise;
  var Xx = function (a) {
    this.D = a;
  };
  Xx.prototype.m = function (a, b, c) {
    this.D.then(function (d) {
      d.m(a, b, c);
    });
  };
  Xx.prototype.j = function (a, b) {
    return this.D.then(function (c) {
      return c.j(a, b);
    });
  };
  var Yx = function (a) {
    this.data = a;
  };
  var Zx = function (a) {
    this.D = a;
  };
  Zx.prototype.m = function (a, b, c) {
    c = void 0 === c ? [] : c;
    var d = new MessageChannel();
    $x(d.port1, b);
    this.D.postMessage(a, [d.port2].concat(c));
  };
  Zx.prototype.j = function (a, b) {
    var c = this;
    return new Wx(function (d) {
      c.m(a, d, b);
    });
  };
  var ay = function (a, b) {
      $x(a, b);
      return new Zx(a);
    },
    $x = function (a, b) {
      b &&
        (a.onmessage = function (c) {
          b(new Yx(c.data, ay(c.ports[0])));
        });
    };
  var Xi = function (a) {
      var b = a.Nc,
        c = void 0 === a.Ja ? 'ZNWN1d' : a.Ja,
        d = void 0 === a.onMessage ? void 0 : a.onMessage,
        e = void 0 === a.Yc ? void 0 : a.Yc;
      return by({
        destination: a.destination,
        je: function () {
          return b.contentWindow;
        },
        Tf: cy(a.origin),
        Ja: c,
        onMessage: d,
        Yc: e,
      });
    },
    by = function (a) {
      var b = a.destination,
        c = a.je,
        d = a.Tf,
        e = void 0 === a.Td ? void 0 : a.Td,
        f = a.Ja,
        g = void 0 === a.onMessage ? void 0 : a.onMessage,
        h = void 0 === a.Yc ? void 0 : a.Yc,
        l = Object.create(null);
      d.forEach(function (k) {
        l[k] = !0;
      });
      return new Xx(
        new Wx(function (k, m) {
          var n = function (p) {
            p.source &&
              p.source === c() &&
              !0 === l[p.origin] &&
              (p.data.n || p.data) === f &&
              (b.removeEventListener('message', n, !1),
              e && p.data.t !== e
                ? m(
                    Error(
                      'Token mismatch while establishing channel "' +
                        f +
                        '". Expected ' +
                        e +
                        ', but received ' +
                        p.data.t +
                        '.'
                    )
                  )
                : (k(ay(p.ports[0], g)), h && h(p)));
          };
          b.addEventListener('message', n, !1);
        })
      );
    },
    cy = function (a) {
      a = 'string' === typeof a ? [a] : a;
      var b = Object.create(null);
      a.forEach(function (c) {
        if ('null' === c)
          throw Error(
            'Receiving from null origin not allowed without token verification. Please use NullOriginConnector.'
          );
        b[c] = !0;
      });
      return a;
    };
  var th = (0, C.zd)(function (a) {
    return 'string' === typeof a;
  }, 'string');
  var dy = navigator,
    ey = function (a) {
      var b = 1,
        c;
      if (void 0 != a && '' != a)
        for (b = 0, c = a.length - 1; 0 <= c; c--) {
          var d = a.charCodeAt(c);
          b = ((b << 6) & 268435455) + d + (d << 14);
          d = b & 266338304;
          b = 0 != d ? b ^ (d >> 21) : b;
        }
      return b;
    },
    fy = function (a, b) {
      if (!a || 'none' == a) return 1;
      a = String(a);
      'auto' == a &&
        ((a = b),
        'www.' == a.substring(0, 4) && (a = a.substring(4, a.length)));
      return ey(a.toLowerCase());
    },
    gy = RegExp('^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$'),
    hy = RegExp('^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$'),
    iy = RegExp('^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$');
  var Nh = function (a) {
      return !!a && a.top == a;
    },
    jy = function (a, b, c) {
      b = b || a.google_ad_width;
      c = c || a.google_ad_height;
      if (Nh(a)) return !1;
      var d = a.document,
        e = d.documentElement;
      if (b && c) {
        var f = 1,
          g = 1;
        a.innerHeight
          ? ((f = a.innerWidth), (g = a.innerHeight))
          : e && e.clientHeight
          ? ((f = e.clientWidth), (g = e.clientHeight))
          : d.body && ((f = d.body.clientWidth), (g = d.body.clientHeight));
        if (g > 2 * c || f > 2 * b) return !1;
      }
      return !0;
    };
  var ky = function (a) {
    a = void 0 === a ? window : a;
    return a._gmptnl
      ? 'afma-gpt-sdk-a'
      : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl
      ? 'afma-gpt-sdk-i'
      : null;
  };
  var xi = function () {
    this.j = [];
    this.m = -1;
  };
  xi.prototype.set = function (a, b) {
    b = void 0 === b ? !0 : b;
    0 <= a &&
      52 > a &&
      _.t(Number, 'isInteger').call(Number, a) &&
      this.j[a] !== b &&
      ((this.j[a] = b), (this.m = -1));
  };
  xi.prototype.get = function (a) {
    return !!this.j[a];
  };
  var zi = function (a) {
    -1 === a.m &&
      (a.m = sr(a.j, function (b, c, d) {
        return c ? b + Math.pow(2, d) : b;
      }));
    return a.m;
  };
  var ce = function (a) {
    _.S.call(this, a);
  };
  _.O(ce, _.S);
  var Yd = function (a) {
      var b = new ce();
      return _.y(b, 1, a, 0);
    },
    Xd = function (a, b) {
      return _.y(a, 2, b, 0);
    };
  var ae = function (a) {
    _.S.call(this, a, -1, ly);
  };
  _.O(ae, _.S);
  var Wd = function (a, b) {
      hf(a, 1, ce, b);
    },
    Vd = yd(ae),
    ly = [1];
  var my = function (a, b, c, d) {
    _.U.call(this);
    this.F = b;
    this.T = c;
    this.C = d;
    this.o = new v.Map();
    this.M = 0;
    this.l = new v.Map();
    this.L = new v.Map();
    this.H = new v.Map();
    this.B = void 0;
    this.m = a;
  };
  _.O(my, _.U);
  my.prototype.D = function () {
    delete this.j;
    this.o.clear();
    this.l.clear();
    this.L.clear();
    this.H.clear();
    this.B && (_.Pd((0, C.K)(this.m), 'message', this.B), delete this.B);
    delete this.m;
    delete this.C;
    _.U.prototype.D.call(this);
  };
  var ny = function (a) {
      if (a.j) return a.j;
      a.T && a.T((0, C.K)(a.m)) ? (a.j = a.m) : (a.j = qv((0, C.K)(a.m), a.F));
      var b;
      return null != (b = a.j) ? b : null;
    },
    py = function (a, b) {
      if (ny(a))
        if (a.j === a.m) {
          var c = a.o.get('getDataWithCallback');
          c && c((0, C.K)(a.j), b);
        } else if ((c = a.l.get('getDataWithCallback')) && c.Ed) {
          oy(a);
          var d = ++a.M;
          a.L.set(d, c.qe);
          a.H.set(d, c.oe(b));
          a.j.postMessage(c.Ed(b, d), '*');
        }
    },
    oy = function (a) {
      a.B ||
        ((a.B = function (b) {
          try {
            var c = a.C ? a.C(b) : void 0;
            if (c) {
              var d = c.Od,
                e = a.L.get(d);
              if (e) {
                a.L.delete(d);
                var f = a.H.get(c.Od);
                a.H.delete(d);
                e(f, c.payload);
              }
            }
          } catch (g) {}
        }),
        _.hb((0, C.K)(a.m), 'message', a.B));
    };
  var qy = function (a, b) {
      (0, C.K)(a.__uspapi)('getUSPData', 1, function (c, d) {
        b.Tb({ Vb: null != c ? c : void 0, ee: d ? void 0 : 2 });
      });
    },
    ry = {
      oe: function (a) {
        return a.Tb;
      },
      Ed: function (a, b) {
        a = {};
        return (
          (a.__uspapiCall = { callId: b, command: 'getUSPData', version: 1 }), a
        );
      },
      qe: function (a, b) {
        b = b.__uspapiReturn;
        var c;
        a({
          Vb: null != (c = b.returnValue) ? c : void 0,
          ee: b.success ? void 0 : 2,
        });
      },
    },
    sy = function (a) {
      _.U.call(this);
      this.caller = new my(
        a,
        '__uspapiLocator',
        function (b) {
          return 'function' === typeof b.__uspapi;
        },
        ke
      );
      this.caller.o.set('getDataWithCallback', qy);
      this.caller.l.set('getDataWithCallback', ry);
    };
  _.O(sy, _.U);
  sy.prototype.D = function () {
    this.caller.Ea();
    _.U.prototype.D.call(this);
  };
  sy.prototype.l = function () {
    return !!ny(this.caller);
  };
  sy.prototype.L = function (a) {
    var b = {};
    if (this.l()) {
      var c = _.or(function () {
        a(b);
      });
      py(this.caller, {
        Tb: function (d) {
          d.ee || (b = (0, C.K)(d.Vb));
          c();
        },
      });
      setTimeout(c, 500);
    } else a(b);
  };
  var uy = function (a) {
    _.S.call(this, a, -1, ty);
  };
  _.O(uy, _.S);
  var ty = [1, 2];
  var vy = function (a) {
    _.S.call(this, a);
  };
  _.O(vy, _.S);
  var le = yd(vy);
  var wy = function (a, b) {
      a = a.googlefc || (a.googlefc = {});
      a.__fci = a.__fci || [];
      a.__fci.push(b.command, function (c) {
        c = le(c);
        b.Tb({ Vb: c });
      });
    },
    xy = {
      oe: function (a) {
        return a.Tb;
      },
      Ed: function (a, b) {
        var c = {};
        return (c.__fciCall = { callId: b, command: a.command }), c;
      },
      qe: function (a, b) {
        a({ Vb: b });
      },
    },
    Ym = function (a) {
      _.U.call(this);
      this.j = null;
      this.B = !1;
      this.caller = new my(a, 'googlefcPresent', void 0, me);
      this.caller.o.set('getDataWithCallback', wy);
      this.caller.l.set('getDataWithCallback', xy);
    };
  _.O(Ym, _.U);
  Ym.prototype.D = function () {
    this.caller.Ea();
    _.U.prototype.D.call(this);
  };
  Ym.prototype.m = function () {
    this.B || ((this.j = ny(this.caller)), (this.B = !0));
    return !!this.j;
  };
  Ym.prototype.o = function (a) {
    var b = this;
    return new v.Promise(function (c) {
      b.m() &&
        py(b.caller, {
          command: a,
          Tb: function (d) {
            c((0, C.K)(d.Vb));
          },
        });
    });
  };
  var pe = function (a) {
      this.j = a || { cookie: '' };
    },
    Ay = function () {
      var a = yy;
      if (!_.q.navigator.cookieEnabled) return !1;
      if (!a.isEmpty()) return !0;
      a.set('TESTCOOKIESENABLED', '1', { Fd: 60 });
      if ('1' !== a.get('TESTCOOKIESENABLED')) return !1;
      zy(a, 'TESTCOOKIESENABLED');
      return !0;
    };
  pe.prototype.set = function (a, b, c) {
    var d = !1;
    if ('object' === typeof c) {
      var e = c.Xh;
      d = c.ig || !1;
      var f = c.domain || void 0;
      var g = c.path || void 0;
      var h = c.Fd;
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === h && (h = -1);
    this.j.cookie =
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
  pe.prototype.get = function (a, b) {
    for (
      var c = a + '=', d = (this.j.cookie || '').split(';'), e = 0, f;
      e < d.length;
      e++
    ) {
      f = gq(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
      if (f == a) return '';
    }
    return b;
  };
  var zy = function (a, b, c, d) {
    a.get(b);
    a.set(b, '', { Fd: 0, path: c, domain: d });
  };
  pe.prototype.isEmpty = function () {
    return !this.j.cookie;
  };
  pe.prototype.clear = function () {
    for (
      var a = (this.j.cookie || '').split(';'), b = [], c = [], d, e, f = 0;
      f < a.length;
      f++
    )
      (e = gq(a[f])),
        (d = e.indexOf('=')),
        -1 == d
          ? (b.push(''), c.push(e))
          : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--) zy(this, b[a]);
  };
  var yy = new pe('undefined' == typeof document ? null : document);
  var By = null,
    Cy = function () {
      if (null === By) {
        By = '';
        try {
          var a = '';
          try {
            a = _.q.top.location.hash;
          } catch (c) {
            a = _.q.location.hash;
          }
          if (a) {
            var b = a.match(/\bdeid=([\d,]+)/);
            By = b ? b[1] : '';
          }
        } catch (c) {}
      }
      return By;
    };
  var Dy = function (a, b, c, d, e) {
    this.label = a;
    this.type = b;
    this.value = c;
    this.duration = void 0 === d ? 0 : d;
    this.uniqueId = Math.random();
    this.slotId = e;
    this.taskId = void 0;
  };
  var nh = _.q.performance,
    Ey = !!(nh && nh.mark && nh.measure && nh.clearMarks),
    oh = di(function () {
      var a;
      if ((a = Ey)) (a = Cy()), (a = !!a.indexOf && 0 <= a.indexOf('1337'));
      return a;
    }),
    Fy = function (a, b) {
      this.m = [];
      var c = null;
      b &&
        ((b.google_js_reporting_queue = b.google_js_reporting_queue || []),
        (this.m = b.google_js_reporting_queue),
        (c = b.google_measure_js_timing));
      this.j = oh() || (null != c ? c : Math.random() < a);
    },
    Gy = function (a, b, c, d, e, f) {
      a.j &&
        ((b = new Dy(b, c, d, void 0 === e ? 0 : e, f)),
        !a.j || 2048 < a.m.length || a.m.push(b));
    };
  Fy.prototype.start = function (a, b) {
    if (!this.j) return null;
    a = new Dy(a, b, _.te() || _.se());
    b = 'goog_' + a.label + '_' + a.uniqueId + '_start';
    nh && oh() && nh.mark(b);
    return a;
  };
  Fy.prototype.end = function (a) {
    if (this.j && 'number' === typeof a.value) {
      a.duration = (_.te() || _.se()) - a.value;
      var b = 'goog_' + a.label + '_' + a.uniqueId + '_end';
      nh && oh() && nh.mark(b);
      !this.j || 2048 < this.m.length || this.m.push(a);
    }
  };
  var Qo = function (a, b, c) {
    var d = _.te();
    d && Gy(a, b, 9, d, 0, c);
  };
  var hl = function (a) {
    a = Error.call(this, a);
    this.message = a.message;
    'stack' in a && (this.stack = a.stack);
    _.t(Object, 'setPrototypeOf').call(Object, this, hl.prototype);
  };
  _.O(hl, Error);
  hl.prototype.name = 'PublisherInputError';
  var Hy = function (a) {
    a = Error.call(this, a);
    this.message = a.message;
    'stack' in a && (this.stack = a.stack);
    _.t(Object, 'setPrototypeOf').call(Object, this, Hy.prototype);
  };
  _.O(Hy, Error);
  Hy.prototype.name = 'ServerError';
  var Iy = function (a) {
    a = Error.call(this, a);
    this.message = a.message;
    'stack' in a && (this.stack = a.stack);
    _.t(Object, 'setPrototypeOf').call(Object, this, Iy.prototype);
  };
  _.O(Iy, Error);
  Iy.prototype.name = 'NetworkError';
  _.xe = function (a) {
    var b = 'qb';
    if (a.qb && a.hasOwnProperty(b)) return a.qb;
    b = new a();
    return (a.qb = b);
  };
  var ye = function () {};
  ye.prototype.m = function () {};
  ye.prototype.J = function () {};
  ye.prototype.D = function () {
    return [];
  };
  ye.prototype.j = function () {
    return [];
  };
  var ag = function (a, b) {
    a.m = we(1, b, function () {});
    a.D = function (c) {
      return we(2, b, function () {
        return [];
      })(c, 2);
    };
    a.j = function () {
      return we(3, b, function () {
        return [];
      })(2);
    };
    a.J = function (c) {
      we(16, b, function () {})(c, 2);
    };
  };
  var Be = function () {
    var a = {};
    this.j = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.m = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.D = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.J = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.B = function () {};
  };
  var Jy = function () {};
  Jy.j = function () {
    throw Error('Must be overridden');
  };
  var Fe = function () {
    this.j = 0;
  };
  _.O(Fe, Jy);
  Fe.qb = void 0;
  Fe.j = function () {
    return Fe.qb ? Fe.qb : (Fe.qb = new Fe());
  };
  var Ky = function () {
      this.cache = {};
    },
    Oe = function () {
      Ly || ((My = _.Ce(tx)), (Ny = _.Ce(sx)), (Ly = new Ky()));
      return Ly;
    },
    Oy = function (a) {
      if (void 0 !== a)
        for (
          var b = _.A(_.t(Object, 'keys').call(Object, a)), c = b.next();
          !c.done;
          c = b.next()
        )
          if (((c = c.value), _.t(c, 'startsWith').call(c, '_GESPSK')))
            try {
              a.removeItem(c);
            } catch (d) {}
      Ly = new Ky();
    },
    lf = function (a) {
      var b = x(a, 3);
      if (!b) return 3;
      if (void 0 === x(a, 2)) return 4;
      a = Date.now();
      return a > b + 36e5 * Ny ? 2 : a > b + 36e5 * My ? 1 : 0;
    };
  Ky.prototype.get = function (a, b) {
    if (this.cache[a]) return { lb: this.cache[a], success: !0 };
    var c = '';
    try {
      c = b.getItem('_GESPSK-' + a);
    } catch (g) {
      var d;
      Ie(6, a, null == (d = g) ? void 0 : d.message);
      return { lb: null, success: !1 };
    }
    if (!c) return { lb: null, success: !0 };
    try {
      var e = fu(c);
      this.cache[a] = e;
      return { lb: e, success: !0 };
    } catch (g) {
      var f;
      Ie(5, a, null == (f = g) ? void 0 : f.message);
      return { lb: null, success: !1 };
    }
  };
  Ky.prototype.set = function (a, b) {
    var c = (0, C.K)(x(a, 1)),
      d = '_GESPSK-' + c;
    _.z(a, 3, Date.now());
    try {
      b.setItem(d, Zd(a));
    } catch (f) {
      var e;
      Ie(7, c, null == (e = f) ? void 0 : e.message);
      return !1;
    }
    this.cache[c] = a;
    return !0;
  };
  var Ly = null,
    My = 24,
    Ny = 72;
  var Pe = function (a) {
    return 'string' === typeof a ? a : a instanceof Error ? a.message : null;
  };
  var Py = function (a) {
    _.U.call(this);
    this.l = a;
    this.j = [];
    this.m = [];
    this.B = [];
  };
  _.O(Py, _.U);
  var Ry = function (a, b, c) {
    a.m.push({ mb: void 0 === c ? !1 : c, ob: b });
    _.H(Ew) && Qy(b, a.l);
  };
  Py.prototype.D = function () {
    this.j.length = 0;
    this.B.length = 0;
    if (_.H(Ew))
      for (var a = _.A(this.m), b = a.next(); !b.done; b = a.next())
        b.value.ob.pd();
    this.m.length = 0;
    _.U.prototype.D.call(this);
  };
  _.Eg = function () {
    var a = this;
    this.promise = new v.Promise(function (b, c) {
      a.resolve = b;
      a.reject = c;
    });
  };
  var Sy = function (a) {
    a = Error.call(this, a);
    this.message = a.message;
    'stack' in a && (this.stack = a.stack);
    _.t(Object, 'setPrototypeOf').call(Object, this, Sy.prototype);
    this.name = 'InputError';
  };
  _.O(Sy, Error);
  var Ty = function () {
      this.Na = !1;
    },
    Uy = function () {
      Ty.apply(this, arguments);
      this.j = [];
      this.Db = new _.Eg();
    };
  _.O(Uy, Ty);
  var Wy = function (a, b) {
      a.Na || ((a.Na = !0), (a.tb = b), a.Db.resolve(b), _.H(Ew) && Vy(a));
    },
    Xy = function (a, b) {
      a.Na = !0;
      a.Ld = b;
      a.Db.reject(b);
      _.H(Ew) && Vy(a);
    },
    Vy = function (a) {
      for (var b = _.A(a.j), c = b.next(); !c.done; c = b.next())
        (c = c.value), c(a.tb);
      a.j.length = 0;
    };
  Uy.prototype.pd = function () {
    this.j.length = 0;
  };
  var Qy = function (a, b) {
    _.H(Ew) && a.j.push(b);
  };
  Dq.Object.defineProperties(Uy.prototype, {
    promise: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.Db.promise;
      },
    },
    wb: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.Na;
      },
    },
    error: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.Ld;
      },
    },
  });
  var tp = function () {
    Uy.apply(this, arguments);
  };
  _.O(tp, Uy);
  tp.prototype.G = function (a) {
    Wy(this, a);
  };
  var Yy = function (a, b) {
      Wy(a, null != b ? b : null);
    },
    Zy = function (a) {
      Wy(a, null);
    },
    $y = function (a, b) {
      b.then(function (c) {
        a.G(c);
      });
    };
  tp.prototype.za = function (a) {
    this.Na ||
      ((this.Na = !0),
      (this.tb = null),
      (this.Ld = a),
      this.Db.reject(a),
      _.H(Ew) && Vy(this));
  };
  var az = function (a) {
    this.Na = !1;
    this.ib = a;
  };
  _.O(az, Ty);
  az.prototype.wb = function () {
    return this.ib.Na;
  };
  az.prototype.cc = function () {
    return null != this.ib.tb;
  };
  Dq.Object.defineProperties(az.prototype, {
    error: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.ib.Ld;
      },
    },
  });
  var bz = function (a) {
    az.call(this, a);
    this.ib = a;
  };
  _.O(bz, az);
  Dq.Object.defineProperties(bz.prototype, {
    value: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return (0, C.K)(this.ib.tb);
      },
    },
  });
  var cz = function (a) {
    az.call(this, a);
    this.ib = a;
  };
  _.O(cz, az);
  Dq.Object.defineProperties(cz.prototype, {
    value: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        var a;
        return null != (a = this.ib.tb) ? a : null;
      },
    },
  });
  var dz = function () {
    az.apply(this, arguments);
  };
  _.O(dz, az);
  Dq.Object.defineProperties(dz.prototype, {
    value: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        var a;
        return null != (a = this.ib.tb) ? a : null;
      },
    },
  });
  var ez = function () {
    Uy.apply(this, arguments);
  };
  _.O(ez, Uy);
  ez.prototype.notify = function () {
    Wy(this, null);
  };
  var fz = function (a, b) {
      b.then(function () {
        a.notify();
      });
    },
    gz = function (a, b) {
      b = void 0 === b ? !1 : b;
      Uy.call(this);
      var c = this;
      this.D = a;
      this.m = 0;
      if (_.H(Ew)) {
        a = {};
        for (
          var d = _.A(this.D), e = d.next();
          !e.done;
          a = { Nb: a.Nb }, e = d.next()
        )
          (a.Nb = e.value),
            Qy(
              a.Nb,
              (function (f) {
                return function (g) {
                  c.m += 1;
                  f.Nb.error
                    ? Xy(c, f.Nb.error)
                    : b || null !== g
                    ? Wy(c, null != g ? g : null)
                    : c.m === c.D.length && Wy(c, null);
                };
              })(a)
            );
      } else
        _.t(v.Promise, 'any')
          .call(
            v.Promise,
            a.map(function (f) {
              return f.promise.then(function (g) {
                if (b || null != g) return g;
                throw g;
              });
            })
          )
          .then(
            function (f) {
              c.Na = !0;
              c.tb = f;
              c.Db.resolve(f);
            },
            function () {
              c.Na = !0;
              c.Db.resolve(null);
            }
          );
    };
  _.O(gz, Uy);
  var iz = function (a, b) {
    _.U.call(this);
    var c = this;
    this.id = a;
    this.oc = b;
    this.ja = this.ia = this.ha = this.L = !1;
    this.ya = -1;
    this.B = new Py(function () {
      hz(c);
    });
    _.$m(this, this.B);
  };
  _.O(iz, _.U);
  iz.prototype.start = function () {
    var a = this,
      b,
      c;
    return _.jb(function (d) {
      switch (d.j) {
        case 1:
          if (a.L) return d.return();
          a.L = !0;
          d.D = 2;
          b = a;
          return kb(d, qf(a.B.m, a.oc), 4);
        case 4:
          b.ya = d.m;
          if (a.J) {
            d.j = 5;
            break;
          }
          for (var e = 0, f = _.A(a.B.B), g = f.next(); !g.done; g = f.next()) {
            if (!g.value.cc()) throw Error('missing input: ' + a.id + '/' + e);
            ++e;
          }
          return kb(d, a.j(), 5);
        case 5:
          mb(d, 0);
          break;
        case 2:
          c = nb(d);
          if (a.J) return d.return();
          c instanceof Sy ? a.H(c) : c instanceof Error && (a.T(c), a.m(c));
          d.j = 0;
      }
    });
  };
  var hz = function (a) {
      if (!a.L && a.ha)
        try {
          var b = a.B.m,
            c = a.oc
              ? b.filter(function (g) {
                  return !g.mb;
                })
              : b,
            d = b.filter(function (g) {
              return g.mb;
            }),
            e,
            f =
              null ==
              (e = _.t(b, 'find').call(b, function (g) {
                return void 0 !== g.ob.error;
              }))
                ? void 0
                : e.ob.error;
          if (f) throw ((a.L = !0), f);
          if (
            !c.some(function (g) {
              return !g.ob.wb;
            })
          ) {
            if (
              d.length &&
              (a.ia ||
                ((a.ia = !0),
                setTimeout(function () {
                  a.ja = !0;
                  hz(a);
                }, a.oc)),
              d.some(function (g) {
                return !g.ob.wb;
              }) && !a.ja)
            )
              return;
            a.L = !0;
            a.j();
          }
        } catch (g) {
          a.J ||
            (g instanceof Sy ? a.H(g) : g instanceof Error && (a.T(g), a.m(g)));
        }
    },
    W = function (a) {
      var b = new tp();
      a.B.j.push(b);
      return b;
    },
    jz = function (a) {
      var b = new ez();
      a.B.j.push(b);
      return b;
    },
    X = function (a, b) {
      Ry(a.B, b);
      b = new bz(b);
      a.B.B.push(b);
      return b;
    },
    Y = function (a, b) {
      Ry(a.B, b);
      return new cz(b);
    },
    kz = function (a, b) {
      Ry(a.B, b, !0);
      return new cz(b);
    },
    lz = function (a, b) {
      Ry(a.B, b);
    },
    mz = function (a, b) {
      b = new gz(b);
      Ry(a.B, b);
      b = new bz(b);
      a.B.B.push(b);
      return b;
    };
  iz.prototype.H = function () {};
  iz.prototype.m = function (a) {
    if (this.B.j.length) {
      a = new Sy(a.message);
      for (var b = _.A(this.B.j), c = b.next(); !c.done; c = b.next())
        (c = c.value), c.wb || Xy(c, a);
    }
  };
  var nz = function (a, b) {
    iz.call(this, a);
    this.id = a;
    this.C = b;
  };
  _.O(nz, iz);
  nz.prototype.T = function (a) {
    this.C(this.id, a);
  };
  var vf = function (a, b, c) {
    nz.call(this, 1041, c);
    this.storage = b;
    this.l = X(this, a);
  };
  _.O(vf, nz);
  vf.prototype.j = function () {
    var a = this.l.value;
    Oe().set(a, this.storage) && null != x(a, 2) && Ie(27, (0, C.K)(x(a, 1)));
  };
  var zf = function (a, b) {
    nz.call(this, 1048, b);
    this.l = W(this);
    this.o = W(this);
    this.F = X(this, a);
  };
  _.O(zf, nz);
  zf.prototype.j = function () {
    var a = this.F.value,
      b = function (c) {
        var d = {};
        Ie(
          c,
          (0, C.K)(x(a, 1)),
          null,
          ((d.tic = String(Math.round((Date.now() - (0, C.K)(x(a, 3))) / 6e4))),
          d)
        );
      };
    switch (lf(a)) {
      case 0:
        b(24);
        break;
      case 1:
        b(25);
        this.o.G(a);
        break;
      case 2:
        b(26);
        this.l.G(a);
        break;
      case 3:
        Ie(9, (0, C.K)(x(a, 1)));
        this.l.G(a);
        break;
      case 4:
        b(23), this.l.G(a);
    }
  };
  var Rf = function (a, b, c) {
    nz.call(this, 1049, c);
    this.storage = b;
    lz(this, a);
  };
  _.O(Rf, nz);
  Rf.prototype.j = function () {
    for (var a = _.A(Ve(this.storage)), b = a.next(); !b.done; b = a.next()) {
      b = b.value;
      var c = Oe().get(b, this.storage).lb;
      if (c) {
        var d = lf(c);
        if (2 === d || 3 === d) {
          d = void 0;
          var e = Oe();
          c = (0, C.K)(x(c, 1));
          try {
            this.storage.removeItem('_GESPSK-' + c), delete e.cache[c];
          } catch (f) {
            Ie(8, c, null == (d = f) ? void 0 : d.message);
          }
          Ie(40, b);
        }
      }
    }
  };
  var Df = function (a, b, c, d) {
    nz.call(this, 658, d);
    this.collectorFunction = a;
    this.storage = c;
    this.l = W(this);
    this.F = W(this);
    this.o = Y(this, b);
  };
  _.O(Df, nz);
  Df.prototype.j = function () {
    var a = this;
    if (this.o.value) {
      var b = function (f) {
          a.l.G({ id: (0, C.K)(x(f, 1)), collectorGeneratedData: x(f, 2) });
        },
        c = this.o.value,
        d = (0, C.K)(x(c, 1)),
        e = lf(c);
      rf(c);
      switch (e) {
        case 0:
          b(c);
          break;
        case 1:
          b(c);
          this.F.G(c);
          break;
        case 3:
        case 2:
        case 4:
          _.z(c, 2, null),
            Qe(d, c, this.collectorFunction, this.storage).then(b);
      }
    } else Zy(this.l);
  };
  var uf = function (a, b, c) {
    nz.call(this, 1027, c);
    this.Cc = a;
    this.storage = b;
    this.l = W(this);
    this.o = W(this);
  };
  _.O(uf, nz);
  uf.prototype.j = function () {
    var a = Oe().get(this.Cc, this.storage).lb;
    a ||
      ((a = Ke(gf(this.Cc), _.Ce(Je) || null)),
      (a = _.z(a, 3, Date.now())),
      this.o.G(a.za(Re(new Te(), 100))));
    this.l.G(a);
  };
  var xf = function (a, b, c) {
    nz.call(this, 1029, c);
    this.l = b;
    this.o = W(this);
    this.F = X(this, a);
  };
  _.O(xf, nz);
  xf.prototype.j = function () {
    var a = this.F.value,
      b = Date.now();
    if (this.l) {
      var c = (0, C.K)(Le(a, 8)),
        d,
        e = null != (d = ws(a)) ? d : b;
      c < this.l &&
        Ke(
          a,
          Math.min(
            c + Number(((this.l * (b / 1e3 / 60 - e)) / 60).toFixed(3)),
            this.l
          )
        );
    }
    this.o.G(a);
  };
  var Af = function (a, b, c) {
    nz.call(this, 1047, c);
    this.collectorFunction = a;
    this.o = W(this);
    this.l = W(this);
    this.F = W(this);
    this.M = X(this, b);
  };
  _.O(Af, nz);
  Af.prototype.j = function () {
    var a = this,
      b = this.M.value,
      c = (0, C.K)(x(b, 1));
    Ie(18, c);
    try {
      var d = _.se();
      this.collectorFunction()
        .then(function (e) {
          Ie(29, c, null, { delta: String(_.se() - d) });
          a.o.G(_.z(b, 2, e));
          Yy(a.F, e);
        })
        .catch(function (e) {
          Ie(28, c, sf(e));
          a.l.G(b.za(Re(new Te(), 106)));
        });
    } catch (e) {
      Ie(1, c, sf(e)), this.l.G(b.za(Re(new Te(), 107)));
    }
  };
  var yf = function (a, b, c) {
    nz.call(this, 1030, c);
    this.F = b;
    this.l = W(this);
    this.o = W(this);
    this.M = X(this, a);
  };
  _.O(yf, nz);
  yf.prototype.j = function () {
    var a = this.M.value,
      b,
      c = null != (b = Le(a, 8)) ? b : 0,
      d;
    b = null != (d = ws(a)) ? d : Date.now();
    1 > c && this.F
      ? ((d = {}),
        Ie(
          22,
          (0, C.K)(x(a, 1)),
          null,
          ((d.t = String(b)), (d.cr = String(c)), (d.cs = String(lf(a))), d)
        ),
        this.o.G(a.za(Re(new Te(), 104))))
      : this.l.G(a);
  };
  var Ef = function (a, b, c, d) {
    nz.call(this, 662, d);
    this.l = a;
    this.storage = c;
    this.o = X(this, b);
  };
  _.O(Ef, nz);
  Ef.prototype.j = function () {
    var a = this;
    Ue().then(function () {
      var b = (0, C.K)(a.o.value);
      Qe((0, C.K)(x(b, 1)), b, a.l, a.storage);
    });
  };
  var wf = function (a, b, c) {
    nz.call(this, 1028, c);
    this.o = b;
    this.l = W(this);
    this.F = X(this, a);
  };
  _.O(wf, nz);
  wf.prototype.j = function () {
    var a = this.F.value,
      b = (0, C.K)(x(a, 1));
    this.o &&
      (null == Le(a, 8) && (Ie(33, b), Ke(a, this.o)),
      null == x(a, 7) &&
        (Ie(34, b), _.z(a, 7, Math.round(Date.now() / 1e3 / 60))));
    null != x(a, 3) || Ie(35, b);
    this.l.G(a);
  };
  var Bf = function (a, b, c, d, e) {
    nz.call(this, 1050, e);
    this.M = c;
    this.F = d;
    this.l = W(this);
    this.o = X(this, a);
    this.O = Y(this, b);
  };
  _.O(Bf, nz);
  Bf.prototype.j = function () {
    var a = this.o.value,
      b = (0, C.K)(x(a, 1)),
      c = this.O.value;
    if (null == c) Ie(41, b), a.za(Re(new Te(), 111));
    else if ('string' === typeof c)
      if (!c.length) Ie(20, b);
      else {
        if (c.length > (/^(\d+)$/.test(b) ? this.F : this.M)) {
          var d = {};
          Ie(12, b, null, ((d.sl = String(c.length)), d));
          b = a.za(Re(new Te(), 108));
          Ne(b, 2);
        }
      }
    else Ie(21, b);
    this.l.G(a);
  };
  var tf = function () {
    _.U.apply(this, arguments);
    this.j = [];
  };
  _.O(tf, _.U);
  var I = function (a, b) {
      _.$m(a, b);
      a.j.push(b);
    },
    Ff = function (a, b) {
      b = _.A(b);
      for (var c = b.next(); !c.done; c = b.next()) I(a, c.value);
    },
    Gf = function (a) {
      a = _.A(a.j);
      for (var b = a.next(); !b.done; b = a.next())
        (b = b.value), _.H(Ew) ? ((b.ha = !0), hz(b)) : b.start();
    };
  tf.prototype.D = function () {
    _.U.prototype.D.call(this);
    this.j.length = 0;
  };
  var oz = function (a, b, c, d) {
    nz.call(this, 1059, d);
    this.o = b;
    this.storage = c;
    this.l = W(this);
    this.F = X(this, a);
  };
  _.O(oz, nz);
  oz.prototype.j = function () {
    var a = this.F.value,
      b = a.id,
      c = a.collectorFunction,
      d;
    a = (0, C.K)(null != (d = a.networkCode) ? d : b);
    b = {};
    Ie(42, a, null, ((b.ea = String(Number(this.o))), b));
    $y(this.l, Hf(a, c, this.storage, this.C));
  };
  var pz = function (a, b) {
    nz.call(this, 1057, b);
    this.l = a;
    this.o = W(this);
    this.F = W(this);
  };
  _.O(pz, nz);
  pz.prototype.j = function () {
    if (this.l)
      if ('object' !== typeof this.l)
        Ie(46, 'UNKNOWN_COLLECTOR_ID'), qz(this, 'UNKNOWN_COLLECTOR_ID', 112);
      else {
        var a = this.l.id,
          b = this.l.networkCode;
        a && b && (delete this.l.id, Ie(47, a + ';' + b));
        a = null != b ? b : a;
        'string' !== typeof a
          ? ((b = {}),
            Ie(
              37,
              'INVALID_COLLECTOR_ID',
              null,
              ((b.ii = JSON.stringify(a)), b)
            ),
            qz(this, 'INVALID_COLLECTOR_ID', 102))
          : 'function' !== typeof this.l.collectorFunction
          ? (Ie(14, a), qz(this, a, 105))
          : ((E = Ee(ox)), _.t(E, 'includes')).call(E, a)
          ? (Ie(22, a), qz(this, a, 104))
          : this.F.G(this.l);
      }
    else Ie(39, 'UNKNOWN_COLLECTOR_ID'), qz(this, 'UNKNOWN_COLLECTOR_ID', 110);
  };
  var qz = function (a, b, c) {
    a.o.G(gf(b).za(Re(new Te(), c)));
  };
  var Of = function (a, b, c) {
    var d = void 0 === d ? document : d;
    this.storage = b;
    this.B = c;
    this.Y = d;
    this.J = [];
    this.D = [];
    this.m = [];
    this.j = 0;
    a = _.A(a);
    for (b = a.next(); !b.done; b = a.next()) this.push(b.value);
  };
  aa = Of.prototype;
  aa.push = function (a) {
    a = new pz(a, this.md);
    var b = new vf(a.o, this.storage, this.md),
      c = new oz(a.F, this.B, this.storage, this.md),
      d = new tf();
    Ff(d, [a, b, c]);
    Gf(d);
    a = c.l.promise;
    this.J.push(a);
    b = _.A(this.D);
    for (c = b.next(); !c.done; c = b.next()) a.then(c.value);
  };
  aa.addOnSignalResolveCallback = function (a) {
    this.D.push(a);
    for (var b = _.A(this.J), c = b.next(); !c.done; c = b.next())
      c.value.then(a);
  };
  aa.addErrorHandler = function (a) {
    this.m.push(a);
  };
  aa.clearAllCache = function () {
    var a = this,
      b =
        this.Y.currentScript instanceof HTMLScriptElement
          ? this.Y.currentScript.src
          : '';
    if (1 === this.j) {
      var c = {};
      Ie(49, '', null, ((c.url = b), c));
    } else
      (c = String(Ih(null != b ? b : ''))),
        ((E = Ee(nx)), _.t(E, 'includes')).call(E, c)
          ? ((c = {}), Ie(48, '', null, ((c.url = b), c)))
          : (Oy(this.storage),
            (this.j = 1),
            setTimeout(function () {
              a.j = 0;
            }, 1e3 * _.Ce(mx)),
            (c = {}),
            Ie(43, '', null, ((c.url = b), c)));
  };
  aa.md = function (a, b) {
    for (var c = _.A(this.m), d = c.next(); !d.done; d = c.next())
      (d = d.value), d(a, b);
  };
  var Pf = function (a) {
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
  var Uf = function (a, b) {
    nz.call(this, 1036, b);
    this.l = W(this);
    this.o = X(this, a);
  };
  _.O(Uf, nz);
  Uf.prototype.j = function () {
    var a = this.o.value;
    0 !== lf(a) && this.l.G(a);
  };
  var Vf = function (a, b, c) {
    nz.call(this, 1035, c);
    this.o = b;
    this.l = W(this);
    this.F = X(this, a);
  };
  _.O(Vf, nz);
  Vf.prototype.j = function () {
    var a = this,
      b = this.F.value,
      c = (0, C.K)(x(b, 1)),
      d = this.o.toString(),
      e = {};
    Ie(30, c, null, ((e.url = d), e));
    var f = document.createElement('script');
    f.setAttribute('esp-signal', 'true');
    $a(f, this.o);
    var g = function () {
      var h = {};
      Ie(31, (0, C.K)(c), null, ((h.url = d), h));
      a.l.G(b.za(Re(new Te(), 109)));
      _.Pd(f, 'error', g);
    };
    document.head.appendChild(f);
    _.hb(f, 'error', g);
  };
  var Qf = function (a) {
    nz.call(this, 1046, a);
    this.A = jz(this);
  };
  _.O(Qf, nz);
  Qf.prototype.j = function () {
    var a = this;
    Ue().then(function () {
      return a.A.notify();
    });
  };
  var Tf = new v.Set();
  var rz = 0,
    sz = Id(
      jg(lr('https://pagead2.googlesyndication.com/pagead/expansion_embed.js'))
    );
  var Yf = function () {
      this.j = function () {};
    },
    cg = function (a, b) {
      a.j = we(14, b, function () {});
    };
  var Fh = function (a, b, c) {
      a && null !== b && b != b.top && (b = b.top);
      try {
        return (void 0 === c ? 0 : c)
          ? new _.Th(b.innerWidth, b.innerHeight).round()
          : _.Wu(b || window).round();
      } catch (d) {
        return new _.Th(-12245933, -12245933);
      }
    },
    tz = function (a) {
      return 'CSS1Compat' == a.compatMode ? a.documentElement : a.body;
    },
    Gm = function (a, b) {
      b = void 0 === b ? _.q : b;
      a = a.scrollingElement || tz(a);
      return new _.Qh(
        b.pageXOffset || a.scrollLeft,
        b.pageYOffset || a.scrollTop
      );
    },
    gi = function (a) {
      try {
        return !(
          !a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
        );
      } catch (b) {
        return !1;
      }
    };
  var uz = function (a) {
    _.S.call(this, a);
  };
  _.O(uz, _.S);
  var vz = function (a, b) {
      this.j = a;
      this.D = void 0 === b ? !1 : b;
      this.m = 0;
    },
    xz = function (a, b) {
      if (0 === a.m) {
        if (wz(a, '__gads', b)) b = !0;
        else {
          var c = a.j;
          G(b, 5) &&
            oe(c) &&
            new pe(c.document).set('GoogleAdServingTest', 'Good', void 0);
          if ((c = 'Good' === qe('GoogleAdServingTest', b, a.j))) {
            var d = a.j;
            G(b, 5) && oe(d) && zy(new pe(d.document), 'GoogleAdServingTest');
          }
          b = c;
        }
        a.m = b ? 2 : 1;
      }
      return 2 === a.m;
    },
    wz = function (a, b, c) {
      return c ? qe(b, c, a.j) : null;
    },
    yz = function (a, b, c, d) {
      if (d) {
        var e = x(c, 2) - Date.now() / 1e3;
        e = {
          Fd: a.D ? Math.max(e, 0) : e,
          path: x(c, 3),
          domain: x(c, 4),
          ig: !1,
        };
        a = a.j;
        G(d, 5) && oe(a) && new pe(a.document).set(b, x(c, 1), e);
      }
    },
    zz = function (a, b, c) {
      if (c && qe(b, c, a.j)) {
        var d = a.j.location.hostname;
        if ('localhost' === d) d = ['localhost'];
        else if (((d = d.split('.')), 2 > d.length)) d = [];
        else {
          for (var e = [], f = 0; f < d.length - 1; ++f)
            e.push(d.slice(f).join('.'));
          d = e;
        }
        d = _.A(d);
        for (e = d.next(); !e.done; e = d.next())
          (f = a.j),
            G(c, 5) && oe(f) && zy(new pe(f.document), b, '/', e.value);
      }
    };
  var Az = {},
    Bz =
      ((Az[3] = Id(
        jg(
          lr(
            'https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js'
          )
        )
      )),
      Az);
  ({})[3] = Id(
    jg(
      lr(
        'https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js'
      )
    )
  );
  var Cz = function (a) {
      this.j = a;
      this.m = Mu();
    },
    Dz = function (a) {
      var b = {};
      _.rr(a, function (c) {
        b[c.j] = c.m;
      });
      return b;
    };
  var Ez = P(['https://adservice.google.com/adsid/integrator.', '']),
    Fz = P(['https://adservice.google.ad/adsid/integrator.', '']),
    Gz = P(['https://adservice.google.ae/adsid/integrator.', '']),
    Hz = P(['https://adservice.google.com.af/adsid/integrator.', '']),
    Iz = P(['https://adservice.google.com.ag/adsid/integrator.', '']),
    Jz = P(['https://adservice.google.com.ai/adsid/integrator.', '']),
    Kz = P(['https://adservice.google.al/adsid/integrator.', '']),
    Lz = P(['https://adservice.google.co.ao/adsid/integrator.', '']),
    Mz = P(['https://adservice.google.com.ar/adsid/integrator.', '']),
    Nz = P(['https://adservice.google.as/adsid/integrator.', '']),
    Oz = P(['https://adservice.google.at/adsid/integrator.', '']),
    Pz = P(['https://adservice.google.com.au/adsid/integrator.', '']),
    Qz = P(['https://adservice.google.az/adsid/integrator.', '']),
    Rz = P(['https://adservice.google.com.bd/adsid/integrator.', '']),
    Sz = P(['https://adservice.google.be/adsid/integrator.', '']),
    Tz = P(['https://adservice.google.bf/adsid/integrator.', '']),
    Uz = P(['https://adservice.google.bg/adsid/integrator.', '']),
    Vz = P(['https://adservice.google.com.bh/adsid/integrator.', '']),
    Wz = P(['https://adservice.google.bi/adsid/integrator.', '']),
    Xz = P(['https://adservice.google.bj/adsid/integrator.', '']),
    Yz = P(['https://adservice.google.com.bn/adsid/integrator.', '']),
    Zz = P(['https://adservice.google.com.bo/adsid/integrator.', '']),
    $z = P(['https://adservice.google.com.br/adsid/integrator.', '']),
    aA = P(['https://adservice.google.bs/adsid/integrator.', '']),
    bA = P(['https://adservice.google.bt/adsid/integrator.', '']),
    cA = P(['https://adservice.google.co.bw/adsid/integrator.', '']),
    dA = P(['https://adservice.google.com.bz/adsid/integrator.', '']),
    eA = P(['https://adservice.google.ca/adsid/integrator.', '']),
    fA = P(['https://adservice.google.cd/adsid/integrator.', '']),
    gA = P(['https://adservice.google.cf/adsid/integrator.', '']),
    hA = P(['https://adservice.google.cg/adsid/integrator.', '']),
    iA = P(['https://adservice.google.ch/adsid/integrator.', '']),
    jA = P(['https://adservice.google.ci/adsid/integrator.', '']),
    kA = P(['https://adservice.google.co.ck/adsid/integrator.', '']),
    lA = P(['https://adservice.google.cl/adsid/integrator.', '']),
    mA = P(['https://adservice.google.cm/adsid/integrator.', '']),
    nA = P(['https://adservice.google.com.co/adsid/integrator.', '']),
    oA = P(['https://adservice.google.co.cr/adsid/integrator.', '']),
    pA = P(['https://adservice.google.com.cu/adsid/integrator.', '']),
    qA = P(['https://adservice.google.cv/adsid/integrator.', '']),
    rA = P(['https://adservice.google.com.cy/adsid/integrator.', '']),
    sA = P(['https://adservice.google.cz/adsid/integrator.', '']),
    tA = P(['https://adservice.google.de/adsid/integrator.', '']),
    uA = P(['https://adservice.google.dj/adsid/integrator.', '']),
    vA = P(['https://adservice.google.dk/adsid/integrator.', '']),
    wA = P(['https://adservice.google.dm/adsid/integrator.', '']),
    xA = P(['https://adservice.google.dz/adsid/integrator.', '']),
    yA = P(['https://adservice.google.com.ec/adsid/integrator.', '']),
    zA = P(['https://adservice.google.ee/adsid/integrator.', '']),
    AA = P(['https://adservice.google.com.eg/adsid/integrator.', '']),
    BA = P(['https://adservice.google.es/adsid/integrator.', '']),
    CA = P(['https://adservice.google.com.et/adsid/integrator.', '']),
    DA = P(['https://adservice.google.fi/adsid/integrator.', '']),
    EA = P(['https://adservice.google.com.fj/adsid/integrator.', '']),
    FA = P(['https://adservice.google.fm/adsid/integrator.', '']),
    GA = P(['https://adservice.google.fr/adsid/integrator.', '']),
    HA = P(['https://adservice.google.ga/adsid/integrator.', '']),
    IA = P(['https://adservice.google.ge/adsid/integrator.', '']),
    JA = P(['https://adservice.google.gg/adsid/integrator.', '']),
    KA = P(['https://adservice.google.com.gh/adsid/integrator.', '']),
    LA = P(['https://adservice.google.com.gi/adsid/integrator.', '']),
    MA = P(['https://adservice.google.gl/adsid/integrator.', '']),
    NA = P(['https://adservice.google.gm/adsid/integrator.', '']),
    OA = P(['https://adservice.google.gr/adsid/integrator.', '']),
    PA = P(['https://adservice.google.com.gt/adsid/integrator.', '']),
    QA = P(['https://adservice.google.gy/adsid/integrator.', '']),
    RA = P(['https://adservice.google.com.hk/adsid/integrator.', '']),
    SA = P(['https://adservice.google.hn/adsid/integrator.', '']),
    TA = P(['https://adservice.google.hr/adsid/integrator.', '']),
    UA = P(['https://adservice.google.ht/adsid/integrator.', '']),
    VA = P(['https://adservice.google.hu/adsid/integrator.', '']),
    WA = P(['https://adservice.google.co.id/adsid/integrator.', '']),
    XA = P(['https://adservice.google.ie/adsid/integrator.', '']),
    YA = P(['https://adservice.google.co.il/adsid/integrator.', '']),
    ZA = P(['https://adservice.google.im/adsid/integrator.', '']),
    $A = P(['https://adservice.google.co.in/adsid/integrator.', '']),
    aB = P(['https://adservice.google.iq/adsid/integrator.', '']),
    bB = P(['https://adservice.google.is/adsid/integrator.', '']),
    cB = P(['https://adservice.google.it/adsid/integrator.', '']),
    dB = P(['https://adservice.google.je/adsid/integrator.', '']),
    eB = P(['https://adservice.google.com.jm/adsid/integrator.', '']),
    fB = P(['https://adservice.google.jo/adsid/integrator.', '']),
    gB = P(['https://adservice.google.co.jp/adsid/integrator.', '']),
    hB = P(['https://adservice.google.co.ke/adsid/integrator.', '']),
    iB = P(['https://adservice.google.com.kh/adsid/integrator.', '']),
    jB = P(['https://adservice.google.ki/adsid/integrator.', '']),
    kB = P(['https://adservice.google.kg/adsid/integrator.', '']),
    lB = P(['https://adservice.google.co.kr/adsid/integrator.', '']),
    mB = P(['https://adservice.google.com.kw/adsid/integrator.', '']),
    nB = P(['https://adservice.google.kz/adsid/integrator.', '']),
    oB = P(['https://adservice.google.la/adsid/integrator.', '']),
    pB = P(['https://adservice.google.com.lb/adsid/integrator.', '']),
    qB = P(['https://adservice.google.li/adsid/integrator.', '']),
    rB = P(['https://adservice.google.lk/adsid/integrator.', '']),
    sB = P(['https://adservice.google.co.ls/adsid/integrator.', '']),
    tB = P(['https://adservice.google.lt/adsid/integrator.', '']),
    uB = P(['https://adservice.google.lu/adsid/integrator.', '']),
    vB = P(['https://adservice.google.lv/adsid/integrator.', '']),
    wB = P(['https://adservice.google.com.ly/adsid/integrator.', '']),
    xB = P(['https://adservice.google.md/adsid/integrator.', '']),
    yB = P(['https://adservice.google.me/adsid/integrator.', '']),
    zB = P(['https://adservice.google.mg/adsid/integrator.', '']),
    AB = P(['https://adservice.google.mk/adsid/integrator.', '']),
    BB = P(['https://adservice.google.ml/adsid/integrator.', '']),
    CB = P(['https://adservice.google.com.mm/adsid/integrator.', '']),
    DB = P(['https://adservice.google.mn/adsid/integrator.', '']),
    EB = P(['https://adservice.google.ms/adsid/integrator.', '']),
    FB = P(['https://adservice.google.com.mt/adsid/integrator.', '']),
    GB = P(['https://adservice.google.mu/adsid/integrator.', '']),
    HB = P(['https://adservice.google.mv/adsid/integrator.', '']),
    IB = P(['https://adservice.google.mw/adsid/integrator.', '']),
    JB = P(['https://adservice.google.com.mx/adsid/integrator.', '']),
    KB = P(['https://adservice.google.com.my/adsid/integrator.', '']),
    LB = P(['https://adservice.google.co.mz/adsid/integrator.', '']),
    MB = P(['https://adservice.google.com.na/adsid/integrator.', '']),
    NB = P(['https://adservice.google.com.ng/adsid/integrator.', '']),
    OB = P(['https://adservice.google.com.ni/adsid/integrator.', '']),
    PB = P(['https://adservice.google.ne/adsid/integrator.', '']),
    QB = P(['https://adservice.google.nl/adsid/integrator.', '']),
    RB = P(['https://adservice.google.no/adsid/integrator.', '']),
    SB = P(['https://adservice.google.com.np/adsid/integrator.', '']),
    TB = P(['https://adservice.google.nr/adsid/integrator.', '']),
    UB = P(['https://adservice.google.nu/adsid/integrator.', '']),
    VB = P(['https://adservice.google.co.nz/adsid/integrator.', '']),
    WB = P(['https://adservice.google.com.om/adsid/integrator.', '']),
    XB = P(['https://adservice.google.com.pa/adsid/integrator.', '']),
    YB = P(['https://adservice.google.com.pe/adsid/integrator.', '']),
    ZB = P(['https://adservice.google.com.pg/adsid/integrator.', '']),
    $B = P(['https://adservice.google.com.ph/adsid/integrator.', '']),
    aC = P(['https://adservice.google.com.pk/adsid/integrator.', '']),
    bC = P(['https://adservice.google.pl/adsid/integrator.', '']),
    cC = P(['https://adservice.google.pn/adsid/integrator.', '']),
    dC = P(['https://adservice.google.com.pr/adsid/integrator.', '']),
    eC = P(['https://adservice.google.ps/adsid/integrator.', '']),
    fC = P(['https://adservice.google.pt/adsid/integrator.', '']),
    gC = P(['https://adservice.google.com.py/adsid/integrator.', '']),
    hC = P(['https://adservice.google.com.qa/adsid/integrator.', '']),
    iC = P(['https://adservice.google.ro/adsid/integrator.', '']),
    jC = P(['https://adservice.google.rw/adsid/integrator.', '']),
    kC = P(['https://adservice.google.com.sa/adsid/integrator.', '']),
    lC = P(['https://adservice.google.com.sb/adsid/integrator.', '']),
    mC = P(['https://adservice.google.sc/adsid/integrator.', '']),
    nC = P(['https://adservice.google.se/adsid/integrator.', '']),
    oC = P(['https://adservice.google.com.sg/adsid/integrator.', '']),
    pC = P(['https://adservice.google.sh/adsid/integrator.', '']),
    qC = P(['https://adservice.google.si/adsid/integrator.', '']),
    rC = P(['https://adservice.google.sk/adsid/integrator.', '']),
    sC = P(['https://adservice.google.sn/adsid/integrator.', '']),
    tC = P(['https://adservice.google.so/adsid/integrator.', '']),
    vC = P(['https://adservice.google.sm/adsid/integrator.', '']),
    wC = P(['https://adservice.google.sr/adsid/integrator.', '']),
    xC = P(['https://adservice.google.st/adsid/integrator.', '']),
    yC = P(['https://adservice.google.com.sv/adsid/integrator.', '']),
    zC = P(['https://adservice.google.td/adsid/integrator.', '']),
    AC = P(['https://adservice.google.tg/adsid/integrator.', '']),
    BC = P(['https://adservice.google.co.th/adsid/integrator.', '']),
    CC = P(['https://adservice.google.com.tj/adsid/integrator.', '']),
    DC = P(['https://adservice.google.tl/adsid/integrator.', '']),
    EC = P(['https://adservice.google.tm/adsid/integrator.', '']),
    FC = P(['https://adservice.google.tn/adsid/integrator.', '']),
    GC = P(['https://adservice.google.to/adsid/integrator.', '']),
    HC = P(['https://adservice.google.com.tr/adsid/integrator.', '']),
    IC = P(['https://adservice.google.tt/adsid/integrator.', '']),
    JC = P(['https://adservice.google.com.tw/adsid/integrator.', '']),
    KC = P(['https://adservice.google.co.tz/adsid/integrator.', '']),
    LC = P(['https://adservice.google.com.ua/adsid/integrator.', '']),
    MC = P(['https://adservice.google.co.ug/adsid/integrator.', '']),
    NC = P(['https://adservice.google.co.uk/adsid/integrator.', '']),
    OC = P(['https://adservice.google.com.uy/adsid/integrator.', '']),
    PC = P(['https://adservice.google.co.uz/adsid/integrator.', '']),
    QC = P(['https://adservice.google.com.vc/adsid/integrator.', '']),
    RC = P(['https://adservice.google.co.ve/adsid/integrator.', '']),
    SC = P(['https://adservice.google.vg/adsid/integrator.', '']),
    TC = P(['https://adservice.google.co.vi/adsid/integrator.', '']),
    UC = P(['https://adservice.google.com.vn/adsid/integrator.', '']),
    VC = P(['https://adservice.google.vu/adsid/integrator.', '']),
    WC = P(['https://adservice.google.ws/adsid/integrator.', '']),
    XC = P(['https://adservice.google.rs/adsid/integrator.', '']),
    YC = P(['https://adservice.google.co.za/adsid/integrator.', '']),
    ZC = P(['https://adservice.google.co.zm/adsid/integrator.', '']),
    $C = P(['https://adservice.google.co.zw/adsid/integrator.', '']),
    aD = P(['https://adservice.google.cat/adsid/integrator.', '']),
    bD = new v.Map(
      [
        [
          '.google.com',
          function (a) {
            return B(Ez, a);
          },
        ],
        [
          '.google.ad',
          function (a) {
            return B(Fz, a);
          },
        ],
        [
          '.google.ae',
          function (a) {
            return B(Gz, a);
          },
        ],
        [
          '.google.com.af',
          function (a) {
            return B(Hz, a);
          },
        ],
        [
          '.google.com.ag',
          function (a) {
            return B(Iz, a);
          },
        ],
        [
          '.google.com.ai',
          function (a) {
            return B(Jz, a);
          },
        ],
        [
          '.google.al',
          function (a) {
            return B(Kz, a);
          },
        ],
        [
          '.google.co.ao',
          function (a) {
            return B(Lz, a);
          },
        ],
        [
          '.google.com.ar',
          function (a) {
            return B(Mz, a);
          },
        ],
        [
          '.google.as',
          function (a) {
            return B(Nz, a);
          },
        ],
        [
          '.google.at',
          function (a) {
            return B(Oz, a);
          },
        ],
        [
          '.google.com.au',
          function (a) {
            return B(Pz, a);
          },
        ],
        [
          '.google.az',
          function (a) {
            return B(Qz, a);
          },
        ],
        [
          '.google.com.bd',
          function (a) {
            return B(Rz, a);
          },
        ],
        [
          '.google.be',
          function (a) {
            return B(Sz, a);
          },
        ],
        [
          '.google.bf',
          function (a) {
            return B(Tz, a);
          },
        ],
        [
          '.google.bg',
          function (a) {
            return B(Uz, a);
          },
        ],
        [
          '.google.com.bh',
          function (a) {
            return B(Vz, a);
          },
        ],
        [
          '.google.bi',
          function (a) {
            return B(Wz, a);
          },
        ],
        [
          '.google.bj',
          function (a) {
            return B(Xz, a);
          },
        ],
        [
          '.google.com.bn',
          function (a) {
            return B(Yz, a);
          },
        ],
        [
          '.google.com.bo',
          function (a) {
            return B(Zz, a);
          },
        ],
        [
          '.google.com.br',
          function (a) {
            return B($z, a);
          },
        ],
        [
          '.google.bs',
          function (a) {
            return B(aA, a);
          },
        ],
        [
          '.google.bt',
          function (a) {
            return B(bA, a);
          },
        ],
        [
          '.google.co.bw',
          function (a) {
            return B(cA, a);
          },
        ],
        [
          '.google.com.bz',
          function (a) {
            return B(dA, a);
          },
        ],
        [
          '.google.ca',
          function (a) {
            return B(eA, a);
          },
        ],
        [
          '.google.cd',
          function (a) {
            return B(fA, a);
          },
        ],
        [
          '.google.cf',
          function (a) {
            return B(gA, a);
          },
        ],
        [
          '.google.cg',
          function (a) {
            return B(hA, a);
          },
        ],
        [
          '.google.ch',
          function (a) {
            return B(iA, a);
          },
        ],
        [
          '.google.ci',
          function (a) {
            return B(jA, a);
          },
        ],
        [
          '.google.co.ck',
          function (a) {
            return B(kA, a);
          },
        ],
        [
          '.google.cl',
          function (a) {
            return B(lA, a);
          },
        ],
        [
          '.google.cm',
          function (a) {
            return B(mA, a);
          },
        ],
        [
          '.google.com.co',
          function (a) {
            return B(nA, a);
          },
        ],
        [
          '.google.co.cr',
          function (a) {
            return B(oA, a);
          },
        ],
        [
          '.google.com.cu',
          function (a) {
            return B(pA, a);
          },
        ],
        [
          '.google.cv',
          function (a) {
            return B(qA, a);
          },
        ],
        [
          '.google.com.cy',
          function (a) {
            return B(rA, a);
          },
        ],
        [
          '.google.cz',
          function (a) {
            return B(sA, a);
          },
        ],
        [
          '.google.de',
          function (a) {
            return B(tA, a);
          },
        ],
        [
          '.google.dj',
          function (a) {
            return B(uA, a);
          },
        ],
        [
          '.google.dk',
          function (a) {
            return B(vA, a);
          },
        ],
        [
          '.google.dm',
          function (a) {
            return B(wA, a);
          },
        ],
        [
          '.google.dz',
          function (a) {
            return B(xA, a);
          },
        ],
        [
          '.google.com.ec',
          function (a) {
            return B(yA, a);
          },
        ],
        [
          '.google.ee',
          function (a) {
            return B(zA, a);
          },
        ],
        [
          '.google.com.eg',
          function (a) {
            return B(AA, a);
          },
        ],
        [
          '.google.es',
          function (a) {
            return B(BA, a);
          },
        ],
        [
          '.google.com.et',
          function (a) {
            return B(CA, a);
          },
        ],
        [
          '.google.fi',
          function (a) {
            return B(DA, a);
          },
        ],
        [
          '.google.com.fj',
          function (a) {
            return B(EA, a);
          },
        ],
        [
          '.google.fm',
          function (a) {
            return B(FA, a);
          },
        ],
        [
          '.google.fr',
          function (a) {
            return B(GA, a);
          },
        ],
        [
          '.google.ga',
          function (a) {
            return B(HA, a);
          },
        ],
        [
          '.google.ge',
          function (a) {
            return B(IA, a);
          },
        ],
        [
          '.google.gg',
          function (a) {
            return B(JA, a);
          },
        ],
        [
          '.google.com.gh',
          function (a) {
            return B(KA, a);
          },
        ],
        [
          '.google.com.gi',
          function (a) {
            return B(LA, a);
          },
        ],
        [
          '.google.gl',
          function (a) {
            return B(MA, a);
          },
        ],
        [
          '.google.gm',
          function (a) {
            return B(NA, a);
          },
        ],
        [
          '.google.gr',
          function (a) {
            return B(OA, a);
          },
        ],
        [
          '.google.com.gt',
          function (a) {
            return B(PA, a);
          },
        ],
        [
          '.google.gy',
          function (a) {
            return B(QA, a);
          },
        ],
        [
          '.google.com.hk',
          function (a) {
            return B(RA, a);
          },
        ],
        [
          '.google.hn',
          function (a) {
            return B(SA, a);
          },
        ],
        [
          '.google.hr',
          function (a) {
            return B(TA, a);
          },
        ],
        [
          '.google.ht',
          function (a) {
            return B(UA, a);
          },
        ],
        [
          '.google.hu',
          function (a) {
            return B(VA, a);
          },
        ],
        [
          '.google.co.id',
          function (a) {
            return B(WA, a);
          },
        ],
        [
          '.google.ie',
          function (a) {
            return B(XA, a);
          },
        ],
        [
          '.google.co.il',
          function (a) {
            return B(YA, a);
          },
        ],
        [
          '.google.im',
          function (a) {
            return B(ZA, a);
          },
        ],
        [
          '.google.co.in',
          function (a) {
            return B($A, a);
          },
        ],
        [
          '.google.iq',
          function (a) {
            return B(aB, a);
          },
        ],
        [
          '.google.is',
          function (a) {
            return B(bB, a);
          },
        ],
        [
          '.google.it',
          function (a) {
            return B(cB, a);
          },
        ],
        [
          '.google.je',
          function (a) {
            return B(dB, a);
          },
        ],
        [
          '.google.com.jm',
          function (a) {
            return B(eB, a);
          },
        ],
        [
          '.google.jo',
          function (a) {
            return B(fB, a);
          },
        ],
        [
          '.google.co.jp',
          function (a) {
            return B(gB, a);
          },
        ],
        [
          '.google.co.ke',
          function (a) {
            return B(hB, a);
          },
        ],
        [
          '.google.com.kh',
          function (a) {
            return B(iB, a);
          },
        ],
        [
          '.google.ki',
          function (a) {
            return B(jB, a);
          },
        ],
        [
          '.google.kg',
          function (a) {
            return B(kB, a);
          },
        ],
        [
          '.google.co.kr',
          function (a) {
            return B(lB, a);
          },
        ],
        [
          '.google.com.kw',
          function (a) {
            return B(mB, a);
          },
        ],
        [
          '.google.kz',
          function (a) {
            return B(nB, a);
          },
        ],
        [
          '.google.la',
          function (a) {
            return B(oB, a);
          },
        ],
        [
          '.google.com.lb',
          function (a) {
            return B(pB, a);
          },
        ],
        [
          '.google.li',
          function (a) {
            return B(qB, a);
          },
        ],
        [
          '.google.lk',
          function (a) {
            return B(rB, a);
          },
        ],
        [
          '.google.co.ls',
          function (a) {
            return B(sB, a);
          },
        ],
        [
          '.google.lt',
          function (a) {
            return B(tB, a);
          },
        ],
        [
          '.google.lu',
          function (a) {
            return B(uB, a);
          },
        ],
        [
          '.google.lv',
          function (a) {
            return B(vB, a);
          },
        ],
        [
          '.google.com.ly',
          function (a) {
            return B(wB, a);
          },
        ],
        [
          '.google.md',
          function (a) {
            return B(xB, a);
          },
        ],
        [
          '.google.me',
          function (a) {
            return B(yB, a);
          },
        ],
        [
          '.google.mg',
          function (a) {
            return B(zB, a);
          },
        ],
        [
          '.google.mk',
          function (a) {
            return B(AB, a);
          },
        ],
        [
          '.google.ml',
          function (a) {
            return B(BB, a);
          },
        ],
        [
          '.google.com.mm',
          function (a) {
            return B(CB, a);
          },
        ],
        [
          '.google.mn',
          function (a) {
            return B(DB, a);
          },
        ],
        [
          '.google.ms',
          function (a) {
            return B(EB, a);
          },
        ],
        [
          '.google.com.mt',
          function (a) {
            return B(FB, a);
          },
        ],
        [
          '.google.mu',
          function (a) {
            return B(GB, a);
          },
        ],
        [
          '.google.mv',
          function (a) {
            return B(HB, a);
          },
        ],
        [
          '.google.mw',
          function (a) {
            return B(IB, a);
          },
        ],
        [
          '.google.com.mx',
          function (a) {
            return B(JB, a);
          },
        ],
        [
          '.google.com.my',
          function (a) {
            return B(KB, a);
          },
        ],
        [
          '.google.co.mz',
          function (a) {
            return B(LB, a);
          },
        ],
        [
          '.google.com.na',
          function (a) {
            return B(MB, a);
          },
        ],
        [
          '.google.com.ng',
          function (a) {
            return B(NB, a);
          },
        ],
        [
          '.google.com.ni',
          function (a) {
            return B(OB, a);
          },
        ],
        [
          '.google.ne',
          function (a) {
            return B(PB, a);
          },
        ],
        [
          '.google.nl',
          function (a) {
            return B(QB, a);
          },
        ],
        [
          '.google.no',
          function (a) {
            return B(RB, a);
          },
        ],
        [
          '.google.com.np',
          function (a) {
            return B(SB, a);
          },
        ],
        [
          '.google.nr',
          function (a) {
            return B(TB, a);
          },
        ],
        [
          '.google.nu',
          function (a) {
            return B(UB, a);
          },
        ],
        [
          '.google.co.nz',
          function (a) {
            return B(VB, a);
          },
        ],
        [
          '.google.com.om',
          function (a) {
            return B(WB, a);
          },
        ],
        [
          '.google.com.pa',
          function (a) {
            return B(XB, a);
          },
        ],
        [
          '.google.com.pe',
          function (a) {
            return B(YB, a);
          },
        ],
        [
          '.google.com.pg',
          function (a) {
            return B(ZB, a);
          },
        ],
        [
          '.google.com.ph',
          function (a) {
            return B($B, a);
          },
        ],
        [
          '.google.com.pk',
          function (a) {
            return B(aC, a);
          },
        ],
        [
          '.google.pl',
          function (a) {
            return B(bC, a);
          },
        ],
        [
          '.google.pn',
          function (a) {
            return B(cC, a);
          },
        ],
        [
          '.google.com.pr',
          function (a) {
            return B(dC, a);
          },
        ],
        [
          '.google.ps',
          function (a) {
            return B(eC, a);
          },
        ],
        [
          '.google.pt',
          function (a) {
            return B(fC, a);
          },
        ],
        [
          '.google.com.py',
          function (a) {
            return B(gC, a);
          },
        ],
        [
          '.google.com.qa',
          function (a) {
            return B(hC, a);
          },
        ],
        [
          '.google.ro',
          function (a) {
            return B(iC, a);
          },
        ],
        [
          '.google.rw',
          function (a) {
            return B(jC, a);
          },
        ],
        [
          '.google.com.sa',
          function (a) {
            return B(kC, a);
          },
        ],
        [
          '.google.com.sb',
          function (a) {
            return B(lC, a);
          },
        ],
        [
          '.google.sc',
          function (a) {
            return B(mC, a);
          },
        ],
        [
          '.google.se',
          function (a) {
            return B(nC, a);
          },
        ],
        [
          '.google.com.sg',
          function (a) {
            return B(oC, a);
          },
        ],
        [
          '.google.sh',
          function (a) {
            return B(pC, a);
          },
        ],
        [
          '.google.si',
          function (a) {
            return B(qC, a);
          },
        ],
        [
          '.google.sk',
          function (a) {
            return B(rC, a);
          },
        ],
        [
          '.google.sn',
          function (a) {
            return B(sC, a);
          },
        ],
        [
          '.google.so',
          function (a) {
            return B(tC, a);
          },
        ],
        [
          '.google.sm',
          function (a) {
            return B(vC, a);
          },
        ],
        [
          '.google.sr',
          function (a) {
            return B(wC, a);
          },
        ],
        [
          '.google.st',
          function (a) {
            return B(xC, a);
          },
        ],
        [
          '.google.com.sv',
          function (a) {
            return B(yC, a);
          },
        ],
        [
          '.google.td',
          function (a) {
            return B(zC, a);
          },
        ],
        [
          '.google.tg',
          function (a) {
            return B(AC, a);
          },
        ],
        [
          '.google.co.th',
          function (a) {
            return B(BC, a);
          },
        ],
        [
          '.google.com.tj',
          function (a) {
            return B(CC, a);
          },
        ],
        [
          '.google.tl',
          function (a) {
            return B(DC, a);
          },
        ],
        [
          '.google.tm',
          function (a) {
            return B(EC, a);
          },
        ],
        [
          '.google.tn',
          function (a) {
            return B(FC, a);
          },
        ],
        [
          '.google.to',
          function (a) {
            return B(GC, a);
          },
        ],
        [
          '.google.com.tr',
          function (a) {
            return B(HC, a);
          },
        ],
        [
          '.google.tt',
          function (a) {
            return B(IC, a);
          },
        ],
        [
          '.google.com.tw',
          function (a) {
            return B(JC, a);
          },
        ],
        [
          '.google.co.tz',
          function (a) {
            return B(KC, a);
          },
        ],
        [
          '.google.com.ua',
          function (a) {
            return B(LC, a);
          },
        ],
        [
          '.google.co.ug',
          function (a) {
            return B(MC, a);
          },
        ],
        [
          '.google.co.uk',
          function (a) {
            return B(NC, a);
          },
        ],
        [
          '.google.com.uy',
          function (a) {
            return B(OC, a);
          },
        ],
        [
          '.google.co.uz',
          function (a) {
            return B(PC, a);
          },
        ],
        [
          '.google.com.vc',
          function (a) {
            return B(QC, a);
          },
        ],
        [
          '.google.co.ve',
          function (a) {
            return B(RC, a);
          },
        ],
        [
          '.google.vg',
          function (a) {
            return B(SC, a);
          },
        ],
        [
          '.google.co.vi',
          function (a) {
            return B(TC, a);
          },
        ],
        [
          '.google.com.vn',
          function (a) {
            return B(UC, a);
          },
        ],
        [
          '.google.vu',
          function (a) {
            return B(VC, a);
          },
        ],
        [
          '.google.ws',
          function (a) {
            return B(WC, a);
          },
        ],
        [
          '.google.rs',
          function (a) {
            return B(XC, a);
          },
        ],
        [
          '.google.co.za',
          function (a) {
            return B(YC, a);
          },
        ],
        [
          '.google.co.zm',
          function (a) {
            return B(ZC, a);
          },
        ],
        [
          '.google.co.zw',
          function (a) {
            return B($C, a);
          },
        ],
        [
          '.google.cat',
          function (a) {
            return B(aD, a);
          },
        ],
      ].map(function (a) {
        var b = _.A(a);
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
  var cD = function (a, b, c) {
    var d = _.Ad('LINK', a);
    try {
      d.rel = 'preload';
      if (b instanceof lg) var e = Za(b).toString();
      else {
        if (b instanceof Ra) var f = Sa(b);
        else {
          if (b instanceof Ra) var g = b;
          else {
            b = 'object' == typeof b && b.Ta ? b.Ka() : String(b);
            b: {
              var h = b;
              if (Ir) {
                try {
                  var l = new URL(h);
                } catch (p) {
                  var k = 'https:';
                  break b;
                }
                k = l.protocol;
              } else
                c: {
                  var m = document.createElement('a');
                  try {
                    m.href = h;
                  } catch (p) {
                    k = void 0;
                    break c;
                  }
                  var n = m.protocol;
                  k = ':' === n || '' === n ? 'https:' : n;
                }
            }
            'javascript:' === k && (b = 'about:invalid#zClosurez');
            g = _.fb(b);
          }
          f = Sa(g);
        }
        e = f;
      }
      d.href = e;
    } catch (p) {
      return;
    }
    d.as = 'script';
    c && d.setAttribute('nonce', c);
    if ((a = a.getElementsByTagName('head')[0]))
      try {
        a.appendChild(d);
      } catch (p) {}
  };
  var fg = /^data-(?!xml)[_a-z][_a-z.0-9-]*$/;
  var wg = _.q,
    dD = function (a) {
      var b = new v.Map([['domain', _.q.location.hostname]]);
      xg[3] >= re() && b.set('adsid', xg[1]);
      return Jd(bD.get(a).js, b);
    },
    xg,
    eD,
    vg = function () {
      wg = _.q;
      xg = wg.googleToken = wg.googleToken || {};
      var a = re();
      (xg[1] && xg[3] > a && 0 < xg[2]) ||
        ((xg[1] = ''), (xg[2] = -1), (xg[3] = -1), (xg[4] = ''), (xg[6] = ''));
      eD = wg.googleIMState = wg.googleIMState || {};
      bD.has(eD[1]) || (eD[1] = '.google.com');
      Array.isArray(eD[5]) || (eD[5] = []);
      'boolean' !== typeof eD[6] && (eD[6] = !1);
      Array.isArray(eD[7]) || (eD[7] = []);
      'number' !== typeof eD[8] && (eD[8] = 0);
    },
    fD = function (a) {
      vg();
      bD.has(a) && (eD[1] = a);
    },
    yg = {
      xd: function () {
        return 0 < eD[8];
      },
      bg: function () {
        eD[8]++;
      },
      cg: function () {
        0 < eD[8] && eD[8]--;
      },
      dg: function () {
        eD[8] = 0;
      },
      Zh: function () {
        return !1;
      },
      Jc: function () {
        return eD[5];
      },
      Xd: function (a) {
        try {
          a();
        } catch (b) {
          _.q.setTimeout(function () {
            throw b;
          }, 0);
        }
      },
      ve: function () {
        if (!yg.xd()) {
          var a = _.q.document,
            b = function (e) {
              e = dD(e);
              a: {
                try {
                  var f = Ku();
                  break a;
                } catch (g) {}
                f = void 0;
              }
              cD(a, e.toString(), f);
              f = _.Ad('SCRIPT', a);
              f.type = 'text/javascript';
              f.onerror = function () {
                return _.q.processGoogleToken({}, 2);
              };
              $a(f, e);
              try {
                (a.head || a.body || a.documentElement).appendChild(f), yg.bg();
              } catch (g) {}
            },
            c = eD[1];
          b(c);
          '.google.com' != c && b('.google.com');
          b = {};
          var d = ((b.newToken = 'FBT'), b);
          _.q.setTimeout(function () {
            return _.q.processGoogleToken(d, 1);
          }, 1e3);
        }
      },
    },
    gD = function (a) {
      _.q.processGoogleToken =
        _.q.processGoogleToken ||
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
          vg();
          1 == c ? yg.dg() : yg.cg();
          var l = (wg.googleToken = wg.googleToken || {}),
            k =
              0 == c &&
              b &&
              'string' === typeof b &&
              !e &&
              'number' === typeof f &&
              0 < f &&
              'number' === typeof g &&
              0 < g &&
              'string' === typeof h;
          e = e && !yg.xd() && (!(xg[3] >= re()) || 'NT' == xg[1]);
          var m = !(xg[3] >= re()) && 0 != c;
          if (k || e || m)
            (e = re()),
              (f = e + 1e3 * f),
              (g = e + 1e3 * g),
              1e-5 > Math.random() &&
                _.Jx(
                  _.q,
                  'https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=' +
                    c
                ),
              (l[5] = c),
              (l[1] = b),
              (l[2] = f),
              (l[3] = g),
              (l[4] = h),
              (l[6] = d),
              vg();
          if (k || !yg.xd()) {
            c = yg.Jc();
            for (b = 0; b < c.length; b++) yg.Xd(c[b]);
            c.length = 0;
          }
        };
      zg(a);
    };
  var Wo = function (a, b) {
      b = void 0 === b ? {} : b;
      this.root = b.root ? b.root : null;
      this.H = b.rootMargin
        ? Ag(b.rootMargin)
        : [
            { value: 0, type: 'px' },
            { value: 0, type: 'px' },
            { value: 0, type: 'px' },
            { value: 0, type: 'px' },
          ];
      this.rootMargin = _.Lc(this.H, function (c) {
        return '' + c.value + c.type;
      }).join(' ');
      this.o = Cg(b.threshold);
      this.L = a;
      this.j = [];
      this.J = [];
      this.B = !1;
      this.m = null;
      this.D = pr(this.l, 100, this);
    },
    hD = function (a) {
      if (a.root) var b = Dg(a.root);
      else {
        var c = _.Wu(window);
        b = {
          top: 0,
          right: c.width,
          bottom: c.height,
          left: 0,
          width: c.width,
          height: c.height,
        };
      }
      a = _.Lc(a.H, function (d, e) {
        return 'px' == d.type
          ? d.value
          : (d.value * (e % 2 ? b.width : b.height)) / 100;
      });
      return {
        top: b.top - a[0],
        right: b.right + a[1],
        bottom: b.bottom + a[2],
        left: b.left - a[3],
        width: b.width + a[1] + a[3],
        height: b.height + a[0] + a[2],
      };
    },
    iD = function (a, b, c) {
      if (!b || b.isIntersecting != c.isIntersecting) return !0;
      var d = b.intersectionRatio,
        e = c.intersectionRatio;
      return d == e
        ? !1
        : _.Tg(a.o, function (f) {
            return f < d != f < e;
          });
    };
  Wo.prototype.l = function () {
    var a = this,
      b = hD(this);
    _.rr(this.j, function (c) {
      var d = c.target,
        e = Dg(d),
        f = e.width * e.height;
      var g = Math.max(b.top, e.top);
      var h = Math.min(b.right, e.right),
        l = Math.min(b.bottom, e.bottom),
        k = Math.max(b.left, e.left),
        m = h - k,
        n = l - g;
      g =
        0 <= m && 0 <= n
          ? { top: g, right: h, bottom: l, left: k, width: m, height: n }
          : null;
      h = !!g;
      l = g ? g.width * g.height : 0;
      k = window.performance;
      d = {
        boundingClientRect: e,
        intersectionRatio: f ? l / f : h ? 1 : 0,
        intersectionRect: g || {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 0,
          height: 0,
        },
        isIntersecting: h,
        rootBounds: b,
        target: d,
        time: k && k.now ? k.now() : 0,
      };
      iD(a, c.pa, d) && a.J.push(d);
      c.pa = d;
    });
    this.J.length && this.L(jD(this), this);
  };
  Wo.prototype.observe = function (a) {
    _.Tg(this.j, function (b) {
      return b.target == a;
    }) ||
      (this.j.push({ target: a, pa: null }),
      this.l(),
      this.B ||
        ((this.B = !0),
        _.hb(_.q, 'scroll', this.D),
        _.hb(_.q, 'resize', this.D),
        _.q.MutationObserver &&
          !this.m &&
          ((this.m = new MutationObserver(this.D)),
          this.m.observe(_.q.document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0,
          }))));
  };
  Wo.prototype.unobserve = function (a) {
    this.j = _.Bg(this.j, function (b) {
      return b.target != a;
    });
    0 == this.j.length && this.disconnect();
  };
  Wo.prototype.disconnect = function () {
    this.B = !1;
    this.j.length = 0;
    _.Pd(_.q, 'scroll', this.D);
    _.Pd(_.q, 'resize', this.D);
    this.m && (this.m.disconnect(), (this.m = null));
  };
  var jD = function (a) {
    var b = [].concat(_.Ld(a.J));
    a.J.length = 0;
    return b;
  };
  var kD = function (a, b, c, d, e, f) {
    _.U.call(this);
    this.Ja = a;
    this.status = 1;
    this.B = b;
    this.m = c;
    this.F = d;
    this.ic = !!e;
    this.l = Math.random();
    this.H = {};
    this.j = null;
    this.o = (0, _.gr)(this.T, this);
    this.L = f;
  };
  _.O(kD, _.U);
  kD.prototype.T = function (a) {
    if (
      !(
        ('*' !== this.m && a.origin !== this.m) ||
        (!this.ic && a.source != this.B)
      )
    ) {
      var b = null;
      try {
        b = JSON.parse(a.data);
      } catch (c) {}
      if (_.ka(b) && ((a = b.i), b.c === this.Ja && a != this.l)) {
        if (2 !== this.status)
          try {
            (this.status = 2), lD(this), this.j && (this.j(), (this.j = null));
          } catch (c) {}
        a = b.s;
        b = b.p;
        if (
          'string' === typeof a &&
          ('string' === typeof b || _.ka(b)) &&
          this.H.hasOwnProperty(a)
        )
          this.H[a](b);
      }
    }
  };
  var lD = function (a) {
    var b = {};
    b.c = a.Ja;
    b.i = a.l;
    a.L && (b.e = a.L);
    a.B.postMessage(JSON.stringify(b), a.m);
  };
  kD.prototype.C = function () {
    if (1 === this.status) {
      try {
        this.B.postMessage && lD(this);
      } catch (a) {}
      window.setTimeout((0, _.gr)(this.C, this), 50);
    }
  };
  kD.prototype.connect = function (a) {
    a && (this.j = a);
    _.hb(window, 'message', this.o);
    this.F && this.C();
  };
  var mD = function (a, b, c) {
      a.H[b] = c;
    },
    nD = function (a, b, c) {
      var d = {};
      d.c = a.Ja;
      d.i = a.l;
      d.s = b;
      d.p = c;
      try {
        a.B.postMessage(JSON.stringify(d), a.m);
      } catch (e) {}
    };
  kD.prototype.D = function () {
    this.status = 3;
    _.Pd(window, 'message', this.o);
    _.U.prototype.D.call(this);
  };
  var oD = new v.Map([
      ['navigate', 1],
      ['reload', 2],
      ['back_forward', 3],
      ['prerender', 4],
    ]),
    pD = new v.Map([
      [0, 1],
      [1, 2],
      [2, 3],
    ]);
  var qD = function (a) {
    _.S.call(this, a);
  };
  _.O(qD, _.S);
  var rD = yd(qD);
  var sD = function (a) {
    _.S.call(this, a);
  };
  _.O(sD, _.S);
  var tD = function (a) {
    _.S.call(this, a);
  };
  _.O(tD, _.S);
  var uD = function (a) {
      return a.prerendering
        ? 3
        : { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
            a.visibilityState ||
              a.webkitVisibilityState ||
              a.mozVisibilityState ||
              ''
          ] || 0;
    },
    vD = function (a) {
      var b;
      a.visibilityState
        ? (b = 'visibilitychange')
        : a.mozVisibilityState
        ? (b = 'mozvisibilitychange')
        : a.webkitVisibilityState && (b = 'webkitvisibilitychange');
      return b;
    },
    wD = function (a) {
      return null != a.hidden
        ? a.hidden
        : null != a.mozHidden
        ? a.mozHidden
        : null != a.webkitHidden
        ? a.webkitHidden
        : null;
    },
    xD = function (a, b) {
      if (3 == uD(b)) return !1;
      a();
      return !0;
    },
    yD = function (a, b) {
      if (!xD(a, b)) {
        var c = !1,
          d = vD(b),
          e = function () {
            !c && xD(a, b) && ((c = !0), _.Pd(b, d, e));
          };
        d && _.hb(b, d, e);
      }
    };
  var zo = function (a, b) {
      this.j = a;
      this.D = b;
      this.m = {};
    },
    Ao = function (a) {
      uo() &&
        (document.addEventListener(
          'touchstart',
          function (b) {
            a.j(902, function () {
              a.m[b.touches[0].identifier] = Date.now();
            })();
          },
          qr
        ),
        document.addEventListener(
          'touchend',
          function (b) {
            a.j(902, function () {
              var c = b.changedTouches[0],
                d = c.clientX,
                e = c.clientY,
                f = c.force;
              c = a.m[c.identifier];
              if (void 0 !== c)
                try {
                  var g = uo(),
                    h = { x: d, y: e, duration_ms: Date.now() - c };
                  if (null == g ? 0 : g.gmaSdk)
                    g.gmaSdk.reportTouchEvent(
                      JSON.stringify(
                        _.t(Object, 'assign').call(Object, {}, h, {
                          type: 1,
                          force: f,
                        })
                      )
                    );
                  else {
                    var l, k, m;
                    null == g ||
                      null == (l = g.webkit) ||
                      null == (k = l.messageHandlers) ||
                      null == (m = k.reportGmaTouchEvent) ||
                      m.postMessage(h);
                  }
                } catch (n) {
                  a.D('paw_sigs', {
                    msg: 'reportTouchError',
                    err: n instanceof Error ? n.message : 'nonError',
                  });
                }
            })();
          },
          qr
        ));
    },
    vo = function (a, b, c, d, e) {
      var f = 200,
        g = no;
      b = void 0 === b ? {} : b;
      c = void 0 === c ? function () {} : c;
      d = void 0 === d ? function () {} : d;
      f = void 0 === f ? 200 : f;
      var h = String(Math.floor(2147483647 * ge())),
        l = 0,
        k = function (m) {
          try {
            var n = 'object' === typeof m.data ? m.data : JSON.parse(m.data);
            h === n.paw_id &&
              (window.clearTimeout(l),
              window.removeEventListener('message', k),
              n.signal ? c(n.signal) : n.error && d(n.error));
          } catch (p) {
            g('paw_sigs', {
              msg: 'postmessageError',
              err: p instanceof Error ? p.message : 'nonError',
              data:
                null == m.data
                  ? 'null'
                  : 500 < m.data.length
                  ? m.data.substring(0, 500)
                  : m.data,
            });
          }
        };
      window.addEventListener('message', function (m) {
        e(903, function () {
          k(m);
        })();
      });
      a.postMessage(_.t(Object, 'assign').call(Object, {}, { paw_id: h }, b));
      l = window.setTimeout(function () {
        window.removeEventListener('message', k);
        d('PAW GMA postmessage timed out.');
      }, f);
    },
    uo = function () {
      var a = window,
        b,
        c;
      if (
        a.gmaSdk ||
        (null == (b = a.webkit)
          ? 0
          : null == (c = b.messageHandlers)
          ? 0
          : c.getGmaViewSignals)
      )
        return a;
      try {
        var d = window.parent,
          e,
          f;
        if (
          d.gmaSdk ||
          (null == (e = d.webkit)
            ? 0
            : null == (f = e.messageHandlers)
            ? 0
            : f.getGmaViewSignals)
        )
          return d;
      } catch (g) {}
      return null;
    };
  var AD = function (a) {
    _.S.call(this, a, -1, zD);
  };
  _.O(AD, _.S);
  var zD = [1],
    BD = [AD, 1, Vs, Pt];
  var DD = function (a) {
    _.S.call(this, a, -1, CD);
  };
  _.O(DD, _.S);
  var CD = [1, 2];
  DD.prototype.D = xd([DD, 1, Vs, Pt, 2, Vs, BD]);
  var FD, ED;
  FD = function () {
    this.wasPlaTagProcessed = !1;
    this.wasReactiveAdConfigReceived = {};
    this.adCount = {};
    this.wasReactiveAdVisible = {};
    this.stateForType = {};
    this.reactiveTypeEnabledInAsfe = {};
    this.wasReactiveTagRequestSent = !1;
    this.reactiveTypeDisabledByPublisher = {};
    this.tagSpecificState = {};
    this.messageValidationEnabled = !1;
    this.floatingAdsStacking = new ED();
    this.sideRailProcessedFixedElements = new v.Set();
    this.sideRailAvailableSpace = new v.Map();
  };
  _.hm = function (a) {
    a.google_reactive_ads_global_state
      ? (null ==
          a.google_reactive_ads_global_state.sideRailProcessedFixedElements &&
          (a.google_reactive_ads_global_state.sideRailProcessedFixedElements =
            new v.Set()),
        null == a.google_reactive_ads_global_state.sideRailAvailableSpace &&
          (a.google_reactive_ads_global_state.sideRailAvailableSpace =
            new v.Map()))
      : (a.google_reactive_ads_global_state = new FD());
    return a.google_reactive_ads_global_state;
  };
  ED = function () {
    this.maxZIndexRestrictions = {};
    this.nextRestrictionId = 0;
    this.maxZIndexListeners = [];
  };
  var ID;
  _.GD = function (a) {
    this.j = _.hm(a).floatingAdsStacking;
  };
  _.HD = function (a) {
    a = _.gv(a.j.maxZIndexRestrictions);
    return a.length ? Math.min.apply(null, a) : null;
  };
  ID = function (a) {
    var b = _.HD(a);
    _.rr(a.j.maxZIndexListeners, function (c) {
      return c(b);
    });
  };
  _.JD = function (a) {
    this.m = a;
    this.j = null;
  };
  _.KD = function (a) {
    if (null == a.j) {
      var b = a.m,
        c = b.j.nextRestrictionId++;
      b.j.maxZIndexRestrictions[c] = 2147483646;
      ID(b);
      a.j = c;
    }
  };
  _.LD = function (a) {
    if (null != a.j) {
      var b = a.m;
      delete b.j.maxZIndexRestrictions[a.j];
      ID(b);
      a.j = null;
    }
  };
  var im, Wl, Zl;
  im = 728 * 1.38;
  _.km = function (a) {
    return a.innerHeight >= a.innerWidth;
  };
  _.MD = function (a) {
    var b = _.Yl(a).clientWidth;
    a = a.innerWidth;
    return b && a ? b / a : 0;
  };
  Wl = function (a, b) {
    return (a = _.Yl(a).clientWidth)
      ? a > (void 0 === b ? 420 : b)
        ? 32768
        : 320 > a
        ? 65536
        : 0
      : 16384;
  };
  Zl = function (a) {
    return (a = _.MD(a)) ? (1.05 < a ? 262144 : 0.95 > a ? 524288 : 0) : 131072;
  };
  _.Yl = function (a) {
    a = a.document;
    var b = {};
    a && (b = 'CSS1Compat' == a.compatMode ? a.documentElement : a.body);
    return b || {};
  };
  _.ND = function (a) {
    return void 0 === a.pageYOffset
      ? (
          a.document.documentElement ||
          a.document.body.parentNode ||
          a.document.body
        ).scrollTop
      : a.pageYOffset;
  };
  var lm = 90 * 1.38;
  var OD;
  _.PD = function (a, b) {
    if (!a.body) return null;
    var c = new OD();
    c.apply(a, b);
    return function () {
      _.Jv(a.body, {
        filter: c.j,
        webkitFilter: c.j,
        overflow: c.D,
        position: c.J,
        top: c.B,
      });
      b.scrollTo(0, c.m);
    };
  };
  OD = function () {
    this.j = this.B = this.J = this.D = null;
    this.m = 0;
  };
  OD.prototype.apply = function (a, b) {
    this.D = a.body.style.overflow;
    this.J = a.body.style.position;
    this.B = a.body.style.top;
    this.j = a.body.style.filter
      ? a.body.style.filter
      : a.body.style.webkitFilter;
    this.m = _.ND(b);
    _.Jv(a.body, 'top', -this.m + 'px');
  };
  _.am = function (a, b) {
    var c;
    if (!(c = 0 >= b) && !(c = null == a)) {
      try {
        a.setItem('__storage_test__', '__storage_test__');
        var d = a.getItem('__storage_test__');
        a.removeItem('__storage_test__');
        var e = '__storage_test__' === d;
      } catch (f) {
        e = !1;
      }
      c = !e;
    }
    return c ? null : Ug(a, b);
  };
  _.$l = function (a) {
    return !!a && 1 > a.length;
  };
  var QD = function (a) {
    _.U.call(this);
    this.j = a;
    this.m = null;
    this.H = {};
    this.o = 0;
    this.B = null;
  };
  _.O(QD, _.U);
  QD.prototype.D = function () {
    this.B && _.Pd(this.j, 'message', this.B);
    _.U.prototype.D.call(this);
  };
  QD.prototype.l = function () {
    var a;
    return (
      'function' === typeof (null == (a = this.j) ? void 0 : a.__uspapi) ||
      null != RD(this)
    );
  };
  QD.prototype.L = function (a) {
    var b = {};
    if (this.l()) {
      var c = _.or(function () {
        return a(b);
      });
      SD(this, function (d, e) {
        e && (b = d);
        c();
      });
      setTimeout(c, 500);
    } else a(b);
  };
  var SD = function (a, b) {
      var c;
      'function' === typeof (null == (c = a.j) ? void 0 : c.__uspapi)
        ? ((a = a.j.__uspapi), a('getUSPData', 1, b))
        : RD(a) &&
          (TD(a),
          (c = ++a.o),
          (a.H[c] = b),
          a.m &&
            ((b = {}),
            a.m.postMessage(
              ((b.__uspapiCall = {
                command: 'getUSPData',
                version: 1,
                callId: c,
              }),
              b),
              '*'
            )));
    },
    RD = function (a) {
      if (a.m) return a.m;
      a.m = qv(a.j, '__uspapiLocator');
      return a.m;
    },
    TD = function (a) {
      a.B ||
        ((a.B = function (b) {
          try {
            var c = {};
            'string' === typeof b.data
              ? (c = JSON.parse(b.data))
              : (c = b.data);
            var d = c.__uspapiReturn;
            var e;
            null == (e = a.H) || e[d.callId](d.returnValue, d.success);
          } catch (f) {}
        }),
        _.hb(a.j, 'message', a.B));
    };
  var Zm = function (a) {
    _.U.call(this);
    this.l = a;
    this.B = this.j = null;
    this.L = {};
    this.C = 0;
    this.H = !1;
  };
  _.O(Zm, _.U);
  Zm.prototype.m = function () {
    if (!this.H) {
      if (!this.j) {
        var a = qv(this.l, 'googlefcPresent');
        this.j = a ? a : null;
      }
      this.H = !0;
    }
    return !!this.j;
  };
  Zm.prototype.o = function (a) {
    var b = this;
    return new v.Promise(function (c) {
      if (b.m())
        if (b.j === b.l) {
          var d = b.j.googlefc || (b.j.googlefc = {});
          d.__fci = d.__fci || [];
          d.__fci.push(a, function (f) {
            c(le(f));
          });
        } else {
          UD(b);
          d = b.C++;
          b.L[d] = c;
          var e = {};
          (0, C.K)(b.j).postMessage(
            ((e.__fciCall = { command: a, callId: d }), e),
            '*'
          );
        }
    });
  };
  var UD = function (a) {
    a.B ||
      ((a.B = function (b) {
        try {
          var c = le(b.data.__fciReturn);
          (0, a.L[x(c, 1)])(c);
        } catch (d) {}
      }),
      _.hb(a.l, 'message', a.B));
  };
  var VD = {},
    Yg =
      ((VD[23] = 0.001),
      (VD[253] = !1),
      (VD[246] = []),
      (VD[150] = ''),
      (VD[221] = /^true$/.test('false')),
      (VD[36] = /^true$/.test('false')),
      (VD[172] = null),
      (VD[260] = void 0),
      (VD[251] = null),
      VD),
    Xg = function () {
      this.j = !1;
    };
  var Zj = function (a) {
      var b = void 0 === b ? He(_.q) : b;
      this.id = a;
      this.m = Math.random() < (_.H(_.Iw) ? 0.001 : _.Zg(23));
      this.j = { pvsid: String(b) };
    },
    WD = function (a) {
      a = Wg(a);
      var b;
      xh.set(a, (null != (b = xh.get(a)) ? b : 0) + 1);
    },
    wh = function () {
      return []
        .concat(_.Ld(_.t(xh, 'values').call(xh)))
        .reduce(function (a, b) {
          return a + b;
        }, 0);
    },
    L = function (a, b, c) {
      'string' !== typeof c && (c = String(c));
      /^\w+$/.test(b) && (c ? (a.j[b] = c) : delete a.j[b]);
    },
    bk = function (a) {
      var b = 1;
      b = void 0 === b ? null : b;
      if (XD()) b = !0;
      else {
        var c = a.m;
        b && 0 <= b && (c = Math.random() < b);
        b = c && !!a.id;
      }
      b && _.Jx(window, YD(a) || '', void 0, _.H(Ow));
    },
    YD = function (a) {
      var b =
        'https://pagead2.googlesyndication.com/pagead/gen_204?id=' +
        encodeURIComponent(a.id);
      _.Fk(a.j, function (c, d) {
        c && (b += '&' + d + '=' + encodeURIComponent(c));
      });
      return b;
    },
    ZD = function (a) {
      var b = [].concat(_.Ld(_.t(xh, 'keys').call(xh)));
      b = b.map(function (c) {
        return c.replace(/,/g, '\\,');
      });
      3 >= b.length
        ? L(a, 'nw_id', b.join())
        : ((b = b.slice(0, 3)), b.push('__extra__'), L(a, 'nw_id', b.join()));
    },
    Ci = function (a, b) {
      L(a, 'vrg', String(b.rb || b.Ga));
      ZD(a);
      L(a, 'nslots', wh().toString());
      b = _.xe(ye).j();
      b.length && L(a, 'eid', b.join());
      L(a, 'pub_url', document.URL);
    },
    ti = function (a, b, c) {
      c = void 0 === c ? (_.H(_.Iw) ? 0.001 : _.Zg(23)) : c;
      if (void 0 === c || 0 > c || 1 < c) c = _.H(_.Iw) ? 0.001 : _.Zg(23);
      Math.random() < c && ((a = new Zj(a)), b(a), bk(a));
    },
    xh = new v.Map(),
    XD = di(function () {
      return !!kv(_.q.location.href);
    });
  var kh = function () {
    Fy.call(this, _.H(lh) || _.H(xx) ? 1 : 0, _.q);
    this.D = 0;
    var a = _.H(lh) || _.H(xx);
    _.q.google_measure_js_timing = a || _.q.google_measure_js_timing;
  };
  _.O(kh, Fy);
  _.$D = function (a) {
    this.context = a;
  };
  var aE = {},
    bE =
      ((aE.companion_ads = 'companionAds'),
      (aE.content = 'content'),
      (aE.publisher_ads = 'pubads'),
      aE);
  var zh = function (a) {
    _.S.call(this, a);
  };
  _.O(zh, _.S);
  zh.prototype.getWidth = function () {
    return x(this, 1);
  };
  var Dh = function (a, b) {
    return _.z(a, 1, b);
  };
  zh.prototype.getHeight = function () {
    return x(this, 2);
  };
  var Ch = function (a, b) {
      return _.z(a, 2, b);
    },
    al = function () {
      var a = new zh();
      return _.z(a, 3, !0);
    };
  var nk = function (a) {
    _.S.call(this, a, -1, cE);
  };
  _.O(nk, _.S);
  var mk = function (a, b) {
      return _.z(a, 1, b);
    },
    lk = function (a, b) {
      return _.uh(a, 2, b);
    },
    dE = function (a, b) {
      return us(a, 2, b);
    },
    cE = [2];
  var Bp = function (a) {
    _.S.call(this, a);
  };
  _.O(Bp, _.S);
  var eE = function (a, b) {
    return _.z(a, 3, Yb(b));
  };
  var An = function (a) {
    _.S.call(this, a, -1, fE);
  };
  _.O(An, _.S);
  var Gn = function (a, b) {
      return _.z(a, 1, b);
    },
    En = function (a, b) {
      return _.uh(a, 2, b);
    },
    fE = [2];
  var jo = function (a) {
    _.S.call(this, a, -1, gE);
  };
  _.O(jo, _.S);
  var Fn = function (a, b) {
      hf(a, 1, An, b);
    },
    gE = [1];
  var ho = function (a) {
    _.S.call(this, a, -1, hE);
  };
  _.O(ho, _.S);
  var hE = [2, 3];
  var fo = function (a) {
    _.S.call(this, a);
  };
  _.O(fo, _.S);
  var iE = function (a) {
    _.S.call(this, a);
  };
  _.O(iE, _.S);
  iE.prototype.setTagForChildDirectedTreatment = function (a) {
    return _.z(this, 5, a);
  };
  iE.prototype.clearTagForChildDirectedTreatment = function () {
    return Ne(this, 5);
  };
  iE.prototype.setTagForUnderAgeOfConsent = function (a) {
    return _.z(this, 6, a);
  };
  var Ek = function (a) {
    _.S.call(this, a);
  };
  _.O(Ek, _.S);
  var kE = function (a) {
    _.S.call(this, a, -1, jE);
  };
  _.O(kE, _.S);
  kE.prototype.ta = function () {
    return be(this, nk, 14);
  };
  kE.prototype.Sa = function () {
    return Se(this, Ek, 18);
  };
  var lE = function (a) {
    return Se(a, iE, 25);
  };
  kE.prototype.getCorrelator = function () {
    return x(this, 26);
  };
  kE.prototype.setCorrelator = function (a) {
    return _.z(this, 26, a);
  };
  kE.prototype.Kc = function () {
    return go(this, fo, 33);
  };
  var jE = [2, 3, 14];
  var Vh = function () {
    this.j = new v.Map();
  };
  var mE = function () {
      this.m = {};
      this.j = new kE();
      this.D = new v.Map();
      this.j.setCorrelator(zv());
      _.Zg(36) && _.z(this.j, 15, !0);
    },
    nE = function (a) {
      var b = mi(),
        c = a.getDomId();
      if (c && !b.m.hasOwnProperty(c)) {
        var d = _.xe(Vh),
          e = ++_.xe(kh).D;
        d.j.set(c, e);
        _.z(a, 20, e);
        b.m[c] = a;
      }
    },
    nn = function (a, b) {
      return a.m[b];
    },
    mi = function () {
      return _.xe(mE);
    };
  var Zh = di(Yh);
  var Li = ['auto', 'inherit', '100%'],
    Mi = Li.concat(['none']);
  var sm = function (a, b, c) {
    if (!a) return !0;
    var d = !0;
    Ji(
      a,
      function (e) {
        return (d = Ki(e, b, 10, 10));
      },
      c
    );
    return d;
  };
  var oE = function (a, b, c, d, e, f) {
      this.D = _.Dv(a);
      this.m = _.Dv(b);
      this.J = c;
      this.j = _.Dv(d);
      this.B = e;
      this.l = f;
    },
    pE = function (a) {
      return JSON.stringify({
        windowCoords_t: a.D.top,
        windowCoords_r: a.D.right,
        windowCoords_b: a.D.bottom,
        windowCoords_l: a.D.left,
        frameCoords_t: a.m.top,
        frameCoords_r: a.m.right,
        frameCoords_b: a.m.bottom,
        frameCoords_l: a.m.left,
        styleZIndex: a.J,
        allowedExpansion_t: a.j.top,
        allowedExpansion_r: a.j.right,
        allowedExpansion_b: a.j.bottom,
        allowedExpansion_l: a.j.left,
        xInView: a.B,
        yInView: a.l,
      });
    },
    qE = function (a) {
      var b = window,
        c = b.screenX || b.screenLeft || 0,
        d = b.screenY || b.screenTop || 0;
      b = new _.Cv(
        d,
        c + (b.outerWidth || document.documentElement.clientWidth || 0),
        d + (b.outerHeight || document.documentElement.clientHeight || 0),
        c
      );
      c = Nv(a);
      d = _.Qg(_.Rg, a);
      var e = new Ev(c.x, c.y, d.width, d.height);
      c = Fv(e);
      d = String(Pg(a, 'zIndex'));
      var f = new _.Cv(0, Infinity, Infinity, 0);
      for (
        var g = Su(a), h = g.j.body, l = g.j.documentElement, k = Xu(g.j);
        (a = Mv(a));

      )
        if (
          !(
            (_.Sr && 0 == a.clientWidth) ||
            (Vr && 0 == a.clientHeight && a == h)
          ) &&
          a != h &&
          a != l &&
          'visible' != Pg(a, 'overflow')
        ) {
          var m = Nv(a),
            n = new _.Qh(a.clientLeft, a.clientTop);
          m.x += n.x;
          m.y += n.y;
          f.top = Math.max(f.top, m.y);
          f.right = Math.min(f.right, m.x + a.clientWidth);
          f.bottom = Math.min(f.bottom, m.y + a.clientHeight);
          f.left = Math.max(f.left, m.x);
        }
      a = k.scrollLeft;
      k = k.scrollTop;
      f.left = Math.max(f.left, a);
      f.top = Math.max(f.top, k);
      g = g.j;
      g = _.Wu(g.parentWindow || g.defaultView || window);
      f.right = Math.min(f.right, a + g.width);
      f.bottom = Math.min(f.bottom, k + g.height);
      k = (f = (f =
        0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left
          ? f
          : null)
        ? new Ev(f.left, f.top, f.right - f.left, f.bottom - f.top)
        : null)
        ? Gv(e, f)
        : null;
      g = a = 0;
      k &&
        !new _.Th(k.width, k.height).isEmpty() &&
        ((a = k.width / e.width), (g = k.height / e.height));
      k = new _.Cv(0, 0, 0, 0);
      if ((h = f))
        (e = Gv(e, f))
          ? ((l = Fv(f)),
            (m = Fv(e)),
            (h = m.right != l.left && l.right != m.left),
            (l = m.bottom != l.top && l.bottom != m.top),
            (h = (0 != e.width || h) && (0 != e.height || l)))
          : (h = !1);
      h &&
        (k = new _.Cv(
          Math.max(c.top - f.top, 0),
          Math.max(f.left + f.width - c.right, 0),
          Math.max(f.top + f.height - c.bottom, 0),
          Math.max(c.left - f.left, 0)
        ));
      return new oE(b, c, d, k, a, g);
    };
  var rE = function (a) {
    this.J = a;
    this.B = null;
    this.C = this.status = 0;
    this.m = null;
    this.Ja = 'sfchannel' + a;
  };
  var sE = function (a) {
    this.j = a;
  };
  var tE = function (a, b) {
    this.Gc = a;
    this.Hc = b;
    this.m = this.j = !1;
  };
  var uE = function (a, b, c, d, e, f, g, h) {
    h = void 0 === h ? [] : h;
    this.m = a;
    this.D = b;
    this.J = c;
    this.permissions = d;
    this.metadata = e;
    this.B = f;
    this.ic = g;
    this.hostpageLibraryTokens = h;
    this.j = '';
  };
  var vE = function (a, b) {
    this.m = a;
    this.J = b;
  };
  vE.prototype.j = function (a) {
    this.J && a && (a.sentinel = this.J);
    return JSON.stringify(a);
  };
  var wE = function (a, b, c) {
    vE.call(this, a, void 0 === c ? '' : c);
    this.version = b;
  };
  _.O(wE, vE);
  wE.prototype.j = function () {
    return vE.prototype.j.call(this, { uid: this.m, version: this.version });
  };
  var xE = function (a, b, c, d) {
    vE.call(this, a, void 0 === d ? '' : d);
    this.B = b;
    this.D = c;
  };
  _.O(xE, vE);
  xE.prototype.j = function () {
    return vE.prototype.j.call(this, {
      uid: this.m,
      initialWidth: this.B,
      initialHeight: this.D,
    });
  };
  var yE = function (a, b, c) {
    vE.call(this, a, void 0 === c ? '' : c);
    this.description = b;
  };
  _.O(yE, vE);
  yE.prototype.j = function () {
    return vE.prototype.j.call(this, {
      uid: this.m,
      description: this.description,
    });
  };
  var zE = function (a, b, c, d) {
    vE.call(this, a, void 0 === d ? '' : d);
    this.D = b;
    this.push = c;
  };
  _.O(zE, vE);
  zE.prototype.j = function () {
    return vE.prototype.j.call(this, {
      uid: this.m,
      expand_t: this.D.top,
      expand_r: this.D.right,
      expand_b: this.D.bottom,
      expand_l: this.D.left,
      push: this.push,
    });
  };
  var AE = function (a, b) {
    vE.call(this, a, void 0 === b ? '' : b);
  };
  _.O(AE, vE);
  AE.prototype.j = function () {
    return vE.prototype.j.call(this, { uid: this.m });
  };
  var BE = function (a, b, c) {
    vE.call(this, a, void 0 === c ? '' : c);
    this.B = b;
  };
  _.O(BE, vE);
  BE.prototype.j = function () {
    var a = { uid: this.m, newGeometry: pE(this.B) };
    return vE.prototype.j.call(this, a);
  };
  var CE = function (a, b, c, d, e, f) {
    BE.call(this, a, c, void 0 === f ? '' : f);
    this.success = b;
    this.D = d;
    this.push = e;
  };
  _.O(CE, BE);
  CE.prototype.j = function () {
    var a = {
      uid: this.m,
      success: this.success,
      newGeometry: pE(this.B),
      expand_t: this.D.top,
      expand_r: this.D.right,
      expand_b: this.D.bottom,
      expand_l: this.D.left,
      push: this.push,
    };
    this.J && (a.sentinel = this.J);
    return JSON.stringify(a);
  };
  var DE = function (a, b, c, d) {
    vE.call(this, a, void 0 === d ? '' : d);
    this.width = b;
    this.height = c;
  };
  _.O(DE, vE);
  DE.prototype.j = function () {
    return vE.prototype.j.call(this, {
      uid: this.m,
      width: this.width,
      height: this.height,
    });
  };
  var EE = function (a) {
    var b;
    if (null == (b = a.location) ? 0 : b.ancestorOrigins)
      return a.location.ancestorOrigins.length;
    var c = 0;
    Dd(
      function () {
        c++;
        return !1;
      },
      !0,
      !0,
      a
    );
    return c;
  };
  var FE = function () {
      this.j = [];
    },
    HE = function (a, b, c, d, e) {
      a.j.push(new GE(b, c, d, e));
    },
    IE = function (a) {
      for (var b = a.j.length - 1; 0 <= b; b--) {
        var c = a.j[b];
        c.m
          ? (c.D.style.removeProperty(c.j),
            c.D.style.setProperty(c.j, String(c.J), c.B))
          : (c.D.style[c.j] = c.J);
      }
      a.j.length = 0;
    },
    GE = function (a, b, c, d) {
      this.D = a;
      this.j = (this.m = !(
        void 0 === d ||
        !a.style ||
        !a.style.getPropertyPriority
      ))
        ? String(b)
            .replace(/([A-Z])/g, '-$1')
            .toLowerCase()
        : b;
      this.J = this.m ? a.style.getPropertyValue(this.j) : a.style[this.j];
      this.B = this.m ? a.style.getPropertyPriority(this.j) : void 0;
      this.m
        ? (a.style.removeProperty(this.j),
          a.style.setProperty(this.j, String(c), d))
        : (a.style[this.j] = String(c));
    };
  var JE = function (a, b) {
      b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
      2048 > b.length && b.push(a);
    },
    KE = function () {
      var a = window,
        b = _.te(a);
      b && JE({ label: '2', type: 9, value: b }, a);
    },
    LE = function (a, b, c) {
      var d = void 0 === d ? !1 : d;
      var e = window,
        f = 'undefined' !== typeof queueMicrotask;
      return function () {
        d &&
          f &&
          queueMicrotask(function () {
            e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
            e.google_rum_task_id_counter += 1;
          });
        var g = _.te(),
          h = 3;
        try {
          var l = b.apply(this, arguments);
        } catch (k) {
          h = 13;
          if (!c) throw k;
          c(a, k);
        } finally {
          e.google_measure_js_timing &&
            g &&
            JE(
              _.t(Object, 'assign').call(
                Object,
                {},
                {
                  label: a.toString(),
                  value: g,
                  duration: (_.te() || 0) - g,
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
        return l;
      };
    };
  var QE = function (a) {
    rE.call(this, a.uniqueId);
    var b = this;
    this.H = a.Oh;
    this.o = 1 === a.size;
    this.R = new tE(a.permissions.Gc && !this.o, a.permissions.Hc && !this.o);
    this.l = a.Nd;
    var c;
    this.ka = null != (c = a.hostpageLibraryTokens) ? c : [];
    var d = window.location;
    c = d.protocol;
    d = d.host;
    this.da = 'file:' == c ? '*' : c + '//' + d;
    this.la = !!a.ic;
    c =
      '//' +
      a.ze +
      (_.H($w)
        ? '.safeframe.usercontent.goog'
        : '.safeframe.googlesyndication.com');
    this.M = a.ze ? c : '//tpc.googlesyndication.com';
    this.ba = a.Nc ? '*' : 'https:' + this.M;
    this.W = !!a.df;
    this.ja = ME(a);
    this.D = new FE();
    NE(this, a.Nd, a.size);
    this.B = this.ia = qE(a.Nd);
    this.F = a.hg || '1-0-40';
    var e;
    this.aa = null != (e = a.Ve) ? e : '';
    OE(this, a);
    this.ua = LE(
      412,
      function () {
        return PE(b);
      },
      a.Fa
    );
    this.T = -1;
    this.L = 0;
    var f = LE(
      415,
      function () {
        b.j && ((b.j.name = ''), a.re && a.re(), _.Pd(b.j, 'load', f));
      },
      a.Fa
    );
    _.hb(this.j, 'load', f);
    this.Bd = LE(413, this.Bd, a.Fa);
    this.Pd = LE(417, this.Pd, a.Fa);
    this.Qd = LE(419, this.Qd, a.Fa);
    this.td = LE(411, this.td, a.Fa);
    this.rd = LE(409, this.rd, a.Fa);
    this.O = LE(410, this.O, a.Fa);
    this.Id = LE(416, this.Id, a.Fa);
    this.m = new kD(this.Ja, this.j.contentWindow, this.ba, !1);
    mD(this.m, 'init_done', (0, _.gr)(this.Bd, this));
    mD(this.m, 'register_done', (0, _.gr)(this.Pd, this));
    mD(this.m, 'report_error', (0, _.gr)(this.Qd, this));
    mD(this.m, 'expand_request', (0, _.gr)(this.td, this));
    mD(this.m, 'collapse_request', (0, _.gr)(this.rd, this));
    mD(this.m, 'creative_geometry_update', (0, _.gr)(this.O, this));
    this.m.connect((0, _.gr)(this.Id, this));
  };
  _.O(QE, rE);
  var NE = function (a, b, c) {
      a.o
        ? ((b.style.width = _.Pv('100%', !0)),
          (b.style.height = _.Pv('auto', !0)))
        : ((b.style.width = _.Pv(c.width, !0)),
          (b.style.height = _.Pv(c.height, !0)));
    },
    OE = function (a, b) {
      var c = b.Nc,
        d = b.content,
        e = b.ec,
        f = b.size,
        g = void 0 === b.hc ? '3rd party ad content' : b.hc,
        h = b.Ic;
      b = b.nd;
      var l = { shared: { sf_ver: a.F, ck_on: Ay() ? 1 : 0, flash_ver: '0' } };
      d = c ? '' : null != d ? d : '';
      d = a.F + ';' + d.length + ';' + d;
      l = new uE(a.J, a.da, a.ia, a.R, new sE(l), a.o, a.la, a.ka);
      var k = {};
      k.uid = l.m;
      k.hostPeerName = l.D;
      k.initialGeometry = pE(l.J);
      var m = l.permissions;
      m = JSON.stringify({
        expandByOverlay: m.Gc,
        expandByPush: m.Hc,
        readCookie: m.j,
        writeCookie: m.m,
      });
      k =
        ((k.permissions = m),
        (k.metadata = JSON.stringify(l.metadata.j)),
        (k.reportCreativeGeometry = l.B),
        (k.isDifferentSourceWindow = l.ic),
        (k.goog_safeframe_hlt = Dz(l.hostpageLibraryTokens)),
        k);
      l.j && (k.sentinel = l.j);
      l = JSON.stringify(k);
      d += l;
      a.W &&
        f instanceof _.Th &&
        ((l = _.Yu(_.Ru(a.l))),
        (k = _.Yu(_.Ru(a.l)).location.protocol + a.M),
        rz || ck(l.document, sz),
        rz++,
        (l.google_eas_queue = l.google_eas_queue || []),
        l.google_eas_queue.push({
          a: e,
          b: k,
          c: f.width,
          d: f.height,
          e: 'sf-gdn-exp-' + rz,
          f: void 0,
          g: void 0,
          h: void 0,
          i: void 0,
        }));
      l = f.width;
      f = f.height;
      a.o && (f = l = 0);
      k = {};
      e =
        ((k.id = e),
        (k.title = g),
        (k.name = d),
        (k.scrolling = 'no'),
        (k.marginWidth = '0'),
        (k.marginHeight = '0'),
        (k.width = String(l)),
        (k.height = String(f)),
        (k['data-is-safeframe'] = 'true'),
        k);
      void 0 === c &&
        ((g = _.Yu(_.Ru(a.l))),
        (f = a.aa),
        (d = a.M),
        (l = f) && (l = '?' + l),
        (d =
          (void 0 === d ? '//tpc.googlesyndication.com' : d) +
          ('/safeframe/' + a.F + '/html/container.html' + l)),
        (l = EE(g)) && (d += (f ? '&' : '?') + 'n=' + l),
        (f = 'https:' + d),
        (d = []),
        a.W &&
          ((l = kv(g.location.href)),
          (g = d.push),
          (l = [
            0 < l.length ? 'google_debug' + (l ? '=' + l : '') + '&' : '',
            'xpc=',
            'sf-gdn-exp-' + a.J,
            '&p=',
            encodeURIComponent(_.q.document.location.protocol),
            '//',
            encodeURIComponent(_.q.document.location.host),
          ].join('')),
          g.call(d, l)),
        d.length && (f += '#' + d.join('&')),
        (e.src = f));
      null !== a.ja && (e.sandbox = a.ja);
      h && (e.allow = h);
      b && (e.credentialless = 'true');
      e.role = 'region';
      e['aria-label'] = 'Advertisement';
      e.tabIndex = '0';
      c
        ? ((a.j = c), Uu(a.j, e))
        : ((c = {}),
          (c =
            ((c.frameborder = 0),
            (c.allowTransparency = 'true'),
            (c.style = 'border:0;vertical-align:bottom;'),
            (c.src = 'about:blank'),
            c)),
          e && Ea(c, e),
          (h = _.Ad('IFRAME')),
          Uu(h, c),
          (a.j = h));
      a.o && (a.j.style.minWidth = '100%');
      a.l.appendChild(a.j);
    };
  aa = QE.prototype;
  aa.Id = function () {
    _.hb(window, 'resize', this.ua);
    _.hb(window, 'scroll', this.ua);
  };
  aa.Bd = function (a) {
    try {
      if (0 != this.status) throw Error('Container already initialized');
      if ('string' !== typeof a)
        throw Error('Could not parse serialized message');
      var b = JSON.parse(a);
      if (!_.ka(b) || !Oi(b.uid) || 'string' !== typeof b.version)
        throw Error('Cannot parse JSON message');
      var c = new wE(b.uid, b.version, b.sentinel);
      if (this.J !== c.m || this.F !== c.version)
        throw Error('Wrong source container');
      this.status = 1;
    } catch (e) {
      var d;
      null == (d = this.H) ||
        d.error('Invalid INITIALIZE_DONE message. Reason: ' + e.message);
    }
  };
  aa.Pd = function (a) {
    try {
      if (1 != this.status) throw Error('Container not initialized');
      if ('string' !== typeof a)
        throw Error('Could not parse serialized message');
      var b = JSON.parse(a);
      if (
        !_.ka(b) ||
        !Oi(b.uid) ||
        'number' !== typeof b.initialWidth ||
        'number' !== typeof b.initialHeight
      )
        throw Error('Cannot parse JSON message');
      if (
        this.J !== new xE(b.uid, b.initialWidth, b.initialHeight, b.sentinel).m
      )
        throw Error('Wrong source container');
      this.status = 2;
    } catch (d) {
      var c;
      null == (c = this.H) ||
        c.error('Invalid REGISTER_DONE message. Reason: ' + d.message);
    }
  };
  aa.Qd = function (a) {
    try {
      if ('string' !== typeof a)
        throw Error('Could not parse serialized message');
      var b = JSON.parse(a);
      if (!_.ka(b) || !Oi(b.uid) || 'string' !== typeof b.description)
        throw Error('Cannot parse JSON message');
      var c = new yE(b.uid, b.description, b.sentinel);
      if (this.J !== c.m) throw Error('Wrong source container');
      var d;
      null == (d = this.H) ||
        d.info('Ext reported an error. Description: ' + c.description);
    } catch (f) {
      var e;
      null == (e = this.H) ||
        e.error('Invalid REPORT_ERROR message. Reason: ' + f.message);
    }
  };
  aa.td = function (a) {
    try {
      if (2 != this.status) throw Error('Container is not registered');
      if (0 != this.C) throw Error('Container is not collapsed');
      if ('string' !== typeof a)
        throw Error('Could not parse serialized message');
      var b = JSON.parse(a);
      if (
        !_.ka(b) ||
        !Oi(b.uid) ||
        'number' !== typeof b.expand_t ||
        'number' !== typeof b.expand_r ||
        'number' !== typeof b.expand_b ||
        'number' !== typeof b.expand_l ||
        'boolean' !== typeof b.push
      )
        throw Error('Cannot parse JSON message');
      var c = new zE(
        b.uid,
        new _.Cv(b.expand_t, b.expand_r, b.expand_b, b.expand_l),
        b.push,
        b.sentinel
      );
      if (this.J !== c.m) throw Error('Wrong source container');
      if (!(0 <= c.D.top && 0 <= c.D.left && 0 <= c.D.bottom && 0 <= c.D.right))
        throw Error('Invalid expansion amounts');
      var d;
      if ((d = (c.push && this.R.Hc) || (!c.push && this.R.Gc))) {
        var e = c.D,
          f = c.push,
          g = (this.B = qE(this.j));
        if (
          e.top <= g.j.top &&
          e.right <= g.j.right &&
          e.bottom <= g.j.bottom &&
          e.left <= g.j.left
        ) {
          if (!f)
            for (var h = this.j.parentNode; h && h.style; h = h.parentNode)
              HE(this.D, h, 'overflowX', 'visible', 'important'),
                HE(this.D, h, 'overflowY', 'visible', 'important');
          var l = Fv(new Ev(0, 0, this.B.m.getWidth(), this.B.m.getHeight()));
          _.ka(e)
            ? ((l.top -= e.top),
              (l.right += e.right),
              (l.bottom += e.bottom),
              (l.left -= e.left))
            : ((l.top -= e),
              (l.right += Number(void 0)),
              (l.bottom += Number(void 0)),
              (l.left -= Number(void 0)));
          HE(this.D, this.l, 'position', 'relative');
          HE(this.D, this.j, 'position', 'absolute');
          if (f) {
            var k = l.getWidth();
            HE(this.D, this.l, 'width', k + 'px');
            var m = l.getHeight();
            HE(this.D, this.l, 'height', m + 'px');
          } else HE(this.D, this.j, 'zIndex', '10000');
          var n = l.getWidth();
          HE(this.D, this.j, 'width', n + 'px');
          var p = l.getHeight();
          HE(this.D, this.j, 'height', p + 'px');
          HE(this.D, this.j, 'left', l.left + 'px');
          HE(this.D, this.j, 'top', l.top + 'px');
          this.C = 2;
          this.B = qE(this.j);
          d = !0;
        } else d = !1;
      }
      a = d;
      nD(this.m, 'expand_response', new CE(this.J, a, this.B, c.D, c.push).j());
      if (!a)
        throw Error(
          'Viewport or document body not large enough to expand into.'
        );
    } catch (u) {
      var r;
      null == (r = this.H) ||
        r.error('Invalid EXPAND_REQUEST message. Reason: ' + u.message);
    }
  };
  aa.rd = function (a) {
    try {
      if (2 != this.status) throw Error('Container is not registered');
      if (2 != this.C) throw Error('Container is not expanded');
      if ('string' !== typeof a)
        throw Error('Could not parse serialized message');
      var b = JSON.parse(a);
      if (!_.ka(b) || !Oi(b.uid)) throw Error('Cannot parse JSON message');
      if (this.J !== new AE(b.uid, b.sentinel).m)
        throw Error('Wrong source container');
      IE(this.D);
      this.C = 0;
      this.j && (this.B = qE(this.j));
      nD(this.m, 'collapse_response', new BE(this.J, this.B).j());
    } catch (d) {
      var c;
      null == (c = this.H) ||
        c.error('Invalid COLLAPSE_REQUEST message. Reason: ' + d.message);
    }
  };
  var PE = function (a) {
    if (1 == a.status || 2 == a.status)
      switch (a.L) {
        case 0:
          RE(a);
          a.T = window.setTimeout((0, _.gr)(a.ha, a), 1e3);
          a.L = 1;
          break;
        case 1:
          a.L = 2;
          break;
        case 2:
          a.L = 2;
      }
  };
  QE.prototype.O = function (a) {
    try {
      if ('string' !== typeof a)
        throw Error('Could not parse serialized message');
      var b = JSON.parse(a);
      if (
        !_.ka(b) ||
        !Oi(b.uid) ||
        'number' !== typeof b.width ||
        'number' !== typeof b.height ||
        (b.sentinel && 'string' !== typeof b.sentinel)
      )
        throw Error('Cannot parse JSON message');
      var c = new DE(b.uid, b.width, b.height, b.sentinel);
      if (this.J !== c.m) throw Error('Wrong source container');
      var d = String(c.height);
      if (this.o) d !== this.j.height && ((this.j.height = d), PE(this));
      else {
        var e;
        null == (e = this.H) ||
          e.error(
            'Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.'
          );
      }
    } catch (g) {
      var f;
      null == (f = this.H) ||
        f.error(
          'Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: ' + g.message
        );
    }
  };
  QE.prototype.ha = function () {
    if (1 == this.status || 2 == this.status)
      switch (this.L) {
        case 1:
          this.L = 0;
          break;
        case 2:
          RE(this),
            (this.T = window.setTimeout((0, _.gr)(this.ha, this), 1e3)),
            (this.L = 1);
      }
  };
  var RE = function (a) {
      a.B = qE(a.j);
      nD(a.m, 'geometry_update', new BE(a.J, a.B).j());
    },
    ME = function (a) {
      var b = null;
      a.Be && (b = a.Be);
      return null == b ? null : b.join(' ');
    },
    SE = [
      'allow-modals',
      'allow-orientation-lock',
      'allow-presentation',
      'allow-pointer-lock',
    ],
    TE = ['allow-top-navigation'],
    UE = ['allow-same-origin'],
    VE = nv([].concat(_.Ld(SE), _.Ld(TE)));
  nv([].concat(_.Ld(SE), _.Ld(UE)));
  nv([].concat(_.Ld(SE), _.Ld(TE), _.Ld(UE)));
  var WE = P([
      'https://tpc.googlesyndication.com/safeframe/',
      '/html/container.html',
    ]),
    XE = {
      Hf: function (a) {
        if ('string' !== typeof a.version)
          throw new TypeError('version is not a string');
        if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version))
          throw new RangeError('Invalid version: ' + a.version);
        if ('string' !== typeof a.nc)
          throw new TypeError('subdomain is not a string');
        if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.nc))
          throw new RangeError('Invalid subdomain: ' + a.nc);
        return a.sg
          ? Id(
              'https://' +
                a.nc +
                '.safeframe.usercontent.goog/safeframe/' +
                a.version +
                '/html/container.html'
            )
          : Id(
              'https://' +
                a.nc +
                '.safeframe.googlesyndication.com/safeframe/' +
                a.version +
                '/html/container.html'
            );
      },
      Yh: function (a) {
        return B(WE, a);
      },
    };
  var Qi = function (a, b) {
    try {
      sb(Bo(a, b));
    } catch (c) {}
  };
  var YE = function (a) {
    _.S.call(this, a);
  };
  _.O(YE, _.S);
  YE.prototype.D = xd([YE, 4, Os, 2, Os, 1, Os, 3, Os, 5, Rs]);
  var ZE = [0.05, 0.1, 0.2, 0.5],
    $E = [0, 0.5, 1],
    aF = function (a) {
      a = Jf(a);
      if (!a) return -1;
      try {
        var b = tz(a.document);
        var c = new _.Th(b.clientWidth, b.clientHeight);
      } catch (d) {
        c = new _.Th(-12245933, -12245933);
      }
      return -12245933 == c.width || -12245933 == c.height
        ? -1
        : c.width * c.height;
    },
    bF = function (a, b) {
      return 0 >= a || 0 >= b
        ? []
        : _.Lc(ZE, function (c) {
            return Math.min((a / b) * c, 1);
          });
    },
    dF = function (a) {
      this.B = a.I;
      this.D = a.fb;
      this.H = a.xb;
      this.m = null;
      this.J = a.Fa;
      this.j = cF(this);
      this.l = a.lg || !1;
    };
  dF.prototype.getSlotId = function () {
    return this.m;
  };
  var fF = function (a, b) {
      if (a.j) {
        if (null != a.m) {
          try {
            eF(a, Math.round(performance.now()), 0, 0, 0, !1);
          } catch (c) {
            a.J && a.J(c);
          }
          a.j && a.j.unobserve(a.D);
        }
        a.m = b;
        a.j.observe(a.D);
      }
    },
    cF = function (a) {
      var b = a.D.offsetWidth * a.D.offsetHeight,
        c = aF(a.B);
      b = [].concat(_.Ld($E), _.Ld(bF(c, b)));
      oa(b);
      return _.q.IntersectionObserver
        ? new _.q.IntersectionObserver(
            function (d) {
              return gF(a, d);
            },
            { threshold: b }
          )
        : new Wo(
            function (d) {
              return gF(a, d);
            },
            { threshold: b }
          );
    },
    gF = function (a, b) {
      try {
        var c = aF(a.B);
        _.rr(b, function (d) {
          a.l &&
            eF(
              a,
              Math.round(d.time),
              d.boundingClientRect.width * d.boundingClientRect.height,
              d.intersectionRect.width * d.intersectionRect.height,
              c,
              d.isIntersecting
            );
        });
      } catch (d) {
        a.J && a.J(d);
      }
    },
    eF = function (a, b, c, d, e, f) {
      if (null == a.m) throw Error('Not Attached.');
      var g = new YE();
      c = _.z(g, 1, c);
      d = _.z(c, 2, d);
      e = _.z(d, 3, e);
      b = _.z(e, 4, b);
      f = _.z(b, 5, f);
      f = xb(f.D(), 4);
      Gy(a.H, '1', 10, f, void 0, a.m);
    };
  var hF = function (a, b) {
      this.j = a;
      this.m = b;
    },
    iF = function (a) {
      if (a.j.frames.google_ads_top_frame) return !0;
      var b = rv(a.j);
      b = b && b.contentWindow;
      if (!b) return !1;
      b.addEventListener(
        'message',
        function (c) {
          var d = c.ports;
          '__goog_top_url_req' === c.data.msgType &&
            d.length &&
            d[0].postMessage({ msgType: '__goog_top_url_resp', topUrl: a.m });
        },
        !1
      );
      return !0;
    };
  var $i = function (a) {
    _.S.call(this, a);
  };
  _.O($i, _.S);
  var dj = yd($i),
    bj = [1, 3];
  var Rd = { Eh: 0, Bh: 1, zh: 2, Ah: 3, Dh: 5, Ch: 7 };
  var jF = P([
      'https://securepubads.g.doubleclick.net/static/topics/topics_frame.html',
    ]),
    Vi = B(jF);
  var Bj = function (a) {
    _.S.call(this, a);
  };
  _.O(Bj, _.S);
  Bj.prototype.getVersion = function () {
    return ef(this, 2);
  };
  var Aj = function (a) {
    _.S.call(this, a, -1, kF);
  };
  _.O(Aj, _.S);
  var uj = function (a, b) {
      return _.z(a, 2, b);
    },
    zj = function (a, b) {
      return _.z(a, 3, b);
    },
    wj = function (a, b) {
      return _.z(a, 4, b);
    },
    tj = function (a, b) {
      return _.z(a, 5, b);
    },
    yj = function (a, b) {
      return _.z(a, 9, b);
    },
    sj = function (a, b) {
      return Nc(a, 10, b);
    },
    rj = function (a, b) {
      return _.z(a, 11, b);
    },
    vj = function (a, b) {
      return _.z(a, 1, b);
    },
    xj = function (a, b) {
      return _.z(a, 7, b);
    },
    kF = [10, 6];
  var pj =
    'platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64'.split(
      ' '
    );
  var lF = function () {
      this.id = 'goog_' + Nu++;
    },
    mF = function (a) {
      _.U.call(this);
      this.context = a;
      this.m = new v.Map();
    };
  _.O(mF, _.U);
  mF.prototype.D = function () {
    _.U.prototype.D.call(this);
    this.m.clear();
  };
  var oF = function (a, b, c) {
      if (a.J) return function () {};
      var d = 'string' === typeof b ? b : b.id,
        e,
        f,
        g =
          null != (f = null == (e = a.m.get(d)) ? void 0 : e.add(c))
            ? f
            : new v.Set([c]);
      a.m.set(d, g);
      return function () {
        return void nF(a, b, c);
      };
    },
    pF = function (a, b, c) {
      c =
        void 0 === c
          ? function () {
              return !0;
            }
          : c;
      return new v.Promise(function (d) {
        var e = oF(a, b, function (f) {
          c(f) && (e(), d(f));
        });
      });
    },
    nF = function (a, b, c) {
      var d;
      return !(
        null == (d = a.m.get('string' === typeof b ? b : b.id)) || !d.delete(c)
      );
    };
  mF.prototype.dispatchEvent = function (a, b, c) {
    var d = this,
      e,
      f,
      g,
      h,
      l,
      k,
      m,
      n,
      p,
      r;
    return _.jb(function (u) {
      if (1 == u.j) {
        e = 'string' === typeof a ? a : a.id;
        f = d.m.get(e);
        if (null == (g = f) || !g.size) return u.return();
        h =
          'function' === typeof window.CustomEvent
            ? new CustomEvent(e, { detail: c, bubbles: !0, cancelable: !0 })
            : (function () {
                var w = document.createEvent('CustomEvent');
                w.initCustomEvent(e, !0, !0, c);
                return w;
              })();
        if (_.H(rw)) {
          n = [];
          p = {};
          r = _.A(f);
          for (m = r.next(); !m.done; p = { uc: p.uc }, m = r.next())
            (p.uc = m.value),
              n.push(
                new v.Promise(
                  (function (w) {
                    return function (D) {
                      return _.jb(function (K) {
                        if (1 == K.j) return kb(K, 0, 2);
                        _.ph(
                          d.context,
                          b,
                          function () {
                            d.m.has(e) && f.has(w.uc) && w.uc(h);
                          },
                          !0
                        );
                        D();
                        K.j = 0;
                      });
                    };
                  })(p)
                )
              );
          return kb(u, v.Promise.all(n), 0);
        }
        l = {};
        k = _.A(f);
        m = k.next();
      }
      if (7 != u.j) {
        if (m.done) {
          u.j = 0;
          return;
        }
        l.tc = m.value;
        return kb(u, 0, 7);
      }
      _.ph(
        d.context,
        b,
        (function (w) {
          return function () {
            d.m.has(e) && f.has(w.tc) && w.tc(h);
          };
        })(l),
        !0
      );
      l = { tc: l.tc };
      m = k.next();
      u.j = 4;
    });
  };
  var qF = new lF(),
    rF = new lF(),
    Ro = new lF(),
    sF = new lF(),
    To = new lF(),
    tF = new lF(),
    uF = new lF(),
    Ho = new lF(),
    vF = new lF(),
    wF = new lF();
  var xF = function () {
    this.data = void 0;
    this.status = 0;
    this.j = [];
  };
  xF.prototype.Jc = function () {
    return this.j;
  };
  xF.prototype.pd = function () {
    this.j = [];
  };
  var yF, CF, FF, bq, GF, HF, BF, AF, zF, IF;
  yF = function () {
    this.j = new v.Map();
    this.B = 0;
    this.m = new v.Map();
    this.Ec = null;
    this.J = this.D = this.L = this.l = 0;
    this.H = new xF();
  };
  CF = function (a, b) {
    a.j.get(b) ||
      (a.j.set(b, {
        ub: !0,
        Md: '',
        yb: '',
        xe: 0,
        ne: 0,
        Jd: [],
        Kd: [],
        pb: !1,
      }),
      _.Qm(b, function () {
        a.j.delete(b);
        zF(a, b);
      }),
      oF(b, rF, function (c) {
        c = c.detail;
        var d = (0, C.K)(a.j.get(b));
        d.Md = x(c, 33) || '';
        d.pb = !0;
        AF(a, b, function () {
          return void (d.Md = '');
        });
        BF(a, b, function () {
          return void (d.pb = !1);
        });
      }));
  };
  _.So = function (a, b) {
    var c, d;
    return null != (d = null == (c = a.j.get(b)) ? void 0 : c.ub) ? d : !1;
  };
  _.DF = function (a, b) {
    if ((a = a.j.get(b))) a.ub = !1;
  };
  _.EF = function (a, b) {
    if ((a = a.j.get(b))) a.ub = !0;
  };
  FF = function (a, b) {
    if (!b.length) return [];
    var c = Wg(b[0].getAdUnitPath());
    b.every(function (g) {
      return Wg(g.getAdUnitPath()) === c;
    });
    var d = [];
    a = _.A(a.j);
    for (var e = a.next(); !e.done; e = a.next()) {
      var f = _.A(e.value);
      e = f.next().value;
      (f = f.next().value.Md) &&
        Wg(e.getAdUnitPath()) === c &&
        !_.t(b, 'includes').call(b, e) &&
        d.push(f);
    }
    return d;
  };
  bq = function (a, b) {
    var c, d;
    return null != (d = null == (c = a.j.get(b)) ? void 0 : c.yb) ? d : '';
  };
  GF = function (a, b) {
    return (a = a.j.get(b)) ? a.xe - 1 : 0;
  };
  HF = function (a, b) {
    var c = (0, C.K)(a.m.get(b)) - 1;
    0 === c ? a.m.delete(b) : a.m.set(b, c);
    return c;
  };
  BF = function (a, b, c) {
    (a = a.j.get(b)) && a.Jd.push(c);
  };
  AF = function (a, b, c) {
    (a = a.j.get(b)) && a.Kd.push(c);
  };
  zF = function (a, b) {
    if ((a = a.j.get(b)))
      for (
        b = a.Kd.slice(), a.Kd.length = 0, a = _.A(b), b = a.next();
        !b.done;
        b = a.next()
      )
        (b = b.value), b();
  };
  IF = function (a, b) {
    if ((a = a.j.get(b)))
      for (
        b = a.Jd.slice(), a.Jd.length = 0, a = _.A(b), b = a.next();
        !b.done;
        b = a.next()
      )
        (b = b.value), b();
  };
  yF.prototype.pb = function (a) {
    var b, c;
    return null != (c = null == (b = this.j.get(a)) ? void 0 : b.pb) ? c : !1;
  };
  var JF = function (a, b, c) {
      if ((a = a.j.get(b))) a.we = c;
    },
    KF = function (a, b) {
      if ((a = a.j.get(b))) {
        var c;
        null == (c = a.we) || c.Ea();
        delete a.we;
      }
    };
  var LF = function () {
    var a = {};
    return (
      (a.adsense_channel_ids = 'channel'),
      (a.adsense_ad_types = 'ad_type'),
      (a.adsense_ad_format = 'format'),
      (a.adsense_background_color = 'color_bg'),
      (a.adsense_border_color = 'color_border'),
      (a.adsense_link_color = 'color_link'),
      (a.adsense_text_color = 'color_text'),
      (a.adsense_url_color = 'color_url'),
      (a.page_url = 'url'),
      (a.adsense_allow_expandable_ads = 'ea'),
      (a.adsense_encoding = 'oe'),
      (a.adsense_family_safe = 'adsafe'),
      (a.adsense_flash_version = 'flash'),
      (a.adsense_font_face = 'f'),
      (a.adsense_hints = 'hints'),
      (a.adsense_keyword_type = 'kw_type'),
      (a.adsense_keywords = 'kw'),
      (a.adsense_test_mode = 'adtest'),
      (a.alternate_ad_iframe_color = 'alt_color'),
      (a.alternate_ad_url = 'alternate_ad_url'),
      (a.demographic_age = 'cust_age'),
      (a.demographic_gender = 'cust_gender'),
      (a.document_language = 'hl'),
      a
    );
  };
  var Z = function (a, b, c) {
    iz.call(this, b, c);
    this.context = a;
  };
  _.O(Z, iz);
  Z.prototype.T = function (a) {
    mh(this.context, this.id, a);
    var b, c;
    null == (b = window.console) || null == (c = b.error) || c.call(b, a);
  };
  var MF = function (a, b, c, d, e) {
    var f = null,
      g = _.ih(a.context, b, e);
    _.hb(c, d, g) &&
      ((f = function () {
        return _.Pd(c, d, g);
      }),
      _.Qm(a, f));
    return f;
  };
  var NF = /(<head(\s+[^>]*)?>)/i,
    yp = function (a, b, c, d, e) {
      Z.call(this, a, 665);
      this.A = W(this);
      this.l = X(this, b);
      this.C = Y(this, c);
      this.F = X(this, d);
      this.o = X(this, e);
    };
  _.O(yp, Z);
  yp.prototype.j = function () {
    var a;
    0 === this.l.value.kind && null != (a = this.C.value) && x(a, 1)
      ? ((a = this.l.value.La),
        this.o.value ||
          Ka() ||
          (a = a.replace(
            NF,
            "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">"
          )),
        this.F.value &&
          !this.o.value &&
          (a = a.replace(NF, '$1<meta name="referrer" content="origin">')),
        this.A.G({ kind: 0, La: a }))
      : this.A.G(this.l.value);
  };
  var cq = function (a, b, c, d, e, f, g, h) {
    Z.call(this, a, 718);
    this.C = Y(this, c);
    this.l = Y(this, d);
    lz(this, e);
    this.F = X(this, f);
    this.o = X(this, g);
    this.O = X(this, h);
    this.M = pF(b, vF);
  };
  _.O(cq, Z);
  cq.prototype.j = function () {
    var a = this,
      b,
      c,
      d;
    return _.jb(function (e) {
      if (1 == e.j) {
        var f = !a.O.value;
        if (null == a.l.value || 'height' !== a.C.value || f) return e.return();
        b = a.F.value;
        c = a.o.value;
        OF(c, !1);
        _.Jv(c, 'min-width', '100%');
        _.Jv(b, 'min-width', '100%');
        return kb(e, a.M, 2);
      }
      if (a.J) return e.return();
      d = b.contentDocument;
      if (!d) return e.return();
      f = d.body.offsetWidth;
      b.setAttribute('height', String(d.body.offsetHeight));
      b.setAttribute('width', String(f));
      OF(c, !0);
      e.j = 0;
    });
  };
  var OF = function (a, b) {
    _.Jv(a, 'visibility', b ? 'visible' : 'hidden');
  };
  var Hj = new v.Map(),
    Gj = new v.Map();
  var Jj = function (a, b) {
    this.push = J(a, 76, b.push.bind(b));
  };
  var Lj = function (a, b) {
    this.messageId = a;
    this.messageArgs = b;
  };
  Lj.prototype.getMessageId = function () {
    return this.messageId;
  };
  Lj.prototype.getMessageArgs = function () {
    return this.messageArgs;
  };
  var PF = M(2),
    QF = M(3),
    RF = M(4),
    SF = M(5),
    TF = M(6),
    UF = M(12),
    VF = M(14),
    WF = M(16),
    XF = M(19),
    YF = M(20),
    ZF = M(23),
    $F = M(26),
    aG = M(28),
    bG = M(149),
    cG = M(30),
    dG = M(31),
    eG = M(34),
    fG = M(35),
    gG = M(36),
    Yn = M(38),
    hG = M(40),
    iG = M(48),
    jG = M(50),
    kG = M(60),
    lG = M(63),
    mG = M(64),
    nG = M(66),
    oG = M(68),
    pG = M(69),
    qG = M(70),
    rG = M(71),
    sG = M(78),
    tG = M(80),
    uG = M(82),
    vG = M(84),
    wG = M(85),
    xG = M(87),
    ok = M(88),
    yG = M(92),
    zG = M(93),
    AG = M(99),
    BG = M(103),
    CG = M(104),
    DG = M(105),
    EG = M(106),
    FG = M(107),
    GG = M(108),
    HG = M(113),
    IG = M(114),
    JG = M(115),
    KG = M(117),
    LG = M(118),
    MG = M(119),
    Hk = M(121),
    NG = M(122),
    OG = M(123),
    oo = M(125),
    PG = M(126),
    QG = M(127),
    RG = M(144),
    Hn = M(129),
    Jn = M(132),
    SG = M(134),
    TG = M(135),
    UG = M(136),
    VG = M(137),
    WG = M(138),
    XG = M(139),
    YG = M(140),
    Do = M(142),
    ZG = M(143),
    $G = M(145),
    aH = M(147),
    io = M(148);
  var bH = function (a, b, c) {
    var d = this;
    this.addEventListener = J(a, 86, function (e, f) {
      if ('function' !== typeof f)
        return N(b, Nj('Service.addEventListener', [e, f])), d;
      var g = Oj(e);
      if (!g) return N(b, zG(e)), d;
      c.addEventListener(g, f);
      return d;
    });
    this.removeEventListener = J(a, 904, function (e, f) {
      var g = Oj(e);
      'function' === typeof f && g
        ? c.removeEventListener(g, f)
        : N(b, Nj('Service.removeEventListener', [e, f]));
    });
    this.getSlots = J(a, 573, function () {
      return c.j.map(function (e) {
        return (0, C.K)(e.j);
      });
    });
    this.getSlotIdMap = J(a, 574, function () {
      for (var e = {}, f = _.A(c.j), g = f.next(); !g.done; g = f.next())
        (g = g.value), (e[g.toString()] = g.j);
      return e;
    });
    this.getName = J(a, 575, function () {
      return c.getName();
    });
  };
  var Pj = function (a, b, c) {
    bH.call(this, a, b, c);
    this.notifyUnfilledSlots = J(a, 69, function (d) {
      c.ub && cH(c, dH(c, d));
    });
    this.refreshAllSlots = J(a, 60, function () {
      c.ub && cH(c);
    });
    this.setVideoSession = J(a, 61, function (d, e, f) {
      c.F = e;
      c.M = f;
      'number' === typeof d && ((e = mi().j), _.z(e, 29, d));
    });
    this.getDisplayAdsCorrelator = J(a, 62, function (d) {
      return eH(c, d);
    });
    this.getVideoStreamCorrelator = J(a, 63, function () {
      var d = mi().j;
      d = x(d, 29);
      return null != d ? d : 0;
    });
    this.isSlotAPersistentRoadblock = J(a, 64, function (d) {
      var e = _.t(c.j, 'find').call(c.j, function (f) {
        return f.j === d;
      });
      return !!e && fH(c, e);
    });
    this.onImplementationLoaded = J(a, 65, function () {
      c.m.info(iG('GPT CompanionAds'));
    });
    this.slotRenderEnded = J(a, 67, function (d, e, f) {
      var g = _.t(c.j, 'find').call(c.j, function (h) {
        return h.j === d;
      });
      return g && gH(c, g, e, f);
    });
    this.setRefreshUnfilledSlots = J(a, 59, function (d) {
      return c.setRefreshUnfilledSlots(d);
    });
  };
  _.O(Pj, bH);
  var Rj = function (a, b, c) {
    bH.call(this, a, b, c);
    this.setContent = J(a, 72, function (d) {
      var e = _.t(c.j, 'find').call(c.j, function (f) {
        return f.j === d;
      });
      N(b, RG(), e);
    });
  };
  _.O(Rj, bH);
  var hH = P(['https://console.googletagservices.com/pubconsole/loader.js']),
    dk = B(hH),
    hk,
    gk = !1,
    Yj = !1,
    ak = !1;
  var Vn = function (a, b) {
    this.getAllEvents = J(a, 563, function () {
      return Yj ? iH(b).slice() : [];
    });
    this.getEventsBySlot = J(a, 565, function (c) {
      return Yj ? jH(b, c).slice() : [];
    });
    this.getEventsByLevel = J(a, 566, function (c) {
      return Yj ? kH(b, c).slice() : [];
    });
  };
  var rk = function (a, b, c, d) {
    var e = this,
      f = c.getSlotId(),
      g = mi().j,
      h = (0, C.K)(nn(mi(), f.getDomId()));
    this.set = J(a, 83, function (l, k) {
      'page_url' === l &&
        k &&
        ((l = [lk(mk(new nk(), l), [String(k)])]), Nc(h, 3, l));
      return e;
    });
    this.get = J(a, 84, function (l) {
      if ('page_url' !== l) return null;
      var k, m;
      return null !=
        (m =
          null ==
          (k = ((E = (0, C.K)(h.ta())), _.t(E, 'find')).call(E, function (n) {
            return x(n, 1) === l;
          }))
            ? void 0
            : tl(k, 2)[0])
        ? m
        : null;
    });
    this.setClickUrl = J(a, 79, function (l) {
      'string' === typeof l
        ? h.setClickUrl(l)
        : N(b, Nj('Slot.setClickUrl', [l]), f);
      return e;
    });
    this.setTargeting = J(a, 81, function (l, k) {
      pk(f, h, l, k, b);
      return e;
    });
    this.updateTargetingFromMap = J(a, 85, function (l) {
      qk(f, h, l, b);
      return e;
    });
    this.display = J(a, 78, function () {
      lH(d, f, Wh(g, mi().m));
    });
    this.setTagForChildDirectedTreatment = J(a, 80, function (l) {
      if (0 === l || 1 === l) {
        var k = lE(g) || new iE();
        k.setTagForChildDirectedTreatment(l);
        _.ch(g, 25, k);
      }
      return e;
    });
    this.setForceSafeFrame = J(a, 567, function (l) {
      'boolean' === typeof l
        ? _.z(h, 12, l)
        : N(b, Nj('PassbackSlot.setForceSafeFrame', [String(l)]), f);
      return e;
    });
    this.setTagForUnderAgeOfConsent = J(a, 448, function (l) {
      if (0 === l || 1 === l) {
        var k = lE(g) || new iE();
        k.setTagForUnderAgeOfConsent(l);
        _.ch(g, 25, k);
      }
      return e;
    });
  };
  var Sl = function (a, b) {
    this.push = J(a, 932, function (c) {
      b.push(c);
    });
  };
  var xn = { yh: 0, vh: 1, wh: 2, xh: 3 };
  var uk = { REWARDED: 4, TOP_ANCHOR: 2, BOTTOM_ANCHOR: 3, INTERSTITIAL: 5 },
    wk = { IAB_AUDIENCE_1_1: 1, IAB_CONTENT_2_1: 2, IAB_CONTENT_2_2: 3 },
    vk = { PURCHASED: 1, ORGANIC: 2 };
  var Rk = function (a) {
      var b = this;
      a = void 0 === a ? mi().j : a;
      this.J = '';
      this.j = this.storage = null;
      this.B = this.l = this.D = !1;
      this.m = function () {
        return !1;
      };
      var c = {},
        d = {},
        e = {};
      this.H =
        ((e[3] =
          ((c[13] = function () {
            return eb.apply(0, arguments).some(function (f) {
              return 0 == b.J.lastIndexOf(f, 0);
            });
          }),
          (c[12] = function () {
            return !!G(a, 6);
          }),
          (c[15] = function (f) {
            return b.m(f);
          }),
          (c[48] = function () {
            return !!b.storage;
          }),
          (c[51] = function () {
            return b.D;
          }),
          (c[66] = function () {
            try {
              return !!HTMLScriptElement.supports('webbundle');
            } catch (f) {
              return !1;
            }
          }),
          (c[67] = function () {
            return b.l;
          }),
          (c[68] = function () {
            return b.B;
          }),
          c)),
        (e[4] =
          ((d[8] = function (f) {
            var g;
            return null != (g = ie(b.storage, Number(f))) ? g : void 0;
          }),
          (d[10] = function (f) {
            return b.j ? Ih(f + b.j) % 1e3 : void 0;
          }),
          d)),
        (e[5] = {}),
        e);
    },
    mH = function (a, b) {
      b &&
        !a.j &&
        (a.j =
          _.t(b.split(':'), 'find').call(b.split(':'), function (c) {
            return 0 === c.indexOf('ID=');
          }) || null);
    };
  var Uk = function (a, b, c) {
    mF.call(this, a);
    this.slotId = b;
    this.j = c;
  };
  _.O(Uk, mF);
  Uk.prototype.getSlotId = function () {
    return this.slotId;
  };
  var nH = '',
    Ak = null,
    Gk = _.or(function () {
      var a, b;
      null == (a = window.console) ||
        null == (b = a.warn) ||
        b.call(
          a,
          'googletag.pubads().setSafeFrameConfig({useUniqueDomain: ...}) has been removed, and no longer has any effect.'
        );
    });
  var Td = function (a, b, c, d) {
    mF.call(this, a);
    this.adUnitPath = b;
    this.fb = d;
    this.j = null;
    this.id = this.adUnitPath + '_' + c;
  };
  _.O(Td, mF);
  aa = Td.prototype;
  aa.getId = function () {
    return this.id;
  };
  aa.getAdUnitPath = function () {
    return this.adUnitPath;
  };
  aa.getName = function () {
    return this.adUnitPath;
  };
  aa.toString = function () {
    return this.getId();
  };
  aa.getDomId = function () {
    return this.fb;
  };
  var oH = function (a, b) {
    a.j = b;
  };
  var Mk =
    /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js|\/pagead\/managed\/js\/gpt\.js)/;
  var pH = _.or(function () {
      return void vv(
        'google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.'
      );
    }),
    qH = _.or(function () {
      return void vv(
        'googletag.pubads().setCookieOptions() has been removed, and no longer has any effect. Consider migrating to Limited Ads.'
      );
    }),
    rH = _.or(function () {
      return void vv(
        'The following functions are deprecated: googletag.pubads().setTagForChildDirectedTreatment(), googletag.pubads().clearTagForChildDirectedTreatment(), googletag.pubads().setRequestNonPersonalizedAds(), and googletag.pubads().setTagForUnderAgeOfConsent(). Please use googletag.pubads().setPrivacySettings() instead.'
      );
    }),
    sH = function () {
      Object.defineProperty(window, 'google_DisableInitialLoad', {
        get: function () {
          pH();
          return !0;
        },
        set: function () {
          pH();
        },
        configurable: !0,
      });
    },
    Wk = function (a, b, c, d, e) {
      bH.call(this, a, b, c);
      var f = this,
        g = mi().j,
        h = mi().m,
        l = !1;
      this.setTargeting = J(a, 1, function (k, m) {
        var n = null;
        'string' === typeof m
          ? (n = [m])
          : Array.isArray(m)
          ? (n = m)
          : ta(m) && (n = _.t(Array, 'from').call(Array, m));
        var p = 'string' === typeof k && !jk(k);
        n = n && ya(n);
        var r,
          u =
            null !=
            (r =
              null == n
                ? void 0
                : n.every(function (w) {
                    return 'string' === typeof w;
                  }))
              ? r
              : !1;
        if (!p || !u) return N(b, Nj('PubAdsService.setTargeting', [k, m])), f;
        m = n;
        p = ((E = be(g, nk, 2)), _.t(E, 'find')).call(E, function (w) {
          return x(w, 1) === k;
        });
        if ('gpt-beta' === k) {
          if (c.B) return N(b, EG(m.join())), f;
          if (p) return N(b, FG(m.join())), f;
          m = Sk(m, e);
        }
        p ? lk(p, m) : ((p = lk(mk(new nk(), k), m)), hf(g, 2, nk, p));
        b.info(ok(k, m.join(), c.getName()));
        return f;
      });
      this.clearTargeting = J(a, 2, function (k) {
        if (void 0 === k) return Nc(g, 2), b.info(CG(c.getName())), f;
        if ('gpt-beta' === k) return N(b, GG(k)), f;
        var m = be(g, nk, 2),
          n = _.t(m, 'findIndex').call(m, function (p) {
            return x(p, 1) === k;
          });
        if (0 > n) return N(b, vG(k, c.getName())), f;
        m.splice(n, 1);
        Nc(g, 2, m);
        b.info(uG(k, c.getName()));
        return f;
      });
      this.getTargeting = J(a, 38, function (k) {
        if ('string' !== typeof k)
          return N(b, Nj('PubAdsService.getTargeting', [k])), [];
        var m = ((E = be(g, nk, 2)), _.t(E, 'find')).call(E, function (n) {
          return x(n, 1) === k;
        });
        return m ? tl(m, 2).slice() : [];
      });
      this.getTargetingKeys = J(a, 39, function () {
        return be(g, nk, 2).map(function (k) {
          return (0, C.K)(x(k, 1));
        });
      });
      this.setCategoryExclusion = J(a, 3, function (k) {
        if ('string' !== typeof k || jk(k))
          return N(b, Nj('PubAdsService.setCategoryExclusion', [k])), f;
        ((E = tl(g, 3)), _.t(E, 'includes')).call(E, k) || us(g, 3, k);
        b.info(wG(k));
        return f;
      });
      this.clearCategoryExclusions = J(a, 4, function () {
        _.z(g, 3, mc);
        b.info(xG());
        return f;
      });
      this.disableInitialLoad = J(a, 5, function () {
        _.z(g, 4, !0);
        l || ((l = !0), sH());
      });
      this.enableSingleRequest = J(a, 6, function () {
        if (c.B && !G(g, 6))
          return N(b, kG('PubAdsService.enableSingleRequest')), !1;
        b.info(lG('single request'));
        _.z(g, 6, !0);
        return !0;
      });
      this.enableAsyncRendering = J(a, 7, function () {
        return !0;
      });
      this.enableSyncRendering = J(a, 8, function () {
        vv(
          'GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.'
        );
        return !1;
      });
      this.enableLazyLoad = J(a, 485, function (k) {
        var m = new Bp();
        m = _.z(m, 1, 800);
        m = _.z(m, 2, 400);
        m = eE(m, 3);
        if (_.ka(k)) {
          var n = k.fetchMarginPercent;
          'number' === typeof n &&
            (0 <= n ? _.z(m, 1, n) : -1 === n && Ne(m, 1));
          n = k.renderMarginPercent;
          'number' === typeof n &&
            (0 <= n ? _.z(m, 2, n) : -1 === n && Ne(m, 2));
          k = k.mobileScaling;
          'number' === typeof k && (0 < k ? eE(m, k) : -1 === k && eE(m, 1));
        }
        _.ch(g, 5, m);
      });
      this.setCentering = J(a, 9, function (k) {
        k = !!k;
        b.info(mG('centering', String(k)));
        _.z(g, 15, k);
      });
      this.definePassback = J(a, 10, function (k, m) {
        return (k = Vk(a, b, c, k, m, d)) && k.te;
      });
      this.refresh = J(a, 11, function () {
        var k = eb.apply(0, arguments),
          m = _.A(k),
          n = m.next().value;
        m = m.next().value;
        m = void 0 === m ? {} : m;
        (n && !Array.isArray(n)) ||
        !_.ka(m) ||
        (m.changeCorrelator && 'boolean' !== typeof m.changeCorrelator)
          ? N(b, Nj('PubAdsService.refresh', k))
          : ((m && !1 === m.changeCorrelator) || g.setCorrelator(zv()),
            (n = n ? Pk(n, c) : c.j),
            c.refresh(Wh(g, h), n) || N(b, Nj('PubAdsService.refresh', k)));
      });
      this.enableVideoAds = J(a, 12, function () {
        _.z(g, 21, !0);
        tH(c, g);
      });
      this.setVideoContent = J(a, 13, function (k, m) {
        var n = _.z(g, 21, !0);
        k = _.z(n, 22, String(null != k ? k : ''));
        _.z(k, 23, String(null != m ? m : ''));
        tH(c, g);
      });
      this.collapseEmptyDivs = J(a, 14, function (k) {
        k = void 0 === k ? !1 : k;
        _.z(g, 11, !0);
        k = !!k;
        _.z(g, 10, k);
        b.info(sG(String(k)));
        return !!G(g, 11);
      });
      this.clear = J(a, 15, function (k) {
        if (Array.isArray(k)) return uH(c, g, h, Pk(k, c));
        if (void 0 === k) return uH(c, g, h, c.j);
        N(b, Nj('PubAdsService.clear', [k]));
        return !1;
      });
      this.setLocation = J(a, 16, function (k) {
        if ('string' !== typeof k)
          return N(b, Nj('PubAdsService.setLocation', [k])), f;
        _.z(g, 8, k);
        return f;
      });
      this.setCookieOptions = J(a, 17, function () {
        qH();
        return f;
      });
      this.setTagForChildDirectedTreatment = J(a, 18, function (k) {
        rH();
        if (1 !== k && 0 !== k)
          return (
            N(
              b,
              NG('PubadsService.setTagForChildDirectedTreatment', Ik(k), '0,1')
            ),
            f
          );
        var m = lE(g) || new iE();
        m.setTagForChildDirectedTreatment(k);
        _.ch(g, 25, m);
        return f;
      });
      this.clearTagForChildDirectedTreatment = J(a, 19, function () {
        rH();
        var k = lE(g);
        if (!k) return f;
        k.clearTagForChildDirectedTreatment();
        _.ch(g, 25, k);
        return f;
      });
      this.setPublisherProvidedId = J(a, 20, function (k) {
        k = String(k);
        b.info(mG('PPID', k));
        _.z(g, 16, k);
        return f;
      });
      this.set = J(a, 21, function (k, m) {
        if (
          'string' !== typeof k ||
          !k.length ||
          void 0 === LF()[k] ||
          'string' !== typeof m
        )
          return N(b, Nj('PubAdsService.set', [k, m])), f;
        var n = ((E = g.ta()), _.t(E, 'find')).call(E, function (p) {
          return x(p, 1) === k;
        });
        n ? lk(n, [m]) : ((n = dE(mk(new nk(), k), m)), hf(g, 14, nk, n));
        b.info(gG(k, String(m), c.getName()));
        return f;
      });
      this.get = J(a, 22, function (k) {
        if ('string' !== typeof k)
          return N(b, Nj('PubAdsService.get', [k])), null;
        var m = ((E = g.ta()), _.t(E, 'find')).call(E, function (n) {
          return x(n, 1) === k;
        });
        return (m = m && tl(m, 2)) ? m[0] : null;
      });
      this.getAttributeKeys = J(a, 23, function () {
        return g.ta().map(function (k) {
          return (0, C.K)(x(k, 1));
        });
      });
      this.display = J(a, 24, function (k, m, n, p) {
        return void c.display(k, m, d, n, p);
      });
      this.updateCorrelator = J(a, 25, function () {
        vv(Ok('update'));
        N(b, JG());
        g.setCorrelator(zv());
        return f;
      });
      this.defineOutOfPagePassback = J(a, 35, function (k) {
        k = Vk(a, b, c, k, [1, 1], d);
        if (!k) return null;
        _.z(k.Ya, 15, 1);
        return k.te;
      });
      this.setForceSafeFrame = J(a, 36, function (k) {
        if ('boolean' !== typeof k)
          return N(b, Nj('PubAdsService.setForceSafeFrame', [Ik(k)])), f;
        _.z(g, 13, k);
        return f;
      });
      this.setSafeFrameConfig = J(a, 37, function (k) {
        var m = Jk(b, k);
        if (!m) return N(b, Nj('PubAdsService.setSafeFrameConfig', [k])), f;
        _.ch(g, 18, m);
        return f;
      });
      this.setRequestNonPersonalizedAds = J(a, 445, function (k) {
        rH();
        if (0 !== k && 1 !== k)
          return (
            N(
              b,
              NG('PubAdsService.setRequestNonPersonalizedAds', Ik(k), '0,1')
            ),
            f
          );
        var m = lE(g) || new iE();
        _.z(m, 8, !!k);
        _.ch(g, 25, m);
        return f;
      });
      this.setTagForUnderAgeOfConsent = J(a, 447, function (k) {
        k = void 0 === k ? 2 : k;
        rH();
        if (2 !== k && 0 !== k && 1 !== k)
          return (
            N(
              b,
              NG('PubadsService.setTagForUnderAgeOfConsent', Ik(k), '2,0,1')
            ),
            f
          );
        var m = lE(g) || new iE();
        m.setTagForUnderAgeOfConsent(k);
        _.ch(g, 25, m);
        return f;
      });
      this.getCorrelator = J(a, 27, function () {
        return String(x(g, 26));
      });
      this.getTagSessionCorrelator = J(a, 631, function () {
        return He(_.q);
      });
      this.getVideoContent = J(a, 30, function () {
        return vH(c, g);
      });
      this.getVersion = J(a, 568, function () {
        return a.rb ? String(a.rb) : a.Ga;
      });
      this.forceExperiment = J(a, 569, function (k) {
        return void c.forceExperiment(k);
      });
      this.setCorrelator = J(a, 28, function (k) {
        vv(Ok('set'));
        N(b, IG());
        if (Nh(window)) return f;
        if (!gl(k)) return N(b, Nj('PubadsService.setCorrelator', [Ik(k)])), f;
        k = g.setCorrelator(k);
        _.z(k, 27, !0);
        return f;
      });
      this.markAsAmp = J(a, 570, function () {
        window.console &&
          window.console.warn &&
          window.console.warn(
            'googletag.pubads().markAsAmp() is deprecated and ignored.'
          );
      });
      this.isSRA = J(a, 571, function () {
        return !!G(g, 6);
      });
      this.setImaContent = J(a, 328, function (k, m) {
        if (null != x(g, 22)) {
          var n = _.z(g, 21, !0);
          k = _.z(n, 22, String(null != k ? k : ''));
          _.z(k, 23, String(null != m ? m : ''));
          tH(c, g);
        } else _.z(g, 21, !0), tH(c, g), 'string' === typeof k && _.z(g, 19, k), 'string' === typeof m && _.z(g, 20, m);
      });
      this.getImaContent = J(a, 329, function () {
        return null != x(g, 22)
          ? vH(c, g)
          : c.B
          ? { vid: x(g, 19) || '', cmsid: x(g, 20) || '' }
          : null;
      });
      this.isInitialLoadDisabled = J(a, 572, function () {
        return !!G(g, 4);
      });
      this.setPrivacySettings = J(a, 648, function (k) {
        if (!_.ka(k))
          return N(b, Nj('PubAdsService.setPrivacySettings', [k])), f;
        var m = k.restrictDataProcessing,
          n = k.childDirectedTreatment,
          p = k.underAgeOfConsent,
          r = k.limitedAds,
          u = k.nonPersonalizedAds,
          w = k.userOptedOutOfPersonalization,
          D = k.trafficSource,
          K,
          F = null != (K = lE(g)) ? K : new iE();
        'boolean' === typeof u
          ? _.z(F, 8, u)
          : void 0 !== u &&
            N(
              b,
              Hk(
                'PubAdsService.setPrivacySettings',
                Ik(k),
                'nonPersonalizedAds',
                Ik(u)
              )
            );
        'boolean' === typeof w
          ? _.z(F, 13, w)
          : void 0 !== w &&
            N(
              b,
              Hk(
                'PubAdsService.setPrivacySettings',
                Ik(k),
                'userOptedOutOfPersonalization',
                Ik(w)
              )
            );
        'boolean' === typeof m
          ? _.z(F, 1, m)
          : void 0 !== m &&
            N(
              b,
              Hk(
                'PubAdsService.setPrivacySettings',
                Ik(k),
                'restrictDataProcessing',
                Ik(m)
              )
            );
        'boolean' === typeof r
          ? ((m = Nk()),
            r &&
              !G(F, 9) &&
              a.mc &&
              ((u = a.vb),
              (w = dh(a)),
              (K = new Tv()),
              (K = _.y(K, 1, !0, !1)),
              (K = _.y(K, 2, m, !1)),
              (w = fh(w, 11, gh, K)),
              Nd(u, w)),
            m ? _.z(F, 9, r) : r && N(b, aH()))
          : void 0 !== r &&
            N(
              b,
              Hk('PubAdsService.setPrivacySettings', Ik(k), 'limitedAds', Ik(r))
            );
        void 0 !== p &&
          (null === p
            ? F.setTagForUnderAgeOfConsent(2)
            : !1 === p
            ? F.setTagForUnderAgeOfConsent(0)
            : !0 === p
            ? F.setTagForUnderAgeOfConsent(1)
            : N(
                b,
                Hk(
                  'PubAdsService.setPrivacySettings',
                  Ik(k),
                  'underAgeOfConsent',
                  Ik(p)
                )
              ));
        void 0 !== n &&
          (null === n
            ? F.clearTagForChildDirectedTreatment()
            : !1 === n
            ? F.setTagForChildDirectedTreatment(0)
            : !0 === n
            ? F.setTagForChildDirectedTreatment(1)
            : N(
                b,
                Hk(
                  'PubAdsService.setPrivacySettings',
                  Ik(k),
                  'childDirectedTreatment',
                  Ik(n)
                )
              ));
        void 0 !== D &&
          (null === D
            ? Ne(F, 10)
            : ((E = _.t(Object, 'values').call(Object, vk)),
              _.t(E, 'includes')).call(E, D)
            ? _.z(F, 10, D)
            : N(
                b,
                Hk(
                  'PubAdsService.setPrivacySettings',
                  Ik(k),
                  'trafficSource',
                  Ik(D)
                )
              ));
        _.ch(g, 25, F);
        return f;
      });
    };
  _.O(Wk, bH);
  var Wn = function (a, b) {
    var c = this,
      d = [],
      e = [];
    this.addSize = _.ih(a, 88, function (f, g) {
      var h;
      if ((h = $k(f))) h = Zk(g) || (Array.isArray(g) && g.every(Zk));
      h
        ? d.push([f, g])
        : (e.push([f, g]), N(b, Nj('SizeMappingBuilder.addSize', [f, g])));
      return c;
    });
    this.build = _.ih(a, 89, function () {
      if (e.length) return N(b, eG(Ik(e))), null;
      sa(d);
      return d;
    });
  };
  var wH = function (a, b) {
    this.getId = J(a, 593, function () {
      return b.getId();
    });
    this.getAdUnitPath = J(a, 594, function () {
      return b.getAdUnitPath();
    });
    this.getName = J(a, 595, function () {
      return b.getName();
    });
    this.toString = J(a, 596, function () {
      return b.toString();
    });
    this.getDomId = J(a, 597, function () {
      return b.getDomId();
    });
  };
  var Bh = function (a) {
    _.S.call(this, a, -1, xH);
  };
  _.O(Bh, _.S);
  var xH = [2];
  var zH = function (a) {
    _.S.call(this, a, -1, yH);
  };
  _.O(zH, _.S);
  zH.prototype.getAdUnitPath = function () {
    return x(this, 1);
  };
  zH.prototype.getDomId = function () {
    return x(this, 2);
  };
  var AH = function (a, b) {
    _.z(a, 2, b);
  };
  zH.prototype.ta = function () {
    return be(this, nk, 3);
  };
  var BH = function (a, b) {
    Nc(a, 5, b);
  };
  zH.prototype.getClickUrl = function () {
    return x(this, 7);
  };
  zH.prototype.setClickUrl = function (a) {
    return _.z(this, 7, a);
  };
  var kk = function (a) {
    return be(a, nk, 9);
  };
  zH.prototype.Sa = function () {
    return Se(this, Ek, 13);
  };
  var cm = function (a) {
      return de(a, 15, 0);
    },
    on = function (a, b) {
      hf(a, 27, Ot, b);
    },
    CH = function (a) {
      a = vc(a, x(a, 26), Mb(a.fa));
      return null == a ? a : a;
    },
    yH = [3, 4, 5, 6, 8, 9, 27];
  var DH = function () {
      this.sourceAgnosticLineItemId =
        this.sourceAgnosticCreativeId =
        this.lineItemId =
        this.creativeId =
        this.campaignId =
        this.advertiserId =
          null;
      this.isBackfill = !1;
      this.encryptedTroubleshootingInfo =
        this.creativeTemplateId =
        this.companyIds =
        this.yieldGroupIds =
          null;
    },
    EH = function (a, b) {
      a.advertiserId = b;
    },
    FH = function (a, b) {
      a.campaignId = b;
    },
    GH = function (a, b) {
      a.yieldGroupIds = b;
    },
    HH = function (a, b) {
      a.companyIds = b;
    };
  var IH = function (a, b) {
    this.width = a;
    this.height = b;
  };
  IH.prototype.getWidth = function () {
    return this.width;
  };
  IH.prototype.getHeight = function () {
    return this.height;
  };
  var jl = function (a, b, c) {
    var d = this,
      e = (0, C.K)(nn(mi(), c.getDomId())),
      f = '',
      g = null,
      h = function () {
        return '';
      },
      l = '',
      k = !1;
    _.Qm(c, function () {
      e = new zH();
      f = '';
      g = null;
      h = function () {
        return '';
      };
      l = '';
    });
    oF(c, Ro, function (n) {
      var p = n.detail;
      n = p.ae;
      p = p.isBackfill;
      n && ((f = n), (k = p));
    });
    this.set = J(a, 40, function (n, p) {
      if ('string' !== typeof n || 'string' !== typeof p || void 0 === LF()[n])
        return N(b, Nj('Slot.set', [n, p]), c), d;
      var r = ((E = e.ta()), _.t(E, 'find')).call(E, function (u) {
        return x(u, 1) === n;
      });
      r ? lk(r, [p]) : ((r = mk(new nk(), n)), dE(r, p), hf(e, 3, nk, r));
      return d;
    });
    this.get = J(a, 41, function (n) {
      if ('string' !== typeof n) return N(b, Nj('Slot.get', [n]), c), null;
      var p = ((E = e.ta()), _.t(E, 'find')).call(E, function (r) {
        return x(r, 1) === n;
      });
      return (p = p && tl(p, 2)) ? p[0] : null;
    });
    this.getAttributeKeys = J(a, 42, function () {
      return e.ta().map(function (n) {
        return (0, C.K)(x(n, 1));
      });
    });
    this.addService = J(a, 43, function (n) {
      n = Hj.get(n);
      if (!n) return N(b, Nj('Slot.addService', [n]), c), d;
      var p = n.getName();
      if (((E = tl(e, 4)), _.t(E, 'includes')).call(E, p))
        return b.info(UF(p, c.toString()), c), d;
      n.slotAdded(c, e);
      return d;
    });
    this.defineSizeMapping = J(a, 44, function (n) {
      try {
        var p = e;
        if (!Array.isArray(n)) throw new hl('Size mapping must be an array');
        var r = n.map(il);
        Nc(p, 6, r);
      } catch (u) {
        (n = u),
          mh(a, 44, n),
          vv(
            'Incorrect usage of googletag.Slot defineSizeMapping: ' + n.message
          );
      }
      return d;
    });
    this.setClickUrl = J(a, 45, function (n) {
      if ('string' !== typeof n) return N(b, Nj('Slot.setClickUrl', [n]), c), d;
      e.setClickUrl(n);
      return d;
    });
    this.setCategoryExclusion = J(a, 46, function (n) {
      'string' !== typeof n || jk(n)
        ? N(b, Nj('Slot.setCategoryExclusion', [n]), c)
        : (((E = tl(e, 8)), _.t(E, 'includes')).call(E, n) || us(e, 8, n),
          b.info(VF(n), c));
      return d;
    });
    this.clearCategoryExclusions = J(a, 47, function () {
      _.z(e, 8, mc);
      b.info(WF(), c);
      return d;
    });
    this.getCategoryExclusions = J(a, 48, function () {
      return tl(e, 8).slice();
    });
    this.setTargeting = J(a, 49, function (n, p) {
      pk(c, e, n, p, b);
      return d;
    });
    this.updateTargetingFromMap = J(a, 649, function (n) {
      qk(c, e, n, b);
      return d;
    });
    this.clearTargeting = J(a, 50, function (n) {
      if (void 0 === n) return Nc(e, 9), b.info(XF(c.getAdUnitPath()), c), d;
      var p = kk(e),
        r = _.t(p, 'findIndex').call(p, function (u) {
          return x(u, 1) === n;
        });
      if (0 > r) return N(b, vG(n, c.getAdUnitPath()), c), d;
      p.splice(r, 1);
      Nc(e, 9, p);
      b.info(BG(n, c.getAdUnitPath()), c);
      return d;
    });
    this.getTargeting = J(a, 51, function (n) {
      if ('string' !== typeof n)
        return N(b, Nj('Slot.getTargeting', [n]), c), [];
      var p = ((E = kk(e)), _.t(E, 'find')).call(E, function (r) {
        return x(r, 1) === n;
      });
      return p ? tl(p, 2).slice() : [];
    });
    this.getTargetingKeys = J(a, 52, function () {
      return kk(e).map(function (n) {
        return (0, C.K)(x(n, 1));
      });
    });
    this.setCollapseEmptyDiv = J(a, 53, function (n, p) {
      p = void 0 === p ? !1 : p;
      if ('boolean' !== typeof n || 'boolean' !== typeof p)
        return N(b, Nj('Slot.setCollapseEmptyDiv', [n, p]), c), d;
      _.z(e, 10, n);
      _.z(e, 11, n && p);
      p && !n && N(b, YF(c.toString()), c);
      return d;
    });
    this.getAdUnitPath = J(a, 54, function () {
      return c.getAdUnitPath();
    });
    this.getSlotElementId = J(a, 598, function () {
      return c.getDomId();
    });
    this.setForceSafeFrame = J(a, 55, function (n) {
      if ('boolean' !== typeof n)
        return N(b, Nj('Slot.setForceSafeFrame', [String(n)]), c), d;
      _.z(e, 12, n);
      return d;
    });
    this.setSafeFrameConfig = J(a, 56, function (n) {
      var p = Jk(b, n);
      if (!p) return b.error(Nj('Slot.setSafeFrameConfig', [n]), c), d;
      _.ch(e, 13, p);
      return d;
    });
    oF(c, rF, function (n) {
      n = n.detail;
      if (G(n, 8)) g = null;
      else {
        g = new DH();
        var p = !!G(n, 9);
        g.isBackfill = p;
        var r = pc(n, 15, Zb),
          u = pc(n, 16, Zb);
        r.length &&
          u.length &&
          ((g.sourceAgnosticCreativeId = r[0]),
          (g.sourceAgnosticLineItemId = u[0]),
          p ||
            ((g.creativeId = r[0]),
            (g.lineItemId = u[0]),
            (p = pc(n, 22, Zb)) && p.length && (g.creativeTemplateId = p[0])));
        pc(n, 17, Zb).length && EH(g, pc(n, 17, Zb)[0]);
        pc(n, 18, Zb).length && FH(g, pc(n, 18, Zb)[0]);
        pc(n, 19, Zb).length && GH(g, pc(n, 19, Zb));
        pc(n, 20, Zb).length && HH(g, pc(n, 20, Zb));
        n = pc(n, 45, Hb(n.fa) & 18 ? qc : rc).map(function (w) {
          return Bc(w);
        });
        n.length && (g.encryptedTroubleshootingInfo = n[0]);
      }
    });
    this.getResponseInformation = J(a, 355, function () {
      return g;
    });
    this.getName = J(a, 170, function () {
      b.error(ZG());
      return c.getAdUnitPath();
    });
    var m = new wH(a, c);
    this.getSlotId = J(a, 579, function () {
      return m;
    });
    this.getServices = J(a, 580, function () {
      return tl(e, 4).map(function (n) {
        var p = bE[n];
        if (p) {
          var r, u, w;
          n =
            null != (w = null == (u = (r = Tj())[p]) ? void 0 : u.call(r))
              ? w
              : null;
        } else n = null;
        return n;
      });
    });
    this.getSizes = J(a, 581, function (n, p) {
      var r, u;
      return null !=
        (u =
          null == (r = Eh(e, n, p))
            ? void 0
            : r.map(function (w) {
                return G(w, 3) ? 'fluid' : new IH(w.getWidth(), w.getHeight());
              }))
        ? u
        : null;
    });
    this.getClickUrl = J(a, 582, function () {
      var n;
      return null != (n = e.getClickUrl()) ? n : '';
    });
    this.getTargetingMap = J(a, 583, function () {
      for (var n = {}, p = _.A(kk(e)), r = p.next(); !r.done; r = p.next())
        (r = r.value), x(r, 1) && (n[x(r, 1)] = tl(r, 2));
      return n;
    });
    this.getOutOfPage = J(a, 584, function (n) {
      return 'number' === typeof n ? cm(e) === n : 0 !== cm(e);
    });
    this.getCollapseEmptyDiv = J(a, 585, function () {
      return Kk(e, 10) ? G(e, 10) : null;
    });
    this.getDivStartsCollapsed = J(a, 586, function () {
      return Kk(e, 11) ? G(e, 11) : null;
    });
    oF(c, sF, function (n) {
      h = n.detail.Ye;
    });
    this.getContentUrl = J(a, 587, function () {
      return h();
    });
    this.getFirstLook = J(a, 588, function () {
      vv(
        'The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.'
      );
      return 0;
    });
    oF(c, rF, function (n) {
      var p;
      l = null != (p = n.detail.getEscapedQemQueryId()) ? p : '';
    });
    this.getEscapedQemQueryId = J(a, 591, function () {
      return l;
    });
    this.getHtml = J(a, 592, function () {
      return k
        ? (window.console &&
            console.warn &&
            console.warn(
              "This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."
            ),
          '')
        : f;
    });
    this.setConfig = J(a, 1022, function (n) {
      var p = CH(e);
      if (void 0 !== n.componentAuction) {
        n = _.A(n.componentAuction);
        for (var r = n.next(); !r.done; r = n.next()) {
          var u = r.value;
          r = u.configKey;
          u = u.auctionConfig;
          'string' !== typeof r ||
            jk(r) ||
            (null === u ? p.delete(r) : u && p.set(r, JSON.stringify(u)));
        }
      }
    });
  };
  var JH = function (a, b, c, d, e, f) {
    Z.call(this, a, 975);
    this.o = b;
    this.l = c;
    this.C = d;
    this.pbjs = e;
    this.requestBidsConfig = f;
    this.A = new ez();
  };
  _.O(JH, Z);
  JH.prototype.j = function () {
    sl(this.pbjs, this.o, this.l, this.C, this.requestBidsConfig);
    this.A.notify();
  };
  var KH = function (a, b, c) {
    Z.call(this, a, 937, _.Ce(Rw));
    this.window = c;
    this.Qa = W(this);
    this.l = W(this);
    this.C = W(this);
    this.o = W(this);
    this.Pa = W(this);
    this.Za = W(this);
    this.F = kz(this, b);
  };
  _.O(KH, Z);
  KH.prototype.j = function () {
    if (this.window.top !== this.window) LH(this);
    else {
      var a = this.F.value;
      if (a) {
        var b = {},
          c;
        if (null == (c = Se(a, Et, 2)) ? 0 : op(c, 2)) b['*'] = { Uc: !0 };
        c = new v.Set();
        for (var d = _.A(be(a, Dt, 1)), e = d.next(); !e.done; e = d.next()) {
          e = e.value;
          for (
            var f = _.A(
                [ef(e, 2), ef(e, 1)].filter(function (r) {
                  return !!r;
                })
              ),
              g = f.next();
            !g.done;
            g = f.next()
          )
            b[g.value] = { Uc: op(e, 3) };
          e = _.A(ln(e, 4));
          for (f = e.next(); !f.done; f = e.next()) c.add(f.value);
        }
        this.Qa.G(b);
        this.l.G([].concat(_.Ld(c)));
        var h, l;
        b =
          null == (h = Se(a, Et, 2))
            ? void 0
            : null == (l = Se(h, xt, 1))
            ? void 0
            : be(l, vt, 1);
        Yy(this.C, (null == b ? 0 : b.length) ? b : null);
        var k;
        this.Pa.G(!(null == (k = Se(a, Et, 2)) || !op(k, 4)));
        var m;
        this.Za.G(!(null == (m = Se(a, Et, 2)) || !op(m, 5)));
        var n, p;
        a =
          null == (n = Se(a, Et, 2))
            ? void 0
            : null == (p = Se(n, xt, 3))
            ? void 0
            : be(p, vt, 1);
        Yy(this.o, (null == a ? 0 : a.length) ? a : null);
      } else LH(this);
    }
  };
  var LH = function (a) {
    a.Qa.G({});
    a.l.G([]);
    Zy(a.C);
    a.Pa.G(!1);
    a.Za.G(!1);
    Zy(a.o);
  };
  KH.prototype.H = function (a) {
    this.m(a);
  };
  KH.prototype.m = function () {
    LH(this);
  };
  var MH = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/,
    NH = function (a, b, c, d, e, f, g, h, l, k, m, n) {
      Z.call(this, a, 920);
      this.O = b;
      this.V = c;
      this.sb = d;
      this.F = W(this);
      this.M = W(this);
      this.l = W(this);
      this.o = W(this);
      this.R = [];
      this.C = new v.Map();
      this.ka = X(this, e);
      this.ba = new dz(f);
      this.la = X(this, g);
      this.aa = Y(this, h);
      this.W = X(this, l);
      this.oa = X(this, k);
      this.ma = Y(this, m);
      n && (this.da = Y(this, n));
    };
  _.O(NH, Z);
  NH.prototype.j = function () {
    if (OH(this)) {
      var a = this.ba.value;
      if (a && a.libLoaded)
        if ('function' !== typeof a.getEvents) this.O.error(PG()), PH(this);
        else {
          var b = QH(this, a);
          a = b.sf;
          b = b.tf;
          a
            ? (this.l.G(a), Yy(this.o, b), this.F.G(this.C), this.M.G(this.R))
            : PH(this);
        }
      else PH(this);
    } else PH(this);
  };
  NH.prototype.H = function (a) {
    this.m(a);
  };
  NH.prototype.m = function (a) {
    this.O.error(QG(a.message));
    PH(this);
  };
  var PH = function (a) {
      a.l.G([]);
      Zy(a.o);
      Zy(a.F);
      Zy(a.M);
    },
    QH = function (a, b) {
      var c = (0, C.K)(b.getEvents)(),
        d = c.filter(function (g) {
          var h = g.args;
          return 'auctionEnd' === g.eventType && h.auctionId;
        }),
        e = !1,
        f = a.ka.value.map(function (g) {
          var h = new rt(),
            l = function (Ca) {
              return Ca === g.getDomId() || Ca === g.getAdUnitPath();
            },
            k,
            m = null != (k = RH.get(g)) ? k : 0,
            n;
          k =
            null !=
            (n = d.filter(function (Ca) {
              var ua, Oa, Ia;
              return (
                Number(null == (ua = Ca.args) ? void 0 : ua.timestamp) > m &&
                (null == (Oa = Ca.args)
                  ? void 0
                  : null == (Ia = Oa.adUnitCodes)
                  ? void 0
                  : _.t(Ia, 'find').call(Ia, l))
              );
            }))
              ? n
              : [];
          if (!k.length) return a.R.push(g), [g, h];
          var p;
          n =
            null ==
            (p = k.reduce(function (Ca, ua) {
              return Number(ua.args.timestamp) > Number(Ca.args.timestamp)
                ? ua
                : Ca;
            }))
              ? void 0
              : p.args;
          if (!n) return [g, h];
          var r = void 0 === n.bidderRequests ? [] : n.bidderRequests;
          p = void 0 === n.bidsReceived ? [] : n.bidsReceived;
          var u = n.auctionId;
          n = n.timestamp;
          if (!u || null == n || !r.length) return [g, h];
          RH.has(g) ||
            _.Qm(g, function () {
              return RH.delete(g);
            });
          RH.set(g, n);
          n = st(h);
          Math.random() < _.Ce(kw) &&
            b.version &&
            MH.test(b.version) &&
            _.z(n, 6, b.version);
          _.ch(n, 9, a.ma.value);
          k = di(function () {
            return Ql(c, u);
          });
          var w = kk(a.V[g.getDomId()]),
            D = {};
          r = _.A(r);
          for (
            var K = r.next();
            !K.done;
            D = { gd: D.gd, jd: D.jd }, K = r.next()
          ) {
            var F = K.value;
            D.gd = F.bidderCode;
            var R = F.bids;
            K = F.timeout;
            D.jd = F.src;
            F = F.auctionStart;
            var T = {};
            R = _.A(R);
            for (var Q = R.next(); !Q.done; T = { Lb: T.Lb }, Q = R.next()) {
              var ba = Q.value;
              T.Lb = ba.bidId;
              var ca = ba.transactionId;
              Q = ba.adUnitCode;
              var ma = ba.getFloor;
              ba = ba.mediaTypes;
              if (T.Lb && l(Q)) {
                e = !0;
                El(n, g, Q);
                ca &&
                  (null != x(n, 4) || _.z(n, 4, ca),
                  a.C.has(ca) || a.C.set(ca, F));
                null != x(n, 8) || _.z(n, 8, K);
                var Ga = _.t(p, 'find').call(
                  p,
                  (function (Ca) {
                    return function (ua) {
                      return ua.requestId === Ca.Lb;
                    };
                  })(T)
                );
                ca = vl(
                  n,
                  (function (Ca) {
                    return function () {
                      var ua = yl(new zl(), Ca.gd);
                      switch (Ca.jd) {
                        case 'client':
                          _.z(ua, 7, 1);
                          break;
                        case 's2s':
                          _.z(ua, 7, 2);
                      }
                      return ua;
                    };
                  })(D)()
                );
                Hl(n, ca, Q, a.aa.value, a.W.value, a.oa.value, ma);
                Ga
                  ? (xl(ca, 1),
                    'number' === typeof Ga.timeToRespond &&
                      Al(ca, Ga.timeToRespond),
                    (Q = ul(Ga, w, ba)),
                    wl(ca, Q))
                  : (Q = k().get(T.Lb)) && !Q.me
                  ? Al(xl(ca, 2), Math.round(Q.latency))
                  : Al(xl(ca, 3), K);
              }
            }
          }
          var Na;
          (null == (Na = b.getConfig) ? 0 : Na.call(b).useBidCache) &&
            Bl(n, g, u, w, b);
          return [g, h];
        });
      return {
        sf: e
          ? f.map(function (g) {
              return g[1];
            })
          : [],
        tf: e ? new v.Map(f) : null,
      };
    },
    OH = function (a) {
      var b = a.la.value,
        c,
        d;
      return (
        !(null == (c = a.da) || !c.value) ||
        !(null == (d = b['*']) || !d.Uc) ||
        a.sb.split(',').some(function (e) {
          var f;
          return !(null == (f = b[e]) || !f.Uc);
        })
      );
    },
    RH = new v.Map();
  var SH,
    TH = function (a, b, c, d, e, f, g) {
      Z.call(this, a, 1019);
      this.V = g;
      this.l = new dz(b);
      this.C = new dz(c);
      this.F = new dz(d);
      this.o = Y(this, e);
      this.M = Y(this, f);
    };
  _.O(TH, Z);
  TH.prototype.j = function () {
    UH(this);
    VH(this);
  };
  var VH = function (a) {
      if (!(Math.random() >= _.Ce(iw))) {
        var b = (a.M.value || []).filter(function (l) {
          return kk(a.V[l.getDomId()]).some(function (k) {
            return 'hb_pb' === x(k, 1);
          });
        });
        if (b.length) {
          var c,
            d,
            e,
            f,
            g,
            h = (
              null == (c = a.l.value)
                ? 0
                : null == (d = c.adUnits)
                ? 0
                : d.length
            )
              ? [].concat(
                  _.Ld(
                    new v.Set(
                      null == (e = a.l.value)
                        ? void 0
                        : e.adUnits.map(function (l) {
                            return l.code;
                          })
                    )
                  )
                )
              : _.t(Object, 'keys').call(
                  Object,
                  (null == (f = a.l.value)
                    ? void 0
                    : null == (g = f.getAdserverTargeting)
                    ? void 0
                    : g.call(f)) || {}
                );
          c = new Zj('haux');
          L(
            c,
            'ius',
            b
              .map(function (l) {
                return l.getAdUnitPath();
              })
              .join('~')
          );
          L(
            c,
            'dids',
            b
              .map(function (l) {
                return l.getDomId();
              })
              .join('~')
          );
          L(c, 'paucs', h.join('~'));
          Ci(c, a.context);
          bk(c);
        }
      }
    },
    UH = function (a) {
      ti(
        'ppc_hrc',
        function (b) {
          var c;
          null != SH ||
            (SH = (0, C.ra)(
              null ==
                (c = ((E = window.google_js_reporting_queue =
                  window.google_js_reporting_queue || []),
                _.t(E, 'find')).call(E, function (g) {
                  return '1' === g.label;
                }))
                ? void 0
                : c.value
            ));
          var d = ue('navigationStart', window);
          SH && L(b, 'lt', SH);
          var e;
          L(
            b,
            'tids',
            []
              .concat(
                _.Ld(
                  (null == (e = a.o.value) ? void 0 : _.t(e, 'keys').call(e)) ||
                    []
                )
              )
              .join()
          );
          var f;
          L(
            b,
            'asts',
            []
              .concat(
                _.Ld(
                  (null == (f = a.o.value)
                    ? void 0
                    : _.t(f, 'values').call(f)) || []
                )
              )
              .map(function (g) {
                return g - d;
              })
              .join()
          );
          a.C.value ? L(b, 'ht', a.C.value - d) : a.F.value && L(b, 'ht', 0);
          Ci(b, a.context);
        },
        a.o.value ? _.Ce(hw) : 0
      );
    };
  var sp = function (a, b, c, d, e) {
    Z.call(this, a, 982);
    this.l = Y(this, b);
    this.C = new dz(c);
    this.F = X(this, d);
    this.o = X(this, e);
  };
  _.O(sp, Z);
  sp.prototype.j = function () {
    var a = this,
      b = this.C.value;
    if (this.l.value && null != b && b.onEvent)
      for (
        var c = {},
          d = _.A([
            'bidWon',
            'staleRender',
            'adRenderFailed',
            'adRenderSucceeded',
          ]),
          e = d.next();
        !e.done;
        c = { Mb: c.Mb, vc: c.vc }, e = d.next()
      )
        (c.Mb = e.value),
          (c.vc = (function (f) {
            return function (g) {
              if (a.l.value === g.adId) {
                var h = new Zj('hbm_brt');
                Ci(h, a.context);
                L(h, 'et', f.Mb);
                L(h, 'sf', a.F.value);
                L(h, 'qqid', a.o.value);
                var l, k, m;
                L(
                  h,
                  'bc',
                  String(
                    null !=
                      (m =
                        null != (k = g.bidderCode)
                          ? k
                          : null == (l = g.bid)
                          ? void 0
                          : l.bidder)
                      ? m
                      : ''
                  )
                );
                bk(h);
              }
            };
          })(c)),
          b.onEvent(c.Mb, c.vc),
          _.Qm(
            this,
            (function (f) {
              return function () {
                return void _.ph(
                  a.context,
                  a.id,
                  function () {
                    var g;
                    return void (null == (g = b.offEvent)
                      ? void 0
                      : g.call(b, f.Mb, f.vc));
                  },
                  !0
                );
              };
            })(c)
          );
  };
  sp.prototype.m = function () {};
  var WH = function (a, b, c, d, e, f) {
    Z.call(this, a, 976);
    this.nextFunction = d;
    this.l = e;
    this.requestBidsConfig = f;
    lz(this, b);
    lz(this, c);
  };
  _.O(WH, Z);
  WH.prototype.j = function () {
    var a;
    null == (a = this.nextFunction) ||
      a.apply(this.l, [this.requestBidsConfig]);
  };
  var XH = function (a, b, c, d, e, f) {
    Z.call(this, a, 981);
    this.pbjs = b;
    this.l = c;
    this.o = d;
    this.C = e;
    this.requestBidsConfig = f;
    this.A = new ez();
  };
  _.O(XH, Z);
  XH.prototype.j = function () {
    var a,
      b,
      c =
        null != (b = null == (a = this.l) ? void 0 : a.get('*')) ? b : _.Ce(lw);
    if (c) this.mb(c);
    else {
      var d, e, f, g;
      a =
        null !=
        (g =
          null !=
          (f = null == (d = this.requestBidsConfig) ? void 0 : d.adUnits)
            ? f
            : null == (e = this.pbjs)
            ? void 0
            : e.adUnits)
          ? g
          : [];
      d = _.A(a);
      for (e = d.next(); !e.done; e = d.next())
        if ((e = e.value.code))
          (c = b = a = g = void 0),
            (f =
              null !=
              (g =
                null !=
                (a = null == (c = this.l) ? void 0 : c.get(_.H(ml) ? ll(e) : e))
                  ? a
                  : null == (b = this.l)
                  ? void 0
                  : b.get(Ih(e)))
                ? g
                : 0),
            this.mb(f);
    }
    this.A.notify();
  };
  XH.prototype.mb = function (a) {
    var b;
    null != (b = this.o) && _.z(b, 2, this.C);
    if (a) {
      var c;
      null != (c = this.o) && _.z(c, 1, 1);
      if (!this.C) {
        this.requestBidsConfig.timeout = a;
        var d, e, f;
        b = _.A(
          null !=
            (f =
              null == (e = (d = this.pbjs).getConfig)
                ? void 0
                : e.call(d).s2sConfig)
            ? f
            : []
        );
        for (d = b.next(); !d.done; d = b.next()) d.value.timeout = a;
        var g, h;
        null == (h = (g = this.pbjs).setConfig) ||
          h.call(g, { bidderTimeout: a });
      }
    }
  };
  var YH = function (a, b, c, d, e, f, g, h) {
    _.U.call(this);
    this.j = a;
    this.B = b;
    this.m = c;
    this.l = d;
    this.L = e;
    this.H = f;
    this.o = g;
    this.pbjs = h;
  };
  _.O(YH, _.U);
  YH.prototype.push = function (a) {
    var b = a.context,
      c = a.nextFunction;
    a = a.requestBidsConfig;
    if (this.pbjs) {
      var d = new tf();
      _.$m(this, d);
      var e = new XH(this.j, this.pbjs, this.L, this.H, this.o, a),
        f = new JH(this.j, this.B, this.m, this.l, this.pbjs, a);
      I(d, e);
      I(d, f);
      I(d, new WH(this.j, f.A, e.A, c, b, a));
      Gf(d);
    }
  };
  var ZH = function (a, b, c, d, e, f, g, h, l) {
    Z.call(this, a, 951);
    this.I = window;
    this.Bb = W(this);
    this.Cb = W(this);
    this.F = X(this, b);
    this.o = Y(this, d);
    this.C = X(this, e);
    this.O = X(this, f);
    this.l = Y(this, g);
    this.R = Y(this, h);
    this.M = X(this, l);
    lz(this, c);
  };
  _.O(ZH, Z);
  ZH.prototype.j = function () {
    var a = !!Tj().pbjs_hooks;
    this.Cb.G(a);
    Yy(this.Bb, a ? null : _.se());
    var b,
      c = null == (b = this.o.value) ? void 0 : b.size,
      d;
    b = (null == (d = this.l.value) ? void 0 : d.size) || _.Ce(lw);
    d = this.F.value;
    var e,
      f = null != (e = Tj().pbjs_hooks) ? e : [];
    e = new YH(
      this.context,
      this.o.value,
      this.C.value,
      this.O.value,
      this.l.value,
      this.R.value,
      this.M.value,
      d
    );
    _.$m(this, e);
    f = _.A(f);
    for (var g = f.next(); !g.done; g = f.next()) e.push(g.value);
    if (c || b || a) Tj().pbjs_hooks = Tl(this.context, e);
    (!c && !b) || a || Rl(d, this.I);
  };
  var $H = {},
    Ul =
      (($H[64] = SG),
      ($H[134217728] = TG),
      ($H[32768] = UG),
      ($H[536870912] = VG),
      ($H[8] = WG),
      ($H[512] = XG),
      ($H[1048576] = YG),
      ($H[4194304] = $G),
      $H);
  var dm = function (a) {
    return '22639388115' === Wg(a.getAdUnitPath());
  };
  var aI = null;
  var ym = { sa: '|' };
  var Hm = 0,
    bI = new _.Qh(-9, -9);
  var Jm = 0;
  var cI = new v.Set([
      function (a, b) {
        var c = a.ca.P.U;
        b.set('pvsid', { value: a.ga.context.pvsid }).set('correlator', {
          value: x(c, 26),
        });
      },
      function (a, b) {
        a = a.Je;
        var c = a.Sb;
        'wbn' === a.kc && b.set('wbsu', { value: c });
      },
      function (a, b) {
        var c = a.ca.P.U,
          d = a.Rf;
        a = d.Pe;
        var e = d.Zf;
        d = d.If;
        _.H(Gw) ||
          ((c = 0 === de(c, 24, 0)),
          b
            .set('adsid', { value: c ? a : null })
            .set('pucrd', { value: c ? e : null })
            .set('jar', { value: d }));
      },
      function (a, b) {
        var c = a.ca.P.U,
          d = a.yg;
        a = d.Ib;
        d = d.Hb;
        var e = G(c, 21);
        b = b
          .set('hxva', { value: e ? 1 : null })
          .set('cmsid', { value: e ? x(c, 23) : null })
          .set('vid', { value: e ? x(c, 22) : null })
          .set('pod', { value: d })
          .set('ppos', { value: a });
        c = x(c, 29);
        b.set.call(b, 'scor', { value: null == c ? void 0 : c });
      },
      function (a, b) {
        var c = a.ca,
          d = c.Z,
          e = c.P.V;
        c = a.Xf;
        var f = c.vf,
          g = c.pf;
        b.set('eid', { value: a.ga.vd })
          .set('debug_experiment_id', { value: Cy().split(',') })
          .set('expflags', { value: _.Zg(253) ? De(uw) || null : null })
          .set('pied', {
            value: (function () {
              var h = new DD(),
                l = !1,
                k = !1;
              f && ((l = !0), hf(h, 1, Ot, f));
              var m = d.map(function (p) {
                var r = new AD(),
                  u;
                p = null == (u = e[p.getDomId()]) ? void 0 : be(u, Ot, 27);
                if (null == p || !p.length) return r;
                k = l = !0;
                u = _.A(p);
                for (p = u.next(); !p.done; p = u.next()) hf(r, 1, Ot, p.value);
                return r;
              });
              k && Nc(h, 2, m);
              m = _.A(g);
              for (var n = m.next(); !n.done; n = m.next())
                hf(h, 1, Ot, n.value), (l = !0);
              return l ? xb(h.D(), 3) : null;
            })(),
          });
      },
      function (a, b) {
        var c = a.ga,
          d = c.context;
        c = c.Ba;
        b.set('output', { value: a.Je.kc })
          .set('gdfp_req', { value: 1 })
          .set('vrg', { value: d.rb ? String(d.rb) : d.Ga })
          .set('ptt', { value: 17 })
          .set('impl', { value: c ? 'fifs' : 'fif' });
      },
      function (a, b) {
        a = a.ca.P.U;
        b.set('co', {
          value: 0 !== de(a, 24, 0) ? de(a, 24, 0) : null,
          options: { xa: !0 },
        });
      },
      function (a, b) {
        var c = a.ga.X;
        a = lE(a.ca.P.U) || new iE();
        var d = de(a, 6, 2);
        b.set('rdp', { value: G(a, 1) ? '1' : null })
          .set('ltd', { value: G(a, 9) ? '1' : null })
          .set('gdpr_consent', { value: Cf(c, 2) })
          .set('gdpr', {
            value: Kk(c, 3) ? (G(c, 3) ? '1' : '0') : null,
            options: { xa: !0 },
          })
          .set('addtl_consent', { value: Cf(c, 4) })
          .set('tcfe', { value: Bs(c, 7) })
          .set('us_privacy', { value: Cf(c, 1) })
          .set('npa', { value: G(c, 6) || G(a, 8) ? 1 : null })
          .set('puo', { value: _.H(Vw) && G(a, 13) ? 1 : null })
          .set('tfua', { value: 2 !== d ? d : null, options: { xa: !0 } })
          .set('tfcd', {
            value: null != x(a, 5) ? x(a, 5) : null,
            options: { xa: !0 },
          })
          .set('trt', {
            value: null != x(a, 10) ? x(a, 10) : null,
            options: { xa: !0 },
          })
          .set('tad', {
            value: Kk(c, 8) ? (G(c, 8) ? '1' : '0') : null,
            options: { xa: !0 },
          });
      },
      function (a, b) {
        var c = a.ca,
          d = c.P,
          e = c.Z,
          f = c.Dd;
        a = a.ga;
        var g = a.I,
          h = a.N,
          l = a.Ba;
        a = { sa: '~' };
        var k = e.map(function (n) {
            return d.V[n.getDomId()];
          }),
          m = [];
        c = e.map(function (n) {
          return n
            .getAdUnitPath()
            .replace(/,/g, ':')
            .split('/')
            .map(function (p) {
              if (!p) return '';
              var r = _.t(m, 'findIndex').call(m, function (u) {
                return u === p;
              });
              return 0 <= r ? r : m.push(p) - 1;
            })
            .join('/');
        });
        b.set('iu_parts', { value: m })
          .set('enc_prev_ius', { value: c })
          .set('prev_iu_szs', {
            value: k.map(function (n) {
              return Hh(n);
            }),
          })
          .set('fluid', {
            value: (function () {
              var n = !1,
                p = k.map(function (r) {
                  r = ((E = Gh(r)), _.t(E, 'includes')).call(E, 'fluid');
                  n || (n = r);
                  return r ? 'height' : '0';
                });
              return n ? p : null;
            })(),
          })
          .set('ifi', {
            value: (function () {
              var n = Di(g);
              if (!f) {
                n += 1;
                var p = g,
                  r = e.length;
                r = void 0 === r ? 1 : r;
                p = Hv(Hd(p)) || p;
                p.google_unique_id = (p.google_unique_id || 0) + r;
              }
              return n;
            })(),
          })
          .set('adks', {
            value: e.map(function (n) {
              if (l) {
                var p = d.V[n.getDomId()];
                p = Jh(p);
                if ((n = h.j.get(n))) n.yb = p;
                return p;
              }
              p = d.U;
              var r = d.V[n.getDomId()],
                u;
              if (!(u = bq(h, n))) {
                p = Jh(r, G(p, 6) || G(r, 17) ? null : ci(n));
                if ((n = h.j.get(n))) n.yb = p;
                u = p;
              }
              return u;
            }),
          })
          .set('didk', {
            value: _.H(bx)
              ? pm(
                  e,
                  function (n) {
                    return Ih(n.getDomId());
                  },
                  a
                )
              : null,
            options: a,
          });
      },
      function (a, b) {
        var c = a.ca;
        a = c.Z;
        c = c.P;
        var d = c.U,
          e = c.V;
        b.set('sfv', { value: nH ? nH : (nH = zk()) })
          .set('fsfs', {
            value: pm(
              a,
              function (f) {
                f = e[f.getDomId()];
                var g;
                return Number(
                  null != (g = null == f ? void 0 : Lh(f, 12)) ? g : G(d, 13)
                );
              },
              { Yb: 0 }
            ),
            options: { sa: ',' },
          })
          .set('fsbs', {
            value: pm(
              a,
              function (f) {
                f = e[f.getDomId()].Sa();
                var g = d.Sa(),
                  h;
                return (
                  null != (h = null == f ? void 0 : Lh(f, 3))
                    ? h
                    : null == g
                    ? 0
                    : G(g, 3)
                )
                  ? 1
                  : 0;
              },
              { Yb: 0 }
            ),
          });
      },
      function (a, b) {
        var c = a.ga,
          d = c.N,
          e = c.I;
        c = a.ca;
        a = c.Z;
        var f = c.Dd;
        c = { sa: '~' };
        b.set('ris', {
          value: pm(
            a,
            function (g) {
              var h, l;
              g =
                null != (l = null == (h = d.j.get(g)) ? void 0 : h.ne) ? l : 0;
              h = _.te(e);
              return g && h ? Math.round(Math.min((h - g) / 1e3, 1800)) : null;
            },
            c
          ),
          options: c,
        }).set('rcs', {
          value: pm(
            a,
            function (g) {
              if (!f) {
                var h = void 0 === h ? _.q : h;
                var l = d.j.get(g);
                l && ((l.ne = _.te(h) || 0), l.xe++);
              }
              return GF(d, g);
            },
            { Yb: 0 }
          ),
        });
      },
      function (a, b) {
        var c = a.ca;
        a = a.ga.Ba;
        c = c.P.V[c.Z[0].getDomId()];
        b.set('click', { value: !a && c.getClickUrl() ? x(c, 7) : null });
      },
      function (a, b, c) {
        var d = a.ca,
          e = d.Z,
          f = d.P.V;
        a = a.ga;
        var g = a.X,
          h = a.I;
        c =
          void 0 === c
            ? function (l, k) {
                return ne(l, k);
              }
            : c;
        a = e.map(function (l) {
          return f[l.getDomId()];
        });
        b.set('ists', {
          value:
            om(a, function (l) {
              return 0 !== cm(l);
            }) || null,
        })
          .set('fas', {
            value: pm(
              a,
              function (l) {
                return gm(cm(l));
              },
              { Yb: 0 }
            ),
          })
          .set('itsi', {
            value: e.some(function (l) {
              var k;
              return (
                !dm(l) && 5 === (null == (k = f[l.getDomId()]) ? void 0 : cm(k))
              );
            })
              ? (function () {
                  var l = c(g, h);
                  if (!l) return 1;
                  var k;
                  l = Math.max.apply(
                    Math,
                    _.Ld(null != (k = _.am((0, C.K)(l), 604800)) ? k : [])
                  );
                  return isFinite(l)
                    ? Math.floor(Math.max((Date.now() - l) / 6e4, 1))
                    : null;
                })()
              : null,
          });
      },
      function (a, b) {
        a = a.ca;
        var c = a.P.V;
        a = a.Z.map(function (d) {
          return c[d.getDomId()];
        });
        b.set('rbvs', {
          value:
            om(a, function (d) {
              return 4 === cm(d);
            }) || null,
        });
      },
      function (a, b) {
        var c = a.ca,
          d = c.P,
          e = c.P.U,
          f = c.Z;
        c = c.kb;
        var g = a.ga;
        a = g.isSecureContext;
        g = g.I;
        b = b.set('prev_scp', { value: zm(f, d) });
        var h = b.set,
          l = d.U,
          k = d.V,
          m = new xi();
        m.set(0, 1 !== c);
        k = k[f[0].getDomId()];
        m.set(1, !!G(k, 17));
        m.set(2, Fm(f, d));
        m.set(3, G(l, 27) || !1);
        m.set(4, 3 === c);
        d = zi(m);
        h.call(b, 'eri', { value: d })
          .set('cust_params', { value: Bm(e), options: { sa: '&' } })
          .set('ppid', {
            value: 1 !== de(e, 24, 0) && null != x(e, 16) ? x(e, 16) : null,
            options: { xa: !0 },
          })
          .set('gct', { value: vm('google_preview', g) })
          .set('sc', { value: a ? 1 : 0, options: { xa: !0 } });
      },
      function (a, b) {
        var c = a.ga,
          d = c.I,
          e = c.X;
        c = c.va;
        a = a.ca.P.U;
        var f = Cm(a.ta());
        if (0 === de(a, 24, 0)) {
          var g = wz(c, '__gads', e);
          a = '1' === wz(c, '__gpi_opt_out', e) ? '1' : null;
          b = b
            .set('cookie', { value: g, options: { xa: !0 } })
            .set('cookie_enabled', { value: !g && xz(c, e) ? '1' : null });
          g = d.document;
          var h = g.domain;
          d = b.set.call(b, 'cdm', { value: (f || Oh(d)) === g.URL ? '' : h });
          f = d.set;
          e =
            (e = wz(c, '__gpi', e)) && !_.t(e, 'includes').call(e, '&')
              ? e
              : null;
          f.call(d, 'gpic', { value: e })
            .set('gpico', { value: a })
            .set('pdopt', { value: a });
        }
      },
      function (a, b) {
        a = a.ga.I;
        b.set('arp', { value: Fj(a) ? 1 : null }).set('abxe', {
          value: Ed(a.top) || pv(a.IntersectionObserver) ? 1 : null,
        });
      },
      function (a, b) {
        var c = a.ga.I;
        a = Cm(a.ca.P.U.ta());
        b.set('dt', { value: new Date().getTime() });
        if (!a) {
          try {
            var d =
              Math.round(Date.parse(c.document.lastModified) / 1e3) || null;
          } catch (e) {
            d = null;
          }
          b.set('lmt', { value: d });
        }
        d = Jm;
        c = ve(c);
        0 < c &&
          d >= c &&
          b.set('dlt', { value: c }).set('idt', { value: d - c });
      },
      function (a, b) {
        var c = a.ca,
          d = c.P,
          e = c.Z,
          f = c.P;
        c = f.U;
        f = f.V;
        var g = a.ga;
        a = g.I;
        var h = g.Ba;
        g = Fh(!0, a);
        for (
          var l = a.document, k = [], m = [], n = _.A(e), p = n.next();
          !p.done;
          p = n.next()
        ) {
          p = p.value;
          var r = f[p.getDomId()];
          p = ii(p, r, l, Mh(c, r));
          r = void 0;
          var u = h ? (null != (r = p) ? r : bI) : p;
          u && (k.push(Math.round(u.x)), m.push(Math.round(u.y)));
        }
        g && (d.Jb = g);
        c = Nh(a) ? null : Fh(!1, a);
        try {
          var w = a.top;
          var D = Gm(w.document, w);
        } catch (K) {
          D = new _.Qh(-12245933, -12245933);
        }
        b.set('adxs', { value: k })
          .set('adys', { value: m })
          .set('biw', { value: g ? g.width : null })
          .set('bih', { value: g ? g.height : null })
          .set('isw', { value: g ? (null == c ? void 0 : c.width) : null })
          .set('ish', { value: g ? (null == c ? void 0 : c.height) : null })
          .set('scr_x', { value: Math.round(D.x), options: { xa: !0 } })
          .set('scr_y', { value: Math.round(D.y), options: { xa: !0 } })
          .set('btvi', { value: Im(e, a, d), options: { xa: !0, sa: '|' } });
      },
      function (a, b) {
        var c = a.ga.N;
        b.set('ucis', {
          value: a.ca.Z.map(function (d) {
            d = (0, C.K)(c.j.get(d));
            null != d.qc ||
              (d.qc = window === window.top ? (++c.L).toString(36) : Mu());
            return d.qc;
          }),
          options: { sa: '|' },
        }).set('oid', { value: 2 });
      },
      function (a, b) {
        a = a.ca;
        var c = a.Z,
          d = a.P,
          e = d.V;
        a = new v.Map();
        d = _.A(d.U.ta());
        for (var f = d.next(); !f.done; f = d.next()) {
          var g = f.value;
          a.set((0, C.K)(x(g, 1)), [tl(g, 2)[0]]);
        }
        for (d = 0; d < c.length; d++)
          if ((g = e[c[d].getDomId()]))
            for (g = _.A(g.ta()), f = g.next(); !f.done; f = g.next()) {
              var h = f.value;
              f = (0, C.K)(x(h, 1));
              var l = a.get(f) || [];
              h = tl(h, 2)[0];
              1 === c.length ? (l[0] = h) : h !== l[0] && (l[d + 1] = h);
              a.set(f, l);
            }
        c = [];
        e = _.A(_.t(a, 'keys').call(a));
        for (d = e.next(); !d.done; d = e.next())
          (g = d.value),
            (d = LF()[g]),
            (g = a.get(g)),
            d &&
              g &&
              (1 < g.length
                ? ((g = g
                    .map(function (k) {
                      return encodeURIComponent(k || '');
                    })
                    .join()),
                  c.push(d + ',' + g))
                : 1 === g.length && 'url' !== d && b.set(d, { value: g[0] }));
        c.length && b.set('sps', { value: c, options: { sa: '|' } });
      },
      function (a, b) {
        var c = a.ca.P.U,
          d = a.ga;
        a = d.I;
        var e = d.wg;
        d = d.Ua;
        e = e ? Zd(e) : _.Zg(251);
        var f, g, h, l, k, m, n;
        var p = a;
        p = void 0 === p ? Gu : p;
        try {
          var r = p.history.length;
        } catch (rb) {
          r = 0;
        }
        b = b
          .set('u_his', { value: r })
          .set('u_h', { value: null == (f = a.screen) ? void 0 : f.height })
          .set('u_w', { value: null == (g = a.screen) ? void 0 : g.width })
          .set('u_ah', {
            value: null == (h = a.screen) ? void 0 : h.availHeight,
          })
          .set('u_aw', {
            value: null == (l = a.screen) ? void 0 : l.availWidth,
          })
          .set('u_cd', {
            value: null == (k = a.screen) ? void 0 : k.colorDepth,
          });
        f = b.set;
        g = a;
        g = void 0 === g ? _.q : g;
        g = g.devicePixelRatio;
        f = f
          .call(b, 'u_sd', {
            value: 'number' === typeof g ? +g.toFixed(3) : null,
          })
          .set('u_tz', { value: -new Date().getTimezoneOffset() });
        g = f.set;
        try {
          var u,
            w,
            D,
            K,
            F =
              null !=
              (K =
                null == (u = a.external)
                  ? void 0
                  : null == (w = u.getHostEnvironmentValue)
                  ? void 0
                  : null == (D = w.bind(a.external))
                  ? void 0
                  : D('os-mode'))
                ? K
                : '',
            R,
            T = Number(null == (R = JSON.parse(F)) ? void 0 : R['os-mode']);
          var Q = 0 <= T ? T + 1 : null;
        } catch (rb) {
          Q = null;
        }
        Q = g
          .call(f, 'wsm', { value: Q })
          .set('dmc', {
            value:
              null != (n = null == (m = a.navigator) ? void 0 : m.deviceMemory)
                ? n
                : null,
          });
        m = Q.set;
        (c = x(c, 8))
          ? (50 < c.length && (c = c.substring(0, 50)),
            (c = 'a ' + is('role:1 producer:12 loc:"' + c + '"')))
          : (c = '');
        c = m.call(Q, 'uule', { value: c });
        m = c.set;
        n = a;
        n = void 0 === n ? _.q : n;
        Q = new xi();
        n.SVGElement && n.document.createElementNS && Q.set(0);
        u = ov();
        u['allow-top-navigation-by-user-activation'] && Q.set(1);
        u['allow-popups-to-escape-sandbox'] && Q.set(2);
        n.crypto && n.crypto.subtle && Q.set(3);
        n.TextDecoder && n.TextEncoder && Q.set(4);
        n = zi(Q);
        e = m
          .call(c, 'bc', { value: n })
          .set('uach', { value: e ? is(e, 3) : null });
        c = e.set;
        if (null != d ? d : _.Zg(221)) var ba = null;
        else if (
          (d = null == (ba = a.navigator) ? void 0 : ba.userActivation)
        ) {
          ba = 0;
          if (null == d ? 0 : d.hasBeenActive) ba |= 1;
          if (null == d ? 0 : d.isActive) ba |= 2;
        } else ba = void 0;
        ba = c.call(e, 'uas', { value: ba });
        d = ba.set;
        a: {
          try {
            var ca,
              ma,
              Ga =
                null == (ca = a.performance)
                  ? void 0
                  : null == (ma = ca.getEntriesByType('navigation'))
                  ? void 0
                  : ma[0];
            if (null == Ga ? 0 : Ga.type) {
              var Na;
              var Ca = null != (Na = oD.get(Ga.type)) ? Na : null;
              break a;
            }
          } catch (rb) {}
          var ua, Oa, Ia;
          Ca =
            null !=
            (Ia = pD.get(
              null == (ua = a.performance)
                ? void 0
                : null == (Oa = ua.navigation)
                ? void 0
                : Oa.type
            ))
              ? Ia
              : null;
        }
        d.call(ba, 'nvt', { value: Ca });
      },
      function (a, b) {
        var c = a.ga,
          d = c.I,
          e = c.N;
        c = c.Ba;
        a = a.ca;
        var f = a.Z;
        a = a.P;
        var g = a.U,
          h = a.V;
        a = wm('google_preview', d);
        var l = d.document,
          k = a ? Dm(l.URL) : l.URL;
        l = a ? Dm(l.referrer) : l.referrer;
        a = !1;
        if (c) c = Cm(g.ta());
        else {
          var m;
          c = null != (m = Cm(h[f[0].getDomId()].ta())) ? m : Cm(g.ta());
        }
        if (null != c) {
          var n = k;
          Nh(d) || ((l = ''), (a = !0));
        } else c = k;
        m = Em(d);
        b.set('nhd', { value: m || null })
          .set('url', { value: c })
          .set('loc', { value: null !== n && n !== c ? n : null })
          .set('ref', { value: l });
        if (m) {
          n = b.set;
          var p, r;
          m =
            Ed(d.top) &&
            (null == (p = d.top)
              ? void 0
              : null == (r = p.location)
              ? void 0
              : r.href);
          var u;
          p = null == (u = d.location) ? void 0 : u.ancestorOrigins;
          d = mj(d) || '';
          u = (null == p ? void 0 : p[p.length - 1]) || '';
          d = (d = m || d || u) ? (a ? dv(d.match(_.cv)[3] || null) : d) : null;
          n.call(b, 'top', { value: d }).set('etu', { value: e.Ec });
        }
      },
      function (a, b) {
        a = a.ga.context.pvsid;
        b.set('rumc', { value: _.H(xx) || _.xe(kh).j ? a : null }).set('rume', {
          value: _.H(Nw) ? 1 : null,
        });
      },
      function (a, b) {
        a = a.ga.I;
        var c = b.set;
        var d = Bv(a);
        var e = jy(a, a.google_ad_width, a.google_ad_height);
        var f = d.location.href;
        if (d === d.top) f = !0;
        else {
          var g = !1,
            h = d.document;
          h && h.referrer && ((f = h.referrer), d.parent === d.top && (g = !0));
          (d = d.location.ancestorOrigins) &&
            (d = d[d.length - 1]) &&
            -1 === f.indexOf(d) &&
            ((g = !1), (f = d));
          f = g;
        }
        g = a.top == a ? 0 : Ed(a.top) ? 1 : 2;
        d = 4;
        e || 1 != g
          ? e || 2 != g
            ? e && 1 == g
              ? (d = 7)
              : e && 2 == g && (d = 8)
            : (d = 6)
          : (d = 5);
        f && (d |= 16);
        e = '' + d;
        if (a != a.top)
          for (
            f = a;
            f &&
            f != f.top &&
            Ed(f) &&
            !f.sf_ &&
            !f.$sf &&
            !f.inGptIF &&
            !f.inDapIF;
            f = f.parent
          );
        c.call(b, 'frm', { value: e || null }).set('vis', {
          value: uD(a.document),
        });
      },
      function (a, b) {
        var c = a.ca.Z;
        a = a.ga.I;
        for (
          var d = [], e = [], f = _.A(c), g = f.next();
          !g.done;
          g = f.next()
        ) {
          var h = void 0,
            l = void 0,
            k = void 0;
          var m = a;
          g = ci(g.value);
          var n = sv(
            ((null == g ? void 0 : g.parentElement) &&
              ei(g.parentElement, m)) ||
              null
          );
          !n || (1 === n[0] && 1 === n[3])
            ? ((n =
                null != (k = null == g ? void 0 : g.parentElement) ? k : null),
              (k = null != (l = Uh(n)) ? l : new _.Th(0, 0)),
              tm(k, n, m, 100),
              (l = null != (h = Uh(g)) ? h : new _.Th(0, 0)),
              tm(l, g, m, 1),
              -1 === k.height && (l.height = -1),
              (m = k),
              (l = h = l),
              (h = m.width + 'x' + m.height),
              (m = l.width + 'x' + l.height))
            : (m = h = '-1x-1');
          d.push(h);
          e.push(m);
        }
        null == aI &&
          ((f = jy(a, 500, 300)),
          (m = a.navigator),
          (h = m.userAgent),
          (l = m.platform),
          (m = m.product),
          !/Win|Mac|Linux|iPad|iPod|iPhone/.test(l) && /^Opera/.test(h)
            ? (h = !1)
            : /Win/.test(l) &&
              /Trident/.test(h) &&
              11 <= a.document.documentMode
            ? (h = !0)
            : ((l = (/WebKit\/(\d+)/.exec(h) || [0, 0])[1]),
              (g = (/rv:(\d+\.\d+)/.exec(h) || [0, 0])[1]),
              (h =
                (!l &&
                  'Gecko' === m &&
                  27 <= g &&
                  !/ rv: 1\.8([^.] |\.0) /.test(h)) ||
                536 <= l
                  ? !0
                  : !1)),
          (aI = h && !f));
        g = 0 !== (0, _.jm)();
        f = Fh(!0, a, g).width;
        h = [];
        m = [];
        l = [];
        null !== a &&
          a != a.top &&
          ((k = Fh(!1, a).width),
          (-12245933 === f || -12245933 === k || k < f) && l.push(8));
        -12245933 !== f &&
          (1.5 * f < a.document.documentElement.scrollWidth
            ? l.push(10)
            : g && 1.5 * a.outerWidth < f && l.push(10));
        c = _.A(c);
        for (k = c.next(); !k.done; k = c.next()) {
          g = new xi();
          n = ci(k.value);
          k = 0;
          var p = !1,
            r = !1;
          if (n) {
            for (var u = 0, w = n; w && 100 > u; u++, w = w.parentElement) {
              var D = ei(w, a);
              if (D) {
                var K = D,
                  F = K.display,
                  R = K.overflowX;
                if (
                  'visible' !== K.overflowY &&
                  (g.set(2),
                  (K = Uh(w)) && (k = k ? Math.min(k, K.width) : K.width),
                  g.get(9))
                )
                  break;
                rm(D) && g.set(9);
                'none' === F && g.set(7);
                'IFRAME' === w.nodeName &&
                  ((D = parseInt(D.width, 10)),
                  D < f && (g.set(8), (k = k ? Math.min(D, k) : D)));
                r || (r = 'scroll' === R || 'auto' === R);
                p || (p = 'flex' === F);
              } else g.set(3);
            }
            r &&
              p &&
              ((n = n.getBoundingClientRect().left),
              (n > f || 0 > n) && g.set(11));
          } else g.set(1);
          n = _.A(l);
          for (p = n.next(); !p.done; p = n.next()) g.set(p.value);
          h.push(zi(g));
          m.push(k);
        }
        b.set('psz', { value: d, options: { sa: '|' } })
          .set('msz', { value: e, options: { sa: '|' } })
          .set('fws', { value: h })
          .set('ohw', { value: m })
          .set('ea', { value: aI ? null : '0', options: { xa: !0 } });
      },
      function (a, b) {
        b.set('psts', { value: FF(a.ga.N, a.ca.Z) });
      },
      function (a, b) {
        var c = a.ga;
        a = c.X;
        c = c.I;
        var d;
        var e = c.document.domain,
          f =
            null != (d = G(a, 5) && oe(c) ? c.document.cookie : null) ? d : '',
          g = c.history.length,
          h = c.screen,
          l = c.document.referrer;
        if (Hd()) var k = window.gaGlobal || {};
        else {
          var m = Math.round(new Date().getTime() / 1e3),
            n = c.google_analytics_domain_name;
          e = 'undefined' == typeof n ? fy('auto', e) : fy(n, e);
          var p = -1 < f.indexOf('__utma=' + e + '.'),
            r = -1 < f.indexOf('__utmb=' + e);
          (d = (Hv() || window).gaGlobal) ||
            ((d = {}), ((Hv() || window).gaGlobal = d));
          var u = !1;
          if (p) {
            var w = f
              .split('__utma=' + e + '.')[1]
              .split(';')[0]
              .split('.');
            r ? (d.sid = w[3]) : d.sid || (d.sid = m + '');
            d.vid = w[0] + '.' + w[1];
            d.from_cookie = !0;
          } else {
            d.sid || (d.sid = m + '');
            if (!d.vid) {
              u = !0;
              r = Math.round(2147483647 * Math.random());
              p = dy.appName;
              var D = dy.version,
                K = dy.language ? dy.language : dy.browserLanguage,
                F = dy.platform,
                R = dy.userAgent;
              try {
                w = dy.javaEnabled();
              } catch (T) {
                w = !1;
              }
              w = [p, D, K, F, R, w ? 1 : 0].join('');
              h
                ? (w += h.width + 'x' + h.height + h.colorDepth)
                : _.q.java &&
                  _.q.java.awt &&
                  ((h =
                    _.q.java.awt.Toolkit.getDefaultToolkit().getScreenSize()),
                  (w += h.screen.width + 'x' + h.screen.height));
              w = w + f + (l || '');
              for (l = w.length; 0 < g; ) w += g-- ^ l++;
              d.vid = (r ^ (ey(w) & 2147483647)) + '.' + m;
            }
            d.from_cookie || (d.from_cookie = !1);
          }
          if (!d.cid) {
            b: for (
              m = 999,
                n &&
                  ((n = 0 == n.indexOf('.') ? n.substr(1) : n),
                  (m = n.split('.').length)),
                n = 999,
                f = f.split(';'),
                w = 0;
              w < f.length;
              w++
            )
              if ((l = gy.exec(f[w]) || hy.exec(f[w]) || iy.exec(f[w]))) {
                h = l[1] || 0;
                if (h == m) {
                  k = l[2];
                  break b;
                }
                h < n && ((n = h), (k = l[2]));
              }
            u && k && -1 != k.search(/^\d+\.\d+$/)
              ? ((d.vid = k), (d.from_cookie = !0))
              : k != d.vid && (d.cid = k);
          }
          d.dh = e;
          d.hid || (d.hid = Math.round(2147483647 * Math.random()));
          k = d;
        }
        e = k.sid;
        d = k.hid;
        u = k.from_cookie;
        f = k.cid;
        (u && !G(a, 5)) ||
          b
            .set('ga_vid', { value: k.vid })
            .set('ga_sid', { value: e })
            .set('ga_hid', { value: d })
            .set('ga_fc', { value: u })
            .set('ga_cid', { value: f })
            .set('ga_wpids', { value: c.google_analytics_uacct });
      },
      function (a, b) {
        a = a.ga;
        var c = a.I;
        a = a.context.pvsid;
        b = b.set('js', { value: _.H(mw) ? ky(c) : null });
        var d = b.set;
        if (_.H(mw))
          a: {
            var e = c;
            e = void 0 === e ? window : e;
            if ((c = ky(e))) {
              var f = null;
              try {
                'afma-gpt-sdk-a' == c
                  ? (f = e._gmptnl.pm('GAM=', a.toString()) || '5')
                  : ((f = e.__gmptnl_n || '5'),
                    e.webkit.messageHandlers._gmptnl.postMessage('GAM='));
              } catch (g) {
                a = '3';
                break a;
              }
              a = 'string' === typeof f ? f : '3';
            } else a = null;
          }
        else a = null;
        d.call(b, 'ms', { value: a });
      },
      function (a, b) {
        var c = a.ga.I;
        a = c.navigator;
        c = c.document;
        _.H(Ex) ||
          ('runAdAuction' in a &&
            'joinAdInterestGroup' in a &&
            Xf('run-ad-auction', c) &&
            b.set('td', { value: 1 }));
      },
      function (a, b) {
        var c = a.ng.og;
        Xf('browsing-topics', a.ga.I.document) &&
          (b.set('topics', { value: c instanceof Uint8Array ? xb(c, 3) : c }),
          _.H(Dx) &&
            (!c || c instanceof Uint8Array || b.set('tps', { value: c })));
      },
      function (a, b) {
        var c = a.ga,
          d = c.I;
        c = c.X;
        var e = a.ca.Z,
          f = a.jg;
        a = f.Wf;
        var g = f.gf;
        f = f.Sf;
        _.H(rx) ||
          b.set('a3p', {
            value: df(ne(c, d), Wg(e[0].getAdUnitPath()), a, g, f),
          });
      },
      function (a, b) {
        var c = a.Qb,
          d = c.od,
          e = c.xc,
          f = a.ca.Z;
        a = { sa: '~' };
        c = (function () {
          return _.H(gw)
            ? e
              ? f.map(function (g) {
                  return (0, C.K)(e.get(g));
                })
              : []
            : d;
        })();
        b.set('cbidsp', {
          value: pm(
            c,
            function (g) {
              return xb(g.D(), 3);
            },
            a
          ),
          options: a,
        });
      },
      function (a, b) {
        a = a.ca.P.U;
        Fl(a.Kc(), ho, 1) &&
          ((a = go(a.Kc(), ho, 1)),
          b
            .set('cmrv', { value: 1 })
            .set('cmrq', { value: x(a, 1) })
            .set('cmrc', { value: tl(a, 2), options: { sa: '>' } })
            .set('cmrids', { value: tl(a, 3), options: { sa: '!' } })
            .set('cmrf', { value: x(a, 4) }));
      },
      function (a, b) {
        var c = [];
        a = _.A(be(go(a.ca.P.U.Kc(), jo, 2), An, 1));
        for (var d = a.next(); !d.done; d = a.next())
          (d = d.value),
            tl(d, 2).length && c.push(de(d, 1, 0) + '=' + tl(d, 2).join('|'));
        b.set('pps', { value: c, options: { sa: '~' } });
      },
      function (a, b) {
        b.set('scar', { value: a.Uf.rf });
      },
      function (a, b) {
        a = a.ga.I.document;
        _.H(wx) &&
          (_.H(vx) ||
            (Xf('attribution-reporting', a) && b.set('nt', { value: 1 })));
      },
    ]),
    dI = function (a) {
      this.j = a;
      this.m = new v.Set(Ee(ax));
      a = _.A(
        G(this.j.ga.X, 8)
          ? 'loc gpic cookie ms ppid top etu uule video_doc_id adsid'.split(' ')
          : []
      );
      for (var b = a.next(); !b.done; b = a.next()) this.m.add(b.value);
    },
    fI = function (a) {
      if (0 === a.j.ca.Z.length) return '';
      for (
        var b = new v.Map(), c = _.A(cI), d = c.next();
        !d.done;
        d = c.next()
      )
        (d = d.value), d(a.j, b);
      c =
        'https://' +
        (eI(a)
          ? 'pagead2.googlesyndication.com'
          : 'securepubads.g.doubleclick.net') +
        '/gampad/ads?';
      b = _.A(b);
      for (d = b.next(); !d.done; d = b.next()) {
        var e = _.A(d.value);
        d = e.next().value;
        var f = e.next().value;
        e = f.value;
        f = void 0 === f.options ? {} : f.options;
        new RegExp('[?&]' + d + '=').test(c);
        if (!a.m.has(d) && null != e) {
          var g = f;
          f = void 0 === g.sa ? ',' : g.sa;
          g = void 0 === g.xa ? !1 : g.xa;
          if (
            (e =
              'object' !== typeof e
                ? null == e || (!g && 0 === e)
                  ? null
                  : encodeURIComponent(e)
                : Array.isArray(e) && e.length
                ? encodeURIComponent(e.join(f))
                : null)
          )
            '?' !== c[c.length - 1] && (c += '&'), (c += d + '=' + e);
        }
      }
      return c;
    },
    eI = function (a) {
      var b = a.j;
      a = b.ga.X;
      var c, d;
      b = null != (d = null == (c = lE(b.ca.P.U)) ? void 0 : G(c, 9)) ? d : !1;
      c = G(a, 8);
      return b || c || !G(a, 5);
    };
  var jI = function (a, b, c, d) {
      var e = this;
      this.context = a;
      this.N = c;
      this.j = new v.Map();
      this.m = new v.Map();
      this.xb = _.xe(kh);
      window.performance &&
        pv(window.performance.now) &&
        (_.hb(
          window,
          'DOMContentLoaded',
          _.ih(a, 334, function () {
            for (var f = _.A(e.j), g = f.next(); !g.done; g = f.next()) {
              var h = _.A(g.value);
              g = h.next().value;
              h = h.next().value;
              gI(e, g, h) && e.j.delete(g);
            }
          })
        ),
        oF(b, tF, function (f) {
          f = f.detail;
          var g = f.V;
          return void hI(e, (0, C.K)(iI(d, f.Sd)), (0, C.K)(x(g, 20)));
        }),
        oF(b, uF, function (f) {
          f = f.detail;
          var g = f.V;
          f = (0, C.K)(iI(d, f.Sd));
          g = (0, C.K)(x(g, 20));
          var h = e.m.get(f);
          null != h ? fF(h, g) : hI(e, f, g);
        }));
    },
    hI = function (a, b, c) {
      gI(a, b, c)
        ? a.j.delete(b)
        : (a.j.set(b, c),
          _.Qm(b, function () {
            return a.j.delete(b);
          }));
    },
    gI = function (a, b, c) {
      var d = ci(b);
      if ('DIV' !== (null == d ? void 0 : d.nodeName)) return !1;
      d = new dF({
        I: window,
        xb: a.xb,
        fb: (0, C.ra)(d),
        Fa: function (e) {
          return void mh(a.context, 336, e);
        },
        lg: _.H(xx),
      });
      if (!d.j) return !1;
      fF(d, c);
      a.m.set(b, d);
      BF(a.N, b, function () {
        return void a.m.delete(b);
      });
      return !0;
    };
  var kI = function (a) {
    this.m = a;
    this.D = this.j = 0;
  };
  kI.prototype.push = function () {
    for (
      var a = _.A(eb.apply(0, arguments)), b = a.next();
      !b.done;
      b = a.next()
    ) {
      b = b.value;
      try {
        'function' === typeof b && (b.call(v.globalThis), this.j++);
      } catch (c) {
        this.D++,
          (b = void 0),
          null == (b = window.console) ||
            b.error('Exception in queued GPT command', c),
          this.m.error(cG(String(c)));
      }
    }
    this.m.info(dG(String(this.j), String(this.D)));
    return this.j;
  };
  var lI = function (a, b) {
    Z.call(this, a, 931);
    this.jb = W(this);
    this.ab = W(this);
    this.l = Y(this, b);
  };
  _.O(lI, Z);
  lI.prototype.j = function () {
    var a = this.l.value,
      b = new v.Map();
    this.jb.G(new v.Map());
    if (a) {
      var c;
      a = _.A(null != (c = this.l.value) ? c : []);
      for (c = a.next(); !c.done; c = a.next()) {
        var d = c.value;
        c = be(d, tt, 1);
        c = 1 === de(c[0], 1, 0) ? zs(c[0]) : As(c[0], ys);
        d = ij(d, 2);
        var e = void 0;
        b.set(c, Math.min(null != (e = b.get(c)) ? e : Number.MAX_VALUE, d));
      }
    }
    this.ab.G(b);
  };
  var mI = function (a, b) {
    Z.call(this, a, 981);
    this.o = W(this);
    this.l = W(this);
    this.C = Y(this, b);
  };
  _.O(mI, Z);
  mI.prototype.j = function () {
    var a = new v.Map(),
      b,
      c = _.A(null != (b = this.C.value) ? b : []);
    for (b = c.next(); !b.done; b = c.next()) {
      b = b.value;
      var d = be(b, tt, 1);
      d = 1 === de(d[0], 1, 0) ? zs(d[0]) : As(d[0], ys);
      a.set(d, ij(b, 2));
    }
    this.o.G(a);
    this.l.G(new lt());
  };
  var nI = function (a, b, c, d, e, f, g, h) {
    Z.call(this, a, 980);
    this.C = b;
    this.l = h;
    this.A = new ez();
    this.o = [];
    this.R = X(this, c);
    this.O = X(this, d);
    this.F = X(this, e);
    if (this.l)
      for (a = _.A(g), b = a.next(); !b.done; b = a.next())
        this.o.push(X(this, b.value));
    else this.M = X(this, f);
  };
  _.O(nI, Z);
  nI.prototype.j = function () {
    if (
      ((E = _.t(Object, 'entries').call(Object, this.R.value)),
      _.t(E, 'find')).call(E, function (c) {
        var d = _.A(c);
        c = d.next().value;
        d = d.next().value;
        return '*' !== c && (null == d ? void 0 : d.Uc);
      })
    ) {
      var a;
      (null != (a = this.C) ? a : _.xe(Rk)).B = !0;
    }
    Ae(25);
    a = _.A(
      ((E = [
        this.O.value,
        this.F.value,
        this.l
          ? this.o.map(function (c) {
              return c.value;
            })
          : (0, C.K)(this.M).value,
      ]),
      _.t(E, 'flat')).call(E)
    );
    for (var b = a.next(); !b.done; b = a.next()) ze(b.value);
    this.A.notify();
  };
  var oI = function (a, b) {
    Z.call(this, a, 892, _.Ce(Tw));
    this.l = W(this);
    this.o = W(this);
    this.gb = W(this);
    this.Ra = W(this);
    this.Eb = W(this);
    this.C = W(this);
    this.F = kz(this, b);
  };
  _.O(oI, Z);
  oI.prototype.j = function () {
    var a = this.F.value;
    if (!a) throw Error('config timeout');
    var b;
    Yy(this.l, null != (b = Se(a, Gt, 3)) ? b : null);
    var c;
    Yy(this.o, null != (c = Se(a, Jt, 2)) ? c : null);
    this.gb.G(ln(a, 4));
    Yy(this.Ra, be(a, Bt, 6));
    Yy(this.Eb, be(a, Wt, 5));
    Yy(this.C, Se(a, Vt, 7));
  };
  oI.prototype.H = function (a) {
    this.m(a);
  };
  oI.prototype.m = function (a) {
    this.l.za(a);
    this.o.za(a);
    this.gb.G([]);
    this.Ra.G([]);
    this.Eb.G([]);
    Zy(this.C);
  };
  var pI = [
      { name: 'Interstitial', ud: 1 },
      { name: 'TopAnchor', ud: 2 },
      { name: 'BottomAnchor', ud: 3 },
    ],
    qI = function (a, b) {
      Z.call(this, a, 789);
      this.l = b;
      this.A = W(this);
    };
  _.O(qI, Z);
  qI.prototype.j = function () {
    var a = this;
    this.A.G(
      pI
        .filter(function (b) {
          return new RegExp('gam' + b.name + 'Demo', 'i').test(a.l);
        })
        .map(function (b) {
          var c = b.name;
          b = b.ud;
          var d, e;
          null == (d = window.console) ||
            null == (e = d.warn) ||
            e.call(d, 'GPT - Demo ' + c + ' ENABLED');
          d = new Wt();
          e = new Qt();
          b = _.z(e, 2, b);
          c = _.z(b, 1, '/22639388115/example/' + c.toLowerCase());
          return fh(d, 5, Xt, c);
        })
    );
  };
  var rI = function (a, b, c, d) {
    Z.call(this, a, 1016);
    this.A = W(this);
    this.o = Y(this, b);
    this.l = Y(this, c);
    this.C = mz(this, [b, d]);
  };
  _.O(rI, Z);
  rI.prototype.j = function () {
    if (this.l.value) {
      var a = this.o.value || this.C.value;
      a && sI(this, a) ? this.A.G(a) : (Zy(this.A), tI(this, a));
    } else Zy(this.A);
  };
  rI.prototype.H = function (a) {
    this.m(a);
  };
  rI.prototype.m = function () {
    Zy(this.A);
  };
  var sI = function (a, b) {
      return be((0, C.K)(a.l.value), Ht, 1).some(function (c) {
        return ef(c, 1) === b;
      });
    },
    tI = function (a, b) {
      ti(
        'pp_iris_failure',
        function (c) {
          L(c, 'fnc', b);
          Ci(c, a.context);
        },
        _.Ce(Uw)
      );
    };
  var uI = function (a, b) {
    Z.call(this, a, 1015);
    this.l = W(this);
    this.o = Y(this, b);
  };
  _.O(uI, Z);
  uI.prototype.j = function () {
    if (this.o.value) {
      var a = be(this.o.value, Ht, 1);
      (null == a ? 0 : a.length)
        ? ((a = be(this.o.value, Ht, 1)[0]),
          ((E = [2, 3]), _.t(E, 'includes')).call(E, de(a, 3, 0))
            ? this.l.G(ef(a, 1))
            : Zy(this.l))
        : Zy(this.l);
    } else Zy(this.l);
  };
  uI.prototype.H = function (a) {
    this.m(a);
  };
  uI.prototype.m = function () {
    Zy(this.l);
  };
  var vI = function (a, b, c) {
    Z.call(this, a, 1017);
    this.I = c;
    this.A = jz(this);
    this.l = Y(this, b);
  };
  _.O(vI, Z);
  vI.prototype.j = function () {
    var a = this;
    if (this.l.value) {
      var b = Ux(this.I, this.l.value, function (c) {
        if (!c) {
          c = Su(b.j);
          for (
            var d = _.A(document.getElementsByName('googlefcPresent')),
              e = d.next();
            !e.done;
            e = d.next()
          )
            c.Ke(e.value);
        }
        a.A.notify();
      });
      b.start();
    } else this.A.notify();
  };
  vI.prototype.H = function (a) {
    this.m(a);
  };
  vI.prototype.m = function () {
    this.A.notify();
  };
  var wI = function (a, b) {
    Z.call(this, a, 1056);
    this.A = W(this);
    this.l = X(this, b);
  };
  _.O(wI, Z);
  wI.prototype.j = function () {
    var a = Wg((0, C.K)(this.l.value.getAdUnitPath()));
    this.A.G(a);
  };
  wI.prototype.H = function (a) {
    this.m(a);
  };
  wI.prototype.m = function () {
    Zy(this.A);
  };
  var xI = function () {
    Z.apply(this, arguments);
    this.value = this.promise = null;
    this.A = W(this);
  };
  _.O(xI, Z);
  xI.prototype.j = function () {
    var a = this;
    this.promise.then(function () {
      return void Yy(a.A, a.value);
    });
  };
  var Go = function (a, b, c, d) {
    xI.call(this, a, 1061);
    var e = this;
    this.promise = pF(b, c, function (f) {
      return null !== (e.value = d(f));
    });
  };
  _.O(Go, xI);
  var yI = function (a, b, c, d) {
    Z.call(this, a, 906, _.Ce(Sw));
    this.l = jz(this);
    if (b === b.top) {
      var e = new tf();
      _.$m(this, e);
      var f = new uI(a, c);
      I(e, f);
      d = new Go(a, d, tF, function (g) {
        return g.detail.V;
      });
      I(e, d);
      d = new wI(a, d.A);
      I(e, d);
      a = new rI(a, f.l, c, d.A);
      I(e, a);
      b = new vI(this.context, a.A, b);
      I(e, b);
      Ry(this.B, b.A, !0);
      Gf(e);
    } else this.l.notify();
  };
  _.O(yI, Z);
  yI.prototype.j = function () {
    this.l.notify();
  };
  yI.prototype.H = function (a) {
    this.m(a);
  };
  yI.prototype.m = function () {
    this.l.notify();
  };
  var zI = function (a, b) {
    Z.call(this, a, 891);
    var c = this;
    this.l = W(this);
    this.error = void 0;
    var d = W(this);
    this.o = X(this, d);
    b
      ? b(function (e, f) {
          if (f) (c.error = f), d.G([]);
          else
            try {
              if ('string' === typeof e) {
                var g = JSON.parse(e || '[]');
                Array.isArray(g) && d.G(g);
              }
            } catch (h) {
            } finally {
              d.wb || ((c.error = Error('malformed response')), d.G([]));
            }
        })
      : ((this.error = Error('missing input')), d.G([]));
  };
  _.O(zI, Z);
  zI.prototype.j = function () {
    if (this.error) throw this.error;
    var a = this.l,
      b = a.G;
    var c = this.o.value;
    if (!Array.isArray(c)) throw Error('must be an array');
    if (Object.isFrozen(c) || Object.isSealed(c) || !Object.isExtensible(c))
      throw Error('arrays passed to jspb constructors must be mutable');
    var d = Hb(c);
    if (0 !== d) throw Error();
    Ib(c, d | 64);
    c = Ac(Zt, Ob(c));
    b.call(a, c);
  };
  var AI = function (a, b) {
    Z.call(this, a, 966);
    this.I = b;
    this.Wa = W(this);
  };
  _.O(AI, Z);
  AI.prototype.j = function () {
    var a = this,
      b = Kg(this.I);
    if (b) this.Wa.G(b);
    else if (
      (b = Object.getOwnPropertyDescriptor(this.I, '_pbjsGlobals')) &&
      !b.configurable
    )
      ti(
        'pdpg_error',
        function (d) {
          Ci(d, a.context);
        },
        _.Ce(jw)
      );
    else {
      var c = null;
      Object.defineProperty(this.I, '_pbjsGlobals', {
        set: function (d) {
          c = d;
          (d = Kg(a.I)) && a.Wa.G(d);
        },
        get: function () {
          return c;
        },
      });
    }
  };
  AI.prototype.m = function () {};
  var BI = function (a, b, c, d, e, f, g) {
    Z.call(this, a, 1088);
    this.adUnitPath = b;
    this.Ia = c;
    this.googletag = d;
    this.U = e;
    this.o = f;
    this.l = g;
  };
  _.O(BI, Z);
  BI.prototype.j = function () {
    var a = this,
      b = Pm(this.context, this.l, this.o, {
        Dc: 6,
        adUnitPath: this.adUnitPath,
        Ia: this.Ia,
      });
    if (b) {
      var c = (0, C.K)(b.j);
      this.googletag.cmd.push(function () {
        c.addService(a.googletag.pubads());
      });
      pn(document, function () {
        a.googletag.display(c);
        G(a.U, 4) && a.googletag.pubads().refresh([c]);
      });
    }
  };
  var CI = function (a, b, c, d, e, f) {
    Z.call(this, a, 1090);
    this.googletag = b;
    this.C = c;
    this.o = d;
    this.l = e;
    this.F = Y(this, f);
  };
  _.O(CI, Z);
  CI.prototype.j = function () {
    var a = this.F.value;
    if (a && op(a, 1)) {
      var b = new tf();
      _.$m(this, b);
      I(
        b,
        new BI(
          this.context,
          a.getAdUnitPath(),
          !1,
          this.googletag,
          this.o.j,
          this.C,
          this.l
        )
      );
      Gf(b);
    }
  };
  var Vm = function (a, b, c, d) {
    Z.call(this, a, 959);
    this.eb = b;
    this.A = W(this);
    this.l = X(this, b);
    lz(this, c);
    lz(this, d);
  };
  _.O(Vm, Z);
  Vm.prototype.j = function () {
    this.A.G(this.l.value);
  };
  var Um = function (a, b, c, d, e, f, g) {
    Z.call(this, a, 874);
    this.o = b;
    this.N = c;
    this.I = d;
    this.F = e;
    this.l = jz(this);
    lz(this, f);
    this.C = X(this, g);
  };
  _.O(Um, Z);
  Um.prototype.j = function () {
    var a = this,
      b = new Lx(this.I, { oc: -1, Se: !0 });
    _.$m(this, b);
    if (Nx(b)) {
      var c = this.N.H,
        d = c.status,
        e = function (f) {
          var g = a.C.value,
            h,
            l,
            k;
          if ((k = !(null == (h = a.F) ? 0 : G(h, 9)))) {
            var m = void 0 === m ? !1 : m;
            k = Rx(f)
              ? !1 === f.gdprApplies ||
                'tcunavailable' === f.tcString ||
                (void 0 === f.gdprApplies && !m) ||
                'string' !== typeof f.tcString ||
                !f.tcString.length
                ? !0
                : Px(f, '1')
              : !1;
          }
          h = _.z(g, 5, k);
          k = !Sx(f, ['3', '4']);
          h = _.z(h, 9, k);
          h = _.z(h, 2, f.tcString);
          k = null != (l = f.addtlConsent) ? l : '';
          l = _.z(h, 4, k);
          _.z(l, 7, f.internalErrorState);
          null != f.gdprApplies && _.z(g, 3, f.gdprApplies);
          _.H(dx) && !Sx(f, ['2', '7', '9', '10']) && _.z(g, 8, !0);
          a.l.notify();
        };
      switch (d) {
        case 2:
          e(c.data);
          break;
        case 1:
          c.j.push(e);
          break;
        case 0:
          c.data = void 0;
          c.status = 1;
          c.j.push(e);
          this.o.info(LG());
          b.addEventListener(function (f) {
            Rx(f)
              ? ('tcunavailable' === f.tcString
                  ? a.o.info(MG('failed'))
                  : a.o.info(MG('succeeded')),
                (c.data = f),
                (c.status = 2),
                c.Jc().forEach(function (g) {
                  g(f);
                }),
                c.pd())
              : ((c.data = void 0), (c.status = 1));
          });
          break;
        default:
          throw Error('Impossible TCDataCacheStatus: ' + d);
      }
    } else this.l.notify();
  };
  var Tm = function (a, b, c, d, e) {
    Z.call(this, a, 875);
    this.C = b;
    this.I = c;
    this.l = jz(this);
    lz(this, d);
    this.o = X(this, e);
  };
  _.O(Tm, Z);
  Tm.prototype.j = function () {
    var a = this,
      b = _.H(Bx) ? new sy(this.I) : new QD(this.I);
    _.$m(this, b);
    if (b.l()) {
      var c = _.ih(this.context, 660, function (d) {
        d && 'string' === typeof d.uspString && _.z(a.o.value, 1, d.uspString);
        a.l.notify();
      });
      this.C.info(KG());
      b.L(c);
    } else this.l.notify();
  };
  var Rm = function (a, b) {
    Z.call(this, a, 958);
    this.l = b;
    this.eb = W(this);
  };
  _.O(Rm, Z);
  Rm.prototype.j = function () {
    var a = new uz(),
      b,
      c = null == (b = this.l) ? void 0 : G(b, 9);
    _.z(a, 5, !c);
    this.eb.G(a);
  };
  var Sm = function (a, b, c, d) {
    d = void 0 === d ? 0.001 : d;
    Z.call(this, a, 960);
    this.I = b;
    this.o = d;
    this.l = X(this, c);
  };
  _.O(Sm, Z);
  Sm.prototype.j = function () {
    var a = this;
    _.ph(this.context, 894, function () {
      return void ti(
        'cmpMet',
        function (b) {
          Ci(b, a.context);
          var c = new Lx(a.I);
          _.$m(a, c);
          var d = _.H(Bx) ? new sy(a.I) : new QD(a.I);
          _.$m(a, d);
          L(b, 'fc', Number(a.l.value));
          L(b, 'tcfv1', Number(!!a.I.Gh));
          L(b, 'tcfv2', Number(Nx(c)));
          L(b, 'usp', Number(d.l()));
          L(b, 'ptt', 17);
        },
        a.o
      );
    });
  };
  var DI = function (a, b) {
    Z.call(this, a, 1052);
    this.o = W(this);
    this.l = W(this);
    this.C = Y(this, b);
  };
  _.O(DI, Z);
  DI.prototype.j = function () {
    var a = this.C.value,
      b = new Bt(),
      c = new v.Map();
    if (a) {
      var d = new v.Set();
      a = _.A(a);
      for (var e = a.next(); !e.done; e = a.next()) {
        var f = e.value;
        if (null != x(f, 1)) {
          e = new v.Set();
          c.set(ef(f, 1).toString(), e);
          f = _.A(f.D());
          for (var g = f.next(); !g.done; g = f.next()) {
            g = g.value;
            var h = (0, C.K)(g.D());
            e.add(h);
            d.has(h) || hf(b, 2, yt, g);
            d.add(h);
          }
        }
      }
    }
    this.o.G(c);
    this.l.G(b);
  };
  var EI = function (a, b) {
    Z.call(this, a, 1040);
    this.l = W(this);
    this.o = W(this);
    this.C = Y(this, b);
  };
  _.O(EI, Z);
  EI.prototype.j = function () {
    var a = this.C.value;
    a
      ? (Yy(this.o, a instanceof Bt ? ef(a, 1) : null),
        (a = a.D()),
        this.l.G(
          a.map(function (b) {
            var c = b.J();
            b = b.D();
            c =
              c &&
              (_.t(c, 'startsWith').call(c, location.protocol) ||
                (_.t(c, 'startsWith').call(c, 'data:') && 40 >= c.length))
                ? Id(null === c ? 'null' : void 0 === c ? 'undefined' : c)
                : void 0;
            return { Cc: b, url: c };
          })
        ))
      : (Zy(this.o), this.l.G([]));
  };
  var vp = function (a, b, c, d) {
    Z.call(this, a, 813);
    this.C = b;
    this.l = W(this);
    this.F = Y(this, c);
    this.o = Y(this, d);
  };
  _.O(vp, Z);
  vp.prototype.j = function () {
    var a = this,
      b = this.F.value;
    if (!b || _.H(qx)) this.l.G(!1);
    else {
      b = _.A(b);
      for (var c = b.next(); !c.done; c = b.next()) {
        var d = c.value;
        c = d.Cc;
        (d = d.url) &&
          _.$m(
            this,
            Wf(c, d, this.o.value, function (e, f) {
              mh(a.context, e, f);
              var g, h;
              null == (g = a.C) || null == (h = g.error) || h.call(g, f);
            })
          );
      }
      this.l.G(!0);
    }
  };
  var FI = function (a, b, c) {
    Z.call(this, a, 1045);
    this.l = c;
    this.o = X(this, b);
  };
  _.O(FI, Z);
  FI.prototype.j = function () {
    var a = this.o.value;
    if (a) {
      var b = this.context,
        c = this.l;
      if (null != x(a, 1)) {
        var d = new tf(),
          e = new tp();
        e.G(a);
        a = new EI(b, e);
        I(d, a);
        b = new vp(b, console, a.l, c);
        I(d, b);
        Gf(d);
      }
    }
  };
  var GI = function (a, b) {
    Z.call(this, a, 1031);
    this.I = b;
  };
  _.O(GI, Z);
  GI.prototype.j = function () {
    this.I === this.I.top && lj(this.I);
  };
  var HI = function (a, b, c) {
    c = void 0 === c ? Ig : c;
    Z.call(this, a, 1063);
    this.I = b;
    this.o = c;
    this.l = W(this);
  };
  _.O(HI, Z);
  HI.prototype.j = function () {
    var a = this;
    if (_.H(Aw) && Jg(this.I)) {
      var b = null,
        c = 0,
        d = _.Ce(Bw),
        e = _.ih(this.context, this.id, function () {
          var g, h, l, k;
          return _.jb(function (m) {
            switch (m.j) {
              case 1:
                return (g = a.o(a.I)), (h = '0'), (m.D = 2), kb(m, g, 4);
              case 4:
                h = null != (l = m.m) ? l : '0';
                h.length > d &&
                  (mh(a.context, a.id, new hl('ML:' + h.length)), (h = '0'));
                mb(m, 3);
                break;
              case 2:
                (k = nb(m)), mh(a.context, a.id, k);
              case 3:
                (b = h), (c = _.se(a.I) + 3e5), (m.j = 0);
            }
          });
        });
      var f = ((E = e()), _.t(E, 'finally')).call(E, function () {
        f = void 0;
      });
      this.l.G(function () {
        var g, h;
        return _.jb(function (l) {
          if (1 == l.j) {
            g = _.se(a.I) >= c;
            h = null === b || '0' === b;
            if (!g && !h) {
              l.j = 2;
              return;
            }
            f ||
              (f = ((E = e()), _.t(E, 'finally')).call(E, function () {
                f = void 0;
              }));
            return kb(l, f, 2);
          }
          return l.return((0, C.K)(b));
        });
      });
    } else
      this.l.G(function () {
        return v.Promise.resolve('');
      });
  };
  HI.prototype.m = function () {
    this.l.G(function () {
      return v.Promise.resolve('');
    });
  };
  var II = function (a, b) {
    Z.call(this, a, 979);
    this.I = b;
    this.A = W(this);
  };
  _.O(II, Z);
  II.prototype.j = function () {
    var a = this,
      b = 'function' !== typeof this.I.document.browsingTopics,
      c = !Xf('browsing-topics', this.I.document);
    b = b || c;
    !_.H(ow) && b
      ? Zy(this.A)
      : Yi(this.I).then(function (d) {
          a.A.G(d);
        });
  };
  II.prototype.m = function () {
    Zy(this.A);
  };
  var JI = function (a) {
    Z.call(this, a, 1083);
    this.A = W(this);
  };
  _.O(JI, Z);
  JI.prototype.j = function () {
    var a = Dj();
    a ? $y(this.A, a) : Zy(this.A);
  };
  var bn = function (a, b, c, d) {
    Z.call(this, a, 879);
    this.o = b;
    this.l = W(this);
    c && (this.C = X(this, d));
  };
  _.O(bn, Z);
  bn.prototype.j = function () {
    var a, b;
    (null != (b = null == (a = this.C) ? void 0 : a.value) ? b : this.o.m())
      ? ((a = this.o.o('loaded')), $y(this.l, a))
      : Zy(this.l);
  };
  var an = function (a, b, c) {
    Z.call(this, a, 896);
    this.l = b;
    this.Ab = W(this);
    c && lz(this, c);
  };
  _.O(an, Z);
  an.prototype.j = function () {
    this.Ab.G(this.l.m());
  };
  var KI = function (a, b) {
    Z.call(this, a, 1018);
    _.H(yw) && (this.zb = jz(this));
    this.l = Y(this, b);
  };
  _.O(KI, Z);
  KI.prototype.j = function () {
    var a,
      b,
      c,
      d = _.A(
        null !=
          (c =
            null == (a = this.l.value)
              ? void 0
              : null == (b = Se(a, uy, 5))
              ? void 0
              : ln(b, 1))
          ? c
          : []
      );
    for (a = d.next(); !a.done; a = d.next()) ze(a.value);
    var e;
    null == (e = this.zb) || e.notify();
  };
  var LI = function (a, b) {
    Z.call(this, a, 1070);
    this.l = W(this);
    this.o = Y(this, b);
  };
  _.O(LI, Z);
  LI.prototype.j = function () {
    var a,
      b = null == (a = this.o.value) ? void 0 : Se(a, uy, 5);
    if (b) {
      a = x(b, 3);
      var c = [];
      b = _.A(pc(b, 2, $b));
      for (var d = b.next(); !d.done; d = b.next()) {
        var e = d.value;
        d = new Ot();
        var f = new Mt();
        e = _.z(f, 1, e);
        d = _.ch(d, 2, e);
        a &&
          ((e = new Kt()),
          (e = _.z(e, 1, 1)),
          (e = _.z(e, 2, a)),
          _.ch(d, 3, e));
        c.push(d);
      }
      this.l.G(c);
    } else this.l.G([]);
  };
  var up = function (a, b, c) {
    Z.call(this, a, 706);
    this.I = b;
    this.A = W(this);
    this.l = X(this, c);
  };
  _.O(up, Z);
  up.prototype.j = function () {
    Yy(this.A, ne(this.l.value, this.I));
  };
  var MI = function (a, b) {
    Z.call(this, a, 1081);
    this.wa = W(this);
    this.l = Y(this, b);
  };
  _.O(MI, Z);
  MI.prototype.j = function () {
    this.l.value ? this.wa.G(this.l.value) : Zy(this.wa);
  };
  var NI = function (a, b, c, d, e, f, g) {
    Z.call(this, a, 1080);
    this.Y = b;
    this.googletag = c;
    this.U = d;
    this.C = e;
    this.l = f;
    this.F = g;
    this.o = W(this);
  };
  _.O(NI, Z);
  NI.prototype.j = function () {
    if (Fl(this.l, St, 2) && fn((0, C.K)(Se(this.l, St, 2)))) {
      var a;
      qn(
        this.Y,
        this.googletag,
        this.l,
        null != (a = this.U) ? a : this.C.j,
        this.F
      );
      null != x(this.l, 1) ? this.o.G(ee(this.l, 1)) : Zy(this.o);
    } else Zy(this.o);
  };
  var OI = new v.Map([
      [1, 5],
      [2, 2],
      [3, 3],
    ]),
    PI = function (a, b, c, d, e, f, g, h) {
      Z.call(this, a, 1079);
      this.googletag = b;
      this.U = c;
      this.M = d;
      this.l = e;
      this.F = f;
      this.C = g;
      this.o = h;
    };
  _.O(PI, Z);
  PI.prototype.j = function () {
    var a = this,
      b = this.C.getAdUnitPath(),
      c = OI.get(de(this.C, 2, 0));
    if (
      b &&
      c &&
      (b = Pm(this.context, this.F, this.M, { Dc: c, adUnitPath: b, Ia: !0 }))
    ) {
      var d = (0, C.K)(b.j);
      this.o && on((0, C.K)(nn(this.l, d.getSlotElementId())), this.o);
      this.googletag.cmd.push(function () {
        d.addService(a.googletag.pubads());
      });
      pn(document, function () {
        a.googletag.display(d);
        var e;
        G(null != (e = a.U) ? e : a.l.j, 4) &&
          a.googletag.pubads().refresh([d]);
      });
    }
  };
  var QI = function (a, b, c, d, e, f, g) {
    Z.call(this, a, 1082);
    this.googletag = b;
    this.U = c;
    this.R = d;
    this.o = e;
    this.O = f;
    this.F = [];
    this.M = W(this);
    this.C = new MI(this.context, this.M);
    this.l = [];
    this.wa = this.C.wa;
    _.$m(this, this.C);
    a = _.A(g);
    for (b = a.next(); !b.done; b = a.next()) this.l.push(X(this, b.value));
  };
  _.O(QI, Z);
  QI.prototype.j = function () {
    if (_.H(Ww)) {
      var a = RI(this),
        b = a.Me,
        c = a.Yf,
        d;
      Yy(this.M, null == (d = a.uf) ? void 0 : Se(d, Ot, 4));
      a = new tf();
      _.$m(this, a);
      b = _.A(b);
      for (d = b.next(); !d.done; d = b.next()) {
        d = d.value;
        var e = void 0;
        I(
          a,
          new PI(
            this.context,
            this.googletag,
            null != (e = this.U) ? e : this.o.j,
            this.R,
            this.o,
            this.O,
            (0, C.K)(jn(d, Qt, 5, Xt)),
            Se(d, Ot, 4)
          )
        );
      }
      c = _.A(c);
      for (d = c.next(); !d.done; d = c.next())
        (b = d.value),
          (b = new NI(
            this.context,
            document,
            this.googletag,
            this.U,
            this.o,
            (0, C.K)(jn(b, Ut, 6, Xt)),
            Se(b, Ot, 4)
          )),
          I(a, b),
          this.F.push(b.o);
      I(a, this.C);
      Gf(a);
    } else Zy(this.wa);
  };
  var RI = function (a) {
    var b = [],
      c = [];
    a = _.A(
      _.t(a.l, 'flatMap').call(a.l, function (f) {
        return f.value;
      })
    );
    for (var d = a.next(); !d.done; d = a.next())
      switch (((d = d.value), ej(d, Xt))) {
        case 5:
          b.push(d);
          break;
        case 6:
          c.push(d);
          break;
        case 8:
          var e = d;
      }
    return { Me: b, Yf: c, uf: e };
  };
  var rn = new v.Map([
    [1, 5],
    [2, 2],
    [3, 3],
  ]);
  var eq = function (a, b, c, d, e) {
    var f = eb.apply(5, arguments);
    Z.call(this, a, 912);
    this.googletag = b;
    this.U = c;
    this.F = d;
    this.C = e;
    this.l = W(this);
    this.wa = W(this);
    this.o = [];
    f = _.A(f);
    for (var g = f.next(); !g.done; g = f.next()) this.o.push(X(this, g.value));
  };
  _.O(eq, Z);
  eq.prototype.j = function () {
    if (_.H(Ww)) {
      for (var a = [], b = _.A(this.o), c = b.next(); !c.done; c = b.next()) {
        c = _.A(c.value.value);
        for (var d = c.next(); !d.done; d = c.next())
          switch (((d = d.value), ej(d, Xt))) {
            case 5:
              var e = void 0,
                f = void 0;
              sn(
                this.context,
                this.googletag,
                (0, C.K)(jn(d, Qt, 5, Xt)),
                null != (e = Se(d, Ot, 4)) ? e : null,
                null != (f = this.U) ? f : mi().j,
                this.F,
                this.C
              );
              break;
            case 6:
              e = (0, C.K)(jn(d, Ut, 6, Xt));
              Fl(e, St, 2) &&
                fn((0, C.K)(Se(e, St, 2))) &&
                ((f = void 0),
                qn(
                  document,
                  this.googletag,
                  (0, C.K)(jn(d, Ut, 6, Xt)),
                  null != (f = this.U) ? f : mi().j,
                  Se(d, Ot, 4)
                ),
                (d = ee(e, 1)) && a.push(d));
              break;
            case 8:
              Fl(d, Ot, 4) && this.wa.G((0, C.K)(Se(d, Ot, 4)));
          }
      }
      this.l.G(a);
    } else this.l.G([]);
    Zy(this.wa);
  };
  eq.prototype.H = function (a) {
    this.m(a);
  };
  eq.prototype.m = function () {
    this.l.G([]);
  };
  var SI = function (a, b, c, d) {
    Z.call(this, a, 890);
    this.C = b;
    this.o = c;
    this.l = Y(this, d);
  };
  _.O(SI, Z);
  SI.prototype.j = function () {
    var a = this;
    Nf(this.C, this.l.value, function (b, c) {
      mh(a.context, b, c);
      var d, e;
      null == (d = a.o) || null == (e = d.error) || e.call(d, c);
    });
  };
  var TI = function (a, b, c, d, e, f, g) {
    _.U.call(this);
    this.context = a;
    this.M = b;
    this.da = c;
    this.l = d;
    this.N = e;
    this.ba = f;
    this.la = g;
    this.ha = new zI(this.context, this.ba);
    this.m = new oI(this.context, this.ha.l);
    this.gb = this.m.gb;
    this.Ra = this.m.Ra;
    this.j = new KH(this.context, this.m.l, window);
    this.W = new HI(this.context, window);
    this.H = new lI(this.context, this.j.C);
    this.L = new mI(this.context, this.j.o);
    var h;
    this.o = new qI(this.context, null != (h = window.location.hash) ? h : '');
    this.B = new eq(
      this.context,
      Tj(),
      null,
      this.M,
      this.l,
      this.o.A,
      this.m.Eb
    );
    this.O = _.H(Xw);
    this.T = new QI(this.context, Tj(), null, this.M, this.da, this.l, [
      this.o.A,
      this.m.Eb,
    ]);
    this.ia = new AI(this.context, window);
    this.ja = new II(this.context, window);
    this.R = new nI(
      this.context,
      this.la,
      this.j.Qa,
      this.gb,
      this.j.l,
      this.B.l,
      this.T.F,
      this.O
    );
    this.ab = this.H.ab;
    this.Pa = this.j.Pa;
    this.Za = this.j.Za;
    this.Lc = this.W.l;
    this.Qa = this.j.Qa;
    this.ka = this.j.l;
    this.jb = this.H.jb;
    this.ma = this.B.l;
    this.Wa = this.ia.Wa;
    this.aa = this.L.o;
    this.Rb = this.L.l;
    this.ed = this.ja.A;
    this.Ub = this.R.A;
    this.C = new ZH(
      this.context,
      this.Wa,
      this.Ub,
      this.ab,
      this.Pa,
      this.jb,
      this.aa,
      this.Rb,
      this.Za
    );
    this.Bb = this.C.Bb;
    this.Cb = this.C.Cb;
    this.wa = this.O ? this.T.wa : this.B.wa;
    this.Zb = new tp();
    _.$m(this, this.ia);
    _.$m(this, this.ha);
    _.$m(this, this.m);
    _.$m(this, this.H);
    _.$m(this, this.L);
    _.$m(this, this.j);
    _.$m(this, this.o);
    _.$m(this, this.B);
    _.$m(this, this.T);
    _.$m(this, this.ja);
    _.$m(this, this.C);
    _.$m(this, this.R);
    _.$m(this, this.W);
    _.H(Hw) &&
      ((this.F = new JI(this.context)),
      _.$m(this, this.F),
      (this.Ud = this.F.A));
    if (!f) {
      this.gb.G([]);
      this.Qa.G({});
      this.ka.G([]);
      Zy(this.ab);
      this.Pa.G(!1);
      this.jb.G(new v.Map());
      Zy(this.aa);
      this.Ub.notify();
      Zy(this.ma);
      Zy(this.Rb);
      this.Za.G(!1);
      var l;
      null == (l = this.wa) || Zy(l);
      this.Ra.G([]);
      this.Zb.G([]);
      Zy(this.ed);
      Zy(this.Lc);
    }
  };
  _.O(TI, _.U);
  var UI = function (a, b) {
    var c = new tf();
    _.$m(a, c);
    I(c, a.ia);
    I(c, a.ha);
    I(c, a.m);
    I(c, a.j);
    I(c, a.H);
    I(c, a.R);
    I(c, a.L);
    b = new yI(a.context, window, a.m.o, b);
    a.Xc = b.l;
    I(c, b);
    I(c, a.o);
    a.O ? I(c, a.T) : I(c, a.B);
    _.H(zx) && I(c, new GI(a.context, window));
    I(c, a.W);
    I(c, a.ja);
    I(c, a.C);
    a.F && I(c, a.F);
    var d = cn(a.context, a.ba, a.Xc);
    b = d.Ab;
    var e = d.he;
    _.$m(c, d.qa);
    d = new KI(a.context, e);
    a.zb = d.zb;
    I(c, d);
    d = new LI(a.context, e);
    I(c, d);
    a.Zb = d.l;
    _.H(qx) ||
      Nk() ||
      ((b = Wm(a.context, a.l, a.N, void 0, window, b, e)),
      (e = b.eb),
      _.$m(a, b.qa),
      (b = new up(a.context, window, e)),
      I(c, b),
      (e = new SI(a.context, Tj(), console, b.A)),
      I(c, e),
      (e = new DI(a.context, a.Ra)),
      (a.Hd = e.o),
      I(c, e),
      _.H(ux) && ((b = new FI(a.context, e.l, b.A)), I(c, b)));
    I(c, new CI(a.context, Tj(), a.M, a.da, a.l, a.m.C));
    Gf(c);
    return {
      Xc: a.Xc,
      Ub: a.Ub,
      gb: a.gb,
      Wa: a.Wa,
      Qa: a.Qa,
      ab: a.ab,
      Pa: a.Pa,
      Za: a.Za,
      jb: a.jb,
      Bb: a.Bb,
      Cb: a.Cb,
      Lc: a.Lc,
      ed: a.ed,
      Rb: a.Rb,
      Hd: a.Hd,
      wa: a.wa,
      Ra: a.Ra,
      zb: a.zb,
      Zb: a.Zb,
      Ud: a.Ud,
    };
  };
  new ez();
  new tp();
  new tp();
  new tp();
  new tp();
  new tp();
  new tp();
  new tp();
  new tp();
  new tp();
  new tp();
  new tp();
  new tp();
  new tp();
  new tp();
  var VI = ['Debug', 'Info', 'Warning', 'Error', 'Fatal'],
    WI = function (a, b, c) {
      this.level = a;
      this.message = b;
      this.j = c;
      this.timestamp = new Date();
    };
  aa = WI.prototype;
  aa.getSlot = function () {
    return this.j;
  };
  aa.getLevel = function () {
    return this.level;
  };
  aa.getTimestamp = function () {
    return this.timestamp;
  };
  aa.getMessage = function () {
    return this.message;
  };
  aa.toString = function () {
    return (
      this.timestamp.toTimeString() +
      ': ' +
      VI[this.level] +
      ': ' +
      this.message
    );
  };
  var XI = {
      20: function (a) {
        return (
          'Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: ' +
          a[0] +
          '.'
        );
      },
      23: function (a) {
        return (
          'Error in googletag.display: could not find div with id "' +
          a[1] +
          '" in DOM for slot: ' +
          a[0] +
          '.'
        );
      },
      34: function (a) {
        return (
          'Size mapping is null because invalid mappings were added: ' +
          a[0] +
          '.'
        );
      },
      60: function (a) {
        return (
          'Ignoring the ' +
          a[0] +
          '(' +
          (a[1] || '') +
          ') call since the service is already enabled.'
        );
      },
      66: function (a) {
        return (
          'Slot ' +
          a[0] +
          ' cannot be refreshed until PubAdsService is enabled.'
        );
      },
      68: function () {
        return 'Slots cannot be cleared until service is enabled.';
      },
      80: function (a) {
        return 'Slot object at position ' + a[0] + ' is of incorrect type.';
      },
      84: function (a) {
        return (
          'Cannot find targeting attribute "' + a[0] + '" for "' + a[1] + '".'
        );
      },
      93: function (a) {
        return 'Failed to register listener. Unknown event type: ' + a[0] + '.';
      },
      96: function (a) {
        return 'Invalid arguments: ' + a[0] + '(' + a[1] + ').';
      },
      122: function (a) {
        return (
          'Invalid argument: ' +
          a[0] +
          '(' +
          a[1] +
          '). Valid values: ' +
          a[2] +
          '.'
        );
      },
      121: function (a) {
        return (
          'Invalid object passed to ' +
          a[0] +
          '(' +
          a[1] +
          '), for ' +
          a[2] +
          ': ' +
          a[3] +
          '.'
        );
      },
      105: function (a) {
        return (
          'SRA requests may include a maximum of 30 ad slots. ' +
          a[1] +
          ' were requested, so the last ' +
          a[2] +
          ' were ignored.'
        );
      },
      106: function (a) {
        return (
          'Publisher betas ' +
          a[0] +
          ' were declared after enableServices() was called.'
        );
      },
      107: function (a) {
        return (
          'Publisher betas may only be declared once. ' +
          a[0] +
          ' were added after betas had already been declared.'
        );
      },
      108: function (a) {
        return (
          'Beta keys cannot be cleared. clearTargeting() was called on ' +
          a[0] +
          '.'
        );
      },
      123: function (a) {
        return 'Refresh was throttled for slot: ' + a[0] + '.';
      },
      113: function (a) {
        return (
          a[0] +
          ' ad slot ineligible as page is not mobile optimized: ' +
          a[1] +
          '.'
        );
      },
      116: function (a) {
        return (
          'The unique SafeFrame domain setting in Google Ad Manager conflicts with the "useUniqueDomain" setting passed to the setSafeFrameConfig API method. GPT will use useUniqueDomain=' +
          a[0] +
          ' based on the API call.'
        );
      },
      114: function () {
        return 'setCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.';
      },
      115: function () {
        return 'updateCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.';
      },
      132: function (a) {
        return (
          'Taxonomy with id ' +
          a[0] +
          ' has reached the limit of ' +
          a[1] +
          ' values.'
        );
      },
      133: function () {
        return 'No taxonomy values were cleared, either due to an invalid taxonomy or no values present.';
      },
      134: function (a) {
        return (
          tn(a[0]) +
          ' ' +
          a[1] +
          ' not requested: Format already created on the page.'
        );
      },
      135: function (a) {
        return (
          tn(a[0]) +
          ' ' +
          a[1] +
          ' not requested: Frequency cap of 1 has been exceeded.'
        );
      },
      136: function (a) {
        return (
          tn(a[0]) +
          ' ' +
          a[1] +
          ' not requested: The viewport exceeds the current maximum width of 2500px.'
        );
      },
      137: function (a) {
        return (
          tn(a[0]) +
          ' ' +
          a[1] +
          ' not requested: Format currently only supported on mobile.'
        );
      },
      138: function (a) {
        return (
          tn(a[0]) +
          ' ' +
          a[1] +
          ' not requested: Format currently only supports portrait orientation.'
        );
      },
      139: function (a) {
        return (
          tn(a[0]) +
          ' ' +
          a[1] +
          ' not requested: GPT is not running in the top-level window.'
        );
      },
      140: function (a) {
        return (
          tn(a[0]) +
          ' ' +
          a[1] +
          ' not requested: Detected browser is currently unsupported.'
        );
      },
      142: function (a) {
        return (
          'A google product ad tag with click url ' +
          a[0] +
          ' does not contain any elements enabled for clicking.'
        );
      },
      145: function (a) {
        return (
          tn(a[0]) +
          ' ' +
          a[1] +
          ' not requested: Unable to access local storage to determine if the frequency cap has been exceeded due to insufficient user consent.'
        );
      },
      143: function () {
        return 'getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead.';
      },
      147: function () {
        return 'GPT must be loaded from the limited ads URL to enable limited ads functionality.';
      },
      148: function () {
        return 'CommerceAdsConfig must contain a valid value for either categories or queries.';
      },
    },
    YI = {
      26: function (a) {
        return (
          'Div ID passed to googletag.display() does not match any defined slots: ' +
          a[0] +
          '.'
        );
      },
      28: function (a) {
        return (
          'Error in googletag.defineSlot: Cannot create slot ' +
          a[1] +
          '. Div element "' +
          a[0] +
          '" is already associated with another slot: ' +
          a[2] +
          '.'
        );
      },
      149: function (a) {
        return (
          'Error in googletag.defineSlot: Invalid ad unit path provided ' +
          a[0] +
          ', see https://support.google.com/admanager/answer/10477476 for more information.'
        );
      },
      92: function (a) {
        return 'Exception in ' + a[1] + ' event listener: "' + a[0] + '".';
      },
      30: function (a) {
        return 'Exception in googletag.cmd function: ' + a[0] + '.';
      },
      125: function (a) {
        return 'google-product-ad element is invalid: ' + a[0] + '.';
      },
      126: function () {
        return 'Attempted to collect prebid data but window.pbjs is undefined.';
      },
      127: function (a) {
        return (
          'Encountered the following error while attempting to collect prebid metadata: ' +
          a[0] +
          '.'
        );
      },
      144: function () {
        return "ContentService is no longer available. Use the browser's built-in DOM APIs to directly add content to div elements instead.";
      },
    };
  var ZI = function (a) {
      this.context = a;
      this.D = this.J = this.j = 0;
      this.B = window;
      this.m = [];
      this.m.length = 1e3;
    },
    iH = function (a) {
      return []
        .concat(_.Ld(a.m.slice(a.j)), _.Ld(a.m.slice(0, a.j)))
        .filter(function (b) {
          return !!b;
        });
    },
    jH = function (a, b) {
      return iH(a).filter(function (c) {
        return c.getSlot() === b;
      });
    },
    kH = function (a, b) {
      return iH(a).filter(function (c) {
        return c.getLevel() >= b;
      });
    };
  ZI.prototype.log = function (a, b, c, d) {
    var e = this;
    d = void 0 === d ? !1 : d;
    var f, g;
    c = new WI(
      a,
      b,
      null != (g = null == (f = void 0 === c ? null : c) ? void 0 : f.j)
        ? g
        : null
    );
    this.m[this.j] = c;
    this.j = (this.j + 1) % 1e3;
    g = _.Ce(sw) && 100 > this.J;
    f = 2 === a || 3 === a;
    var h = b.getMessageArgs(),
      l = b.getMessageId(),
      k = XI[l] || YI[l];
    g &&
      f &&
      ((b = _.Ce(sw)),
      ti(
        'gpt_eventlog_messages',
        function (m) {
          ++e.J;
          Ci(m, e.context);
          L(m, 'level', a);
          L(m, 'messageId', l);
          L(m, 'args', h.join('|'));
          k || L(m, 'noMsg', !0);
          var n = Error(),
            p;
          var r = null != (p = n.stack) ? p : '';
          n = n.message;
          try {
            -1 == r.indexOf(n) && (r = n + '\n' + r);
            for (var u; r != u; )
              (u = r),
                (r = r.replace(
                  RegExp('((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2'),
                  '$1'
                ));
            var w = r.replace(RegExp('\n *', 'g'), '\n');
          } catch (D) {
            w = n;
          }
          L(m, 'stack', w);
        },
        b
      ));
    if (k) {
      b = '[GPT] ' + k(h);
      if (d) throw new hl(b);
      d = this.D < _.Ce(tw) && f && _.q.console;
      if (
        (this.B === top && d) ||
        _.t(_.q.navigator.userAgent, 'includes').call(
          _.q.navigator.userAgent,
          'Lighthouse'
        )
      )
        (function (m) {
          var n, p, r, u;
          return void (2 === a
            ? null == (p = (n = _.q.console).warn)
              ? void 0
              : p.call(n, m)
            : null == (u = (r = _.q.console).error)
            ? void 0
            : u.call(r, m));
        })(b),
          this.D++;
    }
    return c;
  };
  ZI.prototype.info = function (a, b) {
    return this.log(1, a, void 0 === b ? null : b);
  };
  var N = function (a, b, c) {
    a.log(2, b, c, !1);
  };
  ZI.prototype.error = function (a, b, c) {
    return this.log(3, a, b, void 0 === c ? !1 : c);
  };
  var $I = function (a, b) {
    Z.call(this, a, 1068);
    this.l = b;
    this.A = W(this);
  };
  _.O($I, Z);
  $I.prototype.j = function () {
    var a = this,
      b,
      c,
      d,
      e;
    return _.jb(function (f) {
      switch (f.j) {
        case 1:
          return kb(f, a.l.promise, 2);
        case 2:
          b = f.m;
          c = a.A;
          d = c.G;
          if (!b) {
            e = '';
            f.j = 3;
            break;
          }
          return kb(f, b(), 4);
        case 4:
          e = f.m;
        case 3:
          d.call(c, e), (f.j = 0);
      }
    });
  };
  $I.prototype.m = function () {
    this.A.G('');
  };
  var aJ = function (a, b) {
    Z.call(this, a, 1091);
    this.A = W(this);
    this.l = Y(this, b);
  };
  _.O(aJ, Z);
  aJ.prototype.j = function () {
    this.l.value ? $y(this.A, this.l.value()) : this.A.G('');
  };
  aJ.prototype.m = function () {
    this.A.G('');
  };
  var bo = function () {
      this.m = [];
      this.hostpageLibraryTokens = [];
      this.j = {};
    },
    bJ = function (a, b) {
      if (
        !_.t(a.m, 'includes').call(a.m, b) &&
        ((E = [1, 2, 3]), _.t(E, 'includes')).call(E, b)
      ) {
        var c = Bz[b];
        if (c) {
          var d = b + '_hostpage_library';
          if ((c = ck(document, c))) c.id = d;
        }
        a.m.push(b);
        b = new Cz(b);
        a.hostpageLibraryTokens.push(b);
        a = Tj();
        a.hostpageLibraryTokens || (a.hostpageLibraryTokens = {});
        a.hostpageLibraryTokens[b.j] = b.m;
      }
    },
    cJ = function (a, b, c) {
      var d;
      a.j[b] = null != (d = a.j[b]) ? d : new v.Set();
      a.j[b].add(c);
    },
    ao = function (a, b) {
      var c, d;
      a =
        null != (d = null == (c = a.j[b]) ? void 0 : _.t(c, 'values').call(c))
          ? d
          : [];
      return [].concat(_.Ld(a));
    };
  var Kn = '3rd party ad content';
  var dJ = function (a, b) {
      this.serviceName = b;
      this.slot = (0, C.K)(a.j);
    },
    eJ = function (a, b) {
      dJ.call(this, a, b);
      this.isEmpty = !1;
      this.slotContentChanged = !0;
      this.sourceAgnosticLineItemId =
        this.sourceAgnosticCreativeId =
        this.lineItemId =
        this.labelIds =
        this.creativeTemplateId =
        this.creativeId =
        this.campaignId =
        this.advertiserId =
        this.size =
          null;
      this.isBackfill = !1;
      this.companyIds = this.yieldGroupIds = null;
    };
  _.O(eJ, dJ);
  var fJ = function () {
    dJ.apply(this, arguments);
  };
  _.O(fJ, dJ);
  var gJ = function (a, b, c) {
    dJ.call(this, a, b);
    this.inViewPercentage = c;
  };
  _.O(gJ, dJ);
  var hJ = function () {
    dJ.apply(this, arguments);
  };
  _.O(hJ, dJ);
  var iJ = function () {
    dJ.apply(this, arguments);
  };
  _.O(iJ, dJ);
  var jJ = function () {
    dJ.apply(this, arguments);
  };
  _.O(jJ, dJ);
  var kJ = function () {
    dJ.apply(this, arguments);
  };
  _.O(kJ, dJ);
  var lJ = function (a, b, c, d) {
    dJ.call(this, a, b);
    this.makeRewardedVisible = c;
    this.payload = d;
  };
  _.O(lJ, dJ);
  var mJ = function (a, b, c) {
    dJ.call(this, a, b);
    this.payload = c;
  };
  _.O(mJ, dJ);
  var nJ = function () {
    dJ.apply(this, arguments);
  };
  _.O(nJ, dJ);
  var Xn = new v.Set(),
    oJ = (function (a, b, c) {
      var d = 0,
        e = function () {
          d = 0;
        };
      return function (f) {
        d || ((d = _.q.setTimeout(e, b)), a.apply(c, arguments));
      };
    })(function () {
      throw new hl('Reached Limit for addEventListener');
    }, 3e5),
    pJ = function (a, b) {
      _.U.call(this);
      this.m = a;
      this.l = b;
      this.j = [];
      this.B = !1;
      this.C = 0;
      this.L = new v.Map();
      Xn.add(this);
      this.m.info(fG(this.getName()));
    };
  _.O(pJ, _.U);
  var Zn = function (a) {
    a.B || ((a.B = !0), Ae(6), a.T());
  };
  pJ.prototype.slotAdded = function (a, b) {
    this.j.push(a);
    var c = new iJ(a, this.getName());
    this.l.dispatchEvent('slotAdded', 818, c);
    this.m.info(hG(this.getName(), a.getAdUnitPath()), a);
    a = this.getName();
    us(b, 4, a);
  };
  pJ.prototype.destroySlots = function (a) {
    var b = this;
    return a.filter(function (c) {
      return ha(b.j, c);
    });
  };
  pJ.prototype.addEventListener = function (a, b) {
    var c = this;
    if (this.C >= _.Ce(qw) && 0 < _.Ce(qw)) oJ();
    else {
      var d;
      (null != (d = this.L.get(a)) && d.has(b)) ||
        (this.L.has(a) || this.L.set(a, new v.Map()),
        (d = function (e) {
          e = e.detail;
          try {
            b(e);
          } catch (h) {
            c.m.error(yG(String(h), a));
            var f, g;
            null == (f = window.console) ||
              null == (g = f.error) ||
              g.call(f, h);
          }
        }),
        (0, C.K)(this.L.get(a)).set(b, d),
        oF(this.l, a, d),
        this.C++);
    }
  };
  pJ.prototype.removeEventListener = function (a, b) {
    var c,
      d = null == (c = this.L.get(a)) ? void 0 : c.get(b);
    if (!d || !nF(this.l, a, d)) return !1;
    this.C--;
    return (0, C.K)(this.L.get(a)).delete(b);
  };
  var Pn = function (a) {
    for (var b = _.A(Xn), c = b.next(); !c.done; c = b.next())
      c.value.destroySlots(a);
  };
  var Tn = function (a, b, c, d) {
    pJ.call(this, a, c);
    this.H = b;
    this.ads = new v.Map();
    this.o = this.ub = !1;
    (_.H(Qk) ? d : _.xe(Rk)).D = !0;
  };
  _.O(Tn, pJ);
  Tn.prototype.slotAdded = function (a, b) {
    var c = this;
    oF(a, rF, function (d) {
      G(d.detail, 11) && (qJ(c, a).Vf = !0);
    });
    pJ.prototype.slotAdded.call(this, a, b);
  };
  Tn.prototype.T = function () {};
  Tn.prototype.setRefreshUnfilledSlots = function (a) {
    'boolean' === typeof a && (this.ub = a);
  };
  var eH = function (a, b) {
      b &&
        !a.o &&
        ti('ima_sdk_v', function (c) {
          a.o = !0;
          L(c, 'v', b);
        });
      return String(xs());
    },
    cH = function (a, b) {
      var c = mi().j,
        d = mi().m;
      if (a.H.B) {
        var e = { kb: 3 };
        a.F && (e.Hb = a.F);
        a.M && (e.Ib = a.M);
        b = null != b ? b : a.j;
        c = Wh(c, d);
        d = e.Hb;
        var f = e.Ib;
        (d && 'number' !== typeof d) ||
          (f && 'number' !== typeof f) ||
          a.H.refresh(c, b, e);
      } else (null == b ? 0 : b[0]) && a.m.error(nG(b[0].getDomId()));
    },
    fH = function (a, b) {
      var c;
      return a.H.B && !(null == (c = a.ads.get(b)) || !c.Vf);
    },
    dH = function (a, b) {
      return a.j.filter(function (c) {
        return _.t(b, 'includes').call(b, c.toString());
      });
    };
  Tn.prototype.getName = function () {
    return 'companion_ads';
  };
  var gH = function (a, b, c, d) {
      b = new eJ(b, a.getName());
      null != c && null != d && (b.size = [c, d]);
      a.l.dispatchEvent('slotRenderEnded', 67, b);
    },
    qJ = function (a, b) {
      var c = a.ads.get(b);
      c ||
        ((c = {}),
        a.ads.set(b, c),
        _.Qm(b, function () {
          return a.ads.delete(b);
        }));
      return c;
    };
  var Un = function (a, b) {
    pJ.call(this, a, b);
  };
  _.O(Un, pJ);
  Un.prototype.getName = function () {
    return 'content';
  };
  Un.prototype.T = function () {};
  var rJ = Iq(
      ['^[-p{L}p{M}p{N}_,.!*<>():/]*$'],
      ['^[-\\p{L}\\p{M}\\p{N}_,\\.!*<>():/]*$']
    ),
    sJ = _.or(function () {
      vv(
        'The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.'
      );
    }),
    uJ = function (a, b) {
      var c = this;
      this.N = a;
      this.j = new v.Map();
      this.Z = new v.Set();
      (null != b ? b : _.xe(Rk)).m = function (d) {
        return tJ(c, d);
      };
    };
  uJ.prototype.defineSlot = function (a, b, c, d, e) {
    a = Tk(this, a, b, c, d, e);
    var f = a.slotId;
    if (f) return f.j;
    a.Fc || b.error(Nj('googletag.defineSlot', [c, d, e]));
    return null;
  };
  var Tk = function (a, b, c, d, e, f, g) {
    return 'string' === typeof d &&
      0 < d.length &&
      e &&
      (void 0 === f || 'string' === typeof f)
      ? a.add(b, c, d, e, { fb: f, se: void 0 === g ? !1 : g })
      : {};
  };
  uJ.prototype.add = function (a, b, c, d, e) {
    var f = this,
      g = void 0 === e ? {} : e;
    e = g.fb;
    var h = void 0 === g.format ? 0 : g.format,
      l = void 0 === g.se ? !1 : g.se;
    g = void 0 === g.Ia ? !1 : g.Ia;
    try {
      if (!new RegExp(_.t(String, 'raw').call(String, rJ), 'u').test(c))
        return b.error(bG(c)), { Fc: !0 };
    } catch (n) {}
    var k = nm(h, g);
    if (k)
      return (
        ti('gpt_pla_ns', function (n) {
          L(n, 'iu', c);
          L(n, 'f', null != h ? h : '');
          L(n, 'nsr', k);
          Ci(n, a);
        }),
        Vl(b, k, h, c),
        {}
      );
    l && sJ();
    l = this.j.get(c) || Number(l);
    d = vJ(this, a, b, c, l, d, e || 'gpt_unit_' + c + '_' + l);
    b = d.Ya;
    var m = d.slotId;
    d = d.Fc;
    if (!m) return { Fc: d };
    this.j.set(c, l + 1);
    this.Z.add(m);
    _.Qm(m, function () {
      return void f.Z.delete(m);
    });
    WD(c);
    return { slotId: m, Ya: b };
  };
  var iI = function (a, b) {
      a = _.A(a.Z);
      for (var c = a.next(); !c.done; c = a.next())
        if (((c = c.value), c.getDomId() === b)) return c;
    },
    Qn = function (a) {
      a = _.A(a);
      for (var b = a.next(); !b.done; b = a.next()) b.value.Ea();
    },
    vJ = function (a, b, c, d, e, f, g) {
      var h = iI(a, g);
      if (h) return c.error(aG(g, d, h.getAdUnitPath())), { Fc: !0 };
      var l = new zH();
      AH(_.z(l, 1, d), g);
      BH(l, el(f));
      nE(l);
      var k = new Td(b, d, e, g);
      oH(k, kl(b, c, k));
      _.Qm(k, function () {
        var m = mi(),
          n = k.getDomId();
        delete m.m[n];
        m.D.delete(k);
        m = k.getAdUnitPath();
        m = Wg(m);
        var p;
        n = (null != (p = xh.get(m)) ? p : 0) - 1;
        0 >= n ? xh.delete(m) : xh.set(m, n);
        c.info(AG(k.toString()), k);
        (p = Gj.get(k)) && Hj.delete(p);
        Gj.delete(k);
      });
      c.info(PF(k.toString()), k);
      oF(k, sF, function (m) {
        m = m.detail.gg;
        c.info(QF(k.getAdUnitPath()), k);
        Gy(_.xe(kh), '7', 9, GF(a.N, k), 0, m);
      });
      oF(k, rF, function (m) {
        var n = m.detail;
        c.info(RF(k.getAdUnitPath()), k);
        var p;
        m = _.xe(kh);
        var r = x(l, 20);
        n = null != (p = n.getEscapedQemQueryId()) ? p : '';
        m.j &&
          ((_.q.google_timing_params = _.q.google_timing_params || {}),
          (_.q.google_timing_params['qqid.' + r] = n));
      });
      oF(k, Ro, function () {
        return void c.info(SF(k.getAdUnitPath()), k);
      });
      oF(k, To, function () {
        return void c.info(TF(k.getAdUnitPath()), k);
      });
      return { Ya: l, slotId: k };
    },
    tJ = function (a, b) {
      var c = new RegExp('(^|,|/)' + b + '($|,|/)');
      return [].concat(_.Ld(a.Z)).some(function (d) {
        return c.test(Wg(d.getAdUnitPath()));
      });
    },
    co = function (a) {
      return ao(_.xe(bo), a)
        .map(function (b) {
          var c;
          return null == (c = li(b, document)) ? void 0 : c.contentWindow;
        })
        .filter(function (b) {
          return !!b;
        });
    };
  var wJ = P([
      'https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/',
      '/pubads_impl_',
      '.js',
    ]),
    xJ = P([
      'https://securepubads.g.doubleclick.net/gpt/pubads_impl_',
      '_',
      '.js',
    ]),
    yJ = P([
      'https://pagead2.googlesyndication.com/pagead/managed/js/gpt/',
      '/pubads_impl_',
      '.js',
    ]),
    zJ = P([
      'https://pagead2.googlesyndication.com/gpt/pubads_impl_',
      '_',
      '.js',
    ]),
    AJ = new v.Map([[2, { Qf: 'page_level_ads' }]]),
    BJ = function (a) {
      var b = void 0 === b ? AJ : b;
      this.context = a;
      this.j = b;
      this.m = new v.Map();
      this.loaded = new v.Set();
    },
    DJ;
  BJ.prototype.load = function (a) {
    var b = _.CJ(this, a),
      c,
      d = (null != (c = this.j.get(a.module)) ? c : {}).Qf;
    if (!d) throw Error('cannot load invalid module: ' + d);
    if (!this.loaded.has(a.module)) {
      c =
        (c = _.Zg(172)) &&
        'pagead2.googlesyndication.com' ===
          dv((c.src || '').match(_.cv)[3] || null)
          ? this.context.hb
            ? B(yJ, this.context.hb, d)
            : B(zJ, d, this.context.Ga)
          : this.context.hb
          ? B(wJ, this.context.hb, d)
          : B(xJ, d, this.context.Ga);
      d = {};
      var e = _.Ce(Yw),
        f = _.Ce(xw);
      e && (d.cb = e);
      f && (d.mcb = f);
      _.t(Object, 'keys').call(Object, d).length
        ? ((c = wr.exec(Za(c).toString())),
          (e = c[3] || ''),
          (d = Id(c[1] + xr('?', c[2] || '', d) + xr('#', e))))
        : (d = c);
      DJ(this, a);
      ck(document, d);
      this.loaded.add(a.module);
    }
    return b.promise;
  };
  _.CJ = function (a, b) {
    b = b.module;
    a.m.has(b) || a.m.set(b, new _.Eg());
    return (0, C.K)(a.m.get(b));
  };
  DJ = function (a, b) {
    var c = b.module;
    b = '_gpt_js_load_' + c + '_';
    var d = _.ih(a.context, 340, function (e) {
      if (a.j.has(c) && 'function' === typeof e) {
        var f = (0, C.K)(a.j.get(c));
        f = (void 0 === f.Ze ? [] : f.Ze).map(function (g) {
          return _.CJ(a, g).promise;
        });
        v.Promise.all(f).then(function () {
          e.call(window, _, a);
        });
      }
    });
    Object.defineProperty(Tj(), b, {
      value: function (e) {
        if (d) {
          var f = d;
          d = null;
          f(e);
        }
      },
      writable: !1,
      enumerable: !1,
    });
  };
  var EJ = function () {
    this.resources = {};
  };
  var Xp = function (a, b, c, d, e, f, g, h, l) {
    Z.call(this, a, 682);
    this.N = b;
    this.format = c;
    this.slotId = d;
    this.I = e;
    this.A = jz(this);
    this.l = Y(this, f);
    this.o = X(this, g);
    this.F = X(this, h);
    this.C = Y(this, l);
  };
  _.O(Xp, Z);
  Xp.prototype.j = function () {
    var a = this;
    if (
      (2 === this.format || 3 === this.format) &&
      this.l.cc() &&
      op(this.l.value, 12, !1)
    ) {
      var b = (0, C.K)(this.C.value).lf,
        c = _.So(this.N, this.slotId),
        d = this.F.value,
        e = this.o.value;
      _.oi(e, { 'max-height': '30vh', overflow: 'hidden' });
      if (FJ) FJ.Bg(e);
      else {
        FJ = new b(
          this.context,
          this.format,
          e,
          this.I,
          d,
          this.N,
          this.slotId
        );
        b = {};
        d = _.A(be(this.l.value, $t, 13));
        for (var f = d.next(); !f.done; f = d.next())
          (f = f.value), (b[x(f, 1)] = x(f, 2));
        FJ.Fg(b);
        FJ.Wb();
        AF(this.N, this.slotId, function () {
          FJ && (FJ.Ea(), (FJ = null));
          c && _.EF(a.N, a.slotId);
        });
      }
      _.Qm(this, function () {
        return _.$u(e);
      });
    }
    this.A.notify();
  };
  var FJ = null;
  var Yp = function (a, b, c, d, e, f, g, h, l, k) {
    Z.call(this, a, 683);
    this.slotId = b;
    this.format = c;
    this.W = d;
    this.l = Y(this, e);
    this.F = X(this, f);
    this.R = X(this, g);
    this.M = Y(this, h);
    this.O = Y(this, l);
    this.C = X(this, k);
    this.o = pF(b, Ho, function (m) {
      m = m.detail;
      try {
        var n = JSON.parse(m.data);
        return 'sth' === n.googMsgType && 'i-adframe-load' === n.msg_type;
      } catch (p) {
        return !1;
      }
    });
  };
  _.O(Yp, Z);
  Yp.prototype.j = function () {
    var a = this,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      l,
      k,
      m,
      n;
    return _.jb(function (p) {
      if (1 == p.j) {
        b = _.Ce(Lw);
        c = a.l.value;
        if (!c || 5 !== a.format) return p.return();
        Math.random() < _.Ce(Mw) &&
          v.Promise.race([
            a.o.then(function () {
              return !1;
            }),
            new v.Promise(function (r) {
              MF(a, a.id, window, 'pagehide', function (u) {
                u && r(!0);
              });
            }),
          ]).then(function (r) {
            var u = new Zj('int_pm');
            L(u, 'ts', Date.now());
            L(u, 'flg', b);
            L(u, 'qem', a.C.value);
            L(u, 'ph', Number(r));
            bk(u);
          });
        d = a.R.value;
        e = a.F.value;
        f = (0, C.K)(a.O.value);
        g = f.yf;
        h = new _.$D(a.context);
        m = (null == (l = a.l.value) ? 0 : null != x(l, 14))
          ? 60 * (0, C.K)(null == (k = a.l.value) ? void 0 : x(k, 14))
          : 604800;
        n = new g(
          window,
          e,
          d,
          h,
          a.W,
          Fo(be(c, $t, 13)),
          dm(a.slotId),
          function () {
            return void a.Ea();
          },
          m,
          a.M.value
        );
        _.$m(a, n);
        switch (b) {
          case 0:
            n.W();
            break;
          case 1:
            p.j = 2;
            return;
        }
      } else {
        if (4 != p.j) return kb(p, a.o, 4);
        if (a.J) return p.return();
        n.W(!0);
      }
      p.j = 0;
    });
  };
  var GJ = function () {
    this.module = 2;
  };
  GJ.prototype.toString = function () {
    return String(this.module);
  };
  _.HJ = new GJ();
  var Tp = function (a, b, c, d, e, f) {
    Z.call(this, a, 846);
    this.C = b;
    this.format = c;
    this.A = W(this);
    this.l = Y(this, d);
    this.o = Y(this, e);
    f && lz(this, f);
  };
  _.O(Tp, Z);
  Tp.prototype.j = function () {
    var a,
      b =
        (2 === this.format || 3 === this.format) &&
        !(null == (a = this.l.value) || !op(a, 12, !1));
    a = 5 === this.format && this.o.value;
    b || a ? $y(this.A, this.C.load(_.HJ)) : Zy(this.A);
  };
  var IJ = function (a, b, c, d, e, f) {
    Z.call(this, a, 696);
    this.slotId = b;
    this.na = c;
    lz(this, d);
    mz(this, [e, f]);
  };
  _.O(IJ, Z);
  IJ.prototype.j = function () {
    this.na.dispatchEvent(
      'rewardedSlotClosed',
      703,
      new nJ(this.slotId, 'publisher_ads')
    );
  };
  var JJ = function (a, b, c, d, e) {
    Z.call(this, a, 694);
    this.slotId = b;
    this.na = c;
    lz(this, d);
    this.l = Y(this, e);
  };
  _.O(JJ, Z);
  JJ.prototype.j = function () {
    var a,
      b = null == (a = this.l.value) ? void 0 : a.payload;
    this.na.dispatchEvent(
      'rewardedSlotGranted',
      702,
      new mJ(this.slotId, 'publisher_ads', null != b ? b : null)
    );
  };
  var KJ = { width: '100%', height: '100%', left: '0', top: '0' },
    LJ = function (a, b, c, d, e, f) {
      Z.call(this, a, 693);
      this.I = b;
      this.F = f;
      this.A = jz(this);
      this.l = X(this, c);
      this.o = X(this, d);
      lz(this, e);
      this.C = new _.GD(this.I);
    };
  _.O(LJ, Z);
  LJ.prototype.j = function () {
    var a = this;
    if (!this.F.wb) {
      var b = 0 === (0, _.jm)() ? 'rgba(1,1,1,0.5)' : 'white';
      _.oi(
        this.o.value,
        _.t(Object, 'assign').call(
          Object,
          {
            'background-color': b,
            opacity: '1',
            position: 'fixed',
            margin: '0',
            padding: '0',
            'z-index': '2147483647',
            display: 'block',
          },
          KJ
        )
      );
      _.Qm(this, _.PD(this.I.document, this.I));
      Fd(this.l.value).postMessage(
        JSON.stringify({ type: 'rewarded', message: 'visible' }),
        '*'
      );
      if (this.I === this.I.top) {
        this.I.location.hash = 'goog_rewarded';
        var c = new _.JD(this.C);
        _.KD(c);
        _.Qm(this, function () {
          _.LD(c);
          'goog_rewarded' === a.I.location.hash && (a.I.location.hash = '');
        });
      }
      this.A.notify();
    }
  };
  var MJ = function (a, b, c, d) {
    Z.call(this, a, 695);
    this.I = b;
    this.l = X(this, c);
    lz(this, d);
  };
  _.O(MJ, Z);
  MJ.prototype.j = function () {
    if (this.I === this.I.top)
      var a = (0, C.K)(Fd(this.l.value)),
        b = MF(this, 503, this.I, 'hashchange', function (c) {
          yr(c.oldURL, '#goog_rewarded') &&
            (a.postMessage(
              JSON.stringify({ type: 'rewarded', message: 'back_button' }),
              '*'
            ),
            b());
        });
  };
  var NJ = function (a, b, c, d) {
    Z.call(this, a, 692);
    this.slotId = b;
    this.na = c;
    this.A = jz(this);
    this.l = X(this, d);
  };
  _.O(NJ, Z);
  NJ.prototype.j = function () {
    var a = this.l.value,
      b = new _.Eg(),
      c = b.promise,
      d;
    this.na.dispatchEvent(
      'rewardedSlotReady',
      701,
      new lJ(
        this.slotId,
        'publisher_ads',
        b.resolve,
        null != (d = a.payload) ? d : null
      )
    );
    fz(this.A, c);
  };
  var OJ = { width: '100%', height: '100%', left: '0', top: '0' },
    PJ = {
      width: '60%',
      height: '60%',
      transform: 'translate(-50%, -50%)',
      left: '50%',
      top: '50%',
    },
    QJ = function (a, b, c, d, e) {
      Z.call(this, a, 691);
      this.C = W(this);
      this.o = jz(this);
      this.F = X(this, c);
      this.l = mz(this, [d, e]);
    };
  _.O(QJ, Z);
  QJ.prototype.j = function () {
    'ha_before_make_visible' === this.l.value.message
      ? this.o.notify()
      : (_.oi(
          this.F.value,
          _.t(Object, 'assign').call(
            Object,
            { position: 'absolute' },
            0 === (0, _.jm)() ? PJ : OJ
          )
        ),
        this.C.G(this.l.value));
  };
  var Zp = function (a, b, c, d, e, f, g) {
    Z.call(this, a, 688);
    if (4 === c) {
      this.qa = new tf();
      _.$m(this, this.qa);
      c = Io(b, 'granted', a);
      I(this.qa, c);
      var h = Io(b, 'prefetched', a);
      I(this.qa, h);
      var l = Io(b, 'closed', a);
      I(this.qa, l);
      a = Io(b, 'ha_before_make_visible', a);
      I(this.qa, a);
      var k = new QJ(this.context, b, f, h.A, a.A);
      I(this.qa, k);
      h = new NJ(this.context, b, d, k.C);
      I(this.qa, h);
      g = new LJ(this.context, e, f, g, h.A, k.o);
      I(this.qa, g);
      I(this.qa, new MJ(this.context, e, f, g.A));
      I(this.qa, new JJ(this.context, b, d, h.A, c.A));
      I(this.qa, new IJ(this.context, b, d, h.A, l.A, a.A));
    }
  };
  _.O(Zp, Z);
  Zp.prototype.j = function () {
    var a;
    null == (a = this.qa) || Gf(a);
  };
  var RJ = function (a, b, c) {
    _.U.call(this);
    this.context = a;
    this.B = b;
    this.m = c;
    a = c.slotId;
    b = c.size;
    this.j = 'height' === c.mf ? 'fluid' : [b.width, b.height];
    this.ec = ji(a);
    this.hc = Kn;
  };
  _.O(RJ, _.U);
  RJ.prototype.render = function () {
    var a = this.B,
      b = this.m,
      c = b.slotId,
      d = b.P.V,
      e = b.Y,
      f = b.size,
      g = b.Gb,
      h = b.ff,
      l = b.isBackfill;
    b = b.qc;
    g && Lg(g, _.Yu(e), null != h ? h : '', !1);
    Qo(_.xe(kh), '5', (0, C.K)(x(d[c.getDomId()], 20)));
    c.dispatchEvent(Ro, 801, { ae: 0 === a.kind ? a.La : '', isBackfill: l });
    a = this.H();
    b && a && a.setAttribute('data-google-container-id', b);
    c.dispatchEvent(To, 825, { size: f, isEmpty: !1 });
    return a;
  };
  RJ.prototype.loaded = function (a) {
    var b = this.m,
      c = b.slotId,
      d = b.na;
    b = b.P.V;
    c.dispatchEvent(vF, 844, void 0);
    a && a.setAttribute('data-load-complete', !0);
    d.dispatchEvent('slotOnload', 710, new hJ(c, 'publisher_ads'));
    Qo(_.xe(kh), '6', (0, C.K)(x(b[c.getDomId()], 20)));
  };
  var SJ = function (a, b) {
    if (b) return null;
    a = a.B;
    a = 0 === a.kind ? a.La : '';
    b = '';
    var c = !0,
      d = 'sf';
    b = void 0 === b ? '' : b;
    c = void 0 === c ? !1 : c;
    d = void 0 === d ? '' : d;
    if (a) {
      var e = a.toLowerCase();
      -1 < e.indexOf('<!doctype') || -1 < e.indexOf('<html')
        ? c && Vg(d, 2)
        : (c && Vg(d, 3),
          (a = _.H(yx)
            ? a
            : '<!doctype html><html><head>' +
              b +
              '</head><body>' +
              a +
              '</body></html>'));
    } else c && Vg(d, 1);
    return a;
  };
  RJ.prototype.D = function () {
    _.U.prototype.D.call(this);
    var a;
    null == (a = this.m.Gb) || a.removeAttribute('data-google-query-id');
  };
  RJ.prototype.L = function (a, b) {
    var c = this,
      d = TJ(
        this,
        function () {
          return void c.loaded((0, C.K)(d.j));
        },
        a,
        b
      );
    _.Qm(this, function () {
      100 != d.status &&
        (2 == d.C && (IE(d.D), (d.C = 0)),
        window.clearTimeout(d.T),
        (d.T = -1),
        (d.L = 3),
        d.m && (d.m.Ea(), (d.m = null)),
        _.Pd(window, 'resize', d.ua),
        _.Pd(window, 'scroll', d.ua),
        d.l && d.j && d.l == _.av(d.j) && d.l.removeChild(d.j),
        (d.j = null),
        (d.l = null),
        (d.status = 100));
    });
    return d;
  };
  var TJ = function (a, b, c, d) {
    var e = a.m,
      f = e.Ae,
      g = e.isBackfill,
      h = e.zf,
      l = e.qc,
      k = e.Ic,
      m = e.nd,
      n = Array.isArray(a.j) ? new _.Th(Number(a.j[0]), Number(a.j[1])) : 1;
    return new QE({
      Nd: e.Zd,
      ec: a.ec,
      hc: a.hc,
      content: SJ(a, d),
      size: n,
      df: !!h,
      re: b,
      Be: null != f ? f : void 0,
      permissions: {
        Gc: Kk(c, 1) ? !!G(c, 1) : !g,
        Hc: Kk(c, 2) ? !!G(c, 2) : !1,
      },
      ic: !!Tj().fifWin,
      hg: nH ? nH : (nH = zk()),
      Ve: Dk(),
      hostpageLibraryTokens: _.xe(bo).hostpageLibraryTokens,
      Fa: function (p, r) {
        return void mh(a.context, p, r);
      },
      uniqueId: (0, C.K)(l),
      ze: $h(),
      Ic: null != k ? k : void 0,
      Nc: null != d ? d : void 0,
      nd: null != m ? m : void 0,
    });
  };
  var Ko = function () {
    RJ.apply(this, arguments);
  };
  _.O(Ko, RJ);
  Ko.prototype.H = function () {
    var a = this.m,
      b = a.P,
      c = b.U;
    a = b.V[a.slotId.getDomId()];
    b = new Ek();
    c = Lk([b, c.Sa(), null == a ? void 0 : a.Sa()]);
    c = RJ.prototype.L.call(this, c);
    return (0, C.K)(c.j);
  };
  Ko.prototype.l = function () {
    return !1;
  };
  var UJ = function () {
    RJ.apply(this, arguments);
  };
  _.O(UJ, RJ);
  var VJ = function (a, b) {
      var c = _.Ad(b ? 'fencedframe' : 'IFRAME');
      b && (c.mode = 'opaque-ads');
      c.id = a.ec;
      c.name = a.ec;
      c.title = a.hc;
      Array.isArray(a.j)
        ? null != a.j[0] &&
          null != a.j[1] &&
          ((c.width = String(a.j[0])), (c.height = String(a.j[1])))
        : ((c.width = '100%'), (c.height = '0'));
      c.allowTransparency = 'true';
      c.scrolling = 'no';
      c.marginWidth = '0';
      c.marginHeight = '0';
      c.frameBorder = '0';
      c.style.border = '0';
      c.style.verticalAlign = 'bottom';
      c.setAttribute('role', 'region');
      c.setAttribute('aria-label', 'Advertisement');
      c.tabIndex = 0;
      return c;
    },
    WJ = function (a, b) {
      'string' !== typeof a.j &&
        ((b.width = String(a.j[0])), (b.height = String(a.j[1])));
      var c = _.ih(a.context, 774, function () {
        a.loaded(b);
        _.Pd(b, 'load', c);
      });
      _.hb(b, 'load', c);
      _.Qm(a, function () {
        return _.Pd(b, 'load', c);
      });
      a.m.Zd.appendChild(b);
    };
  var Lo = function () {
    UJ.apply(this, arguments);
  };
  _.O(Lo, UJ);
  Lo.prototype.H = function () {
    var a = this,
      b = this.m,
      c = b.Ae;
    b = b.Ic;
    var d = VJ(this);
    if (null == c ? 0 : c.length)
      if (_.Sr) {
        c = _.A(c);
        for (var e = c.next(); !e.done; e = c.next()) d.sandbox.add(e.value);
      } else d.sandbox.add.apply(d.sandbox, _.Ld(c));
    b && (d.allow = b);
    WJ(this, d);
    _.ph(
      this.context,
      653,
      function () {
        var f = new sg(a.B.La, tg);
        var g = f.toString().toLowerCase();
        -1 < g.indexOf('<!doctype') || -1 < g.indexOf('<html')
          ? Jo(2)
          : (Jo(3),
            (f = _.H(yx)
              ? f
              : new sg(
                  '<!doctype html><html><head><script>var inDapIF=true,inGptIF=true;\x3c/script></head><body>' +
                    f +
                    '</body></html>',
                  tg
                )));
        var h, l;
        g =
          null != (l = null == (h = d.contentWindow) ? void 0 : h.document)
            ? l
            : d.contentDocument;
        Ka() && g.open('text/html', 'replace');
        bb(g, f);
        var k, m, n;
        if (
          yr(
            null !=
              (n =
                null == (k = d.contentWindow)
                  ? void 0
                  : null == (m = k.location)
                  ? void 0
                  : m.href)
              ? n
              : '',
            '#'
          )
        ) {
          var p, r;
          null == (p = d.contentWindow) ||
            null == (r = p.history) ||
            r.replaceState(null, '', '#' + Math.random());
        }
        g.close();
      },
      !0
    );
    return d;
  };
  Lo.prototype.l = function () {
    return !0;
  };
  var No = function () {
    UJ.apply(this, arguments);
  };
  _.O(No, UJ);
  No.prototype.H = function () {
    var a = VJ(this, !this.m.rg);
    Pi(a, this.B.Td);
    WJ(this, a);
    return a;
  };
  No.prototype.l = function () {
    return !1;
  };
  var Mo = function () {
    UJ.apply(this, arguments);
  };
  _.O(Mo, UJ);
  Mo.prototype.H = function () {
    var a = this.B.url,
      b = this.m,
      c = b.P,
      d = c.U;
    b = c.V[b.slotId.getDomId()];
    d = Lk([d.Sa(), null == b ? void 0 : b.Sa()]);
    var e = VJ(this);
    Pi(e, a);
    UJ.prototype.L.call(this, d, e);
    var f = function () {
      e.removeEventListener('load', f);
      XJ(a);
    };
    e.addEventListener('load', f);
    Av(e, function () {
      return void XJ(a);
    });
    return e;
  };
  var XJ = function (a) {
    var b = document.querySelectorAll('script[type=webbundle]');
    if (b.length) {
      a: {
        for (var c = 0; c < b.length; c++) {
          var d = void 0;
          if (null == (d = b[c].textContent) ? 0 : d.match(a)) {
            b = b[c];
            break a;
          }
        }
        b = null;
      }
      b &&
        b.textContent &&
        (c = JSON.parse(b.textContent)) &&
        'object' === typeof c &&
        ((d = c.resources),
        (a = d.indexOf(a, 0)),
        -1 < a && d.splice(a, 1),
        0 === d.length
          ? document.head.removeChild(b)
          : ((a = _.Ad('SCRIPT')),
            a.setAttribute('type', 'webbundle'),
            (a.textContent = JSON.stringify(c)),
            document.head.removeChild(b),
            document.head.appendChild(a)));
    }
  };
  Mo.prototype.l = function () {
    return !1;
  };
  var Vp = function (
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    l,
    k,
    m,
    n,
    p,
    r,
    u,
    w,
    D,
    K,
    F,
    R,
    T,
    Q,
    ba,
    ca,
    ma
  ) {
    Z.call(this, a, 680);
    this.slotId = b;
    this.N = c;
    this.P = d;
    this.na = e;
    this.I = f;
    this.l = W(this);
    this.C = W(this);
    this.o = jz(this);
    this.M = X(this, g);
    this.oa = X(this, h);
    lz(this, l);
    this.ba = X(this, k);
    this.F = X(this, m);
    this.aa = X(this, n);
    lz(this, F);
    this.O = X(this, p);
    this.R = Y(this, r);
    this.Aa = Y(this, u);
    this.W = X(this, w);
    this.ma = Y(this, D);
    this.bb = Y(this, K);
    lz(this, R);
    this.la = X(this, T);
    lz(this, Q);
    ma && lz(this, ma);
    this.da = Y(this, ba);
    this.ka = Y(this, ca);
  };
  _.O(Vp, Z);
  Vp.prototype.j = function () {
    var a = this,
      b = this.M.value;
    if (0 === b.kind && null == b.La) throw new Hy('invalid html');
    var c;
    b = Oo(
      this.context,
      b,
      {
        Y: document,
        slotId: this.slotId,
        N: this.N,
        P: this.P,
        na: this.na,
        size: this.aa.value,
        Gb: this.ba.value,
        Zd: this.F.value,
        ff: this.O.value,
        mf: this.R.value,
        Ae: this.Aa.value,
        isBackfill: this.W.value,
        zf: this.ma.value,
        qc: this.bb.value,
        Ic: this.la.value,
        rg: null == (c = this.da.value) ? void 0 : op(c, 14),
        nd: this.ka.value,
      },
      { tg: this.oa.value }
    );
    _.$m(this, b);
    var d = b.render();
    MF(this, this.id, this.I, 'message', function (e) {
      d.contentWindow === e.source && a.slotId.dispatchEvent(Ho, 824, e);
    });
    this.o.notify();
    this.l.G(d);
    this.C.G(b.l());
  };
  var aq = function (a, b, c, d, e) {
    Z.call(this, a, 863);
    this.l = c;
    this.yb = Number(b);
    this.o = X(this, d);
    this.C = X(this, e);
    this.F = YJ(this);
  };
  _.O(aq, Z);
  var YJ = function (a) {
    return _.jb(function (b) {
      return b.return(
        new v.Promise(function (c) {
          try {
            MF(a, a.id, a.l, 'message', function (d) {
              var e;
              'asmreq' === (null == (e = d.data) ? void 0 : e.type) &&
                dp(rD(d.data.payload), 1) === a.yb &&
                c(d);
            });
          } catch (d) {}
        })
      );
    });
  };
  aq.prototype.j = function () {
    var a = this,
      b,
      c,
      d,
      e,
      f,
      g;
    return _.jb(function (h) {
      if (1 == h.j)
        return (b = Po(a.l)), (c = a.o.value), (d = a.C.value), kb(h, a.F, 2);
      e = h.m;
      var l = a.l,
        k = Po(l);
      var m = c.getBoundingClientRect();
      var n = Ed(l) ? Ph(c, l) : { x: 0, y: 0 };
      l = n.x;
      n = n.y;
      m = new _.Cv(n, l + m.right, n + m.bottom, l);
      l = new sD();
      l = _.z(l, 1, m.top);
      l = _.z(l, 3, m.bottom);
      l = _.z(l, 2, m.left);
      m = _.z(l, 4, m.right);
      l = new tD();
      l = _.z(l, 1, a.yb);
      l = _.z(l, 2, !d);
      m = _.ch(l, 3, m);
      m = _.z(m, 4, b);
      f = _.z(m, 5, k);
      g = { type: 'asmres', payload: Zd(f) };
      e.ports[0].postMessage(g);
      h.j = 0;
    });
  };
  var Op = function (a, b, c, d, e, f, g, h, l, k, m, n, p) {
    Z.call(this, a, 699);
    this.Y = b;
    this.slotId = c;
    this.l = d;
    this.Jb = e;
    this.A = jz(this);
    this.M = Y(this, f);
    this.R = X(this, g);
    this.C = X(this, h);
    this.O = X(this, l);
    this.o = Y(this, k);
    this.W = X(this, m);
    this.F = X(this, n);
    p && lz(this, p);
  };
  _.O(Op, Z);
  Op.prototype.j = function () {
    var a = this.R.value,
      b = this.C.value;
    b.style.width = '';
    b.style.height = '';
    if ('height' !== this.M.value) {
      var c,
        d = null != (c = this.o.value) ? c : 0;
      c = this.O.value;
      var e = this.W.value,
        f = this.F.value,
        g = !1;
      switch (d) {
        case 1:
        case 2:
          g = this.context;
          var h = this.Y,
            l = this.slotId,
            k = this.l,
            m = this.Jb;
          var n = c.width,
            p = c.height,
            r = 0;
          var u = 0;
          var w = Gh(k);
          w = _.A(w);
          for (var D = w.next(); !D.done; D = w.next()) {
            var K = D.value;
            Array.isArray(K) &&
              ((D = (0, C.ra)(K[0])),
              (K = (0, C.ra)(K[1])),
              r < D && (r = D),
              u < K && (u = K));
          }
          u = [r, u];
          r = u[0] < n;
          p = u[1] < p;
          if (r || p) {
            u = n + 'px';
            w = {
              'max-height': 'none',
              'max-width': u,
              padding: '0px',
              width: u,
            };
            p && (w.height = 'auto');
            pi(b, a, w);
            b = {};
            r &&
              ((r = ni(e.width)),
              n > r && ((b.width = u), (b['max-width'] = u)));
            p && ((b.height = 'auto'), (b['max-height'] = 'none'));
            c: {
              for (F in b)
                if (Object.prototype.hasOwnProperty.call(b, F)) {
                  var F = !1;
                  break c;
                }
              F = !0;
            }
            F
              ? (b = !1)
              : ((b['padding-' + ('ltr' === e.direction ? 'left' : 'right')] =
                  '0px'),
                _.oi(a, b),
                (b = !0));
          } else b = !1;
          b: switch (
            ((u = c.width), (F = h.defaultView || h.parentWindow || _.q), d)
          ) {
            case 2:
              a = qi(a, F, u, e, m);
              break b;
            case 1:
              if ((e = a.parentElement))
                if ((m = Uh(e))) {
                  D = m.width;
                  m = ci(l, F.document);
                  n = (0, C.K)(ei(m, F));
                  p = n.position;
                  K = ni(n.width) || 0;
                  r = ei(e, F);
                  w = 'rtl' === r.direction ? 'Right' : 'Left';
                  m = w.toLowerCase();
                  F = 'absolute' === p ? 0 : ni(r['padding' + w]);
                  r = ni(r['border' + w + 'Width']);
                  u = Math.max(Math.round((D - Math.max(K, u)) / 2), 0);
                  D = {};
                  K = 0;
                  var R = sv(n);
                  R &&
                    ((K = R[4] * ('Right' === w ? -1 : 1)),
                    (w = R[3] || 1),
                    1 !== (R[0] || 1) || 1 !== w) &&
                    ((R[0] = 1),
                    (R[3] = 1),
                    (D.transform = 'matrix(' + R.join(',') + ')'));
                  w = 0;
                  switch (p) {
                    case 'fixed':
                      var T,
                        Q =
                          null != (T = Number(fi(n.getPropertyValue(m))))
                            ? T
                            : 0,
                        ba;
                      T =
                        null != (ba = e.getBoundingClientRect().left) ? ba : 0;
                      w = Q - T;
                      break;
                    case 'relative':
                      w =
                        null != (Q = Number(fi(n.getPropertyValue(m)))) ? Q : 0;
                      break;
                    case 'absolute':
                      D[m] = '0';
                  }
                  D['margin-' + m] = u - F - r - w - K + 'px';
                  _.oi(a, D);
                  a = !0;
                } else a = !1;
              else a = !1;
              break b;
            default:
              a = !1;
          }
          b || a
            ? (si(g, h, l, k, d, c.width, c.height, 'gpt_slotexp', f), (g = !0))
            : (g = !1);
          break;
        case 3:
          (d = this.context),
            (g = this.Y),
            (h = this.slotId),
            (l = this.l),
            (T = this.Jb),
            (k = c.width),
            (ba = c.height),
            (Q = ni(e.height) || 0),
            ba >= Q ||
            'none' === e.display ||
            'hidden' === e.visibility ||
            !T ||
            -12245933 === T.width ||
            a.getBoundingClientRect().bottom <= T.height
              ? (g = !1)
              : ((T = { height: ba + 'px' }),
                pi(b, a, T),
                _.oi(a, T),
                si(d, g, h, l, 3, k, ba, 'gpt_slotred', f),
                (g = !0));
      }
      !g &&
        _.H(fw) &&
        si(
          this.context,
          this.Y,
          this.slotId,
          this.l,
          0,
          c.width,
          c.height,
          'gpt_pgbrk',
          f
        );
    }
    this.A.notify();
  };
  var Sp = function (a, b) {
    Z.call(this, a, 1020);
    this.I = b;
    this.A = W(this);
  };
  _.O(Sp, Z);
  Sp.prototype.j = function () {
    var a = this.I;
    a =
      _.H(kx) &&
      void 0 !== a.credentialless &&
      (_.H(lx) || a.crossOriginIsolated);
    this.A.G(a);
  };
  var wp = function (a, b, c, d, e) {
    Z.call(this, a, 720);
    this.format = b;
    this.C = c;
    this.A = W(this);
    this.l = Y(this, d);
    this.o = Y(this, e);
  };
  _.O(wp, Z);
  wp.prototype.j = function () {
    var a = this.o.value;
    if (null == a) Zy(this.A);
    else {
      var b = Math.round(0.3 * this.C),
        c;
      (2 !== this.format && 3 !== this.format) ||
      null == (c = this.l.value) ||
      !op(c, 12, !1) ||
      0 >= b ||
      a <= b
        ? this.A.G(a)
        : this.A.G(b);
    }
  };
  var Hp = function (a, b, c) {
    Z.call(this, a, 1054);
    this.l = b;
    this.A = jz(this);
    this.o = X(this, c);
  };
  _.O(Hp, Z);
  Hp.prototype.j = function () {
    this.o.value || this.l();
    this.A.notify();
  };
  var Jp = function (a, b, c, d, e, f, g, h, l, k, m, n) {
    Z.call(this, a, 674);
    this.slotId = b;
    this.U = c;
    this.o = d;
    this.Y = f;
    this.N = g;
    this.A = W(this);
    this.F = 2 === e || 3 === e;
    this.l = X(this, h);
    this.O = X(this, l);
    this.M = Y(this, k);
    this.C = Y(this, m);
    n && lz(this, n);
  };
  _.O(Jp, Z);
  Jp.prototype.j = function () {
    var a = Mh(this.U, this.o),
      b = bi(this.slotId, this.Y) || qm(this.l.value, ki(this.slotId), a);
    this.O.value && !a && (b.style.display = 'inline-block');
    this.F
      ? AF(this.N, this.slotId, function () {
          return void _.$u(b);
        })
      : _.Qm(this, function () {
          return void _.$u(b);
        });
    a = ZJ(this);
    0 < a && (b.style.paddingTop = a + 'px');
    this.A.G(b);
  };
  var ZJ = function (a) {
    var b = a.l.value,
      c,
      d = null == (c = a.M.value) ? void 0 : c.height;
    if (b && !a.C.value && d) {
      var e;
      c = (null != (e = Lh(a.o, 23)) ? e : G(a.U, 31))
        ? Math.floor((b.offsetHeight - d) / 2)
        : 0;
    } else c = 0;
    return c;
  };
  var rp = function (a, b) {
    Z.call(this, a, 859);
    this.I = b;
    this.A = W(this);
  };
  _.O(rp, Z);
  rp.prototype.j = function () {
    this.A.G(!Ed(this.I.top));
  };
  var Mp = function (a, b, c) {
    Z.call(this, a, 698);
    this.I = b;
    this.A = W(this);
    this.l = X(this, c);
  };
  _.O(Mp, Z);
  Mp.prototype.j = function () {
    Yy(this.A, ei(this.l.value, this.I));
  };
  var Rp = function (a, b, c) {
    Z.call(this, a, 840);
    this.format = b;
    this.Y = c;
    this.A = W(this);
  };
  _.O(Rp, Z);
  Rp.prototype.j = function () {
    var a = [],
      b = this.Y;
    b = void 0 === b ? document : b;
    var c;
    null != (c = b.featurePolicy) &&
      ((E = c.features()), _.t(E, 'includes')).call(
        E,
        'attribution-reporting'
      ) &&
      a.push('attribution-reporting');
    (5 !== this.format && 4 !== this.format) || !_.H(cw) || a.push('autoplay');
    a.length ? this.A.G(a.join(';')) : this.A.G('');
  };
  var Wp = function (a, b, c, d, e) {
    Z.call(this, a, 934);
    this.I = b;
    this.slotId = c;
    lz(this, d);
    this.l = X(this, e);
  };
  _.O(Wp, Z);
  Wp.prototype.j = function () {
    var a = this;
    oF(this.slotId, Ho, function (b) {
      b = b.detail.data;
      try {
        var c = JSON.parse(b);
        if ('gpi-uoo' === c.googMsgType) {
          var d = c.userOptOut,
            e = c.clearAdsData,
            f = a.l.value,
            g = new su();
          var h = _.z(g, 1, d ? '1' : '0');
          var l = _.z(h, 2, 2147483647);
          var k = _.z(l, 3, '/');
          var m = _.z(k, 4, a.I.location.hostname);
          var n = new vz(a.I);
          yz(n, '__gpi_opt_out', m, f);
          if (d || e) zz(n, '__gads', f), zz(n, '__gpi', f);
        }
      } catch (p) {}
    });
  };
  var Gp = function (a, b, c, d, e, f) {
    Z.call(this, a, 1053);
    this.slotId = b;
    this.P = c;
    this.N = d;
    this.l = W(this);
    this.o = X(this, e);
    this.C = X(this, f);
  };
  _.O(Gp, Z);
  Gp.prototype.j = function () {
    this.C.value
      ? (Uo(this.slotId, this.N, this.P, this.o.value), this.l.G(!1))
      : this.l.G(!0);
  };
  var dq = function (a, b, c, d, e, f) {
    Z.call(this, a, 721);
    this.I = b;
    this.F = Y(this, c);
    this.o = X(this, d);
    this.l = X(this, e);
    this.C = X(this, f);
  };
  _.O(dq, Z);
  dq.prototype.j = function () {
    var a = this,
      b = this.F.value,
      c,
      d = null == b ? void 0 : null == (c = x(b, 1)) ? void 0 : c.toUpperCase(),
      e;
    b = null == b ? void 0 : null == (e = x(b, 2)) ? void 0 : e.toUpperCase();
    if (d && b) {
      e = this.o.value;
      c = this.l.value;
      var f = this.C.value,
        g = f.style.height,
        h = f.style.width,
        l = f.style.display,
        k = f.style.position,
        m = Vo(e.id + '_top', d),
        n = Vo(e.id + '_bottom', b);
      _.oi(n, { position: 'relative', top: 'calc(100vh - 48px)' });
      f.appendChild(m);
      f.appendChild(n);
      _.oi(c, {
        position: 'absolute',
        top: '24px',
        clip: 'rect(0, auto, auto, 0)',
        width: '100vw',
        height: 'calc(100vh - 48px)',
      });
      _.oi(e, { position: 'fixed', top: '0', height: '100vh' });
      var p;
      _.oi(f, {
        position: 'relative',
        display: (null == (p = this.I.screen.orientation) ? 0 : p.angle)
          ? 'none'
          : 'block',
        width: '100vw',
        height: '100vh',
      });
      MF(this, 722, this.I, 'orientationchange', function () {
        var r;
        (null == (r = a.I.screen.orientation) ? 0 : r.angle)
          ? _.oi(f, { display: 'none' })
          : _.oi(f, { display: 'block' });
      });
      _.Qm(this, function () {
        _.$u(m);
        _.$u(n);
        f.style.position = k;
        f.style.height = g;
        f.style.width = h;
        f.style.display = l;
      });
    }
  };
  var $p = function (a, b, c, d, e, f) {
    f = void 0 === f ? Xo : f;
    Z.call(this, a, 783);
    var g = this;
    this.slotId = b;
    this.Y = d;
    this.na = e;
    this.M = f;
    this.F = !1;
    this.l = null;
    this.C = this.o = -1;
    this.R = _.or(function () {
      g.na.dispatchEvent(
        'impressionViewable',
        715,
        new fJ(g.slotId, 'publisher_ads')
      );
    });
    this.W = pr(function () {
      g.na.dispatchEvent(
        'slotVisibilityChanged',
        716,
        new gJ(g.slotId, 'publisher_ads', g.C)
      );
    }, 200);
    this.O = X(this, c);
    var h = new ez();
    pF(this.slotId, vF).then(function () {
      return void h.notify();
    });
    lz(this, h);
  };
  _.O($p, Z);
  $p.prototype.j = function () {
    var a = this,
      b = this.M(
        _.ih(this.context, this.id, function (c) {
          c = _.A(c);
          for (var d = c.next(); !d.done; d = c.next())
            (a.o = 100 * d.value.intersectionRatio),
              _.t(Number, 'isFinite').call(Number, a.o) && $J(a);
        })
      );
    b.observe(this.O.value);
    MF(this, this.id, this.Y, 'visibilitychange', function () {
      $J(a);
    });
    _.Qm(this, function () {
      b.disconnect();
    });
  };
  var $J = function (a) {
      var b = !wD(a.Y);
      aK(a, 50 <= a.o && b);
      b = Math.floor(b ? a.o : 0);
      if (0 > b || 100 < b || b === a.C ? 0 : -1 !== a.C || 0 !== b)
        (a.C = b), a.W();
    },
    aK = function (a, b) {
      a.F ||
        (b
          ? null === a.l &&
            (a.l = setTimeout(function () {
              wD(a.Y) || (a.R(), (a.F = !0));
              a.l = null;
            }, 1e3))
          : null !== a.l && (clearTimeout(a.l), (a.l = null)));
    };
  var bK = P(['https://googleads.g.doubleclick.net/td/kb?kbli=', '']),
    Up = function (a, b, c) {
      Z.call(this, a, 1007);
      this.l = Y(this, b);
      c && lz(this, c);
    };
  _.O(Up, Z);
  Up.prototype.j = function () {
    var a = this.l.value;
    if (
      null != a &&
      a.length &&
      null === document.getElementById('koelBirdIGRegisterIframe')
    ) {
      var b = document.createElement('iframe');
      a = gb(bK, encodeURIComponent(a.join()));
      b.removeAttribute('srcdoc');
      if (a instanceof lg) throw new Nr('TrustedResourceUrl', 2);
      a = _.Ua(a);
      void 0 !== a && (b.src = a);
      for (
        a =
          'allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation'.split(
            ' '
          );
        0 < b.sandbox.length;

      )
        b.sandbox.remove(b.sandbox.item(0));
      for (var c = 0; c < a.length; c++)
        (b.sandbox.supports && !b.sandbox.supports(a[c])) ||
          b.sandbox.add(a[c]);
      b.id = 'koelBirdIGRegisterIframe';
      document.head.appendChild(b);
    }
  };
  var Ap = function (a, b, c) {
    Z.call(this, a, 666);
    this.o = b;
    this.l = W(this);
    this.C = Y(this, c);
  };
  _.O(Ap, Z);
  Ap.prototype.j = function () {
    var a = new Bp();
    this.C.cc() && eE(_.z(a, 2, this.C.value), 1);
    if (this.o) {
      a = [this.o, a];
      var b = new Bp();
      a = _.A(a);
      for (var c = a.next(); !c.done; c = a.next())
        (c = c.value),
          null != x(c, 1) && _.z(b, 1, x(c, 1)),
          null != x(c, 2) && _.z(b, 2, x(c, 2)),
          null != Le(c, 3) && eE(b, Le(c, 3));
      a = b;
    }
    b = this.l;
    a =
      null != x(a, 2)
        ? null != Le(a, 3) && 0 !== (0, _.jm)()
          ? (0, C.ra)(x(a, 2)) * (0, C.ra)(Le(a, 3))
          : x(a, 2)
        : null;
    Yy(b, a);
  };
  var Np = function (a, b, c, d, e, f, g) {
    f = void 0 === f ? Zo : f;
    Z.call(this, a, 666);
    this.o = f;
    this.A = jz(this);
    lz(this, b);
    g && lz(this, g);
    this.l = X(this, c);
    this.F = Y(this, d);
    this.C = Y(this, e);
  };
  _.O(Np, Z);
  Np.prototype.j = function () {
    var a = this.C.value,
      b = this.F.value,
      c = this.l.value;
    null == a || 0 > a || 0 === b || !gi(c)
      ? this.A.notify()
      : cK(this, a, b, c);
  };
  var cK = function (a, b, c, d) {
    var e = a.o(
      b,
      _.ih(a.context, 291, function (f, g) {
        f = _.A(f);
        for (var h = f.next(); !h.done; h = f.next())
          if (((h = h.value), !(0 >= h.intersectionRatio))) {
            g.unobserve(h.target);
            a.A.notify();
            break;
          }
      })
    );
    null != c &&
      setTimeout(function () {
        a.A.notify();
        e.disconnect();
      }, c);
    e.observe(d);
    _.Qm(a, function () {
      e.disconnect();
    });
  };
  var Lp = function (a, b, c, d, e, f, g) {
    Z.call(this, a, 664);
    this.slotId = b;
    this.Jb = c;
    this.N = d;
    this.A = jz(this);
    this.o = X(this, e);
    this.l = Y(this, f);
    g && lz(this, g);
  };
  _.O(Lp, Z);
  Lp.prototype.j = function () {
    var a = this,
      b,
      c = null != (b = this.l.value) ? b : 0;
    if (0 !== (0, _.jm)() || 0 < c) {
      var d = document;
      b = vD(d);
      if (wD(d) && b && (0 < GF(this.N, this.slotId) || !dK(this)) && b) {
        var e = MF(this, 324, d, b, function () {
          wD(d) || (e && e(), a.A.notify());
        });
        if (e) return;
      }
    }
    this.A.notify();
  };
  var dK = function (a) {
    var b = a.o.value;
    try {
      var c,
        d = null != (c = top) ? c : void 0;
      if (void 0 === d) return !0;
      var e = Gm(null == d ? void 0 : d.document, d).y,
        f = e + a.Jb.height;
      return b.y >= e && b.y <= f;
    } catch (g) {
      return !0;
    }
  };
  var Ip = function (a, b, c) {
    Z.call(this, a, 1055);
    this.A = jz(this);
    lz(this, c);
    this.l = X(this, b);
  };
  _.O(Ip, Z);
  Ip.prototype.j = function () {
    this.l.value && this.A.notify();
  };
  var zp = function (a, b, c, d, e) {
    Z.call(this, a, 669);
    this.U = b;
    this.V = c;
    this.A = W(this);
    this.o = Y(this, d);
    this.l = X(this, e);
  };
  _.O(zp, Z);
  zp.prototype.j = function () {
    if (De(dw)) this.A.G(!0);
    else {
      var a,
        b =
          (!(null == (a = this.o.value) || !x(a, 1)) &&
            (G(this.V, 12) || G(this.U, 13))) ||
          this.l.value;
      this.A.G(!!b);
    }
  };
  var Pp = function (a, b, c, d, e, f) {
    Z.call(this, a, 719);
    this.U = b;
    this.o = c;
    this.A = W(this);
    this.l = X(this, d);
    this.C = X(this, e);
    this.F = Y(this, f);
  };
  _.O(Pp, Z);
  Pp.prototype.j = function () {
    var a = this.l.value.kind;
    switch (a) {
      case 0:
        this.l.value.La ? (this.C.value ? eK(this) : Zy(this.A)) : Zy(this.A);
        break;
      case 1:
        eK(this);
        break;
      case 2:
        Zy(this.A);
        break;
      default:
        Va(a);
    }
  };
  var eK = function (a) {
    var b = a.F.value,
      c = new Ek();
    b = _.z(c, 3, b);
    G(Lk([b, a.U.Sa(), a.o.Sa()]), 3) ? a.A.G(VE) : Zy(a.A);
  };
  var Cp = function (a, b, c, d, e, f, g, h, l, k) {
    Z.call(this, a, 681);
    this.adUnitPath = b;
    this.ba = c;
    this.O = d;
    this.F = e;
    this.Da = W(this);
    this.M = W(this);
    this.yc = W(this);
    this.l = De(dw).split(',');
    this.o = Ee(ew);
    this.R = Y(this, f);
    this.da = Y(this, g);
    this.W = Y(this, h);
    this.C = X(this, l);
    this.aa = X(this, k);
  };
  _.O(Cp, Z);
  Cp.prototype.j = function () {
    if (this.F) fK(this);
    else {
      var a;
      if ((a = this.l.length)) {
        b: if (this.l.length) {
          if (
            this.o.length &&
            ((a = this.adUnitPath.split('/')),
            !_.t(this.o, 'includes').call(this.o, a[a.length - 1]))
          ) {
            a = !1;
            break b;
          }
          a = !0;
        } else a = !1;
        var b = a;
        a = b ? gK(this) : null;
        if (b && a) {
          b = this.aa.value;
          var c,
            d,
            e =
              null != (d = null == (c = Uh(b.parentElement)) ? void 0 : c.width)
                ? d
                : 0;
          c = 'p' === this.l[0];
          d = Number(this.l[0]);
          if (
            (c =
              'f' === this.l[0]
                ? this.O
                : d && 0 < d
                ? d
                : c
                ? Math.min(e, this.O)
                : null)
          ) {
            d = a.width;
            var f = a.height,
              g = this.l[1],
              h = Number(g);
            d =
              'ratio' === g && d
                ? Math.floor((f / d) * c)
                : h && 0 < h
                ? f * h
                : f;
            hK(
              this,
              c,
              d,
              {
                kind: 0,
                La:
                  '<html><body style="height:' +
                  (d -
                    2 +
                    'px;width:' +
                    (c -
                      2 +
                      'px;background-color:#ddd;color:#000;border:1px solid #f00;margin:0;"><p>Requested size:')) +
                  (a.width + 'x' + a.height + '</p><p>Rendered size:') +
                  (c + 'x' + d + '</p></body></html>'),
              },
              c <= e ? 1 : 2,
              b
            );
            a = !0;
          } else a = !1;
        } else a = !1;
      }
      a || fK(this);
    }
  };
  var gK = function (a) {
      a = Gh(a.ba)[0];
      return Array.isArray(a) &&
        a.every(function (b) {
          return 'number' === typeof b;
        })
        ? new _.Th(a[0], a[1])
        : null;
    },
    hK = function (a, b, c, d, e, f) {
      e = void 0 === e ? a.R.value : e;
      a.M.G(new _.Th(b, c));
      a.Da.G(d);
      Yy(a.yc, e);
      f && _.Jv(f, 'opacity', 0.5);
    },
    fK = function (a) {
      var b = a.da.value,
        c = a.W.value;
      if (a.F) hK(a, null != b ? b : 0, null != c ? c : 0, a.C.value);
      else {
        if (null == b) throw new hl("Missing 'width'.");
        if (null == c) throw new hl("Missing 'height'.");
        hK(a, b, c, a.C.value);
      }
    };
  var xp = function (a, b, c, d, e, f, g, h, l) {
    Z.call(this, a, 673);
    this.slotId = b;
    this.Gb = c;
    this.F = d;
    this.C = e;
    this.Y = f;
    this.l = g;
    this.N = h;
    this.o = l;
    this.A = W(this);
  };
  _.O(xp, Z);
  xp.prototype.j = function () {
    var a = this,
      b,
      c;
    return _.jb(function (d) {
      if (1 == d.j) {
        if (a.Gb) {
          iK(a, a.Gb);
          a.A.G(a.Gb);
          d.j = 0;
          return;
        }
        if (Kh(a.l)) {
          a.A.G(jK(a));
          d.j = 0;
          return;
        }
        return kb(d, pF(a.slotId, qF), 4);
      }
      b = d.m;
      c = b.detail;
      if (a.J) return d.return();
      iK(a, c);
      a.A.G(c);
      d.j = 0;
    });
  };
  var jK = function (a) {
      var b = _.Ad('INS');
      b.id = a.F;
      _.oi(b, { display: 'none' });
      a.Y.documentElement.appendChild(b);
      var c = function () {
        return void _.$u(b);
      };
      2 === a.l || 3 === a.l ? AF(a.N, a.slotId, c) : _.Qm(a, c);
      return b;
    },
    iK = function (a, b) {
      if (2 !== a.l && 3 !== a.l) {
        for (
          var c = _.A(_.t(Array, 'from').call(Array, b.childNodes)),
            d = c.next();
          !d.done;
          d = c.next()
        )
          (d = d.value), 1 === d.nodeType && d.id !== a.C && _.$u(d);
        a.o || (b.style.display = '');
      }
    };
  var Kp = function (a, b) {
    Z.call(this, a, 676);
    this.A = W(this);
    this.l = X(this, b);
  };
  _.O(Kp, Z);
  Kp.prototype.j = function () {
    var a = Rh(this.l.value);
    this.A.G(a);
  };
  var Qp = function (a, b, c, d, e) {
    Z.call(this, a, 807);
    this.I = b;
    this.A = jz(this);
    this.l = Y(this, c);
    this.o = X(this, d);
    e && lz(this, e);
  };
  _.O(Qp, Z);
  Qp.prototype.j = function () {
    var a = this.l.value;
    if (a && !this.o.value) {
      var b = Bv(this.I);
      iF(new hF(b, a)) || this.T(new hl('Cannot create top window frame'));
    }
    this.A.notify();
  };
  var Dp = function (a, b, c) {
    Z.call(this, a, 881);
    this.Ya = b;
    this.A = W(this);
    this.l = Y(this, c);
  };
  _.O(Dp, Z);
  Dp.prototype.j = function () {
    if (_.H(fx) || !this.l.value) Zy(this.A);
    else {
      for (
        var a = this.l.value,
          b = [],
          c = _.A(((E = CH(this.Ya)), _.t(E, 'values')).call(E)),
          d = c.next();
        !d.done;
        d = c.next()
      ) {
        d = d.value;
        try {
          b.push(JSON.parse(d));
        } catch (e) {
          mh(this.context, 1023, e);
        }
      }
      0 === b.length
        ? this.A.G(gp({ Ge: a, Rd: _.H(gx) }))
        : this.A.G(gp({ Ge: a, Rd: _.H(gx), Xe: b }));
    }
  };
  Dp.prototype.m = function () {
    Zy(this.A);
  };
  var hp = navigator,
    ip = /(\$\{GDPR})/gi,
    jp = /(\$\{GDPR_CONSENT_[0-9]+\})/gi,
    kp = /(\$\{ADDTL_CONSENT})/gi,
    lp = /(\$\{AD_WIDTH})/gi,
    mp = /(\$\{AD_HEIGHT})/gi;
  var kK = function () {
      var a = this;
      this.promise = new v.Promise(function (b, c) {
        a.reject = c;
        a.resolve = b;
      });
    },
    lK = function () {
      this.auctionSignals = new kK();
      this.topLevelSellerSignals = new kK();
      this.j = new kK();
      this.perBuyerSignals = new kK();
      this.perBuyerTimeouts = new kK();
    },
    mK = function (a, b, c) {
      this.m = a;
      this.D = b;
      this.j = c;
    };
  var nK = navigator,
    Ep = function (a, b, c, d, e, f, g, h, l, k) {
      Z.call(this, a, 882);
      this.N = b;
      this.X = c;
      this.da = d;
      this.R = k;
      this.Da = W(this);
      this.l = W(this);
      this.o = W(this);
      this.M = Y(this, e);
      this.O = Y(this, f);
      this.W = X(this, g);
      this.ba = X(this, h);
      this.aa = X(this, l);
    };
  _.O(Ep, Z);
  Ep.prototype.j = function () {
    var a = this,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      l,
      k,
      m,
      n,
      p,
      r,
      u;
    return _.jb(function (w) {
      switch (w.j) {
        case 1:
          if (oK(a)) return pK(a), w.return();
          b = (0, C.K)(a.M.value);
          c = b.getWidth();
          d = b.getHeight();
          if (!c || !d) return pK(a), w.return();
          e = go(b, ep, 5);
          a.C = e.getEscapedQemQueryId();
          a.F = ef(e, 6);
          f = op(e, 9);
          if ((g = op(e, 10)))
            if ((pK(a), op(e, 17))) return pp(0, 0, e), w.return();
          ti(
            'pre_run_ad_auction_ping',
            function (D) {
              Ci(D, a.context);
              var K;
              L(D, 'winner_qid', null != (K = a.C) ? K : '');
              var F;
              L(D, 'xfpQid', null != (F = a.F) ? F : '');
              L(D, 'publisher_tag', 'gpt');
            },
            1
          );
          h = performance.now();
          l = ee(b, 8) || 1e3;
          return kb(w, qK(a, (0, C.K)(a.O.value), e, l, h), 2);
        case 2:
          k = w.m;
          m = Math.round(performance.now() - h);
          n = 3 === k;
          p = 2 === k;
          r = 1 === k;
          u = 'string' === typeof k;
          ti(
            'run_ad_auction_stats',
            function (D) {
              Ci(D, a.context);
              L(D, 'duration_ms', m);
              L(D, 'applied_timeout_ms', l);
              L(D, 'timed_out', p ? 1 : 0);
              L(D, 'error', n ? 1 : 0);
              L(D, 'auction_skipped', r ? 1 : 0);
              L(D, 'auction_winner', u ? 1 : 0);
              L(D, 'thread_release_only', op(e, 15) ? 1 : 0);
              var K;
              L(D, 'winner_qid', null != (K = a.C) ? K : '');
              var F;
              L(D, 'xfpQid', null != (F = a.F) ? F : '');
              L(D, 'publisher_tag', 'gpt');
              _.H(hx) && L(D, 'parallel', '1');
            },
            1
          );
          if (!u) return pp(m, p ? l : 0, e), g || pK(a), w.return();
          if (g) return kb(w, nK.deprecatedURNToURL(k, !0), 7);
          if (!f) {
            w.j = 4;
            break;
          }
          return kb(w, nK.deprecatedURNToURL(k, !0), 6);
        case 6:
          return pK(a), w.return();
        case 7:
          return w.return();
        case 4:
          return _.H(Fx)
            ? kb(
                w,
                np(k, {
                  gdprApplies: Kk(a.X, 3) ? (G(a.X, 3) ? '1' : '0') : null,
                  ie: x(a.X, 2),
                  Vd: x(a.X, 4),
                  Oe: b.getWidth() ? b.getWidth().toString() : null,
                  Le: b.getHeight() ? b.getHeight().toString() : null,
                }),
                9
              )
            : kb(
                w,
                np(k, {
                  gdprApplies: Kk(a.X, 3) ? (G(a.X, 3) ? '1' : '0') : null,
                  ie: x(a.X, 2),
                  Vd: x(a.X, 4),
                }),
                9
              );
        case 9:
          (a.aa.value.style.display = ''),
            a.Da.G({ kind: 2, Td: k }),
            a.l.G(new _.Th(c, d)),
            a.o.G(!1),
            (w.j = 0);
      }
    });
  };
  Ep.prototype.m = function () {
    pK(this);
  };
  var qK = function (a, b, c, d, e) {
      var f = ee(c, 14) || -1;
      if (0 < f && a.N.D >= f) return 1;
      f = ee(c, 13) || -1;
      if (0 < f && a.N.J >= f) return 1;
      ++a.N.D;
      ++a.N.J;
      b.signal = AbortSignal.timeout(d);
      b = _.H(hx)
        ? rK(a, b, d, e, (0, C.K)(a.R), op(c, 15))
        : sK(a, b, d, e, op(c, 15));
      --a.N.D;
      return b;
    },
    sK = function (a, b, c, d, e) {
      if (e) return qp();
      var f;
      return null == (f = nK.runAdAuction)
        ? void 0
        : f
            .call(nK, b)
            .then(function (g) {
              tK(a, g, c, d);
              return g;
            })
            .catch(function (g) {
              return g instanceof DOMException && 'TimeoutError' === g.name
                ? 2
                : 3;
            });
    },
    rK = function (a, b, c, d, e, f) {
      if (f) return qp();
      $o(b, e.D);
      setTimeout(function () {
        e.j.abort(new DOMException('runAdAuction', 'TimeoutError'));
      }, c);
      return e.m.then(function (g) {
        (null !== g && 'string' !== typeof g) || tK(a, g, c, d);
        return g;
      });
    },
    tK = function (a, b, c, d) {
      ti(
        'run_ad_auction_complete',
        function (e) {
          Ci(e, a.context);
          L(e, 'duration_ms', Math.round(performance.now() - d));
          L(e, 'applied_timeout_ms', c);
          L(e, 'auction_has_winner', !!b);
          a.C && L(e, 'winner_qid', a.C);
          a.F && L(e, 'xfpQid', a.F);
        },
        1
      );
    },
    oK = function (a) {
      var b = !!nK.runAdAuction && Xf('run-ad-auction', document);
      return _.H(fx) || !b || !a.M.value || !a.O.value || (_.H(hx) && !a.R);
    },
    pK = function (a) {
      a.o.G(a.da);
      a.Da.G(a.W.value);
      a.l.G(a.ba.value);
    };
  var uK = function (a, b) {
      this.context = a;
      this.N = b;
    },
    vK = function (a, b, c, d, e, f, g, h, l, k, m, n, p, r, u, w) {
      var D = document,
        K = window;
      e || f || _.H(Fp) || KF(a.N, d);
      var F = fq(
        a.context,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        l,
        k,
        D,
        m,
        n,
        p,
        r,
        u,
        function () {
          KF(a.N, d);
          JF(a.N, d, F);
        },
        w
      );
      f || _.H(Fp) || JF(a.N, d, F);
      _.Qm(d, function () {
        KF(a.N, d);
      });
      K.top !== K &&
        K.addEventListener('pagehide', function (R) {
          R.persisted || KF(a.N, d);
        });
      Gf(F);
    };
  var wK = function (a, b, c) {
    Z.call(this, a, 944);
    this.I = b;
    this.l = new vz(this.I);
    this.o = X(this, c);
  };
  _.O(wK, Z);
  wK.prototype.j = function () {
    var a = this.o.value;
    if (xz(this.l, a)) {
      var b = wz(this.l, '__gpi_opt_out', a);
      if (b) {
        var c = new su();
        b = _.z(c, 1, b);
        b = _.z(b, 2, 2147483647);
        b = _.z(b, 3, '/');
        b = _.z(b, 4, this.I.location.hostname);
        yz(this.l, '__gpi_opt_out', b, a);
      }
    }
  };
  var xK = function (a, b, c, d) {
    d = void 0 === d ? iq : d;
    Z.call(this, a, 883);
    this.C = b;
    this.F = d;
    this.l = jz(this);
    this.o = X(this, c);
  };
  _.O(xK, Z);
  xK.prototype.j = function () {
    !G(this.o.value, 5) || _.H(Gw)
      ? this.l.notify()
      : (_.H(Fw) || fD(this.C),
        this.F()
          ? fz(
              this.l,
              new v.Promise(function (a) {
                return void gD(a);
              })
            )
          : (gD(null), this.l.notify()));
  };
  var yK = function (a, b, c, d, e) {
    Z.call(this, a, 884);
    this.va = b;
    this.l = c;
    this.o = W(this);
    this.F = Y(this, d);
    this.C = X(this, e);
  };
  _.O(yK, Z);
  yK.prototype.j = function () {
    this.l.storage = this.F.value;
    mH(this.l, wz(this.va, '__gads', this.C.value));
    Ae(20);
    Ae(2);
    this.o.G(_.xe(ye).j());
  };
  var zK = function (a, b, c) {
    Z.call(this, a, 873);
    this.I = b;
    this.l = X(this, c);
  };
  _.O(zK, Z);
  zK.prototype.j = function () {
    var a = this.context,
      b = this.l.value,
      c = this.I;
    !Tj()._pubconsole_disable_ &&
      (b = qe('google_pubconsole', b, c)) &&
      ((b = b.split('|')), ('1' !== b[0] && '0' !== b[0]) || Wj(a, c));
  };
  var AK = function (a, b, c, d) {
    Z.call(this, a, 1058);
    this.X = b;
    this.l = Y(this, c);
    lz(this, d);
  };
  _.O(AK, Z);
  AK.prototype.j = function () {
    if (this.l.value && G(this.X, 5)) {
      var a = this.l.value;
      a({ message: 'goog:spam:client_age', pvsid: this.context.pvsid });
    }
  };
  var BK = function (a, b, c) {
    Z.call(this, a, 798);
    this.A = W(this);
    this.l = Y(this, b);
    this.o = X(this, c);
  };
  _.O(BK, Z);
  BK.prototype.j = function () {
    var a = this,
      b = new v.Map();
    if (this.l.value) {
      var c = this.l.value,
        d = c.ga.Ba,
        e = c.Qb,
        f = e.od;
      e = e.xc;
      c = _.A(_.t(c.ca.Z, 'entries').call(c.ca.Z));
      for (var g = c.next(); !g.done; g = c.next()) {
        var h = _.A(g.value);
        g = h.next().value;
        h = h.next().value;
        var l = void 0,
          k = _.H(gw) ? (null == (l = e) ? void 0 : l.get(h)) : f[g];
        b.set(
          h,
          d
            ? CK(this, h, k)
            : function () {
                return a.o.value;
              }
        );
      }
    }
    this.A.G(b);
  };
  var CK = function (a, b, c) {
    return di(function () {
      var d = _.t(Object, 'assign').call(Object, {}, a.l.value);
      d.ca.Dd = !0;
      d.ca.Z = [b];
      d.Qb.od = c ? [c] : [];
      c && ((d.Qb.xc = new v.Map()), d.Qb.xc.set(b, c));
      return um(fI(new dI(d))).url;
    });
  };
  var DK = function (a, b, c, d, e, f) {
    f = void 0 === f ? jq : f;
    Z.call(this, a, 886);
    this.Z = b;
    this.N = c;
    this.l = d;
    this.Y = e;
    this.o = f;
    this.A = jz(this);
  };
  _.O(DK, Z);
  DK.prototype.j = function () {
    var a = this,
      b,
      c;
    return _.jb(function (d) {
      if (1 == d.j)
        return (
          3 !== uD(a.Y)
            ? ((d.j = 2), (d = void 0))
            : (d = kb(
                d,
                new v.Promise(function (e) {
                  return void yD(e, a.Y);
                }),
                2
              )),
          d
        );
      if (4 != d.j)
        return (
          (b = a.l ? Yo(a.l) : null),
          null == b ||
          (c = a.Z.some(function (e) {
            return !gi(ci(e));
          }))
            ? (a.A.notify(), d.return())
            : kb(d, EK(a, b), 4)
        );
      a.A.notify();
      d.j = 0;
    });
  };
  var EK = function (a, b) {
    return new v.Promise(function (c) {
      var d = a.o(function (h, l) {
        h.some(function (k) {
          return 0 < k.intersectionRatio;
        }) && (l.disconnect(), c());
      }, b + '%');
      _.Qm(a, function () {
        return void d.disconnect();
      });
      for (
        var e = {}, f = _.A(a.Z), g = f.next();
        !g.done;
        e = { Ob: e.Ob }, g = f.next()
      ) {
        g = g.value;
        e.Ob = ci(g);
        if (!e.Ob) break;
        d.observe(e.Ob);
        BF(
          a.N,
          g,
          (function (h) {
            return function () {
              return void d.unobserve(h.Ob);
            };
          })(e)
        );
      }
    });
  };
  var FK = function (a, b, c, d, e, f, g, h, l, k, m, n, p, r) {
    Z.call(this, a, 866);
    this.F = b;
    this.l = c;
    this.C = d;
    this.kc = e;
    this.Sb = f;
    this.X = g;
    this.Y = h;
    this.A = jz(this);
    this.o = X(this, l);
    this.O = Y(this, k);
    this.R = X(this, m);
    this.W = X(this, n);
    lz(this, p);
    this.M = X(this, r);
  };
  _.O(FK, Z);
  FK.prototype.j = function () {
    var a = this,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      l,
      k,
      m,
      n,
      p,
      r;
    return _.jb(function (u) {
      switch (u.j) {
        case 1:
          b = a.R.value;
          if (!b) return a.A.notify(), u.return();
          c = pb(a.W.value, { uuid: a.Sb });
          d = document.createElement('script');
          e = {
            source: b,
            credentials: a.M.value ? 'include' : 'omit',
            resources: [c.toString()],
          };
          d.setAttribute('type', 'webbundle');
          Ya(d, new Xa(JSON.stringify(e).replace(/</g, '\\u003C'), Mn));
          a.Y.head.appendChild(d);
          a.A.notify();
          u.D = 2;
          return kb(u, GK(c), 4);
        case 4:
          f = u.m;
          mb(u, 3);
          break;
        case 2:
          g = nb(u);
          if (g instanceof Iy) return a.l(g), u.return();
          throw g;
        case 3:
          h = f;
          l = h.Ne;
          k = h.Of;
          if (l.length !== k.length)
            return (
              a.l(
                new Hy(
                  'Received ' +
                    l.length +
                    ' ad URLs but ' +
                    k.length +
                    ' metadatas'
                )
              ),
              u.return()
            );
          e.resources = l.filter(function (w) {
            return w;
          });
          e.resources.length
            ? ((m = _.Ad('SCRIPT')),
              m.setAttribute('type', 'webbundle'),
              Ya(m, new Xa(JSON.stringify(e).replace(/</g, '\\u003C'), Mn)),
              a.Y.head.removeChild(d),
              a.Y.head.appendChild(m))
            : a.Y.head.removeChild(d);
          for (n = 0; n < l.length; n++)
            (p = l[n]),
              (r = k[n]),
              a.F(n, r, { kind: 1, url: p }, a.o.value, a.X, a.O.value);
          a.C(l.length - 1, a.o.value, a.X);
          u.j = 0;
      }
    });
  };
  var GK = function (a) {
    var b, c, d;
    return _.jb(function (e) {
      if (1 == e.j)
        return kb(
          e,
          fetch(a.toString()).catch(function () {
            throw new Iy('Failed to fetch bundle index.');
          }),
          2
        );
      if (3 != e.j) return (b = e.m), kb(e, b.text(), 3);
      c = e.m;
      d = Fu(c);
      return e.return({ Ne: tl(d, 1), Of: tl(d, 2) });
    });
  };
  var HK = function (a, b, c, d, e, f, g) {
    Z.call(this, a, 810);
    this.C = b;
    this.Ba = c;
    this.P = d;
    this.o = e;
    this.I = f;
    this.X = g;
    this.l = W(this);
  };
  _.O(HK, Z);
  HK.prototype.j = function () {
    var a = this,
      b = this.C;
    !this.Ba && 1 < this.C.length && (b = [b[0]]);
    b = b.filter(function (c) {
      if (c.J) return !1;
      var d = a.P.V[c.getDomId()],
        e;
      if (
        (e = !(
          Nm(cm(d)) && ((E = Ee(Pw)), _.t(E, 'includes')).call(E, String(cm(d)))
        ))
      )
        Zl(a.I) && 4 === cm(d)
          ? (N(
              a.o,
              HG(
                'googletag.enums.OutOfPageFormat.REWARDED',
                String(c.getAdUnitPath())
              )
            ),
            (e = !0))
          : (e = !1),
          (e = !e);
      return e && !fm(a.context, a.o, c, d, a.I, a.X);
    });
    30 < b.length &&
      (N(this.o, DG('30', String(b.length), String(b.length - 30))),
      (b = b.slice(0, 30)));
    this.l.G(b);
  };
  var IK = function (a, b, c) {
    Z.call(this, a, 919);
    this.l = b;
    this.X = c;
    this.A = W(this);
  };
  _.O(IK, Z);
  IK.prototype.j = function () {
    var a,
      b = !(null == (a = this.l) ? 0 : G(a, 9)) && !!G(this.X, 5);
    this.A.G(b);
  };
  var JK = function (a, b, c, d, e, f) {
    Z.call(this, a, 935);
    this.N = b;
    this.P = c;
    this.Y = d;
    this.A = jz(this);
    this.l = X(this, e);
    lz(this, f);
  };
  _.O(JK, Z);
  JK.prototype.j = function () {
    var a = this.P,
      b = a.U;
    a = a.V;
    for (var c = _.A(this.l.value), d = c.next(); !d.done; d = c.next()) {
      d = d.value;
      var e = a[d.getDomId()],
        f = this.Y;
      Lm(e, b) && !this.N.pb(d) && Mm(d, f, e, b);
    }
    this.A.notify();
  };
  var KK = function (a, b, c, d, e, f) {
    f = void 0 === f ? Ri : f;
    Z.call(this, a, 939);
    this.o = b;
    this.I = c;
    this.X = d;
    this.l = f;
    lz(this, e);
  };
  _.O(KK, Z);
  KK.prototype.j = function () {
    var a = this.l,
      b = this.I,
      c = new so();
    var d = new ro();
    d = _.y(d, 1, String(this.o), '');
    c = _.ch(c, 5, d);
    c = _.y(c, 4, 1, 0);
    c = _.y(c, 2, 2, 0);
    c = _.y(c, 3, this.context.hb || this.context.Ga, '');
    c = _.y(c, 6, G(this.X, 5), !1);
    a.call(this, b, c);
  };
  var LK = navigator,
    MK = function (a, b, c, d) {
      Z.call(this, a, 1089);
      this.l = b;
      this.X = c;
      this.A = W(this);
      this.o = X(this, d);
    };
  _.O(MK, Z);
  MK.prototype.j = function () {
    if (
      !_.H(fx) &&
      _.H(hx) &&
      'runAdAuction' in navigator &&
      Xf('run-ad-auction', document) &&
      (!G(this.X, 5) || G(this.X, 9)
        ? 0
        : this.l
        ? !(
            G(this.l, 8) ||
            (_.H(Vw) && G(this.l, 13)) ||
            G(this.l, 1) ||
            1 === de(this.l, 6, 2) ||
            1 === x(this.l, 5) ||
            G(this.l, 9)
          )
        : 1)
    ) {
      for (
        var a = {}, b = _.A(this.o.value), c = b.next();
        !c.done;
        c = b.next()
      )
        a[c.value.getId()] = NK();
      this.A.G(a);
    } else Zy(this.A);
  };
  var NK = function () {
    var a = new lK(),
      b = new AbortController(),
      c = LK.runAdAuction({
        seller: 'https://pubads.g.doubleclick.net',
        decisionLogicUrl: 'https://pubads.g.doubleclick.net/td/sjs',
        interestGroupBuyers: [],
        auctionSignals: {},
        sellerExperimentGroupId: 0,
        sellerSignals: a.topLevelSellerSignals.promise,
        sellerTimeout: 50,
        signal: b.signal,
        perBuyerExperimentGroupIds: {},
        perBuyerSignals: {},
        perBuyerTimeouts: {},
        componentAuctions: [
          {
            seller: 'https://pubads.g.doubleclick.net',
            decisionLogicUrl: 'https://pubads.g.doubleclick.net/td/sjs',
            trustedScoringSignalsUrl: 'https://pubads.g.doubleclick.net/td/sts',
            interestGroupBuyers: [
              'https://googleads.g.doubleclick.net',
              'https://td.doubleclick.net',
            ],
            sellerExperimentGroupId: 0,
            auctionSignals: a.auctionSignals.promise,
            sellerSignals: a.j.promise,
            sellerTimeout: 50,
            perBuyerExperimentGroupIds: {},
            perBuyerSignals: a.perBuyerSignals.promise,
            perBuyerTimeouts: a.perBuyerTimeouts.promise,
          },
        ],
      }).catch(function (d) {
        return d instanceof DOMException && 'TimeoutError' === d.name ? 2 : 3;
      });
    return new mK(c, a, b);
  };
  var OK = function (a, b, c, d, e) {
    Z.call(this, a, 905);
    this.P = b;
    this.l = c;
    this.A = jz(this);
    this.o = X(this, d);
    lz(this, e);
  };
  _.O(OK, Z);
  OK.prototype.j = function () {
    for (var a = _.A(this.o.value), b = a.next(); !b.done; b = a.next()) {
      var c = void 0;
      switch (null == (c = this.P.V[b.value.getDomId()]) ? void 0 : cm(c)) {
        case 2:
        case 3:
        case 5:
          this.l.load(_.HJ);
          return;
      }
    }
    this.A.notify();
  };
  var PK = function (a, b, c, d) {
    Z.call(this, a, 833);
    this.l = b;
    this.I = c;
    this.A = jz(this);
    lz(this, d);
  };
  _.O(PK, Z);
  PK.prototype.j = function () {
    if (!_.H(Zw)) {
      var a = this.l,
        b = this.I,
        c = $h();
      c = { version: nH ? nH : (nH = zk()), nc: c, sg: _.H($w) };
      c = XE.Hf(c);
      var d = EE(b);
      c = d ? Jd(c, new v.Map([['n', String(d)]])) : c;
      d = Ee(Bk);
      for (var e = new v.Map(), f = 0; f < d.length; f += 2)
        e.set(d[f], d[f + 1]);
      c = Jd(c, e);
      var g;
      a.resources[c.toString()] ||
        (null == (g = Tj()) ? 0 : g.fifWin) ||
        ((a.resources[c.toString()] = 1),
        (b = b.document),
        (a = _.Ad('IFRAME')),
        (a.src = Za(c).toString()),
        (a.style.visibility = 'hidden'),
        (a.style.display = 'none'),
        (b = b.getElementsByTagName('script')),
        b.length &&
          ((b = b[b.length - 1]),
          b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)));
    }
    this.A.notify();
  };
  var QK = function (a, b, c, d) {
    Z.call(this, a, 928);
    this.requestId = b;
    this.A = jz(this);
    this.l = X(this, c);
    lz(this, d);
  };
  _.O(QK, Z);
  QK.prototype.j = function () {
    var a = this.context,
      b = this.requestId,
      c = this.l.value.length;
    if (a.mc) {
      var d = a.vb;
      a = dh(a);
      var e = new Rv();
      b = _.y(e, 2, b, 0);
      c = _.y(b, 1, c, 0);
      c = fh(a, 7, gh, c);
      Nd(d, c);
    }
    this.A.notify();
  };
  var RK = function (a, b, c, d) {
    Z.call(this, a, 867);
    this.na = b;
    this.P = c;
    this.A = jz(this);
    this.l = X(this, d);
  };
  _.O(RK, Z);
  RK.prototype.j = function () {
    for (var a = _.A(this.l.value), b = a.next(); !b.done; b = a.next()) {
      var c = _.A(b.value);
      b = c.next().value;
      c = c.next().value;
      var d = x(this.P.V[b.getDomId()], 20);
      b.dispatchEvent(sF, 808, { Ye: c, gg: d });
      this.na.dispatchEvent('slotRequested', 705, new jJ(b, 'publisher_ads'));
    }
    this.A.notify();
  };
  var SK = function (
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    l,
    k,
    m,
    n,
    p,
    r,
    u,
    w,
    D,
    K,
    F,
    R,
    T,
    Q,
    ba,
    ca,
    ma,
    Ga,
    Na,
    Ca,
    ua,
    Oa,
    Ia
  ) {
    Z.call(this, a, 785, _.Ce(cx));
    this.Ba = b;
    this.N = c;
    this.va = d;
    this.P = e;
    this.kc = f;
    this.kb = g;
    this.Ib = h;
    this.Hb = l;
    this.vd = k;
    this.Sb = m;
    this.xb = n;
    this.X = p;
    this.isSecureContext = r;
    this.Ua = u;
    this.I = w;
    this.l = W(this);
    this.o = W(this);
    this.O = W(this);
    lz(this, Q);
    this.ka = kz(this, D);
    this.F = kz(this, K);
    this.M = X(this, F);
    this.W = X(this, R);
    this.C = kz(this, T);
    lz(this, Q);
    lz(this, ba);
    ca && (this.ma = X(this, ca));
    this.R = new dz(ma);
    Ga && (this.la = Y(this, Ga));
    this.ba = X(this, Na);
    Ca && lz(this, Ca);
    this.da = X(this, ua);
    Oa && (this.oa = kz(this, Oa));
    this.aa = Y(this, Ia);
  };
  _.O(SK, Z);
  SK.prototype.j = function () {
    if (this.M.value.length) {
      var a = !_.H(Gw);
      if (a) {
        vg();
        var b = xg[1];
      } else b = '';
      if (a) {
        vg();
        var c = xg[4];
      } else c = '';
      a ? (vg(), (a = xg[6])) : (a = '');
      var d,
        e,
        f,
        g =
          null != (f = null == (d = this.C) ? void 0 : d.value)
            ? f
            : null !== (null == (e = this.C) ? void 0 : e.value) || this.C.wb()
            ? null
            : 1;
      this.F.value && (this.N.Ec = this.F.value);
      var h, l, k, m, n, p;
      d = {
        ga: {
          I: this.I,
          context: this.context,
          N: this.N,
          va: this.va,
          X: this.X,
          Ba: this.Ba,
          vd: this.vd,
          isSecureContext: this.isSecureContext,
          wg: null == (h = this.oa) ? void 0 : h.value,
          Ua: this.Ua,
        },
        ca: { Z: this.M.value, P: this.P, kb: this.kb, Dd: !1 },
        yg: { Ib: this.Ib, Hb: this.Hb },
        Rf: { Pe: b, If: c, Zf: a },
        Uf: { rf: null != (m = this.ka.value) ? m : '0' },
        Je: { kc: this.kc, Sb: this.Sb },
        Qb: { od: this.W.value, xc: this.aa.value },
        ng: { og: g },
        jg: {
          Sf:
            null != (n = null == (l = this.ma) ? void 0 : l.value)
              ? n
              : new v.Map(),
          Wf: this.R.value,
          gf: this.ba.value,
        },
        Xf: {
          vf: null != (p = null == (k = this.la) ? void 0 : k.value) ? p : null,
          pf: this.da.value,
        },
      };
      this.o.G(d);
      h = new dI(d);
      l = um(fI(h));
      k = l.url;
      Gy(this.xb, (9).toString(), 9, l.Yd);
      this.l.G(k);
      this.O.G(
        eI(h)
          ? lr('https://pagead2.googlesyndication.com/gampad/ads/%{uuid}')
          : lr('https://securepubads.g.doubleclick.net/gampad/ads/%{uuid}')
      );
    } else this.l.G(''), Zy(this.o);
  };
  var TK = function (a, b, c, d, e, f) {
    Z.call(this, a, 878);
    this.l = b;
    this.Y = c;
    this.P = d;
    this.I = e;
    this.A = jz(this);
    lz(this, f);
  };
  _.O(TK, Z);
  TK.prototype.j = function () {
    for (var a = _.A(this.l), b = a.next(); !b.done; b = a.next()) {
      b = b.value;
      var c = ci(b, this.Y);
      if (!bi(b, this.Y) && c) {
        a: {
          var d = c;
          var e = this.P.V[b.getDomId()],
            f = 0,
            g = 0;
          e = _.A(Gh(e));
          for (var h = e.next(); !h.done; h = e.next())
            if (((h = h.value), Array.isArray(h))) {
              var l = _.A(h);
              h = l.next().value;
              l = l.next().value;
              if (
                !(
                  'number' !== typeof h ||
                  'number' !== typeof l ||
                  1 >= h ||
                  1 >= l ||
                  ((f = f || h),
                  (g = Math.min(g || Infinity, l)),
                  rm(ei(d, this.I)) ||
                    !d.parentElement ||
                    rm(ei(d.parentElement, this.I)))
                )
              ) {
                d = [f, 0];
                break a;
              }
            }
          d = f || g ? [f, g] : null;
        }
        g = this.P;
        f = g.U;
        g = g.V[b.getDomId()];
        qm(c, ki(b), Mh(f, g), d);
      }
    }
    this.A.notify();
  };
  var UK = function (a, b, c) {
    Z.call(this, a, 1051);
    this.o = b;
    this.l = Y(this, c);
  };
  _.O(UK, Z);
  UK.prototype.j = function () {
    var a = this;
    if (this.l.value) {
      var b = Sf(this.l.value, function (c, d) {
        mh(a.context, c, d);
        var e, f;
        null == (e = a.o) || null == (f = e.error) || f.call(e, d);
      });
      _.H(px) && _.$m(this, b);
    }
  };
  var VK = function (a, b, c, d, e, f) {
      this.B = a;
      this.l = b;
      this.J = c;
      this.Z = d;
      this.X = e;
      this.H = f;
      this.D = '';
      this.m = -1;
      this.state = 1;
      this.j = '';
    },
    XK = function (a, b) {
      if (b)
        if (1 !== a.state && 2 !== a.state)
          WK(a, new Hy('state err: (' + ([a.state, a.j.length].join() + ')')));
        else {
          a.j && (b = a.j + b);
          var c = 0;
          do {
            var d = b.indexOf('\n', c);
            var e = -1 !== d;
            if (!e) break;
            var f = a;
            c = b.substr(c, d - c);
            if (1 === f.state) (f.D = c), ++f.m, (f.state = 2);
            else {
              try {
                f.B(f.m, f.D, { kind: 0, La: yv(c) }, f.Z, f.X, f.H),
                  (f.D = '');
              } catch (g) {}
              f.state = 1;
            }
            c = d + 1;
          } while (e && c < b.length);
          a.j = b.substr(c);
        }
    },
    WK = function (a, b) {
      a.state = 4;
      try {
        a.l(b);
      } catch (c) {}
    },
    YK = function (a) {
      1 !== a.state || a.j
        ? WK(a, new Hy('state err (' + ([a.state, a.j.length].join() + ')')))
        : ((a.state = 3), a.J(a.m, a.Z, a.X));
    };
  var ZK = function (a, b, c, d, e, f, g, h, l, k, m) {
    Z.call(this, a, 788);
    this.O = b;
    this.M = c;
    this.F = d;
    this.X = e;
    this.A = jz(this);
    this.C = 0;
    this.o = !1;
    this.l = null != m ? m : new XMLHttpRequest();
    this.W = X(this, f);
    this.aa = Y(this, g);
    this.ba = X(this, h);
    lz(this, l);
    this.R = X(this, k);
  };
  _.O(ZK, Z);
  ZK.prototype.j = function () {
    var a = this,
      b = this.ba.value;
    if (b) {
      var c = new VK(
        this.O,
        this.M,
        this.F,
        this.W.value,
        this.X,
        this.aa.value
      );
      this.l.open('GET', b);
      this.l.withCredentials = this.R.value;
      this.l.onreadystatechange = function () {
        $K(a, c, !1);
      };
      this.l.onload = function () {
        $K(a, c, !0);
      };
      this.l.onerror = function () {
        WK(c, new Iy('XHR error'));
      };
      this.l.send();
    }
    this.A.notify();
  };
  var $K = function (a, b, c) {
    try {
      if (3 === a.l.readyState || 4 === a.l.readyState)
        if (300 <= a.l.status)
          a.o || (WK(b, new Iy('xhr_err-' + a.l.status)), (a.o = !0));
        else {
          var d = a.l.responseText.substr(a.C);
          d && XK(b, d);
          a.C = a.l.responseText.length;
          c && 4 === a.l.readyState && YK(b);
        }
    } catch (e) {
      WK(b, e);
    }
  };
  var aL = function (a, b, c, d, e, f, g, h, l, k) {
    Z.call(this, a, 1078);
    this.C = b;
    this.o = c;
    this.l = d;
    this.X = e;
    this.A = jz(this);
    this.M = X(this, f);
    this.O = Y(this, g);
    this.R = X(this, h);
    lz(this, l);
    this.F = X(this, k);
  };
  _.O(aL, Z);
  aL.prototype.j = function () {
    var a = this.R.value;
    a && bL(this, a);
    this.A.notify();
  };
  var bL = function (a, b) {
    var c, d, e, f, g, h, l, k, m, n, p, r, u, w;
    _.jb(function (D) {
      switch (D.j) {
        case 1:
          return (
            (c = new VK(a.C, a.o, a.l, a.M.value, a.X, a.O.value)),
            (e = a.F.value ? 'include' : 'same-origin'),
            (D.D = 2),
            kb(D, fetch(b, { credentials: e }), 4)
          );
        case 4:
          d = D.m;
          mb(D, 3);
          break;
        case 2:
          (f = nb(D)),
            WK(
              c,
              new Iy(
                'fetch error: ' + (f instanceof Error ? f.message : void 0)
              )
            );
        case 3:
          if (!d) return D.return();
          if (300 <= d.status)
            return WK(c, new Iy('fetch_status-' + d.status)), D.return();
          h = null == (g = d.body) ? void 0 : g.getReader();
          if (!h) return D.return();
          l = new TextDecoder();
          k = !1;
        case 5:
          if (k) {
            D.j = 6;
            break;
          }
          p = void 0;
          D.D = 7;
          return kb(D, h.read(), 9);
        case 9:
          r = D.m;
          p = r.value;
          k = r.done;
          mb(D, 8);
          break;
        case 7:
          (n = u = nb(D)), (k = !0);
        case 8:
          m && ((w = l.decode(m, { stream: !k })), XK(c, w));
          m = p;
          D.j = 5;
          break;
        case 6:
          n &&
            WK(
              c,
              new Iy(
                'fetch read error: ' + (n instanceof Error ? n.message : void 0)
              )
            ),
            YK(c),
            (D.j = 0);
      }
    });
  };
  var cL = function (a, b, c, d, e) {
    Z.call(this, a, 918);
    this.P = b;
    this.xb = c;
    this.A = jz(this);
    this.l = X(this, e);
    lz(this, d);
  };
  _.O(cL, Z);
  cL.prototype.j = function () {
    var a = this.l.value;
    a.length && Qo(this.xb, '3', (0, C.K)(x(this.P.V[a[0].getDomId()], 20)));
    this.A.notify();
  };
  var dL = function (a, b) {
    Z.call(this, a, 820);
    this.I = b;
    this.A = W(this);
  };
  _.O(dL, Z);
  dL.prototype.j = function () {
    var a = this,
      b,
      c,
      d,
      e;
    return _.jb(function (f) {
      if (1 == f.j) return kb(f, Ui(a.I), 2);
      b = f.m;
      c = b.Ec;
      d = b.status;
      c ||
        ti('gpt_etu', function (g) {
          Ci(g, a.context);
          L(g, 'rsn', d);
        });
      a.A.G(null != (e = c) ? e : '');
      f.j = 0;
    });
  };
  var eL = function (a, b, c, d, e, f) {
    Z.call(this, a, 978);
    this.l = b;
    this.X = c;
    this.I = d;
    this.localStorage = e;
    this.A = W(this);
    this.o = Y(this, f);
  };
  _.O(eL, Z);
  eL.prototype.j = function () {
    if (_.H(ex) && this.o.value) {
      var a, b, c, d, e, f;
      (null == (a = this.l) ? 0 : G(a, 8)) ||
      (_.H(Vw) && (null == (b = this.l) ? 0 : G(b, 13))) ||
      (null == (c = this.l) ? 0 : G(c, 1)) ||
      1 === (null == (d = this.l) ? void 0 : de(d, 6, 2)) ||
      1 === (null == (e = this.l) ? void 0 : x(e, 5)) ||
      (null == (f = this.l) ? 0 : G(f, 9)) ||
      !G(this.X, 5) ||
      G(this.X, 9)
        ? this.A.G(5)
        : ((a = cj(
            this.o.value,
            this.I,
            new _.$D(this.context),
            this.localStorage
          )),
          $y(this.A, a));
    } else Zy(this.A);
  };
  eL.prototype.m = function () {
    Zy(this.A);
  };
  var gL = function (a, b, c) {
    Z.call(this, a, 804);
    this.l = c;
    this.F = [];
    this.o = {
      wf: fL(this, function (d) {
        return x(d, 6);
      }),
      Cg: fL(this, function (d) {
        return x(d, 7);
      }),
      Cf: fL(this, function (d) {
        return !!G(d, 8);
      }),
      nf: fL(this, function (d) {
        return x(d, 10);
      }),
      fe: fL(this, function (d) {
        var e;
        return null != (e = d.getEscapedQemQueryId()) ? e : '';
      }),
      Qe: fL(this, function (d) {
        return Se(d, tu, 43);
      }),
      Bf: fL(this, function (d) {
        return !!G(d, 9);
      }),
      ug: fL(this, function (d) {
        return !!G(d, 12);
      }),
      qf: fL(this, function (d) {
        return jn(d, du, 48, Bu);
      }),
      kf: fL(this, function (d) {
        return jn(d, bu, 39, Bu);
      }),
      yc: fL(this, function (d) {
        return x(d, 36);
      }),
      vg: fL(this, function (d) {
        return G(d, 13);
      }),
      Af: fL(this, function (d) {
        return G(d, 3);
      }),
      qg: fL(this, function (d) {
        return x(d, 49);
      }),
      zg: fL(this, function (d) {
        return x(d, 29);
      }),
      Ag: fL(this, function (d) {
        return x(d, 30);
      }),
      xf: fL(this, function (d) {
        return Se(d, vu, 51);
      }),
      ef: fL(this, function (d) {
        return x(d, 61);
      }),
      Da: W(this),
      He: fL(this, function (d) {
        return Se(d, yu, 58);
      }),
      Dg: fL(this, function (d) {
        var e, f;
        return null != (f = null == (e = Se(d, uu, 56)) ? void 0 : Cf(e, 1))
          ? f
          : null;
      }),
      Eb: fL(this, function (d) {
        return be(d, Wt, 62);
      }),
      Jf: fL(this, function (d) {
        return pc(d, 63, $b);
      }),
    };
    this.C = X(this, b);
  };
  _.O(gL, Z);
  var fL = function (a, b) {
    var c = W(a);
    a.F.push({ A: c, hf: b });
    return c;
  };
  gL.prototype.j = function () {
    for (var a = _.A(this.F), b = a.next(); !b.done; b = a.next()) {
      b = b.value;
      var c = b.hf;
      Yy(b.A, c(this.C.value));
    }
    0 === this.l.kind || (1 === this.l.kind && this.l.url)
      ? this.o.Da.G(this.l)
      : this.o.Da.G({ kind: 0, La: x(this.C.value, 4) || '' });
  };
  var hL = function (a, b, c) {
    Z.call(this, a, 822);
    this.slotId = b;
    this.l = jz(this);
    this.o = X(this, c);
  };
  _.O(hL, Z);
  hL.prototype.j = function () {
    for (
      var a = this,
        b = ln(this.o.value, 23, !1),
        c = _.xe(bo),
        d = _.A(b),
        e = d.next();
      !e.done;
      e = d.next()
    )
      (e = e.value), bJ(c, e), cJ(c, e, this.slotId);
    this.l.notify();
    b.length &&
      ti(
        'gpt_hp',
        function (f) {
          Ci(f, a.context);
          L(f, 'ls', b.join());
        },
        _.Ce(pw)
      );
  };
  var iL = function (a, b, c) {
    Z.call(this, a, 803);
    this.l = b;
    this.slotId = c;
    this.A = W(this);
    this.o = W(this);
  };
  _.O(iL, Z);
  iL.prototype.j = function () {
    var a = JSON.parse(this.l),
      b = Ej(a, mr);
    if (!b) throw Error('missing ad unit path');
    if (null == a || !a[b]) throw Error('invalid ad unit path: ' + b);
    a = a[b];
    if (!Array.isArray(a)) throw Error('dictionary not an array: ' + this.l);
    a = new Au(a.slice());
    var c;
    b = _.A(null != (c = ln(a, 27)) ? c : []);
    for (c = b.next(); !c.done; c = b.next()) (c = c.value), _.xe(ye).m(c);
    Ae(4);
    this.slotId.dispatchEvent(rF, 800, a);
    this.A.G(a);
    var d;
    Yy(this.o, null != (d = Se(a, ru, 54)) ? d : null);
  };
  var jL = function (a, b, c, d) {
    Z.call(this, a, 823);
    this.slotId = b;
    this.N = c;
    this.l = jz(this);
    this.o = X(this, d);
  };
  _.O(jL, Z);
  jL.prototype.j = function () {
    var a = this;
    G(this.o.value, 11) &&
      (_.DF(this.N, this.slotId),
      AF(this.N, this.slotId, function () {
        _.EF(a.N, a.slotId);
      }));
    this.l.notify();
  };
  var kL = function (a, b, c, d) {
    Z.call(this, a, 821);
    this.X = b;
    this.va = c;
    this.l = jz(this);
    this.o = X(this, d);
  };
  _.O(kL, Z);
  kL.prototype.j = function () {
    if (G(this.X, 5))
      for (
        var a = new v.Set(), b = _.A(be(this.o.value, su, 14)), c = b.next();
        !c.done;
        c = b.next()
      ) {
        c = c.value;
        var d = void 0,
          e = null != (d = Bs(c, 5)) ? d : 1;
        a.has(e) ||
          (yz(this.va, 2 === e ? '__gpi' : '__gads', c, this.X), a.add(e));
      }
    this.l.notify();
  }; /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
  var lL =
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
        ''
      ),
    mL = function () {
      for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++)
        8 == d || 13 == d || 18 == d || 23 == d
          ? (a[d] = '-')
          : 14 == d
          ? (a[d] = '4')
          : (2 >= b && (b = (33554432 + 16777216 * Math.random()) | 0),
            (c = b & 15),
            (b >>= 4),
            (a[d] = lL[19 == d ? (c & 3) | 8 : c]));
      return a.join('');
    };
  var nL = function (
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    l,
    k,
    m,
    n,
    p,
    r,
    u,
    w,
    D,
    K,
    F,
    R,
    T,
    Q,
    ba,
    ca
  ) {
    Z.call(this, a, 973);
    this.la = b;
    this.F = c;
    this.M = d;
    this.o = e;
    this.P = f;
    this.N = g;
    this.va = h;
    this.da = l;
    this.W = k;
    this.l = m;
    this.lc = n;
    this.O = p;
    this.ka = r;
    this.sb = u;
    this.isSecureContext = w;
    this.Ua = D;
    this.I = K;
    this.Y = F;
    this.R = R;
    this.ma = ba;
    this.C = ca;
    this.ba = Y(this, R);
    this.aa = X(this, T);
    this.oa = X(this, Q);
    var ma;
    lz(this, (null != (ma = this.C) ? ma : p).Ub);
  };
  _.O(nL, Z);
  nL.prototype.j = function () {
    var a = this,
      b = new tf();
    _.$m(this, b);
    var c = this.aa.value,
      d = lE(this.P.U);
    if (!_.H(qx)) {
      var e = new SI(this.context, Tj(), console, this.R);
      I(b, e);
    }
    I(b, new UK(this.context, console, this.R));
    e = new DK(this.context, this.M, this.N, Se(this.P.U, Bp, 5), this.Y);
    I(b, e);
    var f = new TK(this.context, this.M, this.Y, this.P, this.I, e.A);
    I(b, f);
    var g = !!G(this.P.U, 6);
    e = new HK(this.context, this.M, g, this.P, this.F, this.I, c);
    I(b, e);
    var h = new MK(this.context, d, c, e.l);
    I(b, h);
    var l = new dL(this.context, this.I);
    I(b, l);
    var k,
      m = null != (k = this.C) ? k : this.O,
      n = m.Wa,
      p = m.Qa,
      r = m.ab,
      u = m.Pa,
      w = m.jb,
      D = m.Bb,
      K = m.Cb,
      F = m.Lc;
    k = m.ed;
    var R = m.Rb,
      T = m.Hd,
      Q = m.wa,
      ba = m.Ra,
      ca = m.zb,
      ma = m.Zb;
    m = m.Ud;
    _.H(Cw)
      ? ((F = new aJ(this.context, F)), I(b, F), (F = F.A))
      : ((F = new $I(this.context, F)), I(b, F), (F = F.A));
    p = new NH(
      this.context,
      this.F,
      this.P.V,
      this.sb,
      e.l,
      n,
      p,
      r,
      u,
      w,
      R,
      Q
    );
    I(b, p);
    I(b, new TH(this.context, n, D, K, p.F, p.M, this.P.V));
    _.H(ex)
      ? ((D = new eL(this.context, d, c, this.I, this.ba.value, k)),
        I(b, D),
        (r = D.A))
      : ((r = new tp()), Zy(r));
    D = window.isSecureContext && _.H(ix) ? 'wbn' : 'ldjh';
    var Ga = ++this.N.l;
    K = 'wbn' === D ? mL().toLowerCase() : void 0;
    u = this.lc;
    f = new SK(
      this.context,
      g,
      this.N,
      this.va,
      this.P,
      D,
      u.kb,
      u.Ib,
      u.Hb,
      this.oa.value,
      K,
      _.xe(kh),
      c,
      this.isSecureContext,
      this.Ua,
      this.I,
      F,
      l.A,
      e.l,
      p.l,
      r,
      f.A,
      this.ma,
      T,
      n,
      Q,
      ba,
      ca,
      ma,
      m,
      p.o
    );
    I(b, f);
    g = new cL(this.context, this.P, _.xe(kh), f.l, e.l);
    I(b, g);
    d = new IK(this.context, d, c);
    I(b, d);
    l = _.ih(this.context, 646, function (Ca, ua, Oa, Ia, rb, Mc) {
      var wc = function () {
        return void oL(a, rb, Ca, ua, Oa, Ia, Mc);
      };
      Ca && _.H(nw) ? setTimeout(_.ih(a.context, 646, wc), 0) : wc();
    });
    n = _.ih(this.context, 647, function (Ca, ua, Oa) {
      var Ia = function () {
        return void pL(a, Ga, Oa, ua, Ca);
      };
      _.H(nw) ? setTimeout(_.ih(a.context, 646, Ia), 0) : Ia();
    });
    var Na;
    'ldjh' === D
      ? ((T = qL(this, 289, 'strm_err')),
        (_.H(vw) && window.fetch) || (_.H(ww) && pv(window.fetch))
          ? (Na = new aL(this.context, l, T, n, c, e.l, h.A, f.l, g.A, d.A))
          : (Na = new ZK(this.context, l, T, n, c, e.l, h.A, f.l, g.A, d.A)))
      : (Na = new FK(
          this.context,
          l,
          qL(this, 1042, 'Unknown web bundle error.'),
          n,
          D,
          (0, C.K)(K),
          c,
          this.Y,
          e.l,
          h.A,
          f.l,
          f.O,
          g.A,
          d.A
        ));
    I(b, Na);
    h = new QK(this.context, Ga, e.l, Na.A);
    I(b, h);
    h = new BK(this.context, f.o, f.l);
    I(b, h);
    h = new RK(this.context, this.l.na, this.P, h.A);
    I(b, h);
    h = new PK(this.context, this.da, this.I, h.A);
    I(b, h);
    h = new OK(this.context, this.P, this.W, e.l, h.A);
    I(b, h);
    e = new JK(this.context, this.N, this.P, this.Y, e.l, h.A);
    I(b, e);
    e = new KK(this.context, He(this.I), this.I, c, Na.A);
    I(b, e);
    _.H(ow) && 1 === Ga && ((c = new AK(this.context, c, k, Na.A)), I(b, c));
    Gf(b);
  };
  var oL = function (a, b, c, d, e, f, g) {
      var h, l, k;
      return _.jb(function (m) {
        h = f[c];
        if (!h) return mh(a.context, 646, Error('missing slot')), m.return();
        0 === c &&
          ((l = (0, C.K)(x(a.P.V[h.getDomId()], 20))), Qo(_.xe(kh), '4', l));
        return kb(
          m,
          rL(a, h, d, e, b, null == (k = g) ? void 0 : k[h.getId()]),
          0
        );
      });
    },
    pL = function (a, b, c, d, e) {
      var f, g, h;
      return _.jb(function (l) {
        switch (l.j) {
          case 1:
            var k = a.context,
              m = e + 1,
              n = d.length;
            if (k.mc) {
              var p = k.vb;
              k = dh(k);
              var r = new Sv();
              r = _.y(r, 3, b, 0);
              m = _.y(r, 1, m, 0);
              n = _.y(m, 2, n, 0);
              n = fh(k, 8, gh, n);
              Nd(p, n);
            }
            f = e + 1;
          case 2:
            if (!(f < d.length)) {
              l.j = 4;
              break;
            }
            if (!d[f]) {
              l.j = 3;
              break;
            }
            p = new Au();
            p = _.z(p, 8, !0);
            g = Zd(p);
            h = '{"empty":' + g + '}';
            return kb(l, oL(a, c, f, h, { kind: 0, La: '' }, d, null), 3);
          case 3:
            ++f;
            l.j = 2;
            break;
          case 4:
            HF(a.N, a.o) || a.l.yd.dispatchEvent(wF, 965, a.o), (l.j = 0);
        }
      });
    },
    rL = function (a, b, c, d, e, f) {
      var g,
        h,
        l,
        k,
        m,
        n,
        p,
        r,
        u,
        w,
        D,
        K,
        F,
        R,
        T,
        Q,
        ba,
        ca,
        ma,
        Ga,
        Na,
        Ca,
        ua,
        Oa;
      return _.jb(function (Ia) {
        switch (Ia.j) {
          case 1:
            return (
              (g = new tf()),
              (h = new iL(a.context, c, b)),
              I(g, h),
              (l = new EI(a.context, h.o)),
              I(g, l),
              (k = new kL(a.context, e, a.va, h.A)),
              I(g, k),
              (m = new hL(a.context, b, h.A)),
              I(g, m),
              (n = new jL(a.context, b, a.N, h.A)),
              I(g, n),
              (p = new gL(a.context, h.A, d)),
              I(g, p),
              (r = [k.l.promise, m.l.promise, n.l.promise]),
              Gf(g),
              kb(Ia, v.Promise.all(r), 2)
            );
          case 2:
            if (b.J) return Ia.return();
            u = p;
            D = w = u.o;
            K = D.He;
            F = D.Cf;
            R = D.fe;
            return kb(Ia, K.promise, 3);
          case 3:
            return (
              (T = Ia.m),
              (Q = !!T),
              (ca = null == (ba = T) ? void 0 : Se(ba, ep, 5)),
              kb(Ia, F.promise, 4)
            );
          case 4:
            return (
              (ma = Ia.m),
              Q &&
                ti(
                  'gpt_td_init',
                  function (rb) {
                    Ci(rb, a.context);
                    var Mc, wc;
                    L(
                      rb,
                      'winner_qid',
                      null !=
                        (wc =
                          null == (Mc = ca)
                            ? void 0
                            : Mc.getEscapedQemQueryId())
                        ? wc
                        : ''
                    );
                    var Ze, $e;
                    L(
                      rb,
                      'xfpQid',
                      null != ($e = null == (Ze = ca) ? void 0 : ef(Ze, 6))
                        ? $e
                        : ''
                    );
                    L(rb, 'noFill', ma ? '1' : '0');
                    L(rb, 'publisher_tag', 'gpt');
                  },
                  1
                ),
              (Ga = C),
              (Na = Ga.K),
              kb(Ia, R.promise, 5)
            );
          case 5:
            (Ca = Na.call(Ga, Ia.m)),
              (ua = cm(a.P.V[b.getDomId()])),
              ((Oa = wm('google_norender') || (5 === ua && _.H(Qw))) ||
                (ma && !Q)) &&
              !_.H(Fp)
                ? Uo(b, a.N, a.P, Ca)
                : vK(
                    a.ka,
                    a.la,
                    a.F,
                    b,
                    ma || Oa,
                    Q,
                    a.N,
                    a.P,
                    w,
                    l.l,
                    e,
                    f,
                    a.l.na,
                    a.W,
                    a.O,
                    a.C
                  ),
              g.Ea(),
              (Ia.j = 0);
        }
      });
    },
    qL = function (a, b, c) {
      return _.ih(a.context, b, function (d) {
        d = d instanceof Error ? d : Error();
        d.message = d.message || c;
        mh(a.context, b, d);
        HF(a.N, a.o) || a.l.yd.dispatchEvent(wF, 965, a.o);
      });
    };
  var sL = function (
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    l,
    k,
    m,
    n,
    p,
    r,
    u,
    w,
    D,
    K,
    F,
    R,
    T,
    Q
  ) {
    Z.call(this, a, 885);
    this.da = b;
    this.F = c;
    this.P = d;
    this.N = e;
    this.va = f;
    this.lc = g;
    this.aa = h;
    this.R = l;
    this.l = k;
    this.M = m;
    this.o = n;
    this.ba = p;
    this.isSecureContext = r;
    this.O = u;
    this.W = w;
    this.Ua = D;
    this.I = K;
    this.Y = F;
    this.C = Q;
    this.ka = X(this, R);
    lz(this, T);
  };
  _.O(sL, Z);
  sL.prototype.j = function () {
    var a = this.ka.value;
    if (a.length) {
      var b = this.N,
        c = this.l,
        d = a.length;
      b.m.has(c);
      b.m.set(c, d);
      a = _.A(a);
      for (b = a.next(); !b.done; b = a.next()) {
        c = b.value;
        var e = void 0;
        b = c.sb;
        d = c.Z;
        c = new tf();
        _.$m(this, c);
        var f = cn(
          this.context,
          this.W,
          (null != (e = this.C) ? e : this.o).Xc
        );
        e = f.Ab;
        var g = f.he;
        _.$m(c, f.qa);
        e = Wm(this.context, this.F, this.N, lE(this.P.U), this.I, e, g);
        f = e.eb;
        _.$m(c, e.qa);
        e = new zK(this.context, this.I, f);
        I(c, e);
        e = new wK(this.context, this.I, f);
        I(c, e);
        e = new xK(this.context, _.Zg(150), f);
        I(c, e);
        g = new up(this.context, this.I, f);
        I(c, g);
        var h = new yK(this.context, this.va, this.O, g.A, f);
        I(c, h);
        b = new nL(
          this.context,
          this.da,
          this.F,
          d,
          this.l,
          this.P,
          this.N,
          this.va,
          this.aa,
          this.R,
          this.M,
          this.lc,
          this.o,
          this.ba,
          b,
          this.isSecureContext,
          this.Ua,
          this.I,
          this.Y,
          g.A,
          f,
          h.o,
          e.l,
          this.C
        );
        I(c, b);
        Gf(c);
      }
    } else this.M.yd.dispatchEvent(wF, 965, this.l);
  };
  var tL = new v.Map(),
    uL = function (a, b, c, d) {
      d = void 0 === d ? tL : d;
      Z.call(this, a, 834);
      this.C = b;
      this.Z = c;
      this.l = d;
      this.o = W(this);
      this.F = v.Promise.all(this.Z.map(this.M, this));
    };
  _.O(uL, Z);
  uL.prototype.j = function () {
    var a = this,
      b;
    return _.jb(function (c) {
      if (1 == c.j) return kb(c, a.F, 2);
      b = c.m;
      a.o.G(
        b.filter(function (d) {
          return null != d && !d.J;
        })
      );
      c.j = 0;
    });
  };
  uL.prototype.M = function (a) {
    var b = this,
      c,
      d;
    return _.jb(function (e) {
      if (1 == e.j) {
        if (a.J) return e.return();
        b.l.has(a) ||
          (b.l.set(a, kq(a)),
          _.Qm(a, function () {
            return void b.l.delete(a);
          }));
        c = (0, C.K)(b.l.get(a));
        return kb(e, c(), 2);
      }
      d = e.m;
      if (b.J) return e.return();
      if (d) return e.return(a);
      N(b.C, OG(a.getAdUnitPath()));
      return e.return();
    });
  };
  var vL = function (a, b, c, d, e) {
    Z.call(this, a, 847);
    this.N = b;
    this.Ba = c;
    this.o = d;
    this.l = W(this);
    this.C = X(this, e);
  };
  _.O(vL, Z);
  vL.prototype.j = function () {
    var a = this.C.value;
    if (a.length) {
      for (var b = _.A(a), c = b.next(); !c.done; c = b.next())
        IF(this.N, c.value);
      this.o
        ? this.l.G([])
        : this.Ba
        ? ((b = Wg(a[0].getAdUnitPath())), (a = wL(a, b)), this.l.G(a))
        : ((a = a.map(function (d) {
            return { sb: Wg(d.getAdUnitPath()), Z: [d] };
          })),
          this.l.G(a));
    } else this.l.G([]);
  };
  var wL = function (a, b) {
    var c = [];
    a = xa(a, function (f) {
      return Wg(f.getAdUnitPath());
    });
    a = _.A(_.t(Object, 'entries').call(Object, a));
    for (var d = a.next(); !d.done; d = a.next()) {
      var e = _.A(d.value);
      d = e.next().value;
      e = e.next().value;
      d === b ? c.unshift({ sb: d, Z: e }) : c.push({ sb: d, Z: e });
    }
    return c;
  };
  var xL = function (a, b, c) {
    Z.call(this, a, 845);
    this.V = b;
    this.l = W(this);
    this.o = W(this);
    this.C = X(this, c);
  };
  _.O(xL, Z);
  xL.prototype.j = function () {
    var a = this,
      b = function (d) {
        return !!Gh(a.V[d.getDomId()]).length;
      },
      c = this.C.value;
    this.l.G(c.filter(b));
    this.o.G(c.filter(nr(b)));
  };
  var yL = function (a, b, c, d, e) {
    Z.call(this, a, 864);
    this.N = b;
    this.P = c;
    this.Y = d;
    this.l = jz(this);
    this.o = X(this, e);
  };
  _.O(yL, Z);
  yL.prototype.j = function () {
    for (var a = _.A(this.o.value), b = a.next(); !b.done; b = a.next())
      if (((b = b.value), _.So(this.N, b))) {
        var c = this.P,
          d = c.U;
        c = c.V[b.getDomId()];
        Lm(c, d) && Mm(b, this.Y, c, d);
        IF(this.N, b);
        var e = void 0,
          f = void 0;
        null != (e = null != (f = Lh(c, 10)) ? f : G(d, 11)) &&
          e &&
          Mm(b, this.Y, c, d);
      }
    this.l.notify();
  };
  var zL = function (a, b, c, d, e, f, g, h, l, k, m, n, p, r, u, w, D) {
    _.U.call(this);
    var K = this;
    this.context = a;
    this.M = b;
    this.B = c;
    this.N = d;
    this.va = e;
    this.na = f;
    this.T = g;
    this.o = h;
    this.F = l;
    this.l = k;
    this.isSecureContext = m;
    this.L = n;
    this.C = p;
    this.Ua = r;
    this.Y = u;
    this.I = w;
    this.H = D;
    this.j = new v.Map();
    this.m = new mF(a);
    _.$m(this, this.m);
    oF(this.m, wF, function (F) {
      F = F.detail;
      var R = K.j.get(F);
      R && (K.j.delete(F), R.Ea());
    });
  };
  _.O(zL, _.U);
  var AL = function (a, b, c, d) {
    var e = ++a.N.B;
    a.j.has(e);
    var f = new tf();
    a.j.set(e, f);
    b = new uL(a.context, a.B, b);
    I(f, b);
    var g = new xL(a.context, d.V, b.o);
    I(f, g);
    b = new vL(a.context, a.N, !!G(d.U, 6), wm('google_nofetch'), g.l);
    I(f, b);
    g = new yL(a.context, a.N, d, document, g.o);
    I(f, g);
    a = new sL(
      a.context,
      a.M,
      a.B,
      d,
      a.N,
      a.va,
      c,
      a.T,
      a.o,
      e,
      { yd: a.m, na: a.na },
      a.l,
      a.F,
      a.isSecureContext,
      a.L,
      a.C,
      a.Ua,
      a.I,
      a.Y,
      b.l,
      g.l,
      a.H
    );
    I(f, a);
    Gf(f);
  };
  var BL = function (a, b, c, d, e, f, g, h, l, k, m, n, p) {
    pJ.call(this, c, l);
    this.context = a;
    this.N = d;
    this.H = new v.Set();
    this.o = {};
    this.F = new uK(a, d);
    this.M = new zL(
      a,
      b,
      c,
      d,
      new vz(window, _.H(zw)),
      this.l,
      null != n ? n : _.xe(EJ),
      e,
      this.F,
      f,
      g,
      h,
      k,
      m,
      document,
      window,
      p
    );
    _.$m(this, this.M);
  };
  _.O(BL, pJ);
  BL.prototype.getName = function () {
    return 'publisher_ads';
  };
  BL.prototype.display = function (a, b, c, d, e) {
    d = void 0 === d ? '' : d;
    e = void 0 === e ? '' : e;
    var f = '';
    if (d)
      if (_.ka(d) && 1 == d.nodeType) {
        var g = d;
        f = g.id;
      } else f = d;
    Zn(this);
    var h = Tk(c, this.context, this.m, a, b, f),
      l = h.slotId;
    h = h.Ya;
    if (l && h) {
      g && !f && (g.id = l.getDomId());
      this.slotAdded(l, h);
      h.setClickUrl(e);
      var k;
      Sn(this, null != (k = g) ? k : l.getDomId(), c);
    } else N(this.m, Nj('PubAdsService.display', [a, b, d]));
  };
  var Sn = function (a, b, c) {
      var d = CL(b, c);
      c = d.slotId;
      var e = d.af;
      d = d.bf;
      if (c) {
        if (((b = mi()), (d = nn(b, c.getDomId())) && !G(d, 19)))
          if ((e && b.D.set(c, e), ci(c) || Kh(cm(d)))) {
            if ((_.z(d, 19, !0), (e = Wh(b.j, b.m)), a.B)) {
              Zn(a);
              a.B && CF(a.N, c);
              a.m.info(jG());
              b = e.U;
              d = e.V;
              var f = G(b, 6);
              if (f || !a.N.pb(c))
                f && (f = ci(c)) && c.dispatchEvent(qF, 778, f),
                  G(b, 4) &&
                    ((d = d[c.getDomId()]),
                    Lm(d, b) && !a.N.pb(c) && Mm(c, document, d, b)),
                  DL(a, e, c);
            }
          } else N(a.m, ZF(String(x(d, 1)), String(x(d, 2))), c);
      } else
        d ? a.m.error($F(d)) : a.m.error(Nj('googletag.display', [String(b)]));
    },
    lH = function (a, b, c) {
      var d = void 0 === d ? document : d;
      var e;
      null != (e = c.V[b.getDomId()]) && _.z(e, 19, !0);
      e = { id: Lu(b.getDomId()) };
      bb(d, ug(e));
      ci(b, d)
        ? (Zn(a), CF(a.N, b), DL(a, c, b))
        : ti('gpt_pb_write', function (f) {
            Ci(f, a.context);
          });
    };
  BL.prototype.slotAdded = function (a, b) {
    var c = this;
    G(b, 17) || (this.B && CF(this.N, a));
    this.l.dispatchEvent(tF, 724, { Sd: a.getDomId(), V: b });
    var d = 0;
    oF(a, To, function (e) {
      var f = e.detail;
      e = f.size;
      f = f.isEmpty;
      var g = new eJ(a, 'publisher_ads');
      f && (g.isEmpty = !0);
      var h = a.j.getResponseInformation();
      e &&
        h &&
        ((g.size = [e.width, e.height]),
        (g.sourceAgnosticCreativeId = h.sourceAgnosticCreativeId),
        (g.sourceAgnosticLineItemId = h.sourceAgnosticLineItemId),
        (g.isBackfill = h.isBackfill),
        (g.creativeId = h.creativeId),
        (g.lineItemId = h.lineItemId),
        (g.creativeTemplateId = h.creativeTemplateId),
        (g.advertiserId = h.advertiserId),
        (g.campaignId = h.campaignId),
        (g.yieldGroupIds = h.yieldGroupIds),
        (g.companyIds = h.companyIds));
      _.H(Dw) &&
        ((e = new Zj('gpt_sree')),
        Ci(e, c.context),
        L(e, 'sid', c.context.pvsid),
        L(e, 'adk', bq(c.N, a)),
        L(e, 'nf', f),
        L(e, 'rc', GF(c.N, a)),
        L(e, 'sret', ((_.te(_.q) || 0) - d).toFixed(3)),
        bk(e));
      c.l.dispatchEvent('slotRenderEnded', 708, g);
    });
    oF(a, rF, function (e) {
      var f, g;
      d = null != (g = null != (f = e.timeStamp) ? f : _.te(_.q)) ? g : 0;
      c.l.dispatchEvent('slotResponseReceived', 709, new kJ(a, c.getName()));
    });
    pJ.prototype.slotAdded.call(this, a, b);
  };
  var DL = function (a, b, c) {
      var d = EL(a, b, c);
      FL(a, d, b, { kb: 1 });
      b = c.getAdUnitPath();
      if ((c = a.o[b])) {
        c = _.A(c);
        for (d = c.next(); !d.done; d = c.next())
          (d = d.value), FL(a, d.Z, d.P, d.lc);
        delete a.o[b];
      }
    },
    EL = function (a, b, c) {
      var d = b.U;
      b = b.V;
      if (G(d, 4)) return [];
      var e;
      return !G(d, 6) || (null == (e = b[c.getDomId()]) ? 0 : G(e, 17))
        ? (a.H.add(c),
          _.Qm(c, function () {
            return void a.H.delete(c);
          }),
          [c])
        : a.j.filter(function (f) {
            if (a.H.has(f)) return !1;
            a.H.add(f);
            _.Qm(f, function () {
              return void a.H.delete(f);
            });
            return !0;
          });
    },
    FL = function (a, b, c, d) {
      a.m.info(qG());
      if (GL(a, b, d, c) && 1 !== d.kb)
        for (b = _.A(b), d = b.next(); !d.done; d = b.next())
          (d = d.value.getDomId()),
            a.l.dispatchEvent(uF, 725, { Sd: d, V: c.V[d] });
    },
    GL = function (a, b, c, d) {
      b = b.filter(function (e) {
        if (!_.So(a.N, e)) return !1;
        var f = d.V[e.getDomId()];
        (5 !== cm(f) && 4 !== cm(f)) || _.DF(a.N, e);
        return !0;
      });
      if (!b.length) return null;
      AL(a.M, b, c, d);
      return b;
    };
  BL.prototype.refresh = function (a, b, c) {
    b = HL(this, b);
    if (!b.length) return !1;
    IL(this, a, b, null != c ? c : { kb: 2 });
    return !0;
  };
  var HL = function (a, b) {
      return b.filter(function (c, d) {
        if (!c.J) return !0;
        N(a.m, tG(String(d)));
        return !1;
      });
    },
    IL = function (a, b, c, d) {
      var e = c[0],
        f,
        g = null != (f = null == e ? void 0 : e.getDomId()) ? f : '';
      if (a.B) {
        var h = {};
        e = _.A(c);
        for (f = e.next(); !f.done; h = { Pb: h.Pb }, f = e.next())
          (h.Pb = f.value),
            a.H.add(h.Pb),
            _.Qm(
              h.Pb,
              (function (l) {
                return function () {
                  return void a.H.delete(l.Pb);
                };
              })(h)
            );
        FL(a, c, b, d);
      } else
        c.length && G(b.U, 6)
          ? (N(a.m, pG(g), e),
            (e = e.getAdUnitPath()),
            (f = null != (h = a.o[e]) ? h : []),
            f.push({ Z: c, P: b, lc: d }),
            (a.o[e] = f))
          : N(a.m, nG(g), e);
    };
  BL.prototype.T = function () {
    var a = this,
      b = mi().j;
    if (G(b, 6))
      for (var c = _.A(this.j), d = c.next(); !d.done; d = c.next())
        this.B && CF(this.N, d.value);
    tH(this, b);
    oF(this.l, 'rewardedSlotClosed', function (e) {
      var f = e.detail.slot;
      e = _.t(a.j, 'find').call(a.j, function (g) {
        return f === g.j;
      });
      JL(a, [e], mi().j, mi().m, a.N);
    });
    Uj();
  };
  BL.prototype.destroySlots = function (a) {
    a = pJ.prototype.destroySlots.call(this, a);
    if (a.length && this.B) {
      var b = mi();
      KL(this, a, b.j, b.m);
    }
    return a;
  };
  var uH = function (a, b, c, d) {
      if (!a.B) return N(a.m, oG(), d[0]), !1;
      var e = HL(a, d);
      if (!e.length)
        return (
          N(
            a.m,
            Nj(
              'PubAdsService.clear',
              [d].filter(function (f) {
                return void 0 !== f;
              })
            )
          ),
          !1
        );
      a.m.info(rG());
      KL(a, e, b, c);
      return !0;
    },
    KL = function (a, b, c, d) {
      for (var e = _.A(b), f = e.next(); !f.done; f = e.next())
        zF(a.N, f.value);
      JL(a, b, c, d, a.N);
    };
  BL.prototype.forceExperiment = function (a) {
    a = Number(a);
    0 < a && _.xe(ye).m(a);
  };
  var JL = function (a, b, c, d, e) {
      var f = void 0 === f ? window : f;
      b = _.A(b);
      for (var g = b.next(); !g.done; g = b.next()) {
        g = g.value;
        KF(a.F.N, g);
        var h = d[g.getDomId()];
        Lm(h, c) && Mm(g, f.document, h, c);
        IF(e, g);
      }
    },
    vH = function (a, b) {
      if (!a.B) return null;
      var c, d;
      return {
        vid: null != (c = x(b, 22)) ? c : '',
        cmsid: null != (d = x(b, 23)) ? d : '',
      };
    },
    tH = function (a, b) {
      G(b, 21) && a.B && _.z(b, 29, zv());
    },
    CL = function (a, b) {
      var c = '';
      if ('string' === typeof a) (c = a), (b = iI(b, c));
      else if (_.ka(a) && 1 == a.nodeType) {
        var d = a;
        c = d.id;
        b = iI(b, c);
      } else
        b = ((E = [].concat(_.Ld(b.Z))), _.t(E, 'find')).call(E, function (e) {
          return e.j === a;
        });
      return { slotId: b, af: d, bf: c };
    };
  var LL = P(['https://securepubads.g.doubleclick.net/pagead/js/rum_debug.js']),
    ML = P(['https://securepubads.g.doubleclick.net/pagead/js/rum.js']);
  var tq = '2023021501';
  (function (a, b) {
    var c = null != a ? a : { Ga: uq(), hb: '', vb: new yq(0), Ce: !0, de: 1 };
    try {
      var d = Tj();
      (0, C.ue)(!_.xe(Xg).j);
      _.t(Object, 'assign').call(Object, Yg, d._vars_);
      d._vars_ = Yg;
      if (d.evalScripts) d.evalScripts();
      else {
        KE();
        try {
          dg();
        } catch (ma) {
          mh(c, 408, ma);
        }
        Km();
        var e;
        _.H(Qk) && (e = new Rk());
        try {
          $f((null != e ? e : _.xe(Rk)).H), Ae(13), Ae(3);
        } catch (ma) {
          mh(c, 408, ma);
        }
        var f = Ee(jx);
        f.length && Bd(f);
        var g = wq(e),
          h = null != a ? a : zq(g),
          l = null != b ? b : new ZI(h);
        hh(h);
        ti(
          'gpt_fifwin',
          function (ma) {
            Ci(ma, h);
          },
          d.fifWin ? 0.01 : 0
        );
        var k = new yF(),
          m = new uJ(k, e),
          n = new BJ(h),
          p = _.Zg(260),
          r = new TI(h, m, mi(), l, k, p, e),
          u = jv();
        _.H(Qk) || (e = _.xe(Rk));
        var w = new mF(h),
          D = new mF(h),
          K = new mF(h),
          F;
        p && (F = UI(r, w));
        var R;
        _.H(Jw) && (R = _.Zg(221));
        var T;
        _.H(Kw) && (T = new EJ());
        var Q = new BL(h, m, l, k, n, r, u, e, w, p, R, T, F);
        _.H(xx) && new jI(h, w, k, m);
        var ba = mi().j;
        ko(h, l, Q, ba, m, D, K, e);
        var ca = _.ih(h, 77, function () {
          var ma = d.cmd;
          if (!ma || Array.isArray(ma)) {
            var Ga = new kI(l);
            d.cmd = Kj(h, Ga);
            null != ma && ma.length && Ga.push.apply(Ga, ma);
          }
        });
        d.fifWin && 'complete' !== document.readyState
          ? _.hb(window, 'load', function () {
              return window.setTimeout(ca, 0);
            })
          : ca();
        Nn();
        if (_.H(xx) || _.xe(kh).j) sq(), ck(document, _.H(Ax) ? B(LL) : B(ML));
        Eo(h, l);
        Xj(h);
      }
    } catch (ma) {
      mh(c, 106, ma);
    }
  })();
}).call(this, {});
