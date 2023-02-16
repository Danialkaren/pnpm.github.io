"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[496],{9613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=o(a),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3866:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var n=a(2962),r=a(2742),l=(a(9496),a(9613)),i=["components"],p={id:"workspaces",title:"Workspace"},s=void 0,o={unversionedId:"workspaces",id:"version-7.x/workspaces",title:"Workspace",description:"pnpm a un support int\xe9gr\xe9 pour les monorepo (d\xe9p\xf4ts multi-package, d\xe9p\xf4ts multi-projets ou d\xe9p\xf4ts monolithiques). Vous pouvez cr\xe9er un espace de travail pour unir plusieurs projets dans un seul r\xe9f\xe9rentiel.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-7.x/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/fr/workspaces",draft:!1,editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"7.x",frontMatter:{id:"workspaces",title:"Workspace"},sidebar:"version-7.x/docs",previous:{title:".pnpmfile.cjs",permalink:"/fr/pnpmfile"},next:{title:"Alias",permalink:"/fr/aliases"}},d={},u=[{value:"Protocole d&#39;espace de travail (workspace:)",id:"protocole-despace-de-travail-workspace",level:2},{value:"R\xe9f\xe9rencement des packages de l&#39;espace de travail via des alias",id:"r\xe9f\xe9rencement-des-packages-de-lespace-de-travail-via-des-alias",level:3},{value:"R\xe9f\xe9rencement des packages de l&#39;espace de travail via leur chemin relatif",id:"r\xe9f\xe9rencement-des-packages-de-lespace-de-travail-via-leur-chemin-relatif",level:3},{value:"Publier les packages de l&#39;espace de travail",id:"publier-les-packages-de-lespace-de-travail",level:3},{value:"Release workflow",id:"release-workflow",level:2},{value:"D\xe9pannage",id:"d\xe9pannage",level:2},{value:"Exemples d&#39;utilisation",id:"exemples-dutilisation",level:2}],m={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"pnpm a un support int\xe9gr\xe9 pour les monorepo (d\xe9p\xf4ts multi-package, d\xe9p\xf4ts multi-projets ou d\xe9p\xf4ts monolithiques). Vous pouvez cr\xe9er un espace de travail pour unir plusieurs projets dans un seul r\xe9f\xe9rentiel."),(0,l.kt)("p",null,"Un espace de travail doit avoir un fichier ",(0,l.kt)("a",{parentName:"p",href:"/fr/pnpm-workspace_yaml"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm-workspace.yaml"))," dans sa racine. Un espace de travail peut \xe9galement avoir un ",(0,l.kt)("a",{parentName:"p",href:"/fr/npmrc"},(0,l.kt)("inlineCode",{parentName:"a"},".npmrc"))," dans sa racine."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Si vous \xeates \xe0 la recherche d'une gestion monorepo, vous pouvez \xe9galement consulter ",(0,l.kt)("a",{parentName:"p",href:"https://bit.dev/?utm_source=pnpm&utm_medium=workspace_page"},"Bit"),". Bit utilise pnpm sous le capot mais automatise un tas de choses qui sont actuellement faites manuellement dans un espace de travail traditionnel g\xe9r\xe9 par pnpm / npm / Yarn. Il y a un article sur ",(0,l.kt)("inlineCode",{parentName:"p"},"bit install")," qui en parle : ",(0,l.kt)("a",{parentName:"p",href:"https://bit.cloud/blog/painless-monorepo-dependency-management-with-bit-l4f9fzyw?utm_source=pnpm&utm_medium=workspace_page"},"Painless Monorepo Dependency Management with Bit"),".")),(0,l.kt)("h2",{id:"protocole-despace-de-travail-workspace"},"Protocole d'espace de travail (workspace:)"),(0,l.kt)("p",null,"Par d\xe9faut, pnpm liera les packages \xe0 partir de l'espace de travail, si les packages disponibles correspondent aux plages d\xe9clar\xe9es. Par exemple, ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," est li\xe9 \xe0 ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," si ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," a ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo":"^1.0.0"')," dans ses d\xe9pendances et que ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," se trouve dans l'espace de travail. N\xe9anmoins, si ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," a ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," dans ses d\xe9pendances et que ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," n'est pas dans l'espace de travail, ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," sera install\xe9 \xe0 partir du registre. Ce comportement introduit certaines incertitudes."),(0,l.kt)("p",null,"Heureusement, pnpm prend en charge le protocole ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:"),". Lorsque ce protocole est utilis\xe9, pnpm refuse de r\xe9soudre autre chose qu\u2019un package de l'espace de travail local. Donc, si vous d\xe9finissez ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"'),", cette fois l'installation \xe9chouera car ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," n'est pas pr\xe9sent dans l'espace de travail."),(0,l.kt)("p",null,"Ce protocole est particuli\xe8rement utile lorsque l'option ",(0,l.kt)("a",{parentName:"p",href:"/fr/npmrc#link-workspace-packages"},"link-workspace-packages")," est d\xe9finie s\xfbr ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),". Dans ce cas, pnpm ne liera les packages de l'espace de travail que si le protocole ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:")," est utilis\xe9."),(0,l.kt)("h3",{id:"r\xe9f\xe9rencement-des-packages-de-lespace-de-travail-via-des-alias"},"R\xe9f\xe9rencement des packages de l'espace de travail via des alias"),(0,l.kt)("p",null,"Disons que vous avez un pakages dans l'espace de travail appel\xe9 ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),". G\xe9n\xe9ralement, vous devriez le r\xe9f\xe9rencer comme ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:*"'),"."),(0,l.kt)("p",null,"Si vous souhaitez utiliser un alias diff\xe9rent, la syntaxe suivante fonctionnera \xe9galement : ",(0,l.kt)("inlineCode",{parentName:"p"},'"bar": "workspace:foo@*"'),"."),(0,l.kt)("p",null,"Avant la publication, les alias sont convertis en d\xe9pendances alliac\xe9es standards. L'exemple ci-dessus deviendra : ",(0,l.kt)("inlineCode",{parentName:"p"},'"bar": "npm:foo@1.0.0"'),"."),(0,l.kt)("h3",{id:"r\xe9f\xe9rencement-des-packages-de-lespace-de-travail-via-leur-chemin-relatif"},"R\xe9f\xe9rencement des packages de l'espace de travail via leur chemin relatif"),(0,l.kt)("p",null,"Dans un espace de travail avec 2 packages :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+ packages\n    + foo\n    + bar\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"bar")," peut avoir ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," dans ses d\xe9pendances d\xe9clar\xe9es comme ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:../foo"'),". Avant la publication, ces sp\xe9cifications seront converties en versions standards support\xe9es par tous les gestionnaires de paquets."),(0,l.kt)("h3",{id:"publier-les-packages-de-lespace-de-travail"},"Publier les packages de l'espace de travail"),(0,l.kt)("p",null,"Lorsqu'un package de l'espace de travail est compress\xe9 dans une archive (que ce soit via ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm pack")," ou l'un des commandes de publication comme ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm publish"),"), nous rempla\xe7ons dynamiquement n'importe quel ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:")," d\xe9pendance par :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"La version correspondante dans l'espace de travail cible (si vous utilisez ",(0,l.kt)("inlineCode",{parentName:"li"},"workspace:*"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"workspace:~"),", ou ",(0,l.kt)("inlineCode",{parentName:"li"},"workspace:^"),")"),(0,l.kt)("li",{parentName:"ul"},"La plage semver associ\xe9e (pour tout autre type de plage)")),(0,l.kt)("p",null,"Par exemple, si nous avons ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bar"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"qar"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"zoo")," dans l'espace de travail et qu'ils sont tous en version ",(0,l.kt)("inlineCode",{parentName:"p"},"1.5.0"),", ce qui suit :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "workspace:*",\n        "bar": "workspace:~",\n        "qar": "workspace:^",\n        "zoo": "workspace:^1.5.0"\n    }\n}\n')),(0,l.kt)("p",null,"Sera transform\xe9 en :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "1.5.0",\n        "bar": "~1.5.0",\n        "qar": "^1.5.0",\n        "zoo": "^1.5.0"\n    }\n}\n')),(0,l.kt)("p",null,"This feature allows you to depend on your local workspace packages while still being able to publish the resulting packages to the remote registry without needing intermediary publish steps - your consumers will be able to use your published workspaces as any other package, still benefitting from the guarantees semver offers."),(0,l.kt)("h2",{id:"release-workflow"},"Release workflow"),(0,l.kt)("p",null,"Versioning packages inside a workspace is a complex task and pnpm currently does not provide a built-in solution for it. However, there are 2 well tested tools that handle versioning and support pnpm:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/changesets/changesets"},"changesets")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rushjs.io"},"Rush"),".")),(0,l.kt)("p",null,"Pour savoir comment configurer un r\xe9f\xe9rentiel \xe0 l'aide de Rush, veuillez vous r\xe9f\xe9rer a ",(0,l.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/setup_new_repo"},"cette page"),"."),(0,l.kt)("p",null,"Pour utiliser les Changesets avec pnpm, lisez ",(0,l.kt)("a",{parentName:"p",href:"/fr/using-changesets"},"ce guide"),"."),(0,l.kt)("h2",{id:"d\xe9pannage"},"D\xe9pannage"),(0,l.kt)("p",null,"pnpm cannot guarantee that scripts will be run in topological order if there are cycles between workspace dependencies. If pnpm detects cyclic dependencies during installation, it will produce a warning. If pnpm is able to find out which dependencies are causing the cycles, it will display them too."),(0,l.kt)("p",null,"If you see the message ",(0,l.kt)("inlineCode",{parentName:"p"},"There are cyclic workspace dependencies"),", please inspect workspace dependencies declared in ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h2",{id:"exemples-dutilisation"},"Exemples d'utilisation"),(0,l.kt)("p",null,"Voici quelques-uns des projets open source les plus populaires qui utilisent la fonction d'espace de travail de pnpm :"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Stars"),(0,l.kt)("th",{parentName:"tr",align:null},"Migration date"),(0,l.kt)("th",{parentName:"tr",align:null},"Migration commit"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vercel/next.js"},"Next.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vercel/next.js",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-05-29"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f7b81316aea4fc9962e5e54981a6d559004231aa"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vitejs/vite"},"Vite")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vitejs/vite",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3e1cce01d01493d33e50966d0d0fd39a86d229f9"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vuejs/vue-next"},"Vue 3.0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vuejs/vue-next",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-10-09"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"61c5fbd3e35152f5f32e95bf04d3ee083414cecb"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/prisma/prisma"},"Prisma")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/prisma/prisma",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"c4c83e788aa16d61bae7a6d00adc8a58b3789a06"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/slidevjs/slidev"},"Slidev")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/slidevjs/slidev",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-04-12"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d6783323eb1ab1fc612577eb63579c8f7bc99c3a"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/withastro/astro"},"Astro")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/withastro/astro",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-03-08"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"240d88aefe66c7d73b9c713c5da42ae789c011ce"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vercel/turborepo"},"Turborepo")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vercel/turborepo",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-03-02"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fd171519ec02a69c9afafc1bc5d9d1b481fba721"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/element-plus/element-plus"},"Element Plus")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/element-plus/element-plus",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-23"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f9e192535ff74d1443f1d9e0c5394fad10428629"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/verdaccio/verdaccio"},"Verdaccio")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/verdaccio/verdaccio",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"9dbf73e955fcb70b0a623c5ab89649b95146c744"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/nextauthjs/next-auth"},"NextAuth.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/nextauthjs/next-auth",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-05-03"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4f29d39521451e859dbdb83179756b372e3dd7aa"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vueuse/vueuse"},"VueUse")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vueuse/vueuse",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-25"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"826351ba1d9c514e34426c85f3d69fb9875c7dd9"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/sveltejs/kit"},"SvelteKit")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/sveltejs/kit",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"b164420ab26fa04fd0fbe0ac05431f36a89ef193"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/cyclejs/cyclejs"},"Cycle.js")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/cyclejs/cyclejs",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"f2187ab6688368edb904b649bd371a658f6a8637"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vercel/vercel"},"Vercel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vercel/vercel",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2023-01-12"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"9c768b98b71cfc72e8638bf5172be88c39e8fa69"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/vitest-dev/vitest"},"Vitest")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/vitest-dev/vitest",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-12-13"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"d6ff0ccb819716713f5eab5c046861f4d8e4f988"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Saul-Mirone/milkdown"},"Milkdown")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/Saul-Mirone/milkdown",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-26"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4b2e1dd6125bc2198fd1b851c4f00eda70e9b913"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/nhost/nhost"},"Nhost")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/nhost/nhost",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2022-02-07"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10a1799a1fef2f558f737de3bb6cadda2b50e58f"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/logto-io/logto"},"Logto")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/logto-io/logto",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-07-29"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0b002e07850c8e6d09b35d22fab56d3e99d77043"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/bytedance/bytemd"},"ByteMD")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/bytedance/bytemd",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-02-18"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"36ef25f1ea1cd0b08752df5f8c832302017bb7fb"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rollup/plugins"},"Rollup plugins")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/rollup/plugins",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-09-21"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"53fb18c0c2852598200c547a0b1d745d15b5b487"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/ice-lab/icestark"},"icestark")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://img.shields.io/github/stars/ice-lab/icestark",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},"2021-12-16"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4862326a8de53d02f617e7b1986774fd7540fccd"))))))}c.isMDXComponent=!0}}]);