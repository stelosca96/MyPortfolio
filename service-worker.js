!function(){"use strict";const e=1601381534053,t="cache"+e,s=["/client/inject_styles.5607aec6.js","/client/Button.dbc08943.js","/client/index.08e3bb35.js","/client/ProjectModel.c7931b13.js","/client/[name].18bde5af.js","/client/about.6f135ff0.js","/client/index.76e47590.js","/client/client.96d68850.js"].concat(["/service-worker-index.html","/data/projects.json","/favicon.png","/global.css","/img/IMGP6768.jpg","/img/IMGP9708.jpg","/logo-192.png","/logo-512.png","/manifest.json","/successkid.jpg"]),n=new Set(s);self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>e.addAll(s)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&n.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then(async e=>{try{const s=await fetch(t.request);return e.put(t.request,s.clone()),s}catch(s){const n=await e.match(t.request);if(n)return n;throw s}}))))})}();
