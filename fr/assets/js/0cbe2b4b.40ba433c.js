"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7164],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=c(t),m=a,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||o;return t?n.createElement(d,s(s({ref:r},l),{},{components:t})):n.createElement(d,s({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5028:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const o={},s="Factures pour les travailleurs autonomes",i={unversionedId:"managers/invoicing/index",id:"managers/invoicing/index",title:"Factures pour les travailleurs autonomes",description:"Si vous travaillez avec des travailleurs autonomes / pigistes, Workstaff leur permet de cr\xe9er et de soumettre des factures \xe0 partir de l'application mobile pour les quarts de travail qu'ils ont effectu\xe9s.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/managers/invoicing/index.md",sourceDirName:"managers/invoicing",slug:"/managers/invoicing/",permalink:"/fr/docs/managers/invoicing/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"managersSidebar",previous:{title:"Diffusions",permalink:"/fr/docs/managers/messaging/broadcasts"},next:{title:"D\xe9marrage",permalink:"/fr/docs/managers/invoicing/get-started"}},u={},c=[],l={toc:c};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"factures-pour-les-travailleurs-autonomes"},"Factures pour les travailleurs autonomes"),(0,a.kt)("p",null,"Si vous travaillez avec des travailleurs autonomes / pigistes, Workstaff leur permet de cr\xe9er et de soumettre des factures \xe0 partir de l'application mobile pour les quarts de travail qu'ils ont effectu\xe9s."),(0,a.kt)("p",null,"Les factures sont g\xe9n\xe9r\xe9es sur la base des entr\xe9es de temps approuv\xe9es ainsi que des conditions de r\xe9mun\xe9ration que vous avez fournies \xe0 Workstaff, ce qui limite consid\xe9rablement la possibilit\xe9 d'erreurs en cours de route. Vos travailleurs autonomes et vous \xe9conomisez du temps et des efforts, et le processus de facturation, qui demande traditionnellement beaucoup d'efforts et d'allers-retours, se transforme en un processus fluide et sans emb\xfbches."),(0,a.kt)("p",null,"Bien que Workstaff g\xe9n\xe8re automatiquement des squelettes de factures pour vos travailleurs, ceux-ci peuvent toujours ajouter des postes ou modifier ceux qui sont g\xe9n\xe9r\xe9s automatiquement si n\xe9cessaire."),(0,a.kt)("p",null,"De votre c\xf4t\xe9, vous pouvez ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/managers/invoicing/workflow"},"v\xe9rifier et approuver les factures")," soumises par vos contractants."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"La facturation est une fonctionnalit\xe9 facultative qui peut \xeatre activ\xe9e ou d\xe9sactiv\xe9e dans vos ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/managers/customize/account"},"param\xe8tres de compte"),". Voir la page ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/managers/invoicing/get-started"},"D\xe9marrer")," pour conna\xeetre les \xe9tapes \xe0 suivre pour \xeatre pr\xeat \xe0 recevoir les factures de vos sous-traitants.")))}p.isMDXComponent=!0}}]);