"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8238],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,p(p({ref:t},s),{},{components:r})):n.createElement(f,p({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var i=2;i<o;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},158:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>m});var n=r(2081),a=r(4604),o=(r(9496),r(9613)),p=["components"],c={id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},l=void 0,i={unversionedId:"pnpm-workspace_yaml",id:"version-7.x/pnpm-workspace_yaml",title:"pnpm-workspace.yaml",description:"pnpm-workspace.yaml defines the root of the [workspace] and enables you to",source:"@site/versioned_docs/version-7.x/pnpm-workspace_yaml.md",sourceDirName:".",slug:"/pnpm-workspace_yaml",permalink:"/pnpm-workspace_yaml",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/docs/pnpm-workspace_yaml.md",tags:[],version:"7.x",frontMatter:{id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},sidebar:"version-7.x/docs",previous:{title:".npmrc",permalink:"/npmrc"},next:{title:".pnpmfile.cjs",permalink:"/pnpmfile"}},s={},m=[],u={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," defines the root of the ",(0,o.kt)("a",{parentName:"p",href:"/workspaces"},"workspace")," and enables you to\ninclude / exclude directories from the workspace. By default, all packages of\nall subdirectories are included."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pnpm-workspace.yaml"',title:'"pnpm-workspace.yaml"'},"packages:\n  # all packages in direct subdirs of packages/\n  - 'packages/*'\n  # all packages in subdirs of components/\n  - 'components/**'\n  # exclude packages that are inside test directories\n  - '!**/test/**'\n")),(0,o.kt)("p",null,"The root package is always included, even when custom location wildcards are\nused."))}d.isMDXComponent=!0}}]);