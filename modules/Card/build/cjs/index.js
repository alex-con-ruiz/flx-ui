"use strict";var __create=Object.create;var __defProp=Object.defineProperty;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __getOwnPropNames=Object.getOwnPropertyNames;var __getProtoOf=Object.getPrototypeOf;var __hasOwnProp=Object.prototype.hasOwnProperty;var __export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:true})};var __copyProps=(to,from,except,desc)=>{if(from&&typeof from==="object"||typeof from==="function"){for(let key of __getOwnPropNames(from))if(!__hasOwnProp.call(to,key)&&key!==except)__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable})}return to};var __toESM=(mod,isNodeMode,target)=>(target=mod!=null?__create(__getProtoOf(mod)):{},__copyProps(isNodeMode||!mod||!mod.__esModule?__defProp(target,"default",{value:mod,enumerable:true}):target,mod));var __toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:true}),mod);var src_exports={};__export(src_exports,{Card:()=>Card,CardContent:()=>CardContent,CardFooter:()=>CardFooter,CardHeader:()=>CardHeader});module.exports=__toCommonJS(src_exports);var import_react2=__toESM(require("react"),1);var import_react=require("react");var context={paddingSize:16};var styleContext=(0,import_react.createContext)(context);var Card=({children,id,customClassName,borderAccent,paddingSize,shadow="flat"})=>{var _a;let childToRender={};(_a=import_react2.default.Children.map(children,child=>({[`${child&&(child==null?void 0:child.type["name"])}`]:child})))==null?void 0:_a.forEach(child=>{childToRender={...childToRender,...child}});const shadowClass=`flx-card__shadow--${shadow}`;const customClass=customClassName?customClassName:"";const{CardHeader:CardHeader2,CardContent:CardContent2,CardFooter:CardFooter2}=childToRender;return import_react2.default.createElement(styleContext.Provider,{value:{paddingSize,borderAccent,siblings:{header:CardHeader2?true:false,footer:CardFooter2?true:false}}},import_react2.default.createElement("article",{id,className:`flx-card ${customClass} ${shadowClass}`},CardHeader2||null,CardContent2,CardFooter2||null))};var import_react3=__toESM(require("react"),1);var CardContent=({children})=>{const{paddingSize,borderAccent,siblings}=(0,import_react3.useContext)(styleContext);const siblingClass=`${(siblings==null?void 0:siblings.header)?"flx-card__border--header-sibling":""} ${(siblings==null?void 0:siblings.footer)?"flx-card__border--footer-sibling":""}`;const borderClass=`flx-card__border--${borderAccent} ${siblingClass}`;return import_react3.default.createElement("div",{className:`flx-card__content ${borderClass}`,style:{padding:`${paddingSize||paddingSize===0?`${paddingSize}px`:""}`}},children)};var import_react4=__toESM(require("react"),1);var CardHeader=({children,title})=>{const{paddingSize}=(0,import_react4.useContext)(styleContext);return import_react4.default.createElement("div",{className:"flx-card__header",style:{padding:`${paddingSize||paddingSize===0?`${paddingSize}px`:""}`}},import_react4.default.createElement("h2",null,title),children)};var import_react5=__toESM(require("react"),1);var CardFooter=({children,link,route})=>{const{paddingSize}=(0,import_react5.useContext)(styleContext);let templateToRender;if(link){const{href,text,isBlank}=link;templateToRender=import_react5.default.createElement("a",{className:"flx-card__footer--link",href,target:isBlank?"_blank":"_self",rel:"noopener noreferrer"},text,import_react5.default.createElement("svg",{width:"25px",height:"25px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},import_react5.default.createElement("path",{d:"M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z",fill:"currentColor"})))}else if(route){templateToRender=import_react5.default.createElement("div",null,import_react5.default.createElement("span",null,route))}else{templateToRender=null}return import_react5.default.createElement("div",{className:`flx-card__footer ${link||route?"flx-card__footer--hover":""}`,style:{padding:`${paddingSize||paddingSize===0?`${paddingSize}px`:""}`}},!children&&templateToRender,!link&&!route&&children)};0&&(module.exports={Card,CardContent,CardFooter,CardHeader});