var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{f as o,E as n}from"./fakeData.f9338e91.js";import{r as s,R as d,Y as c}from"./vendor.18683b1f.js";import"./UploadIcon.6b66aac2.js";import"./event3.1c3d1ade.js";const p=()=>{const[e,p]=s.exports.useState(""),[m,g]=s.exports.useState(o);return s.exports.useEffect((()=>{const t=o.filter((t=>{const a=new RegExp(`${e}`,"g");return null==t?void 0:t.name.match(a)}));return console.log(t),g(t),()=>{}}),[e]),d.createElement("div",{className:"container px-2 pt-8 mx-auto space-y-14"},d.createElement("form",{className:"space-y-14"},d.createElement("div",{className:"flex space-x-4 "},d.createElement("input",{className:"w-auto min-w-0 text-2xl font-bold placeholder-gray-400 bg-transparent border-b-2 border-none lg:text-3xl xl:text-4xl form-border-b dark:bg-transparent",type:"text",name:"",value:e,placeholder:"Search anything",onChange:e=>p(e.target.value)}),d.createElement("button",{type:"submit",className:"px-8 py-4 text-base font-bold text-white bg-blue-500 shadow-xl rounded-xl w-fit"},"Search")),d.createElement("div",{className:"flex flex-wrap gap-x-3 gap-y-3"},d.createElement("select",{name:"",placeholder:"Weekdays",className:"flex-auto py-3 font-semibold bg-gray-200 border-none rounded-md lg:flex-none dark:bg-gray-800 pr-13 pl-7 dark:text-gray-50"},d.createElement("option",{value:"",disabled:!0,selected:!0},"Weekdays"),d.createElement("option",{value:"1"},"Monday")),d.createElement("select",{name:"",placeholder:"Event Type",className:"flex-auto py-3 font-semibold bg-gray-200 border-none rounded-md lg:flex-none dark:bg-gray-800 pr-13 pl-7 dark:text-gray-50"},d.createElement("option",{value:"",disabled:!0,selected:!0},"Event Type")),d.createElement("select",{name:"",placeholder:"Event Type",className:"flex-auto py-3 font-semibold bg-gray-200 border-none rounded-md lg:flex-none dark:bg-gray-800 pr-13 pl-7 dark:text-gray-50"},d.createElement("option",{value:"",disabled:!0,selected:!0},"Any Category")))),d.createElement("div",{className:"grid grid-flow-row grid-cols-1 event-list md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:gap-x-16 lg:gap-y-10"},m.map(((e,o)=>d.createElement(c.div,{layout:!0,key:e.id,transition:{type:"spring",damping:25,stiffness:100}},d.createElement(n,((e,o)=>{for(var n in o||(o={}))a.call(o,n)&&l(e,n,o[n]);if(t)for(var n of t(o))r.call(o,n)&&l(e,n,o[n]);return e})({},e)))))),d.createElement("div",{className:"flex items-center justify-center load-more"},d.createElement("div",{className:"px-6 py-4 text-lg font-bold text-blue-600 bg-gray-200 load-more__btn rounded-xl"},"Load More Event")))};export{p as default};
