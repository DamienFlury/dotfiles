!function(e) {
    function t(t) {
        for (var n, o, a = t[0], i = t[1], s = 0, u = []; s < a.length; s++) o = a[s], r[o] && u.push(r[o][0]), 
        r[o] = 0;
        for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        for (l && l(t); u.length; ) u.shift()();
    }
    var n = {}, r = {
        0: 0
    };
    function o(e) {
        return a.p + "" + e + ".0b222797b81bf8200d9b.js";
    }
    function a(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, a), r.l = !0, r.exports;
    }
    a.e = function(e) {
        var t = [], n = r[e];
        if (0 !== n) if (n) t.push(n[2]); else {
            var i = new Promise(function(t, o) {
                n = r[e] = [ t, o ];
            });
            t.push(n[2] = i);
            var s, u = document.getElementsByTagName("head")[0], l = document.createElement("script");
            l.charset = "utf-8", l.timeout = 120, a.nc && l.setAttribute("nonce", a.nc), l.src = o(e), 
            s = function(t) {
                l.onerror = l.onload = null, clearTimeout(c);
                var n = r[e];
                if (0 !== n) {
                    if (n) {
                        var o = t && ("load" === t.type ? "missing" : t.type), a = t && t.target && t.target.src, i = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + a + ")");
                        i.type = o, i.request = a, n[1](i);
                    }
                    r[e] = void 0;
                }
            };
            var c = setTimeout(function() {
                s({
                    type: "timeout",
                    target: l
                });
            }, 12e4);
            l.onerror = l.onload = s, u.appendChild(l);
        }
        return Promise.all(t);
    }, a.m = e, a.c = n, a.d = function(e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        });
    }, a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, a.t = function(e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) a.d(n, r, function(t) {
            return e[t];
        }.bind(null, r));
        return n;
    }, a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return a.d(t, "a", t), t;
    }, a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, a.p = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/content/", a.oe = function(e) {
        throw e;
    };
    var i = window.equatioChromeWebpackJsonP = window.equatioChromeWebpackJsonP || [], s = i.push.bind(i);
    i.push = t, i = i.slice();
    for (var u = 0; u < i.length; u++) t(i[u]);
    var l = s;
    a(a.s = 69);
}([ function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "h", function() {
        return s;
    }), n.d(t, "createElement", function() {
        return s;
    }), n.d(t, "cloneElement", function() {
        return c;
    }), n.d(t, "Component", function() {
        return D;
    }), n.d(t, "render", function() {
        return U;
    }), n.d(t, "rerender", function() {
        return h;
    }), n.d(t, "options", function() {
        return o;
    });
    var r = function() {}, o = {}, a = [], i = [];
    function s(e, t) {
        var n, s, u, l, c = i;
        for (l = arguments.length; l-- > 2; ) a.push(arguments[l]);
        for (t && null != t.children && (a.length || a.push(t.children), delete t.children); a.length; ) if ((s = a.pop()) && void 0 !== s.pop) for (l = s.length; l--; ) a.push(s[l]); else "boolean" == typeof s && (s = null), 
        (u = "function" != typeof e) && (null == s ? s = "" : "number" == typeof s ? s = String(s) : "string" != typeof s && (u = !1)), 
        u && n ? c[c.length - 1] += s : c === i ? c = [ s ] : c.push(s), n = u;
        var p = new r();
        return p.nodeName = e, p.children = c, p.attributes = null == t ? void 0 : t, p.key = null == t ? void 0 : t.key, 
        void 0 !== o.vnode && o.vnode(p), p;
    }
    function u(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
    }
    var l = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
    function c(e, t) {
        return s(e.nodeName, u(u({}, e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
    }
    var p = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i, d = [];
    function f(e) {
        !e._dirty && (e._dirty = !0) && 1 == d.push(e) && (o.debounceRendering || l)(h);
    }
    function h() {
        var e, t = d;
        for (d = []; e = t.pop(); ) e._dirty && I(e);
    }
    function m(e, t, n) {
        return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && y(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
    }
    function y(e, t) {
        return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase();
    }
    function v(e) {
        var t = u({}, e.attributes);
        t.children = e.children;
        var n = e.nodeName.defaultProps;
        if (void 0 !== n) for (var r in n) void 0 === t[r] && (t[r] = n[r]);
        return t;
    }
    function g(e, t) {
        var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);
        return n.normalizedNodeName = e, n;
    }
    function b(e) {
        var t = e.parentNode;
        t && t.removeChild(e);
    }
    function w(e, t, n, r, o) {
        if ("className" === t && (t = "class"), "key" === t) ; else if ("ref" === t) n && n(null), 
        r && r(e); else if ("class" !== t || o) if ("style" === t) {
            if (r && "string" != typeof r && "string" != typeof n || (e.style.cssText = r || ""), 
            r && "object" == typeof r) {
                if ("string" != typeof n) for (var a in n) a in r || (e.style[a] = "");
                for (var a in r) e.style[a] = "number" == typeof r[a] && !1 === p.test(a) ? r[a] + "px" : r[a];
            }
        } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || ""); else if ("o" == t[0] && "n" == t[1]) {
            var i = t !== (t = t.replace(/Capture$/, ""));
            t = t.toLowerCase().substring(2), r ? n || e.addEventListener(t, x, i) : e.removeEventListener(t, x, i), 
            (e._listeners || (e._listeners = {}))[t] = r;
        } else if ("list" !== t && "type" !== t && !o && t in e) {
            try {
                e[t] = null == r ? "" : r;
            } catch (e) {}
            null != r && !1 !== r || "spellcheck" == t || e.removeAttribute(t);
        } else {
            var s = o && t !== (t = t.replace(/^xlink:?/, ""));
            null == r || !1 === r ? s ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (s ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r));
        } else e.className = r || "";
    }
    function x(e) {
        return this._listeners[e.type](o.event && o.event(e) || e);
    }
    var _ = [], k = 0, j = !1, S = !1;
    function E() {
        for (var e; e = _.pop(); ) o.afterMount && o.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
    function O(e, t, n, r, o, a) {
        k++ || (j = null != o && void 0 !== o.ownerSVGElement, S = null != e && !("__preactattr_" in e));
        var i = C(e, t, n, r, a);
        return o && i.parentNode !== o && o.appendChild(i), --k || (S = !1, a || E()), i;
    }
    function C(e, t, n, r, o) {
        var a = e, i = j;
        if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || o) ? e.nodeValue != t && (e.nodeValue = t) : (a = document.createTextNode(t), 
        e && (e.parentNode && e.parentNode.replaceChild(a, e), L(e, !0))), a.__preactattr_ = !0, 
        a;
        var s = t.nodeName;
        if ("function" == typeof s) return R(e, t, n, r);
        if (j = "svg" === s || "foreignObject" !== s && j, s = String(s), (!e || !y(e, s)) && (a = g(s, j), 
        e)) {
            for (;e.firstChild; ) a.appendChild(e.firstChild);
            e.parentNode && e.parentNode.replaceChild(a, e), L(e, !0);
        }
        var u = a.firstChild, l = a.__preactattr_, c = t.children;
        if (null == l) {
            l = a.__preactattr_ = {};
            for (var p = a.attributes, d = p.length; d--; ) l[p[d].name] = p[d].value;
        }
        return !S && c && 1 === c.length && "string" == typeof c[0] && null != u && void 0 !== u.splitText && null == u.nextSibling ? u.nodeValue != c[0] && (u.nodeValue = c[0]) : (c && c.length || null != u) && T(a, c, n, r, S || null != l.dangerouslySetInnerHTML), 
        P(a, t.attributes, l), j = i, a;
    }
    function T(e, t, n, r, o) {
        var a, i, s, u, l, c = e.childNodes, p = [], d = {}, f = 0, h = 0, y = c.length, v = 0, g = t ? t.length : 0;
        if (0 !== y) for (var w = 0; w < y; w++) {
            var x = c[w], _ = x.__preactattr_;
            null != (k = g && _ ? x._component ? x._component.__key : _.key : null) ? (f++, 
            d[k] = x) : (_ || (void 0 !== x.splitText ? !o || x.nodeValue.trim() : o)) && (p[v++] = x);
        }
        if (0 !== g) for (w = 0; w < g; w++) {
            var k;
            if (l = null, null != (k = (u = t[w]).key)) f && void 0 !== d[k] && (l = d[k], d[k] = void 0, 
            f--); else if (h < v) for (a = h; a < v; a++) if (void 0 !== p[a] && m(i = p[a], u, o)) {
                l = i, p[a] = void 0, a === v - 1 && v--, a === h && h++;
                break;
            }
            l = C(l, u, n, r), s = c[w], l && l !== e && l !== s && (null == s ? e.appendChild(l) : l === s.nextSibling ? b(s) : e.insertBefore(l, s));
        }
        if (f) for (var w in d) void 0 !== d[w] && L(d[w], !1);
        for (;h <= v; ) void 0 !== (l = p[v--]) && L(l, !1);
    }
    function L(e, t) {
        var n = e._component;
        n ? W(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), 
        !1 !== t && null != e.__preactattr_ || b(e), N(e));
    }
    function N(e) {
        for (e = e.lastChild; e; ) {
            var t = e.previousSibling;
            L(e, !0), e = t;
        }
    }
    function P(e, t, n) {
        var r;
        for (r in n) t && null != t[r] || null == n[r] || w(e, r, n[r], n[r] = void 0, j);
        for (r in t) "children" === r || "innerHTML" === r || r in n && t[r] === ("value" === r || "checked" === r ? e[r] : n[r]) || w(e, r, n[r], n[r] = t[r], j);
    }
    var q = [];
    function M(e, t, n) {
        var r, o = q.length;
        for (e.prototype && e.prototype.render ? (r = new e(t, n), D.call(r, t, n)) : ((r = new D(t, n)).constructor = e, 
        r.render = A); o--; ) if (q[o].constructor === e) return r.nextBase = q[o].nextBase, 
        q.splice(o, 1), r;
        return r;
    }
    function A(e, t, n) {
        return this.constructor(e, n);
    }
    function F(e, t, n, r, a) {
        e._disable || (e._disable = !0, e.__ref = t.ref, e.__key = t.key, delete t.ref, 
        delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || a ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r)), 
        r && r !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = r), 
        e.prevProps || (e.prevProps = e.props), e.props = t, e._disable = !1, 0 !== n && (1 !== n && !1 === o.syncComponentUpdates && e.base ? f(e) : I(e, 1, a)), 
        e.__ref && e.__ref(e));
    }
    function I(e, t, n, r) {
        if (!e._disable) {
            var a, i, s, l = e.props, c = e.state, p = e.context, d = e.prevProps || l, f = e.prevState || c, h = e.prevContext || p, m = e.base, y = e.nextBase, g = m || y, b = e._component, w = !1, x = h;
            if (e.constructor.getDerivedStateFromProps && (c = u(u({}, c), e.constructor.getDerivedStateFromProps(l, c)), 
            e.state = c), m && (e.props = d, e.state = f, e.context = h, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(l, c, p) ? w = !0 : e.componentWillUpdate && e.componentWillUpdate(l, c, p), 
            e.props = l, e.state = c, e.context = p), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, 
            e._dirty = !1, !w) {
                a = e.render(l, c, p), e.getChildContext && (p = u(u({}, p), e.getChildContext())), 
                m && e.getSnapshotBeforeUpdate && (x = e.getSnapshotBeforeUpdate(d, f));
                var j, S, C = a && a.nodeName;
                if ("function" == typeof C) {
                    var T = v(a);
                    (i = b) && i.constructor === C && T.key == i.__key ? F(i, T, 1, p, !1) : (j = i, 
                    e._component = i = M(C, T, p), i.nextBase = i.nextBase || y, i._parentComponent = e, 
                    F(i, T, 0, p, !1), I(i, 1, n, !0)), S = i.base;
                } else s = g, (j = b) && (s = e._component = null), (g || 1 === t) && (s && (s._component = null), 
                S = O(s, a, p, n || !m, g && g.parentNode, !0));
                if (g && S !== g && i !== b) {
                    var N = g.parentNode;
                    N && S !== N && (N.replaceChild(S, g), j || (g._component = null, L(g, !1)));
                }
                if (j && W(j), e.base = S, S && !r) {
                    for (var P = e, q = e; q = q._parentComponent; ) (P = q).base = S;
                    S._component = P, S._componentConstructor = P.constructor;
                }
            }
            for (!m || n ? _.unshift(e) : w || (e.componentDidUpdate && e.componentDidUpdate(d, f, x), 
            o.afterUpdate && o.afterUpdate(e)); e._renderCallbacks.length; ) e._renderCallbacks.pop().call(e);
            k || r || E();
        }
    }
    function R(e, t, n, r) {
        for (var o = e && e._component, a = o, i = e, s = o && e._componentConstructor === t.nodeName, u = s, l = v(t); o && !u && (o = o._parentComponent); ) u = o.constructor === t.nodeName;
        return o && u && (!r || o._component) ? (F(o, l, 3, n, r), e = o.base) : (a && !s && (W(a), 
        e = i = null), o = M(t.nodeName, l, n), e && !o.nextBase && (o.nextBase = e, i = null), 
        F(o, l, 1, n, r), e = o.base, i && e !== i && (i._component = null, L(i, !1))), 
        e;
    }
    function W(e) {
        o.beforeUnmount && o.beforeUnmount(e);
        var t = e.base;
        e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
        var n = e._component;
        n ? W(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), 
        e.nextBase = t, b(t), q.push(e), N(t)), e.__ref && e.__ref(null);
    }
    function D(e, t) {
        this._dirty = !0, this.context = t, this.props = e, this.state = this.state || {}, 
        this._renderCallbacks = [];
    }
    function U(e, t, n) {
        return O(n, e, {}, !1, t, !1);
    }
    u(D.prototype, {
        setState: function(e, t) {
            this.prevState || (this.prevState = this.state), this.state = u(u({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), 
            t && this._renderCallbacks.push(t), f(this);
        },
        forceUpdate: function(e) {
            e && this._renderCallbacks.push(e), I(this, 2);
        },
        render: function() {}
    });
    var B = {
        h: s,
        createElement: s,
        cloneElement: c,
        Component: D,
        render: U,
        rerender: h,
        options: o
    };
    t.default = B;
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
        return v;
    }), n.d(t, "e", function() {
        return oe;
    }), n.d(t, "d", function() {
        return ae;
    }), n.d(t, "b", function() {
        return Oe;
    }), n.d(t, "a", function() {
        return Ue;
    });
    var r = n(29), o = n.n(r), a = n(9), i = n.n(a), s = n(13), u = n.n(s), l = n(6), c = n.n(l), p = n(2), d = n(16), f = n.n(d), h = n(14), m = n.n(h), y = {
        locale: "en",
        pluralRuleFunction: function(e, t) {
            var n = String(e).split("."), r = !n[1], o = Number(n[0]) == e, a = o && n[0].slice(-1), i = o && n[0].slice(-2);
            return t ? 1 == a && 11 != i ? "one" : 2 == a && 12 != i ? "two" : 3 == a && 13 != i ? "few" : "other" : 1 == e && r ? "one" : "other";
        },
        fields: {
            year: {
                displayName: "year",
                relative: {
                    0: "this year",
                    1: "next year",
                    "-1": "last year"
                },
                relativeTime: {
                    future: {
                        one: "in {0} year",
                        other: "in {0} years"
                    },
                    past: {
                        one: "{0} year ago",
                        other: "{0} years ago"
                    }
                }
            },
            month: {
                displayName: "month",
                relative: {
                    0: "this month",
                    1: "next month",
                    "-1": "last month"
                },
                relativeTime: {
                    future: {
                        one: "in {0} month",
                        other: "in {0} months"
                    },
                    past: {
                        one: "{0} month ago",
                        other: "{0} months ago"
                    }
                }
            },
            day: {
                displayName: "day",
                relative: {
                    0: "today",
                    1: "tomorrow",
                    "-1": "yesterday"
                },
                relativeTime: {
                    future: {
                        one: "in {0} day",
                        other: "in {0} days"
                    },
                    past: {
                        one: "{0} day ago",
                        other: "{0} days ago"
                    }
                }
            },
            hour: {
                displayName: "hour",
                relative: {
                    0: "this hour"
                },
                relativeTime: {
                    future: {
                        one: "in {0} hour",
                        other: "in {0} hours"
                    },
                    past: {
                        one: "{0} hour ago",
                        other: "{0} hours ago"
                    }
                }
            },
            minute: {
                displayName: "minute",
                relative: {
                    0: "this minute"
                },
                relativeTime: {
                    future: {
                        one: "in {0} minute",
                        other: "in {0} minutes"
                    },
                    past: {
                        one: "{0} minute ago",
                        other: "{0} minutes ago"
                    }
                }
            },
            second: {
                displayName: "second",
                relative: {
                    0: "now"
                },
                relativeTime: {
                    future: {
                        one: "in {0} second",
                        other: "in {0} seconds"
                    },
                    past: {
                        one: "{0} second ago",
                        other: "{0} seconds ago"
                    }
                }
            }
        }
    };
    function v() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        (Array.isArray(e) ? e : [ e ]).forEach(function(e) {
            e && e.locale && (i.a.__addLocaleData(e), u.a.__addLocaleData(e));
        });
    }
    function g(e) {
        for (var t = (e || "").split("-"); t.length > 0; ) {
            if (b(t.join("-"))) return !0;
            t.pop();
        }
        return !1;
    }
    function b(e) {
        var t = e && e.toLowerCase();
        return !(!i.a.__localeData__[t] || !u.a.__localeData__[t]);
    }
    var w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, x = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }, _ = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), k = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }, j = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }, S = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }, E = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n;
    }, O = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }, C = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n;
        }
        return Array.from(e);
    }, T = c.a.bool, L = c.a.number, N = c.a.string, P = c.a.func, q = c.a.object, M = c.a.oneOf, A = c.a.shape, F = c.a.any, I = c.a.oneOfType, R = M([ "best fit", "lookup" ]), W = M([ "narrow", "short", "long" ]), D = M([ "numeric", "2-digit" ]), U = P.isRequired, B = {
        locale: N,
        formats: q,
        messages: q,
        textComponent: F,
        defaultLocale: N,
        defaultFormats: q
    }, X = {
        formatDate: U,
        formatTime: U,
        formatRelative: U,
        formatNumber: U,
        formatPlural: U,
        formatMessage: U,
        formatHTMLMessage: U
    }, z = A(j({}, B, X, {
        formatters: q,
        now: U
    })), H = (N.isRequired, I([ N, q ]), {
        localeMatcher: R,
        formatMatcher: M([ "basic", "best fit" ]),
        timeZone: N,
        hour12: T,
        weekday: W,
        era: W,
        year: D,
        month: M([ "numeric", "2-digit", "narrow", "short", "long" ]),
        day: D,
        hour: D,
        minute: D,
        second: D,
        timeZoneName: M([ "short", "long" ])
    }), V = {
        localeMatcher: R,
        style: M([ "decimal", "currency", "percent" ]),
        currency: N,
        currencyDisplay: M([ "symbol", "code", "name" ]),
        useGrouping: T,
        minimumIntegerDigits: L,
        minimumFractionDigits: L,
        maximumFractionDigits: L,
        minimumSignificantDigits: L,
        maximumSignificantDigits: L
    }, G = {
        style: M([ "best fit", "numeric" ]),
        units: M([ "second", "minute", "hour", "day", "month", "year" ])
    }, Y = {
        style: M([ "cardinal", "ordinal" ])
    }, J = Object.keys(B), $ = {
        "&": "&amp;",
        ">": "&gt;",
        "<": "&lt;",
        '"': "&quot;",
        "'": "&#x27;"
    }, K = /[&><"']/g;
    function Z(e) {
        return ("" + e).replace(K, function(e) {
            return $[e];
        });
    }
    function Q(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return t.reduce(function(t, r) {
            return e.hasOwnProperty(r) ? t[r] = e[r] : n.hasOwnProperty(r) && (t[r] = n[r]), 
            t;
        }, {});
    }
    function ee() {
        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).intl;
        f()(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
    }
    function te(e, t) {
        if (e === t) return !0;
        if ("object" !== (void 0 === e ? "undefined" : w(e)) || null === e || "object" !== (void 0 === t ? "undefined" : w(t)) || null === t) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var o = Object.prototype.hasOwnProperty.bind(t), a = 0; a < n.length; a++) if (!o(n[a]) || e[n[a]] !== t[n[a]]) return !1;
        return !0;
    }
    function ne(e, t, n) {
        var r = e.props, o = e.state, a = e.context, i = void 0 === a ? {} : a, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, u = i.intl, l = void 0 === u ? {} : u, c = s.intl, p = void 0 === c ? {} : c;
        return !te(t, r) || !te(n, o) || !(p === l || te(Q(p, J), Q(l, J)));
    }
    function re(e) {
        return e.displayName || e.name || "Component";
    }
    function oe(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.intlPropName, r = void 0 === n ? "intl" : n, o = t.withRef, a = void 0 !== o && o, i = function(t) {
            function n(e, t) {
                x(this, n);
                var r = O(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t));
                return ee(t), r;
            }
            return S(n, t), _(n, [ {
                key: "getWrappedInstance",
                value: function() {
                    return f()(a, "[React Intl] To access the wrapped instance, the `{withRef: true}` option must be set when calling: `injectIntl()`"), 
                    this.refs.wrappedInstance;
                }
            }, {
                key: "render",
                value: function() {
                    return p.default.createElement(e, j({}, this.props, k({}, r, this.context.intl), {
                        ref: a ? "wrappedInstance" : null
                    }));
                }
            } ]), n;
        }(p.Component);
        return i.displayName = "InjectIntl(" + re(e) + ")", i.contextTypes = {
            intl: z
        }, i.WrappedComponent = e, i;
    }
    function ae(e) {
        return e;
    }
    function ie(e) {
        return i.a.prototype._resolveLocale(e);
    }
    function se(e) {
        return i.a.prototype._findPluralRuleFunction(e);
    }
    var ue = function e(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        x(this, e);
        var r = "ordinal" === n.style, o = se(ie(t));
        this.format = function(e) {
            return o(e, r);
        };
    }, le = Object.keys(H), ce = Object.keys(V), pe = Object.keys(G), de = Object.keys(Y), fe = {
        second: 60,
        minute: 60,
        hour: 24,
        day: 30,
        month: 12
    };
    function he(e) {
        var t = u.a.thresholds;
        t.second = e.second, t.minute = e.minute, t.hour = e.hour, t.day = e.day, t.month = e.month;
    }
    function me(e, t, n) {
        var r = e && e[t] && e[t][n];
        if (r) return r;
    }
    function ye(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = e.locale, a = e.formats, i = r.format, s = new Date(n), u = i && me(a, "date", i), l = Q(r, le, u);
        try {
            return t.getDateTimeFormat(o, l).format(s);
        } catch (e) {
            0;
        }
        return String(s);
    }
    function ve(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = e.locale, a = e.formats, i = r.format, s = new Date(n), u = i && me(a, "time", i), l = Q(r, le, u);
        l.hour || l.minute || l.second || (l = j({}, l, {
            hour: "numeric",
            minute: "numeric"
        }));
        try {
            return t.getDateTimeFormat(o, l).format(s);
        } catch (e) {
            0;
        }
        return String(s);
    }
    function ge(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = e.locale, a = e.formats, i = r.format, s = new Date(n), l = new Date(r.now), c = i && me(a, "relative", i), p = Q(r, pe, c), d = j({}, u.a.thresholds);
        he(fe);
        try {
            return t.getRelativeFormat(o, p).format(s, {
                now: isFinite(l) ? l : t.now()
            });
        } catch (e) {
            0;
        } finally {
            he(d);
        }
        return String(s);
    }
    function be(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = e.locale, a = e.formats, i = r.format, s = i && me(a, "number", i), u = Q(r, ce, s);
        try {
            return t.getNumberFormat(o, u).format(n);
        } catch (e) {
            0;
        }
        return String(n);
    }
    function we(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = e.locale, a = Q(r, de);
        try {
            return t.getPluralFormat(o, a).format(n);
        } catch (e) {
            0;
        }
        return "other";
    }
    function xe(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = e.locale, a = e.formats, i = e.messages, s = e.defaultLocale, u = e.defaultFormats, l = n.id, c = n.defaultMessage;
        f()(l, "[React Intl] An `id` must be provided to format a message.");
        var p = i && i[l];
        if (!(Object.keys(r).length > 0)) return p || c || l;
        var d = void 0;
        if (p) try {
            d = t.getMessageFormat(p, o, a).format(r);
        } catch (e) {
            0;
        } else 0;
        if (!d && c) try {
            d = t.getMessageFormat(c, s, u).format(r);
        } catch (e) {
            0;
        }
        return d || p || c || l;
    }
    function _e(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return xe(e, t, n, Object.keys(r).reduce(function(e, t) {
            var n = r[t];
            return e[t] = "string" == typeof n ? Z(n) : n, e;
        }, {}));
    }
    var ke = Object.freeze({
        formatDate: ye,
        formatTime: ve,
        formatRelative: ge,
        formatNumber: be,
        formatPlural: we,
        formatMessage: xe,
        formatHTMLMessage: _e
    }), je = Object.keys(B), Se = Object.keys(X), Ee = {
        formats: {},
        messages: {},
        textComponent: "span",
        defaultLocale: "en",
        defaultFormats: {}
    }, Oe = function(e) {
        function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            x(this, t);
            var r = O(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            f()("undefined" != typeof Intl, "[React Intl] The `Intl` APIs must be available in the runtime, and do not appear to be built-in. An `Intl` polyfill should be loaded.\nSee: http://formatjs.io/guides/runtime-environments/");
            var o = n.intl, a = void 0;
            a = isFinite(e.initialNow) ? Number(e.initialNow) : o ? o.now() : Date.now();
            var s = (o || {}).formatters, l = void 0 === s ? {
                getDateTimeFormat: m()(Intl.DateTimeFormat),
                getNumberFormat: m()(Intl.NumberFormat),
                getMessageFormat: m()(i.a),
                getRelativeFormat: m()(u.a),
                getPluralFormat: m()(ue)
            } : s;
            return r.state = j({}, l, {
                now: function() {
                    return r._didDisplay ? Date.now() : a;
                }
            }), r;
        }
        return S(t, e), _(t, [ {
            key: "getConfig",
            value: function() {
                var e = this.context.intl, t = Q(this.props, je, e);
                for (var n in Ee) void 0 === t[n] && (t[n] = Ee[n]);
                if (!g(t.locale)) {
                    var r = t, o = (r.locale, r.defaultLocale), a = r.defaultFormats;
                    0, t = j({}, t, {
                        locale: o,
                        formats: a,
                        messages: Ee.messages
                    });
                }
                return t;
            }
        }, {
            key: "getBoundFormatFns",
            value: function(e, t) {
                return Se.reduce(function(n, r) {
                    return n[r] = ke[r].bind(null, e, t), n;
                }, {});
            }
        }, {
            key: "getChildContext",
            value: function() {
                var e = this.getConfig(), t = this.getBoundFormatFns(e, this.state), n = this.state, r = n.now, o = E(n, [ "now" ]);
                return {
                    intl: j({}, e, t, {
                        formatters: o,
                        now: r
                    })
                };
            }
        }, {
            key: "shouldComponentUpdate",
            value: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return ne.apply(void 0, [ this ].concat(t));
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this._didDisplay = !0;
            }
        }, {
            key: "render",
            value: function() {
                return p.Children.only(this.props.children);
            }
        } ]), t;
    }(p.Component);
    Oe.displayName = "IntlProvider", Oe.contextTypes = {
        intl: z
    }, Oe.childContextTypes = {
        intl: z.isRequired
    };
    var Ce = function(e) {
        function t(e, n) {
            x(this, t);
            var r = O(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return ee(n), r;
        }
        return S(t, e), _(t, [ {
            key: "shouldComponentUpdate",
            value: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return ne.apply(void 0, [ this ].concat(t));
            }
        }, {
            key: "render",
            value: function() {
                var e = this.context.intl, t = e.formatDate, n = e.textComponent, r = this.props, o = r.value, a = r.children, i = t(o, this.props);
                return "function" == typeof a ? a(i) : p.default.createElement(n, null, i);
            }
        } ]), t;
    }(p.Component);
    Ce.displayName = "FormattedDate", Ce.contextTypes = {
        intl: z
    };
    var Te = function(e) {
        function t(e, n) {
            x(this, t);
            var r = O(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return ee(n), r;
        }
        return S(t, e), _(t, [ {
            key: "shouldComponentUpdate",
            value: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return ne.apply(void 0, [ this ].concat(t));
            }
        }, {
            key: "render",
            value: function() {
                var e = this.context.intl, t = e.formatTime, n = e.textComponent, r = this.props, o = r.value, a = r.children, i = t(o, this.props);
                return "function" == typeof a ? a(i) : p.default.createElement(n, null, i);
            }
        } ]), t;
    }(p.Component);
    Te.displayName = "FormattedTime", Te.contextTypes = {
        intl: z
    };
    var Le = 1e3, Ne = 6e4, Pe = 36e5, qe = 864e5, Me = 2147483647;
    function Ae(e) {
        var t = Math.abs(e);
        return t < Ne ? "second" : t < Pe ? "minute" : t < qe ? "hour" : "day";
    }
    function Fe(e) {
        switch (e) {
          case "second":
            return Le;

          case "minute":
            return Ne;

          case "hour":
            return Pe;

          case "day":
            return qe;

          default:
            return Me;
        }
    }
    function Ie(e, t) {
        if (e === t) return !0;
        var n = new Date(e).getTime(), r = new Date(t).getTime();
        return isFinite(n) && isFinite(r) && n === r;
    }
    var Re = function(e) {
        function t(e, n) {
            x(this, t);
            var r = O(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            ee(n);
            var o = isFinite(e.initialNow) ? Number(e.initialNow) : n.intl.now();
            return r.state = {
                now: o
            }, r;
        }
        return S(t, e), _(t, [ {
            key: "scheduleNextUpdate",
            value: function(e, t) {
                var n = this;
                clearTimeout(this._timer);
                var r = e.value, o = e.units, a = e.updateInterval, i = new Date(r).getTime();
                if (a && isFinite(i)) {
                    var s = i - t.now, u = Fe(o || Ae(s)), l = Math.abs(s % u), c = s < 0 ? Math.max(a, u - l) : Math.max(a, l);
                    this._timer = setTimeout(function() {
                        n.setState({
                            now: n.context.intl.now()
                        });
                    }, c);
                }
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.scheduleNextUpdate(this.props, this.state);
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(e) {
                Ie(e.value, this.props.value) || this.setState({
                    now: this.context.intl.now()
                });
            }
        }, {
            key: "shouldComponentUpdate",
            value: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return ne.apply(void 0, [ this ].concat(t));
            }
        }, {
            key: "componentWillUpdate",
            value: function(e, t) {
                this.scheduleNextUpdate(e, t);
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                clearTimeout(this._timer);
            }
        }, {
            key: "render",
            value: function() {
                var e = this.context.intl, t = e.formatRelative, n = e.textComponent, r = this.props, o = r.value, a = r.children, i = t(o, j({}, this.props, this.state));
                return "function" == typeof a ? a(i) : p.default.createElement(n, null, i);
            }
        } ]), t;
    }(p.Component);
    Re.displayName = "FormattedRelative", Re.contextTypes = {
        intl: z
    }, Re.defaultProps = {
        updateInterval: 1e4
    };
    var We = function(e) {
        function t(e, n) {
            x(this, t);
            var r = O(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return ee(n), r;
        }
        return S(t, e), _(t, [ {
            key: "shouldComponentUpdate",
            value: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return ne.apply(void 0, [ this ].concat(t));
            }
        }, {
            key: "render",
            value: function() {
                var e = this.context.intl, t = e.formatNumber, n = e.textComponent, r = this.props, o = r.value, a = r.children, i = t(o, this.props);
                return "function" == typeof a ? a(i) : p.default.createElement(n, null, i);
            }
        } ]), t;
    }(p.Component);
    We.displayName = "FormattedNumber", We.contextTypes = {
        intl: z
    };
    var De = function(e) {
        function t(e, n) {
            x(this, t);
            var r = O(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return ee(n), r;
        }
        return S(t, e), _(t, [ {
            key: "shouldComponentUpdate",
            value: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return ne.apply(void 0, [ this ].concat(t));
            }
        }, {
            key: "render",
            value: function() {
                var e = this.context.intl, t = e.formatPlural, n = e.textComponent, r = this.props, o = r.value, a = r.other, i = r.children, s = t(o, this.props), u = this.props[s] || a;
                return "function" == typeof i ? i(u) : p.default.createElement(n, null, u);
            }
        } ]), t;
    }(p.Component);
    De.displayName = "FormattedPlural", De.contextTypes = {
        intl: z
    }, De.defaultProps = {
        style: "cardinal"
    };
    var Ue = function(e) {
        function t(e, n) {
            x(this, t);
            var r = O(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return ee(n), r;
        }
        return S(t, e), _(t, [ {
            key: "shouldComponentUpdate",
            value: function(e) {
                var t = this.props.values;
                if (!te(e.values, t)) return !0;
                for (var n = j({}, e, {
                    values: t
                }), r = arguments.length, o = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
                return ne.apply(void 0, [ this, n ].concat(o));
            }
        }, {
            key: "render",
            value: function() {
                var e, t = this.context.intl, n = t.formatMessage, r = t.textComponent, o = this.props, a = o.id, i = o.description, s = o.defaultMessage, u = o.values, l = o.tagName, c = void 0 === l ? r : l, d = o.children, f = void 0, h = void 0, m = void 0;
                if (u && Object.keys(u).length > 0) {
                    var y = Math.floor(1099511627776 * Math.random()).toString(16), v = (e = 0, function() {
                        return "ELEMENT-" + y + "-" + (e += 1);
                    });
                    f = "@__" + y + "__@", h = {}, m = {}, Object.keys(u).forEach(function(e) {
                        var t = u[e];
                        if (Object(p.isValidElement)(t)) {
                            var n = v();
                            h[e] = f + n + f, m[n] = t;
                        } else h[e] = t;
                    });
                }
                var g = n({
                    id: a,
                    description: i,
                    defaultMessage: s
                }, h || u), b = void 0;
                return b = m && Object.keys(m).length > 0 ? g.split(f).filter(function(e) {
                    return !!e;
                }).map(function(e) {
                    return m[e] || e;
                }) : [ g ], "function" == typeof d ? d.apply(void 0, C(b)) : p.createElement.apply(void 0, [ c, null ].concat(C(b)));
            }
        } ]), t;
    }(p.Component);
    Ue.displayName = "FormattedMessage", Ue.contextTypes = {
        intl: z
    }, Ue.defaultProps = {
        values: {}
    };
    var Be = function(e) {
        function t(e, n) {
            x(this, t);
            var r = O(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return ee(n), r;
        }
        return S(t, e), _(t, [ {
            key: "shouldComponentUpdate",
            value: function(e) {
                var t = this.props.values;
                if (!te(e.values, t)) return !0;
                for (var n = j({}, e, {
                    values: t
                }), r = arguments.length, o = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
                return ne.apply(void 0, [ this, n ].concat(o));
            }
        }, {
            key: "render",
            value: function() {
                var e = this.context.intl, t = e.formatHTMLMessage, n = e.textComponent, r = this.props, o = r.id, a = r.description, i = r.defaultMessage, s = r.values, u = r.tagName, l = void 0 === u ? n : u, c = r.children, d = t({
                    id: o,
                    description: a,
                    defaultMessage: i
                }, s);
                if ("function" == typeof c) return c(d);
                var f = {
                    __html: d
                };
                return p.default.createElement(l, {
                    dangerouslySetInnerHTML: f
                });
            }
        } ]), t;
    }(p.Component);
    Be.displayName = "FormattedHTMLMessage", Be.contextTypes = {
        intl: z
    }, Be.defaultProps = {
        values: {}
    }, v(y), v(o.a);
}, function(e, t, n) {
    "use strict";
    n.r(t), function(e) {
        n.d(t, "version", function() {
            return i;
        }), n.d(t, "DOM", function() {
            return C;
        }), n.d(t, "Children", function() {
            return E;
        }), n.d(t, "render", function() {
            return w;
        }), n.d(t, "createClass", function() {
            return V;
        }), n.d(t, "createFactory", function() {
            return O;
        }), n.d(t, "createElement", function() {
            return M;
        }), n.d(t, "cloneElement", function() {
            return F;
        }), n.d(t, "isValidElement", function() {
            return I;
        }), n.d(t, "findDOMNode", function() {
            return z;
        }), n.d(t, "unmountComponentAtNode", function() {
            return k;
        }), n.d(t, "Component", function() {
            return ne;
        }), n.d(t, "PureComponent", function() {
            return re;
        }), n.d(t, "unstable_renderSubtreeIntoContainer", function() {
            return _;
        }), n.d(t, "__spread", function() {
            return B;
        });
        var r = n(6), o = n.n(r);
        n.d(t, "PropTypes", function() {
            return o.a;
        });
        var a = n(0), i = "15.1.0", s = "a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" "), u = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, l = "undefined" != typeof Symbol ? Symbol.for("__preactCompatWrapper") : "__preactCompatWrapper", c = {
            constructor: 1,
            render: 1,
            shouldComponentUpdate: 1,
            componentWillReceiveProps: 1,
            componentWillUpdate: 1,
            componentDidUpdate: 1,
            componentWillMount: 1,
            componentDidMount: 1,
            componentWillUnmount: 1,
            componentDidUnmount: 1
        }, p = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/, d = {}, f = void 0 === e || !Object({
            BASE_URL: "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc",
            VERSION: "17.0.0"
        }) || !1;
        function h() {
            return null;
        }
        var m = Object(a.h)("a", null).constructor;
        m.prototype.$$typeof = u, m.prototype.preactCompatUpgraded = !1, m.prototype.preactCompatNormalized = !1, 
        Object.defineProperty(m.prototype, "type", {
            get: function() {
                return this.nodeName;
            },
            set: function(e) {
                this.nodeName = e;
            },
            configurable: !0
        }), Object.defineProperty(m.prototype, "props", {
            get: function() {
                return this.attributes;
            },
            set: function(e) {
                this.attributes = e;
            },
            configurable: !0
        });
        var y = a.options.event;
        a.options.event = function(e) {
            return y && (e = y(e)), e.persist = Object, e.nativeEvent = e, e;
        };
        var v = a.options.vnode;
        function g(e) {
            var t = e.nodeName, n = e.attributes;
            e.attributes = {}, t.defaultProps && B(e.attributes, t.defaultProps), n && B(e.attributes, n);
        }
        function b(e, t) {
            var n, r, o;
            if (t) {
                for (o in t) if (n = p.test(o)) break;
                if (n) for (o in r = e.attributes = {}, t) t.hasOwnProperty(o) && (r[p.test(o) ? o.replace(/([A-Z0-9])/, "-$1").toLowerCase() : o] = t[o]);
            }
        }
        function w(e, t, n) {
            var r = t && t._preactCompatRendered && t._preactCompatRendered.base;
            r && r.parentNode !== t && (r = null), !r && t && (r = t.firstElementChild);
            for (var o = t.childNodes.length; o--; ) t.childNodes[o] !== r && t.removeChild(t.childNodes[o]);
            var i = Object(a.render)(e, t, r);
            return t && (t._preactCompatRendered = i && (i._component || {
                base: i
            })), "function" == typeof n && n(), i && i._component || i;
        }
        a.options.vnode = function(e) {
            if (!e.preactCompatUpgraded) {
                e.preactCompatUpgraded = !0;
                var t = e.nodeName, n = e.attributes = B({}, e.attributes);
                "function" == typeof t ? (!0 === t[l] || t.prototype && "isReactComponent" in t.prototype) && (e.children && "" === String(e.children) && (e.children = void 0), 
                e.children && (n.children = e.children), e.preactCompatNormalized || A(e), g(e)) : (e.children && "" === String(e.children) && (e.children = void 0), 
                e.children && (n.children = e.children), n.defaultValue && (n.value || 0 === n.value || (n.value = n.defaultValue), 
                delete n.defaultValue), b(e, n));
            }
            v && v(e);
        };
        var x = function() {};
        function _(e, t, n, r) {
            var o = w(Object(a.h)(x, {
                context: e.context
            }, t), n), i = o._component || o.base;
            return r && r.call(i, o), i;
        }
        function k(e) {
            var t = e._preactCompatRendered && e._preactCompatRendered.base;
            return !(!t || t.parentNode !== e) && (Object(a.render)(Object(a.h)(h), e, t), !0);
        }
        x.prototype.getChildContext = function() {
            return this.props.context;
        }, x.prototype.render = function(e) {
            return e.children[0];
        };
        var j, S = [], E = {
            map: function(e, t, n) {
                return null == e ? null : (e = E.toArray(e), n && n !== e && (t = t.bind(n)), e.map(t));
            },
            forEach: function(e, t, n) {
                if (null == e) return null;
                e = E.toArray(e), n && n !== e && (t = t.bind(n)), e.forEach(t);
            },
            count: function(e) {
                return e && e.length || 0;
            },
            only: function(e) {
                if (1 !== (e = E.toArray(e)).length) throw new Error("Children.only() expects only one child.");
                return e[0];
            },
            toArray: function(e) {
                return null == e ? [] : S.concat(e);
            }
        };
        function O(e) {
            return M.bind(null, e);
        }
        for (var C = {}, T = s.length; T--; ) C[s[T]] = O(s[T]);
        function L(e, t) {
            for (var n = t || 0; n < e.length; n++) {
                var r = e[n];
                Array.isArray(r) ? L(r) : r && "object" == typeof r && !I(r) && (r.props && r.type || r.attributes && r.nodeName || r.children) && (e[n] = M(r.type || r.nodeName, r.props || r.attributes, r.children));
            }
        }
        function N(e) {
            return "function" == typeof e && !(e.prototype && e.prototype.render);
        }
        function P(e) {
            return V({
                displayName: e.displayName || e.name,
                render: function() {
                    return e(this.props, this.context);
                }
            });
        }
        function q(e) {
            var t = e[l];
            return t ? !0 === t ? e : t : (t = P(e), Object.defineProperty(t, l, {
                configurable: !0,
                value: !0
            }), t.displayName = e.displayName, t.propTypes = e.propTypes, t.defaultProps = e.defaultProps, 
            Object.defineProperty(e, l, {
                configurable: !0,
                value: t
            }), t);
        }
        function M() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return L(e, 2), A(a.h.apply(void 0, e));
        }
        function A(e) {
            e.preactCompatNormalized = !0, D(e), N(e.nodeName) && (e.nodeName = q(e.nodeName));
            var t = e.attributes.ref, n = t && typeof t;
            return !j || "string" !== n && "number" !== n || (e.attributes.ref = R(t, j)), W(e), 
            e;
        }
        function F(e, t) {
            for (var n = [], r = arguments.length - 2; r-- > 0; ) n[r] = arguments[r + 2];
            if (!I(e)) return e;
            var o = e.attributes || e.props, i = [ Object(a.h)(e.nodeName || e.type, o, e.children || o && o.children), t ];
            return n && n.length ? i.push(n) : t && t.children && i.push(t.children), A(a.cloneElement.apply(void 0, i));
        }
        function I(e) {
            return e && (e instanceof m || e.$$typeof === u);
        }
        function R(e, t) {
            return t._refProxies[e] || (t._refProxies[e] = function(n) {
                t && t.refs && (t.refs[e] = n, null === n && (delete t._refProxies[e], t = null));
            });
        }
        function W(e) {
            var t = e.nodeName, n = e.attributes;
            if (n && "string" == typeof t) {
                var r = {};
                for (var o in n) r[o.toLowerCase()] = o;
                if (r.ondoubleclick && (n.ondblclick = n[r.ondoubleclick], delete n[r.ondoubleclick]), 
                r.onchange && ("textarea" === t || "input" === t.toLowerCase() && !/^fil|che|rad/i.test(n.type))) {
                    var a = r.oninput || "oninput";
                    n[a] || (n[a] = K([ n[a], n[r.onchange] ]), delete n[r.onchange]);
                }
            }
        }
        function D(e) {
            var t = e.attributes || (e.attributes = {});
            U.enumerable = "className" in t, t.className && (t.class = t.className), Object.defineProperty(t, "className", U);
        }
        var U = {
            configurable: !0,
            get: function() {
                return this.class;
            },
            set: function(e) {
                this.class = e;
            }
        };
        function B(e, t) {
            for (var n = arguments, r = 1, o = void 0; r < arguments.length; r++) if (o = n[r]) for (var a in o) o.hasOwnProperty(a) && (e[a] = o[a]);
            return e;
        }
        function X(e, t) {
            for (var n in e) if (!(n in t)) return !0;
            for (var r in t) if (e[r] !== t[r]) return !0;
            return !1;
        }
        function z(e) {
            return e && e.base || e;
        }
        function H() {}
        function V(e) {
            function t(e, t) {
                J(this), ne.call(this, e, t, d), Z.call(this, e, t);
            }
            return (e = B({
                constructor: t
            }, e)).mixins && Y(e, G(e.mixins)), e.statics && B(t, e.statics), e.propTypes && (t.propTypes = e.propTypes), 
            e.defaultProps && (t.defaultProps = e.defaultProps), e.getDefaultProps && (t.defaultProps = e.getDefaultProps()), 
            H.prototype = ne.prototype, t.prototype = B(new H(), e), t.displayName = e.displayName || "Component", 
            t;
        }
        function G(e) {
            for (var t = {}, n = 0; n < e.length; n++) {
                var r = e[n];
                for (var o in r) r.hasOwnProperty(o) && "function" == typeof r[o] && (t[o] || (t[o] = [])).push(r[o]);
            }
            return t;
        }
        function Y(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = K(t[n].concat(e[n] || S), "getDefaultProps" === n || "getInitialState" === n || "getChildContext" === n));
        }
        function J(e) {
            for (var t in e) {
                var n = e[t];
                "function" != typeof n || n.__bound || c.hasOwnProperty(t) || ((e[t] = n.bind(e)).__bound = !0);
            }
        }
        function $(e, t, n) {
            if ("string" == typeof t && (t = e.constructor.prototype[t]), "function" == typeof t) return t.apply(e, n);
        }
        function K(e, t) {
            return function() {
                for (var n, r = arguments, o = this, a = 0; a < e.length; a++) {
                    var i = $(o, e[a], r);
                    if (t && null != i) for (var s in n || (n = {}), i) i.hasOwnProperty(s) && (n[s] = i[s]); else void 0 !== i && (n = i);
                }
                return n;
            };
        }
        function Z(e, t) {
            Q.call(this, e, t), this.componentWillReceiveProps = K([ Q, this.componentWillReceiveProps || "componentWillReceiveProps" ]), 
            this.render = K([ Q, ee, this.render || "render", te ]);
        }
        function Q(e, t) {
            if (e) {
                var n = e.children;
                if (n && Array.isArray(n) && 1 === n.length && ("string" == typeof n[0] || "function" == typeof n[0] || n[0] instanceof m) && (e.children = n[0], 
                e.children && "object" == typeof e.children && (e.children.length = 1, e.children[0] = e.children)), 
                f) {
                    var r = "function" == typeof this ? this : this.constructor, a = this.propTypes || r.propTypes, i = this.displayName || r.name;
                    a && o.a.checkPropTypes(a, e, "prop", i);
                }
            }
        }
        function ee(e) {
            j = this;
        }
        function te() {
            j === this && (j = null);
        }
        function ne(e, t, n) {
            a.Component.call(this, e, t), this.state = this.getInitialState ? this.getInitialState() : {}, 
            this.refs = {}, this._refProxies = {}, n !== d && Z.call(this, e, t);
        }
        function re(e, t) {
            ne.call(this, e, t);
        }
        B(ne.prototype = new a.Component(), {
            constructor: ne,
            isReactComponent: {},
            replaceState: function(e, t) {
                var n = this;
                for (var r in this.setState(e, t), n.state) r in e || delete n.state[r];
            },
            getDOMNode: function() {
                return this.base;
            },
            isMounted: function() {
                return !!this.base;
            }
        }), H.prototype = ne.prototype, re.prototype = new H(), re.prototype.isPureReactComponent = !0, 
        re.prototype.shouldComponentUpdate = function(e, t) {
            return X(this.props, e) || X(this.state, t);
        };
        var oe = {
            version: i,
            DOM: C,
            PropTypes: o.a,
            Children: E,
            render: w,
            createClass: V,
            createFactory: O,
            createElement: M,
            cloneElement: F,
            isValidElement: I,
            findDOMNode: z,
            unmountComponentAtNode: k,
            Component: ne,
            PureComponent: re,
            unstable_renderSubtreeIntoContainer: _,
            __spread: B
        };
        t.default = oe;
    }.call(this, n(86));
}, function(e, t, n) {
    (function(t) {
        var n;
        n = function() {
            "use strict";
            var e = function(e) {
                var t = e.id, n = e.viewBox, r = e.content;
                this.id = t, this.viewBox = n, this.content = r;
            };
            e.prototype.stringify = function() {
                return this.content;
            }, e.prototype.toString = function() {
                return this.stringify();
            }, e.prototype.destroy = function() {
                var e = this;
                [ "id", "viewBox", "content" ].forEach(function(t) {
                    return delete e[t];
                });
            };
            var n = function(e) {
                var t = !!document.importNode, n = new DOMParser().parseFromString(e, "image/svg+xml").documentElement;
                return t ? document.importNode(n, !0) : n;
            };
            "undefined" != typeof window ? window : void 0 !== t || "undefined" != typeof self && self;
            function r(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports), t.exports;
            }
            var o = r(function(e, t) {
                var n;
                n = function() {
                    function e(e) {
                        return e && "object" == typeof e && "[object RegExp]" !== Object.prototype.toString.call(e) && "[object Date]" !== Object.prototype.toString.call(e);
                    }
                    function t(e) {
                        return Array.isArray(e) ? [] : {};
                    }
                    function n(n, r) {
                        return r && !0 === r.clone && e(n) ? a(t(n), n, r) : n;
                    }
                    function r(t, r, o) {
                        var i = t.slice();
                        return r.forEach(function(r, s) {
                            void 0 === i[s] ? i[s] = n(r, o) : e(r) ? i[s] = a(t[s], r, o) : -1 === t.indexOf(r) && i.push(n(r, o));
                        }), i;
                    }
                    function o(t, r, o) {
                        var i = {};
                        return e(t) && Object.keys(t).forEach(function(e) {
                            i[e] = n(t[e], o);
                        }), Object.keys(r).forEach(function(s) {
                            e(r[s]) && t[s] ? i[s] = a(t[s], r[s], o) : i[s] = n(r[s], o);
                        }), i;
                    }
                    function a(e, t, a) {
                        var i = Array.isArray(t), s = (a || {
                            arrayMerge: r
                        }).arrayMerge || r;
                        return i ? Array.isArray(e) ? s(e, t, a) : n(t, a) : o(e, t, a);
                    }
                    return a.all = function(e, t) {
                        if (!Array.isArray(e) || e.length < 2) throw new Error("first argument should be an array with at least two elements");
                        return e.reduce(function(e, n) {
                            return a(e, n, t);
                        });
                    }, a;
                }, e.exports = n();
            }), a = r(function(e, t) {
                var n = {
                    svg: {
                        name: "xmlns",
                        uri: "http://www.w3.org/2000/svg"
                    },
                    xlink: {
                        name: "xmlns:xlink",
                        uri: "http://www.w3.org/1999/xlink"
                    }
                };
                t.default = n, e.exports = t.default;
            }), i = function(e) {
                return Object.keys(e).map(function(t) {
                    return t + '="' + e[t].toString().replace(/"/g, "&quot;") + '"';
                }).join(" ");
            }, s = a.svg, u = a.xlink, l = {};
            l[s.name] = s.uri, l[u.name] = u.uri;
            var c = function(e, t) {
                void 0 === e && (e = "");
                var n = o(l, t || {});
                return "<svg " + i(n) + ">" + e + "</svg>";
            };
            return function(e) {
                function t() {
                    e.apply(this, arguments);
                }
                e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
                var r = {
                    isMounted: {}
                };
                return r.isMounted.get = function() {
                    return !!this.node;
                }, t.createFromExistingNode = function(e) {
                    return new t({
                        id: e.getAttribute("id"),
                        viewBox: e.getAttribute("viewBox"),
                        content: e.outerHTML
                    });
                }, t.prototype.destroy = function() {
                    this.isMounted && this.unmount(), e.prototype.destroy.call(this);
                }, t.prototype.mount = function(e) {
                    if (this.isMounted) return this.node;
                    var t = "string" == typeof e ? document.querySelector(e) : e, n = this.render();
                    return this.node = n, t.appendChild(n), n;
                }, t.prototype.render = function() {
                    var e = this.stringify();
                    return n(c(e)).childNodes[0];
                }, t.prototype.unmount = function() {
                    this.node.parentNode.removeChild(this.node);
                }, Object.defineProperties(t.prototype, r), t;
            }(e);
        }, e.exports = n();
    }).call(this, n(93));
}, function(e, t, n) {
    "use strict";
    t.a = Object.freeze({
        InjectFormRequirements: "inject_form_requirements",
        EnsureLoggedIntoFirebase: "login_to_firebase",
        GetLicense: "get_license",
        EnterProductCode: "enter_product_code",
        GetProfile: "get_profile",
        UpdateProfile: "update_profile",
        OpenGoogleFormsPicker: "open_google_forms_picker",
        GoogleFormsPickerLoaded: "google_forms_picker_loaded",
        SetHasSeenFirstRun: "set_firebase_has_seen_first_run",
        SetProfileType: "set_firebase_profile_type",
        SetShowEquatioOnFirstRun: "set_show_equatio_on_first_run",
        GetShouldShowEquatioOnFirstRun: "get_should_show_equatio_on_first_run",
        RegisterExternalWebApp: "external_web_app",
        RegisterCompanionAppTarget: "register_companion_app_target",
        UpdateCompanionAppTargetTitle: "update_companion_app_target_title",
        UpdateGoogleSheetEquations: "update_google_sheet_equations",
        SetHandwritingCount: "set_handwriting_count",
        GetHandwritingCount: "get_handwriting_count",
        ShowGoogleFormsReminder: "upgrade_google_forms_reminder",
        ShowHandwritingExceededReminder: "upgrade_handwriting_exceeded",
        ShowPredictionReminder: "upgrade_prediction",
        ShowRenewalReminder: "upgrade_renewal",
        ShowTrialExpiration: "upgrade_trial_expiration",
        ShowUpgradeReminder: "upgrade_reminder",
        ShowReviewReminder: "review_reminder",
        SendAnalyticsScreen: "send_analytics_screen",
        SendAnalyticsEvent: "send_analytics_event",
        StartScreenshotReader: "start_screenshot_reader",
        CaptureScreenshot: "capture_screenshot",
        ScanMathpixOcr: "scan_mathpix_ocr",
        UploadImageToProxy: "upload_image_proxy",
        DismissReviewReminder: "dismiss_review_reminder",
        DismissMathDiscover: "dismiss_math_discover",
        OpenMathspace: "open_mathspace"
    });
}, function(e, t, n) {
    "use strict";
    var r, o = n(35), a = n.n(o), i = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    };
    function s(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var i = t[o](a), s = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(s).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    });
                    e(s);
                }
                return r("next");
            });
        };
    }
    t.a = (r = s(function*(e, t) {
        return new Promise(function(n, r) {
            var o = a()(), s = void 0, u = function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = t.origin, i = t.data;
                if (a === window.location.origin && i && i.equatioInPageResponse === o) {
                    clearTimeout(s), window.removeEventListener("message", e);
                    var u = i.success, l = i.error, c = i.result;
                    u ? n(c) : r(l);
                }
            };
            window.addEventListener("message", u), s = setTimeout(function() {
                r(Error("timed_out")), window.removeEventListener("message", u);
            }, 15e3), window.postMessage(i({
                equatioInPageAction: e,
                unique: o
            }, t), window.location.origin);
        });
    }), function(e, t) {
        return r.apply(this, arguments);
    });
}, function(e, t, n) {
    e.exports = n(84)();
}, function(e, t) {
    function n(e, t) {
        var n = e[1] || "", o = e[3];
        if (!o) return n;
        if (t && "function" == typeof btoa) {
            var a = r(o), i = o.sources.map(function(e) {
                return "/*# sourceURL=" + o.sourceRoot + e + " */";
            });
            return [ n ].concat(i).concat([ a ]).join("\n");
        }
        return [ n ].join("\n");
    }
    function r(e) {
        return "/*# " + ("sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e))))) + " */";
    }
    e.exports = function(e) {
        var t = [];
        return t.toString = function() {
            return this.map(function(t) {
                var r = n(t, e);
                return t[2] ? "@media " + t[2] + "{" + r + "}" : r;
            }).join("");
        }, t.i = function(e, n) {
            "string" == typeof e && (e = [ [ null, e, "" ] ]);
            for (var r = {}, o = 0; o < this.length; o++) {
                var a = this[o][0];
                "number" == typeof a && (r[a] = !0);
            }
            for (o = 0; o < e.length; o++) {
                var i = e[o];
                "number" == typeof i[0] && r[i[0]] || (n && !i[2] ? i[2] = n : n && (i[2] = "(" + i[2] + ") and (" + n + ")"), 
                t.push(i));
            }
        }, t;
    };
}, function(e) {
    e.exports = {
        "browser-action-popup.disabled-app.dismiss": "OK",
        "browser-action-popup.disabled-app.message": "Looks like this Google App integration has been disabled for your domain. Talk to your admin to have this feature enabled!",
        "browser-action-popup.disabled-app.title": "Hey there!",
        "browser-action-popup.forms.dismiss": "OK",
        "browser-action-popup.forms.message": "Open up EquatIO in Google Forms by clicking on the {equationIcon} icon beside the question or answer you want to work on.",
        "browser-action-popup.forms.title": "Quiz time?!",
        "browser-action-popup.not-signed-into-chrome.dismiss": "OK",
        "browser-action-popup.not-signed-into-chrome.message": "Looks like you're not signed into Google Chrome :(",
        "browser-action-popup.not-signed-into-chrome.read-more": "Read More",
        "browser-action-popup.not-signed-into-chrome.sign-in-message": "In order to use all the great features of EquatIO, you need to sign in. {readMoreLink}.",
        "browser-action-popup.not-signed-into-chrome.title": "Hey there!",
        "browser-action-popup.unsupported-app.description": "Your current EquatIO subscription does not support this Google App. Upgrade today to experience the power of EquatIO across Google Forms, Sheets, Slides and Drawings. If you are a teacher, {freeForTeachersLink} to learn about our Free for Teachers program before renewing.",
        "browser-action-popup.unsupported-app.fft-link": "click here",
        "browser-action-popup.unsupported-app.list-handwriting": "Unlimited handwriting inputs",
        "browser-action-popup.unsupported-app.list-prediction": "The advanced math and chemistry prediction engine",
        "browser-action-popup.unsupported-app.not-today": "Not today, thanks.",
        "browser-action-popup.unsupported-app.title": "Oh no!",
        "browser-action-popup.unsupported-app.upgrade": "Learn More",
        "browser-action-popup.web-premium.dismiss": "OK",
        "browser-action-popup.web-premium.message": "You need a {premiumSubscription} to use EquatIO inside web pages",
        "browser-action-popup.web-premium.premium-subscription": "Premium Subscription",
        "browser-action-popup.web-premium.title": "Hey there!",
        "browser-action-popup.web-premium.upgrade": "Learn More",
        "intro.dismiss-button": "I'd rather not say. Simply take me to EquatIO!",
        "intro.introduction-learn-more-link": "Learn more",
        "intro.introduction-line1": "Finally, you can create digital math! {learnMoreLink}.",
        "intro.loading-doc.message": "We're taking you to your first EquatIO-enabled Google Doc...",
        "intro.loading-doc.thanks": "Thanks!",
        "intro.student-button": "Student",
        "intro.teacher-button": "Teacher",
        "math-discoverability.action-buttons.capture-math": "Capture Math",
        "math-discoverability.action-buttons.what-is-this": "What is this?",
        "math-discoverability.dismiss-menu.30-minutes": "All notifications for 30 minutes",
        "math-discoverability.dismiss-menu.8-hours": "All notifications for 8 hours",
        "math-discoverability.dismiss-menu.hide": "Hide",
        "math-discoverability.dismiss-menu.never-show": "Never show this again",
        "math-discoverability.dismiss-menu.never-show-site": "Never show on this site",
        "math-discoverability.dismiss-menu.this-equation": "This equation",
        "math-discoverability.info-dialog.close": "Close",
        "math-discoverability.info-dialog.happy-searching": "Happy searching!",
        "math-discoverability.info-dialog.hey-there": "Hey there!",
        "math-discoverability.info-dialog.paragraph-1": "This is a feature of EquatIO, the blue diamond-shaped button you see over there to the right of your address bar.",
        "math-discoverability.info-dialog.paragraph-2": "Among many other things, EquatIO searches the web page you\u2019re on for math content. If it finds any, it will highlight it for you, just as you saw here. Then you can take a screenshot {cameraButton} to convert it into accessible math, have it read aloud, and even copy and paste it into a G Suite App.",
        "math-discoverability.info-dialog.paragraph-3": "Don\u2019t want EquatIO to search for math content? Select {closeButton} and choose from the drop-down menu to limit when and where EquatIO searches for math.",
        "math-discoverability.info-dialog.title": "About",
        "popup-menu.close": "Close EquatIO",
        "popup-menu.try-mathspace": "Try EquatIO Mathspace",
        "screenshot-reader-button.title": "Screenshot Reader",
        "screenshot-reader-button.title_premium": "Screenshot Reader (Premium Feature)",
        "screenshot-reader.context-menu.buttons.copy-latex": "Copy LaTeX",
        "screenshot-reader.context-menu.buttons.copy-mathml": "Copy MathML",
        "screenshot-reader.context-menu.buttons.send-to-equation": "Edit with EquatIO",
        "screenshot-reader.mathjax.actions.close": "Close",
        "screenshot-reader.mathjax.actions.more-options": "More Options",
        "screenshot-reader.mathjax.actions.play": "Play",
        "screenshot-reader.mathjax.actions.stop": "Stop",
        "screenshot-reader.mathjax.error-display.title": "Uh oh! We couldn't detect any math for this selection",
        "upgrade-overlay-fft-dismiss": "Not today, thanks",
        "upgrade-overlay-fft-sign-up": "Sign up for Free for Teachers",
        "upgrade-overlay-iconset-advanced-math": "The advanced math and chemistry prediction engine",
        "upgrade-overlay-iconset-built-in-integration": "Built-in integration with Google Forms, Slides, Sheets & Drawings",
        "upgrade-overlay-iconset-free-for-teachers-click-here": "click here",
        "upgrade-overlay-iconset-unlimited-handwriting": "Unlimited handwriting inputs",
        "upgrade-overlay-privacy-policy": "Privacy Policy",
        "upgrade-overlay-student-dismiss": "I'm all set. Take me back to EquatIO.",
        "upgrade-overlay-student-expired.text": "It looks like your 30-day access to EquatIO's premium features has expired. Talk with your teacher to learn how you can keep using all of EquatIO's awesome features, including handwriting and math prediction. If you are a teacher, {upgradeLink} to learn about our Free for Teachers program.",
        "upgrade-overlay-student-handwriting-exceeded.text": "Whoops! You've already used your two handwriting inputs for the day. Talk with your teacher to learn more about your handwriting options. If you are a teacher, {upgradeLink} to learn about our Free for Teachers program.",
        "upgrade-overlay-student-learn-more": "Learn More",
        "upgrade-overlay-student-upgrade-reminder.text": "Talk with your teacher to learn more about EquatIO's premium features. If you are a teacher, {upgradeLink} to learn about our Free for Teachers program.",
        "upgrade-overlay-teacher-expiring.text": "But why renew when you can sign up for Free for Teachers? As a teacher, you'll get all the features you've come to know and love with your premium subscription of EquatIO for FREE!",
        "upgrade-overlay-teacher-expiring.title": "Your premium subscription to EquatIO expires in less than 5 days.",
        "upgrade-overlay-teacher-first-time-expiry.line1": "It looks like your 30-day access to EquatIO's premium features has expired.",
        "upgrade-overlay-teacher-first-time-expiry.line2": "But no need to worry. As a teacher, you can get all those features free forever through our Free for Teacher program. Sign up today to keep using all of EquatIO's features!",
        "upgrade-overlay-teacher-forms-periodic-reminder.integration-with-apps": "Integration with Google Slides, Sheets & Drawings",
        "upgrade-overlay-teacher-forms-periodic-reminder.text": "If you sign up for EquatIO Free for Teachers, you can transform your assessment process through built-in integration with Google Forms - for no additional cost! Sign up today to access all of EquatIO's premium features for free.",
        "upgrade-overlay-teacher-forms-periodic-reminder.title": "Eureka!",
        "upgrade-overlay-teacher-general-periodic-reminder.line1": "Sign up for EquatIO Free for Teachers today to take your digital math to the next level!",
        "upgrade-overlay-teacher-general-periodic-reminder.line2": "By signing up, you'll receive FREE access to...",
        "upgrade-overlay-teacher-handwriting-exceeded.text": "You've already used your two free handwriting inputs for the day. But did you know that through our Free for Teacher program you can get unlimited handwriting - along with all of the other premium features - FREE forever? Sign up today!",
        "upgrade-overlay-teacher-handwriting-exceeded.whoops": "Whoops!",
        "upgrade-overlay-teacher-prediction-periodic-reminder.text": "Lucky for you, EquatIO's advanced math and chemistry prediction engine does just that! Sign up for Free for Teachers today to access this radical feature - and all of EquatIO's premium features - for FREE!",
        "upgrade-overlay-teacher-prediction-periodic-reminder.title": "Just think of the time you would save if you could generate equations faster.",
        "upgrade-overlay-teacher-review-action": "Rate EquatIO!",
        "upgrade-overlay-teacher-review-dismiss": "No, thanks.",
        "upgrade-overlay-teacher-review-no-thanks": "Remind me later.",
        "upgrade-overlay-teacher-review.text": "Share your star-power by giving EquatIO a 5-star rating!",
        "upgrade-overlay-teacher-review.title": "Feeling like a star \u2b50\ufe0f?",
        "upgrade-overlay-used-by-teachers": "Used by teachers{lineBreak}and students worldwide",
        "web-toolbar.popup-menu.menu.close": "Hide EquatIO",
        "web-toolbar.toolbar.calculator": "Calculator",
        "web-toolbar.toolbar.move-toolbar": "Move Toolbar",
        "web-toolbar.toolbar.screenshot-reader": "Screenshot Reader"
    };
}, function(e, t, n) {
    "use strict";
    var r = n(70).default;
    n(77), (t = e.exports = r).default = t;
}, function(e, t, n) {
    var r;
    !function() {
        "use strict";
        var n = {}.hasOwnProperty;
        function o() {
            for (var e = [], t = 0; t < arguments.length; t++) {
                var r = arguments[t];
                if (r) {
                    var a = typeof r;
                    if ("string" === a || "number" === a) e.push(r); else if (Array.isArray(r)) e.push(o.apply(null, r)); else if ("object" === a) for (var i in r) n.call(r, i) && r[i] && e.push(i);
                }
            }
            return e.join(" ");
        }
        void 0 !== e && e.exports ? e.exports = o : void 0 === (r = function() {
            return o;
        }.apply(t, [])) || (e.exports = r);
    }();
}, function(e, t, n) {
    var r, o;
    void 0 === (o = "function" == typeof (r = function() {
        function e(e) {
            var t = e && "object" == typeof e;
            return t && "[object RegExp]" !== Object.prototype.toString.call(e) && "[object Date]" !== Object.prototype.toString.call(e);
        }
        function t(e) {
            return Array.isArray(e) ? [] : {};
        }
        function n(n, r) {
            var o = r && !0 === r.clone;
            return o && e(n) ? a(t(n), n, r) : n;
        }
        function r(t, r, o) {
            var i = t.slice();
            return r.forEach(function(r, s) {
                void 0 === i[s] ? i[s] = n(r, o) : e(r) ? i[s] = a(t[s], r, o) : -1 === t.indexOf(r) && i.push(n(r, o));
            }), i;
        }
        function o(t, r, o) {
            var i = {};
            return e(t) && Object.keys(t).forEach(function(e) {
                i[e] = n(t[e], o);
            }), Object.keys(r).forEach(function(s) {
                e(r[s]) && t[s] ? i[s] = a(t[s], r[s], o) : i[s] = n(r[s], o);
            }), i;
        }
        function a(e, t, a) {
            var i = Array.isArray(t), s = a || {
                arrayMerge: r
            }, u = s.arrayMerge || r;
            return i ? Array.isArray(e) ? u(e, t, a) : n(t, a) : o(e, t, a);
        }
        return a.all = function(e, t) {
            if (!Array.isArray(e) || e.length < 2) throw new Error("first argument should be an array with at least two elements");
            return e.reduce(function(e, n) {
                return a(e, n, t);
            });
        }, a;
    }) ? r.call(t, n, t, e) : r) || (e.exports = o);
}, function(e, t) {
    const n = {
        svg: {
            name: "xmlns",
            uri: "http://www.w3.org/2000/svg"
        },
        xlink: {
            name: "xmlns:xlink",
            uri: "http://www.w3.org/1999/xlink"
        }
    };
    t.default = n, e.exports = t.default;
}, function(e, t, n) {
    "use strict";
    var r = n(78).default;
    n(83), (t = e.exports = r).default = t;
}, function(e, t, n) {
    "use strict";
    (t = e.exports = n(87).default).default = t;
}, function(e, t, n) {
    "use strict";
    t.a = Object.freeze({
        FullToolbar: "full_toolbar",
        WebToolbar: "web_toolbar"
    });
}, function(e, t, n) {
    "use strict";
    var r = function(e, t, n, r, o, a, i, s) {
        if (!e) {
            var u;
            if (void 0 === t) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                var l = [ n, r, o, a, i, s ], c = 0;
                (u = new Error(t.replace(/%s/g, function() {
                    return l[c++];
                }))).name = "Invariant Violation";
            }
            throw u.framesToPop = 1, u;
        }
    };
    e.exports = r;
}, function(e, t, n) {
    "use strict";
    (function(e) {
        t.a = function(t) {
            var n = t.x, r = t.y, o = t.width, a = t.height, i = t.shown, s = t.children;
            return e("div", {
                className: "equatio-screenshot-reader",
                style: {
                    position: "absolute",
                    width: o + "px",
                    height: a + "px",
                    left: n - 10,
                    top: r - 10,
                    display: i ? "flex" : "none",
                    padding: "10px",
                    zIndex: 99999
                }
            }, s);
        };
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    var r = [ "efeafadncamffgiohgiciboonbjldkfj", "feepmdlmhplaojabeoecaobfmibooaid" ].map(function(e) {
        return {
            id: e,
            regex: new RegExp("^chrome-extension:\\/\\/" + e + "/")
        };
    });
    t.a = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href;
        return r.some(function(t) {
            return t.regex.test(e);
        });
    };
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(1), o = n(20), a = Object(r.d)({
            text: {
                id: "screenshot-reader.context-menu.buttons.copy-latex",
                defaultMessage: "Copy LaTeX"
            }
        });
        t.a = Object(r.e)(function(t) {
            var n = t.latex, r = t.onShownChanged, i = t.intl;
            return e(o.a, {
                value: n,
                onShownChanged: r,
                text: i.formatMessage(a.text)
            });
        });
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(44), o = n.n(r);
        t.a = function(t) {
            var n = t.value, r = t.text;
            return e("li", {
                className: "equatio-screenshot-reader-context-menu-item"
            }, e("button", {
                className: "equatio-screenshot-reader-context-menu-button",
                onClick: function() {
                    return o.a.writeText(n);
                }
            }, r));
        };
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(1), o = n(20), a = Object(r.d)({
            text: {
                id: "screenshot-reader.context-menu.buttons.copy-mathml",
                defaultMessage: "Copy MathML"
            }
        });
        t.a = Object(r.e)(function(t) {
            var n = t.mathML, r = t.onShownChanged, i = t.intl;
            return e(o.a, {
                value: n,
                onShownChanged: r,
                text: i.formatMessage(a.text)
            });
        });
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    var r = n(4), o = n(5), a = function(e) {
        return Object(o.a)(r.a.SendAnalyticsEvent, {
            category: e
        });
    }, i = function() {
        function e(e, t) {
            var n = [], r = !0, o = !1, a = void 0;
            try {
                for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), 
                !t || n.length !== t); r = !0) ;
            } catch (e) {
                o = !0, a = e;
            } finally {
                try {
                    !r && s.return && s.return();
                } finally {
                    if (o) throw a;
                }
            }
            return n;
        }
        return function(t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
    }();
    function s(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var i = t[o](a), s = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(s).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    });
                    e(s);
                }
                return r("next");
            });
        };
    }
    var u = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "enUS";
        switch (e) {
          case "en-GB":
            return "enGB";

          case "en-US":
            return "enUS";

          default:
            return e;
        }
    }, l = void 0;
    t.a = s(function*() {
        if (l) return l;
        a("Web Toolbar Loaded"), yield Object(o.a)(r.a.EnsureLoggedIntoFirebase);
        var e = yield Promise.all([ Object(o.a)(r.a.GetProfile), Object(o.a)(r.a.GetLicense) ]), t = i(e, 2), n = t[0], s = t[1];
        return l = {
            locale: u(n.options.locale || "enUS"),
            license: s
        };
    });
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SpeechManager = void 0;
    var r = n(91), o = n(24), a = n(92);
    t.SpeechManager = {
        speechEngines: [],
        initialised: !1,
        voices: [],
        configuration: new o.Configuration(),
        controller: null,
        voiceToEngineMap: [],
        speechSettings: new a.SpeechSettings(),
        initialise: function() {
            try {
                return this.initialised ? Promise.resolve() : (this.speechEngines.speechserver = new r.SpeechServer(this.speechSettings), 
                this.initialised = !0, this.initialiseEnginesVoices());
            } catch (e) {}
        },
        initialiseEnginesVoices: function() {
            var e = [];
            for (var t in this.speechEngines) this.speechEngines.hasOwnProperty(t) && e.push(this.speechEngines[t].initialise());
            return Promise.all(e);
        },
        getVoices: function(e) {
            var t = this;
            try {
                if (!this.initialised) return Promise.resolve(null);
                if (void 0 == e && (e = !1), e && (this.voices = new Array(), this.voiceToEngineMap = new Array()), 
                Object.keys(this.voices).length > 0) return Promise.resolve(this.voices);
                var n = [], r = function(e) {
                    if (t.speechEngines.hasOwnProperty(e)) {
                        var r = t.speechEngines[e].getVoices().then(function(n) {
                            for (var r in n) n.hasOwnProperty(r) && (t.voices[r] = n[r], t.voiceToEngineMap[r] = t.speechEngines[e]);
                        });
                        n.push(r);
                    }
                };
                for (var o in this.speechEngines) r(o);
                return Promise.all(n).then(function() {
                    return t.voices;
                });
            } catch (e) {
                return Promise.reject(e);
            }
        },
        speakSelection: function(e, t, n, r) {
            var o = this;
            try {
                var a = Promise.resolve();
                0 == Object.keys(this.voices).length && (a = this.getVoices()), a.then(function() {
                    o.voiceToEngineMap[o.speechSettings.get_Voice()];
                    var a = o.configuration.getConfiguration();
                    if (void 0 === r || void 0 === a[r]) o.voiceToEngineMap[o.speechSettings.get_Voice()].speakSelection(e, t, n); else {
                        var i = o.speechSettings.get_Voice();
                        o.speechSettings.set_Voice(a[r].speechoptions.voice), o.voiceToEngineMap[a[r].speechoptions.voice].speakSelection(e, t, n), 
                        o.speechSettings.set_Voice(i);
                    }
                });
            } catch (e) {}
        },
        setVoice: function(e) {
            this.speechSettings.set_Voice(e);
        },
        setSpeed: function(e) {
            this.speechSettings.set_Speed(e);
        },
        stop: function() {
            try {
                if (0 == Object.keys(this.voiceToEngineMap).length) return;
                var e = this.voiceToEngineMap[this.speechSettings.get_Voice()];
                if (void 0 === e) {
                    var t = this.speechSettings.getLocale(), n = this.configuration.getConfiguration();
                    this.speechSettings.set_Voice(n[t].speechoptions.voice), e = this.voiceToEngineMap[this.speechSettings.get_Voice()];
                }
                null !== e && e.stop();
            } catch (e) {}
        },
        pause: function() {
            try {
                if (0 == Object.keys(this.voiceToEngineMap).length) return;
                var e = this.voiceToEngineMap[this.speechSettings.get_Voice()];
                if (void 0 === e) {
                    var t = this.speechSettings.getLocale(), n = this.configuration.getConfiguration();
                    this.speechSettings.set_Voice(n[t].voice), e = this.voiceToEngineMap[this.speechSettings.get_Voice()];
                }
                null !== e && e.pause();
            } catch (e) {}
        }
    };
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }();
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    t.Configuration = function() {
        function e() {
            o(this, e);
        }
        return r(e, [ {
            key: "getConfiguration",
            value: function() {
                return {
                    locale: "en-US",
                    highlighterSiteMap: {
                        "https://docs.google.com/document/": "GDocsParser"
                    },
                    serversettings: {
                        user: "rwforgdocs",
                        speechserver: "https://rwforg.speechstream.net/SpeechServices/",
                        speechmaker: "https://rwforg.speechstream.net/",
                        dictionaryserver: "https://rwgoogle-webservices-4.texthelp.com/v1.11.0/dictionary",
                        translatorserver: "https://rwgoogle-webservices-4.texthelp.com/v1.11.0/translation",
                        picturedictionaryserver: "https://rwgoogle-webservices-4.texthelp.com/v1.11.0/pictureDictionary"
                    },
                    "en-AU": {
                        speechoptions: {
                            voice: "Vocalizer Expressive Karen Premium High 22kHz",
                            continousreading: !0,
                            speed: 50
                        },
                        translator: {
                            translang: "SPANISH",
                            transsource: "ENGLISH_US"
                        },
                        language: {
                            language: "en_US",
                            services: "en_US"
                        }
                    },
                    "en-GB": {
                        speechoptions: {
                            voice: "Vocalizer Expressive Serena Premium High 22kHz",
                            continousreading: !0,
                            speed: 50
                        },
                        translator: {
                            translang: "SPANISH",
                            transsource: "ENGLISH_US"
                        },
                        language: {
                            language: "en_US",
                            services: "en_US"
                        }
                    },
                    "en-US": {
                        speechoptions: {
                            voice: "Vocalizer Expressive Ava Premium High 22kHz",
                            continousreading: !0,
                            speed: 50
                        },
                        translator: {
                            translang: "SPANISH",
                            transsource: "ENGLISH_US"
                        },
                        language: {
                            language: "en_US",
                            services: "en_US"
                        }
                    },
                    fr: {
                        speechoptions: {
                            voice: "Vocalizer Expressive Audrey Premium High 22kHz",
                            continousreading: !0,
                            speed: 50
                        },
                        translator: {
                            translang: "ENGLISH_US",
                            transsource: "FRENCH"
                        },
                        language: {
                            language: "fr",
                            services: "fr"
                        }
                    },
                    "fr-CA": {
                        speechoptions: {
                            voice: "Vocalizer Expressive Amelie Premium High 22kHz",
                            continousreading: !0,
                            speed: 50
                        },
                        translator: {
                            translang: "ENGLISH_US",
                            transsource: "FRENCH"
                        },
                        language: {
                            language: "fr-CA",
                            services: "fr-CA"
                        }
                    },
                    pt: {
                        speechoptions: {
                            voice: "Vocalizer Expressive Luciana Premium High 22kHz",
                            continousreading: !0,
                            speed: 50
                        },
                        translator: {
                            translang: "ENGLISH_US",
                            transsource: "PORTUGUESE"
                        },
                        language: {
                            language: "pt",
                            services: "pt"
                        }
                    },
                    "pt-BR": {
                        speechoptions: {
                            voice: "ScanSoft Raquel_Full_22kHz",
                            continousreading: !0,
                            speed: 50
                        },
                        translator: {
                            translang: "ENGLISH_US",
                            transsource: "PORTUGUESE"
                        },
                        language: {
                            language: "pt-BR",
                            services: "pt-BR"
                        }
                    },
                    nl: {
                        speechoptions: {
                            voice: "ScanSoft Claire_Full_22kHz",
                            continousreading: !0,
                            speed: 50
                        },
                        translator: {
                            translang: "ENGLISH_US",
                            transsource: "DUTCH"
                        },
                        language: {
                            language: "nl",
                            services: "nl"
                        }
                    },
                    "pt-PT": {
                        speechoptions: {
                            voice: "Vocalizer Expressive Luciana Premium High 22kHz",
                            continousreading: !0,
                            speed: 50
                        },
                        translator: {
                            translang: "ENGLISH_US",
                            transsource: "PORTUGUESE"
                        },
                        language: {
                            language: "pt-PT",
                            services: "pt-PT"
                        }
                    },
                    es: {
                        speechoptions: {
                            voice: "Vocalizer Expressive Monica Premium High 22kHz",
                            continousreading: !0,
                            speed: 50
                        },
                        translator: {
                            translang: "ENGLISH_US",
                            transsource: "SPANISH"
                        },
                        language: {
                            language: "es",
                            services: "es"
                        }
                    },
                    "es-419": {
                        speechoptions: {
                            voice: "Vocalizer Expressive Paulina Premium High 22kHz",
                            continousreading: !0,
                            speed: 50
                        },
                        translator: {
                            translang: "ENGLISH_US",
                            transsource: "SPANISH"
                        },
                        language: {
                            language: "es-419",
                            services: "es-419"
                        }
                    },
                    charMap: {
                        8217: "'",
                        96: "'",
                        8482: " ",
                        8212: " "
                    },
                    sentences: {
                        wordEnds: [ "[.?!]$" ],
                        sentenceEndExclusions: [ "Dr.", "Mr.", "Mrs.", "i.e.", "e.g.", "St.", "N.B.", "NB.", "Ltd.", "plc.", "U.S.", "a.m.", "p.m.", "ext.", "vs.", "Jan.", "Feb.", "Mar.", "Apr.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec.", "N.E.", "S.E.", "S.W.", "N.W." ]
                    }
                };
            }
        } ]), e;
    }();
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Symbol.for("texthelp.EventBus"), o = window[r];
    o || (t.EventBus = o = {
        events: {},
        unSubscribe: function(e, t, n) {
            if (null != this.events[e]) for (var r = 0; r < this.events[e].length; r++) this.events[e][r].context == n && this.events[e].splice(r, 1);
        },
        subscribe: function(e, t, n) {
            return null == this.events[e] && (this.events[e] = new Array()), this.events[e].push({
                callback: t,
                context: n
            }), this.events.length - 1;
        },
        publish: function(e) {
            var t = this.events[e];
            if (null != t) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                for (var a = 0; a < t.length; a++) t[a].callback.apply(this, r);
            }
        },
        addListeners: function() {
            window.addEventListener("mousedown", function(e) {
                o.publish("mousedown", e);
            }), window.addEventListener("mousemove", function(e) {
                o.publish("mousemove", e);
            }), window.addEventListener("mouseup", function(e) {
                o.publish("mouseup", e);
            });
        }
    }, o.addListeners(), window[r] = o), t.EventBus = o;
}, function(e, t, n) {
    "use strict";
    var r = n(1), o = n(61), a = n.n(o), i = n(62), s = n.n(i), u = n(63), l = n.n(u), c = n(8), p = n(64), d = (Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    })({}, c, p), f = (Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    })({}, c), h = n(65), m = (Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    })({}, c, h), y = n(66), v = (Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    })({}, c, y);
    function g(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n;
        }
        return Array.from(e);
    }
    n.d(t, "b", function() {
        return x;
    }), n.d(t, "a", function() {
        return _;
    }), Object(r.c)([].concat(g(a.a), g(s.a), g(l.a)));
    var b = {
        enUS: f,
        enGB: d,
        es: m,
        fr: v
    }, w = function() {
        return (Array.isArray(navigator.languages) ? navigator.languages[0] : navigator.language) || navigator.userLanguage;
    }, x = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w();
        return "es" === e || e.startsWith("es-") ? "es" : "fr" === e || e.startsWith("fr-") ? "fr" : "en";
    }, _ = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w();
        return e ? "en-GB" === e ? b.enGB : "en-US" === e ? b.enUS : "es" === e || e.startsWith("es-") ? b.es : "fr" === e || e.startsWith("fr-") ? b.fr : b.enUS : b.enUS;
    };
}, function(e, t, n) {
    "use strict";
    t.extend = o;
    var r = Object.prototype.hasOwnProperty;
    function o(e) {
        var t, n, o, a, i = Array.prototype.slice.call(arguments, 1);
        for (t = 0, n = i.length; t < n; t += 1) if (o = i[t]) for (a in o) r.call(o, a) && (e[a] = o[a]);
        return e;
    }
    t.hop = r;
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(0), o = n(1), a = n(30), i = n.n(a), s = n(31), u = n(33), l = n(68), c = n(51), p = n(15), d = n(60), f = n(26), h = n(67), m = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, y = function() {
            function e(e, t) {
                var n = [], r = !0, o = !1, a = void 0;
                try {
                    for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    o = !0, a = e;
                } finally {
                    try {
                        !r && s.return && s.return();
                    } finally {
                        if (o) throw a;
                    }
                }
                return n;
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }(), v = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }();
        function g(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a), s = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(s).then(function(e) {
                            r("next", e);
                        }, function(e) {
                            r("throw", e);
                        });
                        e(s);
                    }
                    return r("next");
                });
            };
        }
        function b(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function w(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function x(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        var _ = function(e, t) {
            return e.x !== t.x || e.y !== t.y || e.width !== t.width || e.height !== t.height;
        }, k = function(t) {
            function n() {
                b(this, n);
                var e = w(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                return e.resizeListener = function() {
                    e.debounce && clearTimeout(e.debounce), e.debounce = setTimeout(function() {
                        var t = e.state.nodes, n = !1;
                        Array.from(t.entries()).forEach(function(t) {
                            var r = y(t, 2), o = r[0], a = r[1], i = o.getBoundingClientRect(), s = i.left, u = i.top, l = i.width, c = i.height;
                            _({
                                x: s,
                                y: u,
                                width: l,
                                height: c
                            }, a) && (n = !0, e.renderMathNode(o));
                        }), n && e.setState({
                            nodes: t
                        });
                    }, 300);
                }, e.showHelp = function(t) {
                    e.setState({
                        showHelp: t
                    });
                }, e.renderMathNode = function(t) {
                    var n = e.state.nodes, r = Object(h.a)(t), o = r.left, a = r.top, i = r.width, s = r.height, u = window, l = u.scrollY, c = u.scrollX, p = 0, d = 0;
                    "relative" === window.getComputedStyle(document.body, "").getPropertyValue("position") && (p = parseInt(window.getComputedStyle(document.body, "").getPropertyValue("margin-left"), 10), 
                    d = parseInt(window.getComputedStyle(document.body, "").getPropertyValue("margin-top"), 10));
                    var f = {
                        x: o + c - p,
                        y: a + l - d,
                        width: i,
                        height: s
                    };
                    n.set(t, f);
                }, e.state = {
                    nodes: new Map(),
                    showHelp: !1,
                    locale: "en-US",
                    hasMath: !1
                }, g(function*() {
                    var t = yield Object(s.a)(document);
                    t.hasMath && (t.nodes.forEach(e.renderMathNode), e.setState({
                        nodes: e.state.nodes,
                        hasMath: !0
                    }));
                })(), window.addEventListener("resize", e.resizeListener, {
                    passive: !0
                }), e;
            }
            return x(n, r["Component"]), v(n, [ {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("resize", this.resizeListener);
                }
            }, {
                key: "render",
                value: function() {
                    var t = this, n = this.state, r = n.hasMath, a = n.nodes, s = n.locale, h = n.showHelp;
                    return r ? e(o.b, {
                        locale: Object(f.b)(s),
                        messages: Object(f.a)(s)
                    }, e(i.a, {
                        nodeName: "div"
                    }, e("div", {
                        id: "equatio-discover-shadow"
                    }, e("div", {
                        id: "equatio-discover-shadow-wrapper"
                    }, Array.from(a.entries()).map(function(n, r) {
                        var o = y(n, 2), a = o[0], i = o[1];
                        return e(u.a, m({
                            elem: a,
                            outlineArea: i,
                            onInfo: function() {
                                return t.showHelp(!0);
                            },
                            contextMenuMode: p.a.WebToolbar,
                            index: r
                        }, {
                            key: r.toString()
                        }));
                    }), e(l.a, null), e(c.a, null), h && e(d.a, {
                        onClose: function() {
                            return t.showHelp(!1);
                        }
                    }))))) : null;
                }
            } ]), n;
        }();
        t.a = k;
    }).call(this, n(0).h);
}, function(e, t) {}, function(e, t, n) {
    e.exports = function(e) {
        var t = {};
        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
        }
        return n.m = e, n.c = t, n.i = function(e) {
            return e;
        }, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: r
            });
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return n.d(t, "a", t), t;
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, n.p = "", n(n.s = 78);
    }([ function(e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, o = n(14), a = Object.prototype.toString;
        function i(e) {
            return "[object Array]" === a.call(e);
        }
        function s(e) {
            return "[object ArrayBuffer]" === a.call(e);
        }
        function u(e) {
            return "undefined" != typeof FormData && e instanceof FormData;
        }
        function l(e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
        }
        function c(e) {
            return "string" == typeof e;
        }
        function p(e) {
            return "number" == typeof e;
        }
        function d(e) {
            return void 0 === e;
        }
        function f(e) {
            return null !== e && "object" === (void 0 === e ? "undefined" : r(e));
        }
        function h(e) {
            return "[object Date]" === a.call(e);
        }
        function m(e) {
            return "[object File]" === a.call(e);
        }
        function y(e) {
            return "[object Blob]" === a.call(e);
        }
        function v(e) {
            return "[object Function]" === a.call(e);
        }
        function g(e) {
            return f(e) && v(e.pipe);
        }
        function b(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
        }
        function w(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "");
        }
        function x() {
            return "undefined" != typeof window && "undefined" != typeof document && "function" == typeof document.createElement;
        }
        function _(e, t) {
            if (null !== e && void 0 !== e) if ("object" === (void 0 === e ? "undefined" : r(e)) || i(e) || (e = [ e ]), 
            i(e)) for (var n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e); else for (var a in e) e.hasOwnProperty(a) && t.call(null, e[a], a, e);
        }
        function k() {
            var e = {};
            function t(t, n) {
                "object" === r(e[n]) && "object" === (void 0 === t ? "undefined" : r(t)) ? e[n] = k(e[n], t) : e[n] = t;
            }
            for (var n = 0, o = arguments.length; n < o; n++) _(arguments[n], t);
            return e;
        }
        function j(e, t, n) {
            return _(t, function(t, r) {
                e[r] = n && "function" == typeof t ? o(t, n) : t;
            }), e;
        }
        e.exports = {
            isArray: i,
            isArrayBuffer: s,
            isFormData: u,
            isArrayBufferView: l,
            isString: c,
            isNumber: p,
            isObject: f,
            isUndefined: d,
            isDate: h,
            isFile: m,
            isBlob: y,
            isFunction: v,
            isStream: g,
            isURLSearchParams: b,
            isStandardBrowserEnv: x,
            forEach: _,
            merge: k,
            extend: j,
            trim: w
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(3), o = n(10);
        e.exports = function(e) {
            return function t(n, a) {
                switch (arguments.length) {
                  case 0:
                    return t;

                  case 1:
                    return o(n) ? t : r(function(t) {
                        return e(n, t);
                    });

                  default:
                    return o(n) && o(a) ? t : o(n) ? r(function(t) {
                        return e(t, a);
                    }) : o(a) ? r(function(t) {
                        return e(n, t);
                    }) : e(n, a);
                }
            };
        };
    }, function(e, t, n) {
        "use strict";
        var r, o, a = e.exports = {};
        function i() {
            throw new Error("setTimeout has not been defined");
        }
        function s() {
            throw new Error("clearTimeout has not been defined");
        }
        function u(e) {
            if (r === setTimeout) return setTimeout(e, 0);
            if ((r === i || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
            try {
                return r(e, 0);
            } catch (t) {
                try {
                    return r.call(null, e, 0);
                } catch (t) {
                    return r.call(this, e, 0);
                }
            }
        }
        function l(e) {
            if (o === clearTimeout) return clearTimeout(e);
            if ((o === s || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
            try {
                return o(e);
            } catch (t) {
                try {
                    return o.call(null, e);
                } catch (t) {
                    return o.call(this, e);
                }
            }
        }
        !function() {
            try {
                r = "function" == typeof setTimeout ? setTimeout : i;
            } catch (e) {
                r = i;
            }
            try {
                o = "function" == typeof clearTimeout ? clearTimeout : s;
            } catch (e) {
                o = s;
            }
        }();
        var c, p = [], d = !1, f = -1;
        function h() {
            d && c && (d = !1, c.length ? p = c.concat(p) : f = -1, p.length && m());
        }
        function m() {
            if (!d) {
                var e = u(h);
                d = !0;
                for (var t = p.length; t; ) {
                    for (c = p, p = []; ++f < t; ) c && c[f].run();
                    f = -1, t = p.length;
                }
                c = null, d = !1, l(e);
            }
        }
        function y(e, t) {
            this.fun = e, this.array = t;
        }
        function v() {}
        a.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            p.push(new y(e, t)), 1 !== p.length || d || u(m);
        }, y.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", 
        a.versions = {}, a.on = v, a.addListener = v, a.once = v, a.off = v, a.removeListener = v, 
        a.removeAllListeners = v, a.emit = v, a.prependListener = v, a.prependOnceListener = v, 
        a.listeners = function(e) {
            return [];
        }, a.binding = function(e) {
            throw new Error("process.binding is not supported");
        }, a.cwd = function() {
            return "/";
        }, a.chdir = function(e) {
            throw new Error("process.chdir is not supported");
        }, a.umask = function() {
            return 0;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(10);
        e.exports = function(e) {
            return function t(n) {
                return 0 === arguments.length || r(n) ? t : e.apply(this, arguments);
            };
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            return Object.prototype.hasOwnProperty.call(t, e);
        };
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return function() {
                return e;
            };
        }
        var o = function() {};
        o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), 
        o.thatReturnsThis = function() {
            return this;
        }, o.thatReturnsArgument = function(e) {
            return e;
        }, e.exports = o;
    }, function(e, t, n) {
        "use strict";
        (function(t) {
            var n = function(e) {};
            function r(e, t, r, o, a, i, s, u) {
                if (n(t), !e) {
                    var l;
                    if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                        var c = [ r, o, a, i, s, u ], p = 0;
                        (l = new Error(t.replace(/%s/g, function() {
                            return c[p++];
                        }))).name = "Invariant Violation";
                    }
                    throw l.framesToPop = 1, l;
                }
            }
            "production" !== t.env.NODE_ENV && (n = function(e) {
                if (void 0 === e) throw new Error("invariant requires an error message argument");
            }), e.exports = r;
        }).call(t, n(2));
    }, function(e, t, n) {
        "use strict";
        var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        e.exports = r;
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            switch (e) {
              case 0:
                return function() {
                    return t.apply(this, arguments);
                };

              case 1:
                return function(e) {
                    return t.apply(this, arguments);
                };

              case 2:
                return function(e, n) {
                    return t.apply(this, arguments);
                };

              case 3:
                return function(e, n, r) {
                    return t.apply(this, arguments);
                };

              case 4:
                return function(e, n, r, o) {
                    return t.apply(this, arguments);
                };

              case 5:
                return function(e, n, r, o, a) {
                    return t.apply(this, arguments);
                };

              case 6:
                return function(e, n, r, o, a, i) {
                    return t.apply(this, arguments);
                };

              case 7:
                return function(e, n, r, o, a, i, s) {
                    return t.apply(this, arguments);
                };

              case 8:
                return function(e, n, r, o, a, i, s, u) {
                    return t.apply(this, arguments);
                };

              case 9:
                return function(e, n, r, o, a, i, s, u, l) {
                    return t.apply(this, arguments);
                };

              case 10:
                return function(e, n, r, o, a, i, s, u, l, c) {
                    return t.apply(this, arguments);
                };

              default:
                throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
            }
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = Array.isArray || function(e) {
            return null != e && e.length >= 0 && "[object Array]" === Object.prototype.toString.call(e);
        };
    }, function(e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        e.exports = function(e) {
            return null != e && "object" === (void 0 === e ? "undefined" : r(e)) && !0 === e["@@functional/placeholder"];
        };
    }, function(e, t, n) {
        "use strict";
        var r, o, a, i, s = n(3), u = n(4), l = n(59);
        e.exports = (r = !{
            toString: null
        }.propertyIsEnumerable("toString"), o = [ "constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString" ], 
        a = function() {
            return arguments.propertyIsEnumerable("length");
        }(), i = function(e, t) {
            for (var n = 0; n < e.length; ) {
                if (e[n] === t) return !0;
                n += 1;
            }
            return !1;
        }, "function" != typeof Object.keys || a ? s(function(e) {
            if (Object(e) !== e) return [];
            var t, n, s = [], c = a && l(e);
            for (t in e) !u(t, e) || c && "length" === t || (s[s.length] = t);
            if (r) for (n = o.length - 1; n >= 0; ) t = o[n], u(t, e) && !i(s, t) && (s[s.length] = t), 
            n -= 1;
            return s;
        }) : s(function(e) {
            return Object(e) !== e ? [] : Object.keys(e);
        }));
    }, function(e, t, n) {
        "use strict";
        (function(t) {
            var r = n(0), o = n(28), a = n(32), i = n(38), s = n(36), u = n(13), l = "undefined" != typeof window && window.btoa || n(31);
            e.exports = function(e) {
                return new Promise(function(c, p) {
                    var d = e.data, f = e.headers;
                    r.isFormData(d) && delete f["Content-Type"];
                    var h = new XMLHttpRequest(), m = "onreadystatechange", y = !1;
                    if ("test" === t.env.NODE_ENV || "undefined" == typeof window || !window.XDomainRequest || "withCredentials" in h || s(e.url) || (h = new window.XDomainRequest(), 
                    m = "onload", y = !0, h.onprogress = function() {}, h.ontimeout = function() {}), 
                    e.auth) {
                        var v = e.auth.username || "", g = e.auth.password || "";
                        f.Authorization = "Basic " + l(v + ":" + g);
                    }
                    if (h.open(e.method.toUpperCase(), a(e.url, e.params, e.paramsSerializer), !0), 
                    h.timeout = e.timeout, h[m] = function() {
                        if (h && (4 === h.readyState || y) && 0 !== h.status) {
                            var t = "getAllResponseHeaders" in h ? i(h.getAllResponseHeaders()) : null, n = {
                                data: e.responseType && "text" !== e.responseType ? h.response : h.responseText,
                                status: 1223 === h.status ? 204 : h.status,
                                statusText: 1223 === h.status ? "No Content" : h.statusText,
                                headers: t,
                                config: e,
                                request: h
                            };
                            o(c, p, n), h = null;
                        }
                    }, h.onerror = function() {
                        p(u("Network Error", e)), h = null;
                    }, h.ontimeout = function() {
                        p(u("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED")), h = null;
                    }, r.isStandardBrowserEnv()) {
                        var b = n(34), w = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? b.read(e.xsrfCookieName) : void 0;
                        w && (f[e.xsrfHeaderName] = w);
                    }
                    if ("setRequestHeader" in h && r.forEach(f, function(e, t) {
                        void 0 === d && "content-type" === t.toLowerCase() ? delete f[t] : h.setRequestHeader(t, e);
                    }), e.withCredentials && (h.withCredentials = !0), e.responseType) try {
                        h.responseType = e.responseType;
                    } catch (e) {
                        if ("json" !== h.responseType) throw e;
                    }
                    "function" == typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress), 
                    "function" == typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress), 
                    void 0 === d && (d = null), h.send(d);
                });
            };
        }).call(t, n(2));
    }, function(e, t, n) {
        "use strict";
        var r = n(27);
        e.exports = function(e, t, n, o) {
            var a = new Error(e);
            return r(a, t, n, o);
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            return function() {
                for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                return e.apply(t, n);
            };
        };
    }, function(e, t, n) {
        "use strict";
        (function(t) {
            var r = n(5);
            if ("production" !== t.env.NODE_ENV) {
                var o = function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    var o = 0, a = "Warning: " + e.replace(/%s/g, function() {
                        return n[o++];
                    });
                    try {
                        throw new Error(a);
                    } catch (e) {}
                };
                r = function(e, t) {
                    if (void 0 === t) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
                    if (0 !== t.indexOf("Failed Composite propType: ") && !e) {
                        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
                        o.apply(void 0, [ t ].concat(r));
                    }
                };
            }
            e.exports = r;
        }).call(t, n(2));
    }, function(e, t, n) {
        "use strict";
        var r = n(8), o = n(10);
        e.exports = function e(t, n, a) {
            return function() {
                for (var i = [], s = 0, u = t, l = 0; l < n.length || s < arguments.length; ) {
                    var c;
                    l < n.length && (!o(n[l]) || s >= arguments.length) ? c = n[l] : (c = arguments[s], 
                    s += 1), i[l] = c, o(c) || (u -= 1), l += 1;
                }
                return u <= 0 ? a.apply(this, i) : r(u, e(t, i, a));
            };
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(9), o = n(62), a = n(19);
        e.exports = function(e, t, n) {
            return function() {
                var i = arguments.length;
                if (0 === i) return n();
                var s = arguments[i - 1];
                if (!r(s)) {
                    var u = a(arguments, 0, i - 1);
                    if ("function" == typeof s[e]) return s[e].apply(s, u);
                    if (o(s)) return t.apply(null, u)(s);
                }
                return n.apply(this, arguments);
            };
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(69), o = n(45), a = n(70);
        e.exports = function() {
            function e(e, t, n) {
                for (var r = 0, o = n.length; r < o; ) {
                    if ((t = e["@@transducer/step"](t, n[r])) && t["@@transducer/reduced"]) {
                        t = t["@@transducer/value"];
                        break;
                    }
                    r += 1;
                }
                return e["@@transducer/result"](t);
            }
            function t(e, t, n) {
                for (var r = n.next(); !r.done; ) {
                    if ((t = e["@@transducer/step"](t, r.value)) && t["@@transducer/reduced"]) {
                        t = t["@@transducer/value"];
                        break;
                    }
                    r = n.next();
                }
                return e["@@transducer/result"](t);
            }
            function n(e, t, n) {
                return e["@@transducer/result"](n.reduce(o(e["@@transducer/step"], e), t));
            }
            var i = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator";
            return function(o, s, u) {
                if ("function" == typeof o && (o = r(o)), a(u)) return e(o, s, u);
                if ("function" == typeof u.reduce) return n(o, s, u);
                if (null != u[i]) return t(o, s, u[i]());
                if ("function" == typeof u.next) return t(o, s, u);
                throw new TypeError("reduce: list must be array or iterable");
            };
        }();
    }, function(e, t, n) {
        "use strict";
        e.exports = function e(t, n, r) {
            switch (arguments.length) {
              case 1:
                return e(t, 0, t.length);

              case 2:
                return e(t, n, t.length);

              default:
                for (var o = [], a = 0, i = Math.max(0, Math.min(t.length, r) - n); a < i; ) o[a] = t[n + a], 
                a += 1;
                return o;
            }
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = {
            init: function() {
                return this.xf["@@transducer/init"]();
            },
            result: function(e) {
                return this.xf["@@transducer/result"](e);
            }
        };
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.withContext = void 0;
        var r = f(n(46)), o = f(n(49)), a = f(n(71)), i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), u = n(22), l = n(76), c = f(l), p = f(n(44)), d = n(77);
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function h(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function m(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function y(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        var v = [ {
            extensions: [ "js" ],
            tag: "script",
            attrs: {
                type: "text/javascript"
            }
        }, {
            extensions: [ "css" ],
            tag: "style",
            attrs: {}
        } ], g = {
            router: p.default.object,
            store: p.default.object,
            storeSubscription: p.default.object
        }, b = function(e) {
            throw new Error("ReactShadow: " + e + ".");
        }, w = (0, a.default)(function(e) {
            return (0, u.get)(e).then(function(e) {
                return e.data;
            }).catch(function() {
                return "";
            });
        }), x = t.withContext = function(e) {
            var t, n, a = function(t) {
                var n, r;
                return r = n = function(e) {
                    function n() {
                        return h(this, n), m(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
                    }
                    return y(n, l.PureComponent), s(n, [ {
                        key: "getChildContext",
                        value: function() {
                            return t;
                        }
                    }, {
                        key: "componentDidCatch",
                        value: function(e) {
                            b(e);
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.props.children;
                        }
                    } ]), n;
                }(), n.propTypes = {
                    children: p.default.node.isRequired
                }, n.childContextTypes = e, r;
            };
            return n = t = function(e) {
                function t() {
                    var e, n, r;
                    h(this, t);
                    for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
                    return n = r = m(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
                    r.state = {
                        resolving: !1
                    }, r.ContextProvider = a(r.context), r.WrappedComponent = r.props.children, m(r, n);
                }
                return y(t, l.Component), s(t, [ {
                    key: "componentDidMount",
                    value: function() {
                        var e = this, t = this.props, n = t.boundaryMode, r = t.delegatesFocus, o = (0, 
                        d.findDOMNode)(this), a = o.attachShadow ? o.attachShadow({
                            mode: n,
                            delegatesFocus: r
                        }) : o.createShadowRoot(), i = [].concat(this.props.include), s = this.wrapContainer();
                        (0, d.render)(s, a), 0 === i.length ? this.setState({
                            root: a
                        }) : (this.setState({
                            root: a,
                            resolving: !0
                        }), this.attachIncludes(i).then(function() {
                            return e.setState({
                                resolving: !1
                            });
                        }));
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        (0, d.render)(this.wrapContainer(), this.state.root);
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        (0, d.unmountComponentAtNode)(this.state.root);
                    }
                }, {
                    key: "wrapContainer",
                    value: function() {
                        var e = this, t = this.props.children.props.children, n = t.length ? c.default.createElement(this.props.nodeName, null, t) : t, r = this.ContextProvider;
                        return r.prototype.getChildContext = function() {
                            return e.context;
                        }, c.default.createElement(r, null, n);
                    }
                }, {
                    key: "attachIncludes",
                    value: function(e) {
                        var t = this, n = (0, o.default)(function(e) {
                            return e.extension;
                        })(e.map(function(e) {
                            return {
                                path: e,
                                extension: e.split(".").pop()
                            };
                        })), r = Object.keys(n).map(function(e) {
                            var r = v.find(function(t) {
                                return t.extensions.includes(e);
                            }), o = n[e].map(function(e) {
                                return e.path;
                            });
                            !r && b('Files with extension of "' + e + '" are unsupported');
                            var a = document.createElement(r.tag);
                            return Object.keys(r.attrs).map(function(e) {
                                return a.setAttribute(e, r.attrs[e]);
                            }), Promise.all(o.map(w)).then(function(e) {
                                a.innerHTML = e.reduce(function(e, t) {
                                    return e + " " + t;
                                }).trim(), a.innerHTML.length && t.state.root.appendChild(a);
                            });
                        });
                        return Promise.all(r);
                    }
                }, {
                    key: "validate",
                    value: function() {
                        return Array.isArray(this.props.children) && b("You must pass a single child rather than multiple children"), 
                        "string" != typeof this.props.children.type && b("Immediate descendant of <ShadowDOM /> must be a HTML node, rather than a React component"), 
                        !0;
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t, n, o, a, s = this;
                        return this.validate() && (e = l.Children.only(s.props.children), t = (0, r.default)("children", e.props), 
                        n = s.state.resolving ? "resolving" : "resolved", o = ((t.className ? t.className : "") + " " + n).trim(), 
                        a = i({}, t, {
                            className: o
                        }), c.default.createElement(e.type, a));
                    }
                } ]), t;
            }(), t.contextTypes = e, t.propTypes = {
                children: p.default.node.isRequired,
                include: p.default.oneOfType([ p.default.string, p.default.array ]),
                nodeName: p.default.string,
                boundaryMode: p.default.oneOf([ "open", "closed" ]),
                delegatesFocus: p.default.bool
            }, t.defaultProps = {
                include: [],
                nodeName: "span",
                boundaryMode: "open",
                delegatesFocus: !1
            }, n;
        };
        t.default = x(g);
    }, function(e, t, n) {
        "use strict";
        e.exports = n(23);
    }, function(e, t, n) {
        "use strict";
        var r = n(0), o = n(14), a = n(24);
        function i(e) {
            var t = new a(e), n = o(a.prototype.request, t);
            return r.extend(n, a.prototype, t), r.extend(n, t), n;
        }
        var s = i();
        s.Axios = a, s.create = function(e) {
            return i(e);
        }, s.all = function(e) {
            return Promise.all(e);
        }, s.spread = n(39), e.exports = s, e.exports.default = s;
    }, function(e, t, n) {
        "use strict";
        var r = n(30), o = n(0), a = n(25), i = n(26), s = n(35), u = n(33);
        function l(e) {
            this.defaults = o.merge(r, e), this.interceptors = {
                request: new a(),
                response: new a()
            };
        }
        l.prototype.request = function(e) {
            "string" == typeof e && (e = o.merge({
                url: arguments[0]
            }, arguments[1])), (e = o.merge(r, this.defaults, {
                method: "get"
            }, e)).baseURL && !s(e.url) && (e.url = u(e.baseURL, e.url));
            var t = [ i, void 0 ], n = Promise.resolve(e);
            for (this.interceptors.request.forEach(function(e) {
                t.unshift(e.fulfilled, e.rejected);
            }), this.interceptors.response.forEach(function(e) {
                t.push(e.fulfilled, e.rejected);
            }); t.length; ) n = n.then(t.shift(), t.shift());
            return n;
        }, o.forEach([ "delete", "get", "head" ], function(e) {
            l.prototype[e] = function(t, n) {
                return this.request(o.merge(n || {}, {
                    method: e,
                    url: t
                }));
            };
        }), o.forEach([ "post", "put", "patch" ], function(e) {
            l.prototype[e] = function(t, n, r) {
                return this.request(o.merge(r || {}, {
                    method: e,
                    url: t,
                    data: n
                }));
            };
        }), e.exports = l;
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        function o() {
            this.handlers = [];
        }
        o.prototype.use = function(e, t) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t
            }), this.handlers.length - 1;
        }, o.prototype.eject = function(e) {
            this.handlers[e] && (this.handlers[e] = null);
        }, o.prototype.forEach = function(e) {
            r.forEach(this.handlers, function(t) {
                null !== t && e(t);
            });
        }, e.exports = o;
    }, function(e, t, n) {
        "use strict";
        (function(t) {
            var r = n(0), o = n(29);
            e.exports = function(e) {
                var a;
                return e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), 
                e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), 
                r.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], function(t) {
                    delete e.headers[t];
                }), "function" == typeof e.adapter ? a = e.adapter : "undefined" != typeof XMLHttpRequest ? a = n(12) : void 0 !== t && (a = n(12)), 
                Promise.resolve(e).then(a).then(function(t) {
                    return t.data = o(t.data, t.headers, e.transformResponse), t;
                }, function(t) {
                    return t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse)), 
                    Promise.reject(t);
                });
            };
        }).call(t, n(2));
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t, n, r) {
            return e.config = t, n && (e.code = n), e.response = r, e;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(13);
        e.exports = function(e, t, n) {
            var o = n.config.validateStatus;
            n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n)) : e(n);
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = function(e, t, n) {
            return r.forEach(n, function(n) {
                e = n(e, t);
            }), e;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0), o = n(37), a = /^\)\]\}',?\n/, i = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        function s(e, t) {
            !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
        }
        e.exports = {
            transformRequest: [ function(e, t) {
                return o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), 
                e.toString()) : r.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e;
            } ],
            transformResponse: [ function(e) {
                if ("string" == typeof e) {
                    e = e.replace(a, "");
                    try {
                        e = JSON.parse(e);
                    } catch (e) {}
                }
                return e;
            } ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                patch: r.merge(i),
                post: r.merge(i),
                put: r.merge(i)
            },
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(e) {
                return e >= 200 && e < 300;
            }
        };
    }, function(e, t, n) {
        "use strict";
        var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        function o() {
            this.message = "String contains an invalid character";
        }
        function a(e) {
            for (var t, n, a = String(e), i = "", s = 0, u = r; a.charAt(0 | s) || (u = "=", 
            s % 1); i += u.charAt(63 & t >> 8 - s % 1 * 8)) {
                if ((n = a.charCodeAt(s += .75)) > 255) throw new o();
                t = t << 8 | n;
            }
            return i;
        }
        o.prototype = new Error(), o.prototype.code = 5, o.prototype.name = "InvalidCharacterError", 
        e.exports = a;
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        function o(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        }
        e.exports = function(e, t, n) {
            if (!t) return e;
            var a;
            if (n) a = n(t); else if (r.isURLSearchParams(t)) a = t.toString(); else {
                var i = [];
                r.forEach(t, function(e, t) {
                    null !== e && void 0 !== e && (r.isArray(e) && (t += "[]"), r.isArray(e) || (e = [ e ]), 
                    r.forEach(e, function(e) {
                        r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), i.push(o(t) + "=" + o(e));
                    }));
                }), a = i.join("&");
            }
            return a && (e += (-1 === e.indexOf("?") ? "?" : "&") + a), e;
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            return e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "");
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = r.isStandardBrowserEnv() ? {
            write: function(e, t, n, o, a, i) {
                var s = [];
                s.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), 
                r.isString(o) && s.push("path=" + o), r.isString(a) && s.push("domain=" + a), !0 === i && s.push("secure"), 
                document.cookie = s.join("; ");
            },
            read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5);
            }
        } : {
            write: function() {},
            read: function() {
                return null;
            },
            remove: function() {}
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = r.isStandardBrowserEnv() ? function() {
            var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
            function o(e) {
                var r = e;
                return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), 
                {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                };
            }
            return e = o(window.location.href), function(t) {
                var n = r.isString(t) ? o(t) : t;
                return n.protocol === e.protocol && n.host === e.host;
            };
        }() : function() {
            return !0;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = function(e, t) {
            r.forEach(e, function(n, r) {
                r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]);
            });
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = function(e) {
            var t, n, o, a = {};
            return e ? (r.forEach(e.split("\n"), function(e) {
                o = e.indexOf(":"), t = r.trim(e.substr(0, o)).toLowerCase(), n = r.trim(e.substr(o + 1)), 
                t && (a[t] = a[t] ? a[t] + ", " + n : n);
            }), a) : a;
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return function(t) {
                return e.apply(null, t);
            };
        };
    }, function(e, t, n) {
        "use strict";
        var r = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable;
        function i(e) {
            if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e);
        }
        function s() {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e];
                }).join("")) return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                    r[e] = e;
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("");
            } catch (e) {
                return !1;
            }
        }
        e.exports = s() ? Object.assign : function(e, t) {
            for (var n, s, u = i(e), l = 1; l < arguments.length; l++) {
                for (var c in n = Object(arguments[l])) o.call(n, c) && (u[c] = n[c]);
                if (r) {
                    s = r(n);
                    for (var p = 0; p < s.length; p++) a.call(n, s[p]) && (u[s[p]] = n[s[p]]);
                }
            }
            return u;
        };
    }, function(e, t, n) {
        "use strict";
        (function(t) {
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            };
            if ("production" !== t.env.NODE_ENV) var o = n(6), a = n(15), i = n(7), s = {};
            function u(e, n, u, l, c) {
                if ("production" !== t.env.NODE_ENV) for (var p in e) if (e.hasOwnProperty(p)) {
                    var d;
                    try {
                        o("function" == typeof e[p], "%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.", l || "React class", u, p, r(e[p])), 
                        d = e[p](n, p, l, u, null, i);
                    } catch (e) {
                        d = e;
                    }
                    if (a(!d || d instanceof Error, "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", u, p, void 0 === d ? "undefined" : r(d)), 
                    d instanceof Error && !(d.message in s)) {
                        s[d.message] = !0;
                        var f = c ? c() : "";
                        a(!1, "Failed %s type: %s%s", u, d.message, null != f ? f : "");
                    }
                }
            }
            e.exports = u;
        }).call(t, n(2));
    }, function(e, t, n) {
        "use strict";
        var r = n(5), o = n(6), a = n(7);
        e.exports = function() {
            function e(e, t, n, r, i, s) {
                s !== a && o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            }
            function t() {
                return e;
            }
            e.isRequired = e;
            var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t
            };
            return n.checkPropTypes = r, n.PropTypes = n, n;
        };
    }, function(e, t, n) {
        "use strict";
        (function(t) {
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, o = n(5), a = n(6), i = n(15), s = n(40), u = n(7), l = n(41);
            e.exports = function(e, n) {
                var c = "function" == typeof Symbol && Symbol.iterator, p = "@@iterator";
                function d(e) {
                    var t = e && (c && e[c] || e[p]);
                    if ("function" == typeof t) return t;
                }
                var f = "<<anonymous>>", h = {
                    array: g("array"),
                    bool: g("boolean"),
                    func: g("function"),
                    number: g("number"),
                    object: g("object"),
                    string: g("string"),
                    symbol: g("symbol"),
                    any: b(),
                    arrayOf: w,
                    element: x(),
                    instanceOf: _,
                    node: E(),
                    objectOf: j,
                    oneOf: k,
                    oneOfType: S,
                    shape: O,
                    exact: C
                };
                function m(e, t) {
                    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
                }
                function y(e) {
                    this.message = e, this.stack = "";
                }
                function v(e) {
                    if ("production" !== t.env.NODE_ENV) var r = {}, o = 0;
                    function s(s, l, c, p, d, h, m) {
                        if (p = p || f, h = h || c, m !== u) if (n) a(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"); else if ("production" !== t.env.NODE_ENV && "undefined" != typeof console) {
                            var v = p + ":" + c;
                            !r[v] && o < 3 && (i(!1, "You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.", h, p), 
                            r[v] = !0, o++);
                        }
                        return null == l[c] ? s ? null === l[c] ? new y("The " + d + " `" + h + "` is marked as required in `" + p + "`, but its value is `null`.") : new y("The " + d + " `" + h + "` is marked as required in `" + p + "`, but its value is `undefined`.") : null : e(l, c, p, d, h);
                    }
                    var l = s.bind(null, !1);
                    return l.isRequired = s.bind(null, !0), l;
                }
                function g(e) {
                    function t(t, n, r, o, a, i) {
                        var s = t[n];
                        return N(s) !== e ? new y("Invalid " + o + " `" + a + "` of type `" + P(s) + "` supplied to `" + r + "`, expected `" + e + "`.") : null;
                    }
                    return v(t);
                }
                function b() {
                    return v(o.thatReturnsNull);
                }
                function w(e) {
                    function t(t, n, r, o, a) {
                        if ("function" != typeof e) return new y("Property `" + a + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
                        var i = t[n];
                        if (!Array.isArray(i)) return new y("Invalid " + o + " `" + a + "` of type `" + N(i) + "` supplied to `" + r + "`, expected an array.");
                        for (var s = 0; s < i.length; s++) {
                            var l = e(i, s, r, o, a + "[" + s + "]", u);
                            if (l instanceof Error) return l;
                        }
                        return null;
                    }
                    return v(t);
                }
                function x() {
                    function t(t, n, r, o, a) {
                        var i = t[n];
                        return e(i) ? null : new y("Invalid " + o + " `" + a + "` of type `" + N(i) + "` supplied to `" + r + "`, expected a single ReactElement.");
                    }
                    return v(t);
                }
                function _(e) {
                    function t(t, n, r, o, a) {
                        if (!(t[n] instanceof e)) {
                            var i = e.name || f;
                            return new y("Invalid " + o + " `" + a + "` of type `" + M(t[n]) + "` supplied to `" + r + "`, expected instance of `" + i + "`.");
                        }
                        return null;
                    }
                    return v(t);
                }
                function k(e) {
                    if (!Array.isArray(e)) return "production" !== t.env.NODE_ENV && i(!1, "Invalid argument supplied to oneOf, expected an instance of array."), 
                    o.thatReturnsNull;
                    function n(t, n, r, o, a) {
                        for (var i = t[n], s = 0; s < e.length; s++) if (m(i, e[s])) return null;
                        return new y("Invalid " + o + " `" + a + "` of value `" + i + "` supplied to `" + r + "`, expected one of " + JSON.stringify(e) + ".");
                    }
                    return v(n);
                }
                function j(e) {
                    function t(t, n, r, o, a) {
                        if ("function" != typeof e) return new y("Property `" + a + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
                        var i = t[n], s = N(i);
                        if ("object" !== s) return new y("Invalid " + o + " `" + a + "` of type `" + s + "` supplied to `" + r + "`, expected an object.");
                        for (var l in i) if (i.hasOwnProperty(l)) {
                            var c = e(i, l, r, o, a + "." + l, u);
                            if (c instanceof Error) return c;
                        }
                        return null;
                    }
                    return v(t);
                }
                function S(e) {
                    if (!Array.isArray(e)) return "production" !== t.env.NODE_ENV && i(!1, "Invalid argument supplied to oneOfType, expected an instance of array."), 
                    o.thatReturnsNull;
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        if ("function" != typeof r) return i(!1, "Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.", q(r), n), 
                        o.thatReturnsNull;
                    }
                    function a(t, n, r, o, a) {
                        for (var i = 0; i < e.length; i++) {
                            if (null == (0, e[i])(t, n, r, o, a, u)) return null;
                        }
                        return new y("Invalid " + o + " `" + a + "` supplied to `" + r + "`.");
                    }
                    return v(a);
                }
                function E() {
                    function e(e, t, n, r, o) {
                        return T(e[t]) ? null : new y("Invalid " + r + " `" + o + "` supplied to `" + n + "`, expected a ReactNode.");
                    }
                    return v(e);
                }
                function O(e) {
                    function t(t, n, r, o, a) {
                        var i = t[n], s = N(i);
                        if ("object" !== s) return new y("Invalid " + o + " `" + a + "` of type `" + s + "` supplied to `" + r + "`, expected `object`.");
                        for (var l in e) {
                            var c = e[l];
                            if (c) {
                                var p = c(i, l, r, o, a + "." + l, u);
                                if (p) return p;
                            }
                        }
                        return null;
                    }
                    return v(t);
                }
                function C(e) {
                    function t(t, n, r, o, a) {
                        var i = t[n], l = N(i);
                        if ("object" !== l) return new y("Invalid " + o + " `" + a + "` of type `" + l + "` supplied to `" + r + "`, expected `object`.");
                        var c = s({}, t[n], e);
                        for (var p in c) {
                            var d = e[p];
                            if (!d) return new y("Invalid " + o + " `" + a + "` key `" + p + "` supplied to `" + r + "`.\nBad object: " + JSON.stringify(t[n], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
                            var f = d(i, p, r, o, a + "." + p, u);
                            if (f) return f;
                        }
                        return null;
                    }
                    return v(t);
                }
                function T(t) {
                    switch (void 0 === t ? "undefined" : r(t)) {
                      case "number":
                      case "string":
                      case "undefined":
                        return !0;

                      case "boolean":
                        return !t;

                      case "object":
                        if (Array.isArray(t)) return t.every(T);
                        if (null === t || e(t)) return !0;
                        var n = d(t);
                        if (!n) return !1;
                        var o, a = n.call(t);
                        if (n !== t.entries) {
                            for (;!(o = a.next()).done; ) if (!T(o.value)) return !1;
                        } else for (;!(o = a.next()).done; ) {
                            var i = o.value;
                            if (i && !T(i[1])) return !1;
                        }
                        return !0;

                      default:
                        return !1;
                    }
                }
                function L(e, t) {
                    return "symbol" === e || ("Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol);
                }
                function N(e) {
                    var t = void 0 === e ? "undefined" : r(e);
                    return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : L(t, e) ? "symbol" : t;
                }
                function P(e) {
                    if (void 0 === e || null === e) return "" + e;
                    var t = N(e);
                    if ("object" === t) {
                        if (e instanceof Date) return "date";
                        if (e instanceof RegExp) return "regexp";
                    }
                    return t;
                }
                function q(e) {
                    var t = P(e);
                    switch (t) {
                      case "array":
                      case "object":
                        return "an " + t;

                      case "boolean":
                      case "date":
                      case "regexp":
                        return "a " + t;

                      default:
                        return t;
                    }
                }
                function M(e) {
                    return e.constructor && e.constructor.name ? e.constructor.name : f;
                }
                return y.prototype = Error.prototype, h.checkPropTypes = l, h.PropTypes = h, h;
            };
        }).call(t, n(2));
    }, function(e, t, n) {
        "use strict";
        (function(t) {
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e;
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            };
            if ("production" !== t.env.NODE_ENV) {
                var o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, a = function(e) {
                    return "object" === (void 0 === e ? "undefined" : r(e)) && null !== e && e.$$typeof === o;
                }, i = !0;
                e.exports = n(43)(a, i);
            } else e.exports = n(42)();
        }).call(t, n(2));
    }, function(e, t, n) {
        "use strict";
        var r = n(8), o = n(1);
        e.exports = o(function(e, t) {
            return r(e.length, function() {
                return e.apply(t, arguments);
            });
        });
    }, function(e, t, n) {
        "use strict";
        var r = n(1);
        e.exports = r(function(e, t) {
            var n = {};
            for (var r in t) r !== e && (n[r] = t[r]);
            return n;
        });
    }, function(e, t, n) {
        "use strict";
        var r = n(1), o = n(55);
        e.exports = r(function(e, t) {
            return o(e, t, [], []);
        });
    }, function(e, t, n) {
        "use strict";
        var r = n(1), o = n(17), a = n(56), i = n(60), s = n(18), u = n(67), l = n(11);
        e.exports = r(o("filter", u, function(e, t) {
            return i(t) ? s(function(n, r) {
                return e(t[r]) && (n[r] = t[r]), n;
            }, {}, l(t)) : a(e, t);
        }));
    }, function(e, t, n) {
        "use strict";
        var r = n(52), o = n(1), a = n(72);
        e.exports = o(r("groupBy", a(function(e, t) {
            return null == e && (e = []), e.push(t), e;
        }, null)));
    }, function(e, t, n) {
        "use strict";
        var r = n(1);
        e.exports = r(function(e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
        });
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            for (var t, n = []; !(t = e.next()).done; ) n.push(t.value);
            return n;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(9), o = n(19);
        e.exports = function(e, t) {
            return function() {
                var n = arguments.length;
                if (0 === n) return t();
                var a = arguments[n - 1];
                return r(a) || "function" != typeof a[e] ? t.apply(this, arguments) : a[e].apply(a, o(arguments, 0, n - 1));
            };
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return function() {
                return !e.apply(this, arguments);
            };
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(58);
        e.exports = function(e, t) {
            return r(t, e, 0) >= 0;
        };
    }, function(e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, o = n(51), a = n(57), i = n(4), s = n(50), u = n(11), l = n(75);
        e.exports = function e(t, n, c, p) {
            if (s(t, n)) return !0;
            if (l(t) !== l(n)) return !1;
            if (null == t || null == n) return !1;
            if ("function" == typeof t.equals || "function" == typeof n.equals) return "function" == typeof t.equals && t.equals(n) && "function" == typeof n.equals && n.equals(t);
            switch (l(t)) {
              case "Arguments":
              case "Array":
              case "Object":
                if ("function" == typeof t.constructor && "Promise" === a(t.constructor)) return t === n;
                break;

              case "Boolean":
              case "Number":
              case "String":
                if ((void 0 === t ? "undefined" : r(t)) !== (void 0 === n ? "undefined" : r(n)) || !s(t.valueOf(), n.valueOf())) return !1;
                break;

              case "Date":
                if (!s(t.valueOf(), n.valueOf())) return !1;
                break;

              case "Error":
                return t.name === n.name && t.message === n.message;

              case "RegExp":
                if (t.source !== n.source || t.global !== n.global || t.ignoreCase !== n.ignoreCase || t.multiline !== n.multiline || t.sticky !== n.sticky || t.unicode !== n.unicode) return !1;
                break;

              case "Map":
              case "Set":
                if (!e(o(t.entries()), o(n.entries()), c, p)) return !1;
                break;

              case "Int8Array":
              case "Uint8Array":
              case "Uint8ClampedArray":
              case "Int16Array":
              case "Uint16Array":
              case "Int32Array":
              case "Uint32Array":
              case "Float32Array":
              case "Float64Array":
              case "ArrayBuffer":
                break;

              default:
                return !1;
            }
            var d = u(t);
            if (d.length !== u(n).length) return !1;
            for (var f = c.length - 1; f >= 0; ) {
                if (c[f] === t) return p[f] === n;
                f -= 1;
            }
            for (c.push(t), p.push(n), f = d.length - 1; f >= 0; ) {
                var h = d[f];
                if (!i(h, n) || !e(n[h], t[h], c, p)) return !1;
                f -= 1;
            }
            return c.pop(), p.pop(), !0;
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            for (var n = 0, r = t.length, o = []; n < r; ) e(t[n]) && (o[o.length] = t[n]), 
            n += 1;
            return o;
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            var t = String(e).match(/^function (\w*)/);
            return null == t ? "" : t[1];
        };
    }, function(e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, o = n(47);
        e.exports = function(e, t, n) {
            var a, i;
            if ("function" == typeof e.indexOf) switch (void 0 === t ? "undefined" : r(t)) {
              case "number":
                if (0 === t) {
                    for (a = 1 / t; n < e.length; ) {
                        if (0 === (i = e[n]) && 1 / i === a) return n;
                        n += 1;
                    }
                    return -1;
                }
                if (t != t) {
                    for (;n < e.length; ) {
                        if ("number" == typeof (i = e[n]) && i != i) return n;
                        n += 1;
                    }
                    return -1;
                }
                return e.indexOf(t, n);

              case "string":
              case "boolean":
              case "function":
              case "undefined":
                return e.indexOf(t, n);

              case "object":
                if (null === t) return e.indexOf(t, n);
            }
            for (;n < e.length; ) {
                if (o(e[n], t)) return n;
                n += 1;
            }
            return -1;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(4);
        e.exports = function() {
            var e = Object.prototype.toString;
            return "[object Arguments]" === e.call(arguments) ? function(t) {
                return "[object Arguments]" === e.call(t);
            } : function(e) {
                return r("callee", e);
            };
        }();
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return "[object Object]" === Object.prototype.toString.call(e);
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return "[object String]" === Object.prototype.toString.call(e);
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return "function" == typeof e["@@transducer/step"];
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            for (var n = 0, r = t.length, o = Array(r); n < r; ) o[n] = e(t[n]), n += 1;
            return o;
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return '"' + e.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0").replace(/"/g, '\\"') + '"';
        };
    }, function(e, t, n) {
        "use strict";
        var r;
        e.exports = (r = function(e) {
            return (e < 10 ? "0" : "") + e;
        }, "function" == typeof Date.prototype.toISOString ? function(e) {
            return e.toISOString();
        } : function(e) {
            return e.getUTCFullYear() + "-" + r(e.getUTCMonth() + 1) + "-" + r(e.getUTCDate()) + "T" + r(e.getUTCHours()) + ":" + r(e.getUTCMinutes()) + ":" + r(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
        });
    }, function(e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, o = n(54), a = n(63), i = n(64), s = n(65), u = n(11), l = n(73);
        e.exports = function e(t, n) {
            var c = function(r) {
                var a = n.concat([ t ]);
                return o(r, a) ? "<Circular>" : e(r, a);
            }, p = function(e, t) {
                return a(function(t) {
                    return i(t) + ": " + c(e[t]);
                }, t.slice().sort());
            };
            switch (Object.prototype.toString.call(t)) {
              case "[object Arguments]":
                return "(function() { return arguments; }(" + a(c, t).join(", ") + "))";

              case "[object Array]":
                return "[" + a(c, t).concat(p(t, l(function(e) {
                    return /^\d+$/.test(e);
                }, u(t)))).join(", ") + "]";

              case "[object Boolean]":
                return "object" === (void 0 === t ? "undefined" : r(t)) ? "new Boolean(" + c(t.valueOf()) + ")" : t.toString();

              case "[object Date]":
                return "new Date(" + (isNaN(t.valueOf()) ? c(NaN) : i(s(t))) + ")";

              case "[object Null]":
                return "null";

              case "[object Number]":
                return "object" === (void 0 === t ? "undefined" : r(t)) ? "new Number(" + c(t.valueOf()) + ")" : 1 / t == -1 / 0 ? "-0" : t.toString(10);

              case "[object String]":
                return "object" === (void 0 === t ? "undefined" : r(t)) ? "new String(" + c(t.valueOf()) + ")" : i(t);

              case "[object Undefined]":
                return "undefined";

              default:
                if ("function" == typeof t.toString) {
                    var d = t.toString();
                    if ("[object Object]" !== d) return d;
                }
                return "{" + p(t, u(t)).join(", ") + "}";
            }
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(1), o = n(20);
        e.exports = function() {
            function e(e, t) {
                this.xf = t, this.f = e;
            }
            return e.prototype["@@transducer/init"] = o.init, e.prototype["@@transducer/result"] = o.result, 
            e.prototype["@@transducer/step"] = function(e, t) {
                return this.f(t) ? this.xf["@@transducer/step"](e, t) : e;
            }, r(function(t, n) {
                return new e(t, n);
            });
        }();
    }, function(e, t, n) {
        "use strict";
        var r = n(16), o = n(4), a = n(20);
        e.exports = function() {
            function e(e, t, n, r) {
                this.valueFn = e, this.valueAcc = t, this.keyFn = n, this.xf = r, this.inputs = {};
            }
            return e.prototype["@@transducer/init"] = a.init, e.prototype["@@transducer/result"] = function(e) {
                var t;
                for (t in this.inputs) if (o(t, this.inputs) && (e = this.xf["@@transducer/step"](e, this.inputs[t]))["@@transducer/reduced"]) {
                    e = e["@@transducer/value"];
                    break;
                }
                return this.inputs = null, this.xf["@@transducer/result"](e);
            }, e.prototype["@@transducer/step"] = function(e, t) {
                var n = this.keyFn(t);
                return this.inputs[n] = this.inputs[n] || [ n, this.valueAcc ], this.inputs[n][1] = this.valueFn(this.inputs[n][1], t), 
                e;
            }, r(4, [], function(t, n, r, o) {
                return new e(t, n, r, o);
            });
        }();
    }, function(e, t, n) {
        "use strict";
        e.exports = function() {
            function e(e) {
                this.f = e;
            }
            return e.prototype["@@transducer/init"] = function() {
                throw new Error("init not implemented on XWrap");
            }, e.prototype["@@transducer/result"] = function(e) {
                return e;
            }, e.prototype["@@transducer/step"] = function(e, t) {
                return this.f(e, t);
            }, function(t) {
                return new e(t);
            };
        }();
    }, function(e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, o = n(3), a = n(9), i = n(61);
        e.exports = o(function(e) {
            return !!a(e) || !!e && ("object" === (void 0 === e ? "undefined" : r(e)) && (!i(e) && (1 === e.nodeType ? !!e.length : 0 === e.length || e.length > 0 && (e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1)))));
        });
    }, function(e, t, n) {
        "use strict";
        var r = n(8), o = n(3), a = n(4), i = n(74);
        e.exports = o(function(e) {
            var t = {};
            return r(e.length, function() {
                var n = i(arguments);
                return a(n, t) || (t[n] = e.apply(this, arguments)), t[n];
            });
        });
    }, function(e, t, n) {
        "use strict";
        var r = n(16), o = n(17), a = n(4), i = n(18), s = n(68);
        e.exports = r(4, [], o("reduceBy", s, function(e, t, n, r) {
            return i(function(r, o) {
                var i = n(o);
                return r[i] = e(a(i, r) ? r[i] : t, o), r;
            }, {}, r);
        }));
    }, function(e, t, n) {
        "use strict";
        var r = n(53), o = n(1), a = n(48);
        e.exports = o(function(e, t) {
            return a(r(e), t);
        });
    }, function(e, t, n) {
        "use strict";
        var r = n(3), o = n(66);
        e.exports = r(function(e) {
            return o(e, []);
        });
    }, function(e, t, n) {
        "use strict";
        var r = n(3);
        e.exports = r(function(e) {
            return null === e ? "Null" : void 0 === e ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
        });
    }, function(e, t) {
        e.exports = n(2);
    }, function(e, t) {
        e.exports = n(2);
    }, function(e, t, n) {
        e.exports = n(21);
    } ]);
}, function(e, t, n) {
    "use strict";
    var r = n(32), o = n.n(r);
    function a(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var i = t[o](a), s = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(s).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    });
                    e(s);
                }
                return r("next");
            });
        };
    }
    function i(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n;
        }
        return Array.from(e);
    }
    var s, u = function() {
        return {
            hasMath: !1,
            nodes: []
        };
    }, l = function(e) {
        return "block" === window.getComputedStyle(e, "").getPropertyValue("display");
    }, c = function(e) {
        for (var t = e; t.parentNode && !l(t); ) t = t.parentNode;
        return t;
    }, p = function(e) {
        return [].concat(i(Array.from(e.querySelectorAll("[id^=MathJax-Element-][id$=-Frame]")).map(function(e) {
            return e.querySelector(".mjx-math, [id^=MathJax-Span-]");
        })), i(Array.from(e.querySelectorAll("[role='math']"))));
    }, d = function(e) {
        return Array.from(e.querySelectorAll(".katex-html"));
    }, f = function(e) {
        return [].concat(i(Array.from(e.querySelectorAll("fmath")).filter(function(e) {
            return l(e) || !l(e) && null === e.querySelector("table");
        })));
    }, h = function(e) {
        return [].concat(i(Array.from(e.querySelectorAll("img.mwe-math-fallback-image-inline"))));
    }, m = function(e) {
        return [].concat(i(Array.from(e.querySelectorAll("span.texhtml"))));
    }, y = function(e) {
        return [].concat(i(Array.from(e.querySelectorAll("svg[role='math']")).map(function(e) {
            return l(e) ? e : c(e);
        })));
    }, v = function(e) {
        return [].concat(i(Array.from(e.querySelectorAll('img[src^="https://equatio-api.texthelp.com"]'))));
    }, g = function(e) {
        return [].concat(i(p(e)), i(d(e)), i(f(e)), i(h(e)), i(m(e)), i(y(e)), i(v(e))).filter(function(e) {
            return e && e.offsetWidth >= 30 && e.offsetHeight >= 5;
        });
    };
    t.a = (s = a(function*(e) {
        return new Promise(function(t, n) {
            if (0 === document.length) return u();
            var r = function() {
                var t = g(e);
                return {
                    hasMath: t.length > 0,
                    nodes: t
                };
            }, a = function e() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = n.origin, a = n.data;
                o === window.location.origin && a && "EQUATIO_DISCOVERABILITY_MATHJAX" === a.action && (window.removeEventListener("message", e), 
                t(r()));
            };
            o()("chrome-extension://" + chrome.runtime.id + "/content/mathJaxBundle.js", function() {
                window.addEventListener("message", a);
            });
        });
    }), function(e) {
        return s.apply(this, arguments);
    });
}, function(e, t) {
    function n(e, t, n) {
        t(new URIError(n.target.src + " could not be loaded"), n);
    }
    function r(e, t, n) {
        t(null, {
            uri: e,
            event: n
        });
    }
    e.exports = function(e, t) {
        if (!e) throw "missing uri";
        var o = document.head || document.head.getElementsByTagName("head")[0], a = document.createElement("script");
        a.type = "text/javascript", "function" == typeof t && (a.onerror = n.bind(null, e, t), 
        a.onload = r.bind(null, e, t)), o.appendChild(a), a.src = e;
    };
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(0), o = n(34), a = n(37), i = n(48), s = n(4), u = n(5), l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }();
        function c(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a), s = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(s).then(function(e) {
                            r("next", e);
                        }, function(e) {
                            r("throw", e);
                        });
                        e(s);
                    }
                    return r("next");
                });
            };
        }
        function p(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function d(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function f(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        var h = Object.freeze({
            None: 0,
            OCR: 1,
            MathJax: 2,
            Hidden: 3
        }), m = function(t) {
            function n() {
                var e, t, r;
                p(this, n);
                for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
                return t = r = d(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [ this ].concat(a))), 
                r.setOcrResult = function(e) {
                    r.setState(function() {
                        return {
                            status: h.MathJax,
                            latex: e
                        };
                    });
                }, r.dismiss = function(e) {
                    if ("single" === e.type) r.setState(function() {
                        return {
                            visible: !1,
                            moreInfo: !1,
                            status: h.Hidden
                        };
                    }); else {
                        c(function*() {
                            yield Object(u.a)(s.a.DismissMathDiscover, e);
                        })();
                        var t = document.querySelector("#equatio-math-discoverability");
                        t && t.remove();
                    }
                }, r.capture = function() {
                    r.setState(function() {
                        return {
                            status: h.OCR,
                            cropArea: void 0
                        };
                    });
                }, r.cancel = function() {
                    r.setState(function() {
                        return {
                            status: h.MouseCapture,
                            cropArea: void 0
                        };
                    });
                }, d(r, t);
            }
            return f(n, r["Component"]), l(n, [ {
                key: "render",
                value: function() {
                    var t = this.props, n = t.outlineArea, r = t.contextMenuMode, s = t.onInfo, u = t.index, l = this.state, c = l.status, p = l.latex, d = n.x, f = n.y, m = n.width, y = n.height;
                    switch (c) {
                      case h.Hidden:
                        return null;

                      case h.OCR:
                        var v = window, g = v.scrollX, b = v.scrollY, w = v.devicePixelRatio, x = {
                            x: (d - g) * w,
                            y: (f - b) * w,
                            width: m * w,
                            height: y * w
                        };
                        return e(o.a, {
                            displayArea: n,
                            cropArea: x,
                            onOcrResult: this.setOcrResult,
                            parentComponent: "Math Discoverability"
                        });

                      case h.MathJax:
                        return e(a.a, {
                            key: "mathjax",
                            contextMenuMode: r,
                            cropArea: n,
                            latex: p,
                            onClose: this.cancel
                        });

                      default:
                        return e(i.a, {
                            x: d,
                            y: f,
                            width: m,
                            height: y,
                            onInfo: s,
                            index: u,
                            onCapture: this.capture,
                            onDismiss: this.dismiss
                        });
                    }
                }
            } ]), n;
        }();
        t.a = m;
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(0), o = n(4), a = n(5), i = n(17), s = n(36), u = n(18), l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, c = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }();
        function p(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a), s = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(s).then(function(e) {
                            r("next", e);
                        }, function(e) {
                            r("throw", e);
                        });
                        e(s);
                    }
                    return r("next");
                });
            };
        }
        function d(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function f(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function h(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        var m = function(t) {
            function n() {
                return d(this, n), f(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
            }
            return h(n, r["Component"]), c(n, [ {
                key: "componentDidMount",
                value: function() {
                    var e = this, t = document.querySelector("#equatio-inpage-container") || this.loadingArea.closest("#equatio-inpage-container") || document.querySelector("#equatio-discover-shadow") || this.loadingArea.closest("#equatio-discover-shadow");
                    p(function*() {
                        var n = e.props, r = n.cropArea, i = n.parentComponent, l = void 0 === i ? "Screenshot Reader" : i, c = n.onOcrResult;
                        t.classList.add("equatio-hidden");
                        var p = r.x, d = r.y, f = r.width, h = r.height, m = yield Object(s.a)();
                        if (Object(u.a)()) {
                            var y = document.querySelector("#page" + PDFViewerApplication.page).getBoundingClientRect(), v = y.x, g = y.y;
                            p -= v * window.devicePixelRatio, d -= g * window.devicePixelRatio;
                        } else "relative" === window.getComputedStyle(document.body, "").getPropertyValue("position") && (p += parseInt(window.getComputedStyle(document.body, "").getPropertyValue("margin-left"), 10), 
                        d += parseInt(window.getComputedStyle(document.body, "").getPropertyValue("margin-top"), 10));
                        t.classList.remove("equatio-hidden"), e.setState(function() {
                            return {
                                shown: !0
                            };
                        }), Object(a.a)(o.a.SendAnalyticsEvent, {
                            category: l + " - Scan Math"
                        }), c(yield Object(a.a)(o.a.ScanMathpixOcr, {
                            base64: m,
                            x: p,
                            y: d,
                            width: f,
                            height: h
                        }));
                    })();
                }
            }, {
                key: "render",
                value: function() {
                    var t = this, n = this.props.displayArea, r = this.state.shown, o = void 0 !== r && r;
                    return e(i.a, l({}, n, {
                        shown: o
                    }), e("div", {
                        className: "equatio-screenshot-reader-loading",
                        ref: function(e) {
                            t.loadingArea = e;
                        }
                    }, e("div", {
                        className: "equatio-loading-spinner equatio-drawer__content__pane__spinner",
                        style: {
                            height: "40px",
                            width: "40px",
                            "padding-top": 0
                        }
                    })));
                }
            } ]), n;
        }();
        t.a = m;
    }).call(this, n(0).h);
}, function(e, t, n) {
    var r = n(89), o = n(90);
    function a(e, t, n) {
        var a = t && n || 0;
        "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
        var i = (e = e || {}).random || (e.rng || r)();
        if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t) for (var s = 0; s < 16; ++s) t[a + s] = i[s];
        return t || o(i);
    }
    e.exports = a;
}, function(e, t, n) {
    "use strict";
    var r = n(5), o = n(4), a = n(18);
    function i(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var i = t[o](a), s = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(s).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    });
                    e(s);
                }
                return r("next");
            });
        };
    }
    t.a = i(function*() {
        return Object(a.a)() ? document.querySelector("#page" + PDFViewerApplication.page).toDataURL("image/png") : Object(r.a)(o.a.CaptureScreenshot);
    });
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(0), o = n(38), a = n(17), i = n(39), s = n(40), u = n(41), l = n(47), c = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, p = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }();
        function d(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a), s = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(s).then(function(e) {
                            r("next", e);
                        }, function(e) {
                            r("throw", e);
                        });
                        e(s);
                    }
                    return r("next");
                });
            };
        }
        function f(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function h(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function m(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        var y = function(e) {
            return e ? {
                width: "100%",
                height: "100%",
                overflow: "hidden"
            } : {
                width: 0,
                height: 0,
                overflow: "hidden"
            };
        }, v = function(t) {
            function n() {
                f(this, n);
                var e = h(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                return e.onLatexSuccess = function(t, n) {
                    e.setState({
                        finished: !0,
                        speech: t,
                        mathML: n
                    }), e.onPlay();
                }, e.onLatexError = function() {
                    e.setState({
                        error: !0
                    });
                }, e.onPlay = function() {
                    var t = e.state.speech;
                    d(function*() {
                        (yield e.getApi).speak(t);
                    })();
                }, e.onStop = function() {
                    d(function*() {
                        (yield e.getApi).stop();
                    })();
                }, e.getApi = Object(l.a)(), e;
            }
            return m(n, r["Component"]), p(n, [ {
                key: "componentWillUnmount",
                value: function() {
                    this.onStop();
                }
            }, {
                key: "render",
                value: function() {
                    var t = this.props, n = t.latex, r = t.cropArea, l = t.onClose, p = t.contextMenuMode, d = this.state, f = d.finished, h = void 0 !== f && f, m = d.error, v = void 0 !== m && m, g = d.mathML;
                    return e(a.a, c({}, r, {
                        shown: !0
                    }), e(u.a, {
                        finished: h,
                        onPlay: this.onPlay,
                        onStop: this.onStop,
                        onClose: l,
                        latex: n,
                        mathML: g,
                        contextMenuMode: p
                    }), h ? null : e(v ? s.a : i.a, null), e("div", {
                        style: y(h),
                        key: "render-latex"
                    }, e(o.a, {
                        latex: n,
                        onLatexSuccess: this.onLatexSuccess,
                        onLatexError: this.onLatexError
                    })));
                }
            } ]), n;
        }();
        t.a = v;
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(0), o = n(22), a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }();
        function i(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a), s = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(s).then(function(e) {
                            r("next", e);
                        }, function(e) {
                            r("throw", e);
                        });
                        e(s);
                    }
                    return r("next");
                });
            };
        }
        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function u(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function l(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        var c = function(t) {
            function n() {
                s(this, n);
                var e = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                return e.messageListener = function(t) {
                    var n = e.props, r = n.onLatexSuccess, o = n.onLatexError;
                    if ("chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc" === t.origin) if ("equatio_mathjax_sandbox_success" === t.data.action) {
                        var a = t.data || {};
                        r(a.speech, a.mathML);
                    } else "equatio_mathjax_sandbox_error" === t.data.action && o(t.data.message);
                }, e.state = {
                    locale: "enUS"
                }, i(function*() {
                    var t = (yield Object(o.a)()).locale;
                    e.setState({
                        locale: t,
                        loaded: !0
                    }), window.addEventListener("message", e.messageListener);
                })(), e;
            }
            return l(n, r["Component"]), a(n, [ {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("message", this.messageListener);
                }
            }, {
                key: "render",
                value: function() {
                    var t = this.props.latex, n = this.state, r = n.locale;
                    return !!n.loaded && e("iframe", {
                        src: "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/mathjaxFrame/index.html?latex=" + encodeURIComponent(t) + "&locale=" + encodeURIComponent(r),
                        frameBorder: "0",
                        style: {
                            width: "100%",
                            height: "100%",
                            overflow: "hidden"
                        }
                    });
                }
            } ]), n;
        }();
        t.a = c;
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        t.a = function() {
            return e("div", {
                className: "equatio-screenshot-reader-loading"
            }, e("div", {
                className: "equatio-loading-spinner equatio-drawer__content__pane__spinner",
                style: {
                    height: "40px",
                    width: "40px",
                    "padding-top": 0
                }
            }));
        };
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(1), o = Object(r.d)({
            error: {
                id: "screenshot-reader.mathjax.error-display.title",
                defaultMessage: "Uh oh! We couldn't detect any math for this selection"
            }
        });
        t.a = Object(r.e)(function(t) {
            var n = t.intl;
            return e("div", {
                "data-balloon": n.formatMessage(o.error),
                "aria-label": n.formatMessage(o.error)
            }, e("svg", {
                height: "32",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
            }, e("path", {
                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
                style: {
                    fill: "#005F85"
                }
            })));
        });
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(0), o = n(1), a = n(25), i = n(42), s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }();
        function u(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function l(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function c(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        var p = Object(o.d)({
            play: {
                id: "screenshot-reader.mathjax.actions.play",
                defaultMessage: "Play"
            },
            stop: {
                id: "screenshot-reader.mathjax.actions.stop",
                defaultMessage: "Stop"
            },
            moreOptions: {
                id: "screenshot-reader.mathjax.actions.more-options",
                defaultMessage: "More Options"
            },
            close: {
                id: "screenshot-reader.mathjax.actions.close",
                defaultMessage: "Close"
            }
        }), d = function(t) {
            function n() {
                u(this, n);
                var e = l(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                return e.setPlaying = function(t) {
                    return function() {
                        t ? (0, e.props.onPlay)() : (0, e.props.onStop)();
                        e.setState(function() {
                            return {
                                playing: t
                            };
                        });
                    };
                }, e.setShowContextMenu = function(t) {
                    document.removeEventListener("click", e.contextMenuDocumentClickListener), e.setState(function(n) {
                        var r = n.showContextMenu, o = void 0 === t ? !r : t;
                        return o && setTimeout(function() {
                            document.addEventListener("click", e.contextMenuDocumentClickListener);
                        }), {
                            showContextMenu: o
                        };
                    });
                }, e.contextMenuDocumentClickListener = function() {
                    e.setState({
                        showContextMenu: !1
                    });
                }, a.EventBus.subscribe("onthAPIStop", function() {
                    e.setState(function() {
                        return {
                            playing: !1
                        };
                    });
                }, e), e;
            }
            return c(n, r["Component"]), s(n, [ {
                key: "componentWillUnmount",
                value: function() {
                    document.removeEventListener("click", this.contextMenuDocumentClickListener);
                }
            }, {
                key: "render",
                value: function() {
                    var t = this, n = this.state, r = n.playing, o = void 0 === r || r, a = n.showContextMenu, s = void 0 !== a && a, u = this.props, l = u.onClose, c = u.finished, d = u.contextMenuMode, f = u.latex, h = u.mathML, m = u.intl, y = void 0 !== d;
                    return e("div", null, e("ul", {
                        className: "equatio-screenshot-reader-actions",
                        style: {
                            top: "-20px",
                            right: "-20px"
                        }
                    }, c ? [ o ? e("li", {
                        className: "equatio-screenshot-reader-action-item",
                        "data-balloon": m.formatMessage(p.stop)
                    }, e("button", {
                        className: "equatio-screenshot-reader-action-button",
                        "aria-label": m.formatMessage(p.stop),
                        onClick: t.setPlaying(!1)
                    }, e("svg", {
                        viewBox: "0 0 560 560",
                        className: "equatio-screenshot-reader-action-button__icon"
                    }, e("use", {
                        xlinkHref: "#equatio-svg-accessibility-playback-stop"
                    })))) : e("li", {
                        className: "equatio-screenshot-reader-action-item",
                        "data-balloon": m.formatMessage(p.play)
                    }, e("button", {
                        className: "equatio-screenshot-reader-action-button",
                        "aria-label": m.formatMessage(p.play),
                        onClick: t.setPlaying(!0)
                    }, e("svg", {
                        viewBox: "0 0 560 560",
                        className: "equatio-screenshot-reader-action-button__icon"
                    }, e("use", {
                        xlinkHref: "#equatio-svg-accessibility-playback-play"
                    })))), y ? e("li", {
                        className: "equatio-screenshot-reader-action-item",
                        "data-balloon": m.formatMessage(p.moreOptions)
                    }, e("button", {
                        className: "equatio-screenshot-reader-action-button",
                        "aria-label": m.formatMessage(p.moreOptions),
                        onClick: function() {
                            return t.setShowContextMenu();
                        }
                    }, e("svg", {
                        viewBox: "0 0 15 4",
                        className: "equatio-screenshot-reader-action-button__icon"
                    }, e("use", {
                        xlinkHref: "#equatio-floating-svg-input-button-context"
                    })))) : null ] : null, e("li", {
                        className: "equatio-screenshot-reader-action-item",
                        "data-balloon": m.formatMessage(p.close)
                    }, e("button", {
                        className: "equatio-screenshot-reader-action-button",
                        "aria-label": m.formatMessage(p.close),
                        onClick: l
                    }, e("svg", {
                        viewBox: "0 0 11.172 11.172",
                        className: "equatio-screenshot-reader-action-button__icon"
                    }, e("use", {
                        xlinkHref: "#equatio-svg-modal-close"
                    }))))), y ? e(i.a, {
                        shown: s,
                        mode: d,
                        latex: f,
                        mathML: h,
                        onShownChanged: this.setShowContextMenu
                    }) : null);
                }
            } ]), n;
        }();
        t.a = Object(o.e)(d);
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r, o = n(15), a = n(43), i = n(46);
        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var u = (s(r = {}, o.a.FullToolbar, a.a), s(r, o.a.WebToolbar, i.a), r);
        t.a = function(t) {
            var n = t.shown, r = t.mode, o = t.latex, a = t.mathML, i = t.onShownChanged, s = u[r];
            return s ? e(s, {
                shown: n,
                latex: o,
                mathML: a,
                onShownChanged: i
            }) : null;
        };
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(10), o = n.n(r), a = n(19), i = n(21), s = n(45);
        t.a = function(t) {
            var n = t.shown, r = t.latex, u = t.mathML, l = t.onShownChanged;
            return e("ul", {
                className: o()("equatio-screenshot-reader-context-menu", {
                    "equatio-screenshot-reader-context-menu--shown": n
                }),
                style: {
                    top: 12,
                    right: 14,
                    minWidth: 125
                }
            }, e(a.a, {
                latex: r,
                onShownChanged: l
            }), u ? e(i.a, {
                mathML: u,
                onShownChanged: l
            }) : null, e(s.a, {
                latex: r
            }));
        };
    }).call(this, n(0).h);
}, function(e, t, n) {
    var r;
    r = function() {
        return function(e) {
            function t(r) {
                if (n[r]) return n[r].exports;
                var o = n[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
            }
            var n = {};
            return t.m = e, t.c = n, t.d = function(e, n, r) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                });
            }, t.n = function(e) {
                var n = e && e.__esModule ? function() {
                    return e.default;
                } : function() {
                    return e;
                };
                return t.d(n, "a", n), n;
            }, t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }, t.p = "", t(t.s = 0);
        }([ function(e, t, n) {
            "use strict";
            function r(e, t, n) {
                v("listener called"), e.success = !0, t.forEach(function(t, r) {
                    n.clipboardData.setData(r, t), r === w && n.clipboardData.getData(r) != t && (v("setting text/plain failed"), 
                    e.success = !1);
                }), n.preventDefault();
            }
            function o(e) {
                var t = new _(), n = r.bind(this, t, e);
                document.addEventListener("copy", n);
                try {
                    document.execCommand("copy");
                } finally {
                    document.removeEventListener("copy", n);
                }
                return t.success;
            }
            function a(e, t) {
                u(e);
                var n = o(t);
                return l(), n;
            }
            function i(e) {
                var t = document.createElement("div");
                t.setAttribute("style", "-webkit-user-select: text !important"), t.textContent = "temporary element", 
                document.body.appendChild(t);
                var n = a(t, e);
                return document.body.removeChild(t), n;
            }
            function s(e) {
                v("copyTextUsingDOM");
                var t = document.createElement("div");
                t.setAttribute("style", "-webkit-user-select: text !important");
                var n = t;
                t.attachShadow && (v("Using shadow DOM."), n = t.attachShadow({
                    mode: "open"
                }));
                var r = document.createElement("span");
                r.innerText = e, n.appendChild(r), document.body.appendChild(t), u(r);
                var o = document.execCommand("copy");
                return l(), document.body.removeChild(t), o;
            }
            function u(e) {
                var t = document.getSelection(), n = document.createRange();
                n.selectNodeContents(e), t.removeAllRanges(), t.addRange(n);
            }
            function l() {
                document.getSelection().removeAllRanges();
            }
            function c(e) {
                var t = new m.DT();
                return t.setData(w, e), t;
            }
            function p() {
                return "undefined" == typeof ClipboardEvent && void 0 !== window.clipboardData && void 0 !== window.clipboardData.setData;
            }
            function d(e) {
                var t = e.getData(w);
                if (void 0 !== t) return window.clipboardData.setData("Text", t);
                throw "No `text/plain` value was specified.";
            }
            function f() {
                return new y(function(e, t) {
                    var n = window.clipboardData.getData("Text");
                    "" === n ? t(new Error("Empty clipboard or could not read plain text from clipboard")) : e(n);
                });
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var h = n(1), m = n(5), y = "undefined" == typeof Promise ? h.Promise : Promise, v = function(e) {}, g = !0, b = function() {
                (console.warn || console.log).call(arguments);
            }.bind(console, "[clipboard-polyfill]"), w = "text/plain", x = function() {
                function e() {}
                return e.setDebugLog = function(e) {
                    v = e;
                }, e.suppressWarnings = function() {
                    g = !1, m.suppressDTWarnings();
                }, e.write = function(e) {
                    return g && !e.getData(w) && b("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call clipboard.suppressWarnings() to suppress this warning."), 
                    new y(function(t, n) {
                        if (p()) d(e) ? t() : n(new Error("Copying failed, possibly because the user rejected it.")); else {
                            if (o(e)) return v("regular execCopy worked"), void t();
                            if (navigator.userAgent.indexOf("Edge") > -1) return v('UA "Edge" => assuming success'), 
                            void t();
                            if (a(document.body, e)) return v("copyUsingTempSelection worked"), void t();
                            if (i(e)) return v("copyUsingTempElem worked"), void t();
                            var r = e.getData(w);
                            if (void 0 !== r && s(r)) return v("copyTextUsingDOM worked"), void t();
                            n(new Error("Copy command failed."));
                        }
                    });
                }, e.writeText = function(e) {
                    if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(e);
                    var t = new m.DT();
                    return t.setData(w, e), this.write(t);
                }, e.read = function() {
                    return new y(function(e, t) {
                        p() ? f().then(function(t) {
                            return e(c(t));
                        }, t) : t("Read is not supported in your browser.");
                    });
                }, e.readText = function() {
                    return navigator.clipboard && navigator.clipboard.readText ? navigator.clipboard.readText() : p() ? f() : new y(function(e, t) {
                        t("Read is not supported in your browser.");
                    });
                }, e.DT = m.DT, e;
            }();
            t.default = x;
            var _ = function() {
                function e() {
                    this.success = !1;
                }
                return e;
            }();
            e.exports = x;
        }, function(e, t, n) {
            (function(t, r) {
                !function(t, n) {
                    e.exports = n();
                }(0, function() {
                    "use strict";
                    function e(e) {
                        var t = typeof e;
                        return null !== e && ("object" === t || "function" === t);
                    }
                    function o(e) {
                        return "function" == typeof e;
                    }
                    function a(e) {
                        z = e;
                    }
                    function i(e) {
                        H = e;
                    }
                    function s() {
                        return void 0 !== X ? function() {
                            X(l);
                        } : u();
                    }
                    function u() {
                        var e = setTimeout;
                        return function() {
                            return e(l, 1);
                        };
                    }
                    function l() {
                        for (var e = 0; e < B; e += 2) (0, K[e])(K[e + 1]), K[e] = void 0, K[e + 1] = void 0;
                        B = 0;
                    }
                    function c(e, t) {
                        var n = arguments, r = this, o = new this.constructor(d);
                        void 0 === o[Q] && N(o);
                        var a = r._state;
                        return a ? function() {
                            var e = n[a - 1];
                            H(function() {
                                return C(a, o, e, r._result);
                            });
                        }() : j(r, o, e, t), o;
                    }
                    function p(e) {
                        var t = this;
                        if (e && "object" == typeof e && e.constructor === t) return e;
                        var n = new t(d);
                        return w(n, e), n;
                    }
                    function d() {}
                    function f() {
                        return new TypeError("You cannot resolve a promise with itself");
                    }
                    function h() {
                        return new TypeError("A promises callback cannot return that same promise.");
                    }
                    function m(e) {
                        try {
                            return e.then;
                        } catch (e) {
                            return re.error = e, re;
                        }
                    }
                    function y(e, t, n, r) {
                        try {
                            e.call(t, n, r);
                        } catch (e) {
                            return e;
                        }
                    }
                    function v(e, t, n) {
                        H(function(e) {
                            var r = !1, o = y(n, t, function(n) {
                                r || (r = !0, t !== n ? w(e, n) : _(e, n));
                            }, function(t) {
                                r || (r = !0, k(e, t));
                            }, "Settle: " + (e._label || " unknown promise"));
                            !r && o && (r = !0, k(e, o));
                        }, e);
                    }
                    function g(e, t) {
                        t._state === te ? _(e, t._result) : t._state === ne ? k(e, t._result) : j(t, void 0, function(t) {
                            return w(e, t);
                        }, function(t) {
                            return k(e, t);
                        });
                    }
                    function b(e, t, n) {
                        t.constructor === e.constructor && n === c && t.constructor.resolve === p ? g(e, t) : n === re ? (k(e, re.error), 
                        re.error = null) : void 0 === n ? _(e, t) : o(n) ? v(e, t, n) : _(e, t);
                    }
                    function w(t, n) {
                        t === n ? k(t, f()) : e(n) ? b(t, n, m(n)) : _(t, n);
                    }
                    function x(e) {
                        e._onerror && e._onerror(e._result), S(e);
                    }
                    function _(e, t) {
                        e._state === ee && (e._result = t, e._state = te, 0 !== e._subscribers.length && H(S, e));
                    }
                    function k(e, t) {
                        e._state === ee && (e._state = ne, e._result = t, H(x, e));
                    }
                    function j(e, t, n, r) {
                        var o = e._subscribers, a = o.length;
                        e._onerror = null, o[a] = t, o[a + te] = n, o[a + ne] = r, 0 === a && e._state && H(S, e);
                    }
                    function S(e) {
                        var t = e._subscribers, n = e._state;
                        if (0 !== t.length) {
                            for (var r = void 0, o = void 0, a = e._result, i = 0; i < t.length; i += 3) r = t[i], 
                            o = t[i + n], r ? C(n, r, o, a) : o(a);
                            e._subscribers.length = 0;
                        }
                    }
                    function E() {
                        this.error = null;
                    }
                    function O(e, t) {
                        try {
                            return e(t);
                        } catch (e) {
                            return oe.error = e, oe;
                        }
                    }
                    function C(e, t, n, r) {
                        var a = o(n), i = void 0, s = void 0, u = void 0, l = void 0;
                        if (a) {
                            if ((i = O(n, r)) === oe ? (l = !0, s = i.error, i.error = null) : u = !0, t === i) return void k(t, h());
                        } else i = r, u = !0;
                        t._state !== ee || (a && u ? w(t, i) : l ? k(t, s) : e === te ? _(t, i) : e === ne && k(t, i));
                    }
                    function T(e, t) {
                        try {
                            t(function(t) {
                                w(e, t);
                            }, function(t) {
                                k(e, t);
                            });
                        } catch (t) {
                            k(e, t);
                        }
                    }
                    function L() {
                        return ae++;
                    }
                    function N(e) {
                        e[Q] = ae++, e._state = void 0, e._result = void 0, e._subscribers = [];
                    }
                    function P(e, t) {
                        this._instanceConstructor = e, this.promise = new e(d), this.promise[Q] || N(this.promise), 
                        U(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 
                        0 === this.length ? _(this.promise, this._result) : (this.length = this.length || 0, 
                        this._enumerate(t), 0 === this._remaining && _(this.promise, this._result))) : k(this.promise, q());
                    }
                    function q() {
                        return new Error("Array Methods must be provided an Array");
                    }
                    function M(e) {
                        return new P(this, e).promise;
                    }
                    function A(e) {
                        var t = this;
                        return new t(U(e) ? function(n, r) {
                            for (var o = e.length, a = 0; a < o; a++) t.resolve(e[a]).then(n, r);
                        } : function(e, t) {
                            return t(new TypeError("You must pass an array to race."));
                        });
                    }
                    function F(e) {
                        var t = new this(d);
                        return k(t, e), t;
                    }
                    function I() {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                    }
                    function R() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                    }
                    function W(e) {
                        this[Q] = L(), this._result = this._state = void 0, this._subscribers = [], d !== e && ("function" != typeof e && I(), 
                        this instanceof W ? T(this, e) : R());
                    }
                    function D() {
                        var e = void 0;
                        if (void 0 !== r) e = r; else if ("undefined" != typeof self) e = self; else try {
                            e = Function("return this")();
                        } catch (e) {
                            throw new Error("polyfill failed because global object is unavailable in this environment");
                        }
                        var t = e.Promise;
                        if (t) {
                            var n = null;
                            try {
                                n = Object.prototype.toString.call(t.resolve());
                            } catch (e) {}
                            if ("[object Promise]" === n && !t.cast) return;
                        }
                        e.Promise = W;
                    }
                    var U = Array.isArray ? Array.isArray : function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e);
                    }, B = 0, X = void 0, z = void 0, H = function(e, t) {
                        K[B] = e, K[B + 1] = t, 2 === (B += 2) && (z ? z(l) : Z());
                    }, V = "undefined" != typeof window ? window : void 0, G = V || {}, Y = G.MutationObserver || G.WebKitMutationObserver, J = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t), $ = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, K = new Array(1e3), Z = void 0;
                    Z = J ? function() {
                        return t.nextTick(l);
                    } : Y ? function() {
                        var e = 0, t = new Y(l), n = document.createTextNode("");
                        return t.observe(n, {
                            characterData: !0
                        }), function() {
                            n.data = e = ++e % 2;
                        };
                    }() : $ ? function() {
                        var e = new MessageChannel();
                        return e.port1.onmessage = l, function() {
                            return e.port2.postMessage(0);
                        };
                    }() : void 0 === V ? function() {
                        try {
                            var e = n(4);
                            return X = e.runOnLoop || e.runOnContext, s();
                        } catch (e) {
                            return u();
                        }
                    }() : u();
                    var Q = Math.random().toString(36).substring(16), ee = void 0, te = 1, ne = 2, re = new E(), oe = new E(), ae = 0;
                    return P.prototype._enumerate = function(e) {
                        for (var t = 0; this._state === ee && t < e.length; t++) this._eachEntry(e[t], t);
                    }, P.prototype._eachEntry = function(e, t) {
                        var n = this._instanceConstructor, r = n.resolve;
                        if (r === p) {
                            var o = m(e);
                            if (o === c && e._state !== ee) this._settledAt(e._state, t, e._result); else if ("function" != typeof o) this._remaining--, 
                            this._result[t] = e; else if (n === W) {
                                var a = new n(d);
                                b(a, e, o), this._willSettleAt(a, t);
                            } else this._willSettleAt(new n(function(t) {
                                return t(e);
                            }), t);
                        } else this._willSettleAt(r(e), t);
                    }, P.prototype._settledAt = function(e, t, n) {
                        var r = this.promise;
                        r._state === ee && (this._remaining--, e === ne ? k(r, n) : this._result[t] = n), 
                        0 === this._remaining && _(r, this._result);
                    }, P.prototype._willSettleAt = function(e, t) {
                        var n = this;
                        j(e, void 0, function(e) {
                            return n._settledAt(te, t, e);
                        }, function(e) {
                            return n._settledAt(ne, t, e);
                        });
                    }, W.all = M, W.race = A, W.resolve = p, W.reject = F, W._setScheduler = a, W._setAsap = i, 
                    W._asap = H, W.prototype = {
                        constructor: W,
                        then: c,
                        catch: function(e) {
                            return this.then(null, e);
                        }
                    }, W.polyfill = D, W.Promise = W, W;
                });
            }).call(t, n(2), n(3));
        }, function(e, t) {
            function n() {
                throw new Error("setTimeout has not been defined");
            }
            function r() {
                throw new Error("clearTimeout has not been defined");
            }
            function o(e) {
                if (c === setTimeout) return setTimeout(e, 0);
                if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
                try {
                    return c(e, 0);
                } catch (t) {
                    try {
                        return c.call(null, e, 0);
                    } catch (t) {
                        return c.call(this, e, 0);
                    }
                }
            }
            function a(e) {
                if (p === clearTimeout) return clearTimeout(e);
                if ((p === r || !p) && clearTimeout) return p = clearTimeout, clearTimeout(e);
                try {
                    return p(e);
                } catch (t) {
                    try {
                        return p.call(null, e);
                    } catch (t) {
                        return p.call(this, e);
                    }
                }
            }
            function i() {
                m && f && (m = !1, f.length ? h = f.concat(h) : y = -1, h.length && s());
            }
            function s() {
                if (!m) {
                    var e = o(i);
                    m = !0;
                    for (var t = h.length; t; ) {
                        for (f = h, h = []; ++y < t; ) f && f[y].run();
                        y = -1, t = h.length;
                    }
                    f = null, m = !1, a(e);
                }
            }
            function u(e, t) {
                this.fun = e, this.array = t;
            }
            function l() {}
            var c, p, d = e.exports = {};
            !function() {
                try {
                    c = "function" == typeof setTimeout ? setTimeout : n;
                } catch (e) {
                    c = n;
                }
                try {
                    p = "function" == typeof clearTimeout ? clearTimeout : r;
                } catch (e) {
                    p = r;
                }
            }();
            var f, h = [], m = !1, y = -1;
            d.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                h.push(new u(e, t)), 1 !== h.length || m || o(s);
            }, u.prototype.run = function() {
                this.fun.apply(null, this.array);
            }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", 
            d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, 
            d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, 
            d.listeners = function(e) {
                return [];
            }, d.binding = function(e) {
                throw new Error("process.binding is not supported");
            }, d.cwd = function() {
                return "/";
            }, d.chdir = function(e) {
                throw new Error("process.chdir is not supported");
            }, d.umask = function() {
                return 0;
            };
        }, function(e, t) {
            var n;
            n = function() {
                return this;
            }();
            try {
                n = n || Function("return this")() || (0, eval)("this");
            } catch (e) {
                "object" == typeof window && (n = window);
            }
            e.exports = n;
        }, function(e, t) {}, function(e, t, n) {
            "use strict";
            function r() {
                i = !1;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = [ "text/plain", "text/html" ], a = function() {
                (console.warn || console.log).call(arguments);
            }.bind(console, "[clipboard-polyfill]"), i = !0;
            t.suppressDTWarnings = r;
            var s = function() {
                function e() {
                    this.m = {};
                }
                return e.prototype.setData = function(e, t) {
                    i && -1 === o.indexOf(e) && a("Unknown data type: " + e, "Call clipboard.suppressWarnings() to suppress this warning."), 
                    this.m[e] = t;
                }, e.prototype.getData = function(e) {
                    return this.m[e];
                }, e.prototype.forEach = function(e) {
                    for (var t in this.m) e(this.m[t], t);
                }, e;
            }();
            t.DT = s;
        } ]);
    }, e.exports = r();
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(0), o = n(1), a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }();
        function i(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a), s = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(s).then(function(e) {
                            r("next", e);
                        }, function(e) {
                            r("throw", e);
                        });
                        e(s);
                    }
                    return r("next");
                });
            };
        }
        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function u(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function l(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        var c = function(t) {
            function c() {
                var e, t, r;
                s(this, c);
                for (var o = arguments.length, a = Array(o), l = 0; l < o; l++) a[l] = arguments[l];
                return t = r = u(this, (e = c.__proto__ || Object.getPrototypeOf(c)).call.apply(e, [ this ].concat(a))), 
                r.sendToEquatio = i(function*() {
                    var e = yield n.e(1).then(n.t.bind(null, 94, 7)), t = e.Actions, o = e.ToolModes, a = r.props.latex;
                    t.Toolbar.setExtractedMath(a), t.Toolbar.setMode(o.EquationEditor);
                }), u(r, t);
            }
            return l(c, r["Component"]), a(c, [ {
                key: "render",
                value: function() {
                    return e("li", {
                        className: "equatio-screenshot-reader-context-menu-item"
                    }, e("button", {
                        className: "equatio-screenshot-reader-context-menu-button",
                        onClick: this.sendToEquatio
                    }, e(o.a, {
                        id: "screenshot-reader.context-menu.buttons.send-to-equation",
                        defaultMessage: "Edit with EquatIO"
                    })));
                }
            } ]), c;
        }();
        t.a = c;
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(10), o = n.n(r), a = n(19), i = n(21);
        t.a = function(t) {
            var n = t.shown, r = t.latex, s = t.mathML, u = t.onShownChanged;
            return e("ul", {
                className: o()("equatio-screenshot-reader-context-menu", {
                    "equatio-screenshot-reader-context-menu--shown": n
                }),
                style: {
                    top: 12,
                    right: 14,
                    minWidth: 125
                }
            }, e(a.a, {
                latex: r,
                onShownChanged: u
            }), s ? e(i.a, {
                mathML: s,
                onShownChanged: u
            }) : null);
        };
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    var r = n(23), o = n(22);
    function a(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n;
        }
        return Array.from(e);
    }
    function i(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var i = t[o](a), s = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(s).then(function(e) {
                        r("next", e);
                    }, function(e) {
                        r("throw", e);
                    });
                    e(s);
                }
                return r("next");
            });
        };
    }
    var s = function(e) {
        return "enUS" === e ? "en-US" : "enGB" === e ? "en-GB" : "es" === e || "fr" === e ? e : "en-US";
    }, u = function() {
        return '<silence msec="' + (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1) + '"/>';
    }, l = function(e, t) {
        switch (t) {
          case "2":
            return [ "enUS" === e || "enGB" === e ? "two" : "2", u() ];

          case "a":
            return [ "a." ];

          default:
            return [ t ];
        }
    }, c = i(function*() {
        var e;
        return yield r.SpeechManager.initialise(), {
            speak: (e = i(function*(e) {
                var t = (yield Object(o.a)()).locale, n = e.split(" ").reduce(function(e, n) {
                    return [].concat(a(e), a(l(t, n)));
                }, []);
                r.SpeechManager.speakSelection(n, "09807", void 0, s(t));
            }), function(t) {
                return e.apply(this, arguments);
            }),
            stop: function() {
                return r.SpeechManager.stop();
            }
        };
    })();
    t.a = function() {
        return c;
    };
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(0), o = n(49), a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }();
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function u(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        var l = function(t) {
            function n() {
                i(this, n);
                var e = s(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                return e.setSticky = function(t) {
                    e.setState({
                        sticky: t
                    });
                }, e.hoverOver = function() {
                    e.state.sticky || e.setState({
                        hovered: !0
                    });
                }, e.hoverOut = function() {
                    e.state.sticky || e.setState({
                        hovered: !1,
                        sticky: !1
                    });
                }, e.state = {
                    sticky: !1,
                    hovered: !1
                }, e;
            }
            return u(n, r["Component"]), a(n, [ {
                key: "render",
                value: function() {
                    var t = this, n = this.props, r = n.x, a = n.y, i = n.width, s = n.height, u = n.index, l = n.onCapture, c = n.onDismiss, p = n.onInfo, d = this.state, f = d.hovered, h = d.sticky;
                    return e("div", {
                        className: "equatio-discoverability-math-preview equatio-screenshot-reader equatio-screenshot-reader--discoverability",
                        ref: function(e) {
                            t.wrapper = e;
                        },
                        onMouseEnter: h ? null : this.hoverOver,
                        onMouseLeave: h ? null : this.hoverOut,
                        style: {
                            position: "absolute",
                            top: a + "px",
                            left: r + "px",
                            width: i + "px",
                            height: s + "px",
                            border: "2px solid rgba(81, 180, 249, 0.3)",
                            padding: 0,
                            minHeight: "10px",
                            background: "transparent",
                            zIndex: f ? 99999 : 99998 - u
                        }
                    }, e(o.a, {
                        onFocus: this.hoverOver,
                        onBlur: this.hoverOut,
                        setSticky: this.setSticky,
                        sticky: h,
                        hovered: f,
                        width: i,
                        height: s,
                        onCapture: l,
                        onDismiss: c,
                        onInfo: p
                    }));
                }
            } ]), n;
        }();
        t.a = l;
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(1), o = n(50), a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, i = Object(r.d)({
            whatIsThis: {
                id: "math-discoverability.action-buttons.what-is-this",
                defaultMessage: "What is this?"
            },
            captureMath: {
                id: "math-discoverability.action-buttons.capture-math",
                defaultMessage: "Capture Math"
            }
        });
        t.a = Object(r.e)(function(t) {
            var n = t.intl, r = t.hovered, s = t.sticky, u = t.width, l = t.height, c = t.onDismiss, p = t.onCapture, d = t.onInfo, f = t.onFocus, h = t.onBlur, m = t.setSticky;
            return e("div", {
                style: a({
                    opacity: r ? 1 : 0
                }, r ? {
                    minWidth: u,
                    minHeight: l
                } : {})
            }, e(o.a, {
                hovered: r,
                sticky: s,
                onDismiss: c,
                onFocus: f,
                onBlur: h,
                setSticky: m
            }), e("div", {
                style: {
                    top: -41,
                    right: -65,
                    pointerEvents: r ? "all" : "none",
                    position: "absolute",
                    padding: "10px 10px 10px 30%"
                }
            }, e("ul", {
                className: "equatio-screenshot-reader-actions",
                style: {
                    position: "relative",
                    top: "auto",
                    right: "auto"
                }
            }, e("li", {
                className: "equatio-screenshot-reader-action-item",
                "data-balloon": n.formatMessage(i.whatIsThis)
            }, e("button", a({
                className: "equatio-screenshot-reader-action-button",
                "aria-label": n.formatMessage(i.whatIsThis),
                onClick: function() {
                    d(), m(!1);
                }
            }, {
                onFocus: f,
                onBlur: h
            }), e("svg", {
                viewBox: "0 0 24 24",
                className: "equatio-screenshot-reader-action-button__icon equatio-math-discoverability-action-item__icon"
            }, e("use", {
                xlinkHref: "#equatio-floating-svg-input-button-help"
            })))), e("li", {
                className: "equatio-screenshot-reader-action-item",
                "data-balloon": n.formatMessage(i.captureMath)
            }, e("button", a({
                className: "equatio-screenshot-reader-action-button",
                "aria-label": n.formatMessage(i.whatIsThis),
                onClick: function() {
                    p(), m(!1);
                }
            }, {
                onFocus: f,
                onBlur: h
            }), e("svg", {
                viewBox: "0 0 24 24",
                className: "equatio-screenshot-reader-action-button__icon equatio-math-discoverability-action-item__icon"
            }, e("use", {
                xlinkHref: "#equatio-floating-svg-input-button-capture"
            })))))));
        });
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(10), o = n.n(r), a = n(1), i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, s = Object(a.d)({
            hide: {
                id: "math-discoverability.dismiss-menu.hide",
                defaultMessage: "Hide"
            }
        });
        t.a = Object(a.e)(function(t) {
            var n = t.intl, r = t.hovered, u = t.sticky, l = t.onDismiss, c = t.onFocus, p = t.onBlur, d = t.setSticky;
            return e("div", {
                className: "equatio-math-discoverability-action-item",
                style: {
                    top: -35,
                    left: -40,
                    padding: "10px 30px 10px 20px",
                    pointerEvents: r ? "all" : "none"
                }
            }, e("div", {
                "data-balloon": n.formatMessage(s.hide)
            }, e("button", i({
                className: "equatio-screenshot-reader-action-button equatio-math-discoverability-action-item-button",
                "aria-label": n.formatMessage(s.hide),
                onClick: function() {
                    d(!u);
                }
            }, {
                onFocus: c,
                onBlur: p
            }), e("svg", {
                viewBox: "0 0 11.172 11.172",
                className: "equatio-screenshot-reader-action-button__icon"
            }, e("use", {
                xlinkHref: "#equatio-svg-modal-close"
            })))), e("ul", {
                className: o()("equatio-screenshot-reader-context-menu", {
                    "equatio-screenshot-reader-context-menu--shown": u
                }),
                style: {
                    right: "auto",
                    minWidth: 155,
                    top: 38,
                    transformOrigin: "top left",
                    zIndex: 99999,
                    fontSize: 15
                }
            }, e("li", {
                className: "equatio-screenshot-reader-context-menu-item"
            }, e("button", i({
                className: "equatio-screenshot-reader-context-menu-button",
                onClick: function() {
                    return l({
                        type: "single"
                    });
                },
                style: {
                    fontSize: 13
                },
                disabled: !u
            }, {
                onFocus: c
            }), e(a.a, {
                id: "math-discoverability.dismiss-menu.this-equation",
                defaultMessage: "This equation"
            }))), e("li", {
                className: "equatio-screenshot-reader-context-menu-item"
            }, e("button", i({
                className: "equatio-screenshot-reader-context-menu-button",
                onClick: function() {
                    return l({
                        type: "timed",
                        mins: 30
                    });
                },
                style: {
                    fontSize: 13
                },
                disabled: !u
            }, {
                onFocus: c
            }), e(a.a, {
                id: "math-discoverability.dismiss-menu.30-minutes",
                defaultMessage: "All notifications for 30 minutes"
            }))), e("li", {
                className: "equatio-screenshot-reader-context-menu-item"
            }, e("button", i({
                className: "equatio-screenshot-reader-context-menu-button",
                onClick: function() {
                    return l({
                        type: "timed",
                        mins: 480
                    });
                },
                style: {
                    fontSize: 13
                },
                disabled: !u
            }, {
                onFocus: c
            }), e(a.a, {
                id: "math-discoverability.dismiss-menu.8-hours",
                defaultMessage: "All notifications for 8 hours"
            }))), e("li", {
                className: "equatio-screenshot-reader-context-menu-item"
            }, e("button", i({
                className: "equatio-screenshot-reader-context-menu-button",
                onClick: function() {
                    return l({
                        type: "domain"
                    });
                },
                style: {
                    fontSize: 13
                },
                disabled: !u
            }, {
                onFocus: c
            }), e(a.a, {
                id: "math-discoverability.dismiss-menu.never-show-site",
                defaultMessage: "Never show on this site"
            }))), e("li", {
                className: "equatio-screenshot-reader-context-menu-item"
            }, e("button", i({
                className: "equatio-screenshot-reader-context-menu-button",
                onClick: function() {
                    return l({
                        type: "permanent"
                    });
                },
                style: {
                    fontSize: 13
                },
                disabled: !u
            }, {
                onFocus: c
            }), e(a.a, {
                id: "math-discoverability.dismiss-menu.never-show",
                defaultMessage: "Never show this again"
            })))));
        });
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(52), o = n.n(r), a = n(53), i = n.n(a), s = n(54), u = n.n(s), l = n(55), c = n.n(l), p = n(56), d = n.n(p), f = n(57), h = n.n(f), m = n(58), y = n.n(m), v = n(59), g = n.n(v);
        t.a = function() {
            return e("div", null, [ o.a, i.a, u.a, h.a, c.a, d.a, y.a, g.a ].map(function(t) {
                return e("style", {
                    type: "text/css"
                }, t);
            }));
        };
    }).call(this, n(0).h);
}, function(e, t, n) {
    (e.exports = n(7)(void 0)).push([ e.i, '.equatio-inpage-toolbar {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: inline-flex;\n  height: 54px;\n  border-radius: 5px;\n  background: #F0F2F7;\n  box-shadow: 0 0 15px 0 #bbbbbb; }\n\n.equatio-inpage-toolbar-item--spacer {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1; }\n\n.equatio-inpage-toolbar-item {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  width: 51px; }\n\n.equatio-inpage-toolbar-item--logo-button {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  width: 171px;\n  margin-left: 15px; }\n\n.equatio-inpage-toolbar-button,\n.equatio-inpage-drag-target {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  display: block;\n  width: 42px;\n  height: 42px;\n  border-radius: 5px;\n  cursor: pointer; }\n\n.equatio-inpage-toolbar-button:hover, .equatio-inpage-toolbar-button:focus {\n  background: #E3E6EF; }\n\n.equatio-inpage-toolbar-button-image {\n  color: #484848;\n  height: 25px; }\n\n.equatio-inpage-toolbar-button-image--active {\n  color: #00B7FF; }\n\n.equatio-inpage-drag-target:hover .equatio-inpage-drag-target-image, .equatio-inpage-drag-target:focus .equatio-inpage-drag-target-image {\n  color: #494949; }\n\n.equatio-inpage-drag-target-image {\n  color: #ACACAC;\n  width: 14px;\n  height: 14px; }\n\n.equatio-inpage-toolbar-logobutton {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  width: 100%;\n  background: #00B7FF;\n  cursor: pointer;\n  border-radius: 0 5px 5px 0; }\n  .equatio-inpage-toolbar-logobutton:hover, .equatio-inpage-toolbar-logobutton:focus {\n    background: #33c5ff; }\n  .equatio-inpage-toolbar-logobutton .equatio-logo-button__chevron {\n    height: 9px;\n    margin-left: 8px; }\n\n.equatio-screenshot-reader {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  border: 2px solid #00B7FF;\n  background: #F4FBFE;\n  position: relative;\n  min-height: 42px;\n  padding: 10px; }\n\n.equatio-screenshot-reader-actions {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: inline-flex;\n  position: absolute;\n  top: -10px;\n  right: -5px;\n  background: #00B7FF;\n  border-radius: 50px;\n  padding: 5px 10px;\n  border: 2px solid #FFF;\n  box-shadow: 0 0 15px 0 #bbbbbb; }\n\n.equatio-screenshot-reader-action-item {\n  margin: 0 5px 0 0; }\n  .equatio-screenshot-reader-action-item:last-child {\n    margin: 0; }\n\n.equatio-screenshot-reader-action-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: #005F85;\n  width: 20px;\n  height: 20px;\n  cursor: pointer; }\n  .equatio-screenshot-reader-action-button:hover, .equatio-screenshot-reader-action-button:focus {\n    background: #0083b8; }\n\n.equatio-screenshot-reader-action-button__icon {\n  height: 10px;\n  color: #FFF;\n  max-width: 14px; }\n\n.equatio-screenshot-reader-loading .equatio-loading-spinner {\n  height: 80px;\n  padding-top: 50px;\n  background-size: 40px;\n  background-position-y: 30%; }\n\n.equatio-screenshot-reader-loading .equatio-loading-spinner__message {\n  margin: 0; }\n\n.equatio-screenshot-reader-context-menu {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  background: #FFF;\n  border: 1px solid #EFEFEF;\n  box-shadow: 0 0 10px 0 rgba(187, 187, 187, 0.4);\n  position: absolute;\n  top: 25px;\n  right: 30px;\n  transform: scaleX(0) scaleY(0);\n  transform-origin: top right;\n  transition: transform 0.2s ease-in-out;\n  pointer-events: none; }\n  .equatio-screenshot-reader-context-menu.equatio-screenshot-reader-context-menu--shown {\n    pointer-events: all;\n    transform: scaleX(1) scaleY(1); }\n\n.equatio-screenshot-reader-context-menu-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  font-family: "Open Sans", Arial, sans-serif;\n  text-align: left;\n  display: block;\n  width: 100%;\n  -webkit-font-smoothing: antialiased;\n  color: #494949;\n  padding: 10px;\n  font-size: 0.8em;\n  cursor: pointer; }\n  .equatio-screenshot-reader-context-menu-button:hover, .equatio-screenshot-reader-context-menu-button:focus {\n    background: #F4FBFE;\n    color: #000; }\n', "" ]);
}, function(e, t, n) {
    (e.exports = n(7)(void 0)).push([ e.i, ".equatio-screenshot-reader.equatio-screenshot-reader--discoverability {\n  background: transparent; }\n\n.equatio-screenshot-reader .equatio-math-discoverability-actions {\n  left: -5px;\n  right: auto; }\n\n.equatio-screenshot-reader .equatio-math-discoverability-action-item {\n  position: absolute;\n  top: -10px;\n  left: -10px; }\n\n.equatio-screenshot-reader .equatio-math-discoverability-action-item-button {\n  background: #D11515;\n  width: 26px;\n  height: 26px;\n  border: 2px solid #960A0A;\n  box-shadow: 0 0 15px 0 #8A8989; }\n  .equatio-screenshot-reader .equatio-math-discoverability-action-item-button:hover, .equatio-screenshot-reader .equatio-math-discoverability-action-item-button:focus {\n    background: #ea2f2f; }\n\n.equatio-screenshot-reader .equatio-math-discoverability-action-item__icon {\n  width: 14px;\n  height: 14px; }\n", "" ]);
}, function(e, t, n) {
    (e.exports = n(7)(void 0)).push([ e.i, "/* stylelint-disable */\n/* stylelint-enable */\n@keyframes vjXdlbbW_draw {\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_fade {\n  0% {\n    stroke-opacity: 1; }\n  77.77777777777777% {\n    stroke-opacity: 1; }\n  100% {\n    stroke-opacity: 0; } }\n\n@keyframes vjXdlbbW_draw_0 {\n  0% {\n    stroke-dashoffset: 2317; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_1 {\n  0% {\n    stroke-dashoffset: 282; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_2 {\n  0% {\n    stroke-dashoffset: 504; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_3 {\n  0% {\n    stroke-dashoffset: 282; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_4 {\n  0% {\n    stroke-dashoffset: 504; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_5 {\n  0% {\n    stroke-dashoffset: 282; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_6 {\n  0% {\n    stroke-dashoffset: 504; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_7 {\n  0% {\n    stroke-dashoffset: 282; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_8 {\n  0% {\n    stroke-dashoffset: 504; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@-webkit-keyframes rotate {\n  20% {\n    -webkit-transform: rotateY(180deg); }\n  30% {\n    -webkit-transform: rotateY(360deg); }\n  100% {\n    -webkit-transform: rotateY(360deg); } }\n\n.equatio-save-loading-spinner {\n  padding: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  margin: 5px;\n  /* stylelint-disable-next-line */\n  background: #28D88C url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='27' viewBox='0 0 912 912'>%3Cstyle type='text/css'%3E\t.st0{fill:none;stroke:%23FFF;stroke-width:52.5138;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st1{fill:none;stroke:%23FFF;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st2{fill:none;stroke:%23FFF;stroke-width:40.8129;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  %3C/style%3E  %3Cpath class='st0 vjXdlbbW_0' d='M833.3,513.4L523,823.8c-54.5,0-85.6,0-140,0L72.6,513.4c0-54.5,0-85.6,0-140L383,63.1c54.5,0,85.6,0,140,0\tl310.3,310.3C833.3,427.9,833.3,459,833.3,513.4z'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_1' d='M262.8,445.6L461.1,643.9'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_2' d='M453.4,650.2L401.9,701.7L97.8,397.6'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_3' d='M449.1,637.7L647.4,439.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_4' d='M653.7,447.1L705.2,498.6L401,802.7'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_5' d='M643.3,444.5L445,246.2'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_6' d='M452.8,239.8L504.2,188.4L808.4,492.5'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_7' d='M452.8,253.1L254.5,451.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_8' d='M248.2,443.6L196.7,392.2L500.9,88.1'%3E%3C/path%3E  %3Cstyle%3E@supports (-webkit-appearance:none) { .vjXdlbbW_0{stroke-dasharray:2316 2318;stroke-dashoffset:2317;animation:vjXdlbbW_draw_0 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_1{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_1 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_2{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_2 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_3{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_3 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_4{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_4 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_5{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_5 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_6{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_6 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_7{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_7 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_8{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_8 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}@keyframes vjXdlbbW_draw{100%{stroke-dashoffset:0;}}@keyframes vjXdlbbW_fade{0%{stroke-opacity:1;}77.77777777777777%{stroke-opacity:1;}100%{stroke-opacity:0;}}@keyframes vjXdlbbW_draw_0{0%{stroke-dashoffset: 2317}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_1{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_2{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_3{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_4{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_5{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_6{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_7{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_8{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}} }%3C/style%3E</svg>\") 50% 50% no-repeat; }\n\n.equatio-loading-spinner {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  box-sizing: border-box;\n  /* stylelint-disable-next-line */\n  background: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='80' viewBox='0 0 912 912'>%3Cstyle type='text/css'%3E\t.st0{fill:none;stroke:%2300B7FF;stroke-width:52.5138;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st1{fill:none;stroke:%2300B7FF;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st2{fill:none;stroke:%2300B7FF;stroke-width:40.8129;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  %3C/style%3E  %3Cpath class='st0 vjXdlbbW_0' d='M833.3,513.4L523,823.8c-54.5,0-85.6,0-140,0L72.6,513.4c0-54.5,0-85.6,0-140L383,63.1c54.5,0,85.6,0,140,0\tl310.3,310.3C833.3,427.9,833.3,459,833.3,513.4z'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_1' d='M262.8,445.6L461.1,643.9'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_2' d='M453.4,650.2L401.9,701.7L97.8,397.6'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_3' d='M449.1,637.7L647.4,439.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_4' d='M653.7,447.1L705.2,498.6L401,802.7'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_5' d='M643.3,444.5L445,246.2'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_6' d='M452.8,239.8L504.2,188.4L808.4,492.5'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_7' d='M452.8,253.1L254.5,451.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_8' d='M248.2,443.6L196.7,392.2L500.9,88.1'%3E%3C/path%3E  %3Cstyle%3E@supports (-webkit-appearance:none) { .vjXdlbbW_0{stroke-dasharray:2316 2318;stroke-dashoffset:2317;animation:vjXdlbbW_draw_0 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_1{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_1 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_2{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_2 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_3{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_3 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_4{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_4 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_5{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_5 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_6{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_6 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_7{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_7 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_8{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_8 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}@keyframes vjXdlbbW_draw{100%{stroke-dashoffset:0;}}@keyframes vjXdlbbW_fade{0%{stroke-opacity:1;}77.77777777777777%{stroke-opacity:1;}100%{stroke-opacity:0;}}@keyframes vjXdlbbW_draw_0{0%{stroke-dashoffset: 2317}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_1{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_2{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_3{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_4{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_5{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_6{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_7{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_8{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}} }%3C/style%3E</svg>\") 50% 50% no-repeat;\n  padding-top: 100px;\n  background-size: 80px; }\n  .equatio-loading-spinner.equatio-loading-spinner--white {\n    /* stylelint-disable-next-line */\n    background-image: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='80' viewBox='0 0 912 912'>%3Cstyle type='text/css'%3E\t.st0{fill:none;stroke:%23FFF;stroke-width:52.5138;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st1{fill:none;stroke:%23FFF;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st2{fill:none;stroke:%23FFF;stroke-width:40.8129;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  %3C/style%3E  %3Cpath class='st0 vjXdlbbW_0' d='M833.3,513.4L523,823.8c-54.5,0-85.6,0-140,0L72.6,513.4c0-54.5,0-85.6,0-140L383,63.1c54.5,0,85.6,0,140,0\tl310.3,310.3C833.3,427.9,833.3,459,833.3,513.4z'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_1' d='M262.8,445.6L461.1,643.9'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_2' d='M453.4,650.2L401.9,701.7L97.8,397.6'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_3' d='M449.1,637.7L647.4,439.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_4' d='M653.7,447.1L705.2,498.6L401,802.7'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_5' d='M643.3,444.5L445,246.2'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_6' d='M452.8,239.8L504.2,188.4L808.4,492.5'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_7' d='M452.8,253.1L254.5,451.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_8' d='M248.2,443.6L196.7,392.2L500.9,88.1'%3E%3C/path%3E  %3Cstyle%3E@supports (-webkit-appearance:none) { .vjXdlbbW_0{stroke-dasharray:2316 2318;stroke-dashoffset:2317;animation:vjXdlbbW_draw_0 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_1{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_1 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_2{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_2 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_3{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_3 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_4{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_4 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_5{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_5 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_6{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_6 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_7{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_7 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_8{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_8 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}@keyframes vjXdlbbW_draw{100%{stroke-dashoffset:0;}}@keyframes vjXdlbbW_fade{0%{stroke-opacity:1;}77.77777777777777%{stroke-opacity:1;}100%{stroke-opacity:0;}}@keyframes vjXdlbbW_draw_0{0%{stroke-dashoffset: 2317}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_1{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_2{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_3{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_4{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_5{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_6{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_7{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_8{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}} }%3C/style%3E</svg>\"); }\n    .equatio-loading-spinner.equatio-loading-spinner--white .equatio-loading-spinner__message {\n      color: #FFF; }\n\n.equatio-drawer__content__pane__spinner {\n  height: 200px; }\n  .equatio-drawer__content__pane__spinner .equatio-loading-spinner__icon {\n    height: 80px;\n    -webkit-animation-name: rotate;\n    -webkit-animation-duration: 3s;\n    -webkit-animation-iteration-count: infinite;\n    -webkit-animation-timing-function: ease-in-out; }\n\n.equatio-loading-spinner__message {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  color: #00B7FF;\n  font-weight: 600;\n  -webkit-font-smoothing: antialiased; }\n", "" ]);
}, function(e, t, n) {
    (e.exports = n(7)(void 0)).push([ e.i, '.equatio-settings {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1; }\n\n.equatio-settings-pane {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1; }\n\n.equatio-settings-pane--main {\n  -webkit-flex: 2;\n  -ms-flex: 2;\n  flex: 2;\n  padding-top: 55px;\n  overflow-y: auto; }\n\n.equatio-settings-nav {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  background: #F2F2F2; }\n\n.equatio-settings-nav__title {\n  font-family: "Open Sans", Arial, sans-serif;\n  font-weight: 500;\n  -webkit-font-smoothing: antialiased;\n  margin: 20px 15px;\n  color: #414042; }\n\n.equatio-settings-menu {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  margin: 5px 0; }\n\n.equatio-settings-menu-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  display: block;\n  padding: 10px 15px;\n  width: 100%;\n  text-align: left;\n  font-family: Roboto, Arial, sans-serif;\n  font-size: 0.9em;\n  color: #666A70;\n  cursor: pointer; }\n  .equatio-settings-menu-button:hover {\n    background: #e5e5e5; }\n\n.equatio-settings-menu-button--selected {\n  border-left: 5px solid #00B7FF;\n  background: #D8D8D8;\n  padding-left: 10px;\n  font-weight: 600; }\n\n.equatio-settings-logo {\n  color: #00B7FF;\n  height: 35px;\n  margin: 20px auto 30px;\n  display: block; }\n\n.equatio-settings-feedback {\n  display: inline-block;\n  font-family: Roboto, Arial, sans-serif;\n  font-size: 0.9em;\n  margin: 0 15px;\n  /* stylelint-disable */\n  color: #666A70 !important;\n  text-decoration: none !important;\n  /* stylelint-enable */ }\n  .equatio-settings-feedback:hover {\n    text-decoration: underline !important; }\n\n.equatio-settings-fieldset {\n  border: 0;\n  color: #666A70;\n  font-family: Roboto, Arial, sans-serif;\n  margin: 0 20px 10px; }\n  .equatio-settings-fieldset .equatio-select {\n    min-width: 175px; }\n\n.equatio-settings-fieldset__legend {\n  padding: 0;\n  font-weight: 600; }\n\n.equatio-settings-fieldset__list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n\n.equatio-settings-fieldset__list__item {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  padding: 5px 0; }\n  .equatio-settings-fieldset__list__item label {\n    -webkit-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    font-size: 0.9em; }\n\n.equatio-settings-pane-message {\n  margin: 0 20px;\n  text-align: center; }\n\n.equatio-settings-pane-link {\n  /* stylelint-disable */\n  text-decoration: none !important;\n  color: #00B7FF !important;\n  display: inline-block;\n  margin: 0 5px;\n  vertical-align: middle;\n  /* stylelint-enable */ }\n  .equatio-settings-pane-link:hover {\n    text-decoration: underline !important; }\n  .equatio-settings-pane-link svg {\n    height: 22px; }\n', "" ]);
}, function(e, t, n) {
    (e.exports = n(7)(void 0)).push([ e.i, ".equatio-blur-wrapper--shown {\n  -webkit-filter: blur(3px);\n  pointer-events: none; }\n\n.equatio-modal-overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.8);\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: opacity 0.3s ease-in-out;\n  -moz-transition: opacity 0.3s ease-in-out;\n  -ms-transition: opacity 0.3s ease-in-out;\n  -o-transition: opacity 0.3s ease-in-out;\n  transition: opacity 0.3s ease-in-out; }\n\n.equatio-modal-overlay--shown {\n  opacity: 1;\n  pointer-events: all;\n  visibility: visible; }\n\n.equatio-modal-popup {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  min-width: 640px;\n  min-height: 480px;\n  border: 0;\n  background: #FFF;\n  -webkit-box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n  -moz-box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n  box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n  position: relative; }\n\n.equatio-modal-popup__close {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  display: block;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  padding: 5px;\n  cursor: pointer; }\n  .equatio-modal-popup__close:hover .equatio-modal-popup__close__icon {\n    color: #35373b; }\n\n.equatio-modal-popup__close__icon {\n  height: 12px;\n  color: #666A70; }\n", "" ]);
}, function(e, t, n) {
    (e.exports = n(7)(void 0)).push([ e.i, "button[data-balloon]{overflow:visible}[data-balloon]{position:relative}[data-balloon]:after,[data-balloon]:before{-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";filter:alpha(opacity=0);-khtml-opacity:0;-moz-opacity:0;opacity:0;pointer-events:none;-webkit-transition:all .18s ease-out .18s;transition:all .18s ease-out .18s;bottom:100%;left:50%;position:absolute;z-index:10;-webkit-transform:translate(-50%,10px);-ms-transform:translate(-50%,10px);transform:translate(-50%,10px);-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top}[data-balloon]:after{background:rgba(17,17,17,.9);border-radius:4px;color:#fff;content:attr(data-balloon);font-size:12px;padding:.5em 1em;white-space:nowrap;margin-bottom:11px}[data-balloon]:before{background:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%280%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E') no-repeat;background-size:100% auto;height:6px;width:18px;content:\"\";margin-bottom:5px}[data-balloon]:hover:after,[data-balloon]:hover:before,[data-balloon][data-balloon-visible]:after,[data-balloon][data-balloon-visible]:before{-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";filter:alpha(opacity=100);-khtml-opacity:1;-moz-opacity:1;opacity:1;pointer-events:auto;-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0)}[data-balloon].font-awesome:after{font-family:FontAwesome}[data-balloon][data-balloon-break]:after{white-space:pre}[data-balloon-pos=down]:after,[data-balloon-pos=down]:before{bottom:auto;left:50%;top:100%;-webkit-transform:translate(-50%,-10px);-ms-transform:translate(-50%,-10px);transform:translate(-50%,-10px)}[data-balloon-pos=down]:after{margin-top:11px}[data-balloon-pos=down]:before{background:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%28180%2018%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E') no-repeat;background-size:100% auto;height:6px;width:18px;margin-top:5px;margin-bottom:0}[data-balloon-pos=down]:hover:after,[data-balloon-pos=down]:hover:before,[data-balloon-pos=down][data-balloon-visible]:after,[data-balloon-pos=down][data-balloon-visible]:before{-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0)}[data-balloon-pos=left]:after,[data-balloon-pos=left]:before{bottom:auto;left:auto;right:100%;top:50%;-webkit-transform:translate(10px,-50%);-ms-transform:translate(10px,-50%);transform:translate(10px,-50%)}[data-balloon-pos=left]:after{margin-right:11px}[data-balloon-pos=left]:before{background:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%28-90%2018%2018%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E') no-repeat;background-size:100% auto;height:18px;width:6px;margin-right:5px;margin-bottom:0}[data-balloon-pos=left]:hover:after,[data-balloon-pos=left]:hover:before,[data-balloon-pos=left][data-balloon-visible]:after,[data-balloon-pos=left][data-balloon-visible]:before{-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%)}[data-balloon-pos=right]:after,[data-balloon-pos=right]:before{bottom:auto;left:100%;top:50%;-webkit-transform:translate(-10px,-50%);-ms-transform:translate(-10px,-50%);transform:translate(-10px,-50%)}[data-balloon-pos=right]:after{margin-left:11px}[data-balloon-pos=right]:before{background:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%2890%206%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E') no-repeat;background-size:100% auto;height:18px;width:6px;margin-bottom:0;margin-left:5px}[data-balloon-pos=right]:hover:after,[data-balloon-pos=right]:hover:before,[data-balloon-pos=right][data-balloon-visible]:after,[data-balloon-pos=right][data-balloon-visible]:before{-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%)}[data-balloon-length]:after{white-space:normal}[data-balloon-length=small]:after{width:80px}[data-balloon-length=medium]:after{width:150px}[data-balloon-length=large]:after{width:260px}[data-balloon-length=xlarge]:after{width:90vw}@media screen and (min-width:768px){[data-balloon-length=xlarge]:after{width:380px}}[data-balloon-length=fit]:after{width:100%}", "" ]);
}, function(e, t, n) {
    (e.exports = n(7)(void 0)).push([ e.i, "/* Fix for Raw loader */\n.placeholder {}\n\n.equatio-info-dialog {\n    max-width: 640px;\n}\n\n.equatio-dismiss-example {\n    margin: 0;\n    padding: 0;\n    display: inline-flex;\n    -webkit-align-items: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    -webkit-justify-content: center;\n    -moz-justify-content: center;\n    justify-content: center;\n    border-radius: 50%;\n    background: #D11515;\n    width: 22px;\n    height: 22px;\n    border: 2px solid #960A0A;\n    box-shadow: 0 0 15px 0 #8A8989;\n}\n\n.equatio-capture-example {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    background: #005F85;\n    width: 25px;\n    height: 25px;\n}", "" ]);
}, function(e, t, n) {
    (e.exports = n(7)(void 0)).push([ e.i, "#equatio-discover-container {\n    all: initial;\n}\n\n#equatio-discover-shadow-wrapper.equatio-hidden {\n    opacity: 0;\n}\n\n#equatio-discover-shadow-wrapper.equatio-toggle {\n    display: none;\n}\n\n[data-balloon]:after {\n    font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n}", "" ]);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(0), o = n(1), a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }();
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function u(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        var l = Object(o.d)({
            close: {
                id: "math-discoverability.info-dialog.close",
                defaultMessage: "Close"
            }
        }), c = function(t) {
            function n() {
                return i(this, n), s(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
            }
            return u(n, r["Component"]), a(n, [ {
                key: "componentDidMount",
                value: function() {
                    this.closeButton.focus();
                }
            }, {
                key: "render",
                value: function() {
                    var t = this, n = this.props, r = n.intl, a = n.onClose;
                    return e("div", {
                        style: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            background: "rgb(255,255,255,0.8)",
                            zIndex: 99999,
                            fontSize: 15
                        }
                    }, e("div", {
                        className: "equatio-options-dialog"
                    }, e("div", {
                        className: "equatio-modal-popup",
                        ref: function(e) {
                            t.modalPopup = e;
                        }
                    }, e("div", {
                        "data-balloon": r.formatMessage(l.close),
                        style: {
                            width: 22,
                            height: 24,
                            position: "absolute",
                            top: 10,
                            right: 5
                        }
                    }, e("button", {
                        className: "equatio-modal-popup__close",
                        onClick: a,
                        "aria-label": r.formatMessage(l.close),
                        ref: function(e) {
                            t.closeButton = e;
                        }
                    }, e("svg", {
                        viewBox: "0 0 11.172 11.172",
                        className: "equatio-modal-popup__close__icon"
                    }, e("use", {
                        xlinkHref: "#equatio-svg-modal-close"
                    })))), e("section", {
                        className: "equatio-settings",
                        style: {
                            display: "flex",
                            "flex-direction": "column",
                            flex: 1
                        }
                    }, e("nav", {
                        className: "equatio-settings-nav"
                    }, e("h1", {
                        className: "equatio-settings-nav__title"
                    }, e("span", null, e(o.a, {
                        id: "math-discoverability.info-dialog.title",
                        defaultMessage: "About"
                    })))), e("div", {
                        className: "equatio-settings-pane equatio-info-dialog"
                    }, e("div", {
                        className: "equatio-settings-fieldset"
                    }, e("p", null, e("strong", null, e(o.a, {
                        id: "math-discoverability.info-dialog.hey-there",
                        defaultMessage: "Hey there!"
                    })), " ", e(o.a, {
                        id: "math-discoverability.info-dialog.paragraph-1",
                        defaultMessage: "This is a feature of EquatIO, the blue diamond-shaped button you see over there to the right of your address bar."
                    })), e("p", null, e(o.a, {
                        id: "math-discoverability.info-dialog.paragraph-2",
                        defaultMessage: "Among many other things, EquatIO searches the web page you\u2019re on for math content. If it finds any, it will highlight it for you, just as you saw here. Then you can take a screenshot {cameraButton} to convert it into accessible math, have it read aloud, and even copy and paste it into a G Suite App.",
                        values: {
                            cameraButton: e("span", {
                                className: "equatio-capture-example"
                            }, e("svg", {
                                viewBox: "0 0 24 24",
                                className: "equatio-screenshot-reader-action-button__icon equatio-math-discoverability-action-item__icon",
                                style: {
                                    height: 15
                                }
                            }, e("use", {
                                xlinkHref: "#equatio-floating-svg-input-button-capture"
                            })))
                        }
                    })), e("p", null, e(o.a, {
                        id: "math-discoverability.info-dialog.paragraph-3",
                        defaultMessage: "Don\u2019t want EquatIO to search for math content? Select {closeButton} and choose from the drop-down menu to limit when and where EquatIO searches for math.",
                        values: {
                            closeButton: e("span", {
                                className: "equatio-dismiss-example"
                            }, e("svg", {
                                viewBox: "0 0 11.172 11.172",
                                className: "equatio-screenshot-reader-action-button__icon"
                            }, e("use", {
                                xlinkHref: "#equatio-svg-modal-close"
                            })))
                        }
                    })), e("p", null, e("strong", null, e(o.a, {
                        id: "math-discoverability.info-dialog.happy-searching",
                        defaultMessage: "Happy searching!"
                    }))))), e("footer", null, e("svg", {
                        viewBox: "0 0 98.197 22.312",
                        className: "equatio-settings-logo"
                    }, e("use", {
                        xlinkHref: "#equatio-svg-logo-blue"
                    })))))));
                }
            } ]), n;
        }();
        t.a = Object(o.e)(c);
    }).call(this, n(0).h);
}, function(e, t, n) {
    var r;
    r = function() {
        "use strict";
        return [ {
            locale: "en",
            pluralRuleFunction: function(e, t) {
                var n = String(e).split("."), r = !n[1], o = Number(n[0]) == e, a = o && n[0].slice(-1), i = o && n[0].slice(-2);
                return t ? 1 == a && 11 != i ? "one" : 2 == a && 12 != i ? "two" : 3 == a && 13 != i ? "few" : "other" : 1 == e && r ? "one" : "other";
            },
            fields: {
                year: {
                    displayName: "year",
                    relative: {
                        0: "this year",
                        1: "next year",
                        "-1": "last year"
                    },
                    relativeTime: {
                        future: {
                            one: "in {0} year",
                            other: "in {0} years"
                        },
                        past: {
                            one: "{0} year ago",
                            other: "{0} years ago"
                        }
                    }
                },
                month: {
                    displayName: "month",
                    relative: {
                        0: "this month",
                        1: "next month",
                        "-1": "last month"
                    },
                    relativeTime: {
                        future: {
                            one: "in {0} month",
                            other: "in {0} months"
                        },
                        past: {
                            one: "{0} month ago",
                            other: "{0} months ago"
                        }
                    }
                },
                day: {
                    displayName: "day",
                    relative: {
                        0: "today",
                        1: "tomorrow",
                        "-1": "yesterday"
                    },
                    relativeTime: {
                        future: {
                            one: "in {0} day",
                            other: "in {0} days"
                        },
                        past: {
                            one: "{0} day ago",
                            other: "{0} days ago"
                        }
                    }
                },
                hour: {
                    displayName: "hour",
                    relative: {
                        0: "this hour"
                    },
                    relativeTime: {
                        future: {
                            one: "in {0} hour",
                            other: "in {0} hours"
                        },
                        past: {
                            one: "{0} hour ago",
                            other: "{0} hours ago"
                        }
                    }
                },
                minute: {
                    displayName: "minute",
                    relative: {
                        0: "this minute"
                    },
                    relativeTime: {
                        future: {
                            one: "in {0} minute",
                            other: "in {0} minutes"
                        },
                        past: {
                            one: "{0} minute ago",
                            other: "{0} minutes ago"
                        }
                    }
                },
                second: {
                    displayName: "second",
                    relative: {
                        0: "now"
                    },
                    relativeTime: {
                        future: {
                            one: "in {0} second",
                            other: "in {0} seconds"
                        },
                        past: {
                            one: "{0} second ago",
                            other: "{0} seconds ago"
                        }
                    }
                }
            }
        }, {
            locale: "en-001",
            parentLocale: "en"
        }, {
            locale: "en-150",
            parentLocale: "en-001"
        }, {
            locale: "en-AG",
            parentLocale: "en-001"
        }, {
            locale: "en-AI",
            parentLocale: "en-001"
        }, {
            locale: "en-AS",
            parentLocale: "en"
        }, {
            locale: "en-AT",
            parentLocale: "en-150"
        }, {
            locale: "en-AU",
            parentLocale: "en-001"
        }, {
            locale: "en-BB",
            parentLocale: "en-001"
        }, {
            locale: "en-BE",
            parentLocale: "en-001"
        }, {
            locale: "en-BI",
            parentLocale: "en"
        }, {
            locale: "en-BM",
            parentLocale: "en-001"
        }, {
            locale: "en-BS",
            parentLocale: "en-001"
        }, {
            locale: "en-BW",
            parentLocale: "en-001"
        }, {
            locale: "en-BZ",
            parentLocale: "en-001"
        }, {
            locale: "en-CA",
            parentLocale: "en-001"
        }, {
            locale: "en-CC",
            parentLocale: "en-001"
        }, {
            locale: "en-CH",
            parentLocale: "en-150"
        }, {
            locale: "en-CK",
            parentLocale: "en-001"
        }, {
            locale: "en-CM",
            parentLocale: "en-001"
        }, {
            locale: "en-CX",
            parentLocale: "en-001"
        }, {
            locale: "en-CY",
            parentLocale: "en-001"
        }, {
            locale: "en-DE",
            parentLocale: "en-150"
        }, {
            locale: "en-DG",
            parentLocale: "en-001"
        }, {
            locale: "en-DK",
            parentLocale: "en-150"
        }, {
            locale: "en-DM",
            parentLocale: "en-001"
        }, {
            locale: "en-Dsrt",
            pluralRuleFunction: function(e, t) {
                return "other";
            },
            fields: {
                year: {
                    displayName: "Year",
                    relative: {
                        0: "this year",
                        1: "next year",
                        "-1": "last year"
                    },
                    relativeTime: {
                        future: {
                            other: "+{0} y"
                        },
                        past: {
                            other: "-{0} y"
                        }
                    }
                },
                month: {
                    displayName: "Month",
                    relative: {
                        0: "this month",
                        1: "next month",
                        "-1": "last month"
                    },
                    relativeTime: {
                        future: {
                            other: "+{0} m"
                        },
                        past: {
                            other: "-{0} m"
                        }
                    }
                },
                day: {
                    displayName: "Day",
                    relative: {
                        0: "today",
                        1: "tomorrow",
                        "-1": "yesterday"
                    },
                    relativeTime: {
                        future: {
                            other: "+{0} d"
                        },
                        past: {
                            other: "-{0} d"
                        }
                    }
                },
                hour: {
                    displayName: "Hour",
                    relative: {
                        0: "this hour"
                    },
                    relativeTime: {
                        future: {
                            other: "+{0} h"
                        },
                        past: {
                            other: "-{0} h"
                        }
                    }
                },
                minute: {
                    displayName: "Minute",
                    relative: {
                        0: "this minute"
                    },
                    relativeTime: {
                        future: {
                            other: "+{0} min"
                        },
                        past: {
                            other: "-{0} min"
                        }
                    }
                },
                second: {
                    displayName: "Second",
                    relative: {
                        0: "now"
                    },
                    relativeTime: {
                        future: {
                            other: "+{0} s"
                        },
                        past: {
                            other: "-{0} s"
                        }
                    }
                }
            }
        }, {
            locale: "en-ER",
            parentLocale: "en-001"
        }, {
            locale: "en-FI",
            parentLocale: "en-150"
        }, {
            locale: "en-FJ",
            parentLocale: "en-001"
        }, {
            locale: "en-FK",
            parentLocale: "en-001"
        }, {
            locale: "en-FM",
            parentLocale: "en-001"
        }, {
            locale: "en-GB",
            parentLocale: "en-001"
        }, {
            locale: "en-GD",
            parentLocale: "en-001"
        }, {
            locale: "en-GG",
            parentLocale: "en-001"
        }, {
            locale: "en-GH",
            parentLocale: "en-001"
        }, {
            locale: "en-GI",
            parentLocale: "en-001"
        }, {
            locale: "en-GM",
            parentLocale: "en-001"
        }, {
            locale: "en-GU",
            parentLocale: "en"
        }, {
            locale: "en-GY",
            parentLocale: "en-001"
        }, {
            locale: "en-HK",
            parentLocale: "en-001"
        }, {
            locale: "en-IE",
            parentLocale: "en-001"
        }, {
            locale: "en-IL",
            parentLocale: "en-001"
        }, {
            locale: "en-IM",
            parentLocale: "en-001"
        }, {
            locale: "en-IN",
            parentLocale: "en-001"
        }, {
            locale: "en-IO",
            parentLocale: "en-001"
        }, {
            locale: "en-JE",
            parentLocale: "en-001"
        }, {
            locale: "en-JM",
            parentLocale: "en-001"
        }, {
            locale: "en-KE",
            parentLocale: "en-001"
        }, {
            locale: "en-KI",
            parentLocale: "en-001"
        }, {
            locale: "en-KN",
            parentLocale: "en-001"
        }, {
            locale: "en-KY",
            parentLocale: "en-001"
        }, {
            locale: "en-LC",
            parentLocale: "en-001"
        }, {
            locale: "en-LR",
            parentLocale: "en-001"
        }, {
            locale: "en-LS",
            parentLocale: "en-001"
        }, {
            locale: "en-MG",
            parentLocale: "en-001"
        }, {
            locale: "en-MH",
            parentLocale: "en"
        }, {
            locale: "en-MO",
            parentLocale: "en-001"
        }, {
            locale: "en-MP",
            parentLocale: "en"
        }, {
            locale: "en-MS",
            parentLocale: "en-001"
        }, {
            locale: "en-MT",
            parentLocale: "en-001"
        }, {
            locale: "en-MU",
            parentLocale: "en-001"
        }, {
            locale: "en-MW",
            parentLocale: "en-001"
        }, {
            locale: "en-MY",
            parentLocale: "en-001"
        }, {
            locale: "en-NA",
            parentLocale: "en-001"
        }, {
            locale: "en-NF",
            parentLocale: "en-001"
        }, {
            locale: "en-NG",
            parentLocale: "en-001"
        }, {
            locale: "en-NL",
            parentLocale: "en-150"
        }, {
            locale: "en-NR",
            parentLocale: "en-001"
        }, {
            locale: "en-NU",
            parentLocale: "en-001"
        }, {
            locale: "en-NZ",
            parentLocale: "en-001"
        }, {
            locale: "en-PG",
            parentLocale: "en-001"
        }, {
            locale: "en-PH",
            parentLocale: "en-001"
        }, {
            locale: "en-PK",
            parentLocale: "en-001"
        }, {
            locale: "en-PN",
            parentLocale: "en-001"
        }, {
            locale: "en-PR",
            parentLocale: "en"
        }, {
            locale: "en-PW",
            parentLocale: "en-001"
        }, {
            locale: "en-RW",
            parentLocale: "en-001"
        }, {
            locale: "en-SB",
            parentLocale: "en-001"
        }, {
            locale: "en-SC",
            parentLocale: "en-001"
        }, {
            locale: "en-SD",
            parentLocale: "en-001"
        }, {
            locale: "en-SE",
            parentLocale: "en-150"
        }, {
            locale: "en-SG",
            parentLocale: "en-001"
        }, {
            locale: "en-SH",
            parentLocale: "en-001"
        }, {
            locale: "en-SI",
            parentLocale: "en-150"
        }, {
            locale: "en-SL",
            parentLocale: "en-001"
        }, {
            locale: "en-SS",
            parentLocale: "en-001"
        }, {
            locale: "en-SX",
            parentLocale: "en-001"
        }, {
            locale: "en-SZ",
            parentLocale: "en-001"
        }, {
            locale: "en-Shaw",
            pluralRuleFunction: function(e, t) {
                return "other";
            },
            fields: {
                year: {
                    displayName: "Year",
                    relative: {
                        0: "this year",
                        1: "next year",
                        "-1": "last year"
                    },
                    relativeTime: {
                        future: {
                            other: "+{0} y"
                        },
                        past: {
                            other: "-{0} y"
                        }
                    }
                },
                month: {
                    displayName: "Month",
                    relative: {
                        0: "this month",
                        1: "next month",
                        "-1": "last month"
                    },
                    relativeTime: {
                        future: {
                            other: "+{0} m"
                        },
                        past: {
                            other: "-{0} m"
                        }
                    }
                },
                day: {
                    displayName: "Day",
                    relative: {
                        0: "today",
                        1: "tomorrow",
                        "-1": "yesterday"
                    },
                    relativeTime: {
                        future: {
                            other: "+{0} d"
                        },
                        past: {
                            other: "-{0} d"
                        }
                    }
                },
                hour: {
                    displayName: "Hour",
                    relative: {
                        0: "this hour"
                    },
                    relativeTime: {
                        future: {
                            other: "+{0} h"
                        },
                        past: {
                            other: "-{0} h"
                        }
                    }
                },
                minute: {
                    displayName: "Minute",
                    relative: {
                        0: "this minute"
                    },
                    relativeTime: {
                        future: {
                            other: "+{0} min"
                        },
                        past: {
                            other: "-{0} min"
                        }
                    }
                },
                second: {
                    displayName: "Second",
                    relative: {
                        0: "now"
                    },
                    relativeTime: {
                        future: {
                            other: "+{0} s"
                        },
                        past: {
                            other: "-{0} s"
                        }
                    }
                }
            }
        }, {
            locale: "en-TC",
            parentLocale: "en-001"
        }, {
            locale: "en-TK",
            parentLocale: "en-001"
        }, {
            locale: "en-TO",
            parentLocale: "en-001"
        }, {
            locale: "en-TT",
            parentLocale: "en-001"
        }, {
            locale: "en-TV",
            parentLocale: "en-001"
        }, {
            locale: "en-TZ",
            parentLocale: "en-001"
        }, {
            locale: "en-UG",
            parentLocale: "en-001"
        }, {
            locale: "en-UM",
            parentLocale: "en"
        }, {
            locale: "en-US",
            parentLocale: "en"
        }, {
            locale: "en-VC",
            parentLocale: "en-001"
        }, {
            locale: "en-VG",
            parentLocale: "en-001"
        }, {
            locale: "en-VI",
            parentLocale: "en"
        }, {
            locale: "en-VU",
            parentLocale: "en-001"
        }, {
            locale: "en-WS",
            parentLocale: "en-001"
        }, {
            locale: "en-ZA",
            parentLocale: "en-001"
        }, {
            locale: "en-ZM",
            parentLocale: "en-001"
        }, {
            locale: "en-ZW",
            parentLocale: "en-001"
        } ];
    }, e.exports = r();
}, function(e, t, n) {
    var r;
    r = function() {
        "use strict";
        return [ {
            locale: "es",
            pluralRuleFunction: function(e, t) {
                return t ? "other" : 1 == e ? "one" : "other";
            },
            fields: {
                year: {
                    displayName: "a\xf1o",
                    relative: {
                        0: "este a\xf1o",
                        1: "el pr\xf3ximo a\xf1o",
                        "-1": "el a\xf1o pasado"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} a\xf1o",
                            other: "dentro de {0} a\xf1os"
                        },
                        past: {
                            one: "hace {0} a\xf1o",
                            other: "hace {0} a\xf1os"
                        }
                    }
                },
                month: {
                    displayName: "mes",
                    relative: {
                        0: "este mes",
                        1: "el pr\xf3ximo mes",
                        "-1": "el mes pasado"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} mes",
                            other: "dentro de {0} meses"
                        },
                        past: {
                            one: "hace {0} mes",
                            other: "hace {0} meses"
                        }
                    }
                },
                day: {
                    displayName: "d\xeda",
                    relative: {
                        0: "hoy",
                        1: "ma\xf1ana",
                        2: "pasado ma\xf1ana",
                        "-2": "anteayer",
                        "-1": "ayer"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} d\xeda",
                            other: "dentro de {0} d\xedas"
                        },
                        past: {
                            one: "hace {0} d\xeda",
                            other: "hace {0} d\xedas"
                        }
                    }
                },
                hour: {
                    displayName: "hora",
                    relative: {
                        0: "esta hora"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} hora",
                            other: "dentro de {0} horas"
                        },
                        past: {
                            one: "hace {0} hora",
                            other: "hace {0} horas"
                        }
                    }
                },
                minute: {
                    displayName: "minuto",
                    relative: {
                        0: "este minuto"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} minuto",
                            other: "dentro de {0} minutos"
                        },
                        past: {
                            one: "hace {0} minuto",
                            other: "hace {0} minutos"
                        }
                    }
                },
                second: {
                    displayName: "segundo",
                    relative: {
                        0: "ahora"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} segundo",
                            other: "dentro de {0} segundos"
                        },
                        past: {
                            one: "hace {0} segundo",
                            other: "hace {0} segundos"
                        }
                    }
                }
            }
        }, {
            locale: "es-419",
            parentLocale: "es"
        }, {
            locale: "es-AR",
            parentLocale: "es-419"
        }, {
            locale: "es-BO",
            parentLocale: "es-419"
        }, {
            locale: "es-BR",
            parentLocale: "es-419"
        }, {
            locale: "es-BZ",
            parentLocale: "es-419"
        }, {
            locale: "es-CL",
            parentLocale: "es-419"
        }, {
            locale: "es-CO",
            parentLocale: "es-419"
        }, {
            locale: "es-CR",
            parentLocale: "es-419",
            fields: {
                year: {
                    displayName: "a\xf1o",
                    relative: {
                        0: "este a\xf1o",
                        1: "el pr\xf3ximo a\xf1o",
                        "-1": "el a\xf1o pasado"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} a\xf1o",
                            other: "dentro de {0} a\xf1os"
                        },
                        past: {
                            one: "hace {0} a\xf1o",
                            other: "hace {0} a\xf1os"
                        }
                    }
                },
                month: {
                    displayName: "mes",
                    relative: {
                        0: "este mes",
                        1: "el pr\xf3ximo mes",
                        "-1": "el mes pasado"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} mes",
                            other: "dentro de {0} meses"
                        },
                        past: {
                            one: "hace {0} mes",
                            other: "hace {0} meses"
                        }
                    }
                },
                day: {
                    displayName: "d\xeda",
                    relative: {
                        0: "hoy",
                        1: "ma\xf1ana",
                        2: "pasado ma\xf1ana",
                        "-2": "antier",
                        "-1": "ayer"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} d\xeda",
                            other: "dentro de {0} d\xedas"
                        },
                        past: {
                            one: "hace {0} d\xeda",
                            other: "hace {0} d\xedas"
                        }
                    }
                },
                hour: {
                    displayName: "hora",
                    relative: {
                        0: "esta hora"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} hora",
                            other: "dentro de {0} horas"
                        },
                        past: {
                            one: "hace {0} hora",
                            other: "hace {0} horas"
                        }
                    }
                },
                minute: {
                    displayName: "minuto",
                    relative: {
                        0: "este minuto"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} minuto",
                            other: "dentro de {0} minutos"
                        },
                        past: {
                            one: "hace {0} minuto",
                            other: "hace {0} minutos"
                        }
                    }
                },
                second: {
                    displayName: "segundo",
                    relative: {
                        0: "ahora"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} segundo",
                            other: "dentro de {0} segundos"
                        },
                        past: {
                            one: "hace {0} segundo",
                            other: "hace {0} segundos"
                        }
                    }
                }
            }
        }, {
            locale: "es-CU",
            parentLocale: "es-419"
        }, {
            locale: "es-DO",
            parentLocale: "es-419",
            fields: {
                year: {
                    displayName: "A\xf1o",
                    relative: {
                        0: "este a\xf1o",
                        1: "el pr\xf3ximo a\xf1o",
                        "-1": "el a\xf1o pasado"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} a\xf1o",
                            other: "dentro de {0} a\xf1os"
                        },
                        past: {
                            one: "hace {0} a\xf1o",
                            other: "hace {0} a\xf1os"
                        }
                    }
                },
                month: {
                    displayName: "Mes",
                    relative: {
                        0: "este mes",
                        1: "el pr\xf3ximo mes",
                        "-1": "el mes pasado"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} mes",
                            other: "dentro de {0} meses"
                        },
                        past: {
                            one: "hace {0} mes",
                            other: "hace {0} meses"
                        }
                    }
                },
                day: {
                    displayName: "D\xeda",
                    relative: {
                        0: "hoy",
                        1: "ma\xf1ana",
                        2: "pasado ma\xf1ana",
                        "-2": "anteayer",
                        "-1": "ayer"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} d\xeda",
                            other: "dentro de {0} d\xedas"
                        },
                        past: {
                            one: "hace {0} d\xeda",
                            other: "hace {0} d\xedas"
                        }
                    }
                },
                hour: {
                    displayName: "hora",
                    relative: {
                        0: "esta hora"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} hora",
                            other: "dentro de {0} horas"
                        },
                        past: {
                            one: "hace {0} hora",
                            other: "hace {0} horas"
                        }
                    }
                },
                minute: {
                    displayName: "Minuto",
                    relative: {
                        0: "este minuto"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} minuto",
                            other: "dentro de {0} minutos"
                        },
                        past: {
                            one: "hace {0} minuto",
                            other: "hace {0} minutos"
                        }
                    }
                },
                second: {
                    displayName: "Segundo",
                    relative: {
                        0: "ahora"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} segundo",
                            other: "dentro de {0} segundos"
                        },
                        past: {
                            one: "hace {0} segundo",
                            other: "hace {0} segundos"
                        }
                    }
                }
            }
        }, {
            locale: "es-EA",
            parentLocale: "es"
        }, {
            locale: "es-EC",
            parentLocale: "es-419"
        }, {
            locale: "es-GQ",
            parentLocale: "es"
        }, {
            locale: "es-GT",
            parentLocale: "es-419",
            fields: {
                year: {
                    displayName: "a\xf1o",
                    relative: {
                        0: "este a\xf1o",
                        1: "el pr\xf3ximo a\xf1o",
                        "-1": "el a\xf1o pasado"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} a\xf1o",
                            other: "dentro de {0} a\xf1os"
                        },
                        past: {
                            one: "hace {0} a\xf1o",
                            other: "hace {0} a\xf1os"
                        }
                    }
                },
                month: {
                    displayName: "mes",
                    relative: {
                        0: "este mes",
                        1: "el pr\xf3ximo mes",
                        "-1": "el mes pasado"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} mes",
                            other: "dentro de {0} meses"
                        },
                        past: {
                            one: "hace {0} mes",
                            other: "hace {0} meses"
                        }
                    }
                },
                day: {
                    displayName: "d\xeda",
                    relative: {
                        0: "hoy",
                        1: "ma\xf1ana",
                        2: "pasado ma\xf1ana",
                        "-2": "antier",
                        "-1": "ayer"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} d\xeda",
                            other: "dentro de {0} d\xedas"
                        },
                        past: {
                            one: "hace {0} d\xeda",
                            other: "hace {0} d\xedas"
                        }
                    }
                },
                hour: {
                    displayName: "hora",
                    relative: {
                        0: "esta hora"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} hora",
                            other: "dentro de {0} horas"
                        },
                        past: {
                            one: "hace {0} hora",
                            other: "hace {0} horas"
                        }
                    }
                },
                minute: {
                    displayName: "minuto",
                    relative: {
                        0: "este minuto"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} minuto",
                            other: "dentro de {0} minutos"
                        },
                        past: {
                            one: "hace {0} minuto",
                            other: "hace {0} minutos"
                        }
                    }
                },
                second: {
                    displayName: "segundo",
                    relative: {
                        0: "ahora"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} segundo",
                            other: "dentro de {0} segundos"
                        },
                        past: {
                            one: "hace {0} segundo",
                            other: "hace {0} segundos"
                        }
                    }
                }
            }
        }, {
            locale: "es-HN",
            parentLocale: "es-419",
            fields: {
                year: {
                    displayName: "a\xf1o",
                    relative: {
                        0: "este a\xf1o",
                        1: "el pr\xf3ximo a\xf1o",
                        "-1": "el a\xf1o pasado"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} a\xf1o",
                            other: "dentro de {0} a\xf1os"
                        },
                        past: {
                            one: "hace {0} a\xf1o",
                            other: "hace {0} a\xf1os"
                        }
                    }
                },
                month: {
                    displayName: "mes",
                    relative: {
                        0: "este mes",
                        1: "el pr\xf3ximo mes",
                        "-1": "el mes pasado"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} mes",
                            other: "dentro de {0} meses"
                        },
                        past: {
                            one: "hace {0} mes",
                            other: "hace {0} meses"
                        }
                    }
                },
                day: {
                    displayName: "d\xeda",
                    relative: {
                        0: "hoy",
                        1: "ma\xf1ana",
                        2: "pasado ma\xf1ana",
                        "-2": "antier",
                        "-1": "ayer"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} d\xeda",
                            other: "dentro de {0} d\xedas"
                        },
                        past: {
                            one: "hace {0} d\xeda",
                            other: "hace {0} d\xedas"
                        }
                    }
                },
                hour: {
                    displayName: "hora",
                    relative: {
                        0: "esta hora"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} hora",
                            other: "dentro de {0} horas"
                        },
                        past: {
                            one: "hace {0} hora",
                            other: "hace {0} horas"
                        }
                    }
                },
                minute: {
                    displayName: "minuto",
                    relative: {
                        0: "este minuto"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} minuto",
                            other: "dentro de {0} minutos"
                        },
                        past: {
                            one: "hace {0} minuto",
                            other: "hace {0} minutos"
                        }
                    }
                },
                second: {
                    displayName: "segundo",
                    relative: {
                        0: "ahora"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} segundo",
                            other: "dentro de {0} segundos"
                        },
                        past: {
                            one: "hace {0} segundo",
                            other: "hace {0} segundos"
                        }
                    }
                }
            }
        }, {
            locale: "es-IC",
            parentLocale: "es"
        }, {
            locale: "es-MX",
            parentLocale: "es-419",
            fields: {
                year: {
                    displayName: "a\xf1o",
                    relative: {
                        0: "este a\xf1o",
                        1: "el a\xf1o pr\xf3ximo",
                        "-1": "el a\xf1o pasado"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} a\xf1o",
                            other: "dentro de {0} a\xf1os"
                        },
                        past: {
                            one: "hace {0} a\xf1o",
                            other: "hace {0} a\xf1os"
                        }
                    }
                },
                month: {
                    displayName: "mes",
                    relative: {
                        0: "este mes",
                        1: "el mes pr\xf3ximo",
                        "-1": "el mes pasado"
                    },
                    relativeTime: {
                        future: {
                            one: "en {0} mes",
                            other: "en {0} meses"
                        },
                        past: {
                            one: "hace {0} mes",
                            other: "hace {0} meses"
                        }
                    }
                },
                day: {
                    displayName: "d\xeda",
                    relative: {
                        0: "hoy",
                        1: "ma\xf1ana",
                        2: "pasado ma\xf1ana",
                        "-2": "antier",
                        "-1": "ayer"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} d\xeda",
                            other: "dentro de {0} d\xedas"
                        },
                        past: {
                            one: "hace {0} d\xeda",
                            other: "hace {0} d\xedas"
                        }
                    }
                },
                hour: {
                    displayName: "hora",
                    relative: {
                        0: "esta hora"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} hora",
                            other: "dentro de {0} horas"
                        },
                        past: {
                            one: "hace {0} hora",
                            other: "hace {0} horas"
                        }
                    }
                },
                minute: {
                    displayName: "minuto",
                    relative: {
                        0: "este minuto"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} minuto",
                            other: "dentro de {0} minutos"
                        },
                        past: {
                            one: "hace {0} minuto",
                            other: "hace {0} minutos"
                        }
                    }
                },
                second: {
                    displayName: "segundo",
                    relative: {
                        0: "ahora"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} segundo",
                            other: "dentro de {0} segundos"
                        },
                        past: {
                            one: "hace {0} segundo",
                            other: "hace {0} segundos"
                        }
                    }
                }
            }
        }, {
            locale: "es-NI",
            parentLocale: "es-419",
            fields: {
                year: {
                    displayName: "a\xf1o",
                    relative: {
                        0: "este a\xf1o",
                        1: "el pr\xf3ximo a\xf1o",
                        "-1": "el a\xf1o pasado"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} a\xf1o",
                            other: "dentro de {0} a\xf1os"
                        },
                        past: {
                            one: "hace {0} a\xf1o",
                            other: "hace {0} a\xf1os"
                        }
                    }
                },
                month: {
                    displayName: "mes",
                    relative: {
                        0: "este mes",
                        1: "el pr\xf3ximo mes",
                        "-1": "el mes pasado"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} mes",
                            other: "dentro de {0} meses"
                        },
                        past: {
                            one: "hace {0} mes",
                            other: "hace {0} meses"
                        }
                    }
                },
                day: {
                    displayName: "d\xeda",
                    relative: {
                        0: "hoy",
                        1: "ma\xf1ana",
                        2: "pasado ma\xf1ana",
                        "-2": "antier",
                        "-1": "ayer"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} d\xeda",
                            other: "dentro de {0} d\xedas"
                        },
                        past: {
                            one: "hace {0} d\xeda",
                            other: "hace {0} d\xedas"
                        }
                    }
                },
                hour: {
                    displayName: "hora",
                    relative: {
                        0: "esta hora"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} hora",
                            other: "dentro de {0} horas"
                        },
                        past: {
                            one: "hace {0} hora",
                            other: "hace {0} horas"
                        }
                    }
                },
                minute: {
                    displayName: "minuto",
                    relative: {
                        0: "este minuto"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} minuto",
                            other: "dentro de {0} minutos"
                        },
                        past: {
                            one: "hace {0} minuto",
                            other: "hace {0} minutos"
                        }
                    }
                },
                second: {
                    displayName: "segundo",
                    relative: {
                        0: "ahora"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} segundo",
                            other: "dentro de {0} segundos"
                        },
                        past: {
                            one: "hace {0} segundo",
                            other: "hace {0} segundos"
                        }
                    }
                }
            }
        }, {
            locale: "es-PA",
            parentLocale: "es-419",
            fields: {
                year: {
                    displayName: "a\xf1o",
                    relative: {
                        0: "este a\xf1o",
                        1: "el pr\xf3ximo a\xf1o",
                        "-1": "el a\xf1o pasado"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} a\xf1o",
                            other: "dentro de {0} a\xf1os"
                        },
                        past: {
                            one: "hace {0} a\xf1o",
                            other: "hace {0} a\xf1os"
                        }
                    }
                },
                month: {
                    displayName: "mes",
                    relative: {
                        0: "este mes",
                        1: "el pr\xf3ximo mes",
                        "-1": "el mes pasado"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} mes",
                            other: "dentro de {0} meses"
                        },
                        past: {
                            one: "hace {0} mes",
                            other: "hace {0} meses"
                        }
                    }
                },
                day: {
                    displayName: "d\xeda",
                    relative: {
                        0: "hoy",
                        1: "ma\xf1ana",
                        2: "pasado ma\xf1ana",
                        "-2": "antier",
                        "-1": "ayer"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} d\xeda",
                            other: "dentro de {0} d\xedas"
                        },
                        past: {
                            one: "hace {0} d\xeda",
                            other: "hace {0} d\xedas"
                        }
                    }
                },
                hour: {
                    displayName: "hora",
                    relative: {
                        0: "esta hora"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} hora",
                            other: "dentro de {0} horas"
                        },
                        past: {
                            one: "hace {0} hora",
                            other: "hace {0} horas"
                        }
                    }
                },
                minute: {
                    displayName: "minuto",
                    relative: {
                        0: "este minuto"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} minuto",
                            other: "dentro de {0} minutos"
                        },
                        past: {
                            one: "hace {0} minuto",
                            other: "hace {0} minutos"
                        }
                    }
                },
                second: {
                    displayName: "segundo",
                    relative: {
                        0: "ahora"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} segundo",
                            other: "dentro de {0} segundos"
                        },
                        past: {
                            one: "hace {0} segundo",
                            other: "hace {0} segundos"
                        }
                    }
                }
            }
        }, {
            locale: "es-PE",
            parentLocale: "es-419"
        }, {
            locale: "es-PH",
            parentLocale: "es"
        }, {
            locale: "es-PR",
            parentLocale: "es-419"
        }, {
            locale: "es-PY",
            parentLocale: "es-419",
            fields: {
                year: {
                    displayName: "a\xf1o",
                    relative: {
                        0: "este a\xf1o",
                        1: "el pr\xf3ximo a\xf1o",
                        "-1": "el a\xf1o pasado"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} a\xf1o",
                            other: "dentro de {0} a\xf1os"
                        },
                        past: {
                            one: "hace {0} a\xf1o",
                            other: "hace {0} a\xf1os"
                        }
                    }
                },
                month: {
                    displayName: "mes",
                    relative: {
                        0: "este mes",
                        1: "el pr\xf3ximo mes",
                        "-1": "el mes pasado"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} mes",
                            other: "dentro de {0} meses"
                        },
                        past: {
                            one: "hace {0} mes",
                            other: "hace {0} meses"
                        }
                    }
                },
                day: {
                    displayName: "d\xeda",
                    relative: {
                        0: "hoy",
                        1: "ma\xf1ana",
                        2: "pasado ma\xf1ana",
                        "-2": "antes de ayer",
                        "-1": "ayer"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} d\xeda",
                            other: "dentro de {0} d\xedas"
                        },
                        past: {
                            one: "hace {0} d\xeda",
                            other: "hace {0} d\xedas"
                        }
                    }
                },
                hour: {
                    displayName: "hora",
                    relative: {
                        0: "esta hora"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} hora",
                            other: "dentro de {0} horas"
                        },
                        past: {
                            one: "hace {0} hora",
                            other: "hace {0} horas"
                        }
                    }
                },
                minute: {
                    displayName: "minuto",
                    relative: {
                        0: "este minuto"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} minuto",
                            other: "dentro de {0} minutos"
                        },
                        past: {
                            one: "hace {0} minuto",
                            other: "hace {0} minutos"
                        }
                    }
                },
                second: {
                    displayName: "segundo",
                    relative: {
                        0: "ahora"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} segundo",
                            other: "dentro de {0} segundos"
                        },
                        past: {
                            one: "hace {0} segundo",
                            other: "hace {0} segundos"
                        }
                    }
                }
            }
        }, {
            locale: "es-SV",
            parentLocale: "es-419",
            fields: {
                year: {
                    displayName: "a\xf1o",
                    relative: {
                        0: "este a\xf1o",
                        1: "el pr\xf3ximo a\xf1o",
                        "-1": "el a\xf1o pasado"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} a\xf1o",
                            other: "dentro de {0} a\xf1os"
                        },
                        past: {
                            one: "hace {0} a\xf1o",
                            other: "hace {0} a\xf1os"
                        }
                    }
                },
                month: {
                    displayName: "mes",
                    relative: {
                        0: "este mes",
                        1: "el pr\xf3ximo mes",
                        "-1": "el mes pasado"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} mes",
                            other: "dentro de {0} meses"
                        },
                        past: {
                            one: "hace {0} mes",
                            other: "hace {0} meses"
                        }
                    }
                },
                day: {
                    displayName: "d\xeda",
                    relative: {
                        0: "hoy",
                        1: "ma\xf1ana",
                        2: "pasado ma\xf1ana",
                        "-2": "antier",
                        "-1": "ayer"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} d\xeda",
                            other: "dentro de {0} d\xedas"
                        },
                        past: {
                            one: "hace {0} d\xeda",
                            other: "hace {0} d\xedas"
                        }
                    }
                },
                hour: {
                    displayName: "hora",
                    relative: {
                        0: "esta hora"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} hora",
                            other: "dentro de {0} horas"
                        },
                        past: {
                            one: "hace {0} hora",
                            other: "hace {0} horas"
                        }
                    }
                },
                minute: {
                    displayName: "minuto",
                    relative: {
                        0: "este minuto"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} minuto",
                            other: "dentro de {0} minutos"
                        },
                        past: {
                            one: "hace {0} minuto",
                            other: "hace {0} minutos"
                        }
                    }
                },
                second: {
                    displayName: "segundo",
                    relative: {
                        0: "ahora"
                    },
                    relativeTime: {
                        future: {
                            one: "dentro de {0} segundo",
                            other: "dentro de {0} segundos"
                        },
                        past: {
                            one: "hace {0} segundo",
                            other: "hace {0} segundos"
                        }
                    }
                }
            }
        }, {
            locale: "es-US",
            parentLocale: "es-419"
        }, {
            locale: "es-UY",
            parentLocale: "es-419"
        }, {
            locale: "es-VE",
            parentLocale: "es-419"
        } ];
    }, e.exports = r();
}, function(e, t, n) {
    var r;
    r = function() {
        "use strict";
        return [ {
            locale: "fr",
            pluralRuleFunction: function(e, t) {
                return t ? 1 == e ? "one" : "other" : e >= 0 && e < 2 ? "one" : "other";
            },
            fields: {
                year: {
                    displayName: "ann\xe9e",
                    relative: {
                        0: "cette ann\xe9e",
                        1: "l\u2019ann\xe9e prochaine",
                        "-1": "l\u2019ann\xe9e derni\xe8re"
                    },
                    relativeTime: {
                        future: {
                            one: "dans {0} an",
                            other: "dans {0} ans"
                        },
                        past: {
                            one: "il y a {0} an",
                            other: "il y a {0} ans"
                        }
                    }
                },
                month: {
                    displayName: "mois",
                    relative: {
                        0: "ce mois-ci",
                        1: "le mois prochain",
                        "-1": "le mois dernier"
                    },
                    relativeTime: {
                        future: {
                            one: "dans {0} mois",
                            other: "dans {0} mois"
                        },
                        past: {
                            one: "il y a {0} mois",
                            other: "il y a {0} mois"
                        }
                    }
                },
                day: {
                    displayName: "jour",
                    relative: {
                        0: "aujourd\u2019hui",
                        1: "demain",
                        2: "apr\xe8s-demain",
                        "-2": "avant-hier",
                        "-1": "hier"
                    },
                    relativeTime: {
                        future: {
                            one: "dans {0} jour",
                            other: "dans {0} jours"
                        },
                        past: {
                            one: "il y a {0} jour",
                            other: "il y a {0} jours"
                        }
                    }
                },
                hour: {
                    displayName: "heure",
                    relative: {
                        0: "cette heure-ci"
                    },
                    relativeTime: {
                        future: {
                            one: "dans {0} heure",
                            other: "dans {0} heures"
                        },
                        past: {
                            one: "il y a {0} heure",
                            other: "il y a {0} heures"
                        }
                    }
                },
                minute: {
                    displayName: "minute",
                    relative: {
                        0: "cette minute-ci"
                    },
                    relativeTime: {
                        future: {
                            one: "dans {0} minute",
                            other: "dans {0} minutes"
                        },
                        past: {
                            one: "il y a {0} minute",
                            other: "il y a {0} minutes"
                        }
                    }
                },
                second: {
                    displayName: "seconde",
                    relative: {
                        0: "maintenant"
                    },
                    relativeTime: {
                        future: {
                            one: "dans {0} seconde",
                            other: "dans {0} secondes"
                        },
                        past: {
                            one: "il y a {0} seconde",
                            other: "il y a {0} secondes"
                        }
                    }
                }
            }
        }, {
            locale: "fr-BE",
            parentLocale: "fr"
        }, {
            locale: "fr-BF",
            parentLocale: "fr"
        }, {
            locale: "fr-BI",
            parentLocale: "fr"
        }, {
            locale: "fr-BJ",
            parentLocale: "fr"
        }, {
            locale: "fr-BL",
            parentLocale: "fr"
        }, {
            locale: "fr-CA",
            parentLocale: "fr",
            fields: {
                year: {
                    displayName: "ann\xe9e",
                    relative: {
                        0: "cette ann\xe9e",
                        1: "l\u2019ann\xe9e prochaine",
                        "-1": "l\u2019ann\xe9e derni\xe8re"
                    },
                    relativeTime: {
                        future: {
                            one: "Dans {0}\xa0an",
                            other: "Dans {0}\xa0ans"
                        },
                        past: {
                            one: "Il y a {0}\xa0an",
                            other: "Il y a {0}\xa0ans"
                        }
                    }
                },
                month: {
                    displayName: "mois",
                    relative: {
                        0: "ce mois-ci",
                        1: "le mois prochain",
                        "-1": "le mois dernier"
                    },
                    relativeTime: {
                        future: {
                            one: "dans {0} mois",
                            other: "dans {0} mois"
                        },
                        past: {
                            one: "il y a {0} mois",
                            other: "il y a {0} mois"
                        }
                    }
                },
                day: {
                    displayName: "jour",
                    relative: {
                        0: "aujourd\u2019hui",
                        1: "demain",
                        2: "apr\xe8s-demain",
                        "-2": "avant-hier",
                        "-1": "hier"
                    },
                    relativeTime: {
                        future: {
                            one: "dans {0} jour",
                            other: "dans {0} jours"
                        },
                        past: {
                            one: "il y a {0} jour",
                            other: "il y a {0} jours"
                        }
                    }
                },
                hour: {
                    displayName: "heure",
                    relative: {
                        0: "cette heure-ci"
                    },
                    relativeTime: {
                        future: {
                            one: "dans {0} heure",
                            other: "dans {0} heures"
                        },
                        past: {
                            one: "il y a {0} heure",
                            other: "il y a {0} heures"
                        }
                    }
                },
                minute: {
                    displayName: "minute",
                    relative: {
                        0: "cette minute-ci"
                    },
                    relativeTime: {
                        future: {
                            one: "dans {0} minute",
                            other: "dans {0} minutes"
                        },
                        past: {
                            one: "il y a {0} minute",
                            other: "il y a {0} minutes"
                        }
                    }
                },
                second: {
                    displayName: "seconde",
                    relative: {
                        0: "maintenant"
                    },
                    relativeTime: {
                        future: {
                            one: "dans {0} seconde",
                            other: "dans {0} secondes"
                        },
                        past: {
                            one: "il y a {0} seconde",
                            other: "il y a {0} secondes"
                        }
                    }
                }
            }
        }, {
            locale: "fr-CD",
            parentLocale: "fr"
        }, {
            locale: "fr-CF",
            parentLocale: "fr"
        }, {
            locale: "fr-CG",
            parentLocale: "fr"
        }, {
            locale: "fr-CH",
            parentLocale: "fr"
        }, {
            locale: "fr-CI",
            parentLocale: "fr"
        }, {
            locale: "fr-CM",
            parentLocale: "fr"
        }, {
            locale: "fr-DJ",
            parentLocale: "fr"
        }, {
            locale: "fr-DZ",
            parentLocale: "fr"
        }, {
            locale: "fr-GA",
            parentLocale: "fr"
        }, {
            locale: "fr-GF",
            parentLocale: "fr"
        }, {
            locale: "fr-GN",
            parentLocale: "fr"
        }, {
            locale: "fr-GP",
            parentLocale: "fr"
        }, {
            locale: "fr-GQ",
            parentLocale: "fr"
        }, {
            locale: "fr-HT",
            parentLocale: "fr"
        }, {
            locale: "fr-KM",
            parentLocale: "fr"
        }, {
            locale: "fr-LU",
            parentLocale: "fr"
        }, {
            locale: "fr-MA",
            parentLocale: "fr"
        }, {
            locale: "fr-MC",
            parentLocale: "fr"
        }, {
            locale: "fr-MF",
            parentLocale: "fr"
        }, {
            locale: "fr-MG",
            parentLocale: "fr"
        }, {
            locale: "fr-ML",
            parentLocale: "fr"
        }, {
            locale: "fr-MQ",
            parentLocale: "fr"
        }, {
            locale: "fr-MR",
            parentLocale: "fr"
        }, {
            locale: "fr-MU",
            parentLocale: "fr"
        }, {
            locale: "fr-NC",
            parentLocale: "fr"
        }, {
            locale: "fr-NE",
            parentLocale: "fr"
        }, {
            locale: "fr-PF",
            parentLocale: "fr"
        }, {
            locale: "fr-PM",
            parentLocale: "fr"
        }, {
            locale: "fr-RE",
            parentLocale: "fr"
        }, {
            locale: "fr-RW",
            parentLocale: "fr"
        }, {
            locale: "fr-SC",
            parentLocale: "fr"
        }, {
            locale: "fr-SN",
            parentLocale: "fr"
        }, {
            locale: "fr-SY",
            parentLocale: "fr"
        }, {
            locale: "fr-TD",
            parentLocale: "fr"
        }, {
            locale: "fr-TG",
            parentLocale: "fr"
        }, {
            locale: "fr-TN",
            parentLocale: "fr"
        }, {
            locale: "fr-VU",
            parentLocale: "fr"
        }, {
            locale: "fr-WF",
            parentLocale: "fr"
        }, {
            locale: "fr-YT",
            parentLocale: "fr"
        } ];
    }, e.exports = r();
}, function(e) {
    e.exports = {
        "browser-action-popup.unsupported-app.list-prediction": "The advanced maths and chemistry prediction engine",
        "intro.introduction-line1": "Finally, you can create digital maths! {learnMoreLink}.",
        "upgrade-overlay-iconset-advanced-math": "The advanced maths and chemistry prediction engine"
    };
}, function(e) {
    e.exports = {
        "intro.introduction-line1": "Ya puedes crear expresiones matem\xe1ticas digitales! {learnMoreLink}.",
        "intro.introduction-learn-more-link": "Aprende m\xe1s",
        "intro.student-button": "Alumno",
        "intro.teacher-button": "Profesor",
        "intro.dismiss-button": "Prefiero no escoger ahora. Simplemente ll\xe9vame a EquatIO.",
        "intro.loading-doc.thanks": "Thanks!",
        "intro.loading-doc.message": "We're taking you to your first EquatIO-enabled Google Doc..."
    };
}, function(e) {
    e.exports = {
        "browser-action-popup.disabled-app.title": "Hey!",
        "browser-action-popup.disabled-app.message": "On dirait que cette int\xe9gration de Google App ait \xe9t\xe9 d\xe9sactiv\xe9e. Si tu souhaites utiliser cette fonctionnalit\xe9, demande \xe0 ton administrateur de l'activer!",
        "browser-action-popup.disabled-app.dismiss": "OK",
        "browser-action-popup.forms.title": "Quiz time?!",
        "browser-action-popup.forms.message": "Ouvre EquatIO dans Google Forms en cliquant sur l'ic\xf4ne {equationIcon} \xe0 c\xf4t\xe9 de la question ou de la r\xe9ponse sur laquelle tu souhaites travailler.",
        "browser-action-popup.forms.dismiss": "OK",
        "browser-action-popup.invalid-page.title": "Uh oh!",
        "browser-action-popup.invalid-page.description": "EquatIO n'est pas disponible sur cette page. Pour l'instant, tu peux seulement utiliser EquatIO avec:",
        "browser-action-popup.invalid-page.options.docs": "Google Docs",
        "browser-action-popup.invalid-page.options.forms": "Google Forms",
        "browser-action-popup.invalid-page.options.sheets": "Google Sheets",
        "browser-action-popup.invalid-page.options.slides": "Google Slides",
        "browser-action-popup.invalid-page.options.drawings": "Google Drawings",
        "browser-action-popup.invalid-page.dismiss": "OK",
        "browser-action-popup.not-signed-into-chrome.title": "Hey!",
        "browser-action-popup.not-signed-into-chrome.message": "On dirait que tu n'es pas connect\xe9 avec Google Chrome :(",
        "browser-action-popup.not-signed-into-chrome.sign-in-message": "Il est n\xe9cessaire que tu sois connect\xe9, afin de pouvoir utiliser toutes les fonctionnalit\xe9s d'EquatIO. {readMoreLink}.",
        "browser-action-popup.not-signed-into-chrome.read-more": "En savoir plus",
        "browser-action-popup.not-signed-into-chrome.dismiss": "OK",
        "browser-action-popup.unsupported-app.title": "Oh non!",
        "browser-action-popup.unsupported-app.description": "Ton abonnement EquatIO actuel ne prend pas en charge cette application Google. Effectue une mise \xe0 niveau d\xe8s aujourd'hui pour pouvoir utiliser EquatIO avec Google Forms, Google Sheets, Google Slides et Google Drawings. Si tu es un enseignant, {freeForTeachersLink} pour en savoir plus sur notre programme Free for Teachers avant de renouveler ton abonnement.",
        "browser-action-popup.unsupported-app.fft-link": "clique ici",
        "browser-action-popup.unsupported-app.list-prediction": "Le moteur de pr\xe9diction avanc\xe9 en math\xe9matiques et chimie",
        "browser-action-popup.unsupported-app.list-handwriting": "Entr\xe9es manuscrites illimit\xe9es",
        "browser-action-popup.unsupported-app.upgrade": "En savoir plus",
        "browser-action-popup.unsupported-app.not-today": "Pas aujourd'hui, merci.",
        "browser-action-popup.web-premium.title": "Hey!",
        "browser-action-popup.web-premium.message": "Tu as besoin d'un {premiumSubscription} pour pouvoir utiliser EquatIO dans des pages web",
        "browser-action-popup.web-premium.premium-subscription": "Abonnement Premium",
        "browser-action-popup.web-premium.upgrade": "En savoir plus",
        "browser-action-popup.web-premium.dismiss": "OK",
        "web-toolbar.popup-menu.menu.close": "Cacher EquatIO",
        "screenshot-reader.context-menu.buttons.copy-latex": "Copier LaTeX",
        "screenshot-reader.context-menu.buttons.copy-mathml": "Copier MatML",
        "screenshot-reader.context-menu.buttons.send-to-equation": "Editer avec EquatIO",
        "screenshot-reader.mathjax.actions.play": "Jouer",
        "screenshot-reader.mathjax.actions.stop": "Arr\xeat",
        "screenshot-reader.mathjax.actions.more-options": "Plus d'options",
        "screenshot-reader.mathjax.actions.close": "Fermer",
        "screenshot-reader.mathjax.error-display.title": "Uh oh! Nous n'avons pu d\xe9tecter aucun calcul pour cette s\xe9lection",
        "web-toolbar.toolbar.move-toolbar": "D\xe9placer la barre d'outils",
        "web-toolbar.toolbar.screenshot-reader": "Lecteur de capture d'\xe9cran",
        "web-toolbar.toolbar.calculator": "Calculatrice",
        "intro.introduction-line1": "Enfin, tu peux cr\xe9er des math\xe9matiques num\xe9riques! {learnMoreLink}.",
        "intro.introduction-learn-more-link": "En savoir plus",
        "intro.student-button": "El\xe8ve",
        "intro.teacher-button": "Enseignant",
        "intro.dismiss-button": "Je pr\xe9f\xe8re ne pas dire. Emm\xe8ne-moi simplement \xe0 EquatIO!",
        "intro.loading-doc.thanks": "Merci!",
        "intro.loading-doc.message": "Nous t'emmenons \xe0 ton premier Google Doc compatible avec EquatIO...",
        "sheetsAuthorization.introduction-line1": "Salut!",
        "sheetsAuthorization.introduction-line2": "Comme c'est la premi\xe8re fois tu vous utilises EquatIO avec Google Forms, tu dois d'abord donner ton autorisation \xe0 Google. Clique sur le bouton ci-dessous lorsque tu es pr\xeat.",
        "sheetsAuthorization.authorize-button": "Autoriser Google",
        "popup-menu.try-mathspace": "Essayez EquatIO Mathspace",
        "popup-menu.close": "Fermer EquatIO",
        "screenshot-reader-button.title": "Lecteur de capture d'\xe9cran",
        "screenshot-reader-button.title_premium": "Lecteur de capture d'\xe9cran (Fonctionnalit\xe9 Premium)",
        "upgrade-overlay-iconset-advanced-math": "Le moteur de pr\xe9diction avanc\xe9 en math\xe9matiques et chimie",
        "upgrade-overlay-iconset-built-in-integration": "Integration avec Google Forms, Google Slides, Google Sheets & Google Drawings",
        "upgrade-overlay-iconset-free-for-teachers-click-here": "clique ici",
        "upgrade-overlay-iconset-unlimited-handwriting": "Entr\xe9es manuscrites illimit\xe9es",
        "upgrade-overlay-used-by-teachers": "Utilis\xe9 par les enseignants{lineBreak}et les \xe9l\xe8ves du monde entier",
        "upgrade-overlay-fft-sign-up": "Inscris-toi \xe0 Free for Teachers",
        "upgrade-overlay-fft-dismiss": "Pas aujourd'hui, merci",
        "upgrade-overlay-student-learn-more": "En savoir plus",
        "upgrade-overlay-student-dismiss": "Je suis pr\xeat. Ram\xe8ne-moi \xe0 EquatIO.",
        "upgrade-overlay-privacy-policy": "Politique de confidentialit\xe9",
        "upgrade-overlay-student-expired.text": "On dirait que ton acc\xe8s gratuit de 30 jours aux fonctionnalit\xe9s premium d'EquatIO ait expir\xe9. Vois avec ton enseignant pour pouvoir continuer \xe0 utiliser toutes les fonctionnalit\xe9s d'EquatIO, y compris l'\xe9criture manuscrite et la pr\xe9vision math\xe9matique. Si tu es un enseignant, {upgradeLink} pour en savoir plus sur notre programme Free for Teachers.",
        "upgrade-overlay-student-handwriting-exceeded.text": "Oups! Tu as d\xe9j\xe0 utilis\xe9 tes deux entr\xe9es manuscrites pour la journ\xe9e. Vois avec ton enseignant pour en savoir plus sur tes options d'\xe9criture. Si tu es un enseignant, {upgradeLink} pour en savoir plus sur notre programme Free for Teachers.",
        "upgrade-overlay-student-upgrade-reminder.text": "Vois avec ton enseignant pour en savoir plus sur les fonctionnalit\xe9s premium d'EquatIO. Si tu es un enseignant, {upgradeLink} pour en savoir plus sur notre programme Free for Teachers.",
        "upgrade-overlay-teacher-expiring.title": "Ton abonnement premium \xe0 EquatIO expire dans moins de 5 jours.",
        "upgrade-overlay-teacher-expiring.text": "Mais pourquoi renouveler quand tu peux t'inscrire gratuitement en tant qu'enseignants? Tu obtiendras ainsi GRATUITEMENT toutes les fonctionnalit\xe9s de ton abonnement premium EquatIO que tu connais et appr\xe9cies d\xe9j\xe0!",
        "upgrade-overlay-teacher-first-time-expiry.line1": "On dirait que ton acc\xe8s de 30 jours aux fonctionnalit\xe9s premium d'EquatIO ait expir\xe9.",
        "upgrade-overlay-teacher-first-time-expiry.line2": "Mais pas besoin de s'inqui\xe9ter. En tant qu'enseignant, tu peux obtenir gratuitement toutes ces fonctionnalit\xe9s gr\xe2ce \xe0 notre programme Free for Teacher. Inscris-toi aujourd'hui pour continuer \xe0 utiliser toutes les fonctionnalit\xe9s d'EquatIO!",
        "upgrade-overlay-teacher-forms-periodic-reminder.title": "Eureka!",
        "upgrade-overlay-teacher-forms-periodic-reminder.text": "Si tu t'inscris \xe0 EquatIO Free for Teachers, tu peux transformer ton processus d'\xe9valuation gr\xe2ce \xe0 notre int\xe9gration avec Google Forms, et ceci sans frais suppl\xe9mentaires! Inscris-toi aujourd'hui pour acc\xe9der gratuitement \xe0 toutes les fonctionnalit\xe9s premium d'EquatIO.",
        "upgrade-overlay-teacher-forms-periodic-reminder.integration-with-apps": "Integration avec Google Slides, Google Sheets & Google Drawings",
        "upgrade-overlay-teacher-general-periodic-reminder.line1": "Inscris-toi \xe0 EquatIO Free for Teachers d\xe8s aujourd'hui pour faire passer tes maths num\xe9riques au niveau sup\xe9rieur!",
        "upgrade-overlay-teacher-general-periodic-reminder.line2": "En t'inscrivant, tu recevras un acc\xe8s gratuit \xe0...",
        "upgrade-overlay-teacher-handwriting-exceeded.whoops": "Oups!",
        "upgrade-overlay-teacher-handwriting-exceeded.text": "Tu as d\xe9j\xe0 utilis\xe9 tes deux entr\xe9es manuscrites gratuites pour la journ\xe9e. Mais savais-tu que gr\xe2ce \xe0 notre programme Free for Teacher, tu peux avoir acc\xe8s \xe0 toutes les fonctionnalit\xe9s premium GRATUITEMENT, et pour toujours? Inscris-toi d\xe8s aujourd'hui!",
        "upgrade-overlay-teacher-prediction-periodic-reminder.title": "Imagine le temps que tu gagnerais si tu pouvais g\xe9n\xe9rer des \xe9quations plus rapidement.",
        "upgrade-overlay-teacher-prediction-periodic-reminder.text": "Heureusement pour toi, le moteur avanc\xe9 de calcul de math\xe9matiques et de chimie d'EquatIO est fait pour toi! Inscris-toi \xe0 notre programme Free for Teachers d\xe8s aujourd'hui pour acc\xe9der GRATUITEMENT \xe0 cette fonctionnalit\xe9, et \xe0 toutes les autres fonctionnalit\xe9s premium d'EquatIO!",
        "upgrade-overlay-teacher-review.title": "A pr\xe9sent tu es une star\u2b50\ufe0f des maths!",
        "upgrade-overlay-teacher-review.text": "Fais don d'une fraction de ton rayonnement en donnant \xe0 EquatIO une note de 5 \xe9toiles!",
        "upgrade-overlay-teacher-review-action": "Evalue EquatIO!",
        "upgrade-overlay-teacher-review-no-thanks": "Rapp\xe8le-moi plus tard",
        "upgrade-overlay-teacher-review-dismiss": "Non merci."
    };
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        if (!e.matches(".katex-html")) return e.getBoundingClientRect();
        if ("inline" !== window.getComputedStyle(e).display) return e.getBoundingClientRect();
        var t = !!e.style.getPropertyValue("display");
        e.style.display = "inline-block";
        var n = e.getBoundingClientRect();
        return t ? e.style.display = "inline" : e.style.removeProperty("display"), n;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(0), o = n(3), a = n.n(o), i = n(11), s = n.n(i);
    function u(e) {
        return e = e || Object.create(null), {
            on: function(t, n) {
                (e[t] || (e[t] = [])).push(n);
            },
            off: function(t, n) {
                e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1);
            },
            emit: function(t, n) {
                (e[t] || []).map(function(e) {
                    e(n);
                }), (e["*"] || []).map(function(e) {
                    e(t, n);
                });
            }
        };
    }
    var l = u, c = n(12), p = n.n(c), d = function(e) {
        return Object.keys(e).map(t => {
            return `${t}="${e[t].toString().replace(/"/g, "&quot;")}"`;
        }).join(" ");
    };
    const {svg: f, xlink: h} = p.a, m = {
        [f.name]: f.uri,
        [h.name]: h.uri
    };
    var y = function(e = "", t) {
        const n = s()(m, t || {});
        return `<svg ${d(n)}>${e}</svg>`;
    };
    const {svg: v, xlink: g} = p.a;
    var b = {
        attrs: {
            [v.name]: v.uri,
            [g.name]: g.uri,
            style: [ "position: absolute", "width: 0", "height: 0" ].join("; ")
        }
    };
    class w {
        constructor(e) {
            this.config = s()(b, e || {}), this.symbols = [];
        }
        add(e) {
            const {symbols: t} = this, n = this.find(e.id);
            return n ? (t[t.indexOf(n)] = e, !1) : (t.push(e), !0);
        }
        remove(e) {
            const {symbols: t} = this, n = this.find(e);
            return !!n && (t.splice(t.indexOf(n), 1), n.destroy(), !0);
        }
        find(e) {
            return this.symbols.filter(t => t.id === e)[0] || null;
        }
        has(e) {
            return null !== this.find(e);
        }
        stringify() {
            const {attrs: e} = this.config, t = this.symbols.map(e => e.stringify()).join("");
            return y(t, e);
        }
        toString() {
            return this.stringify();
        }
        destroy() {
            this.symbols.forEach(e => e.destroy());
        }
    }
    class x {
        constructor({id: e, viewBox: t, content: n}) {
            this.id = e, this.viewBox = t, this.content = n;
        }
        stringify() {
            return this.content;
        }
        toString() {
            return this.stringify();
        }
        destroy() {
            [ "id", "viewBox", "content" ].forEach(e => delete this[e]);
        }
    }
    var _ = function(e) {
        const t = !!document.importNode, n = new DOMParser().parseFromString(e, "image/svg+xml").documentElement;
        return t ? document.importNode(n, !0) : n;
    };
    class k extends x {
        get isMounted() {
            return !!this.node;
        }
        static createFromExistingNode(e) {
            return new k({
                id: e.getAttribute("id"),
                viewBox: e.getAttribute("viewBox"),
                content: e.outerHTML
            });
        }
        destroy() {
            this.isMounted && this.unmount(), super.destroy();
        }
        mount(e) {
            if (this.isMounted) return this.node;
            const t = "string" == typeof e ? document.querySelector(e) : e, n = this.render();
            return this.node = n, t.appendChild(n), n;
        }
        render() {
            const e = this.stringify();
            return _(y(e)).childNodes[0];
        }
        unmount() {
            this.node.parentNode.removeChild(this.node);
        }
    }
    var j = {
        autoConfigure: !0,
        mountTo: "body",
        syncUrlsWithBaseTag: !1,
        listenLocationChangeEvent: !0,
        locationChangeEvent: "locationChange",
        locationChangeAngularEmitter: !1,
        usagesToUpdate: "use[*|href]",
        moveGradientsOutsideSymbol: !1
    }, S = function(e) {
        return Array.prototype.slice.call(e, 0);
    };
    const E = navigator.userAgent;
    var O = {
        isChrome: /chrome/i.test(E),
        isFirefox: /firefox/i.test(E),
        isIE: /msie/i.test(E) || /trident/i.test(E),
        isEdge: /edge/i.test(E)
    }, C = function(e, t) {
        const n = document.createEvent("CustomEvent");
        n.initCustomEvent(e, !1, !1, t), window.dispatchEvent(n);
    }, T = function(e) {
        const t = [];
        return S(e.querySelectorAll("style")).forEach(e => {
            e.textContent += "", t.push(e);
        }), t;
    }, L = function(e) {
        return (e || window.location.href).split("#")[0];
    }, N = function(e) {
        angular.module("ng").run([ "$rootScope", t => {
            t.$on("$locationChangeSuccess", (t, n, r) => {
                C(e, {
                    oldUrl: r,
                    newUrl: n
                });
            });
        } ]);
    };
    const P = "linearGradient, radialGradient, pattern";
    var q = function(e, t = P) {
        return S(e.querySelectorAll("symbol")).forEach(e => {
            S(e.querySelectorAll(t)).forEach(t => {
                e.parentNode.insertBefore(t, e);
            });
        }), e;
    };
    function M(e, t) {
        return S(e).reduce((e, n) => {
            if (!n.attributes) return e;
            const r = S(n.attributes), o = t ? r.filter(t) : r;
            return e.concat(o);
        }, []);
    }
    const A = p.a.xlink.uri, F = "xlink:href", I = /[{}|\\\^\[\]`"<>]/g;
    function R(e) {
        return e.replace(I, e => `%${e[0].charCodeAt(0).toString(16).toUpperCase()}`);
    }
    function W(e, t, n) {
        return S(e).forEach(e => {
            const r = e.getAttribute(F);
            if (r && 0 === r.indexOf(t)) {
                const o = r.replace(t, n);
                e.setAttributeNS(A, F, o);
            }
        }), e;
    }
    const D = [ "clipPath", "colorProfile", "src", "cursor", "fill", "filter", "marker", "markerStart", "markerMid", "markerEnd", "mask", "stroke", "style" ], U = D.map(e => `[${e}]`).join(",");
    var B = function(e, t, n, r) {
        const o = R(n), a = R(r);
        M(e.querySelectorAll(U), ({localName: e, value: t}) => -1 !== D.indexOf(e) && -1 !== t.indexOf(`url(${o}`)).forEach(e => e.value = e.value.replace(o, a)), 
        W(t, o, a);
    };
    const X = {
        MOUNT: "mount",
        SYMBOL_MOUNT: "symbol_mount"
    };
    class z extends w {
        constructor(e = {}) {
            super(s()(j, e));
            const t = l();
            this._emitter = t, this.node = null;
            const {config: n} = this;
            if (n.autoConfigure && this._autoConfigure(e), n.syncUrlsWithBaseTag) {
                const e = document.getElementsByTagName("base")[0].getAttribute("href");
                t.on(X.MOUNT, () => this.updateUrls("#", e));
            }
            const r = this._handleLocationChange.bind(this);
            this._handleLocationChange = r, n.listenLocationChangeEvent && window.addEventListener(n.locationChangeEvent, r), 
            n.locationChangeAngularEmitter && N(n.locationChangeEvent), t.on(X.MOUNT, e => {
                n.moveGradientsOutsideSymbol && q(e);
            }), t.on(X.SYMBOL_MOUNT, e => {
                n.moveGradientsOutsideSymbol && q(e.parentNode), (O.isIE || O.isEdge) && T(e);
            });
        }
        get isMounted() {
            return !!this.node;
        }
        _autoConfigure(e) {
            const {config: t} = this;
            void 0 === e.syncUrlsWithBaseTag && (t.syncUrlsWithBaseTag = void 0 !== document.getElementsByTagName("base")[0]), 
            void 0 === e.locationChangeAngularEmitter && (t.locationChangeAngularEmitter = "angular" in window), 
            void 0 === e.moveGradientsOutsideSymbol && (t.moveGradientsOutsideSymbol = O.isFirefox);
        }
        _handleLocationChange(e) {
            const {oldUrl: t, newUrl: n} = e.detail;
            this.updateUrls(t, n);
        }
        add(e) {
            const t = this, n = super.add(e);
            return this.isMounted && n && (e.mount(t.node), this._emitter.emit(X.SYMBOL_MOUNT, e.node)), 
            n;
        }
        attach(e) {
            const t = this;
            if (t.isMounted) return t.node;
            const n = "string" == typeof e ? document.querySelector(e) : e;
            return t.node = n, this.symbols.forEach(e => {
                e.mount(t.node), this._emitter.emit(X.SYMBOL_MOUNT, e.node);
            }), S(n.querySelectorAll("symbol")).forEach(e => {
                const n = k.createFromExistingNode(e);
                n.node = e, t.add(n);
            }), this._emitter.emit(X.MOUNT, n), n;
        }
        destroy() {
            const {config: e, symbols: t, _emitter: n} = this;
            t.forEach(e => e.destroy()), n.off("*"), window.removeEventListener(e.locationChangeEvent, this._handleLocationChange), 
            this.isMounted && this.unmount();
        }
        mount(e = this.config.mountTo, t = !1) {
            const n = this;
            if (n.isMounted) return n.node;
            const r = "string" == typeof e ? document.querySelector(e) : e, o = n.render();
            return this.node = o, t && r.childNodes[0] ? r.insertBefore(o, r.childNodes[0]) : r.appendChild(o), 
            this._emitter.emit(X.MOUNT, o), o;
        }
        render() {
            return _(this.stringify());
        }
        unmount() {
            this.node.parentNode.removeChild(this.node);
        }
        updateUrls(e, t) {
            if (!this.isMounted) return !1;
            const n = document.querySelectorAll(this.config.usagesToUpdate);
            return B(this.node, n, `${L(e)}#`, `${L(t)}#`), !0;
        }
    }
    const H = new z(), V = e => {
        if (e.origin === window.location.origin && e.data && "EQUATIO_DISCOVERABILITY_INJECT_SVG" === e.data.action) {
            window.removeEventListener("message", V);
            const e = document.querySelector("#equatio-discover-shadow").shadowRoot.querySelector("div");
            H.mount(e);
        }
    };
    window.addEventListener("message", V);
    var G = H, Y = new a.a({
        id: "equatio-floating-svg-input-button-context",
        use: "equatio-floating-svg-input-button-context-usage",
        viewBox: "0 0 15 4",
        content: '<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 4" id="equatio-floating-svg-input-button-context">\n<g id="equatio-floating-svg-input-button-context_Group_572" transform="translate(15.031 0) rotate(90)">\n\t<circle id="equatio-floating-svg-input-button-context_Ellipse_1" style="fill:currentColor;" cx="2" cy="2" r="2" />\n\t<circle id="equatio-floating-svg-input-button-context_Ellipse_2" style="fill:currentColor;" cx="2" cy="7.5" r="2" />\n\t<circle id="equatio-floating-svg-input-button-context_Ellipse_3" style="fill:currentColor;" cx="2" cy="13.1" r="2" />\n</g>\n</symbol>'
    }), J = (G.add(Y), new a.a({
        id: "equatio-floating-svg-input-button-help",
        use: "equatio-floating-svg-input-button-help-usage",
        viewBox: "0 0 24 24",
        content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="equatio-floating-svg-input-button-help">\n    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" fill="#FFF" />\n</symbol>'
    })), $ = (G.add(J), new a.a({
        id: "equatio-floating-svg-input-button-capture",
        use: "equatio-floating-svg-input-button-capture-usage",
        viewBox: "0 0 24 24",
        content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="equatio-floating-svg-input-button-capture">\n    <circle cx="12" cy="12" r="3.2" fill="#FFF" />\n    <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill="#FFF" />\n</symbol>'
    })), K = (G.add($), new a.a({
        id: "equatio-svg-modal-close",
        use: "equatio-svg-modal-close-usage",
        viewBox: "0 0 11.172 11.172",
        content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.172 11.172" id="equatio-svg-modal-close">\n<defs>\n</defs>\n<polygon fill="currentColor" points="11.172,1.128 10.043,0 5.586,4.457 1.128,0 0,1.128 4.457,5.586 0,10.043 1.128,11.172 5.586,6.714\n\t10.043,11.172 11.172,10.043 6.714,5.586 " />\n</symbol>'
    })), Z = (G.add(K), new a.a({
        id: "equatio-svg-logo-blue",
        use: "equatio-svg-logo-blue-usage",
        viewBox: "0 0 1628.5 373.4",
        content: '<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" viewBox="0 0 1628.5 373.4" id="equatio-svg-logo-blue">\n<defs>\n</defs>\n<g>\n\t<g>\n\t\t<path style="fill:#00B7FF;" d="M599.3,185.4c0-64.3,29.8-94.5,80.4-94.5c44.7,0,76.8,25.5,76.8,77.2v172.5\n\t\t\tc0,7.1-5.5,12.5-12.5,12.5c-7.1,0-12.5-5.5-12.5-12.5V254c-9,12.5-28.2,25.5-53.3,25.5C627.5,279.5,599.3,249.7,599.3,185.4z\n\t\t\t M731.4,168.1c0-37.2-21.6-54.5-51.7-54.5c-36.1,0-55.3,22.7-55.3,71.7c0,48.2,19.6,71.3,55.3,71.3c36.8,0,51.7-34.5,51.7-34.5\n\t\t\tV168.1z" />\n\t\t<path style="fill:#00B7FF;" d="M824.3,105.8v102.3c0,25.5,8.2,47.4,47.8,47.4c39.6,0,47.8-22,47.8-47.4V105.8\n\t\t\tc0-7.1,5.9-12.5,12.9-12.5c6.7,0,12.2,5.5,12.2,12.5v102.3c0,37.2-12.2,71.3-72.9,71.3c-60.4,0-72.9-34.1-72.9-71.3V105.8\n\t\t\tc0-7.1,5.5-12.5,12.5-12.5C818.4,93.2,824.3,98.7,824.3,105.8z" />\n\t\t<path style="fill:#00B7FF;" d="M1012.1,134.4c-3.9,4.3-6.7,5.5-10.2,5.5c-6.3,0-11.4-5.1-11.4-11.4c0-2.7,0.8-4.7,2-6.7\n\t\t\tc11-17.2,32.1-31,65.1-31c45.5,0,70.6,26.7,70.6,66.6v107.8c0,6.7-5.5,12.2-12.2,12.2c-6.7,0-12.2-5.5-12.2-12.2v-14.1\n\t\t\tc-9.8,18.4-32.5,28.2-56.1,28.2c-41.6,0-67.8-20-67.8-56.1c0-34.5,26.3-55.3,68.6-55.3h55.3v-10.6c0-26.7-17.6-43.1-46.3-43.1\n\t\t\tC1036.8,114.4,1024.2,120.7,1012.1,134.4z M1103.8,206.5v-16.5h-55.3c-25.5,0-43.1,10.6-43.1,33.3c0,20.4,14.1,33.3,44.7,33.3\n\t\t\tC1077.6,256.7,1103.8,239.9,1103.8,206.5z" />\n\t\t<path style="fill:#00B7FF;" d="M1185,55.2c0-6.7,5.9-12.5,12.5-12.5c7.1,0,12.5,5.9,12.5,12.5v35.7h25.5c6.7,0,11.8,5.1,11.8,11.8\n\t\t\tc0,6.7-5.1,11.8-11.8,11.8h-25.5v113.7c0,16.9,9.4,25.9,22.7,25.9c6.7,0,12.2,5.1,12.2,11.8c0,6.7-5.5,11.8-12.2,11.8\n\t\t\tc-31,0-47.8-20.8-47.8-49.4V114.4h-15.3c-6.7,0-11.8-5.1-11.8-11.8c0-6.7,5.1-11.8,11.8-11.8h15.3V55.2z" />\n\t\t<path style="fill:#00B7FF;" d="M1309.3,265c0,7.1-5.5,12.5-12.5,12.5s-12.5-5.5-12.5-12.5V55.6c0-7.1,5.5-12.5,12.5-12.5\n\t\t\ts12.5,5.5,12.5,12.5V265z" />\n\t\t<path style="fill:#00B7FF;" d="M1553.7,161.7c0,80.1-39.1,117.8-102.6,117.8c-63,0-102.6-37.6-102.6-117.8S1388,44.4,1451.1,44.4\n\t\t\tC1514.6,44.4,1553.7,81.5,1553.7,161.7z M1527.8,161.7c0-66.7-28.1-96.3-76.8-96.3c-48.7,0-76.8,29.6-76.8,96.3\n\t\t\tc0,67.8,28.1,96.9,76.8,96.9C1499.8,258.5,1527.8,229.4,1527.8,161.7z" />\n\t</g>\n\t<path style="fill:#00B7FF;" d="M517.8,197.3c-3.4,0-6.8-1.4-9.3-4.2l-73.2-82.4c-3.3-3.7-4.1-8.9-2-13.4s6.4-7.3,11.3-7.3h122.4\n\t\tc6.9,0,12.4,5.6,12.4,12.4s-5.6,12.4-12.4,12.4h-94.7l54.8,61.7c4.6,5.1,4.1,13-1,17.6C523.7,196.3,520.7,197.3,517.8,197.3z" />\n\t<path style="fill:#00B7FF;" d="M566.9,279.7H444.5c-4.9,0-9.3-2.9-11.3-7.3s-1.2-9.7,2-13.4l73.2-82.4c4.6-5.1,12.4-5.6,17.6-1\n\t\tc5.1,4.6,5.6,12.4,1,17.6l-54.8,61.7h94.7c6.9,0,12.4,5.6,12.4,12.4S573.8,279.7,566.9,279.7z" />\n\t<path style="fill:#00B7FF;" d="M218.9,373.4h-64.3c-3.2,0-6.3-1.3-8.5-3.5L3.5,227.4c-2.3-2.3-3.5-5.3-3.5-8.5v-64.3\n\t\tc0-3.2,1.3-6.3,3.5-8.5L146,3.5c2.3-2.3,5.3-3.5,8.5-3.5h64.3c3.2,0,6.3,1.3,8.5,3.5L369.9,146c2.3,2.3,3.5,5.3,3.5,8.5v64.3\n\t\tc0,3.2-1.3,6.3-3.5,8.5L227.4,369.9C225.1,372.2,222.1,373.4,218.9,373.4z M159.6,349.3h54.3l135.4-135.4v-54.3L213.9,24.1h-54.3\n\t\tL24.1,159.6v54.3L159.6,349.3z M361.4,218.9L361.4,218.9L361.4,218.9z" />\n\t<path style="fill:#00B7FF;" d="M190.5,283.4c-1.2,0-2.4-0.4-3.2-1.3L96.1,191c-1.8-1.8-1.8-4.7,0-6.5c1.8-1.8,4.7-1.8,6.5,0\n\t\tl91.1,91.1c1.8,1.8,1.8,4.7,0,6.5C192.8,282.9,191.6,283.4,190.5,283.4z" />\n\t<path style="fill:#00B7FF;" d="M163.3,314.7c-2.5,0-4.9-1-6.6-2.7L17,172.3c-3.7-3.7-3.7-9.6,0-13.3c3.7-3.7,9.6-3.7,13.3,0\n\t\tl133,133l17-17c3.7-3.7,9.6-3.7,13.3,0c3.7,3.7,3.7,9.6,0,13.3l-23.6,23.6C168.1,313.7,165.7,314.7,163.3,314.7z" />\n\t<path style="fill:#00B7FF;" d="M184.9,280.5c-1.2,0-2.4-0.4-3.2-1.3c-1.8-1.8-1.8-4.7,0-6.5l91.1-91.1c1.8-1.8,4.7-1.8,6.5,0\n\t\tc1.8,1.8,1.8,4.7,0,6.5l-91.1,91.1C187.3,280.1,186.1,280.5,184.9,280.5z" />\n\t<path style="fill:#00B7FF;" d="M162.9,361.1c-2.4,0-4.8-0.9-6.6-2.7c-3.7-3.7-3.7-9.6,0-13.3l133-133l-17-17\n\t\tc-3.7-3.7-3.7-9.6,0-13.3c3.7-3.7,9.6-3.7,13.3,0l23.6,23.6c3.7,3.7,3.7,9.6,0,13.3L169.5,358.3\n\t\tC167.7,360.2,165.3,361.1,162.9,361.1z" />\n\t<path style="fill:#00B7FF;" d="M274.1,191.8c-1.2,0-2.4-0.4-3.2-1.3l-91.1-91.1c-1.8-1.8-1.8-4.7,0-6.5s4.7-1.8,6.5,0l91.1,91.1\n\t\tc1.8,1.8,1.8,4.7,0,6.5C276.5,191.3,275.3,191.8,274.1,191.8z" />\n\t<path style="fill:#00B7FF;" d="M349.9,218.6c-2.4,0-4.8-0.9-6.6-2.7l-133-133l-17,17c-3.7,3.7-9.6,3.7-13.3,0\n\t\tc-3.7-3.7-3.7-9.6,0-13.3L203.6,63c3.7-3.7,9.6-3.7,13.3,0l139.7,139.7c3.7,3.7,3.7,9.6,0,13.3\n\t\tC354.7,217.7,352.3,218.6,349.9,218.6z" />\n\t<path style="fill:#00B7FF;" d="M95.6,195c-1.2,0-2.4-0.4-3.2-1.3c-1.8-1.8-1.8-4.7,0-6.5l91.1-91.1c1.8-1.8,4.7-1.8,6.5,0\n\t\tc1.8,1.8,1.8,4.7,0,6.5l-91.1,91.1C97.9,194.5,96.8,195,95.6,195z" />\n\t<path style="fill:#00B7FF;" d="M92.7,196.2c-2.4,0-4.8-0.9-6.6-2.7l-23.6-23.6c-3.7-3.7-3.7-9.6,0-13.3L202.1,16.9\n\t\tc3.7-3.7,9.6-3.7,13.3,0c3.7,3.7,3.7,9.6,0,13.3l-133,133l17,17c3.7,3.7,3.7,9.6,0,13.3C97.5,195.3,95.1,196.2,92.7,196.2z" />\n\t<g>\n\t\t<path style="fill:#00B7FF;" d="M1602.9,35.7c15.1,0,25.6,10.8,25.6,25.8s-10.7,26-25.7,26c-15.2,0-25.6-10.8-25.6-25.9\n\t\t\tC1577.2,46.7,1587.8,35.7,1602.9,35.7z M1602.9,82.9c12.3,0,20.7-8.9,20.7-21.3c0-12.4-8.7-21.4-20.8-21.4\n\t\t\tc-12.4,0-20.7,8.9-20.7,21.3C1582.1,73.8,1590.7,82.9,1602.9,82.9z M1591.9,52c0-2.6,1.4-4,3.8-4h8.2c7.3,0,11.2,2.8,11.2,8.7\n\t\t\tc0,4.1-2.2,6.9-6.3,7.9l6.2,8.1c0.3,0.5-1.8,2.6-4.2,2.6c-1.3,0-3-0.6-4.2-2.7l-4.7-6.7h-2.8v5.9c0,2.1-1.1,3.3-3.2,3.3h-1\n\t\t\tc-2,0-3.1-1.5-3.1-4.1V52z M1603.5,60.6c2.8,0,4.4-1.3,4.4-3.5c0-2.4-1.5-3.5-4.5-3.5h-4.4v7H1603.5z" />\n\t</g>\n</g>\n</symbol>'
    })), Q = (G.add(Z), new a.a({
        id: "equatio-svg-accessibility-playback-play",
        use: "equatio-svg-accessibility-playback-play-usage",
        viewBox: "0 0 560 560",
        content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560" id="equatio-svg-accessibility-playback-play"><path d="M179 48.7c-17.7-17.3-32.1-11.3-32.1 13.5v440.2c0 24.8 14.3 30.7 31.8 13.2l203.9-203.9c17.5-17.5 17.4-46-0.3-63.4L179 48.7z" style="fill:currentColor; stroke:currentColor" /><path d="M179 48.7c-17.7-17.3-32.1-11.3-32.1 13.5v440.2c0 24.8 14.3 30.7 31.8 13.2l203.9-203.9c17.5-17.5 17.4-46-0.3-63.4L179 48.7z" style="fill:currentColor;stroke-width:10;stroke:currentColor" /></symbol>'
    })), ee = (G.add(Q), new a.a({
        id: "equatio-svg-accessibility-playback-stop",
        use: "equatio-svg-accessibility-playback-stop-usage",
        viewBox: "0 0 560 560",
        content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560" id="equatio-svg-accessibility-playback-stop"><path d="M505.1 528.4H47.9c-9.9 0-17.9-8-17.9-17.9V53.3c0-9.9 8-17.9 17.9-17.9h457.2c9.9 0 17.9 8 17.9 17.9v457.2C523 520.4 515 528.4 505.1 528.4z" style="fill:currentColor;stroke-width:10;stroke:currentColor" /></symbol>'
    })), te = (G.add(ee), new a.a({
        id: "equatio-svg-accessibility-playback-pause",
        use: "equatio-svg-accessibility-playback-pause-usage",
        viewBox: "0 0 560 560",
        content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 560" id="equatio-svg-accessibility-playback-pause"><style>#equatio-svg-accessibility-playback-pause .s0{fill:#494949;stroke-width:10;stroke:#494949;}</style><path d="M502.9 528.4H349.6c-11 0-20-8-20-17.9V53.5c0-9.9 9-17.9 20-17.9h153.3c11 0 20 8 20 17.9v457C522.9 520.4 514 528.4 502.9 528.4zM202.9 528.4H49.6c-11 0-20-8-20-17.9V53.5c0-9.9 9-17.9 20-17.9h153.3c11 0 20 8 20 17.9v457C222.9 520.4 214 528.4 202.9 528.4z" class="s0" /></symbol>'
    })), ne = (G.add(te), function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }());
    function re(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function oe(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function ae(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    var ie = function(e) {
        function t() {
            re(this, t);
            var e = oe(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return window.postMessage({
                action: "EQUATIO_DISCOVERABILITY_INJECT_SVG"
            }, window.location.origin), e;
        }
        return ae(t, r["Component"]), ne(t, [ {
            key: "render",
            value: function() {
                return null;
            }
        } ]), t;
    }();
    t.a = ie;
}, function(e, t, n) {
    "use strict";
    n.r(t), function(e) {
        var t = n(0), r = n(28), o = document.querySelector("#equatio-math-discoverability");
        o || ((o = document.createElement("div")).id = "equatio-math-discoverability", document.body.appendChild(o)), 
        Object(t.render)(e(r.a, null), o, o.firstElementChild);
    }.call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    var r = n(71), o = n(76);
    r.default.__addLocaleData(o.default), r.default.defaultLocale = "en", t.default = r.default;
}, function(e, t, n) {
    "use strict";
    var r = n(27), o = n(72), a = n(73), i = n(74);
    function s(e, t, n) {
        var r = "string" == typeof e ? s.__parse(e) : e;
        if (!r || "messageFormatPattern" !== r.type) throw new TypeError("A message must be provided as a String or AST.");
        n = this._mergeFormats(s.formats, n), o.defineProperty(this, "_locale", {
            value: this._resolveLocale(t)
        });
        var a = this._findPluralRuleFunction(this._locale), i = this._compilePattern(r, t, n, a), u = this;
        this.format = function(t) {
            try {
                return u._format(i, t);
            } catch (t) {
                throw t.variableId ? new Error("The intl string context variable '" + t.variableId + "' was not provided to the string '" + e + "'") : t;
            }
        };
    }
    t.default = s, o.defineProperty(s, "formats", {
        enumerable: !0,
        value: {
            number: {
                currency: {
                    style: "currency"
                },
                percent: {
                    style: "percent"
                }
            },
            date: {
                short: {
                    month: "numeric",
                    day: "numeric",
                    year: "2-digit"
                },
                medium: {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                },
                long: {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                },
                full: {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }
            },
            time: {
                short: {
                    hour: "numeric",
                    minute: "numeric"
                },
                medium: {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                },
                long: {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZoneName: "short"
                },
                full: {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZoneName: "short"
                }
            }
        }
    }), o.defineProperty(s, "__localeData__", {
        value: o.objCreate(null)
    }), o.defineProperty(s, "__addLocaleData", {
        value: function(e) {
            if (!e || !e.locale) throw new Error("Locale data provided to IntlMessageFormat is missing a `locale` property");
            s.__localeData__[e.locale.toLowerCase()] = e;
        }
    }), o.defineProperty(s, "__parse", {
        value: i.default.parse
    }), o.defineProperty(s, "defaultLocale", {
        enumerable: !0,
        writable: !0,
        value: void 0
    }), s.prototype.resolvedOptions = function() {
        return {
            locale: this._locale
        };
    }, s.prototype._compilePattern = function(e, t, n, r) {
        return new a.default(t, n, r).compile(e);
    }, s.prototype._findPluralRuleFunction = function(e) {
        for (var t = s.__localeData__, n = t[e.toLowerCase()]; n; ) {
            if (n.pluralRuleFunction) return n.pluralRuleFunction;
            n = n.parentLocale && t[n.parentLocale.toLowerCase()];
        }
        throw new Error("Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :" + e);
    }, s.prototype._format = function(e, t) {
        var n, o, a, i, s, u, l = "";
        for (n = 0, o = e.length; n < o; n += 1) if ("string" != typeof (a = e[n])) {
            if (i = a.id, !t || !r.hop.call(t, i)) throw (u = new Error("A value must be provided for: " + i)).variableId = i, 
            u;
            s = t[i], a.options ? l += this._format(a.getOption(s), t) : l += a.format(s);
        } else l += a;
        return l;
    }, s.prototype._mergeFormats = function(e, t) {
        var n, a, i = {};
        for (n in e) r.hop.call(e, n) && (i[n] = a = o.objCreate(e[n]), t && r.hop.call(t, n) && r.extend(a, t[n]));
        return i;
    }, s.prototype._resolveLocale = function(e) {
        "string" == typeof e && (e = [ e ]), e = (e || []).concat(s.defaultLocale);
        var t, n, r, o, a = s.__localeData__;
        for (t = 0, n = e.length; t < n; t += 1) for (r = e[t].toLowerCase().split("-"); r.length; ) {
            if (o = a[r.join("-")]) return o.locale;
            r.pop();
        }
        var i = e.pop();
        throw new Error("No locale data has been added to IntlMessageFormat for: " + e.join(", ") + ", or the default locale: " + i);
    };
}, function(e, t, n) {
    "use strict";
    var r = n(27), o = function() {
        try {
            return !!Object.defineProperty({}, "a", {});
        } catch (e) {
            return !1;
        }
    }(), a = (!o && Object.prototype.__defineGetter__, o ? Object.defineProperty : function(e, t, n) {
        "get" in n && e.__defineGetter__ ? e.__defineGetter__(t, n.get) : (!r.hop.call(e, t) || "value" in n) && (e[t] = n.value);
    }), i = Object.create || function(e, t) {
        var n, o;
        function i() {}
        for (o in i.prototype = e, n = new i(), t) r.hop.call(t, o) && a(n, o, t[o]);
        return n;
    };
    t.defineProperty = a, t.objCreate = i;
}, function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        this.locales = e, this.formats = t, this.pluralFn = n;
    }
    function o(e) {
        this.id = e;
    }
    function a(e, t, n, r, o) {
        this.id = e, this.useOrdinal = t, this.offset = n, this.options = r, this.pluralFn = o;
    }
    function i(e, t, n, r) {
        this.id = e, this.offset = t, this.numberFormat = n, this.string = r;
    }
    function s(e, t) {
        this.id = e, this.options = t;
    }
    t.default = r, r.prototype.compile = function(e) {
        return this.pluralStack = [], this.currentPlural = null, this.pluralNumberFormat = null, 
        this.compileMessage(e);
    }, r.prototype.compileMessage = function(e) {
        if (!e || "messageFormatPattern" !== e.type) throw new Error('Message AST is not of type: "messageFormatPattern"');
        var t, n, r, o = e.elements, a = [];
        for (t = 0, n = o.length; t < n; t += 1) switch ((r = o[t]).type) {
          case "messageTextElement":
            a.push(this.compileMessageText(r));
            break;

          case "argumentElement":
            a.push(this.compileArgument(r));
            break;

          default:
            throw new Error("Message element does not have a valid type");
        }
        return a;
    }, r.prototype.compileMessageText = function(e) {
        return this.currentPlural && /(^|[^\\])#/g.test(e.value) ? (this.pluralNumberFormat || (this.pluralNumberFormat = new Intl.NumberFormat(this.locales)), 
        new i(this.currentPlural.id, this.currentPlural.format.offset, this.pluralNumberFormat, e.value)) : e.value.replace(/\\#/g, "#");
    }, r.prototype.compileArgument = function(e) {
        var t = e.format;
        if (!t) return new o(e.id);
        var n, r = this.formats, i = this.locales, u = this.pluralFn;
        switch (t.type) {
          case "numberFormat":
            return n = r.number[t.style], {
                id: e.id,
                format: new Intl.NumberFormat(i, n).format
            };

          case "dateFormat":
            return n = r.date[t.style], {
                id: e.id,
                format: new Intl.DateTimeFormat(i, n).format
            };

          case "timeFormat":
            return n = r.time[t.style], {
                id: e.id,
                format: new Intl.DateTimeFormat(i, n).format
            };

          case "pluralFormat":
            return n = this.compileOptions(e), new a(e.id, t.ordinal, t.offset, n, u);

          case "selectFormat":
            return n = this.compileOptions(e), new s(e.id, n);

          default:
            throw new Error("Message element does not have a valid format type");
        }
    }, r.prototype.compileOptions = function(e) {
        var t, n, r, o = e.format, a = o.options, i = {};
        for (this.pluralStack.push(this.currentPlural), this.currentPlural = "pluralFormat" === o.type ? e : null, 
        t = 0, n = a.length; t < n; t += 1) i[(r = a[t]).selector] = this.compileMessage(r.value);
        return this.currentPlural = this.pluralStack.pop(), i;
    }, o.prototype.format = function(e) {
        return e || "number" == typeof e ? "string" == typeof e ? e : String(e) : "";
    }, a.prototype.getOption = function(e) {
        var t = this.options;
        return t["=" + e] || t[this.pluralFn(e - this.offset, this.useOrdinal)] || t.other;
    }, i.prototype.format = function(e) {
        var t = this.numberFormat.format(e - this.offset);
        return this.string.replace(/(^|[^\\])#/g, "$1" + t).replace(/\\#/g, "#");
    }, s.prototype.getOption = function(e) {
        var t = this.options;
        return t[e] || t.other;
    };
}, function(e, t, n) {
    "use strict";
    (t = e.exports = n(75).default).default = t;
}, function(e, t, n) {
    "use strict";
    t.default = function() {
        function e(e, t) {
            function n() {
                this.constructor = e;
            }
            n.prototype = t.prototype, e.prototype = new n();
        }
        function t(e, n, r, o) {
            this.message = e, this.expected = n, this.found = r, this.location = o, this.name = "SyntaxError", 
            "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, t);
        }
        function n(e) {
            var n, r = arguments.length > 1 ? arguments[1] : {}, o = {}, a = {
                start: Le
            }, i = Le, s = function(e) {
                return {
                    type: "messageFormatPattern",
                    elements: e,
                    location: Se()
                };
            }, u = function(e) {
                var t, n, r, o, a, i = "";
                for (t = 0, r = e.length; t < r; t += 1) for (n = 0, a = (o = e[t]).length; n < a; n += 1) i += o[n];
                return i;
            }, l = function(e) {
                return {
                    type: "messageTextElement",
                    value: e,
                    location: Se()
                };
            }, c = /^[^ \t\n\r,.+={}#]/, p = {
                type: "class",
                value: "[^ \\t\\n\\r,.+={}#]",
                description: "[^ \\t\\n\\r,.+={}#]"
            }, d = "{", f = {
                type: "literal",
                value: "{",
                description: '"{"'
            }, h = ",", m = {
                type: "literal",
                value: ",",
                description: '","'
            }, y = "}", v = {
                type: "literal",
                value: "}",
                description: '"}"'
            }, g = function(e, t) {
                return {
                    type: "argumentElement",
                    id: e,
                    format: t && t[2],
                    location: Se()
                };
            }, b = "number", w = {
                type: "literal",
                value: "number",
                description: '"number"'
            }, x = "date", _ = {
                type: "literal",
                value: "date",
                description: '"date"'
            }, k = "time", j = {
                type: "literal",
                value: "time",
                description: '"time"'
            }, S = function(e, t) {
                return {
                    type: e + "Format",
                    style: t && t[2],
                    location: Se()
                };
            }, E = "plural", O = {
                type: "literal",
                value: "plural",
                description: '"plural"'
            }, C = function(e) {
                return {
                    type: e.type,
                    ordinal: !1,
                    offset: e.offset || 0,
                    options: e.options,
                    location: Se()
                };
            }, T = "selectordinal", L = {
                type: "literal",
                value: "selectordinal",
                description: '"selectordinal"'
            }, N = function(e) {
                return {
                    type: e.type,
                    ordinal: !0,
                    offset: e.offset || 0,
                    options: e.options,
                    location: Se()
                };
            }, P = "select", q = {
                type: "literal",
                value: "select",
                description: '"select"'
            }, M = function(e) {
                return {
                    type: "selectFormat",
                    options: e,
                    location: Se()
                };
            }, A = "=", F = {
                type: "literal",
                value: "=",
                description: '"="'
            }, I = function(e, t) {
                return {
                    type: "optionalFormatPattern",
                    selector: e,
                    value: t,
                    location: Se()
                };
            }, R = "offset:", W = {
                type: "literal",
                value: "offset:",
                description: '"offset:"'
            }, D = function(e) {
                return e;
            }, U = function(e, t) {
                return {
                    type: "pluralFormat",
                    offset: e,
                    options: t,
                    location: Se()
                };
            }, B = {
                type: "other",
                description: "whitespace"
            }, X = /^[ \t\n\r]/, z = {
                type: "class",
                value: "[ \\t\\n\\r]",
                description: "[ \\t\\n\\r]"
            }, H = {
                type: "other",
                description: "optionalWhitespace"
            }, V = /^[0-9]/, G = {
                type: "class",
                value: "[0-9]",
                description: "[0-9]"
            }, Y = /^[0-9a-f]/i, J = {
                type: "class",
                value: "[0-9a-f]i",
                description: "[0-9a-f]i"
            }, $ = "0", K = {
                type: "literal",
                value: "0",
                description: '"0"'
            }, Z = /^[1-9]/, Q = {
                type: "class",
                value: "[1-9]",
                description: "[1-9]"
            }, ee = function(e) {
                return parseInt(e, 10);
            }, te = /^[^{}\\\0-\x1F\x7f \t\n\r]/, ne = {
                type: "class",
                value: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]",
                description: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]"
            }, re = "\\\\", oe = {
                type: "literal",
                value: "\\\\",
                description: '"\\\\\\\\"'
            }, ae = function() {
                return "\\";
            }, ie = "\\#", se = {
                type: "literal",
                value: "\\#",
                description: '"\\\\#"'
            }, ue = function() {
                return "\\#";
            }, le = "\\{", ce = {
                type: "literal",
                value: "\\{",
                description: '"\\\\{"'
            }, pe = function() {
                return "{";
            }, de = "\\}", fe = {
                type: "literal",
                value: "\\}",
                description: '"\\\\}"'
            }, he = function() {
                return "}";
            }, me = "\\u", ye = {
                type: "literal",
                value: "\\u",
                description: '"\\\\u"'
            }, ve = function(e) {
                return String.fromCharCode(parseInt(e, 16));
            }, ge = function(e) {
                return e.join("");
            }, be = 0, we = 0, xe = [ {
                line: 1,
                column: 1,
                seenCR: !1
            } ], _e = 0, ke = [], je = 0;
            if ("startRule" in r) {
                if (!(r.startRule in a)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
                i = a[r.startRule];
            }
            function Se() {
                return Oe(we, be);
            }
            function Ee(t) {
                var n, r, o = xe[t];
                if (o) return o;
                for (n = t - 1; !xe[n]; ) n--;
                for (o = {
                    line: (o = xe[n]).line,
                    column: o.column,
                    seenCR: o.seenCR
                }; n < t; ) "\n" === (r = e.charAt(n)) ? (o.seenCR || o.line++, o.column = 1, o.seenCR = !1) : "\r" === r || "\u2028" === r || "\u2029" === r ? (o.line++, 
                o.column = 1, o.seenCR = !0) : (o.column++, o.seenCR = !1), n++;
                return xe[t] = o, o;
            }
            function Oe(e, t) {
                var n = Ee(e), r = Ee(t);
                return {
                    start: {
                        offset: e,
                        line: n.line,
                        column: n.column
                    },
                    end: {
                        offset: t,
                        line: r.line,
                        column: r.column
                    }
                };
            }
            function Ce(e) {
                be < _e || (be > _e && (_e = be, ke = []), ke.push(e));
            }
            function Te(e, n, r, o) {
                function a(e) {
                    var t = 1;
                    for (e.sort(function(e, t) {
                        return e.description < t.description ? -1 : e.description > t.description ? 1 : 0;
                    }); t < e.length; ) e[t - 1] === e[t] ? e.splice(t, 1) : t++;
                }
                function i(e, t) {
                    function n(e) {
                        function t(e) {
                            return e.charCodeAt(0).toString(16).toUpperCase();
                        }
                        return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(e) {
                            return "\\x0" + t(e);
                        }).replace(/[\x10-\x1F\x80-\xFF]/g, function(e) {
                            return "\\x" + t(e);
                        }).replace(/[\u0100-\u0FFF]/g, function(e) {
                            return "\\u0" + t(e);
                        }).replace(/[\u1000-\uFFFF]/g, function(e) {
                            return "\\u" + t(e);
                        });
                    }
                    var r, o = new Array(e.length);
                    for (r = 0; r < e.length; r++) o[r] = e[r].description;
                    return "Expected " + (e.length > 1 ? o.slice(0, -1).join(", ") + " or " + o[e.length - 1] : o[0]) + " but " + (t ? '"' + n(t) + '"' : "end of input") + " found.";
                }
                return null !== n && a(n), new t(null !== e ? e : i(n, r), n, r, o);
            }
            function Le() {
                return Ne();
            }
            function Ne() {
                var e, t, n;
                for (e = be, t = [], n = Pe(); n !== o; ) t.push(n), n = Pe();
                return t !== o && (we = e, t = s(t)), e = t;
            }
            function Pe() {
                var e;
                return (e = Me()) === o && (e = Fe()), e;
            }
            function qe() {
                var t, n, r, a, i, s;
                if (t = be, n = [], r = be, (a = Ge()) !== o && (i = Ze()) !== o && (s = Ge()) !== o ? r = a = [ a, i, s ] : (be = r, 
                r = o), r !== o) for (;r !== o; ) n.push(r), r = be, (a = Ge()) !== o && (i = Ze()) !== o && (s = Ge()) !== o ? r = a = [ a, i, s ] : (be = r, 
                r = o); else n = o;
                return n !== o && (we = t, n = u(n)), (t = n) === o && (t = be, t = (n = Ve()) !== o ? e.substring(t, be) : n), 
                t;
            }
            function Me() {
                var e, t;
                return e = be, (t = qe()) !== o && (we = e, t = l(t)), e = t;
            }
            function Ae() {
                var t, n, r;
                if ((t = $e()) === o) {
                    if (t = be, n = [], c.test(e.charAt(be)) ? (r = e.charAt(be), be++) : (r = o, 0 === je && Ce(p)), 
                    r !== o) for (;r !== o; ) n.push(r), c.test(e.charAt(be)) ? (r = e.charAt(be), be++) : (r = o, 
                    0 === je && Ce(p)); else n = o;
                    t = n !== o ? e.substring(t, be) : n;
                }
                return t;
            }
            function Fe() {
                var t, n, r, a, i, s, u;
                return t = be, 123 === e.charCodeAt(be) ? (n = d, be++) : (n = o, 0 === je && Ce(f)), 
                n !== o && Ge() !== o && (r = Ae()) !== o && Ge() !== o ? (a = be, 44 === e.charCodeAt(be) ? (i = h, 
                be++) : (i = o, 0 === je && Ce(m)), i !== o && (s = Ge()) !== o && (u = Ie()) !== o ? a = i = [ i, s, u ] : (be = a, 
                a = o), a === o && (a = null), a !== o && (i = Ge()) !== o ? (125 === e.charCodeAt(be) ? (s = y, 
                be++) : (s = o, 0 === je && Ce(v)), s !== o ? (we = t, t = n = g(r, a)) : (be = t, 
                t = o)) : (be = t, t = o)) : (be = t, t = o), t;
            }
            function Ie() {
                var e;
                return (e = Re()) === o && (e = We()) === o && (e = De()) === o && (e = Ue()), e;
            }
            function Re() {
                var t, n, r, a, i, s;
                return t = be, e.substr(be, 6) === b ? (n = b, be += 6) : (n = o, 0 === je && Ce(w)), 
                n === o && (e.substr(be, 4) === x ? (n = x, be += 4) : (n = o, 0 === je && Ce(_)), 
                n === o && (e.substr(be, 4) === k ? (n = k, be += 4) : (n = o, 0 === je && Ce(j)))), 
                n !== o && Ge() !== o ? (r = be, 44 === e.charCodeAt(be) ? (a = h, be++) : (a = o, 
                0 === je && Ce(m)), a !== o && (i = Ge()) !== o && (s = Ze()) !== o ? r = a = [ a, i, s ] : (be = r, 
                r = o), r === o && (r = null), r !== o ? (we = t, t = n = S(n, r)) : (be = t, t = o)) : (be = t, 
                t = o), t;
            }
            function We() {
                var t, n, r, a;
                return t = be, e.substr(be, 6) === E ? (n = E, be += 6) : (n = o, 0 === je && Ce(O)), 
                n !== o && Ge() !== o ? (44 === e.charCodeAt(be) ? (r = h, be++) : (r = o, 0 === je && Ce(m)), 
                r !== o && Ge() !== o && (a = He()) !== o ? (we = t, t = n = C(a)) : (be = t, t = o)) : (be = t, 
                t = o), t;
            }
            function De() {
                var t, n, r, a;
                return t = be, e.substr(be, 13) === T ? (n = T, be += 13) : (n = o, 0 === je && Ce(L)), 
                n !== o && Ge() !== o ? (44 === e.charCodeAt(be) ? (r = h, be++) : (r = o, 0 === je && Ce(m)), 
                r !== o && Ge() !== o && (a = He()) !== o ? (we = t, t = n = N(a)) : (be = t, t = o)) : (be = t, 
                t = o), t;
            }
            function Ue() {
                var t, n, r, a, i;
                if (t = be, e.substr(be, 6) === P ? (n = P, be += 6) : (n = o, 0 === je && Ce(q)), 
                n !== o) if (Ge() !== o) if (44 === e.charCodeAt(be) ? (r = h, be++) : (r = o, 0 === je && Ce(m)), 
                r !== o) if (Ge() !== o) {
                    if (a = [], (i = Xe()) !== o) for (;i !== o; ) a.push(i), i = Xe(); else a = o;
                    a !== o ? (we = t, t = n = M(a)) : (be = t, t = o);
                } else be = t, t = o; else be = t, t = o; else be = t, t = o; else be = t, t = o;
                return t;
            }
            function Be() {
                var t, n, r, a;
                return t = be, n = be, 61 === e.charCodeAt(be) ? (r = A, be++) : (r = o, 0 === je && Ce(F)), 
                r !== o && (a = $e()) !== o ? n = r = [ r, a ] : (be = n, n = o), (t = n !== o ? e.substring(t, be) : n) === o && (t = Ze()), 
                t;
            }
            function Xe() {
                var t, n, r, a, i;
                return t = be, Ge() !== o && (n = Be()) !== o && Ge() !== o ? (123 === e.charCodeAt(be) ? (r = d, 
                be++) : (r = o, 0 === je && Ce(f)), r !== o && Ge() !== o && (a = Ne()) !== o && Ge() !== o ? (125 === e.charCodeAt(be) ? (i = y, 
                be++) : (i = o, 0 === je && Ce(v)), i !== o ? (we = t, t = I(n, a)) : (be = t, t = o)) : (be = t, 
                t = o)) : (be = t, t = o), t;
            }
            function ze() {
                var t, n, r;
                return t = be, e.substr(be, 7) === R ? (n = R, be += 7) : (n = o, 0 === je && Ce(W)), 
                n !== o && Ge() !== o && (r = $e()) !== o ? (we = t, t = n = D(r)) : (be = t, t = o), 
                t;
            }
            function He() {
                var e, t, n, r;
                if (e = be, (t = ze()) === o && (t = null), t !== o) if (Ge() !== o) {
                    if (n = [], (r = Xe()) !== o) for (;r !== o; ) n.push(r), r = Xe(); else n = o;
                    n !== o ? (we = e, e = t = U(t, n)) : (be = e, e = o);
                } else be = e, e = o; else be = e, e = o;
                return e;
            }
            function Ve() {
                var t, n;
                if (je++, t = [], X.test(e.charAt(be)) ? (n = e.charAt(be), be++) : (n = o, 0 === je && Ce(z)), 
                n !== o) for (;n !== o; ) t.push(n), X.test(e.charAt(be)) ? (n = e.charAt(be), be++) : (n = o, 
                0 === je && Ce(z)); else t = o;
                return je--, t === o && (n = o, 0 === je && Ce(B)), t;
            }
            function Ge() {
                var t, n, r;
                for (je++, t = be, n = [], r = Ve(); r !== o; ) n.push(r), r = Ve();
                return t = n !== o ? e.substring(t, be) : n, je--, t === o && (n = o, 0 === je && Ce(H)), 
                t;
            }
            function Ye() {
                var t;
                return V.test(e.charAt(be)) ? (t = e.charAt(be), be++) : (t = o, 0 === je && Ce(G)), 
                t;
            }
            function Je() {
                var t;
                return Y.test(e.charAt(be)) ? (t = e.charAt(be), be++) : (t = o, 0 === je && Ce(J)), 
                t;
            }
            function $e() {
                var t, n, r, a, i, s;
                if (t = be, 48 === e.charCodeAt(be) ? (n = $, be++) : (n = o, 0 === je && Ce(K)), 
                n === o) {
                    if (n = be, r = be, Z.test(e.charAt(be)) ? (a = e.charAt(be), be++) : (a = o, 0 === je && Ce(Q)), 
                    a !== o) {
                        for (i = [], s = Ye(); s !== o; ) i.push(s), s = Ye();
                        i !== o ? r = a = [ a, i ] : (be = r, r = o);
                    } else be = r, r = o;
                    n = r !== o ? e.substring(n, be) : r;
                }
                return n !== o && (we = t, n = ee(n)), t = n;
            }
            function Ke() {
                var t, n, r, a, i, s, u, l;
                return te.test(e.charAt(be)) ? (t = e.charAt(be), be++) : (t = o, 0 === je && Ce(ne)), 
                t === o && (t = be, e.substr(be, 2) === re ? (n = re, be += 2) : (n = o, 0 === je && Ce(oe)), 
                n !== o && (we = t, n = ae()), (t = n) === o && (t = be, e.substr(be, 2) === ie ? (n = ie, 
                be += 2) : (n = o, 0 === je && Ce(se)), n !== o && (we = t, n = ue()), (t = n) === o && (t = be, 
                e.substr(be, 2) === le ? (n = le, be += 2) : (n = o, 0 === je && Ce(ce)), n !== o && (we = t, 
                n = pe()), (t = n) === o && (t = be, e.substr(be, 2) === de ? (n = de, be += 2) : (n = o, 
                0 === je && Ce(fe)), n !== o && (we = t, n = he()), (t = n) === o && (t = be, e.substr(be, 2) === me ? (n = me, 
                be += 2) : (n = o, 0 === je && Ce(ye)), n !== o ? (r = be, a = be, (i = Je()) !== o && (s = Je()) !== o && (u = Je()) !== o && (l = Je()) !== o ? a = i = [ i, s, u, l ] : (be = a, 
                a = o), (r = a !== o ? e.substring(r, be) : a) !== o ? (we = t, t = n = ve(r)) : (be = t, 
                t = o)) : (be = t, t = o)))))), t;
            }
            function Ze() {
                var e, t, n;
                if (e = be, t = [], (n = Ke()) !== o) for (;n !== o; ) t.push(n), n = Ke(); else t = o;
                return t !== o && (we = e, t = ge(t)), e = t;
            }
            if ((n = i()) !== o && be === e.length) return n;
            throw n !== o && be < e.length && Ce({
                type: "end",
                description: "end of input"
            }), Te(null, ke, _e < e.length ? e.charAt(_e) : null, _e < e.length ? Oe(_e, _e + 1) : Oe(_e, _e));
        }
        return e(t, Error), {
            SyntaxError: t,
            parse: n
        };
    }();
}, function(e, t, n) {
    "use strict";
    t.default = {
        locale: "en",
        pluralRuleFunction: function(e, t) {
            var n = String(e).split("."), r = !n[1], o = Number(n[0]) == e, a = o && n[0].slice(-1), i = o && n[0].slice(-2);
            return t ? 1 == a && 11 != i ? "one" : 2 == a && 12 != i ? "two" : 3 == a && 13 != i ? "few" : "other" : 1 == e && r ? "one" : "other";
        }
    };
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    var r = n(79), o = n(82);
    r.default.__addLocaleData(o.default), r.default.defaultLocale = "en", t.default = r.default;
}, function(e, t, n) {
    "use strict";
    var r = n(9), o = n(80), a = n(81);
    t.default = u;
    var i = [ "second", "second-short", "minute", "minute-short", "hour", "hour-short", "day", "day-short", "month", "month-short", "year", "year-short" ], s = [ "best fit", "numeric" ];
    function u(e, t) {
        t = t || {}, a.isArray(e) && (e = e.concat()), a.defineProperty(this, "_locale", {
            value: this._resolveLocale(e)
        }), a.defineProperty(this, "_options", {
            value: {
                style: this._resolveStyle(t.style),
                units: this._isValidUnits(t.units) && t.units
            }
        }), a.defineProperty(this, "_locales", {
            value: e
        }), a.defineProperty(this, "_fields", {
            value: this._findFields(this._locale)
        }), a.defineProperty(this, "_messages", {
            value: a.objCreate(null)
        });
        var n = this;
        this.format = function(e, t) {
            return n._format(e, t);
        };
    }
    a.defineProperty(u, "__localeData__", {
        value: a.objCreate(null)
    }), a.defineProperty(u, "__addLocaleData", {
        value: function(e) {
            if (!e || !e.locale) throw new Error("Locale data provided to IntlRelativeFormat is missing a `locale` property value");
            u.__localeData__[e.locale.toLowerCase()] = e, r.default.__addLocaleData(e);
        }
    }), a.defineProperty(u, "defaultLocale", {
        enumerable: !0,
        writable: !0,
        value: void 0
    }), a.defineProperty(u, "thresholds", {
        enumerable: !0,
        value: {
            second: 45,
            "second-short": 45,
            minute: 45,
            "minute-short": 45,
            hour: 22,
            "hour-short": 22,
            day: 26,
            "day-short": 26,
            month: 11,
            "month-short": 11
        }
    }), u.prototype.resolvedOptions = function() {
        return {
            locale: this._locale,
            style: this._options.style,
            units: this._options.units
        };
    }, u.prototype._compileMessage = function(e) {
        var t, n = this._locales, o = (this._locale, this._fields[e].relativeTime), a = "", i = "";
        for (t in o.future) o.future.hasOwnProperty(t) && (a += " " + t + " {" + o.future[t].replace("{0}", "#") + "}");
        for (t in o.past) o.past.hasOwnProperty(t) && (i += " " + t + " {" + o.past[t].replace("{0}", "#") + "}");
        var s = "{when, select, future {{0, plural, " + a + "}}past {{0, plural, " + i + "}}}";
        return new r.default(s, n);
    }, u.prototype._getMessage = function(e) {
        var t = this._messages;
        return t[e] || (t[e] = this._compileMessage(e)), t[e];
    }, u.prototype._getRelativeUnits = function(e, t) {
        var n = this._fields[t];
        if (n.relative) return n.relative[e];
    }, u.prototype._findFields = function(e) {
        for (var t = u.__localeData__, n = t[e.toLowerCase()]; n; ) {
            if (n.fields) return n.fields;
            n = n.parentLocale && t[n.parentLocale.toLowerCase()];
        }
        throw new Error("Locale data added to IntlRelativeFormat is missing `fields` for :" + e);
    }, u.prototype._format = function(e, t) {
        var n = t && void 0 !== t.now ? t.now : a.dateNow();
        if (void 0 === e && (e = n), !isFinite(n)) throw new RangeError("The `now` option provided to IntlRelativeFormat#format() is not in valid range.");
        if (!isFinite(e)) throw new RangeError("The date value provided to IntlRelativeFormat#format() is not in valid range.");
        var r = o.default(n, e), i = this._options.units || this._selectUnits(r), s = r[i];
        if ("numeric" !== this._options.style) {
            var u = this._getRelativeUnits(s, i);
            if (u) return u;
        }
        return this._getMessage(i).format({
            0: Math.abs(s),
            when: s < 0 ? "past" : "future"
        });
    }, u.prototype._isValidUnits = function(e) {
        if (!e || a.arrIndexOf.call(i, e) >= 0) return !0;
        if ("string" == typeof e) {
            var t = /s$/.test(e) && e.substr(0, e.length - 1);
            if (t && a.arrIndexOf.call(i, t) >= 0) throw new Error('"' + e + '" is not a valid IntlRelativeFormat `units` value, did you mean: ' + t);
        }
        throw new Error('"' + e + '" is not a valid IntlRelativeFormat `units` value, it must be one of: "' + i.join('", "') + '"');
    }, u.prototype._resolveLocale = function(e) {
        "string" == typeof e && (e = [ e ]), e = (e || []).concat(u.defaultLocale);
        var t, n, r, o, a = u.__localeData__;
        for (t = 0, n = e.length; t < n; t += 1) for (r = e[t].toLowerCase().split("-"); r.length; ) {
            if (o = a[r.join("-")]) return o.locale;
            r.pop();
        }
        var i = e.pop();
        throw new Error("No locale data has been added to IntlRelativeFormat for: " + e.join(", ") + ", or the default locale: " + i);
    }, u.prototype._resolveStyle = function(e) {
        if (!e) return s[0];
        if (a.arrIndexOf.call(s, e) >= 0) return e;
        throw new Error('"' + e + '" is not a valid IntlRelativeFormat `style` value, it must be one of: "' + s.join('", "') + '"');
    }, u.prototype._selectUnits = function(e) {
        var t, n, r, o = i.filter(function(e) {
            return e.indexOf("-short") < 1;
        });
        for (t = 0, n = o.length; t < n && (r = o[t], !(Math.abs(e[r]) < u.thresholds[r])); t += 1) ;
        return r;
    };
}, function(e, t, n) {
    "use strict";
    var r = Math.round;
    function o(e) {
        return 400 * e / 146097;
    }
    t.default = function(e, t) {
        var n = r((t = +t) - (e = +e)), a = r(n / 1e3), i = r(a / 60), s = r(i / 60), u = r(s / 24), l = r(u / 7), c = o(u), p = r(12 * c), d = r(c);
        return {
            millisecond: n,
            second: a,
            "second-short": a,
            minute: i,
            "minute-short": i,
            hour: s,
            "hour-short": s,
            day: u,
            "day-short": u,
            week: l,
            "week-short": l,
            month: p,
            "month-short": p,
            year: d,
            "year-short": d
        };
    };
}, function(e, t, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty, o = Object.prototype.toString, a = function() {
        try {
            return !!Object.defineProperty({}, "a", {});
        } catch (e) {
            return !1;
        }
    }(), i = (!a && Object.prototype.__defineGetter__, a ? Object.defineProperty : function(e, t, n) {
        "get" in n && e.__defineGetter__ ? e.__defineGetter__(t, n.get) : (!r.call(e, t) || "value" in n) && (e[t] = n.value);
    }), s = Object.create || function(e, t) {
        var n, o;
        function a() {}
        for (o in a.prototype = e, n = new a(), t) r.call(t, o) && i(n, o, t[o]);
        return n;
    }, u = Array.prototype.indexOf || function(e, t) {
        var n = this;
        if (!n.length) return -1;
        for (var r = t || 0, o = n.length; r < o; r++) if (n[r] === e) return r;
        return -1;
    }, l = Array.isArray || function(e) {
        return "[object Array]" === o.call(e);
    }, c = Date.now || function() {
        return new Date().getTime();
    };
    t.defineProperty = i, t.objCreate = s, t.arrIndexOf = u, t.isArray = l, t.dateNow = c;
}, function(e, t, n) {
    "use strict";
    t.default = {
        locale: "en",
        pluralRuleFunction: function(e, t) {
            var n = String(e).split("."), r = !n[1], o = Number(n[0]) == e, a = o && n[0].slice(-1), i = o && n[0].slice(-2);
            return t ? 1 == a && 11 != i ? "one" : 2 == a && 12 != i ? "two" : 3 == a && 13 != i ? "few" : "other" : 1 == e && r ? "one" : "other";
        },
        fields: {
            year: {
                displayName: "year",
                relative: {
                    0: "this year",
                    1: "next year",
                    "-1": "last year"
                },
                relativeTime: {
                    future: {
                        one: "in {0} year",
                        other: "in {0} years"
                    },
                    past: {
                        one: "{0} year ago",
                        other: "{0} years ago"
                    }
                }
            },
            "year-short": {
                displayName: "yr.",
                relative: {
                    0: "this yr.",
                    1: "next yr.",
                    "-1": "last yr."
                },
                relativeTime: {
                    future: {
                        one: "in {0} yr.",
                        other: "in {0} yr."
                    },
                    past: {
                        one: "{0} yr. ago",
                        other: "{0} yr. ago"
                    }
                }
            },
            month: {
                displayName: "month",
                relative: {
                    0: "this month",
                    1: "next month",
                    "-1": "last month"
                },
                relativeTime: {
                    future: {
                        one: "in {0} month",
                        other: "in {0} months"
                    },
                    past: {
                        one: "{0} month ago",
                        other: "{0} months ago"
                    }
                }
            },
            "month-short": {
                displayName: "mo.",
                relative: {
                    0: "this mo.",
                    1: "next mo.",
                    "-1": "last mo."
                },
                relativeTime: {
                    future: {
                        one: "in {0} mo.",
                        other: "in {0} mo."
                    },
                    past: {
                        one: "{0} mo. ago",
                        other: "{0} mo. ago"
                    }
                }
            },
            day: {
                displayName: "day",
                relative: {
                    0: "today",
                    1: "tomorrow",
                    "-1": "yesterday"
                },
                relativeTime: {
                    future: {
                        one: "in {0} day",
                        other: "in {0} days"
                    },
                    past: {
                        one: "{0} day ago",
                        other: "{0} days ago"
                    }
                }
            },
            "day-short": {
                displayName: "day",
                relative: {
                    0: "today",
                    1: "tomorrow",
                    "-1": "yesterday"
                },
                relativeTime: {
                    future: {
                        one: "in {0} day",
                        other: "in {0} days"
                    },
                    past: {
                        one: "{0} day ago",
                        other: "{0} days ago"
                    }
                }
            },
            hour: {
                displayName: "hour",
                relative: {
                    0: "this hour"
                },
                relativeTime: {
                    future: {
                        one: "in {0} hour",
                        other: "in {0} hours"
                    },
                    past: {
                        one: "{0} hour ago",
                        other: "{0} hours ago"
                    }
                }
            },
            "hour-short": {
                displayName: "hr.",
                relative: {
                    0: "this hour"
                },
                relativeTime: {
                    future: {
                        one: "in {0} hr.",
                        other: "in {0} hr."
                    },
                    past: {
                        one: "{0} hr. ago",
                        other: "{0} hr. ago"
                    }
                }
            },
            minute: {
                displayName: "minute",
                relative: {
                    0: "this minute"
                },
                relativeTime: {
                    future: {
                        one: "in {0} minute",
                        other: "in {0} minutes"
                    },
                    past: {
                        one: "{0} minute ago",
                        other: "{0} minutes ago"
                    }
                }
            },
            "minute-short": {
                displayName: "min.",
                relative: {
                    0: "this minute"
                },
                relativeTime: {
                    future: {
                        one: "in {0} min.",
                        other: "in {0} min."
                    },
                    past: {
                        one: "{0} min. ago",
                        other: "{0} min. ago"
                    }
                }
            },
            second: {
                displayName: "second",
                relative: {
                    0: "now"
                },
                relativeTime: {
                    future: {
                        one: "in {0} second",
                        other: "in {0} seconds"
                    },
                    past: {
                        one: "{0} second ago",
                        other: "{0} seconds ago"
                    }
                }
            },
            "second-short": {
                displayName: "sec.",
                relative: {
                    0: "now"
                },
                relativeTime: {
                    future: {
                        one: "in {0} sec.",
                        other: "in {0} sec."
                    },
                    past: {
                        one: "{0} sec. ago",
                        other: "{0} sec. ago"
                    }
                }
            }
        }
    };
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    var r = n(85);
    function o() {}
    e.exports = function() {
        function e(e, t, n, o, a, i) {
            if (i !== r) {
                var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw s.name = "Invariant Violation", s;
            }
        }
        function t() {
            return e;
        }
        e.isRequired = e;
        var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t
        };
        return n.checkPropTypes = o, n.PropTypes = n, n;
    };
}, function(e, t, n) {
    "use strict";
    var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    e.exports = r;
}, function(e, t) {
    var n, r, o = e.exports = {};
    function a() {
        throw new Error("setTimeout has not been defined");
    }
    function i() {
        throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0);
        } catch (t) {
            try {
                return n.call(null, e, 0);
            } catch (t) {
                return n.call(this, e, 0);
            }
        }
    }
    function u(e) {
        if (r === clearTimeout) return clearTimeout(e);
        if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
        try {
            return r(e);
        } catch (t) {
            try {
                return r.call(null, e);
            } catch (t) {
                return r.call(this, e);
            }
        }
    }
    !function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : a;
        } catch (e) {
            n = a;
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : i;
        } catch (e) {
            r = i;
        }
    }();
    var l, c = [], p = !1, d = -1;
    function f() {
        p && l && (p = !1, l.length ? c = l.concat(c) : d = -1, c.length && h());
    }
    function h() {
        if (!p) {
            var e = s(f);
            p = !0;
            for (var t = c.length; t; ) {
                for (l = c, c = []; ++d < t; ) l && l[d].run();
                d = -1, t = c.length;
            }
            l = null, p = !1, u(e);
        }
    }
    function m(e, t) {
        this.fun = e, this.array = t;
    }
    function y() {}
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new m(e, t)), 1 !== c.length || p || s(h);
    }, m.prototype.run = function() {
        this.fun.apply(null, this.array);
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", 
    o.versions = {}, o.on = y, o.addListener = y, o.once = y, o.off = y, o.removeListener = y, 
    o.removeAllListeners = y, o.emit = y, o.prependListener = y, o.prependOnceListener = y, 
    o.listeners = function(e) {
        return [];
    }, o.binding = function(e) {
        throw new Error("process.binding is not supported");
    }, o.cwd = function() {
        return "/";
    }, o.chdir = function(e) {
        throw new Error("process.chdir is not supported");
    }, o.umask = function() {
        return 0;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(88);
    function o(e) {
        var t = r.objCreate(null);
        return function() {
            var n = Array.prototype.slice.call(arguments), o = a(n), i = o && t[o];
            return i || (i = new (r.bind.apply(e, [ null ].concat(n)))(), o && (t[o] = i)), 
            i;
        };
    }
    function a(e) {
        if ("undefined" != typeof JSON) {
            var t, n, r, o = [];
            for (t = 0, n = e.length; t < n; t += 1) (r = e[t]) && "object" == typeof r ? o.push(i(r)) : o.push(r);
            return JSON.stringify(o);
        }
    }
    function i(e) {
        var t, n, r, o, a = [], i = [];
        for (t in e) e.hasOwnProperty(t) && i.push(t);
        var s = i.sort();
        for (n = 0, r = s.length; n < r; n += 1) (o = {})[t = s[n]] = e[t], a[n] = o;
        return a;
    }
    t.default = o;
}, function(e, t, n) {
    "use strict";
    var r = Function.prototype.bind || function(e) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var t = Array.prototype.slice.call(arguments, 1), n = this, r = function() {}, o = function() {
            return n.apply(this instanceof r ? this : e, t.concat(Array.prototype.slice.call(arguments)));
        };
        return this.prototype && (r.prototype = this.prototype), o.prototype = new r(), 
        o;
    }, o = Object.prototype.hasOwnProperty, a = function() {
        try {
            return !!Object.defineProperty({}, "a", {});
        } catch (e) {
            return !1;
        }
    }(), i = (!a && Object.prototype.__defineGetter__, a ? Object.defineProperty : function(e, t, n) {
        "get" in n && e.__defineGetter__ ? e.__defineGetter__(t, n.get) : (!o.call(e, t) || "value" in n) && (e[t] = n.value);
    }), s = Object.create || function(e, t) {
        var n, r;
        function a() {}
        for (r in a.prototype = e, n = new a(), t) o.call(t, r) && i(n, r, t[r]);
        return n;
    };
    t.bind = r, t.defineProperty = i, t.objCreate = s;
}, function(e, t) {
    var n = "undefined" != typeof crypto && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && msCrypto.getRandomValues.bind(msCrypto);
    if (n) {
        var r = new Uint8Array(16);
        e.exports = function() {
            return n(r), r;
        };
    } else {
        var o = new Array(16);
        e.exports = function() {
            for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), 
            o[t] = e >>> ((3 & t) << 3) & 255;
            return o;
        };
    }
}, function(e, t) {
    for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
    function o(e, t) {
        var r = t || 0, o = n;
        return o[e[r++]] + o[e[r++]] + o[e[r++]] + o[e[r++]] + "-" + o[e[r++]] + o[e[r++]] + "-" + o[e[r++]] + o[e[r++]] + "-" + o[e[r++]] + o[e[r++]] + "-" + o[e[r++]] + o[e[r++]] + o[e[r++]] + o[e[r++]] + o[e[r++]] + o[e[r++]];
    }
    e.exports = o;
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SpeechServer = void 0;
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), o = n(24), a = n(25);
    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    t.SpeechServer = function() {
        function e(t) {
            i(this, e);
            try {
                this.currentVoices = [], this.speechServer = null, this.speechServerUser = null, 
                this.rootLocation = null, this.audioElem = null, this.audioPlaybackTimerID = null, 
                this.currentHighlightWord = -1, this.playbackTimeArray = null, this.session = 0, 
                this.boundAudioPlayBackTimer = null, this.speechStop = !1, this.paused = !1, this.gotVoices = !1, 
                this.eventBus = a.EventBus, this.configuration = new o.Configuration(), this.speechSettings = t, 
                this.voicePromise = null, this.voicesAvailable = null, this.charMap = this.configuration.getConfiguration().charMap, 
                this.timeout = null, this.eventBus.subscribe("onVoices", this.onVoicesResponse, this);
            } catch (e) {}
        }
        return r(e, [ {
            key: "initialise",
            value: function() {
                try {
                    var e = this.configuration.getConfiguration();
                    return this.speechServer = e.serversettings.speechserver, this.speechServerUser = e.serversettings.user, 
                    this.getVoices();
                } catch (e) {
                    Promise.reject(e);
                }
            }
        }, {
            key: "refreshVoices",
            value: function(e) {
                void 0 == e && (e = !1);
                var t = this.configuration.getConfiguration();
                this.speechServer = t.serversettings.speechserver, this.speechServerUser = t.serversettings.user;
                this.speechServer, this.speechServerUser;
            }
        }, {
            key: "status",
            value: function(e) {
                return e.status >= 200 && e.status < 300 ? Promise.resolve(e) : Promise.reject(new Error(e.statusText));
            }
        }, {
            key: "json",
            value: function(e) {
                return e.json();
            }
        }, {
            key: "text",
            value: function(e) {
                return e.text();
            }
        }, {
            key: "blob",
            value: function(e) {
                return e.blob();
            }
        }, {
            key: "buffer",
            value: function(e) {
                return e.arrayBuffer();
            }
        }, {
            key: "getVoices",
            value: function() {
                var e = this;
                try {
                    if (this.gotVoices) return Promise.resolve(this.currentVoices);
                    var t = this.speechServer + "user.html?query=getVoices&type=json&grouped=false&userName=" + this.speechServerUser;
                    return fetch(t, {
                        method: "GET"
                    }).then(this.status).then(this.json).then(function(t) {
                        e.onVoicesResponse(t);
                    }).then(function() {
                        return e.currentVoices;
                    }).catch(function(e) {
                        return Promise.reject(e);
                    });
                } catch (e) {
                    return Promise.reject(e);
                }
            }
        }, {
            key: "speakSelection",
            value: function(e, t, n) {
                var r = this;
                try {
                    void 0 == n && (n = !0), this.speechStop = !1, this.paused = !1, null === this.audioElem && (this.audioElem = new Audio(), 
                    this.audioElem.type = "audio/mpeg"), this.session = t, this.currentHighlightWord = 0;
                    for (var o = this.speechServer + "index.html", a = "", i = 0; i < e.length; i++) {
                        var s = e[i];
                        a += " " === s || "" === s ? " " : n ? "<bookmark mark='" + i + "'/>" + this.encodeChars(e[i]) + " " : this.encodeChars(e[i]);
                    }
                    a += "<bookmark mark='" + i + "'/>", this.eventBus.publish("onthAPIWord", new Array("start"));
                    var u = "text=" + encodeURIComponent(a) + "&userName=" + encodeURIComponent(this.speechServerUser) + "&voiceName=" + encodeURIComponent(this.speechSettings.getUserSettings().speechoptions.voice) + "&speedValue=" + encodeURIComponent(this.speechSettings.getUserSettings().speechoptions.speed) + "&usePron=Y";
                    fetch(o, {
                        method: "POST",
                        headers: new Headers({
                            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                        }),
                        body: u
                    }).then(this.status).then(this.text).then(function(e) {
                        r.onSpeechRequestResponse(e);
                    }).catch(function(e) {});
                } catch (e) {}
            }
        }, {
            key: "stop",
            value: function() {
                try {
                    if (clearTimeout(this.timeout), null === this.audioElem || null === this.playbackTimeArray) return;
                    this.speechStop = !0, this.paused = !1, this.playbackTimeArray.length = 0;
                    try {
                        this.audioElem.pause(), this.audioElem.currentTime = 0, this.audioElem.src = "";
                    } catch (e) {
                        return;
                    }
                } catch (e) {}
            }
        }, {
            key: "pause",
            value: function() {
                try {
                    if (null === this.audioElem) return;
                    if (0 === this.audioElem.currentTime) return;
                    if (this.paused) return this.audioElem.play(), void (this.paused = !1);
                    this.audioElem.pause(), this.paused = !0;
                } catch (e) {}
            }
        }, {
            key: "loadFiles",
            value: function(e, t) {
                var n = this;
                try {
                    this.audioElem.src = t, fetch(e, {
                        method: "POST"
                    }).then(this.status).then(this.text).then(function(e) {
                        n.onxmlFileResponse(e);
                    }).catch(function(e) {});
                } catch (e) {}
            }
        }, {
            key: "audioPlaybackTimer",
            value: function() {
                var e = this;
                try {
                    if (null === this.playbackTimeArray) return;
                    if (this.audioElem.ended) return this.audioElem.pause(), this.audioElem.currentTime = 0, 
                    this.audioElem.src = "", this.length = 0, void this.eventBus.publish("onthAPIWordonthAPIStop", []);
                    if (this.playbackTimeArray.length > 0) {
                        if (this.playbackTimeArray[this.currentHighlightWord] < this.audioElem.currentTime) {
                            var t = [];
                            t.push(this.currentHighlightWord), this.eventBus.publish("onthAPIWord", t), this.currentHighlightWord++;
                        }
                        if (this.audioElem.currentTime > this.playbackTimeArray[this.playbackTimeArray.length - 1]) {
                            clearTimeout(this.timeout), this.eventBus.publish("onthAPIStop", []);
                            try {
                                this.audioElem.pause();
                            } catch (e) {}
                            return;
                        }
                    }
                    this.timeout = setTimeout(function(t) {
                        e.audioPlaybackTimer();
                    }, 50);
                } catch (e) {}
            }
        }, {
            key: "onVoicesResponse",
            value: function(e) {
                try {
                    for (var t = e.voices, n = 0; n < t.length; n++) this.currentVoices[t[n].name] = {
                        description: t[n].description,
                        company: t[n].company,
                        maleFemale: t[n].maleFemale,
                        country: t[n].country
                    };
                    null == this.currentVoices[this.speechSettings.get_Voice()] && (null == this.currentVoices["Vocalizer Expressive Ava Premium High 22kHz"] ? this.speechSettings.set_Voice(Object.keys(this.currentVoices)[0]) : this.speechSettings.set_Voice("Vocalizer Expressive Ava Premium High 22kHz")), 
                    this.gotVoices = !0, this.eventBus.publish("onRefreshedVoices", this.currentVoices);
                } catch (e) {}
            }
        }, {
            key: "onSpeechRequestResponse",
            value: function(e) {
                try {
                    var t = e, n = t.indexOf("xml="), r = t.indexOf("&mp3"), o = t.substring(n + 4, r), a = t.substring(r + 5, t.length);
                    if ("error" == o || "error" == a) throw this.speechStop(), new Error("Speech request error. Error response from the server.");
                    if ("busy" == o || "busy" == a) throw this.speechStop(), new Error("Speech request error. Speech server busy.");
                    this.loadFiles(o, a);
                } catch (e) {}
            }
        }, {
            key: "onxmlFileResponse",
            value: function(e) {
                var t = this;
                try {
                    var n = new DOMParser().parseFromString(e, "text/xml");
                    if (this.playbackTimeArray = [], n && n.documentElement && n.documentElement.childNodes) {
                        for (var r = n.documentElement.childNodes, o = 0, a = 0; a < r.length; a++) 1 == r[a].nodeType && (this.playbackTimeArray[o] = parseFloat(r[a].getAttribute("time") / 1e3), 
                        o > 0 && this.playbackTimeArray[o] <= this.playbackTimeArray[o - 1] && (this.playbackTimeArray[o] = this.playbackTimeArray[o - 1] + .01), 
                        o += 1);
                        this.playbackTimeArray[this.playbackTimeArray.length - 1] < .1 && (this.playbackTimeArray.length = 0);
                    }
                    if (this.speechStop) return;
                    this.timeout = window.setTimeout(function(e) {
                        t.audioPlaybackTimer();
                    }, 50), this.audioElem.play();
                } catch (e) {}
            }
        }, {
            key: "encodeChars",
            value: function(e) {
                try {
                    for (var t = "", n = "", r = 0; r < e.length; r++) n = e.charCodeAt(r).toString(), 
                    void 0 === this.charMap[n] ? t += e.charAt(r) : t += this.charMap[n];
                    return t;
                } catch (e) {}
            }
        } ]), e;
    }();
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SpeechSettings = void 0;
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), o = n(24);
    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    t.SpeechSettings = function() {
        function e() {
            a(this, e), this.currentVoice = "ScanSoft Emily_Full_22kHz", this.configuration = new o.Configuration(), 
            this.userSettings = {
                speechoptions: {
                    voice: this.currentVoice,
                    continousreading: !0,
                    speed: 50
                },
                dictionary: {
                    position: "10px,150px"
                },
                translator: {
                    position: "10px,400px",
                    translang: "SPANISH",
                    transsource: "ENGLISH_US"
                },
                picturedictionary: {
                    position: "550px,150px"
                },
                collecthighlights: {
                    position: "160px,130px",
                    sortAlgorithm: 0,
                    yellow: !0,
                    green: !0,
                    blue: !0,
                    pink: !0
                },
                bar: {
                    visible: "true"
                },
                driveViewers: {
                    installed: !0
                },
                prediction: {
                    results: 10
                },
                language: {
                    language: "en_US",
                    services: "en_US"
                }
            };
        }
        return r(e, [ {
            key: "get_Voice",
            value: function() {
                try {
                    return this.currentVoice;
                } catch (e) {}
            }
        }, {
            key: "set_Voice",
            value: function(e) {
                try {
                    this.currentVoice = e, this.userSettings.speechoptions.voice = e;
                } catch (e) {}
            }
        }, {
            key: "set_Speed",
            value: function(e) {
                try {
                    this.userSettings.speechoptions.speed = e;
                } catch (e) {}
            }
        }, {
            key: "getVoices",
            value: function() {
                try {
                    return "";
                } catch (e) {}
            }
        }, {
            key: "getLocale",
            value: function() {
                try {
                    var e = "en-US";
                    null == e && (e = "en-US");
                    var t = this.configuration.getConfiguration();
                    return void 0 !== t[e] && (t.locale = e), t.locale;
                } catch (e) {}
            }
        }, {
            key: "getUserSettings",
            value: function() {
                return this.userSettings;
            }
        } ]), e;
    }();
}, function(e, t) {
    var n;
    n = function() {
        return this;
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
        "object" == typeof window && (n = window);
    }
    e.exports = n;
}, , function(e, t) {
    e.exports = void 0;
} ]);