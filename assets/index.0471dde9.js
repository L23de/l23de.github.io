var P=Object.defineProperty,E=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var k=(n,e,o)=>e in n?P(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,I=(n,e)=>{for(var o in e||(e={}))M.call(e,o)&&k(n,o,e[o]);if(b)for(var o of b(e))j.call(e,o)&&k(n,o,e[o]);return n},S=(n,e)=>E(n,T(e));import{d as p,o as O,r as $,a as l,c as d,b as i,e as r,w as u,Q as h,f as D,T as V,g as _,h as z,i as m,p as B,j as J,F as g,k as f,t as w,l as Q,m as q,u as F,n as H,q as R,s as N,v as U,x as W,y as G,z as Y,A as K,B as X,C as Z}from"./vendor.287a2904.js";const ee=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}};ee();const te={class:"page-container"},ne={class:"nav"},oe=m("Home"),ae=m("About"),se=m("Experience"),re=m("Interests"),ie={class:"footer"},le={key:0,class:"contact center-flex"},ce=p({computed:{splashPage(){return this.$route.path=="/"}}}),de=p(S(I({},ce),{setup(n){return O(()=>{const e=document.querySelector(".nav");let o=window.scrollY;window.addEventListener("scroll",()=>{o>30&&o<window.scrollY?e.classList.add("nav--hidden"):e.classList.remove("nav--hidden"),o=window.scrollY})}),(e,o)=>{const a=$("router-link"),t=$("router-view");return l(),d("div",te,[i("nav",ne,[r(a,{to:"/"},{default:u(()=>[oe]),_:1}),r(a,{to:"/me"},{default:u(()=>[ae]),_:1}),r(a,{to:"/work"},{default:u(()=>[se]),_:1}),r(a,{to:"/interests"},{default:u(()=>[re]),_:1})]),r(t,null,{default:u(({Component:s})=>[r(V,{name:"fade",mode:"out-in"},{default:u(()=>[(l(),_(z(s)))]),_:2},1024)]),_:1}),i("footer",ie,[e.splashPage?D("",!0):(l(),d("div",le,[r(h,{round:"",icon:"fab fa-linkedin-in",type:"a",href:"https://www.linkedin.com/in/lesterhuang/",target:"_blank",size:"0.8rem",unelevated:""}),r(h,{round:"",icon:"far fa-envelope",type:"a",href:"mailto:huangl302d@gmail.com",target:"_blank",size:"0.8rem",unelevated:""}),r(h,{round:"",icon:"fab fa-github",type:"a",href:"https://github.com/L23de",target:"_blank",size:"0.8rem",unelevated:""}),r(h,{round:"",icon:"fab fa-instagram",type:"a",href:"https://www.instagram.com/lester.302d/",target:"_blank",size:"0.8rem",unelevated:""})]))])])}}})),ue="modulepreload",A={},he="/",y=function(e,o){return!o||o.length===0?e():Promise.all(o.map(a=>{if(a=`${he}${a}`,a in A)return;A[a]=!0;const t=a.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${s}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":ue,t||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),t)return new Promise((x,L)=>{c.addEventListener("load",x),c.addEventListener("error",L)})})).then(()=>e())};var pe=(n,e)=>{const o=n.__vccOpts||n;for(const[a,t]of e)o[a]=t;return o};const me=n=>(B("data-v-925d705a"),n=n(),J(),n),ge={class:"content-wrap simple-page"},fe=me(()=>i("div",{class:"p-intro"},[i("div",{class:"wave emoji"},"\u{1F44B}"),i("h1",null,"I'm Lester Huang"),i("h3",null,"A lifelong learner \u{1F4D6} with a desire for adventure \u{1F5FA}\uFE0F")],-1)),_e={class:"contact last-element"},we=p({setup(n){return(e,o)=>(l(),d("div",ge,[fe,i("div",_e,[r(h,{round:"",icon:"fab fa-linkedin-in",type:"a",href:"https://www.linkedin.com/in/lesterhuang/",target:"_blank",size:"1.1rem",unelevated:""}),r(h,{round:"",icon:"far fa-envelope",type:"a",href:"mailto:huangl302d@gmail.com",target:"_blank",size:"1.1rem",unelevated:""}),r(h,{round:"",icon:"fab fa-github",type:"a",href:"https://github.com/L23de",target:"_blank",size:"1.1rem",unelevated:""}),r(h,{round:"",icon:"fab fa-instagram",type:"a",href:"https://www.instagram.com/lester.302d/",target:"_blank",size:"1.1rem",unelevated:""})])]))}});var ye=pe(we,[["__scopeId","data-v-925d705a"]]);const ve="JHU Engineering Innovation",be="https://ei.jhu.edu/",ke="/src/content/images/jhu.png",Ie=[{title:"Summer Program Participant",dates:"July 2018",desc:['My first true break into STEM. I had the opportunity to participate in this selective summer program where it surveyed the various fields of engineering (not just CS). I always knew I wanted to make a career in the engineering space. But I was able to refine that done to the computing sciences/engineering after learning about boolean and logical gates. It was the very logical and straight-forward, there were no "maybes".',"However, I'm more impressed by the engineers who have been able to abstract such concepts away and create tools that billions of people use all over the world daily. Perhaps, I will be able to join their ranks in the future."],skills:[]}];var Se={company:ve,website:be,logo_src:ke,positions:Ie};const $e="Lehigh University",Ae="https://www1.lehigh.edu/",Ce="/src/content/images/lehigh.png",xe=[{title:"Junior Systems Administrator",dates:"January 2022 - Present",desc:["I am excited to be working under George Todd as a JSA under Lehigh's CSE department. I hope to learn about the intricacies of networking and more niche topics that may not be covered in typical CS coursework through the management of Lehigh's network of VMs powered by Sun Microsystem machines and various side projects"],skills:[]},{title:"CS Teaching Assistant",dates:"September-December 2021",desc:["Passing a CS class is one thing, but being able to teach someone else and guide them through a course is another. I took the opportunity to serve as a TA/grader for CSE 109 to do just that.",`The CS course structure at Lehigh can be confusing for students, languages and concepts don't always coincide or are not always taught in "chronological" order, so being able to refresh myself on such topics and mentor my fellow colleagues were two great pluses.`],skills:["C Programming Language"]},{title:"B.S Computer Science | Data Science Minor",dates:"September 2019 - Expected Grad. December 2022",desc:["My alma mater. Here, I was able to expand my perspectives on the world and grow in all such ways",'Initially coming in as a computer engineer (Thanks to the JHU Engineering Innovation program), I switched my major to strictly computer science after my first programming class, CSE 002. There, I wrote my first "Hello World" program in Java and here we are...'],skills:["Algorithms","Various Programming Concepts"]}];var Le={company:$e,website:Ae,logo_src:Ce,positions:xe};const Pe="Millennium Management",Ee="https://www.mlp.com/",Te="/src/content/images/mm.png",Me=[{title:"Incoming Quality Assurance Analyst Intern",dates:"June - August 2022",desc:["QA will be a new frontier for me, another way to seek discomfort and learn many new things! As a QA Analyst, I expect to pick up many new things about good software development practices. The world of developers and testers are converging, with the line between the two blurring, with many new projects requiring a developer to create tests or a tester to fix a bug. So I'm very glad to be able to step into this opportunity as my second professional internship!","Along with learning new software development practices, I expect to be thrown into a large, existing codebase, where I will have to figure out the general flow and integrate new changes. This will also be a first. Continuous Integration and Delivery (CI/CD) and Automation Testing (and their frameworks) will also be new concepts I expect to pick up along the way.","Millennium, one of the world's leading alternative investment management firms,  will also be a great way for me to enter the fintech space, where I believe great innovation and disruption is ripe."],skills:["Java","Maven","CI/CD","SQL"]}];var je={company:Pe,website:Ee,logo_src:Te,positions:Me};const Oe="Optum",De="https://www.optum.com/",Ve="/src/content/images/optum.png",ze=[{title:"Software Engineer Intern",dates:"June - August 2021",desc:["As my first professional software engineering internship, I learned a lot about the general software development lifecycle, from initial planning and researching phases all the way to testing and deployment.","I had a blast working on a brand new internal chatbot for Optum's cloud onboarding team, with the overall goal of reducing the onboarding process from 30+ days down to one hour. This was something that would significantly impact Optum's infrastructure, with the ability to move on-site services to the cloud quickly, which in turn, would affect UnitedHealth Group's (Optum's parent company) services.","While there wasn't a large existing codebase we had to integrate into, we were able to leverage internal databases and cross-department tools to increase the utility of our chatbot. This meant having meetings with other departments, collecting configuration details, and ensuring they were in the loop with our development cycle. Contrary to what I thought going in, most of the challenge came from research and planning, rather than actual programming.","I am very fortunate and thankful that I was able to wear various hats and work on something impactful as my first foray into the world of software engineering"],skills:["SDLC","Python","REST APIs","GraphQL","Azure"]}];var Be={company:Oe,website:De,logo_src:Ve,positions:ze};const C=[je,Be,Le,Se];const Je=["id"],Qe=["href"],qe=["src","alt"],Fe=["id"],He={class:"pos-title"},Re={class:"pos-date"},Ne={id:"pos-skills"},Ue={id:"pos-desc"},We=p({props:{company:{type:String,required:!0},website:{type:String,required:!1},logo_src:{type:String,required:!0},positions:{type:Object,required:!0}},setup(n){return(e,o)=>(l(),d("div",{id:n.company,class:"work-content"},[i("a",{href:n.website,target:"_blank"},[i("img",{src:n.logo_src,class:"banner-img",alt:n.company.charAt(0).toUpperCase()+n.company.slice(1)+"'s Banner"},null,8,qe)],8,Qe),(l(!0),d(g,null,f(n.positions,(a,t)=>(l(),d("div",{id:n.company+"-pos-"+t,class:"pos-info"},[i("h3",He,w(a.title),1),i("p",Re,w(a.dates),1),i("div",Ne,[(l(!0),d(g,null,f(a.skills,s=>(l(),_(Q,{label:s,ripple:!1,outline:"",rounded:""},null,8,["label"]))),256))]),i("div",Ue,[(l(!0),d(g,null,f(a.desc,s=>(l(),d("p",null,w(s),1))),256))])],8,Fe))),256))],8,Je))}});const Ge={id:"work",class:"content-wrap"},Ye={id:"work-header"},Ke=i("h2",{class:"heading"},"My SWE Journey \u{1F468}\u200D\u{1F4BB}",-1),Xe=i("div",null,null,-1),Ze={id:"work-body"},et=p({setup(n){const e=q(C[0].company);return(o,a)=>(l(),d("div",Ge,[i("div",Ye,[Ke,Xe,r(h,{id:"pdf-resume",outline:"","no-caps":"",icon:"fas fa-file-pdf",label:"Grab My Resume",size:"lg",to:"/resume.pdf",target:"_blank",padding:"sm"})]),i("div",Ze,[r(H,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=t=>e.value=t),swipeable:"",animated:"",padding:"",navigation:"",height:"80vh","control-color":"blue-grey-9","navigation-icon":"fas fa-circle",class:"transparent text-black"},{default:u(()=>[(l(!0),d(g,null,f(F(C),t=>(l(),_(W,{name:t.company},{default:u(()=>[r(R,{class:"fit"},{default:u(()=>[r(We,N(U(t)),null,16)]),_:2},1024)]),_:2},1032,["name"]))),256))]),_:1},8,["modelValue"])])]))}}),tt=[{path:"/",component:ye},{path:"/me",component:()=>y(()=>import("./AboutMe.76db82eb.js"),["assets/AboutMe.76db82eb.js","assets/AboutMe.fc21e85b.css","assets/vendor.287a2904.js"])},{path:"/work",component:et},{path:"/interests",component:()=>y(()=>import("./InterestsPage.11beb171.js"),["assets/InterestsPage.11beb171.js","assets/vendor.287a2904.js"])},{path:"/resume",redirect:n=>(window.location.replace("/resume.pdf"),"")},{path:"/:pathMatch(.*)*",component:()=>y(()=>import("./404Page.c4ea77f6.js"),["assets/404Page.c4ea77f6.js","assets/vendor.287a2904.js"])}],nt=G({history:Y(),routes:tt}),v=K(de);v.use(X,{plugins:{},iconSet:Z});v.use(nt);v.mount("#app");export{pe as _};
