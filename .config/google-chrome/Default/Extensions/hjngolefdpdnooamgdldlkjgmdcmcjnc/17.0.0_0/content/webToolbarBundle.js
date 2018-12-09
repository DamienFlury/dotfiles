!function(e) {
    function t(t) {
        for (var n, o, i = t[0], a = t[1], s = 0, l = []; s < i.length; s++) o = i[s], r[o] && l.push(r[o][0]), 
        r[o] = 0;
        for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        for (u && u(t); l.length; ) l.shift()();
    }
    var n = {}, r = {
        1: 0
    };
    function o(e) {
        return i.p + "" + e + ".3a60324ec12669cbb11b.js";
    }
    function i(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
    }
    i.e = function(e) {
        var t = [], n = r[e];
        if (0 !== n) if (n) t.push(n[2]); else {
            var a = new Promise(function(t, o) {
                n = r[e] = [ t, o ];
            });
            t.push(n[2] = a);
            var s, l = document.getElementsByTagName("head")[0], u = document.createElement("script");
            u.charset = "utf-8", u.timeout = 120, i.nc && u.setAttribute("nonce", i.nc), u.src = o(e), 
            s = function(t) {
                u.onerror = u.onload = null, clearTimeout(c);
                var n = r[e];
                if (0 !== n) {
                    if (n) {
                        var o = t && ("load" === t.type ? "missing" : t.type), i = t && t.target && t.target.src, a = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + i + ")");
                        a.type = o, a.request = i, n[1](a);
                    }
                    r[e] = void 0;
                }
            };
            var c = setTimeout(function() {
                s({
                    type: "timeout",
                    target: u
                });
            }, 12e4);
            u.onerror = u.onload = s, l.appendChild(u);
        }
        return Promise.all(t);
    }, i.m = e, i.c = n, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        });
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) i.d(n, r, function(t) {
            return e[t];
        }.bind(null, r));
        return n;
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return i.d(t, "a", t), t;
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, i.p = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/content/", i.oe = function(e) {
        throw e;
    };
    var a = window.equatioChromeWebpackJsonP = window.equatioChromeWebpackJsonP || [], s = a.push.bind(a);
    a.push = t, a = a.slice();
    for (var l = 0; l < a.length; l++) t(a[l]);
    var u = s;
    i(i.s = 3);
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
        return W;
    }), n.d(t, "rerender", function() {
        return v;
    }), n.d(t, "options", function() {
        return o;
    });
    var r = function() {}, o = {}, i = [], a = [];
    function s(e, t) {
        var n, s, l, u, c = a;
        for (u = arguments.length; u-- > 2; ) i.push(arguments[u]);
        for (t && null != t.children && (i.length || i.push(t.children), delete t.children); i.length; ) if ((s = i.pop()) && void 0 !== s.pop) for (u = s.length; u--; ) i.push(s[u]); else "boolean" == typeof s && (s = null), 
        (l = "function" != typeof e) && (null == s ? s = "" : "number" == typeof s ? s = String(s) : "string" != typeof s && (l = !1)), 
        l && n ? c[c.length - 1] += s : c === a ? c = [ s ] : c.push(s), n = l;
        var f = new r();
        return f.nodeName = e, f.children = c, f.attributes = null == t ? void 0 : t, f.key = null == t ? void 0 : t.key, 
        void 0 !== o.vnode && o.vnode(f), f;
    }
    function l(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
    }
    var u = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
    function c(e, t) {
        return s(e.nodeName, l(l({}, e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
    }
    var f = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i, p = [];
    function d(e) {
        !e._dirty && (e._dirty = !0) && 1 == p.push(e) && (o.debounceRendering || u)(v);
    }
    function v() {
        var e, t = p;
        for (p = []; e = t.pop(); ) e._dirty && R(e);
    }
    function h(e, t, n) {
        return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && m(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
    }
    function m(e, t) {
        return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase();
    }
    function y(e) {
        var t = l({}, e.attributes);
        t.children = e.children;
        var n = e.nodeName.defaultProps;
        if (void 0 !== n) for (var r in n) void 0 === t[r] && (t[r] = n[r]);
        return t;
    }
    function b(e, t) {
        var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);
        return n.normalizedNodeName = e, n;
    }
    function g(e) {
        var t = e.parentNode;
        t && t.removeChild(e);
    }
    function _(e, t, n, r, o) {
        if ("className" === t && (t = "class"), "key" === t) ; else if ("ref" === t) n && n(null), 
        r && r(e); else if ("class" !== t || o) if ("style" === t) {
            if (r && "string" != typeof r && "string" != typeof n || (e.style.cssText = r || ""), 
            r && "object" == typeof r) {
                if ("string" != typeof n) for (var i in n) i in r || (e.style[i] = "");
                for (var i in r) e.style[i] = "number" == typeof r[i] && !1 === f.test(i) ? r[i] + "px" : r[i];
            }
        } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || ""); else if ("o" == t[0] && "n" == t[1]) {
            var a = t !== (t = t.replace(/Capture$/, ""));
            t = t.toLowerCase().substring(2), r ? n || e.addEventListener(t, x, a) : e.removeEventListener(t, x, a), 
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
    var w = [], C = 0, N = !1, S = !1;
    function U() {
        for (var e; e = w.pop(); ) o.afterMount && o.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
    function j(e, t, n, r, o, i) {
        C++ || (N = null != o && void 0 !== o.ownerSVGElement, S = null != e && !("__preactattr_" in e));
        var a = k(e, t, n, r, i);
        return o && a.parentNode !== o && o.appendChild(a), --C || (S = !1, i || U()), a;
    }
    function k(e, t, n, r, o) {
        var i = e, a = N;
        if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || o) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), 
        e && (e.parentNode && e.parentNode.replaceChild(i, e), P(e, !0))), i.__preactattr_ = !0, 
        i;
        var s = t.nodeName;
        if ("function" == typeof s) return q(e, t, n, r);
        if (N = "svg" === s || "foreignObject" !== s && N, s = String(s), (!e || !m(e, s)) && (i = b(s, N), 
        e)) {
            for (;e.firstChild; ) i.appendChild(e.firstChild);
            e.parentNode && e.parentNode.replaceChild(i, e), P(e, !0);
        }
        var l = i.firstChild, u = i.__preactattr_, c = t.children;
        if (null == u) {
            u = i.__preactattr_ = {};
            for (var f = i.attributes, p = f.length; p--; ) u[f[p].name] = f[p].value;
        }
        return !S && c && 1 === c.length && "string" == typeof c[0] && null != l && void 0 !== l.splitText && null == l.nextSibling ? l.nodeValue != c[0] && (l.nodeValue = c[0]) : (c && c.length || null != l) && L(i, c, n, r, S || null != u.dangerouslySetInnerHTML), 
        E(i, t.attributes, u), N = a, i;
    }
    function L(e, t, n, r, o) {
        var i, a, s, l, u, c = e.childNodes, f = [], p = {}, d = 0, v = 0, m = c.length, y = 0, b = t ? t.length : 0;
        if (0 !== m) for (var _ = 0; _ < m; _++) {
            var x = c[_], w = x.__preactattr_;
            null != (C = b && w ? x._component ? x._component.__key : w.key : null) ? (d++, 
            p[C] = x) : (w || (void 0 !== x.splitText ? !o || x.nodeValue.trim() : o)) && (f[y++] = x);
        }
        if (0 !== b) for (_ = 0; _ < b; _++) {
            var C;
            if (u = null, null != (C = (l = t[_]).key)) d && void 0 !== p[C] && (u = p[C], p[C] = void 0, 
            d--); else if (v < y) for (i = v; i < y; i++) if (void 0 !== f[i] && h(a = f[i], l, o)) {
                u = a, f[i] = void 0, i === y - 1 && y--, i === v && v++;
                break;
            }
            u = k(u, l, n, r), s = c[_], u && u !== e && u !== s && (null == s ? e.appendChild(u) : u === s.nextSibling ? g(s) : e.insertBefore(u, s));
        }
        if (d) for (var _ in p) void 0 !== p[_] && P(p[_], !1);
        for (;v <= y; ) void 0 !== (u = f[y--]) && P(u, !1);
    }
    function P(e, t) {
        var n = e._component;
        n ? I(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), 
        !1 !== t && null != e.__preactattr_ || g(e), T(e));
    }
    function T(e) {
        for (e = e.lastChild; e; ) {
            var t = e.previousSibling;
            P(e, !0), e = t;
        }
    }
    function E(e, t, n) {
        var r;
        for (r in n) t && null != t[r] || null == n[r] || _(e, r, n[r], n[r] = void 0, N);
        for (r in t) "children" === r || "innerHTML" === r || r in n && t[r] === ("value" === r || "checked" === r ? e[r] : n[r]) || _(e, r, n[r], n[r] = t[r], N);
    }
    var M = [];
    function O(e, t, n) {
        var r, o = M.length;
        for (e.prototype && e.prototype.render ? (r = new e(t, n), D.call(r, t, n)) : ((r = new D(t, n)).constructor = e, 
        r.render = B); o--; ) if (M[o].constructor === e) return r.nextBase = M[o].nextBase, 
        M.splice(o, 1), r;
        return r;
    }
    function B(e, t, n) {
        return this.constructor(e, n);
    }
    function A(e, t, n, r, i) {
        e._disable || (e._disable = !0, e.__ref = t.ref, e.__key = t.key, delete t.ref, 
        delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r)), 
        r && r !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = r), 
        e.prevProps || (e.prevProps = e.props), e.props = t, e._disable = !1, 0 !== n && (1 !== n && !1 === o.syncComponentUpdates && e.base ? d(e) : R(e, 1, i)), 
        e.__ref && e.__ref(e));
    }
    function R(e, t, n, r) {
        if (!e._disable) {
            var i, a, s, u = e.props, c = e.state, f = e.context, p = e.prevProps || u, d = e.prevState || c, v = e.prevContext || f, h = e.base, m = e.nextBase, b = h || m, g = e._component, _ = !1, x = v;
            if (e.constructor.getDerivedStateFromProps && (c = l(l({}, c), e.constructor.getDerivedStateFromProps(u, c)), 
            e.state = c), h && (e.props = p, e.state = d, e.context = v, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(u, c, f) ? _ = !0 : e.componentWillUpdate && e.componentWillUpdate(u, c, f), 
            e.props = u, e.state = c, e.context = f), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, 
            e._dirty = !1, !_) {
                i = e.render(u, c, f), e.getChildContext && (f = l(l({}, f), e.getChildContext())), 
                h && e.getSnapshotBeforeUpdate && (x = e.getSnapshotBeforeUpdate(p, d));
                var N, S, k = i && i.nodeName;
                if ("function" == typeof k) {
                    var L = y(i);
                    (a = g) && a.constructor === k && L.key == a.__key ? A(a, L, 1, f, !1) : (N = a, 
                    e._component = a = O(k, L, f), a.nextBase = a.nextBase || m, a._parentComponent = e, 
                    A(a, L, 0, f, !1), R(a, 1, n, !0)), S = a.base;
                } else s = b, (N = g) && (s = e._component = null), (b || 1 === t) && (s && (s._component = null), 
                S = j(s, i, f, n || !h, b && b.parentNode, !0));
                if (b && S !== b && a !== g) {
                    var T = b.parentNode;
                    T && S !== T && (T.replaceChild(S, b), N || (b._component = null, P(b, !1)));
                }
                if (N && I(N), e.base = S, S && !r) {
                    for (var E = e, M = e; M = M._parentComponent; ) (E = M).base = S;
                    S._component = E, S._componentConstructor = E.constructor;
                }
            }
            for (!h || n ? w.unshift(e) : _ || (e.componentDidUpdate && e.componentDidUpdate(p, d, x), 
            o.afterUpdate && o.afterUpdate(e)); e._renderCallbacks.length; ) e._renderCallbacks.pop().call(e);
            C || r || U();
        }
    }
    function q(e, t, n, r) {
        for (var o = e && e._component, i = o, a = e, s = o && e._componentConstructor === t.nodeName, l = s, u = y(t); o && !l && (o = o._parentComponent); ) l = o.constructor === t.nodeName;
        return o && l && (!r || o._component) ? (A(o, u, 3, n, r), e = o.base) : (i && !s && (I(i), 
        e = a = null), o = O(t.nodeName, u, n), e && !o.nextBase && (o.nextBase = e, a = null), 
        A(o, u, 1, n, r), e = o.base, a && e !== a && (a._component = null, P(a, !1))), 
        e;
    }
    function I(e) {
        o.beforeUnmount && o.beforeUnmount(e);
        var t = e.base;
        e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
        var n = e._component;
        n ? I(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), 
        e.nextBase = t, g(t), M.push(e), T(t)), e.__ref && e.__ref(null);
    }
    function D(e, t) {
        this._dirty = !0, this.context = t, this.props = e, this.state = this.state || {}, 
        this._renderCallbacks = [];
    }
    function W(e, t, n) {
        return j(n, e, {}, !1, t, !1);
    }
    l(D.prototype, {
        setState: function(e, t) {
            this.prevState || (this.prevState = this.state), this.state = l(l({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), 
            t && this._renderCallbacks.push(t), d(this);
        },
        forceUpdate: function(e) {
            e && this._renderCallbacks.push(e), R(this, 2);
        },
        render: function() {}
    });
    var H = {
        h: s,
        createElement: s,
        cloneElement: c,
        Component: D,
        render: W,
        rerender: v,
        options: o
    };
    t.default = H;
}, function(e, t) {
    function n(e, t) {
        var n = e[1] || "", o = e[3];
        if (!o) return n;
        if (t && "function" == typeof btoa) {
            var i = r(o), a = o.sources.map(function(e) {
                return "/*# sourceURL=" + o.sourceRoot + e + " */";
            });
            return [ n ].concat(a).concat([ i ]).join("\n");
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
                var i = this[o][0];
                "number" == typeof i && (r[i] = !0);
            }
            for (o = 0; o < e.length; o++) {
                var a = e[o];
                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), 
                t.push(a));
            }
        }, t;
    };
}, function(e, t, n) {
    var r, o = {}, i = function(e) {
        var t;
        return function() {
            return void 0 === t && (t = e.apply(this, arguments)), t;
        };
    }(function() {
        return window && document && document.all && !window.atob;
    }), a = function(e) {
        return document.querySelector(e);
    }, s = (r = {}, function(e) {
        if ("function" == typeof e) return e();
        if (void 0 === r[e]) {
            var t = a.call(this, e);
            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                t = t.contentDocument.head;
            } catch (e) {
                t = null;
            }
            r[e] = t;
        }
        return r[e];
    }), l = null, u = 0, c = [], f = n(6);
    function p(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n], i = o[r.id];
            if (i) {
                i.refs++;
                for (var a = 0; a < i.parts.length; a++) i.parts[a](r.parts[a]);
                for (;a < r.parts.length; a++) i.parts.push(g(r.parts[a], t));
            } else {
                var s = [];
                for (a = 0; a < r.parts.length; a++) s.push(g(r.parts[a], t));
                o[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: s
                };
            }
        }
    }
    function d(e, t) {
        for (var n = [], r = {}, o = 0; o < e.length; o++) {
            var i = e[o], a = t.base ? i[0] + t.base : i[0], s = {
                css: i[1],
                media: i[2],
                sourceMap: i[3]
            };
            r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                id: a,
                parts: [ s ]
            });
        }
        return n;
    }
    function v(e, t) {
        var n = s(e.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = c[c.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), 
        c.push(t); else if ("bottom" === e.insertAt) n.appendChild(t); else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = s(e.insertInto + " " + e.insertAt.before);
            n.insertBefore(t, o);
        }
    }
    function h(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = c.indexOf(e);
        t >= 0 && c.splice(t, 1);
    }
    function m(e) {
        var t = document.createElement("style");
        return void 0 === e.attrs.type && (e.attrs.type = "text/css"), b(t, e.attrs), v(e, t), 
        t;
    }
    function y(e) {
        var t = document.createElement("link");
        return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", 
        b(t, e.attrs), v(e, t), t;
    }
    function b(e, t) {
        Object.keys(t).forEach(function(n) {
            e.setAttribute(n, t[n]);
        });
    }
    function g(e, t) {
        var n, r, o, i;
        if (t.transform && e.css) {
            if (!(i = t.transform(e.css))) return function() {};
            e.css = i;
        }
        if (t.singleton) {
            var a = u++;
            n = l || (l = m(t)), r = w.bind(null, n, a, !1), o = w.bind(null, n, a, !0);
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = y(t), 
        r = N.bind(null, n, t), o = function() {
            h(n), n.href && URL.revokeObjectURL(n.href);
        }) : (n = m(t), r = C.bind(null, n), o = function() {
            h(n);
        });
        return r(e), function(t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                r(e = t);
            } else o();
        };
    }
    e.exports = function(e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = i()), 
        t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
        var n = d(e, t);
        return p(n, t), function(e) {
            for (var r = [], i = 0; i < n.length; i++) {
                var a = n[i];
                (s = o[a.id]).refs--, r.push(s);
            }
            e && p(d(e, t), t);
            for (i = 0; i < r.length; i++) {
                var s;
                if (0 === (s = r[i]).refs) {
                    for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                    delete o[s.id];
                }
            }
        };
    };
    var _, x = (_ = [], function(e, t) {
        return _[e] = t, _.filter(Boolean).join("\n");
    });
    function w(e, t, n, r) {
        var o = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = x(t, o); else {
            var i = document.createTextNode(o), a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
        }
    }
    function C(e, t) {
        var n = t.css, r = t.media;
        if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n; else {
            for (;e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
        }
    }
    function N(e, t, n) {
        var r = n.css, o = n.sourceMap, i = void 0 === t.convertToAbsoluteUrls && o;
        (t.convertToAbsoluteUrls || i) && (r = f(r)), o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        var a = new Blob([ r ], {
            type: "text/css"
        }), s = e.href;
        e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
    }
}, function(e, t, n) {
    "use strict";
    n.r(t), function(e) {
        n(4);
        var t = function() {
            function e(e, t) {
                var n = [], r = !0, o = !1, i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    o = !0, i = e;
                } finally {
                    try {
                        !r && s.return && s.return();
                    } finally {
                        if (o) throw i;
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
        function r(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, i) {
                        try {
                            var a = t[o](i), s = a.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!a.done) return Promise.resolve(s).then(function(e) {
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
        window.equatioCoreBaseUrl = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/", 
        r(function*() {
            var r = yield Promise.all([ Promise.resolve().then(n.bind(null, 0)), Promise.all([ n.e(8), n.e(2) ]).then(n.bind(null, 7)) ]), o = t(r, 2), i = o[0].render, a = o[1].default, s = document.querySelector("#equatio-inpage-container");
            s || ((s = document.createElement("div")).id = "equatio-inpage-container", document.body.appendChild(s)), 
            i(e(a, null), s, s.firstElementChild);
        })();
    }.call(this, n(0).h);
}, function(e, t, n) {
    var r, o = n(5);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]);
    var i = {
        hmr: !0
    };
    i.transform = r, i.insertInto = void 0;
    n(2)(o, i);
    o.locals && (e.exports = o.locals);
}, function(e, t, n) {
    (e.exports = n(1)(void 0)).push([ e.i, "#equatio-inpage-container {\n    z-index: 9999999;\n    position: fixed;\n    pointer-events: none;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    opacity: 1;\n    display: block;\n}\n\n#equatio-inpage-container.equatio-hidden {\n    opacity: 0;\n}\n\n#equatio-inpage-container.equatio-toggle {\n    display: none;\n}", "" ]);
}, function(e, t) {
    e.exports = function(e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host, r = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
            var o, i = t.trim().replace(/^"(.*)"$/, function(e, t) {
                return t;
            }).replace(/^'(.*)'$/, function(e, t) {
                return t;
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), 
            "url(" + JSON.stringify(o) + ")");
        });
    };
}, , function(e, t) {
    e.exports = void 0;
} ]);