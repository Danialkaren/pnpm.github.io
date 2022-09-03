"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2475],{9613:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2806:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var n=r(2081),a=r(4604),o=(r(9496),r(9613)),i=["components"],p={id:"start",title:"pnpm start"},c=void 0,s={unversionedId:"cli/start",id:"version-6.x/cli/start",title:"pnpm start",description:"Aliases: run start",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/cli/start.md",sourceDirName:"cli",slug:"/cli/start",permalink:"/tr/6.x/cli/start",draft:!1,editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"6.x",frontMatter:{id:"start",title:"pnpm start"},sidebar:"version-6.x/docs",previous:{title:"pnpm create",permalink:"/tr/6.x/cli/create"},next:{title:"pnpm env <cmd>",permalink:"/tr/6.x/cli/env"}},l={},u=[],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aliases: ",(0,o.kt)("inlineCode",{parentName:"p"},"run start")),(0,o.kt)("p",null,"Runs an arbitrary command specified in the package's ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," property of its ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," object. If no ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," property is specified on the ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," object, it will attempt to run ",(0,o.kt)("inlineCode",{parentName:"p"},"node server.js")," as a default, failing if neither are present."),(0,o.kt)("p",null,"The intended usage of the property is to specify a command that starts your program."))}f.isMDXComponent=!0}}]);