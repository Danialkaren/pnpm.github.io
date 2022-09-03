"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4655],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var r=t(9496);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var l=r.createContext({}),m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(t),u=p,f=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function u(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var o=t.length,a=new Array(o);a[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:p,a[1]=i;for(var m=2;m<o;m++)a[m]=t[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7481:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var r=t(2081),p=t(4604),o=(t(9496),t(9613)),a=["components"],i={id:"pnpm-vs-npm",title:"pnpm vs npm"},l=void 0,m={unversionedId:"pnpm-vs-npm",id:"version-6.x/pnpm-vs-npm",title:"pnpm vs npm",description:"npm\uc758 flat tree",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-6.x/pnpm-vs-npm.md",sourceDirName:".",slug:"/pnpm-vs-npm",permalink:"/ko/6.x/pnpm-vs-npm",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"6.x",frontMatter:{id:"pnpm-vs-npm",title:"pnpm vs npm"},sidebar:"version-6.x/docs",previous:{title:"pnpm \uc0ad\uc81c",permalink:"/ko/6.x/uninstall"}},s={},d=[{value:"npm\uc758 flat tree",id:"npm\uc758-flat-tree",level:2},{value:"\uc124\uce58\ud558\uae30",id:"\uc124\uce58\ud558\uae30",level:2},{value:"\ub514\ub809\ud1a0\ub9ac dependencies",id:"\ub514\ub809\ud1a0\ub9ac-dependencies",level:2}],c={toc:d};function u(e){var n=e.components,t=(0,p.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"npm\uc758-flat-tree"},"npm\uc758 flat tree"),(0,o.kt)("p",null,"npm\uc740 version 3 \ubd80\ud130 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/npm/npm/issues/6912"}," flattened dependency tree"),"\ub97c \ud1b5\ud574 dependency\ub97c \uad00\ub9ac\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubc29\uc2dd\uc740 \ub514\uc2a4\ud06c\uc758 \ud06c\uae30\ub97c \ub35c \uc0ac\uc6a9\ud558\uac8c \ub418\uc9c0\ub9cc, \ubcf5\uc7a1\ud55c ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," \ub514\ub809\ud1a0\ub9ac\uc758 \uad6c\uc870\ub97c \uc57c\uae30\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ubc18\uba74 pnpm\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),"\ub97c global on-disk content-addressable store\uc5d0 hard linking\uacfc symbolic linking\ubc29\uc2dd\uc73c\ub85c \uc5f0\uacb0\ud558\uc5ec \uad00\ub9ac\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc5f0\uacb0 \ubc29\uc2dd\uc740 \ub354 \uc801\uc740 \ub514\uc2a4\ud06c\uacf5\uac04\ub9cc\uc744 \uc0ac\uc6a9\ud558\uba74\uc11c, ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),"\ub97c \uae54\ub054\ud558\uac8c \uad00\ub9ac\ud574 \uc90d\ub2c8\ub2e4. \ub354 \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,o.kt)("a",{parentName:"p",href:"symlinked-node-modules-structure"},"store layout"),"\uc5d0 \uc815\ub9ac\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"pnpm\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),"\uad6c\uc870\ub294 \ud504\ub85c\uc81d\ud2b8\uc758 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"\uc5d0 \uba85\uc2dc\ub418\uc9c0 \uc54a\uc740 \ubaa8\ub4c8\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uac8c \ud568\uc73c\ub85c\uc368 \uc758\ub3c4\ub418\uc9c0 \uc54a\uc740 \ubc84\uadf8\ub97c \ud53c\ud558\ub294 \uac83\uc744 \ub3c4\uc640\uc90d\ub2c8\ub2e4. ",(0,o.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html"},"helps to avoid silly bugs")),(0,o.kt)("h2",{id:"\uc124\uce58\ud558\uae30"},"\uc124\uce58\ud558\uae30"),(0,o.kt)("p",null,"pnpm\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"\uc5d0 \uc800\uc7a5\ud558\uc9c0 \uc54a\uace0 \ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud558\ub294 \uac83\uc744 \ud5c8\uc6a9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm add")," \ucee4\ub9e8\ub4dc\uc5d0 \ub530\ub85c \ud30c\ub77c\ubbf8\ud130\uac00 \uc8fc\uc5b4\uc9c0\uc9c0 \uc54a\ub294\ub2e4\uba74, \ud328\ud0a4\uc9c0\ub294 dependencies\ub85c \uc800\uc7a5\ub429\ub2c8\ub2e4. npm\uacfc \uac19\uc774, ",(0,o.kt)("inlineCode",{parentName:"p"},"--save-dev")," \ub610\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"--save-optional")," \ud30c\ub77c\ubbf8\ud130\ub294 dev \ud639\uc740 optional dependencies\ub85c \ud328\ud0a4\uc9c0\ub97c \uc800\uc7a5\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc774\ub7ec\ud55c \uc81c\uc57d\uc758 \uacb0\uacfc\ub85c dependency\ub97c \uc0ad\uc81c\ud558\uc5ec \ubd84\ub9ac\ub41c \uc0c1\ud0dc\ub85c \ub0a8\uaca8\ub450\uc9c0 \uc54a\ub294 \ud55c, \ud504\ub85c\uc81d\ud2b8\uc5d0\ub294 \uad00\ub828 \uc5c6\ub294 \ud328\ud0a4\uc9c0\ub294 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc744 \uac83 \uc785\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc774\uc720\ub85c ",(0,o.kt)("a",{parentName:"p",href:"cli/prune"},"prune \ucee4\ub9e8\ub4dc"),"\uac00 \ud328\ud0a4\uc9c0\ub97c \uba85\uc2dc\ud558\uc9c0 \ubabb\ud558\ub3c4\ub85d \uad6c\ud604\ub418\uc5c8\uc2b5\ub2c8\ub2e4. - prune \ucee4\ub9e8\ub4dc\ub294 \ud56d\uc0c1 \uad00\ub828\uc5c6\ub294 \ud328\ud0a4\uc9c0 \ubaa8\ub450\ub97c \uc0ad\uc81c\ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\ub514\ub809\ud1a0\ub9ac-dependencies"},"\ub514\ub809\ud1a0\ub9ac dependencies"),(0,o.kt)("p",null,"\ub514\ub809\ud1a0\ub9ac dependencies\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"file:")," \uc811\ub450\uc0ac\ub85c \uc2dc\uc791\ud558\uace0, \ud30c\uc77c \uc2dc\uc2a4\ud15c \ub0b4\uc758 \ub514\ub809\ud1a0\ub9ac\ub97c \uac00\ub9ac\ud0b5\ub2c8\ub2e4. npm\ucc98\ub7fc, pnpm\ub3c4 \uc774\ub7ec\ud55c \uc758\uc874\uc131\uc744 symlinks\ud569\ub2c8\ub2e4. npm\uacfc\ub294 \ub2ec\ub9ac pnpm\uc740 \ud30c\uc77c dependencies\ub97c \uc124\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub9cc\uc57d ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," (",(0,o.kt)("inlineCode",{parentName:"p"},"<root>/foo"),")\ub77c\ub294 \ud328\ud0a4\uc9c0\uac00 ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@file:../bar"),"\ub77c\ub294 dependency\ub97c \uac16\uace0 \uc788\uace0, ",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),"\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install"),"\ucee4\ub9e8\ub4dc\ub97c \uc2e4\ud589\ud55c\ub2e4\uba74, pnpm\uc740 ",(0,o.kt)("inlineCode",{parentName:"p"},"<root>/bar"),"\uc5d0 \ub300\ud55c \uc124\uce58\ub97c \uc2e4\ud589\ud558\uc9c0 \uc54a\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ubaa8\ub178\ub808\ud3ec\uc640 \uac19\uc740 \ud658\uacbd\ucc98\ub7fc \uc5ec\ub7ec \ud328\ud0a4\uc9c0\uc5d0\uc11c \ub3d9\uc2dc\uc5d0 \uc124\uce58\ub97c \ud574\uc57c\ud558\ub294 \uacbd\uc6b0 ",(0,o.kt)("a",{parentName:"p",href:"cli/recursive"},(0,o.kt)("inlineCode",{parentName:"a"},"pnpm -r")),"\ubb38\uc11c\ub97c \ucc38\uace0\ud558\uc2ed\uc2dc\uc624."))}u.isMDXComponent=!0}}]);