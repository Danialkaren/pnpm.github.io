"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4866],{9613:(e,r,n)=>{n.d(r,{Zo:()=>m,kt:()=>d});var t=n(9496);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=t.createContext({}),s=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},m=function(e){var r=s(e.components);return t.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,p=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=l,f=c["".concat(o,".").concat(d)]||c[d]||u[d]||p;return n?t.createElement(f,a(a({ref:r},m),{},{components:n})):t.createElement(f,a({ref:r},m))}));function d(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var p=n.length,a=new Array(p);a[0]=c;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<p;s++)a[s]=n[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7491:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var t=n(2962),l=n(2742),p=(n(9496),n(9613)),a=["components"],i={id:"uninstall",title:"D\xe9sinstaller pnpm"},o=void 0,s={unversionedId:"uninstall",id:"version-7.x/uninstall",title:"D\xe9sinstaller pnpm",description:"Supprimer globalement les packages install\xe9s",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-7.x/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/fr/uninstall",draft:!1,editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"7.x",frontMatter:{id:"uninstall",title:"D\xe9sinstaller pnpm"},sidebar:"version-7.x/docs",previous:{title:"How peers are resolved",permalink:"/fr/how-peers-are-resolved"},next:{title:"pnpm vs npm",permalink:"/fr/pnpm-vs-npm"}},m={},u=[{value:"Supprimer globalement les packages install\xe9s",id:"supprimer-globalement-les-packages-install\xe9s",level:2},{value:"Supprimer l&#39;interface de commande de pnpm",id:"supprimer-linterface-de-commande-de-pnpm",level:2},{value:"Supprimer la m\xe9moire d&#39;adressage globale",id:"supprimer-la-m\xe9moire-dadressage-globale",level:2}],c={toc:u};function d(e){var r=e.components,n=(0,l.Z)(e,a);return(0,p.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"supprimer-globalement-les-packages-install\xe9s"},"Supprimer globalement les packages install\xe9s"),(0,p.kt)("p",null,"Avant de supprimer la CLI pnpm, il peut \xeatre judicieux de supprimer tous les packages globaux qui ont \xe9t\xe9 install\xe9s par pnpm."),(0,p.kt)("p",null,"Pour r\xe9pertorier tous les packages globaux, ex\xe9cutez ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),". Il existe deux mani\xe8res de supprimer les packages globaux:"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"Ex\xe9cutez ",(0,p.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>...")," avec chaque package global r\xe9pertori\xe9."),(0,p.kt)("li",{parentName:"ol"},"Ex\xe9cutez ",(0,p.kt)("inlineCode",{parentName:"li"},"pnpm root -g")," pour trouver l'emplacement du r\xe9pertoire global et supprimez-le manuellement.")),(0,p.kt)("h2",{id:"supprimer-linterface-de-commande-de-pnpm"},"Supprimer l'interface de commande de pnpm"),(0,p.kt)("p",null,"If you used the standalone script to install pnpm, then you should be able to uninstall the pnpm CLI by removing the pnpm home directory:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"rm -rf $PNPM_HOME\n")),(0,p.kt)("p",null,"You might also want to clean the ",(0,p.kt)("inlineCode",{parentName:"p"},"PNPM_HOME")," env variable in your shell configuration file (",(0,p.kt)("inlineCode",{parentName:"p"},"$HOME/.bashrc"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"$HOME/.zshrc")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"$HOME/.config/fish/config.fish"),")."),(0,p.kt)("p",null,"Si vous avez utilis\xe9 npm pour installer pnpm, vous devez utiliser npm pour d\xe9sinstaller pnpm\xa0:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,p.kt)("h2",{id:"supprimer-la-m\xe9moire-dadressage-globale"},"Supprimer la m\xe9moire d'adressage globale"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"rm -rf $(pnpm store path)\n")),(0,p.kt)("p",null,"If you used pnpm in non-primary disks, then you must run the above command in every disk, where pnpm was used. pnpm creates one store per disk."))}d.isMDXComponent=!0}}]);