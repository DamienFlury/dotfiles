!function(e) {
    function n(n) {
        for (var t, o, i = n[0], a = n[1], u = 0, l = []; u < i.length; u++) o = i[u], r[o] && l.push(r[o][0]), 
        r[o] = 0;
        for (t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
        for (c && c(n); l.length; ) l.shift()();
    }
    var t = {}, r = {
        1: 0
    };
    function o(e) {
        return i.p + "" + e + ".23dbf3fa2a62d0a803db.js";
    }
    function i(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
    }
    i.e = function(e) {
        var n = [], t = r[e];
        if (0 !== t) if (t) n.push(t[2]); else {
            var a = new Promise(function(n, o) {
                t = r[e] = [ n, o ];
            });
            n.push(t[2] = a);
            var u, l = document.getElementsByTagName("head")[0], c = document.createElement("script");
            c.charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.src = o(e), 
            u = function(n) {
                c.onerror = c.onload = null, clearTimeout(s);
                var t = r[e];
                if (0 !== t) {
                    if (t) {
                        var o = n && ("load" === n.type ? "missing" : n.type), i = n && n.target && n.target.src, a = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + i + ")");
                        a.type = o, a.request = i, t[1](a);
                    }
                    r[e] = void 0;
                }
            };
            var s = setTimeout(function() {
                u({
                    type: "timeout",
                    target: c
                });
            }, 12e4);
            c.onerror = c.onload = u, l.appendChild(c);
        }
        return Promise.all(n);
    }, i.m = e, i.c = t, i.d = function(e, n, t) {
        i.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: t
        });
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, i.t = function(e, n) {
        if (1 & n && (e = i(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (i.r(t), Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for (var r in e) i.d(t, r, function(n) {
            return e[n];
        }.bind(null, r));
        return t;
    }, i.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return i.d(n, "a", n), n;
    }, i.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
    }, i.p = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/content/", i.oe = function(e) {
        throw e;
    };
    var a = window.equatioChromeWebpackJsonP = window.equatioChromeWebpackJsonP || [], u = a.push.bind(a);
    a.push = n, a = a.slice();
    for (var l = 0; l < a.length; l++) n(a[l]);
    var c = u;
    i(i.s = 7);
}([ function(e, n, t) {
    "use strict";
    n.a = Object.freeze({
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
}, function(e, n, t) {
    "use strict";
    var r = [ "efeafadncamffgiohgiciboonbjldkfj", "feepmdlmhplaojabeoecaobfmibooaid" ].map(function(e) {
        return {
            id: e,
            regex: new RegExp("^chrome-extension:\\/\\/" + e + "/")
        };
    });
    n.a = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href;
        return r.some(function(n) {
            return n.regex.test(e);
        });
    };
}, function(e, n, t) {
    "use strict";
    t.d(n, "a", function() {
        return o;
    }), t.d(n, "d", function() {
        return a;
    }), t.d(n, "c", function() {
        return u;
    });
    var r = function() {
        function e(e, n) {
            var t = [], r = !0, o = !1, i = void 0;
            try {
                for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (t.push(a.value), 
                !n || t.length !== n); r = !0) ;
            } catch (e) {
                o = !0, i = e;
            } finally {
                try {
                    !r && u.return && u.return();
                } finally {
                    if (o) throw i;
                }
            }
            return t;
        }
        return function(n, t) {
            if (Array.isArray(n)) return n;
            if (Symbol.iterator in Object(n)) return e(n, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
    }(), o = {
        GoogleDocs: "Google Docs",
        GoogleForms: "Google Forms",
        GoogleSlides: "Google Slides",
        GoogleDrawings: "Google Drawings",
        GoogleSheets: "Google Sheets"
    }, i = {
        document: o.GoogleDocs,
        forms: o.GoogleForms,
        presentation: o.GoogleSlides,
        drawings: o.GoogleDrawings,
        spreadsheets: o.GoogleSheets
    }, a = function() {
        var e = window.location, n = e.host, t = e.pathname;
        if ("docs.google.com" === n) return t.indexOf("/forms/") >= 0 && (t.endsWith("/viewform") || t.endsWith("/formResponse") || t.endsWith("/prefill"));
    }, u = function() {
        var e = window.location, n = e.host, t = e.pathname;
        if ("docs.google.com" === n) {
            var o = t.substr(1).split("/"), a = r(o, 1)[0];
            return i[a];
        }
    };
    n.b = function() {
        return -1 === window.location.href.indexOf("/document/");
    };
}, function(e, n, t) {
    "use strict";
    t.r(n), t.d(n, "h", function() {
        return u;
    }), t.d(n, "createElement", function() {
        return u;
    }), t.d(n, "cloneElement", function() {
        return s;
    }), t.d(n, "Component", function() {
        return L;
    }), t.d(n, "render", function() {
        return W;
    }), t.d(n, "rerender", function() {
        return m;
    }), t.d(n, "options", function() {
        return o;
    });
    var r = function() {}, o = {}, i = [], a = [];
    function u(e, n) {
        var t, u, l, c, s = a;
        for (c = arguments.length; c-- > 2; ) i.push(arguments[c]);
        for (n && null != n.children && (i.length || i.push(n.children), delete n.children); i.length; ) if ((u = i.pop()) && void 0 !== u.pop) for (c = u.length; c--; ) i.push(u[c]); else "boolean" == typeof u && (u = null), 
        (l = "function" != typeof e) && (null == u ? u = "" : "number" == typeof u ? u = String(u) : "string" != typeof u && (l = !1)), 
        l && t ? s[s.length - 1] += u : s === a ? s = [ u ] : s.push(u), t = l;
        var d = new r();
        return d.nodeName = e, d.children = s, d.attributes = null == n ? void 0 : n, d.key = null == n ? void 0 : n.key, 
        void 0 !== o.vnode && o.vnode(d), d;
    }
    function l(e, n) {
        for (var t in n) e[t] = n[t];
        return e;
    }
    var c = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
    function s(e, n) {
        return u(e.nodeName, l(l({}, e.attributes), n), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
    }
    var d = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i, p = [];
    function f(e) {
        !e._dirty && (e._dirty = !0) && 1 == p.push(e) && (o.debounceRendering || c)(m);
    }
    function m() {
        var e, n = p;
        for (p = []; e = n.pop(); ) e._dirty && q(e);
    }
    function h(e, n, t) {
        return "string" == typeof n || "number" == typeof n ? void 0 !== e.splitText : "string" == typeof n.nodeName ? !e._componentConstructor && v(e, n.nodeName) : t || e._componentConstructor === n.nodeName;
    }
    function v(e, n) {
        return e.normalizedNodeName === n || e.nodeName.toLowerCase() === n.toLowerCase();
    }
    function _(e) {
        var n = l({}, e.attributes);
        n.children = e.children;
        var t = e.nodeName.defaultProps;
        if (void 0 !== t) for (var r in t) void 0 === n[r] && (n[r] = t[r]);
        return n;
    }
    function g(e, n) {
        var t = n ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);
        return t.normalizedNodeName = e, t;
    }
    function y(e) {
        var n = e.parentNode;
        n && n.removeChild(e);
    }
    function b(e, n, t, r, o) {
        if ("className" === n && (n = "class"), "key" === n) ; else if ("ref" === n) t && t(null), 
        r && r(e); else if ("class" !== n || o) if ("style" === n) {
            if (r && "string" != typeof r && "string" != typeof t || (e.style.cssText = r || ""), 
            r && "object" == typeof r) {
                if ("string" != typeof t) for (var i in t) i in r || (e.style[i] = "");
                for (var i in r) e.style[i] = "number" == typeof r[i] && !1 === d.test(i) ? r[i] + "px" : r[i];
            }
        } else if ("dangerouslySetInnerHTML" === n) r && (e.innerHTML = r.__html || ""); else if ("o" == n[0] && "n" == n[1]) {
            var a = n !== (n = n.replace(/Capture$/, ""));
            n = n.toLowerCase().substring(2), r ? t || e.addEventListener(n, w, a) : e.removeEventListener(n, w, a), 
            (e._listeners || (e._listeners = {}))[n] = r;
        } else if ("list" !== n && "type" !== n && !o && n in e) {
            try {
                e[n] = null == r ? "" : r;
            } catch (e) {}
            null != r && !1 !== r || "spellcheck" == n || e.removeAttribute(n);
        } else {
            var u = o && n !== (n = n.replace(/^xlink:?/, ""));
            null == r || !1 === r ? u ? e.removeAttributeNS("http://www.w3.org/1999/xlink", n.toLowerCase()) : e.removeAttribute(n) : "function" != typeof r && (u ? e.setAttributeNS("http://www.w3.org/1999/xlink", n.toLowerCase(), r) : e.setAttribute(n, r));
        } else e.className = r || "";
    }
    function w(e) {
        return this._listeners[e.type](o.event && o.event(e) || e);
    }
    var S = [], x = 0, C = !1, P = !1;
    function j() {
        for (var e; e = S.pop(); ) o.afterMount && o.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
    function k(e, n, t, r, o, i) {
        x++ || (C = null != o && void 0 !== o.ownerSVGElement, P = null != e && !("__preactattr_" in e));
        var a = N(e, n, t, r, i);
        return o && a.parentNode !== o && o.appendChild(a), --x || (P = !1, i || j()), a;
    }
    function N(e, n, t, r, o) {
        var i = e, a = C;
        if (null != n && "boolean" != typeof n || (n = ""), "string" == typeof n || "number" == typeof n) return e && void 0 !== e.splitText && e.parentNode && (!e._component || o) ? e.nodeValue != n && (e.nodeValue = n) : (i = document.createTextNode(n), 
        e && (e.parentNode && e.parentNode.replaceChild(i, e), R(e, !0))), i.__preactattr_ = !0, 
        i;
        var u = n.nodeName;
        if ("function" == typeof u) return D(e, n, t, r);
        if (C = "svg" === u || "foreignObject" !== u && C, u = String(u), (!e || !v(e, u)) && (i = g(u, C), 
        e)) {
            for (;e.firstChild; ) i.appendChild(e.firstChild);
            e.parentNode && e.parentNode.replaceChild(i, e), R(e, !0);
        }
        var l = i.firstChild, c = i.__preactattr_, s = n.children;
        if (null == c) {
            c = i.__preactattr_ = {};
            for (var d = i.attributes, p = d.length; p--; ) c[d[p].name] = d[p].value;
        }
        return !P && s && 1 === s.length && "string" == typeof s[0] && null != l && void 0 !== l.splitText && null == l.nextSibling ? l.nodeValue != s[0] && (l.nodeValue = s[0]) : (s && s.length || null != l) && O(i, s, t, r, P || null != c.dangerouslySetInnerHTML), 
        G(i, n.attributes, c), C = a, i;
    }
    function O(e, n, t, r, o) {
        var i, a, u, l, c, s = e.childNodes, d = [], p = {}, f = 0, m = 0, v = s.length, _ = 0, g = n ? n.length : 0;
        if (0 !== v) for (var b = 0; b < v; b++) {
            var w = s[b], S = w.__preactattr_;
            null != (x = g && S ? w._component ? w._component.__key : S.key : null) ? (f++, 
            p[x] = w) : (S || (void 0 !== w.splitText ? !o || w.nodeValue.trim() : o)) && (d[_++] = w);
        }
        if (0 !== g) for (b = 0; b < g; b++) {
            var x;
            if (c = null, null != (x = (l = n[b]).key)) f && void 0 !== p[x] && (c = p[x], p[x] = void 0, 
            f--); else if (m < _) for (i = m; i < _; i++) if (void 0 !== d[i] && h(a = d[i], l, o)) {
                c = a, d[i] = void 0, i === _ - 1 && _--, i === m && m++;
                break;
            }
            c = N(c, l, t, r), u = s[b], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? y(u) : e.insertBefore(c, u));
        }
        if (f) for (var b in p) void 0 !== p[b] && R(p[b], !1);
        for (;m <= _; ) void 0 !== (c = d[_--]) && R(c, !1);
    }
    function R(e, n) {
        var t = e._component;
        t ? F(t) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), 
        !1 !== n && null != e.__preactattr_ || y(e), E(e));
    }
    function E(e) {
        for (e = e.lastChild; e; ) {
            var n = e.previousSibling;
            R(e, !0), e = n;
        }
    }
    function G(e, n, t) {
        var r;
        for (r in t) n && null != n[r] || null == t[r] || b(e, r, t[r], t[r] = void 0, C);
        for (r in n) "children" === r || "innerHTML" === r || r in t && n[r] === ("value" === r || "checked" === r ? e[r] : t[r]) || b(e, r, t[r], t[r] = n[r], C);
    }
    var T = [];
    function A(e, n, t) {
        var r, o = T.length;
        for (e.prototype && e.prototype.render ? (r = new e(n, t), L.call(r, n, t)) : ((r = new L(n, t)).constructor = e, 
        r.render = U); o--; ) if (T[o].constructor === e) return r.nextBase = T[o].nextBase, 
        T.splice(o, 1), r;
        return r;
    }
    function U(e, n, t) {
        return this.constructor(e, t);
    }
    function M(e, n, t, r, i) {
        e._disable || (e._disable = !0, e.__ref = n.ref, e.__key = n.key, delete n.ref, 
        delete n.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(n, r)), 
        r && r !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = r), 
        e.prevProps || (e.prevProps = e.props), e.props = n, e._disable = !1, 0 !== t && (1 !== t && !1 === o.syncComponentUpdates && e.base ? f(e) : q(e, 1, i)), 
        e.__ref && e.__ref(e));
    }
    function q(e, n, t, r) {
        if (!e._disable) {
            var i, a, u, c = e.props, s = e.state, d = e.context, p = e.prevProps || c, f = e.prevState || s, m = e.prevContext || d, h = e.base, v = e.nextBase, g = h || v, y = e._component, b = !1, w = m;
            if (e.constructor.getDerivedStateFromProps && (s = l(l({}, s), e.constructor.getDerivedStateFromProps(c, s)), 
            e.state = s), h && (e.props = p, e.state = f, e.context = m, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(c, s, d) ? b = !0 : e.componentWillUpdate && e.componentWillUpdate(c, s, d), 
            e.props = c, e.state = s, e.context = d), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, 
            e._dirty = !1, !b) {
                i = e.render(c, s, d), e.getChildContext && (d = l(l({}, d), e.getChildContext())), 
                h && e.getSnapshotBeforeUpdate && (w = e.getSnapshotBeforeUpdate(p, f));
                var C, P, N = i && i.nodeName;
                if ("function" == typeof N) {
                    var O = _(i);
                    (a = y) && a.constructor === N && O.key == a.__key ? M(a, O, 1, d, !1) : (C = a, 
                    e._component = a = A(N, O, d), a.nextBase = a.nextBase || v, a._parentComponent = e, 
                    M(a, O, 0, d, !1), q(a, 1, t, !0)), P = a.base;
                } else u = g, (C = y) && (u = e._component = null), (g || 1 === n) && (u && (u._component = null), 
                P = k(u, i, d, t || !h, g && g.parentNode, !0));
                if (g && P !== g && a !== y) {
                    var E = g.parentNode;
                    E && P !== E && (E.replaceChild(P, g), C || (g._component = null, R(g, !1)));
                }
                if (C && F(C), e.base = P, P && !r) {
                    for (var G = e, T = e; T = T._parentComponent; ) (G = T).base = P;
                    P._component = G, P._componentConstructor = G.constructor;
                }
            }
            for (!h || t ? S.unshift(e) : b || (e.componentDidUpdate && e.componentDidUpdate(p, f, w), 
            o.afterUpdate && o.afterUpdate(e)); e._renderCallbacks.length; ) e._renderCallbacks.pop().call(e);
            x || r || j();
        }
    }
    function D(e, n, t, r) {
        for (var o = e && e._component, i = o, a = e, u = o && e._componentConstructor === n.nodeName, l = u, c = _(n); o && !l && (o = o._parentComponent); ) l = o.constructor === n.nodeName;
        return o && l && (!r || o._component) ? (M(o, c, 3, t, r), e = o.base) : (i && !u && (F(i), 
        e = a = null), o = A(n.nodeName, c, t), e && !o.nextBase && (o.nextBase = e, a = null), 
        M(o, c, 1, t, r), e = o.base, a && e !== a && (a._component = null, R(a, !1))), 
        e;
    }
    function F(e) {
        o.beforeUnmount && o.beforeUnmount(e);
        var n = e.base;
        e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
        var t = e._component;
        t ? F(t) : n && (n.__preactattr_ && n.__preactattr_.ref && n.__preactattr_.ref(null), 
        e.nextBase = n, y(n), T.push(e), E(n)), e.__ref && e.__ref(null);
    }
    function L(e, n) {
        this._dirty = !0, this.context = n, this.props = e, this.state = this.state || {}, 
        this._renderCallbacks = [];
    }
    function W(e, n, t) {
        return k(t, e, {}, !1, n, !1);
    }
    l(L.prototype, {
        setState: function(e, n) {
            this.prevState || (this.prevState = this.state), this.state = l(l({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), 
            n && this._renderCallbacks.push(n), f(this);
        },
        forceUpdate: function(e) {
            e && this._renderCallbacks.push(e), q(this, 2);
        },
        render: function() {}
    });
    var B = {
        h: u,
        createElement: u,
        cloneElement: s,
        Component: L,
        render: W,
        rerender: m,
        options: o
    };
    n.default = B;
}, function(e, n, t) {
    "use strict";
    t.d(n, "b", function() {
        return u;
    }), t.d(n, "e", function() {
        return l;
    }), t.d(n, "f", function() {
        return c;
    }), t.d(n, "s", function() {
        return s;
    }), t.d(n, "c", function() {
        return d;
    }), t.d(n, "g", function() {
        return p;
    }), t.d(n, "i", function() {
        return f;
    }), t.d(n, "d", function() {
        return m;
    }), t.d(n, "l", function() {
        return h;
    }), t.d(n, "m", function() {
        return v;
    }), t.d(n, "n", function() {
        return _;
    }), t.d(n, "o", function() {
        return g;
    }), t.d(n, "q", function() {
        return y;
    }), t.d(n, "r", function() {
        return b;
    }), t.d(n, "p", function() {
        return w;
    }), t.d(n, "k", function() {
        return S;
    }), t.d(n, "j", function() {
        return x;
    }), t.d(n, "t", function() {
        return C;
    }), t.d(n, "a", function() {
        return P;
    }), t.d(n, "h", function() {
        return j;
    });
    var r = t(0), o = Object.assign || function(e) {
        for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        }
        return e;
    };
    function i(e) {
        if (Array.isArray(e)) {
            for (var n = 0, t = Array(e.length); n < e.length; n++) t[n] = e[n];
            return t;
        }
        return Array.from(e);
    }
    var a = function(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new Promise(function(t, r) {
            chrome.runtime.sendMessage("hjngolefdpdnooamgdldlkjgmdcmcjnc", o({
                action: e
            }, n), function() {
                var o, a, u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, l = u.success, c = u.failure;
                return chrome.runtime.lastError ? ((o = console).warn.apply(o, [ "Action failed:", e ].concat(i(n))), 
                r(chrome.runtime.lastError)) : c ? ((a = console).warn.apply(a, [ "Action failed:", e ].concat(i(n))), 
                r(c)) : t(l);
            });
        });
    }, u = function() {
        return a(r.a.EnsureLoggedIntoFirebase);
    }, l = function() {
        return a(r.a.GetLicense);
    }, c = function() {
        return a(r.a.GetProfile);
    }, s = function(e, n) {
        return a(r.a.UpdateProfile, {
            options: e,
            profile: n
        });
    }, d = function(e) {
        return a(r.a.EnterProductCode, {
            code: e
        });
    }, p = function(e, n) {
        return a(r.a.OpenGoogleFormsPicker, {
            url: e,
            picker: n
        });
    }, f = function(e) {
        return a(r.a.RegisterCompanionAppTarget, {
            platform: e
        });
    }, m = function() {
        return a(r.a.GetHandwritingCount);
    }, h = function(e) {
        return a(r.a.SetHandwritingCount, {
            count: e
        });
    }, v = function() {
        return a(r.a.ShowHandwritingExceededReminder);
    }, _ = function() {
        return a(r.a.ShowPredictionReminder);
    }, g = function() {
        return a(r.a.ShowRenewalReminder);
    }, y = function() {
        return a(r.a.ShowTrialExpiration);
    }, b = function() {
        return a(r.a.ShowUpgradeReminder);
    }, w = function() {
        return a(r.a.ShowReviewReminder);
    }, S = function(e) {
        return a(r.a.SendAnalyticsScreen, {
            screenName: e
        });
    }, x = function(e) {
        return a(r.a.SendAnalyticsEvent, {
            category: e
        });
    }, C = function(e, n) {
        var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        return a(r.a.UploadImageToProxy, {
            url: e,
            base64: n,
            isPermanent: t
        });
    }, P = function() {
        return a(r.a.DismissReviewReminder);
    }, j = function(e) {
        return a(r.a.OpenMathspace, {
            platformIntegrationId: e
        });
    };
}, function(e, n, t) {
    var r;
    !function() {
        "use strict";
        var t = {}.hasOwnProperty;
        function o() {
            for (var e = [], n = 0; n < arguments.length; n++) {
                var r = arguments[n];
                if (r) {
                    var i = typeof r;
                    if ("string" === i || "number" === i) e.push(r); else if (Array.isArray(r)) e.push(o.apply(null, r)); else if ("object" === i) for (var a in r) t.call(r, a) && r[a] && e.push(a);
                }
            }
            return e.join(" ");
        }
        void 0 !== e && e.exports ? e.exports = o : void 0 === (r = function() {
            return o;
        }.apply(n, [])) || (e.exports = r);
    }();
}, function(e, n, t) {
    "use strict";
    var r = t(1), o = t(2);
    n.a = function() {
        return (Object(r.a)() ? "PDF Reader" : Object(o.c)()) + (Object(o.d)() ? " - Response" : "");
    };
}, function(e, n, t) {
    "use strict";
    t.r(n), function(e) {
        var n = t(5), r = t.n(n), o = t(4), i = t(6), a = t(1), u = function() {
            function e(e, n) {
                var t = [], r = !0, o = !1, i = void 0;
                try {
                    for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (t.push(a.value), 
                    !n || t.length !== n); r = !0) ;
                } catch (e) {
                    o = !0, i = e;
                } finally {
                    try {
                        !r && u.return && u.return();
                    } finally {
                        if (o) throw i;
                    }
                }
                return t;
            }
            return function(n, t) {
                if (Array.isArray(n)) return n;
                if (Symbol.iterator in Object(n)) return e(n, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
        function l(e) {
            return function() {
                var n = e.apply(this, arguments);
                return new Promise(function(e, t) {
                    function r(o, i) {
                        try {
                            var a = n[o](i), u = a.value;
                        } catch (e) {
                            return void t(e);
                        }
                        if (!a.done) return Promise.resolve(u).then(function(e) {
                            r("next", e);
                        }, function(e) {
                            r("throw", e);
                        });
                        e(u);
                    }
                    return r("next");
                });
            };
        }
        window.equatioCoreBaseUrl = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/", 
        Object(o.j)("EquatIO Toolbar Loaded - " + Object(i.a)());
        var c = Promise.all([ Promise.resolve().then(t.bind(null, 3)), t.e(14).then(t.t.bind(null, 8, 7)), t.e(2).then(t.t.bind(null, 9, 7)), t.e(3).then(t.t.bind(null, 10, 7)) ]), s = document.querySelector(".equatio-toolbar-wrapper");
        s ? null === s.offsetParent ? s.style.display = "block" : s.style.display = "none" : l(function*() {
            var n = yield c, o = u(n, 1)[0].render, i = yield Promise.all([ t.e(13), t.e(4) ]).then(t.bind(null, 12)), l = i.toolbar, s = i.PopupMenu, d = i.optionsDialog, p = i.UpgradeOverlay, f = i.ShadowElements, m = i.AcademyFloatingWindow;
            o(e("div", {
                className: r()("equatio-toolbar-wrapper", {
                    "equatio-toolbar-wrapper--pdf": Object(a.a)()
                }),
                style: {
                    display: "block"
                }
            }, [ e(s, null), l, d, e(p, null), Object(a.a)() ? e("div", {
                className: "equatio-academy-wrapper"
            }, e(m, null)) : e(m, null), e(f, null) ]), document.body);
        })();
    }.call(this, t(3).h);
}, , , , function(e, n) {
    e.exports = void 0;
} ]);