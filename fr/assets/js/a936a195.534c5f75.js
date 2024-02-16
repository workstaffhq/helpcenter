"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9427],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2386:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const o={title:"Paie"},i="Pr\xe9paration de la paie",s={unversionedId:"managers/payroll/index",id:"managers/payroll/index",title:"Paie",description:"Interface de la paie",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/managers/payroll/index.md",sourceDirName:"managers/payroll",slug:"/managers/payroll/",permalink:"/fr/docs/managers/payroll/",draft:!1,tags:[],version:"current",frontMatter:{title:"Paie"},sidebar:"managersSidebar",previous:{title:"Marche \xe0 suivre",permalink:"/fr/docs/managers/invoicing/workflow"},next:{title:"D\xe9marrage",permalink:"/fr/docs/managers/payroll/get-started"}},l={},p=[],u={toc:p};function c(e){let{components:r,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pr\xe9paration-de-la-paie"},"Pr\xe9paration de la paie"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Interface de la paie",src:t(6573).Z,width:"1336",height:"609"})),(0,a.kt)("p",null,"Le module Paie a \xe9t\xe9 con\xe7u pour faciliter la pr\xe9paration et le traitement des paies de votre organisation."),(0,a.kt)("p",null,"Workstaff dispose d\xe9j\xe0 d'un puissant mod\xe8le de r\xe9mun\xe9ration qui vous permet de d\xe9finir pr\xe9cis\xe9ment la mani\xe8re dont vous r\xe9mun\xe9rez votre personnel.\nLe module de paie va encore plus loin : il consolide tous les revenus de votre personnel au cours de chaque p\xe9riode de paie et\nvous pr\xe9sente des chiffres et des rapports pr\xeats \xe0 l'emploi qui peuvent \xeatre saisis dans votre logiciel de paie externe."),(0,a.kt)("p",null,"Lorsque vous traitez une p\xe9riode de paie avec le module Paie, celui-ci rassemble et compile toutes les entr\xe9es de temps approuv\xe9es des travailleurs qui\nont \xe9t\xe9 affect\xe9s \xe0 des quarts pendant la p\xe9riode de paie, ainsi que les informations d\xe9taill\xe9es sur la r\xe9mun\xe9ration - y compris les primes / diff\xe9rentiels."),(0,a.kt)("p",null,"Workstaff vous avertira de toute incoh\xe9rence ou de toute donn\xe9e manquante dans vos p\xe9riodes de paie et vous aidera \xe0 y rem\xe9dier si n\xe9cessaire.\nPendant que vous travaillez sur les avertissements, vous pouvez g\xe9n\xe9rer \xe0 nouveau le rapport de cycle de paie pour refl\xe9ter les modifications que vous avez pu apporter."),(0,a.kt)("p",null,"Une fois qu'une p\xe9riode de paie est satisfaisante, le module vous aide \xe0 suivre votre progression dans le traitement de la paie de chacun de vos employ\xe9s en marquant\nles talons comme ",(0,a.kt)("em",{parentName:"p"},"Finaux"),". Lorsqu'un talon est marqu\xe9 comme final, Workstaff le g\xe8le afin que vous puissiez conserver les donn\xe9es historiques sans vous pr\xe9occuper\nd'\xe9ventuels changements non d\xe9sir\xe9s dans vos donn\xe9es de paie."),(0,a.kt)("p",null,"Pour commencer avec la Paie, ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/managers/payroll/get-started"},"continuez \xe0 lire"),"..."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Le module Paie est disponible sur le plan ",(0,a.kt)("strong",{parentName:"p"},"Max"),". Si vous \xeates actuellement abonn\xe9 au plan ",(0,a.kt)("strong",{parentName:"p"},"Pro"),", vous pouvez essayer le module avec\n2 p\xe9riodes de paies gratuites. Une fois que vous aurez trait\xe9 2 p\xe9riodes, vous devrez passer \xe0 la formule ",(0,a.kt)("strong",{parentName:"p"},"Max")," pour continuer \xe0 utiliser cette fonctionnalit\xe9.")))}c.isMDXComponent=!0},6573:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/paystub-ui-2407b232fabb68ff6a65d8982c4f7fd4.png"}}]);