import{_ as U}from"./D4xSgMCa.js";import{d as S,o as n,c as t,e as i,f as k,b as l,n as D,r as v,g as I,F as h,a as L,h as g,i as A,w,j as T,k as E,v as B,p as F,l as M,_ as j}from"./Dhgs_AmC.js";import{u as O}from"./nyRWTbR-.js";const P={class:"text-xl"},R=S({__name:"AnchorsItem",props:{anchor:{}},setup(c){const u=c;return(m,p)=>(n(),t("div",{class:"dark:text-black",onClick:p[0]||(p[0]=d=>("navigateTo"in m?m.navigateTo:l(D))(`/Nodes/${u.anchor.name}`))},[i("p",P,k(u.anchor.name),1)]))}}),y=c=>(F("data-v-c2bc5d4f"),c=c(),M(),c),q=y(()=>i("hr",{class:"mx-4 pt-1 bg-slate-500"},null,-1)),z={key:1,class:"message text-2xl"},G={key:2,class:"message text-xl"},H={key:3,class:"flexContainer"},J=y(()=>i("br",null,null,-1)),K=y(()=>i("br",null,null,-1)),Q=["value","anchor-name"],W=["value","node-mac"],X=S({__name:"Anchors",props:{lineName:{}},setup(c){const u=T(),{blineApiClient:m,newConfiguration:p}=O(),d=c,r=v(""),_=v(!0),s=v([]),x=v([]),V=new m.NodesApi(p(u.public.baseUrl)),$=new m.AnchorsApi(p(u.public.baseUrl));function N(){s.value=[],r.value="",_.value=!0,$.getAnchors().then(a=>{if(d.lineName){for(const o of a)if(o.name.slice(0,o.name.lastIndexOf("-"))===d.lineName){let f=!1;for(let e=0;e<s.value.length;e++)if(s.value[e].name===o.name){f=!0;break}f||s.value.push(o)}}else console.warn("Anchors: no filter active!"),s.value=a}).catch(a=>{r.value=a}).finally(()=>{_.value=!1})}I(()=>{N()});function b(){x.value=[],r.value="",_.value=!0,V.getNodes().then(a=>{x.value=a}).catch(a=>{r.value=a}).finally(()=>{_.value=!1})}return I(()=>{b()}),(a,o)=>{const C=U,f=R;return n(),t("div",null,[d.lineName?(n(),t(h,{key:0},[L(C,{name:d.lineName},null,8,["name"]),q],64)):g("",!0),l(_)?(n(),t("p",z," Loading ... ")):g("",!0),l(r)?(n(),t("p",G," Error: "+k(l(r)),1)):g("",!0),l(s)?(n(),t("div",H,[(n(!0),t(h,null,A(l(s),e=>(n(),E(f,{key:e.name,anchor:e,class:"flexItem"},null,8,["anchor"]))),128)),J,K,w(i("select",{"onUpdate:modelValue":o[0]||(o[0]=e=>N=e)},[(n(!0),t(h,null,A(l(s),e=>(n(),t("option",{value:e.name,"anchor-name":e.name,key:e.name},k(e.name),9,Q))),128))],512),[[B,N]]),w(i("select",{"onUpdate:modelValue":o[1]||(o[1]=e=>b=e)},[(n(!0),t(h,null,A(l(x),e=>(n(),t("option",{value:e.mac,"node-mac":e.mac,key:e.mac},k(e.mac),9,W))),128))],512),[[B,b]])])):g("",!0)])}}}),ne=j(X,[["__scopeId","data-v-c2bc5d4f"]]);export{ne as _};
