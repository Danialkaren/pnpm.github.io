"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1901],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(t),m=o,y=s["".concat(l,".").concat(m)]||s[m]||u[m]||p;return t?r.createElement(y,a(a({ref:n},d),{},{components:t})):r.createElement(y,a({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,a=new Array(p);a[0]=s;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<p;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4934:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(2081),o=t(4604),p=(t(9496),t(9613)),a=["components"],i={id:"deploy",title:"pnpm deploy"},l=void 0,c={unversionedId:"cli/deploy",id:"version-7.x/cli/deploy",title:"pnpm deploy",description:"\u6dfb\u52a0\u4e8e\uff1av7.4.0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-7.x/cli/deploy.md",sourceDirName:"cli",slug:"/cli/deploy",permalink:"/zh/cli/deploy",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"7.x",frontMatter:{id:"deploy",title:"pnpm deploy"},sidebar:"version-7.x/docs",previous:{title:"pnpm init",permalink:"/zh/cli/init"},next:{title:"package.json",permalink:"/zh/package_json"}},d={},u=[{value:"\u5df2\u90e8\u7f72\u9879\u76ee\u4e2d\u5305\u542b\u7684\u6587\u4ef6",id:"\u5df2\u90e8\u7f72\u9879\u76ee\u4e2d\u5305\u542b\u7684\u6587\u4ef6",level:2}],s={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av7.4.0"),(0,p.kt)("admonition",{type:"warning"},(0,p.kt)("p",{parentName:"admonition"},"\u8be5\u547d\u4ee4\u4ecd\u5728\u5b9e\u9a8c\u4e2d")),(0,p.kt)("p",null,"Deploy a package from a workspace."),(0,p.kt)("p",null,"\u4f7f\u7528\u65b9\u6cd5\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --filter=<deployed project name> deploy <target directory>\n")),(0,p.kt)("p",null,"In case you build your project before deployment, also use the ",(0,p.kt)("inlineCode",{parentName:"p"},"--prod")," option to skip ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies")," installation."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --filter=<deployed project name> --prod deploy <target directory>\n")),(0,p.kt)("p",null,"Usage in a docker image. After building everything in your monorepo, do this in a second image that uses your monorepo base image as a build context or in an additional build stage:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# syntax=docker/dockerfile:1.4\n\nFROM workspace as pruned\nRUN pnpm --filter <your package name> --prod deploy pruned\n\nFROM node:18-alpine\nWORKDIR /app\n\nENV NODE_ENV=production\n\nCOPY --from=pruned /app/pruned .\n\nENTRYPOINT ["node", "index.js"]\n')),(0,p.kt)("h2",{id:"\u5df2\u90e8\u7f72\u9879\u76ee\u4e2d\u5305\u542b\u7684\u6587\u4ef6"},"\u5df2\u90e8\u7f72\u9879\u76ee\u4e2d\u5305\u542b\u7684\u6587\u4ef6"),(0,p.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u90e8\u7f72\u671f\u95f4\u4f1a\u590d\u5236\u9879\u76ee\u7684\u6240\u6709\u6587\u4ef6\u3002 \u9879\u76ee\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," \u53ef\u80fd\u5305\u542b\u4e00\u4e2a\u201cfiles\u201d\u5b57\u6bb5\u6765\u5217\u51fa\u5e94\u8be5\u590d\u5236\u7684\u6587\u4ef6\u548c\u76ee\u5f55\u3002"))}m.isMDXComponent=!0}}]);