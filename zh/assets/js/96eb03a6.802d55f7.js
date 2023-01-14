"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[574],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(n),m=i,f=s["".concat(o,".").concat(m)]||s[m]||d[m]||p;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,a=new Array(p);a[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<p;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=n(2962),i=n(2742),p=(n(9496),n(9613)),a=["components"],c={id:"patch",title:"pnpm patch <pkg>"},o=void 0,l={unversionedId:"cli/patch",id:"cli/patch",title:"pnpm patch <pkg>",description:"\u6dfb\u52a0\u4e8e\uff1av7.4.0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/patch.md",sourceDirName:"cli",slug:"/cli/patch",permalink:"/zh/next/cli/patch",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"patch",title:"pnpm patch <pkg>"},sidebar:"docs",previous:{title:"pnpm install-test",permalink:"/zh/next/cli/install-test"},next:{title:"pnpm patch-commit <path>",permalink:"/zh/next/cli/patch-commit"}},u={},d=[{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"--edit-dir &lt;dir&gt;",id:"--edit-dir-dir",level:3},{value:"--ignore-existing",id:"--ignore-existing",level:3}],s={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av7.4.0"),(0,p.kt)("p",null,"\u7ed9\u8f6f\u4ef6\u5305\u6dfb\u52a0\u8865\u4e01\uff08\u7075\u611f\u6765\u81ea\u4e8e Yarn \u4e2d\u4e00\u4e2a\u7c7b\u4f3c\u7684\u547d\u4ee4\uff09\u3002"),(0,p.kt)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u5c06\u6307\u5b9a\u7684\u8f6f\u4ef6\u5305\u63d0\u53d6\u5230\u4e00\u4e2a\u53ef\u4ee5\u968f\u610f\u7f16\u8f91\u7684\u4e34\u65f6\u76ee\u5f55\u4e2d\u3002"),(0,p.kt)("p",null,"\u5b8c\u6210\u4fee\u6539\u540e, \u8fd0\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm patch-commit <path>")," (",(0,p.kt)("inlineCode",{parentName:"p"},"<path>")," \u662f\u4e4b\u524d\u63d0\u53d6\u7684\u4e34\u65f6\u76ee\u5f55) \u4ee5\u751f\u6210\u4e00\u4e2a\u8865\u4e01\u6587\u4ef6\uff0c\u5e76\u63d0\u4f9b ",(0,p.kt)("a",{parentName:"p",href:"/zh/next/package_json#pnpmpatcheddependencies"},(0,p.kt)("inlineCode",{parentName:"a"},"patchedDependencies"))," \u5b57\u6bb5\u6ce8\u518c\u5230\u4f60\u7684\u9879\u76ee\u4e2d\u3002"),(0,p.kt)("p",null,"\u4f7f\u7528\u65b9\u6cd5\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm patch <pkg name>@<version>\n")),(0,p.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/0GjLqRGRbcY",title:"pnpm patch \u547d\u4ee4\u793a\u4f8b",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,p.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,p.kt)("h3",{id:"--edit-dir-dir"},"--edit-dir ","<","dir>"),(0,p.kt)("p",null,"Added in: v7.11.0"),(0,p.kt)("p",null,"\u9700\u8981\u6253\u8865\u4e01\u7684\u5305\u4f1a\u88ab\u89e3\u538b\u5230\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u3002"),(0,p.kt)("h3",{id:"--ignore-existing"},"--ignore-existing"),(0,p.kt)("p",null,"Added in: v7.25.0"),(0,p.kt)("p",null,"Ignore existing patch files when patching."))}m.isMDXComponent=!0}}]);