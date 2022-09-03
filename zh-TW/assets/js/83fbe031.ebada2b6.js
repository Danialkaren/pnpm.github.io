"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6913],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>c});var a=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),m=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(t),c=l,k=d["".concat(o,".").concat(c)]||d[c]||u[c]||r;return t?a.createElement(k,p(p({ref:n},s),{},{components:t})):a.createElement(k,p({ref:n},s))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var m=2;m<r;m++)p[m]=t[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2433:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var a=t(2081),l=t(4604),r=(t(9496),t(9613)),p=["components"],i={id:"installation",title:"\u5b89\u88dd"},o=void 0,m={unversionedId:"installation",id:"installation",title:"\u5b89\u88dd",description:"\u4f7f\u7528\u7368\u7acb\u6307\u4ee4\u78bc\u5b89\u88dd",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/zh-TW/next/installation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"current",frontMatter:{id:"installation",title:"\u5b89\u88dd"},sidebar:"docs",previous:{title:"Motivation",permalink:"/zh-TW/next/motivation"},next:{title:"pnpm CLI",permalink:"/zh-TW/next/pnpm-cli"}},s={},u=[{value:"\u4f7f\u7528\u7368\u7acb\u6307\u4ee4\u78bc\u5b89\u88dd",id:"\u4f7f\u7528\u7368\u7acb\u6307\u4ee4\u78bc\u5b89\u88dd",level:2},{value:"\u4f7f\u7528 Corepack \u5b89\u88dd",id:"\u4f7f\u7528-corepack-\u5b89\u88dd",level:2},{value:"Using npm",id:"using-npm",level:2},{value:"Using Homebrew",id:"using-homebrew",level:2},{value:"Using Scoop",id:"using-scoop",level:2},{value:"\u76f8\u5bb9\u6027",id:"\u76f8\u5bb9\u6027",level:2},{value:"\u7591\u96e3\u6392\u89e3",id:"\u7591\u96e3\u6392\u89e3",level:2},{value:"Using a shorter alias",id:"using-a-shorter-alias",level:2},{value:"Uninstalling pnpm",id:"uninstalling-pnpm",level:2}],d={toc:u};function c(e){var n=e.components,t=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4f7f\u7528\u7368\u7acb\u6307\u4ee4\u78bc\u5b89\u88dd"},"\u4f7f\u7528\u7368\u7acb\u6307\u4ee4\u78bc\u5b89\u88dd"),(0,r.kt)("p",null,"\u5728 POSIX \u7cfb\u7d71\u4e0a\uff0c\u5373\u4f7f\u60a8\u6c92\u6709\u9810\u5148\u5b89\u88dd Node.js\uff0c\u4ecd\u53ef\u4ee5\u900f\u904e\u4e0b\u65b9\u547d\u4ee4\u5b89\u88dd pnpm\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u7684\u7cfb\u7d71\u4e2d\u6c92\u6709\u5b89\u88dd curl\uff0c\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528 wget\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"\u5728 Windows \u7cfb\u7d71\u4e0a\u5b89\u88dd \uff08\u4f7f\u7528PowerShell\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u4f86\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/next/cli/env"},"pnpm env")," \u547d\u4ee4\u4f86\u5b89\u88dd Node.js\u4e86\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528-corepack-\u5b89\u88dd"},"\u4f7f\u7528 Corepack \u5b89\u88dd"),(0,r.kt)("p",null,"Since v16.13, Node.js is shipping ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," for managing package managers. This is an experimental feature, so you need to enable it by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,r.kt)("p",null,"This will automatically install pnpm on your system. However, it probably won't be the latest version of pnpm. \u82e5\u8981\u5347\u7d1a\uff0c\u8acb\u6aa2\u67e5",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/releases/latest"},"\u6700\u65b0\u7684 pnpm \u7248\u672c"),"\uff0c\u7136\u5f8c\u57f7\u884c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack prepare pnpm@<version> --activate\n")),(0,r.kt)("h2",{id:"using-npm"},"Using npm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,r.kt)("h2",{id:"using-homebrew"},"Using Homebrew"),(0,r.kt)("p",null,"If you have the package manager installed, you can install pnpm using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,r.kt)("h2",{id:"using-scoop"},"Using Scoop"),(0,r.kt)("p",null,"If you have Scoop installed, you can install pnpm using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u60a8\u8981\u5728 CI \u4f3a\u670d\u5668\u4e0a\u4f7f\u7528 pnpm \u55ce? \u8acb\u53c3\u95b1:\u3008",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/next/continuous-integration"},"\u6301\u7e8c\u6574\u5408 (CI)"),"\u3009")),(0,r.kt)("h2",{id:"\u76f8\u5bb9\u6027"},"\u76f8\u5bb9\u6027"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u5177\u6709\u76f8\u61c9 Node.js \u7248\u672c\u652f\u63f4\u7684\u904e\u53bb pnpm \u7248\u672c\u6e05\u55ae\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 7"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,r.kt)("h2",{id:"\u7591\u96e3\u6392\u89e3"},"\u7591\u96e3\u6392\u89e3"),(0,r.kt)("p",null,"\u5982\u679c pnpm \u5df2\u640d\u6bc0\uff0c\u800c\u7121\u6cd5\u900f\u904e\u91cd\u65b0\u5b89\u88dd\u4f86\u4fee\u597d\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u624b\u52d5\u5c07\u5176\u5f9e PATH \u4e2d\u79fb\u9664\u3002"),(0,r.kt)("p",null,"\u8b93\u6211\u5011\u5047\u8a2d\u7576\u60a8\u57f7\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u6642\u6709\u4e0b\u5217\u7684\u932f\u8aa4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u8acb\u5617\u8a66\u900f\u904e\u57f7\u884c\u4ee5\u4e0b\u5167\u5bb9\u5c0b\u627e pnpm \u7684\u4f4d\u7f6e: ",(0,r.kt)("inlineCode",{parentName:"p"},"which pnpm"),"\u3002 \u5982\u679c\u60a8\u5728 Windows \u4e0a\uff0c\u8acb\u5728 Git Bash \u4e2d\u57f7\u884c\u6b64\u547d\u4ee4\u3002 \u60a8\u5c07\u53d6\u5f97 pnpm \u547d\u4ee4\u7684\u4f4d\u7f6e\uff0c\u4f8b\u5982:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,r.kt)("p",null,"Now that you know where the pnpm CLI is, open that directory and remove any pnpm-related files (",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),", etc). Once done, install pnpm again and it should work as expected."),(0,r.kt)("h2",{id:"using-a-shorter-alias"},"Using a shorter alias"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm")," might be hard to type, so you may use a shorter alias like ",(0,r.kt)("inlineCode",{parentName:"p"},"pn")," instead. Just put the following line to your ",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".zshrc"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"config.fish"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"alias pn=pnpm\n")),(0,r.kt)("h2",{id:"uninstalling-pnpm"},"Uninstalling pnpm"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u5f9e\u7cfb\u7d71\u53ca\u5176\u5beb\u5165\u78c1\u789f\u4e2d\u7684\u4efb\u4f55\u6a94\u6848\u4e2d\u79fb\u9664 pnpm CLI\uff0c\u8acb\u53c3\u95b1\u3008",(0,r.kt)("a",{parentName:"p",href:"/zh-TW/next/uninstall"},"\u89e3\u9664\u5b89\u88dd pnpm"),"\u3009\u3002"))}c.isMDXComponent=!0}}]);