"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8610],{9703:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(5999),r=a(2244);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(r.Z,{permalink:a,title:l.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&l.createElement(r.Z,{permalink:s,title:l.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(9460),r=a(5203);function s(e){let{items:t,component:a=r.Z}=e;return l.createElement(l.Fragment,null,t.map((e=>{let{content:t}=e;return l.createElement(n.n,{key:t.metadata.permalink,content:t},l.createElement(a,null,l.createElement(t,null)))})))}},1714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var l=a(7294),n=a(6010),r=a(5999),s=a(8824),c=a(1944),o=a(5281),i=a(9960),m=a(1688),g=a(9703),u=a(197),d=a(9985);function E(e){const t=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function p(e){let{tag:t}=e;const a=E(t);return l.createElement(l.Fragment,null,l.createElement(c.d,{title:a}),l.createElement(u.Z,{tag:"blog_tags_posts"}))}function h(e){let{tag:t,items:a,sidebar:n,listMetadata:s}=e;const c=E(t);return l.createElement(m.Z,{sidebar:n},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,c),l.createElement(i.Z,{href:t.allTagsPath},l.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement(d.Z,{items:a}),l.createElement(g.Z,{metadata:s}))}function f(e){return l.createElement(c.FG,{className:(0,n.Z)(o.k.wrapper.blogPages,o.k.page.blogTagPostListPage)},l.createElement(p,e),l.createElement(h,e))}},1688:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(7294),n=a(2171);const r="DNFS6RNFi5gSqJRhx7Sj",s="HMT4fcyfuoyNaICx_5As",c="N788LNeXsgbRtKBCvsOg",o="yBpsCDfCyMm4rczQlRdi";var i=a(5999);const m={title:(0,i.I)({message:"Get Started With Workstaff Today!",description:"Title for component description"}),url:(0,i.I)({message:"https://employer.workstaff.app/en/signup/"}),content_banner_plan:l.createElement(i.Z,{description:"The description for pricing"},"The basic Workstaff plan offers all scheduling and communication tools at absolutely no charge."),content_banner_create:l.createElement(i.Z,{description:"The description for account creation"},"Create your account, invite a few colleagues and start planning. Getting started with Workstaff only takes a few minutes."),button:(0,i.I)({message:"Start for Free",description:"The component button label to link to the sign up page"})};function g(){return l.createElement("i",{className:"ws-logo"})}const u=function(){return l.createElement("div",{className:r},l.createElement("div",{className:s},l.createElement(g,null),l.createElement("h2",{className:c},m.title),l.createElement("div",{className:o},l.createElement("div",null,m.content_banner_plan,m.content_banner_create)),l.createElement("a",{className:"button button--cta",href:m.url,target:"_blank"},l.createElement("div",null,m.button))))};function d(e){const{toc:t,children:a,...r}=e;return l.createElement(n.Z,r,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--9 col--offset-1",itemScope:!0,itemType:"http://schema.org/Blog"},a),t&&l.createElement("div",{className:"col col--2"},t))),l.createElement(u,null))}},5203:(e,t,a)=>{a.d(t,{Z:()=>F});var l=a(7294),n=a(6010),r=a(9460),s=a(5289),c=a(988),o=a(7624),i=a(1916),m=a(4996);const g=function(e){let{assets:t,isBlogPostPage:a}=e,n=t.image;const{withBaseUrl:r}=(0,m.C)();return l.createElement(l.Fragment,null,n&&!a&&l.createElement("img",{style:{objectFit:"cover",aspectRatio:"1/1",width:"100%"},src:r(n),alt:""}),n&&a&&l.createElement("img",{style:{objectFit:"cover",aspectRatio:"2/1",width:"100%"},className:"margin-bottom--md",src:r(n),alt:""}))};var u=a(8780),d=a(210),E=a(2584);function p(e){let{children:t,className:a}=e;const{isBlogPostPage:s,metadata:c}=(0,r.C)(),{title:o}=c;return l.createElement("div",{id:s?u.blogPostContainerID:void 0,className:(0,n.Z)("markdown",a),itemProp:"articleBody"},l.createElement(d.Z,null,t),!s&&l.createElement(E.Z,{blogPostTitle:o,to:c.permalink}))}function h(e){let{children:t}=e;const{assets:a,isBlogPostPage:n,metadata:s}=(0,r.C)(),{tags:m}=s,u=m.length>0,d=m[0].label;return l.createElement("header",null,n?l.createElement("div",null,l.createElement(c.Z,null),l.createElement(o.Z,null),l.createElement(i.Z,null),l.createElement(g,{assets:a,isBlogPostPage:n})):l.createElement(l.Fragment,null,l.createElement(g,{assets:a,isBlogPostPage:n}),l.createElement("div",null,l.createElement(c.Z,null),u&&l.createElement("div",{className:"note"},l.createElement("blockquote",null,l.createElement("p",null,d.toUpperCase()))),l.createElement(p,null,t),l.createElement(o.Z,null),l.createElement(i.Z,null))))}var f=a(4881),b=a(1526);const v="blogPostFooterDetailsFull_Wr5y";var Z=a(2263),N=a(5999);const P="socialMediaComponent_fANk",k="SocialMediaIcons_TW6O";var w=a(6573),T=a(6616),y=a(3597);const C={title:(0,N.I)({message:"Share this article on social media",description:"Title for social media component"})};const _=function(e){let{metadata:t}=e;const{siteConfig:{url:a}}=(0,Z.Z)(),n=t.permalink,r=t.title,s=t.description;return l.createElement("div",{className:P},l.createElement("div",null,C.title),l.createElement("div",{className:k},l.createElement("div",null,l.createElement(w.Z,{url:a+n,hashtag:"#hashtag"},l.createElement("i",{className:"ws-facebook"}))),l.createElement("div",null,l.createElement(T.Z,{url:a+n,title:r,hashtag:"#hashtag"},l.createElement("i",{className:"ws-twitter"}))),l.createElement("div",null,l.createElement(y.Z,{url:a+n,title:r,summary:s,source:a+n},l.createElement("i",{className:"ws-linkedin"})))))};function B(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,editUrl:s,hasTruncateMarker:c}=e,o=!t&&c,i=a.length>0;return i||o||s?l.createElement("footer",{className:(0,n.Z)("row margin-top--md",t&&v)},i&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":o})},l.createElement(b.Z,{tags:a})),t&&l.createElement(_,{metadata:e}),t&&s&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(f.Z,{editUrl:s})),o&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":i})})):null}function F(e){let{children:t,className:a}=e;const{isBlogPostPage:c}=(0,r.C)(),o=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--sm"}();return l.createElement(s.Z,{className:(0,n.Z)(o,a)},l.createElement(h,null,t),c&&l.createElement(p,null,t),l.createElement(B,null))}}}]);