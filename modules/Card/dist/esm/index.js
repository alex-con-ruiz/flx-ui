import r,{createContext as e,useContext as n}from"react";var o=function(){return o=Object.assign||function(r){for(var e,n=1,o=arguments.length;n<o;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r},o.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var a=e({paddingSize:16});function t(r,e){void 0===e&&(e={});var n=e.insertAt;if(r&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=r:a.appendChild(document.createTextNode(r))}}t('@import url("../../common/style.css");\n\n.flx-card {\n    display: block;\n    border: 1px solid var(--border);\n    background-color: var(--background);\n    width: 100%;\n    height: auto;\n    border-radius: var(--border-rounded);\n    margin-bottom: var(--defautl-margin);\n    max-width: var(--max-width);\n  \n    h1{\n        font-size: var(--big-title);\n    }\n\n    h2{\n        font-size: var(--title);\n        margin: 0;\n    }\n\n    p, span, a {\n        font-size: var(--paragraph);\n    }\n    \n    .flx-card__content{\n        padding: var(--defautl-padding);\n    }\n}\n\n.flx-card__shadow--flat{\n    box-shadow: 0 1px 2px 0 #0000001f;\n}\n\n.flx-card__shadow--outline{\n    box-shadow: 0 0 0 0 #0000001f;\n}\n\n.flx-card__shadow--rised{\n    box-shadow: 3px 5px 10px 0 #0000001f;\n}');var d=function(e){var n,t=e.children,d=e.id,l=e.customClassName,c=e.borderAccent,i=e.paddingSize,s=e.shadow,f=void 0===s?"flat":s,p={};null===(n=r.Children.map(t,(function(r){var e;return(e={})["".concat(r&&(null==r?void 0:r.type.name))]=r,e})))||void 0===n||n.forEach((function(r){p=o(o({},p),r)}));var x="flx-card__shadow--".concat(f),u=l||"",_=p.CardHeader,b=p.CardContent,v=p.CardFooter;return r.createElement(a.Provider,{value:{paddingSize:i,borderAccent:c,siblings:{header:!!_,footer:!!v}}},r.createElement("article",{id:d,className:"flx-card ".concat(u," ").concat(x)},_||null,b,v||null))};t(".flx-card__border--info,\n.flx-card__border--success,\n.flx-card__border--warning,\n.flx-card__border--error {\n    border-left: 6px solid;\n    transform: translateX(-1px);\n    border-radius: 6px;\n}\n\n.flx-card__border--header-sibling {\n    border-top-left-radius: 0;\n}\n\n.flx-card__border--footer-sibling {\n    border-bottom-left-radius: 0;\n}\n\n.flx-card__border--info { border-left-color: var(--info-color); }\n\n.flx-card__border--success { border-left-color: var(--success-color); }\n\n.flx-card__border--warning { border-left-color: var(--warning-color); }\n\n.flx-card__border--error { border-left-color: var(--error-color); }\n");var l=function(e){var o=e.children,t=n(a),d=t.paddingSize,l=t.borderAccent,c=t.siblings,i="".concat((null==c?void 0:c.header)?"flx-card__border--header-sibling":""," ").concat((null==c?void 0:c.footer)?"flx-card__border--footer-sibling":""),s="flx-card__border--".concat(l," ").concat(i);return r.createElement("div",{className:"flx-card__content ".concat(s),style:{padding:"".concat(d||0===d?"".concat(d,"px"):"")}},o)};t("\n.flx-card__header{\n    padding: 16px;\n    border-bottom: 1px solid var(--border);\n}");var c=function(e){var o=e.children,t=e.title,d=n(a).paddingSize;return r.createElement("div",{className:"flx-card__header",style:{padding:"".concat(d||0===d?"".concat(d,"px"):"")}},r.createElement("h2",null,t),o)};t(".flx-card__footer{\n    padding: 16px;\n    border-top: 1px solid var(--border);\n\n    .flx-card__footer--link{\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        text-decoration: none;\n        font-weight: bold;\n        color: var(--accent);\n    }\n}\n\n.flx-card__footer--hover:hover{\n    background-color: var(--accent10);\n    cursor: pointer;\n    transition: all .3s ease-in-out;\n}");var i=function(e){var o,t=e.children,d=e.link,l=e.route,c=n(a).paddingSize;if(d){var i=d.href,s=d.text,f=d.isBlank;o=r.createElement("a",{className:"flx-card__footer--link",href:i,target:f?"_blank":"_self",rel:"noopener noreferrer"},s,r.createElement("svg",{width:"25px",height:"25px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z",fill:"currentColor"})))}else o=l?r.createElement("div",null,r.createElement("span",null,l)):null;return r.createElement("div",{className:"flx-card__footer ".concat(d||l?"flx-card__footer--hover":""),style:{padding:"".concat(c||0===c?"".concat(c,"px"):"")}},!t&&o,!d&&!l&&t)};export{d as Card,l as CardContent,i as CardFooter,c as CardHeader};
//# sourceMappingURL=index.js.map
