webpackJsonp([35783957827783], {
  230: function (e, t, n) {
    !(function (t, n) {
      e.exports = n()
    })(this, function () {
      'use strict'
      var e = function (e, t, n, o) {
          return (
            (e /= o / 2),
            e < 1 ? n / 2 * e * e + t : (e--, -n / 2 * (e * (e - 2) - 1) + t)
          )
        },
        t =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (e) {
              return typeof e
            }
            : function (e) {
              return e &&
                  typeof Symbol === 'function' &&
                  e.constructor === Symbol
                ? 'symbol'
                : typeof e
            },
        n = function () {
          function n () {
            return window.scrollY || window.pageYOffset
          }
          function o (e) {
            return e.getBoundingClientRect().top + s
          }
          function a (e) {
            d || (d = e),
            (j = e - d),
            (w = f(j, s, L, p)),
            window.scrollTo(0, w),
            j < p ? requestAnimationFrame(a) : r()
          }
          function r () {
            window.scrollTo(0, s + L),
            i && M && (i.setAttribute('tabindex', '-1'), i.focus()),
            typeof y === 'function' && y(),
            (d = !1)
          }
          function u (r) {
            var u =
              arguments.length <= 1 || void 0 === arguments[1]
                ? {}
                : arguments[1]
            switch (
              ((p = u.duration || 1e3),
              (l = u.offset || 0),
              (y = u.callback),
              (f = u.easing || e),
              (M = u.a11y || !1),
              (s = n()),
              typeof r === 'undefined' ? 'undefined' : t(r))
            ) {
              case 'number':
                ;(i = void 0), (M = !1), (c = s + r)
                break
              case 'object':
                ;(i = r), (c = o(i))
                break
              case 'string':
                ;(i = document.querySelector(r)), (c = o(i))
            }
            switch (((L = c - s + l), t(u.duration))) {
              case 'number':
                p = u.duration
                break
              case 'function':
                p = u.duration(L)
            }
            requestAnimationFrame(a)
          }
          var i = void 0,
            s = void 0,
            c = void 0,
            l = void 0,
            f = void 0,
            M = void 0,
            L = void 0,
            p = void 0,
            d = void 0,
            j = void 0,
            w = void 0,
            y = void 0
          return u
        },
        o = n()
      return o
    })
  },
  69: function (e, t) {
    'use strict'
    function n (e) {
      if (e === null || void 0 === e) {
        throw new TypeError(
          'Object.assign cannot be called with null or undefined'
        )
      }
      return Object(e)
    }
    function o () {
      try {
        if (!Object.assign) return !1
        var e = new String('abc')
        if (((e[5] = 'de'), Object.getOwnPropertyNames(e)[0] === '5')) return !1
        for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n
        var o = Object.getOwnPropertyNames(t).map(function (e) {
          return t[e]
        })
        if (o.join('') !== '0123456789') return !1
        var a = {}
        return (
          'abcdefghijklmnopqrst'.split('').forEach(function (e) {
            a[e] = e
          }),
          Object.keys(Object.assign({}, a)).join('') === 'abcdefghijklmnopqrst'
        )
      } catch (e) {
        return !1
      }
    }
    var a = Object.getOwnPropertySymbols,
      r = Object.prototype.hasOwnProperty,
      u = Object.prototype.propertyIsEnumerable
    e.exports = o()
      ? Object.assign
      : function (e, t) {
        for (var o, i, s = n(e), c = 1; c < arguments.length; c++) {
          o = Object(arguments[c])
          for (var l in o) r.call(o, l) && (s[l] = o[l])
          if (a) {
            i = a(o)
            for (var f = 0; f < i.length; f++) { u.call(o, i[f]) && (s[i[f]] = o[i[f]]) }
          }
        }
        return s
      }
  },
  113: function (e, t, n) {
    'use strict'
    function o (e) {
      return e && e.__esModule ? e : { default: e }
    }
    function a (e, t) {
      if (!(e instanceof t)) { throw new TypeError('Cannot call a class as a function') }
    }
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var o in n) { Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]) }
          }
          return e
        },
      u = n(230),
      i = o(u),
      s = n(268),
      c = n(269),
      l = n(114),
      f = { offset: 0, scrollDuration: 400, keepLastAnchorHash: !1 },
      M = function e () {
        var t = this
        a(this, e),
        (this.addListeners = function () {
          window.addEventListener('scroll', t.scrollHandler, !1),
          window.addEventListener('hashchange', t.handleHashChange)
        }),
        (this.removeListeners = function () {
          window.removeEventListener('scroll', t.scrollHandler, !1),
          window.removeEventListener('hashchange', t.handleHashChange)
        }),
        (this.configure = function (e) {
          t.config = r({}, f, e)
        }),
        (this.goToTop = function () {
          (0, c.getScrollTop)() !== 0 &&
              ((t.forcedHash = !0), window.scroll(0, 0))
        }),
        (this.addAnchor = function (e, n) {
          Object.keys(t.anchors).length === 0 && t.addListeners(),
          t.forceHashUpdate(),
          (t.anchors[e] = n)
        }),
        (this.removeAnchor = function (e) {
          delete t.anchors[e],
          Object.keys(t.anchors).length === 0 && t.removeListeners()
        }),
        (this.handleScroll = function () {
          var e = t.config,
            n = e.offset,
            o = e.keepLastAnchorHash,
            a = (0, c.getBestAnchorGivenScrollLocation)(t.anchors, n)
          a && (0, l.getHash)() !== a
            ? ((t.forcedHash = !0), (0, l.updateHash)(a, !1))
            : a || o || (0, l.removeHash)()
        }),
        (this.handleHashChange = function (e) {
          t.forcedHash ? (t.forcedHash = !1) : t.goToSection((0, l.getHash)())
        }),
        (this.goToSection = function (e) {
          var n = t.anchors[e]
          n
            ? (0, i.default)(n, {
              duration: t.config.scrollDuration,
              offset: t.config.offset
            })
            : ((n = document.getElementById(e)),
            n &&
                  (0, i.default)(n, { duration: 0, offset: t.config.offset }))
        }),
        (this.anchors = {}),
        (this.forcedHash = !1),
        (this.config = f),
        (this.scrollHandler = (0, s.debounce)(this.handleScroll, 100)),
        (this.forceHashUpdate = (0, s.debounce)(this.handleHashChange, 1))
      }
    t.default = new M()
  },
  266: function (e, t, n) {
    'use strict'
    function o (e) {
      return e && e.__esModule ? e : { default: e }
    }
    function a (e, t) {
      if (!(e instanceof t)) { throw new TypeError('Cannot call a class as a function') }
    }
    function r (e, t) {
      if (!e) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      }
      return !t || (typeof t !== 'object' && typeof t !== 'function') ? e : t
    }
    function u (e, t) {
      if (typeof t !== 'function' && t !== null) {
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        )
      }(e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
      t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t))
    }
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = (function () {
        function e (e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n]
            ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
          }
        }
        return function (t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t
        }
      })(),
      s = n(1),
      c = o(s),
      l = n(70),
      f = o(l),
      M = n(2),
      L = o(M),
      p = n(113),
      d = o(p),
      j = (function (e) {
        function t (e) {
          a(this, t)
          var n = r(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          )
          return (n.id = e.id || e.children.ref), n
        }
        return (
          u(t, e),
          i(t, [
            {
              key: 'componentDidMount',
              value: function () {
                var e = f.default.findDOMNode(
                  this.refs[Object.keys(this.refs)[0]]
                )
                d.default.addAnchor(this.id, e)
              }
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                d.default.removeAnchor(this.id)
              }
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.children,
                  n = e.id
                return c.default.cloneElement(t, { ref: t.ref || n })
              }
            }
          ]),
          t
        )
      })(s.Component)
    ;(j.propTypes = { children: L.default.node, id: L.default.string }),
    (t.default = j)
  },
  267: function (e, t, n) {
    'use strict'
    function o (e) {
      return e && e.__esModule ? e : { default: e }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.default = t.removeHash = t.goToAnchor = t.configureAnchors = t.goToTop = void 0)
    var a = n(114)
    Object.defineProperty(t, 'goToAnchor', {
      enumerable: !0,
      get: function () {
        return a.updateHash
      }
    }),
    Object.defineProperty(t, 'removeHash', {
      enumerable: !0,
      get: function () {
        return a.removeHash
      }
    })
    var r = n(266)
    Object.defineProperty(t, 'default', {
      enumerable: !0,
      get: function () {
        return o(r).default
      }
    })
    var u = n(113),
      i = o(u)
    ;(t.goToTop = i.default.goToTop), (t.configureAnchors = i.default.configure)
  },
  268: function (e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var n = arguments
    t.debounce = function (e, t, o) {
      var a = void 0
      return function () {
        var r = void 0,
          u = n,
          i = function () {
            ;(a = null), o || e.apply(r, u)
          },
          s = o && !a
        clearTimeout(a), (a = setTimeout(i, t)), s && e.apply(r, u)
      }
    }
  },
  114: function (e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    ;(t.getHash = function () {
      return decodeURI(window.location.hash.slice(1))
    }),
    (t.updateHash = function (e, t) {
      t ? (window.location.hash = e) : window.location.replace('#' + e)
    }),
    (t.removeHash = function () {
      history.replaceState(
        '',
        document.title,
        window.location.pathname + window.location.search
      )
    })
  },
  269: function (e, t) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var n = (t.getScrollTop = function () {
        return document.body.scrollTop || document.documentElement.scrollTop
      }),
      o = (t.getElementOffset = function (e) {
        var t = n(),
          o = e.getBoundingClientRect(),
          a = o.top,
          r = o.bottom
        return { top: Math.floor(a + t), bottom: Math.floor(r + t) }
      }),
      a = (t.doesElementContainScrollTop = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          a = n(),
          r = o(e).top + t
        return a >= r && a < r + e.offsetHeight
      }),
      r = (t.checkLocationRelevance = function (e, t) {
        var n = o(e),
          a = n.top,
          r = n.bottom,
          u = o(t),
          i = u.top,
          s = u.bottom
        return a === i ? (r === s ? e < t : s < r) : i > a
      }),
      u = (t.checkElementRelevance = function (e, t) {
        return !!e.contains(t) || !(t.contains(e) || !r(e, t))
      })
    t.getBestAnchorGivenScrollLocation = function (e, t) {
      var n = void 0,
        o = void 0
      return (
        Object.keys(e).forEach(function (r) {
          var i = e[r]
          a(i, t) && ((o && !u(o, i)) || ((o = i), (n = r)))
        }),
        n
      )
    }
  },
  275: function (e, t, n) {
    e.exports = n.p + 'static/george_milescu.945afa2f.jpg'
  },
  276: function (e, t, n) {
    e.exports = n.p + 'static/mircea_bardac.b33f8faf.jpg'
  },
  121: function (e, t, n) {
    'use strict'
    function o (e) {
      return e && e.__esModule ? e : { default: e }
    }
    t.__esModule = !0
    var a = n(276),
      r = o(a),
      u = n(283),
      i = o(u),
      s = n(284),
      c = o(s),
      l = n(275),
      f = o(l),
      M = [
        {
          name: 'Răzvan Deaconescu',
          position: 'Co-founder',
          facebook: 'https://www.facebook.com/razvan.deaconescu',
          photo: i.default
        },
        {
          name: 'Răzvan Rughiniș',
          position: 'Co-founder',
          facebook: 'https://www.facebook.com/razvan.rughinis',
          photo: c.default
        },
        {
          name: 'Mircea Bardac',
          position: 'Co-founder',
          facebook: 'https://www.facebook.com/mircea.bardac',
          photo: r.default
        },
        {
          name: 'George Milescu',
          position: 'Co-founder',
          facebook: 'https://www.facebook.com/gmilescu',
          photo: f.default
        }
      ]
    ;(t.default = M), (e.exports = t.default)
  },
  277: function (e, t, n) {
    e.exports = n.p + 'static/cdl_logo.1dff96f6.png'
  },
  278: function (e, t, n) {
    e.exports = n.p + 'static/linux_install_fest_logo.2a7ddc0b.png'
  },
  279: function (e, t) {
    e.exports =
      'data:image/png;base64,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'
  },
  122: function (e, t, n) {
    'use strict'
    function o (e) {
      return e && e.__esModule ? e : { default: e }
    }
    t.__esModule = !0
    var a = n(277),
      r = o(a),
      u = n(279),
      i = o(u),
      s = n(281),
      c = o(s),
      l = n(282),
      f = o(l),
      M = n(280),
      L = o(M),
      p = n(278),
      d = o(p),
      j = [
        { title: '', logo: i.default, path: 'http://www.lpic.ro/wiki/' },
        { title: '', logo: r.default, path: 'http://cdl.rosedu.org/' },
        { title: '', logo: c.default, path: 'http://soc.rosedu.org/2018/' },
        { title: '', logo: f.default, path: 'https://github.com/rosedu/wouso' },
        {
          title: '',
          logo: L.default,
          path: 'https://workshop.rosedu.org/2018/'
        },
        { title: '', logo: d.default, path: 'http://lif.rosedu.org/' }
      ]
    ;(t.default = j), (e.exports = t.default)
  },
  280: function (e, t, n) {
    e.exports = n.p + 'static/rosedu_workshops_logo.58b11b3c.png'
  },
  281: function (e, t, n) {
    e.exports = n.p + 'static/rsoc_logo.d4369e77.png'
  },
  282: function (e, t, n) {
    e.exports = n.p + 'static/wouso_logo.d659e2ba.png'
  },
  283: function (e, t, n) {
    e.exports = n.p + 'static/razvan_deaconescu_img.47b64215.jpg'
  },
  284: function (e, t, n) {
    e.exports = n.p + 'static/razvan_rughinis_img.b0a3e8c4.jpg'
  },
  123: function (e, t, n) {
    'use strict'
    function o (e) {
      return e && e.__esModule ? e : { default: e }
    }
    function a (e, t) {
      if (!(e instanceof t)) { throw new TypeError('Cannot call a class as a function') }
    }
    function r (e, t) {
      if (!e) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      }
      return !t || (typeof t !== 'object' && typeof t !== 'function') ? e : t
    }
    function u (e, t) {
      if (typeof t !== 'function' && t !== null) {
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        )
      }(e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
      t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t))
    }
    t.__esModule = !0
    var i =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var o in n) { Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]) }
          }
          return e
        },
      s = (function () {
        function e (e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n]
            ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
          }
        }
        return function (t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t
        }
      })(),
      c = n(1),
      l = o(c),
      f = n(2),
      M = o(f),
      L = n(26),
      p = o(L),
      d = n(129),
      j = o(d)
    n(232)
    var w = (function (e) {
      function t () {
        return a(this, t), r(this, e.apply(this, arguments))
      }
      return (
        u(t, e),
        (t.prototype.render = function () {
          return l.default.createElement(
            'div',
            { className: 'About' },
            l.default.createElement(p.default, {
              text: 'despre',
              bolded: 'noi',
              color: '#ef4924'
            }),
            l.default.createElement(
              'div',
              { className: 'content' },
              l.default.createElement(
                'div',
                { className: 'text' },
                l.default.createElement(
                  'p',
                  { className: 'about_text' },
                  'ROSEdu crede în importanța educației si a procesului de învățare. Credem că, prin comunicare și colaborare, putem învăța unul de la celălalt sa dezvoltăm lucruri noi și șa contribuim la proiecte existente. Open Source este pentru noi, însuși mediul in care suntem activi, formand o retea de oameni deschisi, proiecte ci activitați lipite impreuna de technologie si internet, ceea ce ne permite cooperarea si schimbul cosntant de idei.'
                ),
                l.default.createElement(
                  'p',
                  { className: 'about_text' },
                  'Majoritatea membrilor Rosedu sunt in prezent studenti sau absolventi ai Universitatii Politehnica din București, dar noi suntem intotdeauna bucuroși de noi memberi, indfiderent de unde provin. Te asteptam și pe tine!'
                )
              ),
              l.default.createElement(
                'div',
                { className: 'people' },
                this.people
              )
            )
          )
        }),
        s(t, [
          {
            key: 'people',
            get: function () {
              return this.props.people.map(function (e, t) {
                return l.default.createElement(j.default, i({ key: t }, e))
              })
            }
          }
        ]),
        t
      )
    })(c.Component)
    ;(w.propTypes = { people: M.default.arrayOf(M.default.object) }),
    (w.defaultProps = { people: [] }),
    (t.default = w),
    (e.exports = t.default)
  },
  232: function (e, t) {},
  285: function (e, t) {
    e.exports =
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1My42OSA1My42OSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM0NDYwYTA7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5mYWNlYm9vazwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IlNpdGUiPjxnIGlkPSJJY29ucyI+PGcgaWQ9IkNvbG9yIj48ZyBpZD0iTGluZS0xIj48cGF0aCBpZD0iRmFjZWJvb2siIGNsYXNzPSJjbHMtMSIgZD0iTTI4LjY4LDUzLjY5SDNhMywzLDAsMCwxLTMtM1YzQTMsMywwLDAsMSwzLDBINTAuNzNhMywzLDAsMCwxLDMsM1Y1MC43M2EzLDMsMCwwLDEtMywzSDM3VjMyLjloN2wxLTguMUgzN1YxOS42MmMwLTIuMzUuNjUtMy45NCw0LTMuOTRoNC4yOVY4LjQzYTU3LjM2LDU3LjM2LDAsMCwwLTYuMjUtLjMyYy02LjE5LDAtMTAuNDIsMy43OC0xMC40MiwxMC43MXY2aC03djguMWg3VjUzLjY5WiIvPjwvZz48L2c+PC9nPjwvZz48L2c+PC9zdmc+'
  },
  286: function (e, t) {
    e.exports =
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0Ny45NiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwMWM1ZDM7fS5jbHMtMntmaWxsOiNmOTNkN2M7fS5jbHMtM3tmaWxsOiNlMmFmNDY7fS5jbHMtNHtmaWxsOiM3NWQ3YmM7fS5jbHMtNXtmaWxsOiNjYTRhMmU7fS5jbHMtNntmaWxsOiMwMThhNzk7fS5jbHMtN3tmaWxsOiM3ODYxNTk7fS5jbHMtOHtmaWxsOiMwMDVlNjY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5zbGFjazwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IlNpdGUiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE1LjQzLDExLjU0LDI1LjU4LDljLjE0LDAsLjI4LS4wOS40Mi0uMTRhLjE0LjE0LDAsMCwxLC4yMSwwLDguODEsOC44MSwwLDAsMSwuNTMsMmMuNDUsMS44Mi45MiwzLjYzLDEuMzMsNS40NmEyLjMsMi4zLDAsMCwxLC4xMi45NS41My41MywwLDAsMS0uMTIuMjIsMS43NywxLjc3LDAsMCwxLS42OS4yNmwtOSwyLjI0YTIsMiwwLDAsMS0uODcuMTEuNTYuNTYsMCwwLDEtLjIyLS4xMSwxLjg1LDEuODUsMCwwLDEtLjMyLS44MWMtLjUxLTIuMjMtMS4wOC00LjQ0LTEuNjItNi42NkMxNS4zLDEyLjIsMTUuMTcsMTEuODYsMTUuNDMsMTEuNTRaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMzIuNjgsMzYuNDUsMjIuMTEsMzkuMDZjLS4yNi0uMDctLjMxLS4zLS4zNy0uNTEtLjY1LTIuNDktMS4yMS01LTEuODMtNy40OWEuODUuODUsMCwwLDEsMC0uMzcuNTUuNTUsMCwwLDEsLjExLS4yMiwxLjY3LDEuNjcsMCwwLDEsLjc1LS4zYzMtLjY3LDYtMS40OSw5LTIuMjFhMS44NCwxLjg0LDAsMCwxLC44LS4wOS41Ni41NiwwLDAsMSwuMjIuMTEsMTAuNjIsMTAuNjIsMCwwLDEsLjczLDIuNTRjLjQxLDEuNjcuODUsMy4zMywxLjIsNUMzMi43OSwzNS44NCwzMi45MiwzNi4xNiwzMi42OCwzNi40NVoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0zMC43NSwyOGwtLjEyLDBhLjc3Ljc3LDAsMCwxLS4yNy0uNTFxLTEuMTItNC41NS0yLjIxLTkuMWExLjg3LDEuODcsMCwwLDEtLjA2LS45NWwwLS4xMWExLDEsMCwwLDEsLjU4LS4zYzIuNDQtLjYxLDQuODctMS4yMyw3LjMxLTEuODNhMS4zNSwxLjM1LDAsMCwxLC40NCwwLC4yNS4yNSwwLDAsMSwuMTkuMTNsMi41NiwxMC41NGEuMTguMTgsMCwwLDEtLjA5LjJjLTIuNjIuNzYtNS4yOCwxLjM2LTcuOTMsMkEuNi42LDAsMCwxLDMwLjc1LDI4WiIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTIwLjA1LDMwLjU0bDAsLjEyYS43NS43NSwwLDAsMS0uNDQuMjZjLTIuNjUuNjEtNS4yNywxLjM1LTcuOTQsMS45YS4xOC4xOCwwLDAsMS0uMTgtLjE0Yy0uMjItMS40OC0uNjctMi45Mi0xLTQuMzdDMTAsMjYuNDgsOS41NCwyNC42NCw5LjEsMjIuOGMtLjA2LS4yNCwwLS41LS4zMy0uNjIsMC0uMTUuMDktLjIxLjIxLS4yNywyLjU1LS42Nyw1LjEzLTEuMjIsNy42OC0xLjg5YTEuNDksMS40OSwwLDAsMSwuNzMtLjA2bC4xNSwwYTEuMzksMS4zOSwwLDAsMSwuMjcuNjhjLjc1LDIuOTQsMS40Myw1LjksMi4xNyw4Ljg1QTEuNDMsMS40MywwLDAsMSwyMC4wNSwzMC41NFoiLz48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik0zMC43NSwyOGw3LTEuNzlhNC41MSw0LjUxLDAsMCwxLDEuNDQtLjI5Yy4zMy4xNy4zNy41MS40My44MS40OSwyLjI2LDEuMTIsNC40OSwxLjYyLDYuNzRhMS4zMywxLjMzLDAsMCwxLDAsLjg2bDAsMGExLjUsMS41LDAsMCwxLS43OS4zN2wtNi44MiwxLjdhMS4xLDEuMSwwLDAsMS0uODYsMCwuMjMuMjMsMCwwLDEtLjExLDBjLS4yNC0xLjYzLS43NS0zLjE5LTEuMDgtNC44QzMxLjM0LDMwLjQzLDMwLjksMjkuMjUsMzAuNzUsMjhaIi8+PHBhdGggY2xhc3M9ImNscy02IiBkPSJNMTcuMzksMjBhNTAuNzQsNTAuNzQsMCwwLDEtNS4xMSwxLjMzLDIwLjQ3LDIwLjQ3LDAsMCwxLTMuMzYuNzUsMS4wOCwxLjA4LDAsMCwxLS4zNC0uNjRDOCwxOS4wNSw3LjQzLDE2LjY3LDYuODUsMTQuM2ExLDEsMCwwLDEsMC0uNjV2MGExLjM4LDEuMzgsMCwwLDEsLjc4LS4zOWMyLjMxLS42LDQuNjQtMS4xMyw3LTEuN2ExLjEsMS4xLDAsMCwxLC43MiwwbC4xMSwwYy4zMywyLDEsNCwxLjQxLDZDMTcsMTguMzUsMTcuMjEsMTkuMTYsMTcuMzksMjBaIi8+PHBhdGggY2xhc3M9ImNscy03IiBkPSJNMTEuNTksMzIuNzRjMi4wOC0uNjYsNC4yMi0xLjA5LDYuMzQtMS42Mi42OS0uMTcsMS4zOS0uMzEsMi4wOC0uNDZsMi4xLDguNGEuMS4xLDAsMCwxLDAsLjA4LDEsMSwwLDAsMS0uNTkuMjljLTIuNDEuNjItNC44NCwxLjE5LTcuMjYsMS43OGExLjI0LDEuMjQsMCwwLDEtLjU5LDBsLS4xMiwwYTEsMSwwLDAsMS0uMzItLjY1Yy0uNS0yLjMtMS4xNi00LjU3LTEuNjUtNi44N0MxMS41LDMzLjM1LDExLjM2LDMzLDExLjU5LDMyLjc0WiIvPjxwYXRoIGNsYXNzPSJjbHMtOCIgZD0iTTM2LjUzLDE1LjIzcS00LjE4LDEuMTUtOC40MiwyLjA5Yy0uNjYtMi44LTEuNDMtNS41OC0yLTguNDEuMTMtLjI5LjQyLS4zMy42Ny0uMzksMi4zMi0uNTgsNC42My0xLjIsNy0xLjcxYTEuNzcsMS43NywwLDAsMSwuNzMsMGwuMTEsMGExLjMxLDEuMzEsMCwwLDEsLjMzLjczQzM1LjQ0LDkuNzUsMzYsMTIsMzYuNTMsMTQuMTYsMzYuNjIsMTQuNTEsMzYuNzksMTQuODgsMzYuNTMsMTUuMjNaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNi44NiwxMy42NWwyLjA3LDguNC0uMTUuMTNjLTEuMS4yNy0yLjIuNTUtMy4zLjhBNC40Miw0LjQyLDAsMCwxLC4xMiwxOS43NmE0LjQ1LDQuNDUsMCwwLDEsMy4zLTUuMjZDNC41NiwxNC4yLDUuNzEsMTMuOTMsNi44NiwxMy42NVoiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0xMy42Niw0MS4yMmMxLjg4LS42NSwzLjg1LTEsNS43Ny0xLjQ4YTE3LjEsMTcuMSwwLDAsMSwyLjY2LS42MWMuMjgsMS4xNS41NywyLjI5LjgzLDMuNDVhNC4zMiw0LjMyLDAsMCwxLTMsNS4yMSw0LjI3LDQuMjcsMCwwLDEtNS4yNS0yLjYzQTE5LjM1LDE5LjM1LDAsMCwxLDEzLjY2LDQxLjIyWiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTM0LjQ5LDYuNzYsMjcsOC42OGwtLjg2LjIzLS4xMiwwYy0uMjYtMS4xMy0uNTItMi4yNS0uNzctMy4zOEE0LjQ1LDQuNDUsMCwwLDEsMjguNC4xMmE0LjQ2LDQuNDYsMCwwLDEsNS4zMywzLjMzQzM0LDQuNTUsMzQuMjQsNS42NiwzNC40OSw2Ljc2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTQxLjI4LDM0LjM2bC0xLjkzLTcuNzhjLS4wNS0uMjEtLjEyLS40My0uMTctLjY0YS4zLjMsMCwwLDAsMC0uMTFsMy4wOS0uNzNhNC4zOSw0LjM5LDAsMSwxLDIuMTQsOC41QzQzLjM5LDMzLjg2LDQyLjMzLDM0LjEsNDEuMjgsMzQuMzZaIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTUuMzIsMTEuNSw4LjIxLDEzLjNjLS40NS4xMS0uOS4yMS0xLjM2LjMxLS4yMS0uOTEtLjQ0LTEuODItLjYyLTIuNzRBNC4zNSw0LjM1LDAsMCwxLDE0LjczLDlDMTUsOS44MiwxNS4xMywxMC42NiwxNS4zMiwxMS41WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTMyLjc5LDM2LjQ5bDguNDgtMi4wOWMuMjEuODkuNDQsMS43Ny42MiwyLjY2QTQuMzYsNC4zNiwwLDAsMSwzMy4zOCwzOUMzMy4xNiwzOC4xNywzMywzNy4zMywzMi43OSwzNi40OVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xMS41OSwzMi43NHEuODQsMy41NCwxLjY3LDcuMDdjLjExLjQ1LjE5LjkxLjI4LDEuMzYtMS40MS4zMS0yLjc3LDEtNC4yNy42NWE0LjM4LDQuMzgsMCwwLDEtMy41OC00LjA4LDQuNDMsNC40MywwLDAsMSwzLjI3LTQuNDJjLjgzLS4yMywxLjY3LS40MywyLjUxLS42NFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zNi41MywxNS4yM3EtLjkzLTMuOTItMS44NS03Ljg1YzAtLjE5LS4wNS0uMzgtLjA4LS41OGExMC4wNywxMC4wNywwLDAsMSwzLjc2LS42N0E0LjM4LDQuMzgsMCwwLDEsNDIuMjcsMTBhNC40NSw0LjQ1LDAsMCwxLTMuMiw0LjY4Yy0uOC4yNC0xLjYyLjQyLTIuNDMuNjNaIi8+PC9nPjwvZz48L3N2Zz4='
  },
  287: function (e, t) {
    e.exports =
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1My44MSA0NC44NCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwMGFhZWM7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT50d2l0dGVyPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iU2l0ZSI+PGcgaWQ9Ikljb25zIj48ZyBpZD0iQ29sb3IiPjxnIGlkPSJMaW5lLTEiPjxwYXRoIGlkPSJUd2l0dGVyIiBjbGFzcz0iY2xzLTEiIGQ9Ik01My44MSw1LjMxYTIxLjU2LDIxLjU2LDAsMCwxLTYuMzQsMS43OEExMS4zLDExLjMsMCwwLDAsNTIuMzMuODNhMjEuNzQsMjEuNzQsMCwwLDEtNywyLjc0QTEwLjg5LDEwLjg5LDAsMCwwLDM3LjI1LDBhMTEuMTgsMTEuMTgsMCwwLDAtMTEsMTEuMzIsMTEuNTUsMTEuNTUsMCwwLDAsLjI4LDIuNThBMzEuMDgsMzEuMDgsMCwwLDEsMy43NSwyLjA3YTExLjUzLDExLjUzLDAsMCwwLTEuNDksNS43LDExLjQsMTEuNCwwLDAsMCw0LjkxLDkuNDIsMTAuODQsMTAuODQsMCwwLDEtNS0xLjQxdi4xNEExMS4yNSwxMS4yNSwwLDAsMCwxMSwyN2ExMC41MywxMC41MywwLDAsMS0yLjkxLjRBMTAuNzIsMTAuNzIsMCwwLDEsNiwyNy4yMWExMS4wOCwxMS4wOCwwLDAsMCwxMC4zMSw3Ljg2QTIxLjgsMjEuOCwwLDAsMSwyLjYzLDM5LjkyLDIyLjEsMjIuMSwwLDAsMSwwLDM5Ljc2YTMwLjc0LDMwLjc0LDAsMCwwLDE2LjkyLDUuMDhjMjAuMzEsMCwzMS40MS0xNy4yNSwzMS40MS0zMi4yMSwwLS40OSwwLTEsMC0xLjQ3YTIyLjY2LDIyLjY2LDAsMCwwLDUuNTEtNS44NiIvPjwvZz48L2c+PC9nPjwvZz48L2c+PC9zdmc+'
  },
  124: function (e, t, n) {
    'use strict'
    function o (e) {
      return e && e.__esModule ? e : { default: e }
    }
    function a (e, t) {
      if (!(e instanceof t)) { throw new TypeError('Cannot call a class as a function') }
    }
    function r (e, t) {
      if (!e) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      }
      return !t || (typeof t !== 'object' && typeof t !== 'function') ? e : t
    }
    function u (e, t) {
      if (typeof t !== 'function' && t !== null) {
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        )
      }(e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
      t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t))
    }
    t.__esModule = !0
    var i = n(1),
      s = o(i),
      c = n(131),
      l = o(c),
      f = n(77),
      M = o(f),
      L = n(285),
      p = o(L),
      d = n(287),
      j = o(d),
      w = n(286),
      y = o(w)
    n(233)
    var m = n(2),
      N = (o(m),
      function (e) {
        var t = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return t.test(e)
      }),
      h = function (e) {
        return e !== ''
      },
      g = (function (e) {
        function t () {
          var n, o, u
          a(this, t)
          for (var i = arguments.length, s = Array(i), c = 0; c < i; c++) { s[c] = arguments[c] }
          return (
            (n = o = r(this, e.call.apply(e, [this].concat(s)))),
            (o.state = {
              name: '',
              email: '',
              message: '',
              messageSent: !1,
              messageError: !1
            }),
            (o.postMessageHandler = function () {
              if (h(o.state.name) && h(o.state.message) && N(o.state.email)) {
                console.log('wt')
                var e = {
                    'entry.649419642': o.state.name,
                    'entry.2000347351': o.state.email,
                    'entry.792207788': o.state.message
                  },
                  t = []
                for (var n in e) { t.push(encodeURIComponent(n) + '=' + encodeURIComponent(e[n])) }
                var a = t.join('&').replace(/%20/g, '+'),
                  r =
                    'https://docs.google.com/forms/u/2/d/e/1FAIpQLSe0M5G-sZuRrAPbNbjKla--6DT-nFPjt5SCWYO5__oiXK4HKA/formResponse'
                return fetch(r, {
                  method: 'POST',
                  mode: 'no-cors',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
                  body: a
                }).then(function (e) {
                  return o.setState({
                    messageSent: e.status === 0,
                    messageError: e.status !== 0
                  })
                })
              }
            }),
            (o.onChangeName = function (e) {
              var t = e.target.value
              o.setState({ name: t })
            }),
            (o.onChangeEmail = function (e) {
              var t = e.target.value
              o.setState({ email: t })
            }),
            (o.onChangeMessage = function (e) {
              var t = e.target.value
              o.setState({ message: t })
            }),
            (u = n),
            r(o, u)
          )
        }
        return (
          u(t, e),
          (t.prototype.render = function () {
            var e
            return (
              console.log(this.state),
              s.default.createElement(
                'div',
                { className: 'Form' },
                s.default.createElement(
                  'p',
                  null,
                  'Fiind o comunitate de oameni entuziasmați de tehnologie si programare, sediul nostru se afla in cadrul Facultății de Automatică si Calculatoare, din cadrul Universității Politehnica București. Aici desfăsurăm și majoritatea proiectelor la care ești binevenit să participi sau să ne ajuti sa le organizam. Pentru a putea lua legatura cu tine, te rugăm să ne trimiți un mesaj, completând formularul de mai jos, urmând ca noi sa luam legatura cu tine in cel mai scurt timp posibil.',
                  s.default.createElement('br', null),
                  s.default.createElement('br', null),
                  'Abia asteptam sa colaboram impreuma.'
                ),
                s.default.createElement(
                  'div',
                  { className: 'social' },
                  s.default.createElement(
                    'span',
                    null,
                    s.default.createElement('img', {
                      src: j.default
                    }),
                    '@rosedu'
                  ),
                  s.default.createElement(
                    'span',
                    null,
                    s.default.createElement('img', { src: p.default }),
                    '/rosedu'
                  ),
                  s.default.createElement(
                    'span',
                    null,
                    s.default.createElement('img', { src: y.default }),
                    '#rosedu'
                  )
                ),
                this.state.messageSent
                  ? s.default.createElement(
                    'div',
                    null,
                    s.default.createElement(
                      'div',
                      { className: 'message_sent' },
                      'Mesajul a fost trimis!'
                    ),
                    s.default.createElement('br', null),
                    s.default.createElement(
                      'div',
                      { className: 'message_sent_details' },
                      'Vom raspunde in cel mai scurt timp posibil.',
                      ' '
                    )
                  )
                  : s.default.createElement(
                    'div',
                    { className: 'form' },
                    s.default.createElement(l.default, {
                      id: 'name_input',
                      label: 'Nume',
                      value: this.state.name,
                      onChange: this.onChangeName
                    }),
                    s.default.createElement(l.default, {
                      id: 'email_input',
                      label: 'E-mail',
                      validator: N,
                      value: this.state.email,
                      onChange: this.onChangeEmail
                    }),
                    s.default.createElement(
                      l.default,
                      ((e = {
                        id: 'mesaj_input',
                        label: 'Mesaj',
                        value: this.state.message
                      }),
                      (e.value = this.state.message),
                      (e.onChange = this.onChangeMessage),
                      e)
                    ),
                    this.state.messageSent === !1 &&
                      this.state.messageError === !0
                      ? s.default.createElement(
                        'div',
                        null,
                        s.default.createElement(
                          'div',
                          { className: 'message_error' },
                          'Ne pare rau dar mesajul nu a putut fi primit.'
                        ),
                        s.default.createElement(
                          'div',
                          { className: 'message_error_details' },
                          'Incercati din nou in scurt timp.'
                        )
                      )
                      : null,
                    s.default.createElement(
                      M.default,
                      { onClick: this.postMessageHandler },
                      ' Trimite mesaj '
                    )
                  )
              )
            )
          }),
          t
        )
      })(i.Component)
    ;(g.propTypes = {}), (t.default = g), (e.exports = t.default)
  },
  233: function (e, t) {},
  125: function (e, t, n) {
    'use strict'
    function o (e) {
      return e && e.__esModule ? e : { default: e }
    }
    function a (e, t) {
      if (!(e instanceof t)) { throw new TypeError('Cannot call a class as a function') }
    }
    function r (e, t) {
      if (!e) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      }
      return !t || (typeof t !== 'object' && typeof t !== 'function') ? e : t
    }
    function u (e, t) {
      if (typeof t !== 'function' && t !== null) {
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        )
      }(e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
      t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t))
    }
    t.__esModule = !0
    var i = n(1),
      s = o(i),
      c = n(26),
      l = o(c),
      f = n(124),
      M = o(f)
    n(234)
    var L = (function (e) {
      function t () {
        return a(this, t), r(this, e.apply(this, arguments))
      }
      return (
        u(t, e),
        (t.prototype.render = function () {
          return s.default.createElement(
            'div',
            { className: 'Contact' },
            s.default.createElement(l.default, {
              text: 'contact',
              color: '#23a94b'
            }),
            s.default.createElement(
              'div',
              { className: 'content' },
              s.default.createElement(M.default, null),
              s.default.createElement('iframe', {
                className: 'Map',
                src:
                  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.874500050432!2d26.045563415467942!3d44.43573650949407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201ebafcdf7a3%3A0xeafb513bd76c5277!2sComputer+Science+College!5e0!3m2!1sen!2sro!4v1535121641646'
              })
            )
          )
        }),
        t
      )
    })(i.Component)
    ;(L.propTypes = {}),
    (L.defaultProps = {}),
    (t.default = L),
    (e.exports = t.default)
  },
  234: function (e, t) {},
  288: function (e, t, n) {
    e.exports = n.p + 'static/facebook.cada92db.png'
  },
  289: function (e, t, n) {
    e.exports = n.p + 'static/logoWhite.04bdedb0.svg'
  },
  290: function (e, t, n) {
    e.exports = n.p + 'static/logo_principal.07d6130c.jpg'
  },
  291: function (e, t) {
    e.exports =
      'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI3Ljg1NyAyNy44NTciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI3Ljg1NyAyNy44NTc7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yLjIwMyw1LjMzMWwxMC4wMzQsNy45NDhjMC40NTUsMC4zNiwxLjA4MiwwLjUyLDEuNjkxLDAuNDljMC42MDgsMC4wMywxLjIzNS0wLjEyOSwxLjY5LTAuNDkgICAgbDEwLjAzNC03Ljk0OGMwLjgwNC0wLjYzMywwLjYyMi0xLjE1Mi0wLjM5OC0xLjE1MkgxMy45MjlIMi42MDRDMS41ODMsNC4xNzksMS40MDEsNC42OTgsMi4yMDMsNS4zMzF6IiBmaWxsPSIjRkZGRkZGIi8+CgkJPHBhdGggZD0iTTI2LjM3Nyw3LjQyOGwtMTAuOTY1LDguMzI1Yy0wLjQxLDAuMzA4LTAuOTQ3LDAuNDU4LTEuNDgyLDAuNDUxICAgIGMtMC41MzYsMC4wMDctMS4wNzMtMC4xNDQtMS40ODMtMC40NTFMMS40OCw3LjQyOEMwLjY2Niw2LjgxMSwwLDcuMTQyLDAsOC4xNjN2MTMuNjU5YzAsMS4wMjEsMC44MzYsMS44NTcsMS44NTcsMS44NTdoMTIuMDcxSDI2ICAgIGMxLjAyMSwwLDEuODU3LTAuODM2LDEuODU3LTEuODU3VjguMTYzQzI3Ljg1Nyw3LjE0MiwyNy4xOTEsNi44MTEsMjYuMzc3LDcuNDI4eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgoK'
  },
  292: function (e, t) {
    e.exports =
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2Mi40NyA2Mi40MSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5zbGFjazwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02Mi4yOSwzNi43MUE1LjgsNS44LDAsMCwwLDU1LDMyLjY2Yy0xLjM0LjMzLTIuNjguNjQtNCwxTDQ3LjY5LDE5Ljg5aDBjMS4wNi0uMjcsMi4xMi0uNTIsMy4xNy0uODNBNS43OSw1Ljc5LDAsMCwwLDU1LDEzYTUuNzEsNS43MSwwLDAsMC01LjEtNWMtMS43MS0uMTktMy4yOS40NC00Ljg5Ljg3bC0uMTQtLjA1Yy0uMzMtMS40NC0uNjQtMi44OC0xLTQuMzFBNS44LDUuOCwwLDAsMCwzNywuMTZhNS44LDUuOCwwLDAsMC00LjEzLDdjLjMzLDEuNDcuNjcsMi45NCwxLDQuNDFoMGMtLjE4LjA2LS4zNi4xMy0uNTQuMThMMjAuMDgsMTUsMTkuOTQsMTVoMGMtLjI1LTEuMDktLjQ4LTIuMTktLjc2LTMuMjhBNS42Nyw1LjY3LDAsMCwwLDguMTEsMTQuMTVjLjIzLDEuMi41NCwyLjM4LjgxLDMuNTd2LjA1Yy0xLjQ5LjM3LTMsLjcyLTQuNDgsMS4xQTUuNzksNS43OSwwLDAsMCwuMTUsMjUuNzFhNS43Niw1Ljc2LDAsMCwwLDcsNC4yYzEuNDQtLjMzLDIuODctLjcsNC4zLTFoMGMuMzYuMTUuMzUuNS40My44LjU4LDIuMzksMS4xNyw0Ljc4LDEuNzQsNy4xNy40NSwxLjg5LDEsMy43NiwxLjMzLDUuNjloMGMtMS4wOS4yOC0yLjE5LjUzLTMuMjcuODNhNS43Nyw1Ljc3LDAsMCwwLTQuMjUsNS43NSw1LjcsNS43LDAsMCwwLDQuNjYsNS4zMWMyLC40MSwzLjczLS40NSw1LjU2LS44NGgwbC4xNi4wNkEyNS4xOCwyNS4xOCwwLDAsMCwxOSw1OC43N2E1LjU2LDUuNTYsMCwwLDAsNi44MywzLjQyLDUuNjIsNS42MiwwLDAsMCw0LTYuNzhjLS4zMy0xLjUtLjcyLTMtMS4wOC00LjQ5aDBhLjEzLjEzLDAsMCwwLDAtLjFoMGwxMy43NS0zLjM5YS4zLjMsMCwwLDAsLjE0LDBjLjI2LDEuMDkuNDksMi4xOS43NywzLjI3QTUuNjcsNS42NywwLDAsMCw1NC41LDQ4LjIyYy0uMjMtMS4xNi0uNTMtMi4zMS0uOC0zLjQ2aDBsMCwwYzEuMzctLjMzLDIuNzUtLjY1LDQuMTEtMUE1LjgsNS44LDAsMCwwLDYyLjI5LDM2LjcxWm0tMjMuNTUtLjMzYy0zLjkuOTQtNy43OCwyLTExLjcsMi44OGEyLjMyLDIuMzIsMCwwLDAtLjkxLjM1QTIuMTcsMi4xNywwLDAsMCwyNiwzOC40M2MtMS0zLjgzLTEuODUtNy42OC0yLjgyLTExLjUxYTIuNjYsMi42NiwwLDAsMC0uMjMtLjczQTMsMywwLDAsMCwyNCwyNmMzLjktMSw3Ljc5LTIsMTEuNjgtMi45MmEyLjQyLDIuNDIsMCwwLDAsLjg2LS4zMiwyLjcxLDIuNzEsMCwwLDAsLjEsMS4xUTM4LDI5LjgzLDM5LjUsMzUuNzVhMS4zOSwxLjM5LDAsMCwwLC4yLjVBMi42NiwyLjY2LDAsMCwwLDM4Ljc0LDM2LjM4WiIvPjwvZz48L2c+PC9zdmc+'
  },
  126: function (e, t, n) {
    'use strict'
    function o (e) {
      return e && e.__esModule ? e : { default: e }
    }
    function a (e, t) {
      if (!(e instanceof t)) { throw new TypeError('Cannot call a class as a function') }
    }
    function r (e, t) {
      if (!e) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      }
      return !t || (typeof t !== 'object' && typeof t !== 'function') ? e : t
    }
    function u (e, t) {
      if (typeof t !== 'function' && t !== null) {
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        )
      }(e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
      t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t))
    }
    t.__esModule = !0
    var i = n(1),
      s = o(i),
      c = n(41),
      l = o(c),
      f = n(288),
      M = o(f),
      L = n(290),
      p = o(L),
      d = n(289),
      j = o(d),
      w = n(292),
      y = o(w),
      m = n(291),
      N = o(m)
    n(235)
    var h = (function (e) {
      function t () {
        return a(this, t), r(this, e.apply(this, arguments))
      }
      return (
        u(t, e),
        (t.prototype.render = function () {
          return s.default.createElement(
            'div',
            { className: 'Header' },
            s.default.createElement(
              'header',
              null,
              s.default.createElement('img', { src: j.default, alt: '' }),
              s.default.createElement(
                'nav',
                null,
                s.default.createElement(
                  'a',
                  { href: '#about' },
                  s.default.createElement('span', null, 'despre noi')
                ),
                s.default.createElement(
                  'a',
                  { href: '#projects' },
                  s.default.createElement('span', null, 'proiecte')
                ),
                s.default.createElement(
                  'a',
                  { href: '#contact' },
                  s.default.createElement('span', null, 'contact')
                ),
                s.default.createElement(
                  'a',
                  { href: 'https://rosedu.herokuapp.com/', target: '_blank' },
                  s.default.createElement('img', { src: y.default, alt: '' })
                ),
                s.default.createElement(
                  'a',
                  {
                    href: 'https://www.facebook.com/rosedu.org',
                    target: '_blank'
                  },
                  s.default.createElement('img', { src: M.default, alt: '' })
                ),
                s.default.createElement(
                  'a',
                  {
                    href: 'http://lists.rosedu.org/listinfo/rosedu-general',
                    target: '_blank'
                  },
                  s.default.createElement('img', { src: N.default, alt: '' })
                )
              ),
              s.default.createElement(
                l.default,
                { primary: !0, target: '#sponsorship' },
                'Susține ROSEdu!'
              )
            ),
            s.default.createElement(
              'main',
              null,
              s.default.createElement(
                'div',
                { className: 'text' },
                s.default.createElement('h2', null, 'Susținem o educație'),
                s.default.createElement('h1', null, 'open source'),
                s.default.createElement(
                  'p',
                  null,
                  'ROSEdu este o organizație Open Source bazate pe o comunitate formată din programări și entuziașți de software. Misiunea pentru care suntem foarte dedidacați este aceea de a iniția, sprijinii și dezvolta educația bazată pe valorile Open Source.'
                ),
                s.default.createElement(
                  l.default,
                  { target: '#projects' },
                  ' ',
                  'Vezi proiectele noastre',
                  ' '
                )
              ),
              s.default.createElement('img', {
                className: 'header_logo',
                src: p.default,
                alt: ''
              })
            )
          )
        }),
        t
      )
    })(i.Component)
    ;(h.propTypes = {}),
    (h.defaultProps = {}),
    (t.default = h),
    (e.exports = t.default)
  },
  235: function (e, t) {},
  127: function (e, t, n) {
    'use strict'
    function o (e) {
      return e && e.__esModule ? e : { default: e }
    }
    function a (e, t) {
      if (!(e instanceof t)) { throw new TypeError('Cannot call a class as a function') }
    }
    function r (e, t) {
      if (!e) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      }
      return !t || (typeof t !== 'object' && typeof t !== 'function') ? e : t
    }
    function u (e, t) {
      if (typeof t !== 'function' && t !== null) {
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        )
      }(e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
      t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t))
    }
    t.__esModule = !0
    var i =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var o in n) { Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]) }
          }
          return e
        },
      s = n(1),
      c = o(s),
      l = n(2),
      f = o(l)
    n(236)
    var M = n(26),
      L = o(M),
      p = n(77),
      d = (o(p), n(41)),
      j = o(d),
      w = n(130),
      y = o(w),
      m = (function (e) {
        function t () {
          return a(this, t), r(this, e.apply(this, arguments))
        }
        return (
          u(t, e),
          (t.prototype.render = function () {
            var e = this.props.projects
            return c.default.createElement(
              'div',
              { className: 'Projects' },
              c.default.createElement(L.default, {
                text: 'proiecte',
                color: '#fff'
              }),
              c.default.createElement(
                'div',
                { className: 'content' },
                c.default.createElement(
                  'div',
                  { className: 'text' },
                  c.default.createElement(
                    'div',
                    { className: 'text_content' },
                    c.default.createElement(
                      'p',
                      null,
                      'Fiind o comunitate de oameni carora le place sa stie cat mai multe, proiectele noastre acopera multe arii din domeniul IT. Daca doresti sa participi la proiectele noastre te asteptam sa ne contactezi si sa ne cunoastem.'
                    ),
                    c.default.createElement(
                      'p',
                      null,
                      'In cazul in care ți-ar plăcea mai mult să ajuți la partea organizatorică și ai experiența cu lucruri precum Linux, programare funcțională, programare orientată pe obiecte, proiecte Open Source și ești dornic să o trimiți mai departe, te așteptăm să ne ajuți să îmbunătățim împreună educația.'
                    )
                  ),
                  c.default.createElement(
                    j.default,
                    { target: '#contact' },
                    'Vrei să te implici ?'
                  )
                ),
                c.default.createElement(
                  'div',
                  { className: 'list', style: { marginLeft: '70px' } },
                  e.map(function (e, t) {
                    return c.default.createElement(y.default, i({ key: t }, e))
                  })
                )
              )
            )
          }),
          t
        )
      })(s.Component)
    ;(m.propTypes = { projects: f.default.arrayOf(f.default.object) }),
    (m.defaultProps = { projects: [] }),
    (t.default = m),
    (e.exports = t.default)
  },
  236: function (e, t) {},
  128: function (e, t, n) {
    'use strict'
    function o (e) {
      return e && e.__esModule ? e : { default: e }
    }
    function a (e, t) {
      if (!(e instanceof t)) { throw new TypeError('Cannot call a class as a function') }
    }
    function r (e, t) {
      if (!e) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      }
      return !t || (typeof t !== 'object' && typeof t !== 'function') ? e : t
    }
    function u (e, t) {
      if (typeof t !== 'function' && t !== null) {
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        )
      }(e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
      t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t))
    }
    t.__esModule = !0
    var i = n(1),
      s = o(i),
      c = n(26),
      l = o(c),
      f = n(41),
      M = o(f)
    n(237)
    var L = (function (e) {
      function t () {
        return a(this, t), r(this, e.apply(this, arguments))
      }
      return (
        u(t, e),
        (t.prototype.render = function () {
          return s.default.createElement(
            'div',
            { className: 'Sponsorship' },
            s.default.createElement(l.default, {
              text: 'Susține ROSEdu',
              color: 'white'
            }),
            s.default.createElement(
              'div',
              { className: 'content' },
              s.default.createElement(
                'p',
                { className: 'content_text' },
                'Dacă dorești să susții activitățile organizației ROSEdu, avem aici mai multe variante prin care poți face asta. Daca ai nevoie de ajutor, sau ești interesat de un parteneriat, folosește formularul de contact și hai să ne auzim!'
              )
            ),
            s.default.createElement(
              'div',
              { className: 'boxes' },
              s.default.createElement(
                'div',
                { className: 'box' },
                s.default.createElement('h2', null, 'Voluntariat'),
                s.default.createElement(
                  'p',
                  null,
                  'Vrei să fii un voluntar ROSEdu ?'
                ),
                s.default.createElement(
                  M.default,
                  { primary: !0, target: '#contact' },
                  'Trimite mesaj'
                )
              ),
              s.default.createElement(
                'div',
                { className: 'box' },
                s.default.createElement('h2', null, 'Cont bancar'),
                s.default.createElement(
                  'p',
                  null,
                  'Ne poți susține și prin donarea unei sume de bani la următorul cont:'
                ),
                s.default.createElement('h3', null, 'RO99INGB12345678')
              ),
              s.default.createElement(
                'div',
                { className: 'box' },
                s.default.createElement('h2', null, 'Sponsorizare'),
                s.default.createElement(
                  'p',
                  null,
                  'Dacă dorești să avem un parteneriat direct de sponsorizare, trimite-ne un mesaj!'
                ),
                s.default.createElement(
                  M.default,
                  { primary: !0, target: '#contact' },
                  'Trimite mesaj'
                )
              )
            )
          )
        }),
        t
      )
    })(i.Component)
    ;(L.propTypes = {}),
    (L.defaultProps = {}),
    (t.default = L),
    (e.exports = t.default)
  },
  237: function (e, t) {},
  77: function (e, t, n) {
    'use strict'
    function o (e) {
      return e && e.__esModule ? e : { default: e }
    }
    function a (e, t) {
      if (!(e instanceof t)) { throw new TypeError('Cannot call a class as a function') }
    }
    function r (e, t) {
      if (!e) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      }
      return !t || (typeof t !== 'object' && typeof t !== 'function') ? e : t
    }
    function u (e, t) {
      if (typeof t !== 'function' && t !== null) {
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        )
      }(e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
      t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t))
    }
    t.__esModule = !0
    var i = (function () {
        function e (e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n]
            ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
          }
        }
        return function (t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t
        }
      })(),
      s = n(1),
      c = o(s),
      l = n(2),
      f = o(l)
    n(238)
    var M = (function (e) {
      function t () {
        return a(this, t), r(this, e.apply(this, arguments))
      }
      return (
        u(t, e),
        (t.prototype.render = function () {
          var e = this.props,
            t = e.children,
            n = e.onClick
          return c.default.createElement(
            'button',
            { className: this.className, onClick: n },
            t
          )
        }),
        i(t, [
          {
            key: 'className',
            get: function () {
              var e = this.props,
                t = e.primary,
                n = e.secondary,
                o = 'Button'
              return t && (o += ' primary'), n && (o += ' secondary'), o
            }
          }
        ]),
        t
      )
    })(s.Component)
    ;(M.propTypes = {
      primary: f.default.bool,
      secondary: f.default.bool,
      onClick: f.default.func
    }),
    (M.defaultProps = {
      primary: !1,
      secondary: !0,
      onClick: f.default.func
    }),
    (t.default = M),
    (e.exports = t.default)
  },
  238: function (e, t) {},
  41: function (e, t, n) {
    'use strict'
    function o (e) {
      return e && e.__esModule ? e : { default: e }
    }
    function a (e, t) {
      if (!(e instanceof t)) { throw new TypeError('Cannot call a class as a function') }
    }
    function r (e, t) {
      if (!e) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      }
      return !t || (typeof t !== 'object' && typeof t !== 'function') ? e : t
    }
    function u (e, t) {
      if (typeof t !== 'function' && t !== null) {
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        )
      }(e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
      t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t))
    }
    t.__esModule = !0
    var i = (function () {
        function e (e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n]
            ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
          }
        }
        return function (t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t
        }
      })(),
      s = n(1),
      c = o(s),
      l = n(2),
      f = o(l)
    n(239)
    var M = (function (e) {
      function t () {
        return a(this, t), r(this, e.apply(this, arguments))
      }
      return (
        u(t, e),
        (t.prototype.render = function () {
          var e = this.props,
            t = e.children,
            n = e.target
          return (
            console.log(n),
            c.default.createElement(
              'a',
              { className: this.className, href: n },
              t
            )
          )
        }),
        i(t, [
          {
            key: 'className',
            get: function () {
              var e = this.props,
                t = e.primary,
                n = e.secondary,
                o = 'ButtonLink'
              return t && (o += ' primary'), n && (o += ' secondary'), o
            }
          }
        ]),
        t
      )
    })(s.Component)
    ;(M.propTypes = {
      primary: f.default.bool,
      secondary: f.default.bool,
      target: f.default.string
    }),
    (M.defaultProps = {
      primary: !1,
      secondary: !0,
      target: f.default.string
    }),
    (t.default = M),
    (e.exports = t.default)
  },
  239: function (e, t) {},
  293: function (e, t, n) {
    e.exports = n.p + 'static/default.9af42ba9.png'
  },
  294: function (e, t) {
    e.exports =
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM0NDYwYTA7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5mYWNlYm9vazwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IlNpdGUiPjxnIGlkPSJJY29ucyI+PGcgaWQ9IkNvbG9yIj48ZyBpZD0iTGluZS0xIj48cGF0aCBpZD0iRmFjZWJvb2siIGNsYXNzPSJjbHMtMSIgZD0iTTE3LjA5LDMySDEuNzdBMS43NywxLjc3LDAsMCwxLDAsMzAuMjNWMS43N0ExLjc3LDEuNzcsMCwwLDEsMS43NywwSDMwLjIzQTEuNzcsMS43NywwLDAsMSwzMiwxLjc3VjMwLjIzQTEuNzcsMS43NywwLDAsMSwzMC4yMywzMkgyMi4wOFYxOS42MWg0LjE2bC42Mi00LjgzSDIyLjA4VjExLjdjMC0xLjQuMzktMi4zNSwyLjM5LTIuMzVIMjdWNWEzNC4xOSwzNC4xOSwwLDAsMC0zLjczLS4xOWMtMy42OSwwLTYuMjEsMi4yNS02LjIxLDYuMzh2My41NkgxMi45MnY0LjgzaDQuMTdWMzJaIi8+PC9nPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4='
  },
  129: function (e, t, n) {
    'use strict'
    function o (e) {
      return e && e.__esModule ? e : { default: e }
    }
    function a (e, t) {
      if (!(e instanceof t)) { throw new TypeError('Cannot call a class as a function') }
    }
    function r (e, t) {
      if (!e) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      }
      return !t || (typeof t !== 'object' && typeof t !== 'function') ? e : t
    }
    function u (e, t) {
      if (typeof t !== 'function' && t !== null) {
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        )
      }(e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
      t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t))
    }
    t.__esModule = !0
    var i = (function () {
        function e (e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n]
            ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
          }
        }
        return function (t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t
        }
      })(),
      s = n(1),
      c = o(s),
      l = n(2),
      f = o(l),
      M = n(294),
      L = o(M),
      p = n(293),
      d = o(p)
    n(240)
    var j = (function (e) {
      function t () {
        var n, o, u
        a(this, t)
        for (var i = arguments.length, s = Array(i), l = 0; l < i; l++) { s[l] = arguments[l] }
        return (
          (n = o = r(this, e.call.apply(e, [this].concat(s)))),
          (o.getSocialImage = function (e) {
            var t = e.url,
              n = e.img
            return t === ''
              ? null
              : c.default.createElement(
                'a',
                { href: t, target: '_blank' },
                c.default.createElement('img', { src: n, alt: '' })
              )
          }),
          (u = n),
          r(o, u)
        )
      }
      return (
        u(t, e),
        (t.prototype.render = function () {
          var e = this.props,
            t = e.name,
            n = e.position,
            o = this.photo,
            a = this.socialBlock
          return c.default.createElement(
            'div',
            { className: 'Person' },
            c.default.createElement(
              'div',
              { className: 'main' },
              c.default.createElement('img', { src: o, alt: '' }),
              a
            ),
            c.default.createElement('h1', null, t),
            c.default.createElement('h2', null, n)
          )
        }),
        i(t, [
          {
            key: 'socialBlock',
            get: function () {
              var e = this.props.facebook,
                t = this.getSocialImage
              return e === ''
                ? null
                : c.default.createElement(
                  'div',
                  { className: 'social' },
                  t({ url: e, img: L.default })
                )
            }
          },
          {
            key: 'photo',
            get: function () {
              var e = this.props.photo
              return e === '' ? d.default : e
            }
          }
        ]),
        t
      )
    })(s.Component)
    ;(j.propTypes = {
      photo: f.default.string,
      name: f.default.string,
      position: f.default.string,
      facebook: f.default.string
    }),
    (j.defaultProps = { photo: '', name: '', position: '', facebook: '' }),
    (t.default = j),
    (e.exports = t.default)
  },
  240: function (e, t) {},
  130: function (e, t, n) {
    'use strict'
    function o (e) {
      return e && e.__esModule ? e : { default: e }
    }
    function a (e, t) {
      if (!(e instanceof t)) { throw new TypeError('Cannot call a class as a function') }
    }
    function r (e, t) {
      if (!e) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      }
      return !t || (typeof t !== 'object' && typeof t !== 'function') ? e : t
    }
    function u (e, t) {
      if (typeof t !== 'function' && t !== null) {
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        )
      }(e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
      t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t))
    }
    t.__esModule = !0
    var i = n(1),
      s = o(i),
      c = n(2),
      l = o(c)
    n(241)
    var f = (function (e) {
      function t () {
        return a(this, t), r(this, e.apply(this, arguments))
      }
      return (
        u(t, e),
        (t.prototype.render = function () {
          var e = this.props,
            t = e.logo,
            n = e.title,
            o = e.path
          return s.default.createElement(
            'a',
            { href: o, className: 'Project' },
            s.default.createElement('img', { src: t, alt: n }),
            s.default.createElement(
              'div',
              { className: 'text' },
              s.default.createElement('h1', null, n)
            )
          )
        }),
        t
      )
    })(i.Component)
    ;(f.propTypes = {
      logo: l.default.string,
      title: l.default.string,
      website: l.default.string
    }),
    (f.defaultProps = { logo: '', title: '', website: '' }),
    (t.default = f),
    (e.exports = t.default)
  },
  241: function (e, t) {},
  131: function (e, t, n) {
    'use strict'
    function o (e) {
      return e && e.__esModule ? e : { default: e }
    }
    function a (e, t) {
      if (!(e instanceof t)) { throw new TypeError('Cannot call a class as a function') }
    }
    function r (e, t) {
      if (!e) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      }
      return !t || (typeof t !== 'object' && typeof t !== 'function') ? e : t
    }
    function u (e, t) {
      if (typeof t !== 'function' && t !== null) {
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        )
      }(e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
      t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t))
    }
    t.__esModule = !0
    var i = (function () {
        function e (e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n]
            ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
          }
        }
        return function (t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t
        }
      })(),
      s = n(1),
      c = o(s),
      l = n(2),
      f = o(l)
    n(242)
    var M = (function (e) {
      function t () {
        var n, o, u
        a(this, t)
        for (var i = arguments.length, s = Array(i), c = 0; c < i; c++) { s[c] = arguments[c] }
        return (
          (n = o = r(this, e.call.apply(e, [this].concat(s)))),
          (o.state = { value: '' }),
          (o.onChange = function (e) {
            var t = o.props.onChange,
              n = e.target.value
            o.setState({ value: n }), t(n)
          }),
          (u = n),
          r(o, u)
        )
      }
      return (
        u(t, e),
        (t.prototype.componentDidMount = function () {
          this.props.value !== '' && this.setState({ value: this.props.value })
        }),
        (t.prototype.componentWillReceiveProps = function (e) {
          e.value !== ''
            ? this.setState({ value: e.value })
            : e.acceptsBlankValue && this.setState({ value: '' })
        }),
        (t.prototype.render = function () {
          var e = this.props,
            t = e.label,
            n = e.type,
            o = this.state.value
          return c.default.createElement(
            'div',
            { className: this.className },
            c.default.createElement('input', {
              type: n,
              value: o,
              onChange: this.props.onChange
            }),
            c.default.createElement('label', null, ' ', t, ' '),
            this.image
          )
        }),
        i(t, [
          {
            key: 'inputIsValid',
            get: function () {
              var e = this.state.value,
                t = this.props.validator
              return e === '' || t(e)
            }
          },
          {
            key: 'className',
            get: function () {
              var e = this.state.value,
                t = 'TextInput'
              return (
                this.inputIsValid || (t += ' error'),
                e !== '' && (t += ' active'),
                t
              )
            }
          },
          {
            key: 'image',
            get: function () {
              var e = this.props.image
              return e !== ''
                ? c.default.createElement('img', {
                  src: e,
                  alt: '',
                  className: 'image'
                })
                : null
            }
          }
        ]),
        t
      )
    })(s.Component)
    ;(M.propTypes = {
      label: f.default.string,
      image: f.default.string,
      type: f.default.string,
      value: f.default.string,
      acceptsBlankValue: f.default.bool,
      validator: f.default.func,
      onChange: f.default.func
    }),
    (M.defaultProps = {
      label: '',
      image: '',
      type: 'text',
      value: '',
      acceptsBlankValue: !1,
      validator: function () {
        return !0
      },
      onChange: function () {}
    }),
    (t.default = M),
    (e.exports = t.default)
  },
  242: function (e, t) {},
  26: function (e, t, n) {
    'use strict'
    function o (e) {
      return e && e.__esModule ? e : { default: e }
    }
    function a (e, t) {
      if (!(e instanceof t)) { throw new TypeError('Cannot call a class as a function') }
    }
    function r (e, t) {
      if (!e) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      }
      return !t || (typeof t !== 'object' && typeof t !== 'function') ? e : t
    }
    function u (e, t) {
      if (typeof t !== 'function' && t !== null) {
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        )
      }(e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
      t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t))
    }
    t.__esModule = !0
    var i = (function () {
        function e (e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n]
            ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
          }
        }
        return function (t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t
        }
      })(),
      s = n(1),
      c = o(s),
      l = n(2),
      f = o(l)
    n(243)
    var M = (function (e) {
      function t () {
        return a(this, t), r(this, e.apply(this, arguments))
      }
      return (
        u(t, e),
        (t.prototype.render = function () {
          var e = this.props.text,
            t = this.bolded,
            n = this.style
          return c.default.createElement(
            'div',
            { className: 'Title', style: n },
            e,
            t
          )
        }),
        i(t, [
          {
            key: 'style',
            get: function () {
              var e = this.props.color
              return { color: e }
            }
          },
          {
            key: 'bolded',
            get: function () {
              var e = this.props.bolded
              return e === ''
                ? null
                : c.default.createElement('span', { className: 'bolded' }, e)
            }
          }
        ]),
        t
      )
    })(s.Component)
    ;(M.propTypes = {
      text: f.default.string,
      bolded: f.default.string,
      color: f.default.string
    }),
    (M.defaultProps = { text: '', bolded: '', color: 'currentColor' }),
    (t.default = M),
    (e.exports = t.default)
  },
  243: function (e, t) {},
  244: function (e, t) {},
  132: function (e, t, n) {
    'use strict'
    function o (e) {
      return e && e.__esModule ? e : { default: e }
    }
    function a (e, t) {
      if (!(e instanceof t)) { throw new TypeError('Cannot call a class as a function') }
    }
    function r (e, t) {
      if (!e) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      }
      return !t || (typeof t !== 'object' && typeof t !== 'function') ? e : t
    }
    function u (e, t) {
      if (typeof t !== 'function' && t !== null) {
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        )
      }(e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
      t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t))
    }
    t.__esModule = !0
    var i = n(1),
      s = o(i),
      c = n(267),
      l = o(c),
      f = n(126),
      M = o(f),
      L = n(123),
      p = o(L),
      d = n(127),
      j = o(d),
      w = n(128),
      y = o(w),
      m = n(125),
      N = o(m),
      h = n(121),
      g = o(h),
      b = n(122),
      E = o(b)
    n(244)
    var D = (function (e) {
      function t () {
        return a(this, t), r(this, e.apply(this, arguments))
      }
      return (
        u(t, e),
        (t.prototype.render = function () {
          return s.default.createElement(
            i.Fragment,
            null,
            s.default.createElement(M.default, null),
            s.default.createElement(
              l.default,
              { id: 'about' },
              s.default.createElement(p.default, { people: g.default })
            ),
            s.default.createElement(
              l.default,
              { id: 'projects' },
              s.default.createElement(j.default, { projects: E.default })
            ),
            s.default.createElement(
              l.default,
              { id: 'sponsorship' },
              s.default.createElement(y.default, null)
            ),
            s.default.createElement(
              l.default,
              { id: 'contact' },
              s.default.createElement(N.default, null)
            )
          )
        }),
        t
      )
    })(i.Component)
    ;(t.default = D), (e.exports = t.default)
  }
})
// # sourceMappingURL=component---src-pages-index-js-06764bbe8a58659c5876.js.map
