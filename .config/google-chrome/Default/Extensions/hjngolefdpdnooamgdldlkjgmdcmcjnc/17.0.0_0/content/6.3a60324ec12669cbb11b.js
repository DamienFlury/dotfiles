(window.equatioChromeWebpackJsonP = window.equatioChromeWebpackJsonP || []).push([ [ 6 ], {
    97: function(n, i, e) {
        var t, o = e(98);
        "string" == typeof o && (o = [ [ n.i, o, "" ] ]);
        var a = {
            hmr: !0
        };
        a.transform = t, a.insertInto = (() => document.querySelector("#equatio-inpage-shadow").shadowRoot.querySelector("div"));
        e(2)(o, a);
        o.locals && (n.exports = o.locals);
    },
    98: function(n, i, e) {
        (n.exports = e(1)(void 0)).push([ n.i, ".react-draggable {\n    position: fixed;\n    top: 20px;\n    right: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n}\n\n.react-draggable .equatio-flyout-menu {\n    min-width: 190px;\n    z-index: -1;\n    pointer-events: all;\n    transition: opacity 0.3s ease-in-out, clip-path 0.3s ease-in-out, visibility 0.3s ease-in-out;\n    clip-path: inset(0 0 0 0);\n    border: 1px solid #DDD;\n    top: -1px;\n}\n\n@keyframes hide-menu {\n    0% {\n        clip-path: inset(0 0 0 0);\n    }\n\n    99% {\n        clip-path: inset(0 0 100% 0);\n    }\n\n    100% {\n        clip-path: inset(0 0 100% 0);\n        display: none;\n        height: 0;\n        overflow: hidden;\n        padding: 0;\n    }\n}\n\n.react-draggable .equatio-flyout-menu--hidden {\n    transform: translateY(0);\n    visibility: visible;\n    animation: hide-menu 0.3s ease-in-out;\n    animation-fill-mode: forwards\n}", "" ]);
    }
} ]);