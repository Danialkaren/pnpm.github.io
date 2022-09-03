"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1063],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),a=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=a(n),f=i,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,p(p({ref:t},s),{},{components:n})):r.createElement(m,p({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,p=new Array(o);p[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,p[1]=c;for(var a=2;a<o;a++)p[a]=n[a];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var r=n(2081),i=n(4604),o=(n(9496),n(9613)),p=["components"],c={id:"scripts",title:"Scripts"},l=void 0,a={unversionedId:"scripts",id:"version-7.x/scripts",title:"Scripts",description:"How pnpm handles the scripts field of package.json.",source:"@site/versioned_docs/version-7.x/scripts.md",sourceDirName:".",slug:"/scripts",permalink:"/scripts",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/scripts.md",tags:[],version:"7.x",frontMatter:{id:"scripts",title:"Scripts"},sidebar:"version-7.x/docs",previous:{title:"Filtering",permalink:"/filtering"},next:{title:"pnpm add <pkg>",permalink:"/cli/add"}},s={},d=[{value:"Lifecycle Scripts",id:"lifecycle-scripts",level:2},{value:"<code>pnpm:devPreinstall</code>",id:"pnpmdevpreinstall",level:3}],u={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"How pnpm handles the ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," field of ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("h2",{id:"lifecycle-scripts"},"Lifecycle Scripts"),(0,o.kt)("h3",{id:"pnpmdevpreinstall"},(0,o.kt)("inlineCode",{parentName:"h3"},"pnpm:devPreinstall")),(0,o.kt)("p",null,"Runs only on local ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,o.kt)("p",null,"Runs before any dependency is installed."),(0,o.kt)("p",null,"This script is executed only when set in the root project's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."))}f.isMDXComponent=!0}}]);