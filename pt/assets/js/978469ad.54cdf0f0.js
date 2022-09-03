"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4485],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>s});var o=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(t),s=r,k=u["".concat(p,".").concat(s)]||u[s]||m[s]||l;return t?o.createElement(k,i(i({ref:n},d),{},{components:t})):o.createElement(k,i({ref:n},d))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var c=2;c<l;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},749:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var o=t(2081),r=t(4604),l=(t(9496),t(9613)),i=["components"],a={id:"link",title:"pnpm link"},p=void 0,c={unversionedId:"cli/link",id:"version-7.x/cli/link",title:"pnpm link",description:"Aliases: ln",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-7.x/cli/link.md",sourceDirName:"cli",slug:"/cli/link",permalink:"/pt/cli/link",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"7.x",frontMatter:{id:"link",title:"pnpm link"},sidebar:"version-7.x/docs",previous:{title:"pnpm remove",permalink:"/pt/cli/remove"},next:{title:"pnpm unlink",permalink:"/pt/cli/unlink"}},d={},m=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--dir &lt;dir&gt;, -C",id:"--dir-dir--c",level:3},{value:"<code>pnpm link &lt;dir&gt;</code>",id:"pnpm-link-dir",level:3},{value:"<code>pnpm link --global</code>",id:"pnpm-link---global",level:3},{value:"<code>pnpm link --global &lt;pkg&gt;</code>",id:"pnpm-link---global-pkg",level:3}],u={toc:m};function s(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Aliases: ",(0,l.kt)("inlineCode",{parentName:"p"},"ln")),(0,l.kt)("p",null,"Torna o pacote local atual acess\xedvel em todo o sistema, ou em outro local."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm link <dir>\npnpm link --global\npnpm link --global <pkg>\n")),(0,l.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,l.kt)("h3",{id:"--dir-dir--c"},"--dir ","<","dir",">",", -C"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Padr\xe3o"),": Diret\xf3rio de trabalho atual"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Tipo"),": string com o caminho")),(0,l.kt)("p",null,"Altera a localiza\xe7\xe3o do link para ",(0,l.kt)("inlineCode",{parentName:"p"},"<dir>"),"."),(0,l.kt)("h3",{id:"pnpm-link-dir"},(0,l.kt)("inlineCode",{parentName:"h3"},"pnpm link <dir>")),(0,l.kt)("p",null,"Vincula o pacote da pasta ",(0,l.kt)("inlineCode",{parentName:"p"},"<dir>")," ao node_modules do pacote de onde voc\xea est\xe1 executando este comando ou especificado atrav\xe9s da op\xe7\xe3o ",(0,l.kt)("inlineCode",{parentName:"p"},"--dir"),"."),(0,l.kt)("h3",{id:"pnpm-link---global"},(0,l.kt)("inlineCode",{parentName:"h3"},"pnpm link --global")),(0,l.kt)("p",null,"Vincula o pacote do local onde este comando foi executado ou especificado atrav\xe9s da op\xe7\xe3o ",(0,l.kt)("inlineCode",{parentName:"p"},"--dir")," para global ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),", para que possa ser referenciado de outro pacote com ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm link --global <pkg>"),"."),(0,l.kt)("h3",{id:"pnpm-link---global-pkg"},(0,l.kt)("inlineCode",{parentName:"h3"},"pnpm link --global <pkg>")),(0,l.kt)("p",null,"Vincula o pacote especificado (",(0,l.kt)("inlineCode",{parentName:"p"},"<pkg>"),") do global ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," aos ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," do pacote de onde este comando foi executado ou especificado por meio da op\xe7\xe3o ",(0,l.kt)("inlineCode",{parentName:"p"},"--dir"),"."))}s.isMDXComponent=!0}}]);