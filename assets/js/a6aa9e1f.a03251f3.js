"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3089],{6299:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),n=a(5999),l=a(1750);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(l.Z,{permalink:a,title:r.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&r.createElement(l.Z,{permalink:i,title:r.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},8824:function(e,t,a){a.d(t,{c:function(){return m}});var r=a(7294),n=a(2263),l=["zero","one","two","few","many","other"];function i(e){return l.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,n.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:i(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),o}var t,a}),[e])}function m(){var e=s();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms+"), but the message contains "+r.length+": "+e);var n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}}},4494:function(e,t,a){a.d(t,{Z:function(){return F}});var r=a(102),n=a(7294),l=a(6010),i=a(1427),o=a(9960),s=a(5999),m="sidebar_TMXw",c="sidebarItemTitle_V4zb",u="sidebarItemList_uHd5",d="sidebarItem_spIe",g="sidebarItemLink_eqrF",p="sidebarItemLinkActive_XZSJ";function f(e){var t=e.sidebar;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:d},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title))})))))}var E=a(3102);function h(e){var t=e.sidebar;return n.createElement("ul",{className:"menu__list"},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function b(e){return n.createElement(E.Zo,{component:h,props:e})}var v=a(7524);function N(e){var t=e.sidebar,a=(0,v.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(b,{sidebar:t}):n.createElement(f,{sidebar:t}):null}var _="DNFS6RNFi5gSqJRhx7Sj",k="HMT4fcyfuoyNaICx_5As",Z="N788LNeXsgbRtKBCvsOg",P="yBpsCDfCyMm4rczQlRdi",T={title:(0,s.I)({message:"Get Started With Workstaff Today!",description:"Title for component description"}),url:(0,s.I)({message:"https://employer.workstaff.app/en/signup/"}),content_banner_plan:n.createElement(s.Z,{description:"The description for pricing"},"The basic Workstaff plan offers all scheduling and communication tools at absolutely no charge."),content_banner_create:n.createElement(s.Z,{description:"The description for account creation"},"Create your account, invite a few colleagues and start planning. Getting started with Workstaff only takes a few minutes."),button:(0,s.I)({message:"Start for Free",description:"The component button label to link to the sign up page"})};function w(){return n.createElement("i",{className:"ws-logo"})}var y=function(){return n.createElement("div",{className:_},n.createElement("div",{className:k},n.createElement(w,null),n.createElement("h2",{className:Z},n.createElement("div",null,T.title)),n.createElement("div",{className:P},n.createElement("div",null,T.content_banner_plan,T.content_banner_create)),n.createElement("a",{className:"button button--cta",href:T.url,target:"_blank"},n.createElement("div",null,T.button))))},I=["sidebar","toc","children"];function F(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,r.Z)(e,I),m=t&&t.items.length>0;return n.createElement(i.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(N,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))),n.createElement(y,null))}},6660:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var r=a(7294),n=a(2263),l=a(4494),i=a(5431),o=a(6299),s=a(1944),m=a(5281),c="blogPostList_YLqQ",u=a(4739),d=a(6010);function g(e){var t=e.metadata,a=(0,n.Z)().siteConfig.title,l=t.blogDescription,i=t.blogTitle,o="/"===t.permalink?a:i;return r.createElement(r.Fragment,null,r.createElement(s.d,{title:o,description:l}),r.createElement(u.Z,{tag:"blog_posts_list"}))}function p(e){var t=e.metadata,a=e.items;e.sidebar;return r.createElement(l.Z,null,r.createElement("div",{className:c},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))}))),r.createElement(o.Z,{metadata:t}))}function f(e){return r.createElement(s.FG,{className:(0,d.Z)(m.k.wrapper.blogPages,m.k.page.blogListPage)},r.createElement(g,e),r.createElement(p,e))}},5431:function(e,t,a){a.d(t,{Z:function(){return k}});var r=a(7294),n=a(6010),l=a(5999),i=a(9960),o=a(4996),s=a(8824),m=a(8780),c=a(5290),u=a(6753),d="blogPostTitle_uMeh",g="blogPostData_Vfxe",p="blogPostDetailsFull_enUA",f=a(62);function E(e){return e.href?r.createElement(i.Z,e):r.createElement(r.Fragment,null,e.children)}function h(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL,o=t.email,s=l||o&&"mailto:"+o||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(E,{href:s,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(E,{href:s,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}var b="authorCol_FlmR",v="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function _(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?v:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?N:b),key:t},r.createElement(h,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function k(e){var t,a=(0,o.C)().withBaseUrl,s=e.children,d=e.frontMatter,g=e.assets,E=e.metadata,h=e.truncated,b=e.isBlogPostPage,v=void 0!==b&&b,N=E.date,_=E.formattedDate,k=E.permalink,T=E.tags,w=E.readingTime,y=E.title,I=E.editUrl,F=E.authors,L=null!=(t=g.image)?t:d.image,C=!v&&h,R=T.length>0,M=T[0].label;return r.createElement("article",{className:(0,n.Z)("margin-top--sm",v?void 0:"margin-bottom--sm"),itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,v&&r.createElement(P,{title:y,isBlogPostPage:v,permalink:k}),!v&&r.createElement("section",null,L&&r.createElement("img",{src:a(L),alt:""}),r.createElement("div",null,r.createElement(P,{title:y,isBlogPostPage:v,permalink:k}),r.createElement("div",{className:"note"},r.createElement("blockquote",null,r.createElement("p",null,M.toUpperCase()))),r.createElement(c.Z,null,s),C&&r.createElement("div",{className:(0,n.Z)("col text--left"),style:{paddingLeft:"0"}},r.createElement(i.Z,{to:E.permalink,"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:y})},r.createElement("b",null,r.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))),r.createElement(Z,{date:N,formattedDate:_,readingTime:w,authors:F,assets:g}))),v&&r.createElement(Z,{date:N,formattedDate:_,readingTime:w,authors:F,assets:g})),L&&r.createElement("meta",{itemProp:"image",content:a(L,{absolute:!0})}),r.createElement("div",{id:v?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},v&&r.createElement(c.Z,null,s)," "),(R||h)&&r.createElement("footer",{className:(0,n.Z)("row margin-top--md",v&&p)},R&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":C})},r.createElement(f.Z,{tags:T})),v&&I&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:I}))))}function Z(e){var t,a=(t=(0,s.c)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))});return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,n.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:e.date,itemProp:"datePublished"},e.formattedDate),void 0!==e.readingTime&&r.createElement(r.Fragment,null," \xb7 ",a(e.readingTime))),r.createElement(_,{authors:e.authors,assets:e.assets}))}function P(e){var t=e.isBlogPostPage?"h1":"h2";return r.createElement(t,{className:d,itemProp:"headline"},e.isBlogPostPage?e.title:r.createElement(i.Z,{itemProp:"url",to:e.permalink},e.title))}}}]);