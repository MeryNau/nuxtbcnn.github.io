import{_ as ne,a as ae,b as oe}from"./CZK_Uoeq.js";import{_ as se}from"./Bn3SZAya.js";import{u as le}from"./nyRWTbR-.js";import{d as ce,r as o,G as g,g as T,o as i,c as h,e as t,w as j,v as ue,f as k,F as re,i as ie,H as de,k as J,h as V,a as x,m as S,q as O,j as he,t as l,p as ve,l as _e,_ as fe}from"./Dhgs_AmC.js";const u=C=>(ve("data-v-fa92e24a"),C=C(),_e(),C),me={class:"container max-auto"},pe={class:"flex-auto items-center justify-center min-h-screen"},ge={class:"border-2 shadow bg-white text-black rounded p-16 sm:p-11 max-w-md"},xe=u(()=>t("h1",{class:"text-2xl font-bold mb-2 my-4"},"AnchorConnect!",-1)),be={class:"space-y-2"},ye={class:"max-w-sm container mx-auto space-x-2"},Ae=u(()=>t("label",{for:"Anchorname",class:"float-left text-gray-800 text-sm"},"Anchor Name",-1)),Ce={disabled:"",selected:"",value:""},we=["value"],ke={class:"max-w-sm container mx-auto space-x-2"},Se=u(()=>t("label",{for:"nodeMac",class:"float-left text-gray-800 text-sm"},"Node Mac",-1)),Ne={class:"relative w-full"},De=["valid1"],Ue={class:"text-red-600 text-xs relative font-bold"},Ve={key:0,class:"error-icon pt-3"},He=u(()=>t("i",{class:"i-heroicons-exclamation-triangle-20-solid"},null,-1)),Me=[He],qe={key:1,class:"success-icon pt-5"},Ee=u(()=>t("i",{class:"i-heroicons-check-circle-20-solid"},null,-1)),Fe=[Ee],Ie={class:"max-w-sm container mx-auto space-x-2"},Re=u(()=>t("label",{for:"Anchorname",class:"float-left text-gray-800 text-sm"},"Randame Mac",-1)),Be=["value"],We=u(()=>t("option",{value:""},"Select Randame Mac...",-1)),Te=u(()=>t("option",{value:"T"},"true",-1)),je=u(()=>t("option",{value:"F"},"false",-1)),Je=[We,Te,je],Oe={class:"space-x-2"},ze={key:0,class:"flex flex-wrap text-center"},Ge=u(()=>t("h2",{class:"text-xl p-2 text-green-500"},"Connection successful!",-1)),Le=[Ge],Ze={key:1},Pe=u(()=>t("h2",{class:"text-xl sm:text-xl p-2 text-center text-red-500"},"Disconnected",-1)),$e=[Pe],Ke=u(()=>t("div",null,[t("br"),t("br")],-1)),Qe={class:"space-x-2"},Xe={class:"align-middle md:align-top capitalize text-black"},Ye={class:"flex-auto items-left justify-center container ms-auto"},et=u(()=>t("h1",{class:"text-2xl font-bold mb-2"},"API Access",-1)),tt={class:"w-100 h-12 rounded dark:bg-neutral-700"},nt={key:0,class:"mb-1 text-base text-neutral-700 dark:text-neutral-200"},at={key:1,class:"font-mono text-xs text-red-600 mb-1 font-bold leading-tight"},ot=ce({__name:"AnchorConnect",props:{name:{}},setup(C){const{blineApiClient:q,newConfiguration:E,getApiErrorString:m,printApiErrorDetails:p}=le(),F=he(),z=C,v=new q.AnchorsApi(E(F.public.baseUrl)),G=new q.NodesApi(E(F.public.baseUrl)),N=o(!0),D=o(""),b=o([]),H=o([]),s=o("");console.log("props:"+z.name+b),o(!0),o(!0);const _=o(""),L=o(),Z=o("hex"),U=o(13),w=o("01"),P=o(),y=o(),M=o(!1),A=o({name:"",description:"",url:"",mac:"",location:"",angle:0,fixed:!1}),d=o({isScanning:!1,isConnected:!1}),a=o(!1),c=o(null);g(async()=>{d.value.isConnected=A.value.connected===!0,d.value.isScanning=A.value.scanning===!0}),g(async()=>{console.log("Changed anchorInitialState: "+JSON.stringify(A.value))}),g(async()=>{console.log("Changed anchorCurrentState: "+JSON.stringify(d.value))}),g(async()=>{console.log("Changed nodeData: "+JSON.stringify(H.value))}),g(async()=>{P.value=s.value?await $(s.value)?"":"Anchorname muss Buchstaben und Zahlen enthalten":"Anchorname ist erforderlich"});async function $(e){return/[a-zA-Z]/.test(e)&&/[0-9]/.test(e)}g(async()=>{_.value?/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(_.value)?y.value="":y.value="Invalid MAC Address Ex (04:ee:03:19:41:30)":y.value="MAC Address is required"}),g(async()=>{d.value.isConnected?M.value=!0:M.value=!1});function K(){if(a.value){alert(`anchorReadHandle
Unable to start new request. Wait for the current to complete before starting a new one.`);return}a.value=!0,c.value=null,v.getAnchorHandle({name:l(s),mac:l(_),handle:l(U)}).then(e=>{w.value=e,a.value=!1}).catch(e=>{p("getAnchorHandle",e),m(e).then(n=>{c.value=n,a.value=!1})})}function Q(){if(a.value){alert(`anchorWriteHandle
Unable to start new request. Wait for the current to complete before starting a new one.`);return}a.value=!0,c.value=null,v.putAnchorHandle({name:l(s),mac:l(_),handle:l(U),body:l(w),response:!1},{headers:{"Content-Type":l(Z)}}).then(e=>{a.value=!1}).catch(e=>{p("putAnchorHandle",e),m(e).then(n=>{c.value=n,a.value=!1})})}function I(){v.putAnchorConnect({name:l(s),mac:l(_),random:!0}).then(()=>{d.value.isConnected=!0,a.value=!1}).catch(e=>{p("putAnchorConnect A",e),e.name=="ResponseError"&&e.response.status==400?(d.value.isConnected=!0,a.value=!1):m(e).then(n=>{c.value=n,a.value=!1})})}function X(){if(a.value){alert(`uiAnchorConnect
Unable to start new request. Wait for the current to complete before starting a new one.`);return}a.value=!0,c.value=null,console.log("---------"),console.log(s.value),console.log(l(s)),console.log(s),console.log("++++++++++"),v.getAnchor({name:l(s)}).then(e=>{A.value=e,A.value.scanning===!1?(I(),console.log("anchorname1+3"+s)):v.putAnchorScan({name:l(s),on:!1}).then(n=>{I(),console.log("anchorname1+1"+s)}).catch(n=>{p("putAnchorScan",n),m(n).then(f=>{c.value=f,a.value=!1})})}).catch(e=>{p("getAnchor",e),m(e).then(n=>{c.value=n,a.value=!1})}),console.log("anchorname1"+s)}function Y(){if(a.value){alert(`uiAnchorDisconnect
Unable to start new request. Wait for the current to complete before starting a new one.`);return}a.value=!0,c.value=null,v.putAnchorDisconnect({name:l(s),mac:l(_)}).then(e=>{d.value.isConnected=!1,A.value.scanning===!0?v.putAnchorScan({name:l(s),on:!0}).then(n=>{a.value=!1}).catch(n=>{p("putAnchorScan",n),m(n).then(f=>{c.value=f,a.value=!1})}):a.value=!1}).catch(e=>{p("putAnchorDisconnect",e),e.name=="ResponseError"&&e.response.status==400?(d.value.isConnected=!1,a.value=!1):m(e).then(n=>{c.value=n,a.value=!1})})}function R(){b.value=[],D.value="",N.value=!0,v.getAnchors().then(e=>{b.value=e,console.log("anchoranchor::"+b)}).catch(e=>{D.value=e}).finally(()=>{N.value=!1})}T(()=>{R()});function ee(){H.value=[],D.value="",N.value=!0,G.getNodes().then(e=>{H.value=e}).catch(e=>{D.value=e}).finally(()=>{N.value=!1})}return T(()=>{ee()}),(e,n)=>{const f=ne,B=ae,W=oe,te=se;return i(),h("div",me,[t("div",pe,[t("div",ge,[xe,t("div",be,[t("form",ye,[Ae,j(t("select",{"onUpdate:modelValue":n[0]||(n[0]=r=>s.value=r),onChange:R,required:"",class:"ps-3 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded focus:ring-blue-500 focus:border-blue-500 w-full p-1.5"},[t("option",Ce,k(b.value.length>0?"Select Anchor.....":"No Anchors Available"),1),(i(!0),h(re,null,ie(b.value,r=>(i(),h("option",{value:r.name,key:r.name},k(r.name),9,we))),128))],544),[[ue,s.value]])]),t("form",ke,[Se,t("div",Ne,[j(t("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=r=>_.value=r),class:"bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full ps-4 p-1.5",placeholder:"Enter NodeMac....",valid1:y.value},null,8,De),[[de,_.value]]),t("p",Ue,k(y.value),1),y.value?(i(),h("span",Ve,Me)):(i(),h("span",qe,Fe))])]),t("form",Ie,[Re,t("select",{value:L.value,required:"",class:"ps-3 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded focus:ring-blue-500 focus:border-blue-500 w-full p-1.5"},Je,8,Be)]),t("div",Oe,[d.value.isConnected?V("",!0):(i(),J(f,{key:0,class:"",type:"submit",label:"Connect..... ",onClick:X})),x(f,{type:"submit",label:"Disconnect",style:{"background-color":"red",color:"white"},onClick:Y})]),d.value.isConnected?(i(),h("div",ze,Le)):(i(),h("div",Ze,$e)),Ke,M.value?(i(),J(te,{key:2,ref:"form",class:"space-y-2"},{default:S(()=>[x(W,{label:"Handle",name:"handle"},{default:S(()=>[x(B,{modelValue:U.value,"onUpdate:modelValue":n[2]||(n[2]=r=>U.value=r),label:"Feld 1",class:""},null,8,["modelValue"])]),_:1}),x(W,{label:"Data",name:"data"},{default:S(()=>[x(B,{type:"text",modelValue:w.value,"onUpdate:modelValue":n[3]||(n[3]=r=>w.value=r),label:"Feld 2"},null,8,["modelValue"])]),_:1}),t("div",Qe,[x(f,{type:"submit",onClick:K,nativeType:"submit"},{default:S(()=>[O("ReadHandle")]),_:1}),x(f,{type:"text",onClick:Q},{default:S(()=>[O("WriteHandle")]),_:1})]),t("textarea",Xe," "+k(w.value),1)]),_:1},512)):V("",!0),t("div",Ye,[et,t("div",tt,[a.value?(i(),h("p",nt," Loading ... ")):V("",!0),c.value?(i(),h("p",at," Error: "+k(c.value),1)):V("",!0)])])])])])])}}}),rt=fe(ot,[["__scopeId","data-v-fa92e24a"]]);export{rt as _};
