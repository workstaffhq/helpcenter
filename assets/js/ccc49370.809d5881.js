"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6103],{1575:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(3117),a=n(102),o=n(7294),l=n(6010),i=n(721),c="tableOfContents_cNA8",s=["className"];function u(e){var t=e.className,n=(0,a.Z)(e,s);return o.createElement("div",{className:(0,l.Z)(c,"thin-scrollbar",t)},o.createElement(i.Z,(0,r.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},721:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(3117),a=n(102),o=n(7294);function l(e){var t=e.toc,n=e.className,r=e.linkClassName,a=e.isChild;return t.length?o.createElement("ul",{className:a?void 0:n},t.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(l,{isChild:!0,toc:e.children,className:n,linkClassName:r}))}))):null}var i=o.memo(l),c=["parentIndex"];function s(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var r=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,r),n[e.level]=t}));var r=[];return t.forEach((function(e){var n=e.parentIndex,o=(0,a.Z)(e,c);n>=0?t[n].children.push(o):r.push(o)})),r}function u(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return t.flatMap((function(e){var t=u({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[Object.assign({},e,{children:t})]:t}))}var m=n(6668);function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function f(e,t){var n,r,a=t.anchorTopOffset,o=e.find((function(e){return d(e).top>=a}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(o))?o:null!=(r=e[e.indexOf(o)-1])?r:null:null!=(n=e[e.length-1])?n:null}function p(){var e=(0,o.useRef)(0),t=(0,m.L)().navbar.hideOnScroll;return(0,o.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function h(e){var t=(0,o.useRef)(void 0),n=p();(0,o.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,a=e.linkActiveClassName,o=e.minHeadingLevel,l=e.maxHeadingLevel;function i(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),i=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,r=[],a=t;a<=n;a+=1)r.push("h"+a+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),c=f(i,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(a)),e.classList.add(a),t.current=e}else e.classList.remove(a)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}var g=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function v(e){var t=e.toc,n=e.className,l=void 0===n?"table-of-contents table-of-contents__left-border":n,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,f=e.linkActiveClassName,p=void 0===f?void 0:f,v=e.minHeadingLevel,b=e.maxHeadingLevel,w=(0,a.Z)(e,g),E=(0,m.L)(),y=null!=v?v:E.tableOfContents.minHeadingLevel,k=null!=b?b:E.tableOfContents.maxHeadingLevel,N=function(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,o.useMemo)((function(){return u({toc:s(t),minHeadingLevel:n,maxHeadingLevel:r})}),[t,n,r])}({toc:t,minHeadingLevel:y,maxHeadingLevel:k});return h((0,o.useMemo)((function(){if(d&&p)return{linkClassName:d,linkActiveClassName:p,minHeadingLevel:y,maxHeadingLevel:k}}),[d,p,y,k])),o.createElement(i,(0,r.Z)({toc:N,className:l,linkClassName:d},w))}},8824:function(e,t,n){n.d(t,{c:function(){return s}});var r=n(7294),a=n(2263),o=["zero","one","two","few","many","other"];function l(e){return o.filter((function(t){return e.includes(t)}))}var i={locale:"en",pluralForms:l(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=(0,a.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:l(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),i}var t,n}),[e])}function s(){var e=c();return{selectMessage:function(t,n){return function(e,t,n){var r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms+"), but the message contains "+r.length+": "+e);var a=n.select(t),o=n.pluralForms.indexOf(a);return r[Math.min(o,r.length-1)]}(n,t,e)}}}},4494:function(e,t,n){n.d(t,{Z:function(){return Z}});var r=n(102),a=n(7294),o=n(6010),l=n(1427),i=n(9960),c=n(5999),s="sidebar_TMXw",u="sidebarItemTitle_V4zb",m="sidebarItemList_uHd5",d="sidebarItem_spIe",f="sidebarItemLink_eqrF",p="sidebarItemLinkActive_XZSJ";function h(e){var t=e.sidebar;return a.createElement("aside",{className:"col col--3"},a.createElement("nav",{className:(0,o.Z)(s,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,o.Z)(u,"margin-bottom--md")},t.title),a.createElement("ul",{className:(0,o.Z)(m,"clean-list")},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:d},a.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:f,activeClassName:p},e.title))})))))}var g=n(3102);function v(e){var t=e.sidebar;return a.createElement("ul",{className:"menu__list"},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:"menu__list-item"},a.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function b(e){return a.createElement(g.Zo,{component:v,props:e})}var w=n(7524);function E(e){var t=e.sidebar,n=(0,w.i)();return null!=t&&t.items.length?"mobile"===n?a.createElement(b,{sidebar:t}):a.createElement(h,{sidebar:t}):null}var y="DNFS6RNFi5gSqJRhx7Sj",k="HMT4fcyfuoyNaICx_5As",N="N788LNeXsgbRtKBCvsOg",_="yBpsCDfCyMm4rczQlRdi",C={title:(0,c.I)({message:"Get Started With Workstaff Today!",description:"Title for component description"}),url:(0,c.I)({message:"https://employer.workstaff.app/en/signup/"}),content_banner_plan:a.createElement(c.Z,{description:"The description for pricing"},"The basic Workstaff plan offers all scheduling and communication tools at absolutely no charge."),content_banner_create:a.createElement(c.Z,{description:"The description for account creation"},"Create your account, invite a few colleagues and start planning. Getting started with Workstaff only takes a few minutes."),button:(0,c.I)({message:"Start for Free",description:"The component button label to link to the sign up page"})};function L(){return a.createElement("i",{className:"ws-logo"})}var O=function(){return a.createElement("div",{className:y},a.createElement("div",{className:k},a.createElement(L,null),a.createElement("h2",{className:N},a.createElement("div",null,C.title)),a.createElement("div",{className:_},a.createElement("div",null,C.content_banner_plan,C.content_banner_create)),a.createElement("a",{className:"button button--cta",href:C.url,target:"_blank"},a.createElement("div",null,C.button))))},P=["sidebar","toc","children"];function Z(e){var t=e.sidebar,n=e.toc,i=e.children,c=(0,r.Z)(e,P),s=t&&t.items.length>0;return a.createElement(l.Z,c,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement(E,{sidebar:t}),a.createElement("main",{className:(0,o.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),n&&a.createElement("div",{className:"col col--2"},n))),a.createElement(O,null))}},5431:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(7294),a=n(6010),o=n(5999),l=n(9960),i=n(4996),c=n(8824),s=n(8780),u=n(5290),m=n(6753),d="blogPostTitle_uMeh",f="blogPostData_Vfxe",p="blogPostDetailsFull_enUA",h=n(62);function g(e){return e.href?r.createElement(l.Z,e):r.createElement(r.Fragment,null,e.children)}function v(e){var t=e.author,n=t.name,a=t.title,o=t.url,l=t.imageURL,i=t.email,c=o||i&&"mailto:"+i||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},l&&r.createElement(g,{href:c,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:l,alt:n})),n&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(g,{href:c,itemProp:"url"},r.createElement("span",{itemProp:"name"},n))),a&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},a)))}var b="authorCol_FlmR",w="imageOnlyAuthorRow_trpF",E="imageOnlyAuthorCol_S2np";function y(e){var t=e.authors,n=e.assets;if(0===t.length)return null;var o=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",o?w:"row")},t.map((function(e,t){var l;return r.createElement("div",{className:(0,a.Z)(!o&&"col col--6",o?E:b),key:t},r.createElement(v,{author:Object.assign({},e,{imageURL:null!=(l=n.authorsImageUrls[t])?l:e.imageURL})}))})))}function k(e){var t,n=(0,i.C)().withBaseUrl,c=e.children,d=e.frontMatter,f=e.assets,g=e.metadata,v=e.truncated,b=e.isBlogPostPage,w=void 0!==b&&b,E=g.date,y=g.formattedDate,k=g.permalink,C=g.tags,L=g.readingTime,O=g.title,P=g.editUrl,Z=g.authors,x=null!=(t=f.image)?t:d.image,I=!w&&v,S=C.length>0,H=C[0].label;return r.createElement("article",{className:(0,a.Z)("margin-top--sm",w?void 0:"margin-bottom--sm"),itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,w&&r.createElement(_,{title:O,isBlogPostPage:w,permalink:k}),!w&&r.createElement("section",null,x&&r.createElement("img",{src:n(x),alt:""}),r.createElement("div",null,r.createElement(_,{title:O,isBlogPostPage:w,permalink:k}),r.createElement("div",{className:"note"},r.createElement("blockquote",null,r.createElement("p",null,H.toUpperCase()))),r.createElement(u.Z,null,c),I&&r.createElement("div",{className:(0,a.Z)("col text--left"),style:{paddingLeft:"0"}},r.createElement(l.Z,{to:g.permalink,"aria-label":(0,o.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:O})},r.createElement("b",null,r.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))),r.createElement(N,{date:E,formattedDate:y,readingTime:L,authors:Z,assets:f}))),w&&r.createElement(N,{date:E,formattedDate:y,readingTime:L,authors:Z,assets:f})),x&&r.createElement("meta",{itemProp:"image",content:n(x,{absolute:!0})}),r.createElement("div",{id:w?s.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},w&&r.createElement(u.Z,null,c)," "),(S||v)&&r.createElement("footer",{className:(0,a.Z)("row margin-top--md",w&&p)},S&&r.createElement("div",{className:(0,a.Z)("col",{"col--9":I})},r.createElement(h.Z,{tags:C})),w&&P&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(m.Z,{editUrl:P}))))}function N(e){var t,n=(t=(0,c.c)().selectMessage,function(e){var n=Math.ceil(e);return t(n,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))});return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,a.Z)(f,"margin-vert--md")},r.createElement("time",{dateTime:e.date,itemProp:"datePublished"},e.formattedDate),void 0!==e.readingTime&&r.createElement(r.Fragment,null," \xb7 ",n(e.readingTime))),r.createElement(y,{authors:e.authors,assets:e.assets}))}function _(e){var t=e.isBlogPostPage?"h1":"h2";return r.createElement(t,{className:d,itemProp:"headline"},e.isBlogPostPage?e.title:r.createElement(l.Z,{itemProp:"url",to:e.permalink},e.title))}},2914:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var r=n(7294),a=n(4494),o=n(5431),l=n(3117),i=n(5999),c=n(1750);function s(e){var t=e.nextItem,n=e.prevItem;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&r.createElement(c.Z,(0,l.Z)({},n,{subLabel:r.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&r.createElement(c.Z,(0,l.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var u,m="socialMediaComponent_fANk",d="SocialMediaIcons_TW6O",f=(u=function(e,t){return u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},u(e,t)},function(e,t){function n(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return f(t,e),t}(Error);function h(e,t){if(!e)throw new p(t)}function g(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}var v=n(4184),b=n.n(v),w=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),E=function(){return E=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},E.apply(this,arguments)},y=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function l(e){try{c(r.next(e))}catch(t){o(t)}}function i(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((r=r.apply(e,t||[])).next())}))},k=function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(i){o=[6,i],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},N=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},_=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},C=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},L=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function O(e,t,n){var r=t.height,a=t.width,o=N(t,["height","width"]),l=E({height:r,width:a,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},o),i=window.open(e,"",Object.keys(l).map((function(e){return e+"="+l[e]})).join(", "));if(n)var c=window.setInterval((function(){try{(null===i||i.closed)&&(window.clearInterval(c),n(i))}catch(e){console.error(e)}}),1e3);return i}var P=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,a=n.windowHeight,o=void 0===a?400:a,l=n.windowPosition,i=void 0===l?"windowCenter":l,c=n.windowWidth,s=void 0===c?550:c;O(e,E({height:o,width:s},"windowCenter"===i?C(s,o):L(s,o)),r)},t.handleClick=function(e){return y(t,void 0,void 0,(function(){var t,n,r,a,o,l,i,c,s,u;return k(this,(function(m){switch(m.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,a=t.networkLink,o=t.onClick,l=t.url,i=t.openShareDialogOnClick,c=t.opts,s=a(l,c),r?[2]:(e.preventDefault(),n?(u=n(),_(u)?[4,u]:[3,2]):[3,2]);case 1:m.sent(),m.label=2;case 2:return i&&this.openShareDialog(s),o&&o(e,s),[2]}}))}))},t}return w(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,a=e.disabled,o=e.disabledStyle,l=e.forwardedRef,i=(e.networkLink,e.networkName),c=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,N(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),m=b()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!a,disabled:!!a},n),d=E(E(c?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),a&&o);return r.createElement("button",E({},u,{"aria-label":u["aria-label"]||i,className:m,onClick:this.handleClick,ref:l,style:d}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(r.Component),Z=P,x=function(){return x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},x.apply(this,arguments)};var I=function(e,t,n,a){function o(o,l){var i=n(o),c=x({},o);return Object.keys(i).forEach((function(e){delete c[e]})),r.createElement(Z,x({},a,c,{forwardedRef:l,networkName:e,networkLink:t,opts:n(o)}))}return o.displayName="ShareButton-"+e,(0,r.forwardRef)(o)};var S=I("facebook",(function(e,t){var n=t.quote,r=t.hashtag;return h(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+g({u:e,quote:n,hashtag:r})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400});var H=I("twitter",(function(e,t){var n=t.title,r=t.via,a=t.hashtags,o=void 0===a?[]:a,l=t.related,i=void 0===l?[]:l;return h(e,"twitter.url"),h(Array.isArray(o),"twitter.hashtags is not an array"),h(Array.isArray(i),"twitter.related is not an array"),"https://twitter.com/share"+g({url:e,text:n,via:r,hashtags:o.length>0?o.join(","):void 0,related:i.length>0?i.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400});var T=I("linkedin",(function(e,t){var n=t.title,r=t.summary,a=t.source;return h(e,"linkedin.url"),"https://linkedin.com/shareArticle"+g({url:e,mini:"true",title:n,summary:r,source:a})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600}),A={title:(0,i.I)({message:"Share this article on social media",description:"Title for social media component"})};var j=function(e){var t=e.metadata,n="https://help-next.workstaff.app",a=t.permalink,o=t.title,l=t.description;return r.createElement("div",{className:m},r.createElement("div",null,A.title),r.createElement("div",{className:d},r.createElement("div",null,r.createElement(S,{url:n+a,hashtag:"#hashtag"},r.createElement("i",{className:"ws-facebook"}))),r.createElement("div",null,r.createElement(H,{url:n+a,title:o,hashtag:"#hashtag"},r.createElement("i",{className:"ws-twitter"}))),r.createElement("div",null,r.createElement(T,{url:n+a,title:o,summary:l,source:n+a},r.createElement("i",{className:"ws-linkedin"})))))},R=n(1944),M=n(5281),B=n(1575),F=n(6010);function D(e){var t,n=e.content,a=n.assets,o=n.metadata,l=o.title,i=o.description,c=o.date,s=o.tags,u=o.authors,m=o.frontMatter,d=m.keywords,f=null!=(t=a.image)?t:m.image;return r.createElement(R.d,{title:l,description:i,keywords:d,image:f},r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"article:published_time",content:c}),u.some((function(e){return e.url}))&&r.createElement("meta",{property:"article:author",content:u.map((function(e){return e.url})).filter(Boolean).join(",")}),s.length>0&&r.createElement("meta",{property:"article:tag",content:s.map((function(e){return e.label})).join(",")}))}function W(e){var t=e.content,n=(e.sidebar,t.assets),l=t.metadata,i=l.nextItem,c=l.prevItem,u=l.frontMatter,m=u.hide_table_of_contents,d=u.toc_min_heading_level,f=u.toc_max_heading_level;return r.createElement(a.Z,{toc:!m&&t.toc&&t.toc.length>0?r.createElement(B.Z,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:f}):void 0},r.createElement(o.Z,{frontMatter:u,assets:n,metadata:l,isBlogPostPage:!0},r.createElement(t,null)),r.createElement(j,{metadata:l}),(i||c)&&r.createElement(s,{nextItem:i,prevItem:c}))}function U(e){return r.createElement(R.FG,{className:(0,F.Z)(M.k.wrapper.blogPages,M.k.page.blogPostPage)},r.createElement(D,e),r.createElement(W,e))}}}]);