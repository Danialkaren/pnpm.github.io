"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6e3],{9613:(e,n,o)=>{o.d(n,{Zo:()=>s,kt:()=>u});var t=o(9496);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function l(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function p(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=t.createContext({}),m=function(e){var n=t.useContext(i),o=n;return e&&(o="function"==typeof e?e(n):l(l({},n),e)),o},s=function(e){var n=m(e.components);return t.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(o),u=r,v=c["".concat(i,".").concat(u)]||c[u]||d[u]||a;return o?t.createElement(v,l(l({ref:n},s),{},{components:o})):t.createElement(v,l({ref:n},s))}));function u(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=c;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var m=2;m<a;m++)l[m]=o[m];return t.createElement.apply(null,l)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},7444:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>m,toc:()=>d});var t=o(2081),r=o(4604),a=(o(9496),o(9613)),l=["components"],p={id:"uninstall",title:"Desinstalando o pnpm"},i=void 0,m={unversionedId:"uninstall",id:"version-7.x/uninstall",title:"Desinstalando o pnpm",description:"Removendo os pacotes instalados globalmente",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-7.x/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/pt/uninstall",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"7.x",frontMatter:{id:"uninstall",title:"Desinstalando o pnpm"},sidebar:"version-7.x/docs",previous:{title:"Como os pares s\xe3o resolvidos",permalink:"/pt/how-peers-are-resolved"},next:{title:"pnpm vs npm",permalink:"/pt/pnpm-vs-npm"}},s={},d=[{value:"Removendo os pacotes instalados globalmente",id:"removendo-os-pacotes-instalados-globalmente",level:2},{value:"Removendo a ferramenta de linha de comando pnpm",id:"removendo-a-ferramenta-de-linha-de-comando-pnpm",level:2},{value:"Removendo o armazenamento de conte\xfado endere\xe7\xe1vel global",id:"removendo-o-armazenamento-de-conte\xfado-endere\xe7\xe1vel-global",level:2}],c={toc:d};function u(e){var n=e.components,o=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,t.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"removendo-os-pacotes-instalados-globalmente"},"Removendo os pacotes instalados globalmente"),(0,a.kt)("p",null,"Antes de remover o CLI do pnpm, voc\xea pode tamb\xe9m remover todos os pacotes globais instalados pelo pnpm."),(0,a.kt)("p",null,"Para listar todos os pacotes globais, execute ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),". Existem duas maneiras de se remover os pacotes globais:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Execute ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm rm -r <pkg>...")," com cada pacote global listado."),(0,a.kt)("li",{parentName:"ol"},"Execute ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm root -g")," para encontrar o local do diret\xf3rio global e remov\xea-lo manualmente.")),(0,a.kt)("h2",{id:"removendo-a-ferramenta-de-linha-de-comando-pnpm"},"Removendo a ferramenta de linha de comando pnpm"),(0,a.kt)("p",null,"Se voc\xea usou o script aut\xf4nomo para instalar o pnpm, poder\xe1 desinstalar a CLI do pnpm removendo o diret\xf3rio inicial do pnpm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rm -rf $PNPM_HOME\n")),(0,a.kt)("p",null,"Voc\xea tamb\xe9m pode limpar a var\xedavel de ambiente ",(0,a.kt)("inlineCode",{parentName:"p"},"PNPM_HOME")," em seu arquivo de configura\xe7\xe3o do shell (",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.bashrc"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.zshrc")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.config/fish/config.fish"),")."),(0,a.kt)("p",null,"Se voc\xea usou o npm para instalar o pnpm, ent\xe3o deve utilizar o npm para remov\xea-lo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,a.kt)("h2",{id:"removendo-o-armazenamento-de-conte\xfado-endere\xe7\xe1vel-global"},"Removendo o armazenamento de conte\xfado endere\xe7\xe1vel global"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rm -rf $(pnpm store path)\n")),(0,a.kt)("p",null,"Se voc\xea usou o pnpm em um disco adicional ou particionado, voc\xea deve executar o comando acima em cada disco onde o pnpm foi usado. O pnpm cria um armazenamento por disco."))}u.isMDXComponent=!0}}]);