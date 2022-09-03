"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7684],{9613:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(t),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?n.createElement(f,p(p({ref:r},s),{},{components:t})):n.createElement(f,p({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var i=2;i<o;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4278:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>m});var n=t(2081),a=t(4604),o=(t(9496),t(9613)),p=["components"],c={id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},l=void 0,i={unversionedId:"pnpm-workspace_yaml",id:"version-7.x/pnpm-workspace_yaml",title:"pnpm-workspace.yaml",description:"pnpm-workspace.yaml defines the root of the workspace and enables you to include / exclude directories from the workspace. By default, all packages of all subdirectories are included.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-7.x/pnpm-workspace_yaml.md",sourceDirName:".",slug:"/pnpm-workspace_yaml",permalink:"/zh-TW/pnpm-workspace_yaml",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"7.x",frontMatter:{id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},sidebar:"version-7.x/docs",previous:{title:".npmrc",permalink:"/zh-TW/npmrc"},next:{title:".pnpmfile.cjs",permalink:"/zh-TW/pnpmfile"}},s={},m=[],u={toc:m};function d(e){var r=e.components,t=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," defines the root of the ",(0,o.kt)("a",{parentName:"p",href:"/zh-TW/workspaces"},"workspace")," and enables you to include / exclude directories from the workspace. By default, all packages of all subdirectories are included."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pnpm-workspace.yaml"',title:'"pnpm-workspace.yaml"'},"packages:\n  # all packages in direct subdirs of packages/\n  - 'packages/*'\n  # all packages in subdirs of components/\n  - 'components/**'\n  # exclude packages that are inside test directories\n  - '!**/test/**'\n")),(0,o.kt)("p",null,"The root package is always included, even when custom location wildcards are used."))}d.isMDXComponent=!0}}]);