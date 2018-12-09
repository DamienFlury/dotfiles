(window.equatioChromeWebpackJsonP = window.equatioChromeWebpackJsonP || []).push([ [ 2 ], [ , , , , , , , function(e, t, n) {
    "use strict";
    n.r(t), function(e) {
        var o = n(0), r = n(9), a = n(53), i = n.n(a), s = n(20), u = n(54), c = n(75), l = n(101), p = n(23), d = n(25), h = n(16), f = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t;
            };
        }();
        function m(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function o(r, a) {
                        try {
                            var i = t[r](a), s = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(s).then(function(e) {
                            o("next", e);
                        }, function(e) {
                            o("throw", e);
                        });
                        e(s);
                    }
                    return o("next");
                });
            };
        }
        function g(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function b(e, t) {
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
        var y = function(t) {
            function n() {
                g(this, n);
                var e = b(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                return e.setMode = function(t) {
                    e.setState(function(e) {
                        var n = e.mode, o = t === n;
                        return o || void 0 === t || Object(p.b)("Web Toolbar - " + t), {
                            mode: o ? void 0 : t
                        };
                    });
                }, e.state = {
                    locale: "enUS"
                }, m(function*() {
                    var t = (yield Object(h.a)()).locale;
                    e.setState({
                        locale: t
                    });
                })(), e;
            }
            return v(n, o["Component"]), f(n, [ {
                key: "render",
                value: function() {
                    var t = this.state, n = t.mode, o = t.locale;
                    return e(r.b, {
                        locale: Object(l.b)(o),
                        messages: Object(l.a)(o)
                    }, e(i.a, {
                        nodeName: "div"
                    }, e("div", {
                        id: "equatio-inpage-shadow",
                        style: {
                            "pointer-events": "all"
                        }
                    }, n === s.a.ScreenshotReader && e(u.a, {
                        key: "screenshot-reader",
                        setMode: this.setMode,
                        contextMenuMode: d.a.WebToolbar
                    }), e(c.a, {
                        setMode: this.setMode,
                        currentMode: n
                    }))));
                }
            } ]), n;
        }();
        t.default = y;
    }.call(this, n(0).h);
}, , , , function(e, t, n) {
    "use strict";
    t.a = Object.freeze({
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
}, function(e, t, n) {
    "use strict";
    var o, r = n(57), a = n.n(r), i = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
    };
    function s(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function o(r, a) {
                    try {
                        var i = t[r](a), s = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(s).then(function(e) {
                        o("next", e);
                    }, function(e) {
                        o("throw", e);
                    });
                    e(s);
                }
                return o("next");
            });
        };
    }
    t.a = (o = s(function*(e, t) {
        return new Promise(function(n, o) {
            var r = a()(), s = void 0, u = function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = t.origin, i = t.data;
                if (a === window.location.origin && i && i.equatioInPageResponse === r) {
                    clearTimeout(s), window.removeEventListener("message", e);
                    var u = i.success, c = i.error, l = i.result;
                    u ? n(l) : o(c);
                }
            };
            window.addEventListener("message", u), s = setTimeout(function() {
                o(Error("timed_out")), window.removeEventListener("message", u);
            }, 15e3), window.postMessage(i({
                equatioInPageAction: e,
                unique: r
            }, t), window.location.origin);
        });
    }), function(e, t) {
        return o.apply(this, arguments);
    });
}, , function(e) {
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
}, , function(e, t, n) {
    "use strict";
    var o = n(11), r = n(23), a = n(12), i = function() {
        function e(e, t) {
            var n = [], o = !0, r = !1, a = void 0;
            try {
                for (var i, s = e[Symbol.iterator](); !(o = (i = s.next()).done) && (n.push(i.value), 
                !t || n.length !== t); o = !0) ;
            } catch (e) {
                r = !0, a = e;
            } finally {
                try {
                    !o && s.return && s.return();
                } finally {
                    if (r) throw a;
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
    function s(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function o(r, a) {
                    try {
                        var i = t[r](a), s = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(s).then(function(e) {
                        o("next", e);
                    }, function(e) {
                        o("throw", e);
                    });
                    e(s);
                }
                return o("next");
            });
        };
    }
    var u = function() {
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
    t.a = s(function*() {
        if (c) return c;
        Object(r.a)("Web Toolbar Loaded"), yield Object(a.a)(o.a.EnsureLoggedIntoFirebase);
        var e = yield Promise.all([ Object(a.a)(o.a.GetProfile), Object(a.a)(o.a.GetLicense) ]), t = i(e, 2), n = t[0], s = t[1];
        return c = {
            locale: u(n.options.locale || "enUS"),
            license: s
        };
    });
}, , , , function(e, t, n) {
    "use strict";
    t.a = Object.freeze({
        ScreenshotReader: "screenshot_reader",
        Calculator: "calculator"
    });
}, function(e, t, n) {
    "use strict";
    (function(e) {
        t.a = function(t) {
            var n = t.x, o = t.y, r = t.width, a = t.height, i = t.shown, s = t.children;
            return e("div", {
                className: "equatio-screenshot-reader",
                style: {
                    position: "absolute",
                    width: r + "px",
                    height: a + "px",
                    left: n - 10,
                    top: o - 10,
                    display: i ? "flex" : "none",
                    padding: "10px",
                    zIndex: 99999
                }
            }, s);
        };
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    var o = [ "efeafadncamffgiohgiciboonbjldkfj", "feepmdlmhplaojabeoecaobfmibooaid" ].map(function(e) {
        return {
            id: e,
            regex: new RegExp("^chrome-extension:\\/\\/" + e + "/")
        };
    });
    t.a = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href;
        return o.some(function(t) {
            return t.regex.test(e);
        });
    };
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return a;
    }), n.d(t, "a", function() {
        return i;
    });
    var o = n(11), r = n(12), a = function(e) {
        return Object(r.a)(o.a.SendAnalyticsScreen, {
            screenName: e
        });
    }, i = function(e) {
        return Object(r.a)(o.a.SendAnalyticsEvent, {
            category: e
        });
    };
}, , function(e, t, n) {
    "use strict";
    t.a = Object.freeze({
        FullToolbar: "full_toolbar",
        WebToolbar: "web_toolbar"
    });
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var o = n(9), r = n(27), a = Object(o.d)({
            text: {
                id: "screenshot-reader.context-menu.buttons.copy-latex",
                defaultMessage: "Copy LaTeX"
            }
        });
        t.a = Object(o.e)(function(t) {
            var n = t.latex, o = t.onShownChanged, i = t.intl;
            return e(r.a, {
                value: n,
                onShownChanged: o,
                text: i.formatMessage(a.text)
            });
        });
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var o = n(68), r = n.n(o);
        t.a = function(t) {
            var n = t.value, o = t.text;
            return e("li", {
                className: "equatio-screenshot-reader-context-menu-item"
            }, e("button", {
                className: "equatio-screenshot-reader-context-menu-button",
                onClick: function() {
                    return r.a.writeText(n);
                }
            }, o));
        };
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var o = n(9), r = n(27), a = Object(o.d)({
            text: {
                id: "screenshot-reader.context-menu.buttons.copy-mathml",
                defaultMessage: "Copy MathML"
            }
        });
        t.a = Object(o.e)(function(t) {
            var n = t.mathML, o = t.onShownChanged, i = t.intl;
            return e(r.a, {
                value: n,
                onShownChanged: o,
                text: i.formatMessage(a.text)
            });
        });
    }).call(this, n(0).h);
}, , function(e, t) {}, , , , , , , , function(e, t) {}, , , , , , , function(e, t) {}, , , , , , , , , function(e, t, n) {
    "use strict";
    (function(e) {
        var o = n(0), r = n(55), a = n(56), i = n(61), s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t;
            };
        }();
        function u(e, t) {
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
        var p = Object.freeze({
            MouseCapture: 0,
            OCR: 1,
            MathJax: 2
        }), d = function(t) {
            function d() {
                u(this, d);
                var e = c(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this));
                return e.setCaptured = function(t) {
                    e.setState(function() {
                        return {
                            status: p.OCR,
                            cropArea: t
                        };
                    });
                }, e.setOcrResult = function(t) {
                    e.setState(function() {
                        return {
                            status: p.MathJax,
                            latex: t
                        };
                    });
                }, e.cancel = function() {
                    (0, e.props.setMode)(), e.setState(function() {
                        return {
                            status: p.MouseCapture,
                            cropArea: void 0
                        };
                    });
                }, n.e(10).then(n.t.bind(null, 85, 7)), n.e(3).then(n.t.bind(null, 87, 7)), e.state = {
                    status: p.MouseCapture
                }, e;
            }
            return l(d, o["Component"]), s(d, [ {
                key: "render",
                value: function() {
                    var t = this, n = this.state, o = n.status, s = n.cropArea, u = n.latex, c = this.props.contextMenuMode;
                    return e("div", {
                        className: "equatio-screenshot-reader-wrapper",
                        style: {
                            "pointer-events": "all"
                        }
                    }, function() {
                        switch (o) {
                          case p.OCR:
                            var n = window.devicePixelRatio, l = {
                                x: s.x * n,
                                y: s.y * n,
                                width: s.width * n,
                                height: s.height * n
                            };
                            return e(a.a, {
                                cropArea: l,
                                onOcrResult: t.setOcrResult
                            });

                          case p.MathJax:
                            return e(i.a, {
                                key: "mathjax",
                                contextMenuMode: c,
                                cropArea: s,
                                latex: u,
                                onClose: t.cancel
                            });

                          default:
                            return e(r.a, {
                                onCapture: t.setCaptured,
                                onCancel: t.cancel
                            });
                        }
                    }());
                }
            } ]), d;
        }();
        t.a = d;
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var o = n(0), r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
        }, a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t;
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
        }, p = function(t) {
            function p() {
                s(this, p);
                var e = u(this, (p.__proto__ || Object.getPrototypeOf(p)).call(this));
                return e.cancelCapture = function() {
                    var t = e.props.onCancel;
                    "function" == typeof t && t();
                }, e.finishCapture = function(t) {
                    window.removeEventListener("scroll", e.scrollListener);
                    var n = e.props.onCapture;
                    "function" == typeof n && n(t);
                }, e.startCapture = function(t) {
                    var n = window, o = n.scrollX, a = n.scrollY;
                    e.scrollListener = function() {
                        return window.scrollTo(o, a);
                    }, window.addEventListener("scroll", e.scrollListener), e.setState(function() {
                        return r({}, l, {
                            initialX: t.clientX,
                            initialY: t.clientY,
                            isCapturing: !0
                        });
                    });
                }, e.keyUpListener = function(t) {
                    27 === t.which && (e.cancelCapture(), t.preventDefault());
                }, e.state = r({}, l), n.e(0).then(n.t.bind(null, 29, 7)), n.e(4).then(n.t.bind(null, 90, 7)), 
                e;
            }
            return c(p, o["Component"]), a(p, [ {
                key: "componentDidMount",
                value: function() {
                    this.captureContainer.addEventListener("mousedown", this.startCapture, !0), window.addEventListener("keyup", this.keyUpListener, !0);
                    var e = document.querySelector(".equatio-toolbar"), t = 0;
                    e && (t = this.captureContainer.clientHeight - e.getBoundingClientRect().y);
                    this.setState({
                        containerStyles: r({}, this.state.containerStyles, {
                            wrapper: r({}, this.state.containerStyles.wrapper, {
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
                value: function(e, t, n, o) {
                    var a = this, i = this.captureContainer, s = i.clientWidth, u = i.clientHeight, c = n >= 0 ? e + n : e, l = o >= 0 ? t : t + o, p = n >= 0 ? s - e - n : s - e, d = o >= 0 ? t + o : t, h = n >= 0 ? s - e : s - e - n, f = u - d, m = s - h, g = u - l;
                    this.setState(function() {
                        return {
                            containerStyles: r({}, a.state.containerStyles, {
                                top: {
                                    width: c,
                                    height: l
                                },
                                right: {
                                    width: p,
                                    height: d
                                },
                                bottom: {
                                    width: h,
                                    height: f
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
                value: function(e, t, n, o) {
                    var a = this, i = n >= 0 ? e : e + n, s = o >= 0 ? t : t + o;
                    this.setState(function() {
                        return {
                            containerStyles: r({}, a.state.containerStyles, {
                                center: {
                                    width: Math.abs(n) + "px",
                                    height: Math.abs(o) + "px",
                                    top: s + "px",
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
                    var t = this.state, n = t.initialX, o = t.initialY, r = e.clientX - n, a = e.clientY - o;
                    this.updateCorners(n, o, r, a), this.updateCenter(n, o, r, a);
                }
            }, {
                key: "cleanCornersColor",
                value: function() {
                    var e = this, t = [ "top", "right", "bottom", "left" ].reduce(function(t, n) {
                        return r({}, t, i({}, n, r({}, e.state.containerStyles[n], {
                            backgroundColor: "rgba(0,0,0,0)"
                        })));
                    }, {});
                    this.setState(function() {
                        return {
                            containerStyles: r({}, e.state.containerStyles, t)
                        };
                    });
                }
            }, {
                key: "mouseUpHandler",
                value: function(e) {
                    var t = this.state, n = t.initialX, o = t.initialY, r = window, a = r.scrollX, i = r.scrollY, s = Math.abs(e.clientX - n), u = Math.abs(e.clientY - o);
                    e.stopPropagation(), e.preventDefault(), this.cleanCornersColor(), s > 10 || u > 10 ? this.finishCapture({
                        x: Math.min(n, e.clientX),
                        y: Math.min(o, e.clientY),
                        width: s,
                        height: u,
                        scrollX: a,
                        scrollY: i
                    }) : this.cancelCapture();
                }
            }, {
                key: "render",
                value: function() {
                    var t = this, n = this.state, o = n.isCapturing, r = n.containerStyles;
                    return e("div", {
                        className: "equatio-screenshot-reader-mouse-capture",
                        onMouseMove: o ? function(e) {
                            return t.mouseMoveHandler(e);
                        } : null,
                        onMouseUp: o ? function(e) {
                            return t.mouseUpHandler(e);
                        } : null,
                        style: Object.assign({}, r.wrapper, o ? {
                            backgroundColor: "rgba(0,0,0,0)"
                        } : null),
                        ref: function(e) {
                            t.captureContainer = e;
                        }
                    }, e("div", {
                        className: "equatio-screenshot-reader-mouse-capture-top",
                        style: r.top
                    }), e("div", {
                        className: "equatio-screenshot-reader-mouse-capture-right",
                        style: r.right
                    }), e("div", {
                        className: "equatio-screenshot-reader-mouse-capture-bottom",
                        style: r.bottom
                    }), e("div", {
                        className: "equatio-screenshot-reader-mouse-capture-left",
                        style: r.left
                    }), e("div", {
                        className: "equatio-screenshot-reader-mouse-capture-center",
                        style: r.center
                    }));
                }
            } ]), p;
        }();
        t.a = p;
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var o = n(0), r = n(11), a = n(12), i = n(21), s = n(60), u = n(22), c = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
        }, l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t;
            };
        }();
        function p(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function o(r, a) {
                        try {
                            var i = t[r](a), s = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(s).then(function(e) {
                            o("next", e);
                        }, function(e) {
                            o("throw", e);
                        });
                        e(s);
                    }
                    return o("next");
                });
            };
        }
        function d(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function h(e, t) {
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
        var m = function(t) {
            function n() {
                return d(this, n), h(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
            }
            return f(n, o["Component"]), l(n, [ {
                key: "componentDidMount",
                value: function() {
                    var e = this, t = document.querySelector("#equatio-inpage-container") || this.loadingArea.closest("#equatio-inpage-container") || document.querySelector("#equatio-discover-shadow") || this.loadingArea.closest("#equatio-discover-shadow");
                    p(function*() {
                        var n = e.props, o = n.cropArea, i = n.parentComponent, c = void 0 === i ? "Screenshot Reader" : i, l = n.onOcrResult;
                        t.classList.add("equatio-hidden");
                        var p = o.x, d = o.y, h = o.width, f = o.height, m = yield Object(s.a)();
                        if (Object(u.a)()) {
                            var g = document.querySelector("#page" + PDFViewerApplication.page).getBoundingClientRect(), b = g.x, v = g.y;
                            p -= b * window.devicePixelRatio, d -= v * window.devicePixelRatio;
                        } else "relative" === window.getComputedStyle(document.body, "").getPropertyValue("position") && (p += parseInt(window.getComputedStyle(document.body, "").getPropertyValue("margin-left"), 10), 
                        d += parseInt(window.getComputedStyle(document.body, "").getPropertyValue("margin-top"), 10));
                        t.classList.remove("equatio-hidden"), e.setState(function() {
                            return {
                                shown: !0
                            };
                        }), Object(a.a)(r.a.SendAnalyticsEvent, {
                            category: c + " - Scan Math"
                        }), l(yield Object(a.a)(r.a.ScanMathpixOcr, {
                            base64: m,
                            x: p,
                            y: d,
                            width: h,
                            height: f
                        }));
                    })();
                }
            }, {
                key: "render",
                value: function() {
                    var t = this, n = this.props.displayArea, o = this.state.shown, r = void 0 !== o && o;
                    return e(i.a, c({}, n, {
                        shown: r
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
    }).call(this, n(0).h);
}, , , , function(e, t, n) {
    "use strict";
    var o = n(12), r = n(11), a = n(22);
    function i(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function o(r, a) {
                    try {
                        var i = t[r](a), s = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(s).then(function(e) {
                        o("next", e);
                    }, function(e) {
                        o("throw", e);
                    });
                    e(s);
                }
                return o("next");
            });
        };
    }
    t.a = i(function*() {
        return Object(a.a)() ? document.querySelector("#page" + PDFViewerApplication.page).toDataURL("image/png") : Object(o.a)(r.a.CaptureScreenshot);
    });
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var o = n(0), r = n(62), a = n(21), i = n(63), s = n(64), u = n(65), c = n(71), l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
        }, p = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t;
            };
        }();
        function d(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function o(r, a) {
                        try {
                            var i = t[r](a), s = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(s).then(function(e) {
                            o("next", e);
                        }, function(e) {
                            o("throw", e);
                        });
                        e(s);
                    }
                    return o("next");
                });
            };
        }
        function h(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function f(e, t) {
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
        }, b = function(t) {
            function n() {
                h(this, n);
                var e = f(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
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
                    d(function*() {
                        (yield e.getApi).speak(t);
                    })();
                }, e.onStop = function() {
                    d(function*() {
                        (yield e.getApi).stop();
                    })();
                }, e.getApi = Object(c.a)(), e;
            }
            return m(n, o["Component"]), p(n, [ {
                key: "componentWillUnmount",
                value: function() {
                    this.onStop();
                }
            }, {
                key: "render",
                value: function() {
                    var t = this.props, n = t.latex, o = t.cropArea, c = t.onClose, p = t.contextMenuMode, d = this.state, h = d.finished, f = void 0 !== h && h, m = d.error, b = void 0 !== m && m, v = d.mathML;
                    return e(a.a, l({}, o, {
                        shown: !0
                    }), e(u.a, {
                        finished: f,
                        onPlay: this.onPlay,
                        onStop: this.onStop,
                        onClose: c,
                        latex: n,
                        mathML: v,
                        contextMenuMode: p
                    }), f ? null : e(b ? s.a : i.a, null), e("div", {
                        style: g(f),
                        key: "render-latex"
                    }, e(r.a, {
                        latex: n,
                        onLatexSuccess: this.onLatexSuccess,
                        onLatexError: this.onLatexError
                    })));
                }
            } ]), n;
        }();
        t.a = b;
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var o = n(0), r = n(16), a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t;
            };
        }();
        function i(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function o(r, a) {
                        try {
                            var i = t[r](a), s = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(s).then(function(e) {
                            o("next", e);
                        }, function(e) {
                            o("throw", e);
                        });
                        e(s);
                    }
                    return o("next");
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
        var l = function(t) {
            function n() {
                s(this, n);
                var e = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                return e.messageListener = function(t) {
                    var n = e.props, o = n.onLatexSuccess, r = n.onLatexError;
                    if ("chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc" === t.origin) if ("equatio_mathjax_sandbox_success" === t.data.action) {
                        var a = t.data || {};
                        o(a.speech, a.mathML);
                    } else "equatio_mathjax_sandbox_error" === t.data.action && r(t.data.message);
                }, e.state = {
                    locale: "enUS"
                }, i(function*() {
                    var t = (yield Object(r.a)()).locale;
                    e.setState({
                        locale: t,
                        loaded: !0
                    }), window.addEventListener("message", e.messageListener);
                })(), e;
            }
            return c(n, o["Component"]), a(n, [ {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("message", this.messageListener);
                }
            }, {
                key: "render",
                value: function() {
                    var t = this.props.latex, n = this.state, o = n.locale;
                    return !!n.loaded && e("iframe", {
                        src: "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/mathjaxFrame/index.html?latex=" + encodeURIComponent(t) + "&locale=" + encodeURIComponent(o),
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
    }).call(this, n(0).h);
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
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var o = n(9), r = Object(o.d)({
            error: {
                id: "screenshot-reader.mathjax.error-display.title",
                defaultMessage: "Uh oh! We couldn't detect any math for this selection"
            }
        });
        t.a = Object(o.e)(function(t) {
            var n = t.intl;
            return e("div", {
                "data-balloon": n.formatMessage(r.error),
                "aria-label": n.formatMessage(r.error)
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
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var o = n(0), r = n(9), a = n(24), i = n(66), s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t;
            };
        }();
        function u(e, t) {
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
        var p = Object(r.d)({
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
        }), d = function(t) {
            function n() {
                u(this, n);
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
                        var o = n.showContextMenu, r = void 0 === t ? !o : t;
                        return r && setTimeout(function() {
                            document.addEventListener("click", e.contextMenuDocumentClickListener);
                        }), {
                            showContextMenu: r
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
            return l(n, o["Component"]), s(n, [ {
                key: "componentWillUnmount",
                value: function() {
                    document.removeEventListener("click", this.contextMenuDocumentClickListener);
                }
            }, {
                key: "render",
                value: function() {
                    var t = this, n = this.state, o = n.playing, r = void 0 === o || o, a = n.showContextMenu, s = void 0 !== a && a, u = this.props, c = u.onClose, l = u.finished, d = u.contextMenuMode, h = u.latex, f = u.mathML, m = u.intl, g = void 0 !== d;
                    return e("div", null, e("ul", {
                        className: "equatio-screenshot-reader-actions",
                        style: {
                            top: "-20px",
                            right: "-20px"
                        }
                    }, l ? [ r ? e("li", {
                        className: "equatio-screenshot-reader-action-item",
                        "data-balloon": m.formatMessage(p.stop)
                    }, e("button", {
                        className: "equatio-screenshot-reader-action-button",
                        "aria-label": m.formatMessage(p.stop),
                        onClick: t.setPlaying(!1)
                    }, e("svg", {
                        viewBox: "0 0 560 560",
                        className: "equatio-screenshot-reader-action-button__icon"
                    }, e("use", {
                        xlinkHref: "#equatio-svg-accessibility-playback-stop"
                    })))) : e("li", {
                        className: "equatio-screenshot-reader-action-item",
                        "data-balloon": m.formatMessage(p.play)
                    }, e("button", {
                        className: "equatio-screenshot-reader-action-button",
                        "aria-label": m.formatMessage(p.play),
                        onClick: t.setPlaying(!0)
                    }, e("svg", {
                        viewBox: "0 0 560 560",
                        className: "equatio-screenshot-reader-action-button__icon"
                    }, e("use", {
                        xlinkHref: "#equatio-svg-accessibility-playback-play"
                    })))), g ? e("li", {
                        className: "equatio-screenshot-reader-action-item",
                        "data-balloon": m.formatMessage(p.moreOptions)
                    }, e("button", {
                        className: "equatio-screenshot-reader-action-button",
                        "aria-label": m.formatMessage(p.moreOptions),
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
                        "data-balloon": m.formatMessage(p.close)
                    }, e("button", {
                        className: "equatio-screenshot-reader-action-button",
                        "aria-label": m.formatMessage(p.close),
                        onClick: c
                    }, e("svg", {
                        viewBox: "0 0 11.172 11.172",
                        className: "equatio-screenshot-reader-action-button__icon"
                    }, e("use", {
                        xlinkHref: "#equatio-svg-modal-close"
                    }))))), g ? e(i.a, {
                        shown: s,
                        mode: d,
                        latex: h,
                        mathML: f,
                        onShownChanged: this.setShowContextMenu
                    }) : null);
                }
            } ]), n;
        }();
        t.a = Object(r.e)(d);
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var o, r = n(25), a = n(67), i = n(70);
        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var u = (s(o = {}, r.a.FullToolbar, a.a), s(o, r.a.WebToolbar, i.a), o);
        t.a = function(t) {
            var n = t.shown, o = t.mode, r = t.latex, a = t.mathML, i = t.onShownChanged, s = u[o];
            return s ? e(s, {
                shown: n,
                latex: r,
                mathML: a,
                onShownChanged: i
            }) : null;
        };
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var o = n(13), r = n.n(o), a = n(26), i = n(28), s = n(69);
        t.a = function(t) {
            var n = t.shown, o = t.latex, u = t.mathML, c = t.onShownChanged;
            return e("ul", {
                className: r()("equatio-screenshot-reader-context-menu", {
                    "equatio-screenshot-reader-context-menu--shown": n
                }),
                style: {
                    top: 12,
                    right: 14,
                    minWidth: 125
                }
            }, e(a.a, {
                latex: o,
                onShownChanged: c
            }), u ? e(i.a, {
                mathML: u,
                onShownChanged: c
            }) : null, e(s.a, {
                latex: o
            }));
        };
    }).call(this, n(0).h);
}, , function(e, t, n) {
    "use strict";
    (function(e) {
        var o = n(0), r = n(9), a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t;
            };
        }();
        function i(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function o(r, a) {
                        try {
                            var i = t[r](a), s = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(s).then(function(e) {
                            o("next", e);
                        }, function(e) {
                            o("throw", e);
                        });
                        e(s);
                    }
                    return o("next");
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
        var l = function(t) {
            function l() {
                var e, t, o;
                s(this, l);
                for (var r = arguments.length, a = Array(r), c = 0; c < r; c++) a[c] = arguments[c];
                return t = o = u(this, (e = l.__proto__ || Object.getPrototypeOf(l)).call.apply(e, [ this ].concat(a))), 
                o.sendToEquatio = i(function*() {
                    var e = yield n.e(11).then(n.t.bind(null, 92, 7)), t = e.Actions, r = e.ToolModes, a = o.props.latex;
                    t.Toolbar.setExtractedMath(a), t.Toolbar.setMode(r.EquationEditor);
                }), u(o, t);
            }
            return c(l, o["Component"]), a(l, [ {
                key: "render",
                value: function() {
                    return e("li", {
                        className: "equatio-screenshot-reader-context-menu-item"
                    }, e("button", {
                        className: "equatio-screenshot-reader-context-menu-button",
                        onClick: this.sendToEquatio
                    }, e(r.a, {
                        id: "screenshot-reader.context-menu.buttons.send-to-equation",
                        defaultMessage: "Edit with EquatIO"
                    })));
                }
            } ]), l;
        }();
        t.a = l;
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var o = n(13), r = n.n(o), a = n(26), i = n(28);
        t.a = function(t) {
            var n = t.shown, o = t.latex, s = t.mathML, u = t.onShownChanged;
            return e("ul", {
                className: r()("equatio-screenshot-reader-context-menu", {
                    "equatio-screenshot-reader-context-menu--shown": n
                }),
                style: {
                    top: 12,
                    right: 14,
                    minWidth: 125
                }
            }, e(a.a, {
                latex: o,
                onShownChanged: u
            }), s ? e(i.a, {
                mathML: s,
                onShownChanged: u
            }) : null);
        };
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    var o = n(72), r = n(16);
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
                function o(r, a) {
                    try {
                        var i = t[r](a), s = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    if (!i.done) return Promise.resolve(s).then(function(e) {
                        o("next", e);
                    }, function(e) {
                        o("throw", e);
                    });
                    e(s);
                }
                return o("next");
            });
        };
    }
    var s = function(e) {
        return "enUS" === e ? "en-US" : "enGB" === e ? "en-GB" : "es" === e || "fr" === e ? e : "en-US";
    }, u = function() {
        return '<silence msec="' + (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1) + '"/>';
    }, c = function(e, t) {
        switch (t) {
          case "2":
            return [ "enUS" === e || "enGB" === e ? "two" : "2", u() ];

          case "a":
            return [ "a." ];

          default:
            return [ t ];
        }
    }, l = i(function*() {
        var e;
        return yield o.SpeechManager.initialise(), {
            speak: (e = i(function*(e) {
                var t = (yield Object(r.a)()).locale, n = e.split(" ").reduce(function(e, n) {
                    return [].concat(a(e), a(c(t, n)));
                }, []);
                o.SpeechManager.speakSelection(n, "09807", void 0, s(t));
            }), function(t) {
                return e.apply(this, arguments);
            }),
            stop: function() {
                return o.SpeechManager.stop();
            }
        };
    })();
    t.a = function() {
        return l;
    };
}, , , , function(e, t, n) {
    "use strict";
    (function(e) {
        var o = n(0), r = n(9), a = n(13), i = n.n(a), s = n(76), u = n.n(s), c = n(77), l = n(20), p = n(78), d = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t;
            };
        }();
        function h(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function f(e, t) {
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
        var g = Object(r.d)({
            move_toolbar: {
                id: "web-toolbar.toolbar.move-toolbar",
                defaultMessage: "Move Toolbar"
            },
            screenshot_reader: {
                id: "web-toolbar.toolbar.screenshot-reader",
                defaultMessage: "Screenshot Reader"
            },
            calculator: {
                id: "web-toolbar.toolbar.calculator",
                defaultMessage: "Calculator"
            }
        }), b = function(t) {
            function r() {
                h(this, r);
                var e = f(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));
                return e.setDragging = function(t) {
                    return function() {
                        e.setState(function() {
                            return {
                                dragging: t
                            };
                        });
                    };
                }, e.toggleExpanded = function(t) {
                    return function() {
                        e.setState(function(e) {
                            var n = e.expanded;
                            return {
                                expanded: t || !n
                            };
                        });
                    };
                }, e.state = {
                    expanded: !1,
                    dragging: !1
                }, n.e(0).then(n.t.bind(null, 29, 7)), n.e(9).then(n.t.bind(null, 93, 7)), n.e(5).then(n.t.bind(null, 95, 7)), 
                n.e(6).then(n.t.bind(null, 97, 7)), e;
            }
            return m(r, o["Component"]), d(r, [ {
                key: "render",
                value: function() {
                    var t = this.props, n = t.currentMode, o = t.setMode, r = t.intl, a = this.state, s = a.expanded, d = a.dragging;
                    return e("div", {
                        style: {
                            "pointer-events": "none",
                            position: "fixed",
                            top: "5px",
                            right: "5px",
                            left: "5px",
                            bottom: "5px",
                            "z-index": 2147483620
                        }
                    }, e(u.a, {
                        handle: ".equatio-inpage-drag-target",
                        bounds: "parent",
                        onStart: this.setDragging(!0),
                        onStop: this.setDragging(!1)
                    }, e("div", {
                        style: {
                            "pointer-events": "all",
                            opacity: d ? .6 : 1
                        }
                    }, e(c.a, null), e("ul", {
                        className: "equatio-inpage-toolbar"
                    }, e("li", {
                        className: "equatio-inpage-toolbar-item",
                        "data-balloon": d ? null : r.formatMessage(g.move_toolbar),
                        "data-balloon-pos": "down"
                    }, e("button", {
                        className: "equatio-inpage-drag-target",
                        "aria-label": r.formatMessage(g.move_toolbar)
                    }, e("svg", {
                        viewBox: "0 0 14 14",
                        className: "equatio-inpage-drag-target-image"
                    }, e("use", {
                        xlinkHref: "#equatio-floating-svg-input-button-drag"
                    })))), e("li", {
                        className: "equatio-inpage-toolbar-item",
                        "data-balloon": r.formatMessage(g.screenshot_reader),
                        "data-balloon-pos": "down"
                    }, e("button", {
                        className: "equatio-inpage-toolbar-button",
                        "aria-label": r.formatMessage(g.screenshot_reader),
                        onClick: function() {
                            return o(l.a.ScreenshotReader);
                        }
                    }, e("svg", {
                        viewBox: "0 0 25.7 25",
                        className: i()("equatio-inpage-toolbar-button-image", {
                            "equatio-inpage-toolbar-button-image--active": n === l.a.ScreenshotReader
                        })
                    }, e("use", {
                        xlinkHref: "#equatio-floating-svg-input-button-screenshot"
                    })))), e("li", {
                        className: "equatio-inpage-toolbar-item--logo-button"
                    }, e("button", {
                        className: "equatio-inpage-toolbar-logobutton",
                        onClick: this.toggleExpanded()
                    }, e("svg", {
                        viewBox: "0 0 99.3 22.9",
                        className: "equatio-logo-button__logo"
                    }, e("use", {
                        xlinkHref: "#equatio-svg-logo"
                    })), e("svg", {
                        viewBox: "0 0 9.2 5.7",
                        className: i()("equatio-logo-button__chevron", {
                            "equatio-logo-button__chevron--expanded": s
                        })
                    }, e("use", {
                        xlinkHref: "#equatio-svg-chevron"
                    }))))), e(p.a, {
                        shown: s,
                        onClose: this.toggleExpanded(!1)
                    }))));
                }
            } ]), r;
        }();
        t.a = Object(r.e)(b);
    }).call(this, n(0).h);
}, , function(e, t, n) {
    "use strict";
    (function(e) {
        var o = n(0), r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t;
            };
        }();
        function a(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function o(r, a) {
                        try {
                            var i = t[r](a), s = i.value;
                        } catch (e) {
                            return void n(e);
                        }
                        if (!i.done) return Promise.resolve(s).then(function(e) {
                            o("next", e);
                        }, function(e) {
                            o("throw", e);
                        });
                        e(s);
                    }
                    return o("next");
                });
            };
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function u(e, t) {
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
                var e = s(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this));
                return a(function*() {
                    var t = (yield Promise.all([ n.e(7).then(n.t.bind(null, 99, 7)), n.e(12).then(n.t.bind(null, 100, 7)) ])).map(function(e) {
                        return e.default;
                    });
                    e.setState({
                        svgs: t
                    });
                })(), e;
            }
            return u(c, o["Component"]), r(c, [ {
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
    }).call(this, n(0).h);
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var o = n(0), r = n(13), a = n.n(r), i = n(9), s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t;
            };
        }();
        function u(e, t) {
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
        var p = function(t) {
            function n() {
                u(this, n);
                var e = c(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
                return e.closeToolbar = function() {
                    var t = e.props.onClose;
                    e.container.classList.add("equatio-toggle"), t();
                }, e.container = document.querySelector("#equatio-inpage-container"), e;
            }
            return l(n, o["Component"]), s(n, [ {
                key: "render",
                value: function() {
                    var t = this.props.shown;
                    return e("ul", {
                        className: a()("equatio-flyout-menu", {
                            "equatio-flyout-menu--hidden": !t
                        })
                    }, e("li", null, e("button", {
                        className: "equatio-flyout-menu__link",
                        onClick: this.closeToolbar
                    }, e(i.a, {
                        id: "web-toolbar.popup-menu.menu.close",
                        defaultMessage: "Hide EquatIO"
                    }))));
                }
            } ]), n;
        }();
        t.a = p;
    }).call(this, n(0).h);
}, , , , function(e) {
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
}, , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var o = n(9), r = n(79), a = n.n(r), i = n(80), s = n.n(i), u = n(81), c = n.n(u), l = n(14), p = n(82), d = (Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
    })({}, l, p), h = (Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
    })({}, l), f = n(83), m = (Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
    })({}, l, f), g = n(84), b = (Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
    })({}, l, g);
    function v(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n;
        }
        return Array.from(e);
    }
    n.d(t, "b", function() {
        return x;
    }), n.d(t, "a", function() {
        return O;
    }), Object(o.c)([].concat(v(a.a), v(s.a), v(c.a)));
    var y = {
        enUS: h,
        enGB: d,
        es: m,
        fr: b
    }, w = function() {
        return (Array.isArray(navigator.languages) ? navigator.languages[0] : navigator.language) || navigator.userLanguage;
    }, x = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w();
        return "es" === e || e.startsWith("es-") ? "es" : "fr" === e || e.startsWith("fr-") ? "fr" : "en";
    }, O = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w();
        return e ? "en-GB" === e ? y.enGB : "en-US" === e ? y.enUS : "es" === e || e.startsWith("es-") ? y.es : "fr" === e || e.startsWith("fr-") ? y.fr : y.enUS : y.enUS;
    };
} ] ]);