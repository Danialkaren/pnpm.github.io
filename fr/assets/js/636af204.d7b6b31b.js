"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8545],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(i,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3402:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var n=r(2081),o=r(4604),a=(r(9496),r(9613)),c=["components"],p={id:"create",title:"Cr\xe9ation pnpm"},i=void 0,l={unversionedId:"cli/create",id:"cli/create",title:"Cr\xe9ation pnpm",description:"Cr\xe9ez un projet \xe0 partir d\u2019un kit de d\xe9marrage create- ou @foo/create-.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/cli/create.md",sourceDirName:"cli",slug:"/cli/create",permalink:"/fr/next/cli/create",draft:!1,editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"current",frontMatter:{id:"create",title:"Cr\xe9ation pnpm"},sidebar:"docs",previous:{title:"pnpm dlx",permalink:"/fr/next/cli/dlx"},next:{title:"pnpm start",permalink:"/fr/next/cli/start"}},u={},s=[{value:"Exemples",id:"exemples",level:2}],m={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cr\xe9ez un projet \xe0 partir d\u2019un kit de d\xe9marrage ",(0,a.kt)("inlineCode",{parentName:"p"},"create-*")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"@foo/create-*"),"."),(0,a.kt)("h2",{id:"exemples"},"Exemples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm create react-app my-app\n")))}f.isMDXComponent=!0}}]);