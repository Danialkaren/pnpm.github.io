"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3362],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||p;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,i=new Array(p);i[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<p;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2933:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(2962),o=t(2742),p=(t(9496),t(9613)),i=["components"],a={id:"prune",title:"pnpm prune"},l=void 0,c={unversionedId:"cli/prune",id:"cli/prune",title:"pnpm prune",description:"Supprime les packages inutiles.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/cli/prune.md",sourceDirName:"cli",slug:"/cli/prune",permalink:"/fr/next/cli/prune",draft:!1,editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"current",frontMatter:{id:"prune",title:"pnpm prune"},sidebar:"docs",previous:{title:"pnpm rebuild",permalink:"/fr/next/cli/rebuild"},next:{title:"pnpm fetch",permalink:"/fr/next/cli/fetch"}},u={},s=[{value:"Options",id:"options",level:2},{value:"--prod",id:"--prod",level:3},{value:"--no-optional",id:"--no-optional",level:3}],d={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Supprime les packages inutiles."),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"--prod"},"--prod"),(0,p.kt)("p",null,"Supprime les packages sp\xe9cifi\xe9s dans ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,p.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,p.kt)("p",null,"Supprime les packages sp\xe9cifi\xe9s dans ",(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,p.kt)("admonition",{type:"warning"},(0,p.kt)("p",{parentName:"admonition"},"La commande prune ne prend actuellement pas en charge l'ex\xe9cution r\xe9cursive sur un monorepo. Pour installer uniquement les d\xe9pendances de production dans un monorepo, les dossiers ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," peuvent \xeatre supprim\xe9s puis r\xe9install\xe9s avec ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install --prod"),".")))}m.isMDXComponent=!0}}]);