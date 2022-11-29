"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9553],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=n,f=m["".concat(l,".").concat(c)]||m[c]||u[c]||s;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<s;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4522:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const s={title:"Traiter la paie",sidebar_position:2},i="Traiement de vos cycles de paie",o={unversionedId:"managers/payroll/workflow",id:"managers/payroll/workflow",title:"Traiter la paie",description:"Une fois que votre p\xe9riode de paie initiale est cr\xe9\xe9e, Workstaff vous montrera un r\xe9sum\xe9 de tous les employ\xe9s qui ont eu des revenus pendant la p\xe9riode de paie sous forme de talons.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/managers/payroll/workflow.md",sourceDirName:"managers/payroll",slug:"/managers/payroll/workflow",permalink:"/fr/docs/managers/payroll/workflow",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Traiter la paie",sidebar_position:2},sidebar:"managersSidebar",previous:{title:"D\xe9marrage",permalink:"/fr/docs/managers/payroll/get-started"},next:{title:"Configuration",permalink:"/fr/docs/managers/payroll/configure"}},l={},d=[{value:"Les p\xe9riodes de paie sont des instantan\xe9s fig\xe9s dans le temps",id:"les-p\xe9riodes-de-paie-sont-des-instantan\xe9s-fig\xe9s-dans-le-temps",level:2},{value:"L&#39;interface utilisateur de la paie",id:"linterface-utilisateur-de-la-paie",level:2},{value:"\xc9cran de la p\xe9riode de paie",id:"\xe9cran-de-la-p\xe9riode-de-paie",level:3},{value:"\xc9cran de talon de paie",id:"\xe9cran-de-talon-de-paie",level:3},{value:"Avertissements et alertes",id:"avertissements-et-alertes",level:2},{value:"Recherche et filtration des talons",id:"recherche-et-filtration-des-talons",level:2},{value:"Marquer les talons comme Finaux",id:"marquer-les-talons-comme-finaux",level:2},{value:"Exporter dans Excel",id:"exporter-dans-excel",level:2},{value:"Cr\xe9er la prochaine p\xe9riode de paie",id:"cr\xe9er-la-prochaine-p\xe9riode-de-paie",level:2},{value:"Redimensionner une p\xe9riode de paie existante",id:"resize",level:2}],p={toc:d};function u(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"traiement-de-vos-cycles-de-paie"},"Traiement de vos cycles de paie"),(0,n.kt)("p",null,"Une fois que votre ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/managers/payroll/get-started"},"p\xe9riode de paie initiale")," est cr\xe9\xe9e, Workstaff vous montrera un r\xe9sum\xe9 de tous les employ\xe9s qui ont eu des revenus pendant la p\xe9riode de paie sous forme de talons."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Il est possible qu'apr\xe8s avoir g\xe9n\xe9r\xe9 un cycle de paie, certains de vos employ\xe9s n'apparaissent pas ou que leurs donn\xe9es soient incompl\xe8tes. Si vous croyez que des donn\xe9es sont manquantes ou inexactes, assurez-vous d'abord que le statut d'emploi de votre \xe9quipe ainsi que leurs quarts de travail r\xe9pondent aux ",(0,n.kt)("a",{parentName:"p",href:"/fr/docs/managers/payroll/get-started#prerequisites"},"conditions pr\xe9alables")," pour \xeatre pris en compte dans les cycles de paie.")),(0,n.kt)("h2",{id:"les-p\xe9riodes-de-paie-sont-des-instantan\xe9s-fig\xe9s-dans-le-temps"},"Les p\xe9riodes de paie sont des instantan\xe9s fig\xe9s dans le temps"),(0,n.kt)("p",null,"Chaque p\xe9riode de paie dans Workstaff est une photo de vos donn\xe9es de paie prise au moment o\xf9 la p\xe9riode a \xe9t\xe9 g\xe9n\xe9r\xe9e. Workstaff ne met pas automatiquement \xe0 jour les donn\xe9es de paie lorsque des ajustements sont apport\xe9s aux donn\xe9es sous-jacentes telles que la r\xe9mun\xe9ration ou les entr\xe9es de temps."),(0,n.kt)("p",null,"Lorsque vous avancez sur le traitement de votre p\xe9riode de paie, vous pourriez avoir besoin d'ajuster la r\xe9mun\xe9ration ou les entr\xe9es de temps. Lorsque vous le faites, Workstaff identifie les modifications et vous avertit que les donn\xe9es de paie ne sont pas \xe0 jour. Pour synchroniser les donn\xe9es de paie, vous devez re-g\xe9n\xe9rer manuellement la p\xe9riode de paie."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Les talons marqu\xe9s comme ",(0,n.kt)("strong",{parentName:"p"},"Finaux")," ne sont pas re-g\xe9n\xe9r\xe9s automatiquement. Pour mettre \xe0 jour un talon qui a \xe9t\xe9 marqu\xe9 comme \xe9tant finalis\xe9, vous devez d'abord le rouvrir, puis re-g\xe9n\xe9rer la p\xe9riode.")),(0,n.kt)("h2",{id:"linterface-utilisateur-de-la-paie"},"L'interface utilisateur de la paie"),(0,n.kt)("p",null,"Le module Paie comporte 2 \xe9crans principaux : l'\xe9cran de la p\xe9riode de paie et l'\xe9cran du talon de paie."),(0,n.kt)("h3",{id:"\xe9cran-de-la-p\xe9riode-de-paie"},"\xc9cran de la p\xe9riode de paie"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\xc9cran de la p\xe9riode de paie",src:a(2397).Z,width:"1333",height:"613"})),(0,n.kt)("p",null,"L'\xe9cran de la p\xe9riode de paie pr\xe9sente une vue d'ensemble de tous les talons des employ\xe9s, permet de les filtrer et de les trier et facilite le suivi de la progression du traitement de la paie."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Navigateur"),": Vous permet de vous d\xe9placer rapidement dans les p\xe9riodes de paie et les talons des employ\xe9s."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Moment de la g\xe9n\xe9ration")," : Indique le moment o\xf9 la p\xe9riode a \xe9t\xe9 g\xe9n\xe9r\xe9e pour la derni\xe8re fois."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Boutons d'actions"),": G\xe9n\xe9rez \xe0 nouveau la p\xe9riode de paie, t\xe9l\xe9chargez-la dans Excel et ","[redimensionnez la p\xe9riode de paie]"," (#resize)."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Filtres"),": Permet de limiter les donn\xe9es affich\xe9es pour se concentrer sur des t\xe2ches sp\xe9cifiques."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Indicateurs d'avancement"),": Au fur et \xe0 mesure que vous avancez sur le traitement de la paie et que vous marquez les talons comme trait\xe9s, les crochets verts s'affichent \xe0 c\xf4t\xe9 de l'identification du travailleur pour vous permettre de visualiser en un coup d'oeil votre progression.")),(0,n.kt)("h3",{id:"\xe9cran-de-talon-de-paie"},"\xc9cran de talon de paie"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\xc9cran de talon de paie",src:a(3489).Z,width:"1336",height:"609"})),(0,n.kt)("p",null,"L'\xe9cran du talon de paie affiche, pour un travailleur \xe0 la fois, le r\xe9sum\xe9 \xe0 haut niveau des revenus ainsi que les d\xe9tails. Cet \xe9cran est con\xe7u pour montrer tout ce dont vous avez besoin pour alimenter votre syst\xe8me de paie externe."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Navigateur de talon"),": Vous pouvez naviguer \xe0 travers les bulletins de paie sans avoir \xe0 revenir \xe0 l'\xe9cran principal de la p\xe9riode de paie pour les traiter."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Bouton ",(0,n.kt)("em",{parentName:"strong"},"Marquer comme Final")),": Marquez les talons comme d\xe9finitifs une fois que vous les avez trait\xe9s pour garder une trace de votre progression et indiquer \xe0 Workstaff de ne plus les modifier, m\xeame lors d'une nouvelle g\xe9n\xe9ration de la p\xe9riode de paie."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Sommes des gains"),": Il s'agit de la somme de tous les revenus, regroup\xe9s par code de gain et par taux. En r\xe8gle g\xe9n\xe9rles, ce sont les chiffres qui devraient \xeatre saisis dans votre logiciel de gestion de la paie."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Journal de travail"),": Ce tableau pr\xe9sente, pour chaque jour de la p\xe9riode, un r\xe9sum\xe9 des heures travaill\xe9es, des pauses et des temps de d\xe9placement. Il peut \xeatre utilis\xe9 pour identifier et quantifier rapidement les heures suppl\xe9mentaires."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Gains d\xe9taill\xe9s"),": Ce tableau montre chaque entr\xe9e de salaire pour le travailleur sur la p\xe9riode et permet de naviguer facilement vers le projet correspondant si n\xe9cessaire.")),(0,n.kt)("h2",{id:"avertissements-et-alertes"},"Avertissements et alertes"),(0,n.kt)("p",null,"Une fois que les donn\xe9es ont \xe9t\xe9 g\xe9n\xe9r\xe9es pour une p\xe9riode de paie, Workstaff vous avertit s'il y a des \xe9l\xe9ments manquants ou obsol\xe8tes."),(0,n.kt)("p",null,"Voici les diff\xe9rents avertissements possibles :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Certaines entr\xe9es de temps n'ont pas \xe9t\xe9 approuv\xe9es")," : cet avertissement indique que certaines saisies de temps au cours de la p\xe9riode de paie n'ont pas \xe9t\xe9 approuv\xe9es, et n'ont donc pas \xe9t\xe9 prises en compte dans la p\xe9riode de paie. Cliquez sur ",(0,n.kt)("strong",{parentName:"li"},"Voir les feuilles de temps")," pour visualiser et approuver ces feuilles de temps dans le module Feuilles de temps.\n",(0,n.kt)("img",{alt:"warning2.png",src:a(4190).Z,width:"2876",height:"206"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Certains quarts ne sont pas pris en compte")," : cet avertissement appara\xeet lorsque de nouveaux quarts de travail ont \xe9t\xe9 ajout\xe9s ou approuv\xe9s apr\xe8s la derni\xe8re g\xe9n\xe9ration de la p\xe9riode de paie. En tant que telles, ces donn\xe9es ne sont pas encore incluses dans la p\xe9riode de paie, et cet avertissement signifie g\xe9n\xe9ralement que la p\xe9riode devrait \xeatre g\xe9n\xe9r\xe9e \xe0 nouveau. Cliquez sur ",(0,n.kt)("strong",{parentName:"li"},"Re-g\xe9n\xe9rer")," pour que les entr\xe9es de temps manquantes soient incluses et que les donn\xe9es de la p\xe9riode soient mises \xe0 jour.\n",(0,n.kt)("img",{alt:"warning3.png",src:a(4911).Z,width:"2650",height:"200"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Les donn\xe9es relatives \xe0 la r\xe9mun\xe9ration pour certains quarts ont chang\xe9")," : et avertissement indique si des modifications ont \xe9t\xe9 apport\xe9es aux donn\xe9es de r\xe9mun\xe9ration d'au moins un membre du personnel pour les quarts travaill\xe9s pendant la p\xe9riode.\n",(0,n.kt)("img",{alt:"warning4.png",src:a(5375).Z,width:"2650",height:"236"})),(0,n.kt)("li",{parentName:"ul"},"Si des donn\xe9es ne sont pas \xe0 jour, des avertissements appara\xeetront \xe9galement \xe0 l'extr\xeame droite des talons de paie concern\xe9s dans l'\xe9cran de la p\xe9riode de paie :\n",(0,n.kt)("img",{alt:"warning5.png",src:a(1649).Z,width:"2650",height:"306"})),(0,n.kt)("li",{parentName:"ul"},"Pour en savoir plus sur le probl\xe8me de chaque talon marqu\xe9 d'un avertissement, cliquez dessus pour ouvrir l'\xe9cran du talon de paie. Une fois l\xe0, vous pouvez cliquer sur le quart marqu\xe9 d'un avertissement sous ",(0,n.kt)("strong",{parentName:"li"},"Gains d\xe9taill\xe9s")," pour \xeatre redirig\xe9 vers la page du projet concern\xe9.\n",(0,n.kt)("img",{alt:"warning6.png",src:a(1371).Z,width:"1590",height:"204"}))),(0,n.kt)("h2",{id:"recherche-et-filtration-des-talons"},"Recherche et filtration des talons"),(0,n.kt)("p",null,"Workstaff vous permet de rechercher et de filtrer les talons de paie afin d'afficher uniquement les donn\xe9es pertinentes selon vos diff\xe9rentes t\xe2ches."),(0,n.kt)("p",null,"Si vous voulez trouver le talons d'un employ\xe9 sp\xe9cifique pour une p\xe9riode donn\xe9e, tapez son nom ou son num\xe9ro de fiche dans le champ de texte en haut \xe0 droite du tableau des talons."),(0,n.kt)("p",null,"Utilisez les filtres pour afficher les talons par statut (",(0,n.kt)("strong",{parentName:"p"},"Tous ; talons ouverts uniquement ; talons d\xe9finitifs uniquement"),") ou par avertissements connexes (",(0,n.kt)("strong",{parentName:"p"},"Afficher les talons obsol\xe8tes ; Afficher les talons avec des gains nuls"),")."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"filters.png",src:a(228).Z,width:"860",height:"90"})),(0,n.kt)("h2",{id:"marquer-les-talons-comme-finaux"},"Marquer les talons comme Finaux"),(0,n.kt)("p",null,"Le module vous permet de savoir exactement o\xf9 vous en \xeates dans la pr\xe9paration de votre paie. Marquez les talons finalis\xe9s en cliquant sur ",(0,n.kt)("strong",{parentName:"p"},"Marquer comme Final"),". Workstaff s'assurera alors que ses donn\xe9es restent intouch\xe9es, m\xeame si les donn\xe9es sous-jacentes, telles que la r\xe9mun\xe9ration ou les entr\xe9es de temps, devaient changer."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"final.png",src:a(4250).Z,width:"434",height:"110"})),(0,n.kt)("h2",{id:"exporter-dans-excel"},"Exporter dans Excel"),(0,n.kt)("p",null,"Tous les d\xe9tails de l'entr\xe9e de la paie (y compris les codes de projet, les d\xe9partements, les r\xf4les travaill\xe9s, etc.) peuvent \xeatre export\xe9s vers un fichier Excel pour automatiser votre traitement si n\xe9cessaire."),(0,n.kt)("p",null,"Pour exporter les donn\xe9es de la p\xe9riode vers un fichier Excel, cliquez sur l'ic\xf4ne de t\xe9l\xe9chargement:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"excel.png",src:a(8326).Z,width:"454",height:"136"})),(0,n.kt)("h2",{id:"cr\xe9er-la-prochaine-p\xe9riode-de-paie"},"Cr\xe9er la prochaine p\xe9riode de paie"),(0,n.kt)("p",null,"Il est recommand\xe9 d'attendre la fin d'une p\xe9riode de paie pour cr\xe9er cette p\xe9riode dans Workstaff et traiter les donn\xe9es."),(0,n.kt)("p",null,"Vous pouvez tout de m\xeame g\xe9n\xe9rer les donn\xe9es de la p\xe9riode en cours avant qu'elle ne soit termin\xe9e, si n\xe9cessaire."),(0,n.kt)("h2",{id:"resize"},"Redimensionner une p\xe9riode de paie existante"),(0,n.kt)("p",null,"Si n\xe9cessaire, Workstaff vous permet de redimensionner votre premi\xe8re et votre derni\xe8re p\xe9riode de paie (qui peut \xeatre la m\xeame p\xe9riode si vous venez de commencer \xe0 utiliser le module et que vous avez une seule p\xe9riode)."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Cliquez sur l'ic\xf4ne repr\xe9sentant un engrenage en haut \xe0 droite de la page de la p\xe9riode de paie."),(0,n.kt)("li",{parentName:"ol"},"S\xe9lectionner ",(0,n.kt)("strong",{parentName:"li"},"Redimensionner la p\xe9riode..."),".\n",(0,n.kt)("img",{alt:"resize.png",src:a(5231).Z,width:"494",height:"180"})),(0,n.kt)("li",{parentName:"ol"},"Choississez une nouvelle date de d\xe9but et/ou de fin.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Vous ne pouvez r\xe9duire ou prolonger une p\xe9riode de paie existante que par un nombre limit\xe9 de jours. Cette dur\xe9e d\xe9pend de votre calendrier de paie, mais en g\xe9n\xe9ral, Workstaff ne vous permettra pas de prolonger une p\xe9riode plus de deux fois la taille d'une p\xe9riode de paie standard dans le calendrier de paie utilis\xe9 pour votre compte.")))}u.isMDXComponent=!0},8326:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/excel-80a024777b658ee025175a29606d8af3.png"},228:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/filters-973045f5f7a67be6221ff29594e557ad.png"},4250:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/final-fca50c3357f6b34814145d31569a6e1e.png"},2397:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/payroll-ui-annotated-a3e969b2fe47a7c917783324abf7ee4d.png"},3489:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/paystub-ui-annotated-ddcc3e6b09a564bc946e7c436be92946.png"},5231:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/resize-573af4de26352e54ab23bb19662e5de5.png"},4190:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/warning2-cff59ec2d993202f9557cdbae027dcbb.png"},4911:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/warning3-c842a2172170065f00bb4657b38e1b4e.png"},5375:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/warning4-c8651eca3baaf50b59a23f319441201b.png"},1649:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/warning5-a3e118126d3272ea22ac4b7d46433b0b.png"},1371:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/warning6-73e1b1f570a8e0ef834ef0d4ec7ee443.png"}}]);