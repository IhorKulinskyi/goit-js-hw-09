!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")},n=null;t.startBtn.addEventListener("click",(function(){n=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.startBtn.disabled=!0})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),t.startBtn.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.2d661503.js.map
