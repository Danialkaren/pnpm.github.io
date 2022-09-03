"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7944],{9613:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(9496);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=i,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?t.createElement(f,a(a({ref:n},c),{},{components:r})):t.createElement(f,a({ref:n},c))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9402:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var t=r(2081),i=r(4604),o=(r(9496),r(9613)),a=["components"],l={id:"errors",title:"Codici di errore"},p=void 0,s={unversionedId:"errors",id:"errors",title:"Codici di errore",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/errors.md",sourceDirName:".",slug:"/errors",permalink:"/it/next/errors",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"errors",title:"Codici di errore"},sidebar:"docs",previous:{title:"Confronto tra le funzionalit\xe0",permalink:"/it/next/feature-comparison"},next:{title:"Loghi",permalink:"/it/next/logos"}},c={},d=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",level:2},{value:"ERR_PNPM_PEER_DEP_ISSUES",id:"err_pnpm_peer_dep_issues",level:2},{value:"ERR_PNPM_OUTDATED_LOCKFILE",id:"err_pnpm_outdated_lockfile",level:2}],u={toc:d};function m(e){var n=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,o.kt)("p",null,"\xc8 presente una cartella dei moduli ed \xe8 collegata a una cartella dell'archivio diversa."),(0,o.kt)("p",null,"Se hai modificato intenzionalmente la cartella dell'archiviio, esegui ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," e pnpm reinstaller\xe0 le dipendenze utilizzando il nuovo archivio."),(0,o.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,o.kt)("p",null,"Un progetto ha una dipendenza dallo spazio di lavoro che non esiste nello spazio di lavoro."),(0,o.kt)("p",null,"Ad esempio, il pacchetto ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," ha ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@1.0.0")," nelle dipendenze (",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,o.kt)("p",null,"Tuttavia, c'\xe8 solo ",(0,o.kt)("inlineCode",{parentName:"p"},"bar@2.0.0")," nell'area di lavoro, quindi ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," fallir\xe0."),(0,o.kt)("p",null,"Per correggere questo errore, tutte le dipendenze che utilizzano il ",(0,o.kt)("a",{parentName:"p",href:"/it/next/workspaces#workspace-protocol-workspace"},"protocollo dello spazio di lavoro")," devono essere aggiornate per utilizzare le versioni dei pacchetti presenti nell'area di lavoro. Questa operazione pu\xf2 essere eseguita manualmente o utilizzando il comando ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm -r update"),"."),(0,o.kt)("h2",{id:"err_pnpm_peer_dep_issues"},"ERR_PNPM_PEER_DEP_ISSUES"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," avr\xe0 esito negativo se il progetto ha dipendenze peer non risolte o se le dipendenze peer non corrispondono agli intervalli desiderati. Per risolvere questo problema, installa le dipendenze peer mancanti."),(0,o.kt)("p",null,"Puoi anche ignorare selettivamente questi errori usando i campi ",(0,o.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesignoremissing"},"pnpm.peerDependencyRules.ignoreMissing")," e ",(0,o.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesallowedversions"},"pnpm.peerDependencyRules.allowedVersions")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("h2",{id:"err_pnpm_outdated_lockfile"},"ERR_PNPM_OUTDATED_LOCKFILE"),(0,o.kt)("p",null,"Questo errore si verifica quando l'installazione non pu\xf2 essere eseguita senza modifiche al file di blocco. Ci\xf2 potrebbe verificarsi in un ambiente CI se qualcuno ha modificato un file ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," nel repository senza eseguire ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," in seguito. Oppure qualcuno ha dimenticato di eseguire il commit delle modifiche al file di blocco."),(0,o.kt)("p",null,"Per correggere questo errore, esegui semplicemente ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm install")," e salva le modifiche nel file di blocco."))}m.isMDXComponent=!0}}]);