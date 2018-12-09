const equatioMyScriptElement = document.querySelector("myscript-math-web");

window.addEventListener("touchmove", e => {
    e.preventDefault()
});

document.addEventListener("touchmove", e => {
    e.preventDefault()
});

equatioMyScriptElement.addEventListener("touchmove", e => {
    e.preventDefault()
});

const changeEvent = () => {
    window.parent.postMessage({ type: "equatio-latex", value: equatioMyScriptElement.result.LATEX }, "*");
};

equatioMyScriptElement.addEventListener("myscript-math-web-result", changeEvent);

// Replaced with this...
equatioMyScriptElement.addEventListener("changed", () => {
    // On change, check to see if there is no result...
    if(!equatioMyScriptElement.result || !equatioMyScriptElement.result.LATEX) {
        // Then trigger the delete event
        window.parent.postMessage({ type: "equatio-latex-deleted" }, "*");
    }
});
var timer;
window.addEventListener("message", e => {
    if(e.data && e.data.type) {
        switch(e.data.type) {
            case "equatio-handwriting-undo": equatioMyScriptElement.undo(); return;
            case "equatio-handwriting-redo": equatioMyScriptElement.redo(); return;
            case "equatio-handwriting-clear": {
                equatioMyScriptElement.removeEventListener("myscript-math-web-result", changeEvent);
                equatioMyScriptElement.clear();
                if(timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(() => {
                    equatioMyScriptElement.addEventListener("myscript-math-web-result", changeEvent);
                }, 500);
                return;
            }
            case "equatio-handwriting-resize": window.dispatchEvent(new Event('resize')); return;
        }
    }
});