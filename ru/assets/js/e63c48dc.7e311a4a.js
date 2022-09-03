"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7502],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>s});var n=r(9496);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var o=n.createContext({}),i=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(r),s=p,f=m["".concat(o,".").concat(s)]||m[s]||d[s]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function s(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:p,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1533:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var n=r(2081),p=r(4604),a=(r(9496),r(9613)),l=["components"],c={id:"dlx",title:"pnpm dlx"},o=void 0,i={unversionedId:"cli/dlx",id:"version-7.x/cli/dlx",title:"pnpm dlx",description:"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043f\u0430\u043a\u0435\u0442 \u0438\u0437 \u0440\u0435\u0435\u0441\u0442\u0440\u0430, \u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u044f \u0435\u0433\u043e \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u0435\u0433\u043e \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043b\u044e\u0431\u043e\u0439 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u0430\u043a \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0443 \u043f\u0430\u043a\u0435\u0442\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-7.x/cli/dlx.md",sourceDirName:"cli",slug:"/cli/dlx",permalink:"/ru/cli/dlx",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"7.x",frontMatter:{id:"dlx",title:"pnpm dlx"},sidebar:"version-7.x/docs",previous:{title:"pnpm exec",permalink:"/ru/cli/exec"},next:{title:"pnpm create",permalink:"/ru/cli/create"}},u={},d=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"--package &lt;\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043a\u0435\u0442\u0430&gt;",id:"--package-\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435-\u043f\u0430\u043a\u0435\u0442\u0430",level:3},{value:"--silent, -s",id:"--silent--s",level:3}],m={toc:d};function s(e){var t=e.components,r=(0,p.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043f\u0430\u043a\u0435\u0442 \u0438\u0437 \u0440\u0435\u0435\u0441\u0442\u0440\u0430, \u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u044f \u0435\u0433\u043e \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u0435\u0433\u043e \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043b\u044e\u0431\u043e\u0439 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u0430\u043a \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0443 \u043f\u0430\u043a\u0435\u0442\u0430."),(0,a.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0447\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," \u0432 \u043b\u044e\u0431\u043e\u043c \u043c\u0435\u0441\u0442\u0435 \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 react \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0431\u0435\u0437 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u0432 \u0434\u0440\u0443\u0433\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app ./my-app\n")),(0,a.kt)("p",null,"\u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," \u0438\u0437 \u0440\u0435\u0435\u0441\u0442\u0440\u0430 \u0438 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0435\u0433\u043e \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438."),(0,a.kt)("p",null,"\u0412\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c, \u043a\u0430\u043a\u0443\u044e \u0438\u043c\u0435\u043d\u043d\u043e \u0432\u0435\u0440\u0441\u0438\u044e \u043f\u0430\u043a\u0435\u0442\u0430 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app@next ./my-app\n")),(0,a.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,a.kt)("h3",{id:"--package-\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435-\u043f\u0430\u043a\u0435\u0442\u0430"},"--package ","<","\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043a\u0435\u0442\u0430",">"),(0,a.kt)("p",null,"\u041f\u0430\u043a\u0435\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u0434 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u044b."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm --package=@pnpm/meta-updater dlx meta-updater --help\npnpm --package=@pnpm/meta-updater@0 dlx meta-updater --help\n")),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0430\u043a\u0435\u0442\u043e\u0432:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm --package=yo --package=generator-webapp dlx yo webapp --skip-install\n")),(0,a.kt)("h3",{id:"--silent--s"},"--silent, -s"),(0,a.kt)("p",null,"Only the output of the executed command is printed."))}s.isMDXComponent=!0}}]);