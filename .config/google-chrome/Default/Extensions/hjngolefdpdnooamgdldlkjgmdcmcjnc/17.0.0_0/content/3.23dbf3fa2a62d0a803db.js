(window.equatioChromeWebpackJsonP = window.equatioChromeWebpackJsonP || []).push([ [ 3 ], {
    10: function(t, e, n) {
        var r, o = n(110);
        "string" == typeof o && (o = [ [ t.i, o, "" ] ]);
        var i = {
            hmr: !0
        };
        i.transform = r, i.insertInto = void 0;
        n(19)(o, i);
        o.locals && (t.exports = o.locals);
    },
    110: function(t, e, n) {
        (t.exports = n(18)(void 0)).push([ t.i, ".equatio-toolbar-wrapper > div {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    font-size: 16px;\n    z-index: 9999;\n}\n\n.equatio-drawer {\n    z-index: -1;\n}\n\n.equatio-prediction-wrapper {\n    position: fixed !important;\n}\n\n.equatio-flyout-menu {\n    position: fixed;\n    bottom: 54px;\n    font-size: 16px;\n    z-index: 999;\n}\n\n/* Workaround for Academy display issue within PDF reader */\n.equatio-toolbar-wrapper--pdf .equatio-academy-wrapper > div {\n    position: fixed !important;\n}", "" ]);
    },
    18: function(t, e) {
        function n(t, e) {
            var n = t[1] || "", o = t[3];
            if (!o) return n;
            if (e && "function" == typeof btoa) {
                var i = r(o), a = o.sources.map(function(t) {
                    return "/*# sourceURL=" + o.sourceRoot + t + " */";
                });
                return [ n ].concat(a).concat([ i ]).join("\n");
            }
            return [ n ].join("\n");
        }
        function r(t) {
            return "/*# " + ("sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t))))) + " */";
        }
        t.exports = function(t) {
            var e = [];
            return e.toString = function() {
                return this.map(function(e) {
                    var r = n(e, t);
                    return e[2] ? "@media " + e[2] + "{" + r + "}" : r;
                }).join("");
            }, e.i = function(t, n) {
                "string" == typeof t && (t = [ [ null, t, "" ] ]);
                for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    "number" == typeof i && (r[i] = !0);
                }
                for (o = 0; o < t.length; o++) {
                    var a = t[o];
                    "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), 
                    e.push(a));
                }
            }, e;
        };
    },
    19: function(t, e, n) {
        var r, o = {}, i = function(t) {
            var e;
            return function() {
                return void 0 === e && (e = t.apply(this, arguments)), e;
            };
        }(function() {
            return window && document && document.all && !window.atob;
        }), a = function(t) {
            return document.querySelector(t);
        }, s = (r = {}, function(t) {
            if ("function" == typeof t) return t();
            if (void 0 === r[t]) {
                var e = a.call(this, t);
                if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) try {
                    e = e.contentDocument.head;
                } catch (t) {
                    e = null;
                }
                r[t] = e;
            }
            return r[t];
        }), f = null, u = 0, c = [], p = n(24);
        function l(t, e) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n], i = o[r.id];
                if (i) {
                    i.refs++;
                    for (var a = 0; a < i.parts.length; a++) i.parts[a](r.parts[a]);
                    for (;a < r.parts.length; a++) i.parts.push(w(r.parts[a], e));
                } else {
                    var s = [];
                    for (a = 0; a < r.parts.length; a++) s.push(w(r.parts[a], e));
                    o[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: s
                    };
                }
            }
        }
        function d(t, e) {
            for (var n = [], r = {}, o = 0; o < t.length; o++) {
                var i = t[o], a = e.base ? i[0] + e.base : i[0], s = {
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
        function h(t, e) {
            var n = s(t.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r = c[c.length - 1];
            if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), 
            c.push(e); else if ("bottom" === t.insertAt) n.appendChild(e); else {
                if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var o = s(t.insertInto + " " + t.insertAt.before);
                n.insertBefore(e, o);
            }
        }
        function v(t) {
            if (null === t.parentNode) return !1;
            t.parentNode.removeChild(t);
            var e = c.indexOf(t);
            e >= 0 && c.splice(e, 1);
        }
        function b(t) {
            var e = document.createElement("style");
            return void 0 === t.attrs.type && (t.attrs.type = "text/css"), y(e, t.attrs), h(t, e), 
            e;
        }
        function m(t) {
            var e = document.createElement("link");
            return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", 
            y(e, t.attrs), h(t, e), e;
        }
        function y(t, e) {
            Object.keys(e).forEach(function(n) {
                t.setAttribute(n, e[n]);
            });
        }
        function w(t, e) {
            var n, r, o, i;
            if (e.transform && t.css) {
                if (!(i = e.transform(t.css))) return function() {};
                t.css = i;
            }
            if (e.singleton) {
                var a = u++;
                n = f || (f = b(e)), r = U.bind(null, n, a, !1), o = U.bind(null, n, a, !0);
            } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = m(e), 
            r = R.bind(null, n, e), o = function() {
                v(n), n.href && URL.revokeObjectURL(n.href);
            }) : (n = b(e), r = L.bind(null, n), o = function() {
                v(n);
            });
            return r(t), function(e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    r(t = e);
                } else o();
            };
        }
        t.exports = function(t, e) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = i()), 
            e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
            var n = d(t, e);
            return l(n, e), function(t) {
                for (var r = [], i = 0; i < n.length; i++) {
                    var a = n[i];
                    (s = o[a.id]).refs--, r.push(s);
                }
                t && l(d(t, e), e);
                for (i = 0; i < r.length; i++) {
                    var s;
                    if (0 === (s = r[i]).refs) {
                        for (var f = 0; f < s.parts.length; f++) s.parts[f]();
                        delete o[s.id];
                    }
                }
            };
        };
        var g, x = (g = [], function(t, e) {
            return g[t] = e, g.filter(Boolean).join("\n");
        });
        function U(t, e, n, r) {
            var o = n ? "" : r.css;
            if (t.styleSheet) t.styleSheet.cssText = x(e, o); else {
                var i = document.createTextNode(o), a = t.childNodes;
                a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
            }
        }
        function L(t, e) {
            var n = e.css, r = e.media;
            if (r && t.setAttribute("media", r), t.styleSheet) t.styleSheet.cssText = n; else {
                for (;t.firstChild; ) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n));
            }
        }
        function R(t, e, n) {
            var r = n.css, o = n.sourceMap, i = void 0 === e.convertToAbsoluteUrls && o;
            (e.convertToAbsoluteUrls || i) && (r = p(r)), o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var a = new Blob([ r ], {
                type: "text/css"
            }), s = t.href;
            t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
        }
    },
    24: function(t, e) {
        t.exports = function(t) {
            var e = "undefined" != typeof window && window.location;
            if (!e) throw new Error("fixUrls requires window.location");
            if (!t || "string" != typeof t) return t;
            var n = e.protocol + "//" + e.host, r = n + e.pathname.replace(/\/[^\/]*$/, "/");
            return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
                var o, i = e.trim().replace(/^"(.*)"$/, function(t, e) {
                    return e;
                }).replace(/^'(.*)'$/, function(t, e) {
                    return e;
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), 
                "url(" + JSON.stringify(o) + ")");
            });
        };
    }
} ]);