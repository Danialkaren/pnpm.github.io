"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1356],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=n(2081),i=n(4604),o=(n(9496),n(9613)),a=["components"],l={id:"limitations",title:"Limitations"},s=void 0,p={unversionedId:"limitations",id:"version-6.x/limitations",title:"Limitations",description:"1. npm-shrinkwrap.json and package-lock.json are ignored. Unlike pnpm, npm can install the same name@version multiple times and with different sets of dependencies. npm's lockfile is designed to reflect the flat node_modules layout, however, as pnpm creates an isolated layout by default, it cannot respect npm's lockfile format. See pnpm import if you wish to convert a lockfile to pnpm's format, though.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-6.x/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/id/6.x/limitations",draft:!1,editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"6.x",frontMatter:{id:"limitations",title:"Limitations"},sidebar:"version-6.x/docs",previous:{title:"Logos",permalink:"/id/6.x/logos"},next:{title:"Symlinked `node_modules` structure",permalink:"/id/6.x/symlinked-node-modules-structure"}},c={},m=[],u={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"package-lock.json")," are ignored. Unlike pnpm, npm can install the same ",(0,o.kt)("inlineCode",{parentName:"li"},"name@version")," multiple times and with different sets of dependencies. npm's lockfile is designed to reflect the flat ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules")," layout, however, as pnpm creates an isolated layout by default, it cannot respect npm's lockfile format. See ",(0,o.kt)("a",{parentName:"li",href:"/id/6.x/cli/import"},"pnpm import")," if you wish to convert a lockfile to pnpm's format, though."),(0,o.kt)("li",{parentName:"ol"},"Binstubs (files in ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules/.bin"),") are always shell files, not symlinks to JS files. The shell files are created to help pluggable CLI apps in finding their plugins in the unusual ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules")," structure. This is very rarely an issue and if you expect the file to be a JS file, reference the original file directly instead, as described in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/736"},"#736"),".")),(0,o.kt)("p",null,"Got an idea for workarounds for these issues? ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"Share them.")))}d.isMDXComponent=!0}}]);