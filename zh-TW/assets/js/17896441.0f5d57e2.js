"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7918],{3603:(e,t,a)=>{a.r(t),a.d(t,{default:()=>fe});var n=a(9496),r=a(9990),l=a(830),i=n.createContext(null);function s(e){var t=e.children,a=function(e){return(0,n.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return n.createElement(i.Provider,{value:a},t)}function o(){var e=(0,n.useContext)(i);if(null===e)throw new l.i6("DocProvider");return e}function c(){var e,t=o(),a=t.metadata,l=t.frontMatter,i=t.assets;return n.createElement(r.d,{title:a.title,description:a.description,keywords:l.keywords,image:null!=(e=i.image)?e:l.image})}var d=a(5924),m=a(8972),u=a(2081),v=a(846),f=a(637);function b(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(f.Z,(0,u.Z)({},t,{subLabel:n.createElement(v.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(f.Z,(0,u.Z)({},a,{subLabel:n.createElement(v.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function p(){var e=o().metadata;return n.createElement(b,{previous:e.previous,next:e.next})}var h=a(5471),g=a(131),E=a(7324),L=a(3576),N=a(9823),Z=a(4273);var _={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(v.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(v.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function k(e){var t=_[e.versionMetadata.banner];return n.createElement(t,e)}function C(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(v.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(g.Z,{to:a,onClick:r},n.createElement(v.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function x(e){var t,a=e.className,r=e.versionMetadata,l=(0,h.Z)().siteConfig.title,i=(0,E.gA)({failfast:!0}).pluginId,s=(0,N.J)(i).savePreferredVersionName,o=(0,E.Jo)(i),c=o.latestDocSuggestion,m=o.latestVersionSuggestion,u=null!=c?c:(t=m).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,d.Z)(a,L.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(k,{siteTitle:l,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(C,{versionLabel:m.label,to:u.path,onClick:function(){return s(m.name)}})))}function H(e){var t=e.className,a=(0,Z.E)();return a.banner?n.createElement(x,{className:t,versionMetadata:a}):null}function T(e){var t=e.className,a=(0,Z.E)();return a.badge?n.createElement("span",{className:(0,d.Z)(t,L.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(v.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function y(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function U(e){var t=e.lastUpdatedBy;return n.createElement(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function w(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:L.k.common.lastUpdated},n.createElement(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(y,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(U,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var A=a(9075),M=a(8068);const I="lastUpdated_ibyG";function B(e){return n.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(M.Z,e)))}function O(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,l=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(A.Z,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",I)},(a||r)&&n.createElement(w,{lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:r})))}function P(){var e=o().metadata,t=e.editUrl,a=e.lastUpdatedAt,r=e.formattedLastUpdatedAt,l=e.lastUpdatedBy,i=e.tags,s=i.length>0,c=!!(t||a||l);return s||c?n.createElement("footer",{className:(0,d.Z)(L.k.docs.docFooter,"docusaurus-mt-lg")},s&&n.createElement(B,{tags:i}),c&&n.createElement(O,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:r})):null}var V=a(7623),S=a(8130),D=a(4604);const R="tocCollapsibleButton_sKVZ",q="tocCollapsibleButtonExpanded_oGQi";var z=["collapsed"];function F(e){var t=e.collapsed,a=(0,D.Z)(e,z);return n.createElement("button",(0,u.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",R,!t&&q,a.className)}),n.createElement(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const j="tocCollapsible_eJOd",G="tocCollapsibleContent_Qo0s",J="tocCollapsibleExpanded_FxxX";function X(e){var t=e.toc,a=e.className,r=e.minHeadingLevel,l=e.maxHeadingLevel,i=(0,V.u)({initialState:!0}),s=i.collapsed,o=i.toggleCollapsed;return n.createElement("div",{className:(0,d.Z)(j,!s&&J,a)},n.createElement(F,{collapsed:s,onClick:o}),n.createElement(V.z,{lazy:!0,className:G,collapsed:s},n.createElement(S.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:l})))}const Q="tocMobile_q3OH";function W(){var e=o(),t=e.toc,a=e.frontMatter;return n.createElement(X,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:(0,d.Z)(L.k.docs.docTocMobile,Q)})}var K=a(2124);function Y(){var e=o(),t=e.toc,a=e.frontMatter;return n.createElement(K.Z,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:L.k.docs.docTocDesktop})}var $=a(6482),ee=a(4887);function te(e){var t,a,r,l,i=e.children,s=(t=o(),a=t.metadata,r=t.frontMatter,l=t.contentTitle,r.hide_title||void 0!==l?null:a.title);return n.createElement("div",{className:(0,d.Z)(L.k.docs.docMarkdown,"markdown")},s&&n.createElement("header",null,n.createElement($.Z,{as:"h1"},s)),n.createElement(ee.Z,null,i))}var ae=a(596),ne=a(5353),re=a(3001);function le(e){return n.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const ie={breadcrumbsContainer:"breadcrumbsContainer_Pmw_",breadcrumbHomeIcon:"breadcrumbHomeIcon_wpn8"};function se(e){var t=e.children,a=e.href,r="breadcrumbs__link";return e.isLast?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(g.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function oe(e){var t=e.children,a=e.active,r=e.index,l=e.addMicrodata;return n.createElement("li",(0,u.Z)({},l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(r+1)}))}function ce(){var e=(0,re.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(g.Z,{"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,d.Z)("breadcrumbs__link",ie.breadcrumbsItemLink),href:e},n.createElement(le,{className:ie.breadcrumbHomeIcon})))}function de(){var e=(0,ae.s1)(),t=(0,ne.Ns)();return e?n.createElement("nav",{className:(0,d.Z)(L.k.docs.docBreadcrumbs,ie.breadcrumbsContainer),"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(ce,null),e.map((function(t,a){var r=a===e.length-1;return n.createElement(oe,{key:a,active:r,index:a,addMicrodata:!!t.href},n.createElement(se,{href:t.href,isLast:r},t.label))})))):null}const me="docItemContainer_kPam",ue="docItemCol_timY";function ve(e){var t,a,r,l,i,s,c=e.children,u=(t=o(),a=t.frontMatter,r=t.toc,l=(0,m.i)(),i=a.hide_table_of_contents,s=!i&&r.length>0,{hidden:i,mobile:s?n.createElement(W,null):void 0,desktop:!s||"desktop"!==l&&"ssr"!==l?void 0:n.createElement(Y,null)});return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!u.hidden&&ue)},n.createElement(H,null),n.createElement("div",{className:me},n.createElement("article",null,n.createElement(de,null),n.createElement(T,null),u.mobile,n.createElement(te,null,c),n.createElement(P,null)),n.createElement(p,null))),u.desktop&&n.createElement("div",{className:"col col--3"},u.desktop))}function fe(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,a=e.content;return n.createElement(s,{content:e.content},n.createElement(r.FG,{className:t},n.createElement(c,null),n.createElement(ve,null,n.createElement(a,null))))}},9075:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(9496),r=a(846),l=a(3576),i=a(2081),s=a(4604),o=a(5924);const c="iconEdit_a1H2";var d=["className"];function m(e){var t=e.className,a=(0,s.Z)(e,d);return n.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:l.k.common.editThisPage},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},637:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(9496),r=a(5924),l=a(131);function i(e){var t=e.permalink,a=e.title,i=e.subLabel,s=e.isNext;return n.createElement(l.Z,{className:(0,r.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},2124:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(2081),r=a(4604),l=a(9496),i=a(5924),s=a(8130);const o="tableOfContents_sj1i";var c=["className"];function d(e){var t=e.className,a=(0,r.Z)(e,c);return l.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",t)},l.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},8130:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(2081),r=a(4604),l=a(9496),i=a(9790),s=["parentIndex"];function o(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),a=Array(7).fill(-1);t.forEach((function(e,t){var n=a.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),a[e.level]=t}));var n=[];return t.forEach((function(e){var a=e.parentIndex,l=(0,r.Z)(e,s);a>=0?t[a].children.push(l):n.push(l)})),n}function c(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=c({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function m(e,t){var a,n,r=t.anchorTopOffset,l=e.find((function(e){return d(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(l))?l:null!=(n=e[e.indexOf(l)-1])?n:null:null!=(a=e[e.length-1])?a:null}function u(){var e=(0,l.useRef)(0),t=(0,i.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){var t=(0,l.useRef)(void 0),a=u();(0,l.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function s(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),s=function(e){for(var t=e.minHeadingLevel,a=e.maxHeadingLevel,n=[],r=t;r<=a;r+=1)n.push("h"+r+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),o=m(s,{anchorTopOffset:a.current}),c=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),function(){document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,a])}function f(e){var t=e.toc,a=e.className,n=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(f,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}const b=l.memo(f);var p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,a=e.className,s=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,f=void 0===u?void 0:u,h=e.minHeadingLevel,g=e.maxHeadingLevel,E=(0,r.Z)(e,p),L=(0,i.L)(),N=null!=h?h:L.tableOfContents.minHeadingLevel,Z=null!=g?g:L.tableOfContents.maxHeadingLevel,_=function(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return(0,l.useMemo)((function(){return c({toc:o(t),minHeadingLevel:a,maxHeadingLevel:n})}),[t,a,n])}({toc:t,minHeadingLevel:N,maxHeadingLevel:Z});return v((0,l.useMemo)((function(){if(m&&f)return{linkClassName:m,linkActiveClassName:f,minHeadingLevel:N,maxHeadingLevel:Z}}),[m,f,N,Z])),l.createElement(b,(0,n.Z)({toc:_,className:s,linkClassName:m},E))}},8068:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(9496),r=a(5924),l=a(846),i=a(131);const s="tag_I1fX",o="tagRegular_e87g",c="tagWithCount_q07W";function d(e){var t=e.permalink,a=e.label,l=e.count;return n.createElement(i.Z,{href:t,className:(0,r.Z)(s,l?c:o)},a,l&&n.createElement("span",null,l))}const m="tags_XVOI",u="tag_psHr";function v(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(m,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:u},n.createElement(d,{label:t,permalink:a}))}))))}},4273:(e,t,a)=>{a.d(t,{E:()=>s,q:()=>i});var n=a(9496),r=a(830),l=n.createContext(null);function i(e){var t=e.children,a=e.version;return n.createElement(l.Provider,{value:a},t)}function s(){var e=(0,n.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);