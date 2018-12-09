(window.equatioChromeWebpackJsonP = window.equatioChromeWebpackJsonP || []).push([ [ 7 ], {
    249: function(n, o, e) {
        var i, t = e(250);
        "string" == typeof t && (t = [ [ n.i, t, "" ] ]);
        var a = {
            hmr: !0
        };
        a.transform = i, a.insertInto = (() => document.querySelector("#equatio-inpage-shadow").shadowRoot.querySelector("div"));
        e(19)(t, a);
        t.locals && (n.exports = t.locals);
    },
    250: function(n, o, e) {
        (n.exports = e(18)(void 0)).push([ n.i, "#equatio-inpage-container {\n    z-index: 9999999;\n    position: fixed;\n    pointer-events: none;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    opacity: 1;\n    display: block;\n}\n\n#equatio-inpage-container.equatio-hidden {\n    opacity: 0;\n}\n\n#equatio-inpage-container.equatio-toggle {\n    display: none;\n}", "" ]);
    }
} ]);