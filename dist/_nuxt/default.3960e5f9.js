import{a as f,b as g,e as d,o as u,f as p,h as _,w as l,i,j as n,t as m,k as A,l as S,r as b,F as y}from"./entry.ae1671f3.js";const D=o=>Object.fromEntries(Object.entries(o).filter(([,e])=>e!==void 0)),T=(o,e)=>(a,t)=>(g(()=>o({...D(a),...t.attrs},t)),()=>{var s,c;return e?(c=(s=t.slots).default)==null?void 0:c.call(s):null}),h=f({name:"Title",inheritAttrs:!1,setup:T((o,{slots:e})=>{var t,s,c;return{title:((c=(s=(t=e.default)==null?void 0:t.call(e))==null?void 0:s[0])==null?void 0:c.children)||null}})}),v=f({name:"Head",inheritAttrs:!1,setup:(o,e)=>()=>{var a,t;return(t=(a=e.slots).default)==null?void 0:t.call(a)}}),N=""+new URL("dutra-e-amaral-advocacia.bdfdec11.png",import.meta.url).href;const w={props:["SiteName","SiteDesc"]},H={class:"header"},B={class:"banner"},k={class:"header-box"},F=n("img",{class:"site-logo",src:N,alt:"Dutra & Amaral - Advocacia"},null,-1),U={class:"page-title"};function j(o,e,a,t,s,c){const r=h,$=v,x=A;return u(),p("div",null,[_($,null,{default:l(()=>[_(r,null,{default:l(()=>[i("Dutra & Amaral - Advocacia")]),_:1})]),_:1}),n("header",H,[n("div",B,[n("div",k,[F,n("h1",U,m(a.SiteName),1),n("p",null,m(a.SiteDesc),1),_(x,{tel:"5531983619686"})])])])])}const C=d(w,[["render",j]]),E=""+new URL("dutra-e-amaral-advocacia-logo.6694adcb.png",import.meta.url).href;const L={},V=n("footer",{class:"footer"},[n("small",{class:"copy"},[i("Copyright © 2023 "),n("img",{class:"footer-logo",src:E,alt:"Dutra & Amaral - Advocacia"}),i(" Dutra & Amaral - Advocacia")])],-1),O=[V];function P(o,e){return u(),p("div",null,O)}const R=d(L,[["render",P]]);const W={props:["tel"]},q=n("i",{class:"fa fa-whatsapp","aria-hidden":"true"},null,-1);function I(o,e,a,t,s,c){const r=S;return u(),p("div",null,[_(r,{to:`https://api.whatsapp.com/send?phone=${a.tel}`,target:"_blank",class:"whatsapp-button"},{default:l(()=>[q]),_:1},8,["to"])])}const M=d(W,[["render",I]]),z={};function G(o,e){const a=h,t=v,s=C,c=R,r=M;return u(),p(y,null,[_(t,null,{default:l(()=>[_(a,null,{default:l(()=>[i("Dutra & Amaral - Advocacia")]),_:1})]),_:1}),n("div",null,[_(s,{SiteName:"Advocacia Previdenciária",SiteDesc:"Especialistas em requerimentos e ações contra o INSS, aposentadorias, pensões e auxílios."}),b(o.$slots,"default"),_(c),_(r,{tel:"5531983619686"})])],64)}const K=d(z,[["render",G]]);export{K as default};
