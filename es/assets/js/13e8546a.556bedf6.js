"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2242],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=c(t),u=r,k=d["".concat(l,".").concat(u)]||d[u]||s[u]||i;return t?a.createElement(k,o(o({ref:n},m),{},{components:t})):a.createElement(k,o({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1511:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>s});var a=t(2081),r=t(4604),i=(t(9496),t(9613)),o=["components"],p={id:"pnpm-cli",title:"pnpm CLI"},l=void 0,c={unversionedId:"pnpm-cli",id:"version-7.x/pnpm-cli",title:"pnpm CLI",description:"Diferencias con npm",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-7.x/pnpm-cli.md",sourceDirName:".",slug:"/pnpm-cli",permalink:"/es/pnpm-cli",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"7.x",frontMatter:{id:"pnpm-cli",title:"pnpm CLI"},sidebar:"version-7.x/docs",previous:{title:"Feature Comparison",permalink:"/es/feature-comparison"},next:{title:"Configuraci\xf3n",permalink:"/es/configuring"}},m={},s=[{value:"Diferencias con npm",id:"diferencias-con-npm",level:2},{value:"Opciones",id:"opciones",level:2},{value:"-C &lt;ruta&gt;, --dir &lt;ruta&gt;",id:"-c-ruta---dir-ruta",level:3},{value:"-w, --workspace-root",id:"-w---workspace-root",level:3},{value:"Comandos",id:"comandos",level:2}],d={toc:s};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"diferencias-con-npm"},"Diferencias con npm"),(0,i.kt)("p",null,"A diferencia de npm, pnpm valida todas las opciones. Por ejemplo, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install --target_arch x64")," fallar\xe1 ya que ",(0,i.kt)("inlineCode",{parentName:"p"},"--target_arch")," no es una opci\xf3n v\xe1lida para ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,i.kt)("p",null,"Sin embargo, algunas dependencias pueden usar la variable de entorno ",(0,i.kt)("inlineCode",{parentName:"p"},"npm_config_")," , que se completa con las opciones de CLI. En este caso, tienes las siguientes opciones:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"establezca expl\xedcitamente la variable env: ",(0,i.kt)("inlineCode",{parentName:"li"},"npm_config_target_arch=x64 pnpm install")),(0,i.kt)("li",{parentName:"ol"},"Fuerza la opci\xf3n desconocida con ",(0,i.kt)("inlineCode",{parentName:"li"},"--config."),": ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm install--config.target_arch=x64"))),(0,i.kt)("h2",{id:"opciones"},"Opciones"),(0,i.kt)("h3",{id:"-c-ruta---dir-ruta"},"-C ","<","ruta",">",", --dir ","<","ruta",">"),(0,i.kt)("p",null,"Ejecutar como si pnpm se hubiera iniciado en ",(0,i.kt)("inlineCode",{parentName:"p"},"<ruta>")," en lugar del directorio de trabajo actual."),(0,i.kt)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),(0,i.kt)("p",null,"Ejecutar como si pnpm se hubiera iniciado en ",(0,i.kt)("a",{parentName:"p",href:"https://pnpm.io/workspaces"},"workspace")," en lugar del directorio de trabajo actual."),(0,i.kt)("h2",{id:"comandos"},"Comandos"),(0,i.kt)("p",null,"Si deseas aprender m\xe1s, puede visitar la documentaci\xf3n para cada comando de pnpm CLI de forma individual. Aqui hay una lista de comandos \xfatiles de npm y su equivalente en pnpm:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"comando npm"),(0,i.kt)("th",{parentName:"tr",align:null},"equivalencia pnpm"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm install")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/es/cli/install"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm install")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm i <pkg>")),(0,i.kt)("td",{parentName:"tr",align:null},"[",(0,i.kt)("inlineCode",{parentName:"td"},"pnpm add <pkg>"),"]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm run <cmd>")),(0,i.kt)("td",{parentName:"tr",align:null},"[",(0,i.kt)("inlineCode",{parentName:"td"},"pnpm <cmd>"),"]")))),(0,i.kt)("p",null,"Cuando se utiliza un comando desconocido, pnpm va a buscar un script que coincida con ese nombre, por ejemplo, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run lint")," es lo mismo que usar ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm lint"),". Si no existe un script con ese nombre, pnpm ejecutara el comando como un shell script, esto le permitir\xe1 hacer cosas como ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm eslint")," (ver m\xe1s... ",(0,i.kt)("a",{parentName:"p",href:"/es/cli/exec"},"pnpm exec"),")."))}u.isMDXComponent=!0}}]);