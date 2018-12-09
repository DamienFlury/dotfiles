!function(e) {
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
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        });
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function(t) {
            return e[t];
        }.bind(null, o));
        return r;
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return n.d(t, "a", t), t;
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/content/", n(n.s = 5);
}([ function(e, t) {
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
        var o = document.head || document.head.getElementsByTagName("head")[0], i = document.createElement("script");
        i.type = "text/javascript", "function" == typeof t && (i.onerror = n.bind(null, e, t), 
        i.onload = r.bind(null, e, t)), o.appendChild(i), i.src = e;
    };
}, function(e, t, n) {
    e.exports = n.p + "assets/equatioicon16.png";
}, function(e, t, n) {
    e.exports = n.p + "assets/equatioicon32.png";
}, function(e, t, n) {
    e.exports = n.p + "assets/equatioicon48.png";
}, function(e, t, n) {
    e.exports = n.p + "assets/equatioicon128.png";
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0), o = n.n(r), i = Object.freeze({
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
    }), a = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    };
    function u(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n;
        }
        return Array.from(e);
    }
    var s = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new Promise(function(n, r) {
            chrome.runtime.sendMessage("hjngolefdpdnooamgdldlkjgmdcmcjnc", a({
                action: e
            }, t), function() {
                var o, i, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, s = a.success, c = a.failure;
                return chrome.runtime.lastError ? ((o = console).warn.apply(o, [ "Action failed:", e ].concat(u(t))), 
                r(chrome.runtime.lastError)) : c ? ((i = console).warn.apply(i, [ "Action failed:", e ].concat(u(t))), 
                r(c)) : n(s);
            });
        });
    }, c = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return s(i.SetShowEquatioOnFirstRun, {
            value: e
        });
    }, l = function() {
        return s(i.GetShouldShowEquatioOnFirstRun);
    }, d = function(e) {
        return s(i.UpdateGoogleSheetEquations, {
            spreadsheetId: e
        });
    }, p = function() {
        function e(e, t) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), 
                !t || n.length !== t); r = !0) ;
            } catch (e) {
                o = !0, i = e;
            } finally {
                try {
                    !r && u.return && u.return();
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
    }(), f = {
        GoogleDocs: "Google Docs",
        GoogleForms: "Google Forms",
        GoogleSlides: "Google Slides",
        GoogleDrawings: "Google Drawings",
        GoogleSheets: "Google Sheets"
    }, g = {
        document: f.GoogleDocs,
        forms: f.GoogleForms,
        presentation: f.GoogleSlides,
        drawings: f.GoogleDrawings,
        spreadsheets: f.GoogleSheets
    }, m = function() {
        var e = window.location, t = e.host, n = e.pathname;
        if ("docs.google.com" === t) {
            var r = n.substr(1).split("/"), o = p(r, 1)[0];
            return g[o];
        }
    }, _ = function() {
        return -1 === window.location.href.indexOf("/document/");
    }, h = function() {
        function e(e, t) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), 
                !t || n.length !== t); r = !0) ;
            } catch (e) {
                o = !0, i = e;
            } finally {
                try {
                    !r && u.return && u.return();
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
    }(), y = function() {
        var e = window.location.pathname.match(/\/d\/(.*?)(?:\/.*?|$)/);
        return h(e, 2)[1];
    }, v = function() {
        var e = document.querySelector(".equatio-toolbar-button");
        e && setTimeout(function() {
            e.focus();
        }, 50);
    };
    n(1), n(2), n(3), n(4);
    function w(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(o, i) {
                    try {
                        var a = t[o](i), u = a.value;
                    } catch (e) {
                        return void n(e);
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
    var S = !1, b = function() {
        _() && m() === f.GoogleSheets && d(y());
    }, x = function() {
        if (S) {
            var e = document.querySelector(".equatio-toolbar-wrapper");
            e && (e.style.display = "block" === e.style.display ? "none" : "block", "block" === e.style.display && (v(), 
            b()));
        } else S = !0, o()("chrome-extension://" + chrome.runtime.id + "/content/webBundle.js"), 
        b();
    };
    chrome.runtime.onMessage.addListener(function(e) {
        "load" === e.action && x();
    }), w(function*() {
        m() === f.GoogleDocs && ((yield l()) && (x(), yield c(!1)));
    })();
} ]);