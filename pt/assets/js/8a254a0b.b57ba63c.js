"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1126],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),i=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=i(n),u=r,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(k,p(p({ref:t},s),{},{components:n})):o.createElement(k,p({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var i=2;i<a;i++)p[i]=n[i];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var o=n(2081),r=n(4604),a=(n(9496),n(9613)),p=["components"],l={id:"exec",title:"pnpm exec"},c=void 0,i={unversionedId:"cli/exec",id:"cli/exec",title:"pnpm exec",description:"Executa um comando shell no escopo de um projeto.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/pt/next/cli/exec",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"docs",previous:{title:"pnpm test",permalink:"/pt/next/cli/test"},next:{title:"pnpm dlx",permalink:"/pt/next/cli/dlx"}},s={},m=[{value:"Exemplos",id:"exemplos",level:2},{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"Exemplos",id:"exemplos-1",level:4},{value:"--parallel",id:"--parallel",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],d={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,p);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Executa um comando shell no escopo de um projeto."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," \xe9 adicionado ao ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),", ent\xe3o ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm exec")," permite executar comandos de depend\xeancias."),(0,a.kt)("h2",{id:"exemplos"},"Exemplos"),(0,a.kt)("p",null,"Se voc\xea tem o Jest como depend\xeancia do seu projeto, n\xe3o h\xe1 necessidade de instalar o Jest globalmente, basta execut\xe1-lo com ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm exec"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,a.kt)("p",null,"A parte do ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," \xe9 realmente opcional quando o comando n\xe3o est\xe1 em conflito com um comando interno pnpm, ent\xe3o voc\xea tamb\xe9m pode executar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,a.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,a.kt)("p",null,"Quaisquer op\xe7\xf5es para o comando ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," devem ser listadas antes de sua palavra-chave. As op\xe7\xf5es listadas ap\xf3s a palavra-chave ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," s\xe3o passadas para o comando executado."),(0,a.kt)("p",null,"Bom. O pnpm ser\xe1 executado recursivamente:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -r exec jest\n")),(0,a.kt)("p",null,"Ruim. O pnpm n\xe3o ser\xe1 executado recursivamente, mas ",(0,a.kt)("inlineCode",{parentName:"p"},"jest")," ser\xe1 executado com a op\xe7\xe3o ",(0,a.kt)("inlineCode",{parentName:"p"},"-r"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm exec jest -r\n")),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"Execute o comando shell em cada projeto do espa\xe7o de trabalho."),(0,a.kt)("p",null,"O nome do pacote atual est\xe1 dispon\xedvel atrav\xe9s da vari\xe1vel de ambiente ",(0,a.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME"),"."),(0,a.kt)("h4",{id:"exemplos-1"},"Exemplos"),(0,a.kt)("p",null,"Remova os ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," de todos os pacotes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,a.kt)("p",null,"Veja as informa\xe7\xf5es de todos os pacotes no projeto. Este comando deve ser usado com a op\xe7\xe3o ",(0,a.kt)("inlineCode",{parentName:"p"},"--shell-mode")," (ou ",(0,a.kt)("inlineCode",{parentName:"p"},"-c"),") para que a vari\xe1vel de ambiente funcione."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,a.kt)("h3",{id:"--parallel"},"--parallel"),(0,a.kt)("p",null,"Ignora completamente a valida\xe7\xe3o e a classifica\xe7\xe3o topol\xf3gica, executando um determinado script imediatamente em todos os pacotes correspondentes com sa\xedda de streaming fixa. Esta \xe9 a flag preferencial para processos de longa dura\xe7\xe3o em muitos pacotes, por exemplo, um processo de compila\xe7\xe3o demorado."),(0,a.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,a.kt)("p",null,"Executa o comando em um shell. Utilize ",(0,a.kt)("inlineCode",{parentName:"p"},"/bin/sh")," no UNIX e ",(0,a.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," no Windows."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pt/next/filtering"},"Leia mais sobre filtragem.")))}u.isMDXComponent=!0}}]);