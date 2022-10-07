"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5328],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),l=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(r),v=n,m=c["".concat(u,".").concat(v)]||c[v]||d[v]||i;return r?o.createElement(m,a(a({ref:t},p),{},{components:r})):o.createElement(m,a({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7841:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const i={title:"Pointage",sidebar_position:2},a="Pointage au d\xe9but et \xe0 la fin de vos quarts de travail",s={unversionedId:"workers/manage-your-time/clockin",id:"workers/manage-your-time/clockin",title:"Pointage",description:"L'application Workstaff vous permet de pointer vos quarts de travail du bout des doigts.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/workers/manage-your-time/clockin.md",sourceDirName:"workers/manage-your-time",slug:"/workers/manage-your-time/clockin",permalink:"/fr/docs/workers/manage-your-time/clockin",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Pointage",sidebar_position:2},sidebar:"workersSidebar",previous:{title:"Communiquer vos disponibilit\xe9s",permalink:"/fr/docs/workers/availability"},next:{title:"Soumettre vos heures",permalink:"/fr/docs/workers/manage-your-time/report-your-time"}},u={},l=[{value:"\xc0 propos de la g\xe9olocalisation",id:"\xe0-propos-de-la-g\xe9olocalisation",level:2},{value:"M\xe9thodes de suivi",id:"m\xe9thodes-de-suivi",level:2},{value:"Pointer sans restriction",id:"pointer-sans-restriction",level:3},{value:"Pointer par code QR",id:"pointer-par-code-qr",level:3},{value:"Pointer via votre chef d&#39;\xe9quipe",id:"pointer-via-votre-chef-d\xe9quipe",level:3}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pointage-au-d\xe9but-et-\xe0-la-fin-de-vos-quarts-de-travail"},"Pointage au d\xe9but et \xe0 la fin de vos quarts de travail"),(0,n.kt)("p",null,"L'application Workstaff vous permet de pointer vos quarts de travail du bout des doigts."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Le suivi du temps n'est pas disponible dans tous les plans de Workstaff. En fonction du compte de votre employeur, il se peut que Workstaff ne permette pas\nde pointer pour tous les quarts ou certains quarts.")),(0,n.kt)("iframe",{width:"640",height:"307",src:"https://www.loom.com/embed/a45299e764634c3bb4efd1b55001e8d0",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}),"## Arriv\xe9e et d\xe9part",(0,n.kt)("p",null,'Workstaff affichera les boutons "D\xe9buter" et "Terminer" pour les quarts auxquels vous avez \xe9t\xe9 affect\xe9 pour la journ\xe9e en cours \xe0 quelques endroits :'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sur la page ",(0,n.kt)("strong",{parentName:"li"},"Aujourd'hui"),"."),(0,n.kt)("li",{parentName:"ul"},"Dans votre agenda, dans les d\xe9tails d'un quart."),(0,n.kt)("li",{parentName:"ul"},"Dans un petit tiroir qui appara\xeet au bas de l'\xe9cran principal dans tous les onglets sauf sur la page ",(0,n.kt)("strong",{parentName:"li"},"Aujour'hui"),".")),(0,n.kt)("h2",{id:"\xe0-propos-de-la-g\xe9olocalisation"},"\xc0 propos de la g\xe9olocalisation"),(0,n.kt)("p",null,"Lorsque vous pointez pour la premi\xe8re fois, l'application mobile vous demande l'autorisation d'acc\xe9der \xe0 votre position ",(0,n.kt)("em",{parentName:"p"},"pendant que vous utilisez l'application"),"."),(0,n.kt)("p",null,"Workstaff ne saisit votre position qu'au moment o\xf9 vous pointez \xe0 votre arriv\xe9e et lors de votre d\xe9part.\n",(0,n.kt)("strong",{parentName:"p"},"Workstaff ne suivra jamais votre position en d'autres occasions, et ne la suivra jamais activement"),"."),(0,n.kt)("p",null,"De plus, vous pouvez d\xe9cider de joindre ou non les donn\xe9es de localisation \xe0 vos ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/workers/manage-your-time/report-your-time"},"entr\xe9es de temps")," \xe0 votre employeur."),(0,n.kt)("admonition",{title:"Conseil de pro",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Le fait de joindre vos donn\xe9es de localisation \xe0 vos saisies d'heures contribue \xe0 instaurer un climat de confiance avec votre employeur et certifie\nque vous \xe9tiez physiquement sur place lorsque vous avez point\xe9. Bien que cela soit facultatif,\nnous vous conseillons vivement d'activer la g\xe9olocalisation et d'inclure vos informations de localisation dans vos saisies de temps.")),(0,n.kt)("h2",{id:"m\xe9thodes-de-suivi"},"M\xe9thodes de suivi"),(0,n.kt)("p",null,"En fonction de la m\xe9thode de suivi du temps choisie par votre employeur, vous pouvez pointer vos heures de travail de plusieurs fa\xe7ons, \xe9num\xe9r\xe9es ci-dessous."),(0,n.kt)("h3",{id:"pointer-sans-restriction"},"Pointer sans restriction"),(0,n.kt)("p",null,"Vous pourrez pointer vous-m\xeame en arrivant sur le lieu de travail, au d\xe9but de votre quart.\nLorsque vous ouvrirez l'application mobile au d\xe9but de votre quart, vous serez invit\xe9 \xe0 pointer sur la page ",(0,n.kt)("strong",{parentName:"p"},"Aujourd'hui"),"."),(0,n.kt)("h3",{id:"pointer-par-code-qr"},"Pointer par code QR"),(0,n.kt)("p",null,"Si votre employeur a choisi cette m\xe9thode de suivi du temps, vous devrez scanner le code QR de chaque \xe9v\xe9nement pour pointer au d\xe9but et \xe0 la fin de votre quart de travail\nLes chefs d'\xe9quipe peuvent pr\xe9senter le code QR depuis leur propre t\xe9l\xe9phone, ou les codes QR peuvent \xeatre imprim\xe9s \xe0 l'avance. Assurez-vous\nde savoir o\xf9 trouver le code QR avant de commencer votre quart. En cas de doute, contactez votre employeur."),(0,n.kt)("h3",{id:"pointer-via-votre-chef-d\xe9quipe"},"Pointer via votre chef d'\xe9quipe"),(0,n.kt)("p",null,"Dans ce cas, on vous demandera d'aller voir un chef d'\xe9quipe en personne pour qu'il puisse pointer pour vous, \xe0 partir de son t\xe9l\xe9phone mobile."),(0,n.kt)("p",null,"Si vous \xeates le chef d'\xe9quipe d'un projet, vous pouvez faire pointer vos co\xe9quipiers en suivant les \xe9tapes suivantes :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Dans l'onglet ",(0,n.kt)("strong",{parentName:"li"},"Aujourd'hui"),", tapez sur ",(0,n.kt)("strong",{parentName:"li"},"Suivi du temps"),"."),(0,n.kt)("li",{parentName:"ol"},"Au d\xe9but du quart, lorsque vos co\xe9quipiers viennent vous voir, tapez sur ",(0,n.kt)("strong",{parentName:"li"},"D\xe9buter")," \xe0 c\xf4t\xe9 de leur nom."),(0,n.kt)("li",{parentName:"ol"},"\xc0 la fin de leur quart, tapez sur ",(0,n.kt)("strong",{parentName:"li"},"Terminer")),(0,n.kt)("li",{parentName:"ol"},"Vous pouvez alors soumettre leur saisie de temps \xe0 ce moment pr\xe9cis ou attendre plus tard.")))}d.isMDXComponent=!0}}]);