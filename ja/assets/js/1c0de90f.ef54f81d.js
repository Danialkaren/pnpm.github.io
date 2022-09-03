"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1319],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),k=l,d=m["".concat(o,".").concat(k)]||m[k]||s[k]||a;return n?r.createElement(d,p(p({ref:t},u),{},{components:n})):r.createElement(d,p({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(2081),l=n(4604),a=(n(9496),n(9613)),p=["components"],i={id:"publish",title:"pnpm publish"},o=void 0,c={unversionedId:"cli/publish",id:"version-6.x/cli/publish",title:"pnpm publish",description:"npm \u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u516c\u958b\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-6.x/cli/publish.md",sourceDirName:"cli",slug:"/cli/publish",permalink:"/ja/6.x/cli/publish",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"6.x",frontMatter:{id:"publish",title:"pnpm publish"},sidebar:"version-6.x/docs",previous:{title:"pnpm env <cmd>",permalink:"/ja/6.x/cli/env"},next:{title:"pnpm pack",permalink:"/ja/6.x/cli/pack"}},u={},s=[{value:"Options",id:"options",level:2},{value:"--tag &lt;tag&gt;",id:"--tag-tag",level:3},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",level:3},{value:"git-checks",id:"git-checks",level:3},{value:"publish-branch",id:"publish-branch",level:3},{value:"--force",id:"--force",level:3},{value:"--report-summary",id:"--report-summary",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:s};function k(e){var t=e.components,n=(0,l.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"npm \u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u516c\u958b\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm [-r] publish [<tarball|folder>] [--tag <tag>]\n     [--access <public|restricted>]\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ja/6.x/workspaces"},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9"),"\u5185\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u516c\u958b\u3059\u308b\u3068\u304d\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u81ea\u4f53\u306b\u30e9\u30a4\u30bb\u30f3\u30b9\u30d5\u30a1\u30a4\u30eb\u304c\u5b58\u5728\u3057\u306a\u3051\u308c\u3070\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u6700\u4e0a\u4f4d\u306b\u914d\u7f6e\u3055\u308c\u305fLICENSE\u30d5\u30a1\u30a4\u30eb\u3092\u540c\u68b1\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"\u306e",(0,a.kt)("a",{parentName:"p",href:"/ja/6.x/package_json#publishconfig"},"publishConfig"),"\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3001\u516c\u958b\u3059\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u542b\u307e\u308c\u308b\u3044\u304f\u3064\u304b\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u4e0a\u66f8\u304d\u3067\u304d\u307e\u3059\u3002 ",(0,a.kt)("a",{parentName:"p",href:"/ja/6.x/package_json#publishconfigdirectory"},(0,a.kt)("inlineCode",{parentName:"a"},"publishConfig.directory")),"\u3067\u3001\u516c\u958b\u3059\u308b\u30b5\u30d6\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059 (\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u306e\u30d3\u30eb\u30c9\u30c4\u30fc\u30eb\u3068\u5171\u306b\u4f7f\u7528\u3059\u308b\u5834\u5408\u304c\u591a\u3044) \u3002"),(0,a.kt)("p",null,"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u3092\u518d\u5e30\u7684\u306b\u5b9f\u884c\u3059\u308b\u3068 (",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm -r publish"),")\u3001 pnpm \u306f\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u516c\u958b\u3057\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5b58\u5728\u3057\u306a\u3044\u5168\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u516c\u958b\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--tag-tag"},"--tag ","<","tag",">"),(0,a.kt)("p",null,"\u6307\u5b9a\u3057\u305f\u30bf\u30b0\u3067\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u516c\u958b\u3057\u307e\u3059\u3002 \u672a\u6307\u5b9a\u306e\u5834\u5408\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm publish")," \u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," \u30bf\u30b0\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# inside the foo package directory\npnpm publish --tag next\n# in a project where you want to use the next version of foo\npnpm add foo@next\n")),(0,a.kt)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted",">"),(0,a.kt)("p",null,"\u516c\u958b\u3057\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u516c\u958b\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u306b\u3059\u308b\u3079\u304d\u304b\u3001\u5236\u9650\u3059\u308b\u3079\u304d\u304b\u3092\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u901a\u77e5\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"git-checks"},"git-checks"),(0,a.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av4.11.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521d\u671f\u5024:",(0,a.kt)("strong",{parentName:"li"},"true")," (v5\u304b\u3089)"),(0,a.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"true\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm publish"),"\u306f\u4eca\u306e\u30d6\u30e9\u30f3\u30c1\u304c\u516c\u958b\u3057\u305f\u30d6\u30e9\u30f3\u30c1\u304b\u3069\u3046\u304b (\u521d\u671f\u5024\u306f master \u3067\u3059) \u3001\u30b9\u30c6\u30fc\u30b8\u30f3\u30b0\u3057\u3066\u3044\u306a\u3044\u5909\u66f4\u306f\u306a\u3044\u304b\u3001\u6700\u65b0\u5316\u3055\u308c\u3066\u3044\u308b\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"publish-branch"},"publish-branch"),(0,a.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av4.11.0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521d\u671f\u5024:",(0,a.kt)("strong",{parentName:"li"},"master")),(0,a.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7:",(0,a.kt)("strong",{parentName:"li"},"\u6587\u5b57\u5217"))),(0,a.kt)("p",null,"\u6700\u65b0\u306e\u5909\u66f4\u3092\u516c\u958b\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u3001\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u57fa\u672c\u30d6\u30e9\u30f3\u30c1\u540d\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"--force"},"--force"),(0,a.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av5.18.0"),(0,a.kt)("p",null,"\u73fe\u5728\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u3059\u3067\u306b\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u516c\u958b\u6e08\u307f\u3067\u3082\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u516c\u958b\u3092\u8a66\u307f\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,a.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av6.5.0"),(0,a.kt)("p",null,"\u516c\u958b\u6e08\u307f\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30ea\u30b9\u30c8\u3092 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-publish-summary.json")," \u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002 \u306a\u3093\u3089\u304b\u306e\u4ed5\u7d44\u307f\u3067\u516c\u958b\u6e08\u307f\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u4e00\u89a7\u3092\u5831\u544a\u3059\u308b\u3068\u304d\u306b\u4fbf\u5229\u3067\u3059\u3002"),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av4.6.0"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/ja/6.x/filtering"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}k.isMDXComponent=!0}}]);