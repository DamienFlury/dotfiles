(window.equatioChromeWebpackJsonP = window.equatioChromeWebpackJsonP || []).push([ [ 4 ], [ , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(17), o = n(4);
    function a(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var i = t[o](a), u = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(u).then(function(e) {
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
    var i = a(function*() {
        return {
            screenView: o.k,
            event: o.j
        };
    });
    r.Analytics.createAnalytics(null, null, i);
    var u = n(27), s = n(117), c = n(2), l = n(1), d = n(177), p = (n(208), n(49));
    function f(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var i = t[o](a), u = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(u).then(function(e) {
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
    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    var m = Object(r.createToolbar)({
        iconButtons: [ r.ToolButtonEquationEditor, r.ToolButtonLatexEditor, r.ToolButtonGraphEditor, r.ToolButtonHandwritingRecognition, r.ToolButtonSpeechInput, r.ToolButtonCompanionApp, r.ToolButtonMathspace, d.a ],
        actionButtons: [ r.ActionButtonExtractMath, r.ActionButtonInsertMath ],
        speechRecognizer: r.SpeechRecognizers.Webkit,
        handwritingFramePath: "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/handwritingFrame/page.html",
        importStyleguide: !1,
        mathJaxRootUrl: "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/libraries/mathjax",
        desmosRootUrl: "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/libraries/desmos",
        equatioAcademyWindow: r.AcademyOptions.Inbuilt
    }), g = function() {
        var e;
        if (Object(l.a)()) Object(o.i)(s.a.PDFReader); else {
            var t = Object(c.c)();
            if (t) {
                var n = (e = {}, h(e, c.a.GoogleForms, s.a.GoogleForms), h(e, c.a.GoogleSheets, s.a.GoogleSheets), 
                h(e, c.a.GoogleDocs, s.a.GoogleDocs), h(e, c.a.GoogleDrawings, s.a.GoogleDrawings), 
                h(e, c.a.GoogleSlides, s.a.GoogleSlides), e)[t];
                Object(o.i)(n);
            }
        }
    };
    f(function*() {
        yield Object(p.b)(!1), g(), Object(o.o)(), Object(o.q)(), Object(o.r)();
    })(), r.Actions.Toolbar.setExtractedMathDisabled(window.location.href.includes("docs.google.com/forms")), 
    f(function*() {
        var e = yield Object(o.d)();
        r.Actions.Toolbar.setInsertsLeft(e);
    })(), r.Actions.Toolbar.setVersion("17.0.0"), Promise.all([ n.e(0), n.e(5) ]).then(n.bind(null, 264));
    var v = n(96), y = n(97), b = n(98), w = n(99);
    n.d(t, "store", function() {
        return u.a;
    }), n.d(t, "toolbar", function() {
        return m;
    }), n.d(t, "PopupMenu", function() {
        return v.a;
    }), n.d(t, "optionsDialog", function() {
        return y.a;
    }), n.d(t, "UpgradeOverlay", function() {
        return b.a;
    }), n.d(t, "ShadowElements", function() {
        return w.a;
    }), n.d(t, "AcademyFloatingWindow", function() {
        return r.AcademyFloatingWindow;
    });
}, , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = n(17), o = n(33), a = n(4), i = n(47), u = n(49);
    function s(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var i = t[o](a), u = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(u).then(function(e) {
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
    var c = function() {
        document.querySelector(".equatio-options-dialog-overlay").classList.toggle("equatio-options-dialog-overlay--hidden", !0);
    }, l = function() {
        return function(e) {
            return function(t) {
                switch (t.type) {
                  case r.Events.Options.SaveSettings:
                    var n = t.profile, o = t.options;
                    s(function*() {
                        yield Object(a.s)(o, n), r.Actions.Options.closeDialog();
                    })(), c();
                    break;

                  case r.Events.Options.CheckLicense:
                    var l = t.code;
                    s(function*() {
                        try {
                            var e = yield Object(i.a)(l);
                            r.Actions.Options.setUserLicense(e);
                        } catch (e) {
                            r.Actions.Options.setUserLicenseError();
                        }
                    })();
                    break;

                  case r.Events.Options.Closed:
                    c(), Object(u.b)();
                }
                return e(t);
            };
        };
    };
    t.a = Object(r.createReduxStore)([ o.b, l, u.a ], "Equatio Chrome");
}, , , , , function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(15);
        t.a = function() {
            return e("li", {
                className: "equatio-upgrade-iconset__item"
            }, e("svg", {
                viewBox: "0 0 47.758 47.761",
                className: "equatio-upgrade-iconset-image",
                style: {
                    minWidth: "50px",
                    minHeight: "50px"
                }
            }, e("use", {
                xlinkHref: "#equatio-svg-upgrade-draw-shapes"
            })), e("p", {
                className: "equatio-upgrade-iconset-message"
            }, e(r.a, {
                id: "upgrade-overlay-iconset-unlimited-handwriting",
                defaultMessage: "Unlimited handwriting inputs"
            })));
        };
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    var r = n(17), o = n(47), a = n(4), i = n(111), u = n(2), s = n(27), c = function(e) {
        if (e.origin === window.location.origin && e.data && e.data.action) {
            if ("EQUATIO_CHROME_EXTRACT_MATH" === e.data.action) {
                var t = e.data.latex;
                if (t) r.Actions.Toolbar.setExtractedMath(t), s.a.getState().drawer.mode !== r.ToolModes.EquationEditor && r.Actions.Toolbar.setMode(r.ToolModes.EquationEditor);
            }
            if ("EQUATIO_CHROME_EXTRACT_GRAPH" === e.data.action) {
                var n = e.data.state;
                if (n) r.Actions.Toolbar.setExtractedGraph(n), s.a.getState().drawer.mode !== r.ToolModes.GraphEditor && r.Actions.Toolbar.setMode(r.ToolModes.GraphEditor);
            }
            if ("EQUATIO_CHROME_EXTRACT_MATHSPACE" === e.data.action) {
                var o = e.data.platformIntegrationId;
                o && Object(a.h)(o);
            }
        }
    };
    window.addEventListener("message", c);
    var l = function() {
        return window.postMessage({
            action: "EQUATIO_CHROME_REQUEST_EXTRACTED_MATH"
        }, window.location.origin), Promise.resolve();
    }, d = function(e) {
        if (e.origin === window.location.origin && e.data && e.data.action && "EQUATIO_CHROME_SET_MODE" === e.data.action) {
            var t = e.data.mode;
            r.Actions.Toolbar.setMode(t);
        }
    }, p = function() {
        window.addEventListener("message", d);
    }, f = function(e, t) {
        return e || t ? [ {
            name: "width",
            value: e
        }, {
            name: "height",
            value: t
        } ].map(function(e) {
            return e.name + "=" + Math.ceil(e.value);
        }).join("&") : "";
    }, h = n(34);
    function m(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var i = t[o](a), u = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(u).then(function(e) {
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
    var g, v, y, b = (g = m(function*(e, t, n, r) {
        if (e) {
            var o = f(t, n), a = function(t) {
                return "https://equatio-api.texthelp.com/" + t + "/" + encodeURIComponent(e) + "?" + o;
            };
            window.postMessage({
                action: "EQUATIO_CHROME_INSERT_MATH",
                png: a("png"),
                svg: a("svg"),
                altText: r,
                width: t,
                height: n,
                latex: e
            }, window.location.href);
        }
    }), function(e, t, n, r) {
        return g.apply(this, arguments);
    }), w = (v = m(function*(e) {
        window.postMessage({
            action: "EQUATIO_CHROME_INSERT_IMAGE",
            png: e
        }, window.location.href);
    }), function(e) {
        return v.apply(this, arguments);
    }), O = (y = m(function*(e, t) {
        if (e && t) {
            var n = yield Object(h.a)(e, t);
            window.postMessage({
                action: "EQUATIO_CHROME_INSERT_GRAPH",
                url: n
            }, window.location.href);
        }
    }), function(e, t) {
        return y.apply(this, arguments);
    }), x = n(48), q = function(e, t, n) {
        for (var r = void 0, o = [], a = void 0, i = void 0; (r = document.elementFromPoint(e, t)) && !o.includes(r) && r !== i; ) {
            if (r.matches("" + n)) {
                a = r;
                break;
            }
            o.push({
                element: r,
                value: r.style.getPropertyValue("pointer-events"),
                priority: r.style.getPropertyPriority("pointer-events")
            }), r.style.setProperty("pointer-events", "none", "important"), i = r;
        }
        return o.forEach(function(e) {
            e.element.style.setProperty("pointer-events", e.value || "", e.priority);
        }), a;
    }, E = function() {
        var e = null, t = "cell", n = Array.from(document.querySelectorAll(".waffle-obj-menu-control-material")).filter(function(e) {
            return e.offsetParent;
        });
        if (n.length) {
            var r = n[0].getBoundingClientRect(), o = r.x, a = r.y, i = r.width, u = r.height, s = document.querySelector("div.focused-overlay-container").getBoundingClientRect(), c = a + u < s.top ? a - s.top : 0, l = o + i > s.width ? o - s.width : 0;
            e = q(o - l, a - c, ".waffle-borderless-embedded-object-container img"), t = "image";
        } else e = document.querySelector("#formula-bar .cell-input");
        return {
            element: e,
            type: t
        };
    }, S = function() {
        var e = document.querySelector("#formula-bar .cell-input");
        if (!e) return "";
        var t = /equatio-api(?:-dev)?\.texthelp\.com\/svg\/(.*?)["?]/.exec(e.textContent);
        return t && t.length > 1 ? decodeURIComponent(t[1]) : "";
    }, j = function(e) {
        return e && e && (e.includes("googleusercontent.com") || e.includes("filesystem:")) ? Object(x.getLatexFromImageUrl)(e) : Promise.resolve("");
    }, k = function() {
        var e = E();
        if (e) {
            if ("cell" === e.type) return S();
            if (e.element) return j(e.element.src);
        }
        return Promise.resolve("");
    }, _ = [ "Mediante URL", "URLaren arabera", "By URL", "De URL", "\u901a\u8fc7\u7f51\u5740", "\u4f7f\u7528\u7db2\u5740\u4e0a\u50b3", "Deur URL", "\u041f\u043e URL \u0430\u0434\u0440\u0435\u0441", "Podle adresy URL", "Efter webadresse", "Per URL", "\u039a\u03b1\u03c4\u03ac \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 URL", "URL-i j\xe4rgi", "URL-osoitteen mukaan", "Ayon sa URL", "\xc0 partir d'une URL", "\xc0 partir d'une URL", "Por URL", "Prema URL-u", "URL-c\xedm haszn\xe1lat\xe1val", "Melalui URL", "Af sl\xf3\xf0", "Tramite URL", "I\u0161 URL", "P\u0113c\xa0URL", "Via URL", "Via nettadresse", "Z URL-a", "Por URL", "Dup\u0103 adresa URL", "Z\xa0webovej adresy", "\u041f\u0440\u0435\u043c\u0430 URL-\u0443", "Via webbadress" ], M = [ "Image...", "Imagen...", "\u56fe\u7247...", "Prent...", "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435...", "Obr\xe1zek...", "Billede...", "Bild...", "\u0395\u03b9\u03ba\u03cc\u03bd\u03b1...", "Pilt...", "Kuva...", "Larawan...", "Image...", "Image...", "Imaxe...", "Slika...", "K\xe9p...", "Gambar...", "Mynd...", "Immagine ...", "Vaizdas...", "Att\u0113ls...", "Afbeelding...", "Bilde...", "Obraz...", "Imagem...", "Imagem...", "Imagine...", "Obr\xe1zok...", "\u0421\u043b\u0438\u043a\u0430...", "Bild..." ], T = function(e) {
        var t = function(e, t) {
            var n = document.createEvent("MouseEvents");
            n.initEvent(t, !0, !0), e.dispatchEvent(n);
        };
        t(e, "mousedown"), t(e, "mouseup"), t(e, "click");
    };
    function P(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var i = t[o](a), u = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(u).then(function(e) {
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
    var I = void 0, C = function() {
        return Array.from(document.querySelectorAll(".goog-menuitem-label")).filter(function(e) {
            var t = e.getAttribute("aria-label");
            return !!t && (t.endsWith("... i") || t.endsWith("\u2026 i") || t.endsWith(" i"));
        });
    }, L = function() {
        return I || (I = new Promise(function(e, t) {
            var n, r = 0, o = (n = P(function*() {
                var n = C();
                n && n.length || (T(document.getElementById("docs-insert-menu")), n = C(), T(document.getElementById("docs-insert-menu")));
                var a = Array.from(document.querySelectorAll(".goog-menuitem-mnemonic-hint")).filter(function(e) {
                    return e.closest(".goog-menuitem-label");
                }).filter(function(e) {
                    return M.some(function(t) {
                        return e.closest(".goog-menuitem-label").textContent.startsWith(t);
                    });
                }), i = void 0;
                if (!(i = "Google Sheets" === Object(u.c)() ? a && a.length && a[0].closest(".apps-menuitem") : n && n.length && n[0].closest(".apps-menuitem"))) {
                    var s = Array.from(document.querySelectorAll(".goog-menu-vertical[class='goog-menu goog-menu-vertical docs-material']"));
                    s.length >= 4 && (i = s[3].querySelector(".goog-menuitem"));
                }
                var c = i || document.querySelector("#imageButton");
                return c ? e(c) : (r += 1) > 20 ? t(Error("timed_out")) : setTimeout(o, 500);
            }), function() {
                return n.apply(this, arguments);
            });
            o();
        }));
    }, A = void 0;
    function R(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var i = t[o](a), u = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(u).then(function(e) {
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
    var N = void 0, F = void 0, U = function(e, t) {
        N = t;
    }, G = function() {
        var e = R(function*(e) {
            var t = yield L();
            T(t), U(window.location.href, function() {
                Object(a.g)(e, F);
            });
        });
        return function(t) {
            return e.apply(this, arguments);
        };
    }();
    function B(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var i = t[o](a), u = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(u).then(function(e) {
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
    window.addEventListener("message", function(e) {
        e && e.data && "image_dialog_loaded" === e.data.action && (F = e.data.pickerWindow, 
        "function" == typeof N && (N.call(A), N = null));
    });
    var H, D = void 0, W = function() {
        return new Promise(function(e) {
            D && clearInterval(D), document.querySelector(".picker-urlview-inner-input") ? e() : D = setInterval(function() {
                document.querySelector(".picker-urlview-inner-input") && (clearInterval(D), e());
            }, 50);
        });
    }, z = function() {
        var e = B(function*() {
            T(document.getElementById("docs-insert-menu"));
            var e = yield L();
            setTimeout(function() {
                T(e), T(e);
            }, 100), setTimeout(function() {
                var e = Array.from(document.querySelectorAll(".goog-menuitem.apps-menuitem:not([aria-disabled]) .goog-menuitem-label")).filter(function(e) {
                    return _.some(function(t) {
                        return e.textContent && e.textContent.includes(t);
                    });
                }), t = e[0] && e[0].closest(".goog-menuitem");
                T(t);
            }, 500);
        });
        return function() {
            return e.apply(this, arguments);
        };
    }(), Y = function(e) {
        return new Promise(function(t) {
            var n = new MutationObserver(function() {
                e.disabled || (n.disconnect(), t());
            });
            n.observe(e, {
                attributes: !0,
                attributeFilter: [ "disabled" ]
            });
        });
    }, K = function() {
        var e = B(function*(e) {
            var t = document.querySelector(".picker-urlview-inner-input"), n = document.querySelector(".picker-urlview-insertbutton");
            t.value = e;
            var r = new Event("paste", {
                bubbles: !0,
                cancelable: !1,
                shiftKey: !1
            });
            B(function*() {
                yield Y(n), T(n);
            })(), document.querySelector(".picker-urlview-inner-input").dispatchEvent(r);
        });
        return function(t) {
            return e.apply(this, arguments);
        };
    }(), X = (H = B(function*(e) {
        document.querySelector(".picker-urlview-inner-input") || (yield z()), yield W(), 
        yield K(e);
    }), function(e) {
        return H.apply(this, arguments);
    });
    function V(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var i = t[o](a), u = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(u).then(function(e) {
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
    var Q = void 0, J = V(function*() {
        if (Q) return Q;
        var e = yield L();
        return Q = e.querySelector(".goog-submenu-arrow") ? X : G;
    });
    function Z(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var i = t[o](a), u = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(u).then(function(e) {
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
    var $ = function() {
        var e = Z(function*(e) {
            yield (yield J())(e);
        });
        return function(t) {
            return e.apply(this, arguments);
        };
    }(), ee = function() {
        var e = Z(function*(e, t) {
            if (e && t) {
                var n = yield Object(h.a)(e, t);
                yield $(n);
            }
        });
        return function(t, n) {
            return e.apply(this, arguments);
        };
    }(), te = function() {
        var e = Z(function*(e, t, n) {
            if (e) {
                var r = f(t, n), o = "https://equatio-api.texthelp.com/svg/" + encodeURIComponent(e) + "?" + r, a = document.querySelector("#formula-bar .cell-input");
                a.innerHTML = '=IMAGE("' + o + '")', a.focus(), yield new Promise(function(e) {
                    setTimeout(function() {
                        a.focus();
                        var t = new KeyboardEvent("keypress", {
                            bubbles: !0,
                            cancelable: !0,
                            code: "Enter",
                            key: "Enter",
                            keyCode: 13,
                            shiftKey: !1,
                            composed: !0,
                            returnValue: !1,
                            view: window
                        });
                        a.dispatchEvent(t);
                        var n = document.querySelector("#docs-file-menu");
                        setTimeout(function() {
                            T(n, "mousedown"), T(n, "mousedown"), e();
                        });
                    });
                });
            }
        });
        return function(t, n, r) {
            return e.apply(this, arguments);
        };
    }();
    function ne(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var i = t[o](a), u = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(u).then(function(e) {
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
    var re = function() {
        var e = ne(function*(e, t, n, r) {
            e && window.postMessage({
                action: "EQUATIO_INSERT_MATH_FORMS",
                latex: e,
                width: t,
                height: n,
                altText: r
            }, window.location.href);
        });
        return function(t, n, r, o) {
            return e.apply(this, arguments);
        };
    }(), oe = function() {
        var e = ne(function*(e) {
            window.postMessage({
                action: "EQUATIO_INSERT_IMAGE_FORMS",
                url: e
            }, window.location.href);
        });
        return function(t) {
            return e.apply(this, arguments);
        };
    }(), ae = function() {
        var e = ne(function*(e, t) {
            if (e && t) {
                var n = yield Object(h.a)(e, t);
                window.postMessage({
                    action: "EQUATIO_INSERT_GRAPH_FORMS",
                    url: n,
                    state: t
                }, window.location.href);
            }
        });
        return function(t, n) {
            return e.apply(this, arguments);
        };
    }(), ie = void 0, ue = function() {
        if (ie) return ie;
        var e = Array.from(document.querySelectorAll(".goog-menuitem-label")).filter(function(e) {
            var t = e.getAttribute("aria-label");
            return !!t && ((t.endsWith("..., x;") || t.endsWith("... x")) && e.nextElementSibling && e.nextElementSibling.textContent.endsWith("+Y"));
        });
        return e.length || (e = Array.from(document.querySelectorAll(".goog-menuitem-accel")).filter(function(e) {
            if (!e.textContent.startsWith("\u2318+") || !e.textContent.endsWith("+Y")) return !1;
            var t = e.previousElementSibling;
            if (!t) return !1;
            if (!t.matches(".goog-menuitem-label")) return !1;
            var n = e.previousElementSibling.getAttribute("aria-label");
            return n && (n.endsWith(" x") || n.endsWith(" x;"));
        })), ie = e && e.length && e[0].closest(".goog-menuitem");
    }, se = n(115), ce = n.n(se), le = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.querySelector(".docs-texteventtarget-iframe").contentDocument;
        try {
            var n = [], r = null, o = null;
            for (var a in t) if (a.match(/^closure/) && "number" != typeof t[a]) {
                var i = t[a];
                if (!i) continue;
                if (!r) for (var u in i) {
                    var s = i[u];
                    if (s && s != t) for (var c in s) {
                        var l = s[c];
                        l && (void 0 != l.length && l[0].src == t && (r = u, n.concat(l)));
                    }
                }
                for (var d in i[r]) if (d == e) for (var p = i[r][d], f = 0; f < p.length; f++) {
                    if (!o && p[f].src == t) for (var h in p[f]) if (p[f][h].src == t) {
                        o = h;
                        break;
                    }
                    n.push({
                        eventObject: p[f],
                        eventHandler: p[f][o]
                    });
                }
            }
            return n;
        } catch (e) {}
    }, de = function() {
        var e = document.querySelector(".docs-texteventtarget-iframe");
        return {
            win: e.contentWindow,
            doc: e.contentDocument
        };
    }, pe = function(e, t) {
        var n = de(), r = n.doc, o = n.win, a = ce()(e), i = a.altKey, u = a.shiftKey, s = a.keyCode, c = a.ctrlKey, l = e.toLowerCase().startsWith("cmd+") || e.startsWith("\u2318+");
        !l || e.toLowerCase().includes("control") || e.toLowerCase().includes("ctrl") || (c = !1);
        var d = Array.isArray(s) ? s[0] : s;
        return {
            altGraphKey: !1,
            bubbles: !0,
            cancelBubble: !1,
            cancelable: !0,
            clipboardData: void 0,
            currentTarget: r,
            defaultPrevented: !1,
            detail: 0,
            eventPhase: 0,
            keyLocation: 0,
            layerX: 0,
            layerY: 0,
            pageX: 0,
            pageY: 0,
            returnValue: !0,
            srcElement: r.body,
            target: r.body,
            timeStamp: new Date().getTime(),
            type: t,
            view: o,
            which: d,
            charCode: d,
            altKey: i,
            ctrlKey: c,
            shiftKey: u,
            metaKey: l,
            keyCode: d
        };
    }, fe = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "keydown";
        return le(t).forEach(function(n) {
            var r = pe(e, t);
            try {
                n.eventHandler(r);
            } catch (e) {}
        });
    }, he = function(e) {
        fe(e, "keydown"), fe(e, "keyup");
    }, me = function() {
        he("ctrl+alt+y"), he("cmd+alt+y");
    }, ge = function() {
        he("Shift+Left");
    }, ve = function() {
        he("Right");
    }, ye = function() {
        var e = document.querySelector("path[stroke='#5da2ff']");
        if (e) {
            if (Object(u.c)() === u.a.GoogleSlides) return e.closest("g[id^='editor-']").querySelector("image");
            var t = e.getAttribute("d"), n = document.querySelector("clipPath path[d='" + t + "']");
            if (n && n.parentNode && n.parentNode.nextSibling && n.parentNode.nextSibling.children && n.parentNode.nextSibling.children.length > 0 && "image" === n.parentNode.nextSibling.children[0].tagName.toLowerCase()) return n.parentNode.nextSibling.children[0];
        }
    }, be = function(e) {
        var t = function() {
            var t = ue();
            t ? T(t) : me();
            var n = document.querySelector("#alt-text-dialog-description");
            n.value = e;
            var r = n.closest(".modal-dialog").querySelector(".goog-buttonset-default.goog-buttonset-action");
            T(r);
        }, n = new MutationObserver(function() {
            t(), n.disconnect();
        });
        n.observe(document.querySelector("#workspace > svg"), {
            childList: !0,
            subtree: !0
        });
    }, we = function() {
        var e = ye();
        if (e) {
            var t = e.getAttribute("href");
            if (t && (t.includes("googleusercontent.com") || t.includes("filesystem:"))) return Object(x.getLatexFromImageUrl)(t);
        }
        return Promise.reject(Error("no_text_found"));
    };
    function Oe(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var i = t[o](a), u = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(u).then(function(e) {
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
    var xe = function(e, t) {
        return new Promise(function(n, r) {
            var o = 0;
            (function a() {
                o += 1;
                var i = e();
                i ? n(i) : o >= t ? r() : setTimeout(a, 50);
            })();
        });
    }, qe = function() {
        var e = document.querySelector(".kix-cursor-caret");
        if (e) {
            var t = e.getBoundingClientRect(), n = t.x, r = t.y, o = t.width, a = t.height;
            return q(n + o, r + a / 2, ".kix-embeddedobject-image");
        }
    }, Ee = function() {
        var e = Oe(function*(e) {
            var t, n = (t = Oe(function*() {
                ge(), me();
                var t = yield xe(function() {
                    return document.querySelector("#alt-text-dialog-description");
                }, 20);
                t.value = e;
                var n = t.closest(".modal-dialog").querySelector(".goog-buttonset-default.goog-buttonset-action");
                T(n), setTimeout(function() {
                    ve();
                }, 300);
            }), function() {
                return t.apply(this, arguments);
            }), r = new MutationObserver(function() {
                try {
                    n();
                } catch (e) {}
                r.disconnect();
            });
            r.observe(document.querySelector("#docs-editor"), {
                childList: !0,
                subtree: !0
            });
        });
        return function(t) {
            return e.apply(this, arguments);
        };
    }(), Se = function() {
        var e = document.querySelector(".docs-linkbubble-bubble a");
        return e && e.offsetParent && (e.href.indexOf("api.gmath.guru") >= 0 || e.href.indexOf("equatioapi.texthelp.com") >= 0);
    }, je = function() {
        var e = document.querySelector(".docs-linkbubble-bubble a").href.replace("http://api.gmath.guru/cgi-bin/gmath?%5Cdpi%7B480%7D", "").replace("http://api.gmath.guru/cgi-bin/gmath?", "").replace("http://equatioapi.texthelp.com/cgi-bin/gmath?%5Cdpi%7B480%7D", "").replace("http://equatioapi.texthelp.com/cgi-bin/gmath?", "");
        return decodeURIComponent(e);
    }, ke = function() {
        var e = qe();
        if (e) {
            var t = e.querySelector("image").getAttribute("xlink:href");
            return Object(x.getLatexFromImageUrl)(t);
        }
        return Promise.reject(Error("no_math_found"));
    }, _e = function() {
        return Se() ? je() : ke();
    }, Me = function() {
        return Object(u.b)() ? we() : _e();
    };
    function Te(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var i = t[o](a), u = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(u).then(function(e) {
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
    var Pe = function(e, t, n, r) {
        return n || r ? n && r ? {
            width: n,
            height: r
        } : n ? {
            width: n,
            height: t * (n / e)
        } : {
            width: e * (r / t),
            height: r
        } : {
            width: e,
            height: t
        };
    }, Ie = function() {
        var e = Te(function*(e) {
            yield (yield J())(e);
        });
        return function(t) {
            return e.apply(this, arguments);
        };
    }(), Ce = function() {
        var e = Te(function*(e, t) {
            if (e && t) {
                var n = yield Object(h.a)(e, t);
                yield Ie(n);
            }
        });
        return function(t, n) {
            return e.apply(this, arguments);
        };
    }(), Le = function() {
        var e = Te(function*(e, t, n, r) {
            if (e) {
                var o = void 0;
                if (Object(u.b)()) be(r), o = f(t, n); else {
                    var a = n;
                    if (Ee(r), t < 20) {
                        var i = Pe(t, n, 20);
                        a = Math.ceil(i.height);
                    } else if (n < 20) {
                        var s = Pe(t, n, void 0, 20);
                        a = Math.ceil(s.height);
                    }
                    o = "height=" + a;
                }
                var c = "https://equatio-api.texthelp.com/png/" + encodeURIComponent(e) + "?" + o;
                yield (yield J())(c);
            }
        });
        return function(t, n, r, o) {
            return e.apply(this, arguments);
        };
    }(), Ae = void 0, Re = void 0;
    if ("docs.google.com" === window.location.host) switch (Object(u.c)()) {
      case "Google Forms":
        Ae = l, Re = {
            graph: ae,
            math: re,
            image: oe
        };
        break;

      case "Google Sheets":
        Ae = k, Re = {
            graph: ee,
            math: te,
            image: $
        };
        break;

      default:
        Ae = Me, Re = {
            graph: Ce,
            math: Le,
            image: Ie
        };
    } else Ae = l, Re = {
        graph: O,
        math: b,
        image: w
    }, p();
    Object(i.a)(Re);
    var Ne = function() {
        return Ae;
    }, Fe = function() {
        return Re;
    }, Ue = n(6);
    function Ge(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var i = t[o](a), u = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(u).then(function(e) {
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
    n.d(t, "a", function() {
        return He;
    }), n.d(t, "c", function() {
        return De;
    });
    var Be = [], He = function(e) {
        Be.push(e);
    }, De = function(e) {
        var t = Be.findIndex(function(t) {
            return t === e;
        });
        t >= 0 && Be.splice(t, 1);
    }, We = function(e) {
        Be.forEach(function(t) {
            "function" == typeof t && t(e);
        });
    };
    t.b = function(e) {
        return function(t) {
            return function(n) {
                switch (n.type) {
                  case r.Events.Toolbar.OpenMathspace:
                    Object(a.h)();
                    break;

                  case r.Events.General.RequestLicense:
                    Ge(function*() {
                        var e = yield Object(o.b)(), t = e || {}, n = t.daysleft, i = t.auth_code, u = (e || {}).licence_type, s = void 0 === u ? "Unknown" : u;
                        n <= 30 && "Freemium" === s ? s = "Trial" : n < 0 && (s = "Expired"), Object(a.j)("License Check - " + s + (i ? " - " + i : "")), 
                        r.Actions.General.setLicense(e);
                    })();
                    break;

                  case r.Events.Toolbar.SetInsertsLeft:
                    var i = n.value;
                    Object(a.l)(i);
                    break;

                  case r.Events.Toolbar.RequestExtractedMath:
                    var u = Ne();
                    Ge(function*() {
                        var t = yield u();
                        if (t) {
                            var n = e.getState().drawer.mode;
                            "mathspace" === t.type ? Object(a.h)(t.platformIntegrationId) : "desmos" === t.type ? (Object(a.j)("Extract Graph - " + n + " - " + Object(Ue.a)()), 
                            r.Actions.Toolbar.setExtractedGraph(t.state), n !== r.ToolModes.GraphEditor && r.Actions.Toolbar.setMode(r.ToolModes.GraphEditor)) : (Object(a.j)("Extract Math - " + n + " - " + Object(Ue.a)()), 
                            r.Actions.Toolbar.setExtractedMath(t), n !== r.ToolModes.EquationEditor && r.Actions.Toolbar.setMode(r.ToolModes.EquationEditor));
                        }
                    })();
                    break;

                  case r.Events.Toolbar.InsertMath:
                    var s = e.getState().drawer.mode, c = n.width, l = n.height, d = n.latex, p = n.spokenText, f = Fe().math;
                    Object(a.j)("Insert Math - " + s + " - " + Object(Ue.a)()), Ge(function*() {
                        yield f(d, c, l, p), s === r.ToolModes.HandwritingRecognition && Object(a.p)();
                    })();
                    break;

                  case r.Events.Toolbar.InsertGraph:
                    var h = e.getState().drawer.mode, m = n.imageData, g = n.calculatorState;
                    m && g && Ge(function*() {
                        var e = Fe().graph;
                        Object(a.j)("Insert Graph - " + h + " - " + Object(Ue.a)()), yield e(m, g), Object(a.p)();
                    })();
                    break;

                  case r.Events.Toolbar.SetMode:
                    var v = n.mode;
                    if ("screenshot_reader" === v) {
                        var y = e.getState().licensing.profile, b = y.daysleft, w = y.features;
                        if (b < 0 && !w["Screenshot Reader"]) return t({
                            type: "noop"
                        });
                    }
                    v === r.ToolModes.HandwritingRecognition ? Object(a.m)() : v === r.ToolModes.EquationEditor && Object(a.n)();
                }
                var O = t(n);
                return We(n), O;
            };
        };
    };
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(4), o = n(1);
        function a(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a), u = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(u).then(function(e) {
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
        var i, u, s = (i = a(function*(t, n) {
            var r = e.from(t.substr(22), "base64"), o = e.from("desmos::" + JSON.stringify(n) + "::desmos", "utf8"), a = e.concat([ r, o ]);
            return URL.createObjectURL(new Blob([ a ]), {
                oneTimeOnly: !0
            });
        }), function(e, t) {
            return i.apply(this, arguments);
        });
        t.a = (u = a(function*(t, n) {
            if (Object(o.a)()) {
                var a = e.from(t.substr(22), "base64"), i = e.from("desmos::" + JSON.stringify(n) + "::desmos", "utf8"), u = "data:image/png;base64," + e.concat([ a, i ]).toString("base64");
                return Object(r.t)(null, u, !0);
            }
            var c = yield s(t, n);
            return Object(r.t)(c, null, !0);
        }), function(e, t) {
            return u.apply(this, arguments);
        });
    }).call(this, n(63).Buffer);
}, , , , , , , , function(e) {
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
    (function(e) {
        var r = n(15);
        t.a = function() {
            return e("li", {
                className: "equatio-upgrade-iconset__item"
            }, e("svg", {
                viewBox: "0 0 47.758 47.761",
                className: "equatio-upgrade-iconset-image",
                style: {
                    minWidth: "50px",
                    minHeight: "50px"
                }
            }, e("use", {
                xlinkHref: "#equatio-svg-upgrade-math-prediction"
            })), e("p", {
                className: "equatio-upgrade-iconset-message"
            }, e(r.a, {
                id: "upgrade-overlay-iconset-advanced-math",
                defaultMessage: "The advanced math and chemistry prediction engine"
            })));
        };
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(15);
        t.a = function() {
            return e("li", {
                className: "equatio-upgrade-iconset__item"
            }, e("svg", {
                viewBox: "0 0 47.758 47.761",
                className: "equatio-upgrade-iconset-image",
                style: {
                    minWidth: "50px",
                    minHeight: "50px"
                }
            }, e("use", {
                xlinkHref: "#equatio-svg-upgrade-math-prediction"
            })), e("p", {
                className: "equatio-upgrade-iconset-message"
            }, e(r.a, {
                id: "upgrade-overlay-iconset-built-in-integration",
                defaultMessage: "Built-in integration with Google Forms, Slides, Sheets & Drawings"
            })));
        };
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    var r, o = n(228), a = n.n(o), i = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    };
    function u(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var i = t[o](a), u = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(u).then(function(e) {
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
    t.a = (r = u(function*(e, t) {
        return new Promise(function(n, r) {
            var o = a()(), u = void 0, s = function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = t.origin, i = t.data;
                if (a === window.location.origin && i && i.equatioInPageResponse === o) {
                    clearTimeout(u), window.removeEventListener("message", e);
                    var s = i.success, c = i.error, l = i.result;
                    s ? n(l) : r(c);
                }
            };
            window.addEventListener("message", s), u = setTimeout(function() {
                r(Error("timed_out")), window.removeEventListener("message", s);
            }, 15e3), window.postMessage(i({
                equatioInPageAction: e,
                unique: o
            }, t), window.location.origin);
        });
    }), function(e, t) {
        return r.apply(this, arguments);
    });
}, function(e, t, n) {
    "use strict";
    var r = n(15), o = n(200), a = n.n(o), i = n(201), u = n.n(i), s = n(202), c = n.n(s), l = n(42), d = n(203), p = (Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    })({}, l, d), f = (Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    })({}, l), h = n(204), m = (Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    })({}, l, h), g = n(205), v = (Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    })({}, l, g);
    function y(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n;
        }
        return Array.from(e);
    }
    n.d(t, "b", function() {
        return O;
    }), n.d(t, "a", function() {
        return x;
    }), Object(r.c)([].concat(y(a.a), y(u.a), y(c.a)));
    var b = {
        enUS: f,
        enGB: p,
        es: m,
        fr: v
    }, w = function() {
        return (Array.isArray(navigator.languages) ? navigator.languages[0] : navigator.language) || navigator.userLanguage;
    }, O = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w();
        return "es" === e || e.startsWith("es-") ? "es" : "fr" === e || e.startsWith("fr-") ? "fr" : "en";
    }, x = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w();
        return e ? "en-GB" === e ? b.enGB : "en-US" === e ? b.enUS : "es" === e || e.startsWith("es-") ? b.es : "fr" === e || e.startsWith("fr-") ? b.fr : b.enUS : b.enUS;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(4);
    function o(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var i = t[o](a), u = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(u).then(function(e) {
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
    n.d(t, "b", function() {
        return r.e;
    }), n.d(t, "a", function() {
        return r.c;
    });
    var a;
    a = o(function*() {
        return (yield Object(r.e)()).daysleft >= 0;
    });
}, , function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return l;
    });
    var r = n(17), o = n(4), a = n(47), i = function() {
        function e(e, t) {
            var n = [], r = !0, o = !1, a = void 0;
            try {
                for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), 
                !t || n.length !== t); r = !0) ;
            } catch (e) {
                o = !0, a = e;
            } finally {
                try {
                    !r && u.return && u.return();
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
    function u(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var i = t[o](a), u = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(u).then(function(e) {
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
    var s, c = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "enUS";
        switch (e) {
          case "en-GB":
            return "enGB";

          case "en-US":
            return "enUS";

          default:
            return e;
        }
    }, l = (s = u(function*() {
        try {
            yield Object(o.b)();
        } catch (e) {}
        var e = yield Promise.all([ Object(o.f)(), Object(a.b)() ]), t = i(e, 2), n = t[0], u = t[1], s = n.options || {}, l = s.fontSize, d = void 0 === l ? "regular" : l, p = s.locale, f = void 0 === p ? "enUS" : p, h = s.showTips, m = void 0 === h || h, g = s.prediction, v = (g = void 0 === g ? {} : g).math, y = void 0 === v || v, b = g.chemistry, w = g.formulas, O = n.profile_info, x = O.email, q = O.type, E = void 0 === q ? "student" : q;
        r.Actions.Options.loadSettings({
            fontSize: d,
            showTips: m,
            math: y,
            chemistry: b,
            formulas: w,
            locale: c(f)
        }, {
            type: E,
            license: u,
            displayName: x,
            provider: "google"
        });
    }), function() {
        return s.apply(this, arguments);
    });
    t.a = function(e) {
        return function(t) {
            return function(n) {
                var o = e.getState();
                switch (n.type) {
                  case r.Events.PopupMenu.Shown:
                    var a = o.drawer.mode;
                    a && r.Actions.Toolbar.setMode(a);
                    break;

                  case r.Events.PopupMenu.ShowOptionsDialog:
                    r.Actions.Academy.setHidden(), r.Actions.PopupMenu.show(!1), u(function*() {
                        yield l(), document.querySelector(".equatio-options-dialog-overlay").classList.remove("equatio-options-dialog-overlay--hidden");
                    })();
                }
                return t(n);
            };
        };
    };
}, , , , , , , , , , , function(e, t, n) {
    "use strict";
    t.a = Object.freeze({
        Teacher: {
            FirstTimeExpiry: "teacher_first_time_expiry",
            HandwritingExceeded: "teacher_handwriting_exceeded",
            FormsPeriodicReminder: "teacher_periodic_forms",
            PredictionPeriodicReminder: "teacher_periodic_prediction",
            GeneralPeriodicReminder: "teacher_periodic_general",
            Expiring: "teacher_expiring",
            Review: "review"
        },
        Student: {
            Expired: "student_expired",
            HandwritingExceeded: "student_handwriting_exceeded",
            UpgradeReminder: "student_upgrade_reminder"
        }
    });
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(15);
        t.a = function() {
            return e("a", {
                href: "http://www.texthelp.com/freeforteachers",
                target: "_blank",
                rel: "noopener noreferrer"
            }, e(r.a, {
                id: "upgrade-overlay-iconset-free-for-teachers-click-here",
                defaultMessage: "click here"
            }));
        };
    }).call(this, n(3).h);
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    var r, o = n(207);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]);
    var a = {
        hmr: !0
    };
    a.transform = r, a.insertInto = void 0;
    n(19)(o, a);
    o.locals && (e.exports = o.locals);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(3), o = n(15), a = n(33), i = n(46), u = n(210), s = n(27), c = function() {
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
        function l(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function d(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function p(e, t) {
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
        var f = function(t) {
            function n(e) {
                l(this, n);
                var t = d(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                return t.setLocaleFromState(), Object(a.a)(function(e) {
                    "OPTIONS_LOAD_SETTINGS" === e.type && t.setLocaleFromState();
                }), t;
            }
            return p(n, r["Component"]), c(n, [ {
                key: "setLocaleFromState",
                value: function() {
                    var e = s.a.getState().mathOptions.locale;
                    this.setState(function() {
                        return {
                            locale: e
                        };
                    });
                }
            }, {
                key: "render",
                value: function() {
                    var t = this.state.locale;
                    return e(o.b, {
                        locale: Object(i.b)(t),
                        messages: Object(i.a)(t)
                    }, e(u.a, {
                        key: t
                    }));
                }
            } ]), n;
        }();
        t.a = f;
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(17), o = (n(211), Object(r.createOptionsDialog)({}));
        t.a = e("div", {
            className: "equatio-options-dialog-overlay equatio-options-dialog-overlay--hidden"
        }, e("div", {
            className: "equatio-options-dialog"
        }, o));
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(3), o = n(5), a = n.n(o), i = n(15), u = n(46), s = n(213), c = n(60), l = function() {
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
        function d(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function p(e, t) {
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
        var h = function(t) {
            function n() {
                d(this, n);
                var e = p(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                return window.addEventListener("message", function(t) {
                    if (t && t.data && "EQUATIO_UPGRADE_OVERLAY_SHOW" === t.data.action) {
                        var n = t.data, r = n.notificationType, o = n.isTeacher;
                        e.showNotification(r, o);
                    }
                }), e;
            }
            return f(n, r["Component"]), l(n, [ {
                key: "showNotification",
                value: function(e, t) {
                    this.setState({
                        isShown: !0,
                        notificationType: e,
                        isTeacher: t
                    });
                }
            }, {
                key: "hideNotification",
                value: function() {
                    this.setState({
                        isShown: !1
                    });
                }
            }, {
                key: "openFreeForTeachers",
                value: function() {
                    window.open("https://www.texthelp.com/freeforteachers"), this.hideNotification();
                }
            }, {
                key: "render",
                value: function() {
                    var t = this, n = this.state, r = n.notificationType, o = n.isTeacher, l = n.isShown;
                    return e(i.b, {
                        locale: Object(u.b)(),
                        messages: Object(u.a)()
                    }, e("div", {
                        className: a()("equatio-upgrade-overlay equatio-upgrade-overlay--with-shadow", {
                            "equatio-upgrade-overlay--shown": l
                        })
                    }, e("div", {
                        className: "equatio-upgrade-overlay-wrapper"
                    }, e("div", {
                        className: "equatio-upgrade-overlay-section equatio-upgrade-overlay-section--left"
                    }, e("svg", {
                        viewBox: "0 0 162.466 54.266",
                        className: "equatio-upgrade-overlay-logo"
                    }, e("use", {
                        xlinkHref: "#equatio-svg-logo-upgrade-overlay"
                    })), e("p", {
                        className: "equatio-upgrade-overlay-section-message"
                    }, e(i.a, {
                        id: "upgrade-overlay-used-by-teachers",
                        defaultMessage: "Used by teachers{lineBreak}and students worldwide",
                        values: {
                            lineBreak: e("br", null)
                        }
                    }))), e("div", {
                        className: "equatio-upgrade-overlay-section equatio-upgrade-overlay-section--right"
                    }, Object(s.a)(r, function() {
                        return t.hideNotification();
                    }), r === c.a.Teacher.Review ? null : o ? e("ul", {
                        className: "equatio-buttonset equatio-upgrade-buttonset"
                    }, e("li", {
                        className: "equatio-buttonset__item"
                    }, e("button", {
                        className: "equatio-button equatio-button--gold equatio-button--small",
                        onClick: function() {
                            return t.openFreeForTeachers();
                        },
                        style: {
                            color: "#FFF",
                            textDecoration: "none"
                        }
                    }, e(i.a, {
                        id: "upgrade-overlay-fft-sign-up",
                        defaultMessage: "Sign up for Free for Teachers"
                    }))), e("li", {
                        className: "equatio-buttonset__item"
                    }, e("button", {
                        className: "equatio-upgrade-linkbutton",
                        onClick: function() {
                            return t.hideNotification();
                        }
                    }, e(i.a, {
                        id: "upgrade-overlay-fft-dismiss",
                        defaultMessage: "Not today, thanks"
                    })))) : e("ul", {
                        className: "equatio-buttonset equatio-upgrade-buttonset"
                    }, e("li", {
                        className: "equatio-buttonset__item"
                    }, e("a", {
                        className: "equatio-button equatio-button--gold equatio-button--small",
                        href: "https://www.texthelp.com/products/equatio",
                        target: "_blank",
                        style: {
                            color: "#FFF",
                            textDecoration: "none"
                        }
                    }, e(i.a, {
                        id: "upgrade-overlay-student-learn-more",
                        defaultMessage: "Learn More"
                    }))), e("li", {
                        className: "equatio-buttonset__item"
                    }, e("button", {
                        className: "equatio-upgrade-linkbutton",
                        onClick: function() {
                            return t.hideNotification();
                        }
                    }, e(i.a, {
                        id: "upgrade-overlay-student-dismiss",
                        defaultMessage: "I'm all set. Take me back to EquatIO."
                    })))))), e("div", {
                        className: "equatio-upgrade-privacy-policy"
                    }, e("a", {
                        href: "https://docs.google.com/document/d/1RgqJbbXBLllpUIRjivko1q73juzPbNrDHtqDcpH_8KY/pub",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, e(i.a, {
                        id: "upgrade-overlay-privacy-policy",
                        defaultMessage: "Privacy Policy"
                    })))));
                }
            } ]), n;
        }();
        t.a = h;
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(3), o = n(224), a = n.n(o), i = n(15), u = n(17), s = n(225), c = n(246), l = n(33), d = n(102), p = n(46), f = n(27), h = function() {
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
        function m(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function g(e, t) {
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
            ScreenshotReader: "screenshot_reader"
        }), b = function(t) {
            function o() {
                m(this, o);
                var e = g(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));
                return e.setMode = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    e.setState(function(e) {
                        return {
                            mode: e.mode === t ? null : t
                        };
                    });
                }, e.setLocale = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en";
                    e.setState(function() {
                        return {
                            locale: t
                        };
                    });
                }, e.cancelScreenshotReader = function() {
                    u.Actions.Toolbar.setMode(), e.setMode();
                }, e.middlewareListener = function(t) {
                    var n = t.type;
                    if ("OPTIONS_LOAD_SETTINGS" === n) {
                        var r = f.a.getState().mathOptions.locale;
                        e.setLocale(r);
                    } else if (n === u.Events.Toolbar.SetMode) switch (t.mode) {
                      case "screenshot_reader":
                        return void e.setMode(y.ScreenshotReader);

                      default:
                        e.setMode();
                    }
                }, Object(l.a)(e.middlewareListener), n.e(6).then(n.t.bind(null, 247, 7)), n.e(7).then(n.t.bind(null, 249, 7)), 
                n.e(8).then(n.t.bind(null, 251, 7)), e;
            }
            return v(o, r["Component"]), h(o, [ {
                key: "componentWillUnmount",
                value: function() {
                    Object(l.c)(this.middlewareListener);
                }
            }, {
                key: "render",
                value: function() {
                    var t = this.state, n = t.mode, r = t.locale;
                    return e(a.a, {
                        nodeName: "div"
                    }, e("div", {
                        id: "equatio-inpage-shadow",
                        style: {
                            "pointer-events": "all"
                        }
                    }, e(i.b, {
                        locale: Object(p.b)(r),
                        messages: Object(p.a)(r)
                    }, e("div", {
                        id: "equatio-inpage-container"
                    }, e(c.a, null), n === y.ScreenshotReader && e(s.a, {
                        contextMenuMode: d.a.FullToolbar,
                        setMode: this.cancelScreenshotReader
                    })))));
                }
            } ]), o;
        }();
        t.a = b;
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        t.a = function(t) {
            var n = t.x, r = t.y, o = t.width, a = t.height, i = t.shown, u = t.children;
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
            }, u);
        };
    }).call(this, n(3).h);
}, , function(e, t, n) {
    "use strict";
    t.a = Object.freeze({
        FullToolbar: "full_toolbar",
        WebToolbar: "web_toolbar"
    });
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(15), o = n(104), a = Object(r.d)({
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
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(239), o = n.n(r);
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
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(15), o = n(104), a = Object(r.d)({
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
    }).call(this, n(3).h);
}, , function(e, t, n) {
    "use strict";
    var r = n(0), o = n(45), a = function(e) {
        return Object(o.a)(r.a.SendAnalyticsEvent, {
            category: e
        });
    }, i = function() {
        function e(e, t) {
            var n = [], r = !0, o = !1, a = void 0;
            try {
                for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), 
                !t || n.length !== t); r = !0) ;
            } catch (e) {
                o = !0, a = e;
            } finally {
                try {
                    !r && u.return && u.return();
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
    function u(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var i = t[o](a), u = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(u).then(function(e) {
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
    var s = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "enUS";
        switch (e) {
          case "en-GB":
            return "enGB";

          case "en-US":
            return "enUS";

          default:
            return e;
        }
    }, c = void 0;
    t.a = u(function*() {
        if (c) return c;
        a("Web Toolbar Loaded"), yield Object(o.a)(r.a.EnsureLoggedIntoFirebase);
        var e = yield Promise.all([ Object(o.a)(r.a.GetProfile), Object(o.a)(r.a.GetLicense) ]), t = i(e, 2), n = t[0], u = t[1];
        return c = {
            locale: s(n.options.locale || "enUS"),
            license: u
        };
    });
}, , , , function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(17), o = n(4), a = n(2), i = n(1);
        function u(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a), u = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(u).then(function(e) {
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
        var s, c = {
            InsertImage: "EQUATIO_COMPANION_INSERT_IMAGE",
            InsertMath: "EQUATIO_COMPANION_INSERT_MATH"
        }, l = (s = u(function*(t, n) {
            if (Object(i.a)()) return Object(o.t)(null, t, n);
            var r = new Blob([ e.from(t.substr(22), "base64") ]);
            return Object(o.t)(URL.createObjectURL(r, {
                oneTimeOnly: !0
            }), null, n);
        }), function(e, t) {
            return s.apply(this, arguments);
        }), d = function(e, t) {
            return l(e, t);
        };
        t.a = function(e) {
            var t = e.math, n = e.image;
            window.addEventListener("message", function(e) {
                if (e.data) switch (e.data.action) {
                  case c.InsertMath:
                    u(function*() {
                        var n = e.data.latex, o = yield r.MathRendering.getSvg(n), a = o.width, i = o.height, u = yield r.MathRendering.getSpokenText(n);
                        t(n, a, i, u);
                    })();
                    break;

                  case c.InsertImage:
                    u(function*() {
                        var t = Object(a.d)(), r = yield d(e.data.image, t);
                        yield n(r);
                    })();
                }
            });
        };
    }).call(this, n(63).Buffer);
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(3), o = n(15), a = n(27), i = n(46), u = n(206), s = n(33), c = (n(95), 
        function() {
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
        function l(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function d(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function p(e, t) {
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
        var f = function(t) {
            function n(e) {
                l(this, n);
                var t = d(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
                return t.loadLocaleFromProfile(), Object(s.a)(function(e) {
                    "OPTIONS_LOAD_SETTINGS" === e.type && t.loadLocaleFromProfile();
                }), t;
            }
            return p(n, r["Component"]), c(n, [ {
                key: "loadLocaleFromProfile",
                value: function() {
                    var e = a.a.getState().mathOptions;
                    this.setState(function() {
                        return {
                            locale: e.locale
                        };
                    });
                }
            }, {
                key: "render",
                value: function() {
                    var t = this.state.locale;
                    return e(o.b, {
                        locale: Object(i.b)(t),
                        messages: Object(i.a)(t)
                    }, e(u.a, null));
                }
            } ]), n;
        }();
        t.a = f;
    }).call(this, n(3).h);
}, function(e, t) {}, , , , , , , , function(e, t) {}, , , , , , , function(e, t) {}, , , , , , , , , , function(e) {
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
    (function(e) {
        var r = n(3), o = n(15), a = n(17), i = n(5), u = n.n(i), s = n(4), c = n(33), l = n(27), d = (n(95), 
        function() {
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
        function p(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a), u = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(u).then(function(e) {
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
        var g = Object(o.d)({
            title: {
                id: "screenshot-reader-button.title",
                defaultMessage: "Screenshot Reader"
            },
            title_premium: {
                id: "screenshot-reader-button.title_premium",
                defaultMessage: "Screenshot Reader (Premium Feature)"
            }
        }), v = function(t) {
            function n() {
                f(this, n);
                var e = h(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                return e.onButtonClicked = function() {
                    a.Actions.Toolbar.setMode("screenshot_reader");
                }, Object(c.a)(function(t) {
                    if (t.type === a.Events.Toolbar.SetMode) {
                        var n = "screenshot_reader" === l.a.getState().drawer.mode;
                        n && Object(s.k)("Google Apps - Screenshot Reader"), e.setState({
                            isSelected: n
                        });
                    }
                }), p(function*() {
                    var t = yield Object(s.e)(), n = !1;
                    t && (n = t.daysleft > 0 || t.features["Screenshot Reader"]), e.setState({
                        isPremium: n
                    });
                })(), e;
            }
            return m(n, r["Component"]), d(n, [ {
                key: "render",
                value: function() {
                    var t = this.state, n = t.isPremium, r = void 0 !== n && n, o = t.isSelected, a = void 0 !== o && o, i = this.props.intl.formatMessage(r ? g.title : g.title_premium);
                    return e("button", {
                        "aria-label": i,
                        id: "screenshot_reader",
                        className: u()("equatio-toolbar-button", "equatio-toolbar-screenshot-button", {
                            "equatio-toolbar-button--selected": a
                        }),
                        "data-balloon": i,
                        onClick: this.onButtonClicked,
                        disabled: !r
                    }, !r && e("svg", {
                        viewBox: "0 0 200.6 199.5",
                        className: "equatio-premium-icon"
                    }, e("use", {
                        xlinkHref: "#equatio-svg-premium-icon"
                    })), e("svg", {
                        viewBox: "0 0 51.6 49.8",
                        className: "equatio-toolbar-button__icon"
                    }, e("use", {
                        xlinkHref: "#equatio-svg-tool-screenshot"
                    })));
                }
            } ]), n;
        }();
        t.a = Object(o.e)(v);
    }).call(this, n(3).h);
}, function(e, t, n) {
    (e.exports = n(18)(void 0)).push([ e.i, ".equatio-toolbar-screenshot-button {\n    position: relative;\n}\n\n.equatio-toolbar-screenshot-button .equatio-premium-icon {\n    position: absolute;\n    top: -10px;\n    right: -10px;\n    transform: scale(0.8);\n}\n.equatio-toolbar-screenshot-button:focus .equatio-premium-icon {\n    outline: 0;\n}\n\n.equatio-toolbar-screenshot-button.equatio-toolbar-button--selected .equatio-premium-icon {\n    top: -12px;\n    right: -12px;\n}\n\n.equatio-toolbar-screenshot-button[disabled] {\n    opacity: 1 !important;\n}\n\n.equatio-toolbar-screenshot-button[disabled] .equatio-toolbar-button__icon {\n    opacity: 0.5;\n}", "" ]);
}, , , function(e, t, n) {
    "use strict";
    var r = n(15), o = n(3), a = n(17), i = function() {
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
    function s(e, t) {
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
    var l = Object(r.d)({
        try_mathspace: {
            id: "popup-menu.try-mathspace",
            defaultMessage: "Try EquatIO Mathspace"
        },
        close: {
            id: "popup-menu.close",
            defaultMessage: "Close EquatIO"
        }
    }), d = function(e) {
        function t(e) {
            u(this, t);
            var n = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.createMenu(e), n;
        }
        return c(t, o["Component"]), i(t, [ {
            key: "componentDidUpdate",
            value: function(e) {
                this.createMenu(e);
            }
        }, {
            key: "createMenu",
            value: function(e) {
                var t = e.intl;
                this.menu = Object(a.createPopupMenu)({
                    additionalMenuOptions: [ {
                        text: t.formatMessage(l.try_mathspace),
                        onClick: function() {
                            a.Actions.PopupMenu.show(!1), window.open("https://equat.io");
                        }
                    }, {
                        text: t.formatMessage(l.close),
                        onClick: function() {
                            document.querySelector(".equatio-toolbar-wrapper").style.display = "none", a.Actions.PopupMenu.show(!1);
                        }
                    } ]
                });
            }
        }, {
            key: "render",
            value: function() {
                return this.menu;
            }
        } ]), t;
    }();
    t.a = Object(r.e)(d);
}, function(e, t, n) {
    var r, o = n(212);
    "string" == typeof o && (o = [ [ e.i, o, "" ] ]);
    var a = {
        hmr: !0
    };
    a.transform = r, a.insertInto = void 0;
    n(19)(o, a);
    o.locals && (e.exports = o.locals);
}, function(e, t, n) {
    (e.exports = n(18)(void 0)).push([ e.i, ".equatio-options-dialog-overlay {\n    position: fixed;\n    z-index: 10000;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(255, 255, 255, 0.8);\n    pointer-events: all;\n}\n\n.equatio-options-dialog-overlay--hidden {\n    display: none;\n}\n\n.equatio-options-dialog-overlay .equatio-options-dialog {\n    width: 640px;\n    height: 480px;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    margin-left: -320px;\n    margin-top: -240px;\n}", "" ]);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(60), o = n(214), a = n(215), i = n(216), u = n(217), s = n(218), c = n(219), l = n(220), d = n(221), p = n(222), f = n(223), h = new Map();
        h.set(r.a.Teacher.FirstTimeExpiry, o.a), h.set(r.a.Teacher.HandwritingExceeded, a.a), 
        h.set(r.a.Teacher.FormsPeriodicReminder, i.a), h.set(r.a.Teacher.PredictionPeriodicReminder, u.a), 
        h.set(r.a.Teacher.GeneralPeriodicReminder, s.a), h.set(r.a.Teacher.Expiring, c.a), 
        h.set(r.a.Teacher.Review, f.a), h.set(r.a.Student.Expired, l.a), h.set(r.a.Student.HandwritingExceeded, d.a), 
        h.set(r.a.Student.UpgradeReminder, p.a), t.a = function(t, n) {
            var r = h.get(t);
            return r ? e(r, {
                hideNotification: n
            }) : null;
        };
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(15), o = n(43), a = n(44), i = n(32);
        t.a = function() {
            return e("div", {
                id: "EquatioUpgradeMessageFirstTimeExpiry"
            }, e("p", {
                className: "equatio-upgrade-teacher-message"
            }, e("strong", null, e(r.a, {
                id: "upgrade-overlay-teacher-first-time-expiry.line1",
                defaultMessage: "It looks like your 30-day access to EquatIO's premium features has expired."
            })), " ", e(r.a, {
                id: "upgrade-overlay-teacher-first-time-expiry.line2",
                defaultMessage: "But no need to worry. As a teacher, you can get all those features free forever through our Free for Teacher program. Sign up today to keep using all of EquatIO's features!"
            })), e("ul", {
                className: "equatio-upgrade-iconset"
            }, e(o.a, null), e(a.a, null), e(i.a, null)));
        };
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(15);
        t.a = function() {
            return e("div", null, e("p", {
                className: "equatio-upgrade-teacher-message"
            }, e("strong", null, e(r.a, {
                id: "upgrade-overlay-teacher-handwriting-exceeded.whoops",
                defaultMessage: "Whoops!"
            })), " ", e(r.a, {
                id: "upgrade-overlay-teacher-handwriting-exceeded.text",
                defaultMessage: "You've already used your two free handwriting inputs for the day. But did you know that through our Free for Teacher program you can get unlimited handwriting - along with all of the other premium features - FREE forever? Sign up today!"
            })));
        };
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(15), o = n(43), a = n(32);
        t.a = function() {
            return e("div", null, e("p", {
                className: "equatio-upgrade-teacher-message"
            }, e("strong", null, e(r.a, {
                id: "upgrade-overlay-teacher-forms-periodic-reminder.title",
                defaultMessage: "Eureka!"
            })), " ", e(r.a, {
                id: "upgrade-overlay-teacher-forms-periodic-reminder.text",
                defaultMessage: "If you sign up for EquatIO Free for Teachers, you can transform your assessment process through built-in integration with Google Forms - for no additional cost! Sign up today to access all of EquatIO's premium features for free."
            })), e("ul", {
                className: "equatio-upgrade-iconset"
            }, e("li", {
                className: "equatio-upgrade-iconset__item"
            }, e("svg", {
                viewBox: "0 0 47.758 47.761",
                className: "equatio-upgrade-iconset-image",
                style: {
                    minWidth: "50px",
                    minHeight: "50px"
                }
            }, e("use", {
                xlinkHref: "#equatio-svg-upgrade-draw-shapes"
            })), e("p", {
                className: "equatio-upgrade-iconset-message"
            }, e(r.a, {
                id: "upgrade-overlay-teacher-forms-periodic-reminder.integration-with-apps",
                defaultMessage: "Integration with Google Slides, Sheets & Drawings"
            }))), e(o.a, null), e(a.a, null)));
        };
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(15), o = n(44), a = n(32);
        t.a = function() {
            return e("div", null, e("p", {
                className: "equatio-upgrade-teacher-message"
            }, e("strong", null, e(r.a, {
                id: "upgrade-overlay-teacher-prediction-periodic-reminder.title",
                defaultMessage: "Just think of the time you would save if you could generate equations faster."
            })), " ", e(r.a, {
                id: "upgrade-overlay-teacher-prediction-periodic-reminder.text",
                defaultMessage: "Lucky for you, EquatIO's advanced math and chemistry prediction engine does just that! Sign up for Free for Teachers today to access this radical feature - and all of EquatIO's premium features - for FREE!"
            })), e("ul", {
                className: "equatio-upgrade-iconset"
            }, e(o.a, null), e(a.a, null)));
        };
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(15), o = n(43), a = n(44), i = n(32);
        t.a = function() {
            return e("div", null, e("p", {
                className: "equatio-upgrade-teacher-message"
            }, e("strong", null, e(r.a, {
                id: "upgrade-overlay-teacher-general-periodic-reminder.line1",
                defaultMessage: "Sign up for EquatIO Free for Teachers today to take your digital math to the next level!"
            })), " ", e(r.a, {
                id: "upgrade-overlay-teacher-general-periodic-reminder.line2",
                defaultMessage: "By signing up, you'll receive FREE access to..."
            })), e("ul", {
                className: "equatio-upgrade-iconset"
            }, e(o.a, null), e(a.a, null), e(i.a, null)));
        };
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(15), o = n(43), a = n(44), i = n(32);
        t.a = function() {
            return e("div", null, e("p", {
                className: "equatio-upgrade-teacher-message"
            }, e("strong", null, e(r.a, {
                id: "upgrade-overlay-teacher-expiring.title",
                defaultMessage: "Your premium subscription to EquatIO expires in less than 5 days."
            })), " ", e(r.a, {
                id: "upgrade-overlay-teacher-expiring.text",
                defaultMessage: "But why renew when you can sign up for Free for Teachers? As a teacher, you'll get all the features you've come to know and love with your premium subscription of EquatIO for FREE!"
            })), e("ul", {
                className: "equatio-upgrade-iconset"
            }, e(o.a, null), e(a.a, null), e(i.a, null)));
        };
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(15), o = n(61);
        t.a = function() {
            return e("div", null, e("p", {
                className: "equatio-upgrade-student-message"
            }, e(r.a, {
                id: "upgrade-overlay-student-expired.text",
                defaultMessage: "It looks like your 30-day access to EquatIO's premium features has expired. Talk with your teacher to learn how you can keep using all of EquatIO's awesome features, including handwriting and math prediction. If you are a teacher, {upgradeLink} to learn about our Free for Teachers program.",
                values: {
                    upgradeLink: e(o.a, null)
                }
            })));
        };
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(15), o = n(61);
        t.a = function() {
            return e("div", null, e("p", {
                className: "equatio-upgrade-student-message"
            }, e(r.a, {
                id: "upgrade-overlay-student-handwriting-exceeded.text",
                defaultMessage: "Whoops! You've already used your two handwriting inputs for the day. Talk with your teacher to learn more about your handwriting options. If you are a teacher, {upgradeLink} to learn about our Free for Teachers program.",
                values: {
                    upgradeLink: e(o.a, null)
                }
            })));
        };
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(15), o = n(61);
        t.a = function() {
            return e("div", null, e("p", {
                className: "equatio-upgrade-student-message"
            }, e(r.a, {
                id: "upgrade-overlay-student-upgrade-reminder.text",
                defaultMessage: "Talk with your teacher to learn more about EquatIO's premium features. If you are a teacher, {upgradeLink} to learn about our Free for Teachers program.",
                values: {
                    upgradeLink: e(o.a, null)
                }
            })));
        };
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(15), o = n(4);
        t.a = function(t) {
            var n = t.hideNotification;
            return e("div", null, e("p", {
                className: "equatio-upgrade-teacher-message"
            }, e("strong", null, e(r.a, {
                id: "upgrade-overlay-teacher-review.title",
                defaultMessage: "Feeling like a star \u2b50\ufe0f?"
            })), " ", e(r.a, {
                id: "upgrade-overlay-teacher-review.text",
                defaultMessage: "Share your star-power by giving EquatIO a 5-star rating!"
            })), e("ul", {
                className: "equatio-buttonset equatio-upgrade-buttonset"
            }, e("li", {
                className: "equatio-buttonset__item"
            }, e("a", {
                className: "equatio-button equatio-button--gold equatio-button--small",
                onClick: function() {
                    n(), Object(o.a)();
                },
                href: "https://chrome.google.com/webstore/detail/equatio-math-made-digital/hjngolefdpdnooamgdldlkjgmdcmcjnc/reviews",
                style: {
                    color: "#FFF",
                    textDecoration: "none",
                    fontWeight: 600
                },
                target: "_blank",
                rel: "noopener noreferrer"
            }, e(r.a, {
                id: "upgrade-overlay-teacher-review-action",
                defaultMessage: "Rate EquatIO!"
            }))), e("li", {
                className: "equatio-buttonset__item"
            }, e("button", {
                className: "equatio-upgrade-linkbutton",
                onClick: function() {
                    return n();
                },
                style: {
                    fontWeight: 600
                }
            }, e(r.a, {
                id: "upgrade-overlay-teacher-review-no-thanks",
                defaultMessage: "Remind me later."
            }))), e("li", {
                className: "equatio-buttonset__item"
            }, e("button", {
                className: "equatio-upgrade-linkbutton",
                onClick: function() {
                    n(), Object(o.a)();
                }
            }, e(r.a, {
                id: "upgrade-overlay-teacher-review-dismiss",
                defaultMessage: "No, thanks."
            })))));
        };
    }).call(this, n(3).h);
}, , function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(3), o = n(226), a = n(227), i = n(232), u = function() {
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
        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function c(e, t) {
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
        var d = Object.freeze({
            MouseCapture: 0,
            OCR: 1,
            MathJax: 2
        }), p = function(t) {
            function p() {
                s(this, p);
                var e = c(this, (p.__proto__ || Object.getPrototypeOf(p)).call(this));
                return e.setCaptured = function(t) {
                    e.setState(function() {
                        return {
                            status: d.OCR,
                            cropArea: t
                        };
                    });
                }, e.setOcrResult = function(t) {
                    e.setState(function() {
                        return {
                            status: d.MathJax,
                            latex: t
                        };
                    });
                }, e.cancel = function() {
                    (0, e.props.setMode)(), e.setState(function() {
                        return {
                            status: d.MouseCapture,
                            cropArea: void 0
                        };
                    });
                }, n.e(15).then(n.t.bind(null, 253, 7)), n.e(9).then(n.t.bind(null, 255, 7)), e.state = {
                    status: d.MouseCapture
                }, e;
            }
            return l(p, r["Component"]), u(p, [ {
                key: "render",
                value: function() {
                    var t = this, n = this.state, r = n.status, u = n.cropArea, s = n.latex, c = this.props.contextMenuMode;
                    return e("div", {
                        className: "equatio-screenshot-reader-wrapper",
                        style: {
                            "pointer-events": "all"
                        }
                    }, function() {
                        switch (r) {
                          case d.OCR:
                            var n = window.devicePixelRatio, l = {
                                x: u.x * n,
                                y: u.y * n,
                                width: u.width * n,
                                height: u.height * n
                            };
                            return e(a.a, {
                                cropArea: l,
                                onOcrResult: t.setOcrResult
                            });

                          case d.MathJax:
                            return e(i.a, {
                                key: "mathjax",
                                contextMenuMode: c,
                                cropArea: u,
                                latex: s,
                                onClose: t.cancel
                            });

                          default:
                            return e(o.a, {
                                onCapture: t.setCaptured,
                                onCancel: t.cancel
                            });
                        }
                    }());
                }
            } ]), p;
        }();
        t.a = p;
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(3), o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, a = function() {
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
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function u(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function s(e, t) {
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
        var l = {
            isCapturing: !1,
            containerStyles: {
                wrapper: {
                    display: "block",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }
            }
        }, d = function(t) {
            function d() {
                u(this, d);
                var e = s(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this));
                return e.cancelCapture = function() {
                    var t = e.props.onCancel;
                    "function" == typeof t && t();
                }, e.finishCapture = function(t) {
                    window.removeEventListener("scroll", e.scrollListener);
                    var n = e.props.onCapture;
                    "function" == typeof n && n(t);
                }, e.startCapture = function(t) {
                    var n = window, r = n.scrollX, a = n.scrollY;
                    e.scrollListener = function() {
                        return window.scrollTo(r, a);
                    }, window.addEventListener("scroll", e.scrollListener), e.setState(function() {
                        return o({}, l, {
                            initialX: t.clientX,
                            initialY: t.clientY,
                            isCapturing: !0
                        });
                    });
                }, e.keyUpListener = function(t) {
                    27 === t.which && (e.cancelCapture(), t.preventDefault());
                }, e.state = o({}, l), n.e(10).then(n.t.bind(null, 257, 7)), n.e(11).then(n.t.bind(null, 259, 7)), 
                e;
            }
            return c(d, r["Component"]), a(d, [ {
                key: "componentDidMount",
                value: function() {
                    this.captureContainer.addEventListener("mousedown", this.startCapture, !0), window.addEventListener("keyup", this.keyUpListener, !0);
                    var e = document.querySelector(".equatio-toolbar"), t = 0;
                    e && (t = this.captureContainer.clientHeight - e.getBoundingClientRect().y);
                    this.setState({
                        containerStyles: o({}, this.state.containerStyles, {
                            wrapper: o({}, this.state.containerStyles.wrapper, {
                                bottom: t + "px"
                            })
                        })
                    });
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.captureContainer.removeEventListener("mousedown", this.startCapture, !0), window.removeEventListener("keyup", this.keyUpListener, !0), 
                    window.removeEventListener("scroll", this.scrollListener);
                }
            }, {
                key: "updateCorners",
                value: function(e, t, n, r) {
                    var a = this, i = this.captureContainer, u = i.clientWidth, s = i.clientHeight, c = n >= 0 ? e + n : e, l = r >= 0 ? t : t + r, d = n >= 0 ? u - e - n : u - e, p = r >= 0 ? t + r : t, f = n >= 0 ? u - e : u - e - n, h = s - p, m = u - f, g = s - l;
                    this.setState(function() {
                        return {
                            containerStyles: o({}, a.state.containerStyles, {
                                top: {
                                    width: c,
                                    height: l
                                },
                                right: {
                                    width: d,
                                    height: p
                                },
                                bottom: {
                                    width: f,
                                    height: h
                                },
                                left: {
                                    width: m,
                                    height: g
                                }
                            })
                        };
                    });
                }
            }, {
                key: "updateCenter",
                value: function(e, t, n, r) {
                    var a = this, i = n >= 0 ? e : e + n, u = r >= 0 ? t : t + r;
                    this.setState(function() {
                        return {
                            containerStyles: o({}, a.state.containerStyles, {
                                center: {
                                    width: Math.abs(n) + "px",
                                    height: Math.abs(r) + "px",
                                    top: u + "px",
                                    left: i + "px",
                                    backgroundColor: "rgba(0,0,0,0)"
                                }
                            })
                        };
                    });
                }
            }, {
                key: "mouseMoveHandler",
                value: function(e) {
                    var t = this.state, n = t.initialX, r = t.initialY, o = e.clientX - n, a = e.clientY - r;
                    this.updateCorners(n, r, o, a), this.updateCenter(n, r, o, a);
                }
            }, {
                key: "cleanCornersColor",
                value: function() {
                    var e = this, t = [ "top", "right", "bottom", "left" ].reduce(function(t, n) {
                        return o({}, t, i({}, n, o({}, e.state.containerStyles[n], {
                            backgroundColor: "rgba(0,0,0,0)"
                        })));
                    }, {});
                    this.setState(function() {
                        return {
                            containerStyles: o({}, e.state.containerStyles, t)
                        };
                    });
                }
            }, {
                key: "mouseUpHandler",
                value: function(e) {
                    var t = this.state, n = t.initialX, r = t.initialY, o = window, a = o.scrollX, i = o.scrollY, u = Math.abs(e.clientX - n), s = Math.abs(e.clientY - r);
                    e.stopPropagation(), e.preventDefault(), this.cleanCornersColor(), u > 10 || s > 10 ? this.finishCapture({
                        x: Math.min(n, e.clientX),
                        y: Math.min(r, e.clientY),
                        width: u,
                        height: s,
                        scrollX: a,
                        scrollY: i
                    }) : this.cancelCapture();
                }
            }, {
                key: "render",
                value: function() {
                    var t = this, n = this.state, r = n.isCapturing, o = n.containerStyles;
                    return e("div", {
                        className: "equatio-screenshot-reader-mouse-capture",
                        onMouseMove: r ? function(e) {
                            return t.mouseMoveHandler(e);
                        } : null,
                        onMouseUp: r ? function(e) {
                            return t.mouseUpHandler(e);
                        } : null,
                        style: Object.assign({}, o.wrapper, r ? {
                            backgroundColor: "rgba(0,0,0,0)"
                        } : null),
                        ref: function(e) {
                            t.captureContainer = e;
                        }
                    }, e("div", {
                        className: "equatio-screenshot-reader-mouse-capture-top",
                        style: o.top
                    }), e("div", {
                        className: "equatio-screenshot-reader-mouse-capture-right",
                        style: o.right
                    }), e("div", {
                        className: "equatio-screenshot-reader-mouse-capture-bottom",
                        style: o.bottom
                    }), e("div", {
                        className: "equatio-screenshot-reader-mouse-capture-left",
                        style: o.left
                    }), e("div", {
                        className: "equatio-screenshot-reader-mouse-capture-center",
                        style: o.center
                    }));
                }
            } ]), d;
        }();
        t.a = d;
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(3), o = n(0), a = n(45), i = n(100), u = n(231), s = n(1), c = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, l = function() {
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
                            var i = t[o](a), u = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(u).then(function(e) {
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
        function p(e, t) {
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
                return p(this, n), f(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
            }
            return h(n, r["Component"]), l(n, [ {
                key: "componentDidMount",
                value: function() {
                    var e = this, t = document.querySelector("#equatio-inpage-container") || this.loadingArea.closest("#equatio-inpage-container") || document.querySelector("#equatio-discover-shadow") || this.loadingArea.closest("#equatio-discover-shadow");
                    d(function*() {
                        var n = e.props, r = n.cropArea, i = n.parentComponent, c = void 0 === i ? "Screenshot Reader" : i, l = n.onOcrResult;
                        t.classList.add("equatio-hidden");
                        var d = r.x, p = r.y, f = r.width, h = r.height, m = yield Object(u.a)();
                        if (Object(s.a)()) {
                            var g = document.querySelector("#page" + PDFViewerApplication.page).getBoundingClientRect(), v = g.x, y = g.y;
                            d -= v * window.devicePixelRatio, p -= y * window.devicePixelRatio;
                        } else "relative" === window.getComputedStyle(document.body, "").getPropertyValue("position") && (d += parseInt(window.getComputedStyle(document.body, "").getPropertyValue("margin-left"), 10), 
                        p += parseInt(window.getComputedStyle(document.body, "").getPropertyValue("margin-top"), 10));
                        t.classList.remove("equatio-hidden"), e.setState(function() {
                            return {
                                shown: !0
                            };
                        }), Object(a.a)(o.a.SendAnalyticsEvent, {
                            category: c + " - Scan Math"
                        }), l(yield Object(a.a)(o.a.ScanMathpixOcr, {
                            base64: m,
                            x: d,
                            y: p,
                            width: f,
                            height: h
                        }));
                    })();
                }
            }, {
                key: "render",
                value: function() {
                    var t = this, n = this.props.displayArea, r = this.state.shown, o = void 0 !== r && r;
                    return e(i.a, c({}, n, {
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
    }).call(this, n(3).h);
}, , , , function(e, t, n) {
    "use strict";
    var r = n(45), o = n(0), a = n(1);
    function i(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, a) {
                    try {
                        var i = t[o](a), u = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(u).then(function(e) {
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
    t.a = i(function*() {
        return Object(a.a)() ? document.querySelector("#page" + PDFViewerApplication.page).toDataURL("image/png") : Object(r.a)(o.a.CaptureScreenshot);
    });
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(3), o = n(233), a = n(100), i = n(234), u = n(235), s = n(236), c = n(242), l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, d = function() {
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
                            var i = t[o](a), u = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(u).then(function(e) {
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
        var g = function(e) {
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
                    p(function*() {
                        (yield e.getApi).speak(t);
                    })();
                }, e.onStop = function() {
                    p(function*() {
                        (yield e.getApi).stop();
                    })();
                }, e.getApi = Object(c.a)(), e;
            }
            return m(n, r["Component"]), d(n, [ {
                key: "componentWillUnmount",
                value: function() {
                    this.onStop();
                }
            }, {
                key: "render",
                value: function() {
                    var t = this.props, n = t.latex, r = t.cropArea, c = t.onClose, d = t.contextMenuMode, p = this.state, f = p.finished, h = void 0 !== f && f, m = p.error, v = void 0 !== m && m, y = p.mathML;
                    return e(a.a, l({}, r, {
                        shown: !0
                    }), e(s.a, {
                        finished: h,
                        onPlay: this.onPlay,
                        onStop: this.onStop,
                        onClose: c,
                        latex: n,
                        mathML: y,
                        contextMenuMode: d
                    }), h ? null : e(v ? u.a : i.a, null), e("div", {
                        style: g(h),
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
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(3), o = n(107), a = function() {
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
                            var i = t[o](a), u = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(u).then(function(e) {
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
        function u(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function s(e, t) {
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
        var l = function(t) {
            function n() {
                u(this, n);
                var e = s(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
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
            return c(n, r["Component"]), a(n, [ {
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
        t.a = l;
    }).call(this, n(3).h);
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
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(15), o = Object(r.d)({
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
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(3), o = n(15), a = n(101), i = n(237), u = function() {
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
        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function c(e, t) {
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
        var d = Object(o.d)({
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
        }), p = function(t) {
            function n() {
                s(this, n);
                var e = c(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
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
            return l(n, r["Component"]), u(n, [ {
                key: "componentWillUnmount",
                value: function() {
                    document.removeEventListener("click", this.contextMenuDocumentClickListener);
                }
            }, {
                key: "render",
                value: function() {
                    var t = this, n = this.state, r = n.playing, o = void 0 === r || r, a = n.showContextMenu, u = void 0 !== a && a, s = this.props, c = s.onClose, l = s.finished, p = s.contextMenuMode, f = s.latex, h = s.mathML, m = s.intl, g = void 0 !== p;
                    return e("div", null, e("ul", {
                        className: "equatio-screenshot-reader-actions",
                        style: {
                            top: "-20px",
                            right: "-20px"
                        }
                    }, l ? [ o ? e("li", {
                        className: "equatio-screenshot-reader-action-item",
                        "data-balloon": m.formatMessage(d.stop)
                    }, e("button", {
                        className: "equatio-screenshot-reader-action-button",
                        "aria-label": m.formatMessage(d.stop),
                        onClick: t.setPlaying(!1)
                    }, e("svg", {
                        viewBox: "0 0 560 560",
                        className: "equatio-screenshot-reader-action-button__icon"
                    }, e("use", {
                        xlinkHref: "#equatio-svg-accessibility-playback-stop"
                    })))) : e("li", {
                        className: "equatio-screenshot-reader-action-item",
                        "data-balloon": m.formatMessage(d.play)
                    }, e("button", {
                        className: "equatio-screenshot-reader-action-button",
                        "aria-label": m.formatMessage(d.play),
                        onClick: t.setPlaying(!0)
                    }, e("svg", {
                        viewBox: "0 0 560 560",
                        className: "equatio-screenshot-reader-action-button__icon"
                    }, e("use", {
                        xlinkHref: "#equatio-svg-accessibility-playback-play"
                    })))), g ? e("li", {
                        className: "equatio-screenshot-reader-action-item",
                        "data-balloon": m.formatMessage(d.moreOptions)
                    }, e("button", {
                        className: "equatio-screenshot-reader-action-button",
                        "aria-label": m.formatMessage(d.moreOptions),
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
                        "data-balloon": m.formatMessage(d.close)
                    }, e("button", {
                        className: "equatio-screenshot-reader-action-button",
                        "aria-label": m.formatMessage(d.close),
                        onClick: c
                    }, e("svg", {
                        viewBox: "0 0 11.172 11.172",
                        className: "equatio-screenshot-reader-action-button__icon"
                    }, e("use", {
                        xlinkHref: "#equatio-svg-modal-close"
                    }))))), g ? e(i.a, {
                        shown: u,
                        mode: p,
                        latex: f,
                        mathML: h,
                        onShownChanged: this.setShowContextMenu
                    }) : null);
                }
            } ]), n;
        }();
        t.a = Object(o.e)(p);
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r, o = n(102), a = n(238), i = n(241);
        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var s = (u(r = {}, o.a.FullToolbar, a.a), u(r, o.a.WebToolbar, i.a), r);
        t.a = function(t) {
            var n = t.shown, r = t.mode, o = t.latex, a = t.mathML, i = t.onShownChanged, u = s[r];
            return u ? e(u, {
                shown: n,
                latex: o,
                mathML: a,
                onShownChanged: i
            }) : null;
        };
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(5), o = n.n(r), a = n(103), i = n(105), u = n(240);
        t.a = function(t) {
            var n = t.shown, r = t.latex, s = t.mathML, c = t.onShownChanged;
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
                onShownChanged: c
            }), s ? e(i.a, {
                mathML: s,
                onShownChanged: c
            }) : null, e(u.a, {
                latex: r
            }));
        };
    }).call(this, n(3).h);
}, , function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(3), o = n(15), a = function() {
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
                            var i = t[o](a), u = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(u).then(function(e) {
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
        function u(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function s(e, t) {
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
        var l = function(t) {
            function l() {
                var e, t, r;
                u(this, l);
                for (var o = arguments.length, a = Array(o), c = 0; c < o; c++) a[c] = arguments[c];
                return t = r = s(this, (e = l.__proto__ || Object.getPrototypeOf(l)).call.apply(e, [ this ].concat(a))), 
                r.sendToEquatio = i(function*() {
                    var e = yield Promise.resolve().then(n.t.bind(null, 17, 7)), t = e.Actions, o = e.ToolModes, a = r.props.latex;
                    t.Toolbar.setExtractedMath(a), t.Toolbar.setMode(o.EquationEditor);
                }), s(r, t);
            }
            return c(l, r["Component"]), a(l, [ {
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
            } ]), l;
        }();
        t.a = l;
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(5), o = n.n(r), a = n(103), i = n(105);
        t.a = function(t) {
            var n = t.shown, r = t.latex, u = t.mathML, s = t.onShownChanged;
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
                onShownChanged: s
            }), u ? e(i.a, {
                mathML: u,
                onShownChanged: s
            }) : null);
        };
    }).call(this, n(3).h);
}, function(e, t, n) {
    "use strict";
    var r = n(243), o = n(107);
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
                        var i = t[o](a), u = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(u).then(function(e) {
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
    var u = function(e) {
        return "enUS" === e ? "en-US" : "enGB" === e ? "en-GB" : "es" === e || "fr" === e ? e : "en-US";
    }, s = function() {
        return '<silence msec="' + (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1) + '"/>';
    }, c = function(e, t) {
        switch (t) {
          case "2":
            return [ "enUS" === e || "enGB" === e ? "two" : "2", s() ];

          case "a":
            return [ "a." ];

          default:
            return [ t ];
        }
    }, l = i(function*() {
        var e;
        return yield r.SpeechManager.initialise(), {
            speak: (e = i(function*(e) {
                var t = (yield Object(o.a)()).locale, n = e.split(" ").reduce(function(e, n) {
                    return [].concat(a(e), a(c(t, n)));
                }, []);
                r.SpeechManager.speakSelection(n, "09807", void 0, u(t));
            }), function(t) {
                return e.apply(this, arguments);
            }),
            stop: function() {
                return r.SpeechManager.stop();
            }
        };
    })();
    t.a = function() {
        return l;
    };
}, , , , function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(3), o = function() {
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
        function a(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, a) {
                        try {
                            var i = t[o](a), u = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(u).then(function(e) {
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
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function u(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function s(e, t) {
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
                i(this, c);
                var e = u(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this));
                return a(function*() {
                    var t = (yield Promise.all([ n.e(12).then(n.t.bind(null, 261, 7)), n.e(0).then(n.t.bind(null, 106, 7)) ])).map(function(e) {
                        return e.default;
                    });
                    e.setState({
                        svgs: t
                    });
                })(), e;
            }
            return s(c, r["Component"]), o(c, [ {
                key: "render",
                value: function() {
                    var t = this.state.svgs;
                    return e("div", {
                        style: {
                            position: "absolute",
                            top: "-9999px",
                            left: "-9999px"
                        },
                        dangerouslySetInnerHTML: {
                            __html: (void 0 === t ? [] : t).join("")
                        }
                    });
                }
            } ]), c;
        }();
        t.a = c;
    }).call(this, n(3).h);
} ] ]);