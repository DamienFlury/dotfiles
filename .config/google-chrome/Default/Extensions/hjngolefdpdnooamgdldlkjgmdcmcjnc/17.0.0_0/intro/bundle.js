!function(t) {
    var e = {};
    function i(o) {
        if (e[o]) return e[o].exports;
        var M = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(M.exports, M, M.exports, i), M.l = !0, M.exports;
    }
    i.m = t, i.c = e, i.d = function(t, e, o) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        });
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (i.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var M in t) i.d(o, M, function(e) {
            return t[e];
        }.bind(null, M));
        return o;
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return i.d(e, "a", e), e;
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, i.p = "/", i(i.s = 64);
}([ function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, "h", function() {
        return a;
    }), i.d(e, "createElement", function() {
        return a;
    }), i.d(e, "cloneElement", function() {
        return u;
    }), i.d(e, "Component", function() {
        return G;
    }), i.d(e, "render", function() {
        return _;
    }), i.d(e, "rerender", function() {
        return w;
    }), i.d(e, "options", function() {
        return M;
    });
    var o = function() {}, M = {}, s = [], L = [];
    function a(t, e) {
        var i, a, r, n, u = L;
        for (n = arguments.length; n-- > 2; ) s.push(arguments[n]);
        for (e && null != e.children && (s.length || s.push(e.children), delete e.children); s.length; ) if ((a = s.pop()) && void 0 !== a.pop) for (n = a.length; n--; ) s.push(a[n]); else "boolean" == typeof a && (a = null), 
        (r = "function" != typeof t) && (null == a ? a = "" : "number" == typeof a ? a = String(a) : "string" != typeof a && (r = !1)), 
        r && i ? u[u.length - 1] += a : u === L ? u = [ a ] : u.push(a), i = r;
        var l = new o();
        return l.nodeName = t, l.children = u, l.attributes = null == e ? void 0 : e, l.key = null == e ? void 0 : e.key, 
        void 0 !== M.vnode && M.vnode(l), l;
    }
    function r(t, e) {
        for (var i in e) t[i] = e[i];
        return t;
    }
    var n = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
    function u(t, e) {
        return a(t.nodeName, r(r({}, t.attributes), e), arguments.length > 2 ? [].slice.call(arguments, 2) : t.children);
    }
    var l = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i, c = [];
    function j(t) {
        !t._dirty && (t._dirty = !0) && 1 == c.push(t) && (M.debounceRendering || n)(w);
    }
    function w() {
        var t, e = c;
        for (c = []; t = e.pop(); ) t._dirty && O(t);
    }
    function C(t, e, i) {
        return "string" == typeof e || "number" == typeof e ? void 0 !== t.splitText : "string" == typeof e.nodeName ? !t._componentConstructor && d(t, e.nodeName) : i || t._componentConstructor === e.nodeName;
    }
    function d(t, e) {
        return t.normalizedNodeName === e || t.nodeName.toLowerCase() === e.toLowerCase();
    }
    function N(t) {
        var e = r({}, t.attributes);
        e.children = t.children;
        var i = t.nodeName.defaultProps;
        if (void 0 !== i) for (var o in i) void 0 === e[o] && (e[o] = i[o]);
        return e;
    }
    function y(t, e) {
        var i = e ? document.createElementNS("http://www.w3.org/2000/svg", t) : document.createElement(t);
        return i.normalizedNodeName = t, i;
    }
    function h(t) {
        var e = t.parentNode;
        e && e.removeChild(t);
    }
    function f(t, e, i, o, M) {
        if ("className" === e && (e = "class"), "key" === e) ; else if ("ref" === e) i && i(null), 
        o && o(t); else if ("class" !== e || M) if ("style" === e) {
            if (o && "string" != typeof o && "string" != typeof i || (t.style.cssText = o || ""), 
            o && "object" == typeof o) {
                if ("string" != typeof i) for (var s in i) s in o || (t.style[s] = "");
                for (var s in o) t.style[s] = "number" == typeof o[s] && !1 === l.test(s) ? o[s] + "px" : o[s];
            }
        } else if ("dangerouslySetInnerHTML" === e) o && (t.innerHTML = o.__html || ""); else if ("o" == e[0] && "n" == e[1]) {
            var L = e !== (e = e.replace(/Capture$/, ""));
            e = e.toLowerCase().substring(2), o ? i || t.addEventListener(e, z, L) : t.removeEventListener(e, z, L), 
            (t._listeners || (t._listeners = {}))[e] = o;
        } else if ("list" !== e && "type" !== e && !M && e in t) {
            try {
                t[e] = null == o ? "" : o;
            } catch (t) {}
            null != o && !1 !== o || "spellcheck" == e || t.removeAttribute(e);
        } else {
            var a = M && e !== (e = e.replace(/^xlink:?/, ""));
            null == o || !1 === o ? a ? t.removeAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase()) : t.removeAttribute(e) : "function" != typeof o && (a ? t.setAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase(), o) : t.setAttribute(e, o));
        } else t.className = o || "";
    }
    function z(t) {
        return this._listeners[t.type](M.event && M.event(t) || t);
    }
    var p = [], D = 0, I = !1, g = !1;
    function m() {
        for (var t; t = p.pop(); ) M.afterMount && M.afterMount(t), t.componentDidMount && t.componentDidMount();
    }
    function T(t, e, i, o, M, s) {
        D++ || (I = null != M && void 0 !== M.ownerSVGElement, g = null != t && !("__preactattr_" in t));
        var L = S(t, e, i, o, s);
        return M && L.parentNode !== M && M.appendChild(L), --D || (g = !1, s || m()), L;
    }
    function S(t, e, i, o, M) {
        var s = t, L = I;
        if (null != e && "boolean" != typeof e || (e = ""), "string" == typeof e || "number" == typeof e) return t && void 0 !== t.splitText && t.parentNode && (!t._component || M) ? t.nodeValue != e && (t.nodeValue = e) : (s = document.createTextNode(e), 
        t && (t.parentNode && t.parentNode.replaceChild(s, t), A(t, !0))), s.__preactattr_ = !0, 
        s;
        var a = e.nodeName;
        if ("function" == typeof a) return J(t, e, i, o);
        if (I = "svg" === a || "foreignObject" !== a && I, a = String(a), (!t || !d(t, a)) && (s = y(a, I), 
        t)) {
            for (;t.firstChild; ) s.appendChild(t.firstChild);
            t.parentNode && t.parentNode.replaceChild(s, t), A(t, !0);
        }
        var r = s.firstChild, n = s.__preactattr_, u = e.children;
        if (null == n) {
            n = s.__preactattr_ = {};
            for (var l = s.attributes, c = l.length; c--; ) n[l[c].name] = l[c].value;
        }
        return !g && u && 1 === u.length && "string" == typeof u[0] && null != r && void 0 !== r.splitText && null == r.nextSibling ? r.nodeValue != u[0] && (r.nodeValue = u[0]) : (u && u.length || null != r) && x(s, u, i, o, g || null != n.dangerouslySetInnerHTML), 
        k(s, e.attributes, n), I = L, s;
    }
    function x(t, e, i, o, M) {
        var s, L, a, r, n, u = t.childNodes, l = [], c = {}, j = 0, w = 0, d = u.length, N = 0, y = e ? e.length : 0;
        if (0 !== d) for (var f = 0; f < d; f++) {
            var z = u[f], p = z.__preactattr_;
            null != (D = y && p ? z._component ? z._component.__key : p.key : null) ? (j++, 
            c[D] = z) : (p || (void 0 !== z.splitText ? !M || z.nodeValue.trim() : M)) && (l[N++] = z);
        }
        if (0 !== y) for (f = 0; f < y; f++) {
            var D;
            if (n = null, null != (D = (r = e[f]).key)) j && void 0 !== c[D] && (n = c[D], c[D] = void 0, 
            j--); else if (w < N) for (s = w; s < N; s++) if (void 0 !== l[s] && C(L = l[s], r, M)) {
                n = L, l[s] = void 0, s === N - 1 && N--, s === w && w++;
                break;
            }
            n = S(n, r, i, o), a = u[f], n && n !== t && n !== a && (null == a ? t.appendChild(n) : n === a.nextSibling ? h(a) : t.insertBefore(n, a));
        }
        if (j) for (var f in c) void 0 !== c[f] && A(c[f], !1);
        for (;w <= N; ) void 0 !== (n = l[N--]) && A(n, !1);
    }
    function A(t, e) {
        var i = t._component;
        i ? U(i) : (null != t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), 
        !1 !== e && null != t.__preactattr_ || h(t), v(t));
    }
    function v(t) {
        for (t = t.lastChild; t; ) {
            var e = t.previousSibling;
            A(t, !0), t = e;
        }
    }
    function k(t, e, i) {
        var o;
        for (o in i) e && null != e[o] || null == i[o] || f(t, o, i[o], i[o] = void 0, I);
        for (o in e) "children" === o || "innerHTML" === o || o in i && e[o] === ("value" === o || "checked" === o ? t[o] : i[o]) || f(t, o, i[o], i[o] = e[o], I);
    }
    var Y = [];
    function b(t, e, i) {
        var o, M = Y.length;
        for (t.prototype && t.prototype.render ? (o = new t(e, i), G.call(o, e, i)) : ((o = new G(e, i)).constructor = t, 
        o.render = E); M--; ) if (Y[M].constructor === t) return o.nextBase = Y[M].nextBase, 
        Y.splice(M, 1), o;
        return o;
    }
    function E(t, e, i) {
        return this.constructor(t, i);
    }
    function Q(t, e, i, o, s) {
        t._disable || (t._disable = !0, t.__ref = e.ref, t.__key = e.key, delete e.ref, 
        delete e.key, void 0 === t.constructor.getDerivedStateFromProps && (!t.base || s ? t.componentWillMount && t.componentWillMount() : t.componentWillReceiveProps && t.componentWillReceiveProps(e, o)), 
        o && o !== t.context && (t.prevContext || (t.prevContext = t.context), t.context = o), 
        t.prevProps || (t.prevProps = t.props), t.props = e, t._disable = !1, 0 !== i && (1 !== i && !1 === M.syncComponentUpdates && t.base ? j(t) : O(t, 1, s)), 
        t.__ref && t.__ref(t));
    }
    function O(t, e, i, o) {
        if (!t._disable) {
            var s, L, a, n = t.props, u = t.state, l = t.context, c = t.prevProps || n, j = t.prevState || u, w = t.prevContext || l, C = t.base, d = t.nextBase, y = C || d, h = t._component, f = !1, z = w;
            if (t.constructor.getDerivedStateFromProps && (u = r(r({}, u), t.constructor.getDerivedStateFromProps(n, u)), 
            t.state = u), C && (t.props = c, t.state = j, t.context = w, 2 !== e && t.shouldComponentUpdate && !1 === t.shouldComponentUpdate(n, u, l) ? f = !0 : t.componentWillUpdate && t.componentWillUpdate(n, u, l), 
            t.props = n, t.state = u, t.context = l), t.prevProps = t.prevState = t.prevContext = t.nextBase = null, 
            t._dirty = !1, !f) {
                s = t.render(n, u, l), t.getChildContext && (l = r(r({}, l), t.getChildContext())), 
                C && t.getSnapshotBeforeUpdate && (z = t.getSnapshotBeforeUpdate(c, j));
                var I, g, S = s && s.nodeName;
                if ("function" == typeof S) {
                    var x = N(s);
                    (L = h) && L.constructor === S && x.key == L.__key ? Q(L, x, 1, l, !1) : (I = L, 
                    t._component = L = b(S, x, l), L.nextBase = L.nextBase || d, L._parentComponent = t, 
                    Q(L, x, 0, l, !1), O(L, 1, i, !0)), g = L.base;
                } else a = y, (I = h) && (a = t._component = null), (y || 1 === e) && (a && (a._component = null), 
                g = T(a, s, l, i || !C, y && y.parentNode, !0));
                if (y && g !== y && L !== h) {
                    var v = y.parentNode;
                    v && g !== v && (v.replaceChild(g, y), I || (y._component = null, A(y, !1)));
                }
                if (I && U(I), t.base = g, g && !o) {
                    for (var k = t, Y = t; Y = Y._parentComponent; ) (k = Y).base = g;
                    g._component = k, g._componentConstructor = k.constructor;
                }
            }
            for (!C || i ? p.unshift(t) : f || (t.componentDidUpdate && t.componentDidUpdate(c, j, z), 
            M.afterUpdate && M.afterUpdate(t)); t._renderCallbacks.length; ) t._renderCallbacks.pop().call(t);
            D || o || m();
        }
    }
    function J(t, e, i, o) {
        for (var M = t && t._component, s = M, L = t, a = M && t._componentConstructor === e.nodeName, r = a, n = N(e); M && !r && (M = M._parentComponent); ) r = M.constructor === e.nodeName;
        return M && r && (!o || M._component) ? (Q(M, n, 3, i, o), t = M.base) : (s && !a && (U(s), 
        t = L = null), M = b(e.nodeName, n, i), t && !M.nextBase && (M.nextBase = t, L = null), 
        Q(M, n, 1, i, o), t = M.base, L && t !== L && (L._component = null, A(L, !1))), 
        t;
    }
    function U(t) {
        M.beforeUnmount && M.beforeUnmount(t);
        var e = t.base;
        t._disable = !0, t.componentWillUnmount && t.componentWillUnmount(), t.base = null;
        var i = t._component;
        i ? U(i) : e && (e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), 
        t.nextBase = e, h(e), Y.push(t), v(e)), t.__ref && t.__ref(null);
    }
    function G(t, e) {
        this._dirty = !0, this.context = e, this.props = t, this.state = this.state || {}, 
        this._renderCallbacks = [];
    }
    function _(t, e, i) {
        return T(i, t, {}, !1, e, !1);
    }
    r(G.prototype, {
        setState: function(t, e) {
            this.prevState || (this.prevState = this.state), this.state = r(r({}, this.state), "function" == typeof t ? t(this.state, this.props) : t), 
            e && this._renderCallbacks.push(e), j(this);
        },
        forceUpdate: function(t) {
            t && this._renderCallbacks.push(t), O(this, 2);
        },
        render: function() {}
    });
    var P = {
        h: a,
        createElement: a,
        cloneElement: u,
        Component: G,
        render: _,
        rerender: w,
        options: M
    };
    e.default = P;
}, function(t, e, i) {
    "use strict";
    i.d(e, "c", function() {
        return N;
    }), i.d(e, "b", function() {
        return Dt;
    }), i.d(e, "a", function() {
        return Ot;
    });
    var o = i(16), M = i.n(o), s = i(5), L = i.n(s), a = i(6), r = i.n(a), n = i(3), u = i.n(n), l = i(2), c = i(8), j = i.n(c), w = i(7), C = i.n(w), d = {
        locale: "en",
        pluralRuleFunction: function(t, e) {
            var i = String(t).split("."), o = !i[1], M = Number(i[0]) == t, s = M && i[0].slice(-1), L = M && i[0].slice(-2);
            return e ? 1 == s && 11 != L ? "one" : 2 == s && 12 != L ? "two" : 3 == s && 13 != L ? "few" : "other" : 1 == t && o ? "one" : "other";
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
    function N() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        (Array.isArray(t) ? t : [ t ]).forEach(function(t) {
            t && t.locale && (L.a.__addLocaleData(t), r.a.__addLocaleData(t));
        });
    }
    function y(t) {
        for (var e = (t || "").split("-"); e.length > 0; ) {
            if (h(e.join("-"))) return !0;
            e.pop();
        }
        return !1;
    }
    function h(t) {
        var e = t && t.toLowerCase();
        return !(!L.a.__localeData__[e] || !r.a.__localeData__[e]);
    }
    var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, z = function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }, p = function() {
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        return function(e, i, o) {
            return i && t(e.prototype, i), o && t(e, o), e;
        };
    }(), D = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
        }
        return t;
    }, I = function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }, g = function(t, e) {
        var i = {};
        for (var o in t) e.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(t, o) && (i[o] = t[o]);
        return i;
    }, m = function(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
    }, T = function(t) {
        if (Array.isArray(t)) {
            for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
            return i;
        }
        return Array.from(t);
    }, S = u.a.bool, x = u.a.number, A = u.a.string, v = u.a.func, k = u.a.object, Y = u.a.oneOf, b = u.a.shape, E = u.a.any, Q = u.a.oneOfType, O = Y([ "best fit", "lookup" ]), J = Y([ "narrow", "short", "long" ]), U = Y([ "numeric", "2-digit" ]), G = v.isRequired, _ = {
        locale: A,
        formats: k,
        messages: k,
        textComponent: E,
        defaultLocale: A,
        defaultFormats: k
    }, P = {
        formatDate: G,
        formatTime: G,
        formatRelative: G,
        formatNumber: G,
        formatPlural: G,
        formatMessage: G,
        formatHTMLMessage: G
    }, B = b(D({}, _, P, {
        formatters: k,
        now: G
    })), W = (A.isRequired, Q([ A, k ]), {
        localeMatcher: O,
        formatMatcher: Y([ "basic", "best fit" ]),
        timeZone: A,
        hour12: S,
        weekday: J,
        era: J,
        year: U,
        month: Y([ "numeric", "2-digit", "narrow", "short", "long" ]),
        day: U,
        hour: U,
        minute: U,
        second: U,
        timeZoneName: Y([ "short", "long" ])
    }), X = {
        localeMatcher: O,
        style: Y([ "decimal", "currency", "percent" ]),
        currency: A,
        currencyDisplay: Y([ "symbol", "code", "name" ]),
        useGrouping: S,
        minimumIntegerDigits: x,
        minimumFractionDigits: x,
        maximumFractionDigits: x,
        minimumSignificantDigits: x,
        maximumSignificantDigits: x
    }, F = {
        style: Y([ "best fit", "numeric" ]),
        units: Y([ "second", "minute", "hour", "day", "month", "year" ])
    }, V = {
        style: Y([ "cardinal", "ordinal" ])
    }, H = Object.keys(_), Z = {
        "&": "&amp;",
        ">": "&gt;",
        "<": "&lt;",
        '"': "&quot;",
        "'": "&#x27;"
    }, q = /[&><"']/g;
    function K(t) {
        return ("" + t).replace(q, function(t) {
            return Z[t];
        });
    }
    function R(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return e.reduce(function(e, o) {
            return t.hasOwnProperty(o) ? e[o] = t[o] : i.hasOwnProperty(o) && (e[o] = i[o]), 
            e;
        }, {});
    }
    function $() {
        var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).intl;
        j()(t, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
    }
    function tt(t, e) {
        if (t === e) return !0;
        if ("object" !== (void 0 === t ? "undefined" : f(t)) || null === t || "object" !== (void 0 === e ? "undefined" : f(e)) || null === e) return !1;
        var i = Object.keys(t), o = Object.keys(e);
        if (i.length !== o.length) return !1;
        for (var M = Object.prototype.hasOwnProperty.bind(e), s = 0; s < i.length; s++) if (!M(i[s]) || t[i[s]] !== e[i[s]]) return !1;
        return !0;
    }
    function et(t, e, i) {
        var o = t.props, M = t.state, s = t.context, L = void 0 === s ? {} : s, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, r = L.intl, n = void 0 === r ? {} : r, u = a.intl, l = void 0 === u ? {} : u;
        return !tt(e, o) || !tt(i, M) || !(l === n || tt(R(l, H), R(n, H)));
    }
    function it(t) {
        return L.a.prototype._resolveLocale(t);
    }
    function ot(t) {
        return L.a.prototype._findPluralRuleFunction(t);
    }
    var Mt = function t(e) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        z(this, t);
        var o = "ordinal" === i.style, M = ot(it(e));
        this.format = function(t) {
            return M(t, o);
        };
    }, st = Object.keys(W), Lt = Object.keys(X), at = Object.keys(F), rt = Object.keys(V), nt = {
        second: 60,
        minute: 60,
        hour: 24,
        day: 30,
        month: 12
    };
    function ut(t) {
        var e = r.a.thresholds;
        e.second = t.second, e.minute = t.minute, e.hour = t.hour, e.day = t.day, e.month = t.month;
    }
    function lt(t, e, i) {
        var o = t && t[e] && t[e][i];
        if (o) return o;
    }
    function ct(t, e, i) {
        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, M = t.locale, s = t.formats, L = o.format, a = new Date(i), r = L && lt(s, "date", L), n = R(o, st, r);
        try {
            return e.getDateTimeFormat(M, n).format(a);
        } catch (t) {
            0;
        }
        return String(a);
    }
    function jt(t, e, i) {
        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, M = t.locale, s = t.formats, L = o.format, a = new Date(i), r = L && lt(s, "time", L), n = R(o, st, r);
        n.hour || n.minute || n.second || (n = D({}, n, {
            hour: "numeric",
            minute: "numeric"
        }));
        try {
            return e.getDateTimeFormat(M, n).format(a);
        } catch (t) {
            0;
        }
        return String(a);
    }
    function wt(t, e, i) {
        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, M = t.locale, s = t.formats, L = o.format, a = new Date(i), n = new Date(o.now), u = L && lt(s, "relative", L), l = R(o, at, u), c = D({}, r.a.thresholds);
        ut(nt);
        try {
            return e.getRelativeFormat(M, l).format(a, {
                now: isFinite(n) ? n : e.now()
            });
        } catch (t) {
            0;
        } finally {
            ut(c);
        }
        return String(a);
    }
    function Ct(t, e, i) {
        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, M = t.locale, s = t.formats, L = o.format, a = L && lt(s, "number", L), r = R(o, Lt, a);
        try {
            return e.getNumberFormat(M, r).format(i);
        } catch (t) {
            0;
        }
        return String(i);
    }
    function dt(t, e, i) {
        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, M = t.locale, s = R(o, rt);
        try {
            return e.getPluralFormat(M, s).format(i);
        } catch (t) {
            0;
        }
        return "other";
    }
    function Nt(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, M = t.locale, s = t.formats, L = t.messages, a = t.defaultLocale, r = t.defaultFormats, n = i.id, u = i.defaultMessage;
        j()(n, "[React Intl] An `id` must be provided to format a message.");
        var l = L && L[n];
        if (!(Object.keys(o).length > 0)) return l || u || n;
        var c = void 0;
        if (l) try {
            c = e.getMessageFormat(l, M, s).format(o);
        } catch (t) {
            0;
        } else 0;
        if (!c && u) try {
            c = e.getMessageFormat(u, a, r).format(o);
        } catch (t) {
            0;
        }
        return c || l || u || n;
    }
    function yt(t, e, i) {
        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return Nt(t, e, i, Object.keys(o).reduce(function(t, e) {
            var i = o[e];
            return t[e] = "string" == typeof i ? K(i) : i, t;
        }, {}));
    }
    var ht = Object.freeze({
        formatDate: ct,
        formatTime: jt,
        formatRelative: wt,
        formatNumber: Ct,
        formatPlural: dt,
        formatMessage: Nt,
        formatHTMLMessage: yt
    }), ft = Object.keys(_), zt = Object.keys(P), pt = {
        formats: {},
        messages: {},
        textComponent: "span",
        defaultLocale: "en",
        defaultFormats: {}
    }, Dt = function(t) {
        function e(t) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            z(this, e);
            var o = m(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
            j()("undefined" != typeof Intl, "[React Intl] The `Intl` APIs must be available in the runtime, and do not appear to be built-in. An `Intl` polyfill should be loaded.\nSee: http://formatjs.io/guides/runtime-environments/");
            var M = i.intl, s = void 0;
            s = isFinite(t.initialNow) ? Number(t.initialNow) : M ? M.now() : Date.now();
            var a = (M || {}).formatters, n = void 0 === a ? {
                getDateTimeFormat: C()(Intl.DateTimeFormat),
                getNumberFormat: C()(Intl.NumberFormat),
                getMessageFormat: C()(L.a),
                getRelativeFormat: C()(r.a),
                getPluralFormat: C()(Mt)
            } : a;
            return o.state = D({}, n, {
                now: function() {
                    return o._didDisplay ? Date.now() : s;
                }
            }), o;
        }
        return I(e, t), p(e, [ {
            key: "getConfig",
            value: function() {
                var t = this.context.intl, e = R(this.props, ft, t);
                for (var i in pt) void 0 === e[i] && (e[i] = pt[i]);
                if (!y(e.locale)) {
                    var o = e, M = (o.locale, o.defaultLocale), s = o.defaultFormats;
                    0, e = D({}, e, {
                        locale: M,
                        formats: s,
                        messages: pt.messages
                    });
                }
                return e;
            }
        }, {
            key: "getBoundFormatFns",
            value: function(t, e) {
                return zt.reduce(function(i, o) {
                    return i[o] = ht[o].bind(null, t, e), i;
                }, {});
            }
        }, {
            key: "getChildContext",
            value: function() {
                var t = this.getConfig(), e = this.getBoundFormatFns(t, this.state), i = this.state, o = i.now, M = g(i, [ "now" ]);
                return {
                    intl: D({}, t, e, {
                        formatters: M,
                        now: o
                    })
                };
            }
        }, {
            key: "shouldComponentUpdate",
            value: function() {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return et.apply(void 0, [ this ].concat(e));
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this._didDisplay = !0;
            }
        }, {
            key: "render",
            value: function() {
                return l.a.only(this.props.children);
            }
        } ]), e;
    }(l.b);
    Dt.displayName = "IntlProvider", Dt.contextTypes = {
        intl: B
    }, Dt.childContextTypes = {
        intl: B.isRequired
    };
    var It = function(t) {
        function e(t, i) {
            z(this, e);
            var o = m(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
            return $(i), o;
        }
        return I(e, t), p(e, [ {
            key: "shouldComponentUpdate",
            value: function() {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return et.apply(void 0, [ this ].concat(e));
            }
        }, {
            key: "render",
            value: function() {
                var t = this.context.intl, e = t.formatDate, i = t.textComponent, o = this.props, M = o.value, s = o.children, L = e(M, this.props);
                return "function" == typeof s ? s(L) : l.d.createElement(i, null, L);
            }
        } ]), e;
    }(l.b);
    It.displayName = "FormattedDate", It.contextTypes = {
        intl: B
    };
    var gt = function(t) {
        function e(t, i) {
            z(this, e);
            var o = m(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
            return $(i), o;
        }
        return I(e, t), p(e, [ {
            key: "shouldComponentUpdate",
            value: function() {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return et.apply(void 0, [ this ].concat(e));
            }
        }, {
            key: "render",
            value: function() {
                var t = this.context.intl, e = t.formatTime, i = t.textComponent, o = this.props, M = o.value, s = o.children, L = e(M, this.props);
                return "function" == typeof s ? s(L) : l.d.createElement(i, null, L);
            }
        } ]), e;
    }(l.b);
    gt.displayName = "FormattedTime", gt.contextTypes = {
        intl: B
    };
    var mt = 1e3, Tt = 6e4, St = 36e5, xt = 864e5, At = 2147483647;
    function vt(t) {
        var e = Math.abs(t);
        return e < Tt ? "second" : e < St ? "minute" : e < xt ? "hour" : "day";
    }
    function kt(t) {
        switch (t) {
          case "second":
            return mt;

          case "minute":
            return Tt;

          case "hour":
            return St;

          case "day":
            return xt;

          default:
            return At;
        }
    }
    function Yt(t, e) {
        if (t === e) return !0;
        var i = new Date(t).getTime(), o = new Date(e).getTime();
        return isFinite(i) && isFinite(o) && i === o;
    }
    var bt = function(t) {
        function e(t, i) {
            z(this, e);
            var o = m(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
            $(i);
            var M = isFinite(t.initialNow) ? Number(t.initialNow) : i.intl.now();
            return o.state = {
                now: M
            }, o;
        }
        return I(e, t), p(e, [ {
            key: "scheduleNextUpdate",
            value: function(t, e) {
                var i = this;
                clearTimeout(this._timer);
                var o = t.value, M = t.units, s = t.updateInterval, L = new Date(o).getTime();
                if (s && isFinite(L)) {
                    var a = L - e.now, r = kt(M || vt(a)), n = Math.abs(a % r), u = a < 0 ? Math.max(s, r - n) : Math.max(s, n);
                    this._timer = setTimeout(function() {
                        i.setState({
                            now: i.context.intl.now()
                        });
                    }, u);
                }
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.scheduleNextUpdate(this.props, this.state);
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(t) {
                Yt(t.value, this.props.value) || this.setState({
                    now: this.context.intl.now()
                });
            }
        }, {
            key: "shouldComponentUpdate",
            value: function() {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return et.apply(void 0, [ this ].concat(e));
            }
        }, {
            key: "componentWillUpdate",
            value: function(t, e) {
                this.scheduleNextUpdate(t, e);
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                clearTimeout(this._timer);
            }
        }, {
            key: "render",
            value: function() {
                var t = this.context.intl, e = t.formatRelative, i = t.textComponent, o = this.props, M = o.value, s = o.children, L = e(M, D({}, this.props, this.state));
                return "function" == typeof s ? s(L) : l.d.createElement(i, null, L);
            }
        } ]), e;
    }(l.b);
    bt.displayName = "FormattedRelative", bt.contextTypes = {
        intl: B
    }, bt.defaultProps = {
        updateInterval: 1e4
    };
    var Et = function(t) {
        function e(t, i) {
            z(this, e);
            var o = m(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
            return $(i), o;
        }
        return I(e, t), p(e, [ {
            key: "shouldComponentUpdate",
            value: function() {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return et.apply(void 0, [ this ].concat(e));
            }
        }, {
            key: "render",
            value: function() {
                var t = this.context.intl, e = t.formatNumber, i = t.textComponent, o = this.props, M = o.value, s = o.children, L = e(M, this.props);
                return "function" == typeof s ? s(L) : l.d.createElement(i, null, L);
            }
        } ]), e;
    }(l.b);
    Et.displayName = "FormattedNumber", Et.contextTypes = {
        intl: B
    };
    var Qt = function(t) {
        function e(t, i) {
            z(this, e);
            var o = m(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
            return $(i), o;
        }
        return I(e, t), p(e, [ {
            key: "shouldComponentUpdate",
            value: function() {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return et.apply(void 0, [ this ].concat(e));
            }
        }, {
            key: "render",
            value: function() {
                var t = this.context.intl, e = t.formatPlural, i = t.textComponent, o = this.props, M = o.value, s = o.other, L = o.children, a = e(M, this.props), r = this.props[a] || s;
                return "function" == typeof L ? L(r) : l.d.createElement(i, null, r);
            }
        } ]), e;
    }(l.b);
    Qt.displayName = "FormattedPlural", Qt.contextTypes = {
        intl: B
    }, Qt.defaultProps = {
        style: "cardinal"
    };
    var Ot = function(t) {
        function e(t, i) {
            z(this, e);
            var o = m(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
            return $(i), o;
        }
        return I(e, t), p(e, [ {
            key: "shouldComponentUpdate",
            value: function(t) {
                var e = this.props.values;
                if (!tt(t.values, e)) return !0;
                for (var i = D({}, t, {
                    values: e
                }), o = arguments.length, M = Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++) M[s - 1] = arguments[s];
                return et.apply(void 0, [ this, i ].concat(M));
            }
        }, {
            key: "render",
            value: function() {
                var t, e = this.context.intl, i = e.formatMessage, o = e.textComponent, M = this.props, s = M.id, L = M.description, a = M.defaultMessage, r = M.values, n = M.tagName, u = void 0 === n ? o : n, c = M.children, j = void 0, w = void 0, C = void 0;
                if (r && Object.keys(r).length > 0) {
                    var d = Math.floor(1099511627776 * Math.random()).toString(16), N = (t = 0, function() {
                        return "ELEMENT-" + d + "-" + (t += 1);
                    });
                    j = "@__" + d + "__@", w = {}, C = {}, Object.keys(r).forEach(function(t) {
                        var e = r[t];
                        if (Object(l.e)(e)) {
                            var i = N();
                            w[t] = j + i + j, C[i] = e;
                        } else w[t] = e;
                    });
                }
                var y = i({
                    id: s,
                    description: L,
                    defaultMessage: a
                }, w || r), h = void 0;
                return h = C && Object.keys(C).length > 0 ? y.split(j).filter(function(t) {
                    return !!t;
                }).map(function(t) {
                    return C[t] || t;
                }) : [ y ], "function" == typeof c ? c.apply(void 0, T(h)) : l.c.apply(void 0, [ u, null ].concat(T(h)));
            }
        } ]), e;
    }(l.b);
    Ot.displayName = "FormattedMessage", Ot.contextTypes = {
        intl: B
    }, Ot.defaultProps = {
        values: {}
    };
    var Jt = function(t) {
        function e(t, i) {
            z(this, e);
            var o = m(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
            return $(i), o;
        }
        return I(e, t), p(e, [ {
            key: "shouldComponentUpdate",
            value: function(t) {
                var e = this.props.values;
                if (!tt(t.values, e)) return !0;
                for (var i = D({}, t, {
                    values: e
                }), o = arguments.length, M = Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++) M[s - 1] = arguments[s];
                return et.apply(void 0, [ this, i ].concat(M));
            }
        }, {
            key: "render",
            value: function() {
                var t = this.context.intl, e = t.formatHTMLMessage, i = t.textComponent, o = this.props, M = o.id, s = o.description, L = o.defaultMessage, a = o.values, r = o.tagName, n = void 0 === r ? i : r, u = o.children, c = e({
                    id: M,
                    description: s,
                    defaultMessage: L
                }, a);
                if ("function" == typeof u) return u(c);
                var j = {
                    __html: c
                };
                return l.d.createElement(n, {
                    dangerouslySetInnerHTML: j
                });
            }
        } ]), e;
    }(l.b);
    Jt.displayName = "FormattedHTMLMessage", Jt.contextTypes = {
        intl: B
    }, Jt.defaultProps = {
        values: {}
    }, N(d), N(M.a);
}, function(t, e, i) {
    "use strict";
    (function(t) {
        i.d(e, "a", function() {
            return m;
        }), i.d(e, "c", function() {
            return b;
        }), i.d(e, "e", function() {
            return O;
        }), i.d(e, "b", function() {
            return it;
        });
        var o = i(3), M = i.n(o), s = i(0), L = "15.1.0", a = "a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" "), r = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, n = "undefined" != typeof Symbol ? Symbol.for("__preactCompatWrapper") : "__preactCompatWrapper", u = {
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
        }, l = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/, c = {}, j = void 0 === t || !Object({
            BASE_URL: "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc",
            VERSION: "17.0.0"
        }) || !1;
        function w() {
            return null;
        }
        var C = Object(s.h)("a", null).constructor;
        C.prototype.$$typeof = r, C.prototype.preactCompatUpgraded = !1, C.prototype.preactCompatNormalized = !1, 
        Object.defineProperty(C.prototype, "type", {
            get: function() {
                return this.nodeName;
            },
            set: function(t) {
                this.nodeName = t;
            },
            configurable: !0
        }), Object.defineProperty(C.prototype, "props", {
            get: function() {
                return this.attributes;
            },
            set: function(t) {
                this.attributes = t;
            },
            configurable: !0
        });
        var d = s.options.event;
        s.options.event = function(t) {
            return d && (t = d(t)), t.persist = Object, t.nativeEvent = t, t;
        };
        var N = s.options.vnode;
        function y(t) {
            var e = t.nodeName, i = t.attributes;
            t.attributes = {}, e.defaultProps && P(t.attributes, e.defaultProps), i && P(t.attributes, i);
        }
        function h(t, e) {
            var i, o, M;
            if (e) {
                for (M in e) if (i = l.test(M)) break;
                if (i) for (M in o = t.attributes = {}, e) e.hasOwnProperty(M) && (o[l.test(M) ? M.replace(/([A-Z0-9])/, "-$1").toLowerCase() : M] = e[M]);
            }
        }
        function f(t, e, i) {
            var o = e && e._preactCompatRendered && e._preactCompatRendered.base;
            o && o.parentNode !== e && (o = null), !o && e && (o = e.firstElementChild);
            for (var M = e.childNodes.length; M--; ) e.childNodes[M] !== o && e.removeChild(e.childNodes[M]);
            var L = Object(s.render)(t, e, o);
            return e && (e._preactCompatRendered = L && (L._component || {
                base: L
            })), "function" == typeof i && i(), L && L._component || L;
        }
        s.options.vnode = function(t) {
            if (!t.preactCompatUpgraded) {
                t.preactCompatUpgraded = !0;
                var e = t.nodeName, i = t.attributes = P({}, t.attributes);
                "function" == typeof e ? (!0 === e[n] || e.prototype && "isReactComponent" in e.prototype) && (t.children && "" === String(t.children) && (t.children = void 0), 
                t.children && (i.children = t.children), t.preactCompatNormalized || E(t), y(t)) : (t.children && "" === String(t.children) && (t.children = void 0), 
                t.children && (i.children = t.children), i.defaultValue && (i.value || 0 === i.value || (i.value = i.defaultValue), 
                delete i.defaultValue), h(t, i));
            }
            N && N(t);
        };
        var z = function() {};
        function p(t, e, i, o) {
            var M = f(Object(s.h)(z, {
                context: t.context
            }, e), i), L = M._component || M.base;
            return o && o.call(L, M), L;
        }
        function D(t) {
            var e = t._preactCompatRendered && t._preactCompatRendered.base;
            return !(!e || e.parentNode !== t) && (Object(s.render)(Object(s.h)(w), t, e), !0);
        }
        z.prototype.getChildContext = function() {
            return this.props.context;
        }, z.prototype.render = function(t) {
            return t.children[0];
        };
        var I, g = [], m = {
            map: function(t, e, i) {
                return null == t ? null : (t = m.toArray(t), i && i !== t && (e = e.bind(i)), t.map(e));
            },
            forEach: function(t, e, i) {
                if (null == t) return null;
                t = m.toArray(t), i && i !== t && (e = e.bind(i)), t.forEach(e);
            },
            count: function(t) {
                return t && t.length || 0;
            },
            only: function(t) {
                if (1 !== (t = m.toArray(t)).length) throw new Error("Children.only() expects only one child.");
                return t[0];
            },
            toArray: function(t) {
                return null == t ? [] : g.concat(t);
            }
        };
        function T(t) {
            return b.bind(null, t);
        }
        for (var S = {}, x = a.length; x--; ) S[a[x]] = T(a[x]);
        function A(t, e) {
            for (var i = e || 0; i < t.length; i++) {
                var o = t[i];
                Array.isArray(o) ? A(o) : o && "object" == typeof o && !O(o) && (o.props && o.type || o.attributes && o.nodeName || o.children) && (t[i] = b(o.type || o.nodeName, o.props || o.attributes, o.children));
            }
        }
        function v(t) {
            return "function" == typeof t && !(t.prototype && t.prototype.render);
        }
        function k(t) {
            return F({
                displayName: t.displayName || t.name,
                render: function() {
                    return t(this.props, this.context);
                }
            });
        }
        function Y(t) {
            var e = t[n];
            return e ? !0 === e ? t : e : (e = k(t), Object.defineProperty(e, n, {
                configurable: !0,
                value: !0
            }), e.displayName = t.displayName, e.propTypes = t.propTypes, e.defaultProps = t.defaultProps, 
            Object.defineProperty(t, n, {
                configurable: !0,
                value: e
            }), e);
        }
        function b() {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
            return A(t, 2), E(s.h.apply(void 0, t));
        }
        function E(t) {
            t.preactCompatNormalized = !0, G(t), v(t.nodeName) && (t.nodeName = Y(t.nodeName));
            var e = t.attributes.ref, i = e && typeof e;
            return !I || "string" !== i && "number" !== i || (t.attributes.ref = J(e, I)), U(t), 
            t;
        }
        function Q(t, e) {
            for (var i = [], o = arguments.length - 2; o-- > 0; ) i[o] = arguments[o + 2];
            if (!O(t)) return t;
            var M = t.attributes || t.props, L = [ Object(s.h)(t.nodeName || t.type, M, t.children || M && M.children), e ];
            return i && i.length ? L.push(i) : e && e.children && L.push(e.children), E(s.cloneElement.apply(void 0, L));
        }
        function O(t) {
            return t && (t instanceof C || t.$$typeof === r);
        }
        function J(t, e) {
            return e._refProxies[t] || (e._refProxies[t] = function(i) {
                e && e.refs && (e.refs[t] = i, null === i && (delete e._refProxies[t], e = null));
            });
        }
        function U(t) {
            var e = t.nodeName, i = t.attributes;
            if (i && "string" == typeof e) {
                var o = {};
                for (var M in i) o[M.toLowerCase()] = M;
                if (o.ondoubleclick && (i.ondblclick = i[o.ondoubleclick], delete i[o.ondoubleclick]), 
                o.onchange && ("textarea" === e || "input" === e.toLowerCase() && !/^fil|che|rad/i.test(i.type))) {
                    var s = o.oninput || "oninput";
                    i[s] || (i[s] = K([ i[s], i[o.onchange] ]), delete i[o.onchange]);
                }
            }
        }
        function G(t) {
            var e = t.attributes || (t.attributes = {});
            _.enumerable = "className" in e, e.className && (e.class = e.className), Object.defineProperty(e, "className", _);
        }
        var _ = {
            configurable: !0,
            get: function() {
                return this.class;
            },
            set: function(t) {
                this.class = t;
            }
        };
        function P(t, e) {
            for (var i = arguments, o = 1, M = void 0; o < arguments.length; o++) if (M = i[o]) for (var s in M) M.hasOwnProperty(s) && (t[s] = M[s]);
            return t;
        }
        function B(t, e) {
            for (var i in t) if (!(i in e)) return !0;
            for (var o in e) if (t[o] !== e[o]) return !0;
            return !1;
        }
        function W(t) {
            return t && t.base || t;
        }
        function X() {}
        function F(t) {
            function e(t, e) {
                Z(this), it.call(this, t, e, c), R.call(this, t, e);
            }
            return (t = P({
                constructor: e
            }, t)).mixins && H(t, V(t.mixins)), t.statics && P(e, t.statics), t.propTypes && (e.propTypes = t.propTypes), 
            t.defaultProps && (e.defaultProps = t.defaultProps), t.getDefaultProps && (e.defaultProps = t.getDefaultProps()), 
            X.prototype = it.prototype, e.prototype = P(new X(), t), e.displayName = t.displayName || "Component", 
            e;
        }
        function V(t) {
            for (var e = {}, i = 0; i < t.length; i++) {
                var o = t[i];
                for (var M in o) o.hasOwnProperty(M) && "function" == typeof o[M] && (e[M] || (e[M] = [])).push(o[M]);
            }
            return e;
        }
        function H(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = K(e[i].concat(t[i] || g), "getDefaultProps" === i || "getInitialState" === i || "getChildContext" === i));
        }
        function Z(t) {
            for (var e in t) {
                var i = t[e];
                "function" != typeof i || i.__bound || u.hasOwnProperty(e) || ((t[e] = i.bind(t)).__bound = !0);
            }
        }
        function q(t, e, i) {
            if ("string" == typeof e && (e = t.constructor.prototype[e]), "function" == typeof e) return e.apply(t, i);
        }
        function K(t, e) {
            return function() {
                for (var i, o = arguments, M = this, s = 0; s < t.length; s++) {
                    var L = q(M, t[s], o);
                    if (e && null != L) for (var a in i || (i = {}), L) L.hasOwnProperty(a) && (i[a] = L[a]); else void 0 !== L && (i = L);
                }
                return i;
            };
        }
        function R(t, e) {
            $.call(this, t, e), this.componentWillReceiveProps = K([ $, this.componentWillReceiveProps || "componentWillReceiveProps" ]), 
            this.render = K([ $, tt, this.render || "render", et ]);
        }
        function $(t, e) {
            if (t) {
                var i = t.children;
                if (i && Array.isArray(i) && 1 === i.length && ("string" == typeof i[0] || "function" == typeof i[0] || i[0] instanceof C) && (t.children = i[0], 
                t.children && "object" == typeof t.children && (t.children.length = 1, t.children[0] = t.children)), 
                j) {
                    var o = "function" == typeof this ? this : this.constructor, s = this.propTypes || o.propTypes, L = this.displayName || o.name;
                    s && M.a.checkPropTypes(s, t, "prop", L);
                }
            }
        }
        function tt(t) {
            I = this;
        }
        function et() {
            I === this && (I = null);
        }
        function it(t, e, i) {
            s.Component.call(this, t, e), this.state = this.getInitialState ? this.getInitialState() : {}, 
            this.refs = {}, this._refProxies = {}, i !== c && R.call(this, t, e);
        }
        function ot(t, e) {
            it.call(this, t, e);
        }
        P(it.prototype = new s.Component(), {
            constructor: it,
            isReactComponent: {},
            replaceState: function(t, e) {
                var i = this;
                for (var o in this.setState(t, e), i.state) o in t || delete i.state[o];
            },
            getDOMNode: function() {
                return this.base;
            },
            isMounted: function() {
                return !!this.base;
            }
        }), X.prototype = it.prototype, ot.prototype = new X(), ot.prototype.isPureReactComponent = !0, 
        ot.prototype.shouldComponentUpdate = function(t, e) {
            return B(this.props, t) || B(this.state, e);
        };
        var Mt = {
            version: L,
            DOM: S,
            PropTypes: M.a,
            Children: m,
            render: f,
            createClass: F,
            createFactory: T,
            createElement: b,
            cloneElement: Q,
            isValidElement: O,
            findDOMNode: W,
            unmountComponentAtNode: D,
            Component: it,
            PureComponent: ot,
            unstable_renderSubtreeIntoContainer: p,
            __spread: P
        };
        e.d = Mt;
    }).call(this, i(40));
}, function(t, e, i) {
    t.exports = i(38)();
}, function(t) {
    t.exports = {
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
}, function(t, e, i) {
    "use strict";
    var o = i(24).default;
    i(31), (e = t.exports = o).default = e;
}, function(t, e, i) {
    "use strict";
    var o = i(32).default;
    i(37), (e = t.exports = o).default = e;
}, function(t, e, i) {
    "use strict";
    (e = t.exports = i(41).default).default = e;
}, function(t, e, i) {
    "use strict";
    var o = function(t, e, i, o, M, s, L, a) {
        if (!t) {
            var r;
            if (void 0 === e) r = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                var n = [ i, o, M, s, L, a ], u = 0;
                (r = new Error(e.replace(/%s/g, function() {
                    return n[u++];
                }))).name = "Invariant Violation";
            }
            throw r.framesToPop = 1, r;
        }
    };
    t.exports = o;
}, function(t, e) {
    function i(t, e) {
        var i = t[1] || "", M = t[3];
        if (!M) return i;
        if (e && "function" == typeof btoa) {
            var s = o(M), L = M.sources.map(function(t) {
                return "/*# sourceURL=" + M.sourceRoot + t + " */";
            });
            return [ i ].concat(L).concat([ s ]).join("\n");
        }
        return [ i ].join("\n");
    }
    function o(t) {
        return "/*# " + ("sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t))))) + " */";
    }
    t.exports = function(t) {
        var e = [];
        return e.toString = function() {
            return this.map(function(e) {
                var o = i(e, t);
                return e[2] ? "@media " + e[2] + "{" + o + "}" : o;
            }).join("");
        }, e.i = function(t, i) {
            "string" == typeof t && (t = [ [ null, t, "" ] ]);
            for (var o = {}, M = 0; M < this.length; M++) {
                var s = this[M][0];
                "number" == typeof s && (o[s] = !0);
            }
            for (M = 0; M < t.length; M++) {
                var L = t[M];
                "number" == typeof L[0] && o[L[0]] || (i && !L[2] ? L[2] = i : i && (L[2] = "(" + L[2] + ") and (" + i + ")"), 
                e.push(L));
            }
        }, e;
    };
}, function(t, e, i) {
    var o, M = {}, s = function(t) {
        var e;
        return function() {
            return void 0 === e && (e = t.apply(this, arguments)), e;
        };
    }(function() {
        return window && document && document.all && !window.atob;
    }), L = function(t) {
        return document.querySelector(t);
    }, a = (o = {}, function(t) {
        if ("function" == typeof t) return t();
        if (void 0 === o[t]) {
            var e = L.call(this, t);
            if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) try {
                e = e.contentDocument.head;
            } catch (t) {
                e = null;
            }
            o[t] = e;
        }
        return o[t];
    }), r = null, n = 0, u = [], l = i(14);
    function c(t, e) {
        for (var i = 0; i < t.length; i++) {
            var o = t[i], s = M[o.id];
            if (s) {
                s.refs++;
                for (var L = 0; L < s.parts.length; L++) s.parts[L](o.parts[L]);
                for (;L < o.parts.length; L++) s.parts.push(h(o.parts[L], e));
            } else {
                var a = [];
                for (L = 0; L < o.parts.length; L++) a.push(h(o.parts[L], e));
                M[o.id] = {
                    id: o.id,
                    refs: 1,
                    parts: a
                };
            }
        }
    }
    function j(t, e) {
        for (var i = [], o = {}, M = 0; M < t.length; M++) {
            var s = t[M], L = e.base ? s[0] + e.base : s[0], a = {
                css: s[1],
                media: s[2],
                sourceMap: s[3]
            };
            o[L] ? o[L].parts.push(a) : i.push(o[L] = {
                id: L,
                parts: [ a ]
            });
        }
        return i;
    }
    function w(t, e) {
        var i = a(t.insertInto);
        if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var o = u[u.length - 1];
        if ("top" === t.insertAt) o ? o.nextSibling ? i.insertBefore(e, o.nextSibling) : i.appendChild(e) : i.insertBefore(e, i.firstChild), 
        u.push(e); else if ("bottom" === t.insertAt) i.appendChild(e); else {
            if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var M = a(t.insertInto + " " + t.insertAt.before);
            i.insertBefore(e, M);
        }
    }
    function C(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = u.indexOf(t);
        e >= 0 && u.splice(e, 1);
    }
    function d(t) {
        var e = document.createElement("style");
        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), y(e, t.attrs), w(t, e), 
        e;
    }
    function N(t) {
        var e = document.createElement("link");
        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", 
        y(e, t.attrs), w(t, e), e;
    }
    function y(t, e) {
        Object.keys(e).forEach(function(i) {
            t.setAttribute(i, e[i]);
        });
    }
    function h(t, e) {
        var i, o, M, s;
        if (e.transform && t.css) {
            if (!(s = e.transform(t.css))) return function() {};
            t.css = s;
        }
        if (e.singleton) {
            var L = n++;
            i = r || (r = d(e)), o = p.bind(null, i, L, !1), M = p.bind(null, i, L, !0);
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = N(e), 
        o = I.bind(null, i, e), M = function() {
            C(i), i.href && URL.revokeObjectURL(i.href);
        }) : (i = d(e), o = D.bind(null, i), M = function() {
            C(i);
        });
        return o(t), function(e) {
            if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                o(t = e);
            } else M();
        };
    }
    t.exports = function(t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = s()), 
        e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var i = j(t, e);
        return c(i, e), function(t) {
            for (var o = [], s = 0; s < i.length; s++) {
                var L = i[s];
                (a = M[L.id]).refs--, o.push(a);
            }
            t && c(j(t, e), e);
            for (s = 0; s < o.length; s++) {
                var a;
                if (0 === (a = o[s]).refs) {
                    for (var r = 0; r < a.parts.length; r++) a.parts[r]();
                    delete M[a.id];
                }
            }
        };
    };
    var f, z = (f = [], function(t, e) {
        return f[t] = e, f.filter(Boolean).join("\n");
    });
    function p(t, e, i, o) {
        var M = i ? "" : o.css;
        if (t.styleSheet) t.styleSheet.cssText = z(e, M); else {
            var s = document.createTextNode(M), L = t.childNodes;
            L[e] && t.removeChild(L[e]), L.length ? t.insertBefore(s, L[e]) : t.appendChild(s);
        }
    }
    function D(t, e) {
        var i = e.css, o = e.media;
        if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = i; else {
            for (;t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(i));
        }
    }
    function I(t, e, i) {
        var o = i.css, M = i.sourceMap, s = void 0 === e.convertToAbsoluteUrls && M;
        (e.convertToAbsoluteUrls || s) && (o = l(o)), M && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(M)))) + " */");
        var L = new Blob([ o ], {
            type: "text/css"
        }), a = t.href;
        t.href = URL.createObjectURL(L), a && URL.revokeObjectURL(a);
    }
}, function(t, e, i) {
    "use strict";
    var o = Object.freeze({
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
    i.d(e, "a", function() {
        return a;
    }), i.d(e, "b", function() {
        return r;
    }), i.d(e, "c", function() {
        return n;
    }), i.d(e, "d", function() {
        return u;
    });
    var M = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
        }
        return t;
    };
    function s(t) {
        if (Array.isArray(t)) {
            for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
            return i;
        }
        return Array.from(t);
    }
    var L = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new Promise(function(i, o) {
            chrome.runtime.sendMessage("hjngolefdpdnooamgdldlkjgmdcmcjnc", M({
                action: t
            }, e), function() {
                var M, L, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = a.success, n = a.failure;
                return chrome.runtime.lastError ? ((M = console).warn.apply(M, [ "Action failed:", t ].concat(s(e))), 
                o(chrome.runtime.lastError)) : n ? ((L = console).warn.apply(L, [ "Action failed:", t ].concat(s(e))), 
                o(n)) : i(r);
            });
        });
    }, a = function() {
        return L(o.SetHasSeenFirstRun);
    }, r = function(t) {
        return L(o.SetProfileType, {
            type: t
        });
    }, n = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return L(o.SetShowEquatioOnFirstRun, {
            value: t
        });
    }, u = function() {
        return L(o.StartScreenshotReader);
    };
}, function(t, e, i) {
    "use strict";
    var o = i(1), M = i(17), s = i.n(M), L = i(18), a = i.n(L), r = i(19), n = i.n(r), u = i(4), l = i(20), c = (Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
        }
        return t;
    })({}, u, l), j = (Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
        }
        return t;
    })({}, u), w = i(21), C = (Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
        }
        return t;
    })({}, u, w), d = i(22), N = (Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o]);
        }
        return t;
    })({}, u, d);
    function y(t) {
        if (Array.isArray(t)) {
            for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
            return i;
        }
        return Array.from(t);
    }
    i.d(e, "b", function() {
        return z;
    }), i.d(e, "a", function() {
        return p;
    }), Object(o.c)([].concat(y(s.a), y(a.a), y(n.a)));
    var h = {
        enUS: j,
        enGB: c,
        es: C,
        fr: N
    }, f = function() {
        return (Array.isArray(navigator.languages) ? navigator.languages[0] : navigator.language) || navigator.userLanguage;
    }, z = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f();
        return "es" === t || t.startsWith("es-") ? "es" : "fr" === t || t.startsWith("fr-") ? "fr" : "en";
    }, p = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f();
        return t ? "en-GB" === t ? h.enGB : "en-US" === t ? h.enUS : "es" === t || t.startsWith("es-") ? h.es : "fr" === t || t.startsWith("fr-") ? h.fr : h.enUS : h.enUS;
    };
}, , function(t, e) {
    t.exports = function(t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var i = e.protocol + "//" + e.host, o = i + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
            var M, s = e.trim().replace(/^"(.*)"$/, function(t, e) {
                return e;
            }).replace(/^'(.*)'$/, function(t, e) {
                return e;
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s) ? t : (M = 0 === s.indexOf("//") ? s : 0 === s.indexOf("/") ? i + s : o + s.replace(/^\.\//, ""), 
            "url(" + JSON.stringify(M) + ")");
        });
    };
}, function(t, e, i) {
    "use strict";
    e.extend = M;
    var o = Object.prototype.hasOwnProperty;
    function M(t) {
        var e, i, M, s, L = Array.prototype.slice.call(arguments, 1);
        for (e = 0, i = L.length; e < i; e += 1) if (M = L[e]) for (s in M) o.call(M, s) && (t[s] = M[s]);
        return t;
    }
    e.hop = o;
}, function(t, e) {}, function(t, e, i) {
    var o;
    o = function() {
        "use strict";
        return [ {
            locale: "en",
            pluralRuleFunction: function(t, e) {
                var i = String(t).split("."), o = !i[1], M = Number(i[0]) == t, s = M && i[0].slice(-1), L = M && i[0].slice(-2);
                return e ? 1 == s && 11 != L ? "one" : 2 == s && 12 != L ? "two" : 3 == s && 13 != L ? "few" : "other" : 1 == t && o ? "one" : "other";
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
            pluralRuleFunction: function(t, e) {
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
            pluralRuleFunction: function(t, e) {
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
    }, t.exports = o();
}, function(t, e, i) {
    var o;
    o = function() {
        "use strict";
        return [ {
            locale: "es",
            pluralRuleFunction: function(t, e) {
                return e ? "other" : 1 == t ? "one" : "other";
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
    }, t.exports = o();
}, function(t, e, i) {
    var o;
    o = function() {
        "use strict";
        return [ {
            locale: "fr",
            pluralRuleFunction: function(t, e) {
                return e ? 1 == t ? "one" : "other" : t >= 0 && t < 2 ? "one" : "other";
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
    }, t.exports = o();
}, function(t) {
    t.exports = {
        "browser-action-popup.unsupported-app.list-prediction": "The advanced maths and chemistry prediction engine",
        "intro.introduction-line1": "Finally, you can create digital maths! {learnMoreLink}.",
        "upgrade-overlay-iconset-advanced-math": "The advanced maths and chemistry prediction engine"
    };
}, function(t) {
    t.exports = {
        "intro.introduction-line1": "Ya puedes crear expresiones matem\xe1ticas digitales! {learnMoreLink}.",
        "intro.introduction-learn-more-link": "Aprende m\xe1s",
        "intro.student-button": "Alumno",
        "intro.teacher-button": "Profesor",
        "intro.dismiss-button": "Prefiero no escoger ahora. Simplemente ll\xe9vame a EquatIO.",
        "intro.loading-doc.thanks": "Thanks!",
        "intro.loading-doc.message": "We're taking you to your first EquatIO-enabled Google Doc..."
    };
}, function(t) {
    t.exports = {
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
}, function(t, e) {
    t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="equatio-svg-option-prediction-SVGID_1_" d="M0 1.4h17.5v18.7H0z"/><circle id="SVGID_1_" cx="95" cy="95" r="88"/><circle id="SVGID_4_" cx="95" cy="95" r="88"/><circle id="SVGID_6_" cx="95" cy="95" r="88"/><circle id="SVGID_9_" cx="95" cy="95" r="88"/><circle id="SVGID_11_" cx="95" cy="95" r="88"/><path id="SVGID_13_" d="M7 183h83.8l39-39v-29H60.2L7 23.5z"/><circle id="SVGID_16_" cx="95" cy="95" r="88"/><circle id="SVGID_19_" cx="95" cy="95" r="88"/><path id="SVGID_21_" d="M95 55l34.6 60L91 183h92V55z"/><circle id="SVGID_24_" cx="95" cy="95" r="88"/><circle id="SVGID_27_" cx="95" cy="95" r="88"/><path id="SVGID_29_" d="M21 7v40.3L60.4 115 95 55h88V7z"/><circle id="SVGID_32_" cx="95" cy="95" r="88"/><circle id="SVGID_35_" cx="95" cy="95" r="88"/><circle id="SVGID_38_" cx="95" cy="95" r="88"/><circle id="SVGID_40_" cx="95" cy="95" r="88"/><circle id="SVGID_42_" cx="95" cy="95" r="88"/><clipPath id="equatio-svg-tool-latex-clip-path"><path fill="none" d="M0 0h51.6v49.83H0z"/></clipPath></defs><symbol id="equatio-svg-academy-back-button" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="currentColor"/></symbol><symbol id="equatio-svg-academy-icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill="currentColor"/></symbol><symbol id="equatio-svg-accessibility-playback-pause" viewBox="0 0 560 560"><style>.s0{fill:#494949;stroke-width:10;stroke:#494949}</style><path d="M502.9 528.4H349.6c-11 0-20-8-20-17.9v-457c0-9.9 9-17.9 20-17.9h153.3c11 0 20 8 20 17.9v457c0 9.9-8.9 17.9-20 17.9zm-300 0H49.6c-11 0-20-8-20-17.9v-457c0-9.9 9-17.9 20-17.9h153.3c11 0 20 8 20 17.9v457c0 9.9-8.9 17.9-20 17.9z" class="s0"/></symbol><symbol id="equatio-svg-accessibility-playback-play" viewBox="0 0 560 560"><path d="M179 48.7c-17.7-17.3-32.1-11.3-32.1 13.5v440.2c0 24.8 14.3 30.7 31.8 13.2l203.9-203.9c17.5-17.5 17.4-46-.3-63.4L179 48.7z" fill="currentColor" stroke="currentColor"/><path d="M179 48.7c-17.7-17.3-32.1-11.3-32.1 13.5v440.2c0 24.8 14.3 30.7 31.8 13.2l203.9-203.9c17.5-17.5 17.4-46-.3-63.4L179 48.7z" fill="currentColor" stroke-width="10" stroke="currentColor"/></symbol><symbol id="equatio-svg-accessibility-playback-stop" viewBox="0 0 560 560"><path d="M505.1 528.4H47.9c-9.9 0-17.9-8-17.9-17.9V53.3c0-9.9 8-17.9 17.9-17.9h457.2c9.9 0 17.9 8 17.9 17.9v457.2c0 9.9-8 17.9-17.9 17.9z" fill="currentColor" stroke-width="10" stroke="currentColor"/></symbol><symbol id="equatio-svg-chevron" viewBox="0 0 9.2 5.7"><path fill="currentColor" d="M0 4.6l1.1 1.1 3.5-3.5 3.5 3.5 1.1-1.1L4.6 0z"/></symbol><symbol id="equatio-svg-close-dialog"><path fill="currentColor" d="M9.2 1.1L8.1 0 4.6 3.5 1.1 0 0 1.1l4.6 4.6z"/></symbol><symbol id="equatio-svg-drawer-handle" viewBox="0 0 76.5 9"><path d="M4.5 9H72c2.5 0 4.5-2 4.5-4.5S74.5 0 72 0H4.5C2 0 0 2 0 4.5S2 9 4.5 9z" fill="currentColor"/><circle cx="9.7" cy="4.6" r="2.5" fill="#dcdfe2"/><circle cx="24" cy="4.6" r="2.5" fill="#dcdfe2"/><circle cx="38.3" cy="4.6" r="2.5" fill="#dcdfe2"/><circle cx="52.6" cy="4.6" r="2.5" fill="#dcdfe2"/><circle cx="66.8" cy="4.6" r="2.5" fill="#dcdfe2"/></symbol><symbol id="equatio-svg-drawer-microphone" viewBox="0 0 36 52.1"><g fill="currentColor"><path d="M36 19.4c0-.6-.5-1-1.2-1h-2.4c-.7 0-1.2.5-1.2 1v7c-.1 6.2-6 11.3-13.2 11.3-7.2 0-13.1-5-13.2-11.3v-7c0-.6-.5-1-1.2-1H1.2c-.7 0-1.2.5-1.2 1v6.7C0 34 6.8 40.5 15.6 41.6V48h-5.4c-.7 0-1.2.4-1.2 1v2.1c0 .6.5 1 1.2 1h15.6c.7 0 1.2-.5 1.2-1V49c0-.6-.5-1-1.2-1h-5.4v-6.4C29.2 40.5 36 34 36 26.1v-6.7z"/><path d="M18 33.8c5 0 9-3.5 9-7.8V7.8C27 3.5 23 0 18 0S9 3.5 9 7.8V26c0 4.3 4.1 7.8 9 7.8z"/></g></symbol><symbol id="equatio-svg-expired-license" viewBox="0 0 340 234.5"><g opacity=".37"><radialGradient id="SVGID_1_" cx="614.705" cy="51718.18" r="108.793" gradientTransform="matrix(.6084 0 0 .05166 -319.539 -2454.731)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d1e1c"/><stop offset=".074" stop-color="#151514" stop-opacity=".926"/><stop offset=".239" stop-color="#090909" stop-opacity=".761"/><stop offset=".462" stop-color="#020202" stop-opacity=".538"/><stop offset="1" stop-opacity="0"/></radialGradient><path d="M54.4 205.9c-39.4 0-73 3-86.4 7.2v8.2c13.4 4.2 47 7.2 86.4 7.2 51.2 0 92.6-5.1 92.6-11.3.1-6.2-41.4-11.3-92.6-11.3z" fill="url(#SVGID_1_)"/></g><path d="M80.6 168c0 7.3-5.9 13.3-13.3 13.3H42.5c-7.3 0-13.3-5.9-13.3-13.3V72c0-7.3 5.9-13.3 13.3-13.3h24.7c7.3 0 13.3 6 13.3 13.3v96z" fill="#fd3269"/><path d="M60.3 92.2c0 3.9 2.3 4.8 5 2.1l30.5-30.5c2.8-2.8 1.8-5-2.1-5H67.4c-3.9 0-7.1 3.2-7.1 7.1v26.3z" fill="#fd3269"/><path d="M75.3 46.6c-.9 1.9-5.2 2.6-2.9 5.9-2.4-2.9-3.4-10.8.5-13.5 5-3.5 10.7 5.9 2.4 7.6zm-36.1 0c.9 1.9 5.2 2.6 2.9 5.9 2.3-2.9 3.3-10.9-.5-13.5-5-3.5-10.7 5.9-2.4 7.6z" fill="#53a2da"/><path d="M51.1 217c-1.1 0-2-.9-2-2v-41.2c0-1.1.9-2 2-2s2 .9 2 2V215c0 1.1-.9 2-2 2zm7.6 0c-1.1 0-2-.9-2-2v-37.9c0-1.1.9-2 2-2s2 .9 2 2V215c0 1.1-.9 2-2 2z" fill="#fd3269"/><path d="M60.3 97.3s4.8 2.1 8.4.6c0 0-6.8 4.4-8.4-.6z" opacity=".4" fill="#221e20"/><path d="M47.9 98.6S51.5 88.5 62.6 87c11-1.5 9.1 9.2 9.1 9.2l-23.8 2.7" fill="#841627"/><g fill="#fdf6fa"><path d="M62.6 87c-4.6.6-8 2.8-10.3 5 0 .1-1 5.2 4.1 4.2l13.1-1.7s1.3-.9 2.1-2.1c-.5-2.9-2.5-6.3-9-5.4z"/><path d="M52.3 92.1c-.3.3-.5.5-.7.8l.7-.8z"/></g><path d="M54.6 98s6.5-9.9 14.9-2.1c0 0 2.9 2.7-3.6 3-6.5.2-5.5-1.7-5.5-1.7l-4.6.8" fill="#ce544c"/><path d="M59.4 94.1s6.2-.6 7.4 1.6c1.1 2.2-.8-2.1-7.4-1.5" opacity=".1" fill="#221e20"/><path d="M68.8 70.8s-6-2.7-8.9 2.5" fill="none" stroke="#fff" stroke-width="1.855" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M71.2 77.8l18.2 20c.5.5 1.3.5 1.8 0l2.5-2.5c.5-.5.5-1.3 0-1.8l-18.2-20c-.5-.5-1.3-.5-1.8 0L71.2 76c-.5.5-.5 1.3 0 1.8z" fill="#fff"/><g fill="#fd3269"><path d="M94.8 95l-15.1 26.7c-.4.6-1.1.8-1.8.5l-3.1-1.8c-.6-.4-.8-1.1-.5-1.8l15.1-26.7c.4-.6 1.1-.8 1.8-.5l3.1 1.8c.6.4.8 1.2.5 1.8z"/><path d="M72.1 77.8l18.2 20c.5.5 1.3.5 1.8 0l2.5-2.5c.5-.5.5-1.3 0-1.8l-18.2-20c-.5-.5-1.3-.5-1.8 0L72.1 76c-.5.5-.5 1.3 0 1.8z"/></g><path d="M103.8 198.3c2 5.7 8.5 10.5 13.7 11.6.7.1 1.3 1.2 2 1.3l.3 4.7c0 .6.5.9 1.1.9h25.6c.6 0 1.1-.2 1.1-.9l2.2-40.2c0-.6-.5-1.1-1.1-1.1h-30.1c-.6 0-1.1.6-1.1 1.2l.3 4.7c-1.4-.6-2.9-.9-4.4-.9-1.1 0-2.1.2-3.2.5-6.2 2.4-9.1 10.5-6.4 18.2zm4.3-9.5c.4-1.2 1.4-3.2 3.6-4 .5-.2 1.1-.3 1.6-.3 2.8 0 3.8 2.9 5 6.4l.8 13.9-.1.1c-3.4 0-9.2-3.8-10.8-8.2-.9-2.6-1-5.5-.1-7.9z" fill="#00417c"/><path d="M37.1 111l-24.9 26.1c-.5.5-1.3.5-1.8.1l-2.6-2.4c-.5-.5-.5-1.3-.1-1.8l24.9-26.1c.5-.5 1.3-.5 1.8-.1l2.6 2.4c.6.5.6 1.3.1 1.8z" fill="#fd3269"/><path d="M236 203c-54 0-98-44-98-98s44-98 98-98 98 44 98 98-44 98-98 98z" fill="#eaf0f4"/><path d="M237.2 8.2c-53.4 0-96.8 43.4-96.8 96.6 0 53.3 43.4 96.6 96.8 96.6S334 158 334 104.8c0-53.3-43.4-96.6-96.8-96.6zm0 176c-43.9 0-79.5-35.5-79.5-79.4 0-43.9 35.6-79.4 79.5-79.4s79.5 35.5 79.5 79.4c0 43.9-35.6 79.4-79.5 79.4z" fill="#000623"/><path d="M290.7 23.7c-.1-.1-.1-.1-.2-.1L181.1 186.2c.1 0 .1.1.2.2 44.9 30.1 105.9 18.2 136-26.7 30.2-44.9 18.2-105.9-26.6-136z" fill="#dfe5ea"/><path d="M236 7c-54 0-98 44-98 98s44 98 98 98 98-44 98-98c0-54.1-44-98-98-98zm0 178.5c-44.5 0-80.5-36.1-80.5-80.5 0-44.5 36.1-80.5 80.5-80.5 44.5 0 80.5 36.1 80.5 80.5 0 44.5-36 80.5-80.5 80.5z" fill="#515f70"/><path fill="#00b7ff" d="M203.4 156l5 2.9-7.9 13.8-5.1-2.9 8-13.8zm68.1-118l5 3-7.9 13.7-5.1-2.9 8-13.8zm-89.1 94.9l3 5.1-13.8 7.9-3-5 13.8-8zm118-68.1l2.9 5.1-13.8 7.9-2.9-5 13.8-8zm-124.6 37.7v5.8h-15.9v-5.8h15.9zm136.2 0v5.8h-15.9v-5.8H312zM185.4 72.8l-3 5-13.8-7.9 3-5.1 13.8 8zm117.9 68.1l-2.9 5-13.8-7.9 2.9-5.1 13.8 8zm-94.9-89.1l-5 2.9-8-13.7 5.1-3 7.9 13.8zm68.1 118l-5 2.9-8-13.8 5.1-2.9 7.9 13.8zM238.9 45.2h-5.8V29.3h5.8v15.9zm0 136.2h-5.8v-15.9h5.8v15.9z"/><circle cx="236" cy="106.9" r="7" fill="#00417c"/><path d="M236.3 123.5h-.6c-1.3 0-2.4-1.1-2.4-2.4V55c0-1.3 1.1-2.4 2.4-2.4h.6c1.3 0 2.4 1.1 2.4 2.4v66.1c0 1.3-1.1 2.4-2.4 2.4z" fill="#00417c"/></symbol><symbol id="equatio-svg-expiring-license" viewBox="0 0 340 234.5"><g opacity=".37"><radialGradient id="SVGID_1_" cx="1157.033" cy="95405.406" r="271.258" gradientTransform="matrix(.3648 0 0 .02555 -129.17 -2220.817)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d1e1c"/><stop offset=".146" stop-color="#1d1e1c" stop-opacity=".854"/><stop offset="1" stop-color="#1d1e1c" stop-opacity="0"/></radialGradient><path d="M293.1 203.3c-58.9 0-108.7 3.7-129.5 8.9v10.1c20.7 5.2 70.6 8.9 129.5 8.9 76.5 0 138.5-6.3 138.5-14-.1-7.7-62.1-13.9-138.5-13.9z" fill="url(#SVGID_1_)"/></g><path d="M256.1 55h52.4c7.5 0 12.9 6.8 12.9 14.3v97.9c0 7.5-5.4 14.3-12.9 14.3h-5.8v33.7c0 1.1-1 2-2.1 2s-2.1-.9-2.1-2v-33.7h-4.1v33.7c0 1.1-1 2-2.1 2s-2.1-.9-2.1-2v-33.7h-7c-7.5 0-13.7-6.8-13.7-14.3V76.4L254 60.5c-2.9-2.8-1.9-5.5 2.1-5.5z" fill="#aeca37"/><g fill="#fff"><path d="M279.5 66c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.8 0-3.1-1.4-3.1-3.1z"/><circle cx="282.5" cy="66" r="3.1"/></g><path d="M271.1 114.7c1.3-.1 2.2-1.2 2.1-2.5-.1-1.3-1.2-2.2-2.5-2.1l-18.2 1.6c-1.3.1-2.2 1.2-2.1 2.5.1 1.3 1.2 2.2 2.5 2.1h.2l3.4 38.4c.4 4.9 4.8 8.5 9.7 8.1 4.9-.4 8.5-4.8 8.1-9.7l-3.4-38.4h.2z" opacity=".43" fill="#fff"/><path d="M266.3 163.7c-5.4.5-10.1-3.5-10.6-8.9l-3.4-37.6c-1.4-.2-2.6-1.3-2.8-2.8-.2-1.7 1.1-3.3 2.9-3.4l18.2-1.6c1.7-.2 3.3 1.1 3.4 2.9.1 1.5-.8 2.9-2.2 3.3l3.4 37.6c.5 5.2-3.5 10-8.9 10.5zm-13.7-51c-.8.1-1.3.8-1.3 1.5.1.8.8 1.3 1.5 1.3l1.1-.1 3.5 39.3c.4 4.4 4.3 7.7 8.7 7.3s7.7-4.3 7.3-8.7l-3.5-39.3 1.1-.1c.8-.1 1.3-.8 1.3-1.5-.1-.8-.8-1.3-1.5-1.3l-18.2 1.6z" fill="#ebeff2"/><path d="M257.1 131.4l2.1 23.1c.3 3.5 3.4 6.1 7 5.8 3.5-.3 6.1-3.4 5.8-7l-2.1-23.1-12.8 1.2z" fill="#e94e68"/><path d="M292.2 140c0 1.1-.9 2.1-2.1 2.1h-24.9c-1.1 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1h24.9c1.2.1 2.1 1 2.1 2.1z" fill="#aeca37"/><path d="M104.1 203c-54 0-98-44-98-98s44-98 98-98 98 44 98 98-43.9 98-98 98z" fill="#eaf0f4"/><path d="M105.4 8.2C52 8.2 8.6 51.5 8.6 104.8s43.4 96.6 96.8 96.6 96.8-43.3 96.8-96.6c-.1-53.3-43.5-96.6-96.8-96.6zm0 176c-43.9 0-79.5-35.5-79.5-79.4 0-43.8 35.6-79.4 79.5-79.4s79.5 35.5 79.5 79.4c0 43.9-35.6 79.4-79.5 79.4z" fill="#000623"/><path d="M158.8 23.7c-.1-.1-.1-.1-.2-.1L49.3 186.2c.1 0 .1.1.2.2 44.9 30.1 105.9 18.2 136-26.7 30.1-44.9 18.2-105.9-26.7-136z" fill="#dfe5ea"/><path d="M104.1 7c-54 0-98 44-98 98s44 98 98 98 98-44 98-98-43.9-98-98-98zm0 178.5c-44.5 0-80.5-36-80.5-80.5s36-80.5 80.5-80.5 80.5 36 80.5 80.5c.1 44.5-36 80.5-80.5 80.5z" fill="#515f70"/><path fill="#00b7ff" d="M71.6 156l5 2.9-8 13.8-5-2.9 8-13.8zm68-117.9l5.1 2.9-8 13.8-5-2.9 7.9-13.8zm-89 94.8l2.9 5.1-13.8 7.9-2.9-5 13.8-8zm117.9-68.1l3 5.1-13.8 8-3-5.1 13.8-8zM44 102.5v5.8H28.1v-5.8H44zm136.2 0v5.8h-15.9v-5.8h15.9zM53.5 72.8l-2.9 5.1-13.8-8 2.9-5.1 13.8 8zm118 68.1l-3 5-13.8-7.9 3-5.1 13.8 8zm-94.9-89l-5 2.9-8-13.8 5-2.9 8 13.8zm68.1 117.9l-5.1 2.9-7.9-13.8 5-2.9 8 13.8zM107.1 45.3h-5.9v-16h5.9v16zm0 136.1h-5.9v-15.9h5.9v15.9z"/><path d="M102.2 99.6c0-.4.1-.7.3-.9h-.3L87.5 59.4c-.5-1.3-2-2-3.3-1.5-1.3.5-2 2-1.5 3.3l15.1 40.5c1.7 0 4.2-.3 4.4-2.1z" fill="#00417c"/><path d="M125.2 90.5c-1-1.6-3.1-2-4.7-1L105.9 99c-1.1-.5-2.4-.6-3.6-.4 0 0-3.5 1.4-4.4 3.1s-1.2 3.7-.5 5.6c1.3 3.4 5 5.1 8.3 3.8 2.8-1 4.4-3.8 4.2-6.6l14.3-9.3c1.6-1 2-3.1 1-4.7z" fill="#00417c"/><g fill-rule="evenodd" clip-rule="evenodd"><g fill="#00417c"><path d="M219.8 151.6c-2.6.1-4.5 3.4-4.4 7.3l-1.1 13.1 3.3.1 1.5-5.6v-.1c.5.2 1 .3 1.5.3 2.7-.1 4.6-3.6 4.4-7.8-.2-4.2-2.5-7.5-5.2-7.3zm.1 1.8c2-.1 3.8 2.4 3.9 5.5.2 3.1-1.3 5.8-3.3 5.9-2 .1-3.8-2.4-4-5.5-.1-3.1 1.4-5.8 3.4-5.9z"/><path d="M216.9 172.1l-2.9 34.8-2.2-31.7 3-3.2zm-7.9-20.6c2.6.2 4.4 3.4 4.3 7.4l.9 13.1-3.3.1-1.5-5.6v-.1c-.5.2-1 .3-1.5.3-2.7-.2-4.6-3.7-4.3-7.9.3-4.3 2.7-7.5 5.4-7.3zm-.1 1.8c-2-.1-3.8 2.3-4 5.4-.2 3.1 1.2 5.8 3.2 5.9 2 .1 3.8-2.3 4-5.4.2-3.1-1.2-5.7-3.2-5.9z"/><path d="M211.6 172l2.4 34.9 2.7-31.7-3-3.2z"/><ellipse transform="matrix(.06818 -.9977 .9977 .06818 21.214 380.346)" cx="214.2" cy="178.8" rx=".9" ry=".8"/></g><path d="M213.2 188.9l13.5-50.6c.1-.5.7-.8 1.2-.7l7.3 1.9c.5.1.8.7.7 1.2l-13.6 50.6c-.1.5-.7.8-1.2.7l-7.3-1.9c-.4-.1-.7-.6-.6-1.2z" fill="#00417c"/><path transform="rotate(-75.167 215.542 188.62)" fill="#fff" d="M215.3 186.5h.4v4.3h-.4z"/><path fill="#fff" d="M213.6 187.4l.1-.4 2 .5-.1.4zm.3-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 2 .5-.1.4zm.2-.9l.2-.4 2 .5-.2.4zm.3-.9l.1-.4 4.2 1.1-.1.4zm.2-.9l.1-.4 2 .6-.1.4zm.3-.9l.1-.4 2 .6-.1.4zm.2-.9l.1-.4 2 .6-.1.4zm.2-.8l.1-.5 2.1.6-.2.4zm.3-.9l.1-.4 4.2 1.1-.1.4zm.2-.9l.1-.4 2 .5-.1.4zm.3-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 2 .5-.1.4zm.3-.9l.1-.4 4.2 1.1-.1.4z"/><path transform="rotate(-74.942 218.264 174.077)" fill="#fff" d="M218.1 173h.4v2.1h-.4z"/><path fill="#fff" d="M217.4 173.1l.2-.4 2 .6-.1.4zm.3-.9l.1-.4 2 .6-.1.4zm.2-.9l.1-.4 2 .6-.1.4zm.3-.8l.1-.5 4.2 1.2-.1.4z"/><path transform="rotate(-74.966 219.457 169.626)" fill="#fff" d="M219.2 168.6h.4v2.1h-.4z"/><path fill="#fff" d="M218.6 168.7l.1-.4 2.1.5-.2.4zm.3-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 2 .5-.1.4zm.3-.9l.1-.4 4.2 1.1-.2.4z"/><path transform="rotate(-74.971 220.644 165.177)" fill="#fff" d="M220.4 164.1h.4v2.1h-.4z"/><path fill="#fff" d="M219.8 164.2l.1-.4 2 .5-.1.5zm.3-.9l.1-.4 2 .6-.1.4zm.2-.9l.1-.4 2 .6-.1.4zm.2-.8l.2-.5 4.2 1.2-.2.4z"/><path transform="rotate(-74.966 221.843 160.72)" fill="#fff" d="M221.6 159.7h.4v2.1h-.4z"/><path fill="#fff" d="M221 159.8l.1-.4 2 .5-.1.4zm.3-.9l.1-.4 2 .5-.1.4z"/><path transform="rotate(-75.173 222.552 158.054)" fill="#fff" d="M222.3 157h.4v2.1h-.4z"/><path fill="#fff" d="M221.7 157.1l.2-.4 4.1 1.1-.1.4zm.3-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 2 .5-.1.5zm.3-.9l.1-.4 2 .6-.1.4z"/><path transform="rotate(-74.935 223.764 153.605)" fill="#fff" d="M223.5 152.6h.4v2.1h-.4z"/><path fill="#fff" d="M222.9 152.6l.1-.4 4.2 1.2-.1.4z"/><path fill="#fff" d="M222.9 152.6l.1-.4 4.2 1.2-.1.4z"/><path transform="rotate(-75.202 224.234 151.824)" fill="#fff" d="M224 150.8h.4v2.1h-.4z"/><path transform="rotate(-74.966 224.468 150.923)" fill="#fff" d="M224.3 149.9h.4v2.1h-.4z"/><path fill="#fff" d="M223.7 150l.1-.4 2 .5-.1.4z"/><path transform="rotate(-74.935 224.957 149.152)" fill="#fff" d="M224.7 148.1h.4v2.1h-.4z"/><path fill="#fff" d="M224.1 148.2l.1-.4 4.2 1.1-.1.4z"/><path transform="rotate(-75.167 225.424 147.36)" fill="#fff" d="M225.2 146.3h.4v2.1h-.4z"/><path transform="rotate(-74.942 225.66 146.47)" fill="#fff" d="M225.4 145.4h.4v2.1h-.4z"/><path fill="#fff" d="M224.8 145.5l.2-.4 2 .5-.2.5z"/><path transform="rotate(-74.942 226.14 144.688)" fill="#fff" d="M225.9 143.7h.4v2.1h-.4z"/><path fill="#fff" d="M225.3 143.7l.1-.4 4.2 1.2-.1.4zm.3-.8l.1-.5 2 .6-.1.4zm.2-.9l.1-.5 2 .6-.1.4zm.2-.9l.1-.4 2.1.5-.2.4zm.3-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 4.2 1.1-.1.4z"/><g fill="#00417c"><path d="M198.8 167.1l.1-7.1 3.6 6.1-.8.6-1.9.5z"/><path d="M199.8 167.3l6.4 23.8-.9.3-6.4-23.8c-.1-.5 0-1 .2-1.1.2-.1.6.3.7.8z"/><path d="M200.5 166.1c.5-.1 1 .2 1.2.7l6.4 23.8-1.9.5-6.4-23.8c-.1-.5.2-1.1.7-1.2z"/><path d="M202.6 166.5l6.4 23.8-.9.3-6.4-23.8c-.1-.5 0-1 .2-1.1.3 0 .6.3.7.8zm-3.7-4.3V160l1 1.9z"/></g><g fill="#00417c"><path d="M206.5 162l1.5-6.9 2.3 6.7-.9.4-2 .1z"/><path d="M207.4 162.4l1.4 24.6-1 .1-1.4-24.6c0-.5.2-1 .4-1 .4-.1.6.3.6.9z"/><path d="M208.3 161.3c.5 0 1 .4 1 .9l1.4 24.6-1.9.1-1.4-24.6c0-.5.4-.9.9-1z"/><path d="M210.3 162.2l1.4 24.6-1 .1-1.4-24.6c0-.5.2-1 .4-1 .4-.1.6.4.6.9zm-2.7-5.1l.4-2 .7 2z"/></g><path d="M223.8 213.7h3.9v-31.9l-3.9-1.1zm-23.2-33.5h23.2v33.5h-23.2z" fill="#00417c"/></g></symbol><symbol id="equatio-svg-floating-action-align-centers-horiz" viewBox="0 0 24 11.8"><g id="Group_283" transform="translate(-1577 -219)" fill="#484848"><g id="Group_192" transform="translate(3716.461 -26)"><path id="Path_698" d="M-2139 252.3h12.3c.3 0 .5-.2.5-.5v-1.9c0-.3-.2-.5-.5-.5h-12.3c-.3 0-.5.2-.5.5v1.9c0 .3.3.5.5.5z"/><path id="Path_699" d="M-2119.9 252.3h4c.3 0 .5-.2.5-.5v-1.9c0-.3-.2-.5-.5-.5h-4c-.3 0-.5.2-.5.5v1.9c0 .3.2.5.5.5z"/></g><path id="Path_700" d="M1580.6 228.9h6.1c.3 0 .5-.2.5-.5v-7c0-.3-.2-.5-.5-.5h-6.1c-.3 0-.5.2-.5.5v7c.1.3.3.5.5.5z"/><path id="Path_701" d="M1590 230.8h7.3c.3 0 .5-.2.5-.5v-10.8c0-.3-.2-.5-.5-.5h-7.3c-.3 0-.5.2-.5.5v10.8c0 .3.2.5.5.5zm5.6-9.6v7.3h-3.8v-7.3h3.8z"/></g></symbol><symbol id="equatio-svg-floating-action-align-centers" viewBox="0 0 11.8 24"><g id="Group_283" transform="translate(-1577 -219)" fill="currentColor"><g id="Group_192" transform="translate(3716.461 -26)"><path id="Path_698" d="M-2135 245.5v12.3c0 .3.2.5.5.5h1.9c.3 0 .5-.2.5-.5v-12.3c0-.3-.2-.5-.5-.5h-1.9c-.3 0-.5.2-.5.5z"/><path id="Path_699" d="M-2135 264.6v4c0 .3.2.5.5.5h1.9c.3 0 .5-.2.5-.5v-4c0-.3-.2-.5-.5-.5h-1.9c-.3 0-.5.2-.5.5z"/></g><path id="Path_700" d="M1578.9 222.6v6.1c0 .3.2.5.5.5h7c.3 0 .5-.2.5-.5v-6.1c0-.3-.2-.5-.5-.5h-7c-.3.1-.5.3-.5.5z"/><path id="Path_701" d="M1577 232v7.3c0 .3.2.5.5.5h10.8c.3 0 .5-.2.5-.5V232c0-.3-.2-.5-.5-.5h-10.8c-.3 0-.5.2-.5.5zm9.6 5.6h-7.3v-3.8h7.3v3.8z"/></g></symbol><symbol id="equatio-svg-floating-action-align-to-bottom" viewBox="0 0 25 18.2"><g id="Group_261" transform="translate(-192 592)" fill="currentColor"><path id="Path_706" d="M216.5-573.8h-24c-.3 0-.5-.2-.5-.5v-2.1c0-.3.2-.5.5-.5h24c.3 0 .5.2.5.5v2.1c0 .3-.2.5-.5.5z"/><path id="Path_707" d="M213.4-579h-6.7c-.3 0-.5-.2-.5-.5v-7.8c0-.3.2-.5.5-.5h6.7c.3 0 .5.2.5.5v7.8c0 .3-.2.5-.5.5z"/><path id="Path_708" d="M203.6-579.5v-12c0-.3-.2-.5-.5-.5H195c-.3 0-.5.2-.5.5v12c0 .3.2.5.5.5h8.1c.2 0 .4-.2.5-.5zm-2.5-10v8.1h-4.2v-8.1h4.2z"/></g></symbol><symbol id="equatio-svg-floating-action-align-to-left" viewBox="0 0 17.4 23.9"><g id="Group_325" transform="translate(-187 592)" fill="currentColor"><path id="Path_692" d="M187-591.5v22.9c0 .3.2.5.5.5h2c.3 0 .5-.2.5-.5v-22.9c0-.3-.2-.5-.5-.5h-2c-.3 0-.5.2-.5.5z"/><path id="Path_693" d="M192-588.5v6.4c0 .3.2.5.5.5h7.4c.3 0 .5-.2.5-.5v-6.4c0-.3-.2-.5-.5-.5h-7.4c-.3 0-.5.2-.5.5z"/><path id="Path_694" d="M192-578.7v7.7c0 .3.2.5.5.5h11.4c.3 0 .5-.2.5-.5v-7.7c0-.3-.2-.5-.5-.5h-11.4c-.3 0-.5.3-.5.5zm10.1 5.9h-7.7v-4.1h7.7v4.1z"/></g></symbol><symbol id="equatio-svg-floating-action-align-to-right" viewBox="0 0 17.5 24"><g id="Group_264" transform="translate(-393 635)" fill="currentColor"><path id="Path_709" d="M410.5-634.5v23c0 .3-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5v-23c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5z"/><path id="Path_710" d="M405.5-631.5v6.4c0 .3-.2.5-.5.5h-7.4c-.3 0-.5-.2-.5-.5v-6.4c0-.3.2-.5.5-.5h7.4c.2 0 .5.2.5.5z"/><path id="Path_711" d="M405-622.1h-11.5c-.3 0-.5.2-.5.5v7.8c0 .3.2.5.5.5H405c.3 0 .5-.2.5-.5v-7.8c0-.3-.2-.5-.5-.5zm-9.6 2.4h7.8v4.1h-7.8v-4.1z"/></g></symbol><symbol id="equatio-svg-floating-action-align-to-top" viewBox="0 0 25 18.2"><g id="Group_260" transform="translate(-194 592)" fill="currentColor"><path id="Path_695" d="M218.5-592h-24c-.3 0-.5.2-.5.5v2.1c0 .3.2.5.5.5h24c.3 0 .5-.2.5-.5v-2.1c0-.3-.2-.5-.5-.5z"/><path id="Path_696" d="M215.4-586.8h-6.7c-.3 0-.5.2-.5.5v7.8c0 .3.2.5.5.5h6.7c.3 0 .5-.2.5-.5v-7.8c0-.2-.2-.5-.5-.5z"/><path id="Path_697" d="M205-586.8h-8.1c-.3 0-.5.2-.5.5v12c0 .3.2.5.5.5h8.1c.3 0 .5-.2.5-.5v-12c.1-.2-.2-.5-.5-.5zm-6.1 10.6v-8.1h4.2v8.1h-4.2z"/></g></symbol><symbol id="equatio-svg-floating-action-arrange-bring-forward" viewBox="0 0 20 20"><g id="Group_246" transform="translate(-597 745)"><path id="Path_730" d="M597.4-731.4h5.9v5.9c0 .2.2.4.4.4h12.8c.2 0 .4-.2.4-.4v-12.8c0-.2-.2-.4-.4-.4h-5.9v-5.9c0-.2-.2-.4-.4-.4h-12.8c-.2 0-.4.2-.4.4v12.8c0 .2.2.4.4.4zm2.7-10.5h7.5v3.3H604c-.3 0-.6.3-.6.6v3.6h-3.3v-7.5z" fill="currentColor"/></g></symbol><symbol id="equatio-svg-floating-action-arrange-bring-to-front" viewBox="0 0 20 20.1"><path id="Path_712" d="M19.6 10.3h-3.4v-6c0-.2-.2-.4-.4-.4h-6V.4c.1-.2-.1-.4-.3-.4H.4C.2 0 0 .2 0 .4v9.1c0 .2.2.4.4.4h3.3v6c0 .2.2.4.4.4h6v3.4c0 .2.2.4.4.4h9.1c.2 0 .4-.2.4-.4v-9.1c0-.1-.2-.3-.4-.3zm-7.3 6h3.5c.2 0 .4-.2.4-.4v-3.4h1.6v5.4h-5.4l-.1-1.6zM3.7 4.2v3.4H2.2V2.2h5.4v1.6H4.1c-.2 0-.4.2-.4.4z" fill="currentColor"/></symbol><symbol id="equatio-svg-floating-action-arrange-send-back" viewBox="0 0 20 20"><g id="Group_265" transform="translate(-493 745)"><g id="Group_243"><path id="Path_714" d="M493.4-731.4h5.9v5.9c0 .2.2.4.4.4h12.8c.2 0 .4-.2.4-.4v-12.8c0-.2-.2-.4-.4-.4h-5.9v-5.9c0-.2-.2-.4-.4-.4h-12.8c-.2 0-.4.2-.4.4v12.8c0 .2.2.4.4.4zm16.5-4.2v7.5h-7.5v-7.5h7.5z" fill="currentColor"/></g></g></symbol><symbol id="equatio-svg-floating-action-arrange-send-to-back" viewBox="0 0 20 20.1"><g id="Group_266" transform="translate(-439 745)"><path id="Path_713" d="M458.6-734.7h-3.4v-6c0-.2-.2-.4-.4-.4h-6v-3.4c0-.2-.2-.4-.4-.4h-9.1c-.2 0-.4.2-.4.4v9.1c0 .2.2.4.4.4h3.3v6c0 .2.2.4.4.4h6v3.4c0 .2.2.4.4.4h9.1c.2 0 .4-.2.4-.4v-9.1c.1-.2-.1-.4-.3-.4zm-7.3 7.6v-5.4h5.4v5.4h-5.4zm-4.6-15.7v5.4h-5.4v-5.4h5.4z" fill="currentColor"/></g></symbol><symbol id="equatio-svg-floating-action-grouping-group" viewBox="0 0 23.7 23.2"><g id="Group_291" transform="translate(1930.627 1514.992)"><path id="Path_715" d="M-1918.8-1501h-4.7c-1.3 0-2.4-1.1-2.4-2.4v-4.6c0-1.3 1.1-2.4 2.4-2.4h4.7c1.3 0 2.4 1.1 2.4 2.4v4.6c0 1.3-1.1 2.4-2.4 2.4z" fill="#494949"/><path id="Path_716" d="M-1914.3-1497.2h-4.7c-1.3 0-2.4-1.1-2.4-2.4v-4.6c0-1.3 1.1-2.4 2.4-2.4h4.7c1.3 0 2.4 1.1 2.4 2.4v4.6c0 1.3-1.1 2.4-2.4 2.4zm-4.7-7.5c-.3 0-.5.2-.5.5v4.6c0 .3.2.5.5.5h4.7c.3 0 .5-.2.5-.5v-4.6c0-.3-.2-.5-.5-.5h-4.7z" fill="#494949"/><path id="Path_717" d="M-1907.7-1510.5c.5 0 .9-.4.9-.9v-2.8c0-.5-.4-.9-.9-.9h-2.8c-.5 0-.9.4-.9.9v.4h-14.7v-.4c0-.5-.4-.9-.9-.9h-2.8c-.5 0-.9.4-.9.9v2.8c0 .5.4.9.9.9h.9v14.2h-.9c-.5 0-.9.4-.9.9v2.8c0 .5.4.9.9.9h2.8c.5 0 .9-.4.9-.9v-.8h14.7v.8c0 .5.4.9.9.9h2.8c.5 0 .9-.4.9-.9v-2.8c0-.5-.4-.9-.9-.9h-.8v-14.2h.8zm-2.1 14.2h-.7c-.5 0-.9.4-.9.9v.8h-14.7v-.8c0-.5-.4-.9-.9-.9h-.7v-14.2h.7c.5 0 .9-.4.9-.9v-1.1h14.7v1.1c0 .5.4.9.9.9h.7v14.2z" fill="#494949"/><path id="Path_718" d="M-1923.5-1508.5c-.3 0-.5.2-.5.5v4.6c0 .3.2.5.5.5h4.7c.3 0 .5-.2.5-.5v-4.6c0-.3-.2-.5-.5-.5h-4.7z" fill="#fff"/></g></symbol><symbol id="equatio-svg-floating-action-grouping-ungroup" viewBox="0 0 21.8 21.8"><g id="Group_292" transform="translate(-1449.408 285.593)"><path id="Path_719" d="M1460.2-271.9h-5c-1.4 0-2.6-1.1-2.6-2.6v-5c0-1.4 1.1-2.6 2.6-2.6h5c1.4 0 2.6 1.1 2.6 2.6v5c0 1.4-1.2 2.6-2.6 2.6z" fill="#494949"/><path id="Path_720" d="M1465-267.9h-5c-1.4 0-2.6-1.1-2.6-2.6v-5c0-1.4 1.1-2.6 2.6-2.6h5c1.4 0 2.6 1.1 2.6 2.6v5c0 1.4-1.2 2.6-2.6 2.6zm-5-8.1c-.3 0-.5.2-.5.5v5c0 .3.2.5.5.5h5c.3 0 .5-.2.5-.5v-5c0-.3-.2-.5-.5-.5h-5z" fill="#494949"/><path id="Path_721" d="M1455.2-280c-.3 0-.5.2-.5.5v5c0 .3.2.5.5.5h5c.3 0 .5-.2.5-.5v-5c0-.3-.2-.5-.5-.5h-5z" fill="#fff"/><g id="Group_199" transform="translate(3632 -317)" fill="#494949"><path id="Path_722" d="M-2161.5 53.2h-1c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h.3v-.3c0-.4.3-.7.7-.7s.7.3.7.7v1c0 .4-.3.7-.7.7z"/><path id="Path_723" d="M-2164.5 53.2h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.4.7-.7.7zm-4.1 0h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-4.1 0h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-4.1 0h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/><path id="Path_724" d="M-2180.9 53.2h-1c-.4 0-.7-.3-.7-.7v-1c0-.4.3-.7.7-.7.4 0 .7.3.7.7v.3h.3c.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/><path id="Path_725" d="M-2181.9 50.2c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7zm0-4.1c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7zm0-4.1c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7zm0-4.1c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7z"/><path id="Path_726" d="M-2181.9 33.8c-.4 0-.7-.3-.7-.7v-1c0-.4.3-.7.7-.7h1c.4 0 .7.3.7.7 0 .4-.3.7-.7.7h-.3v.3c0 .4-.3.7-.7.7z"/><path id="Path_727" d="M-2164.5 32.8h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.4.7-.7.7zm-4.1 0h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-4.1 0h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-4.1 0h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/><path id="Path_728" d="M-2161.5 33.8c-.4 0-.7-.3-.7-.7v-.3h-.3c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h1c.4 0 .7.3.7.7v1c0 .4-.3.7-.7.7z"/><path id="Path_729" d="M-2161.5 50.2c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7zm0-4.1c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7zm0-4.1c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7zm0-4.1c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7z"/></g></g></symbol><symbol id="equatio-svg-floating-action-move" viewBox="0 0 14 14"><path id="Path_754" d="M13.8 6.6c.1.1.2.2.2.4 0 .1-.1.3-.1.3l-2 2c-.1.1-.2.1-.4.1-.1 0-.3-.1-.4-.1-.1-.1-.1-.2-.1-.3V8H8v3h1c.1 0 .3.1.4.1.1.1.1.2.1.4 0 .1-.1.3-.1.4l-2 2c-.2.2-.5.2-.7 0l-2-2c-.1-.1-.1-.2-.1-.3 0-.1.1-.3.1-.4 0-.2.2-.2.3-.2h1V8H3v1c0 .1-.1.3-.1.3-.1.1-.3.2-.4.2-.1 0-.3-.1-.3-.1l-2-2C.1 7.2 0 7.1 0 7c0-.1.1-.3.1-.3l2-2c.1-.1.2-.1.3-.1.1 0 .3.1.3.1.2 0 .3.2.3.3v1h3V3H5c-.2 0-.3-.1-.4-.2-.1 0-.1-.2-.1-.3 0-.1.1-.3.1-.4l2-2c.1 0 .2-.1.4-.1.1 0 .3.1.3.1l2 2c.1.1.1.2.1.4 0 .1-.1.3-.1.4-.1 0-.2.1-.3.1H8v3h3V5c0-.1.1-.3.1-.4.1-.1.2-.1.4-.1.1 0 .3.1.4.1l1.9 2z" fill="currentColor"/></symbol><symbol id="equatio-svg-floating-group-header-collapse" viewBox="0 0 8.7 6.4"><path id="Path_745" d="M0 0h8.7L4.4 6.4 0 0z" fill="currentColor"/></symbol><symbol id="equatio-svg-free-license" viewBox="0 0 340 234.5"><path d="M99.5 121.9H36.1c-8.4 0-15.3 6.9-15.3 15.2V181c0 8.4 6.9 15.2 15.3 15.2H49v17.9c0 1 .8 1.8 1.9 1.8 1 0 1.9-.8 1.9-1.8v-17.9h3.5v17.9c0 1 .8 1.8 1.9 1.8 1 0 1.9-.8 1.9-1.8v-17.9H73c8.4 0 15.3-6.9 15.3-15.2v-38.1l14.3-14.3c3.4-3.7 2.2-6.7-3.1-6.7z" fill="#9f5dff"/><g fill="#fff"><path d="M76.5 135.1c-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.8 2.9-2.8 1.6 0 2.9 1.3 2.9 2.8 0 1.6-1.3 2.9-2.9 2.9z"/><ellipse cx="76.5" cy="132.3" rx="2.9" ry="2.9"/></g><path d="M103.7 138.8c.4.7.2 1.6-.6 2.1l-15.8 9c-.7.4-1.6.2-2.1-.6-.4-.7-.2-1.6.6-2.1l15.8-9c.7-.3 1.6-.1 2.1.6zm-99.1.3c-.4.8 0 1.7.7 2l16.4 7.8c.8.4 1.7 0 2-.7.4-.8 0-1.7-.7-2l-16.4-7.8c-.8-.3-1.7 0-2 .7z" fill="#9f5dff"/><g opacity=".37"><radialGradient id="SVGID_1_" cx="836.354" cy="85059.477" r="453.189" gradientTransform="matrix(.2376 0 0 .02555 -137.32 -1956.492)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d1e1c"/><stop offset=".146" stop-color="#1d1e1c" stop-opacity=".854"/><stop offset="1" stop-color="#1d1e1c" stop-opacity="0"/></radialGradient><path d="M61.5 193.9c-64 0-118.3 6.2-140.9 14.9v16.8c22.6 8.7 76.8 14.9 140.9 14.9 83.2 0 150.6-10.4 150.6-23.3.1-12.9-67.4-23.3-150.6-23.3z" fill="url(#SVGID_1_)"/></g><path transform="rotate(-15.729 209.665 30.682)" fill="#00417c" d="M179.9 29.4h59.5v2.7h-59.5z"/><path transform="rotate(-15.729 213.519 44.369)" fill="#00417c" d="M183.8 43h59.5v2.7h-59.5z"/><path transform="rotate(-15.729 217.373 58.056)" fill="#00417c" d="M187.6 56.7h59.5v2.7h-59.5z"/><ellipse transform="rotate(-15.729 193.873 35.336)" cx="193.9" cy="35.3" rx="5" ry="5" fill="#00417c"/><path d="M194.8 30.5c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.4-1.9-2-3.2-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 203.444 32.641)" cx="203.5" cy="32.6" rx="5" ry="5" fill="#00417c"/><path d="M204.4 27.8c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.9-2-3.2-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 218.809 43.176)" cx="218.8" cy="43.2" rx="5" ry="5" fill="#00417c"/><path d="M219.8 38.3c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.8-2-3.1-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 207.52 61.008)" cx="207.5" cy="61" rx="5" ry="5" fill="#00417c"/><path d="M208.5 56.2c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.9-2-3.2-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 231.413 39.626)" cx="231.4" cy="39.6" rx="5" ry="5" fill="#00417c"/><path d="M232.4 34.8c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.9-2-3.2-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 218.37 57.952)" cx="218.4" cy="58" rx="5" ry="5" fill="#00417c"/><path d="M219.3 53.1c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.4-1.9-2-3.2-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 221.408 27.582)" cx="221.4" cy="27.6" rx="5" ry="5" fill="#00417c"/><path d="M222.4 22.7c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.8-2-3.1-3.8-3.5z" fill="#e6e6e6"/><g fill="#00417c"><path d="M193 81.3c-1.5.4-2.9-.5-3.3-1.9L176.1 31c-.4-1.5.4-3 1.8-3.4 1.5-.4 2.9.5 3.3 1.9l13.6 48.4c.4 1.5-.3 3-1.8 3.4z"/><path d="M177.9 27.6L193 81.3c1.7-.5 2.2-1.9 1.8-3.4l-13.6-48.4c-.4-1.5-1.6-2.4-3.3-1.9z"/></g><g fill="#00417c"><path d="M249.9 65.3c-1.5.4-3.3-.3-3.7-1.8L232.5 15c-.4-1.5.8-3.1 2.3-3.5 1.5-.4 3.3.3 3.7 1.8l13.6 48.4c.5 1.6-.7 3.2-2.2 3.6z"/><path d="M235.2 11.4l15.1 53.7c.9-.2 2.2-1.9 1.8-3.4l-13.6-48.4c-.4-1.4-2.4-2.1-3.3-1.9z"/></g><g fill="#00417c"><path d="M253 66l-62.1 17.5c-2.2.6-4.4-.5-5-2.7-.6-2.2.7-4.3 2.9-5l62.1-17.5c2.2-.6 4.4.5 5 2.7.6 2.3-.7 4.4-2.9 5z"/><path d="M185.7 80.4c.7 2.6 3 3.8 5.2 3.2L253 66c2.2-.6 3.5-2.8 2.8-5.4l-70.1 19.8z"/></g><path fill="#515f70" d="M113.3 116.2H229v98.4H113.3z"/><path fill="#3b4651" d="M202 172l6.8 1.8-1.8 6.7 6.7 1.9-1.8 6.7 55.1-31.8-17.3-30.1-50.8 29.4-1.9 6.8 6.8 1.8z"/><path fill="#3b4651" d="M228.9 116.2h-29.4l29.4 51.1z"/><path transform="rotate(-30 245.002 149.36)" fill="#515f70" d="M224.8 85.7h40.5V213h-40.5z"/><path fill="#00b7ff" d="M204.9 170.2l6.7 1.9-1.8 6.7 6.8 1.9-1.8 6.7 55.1-31.8-17.4-30.1-50.8 29.4-1.8 6.8 6.8 1.8zm101.2-65.9c4.1-15.4-5-31.3-20.5-35.4-15.4-4.1-31.3 5-35.4 20.5-4.1 15.4 17.4 47 17.4 47s34.3-16.6 38.5-32.1zm-38.7-10.4c4.1-15.4 15.6-15.1 15.6-15.1s2.6 3.4-1.5 18.9c-4.1 15.4-14.6 26.9-14.6 26.9s-3.7-15.2.5-30.7z"/><path d="M335 154.4c4.1-15.4-5-31.3-20.5-35.4-15.4-4.1-47 17.4-47 17.4s16.6 34.4 32 38.5c15.5 4.1 31.4-5 35.5-20.5zm-30.8 3.3c-15.4-4.1-26.9-14.6-26.9-14.6s15.2-3.6 30.7.5c15.4 4.1 15.1 15.6 15.1 15.6s-3.5 2.7-18.9-1.5z" fill="#00b7ff"/><ellipse transform="rotate(-30 262.561 139.239)" cx="262.6" cy="139.2" rx="17.4" ry="17.4" fill="#07a1d1"/><g fill="#00b7ff"><path d="M148.5 107.4h-10.8c-.5 0-1.1-.1-1.4-.5l-24-24c-.4-.4-.6-.9-.6-1.4V70.7c0-.5.2-1.1.6-1.4l24-23.9c.4-.4.9-.5 1.4-.5h10.8c.5 0 1.1.1 1.4.5l24.1 24c.4.4.7.9.7 1.4v10.8c0 .5-.3 1.1-.7 1.4l-24 23.9c-.4.4-1 .5-1.5.5zm-10-3.9h9.1l22.6-22.8v-9.1l-22.6-22.8h-9.1l-22.9 22.8v9.1l22.9 22.8zm34-22z"/><path d="M143.7 92.4c-.2 0-.4-.1-.5-.2l-15.3-15.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l15.3 15.3c.3.3.3.8 0 1.1-.2.1-.4.2-.6.2z"/><path d="M139.1 97.7c-.4 0-.8-.2-1.1-.5l-23.5-23.5c-.6-.6-.6-1.6 0-2.2.6-.6 1.6-.6 2.2 0l22.4 22.4L142 91c.6-.6 1.6-.6 2.2 0 .6.6.6 1.6 0 2.2l-4 4c-.2.3-.6.5-1.1.5z"/><path d="M142.8 91.9c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l15.3-15.3c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-15.3 15.3c-.2.2-.4.2-.6.2z"/><path d="M139.1 105.5c-.4 0-.8-.2-1.1-.5-.6-.6-.6-1.6 0-2.2l22.4-22.4-2.9-2.9c-.6-.6-.6-1.6 0-2.2.6-.6 1.6-.6 2.2 0l4 4c.6.6.6 1.6 0 2.2L140.2 105c-.3.3-.7.5-1.1.5z"/><path d="M157.8 77c-.2 0-.4-.1-.5-.2L142 61.5c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l15.3 15.3c.3.3.3.8 0 1.1-.2.1-.4.2-.6.2z"/><path d="M170.6 81.5c-.4 0-.8-.2-1.1-.5l-22.4-22.4-2.9 2.9c-.6.6-1.6.6-2.2 0-.6-.6-.6-1.6 0-2.2l4-4c.6-.6 1.6-.6 2.2 0l23.5 23.5c.6.6.6 1.6 0 2.2-.3.4-.7.5-1.1.5z"/><path d="M127.7 77.5c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l15.3-15.3c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-15.3 15.3c-.2.2-.4.2-.6.2z"/><path d="M127.3 77.7c-.4 0-.8-.2-1.1-.5l-4-4c-.6-.6-.6-1.6 0-2.2l23.5-23.5c.6-.6 1.6-.6 2.2 0 .6.6.6 1.6 0 2.2l-22.4 22.4 2.9 2.9c.6.6.6 1.6 0 2.2-.3.4-.7.5-1.1.5z"/></g><path fill="#00b7ff" d="M173 148.6l-5.1 5.2-5.1-5.2-5.2 5.2-5.1-5.2v66h36v-60.8l-5.2-5.2-5.1 5.2z"/></symbol><symbol id="equatio-svg-hamburger" viewBox="0 0 66 54"><path d="M0 10.5c0 .8.7 1.5 1.5 1.5h63c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5h-63C.7 0 0 .7 0 1.5v9zm0 21c0 .8.7 1.5 1.5 1.5h63c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5h-63c-.8 0-1.5.7-1.5 1.5v9zm0 21c0 .8.7 1.5 1.5 1.5h63c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5h-63c-.8 0-1.5.7-1.5 1.5v9z" fill="currentColor"/></symbol><symbol id="equatio-svg-input-area-hint-texthelper" viewBox="0 0 61.3 143"><path d="M58 0H11.6C5 0 0 5.1 0 11.7v86.8c0 6.6 5 12.4 11.6 12.4H18v30.2c0 1 .5 1.8 1.5 1.8s1.5-.8 1.5-1.8V111h4v30.2c0 1 .5 1.8 1.5 1.8s1.5-.8 1.5-1.8V111h6c6.6 0 12-5.8 12-12.4V18L59.8 4.4C62.3 1.9 61.5 0 58 0z" fill="#fd3269"/><g fill="#fff"><path d="M34.5 11.5c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7.1 1.5-1.2 2.7-2.7 2.7z"/><path d="M37.3 8.8c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.4 0 2.7 1.2 2.7 2.7z"/></g></symbol><symbol id="equatio-svg-input-button-copy" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><g id="XMLID_71_" opacity=".54"><path fill="none" d="M15.521 15.521h16.958v16.958H15.521z"/><path d="M26.826 16.228h-8.479c-.78 0-1.413.633-1.413 1.413v9.892h1.413v-9.892h8.479v-1.413zm2.12 2.826h-7.772c-.78 0-1.413.633-1.413 1.413v9.892c0 .78.633 1.413 1.413 1.413h7.772c.78 0 1.413-.633 1.413-1.413v-9.892c0-.78-.633-1.413-1.413-1.413zm0 11.305h-7.772v-9.892h7.772v9.892z"/></g></symbol><symbol id="equatio-svg-input-button-cut" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><path d="M22.538 19.615a2.923 2.923 0 1 0-2.924 2.923c.429 0 .832-.097 1.199-.263L22.538 24l-1.725 1.724a2.895 2.895 0 0 0-1.199-.263 2.923 2.923 0 1 0 2.923 2.923c0-.428-.097-.832-.263-1.199L24 25.462l4.385 4.385h2.923l-9.033-9.033c.166-.367.263-.771.263-1.199zm-2.923 1.462a1.462 1.462 0 1 1 0-2.924 1.462 1.462 0 0 1 0 2.924zm0 8.77a1.462 1.462 0 1 1 0-2.924 1.462 1.462 0 0 1 0 2.924zM24 23.635a.364.364 0 1 1 .001.729.364.364 0 0 1-.001-.729zm7.309-5.482h-2.923l-3.654 3.654 1.462 1.462 5.115-5.116z" fill="#666a70" id="XMLID_69_"/></symbol><symbol id="equatio-svg-input-button-delete" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><g fill="#666a70"><path d="M28.5 19.9h-9.2c-.3 0-.5.2-.5.5v9.9c0 1.1.9 2 1.9 2h6.2c1.1 0 1.9-.9 1.9-2v-9.9c.1-.3 0-.5-.3-.5zm1.1-2c0 .5-.4.9-1 .9h-9.2c-.5 0-1-.4-1-.9s.4-.9 1-.9h9.2c.5-.1 1 .3 1 .9z"/><path d="M26.5 18.1v-1.3c0-.6-1.2-1-2.6-1-1.4 0-2.6.5-2.6 1v1.3h5.2z"/></g></symbol><symbol id="equatio-svg-input-button-download" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><path d="M31 24v7H17v-7h-2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .7l2.6-2.6 1.4 1.4-5 5-5-5 1.4-1.4 2.6 2.6V15h2v9.7z" fill="#fff"/><path fill="none" d="M-2 14h24v24H-2V14z"/></symbol><symbol id="equatio-svg-input-button-insert" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><path id="Path_1375" d="M16.8 33.2h14.4c1.1 0 2-.9 2-2V16.8c0-1.1-.9-2-2-2.1H16.8c-1.1 0-2.1.9-2.1 2.1v14.4c.1 1.1 1 2 2.1 2zm0-12.3h4.1c0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1h4.1v10.3H16.8V20.9zm3.1 5.2H22v3.1h4.1v-3.1h2.1L24 21.9l-4.1 4.2z" fill="#fff"/></symbol><symbol id="equatio-svg-input-button-math-white" viewBox="0 0 45 45"><circle cx="24" cy="24" r="18" fill="currentColor"/><g fill="#fff"><path d="M20.08 22.5a.66.66 0 0 1-.495-.222l-3.899-4.386a.662.662 0 0 1 .495-1.102h6.514a.662.662 0 1 1 0 1.324h-5.04l2.92 3.285a.661.661 0 0 1-.495 1.101z"/><path d="M22.695 26.886h-6.514a.662.662 0 0 1-.495-1.102l3.899-4.386a.661.661 0 1 1 .989.879l-2.92 3.285h5.04a.662.662 0 0 1 .001 1.324z"/></g></symbol><symbol id="equatio-svg-input-button-math" viewBox="0 0 45 45"><circle cx="24" cy="24" r="18" fill="currentColor"/><g fill="#494949"><path d="M20.08 22.5a.66.66 0 0 1-.495-.222l-3.899-4.386a.662.662 0 0 1 .495-1.102h6.514a.662.662 0 1 1 0 1.324h-5.04l2.92 3.285a.661.661 0 0 1-.495 1.101z"/><path d="M22.695 26.886h-6.514a.662.662 0 0 1-.495-1.102l3.899-4.386a.661.661 0 1 1 .989.879l-2.92 3.285h5.04a.662.662 0 0 1 .001 1.324z"/></g></symbol><symbol id="equatio-svg-input-button-microphone" viewBox="0 0 25 25"><g fill="currentColor"><path d="M19.1 10.1c0-.2-.2-.4-.4-.4h-.9c-.2 0-.4.2-.4.4v2.4c0 2.3-2.2 4.1-4.8 4.1-2.6 0-4.8-1.8-4.8-4.1v-2.4c0-.2-.2-.4-.4-.4h-1c-.2 0-.4.2-.4.4v2.5c0 2.9 2.5 5.3 5.7 5.6v2.3h-2c-.2 0-.4.2-.4.4v.8c0 .2.2.4.4.4h5.7c.2 0 .4-.2.4-.4v-.8c0-.2-.2-.4-.4-.4h-2v-2.3c3.2-.4 5.7-2.7 5.7-5.6v-2.5z"/><path d="M12.5 15.3c1.8 0 3.3-1.3 3.3-2.8V5.9c0-1.6-1.5-2.8-3.3-2.8S9.2 4.3 9.2 5.9v6.6c0 1.5 1.5 2.8 3.3 2.8z"/></g></symbol><symbol id="equatio-svg-input-button-my" viewBox="0 0 25 25"><path d="M6 9.1c0-.5.3-.8.8-.8h.5c.5 0 .7.2.9.6l1.5 3.4 1.5-3.4c.2-.4.4-.6.8-.6h.4c.5 0 .8.3.8.8v5.7c0 .5-.2.8-.6.8h-.3c-.4 0-.6-.3-.6-.8v-4.3l-1.2 2.9c-.1.3-.2.5-.8.5-.7 0-.7-.2-.8-.5l-1.2-2.9v4.2c0 .5-.2.8-.6.8h-.5c-.5 0-.6-.3-.6-.8V9.1zm7.8 1.4c0-.1.4-.5.9-.5.4 0 .7.2.9.8l1.2 3.1 1.1-3.1c.2-.6.5-.8.9-.8s.9.4.9.4l-2.5 6.5c-.2.6-.5.8-.9.8-.5 0-.9-.4-.8-.4l.9-2.1c-.3 0-.4-.1-.5-.4l-2.1-4.3z" fill="currentColor"/></symbol><symbol id="equatio-svg-input-button-paste" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><path d="M29.444 17H26.19a2.327 2.327 0 0 0-2.191-1.556A2.329 2.329 0 0 0 21.808 17h-3.254c-.858 0-1.554.697-1.554 1.556V31c0 .859.697 1.556 1.556 1.556h10.889c.858 0 1.555-.697 1.555-1.556V18.556c0-.859-.697-1.556-1.556-1.556zM24 17a.778.778 0 1 1 0 1.556A.778.778 0 0 1 24 17zm5.444 14H18.555V18.556h1.556v2.333h7.778v-2.333h1.556V31z" fill="#666a70" id="XMLID_70_"/></symbol><symbol id="equatio-svg-input-button-redo" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><path d="M24.791 18.105v-3.5l5 5-5 5v-4.5a6 6 0 1 0 6 6h2a8 8 0 1 1-8-8z" fill="#676b71"/></symbol><symbol id="equatio-svg-input-button-save" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><path d="M29.2 14.2H17.8c-1 0-1.9.9-1.9 1.9v13.2c0 1 .8 1.9 1.9 1.9H31c1 0 1.9-.9 1.9-1.9V17.9l-3.7-3.7zm-4.8 15.1c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zm2.9-9.5h-9.4V16h9.4v3.8z" fill="#666a70"/></symbol><symbol id="equatio-svg-input-button-share" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><path d="M30.29 27.379c-.764 0-1.454.297-1.979.773l-5.417-3.195c.073-.309.122-.625.122-.957 0-.342-.053-.668-.131-.986l5.402-3.186a2.942 2.942 0 0 0 2.003.793 2.956 2.956 0 0 0 2.957-2.957 2.956 2.956 0 0 0-2.957-2.957 2.956 2.956 0 0 0-2.957 2.957c0 .246.039.481.096.71l-5.284 3.115a4.11 4.11 0 0 0-3.261-1.62 4.131 4.131 0 1 0 0 8.264 4.113 4.113 0 0 0 3.28-1.644l5.273 3.11a2.954 2.954 0 0 0-.104.738 2.956 2.956 0 0 0 2.957 2.957 2.957 2.957 0 1 0 0-5.915z" fill="#fff" id="share-alt_2_"/></symbol><symbol id="equatio-svg-input-button-submit" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><path d="M16.5 32.2l19-8.2-19-8.2v6.3L30.1 24l-13.6 1.8v6.4z" fill="#fff"/></symbol><symbol id="equatio-svg-input-button-undo" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><path d="M24 17.385v-3.5l-5 5 5 5v-4.5a6 6 0 1 1-6 6h-2a8 8 0 1 0 8-8z" fill="#676b71"/></symbol><symbol id="equatio-svg-input-handwriting-placeholder" viewBox="0 0 1169.4 142.4"><path d="M23 29.3s82-24 99 26c0 0 17 50-112 77L48.2 10" class="lrszlYjZ_0" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M150.6 79.2s3 24.2-8 53.2c0 0 8-47 59-51" class="lrszlYjZ_1" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M252.6 90.4s1-48-51 33c0 0 4 17 25.5 0s32.5 0 32.5 0 17 13.1 28 7.6" class="lrszlYjZ_2" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M327 78.1s-56 99.8 30 16.4c0 0 18.1 97.3 54-20.5" class="lrszlYjZ_3" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M555.1 128.2s56-99.8-30-16.4c0 0-18.1-97.3-54 20.5" class="lrszlYjZ_4" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M640 90.4s1-48-51 33c0 0 4 17 25.5 0s32.5 0 32.5 0 17 13.1 28 7.6" class="lrszlYjZ_5" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M722 39.5s-56 117.4 14 88.2" class="lrszlYjZ_6" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M746 73.7l-71-12" class="lrszlYjZ_7" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M779 35.3l-18 97s36-118 50 0" class="lrszlYjZ_8" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M889.1 35.3l-18 97s36-118 50 0" class="lrszlYjZ_9" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M992.2 126.9s-73 24-35-28.5 60-24.5 51-11.5-12 20.8-49 20.9" class="lrszlYjZ_10" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M1033.8 79.2s3 24.2-8 53.2c0 0 8-47 59-51" class="lrszlYjZ_11" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M1141.4 126.9s-73 24-35-28.5 60-24.5 51-11.5-12 20.8-49 20.9" class="lrszlYjZ_12" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><style>.lrszlYjZ_0{stroke-dasharray:389 391;stroke-dashoffset:390;animation:lrszlYjZ_draw 303ms ease 0ms forwards}.lrszlYjZ_1{stroke-dasharray:139 141;stroke-dashoffset:140;animation:lrszlYjZ_draw 108ms ease 303ms forwards}.lrszlYjZ_2{stroke-dasharray:182 184;stroke-dashoffset:183;animation:lrszlYjZ_draw 142ms ease 412ms forwards}.lrszlYjZ_3,.lrszlYjZ_4{stroke-dasharray:227 229;stroke-dashoffset:228;animation:lrszlYjZ_draw 177ms ease 555ms forwards}.lrszlYjZ_4{animation:lrszlYjZ_draw 177ms ease 732ms forwards}.lrszlYjZ_5{stroke-dasharray:182 184;stroke-dashoffset:183;animation:lrszlYjZ_draw 142ms ease 910ms forwards}.lrszlYjZ_6{stroke-dasharray:126 128;stroke-dashoffset:127;animation:lrszlYjZ_draw 98ms ease 1052ms forwards}.lrszlYjZ_7{stroke-dasharray:73 75;stroke-dashoffset:74;animation:lrszlYjZ_draw 57ms ease 1151ms forwards}.lrszlYjZ_8,.lrszlYjZ_9{stroke-dasharray:221 223;stroke-dashoffset:222;animation:lrszlYjZ_draw 172ms ease 1209ms forwards}.lrszlYjZ_9{animation:lrszlYjZ_draw 172ms ease 1381ms forwards}.lrszlYjZ_10{stroke-dasharray:215 217;stroke-dashoffset:216;animation:lrszlYjZ_draw 168ms ease 1554ms forwards}.lrszlYjZ_11{stroke-dasharray:139 141;stroke-dashoffset:140;animation:lrszlYjZ_draw 108ms ease 1722ms forwards}.lrszlYjZ_12{stroke-dasharray:215 217;stroke-dashoffset:216;animation:lrszlYjZ_draw 168ms ease 1831ms forwards}@keyframes lrszlYjZ_draw{to{stroke-dashoffset:0}}@keyframes lrszlYjZ_fade{0%,93.54838709677419%{stroke-opacity:1}to{stroke-opacity:0}}</style></symbol><symbol id="equatio-svg-logo-blue" viewBox="0 0 1628.5 373.4"><path d="M599.3 185.4c0-64.3 29.8-94.5 80.4-94.5 44.7 0 76.8 25.5 76.8 77.2v172.5c0 7.1-5.5 12.5-12.5 12.5-7.1 0-12.5-5.5-12.5-12.5V254c-9 12.5-28.2 25.5-53.3 25.5-50.7 0-78.9-29.8-78.9-94.1zm132.1-17.3c0-37.2-21.6-54.5-51.7-54.5-36.1 0-55.3 22.7-55.3 71.7 0 48.2 19.6 71.3 55.3 71.3 36.8 0 51.7-34.5 51.7-34.5v-54zm92.9-62.3v102.3c0 25.5 8.2 47.4 47.8 47.4 39.6 0 47.8-22 47.8-47.4V105.8c0-7.1 5.9-12.5 12.9-12.5 6.7 0 12.2 5.5 12.2 12.5v102.3c0 37.2-12.2 71.3-72.9 71.3-60.4 0-72.9-34.1-72.9-71.3V105.8c0-7.1 5.5-12.5 12.5-12.5 6.7-.1 12.6 5.4 12.6 12.5zm187.8 28.6c-3.9 4.3-6.7 5.5-10.2 5.5-6.3 0-11.4-5.1-11.4-11.4 0-2.7.8-4.7 2-6.7 11-17.2 32.1-31 65.1-31 45.5 0 70.6 26.7 70.6 66.6v107.8c0 6.7-5.5 12.2-12.2 12.2-6.7 0-12.2-5.5-12.2-12.2v-14.1c-9.8 18.4-32.5 28.2-56.1 28.2-41.6 0-67.8-20-67.8-56.1 0-34.5 26.3-55.3 68.6-55.3h55.3v-10.6c0-26.7-17.6-43.1-46.3-43.1-20.7.2-33.3 6.5-45.4 20.2zm91.7 72.1V190h-55.3c-25.5 0-43.1 10.6-43.1 33.3 0 20.4 14.1 33.3 44.7 33.3 27.5.1 53.7-16.7 53.7-50.1zM1185 55.2c0-6.7 5.9-12.5 12.5-12.5 7.1 0 12.5 5.9 12.5 12.5v35.7h25.5c6.7 0 11.8 5.1 11.8 11.8 0 6.7-5.1 11.8-11.8 11.8H1210v113.7c0 16.9 9.4 25.9 22.7 25.9 6.7 0 12.2 5.1 12.2 11.8 0 6.7-5.5 11.8-12.2 11.8-31 0-47.8-20.8-47.8-49.4V114.4h-15.3c-6.7 0-11.8-5.1-11.8-11.8 0-6.7 5.1-11.8 11.8-11.8h15.3V55.2zM1309.3 265c0 7.1-5.5 12.5-12.5 12.5s-12.5-5.5-12.5-12.5V55.6c0-7.1 5.5-12.5 12.5-12.5s12.5 5.5 12.5 12.5V265zm244.4-103.3c0 80.1-39.1 117.8-102.6 117.8-63 0-102.6-37.6-102.6-117.8S1388 44.4 1451.1 44.4c63.5 0 102.6 37.1 102.6 117.3zm-25.9 0c0-66.7-28.1-96.3-76.8-96.3-48.7 0-76.8 29.6-76.8 96.3 0 67.8 28.1 96.9 76.8 96.9 48.8-.1 76.8-29.2 76.8-96.9zm-1010 35.6c-3.4 0-6.8-1.4-9.3-4.2l-73.2-82.4c-3.3-3.7-4.1-8.9-2-13.4s6.4-7.3 11.3-7.3H567c6.9 0 12.4 5.6 12.4 12.4s-5.6 12.4-12.4 12.4h-94.7l54.8 61.7c4.6 5.1 4.1 13-1 17.6-2.4 2.2-5.4 3.2-8.3 3.2z" fill="#00b7ff"/><path d="M566.9 279.7H444.5c-4.9 0-9.3-2.9-11.3-7.3s-1.2-9.7 2-13.4l73.2-82.4c4.6-5.1 12.4-5.6 17.6-1 5.1 4.6 5.6 12.4 1 17.6l-54.8 61.7h94.7c6.9 0 12.4 5.6 12.4 12.4s-5.5 12.4-12.4 12.4zm-348 93.7h-64.3c-3.2 0-6.3-1.3-8.5-3.5L3.5 227.4c-2.3-2.3-3.5-5.3-3.5-8.5v-64.3c0-3.2 1.3-6.3 3.5-8.5L146 3.5c2.3-2.3 5.3-3.5 8.5-3.5h64.3c3.2 0 6.3 1.3 8.5 3.5L369.9 146c2.3 2.3 3.5 5.3 3.5 8.5v64.3c0 3.2-1.3 6.3-3.5 8.5L227.4 369.9c-2.3 2.3-5.3 3.5-8.5 3.5zm-59.3-24.1h54.3l135.4-135.4v-54.3L213.9 24.1h-54.3L24.1 159.6v54.3l135.5 135.4zm201.8-130.4z" fill="#00b7ff"/><path d="M190.5 283.4c-1.2 0-2.4-.4-3.2-1.3L96.1 191c-1.8-1.8-1.8-4.7 0-6.5 1.8-1.8 4.7-1.8 6.5 0l91.1 91.1c1.8 1.8 1.8 4.7 0 6.5-.9.8-2.1 1.3-3.2 1.3z" fill="#00b7ff"/><path d="M163.3 314.7c-2.5 0-4.9-1-6.6-2.7L17 172.3c-3.7-3.7-3.7-9.6 0-13.3 3.7-3.7 9.6-3.7 13.3 0l133 133 17-17c3.7-3.7 9.6-3.7 13.3 0 3.7 3.7 3.7 9.6 0 13.3L170 311.9c-1.9 1.8-4.3 2.8-6.7 2.8z" fill="#00b7ff"/><path d="M184.9 280.5c-1.2 0-2.4-.4-3.2-1.3-1.8-1.8-1.8-4.7 0-6.5l91.1-91.1c1.8-1.8 4.7-1.8 6.5 0 1.8 1.8 1.8 4.7 0 6.5l-91.1 91.1c-.9.9-2.1 1.3-3.3 1.3z" fill="#00b7ff"/><path d="M162.9 361.1c-2.4 0-4.8-.9-6.6-2.7-3.7-3.7-3.7-9.6 0-13.3l133-133-17-17c-3.7-3.7-3.7-9.6 0-13.3 3.7-3.7 9.6-3.7 13.3 0l23.6 23.6c3.7 3.7 3.7 9.6 0 13.3L169.5 358.3c-1.8 1.9-4.2 2.8-6.6 2.8z" fill="#00b7ff"/><path d="M274.1 191.8c-1.2 0-2.4-.4-3.2-1.3l-91.1-91.1c-1.8-1.8-1.8-4.7 0-6.5s4.7-1.8 6.5 0l91.1 91.1c1.8 1.8 1.8 4.7 0 6.5-.9.8-2.1 1.3-3.3 1.3z" fill="#00b7ff"/><path d="M349.9 218.6c-2.4 0-4.8-.9-6.6-2.7l-133-133-17 17c-3.7 3.7-9.6 3.7-13.3 0-3.7-3.7-3.7-9.6 0-13.3L203.6 63c3.7-3.7 9.6-3.7 13.3 0l139.7 139.7c3.7 3.7 3.7 9.6 0 13.3-1.9 1.7-4.3 2.6-6.7 2.6z" fill="#00b7ff"/><path d="M95.6 195c-1.2 0-2.4-.4-3.2-1.3-1.8-1.8-1.8-4.7 0-6.5l91.1-91.1c1.8-1.8 4.7-1.8 6.5 0 1.8 1.8 1.8 4.7 0 6.5l-91.1 91.1c-1 .8-2.1 1.3-3.3 1.3z" fill="#00b7ff"/><path d="M92.7 196.2c-2.4 0-4.8-.9-6.6-2.7l-23.6-23.6c-3.7-3.7-3.7-9.6 0-13.3L202.1 16.9c3.7-3.7 9.6-3.7 13.3 0 3.7 3.7 3.7 9.6 0 13.3l-133 133 17 17c3.7 3.7 3.7 9.6 0 13.3-1.9 1.8-4.3 2.7-6.7 2.7zM1602.9 35.7c15.1 0 25.6 10.8 25.6 25.8s-10.7 26-25.7 26c-15.2 0-25.6-10.8-25.6-25.9 0-14.9 10.6-25.9 25.7-25.9zm0 47.2c12.3 0 20.7-8.9 20.7-21.3s-8.7-21.4-20.8-21.4c-12.4 0-20.7 8.9-20.7 21.3 0 12.3 8.6 21.4 20.8 21.4zm-11-30.9c0-2.6 1.4-4 3.8-4h8.2c7.3 0 11.2 2.8 11.2 8.7 0 4.1-2.2 6.9-6.3 7.9l6.2 8.1c.3.5-1.8 2.6-4.2 2.6-1.3 0-3-.6-4.2-2.7l-4.7-6.7h-2.8v5.9c0 2.1-1.1 3.3-3.2 3.3h-1c-2 0-3.1-1.5-3.1-4.1V52zm11.6 8.6c2.8 0 4.4-1.3 4.4-3.5 0-2.4-1.5-3.5-4.5-3.5h-4.4v7h4.5z" fill="#00b7ff"/></symbol><symbol id="equatio-svg-logo-icon" viewBox="0 0 37.4 37.4"><g fill="#00b7ff"><path transform="rotate(-45.001 18.711 18.71)" d="M13.1 13.1h11.2v11.2H13.1z"/><path d="M18.7 27.9c-.3 0-.7-.1-.9-.4l-7.9-7.9c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9l7.9-7.9c.5-.5 1.3-.5 1.8 0l7.9 7.9c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-7.9 7.9c-.2.3-.6.4-.9.4zm-6.1-9.2l6.1 6.1 6.1-6.1-6.1-6.1-6.1 6.1z"/><path d="M21.1 8.5l13.3 13.3L21 35.1h-3.1l13.3-13.3c.2-.2.3-.5.3-.7 0-.3-.1-.5-.3-.7L28.8 18c-.4-.4-1.1-.4-1.5 0l-7.9-7.9 1.7-1.6z"/><path d="M21 36.4h-3.1c-.5 0-1-.3-1.2-.8-.2-.5-.1-1 .3-1.4l13.1-13.1-2-2c-.2.1-.5.2-.7.2-.3 0-.7-.1-.9-.4l-8-7.9c-.5-.5-.5-1.3 0-1.8l1.6-1.6c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l13.3 13.3c.5.5.5 1.3 0 1.8L21.9 36c-.2.2-.5.4-.9.4z"/><path d="M21.8 3.1l13.3 13.3v3.1L21.8 6.2c-.4-.4-1.1-.4-1.5 0L18 8.6c-.2.2-.3.5-.3.7 0 .3.1.5.3.7l-7.9 8-1.6-1.6L21.8 3.1z"/><path d="M35.1 20.8c-.3 0-.7-.1-.9-.4L21.1 7.3l-2 2c.3.5.3 1.2-.2 1.6l-7.9 8c-.2.2-.6.4-.9.4-.3 0-.7-.1-.9-.4l-1.6-1.6c-.2-.2-.4-.6-.4-.9s.1-.7.4-.9L20.9 2.2c.5-.5 1.3-.5 1.8 0L36 15.5c.2.2.4.6.4.9v3.1c0 .5-.3 1-.8 1.2-.2.1-.3.1-.5.1z"/><path d="M2.3 17.9l13.3 13.3c.2.2.5.3.7.3.3 0 .5-.1.7-.3l2.3-2.3c.2-.2.3-.5.3-.7 0-.3-.1-.5-.3-.7l7.9-7.9 1.6 1.6-13.1 13.1L2.3 21v-3.1z"/><path d="M15.7 35.6c-.3 0-.7-.1-.9-.4L1.4 21.9c-.2-.2-.4-.5-.4-.9v-3.1c0-.5.3-1 .8-1.2.5-.2 1-.1 1.4.3l13.1 13.1 2-2c-.3-.5-.3-1.2.2-1.6l7.9-7.9c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l1.6 1.6c.5.5.5 1.3 0 1.8L16.6 35.3c-.3.2-.6.3-.9.3zm2.8-7.7z"/><path d="M16.4 2.3h3.1L6.2 15.6c-.2.2-.3.5-.3.7 0 .3.1.5.3.7l2.3 2.3c.4.4 1.1.4 1.5 0l7.9 7.9-1.6 1.6L3.1 15.7 16.4 2.3z"/><path d="M16.4 30.2c-.3 0-.7-.1-.9-.4L2.2 16.6c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9L15.5 1.4c.2-.2.6-.4.9-.4h3.1c.5 0 1 .3 1.2.8s.1 1-.3 1.4L7.3 16.4l2 2c.1-.1.2-.1.2-.1.5-.2 1-.1 1.4.3l7.9 7.9c.5.5.5 1.3 0 1.8l-1.6 1.6c-.2.2-.5.3-.8.3z"/><path d="M21 1.3h.4c.1 0 .1.1.2.1 0 0 .1 0 .1.1.1.1.2.2.3.4.1.1.1.3.1.4 0 .3-.1.5-.3.7l-.8-.7h-1.5l.7-.7c.3-.2.6-.3.8-.3z"/><path d="M21.8 4.4c-.3 0-.7-.1-.9-.4l-.4-.4h-1c-.5 0-1-.3-1.2-.8-.2-.5-.1-1 .3-1.4l.7-.7C19.8.2 20.4 0 21 0h.5c.1 0 .1 0 .2.1 0 0 .1 0 .2.1.2.1.3.1.4.2l.1.1c.1 0 .1.1.2.1.2.2.4.5.5.8.1.3.2.6.2.9 0 .6-.3 1.2-.7 1.7-.2.2-.5.4-.8.4zm-.5-1.6zm-.1-.2zm-.1 0zm0-1.3H21h.1z"/><path d="M21.1 2.6h-.2c-.7 0-1.3-.6-1.3-1.3.1-.7.7-1.3 1.4-1.3h.3c.6.1 1.1.6 1.1 1.3v.2c-.1.6-.6 1.1-1.3 1.1zm.1-1.3z"/><path d="M21.2 2.6H21c-.6-.1-1.2-.6-1.2-1.3 0-.7.6-1.3 1.3-1.3h.3c.7.1 1.2.7 1.1 1.4-.1.7-.6 1.2-1.3 1.2zm-.1 0zm.3-1.3h-.1.1z"/><path d="M21.4 2.6c-.1 0-.3 0-.4-.1-.6-.1-1-.7-1-1.3V.9c.1-.7.8-1.1 1.5-1 .1 0 .2 0 .3.1.5.2.9.7.9 1.2 0 .1 0 .3-.1.4-.2.7-.7 1-1.2 1zm-.4 0zm-.1 0zm.5-1.2z"/><path d="M21.4 2.7c-.2 0-.4 0-.5-.1-.5-.2-.8-.7-.8-1.2 0-.1 0-.3.1-.4.2-.7 1-1 1.7-.8 0 0 .1 0 .2.1.5.2.7.7.7 1.2 0 .2 0 .4-.1.6-.3.3-.8.6-1.3.6zm.3-1.1c0-.1 0-.1 0 0 0-.1 0-.1 0 0z"/><path d="M21.7 2.8c-.3 0-.6-.1-.8-.3-.6-.4-.7-1.2-.3-1.7.4-.6 1.1-.8 1.7-.4l.3.3c.3.2.4.5.4.8 0 .3-.1.7-.4.9-.2.3-.6.4-.9.4zm-.9-.3z"/><path d="M22.1 2.3c0-.1 0-.3-.1-.4-.1-.1-.1-.3-.3-.4l14.1 14.1c.2.2.3.5.3.7V21c0-.3-.1-.5-.3-.7l-.7-.7v-3.1L21.8 3.1c.2-.2.3-.5.3-.8z"/><path d="M36.1 22.3c-.7 0-1.2-.5-1.3-1.2l-.7-.7c-.2-.2-.4-.6-.4-.9v-2.6L20.9 4c-.2-.2-.4-.6-.4-.9 0-.3.1-.5.2-.7-.4-.5-.4-1.1 0-1.6s1.2-.6 1.8-.2c.1.1.1.1.2.1l14.1 14.1c.4.4.7 1 .7 1.7V21c-.1.7-.7 1.3-1.4 1.3zM34.8 21zM20.9 2.5z"/><path d="M19.5 2.3H21l-14 14 2.3 2.3.7.7c-.4.4-1.1.4-1.5 0L6.2 17c-.2-.2-.3-.5-.3-.7 0-.3.1-.5.3-.7L19.5 2.3z"/><path d="M9.3 21c-.6 0-1.2-.2-1.6-.7L5.3 18c-.4-.4-.7-1-.7-1.7 0-.6.2-1.2.7-1.7L18.6 1.4c.2-.2.6-.4.9-.4H21c.5 0 1 .3 1.2.8.2.5.1 1-.3 1.4L8.8 16.4l1.4 1.4s.1 0 .1.1l.7.7c.2.2.4.6.4.9 0 .3-.1.7-.4.9-.5.4-1.1.6-1.7.6z"/><path d="M21 2.3l.8.8L8.5 16.4l1.6 1.6-.8.7L7 16.4z"/><path d="M9.3 20c-.3 0-.7-.1-.9-.4l-2.3-2.3c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9l14-14c.5-.5 1.3-.5 1.8 0l.7.7c.2.2.4.6.4.9 0 .3-.1.7-.4.9L10.3 16.4l.7.7c.5.5.5 1.3 0 1.8l-.7.7c-.3.3-.6.4-1 .4z"/><path d="M20.3 6.2c.4-.4 1.1-.4 1.5 0l13.3 13.3V21l-14-14-2.3 2.3-.8.8c-.2-.2-.3-.5-.3-.7 0-.3.1-.5.3-.7l2.3-2.5z"/><path d="M35.1 22.3c-.3 0-.7-.1-.9-.4L21.1 8.8 18.9 11c-.2.2-.6.4-.9.4-.3 0-.7-.1-.9-.4-.4-.4-.7-1-.7-1.7 0-.6.2-1.2.7-1.6l2.3-2.3c.9-.9 2.4-.9 3.3 0L36 18.6c.2.2.4.6.4.9V21c0 .5-.3 1-.8 1.2-.2.1-.3.1-.5.1z"/><path d="M21.1 7l14 14-.8.8L21.1 8.5l-1.6 1.6-.8-.8z"/><path d="M34.3 23.1c-.3 0-.7-.1-.9-.4L21.1 10.3l-.7.7c-.2.2-.6.4-.9.4-.3 0-.7-.1-.9-.4l-.7-.7c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9l2.3-2.3c.5-.5 1.3-.5 1.8 0l14 14c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-.7.7c-.3.2-.6.3-1 .4z"/><path transform="rotate(-45.001 18.712 10.074)" d="M18.2 9.5h1.1v1.1h-1.1z"/><path d="M18.7 12.1c-.3 0-.7-.1-.9-.4l-.7-.7c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9l.7-.7c.5-.5 1.3-.5 1.8 0l.7.7c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-.7.7c-.2.3-.6.4-.9.4z"/><path transform="rotate(-45.001 23.03 14.392)" d="M22.5 8.8h1V20h-1z"/><path d="M26.6 20c-.3 0-.7-.1-.9-.4l-7.9-7.9c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9l.7-.7c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l7.9 7.9c.5.5.5 1.3 0 1.8l-.7.7c-.2.3-.6.4-.9.4z"/><path transform="rotate(-45.001 14.393 14.393)" d="M8.8 13.9H20V15H8.8z"/><path d="M10.8 20c-.3 0-.7-.1-.9-.4l-.7-.7c-.5-.5-.5-1.3 0-1.8l7.9-7.9c.5-.5 1.3-.5 1.8 0l.7.7c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-7.9 7.9c-.2.3-.5.4-.9.4zm-9.2-4.3L15.7 1.6c.2-.2.5-.3.7-.3H21c-.3 0-.5.1-.7.3l-.7.7h-3.1L3.1 15.7c-.3-.3-.8-.4-1.1-.2-.2 0-.3.1-.4.2z"/><path d="M1.6 17c-.3 0-.6-.1-.8-.3-.5-.5-.6-1.2-.2-1.8l.1-.1L14.7.7c.4-.4 1-.7 1.7-.7H21c.7 0 1.3.6 1.3 1.3 0 .7-.5 1.2-1.2 1.3l-.7.7c-.2.2-.6.4-.9.4h-2.6L4 16.6c-.4.4-1.1.5-1.6.1-.3.2-.6.3-.8.3z"/><path d="M3.1 15.7l13.3 13.2 1.6-1.6.7.8-2.3 2.3-14.1-14z"/><path d="M16.4 31.7c-.3 0-.7-.1-.9-.4l-14-14c-.3-.2-.5-.6-.5-.9 0-.3.1-.7.4-.9l.7-.7c.5-.5 1.3-.5 1.8 0l12.4 12.4.7-.7c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l.7.7c.5.5.5 1.3 0 1.8l-2.3 2.3c-.2.3-.5.4-.8.4z"/><path d="M1.6 15.7c-.1.1-.1.1-.1.2 0-.1 0-.1.1-.2z"/><path d="M1.4 17.2c-.2 0-.4 0-.6-.1-.4-.2-.7-.7-.7-1.1 0-.2 0-.4.1-.6.1-.2.2-.3.3-.5.5-.5 1.3-.6 1.8-.1.3.3.4.6.4 1 0 .3-.1.6-.3.8-.1.4-.5.6-1 .6zm0-1.3s0 .1 0 0c0 .1 0 0 0 0z"/><path d="M1.4 17.3c-.1 0-.3 0-.4-.1-.7-.2-1-1-.8-1.6.1-.2.1-.3.2-.4.4-.6 1.3-.6 1.8-.2.3.3.5.6.5 1 0 .2 0 .4-.1.6-.3.4-.7.7-1.2.7zm1-.6zm0 0zm-1.1-.5s0 .1 0 0c0 .1 0 0 0 0z"/><path d="M1.3 17.6h-.1c-.7-.1-1.2-.7-1.2-1.3 0-.2 0-.3.1-.5.2-.7 1-1 1.6-.8.5.2.9.7.9 1.2v.2c-.1.7-.7 1.2-1.3 1.2zm1.2-1zm0 0z"/><path d="M1.3 16.3zm0 1.3c-.6 0-1.2-.4-1.3-1.1V16c.1-.7.8-1.2 1.5-1 .6.1 1 .7 1 1.3v.1c0 .6-.5 1.1-1.1 1.2h-.1zm1.3-1.1z"/><path d="M1.3 16.3v-.1c0-.1 0-.2.1-.2 0-.1.1-.1.1-.2.1-.1.2-.2.4-.3.4-.2.8-.1 1.1.2l-.7.7v1.5l-.7-.7c-.2-.3-.3-.5-.3-.9 0 .1 0 0 0 0z"/><path d="M2.3 19.2c-.3 0-.7-.1-.9-.4l-.7-.7C.2 17.6 0 17 0 16.4v-.5c0-.2.1-.3.1-.5 0 0 0-.1.1-.1v-.1c.1-.2.2-.3.3-.4.2-.2.5-.5.8-.6.9-.4 1.9-.2 2.6.5.2.2.4.6.4.9 0 .3-.1.7-.4.9l-.4.4v.9c0 .5-.3 1-.8 1.2 0 .1-.2.2-.4.2z"/><path d="M2.3 16.4l14 14 2.3-2.3.7-.7c.2.2.3.5.3.7 0 .3-.1.5-.3.7L17 31.1c-.2.2-.5.3-.7.3-.3 0-.5-.1-.7-.3L2.3 17.9v-1.5z"/><path d="M16.4 32.8c-.6 0-1.2-.2-1.7-.7L1.4 18.8c-.2-.2-.4-.6-.4-.9v-1.5c0-.5.3-1 .8-1.2.5-.2 1-.1 1.4.3l13.1 13.1 2.2-2.2c.2-.2.6-.4.9-.4.3 0 .7.1.9.4.4.4.7 1 .7 1.7 0 .6-.2 1.2-.7 1.7L18 32.1c-.4.4-1 .7-1.6.7zm2.1-4.9z"/><path d="M27.3 18c.4-.4 1.1-.4 1.5 0l2.3 2.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7L17.9 35.1h-1.5l14-14-2.3-2.3-.8-.8z"/><path d="M17.9 36.4h-1.5c-.5 0-1-.3-1.2-.8-.2-.5-.1-1 .3-1.4l13.1-13.1-2.2-2.2c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9.4-.4 1-.7 1.7-.7s1.2.2 1.7.7l2.3 2.3c.4.4.7 1 .7 1.7 0 .6-.2 1.2-.7 1.7L18.8 36c-.2.2-.6.4-.9.4z"/><path transform="rotate(-45.001 10.074 18.71)" d="M9.6 18.2h1v1h-1z"/><path d="M10.1 20.7c-.3 0-.7-.1-.9-.4l-.7-.7c-.5-.5-.5-1.3 0-1.8l.7-.7c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l.7.7c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-.7.8c-.3.2-.6.3-.9.3z"/><path transform="rotate(-45.001 27.348 18.71)" d="M26.8 18.2h1v1.1h-1z"/><path d="M27.3 20.7c-.3 0-.7-.1-.9-.4l-.7-.7c-.5-.5-.5-1.3 0-1.8l.7-.7c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l.7.7c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-.7.7c-.2.3-.5.4-.9.4z"/><path d="M26.6 18.7l.7.8-7.8 7.8-.8-.7z"/><path d="M19.5 28.6c-.2 0-.3 0-.5-.1s-.3-.2-.5-.3l-.7-.7c-.5-.5-.5-1.3 0-1.8l7.9-7.9c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l.7.7c.5.5.5 1.3 0 1.8l-7.9 7.9c-.2.3-.5.4-.8.4z"/><path transform="rotate(-44.887 14.392 23.028)" d="M13.9 17.4h1v11.2h-1z"/><path d="M18 28.6c-.3 0-.7-.1-.9-.4l-7.9-7.9c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9l.7-.7c.5-.5 1.3-.5 1.8 0l7.9 7.9c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-.7.7c-.3.3-.6.4-.9.4zm10.1-9.9l2.3 2.4-14 14-.7-.8 13.2-13.2-1.6-1.6z"/><path d="M16.4 36.4c-.3 0-.7-.1-.9-.4l-.7-.7c-.5-.5-.5-1.3 0-1.8l12.4-12.4-.7-.7c-.5-.5-.5-1.3 0-1.8l.7-.7c.5-.5 1.3-.5 1.8 0l2.3 2.3c.5.5.5 1.3 0 1.8l-14 14c-.2.2-.6.4-.9.4zm18.7-16.9l.7.7c.2.2.3.5.3.7v.3c0 .1 0 .1-.1.1v.1c0 .1-.1.1-.1.2-.1.1-.2.2-.3.2-.4.2-.8.1-1.1-.2l.7-.7v-1.4z"/><path d="M35.1 23.4c-.6 0-1.2-.2-1.7-.7-.5-.5-.5-1.3 0-1.8l.4-.4v-.9c0-.5.3-1 .8-1.2.5-.2 1-.1 1.4.3l.7.7c.4.4.7 1 .7 1.7v.2c0 .1 0 .2-.1.4v.1c0 .1-.1.2-.1.3 0 .1-.1.1-.1.2-.1.1-.2.3-.3.4l-.1.1c-.2.2-.5.4-.7.5-.3 0-.6.1-.9.1zm-.4-2.2zm0 0zm0 0zm.4-.2z"/><path d="M36.1 21.1V21v.1zm0 1.3H36c-.7-.1-1.2-.6-1.2-1.3V21c0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3v.2c0 .7-.6 1.2-1.3 1.2zM34.8 21z"/><path d="M36.1 21.3zm0 1.3c-.2 0-.3 0-.5-.1-.6-.2-1-.9-.8-1.6v-.2c.2-.6.9-1 1.6-.8.7.2 1.1.9.9 1.6 0 .1 0 .2-.1.3-.2.6-.6.8-1.1.8zm1.2-1z"/><path d="M36 21.5zm0 1.3c-.3 0-.5-.1-.7-.2-.4-.3-.5-.6-.5-1.1 0-.2.1-.4.2-.6.3-.6 1-.9 1.6-.6.5.2.8.7.8 1.2 0 .2 0 .3-.1.5 0 .1-.1.3-.2.4-.3.2-.7.4-1.1.4zM34.8 21zm.1-.2z"/><path d="M35.9 21.7c0-.1.1-.1.1-.2 0 .1-.1.2-.1.2z"/><path d="M35.9 23c-.3 0-.6-.1-.9-.3-.3-.3-.4-.6-.4-1 0-.3.1-.6.3-.8.3-.6 1.1-.8 1.7-.5.4.2.7.7.7 1.1 0 .2 0 .4-.1.6-.1.2-.2.3-.3.4-.3.3-.7.5-1 .5z"/><path d="M35.8 21.7c.1 0 .1 0 0 0 .1 0 .1 0 0 0zm0 1.3c-.3 0-.7-.1-.9-.4-.3-.3-.4-.6-.4-.9 0-.3.1-.6.4-.9l.1-.1c.5-.5 1.3-.5 1.8-.1.5.5.6 1.2.1 1.8 0 .1-.1.1-.1.1-.3.4-.6.5-1 .5zm-.3-1.6l-.5-.5.5.5zm-.6-.6zm0 0z"/><path d="M35.8 21.8l-14 14c-.2.2-.5.3-.7.3h-4.6c.3 0 .5-.1.7-.3l.7-.7H21l13.3-13.3c.3.3.8.4 1.1.2.2-.1.3-.1.4-.2z"/><path d="M21 37.4h-4.6c-.7 0-1.3-.6-1.3-1.3 0-.7.5-1.2 1.2-1.3l.7-.7c.2-.2.6-.4.9-.4h2.6l12.9-12.9c.2-.2.6-.4.9-.4.3 0 .5.1.7.2.5-.4 1.2-.3 1.6.1.5.5.5 1.3 0 1.8l-14 14c-.4.7-1 .9-1.6.9zm-2.3-10.8l.8.7-.8.8-.7-.8z"/><path d="M18.7 29.4c-.3 0-.7-.1-.9-.4l-.7-.7c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9l.7-.7c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l.7.7c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-.7.7c-.2.2-.5.4-.9.4zm-3 4.9l.7.7h1.5l-.7.7c-.2.2-.5.3-.7.3h-.4c-.1 0-.1-.1-.2-.1l-.1-.1c-.1-.1-.2-.2-.3-.4-.1-.1-.1-.3-.1-.4-.1-.2.1-.5.3-.7z"/><path d="M16.4 37.4h-.6c-.1 0-.2 0-.3-.1h-.1c-.1-.1-.2-.1-.4-.2-.1 0-.1-.1-.2-.2l-.1-.1c-.2-.2-.4-.5-.6-.8-.1-.3-.2-.6-.2-.9 0-.6.2-1.2.7-1.7.5-.5 1.3-.5 1.8 0l.4.4h1c.5 0 1 .3 1.2.8.2.5.1 1-.3 1.4l-.7.7c-.4.5-1 .7-1.6.7zm-.1-2.6z"/><path d="M15.7 35.8l-14.1-14c-.2-.2-.3-.5-.3-.7v-4.6c0 .3.1.5.3.7l.7.7V21l13.3 13.3c-.2.2-.3.5-.3.7 0 .1 0 .3.1.4.1.2.2.4.3.4z"/><path d="M15.7 37.1c-.3 0-.5-.1-.8-.3-.1-.1-.1-.1-.2-.1l-14-14C.3 22.2 0 21.6 0 21v-4.6c0-.7.6-1.3 1.3-1.3.7 0 1.2.5 1.3 1.2l.6.7c.2.2.4.6.4.9v2.6l12.9 12.9c.2.2.4.6.4.9 0 .3-.1.5-.2.7.4.5.4 1.1 0 1.6-.3.4-.6.5-1 .5zm.2-1.5l.7-.7-.7.7z"/><path d="M15.7 35.9l.1.1c0-.1-.1-.1-.1-.1z"/><path d="M15.8 37.2c-.2 0-.4-.1-.6-.2-.1-.1-.2-.2-.3-.2-.5-.5-.6-1.3-.2-1.8.4-.5 1.1-.6 1.6-.3.1 0 .1.1.2.1.6.4.7 1.2.4 1.7-.2.5-.7.7-1.1.7z"/><path d="M16 36.1c-.1 0-.1-.1-.2-.1.1 0 .1 0 .2.1z"/><path d="M16 37.3c-.1 0-.3 0-.4-.1-.2-.1-.3-.1-.5-.3-.6-.4-.7-1.2-.3-1.8.4-.6 1.2-.7 1.8-.4.6.3.9 1 .7 1.7-.3.6-.8.9-1.3.9zm.4-2.5l-.2.4.3-.4c0 .1 0 .1-.1 0z"/><path d="M16 36.1zm.2 1.3H16c-.1 0-.2-.1-.4-.1-.5-.2-.8-.7-.8-1.2 0-.2 0-.3.1-.5.3-.6 1-1 1.6-.7.7.2 1.1.8.9 1.5-.1.6-.6 1-1.2 1zm.3-2.5z"/><path d="M16.2 36.1zm0 1.3h-.4c-.6-.1-1-.7-1-1.2v-.3c.2-.7.8-1.1 1.5-.9.6.1 1.1.6 1.1 1.3v.2c0 .4-.5.9-1.2.9zm.3-2.5zm0 0zm0 0z"/><path d="M16.3 36.1zm.1 1.3h-.2c-.7-.1-1.2-.6-1.2-1.3V36c.1-.7.7-1.2 1.4-1.2s1.3.6 1.3 1.3c0 .7-.6 1.3-1.3 1.3zm0-2.6z"/></g><path transform="rotate(-45.001 18.711 18.71)" fill="#f2f2f2" d="M13.1 13.1h11.2v11.2H13.1z"/><path d="M21.1 8.5l13.3 13.3L21 35.1h-3.1l13.3-13.3c.2-.2.3-.5.3-.7 0-.3-.1-.5-.3-.7L28.8 18c-.4-.4-1.1-.4-1.5 0l-7.9-7.9 1.7-1.6z" fill="#f2f2f2"/><path d="M21.8 3.1l13.3 13.3v3.1L21.8 6.2c-.4-.4-1.1-.4-1.5 0L18 8.6c-.2.2-.3.5-.3.7 0 .3.1.5.3.7l-7.9 8-1.6-1.6L21.8 3.1zM2.3 17.9l13.3 13.3c.2.2.5.3.7.3.3 0 .5-.1.7-.3l2.3-2.3c.2-.2.3-.5.3-.7 0-.3-.1-.5-.3-.7l7.9-7.9 1.6 1.6-13.1 13.1L2.3 21v-3.1z" fill="#f2f2f2"/><path d="M16.4 2.3h3.1L6.2 15.6c-.2.2-.3.5-.3.7 0 .3.1.5.3.7l2.3 2.3c.4.4 1.1.4 1.5 0l7.9 7.9-1.6 1.6L3.1 15.7 16.4 2.3z" fill="#f2f2f2"/><path d="M21 1.3h.4c.1 0 .1.1.2.1 0 0 .1 0 .1.1.1.1.2.2.3.4.1.1.1.3.1.4 0 .3-.1.5-.3.7l-.8-.7h-1.5l.7-.7c.3-.2.6-.3.8-.3zm.1 0H21h.1zm.1 0zm.2 0h-.1.1zm0 .1zm.3.2c0-.1 0-.1 0 0 0-.1 0-.1 0 0z" fill="#00b7ff"/><path d="M22.1 2.3c0-.1 0-.3-.1-.4-.1-.1-.1-.3-.3-.4l14.1 14.1c.2.2.3.5.3.7V21c0-.3-.1-.5-.3-.7l-.7-.7v-3.1L21.8 3.1c.2-.2.3-.5.3-.8zm-2.6 0H21l-14 14 2.3 2.3.7.7c-.4.4-1.1.4-1.5 0L6.2 17c-.2-.2-.3-.5-.3-.7 0-.3.1-.5.3-.7L19.5 2.3z" fill="#00b7ff"/><path fill="#00b7ff" d="M21 2.3l.8.8L8.5 16.4l1.6 1.6-.8.7L7 16.4zm-.7 3.9c.4-.4 1.1-.4 1.5 0l13.3 13.3V21l-14-14-2.3 2.3-.8.8c-.2-.2-.3-.5-.3-.7 0-.3.1-.5.3-.7l2.3-2.5z"/><path fill="#00b7ff" d="M21.1 7l14 14-.8.8L21.1 8.5l-1.6 1.6-.8-.8z"/><path transform="rotate(-45.001 18.712 10.074)" fill="#00b7ff" d="M18.2 9.5h1.1v1.1h-1.1z"/><path transform="rotate(-45.001 23.03 14.392)" fill="#00b7ff" d="M22.5 8.8h1V20h-1z"/><path transform="rotate(-45.001 14.393 14.393)" fill="#00b7ff" d="M8.8 13.9H20V15H8.8z"/><path d="M1.6 15.7L15.7 1.6c.2-.2.5-.3.7-.3H21c-.3 0-.5.1-.7.3l-.7.7h-3.1L3.1 15.7c-.3-.3-.8-.4-1.1-.2-.2 0-.3.1-.4.2zm1.5 0l13.3 13.2 1.6-1.6.7.8-2.3 2.3-14.1-14zm-1.5 0c-.1.1-.1.1-.1.2 0-.1 0-.1.1-.2zm-.2.2s0 .1 0 0c0 .1 0 0 0 0zm-.1.3s0 .1 0 0c0 .1 0 0 0 0zm0 .1z" fill="#00b7ff"/><path d="M1.3 16.3v-.1c0-.1 0-.2.1-.2 0-.1.1-.1.1-.2.1-.1.2-.2.4-.3.4-.2.8-.1 1.1.2l-.7.7v1.5l-.7-.7c-.2-.3-.3-.5-.3-.9 0 .1 0 0 0 0z" fill="#00b7ff"/><path d="M2.3 16.4l14 14 2.3-2.3.7-.7c.2.2.3.5.3.7 0 .3-.1.5-.3.7L17 31.1c-.2.2-.5.3-.7.3-.3 0-.5-.1-.7-.3L2.3 17.9v-1.5zm25 1.6c.4-.4 1.1-.4 1.5 0l2.3 2.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7L17.9 35.1h-1.5l14-14-2.3-2.3-.8-.8z" fill="#00b7ff"/><path transform="rotate(-45.001 10.074 18.71)" fill="#00b7ff" d="M9.6 18.2h1v1h-1z"/><path transform="rotate(-45.001 27.348 18.71)" fill="#00b7ff" d="M26.8 18.2h1v1.1h-1z"/><path fill="#00b7ff" d="M26.6 18.7l.7.8-7.8 7.8-.8-.7z"/><path transform="rotate(-44.887 14.392 23.028)" fill="#00b7ff" d="M13.9 17.4h1v11.2h-1z"/><path fill="#00b7ff" d="M28.1 18.7l2.3 2.4-14 14-.7-.8 13.2-13.2-1.6-1.6zm7 .8l.7.7c.2.2.3.5.3.7v.3c0 .1 0 .1-.1.1v.1c0 .1-.1.1-.1.2-.1.1-.2.2-.3.2-.4.2-.8.1-1.1-.2l.7-.7v-1.4zm1 1.6V21v.1zm0 .2zm-.1.2zm-.1.2c0-.1.1-.1.1-.2 0 .1-.1.2-.1.2zm-.1 0c.1 0 .1 0 0 0 .1 0 .1 0 0 0z"/><path d="M35.8 21.8l-14 14c-.2.2-.5.3-.7.3h-4.6c.3 0 .5-.1.7-.3l.7-.7H21l13.3-13.3c.3.3.8.4 1.1.2.2-.1.3-.1.4-.2zm-17.1 4.8l.8.7-.8.8-.7-.8z" fill="#00b7ff"/><path d="M15.7 34.3l.7.7h1.5l-.7.7c-.2.2-.5.3-.7.3h-.4c-.1 0-.1-.1-.2-.1l-.1-.1c-.1-.1-.2-.2-.3-.4-.1-.1-.1-.3-.1-.4-.1-.2.1-.5.3-.7z" fill="#00b7ff"/><path d="M15.7 35.8l-14.1-14c-.2-.2-.3-.5-.3-.7v-4.6c0 .3.1.5.3.7l.7.7V21l13.3 13.3c-.2.2-.3.5-.3.7 0 .1 0 .3.1.4.1.2.2.4.3.4zm0 .1l.1.1c0-.1-.1-.1-.1-.1zm.3.2c-.1 0-.1-.1-.2-.1.1 0 .1 0 .2.1zm0 0zm.2 0zm.1 0z" fill="#00b7ff"/></symbol><symbol id="equatio-svg-logo-large" viewBox="0 0 1628.5 546"><path d="M599.3 185.4c0-64.3 29.8-94.5 80.4-94.5 44.7 0 76.8 25.5 76.8 77.2v172.5c0 7.1-5.5 12.5-12.5 12.5-7.1 0-12.5-5.5-12.5-12.5V254c-9 12.5-28.2 25.5-53.3 25.5-50.7 0-78.9-29.8-78.9-94.1zm132.1-17.3c0-37.2-21.6-54.5-51.7-54.5-36.1 0-55.3 22.7-55.3 71.7 0 48.2 19.6 71.3 55.3 71.3 36.8 0 51.7-34.5 51.7-34.5v-54zm92.9-62.3v102.3c0 25.5 8.2 47.4 47.8 47.4 39.6 0 47.8-22 47.8-47.4V105.8c0-7.1 5.9-12.5 12.9-12.5 6.7 0 12.2 5.5 12.2 12.5v102.3c0 37.2-12.2 71.3-72.9 71.3-60.4 0-72.9-34.1-72.9-71.3V105.8c0-7.1 5.5-12.5 12.5-12.5 6.7-.1 12.6 5.4 12.6 12.5zm187.8 28.6c-3.9 4.3-6.7 5.5-10.2 5.5-6.3 0-11.4-5.1-11.4-11.4 0-2.7.8-4.7 2-6.7 11-17.2 32.1-31 65.1-31 45.5 0 70.6 26.7 70.6 66.6v107.8c0 6.7-5.5 12.2-12.2 12.2-6.7 0-12.2-5.5-12.2-12.2v-14.1c-9.8 18.4-32.5 28.2-56.1 28.2-41.6 0-67.8-20-67.8-56.1 0-34.5 26.3-55.3 68.6-55.3h55.3v-10.6c0-26.7-17.6-43.1-46.3-43.1-20.7.2-33.3 6.5-45.4 20.2zm91.7 72.1V190h-55.3c-25.5 0-43.1 10.6-43.1 33.3 0 20.4 14.1 33.3 44.7 33.3 27.5.1 53.7-16.7 53.7-50.1zM1185 55.2c0-6.7 5.9-12.5 12.5-12.5 7.1 0 12.5 5.9 12.5 12.5v35.7h25.5c6.7 0 11.8 5.1 11.8 11.8 0 6.7-5.1 11.8-11.8 11.8H1210v113.7c0 16.9 9.4 25.9 22.7 25.9 6.7 0 12.2 5.1 12.2 11.8 0 6.7-5.5 11.8-12.2 11.8-31 0-47.8-20.8-47.8-49.4V114.4h-15.3c-6.7 0-11.8-5.1-11.8-11.8 0-6.7 5.1-11.8 11.8-11.8h15.3V55.2zM1309.3 265c0 7.1-5.5 12.5-12.5 12.5s-12.5-5.5-12.5-12.5V55.6c0-7.1 5.5-12.5 12.5-12.5s12.5 5.5 12.5 12.5V265zm244.4-103.3c0 80.1-39.1 117.8-102.6 117.8-63 0-102.6-37.6-102.6-117.8S1388 44.4 1451.1 44.4c63.5 0 102.6 37.1 102.6 117.3zm-25.9 0c0-66.7-28.1-96.3-76.8-96.3-48.7 0-76.8 29.6-76.8 96.3 0 67.8 28.1 96.9 76.8 96.9 48.8-.1 76.8-29.2 76.8-96.9zm-1010 35.6c-3.4 0-6.8-1.4-9.3-4.2l-73.2-82.4c-3.3-3.7-4.1-8.9-2-13.4s6.4-7.3 11.3-7.3H567c6.9 0 12.4 5.6 12.4 12.4s-5.6 12.4-12.4 12.4h-94.7l54.8 61.7c4.6 5.1 4.1 13-1 17.6-2.4 2.2-5.4 3.2-8.3 3.2z" fill="#00b7ff"/><path d="M566.9 279.7H444.5c-4.9 0-9.3-2.9-11.3-7.3s-1.2-9.7 2-13.4l73.2-82.4c4.6-5.1 12.4-5.6 17.6-1 5.1 4.6 5.6 12.4 1 17.6l-54.8 61.7h94.7c6.9 0 12.4 5.6 12.4 12.4s-5.5 12.4-12.4 12.4zM431.6 434.4c0-.3 1.6-1.1 3.6-1.1 3.6 0 6.9 1.8 6.9 10.3v2c5.4-7.8 14-13.5 24.5-13.5 12.2 0 21.5 5.7 25.8 16.6 5.2-9.3 14.7-16.6 27.6-16.6 19.6 0 30 11.3 30 32.8v42.4c0 3.9-2 5.1-4.7 5.1H544c-2.8 0-4.7-1.1-4.7-5.1v-41.8c0-15.5-6.7-23.5-20.1-23.5-9.6 0-18.6 6.4-23.2 15.7v49.6c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-40.9c0-16.3-6.7-24.3-20.1-24.3-9.6 0-18.6 6.4-23.2 15.7v49.6c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-73zm184.5 30.8h1.6v-2.8c0-13.4-7.8-20.7-21.9-20.7-12.6 0-20.6 6.4-24.8 14.4 0 .2-6-.5-6-6.2 0-5.5 11.1-17.9 31.7-17.9 19.7 0 31.5 11.4 31.5 30.2V511c0 .3-1.6 1.1-3.6 1.1-3.6 0-6.7-1.8-6.7-10.3V499c-6.2 9-16.6 14.4-29 14.4-17 0-26.8-8.6-26.8-21.7 0-18.2 18.1-25.7 54-26.5zm-26.3 39.3c16 0 27.9-10 27.9-23.8v-7.2l-4.6.2c-26.6 1-40.3 5.7-40.3 17.9 0 7.9 6.4 12.9 17 12.9zm55.4-102.9c0-.3 1.6-1.1 3.6-1.1 3.6 0 7 1.8 7 10.3v58.7l31.3-32c2.9-3.1 5.1-4.2 7.2-4.2 4.2 0 5.7 4.7 5.2 5.2l-32.1 32 37.2 36.2c.5.5-1.3 5.5-5.7 5.5-2 0-3.8-1-6.9-4.1L655.8 472v35.1c0 3.9-2 5.1-4.7 5.1H650c-2.8 0-4.7-1.1-4.7-5.1V401.6zm100.5 30.3c21.9 0 36.2 15.5 36.2 39.2v1c0 2.9-1.1 3.6-4.4 3.6h-60.4c.8 16.6 12.9 28.4 29.5 28.4 15.2 0 22-6.5 26.6-13.9.3-.5 6.2 1 6.2 6 0 5.4-11.7 17.3-32.8 17.3-23.7 0-40.1-16.6-40.1-40.5.1-23.6 16.7-41.1 39.2-41.1zm25 34.6c-1-15.3-10.4-25.3-25-25.3-14.7 0-25.9 10.4-28.2 25.3h53.2zm47.3-32.1c0-.3 1.6-1.1 3.6-1.1 3.6 0 6.9 1.8 6.9 10.3v2c5.4-7.8 14-13.5 24.5-13.5 12.2 0 21.5 5.7 25.8 16.6 5.2-9.3 14.7-16.6 27.6-16.6 19.6 0 30 11.3 30 32.8v42.4c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-41.8c0-15.5-6.7-23.5-20.1-23.5-9.6 0-18.6 6.4-23.2 15.7v49.6c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-40.9c0-16.3-6.7-24.3-20.1-24.3-9.6 0-18.6 6.4-23.2 15.7v49.6c0 3.9-2 5.1-4.7 5.1H823c-2.8 0-4.7-1.1-4.7-5.1v-73zm184.5 30.8h1.6v-2.8c0-13.4-7.8-20.7-21.9-20.7-12.6 0-20.6 6.4-24.8 14.4 0 .2-6-.5-6-6.2 0-5.5 11.1-17.9 31.7-17.9 19.7 0 31.5 11.4 31.5 30.2V511c0 .3-1.6 1.1-3.6 1.1-3.6 0-6.7-1.8-6.7-10.3V499c-6.2 9-16.6 14.4-29 14.4-17 0-26.8-8.6-26.8-21.7 0-18.2 18.1-25.7 54-26.5zm-26.3 39.3c16 0 27.9-10 27.9-23.8v-7.2l-4.6.2c-26.6 1-40.3 5.7-40.3 17.9.1 7.9 6.4 12.9 17 12.9zm58.8-61.2h-7.2c-3.9 0-5.1-1.5-5.1-4.2v-1c0-2.8 1.1-4.2 5.1-4.2h7.2v-13.5c0-3.9 2-5.1 4.7-5.1h1.1c2.8 0 4.6 1.1 4.6 5.1v13.5h20.7c3.9 0 5.1 1.5 5.1 4.2v1c0 2.8-1.1 4.2-5.1 4.2h-20.7v44.2c0 11.4 2.9 16.8 11.6 16.8 5.4 0 9.3-2.3 12.1-5.7.3-.3 3.6 1.1 3.6 5.2 0 4.4-5.7 9.6-16 9.6-15.2 0-21.7-8.6-21.7-24.8v-45.3zm47.4-41.7c0-.3 1.6-1.1 3.6-1.1 3.6 0 7 1.8 7 10.3v35.6c5.4-8.3 14-14.4 26.3-14.4 20.6 0 30.8 13.7 30.8 34.3v40.9c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-40.3c0-15.7-7.8-25-20.9-25-15.3 0-25.6 10.4-25.6 26.6v38.7c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1V401.6zm140.6 30.3c13.7 0 23.7 6.5 28.2 13.7v-44c0-.3 1.6-1.1 3.6-1.1 3.6 0 7 1.8 7 10.3v96.4c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.6-1.1-4.6-5.1v-8.5c-7 9.5-16.2 14.8-29 14.8-20.6 0-36.7-16-36.7-40.6 0-24.5 15.8-41 37.3-41zm.5 72.3c14.2 0 27.2-10.6 27.9-25v-19.7c-4.9-11.3-13.9-18.3-27.6-18.3-16.5 0-27.4 12.7-27.4 31.5.1 18.3 11.5 31.5 27.1 31.5zm55.3-96.8c0-4.7 2.4-7 7.2-7 4.6 0 6.9 2.3 6.9 7s-2.4 7-7.2 7c-4.4.1-6.9-2.4-6.9-7zm1.7 30.9c0-3.9 2-5.1 4.7-5.1h1.1c2.8 0 4.7 1.1 4.7 5.1v68.8c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-68.8zm43.5 64.1c-2-1.6-3.4-3.9-3.4-7.5 0-2.8 1.5-5.5 3.4-7.7-11.7-4.1-19.4-14-19.4-25.9 0-16.2 13.4-29.4 31.5-29.4 7.3 0 14.2 2.3 19.6 6l5.4-8.6c2.3-3.3 4.1-4.9 7.5-4.9 4.4 0 6.4 4.4 6 4.7l-12.9 14.4c3.9 4.7 6.4 10.8 6.4 17.1 0 16-13.7 28.6-32 28.6-1.5 0-2.9 0-4.2-.2-1 1.5-1.1 2.6-1.1 3.9 0 5.4 7.3 5.9 21.5 9.5 11.1 2.8 22.8 8 22.8 20.4 0 14.5-14.7 23.2-39.6 23.2-24.8 0-36.5-6.9-36.5-21.2-.1-11.8 10.8-19.6 25-22.4zm11.8 34.9c17.8 0 28.7-5.1 28.7-14.2 0-9.5-14.7-11.4-27.1-14.5-14.8.8-28.2 6.4-28.2 16.1 0 8.2 9.1 12.6 26.6 12.6zm21.3-76.3c0-11.7-8.5-20.2-21.2-20.2-12.1 0-20.6 8.2-20.6 20.2 0 11.7 8.7 19.9 20.9 19.9 12.5 0 20.9-8.2 20.9-19.9zm24.5-53.6c0-4.7 2.4-7 7.2-7 4.6 0 6.9 2.3 6.9 7s-2.4 7-7.2 7c-4.5.1-6.9-2.4-6.9-7zm1.6 30.9c0-3.9 2-5.1 4.7-5.1h1.1c2.8 0 4.7 1.1 4.7 5.1v68.8c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-68.8zm34.1 5h-7.2c-3.9 0-5.1-1.5-5.1-4.2v-1c0-2.8 1.1-4.2 5.1-4.2h7.2v-13.5c0-3.9 2-5.1 4.7-5.1h1.1c2.8 0 4.6 1.1 4.6 5.1v13.5h20.7c3.9 0 5.1 1.5 5.1 4.2v1c0 2.8-1.1 4.2-5.1 4.2h-20.7v44.2c0 11.4 2.9 16.8 11.6 16.8 5.4 0 9.3-2.3 12.1-5.7.3-.3 3.6 1.1 3.6 5.2 0 4.4-5.7 9.6-16 9.6-15.2 0-21.7-8.6-21.7-24.8v-45.3zm95.8 21.9h1.6v-2.8c0-13.4-7.8-20.7-21.9-20.7-12.6 0-20.6 6.4-24.8 14.4 0 .2-6-.5-6-6.2 0-5.5 11.1-17.9 31.7-17.9 19.7 0 31.5 11.4 31.5 30.2V511c0 .3-1.6 1.1-3.6 1.1-3.6 0-6.7-1.8-6.7-10.3V499c-6.2 9-16.6 14.4-29 14.4-17 0-26.8-8.6-26.8-21.7 0-18.2 18.1-25.7 54-26.5zm-26.3 39.3c16 0 27.9-10 27.9-23.8v-7.2l-4.6.2c-26.6 1-40.3 5.7-40.3 17.9.1 7.9 6.4 12.9 17 12.9zm56.3-102.9c0-.3 1.6-1.1 3.6-1.1 3.6 0 7 1.8 7 10.3v96.4c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1V401.6zM218.9 373.4h-64.3c-3.2 0-6.3-1.3-8.5-3.5L3.5 227.4c-2.3-2.3-3.5-5.3-3.5-8.5v-64.3c0-3.2 1.3-6.3 3.5-8.5L146 3.5c2.3-2.3 5.3-3.5 8.5-3.5h64.3c3.2 0 6.3 1.3 8.5 3.5L369.9 146c2.3 2.3 3.5 5.3 3.5 8.5v64.3c0 3.2-1.3 6.3-3.5 8.5L227.4 369.9c-2.3 2.3-5.3 3.5-8.5 3.5zm-59.3-24.1h54.3l135.4-135.4v-54.3L213.9 24.1h-54.3L24.1 159.6v54.3l135.5 135.4zm201.8-130.4z" fill="#00b7ff"/><path d="M190.5 283.4c-1.2 0-2.4-.4-3.2-1.3L96.1 191c-1.8-1.8-1.8-4.7 0-6.5 1.8-1.8 4.7-1.8 6.5 0l91.1 91.1c1.8 1.8 1.8 4.7 0 6.5-.9.8-2.1 1.3-3.2 1.3z" fill="#00b7ff"/><path d="M163.3 314.7c-2.5 0-4.9-1-6.6-2.7L17 172.3c-3.7-3.7-3.7-9.6 0-13.3 3.7-3.7 9.6-3.7 13.3 0l133 133 17-17c3.7-3.7 9.6-3.7 13.3 0 3.7 3.7 3.7 9.6 0 13.3L170 311.9c-1.9 1.8-4.3 2.8-6.7 2.8z" fill="#00b7ff"/><path d="M184.9 280.5c-1.2 0-2.4-.4-3.2-1.3-1.8-1.8-1.8-4.7 0-6.5l91.1-91.1c1.8-1.8 4.7-1.8 6.5 0 1.8 1.8 1.8 4.7 0 6.5l-91.1 91.1c-.9.9-2.1 1.3-3.3 1.3z" fill="#00b7ff"/><path d="M162.9 361.1c-2.4 0-4.8-.9-6.6-2.7-3.7-3.7-3.7-9.6 0-13.3l133-133-17-17c-3.7-3.7-3.7-9.6 0-13.3 3.7-3.7 9.6-3.7 13.3 0l23.6 23.6c3.7 3.7 3.7 9.6 0 13.3L169.5 358.3c-1.8 1.9-4.2 2.8-6.6 2.8z" fill="#00b7ff"/><path d="M274.1 191.8c-1.2 0-2.4-.4-3.2-1.3l-91.1-91.1c-1.8-1.8-1.8-4.7 0-6.5s4.7-1.8 6.5 0l91.1 91.1c1.8 1.8 1.8 4.7 0 6.5-.9.8-2.1 1.3-3.3 1.3z" fill="#00b7ff"/><path d="M349.9 218.6c-2.4 0-4.8-.9-6.6-2.7l-133-133-17 17c-3.7 3.7-9.6 3.7-13.3 0-3.7-3.7-3.7-9.6 0-13.3L203.6 63c3.7-3.7 9.6-3.7 13.3 0l139.7 139.7c3.7 3.7 3.7 9.6 0 13.3-1.9 1.7-4.3 2.6-6.7 2.6z" fill="#00b7ff"/><path d="M95.6 195c-1.2 0-2.4-.4-3.2-1.3-1.8-1.8-1.8-4.7 0-6.5l91.1-91.1c1.8-1.8 4.7-1.8 6.5 0 1.8 1.8 1.8 4.7 0 6.5l-91.1 91.1c-1 .8-2.1 1.3-3.3 1.3z" fill="#00b7ff"/><path d="M92.7 196.2c-2.4 0-4.8-.9-6.6-2.7l-23.6-23.6c-3.7-3.7-3.7-9.6 0-13.3L202.1 16.9c3.7-3.7 9.6-3.7 13.3 0 3.7 3.7 3.7 9.6 0 13.3l-133 133 17 17c3.7 3.7 3.7 9.6 0 13.3-1.9 1.8-4.3 2.7-6.7 2.7zM1602.9 35.7c15.1 0 25.6 10.8 25.6 25.8s-10.7 26-25.7 26c-15.2 0-25.6-10.8-25.6-25.9 0-14.9 10.6-25.9 25.7-25.9zm0 47.2c12.3 0 20.7-8.9 20.7-21.3s-8.7-21.4-20.8-21.4c-12.4 0-20.7 8.9-20.7 21.3 0 12.3 8.6 21.4 20.8 21.4zm-11-30.9c0-2.6 1.4-4 3.8-4h8.2c7.3 0 11.2 2.8 11.2 8.7 0 4.1-2.2 6.9-6.3 7.9l6.2 8.1c.3.5-1.8 2.6-4.2 2.6-1.3 0-3-.6-4.2-2.7l-4.7-6.7h-2.8v5.9c0 2.1-1.1 3.3-3.2 3.3h-1c-2 0-3.1-1.5-3.1-4.1V52zm11.6 8.6c2.8 0 4.4-1.3 4.4-3.5 0-2.4-1.5-3.5-4.5-3.5h-4.4v7h4.5z" fill="#00b7ff"/></symbol><symbol id="equatio-svg-logo-upgrade-overlay" viewBox="0 0 1628.5 546"><path d="M599.3 185.4c0-64.3 29.8-94.5 80.4-94.5 44.7 0 76.8 25.5 76.8 77.2v172.5c0 7.1-5.5 12.5-12.5 12.5-7.1 0-12.5-5.5-12.5-12.5V254c-9 12.5-28.2 25.5-53.3 25.5-50.7 0-78.9-29.8-78.9-94.1zm132.1-17.3c0-37.2-21.6-54.5-51.7-54.5-36.1 0-55.3 22.7-55.3 71.7 0 48.2 19.6 71.3 55.3 71.3 36.8 0 51.7-34.5 51.7-34.5v-54zm92.9-62.3v102.3c0 25.5 8.2 47.4 47.8 47.4 39.6 0 47.8-22 47.8-47.4V105.8c0-7.1 5.9-12.5 12.9-12.5 6.7 0 12.2 5.5 12.2 12.5v102.3c0 37.2-12.2 71.3-72.9 71.3-60.4 0-72.9-34.1-72.9-71.3V105.8c0-7.1 5.5-12.5 12.5-12.5 6.7-.1 12.6 5.4 12.6 12.5zm187.8 28.6c-3.9 4.3-6.7 5.5-10.2 5.5-6.3 0-11.4-5.1-11.4-11.4 0-2.7.8-4.7 2-6.7 11-17.2 32.1-31 65.1-31 45.5 0 70.6 26.7 70.6 66.6v107.8c0 6.7-5.5 12.2-12.2 12.2-6.7 0-12.2-5.5-12.2-12.2v-14.1c-9.8 18.4-32.5 28.2-56.1 28.2-41.6 0-67.8-20-67.8-56.1 0-34.5 26.3-55.3 68.6-55.3h55.3v-10.6c0-26.7-17.6-43.1-46.3-43.1-20.7.2-33.3 6.5-45.4 20.2zm91.7 72.1V190h-55.3c-25.5 0-43.1 10.6-43.1 33.3 0 20.4 14.1 33.3 44.7 33.3 27.5.1 53.7-16.7 53.7-50.1zM1185 55.2c0-6.7 5.9-12.5 12.5-12.5 7.1 0 12.5 5.9 12.5 12.5v35.7h25.5c6.7 0 11.8 5.1 11.8 11.8 0 6.7-5.1 11.8-11.8 11.8H1210v113.7c0 16.9 9.4 25.9 22.7 25.9 6.7 0 12.2 5.1 12.2 11.8 0 6.7-5.5 11.8-12.2 11.8-31 0-47.8-20.8-47.8-49.4V114.4h-15.3c-6.7 0-11.8-5.1-11.8-11.8 0-6.7 5.1-11.8 11.8-11.8h15.3V55.2zM1309.3 265c0 7.1-5.5 12.5-12.5 12.5s-12.5-5.5-12.5-12.5V55.6c0-7.1 5.5-12.5 12.5-12.5s12.5 5.5 12.5 12.5V265zm244.4-103.3c0 80.1-39.1 117.8-102.6 117.8-63 0-102.6-37.6-102.6-117.8S1388 44.4 1451.1 44.4c63.5 0 102.6 37.1 102.6 117.3zm-25.9 0c0-66.7-28.1-96.3-76.8-96.3-48.7 0-76.8 29.6-76.8 96.3 0 67.8 28.1 96.9 76.8 96.9 48.8-.1 76.8-29.2 76.8-96.9zm-1010 35.6c-3.4 0-6.8-1.4-9.3-4.2l-73.2-82.4c-3.3-3.7-4.1-8.9-2-13.4s6.4-7.3 11.3-7.3H567c6.9 0 12.4 5.6 12.4 12.4s-5.6 12.4-12.4 12.4h-94.7l54.8 61.7c4.6 5.1 4.1 13-1 17.6-2.4 2.2-5.4 3.2-8.3 3.2z" fill="#fff"/><path d="M566.9 279.7H444.5c-4.9 0-9.3-2.9-11.3-7.3s-1.2-9.7 2-13.4l73.2-82.4c4.6-5.1 12.4-5.6 17.6-1 5.1 4.6 5.6 12.4 1 17.6l-54.8 61.7h94.7c6.9 0 12.4 5.6 12.4 12.4s-5.5 12.4-12.4 12.4zM431.6 434.4c0-.3 1.6-1.1 3.6-1.1 3.6 0 6.9 1.8 6.9 10.3v2c5.4-7.8 14-13.5 24.5-13.5 12.2 0 21.5 5.7 25.8 16.6 5.2-9.3 14.7-16.6 27.6-16.6 19.6 0 30 11.3 30 32.8v42.4c0 3.9-2 5.1-4.7 5.1H544c-2.8 0-4.7-1.1-4.7-5.1v-41.8c0-15.5-6.7-23.5-20.1-23.5-9.6 0-18.6 6.4-23.2 15.7v49.6c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-40.9c0-16.3-6.7-24.3-20.1-24.3-9.6 0-18.6 6.4-23.2 15.7v49.6c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-73zm184.5 30.8h1.6v-2.8c0-13.4-7.8-20.7-21.9-20.7-12.6 0-20.6 6.4-24.8 14.4 0 .2-6-.5-6-6.2 0-5.5 11.1-17.9 31.7-17.9 19.7 0 31.5 11.4 31.5 30.2V511c0 .3-1.6 1.1-3.6 1.1-3.6 0-6.7-1.8-6.7-10.3V499c-6.2 9-16.6 14.4-29 14.4-17 0-26.8-8.6-26.8-21.7 0-18.2 18.1-25.7 54-26.5zm-26.3 39.3c16 0 27.9-10 27.9-23.8v-7.2l-4.6.2c-26.6 1-40.3 5.7-40.3 17.9 0 7.9 6.4 12.9 17 12.9zm55.4-102.9c0-.3 1.6-1.1 3.6-1.1 3.6 0 7 1.8 7 10.3v58.7l31.3-32c2.9-3.1 5.1-4.2 7.2-4.2 4.2 0 5.7 4.7 5.2 5.2l-32.1 32 37.2 36.2c.5.5-1.3 5.5-5.7 5.5-2 0-3.8-1-6.9-4.1L655.8 472v35.1c0 3.9-2 5.1-4.7 5.1H650c-2.8 0-4.7-1.1-4.7-5.1V401.6zm100.5 30.3c21.9 0 36.2 15.5 36.2 39.2v1c0 2.9-1.1 3.6-4.4 3.6h-60.4c.8 16.6 12.9 28.4 29.5 28.4 15.2 0 22-6.5 26.6-13.9.3-.5 6.2 1 6.2 6 0 5.4-11.7 17.3-32.8 17.3-23.7 0-40.1-16.6-40.1-40.5.1-23.6 16.7-41.1 39.2-41.1zm25 34.6c-1-15.3-10.4-25.3-25-25.3-14.7 0-25.9 10.4-28.2 25.3h53.2zm47.3-32.1c0-.3 1.6-1.1 3.6-1.1 3.6 0 6.9 1.8 6.9 10.3v2c5.4-7.8 14-13.5 24.5-13.5 12.2 0 21.5 5.7 25.8 16.6 5.2-9.3 14.7-16.6 27.6-16.6 19.6 0 30 11.3 30 32.8v42.4c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-41.8c0-15.5-6.7-23.5-20.1-23.5-9.6 0-18.6 6.4-23.2 15.7v49.6c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-40.9c0-16.3-6.7-24.3-20.1-24.3-9.6 0-18.6 6.4-23.2 15.7v49.6c0 3.9-2 5.1-4.7 5.1H823c-2.8 0-4.7-1.1-4.7-5.1v-73zm184.5 30.8h1.6v-2.8c0-13.4-7.8-20.7-21.9-20.7-12.6 0-20.6 6.4-24.8 14.4 0 .2-6-.5-6-6.2 0-5.5 11.1-17.9 31.7-17.9 19.7 0 31.5 11.4 31.5 30.2V511c0 .3-1.6 1.1-3.6 1.1-3.6 0-6.7-1.8-6.7-10.3V499c-6.2 9-16.6 14.4-29 14.4-17 0-26.8-8.6-26.8-21.7 0-18.2 18.1-25.7 54-26.5zm-26.3 39.3c16 0 27.9-10 27.9-23.8v-7.2l-4.6.2c-26.6 1-40.3 5.7-40.3 17.9.1 7.9 6.4 12.9 17 12.9zm58.8-61.2h-7.2c-3.9 0-5.1-1.5-5.1-4.2v-1c0-2.8 1.1-4.2 5.1-4.2h7.2v-13.5c0-3.9 2-5.1 4.7-5.1h1.1c2.8 0 4.6 1.1 4.6 5.1v13.5h20.7c3.9 0 5.1 1.5 5.1 4.2v1c0 2.8-1.1 4.2-5.1 4.2h-20.7v44.2c0 11.4 2.9 16.8 11.6 16.8 5.4 0 9.3-2.3 12.1-5.7.3-.3 3.6 1.1 3.6 5.2 0 4.4-5.7 9.6-16 9.6-15.2 0-21.7-8.6-21.7-24.8v-45.3zm47.4-41.7c0-.3 1.6-1.1 3.6-1.1 3.6 0 7 1.8 7 10.3v35.6c5.4-8.3 14-14.4 26.3-14.4 20.6 0 30.8 13.7 30.8 34.3v40.9c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-40.3c0-15.7-7.8-25-20.9-25-15.3 0-25.6 10.4-25.6 26.6v38.7c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1V401.6zm140.6 30.3c13.7 0 23.7 6.5 28.2 13.7v-44c0-.3 1.6-1.1 3.6-1.1 3.6 0 7 1.8 7 10.3v96.4c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.6-1.1-4.6-5.1v-8.5c-7 9.5-16.2 14.8-29 14.8-20.6 0-36.7-16-36.7-40.6 0-24.5 15.8-41 37.3-41zm.5 72.3c14.2 0 27.2-10.6 27.9-25v-19.7c-4.9-11.3-13.9-18.3-27.6-18.3-16.5 0-27.4 12.7-27.4 31.5.1 18.3 11.5 31.5 27.1 31.5zm55.3-96.8c0-4.7 2.4-7 7.2-7 4.6 0 6.9 2.3 6.9 7s-2.4 7-7.2 7c-4.4.1-6.9-2.4-6.9-7zm1.7 30.9c0-3.9 2-5.1 4.7-5.1h1.1c2.8 0 4.7 1.1 4.7 5.1v68.8c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-68.8zm43.5 64.1c-2-1.6-3.4-3.9-3.4-7.5 0-2.8 1.5-5.5 3.4-7.7-11.7-4.1-19.4-14-19.4-25.9 0-16.2 13.4-29.4 31.5-29.4 7.3 0 14.2 2.3 19.6 6l5.4-8.6c2.3-3.3 4.1-4.9 7.5-4.9 4.4 0 6.4 4.4 6 4.7l-12.9 14.4c3.9 4.7 6.4 10.8 6.4 17.1 0 16-13.7 28.6-32 28.6-1.5 0-2.9 0-4.2-.2-1 1.5-1.1 2.6-1.1 3.9 0 5.4 7.3 5.9 21.5 9.5 11.1 2.8 22.8 8 22.8 20.4 0 14.5-14.7 23.2-39.6 23.2-24.8 0-36.5-6.9-36.5-21.2-.1-11.8 10.8-19.6 25-22.4zm11.8 34.9c17.8 0 28.7-5.1 28.7-14.2 0-9.5-14.7-11.4-27.1-14.5-14.8.8-28.2 6.4-28.2 16.1 0 8.2 9.1 12.6 26.6 12.6zm21.3-76.3c0-11.7-8.5-20.2-21.2-20.2-12.1 0-20.6 8.2-20.6 20.2 0 11.7 8.7 19.9 20.9 19.9 12.5 0 20.9-8.2 20.9-19.9zm24.5-53.6c0-4.7 2.4-7 7.2-7 4.6 0 6.9 2.3 6.9 7s-2.4 7-7.2 7c-4.5.1-6.9-2.4-6.9-7zm1.6 30.9c0-3.9 2-5.1 4.7-5.1h1.1c2.8 0 4.7 1.1 4.7 5.1v68.8c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-68.8zm34.1 5h-7.2c-3.9 0-5.1-1.5-5.1-4.2v-1c0-2.8 1.1-4.2 5.1-4.2h7.2v-13.5c0-3.9 2-5.1 4.7-5.1h1.1c2.8 0 4.6 1.1 4.6 5.1v13.5h20.7c3.9 0 5.1 1.5 5.1 4.2v1c0 2.8-1.1 4.2-5.1 4.2h-20.7v44.2c0 11.4 2.9 16.8 11.6 16.8 5.4 0 9.3-2.3 12.1-5.7.3-.3 3.6 1.1 3.6 5.2 0 4.4-5.7 9.6-16 9.6-15.2 0-21.7-8.6-21.7-24.8v-45.3zm95.8 21.9h1.6v-2.8c0-13.4-7.8-20.7-21.9-20.7-12.6 0-20.6 6.4-24.8 14.4 0 .2-6-.5-6-6.2 0-5.5 11.1-17.9 31.7-17.9 19.7 0 31.5 11.4 31.5 30.2V511c0 .3-1.6 1.1-3.6 1.1-3.6 0-6.7-1.8-6.7-10.3V499c-6.2 9-16.6 14.4-29 14.4-17 0-26.8-8.6-26.8-21.7 0-18.2 18.1-25.7 54-26.5zm-26.3 39.3c16 0 27.9-10 27.9-23.8v-7.2l-4.6.2c-26.6 1-40.3 5.7-40.3 17.9.1 7.9 6.4 12.9 17 12.9zm56.3-102.9c0-.3 1.6-1.1 3.6-1.1 3.6 0 7 1.8 7 10.3v96.4c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1V401.6zM218.9 373.4h-64.3c-3.2 0-6.3-1.3-8.5-3.5L3.5 227.4c-2.3-2.3-3.5-5.3-3.5-8.5v-64.3c0-3.2 1.3-6.3 3.5-8.5L146 3.5c2.3-2.3 5.3-3.5 8.5-3.5h64.3c3.2 0 6.3 1.3 8.5 3.5L369.9 146c2.3 2.3 3.5 5.3 3.5 8.5v64.3c0 3.2-1.3 6.3-3.5 8.5L227.4 369.9c-2.3 2.3-5.3 3.5-8.5 3.5zm-59.3-24.1h54.3l135.4-135.4v-54.3L213.9 24.1h-54.3L24.1 159.6v54.3l135.5 135.4zm201.8-130.4z" fill="#fff"/><path d="M190.5 283.4c-1.2 0-2.4-.4-3.2-1.3L96.1 191c-1.8-1.8-1.8-4.7 0-6.5 1.8-1.8 4.7-1.8 6.5 0l91.1 91.1c1.8 1.8 1.8 4.7 0 6.5-.9.8-2.1 1.3-3.2 1.3z" fill="#fff"/><path d="M163.3 314.7c-2.5 0-4.9-1-6.6-2.7L17 172.3c-3.7-3.7-3.7-9.6 0-13.3 3.7-3.7 9.6-3.7 13.3 0l133 133 17-17c3.7-3.7 9.6-3.7 13.3 0 3.7 3.7 3.7 9.6 0 13.3L170 311.9c-1.9 1.8-4.3 2.8-6.7 2.8z" fill="#fff"/><path d="M184.9 280.5c-1.2 0-2.4-.4-3.2-1.3-1.8-1.8-1.8-4.7 0-6.5l91.1-91.1c1.8-1.8 4.7-1.8 6.5 0 1.8 1.8 1.8 4.7 0 6.5l-91.1 91.1c-.9.9-2.1 1.3-3.3 1.3z" fill="#fff"/><path d="M162.9 361.1c-2.4 0-4.8-.9-6.6-2.7-3.7-3.7-3.7-9.6 0-13.3l133-133-17-17c-3.7-3.7-3.7-9.6 0-13.3 3.7-3.7 9.6-3.7 13.3 0l23.6 23.6c3.7 3.7 3.7 9.6 0 13.3L169.5 358.3c-1.8 1.9-4.2 2.8-6.6 2.8z" fill="#fff"/><path d="M274.1 191.8c-1.2 0-2.4-.4-3.2-1.3l-91.1-91.1c-1.8-1.8-1.8-4.7 0-6.5s4.7-1.8 6.5 0l91.1 91.1c1.8 1.8 1.8 4.7 0 6.5-.9.8-2.1 1.3-3.3 1.3z" fill="#fff"/><path d="M349.9 218.6c-2.4 0-4.8-.9-6.6-2.7l-133-133-17 17c-3.7 3.7-9.6 3.7-13.3 0-3.7-3.7-3.7-9.6 0-13.3L203.6 63c3.7-3.7 9.6-3.7 13.3 0l139.7 139.7c3.7 3.7 3.7 9.6 0 13.3-1.9 1.7-4.3 2.6-6.7 2.6z" fill="#fff"/><path d="M95.6 195c-1.2 0-2.4-.4-3.2-1.3-1.8-1.8-1.8-4.7 0-6.5l91.1-91.1c1.8-1.8 4.7-1.8 6.5 0 1.8 1.8 1.8 4.7 0 6.5l-91.1 91.1c-1 .8-2.1 1.3-3.3 1.3z" fill="#fff"/><path d="M92.7 196.2c-2.4 0-4.8-.9-6.6-2.7l-23.6-23.6c-3.7-3.7-3.7-9.6 0-13.3L202.1 16.9c3.7-3.7 9.6-3.7 13.3 0 3.7 3.7 3.7 9.6 0 13.3l-133 133 17 17c3.7 3.7 3.7 9.6 0 13.3-1.9 1.8-4.3 2.7-6.7 2.7zM1602.9 35.7c15.1 0 25.6 10.8 25.6 25.8s-10.7 26-25.7 26c-15.2 0-25.6-10.8-25.6-25.9 0-14.9 10.6-25.9 25.7-25.9zm0 47.2c12.3 0 20.7-8.9 20.7-21.3s-8.7-21.4-20.8-21.4c-12.4 0-20.7 8.9-20.7 21.3 0 12.3 8.6 21.4 20.8 21.4zm-11-30.9c0-2.6 1.4-4 3.8-4h8.2c7.3 0 11.2 2.8 11.2 8.7 0 4.1-2.2 6.9-6.3 7.9l6.2 8.1c.3.5-1.8 2.6-4.2 2.6-1.3 0-3-.6-4.2-2.7l-4.7-6.7h-2.8v5.9c0 2.1-1.1 3.3-3.2 3.3h-1c-2 0-3.1-1.5-3.1-4.1V52zm11.6 8.6c2.8 0 4.4-1.3 4.4-3.5 0-2.4-1.5-3.5-4.5-3.5h-4.4v7h4.5z" fill="#fff"/></symbol><symbol id="equatio-svg-logo" viewBox="0 0 1628.5 373.4"><path d="M599.3 185.4c0-64.3 29.8-94.5 80.4-94.5 44.7 0 76.8 25.5 76.8 77.2v172.5c0 7.1-5.5 12.5-12.5 12.5-7.1 0-12.5-5.5-12.5-12.5V254c-9 12.5-28.2 25.5-53.3 25.5-50.7 0-78.9-29.8-78.9-94.1zm132.1-17.3c0-37.2-21.6-54.5-51.7-54.5-36.1 0-55.3 22.7-55.3 71.7 0 48.2 19.6 71.3 55.3 71.3 36.8 0 51.7-34.5 51.7-34.5v-54zm92.9-62.3v102.3c0 25.5 8.2 47.4 47.8 47.4 39.6 0 47.8-22 47.8-47.4V105.8c0-7.1 5.9-12.5 12.9-12.5 6.7 0 12.2 5.5 12.2 12.5v102.3c0 37.2-12.2 71.3-72.9 71.3-60.4 0-72.9-34.1-72.9-71.3V105.8c0-7.1 5.5-12.5 12.5-12.5 6.7-.1 12.6 5.4 12.6 12.5zm187.8 28.6c-3.9 4.3-6.7 5.5-10.2 5.5-6.3 0-11.4-5.1-11.4-11.4 0-2.7.8-4.7 2-6.7 11-17.2 32.1-31 65.1-31 45.5 0 70.6 26.7 70.6 66.6v107.8c0 6.7-5.5 12.2-12.2 12.2-6.7 0-12.2-5.5-12.2-12.2v-14.1c-9.8 18.4-32.5 28.2-56.1 28.2-41.6 0-67.8-20-67.8-56.1 0-34.5 26.3-55.3 68.6-55.3h55.3v-10.6c0-26.7-17.6-43.1-46.3-43.1-20.7.2-33.3 6.5-45.4 20.2zm91.7 72.1V190h-55.3c-25.5 0-43.1 10.6-43.1 33.3 0 20.4 14.1 33.3 44.7 33.3 27.5.1 53.7-16.7 53.7-50.1zM1185 55.2c0-6.7 5.9-12.5 12.5-12.5 7.1 0 12.5 5.9 12.5 12.5v35.7h25.5c6.7 0 11.8 5.1 11.8 11.8 0 6.7-5.1 11.8-11.8 11.8H1210v113.7c0 16.9 9.4 25.9 22.7 25.9 6.7 0 12.2 5.1 12.2 11.8 0 6.7-5.5 11.8-12.2 11.8-31 0-47.8-20.8-47.8-49.4V114.4h-15.3c-6.7 0-11.8-5.1-11.8-11.8 0-6.7 5.1-11.8 11.8-11.8h15.3V55.2zM1309.3 265c0 7.1-5.5 12.5-12.5 12.5s-12.5-5.5-12.5-12.5V55.6c0-7.1 5.5-12.5 12.5-12.5s12.5 5.5 12.5 12.5V265zm244.4-103.3c0 80.1-39.1 117.8-102.6 117.8-63 0-102.6-37.6-102.6-117.8S1388 44.4 1451.1 44.4c63.5 0 102.6 37.1 102.6 117.3zm-25.9 0c0-66.7-28.1-96.3-76.8-96.3-48.7 0-76.8 29.6-76.8 96.3 0 67.8 28.1 96.9 76.8 96.9 48.8-.1 76.8-29.2 76.8-96.9zm-1010 35.6c-3.4 0-6.8-1.4-9.3-4.2l-73.2-82.4c-3.3-3.7-4.1-8.9-2-13.4s6.4-7.3 11.3-7.3H567c6.9 0 12.4 5.6 12.4 12.4s-5.6 12.4-12.4 12.4h-94.7l54.8 61.7c4.6 5.1 4.1 13-1 17.6-2.4 2.2-5.4 3.2-8.3 3.2z" fill="#fff"/><path d="M566.9 279.7H444.5c-4.9 0-9.3-2.9-11.3-7.3s-1.2-9.7 2-13.4l73.2-82.4c4.6-5.1 12.4-5.6 17.6-1 5.1 4.6 5.6 12.4 1 17.6l-54.8 61.7h94.7c6.9 0 12.4 5.6 12.4 12.4s-5.5 12.4-12.4 12.4zm-348 93.7h-64.3c-3.2 0-6.3-1.3-8.5-3.5L3.5 227.4c-2.3-2.3-3.5-5.3-3.5-8.5v-64.3c0-3.2 1.3-6.3 3.5-8.5L146 3.5c2.3-2.3 5.3-3.5 8.5-3.5h64.3c3.2 0 6.3 1.3 8.5 3.5L369.9 146c2.3 2.3 3.5 5.3 3.5 8.5v64.3c0 3.2-1.3 6.3-3.5 8.5L227.4 369.9c-2.3 2.3-5.3 3.5-8.5 3.5zm-59.3-24.1h54.3l135.4-135.4v-54.3L213.9 24.1h-54.3L24.1 159.6v54.3l135.5 135.4zm201.8-130.4z" fill="#fff"/><path d="M190.5 283.4c-1.2 0-2.4-.4-3.2-1.3L96.1 191c-1.8-1.8-1.8-4.7 0-6.5 1.8-1.8 4.7-1.8 6.5 0l91.1 91.1c1.8 1.8 1.8 4.7 0 6.5-.9.8-2.1 1.3-3.2 1.3z" fill="#fff"/><path d="M163.3 314.7c-2.5 0-4.9-1-6.6-2.7L17 172.3c-3.7-3.7-3.7-9.6 0-13.3 3.7-3.7 9.6-3.7 13.3 0l133 133 17-17c3.7-3.7 9.6-3.7 13.3 0 3.7 3.7 3.7 9.6 0 13.3L170 311.9c-1.9 1.8-4.3 2.8-6.7 2.8z" fill="#fff"/><path d="M184.9 280.5c-1.2 0-2.4-.4-3.2-1.3-1.8-1.8-1.8-4.7 0-6.5l91.1-91.1c1.8-1.8 4.7-1.8 6.5 0 1.8 1.8 1.8 4.7 0 6.5l-91.1 91.1c-.9.9-2.1 1.3-3.3 1.3z" fill="#fff"/><path d="M162.9 361.1c-2.4 0-4.8-.9-6.6-2.7-3.7-3.7-3.7-9.6 0-13.3l133-133-17-17c-3.7-3.7-3.7-9.6 0-13.3 3.7-3.7 9.6-3.7 13.3 0l23.6 23.6c3.7 3.7 3.7 9.6 0 13.3L169.5 358.3c-1.8 1.9-4.2 2.8-6.6 2.8z" fill="#fff"/><path d="M274.1 191.8c-1.2 0-2.4-.4-3.2-1.3l-91.1-91.1c-1.8-1.8-1.8-4.7 0-6.5s4.7-1.8 6.5 0l91.1 91.1c1.8 1.8 1.8 4.7 0 6.5-.9.8-2.1 1.3-3.3 1.3z" fill="#fff"/><path d="M349.9 218.6c-2.4 0-4.8-.9-6.6-2.7l-133-133-17 17c-3.7 3.7-9.6 3.7-13.3 0-3.7-3.7-3.7-9.6 0-13.3L203.6 63c3.7-3.7 9.6-3.7 13.3 0l139.7 139.7c3.7 3.7 3.7 9.6 0 13.3-1.9 1.7-4.3 2.6-6.7 2.6z" fill="#fff"/><path d="M95.6 195c-1.2 0-2.4-.4-3.2-1.3-1.8-1.8-1.8-4.7 0-6.5l91.1-91.1c1.8-1.8 4.7-1.8 6.5 0 1.8 1.8 1.8 4.7 0 6.5l-91.1 91.1c-1 .8-2.1 1.3-3.3 1.3z" fill="#fff"/><path d="M92.7 196.2c-2.4 0-4.8-.9-6.6-2.7l-23.6-23.6c-3.7-3.7-3.7-9.6 0-13.3L202.1 16.9c3.7-3.7 9.6-3.7 13.3 0 3.7 3.7 3.7 9.6 0 13.3l-133 133 17 17c3.7 3.7 3.7 9.6 0 13.3-1.9 1.8-4.3 2.7-6.7 2.7zM1602.9 35.7c15.1 0 25.6 10.8 25.6 25.8s-10.7 26-25.7 26c-15.2 0-25.6-10.8-25.6-25.9 0-14.9 10.6-25.9 25.7-25.9zm0 47.2c12.3 0 20.7-8.9 20.7-21.3s-8.7-21.4-20.8-21.4c-12.4 0-20.7 8.9-20.7 21.3 0 12.3 8.6 21.4 20.8 21.4zm-11-30.9c0-2.6 1.4-4 3.8-4h8.2c7.3 0 11.2 2.8 11.2 8.7 0 4.1-2.2 6.9-6.3 7.9l6.2 8.1c.3.5-1.8 2.6-4.2 2.6-1.3 0-3-.6-4.2-2.7l-4.7-6.7h-2.8v5.9c0 2.1-1.1 3.3-3.2 3.3h-1c-2 0-3.1-1.5-3.1-4.1V52zm11.6 8.6c2.8 0 4.4-1.3 4.4-3.5 0-2.4-1.5-3.5-4.5-3.5h-4.4v7h4.5z" fill="#fff"/></symbol><symbol id="equatio-svg-modal-close" viewBox="0 0 11.172 11.172"><path fill="currentColor" d="M11.172 1.128L10.043 0 5.586 4.457 1.128 0 0 1.128l4.457 4.458L0 10.043l1.128 1.129 4.458-4.458 4.457 4.458 1.129-1.129-4.458-4.457z"/></symbol><symbol id="equatio-svg-option-angle" viewBox="0 0 19.5 20.3"><path fill="none" stroke="currentColor" stroke-width="1.576" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M18.7 15.7H.8L16.9.8"/><path d="M8.4.9s.4.2 1 .7" fill="none" stroke="currentColor" stroke-width="1.576" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.2 3.5C13 5.8 15.1 10 15.5 17" fill="none" stroke="currentColor" stroke-width="1.576" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2.614,2.614"/><path d="M15.5 18.3v1.2" fill="none" stroke="currentColor" stroke-width="1.576" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol id="equatio-svg-option-prediction" viewBox="0 0 23.5 25.8"><path d="M10.5 1.4C4.7 1.4 0 6.1 0 11.8c0 5.8 4.7 10.5 10.5 10.5S21 17.6 21 11.8c-.1-5.7-4.8-10.4-10.5-10.4m-7.6 9c-.7-.8.2-3.2 2.3-5 2.1-1.8 4.5-2.2 5.2-1.5.6.7-1.4 1.8-3.5 3.6-2 1.8-3.4 3.7-4 2.9" fill="currentColor"/><path d="M19.6 1.7c-1.3 0-1.5-.2-1.4-1.5 0-.1-.1-.2-.2-.2s-.2.1-.2.2c0 1.3-.2 1.4-1.2 1.4h-.3c-.1 0-.2.1-.2.2s.1.2.2.2c1.3 0 1.5.2 1.4 1.5 0 .1.1.2.2.2s.2-.1.2-.2c0-1.3.2-1.4 1.2-1.4h.3c.1 0 .2-.1.2-.2 0-.2-.1-.2-.2-.2m3.6 2.7c-1.7 0-1.9-.2-1.8-1.9 0-.1-.1-.2-.2-.2s-.2.1-.2.2c0 1.6-.2 1.8-1.6 1.8h-.3c-.1 0-.2.1-.2.2s.1.2.2.2c1.7 0 1.9.2 1.8 1.9 0 .1.1.2.2.2s.2-.1.2-.2c0-1.6.2-1.8 1.6-1.8h.3c.1 0 .2-.1.2-.2.1-.1 0-.2-.2-.2" fill="currentColor"/><g opacity=".43"><clipPath id="equatio-svg-option-prediction-SVGID_2_"><use xlink:href="#equatio-svg-option-prediction-SVGID_1_" overflow="visible"/></clipPath><path d="M.6 12.4C.6 6.6 5.3 1.9 11.1 1.9c2.4 0 4.6.8 6.4 2.2-1.9-1.7-4.3-2.7-7-2.7C4.7 1.4 0 6.1 0 11.8c0 3.4 1.6 6.4 4.1 8.3C2 18.2.6 15.5.6 12.4" clip-path="url(#equatio-svg-option-prediction-SVGID_2_)" fill="currentColor"/></g><path d="M18 23.2c-.2-.6-1.5-1.1-3.3-1.5l-.9.3c.7.1 1.1.2 1.1.3 0 .3-2.1.5-4.6.5s-4.6-.2-4.6-.5c0-.1.6-.3 1.5-.3-.3-.1-.6-.2-.8-.3-1.8.3-3.1.8-3.3 1.5-1.5.3-2.3.6-2.3 1 0 .9 4.4 1.6 9.9 1.6 5.4 0 9.9-.7 9.9-1.6-.3-.3-1.2-.7-2.6-1" fill="currentColor"/></symbol><symbol id="equatio-svg-platform-icon-android" viewBox="0 0 56.7 56.7"><style>.st0{fill:#a6d050}</style><path class="st0" d="M35 8.6l.5-.8.5-.8 1.2-1.8c.1-.2.1-.5-.1-.7-.2-.1-.5-.1-.7.1l-1.3 1.9-.5.8-.6.8C32.2 7.4 30.3 7 28.2 7c-2.1 0-4 .4-5.8 1.1l-.4-.7-.5-.8-1.3-1.9c-.1-.2-.4-.3-.7-.1-.2.1-.3.4-.1.7l1.2 1.8.5.8.5.8c-4.1 1.9-6.9 5.5-6.9 9.7h27.1c.1-4.3-2.7-7.9-6.8-9.8zm-12.5 5.8c-.8 0-1.5-.7-1.5-1.5s.6-1.5 1.5-1.5c.8 0 1.5.6 1.5 1.5s-.7 1.5-1.5 1.5zm11.7 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.6 1.5 1.5-.7 1.5-1.5 1.5zM15 20.2h-.2v21.3c0 1.7 1.4 3.1 3.1 3.1h2.2c-.1.3-.1.5-.1.8v6.2c0 1.6 1.3 2.9 2.9 2.9s2.9-1.3 2.9-2.9v-6.2c0-.3 0-.6-.1-.8H31c-.1.3-.1.5-.1.8v6.2c0 1.6 1.3 2.9 2.9 2.9s2.9-1.3 2.9-2.9v-6.2c0-.3 0-.6-.1-.8h2.2c1.7 0 3.1-1.4 3.1-3.1V20.2H15zm-5.1 0c-1.6 0-2.9 1.3-2.9 2.9v12.4c0 1.6 1.3 2.9 2.9 2.9 1.6 0 2.9-1.3 2.9-2.9V23.1c0-1.6-1.3-2.9-2.9-2.9zm36.9 0c-1.6 0-2.9 1.3-2.9 2.9v12.4c0 1.6 1.3 2.9 2.9 2.9 1.6 0 2.9-1.3 2.9-2.9V23.1c0-1.6-1.3-2.9-2.9-2.9z"/></symbol><symbol id="equatio-svg-platform-icon-apple" viewBox="0 0 56.7 56.7"><path d="M41.8 30.5c-.1-6.2 5.1-9.2 5.3-9.4-2.9-4.2-7.4-4.8-9-4.9-3.8-.4-7.5 2.3-9.4 2.3-1.9 0-4.9-2.2-8.1-2.1-4.2.1-8 2.4-10.2 6.2-4.4 7.5-1.1 18.6 3.1 24.7 2.1 3 4.5 6.3 7.8 6.2 3.1-.1 4.3-2 8.1-2s4.8 2 8.1 2c3.4-.1 5.5-3 7.5-6 2.4-3.5 3.3-6.8 3.4-7-.1-.1-6.6-2.5-6.6-10zm-6.2-18.3c1.7-2.1 2.9-5 2.6-7.9-2.5.1-5.5 1.6-7.2 3.7-1.6 1.8-3 4.8-2.6 7.6 2.6.3 5.5-1.3 7.2-3.4z"/></symbol><symbol id="equatio-svg-platform-icon-chrome" viewBox="0 0 190 190"><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_2_)"><path d="M21 7v108h39.4L95 55h88V7H21z" fill="#db4437"/><linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="28.345" y1="117.972" x2="80.845" y2="148.641" gradientTransform="matrix(1 0 0 -1 0 192)"><stop offset="0" stop-color="#a52714" stop-opacity=".6"/><stop offset=".66" stop-color="#a52714" stop-opacity="0"/></linearGradient><path d="M21 7v108h39.4L95 55h88V7H21z" fill="url(#SVGID_3_)"/></g><clipPath id="SVGID_5_"><use xlink:href="#SVGID_4_" overflow="visible"/></clipPath><path d="M61.3 114.7L21.5 46.4l-.6 1 39 67.8 1.4-.5z" clip-path="url(#SVGID_5_)" fill="#3e2723" fill-opacity=".15"/><clipPath id="SVGID_7_"><use xlink:href="#SVGID_6_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_7_)"><path d="M7 183h83.8l39-39v-29H60.2L7 23.5V183z" fill="#0f9d58"/><linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" x1="109.865" y1="28.491" x2="51.535" y2="62.661" gradientTransform="matrix(1 0 0 -1 0 192)"><stop offset="0" stop-color="#055524" stop-opacity=".4"/><stop offset=".33" stop-color="#055524" stop-opacity="0"/></linearGradient><path d="M7 183h83.8l39-39v-29H60.2L7 23.5V183z" fill="url(#SVGID_8_)"/></g><clipPath id="SVGID_10_"><use xlink:href="#SVGID_9_" overflow="visible"/></clipPath><path d="M128.8 116.3l-.8-.4-38.3 67h1l38.3-67-.2.4z" clip-path="url(#SVGID_10_)" fill="#263238" fill-opacity=".15"/><clipPath id="SVGID_12_"><use xlink:href="#SVGID_11_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_12_)"><clipPath id="SVGID_14_"><use xlink:href="#SVGID_13_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_14_)"><path d="M95 55l34.6 60L91 183h92V55H95z" fill="#ffcd40"/><linearGradient id="SVGID_15_" gradientUnits="userSpaceOnUse" x1="120.964" y1="143.224" x2="135.654" y2="78.894" gradientTransform="matrix(1 0 0 -1 0 192)"><stop offset="0" stop-color="#ea6100" stop-opacity=".3"/><stop offset=".66" stop-color="#ea6100" stop-opacity="0"/></linearGradient><path d="M95 55l34.6 60L91 183h92V55H95z" fill="url(#SVGID_15_)"/></g><clipPath id="SVGID_17_"><use xlink:href="#SVGID_16_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_17_)"><path d="M95 55l34.6 60L91 183h92V55H95z" fill="#ffcd40"/><linearGradient id="SVGID_18_" gradientUnits="userSpaceOnUse" x1="120.964" y1="143.224" x2="135.654" y2="78.894" gradientTransform="matrix(1 0 0 -1 0 192)"><stop offset="0" stop-color="#ea6100" stop-opacity=".3"/><stop offset=".66" stop-color="#ea6100" stop-opacity="0"/></linearGradient><path d="M95 55l34.6 60L91 183h92V55H95z" fill="url(#SVGID_18_)"/></g><clipPath id="SVGID_20_"><use xlink:href="#SVGID_19_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_20_)"><clipPath id="SVGID_22_"><use xlink:href="#SVGID_21_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_22_)"><path d="M21 7v108h39.4L95 55h88V7H21z" fill="#db4437"/><linearGradient id="SVGID_23_" gradientUnits="userSpaceOnUse" x1="28.345" y1="117.972" x2="80.845" y2="148.641" gradientTransform="matrix(1 0 0 -1 0 192)"><stop offset="0" stop-color="#a52714" stop-opacity=".6"/><stop offset=".66" stop-color="#a52714" stop-opacity="0"/></linearGradient><path d="M21 7v108h39.4L95 55h88V7H21z" fill="url(#SVGID_23_)"/></g><clipPath id="SVGID_25_"><use xlink:href="#SVGID_24_" overflow="visible"/></clipPath><radialGradient id="SVGID_26_" cx="667.18" cy="137.05" r="84.08" gradientTransform="matrix(1 0 0 -1 -576 192)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3e2723" stop-opacity=".2"/><stop offset="1" stop-color="#3e2723" stop-opacity="0"/></radialGradient><path d="M95 55v21l78.4-21H95z" clip-path="url(#SVGID_25_)" fill="url(#SVGID_26_)"/><clipPath id="SVGID_28_"><use xlink:href="#SVGID_27_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_28_)"><clipPath id="SVGID_30_"><use xlink:href="#SVGID_29_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_30_)"><path d="M7 183h83.8l39-39v-29H60.2L7 23.5V183z" fill="#0f9d58"/><linearGradient id="SVGID_31_" gradientUnits="userSpaceOnUse" x1="109.865" y1="28.491" x2="51.535" y2="62.661" gradientTransform="matrix(1 0 0 -1 0 192)"><stop offset="0" stop-color="#055524" stop-opacity=".4"/><stop offset=".33" stop-color="#055524" stop-opacity="0"/></linearGradient><path d="M7 183h83.8l39-39v-29H60.2L7 23.5V183z" fill="url(#SVGID_31_)"/></g><clipPath id="SVGID_33_"><use xlink:href="#SVGID_32_" overflow="visible"/></clipPath><radialGradient id="SVGID_34_" cx="596.88" cy="144.48" r="78.04" gradientTransform="matrix(1 0 0 -1 -576 192)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3e2723" stop-opacity=".2"/><stop offset="1" stop-color="#3e2723" stop-opacity="0"/></radialGradient><path d="M21 47.5l57.2 57.2L60.4 115 21 47.5z" clip-path="url(#SVGID_33_)" fill="url(#SVGID_34_)"/><clipPath id="SVGID_36_"><use xlink:href="#SVGID_35_" overflow="visible"/></clipPath><radialGradient id="SVGID_37_" cx="670.84" cy="96.86" r="87.87" gradientTransform="matrix(1 0 0 -1 -576 192)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#263238" stop-opacity=".2"/><stop offset="1" stop-color="#263238" stop-opacity="0"/></radialGradient><path d="M90.8 183l21-78.3 17.8 10.3-38.8 68z" clip-path="url(#SVGID_36_)" fill="url(#SVGID_37_)"/><clipPath id="SVGID_39_"><use xlink:href="#SVGID_38_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_39_)"><circle cx="95" cy="95" r="40" fill="#f1f1f1"/><circle cx="95" cy="95" r="32" fill="#4285f4"/></g><clipPath id="SVGID_41_"><use xlink:href="#SVGID_40_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_41_)"><path d="M95 54c-22 0-40 18-40 40v1c0-22 18-40 40-40h88v-1H95z" fill="#3e2723" fill-opacity=".2"/><path d="M129.6 115c-7 12-19.8 20-34.6 20s-27.7-8-34.6-20L7 23.5v1L60.4 116c7 12 19.8 20 34.6 20s27.7-8 34.6-20v-1z" fill="#fff" fill-opacity=".1"/><path d="M96 55h-.5c22 .3 39.5 18 39.5 40s-17.6 39.7-39.5 40h.5c22 0 40-18 40-40s-18-40-40-40z" opacity=".1" fill="#3e2723"/><path d="M130 116.3c3.4-5.8 5.4-12.6 5.4-20 0-4-.7-8.2-2-12 1 3.4 1.6 7 1.6 10.7 0 7.3-2 14-5.4 20L91 183h1l38.2-66.5-.2-.2z" fill="#fff" fill-opacity=".2"/></g><clipPath id="SVGID_43_"><use xlink:href="#SVGID_42_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_43_)"><path d="M95 8c48.4 0 87.7 39 88 87.5V95c0-48.6-39.4-88-88-88S7 46.4 7 95v.5C7.3 47 46.6 8 95 8z" fill="#fff" fill-opacity=".2"/><path d="M95 182c48.4 0 87.7-39 88-87.5v.5c0 48.6-39.4 88-88 88S7 143.6 7 95v-.5C7.3 143 46.6 182 95 182z" fill="#3e2723" fill-opacity=".15"/></g><radialGradient id="SVGID_44_" cx="33.29" cy="160.99" r="176.75" gradientTransform="matrix(1 0 0 -1 0 192)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity=".1"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient><circle cx="95" cy="95" r="88" fill="url(#SVGID_44_)"/><path d="M-1-1h192v192H-1V-1z" fill="none"/></g></g></g></symbol><symbol id="equatio-svg-platform-icon-safari" viewBox="0 0 512 512"><path d="M105 0h303c58 0 105 47 105 105v302c0 58-47 105-105 105H105C47 512 0 465 0 407V105C0 47 47 0 105 0z" fill="#fff"/><linearGradient id="equatio-platform-icon-safari-SVGID_1_" gradientUnits="userSpaceOnUse" x1="-424.549" y1="640.716" x2="-424.549" y2="639.716" gradientTransform="matrix(448 0 0 -448 190454 287073)"><stop offset="0" stop-color="#19d7ff"/><stop offset="1" stop-color="#1e64f0"/></linearGradient><circle cx="256" cy="256" r="224" fill="url(#equatio-platform-icon-safari-SVGID_1_)"/><path d="M409 102L237 237l40 40 132-175z" fill="red"/><path d="M102 409l135-172 40 40-175 132z" fill="#fff"/><path d="M256 54v33m0 337v33m35-399.9l-5.7 32.5m-58.6 331.8l-5.7 32.5M324.9 66.2l-11.3 31M198.4 413.8l-11.3 31M221 57.1l5.7 32.5m58.6 331.8l5.7 32.5M187.1 66.2l11.3 31m115.2 316.6l11.3 31M155.2 81l16.6 28.6m168.5 291.8l16.5 28.6M126.5 101.1l21.2 25.3m216.6 258.2l21.2 25.3M101.6 126l25.3 21.2m258.2 216.6l25.3 21.2M81.5 154.8l28.6 16.5m291.8 168.5l28.6 16.5M66.7 186.6l31 11.3m316.6 115.2l31 11.3M57.6 220.5l32.5 5.7m331.8 58.6l32.5 5.7m-399.9-35h33m337 0h33m-399.9 35l32.5-5.7m331.8-58.6l32.5-5.7M66.7 324.4l31-11.3m316.6-115.2l31-11.3M81.5 356.3l28.6-16.5m291.8-168.5l28.6-16.5M101.6 385l25.3-21.2m258.2-216.6l25.3-21.2M126.5 409.9l21.2-25.3m216.6-258.2l21.2-25.3M155.2 430l16.6-28.6m168.5-291.8L356.8 81M238.4 54.8l1.6 17.9m32 365.6l1.6 17.9M203.8 60.9l4.7 17.4m95 354.4l4.7 17.4M170.8 72.9l7.6 16.3m155.1 332.6l7.7 16.3M140.4 90.4l10.3 14.8m210.6 300.6l10.3 14.8M113.5 113l12.7 12.7m259.6 259.6l12.7 12.7M90.9 139.9l14.8 10.3m300.6 210.6l14.8 10.3M73.4 170.3l16.3 7.6M422.3 333l16.3 7.7M61.4 203.3l17.4 4.7m354.4 95l17.4 4.7M55.3 237.9l17.9 1.6m365.6 32l17.9 1.6m-401.4 0l17.9-1.6m365.6-32l17.9-1.6M61.4 307.7l17.4-4.7m354.4-95l17.4-4.7M73.4 340.7l16.3-7.6m332.6-155.2l16.3-7.6M90.9 371.1l14.8-10.3m300.6-210.6l14.8-10.3M140.4 420.6l10.3-14.8m210.5-300.6l10.4-14.8M170.8 438.1l7.7-16.3m155-332.6l7.7-16.3M203.8 450.1l4.7-17.4m95-354.4l4.7-17.4m-69.8 395.3l1.6-17.9m32-365.6l1.6-17.9" stroke="#fff" stroke-width="3"/></symbol><symbol id="equatio-svg-premium-icon" viewBox="0 0 200.6 199.5"><path d="M70.2 74l77.3-51.5c.8-.5 1.6-1 2.5-1.4L194.6.8c4.8-2.2 7.3.1 5.4 5.1l-17.4 46.7c-.5 1.5-1.3 2.9-2.2 4.1l-52.7 73.5c-.4.5-.8 1-1.2 1.4l-42.7 42.8c-4.4 4.4-11.6 4.4-16 0L27.4 134c-4.4-4.4-4.4-11.4-.1-15.9l41-42.5c.6-.6 1.2-1.1 1.9-1.6z" fill="currentColor"/><path d="M67.8 75.5c-27.8-.2-50.2 8-65 33.2 6.6 2.8 18 6 25 8.6 1.3.5 26.3-27.9 40-41.8zm59 56c-13.8 13.6-43 41.4-42.5 43 2.5 7 6.6 15.9 9.3 22.3 25.7-14.8 33.4-37.4 33.2-65.3z" fill="currentColor"/><path d="M157.3 55.1c-.1-6.8-5.1-11.4-11.9-11.1-6.2.2-11.2 5.2-11.2 11.3 0 6.2 5.6 11.8 11.8 11.8 6.5-.1 11.4-5.3 11.3-12zm-42 42.3c6.9-.1 11.3-4.8 11.2-11.7-.1-7.1-4.5-11.2-11.7-11-6.8.2-11.3 5.1-11 12 .3 6.2 5.2 10.8 11.5 10.7zm-19.1 19.5c.2-6.7-4.6-11.8-11.4-11.9-6.8-.1-11.7 4.8-11.7 11.5 0 6.4 4.7 11.2 11 11.5 6.8.4 11.9-4.3 12.1-11.1z" fill="#a6ce3c"/><path d="M56.9 178.1c-3.3 2.5-6.8 5.5-10.6 8.1-3.1 2.2-6.3 4.9-9.8 5.9-9.9 2.8-19.9 4.9-29.9 7.1-4.3.9-7.5-.4-6.3-5.6 3.5-15.5 2.8-32.6 17.1-44.1 2-1.6 2.5-5.3 3.7-8.3 12.2 12.7 24.2 25 35.8 36.9zm-38.3 6.1c12.8.2 23.9-5.8 21.7-10.5-2.8-5.8-8.4-11.4-14.2-14.3-4.6-2.3-10.6 8.1-10.5 18.6-.1 2.3 2.2 4.7 3 6.2z" fill="currentColor"/><path d="M157.3 55.1c.1 6.7-4.8 11.9-11.3 11.9-6.3 0-11.8-5.5-11.8-11.8 0-6 5-11.1 11.2-11.3 6.8-.2 11.8 4.4 11.9 11.2zm-42 42.3c-6.3.1-11.3-4.5-11.5-10.8-.3-6.9 4.2-11.8 11-12 7.3-.2 11.6 3.9 11.7 11 .2 7.1-4.3 11.7-11.2 11.8zm-19.1 19.5c-.2 6.7-5.3 11.5-12 11.2-6.3-.3-11-5.2-11-11.5 0-6.7 4.9-11.6 11.7-11.5 6.7.1 11.5 5.1 11.3 11.8z" fill="#fff"/></symbol><symbol id="equatio-svg-premium-license" viewBox="0 0 340 234.5"><g opacity=".37"><radialGradient id="SVGID_1_" cx="336.384" cy="116107.898" r="288.534" gradientTransform="matrix(.256 0 0 .02555 -26.086 -2748.966)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d1e1c"/><stop offset=".146" stop-color="#1d1e1c" stop-opacity=".854"/><stop offset="1" stop-color="#1d1e1c" stop-opacity="0"/></radialGradient><path d="M60.1 203.3c-43.9 0-81.2 3.9-96.6 9.5v10.7c15.5 5.6 52.7 9.5 96.6 9.5 57.1 0 103.4-6.6 103.4-14.9 0-8.2-46.3-14.8-103.4-14.8z" fill="url(#SVGID_1_)"/></g><path d="M98.3 62.7H48c-7.2 0-13.1 5.8-13.1 13.1v94.3c0 7.2 5.8 13.1 13.1 13.1h6.5v33.2c0 1.1.9 1.9 1.9 1.9 1.1 0 1.9-.9 1.9-1.9v-33.2H62v33.2c0 1.1.9 1.9 1.9 1.9 1.1 0 1.9-.9 1.9-1.9v-33.2h6.5c7.2 0 13.1-5.8 13.1-13.1V82.7l15-15c2.7-2.7 1.8-5-2.1-5z" fill="#fd3269"/><g fill="#fff"><path d="M72.9 75.6c-1.6 0-3-1.3-3-3 0-1.6 1.3-3 3-3 1.6 0 3 1.3 3 3s-1.4 3-3 3z"/><circle cx="72.9" cy="72.6" r="3"/></g><path d="M111.7 78l-45.2 45.2c-1.2 1.2-3.1 1.2-4.2 0l-.7-.7c-1.2-1.2-1.2-3.1 0-4.2L106.8 73c1.2-1.2 3.1-1.2 4.2 0l.7.7c1.2 1.2 1.2 3.1 0 4.3z" fill="#fd3269"/><path d="M12.7 81.5l45.2 45.2c1.2 1.2 3.1 1.2 4.2 0l.7-.7c1.2-1.2 1.2-3.1 0-4.2L17.7 76.5c-1.2-1.2-3.1-1.2-4.2 0l-.7.7c-1.3 1.2-1.3 3.1-.1 4.3z" fill="#fd3269"/><path d="M194.4 83.4l77.3-51.5c.8-.5 1.6-1 2.5-1.4l44.6-20.3c4.8-2.2 7.3.1 5.4 5.1L306.8 62c-.5 1.5-1.3 2.9-2.2 4.1l-52.7 73.5c-.4.5-.8 1-1.2 1.4L208 183.8c-4.4 4.4-11.6 4.4-16 0l-40.4-40.4c-4.4-4.4-4.4-11.4-.1-15.9l41-42.5c.6-.6 1.2-1.1 1.9-1.6z" fill="#515f70"/><path d="M192 84.9c-27.8-.2-50.2 8-65 33.2 6.6 2.8 18 6 25 8.6 1.3.5 26.3-27.9 40-41.8zm59 56c-13.8 13.6-43 41.4-42.5 43 2.5 7 6.6 15.9 9.3 22.3 25.7-14.8 33.4-37.4 33.2-65.3z" fill="#00b7ff"/><path d="M281.5 64.5c-.1-6.8-5.1-11.4-11.9-11.1-6.2.2-11.2 5.2-11.2 11.3 0 6.2 5.6 11.8 11.8 11.8 6.5-.1 11.4-5.3 11.3-12zm-42 42.3c6.9-.1 11.3-4.8 11.2-11.7-.1-7.1-4.5-11.2-11.7-11-6.8.2-11.3 5.1-11 12 .3 6.2 5.2 10.8 11.5 10.7zm-19.1 19.5c.2-6.7-4.6-11.8-11.4-11.9-6.8-.1-11.7 4.8-11.7 11.5 0 6.4 4.7 11.2 11 11.5 6.8.4 11.9-4.3 12.1-11.1z" fill="#a6ce3c"/><path d="M181.1 187.5c-3.3 2.5-6.8 5.5-10.6 8.1-3.1 2.2-6.3 4.9-9.8 5.9-9.9 2.8-19.9 4.9-29.9 7.1-4.3.9-7.5-.4-6.3-5.6 3.5-15.5 2.8-32.6 17.1-44.1 2-1.6 2.5-5.3 3.7-8.3 12.2 12.7 24.2 25 35.8 36.9zm-38.3 6.1c12.8.2 23.9-5.8 21.7-10.5-2.8-5.8-8.4-11.4-14.2-14.3-4.6-2.3-10.6 8.1-10.5 18.6-.1 2.3 2.2 4.7 3 6.2z" fill="#00417c"/><path d="M281.5 64.5c.1 6.7-4.8 11.9-11.3 11.9-6.3 0-11.8-5.5-11.8-11.8 0-6 5-11.1 11.2-11.3 6.8-.2 11.8 4.4 11.9 11.2zm-42 42.3c-6.3.1-11.3-4.5-11.5-10.8-.3-6.9 4.2-11.8 11-12 7.3-.2 11.6 3.9 11.7 11 .2 7.1-4.3 11.7-11.2 11.8zm-19.1 19.5c-.2 6.7-5.3 11.5-12 11.2-6.3-.3-11-5.2-11-11.5 0-6.7 4.9-11.6 11.7-11.5 6.7.1 11.5 5.1 11.3 11.8z" fill="#fff"/></symbol><symbol id="equatio-svg-renew-reminder" viewBox="0 0 340 234.5"><path d="M102.5-418.4H39.1c-8.4 0-15.3 6.9-15.3 15.2v43.9c0 8.4 6.9 15.2 15.3 15.2H52v17.9c0 1 .8 1.8 1.9 1.8 1 0 1.9-.8 1.9-1.8V-344h3.5v17.9c0 1 .8 1.8 1.9 1.8 1 0 1.9-.8 1.9-1.8V-344H76c8.4 0 15.3-6.9 15.3-15.2v-38.1l14.3-14.3c3.4-3.7 2.2-6.8-3.1-6.8z" fill="#9f5dff"/><g fill="#fff"><path d="M79.5-405.1c-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.8 2.9-2.8 1.6 0 2.9 1.3 2.9 2.8 0 1.6-1.3 2.9-2.9 2.9z"/><ellipse cx="79.5" cy="-408" rx="2.9" ry="2.9"/></g><path d="M106.7-401.4c.4.7.2 1.6-.6 2.1l-15.8 9c-.7.4-1.6.2-2.1-.6-.4-.7-.2-1.6.6-2.1l15.8-9c.7-.4 1.6-.1 2.1.6zm-99.1.3c-.4.8 0 1.7.7 2l16.4 7.8c.8.4 1.7 0 2-.7.4-.8 0-1.7-.7-2l-16.4-7.8c-.8-.4-1.7-.1-2 .7z" fill="#9f5dff"/><g opacity=".37"><radialGradient id="SVGID_1_" cx="839.354" cy="84519.219" r="453.189" gradientTransform="matrix(.2376 0 0 .02555 -135.034 -2482.942)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d1e1c"/><stop offset=".146" stop-color="#1d1e1c" stop-opacity=".854"/><stop offset="1" stop-color="#1d1e1c" stop-opacity="0"/></radialGradient><path d="M64.5-346.4c-64 0-118.3 6.2-140.9 14.9v16.8c22.6 8.7 76.8 14.9 140.9 14.9 83.2 0 150.6-10.4 150.6-23.3.1-12.9-67.4-23.3-150.6-23.3z" fill="url(#SVGID_1_)"/></g><g opacity=".37"><radialGradient id="SVGID_2_" cx="1159.533" cy="95136.406" r="271.258" gradientTransform="matrix(.3648 0 0 .02555 -127.583 -2482.942)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d1e1c"/><stop offset=".146" stop-color="#1d1e1c" stop-opacity=".854"/><stop offset="1" stop-color="#1d1e1c" stop-opacity="0"/></radialGradient><path d="M295.6-65.7c-58.9 0-108.7 3.7-129.5 8.9v10.1c20.7 5.2 70.6 8.9 129.5 8.9C372-37.8 434-44 434-51.7c0-7.8-62-14-138.4-14z" fill="url(#SVGID_2_)"/></g><path d="M258.6-214H311c7.5 0 12.9 6.8 12.9 14.3v97.9c0 7.5-5.4 14.3-12.9 14.3h-5.8v33.7c0 1.1-1 2-2.1 2s-2.1-.9-2.1-2v-33.7h-4.1v33.7c0 1.1-1 2-2.1 2s-2.1-.9-2.1-2v-33.7h-7c-7.5 0-13.7-6.8-13.7-14.3v-90.8l-15.5-15.9c-2.9-2.8-1.9-5.5 2.1-5.5z" fill="#aeca37"/><g fill="#fff"><path d="M282-203c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.8 0-3.1-1.4-3.1-3.1z"/><circle cx="285" cy="-203" r="3.1"/></g><path d="M273.6-154.3c1.3-.1 2.2-1.2 2.1-2.5-.1-1.3-1.2-2.2-2.5-2.1l-18.2 1.6c-1.3.1-2.2 1.2-2.1 2.5.1 1.3 1.2 2.2 2.5 2.1h.2l3.4 38.4c.4 4.9 4.8 8.5 9.7 8.1 4.9-.4 8.5-4.8 8.1-9.7l-3.4-38.4h.2z" opacity=".43" fill="#fff"/><path d="M268.8-105.3c-5.4.5-10.1-3.5-10.6-8.9l-3.4-37.6c-1.4-.2-2.6-1.3-2.8-2.8-.2-1.7 1.1-3.3 2.9-3.4l18.2-1.6c1.7-.2 3.3 1.1 3.4 2.9.1 1.5-.8 2.9-2.2 3.3l3.4 37.6c.5 5.2-3.5 10-8.9 10.5zm-13.7-51c-.8.1-1.3.8-1.3 1.5.1.8.8 1.3 1.5 1.3l1.1-.1 3.5 39.3c.4 4.4 4.3 7.7 8.7 7.3s7.7-4.3 7.3-8.7l-3.5-39.3 1.1-.1c.8-.1 1.3-.8 1.3-1.5-.1-.8-.8-1.3-1.5-1.3l-18.2 1.6z" fill="#ebeff2"/><path d="M259.6-137.6l2.1 23.1c.3 3.5 3.4 6.1 7 5.8 3.5-.3 6.1-3.4 5.8-7l-2.1-23.1-12.8 1.2z" fill="#e94e68"/><path d="M294.7-129c0 1.1-.9 2.1-2.1 2.1h-24.9c-1.1 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1h24.9c1.2.1 2.1 1 2.1 2.1z" fill="#aeca37"/><path d="M106.6-66c-54 0-98-44-98-98s44-98 98-98 98 44 98 98-43.9 98-98 98z" fill="#eaf0f4"/><path d="M107.9-260.8c-53.3 0-96.8 43.3-96.8 96.6s43.4 96.6 96.8 96.6 96.8-43.3 96.8-96.6c-.1-53.3-43.5-96.6-96.8-96.6zm0 176c-43.9 0-79.5-35.5-79.5-79.4 0-43.8 35.6-79.4 79.5-79.4s79.5 35.5 79.5 79.4c0 43.9-35.6 79.4-79.5 79.4z" fill="#000623"/><path d="M161.3-245.3c-.1-.1-.1-.1-.2-.1L51.8-82.8c.1 0 .1.1.2.2 44.9 30.1 105.9 18.2 136-26.7 30.1-44.9 18.2-105.9-26.7-136z" fill="#dfe5ea"/><path d="M106.6-262c-54 0-98 44-98 98s44 98 98 98 98-44 98-98-43.9-98-98-98zm0 178.5c-44.5 0-80.5-36-80.5-80.5s36-80.5 80.5-80.5 80.5 36 80.5 80.5c.1 44.5-36 80.5-80.5 80.5z" fill="#515f70"/><path fill="#00b7ff" d="M74.1-113l5 2.9-8 13.8-5-2.9 8-13.8zm68-117.9l5.1 2.9-8 13.8-5-2.9 7.9-13.8zm-89 94.8L56-131l-13.8 7.9-2.9-5 13.8-8zM171-204.2l3 5.1-13.8 8-3-5.1 13.8-8zM46.5-166.5v5.8H30.6v-5.8h15.9zm136.2 0v5.8h-15.9v-5.8h15.9zM56-196.2l-2.9 5.1-13.8-8 2.9-5.1 13.8 8zm118 68.1l-3 5-13.8-7.9 3-5.1 13.8 8zm-94.9-89l-5 2.9-8-13.8 5-2.9 8 13.8zm68.1 117.9l-5.1 2.9-7.9-13.8 5-2.9 8 13.8zm-37.6-124.5h-5.9v-16h5.9v16zm0 136.1h-5.9v-15.9h5.9v15.9z"/><path d="M104.7-169.4c0-.4.1-.7.3-.9h-.3L90-209.6c-.5-1.3-2-2-3.3-1.5-1.3.5-2 2-1.5 3.3l15.1 40.5c1.7 0 4.2-.3 4.4-2.1z" fill="#00417c"/><path d="M127.7-178.5c-1-1.6-3.1-2-4.7-1l-14.7 9.5c-1.1-.5-2.4-.6-3.6-.4 0 0-3.5 1.4-4.4 3.1s-1.2 3.7-.5 5.6c1.3 3.4 5 5.1 8.3 3.8 2.8-1 4.4-3.8 4.2-6.6l14.3-9.3c1.7-1 2.1-3.1 1.1-4.7z" fill="#00417c"/><g fill-rule="evenodd" clip-rule="evenodd"><g fill="#00417c"><path d="M222.3-117.4c-2.6.1-4.5 3.4-4.4 7.3L216.8-97l3.3.1 1.5-5.6v-.1c.5.2 1 .3 1.5.3 2.7-.1 4.6-3.6 4.4-7.8-.2-4.2-2.5-7.5-5.2-7.3zm.1 1.8c2-.1 3.8 2.4 3.9 5.5.2 3.1-1.3 5.8-3.3 5.9-2 .1-3.8-2.4-4-5.5-.1-3.1 1.4-5.8 3.4-5.9z"/><path d="M219.4-96.9l-2.9 34.8-2.2-31.7 3-3.2zm-7.9-20.6c2.6.2 4.4 3.4 4.3 7.4l.9 13.1-3.3.1-1.5-5.6v-.1c-.5.2-1 .3-1.5.3-2.7-.2-4.6-3.7-4.3-7.9.3-4.3 2.7-7.5 5.4-7.3zm-.1 1.8c-2-.1-3.8 2.3-4 5.4-.2 3.1 1.2 5.8 3.2 5.9 2 .1 3.8-2.3 4-5.4.2-3.1-1.2-5.7-3.2-5.9z"/><path d="M214.1-97l2.4 34.9 2.7-31.7-3-3.2z"/><ellipse transform="matrix(.06818 -.9977 .9977 .06818 291.917 132.18)" cx="216.7" cy="-90.2" rx=".9" ry=".8"/></g><path d="M215.7-80.1l13.5-50.6c.1-.5.7-.8 1.2-.7l7.3 1.9c.5.1.8.7.7 1.2l-13.6 50.6c-.1.5-.7.8-1.2.7l-7.3-1.9c-.4-.1-.7-.6-.6-1.2z" fill="#00417c"/><path transform="rotate(-75.167 218.038 -80.378)" fill="#fff" d="M217.8-82.5h.4v4.3h-.4z"/><path fill="#fff" d="M216.1-81.6l.1-.4 2 .5-.1.4zm.3-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 2 .5-.1.4zm.2-.9l.2-.4 2 .5-.2.4zm.3-.9l.1-.4 4.2 1.1-.1.4zm.2-.9l.1-.4 2 .6-.1.4zm.3-.9l.1-.4 2 .6-.1.4zm.2-.9l.1-.4 2 .6-.1.4zm.2-.8l.1-.5 2.1.6-.2.4zm.3-.9l.1-.4 4.2 1.1-.1.4zm.2-.9l.1-.4 2 .5-.1.4zm.3-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 2 .5-.1.4zm.3-.9l.1-.4 4.2 1.1-.1.4z"/><path transform="rotate(-74.942 220.76 -94.918)" fill="#fff" d="M220.6-96h.4v2.1h-.4z"/><path fill="#fff" d="M219.9-95.9l.2-.4 2 .6-.1.4zm.3-.9l.1-.4 2 .6-.1.4zm.2-.9l.1-.4 2 .6-.1.4zm.3-.8l.1-.5 4.2 1.2-.1.4z"/><path transform="rotate(-74.966 221.954 -99.371)" fill="#fff" d="M221.7-100.4h.4v2.1h-.4z"/><path fill="#fff" d="M221.1-100.3l.1-.4 2.1.5-.2.4zm.3-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 2 .5-.1.4zm.3-.9l.1-.4 4.2 1.1-.2.4z"/><path transform="rotate(-74.971 223.147 -103.817)" fill="#fff" d="M222.9-104.9h.4v2.1h-.4z"/><path fill="#fff" d="M222.3-104.8l.1-.4 2 .5-.1.5zm.3-.9l.1-.4 2 .6-.1.4zm.2-.9l.1-.4 2 .6-.1.4zm.2-.8l.2-.5 4.2 1.2-.2.4z"/><path transform="rotate(-74.966 224.34 -108.277)" fill="#fff" d="M224.1-109.3h.4v2.1h-.4z"/><path fill="#fff" d="M223.5-109.2l.1-.4 2 .5-.1.4zm.3-.9l.1-.4 2 .5-.1.4z"/><path transform="rotate(-75.173 225.057 -110.94)" fill="#fff" d="M224.8-112h.4v2.1h-.4z"/><path fill="#fff" d="M224.2-111.9l.2-.4 4.1 1.1-.1.4zm.3-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 2 .5-.1.5zm.3-.9l.1-.4 2 .6-.1.4z"/><path transform="rotate(-74.935 226.262 -115.406)" fill="#fff" d="M226-116.4h.4v2.1h-.4z"/><path fill="#fff" d="M225.4-116.4l.1-.4 4.2 1.2-.1.4z"/><path fill="#fff" d="M225.4-116.4l.1-.4 4.2 1.2-.1.4z"/><path transform="rotate(-75.202 226.737 -117.181)" fill="#fff" d="M226.5-118.2h.4v2.1h-.4z"/><path transform="rotate(-74.966 226.965 -118.073)" fill="#fff" d="M226.8-119.1h.4v2.1h-.4z"/><path fill="#fff" d="M226.2-119l.1-.4 2 .5-.1.4z"/><path transform="rotate(-74.935 227.456 -119.86)" fill="#fff" d="M227.2-120.9h.4v2.1h-.4z"/><path fill="#fff" d="M226.6-120.8l.1-.4 4.2 1.1-.1.4z"/><path transform="rotate(-75.167 227.92 -121.637)" fill="#fff" d="M227.7-122.7h.4v2.1h-.4z"/><path transform="rotate(-74.942 228.157 -122.526)" fill="#fff" d="M227.9-123.6h.4v2.1h-.4z"/><path fill="#fff" d="M227.3-123.5l.2-.4 2 .5-.2.5z"/><path transform="rotate(-74.942 228.635 -124.309)" fill="#fff" d="M228.4-125.3h.4v2.1h-.4z"/><path fill="#fff" d="M227.8-125.3l.1-.4 4.2 1.2-.1.4zm.3-.8l.1-.5 2 .6-.1.4zm.2-.9l.1-.5 2 .6-.1.4zm.2-.9l.1-.4 2.1.5-.2.4zm.3-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 4.2 1.1-.1.4z"/><g fill="#00417c"><path d="M201.3-101.9l.1-7.1 3.6 6.1-.8.6-1.9.5z"/><path d="M202.3-101.7l6.4 23.8-.9.3-6.4-23.8c-.1-.5 0-1 .2-1.1.2-.1.6.3.7.8z"/><path d="M203-102.9c.5-.1 1 .2 1.2.7l6.4 23.8-1.9.5-6.4-23.8c-.1-.5.2-1.1.7-1.2z"/><path d="M205.1-102.5l6.4 23.8-.9.3-6.4-23.8c-.1-.5 0-1 .2-1.1.3 0 .6.3.7.8zm-3.7-4.3v-2.2l1 1.9z"/></g><g fill="#00417c"><path d="M209-107l1.5-6.9 2.3 6.7-.9.4-2 .1z"/><path d="M209.9-106.6l1.4 24.6-1 .1-1.4-24.6c0-.5.2-1 .4-1 .4-.1.6.3.6.9z"/><path d="M210.8-107.7c.5 0 1 .4 1 .9l1.4 24.6-1.9.1-1.4-24.6c0-.5.4-.9.9-1z"/><path d="M212.8-106.8l1.4 24.6-1 .1-1.4-24.6c0-.5.2-1 .4-1 .4-.1.6.4.6.9zm-2.7-5.1l.4-2 .7 2z"/></g><path d="M226.3-55.3h3.9v-31.9l-3.9-1.1zm-23.2-33.5h23.2v33.5h-23.2z" fill="#00417c"/></g><g opacity=".37"><radialGradient id="SVGID_3_" cx="614.705" cy="51718.18" r="108.793" gradientTransform="matrix(.6084 0 0 .05166 -319.539 -2454.731)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d1e1c"/><stop offset=".074" stop-color="#151514" stop-opacity=".926"/><stop offset=".239" stop-color="#090909" stop-opacity=".761"/><stop offset=".462" stop-color="#020202" stop-opacity=".538"/><stop offset="1" stop-opacity="0"/></radialGradient><path d="M54.4 205.9c-39.4 0-73 3-86.4 7.2v8.2c13.4 4.2 47 7.2 86.4 7.2 51.2 0 92.6-5.1 92.6-11.3.1-6.2-41.4-11.3-92.6-11.3z" fill="url(#SVGID_3_)"/></g><path d="M80.6 168c0 7.3-5.9 13.3-13.3 13.3H42.5c-7.3 0-13.3-5.9-13.3-13.3V72c0-7.3 5.9-13.3 13.3-13.3h24.7c7.3 0 13.3 6 13.3 13.3v96z" fill="#fd3269"/><path d="M60.3 92.2c0 3.9 2.3 4.8 5 2.1l30.5-30.5c2.8-2.8 1.8-5-2.1-5H67.4c-3.9 0-7.1 3.2-7.1 7.1v26.3z" fill="#fd3269"/><path d="M75.3 46.6c-.9 1.9-5.2 2.6-2.9 5.9-2.4-2.9-3.4-10.8.5-13.5 5-3.5 10.7 5.9 2.4 7.6zm-36.1 0c.9 1.9 5.2 2.6 2.9 5.9 2.3-2.9 3.3-10.9-.5-13.5-5-3.5-10.7 5.9-2.4 7.6z" fill="#53a2da"/><path d="M51.1 215.1v-41.2m0 43.1c-1.1 0-2-.9-2-2v-41.2c0-1.1.9-2 2-2s2 .9 2 2V215c0 1.1-.9 2-2 2zm7.6-1.9v-37.9m0 39.8c-1.1 0-2-.9-2-2v-37.9c0-1.1.9-2 2-2s2 .9 2 2V215c0 1.1-.9 2-2 2z" fill="#fd3269"/><path d="M60.3 97.3s4.8 2.1 8.4.6c0 0-6.8 4.4-8.4-.6z" opacity=".4" fill="#221e20"/><path d="M47.9 98.6S51.5 88.5 62.6 87c11-1.5 9.1 9.2 9.1 9.2l-23.8 2.7" fill="#841627"/><g fill="#fdf6fa"><path d="M62.6 87c-4.6.6-8 2.8-10.3 5 0 .1-1 5.2 4.1 4.2l13.1-1.7s1.3-.9 2.1-2.1c-.5-2.9-2.5-6.3-9-5.4z"/><path d="M52.3 92.1c-.3.3-.5.5-.7.8l.7-.8z"/></g><path d="M54.6 98s6.5-9.9 14.9-2.1c0 0 2.9 2.7-3.6 3-6.5.2-5.5-1.7-5.5-1.7l-4.6.8" fill="#ce544c"/><path d="M59.4 94.1s6.2-.6 7.4 1.6c1.1 2.2-.8-2.1-7.4-1.5" opacity=".1" fill="#221e20"/><path d="M68.8 70.8s-6-2.7-8.9 2.5" fill="none" stroke="#fff" stroke-width="1.855" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M71.2 77.8l18.2 20c.5.5 1.3.5 1.8 0l2.5-2.5c.5-.5.5-1.3 0-1.8l-18.2-20c-.5-.5-1.3-.5-1.8 0L71.2 76c-.5.5-.5 1.3 0 1.8z" fill="#fff"/><g fill="#fd3269"><path d="M94.8 95l-15.1 26.7c-.4.6-1.1.8-1.8.5l-3.1-1.8c-.6-.4-.8-1.1-.5-1.8l15.1-26.7c.4-.6 1.1-.8 1.8-.5l3.1 1.8c.6.4.8 1.2.5 1.8z"/><path d="M72.1 77.8l18.2 20c.5.5 1.3.5 1.8 0l2.5-2.5c.5-.5.5-1.3 0-1.8l-18.2-20c-.5-.5-1.3-.5-1.8 0L72.1 76c-.5.5-.5 1.3 0 1.8z"/></g><path d="M103.8 198.3c2 5.7 8.5 10.5 13.7 11.6.7.1 1.3 1.2 2 1.3l.3 4.7c0 .6.5.9 1.1.9h25.6c.6 0 1.1-.2 1.1-.9l2.2-40.2c0-.6-.5-1.1-1.1-1.1h-30.1c-.6 0-1.1.6-1.1 1.2l.3 4.7c-1.4-.6-2.9-.9-4.4-.9-1.1 0-2.1.2-3.2.5-6.2 2.4-9.1 10.5-6.4 18.2zm4.3-9.5c.4-1.2 1.4-3.2 3.6-4 .5-.2 1.1-.3 1.6-.3 2.8 0 3.8 2.9 5 6.4l.8 13.9-.1.1c-3.4 0-9.2-3.8-10.8-8.2-.9-2.6-1-5.5-.1-7.9z" fill="#00417c"/><path d="M37.1 111l-24.9 26.1c-.5.5-1.3.5-1.8.1l-2.6-2.4c-.5-.5-.5-1.3-.1-1.8l24.9-26.1c.5-.5 1.3-.5 1.8-.1l2.6 2.4c.6.5.6 1.3.1 1.8z" fill="#fd3269"/><path d="M236 203c-54 0-98-44-98-98s44-98 98-98 98 44 98 98-44 98-98 98z" fill="#eaf0f4"/><path d="M237.2 8.2c-53.4 0-96.8 43.4-96.8 96.6 0 53.3 43.4 96.6 96.8 96.6S334 158 334 104.8c0-53.3-43.4-96.6-96.8-96.6zm0 176c-43.9 0-79.5-35.5-79.5-79.4 0-43.9 35.6-79.4 79.5-79.4s79.5 35.5 79.5 79.4c0 43.9-35.6 79.4-79.5 79.4z" fill="#000623"/><path d="M290.7 23.7c-.1-.1-.1-.1-.2-.1L181.1 186.2c.1 0 .1.1.2.2 44.9 30.1 105.9 18.2 136-26.7 30.2-44.9 18.2-105.9-26.6-136z" fill="#dfe5ea"/><path d="M236 7c-54 0-98 44-98 98s44 98 98 98 98-44 98-98c0-54.1-44-98-98-98zm0 178.5c-44.5 0-80.5-36.1-80.5-80.5 0-44.5 36.1-80.5 80.5-80.5 44.5 0 80.5 36.1 80.5 80.5 0 44.5-36 80.5-80.5 80.5z" fill="#515f70"/><path fill="#00b7ff" d="M203.4 156l5 2.9-7.9 13.8-5.1-2.9 8-13.8zm68.1-118l5 3-7.9 13.7-5.1-2.9 8-13.8zm-89.1 94.9l3 5.1-13.8 7.9-3-5 13.8-8zm118-68.1l2.9 5.1-13.8 7.9-2.9-5 13.8-8zm-124.6 37.7v5.8h-15.9v-5.8h15.9zm136.2 0v5.8h-15.9v-5.8H312zM185.4 72.8l-3 5-13.8-7.9 3-5.1 13.8 8zm117.9 68.1l-2.9 5-13.8-7.9 2.9-5.1 13.8 8zm-94.9-89.1l-5 2.9-8-13.7 5.1-3 7.9 13.8zm68.1 118l-5 2.9-8-13.8 5.1-2.9 7.9 13.8zM238.9 45.2h-5.8V29.3h5.8v15.9zm0 136.2h-5.8v-15.9h5.8v15.9z"/><circle cx="236" cy="106.9" r="7" fill="#00417c"/><path d="M236.3 123.5h-.6c-1.3 0-2.4-1.1-2.4-2.4V55c0-1.3 1.1-2.4 2.4-2.4h.6c1.3 0 2.4 1.1 2.4 2.4v66.1c0 1.3-1.1 2.4-2.4 2.4z" fill="#00417c"/><g opacity=".37"><radialGradient id="SVGID_4_" cx="332.884" cy="116380.898" r="288.534" gradientTransform="matrix(.256 0 0 .02555 -28.69 -2482.942)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d1e1c"/><stop offset=".146" stop-color="#1d1e1c" stop-opacity=".854"/><stop offset="1" stop-color="#1d1e1c" stop-opacity="0"/></radialGradient><path d="M56.6 476.3c-43.9 0-81.2 3.9-96.6 9.5v10.7c15.5 5.6 52.7 9.5 96.6 9.5 57.1 0 103.4-6.6 103.4-14.9 0-8.2-46.3-14.8-103.4-14.8z" fill="url(#SVGID_4_)"/></g><path d="M94.8 335.7H44.5c-7.2 0-13.1 5.8-13.1 13.1v94.3c0 7.2 5.8 13.1 13.1 13.1H51v33.2c0 1.1.9 1.9 1.9 1.9 1.1 0 1.9-.9 1.9-1.9v-33.2h3.6v33.2c0 1.1.9 1.9 1.9 1.9 1.1 0 1.9-.9 1.9-1.9v-33.2h6.5c7.2 0 13.1-5.8 13.1-13.1v-87.4l15-15c2.8-2.7 1.9-5-2-5z" fill="#fd3269"/><g fill="#fff"><path d="M69.4 348.6c-1.6 0-3-1.3-3-3 0-1.6 1.3-3 3-3 1.6 0 3 1.3 3 3s-1.4 3-3 3z"/><circle cx="69.4" cy="345.6" r="3"/></g><path d="M108.2 351L63 396.1c-1.2 1.2-3.1 1.2-4.2 0l-.7-.7c-1.2-1.2-1.2-3.1 0-4.2l45.2-45.2c1.2-1.2 3.1-1.2 4.2 0l.7.7c1.2 1.2 1.2 3.1 0 4.3z" fill="#fd3269"/><path d="M9.2 354.5l45.2 45.2c1.2 1.2 3.1 1.2 4.2 0l.7-.7c1.2-1.2 1.2-3.1 0-4.2l-45.2-45.2c-1.2-1.2-3.1-1.2-4.2 0l-.7.7c-1.2 1.1-1.2 3 0 4.2z" fill="#fd3269"/><path d="M190.9 356.4l77.3-51.5c.8-.5 1.6-1 2.5-1.4l44.6-20.3c4.8-2.2 7.3.1 5.4 5.1L303.3 335c-.5 1.5-1.3 2.9-2.2 4.1l-52.7 73.5c-.4.5-.8 1-1.2 1.4l-42.7 42.7c-4.4 4.4-11.6 4.4-16 0l-40.4-40.4c-4.4-4.4-4.4-11.4-.1-15.9l41-42.4c.6-.6 1.2-1.1 1.9-1.6z" fill="#515f70"/><path d="M188.5 357.9c-27.8-.2-50.2 8-65 33.2 6.6 2.8 18 6 25 8.6 1.3.5 26.3-27.9 40-41.8zm59 56c-13.8 13.6-43 41.4-42.5 43 2.5 7 6.6 15.9 9.3 22.3 25.7-14.8 33.4-37.4 33.2-65.3z" fill="#00b7ff"/><path d="M278 337.5c-.1-6.8-5.1-11.4-11.9-11.1-6.2.2-11.2 5.2-11.2 11.3 0 6.2 5.6 11.8 11.8 11.8 6.5-.1 11.4-5.3 11.3-12zm-42 42.3c6.9-.1 11.3-4.8 11.2-11.7-.1-7.1-4.5-11.2-11.7-11-6.8.2-11.3 5.1-11 12 .3 6.2 5.2 10.8 11.5 10.7zm-19.1 19.5c.2-6.7-4.6-11.8-11.4-11.9-6.8-.1-11.7 4.8-11.7 11.5 0 6.4 4.7 11.2 11 11.5 6.8.4 11.9-4.3 12.1-11.1z" fill="#a6ce3c"/><path d="M177.6 460.5c-3.3 2.5-6.8 5.5-10.6 8.1-3.1 2.2-6.3 4.9-9.8 5.9-9.9 2.8-19.9 4.9-29.9 7.1-4.3.9-7.5-.4-6.3-5.6 3.5-15.5 2.8-32.6 17.1-44.1 2-1.6 2.5-5.3 3.7-8.3 12.2 12.7 24.2 25 35.8 36.9zm-38.3 6.1c12.8.2 23.9-5.8 21.7-10.5-2.8-5.8-8.4-11.4-14.2-14.3-4.6-2.3-10.6 8.1-10.5 18.6-.1 2.3 2.2 4.7 3 6.2z" fill="#00417c"/><path d="M278 337.5c.1 6.7-4.8 11.9-11.3 11.9-6.3 0-11.8-5.5-11.8-11.8 0-6 5-11.1 11.2-11.3 6.8-.2 11.8 4.4 11.9 11.2zm-42 42.3c-6.3.1-11.3-4.5-11.5-10.8-.3-6.9 4.2-11.8 11-12 7.3-.2 11.6 3.9 11.7 11 .2 7.1-4.3 11.7-11.2 11.8zm-19.1 19.5c-.2 6.7-5.3 11.5-12 11.2-6.3-.3-11-5.2-11-11.5 0-6.7 4.9-11.6 11.7-11.5 6.7.1 11.5 5.1 11.3 11.8z" fill="#fff"/><path transform="rotate(-15.729 212.668 -509.518)" fill="#00417c" d="M182.9-510.9h59.5v2.7h-59.5z"/><path transform="rotate(-15.729 216.523 -495.831)" fill="#00417c" d="M186.8-497.2h59.5v2.7h-59.5z"/><path transform="rotate(-15.729 220.377 -482.144)" fill="#00417c" d="M190.6-483.5h59.5v2.7h-59.5z"/><ellipse transform="rotate(-15.729 196.877 -504.864)" cx="196.9" cy="-504.9" rx="5" ry="5" fill="#00417c"/><path d="M197.8-509.8c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.4-1.8-2-3.1-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 206.448 -507.559)" cx="206.5" cy="-507.6" rx="5" ry="5" fill="#00417c"/><path d="M207.4-512.5c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.8-2-3.1-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 221.813 -497.024)" cx="221.8" cy="-497.1" rx="5" ry="5" fill="#00417c"/><path d="M222.8-501.9c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.9-2-3.2-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 210.523 -479.192)" cx="210.5" cy="-479.2" rx="5" ry="5" fill="#00417c"/><path d="M211.5-484.1c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.9-2-3.2-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 234.417 -500.574)" cx="234.4" cy="-500.6" rx="5" ry="5" fill="#00417c"/><path d="M235.4-505.5c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.8-2-3.1-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 221.375 -482.248)" cx="221.4" cy="-482.3" rx="5" ry="5" fill="#00417c"/><path d="M222.3-487.2c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.4-1.8-2-3.1-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 224.412 -512.618)" cx="224.4" cy="-512.7" rx="5" ry="5" fill="#00417c"/><path d="M225.4-517.5c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.9-2-3.2-3.8-3.5z" fill="#e6e6e6"/><g fill="#00417c"><path d="M196-459c-1.5.4-2.9-.5-3.3-1.9l-13.6-48.4c-.4-1.5.4-3 1.8-3.4 1.5-.4 2.9.5 3.3 1.9l13.6 48.4c.4 1.5-.3 3-1.8 3.4z"/><path d="M180.9-512.7L196-459c1.7-.5 2.2-1.9 1.8-3.4l-13.6-48.4c-.4-1.4-1.6-2.4-3.3-1.9z"/></g><g fill="#00417c"><path d="M252.9-475c-1.5.4-3.3-.3-3.7-1.8l-13.6-48.4c-.4-1.5.8-3.1 2.3-3.5 1.5-.4 3.3.3 3.7 1.8l13.6 48.4c.4 1.5-.8 3.1-2.3 3.5z"/><path d="M238.2-528.8l15.1 53.7c.9-.2 2.2-1.9 1.8-3.4l-13.6-48.4c-.4-1.5-2.4-2.2-3.3-1.9z"/></g><g fill="#00417c"><path d="M256-474.2l-62.1 17.5c-2.2.6-4.4-.5-5-2.7-.6-2.2.7-4.3 2.9-5l62.1-17.5c2.2-.6 4.4.5 5 2.7.6 2.2-.7 4.4-2.9 5z"/><path d="M188.7-459.9c.7 2.6 3 3.8 5.2 3.2l62.1-17.5c2.2-.6 3.5-2.8 2.8-5.4l-70.1 19.7z"/></g><path fill="#515f70" d="M116.3-424H232v98.4H116.3z"/><path fill="#3b4651" d="M205-368.3l6.8 1.8-1.8 6.8 6.7 1.8-1.8 6.8 55.1-31.8-17.3-30.1-50.8 29.3-1.9 6.8 6.8 1.8z"/><path fill="#3b4651" d="M231.9-424.1h-29.4l29.4 51.2z"/><path transform="rotate(-30 248.031 -390.877)" fill="#515f70" d="M227.8-454.6h40.5v127.3h-40.5z"/><path fill="#00b7ff" d="M207.9-370l6.7 1.8-1.8 6.8 6.8 1.8-1.8 6.8 55.1-31.9-17.4-30-50.8 29.3-1.8 6.8 6.8 1.8zm101.2-65.9c4.1-15.4-5-31.3-20.5-35.4-15.4-4.1-31.3 5-35.4 20.5-4.1 15.4 17.4 47 17.4 47s34.3-16.7 38.5-32.1zm-38.7-10.4c4.1-15.4 15.6-15.1 15.6-15.1s2.6 3.4-1.5 18.9c-4.1 15.4-14.6 26.9-14.6 26.9s-3.7-15.3.5-30.7z"/><path d="M338-385.8c4.1-15.4-5-31.3-20.5-35.4-15.4-4.1-47 17.4-47 17.4s16.6 34.4 32 38.5c15.5 4.1 31.4-5.1 35.5-20.5zm-30.8 3.3c-15.4-4.1-26.9-14.6-26.9-14.6s15.2-3.6 30.7.5c15.4 4.1 15.1 15.6 15.1 15.6s-3.5 2.6-18.9-1.5z" fill="#00b7ff"/><ellipse transform="rotate(-30 265.58 -401.035)" cx="265.6" cy="-401" rx="17.4" ry="17.4" fill="#07a1d1"/><g fill="#00b7ff"><path d="M151.5-432.8h-10.8c-.5 0-1.1-.1-1.4-.5l-24-24c-.4-.4-.6-.9-.6-1.4v-10.8c0-.5.2-1.1.6-1.4l24-23.9c.4-.4.9-.5 1.4-.5h10.8c.5 0 1.1.1 1.4.5l24.1 24c.4.4.7.9.7 1.4v10.8c0 .5-.3 1.1-.7 1.4l-24 23.9c-.4.3-1 .5-1.5.5zm-10-4h9.1l22.6-22.8v-9.1l-22.6-22.8h-9.1l-22.9 22.8v9.1l22.9 22.8zm34-22z"/><path d="M146.7-447.8c-.2 0-.4-.1-.5-.2l-15.3-15.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l15.3 15.3c.3.3.3.8 0 1.1-.2.1-.4.2-.6.2z"/><path d="M142.1-442.6c-.4 0-.8-.2-1.1-.5l-23.5-23.5c-.6-.6-.6-1.6 0-2.2.6-.6 1.6-.6 2.2 0l22.4 22.4 2.9-2.9c.6-.6 1.6-.6 2.2 0 .6.6.6 1.6 0 2.2l-4 4c-.2.4-.6.5-1.1.5z"/><path d="M145.8-448.3c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l15.3-15.3c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-15.3 15.3c-.2.1-.4.2-.6.2z"/><path d="M142.1-434.8c-.4 0-.8-.2-1.1-.5-.6-.6-.6-1.6 0-2.2l22.4-22.4-2.9-2.9c-.6-.6-.6-1.6 0-2.2.6-.6 1.6-.6 2.2 0l4 4c.6.6.6 1.6 0 2.2l-23.5 23.5c-.3.4-.7.5-1.1.5z"/><path d="M160.8-463.3c-.2 0-.4-.1-.5-.2L145-478.8c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l15.3 15.3c.3.3.3.8 0 1.1-.2.2-.4.2-.6.2z"/><path d="M173.6-458.7c-.4 0-.8-.2-1.1-.5l-22.4-22.4-2.9 2.9c-.6.6-1.6.6-2.2 0-.6-.6-.6-1.6 0-2.2l4-4c.6-.6 1.6-.6 2.2 0l23.5 23.5c.6.6.6 1.6 0 2.2-.3.3-.7.5-1.1.5z"/><path d="M130.7-462.7c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l15.3-15.3c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-15.3 15.3c-.2.1-.4.2-.6.2z"/><path d="M130.3-462.5c-.4 0-.8-.2-1.1-.5l-4-4c-.6-.6-.6-1.6 0-2.2l23.5-23.5c.6-.6 1.6-.6 2.2 0 .6.6.6 1.6 0 2.2l-22.4 22.4 2.9 2.9c.6.6.6 1.6 0 2.2-.3.3-.7.5-1.1.5z"/></g><path fill="#00b7ff" d="M176-391.6l-5.1 5.1-5.1-5.1-5.2 5.1-5.1-5.1v65.9h36v-60.8l-5.2-5.1-5.1 5.1z"/></symbol><symbol id="equatio-svg-speech-indicator" viewBox="0 0 4.8 19.5"><style>@keyframes equatio-speech-indicator-fade-1{0%{opacity:0}40%,to{opacity:1}}@keyframes equatio-speech-indicator-fade-2{0%{opacity:0}80%,to{opacity:1}}@keyframes equatio-speech-indicator-fade-3{0%{opacity:0}95%,to{opacity:1}}.equatio-speech-indicator-st0{animation:equatio-speech-indicator-fade-1 1s infinite alternate}.equatio-speech-indicator-st1{animation:equatio-speech-indicator-fade-2 1s infinite alternate}.equatio-speech-indicator-st2{animation:equatio-speech-indicator-fade-3 1s infinite alternate}.equatio-speech-indicator-st0,.equatio-speech-indicator-st1,.equatio-speech-indicator-st2{fill:#90d850;opacity:0}</style><circle class="equatio-speech-indicator-st0" cx="2.4" cy="2.4" r="2.4"/><circle class="equatio-speech-indicator-st1" cx="2.4" cy="10.7" r="1.7"/><circle class="equatio-speech-indicator-st2" cx="2.4" cy="18.3" r="1.2"/></symbol><symbol id="equatio-svg-speech-pause" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><path fill="#f7bcbc" d="M17.1 14.9h5.1v17.5h-5.1zm8.6 0h5.1v17.5h-5.1z"/></symbol><symbol id="equatio-svg-speech-start" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><circle cx="24" cy="24" r="7.8" fill="#d11515"/></symbol><symbol id="equatio-svg-texthelp-logo" viewBox="0 0 106.944 21.092"><path d="M23.527 6.748c-.729 0-1.011-.306-1.011-.87v-.165c0-.564.282-.87 1.011-.87h.823V3.104c0-.8.4-1.106 1.034-1.106h.235c.611 0 1.011.235 1.011 1.106v1.739h2.563c.729 0 .987.282.987.847v.164c0 .588-.282.894-1.011.894h-2.562v5.713c0 1.41.4 2.092 1.505 2.092.729 0 1.246-.329 1.599-.8.07-.07.658.259.658.988 0 .87-.964 1.716-2.633 1.716-2.328 0-3.386-1.293-3.386-3.738V6.748h-.823zm13.105 7.876c1.975 0 2.962-.87 3.55-1.881.047-.047 1.223.165 1.223 1.152 0 .987-1.74 2.563-4.82 2.563-3.574 0-5.972-2.375-5.972-5.901 0-3.433 2.445-5.995 5.784-5.995 3.268 0 5.431 2.304 5.431 5.689v.189c0 .493-.164.682-.705.682H32.8c.164 2.068 1.692 3.502 3.832 3.502zm2.938-5.078c-.118-1.951-1.317-3.221-3.197-3.221-1.857 0-3.292 1.34-3.574 3.221h6.771zm7.718 2.186l-2.445 3.55c-.4.635-.87.988-1.458.988-.823 0-1.364-.776-1.27-.87l3.738-4.89-3.691-4.938c-.071-.118.423-.846 1.246-.846.635 0 1.058.329 1.458.964l2.516 3.597 2.469-3.597c.447-.705.964-.964 1.434-.964.847 0 1.364.752 1.293.846L48.84 10.51l3.668 4.89c.071.117-.4.87-1.27.87-.635 0-1.058-.352-1.434-.964 0 0-2.516-3.598-2.516-3.574zm6.966-4.984c-.729 0-1.011-.306-1.011-.87v-.165c0-.564.282-.87 1.011-.87h.823V3.104c0-.8.4-1.106 1.034-1.106h.235c.611 0 1.011.235 1.011 1.106v1.739h2.563c.729 0 .987.282.987.847v.164c0 .588-.282.894-1.011.894h-2.563v5.713c0 1.41.4 2.092 1.505 2.092.729 0 1.246-.329 1.599-.8.071-.07.658.259.658.988 0 .87-.964 1.716-2.633 1.716-2.328 0-3.385-1.293-3.385-3.738V6.748h-.823zm13.96-2.187c2.986 0 4.373 2.069 4.373 4.89v5.689c0 .847-.447 1.105-1.035 1.105h-.258c-.611 0-1.035-.259-1.035-1.105V9.71c0-1.951-.987-3.104-2.61-3.104-1.928 0-3.174 1.27-3.174 3.315v5.219c0 .847-.447 1.105-1.035 1.105h-.259c-.611 0-1.034-.259-1.034-1.105V.259c.001-.071.377-.259.847-.259.705 0 1.481.376 1.481 1.999V6.63c.753-1.199 1.975-2.069 3.739-2.069zm11.818 10.063c1.975 0 2.962-.87 3.55-1.881.047-.047 1.223.165 1.223 1.152 0 .987-1.74 2.563-4.82 2.563-3.574 0-5.972-2.375-5.972-5.901 0-3.433 2.445-5.995 5.784-5.995 3.268 0 5.431 2.304 5.431 5.689v.189c0 .493-.164.682-.705.682H76.2c.164 2.068 1.692 3.502 3.832 3.502zm2.938-5.078c-.117-1.951-1.316-3.221-3.197-3.221-1.857 0-3.291 1.34-3.574 3.221h6.771zm3.385 5.595V.259c0-.071.4-.259.846-.259.729 0 1.481.376 1.481 1.999v13.142c0 .847-.423 1.105-1.035 1.105h-.235c-.61 0-1.057-.258-1.057-1.105zm6.418 4.515c0 .846-.447 1.105-1.035 1.105h-.258c-.611 0-1.035-.259-1.035-1.105V4.984c0-.071.376-.259.846-.259.705 0 1.434.376 1.458 1.951.893-1.317 2.187-2.116 3.973-2.116 3.033 0 5.29 2.328 5.29 5.925 0 3.55-2.234 5.972-5.36 5.972-1.857 0-3.244-1.011-3.879-2.116v5.315zm-.023-8.441c0 1.904 1.599 3.315 3.48 3.315 2.116 0 3.526-1.622 3.526-4.02 0-2.351-1.458-4.021-3.48-4.021-1.716 0-2.939.917-3.526 2.351v2.375z" fill="#0ca0a0"/><path d="M18.112 1.895H3.283A3.292 3.292 0 0 0 0 5.178v7.98a3.293 3.293 0 0 0 3.283 3.283h2.002v3.725a.926.926 0 0 0 1.854 0v-3.725h.885v3.725a.926.926 0 0 0 1.854 0v-3.725h2.545a3.292 3.292 0 0 0 3.283-3.283V5.802l2.867-2.768c.648-.626.441-1.139-.461-1.139zm-5.491 3.218a.892.892 0 1 1 0-1.783.892.892 0 0 1 0 1.783z" fill="#e8396b"/><circle cx="12.621" cy="4.221" r=".892" fill="#fff"/><path d="M102.967 4.147c-.135 0-.21-.068-.21-.196V3.93c0-.129.074-.19.21-.19h1.427c.135 0 .203.061.203.19v.02c0 .128-.068.196-.203.196h-.487v1.488c0 .135-.068.216-.203.216h-.061c-.122 0-.189-.081-.189-.216V4.147h-.487zm1.948 1.487V3.95c0-.149.068-.23.203-.23h.183c.142 0 .189.047.23.156l.406.994.406-.994c.047-.122.108-.156.223-.156h.176c.135 0 .203.081.203.23v1.684c0 .135-.047.216-.183.216h-.062c-.122 0-.183-.081-.183-.216V4.356l-.372.954c-.02.061-.034.108-.216.108-.183 0-.183-.041-.21-.108l-.379-.947v1.271c0 .135-.041.216-.169.216h-.074c-.128.001-.182-.08-.182-.216z" fill="#0ca0a0"/></symbol><symbol id="equatio-svg-tool-circle" viewBox="0 0 55.1 49.8"><circle cx="27.7" cy="23.6" r="13.3" fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"/></symbol><symbol id="equatio-svg-tool-companion" viewBox="0 0 51.6 49.8"><path d="M30.9 10.8H20.7c-1.8 0-3.2 1.4-3.2 3.2v21.7c0 1.8 1.4 3.2 3.2 3.2h10.2c1.8 0 3.2-1.4 3.2-3.2V14c0-1.7-1.4-3.2-3.2-3.2zm-5.1 24.9c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6c0 .9-.7 1.6-1.6 1.6zm4.9-4.3H21V16.2h9.7v15.2z" fill="currentColor"/></symbol><symbol id="equatio-svg-tool-delete" viewBox="0 0 60 75"><path d="M3 72c0 1.6 1.4 3 3 3h48c1.6 0 3-1.4 3-3V21H3v51zm45.7-16.4c1.1 1.8 1.1 3.8.2 5.4-.9 1.6-2.7 2.6-4.8 2.6h-7.5v1.6c0 .7-.4 1-.8 1-.2 0-.4-.1-.7-.3l-5-4.9c-.3-.3-.4-.6-.4-1s.1-.7.4-1l4.9-4.9c.3-.3.6-.3.7-.3.4 0 .8.3.8 1v1.6h4.3l-4.4-7.6 6.2-3.6 6.1 10.4zM25.4 31.2c1.1-1.8 2.7-2.9 4.6-2.9s3.6 1 4.6 2.9l3.7 6.5 1.6-.9.4-.1c.3 0 .5.1.6.3.1.2.2.4.1.9l-1.8 6.7c-.2.6-.7 1-1.3 1h-.4l-6.7-1.8c-.6-.2-.7-.6-.8-.8s0-.6.5-.9l1.4-.8-1.9-3.7-4.4 7.5-6.2-3.6 6-10.3zM11.3 55.6l3.7-6.5-1.4-.8c-.6-.3-.6-.8-.5-.9 0-.2.1-.6.8-.7l6.8-1.8h.3c.6 0 1.1.4 1.3 1l1.8 6.7c.1.4 0 .7-.1.9l-.2.2-.5.1c-.2 0-.4-.1-.6-.2l-1.4-.8-2.1 3.7h8.5v7.2H15.9c-2.1 0-3.9-.9-4.8-2.6-.9-1.7-.9-3.7.2-5.5zM58.5 12H42V6c0-3.3-2.7-6-6-6H24c-3.3 0-6 2.7-6 6v6H1.5c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h57c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM36 12H24V6h12v6z" fill="currentColor"/></symbol><symbol id="equatio-svg-tool-equation" viewBox="0 0 51.6 49.8"><g fill="currentColor"><path d="M31.7 14.7h1.5v20.8h-1.5zm1.5-1.5h4.5v1.5h-4.5zm-5.9 0h4.5v1.5h-4.5zm5.9 22.3h4.5V37h-4.5zm-5.9 0h4.5V37h-4.5zm-6.6-10.4c-.3 0-.5-.1-.7-.3l-5.8-6.5c-.3-.3-.3-.7-.2-1.1.2-.4.5-.6.9-.6h9.7c.5 0 1 .4 1 1 0 .5-.4 1-1 1h-7.5l4.3 4.9c.4.4.3 1-.1 1.4-.1.1-.3.2-.6.2z"/><path d="M24.6 31.6h-9.7c-.4 0-.7-.2-.9-.6-.2-.4-.1-.8.2-1.1l5.8-6.5c.4-.4 1-.4 1.4-.1.4.4.4 1 .1 1.4l-4.3 4.9h7.5c.5 0 1 .4 1 1s-.6 1-1.1 1z"/></g></symbol><symbol id="equatio-svg-tool-fill" viewBox="0 0 14 13.2"><path d="M10.5 7l-7-7-1 1.1L4.3 3l-4 4c-.5.5-.5 1.2 0 1.7L4.6 13c.2.2.5.3.8.3.3 0 .6-.1.8-.3l4.3-4.3c.5-.6.5-1.3 0-1.7m-8.8.8l3.7-3.7 3.7 3.7H1.7zm10.7 1.1s-1.6 1.7-1.6 2.7c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-1-1.6-2.7-1.6-2.7" fill="currentColor"/></symbol><symbol id="equatio-svg-tool-freehand" viewBox="0 0 51.6 49.8"><path d="M34.2 23.6l-2.3 10c-.1.6-.7 1-1.3 1H21c-.6 0-1.1-.4-1.3-1l-2.3-10 7.8-13.7v12.5c-1 .3-1.8 1.2-1.8 2.4 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-1.1-.8-2.1-1.8-2.4V9.9l7.6 13.7zM19.9 37.3v1.3c0 .7.6 1.3 1.3 1.3h9.2c.7 0 1.3-.6 1.3-1.3v-1.3c0-.7-.6-1.3-1.3-1.3h-9.2c-.7 0-1.3.6-1.3 1.3z" fill="currentColor"/></symbol><symbol id="equatio-svg-tool-graph" viewBox="0 0 51.6 49.8"><path d="M39.3 40.4h-27c-1.1 0-2-.9-2-2v-27c0-1.1.9-2 2-2h27c1.1 0 2 .9 2 2v27c0 1.1-.9 2-2 2z" fill="#494949"/><path d="M39.5 23.7l-.2-.2-1.7-1.5c-.3-.2-.6-.3-.9-.3-.3 0-.7.2-.9.5-.2.2-.3.6-.3.9v.6h-6.2v-1.4c0-.5-.4-.9-.9-.9s-.9.4-.9.9v1.4h-3.6c-1.5-6.9-3.1-10-5.3-10.1-.8 0-1.7.5-2.4 1.4-.7.9-1.4 2.3-2.2 4.1-1 2.6-1.6 5.1-1.6 5.1-.1.5.2.9.6 1h4.1v1.5c0 .5.4.9.9.9s.9-.4.9-.9v-1.5h3.7c.2.9.7 2.7 1.4 4.5.7 1.8 1.4 3.2 2.1 4.1.8 1 1.6 1.4 2.4 1.4 2.2 0 3.9-3.1 5.3-10.1h1.6v.7c0 .3.1.6.3.8.2.3.5.4.9.5h.1c.3 0 .5-.1.8-.2l.1-.1 1.7-1.5c.6-.3.7-1.1.2-1.6zM18 21.3c-.5 0-.9.4-.9.9v1.4h-2.8c.3-.9.7-2.4 1.3-3.9 1.6-4.2 2.8-4.4 3-4.4.2 0 .8.2 1.5 1.7.7 1.4 1.4 3.6 2 6.6h-3.3v-1.4c.1-.5-.3-.9-.8-.9zm10.4 6.4c.5 0 .9-.4.9-.9v-1.5h2.8c-.6 2.9-1.3 5.1-2.1 6.6-.8 1.6-1.3 1.7-1.5 1.7-.1 0-.4-.1-1-.6-.6-.7-1.3-2-2-3.8-.6-1.4-1-2.9-1.3-3.9h3.2v1.5c.1.5.5.9 1 .9z" fill="#fff"/></symbol><symbol id="equatio-svg-tool-handwriting" viewBox="0 0 51.6 49.8"><path d="M33 17.4l-2.3 2.8-6.4-5.1 2.3-2.8c3.1.9 4.9 2.3 6.4 5.1zm-17 11l3.8 3-2.9 1.2-1.4-1.1c.1-1 .3-2.1.5-3.1zm-2.8 7.3l7.6-3 9-11.2-6.4-5.1-9 11.2-1.2 8.1z" fill-rule="evenodd" clip-rule="evenodd" fill="#494949"/><path d="M13.9 36.7c2.7.4 6.5.7 8.3-.6 2-1.4.3-3.8 2-4.5.9-.4 2.8-.4 7.6 1.9" fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#494949" stroke-width="1.477" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><text transform="translate(30.748 34.527)" fill="#494949" font-family="Roboto-Bold" font-size="13.812">A</text></symbol><symbol id="equatio-svg-tool-latex" viewBox="0 0 51.6 49.83"><g clip-path="url(#equatio-svg-tool-latex-clip-path)" fill="#494949"><path d="M15.79 25.09h-.38c-.15 1.54-.36 3.41-3 3.41h-1.23c-.71 0-.74-.11-.74-.6v-8c0-.51 0-.72 1.42-.72h.5v-.45h-4.8v.45h.35c1.16 0 1.19.17 1.19.71v7.91c0 .54 0 .71-1.19.71h-.35V29h7.82z"/><path d="M15.53 18.7c-.06-.18-.09-.24-.29-.24s-.24.06-.3.24l-2.43 6.15c-.11.26-.29.72-1.22.72V26h2.34v-.38c-.47 0-.75-.21-.75-.51a.66.66 0 0 1 0-.21l.51-1.3h3l.6 1.54a.51.51 0 0 1 .06.18c0 .3-.57.3-.86.3V26h3v-.38H19c-.71 0-.78-.11-.89-.41zm-.6 1.07l1.34 3.41h-2.68z"/><path d="M27.6 18.81h-9.17l-.27 3.38h.36c.21-2.43.44-2.92 2.71-2.92a6.32 6.32 0 0 1 .81 0c.32.06.32.23.32.57v7.91c0 .51 0 .72-1.58.72h-.6V29h5.69v-.5h-.6c-1.58 0-1.58-.21-1.58-.72v-7.92c0-.3 0-.51.27-.57a7.1 7.1 0 0 1 .86 0c2.26 0 2.49.5 2.7 2.92h.38z"/><path d="M35.68 28.48h-.38c-.38 2.31-.72 3.41-3.3 3.41h-2c-.71 0-.74-.11-.74-.6v-4h1.34c1.46 0 1.63.48 1.63 1.76h.38v-4h-.38c0 1.28-.17 1.75-1.63 1.75h-1.32v-3.6c0-.5 0-.6.74-.6h1.93c2.31 0 2.7.83 2.94 2.92h.38l-.42-3.38H26.4v.45h.35c1.16 0 1.19.17 1.19.71v7.87c0 .54 0 .71-1.19.71h-.35v.47H35z"/><path d="M40.22 23.16l2.06-3a2.28 2.28 0 0 1 2.17-1v-.45h-3.59v.45c.6 0 .93.35.93.69 0 .15 0 .18-.14.35l-1.72 2.53L38 19.85a.62.62 0 0 1-.11-.23c0-.18.33-.44 1-.45v-.45h-4.18v.45H35c.83 0 1.11.11 1.4.53l2.76 4.17-2.44 3.63a2.27 2.27 0 0 1-2.17 1v.5h3.59v-.5c-.69 0-.95-.42-.95-.69s0-.2.15-.36l2.12-3.15 2.38 3.59a.52.52 0 0 1 .08.17c0 .18-.33.44-1 .45V29h4.18v-.5h-.3c-.78 0-1.1-.08-1.42-.54z"/></g></symbol><symbol id="equatio-svg-tool-line" viewBox="0 0 55.1 49.8"><path fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" d="M11 22.7h33.2"/></symbol><symbol id="equatio-svg-tool-mathspace" viewBox="0 0 42 42"><path d="M29.3 19.2l-6.4-6.4c-.1-.1-.2-.2-.4-.2h-2.9c-.1 0-.3.1-.4.2l-6.4 6.4c-.1.1-.2.2-.2.4v2.9c0 .1.1.3.2.4l6.4 6.4c.1.1.2.2.4.2h2.9c.1 0 .3-.1.4-.2l6.4-6.4c.1-.1.2-.2.2-.4v-2.9c-.1-.2-.1-.3-.2-.4zm-.9.6v1.6l-6-6c-.2-.2-.4-.2-.6 0l-1.1 1.1c-.2.2-.2.4 0 .6L17 20.7l-.8-.8 6.1-6.1 6.1 6zM17.3 21l3.7-3.7 3.7 3.7-3.7 3.7-3.7-3.7zm2.5-7.4h1.6l-6 6c-.2.2-.2.4 0 .6l1.1 1.1c.1.1.2.1.3.1.1 0 .2 0 .3-.1l3.7 3.7-.8.8-6.1-6.1 5.9-6.1zm-6.2 8.6v-1.6l6 6c.1.1.2.1.3.1.1 0 .2 0 .3-.1l1.1-1.1c.2-.2.2-.4 0-.6l3.6-3.6.8.8-6 6-6.1-5.9zm8.6 6.2h-1.6l5.9-5.9c.2-.2.2-.4 0-.6l-1.1-1.1c-.1-.1-.4-.2-.5-.1l-3.6-3.6.8-.8 6.1 6.1-6 6z" fill="#00b7ff"/><path d="M31.8 27.3l-10.2 5.9V21.4l10.2-5.9v11.8zM10.2 15.4l10.2 5.9v11.8l-10.2-5.9V15.4zM21 8.5l10.2 5.9L21 20.3l-10.2-5.9L21 8.5zm11.7 5.4L21.3 7.3c-.2-.1-.4-.1-.6 0L9.3 13.9c-.2.1-.3.3-.3.5v13.2c0 .2.1.4.3.5l11.4 6.6c.1.1.2.1.3.1.1 0 .2 0 .3-.1l11.4-6.6c.2-.1.3-.3.3-.5V14.4c0-.2-.1-.4-.3-.5z" fill="#494949"/></symbol><symbol id="equatio-svg-tool-more" viewBox="0 0 53 53"><path d="M12 23h6v7h-6zm11 0h6v7h-6zm11 0h6v7h-6z" fill="currentColor"/></symbol><symbol id="equatio-svg-tool-parallel" viewBox="0 0 55.1 49.8"><path fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" d="M9.3 32.8L18 17h27.8L37 32.8z"/></symbol><symbol id="equatio-svg-tool-path" viewBox="0 0 51.603 49.831"><path fill="currentColor" d="M31.141 32.905l-15.2-2.721v3.048l15.2 2.72z"/><path d="M37.082 38.332h-7.707v-7.707h7.707v7.707zm-5.941-1.766h4.175v-4.175h-4.175v4.175zm-13.434-.859H10V28h7.707v7.707zm-5.941-1.766h4.175v-4.175h-4.175v4.175zm29.837-10.624h-7.707V15.61h7.707v7.707zm-5.942-1.766h4.175v-4.175h-4.175v4.175zm-17.252-2.344h-7.707V11.5h7.707v7.707zm-5.941-1.766h4.175v-4.175h-4.175v4.175z" fill="currentColor"/><path fill="currentColor" d="M35.661 17.619L18.04 13.91l-.618 2.936 14.129 2.974-14.5 10.471 1.756 2.432 16.854-12.171z"/></symbol><symbol id="equatio-svg-tool-polygon" viewBox="0 0 55.1 49.8"><path fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" d="M34.2 13.4l6.6 11.5-6.6 11.5H20.9l-6.6-11.5 6.6-11.5z"/></symbol><symbol id="equatio-svg-tool-rectangle" viewBox="0 0 55.1 49.8"><path fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" d="M14.1 11.1h25.5v25.5H14.1z"/></symbol><symbol id="equatio-svg-tool-rtriangle" viewBox="0 0 55.1 49.8"><path fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" d="M11.6 36.6l30-26v26z"/></symbol><symbol id="equatio-svg-tool-screenshot" viewBox="0 0 51.6 49.8"><path d="M-5848-575.2h-5.6v-2.5h5.6v2.5zm-8.3 0h-5.6v-2.5h5.6v2.5z" fill="currentColor" transform="translate(5879.882 613.169)"/><path d="M-5858.8-574.1h-3.8v-3.8h2.5v1.2h1.2v2.6h.1z" fill="currentColor" transform="translate(5874 612.048)"/><path d="M-5860.2-565.8h-2.5v-5.6h2.5v5.6zm0-8.4h-2.5v-5.6h2.5v5.6z" fill="currentColor" transform="translate(5874 597.132)"/><path d="M-5860.2-576.6h-2.5v-3.8h3.8v2.6h-1.2v1.2h-.1z" fill="currentColor" transform="translate(5874 591.25)"/><path d="M-5848-577.9h-5.6v-2.5h5.6v2.5zm-8.3 0h-5.6v-2.5h5.6v2.5z" fill="currentColor" transform="translate(5879.882 591.32)"/><path d="M-5856.3-576.6h-2.6v-1.2h-1.2v-2.6h3.8v3.8z" fill="currentColor" transform="translate(5894.728 591.25)"/><path d="M-5857.5-565.7h-2.5v-5.6h2.5v5.6zm0-8.5h-2.5v-5.6h2.5v5.6z" fill="currentColor" transform="translate(5895.919 597.132)"/><path d="M-5837.6-553.2l2-1.5-3.6-5.2 4.4-1.1-12.5-9.6 2.8 14.9 3.6-3.3 3.3 5.8z" fill="currentColor" transform="translate(5874 591.25)"/><path d="M-5847.3-570.5l12.5 9.6-4.4 1.1 3.6 5.2-2 1.5-3.4-5.6-3.6 3.3-2.7-15.1" fill="currentColor" transform="translate(5874 591.25)"/><path d="M-5837-552.3l2-1.5c.4-.3.6-.9.2-1.5l-2.7-4 2.9-.7c.4-.1.7-.3.8-.8.1-.3-.1-.8-.4-1l-12.5-9.4c-.2-.1-.4-.2-.7-.2-.2 0-.3.1-.6.1-.3.2-.6.7-.4 1.1l2.7 14.9c0 .3.3.7.7.8.1 0 .2.1.3.1.2 0 .4-.1.7-.2l2.6-2.5 2.8 4.5" fill="currentColor" transform="translate(5874 591.25)"/></symbol><symbol id="equatio-svg-tool-select" viewBox="0 0 51.6 49.8"><path fill="currentColor" d="M33 28.7L20.2 16.3l.1 17.8 3.9-3.4 3 7.1 3.7-1.5-3.1-7.1z"/></symbol><symbol id="equatio-svg-tool-smartshapes" viewBox="0 0 55.1 49.8"><path fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" d="M34.2 13.4l6.6 11.5-6.6 11.5H20.9l-6.6-11.5 6.6-11.5z"/><path d="M20 24.9c0 4.2 3.4 7.5 7.5 7.5S35 29 35 24.9s-3.4-7.5-7.5-7.5-7.5 3.3-7.5 7.5zm8.5 4.9c-.3.5-1 .7-1.6.3l-.3-.3-.6-.9c.9-.8 2.2-.8 3.1 0l-.6.9zm1.1-1.6c-1.2-.8-2.8-.8-4 0l-.4-.5c1.3-1.2 3.4-1.2 4.7 0l-.3.5zm2.1-4.4c0 .9-.3 1.9-.9 2.6l-.4.5-.4-.3c-1.5-1-3.4-1-4.9 0l-.4.3-.4-.5c-.6-.7-.9-1.7-.9-2.6 0-2.3 1.9-4.2 4.2-4.2s4.1 1.8 4.1 4.2z" fill="currentColor"/></symbol><symbol id="equatio-svg-tool-speech" viewBox="0 0 51.6 49.8"><g fill="currentColor"><path d="M35.5 21.3c0-.3-.3-.6-.6-.6h-1.3c-.4 0-.6.3-.6.6V25c-.1 3.3-3.2 6-7.1 6-3.9 0-7-2.7-7.1-6v-3.6c0-.3-.3-.6-.6-.6h-1.3c-.4 0-.6.3-.6.6V25c0 4.2 3.6 7.7 8.4 8.3v3.4h-2.9c-.4 0-.6.3-.6.6v1.1c0 .3.3.6.6.6H30c.4 0 .6-.3.6-.6v-1.1c0-.3-.3-.6-.6-.6h-2.9v-3.4c4.7-.5 8.4-4.1 8.4-8.3v-3.7z"/><path d="M25.8 29.1c2.7 0 4.8-1.9 4.8-4.2v-9.8c0-2.3-2.2-4.2-4.8-4.2S21 12.8 21 15.1v9.8c0 2.3 2.1 4.2 4.8 4.2z"/></g></symbol><symbol id="equatio-svg-tool-star" viewBox="0 0 55.1 49.8"><path fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" d="M27.5 30.5l9.4 6.9-3.6-11.1 9.5-6.8H31.1L27.5 8.4 24 19.5H12.3l9.5 6.8-3.7 11.1z"/></symbol><symbol id="equatio-svg-tool-text" viewBox="0 0 81 69"><path d="M66 65.2V69H42v-3.8c4.3 0 5.8-4.4 4.6-7.6-.8-2.3-4.7-12.8-4.7-12.8H19.4s-3.3 8.4-5.3 13.5 2.7 6.9 6.9 6.9V69H0v-3.8s3.2-1.4 4.8-3 3-4.3 3-4.3L30.8 0h5.4l22.2 57.4s1.2 2.9 3.5 5.3c2.2 2.5 4.1 2.5 4.1 2.5zM40.4 39l-9.3-26.3L20.9 39h19.5z" fill="currentColor"/><path d="M81 28.3V30H69v-1.7l3.3-1.5-2.3-6H59.4l-2.7 6 3.3 1.4V30h-9v-1.8l2.8-1.4L65.1 0h2.4l10.9 26.9 2.6 1.4zM69.5 18L65.2 6l-4.7 12h9z" fill="currentColor" opacity=".5"/></symbol><symbol id="equatio-svg-tool-textedit" viewBox="0 0 51.603 49.831"><path d="M37.19 20.019c-.187-2.401-.377-5.75-.414-7.31l-.007-.284h-1.32l-.086.097c-.588.658-1.031.848-1.974.848H18.207c-1.015 0-1.388-.064-1.915-.82l-.086-.125H14.87l-.011.279a150.695 150.695 0 0 1-.228 3.85c-.077 1.147-.159 2.366-.225 3.585l-.017.306h1.89l.057-.217c.294-1.135 1.554-2.066 1.87-2.197h4.772v13.262c0 3.05-.278 3.161-3.284 3.412l-.266.022v2.679H32.32v-2.68l-.267-.021c-3.192-.254-3.434-.346-3.434-3.412V18.031h5.65c.348.138.718.972.99 2.151l.055.238 1.899-.105-.023-.296z" fill="#494949"/></symbol><symbol id="equatio-svg-tool-trapezoid" viewBox="0 0 55.1 49.8"><path fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" d="M43.7 34.2H11.4l7.3-20.5h17.7z"/></symbol><symbol id="equatio-svg-tool-triangle" viewBox="0 0 78.6 74.1"><path fill="currentColor" d="M72.4 68.6H6.3l-.2-.2L38.9 5.5l1.9 1z" opacity=".3"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" d="M39.3 4.2L5.9 68.1M40.8 5.9l31.9 62.8m-.4-1.2h-66"/><path fill="currentColor" d="M45.2 0v11.9H33.4V0"/><path fill="#fcfcfc" d="M42.3 3v6h-6V3"/><path fill="currentColor" d="M11.9 62.2v11.9H0V62.2"/><path fill="#fcfcfc" d="M8.9 65.2v6h-6v-6"/><path fill="currentColor" d="M78.6 62.2v11.9H66.8V62.2"/><path fill="#fcfcfc" d="M75.7 65.2v6h-6v-6"/></symbol><symbol id="equatio-svg-traffic-light-disabled" viewBox="0 0 28 28"><circle cx="14" cy="14" r="10.5" opacity=".2" fill="#9b9b9b"/><path d="M18.5 10.4c0-.7-.6-1.4-1.3-1.5-.5 0-1.1.2-1.4.6-.3-.4-.8-.7-1.3-.8-.7-.1-1.4.5-1.6 1.2-.2.9.3 1.8.8 2.4.3.4.6.7 1 1 .1.1.6.5.7.5.1.1.7-.3.8-.4.4-.2.8-.5 1.1-.8.6-.5 1.3-1.3 1.2-2.2zM8.8 9.3c0-.6-.5-1.3-1.2-1.3-.5 0-1 .2-1.3.5-.3-.4-.8-.7-1.2-.7-.7-.1-1.3.5-1.4 1.1-.2.8.3 1.6.7 2.2l.9.9c.1.1.5.5.6.5.1 0 .6-.3.7-.4.4-.2.7-.5 1-.7.6-.6 1.2-1.3 1.2-2.1z" opacity=".2" fill="#2c2c2c"/><path d="M7 15.4s4.2 2.4 8.5.2c0 .1-3.6 10.5-8.5-.2z" fill="#fff"/></symbol><symbol id="equatio-svg-traffic-light-error" viewBox="0 0 28 28"><style>.equatio-traffic-light-error-st0{fill:#d35b5b}.equatio-traffic-light-error-st1{fill:#561717;transform:rotate(15deg) translateY(-4px) translateX(4px)}</style><circle class="equatio-traffic-light-error-st0" cx="14" cy="14" r="10.5"/><circle class="equatio-traffic-light-error-st1" cx="7.9" cy="13.3" r="1.2"/><circle class="equatio-traffic-light-error-st1" cx="14.5" cy="11.8" r="1.2"/><path class="equatio-traffic-light-error-st1" d="M16.2 19.7c-.2-.1-4-2.6-6.7 1.1l-.8-.6c3.2-4.5 8-1.4 8-1.4l-.5.9z"/></symbol><symbol id="equatio-svg-traffic-light-meh" viewBox="0 0 28 28"><style>.equatio-traffic-light-meh-st0{fill:#f7d431}.equatio-traffic-light-meh-st1{fill:#292d2b}.equatio-traffic-light-meh-st2{fill:none;stroke:#292d2b;stroke-miterlimit:10;stroke-dasharray:10;stroke-dashoffset:8}</style><circle class="equatio-traffic-light-meh-st0" cx="14" cy="14" r="10.5"/><circle class="equatio-traffic-light-meh-st1" cx="8.9" cy="10.5" r="1.2"/><circle class="equatio-traffic-light-meh-st1" cx="16.4" cy="10.5" r="1.2"/><path class="equatio-traffic-light-meh-st2" d="M12.6 19.1c1.1 0 2.4-.3 3.7-1.6m-2.9 1.6c-1.1 0-2.4-.3-3.7-1.6"/></symbol><symbol id="equatio-svg-traffic-light-ok" viewBox="0 0 28 28"><style>.equatio-traffic-light-ok-st0{fill:#28d88c}.equatio-traffic-light-ok-st1{fill:#292d2b}.equatio-traffic-light-ok-st2{fill:#fff}</style><circle class="equatio-traffic-light-ok-st0" cx="14" cy="14" r="10.5"/><path class="equatio-traffic-light-ok-st1" d="M18.5 10.4c0-.7-.6-1.4-1.3-1.5-.5 0-1.1.2-1.4.6-.3-.4-.8-.7-1.3-.8-.7-.1-1.4.5-1.6 1.2-.2.9.3 1.8.8 2.4.3.4.6.7 1 1 .1.1.6.5.7.5.1.1.7-.3.8-.4.4-.2.8-.5 1.1-.8.6-.5 1.3-1.3 1.2-2.2zM8.8 9.3c0-.6-.5-1.3-1.2-1.3-.5 0-1 .2-1.3.5-.3-.4-.8-.7-1.2-.7-.7-.1-1.3.5-1.4 1.1-.2.8.3 1.6.7 2.2l.9.9c.1.1.5.5.6.5.1 0 .6-.3.7-.4.4-.2.7-.5 1-.7.6-.6 1.2-1.3 1.2-2.1z"/><path class="equatio-traffic-light-ok-st2" d="M7 15.4s4.2 2.4 8.5.2c0 .1-3.6 10.5-8.5-.2z"/></symbol><symbol id="equatio-svg-upgrade-draw-shapes" viewBox="0 0 47.758 47.761"><circle cx="23.879" cy="23.88" r="23.879" fill="#fff"/><path d="M18.58 27.813c-.166 0-.248-.138-.248-.305V26.7c0-.167.082-.304.248-.304s.248.137.248.304v.808c0 .167-.082.305-.248.305zm0-2.022c-.166 0-.248-.135-.248-.304v-1.212c0-.167.082-.304.248-.304s.248.136.248.304v1.212c0 .169-.082.304-.248.304zm0-2.427c-.166 0-.248-.134-.248-.303v-1.212c0-.167.082-.303.248-.303s.248.135.248.303v1.212c0 .17-.082.303-.248.303zm0-2.424c-.166 0-.248-.134-.248-.303v-1.212c0-.167.082-.303.248-.303s.248.136.248.303v1.212c0 .168-.082.303-.248.303zm0-2.424c-.166 0-.248-.137-.248-.305v-1.212c0-.167.082-.303.248-.303s.248.135.248.303v1.212c0 .168-.082.305-.248.305zm0-2.427c-.166 0-.248-.136-.248-.303v-1.212c0-.17.082-.305.248-.305s.248.135.248.305v1.212c0 .167-.082.303-.248.303zm0-3.031c-.166 0-.248-.135-.248-.303v-.809c0-.167.082-.304.248-.304s.248.137.248.304v.809c0 .167-.082.303-.248.303zm16.364 15.538c0 .165-.137.247-.305.247h-.809c-.168 0-.305-.083-.305-.247 0-.167.137-.249.305-.249h.809c.168 0 .305.082.305.249zm-2.022 0c0 .165-.137.247-.303.247h-1.215c-.166 0-.303-.083-.303-.247 0-.167.137-.249.303-.249h1.215c.166 0 .303.082.303.249zm-2.426 0c0 .165-.137.247-.303.247h-1.211c-.168 0-.305-.083-.305-.247 0-.167.137-.249.305-.249h1.211c.167 0 .303.082.303.249zm-2.424 0c0 .165-.137.247-.307.247h-1.211c-.166 0-.301-.083-.301-.247 0-.167.135-.249.301-.249h1.211c.171 0 .307.082.307.249zm-2.427 0c0 .165-.135.247-.301.247h-1.213c-.17 0-.305-.083-.305-.247 0-.167.135-.249.305-.249h1.213c.166 0 .301.082.301.249zm-2.424 0c0 .165-.137.247-.307.247h-1.209c-.168 0-.303-.083-.303-.247 0-.167.135-.249.303-.249h1.209c.17 0 .307.082.307.249zm-3.033 0c0 .165-.135.247-.303.247h-.809c-.168 0-.301-.083-.301-.247 0-.167.133-.249.301-.249h.809c.168 0 .303.082.303.249zm-1.76.07c.119.118.078.27-.039.389l-.857.858c-.121.119-.271.158-.389.04-.119-.118-.08-.272.039-.391l.857-.858c.117-.116.27-.156.389-.038zm-1.717 1.715c.121.119.08.271-.037.39l-.857.858c-.117.12-.271.158-.391.038-.115-.118-.078-.271.041-.39l.859-.857c.116-.119.27-.159.385-.039zm-1.713 1.715c.117.117.078.272-.037.389l-.859.858c-.119.118-.271.157-.389.039-.119-.117-.078-.271.041-.389l.855-.858c.118-.12.272-.157.389-.039zm-2.146 2.142c.121.121.082.272-.037.391l-.57.573c-.119.118-.273.156-.391.038-.117-.119-.078-.271.041-.39l.57-.57c.119-.119.272-.159.387-.042z" fill="#5696a4"/><path d="M28.914 18.734H11.936c-.205 0-.389-.081-.469-.271a.484.484 0 0 1 .111-.531l6.469-6.475a.514.514 0 0 1 .359-.155h16.977c.203 0 .389.14.469.329a.53.53 0 0 1-.111.56l-6.469 6.431c-.096.096-.223.112-.358.112zm-15.756-.99h15.547l5.457-5.449H18.61l-5.452 5.449z" fill="#075574"/><path d="M29.479 35.327c0 .28-.223.505-.502.505H11.899a.505.505 0 0 1-.504-.505V18.251c0-.28.226-.507.504-.507h17.078c.279 0 .502.228.502.507v17.076zm-17.09-.488H28.49V18.734H12.389v16.105z" fill="#075574"/><path d="M28.914 35.832H11.936a.57.57 0 0 1-.541-.541V18.312a.51.51 0 0 1 .166-.356l6.478-6.486a.538.538 0 0 1 .367-.166h16.977c.275 0 .541.262.541.542v16.978a.51.51 0 0 1-.166.356l-6.479 6.487a.539.539 0 0 1-.365.165zm-16.525-.993h16.316l6.227-6.227V12.295H18.61l-6.221 6.229v16.315z" fill="#075574"/><path d="M21.313 27.159c-.068-.247-.017-.85.09-1.412l.613-3.283c.195-1.091.539-1.621.887-1.916a1.757 1.757 0 0 1 1.219-.454c.842 0 1.311.558 1.311 1.204a1.43 1.43 0 0 1-.824 1.321l-.009.044c.416.122.771.584.771 1.205 0 1.029-.85 1.715-1.748 1.715-.434 0-.82-.157-1.055-.405h-.014l-.084.559c-.082.453-.176.927-.154 1.421h-1.003zm2.248-4.707c.047 0 .086 0 .131-.017.408-.069.719-.426.719-.932 0-.312-.162-.56-.455-.56-.365 0-.666.34-.834 1.256l-.408 2.197c.139.226.4.409.719.409.477 0 .834-.417.834-.924 0-.424-.291-.695-.668-.75-.055-.006-.107 0-.166 0l.128-.679z" fill="#075574"/></symbol><symbol id="equatio-svg-upgrade-math-prediction" viewBox="0 0 47.758 47.761"><circle cx="23.879" cy="23.88" r="23.879" fill="#fff"/><path d="M23.644 12.417c-5.604 0-10.15 4.546-10.15 10.145 0 5.604 4.541 10.145 10.145 10.145 5.609.005 10.15-4.541 10.15-10.145 0-5.599-4.541-10.145-10.145-10.145zm-7.373 8.734c-.649-.747.194-3.145 2.194-4.893s4.397-2.178 5.047-1.432c.655.747-1.283 1.8-3.283 3.549-1.995 1.748-3.304 3.522-3.958 2.776z" fill="#075574"/><path d="M32.516 12.683c-1.289-.031-1.416-.164-1.386-1.457a.16.16 0 0 0-.159-.164h-.005a.16.16 0 0 0-.159.159c-.031 1.232-.164 1.391-1.207 1.391-.077 0-.164 0-.251-.005h-.005c-.087 0-.159.072-.159.159s.066.164.159.164c1.289.031 1.416.169 1.386 1.457a.16.16 0 0 0 .159.164h.005a.16.16 0 0 0 .159-.159c.031-1.234.169-1.392 1.207-1.392.077 0 .164 0 .251.005h.005c.087 0 .159-.072.159-.159s-.067-.158-.159-.163zm3.543 2.664c-1.667-.041-1.831-.22-1.79-1.882a.211.211 0 0 0-.205-.215h-.004a.214.214 0 0 0-.21.205c-.041 1.595-.215 1.795-1.56 1.795-.102 0-.21 0-.322-.005h-.005a.21.21 0 0 0-.005.42c1.667.041 1.831.22 1.79 1.882a.211.211 0 0 0 .205.215h.005a.21.21 0 0 0 .21-.205c.041-1.595.215-1.795 1.56-1.795.102 0 .21 0 .322.005h.005a.214.214 0 0 0 .21-.205.209.209 0 0 0-.206-.215z" fill="#075574"/><path d="M14.108 23.078c0-5.604 4.546-10.15 10.15-10.15 2.327 0 4.469.782 6.182 2.102a10.102 10.102 0 0 0-6.796-2.613c-5.604 0-10.15 4.546-10.15 10.145a10.12 10.12 0 0 0 3.963 8.043 10.105 10.105 0 0 1-3.349-7.527z" opacity=".43" fill="#075574"/><path d="M30.936 33.612c-.225-.588-1.452-1.099-3.221-1.411a9.135 9.135 0 0 1-.91.332c.69.082 1.104.189 1.104.307 0 .261-1.999.465-4.469.465s-4.469-.21-4.469-.465c0-.133.542-.256 1.411-.337a10.708 10.708 0 0 1-.808-.302c-1.769.312-2.996.823-3.221 1.411-1.416.266-2.27.608-2.27.987 0 .844 4.28 1.524 9.562 1.524s9.562-.685 9.562-1.524c-.001-.374-.855-.721-2.271-.987z" fill="#075574"/><path d="M26.145 24.962a.543.543 0 0 1-.406-.182l-3.2-3.601a.546.546 0 0 1 .406-.905h5.347a.543.543 0 1 1 0 1.086h-4.137l2.397 2.696a.544.544 0 0 1-.407.906z" fill="#fff"/><path d="M28.291 28.563h-5.347a.545.545 0 0 1-.406-.905l3.2-3.601a.544.544 0 0 1 .812.722l-2.397 2.696h4.137a.543.543 0 0 1 .001 1.088z" fill="#fff"/></symbol><symbol id="equatio-svg-upgrade-speech-to-math" viewBox="0 0 47.758 47.761"><circle cx="23.879" cy="23.88" r="23.879" fill="#fff"/><g fill="#075574"><path d="M31.987 19.99c0-.264-.25-.481-.555-.481h-1.11c-.305 0-.555.217-.555.481v3.206h-.002c-.054 2.877-2.771 5.204-6.105 5.204-3.334 0-6.051-2.327-6.105-5.204h-.003V19.99c0-.264-.25-.481-.555-.481h-1.11c-.305 0-.555.217-.555.481v2.653c0 .035.005.069.013.102a6.328 6.328 0 0 0-.013.366c0 3.658 3.144 6.678 7.218 7.149v2.959h-2.5c-.305 0-.555.217-.555.481v.962c0 .264.25.481.555.481h7.217c.305 0 .555-.217.555-.481V33.7c0-.264-.25-.481-.555-.481H24.77V30.26c4.074-.471 7.218-3.491 7.218-7.149a6.36 6.36 0 0 0-.013-.366.432.432 0 0 0 .013-.102V19.99z"/><path d="M23.659 26.673c2.29 0 4.164-1.623 4.164-3.608v-8.418c0-1.984-1.874-3.608-4.164-3.608s-4.164 1.623-4.164 3.608v8.418c0 1.985 1.874 3.608 4.164 3.608z"/></g></symbol></svg>';
}, function(t, e, i) {
    "use strict";
    var o = i(25), M = i(30);
    o.default.__addLocaleData(M.default), o.default.defaultLocale = "en", e.default = o.default;
}, function(t, e, i) {
    "use strict";
    var o = i(15), M = i(26), s = i(27), L = i(28);
    function a(t, e, i) {
        var o = "string" == typeof t ? a.__parse(t) : t;
        if (!o || "messageFormatPattern" !== o.type) throw new TypeError("A message must be provided as a String or AST.");
        i = this._mergeFormats(a.formats, i), M.defineProperty(this, "_locale", {
            value: this._resolveLocale(e)
        });
        var s = this._findPluralRuleFunction(this._locale), L = this._compilePattern(o, e, i, s), r = this;
        this.format = function(e) {
            try {
                return r._format(L, e);
            } catch (e) {
                throw e.variableId ? new Error("The intl string context variable '" + e.variableId + "' was not provided to the string '" + t + "'") : e;
            }
        };
    }
    e.default = a, M.defineProperty(a, "formats", {
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
    }), M.defineProperty(a, "__localeData__", {
        value: M.objCreate(null)
    }), M.defineProperty(a, "__addLocaleData", {
        value: function(t) {
            if (!t || !t.locale) throw new Error("Locale data provided to IntlMessageFormat is missing a `locale` property");
            a.__localeData__[t.locale.toLowerCase()] = t;
        }
    }), M.defineProperty(a, "__parse", {
        value: L.default.parse
    }), M.defineProperty(a, "defaultLocale", {
        enumerable: !0,
        writable: !0,
        value: void 0
    }), a.prototype.resolvedOptions = function() {
        return {
            locale: this._locale
        };
    }, a.prototype._compilePattern = function(t, e, i, o) {
        return new s.default(e, i, o).compile(t);
    }, a.prototype._findPluralRuleFunction = function(t) {
        for (var e = a.__localeData__, i = e[t.toLowerCase()]; i; ) {
            if (i.pluralRuleFunction) return i.pluralRuleFunction;
            i = i.parentLocale && e[i.parentLocale.toLowerCase()];
        }
        throw new Error("Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :" + t);
    }, a.prototype._format = function(t, e) {
        var i, M, s, L, a, r, n = "";
        for (i = 0, M = t.length; i < M; i += 1) if ("string" != typeof (s = t[i])) {
            if (L = s.id, !e || !o.hop.call(e, L)) throw (r = new Error("A value must be provided for: " + L)).variableId = L, 
            r;
            a = e[L], s.options ? n += this._format(s.getOption(a), e) : n += s.format(a);
        } else n += s;
        return n;
    }, a.prototype._mergeFormats = function(t, e) {
        var i, s, L = {};
        for (i in t) o.hop.call(t, i) && (L[i] = s = M.objCreate(t[i]), e && o.hop.call(e, i) && o.extend(s, e[i]));
        return L;
    }, a.prototype._resolveLocale = function(t) {
        "string" == typeof t && (t = [ t ]), t = (t || []).concat(a.defaultLocale);
        var e, i, o, M, s = a.__localeData__;
        for (e = 0, i = t.length; e < i; e += 1) for (o = t[e].toLowerCase().split("-"); o.length; ) {
            if (M = s[o.join("-")]) return M.locale;
            o.pop();
        }
        var L = t.pop();
        throw new Error("No locale data has been added to IntlMessageFormat for: " + t.join(", ") + ", or the default locale: " + L);
    };
}, function(t, e, i) {
    "use strict";
    var o = i(15), M = function() {
        try {
            return !!Object.defineProperty({}, "a", {});
        } catch (t) {
            return !1;
        }
    }(), s = (!M && Object.prototype.__defineGetter__, M ? Object.defineProperty : function(t, e, i) {
        "get" in i && t.__defineGetter__ ? t.__defineGetter__(e, i.get) : (!o.hop.call(t, e) || "value" in i) && (t[e] = i.value);
    }), L = Object.create || function(t, e) {
        var i, M;
        function L() {}
        for (M in L.prototype = t, i = new L(), e) o.hop.call(e, M) && s(i, M, e[M]);
        return i;
    };
    e.defineProperty = s, e.objCreate = L;
}, function(t, e, i) {
    "use strict";
    function o(t, e, i) {
        this.locales = t, this.formats = e, this.pluralFn = i;
    }
    function M(t) {
        this.id = t;
    }
    function s(t, e, i, o, M) {
        this.id = t, this.useOrdinal = e, this.offset = i, this.options = o, this.pluralFn = M;
    }
    function L(t, e, i, o) {
        this.id = t, this.offset = e, this.numberFormat = i, this.string = o;
    }
    function a(t, e) {
        this.id = t, this.options = e;
    }
    e.default = o, o.prototype.compile = function(t) {
        return this.pluralStack = [], this.currentPlural = null, this.pluralNumberFormat = null, 
        this.compileMessage(t);
    }, o.prototype.compileMessage = function(t) {
        if (!t || "messageFormatPattern" !== t.type) throw new Error('Message AST is not of type: "messageFormatPattern"');
        var e, i, o, M = t.elements, s = [];
        for (e = 0, i = M.length; e < i; e += 1) switch ((o = M[e]).type) {
          case "messageTextElement":
            s.push(this.compileMessageText(o));
            break;

          case "argumentElement":
            s.push(this.compileArgument(o));
            break;

          default:
            throw new Error("Message element does not have a valid type");
        }
        return s;
    }, o.prototype.compileMessageText = function(t) {
        return this.currentPlural && /(^|[^\\])#/g.test(t.value) ? (this.pluralNumberFormat || (this.pluralNumberFormat = new Intl.NumberFormat(this.locales)), 
        new L(this.currentPlural.id, this.currentPlural.format.offset, this.pluralNumberFormat, t.value)) : t.value.replace(/\\#/g, "#");
    }, o.prototype.compileArgument = function(t) {
        var e = t.format;
        if (!e) return new M(t.id);
        var i, o = this.formats, L = this.locales, r = this.pluralFn;
        switch (e.type) {
          case "numberFormat":
            return i = o.number[e.style], {
                id: t.id,
                format: new Intl.NumberFormat(L, i).format
            };

          case "dateFormat":
            return i = o.date[e.style], {
                id: t.id,
                format: new Intl.DateTimeFormat(L, i).format
            };

          case "timeFormat":
            return i = o.time[e.style], {
                id: t.id,
                format: new Intl.DateTimeFormat(L, i).format
            };

          case "pluralFormat":
            return i = this.compileOptions(t), new s(t.id, e.ordinal, e.offset, i, r);

          case "selectFormat":
            return i = this.compileOptions(t), new a(t.id, i);

          default:
            throw new Error("Message element does not have a valid format type");
        }
    }, o.prototype.compileOptions = function(t) {
        var e, i, o, M = t.format, s = M.options, L = {};
        for (this.pluralStack.push(this.currentPlural), this.currentPlural = "pluralFormat" === M.type ? t : null, 
        e = 0, i = s.length; e < i; e += 1) L[(o = s[e]).selector] = this.compileMessage(o.value);
        return this.currentPlural = this.pluralStack.pop(), L;
    }, M.prototype.format = function(t) {
        return t || "number" == typeof t ? "string" == typeof t ? t : String(t) : "";
    }, s.prototype.getOption = function(t) {
        var e = this.options;
        return e["=" + t] || e[this.pluralFn(t - this.offset, this.useOrdinal)] || e.other;
    }, L.prototype.format = function(t) {
        var e = this.numberFormat.format(t - this.offset);
        return this.string.replace(/(^|[^\\])#/g, "$1" + e).replace(/\\#/g, "#");
    }, a.prototype.getOption = function(t) {
        var e = this.options;
        return e[t] || e.other;
    };
}, function(t, e, i) {
    "use strict";
    (e = t.exports = i(29).default).default = e;
}, function(t, e, i) {
    "use strict";
    e.default = function() {
        function t(t, e) {
            function i() {
                this.constructor = t;
            }
            i.prototype = e.prototype, t.prototype = new i();
        }
        function e(t, i, o, M) {
            this.message = t, this.expected = i, this.found = o, this.location = M, this.name = "SyntaxError", 
            "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, e);
        }
        function i(t) {
            var i, o = arguments.length > 1 ? arguments[1] : {}, M = {}, s = {
                start: At
            }, L = At, a = function(t) {
                return {
                    type: "messageFormatPattern",
                    elements: t,
                    location: gt()
                };
            }, r = function(t) {
                var e, i, o, M, s, L = "";
                for (e = 0, o = t.length; e < o; e += 1) for (i = 0, s = (M = t[e]).length; i < s; i += 1) L += M[i];
                return L;
            }, n = function(t) {
                return {
                    type: "messageTextElement",
                    value: t,
                    location: gt()
                };
            }, u = /^[^ \t\n\r,.+={}#]/, l = {
                type: "class",
                value: "[^ \\t\\n\\r,.+={}#]",
                description: "[^ \\t\\n\\r,.+={}#]"
            }, c = "{", j = {
                type: "literal",
                value: "{",
                description: '"{"'
            }, w = ",", C = {
                type: "literal",
                value: ",",
                description: '","'
            }, d = "}", N = {
                type: "literal",
                value: "}",
                description: '"}"'
            }, y = function(t, e) {
                return {
                    type: "argumentElement",
                    id: t,
                    format: e && e[2],
                    location: gt()
                };
            }, h = "number", f = {
                type: "literal",
                value: "number",
                description: '"number"'
            }, z = "date", p = {
                type: "literal",
                value: "date",
                description: '"date"'
            }, D = "time", I = {
                type: "literal",
                value: "time",
                description: '"time"'
            }, g = function(t, e) {
                return {
                    type: t + "Format",
                    style: e && e[2],
                    location: gt()
                };
            }, m = "plural", T = {
                type: "literal",
                value: "plural",
                description: '"plural"'
            }, S = function(t) {
                return {
                    type: t.type,
                    ordinal: !1,
                    offset: t.offset || 0,
                    options: t.options,
                    location: gt()
                };
            }, x = "selectordinal", A = {
                type: "literal",
                value: "selectordinal",
                description: '"selectordinal"'
            }, v = function(t) {
                return {
                    type: t.type,
                    ordinal: !0,
                    offset: t.offset || 0,
                    options: t.options,
                    location: gt()
                };
            }, k = "select", Y = {
                type: "literal",
                value: "select",
                description: '"select"'
            }, b = function(t) {
                return {
                    type: "selectFormat",
                    options: t,
                    location: gt()
                };
            }, E = "=", Q = {
                type: "literal",
                value: "=",
                description: '"="'
            }, O = function(t, e) {
                return {
                    type: "optionalFormatPattern",
                    selector: t,
                    value: e,
                    location: gt()
                };
            }, J = "offset:", U = {
                type: "literal",
                value: "offset:",
                description: '"offset:"'
            }, G = function(t) {
                return t;
            }, _ = function(t, e) {
                return {
                    type: "pluralFormat",
                    offset: t,
                    options: e,
                    location: gt()
                };
            }, P = {
                type: "other",
                description: "whitespace"
            }, B = /^[ \t\n\r]/, W = {
                type: "class",
                value: "[ \\t\\n\\r]",
                description: "[ \\t\\n\\r]"
            }, X = {
                type: "other",
                description: "optionalWhitespace"
            }, F = /^[0-9]/, V = {
                type: "class",
                value: "[0-9]",
                description: "[0-9]"
            }, H = /^[0-9a-f]/i, Z = {
                type: "class",
                value: "[0-9a-f]i",
                description: "[0-9a-f]i"
            }, q = "0", K = {
                type: "literal",
                value: "0",
                description: '"0"'
            }, R = /^[1-9]/, $ = {
                type: "class",
                value: "[1-9]",
                description: "[1-9]"
            }, tt = function(t) {
                return parseInt(t, 10);
            }, et = /^[^{}\\\0-\x1F\x7f \t\n\r]/, it = {
                type: "class",
                value: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]",
                description: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]"
            }, ot = "\\\\", Mt = {
                type: "literal",
                value: "\\\\",
                description: '"\\\\\\\\"'
            }, st = function() {
                return "\\";
            }, Lt = "\\#", at = {
                type: "literal",
                value: "\\#",
                description: '"\\\\#"'
            }, rt = function() {
                return "\\#";
            }, nt = "\\{", ut = {
                type: "literal",
                value: "\\{",
                description: '"\\\\{"'
            }, lt = function() {
                return "{";
            }, ct = "\\}", jt = {
                type: "literal",
                value: "\\}",
                description: '"\\\\}"'
            }, wt = function() {
                return "}";
            }, Ct = "\\u", dt = {
                type: "literal",
                value: "\\u",
                description: '"\\\\u"'
            }, Nt = function(t) {
                return String.fromCharCode(parseInt(t, 16));
            }, yt = function(t) {
                return t.join("");
            }, ht = 0, ft = 0, zt = [ {
                line: 1,
                column: 1,
                seenCR: !1
            } ], pt = 0, Dt = [], It = 0;
            if ("startRule" in o) {
                if (!(o.startRule in s)) throw new Error("Can't start parsing from rule \"" + o.startRule + '".');
                L = s[o.startRule];
            }
            function gt() {
                return Tt(ft, ht);
            }
            function mt(e) {
                var i, o, M = zt[e];
                if (M) return M;
                for (i = e - 1; !zt[i]; ) i--;
                for (M = {
                    line: (M = zt[i]).line,
                    column: M.column,
                    seenCR: M.seenCR
                }; i < e; ) "\n" === (o = t.charAt(i)) ? (M.seenCR || M.line++, M.column = 1, M.seenCR = !1) : "\r" === o || "\u2028" === o || "\u2029" === o ? (M.line++, 
                M.column = 1, M.seenCR = !0) : (M.column++, M.seenCR = !1), i++;
                return zt[e] = M, M;
            }
            function Tt(t, e) {
                var i = mt(t), o = mt(e);
                return {
                    start: {
                        offset: t,
                        line: i.line,
                        column: i.column
                    },
                    end: {
                        offset: e,
                        line: o.line,
                        column: o.column
                    }
                };
            }
            function St(t) {
                ht < pt || (ht > pt && (pt = ht, Dt = []), Dt.push(t));
            }
            function xt(t, i, o, M) {
                function s(t) {
                    var e = 1;
                    for (t.sort(function(t, e) {
                        return t.description < e.description ? -1 : t.description > e.description ? 1 : 0;
                    }); e < t.length; ) t[e - 1] === t[e] ? t.splice(e, 1) : e++;
                }
                function L(t, e) {
                    function i(t) {
                        function e(t) {
                            return t.charCodeAt(0).toString(16).toUpperCase();
                        }
                        return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(t) {
                            return "\\x0" + e(t);
                        }).replace(/[\x10-\x1F\x80-\xFF]/g, function(t) {
                            return "\\x" + e(t);
                        }).replace(/[\u0100-\u0FFF]/g, function(t) {
                            return "\\u0" + e(t);
                        }).replace(/[\u1000-\uFFFF]/g, function(t) {
                            return "\\u" + e(t);
                        });
                    }
                    var o, M = new Array(t.length);
                    for (o = 0; o < t.length; o++) M[o] = t[o].description;
                    return "Expected " + (t.length > 1 ? M.slice(0, -1).join(", ") + " or " + M[t.length - 1] : M[0]) + " but " + (e ? '"' + i(e) + '"' : "end of input") + " found.";
                }
                return null !== i && s(i), new e(null !== t ? t : L(i, o), i, o, M);
            }
            function At() {
                return vt();
            }
            function vt() {
                var t, e, i;
                for (t = ht, e = [], i = kt(); i !== M; ) e.push(i), i = kt();
                return e !== M && (ft = t, e = a(e)), t = e;
            }
            function kt() {
                var t;
                return (t = bt()) === M && (t = Qt()), t;
            }
            function Yt() {
                var e, i, o, s, L, a;
                if (e = ht, i = [], o = ht, (s = Vt()) !== M && (L = Rt()) !== M && (a = Vt()) !== M ? o = s = [ s, L, a ] : (ht = o, 
                o = M), o !== M) for (;o !== M; ) i.push(o), o = ht, (s = Vt()) !== M && (L = Rt()) !== M && (a = Vt()) !== M ? o = s = [ s, L, a ] : (ht = o, 
                o = M); else i = M;
                return i !== M && (ft = e, i = r(i)), (e = i) === M && (e = ht, e = (i = Ft()) !== M ? t.substring(e, ht) : i), 
                e;
            }
            function bt() {
                var t, e;
                return t = ht, (e = Yt()) !== M && (ft = t, e = n(e)), t = e;
            }
            function Et() {
                var e, i, o;
                if ((e = qt()) === M) {
                    if (e = ht, i = [], u.test(t.charAt(ht)) ? (o = t.charAt(ht), ht++) : (o = M, 0 === It && St(l)), 
                    o !== M) for (;o !== M; ) i.push(o), u.test(t.charAt(ht)) ? (o = t.charAt(ht), ht++) : (o = M, 
                    0 === It && St(l)); else i = M;
                    e = i !== M ? t.substring(e, ht) : i;
                }
                return e;
            }
            function Qt() {
                var e, i, o, s, L, a, r;
                return e = ht, 123 === t.charCodeAt(ht) ? (i = c, ht++) : (i = M, 0 === It && St(j)), 
                i !== M && Vt() !== M && (o = Et()) !== M && Vt() !== M ? (s = ht, 44 === t.charCodeAt(ht) ? (L = w, 
                ht++) : (L = M, 0 === It && St(C)), L !== M && (a = Vt()) !== M && (r = Ot()) !== M ? s = L = [ L, a, r ] : (ht = s, 
                s = M), s === M && (s = null), s !== M && (L = Vt()) !== M ? (125 === t.charCodeAt(ht) ? (a = d, 
                ht++) : (a = M, 0 === It && St(N)), a !== M ? (ft = e, e = i = y(o, s)) : (ht = e, 
                e = M)) : (ht = e, e = M)) : (ht = e, e = M), e;
            }
            function Ot() {
                var t;
                return (t = Jt()) === M && (t = Ut()) === M && (t = Gt()) === M && (t = _t()), t;
            }
            function Jt() {
                var e, i, o, s, L, a;
                return e = ht, t.substr(ht, 6) === h ? (i = h, ht += 6) : (i = M, 0 === It && St(f)), 
                i === M && (t.substr(ht, 4) === z ? (i = z, ht += 4) : (i = M, 0 === It && St(p)), 
                i === M && (t.substr(ht, 4) === D ? (i = D, ht += 4) : (i = M, 0 === It && St(I)))), 
                i !== M && Vt() !== M ? (o = ht, 44 === t.charCodeAt(ht) ? (s = w, ht++) : (s = M, 
                0 === It && St(C)), s !== M && (L = Vt()) !== M && (a = Rt()) !== M ? o = s = [ s, L, a ] : (ht = o, 
                o = M), o === M && (o = null), o !== M ? (ft = e, e = i = g(i, o)) : (ht = e, e = M)) : (ht = e, 
                e = M), e;
            }
            function Ut() {
                var e, i, o, s;
                return e = ht, t.substr(ht, 6) === m ? (i = m, ht += 6) : (i = M, 0 === It && St(T)), 
                i !== M && Vt() !== M ? (44 === t.charCodeAt(ht) ? (o = w, ht++) : (o = M, 0 === It && St(C)), 
                o !== M && Vt() !== M && (s = Xt()) !== M ? (ft = e, e = i = S(s)) : (ht = e, e = M)) : (ht = e, 
                e = M), e;
            }
            function Gt() {
                var e, i, o, s;
                return e = ht, t.substr(ht, 13) === x ? (i = x, ht += 13) : (i = M, 0 === It && St(A)), 
                i !== M && Vt() !== M ? (44 === t.charCodeAt(ht) ? (o = w, ht++) : (o = M, 0 === It && St(C)), 
                o !== M && Vt() !== M && (s = Xt()) !== M ? (ft = e, e = i = v(s)) : (ht = e, e = M)) : (ht = e, 
                e = M), e;
            }
            function _t() {
                var e, i, o, s, L;
                if (e = ht, t.substr(ht, 6) === k ? (i = k, ht += 6) : (i = M, 0 === It && St(Y)), 
                i !== M) if (Vt() !== M) if (44 === t.charCodeAt(ht) ? (o = w, ht++) : (o = M, 0 === It && St(C)), 
                o !== M) if (Vt() !== M) {
                    if (s = [], (L = Bt()) !== M) for (;L !== M; ) s.push(L), L = Bt(); else s = M;
                    s !== M ? (ft = e, e = i = b(s)) : (ht = e, e = M);
                } else ht = e, e = M; else ht = e, e = M; else ht = e, e = M; else ht = e, e = M;
                return e;
            }
            function Pt() {
                var e, i, o, s;
                return e = ht, i = ht, 61 === t.charCodeAt(ht) ? (o = E, ht++) : (o = M, 0 === It && St(Q)), 
                o !== M && (s = qt()) !== M ? i = o = [ o, s ] : (ht = i, i = M), (e = i !== M ? t.substring(e, ht) : i) === M && (e = Rt()), 
                e;
            }
            function Bt() {
                var e, i, o, s, L;
                return e = ht, Vt() !== M && (i = Pt()) !== M && Vt() !== M ? (123 === t.charCodeAt(ht) ? (o = c, 
                ht++) : (o = M, 0 === It && St(j)), o !== M && Vt() !== M && (s = vt()) !== M && Vt() !== M ? (125 === t.charCodeAt(ht) ? (L = d, 
                ht++) : (L = M, 0 === It && St(N)), L !== M ? (ft = e, e = O(i, s)) : (ht = e, e = M)) : (ht = e, 
                e = M)) : (ht = e, e = M), e;
            }
            function Wt() {
                var e, i, o;
                return e = ht, t.substr(ht, 7) === J ? (i = J, ht += 7) : (i = M, 0 === It && St(U)), 
                i !== M && Vt() !== M && (o = qt()) !== M ? (ft = e, e = i = G(o)) : (ht = e, e = M), 
                e;
            }
            function Xt() {
                var t, e, i, o;
                if (t = ht, (e = Wt()) === M && (e = null), e !== M) if (Vt() !== M) {
                    if (i = [], (o = Bt()) !== M) for (;o !== M; ) i.push(o), o = Bt(); else i = M;
                    i !== M ? (ft = t, t = e = _(e, i)) : (ht = t, t = M);
                } else ht = t, t = M; else ht = t, t = M;
                return t;
            }
            function Ft() {
                var e, i;
                if (It++, e = [], B.test(t.charAt(ht)) ? (i = t.charAt(ht), ht++) : (i = M, 0 === It && St(W)), 
                i !== M) for (;i !== M; ) e.push(i), B.test(t.charAt(ht)) ? (i = t.charAt(ht), ht++) : (i = M, 
                0 === It && St(W)); else e = M;
                return It--, e === M && (i = M, 0 === It && St(P)), e;
            }
            function Vt() {
                var e, i, o;
                for (It++, e = ht, i = [], o = Ft(); o !== M; ) i.push(o), o = Ft();
                return e = i !== M ? t.substring(e, ht) : i, It--, e === M && (i = M, 0 === It && St(X)), 
                e;
            }
            function Ht() {
                var e;
                return F.test(t.charAt(ht)) ? (e = t.charAt(ht), ht++) : (e = M, 0 === It && St(V)), 
                e;
            }
            function Zt() {
                var e;
                return H.test(t.charAt(ht)) ? (e = t.charAt(ht), ht++) : (e = M, 0 === It && St(Z)), 
                e;
            }
            function qt() {
                var e, i, o, s, L, a;
                if (e = ht, 48 === t.charCodeAt(ht) ? (i = q, ht++) : (i = M, 0 === It && St(K)), 
                i === M) {
                    if (i = ht, o = ht, R.test(t.charAt(ht)) ? (s = t.charAt(ht), ht++) : (s = M, 0 === It && St($)), 
                    s !== M) {
                        for (L = [], a = Ht(); a !== M; ) L.push(a), a = Ht();
                        L !== M ? o = s = [ s, L ] : (ht = o, o = M);
                    } else ht = o, o = M;
                    i = o !== M ? t.substring(i, ht) : o;
                }
                return i !== M && (ft = e, i = tt(i)), e = i;
            }
            function Kt() {
                var e, i, o, s, L, a, r, n;
                return et.test(t.charAt(ht)) ? (e = t.charAt(ht), ht++) : (e = M, 0 === It && St(it)), 
                e === M && (e = ht, t.substr(ht, 2) === ot ? (i = ot, ht += 2) : (i = M, 0 === It && St(Mt)), 
                i !== M && (ft = e, i = st()), (e = i) === M && (e = ht, t.substr(ht, 2) === Lt ? (i = Lt, 
                ht += 2) : (i = M, 0 === It && St(at)), i !== M && (ft = e, i = rt()), (e = i) === M && (e = ht, 
                t.substr(ht, 2) === nt ? (i = nt, ht += 2) : (i = M, 0 === It && St(ut)), i !== M && (ft = e, 
                i = lt()), (e = i) === M && (e = ht, t.substr(ht, 2) === ct ? (i = ct, ht += 2) : (i = M, 
                0 === It && St(jt)), i !== M && (ft = e, i = wt()), (e = i) === M && (e = ht, t.substr(ht, 2) === Ct ? (i = Ct, 
                ht += 2) : (i = M, 0 === It && St(dt)), i !== M ? (o = ht, s = ht, (L = Zt()) !== M && (a = Zt()) !== M && (r = Zt()) !== M && (n = Zt()) !== M ? s = L = [ L, a, r, n ] : (ht = s, 
                s = M), (o = s !== M ? t.substring(o, ht) : s) !== M ? (ft = e, e = i = Nt(o)) : (ht = e, 
                e = M)) : (ht = e, e = M)))))), e;
            }
            function Rt() {
                var t, e, i;
                if (t = ht, e = [], (i = Kt()) !== M) for (;i !== M; ) e.push(i), i = Kt(); else e = M;
                return e !== M && (ft = t, e = yt(e)), t = e;
            }
            if ((i = L()) !== M && ht === t.length) return i;
            throw i !== M && ht < t.length && St({
                type: "end",
                description: "end of input"
            }), xt(null, Dt, pt < t.length ? t.charAt(pt) : null, pt < t.length ? Tt(pt, pt + 1) : Tt(pt, pt));
        }
        return t(e, Error), {
            SyntaxError: e,
            parse: i
        };
    }();
}, function(t, e, i) {
    "use strict";
    e.default = {
        locale: "en",
        pluralRuleFunction: function(t, e) {
            var i = String(t).split("."), o = !i[1], M = Number(i[0]) == t, s = M && i[0].slice(-1), L = M && i[0].slice(-2);
            return e ? 1 == s && 11 != L ? "one" : 2 == s && 12 != L ? "two" : 3 == s && 13 != L ? "few" : "other" : 1 == t && o ? "one" : "other";
        }
    };
}, function(t, e) {}, function(t, e, i) {
    "use strict";
    var o = i(33), M = i(36);
    o.default.__addLocaleData(M.default), o.default.defaultLocale = "en", e.default = o.default;
}, function(t, e, i) {
    "use strict";
    var o = i(5), M = i(34), s = i(35);
    e.default = r;
    var L = [ "second", "second-short", "minute", "minute-short", "hour", "hour-short", "day", "day-short", "month", "month-short", "year", "year-short" ], a = [ "best fit", "numeric" ];
    function r(t, e) {
        e = e || {}, s.isArray(t) && (t = t.concat()), s.defineProperty(this, "_locale", {
            value: this._resolveLocale(t)
        }), s.defineProperty(this, "_options", {
            value: {
                style: this._resolveStyle(e.style),
                units: this._isValidUnits(e.units) && e.units
            }
        }), s.defineProperty(this, "_locales", {
            value: t
        }), s.defineProperty(this, "_fields", {
            value: this._findFields(this._locale)
        }), s.defineProperty(this, "_messages", {
            value: s.objCreate(null)
        });
        var i = this;
        this.format = function(t, e) {
            return i._format(t, e);
        };
    }
    s.defineProperty(r, "__localeData__", {
        value: s.objCreate(null)
    }), s.defineProperty(r, "__addLocaleData", {
        value: function(t) {
            if (!t || !t.locale) throw new Error("Locale data provided to IntlRelativeFormat is missing a `locale` property value");
            r.__localeData__[t.locale.toLowerCase()] = t, o.default.__addLocaleData(t);
        }
    }), s.defineProperty(r, "defaultLocale", {
        enumerable: !0,
        writable: !0,
        value: void 0
    }), s.defineProperty(r, "thresholds", {
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
    }), r.prototype.resolvedOptions = function() {
        return {
            locale: this._locale,
            style: this._options.style,
            units: this._options.units
        };
    }, r.prototype._compileMessage = function(t) {
        var e, i = this._locales, M = (this._locale, this._fields[t].relativeTime), s = "", L = "";
        for (e in M.future) M.future.hasOwnProperty(e) && (s += " " + e + " {" + M.future[e].replace("{0}", "#") + "}");
        for (e in M.past) M.past.hasOwnProperty(e) && (L += " " + e + " {" + M.past[e].replace("{0}", "#") + "}");
        var a = "{when, select, future {{0, plural, " + s + "}}past {{0, plural, " + L + "}}}";
        return new o.default(a, i);
    }, r.prototype._getMessage = function(t) {
        var e = this._messages;
        return e[t] || (e[t] = this._compileMessage(t)), e[t];
    }, r.prototype._getRelativeUnits = function(t, e) {
        var i = this._fields[e];
        if (i.relative) return i.relative[t];
    }, r.prototype._findFields = function(t) {
        for (var e = r.__localeData__, i = e[t.toLowerCase()]; i; ) {
            if (i.fields) return i.fields;
            i = i.parentLocale && e[i.parentLocale.toLowerCase()];
        }
        throw new Error("Locale data added to IntlRelativeFormat is missing `fields` for :" + t);
    }, r.prototype._format = function(t, e) {
        var i = e && void 0 !== e.now ? e.now : s.dateNow();
        if (void 0 === t && (t = i), !isFinite(i)) throw new RangeError("The `now` option provided to IntlRelativeFormat#format() is not in valid range.");
        if (!isFinite(t)) throw new RangeError("The date value provided to IntlRelativeFormat#format() is not in valid range.");
        var o = M.default(i, t), L = this._options.units || this._selectUnits(o), a = o[L];
        if ("numeric" !== this._options.style) {
            var r = this._getRelativeUnits(a, L);
            if (r) return r;
        }
        return this._getMessage(L).format({
            0: Math.abs(a),
            when: a < 0 ? "past" : "future"
        });
    }, r.prototype._isValidUnits = function(t) {
        if (!t || s.arrIndexOf.call(L, t) >= 0) return !0;
        if ("string" == typeof t) {
            var e = /s$/.test(t) && t.substr(0, t.length - 1);
            if (e && s.arrIndexOf.call(L, e) >= 0) throw new Error('"' + t + '" is not a valid IntlRelativeFormat `units` value, did you mean: ' + e);
        }
        throw new Error('"' + t + '" is not a valid IntlRelativeFormat `units` value, it must be one of: "' + L.join('", "') + '"');
    }, r.prototype._resolveLocale = function(t) {
        "string" == typeof t && (t = [ t ]), t = (t || []).concat(r.defaultLocale);
        var e, i, o, M, s = r.__localeData__;
        for (e = 0, i = t.length; e < i; e += 1) for (o = t[e].toLowerCase().split("-"); o.length; ) {
            if (M = s[o.join("-")]) return M.locale;
            o.pop();
        }
        var L = t.pop();
        throw new Error("No locale data has been added to IntlRelativeFormat for: " + t.join(", ") + ", or the default locale: " + L);
    }, r.prototype._resolveStyle = function(t) {
        if (!t) return a[0];
        if (s.arrIndexOf.call(a, t) >= 0) return t;
        throw new Error('"' + t + '" is not a valid IntlRelativeFormat `style` value, it must be one of: "' + a.join('", "') + '"');
    }, r.prototype._selectUnits = function(t) {
        var e, i, o, M = L.filter(function(t) {
            return t.indexOf("-short") < 1;
        });
        for (e = 0, i = M.length; e < i && (o = M[e], !(Math.abs(t[o]) < r.thresholds[o])); e += 1) ;
        return o;
    };
}, function(t, e, i) {
    "use strict";
    var o = Math.round;
    function M(t) {
        return 400 * t / 146097;
    }
    e.default = function(t, e) {
        var i = o((e = +e) - (t = +t)), s = o(i / 1e3), L = o(s / 60), a = o(L / 60), r = o(a / 24), n = o(r / 7), u = M(r), l = o(12 * u), c = o(u);
        return {
            millisecond: i,
            second: s,
            "second-short": s,
            minute: L,
            "minute-short": L,
            hour: a,
            "hour-short": a,
            day: r,
            "day-short": r,
            week: n,
            "week-short": n,
            month: l,
            "month-short": l,
            year: c,
            "year-short": c
        };
    };
}, function(t, e, i) {
    "use strict";
    var o = Object.prototype.hasOwnProperty, M = Object.prototype.toString, s = function() {
        try {
            return !!Object.defineProperty({}, "a", {});
        } catch (t) {
            return !1;
        }
    }(), L = (!s && Object.prototype.__defineGetter__, s ? Object.defineProperty : function(t, e, i) {
        "get" in i && t.__defineGetter__ ? t.__defineGetter__(e, i.get) : (!o.call(t, e) || "value" in i) && (t[e] = i.value);
    }), a = Object.create || function(t, e) {
        var i, M;
        function s() {}
        for (M in s.prototype = t, i = new s(), e) o.call(e, M) && L(i, M, e[M]);
        return i;
    }, r = Array.prototype.indexOf || function(t, e) {
        var i = this;
        if (!i.length) return -1;
        for (var o = e || 0, M = i.length; o < M; o++) if (i[o] === t) return o;
        return -1;
    }, n = Array.isArray || function(t) {
        return "[object Array]" === M.call(t);
    }, u = Date.now || function() {
        return new Date().getTime();
    };
    e.defineProperty = L, e.objCreate = a, e.arrIndexOf = r, e.isArray = n, e.dateNow = u;
}, function(t, e, i) {
    "use strict";
    e.default = {
        locale: "en",
        pluralRuleFunction: function(t, e) {
            var i = String(t).split("."), o = !i[1], M = Number(i[0]) == t, s = M && i[0].slice(-1), L = M && i[0].slice(-2);
            return e ? 1 == s && 11 != L ? "one" : 2 == s && 12 != L ? "two" : 3 == s && 13 != L ? "few" : "other" : 1 == t && o ? "one" : "other";
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
}, function(t, e) {}, function(t, e, i) {
    "use strict";
    var o = i(39);
    function M() {}
    t.exports = function() {
        function t(t, e, i, M, s, L) {
            if (L !== o) {
                var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw a.name = "Invariant Violation", a;
            }
        }
        function e() {
            return t;
        }
        t.isRequired = t;
        var i = {
            array: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e
        };
        return i.checkPropTypes = M, i.PropTypes = i, i;
    };
}, function(t, e, i) {
    "use strict";
    var o = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    t.exports = o;
}, function(t, e) {
    var i, o, M = t.exports = {};
    function s() {
        throw new Error("setTimeout has not been defined");
    }
    function L() {
        throw new Error("clearTimeout has not been defined");
    }
    function a(t) {
        if (i === setTimeout) return setTimeout(t, 0);
        if ((i === s || !i) && setTimeout) return i = setTimeout, setTimeout(t, 0);
        try {
            return i(t, 0);
        } catch (e) {
            try {
                return i.call(null, t, 0);
            } catch (e) {
                return i.call(this, t, 0);
            }
        }
    }
    function r(t) {
        if (o === clearTimeout) return clearTimeout(t);
        if ((o === L || !o) && clearTimeout) return o = clearTimeout, clearTimeout(t);
        try {
            return o(t);
        } catch (e) {
            try {
                return o.call(null, t);
            } catch (e) {
                return o.call(this, t);
            }
        }
    }
    !function() {
        try {
            i = "function" == typeof setTimeout ? setTimeout : s;
        } catch (t) {
            i = s;
        }
        try {
            o = "function" == typeof clearTimeout ? clearTimeout : L;
        } catch (t) {
            o = L;
        }
    }();
    var n, u = [], l = !1, c = -1;
    function j() {
        l && n && (l = !1, n.length ? u = n.concat(u) : c = -1, u.length && w());
    }
    function w() {
        if (!l) {
            var t = a(j);
            l = !0;
            for (var e = u.length; e; ) {
                for (n = u, u = []; ++c < e; ) n && n[c].run();
                c = -1, e = u.length;
            }
            n = null, l = !1, r(t);
        }
    }
    function C(t, e) {
        this.fun = t, this.array = e;
    }
    function d() {}
    M.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
        u.push(new C(t, e)), 1 !== u.length || l || a(w);
    }, C.prototype.run = function() {
        this.fun.apply(null, this.array);
    }, M.title = "browser", M.browser = !0, M.env = {}, M.argv = [], M.version = "", 
    M.versions = {}, M.on = d, M.addListener = d, M.once = d, M.off = d, M.removeListener = d, 
    M.removeAllListeners = d, M.emit = d, M.prependListener = d, M.prependOnceListener = d, 
    M.listeners = function(t) {
        return [];
    }, M.binding = function(t) {
        throw new Error("process.binding is not supported");
    }, M.cwd = function() {
        return "/";
    }, M.chdir = function(t) {
        throw new Error("process.chdir is not supported");
    }, M.umask = function() {
        return 0;
    };
}, function(t, e, i) {
    "use strict";
    var o = i(42);
    function M(t) {
        var e = o.objCreate(null);
        return function() {
            var i = Array.prototype.slice.call(arguments), M = s(i), L = M && e[M];
            return L || (L = new (o.bind.apply(t, [ null ].concat(i)))(), M && (e[M] = L)), 
            L;
        };
    }
    function s(t) {
        if ("undefined" != typeof JSON) {
            var e, i, o, M = [];
            for (e = 0, i = t.length; e < i; e += 1) (o = t[e]) && "object" == typeof o ? M.push(L(o)) : M.push(o);
            return JSON.stringify(M);
        }
    }
    function L(t) {
        var e, i, o, M, s = [], L = [];
        for (e in t) t.hasOwnProperty(e) && L.push(e);
        var a = L.sort();
        for (i = 0, o = a.length; i < o; i += 1) (M = {})[e = a[i]] = t[e], s[i] = M;
        return s;
    }
    e.default = M;
}, function(t, e, i) {
    "use strict";
    var o = Function.prototype.bind || function(t) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var e = Array.prototype.slice.call(arguments, 1), i = this, o = function() {}, M = function() {
            return i.apply(this instanceof o ? this : t, e.concat(Array.prototype.slice.call(arguments)));
        };
        return this.prototype && (o.prototype = this.prototype), M.prototype = new o(), 
        M;
    }, M = Object.prototype.hasOwnProperty, s = function() {
        try {
            return !!Object.defineProperty({}, "a", {});
        } catch (t) {
            return !1;
        }
    }(), L = (!s && Object.prototype.__defineGetter__, s ? Object.defineProperty : function(t, e, i) {
        "get" in i && t.__defineGetter__ ? t.__defineGetter__(e, i.get) : (!M.call(t, e) || "value" in i) && (t[e] = i.value);
    }), a = Object.create || function(t, e) {
        var i, o;
        function s() {}
        for (o in s.prototype = t, i = new s(), e) M.call(e, o) && L(i, o, e[o]);
        return i;
    };
    e.bind = o, e.defineProperty = L, e.objCreate = a;
}, function(t, e, i) {
    "use strict";
    var o = i(23), M = i.n(o), s = document.createElement("div");
    Object.assign(s.style, {
        width: "0",
        height: "0",
        position: "absolute",
        top: "-9999px",
        left: "-9999px"
    }), s.innerHTML = M.a, document.body.insertBefore(s, document.querySelector("#root"));
}, , , , , , , , function(t, e, i) {
    "use strict";
    (function(t) {
        var o = i(0), M = i(1), s = i(52), L = i(53), a = i(12), r = i(11), n = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                    Object.defineProperty(t, o.key, o);
                }
            }
            return function(e, i, o) {
                return i && t(e.prototype, i), o && t(e, o), e;
            };
        }();
        function u(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        function l(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e;
        }
        function c(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }
        var j = Object.freeze({
            Intro: 0,
            Loading: 1
        }), w = function(e) {
            function i() {
                u(this, i);
                var t = l(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                return t.onTeacher = function() {
                    t.showLoadingSpinner(), t.registerAs("teacher");
                }, t.onStudent = function() {
                    t.showLoadingSpinner(), t.registerAs("student");
                }, t.onDismiss = function() {
                    t.showLoadingSpinner(), t.registerAs("teacher");
                }, t.showLoadingSpinner = function() {
                    t.setState({
                        display: j.Loading
                    });
                }, t.registerAs = function(t) {
                    Object(r.b)(t), Object(r.c)(!0), window.location = "https://docs.google.com/create";
                }, t.state = {
                    display: j.Intro
                }, t;
            }
            return c(i, o["Component"]), n(i, [ {
                key: "render",
                value: function() {
                    var e = this.state.display, i = this.onTeacher, o = this.onStudent, r = this.onDismiss;
                    return t(M.b, {
                        locale: Object(a.b)(),
                        messages: Object(a.a)()
                    }, t("div", null, t("svg", {
                        viewBox: "0 0 162.466 54.266",
                        className: "equatio-login-logo"
                    }, t("use", {
                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                        xlinkHref: "#equatio-svg-logo-upgrade-overlay"
                    })), e === j.Intro ? t(s.a, {
                        onTeacher: i,
                        onStudent: o,
                        onDismiss: r
                    }) : t(L.a, null)));
                }
            } ]), i;
        }();
        e.a = w;
    }).call(this, i(0).h);
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var o = i(1);
        e.a = function(e) {
            var i = e.onStudent, M = e.onTeacher, s = e.onDismiss;
            return t("div", {
                className: "equatio-message"
            }, t("div", {
                className: "equatio-youtube-wrapper"
            }, t("iframe", {
                title: "YouTube Introduction Video",
                width: "560",
                height: "315",
                src: "https://www.youtube.com/embed/smh5esAYWFA",
                frameBorder: "0",
                allowFullScreen: !0
            })), t("p", {
                className: "equatio-login-get-started"
            }, t(o.a, {
                id: "intro.introduction-line1",
                defaultMessage: "Finally, you can create digital math! {learnMoreLink}.",
                values: {
                    learnMoreLink: t("a", {
                        className: "equatio-login-link",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        href: "https://www.texthelp.com/products/equatio/premium-features/"
                    }, t(o.a, {
                        id: "intro.introduction-learn-more-link",
                        defaultMessage: "Learn more"
                    }))
                }
            })), t("ul", {
                className: "equatio-login-get-started-action equatio-buttonset"
            }, t("li", null, t("button", {
                className: "equatio-button equatio-button--white",
                onClick: i
            }, t(o.a, {
                id: "intro.student-button",
                defaultMessage: "Student"
            }))), t("li", null, t("button", {
                className: "equatio-button equatio-button--white",
                onClick: M
            }, t(o.a, {
                id: "intro.teacher-button",
                defaultMessage: "Teacher"
            })))), t("div", {
                className: "equatio-login-dismiss-link"
            }, t("a", {
                href: "window.close()",
                onClick: function(t) {
                    t.preventDefault(), s();
                }
            }, t(o.a, {
                id: "intro.dismiss-button",
                defaultMessage: "I'd rather not say. Simply take me to EquatIO!"
            }))));
        };
    }).call(this, i(0).h);
}, function(t, e, i) {
    "use strict";
    (function(t) {
        var o = i(1);
        e.a = function() {
            return t("div", {
                className: "equatio-loading"
            }, t("div", {
                className: "equatio-loading-spinner equatio-loading-spinner--white"
            }), t("p", {
                className: "equatio-login-get-started"
            }, t("strong", null, t(o.a, {
                id: "intro.loading-doc.thanks",
                defaultMessage: "Thanks!"
            })), " ", t(o.a, {
                id: "intro.loading-doc.message",
                defaultMessage: "We're taking you to your first EquatIO-enabled Google Doc..."
            })));
        };
    }).call(this, i(0).h);
}, , , , , , , , , , , function(t, e, i) {
    "use strict";
    i.r(e), function(t) {
        var e = i(0), o = (i(65), i(67), i(43), i(51)), M = i(11);
        Object(M.a)(), Object(e.render)(t(o.a, null), document.getElementById("root"));
    }.call(this, i(0).h);
}, function(t, e, i) {
    var o, M = i(66);
    "string" == typeof M && (M = [ [ t.i, M, "" ] ]);
    var s = {
        hmr: !0
    };
    s.transform = o, s.insertInto = void 0;
    i(10)(M, s);
    M.locals && (t.exports = M.locals);
}, function(t, e, i) {
    (t.exports = i(9)(void 0)).push([ t.i, ".equatio-buttonset {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  margin: 0 20px; }\n\n.equatio-buttonset.equatio-buttonset--no-margin {\n  margin: 0; }\n\n.equatio-buttonset__item {\n  margin: 0 10px; }\n  .equatio-buttonset__item:last-child {\n    margin-right: 0; }\n\n.equatio-buttonset__item--full-width {\n  width: 100%; }\n\n.equatio-buttonset--right,\n.equatio-buttonset--vertical--right {\n  -webkit-box-direction: normal;\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -moz-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  -webkit-justify-content: flex-end;\n  -moz-justify-content: flex-end;\n  justify-content: flex-end; }\n\n.equatio-buttonset--center,\n.equatio-buttonset--vertical--center {\n  -webkit-box-direction: normal;\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -moz-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center; }\n\n.equatio-buttonset--vertical {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  margin: 20px 0; }\n  .equatio-buttonset--vertical .equatio-buttonset__item {\n    margin: 10px 0; }\n\n/* stylelint-disable */\n/* stylelint-enable */\n.equatio-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  font-family: Roboto, Arial, sans-serif;\n  background: #00B7FF;\n  color: #FFF;\n  text-transform: uppercase;\n  cursor: pointer;\n  padding: 7px 10px;\n  font-size: 0.85em;\n  margin: 0 10px;\n  min-width: 165px;\n  border-radius: 3px;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 600;\n  -webkit-box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n  -moz-box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n  box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n  letter-spacing: -0.2px; }\n  .equatio-button:hover, .equatio-button:active {\n    background: #33c5ff; }\n  .equatio-button:first-child {\n    margin-left: 0; }\n  .equatio-button:last-child {\n    margin-right: 0; }\n  .equatio-button[disabled] {\n    background: rgba(70, 70, 70, 0.23);\n    cursor: default; }\n\n.equatio-button--white {\n  background: #FFF;\n  color: #00B7FF; }\n  .equatio-button--white:hover {\n    background: #e6f8ff; }\n\n.equatio-button--gold {\n  background: #E5BD13;\n  color: #FFF;\n  font-weight: 500; }\n  .equatio-button--gold:hover {\n    background: #ecc41b; }\n\n.equatio-button--single {\n  margin: 0; }\n\n.equatio-button--small {\n  min-width: 0; }\n\n@media all and (max-width: 945px) {\n  .equatio-toolbar .equatio-button-edit,\n  .equatio-toolbar .equatio-button-insert {\n    width: 32px;\n    min-width: 0;\n    padding: 0;\n    text-indent: -9999px;\n    overflow: hidden;\n    height: 32px;\n    background-position: 50% 50%;\n    background-repeat: no-repeat; }\n  .equatio-toolbar .equatio-button-edit {\n    /* stylelint-disable-next-line */\n    background-image: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='20px' viewBox='0 0 24 24'>%3Cpath d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' fill='%23FFF' /%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E</svg>\"); }\n  .equatio-toolbar .equatio-button-insert {\n    /* stylelint-disable-next-line */\n    background-image: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='20px' viewBox='0 0 24 24'>%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' fill='%23FFF' /%3E</svg>\"); } }\n\n.equatio-button.equatio-copy-button {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  text-transform: none;\n  padding: 0;\n  box-sizing: border-box;\n  height: 32px;\n  width: 32px;\n  -webkit-font-smoothing: antialiased; }\n\n.equatio-copy-button__icon {\n  height: 20px; }\n\n/* stylelint-disable */\n/* stylelint-enable */\n@keyframes vjXdlbbW_draw {\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_fade {\n  0% {\n    stroke-opacity: 1; }\n  77.77777777777777% {\n    stroke-opacity: 1; }\n  100% {\n    stroke-opacity: 0; } }\n\n@keyframes vjXdlbbW_draw_0 {\n  0% {\n    stroke-dashoffset: 2317; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_1 {\n  0% {\n    stroke-dashoffset: 282; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_2 {\n  0% {\n    stroke-dashoffset: 504; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_3 {\n  0% {\n    stroke-dashoffset: 282; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_4 {\n  0% {\n    stroke-dashoffset: 504; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_5 {\n  0% {\n    stroke-dashoffset: 282; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_6 {\n  0% {\n    stroke-dashoffset: 504; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_7 {\n  0% {\n    stroke-dashoffset: 282; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_8 {\n  0% {\n    stroke-dashoffset: 504; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@-webkit-keyframes rotate {\n  20% {\n    -webkit-transform: rotateY(180deg); }\n  30% {\n    -webkit-transform: rotateY(360deg); }\n  100% {\n    -webkit-transform: rotateY(360deg); } }\n\n.equatio-save-loading-spinner {\n  padding: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  margin: 5px;\n  /* stylelint-disable-next-line */\n  background: #28D88C url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='27' viewBox='0 0 912 912'>%3Cstyle type='text/css'%3E\t.st0{fill:none;stroke:%23FFF;stroke-width:52.5138;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st1{fill:none;stroke:%23FFF;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st2{fill:none;stroke:%23FFF;stroke-width:40.8129;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  %3C/style%3E  %3Cpath class='st0 vjXdlbbW_0' d='M833.3,513.4L523,823.8c-54.5,0-85.6,0-140,0L72.6,513.4c0-54.5,0-85.6,0-140L383,63.1c54.5,0,85.6,0,140,0\tl310.3,310.3C833.3,427.9,833.3,459,833.3,513.4z'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_1' d='M262.8,445.6L461.1,643.9'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_2' d='M453.4,650.2L401.9,701.7L97.8,397.6'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_3' d='M449.1,637.7L647.4,439.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_4' d='M653.7,447.1L705.2,498.6L401,802.7'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_5' d='M643.3,444.5L445,246.2'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_6' d='M452.8,239.8L504.2,188.4L808.4,492.5'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_7' d='M452.8,253.1L254.5,451.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_8' d='M248.2,443.6L196.7,392.2L500.9,88.1'%3E%3C/path%3E  %3Cstyle%3E@supports (-webkit-appearance:none) { .vjXdlbbW_0{stroke-dasharray:2316 2318;stroke-dashoffset:2317;animation:vjXdlbbW_draw_0 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_1{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_1 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_2{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_2 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_3{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_3 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_4{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_4 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_5{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_5 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_6{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_6 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_7{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_7 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_8{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_8 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}@keyframes vjXdlbbW_draw{100%{stroke-dashoffset:0;}}@keyframes vjXdlbbW_fade{0%{stroke-opacity:1;}77.77777777777777%{stroke-opacity:1;}100%{stroke-opacity:0;}}@keyframes vjXdlbbW_draw_0{0%{stroke-dashoffset: 2317}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_1{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_2{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_3{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_4{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_5{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_6{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_7{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_8{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}} }%3C/style%3E</svg>\") 50% 50% no-repeat; }\n\n.equatio-loading-spinner {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  box-sizing: border-box;\n  /* stylelint-disable-next-line */\n  background: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='80' viewBox='0 0 912 912'>%3Cstyle type='text/css'%3E\t.st0{fill:none;stroke:%2300B7FF;stroke-width:52.5138;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st1{fill:none;stroke:%2300B7FF;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st2{fill:none;stroke:%2300B7FF;stroke-width:40.8129;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  %3C/style%3E  %3Cpath class='st0 vjXdlbbW_0' d='M833.3,513.4L523,823.8c-54.5,0-85.6,0-140,0L72.6,513.4c0-54.5,0-85.6,0-140L383,63.1c54.5,0,85.6,0,140,0\tl310.3,310.3C833.3,427.9,833.3,459,833.3,513.4z'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_1' d='M262.8,445.6L461.1,643.9'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_2' d='M453.4,650.2L401.9,701.7L97.8,397.6'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_3' d='M449.1,637.7L647.4,439.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_4' d='M653.7,447.1L705.2,498.6L401,802.7'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_5' d='M643.3,444.5L445,246.2'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_6' d='M452.8,239.8L504.2,188.4L808.4,492.5'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_7' d='M452.8,253.1L254.5,451.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_8' d='M248.2,443.6L196.7,392.2L500.9,88.1'%3E%3C/path%3E  %3Cstyle%3E@supports (-webkit-appearance:none) { .vjXdlbbW_0{stroke-dasharray:2316 2318;stroke-dashoffset:2317;animation:vjXdlbbW_draw_0 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_1{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_1 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_2{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_2 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_3{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_3 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_4{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_4 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_5{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_5 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_6{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_6 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_7{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_7 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_8{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_8 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}@keyframes vjXdlbbW_draw{100%{stroke-dashoffset:0;}}@keyframes vjXdlbbW_fade{0%{stroke-opacity:1;}77.77777777777777%{stroke-opacity:1;}100%{stroke-opacity:0;}}@keyframes vjXdlbbW_draw_0{0%{stroke-dashoffset: 2317}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_1{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_2{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_3{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_4{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_5{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_6{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_7{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_8{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}} }%3C/style%3E</svg>\") 50% 50% no-repeat;\n  padding-top: 100px;\n  background-size: 80px; }\n  .equatio-loading-spinner.equatio-loading-spinner--white {\n    /* stylelint-disable-next-line */\n    background-image: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='80' viewBox='0 0 912 912'>%3Cstyle type='text/css'%3E\t.st0{fill:none;stroke:%23FFF;stroke-width:52.5138;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st1{fill:none;stroke:%23FFF;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st2{fill:none;stroke:%23FFF;stroke-width:40.8129;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  %3C/style%3E  %3Cpath class='st0 vjXdlbbW_0' d='M833.3,513.4L523,823.8c-54.5,0-85.6,0-140,0L72.6,513.4c0-54.5,0-85.6,0-140L383,63.1c54.5,0,85.6,0,140,0\tl310.3,310.3C833.3,427.9,833.3,459,833.3,513.4z'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_1' d='M262.8,445.6L461.1,643.9'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_2' d='M453.4,650.2L401.9,701.7L97.8,397.6'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_3' d='M449.1,637.7L647.4,439.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_4' d='M653.7,447.1L705.2,498.6L401,802.7'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_5' d='M643.3,444.5L445,246.2'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_6' d='M452.8,239.8L504.2,188.4L808.4,492.5'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_7' d='M452.8,253.1L254.5,451.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_8' d='M248.2,443.6L196.7,392.2L500.9,88.1'%3E%3C/path%3E  %3Cstyle%3E@supports (-webkit-appearance:none) { .vjXdlbbW_0{stroke-dasharray:2316 2318;stroke-dashoffset:2317;animation:vjXdlbbW_draw_0 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_1{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_1 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_2{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_2 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_3{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_3 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_4{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_4 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_5{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_5 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_6{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_6 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_7{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_7 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_8{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_8 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}@keyframes vjXdlbbW_draw{100%{stroke-dashoffset:0;}}@keyframes vjXdlbbW_fade{0%{stroke-opacity:1;}77.77777777777777%{stroke-opacity:1;}100%{stroke-opacity:0;}}@keyframes vjXdlbbW_draw_0{0%{stroke-dashoffset: 2317}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_1{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_2{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_3{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_4{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_5{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_6{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_7{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_8{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}} }%3C/style%3E</svg>\"); }\n    .equatio-loading-spinner.equatio-loading-spinner--white .equatio-loading-spinner__message {\n      color: #FFF; }\n\n.equatio-drawer__content__pane__spinner {\n  height: 200px; }\n  .equatio-drawer__content__pane__spinner .equatio-loading-spinner__icon {\n    height: 80px;\n    -webkit-animation-name: rotate;\n    -webkit-animation-duration: 3s;\n    -webkit-animation-iteration-count: infinite;\n    -webkit-animation-timing-function: ease-in-out; }\n\n.equatio-loading-spinner__message {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  color: #00B7FF;\n  font-weight: 600;\n  -webkit-font-smoothing: antialiased; }\n\n.equatio-login {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  margin-top: -30px; }\n\n.equatio-login-logo {\n  display: block;\n  width: 300px;\n  margin: 30px auto; }\n\n.equatio-login-get-started {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  color: #FFF;\n  font-size: 1.5em;\n  -webkit-font-smoothing: antialiased;\n  margin: 20px;\n  text-align: center; }\n\n.equatio-login-get-started-action {\n  font-size: 1.3em;\n  justify-content: center; }\n\n.equatio-login-get-started-action .equatio-button {\n  margin: 0 10px; }\n\n.equatio-login-dismiss-link {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  text-align: center;\n  padding: 10px 0; }\n  .equatio-login-dismiss-link a {\n    -webkit-font-smoothing: antialiased;\n    font-size: 1.2em;\n    color: #FFF;\n    text-decoration: underline; }\n    .equatio-login-dismiss-link a:hover {\n      color: #f2f2f2; }\n\nhtml, body {\n  height: 100%;\n  font-size: 12px;\n  background-size: cover;\n  background: #00b7ff url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA5MjcuMSA3MDguNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgOTI3LjEgNzA4LjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7b3BhY2l0eTowLjI2O2ZpbGw6IzAwOTdFMjt9Cgkuc3Qxe2ZpbGw6IzAwQjdGRjt9Cjwvc3R5bGU+CjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNDAuNSw1MmMtMC40LDAtMC42LTAuMy0wLjYtMC43di0xLjhjMC0wLjQsMC4yLTAuNywwLjYtMC43YzAuNCwwLDAuNiwwLjMsMC42LDAuN3YxLjgKCQkJCUMxNDEsNTEuNywxNDAuOCw1MiwxNDAuNSw1MnoiLz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE0MC41LDQ3LjVjLTAuNCwwLTAuNi0wLjMtMC42LTAuN3YtMi43YzAtMC40LDAuMi0wLjcsMC42LTAuN2MwLjQsMCwwLjYsMC4zLDAuNiwwLjd2Mi43CgkJCQlDMTQxLDQ3LjIsMTQwLjgsNDcuNSwxNDAuNSw0Ny41eiBNMTQwLjUsNDIuMmMtMC40LDAtMC42LTAuMy0wLjYtMC43di0yLjdjMC0wLjQsMC4yLTAuNywwLjYtMC43YzAuNCwwLDAuNiwwLjMsMC42LDAuN3YyLjcKCQkJCUMxNDEsNDEuOSwxNDAuOCw0Mi4yLDE0MC41LDQyLjJ6IE0xNDAuNSwzNi44Yy0wLjQsMC0wLjYtMC4zLTAuNi0wLjd2LTIuN2MwLTAuNCwwLjItMC43LDAuNi0wLjdjMC40LDAsMC42LDAuMywwLjYsMC43djIuNwoJCQkJQzE0MSwzNi41LDE0MC44LDM2LjgsMTQwLjUsMzYuOHogTTE0MC41LDMxLjRjLTAuNCwwLTAuNi0wLjMtMC42LTAuN1YyOGMwLTAuNCwwLjItMC43LDAuNi0wLjdjMC40LDAsMC42LDAuMywwLjYsMC43djIuNwoJCQkJQzE0MSwzMS4xLDE0MC44LDMxLjQsMTQwLjUsMzEuNHogTTE0MC41LDI2Yy0wLjQsMC0wLjYtMC4zLTAuNi0wLjd2LTIuN2MwLTAuNCwwLjItMC43LDAuNi0wLjdjMC40LDAsMC42LDAuMywwLjYsMC43djIuNwoJCQkJQzE0MSwyNS43LDE0MC44LDI2LDE0MC41LDI2eiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTQwLjUsMTkuM2MtMC40LDAtMC42LTAuMy0wLjYtMC43di0xLjhjMC0wLjQsMC4yLTAuNywwLjYtMC43YzAuNCwwLDAuNiwwLjMsMC42LDAuN3YxLjgKCQkJCUMxNDEsMTksMTQwLjgsMTkuMywxNDAuNSwxOS4zeiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE3Ni44LDUzLjhjMCwwLjQtMC4zLDAuNS0wLjcsMC41aC0xLjhjLTAuNCwwLTAuNy0wLjItMC43LTAuNWMwLTAuNCwwLjMtMC42LDAuNy0wLjZoMS44CgkJCQlDMTc2LjUsNTMuMiwxNzYuOCw1My40LDE3Ni44LDUzLjh6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNzIuMyw1My44YzAsMC40LTAuMywwLjUtMC43LDAuNWgtMi43Yy0wLjQsMC0wLjctMC4yLTAuNy0wLjVjMC0wLjQsMC4zLTAuNiwwLjctMC42aDIuNwoJCQkJQzE3Miw1My4yLDE3Mi4zLDUzLjQsMTcyLjMsNTMuOHogTTE2Ni45LDUzLjhjMCwwLjQtMC4zLDAuNS0wLjcsMC41aC0yLjdjLTAuNCwwLTAuNy0wLjItMC43LTAuNWMwLTAuNCwwLjMtMC42LDAuNy0wLjZoMi43CgkJCQlDMTY2LjYsNTMuMiwxNjYuOSw1My40LDE2Ni45LDUzLjh6IE0xNjEuNiw1My44YzAsMC40LTAuMywwLjUtMC43LDAuNWgtMi43Yy0wLjQsMC0wLjctMC4yLTAuNy0wLjVjMC0wLjQsMC4zLTAuNiwwLjctMC42aDIuNwoJCQkJQzE2MS4yLDUzLjIsMTYxLjYsNTMuNCwxNjEuNiw1My44eiBNMTU2LjIsNTMuOGMwLDAuNC0wLjMsMC41LTAuNywwLjVoLTIuN2MtMC40LDAtMC43LTAuMi0wLjctMC41YzAtMC40LDAuMy0wLjYsMC43LTAuNmgyLjcKCQkJCUMxNTUuOSw1My4yLDE1Ni4yLDUzLjQsMTU2LjIsNTMuOHogTTE1MC44LDUzLjhjMCwwLjQtMC4zLDAuNS0wLjcsMC41aC0yLjdjLTAuNCwwLTAuNy0wLjItMC43LTAuNWMwLTAuNCwwLjMtMC42LDAuNy0wLjZoMi43CgkJCQlDMTUwLjUsNTMuMiwxNTAuOCw1My40LDE1MC44LDUzLjh6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNDQsNTMuOGMwLDAuNC0wLjMsMC41LTAuNywwLjVoLTEuOGMtMC40LDAtMC43LTAuMi0wLjctMC41YzAtMC40LDAuMy0wLjYsMC43LTAuNmgxLjgKCQkJCUMxNDMuNyw1My4yLDE0NCw1My40LDE0NCw1My44eiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE0MC4xLDUzLjljMC4zLDAuMywwLjIsMC42LTAuMSwwLjlsLTEuOSwxLjljLTAuMywwLjMtMC42LDAuNC0wLjksMC4xYy0wLjMtMC4zLTAuMi0wLjYsMC4xLTAuOWwxLjktMS45CgkJCQlDMTM5LjUsNTMuNywxMzkuOSw1My43LDE0MC4xLDUzLjl6IE0xMzYuMyw1Ny43YzAuMywwLjMsMC4yLDAuNi0wLjEsMC45bC0xLjksMS45Yy0wLjMsMC4zLTAuNiwwLjQtMC45LDAuMQoJCQkJYy0wLjMtMC4zLTAuMi0wLjYsMC4xLTAuOWwxLjktMS45QzEzNS43LDU3LjUsMTM2LjEsNTcuNSwxMzYuMyw1Ny43eiBNMTMyLjUsNjEuNWMwLjMsMC4zLDAuMiwwLjYtMC4xLDAuOWwtMS45LDEuOQoJCQkJYy0wLjMsMC4zLTAuNiwwLjMtMC45LDAuMWMtMC4zLTAuMy0wLjItMC42LDAuMS0wLjlsMS45LTEuOUMxMzEuOSw2MS40LDEzMi4zLDYxLjMsMTMyLjUsNjEuNXoiLz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyNy44LDY2LjNjMC4zLDAuMywwLjIsMC42LTAuMSwwLjlsLTEuMywxLjNjLTAuMywwLjMtMC42LDAuMy0wLjksMC4xYy0wLjMtMC4zLTAuMi0wLjYsMC4xLTAuOWwxLjMtMS4zCgkJCQlDMTI3LjIsNjYuMSwxMjcuNSw2NiwxMjcuOCw2Ni4zeiIvPgoJCTwvZz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTYzLjQsMzEuOWgtMzcuN2MtMC41LDAtMC45LTAuMi0xLTAuNmMtMC4yLTAuNC0wLjEtMC45LDAuMi0xLjJsMTQuNC0xNC40YzAuMi0wLjIsMC41LTAuMywwLjgtMC4zaDM3LjcKCQkJYzAuNSwwLDAuOSwwLjMsMSwwLjdjMC4yLDAuNCwwLjEsMC45LTAuMiwxLjJsLTE0LjQsMTQuM0MxNjQsMzEuOCwxNjMuNywzMS45LDE2My40LDMxLjl6IE0xMjguNCwyOS43SDE2M2wxMi4xLTEyLjFoLTM0LjUKCQkJTDEyOC40LDI5Ljd6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE2NC43LDY4LjdjMCwwLjYtMC41LDEuMS0xLjEsMS4xaC0zNy45Yy0wLjYsMC0xLjEtMC41LTEuMS0xLjFWMzAuOGMwLTAuNiwwLjUtMS4xLDEuMS0xLjFoMzcuOQoJCQljMC42LDAsMS4xLDAuNSwxLjEsMS4xVjY4Ljd6IE0xMjYuNyw2Ny42aDM1LjdWMzEuOWgtMzUuN1Y2Ny42eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNjMuNCw2OS44aC0zNy43Yy0wLjYsMC0xLjItMC42LTEuMi0xLjJWMzAuOWMwLTAuMywwLjItMC42LDAuNC0wLjhsMTQuNC0xNC40YzAuMi0wLjIsMC41LTAuNCwwLjgtMC40CgkJCWgzNy43YzAuNiwwLDEuMiwwLjYsMS4yLDEuMnYzNy43YzAsMC4zLTAuMiwwLjYtMC40LDAuOGwtMTQuNCwxNC40QzE2NCw2OS43LDE2My43LDY5LjgsMTYzLjQsNjkuOHogTTEyNi43LDY3LjZIMTYzbDEzLjgtMTMuOAoJCQlWMTcuNmgtMzYuMmwtMTMuOCwxMy44VjY3LjZ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE0Ni41LDUwLjZjLTAuMi0wLjUsMC0xLjksMC4yLTMuMWwxLjQtNy4zYzAuNC0yLjQsMS4yLTMuNiwyLTQuM2MwLjctMC42LDEuNS0xLDIuNy0xCgkJCWMxLjksMCwyLjksMS4yLDIuOSwyLjdjMCwxLjQtMC44LDIuNC0xLjgsMi45bDAsMC4xYzAuOSwwLjMsMS43LDEuMywxLjcsMi43YzAsMi4zLTEuOSwzLjgtMy45LDMuOGMtMSwwLTEuOC0wLjMtMi4zLTAuOWgwCgkJCWwtMC4yLDEuMmMtMC4yLDEtMC40LDIuMS0wLjMsMy4ySDE0Ni41eiBNMTUxLjUsNDAuMWMwLjEsMCwwLjIsMCwwLjMsMGMwLjktMC4yLDEuNi0wLjksMS42LTIuMWMwLTAuNy0wLjQtMS4yLTEtMS4yCgkJCWMtMC44LDAtMS41LDAuOC0xLjksMi44bC0wLjksNC45YzAuMywwLjUsMC45LDAuOSwxLjYsMC45YzEuMSwwLDEuOS0wLjksMS45LTIuMWMwLTAuOS0wLjYtMS41LTEuNS0xLjdjLTAuMSwwLTAuMiwwLTAuNCwwCgkJCUwxNTEuNSw0MC4xeiIvPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNC42LDI3NC44Yy0wLjQsMC0wLjYtMC4zLTAuNi0wLjd2LTEuOGMwLTAuNCwwLjItMC43LDAuNi0wLjdjMC40LDAsMC42LDAuMywwLjYsMC43djEuOAoJCQkJQzI1LjEsMjc0LjUsMjUsMjc0LjgsMjQuNiwyNzQuOHoiLz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI0LjYsMjcwLjNjLTAuNCwwLTAuNi0wLjMtMC42LTAuN1YyNjdjMC0wLjQsMC4yLTAuNywwLjYtMC43YzAuNCwwLDAuNiwwLjMsMC42LDAuN3YyLjcKCQkJCUMyNS4xLDI3MCwyNSwyNzAuMywyNC42LDI3MC4zeiBNMjQuNiwyNjVjLTAuNCwwLTAuNi0wLjMtMC42LTAuN3YtMi43YzAtMC40LDAuMi0wLjcsMC42LTAuN2MwLjQsMCwwLjYsMC4zLDAuNiwwLjd2Mi43CgkJCQlDMjUuMSwyNjQuNywyNSwyNjUsMjQuNiwyNjV6IE0yNC42LDI1OS42Yy0wLjQsMC0wLjYtMC4zLTAuNi0wLjd2LTIuN2MwLTAuNCwwLjItMC43LDAuNi0wLjdjMC40LDAsMC42LDAuMywwLjYsMC43djIuNwoJCQkJQzI1LjEsMjU5LjMsMjUsMjU5LjYsMjQuNiwyNTkuNnogTTI0LjYsMjU0LjJjLTAuNCwwLTAuNi0wLjMtMC42LTAuN3YtMi43YzAtMC40LDAuMi0wLjcsMC42LTAuN2MwLjQsMCwwLjYsMC4zLDAuNiwwLjd2Mi43CgkJCQlDMjUuMSwyNTMuOSwyNSwyNTQuMiwyNC42LDI1NC4yeiBNMjQuNiwyNDguOGMtMC40LDAtMC42LTAuMy0wLjYtMC43di0yLjdjMC0wLjQsMC4yLTAuNywwLjYtMC43YzAuNCwwLDAuNiwwLjMsMC42LDAuN3YyLjcKCQkJCUMyNS4xLDI0OC41LDI1LDI0OC44LDI0LjYsMjQ4Ljh6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNC42LDI0Mi4xYy0wLjQsMC0wLjYtMC4zLTAuNi0wLjd2LTEuOGMwLTAuNCwwLjItMC43LDAuNi0wLjdjMC40LDAsMC42LDAuMywwLjYsMC43djEuOAoJCQkJQzI1LjEsMjQxLjgsMjUsMjQyLjEsMjQuNiwyNDIuMXoiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02MC45LDI3Ni42YzAsMC40LTAuMywwLjUtMC43LDAuNWgtMS44Yy0wLjQsMC0wLjctMC4yLTAuNy0wLjVjMC0wLjQsMC4zLTAuNiwwLjctMC42aDEuOAoJCQkJQzYwLjYsMjc2LDYwLjksMjc2LjIsNjAuOSwyNzYuNnoiLz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTU2LjQsMjc2LjZjMCwwLjQtMC4zLDAuNS0wLjcsMC41aC0yLjdjLTAuNCwwLTAuNy0wLjItMC43LTAuNWMwLTAuNCwwLjMtMC42LDAuNy0wLjZoMi43CgkJCQlDNTYuMSwyNzYsNTYuNCwyNzYuMiw1Ni40LDI3Ni42eiBNNTEsMjc2LjZjMCwwLjQtMC4zLDAuNS0wLjcsMC41aC0yLjdjLTAuNCwwLTAuNy0wLjItMC43LTAuNWMwLTAuNCwwLjMtMC42LDAuNy0wLjZoMi43CgkJCQlDNTAuNywyNzYsNTEsMjc2LjIsNTEsMjc2LjZ6IE00NS43LDI3Ni42YzAsMC40LTAuMywwLjUtMC43LDAuNWgtMi43Yy0wLjQsMC0wLjctMC4yLTAuNy0wLjVjMC0wLjQsMC4zLTAuNiwwLjctMC42SDQ1CgkJCQlDNDUuNCwyNzYsNDUuNywyNzYuMiw0NS43LDI3Ni42eiBNNDAuMywyNzYuNmMwLDAuNC0wLjMsMC41LTAuNywwLjVoLTIuN2MtMC40LDAtMC43LTAuMi0wLjctMC41YzAtMC40LDAuMy0wLjYsMC43LTAuNmgyLjcKCQkJCUM0MCwyNzYsNDAuMywyNzYuMiw0MC4zLDI3Ni42eiBNMzQuOSwyNzYuNmMwLDAuNC0wLjMsMC41LTAuNywwLjVoLTIuN2MtMC40LDAtMC43LTAuMi0wLjctMC41YzAtMC40LDAuMy0wLjYsMC43LTAuNmgyLjcKCQkJCUMzNC42LDI3NiwzNC45LDI3Ni4yLDM0LjksMjc2LjZ6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yOC4yLDI3Ni42YzAsMC40LTAuMywwLjUtMC43LDAuNWgtMS44Yy0wLjQsMC0wLjctMC4yLTAuNy0wLjVjMC0wLjQsMC4zLTAuNiwwLjctMC42aDEuOAoJCQkJQzI3LjksMjc2LDI4LjIsMjc2LjIsMjguMiwyNzYuNnoiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNC4zLDI3Ni43YzAuMywwLjMsMC4yLDAuNi0wLjEsMC45bC0xLjksMS45Yy0wLjMsMC4zLTAuNiwwLjQtMC45LDAuMWMtMC4zLTAuMy0wLjItMC42LDAuMS0wLjlsMS45LTEuOQoJCQkJQzIzLjYsMjc2LjYsMjQsMjc2LjUsMjQuMywyNzYuN3ogTTIwLjQsMjgwLjVjMC4zLDAuMywwLjIsMC42LTAuMSwwLjlsLTEuOSwxLjljLTAuMywwLjMtMC42LDAuNC0wLjksMC4xCgkJCQljLTAuMy0wLjMtMC4yLTAuNiwwLjEtMC45bDEuOS0xLjlDMTkuOCwyODAuNCwyMC4yLDI4MC4zLDIwLjQsMjgwLjV6IE0xNi42LDI4NC4zYzAuMywwLjMsMC4yLDAuNi0wLjEsMC45bC0xLjksMS45CgkJCQljLTAuMywwLjMtMC42LDAuMy0wLjksMC4xYy0wLjMtMC4zLTAuMi0wLjYsMC4xLTAuOWwxLjktMS45QzE2LDI4NC4yLDE2LjQsMjg0LjEsMTYuNiwyODQuM3oiLz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTExLjksMjg5LjFjMC4zLDAuMywwLjIsMC42LTAuMSwwLjlsLTEuMywxLjNjLTAuMywwLjMtMC42LDAuMy0wLjksMC4xYy0wLjMtMC4zLTAuMi0wLjYsMC4xLTAuOWwxLjMtMS4zCgkJCQlDMTEuMywyODguOSwxMS42LDI4OC44LDExLjksMjg5LjF6Ii8+CgkJPC9nPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00Ny41LDI1NC43SDkuOGMtMC41LDAtMC45LTAuMi0xLTAuNmMtMC4yLTAuNC0wLjEtMC45LDAuMi0xLjJsMTQuNC0xNC40YzAuMi0wLjIsMC41LTAuMywwLjgtMC4zaDM3LjcKCQkJYzAuNSwwLDAuOSwwLjMsMSwwLjdjMC4yLDAuNCwwLjEsMC45LTAuMiwxLjJsLTE0LjQsMTQuM0M0OC4xLDI1NC42LDQ3LjgsMjU0LjcsNDcuNSwyNTQuN3ogTTEyLjYsMjUyLjVoMzQuNWwxMi4xLTEyLjFIMjQuNwoJCQlMMTIuNiwyNTIuNXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDguOCwyOTEuNWMwLDAuNi0wLjUsMS4xLTEuMSwxLjFIOS44Yy0wLjYsMC0xLjEtMC41LTEuMS0xLjF2LTM3LjljMC0wLjYsMC41LTEuMSwxLjEtMS4xaDM3LjkKCQkJYzAuNiwwLDEuMSwwLjUsMS4xLDEuMVYyOTEuNXogTTEwLjgsMjkwLjRoMzUuN3YtMzUuOEgxMC44VjI5MC40eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00Ny41LDI5Mi42SDkuOGMtMC42LDAtMS4yLTAuNi0xLjItMS4ydi0zNy43YzAtMC4zLDAuMi0wLjYsMC40LTAuOGwxNC40LTE0LjRjMC4yLTAuMiwwLjUtMC40LDAuOC0wLjRoMzcuNwoJCQljMC42LDAsMS4yLDAuNiwxLjIsMS4ydjM3LjdjMCwwLjMtMC4yLDAuNi0wLjQsMC44bC0xNC40LDE0LjRDNDguMSwyOTIuNSw0Ny44LDI5Mi42LDQ3LjUsMjkyLjZ6IE0xMC44LDI5MC40aDM2LjJsMTMuOC0xMy44CgkJCXYtMzYuMkgyNC43bC0xMy44LDEzLjhWMjkwLjR6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTMwLjcsMjczLjRjLTAuMi0wLjUsMC0xLjksMC4yLTMuMWwxLjQtNy4zYzAuNC0yLjQsMS4yLTMuNiwyLTQuM2MwLjctMC42LDEuNS0xLDIuNy0xCgkJCWMxLjksMCwyLjksMS4yLDIuOSwyLjdjMCwxLjQtMC44LDIuNC0xLjgsMi45bDAsMC4xYzAuOSwwLjMsMS43LDEuMywxLjcsMi43YzAsMi4zLTEuOSwzLjgtMy45LDMuOGMtMSwwLTEuOC0wLjMtMi4zLTAuOWgwCgkJCWwtMC4yLDEuMmMtMC4yLDEtMC40LDIuMS0wLjMsMy4ySDMwLjd6IE0zNS42LDI2Mi45YzAuMSwwLDAuMiwwLDAuMywwYzAuOS0wLjIsMS42LTAuOSwxLjYtMi4xYzAtMC43LTAuNC0xLjItMS0xLjIKCQkJYy0wLjgsMC0xLjUsMC44LTEuOSwyLjhsLTAuOSw0LjljMC4zLDAuNSwwLjksMC45LDEuNiwwLjljMS4xLDAsMS45LTAuOSwxLjktMi4xYzAtMC45LTAuNi0xLjUtMS41LTEuN2MtMC4xLDAtMC4yLDAtMC40LDAKCQkJTDM1LjYsMjYyLjl6Ii8+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTMxNi41LDE2OS45Yy0wLjQsMC0wLjYtMC4zLTAuNi0wLjd2LTEuOGMwLTAuNCwwLjItMC43LDAuNi0wLjdjMC40LDAsMC42LDAuMywwLjYsMC43djEuOAoJCQkJQzMxNy4xLDE2OS42LDMxNi45LDE2OS45LDMxNi41LDE2OS45eiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzE2LjUsMTY1LjRjLTAuNCwwLTAuNi0wLjMtMC42LTAuN3YtMi43YzAtMC40LDAuMi0wLjcsMC42LTAuN2MwLjQsMCwwLjYsMC4zLDAuNiwwLjd2Mi43CgkJCQlDMzE3LjEsMTY1LjEsMzE2LjksMTY1LjQsMzE2LjUsMTY1LjR6IE0zMTYuNSwxNjBjLTAuNCwwLTAuNi0wLjMtMC42LTAuN3YtMi43YzAtMC40LDAuMi0wLjcsMC42LTAuN2MwLjQsMCwwLjYsMC4zLDAuNiwwLjd2Mi43CgkJCQlDMzE3LjEsMTU5LjcsMzE2LjksMTYwLDMxNi41LDE2MHogTTMxNi41LDE1NC43Yy0wLjQsMC0wLjYtMC4zLTAuNi0wLjd2LTIuN2MwLTAuNCwwLjItMC43LDAuNi0wLjdjMC40LDAsMC42LDAuMywwLjYsMC43djIuNwoJCQkJQzMxNy4xLDE1NC40LDMxNi45LDE1NC43LDMxNi41LDE1NC43eiBNMzE2LjUsMTQ5LjNjLTAuNCwwLTAuNi0wLjMtMC42LTAuN3YtMi43YzAtMC40LDAuMi0wLjcsMC42LTAuN2MwLjQsMCwwLjYsMC4zLDAuNiwwLjcKCQkJCXYyLjdDMzE3LjEsMTQ5LDMxNi45LDE0OS4zLDMxNi41LDE0OS4zeiBNMzE2LjUsMTQzLjljLTAuNCwwLTAuNi0wLjMtMC42LTAuN3YtMi43YzAtMC40LDAuMi0wLjcsMC42LTAuN2MwLjQsMCwwLjYsMC4zLDAuNiwwLjcKCQkJCXYyLjdDMzE3LjEsMTQzLjYsMzE2LjksMTQzLjksMzE2LjUsMTQzLjl6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMTYuNSwxMzcuMmMtMC40LDAtMC42LTAuMy0wLjYtMC43di0xLjhjMC0wLjQsMC4yLTAuNywwLjYtMC43YzAuNCwwLDAuNiwwLjMsMC42LDAuN3YxLjgKCQkJCUMzMTcuMSwxMzYuOSwzMTYuOSwxMzcuMiwzMTYuNSwxMzcuMnoiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNTIuOCwxNzEuN2MwLDAuNC0wLjMsMC41LTAuNywwLjVoLTEuOGMtMC40LDAtMC43LTAuMi0wLjctMC41YzAtMC40LDAuMy0wLjYsMC43LTAuNmgxLjgKCQkJCUMzNTIuNSwxNzEuMSwzNTIuOCwxNzEuMywzNTIuOCwxNzEuN3oiLz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM0OC40LDE3MS43YzAsMC40LTAuMywwLjUtMC43LDAuNUgzNDVjLTAuNCwwLTAuNy0wLjItMC43LTAuNWMwLTAuNCwwLjMtMC42LDAuNy0wLjZoMi43CgkJCQlDMzQ4LDE3MS4xLDM0OC40LDE3MS4zLDM0OC40LDE3MS43eiBNMzQzLDE3MS43YzAsMC40LTAuMywwLjUtMC43LDAuNWgtMi43Yy0wLjQsMC0wLjctMC4yLTAuNy0wLjVjMC0wLjQsMC4zLTAuNiwwLjctMC42aDIuNwoJCQkJQzM0Mi43LDE3MS4xLDM0MywxNzEuMywzNDMsMTcxLjd6IE0zMzcuNiwxNzEuN2MwLDAuNC0wLjMsMC41LTAuNywwLjVoLTIuN2MtMC40LDAtMC43LTAuMi0wLjctMC41YzAtMC40LDAuMy0wLjYsMC43LTAuNmgyLjcKCQkJCUMzMzcuMywxNzEuMSwzMzcuNiwxNzEuMywzMzcuNiwxNzEuN3ogTTMzMi4yLDE3MS43YzAsMC40LTAuMywwLjUtMC43LDAuNWgtMi43Yy0wLjQsMC0wLjctMC4yLTAuNy0wLjVjMC0wLjQsMC4zLTAuNiwwLjctMC42CgkJCQloMi43QzMzMS45LDE3MS4xLDMzMi4yLDE3MS4zLDMzMi4yLDE3MS43eiBNMzI2LjgsMTcxLjdjMCwwLjQtMC4zLDAuNS0wLjcsMC41aC0yLjdjLTAuNCwwLTAuNy0wLjItMC43LTAuNQoJCQkJYzAtMC40LDAuMy0wLjYsMC43LTAuNmgyLjdDMzI2LjUsMTcxLjEsMzI2LjgsMTcxLjMsMzI2LjgsMTcxLjd6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMjAuMSwxNzEuN2MwLDAuNC0wLjMsMC41LTAuNywwLjVoLTEuOGMtMC40LDAtMC43LTAuMi0wLjctMC41YzAtMC40LDAuMy0wLjYsMC43LTAuNmgxLjgKCQkJCUMzMTkuOCwxNzEuMSwzMjAuMSwxNzEuMywzMjAuMSwxNzEuN3oiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMTYuMiwxNzEuOGMwLjMsMC4zLDAuMiwwLjYtMC4xLDAuOWwtMS45LDEuOWMtMC4zLDAuMy0wLjYsMC40LTAuOSwwLjFjLTAuMy0wLjMtMC4yLTAuNiwwLjEtMC45bDEuOS0xLjkKCQkJCUMzMTUuNiwxNzEuNiwzMTUuOSwxNzEuNSwzMTYuMiwxNzEuOHogTTMxMi40LDE3NS42YzAuMywwLjMsMC4yLDAuNi0wLjEsMC45bC0xLjksMS45Yy0wLjMsMC4zLTAuNiwwLjQtMC45LDAuMQoJCQkJYy0wLjMtMC4zLTAuMi0wLjYsMC4xLTAuOWwxLjktMS45QzMxMS44LDE3NS40LDMxMi4xLDE3NS40LDMxMi40LDE3NS42eiBNMzA4LjYsMTc5LjRjMC4zLDAuMywwLjIsMC42LTAuMSwwLjlsLTEuOSwxLjkKCQkJCWMtMC4zLDAuMy0wLjYsMC4zLTAuOSwwLjFjLTAuMy0wLjMtMC4yLTAuNiwwLjEtMC45bDEuOS0xLjlDMzA4LDE3OS4yLDMwOC4zLDE3OS4yLDMwOC42LDE3OS40eiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzAzLjgsMTg0LjJjMC4zLDAuMywwLjIsMC42LTAuMSwwLjlsLTEuMywxLjNjLTAuMywwLjMtMC42LDAuMy0wLjksMC4xYy0wLjMtMC4zLTAuMi0wLjYsMC4xLTAuOWwxLjMtMS4zCgkJCQlDMzAzLjIsMTg0LDMwMy41LDE4My45LDMwMy44LDE4NC4yeiIvPgoJCTwvZz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzM5LjUsMTQ5LjhoLTM3LjdjLTAuNSwwLTAuOS0wLjItMS0wLjZjLTAuMi0wLjQtMC4xLTAuOSwwLjItMS4ybDE0LjQtMTQuNGMwLjItMC4yLDAuNS0wLjMsMC44LTAuM2gzNy43CgkJCWMwLjUsMCwwLjksMC4zLDEsMC43YzAuMiwwLjQsMC4xLDAuOS0wLjIsMS4ybC0xNC40LDE0LjNDMzQwLDE0OS43LDMzOS44LDE0OS44LDMzOS41LDE0OS44eiBNMzA0LjUsMTQ3LjZIMzM5bDEyLjEtMTIuMWgtMzQuNQoJCQlMMzA0LjUsMTQ3LjZ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM0MC43LDE4Ni42YzAsMC42LTAuNSwxLjEtMS4xLDEuMWgtMzcuOWMtMC42LDAtMS4xLTAuNS0xLjEtMS4xdi0zNy45YzAtMC42LDAuNS0xLjEsMS4xLTEuMWgzNy45CgkJCWMwLjYsMCwxLjEsMC41LDEuMSwxLjFWMTg2LjZ6IE0zMDIuOCwxODUuNWgzNS43di0zNS44aC0zNS43VjE4NS41eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMzkuNSwxODcuN2gtMzcuN2MtMC42LDAtMS4yLTAuNi0xLjItMS4ydi0zNy43YzAtMC4zLDAuMi0wLjYsMC40LTAuOGwxNC40LTE0LjRjMC4yLTAuMiwwLjUtMC40LDAuOC0wLjQKCQkJaDM3LjdjMC42LDAsMS4yLDAuNiwxLjIsMS4ydjM3LjdjMCwwLjMtMC4yLDAuNi0wLjQsMC44bC0xNC40LDE0LjRDMzQwLjEsMTg3LjYsMzM5LjgsMTg3LjcsMzM5LjUsMTg3Ljd6IE0zMDIuOCwxODUuNUgzMzkKCQkJbDEzLjgtMTMuOHYtMzYuMmgtMzYuMmwtMTMuOCwxMy44VjE4NS41eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMjIuNiwxNjguNWMtMC4yLTAuNSwwLTEuOSwwLjItMy4xbDEuNC03LjNjMC40LTIuNCwxLjItMy42LDItNC4zYzAuNy0wLjYsMS41LTEsMi43LTEKCQkJYzEuOSwwLDIuOSwxLjIsMi45LDIuN2MwLDEuNC0wLjgsMi40LTEuOCwyLjlsMCwwLjFjMC45LDAuMywxLjcsMS4zLDEuNywyLjdjMCwyLjMtMS45LDMuOC0zLjksMy44Yy0xLDAtMS44LTAuMy0yLjMtMC45aDAKCQkJbC0wLjIsMS4yYy0wLjIsMS0wLjQsMi4xLTAuMywzLjJIMzIyLjZ6IE0zMjcuNiwxNThjMC4xLDAsMC4yLDAsMC4zLDBjMC45LTAuMiwxLjYtMC45LDEuNi0yLjFjMC0wLjctMC40LTEuMi0xLTEuMgoJCQljLTAuOCwwLTEuNSwwLjgtMS45LDIuOGwtMC45LDQuOWMwLjMsMC41LDAuOSwwLjksMS42LDAuOWMxLjEsMCwxLjktMC45LDEuOS0yLjFjMC0wLjktMC42LTEuNS0xLjUtMS43Yy0wLjEsMC0wLjIsMC0wLjQsMAoJCQlMMzI3LjYsMTU4eiIvPgoJPC9nPgoJPGc+CgkJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI1OS43LDk3LjEgNC41LDk3LjEgMC4yLDEwMS42IDY0LjYsMTAxLjUgCQkiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjQuOCwxMDIuMmMwLDAuNi0wLjQsMS0wLjksMUgwLjljLTAuNSwwLTAuOS0wLjUtMC45LTFsMCwwYzAtMC42LDAuNC0xLDAuOS0xaDYzLjEKCQkJQzY0LjQsMTAxLjIsNjQuOCwxMDEuNiw2NC44LDEwMi4yTDY0LjgsMTAyLjJ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTU4LjUsNTguOGMwLDAuNC0wLjMsMC42LTAuNywwLjZINy40Yy0wLjQsMC0wLjctMC4zLTAuNy0wLjZsMCwwYzAtMC40LDAuMy0wLjYsMC43LTAuNmg1MC40CgkJCUM1OC4yLDU4LjEsNTguNSw1OC40LDU4LjUsNTguOEw1OC41LDU4Ljh6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTU4LjUsNjUuOGMwLDAuMy0wLjMsMC42LTAuNywwLjZINy40Yy0wLjQsMC0wLjctMC4zLTAuNy0wLjZsMCwwYzAtMC40LDAuMy0wLjYsMC43LTAuNmg1MC40CgkJCUM1OC4yLDY1LjIsNTguNSw2NS41LDU4LjUsNjUuOEw1OC41LDY1Ljh6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTU4LjUsNzIuOWMwLDAuNC0wLjMsMC42LTAuNywwLjZINy40Yy0wLjQsMC0wLjctMC4zLTAuNy0wLjZsMCwwYzAtMC40LDAuMy0wLjYsMC43LTAuNmg1MC40CgkJCUM1OC4yLDcyLjIsNTguNSw3Mi41LDU4LjUsNzIuOUw1OC41LDcyLjl6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTU4LjUsNzkuOWMwLDAuNC0wLjMsMC42LTAuNywwLjZINy40Yy0wLjQsMC0wLjctMC4zLTAuNy0wLjZsMCwwYzAtMC40LDAuMy0wLjYsMC43LTAuNmg1MC40CgkJCUM1OC4yLDc5LjIsNTguNSw3OS41LDU4LjUsNzkuOUw1OC41LDc5Ljl6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTU4LjUsODYuOWMwLDAuMy0wLjMsMC42LTAuNywwLjZINy40Yy0wLjQsMC0wLjctMC4zLTAuNy0wLjZsMCwwYzAtMC40LDAuMy0wLjYsMC43LTAuNmg1MC40CgkJCUM1OC4yLDg2LjMsNTguNSw4Ni42LDU4LjUsODYuOUw1OC41LDg2Ljl6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTksNTEuNmMwLTAuNi0wLjUtMS4yLTEuMi0xLjJINS43Yy0wLjYsMC0xLjIsMC41LTEuMiwxLjJ2NDYuOGMwLDAuNiwwLjUsMS4yLDEuMiwxLjJoMi4xCgkJCWMwLjYsMCwxLjItMC41LDEuMi0xLjJWNTEuNnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjAuMyw1MS42YzAtMC42LTAuNS0xLjItMS4yLTEuMkg1N2MtMC42LDAtMS4xLDAuNS0xLjEsMS4ydjQ2LjhjMCwwLjYsMC41LDEuMiwxLjEsMS4yaDIuMQoJCQljMC42LDAsMS4yLTAuNSwxLjItMS4yVjUxLjZ6Ii8+CgkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMTQuNSIgY3k9IjU4LjgiIHI9IjMuMiIvPgoJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjIyLjEiIGN5PSI1OC44IiByPSIzLjIiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIzMCIgY3k9IjU4LjgiIHI9IjMuMiIvPgoJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjM3LjEiIGN5PSI1OC44IiByPSIzLjIiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTMuOCw2NS44YzAsMS44LTEuNSwzLjItMy4yLDMuMmMtMS44LDAtMy4yLTEuNC0zLjItMy4yYzAtMS44LDEuNS0zLjIsMy4yLTMuMkM1Mi40LDYyLjYsNTMuOCw2NCw1My44LDY1LjgKCQkJeiIvPgoJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjQyLjkiIGN5PSI2NS44IiByPSIzLjIiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIzMi42IiBjeT0iODYuOSIgcj0iMy4yIi8+CgkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iNDMuNSIgY3k9Ijg2LjkiIHI9IjMuMiIvPgoJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjM0LjUiIGN5PSI2NS44IiByPSIzLjIiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjUuNiw3Mi45YzAsMS44LTEuNCwzLjItMy4yLDMuMmMtMS44LDAtMy4yLTEuNC0zLjItMy4yYzAtMS44LDEuNS0zLjIsMy4yLTMuMgoJCQlDMjQuMSw2OS42LDI1LjYsNzEuMSwyNS42LDcyLjl6Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjEzLjgiIGN5PSI3OS45IiByeD0iMy4yIiByeT0iMy4yIi8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjI0LjgiIGN5PSI3OS45IiByeD0iMy4yIiByeT0iMy4yIi8+CgkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzUuOCIgY3k9Ijc5LjkiIHI9IjMuMiIvPgoJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjMwLjEiIGN5PSI3Mi45IiByPSIzLjIiLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iNDQuNCIgY3k9IjcyLjkiIHJ4PSIzLjIiIHJ5PSIzLjIiLz4KCTwvZz4KCTxnPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMzYwLjcsMjk2LjkgMzA1LjUsMjk2LjkgMzAxLjIsMzAxLjMgMzY1LjYsMzAxLjMgCQkiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzY1LjgsMzAxLjljMCwwLjYtMC40LDEtMC45LDFoLTYzLjFjLTAuNSwwLTAuOS0wLjUtMC45LTFsMCwwYzAtMC42LDAuNC0xLDAuOS0xaDYzLjEKCQkJQzM2NS40LDMwMC45LDM2NS44LDMwMS40LDM2NS44LDMwMS45TDM2NS44LDMwMS45eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNTkuNSwyNTguNWMwLDAuNC0wLjMsMC42LTAuNywwLjZoLTUwLjRjLTAuNCwwLTAuNy0wLjMtMC43LTAuNmwwLDBjMC0wLjQsMC4zLTAuNiwwLjctMC42aDUwLjQKCQkJQzM1OS4yLDI1Ny45LDM1OS41LDI1OC4yLDM1OS41LDI1OC41TDM1OS41LDI1OC41eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNTkuNSwyNjUuNmMwLDAuMy0wLjMsMC42LTAuNywwLjZoLTUwLjRjLTAuNCwwLTAuNy0wLjMtMC43LTAuNmwwLDBjMC0wLjQsMC4zLTAuNiwwLjctMC42aDUwLjQKCQkJQzM1OS4yLDI2NC45LDM1OS41LDI2NS4yLDM1OS41LDI2NS42TDM1OS41LDI2NS42eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNTkuNSwyNzIuNmMwLDAuNC0wLjMsMC42LTAuNywwLjZoLTUwLjRjLTAuNCwwLTAuNy0wLjMtMC43LTAuNmwwLDBjMC0wLjQsMC4zLTAuNiwwLjctMC42aDUwLjQKCQkJQzM1OS4yLDI3MiwzNTkuNSwyNzIuMiwzNTkuNSwyNzIuNkwzNTkuNSwyNzIuNnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzU5LjUsMjc5LjZjMCwwLjQtMC4zLDAuNi0wLjcsMC42aC01MC40Yy0wLjQsMC0wLjctMC4zLTAuNy0wLjZsMCwwYzAtMC40LDAuMy0wLjYsMC43LTAuNmg1MC40CgkJCUMzNTkuMiwyNzksMzU5LjUsMjc5LjMsMzU5LjUsMjc5LjZMMzU5LjUsMjc5LjZ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM1OS41LDI4Ni43YzAsMC4zLTAuMywwLjYtMC43LDAuNmgtNTAuNGMtMC40LDAtMC43LTAuMy0wLjctMC42bDAsMGMwLTAuNCwwLjMtMC42LDAuNy0wLjZoNTAuNAoJCQlDMzU5LjIsMjg2LDM1OS41LDI4Ni4zLDM1OS41LDI4Ni43TDM1OS41LDI4Ni43eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMTAsMjUxLjRjMC0wLjYtMC41LTEuMi0xLjItMS4yaC0yLjFjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMnY0Ni44YzAsMC42LDAuNSwxLjIsMS4yLDEuMmgyLjEKCQkJYzAuNiwwLDEuMi0wLjUsMS4yLTEuMlYyNTEuNHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzYxLjMsMjUxLjRjMC0wLjYtMC41LTEuMi0xLjItMS4ySDM1OGMtMC42LDAtMS4xLDAuNS0xLjEsMS4ydjQ2LjhjMCwwLjYsMC41LDEuMiwxLjEsMS4yaDIuMQoJCQljMC42LDAsMS4yLTAuNSwxLjItMS4yVjI1MS40eiIvPgoJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjMxNS41IiBjeT0iMjU4LjUiIHI9IjMuMiIvPgoJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjMyMy4xIiBjeT0iMjU4LjUiIHI9IjMuMiIvPgoJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjMzMSIgY3k9IjI1OC41IiByPSIzLjIiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIzMzguMSIgY3k9IjI1OC41IiByPSIzLjIiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzU0LjgsMjY1LjZjMCwxLjgtMS41LDMuMi0zLjIsMy4yYy0xLjgsMC0zLjItMS40LTMuMi0zLjJjMC0xLjgsMS41LTMuMiwzLjItMy4yCgkJCUMzNTMuMywyNjIuMywzNTQuOCwyNjMuOCwzNTQuOCwyNjUuNnoiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIzNDMuOCIgY3k9IjI2NS42IiByPSIzLjIiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIzMzMuNiIgY3k9IjI4Ni43IiByPSIzLjIiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIzNDQuNSIgY3k9IjI4Ni43IiByPSIzLjIiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIzMzUuNSIgY3k9IjI2NS42IiByPSIzLjIiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzI2LjUsMjcyLjZjMCwxLjgtMS40LDMuMi0zLjIsMy4yYy0xLjgsMC0zLjItMS40LTMuMi0zLjJjMC0xLjgsMS41LTMuMiwzLjItMy4yCgkJCUMzMjUuMSwyNjkuNCwzMjYuNSwyNzAuOCwzMjYuNSwyNzIuNnoiLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iMzE0LjgiIGN5PSIyNzkuNiIgcng9IjMuMiIgcnk9IjMuMiIvPgoJCTxlbGxpcHNlIGNsYXNzPSJzdDAiIGN4PSIzMjUuOCIgY3k9IjI3OS42IiByeD0iMy4yIiByeT0iMy4yIi8+CgkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzM2LjgiIGN5PSIyNzkuNiIgcj0iMy4yIi8+CgkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzMxLjEiIGN5PSIyNzIuNiIgcj0iMy4yIi8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjM0NS40IiBjeT0iMjcyLjYiIHJ4PSIzLjIiIHJ5PSIzLjIiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zOTIuOCw1Ny40TDM5Mi44LDU3LjRjNC4yLDAsOC40LTEuMSwxMi4xLTMuM2wtMS0xLjZjLTMuNSwyLTcuMiwzLjEtMTEuMiwzLjFsMCwwCgkJCWMtMTAuNSwwLTE5LjgtNy42LTIzLjItMTguOWwtMS44LDAuNUMzNzEuNCw0OS4yLDM4MS41LDU3LjQsMzkyLjgsNTcuNHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDAwLjksMzMuOWw5LjMsNDYuNGwtMTcuOC0zOS44QzM5Ni41LDQwLjUsMzk5LjksMzcuNyw0MDAuOSwzMy45eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zODQsMzMuOWwtOS4zLDQ2LjRsMTcuOC0zOS44QzM4OC40LDQwLjUsMzg0LjksMzcuNywzODQsMzMuOXoiLz4KCQk8cmVjdCB4PSIzOTEuNCIgeT0iMTcuNCIgY2xhc3M9InN0MCIgd2lkdGg9IjEuOSIgaGVpZ2h0PSI2Ii8+CgkJPHJlY3QgeD0iMzg5LjYiIHk9IjEwLjQiIGNsYXNzPSJzdDAiIHdpZHRoPSI1LjYiIGhlaWdodD0iNy42Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjM5Mi40IiBjeT0iMzEuNyIgcng9IjguOCIgcnk9IjguOCIvPgoJCTxlbGxpcHNlIGNsYXNzPSJzdDAiIGN4PSIzOTIuNCIgY3k9IjMxLjciIHJ4PSIxLjciIHJ5PSIxLjciLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNDAuMSwyMjMuN0wyNDAuMSwyMjMuN2M0LjIsMCw4LjQtMS4xLDEyLjEtMy4zbC0xLTEuNmMtMy41LDItNy4yLDMuMS0xMS4yLDMuMWwwLDAKCQkJYy0xMC41LDAtMTkuOC03LjYtMjMuMi0xOC45bC0xLjgsMC41QzIxOC42LDIxNS42LDIyOC43LDIyMy43LDI0MC4xLDIyMy43eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNDguMSwyMDAuMmw5LjMsNDYuNGwtMTcuOC0zOS44QzI0My43LDIwNi44LDI0Ny4xLDIwNCwyNDguMSwyMDAuMnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjMxLjIsMjAwLjJsLTkuMyw0Ni40bDE3LjgtMzkuOEMyMzUuNiwyMDYuOCwyMzIuMiwyMDQsMjMxLjIsMjAwLjJ6Ii8+CgkJPHJlY3QgeD0iMjM4LjYiIHk9IjE4My43IiBjbGFzcz0ic3QwIiB3aWR0aD0iMS45IiBoZWlnaHQ9IjYiLz4KCQk8cmVjdCB4PSIyMzYuOCIgeT0iMTc2LjciIGNsYXNzPSJzdDAiIHdpZHRoPSI1LjYiIGhlaWdodD0iNy42Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjIzOS42IiBjeT0iMTk4IiByeD0iOC44IiByeT0iOC44Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjIzOS42IiBjeT0iMTk4IiByeD0iMS43IiByeT0iMS43Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTQ4LjUsOTIuMmMwLDAuNC0wLjYsMC43LTEuMywwLjdoLTYwLjRjLTAuNywwLTEuMy0wLjMtMS4zLTAuN3YtMS43YzAtMC40LDAuNi0wLjcsMS4zLTAuN2g2MC40CgkJCWMwLjcsMCwxLjMsMC4zLDEuMywwLjdWOTIuMnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTQ3LjIsNDZoLTI1LjZ2LTFjMC0xLTAuNi0xLjgtMS4zLTEuOGgtNi42Yy0wLjcsMC0xLjMsMC44LTEuMywxLjh2MWgtMjUuNmMtMC43LDAtMS4zLDAuNy0xLjMsMS40djMuMwoJCQljMCwwLjgsMC42LDEuNSwxLjMsMS41aDYwLjRjMC43LDAsMS4zLTAuNywxLjMtMS41di0zLjNDNTQ4LjUsNDYuNyw1NDcuOSw0Niw1NDcuMiw0NnoiLz4KCQk8Zz4KCQkJPHJlY3QgeD0iNDk1LjkiIHk9IjY3LjQiIGNsYXNzPSJzdDAiIHdpZHRoPSI1LjEiIGhlaWdodD0iMTUuNCIvPgoJCQk8cmVjdCB4PSI1MDUiIHk9IjcxIiBjbGFzcz0ic3QwIiB3aWR0aD0iNS4xIiBoZWlnaHQ9IjExLjgiLz4KCQkJPHJlY3QgeD0iNTE0LjIiIHk9IjczLjYiIGNsYXNzPSJzdDAiIHdpZHRoPSI1LjEiIGhlaWdodD0iOS4yIi8+CgkJCTxyZWN0IHg9IjUyMy4zIiB5PSI1OS4yIiBjbGFzcz0ic3QwIiB3aWR0aD0iNS4xIiBoZWlnaHQ9IjIzLjYiLz4KCQkJPHJlY3QgeD0iNTMyLjQiIHk9IjY2LjMiIGNsYXNzPSJzdDAiIHdpZHRoPSI1LjEiIGhlaWdodD0iMTYuNSIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05MTUuNywxOTUuMmMwLDAuNC0wLjYsMC43LTEuMywwLjdoLTYwLjRjLTAuNywwLTEuMy0wLjMtMS4zLTAuN3YtMS43YzAtMC40LDAuNi0wLjcsMS4zLTAuN2g2MC40CgkJCWMwLjcsMCwxLjMsMC4zLDEuMywwLjdWMTk1LjJ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTkxNC41LDE0OS4xaC0yNS42di0xYzAtMS0wLjYtMS44LTEuMy0xLjhIODgxYy0wLjcsMC0xLjMsMC44LTEuMywxLjh2MWgtMjUuNmMtMC43LDAtMS4zLDAuNy0xLjMsMS40djMuMwoJCQljMCwwLjgsMC42LDEuNSwxLjMsMS41aDYwLjRjMC43LDAsMS4zLTAuNywxLjMtMS41di0zLjNDOTE1LjcsMTQ5LjcsOTE1LjIsMTQ5LjEsOTE0LjUsMTQ5LjF6Ii8+CgkJPGc+CgkJCTxyZWN0IHg9Ijg2My4yIiB5PSIxNzAuNSIgY2xhc3M9InN0MCIgd2lkdGg9IjUuMSIgaGVpZ2h0PSIxNS40Ii8+CgkJCTxyZWN0IHg9Ijg3Mi4zIiB5PSIxNzQuMSIgY2xhc3M9InN0MCIgd2lkdGg9IjUuMSIgaGVpZ2h0PSIxMS44Ii8+CgkJCTxyZWN0IHg9Ijg4MS40IiB5PSIxNzYuNyIgY2xhc3M9InN0MCIgd2lkdGg9IjUuMSIgaGVpZ2h0PSI5LjIiLz4KCQkJPHJlY3QgeD0iODkwLjYiIHk9IjE2Mi4zIiBjbGFzcz0ic3QwIiB3aWR0aD0iNS4xIiBoZWlnaHQ9IjIzLjYiLz4KCQkJPHJlY3QgeD0iODk5LjciIHk9IjE2OS4zIiBjbGFzcz0ic3QwIiB3aWR0aD0iNS4xIiBoZWlnaHQ9IjE2LjUiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjgyLjIsNjUuM0w2NjMuOCwzOWMtMC42LTAuOC0xLjEtMi40LTEuMS0zLjVWMTguM2MxLjMsMCwyLjMtMSwyLjMtMi4zYzAtMS4zLTEtMi4zLTIuMy0yLjNoLTEuOWgtMi42CgkJCWMtMS4xLDAtMi44LDAtMy44LDBoLTIuNmgtMS45Yy0xLjMsMC0yLjMsMS0yLjMsMi4zYzAsMS4zLDEsMi4zLDIuMywyLjN2MTcuM2MwLDEtMC41LDIuNi0xLjEsMy41bC0xOC40LDI2LjMKCQkJYy0wLjYsMC45LTAuNiwyLjMtMC4xLDMuMmwyLjEsMy40YzAuNSwwLjksMS45LDEuNiwyLjksMS42aDE5LjFjMSwwLDIuNywwLDMuOCwwaDE5LjFjMSwwLDIuNC0wLjcsMi45LTEuNmwyLjEtMy40CgkJCUM2ODIuOCw2Ny42LDY4Mi44LDY2LjIsNjgyLjIsNjUuM3oiLz4KCQk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjY0NS44LDUyIDYzNS4zLDY3LjEgNjM2LjIsNjguNSA2NzYuMyw2OC41IDY3Ny4yLDY3LjEgNjY2LjcsNTIgCQkiLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iNjQ3LjQiIGN5PSI1OC45IiByeD0iMi43IiByeT0iMi43Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MSIgY3g9IjY1OC4yIiBjeT0iNDIuOSIgcng9IjIuNyIgcnk9IjIuNyIvPgoJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjY1Mi42IiBjeT0iNi43IiByPSIyLjciLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iNjUyLjYiIGN5PSI0Ny40IiByeD0iMS44IiByeT0iMS44Ii8+CgkJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iNjU3LjciIGN5PSIyOC42IiByPSIxLjQiLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iNjU5LjEiIGN5PSI5LjMiIHJ4PSIxLjQiIHJ5PSIxLjQiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI2NTQuNyIgY3k9IjYzLjEiIHI9IjMuNSIvPgoJCTxlbGxpcHNlIGNsYXNzPSJzdDAiIGN4PSI2NjMuNiIgY3k9IjU3LjciIHJ4PSIyLjUiIHJ5PSIyLjUiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSI2NTYuMiIgY3k9IjM1LjgiIHI9IjIiLz4KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjU4LDIzLjFjMCwxLjEtMC45LDItMiwyYy0xLjEsMC0yLTAuOS0yLTJjMC0xLjEsMC45LTIsMi0yQzY1Ny4xLDIxLjEsNjU4LDIyLDY1OCwyMy4xeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02NjEuMSwyYzAsMS4xLTAuOSwyLTIsMmMtMS4xLDAtMi0wLjktMi0yYzAtMS4xLDAuOS0yLDItMkM2NjAuMiwwLDY2MS4xLDAuOSw2NjEuMSwyeiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ4OS41LDMyNGwtMTguNC0yNi4zYy0wLjYtMC44LTEuMS0yLjQtMS4xLTMuNVYyNzdjMS4zLDAsMi4zLTEsMi4zLTIuM2MwLTEuMy0xLTIuMy0yLjMtMi4zaC0xLjloLTIuNgoJCQljLTEuMSwwLTIuOCwwLTMuOCwwSDQ1OWgtMS45Yy0xLjMsMC0yLjMsMS0yLjMsMi4zYzAsMS4zLDEsMi4zLDIuMywyLjN2MTcuM2MwLDEtMC41LDIuNi0xLjEsMy41TDQzNy42LDMyNAoJCQljLTAuNiwwLjktMC42LDIuMy0wLjEsMy4ybDIuMSwzLjRjMC41LDAuOSwxLjksMS42LDIuOSwxLjZoMTkuMWMxLDAsMi43LDAsMy44LDBoMTkuMWMxLDAsMi40LTAuNywyLjktMS42bDIuMS0zLjQKCQkJQzQ5MC4xLDMyNi4zLDQ5MC4xLDMyNC45LDQ4OS41LDMyNHoiLz4KCQk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjQ1My4xLDMxMC43IDQ0Mi42LDMyNS44IDQ0My40LDMyNy4yIDQ4My42LDMyNy4yIDQ4NC41LDMyNS44IDQ3NCwzMTAuNyAJCSIvPgoJCTxlbGxpcHNlIGNsYXNzPSJzdDAiIGN4PSI0NTQuNyIgY3k9IjMxNy42IiByeD0iMi43IiByeT0iMi43Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MSIgY3g9IjQ2NS41IiBjeT0iMzAxLjYiIHJ4PSIyLjciIHJ5PSIyLjciLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI0NTkuOSIgY3k9IjI2NS40IiByPSIyLjciLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iNDU5LjkiIGN5PSIzMDYuMSIgcng9IjEuOCIgcnk9IjEuOCIvPgoJCTxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjQ2NSIgY3k9IjI4Ny4zIiByPSIxLjQiLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iNDY2LjQiIGN5PSIyNjguMSIgcng9IjEuNCIgcnk9IjEuNCIvPgoJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjQ2MiIgY3k9IjMyMS44IiByPSIzLjUiLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iNDcwLjkiIGN5PSIzMTYuNCIgcng9IjIuNSIgcnk9IjIuNSIvPgoJCTxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjQ2My41IiBjeT0iMjk0LjUiIHI9IjIiLz4KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDY1LjMsMjgxLjhjMCwxLjEtMC45LDItMiwyYy0xLjEsMC0yLTAuOS0yLTJjMC0xLjEsMC45LTIsMi0yQzQ2NC40LDI3OS44LDQ2NS4zLDI4MC43LDQ2NS4zLDI4MS44eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00NjguNCwyNjAuN2MwLDEuMS0wLjksMi0yLDJjLTEuMSwwLTItMC45LTItMmMwLTEuMSwwLjktMiwyLTJDNDY3LjUsMjU4LjcsNDY4LjQsMjU5LjYsNDY4LjQsMjYwLjd6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDg5LjUsNTY4LjNsLTE4LjQtMjYuM2MtMC42LTAuOC0xLjEtMi40LTEuMS0zLjV2LTE3LjNjMS4zLDAsMi4zLTEsMi4zLTIuM2MwLTEuMy0xLTIuMy0yLjMtMi4zaC0xLjloLTIuNgoJCQljLTEuMSwwLTIuOCwwLTMuOCwwSDQ1OWgtMS45Yy0xLjMsMC0yLjMsMS0yLjMsMi4zYzAsMS4zLDEsMi4zLDIuMywyLjN2MTcuM2MwLDEtMC41LDIuNi0xLjEsMy41bC0xOC40LDI2LjMKCQkJYy0wLjYsMC45LTAuNiwyLjMtMC4xLDMuMmwyLjEsMy40YzAuNSwwLjksMS45LDEuNiwyLjksMS42aDE5LjFjMSwwLDIuNywwLDMuOCwwaDE5LjFjMSwwLDIuNC0wLjcsMi45LTEuNmwyLjEtMy40CgkJCUM0OTAuMSw1NzAuNiw0OTAuMSw1NjkuMSw0ODkuNSw1NjguM3oiLz4KCQk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjQ1My4xLDU1NC45IDQ0Mi42LDU3MCA0NDMuNCw1NzEuNCA0ODMuNiw1NzEuNCA0ODQuNSw1NzAgNDc0LDU1NC45IAkJIi8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjQ1NC43IiBjeT0iNTYxLjgiIHJ4PSIyLjciIHJ5PSIyLjciLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QxIiBjeD0iNDY1LjUiIGN5PSI1NDUuOCIgcng9IjIuNyIgcnk9IjIuNyIvPgoJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjQ1OS45IiBjeT0iNTA5LjYiIHI9IjIuNyIvPgoJCTxlbGxpcHNlIGNsYXNzPSJzdDAiIGN4PSI0NTkuOSIgY3k9IjU1MC40IiByeD0iMS44IiByeT0iMS44Ii8+CgkJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iNDY1IiBjeT0iNTMxLjUiIHI9IjEuNCIvPgoJCTxlbGxpcHNlIGNsYXNzPSJzdDAiIGN4PSI0NjYuNCIgY3k9IjUxMi4zIiByeD0iMS40IiByeT0iMS40Ii8+CgkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iNDYyIiBjeT0iNTY2LjEiIHI9IjMuNSIvPgoJCTxlbGxpcHNlIGNsYXNzPSJzdDAiIGN4PSI0NzAuOSIgY3k9IjU2MC42IiByeD0iMi41IiByeT0iMi41Ii8+CgkJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iNDYzLjUiIGN5PSI1MzguNyIgcj0iMiIvPgoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00NjUuMyw1MjZjMCwxLjEtMC45LDItMiwyYy0xLjEsMC0yLTAuOS0yLTJjMC0xLjEsMC45LTIsMi0yQzQ2NC40LDUyNC4xLDQ2NS4zLDUyNC45LDQ2NS4zLDUyNnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDY4LjQsNTA0LjljMCwxLjEtMC45LDItMiwyYy0xLjEsMC0yLTAuOS0yLTJjMC0xLjEsMC45LTIsMi0yQzQ2Ny41LDUwMi45LDQ2OC40LDUwMy44LDQ2OC40LDUwNC45eiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIwMiwzMjNsLTE4LjQtMjYuM2MtMC42LTAuOC0xLjEtMi40LTEuMS0zLjVWMjc2YzEuMywwLDIuMy0xLDIuMy0yLjNjMC0xLjMtMS0yLjMtMi4zLTIuM2gtMS45SDE3OAoJCQljLTEuMSwwLTIuOCwwLTMuOCwwaC0yLjZoLTEuOWMtMS4zLDAtMi4zLDEtMi4zLDIuM2MwLDEuMywxLDIuMywyLjMsMi4zdjE3LjNjMCwxLTAuNSwyLjYtMS4xLDMuNUwxNTAuMSwzMjMKCQkJYy0wLjYsMC45LTAuNiwyLjMtMC4xLDMuMmwyLjEsMy40YzAuNSwwLjksMS45LDEuNiwyLjksMS42aDE5LjFjMSwwLDIuNywwLDMuOCwwaDE5LjFjMSwwLDIuNC0wLjcsMi45LTEuNmwyLjEtMy40CgkJCUMyMDIuNiwzMjUuMywyMDIuNiwzMjMuOSwyMDIsMzIzeiIvPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTY1LjYsMzA5LjcgMTU1LjEsMzI0LjggMTU2LDMyNi4yIDE5Ni4yLDMyNi4yIDE5NywzMjQuOCAxODYuNSwzMDkuNyAJCSIvPgoJCTxlbGxpcHNlIGNsYXNzPSJzdDAiIGN4PSIxNjcuMyIgY3k9IjMxNi42IiByeD0iMi43IiByeT0iMi43Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MSIgY3g9IjE3OCIgY3k9IjMwMC42IiByeD0iMi43IiByeT0iMi43Ii8+CgkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMTcyLjUiIGN5PSIyNjQuNCIgcj0iMi43Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjE3Mi41IiBjeT0iMzA1LjEiIHJ4PSIxLjgiIHJ5PSIxLjgiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSIxNzcuNSIgY3k9IjI4Ni4zIiByPSIxLjQiLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iMTc4LjkiIGN5PSIyNjcuMSIgcng9IjEuNCIgcnk9IjEuNCIvPgoJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE3NC41IiBjeT0iMzIwLjgiIHI9IjMuNSIvPgoJCTxlbGxpcHNlIGNsYXNzPSJzdDAiIGN4PSIxODMuNCIgY3k9IjMxNS40IiByeD0iMi41IiByeT0iMi41Ii8+CgkJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iMTc2LjEiIGN5PSIyOTMuNSIgcj0iMiIvPgoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNzcuOSwyODAuOGMwLDEuMS0wLjksMi0yLDJjLTEuMSwwLTItMC45LTItMmMwLTEuMSwwLjktMiwyLTJDMTc3LDI3OC44LDE3Ny45LDI3OS43LDE3Ny45LDI4MC44eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xODAuOSwyNTkuN2MwLDEuMS0wLjksMi0yLDJjLTEuMSwwLTItMC45LTItMmMwLTEuMSwwLjktMiwyLTJDMTgwLDI1Ny43LDE4MC45LDI1OC42LDE4MC45LDI1OS43eiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzNi4xLDI1LjFjMC40LTAuNSwxLTAuNywxLjktMC43YzMuMywwLDkuNywzLjMsMTcuNiwxMC41YzAuOCwwLDEuNy0wLjEsMi42LTAuMWMwLjItMC4yLDAuMy0wLjMsMC41LTAuNQoJCQljLTguMi03LjctMTUuOS0xMi41LTIwLjctMTIuNWMtMiwwLTMuMiwwLjktMy44LDEuNmMtMi41LDIuOC0xLjMsOC41LDIsMTUuMmMwLjgtMC4zLDEuNi0wLjYsMi40LTAuOQoJCQlDMjM1LjUsMzEuNSwyMzQuNiwyNi44LDIzNi4xLDI1LjF6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI0NS41LDQ5LjFjLTIuMy0zLjItNC4yLTYuMi01LjctOWMtMC44LDAuMy0xLjYsMC42LTIuNCwwLjljMS44LDMuMyw0LDYuOCw2LjUsMTAuMwoJCQlDMjQ0LjQsNTAuNSwyNDQuOSw0OS44LDI0NS41LDQ5LjF6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI1OC4yLDY1LjFjMC4yLDAsMC4zLDAsMC41LDBsMCwwYzAuMiwwLDAuMywwLDAuNSwwYy0wLjItMC4yLTAuMy0wLjMtMC41LTAuNQoJCQlDMjU4LjUsNjQuOCwyNTguNCw2NC45LDI1OC4yLDY1LjF6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI1OC43LDM0LjhjMC4yLDAsMC4zLDAsMC41LDBjLTAuMi0wLjItMC4zLTAuMy0wLjUtMC41Yy0wLjIsMC4yLTAuMywwLjMtMC41LDAuNQoJCQlDMjU4LjQsMzQuOCwyNTguNSwzNC44LDI1OC43LDM0Ljh6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI3My41LDUxLjJjLTAuNS0wLjctMS0xLjQtMS42LTIuMWMtMS43LTIuMy0zLjUtNC41LTUuNC02LjZjLTEuNi0xLjgtMy4yLTMuNS00LjctNS4xCgkJCWMtMC45LDAtMS44LTAuMS0yLjYtMC4xYy0wLjIsMC4yLTAuMywwLjMtMC41LDAuNWMxLjksMS45LDMuOSw0LDUuOSw2LjNjMi4xLDIuNCw0LDQuOCw1LjcsNy4xYzAuNSwwLjcsMSwxLjQsMS41LDIuMQoJCQljMi4zLDMuMiw0LjIsNi4yLDUuNyw5YzAuOC0wLjMsMS42LTAuNSwyLjQtMC44QzI3OC4yLDU4LjIsMjc2LDU0LjcsMjczLjUsNTEuMnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjU4LjcsNjcuNnYtMS4zVjY3LjZjLTAuMiwwLTAuMywwLTAuNSwwYzAuMiwwLjIsMC4zLDAuMywwLjUsMC41YzAuMi0wLjIsMC4zLTAuMywwLjUtMC41CgkJCUMyNTksNjcuNiwyNTguOSw2Ny42LDI1OC43LDY3LjZ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI1OS4yLDM3LjNjLTAuMiwwLTAuMywwLTAuNSwwYy0wLjIsMC0wLjMsMC0wLjUsMGMwLjIsMC4yLDAuMywwLjMsMC41LDAuNUMyNTguOSwzNy43LDI1OSwzNy41LDI1OS4yLDM3LjN6CgkJCSIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNTguMiwzNy4zYy0wLjksMC0xLjgsMC0yLjYsMC4xYy0xLjYsMS42LTMuMiwzLjMtNC43LDUuMWMtMS45LDIuMS0zLjcsNC4zLTUuNCw2LjZjLTAuNSwwLjctMSwxLjQtMS42LDIuMQoJCQljLTIuNSwzLjUtNC43LDYuOS02LjUsMTAuM2MwLjgsMC4zLDEuNiwwLjYsMi40LDAuOGMxLjUtMi44LDMuNC01LjgsNS43LTljMC41LTAuNywxLTEuNCwxLjUtMi4xYzEuNy0yLjMsMy42LTQuNyw1LjctNy4xCgkJCWMyLTIuMyw0LTQuNCw2LTYuM0MyNTguNSwzNy43LDI1OC40LDM3LjUsMjU4LjIsMzcuM3oiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjUyLjcsNTguM2MtMi4xLTIuNC00LTQuOC01LjctNy4xYy0wLjUsMC43LTEsMS40LTEuNSwyLjFjMS43LDIuMywzLjUsNC41LDUuNCw2LjZjMS42LDEuOCwzLjEsMy41LDQuNyw1LjEKCQkJYzAuNCwwLjQsMC45LDAuOSwxLjMsMS4zYzAuNC0wLjQsMC45LTAuOCwxLjMtMS4zYzAuMi0wLjIsMC4zLTAuMywwLjUtMC41QzI1Ni44LDYyLjcsMjU0LjgsNjAuNiwyNTIuNyw1OC4zeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yODEuMiw2My44Yy0wLjgsMC4zLTEuNiwwLjYtMi40LDAuOWMzLjEsNi4zLDQsMTEsMi41LDEyLjdjLTAuNCwwLjUtMSwwLjctMS45LDAuNwoJCQljLTMuMywwLTkuNy0zLjMtMTcuNi0xMC41Yy0wLjQtMC40LTAuOS0wLjgtMS4zLTEuMmMtMC40LDAuNC0wLjksMC44LTEuMywxLjNjLTAuMiwwLjItMC4zLDAuMy0wLjUsMC41CgkJCWM4LjIsNy43LDE1LjksMTIuNSwyMC43LDEyLjVjMiwwLDMuMi0wLjksMy44LTEuNkMyODUuNyw3Ni4yLDI4NC41LDcwLjUsMjgxLjIsNjMuOHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjM5LjgsNDAuMWMtMC40LTAuOC0wLjgtMS41LTEuMi0yLjNjLTAuOCwwLjMtMS42LDAuNi0yLjQsMC45YzAuNCwwLjgsMC44LDEuNSwxLjIsMi4zCgkJCUMyMzguMiw0MC42LDIzOSw0MC40LDIzOS44LDQwLjF6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI4MS4yLDM4LjdjLTAuNCwwLjgtMC44LDEuNS0xLjIsMi4zYzYuNSwyLjYsMTAuNyw2LjMsMTAuNywxMC4zYzAsNC00LjIsNy43LTEwLjcsMTAuMwoJCQljLTAuOCwwLjMtMS42LDAuNi0yLjQsMC44Yy00LjUsMS41LTEwLDIuNC0xNS44LDIuN2MtMC40LDAuNC0wLjksMC45LTEuMywxLjNjMC40LDAuNCwwLjksMC44LDEuMywxLjJjNi40LTAuMywxMi4yLTEuMywxNy0yLjkKCQkJYzAuOC0wLjMsMS42LTAuNiwyLjQtMC45YzcuNC0zLDEyLjEtNy41LDEyLjEtMTIuNUMyOTMuMyw0Ni4xLDI4OC42LDQxLjcsMjgxLjIsMzguN3oiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjU1LjYsNjVjLTUuOC0wLjMtMTEuMy0xLjItMTUuOC0yLjdjLTAuOC0wLjMtMS42LTAuNS0yLjQtMC44Yy02LjUtMi42LTEwLjctNi4zLTEwLjctMTAuMwoJCQljMC00LDQuMi03LjcsMTAuNy0xMC4zYy0wLjQtMC44LTAuOC0xLjUtMS4yLTIuM2MtNy40LDMtMTIuMSw3LjUtMTIuMSwxMi42YzAsNS4xLDQuNiw5LjYsMTIuMSwxMi41YzAuOCwwLjMsMS41LDAuNiwyLjQsMC45CgkJCWM0LjksMS42LDEwLjcsMi43LDE3LDIuOWMwLjQtMC40LDAuOS0wLjgsMS4zLTEuMkMyNTYuNSw2NS45LDI1Niw2NS41LDI1NS42LDY1eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yODMuMiwyMy41Yy0wLjYtMC43LTEuOC0xLjYtMy44LTEuNmMtNC44LDAtMTIuNSw0LjgtMjAuNywxMi41YzAuMiwwLjIsMC4zLDAuMywwLjUsMC41CgkJCWMwLjksMCwxLjcsMCwyLjYsMC4xYzcuOS03LjEsMTQuMy0xMC41LDE3LjYtMTAuNWMwLjksMCwxLjUsMC4yLDEuOSwwLjdjMS41LDEuNywwLjYsNi40LTIuNSwxMi43Yy0wLjQsMC43LTAuOCwxLjUtMS4yLDIuMwoJCQljLTEuNSwyLjgtMy40LDUuOC01LjcsOWMwLjUsMC43LDEsMS40LDEuNiwyLjFjMi41LTMuNSw0LjctNyw2LjUtMTAuM2MwLjQtMC44LDAuOC0xLjUsMS4yLTIuM0MyODQuNSwzMiwyODUuNywyNi4zLDI4My4yLDIzLjV6IgoJCQkvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNzAuNCw1MS4yYy0xLjcsMi4zLTMuNiw0LjctNS43LDcuMWMtMiwyLjMtNCw0LjQtNS45LDYuM2MwLjIsMC4yLDAuMywwLjMsMC41LDAuNWMtMC4yLDAtMC4zLDAtMC41LDBsMCwwCgkJCWMtMC4yLDAtMC4zLDAtMC41LDBjLTAuNCwwLjQtMC45LDAuOS0xLjMsMS4zYy0wLjQsMC40LTAuOSwwLjgtMS4zLDEuMkMyNDcuOCw3NC43LDI0MS40LDc4LDIzOCw3OGMtMC45LDAtMS41LTAuMi0xLjktMC43CgkJCWMtMS41LTEuNy0wLjYtNi40LDIuNS0xMi43Yy0wLjgtMC4zLTEuNi0wLjYtMi40LTAuOWMtMy4zLDYuNy00LjUsMTIuNC0yLDE1LjJjMC42LDAuNywxLjgsMS42LDMuOCwxLjZjNC44LDAsMTIuNS00LjgsMjAuNy0xMi41CgkJCWMtMC4yLTAuMi0wLjMtMC4zLTAuNS0wLjVjMC4yLDAsMC4zLDAsMC41LDB2LTEuM3YxLjNjMC4yLDAsMC4zLDAsMC41LDBjMC40LTAuNCwwLjktMC44LDEuMy0xLjNjMC41LTAuNCwwLjktMC45LDEuMy0xLjMKCQkJYzEuNi0xLjYsMy4yLTMuMyw0LjctNS4xYzEuOS0yLjEsMy43LTQuNCw1LjQtNi42QzI3MS40LDUyLjYsMjcwLjksNTEuOSwyNzAuNCw1MS4yeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNjEuOCwzNC45Yy0wLjgsMC0xLjctMC4xLTIuNi0wLjFjLTAuMiwwLTAuMywwLTAuNSwwYy0wLjIsMC0wLjMsMC0wLjUsMGMtMC45LDAtMS43LDAtMi42LDAuMQoJCQljLTYuNCwwLjMtMTIuMiwxLjMtMTcsMi45YzAuNCwwLjcsMC44LDEuNSwxLjIsMi4zYzQuNS0xLjUsMTAtMi40LDE1LjgtMi43YzAuOSwwLDEuNy0wLjEsMi42LTAuMWMwLjIsMCwwLjMsMCwwLjUsMAoJCQljMC4yLDAsMC4zLDAsMC41LDBjMC45LDAsMS44LDAsMi42LDAuMWM1LjgsMC4zLDExLjMsMS4yLDE1LjgsMi43YzAuNC0wLjgsMC44LTEuNSwxLjItMi4zQzI3NCwzNi4yLDI2OC4xLDM1LjEsMjYxLjgsMzQuOXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjUzLjIsNTEuMmMwLDMuMSwyLjUsNS41LDUuNSw1LjVjMy4xLDAsNS41LTIuNSw1LjUtNS41YzAtMy4xLTIuNS01LjUtNS41LTUuNQoJCQlDMjU1LjYsNDUuNywyNTMuMiw0OC4yLDI1My4yLDUxLjJ6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODU4LjgsMjM5LjVjMC40LTAuNSwxLTAuNywxLjktMC43YzMuMywwLDkuNywzLjMsMTcuNiwxMC41YzAuOCwwLDEuNy0wLjEsMi42LTAuMWMwLjItMC4yLDAuMy0wLjMsMC41LTAuNQoJCQljLTguMi03LjctMTUuOS0xMi41LTIwLjctMTIuNWMtMiwwLTMuMiwwLjktMy44LDEuNmMtMi41LDIuOC0xLjMsOC41LDIsMTUuMmMwLjgtMC4zLDEuNi0wLjYsMi40LTAuOQoJCQlDODU4LjIsMjQ1LjksODU3LjMsMjQxLjIsODU4LjgsMjM5LjV6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTg2OC4yLDI2My41Yy0yLjMtMy4yLTQuMi02LjItNS43LTljLTAuOCwwLjMtMS42LDAuNi0yLjQsMC45YzEuOCwzLjMsNCw2LjgsNi41LDEwLjMKCQkJQzg2Ny4yLDI2NC45LDg2Ny43LDI2NC4yLDg2OC4yLDI2My41eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04ODAuOSwyNzkuNWMwLjIsMCwwLjMsMCwwLjUsMGwwLDBjMC4yLDAsMC4zLDAsMC41LDBjLTAuMi0wLjItMC4zLTAuMy0wLjUtMC41CgkJCUM4ODEuMywyNzkuMSw4ODEuMSwyNzkuMyw4ODAuOSwyNzkuNXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODgxLjQsMjQ5LjJjMC4yLDAsMC4zLDAsMC41LDBjLTAuMi0wLjItMC4zLTAuMy0wLjUtMC41Yy0wLjIsMC4yLTAuMywwLjMtMC41LDAuNQoJCQlDODgxLjEsMjQ5LjIsODgxLjIsMjQ5LjIsODgxLjQsMjQ5LjJ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTg5Ni4yLDI2NS42Yy0wLjUtMC43LTEtMS40LTEuNi0yLjFjLTEuNy0yLjMtMy41LTQuNS01LjQtNi42Yy0xLjYtMS44LTMuMi0zLjUtNC43LTUuMQoJCQljLTAuOSwwLTEuOC0wLjEtMi42LTAuMWMtMC4yLDAuMi0wLjMsMC4zLTAuNSwwLjVjMS45LDEuOSwzLjksNCw1LjksNi4zYzIuMSwyLjQsNCw0LjgsNS43LDcuMWMwLjUsMC43LDEsMS40LDEuNSwyLjEKCQkJYzIuMywzLjIsNC4yLDYuMiw1LjcsOWMwLjgtMC4zLDEuNi0wLjUsMi40LTAuOEM5MDAuOSwyNzIuNSw4OTguNywyNjksODk2LjIsMjY1LjZ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTg4MS40LDI4MnYtMS4zVjI4MmMtMC4yLDAtMC4zLDAtMC41LDBjMC4yLDAuMiwwLjMsMC4zLDAuNSwwLjVjMC4yLTAuMiwwLjMtMC4zLDAuNS0wLjUKCQkJQzg4MS44LDI4Miw4ODEuNiwyODIsODgxLjQsMjgyeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04ODEuOSwyNTEuN2MtMC4yLDAtMC4zLDAtMC41LDBjLTAuMiwwLTAuMywwLTAuNSwwYzAuMiwwLjIsMC4zLDAuMywwLjUsMC41CgkJCUM4ODEuNiwyNTIsODgxLjcsMjUxLjgsODgxLjksMjUxLjd6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTg4MC45LDI1MS43Yy0wLjksMC0xLjgsMC0yLjYsMC4xYy0xLjYsMS42LTMuMiwzLjMtNC43LDUuMWMtMS45LDIuMS0zLjcsNC4zLTUuNCw2LjYKCQkJYy0wLjUsMC43LTEsMS40LTEuNiwyLjFjLTIuNSwzLjUtNC43LDYuOS02LjUsMTAuM2MwLjgsMC4zLDEuNiwwLjYsMi40LDAuOGMxLjUtMi44LDMuNC01LjgsNS43LTljMC41LTAuNywxLTEuNCwxLjUtMi4xCgkJCWMxLjctMi4zLDMuNi00LjcsNS43LTcuMWMyLTIuMyw0LTQuNCw2LTYuM0M4ODEuMywyNTIsODgxLjEsMjUxLjgsODgwLjksMjUxLjd6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTg3NS41LDI3Mi42Yy0yLjEtMi40LTQtNC44LTUuNy03LjFjLTAuNSwwLjctMSwxLjQtMS41LDIuMWMxLjcsMi4zLDMuNSw0LjUsNS40LDYuNgoJCQljMS42LDEuOCwzLjEsMy41LDQuNyw1LjFjMC40LDAuNCwwLjksMC45LDEuMywxLjNjMC40LTAuNCwwLjktMC44LDEuMy0xLjNjMC4yLTAuMiwwLjMtMC4zLDAuNS0wLjUKCQkJQzg3OS41LDI3Ny4xLDg3Ny41LDI3NSw4NzUuNSwyNzIuNnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNOTAzLjksMjc4LjFjLTAuOCwwLjMtMS42LDAuNi0yLjQsMC45YzMuMSw2LjMsNCwxMSwyLjUsMTIuN2MtMC40LDAuNS0xLDAuNy0xLjksMC43CgkJCWMtMy4zLDAtOS43LTMuMy0xNy42LTEwLjVjLTAuNC0wLjQtMC45LTAuOC0xLjMtMS4yYy0wLjQsMC40LTAuOCwwLjgtMS4zLDEuM2MtMC4yLDAuMi0wLjMsMC4zLTAuNSwwLjUKCQkJYzguMiw3LjcsMTUuOSwxMi41LDIwLjcsMTIuNWMyLDAsMy4yLTAuOSwzLjgtMS42QzkwOC40LDI5MC41LDkwNy4yLDI4NC44LDkwMy45LDI3OC4xeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04NjIuNSwyNTQuNWMtMC40LTAuOC0wLjgtMS41LTEuMi0yLjNjLTAuOCwwLjMtMS42LDAuNi0yLjQsMC45YzAuNCwwLjgsMC44LDEuNSwxLjIsMi4zCgkJCUM4NjAuOSwyNTUsODYxLjcsMjU0LjcsODYyLjUsMjU0LjV6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTkwMy45LDI1M2MtMC40LDAuOC0wLjgsMS41LTEuMiwyLjNjNi41LDIuNiwxMC43LDYuMywxMC43LDEwLjNjMCw0LTQuMiw3LjctMTAuNywxMC4zCgkJCWMtMC44LDAuMy0xLjYsMC42LTIuNCwwLjhjLTQuNSwxLjUtMTAsMi40LTE1LjgsMi43Yy0wLjQsMC40LTAuOSwwLjktMS4zLDEuM2MwLjQsMC40LDAuOSwwLjgsMS4zLDEuMmM2LjQtMC4zLDEyLjItMS4zLDE3LTIuOQoJCQljMC44LTAuMywxLjYtMC42LDIuNC0wLjljNy40LTMsMTIuMS03LjUsMTIuMS0xMi41QzkxNiwyNjAuNSw5MTEuMywyNTYsOTAzLjksMjUzeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04NzguMywyNzkuNGMtNS44LTAuMy0xMS4zLTEuMi0xNS44LTIuN2MtMC44LTAuMy0xLjYtMC41LTIuNC0wLjhjLTYuNS0yLjYtMTAuNy02LjMtMTAuNy0xMC4zCgkJCWMwLTQsNC4yLTcuNywxMC43LTEwLjNjLTAuNC0wLjgtMC44LTEuNS0xLjItMi4zYy03LjQsMy0xMi4xLDcuNS0xMi4xLDEyLjZjMCw1LjEsNC42LDkuNiwxMi4xLDEyLjVjMC44LDAuMywxLjUsMC42LDIuNCwwLjkKCQkJYzQuOSwxLjYsMTAuNywyLjcsMTcsMi45YzAuNC0wLjQsMC45LTAuOCwxLjMtMS4yQzg3OS4yLDI4MC4zLDg3OC43LDI3OS44LDg3OC4zLDI3OS40eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05MDUuOSwyMzcuOGMtMC42LTAuNy0xLjgtMS42LTMuOC0xLjZjLTQuOCwwLTEyLjUsNC44LTIwLjcsMTIuNWMwLjIsMC4yLDAuMywwLjMsMC41LDAuNQoJCQljMC45LDAsMS43LDAsMi42LDAuMWM3LjktNy4xLDE0LjMtMTAuNSwxNy42LTEwLjVjMC45LDAsMS41LDAuMiwxLjksMC43YzEuNSwxLjcsMC42LDYuNC0yLjUsMTIuN2MtMC40LDAuNy0wLjgsMS41LTEuMiwyLjMKCQkJYy0xLjUsMi44LTMuNCw1LjgtNS43LDljMC41LDAuNywxLDEuNCwxLjYsMi4xYzIuNS0zLjUsNC43LTcsNi41LTEwLjNjMC40LTAuOCwwLjgtMS41LDEuMi0yLjMKCQkJQzkwNy4yLDI0Ni4zLDkwOC40LDI0MC42LDkwNS45LDIzNy44eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04OTMuMSwyNjUuNmMtMS43LDIuMy0zLjYsNC43LTUuNyw3LjFjLTIsMi4zLTQsNC40LTUuOSw2LjNjMC4yLDAuMiwwLjMsMC4zLDAuNSwwLjVjLTAuMiwwLTAuMywwLTAuNSwwbDAsMAoJCQljLTAuMiwwLTAuMywwLTAuNSwwYy0wLjQsMC40LTAuOSwwLjktMS4zLDEuM2MtMC40LDAuNC0wLjksMC44LTEuMywxLjJjLTcuOSw3LjEtMTQuMywxMC41LTE3LjYsMTAuNWMtMC45LDAtMS41LTAuMi0xLjktMC43CgkJCWMtMS41LTEuNy0wLjYtNi40LDIuNS0xMi43Yy0wLjgtMC4zLTEuNi0wLjYtMi40LTAuOWMtMy4zLDYuNy00LjUsMTIuNC0yLDE1LjJjMC42LDAuNywxLjgsMS42LDMuOCwxLjZjNC44LDAsMTIuNS00LjgsMjAuNy0xMi41CgkJCWMtMC4yLTAuMi0wLjMtMC4zLTAuNS0wLjVjMC4yLDAsMC4zLDAsMC41LDB2LTEuM3YxLjNjMC4yLDAsMC4zLDAsMC41LDBjMC40LTAuNCwwLjktMC44LDEuMy0xLjNjMC41LTAuNCwwLjktMC45LDEuMy0xLjMKCQkJYzEuNi0xLjYsMy4yLTMuMyw0LjctNS4xYzEuOS0yLjEsMy43LTQuNCw1LjQtNi42Qzg5NC4xLDI2Nyw4OTMuNiwyNjYuMyw4OTMuMSwyNjUuNnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODg0LjUsMjQ5LjJjLTAuOCwwLTEuNy0wLjEtMi42LTAuMWMtMC4yLDAtMC4zLDAtMC41LDBjLTAuMiwwLTAuMywwLTAuNSwwYy0wLjksMC0xLjcsMC0yLjYsMC4xCgkJCWMtNi40LDAuMy0xMi4yLDEuMy0xNywyLjljMC40LDAuNywwLjgsMS41LDEuMiwyLjNjNC41LTEuNSwxMC0yLjQsMTUuOC0yLjdjMC45LDAsMS43LTAuMSwyLjYtMC4xYzAuMiwwLDAuMywwLDAuNSwwCgkJCWMwLjIsMCwwLjMsMCwwLjUsMGMwLjksMCwxLjgsMCwyLjYsMC4xYzUuOCwwLjMsMTEuMywxLjIsMTUuOCwyLjdjMC40LTAuOCwwLjgtMS41LDEuMi0yLjNDODk2LjcsMjUwLjUsODkwLjksMjQ5LjUsODg0LjUsMjQ5LjJ6CgkJCSIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04NzUuOSwyNjUuNmMwLDMuMSwyLjUsNS41LDUuNSw1LjVjMy4xLDAsNS41LTIuNSw1LjUtNS41YzAtMy4xLTIuNS01LjUtNS41LTUuNQoJCQlDODc4LjQsMjYwLDg3NS45LDI2Mi41LDg3NS45LDI2NS42eiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY4OS4yLDEzOS42YzAuNC0wLjUsMS0wLjcsMS45LTAuN2MzLjMsMCw5LjcsMy4zLDE3LjYsMTAuNWMwLjgsMCwxLjctMC4xLDIuNi0wLjFjMC4yLTAuMiwwLjMtMC4zLDAuNS0wLjUKCQkJYy04LjItNy43LTE1LjktMTIuNS0yMC43LTEyLjVjLTIsMC0zLjIsMC45LTMuOCwxLjZjLTIuNSwyLjgtMS4zLDguNSwyLDE1LjJjMC44LTAuMywxLjYtMC42LDIuNC0wLjkKCQkJQzY4OC42LDE0Niw2ODcuNywxNDEuMyw2ODkuMiwxMzkuNnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjk4LjUsMTYzLjZjLTIuMy0zLjItNC4yLTYuMi01LjctOWMtMC44LDAuMy0xLjYsMC42LTIuNCwwLjljMS44LDMuMyw0LDYuOCw2LjUsMTAuMwoJCQlDNjk3LjUsMTY1LDY5OCwxNjQuMyw2OTguNSwxNjMuNnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzExLjMsMTc5LjZjMC4yLDAsMC4zLDAsMC41LDBsMCwwYzAuMiwwLDAuMywwLDAuNSwwYy0wLjItMC4yLTAuMy0wLjMtMC41LTAuNQoJCQlDNzExLjYsMTc5LjMsNzExLjQsMTc5LjQsNzExLjMsMTc5LjZ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTcxMS44LDE0OS4zYzAuMiwwLDAuMywwLDAuNSwwYy0wLjItMC4yLTAuMy0wLjMtMC41LTAuNWMtMC4yLDAuMi0wLjMsMC4zLTAuNSwwLjUKCQkJQzcxMS40LDE0OS4zLDcxMS42LDE0OS4zLDcxMS44LDE0OS4zeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03MjYuNSwxNjUuN2MtMC41LTAuNy0xLTEuNC0xLjYtMi4xYy0xLjctMi4zLTMuNS00LjUtNS40LTYuNmMtMS42LTEuOC0zLjItMy41LTQuNy01LjEKCQkJYy0wLjksMC0xLjgtMC4xLTIuNi0wLjFjLTAuMiwwLjItMC4zLDAuMy0wLjUsMC41YzEuOSwxLjksMy45LDQsNS45LDYuM2MyLjEsMi40LDQsNC44LDUuNyw3LjFjMC41LDAuNywxLDEuNCwxLjUsMi4xCgkJCWMyLjMsMy4yLDQuMiw2LjIsNS43LDljMC44LTAuMywxLjYtMC41LDIuNC0wLjhDNzMxLjMsMTcyLjYsNzI5LDE2OS4xLDcyNi41LDE2NS43eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03MTEuOCwxODIuMXYtMS4zVjE4Mi4xYy0wLjIsMC0wLjMsMC0wLjUsMGMwLjIsMC4yLDAuMywwLjMsMC41LDAuNWMwLjItMC4yLDAuMy0wLjMsMC41LTAuNQoJCQlDNzEyLjEsMTgyLjEsNzExLjksMTgyLjEsNzExLjgsMTgyLjF6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTcxMi4yLDE1MS44Yy0wLjIsMC0wLjMsMC0wLjUsMGMtMC4yLDAtMC4zLDAtMC41LDBjMC4yLDAuMiwwLjMsMC4zLDAuNSwwLjUKCQkJQzcxMS45LDE1Mi4xLDcxMi4xLDE1Miw3MTIuMiwxNTEuOHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzExLjMsMTUxLjhjLTAuOSwwLTEuOCwwLTIuNiwwLjFjLTEuNiwxLjYtMy4yLDMuMy00LjcsNS4xYy0xLjksMi4xLTMuNyw0LjMtNS40LDYuNgoJCQljLTAuNSwwLjctMSwxLjQtMS42LDIuMWMtMi41LDMuNS00LjcsNi45LTYuNSwxMC4zYzAuOCwwLjMsMS42LDAuNiwyLjQsMC44YzEuNS0yLjgsMy40LTUuOCw1LjctOWMwLjUtMC43LDEtMS40LDEuNS0yLjEKCQkJYzEuNy0yLjMsMy42LTQuNyw1LjctNy4xYzItMi4zLDQtNC40LDYtNi4zQzcxMS42LDE1Mi4xLDcxMS40LDE1Miw3MTEuMywxNTEuOHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzA1LjgsMTcyLjhjLTIuMS0yLjQtNC00LjgtNS43LTcuMWMtMC41LDAuNy0xLDEuNC0xLjUsMi4xYzEuNywyLjMsMy41LDQuNSw1LjQsNi42CgkJCWMxLjYsMS44LDMuMSwzLjUsNC43LDUuMWMwLjQsMC40LDAuOSwwLjksMS4zLDEuM2MwLjQtMC40LDAuOS0wLjgsMS4zLTEuM2MwLjItMC4yLDAuMy0wLjMsMC41LTAuNQoJCQlDNzA5LjgsMTc3LjIsNzA3LjgsMTc1LjEsNzA1LjgsMTcyLjh6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTczNC4yLDE3OC4yYy0wLjgsMC4zLTEuNiwwLjYtMi40LDAuOWMzLjEsNi4zLDQsMTEsMi41LDEyLjdjLTAuNCwwLjUtMSwwLjctMS45LDAuNwoJCQljLTMuMywwLTkuNy0zLjMtMTcuNi0xMC41Yy0wLjQtMC40LTAuOS0wLjgtMS4zLTEuMmMtMC40LDAuNC0wLjksMC44LTEuMywxLjNjLTAuMiwwLjItMC4zLDAuMy0wLjUsMC41CgkJCWM4LjIsNy43LDE1LjksMTIuNSwyMC43LDEyLjVjMiwwLDMuMi0wLjksMy44LTEuNkM3MzguNywxOTAuNiw3MzcuNSwxODQuOSw3MzQuMiwxNzguMnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjkyLjgsMTU0LjZjLTAuNC0wLjgtMC44LTEuNS0xLjItMi4zYy0wLjgsMC4zLTEuNiwwLjYtMi40LDAuOWMwLjQsMC44LDAuOCwxLjUsMS4yLDIuMwoJCQlDNjkxLjIsMTU1LjEsNjkyLDE1NC44LDY5Mi44LDE1NC42eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03MzQuMiwxNTMuMWMtMC40LDAuOC0wLjgsMS41LTEuMiwyLjNjNi41LDIuNiwxMC43LDYuMywxMC43LDEwLjNjMCw0LTQuMiw3LjctMTAuNywxMC4zCgkJCWMtMC44LDAuMy0xLjYsMC42LTIuNCwwLjhjLTQuNSwxLjUtMTAsMi40LTE1LjgsMi43Yy0wLjQsMC40LTAuOSwwLjktMS4zLDEuM2MwLjQsMC40LDAuOSwwLjgsMS4zLDEuMmM2LjQtMC4zLDEyLjItMS4zLDE3LTIuOQoJCQljMC44LTAuMywxLjYtMC42LDIuNC0wLjljNy40LTMsMTIuMS03LjUsMTIuMS0xMi41Qzc0Ni4zLDE2MC42LDc0MS43LDE1Ni4xLDczNC4yLDE1My4xeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03MDguNiwxNzkuNWMtNS44LTAuMy0xMS4zLTEuMi0xNS44LTIuN2MtMC44LTAuMy0xLjYtMC41LTIuNC0wLjhjLTYuNS0yLjYtMTAuNy02LjMtMTAuNy0xMC4zCgkJCWMwLTQsNC4yLTcuNywxMC43LTEwLjNjLTAuNC0wLjgtMC44LTEuNS0xLjItMi4zYy03LjQsMy0xMi4xLDcuNS0xMi4xLDEyLjZjMCw1LjEsNC42LDkuNiwxMi4xLDEyLjVjMC44LDAuMywxLjUsMC42LDIuNCwwLjkKCQkJYzQuOSwxLjYsMTAuNywyLjcsMTcsMi45YzAuNC0wLjQsMC45LTAuOCwxLjMtMS4yQzcwOS41LDE4MC40LDcwOS4xLDE4MCw3MDguNiwxNzkuNXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzM2LjIsMTM3LjljLTAuNi0wLjctMS44LTEuNi0zLjgtMS42Yy00LjgsMC0xMi41LDQuOC0yMC43LDEyLjVjMC4yLDAuMiwwLjMsMC4zLDAuNSwwLjUKCQkJYzAuOSwwLDEuNywwLDIuNiwwLjFjNy45LTcuMSwxNC4zLTEwLjUsMTcuNi0xMC41YzAuOSwwLDEuNSwwLjIsMS45LDAuN2MxLjUsMS43LDAuNiw2LjQtMi41LDEyLjdjLTAuNCwwLjctMC44LDEuNS0xLjIsMi4zCgkJCWMtMS41LDIuOC0zLjQsNS44LTUuNyw5YzAuNSwwLjcsMSwxLjQsMS42LDIuMWMyLjUtMy41LDQuNy03LDYuNS0xMC4zYzAuNC0wLjgsMC44LTEuNSwxLjItMi4zCgkJCUM3MzcuNSwxNDYuNSw3MzguNywxNDAuNyw3MzYuMiwxMzcuOXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzIzLjQsMTY1LjdjLTEuNywyLjMtMy42LDQuNy01LjcsNy4xYy0yLDIuMy00LDQuNC01LjksNi4zYzAuMiwwLjIsMC4zLDAuMywwLjUsMC41Yy0wLjIsMC0wLjMsMC0wLjUsMGwwLDAKCQkJYy0wLjIsMC0wLjMsMC0wLjUsMGMtMC40LDAuNC0wLjksMC45LTEuMywxLjNjLTAuNCwwLjQtMC45LDAuOC0xLjMsMS4yYy03LjksNy4xLTE0LjMsMTAuNS0xNy42LDEwLjVjLTAuOSwwLTEuNS0wLjItMS45LTAuNwoJCQljLTEuNS0xLjctMC42LTYuNCwyLjUtMTIuN2MtMC44LTAuMy0xLjYtMC42LTIuNC0wLjljLTMuMyw2LjctNC41LDEyLjQtMiwxNS4yYzAuNiwwLjcsMS44LDEuNiwzLjgsMS42YzQuOCwwLDEyLjUtNC44LDIwLjctMTIuNQoJCQljLTAuMi0wLjItMC4zLTAuMy0wLjUtMC41YzAuMiwwLDAuMywwLDAuNSwwdi0xLjN2MS4zYzAuMiwwLDAuMywwLDAuNSwwYzAuNC0wLjQsMC45LTAuOCwxLjMtMS4zYzAuNS0wLjQsMC45LTAuOSwxLjMtMS4zCgkJCWMxLjYtMS42LDMuMi0zLjMsNC43LTUuMWMxLjktMi4xLDMuNy00LjQsNS40LTYuNkM3MjQuNSwxNjcuMSw3MjQsMTY2LjQsNzIzLjQsMTY1Ljd6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTcxNC44LDE0OS4zYy0wLjgsMC0xLjctMC4xLTIuNi0wLjFjLTAuMiwwLTAuMywwLTAuNSwwYy0wLjIsMC0wLjMsMC0wLjUsMGMtMC45LDAtMS43LDAtMi42LDAuMQoJCQljLTYuNCwwLjMtMTIuMiwxLjMtMTcsMi45YzAuNCwwLjcsMC44LDEuNSwxLjIsMi4zYzQuNS0xLjUsMTAtMi40LDE1LjgtMi43YzAuOSwwLDEuNy0wLjEsMi42LTAuMWMwLjIsMCwwLjMsMCwwLjUsMAoJCQljMC4yLDAsMC4zLDAsMC41LDBjMC45LDAsMS44LDAsMi42LDAuMWM1LjgsMC4zLDExLjMsMS4yLDE1LjgsMi43YzAuNC0wLjgsMC44LTEuNSwxLjItMi4zQzcyNywxNTAuNiw3MjEuMiwxNDkuNiw3MTQuOCwxNDkuM3oiCgkJCS8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTcwNi4yLDE2NS43YzAsMy4xLDIuNSw1LjUsNS41LDUuNWMzLjEsMCw1LjUtMi41LDUuNS01LjVjMC0zLjEtMi41LTUuNS01LjUtNS41CgkJCUM3MDguNywxNjAuMSw3MDYuMiwxNjIuNiw3MDYuMiwxNjUuN3oiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04MDMsOTUuNGMwLDAuOC0wLjYsMS40LTEuMywxLjRoLTM0LjhjLTAuNywwLTEuMy0wLjYtMS4zLTEuNFY1Mi4xYzAtMC44LDAuNi0xLjQsMS4zLTEuNGgzNC44CgkJCWMwLjcsMCwxLjMsMC42LDEuMywxLjRWOTUuNHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODAzLDkyLjNjMCwwLjgtMC42LDEuNC0xLjMsMS40aC0zNC44Yy0wLjcsMC0xLjMtMC42LTEuMy0xLjRWNDkuMWMwLTAuOCwwLjYtMS40LDEuMy0xLjRoMzQuOAoJCQljMC43LDAsMS4zLDAuNiwxLjMsMS40VjkyLjN6Ii8+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik03NzguMiw2OS4xYzAsMC42LTAuNSwxLjItMS4yLDEuMmgtNS4xYy0wLjYsMC0xLjItMC41LTEuMi0xLjJWNjRjMC0wLjYsMC41LTEuMiwxLjItMS4yaDUuMQoJCQkJYzAuNiwwLDEuMiwwLjUsMS4yLDEuMlY2OS4xeiBNNzg3LjgsNjRjMC0wLjYtMC41LTEuMi0xLjItMS4yaC01LjFjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMnY1LjFjMCwwLjYsMC41LDEuMiwxLjIsMS4yaDUuMQoJCQkJYzAuNiwwLDEuMi0wLjUsMS4yLTEuMlY2NHogTTc5Ny41LDY0YzAtMC42LTAuNS0xLjItMS4yLTEuMmgtNS4xYy0wLjYsMC0xLjIsMC41LTEuMiwxLjJ2NS4xYzAsMC42LDAuNSwxLjIsMS4yLDEuMmg1LjEKCQkJCWMwLjYsMCwxLjItMC41LDEuMi0xLjJWNjR6IE03NzguMiw3My43YzAtMC42LTAuNS0xLjItMS4yLTEuMmgtNS4xYy0wLjYsMC0xLjIsMC41LTEuMiwxLjJ2NS4xYzAsMC42LDAuNSwxLjIsMS4yLDEuMmg1LjEKCQkJCWMwLjYsMCwxLjItMC41LDEuMi0xLjJWNzMuN3ogTTc4Ny44LDczLjdjMC0wLjYtMC41LTEuMi0xLjItMS4yaC01LjFjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMnY1LjFjMCwwLjYsMC41LDEuMiwxLjIsMS4yaDUuMQoJCQkJYzAuNiwwLDEuMi0wLjUsMS4yLTEuMlY3My43eiBNNzc4LjIsODMuM2MwLTAuNi0wLjUtMS4yLTEuMi0xLjJoLTUuMWMtMC42LDAtMS4yLDAuNS0xLjIsMS4ydjUuMWMwLDAuNiwwLjUsMS4yLDEuMiwxLjJoNS4xCgkJCQljMC42LDAsMS4yLTAuNSwxLjItMS4yVjgzLjN6IE03ODcuOCw4My4zYzAtMC42LTAuNS0xLjItMS4yLTEuMmgtNS4xYy0wLjYsMC0xLjIsMC41LTEuMiwxLjJ2NS4xYzAsMC42LDAuNSwxLjIsMS4yLDEuMmg1LjEKCQkJCWMwLjYsMCwxLjItMC41LDEuMi0xLjJWODMuM3ogTTc5Ny41LDczLjdjMC0wLjYtMC41LTEuMi0xLjItMS4yaC01LjFjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMnYxNC43YzAsMC42LDAuNSwxLjIsMS4yLDEuMmg1LjEKCQkJCWMwLjYsMCwxLjItMC41LDEuMi0xLjJWNzMuN3oiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik03OTguNyw1Mi45YzAtMC45LTAuNi0xLjctMS4zLTEuN2gtMjYuNWMtMC43LDAtMS4zLDAuOC0xLjMsMS43djQuNmMwLDAuOSwwLjYsMS43LDEuMywxLjdoMjYuNQoJCQkJYzAuNywwLDEuMy0wLjgsMS4zLTEuN1Y1Mi45eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02MjYuNiwzMjEuOWMwLDAuOC0wLjYsMS40LTEuMywxLjRoLTM0LjhjLTAuNywwLTEuMy0wLjYtMS4zLTEuNHYtNDMuM2MwLTAuOCwwLjYtMS40LDEuMy0xLjRoMzQuOAoJCQljMC43LDAsMS4zLDAuNiwxLjMsMS40VjMyMS45eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02MjYuNiwzMTguOWMwLDAuOC0wLjYsMS40LTEuMywxLjRoLTM0LjhjLTAuNywwLTEuMy0wLjYtMS4zLTEuNHYtNDMuM2MwLTAuOCwwLjYtMS40LDEuMy0xLjRoMzQuOAoJCQljMC43LDAsMS4zLDAuNiwxLjMsMS40VjMxOC45eiIvPgoJCTxnPgoJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjAxLjgsMjk1LjZjMCwwLjYtMC41LDEuMi0xLjIsMS4yaC01LjFjLTAuNiwwLTEuMi0wLjUtMS4yLTEuMnYtNS4xYzAtMC42LDAuNS0xLjIsMS4yLTEuMmg1LjEKCQkJCWMwLjYsMCwxLjIsMC41LDEuMiwxLjJWMjk1LjZ6IE02MTEuNCwyOTAuNmMwLTAuNi0wLjUtMS4yLTEuMi0xLjJoLTUuMWMtMC42LDAtMS4yLDAuNS0xLjIsMS4ydjUuMWMwLDAuNiwwLjUsMS4yLDEuMiwxLjJoNS4xCgkJCQljMC42LDAsMS4yLTAuNSwxLjItMS4yVjI5MC42eiBNNjIxLjEsMjkwLjZjMC0wLjYtMC41LTEuMi0xLjItMS4yaC01LjFjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMnY1LjFjMCwwLjYsMC41LDEuMiwxLjIsMS4yaDUuMQoJCQkJYzAuNiwwLDEuMi0wLjUsMS4yLTEuMlYyOTAuNnogTTYwMS44LDMwMC4yYzAtMC42LTAuNS0xLjItMS4yLTEuMmgtNS4xYy0wLjYsMC0xLjIsMC41LTEuMiwxLjJ2NS4xYzAsMC42LDAuNSwxLjIsMS4yLDEuMmg1LjEKCQkJCWMwLjYsMCwxLjItMC41LDEuMi0xLjJWMzAwLjJ6IE02MTEuNCwzMDAuMmMwLTAuNi0wLjUtMS4yLTEuMi0xLjJoLTUuMWMtMC42LDAtMS4yLDAuNS0xLjIsMS4ydjUuMWMwLDAuNiwwLjUsMS4yLDEuMiwxLjJoNS4xCgkJCQljMC42LDAsMS4yLTAuNSwxLjItMS4yVjMwMC4yeiBNNjAxLjgsMzA5LjhjMC0wLjYtMC41LTEuMi0xLjItMS4yaC01LjFjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMnY1LjFjMCwwLjYsMC41LDEuMiwxLjIsMS4yaDUuMQoJCQkJYzAuNiwwLDEuMi0wLjUsMS4yLTEuMlYzMDkuOHogTTYxMS40LDMwOS44YzAtMC42LTAuNS0xLjItMS4yLTEuMmgtNS4xYy0wLjYsMC0xLjIsMC41LTEuMiwxLjJ2NS4xYzAsMC42LDAuNSwxLjIsMS4yLDEuMmg1LjEKCQkJCWMwLjYsMCwxLjItMC41LDEuMi0xLjJWMzA5Ljh6IE02MjEuMSwzMDAuMmMwLTAuNi0wLjUtMS4yLTEuMi0xLjJoLTUuMWMtMC42LDAtMS4yLDAuNS0xLjIsMS4ydjE0LjdjMCwwLjYsMC41LDEuMiwxLjIsMS4yaDUuMQoJCQkJYzAuNiwwLDEuMi0wLjUsMS4yLTEuMlYzMDAuMnoiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02MjIuMywyNzkuNWMwLTAuOS0wLjYtMS43LTEuMy0xLjdoLTI2LjVjLTAuNywwLTEuMywwLjgtMS4zLDEuN3Y0LjZjMCwwLjksMC42LDEuNywxLjMsMS43SDYyMQoJCQkJYzAuNywwLDEuMy0wLjgsMS4zLTEuN1YyNzkuNXoiLz4KCQk8L2c+Cgk8L2c+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNOTAzLjUsNTguNmMtMS40LTIuMy0wLjUtNS41LDAuNC03LjZjMi4zLTIuMSw0LjEtNSw1LjEtOC4zYzAuMywwLjQsMC42LDAuNiwwLjksMC42YzEsMCwxLjgtMiwxLjgtNC40CgkJYzAtMi40LTAuOC00LjQtMS44LTQuNGMwLDAsMCwwLDAsMGMtMC41LTkuMS00LjMtMTYuMS0xNS0xNi4xYy0xMC45LDAtMTQuNSw3LTE1LDE2LjFjMCwwLDAsMC0wLjEsMGMtMSwwLTEuOCwyLTEuOCw0LjQKCQljMCwyLjQsMC44LDQuNCwxLjgsNC40YzAuMywwLDAuNi0wLjIsMC45LTAuNmMxLDMuMywyLjgsNi4yLDUuMSw4LjNjMC45LDIuMSwxLjgsNS4yLDAuNCw3LjZjMCwwLTIzLjYsOC42LTIzLjYsMTguNGg2NC40CgkJQzkyNy4xLDY3LjEsOTAzLjUsNTguNiw5MDMuNSw1OC42eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTc0MC41LDI4NC40Yy0xLjQtMi4zLTAuNS01LjUsMC40LTcuNmMyLjMtMi4xLDQuMS01LDUuMS04LjNjMC4zLDAuNCwwLjYsMC42LDAuOSwwLjZjMSwwLDEuOC0yLDEuOC00LjQKCQljMC0yLjQtMC44LTQuNC0xLjgtNC40YzAsMCwwLDAsMCwwYy0wLjUtOS4xLTQuMy0xNi4xLTE1LTE2LjFjLTEwLjksMC0xNC41LDctMTUsMTYuMWMwLDAsMCwwLTAuMSwwYy0xLDAtMS44LDItMS44LDQuNAoJCWMwLDIuNCwwLjgsNC40LDEuOCw0LjRjMC4zLDAsMC42LTAuMiwwLjktMC42YzEsMy4zLDIuOCw2LjIsNS4xLDguM2MwLjksMi4xLDEuOCw1LjIsMC40LDcuNmMwLDAtMjMuNiw4LjYtMjMuNiwxOC40aDY0LjQKCQlDNzY0LjEsMjkzLDc0MC41LDI4NC40LDc0MC41LDI4NC40eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE0My41LDE4MS4yYy0xLjQtMi4zLTAuNS01LjUsMC40LTcuNmMyLjMtMi4xLDQuMS01LDUuMS04LjNjMC4zLDAuNCwwLjYsMC42LDAuOSwwLjZjMSwwLDEuOC0yLDEuOC00LjQKCQljMC0yLjQtMC44LTQuNC0xLjgtNC40YzAsMCwwLDAsMCwwYy0wLjUtOS4xLTQuMy0xNi4xLTE1LTE2LjFjLTEwLjksMC0xNC41LDctMTUsMTYuMWMwLDAsMCwwLTAuMSwwYy0xLDAtMS44LDItMS44LDQuNAoJCWMwLDIuNCwwLjgsNC40LDEuOCw0LjRjMC4zLDAsMC42LTAuMiwwLjktMC42YzEsMy4zLDIuOCw2LjIsNS4xLDguM2MwLjksMi4xLDEuOCw1LjIsMC40LDcuNmMwLDAtMjMuNiw4LjYtMjMuNiwxOC40aDY0LjQKCQlDMTY3LjEsMTg5LjcsMTQzLjUsMTgxLjIsMTQzLjUsMTgxLjJ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjAxLjgsNTQ3LjZjLTEuNC0yLjMtMC41LTUuNSwwLjQtNy42YzIuMy0yLjEsNC4xLTUsNS4xLTguM2MwLjMsMC40LDAuNiwwLjYsMC45LDAuNmMxLDAsMS44LTIsMS44LTQuNAoJCWMwLTIuNC0wLjgtNC40LTEuOC00LjRjMCwwLDAsMCwwLDBjLTAuNS05LjEtNC4zLTE2LjEtMTUtMTYuMWMtMTAuOSwwLTE0LjUsNy0xNSwxNi4xYzAsMCwwLDAtMC4xLDBjLTEsMC0xLjgsMi0xLjgsNC40CgkJYzAsMi40LDAuOCw0LjQsMS44LDQuNGMwLjMsMCwwLjYtMC4yLDAuOS0wLjZjMSwzLjMsMi44LDYuMiw1LjEsOC4zYzAuOSwyLjEsMS44LDUuMiwwLjQsNy42YzAsMC0yMy42LDguNi0yMy42LDE4LjRoNjQuNAoJCUM2MjUuNCw1NTYuMiw2MDEuOCw1NDcuNiw2MDEuOCw1NDcuNnoiLz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTQwLjUsNDI4LjRjLTAuNCwwLTAuNi0wLjMtMC42LTAuN3YtMS44YzAtMC40LDAuMi0wLjcsMC42LTAuN2MwLjQsMCwwLjYsMC4zLDAuNiwwLjd2MS44CgkJCQlDMTQxLDQyOC4xLDE0MC44LDQyOC40LDE0MC41LDQyOC40eiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTQwLjUsNDIzLjljLTAuNCwwLTAuNi0wLjMtMC42LTAuN3YtMi43YzAtMC40LDAuMi0wLjcsMC42LTAuN2MwLjQsMCwwLjYsMC4zLDAuNiwwLjd2Mi43CgkJCQlDMTQxLDQyMy42LDE0MC44LDQyMy45LDE0MC41LDQyMy45eiBNMTQwLjUsNDE4LjVjLTAuNCwwLTAuNi0wLjMtMC42LTAuN3YtMi43YzAtMC40LDAuMi0wLjcsMC42LTAuN2MwLjQsMCwwLjYsMC4zLDAuNiwwLjd2Mi43CgkJCQlDMTQxLDQxOC4yLDE0MC44LDQxOC41LDE0MC41LDQxOC41eiBNMTQwLjUsNDEzLjFjLTAuNCwwLTAuNi0wLjMtMC42LTAuN3YtMi43YzAtMC40LDAuMi0wLjcsMC42LTAuN2MwLjQsMCwwLjYsMC4zLDAuNiwwLjd2Mi43CgkJCQlDMTQxLDQxMi44LDE0MC44LDQxMy4xLDE0MC41LDQxMy4xeiBNMTQwLjUsNDA3LjdjLTAuNCwwLTAuNi0wLjMtMC42LTAuN3YtMi43YzAtMC40LDAuMi0wLjcsMC42LTAuN2MwLjQsMCwwLjYsMC4zLDAuNiwwLjd2Mi43CgkJCQlDMTQxLDQwNy40LDE0MC44LDQwNy43LDE0MC41LDQwNy43eiBNMTQwLjUsNDAyLjNjLTAuNCwwLTAuNi0wLjMtMC42LTAuN1YzOTljMC0wLjQsMC4yLTAuNywwLjYtMC43YzAuNCwwLDAuNiwwLjMsMC42LDAuN3YyLjcKCQkJCUMxNDEsNDAyLDE0MC44LDQwMi4zLDE0MC41LDQwMi4zeiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTQwLjUsMzk1LjZjLTAuNCwwLTAuNi0wLjMtMC42LTAuN3YtMS44YzAtMC40LDAuMi0wLjcsMC42LTAuN2MwLjQsMCwwLjYsMC4zLDAuNiwwLjd2MS44CgkJCQlDMTQxLDM5NS4zLDE0MC44LDM5NS42LDE0MC41LDM5NS42eiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE3Ni44LDQzMC4xYzAsMC40LTAuMywwLjUtMC43LDAuNWgtMS44Yy0wLjQsMC0wLjctMC4yLTAuNy0wLjVjMC0wLjQsMC4zLTAuNiwwLjctMC42aDEuOAoJCQkJQzE3Ni41LDQyOS41LDE3Ni44LDQyOS43LDE3Ni44LDQzMC4xeiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTcyLjMsNDMwLjFjMCwwLjQtMC4zLDAuNS0wLjcsMC41aC0yLjdjLTAuNCwwLTAuNy0wLjItMC43LTAuNWMwLTAuNCwwLjMtMC42LDAuNy0wLjZoMi43CgkJCQlDMTcyLDQyOS41LDE3Mi4zLDQyOS43LDE3Mi4zLDQzMC4xeiBNMTY2LjksNDMwLjFjMCwwLjQtMC4zLDAuNS0wLjcsMC41aC0yLjdjLTAuNCwwLTAuNy0wLjItMC43LTAuNWMwLTAuNCwwLjMtMC42LDAuNy0wLjZoMi43CgkJCQlDMTY2LjYsNDI5LjUsMTY2LjksNDI5LjcsMTY2LjksNDMwLjF6IE0xNjEuNiw0MzAuMWMwLDAuNC0wLjMsMC41LTAuNywwLjVoLTIuN2MtMC40LDAtMC43LTAuMi0wLjctMC41YzAtMC40LDAuMy0wLjYsMC43LTAuNgoJCQkJaDIuN0MxNjEuMiw0MjkuNSwxNjEuNiw0MjkuNywxNjEuNiw0MzAuMXogTTE1Ni4yLDQzMC4xYzAsMC40LTAuMywwLjUtMC43LDAuNWgtMi43Yy0wLjQsMC0wLjctMC4yLTAuNy0wLjUKCQkJCWMwLTAuNCwwLjMtMC42LDAuNy0wLjZoMi43QzE1NS45LDQyOS41LDE1Ni4yLDQyOS43LDE1Ni4yLDQzMC4xeiBNMTUwLjgsNDMwLjFjMCwwLjQtMC4zLDAuNS0wLjcsMC41aC0yLjcKCQkJCWMtMC40LDAtMC43LTAuMi0wLjctMC41YzAtMC40LDAuMy0wLjYsMC43LTAuNmgyLjdDMTUwLjUsNDI5LjUsMTUwLjgsNDI5LjcsMTUwLjgsNDMwLjF6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNDQsNDMwLjFjMCwwLjQtMC4zLDAuNS0wLjcsMC41aC0xLjhjLTAuNCwwLTAuNy0wLjItMC43LTAuNWMwLTAuNCwwLjMtMC42LDAuNy0wLjZoMS44CgkJCQlDMTQzLjcsNDI5LjUsMTQ0LDQyOS43LDE0NCw0MzAuMXoiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNDAuMSw0MzAuM2MwLjMsMC4zLDAuMiwwLjYtMC4xLDAuOWwtMS45LDEuOWMtMC4zLDAuMy0wLjYsMC40LTAuOSwwLjFjLTAuMy0wLjMtMC4yLTAuNiwwLjEtMC45bDEuOS0xLjkKCQkJCUMxMzkuNSw0MzAuMSwxMzkuOSw0MzAsMTQwLjEsNDMwLjN6IE0xMzYuMyw0MzQuMWMwLjMsMC4zLDAuMiwwLjYtMC4xLDAuOWwtMS45LDEuOWMtMC4zLDAuMy0wLjYsMC40LTAuOSwwLjEKCQkJCWMtMC4zLTAuMy0wLjItMC42LDAuMS0wLjlsMS45LTEuOUMxMzUuNyw0MzMuOSwxMzYuMSw0MzMuOCwxMzYuMyw0MzQuMXogTTEzMi41LDQzNy45YzAuMywwLjMsMC4yLDAuNi0wLjEsMC45bC0xLjksMS45CgkJCQljLTAuMywwLjMtMC42LDAuMy0wLjksMC4xYy0wLjMtMC4zLTAuMi0wLjYsMC4xLTAuOWwxLjktMS45QzEzMS45LDQzNy43LDEzMi4zLDQzNy42LDEzMi41LDQzNy45eiIvPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTI3LjgsNDQyLjZjMC4zLDAuMywwLjIsMC42LTAuMSwwLjlsLTEuMywxLjNjLTAuMywwLjMtMC42LDAuMy0wLjksMC4xYy0wLjMtMC4zLTAuMi0wLjYsMC4xLTAuOWwxLjMtMS4zCgkJCQlDMTI3LjIsNDQyLjUsMTI3LjUsNDQyLjQsMTI3LjgsNDQyLjZ6Ii8+CgkJPC9nPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNjMuNCw0MDguMmgtMzcuN2MtMC41LDAtMC45LTAuMi0xLTAuNmMtMC4yLTAuNC0wLjEtMC45LDAuMi0xLjJsMTQuNC0xNC40YzAuMi0wLjIsMC41LTAuMywwLjgtMC4zaDM3LjcKCQkJYzAuNSwwLDAuOSwwLjMsMSwwLjdjMC4yLDAuNCwwLjEsMC45LTAuMiwxLjJMMTY0LjIsNDA4QzE2NCw0MDguMiwxNjMuNyw0MDguMiwxNjMuNCw0MDguMnogTTEyOC40LDQwNkgxNjNsMTIuMS0xMi4xaC0zNC41CgkJCUwxMjguNCw0MDZ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE2NC43LDQ0NWMwLDAuNi0wLjUsMS4xLTEuMSwxLjFoLTM3LjljLTAuNiwwLTEuMS0wLjUtMS4xLTEuMXYtMzcuOWMwLTAuNiwwLjUtMS4xLDEuMS0xLjFoMzcuOQoJCQljMC42LDAsMS4xLDAuNSwxLjEsMS4xVjQ0NXogTTEyNi43LDQ0NGgzNS43di0zNS44aC0zNS43VjQ0NHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTYzLjQsNDQ2LjJoLTM3LjdjLTAuNiwwLTEuMi0wLjYtMS4yLTEuMnYtMzcuN2MwLTAuMywwLjItMC42LDAuNC0wLjhsMTQuNC0xNC40YzAuMi0wLjIsMC41LTAuNCwwLjgtMC40CgkJCWgzNy43YzAuNiwwLDEuMiwwLjYsMS4yLDEuMnYzNy43YzAsMC4zLTAuMiwwLjYtMC40LDAuOGwtMTQuNCwxNC40QzE2NCw0NDYsMTYzLjcsNDQ2LjIsMTYzLjQsNDQ2LjJ6IE0xMjYuNyw0NDRIMTYzbDEzLjgtMTMuOAoJCQl2LTM2LjJoLTM2LjJsLTEzLjgsMTMuOFY0NDR6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE0Ni41LDQyNi45Yy0wLjItMC41LDAtMS45LDAuMi0zLjFsMS40LTcuM2MwLjQtMi40LDEuMi0zLjYsMi00LjNjMC43LTAuNiwxLjUtMSwyLjctMQoJCQljMS45LDAsMi45LDEuMiwyLjksMi43YzAsMS40LTAuOCwyLjQtMS44LDIuOWwwLDAuMWMwLjksMC4zLDEuNywxLjMsMS43LDIuN2MwLDIuMy0xLjksMy44LTMuOSwzLjhjLTEsMC0xLjgtMC4zLTIuMy0wLjloMAoJCQlsLTAuMiwxLjJjLTAuMiwxLTAuNCwyLjEtMC4zLDMuMkgxNDYuNXogTTE1MS41LDQxNi41YzAuMSwwLDAuMiwwLDAuMywwYzAuOS0wLjIsMS42LTAuOSwxLjYtMi4xYzAtMC43LTAuNC0xLjItMS0xLjIKCQkJYy0wLjgsMC0xLjUsMC44LTEuOSwyLjhsLTAuOSw0LjljMC4zLDAuNSwwLjksMC45LDEuNiwwLjljMS4xLDAsMS45LTAuOSwxLjktMi4xYzAtMC45LTAuNi0xLjUtMS41LTEuN2MtMC4xLDAtMC4yLDAtMC40LDAKCQkJTDE1MS41LDQxNi41eiIvPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMzIuNiw1MzhjLTAuNCwwLTAuNi0wLjMtMC42LTAuN3YtMS44YzAtMC40LDAuMi0wLjcsMC42LTAuN2MwLjQsMCwwLjYsMC4zLDAuNiwwLjd2MS44CgkJCQlDMzMzLjEsNTM3LjcsMzMyLjksNTM4LDMzMi42LDUzOHoiLz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTMzMi42LDUzMy41Yy0wLjQsMC0wLjYtMC4zLTAuNi0wLjd2LTIuN2MwLTAuNCwwLjItMC43LDAuNi0wLjdjMC40LDAsMC42LDAuMywwLjYsMC43djIuNwoJCQkJQzMzMy4xLDUzMy4yLDMzMi45LDUzMy41LDMzMi42LDUzMy41eiBNMzMyLjYsNTI4LjJjLTAuNCwwLTAuNi0wLjMtMC42LTAuN3YtMi43YzAtMC40LDAuMi0wLjcsMC42LTAuN2MwLjQsMCwwLjYsMC4zLDAuNiwwLjcKCQkJCXYyLjdDMzMzLjEsNTI3LjksMzMyLjksNTI4LjIsMzMyLjYsNTI4LjJ6IE0zMzIuNiw1MjIuOGMtMC40LDAtMC42LTAuMy0wLjYtMC43di0yLjdjMC0wLjQsMC4yLTAuNywwLjYtMC43CgkJCQljMC40LDAsMC42LDAuMywwLjYsMC43djIuN0MzMzMuMSw1MjIuNSwzMzIuOSw1MjIuOCwzMzIuNiw1MjIuOHogTTMzMi42LDUxNy40Yy0wLjQsMC0wLjYtMC4zLTAuNi0wLjdWNTE0CgkJCQljMC0wLjQsMC4yLTAuNywwLjYtMC43YzAuNCwwLDAuNiwwLjMsMC42LDAuN3YyLjdDMzMzLjEsNTE3LjEsMzMyLjksNTE3LjQsMzMyLjYsNTE3LjR6IE0zMzIuNiw1MTJjLTAuNCwwLTAuNi0wLjMtMC42LTAuN3YtMi43CgkJCQljMC0wLjQsMC4yLTAuNywwLjYtMC43YzAuNCwwLDAuNiwwLjMsMC42LDAuN3YyLjdDMzMzLjEsNTExLjcsMzMyLjksNTEyLDMzMi42LDUxMnoiLz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTMzMi42LDUwNS4zYy0wLjQsMC0wLjYtMC4zLTAuNi0wLjd2LTEuOGMwLTAuNCwwLjItMC43LDAuNi0wLjdjMC40LDAsMC42LDAuMywwLjYsMC43djEuOAoJCQkJQzMzMy4xLDUwNSwzMzIuOSw1MDUuMywzMzIuNiw1MDUuM3oiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNjguOSw1MzkuOGMwLDAuNC0wLjMsMC41LTAuNywwLjVoLTEuOGMtMC40LDAtMC43LTAuMi0wLjctMC41YzAtMC40LDAuMy0wLjYsMC43LTAuNmgxLjgKCQkJCUMzNjguNiw1MzkuMiwzNjguOSw1MzkuNCwzNjguOSw1MzkuOHoiLz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM2NC40LDUzOS44YzAsMC40LTAuMywwLjUtMC43LDAuNUgzNjFjLTAuNCwwLTAuNy0wLjItMC43LTAuNWMwLTAuNCwwLjMtMC42LDAuNy0wLjZoMi43CgkJCQlDMzY0LjEsNTM5LjIsMzY0LjQsNTM5LjQsMzY0LjQsNTM5Ljh6IE0zNTksNTM5LjhjMCwwLjQtMC4zLDAuNS0wLjcsMC41aC0yLjdjLTAuNCwwLTAuNy0wLjItMC43LTAuNWMwLTAuNCwwLjMtMC42LDAuNy0wLjZoMi43CgkJCQlDMzU4LjcsNTM5LjIsMzU5LDUzOS40LDM1OSw1MzkuOHogTTM1My42LDUzOS44YzAsMC40LTAuMywwLjUtMC43LDAuNWgtMi43Yy0wLjQsMC0wLjctMC4yLTAuNy0wLjVjMC0wLjQsMC4zLTAuNiwwLjctMC42aDIuNwoJCQkJQzM1My4zLDUzOS4yLDM1My42LDUzOS40LDM1My42LDUzOS44eiBNMzQ4LjMsNTM5LjhjMCwwLjQtMC4zLDAuNS0wLjcsMC41aC0yLjdjLTAuNCwwLTAuNy0wLjItMC43LTAuNWMwLTAuNCwwLjMtMC42LDAuNy0wLjYKCQkJCWgyLjdDMzQ4LDUzOS4yLDM0OC4zLDUzOS40LDM0OC4zLDUzOS44eiBNMzQyLjksNTM5LjhjMCwwLjQtMC4zLDAuNS0wLjcsMC41aC0yLjdjLTAuNCwwLTAuNy0wLjItMC43LTAuNWMwLTAuNCwwLjMtMC42LDAuNy0wLjYKCQkJCWgyLjdDMzQyLjYsNTM5LjIsMzQyLjksNTM5LjQsMzQyLjksNTM5Ljh6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMzYuMSw1MzkuOGMwLDAuNC0wLjMsMC41LTAuNywwLjVoLTEuOGMtMC40LDAtMC43LTAuMi0wLjctMC41YzAtMC40LDAuMy0wLjYsMC43LTAuNmgxLjgKCQkJCUMzMzUuOCw1MzkuMiwzMzYuMSw1MzkuNCwzMzYuMSw1MzkuOHoiLz4KCQk8L2c+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMzIuMiw1MzkuOWMwLjMsMC4zLDAuMiwwLjYtMC4xLDAuOWwtMS45LDEuOWMtMC4zLDAuMy0wLjYsMC40LTAuOSwwLjFjLTAuMy0wLjMtMC4yLTAuNiwwLjEtMC45bDEuOS0xLjkKCQkJCUMzMzEuNiw1MzkuOCwzMzIsNTM5LjcsMzMyLjIsNTM5Ljl6IE0zMjguNCw1NDMuN2MwLjMsMC4zLDAuMiwwLjYtMC4xLDAuOWwtMS45LDEuOWMtMC4zLDAuMy0wLjYsMC40LTAuOSwwLjEKCQkJCWMtMC4zLTAuMy0wLjItMC42LDAuMS0wLjlsMS45LTEuOUMzMjcuOCw1NDMuNiwzMjguMiw1NDMuNSwzMjguNCw1NDMuN3ogTTMyNC42LDU0Ny41YzAuMywwLjMsMC4yLDAuNi0wLjEsMC45bC0xLjksMS45CgkJCQljLTAuMywwLjMtMC42LDAuMy0wLjksMC4xYy0wLjMtMC4zLTAuMi0wLjYsMC4xLTAuOWwxLjktMS45QzMyNCw1NDcuNCwzMjQuNCw1NDcuMywzMjQuNiw1NDcuNXoiLz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTMxOS45LDU1Mi4zYzAuMywwLjMsMC4yLDAuNi0wLjEsMC45bC0xLjMsMS4zYy0wLjMsMC4zLTAuNiwwLjMtMC45LDAuMWMtMC4zLTAuMy0wLjItMC42LDAuMS0wLjlsMS4zLTEuMwoJCQkJQzMxOS4zLDU1Mi4xLDMxOS42LDU1MiwzMTkuOSw1NTIuM3oiLz4KCQk8L2c+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM1NS41LDUxNy45aC0zNy43Yy0wLjUsMC0wLjktMC4yLTEtMC42Yy0wLjItMC40LTAuMS0wLjksMC4yLTEuMmwxNC40LTE0LjRjMC4yLTAuMiwwLjUtMC4zLDAuOC0wLjNoMzcuNwoJCQljMC41LDAsMC45LDAuMywxLDAuN2MwLjIsMC40LDAuMSwwLjktMC4yLDEuMmwtMTQuNCwxNC4zQzM1Ni4xLDUxNy44LDM1NS44LDUxNy45LDM1NS41LDUxNy45eiBNMzIwLjUsNTE1LjdIMzU1bDEyLjEtMTIuMWgtMzQuNQoJCQlMMzIwLjUsNTE1Ljd6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM1Ni44LDU1NC43YzAsMC42LTAuNSwxLjEtMS4xLDEuMWgtMzcuOWMtMC42LDAtMS4xLTAuNS0xLjEtMS4xdi0zNy45YzAtMC42LDAuNS0xLjEsMS4xLTEuMWgzNy45CgkJCWMwLjYsMCwxLjEsMC41LDEuMSwxLjFWNTU0Ljd6IE0zMTguOCw1NTMuNmgzNS43di0zNS44aC0zNS43VjU1My42eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNTUuNSw1NTUuOGgtMzcuN2MtMC42LDAtMS4yLTAuNi0xLjItMS4ydi0zNy43YzAtMC4zLDAuMi0wLjYsMC40LTAuOGwxNC40LTE0LjRjMC4yLTAuMiwwLjUtMC40LDAuOC0wLjQKCQkJaDM3LjdjMC42LDAsMS4yLDAuNiwxLjIsMS4ydjM3LjdjMCwwLjMtMC4yLDAuNi0wLjQsMC44bC0xNC40LDE0LjRDMzU2LjEsNTU1LjcsMzU1LjgsNTU1LjgsMzU1LjUsNTU1Ljh6IE0zMTguOCw1NTMuNkgzNTUKCQkJbDEzLjgtMTMuOHYtMzYuMmgtMzYuMmwtMTMuOCwxMy44VjU1My42eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMzguNiw1MzYuNmMtMC4yLTAuNSwwLTEuOSwwLjItMy4xbDEuNC03LjNjMC40LTIuNCwxLjItMy42LDItNC4zYzAuNy0wLjYsMS41LTEsMi43LTEKCQkJYzEuOSwwLDIuOSwxLjIsMi45LDIuN2MwLDEuNC0wLjgsMi40LTEuOCwyLjlsMCwwLjFjMC45LDAuMywxLjcsMS4zLDEuNywyLjdjMCwyLjMtMS45LDMuOC0zLjksMy44Yy0xLDAtMS44LTAuMy0yLjMtMC45aDAKCQkJbC0wLjIsMS4yYy0wLjIsMS0wLjQsMi4xLTAuMywzLjJIMzM4LjZ6IE0zNDMuNiw1MjYuMWMwLjEsMCwwLjIsMCwwLjMsMGMwLjktMC4yLDEuNi0wLjksMS42LTIuMWMwLTAuNy0wLjQtMS4yLTEtMS4yCgkJCWMtMC44LDAtMS41LDAuOC0xLjksMi44bC0wLjksNC45YzAuMywwLjUsMC45LDAuOSwxLjYsMC45YzEuMSwwLDEuOS0wLjksMS45LTIuMWMwLTAuOS0wLjYtMS41LTEuNS0xLjdjLTAuMSwwLTAuMiwwLTAuNCwwCgkJCUwzNDMuNiw1MjYuMXoiLz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjQuNiw2NTEuMmMtMC40LDAtMC42LTAuMy0wLjYtMC43di0xLjhjMC0wLjQsMC4yLTAuNywwLjYtMC43YzAuNCwwLDAuNiwwLjMsMC42LDAuN3YxLjgKCQkJCUMyNS4xLDY1MC45LDI1LDY1MS4yLDI0LjYsNjUxLjJ6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNC42LDY0Ni43Yy0wLjQsMC0wLjYtMC4zLTAuNi0wLjd2LTIuN2MwLTAuNCwwLjItMC43LDAuNi0wLjdjMC40LDAsMC42LDAuMywwLjYsMC43djIuNwoJCQkJQzI1LjEsNjQ2LjQsMjUsNjQ2LjcsMjQuNiw2NDYuN3ogTTI0LjYsNjQxLjNjLTAuNCwwLTAuNi0wLjMtMC42LTAuN3YtMi43YzAtMC40LDAuMi0wLjcsMC42LTAuN2MwLjQsMCwwLjYsMC4zLDAuNiwwLjd2Mi43CgkJCQlDMjUuMSw2NDEsMjUsNjQxLjMsMjQuNiw2NDEuM3ogTTI0LjYsNjM1LjljLTAuNCwwLTAuNi0wLjMtMC42LTAuN3YtMi43YzAtMC40LDAuMi0wLjcsMC42LTAuN2MwLjQsMCwwLjYsMC4zLDAuNiwwLjd2Mi43CgkJCQlDMjUuMSw2MzUuNiwyNSw2MzUuOSwyNC42LDYzNS45eiBNMjQuNiw2MzAuNWMtMC40LDAtMC42LTAuMy0wLjYtMC43di0yLjdjMC0wLjQsMC4yLTAuNywwLjYtMC43YzAuNCwwLDAuNiwwLjMsMC42LDAuN3YyLjcKCQkJCUMyNS4xLDYzMC4yLDI1LDYzMC41LDI0LjYsNjMwLjV6IE0yNC42LDYyNS4xYy0wLjQsMC0wLjYtMC4zLTAuNi0wLjd2LTIuN2MwLTAuNCwwLjItMC43LDAuNi0wLjdjMC40LDAsMC42LDAuMywwLjYsMC43djIuNwoJCQkJQzI1LjEsNjI0LjgsMjUsNjI1LjEsMjQuNiw2MjUuMXoiLz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI0LjYsNjE4LjRjLTAuNCwwLTAuNi0wLjMtMC42LTAuN3YtMS44YzAtMC40LDAuMi0wLjcsMC42LTAuN2MwLjQsMCwwLjYsMC4zLDAuNiwwLjd2MS44CgkJCQlDMjUuMSw2MTguMSwyNSw2MTguNCwyNC42LDYxOC40eiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTYwLjksNjUyLjljMCwwLjQtMC4zLDAuNS0wLjcsMC41aC0xLjhjLTAuNCwwLTAuNy0wLjItMC43LTAuNWMwLTAuNCwwLjMtMC42LDAuNy0wLjZoMS44CgkJCQlDNjAuNiw2NTIuNCw2MC45LDY1Mi41LDYwLjksNjUyLjl6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01Ni40LDY1Mi45YzAsMC40LTAuMywwLjUtMC43LDAuNWgtMi43Yy0wLjQsMC0wLjctMC4yLTAuNy0wLjVjMC0wLjQsMC4zLTAuNiwwLjctMC42aDIuNwoJCQkJQzU2LjEsNjUyLjQsNTYuNCw2NTIuNSw1Ni40LDY1Mi45eiBNNTEsNjUyLjljMCwwLjQtMC4zLDAuNS0wLjcsMC41aC0yLjdjLTAuNCwwLTAuNy0wLjItMC43LTAuNWMwLTAuNCwwLjMtMC42LDAuNy0wLjZoMi43CgkJCQlDNTAuNyw2NTIuNCw1MSw2NTIuNSw1MSw2NTIuOXogTTQ1LjcsNjUyLjljMCwwLjQtMC4zLDAuNS0wLjcsMC41aC0yLjdjLTAuNCwwLTAuNy0wLjItMC43LTAuNWMwLTAuNCwwLjMtMC42LDAuNy0wLjZINDUKCQkJCUM0NS40LDY1Mi40LDQ1LjcsNjUyLjUsNDUuNyw2NTIuOXogTTQwLjMsNjUyLjljMCwwLjQtMC4zLDAuNS0wLjcsMC41aC0yLjdjLTAuNCwwLTAuNy0wLjItMC43LTAuNWMwLTAuNCwwLjMtMC42LDAuNy0wLjZoMi43CgkJCQlDNDAsNjUyLjQsNDAuMyw2NTIuNSw0MC4zLDY1Mi45eiBNMzQuOSw2NTIuOWMwLDAuNC0wLjMsMC41LTAuNywwLjVoLTIuN2MtMC40LDAtMC43LTAuMi0wLjctMC41YzAtMC40LDAuMy0wLjYsMC43LTAuNmgyLjcKCQkJCUMzNC42LDY1Mi40LDM0LjksNjUyLjUsMzQuOSw2NTIuOXoiLz4KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI4LjIsNjUyLjljMCwwLjQtMC4zLDAuNS0wLjcsMC41aC0xLjhjLTAuNCwwLTAuNy0wLjItMC43LTAuNWMwLTAuNCwwLjMtMC42LDAuNy0wLjZoMS44CgkJCQlDMjcuOSw2NTIuNCwyOC4yLDY1Mi41LDI4LjIsNjUyLjl6Ii8+CgkJPC9nPgoJCTxnPgoJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjQuMyw2NTMuMWMwLjMsMC4zLDAuMiwwLjYtMC4xLDAuOWwtMS45LDEuOWMtMC4zLDAuMy0wLjYsMC40LTAuOSwwLjFjLTAuMy0wLjMtMC4yLTAuNiwwLjEtMC45bDEuOS0xLjkKCQkJCUMyMy42LDY1Mi45LDI0LDY1Mi44LDI0LjMsNjUzLjF6IE0yMC40LDY1Ni45YzAuMywwLjMsMC4yLDAuNi0wLjEsMC45bC0xLjksMS45Yy0wLjMsMC4zLTAuNiwwLjQtMC45LDAuMQoJCQkJYy0wLjMtMC4zLTAuMi0wLjYsMC4xLTAuOWwxLjktMS45QzE5LjgsNjU2LjcsMjAuMiw2NTYuNiwyMC40LDY1Ni45eiBNMTYuNiw2NjAuN2MwLjMsMC4zLDAuMiwwLjYtMC4xLDAuOWwtMS45LDEuOQoJCQkJYy0wLjMsMC4zLTAuNiwwLjMtMC45LDAuMWMtMC4zLTAuMy0wLjItMC42LDAuMS0wLjlsMS45LTEuOUMxNiw2NjAuNSwxNi40LDY2MC40LDE2LjYsNjYwLjd6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMS45LDY2NS40YzAuMywwLjMsMC4yLDAuNi0wLjEsMC45bC0xLjMsMS4zYy0wLjMsMC4zLTAuNiwwLjMtMC45LDAuMWMtMC4zLTAuMy0wLjItMC42LDAuMS0wLjlsMS4zLTEuMwoJCQkJQzExLjMsNjY1LjMsMTEuNiw2NjUuMiwxMS45LDY2NS40eiIvPgoJCTwvZz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDcuNSw2MzFIOS44Yy0wLjUsMC0wLjktMC4yLTEtMC42Yy0wLjItMC40LTAuMS0wLjksMC4yLTEuMmwxNC40LTE0LjRjMC4yLTAuMiwwLjUtMC4zLDAuOC0wLjNoMzcuNwoJCQljMC41LDAsMC45LDAuMywxLDAuN2MwLjIsMC40LDAuMSwwLjktMC4yLDEuMmwtMTQuNCwxNC4zQzQ4LjEsNjMxLDQ3LjgsNjMxLDQ3LjUsNjMxeiBNMTIuNiw2MjguOGgzNC41bDEyLjEtMTIuMUgyNC43CgkJCUwxMi42LDYyOC44eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00OC44LDY2Ny45YzAsMC42LTAuNSwxLjEtMS4xLDEuMUg5LjhjLTAuNiwwLTEuMS0wLjUtMS4xLTEuMXYtMzcuOWMwLTAuNiwwLjUtMS4xLDEuMS0xLjFoMzcuOQoJCQljMC42LDAsMS4xLDAuNSwxLjEsMS4xVjY2Ny45eiBNMTAuOCw2NjYuOGgzNS43VjYzMUgxMC44VjY2Ni44eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00Ny41LDY2OUg5LjhjLTAuNiwwLTEuMi0wLjYtMS4yLTEuMnYtMzcuN2MwLTAuMywwLjItMC42LDAuNC0wLjhsMTQuNC0xNC40YzAuMi0wLjIsMC41LTAuNCwwLjgtMC40aDM3LjcKCQkJYzAuNiwwLDEuMiwwLjYsMS4yLDEuMnYzNy43YzAsMC4zLTAuMiwwLjYtMC40LDAuOGwtMTQuNCwxNC40QzQ4LjEsNjY4LjgsNDcuOCw2NjksNDcuNSw2Njl6IE0xMC44LDY2Ni44aDM2LjJsMTMuOC0xMy44di0zNi4yCgkJCUgyNC43bC0xMy44LDEzLjhWNjY2Ljh6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTMwLjcsNjQ5LjdjLTAuMi0wLjUsMC0xLjksMC4yLTMuMWwxLjQtNy4zYzAuNC0yLjQsMS4yLTMuNiwyLTQuM2MwLjctMC42LDEuNS0xLDIuNy0xCgkJCWMxLjksMCwyLjksMS4yLDIuOSwyLjdjMCwxLjQtMC44LDIuNC0xLjgsMi45bDAsMC4xYzAuOSwwLjMsMS43LDEuMywxLjcsMi43YzAsMi4zLTEuOSwzLjgtMy45LDMuOGMtMSwwLTEuOC0wLjMtMi4zLTAuOWgwCgkJCWwtMC4yLDEuMmMtMC4yLDEtMC40LDIuMS0wLjMsMy4ySDMwLjd6IE0zNS42LDYzOS4zYzAuMSwwLDAuMiwwLDAuMywwYzAuOS0wLjIsMS42LTAuOSwxLjYtMi4xYzAtMC43LTAuNC0xLjItMS0xLjIKCQkJYy0wLjgsMC0xLjUsMC44LTEuOSwyLjhsLTAuOSw0LjljMC4zLDAuNSwwLjksMC45LDEuNiwwLjljMS4xLDAsMS45LTAuOSwxLjktMi4xYzAtMC45LTAuNi0xLjUtMS41LTEuN2MtMC4xLDAtMC4yLDAtMC40LDAKCQkJTDM1LjYsNjM5LjN6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjU5LjcsNDczLjQgNC41LDQ3My40IDAuMiw0NzcuOSA2NC42LDQ3Ny44IAkJIi8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY0LjgsNDc4LjVjMCwwLjYtMC40LDEtMC45LDFIMC45Yy0wLjUsMC0wLjktMC41LTAuOS0xbDAsMGMwLTAuNiwwLjQtMSwwLjktMWg2My4xCgkJCUM2NC40LDQ3Ny41LDY0LjgsNDc4LDY0LjgsNDc4LjVMNjQuOCw0NzguNXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTguNSw0MzUuMWMwLDAuNC0wLjMsMC42LTAuNywwLjZINy40Yy0wLjQsMC0wLjctMC4zLTAuNy0wLjZsMCwwYzAtMC40LDAuMy0wLjYsMC43LTAuNmg1MC40CgkJCUM1OC4yLDQzNC41LDU4LjUsNDM0LjgsNTguNSw0MzUuMUw1OC41LDQzNS4xeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01OC41LDQ0Mi4yYzAsMC4zLTAuMywwLjYtMC43LDAuNkg3LjRjLTAuNCwwLTAuNy0wLjMtMC43LTAuNmwwLDBjMC0wLjQsMC4zLTAuNiwwLjctMC42aDUwLjQKCQkJQzU4LjIsNDQxLjUsNTguNSw0NDEuOCw1OC41LDQ0Mi4yTDU4LjUsNDQyLjJ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTU4LjUsNDQ5LjJjMCwwLjQtMC4zLDAuNi0wLjcsMC42SDcuNGMtMC40LDAtMC43LTAuMy0wLjctMC42bDAsMGMwLTAuNCwwLjMtMC42LDAuNy0wLjZoNTAuNAoJCQlDNTguMiw0NDguNSw1OC41LDQ0OC44LDU4LjUsNDQ5LjJMNTguNSw0NDkuMnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTguNSw0NTYuMmMwLDAuNC0wLjMsMC42LTAuNywwLjZINy40Yy0wLjQsMC0wLjctMC4zLTAuNy0wLjZsMCwwYzAtMC40LDAuMy0wLjYsMC43LTAuNmg1MC40CgkJCUM1OC4yLDQ1NS42LDU4LjUsNDU1LjksNTguNSw0NTYuMkw1OC41LDQ1Ni4yeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01OC41LDQ2My4zYzAsMC4zLTAuMywwLjYtMC43LDAuNkg3LjRjLTAuNCwwLTAuNy0wLjMtMC43LTAuNmwwLDBjMC0wLjQsMC4zLTAuNiwwLjctMC42aDUwLjQKCQkJQzU4LjIsNDYyLjYsNTguNSw0NjIuOSw1OC41LDQ2My4zTDU4LjUsNDYzLjN6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTksNDI3LjljMC0wLjYtMC41LTEuMi0xLjItMS4ySDUuN2MtMC42LDAtMS4yLDAuNS0xLjIsMS4ydjQ2LjhjMCwwLjYsMC41LDEuMiwxLjIsMS4yaDIuMQoJCQljMC42LDAsMS4yLTAuNSwxLjItMS4yVjQyNy45eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02MC4zLDQyNy45YzAtMC42LTAuNS0xLjItMS4yLTEuMkg1N2MtMC42LDAtMS4xLDAuNS0xLjEsMS4ydjQ2LjhjMCwwLjYsMC41LDEuMiwxLjEsMS4yaDIuMQoJCQljMC42LDAsMS4yLTAuNSwxLjItMS4yVjQyNy45eiIvPgoJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE0LjUiIGN5PSI0MzUuMSIgcj0iMy4yIi8+CgkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMjIuMSIgY3k9IjQzNS4xIiByPSIzLjIiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIzMCIgY3k9IjQzNS4xIiByPSIzLjIiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIzNy4xIiBjeT0iNDM1LjEiIHI9IjMuMiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01My44LDQ0Mi4yYzAsMS44LTEuNSwzLjItMy4yLDMuMmMtMS44LDAtMy4yLTEuNC0zLjItMy4yYzAtMS44LDEuNS0zLjIsMy4yLTMuMgoJCQlDNTIuNCw0MzguOSw1My44LDQ0MC40LDUzLjgsNDQyLjJ6Ii8+CgkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iNDIuOSIgY3k9IjQ0Mi4yIiByPSIzLjIiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIzMi42IiBjeT0iNDYzLjMiIHI9IjMuMiIvPgoJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjQzLjUiIGN5PSI0NjMuMyIgcj0iMy4yIi8+CgkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzQuNSIgY3k9IjQ0Mi4yIiByPSIzLjIiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjUuNiw0NDkuMmMwLDEuOC0xLjQsMy4yLTMuMiwzLjJjLTEuOCwwLTMuMi0xLjQtMy4yLTMuMmMwLTEuOCwxLjUtMy4yLDMuMi0zLjIKCQkJQzI0LjEsNDQ2LDI1LjYsNDQ3LjQsMjUuNiw0NDkuMnoiLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iMTMuOCIgY3k9IjQ1Ni4yIiByeD0iMy4yIiByeT0iMy4yIi8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjI0LjgiIGN5PSI0NTYuMiIgcng9IjMuMiIgcnk9IjMuMiIvPgoJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjM1LjgiIGN5PSI0NTYuMiIgcj0iMy4yIi8+CgkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzAuMSIgY3k9IjQ0OS4yIiByPSIzLjIiLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iNDQuNCIgY3k9IjQ0OS4yIiByeD0iMy4yIiByeT0iMy4yIi8+Cgk8L2c+Cgk8Zz4KCQk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjM2MC43LDY3My4yIDMwNS41LDY3My4yIDMwMS4yLDY3Ny43IDM2NS42LDY3Ny42IAkJIi8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM2NS44LDY3OC4zYzAsMC42LTAuNCwxLTAuOSwxaC02My4xYy0wLjUsMC0wLjktMC41LTAuOS0xbDAsMGMwLTAuNiwwLjQtMSwwLjktMWg2My4xCgkJCUMzNjUuNCw2NzcuMywzNjUuOCw2NzcuNywzNjUuOCw2NzguM0wzNjUuOCw2NzguM3oiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzU5LjUsNjM0LjljMCwwLjQtMC4zLDAuNi0wLjcsMC42aC01MC40Yy0wLjQsMC0wLjctMC4zLTAuNy0wLjZsMCwwYzAtMC40LDAuMy0wLjYsMC43LTAuNmg1MC40CgkJCUMzNTkuMiw2MzQuMiwzNTkuNSw2MzQuNSwzNTkuNSw2MzQuOUwzNTkuNSw2MzQuOXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzU5LjUsNjQxLjljMCwwLjMtMC4zLDAuNi0wLjcsMC42aC01MC40Yy0wLjQsMC0wLjctMC4zLTAuNy0wLjZsMCwwYzAtMC40LDAuMy0wLjYsMC43LTAuNmg1MC40CgkJCUMzNTkuMiw2NDEuMywzNTkuNSw2NDEuNiwzNTkuNSw2NDEuOUwzNTkuNSw2NDEuOXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzU5LjUsNjQ4LjljMCwwLjQtMC4zLDAuNi0wLjcsMC42aC01MC40Yy0wLjQsMC0wLjctMC4zLTAuNy0wLjZsMCwwYzAtMC40LDAuMy0wLjYsMC43LTAuNmg1MC40CgkJCUMzNTkuMiw2NDguMywzNTkuNSw2NDguNiwzNTkuNSw2NDguOUwzNTkuNSw2NDguOXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzU5LjUsNjU2YzAsMC40LTAuMywwLjYtMC43LDAuNmgtNTAuNGMtMC40LDAtMC43LTAuMy0wLjctMC42bDAsMGMwLTAuNCwwLjMtMC42LDAuNy0wLjZoNTAuNAoJCQlDMzU5LjIsNjU1LjMsMzU5LjUsNjU1LjYsMzU5LjUsNjU2TDM1OS41LDY1NnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzU5LjUsNjYzYzAsMC4zLTAuMywwLjYtMC43LDAuNmgtNTAuNGMtMC40LDAtMC43LTAuMy0wLjctMC42bDAsMGMwLTAuNCwwLjMtMC42LDAuNy0wLjZoNTAuNAoJCQlDMzU5LjIsNjYyLjQsMzU5LjUsNjYyLjYsMzU5LjUsNjYzTDM1OS41LDY2M3oiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzEwLDYyNy43YzAtMC42LTAuNS0xLjItMS4yLTEuMmgtMi4xYy0wLjYsMC0xLjIsMC41LTEuMiwxLjJ2NDYuOGMwLDAuNiwwLjUsMS4yLDEuMiwxLjJoMi4xCgkJCWMwLjYsMCwxLjItMC41LDEuMi0xLjJWNjI3Ljd6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM2MS4zLDYyNy43YzAtMC42LTAuNS0xLjItMS4yLTEuMkgzNThjLTAuNiwwLTEuMSwwLjUtMS4xLDEuMnY0Ni44YzAsMC42LDAuNSwxLjIsMS4xLDEuMmgyLjEKCQkJYzAuNiwwLDEuMi0wLjUsMS4yLTEuMlY2MjcuN3oiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIzMTUuNSIgY3k9IjYzNC45IiByPSIzLjIiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIzMjMuMSIgY3k9IjYzNC45IiByPSIzLjIiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIzMzEiIGN5PSI2MzQuOSIgcj0iMy4yIi8+CgkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzM4LjEiIGN5PSI2MzQuOSIgcj0iMy4yIi8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM1NC44LDY0MS45YzAsMS44LTEuNSwzLjItMy4yLDMuMmMtMS44LDAtMy4yLTEuNC0zLjItMy4yYzAtMS44LDEuNS0zLjIsMy4yLTMuMgoJCQlDMzUzLjMsNjM4LjcsMzU0LjgsNjQwLjEsMzU0LjgsNjQxLjl6Ii8+CgkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzQzLjgiIGN5PSI2NDEuOSIgcj0iMy4yIi8+CgkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzMzLjYiIGN5PSI2NjMiIHI9IjMuMiIvPgoJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjM0NC41IiBjeT0iNjYzIiByPSIzLjIiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIzMzUuNSIgY3k9IjY0MS45IiByPSIzLjIiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzI2LjUsNjQ4LjljMCwxLjgtMS40LDMuMi0zLjIsMy4yYy0xLjgsMC0zLjItMS40LTMuMi0zLjJjMC0xLjgsMS41LTMuMiwzLjItMy4yCgkJCUMzMjUuMSw2NDUuNywzMjYuNSw2NDcuMSwzMjYuNSw2NDguOXoiLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iMzE0LjgiIGN5PSI2NTYiIHJ4PSIzLjIiIHJ5PSIzLjIiLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iMzI1LjgiIGN5PSI2NTYiIHJ4PSIzLjIiIHJ5PSIzLjIiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIzMzYuOCIgY3k9IjY1NiIgcj0iMy4yIi8+CgkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzMxLjEiIGN5PSI2NDguOSIgcj0iMy4yIi8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjM0NS40IiBjeT0iNjQ4LjkiIHJ4PSIzLjIiIHJ5PSIzLjIiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zOTIuOCw0MzMuN0wzOTIuOCw0MzMuN2M0LjIsMCw4LjQtMS4xLDEyLjEtMy4zbC0xLTEuNmMtMy41LDItNy4yLDMuMS0xMS4yLDMuMWwwLDAKCQkJYy0xMC41LDAtMTkuOC03LjYtMjMuMi0xOC45bC0xLjgsMC41QzM3MS40LDQyNS42LDM4MS41LDQzMy43LDM5Mi44LDQzMy43eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAuOSw0MTAuMmw5LjMsNDYuNGwtMTcuOC0zOS44QzM5Ni41LDQxNi44LDM5OS45LDQxNCw0MDAuOSw0MTAuMnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzg0LDQxMC4ybC05LjMsNDYuNGwxNy44LTM5LjhDMzg4LjQsNDE2LjgsMzg0LjksNDE0LDM4NCw0MTAuMnoiLz4KCQk8cmVjdCB4PSIzOTEuNCIgeT0iMzkzLjciIGNsYXNzPSJzdDAiIHdpZHRoPSIxLjkiIGhlaWdodD0iNiIvPgoJCTxyZWN0IHg9IjM4OS42IiB5PSIzODYuNyIgY2xhc3M9InN0MCIgd2lkdGg9IjUuNiIgaGVpZ2h0PSI3LjYiLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iMzkyLjQiIGN5PSI0MDgiIHJ4PSI4LjgiIHJ5PSI4LjgiLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iMzkyLjQiIGN5PSI0MDgiIHJ4PSIxLjciIHJ5PSIxLjciLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNDAuMSw2MDBMMjQwLjEsNjAwYzQuMiwwLDguNC0xLjEsMTIuMS0zLjNsLTEtMS42Yy0zLjUsMi03LjIsMy4xLTExLjIsMy4xbDAsMGMtMTAuNSwwLTE5LjgtNy42LTIzLjItMTguOQoJCQlsLTEuOCwwLjVDMjE4LjYsNTkxLjksMjI4LjcsNjAwLDI0MC4xLDYwMHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjQ4LjEsNTc2LjVsOS4zLDQ2LjRsLTE3LjgtMzkuOEMyNDMuNyw1ODMuMSwyNDcuMSw1ODAuMywyNDguMSw1NzYuNXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjMxLjIsNTc2LjVsLTkuMyw0Ni40bDE3LjgtMzkuOEMyMzUuNiw1ODMuMSwyMzIuMiw1ODAuMywyMzEuMiw1NzYuNXoiLz4KCQk8cmVjdCB4PSIyMzguNiIgeT0iNTYwLjEiIGNsYXNzPSJzdDAiIHdpZHRoPSIxLjkiIGhlaWdodD0iNiIvPgoJCTxyZWN0IHg9IjIzNi44IiB5PSI1NTMuMSIgY2xhc3M9InN0MCIgd2lkdGg9IjUuNiIgaGVpZ2h0PSI3LjYiLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iMjM5LjYiIGN5PSI1NzQuMyIgcng9IjguOCIgcnk9IjguOCIvPgoJCTxlbGxpcHNlIGNsYXNzPSJzdDAiIGN4PSIyMzkuNiIgY3k9IjU3NC4zIiByeD0iMS43IiByeT0iMS43Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTQ4LjUsNDY4LjVjMCwwLjQtMC42LDAuNy0xLjMsMC43aC02MC40Yy0wLjcsMC0xLjMtMC4zLTEuMy0wLjd2LTEuN2MwLTAuNCwwLjYtMC43LDEuMy0wLjdoNjAuNAoJCQljMC43LDAsMS4zLDAuMywxLjMsMC43VjQ2OC41eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01NDcuMiw0MjIuM2gtMjUuNnYtMWMwLTEtMC42LTEuOC0xLjMtMS44aC02LjZjLTAuNywwLTEuMywwLjgtMS4zLDEuOHYxaC0yNS42Yy0wLjcsMC0xLjMsMC43LTEuMywxLjR2My4zCgkJCWMwLDAuOCwwLjYsMS41LDEuMywxLjVoNjAuNGMwLjcsMCwxLjMtMC43LDEuMy0xLjV2LTMuM0M1NDguNSw0MjMsNTQ3LjksNDIyLjMsNTQ3LjIsNDIyLjN6Ii8+CgkJPGc+CgkJCTxyZWN0IHg9IjQ5NS45IiB5PSI0NDMuNyIgY2xhc3M9InN0MCIgd2lkdGg9IjUuMSIgaGVpZ2h0PSIxNS40Ii8+CgkJCTxyZWN0IHg9IjUwNSIgeT0iNDQ3LjMiIGNsYXNzPSJzdDAiIHdpZHRoPSI1LjEiIGhlaWdodD0iMTEuOCIvPgoJCQk8cmVjdCB4PSI1MTQuMiIgeT0iNDUwIiBjbGFzcz0ic3QwIiB3aWR0aD0iNS4xIiBoZWlnaHQ9IjkuMiIvPgoJCQk8cmVjdCB4PSI1MjMuMyIgeT0iNDM1LjUiIGNsYXNzPSJzdDAiIHdpZHRoPSI1LjEiIGhlaWdodD0iMjMuNiIvPgoJCQk8cmVjdCB4PSI1MzIuNCIgeT0iNDQyLjYiIGNsYXNzPSJzdDAiIHdpZHRoPSI1LjEiIGhlaWdodD0iMTYuNSIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05MTUuNyw1NzEuNmMwLDAuNC0wLjYsMC43LTEuMywwLjdoLTYwLjRjLTAuNywwLTEuMy0wLjMtMS4zLTAuN3YtMS43YzAtMC40LDAuNi0wLjcsMS4zLTAuN2g2MC40CgkJCWMwLjcsMCwxLjMsMC4zLDEuMywwLjdWNTcxLjZ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTkxNC41LDUyNS40aC0yNS42di0xYzAtMS0wLjYtMS44LTEuMy0xLjhIODgxYy0wLjcsMC0xLjMsMC44LTEuMywxLjh2MWgtMjUuNmMtMC43LDAtMS4zLDAuNy0xLjMsMS40djMuMwoJCQljMCwwLjgsMC42LDEuNSwxLjMsMS41aDYwLjRjMC43LDAsMS4zLTAuNywxLjMtMS41di0zLjNDOTE1LjcsNTI2LjEsOTE1LjIsNTI1LjQsOTE0LjUsNTI1LjR6Ii8+CgkJPGc+CgkJCTxyZWN0IHg9Ijg2My4yIiB5PSI1NDYuOCIgY2xhc3M9InN0MCIgd2lkdGg9IjUuMSIgaGVpZ2h0PSIxNS40Ii8+CgkJCTxyZWN0IHg9Ijg3Mi4zIiB5PSI1NTAuNCIgY2xhc3M9InN0MCIgd2lkdGg9IjUuMSIgaGVpZ2h0PSIxMS44Ii8+CgkJCTxyZWN0IHg9Ijg4MS40IiB5PSI1NTMiIGNsYXNzPSJzdDAiIHdpZHRoPSI1LjEiIGhlaWdodD0iOS4yIi8+CgkJCTxyZWN0IHg9Ijg5MC42IiB5PSI1MzguNiIgY2xhc3M9InN0MCIgd2lkdGg9IjUuMSIgaGVpZ2h0PSIyMy42Ii8+CgkJCTxyZWN0IHg9Ijg5OS43IiB5PSI1NDUuNiIgY2xhc3M9InN0MCIgd2lkdGg9IjUuMSIgaGVpZ2h0PSIxNi41Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY4Mi4yLDQ0MS43bC0xOC40LTI2LjNjLTAuNi0wLjgtMS4xLTIuNC0xLjEtMy41di0xNy4zYzEuMywwLDIuMy0xLDIuMy0yLjNjMC0xLjMtMS0yLjMtMi4zLTIuM2gtMS45aC0yLjYKCQkJYy0xLjEsMC0yLjgsMC0zLjgsMGgtMi42aC0xLjljLTEuMywwLTIuMywxLTIuMywyLjNjMCwxLjMsMSwyLjMsMi4zLDIuM3YxNy4zYzAsMS0wLjUsMi42LTEuMSwzLjVsLTE4LjQsMjYuMwoJCQljLTAuNiwwLjktMC42LDIuMy0wLjEsMy4ybDIuMSwzLjRjMC41LDAuOSwxLjksMS42LDIuOSwxLjZoMTkuMWMxLDAsMi43LDAsMy44LDBoMTkuMWMxLDAsMi40LTAuNywyLjktMS42bDIuMS0zLjQKCQkJQzY4Mi44LDQ0NCw2ODIuOCw0NDIuNSw2ODIuMiw0NDEuN3oiLz4KCQk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjY0NS44LDQyOC4zIDYzNS4zLDQ0My40IDYzNi4yLDQ0NC44IDY3Ni4zLDQ0NC44IDY3Ny4yLDQ0My40IDY2Ni43LDQyOC4zIAkJIi8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjY0Ny40IiBjeT0iNDM1LjIiIHJ4PSIyLjciIHJ5PSIyLjciLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QxIiBjeD0iNjU4LjIiIGN5PSI0MTkuMiIgcng9IjIuNyIgcnk9IjIuNyIvPgoJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjY1Mi42IiBjeT0iMzgzIiByPSIyLjciLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iNjUyLjYiIGN5PSI0MjMuOCIgcng9IjEuOCIgcnk9IjEuOCIvPgoJCTxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjY1Ny43IiBjeT0iNDA0LjkiIHI9IjEuNCIvPgoJCTxlbGxpcHNlIGNsYXNzPSJzdDAiIGN4PSI2NTkuMSIgY3k9IjM4NS43IiByeD0iMS40IiByeT0iMS40Ii8+CgkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iNjU0LjciIGN5PSI0MzkuNSIgcj0iMy41Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjY2My42IiBjeT0iNDM0IiByeD0iMi41IiByeT0iMi41Ii8+CgkJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iNjU2LjIiIGN5PSI0MTIuMSIgcj0iMiIvPgoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02NTgsMzk5LjRjMCwxLjEtMC45LDItMiwyYy0xLjEsMC0yLTAuOS0yLTJjMC0xLjEsMC45LTIsMi0yQzY1Ny4xLDM5Ny40LDY1OCwzOTguMyw2NTgsMzk5LjR6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY2MS4xLDM3OC4zYzAsMS4xLTAuOSwyLTIsMmMtMS4xLDAtMi0wLjktMi0yYzAtMS4xLDAuOS0yLDItMkM2NjAuMiwzNzYuMyw2NjEuMSwzNzcuMiw2NjEuMSwzNzguM3oiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00ODkuNSw3MDAuNEw0NzEuMSw2NzRjLTAuNi0wLjgtMS4xLTIuNC0xLjEtMy41di0xNy4zYzEuMywwLDIuMy0xLDIuMy0yLjNjMC0xLjMtMS0yLjMtMi4zLTIuM2gtMS45aC0yLjYKCQkJYy0xLjEsMC0yLjgsMC0zLjgsMEg0NTloLTEuOWMtMS4zLDAtMi4zLDEtMi4zLDIuM2MwLDEuMywxLDIuMywyLjMsMi4zdjE3LjNjMCwxLTAuNSwyLjYtMS4xLDMuNWwtMTguNCwyNi4zCgkJCWMtMC42LDAuOS0wLjYsMi4zLTAuMSwzLjJsMi4xLDMuNGMwLjUsMC45LDEuOSwxLjYsMi45LDEuNmgxOS4xYzEsMCwyLjcsMCwzLjgsMGgxOS4xYzEsMCwyLjQtMC43LDIuOS0xLjZsMi4xLTMuNAoJCQlDNDkwLjEsNzAyLjcsNDkwLjEsNzAxLjIsNDg5LjUsNzAwLjR6Ii8+CgkJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSI0NTMuMSw2ODcgNDQyLjYsNzAyLjEgNDQzLjQsNzAzLjUgNDgzLjYsNzAzLjUgNDg0LjUsNzAyLjEgNDc0LDY4NyAJCSIvPgoJCTxlbGxpcHNlIGNsYXNzPSJzdDAiIGN4PSI0NTQuNyIgY3k9IjY5My45IiByeD0iMi43IiByeT0iMi43Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MSIgY3g9IjQ2NS41IiBjeT0iNjc4IiByeD0iMi43IiByeT0iMi43Ii8+CgkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iNDU5LjkiIGN5PSI2NDEuNyIgcj0iMi43Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjQ1OS45IiBjeT0iNjgyLjUiIHJ4PSIxLjgiIHJ5PSIxLjgiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSI0NjUiIGN5PSI2NjMuNiIgcj0iMS40Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjQ2Ni40IiBjeT0iNjQ0LjQiIHJ4PSIxLjQiIHJ5PSIxLjQiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI0NjIiIGN5PSI2OTguMiIgcj0iMy41Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjQ3MC45IiBjeT0iNjkyLjciIHJ4PSIyLjUiIHJ5PSIyLjUiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSI0NjMuNSIgY3k9IjY3MC44IiByPSIyIi8+CgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTQ2NS4zLDY1OC4xYzAsMS4xLTAuOSwyLTIsMmMtMS4xLDAtMi0wLjktMi0yYzAtMS4xLDAuOS0yLDItMkM0NjQuNCw2NTYuMiw0NjUuMyw2NTcsNDY1LjMsNjU4LjF6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ2OC40LDYzN2MwLDEuMS0wLjksMi0yLDJjLTEuMSwwLTItMC45LTItMmMwLTEuMSwwLjktMiwyLTJDNDY3LjUsNjM1LDQ2OC40LDYzNS45LDQ2OC40LDYzN3oiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMDIsNjk5LjRMMTgzLjYsNjczYy0wLjYtMC44LTEuMS0yLjQtMS4xLTMuNXYtMTcuM2MxLjMsMCwyLjMtMSwyLjMtMi4zYzAtMS4zLTEtMi4zLTIuMy0yLjNoLTEuOUgxNzgKCQkJYy0xLjEsMC0yLjgsMC0zLjgsMGgtMi42aC0xLjljLTEuMywwLTIuMywxLTIuMywyLjNjMCwxLjMsMSwyLjMsMi4zLDIuM3YxNy4zYzAsMS0wLjUsMi42LTEuMSwzLjVsLTE4LjQsMjYuMwoJCQljLTAuNiwwLjktMC42LDIuMy0wLjEsMy4ybDIuMSwzLjRjMC41LDAuOSwxLjksMS42LDIuOSwxLjZoMTkuMWMxLDAsMi43LDAsMy44LDBoMTkuMWMxLDAsMi40LTAuNywyLjktMS42bDIuMS0zLjQKCQkJQzIwMi42LDcwMS43LDIwMi42LDcwMC4yLDIwMiw2OTkuNHoiLz4KCQk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjE2NS42LDY4Ni4xIDE1NS4xLDcwMS4xIDE1Niw3MDIuNSAxOTYuMiw3MDIuNSAxOTcsNzAxLjEgMTg2LjUsNjg2LjEgCQkiLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iMTY3LjMiIGN5PSI2OTIuOSIgcng9IjIuNyIgcnk9IjIuNyIvPgoJCTxlbGxpcHNlIGNsYXNzPSJzdDEiIGN4PSIxNzgiIGN5PSI2NzciIHJ4PSIyLjciIHJ5PSIyLjciLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIxNzIuNSIgY3k9IjY0MC43IiByPSIyLjciLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iMTcyLjUiIGN5PSI2ODEuNSIgcng9IjEuOCIgcnk9IjEuOCIvPgoJCTxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjE3Ny41IiBjeT0iNjYyLjYiIHI9IjEuNCIvPgoJCTxlbGxpcHNlIGNsYXNzPSJzdDAiIGN4PSIxNzguOSIgY3k9IjY0My40IiByeD0iMS40IiByeT0iMS40Ii8+CgkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMTc0LjUiIGN5PSI2OTcuMiIgcj0iMy41Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjE4My40IiBjeT0iNjkxLjgiIHJ4PSIyLjUiIHJ5PSIyLjUiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSIxNzYuMSIgY3k9IjY2OS44IiByPSIyIi8+CgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE3Ny45LDY1Ny4yYzAsMS4xLTAuOSwyLTIsMmMtMS4xLDAtMi0wLjktMi0yYzAtMS4xLDAuOS0yLDItMkMxNzcsNjU1LjIsMTc3LjksNjU2LjEsMTc3LjksNjU3LjJ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE4MC45LDYzNmMwLDEuMS0wLjksMi0yLDJjLTEuMSwwLTItMC45LTItMmMwLTEuMSwwLjktMiwyLTJDMTgwLDYzNCwxODAuOSw2MzQuOSwxODAuOSw2MzZ6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjM2LjEsNDAxLjRjMC40LTAuNSwxLTAuNywxLjktMC43YzMuMywwLDkuNywzLjMsMTcuNiwxMC41YzAuOCwwLDEuNy0wLjEsMi42LTAuMWMwLjItMC4yLDAuMy0wLjMsMC41LTAuNQoJCQljLTguMi03LjctMTUuOS0xMi41LTIwLjctMTIuNWMtMiwwLTMuMiwwLjktMy44LDEuNmMtMi41LDIuOC0xLjMsOC41LDIsMTUuMmMwLjgtMC4zLDEuNi0wLjYsMi40LTAuOQoJCQlDMjM1LjUsNDA3LjksMjM0LjYsNDAzLjIsMjM2LjEsNDAxLjR6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI0NS41LDQyNS40Yy0yLjMtMy4yLTQuMi02LjItNS43LTljLTAuOCwwLjMtMS42LDAuNi0yLjQsMC45YzEuOCwzLjMsNCw2LjgsNi41LDEwLjMKCQkJQzI0NC40LDQyNi44LDI0NC45LDQyNi4xLDI0NS41LDQyNS40eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNTguMiw0NDEuNGMwLjIsMCwwLjMsMCwwLjUsMGwwLDBjMC4yLDAsMC4zLDAsMC41LDBjLTAuMi0wLjItMC4zLTAuMy0wLjUtMC41CgkJCUMyNTguNSw0NDEuMSwyNTguNCw0NDEuMywyNTguMiw0NDEuNHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjU4LjcsNDExLjFjMC4yLDAsMC4zLDAsMC41LDBjLTAuMi0wLjItMC4zLTAuMy0wLjUtMC41Yy0wLjIsMC4yLTAuMywwLjMtMC41LDAuNQoJCQlDMjU4LjQsNDExLjIsMjU4LjUsNDExLjEsMjU4LjcsNDExLjF6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI3My41LDQyNy42Yy0wLjUtMC43LTEtMS40LTEuNi0yLjFjLTEuNy0yLjMtMy41LTQuNS01LjQtNi42Yy0xLjYtMS44LTMuMi0zLjUtNC43LTUuMQoJCQljLTAuOSwwLTEuOC0wLjEtMi42LTAuMWMtMC4yLDAuMi0wLjMsMC4zLTAuNSwwLjVjMS45LDEuOSwzLjksNCw1LjksNi4zYzIuMSwyLjQsNCw0LjgsNS43LDcuMWMwLjUsMC43LDEsMS40LDEuNSwyLjEKCQkJYzIuMywzLjIsNC4yLDYuMiw1LjcsOWMwLjgtMC4zLDEuNi0wLjUsMi40LTAuOEMyNzguMiw0MzQuNSwyNzYsNDMxLDI3My41LDQyNy42eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNTguNyw0NDR2LTEuM1Y0NDRjLTAuMiwwLTAuMywwLTAuNSwwYzAuMiwwLjIsMC4zLDAuMywwLjUsMC41YzAuMi0wLjIsMC4zLTAuMywwLjUtMC41CgkJCUMyNTksNDQ0LDI1OC45LDQ0NCwyNTguNyw0NDR6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI1OS4yLDQxMy43Yy0wLjIsMC0wLjMsMC0wLjUsMGMtMC4yLDAtMC4zLDAtMC41LDBjMC4yLDAuMiwwLjMsMC4zLDAuNSwwLjUKCQkJQzI1OC45LDQxNCwyNTksNDEzLjgsMjU5LjIsNDEzLjd6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI1OC4yLDQxMy43Yy0wLjksMC0xLjgsMC0yLjYsMC4xYy0xLjYsMS42LTMuMiwzLjMtNC43LDUuMWMtMS45LDIuMS0zLjcsNC4zLTUuNCw2LjYKCQkJYy0wLjUsMC43LTEsMS40LTEuNiwyLjFjLTIuNSwzLjUtNC43LDYuOS02LjUsMTAuM2MwLjgsMC4zLDEuNiwwLjYsMi40LDAuOGMxLjUtMi44LDMuNC01LjgsNS43LTljMC41LTAuNywxLTEuNCwxLjUtMi4xCgkJCWMxLjctMi4zLDMuNi00LjcsNS43LTcuMWMyLTIuMyw0LTQuNCw2LTYuM0MyNTguNSw0MTQsMjU4LjQsNDEzLjgsMjU4LjIsNDEzLjd6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI1Mi43LDQzNC42Yy0yLjEtMi40LTQtNC44LTUuNy03LjFjLTAuNSwwLjctMSwxLjQtMS41LDIuMWMxLjcsMi4zLDMuNSw0LjUsNS40LDYuNgoJCQljMS42LDEuOCwzLjEsMy41LDQuNyw1LjFjMC40LDAuNCwwLjksMC45LDEuMywxLjNjMC40LTAuNCwwLjktMC44LDEuMy0xLjNjMC4yLTAuMiwwLjMtMC4zLDAuNS0wLjUKCQkJQzI1Ni44LDQzOS4xLDI1NC44LDQzNi45LDI1Mi43LDQzNC42eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yODEuMiw0NDAuMWMtMC44LDAuMy0xLjYsMC42LTIuNCwwLjljMy4xLDYuMyw0LDExLDIuNSwxMi43Yy0wLjQsMC41LTEsMC43LTEuOSwwLjcKCQkJYy0zLjMsMC05LjctMy4zLTE3LjYtMTAuNWMtMC40LTAuNC0wLjktMC44LTEuMy0xLjJjLTAuNCwwLjQtMC45LDAuOC0xLjMsMS4zYy0wLjIsMC4yLTAuMywwLjMtMC41LDAuNQoJCQljOC4yLDcuNywxNS45LDEyLjUsMjAuNywxMi41YzIsMCwzLjItMC45LDMuOC0xLjZDMjg1LjcsNDUyLjUsMjg0LjUsNDQ2LjgsMjgxLjIsNDQwLjF6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzOS44LDQxNi40Yy0wLjQtMC44LTAuOC0xLjUtMS4yLTIuM2MtMC44LDAuMy0xLjYsMC42LTIuNCwwLjljMC40LDAuOCwwLjgsMS41LDEuMiwyLjMKCQkJQzIzOC4yLDQxNywyMzksNDE2LjcsMjM5LjgsNDE2LjR6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI4MS4yLDQxNWMtMC40LDAuOC0wLjgsMS41LTEuMiwyLjNjNi41LDIuNiwxMC43LDYuMywxMC43LDEwLjNjMCw0LTQuMiw3LjctMTAuNywxMC4zCgkJCWMtMC44LDAuMy0xLjYsMC42LTIuNCwwLjhjLTQuNSwxLjUtMTAsMi40LTE1LjgsMi43Yy0wLjQsMC40LTAuOSwwLjktMS4zLDEuM2MwLjQsMC40LDAuOSwwLjgsMS4zLDEuMmM2LjQtMC4zLDEyLjItMS4zLDE3LTIuOQoJCQljMC44LTAuMywxLjYtMC42LDIuNC0wLjljNy40LTMsMTIuMS03LjUsMTIuMS0xMi41QzI5My4zLDQyMi41LDI4OC42LDQxOCwyODEuMiw0MTV6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI1NS42LDQ0MS40Yy01LjgtMC4zLTExLjMtMS4yLTE1LjgtMi43Yy0wLjgtMC4zLTEuNi0wLjUtMi40LTAuOGMtNi41LTIuNi0xMC43LTYuMy0xMC43LTEwLjMKCQkJYzAtNCw0LjItNy43LDEwLjctMTAuM2MtMC40LTAuOC0wLjgtMS41LTEuMi0yLjNjLTcuNCwzLTEyLjEsNy41LTEyLjEsMTIuNmMwLDUuMSw0LjYsOS42LDEyLjEsMTIuNWMwLjgsMC4zLDEuNSwwLjYsMi40LDAuOQoJCQljNC45LDEuNiwxMC43LDIuNywxNywyLjljMC40LTAuNCwwLjktMC44LDEuMy0xLjJDMjU2LjUsNDQyLjMsMjU2LDQ0MS44LDI1NS42LDQ0MS40eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yODMuMiwzOTkuOGMtMC42LTAuNy0xLjgtMS42LTMuOC0xLjZjLTQuOCwwLTEyLjUsNC44LTIwLjcsMTIuNWMwLjIsMC4yLDAuMywwLjMsMC41LDAuNQoJCQljMC45LDAsMS43LDAsMi42LDAuMWM3LjktNy4xLDE0LjMtMTAuNSwxNy42LTEwLjVjMC45LDAsMS41LDAuMiwxLjksMC43YzEuNSwxLjcsMC42LDYuNC0yLjUsMTIuN2MtMC40LDAuNy0wLjgsMS41LTEuMiwyLjMKCQkJYy0xLjUsMi44LTMuNCw1LjgtNS43LDljMC41LDAuNywxLDEuNCwxLjYsMi4xYzIuNS0zLjUsNC43LTcsNi41LTEwLjNjMC40LTAuOCwwLjgtMS41LDEuMi0yLjMKCQkJQzI4NC41LDQwOC4zLDI4NS43LDQwMi42LDI4My4yLDM5OS44eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNzAuNCw0MjcuNmMtMS43LDIuMy0zLjYsNC43LTUuNyw3LjFjLTIsMi4zLTQsNC40LTUuOSw2LjNjMC4yLDAuMiwwLjMsMC4zLDAuNSwwLjVjLTAuMiwwLTAuMywwLTAuNSwwbDAsMAoJCQljLTAuMiwwLTAuMywwLTAuNSwwYy0wLjQsMC40LTAuOSwwLjktMS4zLDEuM2MtMC40LDAuNC0wLjksMC44LTEuMywxLjJjLTcuOSw3LjEtMTQuMywxMC41LTE3LjYsMTAuNWMtMC45LDAtMS41LTAuMi0xLjktMC43CgkJCWMtMS41LTEuNy0wLjYtNi40LDIuNS0xMi43Yy0wLjgtMC4zLTEuNi0wLjYtMi40LTAuOWMtMy4zLDYuNy00LjUsMTIuNC0yLDE1LjJjMC42LDAuNywxLjgsMS42LDMuOCwxLjZjNC44LDAsMTIuNS00LjgsMjAuNy0xMi41CgkJCWMtMC4yLTAuMi0wLjMtMC4zLTAuNS0wLjVjMC4yLDAsMC4zLDAsMC41LDB2LTEuM3YxLjNjMC4yLDAsMC4zLDAsMC41LDBjMC40LTAuNCwwLjktMC44LDEuMy0xLjNjMC41LTAuNCwwLjktMC45LDEuMy0xLjMKCQkJYzEuNi0xLjYsMy4yLTMuMyw0LjctNS4xYzEuOS0yLjEsMy43LTQuNCw1LjQtNi42QzI3MS40LDQyOSwyNzAuOSw0MjguMywyNzAuNCw0MjcuNnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjYxLjgsNDExLjJjLTAuOCwwLTEuNy0wLjEtMi42LTAuMWMtMC4yLDAtMC4zLDAtMC41LDBjLTAuMiwwLTAuMywwLTAuNSwwYy0wLjksMC0xLjcsMC0yLjYsMC4xCgkJCWMtNi40LDAuMy0xMi4yLDEuMy0xNywyLjljMC40LDAuNywwLjgsMS41LDEuMiwyLjNjNC41LTEuNSwxMC0yLjQsMTUuOC0yLjdjMC45LDAsMS43LTAuMSwyLjYtMC4xYzAuMiwwLDAuMywwLDAuNSwwCgkJCWMwLjIsMCwwLjMsMCwwLjUsMGMwLjksMCwxLjgsMCwyLjYsMC4xYzUuOCwwLjMsMTEuMywxLjIsMTUuOCwyLjdjMC40LTAuOCwwLjgtMS41LDEuMi0yLjNDMjc0LDQxMi41LDI2OC4xLDQxMS41LDI2MS44LDQxMS4yeiIKCQkJLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjUzLjIsNDI3LjZjMCwzLjEsMi41LDUuNSw1LjUsNS41YzMuMSwwLDUuNS0yLjUsNS41LTUuNWMwLTMuMS0yLjUtNS41LTUuNS01LjUKCQkJQzI1NS42LDQyMiwyNTMuMiw0MjQuNSwyNTMuMiw0MjcuNnoiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04NTguOCw2MTUuOGMwLjQtMC41LDEtMC43LDEuOS0wLjdjMy4zLDAsOS43LDMuMywxNy42LDEwLjVjMC44LDAsMS43LTAuMSwyLjYtMC4xYzAuMi0wLjIsMC4zLTAuMywwLjUtMC41CgkJCWMtOC4yLTcuNy0xNS45LTEyLjUtMjAuNy0xMi41Yy0yLDAtMy4yLDAuOS0zLjgsMS42Yy0yLjUsMi44LTEuMyw4LjUsMiwxNS4yYzAuOC0wLjMsMS42LTAuNiwyLjQtMC45CgkJCUM4NTguMiw2MjIuMiw4NTcuMyw2MTcuNSw4NTguOCw2MTUuOHoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODY4LjIsNjM5LjhjLTIuMy0zLjItNC4yLTYuMi01LjctOWMtMC44LDAuMy0xLjYsMC42LTIuNCwwLjljMS44LDMuMyw0LDYuOCw2LjUsMTAuMwoJCQlDODY3LjIsNjQxLjIsODY3LjcsNjQwLjUsODY4LjIsNjM5Ljh6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTg4MC45LDY1NS44YzAuMiwwLDAuMywwLDAuNSwwbDAsMGMwLjIsMCwwLjMsMCwwLjUsMGMtMC4yLTAuMi0wLjMtMC4zLTAuNS0wLjUKCQkJQzg4MS4zLDY1NS41LDg4MS4xLDY1NS42LDg4MC45LDY1NS44eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04ODEuNCw2MjUuNWMwLjIsMCwwLjMsMCwwLjUsMGMtMC4yLTAuMi0wLjMtMC4zLTAuNS0wLjVjLTAuMiwwLjItMC4zLDAuMy0wLjUsMC41CgkJCUM4ODEuMSw2MjUuNSw4ODEuMiw2MjUuNSw4ODEuNCw2MjUuNXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODk2LjIsNjQxLjljLTAuNS0wLjctMS0xLjQtMS42LTIuMWMtMS43LTIuMy0zLjUtNC41LTUuNC02LjZjLTEuNi0xLjgtMy4yLTMuNS00LjctNS4xCgkJCWMtMC45LDAtMS44LTAuMS0yLjYtMC4xYy0wLjIsMC4yLTAuMywwLjMtMC41LDAuNWMxLjksMS45LDMuOSw0LDUuOSw2LjNjMi4xLDIuNCw0LDQuOCw1LjcsNy4xYzAuNSwwLjcsMSwxLjQsMS41LDIuMQoJCQljMi4zLDMuMiw0LjIsNi4yLDUuNyw5YzAuOC0wLjMsMS42LTAuNSwyLjQtMC44QzkwMC45LDY0OC45LDg5OC43LDY0NS40LDg5Ni4yLDY0MS45eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04ODEuNCw2NTguM3YtMS4zVjY1OC4zYy0wLjIsMC0wLjMsMC0wLjUsMGMwLjIsMC4yLDAuMywwLjMsMC41LDAuNWMwLjItMC4yLDAuMy0wLjMsMC41LTAuNQoJCQlDODgxLjgsNjU4LjMsODgxLjYsNjU4LjMsODgxLjQsNjU4LjN6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTg4MS45LDYyOGMtMC4yLDAtMC4zLDAtMC41LDBjLTAuMiwwLTAuMywwLTAuNSwwYzAuMiwwLjIsMC4zLDAuMywwLjUsMC41CgkJCUM4ODEuNiw2MjguMyw4ODEuNyw2MjguMiw4ODEuOSw2Mjh6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTg4MC45LDYyOGMtMC45LDAtMS44LDAtMi42LDAuMWMtMS42LDEuNi0zLjIsMy4zLTQuNyw1LjFjLTEuOSwyLjEtMy43LDQuMy01LjQsNi42Yy0wLjUsMC43LTEsMS40LTEuNiwyLjEKCQkJYy0yLjUsMy41LTQuNyw2LjktNi41LDEwLjNjMC44LDAuMywxLjYsMC42LDIuNCwwLjhjMS41LTIuOCwzLjQtNS44LDUuNy05YzAuNS0wLjcsMS0xLjQsMS41LTIuMWMxLjctMi4zLDMuNi00LjcsNS43LTcuMQoJCQljMi0yLjMsNC00LjQsNi02LjNDODgxLjMsNjI4LjMsODgxLjEsNjI4LjIsODgwLjksNjI4eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04NzUuNSw2NDljLTIuMS0yLjQtNC00LjgtNS43LTcuMWMtMC41LDAuNy0xLDEuNC0xLjUsMi4xYzEuNywyLjMsMy41LDQuNSw1LjQsNi42YzEuNiwxLjgsMy4xLDMuNSw0LjcsNS4xCgkJCWMwLjQsMC40LDAuOSwwLjksMS4zLDEuM2MwLjQtMC40LDAuOS0wLjgsMS4zLTEuM2MwLjItMC4yLDAuMy0wLjMsMC41LTAuNUM4NzkuNSw2NTMuNCw4NzcuNSw2NTEuMyw4NzUuNSw2NDl6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTkwMy45LDY1NC41Yy0wLjgsMC4zLTEuNiwwLjYtMi40LDAuOWMzLjEsNi4zLDQsMTEsMi41LDEyLjdjLTAuNCwwLjUtMSwwLjctMS45LDAuNwoJCQljLTMuMywwLTkuNy0zLjMtMTcuNi0xMC41Yy0wLjQtMC40LTAuOS0wLjgtMS4zLTEuMmMtMC40LDAuNC0wLjgsMC44LTEuMywxLjNjLTAuMiwwLjItMC4zLDAuMy0wLjUsMC41CgkJCWM4LjIsNy43LDE1LjksMTIuNSwyMC43LDEyLjVjMiwwLDMuMi0wLjksMy44LTEuNkM5MDguNCw2NjYuOSw5MDcuMiw2NjEuMSw5MDMuOSw2NTQuNXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODYyLjUsNjMwLjhjLTAuNC0wLjgtMC44LTEuNS0xLjItMi4zYy0wLjgsMC4zLTEuNiwwLjYtMi40LDAuOWMwLjQsMC44LDAuOCwxLjUsMS4yLDIuMwoJCQlDODYwLjksNjMxLjMsODYxLjcsNjMxLjEsODYyLjUsNjMwLjh6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTkwMy45LDYyOS40Yy0wLjQsMC44LTAuOCwxLjUtMS4yLDIuM2M2LjUsMi42LDEwLjcsNi4zLDEwLjcsMTAuM2MwLDQtNC4yLDcuNy0xMC43LDEwLjMKCQkJYy0wLjgsMC4zLTEuNiwwLjYtMi40LDAuOGMtNC41LDEuNS0xMCwyLjQtMTUuOCwyLjdjLTAuNCwwLjQtMC45LDAuOS0xLjMsMS4zYzAuNCwwLjQsMC45LDAuOCwxLjMsMS4yYzYuNC0wLjMsMTIuMi0xLjMsMTctMi45CgkJCWMwLjgtMC4zLDEuNi0wLjYsMi40LTAuOWM3LjQtMywxMi4xLTcuNSwxMi4xLTEyLjVDOTE2LDYzNi44LDkxMS4zLDYzMi40LDkwMy45LDYyOS40eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04NzguMyw2NTUuN2MtNS44LTAuMy0xMS4zLTEuMi0xNS44LTIuN2MtMC44LTAuMy0xLjYtMC41LTIuNC0wLjhjLTYuNS0yLjYtMTAuNy02LjMtMTAuNy0xMC4zCgkJCWMwLTQsNC4yLTcuNywxMC43LTEwLjNjLTAuNC0wLjgtMC44LTEuNS0xLjItMi4zYy03LjQsMy0xMi4xLDcuNS0xMi4xLDEyLjZjMCw1LjEsNC42LDkuNiwxMi4xLDEyLjVjMC44LDAuMywxLjUsMC42LDIuNCwwLjkKCQkJYzQuOSwxLjYsMTAuNywyLjcsMTcsMi45YzAuNC0wLjQsMC45LTAuOCwxLjMtMS4yQzg3OS4yLDY1Ni42LDg3OC43LDY1Ni4yLDg3OC4zLDY1NS43eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05MDUuOSw2MTQuMWMtMC42LTAuNy0xLjgtMS42LTMuOC0xLjZjLTQuOCwwLTEyLjUsNC44LTIwLjcsMTIuNWMwLjIsMC4yLDAuMywwLjMsMC41LDAuNQoJCQljMC45LDAsMS43LDAsMi42LDAuMWM3LjktNy4xLDE0LjMtMTAuNSwxNy42LTEwLjVjMC45LDAsMS41LDAuMiwxLjksMC43YzEuNSwxLjcsMC42LDYuNC0yLjUsMTIuN2MtMC40LDAuNy0wLjgsMS41LTEuMiwyLjMKCQkJYy0xLjUsMi44LTMuNCw1LjgtNS43LDljMC41LDAuNywxLDEuNCwxLjYsMi4xYzIuNS0zLjUsNC43LTcsNi41LTEwLjNjMC40LTAuOCwwLjgtMS41LDEuMi0yLjMKCQkJQzkwNy4yLDYyMi43LDkwOC40LDYxNyw5MDUuOSw2MTQuMXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODkzLjEsNjQxLjljLTEuNywyLjMtMy42LDQuNy01LjcsNy4xYy0yLDIuMy00LDQuNC01LjksNi4zYzAuMiwwLjIsMC4zLDAuMywwLjUsMC41Yy0wLjIsMC0wLjMsMC0wLjUsMGwwLDAKCQkJYy0wLjIsMC0wLjMsMC0wLjUsMGMtMC40LDAuNC0wLjksMC44LTEuMywxLjNjLTAuNCwwLjQtMC45LDAuOC0xLjMsMS4yYy03LjksNy4xLTE0LjMsMTAuNS0xNy42LDEwLjVjLTAuOSwwLTEuNS0wLjItMS45LTAuNwoJCQljLTEuNS0xLjctMC42LTYuNCwyLjUtMTIuN2MtMC44LTAuMy0xLjYtMC42LTIuNC0wLjljLTMuMyw2LjctNC41LDEyLjQtMiwxNS4yYzAuNiwwLjcsMS44LDEuNiwzLjgsMS42YzQuOCwwLDEyLjUtNC44LDIwLjctMTIuNQoJCQljLTAuMi0wLjItMC4zLTAuMy0wLjUtMC41YzAuMiwwLDAuMywwLDAuNSwwdi0xLjN2MS4zYzAuMiwwLDAuMywwLDAuNSwwYzAuNC0wLjQsMC45LTAuOCwxLjMtMS4zYzAuNS0wLjQsMC45LTAuOSwxLjMtMS4zCgkJCWMxLjYtMS42LDMuMi0zLjMsNC43LTUuMWMxLjktMi4xLDMuNy00LjQsNS40LTYuNkM4OTQuMSw2NDMuMyw4OTMuNiw2NDIuNiw4OTMuMSw2NDEuOXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODg0LjUsNjI1LjZjLTAuOCwwLTEuNy0wLjEtMi42LTAuMWMtMC4yLDAtMC4zLDAtMC41LDBjLTAuMiwwLTAuMywwLTAuNSwwYy0wLjksMC0xLjcsMC0yLjYsMC4xCgkJCWMtNi40LDAuMy0xMi4yLDEuMy0xNywyLjljMC40LDAuNywwLjgsMS41LDEuMiwyLjNjNC41LTEuNSwxMC0yLjQsMTUuOC0yLjdjMC45LDAsMS43LTAuMSwyLjYtMC4xYzAuMiwwLDAuMywwLDAuNSwwCgkJCWMwLjIsMCwwLjMsMCwwLjUsMGMwLjksMCwxLjgsMCwyLjYsMC4xYzUuOCwwLjMsMTEuMywxLjIsMTUuOCwyLjdjMC40LTAuOCwwLjgtMS41LDEuMi0yLjNDODk2LjcsNjI2LjksODkwLjksNjI1LjgsODg0LjUsNjI1LjZ6CgkJCSIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04NzUuOSw2NDEuOWMwLDMuMSwyLjUsNS41LDUuNSw1LjVjMy4xLDAsNS41LTIuNSw1LjUtNS41YzAtMy4xLTIuNS01LjUtNS41LTUuNQoJCQlDODc4LjQsNjM2LjQsODc1LjksNjM4LjksODc1LjksNjQxLjl6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjg5LjIsNTE1LjljMC40LTAuNSwxLTAuNywxLjktMC43YzMuMywwLDkuNywzLjMsMTcuNiwxMC41YzAuOCwwLDEuNy0wLjEsMi42LTAuMWMwLjItMC4yLDAuMy0wLjMsMC41LTAuNQoJCQljLTguMi03LjctMTUuOS0xMi41LTIwLjctMTIuNWMtMiwwLTMuMiwwLjktMy44LDEuNmMtMi41LDIuOC0xLjMsOC41LDIsMTUuMmMwLjgtMC4zLDEuNi0wLjYsMi40LTAuOQoJCQlDNjg4LjYsNTIyLjMsNjg3LjcsNTE3LjYsNjg5LjIsNTE1Ljl6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTY5OC41LDUzOS45Yy0yLjMtMy4yLTQuMi02LjItNS43LTljLTAuOCwwLjMtMS42LDAuNi0yLjQsMC45YzEuOCwzLjMsNCw2LjgsNi41LDEwLjMKCQkJQzY5Ny41LDU0MS4zLDY5OCw1NDAuNiw2OTguNSw1MzkuOXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzExLjMsNTU1LjljMC4yLDAsMC4zLDAsMC41LDBsMCwwYzAuMiwwLDAuMywwLDAuNSwwYy0wLjItMC4yLTAuMy0wLjMtMC41LTAuNQoJCQlDNzExLjYsNTU1LjYsNzExLjQsNTU1LjcsNzExLjMsNTU1Ljl6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTcxMS44LDUyNS42YzAuMiwwLDAuMywwLDAuNSwwYy0wLjItMC4yLTAuMy0wLjMtMC41LTAuNWMtMC4yLDAuMi0wLjMsMC4zLTAuNSwwLjUKCQkJQzcxMS40LDUyNS42LDcxMS42LDUyNS42LDcxMS44LDUyNS42eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03MjYuNSw1NDJjLTAuNS0wLjctMS0xLjQtMS42LTIuMWMtMS43LTIuMy0zLjUtNC41LTUuNC02LjZjLTEuNi0xLjgtMy4yLTMuNS00LjctNS4xCgkJCWMtMC45LDAtMS44LTAuMS0yLjYtMC4xYy0wLjIsMC4yLTAuMywwLjMtMC41LDAuNWMxLjksMS45LDMuOSw0LDUuOSw2LjNjMi4xLDIuNCw0LDQuOCw1LjcsNy4xYzAuNSwwLjcsMSwxLjQsMS41LDIuMQoJCQljMi4zLDMuMiw0LjIsNi4yLDUuNyw5YzAuOC0wLjMsMS42LTAuNSwyLjQtMC44QzczMS4zLDU0OSw3MjksNTQ1LjUsNzI2LjUsNTQyeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03MTEuOCw1NTguNHYtMS4zVjU1OC40Yy0wLjIsMC0wLjMsMC0wLjUsMGMwLjIsMC4yLDAuMywwLjMsMC41LDAuNWMwLjItMC4yLDAuMy0wLjMsMC41LTAuNQoJCQlDNzEyLjEsNTU4LjQsNzExLjksNTU4LjQsNzExLjgsNTU4LjR6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTcxMi4yLDUyOC4xYy0wLjIsMC0wLjMsMC0wLjUsMGMtMC4yLDAtMC4zLDAtMC41LDBjMC4yLDAuMiwwLjMsMC4zLDAuNSwwLjUKCQkJQzcxMS45LDUyOC41LDcxMi4xLDUyOC4zLDcxMi4yLDUyOC4xeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03MTEuMyw1MjguMWMtMC45LDAtMS44LDAtMi42LDAuMWMtMS42LDEuNi0zLjIsMy4zLTQuNyw1LjFjLTEuOSwyLjEtMy43LDQuMy01LjQsNi42CgkJCWMtMC41LDAuNy0xLDEuNC0xLjYsMi4xYy0yLjUsMy41LTQuNyw2LjktNi41LDEwLjNjMC44LDAuMywxLjYsMC42LDIuNCwwLjhjMS41LTIuOCwzLjQtNS44LDUuNy05YzAuNS0wLjcsMS0xLjQsMS41LTIuMQoJCQljMS43LTIuMywzLjYtNC43LDUuNy03LjFjMi0yLjMsNC00LjQsNi02LjNDNzExLjYsNTI4LjUsNzExLjQsNTI4LjMsNzExLjMsNTI4LjF6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTcwNS44LDU0OS4xYy0yLjEtMi40LTQtNC44LTUuNy03LjFjLTAuNSwwLjctMSwxLjQtMS41LDIuMWMxLjcsMi4zLDMuNSw0LjUsNS40LDYuNgoJCQljMS42LDEuOCwzLjEsMy41LDQuNyw1LjFjMC40LDAuNCwwLjksMC45LDEuMywxLjNjMC40LTAuNCwwLjktMC44LDEuMy0xLjNjMC4yLTAuMiwwLjMtMC4zLDAuNS0wLjUKCQkJQzcwOS44LDU1My41LDcwNy44LDU1MS40LDcwNS44LDU0OS4xeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03MzQuMiw1NTQuNmMtMC44LDAuMy0xLjYsMC42LTIuNCwwLjljMy4xLDYuMyw0LDExLDIuNSwxMi43Yy0wLjQsMC41LTEsMC43LTEuOSwwLjcKCQkJYy0zLjMsMC05LjctMy4zLTE3LjYtMTAuNWMtMC40LTAuNC0wLjktMC44LTEuMy0xLjJjLTAuNCwwLjQtMC45LDAuOC0xLjMsMS4zYy0wLjIsMC4yLTAuMywwLjMtMC41LDAuNQoJCQljOC4yLDcuNywxNS45LDEyLjUsMjAuNywxMi41YzIsMCwzLjItMC45LDMuOC0xLjZDNzM4LjcsNTY3LDczNy41LDU2MS4zLDczNC4yLDU1NC42eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02OTIuOCw1MzAuOWMtMC40LTAuOC0wLjgtMS41LTEuMi0yLjNjLTAuOCwwLjMtMS42LDAuNi0yLjQsMC45YzAuNCwwLjgsMC44LDEuNSwxLjIsMi4zCgkJCUM2OTEuMiw1MzEuNCw2OTIsNTMxLjIsNjkyLjgsNTMwLjl6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTczNC4yLDUyOS41Yy0wLjQsMC44LTAuOCwxLjUtMS4yLDIuM2M2LjUsMi42LDEwLjcsNi4zLDEwLjcsMTAuM2MwLDQtNC4yLDcuNy0xMC43LDEwLjMKCQkJYy0wLjgsMC4zLTEuNiwwLjYtMi40LDAuOGMtNC41LDEuNS0xMCwyLjQtMTUuOCwyLjdjLTAuNCwwLjQtMC45LDAuOS0xLjMsMS4zYzAuNCwwLjQsMC45LDAuOCwxLjMsMS4yYzYuNC0wLjMsMTIuMi0xLjMsMTctMi45CgkJCWMwLjgtMC4zLDEuNi0wLjYsMi40LTAuOWM3LjQtMywxMi4xLTcuNSwxMi4xLTEyLjVDNzQ2LjMsNTM2LjksNzQxLjcsNTMyLjUsNzM0LjIsNTI5LjV6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTcwOC42LDU1NS44Yy01LjgtMC4zLTExLjMtMS4yLTE1LjgtMi43Yy0wLjgtMC4zLTEuNi0wLjUtMi40LTAuOGMtNi41LTIuNi0xMC43LTYuMy0xMC43LTEwLjMKCQkJYzAtNCw0LjItNy43LDEwLjctMTAuM2MtMC40LTAuOC0wLjgtMS41LTEuMi0yLjNjLTcuNCwzLTEyLjEsNy41LTEyLjEsMTIuNmMwLDUuMSw0LjYsOS42LDEyLjEsMTIuNWMwLjgsMC4zLDEuNSwwLjYsMi40LDAuOQoJCQljNC45LDEuNiwxMC43LDIuNywxNywyLjljMC40LTAuNCwwLjktMC44LDEuMy0xLjJDNzA5LjUsNTU2LjcsNzA5LjEsNTU2LjMsNzA4LjYsNTU1Ljh6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTczNi4yLDUxNC4zYy0wLjYtMC43LTEuOC0xLjYtMy44LTEuNmMtNC44LDAtMTIuNSw0LjgtMjAuNywxMi41YzAuMiwwLjIsMC4zLDAuMywwLjUsMC41CgkJCWMwLjksMCwxLjcsMCwyLjYsMC4xYzcuOS03LjEsMTQuMy0xMC41LDE3LjYtMTAuNWMwLjksMCwxLjUsMC4yLDEuOSwwLjdjMS41LDEuNywwLjYsNi40LTIuNSwxMi43Yy0wLjQsMC43LTAuOCwxLjUtMS4yLDIuMwoJCQljLTEuNSwyLjgtMy40LDUuOC01LjcsOWMwLjUsMC43LDEsMS40LDEuNiwyLjFjMi41LTMuNSw0LjctNyw2LjUtMTAuM2MwLjQtMC44LDAuOC0xLjUsMS4yLTIuMwoJCQlDNzM3LjUsNTIyLjgsNzM4LjcsNTE3LjEsNzM2LjIsNTE0LjN6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTcyMy40LDU0MmMtMS43LDIuMy0zLjYsNC43LTUuNyw3LjFjLTIsMi4zLTQsNC40LTUuOSw2LjNjMC4yLDAuMiwwLjMsMC4zLDAuNSwwLjVjLTAuMiwwLTAuMywwLTAuNSwwbDAsMAoJCQljLTAuMiwwLTAuMywwLTAuNSwwYy0wLjQsMC40LTAuOSwwLjktMS4zLDEuM2MtMC40LDAuNC0wLjksMC44LTEuMywxLjJjLTcuOSw3LjEtMTQuMywxMC41LTE3LjYsMTAuNWMtMC45LDAtMS41LTAuMi0xLjktMC43CgkJCWMtMS41LTEuNy0wLjYtNi40LDIuNS0xMi43Yy0wLjgtMC4zLTEuNi0wLjYtMi40LTAuOWMtMy4zLDYuNy00LjUsMTIuNC0yLDE1LjJjMC42LDAuNywxLjgsMS42LDMuOCwxLjZjNC44LDAsMTIuNS00LjgsMjAuNy0xMi41CgkJCWMtMC4yLTAuMi0wLjMtMC4zLTAuNS0wLjVjMC4yLDAsMC4zLDAsMC41LDB2LTEuM3YxLjNjMC4yLDAsMC4zLDAsMC41LDBjMC40LTAuNCwwLjktMC44LDEuMy0xLjNjMC41LTAuNCwwLjktMC45LDEuMy0xLjMKCQkJYzEuNi0xLjYsMy4yLTMuMyw0LjctNS4xYzEuOS0yLjEsMy43LTQuNCw1LjQtNi42QzcyNC41LDU0My40LDcyNCw1NDIuNyw3MjMuNCw1NDJ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTcxNC44LDUyNS43Yy0wLjgsMC0xLjctMC4xLTIuNi0wLjFjLTAuMiwwLTAuMywwLTAuNSwwYy0wLjIsMC0wLjMsMC0wLjUsMGMtMC45LDAtMS43LDAtMi42LDAuMQoJCQljLTYuNCwwLjMtMTIuMiwxLjMtMTcsMi45YzAuNCwwLjcsMC44LDEuNSwxLjIsMi4zYzQuNS0xLjUsMTAtMi40LDE1LjgtMi43YzAuOSwwLDEuNy0wLjEsMi42LTAuMWMwLjIsMCwwLjMsMCwwLjUsMAoJCQljMC4yLDAsMC4zLDAsMC41LDBjMC45LDAsMS44LDAsMi42LDAuMWM1LjgsMC4zLDExLjMsMS4yLDE1LjgsMi43YzAuNC0wLjgsMC44LTEuNSwxLjItMi4zQzcyNyw1MjcsNzIxLjIsNTI1LjksNzE0LjgsNTI1Ljd6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTcwNi4yLDU0MmMwLDMuMSwyLjUsNS41LDUuNSw1LjVjMy4xLDAsNS41LTIuNSw1LjUtNS41YzAtMy4xLTIuNS01LjUtNS41LTUuNQoJCQlDNzA4LjcsNTM2LjUsNzA2LjIsNTM5LDcwNi4yLDU0MnoiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04MDMsNDcxLjdjMCwwLjgtMC42LDEuNC0xLjMsMS40aC0zNC44Yy0wLjcsMC0xLjMtMC42LTEuMy0xLjR2LTQzLjNjMC0wLjgsMC42LTEuNCwxLjMtMS40aDM0LjgKCQkJYzAuNywwLDEuMywwLjYsMS4zLDEuNFY0NzEuN3oiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODAzLDQ2OC43YzAsMC44LTAuNiwxLjQtMS4zLDEuNGgtMzQuOGMtMC43LDAtMS4zLTAuNi0xLjMtMS40di00My4zYzAtMC44LDAuNi0xLjQsMS4zLTEuNGgzNC44CgkJCWMwLjcsMCwxLjMsMC42LDEuMywxLjRWNDY4Ljd6Ii8+CgkJPGc+CgkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik03NzguMiw0NDUuNGMwLDAuNi0wLjUsMS4yLTEuMiwxLjJoLTUuMWMtMC42LDAtMS4yLTAuNS0xLjItMS4ydi01LjFjMC0wLjYsMC41LTEuMiwxLjItMS4yaDUuMQoJCQkJYzAuNiwwLDEuMiwwLjUsMS4yLDEuMlY0NDUuNHogTTc4Ny44LDQ0MC40YzAtMC42LTAuNS0xLjItMS4yLTEuMmgtNS4xYy0wLjYsMC0xLjIsMC41LTEuMiwxLjJ2NS4xYzAsMC42LDAuNSwxLjIsMS4yLDEuMmg1LjEKCQkJCWMwLjYsMCwxLjItMC41LDEuMi0xLjJWNDQwLjR6IE03OTcuNSw0NDAuNGMwLTAuNi0wLjUtMS4yLTEuMi0xLjJoLTUuMWMtMC42LDAtMS4yLDAuNS0xLjIsMS4ydjUuMWMwLDAuNiwwLjUsMS4yLDEuMiwxLjJoNS4xCgkJCQljMC42LDAsMS4yLTAuNSwxLjItMS4yVjQ0MC40eiBNNzc4LjIsNDUwYzAtMC42LTAuNS0xLjItMS4yLTEuMmgtNS4xYy0wLjYsMC0xLjIsMC41LTEuMiwxLjJ2NS4xYzAsMC42LDAuNSwxLjIsMS4yLDEuMmg1LjEKCQkJCWMwLjYsMCwxLjItMC41LDEuMi0xLjJWNDUweiBNNzg3LjgsNDUwYzAtMC42LTAuNS0xLjItMS4yLTEuMmgtNS4xYy0wLjYsMC0xLjIsMC41LTEuMiwxLjJ2NS4xYzAsMC42LDAuNSwxLjIsMS4yLDEuMmg1LjEKCQkJCWMwLjYsMCwxLjItMC41LDEuMi0xLjJWNDUweiBNNzc4LjIsNDU5LjZjMC0wLjYtMC41LTEuMi0xLjItMS4yaC01LjFjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMnY1LjFjMCwwLjYsMC41LDEuMiwxLjIsMS4yaDUuMQoJCQkJYzAuNiwwLDEuMi0wLjUsMS4yLTEuMlY0NTkuNnogTTc4Ny44LDQ1OS42YzAtMC42LTAuNS0xLjItMS4yLTEuMmgtNS4xYy0wLjYsMC0xLjIsMC41LTEuMiwxLjJ2NS4xYzAsMC42LDAuNSwxLjIsMS4yLDEuMmg1LjEKCQkJCWMwLjYsMCwxLjItMC41LDEuMi0xLjJWNDU5LjZ6IE03OTcuNSw0NTBjMC0wLjYtMC41LTEuMi0xLjItMS4yaC01LjFjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMnYxNC43YzAsMC42LDAuNSwxLjIsMS4yLDEuMmg1LjEKCQkJCWMwLjYsMCwxLjItMC41LDEuMi0xLjJWNDUweiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTc5OC43LDQyOS4zYzAtMC45LTAuNi0xLjctMS4zLTEuN2gtMjYuNWMtMC43LDAtMS4zLDAuOC0xLjMsMS43djQuNmMwLDAuOSwwLjYsMS43LDEuMywxLjdoMjYuNQoJCQkJYzAuNywwLDEuMy0wLjgsMS4zLTEuN1Y0MjkuM3oiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjI2LjYsNjk4LjJjMCwwLjgtMC42LDEuNC0xLjMsMS40aC0zNC44Yy0wLjcsMC0xLjMtMC42LTEuMy0xLjRWNjU1YzAtMC44LDAuNi0xLjQsMS4zLTEuNGgzNC44CgkJCWMwLjcsMCwxLjMsMC42LDEuMywxLjRWNjk4LjJ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTYyNi42LDY5NS4yYzAsMC44LTAuNiwxLjQtMS4zLDEuNGgtMzQuOGMtMC43LDAtMS4zLTAuNi0xLjMtMS40VjY1MmMwLTAuOCwwLjYtMS40LDEuMy0xLjRoMzQuOAoJCQljMC43LDAsMS4zLDAuNiwxLjMsMS40VjY5NS4yeiIvPgoJCTxnPgoJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjAxLjgsNjcyYzAsMC42LTAuNSwxLjItMS4yLDEuMmgtNS4xYy0wLjYsMC0xLjItMC41LTEuMi0xLjJ2LTUuMWMwLTAuNiwwLjUtMS4yLDEuMi0xLjJoNS4xCgkJCQljMC42LDAsMS4yLDAuNSwxLjIsMS4yVjY3MnogTTYxMS40LDY2Ni45YzAtMC42LTAuNS0xLjItMS4yLTEuMmgtNS4xYy0wLjYsMC0xLjIsMC41LTEuMiwxLjJ2NS4xYzAsMC42LDAuNSwxLjIsMS4yLDEuMmg1LjEKCQkJCWMwLjYsMCwxLjItMC41LDEuMi0xLjJWNjY2Ljl6IE02MjEuMSw2NjYuOWMwLTAuNi0wLjUtMS4yLTEuMi0xLjJoLTUuMWMtMC42LDAtMS4yLDAuNS0xLjIsMS4ydjUuMWMwLDAuNiwwLjUsMS4yLDEuMiwxLjJoNS4xCgkJCQljMC42LDAsMS4yLTAuNSwxLjItMS4yVjY2Ni45eiBNNjAxLjgsNjc2LjVjMC0wLjYtMC41LTEuMi0xLjItMS4yaC01LjFjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMnY1LjFjMCwwLjYsMC41LDEuMiwxLjIsMS4yaDUuMQoJCQkJYzAuNiwwLDEuMi0wLjUsMS4yLTEuMlY2NzYuNXogTTYxMS40LDY3Ni41YzAtMC42LTAuNS0xLjItMS4yLTEuMmgtNS4xYy0wLjYsMC0xLjIsMC41LTEuMiwxLjJ2NS4xYzAsMC42LDAuNSwxLjIsMS4yLDEuMmg1LjEKCQkJCWMwLjYsMCwxLjItMC41LDEuMi0xLjJWNjc2LjV6IE02MDEuOCw2ODYuMmMwLTAuNi0wLjUtMS4yLTEuMi0xLjJoLTUuMWMtMC42LDAtMS4yLDAuNS0xLjIsMS4ydjUuMWMwLDAuNiwwLjUsMS4yLDEuMiwxLjJoNS4xCgkJCQljMC42LDAsMS4yLTAuNSwxLjItMS4yVjY4Ni4yeiBNNjExLjQsNjg2LjJjMC0wLjYtMC41LTEuMi0xLjItMS4yaC01LjFjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMnY1LjFjMCwwLjYsMC41LDEuMiwxLjIsMS4yaDUuMQoJCQkJYzAuNiwwLDEuMi0wLjUsMS4yLTEuMlY2ODYuMnogTTYyMS4xLDY3Ni41YzAtMC42LTAuNS0xLjItMS4yLTEuMmgtNS4xYy0wLjYsMC0xLjIsMC41LTEuMiwxLjJ2MTQuN2MwLDAuNiwwLjUsMS4yLDEuMiwxLjJoNS4xCgkJCQljMC42LDAsMS4yLTAuNSwxLjItMS4yVjY3Ni41eiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTYyMi4zLDY1NS44YzAtMC45LTAuNi0xLjctMS4zLTEuN2gtMjYuNWMtMC43LDAtMS4zLDAuOC0xLjMsMS43djQuNmMwLDAuOSwwLjYsMS43LDEuMywxLjdINjIxCgkJCQljMC43LDAsMS4zLTAuOCwxLjMtMS43VjY1NS44eiIvPgoJCTwvZz4KCTwvZz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05MDMuNSw0MzQuOWMtMS40LTIuMy0wLjUtNS41LDAuNC03LjZjMi4zLTIuMSw0LjEtNSw1LjEtOC4zYzAuMywwLjQsMC42LDAuNiwwLjksMC42YzEsMCwxLjgtMiwxLjgtNC40CgkJYzAtMi40LTAuOC00LjQtMS44LTQuNGMwLDAsMCwwLDAsMGMtMC41LTkuMS00LjMtMTYuMS0xNS0xNi4xYy0xMC45LDAtMTQuNSw3LTE1LDE2LjFjMCwwLDAsMC0wLjEsMGMtMSwwLTEuOCwyLTEuOCw0LjQKCQljMCwyLjQsMC44LDQuNCwxLjgsNC40YzAuMywwLDAuNi0wLjIsMC45LTAuNmMxLDMuMywyLjgsNi4yLDUuMSw4LjNjMC45LDIuMSwxLjgsNS4yLDAuNCw3LjZjMCwwLTIzLjYsOC42LTIzLjYsMTguNGg2NC40CgkJQzkyNy4xLDQ0My41LDkwMy41LDQzNC45LDkwMy41LDQzNC45eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTc0MC41LDY2MC43Yy0xLjQtMi4zLTAuNS01LjUsMC40LTcuNmMyLjMtMi4xLDQuMS01LDUuMS04LjNjMC4zLDAuNCwwLjYsMC42LDAuOSwwLjZjMSwwLDEuOC0yLDEuOC00LjQKCQljMC0yLjQtMC44LTQuNC0xLjgtNC40YzAsMCwwLDAsMCwwYy0wLjUtOS4xLTQuMy0xNi4xLTE1LTE2LjFjLTEwLjksMC0xNC41LDctMTUsMTYuMWMwLDAsMCwwLTAuMSwwYy0xLDAtMS44LDItMS44LDQuNAoJCWMwLDIuNCwwLjgsNC40LDEuOCw0LjRjMC4zLDAsMC42LTAuMiwwLjktMC42YzEsMy4zLDIuOCw2LjIsNS4xLDguM2MwLjksMi4xLDEuOCw1LjIsMC40LDcuNmMwLDAtMjMuNiw4LjYtMjMuNiwxOC40aDY0LjQKCQlDNzY0LjEsNjY5LjMsNzQwLjUsNjYwLjcsNzQwLjUsNjYwLjd6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTQzLjUsNTU3LjVjLTEuNC0yLjMtMC41LTUuNSwwLjQtNy42YzIuMy0yLjEsNC4xLTUsNS4xLTguM2MwLjMsMC40LDAuNiwwLjYsMC45LDAuNmMxLDAsMS44LTIsMS44LTQuNAoJCWMwLTIuNC0wLjgtNC40LTEuOC00LjRjMCwwLDAsMCwwLDBjLTAuNS05LjEtNC4zLTE2LjEtMTUtMTYuMWMtMTAuOSwwLTE0LjUsNy0xNSwxNi4xYzAsMCwwLDAtMC4xLDBjLTEsMC0xLjgsMi0xLjgsNC40CgkJYzAsMi40LDAuOCw0LjQsMS44LDQuNGMwLjMsMCwwLjYtMC4yLDAuOS0wLjZjMSwzLjMsMi44LDYuMiw1LjEsOC4zYzAuOSwyLjEsMS44LDUuMiwwLjQsNy42YzAsMC0yMy42LDguNi0yMy42LDE4LjRoNjQuNAoJCUMxNjcuMSw1NjYuMSwxNDMuNSw1NTcuNSwxNDMuNSw1NTcuNXoiLz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00NzcuNSwxOTUuM2wtMTguNC0yNi4zYy0wLjYtMC44LTEuMS0yLjQtMS4xLTMuNXYtMTcuM2MxLjMsMCwyLjMtMSwyLjMtMi4zYzAtMS4zLTEtMi4zLTIuMy0yLjNoLTEuOWgtMi42CgkJCWMtMS4xLDAtMi44LDAtMy44LDBINDQ3aC0xLjljLTEuMywwLTIuMywxLTIuMywyLjNjMCwxLjMsMSwyLjMsMi4zLDIuM3YxNy4zYzAsMS0wLjUsMi42LTEuMSwzLjVsLTE4LjQsMjYuMwoJCQljLTAuNiwwLjktMC42LDIuMy0wLjEsMy4ybDIuMSwzLjRjMC41LDAuOSwxLjksMS42LDIuOSwxLjZoMTkuMWMxLDAsMi43LDAsMy44LDBoMTkuMWMxLDAsMi40LTAuNywyLjktMS42bDIuMS0zLjQKCQkJQzQ3OC4xLDE5Ny42LDQ3OC4xLDE5Ni4xLDQ3Ny41LDE5NS4zeiIvPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iNDQxLjEsMTgxLjkgNDMwLjYsMTk3IDQzMS40LDE5OC40IDQ3MS42LDE5OC40IDQ3Mi41LDE5NyA0NjIsMTgxLjkgCQkiLz4KCQk8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iNDQyLjciIGN5PSIxODguOCIgcng9IjIuNyIgcnk9IjIuNyIvPgoJCTxlbGxpcHNlIGNsYXNzPSJzdDEiIGN4PSI0NTMuNSIgY3k9IjE3Mi44IiByeD0iMi43IiByeT0iMi43Ii8+CgkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iNDQ3LjkiIGN5PSIxMzYuNiIgcj0iMi43Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjQ0Ny45IiBjeT0iMTc3LjQiIHJ4PSIxLjgiIHJ5PSIxLjgiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSI0NTMiIGN5PSIxNTguNSIgcj0iMS40Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjQ1NC40IiBjeT0iMTM5LjMiIHJ4PSIxLjQiIHJ5PSIxLjQiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI0NTAiIGN5PSIxOTMuMSIgcj0iMy41Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjQ1OC45IiBjeT0iMTg3LjYiIHJ4PSIyLjUiIHJ5PSIyLjUiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSI0NTEuNSIgY3k9IjE2NS43IiByPSIyIi8+CgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTQ1My4zLDE1M2MwLDEuMS0wLjksMi0yLDJjLTEuMSwwLTItMC45LTItMmMwLTEuMSwwLjktMiwyLTJDNDUyLjQsMTUxLjEsNDUzLjMsMTUxLjksNDUzLjMsMTUzeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00NTYuNCwxMzEuOWMwLDEuMS0wLjksMi0yLDJjLTEuMSwwLTItMC45LTItMmMwLTEuMSwwLjktMiwyLTJDNDU1LjUsMTI5LjksNDU2LjQsMTMwLjgsNDU2LjQsMTMxLjl6Ii8+Cgk8L2c+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTg5LjgsMTc0LjZjLTEuNC0yLjMtMC41LTUuNSwwLjQtNy42YzIuMy0yLjEsNC4xLTUsNS4xLTguM2MwLjMsMC40LDAuNiwwLjYsMC45LDAuNmMxLDAsMS44LTIsMS44LTQuNAoJCWMwLTIuNC0wLjgtNC40LTEuOC00LjRjMCwwLDAsMCwwLDBjLTAuNS05LjEtNC4zLTE2LjEtMTUtMTYuMWMtMTAuOSwwLTE0LjUsNy0xNSwxNi4xYzAsMCwwLDAtMC4xLDBjLTEsMC0xLjgsMi0xLjgsNC40CgkJYzAsMi40LDAuOCw0LjQsMS44LDQuNGMwLjMsMCwwLjYtMC4yLDAuOS0wLjZjMSwzLjMsMi44LDYuMiw1LjEsOC4zYzAuOSwyLjEsMS44LDUuMiwwLjQsNy42YzAsMC0yMy42LDguNi0yMy42LDE4LjRoNjQuNAoJCUM2MTMuNCwxODMuMiw1ODkuOCwxNzQuNiw1ODkuOCwxNzQuNnoiLz4KPC9nPgo8L3N2Zz4K) repeat 0 0; }\n\n.equatio-youtube-wrapper {\n  margin: 0 auto;\n  display: block;\n  width: 560px;\n  border: 1px solid #FFF;\n  height: 314px;\n  overflow: hidden; }\n\n.equatio-login-link {\n  color: #FFF; }\n  .equatio-login-link:hover {\n    color: #f2f2f2; }\n", "" ]);
}, function(t, e, i) {
    var o, M = i(68);
    "string" == typeof M && (M = [ [ t.i, M, "" ] ]);
    var s = {
        hmr: !0
    };
    s.transform = o, s.insertInto = void 0;
    i(10)(M, s);
    M.locals && (t.exports = M.locals);
}, function(t, e, i) {
    (t.exports = i(9)(void 0)).push([ t.i, ".equatio-buttonset {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  margin: 0 20px; }\n\n.equatio-buttonset.equatio-buttonset--no-margin {\n  margin: 0; }\n\n.equatio-buttonset__item {\n  margin: 0 10px; }\n  .equatio-buttonset__item:last-child {\n    margin-right: 0; }\n\n.equatio-buttonset__item--full-width {\n  width: 100%; }\n\n.equatio-buttonset--right,\n.equatio-buttonset--vertical--right {\n  -webkit-box-direction: normal;\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -moz-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  -webkit-justify-content: flex-end;\n  -moz-justify-content: flex-end;\n  justify-content: flex-end; }\n\n.equatio-buttonset--center,\n.equatio-buttonset--vertical--center {\n  -webkit-box-direction: normal;\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -moz-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center; }\n\n.equatio-buttonset--vertical {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  margin: 20px 0; }\n  .equatio-buttonset--vertical .equatio-buttonset__item {\n    margin: 10px 0; }\n\n/* stylelint-disable */\n/* stylelint-enable */\n.equatio-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  font-family: Roboto, Arial, sans-serif;\n  background: #00B7FF;\n  color: #FFF;\n  text-transform: uppercase;\n  cursor: pointer;\n  padding: 7px 10px;\n  font-size: 0.85em;\n  margin: 0 10px;\n  min-width: 165px;\n  border-radius: 3px;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 600;\n  -webkit-box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n  -moz-box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n  box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n  letter-spacing: -0.2px; }\n  .equatio-button:hover, .equatio-button:active {\n    background: #33c5ff; }\n  .equatio-button:first-child {\n    margin-left: 0; }\n  .equatio-button:last-child {\n    margin-right: 0; }\n  .equatio-button[disabled] {\n    background: rgba(70, 70, 70, 0.23);\n    cursor: default; }\n\n.equatio-button--white {\n  background: #FFF;\n  color: #00B7FF; }\n  .equatio-button--white:hover {\n    background: #e6f8ff; }\n\n.equatio-button--gold {\n  background: #E5BD13;\n  color: #FFF;\n  font-weight: 500; }\n  .equatio-button--gold:hover {\n    background: #ecc41b; }\n\n.equatio-button--single {\n  margin: 0; }\n\n.equatio-button--small {\n  min-width: 0; }\n\n@media all and (max-width: 945px) {\n  .equatio-toolbar .equatio-button-edit,\n  .equatio-toolbar .equatio-button-insert {\n    width: 32px;\n    min-width: 0;\n    padding: 0;\n    text-indent: -9999px;\n    overflow: hidden;\n    height: 32px;\n    background-position: 50% 50%;\n    background-repeat: no-repeat; }\n  .equatio-toolbar .equatio-button-edit {\n    /* stylelint-disable-next-line */\n    background-image: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='20px' viewBox='0 0 24 24'>%3Cpath d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' fill='%23FFF' /%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E</svg>\"); }\n  .equatio-toolbar .equatio-button-insert {\n    /* stylelint-disable-next-line */\n    background-image: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='20px' viewBox='0 0 24 24'>%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' fill='%23FFF' /%3E</svg>\"); } }\n\n.equatio-button.equatio-copy-button {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  text-transform: none;\n  padding: 0;\n  box-sizing: border-box;\n  height: 32px;\n  width: 32px;\n  -webkit-font-smoothing: antialiased; }\n\n.equatio-copy-button__icon {\n  height: 20px; }\n\n/* stylelint-disable */\n/* stylelint-enable */\n@keyframes vjXdlbbW_draw {\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_fade {\n  0% {\n    stroke-opacity: 1; }\n  77.77777777777777% {\n    stroke-opacity: 1; }\n  100% {\n    stroke-opacity: 0; } }\n\n@keyframes vjXdlbbW_draw_0 {\n  0% {\n    stroke-dashoffset: 2317; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_1 {\n  0% {\n    stroke-dashoffset: 282; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_2 {\n  0% {\n    stroke-dashoffset: 504; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_3 {\n  0% {\n    stroke-dashoffset: 282; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_4 {\n  0% {\n    stroke-dashoffset: 504; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_5 {\n  0% {\n    stroke-dashoffset: 282; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_6 {\n  0% {\n    stroke-dashoffset: 504; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_7 {\n  0% {\n    stroke-dashoffset: 282; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_8 {\n  0% {\n    stroke-dashoffset: 504; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@-webkit-keyframes rotate {\n  20% {\n    -webkit-transform: rotateY(180deg); }\n  30% {\n    -webkit-transform: rotateY(360deg); }\n  100% {\n    -webkit-transform: rotateY(360deg); } }\n\n.equatio-save-loading-spinner {\n  padding: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  margin: 5px;\n  /* stylelint-disable-next-line */\n  background: #28D88C url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='27' viewBox='0 0 912 912'>%3Cstyle type='text/css'%3E\t.st0{fill:none;stroke:%23FFF;stroke-width:52.5138;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st1{fill:none;stroke:%23FFF;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st2{fill:none;stroke:%23FFF;stroke-width:40.8129;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  %3C/style%3E  %3Cpath class='st0 vjXdlbbW_0' d='M833.3,513.4L523,823.8c-54.5,0-85.6,0-140,0L72.6,513.4c0-54.5,0-85.6,0-140L383,63.1c54.5,0,85.6,0,140,0\tl310.3,310.3C833.3,427.9,833.3,459,833.3,513.4z'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_1' d='M262.8,445.6L461.1,643.9'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_2' d='M453.4,650.2L401.9,701.7L97.8,397.6'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_3' d='M449.1,637.7L647.4,439.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_4' d='M653.7,447.1L705.2,498.6L401,802.7'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_5' d='M643.3,444.5L445,246.2'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_6' d='M452.8,239.8L504.2,188.4L808.4,492.5'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_7' d='M452.8,253.1L254.5,451.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_8' d='M248.2,443.6L196.7,392.2L500.9,88.1'%3E%3C/path%3E  %3Cstyle%3E@supports (-webkit-appearance:none) { .vjXdlbbW_0{stroke-dasharray:2316 2318;stroke-dashoffset:2317;animation:vjXdlbbW_draw_0 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_1{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_1 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_2{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_2 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_3{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_3 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_4{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_4 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_5{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_5 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_6{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_6 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_7{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_7 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_8{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_8 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}@keyframes vjXdlbbW_draw{100%{stroke-dashoffset:0;}}@keyframes vjXdlbbW_fade{0%{stroke-opacity:1;}77.77777777777777%{stroke-opacity:1;}100%{stroke-opacity:0;}}@keyframes vjXdlbbW_draw_0{0%{stroke-dashoffset: 2317}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_1{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_2{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_3{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_4{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_5{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_6{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_7{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_8{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}} }%3C/style%3E</svg>\") 50% 50% no-repeat; }\n\n.equatio-loading-spinner {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  box-sizing: border-box;\n  /* stylelint-disable-next-line */\n  background: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='80' viewBox='0 0 912 912'>%3Cstyle type='text/css'%3E\t.st0{fill:none;stroke:%2300B7FF;stroke-width:52.5138;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st1{fill:none;stroke:%2300B7FF;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st2{fill:none;stroke:%2300B7FF;stroke-width:40.8129;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  %3C/style%3E  %3Cpath class='st0 vjXdlbbW_0' d='M833.3,513.4L523,823.8c-54.5,0-85.6,0-140,0L72.6,513.4c0-54.5,0-85.6,0-140L383,63.1c54.5,0,85.6,0,140,0\tl310.3,310.3C833.3,427.9,833.3,459,833.3,513.4z'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_1' d='M262.8,445.6L461.1,643.9'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_2' d='M453.4,650.2L401.9,701.7L97.8,397.6'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_3' d='M449.1,637.7L647.4,439.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_4' d='M653.7,447.1L705.2,498.6L401,802.7'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_5' d='M643.3,444.5L445,246.2'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_6' d='M452.8,239.8L504.2,188.4L808.4,492.5'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_7' d='M452.8,253.1L254.5,451.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_8' d='M248.2,443.6L196.7,392.2L500.9,88.1'%3E%3C/path%3E  %3Cstyle%3E@supports (-webkit-appearance:none) { .vjXdlbbW_0{stroke-dasharray:2316 2318;stroke-dashoffset:2317;animation:vjXdlbbW_draw_0 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_1{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_1 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_2{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_2 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_3{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_3 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_4{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_4 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_5{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_5 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_6{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_6 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_7{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_7 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_8{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_8 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}@keyframes vjXdlbbW_draw{100%{stroke-dashoffset:0;}}@keyframes vjXdlbbW_fade{0%{stroke-opacity:1;}77.77777777777777%{stroke-opacity:1;}100%{stroke-opacity:0;}}@keyframes vjXdlbbW_draw_0{0%{stroke-dashoffset: 2317}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_1{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_2{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_3{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_4{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_5{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_6{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_7{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_8{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}} }%3C/style%3E</svg>\") 50% 50% no-repeat;\n  padding-top: 100px;\n  background-size: 80px; }\n  .equatio-loading-spinner.equatio-loading-spinner--white {\n    /* stylelint-disable-next-line */\n    background-image: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='80' viewBox='0 0 912 912'>%3Cstyle type='text/css'%3E\t.st0{fill:none;stroke:%23FFF;stroke-width:52.5138;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st1{fill:none;stroke:%23FFF;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st2{fill:none;stroke:%23FFF;stroke-width:40.8129;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  %3C/style%3E  %3Cpath class='st0 vjXdlbbW_0' d='M833.3,513.4L523,823.8c-54.5,0-85.6,0-140,0L72.6,513.4c0-54.5,0-85.6,0-140L383,63.1c54.5,0,85.6,0,140,0\tl310.3,310.3C833.3,427.9,833.3,459,833.3,513.4z'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_1' d='M262.8,445.6L461.1,643.9'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_2' d='M453.4,650.2L401.9,701.7L97.8,397.6'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_3' d='M449.1,637.7L647.4,439.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_4' d='M653.7,447.1L705.2,498.6L401,802.7'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_5' d='M643.3,444.5L445,246.2'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_6' d='M452.8,239.8L504.2,188.4L808.4,492.5'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_7' d='M452.8,253.1L254.5,451.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_8' d='M248.2,443.6L196.7,392.2L500.9,88.1'%3E%3C/path%3E  %3Cstyle%3E@supports (-webkit-appearance:none) { .vjXdlbbW_0{stroke-dasharray:2316 2318;stroke-dashoffset:2317;animation:vjXdlbbW_draw_0 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_1{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_1 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_2{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_2 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_3{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_3 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_4{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_4 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_5{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_5 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_6{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_6 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_7{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_7 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_8{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_8 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}@keyframes vjXdlbbW_draw{100%{stroke-dashoffset:0;}}@keyframes vjXdlbbW_fade{0%{stroke-opacity:1;}77.77777777777777%{stroke-opacity:1;}100%{stroke-opacity:0;}}@keyframes vjXdlbbW_draw_0{0%{stroke-dashoffset: 2317}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_1{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_2{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_3{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_4{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_5{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_6{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_7{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_8{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}} }%3C/style%3E</svg>\"); }\n    .equatio-loading-spinner.equatio-loading-spinner--white .equatio-loading-spinner__message {\n      color: #FFF; }\n\n.equatio-drawer__content__pane__spinner {\n  height: 200px; }\n  .equatio-drawer__content__pane__spinner .equatio-loading-spinner__icon {\n    height: 80px;\n    -webkit-animation-name: rotate;\n    -webkit-animation-duration: 3s;\n    -webkit-animation-iteration-count: infinite;\n    -webkit-animation-timing-function: ease-in-out; }\n\n.equatio-loading-spinner__message {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  color: #00B7FF;\n  font-weight: 600;\n  -webkit-font-smoothing: antialiased; }\n\n.equatio-login {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  margin-top: -30px; }\n\n.equatio-login-logo {\n  display: block;\n  width: 300px;\n  margin: 30px auto; }\n\n.equatio-login-get-started {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  color: #FFF;\n  font-size: 1.5em;\n  -webkit-font-smoothing: antialiased;\n  margin: 20px;\n  text-align: center; }\n\n.equatio-login-get-started-action {\n  font-size: 1.3em;\n  justify-content: center; }\n\n.equatio-login-get-started-action .equatio-button {\n  margin: 0 10px; }\n\n.equatio-login-dismiss-link {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  text-align: center;\n  padding: 10px 0; }\n  .equatio-login-dismiss-link a {\n    -webkit-font-smoothing: antialiased;\n    font-size: 1.2em;\n    color: #FFF;\n    text-decoration: underline; }\n    .equatio-login-dismiss-link a:hover {\n      color: #f2f2f2; }\n", "" ]);
} ]);