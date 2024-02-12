"use strict";var r=require("react"),e=function(){return e=Object.assign||function(r){for(var e,n=1,o=arguments.length;n<o;n++)for(var t in e=arguments[n])Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r},e.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var n=r.createContext({paddingSize:16});function o(r,e){void 0===e&&(e={});var n=e.insertAt;if(r&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css","top"===n&&o.firstChild?o.insertBefore(t,o.firstChild):o.appendChild(t),t.styleSheet?t.styleSheet.cssText=r:t.appendChild(document.createTextNode(r))}}o('@import url("../../common/style.css");\n\n.flx-card {\n    display: block;\n    border: 1px solid var(--border);\n    background-color: var(--background);\n    width: 100%;\n    height: auto;\n    border-radius: var(--border-rounded);\n    margin-bottom: var(--defautl-margin);\n    max-width: var(--max-width);\n  \n    h1{\n        font-size: var(--big-title);\n    }\n\n    h2{\n        font-size: var(--title);\n        margin: 0;\n    }\n\n    p, span, a {\n        font-size: var(--paragraph);\n    }\n    \n    .flx-card__content{\n        padding: var(--defautl-padding);\n    }\n}\n\n.flx-card__shadow--flat{\n    box-shadow: 0 1px 2px 0 #0000001f;\n}\n\n.flx-card__shadow--outline{\n    box-shadow: 0 0 0 0 #0000001f;\n}\n\n.flx-card__shadow--rised{\n    box-shadow: 3px 5px 10px 0 #0000001f;\n}');o(".flx-card__border--info,\n.flx-card__border--success,\n.flx-card__border--warning,\n.flx-card__border--error {\n    border-left: 6px solid;\n    transform: translateX(-1px);\n    border-radius: 6px;\n}\n\n.flx-card__border--header-sibling {\n    border-top-left-radius: 0;\n}\n\n.flx-card__border--footer-sibling {\n    border-bottom-left-radius: 0;\n}\n\n.flx-card__border--info { border-left-color: var(--info-color); }\n\n.flx-card__border--success { border-left-color: var(--success-color); }\n\n.flx-card__border--warning { border-left-color: var(--warning-color); }\n\n.flx-card__border--error { border-left-color: var(--error-color); }\n");o("\n.flx-card__header{\n    padding: 16px;\n    border-bottom: 1px solid var(--border);\n}");o(".flx-card__footer{\n    padding: 16px;\n    border-top: 1px solid var(--border);\n\n    .flx-card__footer--link{\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        text-decoration: none;\n        font-weight: bold;\n        color: var(--accent);\n    }\n}\n\n.flx-card__footer--hover:hover{\n    background-color: var(--accent10);\n    cursor: pointer;\n    transition: all .3s ease-in-out;\n}");exports.Card=function(o){var t,a=o.children,d=o.id,c=o.customClassName,l=o.borderAccent,i=o.paddingSize,s=o.shadow,f=void 0===s?"flat":s,p={};null===(t=r.Children.map(a,(function(r){var e;return(e={})["".concat(r&&(null==r?void 0:r.type.name))]=r,e})))||void 0===t||t.forEach((function(r){p=e(e({},p),r)}));var x="flx-card__shadow--".concat(f),u=c||"",_=p.CardHeader,b=p.CardContent,h=p.CardFooter;return r.createElement(n.Provider,{value:{paddingSize:i,borderAccent:l,siblings:{header:!!_,footer:!!h}}},r.createElement("article",{id:d,className:"flx-card ".concat(u," ").concat(x)},_||null,b,h||null))},exports.CardContent=function(e){var o=e.children,t=r.useContext(n),a=t.paddingSize,d=t.borderAccent,c=t.siblings,l="".concat((null==c?void 0:c.header)?"flx-card__border--header-sibling":""," ").concat((null==c?void 0:c.footer)?"flx-card__border--footer-sibling":""),i="flx-card__border--".concat(d," ").concat(l);return r.createElement("div",{className:"flx-card__content ".concat(i),style:{padding:"".concat(a||0===a?"".concat(a,"px"):"")}},o)},exports.CardFooter=function(e){var o,t=e.children,a=e.link,d=e.route,c=r.useContext(n).paddingSize;if(a){var l=a.href,i=a.text,s=a.isBlank;o=r.createElement("a",{className:"flx-card__footer--link",href:l,target:s?"_blank":"_self",rel:"noopener noreferrer"},i,r.createElement("svg",{width:"25px",height:"25px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z",fill:"currentColor"})))}else o=d?r.createElement("div",null,r.createElement("span",null,d)):null;return r.createElement("div",{className:"flx-card__footer ".concat(a||d?"flx-card__footer--hover":""),style:{padding:"".concat(c||0===c?"".concat(c,"px"):"")}},!t&&o,!a&&!d&&t)},exports.CardHeader=function(e){var o=e.children,t=e.title,a=r.useContext(n).paddingSize;return r.createElement("div",{className:"flx-card__header",style:{padding:"".concat(a||0===a?"".concat(a,"px"):"")}},r.createElement("h2",null,t),o)};
//# sourceMappingURL=index.js.map