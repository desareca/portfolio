import{S as C}from"../chunks/skills.Bzk7tqyB.js";import{s as G,e as I,t as h,a as s,b as E,c as F,d as J}from"../chunks/disclose-version.D_0R5w7p.js";import{p as K,a as L,g as i,f as A,t as k,d as x,n as $,s as d,c as H,r as O}from"../chunks/utils.6KhQ9vBw.js";import{i as b}from"../chunks/index-client.CzxfyyCv.js";import{e as Q,i as V,d as W}from"../chunks/stores.BFwCtxN5.js";import{s as X,h as Y}from"../chunks/base.BROxklIU.js";import{B as Z}from"../chunks/base-page.SswVv0z8.js";import{E as ee}from"../chunks/empty-result.D0LxmMgu.js";import{F as te,M as ae,E as re}from"../chunks/markdown.BF_A1Vqw.js";import{B as oe}from"../chunks/index.BXwVkrqn.js";import{S as T}from"../chunks/separator.D5MbWO3i.js";import{H as se}from"../chunks/h1.D28PHc5G.js";import{M as ne,A as le}from"../chunks/assets.B_gNePl2.js";import{E as ie}from"../chunks/experience.Dl23WaRJ.js";import{P as me}from"../chunks/projects.BpgsJ5iv.js";import"../chunks/legacy.WUkXPhl2.js";function de({params:f}){if(f.slug)return{item:C.items.find(c=>c.slug===f.slug)}}const De=Object.freeze(Object.defineProperty({__proto__:null,load:de},Symbol.toStringTag,{value:"Module"}));var fe=E("<a><!></a>"),ue=E('<div class="flex flex-row flex-wrap items-center gap-2 px-4 py-4"><!> <!></div>'),ge=E("<!> <!> <!> <!> <!>",1);function Fe(f,a){K(a,!0);const c=G(),p=()=>J(W,"$mode",c);let z=x(()=>{var t,r;return`${((r=(t=a.data)==null?void 0:t.item)==null?void 0:r.name)??"Not Found"} - Skills`}),N=x(()=>{var t,r,e;return(p()=="dark"?(r=(t=a.data)==null?void 0:t.item)==null?void 0:r.logo.dark:(e=a.data.item)==null?void 0:e.logo.light)??le.Unknown.light}),P=x(()=>(()=>{const t=a.data.item;if(!t)return[];const r=[];return me.items.forEach(e=>{e.skills.find(m=>m.slug===t.slug)&&r.push({link:`/projects/${e.slug}`,logo:p()==="dark"?e.logo.dark:e.logo.light,name:e.name})}),ie.items.forEach(e=>{e.skills.find(m=>m.slug===t.slug)&&r.push({link:`/experience/${e.slug}`,logo:p()==="dark"?e.logo.dark:e.logo.light,name:e.name})}),r})());Z(f,{get title(){return i(z)},children:(t,r)=>{var e=I(),m=A(e);b(m,()=>!a.data.item,_=>{ee(_)},_=>{var S=ge(),y=A(S);te(y,{get img(){return i(N)},children:(o,u)=>{se(o,{children:(g,B)=>{$();var n=h();k(()=>F(n,a.data.item.name)),s(g,n)},$$slots:{default:!0}})},$$slots:{default:!0}});var M=d(y,2);T(M,{});var w=d(M,2);b(w,()=>a.data.item.description.trim(),o=>{ae(o,{get content(){return a.data.item.description}})},o=>{re(o)});var j=d(w,2);T(j,{});var R=d(j,2);b(R,()=>i(P).length!==0,o=>{var u=ue(),g=H(u);ne(g,{children:(n,v)=>{$();var l=h("Temas Relacionados");s(n,l)},$$slots:{default:!0}});var B=d(g,2);Q(B,17,()=>i(P),V,(n,v)=>{var l=fe();k(()=>X(l,"href",Y(i(v).link)));var U=H(l);oe(U,{children:(q,ce)=>{$();var D=h();k(()=>F(D,i(v).name)),s(q,D)},$$slots:{default:!0}}),O(l),s(n,l)}),O(u),s(o,u)}),s(_,S)}),s(t,e)},$$slots:{default:!0}}),L()}export{Fe as component,De as universal};
