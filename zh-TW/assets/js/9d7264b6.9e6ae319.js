"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5002],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var l=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=l.createContext({}),c=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return l.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,f=d["".concat(o,".").concat(u)]||d[u]||m[u]||a;return n?l.createElement(f,i(i({ref:t},s),{},{components:n})):l.createElement(f,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var l=n(2081),r=n(4604),a=(n(9496),n(9613)),i=["components"],p={id:"filtering",title:"\u7be9\u9078"},o=void 0,c={unversionedId:"filtering",id:"filtering",title:"\u7be9\u9078",description:"\u7be9\u9078\u529f\u80fd\u5141\u8a31\u60a8\u5c07\u547d\u4ee4\u9650\u5236\u70ba\u5c01\u88dd\u7684\u7279\u5b9a\u5b50\u96c6\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/filtering.md",sourceDirName:".",slug:"/filtering",permalink:"/zh-TW/next/filtering",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"current",frontMatter:{id:"filtering",title:"\u7be9\u9078"},sidebar:"docs",previous:{title:"\u8a2d\u5b9a",permalink:"/zh-TW/next/configuring"},next:{title:"Scripts",permalink:"/zh-TW/next/scripts"}},s={},m=[{value:"\u6bd4\u5c0d",id:"\u6bd4\u5c0d",level:2},{value:"--\u7be9\u9078 &lt;package_name&gt;",id:"--\u7be9\u9078-package_name",level:3},{value:"--filter &lt;package_name&gt;...",id:"--filter-package_name",level:3},{value:"--filter &lt;\u5c01\u88dd\u540d\u7a31&gt;^...",id:"--filter-\u5c01\u88dd\u540d\u7a31",level:3},{value:"--filter ...&lt;\u5c01\u88dd\u540d\u7a31&gt;",id:"--filter-\u5c01\u88dd\u540d\u7a31-1",level:3},{value:"--filter &quot;...^&lt;\u5c01\u88dd\u540d\u7a31&gt;&quot;",id:"--filter-\u5c01\u88dd\u540d\u7a31-2",level:3},{value:"--filter ./&lt;glob&gt;, --filter {&lt;glob&gt;}",id:"--filter-glob---filter-glob",level:3},{value:"--filter &quot;<since>&quot;",id:"--filter-since",level:3},{value:"Excluding",id:"excluding",level:2},{value:"Multiplicity",id:"multiplicity",level:2},{value:"--filter-prod &lt;filtering_pattern&gt;",id:"--filter-prod-filtering_pattern",level:2},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",level:2},{value:"--changed-files-ignore-pattern &lt;glob&gt;",id:"--changed-files-ignore-pattern-glob",level:2}],d={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7be9\u9078\u529f\u80fd\u5141\u8a31\u60a8\u5c07\u547d\u4ee4\u9650\u5236\u70ba\u5c01\u88dd\u7684\u7279\u5b9a\u5b50\u96c6\u3002"),(0,a.kt)("p",null,"pnpm \u652f\u63f4\u591a\u7a2e\u9078\u53d6\u5668\uff0c\u7528\u65bc\u4f9d\u540d\u7a31\u6216\u95dc\u4fc2\u9078\u53d6\u5c01\u88dd\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter")," (\u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"-F"),") \u65d7\u6a19\u6307\u5b9a\u9078\u64c7\u5668\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --\u7be9\u9078 <package_selector> <command>\n")),(0,a.kt)("h2",{id:"\u6bd4\u5c0d"},"\u6bd4\u5c0d"),(0,a.kt)("h3",{id:"--\u7be9\u9078-package_name"},"--\u7be9\u9078 ","<","package_name>"),(0,a.kt)("p",null,"\u8981\u9078\u53d6\u4e00\u500b\u5b8c\u5168\u7b26\u5408\u7684\u5c01\u88dd\uff0c\u53ea\u9700\u6307\u5b9a\u5b83\u7684\u540d\u7a31 (",(0,a.kt)("inlineCode",{parentName:"p"},"@scope/pkg"),") \u6216\u4f7f\u7528 \u4e00\u500b\u6a21\u5f0f\u4f86\u9078\u53d6\u4e00\u7d44\u5c01\u88dd (",(0,a.kt)("inlineCode",{parentName:"p"},"@scope/*"),")\u3002"),(0,a.kt)("p",null,"\u7bc4\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --\u7be9\u9078 "@babel/core" \u6e2c\u8a66\npnpm --\u7be9\u9078 "@babel/*" \u6e2c\u8a66\npnpm --\u7be9\u9078 "*core" \u6e2c\u8a66\n')),(0,a.kt)("p",null,"\u6307\u5b9a\u5c01\u88dd\u7684\u7bc4\u570d\u662f\u9078\u7528\u7684\uff0c\u56e0\u6b64\u5982\u679c\u627e\u4e0d\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"core"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"--filter=core")," \u5c07\u9078\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/core"),"\u3002 \u4f46\u662f\uff0c\u5982\u679c\u5de5\u4f5c\u5340\u5177\u6709\u591a\u500b\u540c\u540d\u7684\u5c01\u88dd (\u4f8b\u5982\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/core")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"@types/core"),")\uff0c \u5247\u6c92\u6709\u7bc4\u570d\u7684\u7be9\u9078\u5c07\u4e0d\u9078\u64c7\u4efb\u4f55\u5167\u5bb9\u3002"),(0,a.kt)("h3",{id:"--filter-package_name"},"--filter ","<","package_name>..."),(0,a.kt)("p",null,"\u8981\u9078\u53d6\u5c01\u88dd\u53ca\u5176\u76f8\u4f9d\u6027 (\u76f4\u63a5\u548c\u975e\u76f4\u63a5)\uff0c\u8acb\u5728 \u5c01\u88dd\u540d\u7a31\u5f8c\u7db4\u4e0a\u7701\u7565\u7b26\u865f\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"<\u5c01\u88dd\u540d\u7a31>..."),"\u3002 \u4f8b\u5982\uff0c\u4e0b\u4e00\u500b \u547d\u4ee4\u5c07\u57f7\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u53ca\u5176\u6240\u6709\u76f8\u4f9d\u6027\u7684\u6e2c\u8a66\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter foo... test\n")),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u6a21\u5f0f\u4f86\u9078\u64c7\u4e00\u7d44\u6839\u5c01\u88dd:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/preset-*..." test\n')),(0,a.kt)("h3",{id:"--filter-\u5c01\u88dd\u540d\u7a31"},"--filter ","<","\u5c01\u88dd\u540d\u7a31>^..."),(0,a.kt)("p",null,"\u82e5\u8981\u50c5\u9078\u53d6\u5c01\u88dd\u7684\u76f8\u4f9d\u9805 (\u76f4\u63a5\u548c\u975e\u76f4\u63a5)\uff0c \u8acb\u4ee5\u524d\u8ff0\u7684\u7701\u7565\u7b26\u865f\u642d\u914d\uff1e\u5f62\u7bad\u865f\u4f5c\u70ba\u540d\u7a31\u5c3e\u78bc\u3002 \u4f8b\u5982\uff0c \u4e0b\u4e00\u500b\u547d\u4ee4\u5c07\u57f7\u884c\u6240\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u7684\u76f8\u4f9d\u6027\u6e2c\u8a66:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "foo^..." test\n')),(0,a.kt)("h3",{id:"--filter-\u5c01\u88dd\u540d\u7a31-1"},"--filter ...","<","\u5c01\u88dd\u540d\u7a31>"),(0,a.kt)("p",null,"\u8981\u9078\u53d6\u5c01\u88dd\u53ca\u5176\u76f8\u4f9d\u6027\u5c01\u88dd (\u76f4\u63a5\u548c\u975e\u76f4\u63a5)\uff0c\u8acb\u5c07\u7701\u7565\u7b26\u865f\u4f5c\u70ba \u5c01\u88dd\u540d\u7a31\u9996\u78bc: ",(0,a.kt)("inlineCode",{parentName:"p"},"...<package_name>"),"\u3002 \u4f8b\u5982\uff0c\u9019\u5c07 \u57f7\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u4ee5\u53ca\u5176\u6240\u6709\u76f8\u4f9d\u5c01\u88dd\u7684\u6e2c\u8a66:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo test\n")),(0,a.kt)("h3",{id:"--filter-\u5c01\u88dd\u540d\u7a31-2"},'--filter "...^',"<",'\u5c01\u88dd\u540d\u7a31>"'),(0,a.kt)("p",null,"\u82e5\u8981\u50c5\u9078\u64c7\u5c01\u88dd\u7684\u76f8\u4f9d\u9805 (\u76f4\u63a5\u548c\u975e\u76f4\u63a5)\uff0c\u8acb\u4ee5\u7701\u7565\u7b26\u865f\u4e4b\u5f8c\u8ddf\u96a8\uff1e\u5f62\u7bad\u865f \u4f5c\u70ba\u5c01\u88dd\u540d\u7a31\u9996\u78bc\u3002 \u4f8b\u5982\uff0c\u9019\u5c07 \u70ba\u6240\u6709\u76f8\u4f9d\u65bc ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u7684\u5c01\u88dd\u57f7\u884c\u6e2c\u8a66\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "...^foo" test\n')),(0,a.kt)("h3",{id:"--filter-glob---filter-glob"},"--filter ./","<","glob>, --filter {","<","glob>}"),(0,a.kt)("p",null,"\u76f8\u5c0d\u65bc\u7576\u524d\u5de5\u4f5c\u76ee\u9304\u76f8\u7b26\u5c08\u6848\u7684 Glob \u6a21\u5f0f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "./packages/**" <cmd>\n')),(0,a.kt)("p",null,"\u5305\u62ec\u6307\u5b9a\u76ee\u9304\u4e0b\u7684\u6240\u6709\u5c08\u6848\u3002"),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u8207\u7701\u7565\u7b26\u865f\u548c\uff1e\u5f62\u7b26\u865f\u904b\u7b97\u5b50\u4e00\u8d77\u4f7f\u7528\uff0c\u4ee5\u9078\u53d6 \u4f9d\u5b58\u9805/\u76f8\u4f9d\u9805:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...{<\u76ee\u9304>} <cmd>\npnpm --filter {<\u76ee\u9304>}... <cmd>\npnpm --filter ...{<\u76ee\u9304>}... <cmd>\n")),(0,a.kt)("p",null,"\u5b83\u4e5f\u53ef\u4ee5\u8207 ",(0,a.kt)("inlineCode",{parentName:"p"},"[<since>]")," \u7d50\u5408\u4f7f\u7528\u3002 \u4f8b\u5982\uff0c\u8981\u9078\u53d6\u76ee\u9304\u4e2d\u6240\u6709\u5df2\u8b8a\u66f4\u7684 \u5c08\u6848:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "{packages/**}[origin/master]" <cmd>\npnpm --filter "...{packages/**}[origin/master]" <cmd>\npnpm --filter "{packages/**}[origin/master]..." <cmd>\npnpm --filter "...{packages/**}[origin/master]..." <cmd>\n')),(0,a.kt)("p",null,"\u6216\u8005\uff0c\u60a8\u53ef\u4ee5\u5f9e\u540d\u7a31\u8207\u7d66\u5b9a \u6a21\u5f0f\u76f8\u7b26\u7684\u76ee\u9304\u4e2d\u9078\u53d6\u6240\u6709\u5c01\u88dd:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "@babel/*{components/**}" <cmd>\npnpm --filter "@babel/*{components/**}[origin/master]" <cmd>\npnpm --filter "...@babel/*{components/**}[origin/master]" <cmd>\n')),(0,a.kt)("h3",{id:"--filter-since"},'--filter "',"[<","since>]",'"'),(0,a.kt)("p",null,"\u9078\u53d6\u81ea\u6307\u5b9a\u8a8d\u53ef/\u5206\u652f\u8b8a\u66f4\u7684\u6240\u6709\u5c01\u88dd\u3002 May be suffixed or prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"...")," to include dependencies/dependents."),(0,a.kt)("p",null,"For example, the next command will run tests in all changed packages since ",(0,a.kt)("inlineCode",{parentName:"p"},"master")," and on any dependent packages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "...[origin/master]" test\n')),(0,a.kt)("h2",{id:"excluding"},"Excluding"),(0,a.kt)("p",null,'Any of the filter selectors may work as exclusion operators when they have a leading "!". In zsh (and possibly other shells), "!" should be escaped: ',(0,a.kt)("inlineCode",{parentName:"p"},"\\!"),"."),(0,a.kt)("p",null,"For instance, this will run a command in all projects except for ",(0,a.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!foo <cmd>\n")),(0,a.kt)("p",null,"And this will run a command in all projects that are not under the ",(0,a.kt)("inlineCode",{parentName:"p"},"lib")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!./lib <cmd>\n")),(0,a.kt)("h2",{id:"multiplicity"},"Multiplicity"),(0,a.kt)("p",null,"When packages are filtered, every package is taken that matches at least one of the selectors. You can use as many filters as you want:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo --filter bar --filter baz... test\n")),(0,a.kt)("h2",{id:"--filter-prod-filtering_pattern"},"--filter-prod ","<","filtering_pattern>"),(0,a.kt)("p",null,"Acts the same a ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter")," but omits ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies")," when selecting dependency projects from the workspace."),(0,a.kt)("h2",{id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"test-pattern")," allows detecting whether the modified files are related to tests. If they are, the dependent packages of such modified packages are not included."),(0,a.kt)("p",null,'This option is useful with the "changed since" filter. For instance, the next command will run tests in all changed packages, and if the changes are in the source code of the package, tests will run in the dependent packages as well:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')),(0,a.kt)("h2",{id:"--changed-files-ignore-pattern-glob"},"--changed-files-ignore-pattern ","<","glob>"),(0,a.kt)("p",null,"Allows to ignore changed files by glob patterns when filtering for changed projects since the specified commit/branch."),(0,a.kt)("p",null,"Usage example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --changed-files-ignore-pattern="**/README.md" run build\n')))}u.isMDXComponent=!0}}]);