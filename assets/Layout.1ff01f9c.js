var p=Object.defineProperty;var r=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var m=(o,e,a)=>e in o?p(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,l=(o,e)=>{for(var a in e||(e={}))g.call(e,a)&&m(o,a,e[a]);if(r)for(var a of r(e))c.call(e,a)&&m(o,a,e[a]);return o};import{g as d,h as v,m as b,n as f,p as h,j as s,r as t,q as y,s as D,t as L}from"./app.1577efb5.js";import{S as P}from"./SkipLink.4d385b36.js";var C=d({name:"Layout",setup(){const o=L(),e=v(),a=D(),u=b(),i=f(),n=h(()=>e.value.blog.sidebarDisplay||o.value.blog.sidebarDisplay||"mobile");return()=>[s(P),s(t("CommonWrapper"),{},l(l({default:()=>u.value.home?s(t("HomePage")):s(y,()=>s(t("NormalPage"),{key:a.value.path}))},n.value!=="none"?{navScreenBottom:()=>s(t("BloggerInfo"))}:{}),!i.value&&n.value==="always"?{sidebar:()=>s(t("BloggerInfo"))}:{}))]}});export{C as default};
