"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6088],{9613:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>m});var n=t(9496);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,k=u["".concat(o,".").concat(m)]||u[m]||c[m]||l;return t?n.createElement(k,i(i({ref:a},s),{},{components:t})):n.createElement(k,i({ref:a},s))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var d={};for(var o in a)hasOwnProperty.call(a,o)&&(d[o]=a[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8993:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>p,toc:()=>c});var n=t(2081),r=t(4604),l=(t(9496),t(9613)),i=["components"],d={id:"add",title:"pnpm add <pkg>"},o=void 0,p={unversionedId:"cli/add",id:"cli/add",title:"pnpm add <pkg>",description:"Instalar el paquete y cualquier paquete que dependa de el. Por defecto, cualquier nuevo paquete se instala como una dependencia de producci\xf3n.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/cli/add.md",sourceDirName:"cli",slug:"/cli/add",permalink:"/es/next/cli/add",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"current",frontMatter:{id:"add",title:"pnpm add <pkg>"},sidebar:"docs",previous:{title:"Scripts",permalink:"/es/next/scripts"},next:{title:"pnpm install",permalink:"/es/next/cli/install"}},s={},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Ubicaciones de paquetes soportados",id:"ubicaciones-de-paquetes-soportados",level:2},{value:"Instalar desde el registro de npm",id:"instalar-desde-el-registro-de-npm",level:3},{value:"Instalar desde el espacio de trabajo",id:"instalar-desde-el-espacio-de-trabajo",level:3},{value:"Instalar desde el sistema de archivos local",id:"instalar-desde-el-sistema-de-archivos-local",level:3},{value:"Instalar desde tarball remoto",id:"instalar-desde-tarball-remoto",level:3},{value:"Instalar desde el registro de npm",id:"instalar-desde-el-registro-de-npm-1",level:3},{value:"Opciones",id:"opciones",level:2},{value:"--save-prod, -P",id:"--save-prod--p",level:3},{value:"--save-dev, -D",id:"--save-dev--d",level:3},{value:"--save-optional, -O",id:"--save-optional--o",level:3},{value:"--save-exact, -E",id:"--save-exact--e",level:3},{value:"--save-peer",id:"--save-peer",level:3},{value:"--ignore-workspace-root-check",id:"--ignore-workspace-root-check",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:c};function m(e){var a=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Instalar el paquete y cualquier paquete que dependa de el. Por defecto, cualquier nuevo paquete se instala como una dependencia de producci\xf3n."),(0,l.kt)("h2",{id:"tldr"},"TL;DR"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Comando"),(0,l.kt)("th",{parentName:"tr",align:null},"Significado"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax")),(0,l.kt)("td",{parentName:"tr",align:null},"Se guarda en ",(0,l.kt)("inlineCode",{parentName:"td"},"dependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -D sax")),(0,l.kt)("td",{parentName:"tr",align:null},"Se guarda en ",(0,l.kt)("inlineCode",{parentName:"td"},"devDependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -O sax")),(0,l.kt)("td",{parentName:"tr",align:null},"Se guarda en ",(0,l.kt)("inlineCode",{parentName:"td"},"optionalDependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -g sax")),(0,l.kt)("td",{parentName:"tr",align:null},"Instalar el paquete globalmente")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax@next")),(0,l.kt)("td",{parentName:"tr",align:null},"Se instala desde el tag ",(0,l.kt)("inlineCode",{parentName:"td"},"next"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),(0,l.kt)("td",{parentName:"tr",align:null},"Especificar versi\xf3n ",(0,l.kt)("inlineCode",{parentName:"td"},"3.0.0"))))),(0,l.kt)("h2",{id:"ubicaciones-de-paquetes-soportados"},"Ubicaciones de paquetes soportados"),(0,l.kt)("h3",{id:"instalar-desde-el-registro-de-npm"},"Instalar desde el registro de npm"),(0,l.kt)("p",null,"El comando ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add package-name")," instalar\xe1 la versi\xf3n m\xe1s reciente del paquete ",(0,l.kt)("inlineCode",{parentName:"p"},"package-name")," desde el ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"registro de npm")," por defecto."),(0,l.kt)("p",null,"Si se ejecuta en el workspace, el comando primero intentara verificar si otros proyectos en el workspace usan el paquete especificado. Si es as\xed, se instalar\xe1 el rango de versi\xf3n ya previamente instalado."),(0,l.kt)("p",null,"Tambi\xe9n puede instalar paquetes con:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"etiqueta: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),(0,l.kt)("li",{parentName:"ul"},"versi\xf3n: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),(0,l.kt)("li",{parentName:"ul"},"rango de versiones: ",(0,l.kt)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">=0.1.0 <0.2.0"'))),(0,l.kt)("h3",{id:"instalar-desde-el-espacio-de-trabajo"},"Instalar desde el espacio de trabajo"),(0,l.kt)("p",null,"Tenga en cuenta que al a\xf1adir dependencias y trabajar dentro de un ",(0,l.kt)("a",{parentName:"p",href:"/es/next/workspaces"},"espacio de trabajo"),", los paquetes se instalar\xe1n desde las fuentes configuradas, dependiendo de si ",(0,l.kt)("a",{parentName:"p",href:"/es/next/workspaces#link-workspace-packages"},(0,l.kt)("inlineCode",{parentName:"a"},"link-workspace-packages"))," est\xe1 configurado, y el uso de la opci\xf3n ",(0,l.kt)("a",{parentName:"p",href:"/es/next/workspaces#workspace-ranges-workspace"},(0,l.kt)("inlineCode",{parentName:"a"},"workspace: range protocol")),"."),(0,l.kt)("h3",{id:"instalar-desde-el-sistema-de-archivos-local"},"Instalar desde el sistema de archivos local"),(0,l.kt)("p",null,"Hay dos formas de instalar desde el sistema de archivos local:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"desde un archivo tarball (",(0,l.kt)("inlineCode",{parentName:"li"},".tar"),", ",(0,l.kt)("inlineCode",{parentName:"li"},".tar.gz"),"o ",(0,l.kt)("inlineCode",{parentName:"li"},".tgz"),")"),(0,l.kt)("li",{parentName:"ol"},"de un directorio")),(0,l.kt)("p",null,"Ejemplos:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tar.gz\npnpm add ./some-directory\n")),(0,l.kt)("p",null,"Cuando se instala desde un directorio, se crear\xe1 un enlace simb\xf3lico en el ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," del proyecto, por lo que es lo mismo que ejecutar ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm link"),"."),(0,l.kt)("h3",{id:"instalar-desde-tarball-remoto"},"Instalar desde tarball remoto"),(0,l.kt)("p",null,'El argumento debe ser un URL obtenible que empiece por "http://" o "https://".'),(0,l.kt)("p",null,"Ejemplo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),(0,l.kt)("h3",{id:"instalar-desde-el-registro-de-npm-1"},"Instalar desde el registro de npm"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),(0,l.kt)("p",null,"Instala el paquete desde el proveedor de Git alojado, clon\xe1ndolo con Git. Puede utilizar un protocolo para determinados proveedores Git. Por ejemplo, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add github:user/repo")),(0,l.kt)("p",null,"Puede instalar desde Git mediante:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\xfaltimo commit del master: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),(0,l.kt)("li",{parentName:"ul"},"commit: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),(0,l.kt)("li",{parentName:"ul"},"branch: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#master")),(0,l.kt)("li",{parentName:"ul"},"rango de versiones: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver:^2.0.0"))),(0,l.kt)("h2",{id:"opciones"},"Opciones"),(0,l.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,l.kt)("p",null,"Instala los paquetes especificados como una dependencia com\xfan: ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,l.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,l.kt)("p",null,"Instala los paquetes especificados como ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,l.kt)("p",null,"Instala los paquetes especificados como ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--save-exact--e"},"--save-exact, -E"),(0,l.kt)("p",null,"Las dependencias guardadas se configurar\xe1n con una versi\xf3n exacta en lugar de utilizar el operador de rango semver por defecto de pnpm."),(0,l.kt)("h3",{id:"--save-peer"},"--save-peer"),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"--save-peer")," will add one or more packages to ",(0,l.kt)("inlineCode",{parentName:"p"},"peerDependencies")," and install them as dev dependencies."),(0,l.kt)("h3",{id:"--ignore-workspace-root-check"},"--ignore-workspace-root-check"),(0,l.kt)("p",null,"Adding a new dependency to the root workspace package fails, unless the ",(0,l.kt)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"-w")," flag is used."),(0,l.kt)("p",null,"For instance, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add debug -w"),"."),(0,l.kt)("h3",{id:"--global--g"},"--global, -g"),(0,l.kt)("p",null,"Install a package globally."),(0,l.kt)("h3",{id:"--workspace"},"--workspace"),(0,l.kt)("p",null,"Only adds the new dependency if it is found in the workspace."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/es/next/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);