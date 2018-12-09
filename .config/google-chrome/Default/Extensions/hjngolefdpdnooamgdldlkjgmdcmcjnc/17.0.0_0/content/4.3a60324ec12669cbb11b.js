(window.equatioChromeWebpackJsonP = window.equatioChromeWebpackJsonP || []).push([ [ 4 ], {
    90: function(e, n, o) {
        var t, r = o(91);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]);
        var a = {
            hmr: !0
        };
        a.transform = t, a.insertInto = (() => document.querySelector("#equatio-inpage-shadow").shadowRoot.querySelector("div"));
        o(2)(r, a);
        r.locals && (e.exports = r.locals);
    },
    91: function(e, n, o) {
        (e.exports = o(1)(void 0)).push([ e.i, ".equatio-screenshot-reader-mouse-capture {\n\n}\n\n.equatio-screenshot-reader-mouse-capture-center {\n    pointer-events: all;\n}\n\n\n.equatio-screenshot-reader-mouse-capture {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 2147483620;\n    /* MAX:2147483647 */\n    cursor: crosshair;\n    box-sizing: content-box !important;\n}\n \n.equatio-screenshot-reader-mouse-capture * {\n    box-sizing: content-box !important;\n}\n \n.equatio-screenshot-reader-mouse-capture>div {\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.2);\n    margin: 0 !important;\n    padding:0 !important;\n}\n \n.equatio-screenshot-reader-mouse-capture-top {\n    top: 0;\n    left: 0;\n}\n \n.equatio-screenshot-reader-mouse-capture-right {\n    top: 0;\n    right: 0;\n}\n \n.equatio-screenshot-reader-mouse-capture-bottom {\n    right: 0;\n    bottom: 0;\n}\n \n.equatio-screenshot-reader-mouse-capture-left {\n    bottom: 0;\n    left: 0;\n}\n \n.equatio-screenshot-reader-mouse-capture-center {\n    cursor: pointer;\n    z-index: 2147483631;\n    outline: 2px solid #00B7FF;\n    background-color: #FFF;\n    -webkit-user-select: none;\n}\n\n.equatio-screenshot-reader-mouse-capture-center--has-content {\n    background-color: #FFF !important;\n}\n\n.equatio-screenshot-reader-mouse-capture-center .MathJax_SVG_Display {\n    margin: 0;\n}", "" ]);
    }
} ]);