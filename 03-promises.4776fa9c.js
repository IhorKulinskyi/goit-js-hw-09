var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("7Y9D8");const i={form:document.querySelector(".form"),firstDelay:document.querySelector('[name*="delay"]'),step:document.querySelector('[name*="step"]'),amount:document.querySelector('[name*="amount"]')},l={closeButton:!0};function u(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}i.form.addEventListener("submit",(function(e){e.preventDefault();const t=Number(i.firstDelay.value),o=Number(i.step.value),n=Number(i.amount.value);let a=t;for(let e=1;e<=n;e+=1)a+=o,u(e,a).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`,l)})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`,l)}))}));
//# sourceMappingURL=03-promises.4776fa9c.js.map
