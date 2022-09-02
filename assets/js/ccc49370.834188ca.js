"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6103],{9178:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var a=n(7294),l=n(6010),r=n(1944),o=n(5281),c=n(9460),s=n(1688),i=n(5203),m=n(7462),u=n(5999),d=n(2244);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(d.Z,(0,m.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(d.Z,(0,m.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){var e;const{assets:t,metadata:n}=(0,c.C)(),{title:l,description:o,date:s,tags:i,authors:m,frontMatter:u}=n,{keywords:d}=u,g=null!=(e=t.image)?e:u.image;return a.createElement(r.d,{title:l,description:o,keywords:d,image:g},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:s}),m.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:m.map((e=>e.url)).filter(Boolean).join(",")}),i.length>0&&a.createElement("meta",{property:"article:tag",content:i.map((e=>e.label)).join(",")}))}var v=n(9407);function p(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:r}=(0,c.C)(),{nextItem:o,prevItem:m,frontMatter:u}=l,{hide_table_of_contents:d,toc_min_heading_level:f,toc_max_heading_level:p}=u;return a.createElement(s.Z,{sidebar:t,toc:!d&&r.length>0?a.createElement(v.Z,{toc:r,minHeadingLevel:f,maxHeadingLevel:p}):void 0},a.createElement(i.Z,null,n),(o||m)&&a.createElement(g,{nextItem:o,prevItem:m}))}function E(e){const t=e.content;return a.createElement(c.n,{content:e.content,isBlogPostPage:!0},a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(f,null),a.createElement(p,{sidebar:e.sidebar},a.createElement(t,null))))}},9407:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7462),l=n(7294),r=n(6010),o=n(3743);const c="tableOfContents_bqdL";function s(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(c,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7462),l=n(7294),r=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function i(e,t){var n;let{anchorTopOffset:a}=t;const l=e.find((e=>s(e).top>=a));if(l){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,l.useRef)(void 0),n=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),s=i(c,{anchorTopOffset:n.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const g=l.memo(d);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:m,maxHeadingLevel:d,...f}=e;const v=(0,r.L)(),p=null!=m?m:v.tableOfContents.minHeadingLevel,E=null!=d?d:v.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>c({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:E});return u((0,l.useMemo)((()=>{if(s&&i)return{linkClassName:s,linkActiveClassName:i,minHeadingLevel:p,maxHeadingLevel:E}}),[s,i,p,E])),l.createElement(g,(0,a.Z)({toc:h,className:n,linkClassName:s},f))}},1688:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7294),l=n(4194);const r="DNFS6RNFi5gSqJRhx7Sj",o="HMT4fcyfuoyNaICx_5As",c="N788LNeXsgbRtKBCvsOg",s="yBpsCDfCyMm4rczQlRdi";var i=n(5999);const m={title:(0,i.I)({message:"Get Started With Workstaff Today!",description:"Title for component description"}),url:(0,i.I)({message:"https://employer.workstaff.app/en/signup/"}),content_banner_plan:a.createElement(i.Z,{description:"The description for pricing"},"The basic Workstaff plan offers all scheduling and communication tools at absolutely no charge."),content_banner_create:a.createElement(i.Z,{description:"The description for account creation"},"Create your account, invite a few colleagues and start planning. Getting started with Workstaff only takes a few minutes."),button:(0,i.I)({message:"Start for Free",description:"The component button label to link to the sign up page"})};function u(){return a.createElement("i",{className:"ws-logo"})}const d=function(){return a.createElement("div",{className:r},a.createElement("div",{className:o},a.createElement(u,null),a.createElement("h2",{className:c},a.createElement("div",null,m.title)),a.createElement("div",{className:s},a.createElement("div",null,m.content_banner_plan,m.content_banner_create)),a.createElement("a",{className:"button button--cta",href:m.url,target:"_blank"},a.createElement("div",null,m.button))))};function g(e){const{toc:t,children:n,...r}=e;return a.createElement(l.Z,r,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement("main",{className:"col col--9 col--offset-1",itemScope:!0,itemType:"http://schema.org/Blog"},n),t&&a.createElement("div",{className:"col col--2"},t))),a.createElement(d,null))}},5203:(e,t,n)=>{n.d(t,{Z:()=>H});var a=n(7294),l=n(6010),r=n(9460),o=n(5289),c=n(988),s=n(7624),i=n(1916),m=n(4996);const u=function(e){let{assets:t,isBlogPostPage:n}=e,l=t.image;const{withBaseUrl:r}=(0,m.C)();return a.createElement(a.Fragment,null,l&&!n&&a.createElement("img",{style:{objectFit:"cover",aspectRatio:"1/1",width:"100%"},src:r(l),alt:""}),l&&n&&a.createElement("img",{style:{objectFit:"cover",aspectRatio:"2/1",width:"100%"},className:"margin-bottom--md",src:r(l),alt:""}))};var d=n(8780),g=n(210),f=n(2584);function v(e){let{children:t,className:n}=e;const{isBlogPostPage:o,metadata:c}=(0,r.C)(),{title:s}=c;return a.createElement("div",{id:o?d.blogPostContainerID:void 0,className:(0,l.Z)("markdown",n),itemProp:"articleBody"},a.createElement(g.Z,null,t),!o&&a.createElement(f.Z,{blogPostTitle:s,to:c.permalink}))}function p(e){let{children:t}=e;const{assets:n,isBlogPostPage:l,metadata:o}=(0,r.C)(),{tags:m}=o,d=m.length>0,g=m[0].label;return a.createElement("header",null,l?a.createElement("div",null,a.createElement(c.Z,null),a.createElement(s.Z,null),a.createElement(i.Z,null),a.createElement(u,{assets:n,isBlogPostPage:l})):a.createElement(a.Fragment,null,a.createElement(u,{assets:n,isBlogPostPage:l}),a.createElement("div",null,a.createElement(c.Z,null),d&&a.createElement("div",{className:"note"},a.createElement("blockquote",null,a.createElement("p",null,g.toUpperCase()))),a.createElement(v,null,t),a.createElement(s.Z,null),a.createElement(i.Z,null))))}var E=n(4881),h=n(1526);const b="blogPostFooterDetailsFull_Wr5y",N="socialMediaComponent_fANk",Z="SocialMediaIcons_TW6O";var k=n(5999),L=n(6573),C=n(6616),_=n(3597);const y={title:(0,k.I)({message:"Share this article on social media",description:"Title for social media component"})};const P=function(e){let{metadata:t}=e;const n="https://help-next.workstaff.app",l=t.permalink,r=t.title,o=t.description;return a.createElement("div",{className:N},a.createElement("div",null,y.title),a.createElement("div",{className:Z},a.createElement("div",null,a.createElement(L.Z,{url:n+l,hashtag:"#hashtag"},a.createElement("i",{className:"ws-facebook"}))),a.createElement("div",null,a.createElement(C.Z,{url:n+l,title:r,hashtag:"#hashtag"},a.createElement("i",{className:"ws-twitter"}))),a.createElement("div",null,a.createElement(_.Z,{url:n+l,title:r,summary:o,source:n+l},a.createElement("i",{className:"ws-linkedin"})))))};function x(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:n,editUrl:o,hasTruncateMarker:c}=e,s=!t&&c,i=n.length>0;return i||s||o?a.createElement("footer",{className:(0,l.Z)("row margin-top--md",t&&b)},i&&a.createElement("div",{className:(0,l.Z)("col",{"col--9":s})},a.createElement(h.Z,{tags:n})),t&&a.createElement(P,{metadata:e}),t&&o&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(E.Z,{editUrl:o})),s&&a.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":i})})):null}function H(e){let{children:t,className:n}=e;const{isBlogPostPage:c}=(0,r.C)(),s=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--sm"}();return a.createElement(o.Z,{className:(0,l.Z)(s,n)},a.createElement(p,null,t),c&&a.createElement(v,null,t),a.createElement(x,null))}}}]);