"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3492],{9613:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(9496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return t?n.createElement(f,p(p({ref:r},l),{},{components:t})):n.createElement(f,p({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=u;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var s=2;s<a;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6909:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var n=t(2081),o=t(4604),a=(t(9496),t(9613)),p=["components"],c={id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},i=void 0,s={unversionedId:"pnpm-workspace_yaml",id:"version-6.x/pnpm-workspace_yaml",title:"pnpm-workspace.yaml",description:"O arquivo pnpm-workspace.yaml define a raiz do workspace  e possibilita que voc\xea inclua / exclua diret\xf3rios do workspace. Por padr\xe3o, todos os pacotes de todos os subdiret\xf3rios est\xe3o inclu\xeddos.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-6.x/pnpm-workspace_yaml.md",sourceDirName:".",slug:"/pnpm-workspace_yaml",permalink:"/pt/6.x/pnpm-workspace_yaml",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"6.x",frontMatter:{id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},sidebar:"version-6.x/docs",previous:{title:".npmrc",permalink:"/pt/6.x/npmrc"},next:{title:".pnpmfile.cjs",permalink:"/pt/6.x/pnpmfile"}},l={},m=[],u={toc:m};function d(e){var r=e.components,t=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"O arquivo ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," define a raiz do workspace ","[][]"," e possibilita que voc\xea inclua / exclua diret\xf3rios do workspace. Por padr\xe3o, todos os pacotes de todos os subdiret\xf3rios est\xe3o inclu\xeddos."),(0,a.kt)("p",null,"Por exemplo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pnpm-workspace.yaml"',title:'"pnpm-workspace.yaml"'},"packages:\n  # all packages in subdirs of packages/ and components/\n  - 'packages/**'\n  - 'components/**'\n  # exclude packages that are inside test directories\n  - '!**/test/**'\n")),(0,a.kt)("p",null,"O pacote raiz \xe9 sempre inclu\xeddo, mesmo quando os curingas de localiza\xe7\xe3o customizado s\xe3o usados."))}d.isMDXComponent=!0}}]);