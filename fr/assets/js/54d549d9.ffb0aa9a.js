"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2289],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(2081),l=n(4604),a=(n(9496),n(9613)),p=["components"],i={id:"exec",title:"pnpm exec"},o=void 0,c={unversionedId:"cli/exec",id:"cli/exec",title:"pnpm exec",description:"Ex\xe9cute une commande shell dans le cadre d'un projet.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/fr/next/cli/exec",draft:!1,editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"current",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"docs",previous:{title:"pnpm test",permalink:"/fr/next/cli/test"},next:{title:"pnpm dlx",permalink:"/fr/next/cli/dlx"}},s={},u=[{value:"Exemples",id:"exemples",level:2},{value:"Options",id:"options",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"Exemples",id:"exemples-1",level:4},{value:"--parallel",id:"--parallel",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ex\xe9cute une commande shell dans le cadre d'un projet."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," est ajout\xe9 au ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),", donc ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm exec")," permet d'ex\xe9cuter des commandes de d\xe9pendances."),(0,a.kt)("h2",{id:"exemples"},"Exemples"),(0,a.kt)("p",null,"Si vous avez Jest en tant que d\xe9pendance de votre projet, il n'est pas n\xe9cessaire d'installer Jest globalement, ex\xe9cutez-le simplement avec ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm exec"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,a.kt)("p",null,"La partie ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," est en fait facultative lorsque la commande n'est pas en conflit avec une commande pnpm int\xe9gr\xe9e, vous pouvez donc \xe9galement ex\xe9cuter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,"Toute option pour la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," doit \xeatre list\xe9e avant le mot-cl\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},"exec"),". Les options list\xe9es apr\xe8s le mot-cl\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," sont pass\xe9es \xe0 la commande ex\xe9cut\xe9e."),(0,a.kt)("p",null,"Bien. pnpm s'ex\xe9cutera de mani\xe8re r\xe9cursive\xa0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -r exec jest\n")),(0,a.kt)("p",null,"Mauvais, ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm")," ne s'ex\xe9cutera pas de mani\xe8re r\xe9cursive mais ",(0,a.kt)("inlineCode",{parentName:"p"},"jest")," sera ex\xe9cutait avec l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"-r")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm exec jest -r\n")),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"Ex\xe9cutez la commande shell dans chaque projet de l'espace de travail."),(0,a.kt)("p",null,"Le nom du package actuel est disponible via la variable d'environnement ",(0,a.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME"),"."),(0,a.kt)("h4",{id:"exemples-1"},"Exemples"),(0,a.kt)("p",null,"Nettoyer les installations de ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," pour tous les packets :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,a.kt)("p",null,"Affiche l'information du packet pour tous les packets. Ceci devrait \xeatre utilis\xe9 avec l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--shell-mode")," (ou ",(0,a.kt)("inlineCode",{parentName:"p"},"-c"),") pour que la variable d'environnement fonctionne."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,a.kt)("h3",{id:"--parallel"},"--parallel"),(0,a.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,a.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,a.kt)("p",null,"Ex\xe9cute la commande \xe0 l'int\xe9rieur d'un shell. Utilise ",(0,a.kt)("inlineCode",{parentName:"p"},"/bin/sh")," sous UNIX et ",(0,a.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," sous Windows."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/fr/next/filtering"},"En savoir plus sur le filtrage.")))}d.isMDXComponent=!0}}]);