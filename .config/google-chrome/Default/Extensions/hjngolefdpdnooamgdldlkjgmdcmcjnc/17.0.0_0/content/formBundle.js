!function(t) {
    var n = {};
    function e(a) {
        if (n[a]) return n[a].exports;
        var o = n[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return t[a].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
    }
    e.m = t, e.c = n, e.d = function(t, n, a) {
        e.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: a
        });
    }, e.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, e.t = function(t, n) {
        if (1 & n && (t = e(t)), 8 & n) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (e.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }), 2 & n && "string" != typeof t) for (var o in t) e.d(a, o, function(n) {
            return t[n];
        }.bind(null, o));
        return a;
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return e.d(n, "a", n), n;
    }, e.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
    }, e.p = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/content/", e(e.s = 17);
}([ function(t, n, e) {
    "use strict";
    (function(n) {
        var a = e(11), o = e(12), i = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i, r = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, l = [ [ "#", "hash" ], [ "?", "query" ], function(t) {
            return t.replace("\\", "/");
        }, [ "/", "pathname" ], [ "@", "auth", 1 ], [ NaN, "host", void 0, 1, 1 ], [ /:(\d+)$/, "port", void 0, 1 ], [ NaN, "hostname", void 0, 1, 1 ] ], d = {
            hash: 1,
            query: 1
        };
        function s(t) {
            var e, a = n && n.location || {}, o = {}, i = typeof (t = t || a);
            if ("blob:" === t.protocol) o = new m(unescape(t.pathname), {}); else if ("string" === i) for (e in o = new m(t, {}), 
            d) delete o[e]; else if ("object" === i) {
                for (e in t) e in d || (o[e] = t[e]);
                void 0 === o.slashes && (o.slashes = r.test(t.href));
            }
            return o;
        }
        function p(t) {
            var n = i.exec(t);
            return {
                protocol: n[1] ? n[1].toLowerCase() : "",
                slashes: !!n[2],
                rest: n[3]
            };
        }
        function c(t, n) {
            for (var e = (n || "/").split("/").slice(0, -1).concat(t.split("/")), a = e.length, o = e[a - 1], i = !1, r = 0; a--; ) "." === e[a] ? e.splice(a, 1) : ".." === e[a] ? (e.splice(a, 1), 
            r++) : r && (0 === a && (i = !0), e.splice(a, 1), r--);
            return i && e.unshift(""), "." !== o && ".." !== o || e.push(""), e.join("/");
        }
        function m(t, n, e) {
            if (!(this instanceof m)) return new m(t, n, e);
            var i, r, d, h, b, V, u = l.slice(), N = typeof n, U = this, R = 0;
            for ("object" !== N && "string" !== N && (e = n, n = null), e && "function" != typeof e && (e = o.parse), 
            n = s(n), i = !(r = p(t || "")).protocol && !r.slashes, U.slashes = r.slashes || i && n.slashes, 
            U.protocol = r.protocol || n.protocol || "", t = r.rest, r.slashes || (u[3] = [ /(.*)/, "pathname" ]); R < u.length; R++) "function" != typeof (h = u[R]) ? (d = h[0], 
            V = h[1], d != d ? U[V] = t : "string" == typeof d ? ~(b = t.indexOf(d)) && ("number" == typeof h[2] ? (U[V] = t.slice(0, b), 
            t = t.slice(b + h[2])) : (U[V] = t.slice(b), t = t.slice(0, b))) : (b = d.exec(t)) && (U[V] = b[1], 
            t = t.slice(0, b.index)), U[V] = U[V] || i && h[3] && n[V] || "", h[4] && (U[V] = U[V].toLowerCase())) : t = h(t);
            e && (U.query = e(U.query)), i && n.slashes && "/" !== U.pathname.charAt(0) && ("" !== U.pathname || "" !== n.pathname) && (U.pathname = c(U.pathname, n.pathname)), 
            a(U.port, U.protocol) || (U.host = U.hostname, U.port = ""), U.username = U.password = "", 
            U.auth && (h = U.auth.split(":"), U.username = h[0] || "", U.password = h[1] || ""), 
            U.origin = U.protocol && U.host && "file:" !== U.protocol ? U.protocol + "//" + U.host : "null", 
            U.href = U.toString();
        }
        function h(t, n, e) {
            var i = this;
            switch (t) {
              case "query":
                "string" == typeof n && n.length && (n = (e || o.parse)(n)), i[t] = n;
                break;

              case "port":
                i[t] = n, a(n, i.protocol) ? n && (i.host = i.hostname + ":" + n) : (i.host = i.hostname, 
                i[t] = "");
                break;

              case "hostname":
                i[t] = n, i.port && (n += ":" + i.port), i.host = n;
                break;

              case "host":
                i[t] = n, /:\d+$/.test(n) ? (n = n.split(":"), i.port = n.pop(), i.hostname = n.join(":")) : (i.hostname = n, 
                i.port = "");
                break;

              case "protocol":
                i.protocol = n.toLowerCase(), i.slashes = !e;
                break;

              case "pathname":
              case "hash":
                if (n) {
                    var r = "pathname" === t ? "/" : "#";
                    i[t] = n.charAt(0) !== r ? r + n : n;
                } else i[t] = n;
                break;

              default:
                i[t] = n;
            }
            for (var d = 0; d < l.length; d++) {
                var s = l[d];
                s[4] && (i[s[1]] = i[s[1]].toLowerCase());
            }
            return i.origin = i.protocol && i.host && "file:" !== i.protocol ? i.protocol + "//" + i.host : "null", 
            i.href = i.toString(), i;
        }
        function b(t) {
            t && "function" == typeof t || (t = o.stringify);
            var n, e = this, a = e.protocol;
            a && ":" !== a.charAt(a.length - 1) && (a += ":");
            var i = a + (e.slashes ? "//" : "");
            return e.username && (i += e.username, e.password && (i += ":" + e.password), i += "@"), 
            i += e.host + e.pathname, (n = "object" == typeof e.query ? t(e.query) : e.query) && (i += "?" !== n.charAt(0) ? "?" + n : n), 
            e.hash && (i += e.hash), i;
        }
        m.prototype = {
            set: h,
            toString: b
        }, m.extractProtocol = p, m.location = s, m.qs = o, t.exports = m;
    }).call(this, e(2));
}, function(t, n) {
    t.exports = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIxMC41cHgiIGhlaWdodD0iMTAuNnB4IiB2aWV3Qm94PSIwIDAgMTAuNSAxMC42IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMC41IDEwLjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48ZGVmcz48L2RlZnM+PGc+PGc+PHJlY3QgeD0iNy44IiB5PSIwLjciIHN0eWxlPSJmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIHdpZHRoPSIwLjYiIGhlaWdodD0iOS4xIj48L3JlY3Q+PGc+PHJlY3QgeD0iOC41IiB5PSIwLjEiIHN0eWxlPSJmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIHdpZHRoPSIxLjkiIGhlaWdodD0iMC42Ij48L3JlY3Q+PHJlY3QgeD0iNS45IiB5PSIwLjEiIHN0eWxlPSJmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIHdpZHRoPSIxLjkiIGhlaWdodD0iMC42Ij48L3JlY3Q+PC9nPjxnPjxyZWN0IHg9IjguNSIgeT0iOS44IiBzdHlsZT0iZmlsbDojRkZGRkZGO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiB3aWR0aD0iMS45IiBoZWlnaHQ9IjAuNiI+PC9yZWN0PjxyZWN0IHg9IjUuOSIgeT0iOS44IiBzdHlsZT0iZmlsbDojRkZGRkZGO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiB3aWR0aD0iMS45IiBoZWlnaHQ9IjAuNiI+PC9yZWN0PjwvZz48L2c+PGc+PHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTTMuMSw1LjNjLTAuMSwwLTAuMiwwLTAuMy0wLjFMMC4yLDIuMyBDMC4xLDIuMiwwLjEsMiwwLjEsMS44czAuMi0wLjMsMC40LTAuM2g0LjJDNSwxLjYsNS4yLDEuOCw1LjIsMmMwLDAuMi0wLjIsMC40LTAuNCwwLjRIMS41bDEuOSwyLjFjMC4yLDAuMiwwLjEsMC40LDAsMC42IEMzLjMsNS4yLDMuMiw1LjMsMy4xLDUuM3oiPjwvcGF0aD48cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNNC43LDguMUgwLjVDMC40LDguMSwwLjIsOCwwLjEsNy45IGMtMC4xLTAuMiwwLTAuMywwLjEtMC41bDIuNS0yLjhjMC4yLTAuMiwwLjQtMC4yLDAuNiwwYzAuMiwwLjIsMC4yLDAuNCwwLDAuNkwxLjUsNy4zaDMuM2MwLjIsMCwwLjQsMC4yLDAuNCwwLjRTNSw4LjEsNC43LDguMXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==";
}, function(t, n) {
    var e;
    e = function() {
        return this;
    }();
    try {
        e = e || Function("return this")() || (0, eval)("this");
    } catch (t) {
        "object" == typeof window && (e = window);
    }
    t.exports = e;
}, function(t, n) {
    function e(t, n) {
        var e = t[1] || "", o = t[3];
        if (!o) return e;
        if (n && "function" == typeof btoa) {
            var i = a(o), r = o.sources.map(function(t) {
                return "/*# sourceURL=" + o.sourceRoot + t + " */";
            });
            return [ e ].concat(r).concat([ i ]).join("\n");
        }
        return [ e ].join("\n");
    }
    function a(t) {
        return "/*# " + ("sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t))))) + " */";
    }
    t.exports = function(t) {
        var n = [];
        return n.toString = function() {
            return this.map(function(n) {
                var a = e(n, t);
                return n[2] ? "@media " + n[2] + "{" + a + "}" : a;
            }).join("");
        }, n.i = function(t, e) {
            "string" == typeof t && (t = [ [ null, t, "" ] ]);
            for (var a = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                "number" == typeof i && (a[i] = !0);
            }
            for (o = 0; o < t.length; o++) {
                var r = t[o];
                "number" == typeof r[0] && a[r[0]] || (e && !r[2] ? r[2] = e : e && (r[2] = "(" + r[2] + ") and (" + e + ")"), 
                n.push(r));
            }
        }, n;
    };
}, function(t, n, e) {
    var a, o = {}, i = function(t) {
        var n;
        return function() {
            return void 0 === n && (n = t.apply(this, arguments)), n;
        };
    }(function() {
        return window && document && document.all && !window.atob;
    }), r = function(t) {
        return document.querySelector(t);
    }, l = (a = {}, function(t) {
        if ("function" == typeof t) return t();
        if (void 0 === a[t]) {
            var n = r.call(this, t);
            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                n = n.contentDocument.head;
            } catch (t) {
                n = null;
            }
            a[t] = n;
        }
        return a[t];
    }), d = null, s = 0, p = [], c = e(15);
    function m(t, n) {
        for (var e = 0; e < t.length; e++) {
            var a = t[e], i = o[a.id];
            if (i) {
                i.refs++;
                for (var r = 0; r < i.parts.length; r++) i.parts[r](a.parts[r]);
                for (;r < a.parts.length; r++) i.parts.push(R(a.parts[r], n));
            } else {
                var l = [];
                for (r = 0; r < a.parts.length; r++) l.push(R(a.parts[r], n));
                o[a.id] = {
                    id: a.id,
                    refs: 1,
                    parts: l
                };
            }
        }
    }
    function h(t, n) {
        for (var e = [], a = {}, o = 0; o < t.length; o++) {
            var i = t[o], r = n.base ? i[0] + n.base : i[0], l = {
                css: i[1],
                media: i[2],
                sourceMap: i[3]
            };
            a[r] ? a[r].parts.push(l) : e.push(a[r] = {
                id: r,
                parts: [ l ]
            });
        }
        return e;
    }
    function b(t, n) {
        var e = l(t.insertInto);
        if (!e) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var a = p[p.length - 1];
        if ("top" === t.insertAt) a ? a.nextSibling ? e.insertBefore(n, a.nextSibling) : e.appendChild(n) : e.insertBefore(n, e.firstChild), 
        p.push(n); else if ("bottom" === t.insertAt) e.appendChild(n); else {
            if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = l(t.insertInto + " " + t.insertAt.before);
            e.insertBefore(n, o);
        }
    }
    function V(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var n = p.indexOf(t);
        n >= 0 && p.splice(n, 1);
    }
    function u(t) {
        var n = document.createElement("style");
        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), U(n, t.attrs), b(t, n), 
        n;
    }
    function N(t) {
        var n = document.createElement("link");
        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", 
        U(n, t.attrs), b(t, n), n;
    }
    function U(t, n) {
        Object.keys(n).forEach(function(e) {
            t.setAttribute(e, n[e]);
        });
    }
    function R(t, n) {
        var e, a, o, i;
        if (n.transform && t.css) {
            if (!(i = n.transform(t.css))) return function() {};
            t.css = i;
        }
        if (n.singleton) {
            var r = s++;
            e = d || (d = u(n)), a = Z.bind(null, e, r, !1), o = Z.bind(null, e, r, !0);
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (e = N(n), 
        a = F.bind(null, e, n), o = function() {
            V(e), e.href && URL.revokeObjectURL(e.href);
        }) : (e = u(n), a = x.bind(null, e), o = function() {
            V(e);
        });
        return a(t), function(n) {
            if (n) {
                if (n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap) return;
                a(t = n);
            } else o();
        };
    }
    t.exports = function(t, n) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (n = n || {}).attrs = "object" == typeof n.attrs ? n.attrs : {}, n.singleton || "boolean" == typeof n.singleton || (n.singleton = i()), 
        n.insertInto || (n.insertInto = "head"), n.insertAt || (n.insertAt = "bottom");
        var e = h(t, n);
        return m(e, n), function(t) {
            for (var a = [], i = 0; i < e.length; i++) {
                var r = e[i];
                (l = o[r.id]).refs--, a.push(l);
            }
            t && m(h(t, n), n);
            for (i = 0; i < a.length; i++) {
                var l;
                if (0 === (l = a[i]).refs) {
                    for (var d = 0; d < l.parts.length; d++) l.parts[d]();
                    delete o[l.id];
                }
            }
        };
    };
    var f, k = (f = [], function(t, n) {
        return f[t] = n, f.filter(Boolean).join("\n");
    });
    function Z(t, n, e, a) {
        var o = e ? "" : a.css;
        if (t.styleSheet) t.styleSheet.cssText = k(n, o); else {
            var i = document.createTextNode(o), r = t.childNodes;
            r[n] && t.removeChild(r[n]), r.length ? t.insertBefore(i, r[n]) : t.appendChild(i);
        }
    }
    function x(t, n) {
        var e = n.css, a = n.media;
        if (a && t.setAttribute("media", a), t.styleSheet) t.styleSheet.cssText = e; else {
            for (;t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
        }
    }
    function F(t, n, e) {
        var a = e.css, o = e.sourceMap, i = void 0 === n.convertToAbsoluteUrls && o;
        (n.convertToAbsoluteUrls || i) && (a = c(a)), o && (a += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        var r = new Blob([ a ], {
            type: "text/css"
        }), l = t.href;
        t.href = URL.createObjectURL(r), l && URL.revokeObjectURL(l);
    }
}, function(t, n, e) {
    var a, o = e(16);
    "string" == typeof o && (o = [ [ t.i, o, "" ] ]);
    var i = {
        hmr: !0
    };
    i.transform = a, i.insertInto = void 0;
    e(4)(o, i);
    o.locals && (t.exports = o.locals);
}, function(t, n, e) {
    var a;
    a = function() {
        return function(t) {
            var n = {};
            function e(a) {
                if (n[a]) return n[a].exports;
                var o = n[a] = {
                    i: a,
                    l: !1,
                    exports: {}
                };
                return t[a].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
            }
            return e.m = t, e.c = n, e.i = function(t) {
                return t;
            }, e.d = function(t, n, a) {
                e.o(t, n) || Object.defineProperty(t, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: a
                });
            }, e.n = function(t) {
                var n = t && t.__esModule ? function() {
                    return t.default;
                } : function() {
                    return t;
                };
                return e.d(n, "a", n), n;
            }, e.o = function(t, n) {
                return Object.prototype.hasOwnProperty.call(t, n);
            }, e.p = "", e(e.s = 3);
        }([ function(t, n, e) {
            var a, o, i, r;
            r = function(t, n) {
                "use strict";
                var e = a(n);
                function a(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    };
                }
                var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                };
                function i(t, n) {
                    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
                }
                var r = function() {
                    function t(t, n) {
                        for (var e = 0; e < n.length; e++) {
                            var a = n[e];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                            Object.defineProperty(t, a.key, a);
                        }
                    }
                    return function(n, e, a) {
                        return e && t(n.prototype, e), a && t(n, a), n;
                    };
                }(), l = function() {
                    function t(n) {
                        i(this, t), this.resolveOptions(n), this.initSelection();
                    }
                    return r(t, [ {
                        key: "resolveOptions",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = t.action, this.container = t.container, this.emitter = t.emitter, 
                            this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = "";
                        }
                    }, {
                        key: "initSelection",
                        value: function() {
                            this.text ? this.selectFake() : this.target && this.selectTarget();
                        }
                    }, {
                        key: "selectFake",
                        value: function() {
                            var t = this, n = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(), this.fakeHandlerCallback = function() {
                                return t.removeFake();
                            }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, 
                            this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", 
                            this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", 
                            this.fakeElem.style.position = "absolute", this.fakeElem.style[n ? "right" : "left"] = "-9999px";
                            var a = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = a + "px", this.fakeElem.setAttribute("readonly", ""), 
                            this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, 
                            e.default)(this.fakeElem), this.copyText();
                        }
                    }, {
                        key: "removeFake",
                        value: function() {
                            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), 
                            this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), 
                            this.fakeElem = null);
                        }
                    }, {
                        key: "selectTarget",
                        value: function() {
                            this.selectedText = (0, e.default)(this.target), this.copyText();
                        }
                    }, {
                        key: "copyText",
                        value: function() {
                            var t = void 0;
                            try {
                                t = document.execCommand(this.action);
                            } catch (n) {
                                t = !1;
                            }
                            this.handleResult(t);
                        }
                    }, {
                        key: "handleResult",
                        value: function(t) {
                            this.emitter.emit(t ? "success" : "error", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            });
                        }
                    }, {
                        key: "clearSelection",
                        value: function() {
                            this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.removeFake();
                        }
                    }, {
                        key: "action",
                        set: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                            if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                        },
                        get: function() {
                            return this._action;
                        }
                    }, {
                        key: "target",
                        set: function(t) {
                            if (void 0 !== t) {
                                if (!t || "object" !== (void 0 === t ? "undefined" : o(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = t;
                            }
                        },
                        get: function() {
                            return this._target;
                        }
                    } ]), t;
                }();
                t.exports = l;
            }, o = [ t, e(7) ], void 0 === (i = "function" == typeof (a = r) ? a.apply(n, o) : a) || (t.exports = i);
        }, function(t, n, e) {
            var a = e(6), o = e(5);
            function i(t, n, e) {
                if (!t && !n && !e) throw new Error("Missing required arguments");
                if (!a.string(n)) throw new TypeError("Second argument must be a String");
                if (!a.fn(e)) throw new TypeError("Third argument must be a Function");
                if (a.node(t)) return r(t, n, e);
                if (a.nodeList(t)) return l(t, n, e);
                if (a.string(t)) return d(t, n, e);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            }
            function r(t, n, e) {
                return t.addEventListener(n, e), {
                    destroy: function() {
                        t.removeEventListener(n, e);
                    }
                };
            }
            function l(t, n, e) {
                return Array.prototype.forEach.call(t, function(t) {
                    t.addEventListener(n, e);
                }), {
                    destroy: function() {
                        Array.prototype.forEach.call(t, function(t) {
                            t.removeEventListener(n, e);
                        });
                    }
                };
            }
            function d(t, n, e) {
                return o(document.body, t, n, e);
            }
            t.exports = i;
        }, function(t, n) {
            function e() {}
            e.prototype = {
                on: function(t, n, e) {
                    var a = this.e || (this.e = {});
                    return (a[t] || (a[t] = [])).push({
                        fn: n,
                        ctx: e
                    }), this;
                },
                once: function(t, n, e) {
                    var a = this;
                    function o() {
                        a.off(t, o), n.apply(e, arguments);
                    }
                    return o._ = n, this.on(t, o, e);
                },
                emit: function(t) {
                    for (var n = [].slice.call(arguments, 1), e = ((this.e || (this.e = {}))[t] || []).slice(), a = 0, o = e.length; a < o; a++) e[a].fn.apply(e[a].ctx, n);
                    return this;
                },
                off: function(t, n) {
                    var e = this.e || (this.e = {}), a = e[t], o = [];
                    if (a && n) for (var i = 0, r = a.length; i < r; i++) a[i].fn !== n && a[i].fn._ !== n && o.push(a[i]);
                    return o.length ? e[t] = o : delete e[t], this;
                }
            }, t.exports = e;
        }, function(t, n, e) {
            var a, o, i, r;
            r = function(t, n, e, a) {
                "use strict";
                var o = l(n), i = l(e), r = l(a);
                function l(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    };
                }
                var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t;
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                };
                function s(t, n) {
                    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
                }
                var p = function() {
                    function t(t, n) {
                        for (var e = 0; e < n.length; e++) {
                            var a = n[e];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                            Object.defineProperty(t, a.key, a);
                        }
                    }
                    return function(n, e, a) {
                        return e && t(n.prototype, e), a && t(n, a), n;
                    };
                }();
                function c(t, n) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !n || "object" != typeof n && "function" != typeof n ? t : n;
                }
                function m(t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
                    t.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
                }
                var h = function(t) {
                    function n(t, e) {
                        s(this, n);
                        var a = c(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                        return a.resolveOptions(e), a.listenClick(t), a;
                    }
                    return m(n, i.default), p(n, [ {
                        key: "resolveOptions",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, 
                            this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === d(t.container) ? t.container : document.body;
                        }
                    }, {
                        key: "listenClick",
                        value: function(t) {
                            var n = this;
                            this.listener = (0, r.default)(t, "click", function(t) {
                                return n.onClick(t);
                            });
                        }
                    }, {
                        key: "onClick",
                        value: function(t) {
                            var n = t.delegateTarget || t.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new o.default({
                                action: this.action(n),
                                target: this.target(n),
                                text: this.text(n),
                                container: this.container,
                                trigger: n,
                                emitter: this
                            });
                        }
                    }, {
                        key: "defaultAction",
                        value: function(t) {
                            return b("action", t);
                        }
                    }, {
                        key: "defaultTarget",
                        value: function(t) {
                            var n = b("target", t);
                            if (n) return document.querySelector(n);
                        }
                    }, {
                        key: "defaultText",
                        value: function(t) {
                            return b("text", t);
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), 
                            this.clipboardAction = null);
                        }
                    } ], [ {
                        key: "isSupported",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [ "copy", "cut" ], n = "string" == typeof t ? [ t ] : t, e = !!document.queryCommandSupported;
                            return n.forEach(function(t) {
                                e = e && !!document.queryCommandSupported(t);
                            }), e;
                        }
                    } ]), n;
                }();
                function b(t, n) {
                    var e = "data-clipboard-" + t;
                    if (n.hasAttribute(e)) return n.getAttribute(e);
                }
                t.exports = h;
            }, o = [ t, e(0), e(2), e(1) ], void 0 === (i = "function" == typeof (a = r) ? a.apply(n, o) : a) || (t.exports = i);
        }, function(t, n) {
            var e = 9;
            if ("undefined" != typeof Element && !Element.prototype.matches) {
                var a = Element.prototype;
                a.matches = a.matchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector || a.webkitMatchesSelector;
            }
            function o(t, n) {
                for (;t && t.nodeType !== e; ) {
                    if ("function" == typeof t.matches && t.matches(n)) return t;
                    t = t.parentNode;
                }
            }
            t.exports = o;
        }, function(t, n, e) {
            var a = e(4);
            function o(t, n, e, a, o) {
                var i = r.apply(this, arguments);
                return t.addEventListener(e, i, o), {
                    destroy: function() {
                        t.removeEventListener(e, i, o);
                    }
                };
            }
            function i(t, n, e, a, i) {
                return "function" == typeof t.addEventListener ? o.apply(null, arguments) : "function" == typeof e ? o.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), 
                Array.prototype.map.call(t, function(t) {
                    return o(t, n, e, a, i);
                }));
            }
            function r(t, n, e, o) {
                return function(e) {
                    e.delegateTarget = a(e.target, n), e.delegateTarget && o.call(t, e);
                };
            }
            t.exports = i;
        }, function(t, n) {
            n.node = function(t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
            }, n.nodeList = function(t) {
                var e = Object.prototype.toString.call(t);
                return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]));
            }, n.string = function(t) {
                return "string" == typeof t || t instanceof String;
            }, n.fn = function(t) {
                return "[object Function]" === Object.prototype.toString.call(t);
            };
        }, function(t, n) {
            function e(t) {
                var n;
                if ("SELECT" === t.nodeName) t.focus(), n = t.value; else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                    var e = t.hasAttribute("readonly");
                    e || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), 
                    e || t.removeAttribute("readonly"), n = t.value;
                } else {
                    t.hasAttribute("contenteditable") && t.focus();
                    var a = window.getSelection(), o = document.createRange();
                    o.selectNodeContents(t), a.removeAllRanges(), a.addRange(o), n = a.toString();
                }
                return n;
            }
            t.exports = e;
        } ]);
    }, t.exports = a();
}, function(t, n) {
    t.exports = "data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMTUgMTE1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMTUgMTE1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzJfKTt9Cgkuc3Qxe2ZpbGw6IzAwQjdGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2NsaXAtcGF0aDp1cmwoI1NWR0lEXzJfKTtmaWxsOiMwMEI3RkY7fQo8L3N0eWxlPgo8Zz4KCTxnPgoJCTxkZWZzPgoJCQk8Y2lyY2xlIGlkPSJTVkdJRF8xXyIgY3g9IjU3LjUiIGN5PSI1Ny41IiByPSI1NS41Ii8+CgkJPC9kZWZzPgoJCTxjbGlwUGF0aCBpZD0iU1ZHSURfMl8iPgoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPgoJCTwvY2xpcFBhdGg+CgkJPGcgY2xhc3M9InN0MCI+CgkJCTxnPgoJCQkJPGc+CgkJCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTc2LjQsMTE2LjZjMCw2LjItNSwxMS4yLTExLjIsMTEuMkg0NC4zYy02LjIsMC0xMS4yLTUtMTEuMi0xMS4yVjM1LjhjMC02LjIsNS0xMS4yLDExLjItMTEuMmgyMC44CgkJCQkJCWM2LjIsMCwxMS4yLDUsMTEuMiwxMS4yVjExNi42eiIvPgoJCQkJPC9nPgoJCQk8L2c+CgkJCTxnPgoJCQkJPGc+CgkJCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTU5LjMsNTIuOGMwLDMuMywxLjksNC4xLDQuMiwxLjhsMjUuNy0yNS43YzIuMy0yLjMsMS41LTQuMi0xLjgtNC4ySDY1LjNjLTMuMywwLTYsMi43LTYsNkw1OS4zLDUyLjh6Ii8+CgkJCQk8L2c+CgkJCTwvZz4KCQkJPGc+CgkJCQk8Zz4KCQkJCQk8Zz4KCQkJCQkJPGxpbmUgY2xhc3M9InN0MSIgeDE9IjUxLjYiIHkxPSIxNTYuMiIgeDI9IjUxLjYiIHkyPSIxMjEuNiIvPgoJCQkJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTEuNiwxNTcuOWMtMC45LDAtMS42LTAuNy0xLjYtMS42di0zNC43YzAtMC45LDAuNy0xLjYsMS42LTEuNmMwLjksMCwxLjYsMC43LDEuNiwxLjZ2MzQuNwoJCQkJCQkJQzUzLjIsMTU3LjEsNTIuNSwxNTcuOSw1MS42LDE1Ny45eiIvPgoJCQkJCTwvZz4KCQkJCQk8Zz4KCQkJCQkJPGxpbmUgY2xhc3M9InN0MSIgeDE9IjU3LjkiIHkxPSIxNTYuMiIgeDI9IjU3LjkiIHkyPSIxMjQuMyIvPgoJCQkJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTcuOSwxNTcuOWMtMC45LDAtMS42LTAuNy0xLjYtMS42di0zMS45YzAtMC45LDAuNy0xLjYsMS42LTEuNnMxLjYsMC43LDEuNiwxLjZ2MzEuOQoJCQkJCQkJQzU5LjYsMTU3LjEsNTguOSwxNTcuOSw1Ny45LDE1Ny45eiIvPgoJCQkJCTwvZz4KCQkJCTwvZz4KCQkJPC9nPgoJCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNjcuNiwzNS43SDU3LjVjLTAuNiwwLTEuMi0wLjUtMS4yLTEuMnYwYzAtMC42LDAuNS0xLjIsMS4yLTEuMmgxMC4xYzAuNiwwLDEuMiwwLjUsMS4yLDEuMnYwCgkJCQlDNjguOCwzNS4xLDY4LjIsMzUuNyw2Ny42LDM1Ljd6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik02Ny4zLDM1LjJsLTYuOS00LjFjLTAuNS0wLjMtMC42LTAuOS0wLjMtMS4zdjBjMC4zLTAuNSwwLjktMC42LDEuMy0wLjNsNi45LDQuMWMwLjUsMC4zLDAuNiwwLjksMC4zLDEuMwoJCQkJbDAsMEM2OC40LDM1LjQsNjcuNywzNS41LDY3LjMsMzUuMnoiLz4KCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTY4LjIsMzUuNmwtNi4xLDVjLTAuNCwwLjQtMS4xLDAuMy0xLjUtMC4ybDAsMGMtMC40LTAuNC0wLjMtMS4xLDAuMi0xLjVsNi4xLTVjMC40LTAuNCwxLjEtMC4zLDEuNSwwLjJ2MAoJCQkJQzY4LjcsMzQuNiw2OC43LDM1LjIsNjguMiwzNS42eiIvPgoJCTwvZz4KCQk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNNzEuNywxNS4yYy0wLjYsMC42LTEuMywyLjYtMi42LDUuNWMzLjEtMC42LDUuMi0wLjgsNS45LTEuMmMwLjItMC4xLDAuNC0wLjIsMC42LTAuNAoJCQljMS4yLTAuOSwxLjQtMi43LDAuNS0zLjlzLTIuNy0xLjUtMy45LTAuNUM3MiwxNC44LDcxLjgsMTUsNzEuNywxNS4yeiIvPgoJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzFfIiAgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7ZmlsbDpub25lO3N0cm9rZTojMDBCN0ZGO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwOyIvPgoJPC9nPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTcwLjIsNDkuNWMtMC4xLTAuOC0xLjItMi42LTIuNS01LjVjLTEuNSwyLjgtMi43LDQuNS0yLjksNS4zYy0wLjEsMC4yLTAuMSwwLjUtMC4xLDAuNwoJCWMtMC4xLDEuNSwxLjEsMi44LDIuNywyLjlzMi44LTEuMSwyLjktMi43QzcwLjMsNTAsNzAuMyw0OS43LDcwLjIsNDkuNXoiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik03MC4yLDYzLjZjLTAuMS0wLjgtMS4yLTIuNi0yLjUtNS41Yy0xLjUsMi44LTIuNyw0LjUtMi45LDUuM2MtMC4xLDAuMi0wLjEsMC41LTAuMSwwLjcKCQljLTAuMSwxLjUsMS4xLDIuOCwyLjcsMi45YzEuNSwwLjEsMi44LTEuMSwyLjktMi43QzcwLjMsNjQsNzAuMyw2My44LDcwLjIsNjMuNnoiLz4KPC9nPgo8L3N2Zz4K";
}, function(t, n) {
    t.exports = "data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA3MiA3MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzIgNzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGcgaWQ9ImNvcHlfMl8iPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0yNCwzNy41VjI3bDEyLDEySDI1LjVDMjQuNywzOSwyNCwzOC4zLDI0LDM3LjV6IE0yMi41LDQySDM2djI4LjVjMCwwLjgtMC43LDEuNS0xLjUsMS41aC0zMwoJCUMwLjcsNzIsMCw3MS4zLDAsNzAuNXYtNDJDMCwyNy43LDAuNywyNywxLjUsMjdIMjF2MTMuNUMyMSw0MS4zLDIxLjcsNDIsMjIuNSw0MnogTTQyLjEsMTVoMTcuOWMxLjcsMCwzLjEtMS4zLDMuMS0zVjkuMQoJCUM2Myw3LjQsNjEuNiw2LDU5LjksNkg1N1YzLjNDNTcsMS42LDU1LjYsMCw1NCwwaC02Yy0xLjYsMC0zLDEuNi0zLDMuM1Y2aC0yLjlDNDAuNCw2LDM5LDcuNCwzOSw5LjFWMTJDMzksMTMuNyw0MC40LDE1LDQyLjEsMTV6CgkJIE00NC40LDQ4LjZIMzlWNTdoNS40VjQ4LjZ6IE03MC41LDlINjZ2Ni4xYzAsMS43LTEuNCwyLjktMywyLjlIMzljLTEuNiwwLTMtMS4zLTMtMi45VjloLTQuNUMzMC43LDksMzAsOS43LDMwLDEwLjVWMjdsOC40LDguNGg2CgkJVjI0bDE4LDE4bC0xNSwxNWgyMy4xYzAuOCwwLDEuNS0wLjUsMS41LTEuM1YxMC41QzcyLDkuNyw3MS4zLDksNzAuNSw5eiBNNTUuOCw0Mkw0OCwzNC4yVjM5aC05djZoOXY0LjhMNTUuOCw0MnoiLz4KPC9nPgo8L3N2Zz4K";
}, function(t, n, e) {
    "use strict";
    (function(t) {
        function e(t, n) {
            return a(t) || o(t, n) || i();
        }
        function a(t) {
            if (Array.isArray(t)) return t;
        }
        function o(t, n) {
            var e = [], a = !0, o = !1, i = void 0;
            try {
                for (var r, l = t[Symbol.iterator](); !(a = (r = l.next()).done) && (e.push(r.value), 
                !n || e.length !== n); a = !0) ;
            } catch (t) {
                o = !0, i = t;
            } finally {
                try {
                    a || null == l.return || l.return();
                } finally {
                    if (o) throw i;
                }
            }
            return e;
        }
        function i() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};
        function l(t, n) {
            return t(n = {
                exports: {}
            }, n.exports), n.exports;
        }
        var d = function(t, n) {
            if (n = n.split(":")[0], !(t = +t)) return !1;
            switch (n) {
              case "http":
              case "ws":
                return 80 !== t;

              case "https":
              case "wss":
                return 443 !== t;

              case "ftp":
                return 21 !== t;

              case "gopher":
                return 70 !== t;

              case "file":
                return !1;
            }
            return 0 !== t;
        }, s = Object.prototype.hasOwnProperty;
        function p(t) {
            return decodeURIComponent(t.replace(/\+/g, " "));
        }
        function c(t) {
            for (var n, e = /([^=?&]+)=?([^&]*)/g, a = {}; n = e.exec(t); ) {
                var o = p(n[1]), i = p(n[2]);
                o in a || (a[o] = i);
            }
            return a;
        }
        function m(t, n) {
            n = n || "";
            var e = [];
            for (var a in "string" != typeof n && (n = "?"), t) s.call(t, a) && e.push(encodeURIComponent(a) + "=" + encodeURIComponent(t[a]));
            return e.length ? n + e.join("&") : "";
        }
        var h = {
            stringify: m,
            parse: c
        }, b = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i, V = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, u = [ [ "#", "hash" ], [ "?", "query" ], function(t) {
            return t.replace("\\", "/");
        }, [ "/", "pathname" ], [ "@", "auth", 1 ], [ NaN, "host", void 0, 1, 1 ], [ /:(\d+)$/, "port", void 0, 1 ], [ NaN, "hostname", void 0, 1, 1 ] ], N = {
            hash: 1,
            query: 1
        };
        function U(t) {
            var n, e = r && r.location || {}, a = {}, o = typeof (t = t || e);
            if ("blob:" === t.protocol) a = new k(unescape(t.pathname), {}); else if ("string" === o) for (n in a = new k(t, {}), 
            N) delete a[n]; else if ("object" === o) {
                for (n in t) n in N || (a[n] = t[n]);
                void 0 === a.slashes && (a.slashes = V.test(t.href));
            }
            return a;
        }
        function R(t) {
            var n = b.exec(t);
            return {
                protocol: n[1] ? n[1].toLowerCase() : "",
                slashes: !!n[2],
                rest: n[3]
            };
        }
        function f(t, n) {
            for (var e = (n || "/").split("/").slice(0, -1).concat(t.split("/")), a = e.length, o = e[a - 1], i = !1, r = 0; a--; ) "." === e[a] ? e.splice(a, 1) : ".." === e[a] ? (e.splice(a, 1), 
            r++) : r && (0 === a && (i = !0), e.splice(a, 1), r--);
            return i && e.unshift(""), "." !== o && ".." !== o || e.push(""), e.join("/");
        }
        function k(t, n, e) {
            if (!(this instanceof k)) return new k(t, n, e);
            var a, o, i, r, l, s, p = u.slice(), c = typeof n, m = this, b = 0;
            for ("object" !== c && "string" !== c && (e = n, n = null), e && "function" != typeof e && (e = h.parse), 
            n = U(n), a = !(o = R(t || "")).protocol && !o.slashes, m.slashes = o.slashes || a && n.slashes, 
            m.protocol = o.protocol || n.protocol || "", t = o.rest, o.slashes || (p[3] = [ /(.*)/, "pathname" ]); b < p.length; b++) "function" != typeof (r = p[b]) ? (i = r[0], 
            s = r[1], i != i ? m[s] = t : "string" == typeof i ? ~(l = t.indexOf(i)) && (t = "number" == typeof r[2] ? (m[s] = t.slice(0, l), 
            t.slice(l + r[2])) : (m[s] = t.slice(l), t.slice(0, l))) : (l = i.exec(t)) && (m[s] = l[1], 
            t = t.slice(0, l.index)), m[s] = m[s] || a && r[3] && n[s] || "", r[4] && (m[s] = m[s].toLowerCase())) : t = r(t);
            e && (m.query = e(m.query)), a && n.slashes && "/" !== m.pathname.charAt(0) && ("" !== m.pathname || "" !== n.pathname) && (m.pathname = f(m.pathname, n.pathname)), 
            d(m.port, m.protocol) || (m.host = m.hostname, m.port = ""), m.username = m.password = "", 
            m.auth && (r = m.auth.split(":"), m.username = r[0] || "", m.password = r[1] || ""), 
            m.origin = m.protocol && m.host && "file:" !== m.protocol ? m.protocol + "//" + m.host : "null", 
            m.href = m.toString();
        }
        function Z(t, n, e) {
            var a = this;
            switch (t) {
              case "query":
                "string" == typeof n && n.length && (n = (e || h.parse)(n)), a[t] = n;
                break;

              case "port":
                a[t] = n, d(n, a.protocol) ? n && (a.host = a.hostname + ":" + n) : (a.host = a.hostname, 
                a[t] = "");
                break;

              case "hostname":
                a[t] = n, a.port && (n += ":" + a.port), a.host = n;
                break;

              case "host":
                a[t] = n, /:\d+$/.test(n) ? (n = n.split(":"), a.port = n.pop(), a.hostname = n.join(":")) : (a.hostname = n, 
                a.port = "");
                break;

              case "protocol":
                a.protocol = n.toLowerCase(), a.slashes = !e;
                break;

              case "pathname":
              case "hash":
                if (n) {
                    var o = "pathname" === t ? "/" : "#";
                    a[t] = n.charAt(0) !== o ? o + n : n;
                } else a[t] = n;
                break;

              default:
                a[t] = n;
            }
            for (var i = 0; i < u.length; i++) {
                var r = u[i];
                r[4] && (a[r[1]] = a[r[1]].toLowerCase());
            }
            return a.origin = a.protocol && a.host && "file:" !== a.protocol ? a.protocol + "//" + a.host : "null", 
            a.href = a.toString(), a;
        }
        function x(t) {
            t && "function" == typeof t || (t = h.stringify);
            var n, e = this, a = e.protocol;
            a && ":" !== a.charAt(a.length - 1) && (a += ":");
            var o = a + (e.slashes ? "//" : "");
            return e.username && (o += e.username, e.password && (o += ":" + e.password), o += "@"), 
            o += e.host + e.pathname, (n = "object" == typeof e.query ? t(e.query) : e.query) && (o += "?" !== n.charAt(0) ? "?" + n : n), 
            e.hash && (o += e.hash), o;
        }
        k.prototype = {
            set: Z,
            toString: x
        }, k.extractProtocol = R, k.location = U, k.qs = h;
        for (var F = k, W = Y, T = j, w = C, g = [], M = [], y = "undefined" != typeof Uint8Array ? Uint8Array : Array, E = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", S = 0, v = E.length; S < v; ++S) g[S] = E[S], 
        M[E.charCodeAt(S)] = S;
        function Q(t) {
            var n = t.length;
            if (0 < n % 4) throw new Error("Invalid string. Length must be a multiple of 4");
            var e = t.indexOf("=");
            return -1 === e && (e = n), [ e, e === n ? 0 : 4 - e % 4 ];
        }
        function Y(t) {
            var n = Q(t), e = n[0], a = n[1];
            return 3 * (e + a) / 4 - a;
        }
        function z(t, n, e) {
            return 3 * (n + e) / 4 - e;
        }
        function j(t) {
            for (var n, e = Q(t), a = e[0], o = e[1], i = new y(z(t, a, o)), r = 0, l = 0 < o ? a - 4 : a, d = 0; d < l; d += 4) n = M[t.charCodeAt(d)] << 18 | M[t.charCodeAt(d + 1)] << 12 | M[t.charCodeAt(d + 2)] << 6 | M[t.charCodeAt(d + 3)], 
            i[r++] = n >> 16 & 255, i[r++] = n >> 8 & 255, i[r++] = 255 & n;
            return 2 === o && (n = M[t.charCodeAt(d)] << 2 | M[t.charCodeAt(d + 1)] >> 4, i[r++] = 255 & n), 
            1 === o && (n = M[t.charCodeAt(d)] << 10 | M[t.charCodeAt(d + 1)] << 4 | M[t.charCodeAt(d + 2)] >> 2, 
            i[r++] = n >> 8 & 255, i[r++] = 255 & n), i;
        }
        function J(t) {
            return g[t >> 18 & 63] + g[t >> 12 & 63] + g[t >> 6 & 63] + g[63 & t];
        }
        function G(t, n, e) {
            for (var a, o = [], i = n; i < e; i += 3) a = (t[i] << 16 & 16711680) + (t[i + 1] << 8 & 65280) + (255 & t[i + 2]), 
            o.push(J(a));
            return o.join("");
        }
        function C(t) {
            for (var n, e = t.length, a = e % 3, o = [], i = 0, r = e - a; i < r; i += 16383) o.push(G(t, i, r < i + 16383 ? r : i + 16383));
            return 1 === a ? (n = t[e - 1], o.push(g[n >> 2] + g[n << 4 & 63] + "==")) : 2 === a && (n = (t[e - 2] << 8) + t[e - 1], 
            o.push(g[n >> 10] + g[n >> 4 & 63] + g[n << 2 & 63] + "=")), o.join("");
        }
        M["-".charCodeAt(0)] = 62, M["_".charCodeAt(0)] = 63;
        var X = {
            byteLength: W,
            toByteArray: T,
            fromByteArray: w
        }, D = {
            read: function(t, n, e, a, o) {
                var i, r, l = 8 * o - a - 1, d = (1 << l) - 1, s = d >> 1, p = -7, c = e ? o - 1 : 0, m = e ? -1 : 1, h = t[n + c];
                for (c += m, i = h & (1 << -p) - 1, h >>= -p, p += l; 0 < p; i = 256 * i + t[n + c], 
                c += m, p -= 8) ;
                for (r = i & (1 << -p) - 1, i >>= -p, p += a; 0 < p; r = 256 * r + t[n + c], c += m, 
                p -= 8) ;
                if (0 === i) i = 1 - s; else {
                    if (i === d) return r ? NaN : 1 / 0 * (h ? -1 : 1);
                    r += Math.pow(2, a), i -= s;
                }
                return (h ? -1 : 1) * r * Math.pow(2, i - a);
            },
            write: function(t, n, e, a, o, i) {
                var r, l, d, s = 8 * i - o - 1, p = (1 << s) - 1, c = p >> 1, m = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = a ? 0 : i - 1, b = a ? 1 : -1, V = n < 0 || 0 === n && 1 / n < 0 ? 1 : 0;
                for (n = Math.abs(n), isNaN(n) || n === 1 / 0 ? (l = isNaN(n) ? 1 : 0, r = p) : (r = Math.floor(Math.log(n) / Math.LN2), 
                n * (d = Math.pow(2, -r)) < 1 && (r--, d *= 2), 2 <= (n += 1 <= r + c ? m / d : m * Math.pow(2, 1 - c)) * d && (r++, 
                d /= 2), p <= r + c ? (l = 0, r = p) : 1 <= r + c ? (l = (n * d - 1) * Math.pow(2, o), 
                r += c) : (l = n * Math.pow(2, c - 1) * Math.pow(2, o), r = 0)); 8 <= o; t[e + h] = 255 & l, 
                h += b, l /= 256, o -= 8) ;
                for (r = r << o | l, s += o; 0 < s; t[e + h] = 255 & r, h += b, r /= 256, s -= 8) ;
                t[e + h - b] |= 128 * V;
            }
        }, B = l(function(t, n) {
            n.Buffer = o, n.SlowBuffer = function(t) {
                return +t != t && (t = 0), o.alloc(+t);
            }, n.INSPECT_MAX_BYTES = 50;
            var e = 2147483647;
            function a(t) {
                if (e < t) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                var n = new Uint8Array(t);
                return n.__proto__ = o.prototype, n;
            }
            function o(t, n, e) {
                if ("number" != typeof t) return i(t, n, e);
                if ("string" == typeof n) throw new TypeError('The "string" argument must be of type string. Received type number');
                return l(t);
            }
            function i(t, n, e) {
                if ("string" == typeof t) return function(t, n) {
                    if ("string" == typeof n && "" !== n || (n = "utf8"), !o.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                    var e = 0 | p(t, n), i = a(e), r = i.write(t, n);
                    return r !== e && (i = i.slice(0, r)), i;
                }(t, n);
                if (ArrayBuffer.isView(t)) return d(t);
                if (null == t) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                if (v(t, ArrayBuffer) || t && v(t.buffer, ArrayBuffer)) return function(t, n, e) {
                    if (n < 0 || t.byteLength < n) throw new RangeError('"offset" is outside of buffer bounds');
                    if (t.byteLength < n + (e || 0)) throw new RangeError('"length" is outside of buffer bounds');
                    var a;
                    return (a = void 0 === n && void 0 === e ? new Uint8Array(t) : void 0 === e ? new Uint8Array(t, n) : new Uint8Array(t, n, e)).__proto__ = o.prototype, 
                    a;
                }(t, n, e);
                if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
                var i = t.valueOf && t.valueOf();
                if (null != i && i !== t) return o.from(i, n, e);
                var r = function(t) {
                    if (o.isBuffer(t)) {
                        var n = 0 | s(t.length), e = a(n);
                        return 0 === e.length || t.copy(e, 0, 0, n), e;
                    }
                    return void 0 !== t.length ? "number" != typeof t.length || Q(t.length) ? a(0) : d(t) : "Buffer" === t.type && Array.isArray(t.data) ? d(t.data) : void 0;
                }(t);
                if (r) return r;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return o.from(t[Symbol.toPrimitive]("string"), n, e);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
            }
            function r(t) {
                if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
                if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"');
            }
            function l(t) {
                return r(t), a(t < 0 ? 0 : 0 | s(t));
            }
            function d(t) {
                for (var n = t.length < 0 ? 0 : 0 | s(t.length), e = a(n), o = 0; o < n; o += 1) e[o] = 255 & t[o];
                return e;
            }
            function s(t) {
                if (e <= t) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + e.toString(16) + " bytes");
                return 0 | t;
            }
            function p(t, n) {
                if (o.isBuffer(t)) return t.length;
                if (ArrayBuffer.isView(t) || v(t, ArrayBuffer)) return t.byteLength;
                if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                var e = t.length, a = 2 < arguments.length && !0 === arguments[2];
                if (!a && 0 === e) return 0;
                for (var i = !1; ;) switch (n) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return e;

                  case "utf8":
                  case "utf-8":
                    return y(t).length;

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return 2 * e;

                  case "hex":
                    return e >>> 1;

                  case "base64":
                    return E(t).length;

                  default:
                    if (i) return a ? -1 : y(t).length;
                    n = ("" + n).toLowerCase(), i = !0;
                }
            }
            function c(t, n, e) {
                var a = t[n];
                t[n] = t[e], t[e] = a;
            }
            function m(t, n, e, a, i) {
                if (0 === t.length) return -1;
                if ("string" == typeof e ? (a = e, e = 0) : 2147483647 < e ? e = 2147483647 : e < -2147483648 && (e = -2147483648), 
                Q(e = +e) && (e = i ? 0 : t.length - 1), e < 0 && (e = t.length + e), e >= t.length) {
                    if (i) return -1;
                    e = t.length - 1;
                } else if (e < 0) {
                    if (!i) return -1;
                    e = 0;
                }
                if ("string" == typeof n && (n = o.from(n, a)), o.isBuffer(n)) return 0 === n.length ? -1 : h(t, n, e, a, i);
                if ("number" == typeof n) return n &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, n, e) : Uint8Array.prototype.lastIndexOf.call(t, n, e) : h(t, [ n ], e, a, i);
                throw new TypeError("val must be string, number or Buffer");
            }
            function h(t, n, e, a, o) {
                var i, r = 1, l = t.length, d = n.length;
                if (void 0 !== a && ("ucs2" === (a = String(a).toLowerCase()) || "ucs-2" === a || "utf16le" === a || "utf-16le" === a)) {
                    if (t.length < 2 || n.length < 2) return -1;
                    l /= r = 2, d /= 2, e /= 2;
                }
                function s(t, n) {
                    return 1 === r ? t[n] : t.readUInt16BE(n * r);
                }
                if (o) {
                    var p = -1;
                    for (i = e; i < l; i++) if (s(t, i) === s(n, -1 === p ? 0 : i - p)) {
                        if (-1 === p && (p = i), i - p + 1 === d) return p * r;
                    } else -1 !== p && (i -= i - p), p = -1;
                } else for (l < e + d && (e = l - d), i = e; 0 <= i; i--) {
                    for (var c = !0, m = 0; m < d; m++) if (s(t, i + m) !== s(n, m)) {
                        c = !1;
                        break;
                    }
                    if (c) return i;
                }
                return -1;
            }
            function b(t, n, e, a) {
                e = Number(e) || 0;
                var o = t.length - e;
                a ? o < (a = Number(a)) && (a = o) : a = o;
                var i = n.length;
                i / 2 < a && (a = i / 2);
                for (var r = 0; r < a; ++r) {
                    var l = parseInt(n.substr(2 * r, 2), 16);
                    if (Q(l)) return r;
                    t[e + r] = l;
                }
                return r;
            }
            function V(t, n, e, a) {
                return S(function(t) {
                    for (var n = [], e = 0; e < t.length; ++e) n.push(255 & t.charCodeAt(e));
                    return n;
                }(n), t, e, a);
            }
            function u(t, n, e) {
                return 0 === n && e === t.length ? X.fromByteArray(t) : X.fromByteArray(t.slice(n, e));
            }
            function N(t, n, e) {
                e = Math.min(t.length, e);
                for (var a = [], o = n; o < e; ) {
                    var i, r, l, d, s = t[o], p = null, c = 239 < s ? 4 : 223 < s ? 3 : 191 < s ? 2 : 1;
                    if (o + c <= e) switch (c) {
                      case 1:
                        s < 128 && (p = s);
                        break;

                      case 2:
                        128 == (192 & (i = t[o + 1])) && 127 < (d = (31 & s) << 6 | 63 & i) && (p = d);
                        break;

                      case 3:
                        i = t[o + 1], r = t[o + 2], 128 == (192 & i) && 128 == (192 & r) && 2047 < (d = (15 & s) << 12 | (63 & i) << 6 | 63 & r) && (d < 55296 || 57343 < d) && (p = d);
                        break;

                      case 4:
                        i = t[o + 1], r = t[o + 2], l = t[o + 3], 128 == (192 & i) && 128 == (192 & r) && 128 == (192 & l) && 65535 < (d = (15 & s) << 18 | (63 & i) << 12 | (63 & r) << 6 | 63 & l) && d < 1114112 && (p = d);
                    }
                    null === p ? (p = 65533, c = 1) : 65535 < p && (p -= 65536, a.push(p >>> 10 & 1023 | 55296), 
                    p = 56320 | 1023 & p), a.push(p), o += c;
                }
                return function(t) {
                    var n = t.length;
                    if (n <= U) return String.fromCharCode.apply(String, t);
                    for (var e = "", a = 0; a < n; ) e += String.fromCharCode.apply(String, t.slice(a, a += U));
                    return e;
                }(a);
            }
            n.kMaxLength = e, (o.TYPED_ARRAY_SUPPORT = function() {
                try {
                    var t = new Uint8Array(1);
                    return t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42;
                        }
                    }, 42 === t.foo();
                } catch (t) {
                    return !1;
                }
            }()) || "undefined" == typeof console || console.error, Object.defineProperty(o.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (o.isBuffer(this)) return this.buffer;
                }
            }), Object.defineProperty(o.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (o.isBuffer(this)) return this.byteOffset;
                }
            }), "undefined" != typeof Symbol && null != Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
                value: null,
                configurable: !0,
                enumerable: !1,
                writable: !1
            }), o.poolSize = 8192, o.from = function(t, n, e) {
                return i(t, n, e);
            }, o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, o.alloc = function(t, n, e) {
                return i = n, l = e, r(o = t), o <= 0 ? a(o) : void 0 !== i ? "string" == typeof l ? a(o).fill(i, l) : a(o).fill(i) : a(o);
                var o, i, l;
            }, o.allocUnsafe = function(t) {
                return l(t);
            }, o.allocUnsafeSlow = function(t) {
                return l(t);
            }, o.isBuffer = function(t) {
                return null != t && !0 === t._isBuffer && t !== o.prototype;
            }, o.compare = function(t, n) {
                if (v(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)), v(n, Uint8Array) && (n = o.from(n, n.offset, n.byteLength)), 
                !o.isBuffer(t) || !o.isBuffer(n)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (t === n) return 0;
                for (var e = t.length, a = n.length, i = 0, r = Math.min(e, a); i < r; ++i) if (t[i] !== n[i]) {
                    e = t[i], a = n[i];
                    break;
                }
                return e < a ? -1 : a < e ? 1 : 0;
            }, o.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "latin1":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return !0;

                  default:
                    return !1;
                }
            }, o.concat = function(t, n) {
                if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return o.alloc(0);
                var e;
                if (void 0 === n) for (e = n = 0; e < t.length; ++e) n += t[e].length;
                var a = o.allocUnsafe(n), i = 0;
                for (e = 0; e < t.length; ++e) {
                    var r = t[e];
                    if (v(r, Uint8Array) && (r = o.from(r)), !o.isBuffer(r)) throw new TypeError('"list" argument must be an Array of Buffers');
                    r.copy(a, i), i += r.length;
                }
                return a;
            }, o.byteLength = p, o.prototype._isBuffer = !0, o.prototype.swap16 = function() {
                var t = this.length;
                if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var n = 0; n < t; n += 2) c(this, n, n + 1);
                return this;
            }, o.prototype.swap32 = function() {
                var t = this.length;
                if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var n = 0; n < t; n += 4) c(this, n, n + 3), c(this, n + 1, n + 2);
                return this;
            }, o.prototype.swap64 = function() {
                var t = this.length;
                if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var n = 0; n < t; n += 8) c(this, n, n + 7), c(this, n + 1, n + 6), c(this, n + 2, n + 5), 
                c(this, n + 3, n + 4);
                return this;
            }, o.prototype.toLocaleString = o.prototype.toString = function() {
                var t = this.length;
                return 0 === t ? "" : 0 === arguments.length ? N(this, 0, t) : function(t, n, e) {
                    var a = !1;
                    if ((void 0 === n || n < 0) && (n = 0), n > this.length) return "";
                    if ((void 0 === e || e > this.length) && (e = this.length), e <= 0) return "";
                    if ((e >>>= 0) <= (n >>>= 0)) return "";
                    for (t || (t = "utf8"); ;) switch (t) {
                      case "hex":
                        return k(this, n, e);

                      case "utf8":
                      case "utf-8":
                        return N(this, n, e);

                      case "ascii":
                        return R(this, n, e);

                      case "latin1":
                      case "binary":
                        return f(this, n, e);

                      case "base64":
                        return u(this, n, e);

                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return Z(this, n, e);

                      default:
                        if (a) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), a = !0;
                    }
                }.apply(this, arguments);
            }, o.prototype.equals = function(t) {
                if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === o.compare(this, t);
            }, o.prototype.inspect = function() {
                var t = "", e = n.INSPECT_MAX_BYTES;
                return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (t += " ... "), 
                "<Buffer " + t + ">";
            }, o.prototype.compare = function(t, n, e, a, i) {
                if (v(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)), !o.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                if (void 0 === n && (n = 0), void 0 === e && (e = t ? t.length : 0), void 0 === a && (a = 0), 
                void 0 === i && (i = this.length), n < 0 || e > t.length || a < 0 || i > this.length) throw new RangeError("out of range index");
                if (i <= a && e <= n) return 0;
                if (i <= a) return -1;
                if (e <= n) return 1;
                if (this === t) return 0;
                for (var r = (i >>>= 0) - (a >>>= 0), l = (e >>>= 0) - (n >>>= 0), d = Math.min(r, l), s = this.slice(a, i), p = t.slice(n, e), c = 0; c < d; ++c) if (s[c] !== p[c]) {
                    r = s[c], l = p[c];
                    break;
                }
                return r < l ? -1 : l < r ? 1 : 0;
            }, o.prototype.includes = function(t, n, e) {
                return -1 !== this.indexOf(t, n, e);
            }, o.prototype.indexOf = function(t, n, e) {
                return m(this, t, n, e, !0);
            }, o.prototype.lastIndexOf = function(t, n, e) {
                return m(this, t, n, e, !1);
            }, o.prototype.write = function(t, n, e, a) {
                if (void 0 === n) a = "utf8", e = this.length, n = 0; else if (void 0 === e && "string" == typeof n) a = n, 
                e = this.length, n = 0; else {
                    if (!isFinite(n)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    n >>>= 0, isFinite(e) ? (e >>>= 0, void 0 === a && (a = "utf8")) : (a = e, e = void 0);
                }
                var o = this.length - n;
                if ((void 0 === e || o < e) && (e = o), 0 < t.length && (e < 0 || n < 0) || n > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                a || (a = "utf8");
                for (var i, r, l, d, s, p, c, m, h, u = !1; ;) switch (a) {
                  case "hex":
                    return b(this, t, n, e);

                  case "utf8":
                  case "utf-8":
                    return m = n, h = e, S(y(t, (c = this).length - m), c, m, h);

                  case "ascii":
                    return V(this, t, n, e);

                  case "latin1":
                  case "binary":
                    return V(this, t, n, e);

                  case "base64":
                    return d = this, s = n, p = e, S(E(t), d, s, p);

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return r = n, l = e, S(function(t, n) {
                        for (var e, a, o, i = [], r = 0; r < t.length && !((n -= 2) < 0); ++r) a = (e = t.charCodeAt(r)) >> 8, 
                        o = e % 256, i.push(o), i.push(a);
                        return i;
                    }(t, (i = this).length - r), i, r, l);

                  default:
                    if (u) throw new TypeError("Unknown encoding: " + a);
                    a = ("" + a).toLowerCase(), u = !0;
                }
            }, o.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            var U = 4096;
            function R(t, n, e) {
                var a = "";
                e = Math.min(t.length, e);
                for (var o = n; o < e; ++o) a += String.fromCharCode(127 & t[o]);
                return a;
            }
            function f(t, n, e) {
                var a = "";
                e = Math.min(t.length, e);
                for (var o = n; o < e; ++o) a += String.fromCharCode(t[o]);
                return a;
            }
            function k(t, n, e) {
                var a = t.length;
                (!n || n < 0) && (n = 0), (!e || e < 0 || a < e) && (e = a);
                for (var o = "", i = n; i < e; ++i) o += M(t[i]);
                return o;
            }
            function Z(t, n, e) {
                for (var a = t.slice(n, e), o = "", i = 0; i < a.length; i += 2) o += String.fromCharCode(a[i] + 256 * a[i + 1]);
                return o;
            }
            function x(t, n, e) {
                if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                if (e < t + n) throw new RangeError("Trying to access beyond buffer length");
            }
            function F(t, n, e, a, i, r) {
                if (!o.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (i < n || n < r) throw new RangeError('"value" argument is out of bounds');
                if (e + a > t.length) throw new RangeError("Index out of range");
            }
            function W(t, n, e, a, o, i) {
                if (e + a > t.length) throw new RangeError("Index out of range");
                if (e < 0) throw new RangeError("Index out of range");
            }
            function T(t, n, e, a, o) {
                return n = +n, e >>>= 0, o || W(t, 0, e, 4), D.write(t, n, e, a, 23, 4), e + 4;
            }
            function w(t, n, e, a, o) {
                return n = +n, e >>>= 0, o || W(t, 0, e, 8), D.write(t, n, e, a, 52, 8), e + 8;
            }
            o.prototype.slice = function(t, n) {
                var e = this.length;
                (t = ~~t) < 0 ? (t += e) < 0 && (t = 0) : e < t && (t = e), (n = void 0 === n ? e : ~~n) < 0 ? (n += e) < 0 && (n = 0) : e < n && (n = e), 
                n < t && (n = t);
                var a = this.subarray(t, n);
                return a.__proto__ = o.prototype, a;
            }, o.prototype.readUIntLE = function(t, n, e) {
                t >>>= 0, n >>>= 0, e || x(t, n, this.length);
                for (var a = this[t], o = 1, i = 0; ++i < n && (o *= 256); ) a += this[t + i] * o;
                return a;
            }, o.prototype.readUIntBE = function(t, n, e) {
                t >>>= 0, n >>>= 0, e || x(t, n, this.length);
                for (var a = this[t + --n], o = 1; 0 < n && (o *= 256); ) a += this[t + --n] * o;
                return a;
            }, o.prototype.readUInt8 = function(t, n) {
                return t >>>= 0, n || x(t, 1, this.length), this[t];
            }, o.prototype.readUInt16LE = function(t, n) {
                return t >>>= 0, n || x(t, 2, this.length), this[t] | this[t + 1] << 8;
            }, o.prototype.readUInt16BE = function(t, n) {
                return t >>>= 0, n || x(t, 2, this.length), this[t] << 8 | this[t + 1];
            }, o.prototype.readUInt32LE = function(t, n) {
                return t >>>= 0, n || x(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
            }, o.prototype.readUInt32BE = function(t, n) {
                return t >>>= 0, n || x(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
            }, o.prototype.readIntLE = function(t, n, e) {
                t >>>= 0, n >>>= 0, e || x(t, n, this.length);
                for (var a = this[t], o = 1, i = 0; ++i < n && (o *= 256); ) a += this[t + i] * o;
                return (o *= 128) <= a && (a -= Math.pow(2, 8 * n)), a;
            }, o.prototype.readIntBE = function(t, n, e) {
                t >>>= 0, n >>>= 0, e || x(t, n, this.length);
                for (var a = n, o = 1, i = this[t + --a]; 0 < a && (o *= 256); ) i += this[t + --a] * o;
                return (o *= 128) <= i && (i -= Math.pow(2, 8 * n)), i;
            }, o.prototype.readInt8 = function(t, n) {
                return t >>>= 0, n || x(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
            }, o.prototype.readInt16LE = function(t, n) {
                t >>>= 0, n || x(t, 2, this.length);
                var e = this[t] | this[t + 1] << 8;
                return 32768 & e ? 4294901760 | e : e;
            }, o.prototype.readInt16BE = function(t, n) {
                t >>>= 0, n || x(t, 2, this.length);
                var e = this[t + 1] | this[t] << 8;
                return 32768 & e ? 4294901760 | e : e;
            }, o.prototype.readInt32LE = function(t, n) {
                return t >>>= 0, n || x(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
            }, o.prototype.readInt32BE = function(t, n) {
                return t >>>= 0, n || x(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
            }, o.prototype.readFloatLE = function(t, n) {
                return t >>>= 0, n || x(t, 4, this.length), D.read(this, t, !0, 23, 4);
            }, o.prototype.readFloatBE = function(t, n) {
                return t >>>= 0, n || x(t, 4, this.length), D.read(this, t, !1, 23, 4);
            }, o.prototype.readDoubleLE = function(t, n) {
                return t >>>= 0, n || x(t, 8, this.length), D.read(this, t, !0, 52, 8);
            }, o.prototype.readDoubleBE = function(t, n) {
                return t >>>= 0, n || x(t, 8, this.length), D.read(this, t, !1, 52, 8);
            }, o.prototype.writeUIntLE = function(t, n, e, a) {
                t = +t, n >>>= 0, e >>>= 0, a || F(this, t, n, e, Math.pow(2, 8 * e) - 1, 0);
                var o = 1, i = 0;
                for (this[n] = 255 & t; ++i < e && (o *= 256); ) this[n + i] = t / o & 255;
                return n + e;
            }, o.prototype.writeUIntBE = function(t, n, e, a) {
                t = +t, n >>>= 0, e >>>= 0, a || F(this, t, n, e, Math.pow(2, 8 * e) - 1, 0);
                var o = e - 1, i = 1;
                for (this[n + o] = 255 & t; 0 <= --o && (i *= 256); ) this[n + o] = t / i & 255;
                return n + e;
            }, o.prototype.writeUInt8 = function(t, n, e) {
                return t = +t, n >>>= 0, e || F(this, t, n, 1, 255, 0), this[n] = 255 & t, n + 1;
            }, o.prototype.writeUInt16LE = function(t, n, e) {
                return t = +t, n >>>= 0, e || F(this, t, n, 2, 65535, 0), this[n] = 255 & t, this[n + 1] = t >>> 8, 
                n + 2;
            }, o.prototype.writeUInt16BE = function(t, n, e) {
                return t = +t, n >>>= 0, e || F(this, t, n, 2, 65535, 0), this[n] = t >>> 8, this[n + 1] = 255 & t, 
                n + 2;
            }, o.prototype.writeUInt32LE = function(t, n, e) {
                return t = +t, n >>>= 0, e || F(this, t, n, 4, 4294967295, 0), this[n + 3] = t >>> 24, 
                this[n + 2] = t >>> 16, this[n + 1] = t >>> 8, this[n] = 255 & t, n + 4;
            }, o.prototype.writeUInt32BE = function(t, n, e) {
                return t = +t, n >>>= 0, e || F(this, t, n, 4, 4294967295, 0), this[n] = t >>> 24, 
                this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t, n + 4;
            }, o.prototype.writeIntLE = function(t, n, e, a) {
                if (t = +t, n >>>= 0, !a) {
                    var o = Math.pow(2, 8 * e - 1);
                    F(this, t, n, e, o - 1, -o);
                }
                var i = 0, r = 1, l = 0;
                for (this[n] = 255 & t; ++i < e && (r *= 256); ) t < 0 && 0 === l && 0 !== this[n + i - 1] && (l = 1), 
                this[n + i] = (t / r >> 0) - l & 255;
                return n + e;
            }, o.prototype.writeIntBE = function(t, n, e, a) {
                if (t = +t, n >>>= 0, !a) {
                    var o = Math.pow(2, 8 * e - 1);
                    F(this, t, n, e, o - 1, -o);
                }
                var i = e - 1, r = 1, l = 0;
                for (this[n + i] = 255 & t; 0 <= --i && (r *= 256); ) t < 0 && 0 === l && 0 !== this[n + i + 1] && (l = 1), 
                this[n + i] = (t / r >> 0) - l & 255;
                return n + e;
            }, o.prototype.writeInt8 = function(t, n, e) {
                return t = +t, n >>>= 0, e || F(this, t, n, 1, 127, -128), t < 0 && (t = 255 + t + 1), 
                this[n] = 255 & t, n + 1;
            }, o.prototype.writeInt16LE = function(t, n, e) {
                return t = +t, n >>>= 0, e || F(this, t, n, 2, 32767, -32768), this[n] = 255 & t, 
                this[n + 1] = t >>> 8, n + 2;
            }, o.prototype.writeInt16BE = function(t, n, e) {
                return t = +t, n >>>= 0, e || F(this, t, n, 2, 32767, -32768), this[n] = t >>> 8, 
                this[n + 1] = 255 & t, n + 2;
            }, o.prototype.writeInt32LE = function(t, n, e) {
                return t = +t, n >>>= 0, e || F(this, t, n, 4, 2147483647, -2147483648), this[n] = 255 & t, 
                this[n + 1] = t >>> 8, this[n + 2] = t >>> 16, this[n + 3] = t >>> 24, n + 4;
            }, o.prototype.writeInt32BE = function(t, n, e) {
                return t = +t, n >>>= 0, e || F(this, t, n, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), 
                this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t, 
                n + 4;
            }, o.prototype.writeFloatLE = function(t, n, e) {
                return T(this, t, n, !0, e);
            }, o.prototype.writeFloatBE = function(t, n, e) {
                return T(this, t, n, !1, e);
            }, o.prototype.writeDoubleLE = function(t, n, e) {
                return w(this, t, n, !0, e);
            }, o.prototype.writeDoubleBE = function(t, n, e) {
                return w(this, t, n, !1, e);
            }, o.prototype.copy = function(t, n, e, a) {
                if (!o.isBuffer(t)) throw new TypeError("argument should be a Buffer");
                if (e || (e = 0), a || 0 === a || (a = this.length), n >= t.length && (n = t.length), 
                n || (n = 0), 0 < a && a < e && (a = e), a === e) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (n < 0) throw new RangeError("targetStart out of bounds");
                if (e < 0 || e >= this.length) throw new RangeError("Index out of range");
                if (a < 0) throw new RangeError("sourceEnd out of bounds");
                a > this.length && (a = this.length), t.length - n < a - e && (a = t.length - n + e);
                var i = a - e;
                if (this === t && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(n, e, a); else if (this === t && e < n && n < a) for (var r = i - 1; 0 <= r; --r) t[r + n] = this[r + e]; else Uint8Array.prototype.set.call(t, this.subarray(e, a), n);
                return i;
            }, o.prototype.fill = function(t, n, e, a) {
                if ("string" == typeof t) {
                    if ("string" == typeof n ? (a = n, n = 0, e = this.length) : "string" == typeof e && (a = e, 
                    e = this.length), void 0 !== a && "string" != typeof a) throw new TypeError("encoding must be a string");
                    if ("string" == typeof a && !o.isEncoding(a)) throw new TypeError("Unknown encoding: " + a);
                    if (1 === t.length) {
                        var i = t.charCodeAt(0);
                        ("utf8" === a && i < 128 || "latin1" === a) && (t = i);
                    }
                } else "number" == typeof t && (t &= 255);
                if (n < 0 || this.length < n || this.length < e) throw new RangeError("Out of range index");
                if (e <= n) return this;
                var r;
                if (n >>>= 0, e = void 0 === e ? this.length : e >>> 0, t || (t = 0), "number" == typeof t) for (r = n; r < e; ++r) this[r] = t; else {
                    var l = o.isBuffer(t) ? t : o.from(t, a), d = l.length;
                    if (0 === d) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                    for (r = 0; r < e - n; ++r) this[r + n] = l[r % d];
                }
                return this;
            };
            var g = /[^+/0-9A-Za-z-_]/g;
            function M(t) {
                return t < 16 ? "0" + t.toString(16) : t.toString(16);
            }
            function y(t, n) {
                var e;
                n = n || 1 / 0;
                for (var a = t.length, o = null, i = [], r = 0; r < a; ++r) {
                    if (55295 < (e = t.charCodeAt(r)) && e < 57344) {
                        if (!o) {
                            if (56319 < e) {
                                -1 < (n -= 3) && i.push(239, 191, 189);
                                continue;
                            }
                            if (r + 1 === a) {
                                -1 < (n -= 3) && i.push(239, 191, 189);
                                continue;
                            }
                            o = e;
                            continue;
                        }
                        if (e < 56320) {
                            -1 < (n -= 3) && i.push(239, 191, 189), o = e;
                            continue;
                        }
                        e = 65536 + (o - 55296 << 10 | e - 56320);
                    } else o && -1 < (n -= 3) && i.push(239, 191, 189);
                    if (o = null, e < 128) {
                        if ((n -= 1) < 0) break;
                        i.push(e);
                    } else if (e < 2048) {
                        if ((n -= 2) < 0) break;
                        i.push(e >> 6 | 192, 63 & e | 128);
                    } else if (e < 65536) {
                        if ((n -= 3) < 0) break;
                        i.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128);
                    } else {
                        if (!(e < 1114112)) throw new Error("Invalid code point");
                        if ((n -= 4) < 0) break;
                        i.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128);
                    }
                }
                return i;
            }
            function E(t) {
                return X.toByteArray(function(t) {
                    if ((t = (t = t.split("=")[0]).trim().replace(g, "")).length < 2) return "";
                    for (;t.length % 4 != 0; ) t += "=";
                    return t;
                }(t));
            }
            function S(t, n, e, a) {
                for (var o = 0; o < a && !(o + e >= n.length || o >= t.length); ++o) n[o + e] = t[o];
                return o;
            }
            function v(t, n) {
                return t instanceof n || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === n.name;
            }
            function Q(t) {
                return t != t;
            }
        }), H = B.Buffer, L = (B.SlowBuffer, B.INSPECT_MAX_BYTES, B.kMaxLength, function(t, n) {
            for (var e = Math.min(1024, t.length), a = "".concat(n, "::"), o = "::".concat(n), i = 0; i > 0 - t.length; ) {
                var r = t.slice(i || 0 - e, t.length).toString("utf8");
                if (r.includes(a)) {
                    var l = r.indexOf(a);
                    return r.substring(l + a.length, r.length - o.length);
                }
                i -= e;
            }
            return null;
        }), O = function(t) {
            if (!(t instanceof H)) throw Error("Expected a Buffer, but received ".concat(typeof t));
            if (t.length < 9) return null;
            var n = t.slice(t.length - 9, t.length).toString("utf8");
            if ("::equatio" === n) return L(t, "equatio");
            if ("::desmos" === (n = t.slice(t.length - 8, t.length).toString("utf8"))) {
                var e = L(t, "desmos");
                return null == e ? null : {
                    type: "desmos",
                    state: JSON.parse(e)
                };
            }
            if ("::mathspace" !== (n = t.slice(t.length - 11, t.length).toString("utf8"))) return null;
            var a = L(t, "mathspace");
            return null == a ? null : {
                type: "mathspace",
                platformIntegrationId: a
            };
        }, I = function(t) {
            return new Promise(function(n, e) {
                window.webkitResolveLocalFileSystemURL(t, function(t) {
                    t.file(function(t) {
                        var a = new FileReader();
                        a.onload = function() {
                            var t = a.result;
                            if (null !== t) {
                                var o = H.from(t), i = O(o);
                                n(null !== i ? i : null);
                            } else e(Error("Failed to read local file system URL"));
                        }, a.onerror = function(t) {
                            e(t);
                        }, a.readAsArrayBuffer(t);
                    });
                });
            });
        }, q = [ "equatio-api.texthelp.com", "equatio-api-dev.texthelp.com" ], K = function(t) {
            var n = t.toString(), a = new F(n);
            if (!q.some(function(t) {
                return t === a.host;
            })) return null;
            if (a.pathname.startsWith("/png/") || a.pathname.startsWith("/svg/")) {
                var o = e(a.pathname.split("/").splice(2, 1), 1)[0];
                return decodeURIComponent(o);
            }
            return null;
        }, _ = function(t) {
            var n = K(t);
            return null !== n ? Promise.resolve(n) : t && 0 <= t.indexOf("filesystem:") ? I(t) : fetch(t).then(function(t) {
                return t.arrayBuffer();
            }).then(function(t) {
                var n = H.from(t);
                return O(n);
            });
        };
        n.getLatexFromBuffer = O, n.getLatexFromKnownUrl = K, n.getLatexFromImageUrl = _;
    }).call(this, e(2));
}, function(t, n) {
    t.exports = "data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxOCAxOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTggMTg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggc3R5bGU9ImZpbGw6IzAwQjdGRjsiIGQ9Ik0xOCwxNlYyYzAtMS4xLTAuOS0yLTItMkgyQzAuOSwwLDAsMC45LDAsMnYxNGMwLDEuMSwwLjksMiwyLDJoMTRDMTcuMSwxOCwxOCwxNy4xLDE4LDE2eiIvPgo8ZyBpZD0icmVtb3ZlXzJfIj4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMTEuMSw5bDMuOC0zLjhjMC4xLTAuMSwwLjEtMC40LDAtMC41bC0xLjYtMS42Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBMOSw2LjlMNS4yLDMuMQoJCUM1LjEsMyw0LjgsMyw0LjcsMy4xTDMuMSw0LjdDMyw0LjgsMyw1LjEsMy4xLDUuMkw2LjksOWwtMy44LDMuOGMtMC4xLDAuMS0wLjEsMC40LDAsMC41bDEuNiwxLjZjMC4xLDAuMSwwLjQsMC4xLDAuNSwwTDksMTEuMQoJCWwzLjgsMy44YzAuMSwwLjEsMC40LDAuMSwwLjUsMGwxLjYtMS42YzAuMS0wLjEsMC4xLTAuNCwwLTAuNUwxMS4xLDl6Ii8+CjwvZz4KPC9zdmc+Cg==";
}, function(t, n, e) {
    "use strict";
    t.exports = function(t, n) {
        if (n = n.split(":")[0], !(t = +t)) return !1;
        switch (n) {
          case "http":
          case "ws":
            return 80 !== t;

          case "https":
          case "wss":
            return 443 !== t;

          case "ftp":
            return 21 !== t;

          case "gopher":
            return 70 !== t;

          case "file":
            return !1;
        }
        return 0 !== t;
    };
}, function(t, n, e) {
    "use strict";
    var a = Object.prototype.hasOwnProperty;
    function o(t) {
        return decodeURIComponent(t.replace(/\+/g, " "));
    }
    function i(t) {
        for (var n, e = /([^=?&]+)=?([^&]*)/g, a = {}; n = e.exec(t); ) {
            var i = o(n[1]), r = o(n[2]);
            i in a || (a[i] = r);
        }
        return a;
    }
    function r(t, n) {
        n = n || "";
        var e = [];
        for (var o in "string" != typeof n && (n = "?"), t) a.call(t, o) && e.push(encodeURIComponent(o) + "=" + encodeURIComponent(t[o]));
        return e.length ? n + e.join("&") : "";
    }
    n.stringify = r, n.parse = i;
}, function(t, n, e) {
    var a, o = e(14);
    "string" == typeof o && (o = [ [ t.i, o, "" ] ]);
    var i = {
        hmr: !0
    };
    i.transform = a, i.insertInto = void 0;
    e(4)(o, i);
    o.locals && (t.exports = o.locals);
}, function(t, n, e) {
    (t.exports = e(3)(void 0)).push([ t.i, "button[data-balloon]{overflow:visible}[data-balloon]{position:relative}[data-balloon]:after,[data-balloon]:before{-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";filter:alpha(opacity=0);-khtml-opacity:0;-moz-opacity:0;opacity:0;pointer-events:none;-webkit-transition:all .18s ease-out .18s;transition:all .18s ease-out .18s;bottom:100%;left:50%;position:absolute;z-index:10;-webkit-transform:translate(-50%,10px);-ms-transform:translate(-50%,10px);transform:translate(-50%,10px);-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top}[data-balloon]:after{background:rgba(17,17,17,.9);border-radius:4px;color:#fff;content:attr(data-balloon);font-size:12px;padding:.5em 1em;white-space:nowrap;margin-bottom:11px}[data-balloon]:before{background:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%280%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E') no-repeat;background-size:100% auto;height:6px;width:18px;content:\"\";margin-bottom:5px}[data-balloon]:hover:after,[data-balloon]:hover:before,[data-balloon][data-balloon-visible]:after,[data-balloon][data-balloon-visible]:before{-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";filter:alpha(opacity=100);-khtml-opacity:1;-moz-opacity:1;opacity:1;pointer-events:auto;-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0)}[data-balloon].font-awesome:after{font-family:FontAwesome}[data-balloon][data-balloon-break]:after{white-space:pre}[data-balloon-pos=down]:after,[data-balloon-pos=down]:before{bottom:auto;left:50%;top:100%;-webkit-transform:translate(-50%,-10px);-ms-transform:translate(-50%,-10px);transform:translate(-50%,-10px)}[data-balloon-pos=down]:after{margin-top:11px}[data-balloon-pos=down]:before{background:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%28180%2018%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E') no-repeat;background-size:100% auto;height:6px;width:18px;margin-top:5px;margin-bottom:0}[data-balloon-pos=down]:hover:after,[data-balloon-pos=down]:hover:before,[data-balloon-pos=down][data-balloon-visible]:after,[data-balloon-pos=down][data-balloon-visible]:before{-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0)}[data-balloon-pos=left]:after,[data-balloon-pos=left]:before{bottom:auto;left:auto;right:100%;top:50%;-webkit-transform:translate(10px,-50%);-ms-transform:translate(10px,-50%);transform:translate(10px,-50%)}[data-balloon-pos=left]:after{margin-right:11px}[data-balloon-pos=left]:before{background:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%28-90%2018%2018%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E') no-repeat;background-size:100% auto;height:18px;width:6px;margin-right:5px;margin-bottom:0}[data-balloon-pos=left]:hover:after,[data-balloon-pos=left]:hover:before,[data-balloon-pos=left][data-balloon-visible]:after,[data-balloon-pos=left][data-balloon-visible]:before{-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%)}[data-balloon-pos=right]:after,[data-balloon-pos=right]:before{bottom:auto;left:100%;top:50%;-webkit-transform:translate(-10px,-50%);-ms-transform:translate(-10px,-50%);transform:translate(-10px,-50%)}[data-balloon-pos=right]:after{margin-left:11px}[data-balloon-pos=right]:before{background:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%2890%206%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E') no-repeat;background-size:100% auto;height:18px;width:6px;margin-bottom:0;margin-left:5px}[data-balloon-pos=right]:hover:after,[data-balloon-pos=right]:hover:before,[data-balloon-pos=right][data-balloon-visible]:after,[data-balloon-pos=right][data-balloon-visible]:before{-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%)}[data-balloon-length]:after{white-space:normal}[data-balloon-length=small]:after{width:80px}[data-balloon-length=medium]:after{width:150px}[data-balloon-length=large]:after{width:260px}[data-balloon-length=xlarge]:after{width:90vw}@media screen and (min-width:768px){[data-balloon-length=xlarge]:after{width:380px}}[data-balloon-length=fit]:after{width:100%}\n.equatio-traffic-light .equatio-palette-wrapper {\n  margin: 0; }\n\n.equatio-palette-wrapper {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  -webkit-justify-content: flex-end;\n  -moz-justify-content: flex-end;\n  justify-content: flex-end;\n  margin: 5px 0; }\n\n.equatio-palette-bar {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center; }\n\n.equatio-palette-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -moz-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  background-color: white;\n  width: 32px;\n  height: 32px;\n  margin-right: 5px;\n  border: 1px solid #FFF;\n  cursor: pointer; }\n  .equatio-palette-button:hover {\n    border: 1px solid #d1d1d1; }\n  .equatio-palette-button.wide {\n    width: auto; }\n\n.equatio-palette-popup {\n  box-shadow: rgba(70, 70, 70, 0.5) 0 0 5px 1px;\n  background: #FFF;\n  border: 0;\n  padding: 4px;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  -webkit-justify-content: flex-start;\n  -moz-justify-content: flex-start;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  max-width: 184px;\n  position: fixed;\n  z-index: 10000; }\n  .equatio-palette-popup.equatio-palette-popup--hidden {\n    display: none; }\n  .equatio-palette-popup.equatio-palette-popup--small {\n    max-width: 134px; }\n    .equatio-palette-popup.equatio-palette-popup--small .equatio-palette-popup-button {\n      flex-basis: 19%; }\n\n.equatio-palette-popup-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  background: #FFF;\n  padding: 2px;\n  border: 1px solid #FFF;\n  cursor: pointer;\n  flex-basis: 16.5%; }\n  .equatio-palette-popup-button:hover {\n    border: 1px solid #d1d1d1; }\n\n.equatio-graph-freemium-text {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  color: #666A70;\n  font-size: 0.95em;\n  margin-top: -20px;\n  -webkit-font-smoothing: antialiased; }\n  .equatio-graph-freemium-text ul {\n    font-weight: 600; }\n\n.react-resizable {\n  position: relative;\n}\n.react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  bottom: 0;\n  right: 0;\n  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+');\n  background-position: bottom right;\n  padding: 0 3px 3px 0;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  box-sizing: border-box;\n  cursor: se-resize;\n}\n\n.equatio-toolbar {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  background: #F2F2F2;\n  border-top: 1px solid #D3D3D3;\n  height: 53px;\n  width: 100%; }\n\n.equatio-toolbar--small {\n  width: auto; }\n\n/* stylelint-disable */\n/* stylelint-enable */\n.equatio-toolbar-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  height: 53px;\n  width: 53px;\n  cursor: pointer;\n  outline: 0; }\n  .equatio-toolbar-button:focus svg {\n    outline: -webkit-focus-ring-color auto 5px; }\n  .equatio-toolbar-button:hover, .equatio-toolbar-button:active {\n    background-color: #D8D8D8; }\n  .equatio-toolbar-button[disabled] {\n    opacity: 0.3;\n    cursor: default; }\n\n.equatio-toolbar-button--selected {\n  border-top: 4px solid #00B7FF; }\n  .equatio-toolbar-button--selected.equatio-toolbar-button--with-arrow {\n    background-position-y: 2px; }\n  .equatio-toolbar-button--selected .equatio-toolbar-button__icon {\n    margin-top: -4px; }\n\n.equatio-toolbar-button__icon {\n  color: #494949; }\n\n.equatio-toolbar-button--with-arrow {\n  /* stylelint-disable-next-line */\n  background: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='5' viewBox='0 0 3.9 3.4'>%3Cpolygon style='fill:%23494949;' points='2,0 3.9,3.4 0,3.4 '/%3E</svg>\") 50% 6px no-repeat;\n  box-sizing: content-box;\n  margin-top: 4px; }\n\n.equatio-logo-button {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  font-family: Roboto, Arial, sans-serif;\n  position: relative;\n  background: #00B7FF;\n  padding: 0 14px;\n  height: 53px;\n  cursor: pointer;\n  border: 0;\n  width: 150px;\n  color: #FFF;\n  font-weight: 500;\n  text-transform: uppercase;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.9em;\n  border-radius: 0; }\n  .equatio-logo-button:hover {\n    -webkit-filter: brightness(105%); }\n\n@keyframes logo-button-expiring {\n  10% {\n    background: #FFCE00; }\n  45% {\n    background: #FFCE00; }\n  55% {\n    background: #00B7FF; }\n  100% {\n    background: #00B7FF; } }\n\n@keyframes logo-button-expiring-hover {\n  10% {\n    background: #ffd833; }\n  45% {\n    background: #ffd833; }\n  55% {\n    background: #33c5ff; }\n  100% {\n    background: #33c5ff; } }\n\n@keyframes logo-button-image-expiring {\n  10% {\n    opacity: 0; }\n  45% {\n    opacity: 0; }\n  55% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n\n@keyframes logo-button-image-text {\n  10% {\n    opacity: 1; }\n  45% {\n    opacity: 1; }\n  55% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n.equatio-logo-button--expiring {\n  animation: logo-button-expiring 20s infinite;\n  animation-delay: 5s; }\n  .equatio-logo-button--expiring .equatio-logo-button__logo {\n    animation: logo-button-image-expiring 20s infinite;\n    animation-delay: 5s; }\n  .equatio-logo-button--expiring:before {\n    animation: logo-button-image-text 20s infinite;\n    animation-delay: 5s;\n    position: absolute;\n    content: attr(data-message);\n    display: block;\n    opacity: 0;\n    left: 0;\n    right: 0;\n    text-align: center;\n    margin: auto 22px auto 12px; }\n\n.equatio-logo-button__logo {\n  color: #FFF;\n  height: 25px;\n  pointer-events: none; }\n\n.equatio-logo-button__chevron {\n  color: white;\n  height: 5px;\n  margin-left: 5px;\n  pointer-events: none;\n  transition: transform 0.3s ease-in-out; }\n\n.equatio-logo-button__chevron--expanded {\n  transform: rotate(180deg); }\n\n.equatio-toolbar__buttonset {\n  display: block;\n  border: 0;\n  padding: 0;\n  margin: 0; }\n\n.equatio-toolbar__buttonset__legend {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  font-family: Roboto, Arial, sans-serif;\n  height: 53px;\n  padding: 0;\n  position: absolute;\n  width: 90px;\n  color: #484A4F; }\n\n.equatio-toolbar__buttonset__list {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  height: 53px;\n  margin: 0 20px; }\n\n.equatio-toolbar__buttonset__list--with-legend {\n  margin: 0 0 0 90px; }\n\n.equatio-toolbar__buttonset__list__item {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center; }\n\n/* stylelint-disable */\n/* stylelint-enable */\n.equatio-flyout-menu {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  background: #F2F2F2;\n  max-width: 280px;\n  padding: 10px 0;\n  visibility: visible;\n  -webkit-transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;\n  -moz-transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;\n  -ms-transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;\n  -o-transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out; }\n\n.equatio-flyout-menu--hidden {\n  -webkit-transform: translateY(100%);\n  -moz-transform: translateY(100%);\n  -ms-transform: translateY(100%);\n  -o-transform: translateY(100%);\n  transform: translateY(100%);\n  visibility: hidden; }\n\n.equatio-flyout-menu__link {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  font-family: \"Open Sans\", Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  display: block;\n  width: 100%;\n  text-align: left;\n  font-size: 1em;\n  padding: 10px;\n  cursor: pointer;\n  box-sizing: border-box;\n  /* stylelint-disable */\n  color: #494949 !important;\n  text-decoration: none !important;\n  /* stylelint-enable */ }\n  .equatio-flyout-menu__link:hover {\n    background-color: #00B7FF;\n    color: #FFF !important; }\n\n.equatio-flyout-menu__link--upgrade {\n  /* stylelint-disable */\n  background-color: #71C14C !important;\n  color: #FFF !important;\n  font-weight: 600;\n  /* stylelint-enable */ }\n  .equatio-flyout-menu__link--upgrade:hover {\n    background-color: #64b53f !important; }\n\n.equatio-flyout-menu__link--with-arrow {\n  /* stylelint-disable-next-line */\n  background: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='9' viewBox='0 0 6.4 7.4'>%3Cpolygon style='fill:%23494949;' points='6.5,3.7 0,7.5 0,0 '/%3E</svg>\") no-repeat calc(100% - 10px) 50%; }\n  .equatio-flyout-menu__link--with-arrow:hover {\n    /* stylelint-disable-next-line */\n    background-image: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='9' viewBox='0 0 6.4 7.4'>%3Cpolygon style='fill:%23FFF;' points='6.5,3.7 0,7.5 0,0 '/%3E</svg>\"); }\n\n/* stylelint-disable */\n/* stylelint-enable */\n.equatio-color-picker-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  /* stylelint-disable-next-line */\n  background: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='22' viewBox='0 0 14 13.2'>%3Cpath style='fill:%23494949;' d='M10.5,7l-7-7L2.5,1.1L4.3,3l-4,4c-0.5,0.5-0.5,1.2,0,1.6l4.3,4.3c0.2,0.2,0.5,0.3,0.8,0.3 c0.3,0,0.6-0.1,0.8-0.3l4.3-4.3C11,8.1,11,7.4,10.5,7z M1.7,7.8l3.7-3.7l3.7,3.7H1.7z M12.4,8.9c0,0-1.6,1.7-1.6,2.7 c0,0.9,0.7,1.6,1.6,1.6c0.9,0,1.6-0.7,1.6-1.6C14,10.6,12.4,8.9,12.4,8.9z'/%3E</svg>\") 50% 50% no-repeat;\n  background-size: 22px;\n  width: 32px;\n  height: 32px;\n  margin: 0 5px;\n  cursor: pointer; }\n  .equatio-color-picker-button:hover {\n    outline: 0.5px solid #00B7FF; }\n  .equatio-color-picker-button[disabled] {\n    opacity: 0.3;\n    cursor: default;\n    filter: grayscale(100%); }\n\n.equatio-color-picker-button--white {\n  /* stylelint-disable-next-line */\n  background-image: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='22' viewBox='0 0 14 13.2'>%3Cpath style='fill:%23FFF;' d='M10.5,7l-7-7L2.5,1.1L4.3,3l-4,4c-0.5,0.5-0.5,1.2,0,1.6l4.3,4.3c0.2,0.2,0.5,0.3,0.8,0.3 c0.3,0,0.6-0.1,0.8-0.3l4.3-4.3C11,8.1,11,7.4,10.5,7z M1.7,7.8l3.7-3.7l3.7,3.7H1.7z M12.4,8.9c0,0-1.6,1.7-1.6,2.7 c0,0.9,0.7,1.6,1.6,1.6c0.9,0,1.6-0.7,1.6-1.6C14,10.6,12.4,8.9,12.4,8.9z'/%3E</svg>\"); }\n\n.equatio-toolbar-flyout-container {\n  position: relative; }\n\n.equatio-toolbar-flyout {\n  position: absolute;\n  opacity: 0;\n  -webkit-transition: opacity 0.15s ease-in-out, transform 0.3s ease-in-out;\n  -moz-transition: opacity 0.15s ease-in-out, transform 0.3s ease-in-out;\n  -ms-transition: opacity 0.15s ease-in-out, transform 0.3s ease-in-out;\n  -o-transition: opacity 0.15s ease-in-out, transform 0.3s ease-in-out;\n  transition: opacity 0.15s ease-in-out, transform 0.3s ease-in-out;\n  background: #F2F2F2;\n  z-index: 4;\n  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2); }\n  .equatio-toolbar-flyout.equatio-toolbar-flyout--shown {\n    opacity: 1;\n    pointer-events: all;\n    transform: translateY(-100%); }\n  .equatio-toolbar-flyout .equatio-toolbar__buttonset__list {\n    margin: 0;\n    width: 159px;\n    flex-wrap: wrap;\n    height: auto; }\n    .equatio-toolbar-flyout .equatio-toolbar__buttonset__list.equatio-toolbar__buttonset__list--vertical {\n      max-height: 200px;\n      -webkit-box-direction: normal;\n      -webkit-box-orient: vertical;\n      -webkit-flex-direction: column;\n      -moz-flex-direction: column;\n      -ms-flex-direction: column;\n      flex-direction: column; }\n\n.equatio-toolbar-flyout-list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n\n.equatio-toolbar-flyout-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0; }\n\n.equatio-flyout-menu-vertical {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  min-width: 200px;\n  height: 100px;\n  overflow-y: auto; }\n\n.equatio-flyout-menu-vertical-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  font-family: Roboto, Arial, sans-serif;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  width: 100%;\n  cursor: pointer;\n  text-align: left;\n  font-size: 0.8em;\n  font-weight: 500; }\n  .equatio-flyout-menu-vertical-button:hover {\n    background-color: #D8D8D8; }\n\n.equatio-flyout-menu-vertical-button__icon {\n  height: 30px; }\n\n.equatio-flyout-search {\n  display: block;\n  width: calc(100% - 27px);\n  box-sizing: border-box;\n  margin: 5px;\n  font-size: 0.8em;\n  background: transparent;\n  border: 1px solid #C3C3C3;\n  padding: 5px;\n  font-style: italic;\n  color: #000; }\n\n.equatio-flyout-search--has-value {\n  font-style: normal; }\n\n.equatio-flyout-search-close {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  position: absolute;\n  display: block;\n  height: 12px;\n  top: 12px;\n  right: 5px; }\n\n.equatio-copy-wrapper {\n  position: relative; }\n\n.equatio-copy-wrapper-menu {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  background: #FFF;\n  min-width: 130px;\n  border: 1px solid #EFEFEF;\n  box-shadow: 0 0 10px 0 rgba(187, 187, 187, 0.4);\n  position: absolute;\n  bottom: 38px;\n  right: 0;\n  transform: scaleX(0) scaleY(0);\n  transform-origin: bottom right;\n  transition: visibility 0.2s ease-in-out, transform 0.2s ease-in-out;\n  pointer-events: none;\n  visibility: hidden; }\n  .equatio-copy-wrapper-menu.equatio-copy-wrapper-menu--shown {\n    pointer-events: all;\n    visibility: visible;\n    transform: scaleX(1) scaleY(1); }\n\n.equatio-copy-wrapper-menu-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  font-family: \"Open Sans\", Arial, sans-serif;\n  text-align: left;\n  display: block;\n  width: 100%;\n  -webkit-font-smoothing: antialiased;\n  color: #494949;\n  padding: 10px;\n  font-size: 0.9em;\n  cursor: pointer; }\n  .equatio-copy-wrapper-menu-button:hover, .equatio-copy-wrapper-menu-button:focus {\n    background: #F4FBFE;\n    color: #000; }\n\n.equatio-buttonset {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  margin: 0 20px; }\n\n.equatio-buttonset.equatio-buttonset--no-margin {\n  margin: 0; }\n\n.equatio-buttonset__item {\n  margin: 0 10px; }\n  .equatio-buttonset__item:last-child {\n    margin-right: 0; }\n\n.equatio-buttonset__item--full-width {\n  width: 100%; }\n\n.equatio-buttonset--right,\n.equatio-buttonset--vertical--right {\n  -webkit-box-direction: normal;\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -moz-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  -webkit-justify-content: flex-end;\n  -moz-justify-content: flex-end;\n  justify-content: flex-end; }\n\n.equatio-buttonset--center,\n.equatio-buttonset--vertical--center {\n  -webkit-box-direction: normal;\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -moz-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center; }\n\n.equatio-buttonset--vertical {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  margin: 20px 0; }\n  .equatio-buttonset--vertical .equatio-buttonset__item {\n    margin: 10px 0; }\n\n/* stylelint-disable */\n/* stylelint-enable */\n.equatio-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  font-family: Roboto, Arial, sans-serif;\n  background: #00B7FF;\n  color: #FFF;\n  text-transform: uppercase;\n  cursor: pointer;\n  padding: 7px 10px;\n  font-size: 0.85em;\n  margin: 0 10px;\n  min-width: 165px;\n  border-radius: 3px;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 600;\n  -webkit-box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n  -moz-box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n  box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n  letter-spacing: -0.2px; }\n  .equatio-button:hover, .equatio-button:active {\n    background: #33c5ff; }\n  .equatio-button:first-child {\n    margin-left: 0; }\n  .equatio-button:last-child {\n    margin-right: 0; }\n  .equatio-button[disabled] {\n    background: rgba(70, 70, 70, 0.23);\n    cursor: default; }\n\n.equatio-button--white {\n  background: #FFF;\n  color: #00B7FF; }\n  .equatio-button--white:hover {\n    background: #e6f8ff; }\n\n.equatio-button--gold {\n  background: #E5BD13;\n  color: #FFF;\n  font-weight: 500; }\n  .equatio-button--gold:hover {\n    background: #ecc41b; }\n\n.equatio-button--single {\n  margin: 0; }\n\n.equatio-button--small {\n  min-width: 0; }\n\n@media all and (max-width: 945px) {\n  .equatio-toolbar .equatio-button-edit,\n  .equatio-toolbar .equatio-button-insert {\n    width: 32px;\n    min-width: 0;\n    padding: 0;\n    text-indent: -9999px;\n    overflow: hidden;\n    height: 32px;\n    background-position: 50% 50%;\n    background-repeat: no-repeat; }\n  .equatio-toolbar .equatio-button-edit {\n    /* stylelint-disable-next-line */\n    background-image: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='20px' viewBox='0 0 24 24'>%3Cpath d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' fill='%23FFF' /%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E</svg>\"); }\n  .equatio-toolbar .equatio-button-insert {\n    /* stylelint-disable-next-line */\n    background-image: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='20px' viewBox='0 0 24 24'>%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' fill='%23FFF' /%3E</svg>\"); } }\n\n.equatio-button.equatio-copy-button {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  text-transform: none;\n  padding: 0;\n  box-sizing: border-box;\n  height: 32px;\n  width: 32px;\n  -webkit-font-smoothing: antialiased; }\n\n.equatio-copy-button__icon {\n  height: 20px; }\n\n.equatio-form--center {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center; }\n\n.equatio-logo--large {\n  color: #00B7FF;\n  height: 55px; }\n\n.equatio-link-button {\n  font-family: Roboto, Arial, sans-serif;\n  color: #494949;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased; }\n  .equatio-link-button:hover {\n    text-decoration: underline; }\n  .equatio-link-button.equatio-link-button--with-underline {\n    text-decoration: underline; }\n\n.equatio-link-button--small {\n  font-size: 0.8em; }\n\n/* stylelint-disable */\n/* stylelint-enable */\n.equatio-select {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  /* stylelint-disable-next-line */\n  background: #FFF url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='10' viewBox='0 0 6.8 5.9'>%3Cpolygon style='fill:%23666A70;' points='3.4,5.9 0,0 6.8,0 '/%3E</svg>\") calc(100% - 15px) 50% no-repeat;\n  border: 1px solid #EBEBEB;\n  padding: 5px 30px 5px 10px;\n  -webkit-appearance: none;\n  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);\n  font-size: 0.8em;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n  display: block;\n  color: #666A70; }\n\n.equatio-select--full-width {\n  width: 100%; }\n\n.equatio-fieldset {\n  border: 0;\n  padding: 0;\n  margin: 0; }\n\n/* stylelint-disable */\n/* stylelint-enable */\n@keyframes vjXdlbbW_draw {\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_fade {\n  0% {\n    stroke-opacity: 1; }\n  77.77777777777777% {\n    stroke-opacity: 1; }\n  100% {\n    stroke-opacity: 0; } }\n\n@keyframes vjXdlbbW_draw_0 {\n  0% {\n    stroke-dashoffset: 2317; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_1 {\n  0% {\n    stroke-dashoffset: 282; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_2 {\n  0% {\n    stroke-dashoffset: 504; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_3 {\n  0% {\n    stroke-dashoffset: 282; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_4 {\n  0% {\n    stroke-dashoffset: 504; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_5 {\n  0% {\n    stroke-dashoffset: 282; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_6 {\n  0% {\n    stroke-dashoffset: 504; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_7 {\n  0% {\n    stroke-dashoffset: 282; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes vjXdlbbW_draw_8 {\n  0% {\n    stroke-dashoffset: 504; }\n  55.55555555555556% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@-webkit-keyframes rotate {\n  20% {\n    -webkit-transform: rotateY(180deg); }\n  30% {\n    -webkit-transform: rotateY(360deg); }\n  100% {\n    -webkit-transform: rotateY(360deg); } }\n\n.equatio-save-loading-spinner {\n  padding: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  margin: 5px;\n  /* stylelint-disable-next-line */\n  background: #28D88C url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='27' viewBox='0 0 912 912'>%3Cstyle type='text/css'%3E\t.st0{fill:none;stroke:%23FFF;stroke-width:52.5138;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st1{fill:none;stroke:%23FFF;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st2{fill:none;stroke:%23FFF;stroke-width:40.8129;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  %3C/style%3E  %3Cpath class='st0 vjXdlbbW_0' d='M833.3,513.4L523,823.8c-54.5,0-85.6,0-140,0L72.6,513.4c0-54.5,0-85.6,0-140L383,63.1c54.5,0,85.6,0,140,0\tl310.3,310.3C833.3,427.9,833.3,459,833.3,513.4z'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_1' d='M262.8,445.6L461.1,643.9'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_2' d='M453.4,650.2L401.9,701.7L97.8,397.6'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_3' d='M449.1,637.7L647.4,439.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_4' d='M653.7,447.1L705.2,498.6L401,802.7'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_5' d='M643.3,444.5L445,246.2'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_6' d='M452.8,239.8L504.2,188.4L808.4,492.5'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_7' d='M452.8,253.1L254.5,451.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_8' d='M248.2,443.6L196.7,392.2L500.9,88.1'%3E%3C/path%3E  %3Cstyle%3E@supports (-webkit-appearance:none) { .vjXdlbbW_0{stroke-dasharray:2316 2318;stroke-dashoffset:2317;animation:vjXdlbbW_draw_0 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_1{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_1 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_2{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_2 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_3{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_3 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_4{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_4 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_5{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_5 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_6{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_6 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_7{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_7 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_8{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_8 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}@keyframes vjXdlbbW_draw{100%{stroke-dashoffset:0;}}@keyframes vjXdlbbW_fade{0%{stroke-opacity:1;}77.77777777777777%{stroke-opacity:1;}100%{stroke-opacity:0;}}@keyframes vjXdlbbW_draw_0{0%{stroke-dashoffset: 2317}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_1{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_2{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_3{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_4{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_5{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_6{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_7{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_8{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}} }%3C/style%3E</svg>\") 50% 50% no-repeat; }\n\n.equatio-loading-spinner {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  box-sizing: border-box;\n  /* stylelint-disable-next-line */\n  background: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='80' viewBox='0 0 912 912'>%3Cstyle type='text/css'%3E\t.st0{fill:none;stroke:%2300B7FF;stroke-width:52.5138;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st1{fill:none;stroke:%2300B7FF;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st2{fill:none;stroke:%2300B7FF;stroke-width:40.8129;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  %3C/style%3E  %3Cpath class='st0 vjXdlbbW_0' d='M833.3,513.4L523,823.8c-54.5,0-85.6,0-140,0L72.6,513.4c0-54.5,0-85.6,0-140L383,63.1c54.5,0,85.6,0,140,0\tl310.3,310.3C833.3,427.9,833.3,459,833.3,513.4z'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_1' d='M262.8,445.6L461.1,643.9'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_2' d='M453.4,650.2L401.9,701.7L97.8,397.6'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_3' d='M449.1,637.7L647.4,439.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_4' d='M653.7,447.1L705.2,498.6L401,802.7'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_5' d='M643.3,444.5L445,246.2'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_6' d='M452.8,239.8L504.2,188.4L808.4,492.5'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_7' d='M452.8,253.1L254.5,451.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_8' d='M248.2,443.6L196.7,392.2L500.9,88.1'%3E%3C/path%3E  %3Cstyle%3E@supports (-webkit-appearance:none) { .vjXdlbbW_0{stroke-dasharray:2316 2318;stroke-dashoffset:2317;animation:vjXdlbbW_draw_0 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_1{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_1 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_2{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_2 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_3{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_3 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_4{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_4 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_5{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_5 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_6{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_6 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_7{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_7 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_8{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_8 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}@keyframes vjXdlbbW_draw{100%{stroke-dashoffset:0;}}@keyframes vjXdlbbW_fade{0%{stroke-opacity:1;}77.77777777777777%{stroke-opacity:1;}100%{stroke-opacity:0;}}@keyframes vjXdlbbW_draw_0{0%{stroke-dashoffset: 2317}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_1{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_2{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_3{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_4{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_5{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_6{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_7{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_8{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}} }%3C/style%3E</svg>\") 50% 50% no-repeat;\n  padding-top: 100px;\n  background-size: 80px; }\n  .equatio-loading-spinner.equatio-loading-spinner--white {\n    /* stylelint-disable-next-line */\n    background-image: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='80' viewBox='0 0 912 912'>%3Cstyle type='text/css'%3E\t.st0{fill:none;stroke:%23FFF;stroke-width:52.5138;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st1{fill:none;stroke:%23FFF;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st2{fill:none;stroke:%23FFF;stroke-width:40.8129;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  %3C/style%3E  %3Cpath class='st0 vjXdlbbW_0' d='M833.3,513.4L523,823.8c-54.5,0-85.6,0-140,0L72.6,513.4c0-54.5,0-85.6,0-140L383,63.1c54.5,0,85.6,0,140,0\tl310.3,310.3C833.3,427.9,833.3,459,833.3,513.4z'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_1' d='M262.8,445.6L461.1,643.9'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_2' d='M453.4,650.2L401.9,701.7L97.8,397.6'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_3' d='M449.1,637.7L647.4,439.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_4' d='M653.7,447.1L705.2,498.6L401,802.7'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_5' d='M643.3,444.5L445,246.2'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_6' d='M452.8,239.8L504.2,188.4L808.4,492.5'%3E%3C/path%3E  %3Cpath class='st1 vjXdlbbW_7' d='M452.8,253.1L254.5,451.4'%3E%3C/path%3E  %3Cpath class='st2 vjXdlbbW_8' d='M248.2,443.6L196.7,392.2L500.9,88.1'%3E%3C/path%3E  %3Cstyle%3E@supports (-webkit-appearance:none) { .vjXdlbbW_0{stroke-dasharray:2316 2318;stroke-dashoffset:2317;animation:vjXdlbbW_draw_0 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_1{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_1 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_2{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_2 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_3{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_3 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_4{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_4 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_5{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_5 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_6{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_6 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_7{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_7 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_8{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_8 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}@keyframes vjXdlbbW_draw{100%{stroke-dashoffset:0;}}@keyframes vjXdlbbW_fade{0%{stroke-opacity:1;}77.77777777777777%{stroke-opacity:1;}100%{stroke-opacity:0;}}@keyframes vjXdlbbW_draw_0{0%{stroke-dashoffset: 2317}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_1{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_2{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_3{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_4{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_5{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_6{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_7{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_8{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}} }%3C/style%3E</svg>\"); }\n    .equatio-loading-spinner.equatio-loading-spinner--white .equatio-loading-spinner__message {\n      color: #FFF; }\n\n.equatio-drawer__content__pane__spinner {\n  height: 200px; }\n  .equatio-drawer__content__pane__spinner .equatio-loading-spinner__icon {\n    height: 80px;\n    -webkit-animation-name: rotate;\n    -webkit-animation-duration: 3s;\n    -webkit-animation-iteration-count: infinite;\n    -webkit-animation-timing-function: ease-in-out; }\n\n.equatio-loading-spinner__message {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  color: #00B7FF;\n  font-weight: 600;\n  -webkit-font-smoothing: antialiased; }\n\n.equatio-error {\n  font-size: 0.8em;\n  color: #E51010; }\n\n/* stylelint-disable */\n/* stylelint-enable */\n.equatio-radio-checkbox {\n  -webkit-appearance: none;\n  cursor: pointer; }\n  .equatio-radio-checkbox:hover:before {\n    filter: drop-shadow(1px 1px 2px #666); }\n  .equatio-radio-checkbox:checked:before {\n    /* stylelint-disable-next-line */\n    content: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='25px' viewBox='0 0 24.905 16.056'>%3Cg%3E\t%3Cpath fill='%236BC9F1' d='M22,7.504c0,2.485-2.015,4.5-4.5,4.5h-13c-2.485,0-4.5-2.015-4.5-4.5l0,0c0-2.485,2.015-4.5,4.5-4.5h13\t\tC19.985,3.004,22,5.018,22,7.504L22,7.504z'/%3E\t%3Cg%3E\t\t%3Cg%3E\t\t\t\t\t\t%3Ccircle fill='%2340B0E5' cx='17.029' cy='7.864' r='6.548'/%3E\t\t%3C/g%3E\t\t%3Cg opacity='0.04'%3E\t\t\t%3ClinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='17.0286' y1='14.4113' x2='17.0286' y2='1.3161'%3E\t\t\t\t%3Cstop  offset='0' style='stop-color:%23000000'/%3E\t\t\t\t%3Cstop  offset='0.1375' style='stop-color:%23000000;stop-opacity:0.8625'/%3E\t\t\t\t%3Cstop  offset='1' style='stop-color:%23000000;stop-opacity:0'/%3E\t\t\t%3C/linearGradient%3E\t\t\t%3Cpath fill='url(%23SVGID_1_)' d='M17.029,1.643c3.43,0,6.22,2.79,6.22,6.22c0,3.43-2.79,6.22-6.22,6.22s-6.22-2.79-6.22-6.22\t\t\t\tC10.808,4.434,13.599,1.643,17.029,1.643 M17.029,1.316c-3.616,0-6.548,2.932-6.548,6.548c0,3.616,2.931,6.548,6.548,6.548\t\t\t\tc3.616,0,6.548-2.931,6.548-6.548C23.576,4.248,20.645,1.316,17.029,1.316L17.029,1.316z'/%3E\t\t%3C/g%3E\t%3C/g%3E%3C/g%3E</svg>\"); }\n  .equatio-radio-checkbox:before {\n    filter: drop-shadow(1px 1px 2px #999);\n    /* stylelint-disable-next-line */\n    content: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='25px' viewBox='0 0 24.905 16.056'>%3Cg style='    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);'%3E\t%3Cpath opacity='0.26' fill='%23221F1F' d='M24.905,8.159c0,2.531-2.049,5-4.576,5H7.22c-2.527,0-4.576-2.469-4.576-5l0,0\t\tc0-2.531,2.049-5,4.576-5h13.109C22.856,3.159,24.905,5.627,24.905,8.159L24.905,8.159z'/%3E\t%3Cg%3E\t\t%3Cg%3E\t\t\t%3Ccircle fill='%23FBFBFB' cx='7.864' cy='7.864' r='6.548'/%3E\t\t%3C/g%3E\t\t%3Cg%3E\t\t\t%3Ccircle fill='%23F1F1F1' cx='7.864' cy='7.864' r='6.548'/%3E\t\t%3C/g%3E\t\t%3Cg opacity='0.04'%3E\t\t\t%3ClinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='7.8637' y1='14.4113' x2='7.8637' y2='1.3161'%3E\t\t\t\t%3Cstop  offset='0' style='stop-color:%23000000'/%3E\t\t\t\t%3Cstop  offset='0.1375' style='stop-color:%23000000;stop-opacity:0.8625'/%3E\t\t\t\t%3Cstop  offset='1' style='stop-color:%23000000;stop-opacity:0'/%3E\t\t\t%3C/linearGradient%3E\t\t\t%3Cpath fill='url(%23SVGID_1_)' d='M7.864,1.643c3.43,0,6.22,2.79,6.22,6.22c0,3.43-2.79,6.22-6.22,6.22c-3.43,0-6.22-2.79-6.22-6.22\t\t\t\tC1.643,4.434,4.434,1.643,7.864,1.643 M7.864,1.316c-3.616,0-6.548,2.932-6.548,6.548c0,3.616,2.931,6.548,6.548,6.548\t\t\t\ts6.548-2.931,6.548-6.548C14.411,4.248,11.48,1.316,7.864,1.316L7.864,1.316z'/%3E\t\t%3C/g%3E\t\t%3Cg opacity='0.12'%3E\t\t\t%3ClinearGradient id='SVGID_2_' gradientUnits='userSpaceOnUse' x1='7.8637' y1='14.4113' x2='7.8637' y2='1.3161'%3E\t\t\t\t%3Cstop  offset='0' style='stop-color:%23FFFFFF;stop-opacity:0'/%3E\t\t\t\t%3Cstop  offset='0.8625' style='stop-color:%23FFFFFF;stop-opacity:0.8625'/%3E\t\t\t\t%3Cstop  offset='1' style='stop-color:%23FFFFFF'/%3E\t\t\t%3C/linearGradient%3E\t\t\t%3Cpath fill='url(%23SVGID_2_)' d='M7.864,1.643c3.43,0,6.22,2.79,6.22,6.22c0,3.43-2.79,6.22-6.22,6.22c-3.43,0-6.22-2.79-6.22-6.22\t\t\t\tC1.643,4.434,4.434,1.643,7.864,1.643 M7.864,1.316c-3.616,0-6.548,2.932-6.548,6.548c0,3.616,2.931,6.548,6.548,6.548\t\t\t\ts6.548-2.931,6.548-6.548C14.411,4.248,11.48,1.316,7.864,1.316L7.864,1.316z'/%3E\t\t%3C/g%3E\t%3C/g%3E%3C/g%3E</svg>\");\n    display: block; }\n\n.equatio-text-input {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  background: transparent;\n  border: 0;\n  border-bottom: 2px solid #00B7FF;\n  font-size: 0.8em;\n  padding: 5px 0;\n  color: #666A70; }\n  .equatio-text-input[disabled] {\n    background: #F3F3F3;\n    color: #666A70; }\n\n.equatio-toolbar-button--premium[disabled] {\n  opacity: 1; }\n\n.equatio-toolbar-button--premium[disabled] .equatio-toolbar-button__icon {\n  opacity: 0.3; }\n\n.equatio-premium-icon {\n  height: 24px;\n  width: 24px;\n  color: #00B7FF; }\n\n.equatio-toolbar-button .equatio-premium-icon {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  transform: scale(0.8); }\n\n.equatio-toolbar-button:focus .equatio-premium-icon {\n  outline: 0; }\n\n.equatio-toolbar-button.equatio-toolbar-button--selected .equatio-premium-icon {\n  top: -12px;\n  right: -12px; }\n\n.equatio-drawer {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  background: #FFF;\n  position: relative;\n  -webkit-box-shadow: 0 -2px 15px 0 rgba(50, 50, 50, 0.35);\n  -moz-box-shadow: 0 -2px 15px 0 rgba(50, 50, 50, 0.35);\n  box-shadow: 0 -2px 15px 0 rgba(50, 50, 50, 0.35);\n  visibility: visible;\n  -webkit-transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;\n  -moz-transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;\n  -ms-transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;\n  -o-transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out; }\n\n.equatio-drawer--hidden {\n  visibility: hidden;\n  -webkit-transform: translateY(calc(100% + 20px));\n  -moz-transform: translateY(calc(100% + 20px));\n  -ms-transform: translateY(calc(100% + 20px));\n  -o-transform: translateY(calc(100% + 20px));\n  transform: translateY(calc(100% + 20px)); }\n\n.equatio-drawer__content {\n  padding: 5px 10px;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1; }\n\n.equatio-drawer__handle {\n  text-align: center;\n  cursor: ns-resize; }\n  .equatio-drawer__handle:hover .equatio-drawer__handle__image {\n    color: #90969c; }\n\n.equatio-drawer__handle__image {\n  height: 10px;\n  color: #C6C9CC;\n  pointer-events: none; }\n\n.equatio-drawer__content__pane {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  position: relative; }\n\n.equatio-drawer__content__pane--with-border {\n  border-right: 1px solid #CCC; }\n\n.equatio-drawer__content__pane--hidden {\n  display: none; }\n\n.equatio-drawer__content__pane--large {\n  -webkit-flex: 2;\n  -ms-flex: 2;\n  flex: 2; }\n\n.equatio-drawer__title {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  margin: 0 0 5px;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1.3em;\n  font-weight: 500; }\n\n/* stylelint-disable */\n/* stylelint-enable */\n.equatio-input-button-background, .equatio-input-button, .equatio-speech-button {\n  /* stylelint-disable */\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CQkKCQkJPGltYWdlIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlO29wYWNpdHk6MC40O2VuYWJsZS1iYWNrZ3JvdW5kOm5ldzsiIHdpZHRoPSIyMDQiIGhlaWdodD0iMjA0IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU13QUFBRE1DQVlBQUFBL0lrenlBQUFBQ1hCSVdYTUFBQzRqQUFBdUl3RjRwVDkyQUFBQQpHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFZbnBKUkVGVWVOcnN2Vm1QSkZsMkpuYlBOWE56Cjk0amNhdStxWGxqTlVST2dDQklnb0ljaEJnTlVQM0NlK1ZQNVBIem9oa2FZa1NDTkpJSVBISUVRU1hGSWRsZDFWV1ZXWmtUNFlzdlIKMmU1bVpoNUxabVJtUktaN3BzUGN6VDE4TWIrZm5lODdxM1BIeS9GeXZCd3Z4OHZ4Y3J3Y0w4Zkw4WEs4SEMvSHkvRnl2Qnd2eDh2eApjcndjTDhmTDhYSzgzS2NMSXJwZi9lcFhRRGNQWHIvNjZpdWc1OEh4YUwzZHkvRUhlSGVQTVI0UC9lMWYvUEVRM0NvdzVxNVhYbjd4CjVjL2NmL2ozZjNhcGhmbnM0NC9nTC83OGwvQW1Qcy94Y3JRd2IrdllYZnY0ZnZqNG9mdkZ6MzRNejg4djNOLysvVC9GL1k5T1Q5d2YKL3Y3UDNNVjI1LzdtNy83aHBsWURiK2s1eDR0ZDZ1TWh1QldRd0t1Q1pyOUg5L1Fad21aWHJ0K3VjN3pmYmZmRHkxQXl1QVpJNEFpZQpvNFY1M2NjSVhnVk02MmJsSHA0OGdHK2VmZnZTSDJxNVdMb25EeDY1cjUvK0RtOW9PZkFWOWgwMXpQRVFYTW4vM1FFZE1Lc1JDQXp3CjZaT1B2UjFidjFpdTRlRUhuOFg3ZkcxeDhPZERYK3k3NmJWMzZNOUdyMUUzSy8vd1Eza3YvaXllUU9VLysrQVRmNWsydXViM08xNk8KZ01sT3BWTzM3a0hRUEZnL2dKOSsrbE0vQmtjQXhtYS85ZCtmUDRmVFJ4L0kvcUh2ZmJmZngwVmRWUXRmMTZ2cS9QblRZckhUVHI5OAo5S1JhUFh4U25adzhpdGYxNmVPSzl5OU9IMVQ1ODd0Mjc3ZG5ML3hxL1NqdXgySHczYTVWOEN3YVg1K2NlckpBa0FNcEI5SEo4Z1IrCjl0bnYrV3VBNWVqV1BsS3lnOGNBRHQxZW5xemR5ZVBIOFBRM3Z4MC9EbFc5Y00xeUJmdnQxaTJhTld3M3oxMVYxVzZ4V0VMYjd0eVMKd0hXeE9kT3pWRlc1bXZidnR4ZnB6T1VyK2Z0REgzSVllcmZmYlNOTnN0ZHc5QnF5ajkrTDNzUHQ5bHVrOTNUYjdUa1NPUG16dUxhOQp3R2ExZHB1ekZ6aWlXN1IvNVI1OCtJSDcvbDkvZ3pOVURDK2hhSGhjTE8vdmR6OEVtcmdsQytKV0o0OWdjL2JVTGRlblFCWWlQazdXCkFTcGE3UDEyNDZwbUNmMStKNERvWkxzQVd1anlYQVpGVGMvRHZuZDkxOUpqYS9sN0pEQzA3VVpBdzM4M3NZRERRSTl2VVI5ZnUvQTMKZmIvSHVsbVNoYVRIRFV6MEhLVDNkRjNYSWdPcWEzZEluOG4xN1I3cE03cjIvQXpEWWljcmhNdVRCMjYzdWNEMWc4ZnV4ZmRmVHdCMQpEYkM4VjhCNWJ5alpGYlRMWGNMeGhiSUVhc1ZVYUhQeHdtY1VxU0t1VWxWOVY5RnpxbjYzbzVQOW91NzIyNnB1bXByV2NnMU11QlowCjIyR04vVkRUcDZucE9RdkVyaDZHZmQxMU83cTNYbFJWUS92NmVueWxUeUdQMDhzc3lGclUvSGNPN0RXR2dkNEQ0M3M0OFh6Nm1qNEUKZlFiOUxPM21JbjVHL3J4OFpRb0lUVk9kLy9COVFlWHk3M3dOemZQZTBiWDN4YTBNZElrQnd2LzRuLzdMcGRaa2pzZjMzUjUydENoVwpwMCtnd2c3NnZvUFdudGYzdlZ6NU5vRUNhQUhEd0ZaaHZ3TmF4VUNyRS9xdVl4b0ZkTWFYTFlITDBXTG1oV2FBSG9EL2V2NThqUkgwCmRCTjV5MWFGWGdPWm1vVXR2UWZXZFVQMHJjV3ViWkZBUkUrVHZ5V2oxc3ZWWGd6NWpRbWRibkh5Q05zQmNYUCtmWHdzZTlOd2hRTlcKaGdPcTdza0MrQURuYnV4MzF1ckF1MnhSZnYzclg4TXZmL25MNHJ0KytQZ1Q5OWxIWDhEZi92MWZ1d01BT1dodGlPN0FvbUdkZ2RBUApQVk91Zzk0bkFNKzZCblJ0T2prRDQ5RFJpOURKbnVpVXIycXdOUWNCMDZaV0xuSGE2VGVMM3hDRm1oRXdLcVp0QkJvNS95RzlFaitJClJQdHd0UEFUWUFoTWkyYUpqRkw2VTJ6M200UFBuUUdSM0g1MCtzVDkzaGYveHYzTjMvM1hncUtSeFdGckhrQjBCTXg5K1c1c1VYNysKMHgvbkZpVitYeEx3a0FsNFdkd3N1amZuTC9SK1ZmdEYzY0IyZDVGQTRKbjNOR0pCaUVZeEtKZ0h3WUE5V3hDNWIwREl3QU42WHlpTAozSFlDSHJJUURNQVNMQTRPbjV3aE8zTmpzREtpYTNRL0tKaGtrWXFwaW91ZG56cjA3Y0FMbUw2bmZBRFNPSFRmczg1aGFKRkZrc2lvClBMOGlIZFFRbURiYkM5bEg3QzUzR3JDakFETkhRUUVXdGpoLzlxZC80djd5cjM2Rjc2SzFlUmNCVTRqNUF4YmxLdDFDSisyS0pRT1EKV1BaQ3FmcU93TUdDSEwydVR0b3FiL2ZHY05oeWVBV0JNRUJQcjhMN1pBV0R3a21leHg2dkJCS0V4QnFaMnZoWjBCREZ3OUxDNk5tYgpyUW5aTW9HaFBRY1pHQjVZbXZTREUrTTI4SFVnTU5zQ2g4R2VKNC9UR3c1aWtRaFVEQTZpYmdNN0JOcmRacmpDNmhTV1o4Yml2SFBPCmdYY0NNSWZvVjM1N2JGSEcxNnFxeEZyc2RsdW1YcjVhTERtR1FscWpaYXZpQjlJWUE0R0dGcDBQWURHQWVNWUNnNFBPNDE1NENHMTUKNGV1MnN2Y3dxNE9xYjhBdWZGdjJSN0RvMm1MUG1PNkRLQ0hRUU1Odndmc1pJSExiKzR3dXFYVmhnTEFGRWFBd2VPVERLSWdVUVJGQQpkSnV1dEwrcUcza1RPamtNOVAzRkRMYnRkdkJpY1JyY2J1Y0JkTURpdkpNMDdaMFEvYnp3WmdUOUJDaTdpODNJaXRSQ3NmWkV1MmdSCmtlVUF1ZDhQblNlWjdObEtFSVZoc0FoSTJPcndscFlDcjJ4YWY1V1hWYzZDZ0FPSHpJZjZYZ0NFcWwzbytTVG1SY01NR1ZVRGNRNm8KMVBFemRDeGZkMGx2WjhBUWkrS0MvdTg3K3dPUCtsRmsveUJTaHFGQXNPUkZqL3hoUEg4ZEJsRTFpT2VBckExamo4NFlCQnl4U0FTYwp4YURvRk5EeGZYcEVrQTNpdGlhNnRqZTZ4dGY5ZG9zTUZvdnBRQmJUQ1RRTlJvNEJQRnFZdTBlL0R0S3VBQlRTSVpGMnNSVVJlaVhBClFZMmNNekNBcjU1ZHhnb1dBWWE0WmdVWWRFMlJkZ0VJQXdwNVphamx5ZDIwU2NlQVdSVzVvRWdQQUJ6bUdBekVEWmlhbDYzUnI5eXEKcUg1eFlTRUxNQlJBTGdMREh1ZjFIMitEYmdVYzlQemVxRng4UGgwQ01vbE9yRktnYTNUTWhqRnc1dWdhMFRSOGwyamF2Yk13T2YwYQppL3I5ZmdOblo5L0xDdU5VbGRQSEg1RVkzMEczMjVDWVAwdHhGUVlGOWhKYjRTdUxDMW9Yc3VEcFdnVmcwUE1xQVFGcFpRWU5uWEU5CnN6ZFE2bFd4VmJLNFJyNlZLNlN0Z2tlM0lDZCtaenlMckE2OWhFZ1gwelV1QUNoZlV3cVVRU1FUWTFDMUNocFFlTkVONHUxU05xZ2cKa1MxckZMWWlvbFg0QlZ3ZlFNSmJlbWZtWndJU3RrVEE5L3ZPbm9NOXF0WmhTMk9nRW5zMXNMWVJQYWFnaFFEU2lpamUrdUVqck9xbAo2Q2tPaEhiZDN2M3cvTnZDMmdTbkFNZHY3aHROZy90dlZSNlNWZmtBdUlhRWM3dXlMR0QyZlBuVjhvRjR0RnF5SnF4UjlydHRrY1BGCm5JaUVybG9NejVhRTZSaFVLdTRWS0h6bDlZQU1vRUhCWXBaRnJ3Vnd3dC9tNytGQXJSV0VBSjlaR2JVd1RwVzVzOXU2c2dvTmszeGoKZGg5bHNZS0xvTkdYVHJyRmhQMmdDeDE2ZnNVQUZIclIzbTczYkRRWVVBU0F1RzhROU5JWlJWNERlc1lva1ZVR2s3eEczN1hCT3NtVgpEeHRiSGZhMHJWWVBoQ1Z1THA0TGlKYWtoVUpXOWFQVEU3STJuK1YxUGZmTzJ0VDNHU3hxVlpDc2lucWFOdnN0OERWUUw3WUErNEhBCnNydndYcXlJYUJSUFp6MnZMdUJLQU1KQTRBVlBwME5aK0F3VTNvSVRZTlMwQUNNNFFQMjRESklFR1BrYmZxNnJGQmpzS3NNRXpPaE4KRTlOU2dFWXhJREFBTlJwaVRoSlFkSitnQmFKSDJWekcvSTlmWEdrWDMyUHFoRXl0MG9LRzNvREVXN1lVUGF1ZUFBNHdvR0MyVHl6UApnQjI5b1FDSFhvV0ExVllNTkJTVDZBYzZkZ0ljMHpoQzF3aG5zTjJkQ1ZVTElOaTFPd3dsQ0Z6Yjg4UHpvUWg4em9xMUkyQmVud2VNCkkrNjd2WWg1emgveGkyWXA5SXQxU3JOY2U0dkFxeWpYUlc0TFdSYzhQUzh1L2h3b1RvQ0MvRmh0b0tqMU1TZjc5YmtNRXEvN0NWUm0KUmNRYW1kWEpLUnJZdm1oVklyRHRPK1Y2Wm5RTU1OQXlvMjJsVmxBQVNaeEZoWHc2KzlQVGU2WmFUS1VVSEdKdEdEeWRBQVlWTkxUZQpPN004N0VGZ3E5TXBjQVlEamoyWHR3UVdvNk5xc2RqTDVsQTVwWHo4Q3B2VkNTZVhEa3pUbHVzVHZEaDdUcCtnZDd2OWhSdFpGY2c4CmFYZWVvc0Y5dENxSEJEMEplQy9KajdzTkFXZWxJcHowQmxzUkFvNVFMMW9BWWxYNFYvVWFHaWR3TUNCbzRiTWxNYUN3WlJHUVpJQ2gKWDdHRy9IRUJqb3UzQ3oyVE9RUE1rcGdEUUJ3RkUwZkVERkFtYVNZNUpjdXZTc0djZ1NhSWZOTXFhamtDSGV2RlNoQUlNc3ZTQ2FBSQpRQVJGQmxGbno1UGIvTGhwbmM2clE0Q2ZKeFpKYmpPZHF4WUN3a0VkQW1KMTZCUXhzTmppQUdtOVd1UCsvTVZ3UlJ6blhsQTBlRWZBCkVyMVJIQmRSc0xDSVI2L2F3L21nUWRncTBJS2gyejFabDZvT1FLRmxURUJ3bHJ6SVFIR1NKQm1BRXZZYk9DSm9NbkJWQVNoS1c4STIKZU5zZ2VNcm1FaHZudnQvRTJNNXN3M1VJSGpLalh4SnJVU0RvTnFkaENTUVlnTk9weFZHUWdJSkc3ME80cmZzamNEaHhUVzdYdlZvbQpGRXZHMm9uTXFUZ00xSVZOWkc2L0dYTHYzWDBHRGR3M3NJUzR5b3Z2bmdLYi9Zdm5UeFVvVlJXdGlsaVVUZ0tPUXAwVUtHalVDMnFsClUxalRtVkt5ZkZHc0NGOEZESXNJR25BTGZRd1lLSXZNNGhSV0o5Y3lUaTFPb0hrNUxSdG5BZnVnVjRKN0xBWHhpOXVXZFZuY1JyczkKRktCSjIyUmgxSG9ZRlhOSnUwUlF5UDB1c3lndHZRd0J5bmRPYnR2ekFHUS9nMGlBSXhUTzJYMEJqRkU2NkFOQSs2RWJGb3RWdERaNwp6UnlRdU03cTlCRzJ1L05oRlBDODg2Q0JlMlpaSnFuM25QTzFaSzNDcnVLaEY2dEMyNHFvZ05JdTRtR3FLNkNtMzdoU1VBZ1lFZ2dVCkNBc0R3SUwzTTFEb0RYU2JucmN3d05FKzFUTHllcVp0TXRBa3J4bGJscUJuVktOTUtGbU13MlMwTEdFRVJqcG1Tc3ZNaWlUOUV0ekoKenBWMGpLMUxCSW1BUXEyTVdCWUdnMnNEYU9oRW9sc0NFZ2Y4NlRsdEFvNkNpSXhaRzZ3UWZTU3hOa3pUaEs1SmNwMG5pcllRcThQVwpocjFwUUVyR2N0UXVqZC9jVmREQWZRUUx1NHZwekFYYnpRc2ZhQmh4NTRwcEdMdUUyWUxRRDFjeGNEZzlFZ1FjdmlaMlVIUDlDT3NVCkE4SENMQVpuSkRJWUJDeE9NdDkxZjN5ZVdKd01ZQ045VTFpWmpKWUZxeEtCTXFWa1V3c3ovVjJtRnFha1pVTEpJbkFNSkhOMExGcVUKVEtmRWE3SW9yVm9hSjhEUis0UGVWK0MwOXJldGdJWWRCUFM4WUhub0UzYWNmc0RhaHQ5ZkxCQ0ljNkRuVkJ1eE1sVTlOTXVUNkg2KwpMNkNwN3lwWVBuejhDWXlpOWhDOFlMdnR6ak5NMXV0VDM5SHZ3dFlFTmNoWThXOFJkQVZJc2hRcTVUSkxFYXlIZ1lCQjBqQVFRQURqCjRqVUFaV3h4TWtxV3FGbndxQmtkRTNDdzEwMjNFeTlaY2MxcDJaaU94YU9TMGJKRXg4YWVzc0ZTb1MzWUtER1lQdE15U3NVVVFKMDUKQkxxTWNyRjN6Q3lLV0JZRkJnT0hidE1KUis4ellIRFlHN2pDZDVhL0dTUkdwVmJWZzZRUmRSWnRaV2MzV3pYKzJhQnBWdklNNW9wUwpXbTFldFBCMXN5Uk9kOWZjem5DSExjdll1cEN0WVBxMWhQUHpjN01xS3hidlFkZ0hyUkk4VmtLdlpJRWJVQ0lnbEg0SlVOQnVxMlhSCmZmUWFzaC9TYmRZN1kzcFdKNkFndTZKcmRVMExPSEp2bVFLbDNLYXN5aXoyTXRFeEpUZlQyL2sydUpRREhTdTNrWTRGOE9odDBTRTUKY0tKMmtZWHZlT3VqbFlsQVlaQVFjTWlpN0JWQURCemNtN1V4TUpuRk1Rc0VSdkZNMndnRjVHdzc3ZzNDbjRXZEFSd0tXNi9YZUhaMgpOa2ZUM09qMlc3YzBjRi9Bb2xybFJQUUFXNVcyay95dnlsbE1KQU5MOG1waFlUVWFXK3dOclRDNkxmcUU5eldIQVlTSmp0bldYTXNMCnNXSnlQNEhGemFYSmpQUEpMSENaNlJqblVua3ZaTUdKY0R1di9RM2d3Y3pUakZsY0pnbi9GSStaMFRHb3JtSDJmS2xUb00xY3lwR1cKQ1VBTUZDT0E3SGsvZzRuK2RrK2ZiMiswYmU5Y0FrL1FPK0pnVUJESysza09uM0VzcU8rR1piTW1iY1BLWmhpMjIvTTdENXI2TG9PbApicGJlUEdFU2VCd2tCMnhnWHlYckU5KzFYTE5lQnpwVWkvQ0dTdXJpNDJJSFh2dytnb0lXU3lQZ1lORHdGdTIrZ2lBQ2hjNlVoVlVLClFIR0Iza1hkb2tIT21CNWp1c1UweTJGWGNvejJIM1FwdzBFZW45T3pGTGdzWGN3ay9JMk9sZkVZc1N5cVlTRFNNbEJLbG9BVHJZVjgKWndPT2ZmOTkrdjRNSUl0RmFSQlhZbHFTUHVUVTJTRVpGWFRoTEFCemVxZ3JyV3VkMGpKMm9IbE5XdUFEV0M4Y2U5RE9mL2h1bUF0dQp2bTE2VnQ4SHNEaW5ydUw5N2tMRVBlc0VPckFjZ0t5Q1BoSHZGYkRlY0F1aFR3UU1vMUVObDJ5Z2dFVEFzM1FaVUJSQUNoN1RLQkU0CjZnamdZOFFhUitrZGpMUUx4Q3dCRjJNdkZxeVVNb0FaZHpMQTVYMEVYRm02akpnZHBrbk1BdVppTWhiNXQ0Ukx5MFMybUV3QVNxWmwKUUFXL2VNdFF3S0xpSHdKUVJPekxpV092MWx0ZDhxb0xOZE5CMDRjNE1WWHk2VHhYYU10SncwdXBneFRkTVl3bGlLdDFEYTZxRm16ZApRbGNjK1NJTXBPMzU4K0gwOFVmK0xvS212ZzlnQ2RkQXZZSTdsMTNHem9LTnNyaFpnN2hBcWNTcUNPWEtRTUZwdEx4dnFXQlJTeU9BCkdnd2tEQ1JRc1IrQkVxaFlwbDFjL0J6YU5RWXNDUlBpNXdXWXhGOUtnWC9RdWtBcVdlYmJoN3hGcFpWSmpvQVU5WGVRNGpJR0ZyWTAKYU5zUmNEcFUrc1RmVzRBajRGSHF1Z2ZWTCtLT1Y5ZTZIUTg3RGxJb3c1WS94cUY0NjMwOGdYREpnMzR4VFNtdHFxelRUTG51N3pKbwpxcnZnRGZ2eXg3K0FiNTkrZlNsWW5DVThzcXM0UzFzSlZvQVgvbEt0Qnk3cEVESWdsc2o3SEt6b05uZXVXTk1QdEtLL1hkTVJYdFB6CmJEK3M0M1BvTWZxTncvUGxxcS9qNkxYbE9Rd3l0VkRCWXFYYnVWNnFpMjM0dkNrallIN0xqK2RaMEptYk9rdTFtZHRXOGUvbW4xY0cKVmcvc2s4d0ZjMXBBZkI2RWhGUEx2SllTMGxnYkZGSjkxSnB3MWFsa2ZVdUJISVF5QnF2OE1XTXB6andJdDhqQ01FQW1hUTBEZDhYcAozTW5ERDZEZGJhTDM3QSsrL0NQNDV2dmZ2RFVkRG5mQXNpUzM4U1ZnWVg3TUZxWHY5dkxEMG05b1ZpQUtlbDI0WW1WNGthTmFFc1NsCjBqSlo5TGI0bmV5alh5d3Mvb1Zab1lWWktLRjEyYUtQZVdUakxPWFI0Z1IzV1crdnNRczVjeVhQSlYxT0ZsRUlXcFlhNXJDcmVacU8KTXVzRVNCa0JtS1hGV0R4RzZabTZreDNUTXhIeUxQSjM2RVQ0NzJqUjcyZy9iWEhIanhGZ2R2SzQwRG1RZmZSTjkwTHB6TXNXWE5hawpiY1FyUjc5dFQ3OXRsMzIra0JVd1pKcm1yY2RwM2hoZ0xzazZIdWVFellLRkc5TEZGQloxRmV0Q1Q1NnV4bTRIaXlCV2hnRVRyRVFBCmplMExZbjlwcnVNbWdpU0lld3RXSm8rWUN5N2t1WWorV056N0hDanF0TkkwZnBRemJLelhuWGpHRGg3RHpHTVdicVA2cUIyRzlra2wKY0lhSk0yQW1BMEF6alVFb1d2Q2N4U0FtQnlndGlHa0E0ZHM3ODVnSmNPZzVBaHA2RGU0N3RRdjdERFN5VDhEanZZS0dibnZ2T1c0agoraWg0MFBnNkI1cnNPaHZjZkpQOUF1QXRXWmVYQW9zRUk4R0xCNHNvZUVNL1FJUEJ5MlVneU9oVEFSYlpaL2NOTEV0TXRHcVIwYW82CmVNV0NkWUdaZkxISlo4M2lMS25lSlluOEFJaVhCY3QxUVdPa3Z1eEJObzdUalBQTlJsZDBaY0psNW1wVzk3RnU5d1lPQlUwQ3p0YXMKU2c2YUxTUndoYjgxNE5Tc2t4Zzg3YXVBNWsxWm1mcXVnS1dTK3BVVDMvZXQzKzgyQjhEQ1ovdCtRV1pjUFZ3bTRNVnFzR1VoN1FLcQpZVmFpWlJnY0JCUVIrd1FXY0M2ek5tSlJndmNzNlkrVUNWQW5xeElCNCtmQjRyUkRqSVBvTG9aUitndGNtbm1OQnBvcktGbUthczQ2CkFHREdjNGFaMnpsVVpJNUFVODNRdEdCUk83TTRkUmJaRDdsenFTWW85alJRTjdJTFZhaGljVU01QTBqbHFjV2huSFhMY1p6RHlWMDcKdWI0djdLdnFoanVOeW0xcDByNDY0U2R5ZzNYbnBwME84MEswMSs0RXFONDJXRGpkNWZUaEk5OHNhbys5bHZZU1NnUXNuQ3pKaTVkbgpSQ2hZaHNYUTkweWoyTG9zTTQzQ1FCQ3hUdmZYVG9XOWlIaTZ2d3BpMzdId0Q4OXpFSVI5c0RvR09veGlYdEppUnBZblQ0c3hUNUZaCkhEQWhERVZOLzFqWDBKcnhWa09aMFRjcDY3OXFqb3M5QnlJWVFRdmp3dDllb2FGUUYyMzBPQmFmTWY4Ym4xNDNMN09HU2I4Q2x6NnoKZHRGUjBNUUdhNkVmbXhsQUY4QmliVVR0SWV2ZjRXTy9BaEw3TFZlTnVrV3paTmV6ZUFmcXlydlZ5ZHBWaXlXMzRMM09HbnN0bDlmYQpqRHhyQUY1OHNkV0RVM2p5bzgva3VIVnRDeTkrZUFablp4Y2N4UExpbW1SaERWSU5hWnFGS05pQUNTemd6U1BtVmdrQUNTeE92R0NPCndjS2VzVFg5TUNlb1lHSHZHTGZNbDJ2NE96U1BtVE1yQktVbnJMQStlbldhc1d4bjJlUnlodWhkd2xTaVhJVUZtaGJucEJyVFk2cTgKbkIyZ0ZCNkh5V09ZUDJmMG51Z0xiNWRaVE0xTzBPK1F2aE1zUnA2K2NPTFE0MkVucFhpczdCaUNIZE53Zk9WWUQwUDZEZmlxSjY3cwplTXZKVEg3RFFLdnB0OVhNQ2h5RVRmQlpVME1JUThWdHJ2WnREODkvK0FFdXpwN0x1bGtzbC9EUlQzNDhBUW5ybWRmWkdCM2VvbldSCm5sL0wxVU5KYzJtM1o0Y0UvZ0pEb0RHQ2hTM0JvRFJMOWNwS2FCZ1U0RkdyUTQvYjgwcXhIeFpGbmxpWkJ5VVBwK3JITGpBdUxlSzgKM05obDkxM1FMSE5hNVNiYTVUSXRNOVUyNlpRZWFObVlwa0c2clVtYmw1UUV1SlRoSEJNMFk1cU02Wm1rWVpCNzZMSlRnQ09SVzlNeAplaHY1dnQ1bVhlUEZtNllPQS9HZWlUY056QkVBV2pyZ2tEUk5LNXFHOU03UXJCOE9nUDFnV2M3RG05WXoxZHNBQzd1UFY2ZVBZTDg1CjkwTy85NHVhS0ZpbEVYeWxZUU1YZHVrWmgwQkNCN1l4cnhqbmdMSCtXSlZnd2Z6TVJXZXphRDBpTlRNTnM4cnBsNXZTcmpKOVAzRDIKa082aVordGdFZkxiVUdRbGx4UXNCNWFmMHF6TGFkZ2wxeHlZaFdNaHhqL3NtSThBSFQ5SER1NjRmeWIzTGI5ZmZGOG9hYVJsT3dUYQpsWHBMcThiTElyUEJ3eDZiZmVoc202cEsrKzFrdytVMS9EWjFzM1oxVGNzQlc5eHV6aVdGSm8vUnZDbHE5bG9CODRzdmZ3Yi8weC8vCmovRC8vdE0vRjdxRmU0RzExdTVJOHJ5OXRKOFhtc0QyUmRJdE5DaXA0dDdjeFZHektBZ1NXQmdrSEhRMHpSTEFZdnZrT1JFc0V2a1gKbXNFWkFCeHZPUXdXeUJ0am1OZHV3dU9uSURrVWg0SDUrMjVrbFM2OVlpWjhyZ0xSM0FrTHJ2ZzgxamNhckczdEphREJCQjZBL0RnRQpEVlBNeHdRVktaQmxaaGZneU5wSFdaSUVXMG12RGdHK3luRWF4RHZTOTUybTAwekI0cmdaK3AvL3UzOEwvKzN2Ly9IZWlYNzQvdGtQCjdpbnh6ai84K2UvRHlmSXhSeHZoWXJkSjJjZk5zbUk2eHNtVTNCZy9xMTFaSk9vRVRZeXBxQlZadWt6UW0yWlJZWjl4WnJSSVBXWVIKK3dBWWlQd2N4dm9rQUNWa0lWY21xS00xY1ZPaEhCZlNpSjY1NjRMakpyUU1iZ1lpZDRncUh2aDhtWE5CWjkxRTRKUWdpRllNUWtCMgphc1gwUGJQSE1FYWlFbWlpZGJFMnVPWUNEeCsyRE16U3BtMTNNckZndFZ6ekJBSjVzRmswN2llZmZPRysrT1J6OS9DMGR2L3ovLzUvCnZUYkpjZXN2T0FwUVRuUkx1SElicEVXemtsUVh5dzhMdWtWeXdvSjF5Y0VDcWtlQ1p0SDBGcVZicTFMRWowQVM4OGFzT0N5M0tIbjAKUGhWL2VSeDFyU3dYUk5RbGwyVVpYL3NZNXpybkdzL045Y2tWTXVmZy9WUWVrRjRQM1VqWDJGYUwwZkxLemJLV1JuUE9UTTlBSHBlUgpiQURITVpodDBERjBmME92dGVWZWYzUm9XTk93bWRqeVBySWFySG0yOG5lYUVjQ1pBcHdsSUprR25CSEFwZEFrYzZYcHhqNlZPcy9xCm1hKysrZ3B2TzZCNTYzR1ltVWxmYzZNa1lORTBIb2RPYS9ETDRxK1k4cUlKbElOUk1oL3l1SlpxV2RpcXhKeXZ0UWw4MllMUU50WXMKc0V3QlNzeVRLV2ZBSWhtM3dlMGJyTW1zb0lkaW5zc1VGTmNRODFEZWdSdWM0V2FCaFlmZUl4UDhjTW5yWWZhWk1kOUdheUdWQWw1ZAp4TEdLRWlkVUxtdEJHRTRFTGkrV0t4d1RxUmhPbXFxN3JCKzB0YnVWZDlNemxJN3QwRzY3blR6ZWtKWFo3emF6NDlHSm11R1RoYmF1CnZ1dVV6S2pZanFqWUh4TVZXd2tWMnhNNDFnOGZjMDYzNTNKdlltQUtrdGpPQ0VWODAzN0xDd05OcEpTa3lpRG9jOWR4b1ZrU1lEQW0KVllxSGpNVzlwdTVEbVNoWnByL1VXdDRjM2NJZXMvaENSbHNPeFVvS2lnUHpWdVoxenIwLytQcHd5ZWZNZ1RVT3JPSkU4MERTSjNsdQpYUGFkSWNTSWpMNUJtVWMzT3JGNmlPK2dGRXk5ZDhGSElpL29rYW1hRitma1lQdWNhSnRVUklkdStmQ3gwREx1eDZ2VTdHZEV6VDRtCmF2YWZiNTFKdmM0ZmI1NktlYVppUzAwRjU2WVVHSFdMMENZQTFTd1NqTVFVSjRuZUw4ajgrMU5hRmdRL2FSVm5RVWhvUmxabElWWWwKNkpXeUhkSXNCWE5YOXc2RE81QjJkRjFxZGhsZG0rdDVsbHpQby9aTkxoU2c1YmxuTVhWR0V6T2RKbVR1akk1dForaVlYcEd1ZEo5KwpNeklaWUM1cGVmNXVNSmN6cU52WnFCbFlLeWpYNy9lWFV6TTNyZGk4TXhibVVFc2sweTJWWHl5WFZUOTBWYnZma1g3QjBHbzFyN2R2CllxYXhaaDBuOXpHN2t3MFVHVGlDd0Y4YkRWdXB5emhZRmpjT3lFVXZHS1pFU2d2eWxWRjZQT3oyblRzNVhMYnZiVjZ1OHhrbko0V3gKa3dCSzdXWjBhOTY2UmRvS0VPdmdzaHk2YWVwT2lBdUJUU0JRenFlVFFZYysxUHVFNXppZDM3bW41ZE1qZC9xdHFnV3k1K3hOR0lkYgppZlNQSXZyeGczR3Evb01QUGcweldYald2WGFCZEY2YjdIRVV0MitUYnRHNHl5SVVmK1hBQ1lGSUJrOENrQVltZzhBWHpTS1daV2hLClQ1dGJ4QlpKV25OaXVXS3BkaVFEeTZ3WDZoNEM1YVdBZ3pNZ1NLNzA0bmpWNCtPWlpRczA4ZVNIdzFKcHNmNk9ZTDlaK1AyeTN6TW0KeTJyR09VcXBCaTJjOEZxeVJyaUlqZGFNQkxqcnF0R3VwaHlvbzdXbXFWWkxlUFRSNTVQdmVWc1pBTGNpK2c4SmZhN2o1b045OHVBRAozMlBuU2RKWlFwNm12bkJFbnpVTWhwUjlPVENjaWF5Z1ViRGdNb3ZhRjNHWWtGQ0pLWjFscVJXVVJUVGZYaGVMVWxwbkZ1V3lxUDE0Cll1c2RwMTQzWlFFNHR3K1NsWEF6amd4bmxqY0dGc004TktzR2c4TytoL0JNdFNibWVRdnpiRkx6UVp0bkkvMlpXZlh6ZkhiSk5FaXoKYnNpaURLcDVkUG9WLytQeFBhc0hqK2dzdU9ERXpTSC9DcmZwQUxndFNoYUZQbGRQbnJWbjhPREREMkYvY2NFVEpUeVJUTC9qcVA3QQpZdDliUzZTUXpJaWhhQ3NsVlNvVjA2Q2s1b0t0VVBPV1ZwanV4MWhNVVJtcDF6a2FWbWw1clF2eGxXb21BT2xuNGhiMzFhSzhxc1VwCmpzSDhpUVRTYmZDengyb1VmOG9pcUREdTVobXBHQ3B3MEVaMzZEaVAyQ0kzMGJkSTY0aWF0YnNORGwzbk5QMndsemY2NFBNZnVVVmYKNFk4Ly9YMjRMUWNBdklhRGY2aSt4WnErK2JyaUhBZXJ1K2NVZlRxTk5BYUdwWlVRTXdCT3JLejRoQTdPaWFXMzZENU44c3ZqTHlGbApmMWxFN3BNbnJIS3AyLzVrTXRnMWdudjMyYUs4ckhPZ2lOdk1hSThZcTNHaDcxbmVKREFyUEhQU1BBT0xBck1RajFHUlQyTGZ1UXU2Cno2TC9ndjd1Z2tCQ3Q0Y0wraHQrWEovbjFZbEE1MXlKMFJDRGtYeTJ2bXVEdzJHdWh1WldIUUN2cEdGbXNwR0xUT1FRYzFtdVQyUlcKQzN2SGVPU0VUZktTdkxIWTQxaWI3WVhGcnFrcklXblNhRm1SaXAvdVp4UnMwc3ExbW9JRlk0WXZIRTVkdVVvWXY0dVhTeDBCY0VEWApoT09Kd2VOWWVoOXJsM3BTNTFTNXlUS2dnN2F4Ky9xYmE2MlQ5R2hvTkNZSFFZc1NoUitxbm5STStIMjVreEFId1p2Vm10ZFovSXh6CkdjMnZxbVZlU2NQTWFCZTNQVHZuYTU0M0J1MXVDMVhkWkRNa1ZTU3FTM21vUi8yL0NyQm90YVJmWmhXVmpiTXVNSUhHT2MxbVRrSEoKWUZsQ3czQU1kU29CS0hBb3ZRVGVNNnR5Q0RnNGN6OTR1TVpCVjQraFBabzQwbVR1WlNYcFpXbDZtb1BnRVF0VUtoYXh5U3pOM2pwegpwa2xwT3NkR2h6M0o1TFEwZlVBbU0wbS9OYjNxeEdqSEUyczlqdzBNdjJtNzI4RjMvL3d2VVhKeG50bXJhcGxYMWpDa1hTQm9sMitmCmZqMUh4OFNpY0E4eGJoRE9vbDdLakZOYkpHMkhwTFFxZFcvSnFGY0lUaWFYTXNTMEY3UmlyOW1NWTRDb1daSk9rV1NsdkpCcnRrTHkKUGJFcU43STJNT04yTHRONklCUlZ1cmwrSGpCRDcvSzBISnZtTExvRlExNlpEYlRsdHdLYmZ4T0FJbFhaNG5sdXBRZjZFRnpRTTVTTApwem1QdE14YkFZek9sdHhkVE1EQ3VXTEwxUWtQS3VLUjNhRzJKQXA5TWJHWnlKY0tTUEFobWgvakxuemxWa2pwUHVTWnh6a3RteVpSCmF0TTVEMVpHYXorc0x4SUhqMWJsSmhvM3AyaFIrTHNKUkRCcnJBYlRLSDk2aFd5QlcreEZjdGZRZEJHa2NlaHlmdE5PbnVZRUVDQ04KUU1LWkFkZ3NUNWluWWRhK0NYZnQxdDFHZTZicXRzNUVwRjA4ZThhSWpsbDk5eUREVjJXc04vdk1Gd3VwY2ZGa1hkUmZYMlloVy93awpCaVJIMXNTOFpCQktpbGN1TnJMQXhhVGJTNWx0WExtUndNY2pXRzRGTkNOM3M4dHk3Vkt3TXFhKzVBVnRHREtSUXkrQzBNUkRxRlVBCmlzeVZNZkhPWFFEaU9FSUxjSEsrUDRPSEhhK2tsWkVUM3JsK2hvQWkxL0NHcEdYRVk3WjUvZ0pmOWZldGJ1RkFhcW54dm8xZ2tZR3MKNnhPdHkrODdHOWxOVk13cldPZ0pXUjh4RVhYbUp2Wlp5VEFFeTdKMmtDaFlibDB3N3grVzU0WmxRVWxNOWVhWGlmdjNuWUs5REVVYgp4NmdtWFhBbVNhVm1WWFFLdTh1THg0SzNMVFpXVDZCQkFWQWNReGlIM2Nxb2RJdlhhR2NBcG1ieXQyeGxWc25LY0NnbkE4c3JuUmlyCld6cUloVzVoNjlLM2U2L0RWODI2Z0YrRVRwVlkxcnVzSk5HeVNOR0hrb29CakRwUnFnTmcxS0JpM0YyeUdzZFczT0hjc0tOVnVibTEKT1dpZHdWMjVKemtCaklxQksrSXJFU3labGVtRFJaSDkybVJkc3BzMU5nT1hXcGtaVi9sTC9kNDNkaXZQdVpMbnJqdzRaOUVzdVk5RgpHUGN0OVNaaWZqeGs5ZnFvSGZhNURGa3RoWFhWRjArWkFXd29oeDFsUFk4TGtHVE53Tkhod1lyRkkxaHVGelI0WUIyRVJpQ28vZHFTCmk5KzBMSlFkUnRWTHlwa2UxbGhSVW1OVTYycmN6a3NmYkhNWVNjQzc1akZCbktTWVRwTG91WFNrWGpSWGRlRjVLUmZ6amQzS0I3cVoKY3Jza3J0V0hkcnVCaG9EU0R6cWFRbnJ4c3Uzc09tc21EdFliR1dxWFQvMnkrbjFVOTNDa2JEanVYMXhTcjZ6L3NOYXpwRFpIVUZSQgp6bFFsSHNGeU82N25mTXlBeTJwb2ZPNEI0L1I4R1llUnNwNXJsOXJVTGtKeFdwcGJrOFlJV2haN0czSU5iYzIwMGhTZFU2dTRDVE1uCktQSjV1dUxSOG4zUHBlL0wxWm9aQnJadHk3SEEwSEVtbmpOLy9ldGZPNENiL2Z6Vkt4d3d5S3dVY0VwUTErNmxLVFY5WU04UlMwMkIKNFJUK0lZN0I4MnBKbWtsdGZvamNoNUxqVVAraTFHeHBNUmZyaVR5aFltRkdTUTFadXlHWWR4c2ZyY3RyQXRINDRHWUtHN0xPbkpNUwpBa3pheFNMem1JOU96OGFuZTR2VmdIalNJR29abllWandEUVhOUERFYzl6dmR3TFdkcitiNnl6elJqVE1sVzFlZFpLeDF1bXI5WUNZCmpZeXA3SGcxMXlMSlVtUldXdmNDNW03T0t5ZWp4U2wwaS9YY0NuMjRybFBUY2dUTGE5WXpNTFUraGJkc0RKeWtZV3ljT3BodWlVRk4KU2IyeDVFd0lkVG1zWS9yb1BkUGlzMEZtRm5idDRLNDN2UXhlTjJCbXhiNnppY2FjcHVCMVJJSXRhcDBObWF4TDFySlZJdnF4RGoregpNdXBDenRxN05nZUVmbWhacW9OWVo0VCtOWFBFanBkYjBqTXdYN0lkUkw2REpDVVRVT0pNRzNVclEzQXJCK3NpRVgrZGFSTUgzRm9XCk0vM3k0akd6eHdPZ2tMMWszQStRblFDM0pmNWZCVENGZGVFdU1PdjFpVHJFdGZTNEVtOFlKcEdXckF2bWRTeEZqWXRtSXNjQVpkNDgKUExadk5jR1lwb0NsbVNkNVltVldPbnRseGVUeGNrdHhHaWdkQVROMEJJcHVNVmlDSm5qRWNrOVpINndKUUV5UFNTVUJuSnBjV0pudwpXcUN2NHowdW1pVTJCSjV1Wmc3TlRTLzFxeHljL0RqMGZRY1hGMmRXOSsyQnZXTnhBWk9nb1YxMUdxL25KSWVNYTJGME5GN1J5V1hoCjhtbGZxYXk0eGhFd25OYTNRTjZ2K0pKVWx5TkkzcHd6WUJ5ZjhVYkxQSVNtNkJvbkcwSnZha3hORXhlVzhSeG9kdWxGVXkxY2gybG8KY1hRZzBYL2V6emt5enBKQ09YZXgzMjI0ZmVZY1BjZExIQm0zNTFhK3pQK3VydVNWdElEbElpMnZyUXpEN1BxWUhxT2pKQ0FtWGVwRQo0eUhQYkYyazUya0NKY3lOblpBTXY2SzV0enU2a08ra3E5bVZsaDlDMTh5NEpzTHZpMmxrZkxFVzdDUzdTR3NHNHVqQThEcjh0eXdGCkFHenQwWHN1RnF2Y3hYeVZCbk92QXpDSGhILzBsRGtMWHZJMFhhK3V4RHlYVENQeGtCOElPVlBZR1FUam1jV3NUdzZVc3NiR2VvaU4KTk11RUhoekI4dmFvMldpZHBOOExjYjVlS2gvdEhxMU1uQXBYWXdvcExDREZkSW93QTd1VU9TWEx5ZVR0d2R1YVBOams4Q1pmMHIvcwpBZUVhNnNjZi93UldKMCt5WUdYRjQ0MTkzKzFqeEgrUTJJZ0JSbWdWNWw5UTYyQjBrcGdCeVFkS0p2VU9ObmR4YnVaajN2RStuTld1Cjhvb2RMMjhXUEhOOUVTRCtiZ0IrUE5QVGhzcEsvUkpFWVBqQU5CYVFKZzFFaDVLVnVNZlg2SWZlS05uQTJTWlExOHQ0UXVYSktRK2YKL0dpdTd2OWFhNlY2bVlQQWlaYnJSdy9oaDI5K0kzWDd6Zm9SRDZDVVVkT0c4Q3dDejhGSU1hVTgyc0Q2akdrcWpLVEFnTXZGL3RKbApNMXRDYll4TENaYkZGT09SMkFlNFdXdWs0K1UxVzVuTCtFK1d6VHlheVltcDIyWk12R1NoajBNVS9iS0ZYaDBDWHB3QjdFVno1a0ZqCmo1a0xNUnhmRGJRd2VWWW1pZjgxUXJYQXpkbDNSSDVhSENWa3ZoWktCbzhmUElHUFZoKzRzKytmd2NuREo5SlhyWkpab2docDFMYk8KcU5mS3lqNWFHSTdOWUZhSk43STJZbDFnSmljc3IyZHhXUXNrVjQ2Vk9GcVhPMjlsY0d4MUpyVlQyZnpRS25YM1NWWm1adTNFQ2w1agpNVnhPb3NGckxPYm1FRFFIV2FzRUhtaFdEK0Q4bSsvY3p6Ly8rWTNXU25YVEw3L2JiK0hGeFhPcHBPeVJyY3VKZHdTS2Z1aDgzN1loCldEa1RlOEZnTVZaaDVtVFJMaW5zbngvclBacjhwYW43WlV0WE9GcVhPMjlsaXBrMUxwdlBPWjc4UEdRdTVqQjNNMVJsaW9VeGE5TkoKN01YN2pnZmI4dU5zYWNxWWpMNVczN2REVlZWMGRxZGxROVptKytJWkQ1N0JaMmZQYmtUTDZsYzRLREMwTFd6Yk5obFhGbHNrL0ZFcQpTeXZybTR5U1Q1YnJEMUQzY21pa2w2TDFSZXRXbkIzQWlsbWUySnhuN0FpU3UrbG16dmFoaVg5elA4TjRmT0NjbmxISGo5MDJMYXlwClVDTU54RmNSL0ZLMmliSVd5VGl4QXdwMjI4MmNzK3ExVWpKM3NsckRKNDgvbW9CSFl5OVNNQzNSZmlkYmRmRzVPREpPL09kcVFzMjEKbkxzRWJmeGRiRzRBTTU2eE1Kc0VyOStyK0FpY08yUmx4cFFzekptWitaMGp4UXBqQnN1VHFMcVVsWTR4bTBrWnkzSzI1a3dUVzR1OApLT3U2bVhoU3VSL3pqejc4OUxWbEs4c0xYMnczZkQyUU1vMXhnQ2hvSFdsdy8ycnpQSW5KK0RvRUlhT3JHWnlKZUFqVHZ0Z0tUUzJNCmpjeEw4KzZ2SENCMHZOeFJLNU95eUNFMEFRaXU1aXB6TWV1YWtRNUFBaHBhSDc2T3JiT0NCY3F0akpZU2FQYUpGOFlUdXRwTTF1dSsKM2NOdnYvOW1ydUhISzFtWTJRQ1BYeXpjNnVFaldDNVhOa3A2Z0w1cnBTVUhNQjBibVZqTjk4SXFkLzlCRkcyeDlhZ2NORXdITGdFRgp4RTFkakp5RG8zVzV0MVlHc3JnTTJ2b3hOL080Z1VvQWtsVFJZbUlmZFFZU3Jlb2R6U1pGaVhUd3VSZGxiVG9McnE5UEgwQnordEFkCmN0eGQ5dGx2ckdFNC9ySisrQVIySlB5M0w1NFhieGcrR1BkUkJ1V1FjVHcxcUpmTXozSE84Vldla3dKYjJSd1NNRG9HYzhOVmp5QzUKKzFZbS82MnlqQURVcVdlSWsreDNXd3RYcmhscGJNK3pNVFR1cHoyOEFYM2Y5Ukw2Y0Zsd2ZYTit4bjJLNGVFSEg0dGo5dmwzdjdtMgpqcmt4WVBiYkM3bjZ1bllMMGpPdDBUT2xpOVdCQ0s0MjBkTlpsbXd5dzFrQklrQnM4bGN4QmF4NG5Vdm9HQnh1ZTNxODNCR2daSmJsCk9yU3NLQlVKSjFCTUo5TlFYVmx4cTBqSitQQWdJK3RUQ0lKTFROZ3BKaHBHck0zUXE1WGgxTVpxMmJnWFQ3Kzk4UmU2a2VnUGdwOEUKRkFtbU5mVHRYaXdPM2JjNGpJdjBqSkhzc2hTSTNMSW8rbjBZNVozQUVzcFpaK1pJSXBaQ2Y0Nk80WEdCM3RrTEhxWmx5UUV3WTJGYwpFYVBSMkY2WWFzMXJLS1B2a2hLak1jQlVHdDJMZFlFNDZIYXhYRU85YUtEYjdXRjk4dmpHd3Y5R0ZvWUYvNTZBMEt4UFlIdHh4c0FCCnRqYm1VdzRWd0pNdmkzbitrSXE0ZUpiSXdlSmk2MUVYU28waHR5NVF6cGljY0U4NGl2NDdhMlZnVk5hY0tCcENQcHJkVFlvUzBVYWsKRktEeFdlcFVKdmJUV21Qd01lUGgyM2J5bGhNNVQxNW1vbE0zUzdmZlg4RHE5TkZZK0w4NllENTgvQWw4K2Zudnc5ZmYvb3Y3bDIvLwoyWFg3bmV6dk9HdXlJYlR1OCtTMk9QZlFtMmFaQWlpalhEQ2lZSEtXMERNRWpEV01HMDN3UGRLdmUrODFtd3M0Rjh3Q1FtWnpiRzVTCmFseWpiRk8zTk5jNFMyay9TSDl2QmsxRkovaGg0RWgvSFUvMDV6OThkeFdOdkJGZ1pDRisvOFB2NUJvdVZiVnd6WElsSDRKUnUyaVcKc2tVYkZ1b3RhQVJYY0ZLWFdpRlZCOHp3d2VsZm1aVTVndWFlYXBvWnBuQ3c3RDJVQTBCWVQ3YUd6TUtVWU9IMmw2SnJmQVFPKzUwWQpmYldNVVBXd1dqK1FDVFBiN2ZsNC9lQmx3TGtSSmNzOVpEdWlaeHlvN051ZDg5VUNiRUN1QWtkcXVnVGxjMTZQRVNoa0pvNmRTZFIxCkRFa0V4b205a05yaGhEUFAwWlY4ZjhXLzdZUXBwYzUrODhnczlIN3dvb1hZWGlnakFkVXVjWDJCMXFmRmVZRVdpa0FRVnMrMHJOdUcKRTc5a0xuTjA4THFlc2hzQkpuckl5TUpVaXhYMGUvYVdOVW1zWVd3UVlnTjI4QUJJc2lHc2FHYlhSQi9rR2lpallubXRPTG9wSVQ1ZQo3cDhESU9ObXFRU0FlMXpvSU1zcDJ6RFE2RHBKRkQ1VzNTcFFPTVBFMHJLR01PaEpRSWM2RmMreDZFZXlPc3ZseXIxNDl0c2JmZmFYCnlpVWIrbGF1OHYzYXZWZ2FORTlFeWxyRzZDcVVvSlMwMlkxVURWeldEaWxZR05NdjA0WndhcjZLOXFSNDJKMTh2Tng5Y3hOT2ZNWDQKak9oaXprZWI1NTR6c3lyeEJKeGJIS2RRa2ZWaUlqK3N3Y3BYMFBlOXREN2pHR0hYN3RXSmRmSGl4cC85cGVmRGNBVm9YUzhGN1l4YQpCaENuanJsa1pzTVg0NU5COEg3bHVvWVBpOCtzU3JSVU1KNEJMMmNIREdaODdNOC9HcGw3WmwyZ0JFN3dsaVdhaHBqL3Jsbi9ES05sClppMmdaQ0haR3NLUk13RjFEZ2UzbCtrN3Q3Q2hTK3d4dS9HNnYrNFQ4NlJMUmltTHA2N2RzcmtCRGdoSjRxWDBJUkNnSi82WVd3elQKS09FTDVuUnNjcFdtUEdpOTN0RVFGS2Z4SFBYTC9kUXhNeTJZME5oQytIMXhBcFFZbzhrc1Nqb1ptMmUxc0N3UUpRSTNJdWY1Uzh4UwprTGJzSVF2cml0Y3h4MkplaTRYSmt5NFpwZHpwcVY2c2djMWNCUXNEQnBjcStDeUlDWVZwVkFOVG1OTjBwdEEvekYzS1Vmakx4UGJpCnJIVEV4YnVESWhpMVpacnBaWjR6RHNUTCtpWG5oWXpwTnFvemlpUDh2UTZPRlNDRldNd0hILzJJWndSZUt4N3pDaVA3MEEzWXVyNjEKeWJXeWkraVp0SW1DU1Z3bTgzYWszTEJFejhZelJMSzNRVGZYaUErdmwzeDV2TndENGU4eVBYb2dBMzMrQ2pEVnZOb25VRS9PVWwwQwpIUDV3VWozUEdrQktVTHpMWXpGUHY3dSs4SC9wb2JDc1c3cjlQb2lLdkY5ZW9HRTI3aEFLYTVGdmNjeFY1ODRla0hMSHNnTU5SNlRjCmYrRS9kOEs3OUNTWVRxcUp0bytIMVpvYzBLMVNNbGVXcjcvU3hWL0ZPY2R2a3FmMXMxTkNKNGhyUzF6MmN3WGdCK3VpUGFKbjlJa1cKQWt5Q2tkTmpoS041aXRmN25NZkxYYlFxV0ZpWDNOcGcvdXNEekduYW5KMDRUR0J4a2RyYjM0bmhHWWJSK2dENW02N2R1ZUFsZTVsTApmZjBUUWdsMFRncXRGOHNBaVBBRlJMMmhkTzJNb3pGWWpGbnNFZU0rTjlNZmFwSW1ZZFlsSEtTYzd4N1JjVy8xQ3NKTXVuOCtsc1JpCk1ZY3NUSm1ocm5HWjhFcWd6ZnZWOFpSbXYwUWdjY3NsOVpEdEwyWS9JMDlhL3JNLy9STjQxaUx5SEtUeHhPVWJhNWloYmQydWJUV0IKYmRFSWt2dStFemR6MUJ2aVhzYTAwTms4bHVaemJGNG5Ma2MzblkyWVAzSzh2R05ZQ2dCUml1TG5LVG9rbDNPZUdnVWhxbzlTTWlZbgpjWkVEb0dzeG5OVGpxUm1sYTc1a3JuREljMy8rd3EyYWxmdjVGNzhIOVdMdi92S3Zmb1haQ2YvMk5NeCt0M0hjNEprUnJseHg3a2pBClpXTW1TcE02cG0zSHkzdWhaYTdQNmRKSjFpTDRjUTFoc2o1QkVxUkY3a1BQRFp1aVFYZnJ4ZXFsenJ2MWJYMXhBUTJCU010Y3l2M08KcUJqa0FuNENwSG1pbGN5dGMzQWtZdStSNE1GTTkwQ09ETWpQeGk1S0FRamEyR2xtQ0xqTDFsVjR5SnZXMmU2MzdtLy84Zjk1ZlY2eQpWM1VuQ24yNzNJckFqZWVwSFMvdklsVkxJMHNnbjEyT2JwUVJvUHVqMk5kQUpkNHlVL0hIMytSNE9WN3VNR0JnZk82NHpCamhVY2djCmlWbTBKY1Y2U05uN0pYSFJMQmtqS05LYTdIWkp5cTFwR01tazVINEVNL3VEeHd2VnI0elJwc0o0bE1qODZ4Nkw5ZDlQTXVZUXA3cFYKMHMwd0Y3amhKZ1p3bEdzR0xqMTdEd1l3ODVJNTlwTDl6ZC85dysxYkdBWkhzMXhMNEZMQVVsV0huQUhqeWJYNTdiaE5NeER0ZXBRdgo3NGNKdWNucE1JUWFiSXg1dm9ZVUpPSEJvZml6WVJpd3FIZ2ZPSUM1ZmFuVDhJMHRERWY2RndRVTE5bEFXMEpvSlMxdk1YclRTV3pwCjNFSUljYWdob0Q5emVjMlkwN0dYWkI0MGh4ODVYdTR6OVhKaE5EbXY2RkdEY293VVBWZ1JCemxwUTNXZmdhdzF6WUdIa0tGY25ud3gKZ3NodEw4N2kyak12R1g3MjhVZjRGMy8rUy9lc1JmZXJYLzFxUXVucTY1OEl4akhGbmxNTWVGSnRNb1BjS24yUWRoMTI3bEM4YVBlYgpaREpIQnlMZW4zUnl0eU5oRmloMGVqK0M1ZDVhRTF2VTludUdreVNtRTJHSWRMdlpPRnl5SXVHNTRjUWN2ZEFoMDkrQWs3MDBpRlhxCit3NjU3OHFpT1hGejBmNnZ2LzB1RDF6ZXFLWS9yd1NPYTVRai9kdTJqWXNkdTVhN0NEcjdHcGhPQkZyR29Nc2J5ek9GZmZIc1M1ZG4KalltR1FUdklNT2RWbi8yY3g4c2RsQ1Y1UEdYaUNDcGEvRTJ0aTJxWHNDMG9XS1QwZWxKbVlFZ2tQekMwc0V6NGIrckZjaExZZkNOZQpNdTN0MUlUSUVpWUprcWlZQm1PeE5LblpkbUp4WU40TWo4OUl6aDN6QU40RjdUS25YeTdWTkptR3lYUnVzVjdFc3VpZ1pybXYyaHJHCmpPWnRlTW00TFF3Si9vVlBJb3ViMllJUFVoL1RCOFVTRUhhMlFQM0RZYmJvT0R0SVlCYkdsY0E1OXNDNDE5Wm1va3Z6M3hldmRkWDEKTTdKRWFkMnhmZ20xaDRQbzdZcEw2WkhydDRhK3gyWjE0bnBpU0k4ZWYrU1c5UGh2di8vbTlnQnpzbHE3MCtVSi91Nkg3d2kxdFhqSAp1bmFEbGE5ZEx4OWlvVlBTc0E4V0p0VVl1MlNGVU51MHh5OGFrM3pVN1JFQU5MSXd5bjNUR1FqaG1DYno3dWdhVnlTeXBOKzZzRHBXCnJIODFrR0I2bTNzc1NYVjhMNXFiZTdGVXRaYzAvK1h5Rko5Kzk5dHJXNStibENpamxTZ1RPanZzZUVqSFlpWHJtU1VhSVJVOXQ3ck4KdUtScEdNUkl4ZHdnZmFIMS9xQnBQd0tnT2M2YXprWVlEcXhEdUx3TzZLaGo3alFMYzRYZ3ozUU5scjl2dVJZZ1p5ZkdTblRkNk1rVwp0YjhTU3NlbEdPZVVJUThvYzVYTUs4WWxLWDNYSVpjbWgzVzh1ZmpoelZBeXprN2U5eGVvYUYxSXJ6TE5xY2FBN01Fb2x4QktCUXNvClFBQUdoUlZiRkNGYytvV0RzTXYxVHZTSVhPcDBQZ0xsSGxLeFVwc21CbEZvVzhRcEJRTlFFRWxjSTY2WkllcG5uRm9kOVQ0UHdvN2EKM2VhbDljeExpWDRHeDJMMVFEd1JGZGZFNURvbFdvdDBSbUJReVVBeXA2Q3hEeHZIU2tNRTJERE1tVmx4RzJZdWFFTUhIaEtPeDh2OQpFUHd3RXZseEhXRjJ6WWZGUW5ZaVR2b2xESkhsNVRNSXUrRzFaZ3lIOS9kRHI1M3NSY09RaGFFMVc5SHRrNU9Icnhjd0xKSWVmL0lGCmJaZXViN2RZTFpadTZQYUpXNEtMZlpFc0VqdGtsbWJ1aXVwQ3gzaDJzTnREZG9ER1luQXl6L3A0dVg5V1pxYTJ3enFqK09BRG5xeVYKQUJJNzZRNlJqb0dkakFrb3pGNVErSmNMKzZPamlmK09ReUFjUDJRUTdYWmI5L0RKajl5amp6NS9QWlJzdjcxQXZsYlZBcGZMdGFRYwpBSUhHd0NIbkJMVW1FRHhnazFIU2taTEZmVEFrNFY5b25HS0xJdzhLSGhiK1IzcDJSL1hMbk9DSDFOOUU2ZGdNSlErV3hlalhrTjhPCllNbldGL3FSbGdGalBOSmdtWjdmTEUrRUhmRjd2SGoyMnh2UnMvb2FYeFErZlB5SisvTHozM2RoM0VYZnQyNXpvU0xmMXhWMis3MmcKbC9paDJSWVZaRk53Q0NWTE05UjE3dnBnTTlobkxkRE10ZUM4UjZEY1grQ0FtODM4bUp4a2d4ZVYxd3NHS3MrcEpncVFmcnpHeE1JRQpTK05oOEZWbGJJMWJLdSt4cmhlNDNWek05K0s0QXVUWHNqRGYvL0E3dEhFWHdCNEdUcnJVZ1VvTExsT2VjZXNKdk5sRURtNkdqcG5vCkgrSVhMczRRUTZGclhCN2xuYWJRd0JFczl4WTA4K2xRbzVPbFVIVE05UzZCSmxzek1LVnVrY2t3VUVCU0czc3hOeHlERVUzVGRURUcKc3pwOU5KNFI4OHBUbE9PRll6RWZyQi9nbnREWk5HdlhrWDdoTitZUmZ1a0xNeEJLa0VEU0pISm00QzlNdC9rTUlXY0hORXNUS0pwZQpYUkoxd2RzMjlaZ1Zad1djWmtFZkwzZkluVHkzS0RVc1BjcFVMNEFET1NqVXd1aDlXVU95bG5ROUJYb2ZnTVJBR2ZoZkVQOU14emh4Cm1CMVZISU5wbWhOc0wxN2dqejc4OVBWb21DSVdReURtTjJaTkV6NU04bXI1RUg4SklBbW0wMEFpbHFTWEFLYVoxSERXc05zVFdoWmMKemxpNG1vOFRsZTZqT3puemRxWUV5cEpKekZtTkFKWSswYkdCUjR3RmV0WmJQSVo3TkVYcnczckcwdnRGTExCTG1VZGpMbGJMR0lPNQp5Y2krRzd1Vm82ZHN1WEx0TnRFeC9yQms0dWl6OVpNdlNoOVd3TUZQTVhFdiswekQ5SVdtbWVHa3VaVUpHWjZsQTJBMlQraG9aZTZlCjJDOStxMVFEaFVWUWNvYSs5emtkQyt0RzFsQUF6eUFPZ0o0WlY3Uk1CSmFlclV6ZjBjcHJFODBiZXV4M2UvZndnNDl2NUNHN3NZWEoKUFdWK3NjRFZ3MGNPOTN1MzIyMmpGZUFVR1IwREkxTnV6RnFnQ251ZnpnYVhYVWU2eHJ3a0lmY3M5dGVKdWdXTzR2L2VBR2RjbWFLeApHQXRlQjVhU0FjZld3cFZyaGxhRldaZ0FOQVZOVmRkMGVtWjYxbWt5Sm9Gb3VUNWhQb2N2bm41NzR3Qm1mYzB2T3hIWG96Ui9pL2pYCjZzN0Rucjk4eUEzVEx5UVdoYTdnK21oQ25ldEFLUnFEcEZOekNvVVhKTE11MGVWc25oS1lvMlZIejluZGRpV1A2TmlBSVhkUWY5c0oKTzRsc2c5WUhMeXl4SXF5RGFlMUV3QUFZaXlsT3hvT1VrL1ZEUEpGeitoYlRzODM1MlV0NXlHNUt5VEFJLzA4ZWYzUW84UzE2S0FiegpkcG5ZN3dQZG90MGRneVA3WWgzOVpjZGZtQTVJRjBRY2xtZVFLMm1abXhha0hTOTMwQ3QyRFRxV21FWllNd1lXK2l0T1lleGNCaFo1CmJNaUFrdEg1ZmhpeVdOODBYN0ZaTkdQQmYvdmpMbkxoWDdnSCtWTVRncGwya2YwanNWV3g1enQ0d29SYmlrWHhQbGdZUGdoZDBESXEKNXJJemhvRm1ISi9STTVMV0VManJwZmdmcmN3ZHN5NnV5RlFIeE55VG1uN251QlprQ0pHd2s2aFplRDB4SStsa0h3Q2RhSHRqTVk1UAp5cHdMMHpzN2NYTWd2YzgwVEpRWDdmNUdnditsQUpOL2FkWXhEVmtjNkRyWEVrZnMyMDY4RWhpanNCQURsZkVNWU9hVUFXSmZVTThhCmNoWVJpaWEzSVp4aENwZXpIbGhMMXZSMm9LdVpIK2hZZ1htSHJZc0J3aHFmeEhLUGlZVUJYUytkbmx4cGJRVHJRZ0FCRmZ4ZDduME4KVjEvUnlYb1l4TFVNdnNiZ0FHaWFwUlNVc1g3Wm43OTRxUVJNZjlNenh1TUhUOXlQUC82SlRHOWFyVTVkZTNFaHRRWWVhcXdYUzB3eApGSFVQRDMwZjR5NFFkQXZFTHh2TXExeUxMejQ2Q0tYbnhDT082bWJ3OHU5K3BHaDN3THBnVmhzVjlVdVoybEwrNXRrYW9MVlJySlZBCjZ3a0lDaHF6UUtKYStqNTZ5alNPNDdHdWw3Sk9IV21hZnJkMXA0OC8wdFpLbi8vY1hWZS92SXhiR1g4NGU0YmZiWis2Qng4K3dZc1gKejZTaXJZYzZSdmpqQndYMW1RTlJzK1RKOE9Gc29BQng0NE13dEJqdVp6b0hIZllUZCtPRUU4TlJ5OXh4NnpLdWRZRnBDa3o0clFNYgpDZGFscGJWUm5selQydWwxbmZrSU1yWXdRdkdnQ0p4ekdyT3NWWllPKyswWm5uNzZrZnVIMy96RGpkWktkWU1ERUJOTXUzM3JTTHJECmd5ZWZ5WWkwM2NVeklJNG80d200cmZyUXR4NjBDNEhuU21idnBZME0zNi9vZ1BCdG5xVkdkQkJySjF2SDdqWFpwL3VkUG9lM0FQSzMKa005czU1UldxMUJ6MlNTcnlRU0FxYjQ1VXJTM1psMFNRTEJNYTBuT0h3SUdqMjZoL2JTWUhFODlraXZkMzlIOUxhMlJIYTJySGUyagpLKzdvMTk0UmtQUTJPcjYvcDdYR3dVRCtlNkZ4N0UvbUpkbTEyNzd2OWpJSDQ4SGpUM0d4T3NGblgvL3JqVStvOVEwUFJseHdJUjZUCm56RllhekVOcStvbXBGMnJoZ2xuRGVhZXFGOGtIaUJFdGlwdE1MbHNaZWpzc1VBN2M2aTdXVDVuT0xCaExtWUFVWnFtYzlReWQ5aTYKcFB0UUZvVDFZOTBpdjNuNjdjVzZzRVZoSU5FK0JrT2JyQTJvN3Mzb1crV2poaG1nOHRoMXV5ajR1Wnora2d6bEt3SGtiK3VBT0FzSwoxWXZHQ3NXOEpGOE9PbzRzUDRzRUR0b203U0llTTc3UFlBbmlQeHljTHZPNWwzNTZ6VU1MWjZ6SlFjQmo5UCt0V1plWjNMRm9YVERrCkZVNHlRbUpzcnN0L2Uxb1RzamJZcTVwcG1YYXNnWk9yZWVERVMzbGRvanFEcmNsRGxQMUdhNks2NFVHQm1XMmFwODVUbFBzT3RPaE4KSmtFbGE2RFVLbEV0cG1ZbzFJeG9HbTk5YlJaUEhxT0RaTStMejhtdFNuaFBidzB4dkprUlAvcXdSMnIyNXNHU0Yvbk5lY1k0OHlPRQpDOUxpVjZzaGRFeG9tTkl4b1Z2MCt3b05velhDdEd3YjZCbTlTWGhzejNTTS81YnBXQjZ5SU92U0QwTndBc3lYaXJoYnJJZTVsSmJsCmIxNVZOUzZYSzJ5SFFYdENZY3BhbHVTZHdkeUJvTUVuK3ZLZDAwQmxPRWo1TmJtWTFRSFFHdEJxY3pWWEVDUEJvcFVHQXdmL0tEN3IKcHBnbWdoNnAyUnVsWWxuYnBPalJoTXpMR1hQQWNpcVdmdXZvU2g2dGk5YVlCOGZ6a25PSTR6QWNFQmRxbG52SFlLaVhhNnlJK1hDeQoxcWFVRUMvbFNhMWU0cURBek5tYXJRbTBQSjJXcUNPQkI3SlJ6MklWMk9SRThhKzlRTVd5WkJaRUxJcUovMkNKZ3RDdlhHWmhNaXVqCmZVR2R6V1hQbkFCd2VQYjcwY3E4WmlvMjhyb1VibVFuY1pkRTBTSFFid1ZFWmxuMFNoWWtpUDFvWGRKanZBV3lMazdFUGhxbHR4T3oKcE5Id2UrMTNHN0kwN2FIV1REZTZ2Q3hnM0l3bkt0S3lubW5aSUxUTUI0RFFvdVk4NjRLZThWWnZRNlJkc2xYdldxWEFzdWRsWHJJeApMUU9kZCs0UEFPTkl6ZDRlRmN2QmdscSs0VU44WlVySGpGb2hlNzJFYXVHV3ZWLzArM04ycjFBeW9XamU4ejRGRlQ5L0dQYTBadllXCjBHUXJJM3FtYS9jOVNZUTVPdmJTdXJaNnlRTUZsK2taMWk4a3RHeFJTMEdkV1JuSXJJd3NjQVVNdUtSdklHZ1hRWUhwR1pjRExYY3gKSjZDcVJmSFpFWmpycFhrRXpXc0V5eGdvZVdOR1NLWG95UUdVVVhHajVUdHpKU3M0MkxJd01BZ3d1bysyb05hRjNja2cxb1ZkeWNBTwpnVGFCeGZjZXF0NVhQaTgzdVV6czQ1c0FUTEd0Rnd0bzFpZWNSdzJrWlN4R29uRVpHZjFNMWtXc0RNckNsMWlLVUxBQUdySXF3YnBBCmRBdzR0VDRaTFFOdEsxSUNSazBNMkFEUm5JNFY4OS9oTUtVOFhtNEJRSG5ySkVoWDB5bW94VjdCdXFpV1RXQmhDeEhwbU1SZGdoVXgKNndJQ29CQjdFYkd2ajR1Rm9WK1JnMzlkVlMwMHo0emVwNnA4djZnWEE2ZUJyRThmWUx2ZnZUUlFYdHF0ekhuQ1BEZGp2THRyVzl5ZQpuM0hCRG00MkYwUFg3bUk5QTVlS1N0byttV012MFg0bmdyOFFkSGJRZ3BlRVRheVlXWWRzb3NQQmJITlJXUGp3MGVrUEVwUDNyQ1hQCnFDY3p2c0xaNVhpWnR5NDRvbU1wUUlsNU9sT3FoYkxVS0ZjNmRmUjNkL2FiaDk4ZkpKQzVsK2VVenFGT2dlRTZYMVZhb0NqOUpidFEKMFR2c3RwdGh1OTNJaUl1THMrY1RPdmJWVjEvZGVDcmtxNXhkeDdUTWo2NUdzWHhkY1pzT3hJWStYVU1IcEtHbkwra2dyT2p4RlgyRgpFOXF1NlF1ZTBMNVR1bjFDWDRIMjRRa2RCTGxQQjJwTmY3dm01L0hmMEd1czVEV2M0NTZmaSt5cW1RT0lWZTRvR0x1L2o5VHM5Vkt4CmNXeGxCSkN3NEhjWXJBaUplYWRpZmtQUDNkQjlIdHh5VHI4emJlR0NmaGk5ais2Q1NEMDlQbHpJODlqNkRBUFR0SDJnWjV3cDBITXEKeXFIWTNSdU93MXhML1B1cUZuckdUR25vV3hpNGZKK3BGcEZLM3VsbEd4YXpuUHdsQlNiUkxmUldXYW1MWGpQME1pOFp5T3RrcVRBKwpUblFhZ1NKekJCejF6QnNDeTB5NmZwNU0yUWFoUDZaaW1ORXd2YkoyWWM4WWF4ZUx4VGpjQnJIUGxvZFdVK3NzZTJUZ2RqQWNDQ1FXCjA2eE9ob3JvV0Y5NngxNWE3TjhHWUFxd3JCNmN3b01QUDNUYnMzTnhNZmZ0bnR0eXFwdVgxamQ5ZUYzWXlEcG1nRnpMcURiaDl1cW8KWUhBSk9PbDJkRE5IZDdKNnhpUndHYlNNYlZYUFFISTF1N3dYODBqUHpBSGxDSnpMRnhlT2RFc1UrVm04cFk4VmtxV1ZDUUo5SHhaKwpKdmFEMjVoMEN3cGdCQ3gybjE1cmwvMk5lc2VzTG9iamU5N1hQYmVLWWVySC9TVUNXQmJMSlg3dytZL2M1dm1MVjZianR3RVkyYklWCkpMQVVWbWE1T2hFNXptNW10aktjWHFZeFJnZG1UZUpXWGN0ZWtqVkhuakFEVVl5M3BNY0F4aTdtZ0pFQWpnbHdYSm1nZVFUTks0TEYKalR1L0tGQ2t4aVdrM0k4cFdhSlB5YktZSmRrbHNMZ0lGdmFTQ1Znd1dSY1IrZzRsc2k5WjdoeTRKSWl3Um02V3BYWGh2bVFHbGxmVwpyZFV0SEZEdWpBbGYvdmdYOE8zVHIrUGlZMkIwSFZ1WnZxQkpTc2xxRzJjckZnZWloWEV4alNiR2I4Q0dGcm9ZOEN6ak1ETVp5bGxECmVJaUJ6REFDVWNmK2hlM1IwcndzV0Z3Mjg4ZEdYbVY5d1NBdjZzcHp2VXpZVHdPVTVobmJScGR5c0RZY2c4RkI5NXM3bWQ1VnRJb0cKS0xrZUpxYitTKzFWYmwzQ1ozNTArZ1QvNE1zL2N0OTgvNXUzU3NuY0w3NzhHZnpSSDN3Si85dGYveDl6VkUwV25NWmxsclQwUmFaQQp0QXhnTG1FT2NPcStrQmtBcUc1bWp3bEFHVEEwZnl4YUtFdjFoOExLNkt0blNUS1poWm5PV2h6bHpienZ3SmtGQ3M1a0hTZXdLRkNzCnpWRUNUQXBTQnQwaTJpTUFKVkV2RjZ5SEFNUWkvRnZWTkdaOTVHLzkzbVZCU2s2Um9YWFYxOVdDNHk0aGIyd1MwZCsxaEQyL3h6Ly8KZC8vVy9iZS8vOGVYUGpEMUt4MVZPbFMvL3ZXdjNTOS8rVXZNdEF4ZEgrQ3ozMzRkWmd6aW9sbHl5WC9JTGVzMXl4VEZxZ0IzVmJOYwpNZE1wdXhDYkNXa3lYREVBSWVvdnNSdElYakJON3N5dFRacUFHV1piNlpoZG1iQ2pjNTFFRzQwUmtlZWI0ZVY0ZWordHlqaUtIK2I2CnVOUlVudWZpcWZzNFVEQnpHWWZVbDB6azJ4VUtheE5pTEpZT3M0OEJ5aXdFUWNEb2lJb1ZCV1NjUThaOUpCcS94dEMrbUxYTG8wOCsKZHQvOTg3L0lkK0FKeWM5YWJXejBzck80YjJzUnpLWEpYT3BtcHRzTjNXNkllemFFcFFiWVhZekk3dVkxc3J2WnVSTVFkek95Vy9sRQo5aVBxUHJyYS9SV29xNWxybzVkMGpKWjBjSnZvWmdaWThLQTA4OExWV3NBV05SSllvbWFlTFhDZG5ETjR6NENTaTNzM2NoMlhMdVNnClZTRDJhc2pqS3pFZ2FicGxJeWt2aU54UmhWZjRCZDNmSUx1VTZjcnVZMlQzc1lPTlpTZHZwSGlNZ0VUQUVBMUUxa1NBUlBUck9tN2sKbDNZbDM3YUdpWXNvYUptejlrdzhadDF1RCtzSGo4ZzBlSzdJNUp3WnlRaVE2YkdvT2tjMURFTFE1bklKS1RVWWNzVWdMbTZqYW1wTgpvc01nMExGQzNFL0JiQlF0ZU5WRytxVndQNC9jMGZBYVR6WjNEU2lYVVRBMzZxVXdidUU2QjVaMlpFa3M5VVdzeURZREExT3hUUlQ2CkxQQkQrcjdHYW95S2hhSkRmbjNWTUJ5NFpDckcweVRXSjQvRXNyQkVaYy9Zb3E5eTdmTEtRZXJiQWt5aFpZTEh6TmNMYUphbnNwQTkKQWFXcUZsR0RwSVU4aXA5RUw1b1hiUU5KdUl0V2laWkJtemM3eVBRTG1IN0JlVS9ZU0tJSWNOeWhFUUJ3L1RnTnZHdEFPVVRCSUV2WApkMWszZmF0djZlZkFnbHBpWElERmxXRFpNbGh5bDdJbVYvcE01S05tSlZ0R2lCU1VnVk93Y0ZaeVZmZDFzeHJxcHNIS0w5Q1JETmllCnZ4RFAySXgyZVNYUTFMZHk1S2RhQmxYc3k1RFk0ZUxzcWVQWmdvdmxTZ1U1eXRrSXlKUkNDR1J5NjB6dEFlQzk1WlpWUWZpNzhKZzgKYmc0RFJNaWRCRzZTbVRGYXh6cmpIVzNDVmNyUTFJMmZXL2tqUVROVFpsTXNNbmdYZ0RMS0J5c0VmcHhGT3FKaG9lV1IwOFlWR1Zndwo2cFRTSStZaU5XTndGR243RnFCVTdVSmc4eFc3akpWeVdTMVZQM1FDbHJxdXBQK1lwTUlNL2JDN3VCanF4WEk0ZWZSaElmaHZRN3U4CnJyUGpiQ1ZtMERGa092MmlXVlo5MzFYZGZpOTZ4dk5FV2RKbm1qYmpPSDFtU1g5QldzWnoyb3lrd2JCZWNheFZFRVcvOEczVExuSmwKemFQYVJqVE1pbzRLcDh6d2FMUThiV1poSjRqWVpBT3RzdFBpTmVLK3kzWE5qS2E1anA2QmUycFJabU1zcmdoTWFud0ZZOVVrekpXZgpGMkN4K0lsNHcwVE1zM1lKYVRDcVhXUUxJUzJHOTRtdTRlZythdXBMOEpCcCtqOHRmZGNPZmR1eWg0eldrK1FSa3RDL3ppQ3V1MFBKCkRqZ0FpbjB5QW9vT2QxMDNVbVRHakdzTXNzREVramFScm9CQjJzUkxTa3AyZ1paRmJSSmVMY3RlemkwTmhHMytTTzQxZzZ0WC9uMEMKem8yQWt0R3hnb0taQ3psT2pTdnFXbExLUzVjMFN3S0xXaFFCeTdaSWZkSGJtMGpONUQ1czZlY1BYV0JFNEdmMU1oSjc0ZUFrbldkNwp5VXhHR1BiN3phSGlzRnRQc24xZGdCRUh3Qi8rL0kvaGhHaFk3YjNiRHgyc0h6N215aGpvOWx1bWFLQnUzeEF2c1FReHllWjNXUnhGCm4yTkxYNTBFUlp3bEM3SUFGR0NWTklOREpoZ2d1WjkxU25PeHlrYzFOZmdLd0hrYjRNR1hDRVE2TnhvZkF1T21leW1LbjF1VjNvMUwKaVRYV2tsT3dMWWFjc0N6MUJTU0NEMEczV0VWbGFKbGtqZ0t5S0hRS2JTMWJXVkpnd0JGWXZYeUdnVWZ3TFI4K2xqN0pmRWIreVNkZgp1QzgrK1puNy9KT2YzcHJRZjkyQWlRNkEvK1gvL0YvZDB4ZFAzY1Z1d3dOa1hidmJTdGQvRHQ1WGRTeGp6b09LVHZQTXdud2REMkZPCnFBVThGU0lDR20zS0N6bElJS1NWcVhVcEZ6KzZ5V1RNM01KWXhsbm1DSUFaVFlOd0RVQmNrdkQ1dWdCMFZUOHdkeDJndUZJRURxWEEKMS9rcm93aCtHWlJNSWo5YUZuTWhaemxoNms1MmFtM01Hd1piZFRtbjFCZW51V0xxRFJPd2VHMnBwSnFGeDF0STNLZHI2VlM4Mnc3dApmc2N0TC9HSDgrZjQ3Yk52OERhRi9xMkwvdXM0QVBJZmhuTjcydjErV0RRa1BUaVRXYVBENG1wMnlzR0VobWw3NXNpZExFSFRJdmtZCjdVSXFEbE9MTVI3clo1M2lJWjljbGliMWhxbFhPZ0c2UWtOckdLV1JhNXFVeUtsbXpoMjJYVmM1QTBaMThOSFZmUTFrSUlLRGE0TUkKRG5qQWtsYkJTVWRLbklERktGaXBWM29EaWVhSGFjK3dNZ2hwQ1pPUTB2ZVRSZEhVL0kxNXlFams5ekdhSDhDU2U4U2N0T1B5QnBaSwpBTHpmWFJ5a1lyY3A5RjhyWUFDZ2NEQjkrUGdoZlBuNWo5MFBMMXIzL093Wi91Nkg3NFlvV0Fnc083SStiSEZxeldaVzBEaUVrR3hwCm51T2tnWXhHS1QzTGJpSm0vRXp1NXdzL2dhUWNNQnRHYU5RMjJob3RaYWZTNTZpSkd3YzRZVGJ4ZWQ0M053WEgxUHBrQy9ZYWZCZXUKYTBWbXZWOWppNUszMk0yeWpZT0ZHV0xIL0hJUVZpN3dPOHNOQ3pYNW1YV0pGbVFuUWg1aWpHVVRVdmNSWTZMbENDeW1XYlJka3ZYZApKcW0vMzNPOFpWZzJ5d2htcG1PZmYvaVpPMW1mdUhxeGQzL3pkLzhnMzVGUDNDWnY3ellsSzZuWi8wRFU3UCtPMUN6ODdwS2MyWGZzCk9uT0x4VEpxbGRHS0tJUjlkc2FFcVBrREw0T1NSTmtmVGM4dUVqTU5LM2x5dGk2R2xUSTd3MFRsOEpMOEdIVHpZSmtBNVpDNUFYZHQKczRHSGhOTmw5QXNPMDdBWnE0SnBDQlpNUFdHQmZuRzJNT2QyVFJJcFlTcndKMkFCcDlZSHpNVnNZSkUyc2R3QlJocjUrZGdCeGp0MQpNdFJWUFhSZE8rUmRZQklWKzA3bVY3NE9LdmFteE9oc280eTZXZnBtZFFJWHo1LzZxcXA4MDZ5cWJuQVZuVCtxdnR0TGoyVnhON05iCkdLQ2grdzFYYlBJVjFHVWMwbWlzYWhObEsrNWxxYzdrMUJwYzJqNTVudnl0Vm1nMmN0VzBHVzVKeTJKcTRuSjJxV0t6c2pqUTJPVjgKSGZjelhBYUttd0RsT3NDWjJZZHo3bUpJdDRkeExZc0wvWTZuYlZ5TmhtSG9UbHJXNHdmTEFwWUhsbGRTQW1RdGtoUXN6b1VreStndApzNlJNRnZwYWppNDlrclZFbWQ2djZpc3ViM2Q5djkxdUpIMS9kZm9JejVXeEhISWYzenBnS3ZmNkw1UEZ3d21sN1c0clJXWEw5U1BvCnhDRnd6dUpHMW1aVk55bWRHSTFCcVNVeHo1ZVBlaWxabHN5YVFIWm1EZlFNSnFQSzArTmxrTTRkOHQxRGx0b0o1VFRuUTRzMmFnUzQKd2pxOERHWU92YSs5NTJ5UlYrWW1MaXlLOVVQb0xUZzRTY3ZIWUZFY3RDRTlIN0xDcjNFRVAzbkRYQkhGeDZobmNCZkF3dHJIZXk4VwpadUE2Rit1M1hZaDh4MDMzMjZGcVRuRkJGSXdUTEZ1TnZid3hzTVFJOTJ2emJaWU5NK0lYNEl6bUp6LzZqSS9BY0hIMi9kQnV6d2J2CjYyRzVPaDBXeEUzdElNa01rRUZHQVVCTGowc3VFVWVBOVF6bVl6NFM4Mk5hZVJzMTkyVkFqUGp3QlZnd0RHVy9QQ2MwZzFPTzdYQTMKaWtRcmx3Nk5OL0xHQytHenhiRU1NaUFxVHMyQzFJVEQ1aXhDWHJhYk40Y294ajNNOUlpZVVDYWNHZmNSVXV1aGFHc1Uzak5PSHc0ZApKbU1IRjdNVzFrakN4OUpoaTlUdngxZWxYWnJYQlJrWWNDNEFxY2M1MU4zSGZlSU55MFMvZ0VVQW90V1RJdkNSaThMNlZrVitBQXlQCnIrQUc0OTJ3UFg4NmJDNmVENXd2OXRGUGZqeHhacnhNWTR1N1JNa3VwV1pPMnpQNTljbXBCeHc4MFZMZjA1YlQrY2tLVlYyM3Qrem0KeFlJTzNJTDJMMmgvWXpSTjZSVlJzMEM3TExyUGtmNUUyZmp4Uk4rV3FKUk0vaGIwZHNvRWtQZVE3T2JhMnRKV2tHaGEwWUhUYVYrMQpuSmFaWG9iY296WkwwY1pVN0ZVMHpJeVlQeEN4RnhNOUxpY2UxOTJQbTRJblM1TzFSUW9pMzVuSWx4UFlXTU9FUUNTS05URkxNbXhqCnhuSUFpMUV3T2lHSzBPOTV0aDVIOFRuMVpkRklpYk0wRks5ZzhMVWZPbG9nRjJmUGh5c2krYThOTVpWN2M1ZlpBRHJIWi9hN3JldTYKbnFrWTNlL3Ava2EyU3M4V21XZE1lMTNJdk5ua0xYTmFmeFp5T1RYQW4zbkZ4Rk15OFpiRlNzRjhuNDVPZHpOOWdWMlowbDZPYlZCVwo1eUJia0hEZ2h3d1VyYVNCT0R0d2FHcGxnbVdDa1ZESGZPanBPTzNlNkJjVTFBdG05TWxJMUhjdXRMK3kxbGN1WkJxbkpNcXQ1SHhaCmhhU0xGZ2REQWRpR0dIU2dYZHNZOGRkMldudHZRaitBeFRTTEZJU1JOWkd1bGR3dXFWbzBNcjdpL1B5RnhGdmVGbGplTkdBdXpUcGgKamRtMU81SjAzU2pxZ0k3bkVpYlFWRkVSYUNmYStFUVhweXVycnNucERHYnViclFGbEVlMDh4OWhHRTNHeXFuVHdjVnNDeEh6OXowRQp2TEM0RTZqZ1NyQ2t2NE1Dd01rRkRMUHhFNWNOTGlwNmd4M0lBWE5GU3Y2MGxKanJXaVRseFJycjVYWDNTYThvV0V5ckJBcG1uU3FkCnB1bzc3ZmdpdmNmeXlYTjA3YnQ5ckczaGVVTVNuT3phUTNsaWJ3d3NyeVVPYzQyQVpoR255WTNOL044TjNDVFhxZE1NTlNsVzFiNkkKZVJQMGhoYUpkSVo5T29ORXUyN0lnWGR4V25Od200WThLQXh6RWp1alpqeTV0N2I0ekNJTWRjSnNGTWNNVFF0ZGNWTHJwN3hrbXQ0ZQpMUlVoQkNwelYvTjFhQm1PR2hMbXJuSE1MV29lWndwbm5kTHlqT2dYMnB6N1lnWnBuaHZXR1lERWpUd05VQVlIZ1BaQ3hrak50Rmw0CmRBNllGOHhYWHNTOWpLYWc5K201RjVmVXRkUjlEaFozZVRFWTVycUZ0Zkp0QmlqZnRvWTU5SjRIM2MxdVZLM0pVWGc2b0hWME8vdUsKWGNKQmY0anJXVFdOYWhSdUdDZzZSeldNN09QN3FuZmNVdDNNRU56TUMyc3dxSm5UZEIva2RuSTNpL3U1YkJKNEdEUmp3QlRBd2FtbAp6V3A3cmpqcHFLVk1xalp0MC81eFE3MUx3ZUt5bm1GMlloaDV4ekNPMGFOenp0N0toZk9PTDlOVUdIVXZXL0tsNmhUTkRZdXVZNTd2CnFIckZCTDRyTzVsR2tGelRmZnhHck12Ym9HUVQwR1FkWjV5MmxFS2dBeVI1WjVPa0VORTFJTFUxcVpVRlppNWlIMTNLU1o5b0FOSXMKenhEMGpCdDVsR2lQanFtMmRyTlF6b3lYeDJ4aytuZzQ3ZUF1djJLY3RqV2R1bFcrVG5nY2NUSnB6Y1ZpcmNtaUQrN2dWQ1pjYXBLNQp6aTJ4WTc3TE91Y0xLRXlqb0E0eTJsc3ZzRUNwU2xkeDd2RktNeWhGcTNqZWN2R1hOQk5uTVBrTUxLeFhzQ1Y5UTlhc0NsMWZyZ1RMCnFQUExXMm4zK3paVDBDY3pac0x0UTVhRzI4N1VkU1BOTWRTYlJWZDBzc1ZvYVR4YkNiTTJ1alhySVlITExQalpZQWhpOHVNb1ZrcGIKMmdLL0ZwaWxVU3RqQWM1QTAwSi9nR3lpV3VsQm03VTJwWVc1ckM4YVhKSjdOaCt4VHhabU9DVCtNdzlZSEdLVTl3eUw0L0tzL0RjSApreXQ2SDBQUU43SGJ2dlZCenF4S29HQTI5MFVIdldvRTMxY2Q5MExpWG1LY3B1OGt4cksvam1VWng4amVLRmplcUlZNW5CRlNmR21oCjVaMTZRdnpKb3c4R0FrMlJSeFZZQzUrRWg3NURncEFtVGlaTElucEZodEk2b1JrNlhOWVdTaHhQYmZRRFE2NlNGN2Zwd3BJSUNUeEMKMHlRVGdNRlRaQU5ZWTQxSTBjTFVnVERicHV6YW1RQ0RDRmVBSlNSM3htVE1VZm9PSHR5T2RVdU05MEFRL3IxWldOWm5DU2haa05KbQpTcWFZazNaNEVTOFp4a1VQKzR5YUtWQVNPUFpqc0doeitXQlZCc2tOMDhuRzBBMWtXWmlWMVZWekw4RHl0Z0Z6STlBd0RXdWF0UUtGCkxEaWZvTGh0V1lqVVI2OFRxdmhuaWlWaUZwVFNnQWw5bENHMTJlaEFCM2swVzZ5TW5Ra2w5aE5pTktaaEpFNERDVGhoY2xwdFpkTmgKZXBxTTlYQ2hTVWZXQ3NwTm13L09BS2RJbThOcnBMcVV1Z1VLbWhsU1hmclV3dFYxa0x4bG5RbjlNTUc2Y3phRU5YVExEMkFSb0lCdgpvNDZ4SG1PWkUyQ3ZmNE5LdlVEQnh6b2x6RzVCN29OTTVvV1lRazlIbC9RK0QzQ3RoNlk2R2ZiYml6c05scnNBbUN0QlE5ZTRlanlZCkk0cmpNYjVDT3VnaEhxY1hDVW4wR0hsL0FJNU5jZ2FyUDBjdGdJb0xSVHhDU3RVRUtFTHR2RjlrSmM2YWIxWjZ6aXlvS2NOdFV3NmEKZ3FPQzBETXRCSTl5SjBCZUJLZkwvakphTmwwa0tRTTNsU2lNYVpoNUI4TXN5YWdSNUw0T1RFMGVzVUVhZXR2Sm83VzVveDFHejVpTgpJbkV4Ynl5T0pIRmxFTk9zazRLRlg0ZFlkRmRsZmNRNHpZVXRTOWZ2aDVyb0dCbWRvVzIzUTcxYXkrZm03QThDQzk1RnNOd1Z3RndLCm1wUisxcm45L3NJdGwwdmNiemJJRFRZa0o1Sk9tR0N4REZRdUk0VTBRa2xVcU50c21saGV5NVNrTTgwU3hwODN1aWlpQnNvc0RKcFYKTWV0aXZjNGdhcG5ZRzBCQVk5SC8zSHNHQnB5NExWcmJXcloxdnMycVIxMFd0WTN1OUxnZHo3eFAzeGR6aHdBbWgwRWZwZ3ViNnp4YQoyUVFTYkczZ3FtVWs4M0VSbXRVYVFIS1BXUVlVeXdJUWtFQ25Wc1ZiTi8xSzUxbEsxSjRzM2FKaHpSS0NrQUpzT3JEODR0ZnBJL1pXCjUvbmN0WVlOaGZmc3M0KytnTC85Kzc5MmVSck5vbG5DYnJ0anA0Q0hvZk5kVDlldTljRVpJTU5tMWZVcldrTTFDRnNHQ0lzOUxYeXgKSHFDWnl5NXJtSkUxejJCblFxUmlxVEZnZnBVbWdmYWVWVDVGRGFmakJRKzdtc2ZiNHFqTWdPVnlGM0pXVWh6MVM1L0ZvYWJlTTBpZwp5WExLU21vV0FETWVoQldCSXBaRWRFb2Fud2VaWmVkNVcvM1FMRmNEc1lXaDUzcjh6WXRKaklXOVliLzN4Yjl4Zi9OMy8vWE9EYis2Cml4MU9Ec1pwd3BWNHJsOHNWckRkdk5CdU5MN3k5WUlCTXpCZmt6TStuZUVxT3J0Vm5xQkU2NnZtbkRTaUFqVU9nMWlHQ0JnRmdBaDgKRWZjWnFKeUJ4YVZoVFlzQ0xLR3I1cmdzSUhNQ0JKQ0VCb1JqUFpQOEdRVlE1cjFrSlZEY1dMY0V0M20wTENieUQwVDNOVE01QjAwWgpyRFNQbHMvdXM4YnhyVm5nWklsWXdFZWc2RGo1NE41bXk4NjFMSU40d25aSjJMTnVXWjRnSjFLNjYzVjV1Uk9UNHVvN0NKaTUzbnJGCndiTHU3UEljT3ZCRTA5YThPcFN4OC8rQjIxUjFTc08wbUZtemdUV1FJMjE1ZEhhSlVKTmFmbGgwZ2I4SGtJaHV5YXhSclpZSDJDMG4KSUdSZ09xTmk0RW9kQTBIUFdFODFpQ1BTbllmUjhDZXJGazJOUHB6TFVvRWdCUzFEaEI5R0pjV3FWeEJDRENkbE9FenFXakRHWnNRSwpXTEFTOGhHSzNRZ293UmtRaEh1TFEycEk0ZExmTXMzdEJ1d2tZcThWa21KZDZOaERhSnloL1krYkZXNjM1NlJkZHZqd3c4L3d4ZmRmCjN3dXczRlVMYzZtbFdaNnM0ZVR4WTNqeDNWT3dXSTFRSGUxNXRoTHZGSThKNlFOTml4UU5LNDNTZ3kxMDBTWGM2Nm1PTVIwSEJvb1EKYjNGbWFTQUhUVjVvWnBTdmlQeUhJYmVYeFdYUzFMUVFsOGt0VEhrN1IwK3lNSHA3Y0lkN0hROHBnaStld2NMS1FCbGQ3NEsxVVUwbgpLZjltY1NCWWpCaVJ0M3A3YVhmRWdQTWdYZlBaU2NBSmsveTNBM3ZCMkVQSnQ3bGhoZWZ1RGZ4Qjl2dGh1VDdCa0hGOFFsYm00eWVmCnVILzYrdis3ODJDNTY0QzVqSjZOYVZwY2tFelBGRGlEMTVnSUE4YjVwRzJJTGcwRDNTYTZ4dWJKZVFMQlVOR1BTc0RKNlZiUVBoRVUKbXZhdnNaZmFKZ3ZFN1J3ZDA2MUxrNk5uWE16dTZzRk9sd2NzUjY1a2lUL1JJZzEwYkk2V2lWVUpxVEFhbDdKb084UjRqSUlqenJ5UAorOFhiRlpwU09KK1B0SkJDcnpBRW1DZ3lBY1V6SFJzNEVOQ1R5TCtFZ3JuN0FKYjdBSmliZ0laVXlzSlh6Ukw2M1NaYUd3S0RXcHkrCjV6UUJya0txK0Q0dmFDODVOcnpJZWJFcmNGd0pna0tuaEh5eStIaUl3MHdIMFFwd2tuV1I1aDFoMHRxRWtrVmFWdWFTVGR6S1dlVm8KbWZZdjlRNld0U3dqZFRJTE0zWXJNMUJvMFljQWJnTFBrTWVrK3N6aWlDVUorMldPcE95cjJJTDBHaGoxdlpiV2Q5S3FWYWd3V1JXdQozY2c2VWs1MHlramMzM213M0F2QVdKWXpXSmJ6QkVEclpnVVBUeDdBTjgrK2RjR0x0amsvNDVHQnZsbXVHU2pRN2k2a25hWlF0R0h3ClhiZFh3RlIxMEJ5eGRhenFFUmdESndwN3lWb1dvS2kxWW1lQ3ZzWlFtVDdKNHpHWFViSWlrR2xNYkRZSk13Q0ZFeGhjbWhKMXFaZk0KcFR3MEJRWXRYZ1dKRGowSytWdXNMWGcvaXVWSWVXaEt0YUFmQkZ6UUMwQlF2RnpzTWhadHd1NWlmbDA2cnZUQkJuRVZzMFpackU2WQpmRWtnMHMyWFJrVFFmL2J4Uis3UC92UlAzRi8rMWEveXJHTzhEMmR2ZHgrdHpZUDFBL2pnNFFmdzM3LzU3MU9MUTZDcG1nYmF6WVhuCkM1MzlQRTlGVU1Bd2U2dkUybVRBOFJaTGlUbGlwbkhHR2NyVk9Hc1pCVHl1TXZwVk9aY0JKalRRQ0lPZHloUVptRFFqUE9SV1R2Z3AKNjJTOFYwdWpvQmlCUnF5SDlCWGpWUXd6V2NvakQ1bzhaMGdBa3ZzQklJUVhLZXd5YXliVXkxbWpQNDZyY05TK2J0Wm83bUs4aGdmcwp6bHVWdSs0bHU1RUhqZkNBRHg3UXJtK2NJMnZqeU5vNHNqYlI0ZFQ0SmZpbHc3YmpUSFFPTWUrMXZKaW9HcDhyUWFjRmFLMk1BcWdICjFBV1A2aWhnRVJ2ak8yeWhiRVI2VlhyRkpPTHZ4VHF4ZnNxVFJzSG1lUVpyb2puNmtEVjRMaTFMcUNyTjIwUmx6VHpFRUEyRFZYcEMKcWdrQ1BaTXJSUXNaenRiYVZYTHJMSmlaZ1FTMXRIWHdQalhxRzJSZjZFL0Fua1ROMG1hcllaMHZoNkNYMnYxV3JBb0JoNFBKdzJwNQppbGJOTjdFcTk1R0MzWGNMVTFDMFgzejVNL2Z6bi80WS91Ti8raTl1YkcwV3l6V2NQdjRJK200SDNXNGpOQzEzREhDcldqb2poaXhvCm9tdTFhQjY2SnV0Z25pNEZoeWNyTW5EOWdBQmlKdFpTWlJZbG4vS2NENE1LazZDek9Ua2V0T1pyQ000eUdEZHhLT2lZZUttSFdLUHYKc25KcnRpN0J5dkRXamNvRGl1Zy9uekdZY3ZGV0tKbHViVVprWGpKZ1ExN1ZpbkRuRmdHaWdhVE5ORXBWMWJoKytBaXJlc2x2UDNZWAp1ekVGdTA5QXViZUF1WXlpZmZqNEV6ZktEbkJ6bW9HcEdrOFE2TG9kOHpUbzJ6M2ZqNHM5VEhOV2VxVnpPSm5LQlNBWlpkUGU2Wm00Ck4yOWNUc0Ztc3BVaERaU3lOcmh4TU5Rd2Q4Sk4rWmg1eXlpeE1GbUpzM2JEaFRKYnVhQm9uQjZVbkFGREFsVHNkS011WUFGTjhYdzYKQkJ6UEVvdkNPc1hpS1ZnM1M4eDB5bVhVNjVBbHdmdTg0TzQxY01iV0pueTNFTGQ1K3B2ZnVrUEEyZTk0cEdMVU9IVGE3V2ovd2dEZwpnbnM2MHlRdTNiY0JIYWpQbzBYZit6alpPVWIzYlR4aG5Md0dWcW5nRDh5ZXdZeVMrUVB1WlZSYUZzQWkrNzNwR1dGcGJFRlFnQ0dVCnE4S2dOZmlTQ3Q4a3VKdHJucEIzTjNDTEVwWXNiRW1DUm5HWDlEZG9WaXQ4OE9FSDd2dC8vYzI5MXlydk5HQ3U4cVJkQlJ5K2NnZE8KN3UrODIvSGtCYUpzQmg1dWk4YldoMDdYWUE0Q0FVc0FCejlYQWNJeVpqQ2c4RnIxdHEzS01ZWDBkN3FHOWFJbmVpMS9NUUNOQUJNKwpJZ2FyNHJReUZOaHJLOW9GdEJsSVlXMU02TXVXQUMwRlFySWQrbGd2SkxWRW9rVlVuMVIxSTIvQ2pqRDYvcExFeXBuRURMYW1hWkE3ClRyNEVVT1QyZmZDQXZVOFc1cm8wemJuNTJaY3p0SzJLZEkyZ0JMU0lDRGpjQTVvcG00TUFtaXpPRWdCa1l0NEppTmd4RmJvLzg2QW8KRk1EMExtdnluN1dMRHFDWnJxbGhHS0psc2VkajhBVjRsbFhxSkl1dG9nSTRWRG9ObUFFRXpTR2dqVUpzQkI5RGpJdTVTTnV4N3pqWApKd2U3MkN3SlZFOGVQSEpmUC8xZGlLdTQreTdxcjdwVTd0MjlDRTBMZzJySHdVQ3lPTzdSeHgrNzdkbVovSkRjbFdhMVBuWEUwZVhICmx5YnB2c2F1NDZhTXZWQVNQaEVUa0NSUGkvUVBiNUVkYTV5OHBybHJYc1N3VVJ6dE1Ha2pHcVFmQURxcmNwUkNOa2twNFdBaFI4d3QKYU1qZXJNNHFJWXVyeEV2a3VhQnBMYWl4RkhVWDYydENxTytSM3NlV0FLbkJ4WjZUNi9odmVPSXd0MTN0dTFZNjVaQlE3L256MC9mcwpsYTcxblBZd0xPbzZ0allpRUEycmsxUHM5dnRvVVI1LytvazcrK0Vabm04dkloQjI3WmJuc2pockJvN3ZFbER1cTF2NUpqUU5qYVlWCjlUV1p4Y0hkeFNZbWQzSXk1OFlTT25rZnJTaGVWV1c4eElrVzRHUVh1aTZCaTl2YWRwZEY2d2ZvdTMyWUFpMjlvOVg2NkdSbnhnSUIKU2p4aU1vSE5SZ3FtWU11aDlaVWJSVFJ2bVJPdk40T1p2ZDRFQ05URUJaa1ZJclZCZmRiaFBzUnZ3Z21CdGM2Q1JEdDcxd2FKdWJxaQpHLzVtbTJhdmNIQi9jL1lpMHI3OWRpdjBhOGFpdUsrLy9RNmZ0YUd1RGZDZE93dTc5K01pMzNQR01lRGM1ZlgxQlgwallRUE42aFFxCk91SDNkSExmYnJjVFdzY3VBQjZ2emswSitUYnJJckpOREVCdVNBanN0UTFiN2VvNVNMY2NHY2wreGZvU0cwZUxXWHUweWQreHhTdTIKWElYS0JxeHJXd0VGdlM0M1NKelFLYktNdUZ5dUpPYmFFaUZydHk4T2ViY085eEdneTR5YitKMnpLdStGaFpreE9HNWtjYUxWbWZGQwpaYjMxRkRBOFVhQlpuc0xtL0tuakVwdUtSNmpiYTlEaWc4VmlJUUF5NXhmckZWYzNTdzc1RWJoYUdWSElvS2xsRnM3Z1ZPc2tmRWJCCkQ4TTgzc1VqcllGNzFUcVZ6TlpSaStJZDZROENVaTFiZWcrM2FMeFlCbnRaQVFoOVJrZWZVYTBObmYybGp2ajhPYkxZWDU5KzZEYm4KM3g5eUJ4OTBDOXVrcjNmV29yeXZGdVpLNThDQngrSjJzVnk3MWNrajJKdzlkY3YxS1p4ck54dDVQQUNvMzI2Y0pIL3Vkd0tNVHJZTAoyR3VQTmZhK3VacWVSMXhQdW5uV2k3V3U1cUYzYmJzUkFOUTJYS3EwTEFNOXZrVjlmTzNDMy9CQVZBS2xXSnQySjBCd0VoOGhZUERBCklRWU9XeGY2VEs0bktrYWZrUUJ5Rm9IQXduNTU4c0R0TmhlNGZ2RFlXYURSdWF0YnNMNFgxdVFJbU9zZGcwTkE0bG9jbDdtbUMwQXgKVFdvSURNenZGODBhdHB2blV0ekcwOVZJNTdobHM0S0x6Wms4bWVrVEEyTy92WWd2em1Cb2t0V2E4Wkp4ay9adFhKejJHbTV2b2xzSwo2WnFWMisyM1pFbVdaRW5PaFk3Ulp5R3dYWkJRWHp2U0lSTWdrSUIzbVV2NFVtdHlDV2plbTRzLzRrWEY4R2lPemV4WU8zWVN0TS9PCmhwOSsrbE81djI1V3c2ZFBQcFpZaGlZZG5nenNtdTI2YlgvNjZBT0paN1JkMnplcmh3T0JSZkswZUxaODA1eHlKbStaOU9pSmF5MFcKUGFHZ0p4VVVyK0JyMlUvaXBIait3SG5EYmR1djFvL0VJOGRKa2J0MlQrLzFhQ0N3OUp3VXVYcndjQ0RnOG12SVorUFB1VndzaDg4KworRVErTXhkdi9lanhaMGhndWFwTU9KKzdndThyV0k0VzV1V3N6cVhQc1FSUUtUZmdTNkJ5TDU1K25ZVGpvc2xwM2N1SlQzNE5vbFBuClAzd2ZGMjlONzUxVEt3S0h5K0lrTjdFVVIydHlCTXl0SGlPNHdiR2M3QitENm1VdUI4QnduVVdPcjdEdnVCaU9oK0JXamhlODZqRisKc0g3Z3Z2ajR4N0RaWFRpcjdaRUwwU2IzazA5LzZyYjdiYWg3dnpiVmZJbkhqaUM1eXJJZkQ4SE45TTRCSU9BbFlMbldJbXdhY0I4OApBVmVkYTIxUC9JSG9GK0w5RjF1U20xL2ZlRUhqTFQzbmVEbGVYb3YxZWFuckw3NzhHZnlIZi85bjQ1TG00dnJaeHgvNXYvanpYL3BYCmVaOGpvemhTc3VNeFBscU80K1c5NDNrNm52MVN5L0RWVjErRlhnREh5L0Z5dkJ3dng4dnhjcndjTDhmTDhmSStYLzUvQVFZQU9HbDMKd2MwMFM0VUFBQUFBU1VWT1JLNUNZSUk9IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjIzNTMgMCAwIDAuMjM1MyAwIDIpIj4KCQk8L2ltYWdlPgo8L3N2Zz4=\") !important;\n  background-position: 0 0 !important;\n  background-repeat: no-repeat !important;\n  /* stylelint-enable */ }\n\n.equatio-input-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  width: 48px;\n  height: 48px;\n  cursor: pointer;\n  outline: 0; }\n  .equatio-input-button:focus svg {\n    outline: -webkit-focus-ring-color auto 5px; }\n  .equatio-input-button:hover .equatio-input-button__icon {\n    color: #e5e5e5; }\n    .equatio-input-button:hover .equatio-input-button__icon.equatio-input-button__icon--red {\n      color: #860909; }\n    .equatio-input-button:hover .equatio-input-button__icon.equatio-input-button__icon--blue {\n      color: #33c5ff; }\n  .equatio-input-button[disabled] {\n    opacity: 0.3;\n    cursor: default; }\n\n.equatio-input-button--small {\n  width: 48px;\n  height: 48px;\n  margin: -5px 0 0; }\n  .equatio-input-button--small .equatio-input-button__icon {\n    width: 48px;\n    height: 48px; }\n\n.equatio-input-button--with--menu {\n  padding-right: 10px; }\n\n.equatio-input-button__icon {\n  color: #F2F2F2;\n  width: 48px;\n  height: 48px; }\n\n.equatio-input-button__icon--red {\n  color: #E51010; }\n\n.equatio-input-button__icon--blue {\n  color: #00B7FF; }\n\n.equatio-input-button--fixed {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  /* stylelint-disable */\n  /* stylelint-enable */ }\n  .equatio-input-button--fixed[data-balloon] {\n    position: absolute !important; }\n\n/* stylelint-disable */\n/* stylelint-enable */\n.equatio-input-area {\n  padding: 0 15px;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1; }\n\n.equatio-mathquill-placeholder-text-paragraph {\n  margin: 2px 0 5px; }\n\n.equatio-hint-tip {\n  display: flex;\n  align-items: center; }\n\n.equatio-hint-tip__texthelper {\n  height: 42px;\n  margin: 10px 5px 0 0; }\n\n.equatio-hint-tip-description {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  background: #EEF1F5;\n  padding: 7px;\n  min-width: 200px;\n  color: #000;\n  -webkit-font-smoothing: antialiased;\n  position: relative;\n  border-radius: 10px;\n  margin: 0 10px; }\n  .equatio-hint-tip-description:before {\n    content: \"\";\n    position: absolute;\n    left: -16px;\n    top: calc(50% - 8px);\n    display: block;\n    width: 16px;\n    height: 16px;\n    background: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 31.7 31.7'>%3Cpolygon style='fill:%23EEF1F5;' points='0,0 31.7,31.7 31.7,0 '/%3E</svg>\"); }\n\n.equatio-form--omnibar {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  background: #F2F2F2;\n  width: 300px;\n  padding: 20px 0; }\n\n.equatio-form--omnibar__subtitle {\n  margin: 0 0 10px;\n  font-family: \"Open Sans\", Arial, sans-serif;\n  color: #484A4F;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.85em; }\n\n.equatio-form--omnibar__question {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  color: #484A4F;\n  -webkit-font-smoothing: antialiased;\n  border-bottom: 1px solid #00B7FF;\n  font-size: 0.9em;\n  padding: 2px 20px 2px 0;\n  margin-bottom: 5px;\n  display: block; }\n\n.equatio-form--omnibar__linkset {\n  margin-top: 20px; }\n\n.equatio-form--omnibar__title {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 600;\n  font-size: 1em;\n  margin: 20px 0 5px;\n  color: #484A4F; }\n  .equatio-form--omnibar__title.equatio-form--omnibar__title--with-subtitle {\n    margin-bottom: 0; }\n\n.equatio-form--omnibar-message {\n  margin: 0 20px; }\n\n.equatio-form--omnibar-message__title {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 600;\n  font-size: 1em;\n  margin: 20px 0 5px;\n  color: #484A4F; }\n\n.equatio-form--omnibar-message__text {\n  margin: 0 0 10px;\n  font-family: \"Open Sans\", Arial, sans-serif;\n  color: #484A4F;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.85em; }\n\n.equatio-form--omnibar-message__list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  box-sizing: border-box;\n  color: #484A4F;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.95em;\n  font-weight: 600; }\n\n.equatio-form--omnibar-message__list--hyphenated {\n  /* stylelint-disable-next-line */ }\n  .equatio-form--omnibar-message__list--hyphenated > li {\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex; }\n  .equatio-form--omnibar-message__list--hyphenated > li:before {\n    content: \"-\";\n    display: block;\n    margin-right: 5px; }\n\n.equatio-mathquill-input[disabled] {\n  color: #979797;\n  cursor: default; }\n\n.equatio-mathquill-wrapper {\n  width: 100%;\n  position: relative;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1; }\n\n.equatio-mathquill-input.mq-editable-field.mq-math-mode {\n  border: 0;\n  width: 100%;\n  top: -20px;\n  position: relative; }\n\n.equatio-mathquill-placeholder,\n.equatio-mathquill-input.mq-editable-field.mq-math-mode {\n  opacity: 1;\n  -webkit-transition: opacity 0.1s ease-in-out;\n  -moz-transition: opacity 0.1s ease-in;\n  -ms-transition: opacity 0.1s ease-in;\n  -o-transition: opacity 0.1s ease-in;\n  transition: opacity 0.1s ease-in; }\n\n.equatio-mathquill-input.mq-editable-field.mq-math-mode .mq-root-block {\n  height: 100%;\n  overflow-x: auto;\n  font-size: 1.2em; }\n\n.equatio-mathquill-placeholder {\n  color: #A9A9A9;\n  font-family: Roboto, Arial, sans-serif;\n  font-size: 0.9em; }\n\n.equatio-mathquill-input--hidden,\n.equatio-mathquill-placeholder--hidden {\n  opacity: 0;\n  pointer-events: none; }\n\n.equatio-latex-input {\n  font-family: Roboto, Arial, sans-serif;\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  resize: none;\n  overflow-y: auto;\n  font-size: 0.9em; }\n  .equatio-latex-input::placeholder {\n    font-size: 14px;\n    color: #A9A9A9; }\n  .equatio-latex-input::-webkit-input-placeholder {\n    font-size: 14px;\n    color: #A9A9A9; }\n  .equatio-latex-input:-ms-input-placeholder {\n    font-size: 14px;\n    color: #A9A9A9; }\n  .equatio-latex-input:-moz-placeholder {\n    font-size: 14px;\n    color: #A9A9A9; }\n  .equatio-latex-input::-moz-placeholder {\n    font-size: 14px;\n    color: #A9A9A9; }\n\n.equatio-sketch-input {\n  width: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1; }\n\n.equatio-sketch-input__placeholder {\n  font-size: 1.5em;\n  color: #CCC;\n  opacity: 1;\n  -webkit-transition: opacity 0.3s ease-in-out;\n  -moz-transition: opacity 0.3s ease-in-out;\n  -ms-transition: opacity 0.3s ease-in-out;\n  -o-transition: opacity 0.3s ease-in-out;\n  transition: opacity 0.3s ease-in-out; }\n\n.equatio-sketch-input__placeholder--hidden {\n  opacity: 0; }\n\n.equatio-sketch-input__canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 200px; }\n\n.equatio-sketch-input__placeholder__image {\n  height: 60px; }\n\n.equatio-sketch-warning {\n  font-size: 0.7em;\n  vertical-align: middle;\n  font-weight: 400;\n  display: block;\n  margin: 0 5px; }\n\n.equatio-sketch-wrapper {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex; }\n\n.equatio-sketch-wrapper--left {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin-right: 5px; }\n\n.equatio-sketch-wrapper--right {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-align-items: center;\n  align-items: center;\n  margin-top: -42px; }\n\n.equatio-sketch-frame {\n  width: 100%;\n  height: 100%;\n  border: 0; }\n\n.equatio-sketch-wrapper--left--disabled {\n  background: #E7E7E7 url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4gIDxnIGlkPSJQYWdlLTEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgIDxnIGlkPSJHcm91cCIgc3Ryb2tlPSIjRjVGNkY3Ij4gICAgICA8cGF0aCBpZD0iU2hhcGUiIGQ9Ik02LjUsMCBMNi41LDE4IE0wLDYuNSBMMTgsNi41Ii8+ICAgIDwvZz4gIDwvZz48L3N2Zz4=\") 0 0/18px 18px;\n  cursor: not-allowed; }\n\n.equatio-prediction {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  background: #FFF;\n  box-shadow: 0 0 18px 0 rgba(51, 51, 51, 0.6);\n  border-radius: 5px;\n  max-width: 300px; }\n\n.equatio-prediction-button.equatio-prediction-button--selected {\n  background-color: #00B7FF; }\n\n.equatio-prediction-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  box-sizing: border-box;\n  width: 100%;\n  font-family: \"Open Sans\", Arial, sans-serif;\n  font-size: 0.85em;\n  font-weight: 600;\n  -webkit-font-smoothing: antialiased;\n  letter-spacing: -0.2px;\n  padding: 10px;\n  cursor: pointer;\n  text-align: left; }\n  .equatio-prediction-button:focus, .equatio-prediction-button:hover {\n    background-color: #66d4ff; }\n  .equatio-prediction-button:focus {\n    outline-color: #0DA0A0; }\n\n.equatio-prediction-button__text {\n  margin-right: 5px; }\n\n.equatio-prediction-button__icon {\n  max-height: 30px;\n  max-width: none;\n  margin: 0; }\n\n.equatio-prediction-button__icon-wrapper {\n  max-width: 100px;\n  overflow: hidden;\n  margin: 0 5px; }\n\n.equatio-prediction-button.overflow:after {\n  content: \"...\";\n  display: inline-block;\n  position: relative;\n  padding-left: 2px;\n  vertical-align: text-bottom; }\n\n/* stylelint-disable */\n/* stylelint-enable */\n.equatio-traffic-light {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  -webkit-justify-content: flex-end;\n  -moz-justify-content: flex-end;\n  justify-content: flex-end;\n  margin: 5px 10px 5px 0; }\n\n.equatio-traffic-light__message {\n  border-radius: 5px;\n  padding: 5px 10px;\n  font-size: 0.9em;\n  color: #FFF;\n  font-family: Roboto, Arial, sans-serif;\n  font-weight: 500;\n  -webkit-font-smoothing: antialiased;\n  position: relative;\n  margin-right: 8px;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.2s ease-in-out; }\n  .equatio-traffic-light__message:after {\n    display: block;\n    position: absolute;\n    top: calc(50% - 9px);\n    right: -10px; }\n\n.equatio-traffic-light__message--shown {\n  opacity: 1;\n  pointer-events: all; }\n\n.equatio-traffic-light__message--ok {\n  background-color: #28D88C; }\n  .equatio-traffic-light__message--ok:after {\n    /* stylelint-disable-next-line */\n    content: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='12px' viewBox='0 0 6.2 7.1'>%3Cpolygon class='st0' points='6.2,3.6 0,7.1 0,0' fill='%2328D88C' /%3E</svg>\"); }\n\n.equatio-traffic-light__message--meh {\n  background-color: #E5BD13; }\n  .equatio-traffic-light__message--meh:after {\n    /* stylelint-disable-next-line */\n    content: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='12px' viewBox='0 0 6.2 7.1'>%3Cpolygon class='st0' points='6.2,3.6 0,7.1 0,0' fill='%23E5BD13' /%3E</svg>\"); }\n\n.equatio-traffic-light__message--error {\n  background-color: #B74444; }\n  .equatio-traffic-light__message--error:after {\n    /* stylelint-disable-next-line */\n    content: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='12px' viewBox='0 0 6.2 7.1'>%3Cpolygon class='st0' points='6.2,3.6 0,7.1 0,0' fill='%23B74444' /%3E</svg>\"); }\n\n.equatio-traffic-light-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0; }\n\n.equatio-traffic-light-button__icon {\n  height: 32px; }\n\n.equatio-traffic-light__message_button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 0.9em;\n  color: #FFF;\n  font-family: Roboto, Arial, sans-serif;\n  font-weight: 500;\n  -webkit-font-smoothing: antialiased; }\n\n/* stylelint-disable */\n/* stylelint-enable */\n.equatio-input-button-background, .equatio-input-button, .equatio-speech-button {\n  /* stylelint-disable */\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CQkKCQkJPGltYWdlIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlO29wYWNpdHk6MC40O2VuYWJsZS1iYWNrZ3JvdW5kOm5ldzsiIHdpZHRoPSIyMDQiIGhlaWdodD0iMjA0IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU13QUFBRE1DQVlBQUFBL0lrenlBQUFBQ1hCSVdYTUFBQzRqQUFBdUl3RjRwVDkyQUFBQQpHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFZbnBKUkVGVWVOcnN2Vm1QSkZsMkpuYlBOWE56Cjk0amNhdStxWGxqTlVST2dDQklnb0ljaEJnTlVQM0NlK1ZQNVBIem9oa2FZa1NDTkpJSVBISUVRU1hGSWRsZDFWV1ZXWmtUNFlzdlIKMmU1bVpoNUxabVJtUktaN3BzUGN6VDE4TWIrZm5lODdxM1BIeS9GeXZCd3Z4OHZ4Y3J3Y0w4Zkw4WEs4SEMvSHkvRnl2Qnd2eDh2eApjcndjTDhmTDhYSzgzS2NMSXJwZi9lcFhRRGNQWHIvNjZpdWc1OEh4YUwzZHkvRUhlSGVQTVI0UC9lMWYvUEVRM0NvdzVxNVhYbjd4CjVjL2NmL2ozZjNhcGhmbnM0NC9nTC83OGwvQW1Qcy94Y3JRd2IrdllYZnY0ZnZqNG9mdkZ6MzRNejg4djNOLysvVC9GL1k5T1Q5d2YKL3Y3UDNNVjI1LzdtNy83aHBsWURiK2s1eDR0ZDZ1TWh1QldRd0t1Q1pyOUg5L1Fad21aWHJ0K3VjN3pmYmZmRHkxQXl1QVpJNEFpZQpvNFY1M2NjSVhnVk02MmJsSHA0OGdHK2VmZnZTSDJxNVdMb25EeDY1cjUvK0RtOW9PZkFWOWgwMXpQRVFYTW4vM1FFZE1Lc1JDQXp3CjZaT1B2UjFidjFpdTRlRUhuOFg3ZkcxeDhPZERYK3k3NmJWMzZNOUdyMUUzSy8vd1Eza3YvaXllUU9VLysrQVRmNWsydXViM08xNk8KZ01sT3BWTzM3a0hRUEZnL2dKOSsrbE0vQmtjQXhtYS85ZCtmUDRmVFJ4L0kvcUh2ZmJmZngwVmRWUXRmMTZ2cS9QblRZckhUVHI5OAo5S1JhUFh4U25adzhpdGYxNmVPSzl5OU9IMVQ1ODd0Mjc3ZG5ML3hxL1NqdXgySHczYTVWOEN3YVg1K2NlckpBa0FNcEI5SEo4Z1IrCjl0bnYrV3VBNWVqV1BsS3lnOGNBRHQxZW5xemR5ZVBIOFBRM3Z4MC9EbFc5Y00xeUJmdnQxaTJhTld3M3oxMVYxVzZ4V0VMYjd0eVMKd0hXeE9kT3pWRlc1bXZidnR4ZnB6T1VyK2Z0REgzSVllcmZmYlNOTnN0ZHc5QnF5ajkrTDNzUHQ5bHVrOTNUYjdUa1NPUG16dUxhOQp3R2ExZHB1ekZ6aWlXN1IvNVI1OCtJSDcvbDkvZ3pOVURDK2hhSGhjTE8vdmR6OEVtcmdsQytKV0o0OWdjL2JVTGRlblFCWWlQazdXCkFTcGE3UDEyNDZwbUNmMStKNERvWkxzQVd1anlYQVpGVGMvRHZuZDkxOUpqYS9sN0pEQzA3VVpBdzM4M3NZRERRSTl2VVI5ZnUvQTMKZmIvSHVsbVNoYVRIRFV6MEhLVDNkRjNYSWdPcWEzZEluOG4xN1I3cE03cjIvQXpEWWljcmhNdVRCMjYzdWNEMWc4ZnV4ZmRmVHdCMQpEYkM4VjhCNWJ5alpGYlRMWGNMeGhiSUVhc1ZVYUhQeHdtY1VxU0t1VWxWOVY5RnpxbjYzbzVQOW91NzIyNnB1bXByV2NnMU11QlowCjIyR04vVkRUcDZucE9RdkVyaDZHZmQxMU83cTNYbFJWUS92NmVueWxUeUdQMDhzc3lGclUvSGNPN0RXR2dkNEQ0M3M0OFh6Nm1qNEUKZlFiOUxPM21JbjVHL3J4OFpRb0lUVk9kLy9COVFlWHk3M3dOemZQZTBiWDN4YTBNZElrQnd2LzRuLzdMcGRaa2pzZjMzUjUydENoVwpwMCtnd2c3NnZvUFdudGYzdlZ6NU5vRUNhQUhEd0ZaaHZ3TmF4VUNyRS9xdVl4b0ZkTWFYTFlITDBXTG1oV2FBSG9EL2V2NThqUkgwCmRCTjV5MWFGWGdPWm1vVXR2UWZXZFVQMHJjV3ViWkZBUkUrVHZ5V2oxc3ZWWGd6NWpRbWRibkh5Q05zQmNYUCtmWHdzZTlOd2hRTlcKaGdPcTdza0MrQURuYnV4MzF1ckF1MnhSZnYzclg4TXZmL25MNHJ0KytQZ1Q5OWxIWDhEZi92MWZ1d01BT1dodGlPN0FvbUdkZ2RBUApQVk91Zzk0bkFNKzZCblJ0T2prRDQ5RFJpOURKbnVpVXIycXdOUWNCMDZaV0xuSGE2VGVMM3hDRm1oRXdLcVp0QkJvNS95RzlFaitJClJQdHd0UEFUWUFoTWkyYUpqRkw2VTJ6M200UFBuUUdSM0g1MCtzVDkzaGYveHYzTjMvM1hncUtSeFdGckhrQjBCTXg5K1c1c1VYNysKMHgvbkZpVitYeEx3a0FsNFdkd3N1amZuTC9SK1ZmdEYzY0IyZDVGQTRKbjNOR0pCaUVZeEtKZ0h3WUE5V3hDNWIwREl3QU42WHlpTAozSFlDSHJJUURNQVNMQTRPbjV3aE8zTmpzREtpYTNRL0tKaGtrWXFwaW91ZG56cjA3Y0FMbUw2bmZBRFNPSFRmczg1aGFKRkZrc2lvClBMOGlIZFFRbURiYkM5bEg3QzUzR3JDakFETkhRUUVXdGpoLzlxZC80djd5cjM2Rjc2SzFlUmNCVTRqNUF4YmxLdDFDSisyS0pRT1EKV1BaQ3FmcU93TUdDSEwydVR0b3FiL2ZHY05oeWVBV0JNRUJQcjhMN1pBV0R3a21leHg2dkJCS0V4QnFaMnZoWjBCREZ3OUxDNk5tYgpyUW5aTW9HaFBRY1pHQjVZbXZTREUrTTI4SFVnTU5zQ2g4R2VKNC9UR3c1aWtRaFVEQTZpYmdNN0JOcmRacmpDNmhTV1o4Yml2SFBPCmdYY0NNSWZvVjM1N2JGSEcxNnFxeEZyc2RsdW1YcjVhTERtR1FscWpaYXZpQjlJWUE0R0dGcDBQWURHQWVNWUNnNFBPNDE1NENHMTUKNGV1MnN2Y3dxNE9xYjhBdWZGdjJSN0RvMm1MUG1PNkRLQ0hRUU1Odndmc1pJSExiKzR3dXFYVmhnTEFGRWFBd2VPVERLSWdVUVJGQQpkSnV1dEwrcUcza1RPamtNOVAzRkRMYnRkdkJpY1JyY2J1Y0JkTURpdkpNMDdaMFEvYnp3WmdUOUJDaTdpODNJaXRSQ3NmWkV1MmdSCmtlVUF1ZDhQblNlWjdObEtFSVZoc0FoSTJPcndscFlDcjJ4YWY1V1hWYzZDZ0FPSHpJZjZYZ0NFcWwzbytTVG1SY01NR1ZVRGNRNm8KMVBFemRDeGZkMGx2WjhBUWkrS0MvdTg3K3dPUCtsRmsveUJTaHFGQXNPUkZqL3hoUEg4ZEJsRTFpT2VBckExamo4NFlCQnl4U0FTYwp4YURvRk5EeGZYcEVrQTNpdGlhNnRqZTZ4dGY5ZG9zTUZvdnBRQmJUQ1RRTlJvNEJQRnFZdTBlL0R0S3VBQlRTSVpGMnNSVVJlaVhBClFZMmNNekNBcjU1ZHhnb1dBWWE0WmdVWWRFMlJkZ0VJQXdwNVphamx5ZDIwU2NlQVdSVzVvRWdQQUJ6bUdBekVEWmlhbDYzUnI5eXEKcUg1eFlTRUxNQlJBTGdMREh1ZjFIMitEYmdVYzlQemVxRng4UGgwQ01vbE9yRktnYTNUTWhqRnc1dWdhMFRSOGwyamF2Yk13T2YwYQppL3I5ZmdOblo5L0xDdU5VbGRQSEg1RVkzMEczMjVDWVAwdHhGUVlGOWhKYjRTdUxDMW9Yc3VEcFdnVmcwUE1xQVFGcFpRWU5uWEU5CnN6ZFE2bFd4VmJLNFJyNlZLNlN0Z2tlM0lDZCtaenlMckE2OWhFZ1gwelV1QUNoZlV3cVVRU1FUWTFDMUNocFFlTkVONHUxU05xZ2cKa1MxckZMWWlvbFg0QlZ3ZlFNSmJlbWZtWndJU3RrVEE5L3ZPbm9NOXF0WmhTMk9nRW5zMXNMWVJQYWFnaFFEU2lpamUrdUVqck9xbAo2Q2tPaEhiZDN2M3cvTnZDMmdTbkFNZHY3aHROZy90dlZSNlNWZmtBdUlhRWM3dXlMR0QyZlBuVjhvRjR0RnF5SnF4UjlydHRrY1BGCm5JaUVybG9NejVhRTZSaFVLdTRWS0h6bDlZQU1vRUhCWXBaRnJ3Vnd3dC9tNytGQXJSV0VBSjlaR2JVd1RwVzVzOXU2c2dvTmszeGoKZGg5bHNZS0xvTkdYVHJyRmhQMmdDeDE2ZnNVQUZIclIzbTczYkRRWVVBU0F1RzhROU5JWlJWNERlc1lva1ZVR2s3eEczN1hCT3NtVgpEeHRiSGZhMHJWWVBoQ1Z1THA0TGlKYWtoVUpXOWFQVEU3STJuK1YxUGZmTzJ0VDNHU3hxVlpDc2lucWFOdnN0OERWUUw3WUErNEhBCnNydndYcXlJYUJSUFp6MnZMdUJLQU1KQTRBVlBwME5aK0F3VTNvSVRZTlMwQUNNNFFQMjRESklFR1BrYmZxNnJGQmpzS3NNRXpPaE4KRTlOU2dFWXhJREFBTlJwaVRoSlFkSitnQmFKSDJWekcvSTlmWEdrWDMyUHFoRXl0MG9LRzNvREVXN1lVUGF1ZUFBNHdvR0MyVHl6UApnQjI5b1FDSFhvV0ExVllNTkJTVDZBYzZkZ0ljMHpoQzF3aG5zTjJkQ1ZVTElOaTFPd3dsQ0Z6Yjg4UHpvUWg4em9xMUkyQmVud2VNCkkrNjd2WWg1emgveGkyWXA5SXQxU3JOY2U0dkFxeWpYUlc0TFdSYzhQUzh1L2h3b1RvQ0MvRmh0b0tqMU1TZjc5YmtNRXEvN0NWUm0KUmNRYW1kWEpLUnJZdm1oVklyRHRPK1Y2Wm5RTU1OQXlvMjJsVmxBQVNaeEZoWHc2KzlQVGU2WmFUS1VVSEdKdEdEeWRBQVlWTkxUZQpPN004N0VGZ3E5TXBjQVlEamoyWHR3UVdvNk5xc2RqTDVsQTVwWHo4Q3B2VkNTZVhEa3pUbHVzVHZEaDdUcCtnZDd2OWhSdFpGY2c4CmFYZWVvc0Y5dENxSEJEMEplQy9KajdzTkFXZWxJcHowQmxzUkFvNVFMMW9BWWxYNFYvVWFHaWR3TUNCbzRiTWxNYUN3WlJHUVpJQ2gKWDdHRy9IRUJqb3UzQ3oyVE9RUE1rcGdEUUJ3RkUwZkVERkFtYVNZNUpjdXZTc0djZ1NhSWZOTXFhamtDSGV2RlNoQUlNc3ZTQ2FBSQpRQVJGQmxGbno1UGIvTGhwbmM2clE0Q2ZKeFpKYmpPZHF4WUN3a0VkQW1KMTZCUXhzTmppQUdtOVd1UCsvTVZ3UlJ6blhsQTBlRWZBCkVyMVJIQmRSc0xDSVI2L2F3L21nUWRncTBJS2gyejFabDZvT1FLRmxURUJ3bHJ6SVFIR1NKQm1BRXZZYk9DSm9NbkJWQVNoS1c4STIKZU5zZ2VNcm1FaHZudnQvRTJNNXN3M1VJSGpLalh4SnJVU0RvTnFkaENTUVlnTk9weFZHUWdJSkc3ME80cmZzamNEaHhUVzdYdlZvbQpGRXZHMm9uTXFUZ00xSVZOWkc2L0dYTHYzWDBHRGR3M3NJUzR5b3Z2bmdLYi9Zdm5UeFVvVlJXdGlsaVVUZ0tPUXAwVUtHalVDMnFsClUxalRtVkt5ZkZHc0NGOEZESXNJR25BTGZRd1lLSXZNNGhSV0o5Y3lUaTFPb0hrNUxSdG5BZnVnVjRKN0xBWHhpOXVXZFZuY1JyczkKRktCSjIyUmgxSG9ZRlhOSnUwUlF5UDB1c3lndHZRd0J5bmRPYnR2ekFHUS9nMGlBSXhUTzJYMEJqRkU2NkFOQSs2RWJGb3RWdERaNwp6UnlRdU03cTlCRzJ1L05oRlBDODg2Q0JlMlpaSnFuM25QTzFaSzNDcnVLaEY2dEMyNHFvZ05JdTRtR3FLNkNtMzdoU1VBZ1lFZ2dVCkNBc0R3SUwzTTFEb0RYU2JucmN3d05FKzFUTHllcVp0TXRBa3J4bGJscUJuVktOTUtGbU13MlMwTEdFRVJqcG1Tc3ZNaWlUOUV0ekoKenBWMGpLMUxCSW1BUXEyTVdCWUdnMnNEYU9oRW9sc0NFZ2Y4NlRsdEFvNkNpSXhaRzZ3UWZTU3hOa3pUaEs1SmNwMG5pcllRcThQVwpocjFwUUVyR2N0UXVqZC9jVmREQWZRUUx1NHZwekFYYnpRc2ZhQmh4NTRwcEdMdUUyWUxRRDFjeGNEZzlFZ1FjdmlaMlVIUDlDT3NVCkE4SENMQVpuSkRJWUJDeE9NdDkxZjN5ZVdKd01ZQ045VTFpWmpKWUZxeEtCTXFWa1V3c3ovVjJtRnFha1pVTEpJbkFNSkhOMExGcVUKVEtmRWE3SW9yVm9hSjhEUis0UGVWK0MwOXJldGdJWWRCUFM4WUhub0UzYWNmc0RhaHQ5ZkxCQ0ljNkRuVkJ1eE1sVTlOTXVUNkg2KwpMNkNwN3lwWVBuejhDWXlpOWhDOFlMdnR6ak5NMXV0VDM5SHZ3dFlFTmNoWThXOFJkQVZJc2hRcTVUSkxFYXlIZ1lCQjBqQVFRQURqCjRqVUFaV3h4TWtxV3FGbndxQmtkRTNDdzEwMjNFeTlaY2MxcDJaaU94YU9TMGJKRXg4YWVzc0ZTb1MzWUtER1lQdE15U3NVVVFKMDUKQkxxTWNyRjN6Q3lLV0JZRkJnT0hidE1KUis4ellIRFlHN2pDZDVhL0dTUkdwVmJWZzZRUmRSWnRaV2MzV3pYKzJhQnBWdklNNW9wUwpXbTFldFBCMXN5Uk9kOWZjem5DSExjdll1cEN0WVBxMWhQUHpjN01xS3hidlFkZ0hyUkk4VmtLdlpJRWJVQ0lnbEg0SlVOQnVxMlhSCmZmUWFzaC9TYmRZN1kzcFdKNkFndTZKcmRVMExPSEp2bVFLbDNLYXN5aXoyTXRFeEpUZlQyL2sydUpRREhTdTNrWTRGOE9odDBTRTUKY0tKMmtZWHZlT3VqbFlsQVlaQVFjTWlpN0JWQURCemNtN1V4TUpuRk1Rc0VSdkZNMndnRjVHdzc3ZzNDbjRXZEFSd0tXNi9YZUhaMgpOa2ZUM09qMlc3YzBjRi9Bb2xybFJQUUFXNVcyay95dnlsbE1KQU5MOG1waFlUVWFXK3dOclRDNkxmcUU5eldIQVlTSmp0bldYTXNMCnNXSnlQNEhGemFYSmpQUEpMSENaNlJqblVua3ZaTUdKY0R1di9RM2d3Y3pUakZsY0pnbi9GSStaMFRHb3JtSDJmS2xUb00xY3lwR1cKQ1VBTUZDT0E3SGsvZzRuK2RrK2ZiMiswYmU5Y0FrL1FPK0pnVUJESysza09uM0VzcU8rR1piTW1iY1BLWmhpMjIvTTdENXI2TG9PbApicGJlUEdFU2VCd2tCMnhnWHlYckU5KzFYTE5lQnpwVWkvQ0dTdXJpNDJJSFh2dytnb0lXU3lQZ1lORHdGdTIrZ2lBQ2hjNlVoVlVLClFIR0Iza1hkb2tIT21CNWp1c1UweTJGWGNvejJIM1FwdzBFZW45T3pGTGdzWGN3ay9JMk9sZkVZc1N5cVlTRFNNbEJLbG9BVHJZVjgKWndPT2ZmOTkrdjRNSUl0RmFSQlhZbHFTUHVUVTJTRVpGWFRoTEFCemVxZ3JyV3VkMGpKMm9IbE5XdUFEV0M4Y2U5RE9mL2h1bUF0dQp2bTE2VnQ4SHNEaW5ydUw5N2tMRVBlc0VPckFjZ0t5Q1BoSHZGYkRlY0F1aFR3UU1vMUVObDJ5Z2dFVEFzM1FaVUJSQUNoN1RLQkU0CjZnamdZOFFhUitrZGpMUUx4Q3dCRjJNdkZxeVVNb0FaZHpMQTVYMEVYRm02akpnZHBrbk1BdVppTWhiNXQ0Ukx5MFMybUV3QVNxWmwKUUFXL2VNdFF3S0xpSHdKUVJPekxpV092MWx0ZDhxb0xOZE5CMDRjNE1WWHk2VHhYYU10SncwdXBneFRkTVl3bGlLdDFEYTZxRm16ZApRbGNjK1NJTXBPMzU4K0gwOFVmK0xvS212ZzlnQ2RkQXZZSTdsMTNHem9LTnNyaFpnN2hBcWNTcUNPWEtRTUZwdEx4dnFXQlJTeU9BCkdnd2tEQ1JRc1IrQkVxaFlwbDFjL0J6YU5RWXNDUlBpNXdXWXhGOUtnWC9RdWtBcVdlYmJoN3hGcFpWSmpvQVU5WGVRNGpJR0ZyWTAKYU5zUmNEcFUrc1RmVzRBajRGSHF1Z2ZWTCtLT1Y5ZTZIUTg3RGxJb3c1WS94cUY0NjMwOGdYREpnMzR4VFNtdHFxelRUTG51N3pKbwpxcnZnRGZ2eXg3K0FiNTkrZlNsWW5DVThzcXM0UzFzSlZvQVgvbEt0Qnk3cEVESWdsc2o3SEt6b05uZXVXTk1QdEtLL1hkTVJYdFB6CmJEK3M0M1BvTWZxTncvUGxxcS9qNkxYbE9Rd3l0VkRCWXFYYnVWNnFpMjM0dkNrallIN0xqK2RaMEptYk9rdTFtZHRXOGUvbW4xY0cKVmcvc2s4d0ZjMXBBZkI2RWhGUEx2SllTMGxnYkZGSjkxSnB3MWFsa2ZVdUJISVF5QnF2OE1XTXB6andJdDhqQ01FQW1hUTBEZDhYcAozTW5ERDZEZGJhTDM3QSsrL0NQNDV2dmZ2RFVkRG5mQXNpUzM4U1ZnWVg3TUZxWHY5dkxEMG05b1ZpQUtlbDI0WW1WNGthTmFFc1NsCjBqSlo5TGI0bmV5alh5d3Mvb1Zab1lWWktLRjEyYUtQZVdUakxPWFI0Z1IzV1crdnNRczVjeVhQSlYxT0ZsRUlXcFlhNXJDcmVacU8KTXVzRVNCa0JtS1hGV0R4RzZabTZreDNUTXhIeUxQSjM2RVQ0NzJqUjcyZy9iWEhIanhGZ2R2SzQwRG1RZmZSTjkwTHB6TXNXWE5hawpiY1FyUjc5dFQ3OXRsMzIra0JVd1pKcm1yY2RwM2hoZ0xzazZIdWVFellLRkc5TEZGQloxRmV0Q1Q1NnV4bTRIaXlCV2hnRVRyRVFBCmplMExZbjlwcnVNbWdpU0lld3RXSm8rWUN5N2t1WWorV056N0hDanF0TkkwZnBRemJLelhuWGpHRGg3RHpHTVdicVA2cUIyRzlra2wKY0lhSk0yQW1BMEF6alVFb1d2Q2N4U0FtQnlndGlHa0E0ZHM3ODVnSmNPZzVBaHA2RGU0N3RRdjdERFN5VDhEanZZS0dibnZ2T1c0agoraWg0MFBnNkI1cnNPaHZjZkpQOUF1QXRXWmVYQW9zRUk4R0xCNHNvZUVNL1FJUEJ5MlVneU9oVEFSYlpaL2NOTEV0TXRHcVIwYW82CmVNV0NkWUdaZkxISlo4M2lMS25lSlluOEFJaVhCY3QxUVdPa3Z1eEJObzdUalBQTlJsZDBaY0psNW1wVzk3RnU5d1lPQlUwQ3p0YXMKU2c2YUxTUndoYjgxNE5Tc2t4Zzg3YXVBNWsxWm1mcXVnS1dTK3BVVDMvZXQzKzgyQjhEQ1ovdCtRV1pjUFZ3bTRNVnFzR1VoN1FLcQpZVmFpWlJnY0JCUVIrd1FXY0M2ek5tSlJndmNzNlkrVUNWQW5xeElCNCtmQjRyUkRqSVBvTG9aUitndGNtbm1OQnBvcktGbUthczQ2CkFHREdjNGFaMnpsVVpJNUFVODNRdEdCUk83TTRkUmJaRDdsenFTWW85alJRTjdJTFZhaGljVU01QTBqbHFjV2huSFhMY1p6RHlWMDcKdWI0djdLdnFoanVOeW0xcDByNDY0U2R5ZzNYbnBwME84MEswMSs0RXFONDJXRGpkNWZUaEk5OHNhbys5bHZZU1NnUXNuQ3pKaTVkbgpSQ2hZaHNYUTkweWoyTG9zTTQzQ1FCQ3hUdmZYVG9XOWlIaTZ2d3BpMzdId0Q4OXpFSVI5c0RvR09veGlYdEppUnBZblQ0c3hUNUZaCkhEQWhERVZOLzFqWDBKcnhWa09aMFRjcDY3OXFqb3M5QnlJWVFRdmp3dDllb2FGUUYyMzBPQmFmTWY4Ym4xNDNMN09HU2I4Q2x6NnoKZHRGUjBNUUdhNkVmbXhsQUY4QmliVVR0SWV2ZjRXTy9BaEw3TFZlTnVrV3paTmV6ZUFmcXlydlZ5ZHBWaXlXMzRMM09HbnN0bDlmYQpqRHhyQUY1OHNkV0RVM2p5bzgva3VIVnRDeTkrZUFablp4Y2N4UExpbW1SaERWSU5hWnFGS05pQUNTemd6U1BtVmdrQUNTeE92R0NPCndjS2VzVFg5TUNlb1lHSHZHTGZNbDJ2NE96U1BtVE1yQktVbnJMQStlbldhc1d4bjJlUnlodWhkd2xTaVhJVUZtaGJucEJyVFk2cTgKbkIyZ0ZCNkh5V09ZUDJmMG51Z0xiNWRaVE0xTzBPK1F2aE1zUnA2K2NPTFE0MkVucFhpczdCaUNIZE53Zk9WWUQwUDZEZmlxSjY3cwplTXZKVEg3RFFLdnB0OVhNQ2h5RVRmQlpVME1JUThWdHJ2WnREODkvK0FFdXpwN0x1bGtzbC9EUlQzNDhBUW5ybWRmWkdCM2VvbldSCm5sL0wxVU5KYzJtM1o0Y0UvZ0pEb0RHQ2hTM0JvRFJMOWNwS2FCZ1U0RkdyUTQvYjgwcXhIeFpGbmxpWkJ5VVBwK3JITGpBdUxlSzgKM05obDkxM1FMSE5hNVNiYTVUSXRNOVUyNlpRZWFObVlwa0c2clVtYmw1UUV1SlRoSEJNMFk1cU02Wm1rWVpCNzZMSlRnQ09SVzlNeAplaHY1dnQ1bVhlUEZtNllPQS9HZWlUY056QkVBV2pyZ2tEUk5LNXFHOU03UXJCOE9nUDFnV2M3RG05WXoxZHNBQzd1UFY2ZVBZTDg1CjkwTy85NHVhS0ZpbEVYeWxZUU1YZHVrWmgwQkNCN1l4cnhqbmdMSCtXSlZnd2Z6TVJXZXphRDBpTlRNTnM4cnBsNXZTcmpKOVAzRDIKa082aVordGdFZkxiVUdRbGx4UXNCNWFmMHF6TGFkZ2wxeHlZaFdNaHhqL3NtSThBSFQ5SER1NjRmeWIzTGI5ZmZGOG9hYVJsT3dUYQpsWHBMcThiTElyUEJ3eDZiZmVoc202cEsrKzFrdytVMS9EWjFzM1oxVGNzQlc5eHV6aVdGSm8vUnZDbHE5bG9CODRzdmZ3Yi8weC8vCmovRC8vdE0vRjdxRmU0RzExdTVJOHJ5OXRKOFhtc0QyUmRJdE5DaXA0dDdjeFZHektBZ1NXQmdrSEhRMHpSTEFZdnZrT1JFc0V2a1gKbXNFWkFCeHZPUXdXeUJ0am1OZHV3dU9uSURrVWg0SDUrMjVrbFM2OVlpWjhyZ0xSM0FrTHJ2ZzgxamNhckczdEphREJCQjZBL0RnRQpEVlBNeHdRVktaQmxaaGZneU5wSFdaSUVXMG12RGdHK3luRWF4RHZTOTUybTAwekI0cmdaK3AvL3UzOEwvKzN2Ly9IZWlYNzQvdGtQCjdpbnh6ai84K2UvRHlmSXhSeHZoWXJkSjJjZk5zbUk2eHNtVTNCZy9xMTFaSk9vRVRZeXBxQlZadWt6UW0yWlJZWjl4WnJSSVBXWVIKK3dBWWlQd2N4dm9rQUNWa0lWY21xS00xY1ZPaEhCZlNpSjY1NjRMakpyUU1iZ1lpZDRncUh2aDhtWE5CWjkxRTRKUWdpRllNUWtCMgphc1gwUGJQSE1FYWlFbWlpZGJFMnVPWUNEeCsyRE16U3BtMTNNckZndFZ6ekJBSjVzRmswN2llZmZPRysrT1J6OS9DMGR2L3ovLzUvCnZUYkpjZXN2T0FwUVRuUkx1SElicEVXemtsUVh5dzhMdWtWeXdvSjF5Y0VDcWtlQ1p0SDBGcVZicTFMRWowQVM4OGFzT0N5M0tIbjAKUGhWL2VSeDFyU3dYUk5RbGwyVVpYL3NZNXpybkdzL045Y2tWTXVmZy9WUWVrRjRQM1VqWDJGYUwwZkxLemJLV1JuUE9UTTlBSHBlUgpiQURITVpodDBERjBmME92dGVWZWYzUm9XTk93bWRqeVBySWFySG0yOG5lYUVjQ1pBcHdsSUprR25CSEFwZEFrYzZYcHhqNlZPcy9xCm1hKysrZ3B2TzZCNTYzR1ltVWxmYzZNa1lORTBIb2RPYS9ETDRxK1k4cUlKbElOUk1oL3l1SlpxV2RpcXhKeXZ0UWw4MllMUU50WXMKc0V3QlNzeVRLV2ZBSWhtM3dlMGJyTW1zb0lkaW5zc1VGTmNRODFEZWdSdWM0V2FCaFlmZUl4UDhjTW5yWWZhWk1kOUdheUdWQWw1ZAp4TEdLRWlkVUxtdEJHRTRFTGkrV0t4d1RxUmhPbXFxN3JCKzB0YnVWZDlNemxJN3QwRzY3blR6ZWtKWFo3emF6NDlHSm11R1RoYmF1CnZ1dVV6S2pZanFqWUh4TVZXd2tWMnhNNDFnOGZjMDYzNTNKdlltQUtrdGpPQ0VWODAzN0xDd05OcEpTa3lpRG9jOWR4b1ZrU1lEQW0KVllxSGpNVzlwdTVEbVNoWnByL1VXdDRjM2NJZXMvaENSbHNPeFVvS2lnUHpWdVoxenIwLytQcHd5ZWZNZ1RVT3JPSkU4MERTSjNsdQpYUGFkSWNTSWpMNUJtVWMzT3JGNmlPK2dGRXk5ZDhGSElpL29rYW1hRitma1lQdWNhSnRVUklkdStmQ3gwREx1eDZ2VTdHZEV6VDRtCmF2YWZiNTFKdmM0ZmI1NktlYVppUzAwRjU2WVVHSFdMMENZQTFTd1NqTVFVSjRuZUw4ajgrMU5hRmdRL2FSVm5RVWhvUmxabElWWWwKNkpXeUhkSXNCWE5YOXc2RE81QjJkRjFxZGhsZG0rdDVsbHpQby9aTkxoU2c1YmxuTVhWR0V6T2RKbVR1akk1dForaVlYcEd1ZEo5KwpNeklaWUM1cGVmNXVNSmN6cU52WnFCbFlLeWpYNy9lWFV6TTNyZGk4TXhibVVFc2sweTJWWHl5WFZUOTBWYnZma1g3QjBHbzFyN2R2CllxYXhaaDBuOXpHN2t3MFVHVGlDd0Y4YkRWdXB5emhZRmpjT3lFVXZHS1pFU2d2eWxWRjZQT3oyblRzNVhMYnZiVjZ1OHhrbko0V3gKa3dCSzdXWjBhOTY2UmRvS0VPdmdzaHk2YWVwT2lBdUJUU0JRenFlVFFZYysxUHVFNXppZDM3bW41ZE1qZC9xdHFnV3k1K3hOR0lkYgppZlNQSXZyeGczR3Evb01QUGcweldYald2WGFCZEY2YjdIRVV0MitUYnRHNHl5SVVmK1hBQ1lGSUJrOENrQVltZzhBWHpTS1daV2hLClQ1dGJ4QlpKV25OaXVXS3BkaVFEeTZ3WDZoNEM1YVdBZ3pNZ1NLNzA0bmpWNCtPWlpRczA4ZVNIdzFKcHNmNk9ZTDlaK1AyeTN6TW0KeTJyR09VcXBCaTJjOEZxeVJyaUlqZGFNQkxqcnF0R3VwaHlvbzdXbXFWWkxlUFRSNTVQdmVWc1pBTGNpK2c4SmZhN2o1b045OHVBRAozMlBuU2RKWlFwNm12bkJFbnpVTWhwUjlPVENjaWF5Z1ViRGdNb3ZhRjNHWWtGQ0pLWjFscVJXVVJUVGZYaGVMVWxwbkZ1V3lxUDE0Cll1c2RwMTQzWlFFNHR3K1NsWEF6amd4bmxqY0dGc004TktzR2c4TytoL0JNdFNibWVRdnpiRkx6UVp0bkkvMlpXZlh6ZkhiSk5FaXoKYnNpaURLcDVkUG9WLytQeFBhc0hqK2dzdU9ERXpTSC9DcmZwQUxndFNoYUZQbGRQbnJWbjhPREREMkYvY2NFVEpUeVJUTC9qcVA3QQpZdDliUzZTUXpJaWhhQ3NsVlNvVjA2Q2s1b0t0VVBPV1ZwanV4MWhNVVJtcDF6a2FWbWw1clF2eGxXb21BT2xuNGhiMzFhSzhxc1VwCmpzSDhpUVRTYmZDengyb1VmOG9pcUREdTVobXBHQ3B3MEVaMzZEaVAyQ0kzMGJkSTY0aWF0YnNORGwzbk5QMndsemY2NFBNZnVVVmYKNFk4Ly9YMjRMUWNBdklhRGY2aSt4WnErK2JyaUhBZXJ1K2NVZlRxTk5BYUdwWlVRTXdCT3JLejRoQTdPaWFXMzZENU44c3ZqTHlGbApmMWxFN3BNbnJIS3AyLzVrTXRnMWdudjMyYUs4ckhPZ2lOdk1hSThZcTNHaDcxbmVKREFyUEhQU1BBT0xBck1RajFHUlQyTGZ1UXU2Cno2TC9ndjd1Z2tCQ3Q0Y0wraHQrWEovbjFZbEE1MXlKMFJDRGtYeTJ2bXVEdzJHdWh1WldIUUN2cEdGbXNwR0xUT1FRYzFtdVQyUlcKQzN2SGVPU0VUZktTdkxIWTQxaWI3WVhGcnFrcklXblNhRm1SaXAvdVp4UnMwc3ExbW9JRlk0WXZIRTVkdVVvWXY0dVhTeDBCY0VEWApoT09Kd2VOWWVoOXJsM3BTNTFTNXlUS2dnN2F4Ky9xYmE2MlQ5R2hvTkNZSFFZc1NoUitxbm5STStIMjVreEFId1p2Vm10ZFovSXh6CkdjMnZxbVZlU2NQTWFCZTNQVHZuYTU0M0J1MXVDMVhkWkRNa1ZTU3FTM21vUi8yL0NyQm90YVJmWmhXVmpiTXVNSUhHT2MxbVRrSEoKWUZsQ3czQU1kU29CS0hBb3ZRVGVNNnR5Q0RnNGN6OTR1TVpCVjQraFBabzQwbVR1WlNYcFpXbDZtb1BnRVF0VUtoYXh5U3pOM2pwegpwa2xwT3NkR2h6M0o1TFEwZlVBbU0wbS9OYjNxeEdqSEUyczlqdzBNdjJtNzI4RjMvL3d2VVhKeG50bXJhcGxYMWpDa1hTQm9sMitmCmZqMUh4OFNpY0E4eGJoRE9vbDdLakZOYkpHMkhwTFFxZFcvSnFGY0lUaWFYTXNTMEY3UmlyOW1NWTRDb1daSk9rV1NsdkpCcnRrTHkKUGJFcU43STJNT04yTHRONklCUlZ1cmwrSGpCRDcvSzBISnZtTExvRlExNlpEYlRsdHdLYmZ4T0FJbFhaNG5sdXBRZjZFRnpRTTVTTApwem1QdE14YkFZek9sdHhkVE1EQ3VXTEwxUWtQS3VLUjNhRzJKQXA5TWJHWnlKY0tTUEFobWgvakxuemxWa2pwUHVTWnh6a3RteVpSCmF0TTVEMVpHYXorc0x4SUhqMWJsSmhvM3AyaFIrTHNKUkRCcnJBYlRLSDk2aFd5QlcreEZjdGZRZEJHa2NlaHlmdE5PbnVZRUVDQ04KUU1LWkFkZ3NUNWluWWRhK0NYZnQxdDFHZTZicXRzNUVwRjA4ZThhSWpsbDk5eUREVjJXc04vdk1Gd3VwY2ZGa1hkUmZYMlloVy93awpCaVJIMXNTOFpCQktpbGN1TnJMQXhhVGJTNWx0WExtUndNY2pXRzRGTkNOM3M4dHk3Vkt3TXFhKzVBVnRHREtSUXkrQzBNUkRxRlVBCmlzeVZNZkhPWFFEaU9FSUxjSEsrUDRPSEhhK2tsWkVUM3JsK2hvQWkxL0NHcEdYRVk3WjUvZ0pmOWZldGJ1RkFhcW54dm8xZ2tZR3MKNnhPdHkrODdHOWxOVk13cldPZ0pXUjh4RVhYbUp2Wlp5VEFFeTdKMmtDaFlibDB3N3grVzU0WmxRVWxNOWVhWGlmdjNuWUs5REVVYgp4NmdtWFhBbVNhVm1WWFFLdTh1THg0SzNMVFpXVDZCQkFWQWNReGlIM2Nxb2RJdlhhR2NBcG1ieXQyeGxWc25LY0NnbkE4c3JuUmlyCld6cUloVzVoNjlLM2U2L0RWODI2Z0YrRVRwVlkxcnVzSk5HeVNOR0hrb29CakRwUnFnTmcxS0JpM0YyeUdzZFczT0hjc0tOVnVibTEKT1dpZHdWMjVKemtCaklxQksrSXJFU3labGVtRFJaSDkybVJkc3BzMU5nT1hXcGtaVi9sTC9kNDNkaXZQdVpMbnJqdzRaOUVzdVk5RgpHUGN0OVNaaWZqeGs5ZnFvSGZhNURGa3RoWFhWRjArWkFXd29oeDFsUFk4TGtHVE53Tkhod1lyRkkxaHVGelI0WUIyRVJpQ28vZHFTCmk5KzBMSlFkUnRWTHlwa2UxbGhSVW1OVTYycmN6a3NmYkhNWVNjQzc1akZCbktTWVRwTG91WFNrWGpSWGRlRjVLUmZ6amQzS0I3cVoKY3Jza3J0V0hkcnVCaG9EU0R6cWFRbnJ4c3Uzc09tc21EdFliR1dxWFQvMnkrbjFVOTNDa2JEanVYMXhTcjZ6L3NOYXpwRFpIVUZSQgp6bFFsSHNGeU82N25mTXlBeTJwb2ZPNEI0L1I4R1llUnNwNXJsOXJVTGtKeFdwcGJrOFlJV2haN0czSU5iYzIwMGhTZFU2dTRDVE1uCktQSjV1dUxSOG4zUHBlL0wxWm9aQnJadHk3SEEwSEVtbmpOLy9ldGZPNENiL2Z6Vkt4d3d5S3dVY0VwUTErNmxLVFY5WU04UlMwMkIKNFJUK0lZN0I4MnBKbWtsdGZvamNoNUxqVVAraTFHeHBNUmZyaVR5aFltRkdTUTFadXlHWWR4c2ZyY3RyQXRINDRHWUtHN0xPbkpNUwpBa3pheFNMem1JOU96OGFuZTR2VmdIalNJR29abllWandEUVhOUERFYzl6dmR3TFdkcitiNnl6elJqVE1sVzFlZFpLeDF1bXI5WUNZCmpZeXA3SGcxMXlMSlVtUldXdmNDNW03T0t5ZWp4U2wwaS9YY0NuMjRybFBUY2dUTGE5WXpNTFUraGJkc0RKeWtZV3ljT3BodWlVRk4KU2IyeDVFd0lkVG1zWS9yb1BkUGlzMEZtRm5idDRLNDN2UXhlTjJCbXhiNnppY2FjcHVCMVJJSXRhcDBObWF4TDFySlZJdnF4RGoregpNdXBDenRxN05nZUVmbWhacW9OWVo0VCtOWFBFanBkYjBqTXdYN0lkUkw2REpDVVRVT0pNRzNVclEzQXJCK3NpRVgrZGFSTUgzRm9XCk0vM3k0akd6eHdPZ2tMMWszQStRblFDM0pmNWZCVENGZGVFdU1PdjFpVHJFdGZTNEVtOFlKcEdXckF2bWRTeEZqWXRtSXNjQVpkNDgKUExadk5jR1lwb0NsbVNkNVltVldPbnRseGVUeGNrdHhHaWdkQVROMEJJcHVNVmlDSm5qRWNrOVpINndKUUV5UFNTVUJuSnBjV0pudwpXcUN2NHowdW1pVTJCSjV1Wmc3TlRTLzFxeHljL0RqMGZRY1hGMmRXOSsyQnZXTnhBWk9nb1YxMUdxL25KSWVNYTJGME5GN1J5V1hoCjhtbGZxYXk0eGhFd25OYTNRTjZ2K0pKVWx5TkkzcHd6WUJ5ZjhVYkxQSVNtNkJvbkcwSnZha3hORXhlVzhSeG9kdWxGVXkxY2gybG8KY1hRZzBYL2V6emt5enBKQ09YZXgzMjI0ZmVZY1BjZExIQm0zNTFhK3pQK3VydVNWdElEbElpMnZyUXpEN1BxWUhxT2pKQ0FtWGVwRQo0eUhQYkYyazUya0NKY3lOblpBTXY2SzV0enU2a08ra3E5bVZsaDlDMTh5NEpzTHZpMmxrZkxFVzdDUzdTR3NHNHVqQThEcjh0eXdGCkFHenQwWHN1RnF2Y3hYeVZCbk92QXpDSGhILzBsRGtMWHZJMFhhK3V4RHlYVENQeGtCOElPVlBZR1FUam1jV3NUdzZVc3NiR2VvaU4KTk11RUhoekI4dmFvMldpZHBOOExjYjVlS2gvdEhxMU1uQXBYWXdvcExDREZkSW93QTd1VU9TWEx5ZVR0d2R1YVBOams4Q1pmMHIvcwpBZUVhNnNjZi93UldKMCt5WUdYRjQ0MTkzKzFqeEgrUTJJZ0JSbWdWNWw5UTYyQjBrcGdCeVFkS0p2VU9ObmR4YnVaajN2RStuTld1Cjhvb2RMMjhXUEhOOUVTRCtiZ0IrUE5QVGhzcEsvUkpFWVBqQU5CYVFKZzFFaDVLVnVNZlg2SWZlS05uQTJTWlExOHQ0UXVYSktRK2YKL0dpdTd2OWFhNlY2bVlQQWlaYnJSdy9oaDI5K0kzWDd6Zm9SRDZDVVVkT0c4Q3dDejhGSU1hVTgyc0Q2akdrcWpLVEFnTXZGL3RKbApNMXRDYll4TENaYkZGT09SMkFlNFdXdWs0K1UxVzVuTCtFK1d6VHlheVltcDIyWk12R1NoajBNVS9iS0ZYaDBDWHB3QjdFVno1a0ZqCmo1a0xNUnhmRGJRd2VWWW1pZjgxUXJYQXpkbDNSSDVhSENWa3ZoWktCbzhmUElHUFZoKzRzKytmd2NuREo5SlhyWkpab2docDFMYk8KcU5mS3lqNWFHSTdOWUZhSk43STJZbDFnSmljc3IyZHhXUXNrVjQ2Vk9GcVhPMjlsY0d4MUpyVlQyZnpRS25YM1NWWm1adTNFQ2w1agpNVnhPb3NGckxPYm1FRFFIV2FzRUhtaFdEK0Q4bSsvY3p6Ly8rWTNXU25YVEw3L2JiK0hGeFhPcHBPeVJyY3VKZHdTS2Z1aDgzN1loCldEa1RlOEZnTVZaaDVtVFJMaW5zbngvclBacjhwYW43WlV0WE9GcVhPMjlsaXBrMUxwdlBPWjc4UEdRdTVqQjNNMVJsaW9VeGE5TkoKN01YN2pnZmI4dU5zYWNxWWpMNVczN2REVlZWMGRxZGxROVptKytJWkQ1N0JaMmZQYmtUTDZsYzRLREMwTFd6Yk5obFhGbHNrL0ZFcQpTeXZybTR5U1Q1YnJEMUQzY21pa2w2TDFSZXRXbkIzQWlsbWUySnhuN0FpU3UrbG16dmFoaVg5elA4TjRmT0NjbmxISGo5MDJMYXlwClVDTU54RmNSL0ZLMmliSVd5VGl4QXdwMjI4MmNzK3ExVWpKM3NsckRKNDgvbW9CSFl5OVNNQzNSZmlkYmRmRzVPREpPL09kcVFzMjEKbkxzRWJmeGRiRzRBTTU2eE1Kc0VyOStyK0FpY08yUmx4cFFzekptWitaMGp4UXBqQnN1VHFMcVVsWTR4bTBrWnkzSzI1a3dUVzR1OApLT3U2bVhoU3VSL3pqejc4OUxWbEs4c0xYMnczZkQyUU1vMXhnQ2hvSFdsdy8ycnpQSW5KK0RvRUlhT3JHWnlKZUFqVHZ0Z0tUUzJNCmpjeEw4KzZ2SENCMHZOeFJLNU95eUNFMEFRaXU1aXB6TWV1YWtRNUFBaHBhSDc2T3JiT0NCY3F0akpZU2FQYUpGOFlUdXRwTTF1dSsKM2NOdnYvOW1ydUhISzFtWTJRQ1BYeXpjNnVFaldDNVhOa3A2Z0w1cnBTVUhNQjBibVZqTjk4SXFkLzlCRkcyeDlhZ2NORXdITGdFRgp4RTFkakp5RG8zVzV0MVlHc3JnTTJ2b3hOL080Z1VvQWtsVFJZbUlmZFFZU3Jlb2R6U1pGaVhUd3VSZGxiVG9McnE5UEgwQnordEFkCmN0eGQ5dGx2ckdFNC9ySisrQVIySlB5M0w1NFhieGcrR1BkUkJ1V1FjVHcxcUpmTXozSE84Vldla3dKYjJSd1NNRG9HYzhOVmp5QzUKKzFZbS82MnlqQURVcVdlSWsreDNXd3RYcmhscGJNK3pNVFR1cHoyOEFYM2Y5Ukw2Y0Zsd2ZYTit4bjJLNGVFSEg0dGo5dmwzdjdtMgpqcmt4WVBiYkM3bjZ1bllMMGpPdDBUT2xpOVdCQ0s0MjBkTlpsbXd5dzFrQklrQnM4bGN4QmF4NG5Vdm9HQnh1ZTNxODNCR2daSmJsCk9yU3NLQlVKSjFCTUo5TlFYVmx4cTBqSitQQWdJK3RUQ0lKTFROZ3BKaHBHck0zUXE1WGgxTVpxMmJnWFQ3Kzk4UmU2a2VnUGdwOEUKRkFtbU5mVHRYaXdPM2JjNGpJdjBqSkhzc2hTSTNMSW8rbjBZNVozQUVzcFpaK1pJSXBaQ2Y0Nk80WEdCM3RrTEhxWmx5UUV3WTJGYwpFYVBSMkY2WWFzMXJLS1B2a2hLak1jQlVHdDJMZFlFNDZIYXhYRU85YUtEYjdXRjk4dmpHd3Y5R0ZvWUYvNTZBMEt4UFlIdHh4c0FCCnRqYm1VdzRWd0pNdmkzbitrSXE0ZUpiSXdlSmk2MUVYU28waHR5NVF6cGljY0U4NGl2NDdhMlZnVk5hY0tCcENQcHJkVFlvUzBVYWsKRktEeFdlcFVKdmJUV21Qd01lUGgyM2J5bGhNNVQxNW1vbE0zUzdmZlg4RHE5TkZZK0w4NllENTgvQWw4K2Zudnc5ZmYvb3Y3bDIvLwoyWFg3bmV6dk9HdXlJYlR1OCtTMk9QZlFtMmFaQWlpalhEQ2lZSEtXMERNRWpEV01HMDN3UGRLdmUrODFtd3M0Rjh3Q1FtWnpiRzVTCmFseWpiRk8zTk5jNFMyay9TSDl2QmsxRkovaGg0RWgvSFUvMDV6OThkeFdOdkJGZ1pDRisvOFB2NUJvdVZiVnd6WElsSDRKUnUyaVcKc2tVYkZ1b3RhQVJYY0ZLWFdpRlZCOHp3d2VsZm1aVTVndWFlYXBvWnBuQ3c3RDJVQTBCWVQ3YUd6TUtVWU9IMmw2SnJmQVFPKzUwWQpmYldNVVBXd1dqK1FDVFBiN2ZsNC9lQmx3TGtSSmNzOVpEdWlaeHlvN051ZDg5VUNiRUN1QWtkcXVnVGxjMTZQRVNoa0pvNmRTZFIxCkRFa0V4b205a05yaGhEUFAwWlY4ZjhXLzdZUXBwYzUrODhnczlIN3dvb1hZWGlnakFkVXVjWDJCMXFmRmVZRVdpa0FRVnMrMHJOdUcKRTc5a0xuTjA4THFlc2hzQkpuckl5TUpVaXhYMGUvYVdOVW1zWVd3UVlnTjI4QUJJc2lHc2FHYlhSQi9rR2lpallubXRPTG9wSVQ1ZQo3cDhESU9ObXFRU0FlMXpvSU1zcDJ6RFE2RHBKRkQ1VzNTcFFPTVBFMHJLR01PaEpRSWM2RmMreDZFZXlPc3ZseXIxNDl0c2JmZmFYCnlpVWIrbGF1OHYzYXZWZ2FORTlFeWxyRzZDcVVvSlMwMlkxVURWeldEaWxZR05NdjA0WndhcjZLOXFSNDJKMTh2Tng5Y3hOT2ZNWDQKak9oaXprZWI1NTR6c3lyeEJKeGJIS2RRa2ZWaUlqK3N3Y3BYMFBlOXREN2pHR0hYN3RXSmRmSGl4cC85cGVmRGNBVm9YUzhGN1l4YQpCaENuanJsa1pzTVg0NU5COEg3bHVvWVBpOCtzU3JSVU1KNEJMMmNIREdaODdNOC9HcGw3WmwyZ0JFN3dsaVdhaHBqL3Jsbi9ES05sClppMmdaQ0haR3NLUk13RjFEZ2UzbCtrN3Q3Q2hTK3d4dS9HNnYrNFQ4NlJMUmltTHA2N2RzcmtCRGdoSjRxWDBJUkNnSi82WVd3elQKS09FTDVuUnNjcFdtUEdpOTN0RVFGS2Z4SFBYTC9kUXhNeTJZME5oQytIMXhBcFFZbzhrc1Nqb1ptMmUxc0N3UUpRSTNJdWY1Uzh4UwprTGJzSVF2cml0Y3h4MkplaTRYSmt5NFpwZHpwcVY2c2djMWNCUXNEQnBjcStDeUlDWVZwVkFOVG1OTjBwdEEvekYzS1Vmakx4UGJpCnJIVEV4YnVESWhpMVpacnBaWjR6RHNUTCtpWG5oWXpwTnFvemlpUDh2UTZPRlNDRldNd0hILzJJWndSZUt4N3pDaVA3MEEzWXVyNjEKeWJXeWkraVp0SW1DU1Z3bTgzYWszTEJFejhZelJMSzNRVGZYaUErdmwzeDV2TndENGU4eVBYb2dBMzMrQ2pEVnZOb25VRS9PVWwwQwpIUDV3VWozUEdrQktVTHpMWXpGUHY3dSs4SC9wb2JDc1c3cjlQb2lLdkY5ZW9HRTI3aEFLYTVGdmNjeFY1ODRla0hMSHNnTU5SNlRjCmYrRS9kOEs3OUNTWVRxcUp0bytIMVpvYzBLMVNNbGVXcjcvU3hWL0ZPY2R2a3FmMXMxTkNKNGhyUzF6MmN3WGdCK3VpUGFKbjlJa1cKQWt5Q2tkTmpoS041aXRmN25NZkxYYlFxV0ZpWDNOcGcvdXNEekduYW5KMDRUR0J4a2RyYjM0bmhHWWJSK2dENW02N2R1ZUFsZTVsTApmZjBUUWdsMFRncXRGOHNBaVBBRlJMMmhkTzJNb3pGWWpGbnNFZU0rTjlNZmFwSW1ZZFlsSEtTYzd4N1JjVy8xQ3NKTXVuOCtsc1JpCk1ZY3NUSm1ocm5HWjhFcWd6ZnZWOFpSbXYwUWdjY3NsOVpEdEwyWS9JMDlhL3JNLy9STjQxaUx5SEtUeHhPVWJhNWloYmQydWJUV0IKYmRFSWt2dStFemR6MUJ2aVhzYTAwTms4bHVaemJGNG5Ma2MzblkyWVAzSzh2R05ZQ2dCUml1TG5LVG9rbDNPZUdnVWhxbzlTTWlZbgpjWkVEb0dzeG5OVGpxUm1sYTc1a3JuREljMy8rd3EyYWxmdjVGNzhIOVdMdi92S3Zmb1haQ2YvMk5NeCt0M0hjNEprUnJseHg3a2pBClpXTW1TcE02cG0zSHkzdWhaYTdQNmRKSjFpTDRjUTFoc2o1QkVxUkY3a1BQRFp1aVFYZnJ4ZXFsenJ2MWJYMXhBUTJCU010Y3l2M08KcUJqa0FuNENwSG1pbGN5dGMzQWtZdStSNE1GTTkwQ09ETWpQeGk1S0FRamEyR2xtQ0xqTDFsVjR5SnZXMmU2MzdtLy84Zjk1ZlY2eQpWM1VuQ24yNzNJckFqZWVwSFMvdklsVkxJMHNnbjEyT2JwUVJvUHVqMk5kQUpkNHlVL0hIMytSNE9WN3VNR0JnZk82NHpCamhVY2djCmlWbTBKY1Y2U05uN0pYSFJMQmtqS05LYTdIWkp5cTFwR01tazVINEVNL3VEeHd2VnI0elJwc0o0bE1qODZ4Nkw5ZDlQTXVZUXA3cFYKMHMwd0Y3amhKZ1p3bEdzR0xqMTdEd1l3ODVJNTlwTDl6ZC85dysxYkdBWkhzMXhMNEZMQVVsV0huQUhqeWJYNTdiaE5NeER0ZXBRdgo3NGNKdWNucE1JUWFiSXg1dm9ZVUpPSEJvZml6WVJpd3FIZ2ZPSUM1ZmFuVDhJMHRERWY2RndRVTE5bEFXMEpvSlMxdk1YclRTV3pwCjNFSUljYWdob0Q5emVjMlkwN0dYWkI0MGh4ODVYdTR6OVhKaE5EbXY2RkdEY293VVBWZ1JCemxwUTNXZmdhdzF6WUdIa0tGY25ud3gKZ3NodEw4N2kyak12R1g3MjhVZjRGMy8rUy9lc1JmZXJYLzFxUXVucTY1OEl4akhGbmxNTWVGSnRNb1BjS24yUWRoMTI3bEM4YVBlYgpaREpIQnlMZW4zUnl0eU5oRmloMGVqK0M1ZDVhRTF2VTludUdreVNtRTJHSWRMdlpPRnl5SXVHNTRjUWN2ZEFoMDkrQWs3MDBpRlhxCit3NjU3OHFpT1hGejBmNnZ2LzB1RDF6ZXFLWS9yd1NPYTVRai9kdTJqWXNkdTVhN0NEcjdHcGhPQkZyR29Nc2J5ek9GZmZIc1M1ZG4KalltR1FUdklNT2RWbi8yY3g4c2RsQ1Y1UEdYaUNDcGEvRTJ0aTJxWHNDMG9XS1QwZWxKbVlFZ2tQekMwc0V6NGIrckZjaExZZkNOZQpNdTN0MUlUSUVpWUprcWlZQm1PeE5LblpkbUp4WU40TWo4OUl6aDN6QU40RjdUS25YeTdWTkptR3lYUnVzVjdFc3VpZ1pybXYyaHJHCmpPWnRlTW00TFF3Si9vVlBJb3ViMllJUFVoL1RCOFVTRUhhMlFQM0RZYmJvT0R0SVlCYkdsY0E1OXNDNDE5Wm1va3Z6M3hldmRkWDEKTTdKRWFkMnhmZ20xaDRQbzdZcEw2WkhydDRhK3gyWjE0bnBpU0k4ZWYrU1c5UGh2di8vbTlnQnpzbHE3MCtVSi91Nkg3d2kxdFhqSAp1bmFEbGE5ZEx4OWlvVlBTc0E4V0p0VVl1MlNGVU51MHh5OGFrM3pVN1JFQU5MSXd5bjNUR1FqaG1DYno3dWdhVnlTeXBOKzZzRHBXCnJIODFrR0I2bTNzc1NYVjhMNXFiZTdGVXRaYzAvK1h5Rko5Kzk5dHJXNStibENpamxTZ1RPanZzZUVqSFlpWHJtU1VhSVJVOXQ3ck4KdUtScEdNUkl4ZHdnZmFIMS9xQnBQd0tnT2M2YXprWVlEcXhEdUx3TzZLaGo3alFMYzRYZ3ozUU5scjl2dVJZZ1p5ZkdTblRkNk1rVwp0YjhTU3NlbEdPZVVJUThvYzVYTUs4WWxLWDNYSVpjbWgzVzh1ZmpoelZBeXprN2U5eGVvYUYxSXJ6TE5xY2FBN01Fb2x4QktCUXNvClFBQUdoUlZiRkNGYytvV0RzTXYxVHZTSVhPcDBQZ0xsSGxLeFVwc21CbEZvVzhRcEJRTlFFRWxjSTY2WkllcG5uRm9kOVQ0UHdvN2EKM2VhbDljeExpWDRHeDJMMVFEd1JGZGZFNURvbFdvdDBSbUJReVVBeXA2Q3hEeHZIU2tNRTJERE1tVmx4RzJZdWFFTUhIaEtPeDh2OQpFUHd3RXZseEhXRjJ6WWZGUW5ZaVR2b2xESkhsNVRNSXUrRzFaZ3lIOS9kRHI1M3NSY09RaGFFMVc5SHRrNU9Icnhjd0xKSWVmL0lGCmJaZXViN2RZTFpadTZQYUpXNEtMZlpFc0VqdGtsbWJ1aXVwQ3gzaDJzTnREZG9ER1luQXl6L3A0dVg5V1pxYTJ3enFqK09BRG5xeVYKQUJJNzZRNlJqb0dkakFrb3pGNVErSmNMKzZPamlmK09ReUFjUDJRUTdYWmI5L0RKajl5amp6NS9QWlJzdjcxQXZsYlZBcGZMdGFRYwpBSUhHd0NIbkJMVW1FRHhnazFIU2taTEZmVEFrNFY5b25HS0xJdzhLSGhiK1IzcDJSL1hMbk9DSDFOOUU2ZGdNSlErV3hlalhrTjhPCllNbldGL3FSbGdGalBOSmdtWjdmTEUrRUhmRjd2SGoyMnh2UnMvb2FYeFErZlB5SisvTHozM2RoM0VYZnQyNXpvU0xmMXhWMis3MmcKbC9paDJSWVZaRk53Q0NWTE05UjE3dnBnTTlobkxkRE10ZUM4UjZEY1grQ0FtODM4bUp4a2d4ZVYxd3NHS3MrcEpncVFmcnpHeE1JRQpTK05oOEZWbGJJMWJLdSt4cmhlNDNWek05K0s0QXVUWHNqRGYvL0E3dEhFWHdCNEdUcnJVZ1VvTExsT2VjZXNKdk5sRURtNkdqcG5vCkgrSVhMczRRUTZGclhCN2xuYWJRd0JFczl4WTA4K2xRbzVPbFVIVE05UzZCSmxzek1LVnVrY2t3VUVCU0czc3hOeHlERVUzVGRURUcKc3pwOU5KNFI4OHBUbE9PRll6RWZyQi9nbnREWk5HdlhrWDdoTitZUmZ1a0xNeEJLa0VEU0pISm00QzlNdC9rTUlXY0hORXNUS0pwZQpYUkoxd2RzMjlaZ1Zad1djWmtFZkwzZkluVHkzS0RVc1BjcFVMNEFET1NqVXd1aDlXVU95bG5ROUJYb2ZnTVJBR2ZoZkVQOU14emh4Cm1CMVZISU5wbWhOc0wxN2dqejc4OVBWb21DSVdReURtTjJaTkV6NU04bXI1RUg4SklBbW0wMEFpbHFTWEFLYVoxSERXc05zVFdoWmMKemxpNG1vOFRsZTZqT3puemRxWUV5cEpKekZtTkFKWSswYkdCUjR3RmV0WmJQSVo3TkVYcnczckcwdnRGTExCTG1VZGpMbGJMR0lPNQp5Y2krRzd1Vm82ZHN1WEx0TnRFeC9yQms0dWl6OVpNdlNoOVd3TUZQTVhFdiswekQ5SVdtbWVHa3VaVUpHWjZsQTJBMlQraG9aZTZlCjJDOStxMVFEaFVWUWNvYSs5emtkQyt0RzFsQUF6eUFPZ0o0WlY3Uk1CSmFlclV6ZjBjcHJFODBiZXV4M2UvZndnNDl2NUNHN3NZWEoKUFdWK3NjRFZ3MGNPOTN1MzIyMmpGZUFVR1IwREkxTnV6RnFnQ251ZnpnYVhYVWU2eHJ3a0lmY3M5dGVKdWdXTzR2L2VBR2RjbWFLeApHQXRlQjVhU0FjZld3cFZyaGxhRldaZ0FOQVZOVmRkMGVtWjYxbWt5Sm9Gb3VUNWhQb2N2bm41NzR3Qm1mYzB2T3hIWG96Ui9pL2pYCjZzN0Rucjk4eUEzVEx5UVdoYTdnK21oQ25ldEFLUnFEcEZOekNvVVhKTE11MGVWc25oS1lvMlZIejluZGRpV1A2TmlBSVhkUWY5c0oKTzRsc2c5WUhMeXl4SXF5RGFlMUV3QUFZaXlsT3hvT1VrL1ZEUEpGeitoYlRzODM1MlV0NXlHNUt5VEFJLzA4ZWYzUW84UzE2S0FiegpkcG5ZN3dQZG90MGRneVA3WWgzOVpjZGZtQTVJRjBRY2xtZVFLMm1abXhha0hTOTMwQ3QyRFRxV21FWllNd1lXK2l0T1lleGNCaFo1CmJNaUFrdEg1ZmhpeVdOODBYN0ZaTkdQQmYvdmpMbkxoWDdnSCtWTVRncGwya2YwanNWV3g1enQ0d29SYmlrWHhQbGdZUGdoZDBESXEKNXJJemhvRm1ISi9STTVMV0VManJwZmdmcmN3ZHN5NnV5RlFIeE55VG1uN251QlprQ0pHd2s2aFplRDB4SStsa0h3Q2RhSHRqTVk1UAp5cHdMMHpzN2NYTWd2YzgwVEpRWDdmNUdnditsQUpOL2FkWXhEVmtjNkRyWEVrZnMyMDY4RWhpanNCQURsZkVNWU9hVUFXSmZVTThhCmNoWVJpaWEzSVp4aENwZXpIbGhMMXZSMm9LdVpIK2hZZ1htSHJZc0J3aHFmeEhLUGlZVUJYUytkbmx4cGJRVHJRZ0FCRmZ4ZDduME4KVjEvUnlYb1l4TFVNdnNiZ0FHaWFwUlNVc1g3Wm43OTRxUVJNZjlNenh1TUhUOXlQUC82SlRHOWFyVTVkZTNFaHRRWWVhcXdYUzB3eApGSFVQRDMwZjR5NFFkQXZFTHh2TXExeUxMejQ2Q0tYbnhDT082bWJ3OHU5K3BHaDN3THBnVmhzVjlVdVoybEwrNXRrYW9MVlJySlZBCjZ3a0lDaHF6UUtKYStqNTZ5alNPNDdHdWw3Sk9IV21hZnJkMXA0OC8wdFpLbi8vY1hWZS92SXhiR1g4NGU0YmZiWis2Qng4K3dZc1gKejZTaXJZYzZSdmpqQndYMW1RTlJzK1RKOE9Gc29BQng0NE13dEJqdVp6b0hIZllUZCtPRUU4TlJ5OXh4NnpLdWRZRnBDa3o0clFNYgpDZGFscGJWUm5selQydWwxbmZrSU1yWXdRdkdnQ0p4ekdyT3NWWllPKyswWm5uNzZrZnVIMy96RGpkWktkWU1ERUJOTXUzM3JTTHJECmd5ZWZ5WWkwM2NVeklJNG80d200cmZyUXR4NjBDNEhuU21idnBZME0zNi9vZ1BCdG5xVkdkQkJySjF2SDdqWFpwL3VkUG9lM0FQSzMKa005czU1UldxMUJ6MlNTcnlRU0FxYjQ1VXJTM1psMFNRTEJNYTBuT0h3SUdqMjZoL2JTWUhFODlraXZkMzlIOUxhMlJIYTJySGUyagpLKzdvMTk0UmtQUTJPcjYvcDdYR3dVRCtlNkZ4N0UvbUpkbTEyNzd2OWpJSDQ4SGpUM0d4T3NGblgvL3JqVStvOVEwUFJseHdJUjZUCm56RllhekVOcStvbXBGMnJoZ2xuRGVhZXFGOGtIaUJFdGlwdE1MbHNaZWpzc1VBN2M2aTdXVDVuT0xCaExtWUFVWnFtYzlReWQ5aTYKcFB0UUZvVDFZOTBpdjNuNjdjVzZzRVZoSU5FK0JrT2JyQTJvN3Mzb1crV2poaG1nOHRoMXV5ajR1Wnora2d6bEt3SGtiK3VBT0FzSwoxWXZHQ3NXOEpGOE9PbzRzUDRzRUR0b203U0llTTc3UFlBbmlQeHljTHZPNWwzNTZ6VU1MWjZ6SlFjQmo5UCt0V1plWjNMRm9YVERrCkZVNHlRbUpzcnN0L2Uxb1RzamJZcTVwcG1YYXNnWk9yZWVERVMzbGRvanFEcmNsRGxQMUdhNks2NFVHQm1XMmFwODVUbFBzT3RPaE4KSmtFbGE2RFVLbEV0cG1ZbzFJeG9HbTk5YlJaUEhxT0RaTStMejhtdFNuaFBidzB4dkprUlAvcXdSMnIyNXNHU0Yvbk5lY1k0OHlPRQpDOUxpVjZzaGRFeG9tTkl4b1Z2MCt3b05velhDdEd3YjZCbTlTWGhzejNTTS81YnBXQjZ5SU92U0QwTndBc3lYaXJoYnJJZTVsSmJsCmIxNVZOUzZYSzJ5SFFYdENZY3BhbHVTZHdkeUJvTUVuK3ZLZDAwQmxPRWo1TmJtWTFRSFFHdEJxY3pWWEVDUEJvcFVHQXdmL0tEN3IKcHBnbWdoNnAyUnVsWWxuYnBPalJoTXpMR1hQQWNpcVdmdXZvU2g2dGk5YVlCOGZ6a25PSTR6QWNFQmRxbG52SFlLaVhhNnlJK1hDeQoxcWFVRUMvbFNhMWU0cURBek5tYXJRbTBQSjJXcUNPQkI3SlJ6MklWMk9SRThhKzlRTVd5WkJaRUxJcUovMkNKZ3RDdlhHWmhNaXVqCmZVR2R6V1hQbkFCd2VQYjcwY3E4WmlvMjhyb1VibVFuY1pkRTBTSFFid1ZFWmxuMFNoWWtpUDFvWGRKanZBV3lMazdFUGhxbHR4T3oKcE5Id2UrMTNHN0kwN2FIV1REZTZ2Q3hnM0l3bkt0S3lubW5aSUxUTUI0RFFvdVk4NjRLZThWWnZRNlJkc2xYdldxWEFzdWRsWHJJeApMUU9kZCs0UEFPTkl6ZDRlRmN2QmdscSs0VU44WlVySGpGb2hlNzJFYXVHV3ZWLzArM04ycjFBeW9XamU4ejRGRlQ5L0dQYTBadllXCjBHUXJJM3FtYS9jOVNZUTVPdmJTdXJaNnlRTUZsK2taMWk4a3RHeFJTMEdkV1JuSXJJd3NjQVVNdUtSdklHZ1hRWUhwR1pjRExYY3gKSjZDcVJmSFpFWmpycFhrRXpXc0V5eGdvZVdOR1NLWG95UUdVVVhHajVUdHpKU3M0MkxJd01BZ3d1bysyb05hRjNja2cxb1ZkeWNBTwpnVGFCeGZjZXF0NVhQaTgzdVV6czQ1c0FUTEd0Rnd0bzFpZWNSdzJrWlN4R29uRVpHZjFNMWtXc0RNckNsMWlLVUxBQUdySXF3YnBBCmRBdzR0VDRaTFFOdEsxSUNSazBNMkFEUm5JNFY4OS9oTUtVOFhtNEJRSG5ySkVoWDB5bW94VjdCdXFpV1RXQmhDeEhwbU1SZGdoVXgKNndJQ29CQjdFYkd2ajR1Rm9WK1JnMzlkVlMwMHo0emVwNnA4djZnWEE2ZUJyRThmWUx2ZnZUUlFYdHF0ekhuQ1BEZGp2THRyVzl5ZQpuM0hCRG00MkYwUFg3bUk5QTVlS1N0byttV012MFg0bmdyOFFkSGJRZ3BlRVRheVlXWWRzb3NQQmJITlJXUGp3MGVrUEVwUDNyQ1hQCnFDY3p2c0xaNVhpWnR5NDRvbU1wUUlsNU9sT3FoYkxVS0ZjNmRmUjNkL2FiaDk4ZkpKQzVsK2VVenFGT2dlRTZYMVZhb0NqOUpidFEKMFR2c3RwdGh1OTNJaUl1THMrY1RPdmJWVjEvZGVDcmtxNXhkeDdUTWo2NUdzWHhkY1pzT3hJWStYVU1IcEtHbkwra2dyT2p4RlgyRgpFOXF1NlF1ZTBMNVR1bjFDWDRIMjRRa2RCTGxQQjJwTmY3dm01L0hmMEd1czVEV2M0NTZmaSt5cW1RT0lWZTRvR0x1L2o5VHM5Vkt4CmNXeGxCSkN3NEhjWXJBaUplYWRpZmtQUDNkQjlIdHh5VHI4emJlR0NmaGk5ais2Q1NEMDlQbHpJODlqNkRBUFR0SDJnWjV3cDBITXEKeXFIWTNSdU93MXhML1B1cUZuckdUR25vV3hpNGZKK3BGcEZLM3VsbEd4YXpuUHdsQlNiUkxmUldXYW1MWGpQME1pOFp5T3RrcVRBKwpUblFhZ1NKekJCejF6QnNDeTB5NmZwNU0yUWFoUDZaaW1ORXd2YkoyWWM4WWF4ZUx4VGpjQnJIUGxvZFdVK3NzZTJUZ2RqQWNDQ1FXCjA2eE9ob3JvV0Y5NngxNWE3TjhHWUFxd3JCNmN3b01QUDNUYnMzTnhNZmZ0bnR0eXFwdVgxamQ5ZUYzWXlEcG1nRnpMcURiaDl1cW8KWUhBSk9PbDJkRE5IZDdKNnhpUndHYlNNYlZYUFFISTF1N3dYODBqUHpBSGxDSnpMRnhlT2RFc1UrVm04cFk4VmtxV1ZDUUo5SHhaKwpKdmFEMjVoMEN3cGdCQ3gybjE1cmwvMk5lc2VzTG9iamU5N1hQYmVLWWVySC9TVUNXQmJMSlg3dytZL2M1dm1MVjZianR3RVkyYklWCkpMQVVWbWE1T2hFNXptNW10aktjWHFZeFJnZG1UZUpXWGN0ZWtqVkhuakFEVVl5M3BNY0F4aTdtZ0pFQWpnbHdYSm1nZVFUTks0TEYKalR1L0tGQ2t4aVdrM0k4cFdhSlB5YktZSmRrbHNMZ0lGdmFTQ1Znd1dSY1IrZzRsc2k5WjdoeTRKSWl3Um02V3BYWGh2bVFHbGxmVwpyZFV0SEZEdWpBbGYvdmdYOE8zVHIrUGlZMkIwSFZ1WnZxQkpTc2xxRzJjckZnZWloWEV4alNiR2I4Q0dGcm9ZOEN6ak1ETVp5bGxECmVJaUJ6REFDVWNmK2hlM1IwcndzV0Z3Mjg4ZEdYbVY5d1NBdjZzcHp2VXpZVHdPVTVobmJScGR5c0RZY2c4RkI5NXM3bWQ1VnRJb0cKS0xrZUpxYitTKzFWYmwzQ1ozNTArZ1QvNE1zL2N0OTgvNXUzU3NuY0w3NzhHZnpSSDN3Si85dGYveDl6VkUwV25NWmxsclQwUmFaQQp0QXhnTG1FT2NPcStrQmtBcUc1bWp3bEFHVEEwZnl4YUtFdjFoOExLNkt0blNUS1poWm5PV2h6bHpienZ3SmtGQ3M1a0hTZXdLRkNzCnpWRUNUQXBTQnQwaTJpTUFKVkV2RjZ5SEFNUWkvRnZWTkdaOTVHLzkzbVZCU2s2Um9YWFYxOVdDNHk0aGIyd1MwZCsxaEQyL3h6Ly8KZC8vVy9iZS8vOGVYUGpEMUt4MVZPbFMvL3ZXdjNTOS8rVXZNdEF4ZEgrQ3ozMzRkWmd6aW9sbHl5WC9JTGVzMXl4VEZxZ0IzVmJOYwpNZE1wdXhDYkNXa3lYREVBSWVvdnNSdElYakJON3N5dFRacUFHV1piNlpoZG1iQ2pjNTFFRzQwUmtlZWI0ZVY0ZWordHlqaUtIK2I2CnVOUlVudWZpcWZzNFVEQnpHWWZVbDB6azJ4VUtheE5pTEpZT3M0OEJ5aXdFUWNEb2lJb1ZCV1NjUThaOUpCcS94dEMrbUxYTG8wOCsKZHQvOTg3L0lkK0FKeWM5YWJXejBzck80YjJzUnpLWEpYT3BtcHRzTjNXNkllemFFcFFiWVhZekk3dVkxc3J2WnVSTVFkek95Vy9sRQo5aVBxUHJyYS9SV29xNWxybzVkMGpKWjBjSnZvWmdaWThLQTA4OExWV3NBV05SSllvbWFlTFhDZG5ETjR6NENTaTNzM2NoMlhMdVNnClZTRDJhc2pqS3pFZ2FicGxJeWt2aU54UmhWZjRCZDNmSUx1VTZjcnVZMlQzc1lPTlpTZHZwSGlNZ0VUQUVBMUUxa1NBUlBUck9tN2sKbDNZbDM3YUdpWXNvYUptejlrdzhadDF1RCtzSGo4ZzBlSzdJNUp3WnlRaVE2YkdvT2tjMURFTFE1bklKS1RVWWNzVWdMbTZqYW1wTgpvc01nMExGQzNFL0JiQlF0ZU5WRytxVndQNC9jMGZBYVR6WjNEU2lYVVRBMzZxVXdidUU2QjVaMlpFa3M5VVdzeURZREExT3hUUlQ2CkxQQkQrcjdHYW95S2hhSkRmbjNWTUJ5NFpDckcweVRXSjQvRXNyQkVaYy9Zb3E5eTdmTEtRZXJiQWt5aFpZTEh6TmNMYUphbnNwQTkKQWFXcUZsR0RwSVU4aXA5RUw1b1hiUU5KdUl0V2laWkJtemM3eVBRTG1IN0JlVS9ZU0tJSWNOeWhFUUJ3L1RnTnZHdEFPVVRCSUV2WApkMWszZmF0djZlZkFnbHBpWElERmxXRFpNbGh5bDdJbVYvcE01S05tSlZ0R2lCU1VnVk93Y0ZaeVZmZDFzeHJxcHNIS0w5Q1JETmllCnZ4RFAySXgyZVNYUTFMZHk1S2RhQmxYc3k1RFk0ZUxzcWVQWmdvdmxTZ1U1eXRrSXlKUkNDR1J5NjB6dEFlQzk1WlpWUWZpNzhKZzgKYmc0RFJNaWRCRzZTbVRGYXh6cmpIVzNDVmNyUTFJMmZXL2tqUVROVFpsTXNNbmdYZ0RMS0J5c0VmcHhGT3FKaG9lV1IwOFlWR1Zndwo2cFRTSStZaU5XTndGR243RnFCVTdVSmc4eFc3akpWeVdTMVZQM1FDbHJxdXBQK1lwTUlNL2JDN3VCanF4WEk0ZWZSaElmaHZRN3U4CnJyUGpiQ1ZtMERGa092MmlXVlo5MzFYZGZpOTZ4dk5FV2RKbm1qYmpPSDFtU1g5QldzWnoyb3lrd2JCZWNheFZFRVcvOEczVExuSmwKemFQYVJqVE1pbzRLcDh6d2FMUThiV1poSjRqWVpBT3RzdFBpTmVLK3kzWE5qS2E1anA2QmUycFJabU1zcmdoTWFud0ZZOVVrekpXZgpGMkN4K0lsNHcwVE1zM1lKYVRDcVhXUUxJUzJHOTRtdTRlZythdXBMOEpCcCtqOHRmZGNPZmR1eWg0eldrK1FSa3RDL3ppQ3V1MFBKCkRqZ0FpbjB5QW9vT2QxMDNVbVRHakdzTXNzREVramFScm9CQjJzUkxTa3AyZ1paRmJSSmVMY3RlemkwTmhHMytTTzQxZzZ0WC9uMEMKem8yQWt0R3hnb0taQ3psT2pTdnFXbExLUzVjMFN3S0xXaFFCeTdaSWZkSGJtMGpONUQ1czZlY1BYV0JFNEdmMU1oSjc0ZUFrbldkNwp5VXhHR1BiN3phSGlzRnRQc24xZGdCRUh3Qi8rL0kvaGhHaFk3YjNiRHgyc0h6N215aGpvOWx1bWFLQnUzeEF2c1FReHllWjNXUnhGCm4yTkxYNTBFUlp3bEM3SUFGR0NWTklOREpoZ2d1WjkxU25PeHlrYzFOZmdLd0hrYjRNR1hDRVE2TnhvZkF1T21leW1LbjF1VjNvMUwKaVRYV2tsT3dMWWFjc0N6MUJTU0NEMEczV0VWbGFKbGtqZ0t5S0hRS2JTMWJXVkpnd0JGWXZYeUdnVWZ3TFI4K2xqN0pmRWIreVNkZgp1QzgrK1puNy9KT2YzcHJRZjkyQWlRNkEvK1gvL0YvZDB4ZFAzY1Z1d3dOa1hidmJTdGQvRHQ1WGRTeGp6b09LVHZQTXdud2REMkZPCnFBVThGU0lDR20zS0N6bElJS1NWcVhVcEZ6KzZ5V1RNM01KWXhsbm1DSUFaVFlOd0RVQmNrdkQ1dWdCMFZUOHdkeDJndUZJRURxWEEKMS9rcm93aCtHWlJNSWo5YUZuTWhaemxoNms1MmFtM01Hd1piZFRtbjFCZW51V0xxRFJPd2VHMnBwSnFGeDF0STNLZHI2VlM4Mnc3dApmc2N0TC9HSDgrZjQ3Yk52OERhRi9xMkwvdXM0QVBJZmhuTjcydjErV0RRa1BUaVRXYVBENG1wMnlzR0VobWw3NXNpZExFSFRJdmtZCjdVSXFEbE9MTVI3clo1M2lJWjljbGliMWhxbFhPZ0c2UWtOckdLV1JhNXFVeUtsbXpoMjJYVmM1QTBaMThOSFZmUTFrSUlLRGE0TUkKRG5qQWtsYkJTVWRLbklERktGaXBWM29EaWVhSGFjK3dNZ2hwQ1pPUTB2ZVRSZEhVL0kxNXlFams5ekdhSDhDU2U4U2N0T1B5QnBaSwpBTHpmWFJ5a1lyY3A5RjhyWUFDZ2NEQjkrUGdoZlBuNWo5MFBMMXIzL093Wi91Nkg3NFlvV0Fnc083SStiSEZxeldaVzBEaUVrR3hwCm51T2tnWXhHS1QzTGJpSm0vRXp1NXdzL2dhUWNNQnRHYU5RMjJob3RaYWZTNTZpSkd3YzRZVGJ4ZWQ0M053WEgxUHBrQy9ZYWZCZXUKYTBWbXZWOWppNUszMk0yeWpZT0ZHV0xIL0hJUVZpN3dPOHNOQ3pYNW1YV0pGbVFuUWg1aWpHVVRVdmNSWTZMbENDeW1XYlJka3ZYZApKcW0vMzNPOFpWZzJ5d2htcG1PZmYvaVpPMW1mdUhxeGQzL3pkLzhnMzVGUDNDWnY3ellsSzZuWi8wRFU3UCtPMUN6ODdwS2MyWGZzCk9uT0x4VEpxbGRHS0tJUjlkc2FFcVBrREw0T1NSTmtmVGM4dUVqTU5LM2x5dGk2R2xUSTd3MFRsOEpMOEdIVHpZSmtBNVpDNUFYZHQKczRHSGhOTmw5QXNPMDdBWnE0SnBDQlpNUFdHQmZuRzJNT2QyVFJJcFlTcndKMkFCcDlZSHpNVnNZSkUyc2R3QlJocjUrZGdCeGp0MQpNdFJWUFhSZE8rUmRZQklWKzA3bVY3NE9LdmFteE9oc280eTZXZnBtZFFJWHo1LzZxcXA4MDZ5cWJuQVZuVCtxdnR0TGoyVnhON05iCkdLQ2grdzFYYlBJVjFHVWMwbWlzYWhObEsrNWxxYzdrMUJwYzJqNTVudnl0Vm1nMmN0VzBHVzVKeTJKcTRuSjJxV0t6c2pqUTJPVjgKSGZjelhBYUttd0RsT3NDWjJZZHo3bUpJdDRkeExZc0wvWTZuYlZ5TmhtSG9UbHJXNHdmTEFwWUhsbGRTQW1RdGtoUXN6b1VreStndApzNlJNRnZwYWppNDlrclZFbWQ2djZpc3ViM2Q5djkxdUpIMS9kZm9JejVXeEhISWYzenBnS3ZmNkw1UEZ3d21sN1c0clJXWEw5U1BvCnhDRnd6dUpHMW1aVk55bWRHSTFCcVNVeHo1ZVBlaWxabHN5YVFIWm1EZlFNSnFQSzArTmxrTTRkOHQxRGx0b0o1VFRuUTRzMmFnUzQKd2pxOERHWU92YSs5NTJ5UlYrWW1MaXlLOVVQb0xUZzRTY3ZIWUZFY3RDRTlIN0xDcjNFRVAzbkRYQkhGeDZobmNCZkF3dHJIZXk4VwpadUE2Rit1M1hZaDh4MDMzMjZGcVRuRkJGSXdUTEZ1TnZid3hzTVFJOTJ2emJaWU5NK0lYNEl6bUp6LzZqSS9BY0hIMi9kQnV6d2J2CjYyRzVPaDBXeEUzdElNa01rRUZHQVVCTGowc3VFVWVBOVF6bVl6NFM4Mk5hZVJzMTkyVkFqUGp3QlZnd0RHVy9QQ2MwZzFPTzdYQTMKaWtRcmx3Nk5OL0xHQytHenhiRU1NaUFxVHMyQzFJVEQ1aXhDWHJhYk40Y294ajNNOUlpZVVDYWNHZmNSVXV1aGFHc1Uzak5PSHc0ZApKbU1IRjdNVzFrakN4OUpoaTlUdngxZWxYWnJYQlJrWWNDNEFxY2M1MU4zSGZlSU55MFMvZ0VVQW90V1RJdkNSaThMNlZrVitBQXlQCnIrQUc0OTJ3UFg4NmJDNmVENXd2OXRGUGZqeHhacnhNWTR1N1JNa3VwV1pPMnpQNTljbXBCeHc4MFZMZjA1YlQrY2tLVlYyM3Qrem0KeFlJTzNJTDJMMmgvWXpSTjZSVlJzMEM3TExyUGtmNUUyZmp4Uk4rV3FKUk0vaGIwZHNvRWtQZVE3T2JhMnRKV2tHaGEwWUhUYVYrMQpuSmFaWG9iY296WkwwY1pVN0ZVMHpJeVlQeEN4RnhNOUxpY2UxOTJQbTRJblM1TzFSUW9pMzVuSWx4UFlXTU9FUUNTS05URkxNbXhqCnhuSUFpMUV3T2lHSzBPOTV0aDVIOFRuMVpkRklpYk0wRks5ZzhMVWZPbG9nRjJmUGh5c2krYThOTVpWN2M1ZlpBRHJIWi9hN3JldTYKbnFrWTNlL3Ava2EyU3M4V21XZE1lMTNJdk5ua0xYTmFmeFp5T1RYQW4zbkZ4Rk15OFpiRlNzRjhuNDVPZHpOOWdWMlowbDZPYlZCVwo1eUJia0hEZ2h3d1VyYVNCT0R0d2FHcGxnbVdDa1ZESGZPanBPTzNlNkJjVTFBdG05TWxJMUhjdXRMK3kxbGN1WkJxbkpNcXQ1SHhaCmhhU0xGZ2REQWRpR0dIU2dYZHNZOGRkMldudHZRaitBeFRTTEZJU1JOWkd1bGR3dXFWbzBNcjdpL1B5RnhGdmVGbGplTkdBdXpUcGgKamRtMU81SjAzU2pxZ0k3bkVpYlFWRkVSYUNmYStFUVhweXVycnNucERHYnViclFGbEVlMDh4OWhHRTNHeXFuVHdjVnNDeEh6OXowRQp2TEM0RTZqZ1NyQ2t2NE1Dd01rRkRMUHhFNWNOTGlwNmd4M0lBWE5GU3Y2MGxKanJXaVRseFJycjVYWDNTYThvV0V5ckJBcG1uU3FkCnB1bzc3ZmdpdmNmeXlYTjA3YnQ5ckczaGVVTVNuT3phUTNsaWJ3d3NyeVVPYzQyQVpoR255WTNOL044TjNDVFhxZE1NTlNsVzFiNkkKZVJQMGhoYUpkSVo5T29ORXUyN0lnWGR4V25Od200WThLQXh6RWp1alpqeTV0N2I0ekNJTWRjSnNGTWNNVFF0ZGNWTHJwN3hrbXQ0ZQpMUlVoQkNwelYvTjFhQm1PR2hMbXJuSE1MV29lWndwbm5kTHlqT2dYMnB6N1lnWnBuaHZXR1lERWpUd05VQVlIZ1BaQ3hrak50Rmw0CmRBNllGOHhYWHNTOWpLYWc5K201RjVmVXRkUjlEaFozZVRFWTVycUZ0Zkp0QmlqZnRvWTU5SjRIM2MxdVZLM0pVWGc2b0hWME8vdUsKWGNKQmY0anJXVFdOYWhSdUdDZzZSeldNN09QN3FuZmNVdDNNRU56TUMyc3dxSm5UZEIva2RuSTNpL3U1YkJKNEdEUmp3QlRBd2FtbAp6V3A3cmpqcHFLVk1xalp0MC81eFE3MUx3ZUt5bm1GMlloaDV4ekNPMGFOenp0N0toZk9PTDlOVUdIVXZXL0tsNmhUTkRZdXVZNTd2CnFIckZCTDRyTzVsR2tGelRmZnhHck12Ym9HUVQwR1FkWjV5MmxFS2dBeVI1WjVPa0VORTFJTFUxcVpVRlppNWlIMTNLU1o5b0FOSXMKenhEMGpCdDVsR2lQanFtMmRyTlF6b3lYeDJ4aytuZzQ3ZUF1djJLY3RqV2R1bFcrVG5nY2NUSnB6Y1ZpcmNtaUQrN2dWQ1pjYXBLNQp6aTJ4WTc3TE91Y0xLRXlqb0E0eTJsc3ZzRUNwU2xkeDd2RktNeWhGcTNqZWN2R1hOQk5uTVBrTUxLeFhzQ1Y5UTlhc0NsMWZyZ1RMCnFQUExXMm4zK3paVDBDY3pac0x0UTVhRzI4N1VkU1BOTWRTYlJWZDBzc1ZvYVR4YkNiTTJ1alhySVlITExQalpZQWhpOHVNb1ZrcGIKMmdLL0ZwaWxVU3RqQWM1QTAwSi9nR3lpV3VsQm03VTJwWVc1ckM4YVhKSjdOaCt4VHhabU9DVCtNdzlZSEdLVTl3eUw0L0tzL0RjSApreXQ2SDBQUU43SGJ2dlZCenF4S29HQTI5MFVIdldvRTMxY2Q5MExpWG1LY3B1OGt4cksvam1VWng4amVLRmplcUlZNW5CRlNmR21oCjVaMTZRdnpKb3c4R0FrMlJSeFZZQzUrRWg3NURncEFtVGlaTElucEZodEk2b1JrNlhOWVdTaHhQYmZRRFE2NlNGN2Zwd3BJSUNUeEMKMHlRVGdNRlRaQU5ZWTQxSTBjTFVnVERicHV6YW1RQ0RDRmVBSlNSM3htVE1VZm9PSHR5T2RVdU05MEFRL3IxWldOWm5DU2haa05KbQpTcWFZazNaNEVTOFp4a1VQKzR5YUtWQVNPUFpqc0doeitXQlZCc2tOMDhuRzBBMWtXWmlWMVZWekw4RHl0Z0Z6STlBd0RXdWF0UUtGCkxEaWZvTGh0V1lqVVI2OFRxdmhuaWlWaUZwVFNnQWw5bENHMTJlaEFCM2swVzZ5TW5Ra2w5aE5pTktaaEpFNERDVGhoY2xwdFpkTmgKZXBxTTlYQ2hTVWZXQ3NwTm13L09BS2RJbThOcnBMcVV1Z1VLbWhsU1hmclV3dFYxa0x4bG5RbjlNTUc2Y3phRU5YVExEMkFSb0lCdgpvNDZ4SG1PWkUyQ3ZmNE5LdlVEQnh6b2x6RzVCN29OTTVvV1lRazlIbC9RK0QzQ3RoNlk2R2ZiYml6c05scnNBbUN0QlE5ZTRlanlZCkk0cmpNYjVDT3VnaEhxY1hDVW4wR0hsL0FJNU5jZ2FyUDBjdGdJb0xSVHhDU3RVRUtFTHR2RjlrSmM2YWIxWjZ6aXlvS2NOdFV3NmEKZ3FPQzBETXRCSTl5SjBCZUJLZkwvakphTmwwa0tRTTNsU2lNYVpoNUI4TXN5YWdSNUw0T1RFMGVzVUVhZXR2Sm83VzVveDFHejVpTgpJbkV4Ynl5T0pIRmxFTk9zazRLRlg0ZFlkRmRsZmNRNHpZVXRTOWZ2aDVyb0dCbWRvVzIzUTcxYXkrZm03QThDQzk1RnNOd1Z3RndLCm1wUisxcm45L3NJdGwwdmNiemJJRFRZa0o1Sk9tR0N4REZRdUk0VTBRa2xVcU50c21saGV5NVNrTTgwU3hwODN1aWlpQnNvc0RKcFYKTWV0aXZjNGdhcG5ZRzBCQVk5SC8zSHNHQnB5NExWcmJXcloxdnMycVIxMFd0WTN1OUxnZHo3eFAzeGR6aHdBbWgwRWZwZ3ViNnp4YQoyUVFTYkczZ3FtVWs4M0VSbXRVYVFIS1BXUVlVeXdJUWtFQ25Wc1ZiTi8xSzUxbEsxSjRzM2FKaHpSS0NrQUpzT3JEODR0ZnBJL1pXCjUvbmN0WVlOaGZmc3M0KytnTC85Kzc5MmVSck5vbG5DYnJ0anA0Q0hvZk5kVDlldTljRVpJTU5tMWZVcldrTTFDRnNHQ0lzOUxYeXgKSHFDWnl5NXJtSkUxejJCblFxUmlxVEZnZnBVbWdmYWVWVDVGRGFmakJRKzdtc2ZiNHFqTWdPVnlGM0pXVWh6MVM1L0ZvYWJlTTBpZwp5WExLU21vV0FETWVoQldCSXBaRWRFb2Fud2VaWmVkNVcvM1FMRmNEc1lXaDUzcjh6WXRKaklXOVliLzN4Yjl4Zi9OMy8vWE9EYis2Cml4MU9Ec1pwd3BWNHJsOHNWckRkdk5CdU5MN3k5WUlCTXpCZmt6TStuZUVxT3J0Vm5xQkU2NnZtbkRTaUFqVU9nMWlHQ0JnRmdBaDgKRWZjWnFKeUJ4YVZoVFlzQ0xLR3I1cmdzSUhNQ0JKQ0VCb1JqUFpQOEdRVlE1cjFrSlZEY1dMY0V0M20wTENieUQwVDNOVE01QjAwWgpyRFNQbHMvdXM4YnhyVm5nWklsWXdFZWc2RGo1NE41bXk4NjFMSU40d25aSjJMTnVXWjRnSjFLNjYzVjV1Uk9UNHVvN0NKaTUzbnJGCndiTHU3UEljT3ZCRTA5YThPcFN4OC8rQjIxUjFTc08wbUZtemdUV1FJMjE1ZEhhSlVKTmFmbGgwZ2I4SGtJaHV5YXhSclpZSDJDMG4KSUdSZ09xTmk0RW9kQTBIUFdFODFpQ1BTbllmUjhDZXJGazJOUHB6TFVvRWdCUzFEaEI5R0pjV3FWeEJDRENkbE9FenFXakRHWnNRSwpXTEFTOGhHSzNRZ293UmtRaEh1TFEycEk0ZExmTXMzdEJ1d2tZcThWa21KZDZOaERhSnloL1krYkZXNjM1NlJkZHZqd3c4L3d4ZmRmCjN3dXczRlVMYzZtbFdaNnM0ZVR4WTNqeDNWT3dXSTFRSGUxNXRoTHZGSThKNlFOTml4UU5LNDNTZ3kxMDBTWGM2Nm1PTVIwSEJvb1EKYjNGbWFTQUhUVjVvWnBTdmlQeUhJYmVYeFdYUzFMUVFsOGt0VEhrN1IwK3lNSHA3Y0lkN0hROHBnaStld2NMS1FCbGQ3NEsxVVUwbgpLZjltY1NCWWpCaVJ0M3A3YVhmRWdQTWdYZlBaU2NBSmsveTNBM3ZCMkVQSnQ3bGhoZWZ1RGZ4Qjl2dGh1VDdCa0hGOFFsYm00eWVmCnVILzYrdis3ODJDNTY0QzVqSjZOYVZwY2tFelBGRGlEMTVnSUE4YjVwRzJJTGcwRDNTYTZ4dWJKZVFMQlVOR1BTc0RKNlZiUVBoRVUKbXZhdnNaZmFKZ3ZFN1J3ZDA2MUxrNk5uWE16dTZzRk9sd2NzUjY1a2lUL1JJZzEwYkk2V2lWVUpxVEFhbDdKb084UjRqSUlqenJ5UAorOFhiRlpwU09KK1B0SkJDcnpBRW1DZ3lBY1V6SFJzNEVOQ1R5TCtFZ3JuN0FKYjdBSmliZ0laVXlzSlh6Ukw2M1NaYUd3S0RXcHkrCjV6UUJya0txK0Q0dmFDODVOcnpJZWJFcmNGd0pna0tuaEh5eStIaUl3MHdIMFFwd2tuV1I1aDFoMHRxRWtrVmFWdWFTVGR6S1dlVm8KbWZZdjlRNld0U3dqZFRJTE0zWXJNMUJvMFljQWJnTFBrTWVrK3N6aWlDVUorMldPcE95cjJJTDBHaGoxdlpiV2Q5S3FWYWd3V1JXdQozY2c2VWs1MHlramMzM213M0F2QVdKWXpXSmJ6QkVEclpnVVBUeDdBTjgrK2RjR0x0amsvNDVHQnZsbXVHU2pRN2k2a25hWlF0R0h3ClhiZFh3RlIxMEJ5eGRhenFFUmdESndwN3lWb1dvS2kxWW1lQ3ZzWlFtVDdKNHpHWFViSWlrR2xNYkRZSk13Q0ZFeGhjbWhKMXFaZk0KcFR3MEJRWXRYZ1dKRGowSytWdXNMWGcvaXVWSWVXaEt0YUFmQkZ6UUMwQlF2RnpzTWhadHd1NWlmbDA2cnZUQkJuRVZzMFpackU2WQpmRWtnMHMyWFJrVFFmL2J4Uis3UC92UlAzRi8rMWEveXJHTzhEMmR2ZHgrdHpZUDFBL2pnNFFmdzM3LzU3MU9MUTZDcG1nYmF6WVhuCkM1MzlQRTlGVU1Bd2U2dkUybVRBOFJaTGlUbGlwbkhHR2NyVk9Hc1pCVHl1TXZwVk9aY0JKalRRQ0lPZHloUVptRFFqUE9SV1R2Z3AKNjJTOFYwdWpvQmlCUnF5SDlCWGpWUXd6V2NvakQ1bzhaMGdBa3ZzQklJUVhLZXd5YXliVXkxbWpQNDZyY05TK2J0Wm83bUs4aGdmcwp6bHVWdSs0bHU1RUhqZkNBRHg3UXJtK2NJMnZqeU5vNHNqYlI0ZFQ0SmZpbHc3YmpUSFFPTWUrMXZKaW9HcDhyUWFjRmFLMk1BcWdICjFBV1A2aWhnRVJ2ak8yeWhiRVI2VlhyRkpPTHZ4VHF4ZnNxVFJzSG1lUVpyb2puNmtEVjRMaTFMcUNyTjIwUmx6VHpFRUEyRFZYcEMKcWdrQ1BaTXJSUXNaenRiYVZYTHJMSmlaZ1FTMXRIWHdQalhxRzJSZjZFL0Fua1ROMG1hcllaMHZoNkNYMnYxV3JBb0JoNFBKdzJwNQppbGJOTjdFcTk1R0MzWGNMVTFDMFgzejVNL2Z6bi80WS91Ti8raTl1YkcwV3l6V2NQdjRJK200SDNXNGpOQzEzREhDcldqb2poaXhvCm9tdTFhQjY2SnV0Z25pNEZoeWNyTW5EOWdBQmlKdFpTWlJZbG4vS2NENE1LazZDek9Ua2V0T1pyQ000eUdEZHhLT2lZZUttSFdLUHYKc25KcnRpN0J5dkRXamNvRGl1Zy9uekdZY3ZGV0tKbHViVVprWGpKZ1ExN1ZpbkRuRmdHaWdhVE5ORXBWMWJoKytBaXJlc2x2UDNZWAp1ekVGdTA5QXViZUF1WXlpZmZqNEV6ZktEbkJ6bW9HcEdrOFE2TG9kOHpUbzJ6M2ZqNHM5VEhOV2VxVnpPSm5LQlNBWlpkUGU2Wm00Ck4yOWNUc0Ztc3BVaERaU3lOcmh4TU5Rd2Q4Sk4rWmg1eXlpeE1GbUpzM2JEaFRKYnVhQm9uQjZVbkFGREFsVHNkS011WUFGTjhYdzYKQkJ6UEVvdkNPc1hpS1ZnM1M4eDB5bVhVNjVBbHdmdTg0TzQxY01iV0pueTNFTGQ1K3B2ZnVrUEEyZTk0cEdMVU9IVGE3V2ovd2dEZwpnbnM2MHlRdTNiY0JIYWpQbzBYZit6alpPVWIzYlR4aG5Md0dWcW5nRDh5ZXdZeVMrUVB1WlZSYUZzQWkrNzNwR1dGcGJFRlFnQ0dVCnE4S2dOZmlTQ3Q4a3VKdHJucEIzTjNDTEVwWXNiRW1DUm5HWDlEZG9WaXQ4OE9FSDd2dC8vYzI5MXlydk5HQ3U4cVJkQlJ5K2NnZE8KN3UrODIvSGtCYUpzQmg1dWk4YldoMDdYWUE0Q0FVc0FCejlYQWNJeVpqQ2c4RnIxdHEzS01ZWDBkN3FHOWFJbmVpMS9NUUNOQUJNKwpJZ2FyNHJReUZOaHJLOW9GdEJsSVlXMU02TXVXQUMwRlFySWQrbGd2SkxWRW9rVlVuMVIxSTIvQ2pqRDYvcExFeXBuRURMYW1hWkE3ClRyNEVVT1QyZmZDQXZVOFc1cm8wemJuNTJaY3p0SzJLZEkyZ0JMU0lDRGpjQTVvcG00TUFtaXpPRWdCa1l0NEppTmd4RmJvLzg2QW8KRk1EMExtdnluN1dMRHFDWnJxbGhHS0psc2VkajhBVjRsbFhxSkl1dG9nSTRWRG9ObUFFRXpTR2dqVUpzQkI5RGpJdTVTTnV4N3pqWApKd2U3MkN3SlZFOGVQSEpmUC8xZGlLdTQreTdxcjdwVTd0MjlDRTBMZzJySHdVQ3lPTzdSeHgrNzdkbVovSkRjbFdhMVBuWEUwZVhICmx5YnB2c2F1NDZhTXZWQVNQaEVUa0NSUGkvUVBiNUVkYTV5OHBybHJYc1N3VVJ6dE1Ha2pHcVFmQURxcmNwUkNOa2twNFdBaFI4d3QKYU1qZXJNNHFJWXVyeEV2a3VhQnBMYWl4RkhVWDYydENxTytSM3NlV0FLbkJ4WjZUNi9odmVPSXd0MTN0dTFZNjVaQlE3L256MC9mcwpsYTcxblBZd0xPbzZ0allpRUEycmsxUHM5dnRvVVI1LytvazcrK0Vabm04dkloQjI3WmJuc2pockJvN3ZFbER1cTF2NUpqUU5qYVlWCjlUV1p4Y0hkeFNZbWQzSXk1OFlTT25rZnJTaGVWV1c4eElrVzRHUVh1aTZCaTl2YWRwZEY2d2ZvdTMyWUFpMjlvOVg2NkdSbnhnSUIKU2p4aU1vSE5SZ3FtWU11aDlaVWJSVFJ2bVJPdk40T1p2ZDRFQ05URUJaa1ZJclZCZmRiaFBzUnZ3Z21CdGM2Q1JEdDcxd2FKdWJxaQpHLzVtbTJhdmNIQi9jL1lpMHI3OWRpdjBhOGFpdUsrLy9RNmZ0YUd1RGZDZE93dTc5K01pMzNQR01lRGM1ZlgxQlgwallRUE42aFFxCk91SDNkSExmYnJjVFdzY3VBQjZ2emswSitUYnJJckpOREVCdVNBanN0UTFiN2VvNVNMY2NHY2wreGZvU0cwZUxXWHUweWQreHhTdTIKWElYS0JxeHJXd0VGdlM0M1NKelFLYktNdUZ5dUpPYmFFaUZydHk4T2ViY085eEdneTR5YitKMnpLdStGaFpreE9HNWtjYUxWbWZGQwpaYjMxRkRBOFVhQlpuc0xtL0tuakVwdUtSNmpiYTlEaWc4VmlJUUF5NXhmckZWYzNTdzc1RWJoYUdWSElvS2xsRnM3Z1ZPc2tmRWJCCkQ4TTgzc1VqcllGNzFUcVZ6TlpSaStJZDZROENVaTFiZWcrM2FMeFlCbnRaQVFoOVJrZWZVYTBObmYybGp2ajhPYkxZWDU5KzZEYm4KM3g5eUJ4OTBDOXVrcjNmV29yeXZGdVpLNThDQngrSjJzVnk3MWNrajJKdzlkY3YxS1p4ck54dDVQQUNvMzI2Y0pIL3Vkd0tNVHJZTAoyR3VQTmZhK3VacWVSMXhQdW5uV2k3V3U1cUYzYmJzUkFOUTJYS3EwTEFNOXZrVjlmTzNDMy9CQVZBS2xXSnQySjBCd0VoOGhZUERBCklRWU9XeGY2VEs0bktrYWZrUUJ5Rm9IQXduNTU4c0R0TmhlNGZ2RFlXYURSdWF0YnNMNFgxdVFJbU9zZGcwTkE0bG9jbDdtbUMwQXgKVFdvSURNenZGODBhdHB2blV0ekcwOVZJNTdobHM0S0x6Wms4bWVrVEEyTy92WWd2em1Cb2t0V2E4Wkp4ay9adFhKejJHbTV2b2xzSwo2WnFWMisyM1pFbVdaRW5PaFk3Ulp5R3dYWkJRWHp2U0lSTWdrSUIzbVV2NFVtdHlDV2plbTRzLzRrWEY4R2lPemV4WU8zWVN0TS9PCmhwOSsrbE81djI1V3c2ZFBQcFpZaGlZZG5nenNtdTI2YlgvNjZBT0paN1JkMnplcmh3T0JSZkswZUxaODA1eHlKbStaOU9pSmF5MFcKUGFHZ0p4VVVyK0JyMlUvaXBIait3SG5EYmR1djFvL0VJOGRKa2J0MlQrLzFhQ0N3OUp3VXVYcndjQ0RnOG12SVorUFB1VndzaDg4KworRVErTXhkdi9lanhaMGhndWFwTU9KKzdndThyV0k0VzV1V3N6cVhQc1FSUUtUZmdTNkJ5TDU1K25ZVGpvc2xwM2N1SlQzNE5vbFBuClAzd2ZGMjlONzUxVEt3S0h5K0lrTjdFVVIydHlCTXl0SGlPNHdiR2M3QitENm1VdUI4QnduVVdPcjdEdnVCaU9oK0JXamhlODZqRisKc0g3Z3Z2ajR4N0RaWFRpcjdaRUwwU2IzazA5LzZyYjdiYWg3dnpiVmZJbkhqaUM1eXJJZkQ4SE45TTRCSU9BbFlMbldJbXdhY0I4OApBVmVkYTIxUC9JSG9GK0w5RjF1U20xL2ZlRUhqTFQzbmVEbGVYb3YxZWFuckw3NzhHZnlIZi85bjQ1TG00dnJaeHgvNXYvanpYL3BYCmVaOGpvemhTc3VNeFBscU80K1c5NDNrNm52MVN5L0RWVjErRlhnREh5L0Z5dkJ3dng4dnhjcndjTDhmTDhmSStYLzUvQVFZQU9HbDMKd2MwMFM0VUFBQUFBU1VWT1JLNUNZSUk9IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjIzNTMgMCAwIDAuMjM1MyAwIDIpIj4KCQk8L2ltYWdlPgo8L3N2Zz4=\") !important;\n  background-position: 0 0 !important;\n  background-repeat: no-repeat !important;\n  /* stylelint-enable */ }\n\n.equatio-input-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  width: 48px;\n  height: 48px;\n  cursor: pointer;\n  outline: 0; }\n  .equatio-input-button:focus svg {\n    outline: -webkit-focus-ring-color auto 5px; }\n  .equatio-input-button:hover .equatio-input-button__icon {\n    color: #e5e5e5; }\n    .equatio-input-button:hover .equatio-input-button__icon.equatio-input-button__icon--red {\n      color: #860909; }\n    .equatio-input-button:hover .equatio-input-button__icon.equatio-input-button__icon--blue {\n      color: #33c5ff; }\n  .equatio-input-button[disabled] {\n    opacity: 0.3;\n    cursor: default; }\n\n.equatio-input-button--small {\n  width: 48px;\n  height: 48px;\n  margin: -5px 0 0; }\n  .equatio-input-button--small .equatio-input-button__icon {\n    width: 48px;\n    height: 48px; }\n\n.equatio-input-button--with--menu {\n  padding-right: 10px; }\n\n.equatio-input-button__icon {\n  color: #F2F2F2;\n  width: 48px;\n  height: 48px; }\n\n.equatio-input-button__icon--red {\n  color: #E51010; }\n\n.equatio-input-button__icon--blue {\n  color: #00B7FF; }\n\n.equatio-input-button--fixed {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  /* stylelint-disable */\n  /* stylelint-enable */ }\n  .equatio-input-button--fixed[data-balloon] {\n    position: absolute !important; }\n\n.equatio-speech-wrapper {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  margin-bottom: -20px; }\n\n.equatio-speech-wrapper--left {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin-right: 5px; }\n\n.equatio-speech-wrapper--right {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-align-items: center;\n  align-items: center;\n  margin-top: -42px; }\n\n.equatio-speech-area {\n  top: -20px;\n  position: relative;\n  background: transparent;\n  border: 0;\n  width: 100%;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  font-family: Roboto, Arial, sans-serif;\n  font-size: 0.9em;\n  resize: none; }\n  .equatio-speech-area::placeholder {\n    font-size: 14px;\n    color: #A9A9A9; }\n  .equatio-speech-area::-webkit-input-placeholder {\n    font-size: 14px;\n    color: #A9A9A9; }\n  .equatio-speech-area:-ms-input-placeholder {\n    font-size: 14px;\n    color: #A9A9A9; }\n  .equatio-speech-area:-moz-placeholder {\n    font-size: 14px;\n    color: #A9A9A9; }\n  .equatio-speech-area::-moz-placeholder {\n    font-size: 14px;\n    color: #A9A9A9; }\n  .equatio-speech-area[disabled] {\n    color: #979797; }\n\n.equatio-speech-placeholder {\n  color: #A9A9A9;\n  font-family: Roboto, Arial, sans-serif;\n  font-size: 0.9em;\n  opacity: 1;\n  transition: opacity 0.3s ease-in-out; }\n\n.equatio-speech-placeholder--hidden {\n  opacity: 0;\n  pointer-events: none; }\n\n.equatio-speech-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  cursor: pointer;\n  outline: 0; }\n  .equatio-speech-button:focus svg {\n    outline: -webkit-focus-ring-color auto 5px; }\n  .equatio-speech-button:hover .equatio-speech-button__icon--start {\n    color: #e5e5e5; }\n  .equatio-speech-button:hover .equatio-speech-button__icon--pause {\n    color: #ba1313; }\n\n.equatio-speech-button__icon {\n  height: 48px; }\n  .equatio-speech-button__icon.equatio-speech-button__icon--start {\n    color: #F2F2F2; }\n  .equatio-speech-button__icon.equatio-speech-button__icon--pause {\n    color: #D11515; }\n\n.equatio-speech-indicator {\n  height: 28px;\n  display: none; }\n  .equatio-speech-indicator.equatio-speech-indicator--shown {\n    display: block; }\n\n.equatio-blur-wrapper--shown {\n  -webkit-filter: blur(3px);\n  pointer-events: none; }\n\n.equatio-modal-overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.8);\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: opacity 0.3s ease-in-out;\n  -moz-transition: opacity 0.3s ease-in-out;\n  -ms-transition: opacity 0.3s ease-in-out;\n  -o-transition: opacity 0.3s ease-in-out;\n  transition: opacity 0.3s ease-in-out; }\n\n.equatio-modal-overlay--shown {\n  opacity: 1;\n  pointer-events: all;\n  visibility: visible; }\n\n.equatio-modal-popup {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  min-width: 640px;\n  min-height: 480px;\n  border: 0;\n  background: #FFF;\n  -webkit-box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n  -moz-box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n  box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n  position: relative; }\n\n.equatio-modal-popup__close {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  display: block;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  padding: 5px;\n  cursor: pointer; }\n  .equatio-modal-popup__close:hover .equatio-modal-popup__close__icon {\n    color: #35373b; }\n\n.equatio-modal-popup__close__icon {\n  height: 12px;\n  color: #666A70; }\n\n.equatio-settings {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1; }\n\n.equatio-settings-pane {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1; }\n\n.equatio-settings-pane--main {\n  -webkit-flex: 2;\n  -ms-flex: 2;\n  flex: 2;\n  padding-top: 55px;\n  overflow-y: auto; }\n\n.equatio-settings-nav {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  background: #F2F2F2; }\n\n.equatio-settings-nav__title {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  font-weight: 500;\n  -webkit-font-smoothing: antialiased;\n  margin: 20px 15px;\n  color: #414042; }\n\n.equatio-settings-menu {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  margin: 5px 0; }\n\n.equatio-settings-menu-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  display: block;\n  padding: 10px 15px;\n  width: 100%;\n  text-align: left;\n  font-family: Roboto, Arial, sans-serif;\n  font-size: 0.9em;\n  color: #666A70;\n  cursor: pointer; }\n  .equatio-settings-menu-button:hover {\n    background: #e5e5e5; }\n\n.equatio-settings-menu-button--selected {\n  border-left: 5px solid #00B7FF;\n  background: #D8D8D8;\n  padding-left: 10px;\n  font-weight: 600; }\n\n.equatio-settings-logo {\n  color: #00B7FF;\n  height: 35px;\n  margin: 20px auto 30px;\n  display: block; }\n\n.equatio-settings-feedback {\n  display: inline-block;\n  font-family: Roboto, Arial, sans-serif;\n  font-size: 0.9em;\n  margin: 0 15px;\n  /* stylelint-disable */\n  color: #666A70 !important;\n  text-decoration: none !important;\n  /* stylelint-enable */ }\n  .equatio-settings-feedback:hover {\n    text-decoration: underline !important; }\n\n.equatio-settings-fieldset {\n  border: 0;\n  color: #666A70;\n  font-family: Roboto, Arial, sans-serif;\n  margin: 0 20px 10px; }\n  .equatio-settings-fieldset .equatio-select {\n    min-width: 175px; }\n\n.equatio-settings-fieldset__legend {\n  padding: 0;\n  font-weight: 600; }\n\n.equatio-settings-fieldset__list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n\n.equatio-settings-fieldset__list__item {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  padding: 5px 0; }\n  .equatio-settings-fieldset__list__item label {\n    -webkit-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    font-size: 0.9em; }\n\n.equatio-settings-pane-message {\n  margin: 0 20px;\n  text-align: center; }\n\n.equatio-settings-pane-link {\n  /* stylelint-disable */\n  text-decoration: none !important;\n  color: #00B7FF !important;\n  display: inline-block;\n  margin: 0 5px;\n  vertical-align: middle;\n  /* stylelint-enable */ }\n  .equatio-settings-pane-link:hover {\n    text-decoration: underline !important; }\n  .equatio-settings-pane-link svg {\n    height: 22px; }\n\n.equatio-profile-pane-name-input {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  margin: 0 5px 0 0; }\n  .equatio-profile-pane-name-input:last-child {\n    margin: 0 0 0 5px; }\n\n.equatio-license-pane {\n  padding: 0; }\n\n.equatio-license-wrapper {\n  padding: 25px;\n  max-width: 435px; }\n\n.equatio-license-emotion {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n\n.equatio-license-emotion__graphic {\n  height: 150px; }\n\n.equatio-license-wrapper__license-message {\n  margin: 0;\n  text-align: left;\n  padding: 25px 0 10px;\n  color: #666A70; }\n\n.equatio-license-pane-list {\n  color: #666A70; }\n\n.equatio-license-pane-list__item {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: left;\n  align-items: left;\n  padding-bottom: 5px;\n  display: list-item; }\n  .equatio-license-pane-list__item label {\n    -webkit-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    font-size: 0.9em; }\n\n.equatio-license-pane-list__item--square {\n  list-style-type: square outside none; }\n\n.equatio-license-pane__legend {\n  padding: 10px 0 0;\n  font-weight: 600;\n  color: #666A70; }\n\n.equatio-license-buttonset {\n  text-align: right;\n  margin-top: 35px; }\n\n.equatio-license-linkbutton {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  font-family: Roboto, Arial, sans-serif;\n  text-transform: uppercase;\n  color: #494949;\n  text-decoration: none;\n  font-size: 0.85em;\n  cursor: pointer;\n  font-weight: 500;\n  -webkit-font-smoothing: antialiased;\n  margin-bottom: 3px;\n  margin-right: 15px; }\n  .equatio-license-linkbutton:hover {\n    text-decoration: underline; }\n\n/* stylelint-disable */\n/* stylelint-enable */\n.equatio-share-pane__legend {\n  padding: 10px 0;\n  font-weight: 600;\n  color: #666A70; }\n\n.equatio-share-pane-social-buttons__list {\n  margin: 0 5px; }\n\n.equatio-share-buttonset {\n  margin: 10px 0; }\n\n.equatio-share-pane-social-buttons {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  margin: 20px 0; }\n\n.equatio-share-pane-social-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  cursor: pointer; }\n  .equatio-share-pane-social-button:hover {\n    -webkit-filter: brightness(110%); }\n\n.equatio-share-pane-social-button__image {\n  height: 38px; }\n\n.equatio-share-link-selector {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  margin: 10px 0; }\n\n.equatio-share-link-selector__input {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  width: 100%;\n  font-size: 1em; }\n\n.equatio-share-link-selector__button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  /* stylelint-disable-next-line */\n  background: #00B7FF url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='18px' viewBox='0 0 72 72'>%3Cpath style='fill:%23FFFFFF;' d='M24,37.5V27l12,12H25.5C24.7,39,24,38.3,24,37.5z M22.5,42H36v28.5c0,0.8-0.7,1.5-1.5,1.5h-33C0.7,72,0,71.3,0,70.5v-42C0,27.7,0.7,27,1.5,27H21v13.5C21,41.3,21.7,42,22.5,42z M42.1,15h17.9c1.7,0,3.1-1.3,3.1-3V9.1C63,7.4,61.6,6,59.9,6H57V3.3C57,1.6,55.6,0,54,0h-6c-1.6,0-3,1.6-3,3.3V6h-2.9C40.4,6,39,7.4,39,9.1V12C39,13.7,40.4,15,42.1,15zM44.4,48.6H39V57h5.4V48.6z M70.5,9H66v6.1c0,1.7-1.4,2.9-3,2.9H39c-1.6,0-3-1.3-3-2.9V9h-4.5C30.7,9,30,9.7,30,10.5V27l8.4,8.4h6V24l18,18l-15,15h23.1c0.8,0,1.5-0.5,1.5-1.3V10.5C72,9.7,71.3,9,70.5,9z M55.8,42L48,34.2V39h-9v6h9v4.8L55.8,42z'/%3E</svg>\") 50% 50% no-repeat;\n  width: 32px;\n  margin-left: 5px;\n  cursor: pointer; }\n  .equatio-share-link-selector__button:hover {\n    -webkit-filter: brightness(110%); }\n\n.equatio-share-pane__message {\n  margin: 10px 0; }\n\n.equatio-upgrade-overlay {\n  background: #00B7FF;\n  transform: translateY(110%);\n  -webkit-transition: all 0.3s ease-in-out;\n  -moz-transition: all 0.3s ease-in-out;\n  -ms-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  pointer-events: none;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0; }\n\n.equatio-upgrade-overlay--with-shadow {\n  -webkit-box-shadow: 0 -2px 15px 0 rgba(50, 50, 50, 0.35);\n  -moz-box-shadow: 0 -2px 15px 0 rgba(50, 50, 50, 0.35);\n  box-shadow: 0 -2px 15px 0 rgba(50, 50, 50, 0.35); }\n\n.equatio-upgrade-overlay--shown {\n  opacity: 0.89;\n  pointer-events: all;\n  transform: translateY(0); }\n\n.equatio-upgrade-overlay-wrapper {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  min-height: 134px;\n  padding: 50px 0; }\n\n.equatio-upgrade-overlay-section {\n  padding: 0 20px; }\n\n.equatio-upgrade-overlay-section--left {\n  -webkit-flex: 2;\n  -ms-flex: 2;\n  flex: 2;\n  text-align: right;\n  border-right: 1px solid #94D5F4; }\n\n.equatio-upgrade-overlay-section--right {\n  -webkit-flex: 4;\n  -ms-flex: 4;\n  flex: 4; }\n\n.equatio-upgrade-overlay-logo {\n  height: 55px;\n  color: #FFF; }\n\n.equatio-upgrade-buttonset {\n  margin: 20px 0; }\n\n.equatio-upgrade-buttonset .equatio-buttonset__item:first-child {\n  margin-left: 0; }\n\n.equatio-upgrade-linkbutton {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  font-family: Roboto, Arial, sans-serif;\n  text-transform: uppercase;\n  color: #FFF;\n  text-decoration: none;\n  font-size: 0.85em;\n  cursor: pointer;\n  font-weight: 500;\n  -webkit-font-smoothing: antialiased;\n  margin-bottom: 3px; }\n  .equatio-upgrade-linkbutton:hover {\n    text-decoration: underline; }\n\n.equatio-upgrade-overlay-section-message {\n  color: #FFF;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.85em;\n  margin-right: 8px; }\n\n.equatio-upgrade-student-message {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  margin: 0;\n  color: #FFF;\n  -webkit-font-smoothing: antialiased;\n  letter-spacing: -0.5px;\n  font-weight: 600; }\n\n.equatio-upgrade-teacher-message {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  margin: 0;\n  color: #FFF;\n  -webkit-font-smoothing: antialiased;\n  letter-spacing: -0.5px; }\n\n.equatio-upgrade-iconset {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  margin-top: 15px;\n  max-width: 700px; }\n\n.equatio-upgrade-iconset__item {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center; }\n\n.equatio-upgrade-iconset-image {\n  width: 50px;\n  height: 50px; }\n\n.equatio-upgrade-iconset-message {\n  margin: 0 10px;\n  color: #FFF;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.9em;\n  letter-spacing: -0.5px; }\n\n.equatio-upgrade-privacy-policy {\n  padding: 10px 20px;\n  text-align: right; }\n  .equatio-upgrade-privacy-policy a {\n    color: #FFF;\n    font-size: 0.85em;\n    -webkit-font-smoothing: antialiased;\n    text-decoration: none;\n    /* stylelint-disable-next-line */ }\n    .equatio-upgrade-privacy-policy a:hover {\n      text-decoration: underline; }\n\n.equatio-upgrade-overlay {\n  background: #00B7FF;\n  transform: translateY(110%);\n  -webkit-transition: all 0.3s ease-in-out;\n  -moz-transition: all 0.3s ease-in-out;\n  -ms-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  pointer-events: none;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0; }\n\n.equatio-upgrade-overlay--with-shadow {\n  -webkit-box-shadow: 0 -2px 15px 0 rgba(50, 50, 50, 0.35);\n  -moz-box-shadow: 0 -2px 15px 0 rgba(50, 50, 50, 0.35);\n  box-shadow: 0 -2px 15px 0 rgba(50, 50, 50, 0.35); }\n\n.equatio-upgrade-overlay--shown {\n  opacity: 0.89;\n  pointer-events: all;\n  transform: translateY(0); }\n\n.equatio-upgrade-overlay-wrapper {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  min-height: 134px;\n  padding: 50px 0; }\n\n.equatio-upgrade-overlay-section {\n  padding: 0 20px; }\n\n.equatio-upgrade-overlay-section--left {\n  -webkit-flex: 2;\n  -ms-flex: 2;\n  flex: 2;\n  text-align: right;\n  border-right: 1px solid #94D5F4; }\n\n.equatio-upgrade-overlay-section--right {\n  -webkit-flex: 4;\n  -ms-flex: 4;\n  flex: 4; }\n\n.equatio-upgrade-overlay-logo {\n  height: 55px;\n  color: #FFF; }\n\n.equatio-upgrade-buttonset {\n  margin: 20px 0; }\n\n.equatio-upgrade-buttonset .equatio-buttonset__item:first-child {\n  margin-left: 0; }\n\n.equatio-upgrade-linkbutton {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  font-family: Roboto, Arial, sans-serif;\n  text-transform: uppercase;\n  color: #FFF;\n  text-decoration: none;\n  font-size: 0.85em;\n  cursor: pointer;\n  font-weight: 500;\n  -webkit-font-smoothing: antialiased;\n  margin-bottom: 3px; }\n  .equatio-upgrade-linkbutton:hover {\n    text-decoration: underline; }\n\n.equatio-upgrade-overlay-section-message {\n  color: #FFF;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.85em;\n  margin-right: 8px; }\n\n.equatio-upgrade-student-message {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  margin: 0;\n  color: #FFF;\n  -webkit-font-smoothing: antialiased;\n  letter-spacing: -0.5px;\n  font-weight: 600; }\n\n.equatio-upgrade-teacher-message {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  margin: 0;\n  color: #FFF;\n  -webkit-font-smoothing: antialiased;\n  letter-spacing: -0.5px; }\n\n.equatio-upgrade-iconset {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  margin-top: 15px;\n  max-width: 700px; }\n\n.equatio-upgrade-iconset__item {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center; }\n\n.equatio-upgrade-iconset-image {\n  width: 50px;\n  height: 50px; }\n\n.equatio-upgrade-iconset-message {\n  margin: 0 10px;\n  color: #FFF;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.9em;\n  letter-spacing: -0.5px; }\n\n.equatio-upgrade-privacy-policy {\n  padding: 10px 20px;\n  text-align: right; }\n  .equatio-upgrade-privacy-policy a {\n    color: #FFF;\n    font-size: 0.85em;\n    -webkit-font-smoothing: antialiased;\n    text-decoration: none;\n    /* stylelint-disable-next-line */ }\n    .equatio-upgrade-privacy-policy a:hover {\n      text-decoration: underline; }\n\n/* stylelint-disable */\n/* stylelint-enable */\n.equatio-profile-bar {\n  background: #F2F2F2;\n  border-bottom: 1px solid #D3D3D3;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  padding: 5px 10px; }\n\n.equatio-profile-actions {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center; }\n\n.equatio-profile-input-wrapper {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center; }\n\n.equatio-profile-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  cursor: pointer;\n  margin: 0 -5px 0 0; }\n  .equatio-profile-button:hover .equatio-profile-button__image {\n    filter: brightness(110%); }\n\n.equatio-profile-button__image {\n  border-radius: 50%;\n  border: 4px solid #00B7FF; }\n\n.equatio-profile-button__chevron {\n  height: 8px;\n  margin: 0 5px;\n  transform: rotate(180deg);\n  transition: transform 0.5s ease-in-out; }\n  .equatio-profile-button__chevron.equatio-profile-button__chevron--expanded {\n    transform: rotate(0); }\n\n.equatio-profile-flyout {\n  position: relative; }\n  .equatio-profile-flyout .equatio-flyout-menu {\n    position: absolute;\n    width: 200px;\n    right: -10px;\n    top: 46px;\n    z-index: -1;\n    transform: translateY(0); }\n    .equatio-profile-flyout .equatio-flyout-menu.equatio-flyout-menu--hidden {\n      transform: translateY(-63px); }\n\n.equatio-profile-action-spacer {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  max-width: 50px; }\n\n.equatio-document-actions {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center; }\n\n.equatio-document-action {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center; }\n\n.equatio-document-action--feedback {\n  margin: 0 20px; }\n\n.equatio-feedback-view-label {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  font-size: 0.8em;\n  color: #484848;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -webkit-font-smoothing: antialiased; }\n\n.equatio-feedback-view-label--active {\n  color: #1FBD79; }\n\n.equatio-document-action--feedback .equatio-radio-checkbox {\n  margin-left: 5px; }\n\n.equatio-profile-label {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  font-size: 0.8em;\n  color: #484848;\n  -webkit-user-select: none;\n  -webkit-font-smoothing: antialiased; }\n\n.equatio-radio-checkbox--teacher:before {\n  content: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='23px' viewBox='2641.75 -478.762 39.262 23.523'>%3Cg id='Group_325' data-name='Group 325' transform='translate(2468.512 -525)'%3E  %3Cpath id='switch_off_path' style='fill: rgba(255,255,255,0.3); stroke: %23cecece; fill-rule: evenodd;' d='M37,10a6.957,6.957,0,0,1-7,7H10a6.957,6.957,0,0,1-7-7H3a6.957,6.957,0,0,1,7-7H30a6.957,6.957,0,0,1,7,7Z' transform='translate(175 48)'/%3E  %3Cg id='Group_324' data-name='Group 324' transform='translate(-1298 19)'%3E%3Cpath id='switch_off_button' style='fill: %2300b7ff; stroke: rgba(0,0,0,0); stroke-width: 0.5px;' d='M11.512,0A11.512,11.512,0,1,1,0,11.512,11.512,11.512,0,0,1,11.512,0Z' transform='translate(1471.488 27.488)'/%3E%3Cg id='Group_320' data-name='Group 320' transform='translate(1476.73 32.76)'%3E  %3Cpath id='Path_749' data-name='Path 749' style='fill: none;' d='M5.815,2.239,2,5.895v.477c.159.159.159.159.318,0L5.974,2.716c.159-.159.159-.159,0-.318C5.974,2.08,5.974,2.08,5.815,2.239Z' transform='translate(1.179 1.258)'/%3E  %3Cpath id='Path_750' data-name='Path 750' style='fill: none;' d='M.6,6.472v.636H1.713v.954h.636L3.461,6.79,1.872,5.2Z' transform='translate(0.354 3.066)'/%3E  %3Cpath id='Path_751' data-name='Path 751' style='fill: %23fff;' d='M9.033,1.908,7.443.318C7.125.159,6.966,0,6.649,0s-.477.159-.795.318L4.9,1.272l3.02,3.02.954-.954A.852.852,0,0,0,9.351,2.7,1.214,1.214,0,0,0,9.033,1.908Z' transform='translate(2.889)'/%3E  %3Cpath id='Path_752' data-name='Path 752' style='fill: %23fff;' d='M0,8.353v3.02H3.02L10.173,4.22,7.153,1.2ZM2.7,10.42H2.066V9.466H.954V8.83L2.225,7.558l1.59,1.59Zm4.61-7.312L3.656,6.923H3.179V6.446L6.835,2.79c.159-.159.159-.159.318,0C7.471,2.949,7.471,2.949,7.312,3.108Z' transform='translate(0 0.708)'/%3E%3C/g%3E  %3C/g%3E%3C/g%3E</svg>\"); }\n\n.equatio-radio-checkbox--teacher:checked:before {\n  content: url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='23px' viewBox='2641.5 -383.762 39.262 23.523'>%3Cg id='Group_323' data-name='Group 323' transform='translate(1166 -440)'%3E  %3Cpath id='switch_off_path' style='fill: %2382e370; stroke: %2382e370; fill-rule: evenodd;' d='M37,10a6.957,6.957,0,0,1-7,7H10a6.957,6.957,0,0,1-7-7H3a6.957,6.957,0,0,1,7-7H30a6.957,6.957,0,0,1,7,7Z' transform='translate(1473 58)'/%3E  %3Cg id='Group_322' data-name='Group 322' transform='translate(20 29)'%3E%3Cpath id='switch_off_button' style='fill: %2300b7ff; stroke: rgba(0,0,0,0); stroke-width: 0.5px;' d='M11.512,0A11.512,11.512,0,1,1,0,11.512,11.512,11.512,0,0,1,11.512,0Z' transform='translate(1471.488 27.488)'/%3E%3Cg id='Group_320' data-name='Group 320' transform='translate(1476.73 32.76)'%3E  %3Cpath id='Path_749' data-name='Path 749' style='fill: none;' d='M5.815,2.239,2,5.895v.477c.159.159.159.159.318,0L5.974,2.716c.159-.159.159-.159,0-.318C5.974,2.08,5.974,2.08,5.815,2.239Z' transform='translate(1.179 1.258)'/%3E  %3Cpath id='Path_750' data-name='Path 750' style='fill: none;' d='M.6,6.472v.636H1.713v.954h.636L3.461,6.79,1.872,5.2Z' transform='translate(0.354 3.066)'/%3E  %3Cpath id='Path_751' data-name='Path 751' style='fill: %23fff;' d='M9.033,1.908,7.443.318C7.125.159,6.966,0,6.649,0s-.477.159-.795.318L4.9,1.272l3.02,3.02.954-.954A.852.852,0,0,0,9.351,2.7,1.214,1.214,0,0,0,9.033,1.908Z' transform='translate(2.889)'/%3E  %3Cpath id='Path_752' data-name='Path 752' style='fill: %23fff;' d='M0,8.353v3.02H3.02L10.173,4.22,7.153,1.2ZM2.7,10.42H2.066V9.466H.954V8.83L2.225,7.558l1.59,1.59Zm4.61-7.312L3.656,6.923H3.179V6.446L6.835,2.79c.159-.159.159-.159.318,0C7.471,2.949,7.471,2.949,7.312,3.108Z' transform='translate(0 0.708)'/%3E%3C/g%3E  %3C/g%3E%3C/g%3E</svg>\"); }\n\n.equatio-profile-input-title {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  background: transparent;\n  border: 0;\n  color: #333;\n  font-size: 0.9em;\n  text-overflow: ellipsis;\n  width: 175px;\n  padding: 5px; }\n  .equatio-profile-input-title::-webkit-input-placeholder {\n    color: #95989A; }\n\n.equatio-profile-input-icon {\n  display: block;\n  margin-right: 5px; }\n\n.equatio-profile-input-icon__image {\n  height: 32px; }\n\n/* stylelint-disable */\n/* stylelint-enable */\n.equatio-mathspace-floating-window {\n  background: #F7F7F7;\n  max-width: 300px;\n  box-shadow: 2px 2px 31px -5px rgba(51, 51, 51, 0.4); }\n\n.equatio-mathspace-floating-header {\n  background: #EDEDED;\n  border-radius: 0 0 15px 15px;\n  display: block;\n  margin: 0;\n  padding: 10px 15px;\n  border: 0; }\n\n.equatio-mathspace-floating-header__title {\n  overflow: hidden;\n  text-indent: -9999px;\n  height: 0;\n  margin: 0;\n  padding: 0; }\n\n.equatio-mathspace-floating-move-target {\n  cursor: move; }\n\n.equatio-mathspace-floating-header__icon {\n  height: 14px;\n  color: #ACACAC; }\n\n.equatio-mathspace-floating-group {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  padding: 10px 15px; }\n\n.equatio-mathspace-floating-group-header {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  font-family: \"Open Sans\", Arial, sans-serif;\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  text-align: left;\n  font-size: 0.9em;\n  text-transform: uppercase;\n  color: #969696;\n  font-weight: 600;\n  -webkit-font-smoothing: antialiased;\n  /* stylelint-disable-next-line */\n  background: transparent url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='8px' viewBox='0 0 8.7 6.4'>%3Cpath id='Path_745' style='fill:%23969696;' d='M0,0h8.7L4.4,6.4L0,0z'/%3E</svg>\") 100% 50% no-repeat; }\n  .equatio-mathspace-floating-group-header:hover {\n    cursor: pointer;\n    color: #333;\n    /* stylelint-disable-next-line */\n    background: transparent url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='8px' viewBox='0 0 8.7 6.4'>%3Cpath id='Path_745' style='fill:%23333;' d='M0,0h8.7L4.4,6.4L0,0z'/%3E</svg>\") 100% 50% no-repeat; }\n\n.equatio-mathspace-floating-group-header--collapsed {\n  /* stylelint-disable-next-line */\n  background: transparent url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='8px' viewBox='0 0 8.7 6.4'>%3Cpath id='Path_745' style='fill:%23969696;' d='M4.4,0l4.4,6.4H0L4.4,0z'/%3E</svg>\") 100% 50% no-repeat; }\n  .equatio-mathspace-floating-group-header--collapsed:hover {\n    /* stylelint-disable-next-line */\n    background: transparent url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='8px' viewBox='0 0 8.7 6.4'>%3Cpath id='Path_745' style='fill:%23333;' d='M4.4,0l4.4,6.4H0L4.4,0z'/%3E</svg>\") 100% 50% no-repeat; }\n\n.equatio-mathspace-floating-iconset {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  max-height: 1000px;\n  transition: max-height 1s ease-in-out;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 5px;\n  margin: 10px 0; }\n\n.equatio-mathspace-floating-iconset--collapsed {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 1s cubic-bezier(0, 1, 0, 1); }\n\n.equatio-mathspace-floating-iconset-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%; }\n  .equatio-mathspace-floating-iconset-button:hover {\n    background: #EDEDED; }\n  .equatio-mathspace-floating-iconset-button[disabled] {\n    opacity: 0.3;\n    cursor: default; }\n\n.equatio-mathspace-floating-iconset-button__icon {\n  color: #484848;\n  max-height: 23px; }\n\n.equatio-settings-fieldset[disabled] {\n  -webkit-filter: grayscale(1.5) brightness(140%); }\n\n.equatio-settings-loading-spinner {\n  height: 100%;\n  margin: 0 auto; }\n\n.equatio-settings-profile {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center; }\n\n.equatio-settings-profile-image {\n  height: 52px;\n  max-width: 52px;\n  border-radius: 50%;\n  border: 4px solid #00B7FF; }\n\n.equatio-settings-profile-detail {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  margin: 0 10px; }\n\n.equatio-settings-profile-detail-name {\n  font-size: 1.2em; }\n\n.equatio-companion-discover {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -moz-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-align-items: center;\n  align-items: center;\n  max-height: 350px;\n  min-height: 250px; }\n\n.equatio-companion-discover-title {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center; }\n\n.equatio-companion-discover-details {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  padding: 15px;\n  height: 100%;\n  box-sizing: border-box; }\n\n.equatio-companion-discover-qr {\n  width: 150px;\n  height: 150px; }\n\n.equatio-companion-discover-link {\n  color: #00B7FF;\n  font-weight: 500; }\n\n.equatio-companion-discover-title-premium-icon {\n  margin-left: 7px;\n  height: 24px; }\n\n/* stylelint-disable */\n/* stylelint-enable */\n.equatio-companion-discover-rotator {\n  height: 100%;\n  width: 180px; }\n\n.equatio-companion-discover-compatibility-title {\n  margin: 0 0 5px;\n  font-size: 1em;\n  font-weight: 500;\n  -webkit-font-smoothing: antialiased; }\n\n.equatio-companion-discover-compatibility-table {\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n\n.equatio-companion-discover-compatibility-table-icon {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center;\n  padding: 5px 0; }\n\n.equatio-companion-discover-compatibility-table-icon__label {\n  margin-left: 5px; }\n\n.equatio-companion-discover-compatibility-table-icon__image {\n  height: 32px; }\n\n.equatio-companion-discover-compatibility-table-icon__image--safari {\n  margin-bottom: -4px; }\n\n.equatio-companion-discover-compatibility-table-browser-label {\n  font-weight: 500; }\n\n.equatio-help-dialog {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  border: 1px solid #00B7FF;\n  min-height: 480px;\n  -webkit-box-shadow: -2px -1px 34px 1px rgba(0, 0, 0, 0.35);\n  -moz-box-shadow: -2px -1px 34px 1px rgba(0, 0, 0, 0.35);\n  box-shadow: -2px -1px 34px 1px rgba(0, 0, 0, 0.35); }\n\n.equatio-help-dialog-header {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  background: #00B7FF; }\n\n.equatio-help-dialog-draggable {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  cursor: move; }\n\n.equatio-help-dialog-draggable__logo {\n  height: 28px;\n  margin: 10px; }\n\n.equatio-help-dialog-button-wrapper {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center; }\n\n.equatio-help-dialog-button {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  border-radius: 0;\n  padding: 10px;\n  cursor: pointer; }\n  .equatio-help-dialog-button:hover .equatio-help-dialog-button__icon {\n    color: #ccf1ff; }\n\n.equatio-help-dialog-back-button-icon {\n  width: 24px;\n  height: 24px;\n  color: #FFF; }\n\n.equatio-help-dialog-button__icon {\n  height: 16px;\n  width: 16px;\n  color: #FFF; }\n\n.equatio-help-dialog-content {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -moz-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row; }\n\n.equatio-help-dialog-content-frame {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  border: 0; }\n\n.equatio-academy-external-link-wrapper {\n  width: 22px;\n  height: 22px;\n  display: inline-block; }\n\n.equatio-academy-external-link {\n  width: 22px;\n  height: 22px;\n  display: inline-block; }\n  .equatio-academy-external-link:hover .equatio-academy-external-link__icon {\n    color: #33c5ff; }\n\n.equatio-academy-external-link__icon {\n  color: #00B7FF;\n  width: 22px;\n  height: 22px;\n  border: 0; }\n\n.equatio-drawer__title .equatio-academy-external-link-wrapper {\n  margin: 0 5px; }\n\n.equatio-screenshot-reader.equatio-screenshot-reader--discoverability {\n  background: transparent; }\n\n.equatio-screenshot-reader .equatio-math-discoverability-actions {\n  left: -5px;\n  right: auto; }\n\n.equatio-screenshot-reader .equatio-math-discoverability-action-item {\n  position: absolute;\n  top: -10px;\n  left: -10px; }\n\n.equatio-screenshot-reader .equatio-math-discoverability-action-item-button {\n  background: #D11515;\n  width: 26px;\n  height: 26px;\n  border: 2px solid #960A0A;\n  box-shadow: 0 0 15px 0 #8A8989; }\n  .equatio-screenshot-reader .equatio-math-discoverability-action-item-button:hover, .equatio-screenshot-reader .equatio-math-discoverability-action-item-button:focus {\n    background: #ea2f2f; }\n\n.equatio-screenshot-reader .equatio-math-discoverability-action-item__icon {\n  width: 14px;\n  height: 14px; }\n\n.equatio-settings-profile {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n  align-items: center; }\n\n.equatio-settings-profile-image {\n  height: 52px;\n  max-width: 52px;\n  border-radius: 50%;\n  border: 4px solid #00B7FF; }\n\n.equatio-settings-profile-detail {\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  margin: 0 10px; }\n\n.equatio-settings-profile-detail-name {\n  font-size: 1.2em; }\n\n.equatio-settings-fieldset[disabled] {\n  -webkit-filter: grayscale(1.5) brightness(140%); }\n\n#popup-menu-root {\n  position: fixed;\n  left: 0;\n  bottom: 54px;\n  right: 0; }", "" ]);
}, function(t, n) {
    t.exports = function(t) {
        var n = "undefined" != typeof window && window.location;
        if (!n) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var e = n.protocol + "//" + n.host, a = e + n.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, n) {
            var o, i = n.trim().replace(/^"(.*)"$/, function(t, n) {
                return n;
            }).replace(/^'(.*)'$/, function(t, n) {
                return n;
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? e + i : a + i.replace(/^\.\//, ""), 
            "url(" + JSON.stringify(o) + ")");
        });
    };
}, function(t, n, e) {
    (t.exports = e(3)(void 0)).push([ t.i, '.equatio-button {\n    border: 0;\n    font-family: \'Roboto\', Arial, sans-serif;\n    background: #00B7FF;\n    color: #FFF;\n    text-transform: uppercase;\n    cursor: pointer;\n    padding: 7px 10px;\n    font-size: 0.85em;\n    margin: 0 10px;\n    min-width: 165px;\n    border-radius: 3px;\n    -webkit-font-smoothing: antialiased;\n    font-weight: 600;\n    -webkit-box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n    -moz-box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n    box-shadow: 0 0 5px 1px rgba(70, 70, 70, 0.5);\n    letter-spacing: -0.2px;\n}\n.equatio-cancel-button {\n    border: 0;\n    font-family: \'Roboto\', Arial, sans-serif;\n    background: #FFF;\n    color: #00B7FF;\n    cursor: pointer;\n    padding: 0;\n    font-size: 0.85em;\n    margin: 10px 0;\n    min-width: 165px;\n    border-radius: 3px;\n    -webkit-font-smoothing: antialiased;\n    letter-spacing: -0.2px;\n}\n.equatio-cancel-button:hover {\n    text-decoration: underline;\n}\n\n.equatio-button:hover, .equatio-button:active {\n    background: #33c5ff;\n}\n\n#equatio-automation-overlay,\n#equatio-error-overlay {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    top: 0;\n    z-index: 9999;\n    color: #00B7FF;\n    background-color: #FFF;\n    flex-direction: column;\n}\n\n#equatio-automation-overlay {\n    padding-top: 110px;\n    background: #FFF url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' height=\'80\' viewBox=\'0 0 912 912\'>%3Cstyle type=\'text/css\'%3E .st0{fill:none;stroke:%2300B7FF;stroke-width:52.5138;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st1{fill:none;stroke:%2300B7FF;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st2{fill:none;stroke:%2300B7FF;stroke-width:40.8129;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  %3C/style%3E  %3Cpath class=\'st0 vjXdlbbW_0\' d=\'M833.3,513.4L523,823.8c-54.5,0-85.6,0-140,0L72.6,513.4c0-54.5,0-85.6,0-140L383,63.1c54.5,0,85.6,0,140,0 l310.3,310.3C833.3,427.9,833.3,459,833.3,513.4z\'%3E%3C/path%3E  %3Cpath class=\'st1 vjXdlbbW_1\' d=\'M262.8,445.6L461.1,643.9\'%3E%3C/path%3E  %3Cpath class=\'st2 vjXdlbbW_2\' d=\'M453.4,650.2L401.9,701.7L97.8,397.6\'%3E%3C/path%3E  %3Cpath class=\'st1 vjXdlbbW_3\' d=\'M449.1,637.7L647.4,439.4\'%3E%3C/path%3E  %3Cpath class=\'st2 vjXdlbbW_4\' d=\'M653.7,447.1L705.2,498.6L401,802.7\'%3E%3C/path%3E  %3Cpath class=\'st1 vjXdlbbW_5\' d=\'M643.3,444.5L445,246.2\'%3E%3C/path%3E  %3Cpath class=\'st2 vjXdlbbW_6\' d=\'M452.8,239.8L504.2,188.4L808.4,492.5\'%3E%3C/path%3E  %3Cpath class=\'st1 vjXdlbbW_7\' d=\'M452.8,253.1L254.5,451.4\'%3E%3C/path%3E  %3Cpath class=\'st2 vjXdlbbW_8\' d=\'M248.2,443.6L196.7,392.2L500.9,88.1\'%3E%3C/path%3E  %3Cstyle%3E@supports (-webkit-appearance:none) { .vjXdlbbW_0{stroke-dasharray:2316 2318;stroke-dashoffset:2317;animation:vjXdlbbW_draw_0 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_1{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_1 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_2{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_2 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_3{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_3 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_4{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_4 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_5{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_5 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_6{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_6 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_7{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_7 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_8{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_8 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}@keyframes vjXdlbbW_draw{100%{stroke-dashoffset:0;}}@keyframes vjXdlbbW_fade{0%{stroke-opacity:1;}77.77777777777777%{stroke-opacity:1;}100%{stroke-opacity:0;}}@keyframes vjXdlbbW_draw_0{0%{stroke-dashoffset: 2317}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_1{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_2{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_3{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_4{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_5{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_6{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_7{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_8{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}} }%3C/style%3E</svg>") 50% 50% no-repeat;\n    font-weight: 600;\n}\n\n#equatio-automation-overlay.graph,\n#equatio-error-overlay.graph {\n    position: fixed;\n    border: 1px solid #acacac;\n    bottom: 22%;\n    left: 22%;\n    right: 22%;\n    top: 22%;\n    -webkit-box-shadow: rgba(0,0,0,.2) 0 4px 16px;\n    box-shadow: rgba(0,0,0,.2) 0 4px 16px;\n    -webkit-transition: top .5s ease-in-out;\n    transition: top .5s ease-in-out;\n}\n\n.equatio-error-overlay__image {\n    height: 120px;\n}\n\n.equatio-error-overlay__title {\n    margin: 20px 0 5px;\n}\n\n.equatio-error-overlay__description {\n    margin: 5px 20px 0;\n}\n\n.equatio-error-overlay__url {\n    width: 100%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.equatio-error-overlay__url__input {\n    font-size: 1.0em;\n    padding: 5px;\n    width: 60%;\n    display: inline-block;\n    border: 1px solid #efefef;\n    color: #333;\n    line-height: 20px;\n    font-family: "Roboto", Arial, sans-serif;\n    font-weight: 400;\n    -webkit-font-smoothing: antialiased;\n}\n\n.equatio-error-overlay__url__button {\n    border: 0;\n    background: #00B7FF;\n    display: flex;\n    overflow: hidden;\n    width: 32px;\n    height: 32px;\n    margin: 0;\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n}\n.equatio-error-overlay__url__button:hover, .equatio-error-overlay__url__button:active {\n    background: #33c5ff;\n}\n\nbutton[data-equatio-balloon] {\n    overflow: visible;\n}\n[data-equatio-balloon] {\n    position: relative;\n}\n[data-equatio-balloon]:before,\n[data-equatio-balloon]:after {\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n    filter: alpha(opacity=0);\n    -khtml-opacity: 0;\n    -moz-opacity: 0;\n    opacity: 0;\n    pointer-events: none;\n    -webkit-transition: all 0.18s ease-out 0.18s;\n    transition: all 0.18s ease-out 0.18s;\n    bottom: 100%;\n    left: 50%;\n    position: absolute;\n    z-index: 10;\n    -webkit-transform: translate(-50%, 10px);\n    -ms-transform: translate(-50%, 10px);\n    transform: translate(-50%, 10px);\n    -webkit-transform-origin: top;\n    -ms-transform-origin: top;\n    transform-origin: top;\n}\n[data-equatio-balloon]:after {\n    background: rgba(0, 183, 255, 0.9);\n    border-radius: 4px;\n    color: #fff;\n    content: attr(data-equatio-balloon);\n    font-size: 12px;\n    padding: .5em 1em;\n    white-space: nowrap;\n    margin-bottom: 11px;\n}\n[data-equatio-balloon]:before {\n    background: url(\'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%280,%20183,%20255,%200.9%29%22%20transform%3D%22rotate%280%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E\') no-repeat;\n    background-size: 100% auto;\n    height: 6px;\n    width: 18px;\n    content: "";\n    margin-bottom: 5px;\n}\n[data-equatio-balloon]:hover:before,\n[data-equatio-balloon][data-equatio-balloon-visible]:before,\n[data-equatio-balloon]:hover:after,\n[data-equatio-balloon][data-equatio-balloon-visible]:after {\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";\n    filter: alpha(opacity=100);\n    -khtml-opacity: 1;\n    -moz-opacity: 1;\n    opacity: 1;\n    pointer-events: auto;\n    -webkit-transform: translate(-50%, 0);\n    -ms-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n}\n[data-equatio-balloon].font-awesome:after {\n    font-family: FontAwesome;\n}\n[data-equatio-balloon][data-equatio-balloon-break]:after {\n    white-space: pre;\n}\n[data-equatio-balloon-pos="down"]:before,\n[data-equatio-balloon-pos="down"]:after {\n    bottom: auto;\n    left: 50%;\n    top: 100%;\n    -webkit-transform: translate(-50%, -10px);\n    -ms-transform: translate(-50%, -10px);\n    transform: translate(-50%, -10px);\n}\n[data-equatio-balloon-pos="down"]:after {\n    margin-top: 11px;\n}\n[data-equatio-balloon-pos="down"]:before {\n    background: url(\'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%280,%20183,%20255,%200.9%29%22%20transform%3D%22rotate%28180%2018%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E\') no-repeat;\n    background-size: 100% auto;\n    height: 6px;\n    width: 18px;\n    margin-top: 5px;\n    margin-bottom: 0;\n}\n[data-equatio-balloon-pos="down"]:hover:before,\n[data-equatio-balloon-pos="down"][data-equatio-balloon-visible]:before,\n[data-equatio-balloon-pos="down"]:hover:after,\n[data-equatio-balloon-pos="down"][data-equatio-balloon-visible]:after {\n    -webkit-transform: translate(-50%, 0);\n    -ms-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n}\n[data-equatio-balloon-pos="left"]:before,\n[data-equatio-balloon-pos="left"]:after {\n    bottom: auto;\n    left: auto;\n    right: 100%;\n    top: 50%;\n    -webkit-transform: translate(10px, -50%);\n    -ms-transform: translate(10px, -50%);\n    transform: translate(10px, -50%);\n}\n[data-equatio-balloon-pos="left"]:after {\n    margin-right: 11px;\n}\n[data-equatio-balloon-pos="left"]:before {\n    background: url(\'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%280,%20183,%20255,%200.9%29%22%20transform%3D%22rotate%28-90%2018%2018%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E\') no-repeat;\n    background-size: 100% auto;\n    height: 18px;\n    width: 6px;\n    margin-right: 5px;\n    margin-bottom: 0;\n}\n[data-equatio-balloon-pos="left"]:hover:before,\n[data-equatio-balloon-pos="left"][data-equatio-balloon-visible]:before,\n[data-equatio-balloon-pos="left"]:hover:after,\n[data-equatio-balloon-pos="left"][data-equatio-balloon-visible]:after {\n    -webkit-transform: translate(0, -50%);\n    -ms-transform: translate(0, -50%);\n    transform: translate(0, -50%);\n}\n[data-equatio-balloon-pos="right"]:before,\n[data-equatio-balloon-pos="right"]:after {\n    bottom: auto;\n    left: 100%;\n    top: 50%;\n    -webkit-transform: translate(-10px, -50%);\n    -ms-transform: translate(-10px, -50%);\n    transform: translate(-10px, -50%);\n}\n[data-equatio-balloon-pos="right"]:after {\n    margin-left: 11px;\n}\n[data-equatio-balloon-pos="right"]:before {\n    background: url(\'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%280,%20183,%20255,%200.9%29%22%20transform%3D%22rotate%2890%206%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E\') no-repeat;\n    background-size: 100% auto;\n    height: 18px;\n    width: 6px;\n    margin-bottom: 0;\n    margin-left: 5px;\n}\n[data-equatio-balloon-pos="right"]:hover:before,\n[data-equatio-balloon-pos="right"][data-equatio-balloon-visible]:before,\n[data-equatio-balloon-pos="right"]:hover:after,\n[data-equatio-balloon-pos="right"][data-equatio-balloon-visible]:after {\n    -webkit-transform: translate(0, -50%);\n    -ms-transform: translate(0, -50%);\n    transform: translate(0, -50%);\n}\n[data-equatio-balloon-length]:after {\n    white-space: normal;\n}\n[data-equatio-balloon-length="small"]:after {\n    width: 80px;\n}\n[data-equatio-balloon-length="medium"]:after {\n    width: 150px;\n}\n[data-equatio-balloon-length="large"]:after {\n    width: 260px;\n}\n[data-equatio-balloon-length="xlarge"]:after {\n    width: 90vw;\n}\n@media screen and (min-width: 768px) {\n    [data-equatio-balloon-length="xlarge"]:after {\n        width: 380px;\n    }\n}\n[data-equatio-balloon-length="fit"]:after {\n    width: 100%;\n}', "" ]);
}, function(t, n, e) {
    "use strict";
    e.r(n);
    var a = e(0), o = e.n(a), i = (e(13), Object.freeze({
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
    })), r = Object.assign || function(t) {
        for (var n = 1; n < arguments.length; n++) {
            var e = arguments[n];
            for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
        }
        return t;
    };
    function l(t) {
        if (Array.isArray(t)) {
            for (var n = 0, e = Array(t.length); n < t.length; n++) e[n] = t[n];
            return e;
        }
        return Array.from(t);
    }
    var d = function(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new Promise(function(e, a) {
            chrome.runtime.sendMessage("hjngolefdpdnooamgdldlkjgmdcmcjnc", r({
                action: t
            }, n), function() {
                var o, i, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, d = r.success, s = r.failure;
                return chrome.runtime.lastError ? ((o = console).warn.apply(o, [ "Action failed:", t ].concat(l(n))), 
                a(chrome.runtime.lastError)) : s ? ((i = console).warn.apply(i, [ "Action failed:", t ].concat(l(n))), 
                a(s)) : e(d);
            });
        });
    }, s = function() {
        return d("load");
    }, p = function() {
        return d(i.GetLicense);
    }, c = function(t, n) {
        return d(i.OpenGoogleFormsPicker, {
            url: t,
            picker: n
        });
    }, m = function(t) {
        return d(i.GoogleFormsPickerLoaded, {
            location: t
        });
    }, h = function() {
        return d(i.ShowGoogleFormsReminder);
    }, b = function(t) {
        return d(i.SendAnalyticsEvent, {
            category: t
        });
    };
    function V(t) {
        return function() {
            var n = t.apply(this, arguments);
            return new Promise(function(t, e) {
                function a(o, i) {
                    try {
                        var r = n[o](i), l = r.value;
                    } catch (t) {
                        return void e(t);
                    }
                    if (!r.done) return Promise.resolve(l).then(function(t) {
                        a("next", t);
                    }, function(t) {
                        a("throw", t);
                    });
                    t(l);
                }
                return a("next");
            });
        };
    }
    u = V(function*() {
        return (yield p()).daysleft >= 0;
    }), e(5);
    var u, N = e(1), U = e.n(N), R = void 0, f = function() {
        window.removeEventListener("message", R), document.querySelector(".equatio-toolbar-wrapper").style.display = "none";
    }, k = void 0, Z = function() {
        return new Promise(function(t, n) {
            "function" == typeof k && k(), k = n, window.removeEventListener("message", R), 
            R = function(n) {
                if (n.data && "EQUATIO_INSERT_MATH_FORMS" === n.data.action) {
                    f();
                    var e = n.data, a = e.latex, o = e.width, i = e.height;
                    t({
                        latex: a,
                        width: o,
                        height: i
                    });
                }
                if (n.data && "EQUATIO_INSERT_GRAPH_FORMS" === n.data.action) {
                    f();
                    var r = n.data, l = r.url, d = r.state;
                    t({
                        url: l,
                        state: d
                    });
                }
                if (n.data && "EQUATIO_INSERT_IMAGE_FORMS" === n.data.action) {
                    f();
                    var s = n.data.url;
                    t({
                        url: s
                    });
                }
            }, window.addEventListener("message", R), s();
        });
    }, x = void 0;
    function F(t) {
        return function() {
            var n = t.apply(this, arguments);
            return new Promise(function(t, e) {
                function a(o, i) {
                    try {
                        var r = n[o](i), l = r.value;
                    } catch (t) {
                        return void e(t);
                    }
                    if (!r.done) return Promise.resolve(l).then(function(t) {
                        a("next", t);
                    }, function(t) {
                        a("throw", t);
                    });
                    t(l);
                }
                return a("next");
            });
        };
    }
    F(function*() {
        if ((yield p()).features["Forms Integration"]) {
            var t = window.location.pathname;
            if (window.top === window.self && t.includes("/forms/") && !t.endsWith("/viewform") && !t.endsWith("/formResponse")) {
                var n = function() {
                    return document.querySelector("[jscontroller][jsmodel][data-item-id='-1']");
                }, e = function(t) {
                    return t.querySelector(".freebirdFormeditorViewItemAddImageButton");
                }, a = function(t) {
                    return t.querySelector(".freebirdFormeditorViewMagiclistItemAddImageButton, .freebirdFormeditorViewOmnilistMorselAddImageButton");
                }, i = function(t) {
                    var n = function(t, n) {
                        var e = document.createEvent("MouseEvents");
                        e.initEvent(n, !0, !0), t.dispatchEvent(e);
                    };
                    n(t, "mousedown"), n(t, "mouseup"), n(t, "click");
                }, r = function(t, n) {
                    var e = new InputEvent("input", {
                        bubbles: !0,
                        cancelBubble: !1,
                        cancelable: !1,
                        composed: !0,
                        currentTarget: t,
                        data: n,
                        dataTransfer: null,
                        defaultPrevented: !1,
                        detail: 0,
                        eventPhase: 3,
                        inputType: "insertText",
                        isComposing: !1,
                        isTrusted: !0
                    });
                    t.dispatchEvent(e);
                }, l = void 0, d = void 0, s = new Map(), m = function(t, n, e) {
                    s.get(t) && e(), l = e, d = t;
                }, b = function(t, n, e) {
                    i(t), m(n, window.location.href, function() {
                        c(e, s.get(n));
                    });
                }, V = function(t) {
                    return [ "https://equatio-api.texthelp.com/", "https://equatio-api-dev.texthelp.com/" ].some(function(n) {
                        return t.includes && t.includes(n);
                    });
                }, u = function(t, n) {
                    if (V(n)) {
                        var e = t.parentNode.parentNode.querySelector(".quantumWizTextinputSimpleinputInput");
                        e.value = n, e.dataset.initialValue = n, e.nextSibling && "IMG" === e.nextSibling.nodeName && (e.nextSibling.outerHTML = "");
                        var a = new o.a(n, !0).query, i = a.width, l = a.height, d = document.createElement("img");
                        d.src = n;
                        var s = 200;
                        i && (d.width = l < s ? i : i * (s / l)), l && (d.height = i < s ? l : l * (s / i)), 
                        d.style.maxWidth = s + "px", d.style.maxHeight = s + "px", e.style.display = "none", 
                        e.parentNode.appendChild(d, e), r(e, n);
                    }
                }, N = function(t, n) {
                    if (n.length) {
                        var e = t;
                        if (e.textContent = "", e.parentNode.querySelector(".equatio-quiz-correct")) return;
                        var a = document.createElement("div");
                        a.classList.add("equatio-quiz-correct", "freebirdFormeditorViewOmnilistMorselImagePreview"), 
                        n.forEach(function(t) {
                            if (V(t.trim())) {
                                var n = document.createElement("img");
                                n.src = t.trim(), n.style.maxWidth = "400px", n.style.verticalAlign = "middle", 
                                n.style.margin = "5px 10px", a.appendChild(n);
                            }
                        }), t.parentNode.appendChild(a);
                    }
                }, R = function() {
                    var t = document.querySelector(".freebirdFormeditorViewItemRoot.freebirdFormeditorViewItemActive .freebirdFormeditorViewItemContent .freebirdFormeditorViewQuestionBodyShorttextbodyCorrect");
                    if (t && t.nextSibling) {
                        var n = t.nextSibling.textContent.split(",");
                        N(t.nextSibling, n);
                    }
                }, f = !1, k = function(t) {
                    t.querySelector("div[role='button']").addEventListener("click", function() {
                        d !== t && m(t, window.location.href, function() {});
                    });
                    var n = document.createElement("div"), e = function(t) {
                        var n = t.closest(".freebirdFormeditorViewAssessmentRoot.freebirdFormeditorViewItemActive");
                        if (!n) return !1;
                        var e = n.querySelector(".freebirdFormeditorViewAssessmentBodyQuestionBody");
                        return !!e && (t.matches(".docssharedWizOmnilistMorselDeleteButton") && e.contains(t));
                    };
                    new MutationObserver(function() {
                        "none" === t.style.display ? n.style.display = "none" : n.style.display = "";
                    }).observe(t, {
                        attributes: !0,
                        attributeFilter: [ "style" ]
                    }), n.className = "equatio-form-inject-button", n.addEventListener("click", function() {
                        f || (f = !0), F(function*() {
                            h();
                            var a = yield Z(), o = a.url || "https://equatio-api.texthelp.com/png/" + encodeURIComponent(a.latex), i = a.width, r = a.height;
                            i && r && (o += "?width=" + i + "&height=" + r);
                            var l = n.parentNode.querySelector("div[role='button']");
                            e(l) ? u(l, o) : b(l, t, o);
                        })();
                    }), n.style.position = "relative";
                    var a = void 0, o = void 0;
                    return t.matches(".freebirdFormeditorViewItemAddImageButton") ? (a = "-17px", o = "0") : t.matches(".freebirdFormeditorDialogFeedbackFooterMaterialButtons") ? (a = "0", 
                    o = "14px") : (a = "-2px", o = "0"), n.innerHTML = '<button type="button" style="width: 20px;height: 20px;background: #00B7FF;border-radius: 4px;display: flex;align-items: center;justify-content: center;border: 0;padding: 0;cursor: pointer;position: relative; top: ' + a + "; left: " + o + '" title="Insert Math"><img src="' + U.a + '"></button>', 
                    n;
                }, W = function(t) {
                    if (void 0 !== t) {
                        var n = void 0;
                        if (t.matches(".freebirdFormeditorViewItemcardRoot") ? n = e(t) : t.matches(".docssharedWizOmnilistMorselDeleteButton") ? n = t.parentNode : t.matches(".quantumWizDialogBackground") || (n = a(t)), 
                        n) {
                            var o = k(n);
                            if (n.matches(".freebirdFormeditorViewItemAddImageButton")) {
                                if (n.parentNode.parentNode.querySelector(".equatio-form-inject-button")) return;
                                n.parentNode.parentNode.insertBefore(o, n.parentNode);
                            } else if (n.matches(".freebirdFormeditorDialogFeedbackFooterMaterialButtons")) {
                                if (n.parentNode.querySelector(".equatio-form-inject-button")) return;
                                var i = n.querySelector("div[role='button']:last-child");
                                i.parentNode.insertBefore(o, i.nextSibling);
                            } else {
                                if (n.parentNode.querySelector(".equatio-form-inject-button")) return;
                                n.parentNode.insertBefore(o, n);
                            }
                        }
                    }
                };
                chrome.runtime.onMessage.addListener(function(t) {
                    "image_dialog_loaded" === t.action && (s.set(d, t.pickerWindow), l.call(x), d = null, 
                    l = null);
                });
                var T = function() {
                    var t = n();
                    return t ? t.closest(".freebirdFormeditorViewPageRoot").parentNode : null;
                }, w = function(t) {
                    return Array.prototype.forEach.call(t.querySelectorAll(".freebirdFormeditorViewMagiclistItemEl, .freebirdFormeditorViewOmnilistItemRoot"), W);
                }, g = function(t) {
                    return Array.prototype.forEach.call(t.querySelectorAll(".quantumWizButtonEl"), W);
                }, M = function(t) {
                    t.querySelector(".magiclist-dragParent") && new MutationObserver(function(t) {
                        t[0] && t[0].addedNodes[0] && t[0].addedNodes[0].querySelectorAll && W(t[0].addedNodes[0]);
                    }).observe(t.querySelector(".magiclist-dragParent"), {
                        childList: !0
                    });
                }, y = function(t) {
                    new MutationObserver(function(t) {
                        t.length && Array.prototype.forEach.call(t, function(t) {
                            t.addedNodes && t.addedNodes.length && Array.prototype.forEach.call(t.addedNodes, function(t) {
                                t.classList && (t.classList.contains("freebirdFormeditorViewQuestionBodyQuestionBody") ? (w(t), 
                                M(t)) : t.classList.contains("freebirdFormeditorViewOmnilistItemRoot") ? W(t) : t.classList.contains("freebirdFormeditorViewQuestionBodyShorttextbodyCorrect") && R());
                            });
                        });
                    }).observe(t.parentNode, {
                        childList: !0,
                        subtree: !0
                    }), M(t);
                }, E = function(t) {
                    new MutationObserver(function(t) {
                        t.length && Array.prototype.forEach.call(t, function(t) {
                            t.addedNodes && t.addedNodes.length && Array.prototype.forEach.call(t.addedNodes, function(t) {
                                t.classList && t.classList.contains("docssharedWizOmnilistItemRoot") && g(t);
                            });
                        });
                    }).observe(t.parentNode, {
                        childList: !0,
                        subtree: !0
                    });
                }, S = function(t) {
                    new MutationObserver(function(t) {
                        t.length && Array.prototype.forEach.call(t, function(t) {
                            t.addedNodes && t.addedNodes.length && Array.prototype.forEach.call(t.addedNodes, function(t) {
                                if (t.classList && (t.classList.contains("freebirdFormeditorViewCursorColorContainer") && t.parentNode && E(t.parentNode.parentNode.parentNode), 
                                t.classList.contains("equatio-form-inject-button"))) {
                                    if (!t.previousSibling) return;
                                    var n = setInterval(function() {
                                        var e = t.previousSibling.querySelector(".quantumWizTextinputSimpleinputInput");
                                        if (e) {
                                            var a = e.dataset.initialValue.trim();
                                            "" !== a && (clearInterval(n), u(e, a));
                                        }
                                    }, 50);
                                }
                            });
                        });
                    }).observe(t.parentNode, {
                        childList: !0,
                        subtree: !0
                    });
                }, v = function(t) {
                    new MutationObserver(function(t) {
                        if (t[0] && t[0].removedNodes && t[0].removedNodes[0]) {
                            if (!t[0].removedNodes[0].classList) return;
                            t[0].removedNodes[0].classList.contains("freebirdFormeditorViewAssessmentRoot") && (W(t[0].target.parentNode), 
                            y(t[0].target.parentNode)), t[0].removedNodes[0].classList.contains("freebirdFormeditorViewCursorColorContainer") && R();
                        }
                        if (t[0] && t[0].addedNodes && t[0].addedNodes[0]) {
                            if (!t[0].addedNodes[0].classList) return;
                            t[0].addedNodes[0].classList.contains("freebirdFormeditorViewCursorColorContainer") && (S(t[0].target), 
                            R());
                        }
                    }).observe(t.parentNode, {
                        childList: !0,
                        subtree: !0
                    });
                }, Q = function(t) {
                    new MutationObserver(function(t) {
                        var n = void 0;
                        if (t && t.forEach(function(t) {
                            t.addedNodes && t.addedNodes.forEach(function(t) {
                                n = t;
                            });
                        }), n) {
                            var e = n.querySelector(".freebirdFormeditorViewQuestionBodyQuestionBody");
                            e && (y(e), v(n), w(n), W(n));
                        }
                    }).observe(t, {
                        childList: !0,
                        subtree: !1
                    });
                }, Y = function() {
                    var t = T();
                    t && new MutationObserver(function(t) {
                        t[0] && t[0].addedNodes && t[0].addedNodes[0] && Q(t[0].addedNodes[0].querySelector(".freebirdFormeditorViewPagePageCard > [jscontroller][jsmodel]"));
                    }).observe(t, {
                        childList: !0
                    });
                };
                Array.prototype.forEach.call(document.querySelectorAll(".freebirdFormeditorViewItemcardRoot, .freebirdFormeditorViewMagiclistItemEl"), W), 
                Array.prototype.forEach.call(document.querySelectorAll(".freebirdFormeditorViewQuestionBodyQuestionBody"), y), 
                Array.prototype.forEach.call(document.querySelectorAll(".freebirdFormeditorViewItemcardRoot"), v), 
                Array.prototype.forEach.call(document.querySelectorAll(".freebirdFormeditorViewPageRoot"), function(t) {
                    var n = t.querySelector(".freebirdFormeditorViewItemcardRoot");
                    if (!n) {
                        var e = t.querySelector(".item-dlg-dragContainer");
                        return e ? void Q(e) : void 0;
                    }
                    Q(n.parentNode);
                }), Y();
            }
        }
    })();
    var W = e(6), T = e.n(W), w = [ "Select", "Seleccionar", "Selecciona", "\u9009\u62e9", "Kies", "\u0418\u0437\u0431\u0438\u0440\u0430\u043d\u0435", "Vybrat", "V\xe6lg", "Ausw\xe4hlen", "\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae", "Vali", "Valitse", "Pumili", "S\xe9lectionner", "S\xe9lectionner", "Seleccionar", "Odaberi", "Kiv\xe1laszt\xe1s", "Pilih", "Velja", "Seleziona", "Pasirinkti", "Atlas\u012bt", "Selecteren", "Velg", "Wybierz", "Selecionar", "Selecionar", "Selecta\u021bi", "Vybra\u0165", "\u0418\u0437\u0430\u0431\u0435\u0440\u0438", "V\xe4lj" ], g = [ "Upload", "Subir", "Cargar", "Penja", "\u4e0a\u4f20", "Oplaai", "\u041a\u0430\u0447\u0432\u0430\u043d\u0435", "Nahr\xe1t", "Hochladen", "\u039c\u03b5\u03c4\u03b1\u03c6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7", "\xdcleslaadimine", "L\xe4het\xe4", "I-upload", "Importer", "T\xe9l\xe9verser", "Cargar", "Prijenos\n", "Felt\xf6lt\xe9s", "Hla\xf0a inn", "Carica", "\u012ekelti", "Aug\u0161upiel\u0101d\u0113t", "Uploaden", "Last opp", "Prze\u015blij", "Carregar", "\xcenc\u0103rca\u021bi", "Nahra\u0165", "\u041e\u0442\u043f\u0440\u0435\u043c\u0430\u045a\u0435", "Ladda upp" ], M = [ "Mediante URL", "URLaren arabera", "By URL", "De URL", "\u901a\u8fc7\u7f51\u5740", "\u4f7f\u7528\u7db2\u5740\u4e0a\u50b3", "Deur URL", "\u041f\u043e URL \u0430\u0434\u0440\u0435\u0441", "Podle adresy URL", "Efter webadresse", "Per URL", "\u039a\u03b1\u03c4\u03ac \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 URL", "URL-i j\xe4rgi", "URL-osoitteen mukaan", "Ayon sa URL", "\xc0 partir d'une URL", "\xc0 partir d'une URL", "Por URL", "Prema URL-u", "URL-c\xedm haszn\xe1lat\xe1val", "Melalui URL", "Af sl\xf3\xf0", "Tramite URL", "I\u0161 URL", "P\u0113c\xa0URL", "Via URL", "Via nettadresse", "Z URL-a", "Por URL", "Dup\u0103 adresa URL", "Z\xa0webovej adresy", "\u041f\u0440\u0435\u043c\u0430 URL-\u0443", "Via webbadress" ], y = [ "Paste an image URL here:", "Pega una URL de imagen aqu\xed:", "Pega la URL de una imagen aqu\xed:", "Pega aqu\xed la URL de una imagen:", "Enganxeu l'URL d'una imatge aqu\xed:", "\u5728\u6b64\u5904\u7c98\u8d34\u56fe\u7247\u7f51\u5740\uff1a", "Plak 'n prent-URL hier:", "\u041f\u043e\u0441\u0442\u0430\u0432\u0435\u0442\u0435 URL \u0430\u0434\u0440\u0435\u0441 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0442\u0443\u043a:", "Sem vlo\u017ete adresu URL obr\xe1zku:", "Inds\xe6t en billedwebadresse her:", "Bild-URL hier einf\xfcgen:", "\u0395\u03c0\u03b9\u03ba\u03bf\u03bb\u03bb\u03ae\u03c3\u03c4\u03b5 \u03bc\u03b9\u03b1 \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 URL \u03b5\u03b9\u03ba\u03cc\u03bd\u03b1\u03c2 \u03b5\u03b4\u03ce:", "Kleepige pildi URL siia:", "Liit\xe4 kuvan URL-osoite t\xe4h\xe4n:", "I-paste ang URL ng larawan dito:", "Coller une URL d'image ici\xa0:", "Coller l'URL d'une image ici\xa0:", "Pega o URL dunha imaxe aqu\xed:", "Ovdje zalijepite URL slike:", "M\xe1solja be egy k\xe9p URL-j\xe9t ide:", "Tempelkan URL gambar di sini:", "L\xedmdu vefsl\xf3\xf0 myndar h\xe9r:", "Incolla l'URL di un'immagine qui:", "Vaizdo URL \u012fklijuokite \u010dia:", "Iel\u012bm\u0113jiet att\u0113la\xa0URL \u0161eit:", "Plak hier een afbeeldings-URL:", "Lim inn en bildenettadresse her:", "Tutaj wklej URL obrazu:", "Cole um URL de imagem aqui:", "Colar URL da imagem aqui:", "Insera\u021bi adresa URL a unei imagini aici:", "Tu prilepte webov\xfa adresu obr\xe1zka:", "\u041e\u0432\u0434\u0435 \u043d\u0430\u043b\u0435\u043f\u0438\u0442\u0435 URL \u0441\u043b\u0438\u043a\u0435:", "Klistra in en bildwebbadress h\xe4r:" ], E = e(7), S = e.n(E), v = e(8), Q = e.n(v);
    if (window.location.pathname.endsWith("/picker")) {
        var Y = function(t, n) {
            var e = document.createEvent("MouseEvents");
            e.initEvent(n, !0, !0), t.dispatchEvent(e);
        }, z = function() {
            var t = document.getElementById("equatio-error-overlay");
            t && document.body.removeChild(t);
        }, j = function(t) {
            var n = document.createElement("div");
            n.id = "equatio-error-overlay", n.innerHTML = "<img src='" + S.a + "' class='equatio-error-overlay__image'><h2 class='equatio-error-overlay__title'>Uh oh!</h2><p class='equatio-error-overlay__description'>There was a problem inserting the math into the Google Form. Copy the address below into the &quot;By URL&quot; tab to continue:</p><p class='equatio-error-overlay__url'><input id='equatio-target-url' class='equatio-error-overlay__url__input' value='" + t + "'><button class='equatio-error-overlay__url__button' data-clipboard-target='#equatio-target-url'><img src='" + Q.a + "' height='20'></button></p>";
            var e = document.createElement("button");
            e.className = "equatio-button", e.textContent = "Continue", e.addEventListener("click", function() {
                z();
            }), n.appendChild(e);
            var a = document.createElement("button");
            a.textContent = "Go back to my Google Form", a.className = "equatio-cancel-button", 
            a.addEventListener("click", function() {
                var t = document.querySelector("div[role='button'][aria-label='Close']");
                Y(t, "mousedown"), Y(t, "mouseup");
            }), n.appendChild(a), document.body.appendChild(n);
            var o = document.querySelector(".equatio-error-overlay__url__button");
            new T.a(o).on("success", function() {
                o.setAttribute("data-equatio-balloon-visible", ""), o.setAttribute("data-equatio-balloon", "Copied!"), 
                o.setAttribute("data-equatio-balloon-pos", "up"), setTimeout(function() {
                    o.removeAttribute("data-equatio-balloon");
                }, 5e3);
            });
        }, J = function() {
            var t = document.createElement("div");
            t.id = "equatio-automation-overlay", t.innerHTML = "Making Math", document.body.appendChild(t);
        }, G = function() {
            var t = document.getElementById("equatio-automation-overlay");
            t && document.body.removeChild(t);
        }, C = function(t) {
            var n = Array.from(document.querySelectorAll("label")).filter(function(t) {
                return y.some(function(n) {
                    return n === t.textContent;
                });
            });
            n.length && t({
                parentElement: n[0].parentNode.parentNode.parentNode,
                id: n[0].getAttribute("for")
            });
            var e = new MutationObserver(function(n) {
                if (n.length && n[0].addedNodes[0] && n[0].addedNodes[0].querySelectorAll) {
                    var a = Array.from(n[0].addedNodes[0].querySelectorAll("label")).filter(function(t) {
                        return y.some(function(n) {
                            return n === t.textContent;
                        });
                    });
                    a.length && (t({
                        parentElement: n[0].addedNodes[0],
                        id: a[0].getAttribute("for")
                    }), e.disconnect());
                }
            });
            e.observe(document.body, {
                childList: !0,
                subtree: !0
            });
        }, X = function(t, n) {
            if ("false" !== t.getAttribute("aria-disabled")) {
                var e = new MutationObserver(function(t) {
                    t.some(function(t) {
                        return "aria-disabled" === t.attributeName && "false" === t.target.getAttribute("aria-disabled");
                    }) && (n(), e.disconnect());
                });
                e.observe(t, {
                    attributes: !0,
                    characterData: !0
                });
            } else setTimeout(n, 500);
        }, D = void 0, B = function(t) {
            z(), D && clearTimeout(D), D = setTimeout(function() {
                G(), j(t);
            }, 1e4), J(), setTimeout(function() {
                var t = Array.from(document.querySelectorAll("[role='tab']")).filter(function(t) {
                    return g.some(function(n) {
                        return n === t.textContent;
                    });
                });
                Y(t[0], "mousedown"), Y(t[0], "mouseup");
            }, 200), setTimeout(function() {
                var n = Array.from(document.querySelectorAll("[role='tab']")).filter(function(t) {
                    return M.some(function(n) {
                        return n === t.textContent;
                    });
                });
                Y(n[0], "mousedown"), Y(n[0], "mouseup"), C(function(n) {
                    var e = n.parentElement, a = Array.from(e.querySelectorAll("[role='button']")).filter(function(t) {
                        return w.some(function(n) {
                            return n === t.textContent;
                        });
                    }), o = a[a.length - 1];
                    X(o, function() {
                        Y(o, "mousedown"), Y(o, "mouseup"), G(), clearTimeout(D);
                    });
                    var i = n.id, r = document.getElementById(i);
                    r.value = t + " ", setTimeout(function() {
                        r.focus(), r.selectionStart = 1e4, r.selectionEnd = 1e4;
                    }, 500), setTimeout(function() {
                        document.execCommand("delete");
                    }, 700);
                });
            }, 500);
        };
        m(window.location.href), chrome.runtime.onMessage.addListener(function(t) {
            "targetWindow" in t && window.location.href === t.targetWindow && "open_url" === t.action && B(t.url);
        });
    }
    var H = e(9), L = e(10), O = e.n(L), I = function() {
        function t(t, n) {
            var e = [], a = !0, o = !1, i = void 0;
            try {
                for (var r, l = t[Symbol.iterator](); !(a = (r = l.next()).done) && (e.push(r.value), 
                !n || e.length !== n); a = !0) ;
            } catch (t) {
                o = !0, i = t;
            } finally {
                try {
                    !a && l.return && l.return();
                } finally {
                    if (o) throw i;
                }
            }
            return e;
        }
        return function(n, e) {
            if (Array.isArray(n)) return n;
            if (Symbol.iterator in Object(n)) return t(n, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
    }();
    function q(t) {
        return function() {
            var n = t.apply(this, arguments);
            return new Promise(function(t, e) {
                function a(o, i) {
                    try {
                        var r = n[o](i), l = r.value;
                    } catch (t) {
                        return void e(t);
                    }
                    if (!r.done) return Promise.resolve(l).then(function(t) {
                        a("next", t);
                    }, function(t) {
                        a("throw", t);
                    });
                    t(l);
                }
                return a("next");
            });
        };
    }
    var K = function(t, n, e) {
        if ("textarea" === t.tagName.toLowerCase()) t.parentNode.previousSibling.style.display = e, 
        t.value = n; else {
            t.querySelector("input").value = n;
            var a = t.querySelector("input[type='hidden']");
            a && (t.setAttribute("data-initial-value", n), a.value = n);
        }
    }, _ = function(t) {
        t.state ? window.postMessage({
            action: "EQUATIO_CHROME_EXTRACT_GRAPH",
            state: JSON.parse(t.state)
        }, window.location.href) : window.postMessage({
            action: "EQUATIO_CHROME_EXTRACT_MATH",
            latex: t
        }, window.location.href);
    }, A = function() {
        var t = document.createElement("style");
        t.innerHTML = ".quantumWizToastEl.quantumWizToastElLeftAligned.toast.quantumWizToastMultiLine.quantumWizToastOnScreen {\n        bottom: 53px;\n        z-index: 10;\n    }", 
        document.body.appendChild(t);
    };
    function P(t) {
        return function() {
            var n = t.apply(this, arguments);
            return new Promise(function(t, e) {
                function a(o, i) {
                    try {
                        var r = n[o](i), l = r.value;
                    } catch (t) {
                        return void e(t);
                    }
                    if (!r.done) return Promise.resolve(l).then(function(t) {
                        a("next", t);
                    }, function(t) {
                        a("throw", t);
                    });
                    t(l);
                }
                return a("next");
            });
        };
    }
    q(function*() {
        if ((yield p()).features["Forms Integration"]) {
            var t = window.location.pathname;
            if (window.top === window.self && t.indexOf("/forms/") >= 0 && (t.endsWith("/viewform") || t.endsWith("/formResponse") || t.endsWith("/prefill") || t.endsWith("/viewscore"))) {
                A();
                var n = "https://equatio-api.texthelp.com", e = function(t, n, e) {
                    var a = document.createElement("div");
                    return a.addEventListener("click", function() {
                        K(t, "", "block"), a.parentNode.removeChild(a), n.parentNode.removeChild(n), t.style.display = "block", 
                        e.removeAttribute("data-related-image");
                    }), a.style.display = "flex", a.style["align-items"] = "center", a.style["justify-content"] = "center", 
                    a.style["margin-top"] = "-5px", a.style.position = "relative", a.style.top = "-3px", 
                    a.innerHTML = '<button class="equatio-form-clear-button" type="button" style="width: 20px;height: 20px;background: #00B7FF;border-radius: 4px;display: flex;align-items: center;justify-content: center;border: 0;padding: 0;cursor: pointer;" title="Clear Math"><img src="' + O.a + '" height="20"></button>', 
                    a;
                }, a = function(t, a, o, i) {
                    var r = a.url || n + "/png/" + encodeURIComponent(a.latex || a), l = a.width, d = a.height, s = a.latex;
                    if (l && d && (r += "?width=" + l + "&height=" + d), o) {
                        var p = document.getElementById(o);
                        if (p) return a.state ? p.setAttribute("data-graph-state", JSON.stringify(a.state)) : p.setAttribute("data-latex", s || a), 
                        p.src = r, K(t, r, "none"), o;
                    }
                    t.style.display = "none", K(t, r, "none");
                    var c = document.createElement("div");
                    t.closest(".freebirdFormviewerViewItemsRadioChoice, .freebirdFormviewerViewItemsCheckboxChoice") ? c.style.margin = "0 10px" : c.style.width = "100%";
                    var m = document.createElement("img");
                    a.state ? (m.setAttribute("data-graph-state", JSON.stringify(a.state)), m.classList.add("equatio-form-inject-graph")) : m.setAttribute("data-latex", a.latex || a);
                    var h = 280;
                    if (l) {
                        var b = d < h ? l : l * (h / d);
                        m.setAttribute("width", b + "px");
                    }
                    if (d) {
                        var V = l < h ? d : d * (h / l);
                        m.setAttribute("height", V + "px");
                    }
                    m.id = "equatio-answer-" + new Date().getTime(), m.src = r, m.className = "equatio-form-inject-image", 
                    m.style.maxWidth = h + "px", c.appendChild(m), t.parentNode.insertBefore(c, t);
                    var u = e(t, c, i);
                    return t.parentNode.appendChild(u), m.id;
                }, i = function(t) {
                    var n = document.createElement("div");
                    return n.addEventListener("click", function(e) {
                        var o = n.getAttribute("data-related-image");
                        if (q(function*() {
                            var e = void 0;
                            try {
                                e = yield Z();
                            } catch (t) {
                                return;
                            }
                            b("Google Forms Response: Insert Image");
                            var i = a(t, e, o, n);
                            n.setAttribute("data-related-image", i);
                        })(), o) {
                            var i = document.getElementById(o), r = i.getAttribute("data-latex"), l = i.getAttribute("data-graph-state");
                            setTimeout(function() {
                                _(r || {
                                    state: l
                                });
                            }, 300);
                        }
                        e.preventDefault();
                    }), n.style.display = "flex", n.style["align-items"] = "center", n.style["justify-content"] = "center", 
                    n.style.margin = "-5px 5px 0 0", n.style.position = "relative", n.style.top = "-3px", 
                    n.innerHTML = '<button type="button" class="equatio-form-inject-button" style="width: 20px;height: 20px;background: #00B7FF;border-radius: 4px;display: flex;align-items: center;justify-content: center;border: 0;padding: 0;cursor: pointer;" title="Insert Math"><img src="' + U.a + '"></button>', 
                    n;
                }, r = function(t) {
                    if (t.closest(".freebirdFormviewerViewItemsTimeInput, .freebirdFormviewerViewItemsDateDateSelectionInput")) return null;
                    if (t.closest(".freebirdFormviewerViewMelbaContainer")) return null;
                    if ("textarea" !== t.tagName.toLowerCase() && !t.querySelector("input:not([type]), input[type='text']")) return null;
                    var n = i(t);
                    t.parentNode.parentNode.style.height = "auto", t.parentNode.appendChild(n);
                    var e = "textarea" === t.tagName.toLowerCase() ? t : t.querySelector("input");
                    return (e.value.includes("equatio-api.texthelp.com") || e.value.includes("equatio-api-dev.texthelp.com")) && q(function*() {
                        var i = new o.a(e.value, !0), r = void 0;
                        if (i.pathname.startsWith("/png/") || i.pathname.startsWith("/svg/")) {
                            var l = i.pathname.split("/").splice(2, 1), d = I(l, 1)[0], s = i.query, p = s.width, c = s.height;
                            r = Object.assign({}, {
                                latex: decodeURIComponent(d)
                            }, {
                                width: parseFloat(p)
                            }, {
                                height: parseFloat(c)
                            });
                        } else {
                            var m = yield Object(H.getLatexFromImageUrl)(e.value);
                            r = "desmos" === m.type ? Object.assign({}, m, {
                                url: e.value
                            }) : m;
                        }
                        var h = a(t, r, void 0, n), b = document.getElementById(h);
                        if ("desmos" === r.type) b.setAttribute("data-graph-state", r.state); else {
                            b.setAttribute("data-latex", r.latex || r);
                            var V = i.query, u = V.width, N = V.height, U = 280;
                            if (u) {
                                var R = N < U ? u : u * (U / N);
                                b.setAttribute("width", R + "px");
                            }
                            if (N) {
                                var f = u < U ? N : N * (U / u);
                                b.setAttribute("height", f + "px");
                            }
                        }
                        n.setAttribute("data-related-image", h), t.style.display = "none";
                    })(), n;
                };
                Array.from(document.querySelectorAll(".quantumWizTextinputPaperinputInputArea, .quantumWizTextinputPapertextareaInput, .freebirdFormviewerViewItemsRadioOtherInput, .freebirdFormviewerViewItemsCheckboxOtherInput")).forEach(r), 
                chrome.runtime.sendMessage({
                    action: "inject_requirements"
                });
            }
        }
    })();
    var $ = window.location.pathname;
    P(function*() {
        if ((yield p()).features["Forms Integration"] && window.top === window.self && $.includes("/forms/") && !$.endsWith("/viewform") && !$.endsWith("/formResponse")) {
            var t = function(t) {
                var n = document.createElement("img");
                n.src = t.textContent.trim(), n.style.maxWidth = "400px", t.parentNode.replaceChild(n, t);
            }, n = function(n) {
                var e = Array.from(n.querySelectorAll(".freebirdThemedInput, .freebirdCommonAnalyticsTextResponse, .freebirdFormviewerViewItemsRadioDisabledOtherInput, .freebirdFormeditorViewResponsesQuestionviewItemsShortText, .quantumWizTextinputSimpleinputInput, .quantumWizTextinputPapertextareaInput")).reduce(function(t, n) {
                    var e = Array.from(n.childNodes).filter(function(t) {
                        return t.nodeType === Element.TEXT_NODE && (t.textContent.includes("equatio-api-dev.texthelp.com") || t.textContent.includes("equatio-api.texthelp.com") || t.textContent.includes("equatioapi.texthelp.com"));
                    });
                    return t.concat(e);
                }, []);
                e.length && e.forEach(t);
            }, e = function(n) {
                var e = Array.from(n.querySelectorAll(".freebirdFormviewerViewItemsTextCorrectAnswer")).reduce(function(t, n) {
                    var e = Array.from(n.childNodes).filter(function(t) {
                        return t.nodeType === Element.ELEMENT_NODE && (t.textContent.includes("equatio-api-dev.texthelp.com") || t.textContent.includes("equatio-api.texthelp.com") || t.textContent.includes("equatioapi.texthelp.com"));
                    });
                    return t.concat(e);
                }, []);
                e.length && e.forEach(t);
            };
            if ($.endsWith("/viewscore")) Array.from(document.querySelectorAll(".freebirdQuizResponse")).forEach(function(t) {
                n(t), e(t);
            }); else {
                var a = document.querySelector("#ResponsesView");
                (function() {
                    new MutationObserver(function() {
                        n(a), e(a);
                    }).observe(a, {
                        childList: !0,
                        subtree: !0
                    });
                })();
            }
        }
    })();
} ]);