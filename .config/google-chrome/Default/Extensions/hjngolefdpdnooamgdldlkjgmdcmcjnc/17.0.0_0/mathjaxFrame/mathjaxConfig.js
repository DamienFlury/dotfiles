window.MathJax = {
    showMathMenu: false,
    showProcessingMessages: false,
    messageStyle: "none",
    extensions: ["toMathML.js", "tex2jax.js", "TeX/AMSmath.js", "TeX/AMSsymbols.js"],
    jax: ["input/TeX", "output/SVG"],
    tex2jax: {
        inlineMath: [],
        procesEscapes: true
    },
    SVG: {
        useGlobalCache: false,
        useFontCache: false,
        scale: 100,
        linebreaks: {
            automatic: false,
            width: "container"
        },
        font: "STIX-Web"
    },
    TeX: {
        Macros: {
            overarc: ["\\overparen{#1}", 1],
            longdiv: ["{\\overline{\\smash{)}#1}}", 1]
        }
    }
};