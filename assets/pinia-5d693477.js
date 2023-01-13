import{i as X}from"./vue-demi-71ba0ef2.js";import{am as H,d as z,al as k,f as Y,z as Z,e as G,$ as A,E as L,av as B,ab as T,g as tt,b as et,n as st,a8 as nt,i as ot}from"./@vue-5e8c9487.js";/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let D;const R=t=>D=t,J=Symbol();function C(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var I;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(I||(I={}));function lt(){const t=H(!0),n=t.run(()=>z({}));let s=[],e=[];const c=k({install(u){R(c),c._a=u,u.provide(J,c),u.config.globalProperties.$pinia=c,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!X?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:n});return c}const N=()=>{};function V(t,n,s,e=N){t.push(n);const c=()=>{const u=t.indexOf(n);u>-1&&(t.splice(u,1),e())};return!s&&tt()&&et(c),c}function g(t,...n){t.slice().forEach(s=>{s(...n)})}function O(t,n){t instanceof Map&&n instanceof Map&&n.forEach((s,e)=>t.set(e,s)),t instanceof Set&&n instanceof Set&&n.forEach(t.add,t);for(const s in n){if(!n.hasOwnProperty(s))continue;const e=n[s],c=t[s];C(c)&&C(e)&&t.hasOwnProperty(s)&&!L(e)&&!B(e)?t[s]=O(c,e):t[s]=e}return t}const ct=Symbol();function rt(t){return!C(t)||!t.hasOwnProperty(ct)}const{assign:d}=Object;function ut(t){return!!(L(t)&&t.effect)}function at(t,n,s,e){const{state:c,actions:u,getters:f}=n,a=s.state.value[t];let m;function h(){a||(s.state.value[t]=c?c():{});const b=nt(s.state.value[t]);return d(b,u,Object.keys(f||{}).reduce((v,y)=>(v[y]=k(ot(()=>{R(s);const p=s._s.get(t);return f[y].call(p,p)})),v),{}))}return m=W(t,h,n,s,e,!0),m.$reset=function(){const v=c?c():{};this.$patch(y=>{d(y,v)})},m}function W(t,n,s={},e,c,u){let f;const a=d({actions:{}},s),m={deep:!0};let h,b,v=k([]),y=k([]),p;const _=e.state.value[t];!u&&!_&&(e.state.value[t]={}),z({});let x;function F(r){let o;h=b=!1,typeof r=="function"?(r(e.state.value[t]),o={type:I.patchFunction,storeId:t,events:p}):(O(e.state.value[t],r),o={type:I.patchObject,payload:r,storeId:t,events:p});const S=x=Symbol();st().then(()=>{x===S&&(h=!0)}),b=!0,g(v,o,e.state.value[t])}const $=N;function q(){f.stop(),v=[],y=[],e._s.delete(t)}function K(r,o){return function(){R(e);const S=Array.from(arguments),P=[],w=[];function Q(i){P.push(i)}function U(i){w.push(i)}g(y,{args:S,name:r,store:l,after:Q,onError:U});let E;try{E=o.apply(this&&this.$id===t?this:l,S)}catch(i){throw g(w,i),i}return E instanceof Promise?E.then(i=>(g(P,i),i)).catch(i=>(g(w,i),Promise.reject(i))):(g(P,E),E)}}const M={_p:e,$id:t,$onAction:V.bind(null,y),$patch:F,$reset:$,$subscribe(r,o={}){const S=V(v,r,o.detached,()=>P()),P=f.run(()=>G(()=>e.state.value[t],w=>{(o.flush==="sync"?b:h)&&r({storeId:t,type:I.direct,events:p},w)},d({},m,o)));return S},$dispose:q},l=A(M);e._s.set(t,l);const j=e._e.run(()=>(f=H(),f.run(()=>n())));for(const r in j){const o=j[r];if(L(o)&&!ut(o)||B(o))u||(_&&rt(o)&&(L(o)?o.value=_[r]:O(o,_[r])),e.state.value[t][r]=o);else if(typeof o=="function"){const S=K(r,o);j[r]=S,a.actions[r]=o}}return d(l,j),d(T(l),j),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:r=>{F(o=>{d(o,r)})}}),e._p.forEach(r=>{d(l,f.run(()=>r({store:l,app:e._a,pinia:e,options:a})))}),_&&u&&s.hydrate&&s.hydrate(l.$state,_),h=!0,b=!0,l}function ht(t,n,s){let e,c;const u=typeof n=="function";typeof t=="string"?(e=t,c=u?s:n):(c=t,e=t.id);function f(a,m){const h=Y();return a=a||h&&Z(J,null),a&&R(a),a=D,a._s.has(e)||(u?W(e,n,c,a):at(e,c,a)),a._s.get(e)}return f.$id=e,f}export{lt as c,ht as d};
