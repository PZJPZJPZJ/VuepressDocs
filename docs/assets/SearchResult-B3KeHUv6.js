import{u as $,e as te,f as le,g as j,h as se,P as ie,t as ae,i as ue,j as P,k as C,l as re,w as _,m as l,n as ne,R as U,p as oe,q as de,v as ce,C as he,x as me,y as ve,z as ge,A as pe,B as ye,D as fe,E as Re,F as O,G as F,H as He,I as D,J as Se}from"./app-D2874BzL.js";const ke=["/","/guide/Alist.html","/guide/Android%20Debug%20Bridge.html","/guide/Aria2.html","/guide/AS%20SSD%20Benchmark.html","/guide/BalenaEtcher.html","/guide/Bandizip.html","/guide/BeatSaber.html","/guide/Bluetooth%20Peripherals.html","/guide/Bootice.html","/guide/Bootmgr.html","/guide/Chrome.html","/guide/Clash.html","/guide/ComfyUI.html","/guide/ContextMenuManager.html","/guide/DiskGenius.html","/guide/Dism.html","/guide/DmitriRender.html","/guide/Docker.html","/guide/Duplicati.html","/guide/ESXi.html","/guide/Everything.html","/guide/Git.html","/guide/HomeAssistant.html","/guide/Immich.html","/guide/JaNetfilter.html","/guide/JetBrains.html","/guide/John%20the%20Ripper.html","/guide/Linux.html","/guide/Lucky.html","/guide/Magisk.html","/guide/Microsoft%20Activation%20Scripts.html","/guide/Mihomo.html","/guide/Minecraft.html","/guide/MySQL.html","/guide/NatTypeTester.html","/guide/NextTrace.html","/guide/OpenCore.html","/guide/OpenEUICC.html","/guide/OpenMediaVault.html","/guide/OpenWrt.html","/guide/Parsec%20Virtual%20Display.html","/guide/PSP%20Infinity.html","/guide/qBittorrent.html","/guide/Redpill%20Recovery.html","/guide/RustScan.html","/guide/SoVITS.html","/guide/Stable%20Diffusion.html","/guide/Sunshine.html","/guide/TVBox.html","/guide/Ultimate%20Vocal%20Remover.html","/guide/Unity.html","/guide/Unlock%20Music.html","/guide/Unreal%20Engine.html","/guide/VuePress.html","/guide/Windows.html","/guide/WordPress.html","/guide/XMind.html","/guide/Xray%20UI.html","/guide/Yuzu.html","/404.html"],xe="SEARCH_PRO_QUERY_HISTORY",y=$(xe,[]),Ce=()=>{const{queryHistoryCount:s}=D,i=s>0;return{enabled:i,queryHistory:y,addQueryHistory:a=>{i&&(y.value=Array.from(new Set([a,...y.value.slice(0,s-1)])))},removeQueryHistory:a=>{y.value=[...y.value.slice(0,a),...y.value.slice(a+1)]}}},M=s=>ke[s.id]+("anchor"in s?`#${s.anchor}`:""),De="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:V}=D,f=$(De,[]),we=()=>{const s=V>0;return{enabled:s,resultHistory:f,addResultHistory:i=>{if(s){const a={link:M(i),display:i.display};"header"in i&&(a.header=i.header),f.value=[a,...f.value.slice(0,V-1)]}},removeResultHistory:i=>{f.value=[...f.value.slice(0,i),...f.value.slice(i+1)]}}},Qe=s=>{const i=he(),a=j(),w=me(),r=P(0),S=C(()=>r.value>0),v=ve([]);return ge(()=>{const{search:g,terminate:Q}=pe(),R=He(d=>{const H=d.join(" "),{searchFilter:q=m=>m,splitWord:A,suggestionsFilter:b,...p}=i.value;H?(r.value+=1,g(d.join(" "),a.value,p).then(m=>q(m,H,a.value,w.value)).then(m=>{r.value-=1,v.value=m}).catch(m=>{console.warn(m),r.value-=1,r.value||(v.value=[])})):v.value=[]},D.searchDelay-D.suggestDelay);_([s,a],([d])=>R(d),{immediate:!0}),ye(()=>{Q()})}),{isSearching:S,results:v}};var Ae=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:i}){const a=le(),w=j(),r=se(ie),{enabled:S,addQueryHistory:v,queryHistory:g,removeQueryHistory:Q}=Ce(),{enabled:R,resultHistory:d,addResultHistory:H,removeResultHistory:q}=we(),A=S||R,b=ae(s,"queries"),{results:p,isSearching:m}=Qe(b),u=ue({isQuery:!0,index:0}),c=P(0),h=P(0),I=C(()=>A&&(g.value.length>0||d.value.length>0)),B=C(()=>p.value.length>0),E=C(()=>p.value[c.value]||null),J=()=>{const{isQuery:e,index:t}=u;t===0?(u.isQuery=!e,u.index=e?d.value.length-1:g.value.length-1):u.index=t-1},Y=()=>{const{isQuery:e,index:t}=u;t===(e?g.value.length-1:d.value.length-1)?(u.isQuery=!e,u.index=0):u.index=t+1},z=()=>{c.value=c.value>0?c.value-1:p.value.length-1,h.value=E.value.contents.length-1},G=()=>{c.value=c.value<p.value.length-1?c.value+1:0,h.value=0},N=()=>{h.value<E.value.contents.length-1?h.value+=1:G()},W=()=>{h.value>0?h.value-=1:z()},L=e=>e.map(t=>Se(t)?t:l(t[0],t[1])),X=e=>{if(e.type==="customField"){const t=fe[e.index]||"$content",[n,x=""]=Re(t)?t[w.value].split("$content"):t.split("$content");return e.display.map(o=>l("div",L([n,...o,x])))}return e.display.map(t=>l("div",L(t)))},k=()=>{c.value=0,h.value=0,i("updateQuery",""),i("close")},K=()=>S?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},r.value.queryHistory),g.value.map((e,t)=>l("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===t}],onClick:()=>{i("updateQuery",e)}},[l(O,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},e),l("button",{class:"search-pro-remove-icon",innerHTML:F,onClick:n=>{n.preventDefault(),n.stopPropagation(),Q(t)}})]))])):null,Z=()=>R?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},r.value.resultHistory),d.value.map((e,t)=>l(U,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===t}],onClick:()=>{k()}},()=>[l(O,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(n=>L(n)).flat())]),l("button",{class:"search-pro-remove-icon",innerHTML:F,onClick:n=>{n.preventDefault(),n.stopPropagation(),q(t)}})]))])):null;return re("keydown",e=>{if(s.isFocusing){if(B.value){if(e.key==="ArrowUp")W();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const t=E.value.contents[h.value];v(s.queries.join(" ")),H(t),a.push(M(t)),k()}}else if(R){if(e.key==="ArrowUp")J();else if(e.key==="ArrowDown")Y();else if(e.key==="Enter"){const{index:t}=u;u.isQuery?(i("updateQuery",g.value[t]),e.preventDefault()):(a.push(d.value[t].link),k())}}}}),_([c,h],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["search-pro-result-wrapper",{empty:s.queries.length?!B.value:!I.value}],id:"search-pro-results"},s.queries.length?m.value?l(ne,{hint:r.value.searching}):B.value?l("ul",{class:"search-pro-result-list"},p.value.map(({title:e,contents:t},n)=>{const x=c.value===n;return l("li",{class:["search-pro-result-list-item",{active:x}]},[l("div",{class:"search-pro-result-title"},e||r.value.defaultTitle),t.map((o,ee)=>{const T=x&&h.value===ee;return l(U,{to:M(o),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{v(s.queries.join(" ")),H(o),k()}},()=>[o.type==="text"?null:l(o.type==="title"?oe:o.type==="heading"?de:ce,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[o.type==="text"&&o.header?l("div",{class:"content-header"},o.header):null,l("div",X(o))])])})])})):r.value.emptyResult:A?I.value?[K(),Z()]:r.value.emptyHistory:r.value.emptyResult)}});export{Ae as default};