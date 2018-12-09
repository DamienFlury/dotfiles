!function(e) {
    var n = {};
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
    }
    t.m = e, t.c = n, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: r
        });
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for (var o in e) t.d(r, o, function(n) {
            return e[n];
        }.bind(null, o));
        return r;
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return t.d(n, "a", n), n;
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
    }, t.p = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/content/", t(t.s = 1);
}([ function(e, n) {
    function t(e, n, t) {
        n(new URIError(t.target.src + " could not be loaded"), t);
    }
    function r(e, n, t) {
        n(null, {
            uri: e,
            event: t
        });
    }
    e.exports = function(e, n) {
        if (!e) throw "missing uri";
        var o = document.head || document.head.getElementsByTagName("head")[0], i = document.createElement("script");
        i.type = "text/javascript", "function" == typeof n && (i.onerror = t.bind(null, e, n), 
        i.onload = r.bind(null, e, n)), o.appendChild(i), i.src = e;
    };
}, function(e, n, t) {
    "use strict";
    t.r(n);
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
    }), o = Object.assign || function(e) {
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
                var o, a, s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, c = s.success, u = s.failure;
                return chrome.runtime.lastError ? ((o = console).warn.apply(o, [ "Action failed:", e ].concat(i(n))), 
                r(chrome.runtime.lastError)) : u ? ((a = console).warn.apply(a, [ "Action failed:", e ].concat(i(n))), 
                r(u)) : t(c);
            });
        });
    }, s = t(0), c = t.n(s), u = !1, d = function() {
        if (u) {
            var e = document.querySelector("#equatio-inpage-container");
            e && e.classList.toggle("equatio-toggle");
        } else u = !0, c()("chrome-extension://" + chrome.runtime.id + "/content/webToolbarBundle.js");
    };
    function l(e) {
        return function() {
            var n = e.apply(this, arguments);
            return new Promise(function(e, t) {
                function r(o, i) {
                    try {
                        var a = n[o](i), s = a.value;
                    } catch (e) {
                        return void t(e);
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
    function p(e, n) {
        var t = {};
        for (var r in e) n.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t;
    }
    chrome.runtime.onMessage.addListener(function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.action, t = e.latex, r = e.image;
        "load-in-page" === n ? d() : "EQUATIO_COMPANION_INSERT_MATH" === n ? window.postMessage({
            action: "EQUATIO_COMPANION_INSERT_MATH",
            latex: t
        }, window.location.origin) : "EQUATIO_COMPANION_INSERT_IMAGE" === n && window.postMessage({
            action: "EQUATIO_COMPANION_INSERT_IMAGE",
            image: r
        }, window.location.origin);
    });
    var _ = [ r.CaptureScreenshot, r.ScanMathpixOcr, r.GetLicense, r.SendAnalyticsEvent, r.SendAnalyticsScreen, r.EnsureLoggedIntoFirebase, r.GetProfile, r.DismissMathDiscover ];
    window.addEventListener("message", function(e) {
        var n = e.origin, t = e.data;
        if (!n || n !== window.location.origin || !t) return !0;
        var r = t.equatioInPageAction, o = t.unique, i = p(t, [ "equatioInPageAction", "unique" ]);
        return !r || (!_.some(function(e) {
            return e === r;
        }) || (l(function*() {
            try {
                var e = yield a(r, i);
                window.postMessage({
                    equatioInPageResponse: o,
                    success: !0,
                    result: e
                }, window.location.origin);
            } catch (e) {
                window.postMessage({
                    equatioInPageResponse: o,
                    success: !1,
                    error: e
                }, window.location.origin);
            }
        })(), !0));
    });
} ]);