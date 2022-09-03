"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1244],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(r),v=i,m=c["".concat(p,".").concat(v)]||c[v]||u[v]||l;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4807:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>v,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(2081),i=r(4604),l=(r(9496),r(9613)),a=["components"],o={id:"audit",title:"pnpm audit"},p=void 0,s={unversionedId:"cli/audit",id:"version-6.x/cli/audit",title:"pnpm audit",description:"Added in: v4.3.0",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/tr/6.x/cli/audit",draft:!1,editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"6.x",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"version-6.x/docs",previous:{title:"pnpm install-test",permalink:"/tr/6.x/cli/install-test"},next:{title:"pnpm list",permalink:"/tr/6.x/cli/list"}},d={},u=[{value:"Parametreler",id:"parametreler",level:2},{value:"--audit-level &lt;severity&gt;",id:"--audit-level-severity",level:3},{value:"--fix",id:"--fix",level:3},{value:"--json",id:"--json",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--ignore-registry-errors",id:"--ignore-registry-errors",level:3}],c={toc:u};function v(e){var t=e.components,r=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Added in: v4.3.0"),(0,l.kt)("p",null,"Checks for known security issues with the installed packages."),(0,l.kt)("p",null,"If security issues are found, try to update your dependencies via ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm update"),". If a simple update does not fix all the issues, use ",(0,l.kt)("a",{parentName:"p",href:"/tr/6.x/package_json#pnpmoverrides"},"overrides")," to force versions that are not vulnerable. For instance, if ",(0,l.kt)("inlineCode",{parentName:"p"},"lodash@<2.1.0")," is vulnerable, use this overrides to force ",(0,l.kt)("inlineCode",{parentName:"p"},"lodash@^2.1.0"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "pnpm": {\n        "overrides": {\n            "lodash@<2.1.0": "^2.1.0"\n        }\n    }\n}\n')),(0,l.kt)("p",null,"Or alternatively, run ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm audit --fix"),"."),(0,l.kt)("h2",{id:"parametreler"},"Parametreler"),(0,l.kt)("h3",{id:"--audit-level-severity"},"--audit-level ","<","severity",">"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"low"),", ",(0,l.kt)("strong",{parentName:"li"},"moderate"),", ",(0,l.kt)("strong",{parentName:"li"},"high"),", ",(0,l.kt)("strong",{parentName:"li"},"critical")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"low"))),(0,l.kt)("p",null,"Only print advisories with severity greater than or equal to ",(0,l.kt)("inlineCode",{parentName:"p"},"<severity>"),"."),(0,l.kt)("h3",{id:"--fix"},"--fix"),(0,l.kt)("p",null,"Added in: v6.11.0"),(0,l.kt)("p",null,"Add overrides to the ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," file in order to force non-vulnerable versions of the dependencies."),(0,l.kt)("h3",{id:"--json"},"--json"),(0,l.kt)("p",null,"Output audit report in JSON format."),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"Only audit dev dependencies."),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"Only audit production dependencies."),(0,l.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,l.kt)("p",null,"Don't audit ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--ignore-registry-errors"},"--ignore-registry-errors"),(0,l.kt)("p",null,"S\xfcr\xfcm 6.7.1 ve sonras\u0131nda ge\xe7erli"),(0,l.kt)("p",null,"If the registry responds with a non-200 status code, the process should exit with 0. So the process will fail only if the registry actually successfully responds with found vulnerabilities."))}v.isMDXComponent=!0}}]);