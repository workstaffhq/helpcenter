"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4877],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>y});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),y=a,f=d["".concat(p,".").concat(y)]||d[y]||u[y]||o;return t?n.createElement(f,l(l({ref:r},c),{},{components:t})):n.createElement(f,l({ref:r},c))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9020:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const o={title:"Configuration",sidebar_position:3},l="Configuring Payroll",i={unversionedId:"managers/payroll/configure",id:"managers/payroll/configure",title:"Configuration",description:"To change options related to how you use the Payroll module, go to Settings / Payroll.",source:"@site/docs/managers/payroll/configure.md",sourceDirName:"managers/payroll",slug:"/managers/payroll/configure",permalink:"/docs/managers/payroll/configure",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Configuration",sidebar_position:3},sidebar:"managersSidebar",previous:{title:"Workflow and Tasks",permalink:"/docs/managers/payroll/workflow"},next:{title:"Overtime",permalink:"/docs/managers/payroll/overtime"}},p={},s=[{value:"Setting Up Your Pay Calendar",id:"calendar",level:2},{value:"Changing Your Pay Calendar",id:"changing-your-pay-calendar",level:3},{value:"Select Staff To Include in Pay Runs",id:"employment-statuses",level:2}],c={toc:s};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-payroll"},"Configuring Payroll"),(0,a.kt)("p",null,"To change options related to how you use the Payroll module, go to ",(0,a.kt)("strong",{parentName:"p"},"Settings")," / ",(0,a.kt)("strong",{parentName:"p"},"Payroll"),"."),(0,a.kt)("h2",{id:"calendar"},"Setting Up Your Pay Calendar"),(0,a.kt)("p",null,"The following pay calendars are supported by Workstaff:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Weekly")," (52 pay periods per year)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bi-Weekly")," (24 pay periods per year)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Monthly")," (12 periods per year)")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If your organization uses a different type of pay calendar, please ",(0,a.kt)("a",{parentName:"p",href:"mailto:help@workstaff.app"},"contact us"),", and we'll consider adding support for it.")),(0,a.kt)("p",null,"To calculate the boundaries of each pay period, Workstaff only needs to know the type of calendar and a ",(0,a.kt)("strong",{parentName:"p"},"reference date"),".\nThe reference date represents the first day of any period in your pay calendar. All pay periods boundaries will be calculated from\nthat reference date."),(0,a.kt)("h3",{id:"changing-your-pay-calendar"},"Changing Your Pay Calendar"),(0,a.kt)("p",null,"If you need to change your pay calendar once you start processing pay periods, you can adjust the type of pay calendar and, optionally, change its reference date. The dates of your next pay period will be calculated according to the new calendar. "),(0,a.kt)("p",null,"Under some circumstances, you may need to ",(0,a.kt)("a",{parentName:"p",href:"/docs/managers/payroll/workflow#resize"},"slightly adjust dates")," of your current or next pay period during the transition."),(0,a.kt)("h2",{id:"employment-statuses"},"Select Staff To Include in Pay Runs"),(0,a.kt)("p",null,"By default, all of your remunerated staff with employment statuses ",(0,a.kt)("strong",{parentName:"p"},"Contractor / Freelancer")," and ",(0,a.kt)("strong",{parentName:"p"},"Employee")," are included in pay runs. "),(0,a.kt)("p",null,"Select the option ",(0,a.kt)("strong",{parentName:"p"},"Exclude contractors from payroll")," in the settings if you want to exclude contractors / freelancers workers from you pay runs. This option is useful to prevent redundant information when you are using ",(0,a.kt)("a",{parentName:"p",href:"/docs/managers/invoicing/"},"integrated contractor invoices"),"."))}u.isMDXComponent=!0}}]);