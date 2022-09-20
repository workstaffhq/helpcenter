"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6601],{5289:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),o=n(4996),a=n(9460);function i(e){var t;let{children:n,className:i}=e;const{frontMatter:l,assets:s}=(0,a.C)(),{withBaseUrl:c}=(0,o.C)(),u=null!=(t=s.image)?t:l.image;return r.createElement("article",{className:i,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},u&&r.createElement("meta",{itemProp:"image",content:c(u,{absolute:!0})}),n)}},2584:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7462),o=n(7294),a=n(5999),i=n(9960);function l(){return o.createElement("b",null,o.createElement(a.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function s(e){const{blogPostTitle:t,...n}=e;return o.createElement(i.Z,(0,r.Z)({"aria-label":(0,a.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},n),o.createElement(l,null))}},1916:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7294),o=n(6010),a=n(9460),i=n(9960);function l(e){return e.href?r.createElement(i.Z,e):r.createElement(r.Fragment,null,e.children)}function s(e){let{author:t,className:n}=e;const{name:a,title:i,url:s,imageURL:c,email:u}=t,d=s||u&&"mailto:"+u||void 0;return r.createElement("div",{className:(0,o.Z)("avatar margin-bottom--sm",n)},c&&r.createElement(l,{href:d,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:c,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(l,{href:d,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),i&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}const c="authorCol_Hf19",u="imageOnlyAuthorRow_pa_O",d="imageOnlyAuthorCol_G86a";function m(e){let{className:t}=e;const{metadata:{authors:n},assets:i}=(0,a.C)();if(0===n.length)return null;const l=n.every((e=>{let{name:t}=e;return!t}));return r.createElement("div",{className:(0,o.Z)("margin-top--md margin-bottom--sm",l?u:"row",t)},n.map(((e,t)=>{var n;return r.createElement("div",{className:(0,o.Z)(!l&&"col col--6",l?d:c),key:t},r.createElement(s,{author:{...e,imageURL:null!=(n=i.authorsImageUrls[t])?n:e.imageURL}}))})))}},7624:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7294),o=n(6010),a=n(5999),i=n(8824),l=n(9460);const s="container_mt6G";function c(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,i.c)();return t=>{const n=Math.ceil(t);return e(n,(0,a.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return r.createElement(r.Fragment,null,n(t))}function u(e){let{date:t,formattedDate:n}=e;return r.createElement("time",{dateTime:t,itemProp:"datePublished"},n)}function d(){return r.createElement(r.Fragment,null," \xb7 ")}function m(e){let{className:t}=e;const{metadata:n}=(0,l.C)(),{date:a,formattedDate:i,readingTime:m}=n;return r.createElement("div",{className:(0,o.Z)(s,"margin-vert--md",t)},r.createElement(u,{date:a,formattedDate:i}),void 0!==m&&r.createElement(r.Fragment,null,r.createElement(d,null),r.createElement(c,{readingTime:m})))}},988:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),o=n(6010),a=n(9960),i=n(9460);const l="title_f1Hy";function s(e){let{className:t}=e;const{metadata:n,isBlogPostPage:s}=(0,i.C)(),{permalink:c,title:u}=n,d=s?"h1":"h2";return r.createElement(d,{className:(0,o.Z)(l,t),itemProp:"headline"},s?u:r.createElement(a.Z,{itemProp:"url",to:c},u))}},9460:(e,t,n)=>{n.d(t,{C:()=>l,n:()=>i});var r=n(7294),o=n(902);const a=r.createContext(null);function i(e){let{children:t,content:n,isBlogPostPage:o=!1}=e;const i=function(e){let{content:t,isBlogPostPage:n}=e;return(0,r.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:o});return r.createElement(a.Provider,{value:i},t)}function l(){const e=(0,r.useContext)(a);if(null===e)throw new o.i6("BlogPostProvider");return e}},8824:(e,t,n)=>{n.d(t,{c:()=>c});var r=n(7294),o=n(2263);const a=["zero","one","two","few","many","other"];function i(e){return a.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),l}}),[e])}function c(){const e=s();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);const o=n.select(t),a=n.pluralForms.indexOf(o);return r[Math.min(a,r.length-1)]}(n,t,e)}}},6573:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(5456),o=n(6459);const a=(0,n(9075).Z)("facebook",(function(e,t){var n=t.quote,a=t.hashtag;return(0,r.Z)(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+(0,o.Z)({u:e,quote:n,hashtag:a})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400})},3597:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(5456),o=n(6459);const a=(0,n(9075).Z)("linkedin",(function(e,t){var n=t.title,a=t.summary,i=t.source;return(0,r.Z)(e,"linkedin.url"),"https://linkedin.com/shareArticle"+(0,o.Z)({url:e,mini:"true",title:n,summary:a,source:i})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600})},6616:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(5456),o=n(6459);const a=(0,n(9075).Z)("twitter",(function(e,t){var n=t.title,a=t.via,i=t.hashtags,l=void 0===i?[]:i,s=t.related,c=void 0===s?[]:s;return(0,r.Z)(e,"twitter.url"),(0,r.Z)(Array.isArray(l),"twitter.hashtags is not an array"),(0,r.Z)(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+(0,o.Z)({url:e,text:n,via:a,hashtags:l.length>0?l.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400})},9075:(e,t,n)=>{n.d(t,{Z:()=>y});var r,o=n(7294),a=n(4184),i=n.n(a),l=(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)},c=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function l(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((r=r.apply(e,t||[])).next())}))},u=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(l){a=[6,l],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},m=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},h=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},f=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function p(e,t,n){var r=t.height,o=t.width,a=d(t,["height","width"]),i=s({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),l=window.open(e,"",Object.keys(i).map((function(e){return e+"="+i[e]})).join(", "));if(n)var c=window.setInterval((function(){try{(null===l||l.closed)&&(window.clearInterval(c),n(l))}catch(e){console.error(e)}}),1e3);return l}const w=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,o=n.windowHeight,a=void 0===o?400:o,i=n.windowPosition,l=void 0===i?"windowCenter":i,c=n.windowWidth,u=void 0===c?550:c;p(e,s({height:a,width:u},"windowCenter"===l?h(u,a):f(u,a)),r)},t.handleClick=function(e){return c(t,void 0,void 0,(function(){var t,n,r,o,a,i,l,s,c,d;return u(this,(function(u){switch(u.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,o=t.networkLink,a=t.onClick,i=t.url,l=t.openShareDialogOnClick,s=t.opts,c=o(i,s),r?[2]:(e.preventDefault(),n?(d=n(),m(d)?[4,d]:[3,2]):[3,2]);case 1:u.sent(),u.label=2;case 2:return l&&this.openShareDialog(c),a&&a(e,c),[2]}}))}))},t}return l(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,a=e.disabledStyle,l=e.forwardedRef,c=(e.networkLink,e.networkName),u=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),m=e.style,h=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,d(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),f=i()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),p=s(s(u?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},m),r&&a);return o.createElement("button",s({},h,{"aria-label":h["aria-label"]||c,className:f,onClick:this.handleClick,ref:l,style:p}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(o.Component);var g=function(){return g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},g.apply(this,arguments)};const y=function(e,t,n,r){function a(a,i){var l=n(a),s=g({},a);return Object.keys(l).forEach((function(e){delete s[e]})),o.createElement(w,g({},r,s,{forwardedRef:i,networkName:e,networkLink:t,opts:n(a)}))}return a.displayName="ShareButton-"+e,(0,o.forwardRef)(a)}},5456:(e,t,n)=>{n.d(t,{Z:()=>i});var r,o=(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return o(t,e),t}(Error);function i(e,t){if(!e)throw new a(t)}},6459:(e,t,n)=>{function r(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}n.d(t,{Z:()=>r})}}]);