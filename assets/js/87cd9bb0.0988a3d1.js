"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1206],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(o),d=r,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return o?n.createElement(h,i(i({ref:t},s),{},{components:o})):n.createElement(h,i({ref:t},s))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2205:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={title:"Clock In and Out",sidebar_position:2},i="Clock In and Out of Shifts",l={unversionedId:"workers/manage-your-time/clockin",id:"workers/manage-your-time/clockin",title:"Clock In and Out",description:"The Workstaff app allows you to clock in and out of your shifts at the tip of your fingers.",source:"@site/docs/workers/manage-your-time/clockin.md",sourceDirName:"workers/manage-your-time",slug:"/workers/manage-your-time/clockin",permalink:"/docs/workers/manage-your-time/clockin",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Clock In and Out",sidebar_position:2},sidebar:"workersSidebar",previous:{title:"Communicate Your Availability",permalink:"/docs/workers/availability"},next:{title:"Report Your Time",permalink:"/docs/workers/manage-your-time/report-your-time"}},u={},c=[{value:"Clock In and Out",id:"clock-in-and-out",level:2},{value:"About Geolocation",id:"about-geolocation",level:2},{value:"Tracking Methods",id:"tracking-methods",level:2},{value:"Punch Without Restrictions",id:"punch-without-restrictions",level:3},{value:"Punch Using a QR Code",id:"punch-using-a-qr-code",level:3},{value:"Punch Via Your Team Lead",id:"punch-via-your-team-lead",level:3}],s={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clock-in-and-out-of-shifts"},"Clock In and Out of Shifts"),(0,r.kt)("p",null,"The Workstaff app allows you to clock in and out of your shifts at the tip of your fingers."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Time Tracking is not available on all Workstaff plans. Depending on your employer's account, Workstaff may not allow\nyou to clock in to all or certain shifts.")),(0,r.kt)("iframe",{width:"640",height:"360",src:"https://www.loom.com/embed/40b56d51d7ad485daa205f73624da030",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}),(0,r.kt)("h2",{id:"clock-in-and-out"},"Clock In and Out"),(0,r.kt)("p",null,"Workstaff will show Clock In and Clock Out buttons for shifts you're scheduled on the current day in a few locations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Today")," page"),(0,r.kt)("li",{parentName:"ul"},"In your agenda, inside the details of a shift"),(0,r.kt)("li",{parentName:"ul"},"Within a small slide in drawer that appears at the bottom of main screen in any tab except ",(0,r.kt)("strong",{parentName:"li"},"Today"))),(0,r.kt)("h2",{id:"about-geolocation"},"About Geolocation"),(0,r.kt)("p",null,"When you first clock in, the mobile app will request your permission to access your location ",(0,r.kt)("em",{parentName:"p"},"while using the app"),"."),(0,r.kt)("p",null,"Workstaff only captures your location at the time you punch in and at the time you punch out. ",(0,r.kt)("strong",{parentName:"p"},"Workstaff will never\ntrack your location in any other occasion, and will never actively track your location.")),(0,r.kt)("p",null,"Moreover, you have full control on whether you attach the location data to the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/workers/manage-your-time/report-your-time"},"time entries you submit")," to your employer."),(0,r.kt)("admonition",{title:"Pro Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Including your location data with your time entries really helps build trust with your employer, and it certifies you were\nphysically on site when you actually punched in and out. Although it is optional,\nwe highly suggest you enable geolocation and include your location info with your time entries.")),(0,r.kt)("h2",{id:"tracking-methods"},"Tracking Methods"),(0,r.kt)("p",null,"Based on your employer's chosen time tracking method, you are able to track your time in the few ways listed below."),(0,r.kt)("h3",{id:"punch-without-restrictions"},"Punch Without Restrictions"),(0,r.kt)("p",null,"You will be able to clock in and out of shifts by yourself upon arriving at the shift location, at the beginning of your shift.\nWhen opening the mobile app at the beginning of your shift, you will be instructed to clock in on the ",(0,r.kt)("strong",{parentName:"p"},"Today")," tab."),(0,r.kt)("h3",{id:"punch-using-a-qr-code"},"Punch Using a QR Code"),(0,r.kt)("p",null,"If your employer has chosen this time tracking method, you will be instructed to scan each event\u2019s QR code to clock in\nand out of shifts."),(0,r.kt)("p",null,"Team leads can present the QR code from their own phone, or QR codes can be printed in advance. Make sure\nyou know how to find the QR code before starting your shift. If unsure, contact your employer."),(0,r.kt)("h3",{id:"punch-via-your-team-lead"},"Punch Via Your Team Lead"),(0,r.kt)("p",null,"In this case, you will be instructed to go see a team lead in person so they can clock in and out for you, from their mobile phone. "),(0,r.kt)("p",null,"If you are a team lead on a project, you can clock your teammates in and out by following these steps: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Today")," tab, tap on ",(0,r.kt)("strong",{parentName:"li"},"Track Time")," "),(0,r.kt)("li",{parentName:"ol"},"At the beginning of the shift, when your teammates come to you, tap on ",(0,r.kt)("strong",{parentName:"li"},"Clock In")," next to their name"),(0,r.kt)("li",{parentName:"ol"},"At the end of their shift, tap on ",(0,r.kt)("strong",{parentName:"li"},"Clock out")," next to their name."),(0,r.kt)("li",{parentName:"ol"},"You can then submit their time entry at this very moment, or wait later.")))}p.isMDXComponent=!0}}]);