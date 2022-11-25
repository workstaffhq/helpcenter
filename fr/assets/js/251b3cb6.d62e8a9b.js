"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[142],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var a=t(7294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,l=function(e,r){if(null==e)return{};var t,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),u=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=u(e.components);return a.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=l,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||n;return t?a.createElement(f,o(o({ref:r},p),{},{components:t})):a.createElement(f,o({ref:r},p))}));function m(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var n=t.length,o=new Array(n);o[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<n;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9564:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var a=t(7462),l=(t(7294),t(3905));const n={title:"D\xe9marrer",sidebar_position:1},o="D\xe9marrer avec le module de paie",i={unversionedId:"managers/payroll/start",id:"managers/payroll/start",title:"D\xe9marrer",description:"Configurer votre compte pour la paie",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/managers/payroll/start.md",sourceDirName:"managers/payroll",slug:"/managers/payroll/start",permalink:"/fr/docs/managers/payroll/start",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"D\xe9marrer",sidebar_position:1},sidebar:"managersSidebar",previous:{title:"Paie",permalink:"/fr/docs/managers/payroll/"},next:{title:"Marche \xe0 suivre",permalink:"/fr/docs/managers/payroll/workflow"}},s={},u=[{value:"Configurer votre compte pour la paie",id:"configurer-votre-compte-pour-la-paie",level:2},{value:"Exclure les travailleurs autonomes de la paie",id:"exclure-les-travailleurs-autonomes-de-la-paie",level:2},{value:"Conditions pr\xe9alables \xe0 l\u2019utilisation du module de paie",id:"conditions-pr\xe9alables-\xe0-lutilisation-du-module-de-paie",level:2}],p={toc:u};function c(e){let{components:r,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"d\xe9marrer-avec-le-module-de-paie"},"D\xe9marrer avec le module de paie"),(0,l.kt)("h2",{id:"configurer-votre-compte-pour-la-paie"},"Configurer votre compte pour la paie"),(0,l.kt)("p",null,"Lorsque vous souhaitez commencer \xe0 utiliser le module de paie, il y a quelques \xe9tapes cl\xe9s pour cr\xe9er la structure qui vous permettra d\u2019utiliser cet outil efficacement."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Allez dans la section ",(0,l.kt)("strong",{parentName:"li"},"Paie")),(0,l.kt)("li",{parentName:"ol"},"Cliquez sur ",(0,l.kt)("strong",{parentName:"li"},"D\xe9buter")),(0,l.kt)("li",{parentName:"ol"},"Choisissez la fr\xe9quence de paie")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Hebdomadaire")," (52 p\xe9riodes de paie par an)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Quinzomadaire")," (24 p\xe9riodes de paie par an)")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Choisissez la date de d\xe9but de la premi\xe8re p\xe9riode.")),(0,l.kt)("h2",{id:"exclure-les-travailleurs-autonomes-de-la-paie"},"Exclure les travailleurs autonomes de la paie"),(0,l.kt)("p",null,"Par d\xe9faut, le personnel ayant le statut d\u2019emploi ",(0,l.kt)("strong",{parentName:"p"},"Travailleur Autonome")," et ",(0,l.kt)("strong",{parentName:"p"},"Employ\xe9")," est inclus dans la paie. Vous pouvez exclure les travailleurs autonomes s\u2019ils ne doivent pas \xeatre pris en compte dans la paie (par exemple, si vous utilisez les factures int\xe9gr\xe9es)."),(0,l.kt)("p",null,"Pour faire cette modification\xa0:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Allez dans la section ",(0,l.kt)("strong",{parentName:"li"},"Param\xe8tres"),", puis dans l\u2019onglet ",(0,l.kt)("strong",{parentName:"li"},"Paie")),(0,l.kt)("li",{parentName:"ol"},"Cochez ",(0,l.kt)("strong",{parentName:"li"},"Exclure les travailleurs autonomes de la paie"))),(0,l.kt)("h2",{id:"conditions-pr\xe9alables-\xe0-lutilisation-du-module-de-paie"},"Conditions pr\xe9alables \xe0 l\u2019utilisation du module de paie"),(0,l.kt)("p",null,"Quelques conditions s\u2019appliquent pour qu\u2019un quart de travail soit pris en compte par le module de paie\xa0:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Les conditions de r\xe9mun\xe9ration des quarts doivent avoir \xe9t\xe9 \xe9tablies"),(0,l.kt)("li",{parentName:"ul"},"Les feuilles de temps des travailleurs doivent avoir \xe9t\xe9 soumises et approuv\xe9es"),(0,l.kt)("li",{parentName:"ul"},"Les donn\xe9es li\xe9es aux quarts compris dans la p\xe9riode de paie doivent \xeatre \xe0 jour.")))}c.isMDXComponent=!0}}]);