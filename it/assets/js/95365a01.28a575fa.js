"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2692],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,v=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(2081),l=n(4604),o=(n(9496),n(9613)),i=["components"],a={id:"env",title:"pnpm env <cmd>"},p=void 0,c={unversionedId:"cli/env",id:"cli/env",title:"pnpm env <cmd>",description:"Gestisce l'ambiente Node.js.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/cli/env.md",sourceDirName:"cli",slug:"/cli/env",permalink:"/it/next/cli/env",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"env",title:"pnpm env <cmd>"},sidebar:"docs",previous:{title:"pnpm start",permalink:"/it/next/cli/start"},next:{title:"pnpm publish",permalink:"/it/next/cli/publish"}},u={},s=[{value:"Comandi",id:"comandi",level:2},{value:"use",id:"use",level:3},{value:"Opzioni",id:"opzioni",level:2},{value:"--global, -g",id:"--global--g",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Gestisce l'ambiente Node.js."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/84-MzN_0Cng",title:"La demo del comando patch pnpm",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"comandi"},"Comandi"),(0,o.kt)("h3",{id:"use"},"use"),(0,o.kt)("p",null,"Installa e usa la versione specificata di Node.js"),(0,o.kt)("p",null,"Installare la versione LTS di Node.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global lts\npnpm env use --global argon\n")),(0,o.kt)("p",null,"Installare Node.js v16:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global 16\n")),(0,o.kt)("p",null,"Installa una versione non definitiva di Node.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global nightly\npnpm env use --global rc\npnpm env use --global 16.0.0-rc.0\npnpm env use --global rc/14\n")),(0,o.kt)("p",null,"Installa l'ultima versione di Node.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global latest\n")),(0,o.kt)("h2",{id:"opzioni"},"Opzioni"),(0,o.kt)("h3",{id:"--global--g"},"--global, -g"),(0,o.kt)("p",null,"Le modifiche sono effettuate a livello di sistema."))}m.isMDXComponent=!0}}]);