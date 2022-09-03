"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8433],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||p;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<p;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(2081),a=n(4604),p=(n(9496),n(9613)),o=["components"],l={id:"dlx",title:"pnpm dlx"},i=void 0,c={unversionedId:"cli/dlx",id:"version-7.x/cli/dlx",title:"pnpm dlx",description:"Busca un paquete desde el registro sin tener que intalarlo como una dependencia, se carga al momento, y corre cualquier comando binario por defecto que expone.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-7.x/cli/dlx.md",sourceDirName:"cli",slug:"/cli/dlx",permalink:"/es/cli/dlx",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"7.x",frontMatter:{id:"dlx",title:"pnpm dlx"},sidebar:"version-7.x/docs",previous:{title:"pnpm exec",permalink:"/es/cli/exec"},next:{title:"pnpm create",permalink:"/es/cli/create"}},u={},s=[{value:"Options",id:"options",level:2},{value:"--package &lt;name&gt;",id:"--package-name",level:3},{value:"--silent, -s",id:"--silent--s",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Busca un paquete desde el registro sin tener que intalarlo como una dependencia, se carga al momento, y corre cualquier comando binario por defecto que expone."),(0,p.kt)("p",null,"For example, to use ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," anywhere to bootstrap a react app without needing to install it under another project, you can run:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app ./my-app\n")),(0,p.kt)("p",null,"This will fetch ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," from the registry and run it with the given arguments."),(0,p.kt)("p",null,"You may also specify which exact version of the package you'd like to use:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app@next ./my-app\n")),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"--package-name"},"--package ","<","name",">"),(0,p.kt)("p",null,"The package to install before running the command."),(0,p.kt)("p",null,"Ejemplo:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --package=@pnpm/meta-updater dlx meta-updater --help\npnpm --package=@pnpm/meta-updater@0 dlx meta-updater --help\n")),(0,p.kt)("p",null,"Multiple packages can be provided for installation:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --package=yo --package=generator-webapp dlx yo webapp --skip-install\n")),(0,p.kt)("h3",{id:"--silent--s"},"--silent, -s"),(0,p.kt)("p",null,"Only the output of the executed command is printed."))}m.isMDXComponent=!0}}]);