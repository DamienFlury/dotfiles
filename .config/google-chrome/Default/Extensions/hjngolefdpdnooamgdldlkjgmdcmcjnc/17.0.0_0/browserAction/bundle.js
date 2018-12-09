!function(e) {
    var t = {};
    function o(r) {
        if (t[r]) return t[r].exports;
        var a = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, o), a.l = !0, a.exports;
    }
    o.m = e, o.c = t, o.d = function(e, t, r) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        });
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (o.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var a in e) o.d(r, a, function(t) {
            return e[t];
        }.bind(null, a));
        return r;
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return o.d(t, "a", t), t;
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, o.p = "/", o(o.s = 55);
}([ function(e, t, o) {
    "use strict";
    o.r(t), o.d(t, "h", function() {
        return l;
    }), o.d(t, "createElement", function() {
        return l;
    }), o.d(t, "cloneElement", function() {
        return d;
    }), o.d(t, "Component", function() {
        return D;
    }), o.d(t, "render", function() {
        return H;
    }), o.d(t, "rerender", function() {
        return h;
    }), o.d(t, "options", function() {
        return a;
    });
    var r = function() {}, a = {}, n = [], i = [];
    function l(e, t) {
        var o, l, s, c, d = i;
        for (c = arguments.length; c-- > 2; ) n.push(arguments[c]);
        for (t && null != t.children && (n.length || n.push(t.children), delete t.children); n.length; ) if ((l = n.pop()) && void 0 !== l.pop) for (c = l.length; c--; ) n.push(l[c]); else "boolean" == typeof l && (l = null), 
        (s = "function" != typeof e) && (null == l ? l = "" : "number" == typeof l ? l = String(l) : "string" != typeof l && (s = !1)), 
        s && o ? d[d.length - 1] += l : d === i ? d = [ l ] : d.push(l), o = s;
        var u = new r();
        return u.nodeName = e, u.children = d, u.attributes = null == t ? void 0 : t, u.key = null == t ? void 0 : t.key, 
        void 0 !== a.vnode && a.vnode(u), u;
    }
    function s(e, t) {
        for (var o in t) e[o] = t[o];
        return e;
    }
    var c = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
    function d(e, t) {
        return l(e.nodeName, s(s({}, e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
    }
    var u = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i, p = [];
    function f(e) {
        !e._dirty && (e._dirty = !0) && 1 == p.push(e) && (a.debounceRendering || c)(h);
    }
    function h() {
        var e, t = p;
        for (p = []; e = t.pop(); ) e._dirty && F(e);
    }
    function m(e, t, o) {
        return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && v(e, t.nodeName) : o || e._componentConstructor === t.nodeName;
    }
    function v(e, t) {
        return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase();
    }
    function y(e) {
        var t = s({}, e.attributes);
        t.children = e.children;
        var o = e.nodeName.defaultProps;
        if (void 0 !== o) for (var r in o) void 0 === t[r] && (t[r] = o[r]);
        return t;
    }
    function b(e, t) {
        var o = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);
        return o.normalizedNodeName = e, o;
    }
    function g(e) {
        var t = e.parentNode;
        t && t.removeChild(e);
    }
    function z(e, t, o, r, a) {
        if ("className" === t && (t = "class"), "key" === t) ; else if ("ref" === t) o && o(null), 
        r && r(e); else if ("class" !== t || a) if ("style" === t) {
            if (r && "string" != typeof r && "string" != typeof o || (e.style.cssText = r || ""), 
            r && "object" == typeof r) {
                if ("string" != typeof o) for (var n in o) n in r || (e.style[n] = "");
                for (var n in r) e.style[n] = "number" == typeof r[n] && !1 === u.test(n) ? r[n] + "px" : r[n];
            }
        } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || ""); else if ("o" == t[0] && "n" == t[1]) {
            var i = t !== (t = t.replace(/Capture$/, ""));
            t = t.toLowerCase().substring(2), r ? o || e.addEventListener(t, _, i) : e.removeEventListener(t, _, i), 
            (e._listeners || (e._listeners = {}))[t] = r;
        } else if ("list" !== t && "type" !== t && !a && t in e) {
            try {
                e[t] = null == r ? "" : r;
            } catch (e) {}
            null != r && !1 !== r || "spellcheck" == t || e.removeAttribute(t);
        } else {
            var l = a && t !== (t = t.replace(/^xlink:?/, ""));
            null == r || !1 === r ? l ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (l ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r));
        } else e.className = r || "";
    }
    function _(e) {
        return this._listeners[e.type](a.event && a.event(e) || e);
    }
    var w = [], M = 0, x = !1, k = !1;
    function L() {
        for (var e; e = w.pop(); ) a.afterMount && a.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
    function C(e, t, o, r, a, n) {
        M++ || (x = null != a && void 0 !== a.ownerSVGElement, k = null != e && !("__preactattr_" in e));
        var i = j(e, t, o, r, n);
        return a && i.parentNode !== a && a.appendChild(i), --M || (k = !1, n || L()), i;
    }
    function j(e, t, o, r, a) {
        var n = e, i = x;
        if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || a) ? e.nodeValue != t && (e.nodeValue = t) : (n = document.createTextNode(t), 
        e && (e.parentNode && e.parentNode.replaceChild(n, e), S(e, !0))), n.__preactattr_ = !0, 
        n;
        var l = t.nodeName;
        if ("function" == typeof l) return G(e, t, o, r);
        if (x = "svg" === l || "foreignObject" !== l && x, l = String(l), (!e || !v(e, l)) && (n = b(l, x), 
        e)) {
            for (;e.firstChild; ) n.appendChild(e.firstChild);
            e.parentNode && e.parentNode.replaceChild(n, e), S(e, !0);
        }
        var s = n.firstChild, c = n.__preactattr_, d = t.children;
        if (null == c) {
            c = n.__preactattr_ = {};
            for (var u = n.attributes, p = u.length; p--; ) c[u[p].name] = u[p].value;
        }
        return !k && d && 1 === d.length && "string" == typeof d[0] && null != s && void 0 !== s.splitText && null == s.nextSibling ? s.nodeValue != d[0] && (s.nodeValue = d[0]) : (d && d.length || null != s) && q(n, d, o, r, k || null != c.dangerouslySetInnerHTML), 
        V(n, t.attributes, c), x = i, n;
    }
    function q(e, t, o, r, a) {
        var n, i, l, s, c, d = e.childNodes, u = [], p = {}, f = 0, h = 0, v = d.length, y = 0, b = t ? t.length : 0;
        if (0 !== v) for (var z = 0; z < v; z++) {
            var _ = d[z], w = _.__preactattr_;
            null != (M = b && w ? _._component ? _._component.__key : w.key : null) ? (f++, 
            p[M] = _) : (w || (void 0 !== _.splitText ? !a || _.nodeValue.trim() : a)) && (u[y++] = _);
        }
        if (0 !== b) for (z = 0; z < b; z++) {
            var M;
            if (c = null, null != (M = (s = t[z]).key)) f && void 0 !== p[M] && (c = p[M], p[M] = void 0, 
            f--); else if (h < y) for (n = h; n < y; n++) if (void 0 !== u[n] && m(i = u[n], s, a)) {
                c = i, u[n] = void 0, n === y - 1 && y--, n === h && h++;
                break;
            }
            c = j(c, s, o, r), l = d[z], c && c !== e && c !== l && (null == l ? e.appendChild(c) : c === l.nextSibling ? g(l) : e.insertBefore(c, l));
        }
        if (f) for (var z in p) void 0 !== p[z] && S(p[z], !1);
        for (;h <= y; ) void 0 !== (c = u[y--]) && S(c, !1);
    }
    function S(e, t) {
        var o = e._component;
        o ? P(o) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), 
        !1 !== t && null != e.__preactattr_ || g(e), E(e));
    }
    function E(e) {
        for (e = e.lastChild; e; ) {
            var t = e.previousSibling;
            S(e, !0), e = t;
        }
    }
    function V(e, t, o) {
        var r;
        for (r in o) t && null != t[r] || null == o[r] || z(e, r, o[r], o[r] = void 0, x);
        for (r in t) "children" === r || "innerHTML" === r || r in o && t[r] === ("value" === r || "checked" === r ? e[r] : o[r]) || z(e, r, o[r], o[r] = t[r], x);
    }
    var T = [];
    function O(e, t, o) {
        var r, a = T.length;
        for (e.prototype && e.prototype.render ? (r = new e(t, o), D.call(r, t, o)) : ((r = new D(t, o)).constructor = e, 
        r.render = I); a--; ) if (T[a].constructor === e) return r.nextBase = T[a].nextBase, 
        T.splice(a, 1), r;
        return r;
    }
    function I(e, t, o) {
        return this.constructor(e, o);
    }
    function N(e, t, o, r, n) {
        e._disable || (e._disable = !0, e.__ref = t.ref, e.__key = t.key, delete t.ref, 
        delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || n ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r)), 
        r && r !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = r), 
        e.prevProps || (e.prevProps = e.props), e.props = t, e._disable = !1, 0 !== o && (1 !== o && !1 === a.syncComponentUpdates && e.base ? f(e) : F(e, 1, n)), 
        e.__ref && e.__ref(e));
    }
    function F(e, t, o, r) {
        if (!e._disable) {
            var n, i, l, c = e.props, d = e.state, u = e.context, p = e.prevProps || c, f = e.prevState || d, h = e.prevContext || u, m = e.base, v = e.nextBase, b = m || v, g = e._component, z = !1, _ = h;
            if (e.constructor.getDerivedStateFromProps && (d = s(s({}, d), e.constructor.getDerivedStateFromProps(c, d)), 
            e.state = d), m && (e.props = p, e.state = f, e.context = h, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(c, d, u) ? z = !0 : e.componentWillUpdate && e.componentWillUpdate(c, d, u), 
            e.props = c, e.state = d, e.context = u), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, 
            e._dirty = !1, !z) {
                n = e.render(c, d, u), e.getChildContext && (u = s(s({}, u), e.getChildContext())), 
                m && e.getSnapshotBeforeUpdate && (_ = e.getSnapshotBeforeUpdate(p, f));
                var x, k, j = n && n.nodeName;
                if ("function" == typeof j) {
                    var q = y(n);
                    (i = g) && i.constructor === j && q.key == i.__key ? N(i, q, 1, u, !1) : (x = i, 
                    e._component = i = O(j, q, u), i.nextBase = i.nextBase || v, i._parentComponent = e, 
                    N(i, q, 0, u, !1), F(i, 1, o, !0)), k = i.base;
                } else l = b, (x = g) && (l = e._component = null), (b || 1 === t) && (l && (l._component = null), 
                k = C(l, n, u, o || !m, b && b.parentNode, !0));
                if (b && k !== b && i !== g) {
                    var E = b.parentNode;
                    E && k !== E && (E.replaceChild(k, b), x || (b._component = null, S(b, !1)));
                }
                if (x && P(x), e.base = k, k && !r) {
                    for (var V = e, T = e; T = T._parentComponent; ) (V = T).base = k;
                    k._component = V, k._componentConstructor = V.constructor;
                }
            }
            for (!m || o ? w.unshift(e) : z || (e.componentDidUpdate && e.componentDidUpdate(p, f, _), 
            a.afterUpdate && a.afterUpdate(e)); e._renderCallbacks.length; ) e._renderCallbacks.pop().call(e);
            M || r || L();
        }
    }
    function G(e, t, o, r) {
        for (var a = e && e._component, n = a, i = e, l = a && e._componentConstructor === t.nodeName, s = l, c = y(t); a && !s && (a = a._parentComponent); ) s = a.constructor === t.nodeName;
        return a && s && (!r || a._component) ? (N(a, c, 3, o, r), e = a.base) : (n && !l && (P(n), 
        e = i = null), a = O(t.nodeName, c, o), e && !a.nextBase && (a.nextBase = e, i = null), 
        N(a, c, 1, o, r), e = a.base, i && e !== i && (i._component = null, S(i, !1))), 
        e;
    }
    function P(e) {
        a.beforeUnmount && a.beforeUnmount(e);
        var t = e.base;
        e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
        var o = e._component;
        o ? P(o) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), 
        e.nextBase = t, g(t), T.push(e), E(t)), e.__ref && e.__ref(null);
    }
    function D(e, t) {
        this._dirty = !0, this.context = t, this.props = e, this.state = this.state || {}, 
        this._renderCallbacks = [];
    }
    function H(e, t, o) {
        return C(o, e, {}, !1, t, !1);
    }
    s(D.prototype, {
        setState: function(e, t) {
            this.prevState || (this.prevState = this.state), this.state = s(s({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), 
            t && this._renderCallbacks.push(t), f(this);
        },
        forceUpdate: function(e) {
            e && this._renderCallbacks.push(e), F(this, 2);
        },
        render: function() {}
    });
    var W = {
        h: l,
        createElement: l,
        cloneElement: d,
        Component: D,
        render: H,
        rerender: h,
        options: a
    };
    t.default = W;
}, function(e, t, o) {
    "use strict";
    o.d(t, "c", function() {
        return y;
    }), o.d(t, "b", function() {
        return Me;
    }), o.d(t, "a", function() {
        return Fe;
    });
    var r = o(16), a = o.n(r), n = o(5), i = o.n(n), l = o(6), s = o.n(l), c = o(3), d = o.n(c), u = o(2), p = o(8), f = o.n(p), h = o(7), m = o.n(h), v = {
        locale: "en",
        pluralRuleFunction: function(e, t) {
            var o = String(e).split("."), r = !o[1], a = Number(o[0]) == e, n = a && o[0].slice(-1), i = a && o[0].slice(-2);
            return t ? 1 == n && 11 != i ? "one" : 2 == n && 12 != i ? "two" : 3 == n && 13 != i ? "few" : "other" : 1 == e && r ? "one" : "other";
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
    function y() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        (Array.isArray(e) ? e : [ e ]).forEach(function(e) {
            e && e.locale && (i.a.__addLocaleData(e), s.a.__addLocaleData(e));
        });
    }
    function b(e) {
        for (var t = (e || "").split("-"); t.length > 0; ) {
            if (g(t.join("-"))) return !0;
            t.pop();
        }
        return !1;
    }
    function g(e) {
        var t = e && e.toLowerCase();
        return !(!i.a.__localeData__[t] || !s.a.__localeData__[t]);
    }
    var z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, _ = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }, w = function() {
        function e(e, t) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, o, r) {
            return o && e(t.prototype, o), r && e(t, r), t;
        };
    }(), M = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var o = arguments[t];
            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
        }
        return e;
    }, x = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }, k = function(e, t) {
        var o = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (o[r] = e[r]);
        return o;
    }, L = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }, C = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, o = Array(e.length); t < e.length; t++) o[t] = e[t];
            return o;
        }
        return Array.from(e);
    }, j = d.a.bool, q = d.a.number, S = d.a.string, E = d.a.func, V = d.a.object, T = d.a.oneOf, O = d.a.shape, I = d.a.any, N = d.a.oneOfType, F = T([ "best fit", "lookup" ]), G = T([ "narrow", "short", "long" ]), P = T([ "numeric", "2-digit" ]), D = E.isRequired, H = {
        locale: S,
        formats: V,
        messages: V,
        textComponent: I,
        defaultLocale: S,
        defaultFormats: V
    }, W = {
        formatDate: D,
        formatTime: D,
        formatRelative: D,
        formatNumber: D,
        formatPlural: D,
        formatMessage: D,
        formatHTMLMessage: D
    }, A = O(M({}, H, W, {
        formatters: V,
        now: D
    })), B = (S.isRequired, N([ S, V ]), {
        localeMatcher: F,
        formatMatcher: T([ "basic", "best fit" ]),
        timeZone: S,
        hour12: j,
        weekday: G,
        era: G,
        year: P,
        month: T([ "numeric", "2-digit", "narrow", "short", "long" ]),
        day: P,
        hour: P,
        minute: P,
        second: P,
        timeZoneName: T([ "short", "long" ])
    }), X = {
        localeMatcher: F,
        style: T([ "decimal", "currency", "percent" ]),
        currency: S,
        currencyDisplay: T([ "symbol", "code", "name" ]),
        useGrouping: j,
        minimumIntegerDigits: q,
        minimumFractionDigits: q,
        maximumFractionDigits: q,
        minimumSignificantDigits: q,
        maximumSignificantDigits: q
    }, U = {
        style: T([ "best fit", "numeric" ]),
        units: T([ "second", "minute", "hour", "day", "month", "year" ])
    }, R = {
        style: T([ "cardinal", "ordinal" ])
    }, Y = Object.keys(H), Z = {
        "&": "&amp;",
        ">": "&gt;",
        "<": "&lt;",
        '"': "&quot;",
        "'": "&#x27;"
    }, K = /[&><"']/g;
    function J(e) {
        return ("" + e).replace(K, function(e) {
            return Z[e];
        });
    }
    function $(e, t) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return t.reduce(function(t, r) {
            return e.hasOwnProperty(r) ? t[r] = e[r] : o.hasOwnProperty(r) && (t[r] = o[r]), 
            t;
        }, {});
    }
    function Q() {
        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).intl;
        f()(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
    }
    function ee(e, t) {
        if (e === t) return !0;
        if ("object" !== (void 0 === e ? "undefined" : z(e)) || null === e || "object" !== (void 0 === t ? "undefined" : z(t)) || null === t) return !1;
        var o = Object.keys(e), r = Object.keys(t);
        if (o.length !== r.length) return !1;
        for (var a = Object.prototype.hasOwnProperty.bind(t), n = 0; n < o.length; n++) if (!a(o[n]) || e[o[n]] !== t[o[n]]) return !1;
        return !0;
    }
    function te(e, t, o) {
        var r = e.props, a = e.state, n = e.context, i = void 0 === n ? {} : n, l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, s = i.intl, c = void 0 === s ? {} : s, d = l.intl, u = void 0 === d ? {} : d;
        return !ee(t, r) || !ee(o, a) || !(u === c || ee($(u, Y), $(c, Y)));
    }
    function oe(e) {
        return i.a.prototype._resolveLocale(e);
    }
    function re(e) {
        return i.a.prototype._findPluralRuleFunction(e);
    }
    var ae = function e(t) {
        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        _(this, e);
        var r = "ordinal" === o.style, a = re(oe(t));
        this.format = function(e) {
            return a(e, r);
        };
    }, ne = Object.keys(B), ie = Object.keys(X), le = Object.keys(U), se = Object.keys(R), ce = {
        second: 60,
        minute: 60,
        hour: 24,
        day: 30,
        month: 12
    };
    function de(e) {
        var t = s.a.thresholds;
        t.second = e.second, t.minute = e.minute, t.hour = e.hour, t.day = e.day, t.month = e.month;
    }
    function ue(e, t, o) {
        var r = e && e[t] && e[t][o];
        if (r) return r;
    }
    function pe(e, t, o) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, a = e.locale, n = e.formats, i = r.format, l = new Date(o), s = i && ue(n, "date", i), c = $(r, ne, s);
        try {
            return t.getDateTimeFormat(a, c).format(l);
        } catch (e) {
            0;
        }
        return String(l);
    }
    function fe(e, t, o) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, a = e.locale, n = e.formats, i = r.format, l = new Date(o), s = i && ue(n, "time", i), c = $(r, ne, s);
        c.hour || c.minute || c.second || (c = M({}, c, {
            hour: "numeric",
            minute: "numeric"
        }));
        try {
            return t.getDateTimeFormat(a, c).format(l);
        } catch (e) {
            0;
        }
        return String(l);
    }
    function he(e, t, o) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, a = e.locale, n = e.formats, i = r.format, l = new Date(o), c = new Date(r.now), d = i && ue(n, "relative", i), u = $(r, le, d), p = M({}, s.a.thresholds);
        de(ce);
        try {
            return t.getRelativeFormat(a, u).format(l, {
                now: isFinite(c) ? c : t.now()
            });
        } catch (e) {
            0;
        } finally {
            de(p);
        }
        return String(l);
    }
    function me(e, t, o) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, a = e.locale, n = e.formats, i = r.format, l = i && ue(n, "number", i), s = $(r, ie, l);
        try {
            return t.getNumberFormat(a, s).format(o);
        } catch (e) {
            0;
        }
        return String(o);
    }
    function ve(e, t, o) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, a = e.locale, n = $(r, se);
        try {
            return t.getPluralFormat(a, n).format(o);
        } catch (e) {
            0;
        }
        return "other";
    }
    function ye(e, t) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, a = e.locale, n = e.formats, i = e.messages, l = e.defaultLocale, s = e.defaultFormats, c = o.id, d = o.defaultMessage;
        f()(c, "[React Intl] An `id` must be provided to format a message.");
        var u = i && i[c];
        if (!(Object.keys(r).length > 0)) return u || d || c;
        var p = void 0;
        if (u) try {
            p = t.getMessageFormat(u, a, n).format(r);
        } catch (e) {
            0;
        } else 0;
        if (!p && d) try {
            p = t.getMessageFormat(d, l, s).format(r);
        } catch (e) {
            0;
        }
        return p || u || d || c;
    }
    function be(e, t, o) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return ye(e, t, o, Object.keys(r).reduce(function(e, t) {
            var o = r[t];
            return e[t] = "string" == typeof o ? J(o) : o, e;
        }, {}));
    }
    var ge = Object.freeze({
        formatDate: pe,
        formatTime: fe,
        formatRelative: he,
        formatNumber: me,
        formatPlural: ve,
        formatMessage: ye,
        formatHTMLMessage: be
    }), ze = Object.keys(H), _e = Object.keys(W), we = {
        formats: {},
        messages: {},
        textComponent: "span",
        defaultLocale: "en",
        defaultFormats: {}
    }, Me = function(e) {
        function t(e) {
            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            _(this, t);
            var r = L(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, o));
            f()("undefined" != typeof Intl, "[React Intl] The `Intl` APIs must be available in the runtime, and do not appear to be built-in. An `Intl` polyfill should be loaded.\nSee: http://formatjs.io/guides/runtime-environments/");
            var a = o.intl, n = void 0;
            n = isFinite(e.initialNow) ? Number(e.initialNow) : a ? a.now() : Date.now();
            var l = (a || {}).formatters, c = void 0 === l ? {
                getDateTimeFormat: m()(Intl.DateTimeFormat),
                getNumberFormat: m()(Intl.NumberFormat),
                getMessageFormat: m()(i.a),
                getRelativeFormat: m()(s.a),
                getPluralFormat: m()(ae)
            } : l;
            return r.state = M({}, c, {
                now: function() {
                    return r._didDisplay ? Date.now() : n;
                }
            }), r;
        }
        return x(t, e), w(t, [ {
            key: "getConfig",
            value: function() {
                var e = this.context.intl, t = $(this.props, ze, e);
                for (var o in we) void 0 === t[o] && (t[o] = we[o]);
                if (!b(t.locale)) {
                    var r = t, a = (r.locale, r.defaultLocale), n = r.defaultFormats;
                    0, t = M({}, t, {
                        locale: a,
                        formats: n,
                        messages: we.messages
                    });
                }
                return t;
            }
        }, {
            key: "getBoundFormatFns",
            value: function(e, t) {
                return _e.reduce(function(o, r) {
                    return o[r] = ge[r].bind(null, e, t), o;
                }, {});
            }
        }, {
            key: "getChildContext",
            value: function() {
                var e = this.getConfig(), t = this.getBoundFormatFns(e, this.state), o = this.state, r = o.now, a = k(o, [ "now" ]);
                return {
                    intl: M({}, e, t, {
                        formatters: a,
                        now: r
                    })
                };
            }
        }, {
            key: "shouldComponentUpdate",
            value: function() {
                for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                return te.apply(void 0, [ this ].concat(t));
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this._didDisplay = !0;
            }
        }, {
            key: "render",
            value: function() {
                return u.a.only(this.props.children);
            }
        } ]), t;
    }(u.b);
    Me.displayName = "IntlProvider", Me.contextTypes = {
        intl: A
    }, Me.childContextTypes = {
        intl: A.isRequired
    };
    var xe = function(e) {
        function t(e, o) {
            _(this, t);
            var r = L(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, o));
            return Q(o), r;
        }
        return x(t, e), w(t, [ {
            key: "shouldComponentUpdate",
            value: function() {
                for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                return te.apply(void 0, [ this ].concat(t));
            }
        }, {
            key: "render",
            value: function() {
                var e = this.context.intl, t = e.formatDate, o = e.textComponent, r = this.props, a = r.value, n = r.children, i = t(a, this.props);
                return "function" == typeof n ? n(i) : u.d.createElement(o, null, i);
            }
        } ]), t;
    }(u.b);
    xe.displayName = "FormattedDate", xe.contextTypes = {
        intl: A
    };
    var ke = function(e) {
        function t(e, o) {
            _(this, t);
            var r = L(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, o));
            return Q(o), r;
        }
        return x(t, e), w(t, [ {
            key: "shouldComponentUpdate",
            value: function() {
                for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                return te.apply(void 0, [ this ].concat(t));
            }
        }, {
            key: "render",
            value: function() {
                var e = this.context.intl, t = e.formatTime, o = e.textComponent, r = this.props, a = r.value, n = r.children, i = t(a, this.props);
                return "function" == typeof n ? n(i) : u.d.createElement(o, null, i);
            }
        } ]), t;
    }(u.b);
    ke.displayName = "FormattedTime", ke.contextTypes = {
        intl: A
    };
    var Le = 1e3, Ce = 6e4, je = 36e5, qe = 864e5, Se = 2147483647;
    function Ee(e) {
        var t = Math.abs(e);
        return t < Ce ? "second" : t < je ? "minute" : t < qe ? "hour" : "day";
    }
    function Ve(e) {
        switch (e) {
          case "second":
            return Le;

          case "minute":
            return Ce;

          case "hour":
            return je;

          case "day":
            return qe;

          default:
            return Se;
        }
    }
    function Te(e, t) {
        if (e === t) return !0;
        var o = new Date(e).getTime(), r = new Date(t).getTime();
        return isFinite(o) && isFinite(r) && o === r;
    }
    var Oe = function(e) {
        function t(e, o) {
            _(this, t);
            var r = L(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, o));
            Q(o);
            var a = isFinite(e.initialNow) ? Number(e.initialNow) : o.intl.now();
            return r.state = {
                now: a
            }, r;
        }
        return x(t, e), w(t, [ {
            key: "scheduleNextUpdate",
            value: function(e, t) {
                var o = this;
                clearTimeout(this._timer);
                var r = e.value, a = e.units, n = e.updateInterval, i = new Date(r).getTime();
                if (n && isFinite(i)) {
                    var l = i - t.now, s = Ve(a || Ee(l)), c = Math.abs(l % s), d = l < 0 ? Math.max(n, s - c) : Math.max(n, c);
                    this._timer = setTimeout(function() {
                        o.setState({
                            now: o.context.intl.now()
                        });
                    }, d);
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
                Te(e.value, this.props.value) || this.setState({
                    now: this.context.intl.now()
                });
            }
        }, {
            key: "shouldComponentUpdate",
            value: function() {
                for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                return te.apply(void 0, [ this ].concat(t));
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
                var e = this.context.intl, t = e.formatRelative, o = e.textComponent, r = this.props, a = r.value, n = r.children, i = t(a, M({}, this.props, this.state));
                return "function" == typeof n ? n(i) : u.d.createElement(o, null, i);
            }
        } ]), t;
    }(u.b);
    Oe.displayName = "FormattedRelative", Oe.contextTypes = {
        intl: A
    }, Oe.defaultProps = {
        updateInterval: 1e4
    };
    var Ie = function(e) {
        function t(e, o) {
            _(this, t);
            var r = L(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, o));
            return Q(o), r;
        }
        return x(t, e), w(t, [ {
            key: "shouldComponentUpdate",
            value: function() {
                for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                return te.apply(void 0, [ this ].concat(t));
            }
        }, {
            key: "render",
            value: function() {
                var e = this.context.intl, t = e.formatNumber, o = e.textComponent, r = this.props, a = r.value, n = r.children, i = t(a, this.props);
                return "function" == typeof n ? n(i) : u.d.createElement(o, null, i);
            }
        } ]), t;
    }(u.b);
    Ie.displayName = "FormattedNumber", Ie.contextTypes = {
        intl: A
    };
    var Ne = function(e) {
        function t(e, o) {
            _(this, t);
            var r = L(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, o));
            return Q(o), r;
        }
        return x(t, e), w(t, [ {
            key: "shouldComponentUpdate",
            value: function() {
                for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                return te.apply(void 0, [ this ].concat(t));
            }
        }, {
            key: "render",
            value: function() {
                var e = this.context.intl, t = e.formatPlural, o = e.textComponent, r = this.props, a = r.value, n = r.other, i = r.children, l = t(a, this.props), s = this.props[l] || n;
                return "function" == typeof i ? i(s) : u.d.createElement(o, null, s);
            }
        } ]), t;
    }(u.b);
    Ne.displayName = "FormattedPlural", Ne.contextTypes = {
        intl: A
    }, Ne.defaultProps = {
        style: "cardinal"
    };
    var Fe = function(e) {
        function t(e, o) {
            _(this, t);
            var r = L(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, o));
            return Q(o), r;
        }
        return x(t, e), w(t, [ {
            key: "shouldComponentUpdate",
            value: function(e) {
                var t = this.props.values;
                if (!ee(e.values, t)) return !0;
                for (var o = M({}, e, {
                    values: t
                }), r = arguments.length, a = Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) a[n - 1] = arguments[n];
                return te.apply(void 0, [ this, o ].concat(a));
            }
        }, {
            key: "render",
            value: function() {
                var e, t = this.context.intl, o = t.formatMessage, r = t.textComponent, a = this.props, n = a.id, i = a.description, l = a.defaultMessage, s = a.values, c = a.tagName, d = void 0 === c ? r : c, p = a.children, f = void 0, h = void 0, m = void 0;
                if (s && Object.keys(s).length > 0) {
                    var v = Math.floor(1099511627776 * Math.random()).toString(16), y = (e = 0, function() {
                        return "ELEMENT-" + v + "-" + (e += 1);
                    });
                    f = "@__" + v + "__@", h = {}, m = {}, Object.keys(s).forEach(function(e) {
                        var t = s[e];
                        if (Object(u.e)(t)) {
                            var o = y();
                            h[e] = f + o + f, m[o] = t;
                        } else h[e] = t;
                    });
                }
                var b = o({
                    id: n,
                    description: i,
                    defaultMessage: l
                }, h || s), g = void 0;
                return g = m && Object.keys(m).length > 0 ? b.split(f).filter(function(e) {
                    return !!e;
                }).map(function(e) {
                    return m[e] || e;
                }) : [ b ], "function" == typeof p ? p.apply(void 0, C(g)) : u.c.apply(void 0, [ d, null ].concat(C(g)));
            }
        } ]), t;
    }(u.b);
    Fe.displayName = "FormattedMessage", Fe.contextTypes = {
        intl: A
    }, Fe.defaultProps = {
        values: {}
    };
    var Ge = function(e) {
        function t(e, o) {
            _(this, t);
            var r = L(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, o));
            return Q(o), r;
        }
        return x(t, e), w(t, [ {
            key: "shouldComponentUpdate",
            value: function(e) {
                var t = this.props.values;
                if (!ee(e.values, t)) return !0;
                for (var o = M({}, e, {
                    values: t
                }), r = arguments.length, a = Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) a[n - 1] = arguments[n];
                return te.apply(void 0, [ this, o ].concat(a));
            }
        }, {
            key: "render",
            value: function() {
                var e = this.context.intl, t = e.formatHTMLMessage, o = e.textComponent, r = this.props, a = r.id, n = r.description, i = r.defaultMessage, l = r.values, s = r.tagName, c = void 0 === s ? o : s, d = r.children, p = t({
                    id: a,
                    description: n,
                    defaultMessage: i
                }, l);
                if ("function" == typeof d) return d(p);
                var f = {
                    __html: p
                };
                return u.d.createElement(c, {
                    dangerouslySetInnerHTML: f
                });
            }
        } ]), t;
    }(u.b);
    Ge.displayName = "FormattedHTMLMessage", Ge.contextTypes = {
        intl: A
    }, Ge.defaultProps = {
        values: {}
    }, y(v), y(a.a);
}, function(e, t, o) {
    "use strict";
    (function(e) {
        o.d(t, "a", function() {
            return L;
        }), o.d(t, "c", function() {
            return O;
        }), o.d(t, "e", function() {
            return F;
        }), o.d(t, "b", function() {
            return oe;
        });
        var r = o(3), a = o.n(r), n = o(0), i = "15.1.0", l = "a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" "), s = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, c = "undefined" != typeof Symbol ? Symbol.for("__preactCompatWrapper") : "__preactCompatWrapper", d = {
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
        }, u = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/, p = {}, f = void 0 === e || !Object({
            BASE_URL: "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc",
            VERSION: "17.0.0"
        }) || !1;
        function h() {
            return null;
        }
        var m = Object(n.h)("a", null).constructor;
        m.prototype.$$typeof = s, m.prototype.preactCompatUpgraded = !1, m.prototype.preactCompatNormalized = !1, 
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
        var v = n.options.event;
        n.options.event = function(e) {
            return v && (e = v(e)), e.persist = Object, e.nativeEvent = e, e;
        };
        var y = n.options.vnode;
        function b(e) {
            var t = e.nodeName, o = e.attributes;
            e.attributes = {}, t.defaultProps && W(e.attributes, t.defaultProps), o && W(e.attributes, o);
        }
        function g(e, t) {
            var o, r, a;
            if (t) {
                for (a in t) if (o = u.test(a)) break;
                if (o) for (a in r = e.attributes = {}, t) t.hasOwnProperty(a) && (r[u.test(a) ? a.replace(/([A-Z0-9])/, "-$1").toLowerCase() : a] = t[a]);
            }
        }
        function z(e, t, o) {
            var r = t && t._preactCompatRendered && t._preactCompatRendered.base;
            r && r.parentNode !== t && (r = null), !r && t && (r = t.firstElementChild);
            for (var a = t.childNodes.length; a--; ) t.childNodes[a] !== r && t.removeChild(t.childNodes[a]);
            var i = Object(n.render)(e, t, r);
            return t && (t._preactCompatRendered = i && (i._component || {
                base: i
            })), "function" == typeof o && o(), i && i._component || i;
        }
        n.options.vnode = function(e) {
            if (!e.preactCompatUpgraded) {
                e.preactCompatUpgraded = !0;
                var t = e.nodeName, o = e.attributes = W({}, e.attributes);
                "function" == typeof t ? (!0 === t[c] || t.prototype && "isReactComponent" in t.prototype) && (e.children && "" === String(e.children) && (e.children = void 0), 
                e.children && (o.children = e.children), e.preactCompatNormalized || I(e), b(e)) : (e.children && "" === String(e.children) && (e.children = void 0), 
                e.children && (o.children = e.children), o.defaultValue && (o.value || 0 === o.value || (o.value = o.defaultValue), 
                delete o.defaultValue), g(e, o));
            }
            y && y(e);
        };
        var _ = function() {};
        function w(e, t, o, r) {
            var a = z(Object(n.h)(_, {
                context: e.context
            }, t), o), i = a._component || a.base;
            return r && r.call(i, a), i;
        }
        function M(e) {
            var t = e._preactCompatRendered && e._preactCompatRendered.base;
            return !(!t || t.parentNode !== e) && (Object(n.render)(Object(n.h)(h), e, t), !0);
        }
        _.prototype.getChildContext = function() {
            return this.props.context;
        }, _.prototype.render = function(e) {
            return e.children[0];
        };
        var x, k = [], L = {
            map: function(e, t, o) {
                return null == e ? null : (e = L.toArray(e), o && o !== e && (t = t.bind(o)), e.map(t));
            },
            forEach: function(e, t, o) {
                if (null == e) return null;
                e = L.toArray(e), o && o !== e && (t = t.bind(o)), e.forEach(t);
            },
            count: function(e) {
                return e && e.length || 0;
            },
            only: function(e) {
                if (1 !== (e = L.toArray(e)).length) throw new Error("Children.only() expects only one child.");
                return e[0];
            },
            toArray: function(e) {
                return null == e ? [] : k.concat(e);
            }
        };
        function C(e) {
            return O.bind(null, e);
        }
        for (var j = {}, q = l.length; q--; ) j[l[q]] = C(l[q]);
        function S(e, t) {
            for (var o = t || 0; o < e.length; o++) {
                var r = e[o];
                Array.isArray(r) ? S(r) : r && "object" == typeof r && !F(r) && (r.props && r.type || r.attributes && r.nodeName || r.children) && (e[o] = O(r.type || r.nodeName, r.props || r.attributes, r.children));
            }
        }
        function E(e) {
            return "function" == typeof e && !(e.prototype && e.prototype.render);
        }
        function V(e) {
            return U({
                displayName: e.displayName || e.name,
                render: function() {
                    return e(this.props, this.context);
                }
            });
        }
        function T(e) {
            var t = e[c];
            return t ? !0 === t ? e : t : (t = V(e), Object.defineProperty(t, c, {
                configurable: !0,
                value: !0
            }), t.displayName = e.displayName, t.propTypes = e.propTypes, t.defaultProps = e.defaultProps, 
            Object.defineProperty(e, c, {
                configurable: !0,
                value: t
            }), t);
        }
        function O() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return S(e, 2), I(n.h.apply(void 0, e));
        }
        function I(e) {
            e.preactCompatNormalized = !0, D(e), E(e.nodeName) && (e.nodeName = T(e.nodeName));
            var t = e.attributes.ref, o = t && typeof t;
            return !x || "string" !== o && "number" !== o || (e.attributes.ref = G(t, x)), P(e), 
            e;
        }
        function N(e, t) {
            for (var o = [], r = arguments.length - 2; r-- > 0; ) o[r] = arguments[r + 2];
            if (!F(e)) return e;
            var a = e.attributes || e.props, i = [ Object(n.h)(e.nodeName || e.type, a, e.children || a && a.children), t ];
            return o && o.length ? i.push(o) : t && t.children && i.push(t.children), I(n.cloneElement.apply(void 0, i));
        }
        function F(e) {
            return e && (e instanceof m || e.$$typeof === s);
        }
        function G(e, t) {
            return t._refProxies[e] || (t._refProxies[e] = function(o) {
                t && t.refs && (t.refs[e] = o, null === o && (delete t._refProxies[e], t = null));
            });
        }
        function P(e) {
            var t = e.nodeName, o = e.attributes;
            if (o && "string" == typeof t) {
                var r = {};
                for (var a in o) r[a.toLowerCase()] = a;
                if (r.ondoubleclick && (o.ondblclick = o[r.ondoubleclick], delete o[r.ondoubleclick]), 
                r.onchange && ("textarea" === t || "input" === t.toLowerCase() && !/^fil|che|rad/i.test(o.type))) {
                    var n = r.oninput || "oninput";
                    o[n] || (o[n] = J([ o[n], o[r.onchange] ]), delete o[r.onchange]);
                }
            }
        }
        function D(e) {
            var t = e.attributes || (e.attributes = {});
            H.enumerable = "className" in t, t.className && (t.class = t.className), Object.defineProperty(t, "className", H);
        }
        var H = {
            configurable: !0,
            get: function() {
                return this.class;
            },
            set: function(e) {
                this.class = e;
            }
        };
        function W(e, t) {
            for (var o = arguments, r = 1, a = void 0; r < arguments.length; r++) if (a = o[r]) for (var n in a) a.hasOwnProperty(n) && (e[n] = a[n]);
            return e;
        }
        function A(e, t) {
            for (var o in e) if (!(o in t)) return !0;
            for (var r in t) if (e[r] !== t[r]) return !0;
            return !1;
        }
        function B(e) {
            return e && e.base || e;
        }
        function X() {}
        function U(e) {
            function t(e, t) {
                Z(this), oe.call(this, e, t, p), $.call(this, e, t);
            }
            return (e = W({
                constructor: t
            }, e)).mixins && Y(e, R(e.mixins)), e.statics && W(t, e.statics), e.propTypes && (t.propTypes = e.propTypes), 
            e.defaultProps && (t.defaultProps = e.defaultProps), e.getDefaultProps && (t.defaultProps = e.getDefaultProps()), 
            X.prototype = oe.prototype, t.prototype = W(new X(), e), t.displayName = e.displayName || "Component", 
            t;
        }
        function R(e) {
            for (var t = {}, o = 0; o < e.length; o++) {
                var r = e[o];
                for (var a in r) r.hasOwnProperty(a) && "function" == typeof r[a] && (t[a] || (t[a] = [])).push(r[a]);
            }
            return t;
        }
        function Y(e, t) {
            for (var o in t) t.hasOwnProperty(o) && (e[o] = J(t[o].concat(e[o] || k), "getDefaultProps" === o || "getInitialState" === o || "getChildContext" === o));
        }
        function Z(e) {
            for (var t in e) {
                var o = e[t];
                "function" != typeof o || o.__bound || d.hasOwnProperty(t) || ((e[t] = o.bind(e)).__bound = !0);
            }
        }
        function K(e, t, o) {
            if ("string" == typeof t && (t = e.constructor.prototype[t]), "function" == typeof t) return t.apply(e, o);
        }
        function J(e, t) {
            return function() {
                for (var o, r = arguments, a = this, n = 0; n < e.length; n++) {
                    var i = K(a, e[n], r);
                    if (t && null != i) for (var l in o || (o = {}), i) i.hasOwnProperty(l) && (o[l] = i[l]); else void 0 !== i && (o = i);
                }
                return o;
            };
        }
        function $(e, t) {
            Q.call(this, e, t), this.componentWillReceiveProps = J([ Q, this.componentWillReceiveProps || "componentWillReceiveProps" ]), 
            this.render = J([ Q, ee, this.render || "render", te ]);
        }
        function Q(e, t) {
            if (e) {
                var o = e.children;
                if (o && Array.isArray(o) && 1 === o.length && ("string" == typeof o[0] || "function" == typeof o[0] || o[0] instanceof m) && (e.children = o[0], 
                e.children && "object" == typeof e.children && (e.children.length = 1, e.children[0] = e.children)), 
                f) {
                    var r = "function" == typeof this ? this : this.constructor, n = this.propTypes || r.propTypes, i = this.displayName || r.name;
                    n && a.a.checkPropTypes(n, e, "prop", i);
                }
            }
        }
        function ee(e) {
            x = this;
        }
        function te() {
            x === this && (x = null);
        }
        function oe(e, t, o) {
            n.Component.call(this, e, t), this.state = this.getInitialState ? this.getInitialState() : {}, 
            this.refs = {}, this._refProxies = {}, o !== p && $.call(this, e, t);
        }
        function re(e, t) {
            oe.call(this, e, t);
        }
        W(oe.prototype = new n.Component(), {
            constructor: oe,
            isReactComponent: {},
            replaceState: function(e, t) {
                var o = this;
                for (var r in this.setState(e, t), o.state) r in e || delete o.state[r];
            },
            getDOMNode: function() {
                return this.base;
            },
            isMounted: function() {
                return !!this.base;
            }
        }), X.prototype = oe.prototype, re.prototype = new X(), re.prototype.isPureReactComponent = !0, 
        re.prototype.shouldComponentUpdate = function(e, t) {
            return A(this.props, e) || A(this.state, t);
        };
        var ae = {
            version: i,
            DOM: j,
            PropTypes: a.a,
            Children: L,
            render: z,
            createClass: U,
            createFactory: C,
            createElement: O,
            cloneElement: N,
            isValidElement: F,
            findDOMNode: B,
            unmountComponentAtNode: M,
            Component: oe,
            PureComponent: re,
            unstable_renderSubtreeIntoContainer: w,
            __spread: W
        };
        t.d = ae;
    }).call(this, o(40));
}, function(e, t, o) {
    e.exports = o(38)();
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
}, function(e, t, o) {
    "use strict";
    var r = o(24).default;
    o(31), (t = e.exports = r).default = t;
}, function(e, t, o) {
    "use strict";
    var r = o(32).default;
    o(37), (t = e.exports = r).default = t;
}, function(e, t, o) {
    "use strict";
    (t = e.exports = o(41).default).default = t;
}, function(e, t, o) {
    "use strict";
    var r = function(e, t, o, r, a, n, i, l) {
        if (!e) {
            var s;
            if (void 0 === t) s = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                var c = [ o, r, a, n, i, l ], d = 0;
                (s = new Error(t.replace(/%s/g, function() {
                    return c[d++];
                }))).name = "Invariant Violation";
            }
            throw s.framesToPop = 1, s;
        }
    };
    e.exports = r;
}, function(e, t) {
    function o(e, t) {
        var o = e[1] || "", a = e[3];
        if (!a) return o;
        if (t && "function" == typeof btoa) {
            var n = r(a), i = a.sources.map(function(e) {
                return "/*# sourceURL=" + a.sourceRoot + e + " */";
            });
            return [ o ].concat(i).concat([ n ]).join("\n");
        }
        return [ o ].join("\n");
    }
    function r(e) {
        return "/*# " + ("sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e))))) + " */";
    }
    e.exports = function(e) {
        var t = [];
        return t.toString = function() {
            return this.map(function(t) {
                var r = o(t, e);
                return t[2] ? "@media " + t[2] + "{" + r + "}" : r;
            }).join("");
        }, t.i = function(e, o) {
            "string" == typeof e && (e = [ [ null, e, "" ] ]);
            for (var r = {}, a = 0; a < this.length; a++) {
                var n = this[a][0];
                "number" == typeof n && (r[n] = !0);
            }
            for (a = 0; a < e.length; a++) {
                var i = e[a];
                "number" == typeof i[0] && r[i[0]] || (o && !i[2] ? i[2] = o : o && (i[2] = "(" + i[2] + ") and (" + o + ")"), 
                t.push(i));
            }
        }, t;
    };
}, function(e, t, o) {
    var r, a = {}, n = function(e) {
        var t;
        return function() {
            return void 0 === t && (t = e.apply(this, arguments)), t;
        };
    }(function() {
        return window && document && document.all && !window.atob;
    }), i = function(e) {
        return document.querySelector(e);
    }, l = (r = {}, function(e) {
        if ("function" == typeof e) return e();
        if (void 0 === r[e]) {
            var t = i.call(this, e);
            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                t = t.contentDocument.head;
            } catch (e) {
                t = null;
            }
            r[e] = t;
        }
        return r[e];
    }), s = null, c = 0, d = [], u = o(14);
    function p(e, t) {
        for (var o = 0; o < e.length; o++) {
            var r = e[o], n = a[r.id];
            if (n) {
                n.refs++;
                for (var i = 0; i < n.parts.length; i++) n.parts[i](r.parts[i]);
                for (;i < r.parts.length; i++) n.parts.push(g(r.parts[i], t));
            } else {
                var l = [];
                for (i = 0; i < r.parts.length; i++) l.push(g(r.parts[i], t));
                a[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: l
                };
            }
        }
    }
    function f(e, t) {
        for (var o = [], r = {}, a = 0; a < e.length; a++) {
            var n = e[a], i = t.base ? n[0] + t.base : n[0], l = {
                css: n[1],
                media: n[2],
                sourceMap: n[3]
            };
            r[i] ? r[i].parts.push(l) : o.push(r[i] = {
                id: i,
                parts: [ l ]
            });
        }
        return o;
    }
    function h(e, t) {
        var o = l(e.insertInto);
        if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = d[d.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? o.insertBefore(t, r.nextSibling) : o.appendChild(t) : o.insertBefore(t, o.firstChild), 
        d.push(t); else if ("bottom" === e.insertAt) o.appendChild(t); else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var a = l(e.insertInto + " " + e.insertAt.before);
            o.insertBefore(t, a);
        }
    }
    function m(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = d.indexOf(e);
        t >= 0 && d.splice(t, 1);
    }
    function v(e) {
        var t = document.createElement("style");
        return void 0 === e.attrs.type && (e.attrs.type = "text/css"), b(t, e.attrs), h(e, t), 
        t;
    }
    function y(e) {
        var t = document.createElement("link");
        return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", 
        b(t, e.attrs), h(e, t), t;
    }
    function b(e, t) {
        Object.keys(t).forEach(function(o) {
            e.setAttribute(o, t[o]);
        });
    }
    function g(e, t) {
        var o, r, a, n;
        if (t.transform && e.css) {
            if (!(n = t.transform(e.css))) return function() {};
            e.css = n;
        }
        if (t.singleton) {
            var i = c++;
            o = s || (s = v(t)), r = w.bind(null, o, i, !1), a = w.bind(null, o, i, !0);
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (o = y(t), 
        r = x.bind(null, o, t), a = function() {
            m(o), o.href && URL.revokeObjectURL(o.href);
        }) : (o = v(t), r = M.bind(null, o), a = function() {
            m(o);
        });
        return r(e), function(t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                r(e = t);
            } else a();
        };
    }
    e.exports = function(e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = n()), 
        t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
        var o = f(e, t);
        return p(o, t), function(e) {
            for (var r = [], n = 0; n < o.length; n++) {
                var i = o[n];
                (l = a[i.id]).refs--, r.push(l);
            }
            e && p(f(e, t), t);
            for (n = 0; n < r.length; n++) {
                var l;
                if (0 === (l = r[n]).refs) {
                    for (var s = 0; s < l.parts.length; s++) l.parts[s]();
                    delete a[l.id];
                }
            }
        };
    };
    var z, _ = (z = [], function(e, t) {
        return z[e] = t, z.filter(Boolean).join("\n");
    });
    function w(e, t, o, r) {
        var a = o ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = _(t, a); else {
            var n = document.createTextNode(a), i = e.childNodes;
            i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(n, i[t]) : e.appendChild(n);
        }
    }
    function M(e, t) {
        var o = t.css, r = t.media;
        if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = o; else {
            for (;e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(o));
        }
    }
    function x(e, t, o) {
        var r = o.css, a = o.sourceMap, n = void 0 === t.convertToAbsoluteUrls && a;
        (t.convertToAbsoluteUrls || n) && (r = u(r)), a && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */");
        var i = new Blob([ r ], {
            type: "text/css"
        }), l = e.href;
        e.href = URL.createObjectURL(i), l && URL.revokeObjectURL(l);
    }
}, function(e, t, o) {
    "use strict";
    var r = Object.freeze({
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
    o.d(t, "a", function() {
        return l;
    }), o.d(t, "b", function() {
        return s;
    }), o.d(t, "c", function() {
        return c;
    }), o.d(t, "d", function() {
        return d;
    });
    var a = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var o = arguments[t];
            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
        }
        return e;
    };
    function n(e) {
        if (Array.isArray(e)) {
            for (var t = 0, o = Array(e.length); t < e.length; t++) o[t] = e[t];
            return o;
        }
        return Array.from(e);
    }
    var i = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new Promise(function(o, r) {
            chrome.runtime.sendMessage("hjngolefdpdnooamgdldlkjgmdcmcjnc", a({
                action: e
            }, t), function() {
                var a, i, l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, s = l.success, c = l.failure;
                return chrome.runtime.lastError ? ((a = console).warn.apply(a, [ "Action failed:", e ].concat(n(t))), 
                r(chrome.runtime.lastError)) : c ? ((i = console).warn.apply(i, [ "Action failed:", e ].concat(n(t))), 
                r(c)) : o(s);
            });
        });
    }, l = function() {
        return i(r.SetHasSeenFirstRun);
    }, s = function(e) {
        return i(r.SetProfileType, {
            type: e
        });
    }, c = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return i(r.SetShowEquatioOnFirstRun, {
            value: e
        });
    }, d = function() {
        return i(r.StartScreenshotReader);
    };
}, function(e, t, o) {
    "use strict";
    var r = o(1), a = o(17), n = o.n(a), i = o(18), l = o.n(i), s = o(19), c = o.n(s), d = o(4), u = o(20), p = (Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var o = arguments[t];
            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
        }
        return e;
    })({}, d, u), f = (Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var o = arguments[t];
            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
        }
        return e;
    })({}, d), h = o(21), m = (Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var o = arguments[t];
            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
        }
        return e;
    })({}, d, h), v = o(22), y = (Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var o = arguments[t];
            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
        }
        return e;
    })({}, d, v);
    function b(e) {
        if (Array.isArray(e)) {
            for (var t = 0, o = Array(e.length); t < e.length; t++) o[t] = e[t];
            return o;
        }
        return Array.from(e);
    }
    o.d(t, "b", function() {
        return _;
    }), o.d(t, "a", function() {
        return w;
    }), Object(r.c)([].concat(b(n.a), b(l.a), b(c.a)));
    var g = {
        enUS: f,
        enGB: p,
        es: m,
        fr: y
    }, z = function() {
        return (Array.isArray(navigator.languages) ? navigator.languages[0] : navigator.language) || navigator.userLanguage;
    }, _ = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z();
        return "es" === e || e.startsWith("es-") ? "es" : "fr" === e || e.startsWith("fr-") ? "fr" : "en";
    }, w = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z();
        return e ? "en-GB" === e ? g.enGB : "en-US" === e ? g.enUS : "es" === e || e.startsWith("es-") ? g.es : "fr" === e || e.startsWith("fr-") ? g.fr : g.enUS : g.enUS;
    };
}, function(e, t, o) {
    var r, a;
    void 0 === (a = "function" == typeof (r = function() {
        "use strict";
        function e(e) {
            var t, o = Object.prototype.hasOwnProperty, r = [];
            for (t in e) o.call(e, t) && r.push(t);
            return r;
        }
        function t(e) {
            return void 0 === e ? null : e ? decodeURIComponent(e) : e;
        }
        function o(e) {
            switch (typeof e) {
              case "string":
                return encodeURIComponent(e);

              case "boolean":
                return e ? "true" : "false";

              case "number":
                return isFinite(e) ? e : "";

              case "object":
                return void 0 === e || null === e ? "" : JSON && JSON.stringify ? encodeURIComponent(JSON.stringify(e)) : "";

              default:
                return "";
            }
        }
        return Array.isArray || (Array.isArray = function(e) {
            return "[object Array]" === Object.prototype.toString.call(e);
        }), {
            version: "1.3.2",
            parse: function(e, o, r) {
                var a;
                o = o || "&", r = r || "=";
                var n = Object.create(null);
                if ("string" != typeof e) return n;
                if ((a = e.indexOf("?")) < 0 && e.indexOf(r) < 0) return n;
                a >= 0 && (e = e.substr(a + 1)), e = e.replace(/^[\s\uFEFF\xA0\?#&]+|[\s\uFEFF\xA0&]+$/g, ""), 
                (a = e.lastIndexOf("#")) > 0 && (e = e.substr(0, a));
                var i = e.split(o);
                for (a = 0; a < i.length; ++a) {
                    var l, s, c = i[a].replace(/\+/g, " "), d = c.indexOf(r);
                    if (0 !== d && 0 !== c.length) {
                        d < 0 ? (l = t(c), s = null) : (l = t(c.substr(0, d)), s = t(c.substr(d + 1)));
                        var u = n[l];
                        void 0 === u ? n[l] = s : Array.isArray(u) ? u.push(s) : n[l] = [ u, s ];
                    }
                }
                return n;
            },
            stringify: function(t, r, a) {
                if (r = r || "&", a = a || "=", "object" != typeof t && "function" != typeof t || null === t) return "";
                var n = e(t);
                if (!n || !n.length) return "";
                for (var i, l, s, c = [], d = 0; d < n.length; d++) if (l = o(n[d]), void 0 !== (s = t[l]) && "function" != typeof s) if (Array.isArray(s)) for (i = 0; i < s.length; ++i) c.push(l + a + (s[i] ? o(s[i]) : "")); else null !== s && (s = o(s)), 
                c.push(null === s || void 0 === s ? l : l + a + s);
                return c.join(r);
            }
        };
    }) ? r.call(t, o, t, e) : r) || (e.exports = a);
}, function(e, t) {
    e.exports = function(e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var o = t.protocol + "//" + t.host, r = o + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
            var a, n = t.trim().replace(/^"(.*)"$/, function(e, t) {
                return t;
            }).replace(/^'(.*)'$/, function(e, t) {
                return t;
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(n) ? e : (a = 0 === n.indexOf("//") ? n : 0 === n.indexOf("/") ? o + n : r + n.replace(/^\.\//, ""), 
            "url(" + JSON.stringify(a) + ")");
        });
    };
}, function(e, t, o) {
    "use strict";
    t.extend = a;
    var r = Object.prototype.hasOwnProperty;
    function a(e) {
        var t, o, a, n, i = Array.prototype.slice.call(arguments, 1);
        for (t = 0, o = i.length; t < o; t += 1) if (a = i[t]) for (n in a) r.call(a, n) && (e[n] = a[n]);
        return e;
    }
    t.hop = r;
}, function(e, t) {}, function(e, t, o) {
    var r;
    r = function() {
        "use strict";
        return [ {
            locale: "en",
            pluralRuleFunction: function(e, t) {
                var o = String(e).split("."), r = !o[1], a = Number(o[0]) == e, n = a && o[0].slice(-1), i = a && o[0].slice(-2);
                return t ? 1 == n && 11 != i ? "one" : 2 == n && 12 != i ? "two" : 3 == n && 13 != i ? "few" : "other" : 1 == e && r ? "one" : "other";
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
}, function(e, t, o) {
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
}, function(e, t, o) {
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
}, function(e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="equatio-svg-option-prediction-SVGID_1_" d="M0 1.4h17.5v18.7H0z"/><circle id="SVGID_1_" cx="95" cy="95" r="88"/><circle id="SVGID_4_" cx="95" cy="95" r="88"/><circle id="SVGID_6_" cx="95" cy="95" r="88"/><circle id="SVGID_9_" cx="95" cy="95" r="88"/><circle id="SVGID_11_" cx="95" cy="95" r="88"/><path id="SVGID_13_" d="M7 183h83.8l39-39v-29H60.2L7 23.5z"/><circle id="SVGID_16_" cx="95" cy="95" r="88"/><circle id="SVGID_19_" cx="95" cy="95" r="88"/><path id="SVGID_21_" d="M95 55l34.6 60L91 183h92V55z"/><circle id="SVGID_24_" cx="95" cy="95" r="88"/><circle id="SVGID_27_" cx="95" cy="95" r="88"/><path id="SVGID_29_" d="M21 7v40.3L60.4 115 95 55h88V7z"/><circle id="SVGID_32_" cx="95" cy="95" r="88"/><circle id="SVGID_35_" cx="95" cy="95" r="88"/><circle id="SVGID_38_" cx="95" cy="95" r="88"/><circle id="SVGID_40_" cx="95" cy="95" r="88"/><circle id="SVGID_42_" cx="95" cy="95" r="88"/><clipPath id="equatio-svg-tool-latex-clip-path"><path fill="none" d="M0 0h51.6v49.83H0z"/></clipPath></defs><symbol id="equatio-svg-academy-back-button" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="currentColor"/></symbol><symbol id="equatio-svg-academy-icon" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill="currentColor"/></symbol><symbol id="equatio-svg-accessibility-playback-pause" viewBox="0 0 560 560"><style>.s0{fill:#494949;stroke-width:10;stroke:#494949}</style><path d="M502.9 528.4H349.6c-11 0-20-8-20-17.9v-457c0-9.9 9-17.9 20-17.9h153.3c11 0 20 8 20 17.9v457c0 9.9-8.9 17.9-20 17.9zm-300 0H49.6c-11 0-20-8-20-17.9v-457c0-9.9 9-17.9 20-17.9h153.3c11 0 20 8 20 17.9v457c0 9.9-8.9 17.9-20 17.9z" class="s0"/></symbol><symbol id="equatio-svg-accessibility-playback-play" viewBox="0 0 560 560"><path d="M179 48.7c-17.7-17.3-32.1-11.3-32.1 13.5v440.2c0 24.8 14.3 30.7 31.8 13.2l203.9-203.9c17.5-17.5 17.4-46-.3-63.4L179 48.7z" fill="currentColor" stroke="currentColor"/><path d="M179 48.7c-17.7-17.3-32.1-11.3-32.1 13.5v440.2c0 24.8 14.3 30.7 31.8 13.2l203.9-203.9c17.5-17.5 17.4-46-.3-63.4L179 48.7z" fill="currentColor" stroke-width="10" stroke="currentColor"/></symbol><symbol id="equatio-svg-accessibility-playback-stop" viewBox="0 0 560 560"><path d="M505.1 528.4H47.9c-9.9 0-17.9-8-17.9-17.9V53.3c0-9.9 8-17.9 17.9-17.9h457.2c9.9 0 17.9 8 17.9 17.9v457.2c0 9.9-8 17.9-17.9 17.9z" fill="currentColor" stroke-width="10" stroke="currentColor"/></symbol><symbol id="equatio-svg-chevron" viewBox="0 0 9.2 5.7"><path fill="currentColor" d="M0 4.6l1.1 1.1 3.5-3.5 3.5 3.5 1.1-1.1L4.6 0z"/></symbol><symbol id="equatio-svg-close-dialog"><path fill="currentColor" d="M9.2 1.1L8.1 0 4.6 3.5 1.1 0 0 1.1l4.6 4.6z"/></symbol><symbol id="equatio-svg-drawer-handle" viewBox="0 0 76.5 9"><path d="M4.5 9H72c2.5 0 4.5-2 4.5-4.5S74.5 0 72 0H4.5C2 0 0 2 0 4.5S2 9 4.5 9z" fill="currentColor"/><circle cx="9.7" cy="4.6" r="2.5" fill="#dcdfe2"/><circle cx="24" cy="4.6" r="2.5" fill="#dcdfe2"/><circle cx="38.3" cy="4.6" r="2.5" fill="#dcdfe2"/><circle cx="52.6" cy="4.6" r="2.5" fill="#dcdfe2"/><circle cx="66.8" cy="4.6" r="2.5" fill="#dcdfe2"/></symbol><symbol id="equatio-svg-drawer-microphone" viewBox="0 0 36 52.1"><g fill="currentColor"><path d="M36 19.4c0-.6-.5-1-1.2-1h-2.4c-.7 0-1.2.5-1.2 1v7c-.1 6.2-6 11.3-13.2 11.3-7.2 0-13.1-5-13.2-11.3v-7c0-.6-.5-1-1.2-1H1.2c-.7 0-1.2.5-1.2 1v6.7C0 34 6.8 40.5 15.6 41.6V48h-5.4c-.7 0-1.2.4-1.2 1v2.1c0 .6.5 1 1.2 1h15.6c.7 0 1.2-.5 1.2-1V49c0-.6-.5-1-1.2-1h-5.4v-6.4C29.2 40.5 36 34 36 26.1v-6.7z"/><path d="M18 33.8c5 0 9-3.5 9-7.8V7.8C27 3.5 23 0 18 0S9 3.5 9 7.8V26c0 4.3 4.1 7.8 9 7.8z"/></g></symbol><symbol id="equatio-svg-expired-license" viewBox="0 0 340 234.5"><g opacity=".37"><radialGradient id="SVGID_1_" cx="614.705" cy="51718.18" r="108.793" gradientTransform="matrix(.6084 0 0 .05166 -319.539 -2454.731)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d1e1c"/><stop offset=".074" stop-color="#151514" stop-opacity=".926"/><stop offset=".239" stop-color="#090909" stop-opacity=".761"/><stop offset=".462" stop-color="#020202" stop-opacity=".538"/><stop offset="1" stop-opacity="0"/></radialGradient><path d="M54.4 205.9c-39.4 0-73 3-86.4 7.2v8.2c13.4 4.2 47 7.2 86.4 7.2 51.2 0 92.6-5.1 92.6-11.3.1-6.2-41.4-11.3-92.6-11.3z" fill="url(#SVGID_1_)"/></g><path d="M80.6 168c0 7.3-5.9 13.3-13.3 13.3H42.5c-7.3 0-13.3-5.9-13.3-13.3V72c0-7.3 5.9-13.3 13.3-13.3h24.7c7.3 0 13.3 6 13.3 13.3v96z" fill="#fd3269"/><path d="M60.3 92.2c0 3.9 2.3 4.8 5 2.1l30.5-30.5c2.8-2.8 1.8-5-2.1-5H67.4c-3.9 0-7.1 3.2-7.1 7.1v26.3z" fill="#fd3269"/><path d="M75.3 46.6c-.9 1.9-5.2 2.6-2.9 5.9-2.4-2.9-3.4-10.8.5-13.5 5-3.5 10.7 5.9 2.4 7.6zm-36.1 0c.9 1.9 5.2 2.6 2.9 5.9 2.3-2.9 3.3-10.9-.5-13.5-5-3.5-10.7 5.9-2.4 7.6z" fill="#53a2da"/><path d="M51.1 217c-1.1 0-2-.9-2-2v-41.2c0-1.1.9-2 2-2s2 .9 2 2V215c0 1.1-.9 2-2 2zm7.6 0c-1.1 0-2-.9-2-2v-37.9c0-1.1.9-2 2-2s2 .9 2 2V215c0 1.1-.9 2-2 2z" fill="#fd3269"/><path d="M60.3 97.3s4.8 2.1 8.4.6c0 0-6.8 4.4-8.4-.6z" opacity=".4" fill="#221e20"/><path d="M47.9 98.6S51.5 88.5 62.6 87c11-1.5 9.1 9.2 9.1 9.2l-23.8 2.7" fill="#841627"/><g fill="#fdf6fa"><path d="M62.6 87c-4.6.6-8 2.8-10.3 5 0 .1-1 5.2 4.1 4.2l13.1-1.7s1.3-.9 2.1-2.1c-.5-2.9-2.5-6.3-9-5.4z"/><path d="M52.3 92.1c-.3.3-.5.5-.7.8l.7-.8z"/></g><path d="M54.6 98s6.5-9.9 14.9-2.1c0 0 2.9 2.7-3.6 3-6.5.2-5.5-1.7-5.5-1.7l-4.6.8" fill="#ce544c"/><path d="M59.4 94.1s6.2-.6 7.4 1.6c1.1 2.2-.8-2.1-7.4-1.5" opacity=".1" fill="#221e20"/><path d="M68.8 70.8s-6-2.7-8.9 2.5" fill="none" stroke="#fff" stroke-width="1.855" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M71.2 77.8l18.2 20c.5.5 1.3.5 1.8 0l2.5-2.5c.5-.5.5-1.3 0-1.8l-18.2-20c-.5-.5-1.3-.5-1.8 0L71.2 76c-.5.5-.5 1.3 0 1.8z" fill="#fff"/><g fill="#fd3269"><path d="M94.8 95l-15.1 26.7c-.4.6-1.1.8-1.8.5l-3.1-1.8c-.6-.4-.8-1.1-.5-1.8l15.1-26.7c.4-.6 1.1-.8 1.8-.5l3.1 1.8c.6.4.8 1.2.5 1.8z"/><path d="M72.1 77.8l18.2 20c.5.5 1.3.5 1.8 0l2.5-2.5c.5-.5.5-1.3 0-1.8l-18.2-20c-.5-.5-1.3-.5-1.8 0L72.1 76c-.5.5-.5 1.3 0 1.8z"/></g><path d="M103.8 198.3c2 5.7 8.5 10.5 13.7 11.6.7.1 1.3 1.2 2 1.3l.3 4.7c0 .6.5.9 1.1.9h25.6c.6 0 1.1-.2 1.1-.9l2.2-40.2c0-.6-.5-1.1-1.1-1.1h-30.1c-.6 0-1.1.6-1.1 1.2l.3 4.7c-1.4-.6-2.9-.9-4.4-.9-1.1 0-2.1.2-3.2.5-6.2 2.4-9.1 10.5-6.4 18.2zm4.3-9.5c.4-1.2 1.4-3.2 3.6-4 .5-.2 1.1-.3 1.6-.3 2.8 0 3.8 2.9 5 6.4l.8 13.9-.1.1c-3.4 0-9.2-3.8-10.8-8.2-.9-2.6-1-5.5-.1-7.9z" fill="#00417c"/><path d="M37.1 111l-24.9 26.1c-.5.5-1.3.5-1.8.1l-2.6-2.4c-.5-.5-.5-1.3-.1-1.8l24.9-26.1c.5-.5 1.3-.5 1.8-.1l2.6 2.4c.6.5.6 1.3.1 1.8z" fill="#fd3269"/><path d="M236 203c-54 0-98-44-98-98s44-98 98-98 98 44 98 98-44 98-98 98z" fill="#eaf0f4"/><path d="M237.2 8.2c-53.4 0-96.8 43.4-96.8 96.6 0 53.3 43.4 96.6 96.8 96.6S334 158 334 104.8c0-53.3-43.4-96.6-96.8-96.6zm0 176c-43.9 0-79.5-35.5-79.5-79.4 0-43.9 35.6-79.4 79.5-79.4s79.5 35.5 79.5 79.4c0 43.9-35.6 79.4-79.5 79.4z" fill="#000623"/><path d="M290.7 23.7c-.1-.1-.1-.1-.2-.1L181.1 186.2c.1 0 .1.1.2.2 44.9 30.1 105.9 18.2 136-26.7 30.2-44.9 18.2-105.9-26.6-136z" fill="#dfe5ea"/><path d="M236 7c-54 0-98 44-98 98s44 98 98 98 98-44 98-98c0-54.1-44-98-98-98zm0 178.5c-44.5 0-80.5-36.1-80.5-80.5 0-44.5 36.1-80.5 80.5-80.5 44.5 0 80.5 36.1 80.5 80.5 0 44.5-36 80.5-80.5 80.5z" fill="#515f70"/><path fill="#00b7ff" d="M203.4 156l5 2.9-7.9 13.8-5.1-2.9 8-13.8zm68.1-118l5 3-7.9 13.7-5.1-2.9 8-13.8zm-89.1 94.9l3 5.1-13.8 7.9-3-5 13.8-8zm118-68.1l2.9 5.1-13.8 7.9-2.9-5 13.8-8zm-124.6 37.7v5.8h-15.9v-5.8h15.9zm136.2 0v5.8h-15.9v-5.8H312zM185.4 72.8l-3 5-13.8-7.9 3-5.1 13.8 8zm117.9 68.1l-2.9 5-13.8-7.9 2.9-5.1 13.8 8zm-94.9-89.1l-5 2.9-8-13.7 5.1-3 7.9 13.8zm68.1 118l-5 2.9-8-13.8 5.1-2.9 7.9 13.8zM238.9 45.2h-5.8V29.3h5.8v15.9zm0 136.2h-5.8v-15.9h5.8v15.9z"/><circle cx="236" cy="106.9" r="7" fill="#00417c"/><path d="M236.3 123.5h-.6c-1.3 0-2.4-1.1-2.4-2.4V55c0-1.3 1.1-2.4 2.4-2.4h.6c1.3 0 2.4 1.1 2.4 2.4v66.1c0 1.3-1.1 2.4-2.4 2.4z" fill="#00417c"/></symbol><symbol id="equatio-svg-expiring-license" viewBox="0 0 340 234.5"><g opacity=".37"><radialGradient id="SVGID_1_" cx="1157.033" cy="95405.406" r="271.258" gradientTransform="matrix(.3648 0 0 .02555 -129.17 -2220.817)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d1e1c"/><stop offset=".146" stop-color="#1d1e1c" stop-opacity=".854"/><stop offset="1" stop-color="#1d1e1c" stop-opacity="0"/></radialGradient><path d="M293.1 203.3c-58.9 0-108.7 3.7-129.5 8.9v10.1c20.7 5.2 70.6 8.9 129.5 8.9 76.5 0 138.5-6.3 138.5-14-.1-7.7-62.1-13.9-138.5-13.9z" fill="url(#SVGID_1_)"/></g><path d="M256.1 55h52.4c7.5 0 12.9 6.8 12.9 14.3v97.9c0 7.5-5.4 14.3-12.9 14.3h-5.8v33.7c0 1.1-1 2-2.1 2s-2.1-.9-2.1-2v-33.7h-4.1v33.7c0 1.1-1 2-2.1 2s-2.1-.9-2.1-2v-33.7h-7c-7.5 0-13.7-6.8-13.7-14.3V76.4L254 60.5c-2.9-2.8-1.9-5.5 2.1-5.5z" fill="#aeca37"/><g fill="#fff"><path d="M279.5 66c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.8 0-3.1-1.4-3.1-3.1z"/><circle cx="282.5" cy="66" r="3.1"/></g><path d="M271.1 114.7c1.3-.1 2.2-1.2 2.1-2.5-.1-1.3-1.2-2.2-2.5-2.1l-18.2 1.6c-1.3.1-2.2 1.2-2.1 2.5.1 1.3 1.2 2.2 2.5 2.1h.2l3.4 38.4c.4 4.9 4.8 8.5 9.7 8.1 4.9-.4 8.5-4.8 8.1-9.7l-3.4-38.4h.2z" opacity=".43" fill="#fff"/><path d="M266.3 163.7c-5.4.5-10.1-3.5-10.6-8.9l-3.4-37.6c-1.4-.2-2.6-1.3-2.8-2.8-.2-1.7 1.1-3.3 2.9-3.4l18.2-1.6c1.7-.2 3.3 1.1 3.4 2.9.1 1.5-.8 2.9-2.2 3.3l3.4 37.6c.5 5.2-3.5 10-8.9 10.5zm-13.7-51c-.8.1-1.3.8-1.3 1.5.1.8.8 1.3 1.5 1.3l1.1-.1 3.5 39.3c.4 4.4 4.3 7.7 8.7 7.3s7.7-4.3 7.3-8.7l-3.5-39.3 1.1-.1c.8-.1 1.3-.8 1.3-1.5-.1-.8-.8-1.3-1.5-1.3l-18.2 1.6z" fill="#ebeff2"/><path d="M257.1 131.4l2.1 23.1c.3 3.5 3.4 6.1 7 5.8 3.5-.3 6.1-3.4 5.8-7l-2.1-23.1-12.8 1.2z" fill="#e94e68"/><path d="M292.2 140c0 1.1-.9 2.1-2.1 2.1h-24.9c-1.1 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1h24.9c1.2.1 2.1 1 2.1 2.1z" fill="#aeca37"/><path d="M104.1 203c-54 0-98-44-98-98s44-98 98-98 98 44 98 98-43.9 98-98 98z" fill="#eaf0f4"/><path d="M105.4 8.2C52 8.2 8.6 51.5 8.6 104.8s43.4 96.6 96.8 96.6 96.8-43.3 96.8-96.6c-.1-53.3-43.5-96.6-96.8-96.6zm0 176c-43.9 0-79.5-35.5-79.5-79.4 0-43.8 35.6-79.4 79.5-79.4s79.5 35.5 79.5 79.4c0 43.9-35.6 79.4-79.5 79.4z" fill="#000623"/><path d="M158.8 23.7c-.1-.1-.1-.1-.2-.1L49.3 186.2c.1 0 .1.1.2.2 44.9 30.1 105.9 18.2 136-26.7 30.1-44.9 18.2-105.9-26.7-136z" fill="#dfe5ea"/><path d="M104.1 7c-54 0-98 44-98 98s44 98 98 98 98-44 98-98-43.9-98-98-98zm0 178.5c-44.5 0-80.5-36-80.5-80.5s36-80.5 80.5-80.5 80.5 36 80.5 80.5c.1 44.5-36 80.5-80.5 80.5z" fill="#515f70"/><path fill="#00b7ff" d="M71.6 156l5 2.9-8 13.8-5-2.9 8-13.8zm68-117.9l5.1 2.9-8 13.8-5-2.9 7.9-13.8zm-89 94.8l2.9 5.1-13.8 7.9-2.9-5 13.8-8zm117.9-68.1l3 5.1-13.8 8-3-5.1 13.8-8zM44 102.5v5.8H28.1v-5.8H44zm136.2 0v5.8h-15.9v-5.8h15.9zM53.5 72.8l-2.9 5.1-13.8-8 2.9-5.1 13.8 8zm118 68.1l-3 5-13.8-7.9 3-5.1 13.8 8zm-94.9-89l-5 2.9-8-13.8 5-2.9 8 13.8zm68.1 117.9l-5.1 2.9-7.9-13.8 5-2.9 8 13.8zM107.1 45.3h-5.9v-16h5.9v16zm0 136.1h-5.9v-15.9h5.9v15.9z"/><path d="M102.2 99.6c0-.4.1-.7.3-.9h-.3L87.5 59.4c-.5-1.3-2-2-3.3-1.5-1.3.5-2 2-1.5 3.3l15.1 40.5c1.7 0 4.2-.3 4.4-2.1z" fill="#00417c"/><path d="M125.2 90.5c-1-1.6-3.1-2-4.7-1L105.9 99c-1.1-.5-2.4-.6-3.6-.4 0 0-3.5 1.4-4.4 3.1s-1.2 3.7-.5 5.6c1.3 3.4 5 5.1 8.3 3.8 2.8-1 4.4-3.8 4.2-6.6l14.3-9.3c1.6-1 2-3.1 1-4.7z" fill="#00417c"/><g fill-rule="evenodd" clip-rule="evenodd"><g fill="#00417c"><path d="M219.8 151.6c-2.6.1-4.5 3.4-4.4 7.3l-1.1 13.1 3.3.1 1.5-5.6v-.1c.5.2 1 .3 1.5.3 2.7-.1 4.6-3.6 4.4-7.8-.2-4.2-2.5-7.5-5.2-7.3zm.1 1.8c2-.1 3.8 2.4 3.9 5.5.2 3.1-1.3 5.8-3.3 5.9-2 .1-3.8-2.4-4-5.5-.1-3.1 1.4-5.8 3.4-5.9z"/><path d="M216.9 172.1l-2.9 34.8-2.2-31.7 3-3.2zm-7.9-20.6c2.6.2 4.4 3.4 4.3 7.4l.9 13.1-3.3.1-1.5-5.6v-.1c-.5.2-1 .3-1.5.3-2.7-.2-4.6-3.7-4.3-7.9.3-4.3 2.7-7.5 5.4-7.3zm-.1 1.8c-2-.1-3.8 2.3-4 5.4-.2 3.1 1.2 5.8 3.2 5.9 2 .1 3.8-2.3 4-5.4.2-3.1-1.2-5.7-3.2-5.9z"/><path d="M211.6 172l2.4 34.9 2.7-31.7-3-3.2z"/><ellipse transform="matrix(.06818 -.9977 .9977 .06818 21.214 380.346)" cx="214.2" cy="178.8" rx=".9" ry=".8"/></g><path d="M213.2 188.9l13.5-50.6c.1-.5.7-.8 1.2-.7l7.3 1.9c.5.1.8.7.7 1.2l-13.6 50.6c-.1.5-.7.8-1.2.7l-7.3-1.9c-.4-.1-.7-.6-.6-1.2z" fill="#00417c"/><path transform="rotate(-75.167 215.542 188.62)" fill="#fff" d="M215.3 186.5h.4v4.3h-.4z"/><path fill="#fff" d="M213.6 187.4l.1-.4 2 .5-.1.4zm.3-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 2 .5-.1.4zm.2-.9l.2-.4 2 .5-.2.4zm.3-.9l.1-.4 4.2 1.1-.1.4zm.2-.9l.1-.4 2 .6-.1.4zm.3-.9l.1-.4 2 .6-.1.4zm.2-.9l.1-.4 2 .6-.1.4zm.2-.8l.1-.5 2.1.6-.2.4zm.3-.9l.1-.4 4.2 1.1-.1.4zm.2-.9l.1-.4 2 .5-.1.4zm.3-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 2 .5-.1.4zm.3-.9l.1-.4 4.2 1.1-.1.4z"/><path transform="rotate(-74.942 218.264 174.077)" fill="#fff" d="M218.1 173h.4v2.1h-.4z"/><path fill="#fff" d="M217.4 173.1l.2-.4 2 .6-.1.4zm.3-.9l.1-.4 2 .6-.1.4zm.2-.9l.1-.4 2 .6-.1.4zm.3-.8l.1-.5 4.2 1.2-.1.4z"/><path transform="rotate(-74.966 219.457 169.626)" fill="#fff" d="M219.2 168.6h.4v2.1h-.4z"/><path fill="#fff" d="M218.6 168.7l.1-.4 2.1.5-.2.4zm.3-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 2 .5-.1.4zm.3-.9l.1-.4 4.2 1.1-.2.4z"/><path transform="rotate(-74.971 220.644 165.177)" fill="#fff" d="M220.4 164.1h.4v2.1h-.4z"/><path fill="#fff" d="M219.8 164.2l.1-.4 2 .5-.1.5zm.3-.9l.1-.4 2 .6-.1.4zm.2-.9l.1-.4 2 .6-.1.4zm.2-.8l.2-.5 4.2 1.2-.2.4z"/><path transform="rotate(-74.966 221.843 160.72)" fill="#fff" d="M221.6 159.7h.4v2.1h-.4z"/><path fill="#fff" d="M221 159.8l.1-.4 2 .5-.1.4zm.3-.9l.1-.4 2 .5-.1.4z"/><path transform="rotate(-75.173 222.552 158.054)" fill="#fff" d="M222.3 157h.4v2.1h-.4z"/><path fill="#fff" d="M221.7 157.1l.2-.4 4.1 1.1-.1.4zm.3-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 2 .5-.1.5zm.3-.9l.1-.4 2 .6-.1.4z"/><path transform="rotate(-74.935 223.764 153.605)" fill="#fff" d="M223.5 152.6h.4v2.1h-.4z"/><path fill="#fff" d="M222.9 152.6l.1-.4 4.2 1.2-.1.4z"/><path fill="#fff" d="M222.9 152.6l.1-.4 4.2 1.2-.1.4z"/><path transform="rotate(-75.202 224.234 151.824)" fill="#fff" d="M224 150.8h.4v2.1h-.4z"/><path transform="rotate(-74.966 224.468 150.923)" fill="#fff" d="M224.3 149.9h.4v2.1h-.4z"/><path fill="#fff" d="M223.7 150l.1-.4 2 .5-.1.4z"/><path transform="rotate(-74.935 224.957 149.152)" fill="#fff" d="M224.7 148.1h.4v2.1h-.4z"/><path fill="#fff" d="M224.1 148.2l.1-.4 4.2 1.1-.1.4z"/><path transform="rotate(-75.167 225.424 147.36)" fill="#fff" d="M225.2 146.3h.4v2.1h-.4z"/><path transform="rotate(-74.942 225.66 146.47)" fill="#fff" d="M225.4 145.4h.4v2.1h-.4z"/><path fill="#fff" d="M224.8 145.5l.2-.4 2 .5-.2.5z"/><path transform="rotate(-74.942 226.14 144.688)" fill="#fff" d="M225.9 143.7h.4v2.1h-.4z"/><path fill="#fff" d="M225.3 143.7l.1-.4 4.2 1.2-.1.4zm.3-.8l.1-.5 2 .6-.1.4zm.2-.9l.1-.5 2 .6-.1.4zm.2-.9l.1-.4 2.1.5-.2.4zm.3-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 4.2 1.1-.1.4z"/><g fill="#00417c"><path d="M198.8 167.1l.1-7.1 3.6 6.1-.8.6-1.9.5z"/><path d="M199.8 167.3l6.4 23.8-.9.3-6.4-23.8c-.1-.5 0-1 .2-1.1.2-.1.6.3.7.8z"/><path d="M200.5 166.1c.5-.1 1 .2 1.2.7l6.4 23.8-1.9.5-6.4-23.8c-.1-.5.2-1.1.7-1.2z"/><path d="M202.6 166.5l6.4 23.8-.9.3-6.4-23.8c-.1-.5 0-1 .2-1.1.3 0 .6.3.7.8zm-3.7-4.3V160l1 1.9z"/></g><g fill="#00417c"><path d="M206.5 162l1.5-6.9 2.3 6.7-.9.4-2 .1z"/><path d="M207.4 162.4l1.4 24.6-1 .1-1.4-24.6c0-.5.2-1 .4-1 .4-.1.6.3.6.9z"/><path d="M208.3 161.3c.5 0 1 .4 1 .9l1.4 24.6-1.9.1-1.4-24.6c0-.5.4-.9.9-1z"/><path d="M210.3 162.2l1.4 24.6-1 .1-1.4-24.6c0-.5.2-1 .4-1 .4-.1.6.4.6.9zm-2.7-5.1l.4-2 .7 2z"/></g><path d="M223.8 213.7h3.9v-31.9l-3.9-1.1zm-23.2-33.5h23.2v33.5h-23.2z" fill="#00417c"/></g></symbol><symbol id="equatio-svg-floating-action-align-centers-horiz" viewBox="0 0 24 11.8"><g id="Group_283" transform="translate(-1577 -219)" fill="#484848"><g id="Group_192" transform="translate(3716.461 -26)"><path id="Path_698" d="M-2139 252.3h12.3c.3 0 .5-.2.5-.5v-1.9c0-.3-.2-.5-.5-.5h-12.3c-.3 0-.5.2-.5.5v1.9c0 .3.3.5.5.5z"/><path id="Path_699" d="M-2119.9 252.3h4c.3 0 .5-.2.5-.5v-1.9c0-.3-.2-.5-.5-.5h-4c-.3 0-.5.2-.5.5v1.9c0 .3.2.5.5.5z"/></g><path id="Path_700" d="M1580.6 228.9h6.1c.3 0 .5-.2.5-.5v-7c0-.3-.2-.5-.5-.5h-6.1c-.3 0-.5.2-.5.5v7c.1.3.3.5.5.5z"/><path id="Path_701" d="M1590 230.8h7.3c.3 0 .5-.2.5-.5v-10.8c0-.3-.2-.5-.5-.5h-7.3c-.3 0-.5.2-.5.5v10.8c0 .3.2.5.5.5zm5.6-9.6v7.3h-3.8v-7.3h3.8z"/></g></symbol><symbol id="equatio-svg-floating-action-align-centers" viewBox="0 0 11.8 24"><g id="Group_283" transform="translate(-1577 -219)" fill="currentColor"><g id="Group_192" transform="translate(3716.461 -26)"><path id="Path_698" d="M-2135 245.5v12.3c0 .3.2.5.5.5h1.9c.3 0 .5-.2.5-.5v-12.3c0-.3-.2-.5-.5-.5h-1.9c-.3 0-.5.2-.5.5z"/><path id="Path_699" d="M-2135 264.6v4c0 .3.2.5.5.5h1.9c.3 0 .5-.2.5-.5v-4c0-.3-.2-.5-.5-.5h-1.9c-.3 0-.5.2-.5.5z"/></g><path id="Path_700" d="M1578.9 222.6v6.1c0 .3.2.5.5.5h7c.3 0 .5-.2.5-.5v-6.1c0-.3-.2-.5-.5-.5h-7c-.3.1-.5.3-.5.5z"/><path id="Path_701" d="M1577 232v7.3c0 .3.2.5.5.5h10.8c.3 0 .5-.2.5-.5V232c0-.3-.2-.5-.5-.5h-10.8c-.3 0-.5.2-.5.5zm9.6 5.6h-7.3v-3.8h7.3v3.8z"/></g></symbol><symbol id="equatio-svg-floating-action-align-to-bottom" viewBox="0 0 25 18.2"><g id="Group_261" transform="translate(-192 592)" fill="currentColor"><path id="Path_706" d="M216.5-573.8h-24c-.3 0-.5-.2-.5-.5v-2.1c0-.3.2-.5.5-.5h24c.3 0 .5.2.5.5v2.1c0 .3-.2.5-.5.5z"/><path id="Path_707" d="M213.4-579h-6.7c-.3 0-.5-.2-.5-.5v-7.8c0-.3.2-.5.5-.5h6.7c.3 0 .5.2.5.5v7.8c0 .3-.2.5-.5.5z"/><path id="Path_708" d="M203.6-579.5v-12c0-.3-.2-.5-.5-.5H195c-.3 0-.5.2-.5.5v12c0 .3.2.5.5.5h8.1c.2 0 .4-.2.5-.5zm-2.5-10v8.1h-4.2v-8.1h4.2z"/></g></symbol><symbol id="equatio-svg-floating-action-align-to-left" viewBox="0 0 17.4 23.9"><g id="Group_325" transform="translate(-187 592)" fill="currentColor"><path id="Path_692" d="M187-591.5v22.9c0 .3.2.5.5.5h2c.3 0 .5-.2.5-.5v-22.9c0-.3-.2-.5-.5-.5h-2c-.3 0-.5.2-.5.5z"/><path id="Path_693" d="M192-588.5v6.4c0 .3.2.5.5.5h7.4c.3 0 .5-.2.5-.5v-6.4c0-.3-.2-.5-.5-.5h-7.4c-.3 0-.5.2-.5.5z"/><path id="Path_694" d="M192-578.7v7.7c0 .3.2.5.5.5h11.4c.3 0 .5-.2.5-.5v-7.7c0-.3-.2-.5-.5-.5h-11.4c-.3 0-.5.3-.5.5zm10.1 5.9h-7.7v-4.1h7.7v4.1z"/></g></symbol><symbol id="equatio-svg-floating-action-align-to-right" viewBox="0 0 17.5 24"><g id="Group_264" transform="translate(-393 635)" fill="currentColor"><path id="Path_709" d="M410.5-634.5v23c0 .3-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5v-23c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5z"/><path id="Path_710" d="M405.5-631.5v6.4c0 .3-.2.5-.5.5h-7.4c-.3 0-.5-.2-.5-.5v-6.4c0-.3.2-.5.5-.5h7.4c.2 0 .5.2.5.5z"/><path id="Path_711" d="M405-622.1h-11.5c-.3 0-.5.2-.5.5v7.8c0 .3.2.5.5.5H405c.3 0 .5-.2.5-.5v-7.8c0-.3-.2-.5-.5-.5zm-9.6 2.4h7.8v4.1h-7.8v-4.1z"/></g></symbol><symbol id="equatio-svg-floating-action-align-to-top" viewBox="0 0 25 18.2"><g id="Group_260" transform="translate(-194 592)" fill="currentColor"><path id="Path_695" d="M218.5-592h-24c-.3 0-.5.2-.5.5v2.1c0 .3.2.5.5.5h24c.3 0 .5-.2.5-.5v-2.1c0-.3-.2-.5-.5-.5z"/><path id="Path_696" d="M215.4-586.8h-6.7c-.3 0-.5.2-.5.5v7.8c0 .3.2.5.5.5h6.7c.3 0 .5-.2.5-.5v-7.8c0-.2-.2-.5-.5-.5z"/><path id="Path_697" d="M205-586.8h-8.1c-.3 0-.5.2-.5.5v12c0 .3.2.5.5.5h8.1c.3 0 .5-.2.5-.5v-12c.1-.2-.2-.5-.5-.5zm-6.1 10.6v-8.1h4.2v8.1h-4.2z"/></g></symbol><symbol id="equatio-svg-floating-action-arrange-bring-forward" viewBox="0 0 20 20"><g id="Group_246" transform="translate(-597 745)"><path id="Path_730" d="M597.4-731.4h5.9v5.9c0 .2.2.4.4.4h12.8c.2 0 .4-.2.4-.4v-12.8c0-.2-.2-.4-.4-.4h-5.9v-5.9c0-.2-.2-.4-.4-.4h-12.8c-.2 0-.4.2-.4.4v12.8c0 .2.2.4.4.4zm2.7-10.5h7.5v3.3H604c-.3 0-.6.3-.6.6v3.6h-3.3v-7.5z" fill="currentColor"/></g></symbol><symbol id="equatio-svg-floating-action-arrange-bring-to-front" viewBox="0 0 20 20.1"><path id="Path_712" d="M19.6 10.3h-3.4v-6c0-.2-.2-.4-.4-.4h-6V.4c.1-.2-.1-.4-.3-.4H.4C.2 0 0 .2 0 .4v9.1c0 .2.2.4.4.4h3.3v6c0 .2.2.4.4.4h6v3.4c0 .2.2.4.4.4h9.1c.2 0 .4-.2.4-.4v-9.1c0-.1-.2-.3-.4-.3zm-7.3 6h3.5c.2 0 .4-.2.4-.4v-3.4h1.6v5.4h-5.4l-.1-1.6zM3.7 4.2v3.4H2.2V2.2h5.4v1.6H4.1c-.2 0-.4.2-.4.4z" fill="currentColor"/></symbol><symbol id="equatio-svg-floating-action-arrange-send-back" viewBox="0 0 20 20"><g id="Group_265" transform="translate(-493 745)"><g id="Group_243"><path id="Path_714" d="M493.4-731.4h5.9v5.9c0 .2.2.4.4.4h12.8c.2 0 .4-.2.4-.4v-12.8c0-.2-.2-.4-.4-.4h-5.9v-5.9c0-.2-.2-.4-.4-.4h-12.8c-.2 0-.4.2-.4.4v12.8c0 .2.2.4.4.4zm16.5-4.2v7.5h-7.5v-7.5h7.5z" fill="currentColor"/></g></g></symbol><symbol id="equatio-svg-floating-action-arrange-send-to-back" viewBox="0 0 20 20.1"><g id="Group_266" transform="translate(-439 745)"><path id="Path_713" d="M458.6-734.7h-3.4v-6c0-.2-.2-.4-.4-.4h-6v-3.4c0-.2-.2-.4-.4-.4h-9.1c-.2 0-.4.2-.4.4v9.1c0 .2.2.4.4.4h3.3v6c0 .2.2.4.4.4h6v3.4c0 .2.2.4.4.4h9.1c.2 0 .4-.2.4-.4v-9.1c.1-.2-.1-.4-.3-.4zm-7.3 7.6v-5.4h5.4v5.4h-5.4zm-4.6-15.7v5.4h-5.4v-5.4h5.4z" fill="currentColor"/></g></symbol><symbol id="equatio-svg-floating-action-grouping-group" viewBox="0 0 23.7 23.2"><g id="Group_291" transform="translate(1930.627 1514.992)"><path id="Path_715" d="M-1918.8-1501h-4.7c-1.3 0-2.4-1.1-2.4-2.4v-4.6c0-1.3 1.1-2.4 2.4-2.4h4.7c1.3 0 2.4 1.1 2.4 2.4v4.6c0 1.3-1.1 2.4-2.4 2.4z" fill="#494949"/><path id="Path_716" d="M-1914.3-1497.2h-4.7c-1.3 0-2.4-1.1-2.4-2.4v-4.6c0-1.3 1.1-2.4 2.4-2.4h4.7c1.3 0 2.4 1.1 2.4 2.4v4.6c0 1.3-1.1 2.4-2.4 2.4zm-4.7-7.5c-.3 0-.5.2-.5.5v4.6c0 .3.2.5.5.5h4.7c.3 0 .5-.2.5-.5v-4.6c0-.3-.2-.5-.5-.5h-4.7z" fill="#494949"/><path id="Path_717" d="M-1907.7-1510.5c.5 0 .9-.4.9-.9v-2.8c0-.5-.4-.9-.9-.9h-2.8c-.5 0-.9.4-.9.9v.4h-14.7v-.4c0-.5-.4-.9-.9-.9h-2.8c-.5 0-.9.4-.9.9v2.8c0 .5.4.9.9.9h.9v14.2h-.9c-.5 0-.9.4-.9.9v2.8c0 .5.4.9.9.9h2.8c.5 0 .9-.4.9-.9v-.8h14.7v.8c0 .5.4.9.9.9h2.8c.5 0 .9-.4.9-.9v-2.8c0-.5-.4-.9-.9-.9h-.8v-14.2h.8zm-2.1 14.2h-.7c-.5 0-.9.4-.9.9v.8h-14.7v-.8c0-.5-.4-.9-.9-.9h-.7v-14.2h.7c.5 0 .9-.4.9-.9v-1.1h14.7v1.1c0 .5.4.9.9.9h.7v14.2z" fill="#494949"/><path id="Path_718" d="M-1923.5-1508.5c-.3 0-.5.2-.5.5v4.6c0 .3.2.5.5.5h4.7c.3 0 .5-.2.5-.5v-4.6c0-.3-.2-.5-.5-.5h-4.7z" fill="#fff"/></g></symbol><symbol id="equatio-svg-floating-action-grouping-ungroup" viewBox="0 0 21.8 21.8"><g id="Group_292" transform="translate(-1449.408 285.593)"><path id="Path_719" d="M1460.2-271.9h-5c-1.4 0-2.6-1.1-2.6-2.6v-5c0-1.4 1.1-2.6 2.6-2.6h5c1.4 0 2.6 1.1 2.6 2.6v5c0 1.4-1.2 2.6-2.6 2.6z" fill="#494949"/><path id="Path_720" d="M1465-267.9h-5c-1.4 0-2.6-1.1-2.6-2.6v-5c0-1.4 1.1-2.6 2.6-2.6h5c1.4 0 2.6 1.1 2.6 2.6v5c0 1.4-1.2 2.6-2.6 2.6zm-5-8.1c-.3 0-.5.2-.5.5v5c0 .3.2.5.5.5h5c.3 0 .5-.2.5-.5v-5c0-.3-.2-.5-.5-.5h-5z" fill="#494949"/><path id="Path_721" d="M1455.2-280c-.3 0-.5.2-.5.5v5c0 .3.2.5.5.5h5c.3 0 .5-.2.5-.5v-5c0-.3-.2-.5-.5-.5h-5z" fill="#fff"/><g id="Group_199" transform="translate(3632 -317)" fill="#494949"><path id="Path_722" d="M-2161.5 53.2h-1c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h.3v-.3c0-.4.3-.7.7-.7s.7.3.7.7v1c0 .4-.3.7-.7.7z"/><path id="Path_723" d="M-2164.5 53.2h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.4.7-.7.7zm-4.1 0h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-4.1 0h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-4.1 0h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/><path id="Path_724" d="M-2180.9 53.2h-1c-.4 0-.7-.3-.7-.7v-1c0-.4.3-.7.7-.7.4 0 .7.3.7.7v.3h.3c.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/><path id="Path_725" d="M-2181.9 50.2c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7zm0-4.1c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7zm0-4.1c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7zm0-4.1c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7z"/><path id="Path_726" d="M-2181.9 33.8c-.4 0-.7-.3-.7-.7v-1c0-.4.3-.7.7-.7h1c.4 0 .7.3.7.7 0 .4-.3.7-.7.7h-.3v.3c0 .4-.3.7-.7.7z"/><path id="Path_727" d="M-2164.5 32.8h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.4.7-.7.7zm-4.1 0h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-4.1 0h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-4.1 0h-2c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2c.4 0 .7.3.7.7 0 .4-.3.7-.7.7z"/><path id="Path_728" d="M-2161.5 33.8c-.4 0-.7-.3-.7-.7v-.3h-.3c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h1c.4 0 .7.3.7.7v1c0 .4-.3.7-.7.7z"/><path id="Path_729" d="M-2161.5 50.2c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7zm0-4.1c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7zm0-4.1c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7zm0-4.1c-.4 0-.7-.3-.7-.7v-2c0-.4.3-.7.7-.7.4 0 .7.3.7.7v2c0 .4-.3.7-.7.7z"/></g></g></symbol><symbol id="equatio-svg-floating-action-move" viewBox="0 0 14 14"><path id="Path_754" d="M13.8 6.6c.1.1.2.2.2.4 0 .1-.1.3-.1.3l-2 2c-.1.1-.2.1-.4.1-.1 0-.3-.1-.4-.1-.1-.1-.1-.2-.1-.3V8H8v3h1c.1 0 .3.1.4.1.1.1.1.2.1.4 0 .1-.1.3-.1.4l-2 2c-.2.2-.5.2-.7 0l-2-2c-.1-.1-.1-.2-.1-.3 0-.1.1-.3.1-.4 0-.2.2-.2.3-.2h1V8H3v1c0 .1-.1.3-.1.3-.1.1-.3.2-.4.2-.1 0-.3-.1-.3-.1l-2-2C.1 7.2 0 7.1 0 7c0-.1.1-.3.1-.3l2-2c.1-.1.2-.1.3-.1.1 0 .3.1.3.1.2 0 .3.2.3.3v1h3V3H5c-.2 0-.3-.1-.4-.2-.1 0-.1-.2-.1-.3 0-.1.1-.3.1-.4l2-2c.1 0 .2-.1.4-.1.1 0 .3.1.3.1l2 2c.1.1.1.2.1.4 0 .1-.1.3-.1.4-.1 0-.2.1-.3.1H8v3h3V5c0-.1.1-.3.1-.4.1-.1.2-.1.4-.1.1 0 .3.1.4.1l1.9 2z" fill="currentColor"/></symbol><symbol id="equatio-svg-floating-group-header-collapse" viewBox="0 0 8.7 6.4"><path id="Path_745" d="M0 0h8.7L4.4 6.4 0 0z" fill="currentColor"/></symbol><symbol id="equatio-svg-free-license" viewBox="0 0 340 234.5"><path d="M99.5 121.9H36.1c-8.4 0-15.3 6.9-15.3 15.2V181c0 8.4 6.9 15.2 15.3 15.2H49v17.9c0 1 .8 1.8 1.9 1.8 1 0 1.9-.8 1.9-1.8v-17.9h3.5v17.9c0 1 .8 1.8 1.9 1.8 1 0 1.9-.8 1.9-1.8v-17.9H73c8.4 0 15.3-6.9 15.3-15.2v-38.1l14.3-14.3c3.4-3.7 2.2-6.7-3.1-6.7z" fill="#9f5dff"/><g fill="#fff"><path d="M76.5 135.1c-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.8 2.9-2.8 1.6 0 2.9 1.3 2.9 2.8 0 1.6-1.3 2.9-2.9 2.9z"/><ellipse cx="76.5" cy="132.3" rx="2.9" ry="2.9"/></g><path d="M103.7 138.8c.4.7.2 1.6-.6 2.1l-15.8 9c-.7.4-1.6.2-2.1-.6-.4-.7-.2-1.6.6-2.1l15.8-9c.7-.3 1.6-.1 2.1.6zm-99.1.3c-.4.8 0 1.7.7 2l16.4 7.8c.8.4 1.7 0 2-.7.4-.8 0-1.7-.7-2l-16.4-7.8c-.8-.3-1.7 0-2 .7z" fill="#9f5dff"/><g opacity=".37"><radialGradient id="SVGID_1_" cx="836.354" cy="85059.477" r="453.189" gradientTransform="matrix(.2376 0 0 .02555 -137.32 -1956.492)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d1e1c"/><stop offset=".146" stop-color="#1d1e1c" stop-opacity=".854"/><stop offset="1" stop-color="#1d1e1c" stop-opacity="0"/></radialGradient><path d="M61.5 193.9c-64 0-118.3 6.2-140.9 14.9v16.8c22.6 8.7 76.8 14.9 140.9 14.9 83.2 0 150.6-10.4 150.6-23.3.1-12.9-67.4-23.3-150.6-23.3z" fill="url(#SVGID_1_)"/></g><path transform="rotate(-15.729 209.665 30.682)" fill="#00417c" d="M179.9 29.4h59.5v2.7h-59.5z"/><path transform="rotate(-15.729 213.519 44.369)" fill="#00417c" d="M183.8 43h59.5v2.7h-59.5z"/><path transform="rotate(-15.729 217.373 58.056)" fill="#00417c" d="M187.6 56.7h59.5v2.7h-59.5z"/><ellipse transform="rotate(-15.729 193.873 35.336)" cx="193.9" cy="35.3" rx="5" ry="5" fill="#00417c"/><path d="M194.8 30.5c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.4-1.9-2-3.2-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 203.444 32.641)" cx="203.5" cy="32.6" rx="5" ry="5" fill="#00417c"/><path d="M204.4 27.8c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.9-2-3.2-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 218.809 43.176)" cx="218.8" cy="43.2" rx="5" ry="5" fill="#00417c"/><path d="M219.8 38.3c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.8-2-3.1-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 207.52 61.008)" cx="207.5" cy="61" rx="5" ry="5" fill="#00417c"/><path d="M208.5 56.2c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.9-2-3.2-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 231.413 39.626)" cx="231.4" cy="39.6" rx="5" ry="5" fill="#00417c"/><path d="M232.4 34.8c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.9-2-3.2-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 218.37 57.952)" cx="218.4" cy="58" rx="5" ry="5" fill="#00417c"/><path d="M219.3 53.1c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.4-1.9-2-3.2-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 221.408 27.582)" cx="221.4" cy="27.6" rx="5" ry="5" fill="#00417c"/><path d="M222.4 22.7c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.8-2-3.1-3.8-3.5z" fill="#e6e6e6"/><g fill="#00417c"><path d="M193 81.3c-1.5.4-2.9-.5-3.3-1.9L176.1 31c-.4-1.5.4-3 1.8-3.4 1.5-.4 2.9.5 3.3 1.9l13.6 48.4c.4 1.5-.3 3-1.8 3.4z"/><path d="M177.9 27.6L193 81.3c1.7-.5 2.2-1.9 1.8-3.4l-13.6-48.4c-.4-1.5-1.6-2.4-3.3-1.9z"/></g><g fill="#00417c"><path d="M249.9 65.3c-1.5.4-3.3-.3-3.7-1.8L232.5 15c-.4-1.5.8-3.1 2.3-3.5 1.5-.4 3.3.3 3.7 1.8l13.6 48.4c.5 1.6-.7 3.2-2.2 3.6z"/><path d="M235.2 11.4l15.1 53.7c.9-.2 2.2-1.9 1.8-3.4l-13.6-48.4c-.4-1.4-2.4-2.1-3.3-1.9z"/></g><g fill="#00417c"><path d="M253 66l-62.1 17.5c-2.2.6-4.4-.5-5-2.7-.6-2.2.7-4.3 2.9-5l62.1-17.5c2.2-.6 4.4.5 5 2.7.6 2.3-.7 4.4-2.9 5z"/><path d="M185.7 80.4c.7 2.6 3 3.8 5.2 3.2L253 66c2.2-.6 3.5-2.8 2.8-5.4l-70.1 19.8z"/></g><path fill="#515f70" d="M113.3 116.2H229v98.4H113.3z"/><path fill="#3b4651" d="M202 172l6.8 1.8-1.8 6.7 6.7 1.9-1.8 6.7 55.1-31.8-17.3-30.1-50.8 29.4-1.9 6.8 6.8 1.8z"/><path fill="#3b4651" d="M228.9 116.2h-29.4l29.4 51.1z"/><path transform="rotate(-30 245.002 149.36)" fill="#515f70" d="M224.8 85.7h40.5V213h-40.5z"/><path fill="#00b7ff" d="M204.9 170.2l6.7 1.9-1.8 6.7 6.8 1.9-1.8 6.7 55.1-31.8-17.4-30.1-50.8 29.4-1.8 6.8 6.8 1.8zm101.2-65.9c4.1-15.4-5-31.3-20.5-35.4-15.4-4.1-31.3 5-35.4 20.5-4.1 15.4 17.4 47 17.4 47s34.3-16.6 38.5-32.1zm-38.7-10.4c4.1-15.4 15.6-15.1 15.6-15.1s2.6 3.4-1.5 18.9c-4.1 15.4-14.6 26.9-14.6 26.9s-3.7-15.2.5-30.7z"/><path d="M335 154.4c4.1-15.4-5-31.3-20.5-35.4-15.4-4.1-47 17.4-47 17.4s16.6 34.4 32 38.5c15.5 4.1 31.4-5 35.5-20.5zm-30.8 3.3c-15.4-4.1-26.9-14.6-26.9-14.6s15.2-3.6 30.7.5c15.4 4.1 15.1 15.6 15.1 15.6s-3.5 2.7-18.9-1.5z" fill="#00b7ff"/><ellipse transform="rotate(-30 262.561 139.239)" cx="262.6" cy="139.2" rx="17.4" ry="17.4" fill="#07a1d1"/><g fill="#00b7ff"><path d="M148.5 107.4h-10.8c-.5 0-1.1-.1-1.4-.5l-24-24c-.4-.4-.6-.9-.6-1.4V70.7c0-.5.2-1.1.6-1.4l24-23.9c.4-.4.9-.5 1.4-.5h10.8c.5 0 1.1.1 1.4.5l24.1 24c.4.4.7.9.7 1.4v10.8c0 .5-.3 1.1-.7 1.4l-24 23.9c-.4.4-1 .5-1.5.5zm-10-3.9h9.1l22.6-22.8v-9.1l-22.6-22.8h-9.1l-22.9 22.8v9.1l22.9 22.8zm34-22z"/><path d="M143.7 92.4c-.2 0-.4-.1-.5-.2l-15.3-15.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l15.3 15.3c.3.3.3.8 0 1.1-.2.1-.4.2-.6.2z"/><path d="M139.1 97.7c-.4 0-.8-.2-1.1-.5l-23.5-23.5c-.6-.6-.6-1.6 0-2.2.6-.6 1.6-.6 2.2 0l22.4 22.4L142 91c.6-.6 1.6-.6 2.2 0 .6.6.6 1.6 0 2.2l-4 4c-.2.3-.6.5-1.1.5z"/><path d="M142.8 91.9c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l15.3-15.3c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-15.3 15.3c-.2.2-.4.2-.6.2z"/><path d="M139.1 105.5c-.4 0-.8-.2-1.1-.5-.6-.6-.6-1.6 0-2.2l22.4-22.4-2.9-2.9c-.6-.6-.6-1.6 0-2.2.6-.6 1.6-.6 2.2 0l4 4c.6.6.6 1.6 0 2.2L140.2 105c-.3.3-.7.5-1.1.5z"/><path d="M157.8 77c-.2 0-.4-.1-.5-.2L142 61.5c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l15.3 15.3c.3.3.3.8 0 1.1-.2.1-.4.2-.6.2z"/><path d="M170.6 81.5c-.4 0-.8-.2-1.1-.5l-22.4-22.4-2.9 2.9c-.6.6-1.6.6-2.2 0-.6-.6-.6-1.6 0-2.2l4-4c.6-.6 1.6-.6 2.2 0l23.5 23.5c.6.6.6 1.6 0 2.2-.3.4-.7.5-1.1.5z"/><path d="M127.7 77.5c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l15.3-15.3c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-15.3 15.3c-.2.2-.4.2-.6.2z"/><path d="M127.3 77.7c-.4 0-.8-.2-1.1-.5l-4-4c-.6-.6-.6-1.6 0-2.2l23.5-23.5c.6-.6 1.6-.6 2.2 0 .6.6.6 1.6 0 2.2l-22.4 22.4 2.9 2.9c.6.6.6 1.6 0 2.2-.3.4-.7.5-1.1.5z"/></g><path fill="#00b7ff" d="M173 148.6l-5.1 5.2-5.1-5.2-5.2 5.2-5.1-5.2v66h36v-60.8l-5.2-5.2-5.1 5.2z"/></symbol><symbol id="equatio-svg-hamburger" viewBox="0 0 66 54"><path d="M0 10.5c0 .8.7 1.5 1.5 1.5h63c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5h-63C.7 0 0 .7 0 1.5v9zm0 21c0 .8.7 1.5 1.5 1.5h63c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5h-63c-.8 0-1.5.7-1.5 1.5v9zm0 21c0 .8.7 1.5 1.5 1.5h63c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5h-63c-.8 0-1.5.7-1.5 1.5v9z" fill="currentColor"/></symbol><symbol id="equatio-svg-input-area-hint-texthelper" viewBox="0 0 61.3 143"><path d="M58 0H11.6C5 0 0 5.1 0 11.7v86.8c0 6.6 5 12.4 11.6 12.4H18v30.2c0 1 .5 1.8 1.5 1.8s1.5-.8 1.5-1.8V111h4v30.2c0 1 .5 1.8 1.5 1.8s1.5-.8 1.5-1.8V111h6c6.6 0 12-5.8 12-12.4V18L59.8 4.4C62.3 1.9 61.5 0 58 0z" fill="#fd3269"/><g fill="#fff"><path d="M34.5 11.5c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7.1 1.5-1.2 2.7-2.7 2.7z"/><path d="M37.3 8.8c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.4 0 2.7 1.2 2.7 2.7z"/></g></symbol><symbol id="equatio-svg-input-button-copy" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><g id="XMLID_71_" opacity=".54"><path fill="none" d="M15.521 15.521h16.958v16.958H15.521z"/><path d="M26.826 16.228h-8.479c-.78 0-1.413.633-1.413 1.413v9.892h1.413v-9.892h8.479v-1.413zm2.12 2.826h-7.772c-.78 0-1.413.633-1.413 1.413v9.892c0 .78.633 1.413 1.413 1.413h7.772c.78 0 1.413-.633 1.413-1.413v-9.892c0-.78-.633-1.413-1.413-1.413zm0 11.305h-7.772v-9.892h7.772v9.892z"/></g></symbol><symbol id="equatio-svg-input-button-cut" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><path d="M22.538 19.615a2.923 2.923 0 1 0-2.924 2.923c.429 0 .832-.097 1.199-.263L22.538 24l-1.725 1.724a2.895 2.895 0 0 0-1.199-.263 2.923 2.923 0 1 0 2.923 2.923c0-.428-.097-.832-.263-1.199L24 25.462l4.385 4.385h2.923l-9.033-9.033c.166-.367.263-.771.263-1.199zm-2.923 1.462a1.462 1.462 0 1 1 0-2.924 1.462 1.462 0 0 1 0 2.924zm0 8.77a1.462 1.462 0 1 1 0-2.924 1.462 1.462 0 0 1 0 2.924zM24 23.635a.364.364 0 1 1 .001.729.364.364 0 0 1-.001-.729zm7.309-5.482h-2.923l-3.654 3.654 1.462 1.462 5.115-5.116z" fill="#666a70" id="XMLID_69_"/></symbol><symbol id="equatio-svg-input-button-delete" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><g fill="#666a70"><path d="M28.5 19.9h-9.2c-.3 0-.5.2-.5.5v9.9c0 1.1.9 2 1.9 2h6.2c1.1 0 1.9-.9 1.9-2v-9.9c.1-.3 0-.5-.3-.5zm1.1-2c0 .5-.4.9-1 .9h-9.2c-.5 0-1-.4-1-.9s.4-.9 1-.9h9.2c.5-.1 1 .3 1 .9z"/><path d="M26.5 18.1v-1.3c0-.6-1.2-1-2.6-1-1.4 0-2.6.5-2.6 1v1.3h5.2z"/></g></symbol><symbol id="equatio-svg-input-button-download" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><path d="M31 24v7H17v-7h-2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .7l2.6-2.6 1.4 1.4-5 5-5-5 1.4-1.4 2.6 2.6V15h2v9.7z" fill="#fff"/><path fill="none" d="M-2 14h24v24H-2V14z"/></symbol><symbol id="equatio-svg-input-button-insert" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><path id="Path_1375" d="M16.8 33.2h14.4c1.1 0 2-.9 2-2V16.8c0-1.1-.9-2-2-2.1H16.8c-1.1 0-2.1.9-2.1 2.1v14.4c.1 1.1 1 2 2.1 2zm0-12.3h4.1c0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1h4.1v10.3H16.8V20.9zm3.1 5.2H22v3.1h4.1v-3.1h2.1L24 21.9l-4.1 4.2z" fill="#fff"/></symbol><symbol id="equatio-svg-input-button-math-white" viewBox="0 0 45 45"><circle cx="24" cy="24" r="18" fill="currentColor"/><g fill="#fff"><path d="M20.08 22.5a.66.66 0 0 1-.495-.222l-3.899-4.386a.662.662 0 0 1 .495-1.102h6.514a.662.662 0 1 1 0 1.324h-5.04l2.92 3.285a.661.661 0 0 1-.495 1.101z"/><path d="M22.695 26.886h-6.514a.662.662 0 0 1-.495-1.102l3.899-4.386a.661.661 0 1 1 .989.879l-2.92 3.285h5.04a.662.662 0 0 1 .001 1.324z"/></g></symbol><symbol id="equatio-svg-input-button-math" viewBox="0 0 45 45"><circle cx="24" cy="24" r="18" fill="currentColor"/><g fill="#494949"><path d="M20.08 22.5a.66.66 0 0 1-.495-.222l-3.899-4.386a.662.662 0 0 1 .495-1.102h6.514a.662.662 0 1 1 0 1.324h-5.04l2.92 3.285a.661.661 0 0 1-.495 1.101z"/><path d="M22.695 26.886h-6.514a.662.662 0 0 1-.495-1.102l3.899-4.386a.661.661 0 1 1 .989.879l-2.92 3.285h5.04a.662.662 0 0 1 .001 1.324z"/></g></symbol><symbol id="equatio-svg-input-button-microphone" viewBox="0 0 25 25"><g fill="currentColor"><path d="M19.1 10.1c0-.2-.2-.4-.4-.4h-.9c-.2 0-.4.2-.4.4v2.4c0 2.3-2.2 4.1-4.8 4.1-2.6 0-4.8-1.8-4.8-4.1v-2.4c0-.2-.2-.4-.4-.4h-1c-.2 0-.4.2-.4.4v2.5c0 2.9 2.5 5.3 5.7 5.6v2.3h-2c-.2 0-.4.2-.4.4v.8c0 .2.2.4.4.4h5.7c.2 0 .4-.2.4-.4v-.8c0-.2-.2-.4-.4-.4h-2v-2.3c3.2-.4 5.7-2.7 5.7-5.6v-2.5z"/><path d="M12.5 15.3c1.8 0 3.3-1.3 3.3-2.8V5.9c0-1.6-1.5-2.8-3.3-2.8S9.2 4.3 9.2 5.9v6.6c0 1.5 1.5 2.8 3.3 2.8z"/></g></symbol><symbol id="equatio-svg-input-button-my" viewBox="0 0 25 25"><path d="M6 9.1c0-.5.3-.8.8-.8h.5c.5 0 .7.2.9.6l1.5 3.4 1.5-3.4c.2-.4.4-.6.8-.6h.4c.5 0 .8.3.8.8v5.7c0 .5-.2.8-.6.8h-.3c-.4 0-.6-.3-.6-.8v-4.3l-1.2 2.9c-.1.3-.2.5-.8.5-.7 0-.7-.2-.8-.5l-1.2-2.9v4.2c0 .5-.2.8-.6.8h-.5c-.5 0-.6-.3-.6-.8V9.1zm7.8 1.4c0-.1.4-.5.9-.5.4 0 .7.2.9.8l1.2 3.1 1.1-3.1c.2-.6.5-.8.9-.8s.9.4.9.4l-2.5 6.5c-.2.6-.5.8-.9.8-.5 0-.9-.4-.8-.4l.9-2.1c-.3 0-.4-.1-.5-.4l-2.1-4.3z" fill="currentColor"/></symbol><symbol id="equatio-svg-input-button-paste" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><path d="M29.444 17H26.19a2.327 2.327 0 0 0-2.191-1.556A2.329 2.329 0 0 0 21.808 17h-3.254c-.858 0-1.554.697-1.554 1.556V31c0 .859.697 1.556 1.556 1.556h10.889c.858 0 1.555-.697 1.555-1.556V18.556c0-.859-.697-1.556-1.556-1.556zM24 17a.778.778 0 1 1 0 1.556A.778.778 0 0 1 24 17zm5.444 14H18.555V18.556h1.556v2.333h7.778v-2.333h1.556V31z" fill="#666a70" id="XMLID_70_"/></symbol><symbol id="equatio-svg-input-button-redo" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><path d="M24.791 18.105v-3.5l5 5-5 5v-4.5a6 6 0 1 0 6 6h2a8 8 0 1 1-8-8z" fill="#676b71"/></symbol><symbol id="equatio-svg-input-button-save" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><path d="M29.2 14.2H17.8c-1 0-1.9.9-1.9 1.9v13.2c0 1 .8 1.9 1.9 1.9H31c1 0 1.9-.9 1.9-1.9V17.9l-3.7-3.7zm-4.8 15.1c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zm2.9-9.5h-9.4V16h9.4v3.8z" fill="#666a70"/></symbol><symbol id="equatio-svg-input-button-share" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><path d="M30.29 27.379c-.764 0-1.454.297-1.979.773l-5.417-3.195c.073-.309.122-.625.122-.957 0-.342-.053-.668-.131-.986l5.402-3.186a2.942 2.942 0 0 0 2.003.793 2.956 2.956 0 0 0 2.957-2.957 2.956 2.956 0 0 0-2.957-2.957 2.956 2.956 0 0 0-2.957 2.957c0 .246.039.481.096.71l-5.284 3.115a4.11 4.11 0 0 0-3.261-1.62 4.131 4.131 0 1 0 0 8.264 4.113 4.113 0 0 0 3.28-1.644l5.273 3.11a2.954 2.954 0 0 0-.104.738 2.956 2.956 0 0 0 2.957 2.957 2.957 2.957 0 1 0 0-5.915z" fill="#fff" id="share-alt_2_"/></symbol><symbol id="equatio-svg-input-button-submit" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><path d="M16.5 32.2l19-8.2-19-8.2v6.3L30.1 24l-13.6 1.8v6.4z" fill="#fff"/></symbol><symbol id="equatio-svg-input-button-undo" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><path d="M24 17.385v-3.5l-5 5 5 5v-4.5a6 6 0 1 1-6 6h-2a8 8 0 1 0 8-8z" fill="#676b71"/></symbol><symbol id="equatio-svg-input-handwriting-placeholder" viewBox="0 0 1169.4 142.4"><path d="M23 29.3s82-24 99 26c0 0 17 50-112 77L48.2 10" class="lrszlYjZ_0" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M150.6 79.2s3 24.2-8 53.2c0 0 8-47 59-51" class="lrszlYjZ_1" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M252.6 90.4s1-48-51 33c0 0 4 17 25.5 0s32.5 0 32.5 0 17 13.1 28 7.6" class="lrszlYjZ_2" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M327 78.1s-56 99.8 30 16.4c0 0 18.1 97.3 54-20.5" class="lrszlYjZ_3" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M555.1 128.2s56-99.8-30-16.4c0 0-18.1-97.3-54 20.5" class="lrszlYjZ_4" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M640 90.4s1-48-51 33c0 0 4 17 25.5 0s32.5 0 32.5 0 17 13.1 28 7.6" class="lrszlYjZ_5" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M722 39.5s-56 117.4 14 88.2" class="lrszlYjZ_6" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M746 73.7l-71-12" class="lrszlYjZ_7" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M779 35.3l-18 97s36-118 50 0" class="lrszlYjZ_8" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M889.1 35.3l-18 97s36-118 50 0" class="lrszlYjZ_9" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M992.2 126.9s-73 24-35-28.5 60-24.5 51-11.5-12 20.8-49 20.9" class="lrszlYjZ_10" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M1033.8 79.2s3 24.2-8 53.2c0 0 8-47 59-51" class="lrszlYjZ_11" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M1141.4 126.9s-73 24-35-28.5 60-24.5 51-11.5-12 20.8-49 20.9" class="lrszlYjZ_12" fill="none" stroke="#cecece" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><style>.lrszlYjZ_0{stroke-dasharray:389 391;stroke-dashoffset:390;animation:lrszlYjZ_draw 303ms ease 0ms forwards}.lrszlYjZ_1{stroke-dasharray:139 141;stroke-dashoffset:140;animation:lrszlYjZ_draw 108ms ease 303ms forwards}.lrszlYjZ_2{stroke-dasharray:182 184;stroke-dashoffset:183;animation:lrszlYjZ_draw 142ms ease 412ms forwards}.lrszlYjZ_3,.lrszlYjZ_4{stroke-dasharray:227 229;stroke-dashoffset:228;animation:lrszlYjZ_draw 177ms ease 555ms forwards}.lrszlYjZ_4{animation:lrszlYjZ_draw 177ms ease 732ms forwards}.lrszlYjZ_5{stroke-dasharray:182 184;stroke-dashoffset:183;animation:lrszlYjZ_draw 142ms ease 910ms forwards}.lrszlYjZ_6{stroke-dasharray:126 128;stroke-dashoffset:127;animation:lrszlYjZ_draw 98ms ease 1052ms forwards}.lrszlYjZ_7{stroke-dasharray:73 75;stroke-dashoffset:74;animation:lrszlYjZ_draw 57ms ease 1151ms forwards}.lrszlYjZ_8,.lrszlYjZ_9{stroke-dasharray:221 223;stroke-dashoffset:222;animation:lrszlYjZ_draw 172ms ease 1209ms forwards}.lrszlYjZ_9{animation:lrszlYjZ_draw 172ms ease 1381ms forwards}.lrszlYjZ_10{stroke-dasharray:215 217;stroke-dashoffset:216;animation:lrszlYjZ_draw 168ms ease 1554ms forwards}.lrszlYjZ_11{stroke-dasharray:139 141;stroke-dashoffset:140;animation:lrszlYjZ_draw 108ms ease 1722ms forwards}.lrszlYjZ_12{stroke-dasharray:215 217;stroke-dashoffset:216;animation:lrszlYjZ_draw 168ms ease 1831ms forwards}@keyframes lrszlYjZ_draw{to{stroke-dashoffset:0}}@keyframes lrszlYjZ_fade{0%,93.54838709677419%{stroke-opacity:1}to{stroke-opacity:0}}</style></symbol><symbol id="equatio-svg-logo-blue" viewBox="0 0 1628.5 373.4"><path d="M599.3 185.4c0-64.3 29.8-94.5 80.4-94.5 44.7 0 76.8 25.5 76.8 77.2v172.5c0 7.1-5.5 12.5-12.5 12.5-7.1 0-12.5-5.5-12.5-12.5V254c-9 12.5-28.2 25.5-53.3 25.5-50.7 0-78.9-29.8-78.9-94.1zm132.1-17.3c0-37.2-21.6-54.5-51.7-54.5-36.1 0-55.3 22.7-55.3 71.7 0 48.2 19.6 71.3 55.3 71.3 36.8 0 51.7-34.5 51.7-34.5v-54zm92.9-62.3v102.3c0 25.5 8.2 47.4 47.8 47.4 39.6 0 47.8-22 47.8-47.4V105.8c0-7.1 5.9-12.5 12.9-12.5 6.7 0 12.2 5.5 12.2 12.5v102.3c0 37.2-12.2 71.3-72.9 71.3-60.4 0-72.9-34.1-72.9-71.3V105.8c0-7.1 5.5-12.5 12.5-12.5 6.7-.1 12.6 5.4 12.6 12.5zm187.8 28.6c-3.9 4.3-6.7 5.5-10.2 5.5-6.3 0-11.4-5.1-11.4-11.4 0-2.7.8-4.7 2-6.7 11-17.2 32.1-31 65.1-31 45.5 0 70.6 26.7 70.6 66.6v107.8c0 6.7-5.5 12.2-12.2 12.2-6.7 0-12.2-5.5-12.2-12.2v-14.1c-9.8 18.4-32.5 28.2-56.1 28.2-41.6 0-67.8-20-67.8-56.1 0-34.5 26.3-55.3 68.6-55.3h55.3v-10.6c0-26.7-17.6-43.1-46.3-43.1-20.7.2-33.3 6.5-45.4 20.2zm91.7 72.1V190h-55.3c-25.5 0-43.1 10.6-43.1 33.3 0 20.4 14.1 33.3 44.7 33.3 27.5.1 53.7-16.7 53.7-50.1zM1185 55.2c0-6.7 5.9-12.5 12.5-12.5 7.1 0 12.5 5.9 12.5 12.5v35.7h25.5c6.7 0 11.8 5.1 11.8 11.8 0 6.7-5.1 11.8-11.8 11.8H1210v113.7c0 16.9 9.4 25.9 22.7 25.9 6.7 0 12.2 5.1 12.2 11.8 0 6.7-5.5 11.8-12.2 11.8-31 0-47.8-20.8-47.8-49.4V114.4h-15.3c-6.7 0-11.8-5.1-11.8-11.8 0-6.7 5.1-11.8 11.8-11.8h15.3V55.2zM1309.3 265c0 7.1-5.5 12.5-12.5 12.5s-12.5-5.5-12.5-12.5V55.6c0-7.1 5.5-12.5 12.5-12.5s12.5 5.5 12.5 12.5V265zm244.4-103.3c0 80.1-39.1 117.8-102.6 117.8-63 0-102.6-37.6-102.6-117.8S1388 44.4 1451.1 44.4c63.5 0 102.6 37.1 102.6 117.3zm-25.9 0c0-66.7-28.1-96.3-76.8-96.3-48.7 0-76.8 29.6-76.8 96.3 0 67.8 28.1 96.9 76.8 96.9 48.8-.1 76.8-29.2 76.8-96.9zm-1010 35.6c-3.4 0-6.8-1.4-9.3-4.2l-73.2-82.4c-3.3-3.7-4.1-8.9-2-13.4s6.4-7.3 11.3-7.3H567c6.9 0 12.4 5.6 12.4 12.4s-5.6 12.4-12.4 12.4h-94.7l54.8 61.7c4.6 5.1 4.1 13-1 17.6-2.4 2.2-5.4 3.2-8.3 3.2z" fill="#00b7ff"/><path d="M566.9 279.7H444.5c-4.9 0-9.3-2.9-11.3-7.3s-1.2-9.7 2-13.4l73.2-82.4c4.6-5.1 12.4-5.6 17.6-1 5.1 4.6 5.6 12.4 1 17.6l-54.8 61.7h94.7c6.9 0 12.4 5.6 12.4 12.4s-5.5 12.4-12.4 12.4zm-348 93.7h-64.3c-3.2 0-6.3-1.3-8.5-3.5L3.5 227.4c-2.3-2.3-3.5-5.3-3.5-8.5v-64.3c0-3.2 1.3-6.3 3.5-8.5L146 3.5c2.3-2.3 5.3-3.5 8.5-3.5h64.3c3.2 0 6.3 1.3 8.5 3.5L369.9 146c2.3 2.3 3.5 5.3 3.5 8.5v64.3c0 3.2-1.3 6.3-3.5 8.5L227.4 369.9c-2.3 2.3-5.3 3.5-8.5 3.5zm-59.3-24.1h54.3l135.4-135.4v-54.3L213.9 24.1h-54.3L24.1 159.6v54.3l135.5 135.4zm201.8-130.4z" fill="#00b7ff"/><path d="M190.5 283.4c-1.2 0-2.4-.4-3.2-1.3L96.1 191c-1.8-1.8-1.8-4.7 0-6.5 1.8-1.8 4.7-1.8 6.5 0l91.1 91.1c1.8 1.8 1.8 4.7 0 6.5-.9.8-2.1 1.3-3.2 1.3z" fill="#00b7ff"/><path d="M163.3 314.7c-2.5 0-4.9-1-6.6-2.7L17 172.3c-3.7-3.7-3.7-9.6 0-13.3 3.7-3.7 9.6-3.7 13.3 0l133 133 17-17c3.7-3.7 9.6-3.7 13.3 0 3.7 3.7 3.7 9.6 0 13.3L170 311.9c-1.9 1.8-4.3 2.8-6.7 2.8z" fill="#00b7ff"/><path d="M184.9 280.5c-1.2 0-2.4-.4-3.2-1.3-1.8-1.8-1.8-4.7 0-6.5l91.1-91.1c1.8-1.8 4.7-1.8 6.5 0 1.8 1.8 1.8 4.7 0 6.5l-91.1 91.1c-.9.9-2.1 1.3-3.3 1.3z" fill="#00b7ff"/><path d="M162.9 361.1c-2.4 0-4.8-.9-6.6-2.7-3.7-3.7-3.7-9.6 0-13.3l133-133-17-17c-3.7-3.7-3.7-9.6 0-13.3 3.7-3.7 9.6-3.7 13.3 0l23.6 23.6c3.7 3.7 3.7 9.6 0 13.3L169.5 358.3c-1.8 1.9-4.2 2.8-6.6 2.8z" fill="#00b7ff"/><path d="M274.1 191.8c-1.2 0-2.4-.4-3.2-1.3l-91.1-91.1c-1.8-1.8-1.8-4.7 0-6.5s4.7-1.8 6.5 0l91.1 91.1c1.8 1.8 1.8 4.7 0 6.5-.9.8-2.1 1.3-3.3 1.3z" fill="#00b7ff"/><path d="M349.9 218.6c-2.4 0-4.8-.9-6.6-2.7l-133-133-17 17c-3.7 3.7-9.6 3.7-13.3 0-3.7-3.7-3.7-9.6 0-13.3L203.6 63c3.7-3.7 9.6-3.7 13.3 0l139.7 139.7c3.7 3.7 3.7 9.6 0 13.3-1.9 1.7-4.3 2.6-6.7 2.6z" fill="#00b7ff"/><path d="M95.6 195c-1.2 0-2.4-.4-3.2-1.3-1.8-1.8-1.8-4.7 0-6.5l91.1-91.1c1.8-1.8 4.7-1.8 6.5 0 1.8 1.8 1.8 4.7 0 6.5l-91.1 91.1c-1 .8-2.1 1.3-3.3 1.3z" fill="#00b7ff"/><path d="M92.7 196.2c-2.4 0-4.8-.9-6.6-2.7l-23.6-23.6c-3.7-3.7-3.7-9.6 0-13.3L202.1 16.9c3.7-3.7 9.6-3.7 13.3 0 3.7 3.7 3.7 9.6 0 13.3l-133 133 17 17c3.7 3.7 3.7 9.6 0 13.3-1.9 1.8-4.3 2.7-6.7 2.7zM1602.9 35.7c15.1 0 25.6 10.8 25.6 25.8s-10.7 26-25.7 26c-15.2 0-25.6-10.8-25.6-25.9 0-14.9 10.6-25.9 25.7-25.9zm0 47.2c12.3 0 20.7-8.9 20.7-21.3s-8.7-21.4-20.8-21.4c-12.4 0-20.7 8.9-20.7 21.3 0 12.3 8.6 21.4 20.8 21.4zm-11-30.9c0-2.6 1.4-4 3.8-4h8.2c7.3 0 11.2 2.8 11.2 8.7 0 4.1-2.2 6.9-6.3 7.9l6.2 8.1c.3.5-1.8 2.6-4.2 2.6-1.3 0-3-.6-4.2-2.7l-4.7-6.7h-2.8v5.9c0 2.1-1.1 3.3-3.2 3.3h-1c-2 0-3.1-1.5-3.1-4.1V52zm11.6 8.6c2.8 0 4.4-1.3 4.4-3.5 0-2.4-1.5-3.5-4.5-3.5h-4.4v7h4.5z" fill="#00b7ff"/></symbol><symbol id="equatio-svg-logo-icon" viewBox="0 0 37.4 37.4"><g fill="#00b7ff"><path transform="rotate(-45.001 18.711 18.71)" d="M13.1 13.1h11.2v11.2H13.1z"/><path d="M18.7 27.9c-.3 0-.7-.1-.9-.4l-7.9-7.9c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9l7.9-7.9c.5-.5 1.3-.5 1.8 0l7.9 7.9c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-7.9 7.9c-.2.3-.6.4-.9.4zm-6.1-9.2l6.1 6.1 6.1-6.1-6.1-6.1-6.1 6.1z"/><path d="M21.1 8.5l13.3 13.3L21 35.1h-3.1l13.3-13.3c.2-.2.3-.5.3-.7 0-.3-.1-.5-.3-.7L28.8 18c-.4-.4-1.1-.4-1.5 0l-7.9-7.9 1.7-1.6z"/><path d="M21 36.4h-3.1c-.5 0-1-.3-1.2-.8-.2-.5-.1-1 .3-1.4l13.1-13.1-2-2c-.2.1-.5.2-.7.2-.3 0-.7-.1-.9-.4l-8-7.9c-.5-.5-.5-1.3 0-1.8l1.6-1.6c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l13.3 13.3c.5.5.5 1.3 0 1.8L21.9 36c-.2.2-.5.4-.9.4z"/><path d="M21.8 3.1l13.3 13.3v3.1L21.8 6.2c-.4-.4-1.1-.4-1.5 0L18 8.6c-.2.2-.3.5-.3.7 0 .3.1.5.3.7l-7.9 8-1.6-1.6L21.8 3.1z"/><path d="M35.1 20.8c-.3 0-.7-.1-.9-.4L21.1 7.3l-2 2c.3.5.3 1.2-.2 1.6l-7.9 8c-.2.2-.6.4-.9.4-.3 0-.7-.1-.9-.4l-1.6-1.6c-.2-.2-.4-.6-.4-.9s.1-.7.4-.9L20.9 2.2c.5-.5 1.3-.5 1.8 0L36 15.5c.2.2.4.6.4.9v3.1c0 .5-.3 1-.8 1.2-.2.1-.3.1-.5.1z"/><path d="M2.3 17.9l13.3 13.3c.2.2.5.3.7.3.3 0 .5-.1.7-.3l2.3-2.3c.2-.2.3-.5.3-.7 0-.3-.1-.5-.3-.7l7.9-7.9 1.6 1.6-13.1 13.1L2.3 21v-3.1z"/><path d="M15.7 35.6c-.3 0-.7-.1-.9-.4L1.4 21.9c-.2-.2-.4-.5-.4-.9v-3.1c0-.5.3-1 .8-1.2.5-.2 1-.1 1.4.3l13.1 13.1 2-2c-.3-.5-.3-1.2.2-1.6l7.9-7.9c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l1.6 1.6c.5.5.5 1.3 0 1.8L16.6 35.3c-.3.2-.6.3-.9.3zm2.8-7.7z"/><path d="M16.4 2.3h3.1L6.2 15.6c-.2.2-.3.5-.3.7 0 .3.1.5.3.7l2.3 2.3c.4.4 1.1.4 1.5 0l7.9 7.9-1.6 1.6L3.1 15.7 16.4 2.3z"/><path d="M16.4 30.2c-.3 0-.7-.1-.9-.4L2.2 16.6c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9L15.5 1.4c.2-.2.6-.4.9-.4h3.1c.5 0 1 .3 1.2.8s.1 1-.3 1.4L7.3 16.4l2 2c.1-.1.2-.1.2-.1.5-.2 1-.1 1.4.3l7.9 7.9c.5.5.5 1.3 0 1.8l-1.6 1.6c-.2.2-.5.3-.8.3z"/><path d="M21 1.3h.4c.1 0 .1.1.2.1 0 0 .1 0 .1.1.1.1.2.2.3.4.1.1.1.3.1.4 0 .3-.1.5-.3.7l-.8-.7h-1.5l.7-.7c.3-.2.6-.3.8-.3z"/><path d="M21.8 4.4c-.3 0-.7-.1-.9-.4l-.4-.4h-1c-.5 0-1-.3-1.2-.8-.2-.5-.1-1 .3-1.4l.7-.7C19.8.2 20.4 0 21 0h.5c.1 0 .1 0 .2.1 0 0 .1 0 .2.1.2.1.3.1.4.2l.1.1c.1 0 .1.1.2.1.2.2.4.5.5.8.1.3.2.6.2.9 0 .6-.3 1.2-.7 1.7-.2.2-.5.4-.8.4zm-.5-1.6zm-.1-.2zm-.1 0zm0-1.3H21h.1z"/><path d="M21.1 2.6h-.2c-.7 0-1.3-.6-1.3-1.3.1-.7.7-1.3 1.4-1.3h.3c.6.1 1.1.6 1.1 1.3v.2c-.1.6-.6 1.1-1.3 1.1zm.1-1.3z"/><path d="M21.2 2.6H21c-.6-.1-1.2-.6-1.2-1.3 0-.7.6-1.3 1.3-1.3h.3c.7.1 1.2.7 1.1 1.4-.1.7-.6 1.2-1.3 1.2zm-.1 0zm.3-1.3h-.1.1z"/><path d="M21.4 2.6c-.1 0-.3 0-.4-.1-.6-.1-1-.7-1-1.3V.9c.1-.7.8-1.1 1.5-1 .1 0 .2 0 .3.1.5.2.9.7.9 1.2 0 .1 0 .3-.1.4-.2.7-.7 1-1.2 1zm-.4 0zm-.1 0zm.5-1.2z"/><path d="M21.4 2.7c-.2 0-.4 0-.5-.1-.5-.2-.8-.7-.8-1.2 0-.1 0-.3.1-.4.2-.7 1-1 1.7-.8 0 0 .1 0 .2.1.5.2.7.7.7 1.2 0 .2 0 .4-.1.6-.3.3-.8.6-1.3.6zm.3-1.1c0-.1 0-.1 0 0 0-.1 0-.1 0 0z"/><path d="M21.7 2.8c-.3 0-.6-.1-.8-.3-.6-.4-.7-1.2-.3-1.7.4-.6 1.1-.8 1.7-.4l.3.3c.3.2.4.5.4.8 0 .3-.1.7-.4.9-.2.3-.6.4-.9.4zm-.9-.3z"/><path d="M22.1 2.3c0-.1 0-.3-.1-.4-.1-.1-.1-.3-.3-.4l14.1 14.1c.2.2.3.5.3.7V21c0-.3-.1-.5-.3-.7l-.7-.7v-3.1L21.8 3.1c.2-.2.3-.5.3-.8z"/><path d="M36.1 22.3c-.7 0-1.2-.5-1.3-1.2l-.7-.7c-.2-.2-.4-.6-.4-.9v-2.6L20.9 4c-.2-.2-.4-.6-.4-.9 0-.3.1-.5.2-.7-.4-.5-.4-1.1 0-1.6s1.2-.6 1.8-.2c.1.1.1.1.2.1l14.1 14.1c.4.4.7 1 .7 1.7V21c-.1.7-.7 1.3-1.4 1.3zM34.8 21zM20.9 2.5z"/><path d="M19.5 2.3H21l-14 14 2.3 2.3.7.7c-.4.4-1.1.4-1.5 0L6.2 17c-.2-.2-.3-.5-.3-.7 0-.3.1-.5.3-.7L19.5 2.3z"/><path d="M9.3 21c-.6 0-1.2-.2-1.6-.7L5.3 18c-.4-.4-.7-1-.7-1.7 0-.6.2-1.2.7-1.7L18.6 1.4c.2-.2.6-.4.9-.4H21c.5 0 1 .3 1.2.8.2.5.1 1-.3 1.4L8.8 16.4l1.4 1.4s.1 0 .1.1l.7.7c.2.2.4.6.4.9 0 .3-.1.7-.4.9-.5.4-1.1.6-1.7.6z"/><path d="M21 2.3l.8.8L8.5 16.4l1.6 1.6-.8.7L7 16.4z"/><path d="M9.3 20c-.3 0-.7-.1-.9-.4l-2.3-2.3c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9l14-14c.5-.5 1.3-.5 1.8 0l.7.7c.2.2.4.6.4.9 0 .3-.1.7-.4.9L10.3 16.4l.7.7c.5.5.5 1.3 0 1.8l-.7.7c-.3.3-.6.4-1 .4z"/><path d="M20.3 6.2c.4-.4 1.1-.4 1.5 0l13.3 13.3V21l-14-14-2.3 2.3-.8.8c-.2-.2-.3-.5-.3-.7 0-.3.1-.5.3-.7l2.3-2.5z"/><path d="M35.1 22.3c-.3 0-.7-.1-.9-.4L21.1 8.8 18.9 11c-.2.2-.6.4-.9.4-.3 0-.7-.1-.9-.4-.4-.4-.7-1-.7-1.7 0-.6.2-1.2.7-1.6l2.3-2.3c.9-.9 2.4-.9 3.3 0L36 18.6c.2.2.4.6.4.9V21c0 .5-.3 1-.8 1.2-.2.1-.3.1-.5.1z"/><path d="M21.1 7l14 14-.8.8L21.1 8.5l-1.6 1.6-.8-.8z"/><path d="M34.3 23.1c-.3 0-.7-.1-.9-.4L21.1 10.3l-.7.7c-.2.2-.6.4-.9.4-.3 0-.7-.1-.9-.4l-.7-.7c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9l2.3-2.3c.5-.5 1.3-.5 1.8 0l14 14c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-.7.7c-.3.2-.6.3-1 .4z"/><path transform="rotate(-45.001 18.712 10.074)" d="M18.2 9.5h1.1v1.1h-1.1z"/><path d="M18.7 12.1c-.3 0-.7-.1-.9-.4l-.7-.7c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9l.7-.7c.5-.5 1.3-.5 1.8 0l.7.7c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-.7.7c-.2.3-.6.4-.9.4z"/><path transform="rotate(-45.001 23.03 14.392)" d="M22.5 8.8h1V20h-1z"/><path d="M26.6 20c-.3 0-.7-.1-.9-.4l-7.9-7.9c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9l.7-.7c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l7.9 7.9c.5.5.5 1.3 0 1.8l-.7.7c-.2.3-.6.4-.9.4z"/><path transform="rotate(-45.001 14.393 14.393)" d="M8.8 13.9H20V15H8.8z"/><path d="M10.8 20c-.3 0-.7-.1-.9-.4l-.7-.7c-.5-.5-.5-1.3 0-1.8l7.9-7.9c.5-.5 1.3-.5 1.8 0l.7.7c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-7.9 7.9c-.2.3-.5.4-.9.4zm-9.2-4.3L15.7 1.6c.2-.2.5-.3.7-.3H21c-.3 0-.5.1-.7.3l-.7.7h-3.1L3.1 15.7c-.3-.3-.8-.4-1.1-.2-.2 0-.3.1-.4.2z"/><path d="M1.6 17c-.3 0-.6-.1-.8-.3-.5-.5-.6-1.2-.2-1.8l.1-.1L14.7.7c.4-.4 1-.7 1.7-.7H21c.7 0 1.3.6 1.3 1.3 0 .7-.5 1.2-1.2 1.3l-.7.7c-.2.2-.6.4-.9.4h-2.6L4 16.6c-.4.4-1.1.5-1.6.1-.3.2-.6.3-.8.3z"/><path d="M3.1 15.7l13.3 13.2 1.6-1.6.7.8-2.3 2.3-14.1-14z"/><path d="M16.4 31.7c-.3 0-.7-.1-.9-.4l-14-14c-.3-.2-.5-.6-.5-.9 0-.3.1-.7.4-.9l.7-.7c.5-.5 1.3-.5 1.8 0l12.4 12.4.7-.7c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l.7.7c.5.5.5 1.3 0 1.8l-2.3 2.3c-.2.3-.5.4-.8.4z"/><path d="M1.6 15.7c-.1.1-.1.1-.1.2 0-.1 0-.1.1-.2z"/><path d="M1.4 17.2c-.2 0-.4 0-.6-.1-.4-.2-.7-.7-.7-1.1 0-.2 0-.4.1-.6.1-.2.2-.3.3-.5.5-.5 1.3-.6 1.8-.1.3.3.4.6.4 1 0 .3-.1.6-.3.8-.1.4-.5.6-1 .6zm0-1.3s0 .1 0 0c0 .1 0 0 0 0z"/><path d="M1.4 17.3c-.1 0-.3 0-.4-.1-.7-.2-1-1-.8-1.6.1-.2.1-.3.2-.4.4-.6 1.3-.6 1.8-.2.3.3.5.6.5 1 0 .2 0 .4-.1.6-.3.4-.7.7-1.2.7zm1-.6zm0 0zm-1.1-.5s0 .1 0 0c0 .1 0 0 0 0z"/><path d="M1.3 17.6h-.1c-.7-.1-1.2-.7-1.2-1.3 0-.2 0-.3.1-.5.2-.7 1-1 1.6-.8.5.2.9.7.9 1.2v.2c-.1.7-.7 1.2-1.3 1.2zm1.2-1zm0 0z"/><path d="M1.3 16.3zm0 1.3c-.6 0-1.2-.4-1.3-1.1V16c.1-.7.8-1.2 1.5-1 .6.1 1 .7 1 1.3v.1c0 .6-.5 1.1-1.1 1.2h-.1zm1.3-1.1z"/><path d="M1.3 16.3v-.1c0-.1 0-.2.1-.2 0-.1.1-.1.1-.2.1-.1.2-.2.4-.3.4-.2.8-.1 1.1.2l-.7.7v1.5l-.7-.7c-.2-.3-.3-.5-.3-.9 0 .1 0 0 0 0z"/><path d="M2.3 19.2c-.3 0-.7-.1-.9-.4l-.7-.7C.2 17.6 0 17 0 16.4v-.5c0-.2.1-.3.1-.5 0 0 0-.1.1-.1v-.1c.1-.2.2-.3.3-.4.2-.2.5-.5.8-.6.9-.4 1.9-.2 2.6.5.2.2.4.6.4.9 0 .3-.1.7-.4.9l-.4.4v.9c0 .5-.3 1-.8 1.2 0 .1-.2.2-.4.2z"/><path d="M2.3 16.4l14 14 2.3-2.3.7-.7c.2.2.3.5.3.7 0 .3-.1.5-.3.7L17 31.1c-.2.2-.5.3-.7.3-.3 0-.5-.1-.7-.3L2.3 17.9v-1.5z"/><path d="M16.4 32.8c-.6 0-1.2-.2-1.7-.7L1.4 18.8c-.2-.2-.4-.6-.4-.9v-1.5c0-.5.3-1 .8-1.2.5-.2 1-.1 1.4.3l13.1 13.1 2.2-2.2c.2-.2.6-.4.9-.4.3 0 .7.1.9.4.4.4.7 1 .7 1.7 0 .6-.2 1.2-.7 1.7L18 32.1c-.4.4-1 .7-1.6.7zm2.1-4.9z"/><path d="M27.3 18c.4-.4 1.1-.4 1.5 0l2.3 2.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7L17.9 35.1h-1.5l14-14-2.3-2.3-.8-.8z"/><path d="M17.9 36.4h-1.5c-.5 0-1-.3-1.2-.8-.2-.5-.1-1 .3-1.4l13.1-13.1-2.2-2.2c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9.4-.4 1-.7 1.7-.7s1.2.2 1.7.7l2.3 2.3c.4.4.7 1 .7 1.7 0 .6-.2 1.2-.7 1.7L18.8 36c-.2.2-.6.4-.9.4z"/><path transform="rotate(-45.001 10.074 18.71)" d="M9.6 18.2h1v1h-1z"/><path d="M10.1 20.7c-.3 0-.7-.1-.9-.4l-.7-.7c-.5-.5-.5-1.3 0-1.8l.7-.7c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l.7.7c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-.7.8c-.3.2-.6.3-.9.3z"/><path transform="rotate(-45.001 27.348 18.71)" d="M26.8 18.2h1v1.1h-1z"/><path d="M27.3 20.7c-.3 0-.7-.1-.9-.4l-.7-.7c-.5-.5-.5-1.3 0-1.8l.7-.7c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l.7.7c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-.7.7c-.2.3-.5.4-.9.4z"/><path d="M26.6 18.7l.7.8-7.8 7.8-.8-.7z"/><path d="M19.5 28.6c-.2 0-.3 0-.5-.1s-.3-.2-.5-.3l-.7-.7c-.5-.5-.5-1.3 0-1.8l7.9-7.9c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l.7.7c.5.5.5 1.3 0 1.8l-7.9 7.9c-.2.3-.5.4-.8.4z"/><path transform="rotate(-44.887 14.392 23.028)" d="M13.9 17.4h1v11.2h-1z"/><path d="M18 28.6c-.3 0-.7-.1-.9-.4l-7.9-7.9c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9l.7-.7c.5-.5 1.3-.5 1.8 0l7.9 7.9c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-.7.7c-.3.3-.6.4-.9.4zm10.1-9.9l2.3 2.4-14 14-.7-.8 13.2-13.2-1.6-1.6z"/><path d="M16.4 36.4c-.3 0-.7-.1-.9-.4l-.7-.7c-.5-.5-.5-1.3 0-1.8l12.4-12.4-.7-.7c-.5-.5-.5-1.3 0-1.8l.7-.7c.5-.5 1.3-.5 1.8 0l2.3 2.3c.5.5.5 1.3 0 1.8l-14 14c-.2.2-.6.4-.9.4zm18.7-16.9l.7.7c.2.2.3.5.3.7v.3c0 .1 0 .1-.1.1v.1c0 .1-.1.1-.1.2-.1.1-.2.2-.3.2-.4.2-.8.1-1.1-.2l.7-.7v-1.4z"/><path d="M35.1 23.4c-.6 0-1.2-.2-1.7-.7-.5-.5-.5-1.3 0-1.8l.4-.4v-.9c0-.5.3-1 .8-1.2.5-.2 1-.1 1.4.3l.7.7c.4.4.7 1 .7 1.7v.2c0 .1 0 .2-.1.4v.1c0 .1-.1.2-.1.3 0 .1-.1.1-.1.2-.1.1-.2.3-.3.4l-.1.1c-.2.2-.5.4-.7.5-.3 0-.6.1-.9.1zm-.4-2.2zm0 0zm0 0zm.4-.2z"/><path d="M36.1 21.1V21v.1zm0 1.3H36c-.7-.1-1.2-.6-1.2-1.3V21c0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3v.2c0 .7-.6 1.2-1.3 1.2zM34.8 21z"/><path d="M36.1 21.3zm0 1.3c-.2 0-.3 0-.5-.1-.6-.2-1-.9-.8-1.6v-.2c.2-.6.9-1 1.6-.8.7.2 1.1.9.9 1.6 0 .1 0 .2-.1.3-.2.6-.6.8-1.1.8zm1.2-1z"/><path d="M36 21.5zm0 1.3c-.3 0-.5-.1-.7-.2-.4-.3-.5-.6-.5-1.1 0-.2.1-.4.2-.6.3-.6 1-.9 1.6-.6.5.2.8.7.8 1.2 0 .2 0 .3-.1.5 0 .1-.1.3-.2.4-.3.2-.7.4-1.1.4zM34.8 21zm.1-.2z"/><path d="M35.9 21.7c0-.1.1-.1.1-.2 0 .1-.1.2-.1.2z"/><path d="M35.9 23c-.3 0-.6-.1-.9-.3-.3-.3-.4-.6-.4-1 0-.3.1-.6.3-.8.3-.6 1.1-.8 1.7-.5.4.2.7.7.7 1.1 0 .2 0 .4-.1.6-.1.2-.2.3-.3.4-.3.3-.7.5-1 .5z"/><path d="M35.8 21.7c.1 0 .1 0 0 0 .1 0 .1 0 0 0zm0 1.3c-.3 0-.7-.1-.9-.4-.3-.3-.4-.6-.4-.9 0-.3.1-.6.4-.9l.1-.1c.5-.5 1.3-.5 1.8-.1.5.5.6 1.2.1 1.8 0 .1-.1.1-.1.1-.3.4-.6.5-1 .5zm-.3-1.6l-.5-.5.5.5zm-.6-.6zm0 0z"/><path d="M35.8 21.8l-14 14c-.2.2-.5.3-.7.3h-4.6c.3 0 .5-.1.7-.3l.7-.7H21l13.3-13.3c.3.3.8.4 1.1.2.2-.1.3-.1.4-.2z"/><path d="M21 37.4h-4.6c-.7 0-1.3-.6-1.3-1.3 0-.7.5-1.2 1.2-1.3l.7-.7c.2-.2.6-.4.9-.4h2.6l12.9-12.9c.2-.2.6-.4.9-.4.3 0 .5.1.7.2.5-.4 1.2-.3 1.6.1.5.5.5 1.3 0 1.8l-14 14c-.4.7-1 .9-1.6.9zm-2.3-10.8l.8.7-.8.8-.7-.8z"/><path d="M18.7 29.4c-.3 0-.7-.1-.9-.4l-.7-.7c-.2-.2-.4-.6-.4-.9 0-.3.1-.7.4-.9l.7-.7c.2-.2.6-.4.9-.4.3 0 .7.1.9.4l.7.7c.2.2.4.6.4.9 0 .3-.1.7-.4.9l-.7.7c-.2.2-.5.4-.9.4zm-3 4.9l.7.7h1.5l-.7.7c-.2.2-.5.3-.7.3h-.4c-.1 0-.1-.1-.2-.1l-.1-.1c-.1-.1-.2-.2-.3-.4-.1-.1-.1-.3-.1-.4-.1-.2.1-.5.3-.7z"/><path d="M16.4 37.4h-.6c-.1 0-.2 0-.3-.1h-.1c-.1-.1-.2-.1-.4-.2-.1 0-.1-.1-.2-.2l-.1-.1c-.2-.2-.4-.5-.6-.8-.1-.3-.2-.6-.2-.9 0-.6.2-1.2.7-1.7.5-.5 1.3-.5 1.8 0l.4.4h1c.5 0 1 .3 1.2.8.2.5.1 1-.3 1.4l-.7.7c-.4.5-1 .7-1.6.7zm-.1-2.6z"/><path d="M15.7 35.8l-14.1-14c-.2-.2-.3-.5-.3-.7v-4.6c0 .3.1.5.3.7l.7.7V21l13.3 13.3c-.2.2-.3.5-.3.7 0 .1 0 .3.1.4.1.2.2.4.3.4z"/><path d="M15.7 37.1c-.3 0-.5-.1-.8-.3-.1-.1-.1-.1-.2-.1l-14-14C.3 22.2 0 21.6 0 21v-4.6c0-.7.6-1.3 1.3-1.3.7 0 1.2.5 1.3 1.2l.6.7c.2.2.4.6.4.9v2.6l12.9 12.9c.2.2.4.6.4.9 0 .3-.1.5-.2.7.4.5.4 1.1 0 1.6-.3.4-.6.5-1 .5zm.2-1.5l.7-.7-.7.7z"/><path d="M15.7 35.9l.1.1c0-.1-.1-.1-.1-.1z"/><path d="M15.8 37.2c-.2 0-.4-.1-.6-.2-.1-.1-.2-.2-.3-.2-.5-.5-.6-1.3-.2-1.8.4-.5 1.1-.6 1.6-.3.1 0 .1.1.2.1.6.4.7 1.2.4 1.7-.2.5-.7.7-1.1.7z"/><path d="M16 36.1c-.1 0-.1-.1-.2-.1.1 0 .1 0 .2.1z"/><path d="M16 37.3c-.1 0-.3 0-.4-.1-.2-.1-.3-.1-.5-.3-.6-.4-.7-1.2-.3-1.8.4-.6 1.2-.7 1.8-.4.6.3.9 1 .7 1.7-.3.6-.8.9-1.3.9zm.4-2.5l-.2.4.3-.4c0 .1 0 .1-.1 0z"/><path d="M16 36.1zm.2 1.3H16c-.1 0-.2-.1-.4-.1-.5-.2-.8-.7-.8-1.2 0-.2 0-.3.1-.5.3-.6 1-1 1.6-.7.7.2 1.1.8.9 1.5-.1.6-.6 1-1.2 1zm.3-2.5z"/><path d="M16.2 36.1zm0 1.3h-.4c-.6-.1-1-.7-1-1.2v-.3c.2-.7.8-1.1 1.5-.9.6.1 1.1.6 1.1 1.3v.2c0 .4-.5.9-1.2.9zm.3-2.5zm0 0zm0 0z"/><path d="M16.3 36.1zm.1 1.3h-.2c-.7-.1-1.2-.6-1.2-1.3V36c.1-.7.7-1.2 1.4-1.2s1.3.6 1.3 1.3c0 .7-.6 1.3-1.3 1.3zm0-2.6z"/></g><path transform="rotate(-45.001 18.711 18.71)" fill="#f2f2f2" d="M13.1 13.1h11.2v11.2H13.1z"/><path d="M21.1 8.5l13.3 13.3L21 35.1h-3.1l13.3-13.3c.2-.2.3-.5.3-.7 0-.3-.1-.5-.3-.7L28.8 18c-.4-.4-1.1-.4-1.5 0l-7.9-7.9 1.7-1.6z" fill="#f2f2f2"/><path d="M21.8 3.1l13.3 13.3v3.1L21.8 6.2c-.4-.4-1.1-.4-1.5 0L18 8.6c-.2.2-.3.5-.3.7 0 .3.1.5.3.7l-7.9 8-1.6-1.6L21.8 3.1zM2.3 17.9l13.3 13.3c.2.2.5.3.7.3.3 0 .5-.1.7-.3l2.3-2.3c.2-.2.3-.5.3-.7 0-.3-.1-.5-.3-.7l7.9-7.9 1.6 1.6-13.1 13.1L2.3 21v-3.1z" fill="#f2f2f2"/><path d="M16.4 2.3h3.1L6.2 15.6c-.2.2-.3.5-.3.7 0 .3.1.5.3.7l2.3 2.3c.4.4 1.1.4 1.5 0l7.9 7.9-1.6 1.6L3.1 15.7 16.4 2.3z" fill="#f2f2f2"/><path d="M21 1.3h.4c.1 0 .1.1.2.1 0 0 .1 0 .1.1.1.1.2.2.3.4.1.1.1.3.1.4 0 .3-.1.5-.3.7l-.8-.7h-1.5l.7-.7c.3-.2.6-.3.8-.3zm.1 0H21h.1zm.1 0zm.2 0h-.1.1zm0 .1zm.3.2c0-.1 0-.1 0 0 0-.1 0-.1 0 0z" fill="#00b7ff"/><path d="M22.1 2.3c0-.1 0-.3-.1-.4-.1-.1-.1-.3-.3-.4l14.1 14.1c.2.2.3.5.3.7V21c0-.3-.1-.5-.3-.7l-.7-.7v-3.1L21.8 3.1c.2-.2.3-.5.3-.8zm-2.6 0H21l-14 14 2.3 2.3.7.7c-.4.4-1.1.4-1.5 0L6.2 17c-.2-.2-.3-.5-.3-.7 0-.3.1-.5.3-.7L19.5 2.3z" fill="#00b7ff"/><path fill="#00b7ff" d="M21 2.3l.8.8L8.5 16.4l1.6 1.6-.8.7L7 16.4zm-.7 3.9c.4-.4 1.1-.4 1.5 0l13.3 13.3V21l-14-14-2.3 2.3-.8.8c-.2-.2-.3-.5-.3-.7 0-.3.1-.5.3-.7l2.3-2.5z"/><path fill="#00b7ff" d="M21.1 7l14 14-.8.8L21.1 8.5l-1.6 1.6-.8-.8z"/><path transform="rotate(-45.001 18.712 10.074)" fill="#00b7ff" d="M18.2 9.5h1.1v1.1h-1.1z"/><path transform="rotate(-45.001 23.03 14.392)" fill="#00b7ff" d="M22.5 8.8h1V20h-1z"/><path transform="rotate(-45.001 14.393 14.393)" fill="#00b7ff" d="M8.8 13.9H20V15H8.8z"/><path d="M1.6 15.7L15.7 1.6c.2-.2.5-.3.7-.3H21c-.3 0-.5.1-.7.3l-.7.7h-3.1L3.1 15.7c-.3-.3-.8-.4-1.1-.2-.2 0-.3.1-.4.2zm1.5 0l13.3 13.2 1.6-1.6.7.8-2.3 2.3-14.1-14zm-1.5 0c-.1.1-.1.1-.1.2 0-.1 0-.1.1-.2zm-.2.2s0 .1 0 0c0 .1 0 0 0 0zm-.1.3s0 .1 0 0c0 .1 0 0 0 0zm0 .1z" fill="#00b7ff"/><path d="M1.3 16.3v-.1c0-.1 0-.2.1-.2 0-.1.1-.1.1-.2.1-.1.2-.2.4-.3.4-.2.8-.1 1.1.2l-.7.7v1.5l-.7-.7c-.2-.3-.3-.5-.3-.9 0 .1 0 0 0 0z" fill="#00b7ff"/><path d="M2.3 16.4l14 14 2.3-2.3.7-.7c.2.2.3.5.3.7 0 .3-.1.5-.3.7L17 31.1c-.2.2-.5.3-.7.3-.3 0-.5-.1-.7-.3L2.3 17.9v-1.5zm25 1.6c.4-.4 1.1-.4 1.5 0l2.3 2.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7L17.9 35.1h-1.5l14-14-2.3-2.3-.8-.8z" fill="#00b7ff"/><path transform="rotate(-45.001 10.074 18.71)" fill="#00b7ff" d="M9.6 18.2h1v1h-1z"/><path transform="rotate(-45.001 27.348 18.71)" fill="#00b7ff" d="M26.8 18.2h1v1.1h-1z"/><path fill="#00b7ff" d="M26.6 18.7l.7.8-7.8 7.8-.8-.7z"/><path transform="rotate(-44.887 14.392 23.028)" fill="#00b7ff" d="M13.9 17.4h1v11.2h-1z"/><path fill="#00b7ff" d="M28.1 18.7l2.3 2.4-14 14-.7-.8 13.2-13.2-1.6-1.6zm7 .8l.7.7c.2.2.3.5.3.7v.3c0 .1 0 .1-.1.1v.1c0 .1-.1.1-.1.2-.1.1-.2.2-.3.2-.4.2-.8.1-1.1-.2l.7-.7v-1.4zm1 1.6V21v.1zm0 .2zm-.1.2zm-.1.2c0-.1.1-.1.1-.2 0 .1-.1.2-.1.2zm-.1 0c.1 0 .1 0 0 0 .1 0 .1 0 0 0z"/><path d="M35.8 21.8l-14 14c-.2.2-.5.3-.7.3h-4.6c.3 0 .5-.1.7-.3l.7-.7H21l13.3-13.3c.3.3.8.4 1.1.2.2-.1.3-.1.4-.2zm-17.1 4.8l.8.7-.8.8-.7-.8z" fill="#00b7ff"/><path d="M15.7 34.3l.7.7h1.5l-.7.7c-.2.2-.5.3-.7.3h-.4c-.1 0-.1-.1-.2-.1l-.1-.1c-.1-.1-.2-.2-.3-.4-.1-.1-.1-.3-.1-.4-.1-.2.1-.5.3-.7z" fill="#00b7ff"/><path d="M15.7 35.8l-14.1-14c-.2-.2-.3-.5-.3-.7v-4.6c0 .3.1.5.3.7l.7.7V21l13.3 13.3c-.2.2-.3.5-.3.7 0 .1 0 .3.1.4.1.2.2.4.3.4zm0 .1l.1.1c0-.1-.1-.1-.1-.1zm.3.2c-.1 0-.1-.1-.2-.1.1 0 .1 0 .2.1zm0 0zm.2 0zm.1 0z" fill="#00b7ff"/></symbol><symbol id="equatio-svg-logo-large" viewBox="0 0 1628.5 546"><path d="M599.3 185.4c0-64.3 29.8-94.5 80.4-94.5 44.7 0 76.8 25.5 76.8 77.2v172.5c0 7.1-5.5 12.5-12.5 12.5-7.1 0-12.5-5.5-12.5-12.5V254c-9 12.5-28.2 25.5-53.3 25.5-50.7 0-78.9-29.8-78.9-94.1zm132.1-17.3c0-37.2-21.6-54.5-51.7-54.5-36.1 0-55.3 22.7-55.3 71.7 0 48.2 19.6 71.3 55.3 71.3 36.8 0 51.7-34.5 51.7-34.5v-54zm92.9-62.3v102.3c0 25.5 8.2 47.4 47.8 47.4 39.6 0 47.8-22 47.8-47.4V105.8c0-7.1 5.9-12.5 12.9-12.5 6.7 0 12.2 5.5 12.2 12.5v102.3c0 37.2-12.2 71.3-72.9 71.3-60.4 0-72.9-34.1-72.9-71.3V105.8c0-7.1 5.5-12.5 12.5-12.5 6.7-.1 12.6 5.4 12.6 12.5zm187.8 28.6c-3.9 4.3-6.7 5.5-10.2 5.5-6.3 0-11.4-5.1-11.4-11.4 0-2.7.8-4.7 2-6.7 11-17.2 32.1-31 65.1-31 45.5 0 70.6 26.7 70.6 66.6v107.8c0 6.7-5.5 12.2-12.2 12.2-6.7 0-12.2-5.5-12.2-12.2v-14.1c-9.8 18.4-32.5 28.2-56.1 28.2-41.6 0-67.8-20-67.8-56.1 0-34.5 26.3-55.3 68.6-55.3h55.3v-10.6c0-26.7-17.6-43.1-46.3-43.1-20.7.2-33.3 6.5-45.4 20.2zm91.7 72.1V190h-55.3c-25.5 0-43.1 10.6-43.1 33.3 0 20.4 14.1 33.3 44.7 33.3 27.5.1 53.7-16.7 53.7-50.1zM1185 55.2c0-6.7 5.9-12.5 12.5-12.5 7.1 0 12.5 5.9 12.5 12.5v35.7h25.5c6.7 0 11.8 5.1 11.8 11.8 0 6.7-5.1 11.8-11.8 11.8H1210v113.7c0 16.9 9.4 25.9 22.7 25.9 6.7 0 12.2 5.1 12.2 11.8 0 6.7-5.5 11.8-12.2 11.8-31 0-47.8-20.8-47.8-49.4V114.4h-15.3c-6.7 0-11.8-5.1-11.8-11.8 0-6.7 5.1-11.8 11.8-11.8h15.3V55.2zM1309.3 265c0 7.1-5.5 12.5-12.5 12.5s-12.5-5.5-12.5-12.5V55.6c0-7.1 5.5-12.5 12.5-12.5s12.5 5.5 12.5 12.5V265zm244.4-103.3c0 80.1-39.1 117.8-102.6 117.8-63 0-102.6-37.6-102.6-117.8S1388 44.4 1451.1 44.4c63.5 0 102.6 37.1 102.6 117.3zm-25.9 0c0-66.7-28.1-96.3-76.8-96.3-48.7 0-76.8 29.6-76.8 96.3 0 67.8 28.1 96.9 76.8 96.9 48.8-.1 76.8-29.2 76.8-96.9zm-1010 35.6c-3.4 0-6.8-1.4-9.3-4.2l-73.2-82.4c-3.3-3.7-4.1-8.9-2-13.4s6.4-7.3 11.3-7.3H567c6.9 0 12.4 5.6 12.4 12.4s-5.6 12.4-12.4 12.4h-94.7l54.8 61.7c4.6 5.1 4.1 13-1 17.6-2.4 2.2-5.4 3.2-8.3 3.2z" fill="#00b7ff"/><path d="M566.9 279.7H444.5c-4.9 0-9.3-2.9-11.3-7.3s-1.2-9.7 2-13.4l73.2-82.4c4.6-5.1 12.4-5.6 17.6-1 5.1 4.6 5.6 12.4 1 17.6l-54.8 61.7h94.7c6.9 0 12.4 5.6 12.4 12.4s-5.5 12.4-12.4 12.4zM431.6 434.4c0-.3 1.6-1.1 3.6-1.1 3.6 0 6.9 1.8 6.9 10.3v2c5.4-7.8 14-13.5 24.5-13.5 12.2 0 21.5 5.7 25.8 16.6 5.2-9.3 14.7-16.6 27.6-16.6 19.6 0 30 11.3 30 32.8v42.4c0 3.9-2 5.1-4.7 5.1H544c-2.8 0-4.7-1.1-4.7-5.1v-41.8c0-15.5-6.7-23.5-20.1-23.5-9.6 0-18.6 6.4-23.2 15.7v49.6c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-40.9c0-16.3-6.7-24.3-20.1-24.3-9.6 0-18.6 6.4-23.2 15.7v49.6c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-73zm184.5 30.8h1.6v-2.8c0-13.4-7.8-20.7-21.9-20.7-12.6 0-20.6 6.4-24.8 14.4 0 .2-6-.5-6-6.2 0-5.5 11.1-17.9 31.7-17.9 19.7 0 31.5 11.4 31.5 30.2V511c0 .3-1.6 1.1-3.6 1.1-3.6 0-6.7-1.8-6.7-10.3V499c-6.2 9-16.6 14.4-29 14.4-17 0-26.8-8.6-26.8-21.7 0-18.2 18.1-25.7 54-26.5zm-26.3 39.3c16 0 27.9-10 27.9-23.8v-7.2l-4.6.2c-26.6 1-40.3 5.7-40.3 17.9 0 7.9 6.4 12.9 17 12.9zm55.4-102.9c0-.3 1.6-1.1 3.6-1.1 3.6 0 7 1.8 7 10.3v58.7l31.3-32c2.9-3.1 5.1-4.2 7.2-4.2 4.2 0 5.7 4.7 5.2 5.2l-32.1 32 37.2 36.2c.5.5-1.3 5.5-5.7 5.5-2 0-3.8-1-6.9-4.1L655.8 472v35.1c0 3.9-2 5.1-4.7 5.1H650c-2.8 0-4.7-1.1-4.7-5.1V401.6zm100.5 30.3c21.9 0 36.2 15.5 36.2 39.2v1c0 2.9-1.1 3.6-4.4 3.6h-60.4c.8 16.6 12.9 28.4 29.5 28.4 15.2 0 22-6.5 26.6-13.9.3-.5 6.2 1 6.2 6 0 5.4-11.7 17.3-32.8 17.3-23.7 0-40.1-16.6-40.1-40.5.1-23.6 16.7-41.1 39.2-41.1zm25 34.6c-1-15.3-10.4-25.3-25-25.3-14.7 0-25.9 10.4-28.2 25.3h53.2zm47.3-32.1c0-.3 1.6-1.1 3.6-1.1 3.6 0 6.9 1.8 6.9 10.3v2c5.4-7.8 14-13.5 24.5-13.5 12.2 0 21.5 5.7 25.8 16.6 5.2-9.3 14.7-16.6 27.6-16.6 19.6 0 30 11.3 30 32.8v42.4c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-41.8c0-15.5-6.7-23.5-20.1-23.5-9.6 0-18.6 6.4-23.2 15.7v49.6c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-40.9c0-16.3-6.7-24.3-20.1-24.3-9.6 0-18.6 6.4-23.2 15.7v49.6c0 3.9-2 5.1-4.7 5.1H823c-2.8 0-4.7-1.1-4.7-5.1v-73zm184.5 30.8h1.6v-2.8c0-13.4-7.8-20.7-21.9-20.7-12.6 0-20.6 6.4-24.8 14.4 0 .2-6-.5-6-6.2 0-5.5 11.1-17.9 31.7-17.9 19.7 0 31.5 11.4 31.5 30.2V511c0 .3-1.6 1.1-3.6 1.1-3.6 0-6.7-1.8-6.7-10.3V499c-6.2 9-16.6 14.4-29 14.4-17 0-26.8-8.6-26.8-21.7 0-18.2 18.1-25.7 54-26.5zm-26.3 39.3c16 0 27.9-10 27.9-23.8v-7.2l-4.6.2c-26.6 1-40.3 5.7-40.3 17.9.1 7.9 6.4 12.9 17 12.9zm58.8-61.2h-7.2c-3.9 0-5.1-1.5-5.1-4.2v-1c0-2.8 1.1-4.2 5.1-4.2h7.2v-13.5c0-3.9 2-5.1 4.7-5.1h1.1c2.8 0 4.6 1.1 4.6 5.1v13.5h20.7c3.9 0 5.1 1.5 5.1 4.2v1c0 2.8-1.1 4.2-5.1 4.2h-20.7v44.2c0 11.4 2.9 16.8 11.6 16.8 5.4 0 9.3-2.3 12.1-5.7.3-.3 3.6 1.1 3.6 5.2 0 4.4-5.7 9.6-16 9.6-15.2 0-21.7-8.6-21.7-24.8v-45.3zm47.4-41.7c0-.3 1.6-1.1 3.6-1.1 3.6 0 7 1.8 7 10.3v35.6c5.4-8.3 14-14.4 26.3-14.4 20.6 0 30.8 13.7 30.8 34.3v40.9c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-40.3c0-15.7-7.8-25-20.9-25-15.3 0-25.6 10.4-25.6 26.6v38.7c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1V401.6zm140.6 30.3c13.7 0 23.7 6.5 28.2 13.7v-44c0-.3 1.6-1.1 3.6-1.1 3.6 0 7 1.8 7 10.3v96.4c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.6-1.1-4.6-5.1v-8.5c-7 9.5-16.2 14.8-29 14.8-20.6 0-36.7-16-36.7-40.6 0-24.5 15.8-41 37.3-41zm.5 72.3c14.2 0 27.2-10.6 27.9-25v-19.7c-4.9-11.3-13.9-18.3-27.6-18.3-16.5 0-27.4 12.7-27.4 31.5.1 18.3 11.5 31.5 27.1 31.5zm55.3-96.8c0-4.7 2.4-7 7.2-7 4.6 0 6.9 2.3 6.9 7s-2.4 7-7.2 7c-4.4.1-6.9-2.4-6.9-7zm1.7 30.9c0-3.9 2-5.1 4.7-5.1h1.1c2.8 0 4.7 1.1 4.7 5.1v68.8c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-68.8zm43.5 64.1c-2-1.6-3.4-3.9-3.4-7.5 0-2.8 1.5-5.5 3.4-7.7-11.7-4.1-19.4-14-19.4-25.9 0-16.2 13.4-29.4 31.5-29.4 7.3 0 14.2 2.3 19.6 6l5.4-8.6c2.3-3.3 4.1-4.9 7.5-4.9 4.4 0 6.4 4.4 6 4.7l-12.9 14.4c3.9 4.7 6.4 10.8 6.4 17.1 0 16-13.7 28.6-32 28.6-1.5 0-2.9 0-4.2-.2-1 1.5-1.1 2.6-1.1 3.9 0 5.4 7.3 5.9 21.5 9.5 11.1 2.8 22.8 8 22.8 20.4 0 14.5-14.7 23.2-39.6 23.2-24.8 0-36.5-6.9-36.5-21.2-.1-11.8 10.8-19.6 25-22.4zm11.8 34.9c17.8 0 28.7-5.1 28.7-14.2 0-9.5-14.7-11.4-27.1-14.5-14.8.8-28.2 6.4-28.2 16.1 0 8.2 9.1 12.6 26.6 12.6zm21.3-76.3c0-11.7-8.5-20.2-21.2-20.2-12.1 0-20.6 8.2-20.6 20.2 0 11.7 8.7 19.9 20.9 19.9 12.5 0 20.9-8.2 20.9-19.9zm24.5-53.6c0-4.7 2.4-7 7.2-7 4.6 0 6.9 2.3 6.9 7s-2.4 7-7.2 7c-4.5.1-6.9-2.4-6.9-7zm1.6 30.9c0-3.9 2-5.1 4.7-5.1h1.1c2.8 0 4.7 1.1 4.7 5.1v68.8c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-68.8zm34.1 5h-7.2c-3.9 0-5.1-1.5-5.1-4.2v-1c0-2.8 1.1-4.2 5.1-4.2h7.2v-13.5c0-3.9 2-5.1 4.7-5.1h1.1c2.8 0 4.6 1.1 4.6 5.1v13.5h20.7c3.9 0 5.1 1.5 5.1 4.2v1c0 2.8-1.1 4.2-5.1 4.2h-20.7v44.2c0 11.4 2.9 16.8 11.6 16.8 5.4 0 9.3-2.3 12.1-5.7.3-.3 3.6 1.1 3.6 5.2 0 4.4-5.7 9.6-16 9.6-15.2 0-21.7-8.6-21.7-24.8v-45.3zm95.8 21.9h1.6v-2.8c0-13.4-7.8-20.7-21.9-20.7-12.6 0-20.6 6.4-24.8 14.4 0 .2-6-.5-6-6.2 0-5.5 11.1-17.9 31.7-17.9 19.7 0 31.5 11.4 31.5 30.2V511c0 .3-1.6 1.1-3.6 1.1-3.6 0-6.7-1.8-6.7-10.3V499c-6.2 9-16.6 14.4-29 14.4-17 0-26.8-8.6-26.8-21.7 0-18.2 18.1-25.7 54-26.5zm-26.3 39.3c16 0 27.9-10 27.9-23.8v-7.2l-4.6.2c-26.6 1-40.3 5.7-40.3 17.9.1 7.9 6.4 12.9 17 12.9zm56.3-102.9c0-.3 1.6-1.1 3.6-1.1 3.6 0 7 1.8 7 10.3v96.4c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1V401.6zM218.9 373.4h-64.3c-3.2 0-6.3-1.3-8.5-3.5L3.5 227.4c-2.3-2.3-3.5-5.3-3.5-8.5v-64.3c0-3.2 1.3-6.3 3.5-8.5L146 3.5c2.3-2.3 5.3-3.5 8.5-3.5h64.3c3.2 0 6.3 1.3 8.5 3.5L369.9 146c2.3 2.3 3.5 5.3 3.5 8.5v64.3c0 3.2-1.3 6.3-3.5 8.5L227.4 369.9c-2.3 2.3-5.3 3.5-8.5 3.5zm-59.3-24.1h54.3l135.4-135.4v-54.3L213.9 24.1h-54.3L24.1 159.6v54.3l135.5 135.4zm201.8-130.4z" fill="#00b7ff"/><path d="M190.5 283.4c-1.2 0-2.4-.4-3.2-1.3L96.1 191c-1.8-1.8-1.8-4.7 0-6.5 1.8-1.8 4.7-1.8 6.5 0l91.1 91.1c1.8 1.8 1.8 4.7 0 6.5-.9.8-2.1 1.3-3.2 1.3z" fill="#00b7ff"/><path d="M163.3 314.7c-2.5 0-4.9-1-6.6-2.7L17 172.3c-3.7-3.7-3.7-9.6 0-13.3 3.7-3.7 9.6-3.7 13.3 0l133 133 17-17c3.7-3.7 9.6-3.7 13.3 0 3.7 3.7 3.7 9.6 0 13.3L170 311.9c-1.9 1.8-4.3 2.8-6.7 2.8z" fill="#00b7ff"/><path d="M184.9 280.5c-1.2 0-2.4-.4-3.2-1.3-1.8-1.8-1.8-4.7 0-6.5l91.1-91.1c1.8-1.8 4.7-1.8 6.5 0 1.8 1.8 1.8 4.7 0 6.5l-91.1 91.1c-.9.9-2.1 1.3-3.3 1.3z" fill="#00b7ff"/><path d="M162.9 361.1c-2.4 0-4.8-.9-6.6-2.7-3.7-3.7-3.7-9.6 0-13.3l133-133-17-17c-3.7-3.7-3.7-9.6 0-13.3 3.7-3.7 9.6-3.7 13.3 0l23.6 23.6c3.7 3.7 3.7 9.6 0 13.3L169.5 358.3c-1.8 1.9-4.2 2.8-6.6 2.8z" fill="#00b7ff"/><path d="M274.1 191.8c-1.2 0-2.4-.4-3.2-1.3l-91.1-91.1c-1.8-1.8-1.8-4.7 0-6.5s4.7-1.8 6.5 0l91.1 91.1c1.8 1.8 1.8 4.7 0 6.5-.9.8-2.1 1.3-3.3 1.3z" fill="#00b7ff"/><path d="M349.9 218.6c-2.4 0-4.8-.9-6.6-2.7l-133-133-17 17c-3.7 3.7-9.6 3.7-13.3 0-3.7-3.7-3.7-9.6 0-13.3L203.6 63c3.7-3.7 9.6-3.7 13.3 0l139.7 139.7c3.7 3.7 3.7 9.6 0 13.3-1.9 1.7-4.3 2.6-6.7 2.6z" fill="#00b7ff"/><path d="M95.6 195c-1.2 0-2.4-.4-3.2-1.3-1.8-1.8-1.8-4.7 0-6.5l91.1-91.1c1.8-1.8 4.7-1.8 6.5 0 1.8 1.8 1.8 4.7 0 6.5l-91.1 91.1c-1 .8-2.1 1.3-3.3 1.3z" fill="#00b7ff"/><path d="M92.7 196.2c-2.4 0-4.8-.9-6.6-2.7l-23.6-23.6c-3.7-3.7-3.7-9.6 0-13.3L202.1 16.9c3.7-3.7 9.6-3.7 13.3 0 3.7 3.7 3.7 9.6 0 13.3l-133 133 17 17c3.7 3.7 3.7 9.6 0 13.3-1.9 1.8-4.3 2.7-6.7 2.7zM1602.9 35.7c15.1 0 25.6 10.8 25.6 25.8s-10.7 26-25.7 26c-15.2 0-25.6-10.8-25.6-25.9 0-14.9 10.6-25.9 25.7-25.9zm0 47.2c12.3 0 20.7-8.9 20.7-21.3s-8.7-21.4-20.8-21.4c-12.4 0-20.7 8.9-20.7 21.3 0 12.3 8.6 21.4 20.8 21.4zm-11-30.9c0-2.6 1.4-4 3.8-4h8.2c7.3 0 11.2 2.8 11.2 8.7 0 4.1-2.2 6.9-6.3 7.9l6.2 8.1c.3.5-1.8 2.6-4.2 2.6-1.3 0-3-.6-4.2-2.7l-4.7-6.7h-2.8v5.9c0 2.1-1.1 3.3-3.2 3.3h-1c-2 0-3.1-1.5-3.1-4.1V52zm11.6 8.6c2.8 0 4.4-1.3 4.4-3.5 0-2.4-1.5-3.5-4.5-3.5h-4.4v7h4.5z" fill="#00b7ff"/></symbol><symbol id="equatio-svg-logo-upgrade-overlay" viewBox="0 0 1628.5 546"><path d="M599.3 185.4c0-64.3 29.8-94.5 80.4-94.5 44.7 0 76.8 25.5 76.8 77.2v172.5c0 7.1-5.5 12.5-12.5 12.5-7.1 0-12.5-5.5-12.5-12.5V254c-9 12.5-28.2 25.5-53.3 25.5-50.7 0-78.9-29.8-78.9-94.1zm132.1-17.3c0-37.2-21.6-54.5-51.7-54.5-36.1 0-55.3 22.7-55.3 71.7 0 48.2 19.6 71.3 55.3 71.3 36.8 0 51.7-34.5 51.7-34.5v-54zm92.9-62.3v102.3c0 25.5 8.2 47.4 47.8 47.4 39.6 0 47.8-22 47.8-47.4V105.8c0-7.1 5.9-12.5 12.9-12.5 6.7 0 12.2 5.5 12.2 12.5v102.3c0 37.2-12.2 71.3-72.9 71.3-60.4 0-72.9-34.1-72.9-71.3V105.8c0-7.1 5.5-12.5 12.5-12.5 6.7-.1 12.6 5.4 12.6 12.5zm187.8 28.6c-3.9 4.3-6.7 5.5-10.2 5.5-6.3 0-11.4-5.1-11.4-11.4 0-2.7.8-4.7 2-6.7 11-17.2 32.1-31 65.1-31 45.5 0 70.6 26.7 70.6 66.6v107.8c0 6.7-5.5 12.2-12.2 12.2-6.7 0-12.2-5.5-12.2-12.2v-14.1c-9.8 18.4-32.5 28.2-56.1 28.2-41.6 0-67.8-20-67.8-56.1 0-34.5 26.3-55.3 68.6-55.3h55.3v-10.6c0-26.7-17.6-43.1-46.3-43.1-20.7.2-33.3 6.5-45.4 20.2zm91.7 72.1V190h-55.3c-25.5 0-43.1 10.6-43.1 33.3 0 20.4 14.1 33.3 44.7 33.3 27.5.1 53.7-16.7 53.7-50.1zM1185 55.2c0-6.7 5.9-12.5 12.5-12.5 7.1 0 12.5 5.9 12.5 12.5v35.7h25.5c6.7 0 11.8 5.1 11.8 11.8 0 6.7-5.1 11.8-11.8 11.8H1210v113.7c0 16.9 9.4 25.9 22.7 25.9 6.7 0 12.2 5.1 12.2 11.8 0 6.7-5.5 11.8-12.2 11.8-31 0-47.8-20.8-47.8-49.4V114.4h-15.3c-6.7 0-11.8-5.1-11.8-11.8 0-6.7 5.1-11.8 11.8-11.8h15.3V55.2zM1309.3 265c0 7.1-5.5 12.5-12.5 12.5s-12.5-5.5-12.5-12.5V55.6c0-7.1 5.5-12.5 12.5-12.5s12.5 5.5 12.5 12.5V265zm244.4-103.3c0 80.1-39.1 117.8-102.6 117.8-63 0-102.6-37.6-102.6-117.8S1388 44.4 1451.1 44.4c63.5 0 102.6 37.1 102.6 117.3zm-25.9 0c0-66.7-28.1-96.3-76.8-96.3-48.7 0-76.8 29.6-76.8 96.3 0 67.8 28.1 96.9 76.8 96.9 48.8-.1 76.8-29.2 76.8-96.9zm-1010 35.6c-3.4 0-6.8-1.4-9.3-4.2l-73.2-82.4c-3.3-3.7-4.1-8.9-2-13.4s6.4-7.3 11.3-7.3H567c6.9 0 12.4 5.6 12.4 12.4s-5.6 12.4-12.4 12.4h-94.7l54.8 61.7c4.6 5.1 4.1 13-1 17.6-2.4 2.2-5.4 3.2-8.3 3.2z" fill="#fff"/><path d="M566.9 279.7H444.5c-4.9 0-9.3-2.9-11.3-7.3s-1.2-9.7 2-13.4l73.2-82.4c4.6-5.1 12.4-5.6 17.6-1 5.1 4.6 5.6 12.4 1 17.6l-54.8 61.7h94.7c6.9 0 12.4 5.6 12.4 12.4s-5.5 12.4-12.4 12.4zM431.6 434.4c0-.3 1.6-1.1 3.6-1.1 3.6 0 6.9 1.8 6.9 10.3v2c5.4-7.8 14-13.5 24.5-13.5 12.2 0 21.5 5.7 25.8 16.6 5.2-9.3 14.7-16.6 27.6-16.6 19.6 0 30 11.3 30 32.8v42.4c0 3.9-2 5.1-4.7 5.1H544c-2.8 0-4.7-1.1-4.7-5.1v-41.8c0-15.5-6.7-23.5-20.1-23.5-9.6 0-18.6 6.4-23.2 15.7v49.6c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-40.9c0-16.3-6.7-24.3-20.1-24.3-9.6 0-18.6 6.4-23.2 15.7v49.6c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-73zm184.5 30.8h1.6v-2.8c0-13.4-7.8-20.7-21.9-20.7-12.6 0-20.6 6.4-24.8 14.4 0 .2-6-.5-6-6.2 0-5.5 11.1-17.9 31.7-17.9 19.7 0 31.5 11.4 31.5 30.2V511c0 .3-1.6 1.1-3.6 1.1-3.6 0-6.7-1.8-6.7-10.3V499c-6.2 9-16.6 14.4-29 14.4-17 0-26.8-8.6-26.8-21.7 0-18.2 18.1-25.7 54-26.5zm-26.3 39.3c16 0 27.9-10 27.9-23.8v-7.2l-4.6.2c-26.6 1-40.3 5.7-40.3 17.9 0 7.9 6.4 12.9 17 12.9zm55.4-102.9c0-.3 1.6-1.1 3.6-1.1 3.6 0 7 1.8 7 10.3v58.7l31.3-32c2.9-3.1 5.1-4.2 7.2-4.2 4.2 0 5.7 4.7 5.2 5.2l-32.1 32 37.2 36.2c.5.5-1.3 5.5-5.7 5.5-2 0-3.8-1-6.9-4.1L655.8 472v35.1c0 3.9-2 5.1-4.7 5.1H650c-2.8 0-4.7-1.1-4.7-5.1V401.6zm100.5 30.3c21.9 0 36.2 15.5 36.2 39.2v1c0 2.9-1.1 3.6-4.4 3.6h-60.4c.8 16.6 12.9 28.4 29.5 28.4 15.2 0 22-6.5 26.6-13.9.3-.5 6.2 1 6.2 6 0 5.4-11.7 17.3-32.8 17.3-23.7 0-40.1-16.6-40.1-40.5.1-23.6 16.7-41.1 39.2-41.1zm25 34.6c-1-15.3-10.4-25.3-25-25.3-14.7 0-25.9 10.4-28.2 25.3h53.2zm47.3-32.1c0-.3 1.6-1.1 3.6-1.1 3.6 0 6.9 1.8 6.9 10.3v2c5.4-7.8 14-13.5 24.5-13.5 12.2 0 21.5 5.7 25.8 16.6 5.2-9.3 14.7-16.6 27.6-16.6 19.6 0 30 11.3 30 32.8v42.4c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-41.8c0-15.5-6.7-23.5-20.1-23.5-9.6 0-18.6 6.4-23.2 15.7v49.6c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-40.9c0-16.3-6.7-24.3-20.1-24.3-9.6 0-18.6 6.4-23.2 15.7v49.6c0 3.9-2 5.1-4.7 5.1H823c-2.8 0-4.7-1.1-4.7-5.1v-73zm184.5 30.8h1.6v-2.8c0-13.4-7.8-20.7-21.9-20.7-12.6 0-20.6 6.4-24.8 14.4 0 .2-6-.5-6-6.2 0-5.5 11.1-17.9 31.7-17.9 19.7 0 31.5 11.4 31.5 30.2V511c0 .3-1.6 1.1-3.6 1.1-3.6 0-6.7-1.8-6.7-10.3V499c-6.2 9-16.6 14.4-29 14.4-17 0-26.8-8.6-26.8-21.7 0-18.2 18.1-25.7 54-26.5zm-26.3 39.3c16 0 27.9-10 27.9-23.8v-7.2l-4.6.2c-26.6 1-40.3 5.7-40.3 17.9.1 7.9 6.4 12.9 17 12.9zm58.8-61.2h-7.2c-3.9 0-5.1-1.5-5.1-4.2v-1c0-2.8 1.1-4.2 5.1-4.2h7.2v-13.5c0-3.9 2-5.1 4.7-5.1h1.1c2.8 0 4.6 1.1 4.6 5.1v13.5h20.7c3.9 0 5.1 1.5 5.1 4.2v1c0 2.8-1.1 4.2-5.1 4.2h-20.7v44.2c0 11.4 2.9 16.8 11.6 16.8 5.4 0 9.3-2.3 12.1-5.7.3-.3 3.6 1.1 3.6 5.2 0 4.4-5.7 9.6-16 9.6-15.2 0-21.7-8.6-21.7-24.8v-45.3zm47.4-41.7c0-.3 1.6-1.1 3.6-1.1 3.6 0 7 1.8 7 10.3v35.6c5.4-8.3 14-14.4 26.3-14.4 20.6 0 30.8 13.7 30.8 34.3v40.9c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-40.3c0-15.7-7.8-25-20.9-25-15.3 0-25.6 10.4-25.6 26.6v38.7c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1V401.6zm140.6 30.3c13.7 0 23.7 6.5 28.2 13.7v-44c0-.3 1.6-1.1 3.6-1.1 3.6 0 7 1.8 7 10.3v96.4c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.6-1.1-4.6-5.1v-8.5c-7 9.5-16.2 14.8-29 14.8-20.6 0-36.7-16-36.7-40.6 0-24.5 15.8-41 37.3-41zm.5 72.3c14.2 0 27.2-10.6 27.9-25v-19.7c-4.9-11.3-13.9-18.3-27.6-18.3-16.5 0-27.4 12.7-27.4 31.5.1 18.3 11.5 31.5 27.1 31.5zm55.3-96.8c0-4.7 2.4-7 7.2-7 4.6 0 6.9 2.3 6.9 7s-2.4 7-7.2 7c-4.4.1-6.9-2.4-6.9-7zm1.7 30.9c0-3.9 2-5.1 4.7-5.1h1.1c2.8 0 4.7 1.1 4.7 5.1v68.8c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-68.8zm43.5 64.1c-2-1.6-3.4-3.9-3.4-7.5 0-2.8 1.5-5.5 3.4-7.7-11.7-4.1-19.4-14-19.4-25.9 0-16.2 13.4-29.4 31.5-29.4 7.3 0 14.2 2.3 19.6 6l5.4-8.6c2.3-3.3 4.1-4.9 7.5-4.9 4.4 0 6.4 4.4 6 4.7l-12.9 14.4c3.9 4.7 6.4 10.8 6.4 17.1 0 16-13.7 28.6-32 28.6-1.5 0-2.9 0-4.2-.2-1 1.5-1.1 2.6-1.1 3.9 0 5.4 7.3 5.9 21.5 9.5 11.1 2.8 22.8 8 22.8 20.4 0 14.5-14.7 23.2-39.6 23.2-24.8 0-36.5-6.9-36.5-21.2-.1-11.8 10.8-19.6 25-22.4zm11.8 34.9c17.8 0 28.7-5.1 28.7-14.2 0-9.5-14.7-11.4-27.1-14.5-14.8.8-28.2 6.4-28.2 16.1 0 8.2 9.1 12.6 26.6 12.6zm21.3-76.3c0-11.7-8.5-20.2-21.2-20.2-12.1 0-20.6 8.2-20.6 20.2 0 11.7 8.7 19.9 20.9 19.9 12.5 0 20.9-8.2 20.9-19.9zm24.5-53.6c0-4.7 2.4-7 7.2-7 4.6 0 6.9 2.3 6.9 7s-2.4 7-7.2 7c-4.5.1-6.9-2.4-6.9-7zm1.6 30.9c0-3.9 2-5.1 4.7-5.1h1.1c2.8 0 4.7 1.1 4.7 5.1v68.8c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1v-68.8zm34.1 5h-7.2c-3.9 0-5.1-1.5-5.1-4.2v-1c0-2.8 1.1-4.2 5.1-4.2h7.2v-13.5c0-3.9 2-5.1 4.7-5.1h1.1c2.8 0 4.6 1.1 4.6 5.1v13.5h20.7c3.9 0 5.1 1.5 5.1 4.2v1c0 2.8-1.1 4.2-5.1 4.2h-20.7v44.2c0 11.4 2.9 16.8 11.6 16.8 5.4 0 9.3-2.3 12.1-5.7.3-.3 3.6 1.1 3.6 5.2 0 4.4-5.7 9.6-16 9.6-15.2 0-21.7-8.6-21.7-24.8v-45.3zm95.8 21.9h1.6v-2.8c0-13.4-7.8-20.7-21.9-20.7-12.6 0-20.6 6.4-24.8 14.4 0 .2-6-.5-6-6.2 0-5.5 11.1-17.9 31.7-17.9 19.7 0 31.5 11.4 31.5 30.2V511c0 .3-1.6 1.1-3.6 1.1-3.6 0-6.7-1.8-6.7-10.3V499c-6.2 9-16.6 14.4-29 14.4-17 0-26.8-8.6-26.8-21.7 0-18.2 18.1-25.7 54-26.5zm-26.3 39.3c16 0 27.9-10 27.9-23.8v-7.2l-4.6.2c-26.6 1-40.3 5.7-40.3 17.9.1 7.9 6.4 12.9 17 12.9zm56.3-102.9c0-.3 1.6-1.1 3.6-1.1 3.6 0 7 1.8 7 10.3v96.4c0 3.9-2 5.1-4.7 5.1h-1.1c-2.8 0-4.7-1.1-4.7-5.1V401.6zM218.9 373.4h-64.3c-3.2 0-6.3-1.3-8.5-3.5L3.5 227.4c-2.3-2.3-3.5-5.3-3.5-8.5v-64.3c0-3.2 1.3-6.3 3.5-8.5L146 3.5c2.3-2.3 5.3-3.5 8.5-3.5h64.3c3.2 0 6.3 1.3 8.5 3.5L369.9 146c2.3 2.3 3.5 5.3 3.5 8.5v64.3c0 3.2-1.3 6.3-3.5 8.5L227.4 369.9c-2.3 2.3-5.3 3.5-8.5 3.5zm-59.3-24.1h54.3l135.4-135.4v-54.3L213.9 24.1h-54.3L24.1 159.6v54.3l135.5 135.4zm201.8-130.4z" fill="#fff"/><path d="M190.5 283.4c-1.2 0-2.4-.4-3.2-1.3L96.1 191c-1.8-1.8-1.8-4.7 0-6.5 1.8-1.8 4.7-1.8 6.5 0l91.1 91.1c1.8 1.8 1.8 4.7 0 6.5-.9.8-2.1 1.3-3.2 1.3z" fill="#fff"/><path d="M163.3 314.7c-2.5 0-4.9-1-6.6-2.7L17 172.3c-3.7-3.7-3.7-9.6 0-13.3 3.7-3.7 9.6-3.7 13.3 0l133 133 17-17c3.7-3.7 9.6-3.7 13.3 0 3.7 3.7 3.7 9.6 0 13.3L170 311.9c-1.9 1.8-4.3 2.8-6.7 2.8z" fill="#fff"/><path d="M184.9 280.5c-1.2 0-2.4-.4-3.2-1.3-1.8-1.8-1.8-4.7 0-6.5l91.1-91.1c1.8-1.8 4.7-1.8 6.5 0 1.8 1.8 1.8 4.7 0 6.5l-91.1 91.1c-.9.9-2.1 1.3-3.3 1.3z" fill="#fff"/><path d="M162.9 361.1c-2.4 0-4.8-.9-6.6-2.7-3.7-3.7-3.7-9.6 0-13.3l133-133-17-17c-3.7-3.7-3.7-9.6 0-13.3 3.7-3.7 9.6-3.7 13.3 0l23.6 23.6c3.7 3.7 3.7 9.6 0 13.3L169.5 358.3c-1.8 1.9-4.2 2.8-6.6 2.8z" fill="#fff"/><path d="M274.1 191.8c-1.2 0-2.4-.4-3.2-1.3l-91.1-91.1c-1.8-1.8-1.8-4.7 0-6.5s4.7-1.8 6.5 0l91.1 91.1c1.8 1.8 1.8 4.7 0 6.5-.9.8-2.1 1.3-3.3 1.3z" fill="#fff"/><path d="M349.9 218.6c-2.4 0-4.8-.9-6.6-2.7l-133-133-17 17c-3.7 3.7-9.6 3.7-13.3 0-3.7-3.7-3.7-9.6 0-13.3L203.6 63c3.7-3.7 9.6-3.7 13.3 0l139.7 139.7c3.7 3.7 3.7 9.6 0 13.3-1.9 1.7-4.3 2.6-6.7 2.6z" fill="#fff"/><path d="M95.6 195c-1.2 0-2.4-.4-3.2-1.3-1.8-1.8-1.8-4.7 0-6.5l91.1-91.1c1.8-1.8 4.7-1.8 6.5 0 1.8 1.8 1.8 4.7 0 6.5l-91.1 91.1c-1 .8-2.1 1.3-3.3 1.3z" fill="#fff"/><path d="M92.7 196.2c-2.4 0-4.8-.9-6.6-2.7l-23.6-23.6c-3.7-3.7-3.7-9.6 0-13.3L202.1 16.9c3.7-3.7 9.6-3.7 13.3 0 3.7 3.7 3.7 9.6 0 13.3l-133 133 17 17c3.7 3.7 3.7 9.6 0 13.3-1.9 1.8-4.3 2.7-6.7 2.7zM1602.9 35.7c15.1 0 25.6 10.8 25.6 25.8s-10.7 26-25.7 26c-15.2 0-25.6-10.8-25.6-25.9 0-14.9 10.6-25.9 25.7-25.9zm0 47.2c12.3 0 20.7-8.9 20.7-21.3s-8.7-21.4-20.8-21.4c-12.4 0-20.7 8.9-20.7 21.3 0 12.3 8.6 21.4 20.8 21.4zm-11-30.9c0-2.6 1.4-4 3.8-4h8.2c7.3 0 11.2 2.8 11.2 8.7 0 4.1-2.2 6.9-6.3 7.9l6.2 8.1c.3.5-1.8 2.6-4.2 2.6-1.3 0-3-.6-4.2-2.7l-4.7-6.7h-2.8v5.9c0 2.1-1.1 3.3-3.2 3.3h-1c-2 0-3.1-1.5-3.1-4.1V52zm11.6 8.6c2.8 0 4.4-1.3 4.4-3.5 0-2.4-1.5-3.5-4.5-3.5h-4.4v7h4.5z" fill="#fff"/></symbol><symbol id="equatio-svg-logo" viewBox="0 0 1628.5 373.4"><path d="M599.3 185.4c0-64.3 29.8-94.5 80.4-94.5 44.7 0 76.8 25.5 76.8 77.2v172.5c0 7.1-5.5 12.5-12.5 12.5-7.1 0-12.5-5.5-12.5-12.5V254c-9 12.5-28.2 25.5-53.3 25.5-50.7 0-78.9-29.8-78.9-94.1zm132.1-17.3c0-37.2-21.6-54.5-51.7-54.5-36.1 0-55.3 22.7-55.3 71.7 0 48.2 19.6 71.3 55.3 71.3 36.8 0 51.7-34.5 51.7-34.5v-54zm92.9-62.3v102.3c0 25.5 8.2 47.4 47.8 47.4 39.6 0 47.8-22 47.8-47.4V105.8c0-7.1 5.9-12.5 12.9-12.5 6.7 0 12.2 5.5 12.2 12.5v102.3c0 37.2-12.2 71.3-72.9 71.3-60.4 0-72.9-34.1-72.9-71.3V105.8c0-7.1 5.5-12.5 12.5-12.5 6.7-.1 12.6 5.4 12.6 12.5zm187.8 28.6c-3.9 4.3-6.7 5.5-10.2 5.5-6.3 0-11.4-5.1-11.4-11.4 0-2.7.8-4.7 2-6.7 11-17.2 32.1-31 65.1-31 45.5 0 70.6 26.7 70.6 66.6v107.8c0 6.7-5.5 12.2-12.2 12.2-6.7 0-12.2-5.5-12.2-12.2v-14.1c-9.8 18.4-32.5 28.2-56.1 28.2-41.6 0-67.8-20-67.8-56.1 0-34.5 26.3-55.3 68.6-55.3h55.3v-10.6c0-26.7-17.6-43.1-46.3-43.1-20.7.2-33.3 6.5-45.4 20.2zm91.7 72.1V190h-55.3c-25.5 0-43.1 10.6-43.1 33.3 0 20.4 14.1 33.3 44.7 33.3 27.5.1 53.7-16.7 53.7-50.1zM1185 55.2c0-6.7 5.9-12.5 12.5-12.5 7.1 0 12.5 5.9 12.5 12.5v35.7h25.5c6.7 0 11.8 5.1 11.8 11.8 0 6.7-5.1 11.8-11.8 11.8H1210v113.7c0 16.9 9.4 25.9 22.7 25.9 6.7 0 12.2 5.1 12.2 11.8 0 6.7-5.5 11.8-12.2 11.8-31 0-47.8-20.8-47.8-49.4V114.4h-15.3c-6.7 0-11.8-5.1-11.8-11.8 0-6.7 5.1-11.8 11.8-11.8h15.3V55.2zM1309.3 265c0 7.1-5.5 12.5-12.5 12.5s-12.5-5.5-12.5-12.5V55.6c0-7.1 5.5-12.5 12.5-12.5s12.5 5.5 12.5 12.5V265zm244.4-103.3c0 80.1-39.1 117.8-102.6 117.8-63 0-102.6-37.6-102.6-117.8S1388 44.4 1451.1 44.4c63.5 0 102.6 37.1 102.6 117.3zm-25.9 0c0-66.7-28.1-96.3-76.8-96.3-48.7 0-76.8 29.6-76.8 96.3 0 67.8 28.1 96.9 76.8 96.9 48.8-.1 76.8-29.2 76.8-96.9zm-1010 35.6c-3.4 0-6.8-1.4-9.3-4.2l-73.2-82.4c-3.3-3.7-4.1-8.9-2-13.4s6.4-7.3 11.3-7.3H567c6.9 0 12.4 5.6 12.4 12.4s-5.6 12.4-12.4 12.4h-94.7l54.8 61.7c4.6 5.1 4.1 13-1 17.6-2.4 2.2-5.4 3.2-8.3 3.2z" fill="#fff"/><path d="M566.9 279.7H444.5c-4.9 0-9.3-2.9-11.3-7.3s-1.2-9.7 2-13.4l73.2-82.4c4.6-5.1 12.4-5.6 17.6-1 5.1 4.6 5.6 12.4 1 17.6l-54.8 61.7h94.7c6.9 0 12.4 5.6 12.4 12.4s-5.5 12.4-12.4 12.4zm-348 93.7h-64.3c-3.2 0-6.3-1.3-8.5-3.5L3.5 227.4c-2.3-2.3-3.5-5.3-3.5-8.5v-64.3c0-3.2 1.3-6.3 3.5-8.5L146 3.5c2.3-2.3 5.3-3.5 8.5-3.5h64.3c3.2 0 6.3 1.3 8.5 3.5L369.9 146c2.3 2.3 3.5 5.3 3.5 8.5v64.3c0 3.2-1.3 6.3-3.5 8.5L227.4 369.9c-2.3 2.3-5.3 3.5-8.5 3.5zm-59.3-24.1h54.3l135.4-135.4v-54.3L213.9 24.1h-54.3L24.1 159.6v54.3l135.5 135.4zm201.8-130.4z" fill="#fff"/><path d="M190.5 283.4c-1.2 0-2.4-.4-3.2-1.3L96.1 191c-1.8-1.8-1.8-4.7 0-6.5 1.8-1.8 4.7-1.8 6.5 0l91.1 91.1c1.8 1.8 1.8 4.7 0 6.5-.9.8-2.1 1.3-3.2 1.3z" fill="#fff"/><path d="M163.3 314.7c-2.5 0-4.9-1-6.6-2.7L17 172.3c-3.7-3.7-3.7-9.6 0-13.3 3.7-3.7 9.6-3.7 13.3 0l133 133 17-17c3.7-3.7 9.6-3.7 13.3 0 3.7 3.7 3.7 9.6 0 13.3L170 311.9c-1.9 1.8-4.3 2.8-6.7 2.8z" fill="#fff"/><path d="M184.9 280.5c-1.2 0-2.4-.4-3.2-1.3-1.8-1.8-1.8-4.7 0-6.5l91.1-91.1c1.8-1.8 4.7-1.8 6.5 0 1.8 1.8 1.8 4.7 0 6.5l-91.1 91.1c-.9.9-2.1 1.3-3.3 1.3z" fill="#fff"/><path d="M162.9 361.1c-2.4 0-4.8-.9-6.6-2.7-3.7-3.7-3.7-9.6 0-13.3l133-133-17-17c-3.7-3.7-3.7-9.6 0-13.3 3.7-3.7 9.6-3.7 13.3 0l23.6 23.6c3.7 3.7 3.7 9.6 0 13.3L169.5 358.3c-1.8 1.9-4.2 2.8-6.6 2.8z" fill="#fff"/><path d="M274.1 191.8c-1.2 0-2.4-.4-3.2-1.3l-91.1-91.1c-1.8-1.8-1.8-4.7 0-6.5s4.7-1.8 6.5 0l91.1 91.1c1.8 1.8 1.8 4.7 0 6.5-.9.8-2.1 1.3-3.3 1.3z" fill="#fff"/><path d="M349.9 218.6c-2.4 0-4.8-.9-6.6-2.7l-133-133-17 17c-3.7 3.7-9.6 3.7-13.3 0-3.7-3.7-3.7-9.6 0-13.3L203.6 63c3.7-3.7 9.6-3.7 13.3 0l139.7 139.7c3.7 3.7 3.7 9.6 0 13.3-1.9 1.7-4.3 2.6-6.7 2.6z" fill="#fff"/><path d="M95.6 195c-1.2 0-2.4-.4-3.2-1.3-1.8-1.8-1.8-4.7 0-6.5l91.1-91.1c1.8-1.8 4.7-1.8 6.5 0 1.8 1.8 1.8 4.7 0 6.5l-91.1 91.1c-1 .8-2.1 1.3-3.3 1.3z" fill="#fff"/><path d="M92.7 196.2c-2.4 0-4.8-.9-6.6-2.7l-23.6-23.6c-3.7-3.7-3.7-9.6 0-13.3L202.1 16.9c3.7-3.7 9.6-3.7 13.3 0 3.7 3.7 3.7 9.6 0 13.3l-133 133 17 17c3.7 3.7 3.7 9.6 0 13.3-1.9 1.8-4.3 2.7-6.7 2.7zM1602.9 35.7c15.1 0 25.6 10.8 25.6 25.8s-10.7 26-25.7 26c-15.2 0-25.6-10.8-25.6-25.9 0-14.9 10.6-25.9 25.7-25.9zm0 47.2c12.3 0 20.7-8.9 20.7-21.3s-8.7-21.4-20.8-21.4c-12.4 0-20.7 8.9-20.7 21.3 0 12.3 8.6 21.4 20.8 21.4zm-11-30.9c0-2.6 1.4-4 3.8-4h8.2c7.3 0 11.2 2.8 11.2 8.7 0 4.1-2.2 6.9-6.3 7.9l6.2 8.1c.3.5-1.8 2.6-4.2 2.6-1.3 0-3-.6-4.2-2.7l-4.7-6.7h-2.8v5.9c0 2.1-1.1 3.3-3.2 3.3h-1c-2 0-3.1-1.5-3.1-4.1V52zm11.6 8.6c2.8 0 4.4-1.3 4.4-3.5 0-2.4-1.5-3.5-4.5-3.5h-4.4v7h4.5z" fill="#fff"/></symbol><symbol id="equatio-svg-modal-close" viewBox="0 0 11.172 11.172"><path fill="currentColor" d="M11.172 1.128L10.043 0 5.586 4.457 1.128 0 0 1.128l4.457 4.458L0 10.043l1.128 1.129 4.458-4.458 4.457 4.458 1.129-1.129-4.458-4.457z"/></symbol><symbol id="equatio-svg-option-angle" viewBox="0 0 19.5 20.3"><path fill="none" stroke="currentColor" stroke-width="1.576" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M18.7 15.7H.8L16.9.8"/><path d="M8.4.9s.4.2 1 .7" fill="none" stroke="currentColor" stroke-width="1.576" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.2 3.5C13 5.8 15.1 10 15.5 17" fill="none" stroke="currentColor" stroke-width="1.576" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2.614,2.614"/><path d="M15.5 18.3v1.2" fill="none" stroke="currentColor" stroke-width="1.576" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol id="equatio-svg-option-prediction" viewBox="0 0 23.5 25.8"><path d="M10.5 1.4C4.7 1.4 0 6.1 0 11.8c0 5.8 4.7 10.5 10.5 10.5S21 17.6 21 11.8c-.1-5.7-4.8-10.4-10.5-10.4m-7.6 9c-.7-.8.2-3.2 2.3-5 2.1-1.8 4.5-2.2 5.2-1.5.6.7-1.4 1.8-3.5 3.6-2 1.8-3.4 3.7-4 2.9" fill="currentColor"/><path d="M19.6 1.7c-1.3 0-1.5-.2-1.4-1.5 0-.1-.1-.2-.2-.2s-.2.1-.2.2c0 1.3-.2 1.4-1.2 1.4h-.3c-.1 0-.2.1-.2.2s.1.2.2.2c1.3 0 1.5.2 1.4 1.5 0 .1.1.2.2.2s.2-.1.2-.2c0-1.3.2-1.4 1.2-1.4h.3c.1 0 .2-.1.2-.2 0-.2-.1-.2-.2-.2m3.6 2.7c-1.7 0-1.9-.2-1.8-1.9 0-.1-.1-.2-.2-.2s-.2.1-.2.2c0 1.6-.2 1.8-1.6 1.8h-.3c-.1 0-.2.1-.2.2s.1.2.2.2c1.7 0 1.9.2 1.8 1.9 0 .1.1.2.2.2s.2-.1.2-.2c0-1.6.2-1.8 1.6-1.8h.3c.1 0 .2-.1.2-.2.1-.1 0-.2-.2-.2" fill="currentColor"/><g opacity=".43"><clipPath id="equatio-svg-option-prediction-SVGID_2_"><use xlink:href="#equatio-svg-option-prediction-SVGID_1_" overflow="visible"/></clipPath><path d="M.6 12.4C.6 6.6 5.3 1.9 11.1 1.9c2.4 0 4.6.8 6.4 2.2-1.9-1.7-4.3-2.7-7-2.7C4.7 1.4 0 6.1 0 11.8c0 3.4 1.6 6.4 4.1 8.3C2 18.2.6 15.5.6 12.4" clip-path="url(#equatio-svg-option-prediction-SVGID_2_)" fill="currentColor"/></g><path d="M18 23.2c-.2-.6-1.5-1.1-3.3-1.5l-.9.3c.7.1 1.1.2 1.1.3 0 .3-2.1.5-4.6.5s-4.6-.2-4.6-.5c0-.1.6-.3 1.5-.3-.3-.1-.6-.2-.8-.3-1.8.3-3.1.8-3.3 1.5-1.5.3-2.3.6-2.3 1 0 .9 4.4 1.6 9.9 1.6 5.4 0 9.9-.7 9.9-1.6-.3-.3-1.2-.7-2.6-1" fill="currentColor"/></symbol><symbol id="equatio-svg-platform-icon-android" viewBox="0 0 56.7 56.7"><style>.st0{fill:#a6d050}</style><path class="st0" d="M35 8.6l.5-.8.5-.8 1.2-1.8c.1-.2.1-.5-.1-.7-.2-.1-.5-.1-.7.1l-1.3 1.9-.5.8-.6.8C32.2 7.4 30.3 7 28.2 7c-2.1 0-4 .4-5.8 1.1l-.4-.7-.5-.8-1.3-1.9c-.1-.2-.4-.3-.7-.1-.2.1-.3.4-.1.7l1.2 1.8.5.8.5.8c-4.1 1.9-6.9 5.5-6.9 9.7h27.1c.1-4.3-2.7-7.9-6.8-9.8zm-12.5 5.8c-.8 0-1.5-.7-1.5-1.5s.6-1.5 1.5-1.5c.8 0 1.5.6 1.5 1.5s-.7 1.5-1.5 1.5zm11.7 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.6 1.5 1.5-.7 1.5-1.5 1.5zM15 20.2h-.2v21.3c0 1.7 1.4 3.1 3.1 3.1h2.2c-.1.3-.1.5-.1.8v6.2c0 1.6 1.3 2.9 2.9 2.9s2.9-1.3 2.9-2.9v-6.2c0-.3 0-.6-.1-.8H31c-.1.3-.1.5-.1.8v6.2c0 1.6 1.3 2.9 2.9 2.9s2.9-1.3 2.9-2.9v-6.2c0-.3 0-.6-.1-.8h2.2c1.7 0 3.1-1.4 3.1-3.1V20.2H15zm-5.1 0c-1.6 0-2.9 1.3-2.9 2.9v12.4c0 1.6 1.3 2.9 2.9 2.9 1.6 0 2.9-1.3 2.9-2.9V23.1c0-1.6-1.3-2.9-2.9-2.9zm36.9 0c-1.6 0-2.9 1.3-2.9 2.9v12.4c0 1.6 1.3 2.9 2.9 2.9 1.6 0 2.9-1.3 2.9-2.9V23.1c0-1.6-1.3-2.9-2.9-2.9z"/></symbol><symbol id="equatio-svg-platform-icon-apple" viewBox="0 0 56.7 56.7"><path d="M41.8 30.5c-.1-6.2 5.1-9.2 5.3-9.4-2.9-4.2-7.4-4.8-9-4.9-3.8-.4-7.5 2.3-9.4 2.3-1.9 0-4.9-2.2-8.1-2.1-4.2.1-8 2.4-10.2 6.2-4.4 7.5-1.1 18.6 3.1 24.7 2.1 3 4.5 6.3 7.8 6.2 3.1-.1 4.3-2 8.1-2s4.8 2 8.1 2c3.4-.1 5.5-3 7.5-6 2.4-3.5 3.3-6.8 3.4-7-.1-.1-6.6-2.5-6.6-10zm-6.2-18.3c1.7-2.1 2.9-5 2.6-7.9-2.5.1-5.5 1.6-7.2 3.7-1.6 1.8-3 4.8-2.6 7.6 2.6.3 5.5-1.3 7.2-3.4z"/></symbol><symbol id="equatio-svg-platform-icon-chrome" viewBox="0 0 190 190"><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_2_)"><path d="M21 7v108h39.4L95 55h88V7H21z" fill="#db4437"/><linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="28.345" y1="117.972" x2="80.845" y2="148.641" gradientTransform="matrix(1 0 0 -1 0 192)"><stop offset="0" stop-color="#a52714" stop-opacity=".6"/><stop offset=".66" stop-color="#a52714" stop-opacity="0"/></linearGradient><path d="M21 7v108h39.4L95 55h88V7H21z" fill="url(#SVGID_3_)"/></g><clipPath id="SVGID_5_"><use xlink:href="#SVGID_4_" overflow="visible"/></clipPath><path d="M61.3 114.7L21.5 46.4l-.6 1 39 67.8 1.4-.5z" clip-path="url(#SVGID_5_)" fill="#3e2723" fill-opacity=".15"/><clipPath id="SVGID_7_"><use xlink:href="#SVGID_6_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_7_)"><path d="M7 183h83.8l39-39v-29H60.2L7 23.5V183z" fill="#0f9d58"/><linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" x1="109.865" y1="28.491" x2="51.535" y2="62.661" gradientTransform="matrix(1 0 0 -1 0 192)"><stop offset="0" stop-color="#055524" stop-opacity=".4"/><stop offset=".33" stop-color="#055524" stop-opacity="0"/></linearGradient><path d="M7 183h83.8l39-39v-29H60.2L7 23.5V183z" fill="url(#SVGID_8_)"/></g><clipPath id="SVGID_10_"><use xlink:href="#SVGID_9_" overflow="visible"/></clipPath><path d="M128.8 116.3l-.8-.4-38.3 67h1l38.3-67-.2.4z" clip-path="url(#SVGID_10_)" fill="#263238" fill-opacity=".15"/><clipPath id="SVGID_12_"><use xlink:href="#SVGID_11_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_12_)"><clipPath id="SVGID_14_"><use xlink:href="#SVGID_13_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_14_)"><path d="M95 55l34.6 60L91 183h92V55H95z" fill="#ffcd40"/><linearGradient id="SVGID_15_" gradientUnits="userSpaceOnUse" x1="120.964" y1="143.224" x2="135.654" y2="78.894" gradientTransform="matrix(1 0 0 -1 0 192)"><stop offset="0" stop-color="#ea6100" stop-opacity=".3"/><stop offset=".66" stop-color="#ea6100" stop-opacity="0"/></linearGradient><path d="M95 55l34.6 60L91 183h92V55H95z" fill="url(#SVGID_15_)"/></g><clipPath id="SVGID_17_"><use xlink:href="#SVGID_16_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_17_)"><path d="M95 55l34.6 60L91 183h92V55H95z" fill="#ffcd40"/><linearGradient id="SVGID_18_" gradientUnits="userSpaceOnUse" x1="120.964" y1="143.224" x2="135.654" y2="78.894" gradientTransform="matrix(1 0 0 -1 0 192)"><stop offset="0" stop-color="#ea6100" stop-opacity=".3"/><stop offset=".66" stop-color="#ea6100" stop-opacity="0"/></linearGradient><path d="M95 55l34.6 60L91 183h92V55H95z" fill="url(#SVGID_18_)"/></g><clipPath id="SVGID_20_"><use xlink:href="#SVGID_19_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_20_)"><clipPath id="SVGID_22_"><use xlink:href="#SVGID_21_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_22_)"><path d="M21 7v108h39.4L95 55h88V7H21z" fill="#db4437"/><linearGradient id="SVGID_23_" gradientUnits="userSpaceOnUse" x1="28.345" y1="117.972" x2="80.845" y2="148.641" gradientTransform="matrix(1 0 0 -1 0 192)"><stop offset="0" stop-color="#a52714" stop-opacity=".6"/><stop offset=".66" stop-color="#a52714" stop-opacity="0"/></linearGradient><path d="M21 7v108h39.4L95 55h88V7H21z" fill="url(#SVGID_23_)"/></g><clipPath id="SVGID_25_"><use xlink:href="#SVGID_24_" overflow="visible"/></clipPath><radialGradient id="SVGID_26_" cx="667.18" cy="137.05" r="84.08" gradientTransform="matrix(1 0 0 -1 -576 192)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3e2723" stop-opacity=".2"/><stop offset="1" stop-color="#3e2723" stop-opacity="0"/></radialGradient><path d="M95 55v21l78.4-21H95z" clip-path="url(#SVGID_25_)" fill="url(#SVGID_26_)"/><clipPath id="SVGID_28_"><use xlink:href="#SVGID_27_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_28_)"><clipPath id="SVGID_30_"><use xlink:href="#SVGID_29_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_30_)"><path d="M7 183h83.8l39-39v-29H60.2L7 23.5V183z" fill="#0f9d58"/><linearGradient id="SVGID_31_" gradientUnits="userSpaceOnUse" x1="109.865" y1="28.491" x2="51.535" y2="62.661" gradientTransform="matrix(1 0 0 -1 0 192)"><stop offset="0" stop-color="#055524" stop-opacity=".4"/><stop offset=".33" stop-color="#055524" stop-opacity="0"/></linearGradient><path d="M7 183h83.8l39-39v-29H60.2L7 23.5V183z" fill="url(#SVGID_31_)"/></g><clipPath id="SVGID_33_"><use xlink:href="#SVGID_32_" overflow="visible"/></clipPath><radialGradient id="SVGID_34_" cx="596.88" cy="144.48" r="78.04" gradientTransform="matrix(1 0 0 -1 -576 192)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3e2723" stop-opacity=".2"/><stop offset="1" stop-color="#3e2723" stop-opacity="0"/></radialGradient><path d="M21 47.5l57.2 57.2L60.4 115 21 47.5z" clip-path="url(#SVGID_33_)" fill="url(#SVGID_34_)"/><clipPath id="SVGID_36_"><use xlink:href="#SVGID_35_" overflow="visible"/></clipPath><radialGradient id="SVGID_37_" cx="670.84" cy="96.86" r="87.87" gradientTransform="matrix(1 0 0 -1 -576 192)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#263238" stop-opacity=".2"/><stop offset="1" stop-color="#263238" stop-opacity="0"/></radialGradient><path d="M90.8 183l21-78.3 17.8 10.3-38.8 68z" clip-path="url(#SVGID_36_)" fill="url(#SVGID_37_)"/><clipPath id="SVGID_39_"><use xlink:href="#SVGID_38_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_39_)"><circle cx="95" cy="95" r="40" fill="#f1f1f1"/><circle cx="95" cy="95" r="32" fill="#4285f4"/></g><clipPath id="SVGID_41_"><use xlink:href="#SVGID_40_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_41_)"><path d="M95 54c-22 0-40 18-40 40v1c0-22 18-40 40-40h88v-1H95z" fill="#3e2723" fill-opacity=".2"/><path d="M129.6 115c-7 12-19.8 20-34.6 20s-27.7-8-34.6-20L7 23.5v1L60.4 116c7 12 19.8 20 34.6 20s27.7-8 34.6-20v-1z" fill="#fff" fill-opacity=".1"/><path d="M96 55h-.5c22 .3 39.5 18 39.5 40s-17.6 39.7-39.5 40h.5c22 0 40-18 40-40s-18-40-40-40z" opacity=".1" fill="#3e2723"/><path d="M130 116.3c3.4-5.8 5.4-12.6 5.4-20 0-4-.7-8.2-2-12 1 3.4 1.6 7 1.6 10.7 0 7.3-2 14-5.4 20L91 183h1l38.2-66.5-.2-.2z" fill="#fff" fill-opacity=".2"/></g><clipPath id="SVGID_43_"><use xlink:href="#SVGID_42_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_43_)"><path d="M95 8c48.4 0 87.7 39 88 87.5V95c0-48.6-39.4-88-88-88S7 46.4 7 95v.5C7.3 47 46.6 8 95 8z" fill="#fff" fill-opacity=".2"/><path d="M95 182c48.4 0 87.7-39 88-87.5v.5c0 48.6-39.4 88-88 88S7 143.6 7 95v-.5C7.3 143 46.6 182 95 182z" fill="#3e2723" fill-opacity=".15"/></g><radialGradient id="SVGID_44_" cx="33.29" cy="160.99" r="176.75" gradientTransform="matrix(1 0 0 -1 0 192)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity=".1"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient><circle cx="95" cy="95" r="88" fill="url(#SVGID_44_)"/><path d="M-1-1h192v192H-1V-1z" fill="none"/></g></g></g></symbol><symbol id="equatio-svg-platform-icon-safari" viewBox="0 0 512 512"><path d="M105 0h303c58 0 105 47 105 105v302c0 58-47 105-105 105H105C47 512 0 465 0 407V105C0 47 47 0 105 0z" fill="#fff"/><linearGradient id="equatio-platform-icon-safari-SVGID_1_" gradientUnits="userSpaceOnUse" x1="-424.549" y1="640.716" x2="-424.549" y2="639.716" gradientTransform="matrix(448 0 0 -448 190454 287073)"><stop offset="0" stop-color="#19d7ff"/><stop offset="1" stop-color="#1e64f0"/></linearGradient><circle cx="256" cy="256" r="224" fill="url(#equatio-platform-icon-safari-SVGID_1_)"/><path d="M409 102L237 237l40 40 132-175z" fill="red"/><path d="M102 409l135-172 40 40-175 132z" fill="#fff"/><path d="M256 54v33m0 337v33m35-399.9l-5.7 32.5m-58.6 331.8l-5.7 32.5M324.9 66.2l-11.3 31M198.4 413.8l-11.3 31M221 57.1l5.7 32.5m58.6 331.8l5.7 32.5M187.1 66.2l11.3 31m115.2 316.6l11.3 31M155.2 81l16.6 28.6m168.5 291.8l16.5 28.6M126.5 101.1l21.2 25.3m216.6 258.2l21.2 25.3M101.6 126l25.3 21.2m258.2 216.6l25.3 21.2M81.5 154.8l28.6 16.5m291.8 168.5l28.6 16.5M66.7 186.6l31 11.3m316.6 115.2l31 11.3M57.6 220.5l32.5 5.7m331.8 58.6l32.5 5.7m-399.9-35h33m337 0h33m-399.9 35l32.5-5.7m331.8-58.6l32.5-5.7M66.7 324.4l31-11.3m316.6-115.2l31-11.3M81.5 356.3l28.6-16.5m291.8-168.5l28.6-16.5M101.6 385l25.3-21.2m258.2-216.6l25.3-21.2M126.5 409.9l21.2-25.3m216.6-258.2l21.2-25.3M155.2 430l16.6-28.6m168.5-291.8L356.8 81M238.4 54.8l1.6 17.9m32 365.6l1.6 17.9M203.8 60.9l4.7 17.4m95 354.4l4.7 17.4M170.8 72.9l7.6 16.3m155.1 332.6l7.7 16.3M140.4 90.4l10.3 14.8m210.6 300.6l10.3 14.8M113.5 113l12.7 12.7m259.6 259.6l12.7 12.7M90.9 139.9l14.8 10.3m300.6 210.6l14.8 10.3M73.4 170.3l16.3 7.6M422.3 333l16.3 7.7M61.4 203.3l17.4 4.7m354.4 95l17.4 4.7M55.3 237.9l17.9 1.6m365.6 32l17.9 1.6m-401.4 0l17.9-1.6m365.6-32l17.9-1.6M61.4 307.7l17.4-4.7m354.4-95l17.4-4.7M73.4 340.7l16.3-7.6m332.6-155.2l16.3-7.6M90.9 371.1l14.8-10.3m300.6-210.6l14.8-10.3M140.4 420.6l10.3-14.8m210.5-300.6l10.4-14.8M170.8 438.1l7.7-16.3m155-332.6l7.7-16.3M203.8 450.1l4.7-17.4m95-354.4l4.7-17.4m-69.8 395.3l1.6-17.9m32-365.6l1.6-17.9" stroke="#fff" stroke-width="3"/></symbol><symbol id="equatio-svg-premium-icon" viewBox="0 0 200.6 199.5"><path d="M70.2 74l77.3-51.5c.8-.5 1.6-1 2.5-1.4L194.6.8c4.8-2.2 7.3.1 5.4 5.1l-17.4 46.7c-.5 1.5-1.3 2.9-2.2 4.1l-52.7 73.5c-.4.5-.8 1-1.2 1.4l-42.7 42.8c-4.4 4.4-11.6 4.4-16 0L27.4 134c-4.4-4.4-4.4-11.4-.1-15.9l41-42.5c.6-.6 1.2-1.1 1.9-1.6z" fill="currentColor"/><path d="M67.8 75.5c-27.8-.2-50.2 8-65 33.2 6.6 2.8 18 6 25 8.6 1.3.5 26.3-27.9 40-41.8zm59 56c-13.8 13.6-43 41.4-42.5 43 2.5 7 6.6 15.9 9.3 22.3 25.7-14.8 33.4-37.4 33.2-65.3z" fill="currentColor"/><path d="M157.3 55.1c-.1-6.8-5.1-11.4-11.9-11.1-6.2.2-11.2 5.2-11.2 11.3 0 6.2 5.6 11.8 11.8 11.8 6.5-.1 11.4-5.3 11.3-12zm-42 42.3c6.9-.1 11.3-4.8 11.2-11.7-.1-7.1-4.5-11.2-11.7-11-6.8.2-11.3 5.1-11 12 .3 6.2 5.2 10.8 11.5 10.7zm-19.1 19.5c.2-6.7-4.6-11.8-11.4-11.9-6.8-.1-11.7 4.8-11.7 11.5 0 6.4 4.7 11.2 11 11.5 6.8.4 11.9-4.3 12.1-11.1z" fill="#a6ce3c"/><path d="M56.9 178.1c-3.3 2.5-6.8 5.5-10.6 8.1-3.1 2.2-6.3 4.9-9.8 5.9-9.9 2.8-19.9 4.9-29.9 7.1-4.3.9-7.5-.4-6.3-5.6 3.5-15.5 2.8-32.6 17.1-44.1 2-1.6 2.5-5.3 3.7-8.3 12.2 12.7 24.2 25 35.8 36.9zm-38.3 6.1c12.8.2 23.9-5.8 21.7-10.5-2.8-5.8-8.4-11.4-14.2-14.3-4.6-2.3-10.6 8.1-10.5 18.6-.1 2.3 2.2 4.7 3 6.2z" fill="currentColor"/><path d="M157.3 55.1c.1 6.7-4.8 11.9-11.3 11.9-6.3 0-11.8-5.5-11.8-11.8 0-6 5-11.1 11.2-11.3 6.8-.2 11.8 4.4 11.9 11.2zm-42 42.3c-6.3.1-11.3-4.5-11.5-10.8-.3-6.9 4.2-11.8 11-12 7.3-.2 11.6 3.9 11.7 11 .2 7.1-4.3 11.7-11.2 11.8zm-19.1 19.5c-.2 6.7-5.3 11.5-12 11.2-6.3-.3-11-5.2-11-11.5 0-6.7 4.9-11.6 11.7-11.5 6.7.1 11.5 5.1 11.3 11.8z" fill="#fff"/></symbol><symbol id="equatio-svg-premium-license" viewBox="0 0 340 234.5"><g opacity=".37"><radialGradient id="SVGID_1_" cx="336.384" cy="116107.898" r="288.534" gradientTransform="matrix(.256 0 0 .02555 -26.086 -2748.966)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d1e1c"/><stop offset=".146" stop-color="#1d1e1c" stop-opacity=".854"/><stop offset="1" stop-color="#1d1e1c" stop-opacity="0"/></radialGradient><path d="M60.1 203.3c-43.9 0-81.2 3.9-96.6 9.5v10.7c15.5 5.6 52.7 9.5 96.6 9.5 57.1 0 103.4-6.6 103.4-14.9 0-8.2-46.3-14.8-103.4-14.8z" fill="url(#SVGID_1_)"/></g><path d="M98.3 62.7H48c-7.2 0-13.1 5.8-13.1 13.1v94.3c0 7.2 5.8 13.1 13.1 13.1h6.5v33.2c0 1.1.9 1.9 1.9 1.9 1.1 0 1.9-.9 1.9-1.9v-33.2H62v33.2c0 1.1.9 1.9 1.9 1.9 1.1 0 1.9-.9 1.9-1.9v-33.2h6.5c7.2 0 13.1-5.8 13.1-13.1V82.7l15-15c2.7-2.7 1.8-5-2.1-5z" fill="#fd3269"/><g fill="#fff"><path d="M72.9 75.6c-1.6 0-3-1.3-3-3 0-1.6 1.3-3 3-3 1.6 0 3 1.3 3 3s-1.4 3-3 3z"/><circle cx="72.9" cy="72.6" r="3"/></g><path d="M111.7 78l-45.2 45.2c-1.2 1.2-3.1 1.2-4.2 0l-.7-.7c-1.2-1.2-1.2-3.1 0-4.2L106.8 73c1.2-1.2 3.1-1.2 4.2 0l.7.7c1.2 1.2 1.2 3.1 0 4.3z" fill="#fd3269"/><path d="M12.7 81.5l45.2 45.2c1.2 1.2 3.1 1.2 4.2 0l.7-.7c1.2-1.2 1.2-3.1 0-4.2L17.7 76.5c-1.2-1.2-3.1-1.2-4.2 0l-.7.7c-1.3 1.2-1.3 3.1-.1 4.3z" fill="#fd3269"/><path d="M194.4 83.4l77.3-51.5c.8-.5 1.6-1 2.5-1.4l44.6-20.3c4.8-2.2 7.3.1 5.4 5.1L306.8 62c-.5 1.5-1.3 2.9-2.2 4.1l-52.7 73.5c-.4.5-.8 1-1.2 1.4L208 183.8c-4.4 4.4-11.6 4.4-16 0l-40.4-40.4c-4.4-4.4-4.4-11.4-.1-15.9l41-42.5c.6-.6 1.2-1.1 1.9-1.6z" fill="#515f70"/><path d="M192 84.9c-27.8-.2-50.2 8-65 33.2 6.6 2.8 18 6 25 8.6 1.3.5 26.3-27.9 40-41.8zm59 56c-13.8 13.6-43 41.4-42.5 43 2.5 7 6.6 15.9 9.3 22.3 25.7-14.8 33.4-37.4 33.2-65.3z" fill="#00b7ff"/><path d="M281.5 64.5c-.1-6.8-5.1-11.4-11.9-11.1-6.2.2-11.2 5.2-11.2 11.3 0 6.2 5.6 11.8 11.8 11.8 6.5-.1 11.4-5.3 11.3-12zm-42 42.3c6.9-.1 11.3-4.8 11.2-11.7-.1-7.1-4.5-11.2-11.7-11-6.8.2-11.3 5.1-11 12 .3 6.2 5.2 10.8 11.5 10.7zm-19.1 19.5c.2-6.7-4.6-11.8-11.4-11.9-6.8-.1-11.7 4.8-11.7 11.5 0 6.4 4.7 11.2 11 11.5 6.8.4 11.9-4.3 12.1-11.1z" fill="#a6ce3c"/><path d="M181.1 187.5c-3.3 2.5-6.8 5.5-10.6 8.1-3.1 2.2-6.3 4.9-9.8 5.9-9.9 2.8-19.9 4.9-29.9 7.1-4.3.9-7.5-.4-6.3-5.6 3.5-15.5 2.8-32.6 17.1-44.1 2-1.6 2.5-5.3 3.7-8.3 12.2 12.7 24.2 25 35.8 36.9zm-38.3 6.1c12.8.2 23.9-5.8 21.7-10.5-2.8-5.8-8.4-11.4-14.2-14.3-4.6-2.3-10.6 8.1-10.5 18.6-.1 2.3 2.2 4.7 3 6.2z" fill="#00417c"/><path d="M281.5 64.5c.1 6.7-4.8 11.9-11.3 11.9-6.3 0-11.8-5.5-11.8-11.8 0-6 5-11.1 11.2-11.3 6.8-.2 11.8 4.4 11.9 11.2zm-42 42.3c-6.3.1-11.3-4.5-11.5-10.8-.3-6.9 4.2-11.8 11-12 7.3-.2 11.6 3.9 11.7 11 .2 7.1-4.3 11.7-11.2 11.8zm-19.1 19.5c-.2 6.7-5.3 11.5-12 11.2-6.3-.3-11-5.2-11-11.5 0-6.7 4.9-11.6 11.7-11.5 6.7.1 11.5 5.1 11.3 11.8z" fill="#fff"/></symbol><symbol id="equatio-svg-renew-reminder" viewBox="0 0 340 234.5"><path d="M102.5-418.4H39.1c-8.4 0-15.3 6.9-15.3 15.2v43.9c0 8.4 6.9 15.2 15.3 15.2H52v17.9c0 1 .8 1.8 1.9 1.8 1 0 1.9-.8 1.9-1.8V-344h3.5v17.9c0 1 .8 1.8 1.9 1.8 1 0 1.9-.8 1.9-1.8V-344H76c8.4 0 15.3-6.9 15.3-15.2v-38.1l14.3-14.3c3.4-3.7 2.2-6.8-3.1-6.8z" fill="#9f5dff"/><g fill="#fff"><path d="M79.5-405.1c-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.8 2.9-2.8 1.6 0 2.9 1.3 2.9 2.8 0 1.6-1.3 2.9-2.9 2.9z"/><ellipse cx="79.5" cy="-408" rx="2.9" ry="2.9"/></g><path d="M106.7-401.4c.4.7.2 1.6-.6 2.1l-15.8 9c-.7.4-1.6.2-2.1-.6-.4-.7-.2-1.6.6-2.1l15.8-9c.7-.4 1.6-.1 2.1.6zm-99.1.3c-.4.8 0 1.7.7 2l16.4 7.8c.8.4 1.7 0 2-.7.4-.8 0-1.7-.7-2l-16.4-7.8c-.8-.4-1.7-.1-2 .7z" fill="#9f5dff"/><g opacity=".37"><radialGradient id="SVGID_1_" cx="839.354" cy="84519.219" r="453.189" gradientTransform="matrix(.2376 0 0 .02555 -135.034 -2482.942)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d1e1c"/><stop offset=".146" stop-color="#1d1e1c" stop-opacity=".854"/><stop offset="1" stop-color="#1d1e1c" stop-opacity="0"/></radialGradient><path d="M64.5-346.4c-64 0-118.3 6.2-140.9 14.9v16.8c22.6 8.7 76.8 14.9 140.9 14.9 83.2 0 150.6-10.4 150.6-23.3.1-12.9-67.4-23.3-150.6-23.3z" fill="url(#SVGID_1_)"/></g><g opacity=".37"><radialGradient id="SVGID_2_" cx="1159.533" cy="95136.406" r="271.258" gradientTransform="matrix(.3648 0 0 .02555 -127.583 -2482.942)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d1e1c"/><stop offset=".146" stop-color="#1d1e1c" stop-opacity=".854"/><stop offset="1" stop-color="#1d1e1c" stop-opacity="0"/></radialGradient><path d="M295.6-65.7c-58.9 0-108.7 3.7-129.5 8.9v10.1c20.7 5.2 70.6 8.9 129.5 8.9C372-37.8 434-44 434-51.7c0-7.8-62-14-138.4-14z" fill="url(#SVGID_2_)"/></g><path d="M258.6-214H311c7.5 0 12.9 6.8 12.9 14.3v97.9c0 7.5-5.4 14.3-12.9 14.3h-5.8v33.7c0 1.1-1 2-2.1 2s-2.1-.9-2.1-2v-33.7h-4.1v33.7c0 1.1-1 2-2.1 2s-2.1-.9-2.1-2v-33.7h-7c-7.5 0-13.7-6.8-13.7-14.3v-90.8l-15.5-15.9c-2.9-2.8-1.9-5.5 2.1-5.5z" fill="#aeca37"/><g fill="#fff"><path d="M282-203c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.8 0-3.1-1.4-3.1-3.1z"/><circle cx="285" cy="-203" r="3.1"/></g><path d="M273.6-154.3c1.3-.1 2.2-1.2 2.1-2.5-.1-1.3-1.2-2.2-2.5-2.1l-18.2 1.6c-1.3.1-2.2 1.2-2.1 2.5.1 1.3 1.2 2.2 2.5 2.1h.2l3.4 38.4c.4 4.9 4.8 8.5 9.7 8.1 4.9-.4 8.5-4.8 8.1-9.7l-3.4-38.4h.2z" opacity=".43" fill="#fff"/><path d="M268.8-105.3c-5.4.5-10.1-3.5-10.6-8.9l-3.4-37.6c-1.4-.2-2.6-1.3-2.8-2.8-.2-1.7 1.1-3.3 2.9-3.4l18.2-1.6c1.7-.2 3.3 1.1 3.4 2.9.1 1.5-.8 2.9-2.2 3.3l3.4 37.6c.5 5.2-3.5 10-8.9 10.5zm-13.7-51c-.8.1-1.3.8-1.3 1.5.1.8.8 1.3 1.5 1.3l1.1-.1 3.5 39.3c.4 4.4 4.3 7.7 8.7 7.3s7.7-4.3 7.3-8.7l-3.5-39.3 1.1-.1c.8-.1 1.3-.8 1.3-1.5-.1-.8-.8-1.3-1.5-1.3l-18.2 1.6z" fill="#ebeff2"/><path d="M259.6-137.6l2.1 23.1c.3 3.5 3.4 6.1 7 5.8 3.5-.3 6.1-3.4 5.8-7l-2.1-23.1-12.8 1.2z" fill="#e94e68"/><path d="M294.7-129c0 1.1-.9 2.1-2.1 2.1h-24.9c-1.1 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1h24.9c1.2.1 2.1 1 2.1 2.1z" fill="#aeca37"/><path d="M106.6-66c-54 0-98-44-98-98s44-98 98-98 98 44 98 98-43.9 98-98 98z" fill="#eaf0f4"/><path d="M107.9-260.8c-53.3 0-96.8 43.3-96.8 96.6s43.4 96.6 96.8 96.6 96.8-43.3 96.8-96.6c-.1-53.3-43.5-96.6-96.8-96.6zm0 176c-43.9 0-79.5-35.5-79.5-79.4 0-43.8 35.6-79.4 79.5-79.4s79.5 35.5 79.5 79.4c0 43.9-35.6 79.4-79.5 79.4z" fill="#000623"/><path d="M161.3-245.3c-.1-.1-.1-.1-.2-.1L51.8-82.8c.1 0 .1.1.2.2 44.9 30.1 105.9 18.2 136-26.7 30.1-44.9 18.2-105.9-26.7-136z" fill="#dfe5ea"/><path d="M106.6-262c-54 0-98 44-98 98s44 98 98 98 98-44 98-98-43.9-98-98-98zm0 178.5c-44.5 0-80.5-36-80.5-80.5s36-80.5 80.5-80.5 80.5 36 80.5 80.5c.1 44.5-36 80.5-80.5 80.5z" fill="#515f70"/><path fill="#00b7ff" d="M74.1-113l5 2.9-8 13.8-5-2.9 8-13.8zm68-117.9l5.1 2.9-8 13.8-5-2.9 7.9-13.8zm-89 94.8L56-131l-13.8 7.9-2.9-5 13.8-8zM171-204.2l3 5.1-13.8 8-3-5.1 13.8-8zM46.5-166.5v5.8H30.6v-5.8h15.9zm136.2 0v5.8h-15.9v-5.8h15.9zM56-196.2l-2.9 5.1-13.8-8 2.9-5.1 13.8 8zm118 68.1l-3 5-13.8-7.9 3-5.1 13.8 8zm-94.9-89l-5 2.9-8-13.8 5-2.9 8 13.8zm68.1 117.9l-5.1 2.9-7.9-13.8 5-2.9 8 13.8zm-37.6-124.5h-5.9v-16h5.9v16zm0 136.1h-5.9v-15.9h5.9v15.9z"/><path d="M104.7-169.4c0-.4.1-.7.3-.9h-.3L90-209.6c-.5-1.3-2-2-3.3-1.5-1.3.5-2 2-1.5 3.3l15.1 40.5c1.7 0 4.2-.3 4.4-2.1z" fill="#00417c"/><path d="M127.7-178.5c-1-1.6-3.1-2-4.7-1l-14.7 9.5c-1.1-.5-2.4-.6-3.6-.4 0 0-3.5 1.4-4.4 3.1s-1.2 3.7-.5 5.6c1.3 3.4 5 5.1 8.3 3.8 2.8-1 4.4-3.8 4.2-6.6l14.3-9.3c1.7-1 2.1-3.1 1.1-4.7z" fill="#00417c"/><g fill-rule="evenodd" clip-rule="evenodd"><g fill="#00417c"><path d="M222.3-117.4c-2.6.1-4.5 3.4-4.4 7.3L216.8-97l3.3.1 1.5-5.6v-.1c.5.2 1 .3 1.5.3 2.7-.1 4.6-3.6 4.4-7.8-.2-4.2-2.5-7.5-5.2-7.3zm.1 1.8c2-.1 3.8 2.4 3.9 5.5.2 3.1-1.3 5.8-3.3 5.9-2 .1-3.8-2.4-4-5.5-.1-3.1 1.4-5.8 3.4-5.9z"/><path d="M219.4-96.9l-2.9 34.8-2.2-31.7 3-3.2zm-7.9-20.6c2.6.2 4.4 3.4 4.3 7.4l.9 13.1-3.3.1-1.5-5.6v-.1c-.5.2-1 .3-1.5.3-2.7-.2-4.6-3.7-4.3-7.9.3-4.3 2.7-7.5 5.4-7.3zm-.1 1.8c-2-.1-3.8 2.3-4 5.4-.2 3.1 1.2 5.8 3.2 5.9 2 .1 3.8-2.3 4-5.4.2-3.1-1.2-5.7-3.2-5.9z"/><path d="M214.1-97l2.4 34.9 2.7-31.7-3-3.2z"/><ellipse transform="matrix(.06818 -.9977 .9977 .06818 291.917 132.18)" cx="216.7" cy="-90.2" rx=".9" ry=".8"/></g><path d="M215.7-80.1l13.5-50.6c.1-.5.7-.8 1.2-.7l7.3 1.9c.5.1.8.7.7 1.2l-13.6 50.6c-.1.5-.7.8-1.2.7l-7.3-1.9c-.4-.1-.7-.6-.6-1.2z" fill="#00417c"/><path transform="rotate(-75.167 218.038 -80.378)" fill="#fff" d="M217.8-82.5h.4v4.3h-.4z"/><path fill="#fff" d="M216.1-81.6l.1-.4 2 .5-.1.4zm.3-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 2 .5-.1.4zm.2-.9l.2-.4 2 .5-.2.4zm.3-.9l.1-.4 4.2 1.1-.1.4zm.2-.9l.1-.4 2 .6-.1.4zm.3-.9l.1-.4 2 .6-.1.4zm.2-.9l.1-.4 2 .6-.1.4zm.2-.8l.1-.5 2.1.6-.2.4zm.3-.9l.1-.4 4.2 1.1-.1.4zm.2-.9l.1-.4 2 .5-.1.4zm.3-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 2 .5-.1.4zm.3-.9l.1-.4 4.2 1.1-.1.4z"/><path transform="rotate(-74.942 220.76 -94.918)" fill="#fff" d="M220.6-96h.4v2.1h-.4z"/><path fill="#fff" d="M219.9-95.9l.2-.4 2 .6-.1.4zm.3-.9l.1-.4 2 .6-.1.4zm.2-.9l.1-.4 2 .6-.1.4zm.3-.8l.1-.5 4.2 1.2-.1.4z"/><path transform="rotate(-74.966 221.954 -99.371)" fill="#fff" d="M221.7-100.4h.4v2.1h-.4z"/><path fill="#fff" d="M221.1-100.3l.1-.4 2.1.5-.2.4zm.3-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 2 .5-.1.4zm.3-.9l.1-.4 4.2 1.1-.2.4z"/><path transform="rotate(-74.971 223.147 -103.817)" fill="#fff" d="M222.9-104.9h.4v2.1h-.4z"/><path fill="#fff" d="M222.3-104.8l.1-.4 2 .5-.1.5zm.3-.9l.1-.4 2 .6-.1.4zm.2-.9l.1-.4 2 .6-.1.4zm.2-.8l.2-.5 4.2 1.2-.2.4z"/><path transform="rotate(-74.966 224.34 -108.277)" fill="#fff" d="M224.1-109.3h.4v2.1h-.4z"/><path fill="#fff" d="M223.5-109.2l.1-.4 2 .5-.1.4zm.3-.9l.1-.4 2 .5-.1.4z"/><path transform="rotate(-75.173 225.057 -110.94)" fill="#fff" d="M224.8-112h.4v2.1h-.4z"/><path fill="#fff" d="M224.2-111.9l.2-.4 4.1 1.1-.1.4zm.3-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 2 .5-.1.5zm.3-.9l.1-.4 2 .6-.1.4z"/><path transform="rotate(-74.935 226.262 -115.406)" fill="#fff" d="M226-116.4h.4v2.1h-.4z"/><path fill="#fff" d="M225.4-116.4l.1-.4 4.2 1.2-.1.4z"/><path fill="#fff" d="M225.4-116.4l.1-.4 4.2 1.2-.1.4z"/><path transform="rotate(-75.202 226.737 -117.181)" fill="#fff" d="M226.5-118.2h.4v2.1h-.4z"/><path transform="rotate(-74.966 226.965 -118.073)" fill="#fff" d="M226.8-119.1h.4v2.1h-.4z"/><path fill="#fff" d="M226.2-119l.1-.4 2 .5-.1.4z"/><path transform="rotate(-74.935 227.456 -119.86)" fill="#fff" d="M227.2-120.9h.4v2.1h-.4z"/><path fill="#fff" d="M226.6-120.8l.1-.4 4.2 1.1-.1.4z"/><path transform="rotate(-75.167 227.92 -121.637)" fill="#fff" d="M227.7-122.7h.4v2.1h-.4z"/><path transform="rotate(-74.942 228.157 -122.526)" fill="#fff" d="M227.9-123.6h.4v2.1h-.4z"/><path fill="#fff" d="M227.3-123.5l.2-.4 2 .5-.2.5z"/><path transform="rotate(-74.942 228.635 -124.309)" fill="#fff" d="M228.4-125.3h.4v2.1h-.4z"/><path fill="#fff" d="M227.8-125.3l.1-.4 4.2 1.2-.1.4zm.3-.8l.1-.5 2 .6-.1.4zm.2-.9l.1-.5 2 .6-.1.4zm.2-.9l.1-.4 2.1.5-.2.4zm.3-.9l.1-.4 2 .5-.1.4zm.2-.9l.1-.4 4.2 1.1-.1.4z"/><g fill="#00417c"><path d="M201.3-101.9l.1-7.1 3.6 6.1-.8.6-1.9.5z"/><path d="M202.3-101.7l6.4 23.8-.9.3-6.4-23.8c-.1-.5 0-1 .2-1.1.2-.1.6.3.7.8z"/><path d="M203-102.9c.5-.1 1 .2 1.2.7l6.4 23.8-1.9.5-6.4-23.8c-.1-.5.2-1.1.7-1.2z"/><path d="M205.1-102.5l6.4 23.8-.9.3-6.4-23.8c-.1-.5 0-1 .2-1.1.3 0 .6.3.7.8zm-3.7-4.3v-2.2l1 1.9z"/></g><g fill="#00417c"><path d="M209-107l1.5-6.9 2.3 6.7-.9.4-2 .1z"/><path d="M209.9-106.6l1.4 24.6-1 .1-1.4-24.6c0-.5.2-1 .4-1 .4-.1.6.3.6.9z"/><path d="M210.8-107.7c.5 0 1 .4 1 .9l1.4 24.6-1.9.1-1.4-24.6c0-.5.4-.9.9-1z"/><path d="M212.8-106.8l1.4 24.6-1 .1-1.4-24.6c0-.5.2-1 .4-1 .4-.1.6.4.6.9zm-2.7-5.1l.4-2 .7 2z"/></g><path d="M226.3-55.3h3.9v-31.9l-3.9-1.1zm-23.2-33.5h23.2v33.5h-23.2z" fill="#00417c"/></g><g opacity=".37"><radialGradient id="SVGID_3_" cx="614.705" cy="51718.18" r="108.793" gradientTransform="matrix(.6084 0 0 .05166 -319.539 -2454.731)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d1e1c"/><stop offset=".074" stop-color="#151514" stop-opacity=".926"/><stop offset=".239" stop-color="#090909" stop-opacity=".761"/><stop offset=".462" stop-color="#020202" stop-opacity=".538"/><stop offset="1" stop-opacity="0"/></radialGradient><path d="M54.4 205.9c-39.4 0-73 3-86.4 7.2v8.2c13.4 4.2 47 7.2 86.4 7.2 51.2 0 92.6-5.1 92.6-11.3.1-6.2-41.4-11.3-92.6-11.3z" fill="url(#SVGID_3_)"/></g><path d="M80.6 168c0 7.3-5.9 13.3-13.3 13.3H42.5c-7.3 0-13.3-5.9-13.3-13.3V72c0-7.3 5.9-13.3 13.3-13.3h24.7c7.3 0 13.3 6 13.3 13.3v96z" fill="#fd3269"/><path d="M60.3 92.2c0 3.9 2.3 4.8 5 2.1l30.5-30.5c2.8-2.8 1.8-5-2.1-5H67.4c-3.9 0-7.1 3.2-7.1 7.1v26.3z" fill="#fd3269"/><path d="M75.3 46.6c-.9 1.9-5.2 2.6-2.9 5.9-2.4-2.9-3.4-10.8.5-13.5 5-3.5 10.7 5.9 2.4 7.6zm-36.1 0c.9 1.9 5.2 2.6 2.9 5.9 2.3-2.9 3.3-10.9-.5-13.5-5-3.5-10.7 5.9-2.4 7.6z" fill="#53a2da"/><path d="M51.1 215.1v-41.2m0 43.1c-1.1 0-2-.9-2-2v-41.2c0-1.1.9-2 2-2s2 .9 2 2V215c0 1.1-.9 2-2 2zm7.6-1.9v-37.9m0 39.8c-1.1 0-2-.9-2-2v-37.9c0-1.1.9-2 2-2s2 .9 2 2V215c0 1.1-.9 2-2 2z" fill="#fd3269"/><path d="M60.3 97.3s4.8 2.1 8.4.6c0 0-6.8 4.4-8.4-.6z" opacity=".4" fill="#221e20"/><path d="M47.9 98.6S51.5 88.5 62.6 87c11-1.5 9.1 9.2 9.1 9.2l-23.8 2.7" fill="#841627"/><g fill="#fdf6fa"><path d="M62.6 87c-4.6.6-8 2.8-10.3 5 0 .1-1 5.2 4.1 4.2l13.1-1.7s1.3-.9 2.1-2.1c-.5-2.9-2.5-6.3-9-5.4z"/><path d="M52.3 92.1c-.3.3-.5.5-.7.8l.7-.8z"/></g><path d="M54.6 98s6.5-9.9 14.9-2.1c0 0 2.9 2.7-3.6 3-6.5.2-5.5-1.7-5.5-1.7l-4.6.8" fill="#ce544c"/><path d="M59.4 94.1s6.2-.6 7.4 1.6c1.1 2.2-.8-2.1-7.4-1.5" opacity=".1" fill="#221e20"/><path d="M68.8 70.8s-6-2.7-8.9 2.5" fill="none" stroke="#fff" stroke-width="1.855" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><path d="M71.2 77.8l18.2 20c.5.5 1.3.5 1.8 0l2.5-2.5c.5-.5.5-1.3 0-1.8l-18.2-20c-.5-.5-1.3-.5-1.8 0L71.2 76c-.5.5-.5 1.3 0 1.8z" fill="#fff"/><g fill="#fd3269"><path d="M94.8 95l-15.1 26.7c-.4.6-1.1.8-1.8.5l-3.1-1.8c-.6-.4-.8-1.1-.5-1.8l15.1-26.7c.4-.6 1.1-.8 1.8-.5l3.1 1.8c.6.4.8 1.2.5 1.8z"/><path d="M72.1 77.8l18.2 20c.5.5 1.3.5 1.8 0l2.5-2.5c.5-.5.5-1.3 0-1.8l-18.2-20c-.5-.5-1.3-.5-1.8 0L72.1 76c-.5.5-.5 1.3 0 1.8z"/></g><path d="M103.8 198.3c2 5.7 8.5 10.5 13.7 11.6.7.1 1.3 1.2 2 1.3l.3 4.7c0 .6.5.9 1.1.9h25.6c.6 0 1.1-.2 1.1-.9l2.2-40.2c0-.6-.5-1.1-1.1-1.1h-30.1c-.6 0-1.1.6-1.1 1.2l.3 4.7c-1.4-.6-2.9-.9-4.4-.9-1.1 0-2.1.2-3.2.5-6.2 2.4-9.1 10.5-6.4 18.2zm4.3-9.5c.4-1.2 1.4-3.2 3.6-4 .5-.2 1.1-.3 1.6-.3 2.8 0 3.8 2.9 5 6.4l.8 13.9-.1.1c-3.4 0-9.2-3.8-10.8-8.2-.9-2.6-1-5.5-.1-7.9z" fill="#00417c"/><path d="M37.1 111l-24.9 26.1c-.5.5-1.3.5-1.8.1l-2.6-2.4c-.5-.5-.5-1.3-.1-1.8l24.9-26.1c.5-.5 1.3-.5 1.8-.1l2.6 2.4c.6.5.6 1.3.1 1.8z" fill="#fd3269"/><path d="M236 203c-54 0-98-44-98-98s44-98 98-98 98 44 98 98-44 98-98 98z" fill="#eaf0f4"/><path d="M237.2 8.2c-53.4 0-96.8 43.4-96.8 96.6 0 53.3 43.4 96.6 96.8 96.6S334 158 334 104.8c0-53.3-43.4-96.6-96.8-96.6zm0 176c-43.9 0-79.5-35.5-79.5-79.4 0-43.9 35.6-79.4 79.5-79.4s79.5 35.5 79.5 79.4c0 43.9-35.6 79.4-79.5 79.4z" fill="#000623"/><path d="M290.7 23.7c-.1-.1-.1-.1-.2-.1L181.1 186.2c.1 0 .1.1.2.2 44.9 30.1 105.9 18.2 136-26.7 30.2-44.9 18.2-105.9-26.6-136z" fill="#dfe5ea"/><path d="M236 7c-54 0-98 44-98 98s44 98 98 98 98-44 98-98c0-54.1-44-98-98-98zm0 178.5c-44.5 0-80.5-36.1-80.5-80.5 0-44.5 36.1-80.5 80.5-80.5 44.5 0 80.5 36.1 80.5 80.5 0 44.5-36 80.5-80.5 80.5z" fill="#515f70"/><path fill="#00b7ff" d="M203.4 156l5 2.9-7.9 13.8-5.1-2.9 8-13.8zm68.1-118l5 3-7.9 13.7-5.1-2.9 8-13.8zm-89.1 94.9l3 5.1-13.8 7.9-3-5 13.8-8zm118-68.1l2.9 5.1-13.8 7.9-2.9-5 13.8-8zm-124.6 37.7v5.8h-15.9v-5.8h15.9zm136.2 0v5.8h-15.9v-5.8H312zM185.4 72.8l-3 5-13.8-7.9 3-5.1 13.8 8zm117.9 68.1l-2.9 5-13.8-7.9 2.9-5.1 13.8 8zm-94.9-89.1l-5 2.9-8-13.7 5.1-3 7.9 13.8zm68.1 118l-5 2.9-8-13.8 5.1-2.9 7.9 13.8zM238.9 45.2h-5.8V29.3h5.8v15.9zm0 136.2h-5.8v-15.9h5.8v15.9z"/><circle cx="236" cy="106.9" r="7" fill="#00417c"/><path d="M236.3 123.5h-.6c-1.3 0-2.4-1.1-2.4-2.4V55c0-1.3 1.1-2.4 2.4-2.4h.6c1.3 0 2.4 1.1 2.4 2.4v66.1c0 1.3-1.1 2.4-2.4 2.4z" fill="#00417c"/><g opacity=".37"><radialGradient id="SVGID_4_" cx="332.884" cy="116380.898" r="288.534" gradientTransform="matrix(.256 0 0 .02555 -28.69 -2482.942)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d1e1c"/><stop offset=".146" stop-color="#1d1e1c" stop-opacity=".854"/><stop offset="1" stop-color="#1d1e1c" stop-opacity="0"/></radialGradient><path d="M56.6 476.3c-43.9 0-81.2 3.9-96.6 9.5v10.7c15.5 5.6 52.7 9.5 96.6 9.5 57.1 0 103.4-6.6 103.4-14.9 0-8.2-46.3-14.8-103.4-14.8z" fill="url(#SVGID_4_)"/></g><path d="M94.8 335.7H44.5c-7.2 0-13.1 5.8-13.1 13.1v94.3c0 7.2 5.8 13.1 13.1 13.1H51v33.2c0 1.1.9 1.9 1.9 1.9 1.1 0 1.9-.9 1.9-1.9v-33.2h3.6v33.2c0 1.1.9 1.9 1.9 1.9 1.1 0 1.9-.9 1.9-1.9v-33.2h6.5c7.2 0 13.1-5.8 13.1-13.1v-87.4l15-15c2.8-2.7 1.9-5-2-5z" fill="#fd3269"/><g fill="#fff"><path d="M69.4 348.6c-1.6 0-3-1.3-3-3 0-1.6 1.3-3 3-3 1.6 0 3 1.3 3 3s-1.4 3-3 3z"/><circle cx="69.4" cy="345.6" r="3"/></g><path d="M108.2 351L63 396.1c-1.2 1.2-3.1 1.2-4.2 0l-.7-.7c-1.2-1.2-1.2-3.1 0-4.2l45.2-45.2c1.2-1.2 3.1-1.2 4.2 0l.7.7c1.2 1.2 1.2 3.1 0 4.3z" fill="#fd3269"/><path d="M9.2 354.5l45.2 45.2c1.2 1.2 3.1 1.2 4.2 0l.7-.7c1.2-1.2 1.2-3.1 0-4.2l-45.2-45.2c-1.2-1.2-3.1-1.2-4.2 0l-.7.7c-1.2 1.1-1.2 3 0 4.2z" fill="#fd3269"/><path d="M190.9 356.4l77.3-51.5c.8-.5 1.6-1 2.5-1.4l44.6-20.3c4.8-2.2 7.3.1 5.4 5.1L303.3 335c-.5 1.5-1.3 2.9-2.2 4.1l-52.7 73.5c-.4.5-.8 1-1.2 1.4l-42.7 42.7c-4.4 4.4-11.6 4.4-16 0l-40.4-40.4c-4.4-4.4-4.4-11.4-.1-15.9l41-42.4c.6-.6 1.2-1.1 1.9-1.6z" fill="#515f70"/><path d="M188.5 357.9c-27.8-.2-50.2 8-65 33.2 6.6 2.8 18 6 25 8.6 1.3.5 26.3-27.9 40-41.8zm59 56c-13.8 13.6-43 41.4-42.5 43 2.5 7 6.6 15.9 9.3 22.3 25.7-14.8 33.4-37.4 33.2-65.3z" fill="#00b7ff"/><path d="M278 337.5c-.1-6.8-5.1-11.4-11.9-11.1-6.2.2-11.2 5.2-11.2 11.3 0 6.2 5.6 11.8 11.8 11.8 6.5-.1 11.4-5.3 11.3-12zm-42 42.3c6.9-.1 11.3-4.8 11.2-11.7-.1-7.1-4.5-11.2-11.7-11-6.8.2-11.3 5.1-11 12 .3 6.2 5.2 10.8 11.5 10.7zm-19.1 19.5c.2-6.7-4.6-11.8-11.4-11.9-6.8-.1-11.7 4.8-11.7 11.5 0 6.4 4.7 11.2 11 11.5 6.8.4 11.9-4.3 12.1-11.1z" fill="#a6ce3c"/><path d="M177.6 460.5c-3.3 2.5-6.8 5.5-10.6 8.1-3.1 2.2-6.3 4.9-9.8 5.9-9.9 2.8-19.9 4.9-29.9 7.1-4.3.9-7.5-.4-6.3-5.6 3.5-15.5 2.8-32.6 17.1-44.1 2-1.6 2.5-5.3 3.7-8.3 12.2 12.7 24.2 25 35.8 36.9zm-38.3 6.1c12.8.2 23.9-5.8 21.7-10.5-2.8-5.8-8.4-11.4-14.2-14.3-4.6-2.3-10.6 8.1-10.5 18.6-.1 2.3 2.2 4.7 3 6.2z" fill="#00417c"/><path d="M278 337.5c.1 6.7-4.8 11.9-11.3 11.9-6.3 0-11.8-5.5-11.8-11.8 0-6 5-11.1 11.2-11.3 6.8-.2 11.8 4.4 11.9 11.2zm-42 42.3c-6.3.1-11.3-4.5-11.5-10.8-.3-6.9 4.2-11.8 11-12 7.3-.2 11.6 3.9 11.7 11 .2 7.1-4.3 11.7-11.2 11.8zm-19.1 19.5c-.2 6.7-5.3 11.5-12 11.2-6.3-.3-11-5.2-11-11.5 0-6.7 4.9-11.6 11.7-11.5 6.7.1 11.5 5.1 11.3 11.8z" fill="#fff"/><path transform="rotate(-15.729 212.668 -509.518)" fill="#00417c" d="M182.9-510.9h59.5v2.7h-59.5z"/><path transform="rotate(-15.729 216.523 -495.831)" fill="#00417c" d="M186.8-497.2h59.5v2.7h-59.5z"/><path transform="rotate(-15.729 220.377 -482.144)" fill="#00417c" d="M190.6-483.5h59.5v2.7h-59.5z"/><ellipse transform="rotate(-15.729 196.877 -504.864)" cx="196.9" cy="-504.9" rx="5" ry="5" fill="#00417c"/><path d="M197.8-509.8c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.4-1.8-2-3.1-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 206.448 -507.559)" cx="206.5" cy="-507.6" rx="5" ry="5" fill="#00417c"/><path d="M207.4-512.5c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.8-2-3.1-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 221.813 -497.024)" cx="221.8" cy="-497.1" rx="5" ry="5" fill="#00417c"/><path d="M222.8-501.9c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.9-2-3.2-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 210.523 -479.192)" cx="210.5" cy="-479.2" rx="5" ry="5" fill="#00417c"/><path d="M211.5-484.1c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.9-2-3.2-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 234.417 -500.574)" cx="234.4" cy="-500.6" rx="5" ry="5" fill="#00417c"/><path d="M235.4-505.5c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.8-2-3.1-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 221.375 -482.248)" cx="221.4" cy="-482.3" rx="5" ry="5" fill="#00417c"/><path d="M222.3-487.2c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.4-1.8-2-3.1-3.8-3.5z" fill="#e6e6e6"/><ellipse transform="rotate(-15.729 224.412 -512.618)" cx="224.4" cy="-512.7" rx="5" ry="5" fill="#00417c"/><path d="M225.4-517.5c.5.6.9 1.2 1.1 2 .7 2.6-.8 5.4-3.4 6.1-.8.2-1.5.2-2.3.1 1.2 1.3 3.1 2 5 1.4 2.6-.7 4.2-3.5 3.4-6.1-.5-1.9-2-3.2-3.8-3.5z" fill="#e6e6e6"/><g fill="#00417c"><path d="M196-459c-1.5.4-2.9-.5-3.3-1.9l-13.6-48.4c-.4-1.5.4-3 1.8-3.4 1.5-.4 2.9.5 3.3 1.9l13.6 48.4c.4 1.5-.3 3-1.8 3.4z"/><path d="M180.9-512.7L196-459c1.7-.5 2.2-1.9 1.8-3.4l-13.6-48.4c-.4-1.4-1.6-2.4-3.3-1.9z"/></g><g fill="#00417c"><path d="M252.9-475c-1.5.4-3.3-.3-3.7-1.8l-13.6-48.4c-.4-1.5.8-3.1 2.3-3.5 1.5-.4 3.3.3 3.7 1.8l13.6 48.4c.4 1.5-.8 3.1-2.3 3.5z"/><path d="M238.2-528.8l15.1 53.7c.9-.2 2.2-1.9 1.8-3.4l-13.6-48.4c-.4-1.5-2.4-2.2-3.3-1.9z"/></g><g fill="#00417c"><path d="M256-474.2l-62.1 17.5c-2.2.6-4.4-.5-5-2.7-.6-2.2.7-4.3 2.9-5l62.1-17.5c2.2-.6 4.4.5 5 2.7.6 2.2-.7 4.4-2.9 5z"/><path d="M188.7-459.9c.7 2.6 3 3.8 5.2 3.2l62.1-17.5c2.2-.6 3.5-2.8 2.8-5.4l-70.1 19.7z"/></g><path fill="#515f70" d="M116.3-424H232v98.4H116.3z"/><path fill="#3b4651" d="M205-368.3l6.8 1.8-1.8 6.8 6.7 1.8-1.8 6.8 55.1-31.8-17.3-30.1-50.8 29.3-1.9 6.8 6.8 1.8z"/><path fill="#3b4651" d="M231.9-424.1h-29.4l29.4 51.2z"/><path transform="rotate(-30 248.031 -390.877)" fill="#515f70" d="M227.8-454.6h40.5v127.3h-40.5z"/><path fill="#00b7ff" d="M207.9-370l6.7 1.8-1.8 6.8 6.8 1.8-1.8 6.8 55.1-31.9-17.4-30-50.8 29.3-1.8 6.8 6.8 1.8zm101.2-65.9c4.1-15.4-5-31.3-20.5-35.4-15.4-4.1-31.3 5-35.4 20.5-4.1 15.4 17.4 47 17.4 47s34.3-16.7 38.5-32.1zm-38.7-10.4c4.1-15.4 15.6-15.1 15.6-15.1s2.6 3.4-1.5 18.9c-4.1 15.4-14.6 26.9-14.6 26.9s-3.7-15.3.5-30.7z"/><path d="M338-385.8c4.1-15.4-5-31.3-20.5-35.4-15.4-4.1-47 17.4-47 17.4s16.6 34.4 32 38.5c15.5 4.1 31.4-5.1 35.5-20.5zm-30.8 3.3c-15.4-4.1-26.9-14.6-26.9-14.6s15.2-3.6 30.7.5c15.4 4.1 15.1 15.6 15.1 15.6s-3.5 2.6-18.9-1.5z" fill="#00b7ff"/><ellipse transform="rotate(-30 265.58 -401.035)" cx="265.6" cy="-401" rx="17.4" ry="17.4" fill="#07a1d1"/><g fill="#00b7ff"><path d="M151.5-432.8h-10.8c-.5 0-1.1-.1-1.4-.5l-24-24c-.4-.4-.6-.9-.6-1.4v-10.8c0-.5.2-1.1.6-1.4l24-23.9c.4-.4.9-.5 1.4-.5h10.8c.5 0 1.1.1 1.4.5l24.1 24c.4.4.7.9.7 1.4v10.8c0 .5-.3 1.1-.7 1.4l-24 23.9c-.4.3-1 .5-1.5.5zm-10-4h9.1l22.6-22.8v-9.1l-22.6-22.8h-9.1l-22.9 22.8v9.1l22.9 22.8zm34-22z"/><path d="M146.7-447.8c-.2 0-.4-.1-.5-.2l-15.3-15.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l15.3 15.3c.3.3.3.8 0 1.1-.2.1-.4.2-.6.2z"/><path d="M142.1-442.6c-.4 0-.8-.2-1.1-.5l-23.5-23.5c-.6-.6-.6-1.6 0-2.2.6-.6 1.6-.6 2.2 0l22.4 22.4 2.9-2.9c.6-.6 1.6-.6 2.2 0 .6.6.6 1.6 0 2.2l-4 4c-.2.4-.6.5-1.1.5z"/><path d="M145.8-448.3c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l15.3-15.3c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-15.3 15.3c-.2.1-.4.2-.6.2z"/><path d="M142.1-434.8c-.4 0-.8-.2-1.1-.5-.6-.6-.6-1.6 0-2.2l22.4-22.4-2.9-2.9c-.6-.6-.6-1.6 0-2.2.6-.6 1.6-.6 2.2 0l4 4c.6.6.6 1.6 0 2.2l-23.5 23.5c-.3.4-.7.5-1.1.5z"/><path d="M160.8-463.3c-.2 0-.4-.1-.5-.2L145-478.8c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l15.3 15.3c.3.3.3.8 0 1.1-.2.2-.4.2-.6.2z"/><path d="M173.6-458.7c-.4 0-.8-.2-1.1-.5l-22.4-22.4-2.9 2.9c-.6.6-1.6.6-2.2 0-.6-.6-.6-1.6 0-2.2l4-4c.6-.6 1.6-.6 2.2 0l23.5 23.5c.6.6.6 1.6 0 2.2-.3.3-.7.5-1.1.5z"/><path d="M130.7-462.7c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l15.3-15.3c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-15.3 15.3c-.2.1-.4.2-.6.2z"/><path d="M130.3-462.5c-.4 0-.8-.2-1.1-.5l-4-4c-.6-.6-.6-1.6 0-2.2l23.5-23.5c.6-.6 1.6-.6 2.2 0 .6.6.6 1.6 0 2.2l-22.4 22.4 2.9 2.9c.6.6.6 1.6 0 2.2-.3.3-.7.5-1.1.5z"/></g><path fill="#00b7ff" d="M176-391.6l-5.1 5.1-5.1-5.1-5.2 5.1-5.1-5.1v65.9h36v-60.8l-5.2-5.1-5.1 5.1z"/></symbol><symbol id="equatio-svg-speech-indicator" viewBox="0 0 4.8 19.5"><style>@keyframes equatio-speech-indicator-fade-1{0%{opacity:0}40%,to{opacity:1}}@keyframes equatio-speech-indicator-fade-2{0%{opacity:0}80%,to{opacity:1}}@keyframes equatio-speech-indicator-fade-3{0%{opacity:0}95%,to{opacity:1}}.equatio-speech-indicator-st0{animation:equatio-speech-indicator-fade-1 1s infinite alternate}.equatio-speech-indicator-st1{animation:equatio-speech-indicator-fade-2 1s infinite alternate}.equatio-speech-indicator-st2{animation:equatio-speech-indicator-fade-3 1s infinite alternate}.equatio-speech-indicator-st0,.equatio-speech-indicator-st1,.equatio-speech-indicator-st2{fill:#90d850;opacity:0}</style><circle class="equatio-speech-indicator-st0" cx="2.4" cy="2.4" r="2.4"/><circle class="equatio-speech-indicator-st1" cx="2.4" cy="10.7" r="1.7"/><circle class="equatio-speech-indicator-st2" cx="2.4" cy="18.3" r="1.2"/></symbol><symbol id="equatio-svg-speech-pause" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><path fill="#f7bcbc" d="M17.1 14.9h5.1v17.5h-5.1zm8.6 0h5.1v17.5h-5.1z"/></symbol><symbol id="equatio-svg-speech-start" viewBox="0 0 48 48"><circle cx="24" cy="24" r="18" fill="currentColor"/><circle cx="24" cy="24" r="7.8" fill="#d11515"/></symbol><symbol id="equatio-svg-texthelp-logo" viewBox="0 0 106.944 21.092"><path d="M23.527 6.748c-.729 0-1.011-.306-1.011-.87v-.165c0-.564.282-.87 1.011-.87h.823V3.104c0-.8.4-1.106 1.034-1.106h.235c.611 0 1.011.235 1.011 1.106v1.739h2.563c.729 0 .987.282.987.847v.164c0 .588-.282.894-1.011.894h-2.562v5.713c0 1.41.4 2.092 1.505 2.092.729 0 1.246-.329 1.599-.8.07-.07.658.259.658.988 0 .87-.964 1.716-2.633 1.716-2.328 0-3.386-1.293-3.386-3.738V6.748h-.823zm13.105 7.876c1.975 0 2.962-.87 3.55-1.881.047-.047 1.223.165 1.223 1.152 0 .987-1.74 2.563-4.82 2.563-3.574 0-5.972-2.375-5.972-5.901 0-3.433 2.445-5.995 5.784-5.995 3.268 0 5.431 2.304 5.431 5.689v.189c0 .493-.164.682-.705.682H32.8c.164 2.068 1.692 3.502 3.832 3.502zm2.938-5.078c-.118-1.951-1.317-3.221-3.197-3.221-1.857 0-3.292 1.34-3.574 3.221h6.771zm7.718 2.186l-2.445 3.55c-.4.635-.87.988-1.458.988-.823 0-1.364-.776-1.27-.87l3.738-4.89-3.691-4.938c-.071-.118.423-.846 1.246-.846.635 0 1.058.329 1.458.964l2.516 3.597 2.469-3.597c.447-.705.964-.964 1.434-.964.847 0 1.364.752 1.293.846L48.84 10.51l3.668 4.89c.071.117-.4.87-1.27.87-.635 0-1.058-.352-1.434-.964 0 0-2.516-3.598-2.516-3.574zm6.966-4.984c-.729 0-1.011-.306-1.011-.87v-.165c0-.564.282-.87 1.011-.87h.823V3.104c0-.8.4-1.106 1.034-1.106h.235c.611 0 1.011.235 1.011 1.106v1.739h2.563c.729 0 .987.282.987.847v.164c0 .588-.282.894-1.011.894h-2.563v5.713c0 1.41.4 2.092 1.505 2.092.729 0 1.246-.329 1.599-.8.071-.07.658.259.658.988 0 .87-.964 1.716-2.633 1.716-2.328 0-3.385-1.293-3.385-3.738V6.748h-.823zm13.96-2.187c2.986 0 4.373 2.069 4.373 4.89v5.689c0 .847-.447 1.105-1.035 1.105h-.258c-.611 0-1.035-.259-1.035-1.105V9.71c0-1.951-.987-3.104-2.61-3.104-1.928 0-3.174 1.27-3.174 3.315v5.219c0 .847-.447 1.105-1.035 1.105h-.259c-.611 0-1.034-.259-1.034-1.105V.259c.001-.071.377-.259.847-.259.705 0 1.481.376 1.481 1.999V6.63c.753-1.199 1.975-2.069 3.739-2.069zm11.818 10.063c1.975 0 2.962-.87 3.55-1.881.047-.047 1.223.165 1.223 1.152 0 .987-1.74 2.563-4.82 2.563-3.574 0-5.972-2.375-5.972-5.901 0-3.433 2.445-5.995 5.784-5.995 3.268 0 5.431 2.304 5.431 5.689v.189c0 .493-.164.682-.705.682H76.2c.164 2.068 1.692 3.502 3.832 3.502zm2.938-5.078c-.117-1.951-1.316-3.221-3.197-3.221-1.857 0-3.291 1.34-3.574 3.221h6.771zm3.385 5.595V.259c0-.071.4-.259.846-.259.729 0 1.481.376 1.481 1.999v13.142c0 .847-.423 1.105-1.035 1.105h-.235c-.61 0-1.057-.258-1.057-1.105zm6.418 4.515c0 .846-.447 1.105-1.035 1.105h-.258c-.611 0-1.035-.259-1.035-1.105V4.984c0-.071.376-.259.846-.259.705 0 1.434.376 1.458 1.951.893-1.317 2.187-2.116 3.973-2.116 3.033 0 5.29 2.328 5.29 5.925 0 3.55-2.234 5.972-5.36 5.972-1.857 0-3.244-1.011-3.879-2.116v5.315zm-.023-8.441c0 1.904 1.599 3.315 3.48 3.315 2.116 0 3.526-1.622 3.526-4.02 0-2.351-1.458-4.021-3.48-4.021-1.716 0-2.939.917-3.526 2.351v2.375z" fill="#0ca0a0"/><path d="M18.112 1.895H3.283A3.292 3.292 0 0 0 0 5.178v7.98a3.293 3.293 0 0 0 3.283 3.283h2.002v3.725a.926.926 0 0 0 1.854 0v-3.725h.885v3.725a.926.926 0 0 0 1.854 0v-3.725h2.545a3.292 3.292 0 0 0 3.283-3.283V5.802l2.867-2.768c.648-.626.441-1.139-.461-1.139zm-5.491 3.218a.892.892 0 1 1 0-1.783.892.892 0 0 1 0 1.783z" fill="#e8396b"/><circle cx="12.621" cy="4.221" r=".892" fill="#fff"/><path d="M102.967 4.147c-.135 0-.21-.068-.21-.196V3.93c0-.129.074-.19.21-.19h1.427c.135 0 .203.061.203.19v.02c0 .128-.068.196-.203.196h-.487v1.488c0 .135-.068.216-.203.216h-.061c-.122 0-.189-.081-.189-.216V4.147h-.487zm1.948 1.487V3.95c0-.149.068-.23.203-.23h.183c.142 0 .189.047.23.156l.406.994.406-.994c.047-.122.108-.156.223-.156h.176c.135 0 .203.081.203.23v1.684c0 .135-.047.216-.183.216h-.062c-.122 0-.183-.081-.183-.216V4.356l-.372.954c-.02.061-.034.108-.216.108-.183 0-.183-.041-.21-.108l-.379-.947v1.271c0 .135-.041.216-.169.216h-.074c-.128.001-.182-.08-.182-.216z" fill="#0ca0a0"/></symbol><symbol id="equatio-svg-tool-circle" viewBox="0 0 55.1 49.8"><circle cx="27.7" cy="23.6" r="13.3" fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"/></symbol><symbol id="equatio-svg-tool-companion" viewBox="0 0 51.6 49.8"><path d="M30.9 10.8H20.7c-1.8 0-3.2 1.4-3.2 3.2v21.7c0 1.8 1.4 3.2 3.2 3.2h10.2c1.8 0 3.2-1.4 3.2-3.2V14c0-1.7-1.4-3.2-3.2-3.2zm-5.1 24.9c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6c0 .9-.7 1.6-1.6 1.6zm4.9-4.3H21V16.2h9.7v15.2z" fill="currentColor"/></symbol><symbol id="equatio-svg-tool-delete" viewBox="0 0 60 75"><path d="M3 72c0 1.6 1.4 3 3 3h48c1.6 0 3-1.4 3-3V21H3v51zm45.7-16.4c1.1 1.8 1.1 3.8.2 5.4-.9 1.6-2.7 2.6-4.8 2.6h-7.5v1.6c0 .7-.4 1-.8 1-.2 0-.4-.1-.7-.3l-5-4.9c-.3-.3-.4-.6-.4-1s.1-.7.4-1l4.9-4.9c.3-.3.6-.3.7-.3.4 0 .8.3.8 1v1.6h4.3l-4.4-7.6 6.2-3.6 6.1 10.4zM25.4 31.2c1.1-1.8 2.7-2.9 4.6-2.9s3.6 1 4.6 2.9l3.7 6.5 1.6-.9.4-.1c.3 0 .5.1.6.3.1.2.2.4.1.9l-1.8 6.7c-.2.6-.7 1-1.3 1h-.4l-6.7-1.8c-.6-.2-.7-.6-.8-.8s0-.6.5-.9l1.4-.8-1.9-3.7-4.4 7.5-6.2-3.6 6-10.3zM11.3 55.6l3.7-6.5-1.4-.8c-.6-.3-.6-.8-.5-.9 0-.2.1-.6.8-.7l6.8-1.8h.3c.6 0 1.1.4 1.3 1l1.8 6.7c.1.4 0 .7-.1.9l-.2.2-.5.1c-.2 0-.4-.1-.6-.2l-1.4-.8-2.1 3.7h8.5v7.2H15.9c-2.1 0-3.9-.9-4.8-2.6-.9-1.7-.9-3.7.2-5.5zM58.5 12H42V6c0-3.3-2.7-6-6-6H24c-3.3 0-6 2.7-6 6v6H1.5c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h57c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM36 12H24V6h12v6z" fill="currentColor"/></symbol><symbol id="equatio-svg-tool-equation" viewBox="0 0 51.6 49.8"><g fill="currentColor"><path d="M31.7 14.7h1.5v20.8h-1.5zm1.5-1.5h4.5v1.5h-4.5zm-5.9 0h4.5v1.5h-4.5zm5.9 22.3h4.5V37h-4.5zm-5.9 0h4.5V37h-4.5zm-6.6-10.4c-.3 0-.5-.1-.7-.3l-5.8-6.5c-.3-.3-.3-.7-.2-1.1.2-.4.5-.6.9-.6h9.7c.5 0 1 .4 1 1 0 .5-.4 1-1 1h-7.5l4.3 4.9c.4.4.3 1-.1 1.4-.1.1-.3.2-.6.2z"/><path d="M24.6 31.6h-9.7c-.4 0-.7-.2-.9-.6-.2-.4-.1-.8.2-1.1l5.8-6.5c.4-.4 1-.4 1.4-.1.4.4.4 1 .1 1.4l-4.3 4.9h7.5c.5 0 1 .4 1 1s-.6 1-1.1 1z"/></g></symbol><symbol id="equatio-svg-tool-fill" viewBox="0 0 14 13.2"><path d="M10.5 7l-7-7-1 1.1L4.3 3l-4 4c-.5.5-.5 1.2 0 1.7L4.6 13c.2.2.5.3.8.3.3 0 .6-.1.8-.3l4.3-4.3c.5-.6.5-1.3 0-1.7m-8.8.8l3.7-3.7 3.7 3.7H1.7zm10.7 1.1s-1.6 1.7-1.6 2.7c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-1-1.6-2.7-1.6-2.7" fill="currentColor"/></symbol><symbol id="equatio-svg-tool-freehand" viewBox="0 0 51.6 49.8"><path d="M34.2 23.6l-2.3 10c-.1.6-.7 1-1.3 1H21c-.6 0-1.1-.4-1.3-1l-2.3-10 7.8-13.7v12.5c-1 .3-1.8 1.2-1.8 2.4 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-1.1-.8-2.1-1.8-2.4V9.9l7.6 13.7zM19.9 37.3v1.3c0 .7.6 1.3 1.3 1.3h9.2c.7 0 1.3-.6 1.3-1.3v-1.3c0-.7-.6-1.3-1.3-1.3h-9.2c-.7 0-1.3.6-1.3 1.3z" fill="currentColor"/></symbol><symbol id="equatio-svg-tool-graph" viewBox="0 0 51.6 49.8"><path d="M39.3 40.4h-27c-1.1 0-2-.9-2-2v-27c0-1.1.9-2 2-2h27c1.1 0 2 .9 2 2v27c0 1.1-.9 2-2 2z" fill="#494949"/><path d="M39.5 23.7l-.2-.2-1.7-1.5c-.3-.2-.6-.3-.9-.3-.3 0-.7.2-.9.5-.2.2-.3.6-.3.9v.6h-6.2v-1.4c0-.5-.4-.9-.9-.9s-.9.4-.9.9v1.4h-3.6c-1.5-6.9-3.1-10-5.3-10.1-.8 0-1.7.5-2.4 1.4-.7.9-1.4 2.3-2.2 4.1-1 2.6-1.6 5.1-1.6 5.1-.1.5.2.9.6 1h4.1v1.5c0 .5.4.9.9.9s.9-.4.9-.9v-1.5h3.7c.2.9.7 2.7 1.4 4.5.7 1.8 1.4 3.2 2.1 4.1.8 1 1.6 1.4 2.4 1.4 2.2 0 3.9-3.1 5.3-10.1h1.6v.7c0 .3.1.6.3.8.2.3.5.4.9.5h.1c.3 0 .5-.1.8-.2l.1-.1 1.7-1.5c.6-.3.7-1.1.2-1.6zM18 21.3c-.5 0-.9.4-.9.9v1.4h-2.8c.3-.9.7-2.4 1.3-3.9 1.6-4.2 2.8-4.4 3-4.4.2 0 .8.2 1.5 1.7.7 1.4 1.4 3.6 2 6.6h-3.3v-1.4c.1-.5-.3-.9-.8-.9zm10.4 6.4c.5 0 .9-.4.9-.9v-1.5h2.8c-.6 2.9-1.3 5.1-2.1 6.6-.8 1.6-1.3 1.7-1.5 1.7-.1 0-.4-.1-1-.6-.6-.7-1.3-2-2-3.8-.6-1.4-1-2.9-1.3-3.9h3.2v1.5c.1.5.5.9 1 .9z" fill="#fff"/></symbol><symbol id="equatio-svg-tool-handwriting" viewBox="0 0 51.6 49.8"><path d="M33 17.4l-2.3 2.8-6.4-5.1 2.3-2.8c3.1.9 4.9 2.3 6.4 5.1zm-17 11l3.8 3-2.9 1.2-1.4-1.1c.1-1 .3-2.1.5-3.1zm-2.8 7.3l7.6-3 9-11.2-6.4-5.1-9 11.2-1.2 8.1z" fill-rule="evenodd" clip-rule="evenodd" fill="#494949"/><path d="M13.9 36.7c2.7.4 6.5.7 8.3-.6 2-1.4.3-3.8 2-4.5.9-.4 2.8-.4 7.6 1.9" fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#494949" stroke-width="1.477" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/><text transform="translate(30.748 34.527)" fill="#494949" font-family="Roboto-Bold" font-size="13.812">A</text></symbol><symbol id="equatio-svg-tool-latex" viewBox="0 0 51.6 49.83"><g clip-path="url(#equatio-svg-tool-latex-clip-path)" fill="#494949"><path d="M15.79 25.09h-.38c-.15 1.54-.36 3.41-3 3.41h-1.23c-.71 0-.74-.11-.74-.6v-8c0-.51 0-.72 1.42-.72h.5v-.45h-4.8v.45h.35c1.16 0 1.19.17 1.19.71v7.91c0 .54 0 .71-1.19.71h-.35V29h7.82z"/><path d="M15.53 18.7c-.06-.18-.09-.24-.29-.24s-.24.06-.3.24l-2.43 6.15c-.11.26-.29.72-1.22.72V26h2.34v-.38c-.47 0-.75-.21-.75-.51a.66.66 0 0 1 0-.21l.51-1.3h3l.6 1.54a.51.51 0 0 1 .06.18c0 .3-.57.3-.86.3V26h3v-.38H19c-.71 0-.78-.11-.89-.41zm-.6 1.07l1.34 3.41h-2.68z"/><path d="M27.6 18.81h-9.17l-.27 3.38h.36c.21-2.43.44-2.92 2.71-2.92a6.32 6.32 0 0 1 .81 0c.32.06.32.23.32.57v7.91c0 .51 0 .72-1.58.72h-.6V29h5.69v-.5h-.6c-1.58 0-1.58-.21-1.58-.72v-7.92c0-.3 0-.51.27-.57a7.1 7.1 0 0 1 .86 0c2.26 0 2.49.5 2.7 2.92h.38z"/><path d="M35.68 28.48h-.38c-.38 2.31-.72 3.41-3.3 3.41h-2c-.71 0-.74-.11-.74-.6v-4h1.34c1.46 0 1.63.48 1.63 1.76h.38v-4h-.38c0 1.28-.17 1.75-1.63 1.75h-1.32v-3.6c0-.5 0-.6.74-.6h1.93c2.31 0 2.7.83 2.94 2.92h.38l-.42-3.38H26.4v.45h.35c1.16 0 1.19.17 1.19.71v7.87c0 .54 0 .71-1.19.71h-.35v.47H35z"/><path d="M40.22 23.16l2.06-3a2.28 2.28 0 0 1 2.17-1v-.45h-3.59v.45c.6 0 .93.35.93.69 0 .15 0 .18-.14.35l-1.72 2.53L38 19.85a.62.62 0 0 1-.11-.23c0-.18.33-.44 1-.45v-.45h-4.18v.45H35c.83 0 1.11.11 1.4.53l2.76 4.17-2.44 3.63a2.27 2.27 0 0 1-2.17 1v.5h3.59v-.5c-.69 0-.95-.42-.95-.69s0-.2.15-.36l2.12-3.15 2.38 3.59a.52.52 0 0 1 .08.17c0 .18-.33.44-1 .45V29h4.18v-.5h-.3c-.78 0-1.1-.08-1.42-.54z"/></g></symbol><symbol id="equatio-svg-tool-line" viewBox="0 0 55.1 49.8"><path fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" d="M11 22.7h33.2"/></symbol><symbol id="equatio-svg-tool-mathspace" viewBox="0 0 42 42"><path d="M29.3 19.2l-6.4-6.4c-.1-.1-.2-.2-.4-.2h-2.9c-.1 0-.3.1-.4.2l-6.4 6.4c-.1.1-.2.2-.2.4v2.9c0 .1.1.3.2.4l6.4 6.4c.1.1.2.2.4.2h2.9c.1 0 .3-.1.4-.2l6.4-6.4c.1-.1.2-.2.2-.4v-2.9c-.1-.2-.1-.3-.2-.4zm-.9.6v1.6l-6-6c-.2-.2-.4-.2-.6 0l-1.1 1.1c-.2.2-.2.4 0 .6L17 20.7l-.8-.8 6.1-6.1 6.1 6zM17.3 21l3.7-3.7 3.7 3.7-3.7 3.7-3.7-3.7zm2.5-7.4h1.6l-6 6c-.2.2-.2.4 0 .6l1.1 1.1c.1.1.2.1.3.1.1 0 .2 0 .3-.1l3.7 3.7-.8.8-6.1-6.1 5.9-6.1zm-6.2 8.6v-1.6l6 6c.1.1.2.1.3.1.1 0 .2 0 .3-.1l1.1-1.1c.2-.2.2-.4 0-.6l3.6-3.6.8.8-6 6-6.1-5.9zm8.6 6.2h-1.6l5.9-5.9c.2-.2.2-.4 0-.6l-1.1-1.1c-.1-.1-.4-.2-.5-.1l-3.6-3.6.8-.8 6.1 6.1-6 6z" fill="#00b7ff"/><path d="M31.8 27.3l-10.2 5.9V21.4l10.2-5.9v11.8zM10.2 15.4l10.2 5.9v11.8l-10.2-5.9V15.4zM21 8.5l10.2 5.9L21 20.3l-10.2-5.9L21 8.5zm11.7 5.4L21.3 7.3c-.2-.1-.4-.1-.6 0L9.3 13.9c-.2.1-.3.3-.3.5v13.2c0 .2.1.4.3.5l11.4 6.6c.1.1.2.1.3.1.1 0 .2 0 .3-.1l11.4-6.6c.2-.1.3-.3.3-.5V14.4c0-.2-.1-.4-.3-.5z" fill="#494949"/></symbol><symbol id="equatio-svg-tool-more" viewBox="0 0 53 53"><path d="M12 23h6v7h-6zm11 0h6v7h-6zm11 0h6v7h-6z" fill="currentColor"/></symbol><symbol id="equatio-svg-tool-parallel" viewBox="0 0 55.1 49.8"><path fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" d="M9.3 32.8L18 17h27.8L37 32.8z"/></symbol><symbol id="equatio-svg-tool-path" viewBox="0 0 51.603 49.831"><path fill="currentColor" d="M31.141 32.905l-15.2-2.721v3.048l15.2 2.72z"/><path d="M37.082 38.332h-7.707v-7.707h7.707v7.707zm-5.941-1.766h4.175v-4.175h-4.175v4.175zm-13.434-.859H10V28h7.707v7.707zm-5.941-1.766h4.175v-4.175h-4.175v4.175zm29.837-10.624h-7.707V15.61h7.707v7.707zm-5.942-1.766h4.175v-4.175h-4.175v4.175zm-17.252-2.344h-7.707V11.5h7.707v7.707zm-5.941-1.766h4.175v-4.175h-4.175v4.175z" fill="currentColor"/><path fill="currentColor" d="M35.661 17.619L18.04 13.91l-.618 2.936 14.129 2.974-14.5 10.471 1.756 2.432 16.854-12.171z"/></symbol><symbol id="equatio-svg-tool-polygon" viewBox="0 0 55.1 49.8"><path fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" d="M34.2 13.4l6.6 11.5-6.6 11.5H20.9l-6.6-11.5 6.6-11.5z"/></symbol><symbol id="equatio-svg-tool-rectangle" viewBox="0 0 55.1 49.8"><path fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" d="M14.1 11.1h25.5v25.5H14.1z"/></symbol><symbol id="equatio-svg-tool-rtriangle" viewBox="0 0 55.1 49.8"><path fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" d="M11.6 36.6l30-26v26z"/></symbol><symbol id="equatio-svg-tool-screenshot" viewBox="0 0 51.6 49.8"><path d="M-5848-575.2h-5.6v-2.5h5.6v2.5zm-8.3 0h-5.6v-2.5h5.6v2.5z" fill="currentColor" transform="translate(5879.882 613.169)"/><path d="M-5858.8-574.1h-3.8v-3.8h2.5v1.2h1.2v2.6h.1z" fill="currentColor" transform="translate(5874 612.048)"/><path d="M-5860.2-565.8h-2.5v-5.6h2.5v5.6zm0-8.4h-2.5v-5.6h2.5v5.6z" fill="currentColor" transform="translate(5874 597.132)"/><path d="M-5860.2-576.6h-2.5v-3.8h3.8v2.6h-1.2v1.2h-.1z" fill="currentColor" transform="translate(5874 591.25)"/><path d="M-5848-577.9h-5.6v-2.5h5.6v2.5zm-8.3 0h-5.6v-2.5h5.6v2.5z" fill="currentColor" transform="translate(5879.882 591.32)"/><path d="M-5856.3-576.6h-2.6v-1.2h-1.2v-2.6h3.8v3.8z" fill="currentColor" transform="translate(5894.728 591.25)"/><path d="M-5857.5-565.7h-2.5v-5.6h2.5v5.6zm0-8.5h-2.5v-5.6h2.5v5.6z" fill="currentColor" transform="translate(5895.919 597.132)"/><path d="M-5837.6-553.2l2-1.5-3.6-5.2 4.4-1.1-12.5-9.6 2.8 14.9 3.6-3.3 3.3 5.8z" fill="currentColor" transform="translate(5874 591.25)"/><path d="M-5847.3-570.5l12.5 9.6-4.4 1.1 3.6 5.2-2 1.5-3.4-5.6-3.6 3.3-2.7-15.1" fill="currentColor" transform="translate(5874 591.25)"/><path d="M-5837-552.3l2-1.5c.4-.3.6-.9.2-1.5l-2.7-4 2.9-.7c.4-.1.7-.3.8-.8.1-.3-.1-.8-.4-1l-12.5-9.4c-.2-.1-.4-.2-.7-.2-.2 0-.3.1-.6.1-.3.2-.6.7-.4 1.1l2.7 14.9c0 .3.3.7.7.8.1 0 .2.1.3.1.2 0 .4-.1.7-.2l2.6-2.5 2.8 4.5" fill="currentColor" transform="translate(5874 591.25)"/></symbol><symbol id="equatio-svg-tool-select" viewBox="0 0 51.6 49.8"><path fill="currentColor" d="M33 28.7L20.2 16.3l.1 17.8 3.9-3.4 3 7.1 3.7-1.5-3.1-7.1z"/></symbol><symbol id="equatio-svg-tool-smartshapes" viewBox="0 0 55.1 49.8"><path fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" d="M34.2 13.4l6.6 11.5-6.6 11.5H20.9l-6.6-11.5 6.6-11.5z"/><path d="M20 24.9c0 4.2 3.4 7.5 7.5 7.5S35 29 35 24.9s-3.4-7.5-7.5-7.5-7.5 3.3-7.5 7.5zm8.5 4.9c-.3.5-1 .7-1.6.3l-.3-.3-.6-.9c.9-.8 2.2-.8 3.1 0l-.6.9zm1.1-1.6c-1.2-.8-2.8-.8-4 0l-.4-.5c1.3-1.2 3.4-1.2 4.7 0l-.3.5zm2.1-4.4c0 .9-.3 1.9-.9 2.6l-.4.5-.4-.3c-1.5-1-3.4-1-4.9 0l-.4.3-.4-.5c-.6-.7-.9-1.7-.9-2.6 0-2.3 1.9-4.2 4.2-4.2s4.1 1.8 4.1 4.2z" fill="currentColor"/></symbol><symbol id="equatio-svg-tool-speech" viewBox="0 0 51.6 49.8"><g fill="currentColor"><path d="M35.5 21.3c0-.3-.3-.6-.6-.6h-1.3c-.4 0-.6.3-.6.6V25c-.1 3.3-3.2 6-7.1 6-3.9 0-7-2.7-7.1-6v-3.6c0-.3-.3-.6-.6-.6h-1.3c-.4 0-.6.3-.6.6V25c0 4.2 3.6 7.7 8.4 8.3v3.4h-2.9c-.4 0-.6.3-.6.6v1.1c0 .3.3.6.6.6H30c.4 0 .6-.3.6-.6v-1.1c0-.3-.3-.6-.6-.6h-2.9v-3.4c4.7-.5 8.4-4.1 8.4-8.3v-3.7z"/><path d="M25.8 29.1c2.7 0 4.8-1.9 4.8-4.2v-9.8c0-2.3-2.2-4.2-4.8-4.2S21 12.8 21 15.1v9.8c0 2.3 2.1 4.2 4.8 4.2z"/></g></symbol><symbol id="equatio-svg-tool-star" viewBox="0 0 55.1 49.8"><path fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" d="M27.5 30.5l9.4 6.9-3.6-11.1 9.5-6.8H31.1L27.5 8.4 24 19.5H12.3l9.5 6.8-3.7 11.1z"/></symbol><symbol id="equatio-svg-tool-text" viewBox="0 0 81 69"><path d="M66 65.2V69H42v-3.8c4.3 0 5.8-4.4 4.6-7.6-.8-2.3-4.7-12.8-4.7-12.8H19.4s-3.3 8.4-5.3 13.5 2.7 6.9 6.9 6.9V69H0v-3.8s3.2-1.4 4.8-3 3-4.3 3-4.3L30.8 0h5.4l22.2 57.4s1.2 2.9 3.5 5.3c2.2 2.5 4.1 2.5 4.1 2.5zM40.4 39l-9.3-26.3L20.9 39h19.5z" fill="currentColor"/><path d="M81 28.3V30H69v-1.7l3.3-1.5-2.3-6H59.4l-2.7 6 3.3 1.4V30h-9v-1.8l2.8-1.4L65.1 0h2.4l10.9 26.9 2.6 1.4zM69.5 18L65.2 6l-4.7 12h9z" fill="currentColor" opacity=".5"/></symbol><symbol id="equatio-svg-tool-textedit" viewBox="0 0 51.603 49.831"><path d="M37.19 20.019c-.187-2.401-.377-5.75-.414-7.31l-.007-.284h-1.32l-.086.097c-.588.658-1.031.848-1.974.848H18.207c-1.015 0-1.388-.064-1.915-.82l-.086-.125H14.87l-.011.279a150.695 150.695 0 0 1-.228 3.85c-.077 1.147-.159 2.366-.225 3.585l-.017.306h1.89l.057-.217c.294-1.135 1.554-2.066 1.87-2.197h4.772v13.262c0 3.05-.278 3.161-3.284 3.412l-.266.022v2.679H32.32v-2.68l-.267-.021c-3.192-.254-3.434-.346-3.434-3.412V18.031h5.65c.348.138.718.972.99 2.151l.055.238 1.899-.105-.023-.296z" fill="#494949"/></symbol><symbol id="equatio-svg-tool-trapezoid" viewBox="0 0 55.1 49.8"><path fill="none" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" d="M43.7 34.2H11.4l7.3-20.5h17.7z"/></symbol><symbol id="equatio-svg-tool-triangle" viewBox="0 0 78.6 74.1"><path fill="currentColor" d="M72.4 68.6H6.3l-.2-.2L38.9 5.5l1.9 1z" opacity=".3"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" d="M39.3 4.2L5.9 68.1M40.8 5.9l31.9 62.8m-.4-1.2h-66"/><path fill="currentColor" d="M45.2 0v11.9H33.4V0"/><path fill="#fcfcfc" d="M42.3 3v6h-6V3"/><path fill="currentColor" d="M11.9 62.2v11.9H0V62.2"/><path fill="#fcfcfc" d="M8.9 65.2v6h-6v-6"/><path fill="currentColor" d="M78.6 62.2v11.9H66.8V62.2"/><path fill="#fcfcfc" d="M75.7 65.2v6h-6v-6"/></symbol><symbol id="equatio-svg-traffic-light-disabled" viewBox="0 0 28 28"><circle cx="14" cy="14" r="10.5" opacity=".2" fill="#9b9b9b"/><path d="M18.5 10.4c0-.7-.6-1.4-1.3-1.5-.5 0-1.1.2-1.4.6-.3-.4-.8-.7-1.3-.8-.7-.1-1.4.5-1.6 1.2-.2.9.3 1.8.8 2.4.3.4.6.7 1 1 .1.1.6.5.7.5.1.1.7-.3.8-.4.4-.2.8-.5 1.1-.8.6-.5 1.3-1.3 1.2-2.2zM8.8 9.3c0-.6-.5-1.3-1.2-1.3-.5 0-1 .2-1.3.5-.3-.4-.8-.7-1.2-.7-.7-.1-1.3.5-1.4 1.1-.2.8.3 1.6.7 2.2l.9.9c.1.1.5.5.6.5.1 0 .6-.3.7-.4.4-.2.7-.5 1-.7.6-.6 1.2-1.3 1.2-2.1z" opacity=".2" fill="#2c2c2c"/><path d="M7 15.4s4.2 2.4 8.5.2c0 .1-3.6 10.5-8.5-.2z" fill="#fff"/></symbol><symbol id="equatio-svg-traffic-light-error" viewBox="0 0 28 28"><style>.equatio-traffic-light-error-st0{fill:#d35b5b}.equatio-traffic-light-error-st1{fill:#561717;transform:rotate(15deg) translateY(-4px) translateX(4px)}</style><circle class="equatio-traffic-light-error-st0" cx="14" cy="14" r="10.5"/><circle class="equatio-traffic-light-error-st1" cx="7.9" cy="13.3" r="1.2"/><circle class="equatio-traffic-light-error-st1" cx="14.5" cy="11.8" r="1.2"/><path class="equatio-traffic-light-error-st1" d="M16.2 19.7c-.2-.1-4-2.6-6.7 1.1l-.8-.6c3.2-4.5 8-1.4 8-1.4l-.5.9z"/></symbol><symbol id="equatio-svg-traffic-light-meh" viewBox="0 0 28 28"><style>.equatio-traffic-light-meh-st0{fill:#f7d431}.equatio-traffic-light-meh-st1{fill:#292d2b}.equatio-traffic-light-meh-st2{fill:none;stroke:#292d2b;stroke-miterlimit:10;stroke-dasharray:10;stroke-dashoffset:8}</style><circle class="equatio-traffic-light-meh-st0" cx="14" cy="14" r="10.5"/><circle class="equatio-traffic-light-meh-st1" cx="8.9" cy="10.5" r="1.2"/><circle class="equatio-traffic-light-meh-st1" cx="16.4" cy="10.5" r="1.2"/><path class="equatio-traffic-light-meh-st2" d="M12.6 19.1c1.1 0 2.4-.3 3.7-1.6m-2.9 1.6c-1.1 0-2.4-.3-3.7-1.6"/></symbol><symbol id="equatio-svg-traffic-light-ok" viewBox="0 0 28 28"><style>.equatio-traffic-light-ok-st0{fill:#28d88c}.equatio-traffic-light-ok-st1{fill:#292d2b}.equatio-traffic-light-ok-st2{fill:#fff}</style><circle class="equatio-traffic-light-ok-st0" cx="14" cy="14" r="10.5"/><path class="equatio-traffic-light-ok-st1" d="M18.5 10.4c0-.7-.6-1.4-1.3-1.5-.5 0-1.1.2-1.4.6-.3-.4-.8-.7-1.3-.8-.7-.1-1.4.5-1.6 1.2-.2.9.3 1.8.8 2.4.3.4.6.7 1 1 .1.1.6.5.7.5.1.1.7-.3.8-.4.4-.2.8-.5 1.1-.8.6-.5 1.3-1.3 1.2-2.2zM8.8 9.3c0-.6-.5-1.3-1.2-1.3-.5 0-1 .2-1.3.5-.3-.4-.8-.7-1.2-.7-.7-.1-1.3.5-1.4 1.1-.2.8.3 1.6.7 2.2l.9.9c.1.1.5.5.6.5.1 0 .6-.3.7-.4.4-.2.7-.5 1-.7.6-.6 1.2-1.3 1.2-2.1z"/><path class="equatio-traffic-light-ok-st2" d="M7 15.4s4.2 2.4 8.5.2c0 .1-3.6 10.5-8.5-.2z"/></symbol><symbol id="equatio-svg-upgrade-draw-shapes" viewBox="0 0 47.758 47.761"><circle cx="23.879" cy="23.88" r="23.879" fill="#fff"/><path d="M18.58 27.813c-.166 0-.248-.138-.248-.305V26.7c0-.167.082-.304.248-.304s.248.137.248.304v.808c0 .167-.082.305-.248.305zm0-2.022c-.166 0-.248-.135-.248-.304v-1.212c0-.167.082-.304.248-.304s.248.136.248.304v1.212c0 .169-.082.304-.248.304zm0-2.427c-.166 0-.248-.134-.248-.303v-1.212c0-.167.082-.303.248-.303s.248.135.248.303v1.212c0 .17-.082.303-.248.303zm0-2.424c-.166 0-.248-.134-.248-.303v-1.212c0-.167.082-.303.248-.303s.248.136.248.303v1.212c0 .168-.082.303-.248.303zm0-2.424c-.166 0-.248-.137-.248-.305v-1.212c0-.167.082-.303.248-.303s.248.135.248.303v1.212c0 .168-.082.305-.248.305zm0-2.427c-.166 0-.248-.136-.248-.303v-1.212c0-.17.082-.305.248-.305s.248.135.248.305v1.212c0 .167-.082.303-.248.303zm0-3.031c-.166 0-.248-.135-.248-.303v-.809c0-.167.082-.304.248-.304s.248.137.248.304v.809c0 .167-.082.303-.248.303zm16.364 15.538c0 .165-.137.247-.305.247h-.809c-.168 0-.305-.083-.305-.247 0-.167.137-.249.305-.249h.809c.168 0 .305.082.305.249zm-2.022 0c0 .165-.137.247-.303.247h-1.215c-.166 0-.303-.083-.303-.247 0-.167.137-.249.303-.249h1.215c.166 0 .303.082.303.249zm-2.426 0c0 .165-.137.247-.303.247h-1.211c-.168 0-.305-.083-.305-.247 0-.167.137-.249.305-.249h1.211c.167 0 .303.082.303.249zm-2.424 0c0 .165-.137.247-.307.247h-1.211c-.166 0-.301-.083-.301-.247 0-.167.135-.249.301-.249h1.211c.171 0 .307.082.307.249zm-2.427 0c0 .165-.135.247-.301.247h-1.213c-.17 0-.305-.083-.305-.247 0-.167.135-.249.305-.249h1.213c.166 0 .301.082.301.249zm-2.424 0c0 .165-.137.247-.307.247h-1.209c-.168 0-.303-.083-.303-.247 0-.167.135-.249.303-.249h1.209c.17 0 .307.082.307.249zm-3.033 0c0 .165-.135.247-.303.247h-.809c-.168 0-.301-.083-.301-.247 0-.167.133-.249.301-.249h.809c.168 0 .303.082.303.249zm-1.76.07c.119.118.078.27-.039.389l-.857.858c-.121.119-.271.158-.389.04-.119-.118-.08-.272.039-.391l.857-.858c.117-.116.27-.156.389-.038zm-1.717 1.715c.121.119.08.271-.037.39l-.857.858c-.117.12-.271.158-.391.038-.115-.118-.078-.271.041-.39l.859-.857c.116-.119.27-.159.385-.039zm-1.713 1.715c.117.117.078.272-.037.389l-.859.858c-.119.118-.271.157-.389.039-.119-.117-.078-.271.041-.389l.855-.858c.118-.12.272-.157.389-.039zm-2.146 2.142c.121.121.082.272-.037.391l-.57.573c-.119.118-.273.156-.391.038-.117-.119-.078-.271.041-.39l.57-.57c.119-.119.272-.159.387-.042z" fill="#5696a4"/><path d="M28.914 18.734H11.936c-.205 0-.389-.081-.469-.271a.484.484 0 0 1 .111-.531l6.469-6.475a.514.514 0 0 1 .359-.155h16.977c.203 0 .389.14.469.329a.53.53 0 0 1-.111.56l-6.469 6.431c-.096.096-.223.112-.358.112zm-15.756-.99h15.547l5.457-5.449H18.61l-5.452 5.449z" fill="#075574"/><path d="M29.479 35.327c0 .28-.223.505-.502.505H11.899a.505.505 0 0 1-.504-.505V18.251c0-.28.226-.507.504-.507h17.078c.279 0 .502.228.502.507v17.076zm-17.09-.488H28.49V18.734H12.389v16.105z" fill="#075574"/><path d="M28.914 35.832H11.936a.57.57 0 0 1-.541-.541V18.312a.51.51 0 0 1 .166-.356l6.478-6.486a.538.538 0 0 1 .367-.166h16.977c.275 0 .541.262.541.542v16.978a.51.51 0 0 1-.166.356l-6.479 6.487a.539.539 0 0 1-.365.165zm-16.525-.993h16.316l6.227-6.227V12.295H18.61l-6.221 6.229v16.315z" fill="#075574"/><path d="M21.313 27.159c-.068-.247-.017-.85.09-1.412l.613-3.283c.195-1.091.539-1.621.887-1.916a1.757 1.757 0 0 1 1.219-.454c.842 0 1.311.558 1.311 1.204a1.43 1.43 0 0 1-.824 1.321l-.009.044c.416.122.771.584.771 1.205 0 1.029-.85 1.715-1.748 1.715-.434 0-.82-.157-1.055-.405h-.014l-.084.559c-.082.453-.176.927-.154 1.421h-1.003zm2.248-4.707c.047 0 .086 0 .131-.017.408-.069.719-.426.719-.932 0-.312-.162-.56-.455-.56-.365 0-.666.34-.834 1.256l-.408 2.197c.139.226.4.409.719.409.477 0 .834-.417.834-.924 0-.424-.291-.695-.668-.75-.055-.006-.107 0-.166 0l.128-.679z" fill="#075574"/></symbol><symbol id="equatio-svg-upgrade-math-prediction" viewBox="0 0 47.758 47.761"><circle cx="23.879" cy="23.88" r="23.879" fill="#fff"/><path d="M23.644 12.417c-5.604 0-10.15 4.546-10.15 10.145 0 5.604 4.541 10.145 10.145 10.145 5.609.005 10.15-4.541 10.15-10.145 0-5.599-4.541-10.145-10.145-10.145zm-7.373 8.734c-.649-.747.194-3.145 2.194-4.893s4.397-2.178 5.047-1.432c.655.747-1.283 1.8-3.283 3.549-1.995 1.748-3.304 3.522-3.958 2.776z" fill="#075574"/><path d="M32.516 12.683c-1.289-.031-1.416-.164-1.386-1.457a.16.16 0 0 0-.159-.164h-.005a.16.16 0 0 0-.159.159c-.031 1.232-.164 1.391-1.207 1.391-.077 0-.164 0-.251-.005h-.005c-.087 0-.159.072-.159.159s.066.164.159.164c1.289.031 1.416.169 1.386 1.457a.16.16 0 0 0 .159.164h.005a.16.16 0 0 0 .159-.159c.031-1.234.169-1.392 1.207-1.392.077 0 .164 0 .251.005h.005c.087 0 .159-.072.159-.159s-.067-.158-.159-.163zm3.543 2.664c-1.667-.041-1.831-.22-1.79-1.882a.211.211 0 0 0-.205-.215h-.004a.214.214 0 0 0-.21.205c-.041 1.595-.215 1.795-1.56 1.795-.102 0-.21 0-.322-.005h-.005a.21.21 0 0 0-.005.42c1.667.041 1.831.22 1.79 1.882a.211.211 0 0 0 .205.215h.005a.21.21 0 0 0 .21-.205c.041-1.595.215-1.795 1.56-1.795.102 0 .21 0 .322.005h.005a.214.214 0 0 0 .21-.205.209.209 0 0 0-.206-.215z" fill="#075574"/><path d="M14.108 23.078c0-5.604 4.546-10.15 10.15-10.15 2.327 0 4.469.782 6.182 2.102a10.102 10.102 0 0 0-6.796-2.613c-5.604 0-10.15 4.546-10.15 10.145a10.12 10.12 0 0 0 3.963 8.043 10.105 10.105 0 0 1-3.349-7.527z" opacity=".43" fill="#075574"/><path d="M30.936 33.612c-.225-.588-1.452-1.099-3.221-1.411a9.135 9.135 0 0 1-.91.332c.69.082 1.104.189 1.104.307 0 .261-1.999.465-4.469.465s-4.469-.21-4.469-.465c0-.133.542-.256 1.411-.337a10.708 10.708 0 0 1-.808-.302c-1.769.312-2.996.823-3.221 1.411-1.416.266-2.27.608-2.27.987 0 .844 4.28 1.524 9.562 1.524s9.562-.685 9.562-1.524c-.001-.374-.855-.721-2.271-.987z" fill="#075574"/><path d="M26.145 24.962a.543.543 0 0 1-.406-.182l-3.2-3.601a.546.546 0 0 1 .406-.905h5.347a.543.543 0 1 1 0 1.086h-4.137l2.397 2.696a.544.544 0 0 1-.407.906z" fill="#fff"/><path d="M28.291 28.563h-5.347a.545.545 0 0 1-.406-.905l3.2-3.601a.544.544 0 0 1 .812.722l-2.397 2.696h4.137a.543.543 0 0 1 .001 1.088z" fill="#fff"/></symbol><symbol id="equatio-svg-upgrade-speech-to-math" viewBox="0 0 47.758 47.761"><circle cx="23.879" cy="23.88" r="23.879" fill="#fff"/><g fill="#075574"><path d="M31.987 19.99c0-.264-.25-.481-.555-.481h-1.11c-.305 0-.555.217-.555.481v3.206h-.002c-.054 2.877-2.771 5.204-6.105 5.204-3.334 0-6.051-2.327-6.105-5.204h-.003V19.99c0-.264-.25-.481-.555-.481h-1.11c-.305 0-.555.217-.555.481v2.653c0 .035.005.069.013.102a6.328 6.328 0 0 0-.013.366c0 3.658 3.144 6.678 7.218 7.149v2.959h-2.5c-.305 0-.555.217-.555.481v.962c0 .264.25.481.555.481h7.217c.305 0 .555-.217.555-.481V33.7c0-.264-.25-.481-.555-.481H24.77V30.26c4.074-.471 7.218-3.491 7.218-7.149a6.36 6.36 0 0 0-.013-.366.432.432 0 0 0 .013-.102V19.99z"/><path d="M23.659 26.673c2.29 0 4.164-1.623 4.164-3.608v-8.418c0-1.984-1.874-3.608-4.164-3.608s-4.164 1.623-4.164 3.608v8.418c0 1.985 1.874 3.608 4.164 3.608z"/></g></symbol></svg>';
}, function(e, t, o) {
    "use strict";
    var r = o(25), a = o(30);
    r.default.__addLocaleData(a.default), r.default.defaultLocale = "en", t.default = r.default;
}, function(e, t, o) {
    "use strict";
    var r = o(15), a = o(26), n = o(27), i = o(28);
    function l(e, t, o) {
        var r = "string" == typeof e ? l.__parse(e) : e;
        if (!r || "messageFormatPattern" !== r.type) throw new TypeError("A message must be provided as a String or AST.");
        o = this._mergeFormats(l.formats, o), a.defineProperty(this, "_locale", {
            value: this._resolveLocale(t)
        });
        var n = this._findPluralRuleFunction(this._locale), i = this._compilePattern(r, t, o, n), s = this;
        this.format = function(t) {
            try {
                return s._format(i, t);
            } catch (t) {
                throw t.variableId ? new Error("The intl string context variable '" + t.variableId + "' was not provided to the string '" + e + "'") : t;
            }
        };
    }
    t.default = l, a.defineProperty(l, "formats", {
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
    }), a.defineProperty(l, "__localeData__", {
        value: a.objCreate(null)
    }), a.defineProperty(l, "__addLocaleData", {
        value: function(e) {
            if (!e || !e.locale) throw new Error("Locale data provided to IntlMessageFormat is missing a `locale` property");
            l.__localeData__[e.locale.toLowerCase()] = e;
        }
    }), a.defineProperty(l, "__parse", {
        value: i.default.parse
    }), a.defineProperty(l, "defaultLocale", {
        enumerable: !0,
        writable: !0,
        value: void 0
    }), l.prototype.resolvedOptions = function() {
        return {
            locale: this._locale
        };
    }, l.prototype._compilePattern = function(e, t, o, r) {
        return new n.default(t, o, r).compile(e);
    }, l.prototype._findPluralRuleFunction = function(e) {
        for (var t = l.__localeData__, o = t[e.toLowerCase()]; o; ) {
            if (o.pluralRuleFunction) return o.pluralRuleFunction;
            o = o.parentLocale && t[o.parentLocale.toLowerCase()];
        }
        throw new Error("Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :" + e);
    }, l.prototype._format = function(e, t) {
        var o, a, n, i, l, s, c = "";
        for (o = 0, a = e.length; o < a; o += 1) if ("string" != typeof (n = e[o])) {
            if (i = n.id, !t || !r.hop.call(t, i)) throw (s = new Error("A value must be provided for: " + i)).variableId = i, 
            s;
            l = t[i], n.options ? c += this._format(n.getOption(l), t) : c += n.format(l);
        } else c += n;
        return c;
    }, l.prototype._mergeFormats = function(e, t) {
        var o, n, i = {};
        for (o in e) r.hop.call(e, o) && (i[o] = n = a.objCreate(e[o]), t && r.hop.call(t, o) && r.extend(n, t[o]));
        return i;
    }, l.prototype._resolveLocale = function(e) {
        "string" == typeof e && (e = [ e ]), e = (e || []).concat(l.defaultLocale);
        var t, o, r, a, n = l.__localeData__;
        for (t = 0, o = e.length; t < o; t += 1) for (r = e[t].toLowerCase().split("-"); r.length; ) {
            if (a = n[r.join("-")]) return a.locale;
            r.pop();
        }
        var i = e.pop();
        throw new Error("No locale data has been added to IntlMessageFormat for: " + e.join(", ") + ", or the default locale: " + i);
    };
}, function(e, t, o) {
    "use strict";
    var r = o(15), a = function() {
        try {
            return !!Object.defineProperty({}, "a", {});
        } catch (e) {
            return !1;
        }
    }(), n = (!a && Object.prototype.__defineGetter__, a ? Object.defineProperty : function(e, t, o) {
        "get" in o && e.__defineGetter__ ? e.__defineGetter__(t, o.get) : (!r.hop.call(e, t) || "value" in o) && (e[t] = o.value);
    }), i = Object.create || function(e, t) {
        var o, a;
        function i() {}
        for (a in i.prototype = e, o = new i(), t) r.hop.call(t, a) && n(o, a, t[a]);
        return o;
    };
    t.defineProperty = n, t.objCreate = i;
}, function(e, t, o) {
    "use strict";
    function r(e, t, o) {
        this.locales = e, this.formats = t, this.pluralFn = o;
    }
    function a(e) {
        this.id = e;
    }
    function n(e, t, o, r, a) {
        this.id = e, this.useOrdinal = t, this.offset = o, this.options = r, this.pluralFn = a;
    }
    function i(e, t, o, r) {
        this.id = e, this.offset = t, this.numberFormat = o, this.string = r;
    }
    function l(e, t) {
        this.id = e, this.options = t;
    }
    t.default = r, r.prototype.compile = function(e) {
        return this.pluralStack = [], this.currentPlural = null, this.pluralNumberFormat = null, 
        this.compileMessage(e);
    }, r.prototype.compileMessage = function(e) {
        if (!e || "messageFormatPattern" !== e.type) throw new Error('Message AST is not of type: "messageFormatPattern"');
        var t, o, r, a = e.elements, n = [];
        for (t = 0, o = a.length; t < o; t += 1) switch ((r = a[t]).type) {
          case "messageTextElement":
            n.push(this.compileMessageText(r));
            break;

          case "argumentElement":
            n.push(this.compileArgument(r));
            break;

          default:
            throw new Error("Message element does not have a valid type");
        }
        return n;
    }, r.prototype.compileMessageText = function(e) {
        return this.currentPlural && /(^|[^\\])#/g.test(e.value) ? (this.pluralNumberFormat || (this.pluralNumberFormat = new Intl.NumberFormat(this.locales)), 
        new i(this.currentPlural.id, this.currentPlural.format.offset, this.pluralNumberFormat, e.value)) : e.value.replace(/\\#/g, "#");
    }, r.prototype.compileArgument = function(e) {
        var t = e.format;
        if (!t) return new a(e.id);
        var o, r = this.formats, i = this.locales, s = this.pluralFn;
        switch (t.type) {
          case "numberFormat":
            return o = r.number[t.style], {
                id: e.id,
                format: new Intl.NumberFormat(i, o).format
            };

          case "dateFormat":
            return o = r.date[t.style], {
                id: e.id,
                format: new Intl.DateTimeFormat(i, o).format
            };

          case "timeFormat":
            return o = r.time[t.style], {
                id: e.id,
                format: new Intl.DateTimeFormat(i, o).format
            };

          case "pluralFormat":
            return o = this.compileOptions(e), new n(e.id, t.ordinal, t.offset, o, s);

          case "selectFormat":
            return o = this.compileOptions(e), new l(e.id, o);

          default:
            throw new Error("Message element does not have a valid format type");
        }
    }, r.prototype.compileOptions = function(e) {
        var t, o, r, a = e.format, n = a.options, i = {};
        for (this.pluralStack.push(this.currentPlural), this.currentPlural = "pluralFormat" === a.type ? e : null, 
        t = 0, o = n.length; t < o; t += 1) i[(r = n[t]).selector] = this.compileMessage(r.value);
        return this.currentPlural = this.pluralStack.pop(), i;
    }, a.prototype.format = function(e) {
        return e || "number" == typeof e ? "string" == typeof e ? e : String(e) : "";
    }, n.prototype.getOption = function(e) {
        var t = this.options;
        return t["=" + e] || t[this.pluralFn(e - this.offset, this.useOrdinal)] || t.other;
    }, i.prototype.format = function(e) {
        var t = this.numberFormat.format(e - this.offset);
        return this.string.replace(/(^|[^\\])#/g, "$1" + t).replace(/\\#/g, "#");
    }, l.prototype.getOption = function(e) {
        var t = this.options;
        return t[e] || t.other;
    };
}, function(e, t, o) {
    "use strict";
    (t = e.exports = o(29).default).default = t;
}, function(e, t, o) {
    "use strict";
    t.default = function() {
        function e(e, t) {
            function o() {
                this.constructor = e;
            }
            o.prototype = t.prototype, e.prototype = new o();
        }
        function t(e, o, r, a) {
            this.message = e, this.expected = o, this.found = r, this.location = a, this.name = "SyntaxError", 
            "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, t);
        }
        function o(e) {
            var o, r = arguments.length > 1 ? arguments[1] : {}, a = {}, n = {
                start: Se
            }, i = Se, l = function(e) {
                return {
                    type: "messageFormatPattern",
                    elements: e,
                    location: ke()
                };
            }, s = function(e) {
                var t, o, r, a, n, i = "";
                for (t = 0, r = e.length; t < r; t += 1) for (o = 0, n = (a = e[t]).length; o < n; o += 1) i += a[o];
                return i;
            }, c = function(e) {
                return {
                    type: "messageTextElement",
                    value: e,
                    location: ke()
                };
            }, d = /^[^ \t\n\r,.+={}#]/, u = {
                type: "class",
                value: "[^ \\t\\n\\r,.+={}#]",
                description: "[^ \\t\\n\\r,.+={}#]"
            }, p = "{", f = {
                type: "literal",
                value: "{",
                description: '"{"'
            }, h = ",", m = {
                type: "literal",
                value: ",",
                description: '","'
            }, v = "}", y = {
                type: "literal",
                value: "}",
                description: '"}"'
            }, b = function(e, t) {
                return {
                    type: "argumentElement",
                    id: e,
                    format: t && t[2],
                    location: ke()
                };
            }, g = "number", z = {
                type: "literal",
                value: "number",
                description: '"number"'
            }, _ = "date", w = {
                type: "literal",
                value: "date",
                description: '"date"'
            }, M = "time", x = {
                type: "literal",
                value: "time",
                description: '"time"'
            }, k = function(e, t) {
                return {
                    type: e + "Format",
                    style: t && t[2],
                    location: ke()
                };
            }, L = "plural", C = {
                type: "literal",
                value: "plural",
                description: '"plural"'
            }, j = function(e) {
                return {
                    type: e.type,
                    ordinal: !1,
                    offset: e.offset || 0,
                    options: e.options,
                    location: ke()
                };
            }, q = "selectordinal", S = {
                type: "literal",
                value: "selectordinal",
                description: '"selectordinal"'
            }, E = function(e) {
                return {
                    type: e.type,
                    ordinal: !0,
                    offset: e.offset || 0,
                    options: e.options,
                    location: ke()
                };
            }, V = "select", T = {
                type: "literal",
                value: "select",
                description: '"select"'
            }, O = function(e) {
                return {
                    type: "selectFormat",
                    options: e,
                    location: ke()
                };
            }, I = "=", N = {
                type: "literal",
                value: "=",
                description: '"="'
            }, F = function(e, t) {
                return {
                    type: "optionalFormatPattern",
                    selector: e,
                    value: t,
                    location: ke()
                };
            }, G = "offset:", P = {
                type: "literal",
                value: "offset:",
                description: '"offset:"'
            }, D = function(e) {
                return e;
            }, H = function(e, t) {
                return {
                    type: "pluralFormat",
                    offset: e,
                    options: t,
                    location: ke()
                };
            }, W = {
                type: "other",
                description: "whitespace"
            }, A = /^[ \t\n\r]/, B = {
                type: "class",
                value: "[ \\t\\n\\r]",
                description: "[ \\t\\n\\r]"
            }, X = {
                type: "other",
                description: "optionalWhitespace"
            }, U = /^[0-9]/, R = {
                type: "class",
                value: "[0-9]",
                description: "[0-9]"
            }, Y = /^[0-9a-f]/i, Z = {
                type: "class",
                value: "[0-9a-f]i",
                description: "[0-9a-f]i"
            }, K = "0", J = {
                type: "literal",
                value: "0",
                description: '"0"'
            }, $ = /^[1-9]/, Q = {
                type: "class",
                value: "[1-9]",
                description: "[1-9]"
            }, ee = function(e) {
                return parseInt(e, 10);
            }, te = /^[^{}\\\0-\x1F\x7f \t\n\r]/, oe = {
                type: "class",
                value: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]",
                description: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]"
            }, re = "\\\\", ae = {
                type: "literal",
                value: "\\\\",
                description: '"\\\\\\\\"'
            }, ne = function() {
                return "\\";
            }, ie = "\\#", le = {
                type: "literal",
                value: "\\#",
                description: '"\\\\#"'
            }, se = function() {
                return "\\#";
            }, ce = "\\{", de = {
                type: "literal",
                value: "\\{",
                description: '"\\\\{"'
            }, ue = function() {
                return "{";
            }, pe = "\\}", fe = {
                type: "literal",
                value: "\\}",
                description: '"\\\\}"'
            }, he = function() {
                return "}";
            }, me = "\\u", ve = {
                type: "literal",
                value: "\\u",
                description: '"\\\\u"'
            }, ye = function(e) {
                return String.fromCharCode(parseInt(e, 16));
            }, be = function(e) {
                return e.join("");
            }, ge = 0, ze = 0, _e = [ {
                line: 1,
                column: 1,
                seenCR: !1
            } ], we = 0, Me = [], xe = 0;
            if ("startRule" in r) {
                if (!(r.startRule in n)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
                i = n[r.startRule];
            }
            function ke() {
                return Ce(ze, ge);
            }
            function Le(t) {
                var o, r, a = _e[t];
                if (a) return a;
                for (o = t - 1; !_e[o]; ) o--;
                for (a = {
                    line: (a = _e[o]).line,
                    column: a.column,
                    seenCR: a.seenCR
                }; o < t; ) "\n" === (r = e.charAt(o)) ? (a.seenCR || a.line++, a.column = 1, a.seenCR = !1) : "\r" === r || "\u2028" === r || "\u2029" === r ? (a.line++, 
                a.column = 1, a.seenCR = !0) : (a.column++, a.seenCR = !1), o++;
                return _e[t] = a, a;
            }
            function Ce(e, t) {
                var o = Le(e), r = Le(t);
                return {
                    start: {
                        offset: e,
                        line: o.line,
                        column: o.column
                    },
                    end: {
                        offset: t,
                        line: r.line,
                        column: r.column
                    }
                };
            }
            function je(e) {
                ge < we || (ge > we && (we = ge, Me = []), Me.push(e));
            }
            function qe(e, o, r, a) {
                function n(e) {
                    var t = 1;
                    for (e.sort(function(e, t) {
                        return e.description < t.description ? -1 : e.description > t.description ? 1 : 0;
                    }); t < e.length; ) e[t - 1] === e[t] ? e.splice(t, 1) : t++;
                }
                function i(e, t) {
                    function o(e) {
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
                    var r, a = new Array(e.length);
                    for (r = 0; r < e.length; r++) a[r] = e[r].description;
                    return "Expected " + (e.length > 1 ? a.slice(0, -1).join(", ") + " or " + a[e.length - 1] : a[0]) + " but " + (t ? '"' + o(t) + '"' : "end of input") + " found.";
                }
                return null !== o && n(o), new t(null !== e ? e : i(o, r), o, r, a);
            }
            function Se() {
                return Ee();
            }
            function Ee() {
                var e, t, o;
                for (e = ge, t = [], o = Ve(); o !== a; ) t.push(o), o = Ve();
                return t !== a && (ze = e, t = l(t)), e = t;
            }
            function Ve() {
                var e;
                return (e = Oe()) === a && (e = Ne()), e;
            }
            function Te() {
                var t, o, r, n, i, l;
                if (t = ge, o = [], r = ge, (n = Re()) !== a && (i = $e()) !== a && (l = Re()) !== a ? r = n = [ n, i, l ] : (ge = r, 
                r = a), r !== a) for (;r !== a; ) o.push(r), r = ge, (n = Re()) !== a && (i = $e()) !== a && (l = Re()) !== a ? r = n = [ n, i, l ] : (ge = r, 
                r = a); else o = a;
                return o !== a && (ze = t, o = s(o)), (t = o) === a && (t = ge, t = (o = Ue()) !== a ? e.substring(t, ge) : o), 
                t;
            }
            function Oe() {
                var e, t;
                return e = ge, (t = Te()) !== a && (ze = e, t = c(t)), e = t;
            }
            function Ie() {
                var t, o, r;
                if ((t = Ke()) === a) {
                    if (t = ge, o = [], d.test(e.charAt(ge)) ? (r = e.charAt(ge), ge++) : (r = a, 0 === xe && je(u)), 
                    r !== a) for (;r !== a; ) o.push(r), d.test(e.charAt(ge)) ? (r = e.charAt(ge), ge++) : (r = a, 
                    0 === xe && je(u)); else o = a;
                    t = o !== a ? e.substring(t, ge) : o;
                }
                return t;
            }
            function Ne() {
                var t, o, r, n, i, l, s;
                return t = ge, 123 === e.charCodeAt(ge) ? (o = p, ge++) : (o = a, 0 === xe && je(f)), 
                o !== a && Re() !== a && (r = Ie()) !== a && Re() !== a ? (n = ge, 44 === e.charCodeAt(ge) ? (i = h, 
                ge++) : (i = a, 0 === xe && je(m)), i !== a && (l = Re()) !== a && (s = Fe()) !== a ? n = i = [ i, l, s ] : (ge = n, 
                n = a), n === a && (n = null), n !== a && (i = Re()) !== a ? (125 === e.charCodeAt(ge) ? (l = v, 
                ge++) : (l = a, 0 === xe && je(y)), l !== a ? (ze = t, t = o = b(r, n)) : (ge = t, 
                t = a)) : (ge = t, t = a)) : (ge = t, t = a), t;
            }
            function Fe() {
                var e;
                return (e = Ge()) === a && (e = Pe()) === a && (e = De()) === a && (e = He()), e;
            }
            function Ge() {
                var t, o, r, n, i, l;
                return t = ge, e.substr(ge, 6) === g ? (o = g, ge += 6) : (o = a, 0 === xe && je(z)), 
                o === a && (e.substr(ge, 4) === _ ? (o = _, ge += 4) : (o = a, 0 === xe && je(w)), 
                o === a && (e.substr(ge, 4) === M ? (o = M, ge += 4) : (o = a, 0 === xe && je(x)))), 
                o !== a && Re() !== a ? (r = ge, 44 === e.charCodeAt(ge) ? (n = h, ge++) : (n = a, 
                0 === xe && je(m)), n !== a && (i = Re()) !== a && (l = $e()) !== a ? r = n = [ n, i, l ] : (ge = r, 
                r = a), r === a && (r = null), r !== a ? (ze = t, t = o = k(o, r)) : (ge = t, t = a)) : (ge = t, 
                t = a), t;
            }
            function Pe() {
                var t, o, r, n;
                return t = ge, e.substr(ge, 6) === L ? (o = L, ge += 6) : (o = a, 0 === xe && je(C)), 
                o !== a && Re() !== a ? (44 === e.charCodeAt(ge) ? (r = h, ge++) : (r = a, 0 === xe && je(m)), 
                r !== a && Re() !== a && (n = Xe()) !== a ? (ze = t, t = o = j(n)) : (ge = t, t = a)) : (ge = t, 
                t = a), t;
            }
            function De() {
                var t, o, r, n;
                return t = ge, e.substr(ge, 13) === q ? (o = q, ge += 13) : (o = a, 0 === xe && je(S)), 
                o !== a && Re() !== a ? (44 === e.charCodeAt(ge) ? (r = h, ge++) : (r = a, 0 === xe && je(m)), 
                r !== a && Re() !== a && (n = Xe()) !== a ? (ze = t, t = o = E(n)) : (ge = t, t = a)) : (ge = t, 
                t = a), t;
            }
            function He() {
                var t, o, r, n, i;
                if (t = ge, e.substr(ge, 6) === V ? (o = V, ge += 6) : (o = a, 0 === xe && je(T)), 
                o !== a) if (Re() !== a) if (44 === e.charCodeAt(ge) ? (r = h, ge++) : (r = a, 0 === xe && je(m)), 
                r !== a) if (Re() !== a) {
                    if (n = [], (i = Ae()) !== a) for (;i !== a; ) n.push(i), i = Ae(); else n = a;
                    n !== a ? (ze = t, t = o = O(n)) : (ge = t, t = a);
                } else ge = t, t = a; else ge = t, t = a; else ge = t, t = a; else ge = t, t = a;
                return t;
            }
            function We() {
                var t, o, r, n;
                return t = ge, o = ge, 61 === e.charCodeAt(ge) ? (r = I, ge++) : (r = a, 0 === xe && je(N)), 
                r !== a && (n = Ke()) !== a ? o = r = [ r, n ] : (ge = o, o = a), (t = o !== a ? e.substring(t, ge) : o) === a && (t = $e()), 
                t;
            }
            function Ae() {
                var t, o, r, n, i;
                return t = ge, Re() !== a && (o = We()) !== a && Re() !== a ? (123 === e.charCodeAt(ge) ? (r = p, 
                ge++) : (r = a, 0 === xe && je(f)), r !== a && Re() !== a && (n = Ee()) !== a && Re() !== a ? (125 === e.charCodeAt(ge) ? (i = v, 
                ge++) : (i = a, 0 === xe && je(y)), i !== a ? (ze = t, t = F(o, n)) : (ge = t, t = a)) : (ge = t, 
                t = a)) : (ge = t, t = a), t;
            }
            function Be() {
                var t, o, r;
                return t = ge, e.substr(ge, 7) === G ? (o = G, ge += 7) : (o = a, 0 === xe && je(P)), 
                o !== a && Re() !== a && (r = Ke()) !== a ? (ze = t, t = o = D(r)) : (ge = t, t = a), 
                t;
            }
            function Xe() {
                var e, t, o, r;
                if (e = ge, (t = Be()) === a && (t = null), t !== a) if (Re() !== a) {
                    if (o = [], (r = Ae()) !== a) for (;r !== a; ) o.push(r), r = Ae(); else o = a;
                    o !== a ? (ze = e, e = t = H(t, o)) : (ge = e, e = a);
                } else ge = e, e = a; else ge = e, e = a;
                return e;
            }
            function Ue() {
                var t, o;
                if (xe++, t = [], A.test(e.charAt(ge)) ? (o = e.charAt(ge), ge++) : (o = a, 0 === xe && je(B)), 
                o !== a) for (;o !== a; ) t.push(o), A.test(e.charAt(ge)) ? (o = e.charAt(ge), ge++) : (o = a, 
                0 === xe && je(B)); else t = a;
                return xe--, t === a && (o = a, 0 === xe && je(W)), t;
            }
            function Re() {
                var t, o, r;
                for (xe++, t = ge, o = [], r = Ue(); r !== a; ) o.push(r), r = Ue();
                return t = o !== a ? e.substring(t, ge) : o, xe--, t === a && (o = a, 0 === xe && je(X)), 
                t;
            }
            function Ye() {
                var t;
                return U.test(e.charAt(ge)) ? (t = e.charAt(ge), ge++) : (t = a, 0 === xe && je(R)), 
                t;
            }
            function Ze() {
                var t;
                return Y.test(e.charAt(ge)) ? (t = e.charAt(ge), ge++) : (t = a, 0 === xe && je(Z)), 
                t;
            }
            function Ke() {
                var t, o, r, n, i, l;
                if (t = ge, 48 === e.charCodeAt(ge) ? (o = K, ge++) : (o = a, 0 === xe && je(J)), 
                o === a) {
                    if (o = ge, r = ge, $.test(e.charAt(ge)) ? (n = e.charAt(ge), ge++) : (n = a, 0 === xe && je(Q)), 
                    n !== a) {
                        for (i = [], l = Ye(); l !== a; ) i.push(l), l = Ye();
                        i !== a ? r = n = [ n, i ] : (ge = r, r = a);
                    } else ge = r, r = a;
                    o = r !== a ? e.substring(o, ge) : r;
                }
                return o !== a && (ze = t, o = ee(o)), t = o;
            }
            function Je() {
                var t, o, r, n, i, l, s, c;
                return te.test(e.charAt(ge)) ? (t = e.charAt(ge), ge++) : (t = a, 0 === xe && je(oe)), 
                t === a && (t = ge, e.substr(ge, 2) === re ? (o = re, ge += 2) : (o = a, 0 === xe && je(ae)), 
                o !== a && (ze = t, o = ne()), (t = o) === a && (t = ge, e.substr(ge, 2) === ie ? (o = ie, 
                ge += 2) : (o = a, 0 === xe && je(le)), o !== a && (ze = t, o = se()), (t = o) === a && (t = ge, 
                e.substr(ge, 2) === ce ? (o = ce, ge += 2) : (o = a, 0 === xe && je(de)), o !== a && (ze = t, 
                o = ue()), (t = o) === a && (t = ge, e.substr(ge, 2) === pe ? (o = pe, ge += 2) : (o = a, 
                0 === xe && je(fe)), o !== a && (ze = t, o = he()), (t = o) === a && (t = ge, e.substr(ge, 2) === me ? (o = me, 
                ge += 2) : (o = a, 0 === xe && je(ve)), o !== a ? (r = ge, n = ge, (i = Ze()) !== a && (l = Ze()) !== a && (s = Ze()) !== a && (c = Ze()) !== a ? n = i = [ i, l, s, c ] : (ge = n, 
                n = a), (r = n !== a ? e.substring(r, ge) : n) !== a ? (ze = t, t = o = ye(r)) : (ge = t, 
                t = a)) : (ge = t, t = a)))))), t;
            }
            function $e() {
                var e, t, o;
                if (e = ge, t = [], (o = Je()) !== a) for (;o !== a; ) t.push(o), o = Je(); else t = a;
                return t !== a && (ze = e, t = be(t)), e = t;
            }
            if ((o = i()) !== a && ge === e.length) return o;
            throw o !== a && ge < e.length && je({
                type: "end",
                description: "end of input"
            }), qe(null, Me, we < e.length ? e.charAt(we) : null, we < e.length ? Ce(we, we + 1) : Ce(we, we));
        }
        return e(t, Error), {
            SyntaxError: t,
            parse: o
        };
    }();
}, function(e, t, o) {
    "use strict";
    t.default = {
        locale: "en",
        pluralRuleFunction: function(e, t) {
            var o = String(e).split("."), r = !o[1], a = Number(o[0]) == e, n = a && o[0].slice(-1), i = a && o[0].slice(-2);
            return t ? 1 == n && 11 != i ? "one" : 2 == n && 12 != i ? "two" : 3 == n && 13 != i ? "few" : "other" : 1 == e && r ? "one" : "other";
        }
    };
}, function(e, t) {}, function(e, t, o) {
    "use strict";
    var r = o(33), a = o(36);
    r.default.__addLocaleData(a.default), r.default.defaultLocale = "en", t.default = r.default;
}, function(e, t, o) {
    "use strict";
    var r = o(5), a = o(34), n = o(35);
    t.default = s;
    var i = [ "second", "second-short", "minute", "minute-short", "hour", "hour-short", "day", "day-short", "month", "month-short", "year", "year-short" ], l = [ "best fit", "numeric" ];
    function s(e, t) {
        t = t || {}, n.isArray(e) && (e = e.concat()), n.defineProperty(this, "_locale", {
            value: this._resolveLocale(e)
        }), n.defineProperty(this, "_options", {
            value: {
                style: this._resolveStyle(t.style),
                units: this._isValidUnits(t.units) && t.units
            }
        }), n.defineProperty(this, "_locales", {
            value: e
        }), n.defineProperty(this, "_fields", {
            value: this._findFields(this._locale)
        }), n.defineProperty(this, "_messages", {
            value: n.objCreate(null)
        });
        var o = this;
        this.format = function(e, t) {
            return o._format(e, t);
        };
    }
    n.defineProperty(s, "__localeData__", {
        value: n.objCreate(null)
    }), n.defineProperty(s, "__addLocaleData", {
        value: function(e) {
            if (!e || !e.locale) throw new Error("Locale data provided to IntlRelativeFormat is missing a `locale` property value");
            s.__localeData__[e.locale.toLowerCase()] = e, r.default.__addLocaleData(e);
        }
    }), n.defineProperty(s, "defaultLocale", {
        enumerable: !0,
        writable: !0,
        value: void 0
    }), n.defineProperty(s, "thresholds", {
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
    }), s.prototype.resolvedOptions = function() {
        return {
            locale: this._locale,
            style: this._options.style,
            units: this._options.units
        };
    }, s.prototype._compileMessage = function(e) {
        var t, o = this._locales, a = (this._locale, this._fields[e].relativeTime), n = "", i = "";
        for (t in a.future) a.future.hasOwnProperty(t) && (n += " " + t + " {" + a.future[t].replace("{0}", "#") + "}");
        for (t in a.past) a.past.hasOwnProperty(t) && (i += " " + t + " {" + a.past[t].replace("{0}", "#") + "}");
        var l = "{when, select, future {{0, plural, " + n + "}}past {{0, plural, " + i + "}}}";
        return new r.default(l, o);
    }, s.prototype._getMessage = function(e) {
        var t = this._messages;
        return t[e] || (t[e] = this._compileMessage(e)), t[e];
    }, s.prototype._getRelativeUnits = function(e, t) {
        var o = this._fields[t];
        if (o.relative) return o.relative[e];
    }, s.prototype._findFields = function(e) {
        for (var t = s.__localeData__, o = t[e.toLowerCase()]; o; ) {
            if (o.fields) return o.fields;
            o = o.parentLocale && t[o.parentLocale.toLowerCase()];
        }
        throw new Error("Locale data added to IntlRelativeFormat is missing `fields` for :" + e);
    }, s.prototype._format = function(e, t) {
        var o = t && void 0 !== t.now ? t.now : n.dateNow();
        if (void 0 === e && (e = o), !isFinite(o)) throw new RangeError("The `now` option provided to IntlRelativeFormat#format() is not in valid range.");
        if (!isFinite(e)) throw new RangeError("The date value provided to IntlRelativeFormat#format() is not in valid range.");
        var r = a.default(o, e), i = this._options.units || this._selectUnits(r), l = r[i];
        if ("numeric" !== this._options.style) {
            var s = this._getRelativeUnits(l, i);
            if (s) return s;
        }
        return this._getMessage(i).format({
            0: Math.abs(l),
            when: l < 0 ? "past" : "future"
        });
    }, s.prototype._isValidUnits = function(e) {
        if (!e || n.arrIndexOf.call(i, e) >= 0) return !0;
        if ("string" == typeof e) {
            var t = /s$/.test(e) && e.substr(0, e.length - 1);
            if (t && n.arrIndexOf.call(i, t) >= 0) throw new Error('"' + e + '" is not a valid IntlRelativeFormat `units` value, did you mean: ' + t);
        }
        throw new Error('"' + e + '" is not a valid IntlRelativeFormat `units` value, it must be one of: "' + i.join('", "') + '"');
    }, s.prototype._resolveLocale = function(e) {
        "string" == typeof e && (e = [ e ]), e = (e || []).concat(s.defaultLocale);
        var t, o, r, a, n = s.__localeData__;
        for (t = 0, o = e.length; t < o; t += 1) for (r = e[t].toLowerCase().split("-"); r.length; ) {
            if (a = n[r.join("-")]) return a.locale;
            r.pop();
        }
        var i = e.pop();
        throw new Error("No locale data has been added to IntlRelativeFormat for: " + e.join(", ") + ", or the default locale: " + i);
    }, s.prototype._resolveStyle = function(e) {
        if (!e) return l[0];
        if (n.arrIndexOf.call(l, e) >= 0) return e;
        throw new Error('"' + e + '" is not a valid IntlRelativeFormat `style` value, it must be one of: "' + l.join('", "') + '"');
    }, s.prototype._selectUnits = function(e) {
        var t, o, r, a = i.filter(function(e) {
            return e.indexOf("-short") < 1;
        });
        for (t = 0, o = a.length; t < o && (r = a[t], !(Math.abs(e[r]) < s.thresholds[r])); t += 1) ;
        return r;
    };
}, function(e, t, o) {
    "use strict";
    var r = Math.round;
    function a(e) {
        return 400 * e / 146097;
    }
    t.default = function(e, t) {
        var o = r((t = +t) - (e = +e)), n = r(o / 1e3), i = r(n / 60), l = r(i / 60), s = r(l / 24), c = r(s / 7), d = a(s), u = r(12 * d), p = r(d);
        return {
            millisecond: o,
            second: n,
            "second-short": n,
            minute: i,
            "minute-short": i,
            hour: l,
            "hour-short": l,
            day: s,
            "day-short": s,
            week: c,
            "week-short": c,
            month: u,
            "month-short": u,
            year: p,
            "year-short": p
        };
    };
}, function(e, t, o) {
    "use strict";
    var r = Object.prototype.hasOwnProperty, a = Object.prototype.toString, n = function() {
        try {
            return !!Object.defineProperty({}, "a", {});
        } catch (e) {
            return !1;
        }
    }(), i = (!n && Object.prototype.__defineGetter__, n ? Object.defineProperty : function(e, t, o) {
        "get" in o && e.__defineGetter__ ? e.__defineGetter__(t, o.get) : (!r.call(e, t) || "value" in o) && (e[t] = o.value);
    }), l = Object.create || function(e, t) {
        var o, a;
        function n() {}
        for (a in n.prototype = e, o = new n(), t) r.call(t, a) && i(o, a, t[a]);
        return o;
    }, s = Array.prototype.indexOf || function(e, t) {
        var o = this;
        if (!o.length) return -1;
        for (var r = t || 0, a = o.length; r < a; r++) if (o[r] === e) return r;
        return -1;
    }, c = Array.isArray || function(e) {
        return "[object Array]" === a.call(e);
    }, d = Date.now || function() {
        return new Date().getTime();
    };
    t.defineProperty = i, t.objCreate = l, t.arrIndexOf = s, t.isArray = c, t.dateNow = d;
}, function(e, t, o) {
    "use strict";
    t.default = {
        locale: "en",
        pluralRuleFunction: function(e, t) {
            var o = String(e).split("."), r = !o[1], a = Number(o[0]) == e, n = a && o[0].slice(-1), i = a && o[0].slice(-2);
            return t ? 1 == n && 11 != i ? "one" : 2 == n && 12 != i ? "two" : 3 == n && 13 != i ? "few" : "other" : 1 == e && r ? "one" : "other";
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
}, function(e, t) {}, function(e, t, o) {
    "use strict";
    var r = o(39);
    function a() {}
    e.exports = function() {
        function e(e, t, o, a, n, i) {
            if (i !== r) {
                var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw l.name = "Invariant Violation", l;
            }
        }
        function t() {
            return e;
        }
        e.isRequired = e;
        var o = {
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
        return o.checkPropTypes = a, o.PropTypes = o, o;
    };
}, function(e, t, o) {
    "use strict";
    var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    e.exports = r;
}, function(e, t) {
    var o, r, a = e.exports = {};
    function n() {
        throw new Error("setTimeout has not been defined");
    }
    function i() {
        throw new Error("clearTimeout has not been defined");
    }
    function l(e) {
        if (o === setTimeout) return setTimeout(e, 0);
        if ((o === n || !o) && setTimeout) return o = setTimeout, setTimeout(e, 0);
        try {
            return o(e, 0);
        } catch (t) {
            try {
                return o.call(null, e, 0);
            } catch (t) {
                return o.call(this, e, 0);
            }
        }
    }
    function s(e) {
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
            o = "function" == typeof setTimeout ? setTimeout : n;
        } catch (e) {
            o = n;
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : i;
        } catch (e) {
            r = i;
        }
    }();
    var c, d = [], u = !1, p = -1;
    function f() {
        u && c && (u = !1, c.length ? d = c.concat(d) : p = -1, d.length && h());
    }
    function h() {
        if (!u) {
            var e = l(f);
            u = !0;
            for (var t = d.length; t; ) {
                for (c = d, d = []; ++p < t; ) c && c[p].run();
                p = -1, t = d.length;
            }
            c = null, u = !1, s(e);
        }
    }
    function m(e, t) {
        this.fun = e, this.array = t;
    }
    function v() {}
    a.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
        d.push(new m(e, t)), 1 !== d.length || u || l(h);
    }, m.prototype.run = function() {
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
}, function(e, t, o) {
    "use strict";
    var r = o(42);
    function a(e) {
        var t = r.objCreate(null);
        return function() {
            var o = Array.prototype.slice.call(arguments), a = n(o), i = a && t[a];
            return i || (i = new (r.bind.apply(e, [ null ].concat(o)))(), a && (t[a] = i)), 
            i;
        };
    }
    function n(e) {
        if ("undefined" != typeof JSON) {
            var t, o, r, a = [];
            for (t = 0, o = e.length; t < o; t += 1) (r = e[t]) && "object" == typeof r ? a.push(i(r)) : a.push(r);
            return JSON.stringify(a);
        }
    }
    function i(e) {
        var t, o, r, a, n = [], i = [];
        for (t in e) e.hasOwnProperty(t) && i.push(t);
        var l = i.sort();
        for (o = 0, r = l.length; o < r; o += 1) (a = {})[t = l[o]] = e[t], n[o] = a;
        return n;
    }
    t.default = a;
}, function(e, t, o) {
    "use strict";
    var r = Function.prototype.bind || function(e) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var t = Array.prototype.slice.call(arguments, 1), o = this, r = function() {}, a = function() {
            return o.apply(this instanceof r ? this : e, t.concat(Array.prototype.slice.call(arguments)));
        };
        return this.prototype && (r.prototype = this.prototype), a.prototype = new r(), 
        a;
    }, a = Object.prototype.hasOwnProperty, n = function() {
        try {
            return !!Object.defineProperty({}, "a", {});
        } catch (e) {
            return !1;
        }
    }(), i = (!n && Object.prototype.__defineGetter__, n ? Object.defineProperty : function(e, t, o) {
        "get" in o && e.__defineGetter__ ? e.__defineGetter__(t, o.get) : (!a.call(e, t) || "value" in o) && (e[t] = o.value);
    }), l = Object.create || function(e, t) {
        var o, r;
        function n() {}
        for (r in n.prototype = e, o = new n(), t) a.call(t, r) && i(o, r, t[r]);
        return o;
    };
    t.bind = r, t.defineProperty = i, t.objCreate = l;
}, function(e, t, o) {
    "use strict";
    var r = o(23), a = o.n(r), n = document.createElement("div");
    Object.assign(n.style, {
        width: "0",
        height: "0",
        position: "absolute",
        top: "-9999px",
        left: "-9999px"
    }), n.innerHTML = a.a, document.body.insertBefore(n, document.querySelector("#root"));
}, function(e, t, o) {
    "use strict";
    (function(e) {
        var r = o(1);
        t.a = function() {
            return e("div", {
                className: "equatio-form--omnibar-message"
            }, e("h2", {
                className: "equatio-form--omnibar-message__title"
            }, e(r.a, {
                id: "browser-action-popup.disabled-app.title",
                defaultMessage: "Hey there!"
            })), e("p", {
                className: "equatio-form--omnibar-message__text"
            }, e(r.a, {
                id: "browser-action-popup.disabled-app.message",
                defaultMessage: "Looks like this Google App integration has been disabled for your domain. Talk to your admin to have this feature enabled!"
            })), e("ul", {
                className: "equatio-buttonset equatio-buttonset--vertical equatio-buttonset--no-margin"
            }, e("li", {
                className: "equatio-buttonset__item"
            }, e("button", {
                className: "equatio-button",
                onClick: function() {
                    return window.close();
                }
            }, e(r.a, {
                id: "browser-action-popup.disabled-app.dismiss",
                defaultMessage: "OK"
            })))));
        };
    }).call(this, o(0).h);
}, function(e, t, o) {
    "use strict";
    (function(e) {
        var r = o(1);
        t.a = function() {
            return e("div", {
                className: "equatio-form--omnibar-message"
            }, e("h2", {
                className: "equatio-form--omnibar-message__title"
            }, e(r.a, {
                id: "browser-action-popup.unsupported-app.title",
                defaultMessage: "Oh no!"
            })), e("p", {
                className: "equatio-form--omnibar-message__text"
            }, e(r.a, {
                id: "browser-action-popup.unsupported-app.description",
                defaultMessage: "Your current EquatIO subscription does not support this Google App. Upgrade today to experience the power of EquatIO across Google Forms, Sheets, Slides and Drawings. If you are a teacher, {freeForTeachersLink} to learn about our Free for Teachers program before renewing.",
                values: {
                    freeForTeachersLink: e("a", {
                        href: "http://www.texthelp.com/freeforteachers",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, e(r.a, {
                        id: "browser-action-popup.unsupported-app.fft-link",
                        defaultMessage: "click here"
                    }))
                }
            })), e("ul", {
                className: "equatio-form--omnibar-message__list equatio-form--omnibar-message__list--hyphenated"
            }, e("li", null, e(r.a, {
                id: "browser-action-popup.unsupported-app.list-prediction",
                defaultMessage: "The advanced math and chemistry prediction engine"
            })), e("li", null, e(r.a, {
                id: "browser-action-popup.unsupported-app.list-handwriting",
                defaultMessage: "Unlimited handwriting inputs"
            }))), e("ul", {
                className: "equatio-buttonset equatio-buttonset--vertical equatio-buttonset--no-margin"
            }, e("li", {
                className: "equatio-buttonset__item"
            }, e("button", {
                className: "equatio-button upgrade-button",
                onClick: function() {
                    return window.open("https://www.texthelp.com/products/equatio/");
                }
            }, e(r.a, {
                id: "browser-action-popup.unsupported-app.upgrade",
                defaultMessage: "Learn More"
            }))), e("li", {
                className: "equatio-buttonset__item"
            }, e("button", {
                className: "equatio-button",
                onClick: function() {
                    return window.close();
                }
            }, e(r.a, {
                id: "browser-action-popup.unsupported-app.not-today",
                defaultMessage: "Not today, thanks."
            })))));
        };
    }).call(this, o(0).h);
}, function(e, t, o) {
    "use strict";
    (function(e) {
        var r = o(0), a = o(1), n = o(13), i = o(12), l = o(47), s = o(48), c = o(44), d = o(49), u = o(45), p = o(50), f = function() {
            function e(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var r = t[o];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, o, r) {
                return o && e(t.prototype, o), r && e(t, r), t;
            };
        }();
        function h(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function m(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function v(e, t) {
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
        var y = Object.freeze({
            forms: s.a,
            "forms-premium": u.a,
            "forms-disabled": c.a,
            "gapps-premium": u.a,
            "gapps-disabled": c.a,
            "chrome-signin": d.a,
            "web-premium": p.a
        }), b = function(t) {
            function o() {
                h(this, o);
                var e = m(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this)), t = Object(n.parse)(window.location.search).show;
                return e.state = {
                    show: t
                }, e;
            }
            return v(o, r["Component"]), f(o, [ {
                key: "render",
                value: function() {
                    var t = this.state.show, o = y[t] || l.a;
                    return e(a.b, {
                        locale: Object(i.b)(),
                        messages: Object(i.a)()
                    }, e("section", {
                        className: "styleguide-omnibar"
                    }, e("div", {
                        className: "equatio-form equatio-form--omnibar"
                    }, e("svg", {
                        viewBox: "0 0 162.5 54.3",
                        className: "equatio-logo--large"
                    }, e("use", {
                        xlinkHref: "#equatio-svg-logo-large"
                    })), e(o, null))));
                }
            } ]), o;
        }();
        t.a = b;
    }).call(this, o(0).h);
}, function(e, t, o) {
    "use strict";
    (function(e) {
        var r = o(11);
        t.a = function() {
            return e("div", {
                className: "equatio-form--omnibar-message"
            }, e("p", null, e("button", {
                className: "equatio-button",
                onClick: r.d
            }, "Screenshot Reader")));
        };
    }).call(this, o(0).h);
}, function(e, t, o) {
    "use strict";
    (function(e) {
        var r = o(1);
        t.a = function() {
            return e("div", {
                className: "equatio-form--omnibar-message"
            }, e("h2", {
                className: "equatio-form--omnibar-message__title"
            }, e(r.a, {
                id: "browser-action-popup.forms.title",
                defaultMessage: "Quiz time?!"
            })), e("p", {
                className: "equatio-form--omnibar-message__text"
            }, e(r.a, {
                id: "browser-action-popup.forms.message",
                defaultMessage: "Open up EquatIO in Google Forms by clicking on the {equationIcon} icon beside the question or answer you want to work on.",
                values: {
                    equationIcon: e("span", {
                        className: "equatio-inject-wrapper"
                    }, e("svg", {
                        viewBox: "0 0 51.6 49.8",
                        style: {
                            height: "18px",
                            color: "#FFF"
                        }
                    }, e("use", {
                        xlinkHref: "#equatio-svg-tool-equation"
                    })))
                }
            })), e("ul", {
                className: "equatio-buttonset equatio-buttonset--vertical equatio-buttonset--no-margin"
            }, e("li", {
                className: "equatio-buttonset__item"
            }, e("button", {
                className: "equatio-button",
                onClick: function() {
                    return window.close();
                }
            }, e(r.a, {
                id: "browser-action-popup.forms.dismiss",
                defaultMessage: "OK"
            })))));
        };
    }).call(this, o(0).h);
}, function(e, t, o) {
    "use strict";
    (function(e) {
        var r = o(1);
        t.a = function() {
            return e("div", {
                className: "equatio-form--omnibar-message"
            }, e("h2", {
                className: "equatio-form--omnibar-message__title"
            }, e(r.a, {
                id: "browser-action-popup.not-signed-into-chrome.title",
                defaultMessage: "Hey there!"
            })), e("p", {
                className: "equatio-form--omnibar-message__text"
            }, e(r.a, {
                id: "browser-action-popup.not-signed-into-chrome.message",
                defaultMessage: "Looks like you're not signed into Google Chrome :("
            })), e("p", {
                className: "equatio-form--omnibar-message__text"
            }, e(r.a, {
                id: "browser-action-popup.not-signed-into-chrome.sign-in-message",
                defaultMessage: "In order to use all the great features of EquatIO, you need to sign in. {readMoreLink}.",
                values: {
                    readMoreLink: e("a", {
                        href: "https://support.google.com/chrome/answer/185277",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "equatio-link-button",
                        style: {
                            color: "#00B7FF"
                        }
                    }, e(r.a, {
                        id: "browser-action-popup.not-signed-into-chrome.read-more",
                        defaultMessage: "Read More"
                    }))
                }
            })), e("ul", {
                className: "equatio-buttonset equatio-buttonset--vertical equatio-buttonset--no-margin"
            }, e("li", {
                className: "equatio-buttonset__item"
            }, e("button", {
                className: "equatio-button",
                onClick: function() {
                    return window.close();
                }
            }, e(r.a, {
                id: "browser-action-popup.not-signed-into-chrome.dismiss",
                defaultMessage: "OK"
            })))));
        };
    }).call(this, o(0).h);
}, function(e, t, o) {
    "use strict";
    (function(e) {
        var r = o(1);
        t.a = function() {
            return e("div", {
                className: "equatio-form--omnibar-message"
            }, e("h2", {
                className: "equatio-form--omnibar-message__title"
            }, e(r.a, {
                id: "browser-action-popup.web-premium.title",
                defaultMessage: "Hey there!"
            })), e("p", {
                className: "equatio-form--omnibar-message__text"
            }, e(r.a, {
                id: "browser-action-popup.web-premium.message",
                defaultMessage: "You need a {premiumSubscription} to use EquatIO inside web pages",
                values: {
                    premiumSubscription: e("strong", null, e(r.a, {
                        id: "browser-action-popup.web-premium.premium-subscription",
                        defaultMessage: "Premium Subscription"
                    }))
                }
            })), e("ul", {
                className: "equatio-buttonset equatio-buttonset--vertical equatio-buttonset--no-margin"
            }, e("li", {
                className: "equatio-buttonset__item"
            }, e("button", {
                className: "equatio-button upgrade-button",
                onClick: function() {
                    return window.open("https://www.texthelp.com/products/equatio/");
                }
            }, e(r.a, {
                id: "browser-action-popup.web-premium.upgrade",
                defaultMessage: "Learn More"
            }))), e("li", {
                className: "equatio-buttonset__item"
            }, e("button", {
                className: "equatio-button",
                onClick: function() {
                    return window.close();
                }
            }, e(r.a, {
                id: "browser-action-popup.web-premium.dismiss",
                defaultMessage: "OK"
            })))));
        };
    }).call(this, o(0).h);
}, , , , , function(e, t, o) {
    "use strict";
    o.r(t), function(e) {
        var t = o(0), r = (o(56), o(58), o(46));
        o(43), o(60), o(62);
        Object(t.render)(e(r.a, null), document.getElementById("root"));
    }.call(this, o(0).h);
}, function(e, t, o) {
    var r, a = o(57);
    "string" == typeof a && (a = [ [ e.i, a, "" ] ]);
    var n = {
        hmr: !0
    };
    n.transform = r, n.insertInto = void 0;
    o(10)(a, n);
    a.locals && (e.exports = a.locals);
}, function(e, t, o) {
    (e.exports = o(9)(void 0)).push([ e.i, ".equatio-buttonset {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  margin: 0 20px; }\n\n.equatio-buttonset.equatio-buttonset--no-margin {\n  margin: 0; }\n\n.equatio-buttonset__item {\n  margin: 0 10px; }\n  .equatio-buttonset__item:last-child {\n    margin-right: 0; }\n\n.equatio-buttonset__item--full-width {\n  width: 100%; }\n\n.equatio-buttonset--right,\n.equatio-buttonset--vertical--right {\n  -webkit-box-direction: normal;\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -moz-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  -webkit-justify-content: flex-end;\n  -moz-justify-content: flex-end;\n  justify-content: flex-end; }\n\n.equatio-buttonset--center,\n.equatio-buttonset--vertical--center {\n  -webkit-box-direction: normal;\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -moz-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center; }\n\n.equatio-buttonset--vertical {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  margin: 20px 0; }\n  .equatio-buttonset--vertical .equatio-buttonset__item {\n    margin: 10px 0; }\n\n/* stylelint-disable */\n/* stylelint-enable */\n.equatio-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  font-family: Roboto, Arial, sans-serif;\n  background: #00B7FF;\n  color: #FFF;\n  text-transform: uppercase;\n  cursor: pointer;\n  padding: 7px 10px;\n  font-size: 0.85em;\n  margin: 0 10px;\n  min-width: 165px;\n  border-radius: 3px;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 600;\n  -webkit-box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n  -moz-box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n  box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n  letter-spacing: -0.2px; }\n  .equatio-button:hover, .equatio-button:active {\n    background: #33c5ff; }\n  .equatio-button:first-child {\n    margin-left: 0; }\n  .equatio-button:last-child {\n    margin-right: 0; }\n  .equatio-button[disabled] {\n    background: rgba(70, 70, 70, 0.23);\n    cursor: default; }\n\n.equatio-button--white {\n  background: #FFF;\n  color: #00B7FF; }\n  .equatio-button--white:hover {\n    background: #e6f8ff; }\n\n.equatio-button--gold {\n  background: #E5BD13;\n  color: #FFF;\n  font-weight: 500; }\n  .equatio-button--gold:hover {\n    background: #ecc41b; }\n\n.equatio-button--single {\n  margin: 0; }\n\n.equatio-button--small {\n  min-width: 0; }\n\n@media all and (max-width: 945px) {\n  .equatio-toolbar .equatio-button-edit,\n  .equatio-toolbar .equatio-button-insert {\n    width: 32px;\n    min-width: 0;\n    padding: 0;\n    text-indent: -9999px;\n    overflow: hidden;\n    height: 32px;\n    background-position: 50% 50%;\n    background-repeat: no-repeat; }\n  .equatio-toolbar .equatio-button-edit {\n    /* stylelint-disable-next-line */\n    background-image: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='20px' viewBox='0 0 24 24'>%3Cpath d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' fill='%23FFF' /%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E</svg>\"); }\n  .equatio-toolbar .equatio-button-insert {\n    /* stylelint-disable-next-line */\n    background-image: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='20px' viewBox='0 0 24 24'>%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' fill='%23FFF' /%3E</svg>\"); } }\n\n.equatio-button.equatio-copy-button {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  text-transform: none;\n  padding: 0;\n  box-sizing: border-box;\n  height: 32px;\n  width: 32px;\n  -webkit-font-smoothing: antialiased; }\n\n.equatio-copy-button__icon {\n  height: 20px; }\n\n.equatio-form--center {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center; }\n\n.equatio-logo--large {\n  color: #00B7FF;\n  height: 55px; }\n\n.equatio-link-button {\n  font-family: Roboto, Arial, sans-serif;\n  color: #494949;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased; }\n  .equatio-link-button:hover {\n    text-decoration: underline; }\n  .equatio-link-button.equatio-link-button--with-underline {\n    text-decoration: underline; }\n\n.equatio-link-button--small {\n  font-size: 0.8em; }\n\n/* stylelint-disable */\n/* stylelint-enable */\n.equatio-select {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  /* stylelint-disable-next-line */\n  background: #FFF url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='10' viewBox='0 0 6.8 5.9'>%3Cpolygon style='fill:%23666A70;' points='3.4,5.9 0,0 6.8,0 '/%3E</svg>\") calc(100% - 15px) 50% no-repeat;\n  border: 1px solid #EBEBEB;\n  padding: 5px 30px 5px 10px;\n  -webkit-appearance: none;\n  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);\n  font-size: 0.8em;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n  display: block;\n  color: #666A70; }\n\n.equatio-select--full-width {\n  width: 100%; }\n\n.equatio-fieldset {\n  border: 0;\n  padding: 0;\n  margin: 0; }\n\n/* stylelint-disable */\n/* stylelint-enable */\n@keyframes vjXdlbbW_draw {\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_fade {\n  0% {\n    stroke-opacity: 1; }\n  77.77777777777777% {\n    stroke-opacity: 1; }\n  100% {\n    stroke-opacity: 0; } }\n\n@keyframes vjXdlbbW_draw_0 {\n  0% {\n    stroke-dashoffset: 2317; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_1 {\n  0% {\n    stroke-dashoffset: 282; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_2 {\n  0% {\n    stroke-dashoffset: 504; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_3 {\n  0% {\n    stroke-dashoffset: 282; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_4 {\n  0% {\n    stroke-dashoffset: 504; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_5 {\n  0% {\n    stroke-dashoffset: 282; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_6 {\n  0% {\n    stroke-dashoffset: 504; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_7 {\n  0% {\n    stroke-dashoffset: 282; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_8 {\n  0% {\n    stroke-dashoffset: 504; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@-webkit-keyframes rotate {\n  20% {\n    -webkit-transform: rotateY(180deg); }\n  30% {\n    -webkit-transform: rotateY(360deg); }\n  100% {\n    -webkit-transform: rotateY(360deg); } }\n\n.equatio-save-loading-spinner {\n  padding: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  margin: 5px;\n  /* stylelint-disable-next-line */\n  background: #28D88C url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='27' viewBox='0 0 912 912'>%3Cstyle type='text/css'%3E\t.st0{fill:none;stroke:%23FFF;stroke-width:52.5138;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st1{fill:none;stroke:%23FFF;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st2{fill:none;stroke:%23FFF;stroke-width:40.8129;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  %3C/style%3E  %3Cpath class='st0 vjXdlbbW_0' d='M833.3,513.4L523,823.8c-54.5,0-85.6,0-140,0L72.6,513.4c0-54.5,0-85.6,0-140L383,63.1c54.5,0,85.6,0,140,0\tl310.3,310.3C833.3,427.9,833.3,459,833.3,513.4z'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_1' d='M262.8,445.6L461.1,643.9'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_2' d='M453.4,650.2L401.9,701.7L97.8,397.6'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_3' d='M449.1,637.7L647.4,439.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_4' d='M653.7,447.1L705.2,498.6L401,802.7'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_5' d='M643.3,444.5L445,246.2'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_6' d='M452.8,239.8L504.2,188.4L808.4,492.5'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_7' d='M452.8,253.1L254.5,451.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_8' d='M248.2,443.6L196.7,392.2L500.9,88.1'%3E%3C/path%3E  %3Cstyle%3E@supports (-webkit-appearance:none) { .vjXdlbbW_0{stroke-dasharray:2316 2318;stroke-dashoffset:2317;animation:vjXdlbbW_draw_0 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_1{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_1 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_2{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_2 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_3{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_3 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_4{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_4 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_5{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_5 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_6{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_6 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_7{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_7 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_8{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_8 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}@keyframes vjXdlbbW_draw{100%{stroke-dashoffset:0;}}@keyframes vjXdlbbW_fade{0%{stroke-opacity:1;}77.77777777777777%{stroke-opacity:1;}100%{stroke-opacity:0;}}@keyframes vjXdlbbW_draw_0{0%{stroke-dashoffset: 2317}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_1{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_2{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_3{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_4{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_5{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_6{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_7{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_8{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}} }%3C/style%3E</svg>\") 50% 50% no-repeat; }\n\n.equatio-loading-spinner {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  box-sizing: border-box;\n  /* stylelint-disable-next-line */\n  background: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='80' viewBox='0 0 912 912'>%3Cstyle type='text/css'%3E\t.st0{fill:none;stroke:%2300B7FF;stroke-width:52.5138;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st1{fill:none;stroke:%2300B7FF;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st2{fill:none;stroke:%2300B7FF;stroke-width:40.8129;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  %3C/style%3E  %3Cpath class='st0 vjXdlbbW_0' d='M833.3,513.4L523,823.8c-54.5,0-85.6,0-140,0L72.6,513.4c0-54.5,0-85.6,0-140L383,63.1c54.5,0,85.6,0,140,0\tl310.3,310.3C833.3,427.9,833.3,459,833.3,513.4z'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_1' d='M262.8,445.6L461.1,643.9'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_2' d='M453.4,650.2L401.9,701.7L97.8,397.6'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_3' d='M449.1,637.7L647.4,439.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_4' d='M653.7,447.1L705.2,498.6L401,802.7'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_5' d='M643.3,444.5L445,246.2'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_6' d='M452.8,239.8L504.2,188.4L808.4,492.5'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_7' d='M452.8,253.1L254.5,451.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_8' d='M248.2,443.6L196.7,392.2L500.9,88.1'%3E%3C/path%3E  %3Cstyle%3E@supports (-webkit-appearance:none) { .vjXdlbbW_0{stroke-dasharray:2316 2318;stroke-dashoffset:2317;animation:vjXdlbbW_draw_0 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_1{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_1 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_2{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_2 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_3{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_3 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_4{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_4 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_5{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_5 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_6{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_6 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_7{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_7 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_8{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_8 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}@keyframes vjXdlbbW_draw{100%{stroke-dashoffset:0;}}@keyframes vjXdlbbW_fade{0%{stroke-opacity:1;}77.77777777777777%{stroke-opacity:1;}100%{stroke-opacity:0;}}@keyframes vjXdlbbW_draw_0{0%{stroke-dashoffset: 2317}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_1{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_2{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_3{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_4{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_5{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_6{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_7{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_8{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}} }%3C/style%3E</svg>\") 50% 50% no-repeat;\n  padding-top: 100px;\n  background-size: 80px; }\n  .equatio-loading-spinner.equatio-loading-spinner--white {\n    /* stylelint-disable-next-line */\n    background-image: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='80' viewBox='0 0 912 912'>%3Cstyle type='text/css'%3E\t.st0{fill:none;stroke:%23FFF;stroke-width:52.5138;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st1{fill:none;stroke:%23FFF;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st2{fill:none;stroke:%23FFF;stroke-width:40.8129;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  %3C/style%3E  %3Cpath class='st0 vjXdlbbW_0' d='M833.3,513.4L523,823.8c-54.5,0-85.6,0-140,0L72.6,513.4c0-54.5,0-85.6,0-140L383,63.1c54.5,0,85.6,0,140,0\tl310.3,310.3C833.3,427.9,833.3,459,833.3,513.4z'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_1' d='M262.8,445.6L461.1,643.9'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_2' d='M453.4,650.2L401.9,701.7L97.8,397.6'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_3' d='M449.1,637.7L647.4,439.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_4' d='M653.7,447.1L705.2,498.6L401,802.7'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_5' d='M643.3,444.5L445,246.2'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_6' d='M452.8,239.8L504.2,188.4L808.4,492.5'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_7' d='M452.8,253.1L254.5,451.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_8' d='M248.2,443.6L196.7,392.2L500.9,88.1'%3E%3C/path%3E  %3Cstyle%3E@supports (-webkit-appearance:none) { .vjXdlbbW_0{stroke-dasharray:2316 2318;stroke-dashoffset:2317;animation:vjXdlbbW_draw_0 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_1{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_1 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_2{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_2 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_3{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_3 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_4{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_4 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_5{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_5 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_6{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_6 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_7{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_7 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_8{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_8 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}@keyframes vjXdlbbW_draw{100%{stroke-dashoffset:0;}}@keyframes vjXdlbbW_fade{0%{stroke-opacity:1;}77.77777777777777%{stroke-opacity:1;}100%{stroke-opacity:0;}}@keyframes vjXdlbbW_draw_0{0%{stroke-dashoffset: 2317}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_1{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_2{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_3{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_4{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_5{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_6{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_7{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_8{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}} }%3C/style%3E</svg>\"); }\n    .equatio-loading-spinner.equatio-loading-spinner--white .equatio-loading-spinner__message {\n      color: #FFF; }\n\n.equatio-drawer__content__pane__spinner {\n  height: 200px; }\n  .equatio-drawer__content__pane__spinner .equatio-loading-spinner__icon {\n    height: 80px;\n    -webkit-animation-name: rotate;\n    -webkit-animation-duration: 3s;\n    -webkit-animation-iteration-count: infinite;\n    -webkit-animation-timing-function: ease-in-out; }\n\n.equatio-loading-spinner__message {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  color: #00B7FF;\n  font-weight: 600;\n  -webkit-font-smoothing: antialiased; }\n\n.equatio-error {\n  font-size: 0.8em;\n  color: #E51010; }\n\n/* stylelint-disable */\n/* stylelint-enable */\n.equatio-radio-checkbox {\n  -webkit-appearance: none;\n  cursor: pointer; }\n  .equatio-radio-checkbox:hover:before {\n    filter: drop-shadow(1px 1px 2px #666); }\n  .equatio-radio-checkbox:checked:before {\n    /* stylelint-disable-next-line */\n    content: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='25px' viewBox='0 0 24.905 16.056'>%3Cg%3E\t%3Cpath fill='%236BC9F1' d='M22,7.504c0,2.485-2.015,4.5-4.5,4.5h-13c-2.485,0-4.5-2.015-4.5-4.5l0,0c0-2.485,2.015-4.5,4.5-4.5h13\t\tC19.985,3.004,22,5.018,22,7.504L22,7.504z'/%3E\t%3Cg%3E\t\t%3Cg%3E\t\t\t\t\t\t%3Ccircle fill='%2340B0E5' cx='17.029' cy='7.864' r='6.548'/%3E\t\t%3C/g%3E\t\t%3Cg opacity='0.04'%3E\t\t\t%3ClinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='17.0286' y1='14.4113' x2='17.0286' y2='1.3161'%3E\t\t\t\t%3Cstop  offset='0' style='stop-color:%23000000'/%3E\t\t\t\t%3Cstop  offset='0.1375' style='stop-color:%23000000;stop-opacity:0.8625'/%3E\t\t\t\t%3Cstop  offset='1' style='stop-color:%23000000;stop-opacity:0'/%3E\t\t\t%3C/linearGradient%3E\t\t\t%3Cpath fill='url(%23SVGID_1_)' d='M17.029,1.643c3.43,0,6.22,2.79,6.22,6.22c0,3.43-2.79,6.22-6.22,6.22s-6.22-2.79-6.22-6.22\t\t\t\tC10.808,4.434,13.599,1.643,17.029,1.643 M17.029,1.316c-3.616,0-6.548,2.932-6.548,6.548c0,3.616,2.931,6.548,6.548,6.548\t\t\t\tc3.616,0,6.548-2.931,6.548-6.548C23.576,4.248,20.645,1.316,17.029,1.316L17.029,1.316z'/%3E\t\t%3C/g%3E\t%3C/g%3E%3C/g%3E</svg>\"); }\n  .equatio-radio-checkbox:before {\n    filter: drop-shadow(1px 1px 2px #999);\n    /* stylelint-disable-next-line */\n    content: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='25px' viewBox='0 0 24.905 16.056'>%3Cg style='    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);'%3E\t%3Cpath opacity='0.26' fill='%23221F1F' d='M24.905,8.159c0,2.531-2.049,5-4.576,5H7.22c-2.527,0-4.576-2.469-4.576-5l0,0\t\tc0-2.531,2.049-5,4.576-5h13.109C22.856,3.159,24.905,5.627,24.905,8.159L24.905,8.159z'/%3E\t%3Cg%3E\t\t%3Cg%3E\t\t\t%3Ccircle fill='%23FBFBFB' cx='7.864' cy='7.864' r='6.548'/%3E\t\t%3C/g%3E\t\t%3Cg%3E\t\t\t%3Ccircle fill='%23F1F1F1' cx='7.864' cy='7.864' r='6.548'/%3E\t\t%3C/g%3E\t\t%3Cg opacity='0.04'%3E\t\t\t%3ClinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='7.8637' y1='14.4113' x2='7.8637' y2='1.3161'%3E\t\t\t\t%3Cstop  offset='0' style='stop-color:%23000000'/%3E\t\t\t\t%3Cstop  offset='0.1375' style='stop-color:%23000000;stop-opacity:0.8625'/%3E\t\t\t\t%3Cstop  offset='1' style='stop-color:%23000000;stop-opacity:0'/%3E\t\t\t%3C/linearGradient%3E\t\t\t%3Cpath fill='url(%23SVGID_1_)' d='M7.864,1.643c3.43,0,6.22,2.79,6.22,6.22c0,3.43-2.79,6.22-6.22,6.22c-3.43,0-6.22-2.79-6.22-6.22\t\t\t\tC1.643,4.434,4.434,1.643,7.864,1.643 M7.864,1.316c-3.616,0-6.548,2.932-6.548,6.548c0,3.616,2.931,6.548,6.548,6.548\t\t\t\ts6.548-2.931,6.548-6.548C14.411,4.248,11.48,1.316,7.864,1.316L7.864,1.316z'/%3E\t\t%3C/g%3E\t\t%3Cg opacity='0.12'%3E\t\t\t%3ClinearGradient id='SVGID_2_' gradientUnits='userSpaceOnUse' x1='7.8637' y1='14.4113' x2='7.8637' y2='1.3161'%3E\t\t\t\t%3Cstop  offset='0' style='stop-color:%23FFFFFF;stop-opacity:0'/%3E\t\t\t\t%3Cstop  offset='0.8625' style='stop-color:%23FFFFFF;stop-opacity:0.8625'/%3E\t\t\t\t%3Cstop  offset='1' style='stop-color:%23FFFFFF'/%3E\t\t\t%3C/linearGradient%3E\t\t\t%3Cpath fill='url(%23SVGID_2_)' d='M7.864,1.643c3.43,0,6.22,2.79,6.22,6.22c0,3.43-2.79,6.22-6.22,6.22c-3.43,0-6.22-2.79-6.22-6.22\t\t\t\tC1.643,4.434,4.434,1.643,7.864,1.643 M7.864,1.316c-3.616,0-6.548,2.932-6.548,6.548c0,3.616,2.931,6.548,6.548,6.548\t\t\t\ts6.548-2.931,6.548-6.548C14.411,4.248,11.48,1.316,7.864,1.316L7.864,1.316z'/%3E\t\t%3C/g%3E\t%3C/g%3E%3C/g%3E</svg>\");\n    display: block; }\n\n.equatio-text-input {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  background: transparent;\n  border: 0;\n  border-bottom: 2px solid #00B7FF;\n  font-size: 0.8em;\n  padding: 5px 0;\n  color: #666A70; }\n  .equatio-text-input[disabled] {\n    background: #F3F3F3;\n    color: #666A70; }\n\n.equatio-toolbar-button--premium[disabled] {\n  opacity: 1; }\n\n.equatio-toolbar-button--premium[disabled] .equatio-toolbar-button__icon {\n  opacity: 0.3; }\n\n.equatio-premium-icon {\n  height: 24px;\n  width: 24px;\n  color: #00B7FF; }\n\n.equatio-toolbar-button .equatio-premium-icon {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  transform: scale(0.8); }\n\n.equatio-toolbar-button:focus .equatio-premium-icon {\n  outline: 0; }\n\n.equatio-toolbar-button.equatio-toolbar-button--selected .equatio-premium-icon {\n  top: -12px;\n  right: -12px; }\n", "" ]);
}, function(e, t, o) {
    var r, a = o(59);
    "string" == typeof a && (a = [ [ e.i, a, "" ] ]);
    var n = {
        hmr: !0
    };
    n.transform = r, n.insertInto = void 0;
    o(10)(a, n);
    a.locals && (e.exports = a.locals);
}, function(e, t, o) {
    (e.exports = o(9)(void 0)).push([ e.i, '.equatio-form--omnibar {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  background: #F2F2F2;\n  width: 300px;\n  padding: 20px 0; }\n\n.equatio-form--omnibar__subtitle {\n  margin: 0 0 10px;\n  font-family: "Open Sans", Arial, sans-serif;\n  color: #484A4F;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.85em; }\n\n.equatio-form--omnibar__question {\n  font-family: "Open Sans", Arial, sans-serif;\n  color: #484A4F;\n  -webkit-font-smoothing: antialiased;\n  border-bottom: 1px solid #00B7FF;\n  font-size: 0.9em;\n  padding: 2px 20px 2px 0;\n  margin-bottom: 5px;\n  display: block; }\n\n.equatio-form--omnibar__linkset {\n  margin-top: 20px; }\n\n.equatio-form--omnibar__title {\n  font-family: "Open Sans", Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 600;\n  font-size: 1em;\n  margin: 20px 0 5px;\n  color: #484A4F; }\n  .equatio-form--omnibar__title.equatio-form--omnibar__title--with-subtitle {\n    margin-bottom: 0; }\n\n.equatio-form--omnibar-message {\n  margin: 0 20px; }\n\n.equatio-form--omnibar-message__title {\n  font-family: "Open Sans", Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 600;\n  font-size: 1em;\n  margin: 20px 0 5px;\n  color: #484A4F; }\n\n.equatio-form--omnibar-message__text {\n  margin: 0 0 10px;\n  font-family: "Open Sans", Arial, sans-serif;\n  color: #484A4F;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.85em; }\n\n.equatio-form--omnibar-message__list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  box-sizing: border-box;\n  color: #484A4F;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.95em;\n  font-weight: 600; }\n\n.equatio-form--omnibar-message__list--hyphenated {\n  /* stylelint-disable-next-line */ }\n  .equatio-form--omnibar-message__list--hyphenated > li {\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex; }\n  .equatio-form--omnibar-message__list--hyphenated > li:before {\n    content: "-";\n    display: block;\n    margin-right: 5px; }\n', "" ]);
}, function(e, t, o) {
    var r, a = o(61);
    "string" == typeof a && (a = [ [ e.i, a, "" ] ]);
    var n = {
        hmr: !0
    };
    n.transform = r, n.insertInto = void 0;
    o(10)(a, n);
    a.locals && (e.exports = a.locals);
}, function(e, t, o) {
    (e.exports = o(9)(void 0)).push([ e.i, "body {\n  margin: 0;\n  padding: 0;\n  font-size: 1em; }\n\nh1 {\n  margin: 0; }\n\n.equatio-inject-wrapper {\n  background: #00B7FF;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  text-align: center; }\n  .equatio-inject-wrapper img {\n    height: 11px; }\n", "" ]);
}, function(e, t, o) {
    var r, a = o(63);
    "string" == typeof a && (a = [ [ e.i, a, "" ] ]);
    var n = {
        hmr: !0
    };
    n.transform = r, n.insertInto = void 0;
    o(10)(a, n);
    a.locals && (e.exports = a.locals);
}, function(e, t, o) {
    (e.exports = o(9)(void 0)).push([ e.i, ".equatio-select.error {\n  border: 1px solid #E51010; }\n", "" ]);
} ]);