function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",i=NaN,r="[object Symbol]",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,p=s||d||Function("return this")(),v=Object.prototype.toString,b=Math.max,y=Math.min,g=function(){return p.Date.now()};function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&v.call(t)==r}(t))return i;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var n=a.test(t);return n||c.test(t)?l(t.slice(2),n?2:8):f.test(t)?i:+t}e=function(t,e,n){var i,r,u,f,a,c,l=0,s=!1,d=!1,p=!0;if("function"!=typeof t)throw new TypeError(o);function v(e){var n=i,o=r;return i=r=void 0,l=e,f=t.apply(o,n)}function j(t){var n=t-c;return void 0===c||n>=e||n<0||d&&t-l>=u}function T(){var t=g();if(j(t))return w(t);a=setTimeout(T,function(t){var n=e-(t-c);return d?y(n,u-(t-l)):n}(t))}function w(t){return a=void 0,p&&i?v(t):(i=r=void 0,f)}function O(){var t=g(),n=j(t);if(i=arguments,r=this,c=t,n){if(void 0===a)return function(t){return l=t,a=setTimeout(T,e),s?v(t):f}(c);if(d)return a=setTimeout(T,e),v(c)}return void 0===a&&(a=setTimeout(T,e)),f}return e=h(e)||0,m(n)&&(s=!!n.leading,u=(d="maxWait"in n)?b(h(n.maxWait)||0,e):u,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=r=a=void 0},O.flush=function(){return void 0===a?f:w(g())},O};document.querySelector("#search-box").addEventListener("input",t(e)((function(t){console.log(t.target.value),count=t.target.value,fetch(`https://restcountries.com/v2/name/${count}?fields=name,capital,population,flags,languages`).then((t=>t.json())).then((t=>{console.log(t)}))}),2300));
//# sourceMappingURL=index.1724231e.js.map
