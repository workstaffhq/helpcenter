"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6914],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},o=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),o=s(a),k=l,g=o["".concat(p,".").concat(k)]||o[k]||d[k]||r;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=o;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},2170:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>s});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_position:3},i="Heures suppl\xe9mentaires",u={unversionedId:"managers/timetracking/overtime",id:"managers/timetracking/overtime",title:"Heures suppl\xe9mentaires",description:"Workstaff peut calculer et r\xe9mun\xe9rer les heures suppl\xe9mentaires automatiquement, \xe0 la fois quotidiennement et hebdomadairement.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/managers/timetracking/overtime.md",sourceDirName:"managers/timetracking",slug:"/managers/timetracking/overtime",permalink:"/fr/docs/managers/timetracking/overtime",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"managersSidebar",previous:{title:"Soumission et approbation des heures",permalink:"/fr/docs/managers/timetracking/submissions"},next:{title:"Messagerie",permalink:"/fr/docs/managers/messaging/"}},p={},s=[{value:"Indicateurs d&#39;avertissement",id:"indicateurs-davertissement",level:2},{value:"Dans le calendrier hebdomadaire",id:"dans-le-calendrier-hebdomadaire",level:3},{value:"Lors de la r\xe9servation du personnel",id:"lors-de-la-r\xe9servation-du-personnel",level:3},{value:"Comment les heures suppl\xe9mentaires sont-elles calcul\xe9es ?",id:"comment-les-heures-suppl\xe9mentaires-sont-elles-calcul\xe9es-",level:2},{value:"Exemples avec des r\xe8gles journali\xe8res",id:"exemples-avec-des-r\xe8gles-journali\xe8res",level:3},{value:"Exemples de r\xe8gles hebdomadaires",id:"exemples-de-r\xe8gles-hebdomadaires",level:3},{value:"Exemple avec des r\xe8gles journali\xe8res et hebdomadaires",id:"exemple-avec-des-r\xe8gles-journali\xe8res-et-hebdomadaires",level:3},{value:"R\xe9mun\xe9ration des heures suppl\xe9mentaires",id:"r\xe9mun\xe9ration-des-heures-suppl\xe9mentaires",level:2}],m={toc:s};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"heures-suppl\xe9mentaires"},"Heures suppl\xe9mentaires"),(0,l.kt)("p",null,"Workstaff peut calculer et ",(0,l.kt)("a",{parentName:"p",href:"/fr/docs/managers/payroll/overtime"},"r\xe9mun\xe9rer")," les heures suppl\xe9mentaires automatiquement, \xe0 la fois quotidiennement et hebdomadairement."),(0,l.kt)("h2",{id:"indicateurs-davertissement"},"Indicateurs d'avertissement"),(0,l.kt)("p",null,"Lorsque les r\xe8gles relatives aux heures suppl\xe9mentaires sont configur\xe9es dans votre compte, Workstaff affiche des avertissements aux endroits appropri\xe9s, tels que l'affichage du calendrier hebdomadaire ou lors de l'affectation de personnel. Ces avertissements sont con\xe7us pour mettre en \xe9vidence les situations dans lesquelles des heures suppl\xe9mentaires non d\xe9sir\xe9es seraient introduites par une affectation."),(0,l.kt)("h3",{id:"dans-le-calendrier-hebdomadaire"},"Dans le calendrier hebdomadaire"),(0,l.kt)("p",null,"Dans la vue du calendrier hebdomadaire, un petit avertissement s'affiche pour tout membre du personnel avec des heures suppl\xe9mentaires planifi\xe9es pour la semaine en cours :"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Heures suppl\xe9mentaires combin\xe9es",src:a(1123).Z,width:"569",height:"337"})),(0,l.kt)("h3",{id:"lors-de-la-r\xe9servation-du-personnel"},"Lors de la r\xe9servation du personnel"),(0,l.kt)("p",null,"Lors de l'affectation de personnel \xe0 l'aide du bouton ",(0,l.kt)("strong",{parentName:"p"},"Affecter du personnel")," sur les pages de projet, Workstaff fournit des avertissements si les affectations d\xe9passent les limites d'heures suppl\xe9mentaires. Survolez l'avertissement pour afficher les d\xe9tails des heures suppl\xe9mentaires. En outre, vous pouvez cliquer sur ",(0,l.kt)("strong",{parentName:"p"},"Afficher les diff\xe9rences")," pour voir les changements apport\xe9s par la ou les affectations en cours."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"R\xe9servation d&#39;heures suppl\xe9mentaires",src:a(6605).Z,width:"524",height:"225"})),(0,l.kt)("h2",{id:"comment-les-heures-suppl\xe9mentaires-sont-elles-calcul\xe9es-"},"Comment les heures suppl\xe9mentaires sont-elles calcul\xe9es ?"),(0,l.kt)("p",null,"Les heures suppl\xe9mentaires sont toujours calcul\xe9es sur la base de semaines de travail compl\xe8tes. Ces semaines de travail correspondent toujours au ",(0,l.kt)("strong",{parentName:"p"},"premier jour de la semaine")," configur\xe9 dans les param\xe8tres g\xe9n\xe9raux de votre compte."),(0,l.kt)("p",null,"Pour calculer les heures suppl\xe9mentaires, Workstaff prend en compte toutes les p\xe9riodes de travail effectu\xe9es par un membre du personnel au cours d'une semaine, et applique les r\xe8gles relatives aux heures suppl\xe9mentaires configur\xe9es sur votre compte. Les r\xe8gles relatives aux heures suppl\xe9mentaires journali\xe8res sont appliqu\xe9es en premier, puis les r\xe8gles hebdomadaires. Les r\xe8gles hebdomadaires sont toujours appliqu\xe9es sur la base des heures non suppl\xe9mentaires calcul\xe9es quotidiennement."),(0,l.kt)("p",null,"Ces calculs \xe9tant assez compliqu\xe9s et il est plus facile de les comprendre \xe0 l'aide d'exemples :"),(0,l.kt)("h3",{id:"exemples-avec-des-r\xe8gles-journali\xe8res"},"Exemples avec des r\xe8gles journali\xe8res"),(0,l.kt)("p",null,"Workstaff applique les r\xe8gles journali\xe8res ind\xe9pendamment pour chaque jour travaill\xe9."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"R\xe8gle journali\xe8re unique avec une limite de 8 heures par jour")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"LUN"),(0,l.kt)("th",{parentName:"tr",align:null},"MAR"),(0,l.kt)("th",{parentName:"tr",align:null},"MER"),(0,l.kt)("th",{parentName:"tr",align:null},"JEU"),(0,l.kt)("th",{parentName:"tr",align:null},"VEN"),(0,l.kt)("th",{parentName:"tr",align:null},"SAM"),(0,l.kt)("th",{parentName:"tr",align:null},"DIM"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Heures travaill\xe9es"),(0,l.kt)("td",{parentName:"tr",align:null},"7h"),(0,l.kt)("td",{parentName:"tr",align:null},"8h"),(0,l.kt)("td",{parentName:"tr",align:null},"9h"),(0,l.kt)("td",{parentName:"tr",align:null},"9h"),(0,l.kt)("td",{parentName:"tr",align:null},"7.5h"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Heures r\xe9guli\xe8res"),(0,l.kt)("td",{parentName:"tr",align:null},"7h"),(0,l.kt)("td",{parentName:"tr",align:null},"8h"),(0,l.kt)("td",{parentName:"tr",align:null},"8h"),(0,l.kt)("td",{parentName:"tr",align:null},"8h"),(0,l.kt)("td",{parentName:"tr",align:null},"7.5h"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Temps suppl. journalier @8h"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1h"),(0,l.kt)("td",{parentName:"tr",align:null},"1h"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Deux r\xe8gles journali\xe8res avec une limite \xe0 8 heures et 12 heures par jour")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"LUN"),(0,l.kt)("th",{parentName:"tr",align:null},"MAR"),(0,l.kt)("th",{parentName:"tr",align:null},"MER"),(0,l.kt)("th",{parentName:"tr",align:null},"JEU"),(0,l.kt)("th",{parentName:"tr",align:null},"VEN"),(0,l.kt)("th",{parentName:"tr",align:null},"SAM"),(0,l.kt)("th",{parentName:"tr",align:null},"DIM"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Heures travaill\xe9es"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"7.5"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Heures r\xe9guli\xe8res"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"7.5"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Temps suppl. journalier @8h"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Temps suppl. journalier @12h"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"exemples-de-r\xe8gles-hebdomadaires"},"Exemples de r\xe8gles hebdomadaires"),(0,l.kt)("p",null,"Workstaff applique des r\xe8gles hebdomadaires bas\xe9es sur la somme cumul\xe9e des heures travaill\xe9es au cours de la semaine."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"R\xe8gle hebdomadaire unique avec une limite de 35 heures par semaine")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"LUN"),(0,l.kt)("th",{parentName:"tr",align:null},"MAR"),(0,l.kt)("th",{parentName:"tr",align:null},"MER"),(0,l.kt)("th",{parentName:"tr",align:null},"JEU"),(0,l.kt)("th",{parentName:"tr",align:null},"VEN"),(0,l.kt)("th",{parentName:"tr",align:null},"SAM"),(0,l.kt)("th",{parentName:"tr",align:null},"DIM"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Heures travaill\xe9es"),(0,l.kt)("td",{parentName:"tr",align:null},"8.5"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"7.5"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 Cumulatif"),(0,l.kt)("td",{parentName:"tr",align:null},"8.5"),(0,l.kt)("td",{parentName:"tr",align:null},"16.5"),(0,l.kt)("td",{parentName:"tr",align:null},"25.5"),(0,l.kt)("td",{parentName:"tr",align:null},"34.5"),(0,l.kt)("td",{parentName:"tr",align:null},"42"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Heures r\xe9guli\xe8res"),(0,l.kt)("td",{parentName:"tr",align:null},"8.5"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"0.5"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Temps suppl. hebdo @35h"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Deux r\xe8gles hebdomadaires avec des limites \xe0 35 heures et 40 heures par semaine")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"LUN"),(0,l.kt)("th",{parentName:"tr",align:null},"MAR"),(0,l.kt)("th",{parentName:"tr",align:null},"MER"),(0,l.kt)("th",{parentName:"tr",align:null},"JEU"),(0,l.kt)("th",{parentName:"tr",align:null},"VEN"),(0,l.kt)("th",{parentName:"tr",align:null},"SAM"),(0,l.kt)("th",{parentName:"tr",align:null},"DIM"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Heures travaill\xe9es"),(0,l.kt)("td",{parentName:"tr",align:null},"8.5"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"7.5"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 Cumulatif"),(0,l.kt)("td",{parentName:"tr",align:null},"8.5"),(0,l.kt)("td",{parentName:"tr",align:null},"16.5"),(0,l.kt)("td",{parentName:"tr",align:null},"25.5"),(0,l.kt)("td",{parentName:"tr",align:null},"34.5"),(0,l.kt)("td",{parentName:"tr",align:null},"42"),(0,l.kt)("td",{parentName:"tr",align:null},"50"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Heures r\xe9guli\xe8res"),(0,l.kt)("td",{parentName:"tr",align:null},"8.5"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"0.5"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Temps suppl. hebdo @35h"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Temps suppl. hebdo @40h"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"exemple-avec-des-r\xe8gles-journali\xe8res-et-hebdomadaires"},"Exemple avec des r\xe8gles journali\xe8res et hebdomadaires"),(0,l.kt)("p",null,"Lorsque des r\xe8gles quotidiennes et hebdomadaires sont pr\xe9sentes, Workstaff applique d'abord les r\xe8gles journali\xe8res, puis les r\xe8gles hebdomadaires sur le cumul des heures normales."),(0,l.kt)("p",null,"**R\xe8gle journali\xe8re combin\xe9e avec une limite de 8 heures et r\xe8gle hebdomadaire avec une limite de 35 heures par semaine."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"LUN"),(0,l.kt)("th",{parentName:"tr",align:null},"MAR"),(0,l.kt)("th",{parentName:"tr",align:null},"MER"),(0,l.kt)("th",{parentName:"tr",align:null},"JEU"),(0,l.kt)("th",{parentName:"tr",align:null},"VEN"),(0,l.kt)("th",{parentName:"tr",align:null},"SAM"),(0,l.kt)("th",{parentName:"tr",align:null},"DIM"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Heures travaill\xe9es"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 Cumulatif"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"17"),(0,l.kt)("td",{parentName:"tr",align:null},"27"),(0,l.kt)("td",{parentName:"tr",align:null},"36"),(0,l.kt)("td",{parentName:"tr",align:null},"45"),(0,l.kt)("td",{parentName:"tr",align:null},"51"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Heures r\xe9guli\xe8res"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udc49 Cumulatif"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"24"),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"35"),(0,l.kt)("td",{parentName:"tr",align:null},"35"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Temps suppl. journalier @8h"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Temps suppl. hebdo @35h"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"r\xe9mun\xe9ration-des-heures-suppl\xe9mentaires"},"R\xe9mun\xe9ration des heures suppl\xe9mentaires"),(0,l.kt)("p",null,"C'est le module Paie qui calcule ",(0,l.kt)("a",{parentName:"p",href:"/fr/docs/managers/payroll/overtime"},"la r\xe9mun\xe9ration pr\xe9cise des heures suppl\xe9mentaires"),". Assurez-vous que votre plan inclut cette fonctionnalit\xe9 si vous souhaitez r\xe9mun\xe9rer les heures suppl\xe9mentaires."))}d.isMDXComponent=!0},1123:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Supp-Combin\xe9-6eec991f59190db9f24728107e980447.png"},6605:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Supp-booking-25e6fa8f42fa557b51cd866a34714edb.png"}}]);