import{o as l,c as i,a as d,r as p,b as s,u,Q as m,d as h,p as g,e as y,F as x,f as b,g as V,q as $}from"./vendor.caa64a14.js";const I=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};I();const L={setup(o){return(n,a)=>null}};var _=(o,n)=>{const a=o.__vccOpts||o;for(const[c,e]of n)a[c]=e;return a};const S={},k={id:"splash"},P=d("h1",null,"\u{1F44B} I'm Lester Huang",-1),N=[P];function w(o,n){return l(),i("div",k,N)}var E=_(S,[["render",w]]);const O={},B={id:"experiences"};function Q(o,n){return l(),i("div",B," Experiences ")}var q=_(O,[["render",Q]]);const A={},F={id:"hobbies"};function H(o,n){return l(),i("div",F," Hobbies ")}var U=_(A,[["render",H]]);const f=o=>(g("data-v-1a0c3800"),o=o(),y(),o),C={id:"contact"},j=f(()=>d("h2",null,"Let's Talk",-1)),D=f(()=>d("div",{id:"contact-platforms"}," LinkedIn Instagram Discord ",-1)),K={id:"contact-form"},M={setup(o){const n=p(""),a=p(""),c=p("");return(e,t)=>(l(),i("div",C,[j,D,d("div",K,[s(u(m),{name:"name",placeholder:"Name",outlined:"",modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=r=>n.value=r)},null,8,["modelValue"]),s(u(m),{name:"email",placeholder:"Email",type:"email",outlined:"",modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=r=>a.value=r)},null,8,["modelValue"]),s(u(m),{name:"msg",placeholder:"What would you like me to know?",type:"textarea",outlined:"",modelValue:c.value,"onUpdate:modelValue":t[2]||(t[2]=r=>c.value=r)},null,8,["modelValue"]),s(u(h),{name:"contact-submit","no-caps":"",label:"Send"})])]))}};var T=_(M,[["__scopeId","data-v-1a0c3800"]]);const W={setup(o){return(n,a)=>(l(),i(x,null,[s(L),s(E),s(q),s(U),s(T)],64))}},v=b(W);v.use(V,{plugins:{},iconSet:$});v.mount("#app");
