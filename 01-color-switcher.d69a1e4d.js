var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n),n.register("kBMfg",(function(e,t){var r,n,o,l;function i(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}r=e.exports,n="getRandomHexColor",o=function(){return i},Object.defineProperty(r,n,{get:o,set:l,enumerable:!0,configurable:!0});let d=null;const a=document.querySelector("body"),u=document.querySelector("[data-start]"),c=document.querySelector("[data-stop]");u.addEventListener("click",(function(){u.setAttribute("disabled",""),d=setInterval((()=>{a.style.backgroundColor=i()}),1e3)})),c.addEventListener("click",(function(){u.removeAttribute("disabled"),clearInterval(d)}))})),n("kBMfg");
//# sourceMappingURL=01-color-switcher.d69a1e4d.js.map