"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1037],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,d=s["".concat(o,".").concat(m)]||s[m]||k[m]||l;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>u,toc:()=>k});var r=n(2081),a=n(4604),l=(n(9496),n(9613)),i=["components"],p={id:"recursive",title:"pnpm -r, --recursive"},o=void 0,u={unversionedId:"cli/recursive",id:"version-7.x/cli/recursive",title:"pnpm -r, --recursive",description:"\u5225\u540d: m, multi, recursive,  -r",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-7.x/cli/recursive.md",sourceDirName:"cli",slug:"/cli/recursive",permalink:"/ja/cli/recursive",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"7.x",frontMatter:{id:"recursive",title:"pnpm -r, --recursive"},sidebar:"version-7.x/docs",previous:{title:"pnpm pack",permalink:"/ja/cli/pack"},next:{title:"pnpm server",permalink:"/ja/cli/server"}},c={},k=[{value:"Options",id:"options",level:2},{value:"--link-workspace-packages",id:"--link-workspace-packages",level:3},{value:"--workspace-concurrency",id:"--workspace-concurrency",level:3},{value:"--no-bail",id:"--no-bail",level:3},{value:"--no-sort",id:"--no-sort",level:3},{value:"--reverse",id:"--reverse",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],s={toc:k};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5225\u540d: ",(0,l.kt)("inlineCode",{parentName:"p"},"m"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"multi"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"recursive"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<command> -r")),(0,l.kt)("p",null,"\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3068\u4e00\u7dd2\u306b\u4f7f\u7528\u3059\u308b\u3068\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"install")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"outdated")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"publish")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rebuild")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"remove")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"unlink")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"update")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"why"))),(0,l.kt)("p",null,"\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3068\u4e00\u7dd2\u306b\u4f7f\u7528\u3059\u308b\u3068\u3001\u30eb\u30fc\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u9664\u304f\u3001\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u5404\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"exec")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"run")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"add"))),(0,l.kt)("p",null,"If you want the root project be included even when running scripts, set the ",(0,l.kt)("a",{parentName:"p",href:"/ja/npmrc#include-workspace-root"},"include-workspace-root")," setting to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("p",null,"\u4f7f\u7528\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm -r publish\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--link-workspace-packages"},"--link-workspace-packages"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,l.kt)("strong",{parentName:"li"},"true, false, deep"))),(0,l.kt)("p",null,"\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u518d\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u4ee3\u308f\u308a\u306b\u3001\u30ed\u30fc\u30ab\u30eb\u3067\u5229\u7528\u53ef\u80fd\u306amonorepo\u306e\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092 ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," \u306b\u30ea\u30f3\u30af\u3057\u307e\u3059\u3002 \u3053\u308c\u306f\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"yarn workspace")," \u306e\u6a5f\u80fd\u3092\u518d\u73fe\u3057\u305f\u3082\u306e\u3067\u3059\u3002"),(0,l.kt)("p",null,"\u3053\u308c\u3092 deep \u306b\u8a2d\u5b9a\u3059\u308b\u3068\u3001\u30ed\u30fc\u30ab\u30eb\u30d1\u30c3\u30b1\u30fc\u30b8\u3082 subdependencies \u306b\u30ea\u30f3\u30af\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u3053\u306e\u8a2d\u5b9a\u306b\u306f\u3001\u3059\u3079\u3066\u306e\u74b0\u5883\u3067\u540c\u3058\u52d5\u4f5c\u3092\u3055\u305b\u308b\u305f\u3081\u306b\u3001 ",(0,l.kt)("a",{parentName:"p",href:"/ja/workspaces#link-workspace-packages"},"npmrc")," \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u63a8\u5968\u3055\u308c\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u5358\u72ec\u3067\u5b58\u5728\u3059\u308b\u306e\u3067\u3001\u5fc5\u8981\u3067\u3042\u308c\u3070\u4e0a\u66f8\u304d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("h3",{id:"--workspace-concurrency"},"--workspace-concurrency"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,l.kt)("strong",{parentName:"li"},"4")),(0,l.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,l.kt)("strong",{parentName:"li"},"Number"))),(0,l.kt)("p",null,"\u540c\u6642\u306b\u5b9f\u884c\u3059\u308b\u30bf\u30b9\u30af\u306e\u6700\u5927\u6570\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002 \u7121\u5236\u9650\u306b\u3059\u308b\u5834\u5408\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"Infinity")," \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"workpace-concurrency")," \u3092 ",(0,l.kt)("inlineCode",{parentName:"p"},"<=0")," \u306b\u8a2d\u5b9a\u3059\u308b\u3068\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"max(1, (number of cores) - abs(workspace-concurrency))")," \u3067\u793a\u3055\u308c\u308b\u3088\u3046\u306a\u30db\u30b9\u30c8\u306e\u30b3\u30a2\u6570\u3092\u4f7f\u7528\u3059\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--no-bail"},"--","[no-]","bail"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"true \u306e\u5834\u5408\u3001\u30bf\u30b9\u30af\u304c\u30a8\u30e9\u30fc\u3092\u6295\u3052\u308b\u3068\u505c\u6b62\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u7d42\u4e86\u30b3\u30fc\u30c9\u306b\u306f\u5f71\u97ff\u3057\u307e\u305b\u3093\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-bail")," \u304c\u4f7f\u308f\u308c\u3066\u3044\u3066\u3082\u3001\u3059\u3079\u3066\u306e\u30bf\u30b9\u30af\u306f\u7d42\u4e86\u3057\u307e\u3059\u304c\u3001\u3044\u305a\u308c\u304b\u306e\u30bf\u30b9\u30af\u304c\u5931\u6557\u3059\u308b\u3068\u30010\u4ee5\u5916\u306e\u30b3\u30fc\u30c9\u3067\u30b3\u30de\u30f3\u30c9\u304c\u7d42\u4e86\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u4f8b (\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3067\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3057\u3001\u305d\u306e\u3046\u3061\u306e1\u3064\u3067\u30c6\u30b9\u30c8\u304c\u5931\u6557\u3057\u305f\u5834\u5408\u306f\u7d9a\u884c\u3059\u308b)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-bail test\n")),(0,l.kt)("h3",{id:"--no-sort"},"--","[no-]","sort"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u306e\u5834\u5408\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u30c8\u30dd\u30ed\u30b8\u30ab\u30eb\u30bd\u30fc\u30c8\u306b\u5f93\u3063\u3066\u30bd\u30fc\u30c8\u3055\u308c\u307e\u3059(\u4f9d\u5b58\u5143\u306e\u524d\u306b\u4f9d\u5b58\u5148)\u3002 \u7121\u52b9\u306b\u3059\u308b\u306b\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-sort")," \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm -r --no-sort test\n")),(0,l.kt)("h3",{id:"--reverse"},"--reverse"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7: ",(0,l.kt)("strong",{parentName:"li"},"boolean"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u306e\u5834\u5408\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30bd\u30fc\u30c8\u9806\u304c\u9006\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pnpm -r --reverse run clean\n")),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ja/filtering"},"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}m.isMDXComponent=!0}}]);