"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5428],{9613:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(9496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(a),k=l,u=c["".concat(o,".").concat(k)]||c[k]||m[k]||r;return a?n.createElement(u,i(i({ref:t},s),{},{components:a})):n.createElement(u,i({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},427:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>m});var n=a(2081),l=a(4604),r=(a(9496),a(9613)),i=["components"],p={id:"add",title:"pnpm add <pkg>"},o=void 0,d={unversionedId:"cli/add",id:"version-6.x/cli/add",title:"pnpm add <pkg>",description:"Installs a package and any packages that it depends on.",source:"@site/versioned_docs/version-6.x/cli/add.md",sourceDirName:"cli",slug:"/cli/add",permalink:"/6.x/cli/add",draft:!1,editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/versioned_docs/version-6.x/cli/add.md",tags:[],version:"6.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1647463814,formattedLastUpdatedAt:"Mar 16, 2022",frontMatter:{id:"add",title:"pnpm add <pkg>"},sidebar:"version-6.x/docs",previous:{title:"Scripts",permalink:"/6.x/scripts"},next:{title:"pnpm install",permalink:"/6.x/cli/install"}},s={},m=[{value:"TL;DR",id:"tldr",level:2},{value:"Supported package locations",id:"supported-package-locations",level:2},{value:"Install from npm registry",id:"install-from-npm-registry",level:3},{value:"Install from the workspace",id:"install-from-the-workspace",level:3},{value:"Install from local file system",id:"install-from-local-file-system",level:3},{value:"Install from remote tarball",id:"install-from-remote-tarball",level:3},{value:"Install from Git repository",id:"install-from-git-repository",level:3},{value:"Options",id:"options",level:2},{value:"--save-prod, -P",id:"--save-prod--p",level:3},{value:"--save-dev, -D",id:"--save-dev--d",level:3},{value:"--save-optional, -O",id:"--save-optional--o",level:3},{value:"--save-exact, -E",id:"--save-exact--e",level:3},{value:"--save-peer",id:"--save-peer",level:3},{value:"--ignore-workspace-root-check, -W",id:"--ignore-workspace-root-check--w",level:3},{value:"--global, -g",id:"--global--g",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],c={toc:m};function k(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Installs a package and any packages that it depends on.\nBy default, any new package is installed as a production dependency."),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax")),(0,r.kt)("td",{parentName:"tr",align:null},"Save to ",(0,r.kt)("inlineCode",{parentName:"td"},"dependencies"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add -D sax")),(0,r.kt)("td",{parentName:"tr",align:null},"Save to ",(0,r.kt)("inlineCode",{parentName:"td"},"devDependencies"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add -O sax")),(0,r.kt)("td",{parentName:"tr",align:null},"Save to ",(0,r.kt)("inlineCode",{parentName:"td"},"optionalDependencies"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add -g sax ")),(0,r.kt)("td",{parentName:"tr",align:null},"Install package globally")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax@next")),(0,r.kt)("td",{parentName:"tr",align:null},"Install from the ",(0,r.kt)("inlineCode",{parentName:"td"},"next")," tag")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Specify version ",(0,r.kt)("inlineCode",{parentName:"td"},"3.0.0"))))),(0,r.kt)("h2",{id:"supported-package-locations"},"Supported package locations"),(0,r.kt)("h3",{id:"install-from-npm-registry"},"Install from npm registry"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add package-name")," will install the latest version of ",(0,r.kt)("inlineCode",{parentName:"p"},"package-name")," from\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registry")," by default."),(0,r.kt)("p",null,"If executed in a workspace, the command will first try to check whether other\nprojects in the workspace use the specified package. If so, the already used version range\nwill be installed."),(0,r.kt)("p",null,"You may also install packages by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"tag: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),(0,r.kt)("li",{parentName:"ul"},"version: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),(0,r.kt)("li",{parentName:"ul"},"version range: ",(0,r.kt)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">=0.1.0 <0.2.0"'))),(0,r.kt)("h3",{id:"install-from-the-workspace"},"Install from the workspace"),(0,r.kt)("p",null,"Note that when adding dependencies and working within a ",(0,r.kt)("a",{parentName:"p",href:"/6.x/workspaces"},"workspace"),", packages\nwill be installed from the configured sources, depending on whether or not\n",(0,r.kt)("a",{parentName:"p",href:"/6.x/workspaces#link-workspace-packages"},(0,r.kt)("inlineCode",{parentName:"a"},"link-workspace-packages"))," is set, and use of the\n",(0,r.kt)("a",{parentName:"p",href:"/6.x/workspaces#workspace-ranges-workspace"},(0,r.kt)("inlineCode",{parentName:"a"},"workspace: range protocol")),"."),(0,r.kt)("h3",{id:"install-from-local-file-system"},"Install from local file system"),(0,r.kt)("p",null,"There are two ways to install from the local file system:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"from a tarball file (",(0,r.kt)("inlineCode",{parentName:"li"},".tar"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".tar.gz"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},".tgz"),")"),(0,r.kt)("li",{parentName:"ol"},"from a directory")),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tar.gz\npnpm add ./some-directory\n")),(0,r.kt)("p",null,"When you install from a directory, a symlink will be created in the current\nproject's ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),", so it is the same as running ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm link"),"."),(0,r.kt)("h3",{id:"install-from-remote-tarball"},"Install from remote tarball"),(0,r.kt)("p",null,'The argument must be a fetchable URL starting with "http://" or "https://".'),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),(0,r.kt)("h3",{id:"install-from-git-repository"},"Install from Git repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),(0,r.kt)("p",null,"Installs the package from the hosted Git provider, cloning it with Git.\nYou can use a protocol for certain Git providers. For example,\n",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add github:user/repo")),(0,r.kt)("p",null,"You may install from Git by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"latest commit from master: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),(0,r.kt)("li",{parentName:"ul"},"commit: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),(0,r.kt)("li",{parentName:"ul"},"branch: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#master")),(0,r.kt)("li",{parentName:"ul"},"version range: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver:^2.0.0"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,r.kt)("p",null,"Install the specified packages as regular ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,r.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,r.kt)("p",null,"Install the specified packages as ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,r.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,r.kt)("p",null,"Install the specified packages as ",(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,r.kt)("h3",{id:"--save-exact--e"},"--save-exact, -E"),(0,r.kt)("p",null,"Saved dependencies will be configured with an exact version rather than using\npnpm's default semver range operator."),(0,r.kt)("h3",{id:"--save-peer"},"--save-peer"),(0,r.kt)("p",null,"Added in: v3.2.0"),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-peer")," will add one or more packages to ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies")," and\ninstall them as dev dependencies."),(0,r.kt)("h3",{id:"--ignore-workspace-root-check--w"},"--ignore-workspace-root-check, -W"),(0,r.kt)("p",null,"Added in: v3.6.0"),(0,r.kt)("p",null,"Adding a new dependency to the root workspace package fails, unless the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-W")," flag is used."),(0,r.kt)("p",null,"For instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add debug -W"),"."),(0,r.kt)("h3",{id:"--global--g"},"--global, -g"),(0,r.kt)("p",null,"Install a package globally."),(0,r.kt)("h3",{id:"--workspace"},"--workspace"),(0,r.kt)("p",null,"Added in: v4.4.0"),(0,r.kt)("p",null,"Only adds the new dependency if it is found in the workspace."),(0,r.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/6.x/filtering"},"Read more about filtering.")))}k.isMDXComponent=!0}}]);