"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7949],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(t),d=a,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6458:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=t(7462),a=(t(7294),t(3905));const o={title:"Marche \xe0 suivre",sidebar_position:2},i=void 0,s={unversionedId:"managers/invoicing/workflow",id:"managers/invoicing/workflow",title:"Marche \xe0 suivre",description:"Processus de facturation",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/managers/invoicing/workflow.md",sourceDirName:"managers/invoicing",slug:"/managers/invoicing/workflow",permalink:"/fr/docs/managers/invoicing/workflow",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Marche \xe0 suivre",sidebar_position:2},sidebar:"managersSidebar",previous:{title:"D\xe9marrage",permalink:"/fr/docs/managers/invoicing/get-started"},next:{title:"Paie",permalink:"/fr/docs/managers/payroll/"}},l={},u=[{value:"Processus de facturation",id:"processus-de-facturation",level:2},{value:"Soumission",id:"soumission",level:2},{value:"Conciliation",id:"conciliation",level:2},{value:"V\xe9rification",id:"v\xe9rification",level:2},{value:"Approbation",id:"approbation",level:2},{value:"T\xe9l\xe9chargement d&#39;une facture",id:"t\xe9l\xe9chargement-dune-facture",level:2},{value:"En savoir plus",id:"en-savoir-plus",level:2}],c={toc:u};function p(e){let{components:r,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"processus-de-facturation"},"Processus de facturation"),(0,a.kt)("iframe",{width:"640",height:"306",src:"https://www.loom.com/embed/08196f1caebd4aca9e869b3159ffdfb3",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}),(0,a.kt)("h2",{id:"soumission"},"Soumission"),(0,a.kt)("p",null,"Lorsque le personnel soumet une facture, vous pouvez la consulter dans la section ",(0,a.kt)("strong",{parentName:"p"},"Factures")," du menu principal."),(0,a.kt)("p",null,"Vous pouvez filtrer votre liste de factures de la mani\xe8re suivante :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tout"),(0,a.kt)("li",{parentName:"ul"},"\xc0 approuver"),(0,a.kt)("li",{parentName:"ul"},"Approuv\xe9es"),(0,a.kt)("li",{parentName:"ul"},"Pay\xe9es")),(0,a.kt)("h2",{id:"conciliation"},"Conciliation"),(0,a.kt)("p",null,"Lorsque le temps factur\xe9 correspond \xe0 la saisie des heures et que le taux horaire soumis correspond au taux affich\xe9, Workstaff vous permet de le v\xe9rifier facilement en l'affichant sur la facture."),(0,a.kt)("p",null,"Si les informations ne correspondent pas, Workstaff vous montrera directement sur la facture quelles sont les donn\xe9es incorrectes afin que vous puissiez v\xe9rifier les informations et, si n\xe9cessaire, communiquer avec votre personnel pour qu'il soumette une nouvelle facture corrig\xe9e."),(0,a.kt)("h2",{id:"v\xe9rification"},"V\xe9rification"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Si les heures factur\xe9es correspondent aux heures pr\xe9vues et si le taux horaire factur\xe9 correspond au taux planifi\xe9, les ic\xf4nes de v\xe9rification sont vertes.\n",(0,a.kt)("img",{alt:"correct.png",src:t(7597).Z,width:"1278",height:"282"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Si les heures factur\xe9es ne correspondent pas aux heures pr\xe9vues et si le taux horaire factur\xe9 correspond au taux planifi\xe9, les ic\xf4nes de v\xe9rification sont rouges. Passez votre curseur sur les ic\xf4nes pour afficher le d\xe9tail des v\xe9rifications.\n",(0,a.kt)("img",{alt:"incorrect.png",src:t(1394).Z,width:"1278",height:"282"})," "))),(0,a.kt)("h2",{id:"approbation"},"Approbation"),(0,a.kt)("p",null,"Si les informations figurant sur la facture sont correctes, cliquez simplement sur ",(0,a.kt)("strong",{parentName:"p"},"Approuver"),". Votre personnel sera inform\xe9 de l'approbation de la facture sur l'application mobile et de la suite du processus."),(0,a.kt)("h2",{id:"t\xe9l\xe9chargement-dune-facture"},"T\xe9l\xe9chargement d'une facture"),(0,a.kt)("p",null,"Vous pouvez exporter la facture au format pdf en allant dans ",(0,a.kt)("strong",{parentName:"p"},"Actions")," et en cliquant sur ",(0,a.kt)("strong",{parentName:"p"},"T\xe9l\xe9charger"),"."),(0,a.kt)("h2",{id:"en-savoir-plus"},"En savoir plus"),(0,a.kt)("p",null,"Visitez la page ",(0,a.kt)("a",{parentName:"p",href:"https://help.workstaff.app/fr/docs/workers/invoices/"},(0,a.kt)("strong",{parentName:"a"},"Cr\xe9ez des factures pour votre travail"))," de notre Centre d\u2019aide ",(0,a.kt)("strong",{parentName:"p"},"pour les travailleurs")," afin d\u2019en savoir plus et de partager ces informations avec votre personnel."))}p.isMDXComponent=!0},7597:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/correct-d30ca7e33848325e1df8d929082bd34b.png"},1394:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/incorrect-6164c00a3cf629e59c85054965e49203.png"}}]);