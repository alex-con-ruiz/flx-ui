// cardBase/index.tsx
import React from "react";

// context.ts
import { createContext } from "react";
var context = {
  paddingSize: 16
};
var styleContext = createContext(context);

// cardBase/index.tsx
var Card = ({ children, id, customClassName, borderAccent, paddingSize, shadow = "flat" }) => {
  var _a;
  let childToRender = {};
  (_a = React.Children.map(children, (child) => ({ [`${child && (child == null ? void 0 : child.type["name"])}`]: child }))) == null ? void 0 : _a.forEach((child) => {
    childToRender = { ...childToRender, ...child };
  });
  const shadowClass = `flx-card__shadow--${shadow}`;
  const customClass = customClassName ? customClassName : "";
  const { CardHeader: CardHeader2, CardContent: CardContent2, CardFooter: CardFooter2 } = childToRender;
  return /* @__PURE__ */ React.createElement(styleContext.Provider, { value: {
    paddingSize,
    borderAccent,
    siblings: {
      header: CardHeader2 ? true : false,
      // need the bolean not the ReactNode
      footer: CardFooter2 ? true : false
      // need the bolean not the ReactNode
    }
  } }, /* @__PURE__ */ React.createElement(
    "article",
    {
      id,
      className: `flx-card ${customClass} ${shadowClass}`
    },
    CardHeader2 || null,
    CardContent2,
    CardFooter2 || null
  ));
};

// cardContent/index.tsx
import React2, { useContext } from "react";
var CardContent = ({ children }) => {
  const { paddingSize, borderAccent, siblings } = useContext(styleContext);
  const siblingClass = `${(siblings == null ? void 0 : siblings.header) ? "flx-card__border--header-sibling" : ""} ${(siblings == null ? void 0 : siblings.footer) ? "flx-card__border--footer-sibling" : ""}`;
  const borderClass = `flx-card__border--${borderAccent} ${siblingClass}`;
  return /* @__PURE__ */ React2.createElement(
    "div",
    {
      className: `flx-card__content ${borderClass}`,
      style: { padding: `${paddingSize || paddingSize === 0 ? `${paddingSize}px` : ""}` }
    },
    children
  );
};

// cardHeader/index.tsx
import React3, { useContext as useContext2 } from "react";
var CardHeader = ({ children, title }) => {
  const { paddingSize } = useContext2(styleContext);
  return /* @__PURE__ */ React3.createElement(
    "div",
    {
      className: "flx-card__header",
      style: { padding: `${paddingSize || paddingSize === 0 ? `${paddingSize}px` : ""}` }
    },
    /* @__PURE__ */ React3.createElement("h2", null, title),
    children
  );
};

// cardFooter/index.tsx
import React4, { useContext as useContext3 } from "react";
var CardFooter = ({ children, link, route }) => {
  const { paddingSize } = useContext3(styleContext);
  let templateToRender;
  if (link) {
    const { href, text, isBlank } = link;
    templateToRender = /* @__PURE__ */ React4.createElement("a", { className: "flx-card__footer--link", href, target: isBlank ? "_blank" : "_self", rel: "noopener noreferrer" }, text, /* @__PURE__ */ React4.createElement("svg", { width: "25px", height: "25px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ React4.createElement("path", { d: "M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z", fill: "currentColor" })));
  } else if (route) {
    templateToRender = /* @__PURE__ */ React4.createElement("div", null, /* @__PURE__ */ React4.createElement("span", null, route));
  } else {
    templateToRender = null;
  }
  return /* @__PURE__ */ React4.createElement(
    "div",
    {
      className: `flx-card__footer ${link || route ? "flx-card__footer--hover" : ""}`,
      style: { padding: `${paddingSize || paddingSize === 0 ? `${paddingSize}px` : ""}` }
    },
    !children && templateToRender,
    !link && !route && children
  );
};
export {
  Card,
  CardContent,
  CardFooter,
  CardHeader
};
