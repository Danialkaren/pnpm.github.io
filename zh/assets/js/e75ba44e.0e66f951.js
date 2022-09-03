"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2592],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(9496);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=i(t),f=p,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||l;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function f(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var l=t.length,o=new Array(l);o[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:p,o[1]=a;for(var i=2;i<l;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4010:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=t(2081),p=t(4604),l=(t(9496),t(9613)),o=["components"],a={id:"fetch",title:"pnpm fetch"},c=void 0,i={unversionedId:"cli/fetch",id:"cli/fetch",title:"pnpm fetch",description:"\u5c06 lockfile \u4e2d\u5217\u51fa\u5305\u4e0b\u8f7d\u5230\u865a\u62df\u5b58\u50a8\u4e2d\uff0c\u5305\u6e05\u5355\u88ab\u5ffd\u7565\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/fetch.md",sourceDirName:"cli",slug:"/cli/fetch",permalink:"/zh/next/cli/fetch",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"fetch",title:"pnpm fetch"},sidebar:"docs",previous:{title:"pnpm prune",permalink:"/zh/next/cli/prune"},next:{title:"pnpm install-test",permalink:"/zh/next/cli/install-test"}},s={},d=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"--dev",id:"--dev",level:3},{value:"--prod",id:"--prod",level:3}],u={toc:d};function f(e){var n=e.components,t=(0,p.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5c06 lockfile \u4e2d\u5217\u51fa\u5305\u4e0b\u8f7d\u5230\u865a\u62df\u5b58\u50a8\u4e2d\uff0c\u5305\u6e05\u5355\u88ab\u5ffd\u7565\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,l.kt)("p",null,"\u6b64\u547d\u4ee4\u4e13\u95e8\u7528\u4e8e\u52a0\u901f\u6784\u5efa docker \u6620\u50cf\u3002"),(0,l.kt)("p",null,"\u60a8\u53ef\u80fd\u5df2\u7ecf\u9605\u8bfb\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/nodejs-docker-webapp/"},"\u5b98\u65b9\u6307\u5357")," \u4e3a Node.js \u5e94\u7528\u7a0b\u5e8f\u7f16\u5199 Dockerfile\uff0c\u5982\u679c\u60a8\u8fd8\u6ca1\u6709\u9605\u8bfb\u5b83\uff0c\u60a8\u53ef\u80fd\u60f3\u5148\u9605\u8bfb\u5b83\u3002"),(0,l.kt)("p",null,"\u4ece\u8be5\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u5b66\u4f1a\u5982\u4f55\u4e3a\u4f7f\u7528 pnpm \u7684\u9879\u76ee\u7f16\u5199\u4f18\u5316\u7684 Dockerfile \uff0c\u8fd9\u5c06\u7c7b\u4f3c\u4e8e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,l.kt)("p",null,"\u53ea\u8981\u4e0d\u66f4\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},".npmrc"),"\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),"\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),"\uff0c Docker \u6784\u5efa\u7f13\u5b58\u4ecd\u7136\u6709\u6548\u81f3 ",(0,l.kt)("inlineCode",{parentName:"p"},"RUN pnpm install --frozen-lockfile --prod"),"\uff0c\u8fd9\u5728\u6784\u5efa Docker \u6620\u50cf\u65f6\u82b1\u8d39\u4e86\u5927\u90e8\u5206\u65f6\u95f4 \u3002"),(0,l.kt)("p",null,"\u4f46\u662f\uff0c\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," \u7684\u4fee\u6539\u53ef\u80fd\u6bd4\u6211\u4eec\u9884\u671f\u7684 \u9891\u7e41\u5f97\u591a\uff0c\u56e0\u4e3a\u5b83\u4e0d\u4ec5\u5305\u542b\u4f9d\u8d56\u5173\u7cfb\uff0c\u800c\u4e14\u8fd8\u53ef\u80fd \u5305\u542b\u7248\u672c\u53f7\uff0c\u811a\u672c\u548c\u5176\u4ed6\u5de5\u5177\u7684\u4efb\u610f\u914d\u7f6e\u3002"),(0,l.kt)("p",null,"\u7ef4\u62a4\u4e00\u4e2a\u6784\u5efa monorepo \u9879\u76ee\u7684 Dockerfile \u4e5f\u5f88\u56f0\u96be\uff0c\u5b83\u53ef\u80fd\u770b\u8d77\u6765\u50cf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# Files required by pnpm install\nCOPY .npmrc package.json pnpm-lock.yaml .pnpmfile.cjs ./\n\n# for each sub-package, we have to add one extra step to copy its manifest\n# to the right place, as docker have no way to filter out only package.json with\n# single instruction\nCOPY packages/foo/package.json packages/foo/\nCOPY packages/bar/package.json packages/bar/\n\nRUN pnpm install --frozen-lockfile --prod\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n\n')),(0,l.kt)("p",null,"\u5982\u60a8\u6240\u89c1\uff0c\u5f53\u60a8\u6dfb\u52a0\u6216\u5220\u9664\u5b50\u5305\u65f6\uff0c\u5fc5\u987b\u66f4\u65b0 Dockerfile\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm fetch")," \u5c06\u901a\u8fc7\u63d0\u4f9b\u4ec5\u4ece lockfile \u4e2d\u4e0b\u8f7d\u5305\u81f3\u865a\u62df\u5b58\u50a8\u4e2d\u6765\u5b8c\u7f8e\u5730\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:14\n\nRUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm\n\n# pnpm fetch does require only lockfile\nCOPY pnpm-lock.yaml ./\n\nRUN pnpm fetch --prod\n\n\nADD . ./\nRUN pnpm install -r --offline --prod\n\n\nEXPOSE 8080\nCMD [ "node", "server.js" ]\n')),(0,l.kt)("p",null,"\u5b83\u65e2\u9002\u7528\u4e8e\u7b80\u5355\u9879\u76ee\uff0c\u4e5f\u9002\u7528\u4e8e monorepo \u9879\u76ee\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"--offline")," \u5f3a\u5236 pnpm \u4e0d\u4e0epackage registry\u901a\u4fe1\uff0c\u56e0\u4e3a\u6240\u6709\u9700\u8981\u7684\u5305\u90fd\u5e94\u8be5\u5df2\u7ecf\u5b58\u5728\u4e8e\u865a\u62df\u5b58\u50a8\u4e2d\u3002"),(0,l.kt)("p",null,"\u53ea\u8981 lockfile \u6ca1\u6709\u6539\u53d8\uff0c\u6784\u5efa\u7f13\u5b58\u4e00\u76f4\u6709\u6548\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"RUN pnpm install -r --offline --prod")," \u8fd9\u4e2a layer\uff0c\u8fd9\u5c06\u4e3a\u60a8\u8282\u7701\u5f88\u591a\u65f6\u95f4\u3002"),(0,l.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,l.kt)("h3",{id:"--dev"},"--dev"),(0,l.kt)("p",null,"\u53ea\u4f1a\u83b7\u53d6\u5f00\u53d1\u5305"),(0,l.kt)("h3",{id:"--prod"},"--prod"),(0,l.kt)("p",null,"\u4e0d\u4f1a\u83b7\u53d6\u5f00\u53d1\u5305"))}f.isMDXComponent=!0}}]);