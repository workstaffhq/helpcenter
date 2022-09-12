"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=r,p=f["".concat(s,".").concat(d)]||f[d]||m[d]||a;return n?o.createElement(p,i(i({ref:t},u),{},{components:n})):o.createElement(p,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={},i="Organization Settings",l={unversionedId:"managers/customize/account",id:"managers/customize/account",title:"Organization Settings",description:"Workstaff offers you different customization options that will allow you to mimic your organization\u2019s structure and activity.",source:"@site/docs/managers/customize/account.md",sourceDirName:"managers/customize",slug:"/managers/customize/account",permalink:"/docs/managers/customize/account",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"managersSidebar",previous:{title:"Workflow",permalink:"/docs/managers/invoicing/workflow"},next:{title:"Personalize staff profile fields",permalink:"/docs/managers/customize/custom-fields"}},s={},c=[{value:"Account",id:"account",level:2},{value:"Your Organization",id:"your-organization",level:3},{value:"Time &amp; Location",id:"time--location",level:3},{value:"Defaults",id:"defaults",level:3},{value:"Time Tracking",id:"time-tracking",level:3},{value:"Invoicing",id:"invoicing",level:3},{value:"Users",id:"users",level:2},{value:"Departments",id:"departments",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"organization-settings"},"Organization Settings"),(0,r.kt)("p",null,"Workstaff offers you different customization options that will allow you to mimic your organization\u2019s structure and activity.\nThe different customization options available to you are listed below."),(0,r.kt)("h2",{id:"account"},"Account"),(0,r.kt)("p",null,"Setting up the following general settings for your organization in Workstaff is a crucial step."),(0,r.kt)("h3",{id:"your-organization"},"Your Organization"),(0,r.kt)("p",null,"In this section, fill-in the general information about your organization such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A logo"),(0,r.kt)("li",{parentName:"ul"},"The name of your company"),(0,r.kt)("li",{parentName:"ul"},"Your organization type (For profit/ Other or Non profit)")),(0,r.kt)("h3",{id:"time--location"},"Time & Location"),(0,r.kt)("p",null,"Select your organization\u2019s ",(0,r.kt)("strong",{parentName:"p"},"Timezone")," and your ",(0,r.kt)("strong",{parentName:"p"},"Headquarters")," location for distance and time offset calculations. Selecting the day will determine how your Calendar and Timesheets will be displayed and organized on Workstaff."),(0,r.kt)("h3",{id:"defaults"},"Defaults"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select who amongst your account users will be the ",(0,r.kt)("strong",{parentName:"li"},"Default contact person")),(0,r.kt)("li",{parentName:"ol"},"Select your ",(0,r.kt)("strong",{parentName:"li"},"Default remuneration mode")," (None; Hourly, Volunteer). The mode you select will be applied to all new events"),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("strong",{parentName:"li"},"Default employment status")," (Contractor/Freelancer, Payroll, Volunteer) you select will be added to all new staff profiles. You can still select a status for each staff member by editing it directly in their profile.")),(0,r.kt)("h3",{id:"time-tracking"},"Time Tracking"),(0,r.kt)("p",null,"You can customize options related to tracking your team's time."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Do not require a timesheet from staff"),": by default, timesheets are mandatory for staff. When this option is checked, timesheet submission will still be allowed but it won't be enforced and clock in reminders will be disabled"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unrestricted"),": each staff can clock in and out by themselves, from their mobile phone, without any restriction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Via QR code only"),": clocking in and out requires the staff to scan a QR code associated with the event"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Via team leads only"),": the staff will be instructed to go see the team lead in person to clock in and out of shifts")),(0,r.kt)("h3",{id:"invoicing"},"Invoicing"),(0,r.kt)("p",null,"If you work with contractors/freelancers, fill-in the invoicing information so they can submit invoices. This information is used on generated invoices."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A *",(0,r.kt)("em",{parentName:"p"},"Billing Address")," ",(0,r.kt)("em",{parentName:"p"},"must")," be provided in your account before any contractor can submit an invoice via Workstaff. ")),(0,r.kt)("p",null,"By default, Workstaff will request invoices for remunerated shifts of contractors. When the ",(0,r.kt)("strong",{parentName:"p"},"Do not require invoices from contractors")," is checked, invoices submission will still be allowed but it won't be enforced."),(0,r.kt)("h2",{id:"users"},"Users"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Users")," section allows you to manage who can access your Workstaff account. You can overview your active and inactive users, add and delete users to your account based on your organization's needs."),(0,r.kt)("h2",{id:"departments"},"Departments"),(0,r.kt)("p",null,"You can split your Workstaff activity into multiple independent data silos to mimic your organization structure. Creating departments allows you to divide your staff and schedules in order to facilitate your operations."))}m.isMDXComponent=!0}}]);