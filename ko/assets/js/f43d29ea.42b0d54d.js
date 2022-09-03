"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1842],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=c(t),m=i,k=f["".concat(p,".").concat(m)]||f[m]||s[m]||l;return t?r.createElement(k,o(o({ref:n},u),{},{components:t})):r.createElement(k,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=f;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(2081),i=t(4604),l=(t(9496),t(9613)),o=["components"],a={id:"unlink",title:"pnpm unlink"},p=void 0,c={unversionedId:"cli/unlink",id:"version-7.x/cli/unlink",title:"pnpm unlink",description:"\uc2dc\uc2a4\ud15c \uc804\uccb4 \ud328\ud0a4\uc9c0\ub97c \uc5b8\ub9c1\ud06c\ud569\ub2c8\ub2e4 (pnpm link \uc758 \ubc18\ub300).",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-7.x/cli/unlink.md",sourceDirName:"cli",slug:"/cli/unlink",permalink:"/ko/cli/unlink",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"7.x",frontMatter:{id:"unlink",title:"pnpm unlink"},sidebar:"version-7.x/docs",previous:{title:"pnpm link",permalink:"/ko/cli/link"},next:{title:"pnpm import",permalink:"/ko/cli/import"}},u={},s=[{value:"\uc635\uc158",id:"\uc635\uc158",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],f={toc:s};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\uc2dc\uc2a4\ud15c \uc804\uccb4 \ud328\ud0a4\uc9c0\ub97c \uc5b8\ub9c1\ud06c\ud569\ub2c8\ub2e4 (",(0,l.kt)("a",{parentName:"p",href:"/ko/cli/link"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm link"))," \uc758 \ubc18\ub300)."),(0,l.kt)("p",null,"\uc778\uc218 \uc5c6\uc774 \ud638\ucd9c\ud558\uba74, \ub9c1\ud06c\ub41c \ubaa8\ub4e0 \uc758\uc874\uc131\uc774 \uc5b8\ub9c1\ud06c\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\uac83\uc740 pnpm\uc774 \uc678\ubd80 \ub9c1\ud06c\ub97c \uc81c\uac70\ud55c \ud6c4 \uc758\uc874\uc131\uc744 \ub2e4\uc2dc \uc124\uce58\ud55c\ub2e4\ub294 \uc810\uc744 \uc81c\uc678\ud558\uace0, ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn unlink")," \uc640 \uc720\uc0ac\ud569\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ko/workspaces"},"\uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4")," \ub0b4\uc5d0\uc11c \uc2e4\ud589\ub420 \ub54c, \ud558\uc704 \ub514\ub809\ud1a0\ub9ac\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \ud328\ud0a4\uc9c0 \ub610\ub294 \ubaa8\ub4e0 \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4 \ud328\ud0a4\uc9c0\uc5d0\uc11c \uc5b8\ub9c1\ud06c\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ko/filtering"},"\ud544\ud130\ub9c1\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694.")))}m.isMDXComponent=!0}}]);