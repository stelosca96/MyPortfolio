import{S as t,i as e,s as n,a as o,e as a,t as s,q as c,d as r,b as i,f as l,g as u,h as f,k as d,l as h,m as p,x as m,o as v}from"./client.a5259f44.js";import{P as j}from"./ProjectModel.c7931b13.js";function y(t){let e,n,j,y,x,E,$,g,w,P=t[0].name+"",b=t[0].description+"";return document.title=e=t[0].name,{c(){n=o(),j=a("section"),y=a("div"),x=a("h1"),E=s(P),$=o(),g=a("p"),w=s(b),this.h()},l(t){c('[data-svelte="svelte-ybycci"]',document.head).forEach(r),n=i(t),j=l(t,"SECTION",{class:!0});var e=u(j);y=l(e,"DIV",{class:!0});var o=u(y);x=l(o,"H1",{});var a=u(x);E=f(a,P),a.forEach(r),$=i(o),g=l(o,"P",{});var s=u(g);w=f(s,b),s.forEach(r),o.forEach(r),e.forEach(r),this.h()},h(){d(y,"class","content"),d(j,"class","svelte-tqrm7x")},m(t,e){h(t,n,e),h(t,j,e),p(j,y),p(y,x),p(x,E),p(y,$),p(y,g),p(g,w)},p(t,[n]){1&n&&e!==(e=t[0].name)&&(document.title=e),1&n&&P!==(P=t[0].name+"")&&m(E,P),1&n&&b!==(b=t[0].description+"")&&m(w,b)},i:v,o:v,d(t){t&&r(n),t&&r(j)}}}var x=function(t,e,n,o){return new(n||(n=Promise))((function(a,s){function c(t){try{i(o.next(t))}catch(t){s(t)}}function r(t){try{i(o.throw(t))}catch(t){s(t)}}function i(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,r)}i((o=o.apply(t,e||[])).next())}))};function E(t,e){return x(this,void 0,void 0,(function*(){const{name:e}=t.params,n=yield this.fetch("data/projects.json"),o=yield n.json();console.log(o),console.log(e);return{project:o.filter(t=>t.name===e).map(t=>new j(t.name,t.shortDescription,t.description))[0]}}))}function $(t,e,n){let{project:o}=e;return t.$$set=t=>{"project"in t&&n(0,o=t.project)},t.$$.update=()=>{1&t.$$.dirty&&console.log(o)},[o]}export default class extends t{constructor(t){super(),e(this,t,$,y,n,{project:0})}}export{E as preload};