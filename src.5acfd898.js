parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"k63X":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.refs=void 0;const e={burgerMenu:document.querySelector(".burger-menu_button"),mobileMenu:document.querySelector(".mobile-menu"),crossIcon:document.querySelector(".cross-button"),pageHeader:document.querySelector(".flex-header")};function r(){e.burgerMenu.classList.add("visually-hidden"),e.mobileMenu.classList.remove("visually-hidden")}function s(){e.burgerMenu.classList.remove("visually-hidden"),e.mobileMenu.classList.add("visually-hidden")}exports.refs=e,e.burgerMenu.addEventListener("click",r),e.crossIcon.addEventListener("click",s);
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./js/mobile-menu-backdrop");const i={mainSocialIcons:document.querySelector(".social-icons")};let e=window.matchMedia("(min-width: 1023px)");function n(){return e.matches?i.mainSocialIcons.classList.remove("visually-hidden"):i.mainSocialIcons.classList.add("visually-hidden")}e.addEventListener("change",n);
},{"./js/mobile-menu-backdrop":"k63X"}]},{},["Focm"], null)
//# sourceMappingURL=/ToyStream/src.5acfd898.js.map