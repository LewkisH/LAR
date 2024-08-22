(()=>{"use strict";var n={792:(n,t,e)=>{e.d(t,{A:()=>h});var o=e(601),r=e.n(o),i=e(314),l=e.n(i),a=e(417),c=e.n(a),s=new URL(e(427),e.b),p=new URL(e(165),e.b),u=l()(r()),d=c()(s),f=c()(p);u.push([n.id,`@charset "utf-8";.visually-hidden {\n    clip: rect(0 0 0 0);\n    border: 0;\n    clip-path: inset(50%);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px\n}\n\n.toggle-all {\n    height: 60px!important;\n    right: auto!important;\n    width: 40px!important\n}\n\n.toggle-all-label {\n    pointer-events: none\n}\n\nbody,button,html {\n    margin: 0;\n    padding: 0\n}\n\nbutton {\n    -webkit-font-smoothing: antialiased;\n    -webkit-appearance: none;\n    appearance: none;\n    background: none;\n    border: 0;\n    color: inherit;\n    font-family: inherit;\n    font-size: 100%;\n    font-weight: inherit;\n    vertical-align: baseline\n}\n\nbody,button {\n    -moz-osx-font-smoothing: grayscale\n}\n\nbody {\n    -webkit-font-smoothing: antialiased;\n    background: #f5f5f5;\n    color: #111;\n    font: 14px Helvetica Neue,Helvetica,Arial,sans-serif;\n    font-weight: 300;\n    line-height: 1.4em;\n    margin: 0 auto;\n    max-width: 550px;\n    min-width: 230px\n}\n\n.hidden {\n    display: block\n}\n\n.todoapp {\n    background: #fff;\n    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);\n    margin: 130px 0 40px;\n    position: relative\n}\n\n.todoapp input::-webkit-input-placeholder {\n    color: rgba(0,0,0,.4);\n    font-style: italic;\n    font-weight: 400\n}\n\n.todoapp input::-moz-placeholder {\n    color: rgba(0,0,0,.4);\n    font-style: italic;\n    font-weight: 400\n}\n\n.todoapp input::input-placeholder {\n    color: rgba(0,0,0,.4);\n    font-style: italic;\n    font-weight: 400\n}\n\n.todoapp h1 {\n    color: #b83f45;\n    font-size: 80px;\n    font-weight: 200;\n    position: absolute;\n    text-align: center;\n    -webkit-text-rendering: optimizeLegibility;\n    -moz-text-rendering: optimizeLegibility;\n    text-rendering: optimizeLegibility;\n    top: -140px;\n    width: 100%\n}\n\n.edit,.new-todo {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    border: 1px solid #999;\n    box-shadow: inset 0 -1px 5px 0 rgba(0,0,0,.2);\n    box-sizing: border-box;\n    color: inherit;\n    font-family: inherit;\n    font-size: 24px;\n    font-weight: inherit;\n    line-height: 1.4em;\n    margin: 0;\n    padding: 6px;\n    position: relative;\n    width: 100%\n}\n\n.new-todo {\n    background: rgba(0,0,0,.003);\n    border: none;\n    box-shadow: inset 0 -2px 1px rgba(0,0,0,.03);\n    height: 65px;\n    padding: 16px 16px 16px 60px\n}\n\n.main {\n    border-top: 1px solid #e6e6e6;\n    position: relative;\n    z-index: 2\n}\n\n.toggle-all {\n    border: none;\n    bottom: 100%;\n    height: 1px;\n    opacity: 0;\n    position: absolute;\n    right: 100%;\n    width: 1px\n}\n\n.toggle-all+label {\n    align-items: center;\n    display: flex;\n    font-size: 0;\n    height: 65px;\n    justify-content: center;\n    left: 0;\n    position: absolute;\n    top: -65px;\n    width: 45px\n}\n\n.toggle-all+label:before {\n    color: #949494;\n    content: "❯";\n    display: inline-block;\n    font-size: 22px;\n    padding: 10px 27px;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg)\n}\n\n.toggle-all:checked+label:before {\n    color: #484848\n}\n\n.todo-list {\n    list-style: none;\n    margin: 0;\n    padding: 0\n}\n\n.todo-list li {\n    border-bottom: 1px solid #ededed;\n    font-size: 24px;\n    position: relative\n}\n\n.todo-list li:last-child {\n    border-bottom: none\n}\n\n.todo-list li.editing {\n    border-bottom: none;\n    padding: 0\n}\n\n.todo-list li.editing .edit {\n    display: block;\n    margin: 0 0 0 43px;\n    padding: 12px 16px;\n    width: calc(100% - 43px)\n}\n\n.todo-list li.editing .view {\n    display: block\n}\n\n.todo-list li .toggle {\n    -webkit-appearance: none;\n    appearance: none;\n    border: none;\n    bottom: 0;\n    height: auto;\n    margin: auto 0;\n    opacity: 0;\n    position: absolute;\n    text-align: center;\n    top: 0;\n    width: 40px\n}\n\n.todo-list li .toggle+label {\n    background-image: url(${d});\n    background-position: 0;\n    background-repeat: no-repeat\n}\n\n.todo-list li .toggle:checked+label {\n    background-image: url(${f})\n}\n\n.todo-list li label {\n    color: #484848;\n    display: block;\n    font-weight: 400;\n    line-height: 1.2;\n    padding: 15px 15px 15px 60px;\n    transition: color .4s;\n    word-break: break-all\n}\n\n.todo-list li.completed label {\n    color: #949494;\n    text-decoration: line-through\n}\n\n.todo-list li .destroy {\n    bottom: 0;\n    color: #949494;\n    display: none;\n    font-size: 30px;\n    height: 40px;\n    margin: auto 0;\n    position: absolute;\n    right: 10px;\n    top: 0;\n    transition: color .2s ease-out;\n    width: 40px\n}\n\n.todo-list li .destroy:focus,.todo-list li .destroy:hover {\n    color: #c18585\n}\n\n.todo-list li .destroy:after {\n    content: "×";\n    display: block;\n    height: 100%;\n    line-height: 1.1\n}\n\n.todo-list li:hover .destroy {\n    display: none\n}\n\n.todo-list li .edit {\n    display: none\n}\n\n.todo-list li.editing:last-child {\n    margin-bottom: -1px\n}\n\n.footer {\n    display: block;\n    border-top: 1px solid #e6e6e6;\n    font-size: 15px;\n    height: 20px;\n    padding: 10px 15px;\n    text-align: center\n}\n\n.footer:before {\n    bottom: 0;\n    box-shadow: 0 1px 1px rgba(0,0,0,.2),0 8px 0 -3px #f6f6f6,0 9px 1px -3px rgba(0,0,0,.2),0 16px 0 -6px #f6f6f6,0 17px 2px -6px rgba(0,0,0,.2);\n    content: "";\n    height: 50px;\n    left: 0;\n    overflow: hidden;\n    position: absolute;\n    right: 0\n}\n\n.todo-count {\n    float: left;\n    text-align: left\n}\n\n.todo-count strong {\n    font-weight: 300\n}\n\n.filters {\n    left: 0;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    position: absolute;\n    right: 0\n}\n\n.filters li {\n    display: inline\n}\n\n.filters li a {\n    border: 1px solid transparent;\n    border-radius: 3px;\n    color: inherit;\n    margin: 3px;\n    padding: 3px 7px;\n    text-decoration: none\n}\n\n.filters li a:hover {\n    border-color: #db7676\n}\n\n.filters li a.selected {\n    border-color: #ce4646\n}\n\n.clear-completed,html .clear-completed:active {\n    cursor: pointer;\n    float: right;\n    line-height: 19px;\n    position: relative;\n    text-decoration: none\n}\n\n.clear-completed:hover {\n    text-decoration: underline\n}\n\n.info {\n    color: #4d4d4d;\n    font-size: 11px;\n    margin: 65px auto 0;\n    text-align: center;\n    text-shadow: 0 1px 0 hsla(0,0%,100%,.5)\n}\n\n.info p {\n    line-height: 1\n}\n\n.info a {\n    color: inherit;\n    font-weight: 400;\n    text-decoration: none\n}\n\n.info a:hover {\n    text-decoration: underline\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n    .todo-list li .toggle,.toggle-all {\n        background:none\n    }\n\n    .todo-list li .toggle {\n        height: 40px\n    }\n}\n\n@media (max-width: 430px) {\n    .footer {\n        height:50px\n    }\n\n    .filters {\n        bottom: 10px\n    }\n}\n\n.toggle-all:focus+label,.toggle:focus+label,:focus {\n    box-shadow: 0 0 2px 2px #cf7d7d;\n    outline: 0\n}\n`,""]);const h=u},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var l={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(l[c]=!0)}for(var s=0;s<n.length;s++){var p=[].concat(n[s]);o&&l[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),t.push(p))}},t}},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var i={},l=[],a=0;a<n.length;a++){var c=n[a],s=o.base?c[0]+o.base:c[0],p=i[s]||0,u="".concat(s," ").concat(p);i[s]=p+1;var d=e(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var h=r(f,o);o.byIndex=a,t.splice(a,0,{identifier:u,updater:h,references:1})}l.push(u)}return l}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var l=0;l<i.length;l++){var a=e(i[l]);t[a].references--}for(var c=o(n,r),s=0;s<i.length;s++){var p=e(i[s]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=c}}},659:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},165:n=>{n.exports="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2359A193%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%233EA390%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E"},427:n=>{n.exports="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23949494%22%20stroke-width%3D%223%22/%3E%3C/svg%3E"}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return n[o](i,i.exports,e),i.exports}function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=Array(t);e<t;e++)o[e]=n[e];return o}function r(n){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r(n)}function i(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function a(n,t,e){return(t=function(n){var t=function(n){if("object"!=r(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var e=t.call(n,"string");if("object"!=r(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==r(t)?t:t+""}(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n,t){for(var e=arguments.length,o=new Array(e>2?e-2:0),i=2;i<e;i++)o[i-2]=arguments[i];return{type:n,props:l(l({},t),{},{children:o.map((function(n){return"object"===r(n)?n:{type:"TEXT_ELEMENT",props:{nodeValue:n,children:[]}}}))})}}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.b=document.baseURI||self.location.href,e.nc=void 0;var s=function(n){return n.startsWith("on")},p=function(n){return"children"!==n&&!s(n)},u=function(n,t){return function(e){return n[e]!==t[e]}},d=function(n,t){return function(n){return!(n in t)}};function f(n,t,e){Object.keys(t).filter(s).filter((function(n){return!(n in e)||u(t,e)(n)})).forEach((function(e){var o=e.toLowerCase().substring(2);n.removeEventListener(o,t[e])})),Object.keys(t).filter(p).filter(d(t,e)).forEach((function(t){"class"===t?n.removeAttribute("class"):t in n?n[t]="":n.removeAttribute(t)})),Object.keys(e).filter(p).filter(u(t,e)).forEach((function(t){"class"===t?n.className=e[t]:t in n?n[t]=e[t]:n.setAttribute(t,e[t])})),Object.keys(e).filter(s).filter(u(t,e)).forEach((function(t){var o=t.toLowerCase().substring(2);n.addEventListener(o,e[t])}))}function h(n){if(n){for(var t=n.parent;!t.dom;)t=t.parent;var e=t.dom;"PLACEMENT"===n.effectTag&&null!=n.dom?e.appendChild(n.dom):"UPDATE"===n.effectTag&&null!=n.dom?f(n.dom,n.alternate.props,n.props):"DELETION"===n.effectTag&&g(n,e),h(n.child),h(n.sibling)}}function g(n,t){n.dom?t.removeChild(n.dom):g(n.child,t)}var b=null,m=null,y=null,v=null;function x(n){if(n.type instanceof Function?function(n){k=0,(w=n).hooks=[];var t=[n.type(n.props)];A(n,t)}(n):function(n){n.dom||(n.dom=function(n){var t="TEXT_ELEMENT"==n.type?document.createTextNode(""):document.createElement(n.type);return f(t,{},n.props||{}),t}(n)),A(n,n.props.children)}(n),n.child)return n.child;for(var t=n;t;){if(t.sibling)return t.sibling;t=t.parent}}requestIdleCallback((function n(t){for(var e=!1;b&&!e;)b=x(b),e=t.timeRemaining()<1;!b&&y&&(v.forEach(h),h(y.child),m=y,y=null),requestIdleCallback(n)}));var w=null,k=null;function E(n){var t=w.alternate&&w.alternate.hooks&&w.alternate.hooks[k],e={state:t?t.state:n,queue:[]};return(t?t.queue:[]).forEach((function(n){e.state=n(e.state)})),w.hooks.push(e),k++,[e.state,function(n,t,o){e.queue.push(n),y={dom:m.dom,props:m.props,alternate:m},b=y,v=[]}]}function A(n,t){for(var e=0,o=n.alternate&&n.alternate.child,r=null;e<t.length||null!=o;){var i=t[e],l=null,a=o&&i&&i.type==o.type;a&&(l={type:o.type,props:i.props,dom:o.dom,parent:n,alternate:o,effectTag:"UPDATE"}),i&&!a&&(l={type:i.type,props:i.props,dom:null,parent:n,alternate:null,effectTag:"PLACEMENT"}),o&&!a&&(o.effectTag="DELETION",v.push(o)),o&&(o=o.sibling),0===e?n.child=l:i&&(r.sibling=l),r=l,e++}}function O(n){var t,e,r=this,i=(t=E(window.location.hash.slice(1)||"/"),e=2,function(n){if(Array.isArray(n))return n}(t)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var o,r,i,l,a=[],c=!0,s=!1;try{if(i=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;c=!1}else for(;!(c=(o=i.call(e)).done)&&(a.push(o.value),a.length!==t);c=!0);}catch(n){s=!0,r=n}finally{try{if(!c&&null!=e.return&&(l=e.return(),Object(l)!==l))return}finally{if(s)throw r}}return a}}(t,e)||function(n,t){if(n){if("string"==typeof n)return o(n,t);var e={}.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(n,t):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=i[0],a=i[1],c=function(){a((function(n){return window.location.hash.slice(1)||"/"}),!0,r),window.removeEventListener("hashchange",c)};window.addEventListener("hashchange",c);var s=n.routes.find((function(n){return n.path===l}));return s?s.component:"Not Found"}function C(n){return c("a",{href:"#".concat(n.to),onClick:function(t){t.preventDefault(),window.location.hash=n.to}},n.children[0])}var D=function(){return c("li",{"data-id":"3"},c("div",{class:"view"},c("input",{class:"toggle",type:"checkbox"}),c("label",null,"all"),c("button",{class:"destroy"})))},j=function(){return c("li",{"data-id":"3"},c("div",{class:"view"},c("input",{class:"toggle",type:"checkbox"}),c("label",null,"active"),c("button",{class:"destroy"})))},T=function(){return c("li",{"data-id":"6",class:"completed"},c("div",{class:"view"},c("input",{class:"toggle",type:"checkbox"}),c("label",null,"completed"),c("button",{class:"destroy"})))};function S(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=Array(t);e<t;e++)o[e]=n[e];return o}function L(){var n,t,e=(n=E(1),t=2,function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var o,r,i,l,a=[],c=!0,s=!1;try{if(i=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;c=!1}else for(;!(c=(o=i.call(e)).done)&&(a.push(o.value),a.length!==t);c=!0);}catch(n){s=!0,r=n}finally{try{if(!c&&null!=e.return&&(l=e.return(),Object(l)!==l))return}finally{if(s)throw r}}return a}}(n,t)||function(n,t){if(n){if("string"==typeof n)return S(n,t);var e={}.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?S(n,t):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=e[0],r=e[1];return c("h1",{onClick:function(){return r((function(n){return n+1}))}},"Count: ",o)}var P,z,I=e(72),M=e.n(I),N=e(825),F=e.n(N),U=e(659),R=e.n(U),q=e(56),_=e.n(q),H=e(540),$=e.n(H),B=e(113),V=e.n(B),W=e(792),X={};X.styleTagTransform=V(),X.setAttributes=_(),X.insert=R().bind(null,"head"),X.domAPI=F(),X.insertStyleElement=$(),M()(W.A,X),W.A&&W.A.locals&&W.A.locals,z=document.getElementById("root"),"function"==typeof(P=function(){var n=[{path:"/",component:c(D,null)},{path:"/all",component:c(D,null)},{path:"/active",component:c(j,null)},{path:"/completed",component:c(T,null)}];return c("body",null,c("section",{class:"todoapp",amogus:"su ema"},c("header",{class:"header"},c("h1",null,"todos"),c("input",{class:"new-todo",placeholder:"What needs to be done?",autofocus:!0})),c("main",{class:"main"},c(L,null),c("div",{class:"toggle-all-container"},c("input",{class:"toggle-all",type:"checkbox"}),c("label",{class:"toggle-all-label",for:"toggle-all"},"Mark all as complete")),c("ul",{class:"todo-list",id:"todo-list"},c(O,{routes:n}))),c("footer",{class:"footer"},c("span",{class:"todo-count"},c("strong",null)),c("ul",{class:"filters",style:"display: block"},c("li",null,c(C,{to:"/"},"HomeLink"),c(C,{to:"/completed"},"CompletedLink"),c("a",{href:"#/all"},"All")),c("li",null,c("a",{href:"#/active"},"Active")),c("li",null,c("a",{href:"#/completed"},"Completed"))),c("button",{class:"clear-completed",style:"display: none"},"Clear completed"))),c("footer",{class:"info"},c("p",null,"Double-click to edit a todo"),c("p",null,"Created by Rain, Lukas and Anti"),c("p",null,"Part of ",c("a",{href:"http://todomvc.com"},"TodoMVC"))))})&&(P=P()),v=[],b=y={dom:z,props:{children:[P]},alternate:m}})();