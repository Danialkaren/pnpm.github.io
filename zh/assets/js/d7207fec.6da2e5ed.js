"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2043],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(9496);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=r.createContext({}),m=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(n),s=p,k=u["".concat(o,".").concat(s)]||u[s]||d[s]||a;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function s(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:p,l[1]=i;for(var m=2;m<a;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var r=n(2081),p=n(4604),a=(n(9496),n(9613)),l=["components"],i={id:"pnpm-cli",title:"pnpm CLI"},o=void 0,m={unversionedId:"pnpm-cli",id:"version-6.x/pnpm-cli",title:"pnpm CLI",description:"\u4e0e npm \u7684\u5dee\u522b",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-6.x/pnpm-cli.md",sourceDirName:".",slug:"/pnpm-cli",permalink:"/zh/6.x/pnpm-cli",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"6.x",frontMatter:{id:"pnpm-cli",title:"pnpm CLI"},sidebar:"version-6.x/docs",previous:{title:"\u5b89\u88c5",permalink:"/zh/6.x/installation"},next:{title:"pnpx CLI",permalink:"/zh/6.x/pnpx-cli"}},c={},d=[{value:"\u4e0e npm \u7684\u5dee\u522b",id:"\u4e0e-npm-\u7684\u5dee\u522b",level:2},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",level:2},{value:"-C &lt;path&gt;, --dir &lt;path&gt;",id:"-c-path---dir-path",level:3},{value:"-w, --workspace-root",id:"-w---workspace-root",level:3},{value:"\u547d\u4ee4\u884c",id:"\u547d\u4ee4\u884c",level:2}],u={toc:d};function s(e){var t=e.components,n=(0,p.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e0e-npm-\u7684\u5dee\u522b"},"\u4e0e npm \u7684\u5dee\u522b"),(0,a.kt)("p",null,"\u4e0e npm \u4e0d\u540c\u7684\u662f\uff0cpnpm \u4f1a\u6821\u9a8c\u6240\u6709\u7684\u53c2\u6570\u3002 \u6bd4\u5982\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install --target_arch x64")," \u4f1a\u6267\u884c\u5931\u8d25\uff0c\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"--target_arch x64")," \u4e0d\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u7684\u6709\u6548\u53c2\u6570\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u67d0\u4e9b\u4f9d\u8d56\u5173\u7cfb\u53ef\u80fd\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm_config_")," \u73af\u5883\u53d8\u91cf\uff0c\u5176\u4e2d \u4ece CLI \u9009\u9879\u4e2d\u586b\u5145\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u6709\u4ee5\u4e0b\u9009\u62e9\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u660e\u786e\u7684\u73af\u5883\u53d8\u91cf\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"npm_config_target_arch=x64 pnpm install")),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"--config.")," \u6765\u5f3a\u5236\u4f7f\u7528\u672a\u77e5\u9009\u9879\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm install --config.target_arch=x64"))),(0,a.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,a.kt)("h3",{id:"-c-path---dir-path"},"-C ","<","path",">",", --dir ","<","path",">"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"<path>")," \u4e2d\u542f\u52a8 pnpm \uff0c\u800c\u4e0d\u662f\u5f53\u524d\u7684\u5de5\u4f5c\u76ee\u5f55\u3002"),(0,a.kt)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av5.6.0"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("a",{parentName:"p",href:"https://pnpm.io/workspaces"},"\u5de5\u4f5c\u7a7a\u95f4"),"\u7684\u6839\u76ee\u5f55\u4e2d\u542f\u52a8 pnpm \uff0c\u800c\u4e0d\u662f\u5f53\u524d\u7684\u5de5\u4f5c\u76ee\u5f55\u3002"),(0,a.kt)("h2",{id:"\u547d\u4ee4\u884c"},"\u547d\u4ee4\u884c"),(0,a.kt)("p",null,"\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5404\u4e2a CLI \u547d\u4ee4\u7684\u6587\u6863\u3002 \u4ee5\u4e0b\u662f\u7b80\u4fbf\u7684 npm \u547d\u4ee4\u7b49\u6548\u5217\u8868\uff0c\u53ef\u5e2e\u52a9\u60a8\u5165\u95e8\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"npm \u547d\u4ee4"),(0,a.kt)("th",{parentName:"tr",align:null},"pnpm \u7b49\u6548"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"npm install")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh/6.x/cli/install"},(0,a.kt)("inlineCode",{parentName:"a"},"pnpm install")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"npm i <pkg>")),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("inlineCode",{parentName:"td"},"pnpm add <pkg>"),"]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"npm run <cmd>")),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("inlineCode",{parentName:"td"},"pnpm <cmd>"),"]")))),(0,a.kt)("p",null,"\u5f53\u4f60\u4f7f\u7528\u4e00\u4e2a\u672a\u77e5\u547d\u4ee4\u65f6, pnpm \u4f1a\u67e5\u627e\u4e00\u4e2a\u5177\u6709\u6307\u5b9a\u540d\u79f0\u7684\u811a\u672c, \u6240\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run lint")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm lint"),"\u76f8\u540c. \u5982\u679c\u6ca1\u6709\u6307\u5b9a\u540d\u79f0\u7684\u811a\u672c\uff0c\u90a3\u4e48pnpm\u5c06\u4ee5shell\u811a\u672c\u7684\u5f62\u5f0f\u6267\u884c\u8be5\u547d\u4ee4\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u505a\u7c7b\u4f3c",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm eslint"),"\u7684\u4e8b\u60c5(\u67e5\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/zh/6.x/cli/exec"},"pnpm exec"),")."))}s.isMDXComponent=!0}}]);