import{_ as t,a as n,b as r,c as e,i as c,s as o,d as a,S as s,f as i,t as f,e as u,g as l,k as h,l as v,m as p,h as m,j as d,n as g,o as $,p as j,r as y,u as D,B as E,C as R,w as P,x as k,y as x,q as V,E as I,F as b,G as w,H as B}from"./client.a59c7226.js";import{B as M}from"./Button.edb4697b.js";import{P as S}from"./ProjectModel.c7931b13.js";function H(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,o=n(t);if(e){var a=n(this).constructor;c=Reflect.construct(o,arguments,a)}else c=o.apply(this,arguments);return r(this,c)}}function C(t){var n,r,e,c,o,a,s,V,I,b,w,B=t[0].name+"",S=t[0].shortDescription+"";return b=new M({props:{value:t[0].linkValue,link:t[0].link}}),{c:function(){n=i("div"),r=i("div"),e=i("h1"),c=f(B),o=u(),a=i("p"),s=f(S),V=u(),I=i("div"),l(b.$$.fragment),this.h()},l:function(t){n=h(t,"DIV",{class:!0});var i=v(n);r=h(i,"DIV",{class:!0});var f=v(r);e=h(f,"H1",{});var u=v(e);c=p(u,B),u.forEach(m),o=d(f),a=h(f,"P",{});var l=v(a);s=p(l,S),l.forEach(m),V=d(f),I=h(f,"DIV",{class:!0});var $=v(I);g(b.$$.fragment,$),$.forEach(m),f.forEach(m),i.forEach(m),this.h()},h:function(){$(I,"class","right svelte-1mxt7es"),$(r,"class","content svelte-1mxt7es"),$(n,"class","container svelte-1mxt7es")},m:function(t,i){j(t,n,i),y(n,r),y(r,e),y(e,c),y(r,o),y(r,a),y(a,s),y(r,V),y(r,I),D(b,I,null),w=!0},p:function(t,n){var r=E(n,1)[0];(!w||1&r)&&B!==(B=t[0].name+"")&&R(c,B),(!w||1&r)&&S!==(S=t[0].shortDescription+"")&&R(s,S);var e={};1&r&&(e.value=t[0].linkValue),1&r&&(e.link=t[0].link),b.$set(e)},i:function(t){w||(P(b.$$.fragment,t),w=!0)},o:function(t){k(b.$$.fragment,t),w=!1},d:function(t){t&&m(n),x(b)}}}function q(t,n,r){var e=n.project;return t.$$set=function(t){"project"in t&&r(0,e=t.project)},[e]}var F=function(n){t(i,s);var r=H(i);function i(t){var n;return e(this,i),n=r.call(this),c(a(n),t,q,C,o,{project:0}),n}return i}();function G(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,o=n(t);if(e){var a=n(this).constructor;c=Reflect.construct(o,arguments,a)}else c=o.apply(this,arguments);return r(this,c)}}function N(t,n,r){var e=t.slice();return e[1]=n[r],e}function O(t){var n,r;return n=new F({props:{project:t[1]}}),{c:function(){l(n.$$.fragment)},l:function(t){g(n.$$.fragment,t)},m:function(t,e){D(n,t,e),r=!0},p:function(t,r){var e={};1&r&&(e.project=t[1]),n.$set(e)},i:function(t){r||(P(n.$$.fragment,t),r=!0)},o:function(t){k(n.$$.fragment,t),r=!1},d:function(t){x(n,t)}}}function T(t){for(var n,r,e,c,o,a,s,l=t[0],g=[],D=0;D<l.length;D+=1)g[D]=O(N(t,l,D));var R=function(t){return k(g[t],1,1,(function(){g[t]=null}))};return{c:function(){n=u(),r=i("section"),e=i("h1"),c=f("My Projects"),o=u(),a=i("div");for(var t=0;t<g.length;t+=1)g[t].c();this.h()},l:function(t){V('[data-svelte="svelte-1r8d5ot"]',document.head).forEach(m),n=d(t),r=h(t,"SECTION",{class:!0});var s=v(r);e=h(s,"H1",{});var i=v(e);c=p(i,"My Projects"),i.forEach(m),o=d(s),a=h(s,"DIV",{class:!0});for(var f=v(a),u=0;u<g.length;u+=1)g[u].l(f);f.forEach(m),s.forEach(m),this.h()},h:function(){document.title="My Projects",$(a,"class","content"),$(r,"class","svelte-cp7j9f")},m:function(t,i){j(t,n,i),j(t,r,i),y(r,e),y(e,c),y(r,o),y(r,a);for(var f=0;f<g.length;f+=1)g[f].m(a,null);s=!0},p:function(t,n){var r=E(n,1)[0];if(1&r){var e;for(l=t[0],e=0;e<l.length;e+=1){var c=N(t,l,e);g[e]?(g[e].p(c,r),P(g[e],1)):(g[e]=O(c),g[e].c(),P(g[e],1),g[e].m(a,null))}for(B(),e=l.length;e<g.length;e+=1)R(e);I()}},i:function(t){if(!s){for(var n=0;n<l.length;n+=1)P(g[n]);s=!0}},o:function(t){g=g.filter(Boolean);for(var n=0;n<g.length;n+=1)k(g[n]);s=!1},d:function(t){t&&m(n),t&&m(r),b(g,t)}}}function _(t,n,r){var e=[];return w((function(){fetch("data/projects.json").then((function(t){return t.json()})).then((function(t){return t.map((function(t){return new S(t.name,t.shortDescription,t.description)}))})).then((function(t){return r(0,e=t)})).catch((function(t){return console.log(t)}))})),[e]}var z=function(n){t(i,s);var r=G(i);function i(t){var n;return e(this,i),n=r.call(this),c(a(n),t,_,T,o,{}),n}return i}();export default z;