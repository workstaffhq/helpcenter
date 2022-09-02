"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[589],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=c(t),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return t?n.createElement(d,i(i({ref:r},l),{},{components:t})):n.createElement(d,i({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},508:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const o={title:"D\xe9marrer",sidebar_position:1},i="D\xe9marrer avec la facturation",u={unversionedId:"managers/invoicing/start",id:"managers/invoicing/start",title:"D\xe9marrer",description:"Configurer votre compte pour la facturation",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/managers/invoicing/start.md",sourceDirName:"managers/invoicing",slug:"/managers/invoicing/start",permalink:"/fr/docs/managers/invoicing/start",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"D\xe9marrer",sidebar_position:1},sidebar:"managersSidebar",previous:{title:"Factures pour les travailleurs autonomes",permalink:"/fr/docs/managers/invoicing/"},next:{title:"Marche \xe0 suivre",permalink:"/fr/docs/managers/invoicing/workflow"}},s={},c=[{value:"Configurer votre compte pour la facturation",id:"configurer-votre-compte-pour-la-facturation",level:2},{value:"Conditions pour qu&#39;une \xe9quipe soit facturable",id:"conditions-pour-quune-\xe9quipe-soit-facturable",level:2}],l={toc:c};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"d\xe9marrer-avec-la-facturation"},"D\xe9marrer avec la facturation"),(0,a.kt)("h2",{id:"configurer-votre-compte-pour-la-facturation"},"Configurer votre compte pour la facturation"),(0,a.kt)("p",null,"Veiller \xe0 ce que votre compte Workstaff est pr\xeat pour la facturation est simple. La seule exigence est qu'une ",(0,a.kt)("strong",{parentName:"p"},"Adresse de facturation")," soit fournie dans vos ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/managers/customize/account"},"param\xe8tres de compte"),"."),(0,a.kt)("h2",{id:"conditions-pour-quune-\xe9quipe-soit-facturable"},"Conditions pour qu'une \xe9quipe soit facturable"),(0,a.kt)("p",null,"En plus de s'assurer qu'une ",(0,a.kt)("strong",{parentName:"p"},"Adresse de facturation")," est inscrite sur votre compte, les conditions suivantes doivent \xeatre remplies pour qu\u2019un quart de travail donn\xe9 soit facturable par l'un de vos employ\xe9s :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Le personnel qui a travaill\xe9 sur un quart doit avoir un statut d'emploi de ",(0,a.kt)("strong",{parentName:"li"},"Travailleur autonome / Pigiste"),"."),(0,a.kt)("li",{parentName:"ol"},"Le quart en question doit \xeatre r\xe9mun\xe9r\xe9e (voir l'onglet ",(0,a.kt)("strong",{parentName:"li"},"R\xe9mun\xe9ration")," du projet pour confirmer la r\xe9mun\xe9ration des quarts)."),(0,a.kt)("li",{parentName:"ol"},"Une feuille de temps doit avoir \xe9t\xe9 soumise ",(0,a.kt)("strong",{parentName:"li"},"et approuv\xe9e")," pour ce quart de travail.")))}p.isMDXComponent=!0}}]);