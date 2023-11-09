"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4877],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),y=a,f=d["".concat(p,".").concat(y)]||d[y]||u[y]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9020:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"Configuration",sidebar_position:3},l="Configuring Payroll",i={unversionedId:"managers/payroll/configure",id:"managers/payroll/configure",title:"Configuration",description:"To change options related to how you use the Payroll module, go to Settings / Payroll.",source:"@site/docs/managers/payroll/configure.md",sourceDirName:"managers/payroll",slug:"/managers/payroll/configure",permalink:"/docs/managers/payroll/configure",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Configuration",sidebar_position:3},sidebar:"managersSidebar",previous:{title:"Workflow and Tasks",permalink:"/docs/managers/payroll/workflow"},next:{title:"General Settings",permalink:"/docs/managers/customize/account"}},p={},s=[{value:"Setting Up Your Pay Calendar",id:"calendar",level:2},{value:"Changing Your Pay Calendar",id:"changing-your-pay-calendar",level:3},{value:"Select Staff To Include in Pay Runs",id:"employment-statuses",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-payroll"},"Configuring Payroll"),(0,a.kt)("p",null,"To change options related to how you use the Payroll module, go to ",(0,a.kt)("strong",{parentName:"p"},"Settings")," / ",(0,a.kt)("strong",{parentName:"p"},"Payroll"),"."),(0,a.kt)("h2",{id:"calendar"},"Setting Up Your Pay Calendar"),(0,a.kt)("p",null,"The following pay calendars are supported by Workstaff:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Weekly")," (52 pay periods per year)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bi-Weekly")," (24 pay periods per year)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Monthly")," (12 periods per year)")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If your organization uses a different type of pay calendar, please ",(0,a.kt)("a",{parentName:"p",href:"mailto:help@workstaff.app"},"contact us"),", and we'll consider adding support for it.")),(0,a.kt)("p",null,"To calculate the boundaries of each pay period, Workstaff only needs to know the type of calendar and a ",(0,a.kt)("strong",{parentName:"p"},"reference date"),".\nThe reference date represents the first day of any period in your pay calendar. All pay periods boundaries will be calculated from\nthat reference date."),(0,a.kt)("h3",{id:"changing-your-pay-calendar"},"Changing Your Pay Calendar"),(0,a.kt)("p",null,"If you need to change your pay calendar once you start processing pay periods, you can adjust the type of pay calendar and, optionally, change its reference date. The dates of your next pay period will be calculated according to the new calendar. "),(0,a.kt)("p",null,"Under some circumstances, you may need to ",(0,a.kt)("a",{parentName:"p",href:"/docs/managers/payroll/workflow#resize"},"slightly adjust dates")," of your current or next pay period during the transition."),(0,a.kt)("h2",{id:"employment-statuses"},"Select Staff To Include in Pay Runs"),(0,a.kt)("p",null,"By default, all of your remunerated staff with employment statuses ",(0,a.kt)("strong",{parentName:"p"},"Contractor / Freelancer")," and ",(0,a.kt)("strong",{parentName:"p"},"Employee")," are included in pay runs. "),(0,a.kt)("p",null,"Select the option ",(0,a.kt)("strong",{parentName:"p"},"Exclude contractors from payroll")," in the settings if you want to exclude contractors / freelancers workers from you pay runs. This option is useful to prevent redundant information when you are using ",(0,a.kt)("a",{parentName:"p",href:"/docs/managers/invoicing/"},"integrated contractor invoices"),"."))}u.isMDXComponent=!0}}]);