"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5459],{9613:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>d});var t=r(9496);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?t.createElement(f,i(i({ref:n},c),{},{components:r})):t.createElement(f,i({ref:n},c))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5578:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var t=r(2081),a=r(4604),o=(r(9496),r(9613)),i=["components"],s={id:"limitations",title:"Limitaciones"},l=void 0,p={unversionedId:"limitations",id:"version-6.x/limitations",title:"Limitaciones",description:"1. npm-shrinkwrap.json y package-lock.json se ignoran. A diferencia de pnpm, npm puede instalar el mismo nombre@versi\xf3n varias veces y con diferentes conjuntos de dependencias. El archivo de bloqueo de npm est\xe1 dise\xf1ado para reflejar la estructura plana de node_modules sin embargo, ya que pnpm crea una estructura aislada por defecto, no puede respetar el formato de archivo de bloqueo de npm. Vea pnpm import si a pesar de todo desea convertir un archivo de bloqueo al formato de pnpm.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.x/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/es/6.x/limitations",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"6.x",frontMatter:{id:"limitations",title:"Limitaciones"},sidebar:"version-6.x/docs",previous:{title:"Logotipos",permalink:"/es/6.x/logos"},next:{title:"Estructura de `node_modules` con enlaces simb\xf3licos",permalink:"/es/6.x/symlinked-node-modules-structure"}},c={},u=[],m={toc:u};function d(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," y ",(0,o.kt)("inlineCode",{parentName:"li"},"package-lock.json")," se ignoran. A diferencia de pnpm, npm puede instalar el mismo ",(0,o.kt)("inlineCode",{parentName:"li"},"nombre@versi\xf3n")," varias veces y con diferentes conjuntos de dependencias. El archivo de bloqueo de npm est\xe1 dise\xf1ado para reflejar la estructura plana de ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules")," sin embargo, ya que pnpm crea una estructura aislada por defecto, no puede respetar el formato de archivo de bloqueo de npm. Vea ",(0,o.kt)("a",{parentName:"li",href:"/es/6.x/cli/import"},"pnpm import")," si a pesar de todo desea convertir un archivo de bloqueo al formato de pnpm."),(0,o.kt)("li",{parentName:"ol"},"Los binstubs (archivos en ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules/.bin"),") son siempre archivos de shell, no enlaces simb\xf3licos a archivos JS. Los archivos de shell se crean para ayudar a las aplicaciones CLI conectables en la b\xfasqueda de sus plugins en la inusual estructura de ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules"),". Esto es muy raramente un problema y si espera que el archivo sea un archivo JS, en su lugar, haga referencia al archivo original directamente, como se describe en ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/736"},"#736"),".")),(0,o.kt)("p",null,"\xbfTienes una idea para solucionar estos problemas? ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"Comp\xe1rtelos.")))}d.isMDXComponent=!0}}]);