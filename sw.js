if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),u={module:{uri:t},exports:l,require:o};s[t]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/BalanceModule-97484004.js",revision:null},{url:"assets/index-d7fcf413.js",revision:null},{url:"assets/StepperModule-797a8b0f.js",revision:null},{url:"assets/styles-2aaf540f.js",revision:null},{url:"index.html",revision:"80d9cfb60c351428db94be6231ec18ef"},{url:"registerSW.js",revision:"4201e3074a88cba7e196b8930dcc2ae2"},{url:"apple-touch-icon.png",revision:"907da97fd8490541441952beb61467af"},{url:"manifest.webmanifest",revision:"dc9a7802b4f8fa44e976fc507d35c25a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));