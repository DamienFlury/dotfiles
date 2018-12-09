!function(e) {
    function t(t) {
        for (var n, o, i = t[0], a = t[1], s = 0, u = []; s < i.length; s++) o = i[s], r[o] && u.push(r[o][0]), 
        r[o] = 0;
        for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        for (c && c(t); u.length; ) u.shift()();
    }
    var n = {}, r = {
        2: 0
    };
    function o(e) {
        return i.p + "frameChunks/8634bc6c20e84c083475.js";
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
            var s, u = document.getElementsByTagName("head")[0], c = document.createElement("script");
            c.charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.src = o(e), 
            s = function(t) {
                c.onerror = c.onload = null, clearTimeout(l);
                var n = r[e];
                if (0 !== n) {
                    if (n) {
                        var o = t && ("load" === t.type ? "missing" : t.type), i = t && t.target && t.target.src, a = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + i + ")");
                        a.type = o, a.request = i, n[1](a);
                    }
                    r[e] = void 0;
                }
            };
            var l = setTimeout(function() {
                s({
                    type: "timeout",
                    target: c
                });
            }, 12e4);
            c.onerror = c.onload = s, u.appendChild(c);
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
    }, i.p = "/", i.oe = function(e) {
        throw e;
    };
    var a = window.webpackJsonp = window.webpackJsonp || [], s = a.push.bind(a);
    a.push = t, a = a.slice();
    for (var u = 0; u < a.length; u++) t(a[u]);
    var c = s;
    i(i.s = 69);
}({
    0: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "h", function() {
            return s;
        }), n.d(t, "createElement", function() {
            return s;
        }), n.d(t, "cloneElement", function() {
            return l;
        }), n.d(t, "Component", function() {
            return D;
        }), n.d(t, "render", function() {
            return F;
        }), n.d(t, "rerender", function() {
            return h;
        }), n.d(t, "options", function() {
            return o;
        });
        var r = function() {}, o = {}, i = [], a = [];
        function s(e, t) {
            var n, s, u, c, l = a;
            for (c = arguments.length; c-- > 2; ) i.push(arguments[c]);
            for (t && null != t.children && (i.length || i.push(t.children), delete t.children); i.length; ) if ((s = i.pop()) && void 0 !== s.pop) for (c = s.length; c--; ) i.push(s[c]); else "boolean" == typeof s && (s = null), 
            (u = "function" != typeof e) && (null == s ? s = "" : "number" == typeof s ? s = String(s) : "string" != typeof s && (u = !1)), 
            u && n ? l[l.length - 1] += s : l === a ? l = [ s ] : l.push(s), n = u;
            var f = new r();
            return f.nodeName = e, f.children = l, f.attributes = null == t ? void 0 : t, f.key = null == t ? void 0 : t.key, 
            void 0 !== o.vnode && o.vnode(f), f;
        }
        function u(e, t) {
            for (var n in t) e[n] = t[n];
            return e;
        }
        var c = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
        function l(e, t) {
            return s(e.nodeName, u(u({}, e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
        }
        var f = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i, p = [];
        function d(e) {
            !e._dirty && (e._dirty = !0) && 1 == p.push(e) && (o.debounceRendering || c)(h);
        }
        function h() {
            var e, t = p;
            for (p = []; e = t.pop(); ) e._dirty && R(e);
        }
        function v(e, t, n) {
            return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && m(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
        }
        function m(e, t) {
            return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase();
        }
        function y(e) {
            var t = u({}, e.attributes);
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
        var w = [], C = 0, j = !1, S = !1;
        function O() {
            for (var e; e = w.pop(); ) o.afterMount && o.afterMount(e), e.componentDidMount && e.componentDidMount();
        }
        function U(e, t, n, r, o, i) {
            C++ || (j = null != o && void 0 !== o.ownerSVGElement, S = null != e && !("__preactattr_" in e));
            var a = N(e, t, n, r, i);
            return o && a.parentNode !== o && o.appendChild(a), --C || (S = !1, i || O()), a;
        }
        function N(e, t, n, r, o) {
            var i = e, a = j;
            if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || o) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), 
            e && (e.parentNode && e.parentNode.replaceChild(i, e), k(e, !0))), i.__preactattr_ = !0, 
            i;
            var s = t.nodeName;
            if ("function" == typeof s) return I(e, t, n, r);
            if (j = "svg" === s || "foreignObject" !== s && j, s = String(s), (!e || !m(e, s)) && (i = b(s, j), 
            e)) {
                for (;e.firstChild; ) i.appendChild(e.firstChild);
                e.parentNode && e.parentNode.replaceChild(i, e), k(e, !0);
            }
            var u = i.firstChild, c = i.__preactattr_, l = t.children;
            if (null == c) {
                c = i.__preactattr_ = {};
                for (var f = i.attributes, p = f.length; p--; ) c[f[p].name] = f[p].value;
            }
            return !S && l && 1 === l.length && "string" == typeof l[0] && null != u && void 0 !== u.splitText && null == u.nextSibling ? u.nodeValue != l[0] && (u.nodeValue = l[0]) : (l && l.length || null != u) && M(i, l, n, r, S || null != c.dangerouslySetInnerHTML), 
            E(i, t.attributes, c), j = a, i;
        }
        function M(e, t, n, r, o) {
            var i, a, s, u, c, l = e.childNodes, f = [], p = {}, d = 0, h = 0, m = l.length, y = 0, b = t ? t.length : 0;
            if (0 !== m) for (var _ = 0; _ < m; _++) {
                var x = l[_], w = x.__preactattr_;
                null != (C = b && w ? x._component ? x._component.__key : w.key : null) ? (d++, 
                p[C] = x) : (w || (void 0 !== x.splitText ? !o || x.nodeValue.trim() : o)) && (f[y++] = x);
            }
            if (0 !== b) for (_ = 0; _ < b; _++) {
                var C;
                if (c = null, null != (C = (u = t[_]).key)) d && void 0 !== p[C] && (c = p[C], p[C] = void 0, 
                d--); else if (h < y) for (i = h; i < y; i++) if (void 0 !== f[i] && v(a = f[i], u, o)) {
                    c = a, f[i] = void 0, i === y - 1 && y--, i === h && h++;
                    break;
                }
                c = N(c, u, n, r), s = l[_], c && c !== e && c !== s && (null == s ? e.appendChild(c) : c === s.nextSibling ? g(s) : e.insertBefore(c, s));
            }
            if (d) for (var _ in p) void 0 !== p[_] && k(p[_], !1);
            for (;h <= y; ) void 0 !== (c = f[y--]) && k(c, !1);
        }
        function k(e, t) {
            var n = e._component;
            n ? J(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), 
            !1 !== t && null != e.__preactattr_ || g(e), A(e));
        }
        function A(e) {
            for (e = e.lastChild; e; ) {
                var t = e.previousSibling;
                k(e, !0), e = t;
            }
        }
        function E(e, t, n) {
            var r;
            for (r in n) t && null != t[r] || null == n[r] || _(e, r, n[r], n[r] = void 0, j);
            for (r in t) "children" === r || "innerHTML" === r || r in n && t[r] === ("value" === r || "checked" === r ? e[r] : n[r]) || _(e, r, n[r], n[r] = t[r], j);
        }
        var L = [];
        function T(e, t, n) {
            var r, o = L.length;
            for (e.prototype && e.prototype.render ? (r = new e(t, n), D.call(r, t, n)) : ((r = new D(t, n)).constructor = e, 
            r.render = P); o--; ) if (L[o].constructor === e) return r.nextBase = L[o].nextBase, 
            L.splice(o, 1), r;
            return r;
        }
        function P(e, t, n) {
            return this.constructor(e, n);
        }
        function B(e, t, n, r, i) {
            e._disable || (e._disable = !0, e.__ref = t.ref, e.__key = t.key, delete t.ref, 
            delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r)), 
            r && r !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = r), 
            e.prevProps || (e.prevProps = e.props), e.props = t, e._disable = !1, 0 !== n && (1 !== n && !1 === o.syncComponentUpdates && e.base ? d(e) : R(e, 1, i)), 
            e.__ref && e.__ref(e));
        }
        function R(e, t, n, r) {
            if (!e._disable) {
                var i, a, s, c = e.props, l = e.state, f = e.context, p = e.prevProps || c, d = e.prevState || l, h = e.prevContext || f, v = e.base, m = e.nextBase, b = v || m, g = e._component, _ = !1, x = h;
                if (e.constructor.getDerivedStateFromProps && (l = u(u({}, l), e.constructor.getDerivedStateFromProps(c, l)), 
                e.state = l), v && (e.props = p, e.state = d, e.context = h, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(c, l, f) ? _ = !0 : e.componentWillUpdate && e.componentWillUpdate(c, l, f), 
                e.props = c, e.state = l, e.context = f), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, 
                e._dirty = !1, !_) {
                    i = e.render(c, l, f), e.getChildContext && (f = u(u({}, f), e.getChildContext())), 
                    v && e.getSnapshotBeforeUpdate && (x = e.getSnapshotBeforeUpdate(p, d));
                    var j, S, N = i && i.nodeName;
                    if ("function" == typeof N) {
                        var M = y(i);
                        (a = g) && a.constructor === N && M.key == a.__key ? B(a, M, 1, f, !1) : (j = a, 
                        e._component = a = T(N, M, f), a.nextBase = a.nextBase || m, a._parentComponent = e, 
                        B(a, M, 0, f, !1), R(a, 1, n, !0)), S = a.base;
                    } else s = b, (j = g) && (s = e._component = null), (b || 1 === t) && (s && (s._component = null), 
                    S = U(s, i, f, n || !v, b && b.parentNode, !0));
                    if (b && S !== b && a !== g) {
                        var A = b.parentNode;
                        A && S !== A && (A.replaceChild(S, b), j || (b._component = null, k(b, !1)));
                    }
                    if (j && J(j), e.base = S, S && !r) {
                        for (var E = e, L = e; L = L._parentComponent; ) (E = L).base = S;
                        S._component = E, S._componentConstructor = E.constructor;
                    }
                }
                for (!v || n ? w.unshift(e) : _ || (e.componentDidUpdate && e.componentDidUpdate(p, d, x), 
                o.afterUpdate && o.afterUpdate(e)); e._renderCallbacks.length; ) e._renderCallbacks.pop().call(e);
                C || r || O();
            }
        }
        function I(e, t, n, r) {
            for (var o = e && e._component, i = o, a = e, s = o && e._componentConstructor === t.nodeName, u = s, c = y(t); o && !u && (o = o._parentComponent); ) u = o.constructor === t.nodeName;
            return o && u && (!r || o._component) ? (B(o, c, 3, n, r), e = o.base) : (i && !s && (J(i), 
            e = a = null), o = T(t.nodeName, c, n), e && !o.nextBase && (o.nextBase = e, a = null), 
            B(o, c, 1, n, r), e = o.base, a && e !== a && (a._component = null, k(a, !1))), 
            e;
        }
        function J(e) {
            o.beforeUnmount && o.beforeUnmount(e);
            var t = e.base;
            e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
            var n = e._component;
            n ? J(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), 
            e.nextBase = t, g(t), L.push(e), A(t)), e.__ref && e.__ref(null);
        }
        function D(e, t) {
            this._dirty = !0, this.context = t, this.props = e, this.state = this.state || {}, 
            this._renderCallbacks = [];
        }
        function F(e, t, n) {
            return U(n, e, {}, !1, t, !1);
        }
        u(D.prototype, {
            setState: function(e, t) {
                this.prevState || (this.prevState = this.state), this.state = u(u({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), 
                t && this._renderCallbacks.push(t), d(this);
            },
            forceUpdate: function(e) {
                e && this._renderCallbacks.push(e), R(this, 2);
            },
            render: function() {}
        });
        var q = {
            h: s,
            createElement: s,
            cloneElement: l,
            Component: D,
            render: F,
            rerender: h,
            options: o
        };
        t.default = q;
    },
    10: function(e, t, n) {
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
        }), u = null, c = 0, l = [], f = n(14);
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
        function h(e, t) {
            var n = s(e.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r = l[l.length - 1];
            if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), 
            l.push(t); else if ("bottom" === e.insertAt) n.appendChild(t); else {
                if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var o = s(e.insertInto + " " + e.insertAt.before);
                n.insertBefore(t, o);
            }
        }
        function v(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = l.indexOf(e);
            t >= 0 && l.splice(t, 1);
        }
        function m(e) {
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
                var a = c++;
                n = u || (u = m(t)), r = w.bind(null, n, a, !1), o = w.bind(null, n, a, !0);
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = y(t), 
            r = j.bind(null, n, t), o = function() {
                v(n), n.href && URL.revokeObjectURL(n.href);
            }) : (n = m(t), r = C.bind(null, n), o = function() {
                v(n);
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
                        for (var u = 0; u < s.parts.length; u++) s.parts[u]();
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
        function j(e, t, n) {
            var r = n.css, o = n.sourceMap, i = void 0 === t.convertToAbsoluteUrls && o;
            (t.convertToAbsoluteUrls || i) && (r = f(r)), o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var a = new Blob([ r ], {
                type: "text/css"
            }), s = e.href;
            e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
        }
    },
    13: function(e, t, n) {
        var r, o;
        void 0 === (o = "function" == typeof (r = function() {
            "use strict";
            function e(e) {
                var t, n = Object.prototype.hasOwnProperty, r = [];
                for (t in e) n.call(e, t) && r.push(t);
                return r;
            }
            function t(e) {
                return void 0 === e ? null : e ? decodeURIComponent(e) : e;
            }
            function n(e) {
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
                parse: function(e, n, r) {
                    var o;
                    n = n || "&", r = r || "=";
                    var i = Object.create(null);
                    if ("string" != typeof e) return i;
                    if ((o = e.indexOf("?")) < 0 && e.indexOf(r) < 0) return i;
                    o >= 0 && (e = e.substr(o + 1)), e = e.replace(/^[\s\uFEFF\xA0\?#&]+|[\s\uFEFF\xA0&]+$/g, ""), 
                    (o = e.lastIndexOf("#")) > 0 && (e = e.substr(0, o));
                    var a = e.split(n);
                    for (o = 0; o < a.length; ++o) {
                        var s, u, c = a[o].replace(/\+/g, " "), l = c.indexOf(r);
                        if (0 !== l && 0 !== c.length) {
                            l < 0 ? (s = t(c), u = null) : (s = t(c.substr(0, l)), u = t(c.substr(l + 1)));
                            var f = i[s];
                            void 0 === f ? i[s] = u : Array.isArray(f) ? f.push(u) : i[s] = [ f, u ];
                        }
                    }
                    return i;
                },
                stringify: function(t, r, o) {
                    if (r = r || "&", o = o || "=", "object" != typeof t && "function" != typeof t || null === t) return "";
                    var i = e(t);
                    if (!i || !i.length) return "";
                    for (var a, s, u, c = [], l = 0; l < i.length; l++) if (s = n(i[l]), void 0 !== (u = t[s]) && "function" != typeof u) if (Array.isArray(u)) for (a = 0; a < u.length; ++a) c.push(s + o + (u[a] ? n(u[a]) : "")); else null !== u && (u = n(u)), 
                    c.push(null === u || void 0 === u ? s : s + o + u);
                    return c.join(r);
                }
            };
        }) ? r.call(t, n, t, e) : r) || (e.exports = o);
    },
    14: function(e, t) {
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
    },
    54: function(e, t, n) {
        "use strict";
        (function(e) {
            var r = n(0), o = n(13), i = (n(70), n(71), function() {
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
            function a(e) {
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
            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function u(e, t) {
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
            var l = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "enUS";
                switch (e) {
                  case "en-GB":
                    return "enGB";

                  case "en-US":
                    return "enUS";

                  default:
                    return e;
                }
            }, f = function(t) {
                function f() {
                    var e, t, n;
                    s(this, f);
                    for (var r = arguments.length, o = Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                    return t = n = u(this, (e = f.__proto__ || Object.getPrototypeOf(f)).call.apply(e, [ this ].concat(o))), 
                    n.shouldComponentUpdate = function() {
                        return !1;
                    }, n.sendOk = function(e, t) {
                        window.parent.postMessage({
                            action: "equatio_mathjax_sandbox_success",
                            speech: e,
                            mathML: t
                        }, "*");
                    }, n.sendError = function(e) {
                        window.parent.postMessage({
                            action: "equatio_mathjax_sandbox_error",
                            message: e
                        }, "*");
                    }, u(n, t);
                }
                return c(f, r["Component"]), i(f, [ {
                    key: "componentDidMount",
                    value: function() {
                        var e = this, t = this.wrapper, r = Object(o.parse)(window.location.search), i = r.latex, s = r.locale;
                        i ? (MathJax.Hub.Register.MessageHook("Math Processing Error", this.sendError), 
                        MathJax.Hub.Queue([ "Typeset", MathJax.Hub, t ]), MathJax.Hub.Queue(function() {
                            var r = void 0;
                            try {
                                r = MathJax.Hub.getAllJax(t)[0].root.toMathML("");
                            } catch (e) {}
                            t.querySelector(".MathJax_SVG_Display") && a(function*() {
                                window.equatioCoreBaseUrl = "/";
                                var t = yield (yield n.e(3).then(n.t.bind(null, 73, 7))).MathRendering.getSpokenText(i, l(s));
                                e.sendOk(t, r);
                            })();
                        })) : this.sendError();
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this, n = Object(o.parse)(window.location.search).latex;
                        return e("div", {
                            ref: function(e) {
                                t.wrapper = e;
                            }
                        }, "$$", n, "$$");
                    }
                } ]), f;
            }();
            t.a = f;
        }).call(this, n(0).h);
    },
    69: function(e, t, n) {
        "use strict";
        n.r(t), function(e) {
            var t = n(0), r = n(54);
            window.equatioCoreBaseUrl = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/", 
            Object(t.render)(e(r.a, null), document.querySelector("#root"));
        }.call(this, n(0).h);
    },
    70: function(e, t, n) {
        e.exports = n.p + "mathjaxFrame/mathjaxConfig.js";
    },
    71: function(e, t, n) {
        var r, o = n(72);
        "string" == typeof o && (o = [ [ e.i, o, "" ] ]);
        var i = {
            hmr: !0
        };
        i.transform = r, i.insertInto = void 0;
        n(10)(o, i);
        o.locals && (e.exports = o.locals);
    },
    72: function(e, t, n) {
        (e.exports = n(9)(void 0)).push([ e.i, "html, body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    overflow: hidden;\n}\n\n.equatio-mathjax-frame {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.equatio-mathjax-frame .MathJax_SVG > svg {\n    width: 100vw;\n    height: 100vh;\n}\n\n.equatio-mathjax-frame .MathJax_SVG_Display {\n    margin: 0;\n}", "" ]);
    },
    74: function(e, t) {
        e.exports = void 0;
    },
    9: function(e, t) {
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
    }
});