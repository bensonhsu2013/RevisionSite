!function n(i,r,l){function s(t,e){if(!r[t]){if(!i[t]){var o="function"==typeof require&&require;if(!e&&o)return o(t,!0);if(a)return a(t,!0);throw(o=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",o}o=r[t]={exports:{}},i[t][0].call(o.exports,function(e){return s(i[t][1][e]||e)},o,o.exports,n,i,r,l)}return r[t].exports}for(var a="function"==typeof require&&require,e=0;e<l.length;e++)s(l[e]);return s}({1:[function(e,t,o){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(o,"__esModule",{value:!0}),o.fadeOutNav=o.fadeInNav=o.isSelectorValid=o.isElement=o.getSiblings=o.visible=o.offset=o.fadeToggle=o.fadeOut=o.fadeIn=o.slideToggle=o.slideUp=o.slideDown=o.wrap=void 0;var i=n(e("@babel/runtime/helpers/typeof"));o.wrap=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.createElement("div");return e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t.appendChild(e)};function r(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:300,o=window.getComputedStyle(e).display;"none"===o&&(o="block"),e.style.transitionProperty="height",e.style.transitionDuration="".concat(t,"ms"),e.style.opacity=0,e.style.display=o;var n=e.offsetHeight;e.style.height=0,e.style.opacity=1,e.style.overflow="hidden",setTimeout(function(){e.style.height="".concat(n,"px")},5),window.setTimeout(function(){e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.style.removeProperty("opacity")},t+50)}o.slideDown=r;function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:300;e.style.boxSizing="border-box",e.style.transitionProperty="height, margin",e.style.transitionDuration="".concat(t,"ms"),e.style.height="".concat(e.offsetHeight,"px"),e.style.marginTop=0,e.style.marginBottom=0,e.style.overflow="hidden",setTimeout(function(){e.style.height=0},5),window.setTimeout(function(){e.style.display="none",e.style.removeProperty("height"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property")},t+50)}o.slideUp=l;o.slideToggle=function(e,t){("none"===window.getComputedStyle(e).display?r:l)(e,t)};function s(e){var t={duration:300,display:null,opacity:1,callback:null};Object.assign(t,1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}),e.style.opacity=0,e.style.display=t.display||"block",setTimeout(function(){e.style.transition="".concat(t.duration,"ms opacity ease"),e.style.opacity=t.opacity},5),setTimeout(function(){e.style.removeProperty("transition"),t.callback&&t.callback()},t.duration+50)}o.fadeIn=s;function a(e){var t;"none"!==e.style.display&&(t={duration:300,display:null,opacity:0,callback:null},Object.assign(t,1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}),e.style.opacity=1,e.style.display=t.display||"block",setTimeout(function(){e.style.transition="".concat(t.duration,"ms opacity ease"),e.style.opacity=t.opacity},5),setTimeout(function(){e.style.display="none",e.style.removeProperty("transition"),t.callback&&t.callback()},t.duration+50))}o.fadeOut=a;o.fadeToggle=function(e,t){("none"===window.getComputedStyle(e).display?s:a)(e,t)};o.offset=function(e){if(!e.getClientRects().length)return{top:0,left:0};var t=e.getBoundingClientRect(),e=e.ownerDocument.defaultView;return{top:t.top+e.pageYOffset,left:t.left+e.pageXOffset}};o.visible=function(e){return!!e&&!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)};o.getSiblings=function(e){var t=[];if(!e.parentNode)return t;for(var o=e.parentNode.firstChild;o;)1===o.nodeType&&o!==e&&t.push(o),o=o.nextSibling;return t};o.isElement=function(e){return"object"===("undefined"==typeof HTMLElement?"undefined":(0,i.default)(HTMLElement))?e instanceof HTMLElement:e&&"object"===(0,i.default)(e)&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var c,e=(c=document.createDocumentFragment(),function(e){try{c.querySelector(e)}catch(e){return!1}return!0});o.isSelectorValid=e;o.fadeInNav=function(e){var t={duration:300,visibility:"visible",opacity:1,callback:null};Object.assign(t,1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}),e.style.opacity=0,e.style.visibility=t.visibility||"visible",setTimeout(function(){e.style.transition="".concat(t.duration,"ms opacity ease"),e.style.opacity=t.opacity},5)};o.fadeOutNav=function(e){var t;"hidden"!==e.style.visibility&&(t={duration:300,visibility:"hidden",opacity:0,callback:null},Object.assign(t,1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}),e.style.opacity=1,e.style.visibility=t.visibility||"visible",setTimeout(function(){e.style.transition="".concat(t.duration,"ms opacity ease"),e.style.opacity=t.opacity},5),setTimeout(function(){e.style.visibility="hidden",e.style.removeProperty("transition"),t.callback&&t.callback()},t.duration+50))}},{"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/typeof":11}],2:[function(e,t,o){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault"),i=n(e("@babel/runtime/helpers/defineProperty")),r=n(e("@babel/runtime/helpers/classCallCheck")),l=n(e("@babel/runtime/helpers/classPrivateFieldSet")),s=n(e("@babel/runtime/helpers/classPrivateFieldGet")),a=e("../lib/utils");function c(t,e){var o,n=Object.keys(t);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(t),e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)),n}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(Object(o),!0).forEach(function(e){(0,i.default)(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}var p=new WeakMap,d=new WeakMap,f=new WeakMap,y=new WeakMap,h=new WeakMap,b=new WeakMap,m=new WeakMap,e=function e(){var i=this;(0,r.default)(this,e),p.set(this,{writable:!0,value:{body:document.body}}),d.set(this,{writable:!0,value:function(){(0,l.default)(i,p,u(u({},(0,s.default)(i,p)),{},{html:document.querySelector("html"),WPAdminbar:document.querySelector("#wpadminbar"),topbarWrapper:document.querySelector("#top-bar-wrap"),header:document.querySelector("#site-header")}))}}),f.set(this,{writable:!0,value:function(){document.querySelectorAll('a[href*="#"]:not([href="#"]):not(.comment-navigation .nav-links a), a.local[href*="#"]:not([href="#"]), .local a[href*="#"]:not([href="#"]), a.menu-link[href*="#"]:not([href="#"]), a.sidr-class-menu-link[href*="#"]:not([href="#"])').forEach(function(e){e.addEventListener("click",(0,s.default)(i,y))})}}),y.set(this,{writable:!0,value:function(e){var t,o=e.currentTarget;console.log(o.parentNode.classList),o.classList.contains("elementor-item-anchor")&&o.classList.contains("has-submenu")||o.classList.contains("omw-open-modal")||o.closest(".omw-open-modal")||o.classList.contains("oew-modal-button")||o.closest(".oew-modal-button")||o.classList.contains("opl-link")||o.parentNode.classList.contains("opl-link")||o.classList.contains("sidr-class-opl-link")||o.parentNode.classList.contains("sidr-class-opl-link")||o.classList.contains("acomment-reply")||o.classList.contains("htb-nav-link")||o.classList.contains("upload-file")||o.parentNode.classList.contains("vc_tta-panel-title")||(o=(t=o.getAttribute("href")).substring(t.indexOf("#")).slice(1),(t=null,a.isSelectorValid)("#".concat(o))&&(t=document.querySelector("#".concat(o))),""!=o&&t&&(e.preventDefault(),e.stopPropagation(),t=(0,a.offset)(t).top-(0,s.default)(i,h).call(i)-(0,s.default)(i,b).call(i)-(0,s.default)(i,m).call(i),(0,s.default)(i,p).html.scrollTo({top:t,behavior:"smooth"})))}}),h.set(this,{writable:!0,value:function(){return(0,s.default)(i,p).WPAdminbar?(0,s.default)(i,p).WPAdminbar.offsetHeight:0}}),b.set(this,{writable:!0,value:function(){return(0,s.default)(i,p).topbarWrapper&&(0,s.default)(i,p).topbarWrapper.classList.contains("top-bar-sticky")?(0,s.default)(i,p).topbarWrapper.offsetHeight:0}}),m.set(this,{writable:!0,value:function(){var e,t=0<arguments.length&&void 0!==arguments[0]&&arguments[0],o=document.querySelector("#site-header-sticky-wrapper");if(o){if(o.classList.contains("is-sticky")&&!t)return(0,s.default)(i,p).header.offsetHeight;if(null!==(t=(0,s.default)(i,p).header)&&void 0!==t&&t.classList.contains("top-header"))return Number.parseInt(getComputedStyle(o).height);if(null!==(o=(0,s.default)(i,p).header)&&void 0!==o&&o.classList.contains("medium-header")){var n=(0,s.default)(i,p).header.querySelector(".bottom-header-wrap");return n.classList.contains("fixed-scroll")?n.offsetHeight:(0,s.default)(i,p).header.classList.contains("hidden-menu")?(0,s.default)(i,p).header.dataset.height:(0,s.default)(i,p).header.offsetHeight}return null!==(n=(0,s.default)(i,p).header)&&void 0!==n&&n.classList.contains("fixed-header")?(0,s.default)(i,p).header.offsetHeight:null!==(n=(0,s.default)(i,p).header)&&void 0!==n&&n.classList.contains("up-effect")?0:null!==(e=null===(e=(0,s.default)(i,p).header)||void 0===e?void 0:e.dataset.height)&&void 0!==e?e:54}return document.querySelector("#stick-anything-header")?document.querySelector("#stick-anything-header").offsetHeight:null!==(e=document.querySelector(".elementor-section-wrap"))&&void 0!==e&&e.firstElementChild.classList.contains("elementor-sticky")?null===(e=document.querySelector(".elementor-section-wrap"))||void 0===e?void 0:e.firstElementChild.offsetHeight:0}}),(0,s.default)(this,p).body.classList.contains("single-product")||(0,s.default)(this,p).body.classList.contains("no-local-scroll")||((0,s.default)(this,d).call(this),(0,s.default)(this,f).call(this))};window.oceanwp=window.oceanwp||{},oceanwp.scrollEffect=new e},{"../lib/utils":1,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/classPrivateFieldGet":7,"@babel/runtime/helpers/classPrivateFieldSet":8,"@babel/runtime/helpers/defineProperty":9,"@babel/runtime/helpers/interopRequireDefault":10}],3:[function(e,t,o){t.exports=function(e,t){return t.get?t.get.call(e):t.value},t.exports.default=t.exports,t.exports.__esModule=!0},{}],4:[function(e,t,o){t.exports=function(e,t,o){if(t.set)t.set.call(e,o);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=o}},t.exports.default=t.exports,t.exports.__esModule=!0},{}],5:[function(e,t,o){t.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},t.exports.default=t.exports,t.exports.__esModule=!0},{}],6:[function(e,t,o){t.exports=function(e,t,o){if(!t.has(e))throw new TypeError("attempted to "+o+" private field on non-instance");return t.get(e)},t.exports.default=t.exports,t.exports.__esModule=!0},{}],7:[function(e,t,o){var n=e("./classApplyDescriptorGet.js"),i=e("./classExtractFieldDescriptor.js");t.exports=function(e,t){return t=i(e,t,"get"),n(e,t)},t.exports.default=t.exports,t.exports.__esModule=!0},{"./classApplyDescriptorGet.js":3,"./classExtractFieldDescriptor.js":6}],8:[function(e,t,o){var n=e("./classApplyDescriptorSet.js"),i=e("./classExtractFieldDescriptor.js");t.exports=function(e,t,o){return t=i(e,t,"set"),n(e,t,o),o},t.exports.default=t.exports,t.exports.__esModule=!0},{"./classApplyDescriptorSet.js":4,"./classExtractFieldDescriptor.js":6}],9:[function(e,t,o){t.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},t.exports.default=t.exports,t.exports.__esModule=!0},{}],10:[function(e,t,o){t.exports=function(e){return e&&e.__esModule?e:{default:e}},t.exports.default=t.exports,t.exports.__esModule=!0},{}],11:[function(e,t,o){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(e){return typeof e}:t.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t.exports.default=t.exports,t.exports.__esModule=!0,n(e)}t.exports=n,t.exports.default=t.exports,t.exports.__esModule=!0},{}]},{},[2]);