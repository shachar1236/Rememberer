(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const wh=!1;var Ls=Array.isArray,Na=Array.from,f_=Object.defineProperty,Bn=Object.getOwnPropertyDescriptor,Eh=Object.getOwnPropertyDescriptors,p_=Object.prototype,__=Array.prototype,Oa=Object.getPrototypeOf;const qn=()=>{};function m_(n){return typeof(n==null?void 0:n.then)=="function"}function g_(n){return n()}function ea(n){for(var e=0;e<n.length;e++)n[e]()}const Je=2,Ih=4,ai=8,xa=16,tt=32,ui=64,ta=128,wn=256,hs=512,Me=1024,zt=2048,ci=4096,st=8192,cr=16384,y_=32768,Ma=65536,v_=1<<17,T_=1<<19,Ah=1<<20,jn=Symbol("$state"),w_=Symbol("legacy props"),E_=Symbol("");function bh(n){return n===this.v}function Rh(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function La(n){return!Rh(n,this.v)}function I_(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function A_(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function b_(n){throw new Error("https://svelte.dev/e/effect_orphan")}function R_(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function S_(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function P_(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function C_(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function k_(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function D_(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let lr=!1;function V_(){lr=!0}const N_=1,O_=2,x_=16,M_=1,L_=2,F_=4,U_=8,B_=16,q_=1,j_=2,Re=Symbol();function Ne(n,e){var t={f:0,v:n,reactions:null,equals:bh,version:0};return t}function Qn(n,e=!1){var r;const t=Ne(n);return e||(t.equals=La),lr&&ie!==null&&ie.l!==null&&((r=ie.l).s??(r.s=[])).push(t),t}function na(n,e=!1){return $_(Qn(n,e))}function $_(n){return re!==null&&re.f&Je&&(ot===null?im([n]):ot.push(n)),n}function qe(n,e){return re!==null&&Bs()&&re.f&(Je|xa)&&(ot===null||!ot.includes(n))&&D_(),qr(n,e)}function qr(n,e){return n.equals(e)||(n.v=e,n.version=Gh(),Sh(n,zt),Bs()&&J!==null&&J.f&Me&&!(J.f&tt)&&(Se!==null&&Se.includes(n)?(pt(J,zt),$s(J)):jt===null?sm([n]):jt.push(n))),e}function Sh(n,e){var t=n.reactions;if(t!==null)for(var r=Bs(),i=t.length,s=0;s<i;s++){var a=t[s],c=a.f;c&zt||!r&&a===J||(pt(a,e),c&(Me|wn)&&(c&Je?Sh(a,ci):$s(a)))}}let H_=!1;function xn(n,e=null,t){if(typeof n!="object"||n===null||jn in n)return n;const r=Oa(n);if(r!==p_&&r!==__)return n;var i=new Map,s=Ls(n),a=Ne(0);s&&i.set("length",Ne(n.length));var c;return new Proxy(n,{defineProperty(l,f,m){(!("value"in m)||m.configurable===!1||m.enumerable===!1||m.writable===!1)&&P_();var u=i.get(f);return u===void 0?(u=Ne(m.value),i.set(f,u)):qe(u,xn(m.value,c)),!0},deleteProperty(l,f){var m=i.get(f);if(m===void 0)f in l&&i.set(f,Ne(Re));else{if(s&&typeof f=="string"){var u=i.get("length"),h=Number(f);Number.isInteger(h)&&h<u.v&&qe(u,h)}qe(m,Re),Fc(a)}return!0},get(l,f,m){var y;if(f===jn)return n;var u=i.get(f),h=f in l;if(u===void 0&&(!h||(y=Bn(l,f))!=null&&y.writable)&&(u=Ne(xn(h?l[f]:Re,c)),i.set(f,u)),u!==void 0){var _=de(u);return _===Re?void 0:_}return Reflect.get(l,f,m)},getOwnPropertyDescriptor(l,f){var m=Reflect.getOwnPropertyDescriptor(l,f);if(m&&"value"in m){var u=i.get(f);u&&(m.value=de(u))}else if(m===void 0){var h=i.get(f),_=h==null?void 0:h.v;if(h!==void 0&&_!==Re)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return m},has(l,f){var _;if(f===jn)return!0;var m=i.get(f),u=m!==void 0&&m.v!==Re||Reflect.has(l,f);if(m!==void 0||J!==null&&(!u||(_=Bn(l,f))!=null&&_.writable)){m===void 0&&(m=Ne(u?xn(l[f],c):Re),i.set(f,m));var h=de(m);if(h===Re)return!1}return u},set(l,f,m,u){var V;var h=i.get(f),_=f in l;if(s&&f==="length")for(var y=m;y<h.v;y+=1){var I=i.get(y+"");I!==void 0?qe(I,Re):y in l&&(I=Ne(Re),i.set(y+"",I))}h===void 0?(!_||(V=Bn(l,f))!=null&&V.writable)&&(h=Ne(void 0),qe(h,xn(m,c)),i.set(f,h)):(_=h.v!==Re,qe(h,xn(m,c)));var v=Reflect.getOwnPropertyDescriptor(l,f);if(v!=null&&v.set&&v.set.call(u,m),!_){if(s&&typeof f=="string"){var w=i.get("length"),P=Number(f);Number.isInteger(P)&&P>=w.v&&qe(w,P+1)}Fc(a)}return!0},ownKeys(l){de(a);var f=Reflect.ownKeys(l).filter(h=>{var _=i.get(h);return _===void 0||_.v!==Re});for(var[m,u]of i)u.v!==Re&&!(m in l)&&f.push(m);return f},setPrototypeOf(){C_()}})}function Fc(n,e=1){qe(n,n.v+e)}var Uc,Ph,Ch;function G_(){if(Uc===void 0){Uc=window;var n=Element.prototype,e=Node.prototype;Ph=Bn(e,"firstChild").get,Ch=Bn(e,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function Fa(n=""){return document.createTextNode(n)}function ds(n){return Ph.call(n)}function Fs(n){return Ch.call(n)}function vt(n,e){return ds(n)}function fs(n,e){{var t=ds(n);return t instanceof Comment&&t.data===""?Fs(t):t}}function ps(n,e=1,t=!1){let r=n;for(;e--;)r=Fs(r);return r}function z_(n){n.textContent=""}function _s(n){var e=Je|zt;J===null?e|=wn:J.f|=Ah;var t=re!==null&&re.f&Je?re:null;const r={children:null,ctx:ie,deps:null,equals:bh,f:e,fn:n,reactions:null,v:null,version:0,parent:t??J};return t!==null&&(t.children??(t.children=[])).push(r),r}function W_(n){const e=_s(n);return e.equals=La,e}function kh(n){var e=n.children;if(e!==null){n.children=null;for(var t=0;t<e.length;t+=1){var r=e[t];r.f&Je?Ua(r):Wt(r)}}}function K_(n){for(var e=n.parent;e!==null;){if(!(e.f&Je))return e;e=e.parent}return null}function Dh(n){var e,t=J;lt(K_(n));try{kh(n),e=zh(n)}finally{lt(t)}return e}function Vh(n){var e=Dh(n),t=(cn||n.f&wn)&&n.deps!==null?ci:Me;pt(n,t),n.equals(e)||(n.v=e,n.version=Gh())}function Ua(n){kh(n),Yr(n,0),pt(n,cr),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Nh(n){J===null&&re===null&&b_(),re!==null&&re.f&wn&&A_(),ja&&I_()}function Q_(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function hr(n,e,t,r=!0){var i=(n&ui)!==0,s=J,a={ctx:ie,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|zt,first:null,fn:e,last:null,next:null,parent:i?null:s,prev:null,teardown:null,transitions:null,version:0};if(t){var c=$n;try{Bc(!0),js(a),a.f|=y_}catch(m){throw Wt(a),m}finally{Bc(c)}}else e!==null&&$s(a);var l=t&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&Ah)===0;if(!l&&!i&&r&&(s!==null&&Q_(a,s),re!==null&&re.f&Je)){var f=re;(f.children??(f.children=[])).push(a)}return a}function X_(n){const e=hr(ai,null,!1);return pt(e,Me),e.teardown=n,e}function ra(n){Nh();var e=J!==null&&(J.f&tt)!==0&&ie!==null&&!ie.m;if(e){var t=ie;(t.e??(t.e=[])).push({fn:n,effect:J,reaction:re})}else{var r=Ba(n);return r}}function Y_(n){return Nh(),Z_(n)}function J_(n){const e=hr(ui,n,!0);return(t={})=>new Promise(r=>{t.outro?fn(e,()=>{Wt(e),r(void 0)}):(Wt(e),r(void 0))})}function Ba(n){return hr(Ih,n,!1)}function Z_(n){return hr(ai,n,!0)}function Oh(n){return Us(n)}function Us(n,e=0){return hr(ai|xa|e,n,!0)}function Xn(n,e=!0){return hr(ai|tt,n,!0,e)}function xh(n){var e=n.teardown;if(e!==null){const t=ja,r=re;qc(!0),Kt(null);try{e.call(null)}finally{qc(t),Kt(r)}}}function Mh(n){var e=n.deriveds;if(e!==null){n.deriveds=null;for(var t=0;t<e.length;t+=1)Ua(e[t])}}function Lh(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){var r=t.next;Wt(t,e),t=r}}function em(n){for(var e=n.first;e!==null;){var t=e.next;e.f&tt||Wt(e),e=t}}function Wt(n,e=!0){var t=!1;if((e||n.f&T_)&&n.nodes_start!==null){for(var r=n.nodes_start,i=n.nodes_end;r!==null;){var s=r===i?null:Fs(r);r.remove(),r=s}t=!0}Lh(n,e&&!t),Mh(n),Yr(n,0),pt(n,cr);var a=n.transitions;if(a!==null)for(const l of a)l.stop();xh(n);var c=n.parent;c!==null&&c.first!==null&&Fh(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Fh(n){var e=n.parent,t=n.prev,r=n.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),e!==null&&(e.first===n&&(e.first=r),e.last===n&&(e.last=t))}function fn(n,e){var t=[];qa(n,t,!0),Uh(t,()=>{Wt(n),e&&e()})}function Uh(n,e){var t=n.length;if(t>0){var r=()=>--t||e();for(var i of n)i.out(r)}else e()}function qa(n,e,t){if(!(n.f&st)){if(n.f^=st,n.transitions!==null)for(const a of n.transitions)(a.is_global||t)&&e.push(a);for(var r=n.first;r!==null;){var i=r.next,s=(r.f&Ma)!==0||(r.f&tt)!==0;qa(r,e,s?t:!1),r=i}}}function Kr(n){Bh(n,!0)}function Bh(n,e){if(n.f&st){li(n)&&js(n),n.f^=st;for(var t=n.first;t!==null;){var r=t.next,i=(t.f&Ma)!==0||(t.f&tt)!==0;Bh(t,i?e:!1),t=r}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||e)&&s.in()}}let ms=!1,ia=[];function qh(){ms=!1;const n=ia.slice();ia=[],ea(n)}function tm(n){ms||(ms=!0,queueMicrotask(qh)),ia.push(n)}function nm(){ms&&qh()}function jh(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const $h=0,rm=1;let Yi=!1,Ji=$h,Qr=!1,Xr=null,$n=!1,ja=!1;function Bc(n){$n=n}function qc(n){ja=n}let un=[],Hn=0;let re=null;function Kt(n){re=n}let J=null;function lt(n){J=n}let ot=null;function im(n){ot=n}let Se=null,Be=0,jt=null;function sm(n){jt=n}let Hh=1,cn=!1,ie=null;function jc(n){ie=n}function Gh(){return++Hh}function Bs(){return!lr||ie!==null&&ie.l===null}function li(n){var a,c;var e=n.f;if(e&zt)return!0;if(e&ci){var t=n.deps,r=(e&wn)!==0;if(t!==null){var i;if(e&hs){for(i=0;i<t.length;i++)((a=t[i]).reactions??(a.reactions=[])).push(n);n.f^=hs}for(i=0;i<t.length;i++){var s=t[i];if(li(s)&&Vh(s),r&&J!==null&&!cn&&!((c=s==null?void 0:s.reactions)!=null&&c.includes(n))&&(s.reactions??(s.reactions=[])).push(n),s.version>n.version)return!0}}(!r||J!==null&&!cn)&&pt(n,Me)}return!1}function om(n,e){for(var t=e;t!==null;){if(t.f&ta)try{t.fn(n);return}catch{t.f^=ta}t=t.parent}throw Yi=!1,n}function am(n){return(n.f&cr)===0&&(n.parent===null||(n.parent.f&ta)===0)}function qs(n,e,t,r){if(Yi){if(t===null&&(Yi=!1),am(e))throw n;return}t!==null&&(Yi=!0);{om(n,e);return}}function zh(n){var h;var e=Se,t=Be,r=jt,i=re,s=cn,a=ot,c=ie,l=n.f;Se=null,Be=0,jt=null,re=l&(tt|ui)?null:n,cn=!$n&&(l&wn)!==0,ot=null,ie=n.ctx;try{var f=(0,n.fn)(),m=n.deps;if(Se!==null){var u;if(Yr(n,Be),m!==null&&Be>0)for(m.length=Be+Se.length,u=0;u<Se.length;u++)m[Be+u]=Se[u];else n.deps=m=Se;if(!cn)for(u=Be;u<m.length;u++)((h=m[u]).reactions??(h.reactions=[])).push(n)}else m!==null&&Be<m.length&&(Yr(n,Be),m.length=Be);return f}finally{Se=e,Be=t,jt=r,re=i,cn=s,ot=a,ie=c}}function um(n,e){let t=e.reactions;if(t!==null){var r=t.indexOf(n);if(r!==-1){var i=t.length-1;i===0?t=e.reactions=null:(t[r]=t[i],t.pop())}}t===null&&e.f&Je&&(Se===null||!Se.includes(e))&&(pt(e,ci),e.f&(wn|hs)||(e.f^=hs),Yr(e,0))}function Yr(n,e){var t=n.deps;if(t!==null)for(var r=e;r<t.length;r++)um(n,t[r])}function js(n){var e=n.f;if(!(e&cr)){pt(n,Me);var t=J,r=ie;J=n;try{e&xa?em(n):Lh(n),Mh(n),xh(n);var i=zh(n);n.teardown=typeof i=="function"?i:null,n.version=Hh}catch(s){qs(s,n,t,r||n.ctx)}finally{J=t}}}function Wh(){if(Hn>1e3){Hn=0;try{R_()}catch(n){if(Xr!==null)qs(n,Xr,null);else throw n}}Hn++}function Kh(n){var e=n.length;if(e!==0){Wh();var t=$n;$n=!0;try{for(var r=0;r<e;r++){var i=n[r];i.f&Me||(i.f^=Me);var s=[];Qh(i,s),cm(s)}}finally{$n=t}}}function cm(n){var e=n.length;if(e!==0)for(var t=0;t<e;t++){var r=n[t];if(!(r.f&(cr|st)))try{li(r)&&(js(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Fh(r):r.fn=null))}catch(i){qs(i,r,null,r.ctx)}}}function lm(){if(Qr=!1,Hn>1001)return;const n=un;un=[],Kh(n),Qr||(Hn=0,Xr=null)}function $s(n){Ji===$h&&(Qr||(Qr=!0,queueMicrotask(lm))),Xr=n;for(var e=n;e.parent!==null;){e=e.parent;var t=e.f;if(t&(ui|tt)){if(!(t&Me))return;e.f^=Me}}un.push(e)}function Qh(n,e){var t=n.first,r=[];e:for(;t!==null;){var i=t.f,s=(i&tt)!==0,a=s&&(i&Me)!==0,c=t.next;if(!a&&!(i&st))if(i&ai){if(s)t.f^=Me;else try{li(t)&&js(t)}catch(u){qs(u,t,null,t.ctx)}var l=t.first;if(l!==null){t=l;continue}}else i&Ih&&r.push(t);if(c===null){let u=t.parent;for(;u!==null;){if(n===u)break e;var f=u.next;if(f!==null){t=f;continue e}u=u.parent}}t=c}for(var m=0;m<r.length;m++)l=r[m],e.push(l),Qh(l,e)}function Xh(n){var e=Ji,t=un;try{Wh();const i=[];Ji=rm,un=i,Qr=!1,Kh(t);var r=n==null?void 0:n();return nm(),(un.length>0||i.length>0)&&Xh(),Hn=0,Xr=null,r}finally{Ji=e,un=t}}function de(n){var m;var e=n.f,t=(e&Je)!==0;if(t&&e&cr){var r=Dh(n);return Ua(n),r}if(re!==null){ot!==null&&ot.includes(n)&&k_();var i=re.deps;Se===null&&i!==null&&i[Be]===n?Be++:Se===null?Se=[n]:Se.push(n),jt!==null&&J!==null&&J.f&Me&&!(J.f&tt)&&jt.includes(n)&&(pt(J,zt),$s(J))}else if(t&&n.deps===null)for(var s=n,a=s.parent,c=s;a!==null;)if(a.f&Je){var l=a;c=l,a=l.parent}else{var f=a;(m=f.deriveds)!=null&&m.includes(c)||(f.deriveds??(f.deriveds=[])).push(c);break}return t&&(s=n,li(s)&&Vh(s)),n.v}function Yn(n){const e=re;try{return re=null,n()}finally{re=e}}const hm=~(zt|ci|Me);function pt(n,e){n.f=n.f&hm|e}function dr(n,e=!1,t){ie={p:ie,c:null,e:null,m:!1,s:n,x:null,l:null},lr&&!e&&(ie.l={s:null,u:null,r1:[],r2:Ne(!1)})}function fr(n){const e=ie;if(e!==null){const a=e.e;if(a!==null){var t=J,r=re;e.e=null;try{for(var i=0;i<a.length;i++){var s=a[i];lt(s.effect),Kt(s.reaction),Ba(s.fn)}}finally{lt(t),Kt(r)}}ie=e.p,e.m=!0}return{}}function dm(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(jn in n)sa(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&jn in t&&sa(t)}}}function sa(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let r in n)try{sa(n[r],e)}catch{}const t=Oa(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=Eh(t);for(let i in r){const s=r[i].get;if(s)try{s.call(n)}catch{}}}}}const fm=["touchstart","touchmove"];function pm(n){return fm.includes(n)}const Yh=new Set,oa=new Set;function Jh(n){for(var e=0;e<n.length;e++)Yh.add(n[e]);for(var t of oa)t(n)}function Bi(n){var P;var e=this,t=e.ownerDocument,r=n.type,i=((P=n.composedPath)==null?void 0:P.call(n))||[],s=i[0]||n.target,a=0,c=n.__root;if(c){var l=i.indexOf(c);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var f=i.indexOf(e);if(f===-1)return;l<=f&&(a=l)}if(s=i[a]||n.target,s!==e){f_(n,"currentTarget",{configurable:!0,get(){return s||t}});var m=re,u=J;Kt(null),lt(null);try{for(var h,_=[];s!==null;){var y=s.assignedSlot||s.parentNode||s.host||null;try{var I=s["__"+r];if(I!==void 0&&!s.disabled)if(Ls(I)){var[v,...w]=I;v.apply(s,[n,...w])}else I.call(s,n)}catch(V){h?_.push(V):h=V}if(n.cancelBubble||y===e||y===null)break;s=y}if(h){for(let V of _)queueMicrotask(()=>{throw V});throw h}}finally{n.__root=e,delete n.currentTarget,Kt(m),lt(u)}}}function _m(n){var e=document.createElement("template");return e.innerHTML=n,e.content}function aa(n,e){var t=J;t.nodes_start===null&&(t.nodes_start=n,t.nodes_end=e)}function pr(n,e){var t=(e&q_)!==0,r=(e&j_)!==0,i,s=!n.startsWith("<!>");return()=>{i===void 0&&(i=_m(s?n:"<!>"+n),t||(i=ds(i)));var a=r?document.importNode(i,!0):i.cloneNode(!0);if(t){var c=ds(a),l=a.lastChild;aa(c,l)}else aa(a,a);return a}}function $a(){var n=document.createDocumentFragment(),e=document.createComment(""),t=Fa();return n.append(e,t),aa(e,t),n}function Tt(n,e){n!==null&&n.before(e)}function mm(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??(n.__t=n.nodeValue))&&(n.__t=t,n.nodeValue=t==null?"":t+"")}function gm(n,e){return ym(n,e)}const Nn=new Map;function ym(n,{target:e,anchor:t,props:r={},events:i,context:s,intro:a=!0}){G_();var c=new Set,l=u=>{for(var h=0;h<u.length;h++){var _=u[h];if(!c.has(_)){c.add(_);var y=pm(_);e.addEventListener(_,Bi,{passive:y});var I=Nn.get(_);I===void 0?(document.addEventListener(_,Bi,{passive:y}),Nn.set(_,1)):Nn.set(_,I+1)}}};l(Na(Yh)),oa.add(l);var f=void 0,m=J_(()=>{var u=t??e.appendChild(Fa());return Xn(()=>{if(s){dr({});var h=ie;h.c=s}i&&(r.$$events=i),f=n(u,r)||{},s&&fr()}),()=>{var y;for(var h of c){e.removeEventListener(h,Bi);var _=Nn.get(h);--_===0?(document.removeEventListener(h,Bi),Nn.delete(h)):Nn.set(h,_)}oa.delete(l),u!==t&&((y=u.parentNode)==null||y.removeChild(u))}});return vm.set(f,m),f}let vm=new WeakMap;const xo=0,qi=1,Mo=2;function Tm(n,e,t,r,i){var s=n,a=Bs(),c=ie,l=Re,f,m,u,h=(a?Ne:Qn)(void 0),_=(a?Ne:Qn)(void 0),y=!1;function I(w,P){y=!0,P&&(lt(v),Kt(v),jc(c));try{w===qi&&r&&(m?Kr(m):m=Xn(()=>r(s,h))),w!==xo&&f&&fn(f,()=>f=null),w!==qi&&m&&fn(m,()=>m=null),w!==Mo&&u&&fn(u,()=>u=null)}finally{P&&(jc(null),Kt(null),lt(null),Xh())}}var v=Us(()=>{if(l!==(l=e())){if(m_(l)){var w=l;y=!1,w.then(P=>{w===l&&(qr(h,P),I(qi,!0))},P=>{if(w===l)throw qr(_,P),I(Mo,!0),_.v}),tm(()=>{y||I(xo,!0)})}else qr(h,l),I(qi,!1);return()=>l=Re}})}function Zi(n,e,t=!1){var r=n,i=null,s=null,a=Re,c=t?Ma:0,l=!1;const f=(u,h=!0)=>{l=!0,m(h,u)},m=(u,h)=>{a!==(a=u)&&(a?(i?Kr(i):h&&(i=Xn(()=>h(r))),s&&fn(s,()=>{s=null})):(s?Kr(s):h&&(s=Xn(()=>h(r))),i&&fn(i,()=>{i=null})))};Us(()=>{l=!1,e(f),l||m(null,null)},c)}function wm(n,e){return e}function Em(n,e,t,r){for(var i=[],s=e.length,a=0;a<s;a++)qa(e[a].e,i,!0);var c=s>0&&i.length===0&&t!==null;if(c){var l=t.parentNode;z_(l),l.append(t),r.clear(),Mt(n,e[0].prev,e[s-1].next)}Uh(i,()=>{for(var f=0;f<s;f++){var m=e[f];c||(r.delete(m.k),Mt(n,m.prev,m.next)),Wt(m.e,!c)}})}function Im(n,e,t,r,i,s=null){var a=n,c={flags:e,items:new Map,first:null};{var l=n;a=l.appendChild(Fa())}var f=null,m=!1;Us(()=>{var u=t(),h=Ls(u)?u:u==null?[]:Na(u),_=h.length;if(!(m&&_===0)){m=_===0;{var y=re;Am(h,c,a,i,e,(y.f&st)!==0,r)}s!==null&&(_===0?f?Kr(f):f=Xn(()=>s(a)):f!==null&&fn(f,()=>{f=null})),t()}})}function Am(n,e,t,r,i,s,a,c){var l=n.length,f=e.items,m=e.first,u=m,h,_=null,y=[],I=[],v,w,P,V;for(V=0;V<l;V+=1){if(v=n[V],w=a(v,V),P=f.get(w),P===void 0){var x=u?u.e.nodes_start:t;_=Rm(x,e,_,_===null?e.first:_.next,v,w,V,r,i),f.set(w,_),y=[],I=[],u=_.next;continue}if(bm(P,v,V),P.e.f&st&&Kr(P.e),P!==u){if(h!==void 0&&h.has(P)){if(y.length<I.length){var F=I[0],q;_=F.prev;var b=y[0],T=y[y.length-1];for(q=0;q<y.length;q+=1)$c(y[q],F,t);for(q=0;q<I.length;q+=1)h.delete(I[q]);Mt(e,b.prev,T.next),Mt(e,_,b),Mt(e,T,F),u=F,_=T,V-=1,y=[],I=[]}else h.delete(P),$c(P,u,t),Mt(e,P.prev,P.next),Mt(e,P,_===null?e.first:_.next),Mt(e,_,P),_=P;continue}for(y=[],I=[];u!==null&&u.k!==w;)(s||!(u.e.f&st))&&(h??(h=new Set)).add(u),I.push(u),u=u.next;if(u===null)continue;P=u}y.push(P),_=P,u=P.next}if(u!==null||h!==void 0){for(var E=h===void 0?[]:Na(h);u!==null;)(s||!(u.e.f&st))&&E.push(u),u=u.next;var R=E.length;if(R>0){var S=l===0?t:null;Em(e,E,S,f)}}J.first=e.first&&e.first.e,J.last=_&&_.e}function bm(n,e,t,r){qr(n.v,e),n.i=t}function Rm(n,e,t,r,i,s,a,c,l,f){var m=(l&N_)!==0,u=(l&x_)===0,h=m?u?Qn(i):Ne(i):i,_=l&O_?Ne(a):a,y={i:_,v:h,k:s,a:null,e:null,prev:t,next:r};try{return y.e=Xn(()=>c(n,h,_),H_),y.e.prev=t&&t.e,y.e.next=r&&r.e,t===null?e.first=y:(t.next=y,t.e.next=y.e),r!==null&&(r.prev=y,r.e.prev=y.e),y}finally{}}function $c(n,e,t){for(var r=n.next?n.next.e.nodes_start:t,i=e?e.e.nodes_start:t,s=n.e.nodes_start;s!==r;){var a=Fs(s);i.before(s),s=a}}function Mt(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function Sm(n,e,t){Ba(()=>{var r=Yn(()=>e(n,t==null?void 0:t())||{});if(r!=null&&r.destroy)return()=>r.destroy()})}function ua(n,e,t,r){var i=n.__attributes??(n.__attributes={});i[e]!==(i[e]=t)&&(e==="style"&&"__styles"in n&&(n.__styles={}),e==="loading"&&(n[E_]=t),t==null?n.removeAttribute(e):typeof t!="string"&&Pm(n).includes(e)?n[e]=t:n.setAttribute(e,t))}var Hc=new Map;function Pm(n){var e=Hc.get(n.nodeName);if(e)return e;Hc.set(n.nodeName,e=[]);for(var t,r=n,i=Element.prototype;i!==r;){t=Eh(r);for(var s in t)t[s].set&&e.push(s);r=Oa(r)}return e}function hi(n=!1){const e=ie,t=e.l.u;if(!t)return;let r=()=>dm(e.s);if(n){let i=0,s={};const a=_s(()=>{let c=!1;const l=e.s;for(const f in l)l[f]!==s[f]&&(s[f]=l[f],c=!0);return c&&i++,i});r=()=>de(a)}t.b.length&&Y_(()=>{Gc(e,r),ea(t.b)}),ra(()=>{const i=Yn(()=>t.m.map(g_));return()=>{for(const s of i)typeof s=="function"&&s()}}),t.a.length&&ra(()=>{Gc(e,r),ea(t.a)})}function Gc(n,e){if(n.l.s)for(const t of n.l.s)de(t);e()}function Cm(n,e,t){if(n==null)return e(void 0),qn;const r=Yn(()=>n.subscribe(e,t));return r.unsubscribe?()=>r.unsubscribe():r}let ji=!1;function pn(n,e,t){const r=t[e]??(t[e]={store:null,source:Qn(void 0),unsubscribe:qn});if(r.store!==n)if(r.unsubscribe(),r.store=n??null,n==null)r.source.v=void 0,r.unsubscribe=qn;else{var i=!0;r.unsubscribe=Cm(n,s=>{i?r.source.v=s:qe(r.source,s)}),i=!1}return de(r.source)}function Un(n,e){return n.set(e),e}function Ha(){const n={};return X_(()=>{for(var e in n)n[e].unsubscribe()}),n}function km(n){var e=ji;try{return ji=!1,[n(),ji]}finally{ji=e}}function zc(n){for(var e=J,t=J;e!==null&&!(e.f&(tt|ui));)e=e.parent;try{return lt(e),n()}finally{lt(t)}}function it(n,e,t,r){var b;var i=(t&M_)!==0,s=!lr||(t&L_)!==0,a=(t&U_)!==0,c=(t&B_)!==0,l=!1,f;a?[f,l]=km(()=>n[e]):f=n[e];var m=jn in n||w_ in n,u=((b=Bn(n,e))==null?void 0:b.set)??(m&&a&&e in n?T=>n[e]=T:void 0),h=r,_=!0,y=!1,I=()=>(y=!0,_&&(_=!1,c?h=Yn(r):h=r),h);f===void 0&&r!==void 0&&(u&&s&&S_(),f=I(),u&&u(f));var v;if(s)v=()=>{var T=n[e];return T===void 0?I():(_=!0,y=!1,T)};else{var w=zc(()=>(i?_s:W_)(()=>n[e]));w.f|=v_,v=()=>{var T=de(w);return T!==void 0&&(h=void 0),T===void 0?h:T}}if(!(t&F_))return v;if(u){var P=n.$$legacy;return function(T,E){return arguments.length>0?((!s||!E||P||l)&&u(E?v():T),T):v()}}var V=!1,x=!1,F=Qn(f),q=zc(()=>_s(()=>{var T=v(),E=de(F);return V?(V=!1,x=!0,E):(x=!1,F.v=T)}));return i||(q.equals=La),function(T,E){if(arguments.length>0){const R=E?de(q):s&&a?xn(T):T;return q.equals(R)||(V=!0,qe(F,R),y&&h!==void 0&&(h=R),Yn(()=>de(q))),T}return de(q)}}function Dm(n){ie===null&&jh(),lr&&ie.l!==null?Om(ie).m.push(n):ra(()=>{const e=Yn(n);if(typeof e=="function")return e})}function Vm(n,e,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:r})}function Nm(){const n=ie;return n===null&&jh(),(e,t,r)=>{var s;const i=(s=n.s.$$events)==null?void 0:s[e];if(i){const a=Ls(i)?i.slice():[i],c=Vm(e,t,r);for(const l of a)l.call(n.x,c);return!c.defaultPrevented}return!0}}function Om(n){var e=n.l;return e.u??(e.u={a:[],b:[],m:[]})}const xm="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(xm);V_();var Mm=pr('<div><button class="border-none focus:outline-none p-4 max-w-sm mx-4 mb-0 rounded-xl shadow-lg flex items-center gap-x-4 bg-green-700 hover:scale-110 duration-300 ease-out cursor-pointer"><div class="shrink-0"><img alt="" class="size-16 basis-3/4 rounded-lg"></div> <h4 class="basis-1/8 text-3xl font-medium text-white"> </h4></button> <span class="bg-white h-1 opacity-100 left-0 bottom-0 block mt-0 mb-0 ml-[8%]"></span></div>');function Lm(n,e){dr(e,!1);let t=it(e,"question_set",8),r=it(e,"onclickfunc",8),s=it(e,"progress_bar",8,0)()/100*84;hi();var a=Mm(),c=vt(a);c.__click=function(..._){var y;(y=r())==null||y.apply(this,_)};var l=vt(c),f=vt(l),m=ps(l,2),u=vt(m),h=ps(c,2);ua(h,"style",`width: ${s??""}%;`),Oh(()=>{ua(f,"src",t().image),mm(u,t().name)}),Tt(n,a),fr()}Jh(["click"]);var Wc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Fm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],c=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},ed={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,c=a?n[i+1]:0,l=i+2<n.length,f=l?n[i+2]:0,m=s>>2,u=(s&3)<<4|c>>4;let h=(c&15)<<2|f>>6,_=f&63;l||(_=64,a||(h=64)),r.push(t[m],t[u],t[h],t[_])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Zh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Fm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const f=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||f==null||u==null)throw new Um;const h=s<<2|c>>4;if(r.push(h),f!==64){const _=c<<4&240|f>>2;if(r.push(_),u!==64){const y=f<<6&192|u;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Um extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bm=function(n){const e=Zh(n);return ed.encodeByteArray(e,!0)},gs=function(n){return Bm(n).replace(/\./g,"")},td=function(n){try{return ed.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=()=>qm().__FIREBASE_DEFAULTS__,$m=()=>{if(typeof process>"u"||typeof Wc>"u")return;const n=Wc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Hm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&td(n[1]);return e&&JSON.parse(e)},Hs=()=>{try{return jm()||$m()||Hm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},nd=n=>{var e,t;return(t=(e=Hs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Gm=n=>{const e=nd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},rd=()=>{var n;return(n=Hs())===null||n===void 0?void 0:n.config},id=n=>{var e;return(e=Hs())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[gs(JSON.stringify(t)),gs(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Km(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function Qm(){var n;const e=(n=Hs())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ym(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jm(){const n=ke();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Zm(){return!Qm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function od(){try{return typeof indexedDB=="object"}catch{return!1}}function ad(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function eg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="FirebaseError";class nt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=tg,Object.setPrototypeOf(this,nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,En.prototype.create)}}class En{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?ng(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new nt(i,c,r)}}function ng(n,e){return n.replace(rg,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const rg=/\{\$([^}]+)}/g;function ig(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Jr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Kc(s)&&Kc(a)){if(!Jr(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Kc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function sg(n,e){const t=new og(n,e);return t.subscribe.bind(t)}class og{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ag(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Lo),i.error===void 0&&(i.error=Lo),i.complete===void 0&&(i.complete=Lo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ag(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Lo(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=1e3,cg=2,lg=4*60*60*1e3,hg=.5;function Qc(n,e=ug,t=cg){const r=e*Math.pow(t,n),i=Math.round(hg*r*(Math.random()-.5)*2);return Math.min(lg,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(n){return n&&n._delegate?n._delegate:n}class Ze{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new zm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pg(e))try{this.getOrInitializeService({instanceIdentifier:an})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=an){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=an){return this.instances.has(e)}getOptions(e=an){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=an){return this.component?this.component.multipleInstances?e:an:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fg(n){return n===an?void 0:n}function pg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new dg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const mg={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},gg=K.INFO,yg={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},vg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=yg[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gs{constructor(e){this.name=e,this._logLevel=gg,this._logHandler=vg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const Tg=(n,e)=>e.some(t=>n instanceof t);let Xc,Yc;function wg(){return Xc||(Xc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Eg(){return Yc||(Yc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ud=new WeakMap,ca=new WeakMap,cd=new WeakMap,Fo=new WeakMap,Ga=new WeakMap;function Ig(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t($t(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ud.set(t,n)}).catch(()=>{}),Ga.set(e,n),e}function Ag(n){if(ca.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});ca.set(n,e)}let la={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ca.get(n);if(e==="objectStoreNames")return n.objectStoreNames||cd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $t(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function bg(n){la=n(la)}function Rg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Uo(this),e,...t);return cd.set(r,e.sort?e.sort():[e]),$t(r)}:Eg().includes(n)?function(...e){return n.apply(Uo(this),e),$t(ud.get(this))}:function(...e){return $t(n.apply(Uo(this),e))}}function Sg(n){return typeof n=="function"?Rg(n):(n instanceof IDBTransaction&&Ag(n),Tg(n,wg())?new Proxy(n,la):n)}function $t(n){if(n instanceof IDBRequest)return Ig(n);if(Fo.has(n))return Fo.get(n);const e=Sg(n);return e!==n&&(Fo.set(n,e),Ga.set(e,n)),e}const Uo=n=>Ga.get(n);function ld(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),c=$t(a);return r&&a.addEventListener("upgradeneeded",l=>{r($t(a.result),l.oldVersion,l.newVersion,$t(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Pg=["get","getKey","getAll","getAllKeys","count"],Cg=["put","add","delete","clear"],Bo=new Map;function Jc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Bo.get(e))return Bo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Cg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Pg.includes(t)))return;const s=async function(a,...c){const l=this.transaction(a,i?"readwrite":"readonly");let f=l.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[t](...c),i&&l.done]))[0]};return Bo.set(e,s),s}bg(n=>({...n,get:(e,t,r)=>Jc(e,t)||n.get(e,t,r),has:(e,t)=>!!Jc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Dg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Dg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ha="@firebase/app",Zc="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new Gs("@firebase/app"),Vg="@firebase/app-compat",Ng="@firebase/analytics-compat",Og="@firebase/analytics",xg="@firebase/app-check-compat",Mg="@firebase/app-check",Lg="@firebase/auth",Fg="@firebase/auth-compat",Ug="@firebase/database",Bg="@firebase/data-connect",qg="@firebase/database-compat",jg="@firebase/functions",$g="@firebase/functions-compat",Hg="@firebase/installations",Gg="@firebase/installations-compat",zg="@firebase/messaging",Wg="@firebase/messaging-compat",Kg="@firebase/performance",Qg="@firebase/performance-compat",Xg="@firebase/remote-config",Yg="@firebase/remote-config-compat",Jg="@firebase/storage",Zg="@firebase/storage-compat",ey="@firebase/firestore",ty="@firebase/vertexai",ny="@firebase/firestore-compat",ry="firebase",iy="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="[DEFAULT]",sy={[ha]:"fire-core",[Vg]:"fire-core-compat",[Og]:"fire-analytics",[Ng]:"fire-analytics-compat",[Mg]:"fire-app-check",[xg]:"fire-app-check-compat",[Lg]:"fire-auth",[Fg]:"fire-auth-compat",[Ug]:"fire-rtdb",[Bg]:"fire-data-connect",[qg]:"fire-rtdb-compat",[jg]:"fire-fn",[$g]:"fire-fn-compat",[Hg]:"fire-iid",[Gg]:"fire-iid-compat",[zg]:"fire-fcm",[Wg]:"fire-fcm-compat",[Kg]:"fire-perf",[Qg]:"fire-perf-compat",[Xg]:"fire-rc",[Yg]:"fire-rc-compat",[Jg]:"fire-gcs",[Zg]:"fire-gcs-compat",[ey]:"fire-fst",[ny]:"fire-fst-compat",[ty]:"fire-vertex","fire-js":"fire-js",[ry]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new Map,oy=new Map,fa=new Map;function el(n,e){try{n.container.addComponent(e)}catch(t){St.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ht(n){const e=n.name;if(fa.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;fa.set(e,n);for(const t of ys.values())el(t,n);for(const t of oy.values())el(t,n);return!0}function In(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function wt(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new En("app","Firebase",ay);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=iy;function hd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:da,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ht.create("bad-app-name",{appName:String(i)});if(t||(t=rd()),!t)throw Ht.create("no-options");const s=ys.get(i);if(s){if(Jr(t,s.options)&&Jr(r,s.config))return s;throw Ht.create("duplicate-app",{appName:i})}const a=new _g(i);for(const l of fa.values())a.addComponent(l);const c=new uy(t,r,a);return ys.set(i,c),c}function za(n=da){const e=ys.get(n);if(!e&&n===da&&rd())return hd();if(!e)throw Ht.create("no-app",{appName:n});return e}function Ge(n,e,t){var r;let i=(r=sy[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),St.warn(c.join(" "));return}ht(new Ze(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="firebase-heartbeat-database",ly=1,Zr="firebase-heartbeat-store";let qo=null;function dd(){return qo||(qo=ld(cy,ly,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Zr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ht.create("idb-open",{originalErrorMessage:n.message})})),qo}async function hy(n){try{const t=(await dd()).transaction(Zr),r=await t.objectStore(Zr).get(fd(n));return await t.done,r}catch(e){if(e instanceof nt)St.warn(e.message);else{const t=Ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});St.warn(t.message)}}}async function tl(n,e){try{const r=(await dd()).transaction(Zr,"readwrite");await r.objectStore(Zr).put(e,fd(n)),await r.done}catch(t){if(t instanceof nt)St.warn(t.message);else{const r=Ht.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});St.warn(r.message)}}}function fd(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=1024,fy=30*24*60*60*1e3;class py{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new my(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nl();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=fy}),this._storage.overwrite(this._heartbeatsCache))}catch(r){St.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nl(),{heartbeatsToSend:r,unsentEntries:i}=_y(this._heartbeatsCache.heartbeats),s=gs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return St.warn(t),""}}}function nl(){return new Date().toISOString().substring(0,10)}function _y(n,e=dy){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),rl(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),rl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class my{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return od()?ad().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await hy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return tl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return tl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rl(n){return gs(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(n){ht(new Ze("platform-logger",e=>new kg(e),"PRIVATE")),ht(new Ze("heartbeat",e=>new py(e),"PRIVATE")),Ge(ha,Zc,n),Ge(ha,Zc,"esm2017"),Ge("fire-js","")}gy("");var il=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _n,pd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,T){function E(){}E.prototype=T.prototype,b.D=T.prototype,b.prototype=new E,b.prototype.constructor=b,b.C=function(R,S,k){for(var A=Array(arguments.length-2),me=2;me<arguments.length;me++)A[me-2]=arguments[me];return T.prototype[S].apply(R,A)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,T,E){E||(E=0);var R=Array(16);if(typeof T=="string")for(var S=0;16>S;++S)R[S]=T.charCodeAt(E++)|T.charCodeAt(E++)<<8|T.charCodeAt(E++)<<16|T.charCodeAt(E++)<<24;else for(S=0;16>S;++S)R[S]=T[E++]|T[E++]<<8|T[E++]<<16|T[E++]<<24;T=b.g[0],E=b.g[1],S=b.g[2];var k=b.g[3],A=T+(k^E&(S^k))+R[0]+3614090360&4294967295;T=E+(A<<7&4294967295|A>>>25),A=k+(S^T&(E^S))+R[1]+3905402710&4294967295,k=T+(A<<12&4294967295|A>>>20),A=S+(E^k&(T^E))+R[2]+606105819&4294967295,S=k+(A<<17&4294967295|A>>>15),A=E+(T^S&(k^T))+R[3]+3250441966&4294967295,E=S+(A<<22&4294967295|A>>>10),A=T+(k^E&(S^k))+R[4]+4118548399&4294967295,T=E+(A<<7&4294967295|A>>>25),A=k+(S^T&(E^S))+R[5]+1200080426&4294967295,k=T+(A<<12&4294967295|A>>>20),A=S+(E^k&(T^E))+R[6]+2821735955&4294967295,S=k+(A<<17&4294967295|A>>>15),A=E+(T^S&(k^T))+R[7]+4249261313&4294967295,E=S+(A<<22&4294967295|A>>>10),A=T+(k^E&(S^k))+R[8]+1770035416&4294967295,T=E+(A<<7&4294967295|A>>>25),A=k+(S^T&(E^S))+R[9]+2336552879&4294967295,k=T+(A<<12&4294967295|A>>>20),A=S+(E^k&(T^E))+R[10]+4294925233&4294967295,S=k+(A<<17&4294967295|A>>>15),A=E+(T^S&(k^T))+R[11]+2304563134&4294967295,E=S+(A<<22&4294967295|A>>>10),A=T+(k^E&(S^k))+R[12]+1804603682&4294967295,T=E+(A<<7&4294967295|A>>>25),A=k+(S^T&(E^S))+R[13]+4254626195&4294967295,k=T+(A<<12&4294967295|A>>>20),A=S+(E^k&(T^E))+R[14]+2792965006&4294967295,S=k+(A<<17&4294967295|A>>>15),A=E+(T^S&(k^T))+R[15]+1236535329&4294967295,E=S+(A<<22&4294967295|A>>>10),A=T+(S^k&(E^S))+R[1]+4129170786&4294967295,T=E+(A<<5&4294967295|A>>>27),A=k+(E^S&(T^E))+R[6]+3225465664&4294967295,k=T+(A<<9&4294967295|A>>>23),A=S+(T^E&(k^T))+R[11]+643717713&4294967295,S=k+(A<<14&4294967295|A>>>18),A=E+(k^T&(S^k))+R[0]+3921069994&4294967295,E=S+(A<<20&4294967295|A>>>12),A=T+(S^k&(E^S))+R[5]+3593408605&4294967295,T=E+(A<<5&4294967295|A>>>27),A=k+(E^S&(T^E))+R[10]+38016083&4294967295,k=T+(A<<9&4294967295|A>>>23),A=S+(T^E&(k^T))+R[15]+3634488961&4294967295,S=k+(A<<14&4294967295|A>>>18),A=E+(k^T&(S^k))+R[4]+3889429448&4294967295,E=S+(A<<20&4294967295|A>>>12),A=T+(S^k&(E^S))+R[9]+568446438&4294967295,T=E+(A<<5&4294967295|A>>>27),A=k+(E^S&(T^E))+R[14]+3275163606&4294967295,k=T+(A<<9&4294967295|A>>>23),A=S+(T^E&(k^T))+R[3]+4107603335&4294967295,S=k+(A<<14&4294967295|A>>>18),A=E+(k^T&(S^k))+R[8]+1163531501&4294967295,E=S+(A<<20&4294967295|A>>>12),A=T+(S^k&(E^S))+R[13]+2850285829&4294967295,T=E+(A<<5&4294967295|A>>>27),A=k+(E^S&(T^E))+R[2]+4243563512&4294967295,k=T+(A<<9&4294967295|A>>>23),A=S+(T^E&(k^T))+R[7]+1735328473&4294967295,S=k+(A<<14&4294967295|A>>>18),A=E+(k^T&(S^k))+R[12]+2368359562&4294967295,E=S+(A<<20&4294967295|A>>>12),A=T+(E^S^k)+R[5]+4294588738&4294967295,T=E+(A<<4&4294967295|A>>>28),A=k+(T^E^S)+R[8]+2272392833&4294967295,k=T+(A<<11&4294967295|A>>>21),A=S+(k^T^E)+R[11]+1839030562&4294967295,S=k+(A<<16&4294967295|A>>>16),A=E+(S^k^T)+R[14]+4259657740&4294967295,E=S+(A<<23&4294967295|A>>>9),A=T+(E^S^k)+R[1]+2763975236&4294967295,T=E+(A<<4&4294967295|A>>>28),A=k+(T^E^S)+R[4]+1272893353&4294967295,k=T+(A<<11&4294967295|A>>>21),A=S+(k^T^E)+R[7]+4139469664&4294967295,S=k+(A<<16&4294967295|A>>>16),A=E+(S^k^T)+R[10]+3200236656&4294967295,E=S+(A<<23&4294967295|A>>>9),A=T+(E^S^k)+R[13]+681279174&4294967295,T=E+(A<<4&4294967295|A>>>28),A=k+(T^E^S)+R[0]+3936430074&4294967295,k=T+(A<<11&4294967295|A>>>21),A=S+(k^T^E)+R[3]+3572445317&4294967295,S=k+(A<<16&4294967295|A>>>16),A=E+(S^k^T)+R[6]+76029189&4294967295,E=S+(A<<23&4294967295|A>>>9),A=T+(E^S^k)+R[9]+3654602809&4294967295,T=E+(A<<4&4294967295|A>>>28),A=k+(T^E^S)+R[12]+3873151461&4294967295,k=T+(A<<11&4294967295|A>>>21),A=S+(k^T^E)+R[15]+530742520&4294967295,S=k+(A<<16&4294967295|A>>>16),A=E+(S^k^T)+R[2]+3299628645&4294967295,E=S+(A<<23&4294967295|A>>>9),A=T+(S^(E|~k))+R[0]+4096336452&4294967295,T=E+(A<<6&4294967295|A>>>26),A=k+(E^(T|~S))+R[7]+1126891415&4294967295,k=T+(A<<10&4294967295|A>>>22),A=S+(T^(k|~E))+R[14]+2878612391&4294967295,S=k+(A<<15&4294967295|A>>>17),A=E+(k^(S|~T))+R[5]+4237533241&4294967295,E=S+(A<<21&4294967295|A>>>11),A=T+(S^(E|~k))+R[12]+1700485571&4294967295,T=E+(A<<6&4294967295|A>>>26),A=k+(E^(T|~S))+R[3]+2399980690&4294967295,k=T+(A<<10&4294967295|A>>>22),A=S+(T^(k|~E))+R[10]+4293915773&4294967295,S=k+(A<<15&4294967295|A>>>17),A=E+(k^(S|~T))+R[1]+2240044497&4294967295,E=S+(A<<21&4294967295|A>>>11),A=T+(S^(E|~k))+R[8]+1873313359&4294967295,T=E+(A<<6&4294967295|A>>>26),A=k+(E^(T|~S))+R[15]+4264355552&4294967295,k=T+(A<<10&4294967295|A>>>22),A=S+(T^(k|~E))+R[6]+2734768916&4294967295,S=k+(A<<15&4294967295|A>>>17),A=E+(k^(S|~T))+R[13]+1309151649&4294967295,E=S+(A<<21&4294967295|A>>>11),A=T+(S^(E|~k))+R[4]+4149444226&4294967295,T=E+(A<<6&4294967295|A>>>26),A=k+(E^(T|~S))+R[11]+3174756917&4294967295,k=T+(A<<10&4294967295|A>>>22),A=S+(T^(k|~E))+R[2]+718787259&4294967295,S=k+(A<<15&4294967295|A>>>17),A=E+(k^(S|~T))+R[9]+3951481745&4294967295,b.g[0]=b.g[0]+T&4294967295,b.g[1]=b.g[1]+(S+(A<<21&4294967295|A>>>11))&4294967295,b.g[2]=b.g[2]+S&4294967295,b.g[3]=b.g[3]+k&4294967295}r.prototype.u=function(b,T){T===void 0&&(T=b.length);for(var E=T-this.blockSize,R=this.B,S=this.h,k=0;k<T;){if(S==0)for(;k<=E;)i(this,b,k),k+=this.blockSize;if(typeof b=="string"){for(;k<T;)if(R[S++]=b.charCodeAt(k++),S==this.blockSize){i(this,R),S=0;break}}else for(;k<T;)if(R[S++]=b[k++],S==this.blockSize){i(this,R),S=0;break}}this.h=S,this.o+=T},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var T=1;T<b.length-8;++T)b[T]=0;var E=8*this.o;for(T=b.length-8;T<b.length;++T)b[T]=E&255,E/=256;for(this.u(b),b=Array(16),T=E=0;4>T;++T)for(var R=0;32>R;R+=8)b[E++]=this.g[T]>>>R&255;return b};function s(b,T){var E=c;return Object.prototype.hasOwnProperty.call(E,b)?E[b]:E[b]=T(b)}function a(b,T){this.h=T;for(var E=[],R=!0,S=b.length-1;0<=S;S--){var k=b[S]|0;R&&k==T||(E[S]=k,R=!1)}this.g=E}var c={};function l(b){return-128<=b&&128>b?s(b,function(T){return new a([T|0],0>T?-1:0)}):new a([b|0],0>b?-1:0)}function f(b){if(isNaN(b)||!isFinite(b))return u;if(0>b)return v(f(-b));for(var T=[],E=1,R=0;b>=E;R++)T[R]=b/E|0,E*=4294967296;return new a(T,0)}function m(b,T){if(b.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(b.charAt(0)=="-")return v(m(b.substring(1),T));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=f(Math.pow(T,8)),R=u,S=0;S<b.length;S+=8){var k=Math.min(8,b.length-S),A=parseInt(b.substring(S,S+k),T);8>k?(k=f(Math.pow(T,k)),R=R.j(k).add(f(A))):(R=R.j(E),R=R.add(f(A)))}return R}var u=l(0),h=l(1),_=l(16777216);n=a.prototype,n.m=function(){if(I(this))return-v(this).m();for(var b=0,T=1,E=0;E<this.g.length;E++){var R=this.i(E);b+=(0<=R?R:4294967296+R)*T,T*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(y(this))return"0";if(I(this))return"-"+v(this).toString(b);for(var T=f(Math.pow(b,6)),E=this,R="";;){var S=x(E,T).g;E=w(E,S.j(T));var k=((0<E.g.length?E.g[0]:E.h)>>>0).toString(b);if(E=S,y(E))return k+R;for(;6>k.length;)k="0"+k;R=k+R}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function y(b){if(b.h!=0)return!1;for(var T=0;T<b.g.length;T++)if(b.g[T]!=0)return!1;return!0}function I(b){return b.h==-1}n.l=function(b){return b=w(this,b),I(b)?-1:y(b)?0:1};function v(b){for(var T=b.g.length,E=[],R=0;R<T;R++)E[R]=~b.g[R];return new a(E,~b.h).add(h)}n.abs=function(){return I(this)?v(this):this},n.add=function(b){for(var T=Math.max(this.g.length,b.g.length),E=[],R=0,S=0;S<=T;S++){var k=R+(this.i(S)&65535)+(b.i(S)&65535),A=(k>>>16)+(this.i(S)>>>16)+(b.i(S)>>>16);R=A>>>16,k&=65535,A&=65535,E[S]=A<<16|k}return new a(E,E[E.length-1]&-2147483648?-1:0)};function w(b,T){return b.add(v(T))}n.j=function(b){if(y(this)||y(b))return u;if(I(this))return I(b)?v(this).j(v(b)):v(v(this).j(b));if(I(b))return v(this.j(v(b)));if(0>this.l(_)&&0>b.l(_))return f(this.m()*b.m());for(var T=this.g.length+b.g.length,E=[],R=0;R<2*T;R++)E[R]=0;for(R=0;R<this.g.length;R++)for(var S=0;S<b.g.length;S++){var k=this.i(R)>>>16,A=this.i(R)&65535,me=b.i(S)>>>16,_t=b.i(S)&65535;E[2*R+2*S]+=A*_t,P(E,2*R+2*S),E[2*R+2*S+1]+=k*_t,P(E,2*R+2*S+1),E[2*R+2*S+1]+=A*me,P(E,2*R+2*S+1),E[2*R+2*S+2]+=k*me,P(E,2*R+2*S+2)}for(R=0;R<T;R++)E[R]=E[2*R+1]<<16|E[2*R];for(R=T;R<2*T;R++)E[R]=0;return new a(E,0)};function P(b,T){for(;(b[T]&65535)!=b[T];)b[T+1]+=b[T]>>>16,b[T]&=65535,T++}function V(b,T){this.g=b,this.h=T}function x(b,T){if(y(T))throw Error("division by zero");if(y(b))return new V(u,u);if(I(b))return T=x(v(b),T),new V(v(T.g),v(T.h));if(I(T))return T=x(b,v(T)),new V(v(T.g),T.h);if(30<b.g.length){if(I(b)||I(T))throw Error("slowDivide_ only works with positive integers.");for(var E=h,R=T;0>=R.l(b);)E=F(E),R=F(R);var S=q(E,1),k=q(R,1);for(R=q(R,2),E=q(E,2);!y(R);){var A=k.add(R);0>=A.l(b)&&(S=S.add(E),k=A),R=q(R,1),E=q(E,1)}return T=w(b,S.j(T)),new V(S,T)}for(S=u;0<=b.l(T);){for(E=Math.max(1,Math.floor(b.m()/T.m())),R=Math.ceil(Math.log(E)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),k=f(E),A=k.j(T);I(A)||0<A.l(b);)E-=R,k=f(E),A=k.j(T);y(k)&&(k=h),S=S.add(k),b=w(b,A)}return new V(S,b)}n.A=function(b){return x(this,b).h},n.and=function(b){for(var T=Math.max(this.g.length,b.g.length),E=[],R=0;R<T;R++)E[R]=this.i(R)&b.i(R);return new a(E,this.h&b.h)},n.or=function(b){for(var T=Math.max(this.g.length,b.g.length),E=[],R=0;R<T;R++)E[R]=this.i(R)|b.i(R);return new a(E,this.h|b.h)},n.xor=function(b){for(var T=Math.max(this.g.length,b.g.length),E=[],R=0;R<T;R++)E[R]=this.i(R)^b.i(R);return new a(E,this.h^b.h)};function F(b){for(var T=b.g.length+1,E=[],R=0;R<T;R++)E[R]=b.i(R)<<1|b.i(R-1)>>>31;return new a(E,b.h)}function q(b,T){var E=T>>5;T%=32;for(var R=b.g.length-E,S=[],k=0;k<R;k++)S[k]=0<T?b.i(k+E)>>>T|b.i(k+E+1)<<32-T:b.i(k+E);return new a(S,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,pd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,_n=a}).apply(typeof il<"u"?il:typeof self<"u"?self:typeof window<"u"?window:{});var $i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _d,Fr,md,es,pa,gd,yd,vd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,d,p){return o==Array.prototype||o==Object.prototype||(o[d]=p.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof $i=="object"&&$i];for(var d=0;d<o.length;++d){var p=o[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function i(o,d){if(d)e:{var p=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var C=o[g];if(!(C in p))break e;p=p[C]}o=o[o.length-1],g=p[o],d=d(g),d!=g&&d!=null&&e(p,o,{configurable:!0,writable:!0,value:d})}}function s(o,d){o instanceof String&&(o+="");var p=0,g=!1,C={next:function(){if(!g&&p<o.length){var D=p++;return{value:d(D,o[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(o){return o||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var d=typeof o;return d=d!="object"?d:o?Array.isArray(o)?"array":d:"null",d=="array"||d=="object"&&typeof o.length=="number"}function f(o){var d=typeof o;return d=="object"&&o!=null||d=="function"}function m(o,d,p){return o.call.apply(o.bind,arguments)}function u(o,d,p){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),o.apply(d,C)}}return function(){return o.apply(d,arguments)}}function h(o,d,p){return h=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:u,h.apply(null,arguments)}function _(o,d){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function y(o,d){function p(){}p.prototype=d.prototype,o.aa=d.prototype,o.prototype=new p,o.prototype.constructor=o,o.Qb=function(g,C,D){for(var M=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)M[ne-2]=arguments[ne];return d.prototype[C].apply(g,M)}}function I(o){const d=o.length;if(0<d){const p=Array(d);for(let g=0;g<d;g++)p[g]=o[g];return p}return[]}function v(o,d){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(l(g)){const C=o.length||0,D=g.length||0;o.length=C+D;for(let M=0;M<D;M++)o[C+M]=g[M]}else o.push(g)}}class w{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function P(o){return/^[\s\xa0]*$/.test(o)}function V(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function x(o){return x[" "](o),o}x[" "]=function(){};var F=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function q(o,d,p){for(const g in o)d.call(p,o[g],g,o)}function b(o,d){for(const p in o)d.call(void 0,o[p],p,o)}function T(o){const d={};for(const p in o)d[p]=o[p];return d}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(o,d){let p,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(p in g)o[p]=g[p];for(let D=0;D<E.length;D++)p=E[D],Object.prototype.hasOwnProperty.call(g,p)&&(o[p]=g[p])}}function S(o){var d=1;o=o.split(":");const p=[];for(;0<d&&o.length;)p.push(o.shift()),d--;return o.length&&p.push(o.join(":")),p}function k(o){c.setTimeout(()=>{throw o},0)}function A(){var o=Er;let d=null;return o.g&&(d=o.g,o.g=o.g.next,o.g||(o.h=null),d.next=null),d}class me{constructor(){this.h=this.g=null}add(d,p){const g=_t.get();g.set(d,p),this.h?this.h.next=g:this.g=g,this.h=g}}var _t=new w(()=>new wi,o=>o.reset());class wi{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let en,Dt=!1,Er=new me,Ei=()=>{const o=c.Promise.resolve(void 0);en=()=>{o.then(U)}};var U=()=>{for(var o;o=A();){try{o.h.call(o.g)}catch(p){k(p)}var d=_t;d.j(o),100>d.h&&(d.h++,o.next=d.g,d.g=o)}Dt=!1};function te(){this.s=this.s,this.C=this.C}te.prototype.s=!1,te.prototype.ma=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(o,d){this.type=o,this.g=this.target=d,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var mt=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,d=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const p=()=>{};c.addEventListener("test",p,d),c.removeEventListener("test",p,d)}catch{}return o}();function Fe(o,d){if(se.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var p=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=d,d=o.relatedTarget){if(F){e:{try{x(d.nodeName);var C=!0;break e}catch{}C=!1}C||(d=null)}}else p=="mouseover"?d=o.fromElement:p=="mouseout"&&(d=o.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ze[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Fe.aa.h.call(this)}}y(Fe,se);var ze={2:"touch",3:"pen",4:"mouse"};Fe.prototype.h=function(){Fe.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var rt="closure_listenable_"+(1e6*Math.random()|0),po=0;function Ii(o,d,p,g,C){this.listener=o,this.proxy=null,this.src=d,this.type=p,this.capture=!!g,this.ha=C,this.key=++po,this.da=this.fa=!1}function W(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function We(o){this.src=o,this.g={},this.h=0}We.prototype.add=function(o,d,p,g,C){var D=o.toString();o=this.g[D],o||(o=this.g[D]=[],this.h++);var M=Ir(o,d,g,C);return-1<M?(d=o[M],p||(d.fa=!1)):(d=new Ii(d,this.src,D,!!g,C),d.fa=p,o.push(d)),d};function Pn(o,d){var p=d.type;if(p in o.g){var g=o.g[p],C=Array.prototype.indexOf.call(g,d,void 0),D;(D=0<=C)&&Array.prototype.splice.call(g,C,1),D&&(W(d),o.g[p].length==0&&(delete o.g[p],o.h--))}}function Ir(o,d,p,g){for(var C=0;C<o.length;++C){var D=o[C];if(!D.da&&D.listener==d&&D.capture==!!p&&D.ha==g)return C}return-1}var tn="closure_lm_"+(1e6*Math.random()|0),_o={};function Uu(o,d,p,g,C){if(Array.isArray(d)){for(var D=0;D<d.length;D++)Uu(o,d[D],p,g,C);return null}return p=ju(p),o&&o[rt]?o.K(d,p,f(g)?!!g.capture:!!g,C):Fp(o,d,p,!1,g,C)}function Fp(o,d,p,g,C,D){if(!d)throw Error("Invalid event type");var M=f(C)?!!C.capture:!!C,ne=go(o);if(ne||(o[tn]=ne=new We(o)),p=ne.add(d,p,g,M,D),p.proxy)return p;if(g=Up(),p.proxy=g,g.src=o,g.listener=p,o.addEventListener)mt||(C=M),C===void 0&&(C=!1),o.addEventListener(d.toString(),g,C);else if(o.attachEvent)o.attachEvent(qu(d.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Up(){function o(p){return d.call(o.src,o.listener,p)}const d=Bp;return o}function Bu(o,d,p,g,C){if(Array.isArray(d))for(var D=0;D<d.length;D++)Bu(o,d[D],p,g,C);else g=f(g)?!!g.capture:!!g,p=ju(p),o&&o[rt]?(o=o.i,d=String(d).toString(),d in o.g&&(D=o.g[d],p=Ir(D,p,g,C),-1<p&&(W(D[p]),Array.prototype.splice.call(D,p,1),D.length==0&&(delete o.g[d],o.h--)))):o&&(o=go(o))&&(d=o.g[d.toString()],o=-1,d&&(o=Ir(d,p,g,C)),(p=-1<o?d[o]:null)&&mo(p))}function mo(o){if(typeof o!="number"&&o&&!o.da){var d=o.src;if(d&&d[rt])Pn(d.i,o);else{var p=o.type,g=o.proxy;d.removeEventListener?d.removeEventListener(p,g,o.capture):d.detachEvent?d.detachEvent(qu(p),g):d.addListener&&d.removeListener&&d.removeListener(g),(p=go(d))?(Pn(p,o),p.h==0&&(p.src=null,d[tn]=null)):W(o)}}}function qu(o){return o in _o?_o[o]:_o[o]="on"+o}function Bp(o,d){if(o.da)o=!0;else{d=new Fe(d,this);var p=o.listener,g=o.ha||o.src;o.fa&&mo(o),o=p.call(g,d)}return o}function go(o){return o=o[tn],o instanceof We?o:null}var yo="__closure_events_fn_"+(1e9*Math.random()>>>0);function ju(o){return typeof o=="function"?o:(o[yo]||(o[yo]=function(d){return o.handleEvent(d)}),o[yo])}function Ee(){te.call(this),this.i=new We(this),this.M=this,this.F=null}y(Ee,te),Ee.prototype[rt]=!0,Ee.prototype.removeEventListener=function(o,d,p,g){Bu(this,o,d,p,g)};function De(o,d){var p,g=o.F;if(g)for(p=[];g;g=g.F)p.push(g);if(o=o.M,g=d.type||d,typeof d=="string")d=new se(d,o);else if(d instanceof se)d.target=d.target||o;else{var C=d;d=new se(g,o),R(d,C)}if(C=!0,p)for(var D=p.length-1;0<=D;D--){var M=d.g=p[D];C=Ai(M,g,!0,d)&&C}if(M=d.g=o,C=Ai(M,g,!0,d)&&C,C=Ai(M,g,!1,d)&&C,p)for(D=0;D<p.length;D++)M=d.g=p[D],C=Ai(M,g,!1,d)&&C}Ee.prototype.N=function(){if(Ee.aa.N.call(this),this.i){var o=this.i,d;for(d in o.g){for(var p=o.g[d],g=0;g<p.length;g++)W(p[g]);delete o.g[d],o.h--}}this.F=null},Ee.prototype.K=function(o,d,p,g){return this.i.add(String(o),d,!1,p,g)},Ee.prototype.L=function(o,d,p,g){return this.i.add(String(o),d,!0,p,g)};function Ai(o,d,p,g){if(d=o.i.g[String(d)],!d)return!0;d=d.concat();for(var C=!0,D=0;D<d.length;++D){var M=d[D];if(M&&!M.da&&M.capture==p){var ne=M.listener,ye=M.ha||M.src;M.fa&&Pn(o.i,M),C=ne.call(ye,g)!==!1&&C}}return C&&!g.defaultPrevented}function $u(o,d,p){if(typeof o=="function")p&&(o=h(o,p));else if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(o,d||0)}function Hu(o){o.g=$u(()=>{o.g=null,o.i&&(o.i=!1,Hu(o))},o.l);const d=o.h;o.h=null,o.m.apply(null,d)}class qp extends te{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Hu(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ar(o){te.call(this),this.h=o,this.g={}}y(Ar,te);var Gu=[];function zu(o){q(o.g,function(d,p){this.g.hasOwnProperty(p)&&mo(d)},o),o.g={}}Ar.prototype.N=function(){Ar.aa.N.call(this),zu(this)},Ar.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vo=c.JSON.stringify,jp=c.JSON.parse,$p=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function To(){}To.prototype.h=null;function Wu(o){return o.h||(o.h=o.i())}function Ku(){}var br={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wo(){se.call(this,"d")}y(wo,se);function Eo(){se.call(this,"c")}y(Eo,se);var nn={},Qu=null;function bi(){return Qu=Qu||new Ee}nn.La="serverreachability";function Xu(o){se.call(this,nn.La,o)}y(Xu,se);function Rr(o){const d=bi();De(d,new Xu(d))}nn.STAT_EVENT="statevent";function Yu(o,d){se.call(this,nn.STAT_EVENT,o),this.stat=d}y(Yu,se);function Ve(o){const d=bi();De(d,new Yu(d,o))}nn.Ma="timingevent";function Ju(o,d){se.call(this,nn.Ma,o),this.size=d}y(Ju,se);function Sr(o,d){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},d)}function Pr(){this.g=!0}Pr.prototype.xa=function(){this.g=!1};function Hp(o,d,p,g,C,D){o.info(function(){if(o.g)if(D)for(var M="",ne=D.split("&"),ye=0;ye<ne.length;ye++){var Z=ne[ye].split("=");if(1<Z.length){var Ie=Z[0];Z=Z[1];var Ae=Ie.split("_");M=2<=Ae.length&&Ae[1]=="type"?M+(Ie+"="+Z+"&"):M+(Ie+"=redacted&")}}else M=null;else M=D;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+d+`
`+p+`
`+M})}function Gp(o,d,p,g,C,D,M){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+d+`
`+p+`
`+D+" "+M})}function Cn(o,d,p,g){o.info(function(){return"XMLHTTP TEXT ("+d+"): "+Wp(o,p)+(g?" "+g:"")})}function zp(o,d){o.info(function(){return"TIMEOUT: "+d})}Pr.prototype.info=function(){};function Wp(o,d){if(!o.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(o=0;o<p.length;o++)if(Array.isArray(p[o])){var g=p[o];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var D=C[0];if(D!="noop"&&D!="stop"&&D!="close")for(var M=1;M<C.length;M++)C[M]=""}}}}return vo(p)}catch{return d}}var Ri={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Zu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Io;function Si(){}y(Si,To),Si.prototype.g=function(){return new XMLHttpRequest},Si.prototype.i=function(){return{}},Io=new Si;function Vt(o,d,p,g){this.j=o,this.i=d,this.l=p,this.R=g||1,this.U=new Ar(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ec}function ec(){this.i=null,this.g="",this.h=!1}var tc={},Ao={};function bo(o,d,p){o.L=1,o.v=Di(gt(d)),o.m=p,o.P=!0,nc(o,null)}function nc(o,d){o.F=Date.now(),Pi(o),o.A=gt(o.v);var p=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),mc(p.i,"t",g),o.C=0,p=o.j.J,o.h=new ec,o.g=Oc(o.j,p?d:null,!o.m),0<o.O&&(o.M=new qp(h(o.Y,o,o.g),o.O)),d=o.U,p=o.g,g=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(Gu[0]=C.toString()),C=Gu);for(var D=0;D<C.length;D++){var M=Uu(p,C[D],g||d.handleEvent,!1,d.h||d);if(!M)break;d.g[M.key]=M}d=o.H?T(o.H):{},o.m?(o.u||(o.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,d)):(o.u="GET",o.g.ea(o.A,o.u,null,d)),Rr(),Hp(o.i,o.u,o.A,o.l,o.R,o.m)}Vt.prototype.ca=function(o){o=o.target;const d=this.M;d&&yt(o)==3?d.j():this.Y(o)},Vt.prototype.Y=function(o){try{if(o==this.g)e:{const Ae=yt(this.g);var d=this.g.Ba();const Vn=this.g.Z();if(!(3>Ae)&&(Ae!=3||this.g&&(this.h.h||this.g.oa()||Ic(this.g)))){this.J||Ae!=4||d==7||(d==8||0>=Vn?Rr(3):Rr(2)),Ro(this);var p=this.g.Z();this.X=p;t:if(rc(this)){var g=Ic(this.g);o="";var C=g.length,D=yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rn(this),Cr(this);var M="";break t}this.h.i=new c.TextDecoder}for(d=0;d<C;d++)this.h.h=!0,o+=this.h.i.decode(g[d],{stream:!(D&&d==C-1)});g.length=0,this.h.g+=o,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=p==200,Gp(this.i,this.u,this.A,this.l,this.R,Ae,p),this.o){if(this.T&&!this.K){t:{if(this.g){var ne,ye=this.g;if((ne=ye.g?ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(ne)){var Z=ne;break t}}Z=null}if(p=Z)Cn(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,So(this,p);else{this.o=!1,this.s=3,Ve(12),rn(this),Cr(this);break e}}if(this.P){p=!0;let Ke;for(;!this.J&&this.C<M.length;)if(Ke=Kp(this,M),Ke==Ao){Ae==4&&(this.s=4,Ve(14),p=!1),Cn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ke==tc){this.s=4,Ve(15),Cn(this.i,this.l,M,"[Invalid Chunk]"),p=!1;break}else Cn(this.i,this.l,Ke,null),So(this,Ke);if(rc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||M.length!=0||this.h.h||(this.s=1,Ve(16),p=!1),this.o=this.o&&p,!p)Cn(this.i,this.l,M,"[Invalid Chunked Response]"),rn(this),Cr(this);else if(0<M.length&&!this.W){this.W=!0;var Ie=this.j;Ie.g==this&&Ie.ba&&!Ie.M&&(Ie.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),No(Ie),Ie.M=!0,Ve(11))}}else Cn(this.i,this.l,M,null),So(this,M);Ae==4&&rn(this),this.o&&!this.J&&(Ae==4?kc(this.j,this):(this.o=!1,Pi(this)))}else h_(this.g),p==400&&0<M.indexOf("Unknown SID")?(this.s=3,Ve(12)):(this.s=0,Ve(13)),rn(this),Cr(this)}}}catch{}finally{}};function rc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Kp(o,d){var p=o.C,g=d.indexOf(`
`,p);return g==-1?Ao:(p=Number(d.substring(p,g)),isNaN(p)?tc:(g+=1,g+p>d.length?Ao:(d=d.slice(g,g+p),o.C=g+p,d)))}Vt.prototype.cancel=function(){this.J=!0,rn(this)};function Pi(o){o.S=Date.now()+o.I,ic(o,o.I)}function ic(o,d){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Sr(h(o.ba,o),d)}function Ro(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Vt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(zp(this.i,this.A),this.L!=2&&(Rr(),Ve(17)),rn(this),this.s=2,Cr(this)):ic(this,this.S-o)};function Cr(o){o.j.G==0||o.J||kc(o.j,o)}function rn(o){Ro(o);var d=o.M;d&&typeof d.ma=="function"&&d.ma(),o.M=null,zu(o.U),o.g&&(d=o.g,o.g=null,d.abort(),d.ma())}function So(o,d){try{var p=o.j;if(p.G!=0&&(p.g==o||Po(p.h,o))){if(!o.K&&Po(p.h,o)&&p.G==3){try{var g=p.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<o.F)Li(p),xi(p);else break e;Vo(p),Ve(18)}}else p.za=C[1],0<p.za-p.T&&37500>C[2]&&p.F&&p.v==0&&!p.C&&(p.C=Sr(h(p.Za,p),6e3));if(1>=ac(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else on(p,11)}else if((o.K||p.g==o)&&Li(p),!P(d))for(C=p.Da.g.parse(d),d=0;d<C.length;d++){let Z=C[d];if(p.T=Z[0],Z=Z[1],p.G==2)if(Z[0]=="c"){p.K=Z[1],p.ia=Z[2];const Ie=Z[3];Ie!=null&&(p.la=Ie,p.j.info("VER="+p.la));const Ae=Z[4];Ae!=null&&(p.Aa=Ae,p.j.info("SVER="+p.Aa));const Vn=Z[5];Vn!=null&&typeof Vn=="number"&&0<Vn&&(g=1.5*Vn,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const Ke=o.g;if(Ke){const Ui=Ke.g?Ke.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ui){var D=g.h;D.g||Ui.indexOf("spdy")==-1&&Ui.indexOf("quic")==-1&&Ui.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Co(D,D.h),D.h=null))}if(g.D){const Oo=Ke.g?Ke.g.getResponseHeader("X-HTTP-Session-Id"):null;Oo&&(g.ya=Oo,oe(g.I,g.D,Oo))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-o.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var M=o;if(g.qa=Nc(g,g.J?g.ia:null,g.W),M.K){uc(g.h,M);var ne=M,ye=g.L;ye&&(ne.I=ye),ne.B&&(Ro(ne),Pi(ne)),g.g=M}else Pc(g);0<p.i.length&&Mi(p)}else Z[0]!="stop"&&Z[0]!="close"||on(p,7);else p.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?on(p,7):Do(p):Z[0]!="noop"&&p.l&&p.l.ta(Z),p.v=0)}}Rr(4)}catch{}}var Qp=class{constructor(o,d){this.g=o,this.map=d}};function sc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function oc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ac(o){return o.h?1:o.g?o.g.size:0}function Po(o,d){return o.h?o.h==d:o.g?o.g.has(d):!1}function Co(o,d){o.g?o.g.add(d):o.h=d}function uc(o,d){o.h&&o.h==d?o.h=null:o.g&&o.g.has(d)&&o.g.delete(d)}sc.prototype.cancel=function(){if(this.i=cc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function cc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let d=o.i;for(const p of o.g.values())d=d.concat(p.D);return d}return I(o.i)}function Xp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var d=[],p=o.length,g=0;g<p;g++)d.push(o[g]);return d}d=[],p=0;for(g in o)d[p++]=o[g];return d}function Yp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var d=[];o=o.length;for(var p=0;p<o;p++)d.push(p);return d}d=[],p=0;for(const g in o)d[p++]=g;return d}}}function lc(o,d){if(o.forEach&&typeof o.forEach=="function")o.forEach(d,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,d,void 0);else for(var p=Yp(o),g=Xp(o),C=g.length,D=0;D<C;D++)d.call(void 0,g[D],p&&p[D],o)}var hc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jp(o,d){if(o){o=o.split("&");for(var p=0;p<o.length;p++){var g=o[p].indexOf("="),C=null;if(0<=g){var D=o[p].substring(0,g);C=o[p].substring(g+1)}else D=o[p];d(D,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function sn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof sn){this.h=o.h,Ci(this,o.j),this.o=o.o,this.g=o.g,ki(this,o.s),this.l=o.l;var d=o.i,p=new Vr;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),dc(this,p),this.m=o.m}else o&&(d=String(o).match(hc))?(this.h=!1,Ci(this,d[1]||"",!0),this.o=kr(d[2]||""),this.g=kr(d[3]||"",!0),ki(this,d[4]),this.l=kr(d[5]||"",!0),dc(this,d[6]||"",!0),this.m=kr(d[7]||"")):(this.h=!1,this.i=new Vr(null,this.h))}sn.prototype.toString=function(){var o=[],d=this.j;d&&o.push(Dr(d,fc,!0),":");var p=this.g;return(p||d=="file")&&(o.push("//"),(d=this.o)&&o.push(Dr(d,fc,!0),"@"),o.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&o.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&o.push("/"),o.push(Dr(p,p.charAt(0)=="/"?t_:e_,!0))),(p=this.i.toString())&&o.push("?",p),(p=this.m)&&o.push("#",Dr(p,r_)),o.join("")};function gt(o){return new sn(o)}function Ci(o,d,p){o.j=p?kr(d,!0):d,o.j&&(o.j=o.j.replace(/:$/,""))}function ki(o,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);o.s=d}else o.s=null}function dc(o,d,p){d instanceof Vr?(o.i=d,i_(o.i,o.h)):(p||(d=Dr(d,n_)),o.i=new Vr(d,o.h))}function oe(o,d,p){o.i.set(d,p)}function Di(o){return oe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function kr(o,d){return o?d?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Dr(o,d,p){return typeof o=="string"?(o=encodeURI(o).replace(d,Zp),p&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Zp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var fc=/[#\/\?@]/g,e_=/[#\?:]/g,t_=/[#\?]/g,n_=/[#\?@]/g,r_=/#/g;function Vr(o,d){this.h=this.g=null,this.i=o||null,this.j=!!d}function Nt(o){o.g||(o.g=new Map,o.h=0,o.i&&Jp(o.i,function(d,p){o.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}n=Vr.prototype,n.add=function(o,d){Nt(this),this.i=null,o=kn(this,o);var p=this.g.get(o);return p||this.g.set(o,p=[]),p.push(d),this.h+=1,this};function pc(o,d){Nt(o),d=kn(o,d),o.g.has(d)&&(o.i=null,o.h-=o.g.get(d).length,o.g.delete(d))}function _c(o,d){return Nt(o),d=kn(o,d),o.g.has(d)}n.forEach=function(o,d){Nt(this),this.g.forEach(function(p,g){p.forEach(function(C){o.call(d,C,g,this)},this)},this)},n.na=function(){Nt(this);const o=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let g=0;g<d.length;g++){const C=o[g];for(let D=0;D<C.length;D++)p.push(d[g])}return p},n.V=function(o){Nt(this);let d=[];if(typeof o=="string")_c(this,o)&&(d=d.concat(this.g.get(kn(this,o))));else{o=Array.from(this.g.values());for(let p=0;p<o.length;p++)d=d.concat(o[p])}return d},n.set=function(o,d){return Nt(this),this.i=null,o=kn(this,o),_c(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[d]),this.h+=1,this},n.get=function(o,d){return o?(o=this.V(o),0<o.length?String(o[0]):d):d};function mc(o,d,p){pc(o,d),0<p.length&&(o.i=null,o.g.set(kn(o,d),I(p)),o.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var g=d[p];const D=encodeURIComponent(String(g)),M=this.V(g);for(g=0;g<M.length;g++){var C=D;M[g]!==""&&(C+="="+encodeURIComponent(String(M[g]))),o.push(C)}}return this.i=o.join("&")};function kn(o,d){return d=String(d),o.j&&(d=d.toLowerCase()),d}function i_(o,d){d&&!o.j&&(Nt(o),o.i=null,o.g.forEach(function(p,g){var C=g.toLowerCase();g!=C&&(pc(this,g),mc(this,C,p))},o)),o.j=d}function s_(o,d){const p=new Pr;if(c.Image){const g=new Image;g.onload=_(Ot,p,"TestLoadImage: loaded",!0,d,g),g.onerror=_(Ot,p,"TestLoadImage: error",!1,d,g),g.onabort=_(Ot,p,"TestLoadImage: abort",!1,d,g),g.ontimeout=_(Ot,p,"TestLoadImage: timeout",!1,d,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else d(!1)}function o_(o,d){const p=new Pr,g=new AbortController,C=setTimeout(()=>{g.abort(),Ot(p,"TestPingServer: timeout",!1,d)},1e4);fetch(o,{signal:g.signal}).then(D=>{clearTimeout(C),D.ok?Ot(p,"TestPingServer: ok",!0,d):Ot(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(C),Ot(p,"TestPingServer: error",!1,d)})}function Ot(o,d,p,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(p)}catch{}}function a_(){this.g=new $p}function u_(o,d,p){const g=p||"";try{lc(o,function(C,D){let M=C;f(C)&&(M=vo(C)),d.push(g+D+"="+encodeURIComponent(M))})}catch(C){throw d.push(g+"type="+encodeURIComponent("_badmap")),C}}function Vi(o){this.l=o.Ub||null,this.j=o.eb||!1}y(Vi,To),Vi.prototype.g=function(){return new Ni(this.l,this.j)},Vi.prototype.i=function(o){return function(){return o}}({});function Ni(o,d){Ee.call(this),this.D=o,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(Ni,Ee),n=Ni.prototype,n.open=function(o,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=d,this.readyState=1,Or(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(d.body=o),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Or(this)),this.g&&(this.readyState=3,Or(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function gc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var d=o.value?o.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!o.done}))&&(this.response=this.responseText+=d)}o.done?Nr(this):Or(this),this.readyState==3&&gc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Nr(this))},n.Qa=function(o){this.g&&(this.response=o,Nr(this))},n.ga=function(){this.g&&Nr(this)};function Nr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Or(o)}n.setRequestHeader=function(o,d){this.u.append(o,d)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,o.push(p[0]+": "+p[1]),p=d.next();return o.join(`\r
`)};function Or(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ni.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function yc(o){let d="";return q(o,function(p,g){d+=g,d+=":",d+=p,d+=`\r
`}),d}function ko(o,d,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=yc(p),typeof o=="string"?p!=null&&encodeURIComponent(String(p)):oe(o,d,p))}function ce(o){Ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(ce,Ee);var c_=/^https?$/i,l_=["POST","PUT"];n=ce.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,d,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);d=d?d.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Io.g(),this.v=this.o?Wu(this.o):Wu(Io),this.g.onreadystatechange=h(this.Ea,this);try{this.B=!0,this.g.open(d,String(o),!0),this.B=!1}catch(D){vc(this,D);return}if(o=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)p.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())p.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),C=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(l_,d,void 0))||g||C||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,M]of p)this.g.setRequestHeader(D,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ec(this),this.u=!0,this.g.send(o),this.u=!1}catch(D){vc(this,D)}};function vc(o,d){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=d,o.m=5,Tc(o),Oi(o)}function Tc(o){o.A||(o.A=!0,De(o,"complete"),De(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,De(this,"complete"),De(this,"abort"),Oi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Oi(this,!0)),ce.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?wc(this):this.bb())},n.bb=function(){wc(this)};function wc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||yt(o)!=4||o.Z()!=2)){if(o.u&&yt(o)==4)$u(o.Ea,0,o);else if(De(o,"readystatechange"),yt(o)==4){o.h=!1;try{const M=o.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var g;if(g=M===0){var C=String(o.D).match(hc)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),g=!c_.test(C?C.toLowerCase():"")}p=g}if(p)De(o,"complete"),De(o,"success");else{o.m=6;try{var D=2<yt(o)?o.g.statusText:""}catch{D=""}o.l=D+" ["+o.Z()+"]",Tc(o)}}finally{Oi(o)}}}}function Oi(o,d){if(o.g){Ec(o);const p=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,d||De(o,"ready");try{p.onreadystatechange=g}catch{}}}function Ec(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function yt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<yt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var d=this.g.responseText;return o&&d.indexOf(o)==0&&(d=d.substring(o.length)),jp(d)}};function Ic(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function h_(o){const d={};o=(o.g&&2<=yt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(P(o[g]))continue;var p=S(o[g]);const C=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=d[C]||[];d[C]=D,D.push(p)}b(d,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xr(o,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[o]||d}function Ac(o){this.Aa=0,this.i=[],this.j=new Pr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xr("baseRetryDelayMs",5e3,o),this.cb=xr("retryDelaySeedMs",1e4,o),this.Wa=xr("forwardChannelMaxRetries",2,o),this.wa=xr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new sc(o&&o.concurrentRequestLimit),this.Da=new a_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ac.prototype,n.la=8,n.G=1,n.connect=function(o,d,p,g){Ve(0),this.W=o,this.H=d||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=Nc(this,null,this.W),Mi(this)};function Do(o){if(bc(o),o.G==3){var d=o.U++,p=gt(o.I);if(oe(p,"SID",o.K),oe(p,"RID",d),oe(p,"TYPE","terminate"),Mr(o,p),d=new Vt(o,o.j,d),d.L=2,d.v=Di(gt(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=d.v,p=!0),p||(d.g=Oc(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Pi(d)}Vc(o)}function xi(o){o.g&&(No(o),o.g.cancel(),o.g=null)}function bc(o){xi(o),o.u&&(c.clearTimeout(o.u),o.u=null),Li(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Mi(o){if(!oc(o.h)&&!o.s){o.s=!0;var d=o.Ga;en||Ei(),Dt||(en(),Dt=!0),Er.add(d,o),o.B=0}}function d_(o,d){return ac(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=d.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Sr(h(o.Ga,o,d),Dc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new Vt(this,this.j,o);let D=this.o;if(this.S&&(D?(D=T(D),R(D,this.S)):D=this.S),this.m!==null||this.O||(C.H=D,D=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Sc(this,C,d),p=gt(this.I),oe(p,"RID",o),oe(p,"CVER",22),this.D&&oe(p,"X-HTTP-Session-Id",this.D),Mr(this,p),D&&(this.O?d="headers="+encodeURIComponent(String(yc(D)))+"&"+d:this.m&&ko(p,this.m,D)),Co(this.h,C),this.Ua&&oe(p,"TYPE","init"),this.P?(oe(p,"$req",d),oe(p,"SID","null"),C.T=!0,bo(C,p,null)):bo(C,p,d),this.G=2}}else this.G==3&&(o?Rc(this,o):this.i.length==0||oc(this.h)||Rc(this))};function Rc(o,d){var p;d?p=d.l:p=o.U++;const g=gt(o.I);oe(g,"SID",o.K),oe(g,"RID",p),oe(g,"AID",o.T),Mr(o,g),o.m&&o.o&&ko(g,o.m,o.o),p=new Vt(o,o.j,p,o.B+1),o.m===null&&(p.H=o.o),d&&(o.i=d.D.concat(o.i)),d=Sc(o,p,1e3),p.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Co(o.h,p),bo(p,g,d)}function Mr(o,d){o.H&&q(o.H,function(p,g){oe(d,g,p)}),o.l&&lc({},function(p,g){oe(d,g,p)})}function Sc(o,d,p){p=Math.min(o.i.length,p);var g=o.l?h(o.l.Na,o.l,o):null;e:{var C=o.i;let D=-1;for(;;){const M=["count="+p];D==-1?0<p?(D=C[0].g,M.push("ofs="+D)):D=0:M.push("ofs="+D);let ne=!0;for(let ye=0;ye<p;ye++){let Z=C[ye].g;const Ie=C[ye].map;if(Z-=D,0>Z)D=Math.max(0,C[ye].g-100),ne=!1;else try{u_(Ie,M,"req"+Z+"_")}catch{g&&g(Ie)}}if(ne){g=M.join("&");break e}}}return o=o.i.splice(0,p),d.D=o,g}function Pc(o){if(!o.g&&!o.u){o.Y=1;var d=o.Fa;en||Ei(),Dt||(en(),Dt=!0),Er.add(d,o),o.v=0}}function Vo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Sr(h(o.Fa,o),Dc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Cc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Sr(h(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ve(10),xi(this),Cc(this))};function No(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Cc(o){o.g=new Vt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var d=gt(o.qa);oe(d,"RID","rpc"),oe(d,"SID",o.K),oe(d,"AID",o.T),oe(d,"CI",o.F?"0":"1"),!o.F&&o.ja&&oe(d,"TO",o.ja),oe(d,"TYPE","xmlhttp"),Mr(o,d),o.m&&o.o&&ko(d,o.m,o.o),o.L&&(o.g.I=o.L);var p=o.g;o=o.ia,p.L=1,p.v=Di(gt(d)),p.m=null,p.P=!0,nc(p,o)}n.Za=function(){this.C!=null&&(this.C=null,xi(this),Vo(this),Ve(19))};function Li(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function kc(o,d){var p=null;if(o.g==d){Li(o),No(o),o.g=null;var g=2}else if(Po(o.h,d))p=d.D,uc(o.h,d),g=1;else return;if(o.G!=0){if(d.o)if(g==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var C=o.B;g=bi(),De(g,new Ju(g,p)),Mi(o)}else Pc(o);else if(C=d.s,C==3||C==0&&0<d.X||!(g==1&&d_(o,d)||g==2&&Vo(o)))switch(p&&0<p.length&&(d=o.h,d.i=d.i.concat(p)),C){case 1:on(o,5);break;case 4:on(o,10);break;case 3:on(o,6);break;default:on(o,2)}}}function Dc(o,d){let p=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(p*=2),p*d}function on(o,d){if(o.j.info("Error code "+d),d==2){var p=h(o.fb,o),g=o.Xa;const C=!g;g=new sn(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ci(g,"https"),Di(g),C?s_(g.toString(),p):o_(g.toString(),p)}else Ve(2);o.G=0,o.l&&o.l.sa(d),Vc(o),bc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ve(2)):(this.j.info("Failed to ping google.com"),Ve(1))};function Vc(o){if(o.G=0,o.ka=[],o.l){const d=cc(o.h);(d.length!=0||o.i.length!=0)&&(v(o.ka,d),v(o.ka,o.i),o.h.i.length=0,I(o.i),o.i.length=0),o.l.ra()}}function Nc(o,d,p){var g=p instanceof sn?gt(p):new sn(p);if(g.g!="")d&&(g.g=d+"."+g.g),ki(g,g.s);else{var C=c.location;g=C.protocol,d=d?d+"."+C.hostname:C.hostname,C=+C.port;var D=new sn(null);g&&Ci(D,g),d&&(D.g=d),C&&ki(D,C),p&&(D.l=p),g=D}return p=o.D,d=o.ya,p&&d&&oe(g,p,d),oe(g,"VER",o.la),Mr(o,g),g}function Oc(o,d,p){if(d&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=o.Ca&&!o.pa?new ce(new Vi({eb:p})):new ce(o.pa),d.Ha(o.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function xc(){}n=xc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Fi(){}Fi.prototype.g=function(o,d){return new Ue(o,d)};function Ue(o,d){Ee.call(this),this.g=new Ac(d),this.l=o,this.h=d&&d.messageUrlParams||null,o=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(o?o["X-WebChannel-Content-Type"]=d.messageContentType:o={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(o?o["X-WebChannel-Client-Profile"]=d.va:o={"X-WebChannel-Client-Profile":d.va}),this.g.S=o,(o=d&&d.Sb)&&!P(o)&&(this.g.m=o),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!P(d)&&(this.g.D=d,o=this.h,o!==null&&d in o&&(o=this.h,d in o&&delete o[d])),this.j=new Dn(this)}y(Ue,Ee),Ue.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ue.prototype.close=function(){Do(this.g)},Ue.prototype.o=function(o){var d=this.g;if(typeof o=="string"){var p={};p.__data__=o,o=p}else this.u&&(p={},p.__data__=vo(o),o=p);d.i.push(new Qp(d.Ya++,o)),d.G==3&&Mi(d)},Ue.prototype.N=function(){this.g.l=null,delete this.j,Do(this.g),delete this.g,Ue.aa.N.call(this)};function Mc(o){wo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var d=o.__sm__;if(d){e:{for(const p in d){o=p;break e}o=void 0}(this.i=o)&&(o=this.i,d=d!==null&&o in d?d[o]:void 0),this.data=d}else this.data=o}y(Mc,wo);function Lc(){Eo.call(this),this.status=1}y(Lc,Eo);function Dn(o){this.g=o}y(Dn,xc),Dn.prototype.ua=function(){De(this.g,"a")},Dn.prototype.ta=function(o){De(this.g,new Mc(o))},Dn.prototype.sa=function(o){De(this.g,new Lc)},Dn.prototype.ra=function(){De(this.g,"b")},Fi.prototype.createWebChannel=Fi.prototype.g,Ue.prototype.send=Ue.prototype.o,Ue.prototype.open=Ue.prototype.m,Ue.prototype.close=Ue.prototype.close,vd=function(){return new Fi},yd=function(){return bi()},gd=nn,pa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ri.NO_ERROR=0,Ri.TIMEOUT=8,Ri.HTTP_ERROR=6,es=Ri,Zu.COMPLETE="complete",md=Zu,Ku.EventType=br,br.OPEN="a",br.CLOSE="b",br.ERROR="c",br.MESSAGE="d",Ee.prototype.listen=Ee.prototype.K,Fr=Ku,ce.prototype.listenOnce=ce.prototype.L,ce.prototype.getLastError=ce.prototype.Ka,ce.prototype.getLastErrorCode=ce.prototype.Ba,ce.prototype.getStatus=ce.prototype.Z,ce.prototype.getResponseJson=ce.prototype.Oa,ce.prototype.getResponseText=ce.prototype.oa,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Ha,_d=ce}).apply(typeof $i<"u"?$i:typeof self<"u"?self:typeof window<"u"?window:{});const sl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pe.UNAUTHENTICATED=new Pe(null),Pe.GOOGLE_CREDENTIALS=new Pe("google-credentials-uid"),Pe.FIRST_PARTY=new Pe("first-party-uid"),Pe.MOCK_USER=new Pe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mr="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new Gs("@firebase/firestore");function Mn(){return gn.logLevel}function L(n,...e){if(gn.logLevel<=K.DEBUG){const t=e.map(Wa);gn.debug(`Firestore (${mr}): ${n}`,...t)}}function Pt(n,...e){if(gn.logLevel<=K.ERROR){const t=e.map(Wa);gn.error(`Firestore (${mr}): ${n}`,...t)}}function Jn(n,...e){if(gn.logLevel<=K.WARN){const t=e.map(Wa);gn.warn(`Firestore (${mr}): ${n}`,...t)}}function Wa(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(n="Unexpected state"){const e=`FIRESTORE (${mr}) INTERNAL ASSERTION FAILED: `+n;throw Pt(e),new Error(e)}function ee(n,e){n||$()}function G(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends nt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Pe.UNAUTHENTICATED))}shutdown(){}}class vy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Ty{constructor(e){this.t=e,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ee(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new bt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new bt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new bt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ee(typeof r.accessToken=="string"),new Td(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string"),new Pe(e)}}class wy{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Ey{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new wy(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Iy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ay{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ee(this.o===void 0);const r=s=>{s.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ee(typeof t.token=="string"),this.R=t.token,new Iy(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=by(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function X(n,e){return n<e?-1:n>e?1:0}function Zn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new pe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new B(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{static fromTimestamp(e){return new z(e)}static min(){return new z(new pe(0,0))}static max(){return new z(new pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t,r){t===void 0?t=0:t>e.length&&$(),r===void 0?r=e.length-t:r>e.length-t&&$(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ei.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ei?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ae extends ei{construct(e,t,r){return new ae(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ae(t)}static emptyPath(){return new ae([])}}const Ry=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Te extends ei{construct(e,t,r){return new Te(e,t,r)}static isValidIdentifier(e){return Ry.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Te.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Te(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new B(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new B(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Te(t)}static emptyPath(){return new Te([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(ae.fromString(e))}static fromName(e){return new j(ae.fromString(e).popFirst(5))}static empty(){return new j(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ae.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new ae(e.slice()))}}function Sy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new pe(t+1,0):new pe(t,r));return new Qt(i,j.empty(),e)}function Py(n){return new Qt(n.readTime,n.key,-1)}class Qt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Qt(z.min(),j.empty(),-1)}static max(){return new Qt(z.max(),j.empty(),-1)}}function Cy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(n.documentKey,e.documentKey),t!==0?t:X(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Dy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==ky)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,r)=>{t(e)})}static reject(e){return new N((t,r)=>{r(e)})}static waitFor(e){return new N((t,r)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&t()},l=>r(l))}),a=!0,s===i&&t()})}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next(i=>i?N.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new N((r,i)=>{const s=e.length,a=new Array(s);let c=0;for(let l=0;l<s;l++){const f=l;t(e[f]).next(m=>{a[f]=m,++c,c===s&&r(a)},m=>i(m))}})}static doWhile(e,t){return new N((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function Vy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function yr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}zs.oe=-1;function Ws(n){return n==null}function vs(n){return n===0&&1/n==-1/0}function Ny(n){return typeof n=="number"&&Number.isInteger(n)&&!vs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ol(e)),e=xy(n.get(t),e);return ol(e)}function xy(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function ol(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function An(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function My(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function Ed(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new ue(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hi(this.root,e,this.comparator,!0)}}class Hi{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??ve.RED,this.left=i??ve.EMPTY,this.right=s??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ve(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ve.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(e,t,r,i,s){return this}insert(e,t,r){return new ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ul(this.data.getIterator())}getIteratorFrom(e){return new ul(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new _e(this.comparator);return t.data=e,t}}class ul{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.fields=e,e.sort(Te.comparator)}static empty(){return new Xe([])}unionWith(e){let t=new _e(Te.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Id("Invalid base64 string: "+s):s}}(e);return new we(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new we(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}we.EMPTY_BYTE_STRING=new we("");const Ly=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(n){if(ee(!!n),typeof n=="string"){let e=0;const t=Ly.exec(n);if(ee(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:le(n.seconds),nanos:le(n.nanos)}}function le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Yt(n){return typeof n=="string"?we.fromBase64String(n):we.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ks(n){const e=n.mapValue.fields.__previous_value__;return Ka(e)?Ks(e):e}function ti(n){const e=Xt(n.mapValue.fields.__local_write_time__.timestampValue);return new pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,t,r,i,s,a,c,l,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=f}}class ni{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ni("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ni&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Jt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ka(n)?4:By(n)?9007199254740991:Uy(n)?10:11:$()}function dt(n,e){if(n===e)return!0;const t=Jt(n);if(t!==Jt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ti(n).isEqual(ti(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Xt(i.timestampValue),c=Xt(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Yt(i.bytesValue).isEqual(Yt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return le(i.geoPointValue.latitude)===le(s.geoPointValue.latitude)&&le(i.geoPointValue.longitude)===le(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return le(i.integerValue)===le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=le(i.doubleValue),c=le(s.doubleValue);return a===c?vs(a)===vs(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Zn(n.arrayValue.values||[],e.arrayValue.values||[],dt);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(al(a)!==al(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!dt(a[l],c[l])))return!1;return!0}(n,e);default:return $()}}function ri(n,e){return(n.values||[]).find(t=>dt(t,e))!==void 0}function er(n,e){if(n===e)return 0;const t=Jt(n),r=Jt(e);if(t!==r)return X(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,e.booleanValue);case 2:return function(s,a){const c=le(s.integerValue||s.doubleValue),l=le(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return cl(n.timestampValue,e.timestampValue);case 4:return cl(ti(n),ti(e));case 5:return X(n.stringValue,e.stringValue);case 6:return function(s,a){const c=Yt(s),l=Yt(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const c=s.split("/"),l=a.split("/");for(let f=0;f<c.length&&f<l.length;f++){const m=X(c[f],l[f]);if(m!==0)return m}return X(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const c=X(le(s.latitude),le(a.latitude));return c!==0?c:X(le(s.longitude),le(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ll(n.arrayValue,e.arrayValue);case 10:return function(s,a){var c,l,f,m;const u=s.fields||{},h=a.fields||{},_=(c=u.value)===null||c===void 0?void 0:c.arrayValue,y=(l=h.value)===null||l===void 0?void 0:l.arrayValue,I=X(((f=_==null?void 0:_.values)===null||f===void 0?void 0:f.length)||0,((m=y==null?void 0:y.values)===null||m===void 0?void 0:m.length)||0);return I!==0?I:ll(_,y)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===Gi.mapValue&&a===Gi.mapValue)return 0;if(s===Gi.mapValue)return 1;if(a===Gi.mapValue)return-1;const c=s.fields||{},l=Object.keys(c),f=a.fields||{},m=Object.keys(f);l.sort(),m.sort();for(let u=0;u<l.length&&u<m.length;++u){const h=X(l[u],m[u]);if(h!==0)return h;const _=er(c[l[u]],f[m[u]]);if(_!==0)return _}return X(l.length,m.length)}(n.mapValue,e.mapValue);default:throw $()}}function cl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return X(n,e);const t=Xt(n),r=Xt(e),i=X(t.seconds,r.seconds);return i!==0?i:X(t.nanos,r.nanos)}function ll(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=er(t[i],r[i]);if(s)return s}return X(t.length,r.length)}function tr(n){return _a(n)}function _a(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Xt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Yt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return j.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=_a(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${_a(t.fields[a])}`;return i+"}"}(n.mapValue):$()}function ts(n){switch(Jt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ks(n);return e?16+ts(e):16;case 5:return 2*n.stringValue.length;case 6:return Yt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ts(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return An(r.fields,(s,a)=>{i+=s.length+ts(a)}),i}(n.mapValue);default:throw $()}}function hl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ma(n){return!!n&&"integerValue"in n}function Qa(n){return!!n&&"arrayValue"in n}function dl(n){return!!n&&"nullValue"in n}function fl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ns(n){return!!n&&"mapValue"in n}function Uy(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function jr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return An(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=jr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=jr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function By(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.value=e}static empty(){return new He({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ns(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=jr(t)}setAll(e){let t=Te.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=jr(a):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());ns(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ns(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){An(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new He(jr(this.value))}}function Ad(n){const e=[];return An(n.fields,(t,r)=>{const i=new Te([t]);if(ns(r)){const s=Ad(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Xe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t,r,i,s,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ce(e,0,z.min(),z.min(),z.min(),He.empty(),0)}static newFoundDocument(e,t,r,i){return new Ce(e,1,t,z.min(),r,i,0)}static newNoDocument(e,t){return new Ce(e,2,t,z.min(),z.min(),He.empty(),0)}static newUnknownDocument(e,t){return new Ce(e,3,t,z.min(),z.min(),He.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=He.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=He.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t){this.position=e,this.inclusive=t}}function pl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(a.referenceValue),t.key):r=er(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function _l(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!dt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t="asc"){this.field=e,this.dir=t}}function qy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{}class fe extends bd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new $y(e,t,r):t==="array-contains"?new zy(e,r):t==="in"?new Wy(e,r):t==="not-in"?new Ky(e,r):t==="array-contains-any"?new Qy(e,r):new fe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Hy(e,r):new Gy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(er(t,this.value)):t!==null&&Jt(this.value)===Jt(t)&&this.matchesComparison(er(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class et extends bd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new et(e,t)}matches(e){return Rd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Rd(n){return n.op==="and"}function Sd(n){return jy(n)&&Rd(n)}function jy(n){for(const e of n.filters)if(e instanceof et)return!1;return!0}function ga(n){if(n instanceof fe)return n.field.canonicalString()+n.op.toString()+tr(n.value);if(Sd(n))return n.filters.map(e=>ga(e)).join(",");{const e=n.filters.map(t=>ga(t)).join(",");return`${n.op}(${e})`}}function Pd(n,e){return n instanceof fe?function(r,i){return i instanceof fe&&r.op===i.op&&r.field.isEqual(i.field)&&dt(r.value,i.value)}(n,e):n instanceof et?function(r,i){return i instanceof et&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&Pd(a,i.filters[c]),!0):!1}(n,e):void $()}function Cd(n){return n instanceof fe?function(t){return`${t.field.canonicalString()} ${t.op} ${tr(t.value)}`}(n):n instanceof et?function(t){return t.op.toString()+" {"+t.getFilters().map(Cd).join(" ,")+"}"}(n):"Filter"}class $y extends fe{constructor(e,t,r){super(e,t,r),this.key=j.fromName(r.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class Hy extends fe{constructor(e,t){super(e,"in",t),this.keys=kd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Gy extends fe{constructor(e,t){super(e,"not-in",t),this.keys=kd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function kd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>j.fromName(r.referenceValue))}class zy extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Qa(t)&&ri(t.arrayValue,this.value)}}class Wy extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ri(this.value.arrayValue,t)}}class Ky extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(ri(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ri(this.value.arrayValue,t)}}class Qy extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Qa(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ri(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,t=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.ue=null}}function ml(n,e=null,t=[],r=[],i=null,s=null,a=null){return new Xy(n,e,t,r,i,s,a)}function Xa(n){const e=G(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ga(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ws(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>tr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>tr(r)).join(",")),e.ue=t}return e.ue}function Ya(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!qy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Pd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!_l(n.startAt,e.startAt)&&_l(n.endAt,e.endAt)}function ya(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t=null,r=[],i=[],s=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Yy(n,e,t,r,i,s,a,c){return new fi(n,e,t,r,i,s,a,c)}function Dd(n){return new fi(n)}function gl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Vd(n){return n.collectionGroup!==null}function $r(n){const e=G(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new _e(Te.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ws(s,r))}),t.has(Te.keyField().canonicalString())||e.ce.push(new ws(Te.keyField(),r))}return e.ce}function at(n){const e=G(n);return e.le||(e.le=Nd(e,$r(n))),e.le}function Jy(n){const e=G(n);return e.he||(e.he=Nd(e,n.explicitOrderBy)),e.he}function Nd(n,e){if(n.limitType==="F")return ml(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ws(i.field,s)});const t=n.endAt?new Ts(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ts(n.startAt.position,n.startAt.inclusive):null;return ml(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function va(n,e){const t=n.filters.concat([e]);return new fi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ta(n,e,t){return new fi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Qs(n,e){return Ya(at(n),at(e))&&n.limitType===e.limitType}function Od(n){return`${Xa(at(n))}|lt:${n.limitType}`}function Ln(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Cd(i)).join(", ")}]`),Ws(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>tr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>tr(i)).join(",")),`Target(${r})`}(at(n))}; limitType=${n.limitType})`}function Xs(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):j.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of $r(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,l){const f=pl(a,c,l);return a.inclusive?f<=0:f<0}(r.startAt,$r(r),i)||r.endAt&&!function(a,c,l){const f=pl(a,c,l);return a.inclusive?f>=0:f>0}(r.endAt,$r(r),i))}(n,e)}function Zy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function xd(n){return(e,t)=>{let r=!1;for(const i of $r(n)){const s=ev(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ev(n,e,t){const r=n.field.isKeyField()?j.comparator(e.key,t.key):function(s,a,c){const l=a.data.field(s),f=c.data.field(s);return l!==null&&f!==null?er(l,f):$()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){An(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Ed(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=new ue(j.comparator);function Ct(){return tv}const Md=new ue(j.comparator);function Ur(...n){let e=Md;for(const t of n)e=e.insert(t.key,t);return e}function Ld(n){let e=Md;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ln(){return Hr()}function Fd(){return Hr()}function Hr(){return new bn(n=>n.toString(),(n,e)=>n.isEqual(e))}const nv=new ue(j.comparator),rv=new _e(j.comparator);function Q(...n){let e=rv;for(const t of n)e=e.add(t);return e}const iv=new _e(X);function sv(){return iv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vs(e)?"-0":e}}function Ud(n){return{integerValue:""+n}}function ov(n,e){return Ny(e)?Ud(e):Ja(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this._=void 0}}function av(n,e,t){return n instanceof Es?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ka(s)&&(s=Ks(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof ii?qd(n,e):n instanceof si?jd(n,e):function(i,s){const a=Bd(i,s),c=yl(a)+yl(i.Pe);return ma(a)&&ma(i.Pe)?Ud(c):Ja(i.serializer,c)}(n,e)}function uv(n,e,t){return n instanceof ii?qd(n,e):n instanceof si?jd(n,e):t}function Bd(n,e){return n instanceof Is?function(r){return ma(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Es extends Ys{}class ii extends Ys{constructor(e){super(),this.elements=e}}function qd(n,e){const t=$d(e);for(const r of n.elements)t.some(i=>dt(i,r))||t.push(r);return{arrayValue:{values:t}}}class si extends Ys{constructor(e){super(),this.elements=e}}function jd(n,e){let t=$d(e);for(const r of n.elements)t=t.filter(i=>!dt(i,r));return{arrayValue:{values:t}}}class Is extends Ys{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function yl(n){return le(n.integerValue||n.doubleValue)}function $d(n){return Qa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function cv(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof ii&&i instanceof ii||r instanceof si&&i instanceof si?Zn(r.elements,i.elements,dt):r instanceof Is&&i instanceof Is?dt(r.Pe,i.Pe):r instanceof Es&&i instanceof Es}(n.transform,e.transform)}class lv{constructor(e,t){this.version=e,this.transformResults=t}}class Rt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Rt}static exists(e){return new Rt(void 0,e)}static updateTime(e){return new Rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Js{}function Hd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new zd(n.key,Rt.none()):new pi(n.key,n.data,Rt.none());{const t=n.data,r=He.empty();let i=new _e(Te.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Rn(n.key,r,new Xe(i.toArray()),Rt.none())}}function hv(n,e,t){n instanceof pi?function(i,s,a){const c=i.value.clone(),l=Tl(i.fieldTransforms,s,a.transformResults);c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Rn?function(i,s,a){if(!rs(i.precondition,s))return void s.convertToUnknownDocument(a.version);const c=Tl(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(Gd(i)),l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Gr(n,e,t,r){return n instanceof pi?function(s,a,c,l){if(!rs(s.precondition,a))return c;const f=s.value.clone(),m=wl(s.fieldTransforms,l,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof Rn?function(s,a,c,l){if(!rs(s.precondition,a))return c;const f=wl(s.fieldTransforms,l,a),m=a.data;return m.setAll(Gd(s)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(n,e,t,r):function(s,a,c){return rs(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function dv(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Bd(r.transform,i||null);s!=null&&(t===null&&(t=He.empty()),t.set(r.field,s))}return t||null}function vl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Zn(r,i,(s,a)=>cv(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class pi extends Js{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Rn extends Js{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Gd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Tl(n,e,t){const r=new Map;ee(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,uv(a,c,t[i]))}return r}function wl(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,av(s,a,e))}return r}class zd extends Js{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fv extends Js{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&hv(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Gr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Gr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Fd();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;const l=Hd(a,c);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Q())}isEqual(e){return this.batchId===e.batchId&&Zn(this.mutations,e.mutations,(t,r)=>vl(t,r))&&Zn(this.baseMutations,e.baseMutations,(t,r)=>vl(t,r))}}class Za{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ee(e.mutations.length===r.length);let i=function(){return nv}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Za(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e,t,r){this.alias=e,this.aggregateType=t,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he,Y;function yv(n){switch(n){default:return $();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function Wd(n){if(n===void 0)return Pt("GRPC error has no .code"),O.UNKNOWN;switch(n){case he.OK:return O.OK;case he.CANCELLED:return O.CANCELLED;case he.UNKNOWN:return O.UNKNOWN;case he.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case he.INTERNAL:return O.INTERNAL;case he.UNAVAILABLE:return O.UNAVAILABLE;case he.UNAUTHENTICATED:return O.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case he.NOT_FOUND:return O.NOT_FOUND;case he.ALREADY_EXISTS:return O.ALREADY_EXISTS;case he.PERMISSION_DENIED:return O.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case he.ABORTED:return O.ABORTED;case he.OUT_OF_RANGE:return O.OUT_OF_RANGE;case he.UNIMPLEMENTED:return O.UNIMPLEMENTED;case he.DATA_LOSS:return O.DATA_LOSS;default:return $()}}(Y=he||(he={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=new _n([4294967295,4294967295],0);function El(n){const e=vv().encode(n),t=new pd;return t.update(e),new Uint8Array(t.digest())}function Il(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new _n([t,r],0),new _n([i,s],0)]}class eu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Br(`Invalid padding: ${t}`);if(r<0)throw new Br(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Br(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Br(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=_n.fromNumber(this.Te)}Ee(e,t,r){let i=e.add(t.multiply(_n.fromNumber(r)));return i.compare(Tv)===1&&(i=new _n([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=El(e),[r,i]=Il(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new eu(s,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Te===0)return;const t=El(e),[r,i]=Il(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Br extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,_i.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Zs(z.min(),i,new ue(X),Ct(),Q())}}class _i{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new _i(r,t,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class Kd{constructor(e,t){this.targetId=e,this.me=t}}class Qd{constructor(e,t,r=we.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Al{constructor(){this.fe=0,this.ge=bl(),this.pe=we.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Q(),t=Q(),r=Q();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:$()}}),new _i(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=bl()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ee(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class wv{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ct(),this.qe=zi(),this.Qe=zi(),this.Ke=new ue(X)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:$()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.je(i)&&t(i)})}Je(e){const t=e.targetId,r=e.me.count,i=this.Ye(t);if(i){const s=i.target;if(ya(s))if(r===0){const a=new j(s.path);this.We(t,a,Ce.newNoDocument(a,z.min()))}else ee(r===1);else{const a=this.Ze(t);if(a!==r){const c=this.Xe(e),l=c?this.et(c,e,a):1;if(l!==0){this.He(t);const f=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,f)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,c;try{a=Yt(r).toUint8Array()}catch(l){if(l instanceof Id)return Jn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new eu(a,i,s)}catch(l){return Jn(l instanceof Br?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Te===0?null:c}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.nt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.We(t,s,null),i++)}),i}it(e){const t=new Map;this.Be.forEach((s,a)=>{const c=this.Ye(a);if(c){if(s.current&&ya(c.target)){const l=new j(c.target.path);this.st(l).has(a)||this.ot(a,l)||this.We(a,l,Ce.newNoDocument(l,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=Q();this.Qe.forEach((s,a)=>{let c=!0;a.forEachWhile(l=>{const f=this.Ye(l);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new Zs(e,t,this.Ke,this.ke,r);return this.ke=Ct(),this.qe=zi(),this.Qe=zi(),this.Ke=new ue(X),i}Ue(e,t){if(!this.je(e))return;const r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const i=this.ze(e);this.ot(e,t)?i.Fe(t,1):i.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Al,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new _e(X),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new _e(X),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Al),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function zi(){return new ue(j.comparator)}function bl(){return new ue(j.comparator)}const Ev={asc:"ASCENDING",desc:"DESCENDING"},Iv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Av={and:"AND",or:"OR"};class bv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wa(n,e){return n.useProto3Json||Ws(e)?e:{value:e}}function As(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Rv(n,e){return As(n,e.toTimestamp())}function ut(n){return ee(!!n),z.fromTimestamp(function(t){const r=Xt(t);return new pe(r.seconds,r.nanos)}(n))}function tu(n,e){return Ea(n,e).canonicalString()}function Ea(n,e){const t=function(i){return new ae(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Yd(n){const e=ae.fromString(n);return ee(rf(e)),e}function Ia(n,e){return tu(n.databaseId,e.path)}function jo(n,e){const t=Yd(e);if(t.get(1)!==n.databaseId.projectId)throw new B(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new j(Zd(t))}function Jd(n,e){return tu(n.databaseId,e)}function Sv(n){const e=Yd(n);return e.length===4?ae.emptyPath():Zd(e)}function Aa(n){return new ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Zd(n){return ee(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Rl(n,e,t){return{name:Ia(n,e),fields:t.value.mapValue.fields}}function Pv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(f,m){return f.useProto3Json?(ee(m===void 0||typeof m=="string"),we.fromBase64String(m||"")):(ee(m===void 0||m instanceof Buffer||m instanceof Uint8Array),we.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(f){const m=f.code===void 0?O.UNKNOWN:Wd(f.code);return new B(m,f.message||"")}(a);t=new Qd(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=jo(n,r.document.name),s=ut(r.document.updateTime),a=r.document.createTime?ut(r.document.createTime):z.min(),c=new He({mapValue:{fields:r.document.fields}}),l=Ce.newFoundDocument(i,s,a,c),f=r.targetIds||[],m=r.removedTargetIds||[];t=new is(f,m,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=jo(n,r.document),s=r.readTime?ut(r.readTime):z.min(),a=Ce.newNoDocument(i,s),c=r.removedTargetIds||[];t=new is([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=jo(n,r.document),s=r.removedTargetIds||[];t=new is([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new gv(i,s),c=r.targetId;t=new Kd(c,a)}}return t}function Cv(n,e){let t;if(e instanceof pi)t={update:Rl(n,e.key,e.value)};else if(e instanceof zd)t={delete:Ia(n,e.key)};else if(e instanceof Rn)t={update:Rl(n,e.key,e.data),updateMask:Fv(e.fieldMask)};else{if(!(e instanceof fv))return $();t={verify:Ia(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const c=a.transform;if(c instanceof Es)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ii)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof si)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Is)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw $()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Rv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:$()}(n,e.precondition)),t}function kv(n,e){return n&&n.length>0?(ee(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?ut(i.updateTime):ut(s);return a.isEqual(z.min())&&(a=ut(s)),new lv(a,i.transformResults||[])}(t,e))):[]}function Dv(n,e){return{documents:[Jd(n,e.path)]}}function ef(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Jd(n,i);const s=function(f){if(f.length!==0)return nf(et.create(f,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(f){if(f.length!==0)return f.map(m=>function(h){return{field:Lt(h.field),direction:xv(h.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=wa(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{ct:t,parent:i}}function Vv(n,e,t,r){const{ct:i,parent:s}=ef(n,e),a={},c=[];let l=0;return t.forEach(f=>{const m="aggregate_"+l++;a[m]=f.alias,f.aggregateType==="count"?c.push({alias:m,count:{}}):f.aggregateType==="avg"?c.push({alias:m,avg:{field:Lt(f.fieldPath)}}):f.aggregateType==="sum"&&c.push({alias:m,sum:{field:Lt(f.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:c,structuredQuery:i.structuredQuery},parent:i.parent},lt:a,parent:s}}function Nv(n){let e=Sv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ee(r===1);const m=t.from[0];m.allDescendants?i=m.collectionId:e=e.child(m.collectionId)}let s=[];t.where&&(s=function(u){const h=tf(u);return h instanceof et&&Sd(h)?h.getFilters():[h]}(t.where));let a=[];t.orderBy&&(a=function(u){return u.map(h=>function(y){return new ws(Fn(y.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(h))}(t.orderBy));let c=null;t.limit&&(c=function(u){let h;return h=typeof u=="object"?u.value:u,Ws(h)?null:h}(t.limit));let l=null;t.startAt&&(l=function(u){const h=!!u.before,_=u.values||[];return new Ts(_,h)}(t.startAt));let f=null;return t.endAt&&(f=function(u){const h=!u.before,_=u.values||[];return new Ts(_,h)}(t.endAt)),Yy(e,i,a,s,c,"F",l,f)}function Ov(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function tf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Fn(t.unaryFilter.field);return fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Fn(t.unaryFilter.field);return fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Fn(t.unaryFilter.field);return fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Fn(t.unaryFilter.field);return fe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(n):n.fieldFilter!==void 0?function(t){return fe.create(Fn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return et.create(t.compositeFilter.filters.map(r=>tf(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return $()}}(t.compositeFilter.op))}(n):$()}function xv(n){return Ev[n]}function Mv(n){return Iv[n]}function Lv(n){return Av[n]}function Lt(n){return{fieldPath:n.canonicalString()}}function Fn(n){return Te.fromServerFormat(n.fieldPath)}function nf(n){return n instanceof fe?function(t){if(t.op==="=="){if(fl(t.value))return{unaryFilter:{field:Lt(t.field),op:"IS_NAN"}};if(dl(t.value))return{unaryFilter:{field:Lt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(fl(t.value))return{unaryFilter:{field:Lt(t.field),op:"IS_NOT_NAN"}};if(dl(t.value))return{unaryFilter:{field:Lt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Lt(t.field),op:Mv(t.op),value:t.value}}}(n):n instanceof et?function(t){const r=t.getFilters().map(i=>nf(i));return r.length===1?r[0]:{compositeFilter:{op:Lv(t.op),filters:r}}}(n):$()}function Fv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function rf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t,r,i,s=z.min(),a=z.min(),c=we.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new qt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e){this.ht=e}}function Bv(n){const e=Nv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ta(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(){this.ln=new jv}addToCollectionParentIndex(e,t){return this.ln.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(Qt.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(Qt.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class jv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new _e(ae.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new _e(ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Oe{static withCacheSize(e){return new Oe(e,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oe.DEFAULT_COLLECTION_PERCENTILE=10,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Oe.DEFAULT=new Oe(41943040,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Oe.DISABLED=new Oe(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new nr(0)}static Qn(){return new nr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl([n,e],[t,r]){const i=X(n,t);return i===0?X(e,r):i}class $v{constructor(e){this.Gn=e,this.buffer=new _e(Pl),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Pl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Hv{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){L("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){yr(t)?L("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await gr(t)}await this.Yn(3e5)})}}class Gv{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return N.resolve(zs.oe);const r=new $v(t);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Sl)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Sl):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,i,s,a,c,l,f;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(u=>(u>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${u}`),i=this.params.maximumSequenceNumbersToCollect):i=u,a=Date.now(),this.nthSequenceNumber(e,i))).next(u=>(r=u,c=Date.now(),this.removeTargets(e,r,t))).next(u=>(s=u,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(u=>(f=Date.now(),Mn()<=K.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${u} documents in `+(f-l)+`ms
Total Duration: ${f-m}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:u})))}}function zv(n,e){return new Gv(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(){this.changes=new bn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Gr(r.mutation,i,Xe.empty(),pe.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Q()){const i=ln();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=Ur();return s.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=ln();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Q()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let s=Ct();const a=Hr(),c=function(){return Hr()}();return t.forEach((l,f)=>{const m=r.get(f.key);i.has(f.key)&&(m===void 0||m.mutation instanceof Rn)?s=s.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),Gr(m.mutation,f,m.mutation.getFieldMask(),pe.now())):a.set(f.key,Xe.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((f,m)=>a.set(f,m)),t.forEach((f,m)=>{var u;return c.set(f,new Kv(m,(u=a.get(f))!==null&&u!==void 0?u:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Hr();let i=new ue((a,c)=>a-c),s=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const f=t.get(l);if(f===null)return;let m=r.get(l)||Xe.empty();m=c.applyToLocalView(f,m),r.set(l,m);const u=(i.get(c.batchId)||Q()).add(l);i=i.insert(c.batchId,u)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),f=l.key,m=l.value,u=Fd();m.forEach(h=>{if(!s.has(h)){const _=Hd(t.get(h),r.get(h));_!==null&&u.set(h,_),s=s.add(h)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,u))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return j.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Vd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):N.resolve(ln());let c=-1,l=s;return a.next(f=>N.forEach(f,(m,u)=>(c<u.largestBatchId&&(c=u.largestBatchId),s.get(m)?N.resolve():this.remoteDocumentCache.getEntry(e,m).next(h=>{l=l.insert(m,h)}))).next(()=>this.populateOverlays(e,f,s)).next(()=>this.computeViews(e,l,f,Q())).next(m=>({batchId:c,changes:Ld(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next(r=>{let i=Ur();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=Ur();return this.indexManager.getCollectionParents(e,s).next(c=>N.forEach(c,l=>{const f=function(u,h){return new fi(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,f,r,i).next(m=>{m.forEach((u,h)=>{a=a.insert(u,h)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((l,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,Ce.newInvalidDocument(m)))});let c=Ur();return a.forEach((l,f)=>{const m=s.get(l);m!==void 0&&Gr(m.mutation,f,Xe.empty(),pe.now()),Xs(t,f)&&(c=c.insert(l,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return N.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ut(i.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(i){return{name:i.name,query:Bv(i.bundledQuery),readTime:ut(i.readTime)}}(t)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(){this.overlays=new ue(j.comparator),this.Er=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ln();return N.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Tt(e,t,s)}),N.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const i=ln(),s=t.length+1,a=new j(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,f=l.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return N.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ue((f,m)=>f-m);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let m=s.get(f.largestBatchId);m===null&&(m=ln(),s=s.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=ln(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((f,m)=>c.set(f,m)),!(c.size()>=i)););return N.resolve(c)}Tt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new _v(t,r));let s=this.Er.get(t);s===void 0&&(s=Q(),this.Er.set(t,s)),this.Er.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(){this.sessionToken=we.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this.dr=new _e(ge.Ar),this.Rr=new _e(ge.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const r=new ge(e,t);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new ge(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){const t=new j(new ae([])),r=new ge(t,e),i=new ge(t,e+1),s=[];return this.Rr.forEachInRange([r,i],a=>{this.gr(a),s.push(a.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new j(new ae([])),r=new ge(t,e),i=new ge(t,e+1);let s=Q();return this.Rr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new ge(e,0),r=this.dr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ge{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return j.comparator(e.key,t.key)||X(e.br,t.br)}static Vr(e,t){return X(e.br,t.br)||j.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new _e(ge.Ar)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new pv(s,t,r,i);this.mutationQueue.push(a);for(const c of i)this.vr=this.vr.add(new ge(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Fr(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ge(t,0),i=new ge(t,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],a=>{const c=this.Cr(a.br);s.push(c)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new _e(X);return t.forEach(i=>{const s=new ge(i,0),a=new ge(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,a],c=>{r=r.add(c.br)})}),N.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const a=new ge(new j(s),0);let c=new _e(X);return this.vr.forEachWhile(l=>{const f=l.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(c=c.add(l.br)),!0)},a),N.resolve(this.Mr(c))}Mr(e){const t=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ee(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return N.forEach(t.mutations,i=>{const s=new ge(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,t){const r=new ge(t,0),i=this.vr.firstAfterOrEqual(r);return N.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e){this.Nr=e,this.docs=function(){return new ue(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():Ce.newInvalidDocument(t))}getEntries(e,t){let r=Ct();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ce.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Ct();const a=t.path,c=new j(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:f,value:{document:m}}=l.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Cy(Py(m),r)<=0||(i.has(m.key)||Xs(t,m))&&(s=s.insert(m.key,m.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,t,r,i){$()}Lr(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new tT(this)}getSize(e){return N.resolve(this.size)}}class tT extends Wv{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e){this.persistence=e,this.Br=new bn(t=>Xa(t),Ya),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.kr=0,this.qr=new nu,this.targetCount=0,this.Qr=nr.qn()}forEachTarget(e,t){return this.Br.forEach((r,i)=>t(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),N.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new nr(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Un(t),N.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Br.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Br.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.Br.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qr.Sr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,t){this.Kr={},this.overlays={},this.$r=new zs(0),this.Ur=!1,this.Ur=!0,this.Wr=new Jv,this.referenceDelegate=e(this),this.Gr=new nT(this),this.indexManager=new qv,this.remoteDocumentCache=function(i){return new eT(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new Uv(t),this.jr=new Xv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Yv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new Zv(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){L("MemoryPersistence","Starting transaction:",e);const i=new rT(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,t){return N.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class rT extends Dy{constructor(e){super(),this.currentSequenceNumber=e}}class ru{constructor(e){this.persistence=e,this.Zr=new nu,this.Xr=null}static ei(e){return new ru(e)}get ti(){if(this.Xr)return this.Xr;throw $()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),N.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.ti,r=>{const i=j.fromPath(r);return this.ni(e,i).next(s=>{s||t.removeEntry(i,z.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return N.or([()=>N.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class bs{constructor(e,t){this.persistence=e,this.ri=new bn(r=>Oy(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=zv(this,t)}static ei(e,t){return new bs(e,t)}Hr(){}Jr(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return N.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?N.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,a=>this.ir(e,a,t).next(c=>{c||(r++,s.removeEntry(a,z.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),N.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ts(e.data.value)),t}ir(e,t,r){return N.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.ri.get(t);return N.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=i}static zi(e,t){let r=Q(),i=Q();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new iu(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Zm()?8:Vy(ke())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Xi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.es(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new iT;return this.ts(e,t,a).next(c=>{if(s.result=c,this.Hi)return this.ns(e,t,a,c.size)})}).next(()=>s.result)}ns(e,t,r,i){return r.documentReadCount<this.Ji?(Mn()<=K.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Ln(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),N.resolve()):(Mn()<=K.DEBUG&&L("QueryEngine","Query:",Ln(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(Mn()<=K.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Ln(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,at(t))):N.resolve())}Xi(e,t){if(gl(t))return N.resolve(null);let r=at(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ta(t,null,"F"),r=at(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=Q(...s);return this.Zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const f=this.rs(t,c);return this.ss(t,f,a,l.readTime)?this.Xi(e,Ta(t,null,"F")):this.os(e,f,t,l)}))})))}es(e,t,r,i){return gl(t)||i.isEqual(z.min())?N.resolve(null):this.Zi.getDocuments(e,r).next(s=>{const a=this.rs(t,s);return this.ss(t,a,r,i)?N.resolve(null):(Mn()<=K.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ln(t)),this.os(e,a,t,Sy(i,-1)).next(c=>c))})}rs(e,t){let r=new _e(xd(e));return t.forEach((i,s)=>{Xs(e,s)&&(r=r.add(s))}),r}ss(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,t,r){return Mn()<=K.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Ln(t)),this.Zi.getDocumentsMatchingQuery(e,t,Qt.min(),r)}os(e,t,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,t,r,i){this.persistence=e,this._s=t,this.serializer=i,this.us=new ue(X),this.cs=new bn(s=>Xa(s),Ya),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Qv(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function aT(n,e,t,r){return new oT(n,e,t,r)}async function of(n,e){const t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],c=[];let l=Q();for(const f of i){a.push(f.batchId);for(const m of f.mutations)l=l.add(m.key)}for(const f of s){c.push(f.batchId);for(const m of f.mutations)l=l.add(m.key)}return t.localDocuments.getDocuments(r,l).next(f=>({Ts:f,removedBatchIds:a,addedBatchIds:c}))})})}function uT(n,e){const t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.hs.newChangeBuffer({trackRemovals:!0});return function(c,l,f,m){const u=f.batch,h=u.keys();let _=N.resolve();return h.forEach(y=>{_=_.next(()=>m.getEntry(l,y)).next(I=>{const v=f.docVersions.get(y);ee(v!==null),I.version.compareTo(v)<0&&(u.applyToRemoteDocument(I,f),I.isValidDocument()&&(I.setReadTime(f.commitVersion),m.addEntry(I)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,u))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Q();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(l=l.add(c.batch.mutations[f].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function af(n){const e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function cT(n,e){const t=G(n),r=e.snapshotVersion;let i=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.hs.newChangeBuffer({trackRemovals:!0});i=t.us;const c=[];e.targetChanges.forEach((m,u)=>{const h=i.get(u);if(!h)return;c.push(t.Gr.removeMatchingKeys(s,m.removedDocuments,u).next(()=>t.Gr.addMatchingKeys(s,m.addedDocuments,u)));let _=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(u)!==null?_=_.withResumeToken(we.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):m.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(m.resumeToken,r)),i=i.insert(u,_),function(I,v,w){return I.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(h,_,m)&&c.push(t.Gr.updateTargetData(s,_))});let l=Ct(),f=Q();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,m))}),c.push(lT(s,a,e.documentUpdates).next(m=>{l=m.Is,f=m.Es})),!r.isEqual(z.min())){const m=t.Gr.getLastRemoteSnapshotVersion(s).next(u=>t.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(m)}return N.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,f)).next(()=>l)}).then(s=>(t.us=i,s))}function lT(n,e,t){let r=Q(),i=Q();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=Ct();return t.forEach((c,l)=>{const f=s.get(c);l.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!f.isValidDocument()||l.version.compareTo(f.version)>0||l.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):L("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",l.version)}),{Is:a,Es:i}})}function hT(n,e){const t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dT(n,e){const t=G(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Gr.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):t.Gr.allocateTargetId(r).next(a=>(i=new qt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function ba(n,e,t){const r=G(n),i=r.us.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!yr(a))throw a;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function Cl(n,e,t){const r=G(n);let i=z.min(),s=Q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,f,m){const u=G(l),h=u.cs.get(m);return h!==void 0?N.resolve(u.us.get(h)):u.Gr.getTargetData(f,m)}(r,a,at(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,c.targetId).next(l=>{s=l})}).next(()=>r._s.getDocumentsMatchingQuery(a,e,t?i:z.min(),t?s:Q())).next(c=>(fT(r,Zy(e),c),{documents:c,ds:s})))}function fT(n,e,t){let r=n.ls.get(e)||z.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ls.set(e,r)}class kl{constructor(){this.activeTargetIds=sv()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pT{constructor(){this._o=new kl,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new kl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wi=null;function $o(){return Wi===null?Wi=function(){return 268435456+Math.round(2147483648*Math.random())}():Wi++,"0x"+Wi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="WebChannelConnection";class yT extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(t,r,i,s,a){const c=$o(),l=this.No(t,r.toUriEncodedString());L("RestConnection",`Sending RPC '${t}' ${c}:`,l,i);const f={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(f,s,a),this.Bo(t,l,f,i).then(m=>(L("RestConnection",`Received RPC '${t}' ${c}: `,m),m),m=>{throw Jn("RestConnection",`RPC '${t}' ${c} failed with error: `,m,"url: ",l,"request:",i),m})}ko(t,r,i,s,a,c){return this.Oo(t,r,i,s,a)}Lo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}No(t,r){const i=mT[t];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,r,i){const s=$o();return new Promise((a,c)=>{const l=new _d;l.setWithCredentials(!0),l.listenOnce(md.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case es.NO_ERROR:const m=l.getResponseJson();L(be,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(m)),a(m);break;case es.TIMEOUT:L(be,`RPC '${e}' ${s} timed out`),c(new B(O.DEADLINE_EXCEEDED,"Request time out"));break;case es.HTTP_ERROR:const u=l.getStatus();if(L(be,`RPC '${e}' ${s} failed with status:`,u,"response text:",l.getResponseText()),u>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const _=h==null?void 0:h.error;if(_&&_.status&&_.message){const y=function(v){const w=v.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(w)>=0?w:O.UNKNOWN}(_.status);c(new B(y,_.message))}else c(new B(O.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new B(O.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{L(be,`RPC '${e}' ${s} completed.`)}});const f=JSON.stringify(i);L(be,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",f,r,15)})}qo(e,t,r){const i=$o(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=vd(),c=yd(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(l.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const m=s.join("");L(be,`Creating RPC '${e}' stream ${i}: ${m}`,l);const u=a.createWebChannel(m,l);let h=!1,_=!1;const y=new gT({Eo:v=>{_?L(be,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(h||(L(be,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),L(be,`RPC '${e}' stream ${i} sending:`,v),u.send(v))},Ao:()=>u.close()}),I=(v,w,P)=>{v.listen(w,V=>{try{P(V)}catch(x){setTimeout(()=>{throw x},0)}})};return I(u,Fr.EventType.OPEN,()=>{_||(L(be,`RPC '${e}' stream ${i} transport opened.`),y.So())}),I(u,Fr.EventType.CLOSE,()=>{_||(_=!0,L(be,`RPC '${e}' stream ${i} transport closed`),y.Do())}),I(u,Fr.EventType.ERROR,v=>{_||(_=!0,Jn(be,`RPC '${e}' stream ${i} transport errored:`,v),y.Do(new B(O.UNAVAILABLE,"The operation could not be completed")))}),I(u,Fr.EventType.MESSAGE,v=>{var w;if(!_){const P=v.data[0];ee(!!P);const V=P,x=(V==null?void 0:V.error)||((w=V[0])===null||w===void 0?void 0:w.error);if(x){L(be,`RPC '${e}' stream ${i} received error:`,x);const F=x.status;let q=function(E){const R=he[E];if(R!==void 0)return Wd(R)}(F),b=x.message;q===void 0&&(q=O.INTERNAL,b="Unknown error status: "+F+" with message "+x.message),_=!0,y.Do(new B(q,b)),u.close()}else L(be,`RPC '${e}' stream ${i} received:`,P),y.vo(P)}}),I(c,gd.STAT_EVENT,v=>{v.stat===pa.PROXY?L(be,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===pa.NOPROXY&&L(be,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.bo()},0),y}}function Ho(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(n){return new bv(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,t-r);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,t,r,i,s,a,c,l){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new uf(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(Pt(t.toString()),Pt("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===t&&this.I_(r,i)},r=>{e(()=>{const i=new B(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,t){const r=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vT extends cf{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=Pv(this.serializer,e),r=function(s){if(!("targetChange"in s))return z.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?ut(a.readTime):z.min()}(e);return this.listener.R_(t,r)}V_(e){const t={};t.database=Aa(this.serializer),t.addTarget=function(s,a){let c;const l=a.target;if(c=ya(l)?{documents:Dv(s,l)}:{query:ef(s,l).ct},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Xd(s,a.resumeToken);const f=wa(s,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(z.min())>0){c.readTime=As(s,a.snapshotVersion.toTimestamp());const f=wa(s,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,e);const r=Ov(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){const t={};t.database=Aa(this.serializer),t.removeTarget=e,this.c_(t)}}class TT extends cf{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return ee(!!e.streamToken),this.lastStreamToken=e.streamToken,ee(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=kv(e.writeResults,e.commitTime),r=ut(e.commitTime);return this.listener.y_(r,t)}w_(){const e={};e.database=Aa(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Cv(this.serializer,r))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new B(O.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Oo(e,Ea(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(O.UNKNOWN,s.toString())})}ko(e,t,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.ko(e,Ea(t,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(O.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class ET{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Pt(t),this.C_=!1):L("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{Sn(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(l){const f=G(l);f.k_.add(4),await mi(f),f.K_.set("Unknown"),f.k_.delete(4),await to(f)}(this))})}),this.K_=new ET(r,i)}}async function to(n){if(Sn(n))for(const e of n.q_)await e(!0)}async function mi(n){for(const e of n.q_)await e(!1)}function lf(n,e){const t=G(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),uu(t)?au(t):vr(t).s_()&&ou(t,e))}function su(n,e){const t=G(n),r=vr(t);t.B_.delete(e),r.s_()&&hf(t,e),t.B_.size===0&&(r.s_()?r.a_():Sn(t)&&t.K_.set("Unknown"))}function ou(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}vr(n).V_(e)}function hf(n,e){n.U_.xe(e),vr(n).m_(e)}function au(n){n.U_=new wv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),vr(n).start(),n.K_.F_()}function uu(n){return Sn(n)&&!vr(n).i_()&&n.B_.size>0}function Sn(n){return G(n).k_.size===0}function df(n){n.U_=void 0}async function AT(n){n.K_.set("Online")}async function bT(n){n.B_.forEach((e,t)=>{ou(n,e)})}async function RT(n,e){df(n),uu(n)?(n.K_.O_(e),au(n)):n.K_.set("Unknown")}async function ST(n,e,t){if(n.K_.set("Online"),e instanceof Qd&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const c of s.targetIds)i.B_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.B_.delete(c),i.U_.removeTarget(c))}(n,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Rs(n,r)}else if(e instanceof is?n.U_.$e(e):e instanceof Kd?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(z.min()))try{const r=await af(n.localStore);t.compareTo(r)>=0&&await function(s,a){const c=s.U_.it(a);return c.targetChanges.forEach((l,f)=>{if(l.resumeToken.approximateByteSize()>0){const m=s.B_.get(f);m&&s.B_.set(f,m.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,f)=>{const m=s.B_.get(l);if(!m)return;s.B_.set(l,m.withResumeToken(we.EMPTY_BYTE_STRING,m.snapshotVersion)),hf(s,l);const u=new qt(m.target,l,f,m.sequenceNumber);ou(s,u)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await Rs(n,r)}}async function Rs(n,e,t){if(!yr(e))throw e;n.k_.add(1),await mi(n),n.K_.set("Offline"),t||(t=()=>af(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await to(n)})}function ff(n,e){return e().catch(t=>Rs(n,t,e))}async function no(n){const e=G(n),t=Zt(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;PT(e);)try{const i=await hT(e.localStore,r);if(i===null){e.L_.length===0&&t.a_();break}r=i.batchId,CT(e,i)}catch(i){await Rs(e,i)}pf(e)&&_f(e)}function PT(n){return Sn(n)&&n.L_.length<10}function CT(n,e){n.L_.push(e);const t=Zt(n);t.s_()&&t.f_&&t.g_(e.mutations)}function pf(n){return Sn(n)&&!Zt(n).i_()&&n.L_.length>0}function _f(n){Zt(n).start()}async function kT(n){Zt(n).w_()}async function DT(n){const e=Zt(n);for(const t of n.L_)e.g_(t.mutations)}async function VT(n,e,t){const r=n.L_.shift(),i=Za.from(r,e,t);await ff(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await no(n)}async function NT(n,e){e&&Zt(n).f_&&await async function(r,i){if(function(a){return yv(a)&&a!==O.ABORTED}(i.code)){const s=r.L_.shift();Zt(r).__(),await ff(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await no(r)}}(n,e),pf(n)&&_f(n)}async function Vl(n,e){const t=G(n);t.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=Sn(t);t.k_.add(3),await mi(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await to(t)}async function OT(n,e){const t=G(n);e?(t.k_.delete(2),await to(t)):e||(t.k_.add(2),await mi(t),t.K_.set("Unknown"))}function vr(n){return n.W_||(n.W_=function(t,r,i){const s=G(t);return s.b_(),new vT(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:AT.bind(null,n),mo:bT.bind(null,n),po:RT.bind(null,n),R_:ST.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),uu(n)?au(n):n.K_.set("Unknown")):(await n.W_.stop(),df(n))})),n.W_}function Zt(n){return n.G_||(n.G_=function(t,r,i){const s=G(t);return s.b_(),new TT(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:kT.bind(null,n),po:NT.bind(null,n),p_:DT.bind(null,n),y_:VT.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await no(n)):(await n.G_.stop(),n.L_.length>0&&(L("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,c=new cu(e,t,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lu(n,e){if(Pt("AsyncQueue",`${e}: ${n}`),yr(n))return new B(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{static emptySet(e){return new Gn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||j.comparator(t.key,r.key):(t,r)=>j.comparator(t.key,r.key),this.keyedMap=Ur(),this.sortedSet=new ue(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Gn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Gn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this.z_=new ue(j.comparator)}track(e){const t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):$():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class rr{constructor(e,t,r,i,s,a,c,l,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new rr(e,t,Gn.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class MT{constructor(){this.queries=Ol(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){const i=G(t),s=i.queries;i.queries=Ol(),s.forEach((a,c)=>{for(const l of c.J_)l.onError(r)})})(this,new B(O.ABORTED,"Firestore shutting down"))}}function Ol(){return new bn(n=>Od(n),Qs)}async function LT(n,e){const t=G(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new xT,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await t.onListen(i,!0);break;case 1:s.H_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const c=lu(a,`Initialization of query '${Ln(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.J_.push(e),e.ea(t.onlineState),s.H_&&e.ta(s.H_)&&hu(t)}async function FT(n,e){const t=G(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.J_.indexOf(e);a>=0&&(s.J_.splice(a,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function UT(n,e){const t=G(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const c of a.J_)c.ta(i)&&(r=!0);a.H_=i}}r&&hu(t)}function BT(n,e,t){const r=G(n),i=r.queries.get(e);if(i)for(const s of i.J_)s.onError(t);r.queries.delete(e)}function hu(n){n.X_.forEach(e=>{e.next()})}var Ra,xl;(xl=Ra||(Ra={})).na="default",xl.Cache="cache";class qT{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new rr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=rr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Ra.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e){this.key=e}}class gf{constructor(e){this.key=e}}class jT{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Q(),this.mutatedKeys=Q(),this.Va=xd(e),this.ma=new Gn(this.Va)}get fa(){return this.da}ga(e,t){const r=t?t.pa:new Nl,i=t?t.ma:this.ma;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((m,u)=>{const h=i.get(m),_=Xs(this.query,u)?u:null,y=!!h&&this.mutatedKeys.has(h.key),I=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let v=!1;h&&_?h.data.isEqual(_.data)?y!==I&&(r.track({type:3,doc:_}),v=!0):this.ya(h,_)||(r.track({type:2,doc:_}),v=!0,(l&&this.Va(_,l)>0||f&&this.Va(_,f)<0)&&(c=!0)):!h&&_?(r.track({type:0,doc:_}),v=!0):h&&!_&&(r.track({type:1,doc:h}),v=!0,(l||f)&&(c=!0)),v&&(_?(a=a.add(_),s=I?s.add(m):s.delete(m)):(a=a.delete(m),s=s.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),s=s.delete(m.key),r.track({type:1,doc:m})}return{ma:a,pa:r,ss:c,mutatedKeys:s}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const a=e.pa.j_();a.sort((m,u)=>function(_,y){const I=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return I(_)-I(y)}(m.type,u.type)||this.Va(m.doc,u.doc)),this.wa(r),i=i!=null&&i;const c=t&&!i?this.Sa():[],l=this.Ra.size===0&&this.current&&!i?1:0,f=l!==this.Aa;return this.Aa=l,a.length!==0||f?{snapshot:new rr(this.query,e.ma,s,a,e.mutatedKeys,l===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Nl,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Q(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new gf(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new mf(r))}),t}va(e){this.da=e.ds,this.Ra=Q();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return rr.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class $T{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class HT{constructor(e){this.key=e,this.Fa=!1}}class GT{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new bn(c=>Od(c),Qs),this.Oa=new Map,this.Na=new Set,this.La=new ue(j.comparator),this.Ba=new Map,this.ka=new nu,this.qa={},this.Qa=new Map,this.Ka=nr.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function zT(n,e,t=!0){const r=If(n);let i;const s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await yf(r,e,t,!0),i}async function WT(n,e){const t=If(n);await yf(t,e,!0,!1)}async function yf(n,e,t,r){const i=await dT(n.localStore,at(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let c;return r&&(c=await KT(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&lf(n.remoteStore,i),c}async function KT(n,e,t,r,i){n.Ua=(u,h,_)=>async function(I,v,w,P){let V=v.view.ga(w);V.ss&&(V=await Cl(I.localStore,v.query,!1).then(({documents:b})=>v.view.ga(b,V)));const x=P&&P.targetChanges.get(v.targetId),F=P&&P.targetMismatches.get(v.targetId)!=null,q=v.view.applyChanges(V,I.isPrimaryClient,x,F);return Ll(I,v.targetId,q.ba),q.snapshot}(n,u,h,_);const s=await Cl(n.localStore,e,!0),a=new jT(e,s.ds),c=a.ga(s.documents),l=_i.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),f=a.applyChanges(c,n.isPrimaryClient,l);Ll(n,t,f.ba);const m=new $T(e,t,a);return n.xa.set(e,m),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),f.snapshot}async function QT(n,e,t){const r=G(n),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(a=>!Qs(a,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ba(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&su(r.remoteStore,i.targetId),Sa(r,i.targetId)}).catch(gr)):(Sa(r,i.targetId),await ba(r.localStore,i.targetId,!0))}async function XT(n,e){const t=G(n),r=t.xa.get(e),i=t.Oa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),su(t.remoteStore,r.targetId))}async function YT(n,e,t){const r=iw(n);try{const i=await function(a,c){const l=G(a),f=pe.now(),m=c.reduce((_,y)=>_.add(y.key),Q());let u,h;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let y=Ct(),I=Q();return l.hs.getEntries(_,m).next(v=>{y=v,y.forEach((w,P)=>{P.isValidDocument()||(I=I.add(w))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,y)).next(v=>{u=v;const w=[];for(const P of c){const V=dv(P,u.get(P.key).overlayedDocument);V!=null&&w.push(new Rn(P.key,V,Ad(V.value.mapValue),Rt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,f,w,c)}).next(v=>{h=v;const w=v.applyToLocalDocumentSet(u,I);return l.documentOverlayCache.saveOverlays(_,v.batchId,w)})}).then(()=>({batchId:h.batchId,changes:Ld(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,l){let f=a.qa[a.currentUser.toKey()];f||(f=new ue(X)),f=f.insert(c,l),a.qa[a.currentUser.toKey()]=f}(r,i.batchId,t),await gi(r,i.changes),await no(r.remoteStore)}catch(i){const s=lu(i,"Failed to persist write");t.reject(s)}}async function vf(n,e){const t=G(n);try{const r=await cT(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Ba.get(s);a&&(ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Fa=!0:i.modifiedDocuments.size>0?ee(a.Fa):i.removedDocuments.size>0&&(ee(a.Fa),a.Fa=!1))}),await gi(t,r,e)}catch(r){await gr(r)}}function Ml(n,e,t){const r=G(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.xa.forEach((s,a)=>{const c=a.view.ea(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const l=G(a);l.onlineState=c;let f=!1;l.queries.forEach((m,u)=>{for(const h of u.J_)h.ea(c)&&(f=!0)}),f&&hu(l)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JT(n,e,t){const r=G(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Ba.get(e),s=i&&i.key;if(s){let a=new ue(j.comparator);a=a.insert(s,Ce.newNoDocument(s,z.min()));const c=Q().add(s),l=new Zs(z.min(),new Map,new ue(X),a,c);await vf(r,l),r.La=r.La.remove(s),r.Ba.delete(e),du(r)}else await ba(r.localStore,e,!1).then(()=>Sa(r,e,t)).catch(gr)}async function ZT(n,e){const t=G(n),r=e.batch.batchId;try{const i=await uT(t.localStore,e);wf(t,r,null),Tf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await gi(t,i)}catch(i){await gr(i)}}async function ew(n,e,t){const r=G(n);try{const i=await function(a,c){const l=G(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return l.mutationQueue.lookupMutationBatch(f,c).next(u=>(ee(u!==null),m=u.keys(),l.mutationQueue.removeMutationBatch(f,u))).next(()=>l.mutationQueue.performConsistencyCheck(f)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(f,m,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>l.localDocuments.getDocuments(f,m))})}(r.localStore,e);wf(r,e,t),Tf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await gi(r,i)}catch(i){await gr(i)}}function Tf(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function wf(n,e,t){const r=G(n);let i=r.qa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function Sa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||Ef(n,r)})}function Ef(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(su(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),du(n))}function Ll(n,e,t){for(const r of t)r instanceof mf?(n.ka.addReference(r.key,e),tw(n,r)):r instanceof gf?(L("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||Ef(n,r.key)):$()}function tw(n,e){const t=e.key,r=t.path.canonicalString();n.La.get(t)||n.Na.has(r)||(L("SyncEngine","New document in limbo: "+t),n.Na.add(r),du(n))}function du(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new j(ae.fromString(e)),r=n.Ka.next();n.Ba.set(r,new HT(t)),n.La=n.La.insert(t,r),lf(n.remoteStore,new qt(at(Dd(t.path)),r,"TargetPurposeLimboResolution",zs.oe))}}async function gi(n,e,t){const r=G(n),i=[],s=[],a=[];r.xa.isEmpty()||(r.xa.forEach((c,l)=>{a.push(r.Ua(l,e,t).then(f=>{var m;if((f||t)&&r.isPrimaryClient){const u=f?!f.fromCache:(m=t==null?void 0:t.targetChanges.get(l.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(l.targetId,u?"current":"not-current")}if(f){i.push(f);const u=iu.zi(l.targetId,f);s.push(u)}}))}),await Promise.all(a),r.Ma.R_(i),await async function(l,f){const m=G(l);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>N.forEach(f,h=>N.forEach(h.Wi,_=>m.persistence.referenceDelegate.addReference(u,h.targetId,_)).next(()=>N.forEach(h.Gi,_=>m.persistence.referenceDelegate.removeReference(u,h.targetId,_)))))}catch(u){if(!yr(u))throw u;L("LocalStore","Failed to update sequence numbers: "+u)}for(const u of f){const h=u.targetId;if(!u.fromCache){const _=m.us.get(h),y=_.snapshotVersion,I=_.withLastLimboFreeSnapshotVersion(y);m.us=m.us.insert(h,I)}}}(r.localStore,s))}async function nw(n,e){const t=G(n);if(!t.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await of(t.localStore,e);t.currentUser=e,function(s,a){s.Qa.forEach(c=>{c.forEach(l=>{l.reject(new B(O.CANCELLED,a))})}),s.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await gi(t,r.Ts)}}function rw(n,e){const t=G(n),r=t.Ba.get(e);if(r&&r.Fa)return Q().add(r.key);{let i=Q();const s=t.Oa.get(e);if(!s)return i;for(const a of s){const c=t.xa.get(a);i=i.unionWith(c.view.fa)}return i}}function If(n){const e=G(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=vf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JT.bind(null,e),e.Ma.R_=UT.bind(null,e.eventManager),e.Ma.Wa=BT.bind(null,e.eventManager),e}function iw(n){const e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ew.bind(null,e),e}class Ss{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=eo(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return aT(this.persistence,new sT,e.initialUser,this.serializer)}ja(e){return new sf(ru.ei,this.serializer)}za(e){return new pT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ss.provider={build:()=>new Ss};class sw extends Ss{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){ee(this.persistence.referenceDelegate instanceof bs);const r=this.persistence.referenceDelegate.garbageCollector;return new Hv(r,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Oe.withCacheSize(this.cacheSizeBytes):Oe.DEFAULT;return new sf(r=>bs.ei(r,t),this.serializer)}}class Pa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ml(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nw.bind(null,this.syncEngine),await OT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new MT}()}createDatastore(e){const t=eo(e.databaseInfo.databaseId),r=function(s){return new yT(s)}(e.databaseInfo);return function(s,a,c,l){return new wT(s,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,c){return new IT(r,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Ml(this.syncEngine,t,0),function(){return Dl.p()?new Dl:new _T}())}createSyncEngine(e,t){return function(i,s,a,c,l,f,m){const u=new GT(i,s,a,c,l,f);return m&&(u.$a=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=G(i);L("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await mi(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Pa.provider={build:()=>new Pa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Pt("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Pe.UNAUTHENTICATED,this.clientId=wd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{L("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(L("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=lu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Go(n,e){n.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await of(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Fl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await uw(n);L("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Vl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Vl(e.remoteStore,i)),n._onlineComponents=e}async function uw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await Go(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Jn("Error using user provided cache. Falling back to memory cache: "+t),await Go(n,new Ss)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await Go(n,new sw(void 0));return n._offlineComponents}async function fu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await Fl(n,n._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await Fl(n,new Pa))),n._onlineComponents}function cw(n){return fu(n).then(e=>e.syncEngine)}function lw(n){return fu(n).then(e=>e.datastore)}async function hw(n){const e=await fu(n),t=e.eventManager;return t.onListen=zT.bind(null,e.syncEngine),t.onUnlisten=QT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=WT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=XT.bind(null,e.syncEngine),t}function dw(n,e,t={}){const r=new bt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,l,f){const m=new ow({next:h=>{m.eu(),a.enqueueAndForget(()=>FT(s,u)),h.fromCache&&l.source==="server"?f.reject(new B(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(h)},error:h=>f.reject(h)}),u=new qT(c,m,{includeMetadataChanges:!0,ua:!0});return LT(s,u)}(await hw(n),n.asyncQueue,e,t,r)),r.promise}function fw(n,e,t){const r=new bt;return n.asyncQueue.enqueueAndForget(async()=>{try{const i=await lw(n);r.resolve(async function(a,c,l){var f;const m=G(a),{request:u,lt:h,parent:_}=Vv(m.serializer,Jy(c),l);m.connection.Co||delete u.parent;const y=(await m.ko("RunAggregationQuery",m.serializer.databaseId,_,u,1)).filter(v=>!!v.result);ee(y.length===1);const I=(f=y[0].result)===null||f===void 0?void 0:f.aggregateFields;return Object.keys(I).reduce((v,w)=>(v[h[w]]=I[w],v),{})}(i,e,t))}catch(i){r.reject(i)}}),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(n,e,t){if(!t)throw new B(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function pw(n,e,t,r){if(e===!0&&r===!0)throw new B(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Bl(n){if(!j.isDocumentKey(n))throw new B(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ql(n){if(j.isDocumentKey(n))throw new B(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ro(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":$()}function ir(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ro(n);throw new B(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Af((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class io{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jl({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jl(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new yy;switch(r.type){case"firstParty":return new Ey(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Ul.get(t);r&&(L("ComponentProvider","Removing Datastore"),Ul.delete(t),r.terminate())}(this),Promise.resolve()}}function _w(n,e,t,r={}){var i;const s=(n=ir(n,io))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Jn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=Pe.MOCK_USER;else{c=Wm(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new B(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Pe(f)}n._authCredentials=new vy(new Td(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Tr(this.firestore,e,this._query)}}class je{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}}class Gt extends Tr{constructor(e,t,r){super(e,t,Dd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new j(e))}withConverter(e){return new Gt(this.firestore,e,this._path)}}function Rf(n,e,...t){if(n=Le(n),bf("collection","path",e),n instanceof io){const r=ae.fromString(e,...t);return ql(r),new Gt(n,null,r)}{if(!(n instanceof je||n instanceof Gt))throw new B(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ae.fromString(e,...t));return ql(r),new Gt(n.firestore,null,r)}}function mw(n,e,...t){if(n=Le(n),arguments.length===1&&(e=wd.newId()),bf("doc","path",e),n instanceof io){const r=ae.fromString(e,...t);return Bl(r),new je(n,null,new j(r))}{if(!(n instanceof je||n instanceof Gt))throw new B(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ae.fromString(e,...t));return Bl(r),new je(n.firestore,n instanceof Gt?n.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new uf(this,"async_queue_retry"),this.fu=()=>{const r=Ho();r&&L("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const t=Ho();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Ho();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new bt;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!yr(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Pt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const i=cu.createAndSchedule(this,e,t,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&$()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class so extends io{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new $l,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $l(e),this._firestoreClient=void 0,await e}}}function Sf(n,e){const t=typeof n=="object"?n:za(),r=typeof n=="string"?n:"(default)",i=In(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Gm("firestore");s&&_w(i,...s)}return i}function pu(n){if(n._terminated)throw new B(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||gw(n),n._firestoreClient}function gw(n){var e,t,r;const i=n._freezeSettings(),s=function(c,l,f,m){return new Fy(c,l,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Af(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new aw(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class vw{constructor(e,t,r){this._userDataWriter=t,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sr(we.fromBase64String(e))}catch(t){throw new B(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new sr(we.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=/^__.*__$/;class ww{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Rn(e,this.data,this.fieldMask,t,this.fieldTransforms):new pi(e,this.data,t,this.fieldTransforms)}}function Cf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class yu{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new yu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Ps(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Cf(this.Mu)&&Tw.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class Ew{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||eo(e)}$u(e,t,r,i=!1){return new yu({Mu:e,methodName:t,Ku:r,path:Te.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kf(n){const e=n._freezeSettings(),t=eo(n._databaseId);return new Ew(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Iw(n,e,t,r,i,s={}){const a=n.$u(s.merge||s.mergeFields?2:0,e,t,i);Nf("Data must be an object, but it was:",a,r);const c=Df(r,a);let l,f;if(s.merge)l=new Xe(a.fieldMask),f=a.fieldTransforms;else if(s.mergeFields){const m=[];for(const u of s.mergeFields){const h=Of(e,u,t);if(!a.contains(h))throw new B(O.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);Rw(m,h)||m.push(h)}l=new Xe(m),f=a.fieldTransforms.filter(u=>l.covers(u.field))}else l=null,f=a.fieldTransforms;return new ww(new He(c),l,f)}function Aw(n,e,t,r=!1){return vu(t,n.$u(r?4:3,e))}function vu(n,e){if(Vf(n=Le(n)))return Nf("Unsupported field value:",e,n),Df(n,e);if(n instanceof Pf)return function(r,i){if(!Cf(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const c of r){let l=vu(c,i.ku(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ov(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=pe.fromDate(r);return{timestampValue:As(i.serializer,s)}}if(r instanceof pe){const s=new pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:As(i.serializer,s)}}if(r instanceof mu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof sr)return{bytesValue:Xd(i.serializer,r._byteString)};if(r instanceof je){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:tu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof gu)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.qu("VectorValues must only contain numeric values.");return Ja(c.serializer,l)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${ro(r)}`)}(n,e)}function Df(n,e){const t={};return Ed(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):An(n,(r,i)=>{const s=vu(i,e.Ou(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Vf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof pe||n instanceof mu||n instanceof sr||n instanceof je||n instanceof Pf||n instanceof gu)}function Nf(n,e,t){if(!Vf(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=ro(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function Of(n,e,t){if((e=Le(e))instanceof _u)return e._internalPath;if(typeof e=="string")return xf(n,e);throw Ps("Field path arguments must be of type string or ",n,!1,void 0,t)}const bw=new RegExp("[~\\*/\\[\\]]");function xf(n,e,t){if(e.search(bw)>=0)throw Ps(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new _u(...e.split("."))._internalPath}catch{throw Ps(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ps(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new B(O.INVALID_ARGUMENT,c+n+l)}function Rw(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Sw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Tu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Sw extends Mf{data(){return super.data()}}function Tu(n,e){return typeof e=="string"?xf(n,e):e instanceof _u?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wu{}class Cw extends wu{}function kw(n,e,...t){let r=[];e instanceof wu&&r.push(e),r=r.concat(t),function(s){const a=s.filter(l=>l instanceof Eu).length,c=s.filter(l=>l instanceof oo).length;if(a>1||a>0&&c>0)throw new B(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class oo extends Cw{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new oo(e,t,r)}_apply(e){const t=this._parse(e);return Lf(e._query,t),new Tr(e.firestore,e.converter,va(e._query,t))}_parse(e){const t=kf(e.firestore);return function(s,a,c,l,f,m,u){let h;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new B(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Gl(u,m);const _=[];for(const y of u)_.push(Hl(l,s,y));h={arrayValue:{values:_}}}else h=Hl(l,s,u)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Gl(u,m),h=Aw(c,a,u,m==="in"||m==="not-in");return fe.create(f,m,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Dw(n,e,t){const r=e,i=Tu("where",n);return oo._create(i,r,t)}class Eu extends wu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Eu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:et.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i;const c=s.getFlattenedFilters();for(const l of c)Lf(a,l),a=va(a,l)}(e._query,t),new Tr(e.firestore,e.converter,va(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Hl(n,e,t){if(typeof(t=Le(t))=="string"){if(t==="")throw new B(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vd(e)&&t.indexOf("/")!==-1)throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ae.fromString(t));if(!j.isDocumentKey(r))throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return hl(n,new j(r))}if(t instanceof je)return hl(n,t._key);throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ro(t)}.`)}function Gl(n,e){if(!Array.isArray(n)||n.length===0)throw new B(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Lf(n,e){const t=function(i,s){for(const a of i)for(const c of a.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new B(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Vw{convertValue(e,t="none"){switch(Jt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Yt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw $()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return An(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>le(a.doubleValue));return new gu(s)}convertGeoPoint(e){return new mu(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ks(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ti(e));default:return null}}convertTimestamp(e){const t=Xt(e);return new pe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ae.fromString(e);ee(rf(r));const i=new ni(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(t)||Pt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(n){return new yw("sum",Of("sum",n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xw extends Mf{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ss(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Tu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ss extends xw{data(e={}){return super.data(e)}}class Mw{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ki(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ss(this._firestore,this._userDataWriter,r.key,r,new Ki(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const l=new ss(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Ki(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const l=new ss(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Ki(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,m=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:Lw(c.type),doc:l,oldIndex:f,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Lw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}class Ff extends Vw{constructor(e){super(),this.firestore=e}convertBytes(e){return new sr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,t)}}function Fw(n){n=ir(n,Tr);const e=ir(n.firestore,so),t=pu(e),r=new Ff(e);return Pw(n._query),dw(t,n._query).then(i=>new Mw(e,r,n,i))}function Uw(n,e,t){n=ir(n,je);const r=ir(n.firestore,so),i=Nw(n.converter,e);return Bw(r,[Iw(kf(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Rt.none())])}function Bw(n,e){return function(r,i){const s=new bt;return r.asyncQueue.enqueueAndForget(async()=>YT(await cw(r),i,s)),s.promise}(pu(n),e)}function qw(n,e){const t=ir(n.firestore,so),r=pu(t),i=My(e,(s,a)=>new mv(a,s.aggregateType,s._internalFieldPath));return fw(r,n._query,i).then(s=>function(c,l,f){const m=new Ff(c);return new vw(l,m,f)}(t,n,s))}(function(e,t=!0){(function(i){mr=i})(_r),ht(new Ze("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),c=new so(new Ty(r.getProvider("auth-internal")),new Ay(r.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new B(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ni(f.options.projectId,m)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Ge(sl,"4.7.5",e),Ge(sl,"4.7.5","esm2017")})();const On=[];function ao(n,e=qn){let t=null;const r=new Set;function i(c){if(Rh(n,c)&&(n=c,t)){const l=!On.length;for(const f of r)f[1](),On.push(f,n);if(l){for(let f=0;f<On.length;f+=2)On[f][0](On[f+1]);On.length=0}}}function s(c){i(c(n))}function a(c,l=qn){const f=[c,l];return r.add(f),r.size===1&&(t=e(i,s)||qn),c(n),()=>{r.delete(f),r.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:a}}let or=ao(null),zl=ao("main"),Cs=ao(null),jw=ao(null);const ar=10;class $w{constructor(e){this.id=e.id,this.question=e.question,this.answer=e.answer,this.wrong_answers=e.wrong_answers,this.score=0}AddScore(e){this.score=Math.min(this.score+e,ar)}RemoveScore(e){this.score=Math.max(this.score-e,0)}}var Hw=pr('<div class="w-[100vw] flex justify-center"><div><h1 class="font-medium text-3xl">Welcome to Remeberer</h1> <h3 class="m-5 text-l">Use can use this website to make your brain remeberer things</h3> <div class="flex m-8"></div></div></div>');function Gw(n,e){dr(e,!1);const t=Ha(),r=()=>pn(Cs,"$firebase_app",t),i=()=>pn(or,"$user",t);let s=it(e,"QuestionSets",8),a=it(e,"OnQuestionSetClick",8);const c=Sf(r());async function l(h){if(i()){const _=Rf(c,"game_scores",i().uid.toString(),h.name);return(await qw(_,{totalScore:Ow("score")})).data().totalScore/(ar*h.questions.length)*100}else return 0}hi();var f=Hw(),m=vt(f),u=ps(vt(m),4);Im(u,5,s,wm,(h,_)=>{var y=$a(),I=fs(y);Tm(I,()=>l(de(_)),null,(v,w)=>{Lm(v,{get question_set(){return de(_)},get progress_bar(){return de(w)},onclickfunc:()=>a()(de(_))})}),Tt(h,y)}),Tt(n,f),fr()}const zw="modulepreload",Ww=function(n,e){return new URL(n,e).href},Wl={},Kw=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=Promise.allSettled(t.map(f=>{if(f=Ww(f,r),f in Wl)return;Wl[f]=!0;const m=f.endsWith(".css"),u=m?'[rel="stylesheet"]':"";if(!!r)for(let y=a.length-1;y>=0;y--){const I=a[y];if(I.href===f&&(!m||I.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${u}`))return;const _=document.createElement("link");if(_.rel=m?"stylesheet":zw,m||(_.as="script"),_.crossOrigin="",_.href=f,l&&_.setAttribute("nonce",l),document.head.appendChild(_),m)return new Promise((y,I)=>{_.addEventListener("load",y),_.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${f}`)))})}))}function s(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return i.then(a=>{for(const c of a||[])c.status==="rejected"&&s(c.reason);return e().catch(s)})};var Qw=pr('<div class="m-0"></div>');function Xw(n,e){dr(e,!1);let t=it(e,"target",12,void 0),r=it(e,"sketch",8,void 0),i=it(e,"parentDivStyle",8,"display: block;"),s=it(e,"debug",8,!1),a;const c=Nm(),l={ref(){c("ref",t())},instance(){c("instance",a)}};function f(h){return t(h),{destroy(){t(void 0)}}}function m(h,_){return _.forEach(([y,I])=>h[y]=I),h}Dm(async()=>{const h=await Kw(()=>import("./p5.min-Ce3k8hL4.js").then(v=>v.p),[],import.meta.url),{default:_}=h,I=Object.entries(h).filter(([v,w])=>w instanceof Function&&v[0]!=="_"&&v!=="default");s()&&console.log("available p5 native classes",I),a=new _(v=>(v=m(v,I),s()&&console.log("p5 instance",v),window._p5Instance=v,r()(v)),t()),l.ref(),l.instance()}),hi();var u=Qw();Sm(u,h=>f==null?void 0:f(h)),Oh(()=>ua(u,"style",i())),Tt(n,u),fr()}function zo(n){for(let e=n.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n}function Yw(n,e){return Math.floor(Math.random()*(e-n+1))+n}function Qi(n,e){return Math.random()*(e-n)+n}class Jw{constructor(){this.questions=[]}AddToPool(e){let t=new $w(e);return this.questions.push(t),t}GetAverageScore(){let e=0;return this.questions.forEach(t=>{e+=t.score}),e/this.questions.length}GetRandomQuestion(){console.log("In GetRandomQuestion");let e=0;this.questions.forEach(s=>{e+=ar-s.score});let t=Yw(0,e);console.log("Random float:",t);let r=0,i=this.questions[0];return console.log(this.questions),this.questions.forEach(s=>{let a=r+ar-s.score;console.log("s: ",r),console.log("nextS",a),t>=r&&t<a&&(console.log("Choosen: ",s.id),i=s),r=a}),i}}var Lr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kA(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var os={exports:{}},Zw=os.exports,Kl;function eE(){return Kl||(Kl=1,function(n){(function(e,t){n.exports?n.exports=t():e.buzz=t()})(Zw,function(){var e=window.AudioContext||window.webkitAudioContext,t={defaults:{autoplay:!1,crossOrigin:null,duration:5e3,formats:[],loop:!1,placeholder:"--",preload:"metadata",volume:80,webAudioApi:!1,document:window.document},types:{mp3:"audio/mpeg",ogg:"audio/ogg",wav:"audio/wav",aac:"audio/aac",m4a:"audio/x-m4a"},sounds:[],el:document.createElement("audio"),getAudioContext:function(){if(this.audioCtx===void 0)try{this.audioCtx=e?new e:null}catch{this.audioCtx=null}return this.audioCtx},sound:function(r,i){i=i||{};var s=i.document||t.defaults.document,a=0,c=[],l={},f=t.isSupported();this.load=function(){return f?(this.sound.load(),this):this},this.play=function(){return f?(this.sound.play().catch(function(){}),this):this},this.togglePlay=function(){return f?(this.sound.paused?this.sound.play().catch(function(){}):this.sound.pause(),this):this},this.pause=function(){return f?(this.sound.pause(),this):this},this.isPaused=function(){return f?this.sound.paused:null},this.stop=function(){return f?(this.sound.pause(),this.setTime(0),this):this},this.isEnded=function(){return f?this.sound.ended:null},this.loop=function(){return f?(this.sound.loop="loop",this.bind("ended.buzzloop",function(){this.currentTime=0,this.play()}),this):this},this.unloop=function(){return f?(this.sound.removeAttribute("loop"),this.unbind("ended.buzzloop"),this):this},this.mute=function(){return f?(this.sound.muted=!0,this):this},this.unmute=function(){return f?(this.sound.muted=!1,this):this},this.toggleMute=function(){return f?(this.sound.muted=!this.sound.muted,this):this},this.isMuted=function(){return f?this.sound.muted:null},this.setVolume=function(v){return f?(v<0&&(v=0),v>100&&(v=100),this.volume=v,this.sound.volume=v/100,this):this},this.getVolume=function(){return f?this.volume:this},this.increaseVolume=function(v){return this.setVolume(this.volume+(v||1))},this.decreaseVolume=function(v){return this.setVolume(this.volume-(v||1))},this.setTime=function(v){if(!f)return this;var w=!0;return this.whenReady(function(){w===!0&&(w=!1,this.sound.currentTime=v)}),this},this.getTime=function(){if(!f)return null;var v=Math.round(this.sound.currentTime*100)/100;return isNaN(v)?t.defaults.placeholder:v},this.setPercent=function(v){return f?this.setTime(t.fromPercent(v,this.sound.duration)):this},this.getPercent=function(){if(!f)return null;var v=Math.round(t.toPercent(this.sound.currentTime,this.sound.duration));return isNaN(v)?t.defaults.placeholder:v},this.setSpeed=function(v){return f?(this.sound.playbackRate=v,this):this},this.getSpeed=function(){return f?this.sound.playbackRate:null},this.getDuration=function(){if(!f)return null;var v=Math.round(this.sound.duration*100)/100;return isNaN(v)?t.defaults.placeholder:v},this.getPlayed=function(){return f?m(this.sound.played):null},this.getBuffered=function(){return f?m(this.sound.buffered):null},this.getSeekable=function(){return f?m(this.sound.seekable):null},this.getErrorCode=function(){return f&&this.sound.error?this.sound.error.code:0},this.getErrorMessage=function(){if(!f)return null;switch(this.getErrorCode()){case 1:return"MEDIA_ERR_ABORTED";case 2:return"MEDIA_ERR_NETWORK";case 3:return"MEDIA_ERR_DECODE";case 4:return"MEDIA_ERR_SRC_NOT_SUPPORTED";default:return null}},this.getStateCode=function(){return f?this.sound.readyState:null},this.getStateMessage=function(){if(!f)return null;switch(this.getStateCode()){case 0:return"HAVE_NOTHING";case 1:return"HAVE_METADATA";case 2:return"HAVE_CURRENT_DATA";case 3:return"HAVE_FUTURE_DATA";case 4:return"HAVE_ENOUGH_DATA";default:return null}},this.getNetworkStateCode=function(){return f?this.sound.networkState:null},this.getNetworkStateMessage=function(){if(!f)return null;switch(this.getNetworkStateCode()){case 0:return"NETWORK_EMPTY";case 1:return"NETWORK_IDLE";case 2:return"NETWORK_LOADING";case 3:return"NETWORK_NO_SOURCE";default:return null}},this.set=function(v,w){return f?(this.sound[v]=w,this):this},this.get=function(v){return f?v?this.sound[v]:this.sound:null},this.bind=function(v,w){if(!f)return this;v=v.split(" ");for(var P=this,V=function(b){w.call(P,b)},x=0;x<v.length;x++){var F=v[x],q=F;F=q.split(".")[0],c.push({idx:q,func:V}),this.sound.addEventListener(F,V,!0)}return this},this.unbind=function(v){if(!f)return this;v=v.split(" ");for(var w=0;w<v.length;w++)for(var P=v[w],V=P.split(".")[0],x=0;x<c.length;x++){var F=c[x].idx.split(".");(c[x].idx===P||F[1]&&F[1]===P.replace(".",""))&&(this.sound.removeEventListener(V,c[x].func,!0),c.splice(x,1))}return this},this.bindOnce=function(v,w){if(!f)return this;var P=this;return l[a++]=!1,this.bind(v+"."+a,function(){l[a]||(l[a]=!0,w.call(P)),P.unbind(v+"."+a)}),this},this.trigger=function(v,w){if(!f)return this;v=v.split(" ");for(var P=0;P<v.length;P++)for(var V=v[P],x=0;x<c.length;x++){var F=c[x].idx.split(".");if(c[x].idx===V||F[0]&&F[0]===V.replace(".","")){var q=s.createEvent("HTMLEvents");q.initEvent(F[0],!1,!0),q.originalEvent=w,this.sound.dispatchEvent(q)}}return this},this.fadeTo=function(v,w,P){if(!f)return this;w instanceof Function?(P=w,w=t.defaults.duration):w=w||t.defaults.duration;var V=this.volume,x=w/Math.abs(V-v),F=this,q;this.play();function b(){clearTimeout(q),q=setTimeout(function(){V<v&&F.volume<v?(F.setVolume(F.volume+=1),b()):V>v&&F.volume>v?(F.setVolume(F.volume-=1),b()):P instanceof Function&&P.apply(F)},x)}return this.whenReady(function(){b()}),this},this.fadeIn=function(v,w){return f?this.setVolume(0).fadeTo(100,v,w):this},this.fadeOut=function(v,w){return f?this.fadeTo(0,v,w):this},this.fadeWith=function(v,w){return f?(this.fadeOut(w,function(){this.stop()}),v.play().fadeIn(w),this):this},this.whenReady=function(v){if(!f)return null;var w=this;this.sound.readyState===0?this.bind("canplay.buzzwhenready",function(){v.call(w)}):v.call(w)},this.addSource=function(v){var w=this,P=s.createElement("source");return P.src=v,t.types[u(v)]&&(P.type=t.types[u(v)]),this.sound.appendChild(P),P.addEventListener("error",function(V){w.trigger("sourceerror",V)}),P};function m(v){for(var w=[],P=v.length-1,V=0;V<=P;V++)w.push({start:v.start(V),end:v.end(V)});return w}function u(v){return v.split(".").pop()}if(f&&r){for(var h in t.defaults)t.defaults.hasOwnProperty(h)&&i[h]===void 0&&(i[h]=t.defaults[h]);if(this.sound=s.createElement("audio"),i.crossOrigin!==null&&(this.sound.crossOrigin=i.crossOrigin),i.webAudioApi){var _=t.getAudioContext();_&&(this.source=_.createMediaElementSource(this.sound),this.source.connect(_.destination))}if(r instanceof Array)for(var y in r)r.hasOwnProperty(y)&&this.addSource(r[y]);else if(i.formats.length)for(var I in i.formats)i.formats.hasOwnProperty(I)&&this.addSource(r+"."+i.formats[I]);else this.addSource(r);i.loop&&this.loop(),i.autoplay&&(this.sound.autoplay="autoplay"),i.preload===!0?this.sound.preload="auto":i.preload===!1?this.sound.preload="none":this.sound.preload=i.preload,this.setVolume(i.volume),t.sounds.push(this)}},group:function(r){r=s(r,arguments),this.getSounds=function(){return r},this.add=function(a){a=s(a,arguments);for(var c=0;c<a.length;c++)r.push(a[c])},this.remove=function(a){a=s(a,arguments);for(var c=0;c<a.length;c++)for(var l=0;l<r.length;l++)if(r[l]===a[c]){r.splice(l,1);break}},this.load=function(){return i("load"),this},this.play=function(){return i("play"),this},this.togglePlay=function(){return i("togglePlay"),this},this.pause=function(a){return i("pause",a),this},this.stop=function(){return i("stop"),this},this.mute=function(){return i("mute"),this},this.unmute=function(){return i("unmute"),this},this.toggleMute=function(){return i("toggleMute"),this},this.setVolume=function(a){return i("setVolume",a),this},this.increaseVolume=function(a){return i("increaseVolume",a),this},this.decreaseVolume=function(a){return i("decreaseVolume",a),this},this.loop=function(){return i("loop"),this},this.unloop=function(){return i("unloop"),this},this.setSpeed=function(a){return i("setSpeed",a),this},this.setTime=function(a){return i("setTime",a),this},this.set=function(a,c){return i("set",a,c),this},this.bind=function(a,c){return i("bind",a,c),this},this.unbind=function(a){return i("unbind",a),this},this.bindOnce=function(a,c){return i("bindOnce",a,c),this},this.trigger=function(a){return i("trigger",a),this},this.fade=function(a,c,l,f){return i("fade",a,c,l,f),this},this.fadeIn=function(a,c){return i("fadeIn",a,c),this},this.fadeOut=function(a,c){return i("fadeOut",a,c),this};function i(){for(var a=s(null,arguments),c=a.shift(),l=0;l<r.length;l++)r[l][c].apply(r[l],a)}function s(a,c){return a instanceof Array?a:Array.prototype.slice.call(c)}},all:function(){return new t.group(t.sounds)},isSupported:function(){return!!t.el.canPlayType},isOGGSupported:function(){return!!t.el.canPlayType&&t.el.canPlayType('audio/ogg; codecs="vorbis"')},isWAVSupported:function(){return!!t.el.canPlayType&&t.el.canPlayType('audio/wav; codecs="1"')},isMP3Supported:function(){return!!t.el.canPlayType&&t.el.canPlayType("audio/mpeg;")},isAACSupported:function(){return!!t.el.canPlayType&&(t.el.canPlayType("audio/x-m4a;")||t.el.canPlayType("audio/aac;"))},toTimer:function(r,i){var s,a,c;return s=Math.floor(r/3600),s=isNaN(s)?"--":s>=10?s:"0"+s,a=Math.floor(i?r/60%60:r/60),a=isNaN(a)?"--":a>=10?a:"0"+a,c=Math.floor(r%60),c=isNaN(c)?"--":c>=10?c:"0"+c,i?s+":"+a+":"+c:a+":"+c},fromTimer:function(r){var i=r.toString().split(":");return i&&i.length===3&&(r=parseInt(i[0],10)*3600+parseInt(i[1],10)*60+parseInt(i[2],10)),i&&i.length===2&&(r=parseInt(i[0],10)*60+parseInt(i[1],10)),r},toPercent:function(r,i,s){var a=Math.pow(10,s||0);return Math.round(r*100/i*a)/a},fromPercent:function(r,i,s){var a=Math.pow(10,s||0);return Math.round(i/100*r*a)/a}};return t})}(os)),os.exports}eE();var Wo={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */var Ql;function tE(){return Ql||(Ql=1,function(n){(function(){var e=function(){this.init()};e.prototype={init:function(){var u=this||t;return u._counter=1e3,u._html5AudioPool=[],u.html5PoolSize=10,u._codecs={},u._howls=[],u._muted=!1,u._volume=1,u._canPlayEvent="canplaythrough",u._navigator=typeof window<"u"&&window.navigator?window.navigator:null,u.masterGain=null,u.noAudio=!1,u.usingWebAudio=!0,u.autoSuspend=!0,u.ctx=null,u.autoUnlock=!0,u._setup(),u},volume:function(u){var h=this||t;if(u=parseFloat(u),h.ctx||m(),typeof u<"u"&&u>=0&&u<=1){if(h._volume=u,h._muted)return h;h.usingWebAudio&&h.masterGain.gain.setValueAtTime(u,t.ctx.currentTime);for(var _=0;_<h._howls.length;_++)if(!h._howls[_]._webAudio)for(var y=h._howls[_]._getSoundIds(),I=0;I<y.length;I++){var v=h._howls[_]._soundById(y[I]);v&&v._node&&(v._node.volume=v._volume*u)}return h}return h._volume},mute:function(u){var h=this||t;h.ctx||m(),h._muted=u,h.usingWebAudio&&h.masterGain.gain.setValueAtTime(u?0:h._volume,t.ctx.currentTime);for(var _=0;_<h._howls.length;_++)if(!h._howls[_]._webAudio)for(var y=h._howls[_]._getSoundIds(),I=0;I<y.length;I++){var v=h._howls[_]._soundById(y[I]);v&&v._node&&(v._node.muted=u?!0:v._muted)}return h},stop:function(){for(var u=this||t,h=0;h<u._howls.length;h++)u._howls[h].stop();return u},unload:function(){for(var u=this||t,h=u._howls.length-1;h>=0;h--)u._howls[h].unload();return u.usingWebAudio&&u.ctx&&typeof u.ctx.close<"u"&&(u.ctx.close(),u.ctx=null,m()),u},codecs:function(u){return(this||t)._codecs[u.replace(/^x-/,"")]},_setup:function(){var u=this||t;if(u.state=u.ctx&&u.ctx.state||"suspended",u._autoSuspend(),!u.usingWebAudio)if(typeof Audio<"u")try{var h=new Audio;typeof h.oncanplaythrough>"u"&&(u._canPlayEvent="canplay")}catch{u.noAudio=!0}else u.noAudio=!0;try{var h=new Audio;h.muted&&(u.noAudio=!0)}catch{}return u.noAudio||u._setupCodecs(),u},_setupCodecs:function(){var u=this||t,h=null;try{h=typeof Audio<"u"?new Audio:null}catch{return u}if(!h||typeof h.canPlayType!="function")return u;var _=h.canPlayType("audio/mpeg;").replace(/^no$/,""),y=u._navigator?u._navigator.userAgent:"",I=y.match(/OPR\/(\d+)/g),v=I&&parseInt(I[0].split("/")[1],10)<33,w=y.indexOf("Safari")!==-1&&y.indexOf("Chrome")===-1,P=y.match(/Version\/(.*?) /),V=w&&P&&parseInt(P[1],10)<15;return u._codecs={mp3:!!(!v&&(_||h.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!_,opus:!!h.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(h.canPlayType('audio/wav; codecs="1"')||h.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!h.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!h.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(h.canPlayType("audio/x-m4a;")||h.canPlayType("audio/m4a;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(h.canPlayType("audio/x-m4b;")||h.canPlayType("audio/m4b;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(h.canPlayType("audio/x-mp4;")||h.canPlayType("audio/mp4;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!V&&h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!V&&h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!h.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(h.canPlayType("audio/x-flac;")||h.canPlayType("audio/flac;")).replace(/^no$/,"")},u},_unlockAudio:function(){var u=this||t;if(!(u._audioUnlocked||!u.ctx)){u._audioUnlocked=!1,u.autoUnlock=!1,!u._mobileUnloaded&&u.ctx.sampleRate!==44100&&(u._mobileUnloaded=!0,u.unload()),u._scratchBuffer=u.ctx.createBuffer(1,1,22050);var h=function(_){for(;u._html5AudioPool.length<u.html5PoolSize;)try{var y=new Audio;y._unlocked=!0,u._releaseHtml5Audio(y)}catch{u.noAudio=!0;break}for(var I=0;I<u._howls.length;I++)if(!u._howls[I]._webAudio)for(var v=u._howls[I]._getSoundIds(),w=0;w<v.length;w++){var P=u._howls[I]._soundById(v[w]);P&&P._node&&!P._node._unlocked&&(P._node._unlocked=!0,P._node.load())}u._autoResume();var V=u.ctx.createBufferSource();V.buffer=u._scratchBuffer,V.connect(u.ctx.destination),typeof V.start>"u"?V.noteOn(0):V.start(0),typeof u.ctx.resume=="function"&&u.ctx.resume(),V.onended=function(){V.disconnect(0),u._audioUnlocked=!0,document.removeEventListener("touchstart",h,!0),document.removeEventListener("touchend",h,!0),document.removeEventListener("click",h,!0),document.removeEventListener("keydown",h,!0);for(var x=0;x<u._howls.length;x++)u._howls[x]._emit("unlock")}};return document.addEventListener("touchstart",h,!0),document.addEventListener("touchend",h,!0),document.addEventListener("click",h,!0),document.addEventListener("keydown",h,!0),u}},_obtainHtml5Audio:function(){var u=this||t;if(u._html5AudioPool.length)return u._html5AudioPool.pop();var h=new Audio().play();return h&&typeof Promise<"u"&&(h instanceof Promise||typeof h.then=="function")&&h.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(u){var h=this||t;return u._unlocked&&h._html5AudioPool.push(u),h},_autoSuspend:function(){var u=this;if(!(!u.autoSuspend||!u.ctx||typeof u.ctx.suspend>"u"||!t.usingWebAudio)){for(var h=0;h<u._howls.length;h++)if(u._howls[h]._webAudio){for(var _=0;_<u._howls[h]._sounds.length;_++)if(!u._howls[h]._sounds[_]._paused)return u}return u._suspendTimer&&clearTimeout(u._suspendTimer),u._suspendTimer=setTimeout(function(){if(u.autoSuspend){u._suspendTimer=null,u.state="suspending";var y=function(){u.state="suspended",u._resumeAfterSuspend&&(delete u._resumeAfterSuspend,u._autoResume())};u.ctx.suspend().then(y,y)}},3e4),u}},_autoResume:function(){var u=this;if(!(!u.ctx||typeof u.ctx.resume>"u"||!t.usingWebAudio))return u.state==="running"&&u.ctx.state!=="interrupted"&&u._suspendTimer?(clearTimeout(u._suspendTimer),u._suspendTimer=null):u.state==="suspended"||u.state==="running"&&u.ctx.state==="interrupted"?(u.ctx.resume().then(function(){u.state="running";for(var h=0;h<u._howls.length;h++)u._howls[h]._emit("resume")}),u._suspendTimer&&(clearTimeout(u._suspendTimer),u._suspendTimer=null)):u.state==="suspending"&&(u._resumeAfterSuspend=!0),u}};var t=new e,r=function(u){var h=this;if(!u.src||u.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}h.init(u)};r.prototype={init:function(u){var h=this;return t.ctx||m(),h._autoplay=u.autoplay||!1,h._format=typeof u.format!="string"?u.format:[u.format],h._html5=u.html5||!1,h._muted=u.mute||!1,h._loop=u.loop||!1,h._pool=u.pool||5,h._preload=typeof u.preload=="boolean"||u.preload==="metadata"?u.preload:!0,h._rate=u.rate||1,h._sprite=u.sprite||{},h._src=typeof u.src!="string"?u.src:[u.src],h._volume=u.volume!==void 0?u.volume:1,h._xhr={method:u.xhr&&u.xhr.method?u.xhr.method:"GET",headers:u.xhr&&u.xhr.headers?u.xhr.headers:null,withCredentials:u.xhr&&u.xhr.withCredentials?u.xhr.withCredentials:!1},h._duration=0,h._state="unloaded",h._sounds=[],h._endTimers={},h._queue=[],h._playLock=!1,h._onend=u.onend?[{fn:u.onend}]:[],h._onfade=u.onfade?[{fn:u.onfade}]:[],h._onload=u.onload?[{fn:u.onload}]:[],h._onloaderror=u.onloaderror?[{fn:u.onloaderror}]:[],h._onplayerror=u.onplayerror?[{fn:u.onplayerror}]:[],h._onpause=u.onpause?[{fn:u.onpause}]:[],h._onplay=u.onplay?[{fn:u.onplay}]:[],h._onstop=u.onstop?[{fn:u.onstop}]:[],h._onmute=u.onmute?[{fn:u.onmute}]:[],h._onvolume=u.onvolume?[{fn:u.onvolume}]:[],h._onrate=u.onrate?[{fn:u.onrate}]:[],h._onseek=u.onseek?[{fn:u.onseek}]:[],h._onunlock=u.onunlock?[{fn:u.onunlock}]:[],h._onresume=[],h._webAudio=t.usingWebAudio&&!h._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(h),h._autoplay&&h._queue.push({event:"play",action:function(){h.play()}}),h._preload&&h._preload!=="none"&&h.load(),h},load:function(){var u=this,h=null;if(t.noAudio){u._emit("loaderror",null,"No audio support.");return}typeof u._src=="string"&&(u._src=[u._src]);for(var _=0;_<u._src.length;_++){var y,I;if(u._format&&u._format[_])y=u._format[_];else{if(I=u._src[_],typeof I!="string"){u._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}y=/^data:audio\/([^;,]+);/i.exec(I),y||(y=/\.([^.]+)$/.exec(I.split("?",1)[0])),y&&(y=y[1].toLowerCase())}if(y||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),y&&t.codecs(y)){h=u._src[_];break}}if(!h){u._emit("loaderror",null,"No codec support for selected audio sources.");return}return u._src=h,u._state="loading",window.location.protocol==="https:"&&h.slice(0,5)==="http:"&&(u._html5=!0,u._webAudio=!1),new i(u),u._webAudio&&a(u),u},play:function(u,h){var _=this,y=null;if(typeof u=="number")y=u,u=null;else{if(typeof u=="string"&&_._state==="loaded"&&!_._sprite[u])return null;if(typeof u>"u"&&(u="__default",!_._playLock)){for(var I=0,v=0;v<_._sounds.length;v++)_._sounds[v]._paused&&!_._sounds[v]._ended&&(I++,y=_._sounds[v]._id);I===1?u=null:y=null}}var w=y?_._soundById(y):_._inactiveSound();if(!w)return null;if(y&&!u&&(u=w._sprite||"__default"),_._state!=="loaded"){w._sprite=u,w._ended=!1;var P=w._id;return _._queue.push({event:"play",action:function(){_.play(P)}}),P}if(y&&!w._paused)return h||_._loadQueue("play"),w._id;_._webAudio&&t._autoResume();var V=Math.max(0,w._seek>0?w._seek:_._sprite[u][0]/1e3),x=Math.max(0,(_._sprite[u][0]+_._sprite[u][1])/1e3-V),F=x*1e3/Math.abs(w._rate),q=_._sprite[u][0]/1e3,b=(_._sprite[u][0]+_._sprite[u][1])/1e3;w._sprite=u,w._ended=!1;var T=function(){w._paused=!1,w._seek=V,w._start=q,w._stop=b,w._loop=!!(w._loop||_._sprite[u][2])};if(V>=b){_._ended(w);return}var E=w._node;if(_._webAudio){var R=function(){_._playLock=!1,T(),_._refreshBuffer(w);var me=w._muted||_._muted?0:w._volume;E.gain.setValueAtTime(me,t.ctx.currentTime),w._playStart=t.ctx.currentTime,typeof E.bufferSource.start>"u"?w._loop?E.bufferSource.noteGrainOn(0,V,86400):E.bufferSource.noteGrainOn(0,V,x):w._loop?E.bufferSource.start(0,V,86400):E.bufferSource.start(0,V,x),F!==1/0&&(_._endTimers[w._id]=setTimeout(_._ended.bind(_,w),F)),h||setTimeout(function(){_._emit("play",w._id),_._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?R():(_._playLock=!0,_.once("resume",R),_._clearTimer(w._id))}else{var S=function(){E.currentTime=V,E.muted=w._muted||_._muted||t._muted||E.muted,E.volume=w._volume*t.volume(),E.playbackRate=w._rate;try{var me=E.play();if(me&&typeof Promise<"u"&&(me instanceof Promise||typeof me.then=="function")?(_._playLock=!0,T(),me.then(function(){_._playLock=!1,E._unlocked=!0,h?_._loadQueue():_._emit("play",w._id)}).catch(function(){_._playLock=!1,_._emit("playerror",w._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),w._ended=!0,w._paused=!0})):h||(_._playLock=!1,T(),_._emit("play",w._id)),E.playbackRate=w._rate,E.paused){_._emit("playerror",w._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}u!=="__default"||w._loop?_._endTimers[w._id]=setTimeout(_._ended.bind(_,w),F):(_._endTimers[w._id]=function(){_._ended(w),E.removeEventListener("ended",_._endTimers[w._id],!1)},E.addEventListener("ended",_._endTimers[w._id],!1))}catch(_t){_._emit("playerror",w._id,_t)}};E.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(E.src=_._src,E.load());var k=window&&window.ejecta||!E.readyState&&t._navigator.isCocoonJS;if(E.readyState>=3||k)S();else{_._playLock=!0,_._state="loading";var A=function(){_._state="loaded",S(),E.removeEventListener(t._canPlayEvent,A,!1)};E.addEventListener(t._canPlayEvent,A,!1),_._clearTimer(w._id)}}return w._id},pause:function(u){var h=this;if(h._state!=="loaded"||h._playLock)return h._queue.push({event:"pause",action:function(){h.pause(u)}}),h;for(var _=h._getSoundIds(u),y=0;y<_.length;y++){h._clearTimer(_[y]);var I=h._soundById(_[y]);if(I&&!I._paused&&(I._seek=h.seek(_[y]),I._rateSeek=0,I._paused=!0,h._stopFade(_[y]),I._node))if(h._webAudio){if(!I._node.bufferSource)continue;typeof I._node.bufferSource.stop>"u"?I._node.bufferSource.noteOff(0):I._node.bufferSource.stop(0),h._cleanBuffer(I._node)}else(!isNaN(I._node.duration)||I._node.duration===1/0)&&I._node.pause();arguments[1]||h._emit("pause",I?I._id:null)}return h},stop:function(u,h){var _=this;if(_._state!=="loaded"||_._playLock)return _._queue.push({event:"stop",action:function(){_.stop(u)}}),_;for(var y=_._getSoundIds(u),I=0;I<y.length;I++){_._clearTimer(y[I]);var v=_._soundById(y[I]);v&&(v._seek=v._start||0,v._rateSeek=0,v._paused=!0,v._ended=!0,_._stopFade(y[I]),v._node&&(_._webAudio?v._node.bufferSource&&(typeof v._node.bufferSource.stop>"u"?v._node.bufferSource.noteOff(0):v._node.bufferSource.stop(0),_._cleanBuffer(v._node)):(!isNaN(v._node.duration)||v._node.duration===1/0)&&(v._node.currentTime=v._start||0,v._node.pause(),v._node.duration===1/0&&_._clearSound(v._node))),h||_._emit("stop",v._id))}return _},mute:function(u,h){var _=this;if(_._state!=="loaded"||_._playLock)return _._queue.push({event:"mute",action:function(){_.mute(u,h)}}),_;if(typeof h>"u")if(typeof u=="boolean")_._muted=u;else return _._muted;for(var y=_._getSoundIds(h),I=0;I<y.length;I++){var v=_._soundById(y[I]);v&&(v._muted=u,v._interval&&_._stopFade(v._id),_._webAudio&&v._node?v._node.gain.setValueAtTime(u?0:v._volume,t.ctx.currentTime):v._node&&(v._node.muted=t._muted?!0:u),_._emit("mute",v._id))}return _},volume:function(){var u=this,h=arguments,_,y;if(h.length===0)return u._volume;if(h.length===1||h.length===2&&typeof h[1]>"u"){var I=u._getSoundIds(),v=I.indexOf(h[0]);v>=0?y=parseInt(h[0],10):_=parseFloat(h[0])}else h.length>=2&&(_=parseFloat(h[0]),y=parseInt(h[1],10));var w;if(typeof _<"u"&&_>=0&&_<=1){if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"volume",action:function(){u.volume.apply(u,h)}}),u;typeof y>"u"&&(u._volume=_),y=u._getSoundIds(y);for(var P=0;P<y.length;P++)w=u._soundById(y[P]),w&&(w._volume=_,h[2]||u._stopFade(y[P]),u._webAudio&&w._node&&!w._muted?w._node.gain.setValueAtTime(_,t.ctx.currentTime):w._node&&!w._muted&&(w._node.volume=_*t.volume()),u._emit("volume",w._id))}else return w=y?u._soundById(y):u._sounds[0],w?w._volume:0;return u},fade:function(u,h,_,y){var I=this;if(I._state!=="loaded"||I._playLock)return I._queue.push({event:"fade",action:function(){I.fade(u,h,_,y)}}),I;u=Math.min(Math.max(0,parseFloat(u)),1),h=Math.min(Math.max(0,parseFloat(h)),1),_=parseFloat(_),I.volume(u,y);for(var v=I._getSoundIds(y),w=0;w<v.length;w++){var P=I._soundById(v[w]);if(P){if(y||I._stopFade(v[w]),I._webAudio&&!P._muted){var V=t.ctx.currentTime,x=V+_/1e3;P._volume=u,P._node.gain.setValueAtTime(u,V),P._node.gain.linearRampToValueAtTime(h,x)}I._startFadeInterval(P,u,h,_,v[w],typeof y>"u")}}return I},_startFadeInterval:function(u,h,_,y,I,v){var w=this,P=h,V=_-h,x=Math.abs(V/.01),F=Math.max(4,x>0?y/x:y),q=Date.now();u._fadeTo=_,u._interval=setInterval(function(){var b=(Date.now()-q)/y;q=Date.now(),P+=V*b,P=Math.round(P*100)/100,V<0?P=Math.max(_,P):P=Math.min(_,P),w._webAudio?u._volume=P:w.volume(P,u._id,!0),v&&(w._volume=P),(_<h&&P<=_||_>h&&P>=_)&&(clearInterval(u._interval),u._interval=null,u._fadeTo=null,w.volume(_,u._id),w._emit("fade",u._id))},F)},_stopFade:function(u){var h=this,_=h._soundById(u);return _&&_._interval&&(h._webAudio&&_._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(_._interval),_._interval=null,h.volume(_._fadeTo,u),_._fadeTo=null,h._emit("fade",u)),h},loop:function(){var u=this,h=arguments,_,y,I;if(h.length===0)return u._loop;if(h.length===1)if(typeof h[0]=="boolean")_=h[0],u._loop=_;else return I=u._soundById(parseInt(h[0],10)),I?I._loop:!1;else h.length===2&&(_=h[0],y=parseInt(h[1],10));for(var v=u._getSoundIds(y),w=0;w<v.length;w++)I=u._soundById(v[w]),I&&(I._loop=_,u._webAudio&&I._node&&I._node.bufferSource&&(I._node.bufferSource.loop=_,_&&(I._node.bufferSource.loopStart=I._start||0,I._node.bufferSource.loopEnd=I._stop,u.playing(v[w])&&(u.pause(v[w],!0),u.play(v[w],!0)))));return u},rate:function(){var u=this,h=arguments,_,y;if(h.length===0)y=u._sounds[0]._id;else if(h.length===1){var I=u._getSoundIds(),v=I.indexOf(h[0]);v>=0?y=parseInt(h[0],10):_=parseFloat(h[0])}else h.length===2&&(_=parseFloat(h[0]),y=parseInt(h[1],10));var w;if(typeof _=="number"){if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"rate",action:function(){u.rate.apply(u,h)}}),u;typeof y>"u"&&(u._rate=_),y=u._getSoundIds(y);for(var P=0;P<y.length;P++)if(w=u._soundById(y[P]),w){u.playing(y[P])&&(w._rateSeek=u.seek(y[P]),w._playStart=u._webAudio?t.ctx.currentTime:w._playStart),w._rate=_,u._webAudio&&w._node&&w._node.bufferSource?w._node.bufferSource.playbackRate.setValueAtTime(_,t.ctx.currentTime):w._node&&(w._node.playbackRate=_);var V=u.seek(y[P]),x=(u._sprite[w._sprite][0]+u._sprite[w._sprite][1])/1e3-V,F=x*1e3/Math.abs(w._rate);(u._endTimers[y[P]]||!w._paused)&&(u._clearTimer(y[P]),u._endTimers[y[P]]=setTimeout(u._ended.bind(u,w),F)),u._emit("rate",w._id)}}else return w=u._soundById(y),w?w._rate:u._rate;return u},seek:function(){var u=this,h=arguments,_,y;if(h.length===0)u._sounds.length&&(y=u._sounds[0]._id);else if(h.length===1){var I=u._getSoundIds(),v=I.indexOf(h[0]);v>=0?y=parseInt(h[0],10):u._sounds.length&&(y=u._sounds[0]._id,_=parseFloat(h[0]))}else h.length===2&&(_=parseFloat(h[0]),y=parseInt(h[1],10));if(typeof y>"u")return 0;if(typeof _=="number"&&(u._state!=="loaded"||u._playLock))return u._queue.push({event:"seek",action:function(){u.seek.apply(u,h)}}),u;var w=u._soundById(y);if(w)if(typeof _=="number"&&_>=0){var P=u.playing(y);P&&u.pause(y,!0),w._seek=_,w._ended=!1,u._clearTimer(y),!u._webAudio&&w._node&&!isNaN(w._node.duration)&&(w._node.currentTime=_);var V=function(){P&&u.play(y,!0),u._emit("seek",y)};if(P&&!u._webAudio){var x=function(){u._playLock?setTimeout(x,0):V()};setTimeout(x,0)}else V()}else if(u._webAudio){var F=u.playing(y)?t.ctx.currentTime-w._playStart:0,q=w._rateSeek?w._rateSeek-w._seek:0;return w._seek+(q+F*Math.abs(w._rate))}else return w._node.currentTime;return u},playing:function(u){var h=this;if(typeof u=="number"){var _=h._soundById(u);return _?!_._paused:!1}for(var y=0;y<h._sounds.length;y++)if(!h._sounds[y]._paused)return!0;return!1},duration:function(u){var h=this,_=h._duration,y=h._soundById(u);return y&&(_=h._sprite[y._sprite][1]/1e3),_},state:function(){return this._state},unload:function(){for(var u=this,h=u._sounds,_=0;_<h.length;_++)h[_]._paused||u.stop(h[_]._id),u._webAudio||(u._clearSound(h[_]._node),h[_]._node.removeEventListener("error",h[_]._errorFn,!1),h[_]._node.removeEventListener(t._canPlayEvent,h[_]._loadFn,!1),h[_]._node.removeEventListener("ended",h[_]._endFn,!1),t._releaseHtml5Audio(h[_]._node)),delete h[_]._node,u._clearTimer(h[_]._id);var y=t._howls.indexOf(u);y>=0&&t._howls.splice(y,1);var I=!0;for(_=0;_<t._howls.length;_++)if(t._howls[_]._src===u._src||u._src.indexOf(t._howls[_]._src)>=0){I=!1;break}return I&&delete s[u._src],t.noAudio=!1,u._state="unloaded",u._sounds=[],u=null,null},on:function(u,h,_,y){var I=this,v=I["_on"+u];return typeof h=="function"&&v.push(y?{id:_,fn:h,once:y}:{id:_,fn:h}),I},off:function(u,h,_){var y=this,I=y["_on"+u],v=0;if(typeof h=="number"&&(_=h,h=null),h||_)for(v=0;v<I.length;v++){var w=_===I[v].id;if(h===I[v].fn&&w||!h&&w){I.splice(v,1);break}}else if(u)y["_on"+u]=[];else{var P=Object.keys(y);for(v=0;v<P.length;v++)P[v].indexOf("_on")===0&&Array.isArray(y[P[v]])&&(y[P[v]]=[])}return y},once:function(u,h,_){var y=this;return y.on(u,h,_,1),y},_emit:function(u,h,_){for(var y=this,I=y["_on"+u],v=I.length-1;v>=0;v--)(!I[v].id||I[v].id===h||u==="load")&&(setTimeout((function(w){w.call(this,h,_)}).bind(y,I[v].fn),0),I[v].once&&y.off(u,I[v].fn,I[v].id));return y._loadQueue(u),y},_loadQueue:function(u){var h=this;if(h._queue.length>0){var _=h._queue[0];_.event===u&&(h._queue.shift(),h._loadQueue()),u||_.action()}return h},_ended:function(u){var h=this,_=u._sprite;if(!h._webAudio&&u._node&&!u._node.paused&&!u._node.ended&&u._node.currentTime<u._stop)return setTimeout(h._ended.bind(h,u),100),h;var y=!!(u._loop||h._sprite[_][2]);if(h._emit("end",u._id),!h._webAudio&&y&&h.stop(u._id,!0).play(u._id),h._webAudio&&y){h._emit("play",u._id),u._seek=u._start||0,u._rateSeek=0,u._playStart=t.ctx.currentTime;var I=(u._stop-u._start)*1e3/Math.abs(u._rate);h._endTimers[u._id]=setTimeout(h._ended.bind(h,u),I)}return h._webAudio&&!y&&(u._paused=!0,u._ended=!0,u._seek=u._start||0,u._rateSeek=0,h._clearTimer(u._id),h._cleanBuffer(u._node),t._autoSuspend()),!h._webAudio&&!y&&h.stop(u._id,!0),h},_clearTimer:function(u){var h=this;if(h._endTimers[u]){if(typeof h._endTimers[u]!="function")clearTimeout(h._endTimers[u]);else{var _=h._soundById(u);_&&_._node&&_._node.removeEventListener("ended",h._endTimers[u],!1)}delete h._endTimers[u]}return h},_soundById:function(u){for(var h=this,_=0;_<h._sounds.length;_++)if(u===h._sounds[_]._id)return h._sounds[_];return null},_inactiveSound:function(){var u=this;u._drain();for(var h=0;h<u._sounds.length;h++)if(u._sounds[h]._ended)return u._sounds[h].reset();return new i(u)},_drain:function(){var u=this,h=u._pool,_=0,y=0;if(!(u._sounds.length<h)){for(y=0;y<u._sounds.length;y++)u._sounds[y]._ended&&_++;for(y=u._sounds.length-1;y>=0;y--){if(_<=h)return;u._sounds[y]._ended&&(u._webAudio&&u._sounds[y]._node&&u._sounds[y]._node.disconnect(0),u._sounds.splice(y,1),_--)}}},_getSoundIds:function(u){var h=this;if(typeof u>"u"){for(var _=[],y=0;y<h._sounds.length;y++)_.push(h._sounds[y]._id);return _}else return[u]},_refreshBuffer:function(u){var h=this;return u._node.bufferSource=t.ctx.createBufferSource(),u._node.bufferSource.buffer=s[h._src],u._panner?u._node.bufferSource.connect(u._panner):u._node.bufferSource.connect(u._node),u._node.bufferSource.loop=u._loop,u._loop&&(u._node.bufferSource.loopStart=u._start||0,u._node.bufferSource.loopEnd=u._stop||0),u._node.bufferSource.playbackRate.setValueAtTime(u._rate,t.ctx.currentTime),h},_cleanBuffer:function(u){var h=this,_=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!u.bufferSource)return h;if(t._scratchBuffer&&u.bufferSource&&(u.bufferSource.onended=null,u.bufferSource.disconnect(0),_))try{u.bufferSource.buffer=t._scratchBuffer}catch{}return u.bufferSource=null,h},_clearSound:function(u){var h=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);h||(u.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(u){this._parent=u,this.init()};i.prototype={init:function(){var u=this,h=u._parent;return u._muted=h._muted,u._loop=h._loop,u._volume=h._volume,u._rate=h._rate,u._seek=0,u._paused=!0,u._ended=!0,u._sprite="__default",u._id=++t._counter,h._sounds.push(u),u.create(),u},create:function(){var u=this,h=u._parent,_=t._muted||u._muted||u._parent._muted?0:u._volume;return h._webAudio?(u._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),u._node.gain.setValueAtTime(_,t.ctx.currentTime),u._node.paused=!0,u._node.connect(t.masterGain)):t.noAudio||(u._node=t._obtainHtml5Audio(),u._errorFn=u._errorListener.bind(u),u._node.addEventListener("error",u._errorFn,!1),u._loadFn=u._loadListener.bind(u),u._node.addEventListener(t._canPlayEvent,u._loadFn,!1),u._endFn=u._endListener.bind(u),u._node.addEventListener("ended",u._endFn,!1),u._node.src=h._src,u._node.preload=h._preload===!0?"auto":h._preload,u._node.volume=_*t.volume(),u._node.load()),u},reset:function(){var u=this,h=u._parent;return u._muted=h._muted,u._loop=h._loop,u._volume=h._volume,u._rate=h._rate,u._seek=0,u._rateSeek=0,u._paused=!0,u._ended=!0,u._sprite="__default",u._id=++t._counter,u},_errorListener:function(){var u=this;u._parent._emit("loaderror",u._id,u._node.error?u._node.error.code:0),u._node.removeEventListener("error",u._errorFn,!1)},_loadListener:function(){var u=this,h=u._parent;h._duration=Math.ceil(u._node.duration*10)/10,Object.keys(h._sprite).length===0&&(h._sprite={__default:[0,h._duration*1e3]}),h._state!=="loaded"&&(h._state="loaded",h._emit("load"),h._loadQueue()),u._node.removeEventListener(t._canPlayEvent,u._loadFn,!1)},_endListener:function(){var u=this,h=u._parent;h._duration===1/0&&(h._duration=Math.ceil(u._node.duration*10)/10,h._sprite.__default[1]===1/0&&(h._sprite.__default[1]=h._duration*1e3),h._ended(u)),u._node.removeEventListener("ended",u._endFn,!1)}};var s={},a=function(u){var h=u._src;if(s[h]){u._duration=s[h].duration,f(u);return}if(/^data:[^;]+;base64,/.test(h)){for(var _=atob(h.split(",")[1]),y=new Uint8Array(_.length),I=0;I<_.length;++I)y[I]=_.charCodeAt(I);l(y.buffer,u)}else{var v=new XMLHttpRequest;v.open(u._xhr.method,h,!0),v.withCredentials=u._xhr.withCredentials,v.responseType="arraybuffer",u._xhr.headers&&Object.keys(u._xhr.headers).forEach(function(w){v.setRequestHeader(w,u._xhr.headers[w])}),v.onload=function(){var w=(v.status+"")[0];if(w!=="0"&&w!=="2"&&w!=="3"){u._emit("loaderror",null,"Failed loading audio file with status: "+v.status+".");return}l(v.response,u)},v.onerror=function(){u._webAudio&&(u._html5=!0,u._webAudio=!1,u._sounds=[],delete s[h],u.load())},c(v)}},c=function(u){try{u.send()}catch{u.onerror()}},l=function(u,h){var _=function(){h._emit("loaderror",null,"Decoding audio data failed.")},y=function(I){I&&h._sounds.length>0?(s[h._src]=I,f(h,I)):_()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(u).then(y).catch(_):t.ctx.decodeAudioData(u,y,_)},f=function(u,h){h&&!u._duration&&(u._duration=h.duration),Object.keys(u._sprite).length===0&&(u._sprite={__default:[0,u._duration*1e3]}),u._state!=="loaded"&&(u._state="loaded",u._emit("load"),u._loadQueue())},m=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var u=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),h=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),_=h?parseInt(h[1],10):null;if(u&&_&&_<9){var y=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!y&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};n.Howler=t,n.Howl=r,typeof Lr<"u"?(Lr.HowlerGlobal=e,Lr.Howler=t,Lr.Howl=r,Lr.Sound=i):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=r,window.Sound=i)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var r=this;if(!r.ctx||!r.ctx.listener)return r;for(var i=r._howls.length-1;i>=0;i--)r._howls[i].stereo(t);return r},HowlerGlobal.prototype.pos=function(t,r,i){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(r=typeof r!="number"?s._pos[1]:r,i=typeof i!="number"?s._pos[2]:i,typeof t=="number")s._pos=[t,r,i],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(t,r,i,s,a,c){var l=this;if(!l.ctx||!l.ctx.listener)return l;var f=l._orientation;if(r=typeof r!="number"?f[1]:r,i=typeof i!="number"?f[2]:i,s=typeof s!="number"?f[3]:s,a=typeof a!="number"?f[4]:a,c=typeof c!="number"?f[5]:c,typeof t=="number")l._orientation=[t,r,i,s,a,c],typeof l.ctx.listener.forwardX<"u"?(l.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),l.ctx.listener.forwardY.setTargetAtTime(r,Howler.ctx.currentTime,.1),l.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),l.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),l.ctx.listener.upY.setTargetAtTime(a,Howler.ctx.currentTime,.1),l.ctx.listener.upZ.setTargetAtTime(c,Howler.ctx.currentTime,.1)):l.ctx.listener.setOrientation(t,r,i,s,a,c);else return f;return l},Howl.prototype.init=function(t){return function(r){var i=this;return i._orientation=r.orientation||[1,0,0],i._stereo=r.stereo||null,i._pos=r.pos||null,i._pannerAttr={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:360,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:360,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:0,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:"inverse",maxDistance:typeof r.maxDistance<"u"?r.maxDistance:1e4,panningModel:typeof r.panningModel<"u"?r.panningModel:"HRTF",refDistance:typeof r.refDistance<"u"?r.refDistance:1,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:1},i._onstereo=r.onstereo?[{fn:r.onstereo}]:[],i._onpos=r.onpos?[{fn:r.onpos}]:[],i._onorientation=r.onorientation?[{fn:r.onorientation}]:[],t.call(this,r)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,r){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(t,r)}}),i;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof r>"u")if(typeof t=="number")i._stereo=t,i._pos=[t,0,0];else return i._stereo;for(var a=i._getSoundIds(r),c=0;c<a.length;c++){var l=i._soundById(a[c]);if(l)if(typeof t=="number")l._stereo=t,l._pos=[t,0,0],l._node&&(l._pannerAttr.panningModel="equalpower",(!l._panner||!l._panner.pan)&&e(l,s),s==="spatial"?typeof l._panner.positionX<"u"?(l._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),l._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),l._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):l._panner.setPosition(t,0,0):l._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),i._emit("stereo",l._id);else return l._stereo}return i},Howl.prototype.pos=function(t,r,i,s){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"pos",action:function(){a.pos(t,r,i,s)}}),a;if(r=typeof r!="number"?0:r,i=typeof i!="number"?-.5:i,typeof s>"u")if(typeof t=="number")a._pos=[t,r,i];else return a._pos;for(var c=a._getSoundIds(s),l=0;l<c.length;l++){var f=a._soundById(c[l]);if(f)if(typeof t=="number")f._pos=[t,r,i],f._node&&((!f._panner||f._panner.pan)&&e(f,"spatial"),typeof f._panner.positionX<"u"?(f._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),f._panner.positionY.setValueAtTime(r,Howler.ctx.currentTime),f._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):f._panner.setPosition(t,r,i)),a._emit("pos",f._id);else return f._pos}return a},Howl.prototype.orientation=function(t,r,i,s){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"orientation",action:function(){a.orientation(t,r,i,s)}}),a;if(r=typeof r!="number"?a._orientation[1]:r,i=typeof i!="number"?a._orientation[2]:i,typeof s>"u")if(typeof t=="number")a._orientation=[t,r,i];else return a._orientation;for(var c=a._getSoundIds(s),l=0;l<c.length;l++){var f=a._soundById(c[l]);if(f)if(typeof t=="number")f._orientation=[t,r,i],f._node&&(f._panner||(f._pos||(f._pos=a._pos||[0,0,-.5]),e(f,"spatial")),typeof f._panner.orientationX<"u"?(f._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),f._panner.orientationY.setValueAtTime(r,Howler.ctx.currentTime),f._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):f._panner.setOrientation(t,r,i)),a._emit("orientation",f._id);else return f._orientation}return a},Howl.prototype.pannerAttr=function(){var t=this,r=arguments,i,s,a;if(!t._webAudio)return t;if(r.length===0)return t._pannerAttr;if(r.length===1)if(typeof r[0]=="object")i=r[0],typeof s>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),t._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:t._panningModel});else return a=t._soundById(parseInt(r[0],10)),a?a._pannerAttr:t._pannerAttr;else r.length===2&&(i=r[0],s=parseInt(r[1],10));for(var c=t._getSoundIds(s),l=0;l<c.length;l++)if(a=t._soundById(c[l]),a){var f=a._pannerAttr;f={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:f.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:f.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:f.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:f.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:f.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:f.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:f.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:f.panningModel};var m=a._panner;m||(a._pos||(a._pos=t._pos||[0,0,-.5]),e(a,"spatial"),m=a._panner),m.coneInnerAngle=f.coneInnerAngle,m.coneOuterAngle=f.coneOuterAngle,m.coneOuterGain=f.coneOuterGain,m.distanceModel=f.distanceModel,m.maxDistance=f.maxDistance,m.refDistance=f.refDistance,m.rolloffFactor=f.rolloffFactor,m.panningModel=f.panningModel}return t},Sound.prototype.init=function(t){return function(){var r=this,i=r._parent;r._orientation=i._orientation,r._stereo=i._stereo,r._pos=i._pos,r._pannerAttr=i._pannerAttr,t.call(this),r._stereo?i.stereo(r._stereo):r._pos&&i.pos(r._pos[0],r._pos[1],r._pos[2],r._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var r=this,i=r._parent;return r._orientation=i._orientation,r._stereo=i._stereo,r._pos=i._pos,r._pannerAttr=i._pannerAttr,r._stereo?i.stereo(r._stereo):r._pos?i.pos(r._pos[0],r._pos[1],r._pos[2],r._id):r._panner&&(r._panner.disconnect(0),r._panner=void 0,i._refreshBuffer(r)),t.call(this)}}(Sound.prototype.reset);var e=function(t,r){r=r||"spatial",r==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()}(Wo)),Wo}var Ko=tE();function nE(n,e){dr(e,!1);const t=Ha(),r=()=>pn(Cs,"$firebase_app",t),i=()=>pn(or,"$user",t);let s=it(e,"question_set",12);const a=4,c=.03,l=.1,f=50,m=20,u=150,h=.4,_=15,y=.8,I=1e3,v=5;let w=[];s(s().questions=zo(JSON.parse(JSON.stringify(s().questions))),!0);let P=new Jw,V,x=[],F={x:0,y:0};function q(){if(P.GetAverageScore()>ar/2){let te=s().questions.pop();te?V=P.AddToPool(te):(P.GetAverageScore()>ar*.9,V=P.GetRandomQuestion())}else V=P.GetRandomQuestion();V.wrong_answers=zo(V.wrong_answers),x=[],x.push({answer:V.answer,x:0,y:0,target_y:0,target_x:0}),V.wrong_answers.forEach(te=>{x.length<a&&x.push({answer:te,x:0,y:0,target_y:0,target_x:0})}),x=zo(x),b()}function b(){for(let U=0;U<a;U++){let te=w[U].x,se=w[U].y;x[U].target_x=te,x[U].target_y=se,x[U].x=Qi(te*(1-l),te*(1+l)),x[U].y=Qi(se*(1-l),se*(1+l))}}let T,E;var R=new Ko.Howl({src:["./assets/sounds/correct_v2.mp3"],volume:.5}),S=new Ko.Howl({src:["./assets/sounds/wrong_v2.mp3"],volume:.5});if(s().config.music){var k=new Ko.Howl({src:["./assets/sounds/song.wav"],loop:!0,autoplay:!0,volume:.1});k.play()}const A=Sf(r());async function me(){if(i())for(const U of P.questions)try{const te=await Uw(mw(A,"game_scores",i().uid.toString(),s().name,U.id.toString()),{score:U.score});console.log("Document written with ID: ",U.id)}catch(te){console.error("Error adding document: ",te)}}async function _t(){if(i()){const U=Rf(A,"game_scores",i().uid.toString(),s().name),te=kw(U,Dw("score",">",0));(await Fw(te)).forEach(mt=>{console.log("doc data =>",mt.data());let Fe=s().questions.findIndex(ze=>ze.id==mt.id);if(Fe>=0){let ze=s().questions[Fe];s().questions.splice(Fe,1);let rt=P.AddToPool(ze);rt.score=mt.data().score}}),console.log("Pool: ",P)}}let wi=na(!1);_t().then(()=>{if(P.questions.length<v)for(let U=0;U<v-P.questions.length;U++)P.AddToPool(s().questions.pop());qe(wi,!0)});const en=U=>{let te=null,se=0,mt=!1,Fe=null,ze={x:U.windowWidth/2,y:U.windowHeight*2},rt=0,po=()=>{for(let W=0;W<a;W++){let We=x[W].target_x-x[W].x,Pn=x[W].target_y-x[W].y;te||(Math.abs(We)<c&&Math.abs(Pn)<c&&(x[W].target_x*=Qi(1-l,1+l),x[W].target_x>w[W].x*(l+1)&&(x[W].target_x=w[W].x*(1-l)),x[W].target_x<w[W].x*(1-l)&&(x[W].target_x=w[W].x+(l+1)),x[W].target_y*=Qi(1-l,1+l),x[W].target_y>w[W].y*(l+1)&&(x[W].target_y=w[W].y*(1-l)),x[W].target_y<w[W].y*(1-l)&&(x[W].target_y=w[W].y+(l+1))),x[W].x+=We*c,x[W].y+=Pn*c),U.textSize(f),U.textAlign(U.CENTER);let Ir=Date.now()-se;te&&x[W].answer==V.answer&&Ir%I<I/2?U.fill(23,190,187):U.fill(118,176,65),U.text(x[W].answer,x[W].x,x[W].y);let tn=x[W];te||U.dist(tn.x,tn.y,F.x,F.y)<u&&(console.log("Colides"),te=tn.answer,te==V.answer?(R.play(),mt=!0,Fe=U.loadImage("./assets/images/tick.png")):(S.play(),se=Date.now(),Fe=U.loadImage("./assets/images/Red_X.png")))}},Ii=()=>{me(),q(),F={x:T,y:E},te=null,rt=y,ze={x:U.windowWidth/2,y:U.windowHeight*2},mt=!1,se=0};U.setup=()=>{T=U.windowWidth/2,E=U.windowHeight/2,F.x=T,F.y=E,U.createCanvas(U.windowWidth,U.windowHeight);for(let W=-1;W<2;W+=2)for(let We=-1;We<2;We+=2)w.push({x:U.windowWidth*(.5+.25*W),y:U.windowHeight*(.5+.25*We)});Ii()},U.draw=()=>{U.background(46,40,42),te&&(U.imageMode(U.CENTER),U.image(Fe,ze.x,ze.y,U.windowWidth*h,U.windowWidth*h),ze.y>E?(ze.y-=_,rt=Date.now()):Date.now()-rt>y*1e3&&(mt?V.AddScore(s().config.learning_rate):V.RemoveScore(s().config.learning_rate),Ii())),po(),U.textSize(m),U.fill(255,201,20),U.textAlign(U.CENTER),U.text(V.question,F.x,F.y)},U.mouseDragged=()=>{U.mouseX>F.x-u&&U.mouseX<F.x+u&&U.mouseY>F.y-u&&U.mouseY<F.y+u&&(F.x=U.mouseX,F.y=U.mouseY)}};console.log("Here"),hi();var Dt=$a(),Er=fs(Dt);{var Ei=U=>{Xw(U,{sketch:en})};Zi(Er,U=>{de(wi)&&U(Ei)})}Tt(n,Dt),fr()}var rE="firebase",iE="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge(rE,iE,"app");const Uf="@firebase/installations",Iu="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=1e4,qf=`w:${Iu}`,jf="FIS_v2",sE="https://firebaseinstallations.googleapis.com/v1",oE=60*60*1e3,aE="installations",uE="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},yn=new En(aE,uE,cE);function $f(n){return n instanceof nt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf({projectId:n}){return`${sE}/projects/${n}/installations`}function Gf(n){return{token:n.token,requestStatus:2,expiresIn:hE(n.expiresIn),creationTime:Date.now()}}async function zf(n,e){const r=(await e.json()).error;return yn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Wf({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function lE(n,{refreshToken:e}){const t=Wf(n);return t.append("Authorization",dE(e)),t}async function Kf(n){const e=await n();return e.status>=500&&e.status<600?n():e}function hE(n){return Number(n.replace("s","000"))}function dE(n){return`${jf} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fE({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Hf(n),i=Wf(n),s=e.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={fid:t,authVersion:jf,appId:n.appId,sdkVersion:qf},c={method:"POST",headers:i,body:JSON.stringify(a)},l=await Kf(()=>fetch(r,c));if(l.ok){const f=await l.json();return{fid:f.fid||t,registrationStatus:2,refreshToken:f.refreshToken,authToken:Gf(f.authToken)}}else throw await zf("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=/^[cdef][\w-]{21}$/,Ca="";function mE(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=gE(n);return _E.test(t)?t:Ca}catch{return Ca}}function gE(n){return pE(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=new Map;function Yf(n,e){const t=uo(n);Jf(t,e),yE(t,e)}function Jf(n,e){const t=Xf.get(n);if(t)for(const r of t)r(e)}function yE(n,e){const t=vE();t&&t.postMessage({key:n,fid:e}),TE()}let hn=null;function vE(){return!hn&&"BroadcastChannel"in self&&(hn=new BroadcastChannel("[Firebase] FID Change"),hn.onmessage=n=>{Jf(n.data.key,n.data.fid)}),hn}function TE(){Xf.size===0&&hn&&(hn.close(),hn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE="firebase-installations-database",EE=1,vn="firebase-installations-store";let Qo=null;function Au(){return Qo||(Qo=ld(wE,EE,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(vn)}}})),Qo}async function ks(n,e){const t=uo(n),i=(await Au()).transaction(vn,"readwrite"),s=i.objectStore(vn),a=await s.get(t);return await s.put(e,t),await i.done,(!a||a.fid!==e.fid)&&Yf(n,e.fid),e}async function Zf(n){const e=uo(n),r=(await Au()).transaction(vn,"readwrite");await r.objectStore(vn).delete(e),await r.done}async function co(n,e){const t=uo(n),i=(await Au()).transaction(vn,"readwrite"),s=i.objectStore(vn),a=await s.get(t),c=e(a);return c===void 0?await s.delete(t):await s.put(c,t),await i.done,c&&(!a||a.fid!==c.fid)&&Yf(n,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bu(n){let e;const t=await co(n.appConfig,r=>{const i=IE(r),s=AE(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===Ca?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function IE(n){const e=n||{fid:mE(),registrationStatus:0};return ep(e)}function AE(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(yn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=bE(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:RE(n)}:{installationEntry:e}}async function bE(n,e){try{const t=await fE(n,e);return ks(n.appConfig,t)}catch(t){throw $f(t)&&t.customData.serverCode===409?await Zf(n.appConfig):await ks(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function RE(n){let e=await Xl(n.appConfig);for(;e.registrationStatus===1;)await Qf(100),e=await Xl(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await bu(n);return r||t}return e}function Xl(n){return co(n,e=>{if(!e)throw yn.create("installation-not-found");return ep(e)})}function ep(n){return SE(n)?{fid:n.fid,registrationStatus:0}:n}function SE(n){return n.registrationStatus===1&&n.registrationTime+Bf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PE({appConfig:n,heartbeatServiceProvider:e},t){const r=CE(n,t),i=lE(n,t),s=e.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={installation:{sdkVersion:qf,appId:n.appId}},c={method:"POST",headers:i,body:JSON.stringify(a)},l=await Kf(()=>fetch(r,c));if(l.ok){const f=await l.json();return Gf(f)}else throw await zf("Generate Auth Token",l)}function CE(n,{fid:e}){return`${Hf(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ru(n,e=!1){let t;const r=await co(n.appConfig,s=>{if(!tp(s))throw yn.create("not-registered");const a=s.authToken;if(!e&&VE(a))return s;if(a.requestStatus===1)return t=kE(n,e),s;{if(!navigator.onLine)throw yn.create("app-offline");const c=OE(s);return t=DE(n,c),c}});return t?await t:r.authToken}async function kE(n,e){let t=await Yl(n.appConfig);for(;t.authToken.requestStatus===1;)await Qf(100),t=await Yl(n.appConfig);const r=t.authToken;return r.requestStatus===0?Ru(n,e):r}function Yl(n){return co(n,e=>{if(!tp(e))throw yn.create("not-registered");const t=e.authToken;return xE(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function DE(n,e){try{const t=await PE(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await ks(n.appConfig,r),t}catch(t){if($f(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Zf(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ks(n.appConfig,r)}throw t}}function tp(n){return n!==void 0&&n.registrationStatus===2}function VE(n){return n.requestStatus===2&&!NE(n)}function NE(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+oE}function OE(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function xE(n){return n.requestStatus===1&&n.requestTime+Bf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ME(n){const e=n,{installationEntry:t,registrationPromise:r}=await bu(e);return r?r.catch(console.error):Ru(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LE(n,e=!1){const t=n;return await FE(t),(await Ru(t,e)).token}async function FE(n){const{registrationPromise:e}=await bu(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(n){if(!n||!n.options)throw Xo("App Configuration");if(!n.name)throw Xo("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Xo(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Xo(n){return yn.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="installations",BE="installations-internal",qE=n=>{const e=n.getProvider("app").getImmediate(),t=UE(e),r=In(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},jE=n=>{const e=n.getProvider("app").getImmediate(),t=In(e,np).getImmediate();return{getId:()=>ME(t),getToken:i=>LE(t,i)}};function $E(){ht(new Ze(np,qE,"PUBLIC")),ht(new Ze(BE,jE,"PRIVATE"))}$E();Ge(Uf,Iu);Ge(Uf,Iu,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="analytics",HE="firebase_id",GE="origin",zE=60*1e3,WE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Su="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=new Gs("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},$e=new En("analytics","Analytics",KE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(n){if(!n.startsWith(Su)){const e=$e.create("invalid-gtag-resource",{gtagURL:n});return xe.warn(e.message),""}return n}function rp(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function XE(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function YE(n,e){const t=XE("firebase-js-sdk-policy",{createScriptURL:QE}),r=document.createElement("script"),i=`${Su}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function JE(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function ZE(n,e,t,r,i,s){const a=r[i];try{if(a)await e[a];else{const l=(await rp(t)).find(f=>f.measurementId===i);l&&await e[l.appId]}}catch(c){xe.error(c)}n("config",i,s)}async function eI(n,e,t,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const c=await rp(t);for(const l of a){const f=c.find(u=>u.measurementId===l),m=f&&e[f.appId];if(m)s.push(m);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",r,i||{})}catch(s){xe.error(s)}}function tI(n,e,t,r){async function i(s,...a){try{if(s==="event"){const[c,l]=a;await eI(n,e,t,c,l)}else if(s==="config"){const[c,l]=a;await ZE(n,e,t,r,c,l)}else if(s==="consent"){const[c,l]=a;n("consent",c,l)}else if(s==="get"){const[c,l,f]=a;n("get",c,l,f)}else if(s==="set"){const[c]=a;n("set",c)}else n(s,...a)}catch(c){xe.error(c)}}return i}function nI(n,e,t,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=tI(s,n,e,t),{gtagCore:s,wrappedGtag:window[i]}}function rI(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Su)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=30,sI=1e3;class oI{constructor(e={},t=sI){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ip=new oI;function aI(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function uI(n){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:aI(r)},s=WE.replace("{app-id}",t),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let c="";try{const l=await a.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw $e.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function cI(n,e=ip,t){const{appId:r,apiKey:i,measurementId:s}=n.options;if(!r)throw $e.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw $e.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new dI;return setTimeout(async()=>{c.abort()},zE),sp({appId:r,apiKey:i,measurementId:s},a,c,e)}async function sp(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=ip){var s;const{appId:a,measurementId:c}=n;try{await lI(r,e)}catch(l){if(c)return xe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:c};throw l}try{const l=await uI(n);return i.deleteThrottleMetadata(a),l}catch(l){const f=l;if(!hI(f)){if(i.deleteThrottleMetadata(a),c)return xe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:a,measurementId:c};throw l}const m=Number((s=f==null?void 0:f.customData)===null||s===void 0?void 0:s.httpStatus)===503?Qc(t,i.intervalMillis,iI):Qc(t,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+m,backoffCount:t+1};return i.setThrottleMetadata(a,u),xe.debug(`Calling attemptFetch again in ${m} millis`),sp(n,u,r,i)}}function lI(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(s),r($e.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function hI(n){if(!(n instanceof nt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class dI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function fI(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const s=await e,a=Object.assign(Object.assign({},r),{send_to:s});n("event",t,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pI(){if(od())try{await ad()}catch(n){return xe.warn($e.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return xe.warn($e.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function _I(n,e,t,r,i,s,a){var c;const l=cI(n);l.then(_=>{t[_.measurementId]=_.appId,n.options.measurementId&&_.measurementId!==n.options.measurementId&&xe.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>xe.error(_)),e.push(l);const f=pI().then(_=>{if(_)return r.getId()}),[m,u]=await Promise.all([l,f]);rI(s)||YE(s,m.measurementId),i("js",new Date);const h=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return h[GE]="firebase",h.update=!0,u!=null&&(h[HE]=u),i("config",m.measurementId,h),m.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e){this.app=e}_delete(){return delete zr[this.app.options.appId],Promise.resolve()}}let zr={},Jl=[];const Zl={};let Yo="dataLayer",gI="gtag",eh,op,th=!1;function yI(){const n=[];if(sd()&&n.push("This is a browser extension environment."),eg()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=$e.create("invalid-analytics-context",{errorInfo:e});xe.warn(t.message)}}function vI(n,e,t){yI();const r=n.options.appId;if(!r)throw $e.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)xe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw $e.create("no-api-key");if(zr[r]!=null)throw $e.create("already-exists",{id:r});if(!th){JE(Yo);const{wrappedGtag:s,gtagCore:a}=nI(zr,Jl,Zl,Yo,gI);op=s,eh=a,th=!0}return zr[r]=_I(n,Jl,Zl,e,eh,Yo,t),new mI(n)}function TI(n=za()){n=Le(n);const e=In(n,Ds);return e.isInitialized()?e.getImmediate():wI(n)}function wI(n,e={}){const t=In(n,Ds);if(t.isInitialized()){const i=t.getImmediate();if(Jr(e,t.getOptions()))return i;throw $e.create("already-initialized")}return t.initialize({options:e})}function EI(n,e,t,r){n=Le(n),fI(op,zr[n.app.options.appId],e,t,r).catch(i=>xe.error(i))}const nh="@firebase/analytics",rh="0.10.10";function II(){ht(new Ze(Ds,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return vI(r,i,t)},"PUBLIC")),ht(new Ze("analytics-internal",n,"PRIVATE")),Ge(nh,rh),Ge(nh,rh,"esm2017");function n(e){try{const t=e.getProvider(Ds).getImmediate();return{logEvent:(r,i,s)=>EI(t,r,i,s)}}catch(t){throw $e.create("interop-component-reg-failed",{reason:t})}}}II();function Pu(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function ap(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AI=ap,up=new En("auth","Firebase",ap());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=new Gs("@firebase/auth");function bI(n,...e){Vs.logLevel<=K.WARN&&Vs.warn(`Auth (${_r}): ${n}`,...e)}function as(n,...e){Vs.logLevel<=K.ERROR&&Vs.error(`Auth (${_r}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(n,...e){throw ku(n,...e)}function Ye(n,...e){return ku(n,...e)}function Cu(n,e,t){const r=Object.assign(Object.assign({},AI()),{[e]:t});return new En("auth","Firebase",r).create(e,{appName:n.name})}function mn(n){return Cu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function RI(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ft(n,"argument-error"),Cu(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ku(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return up.create(n,...e)}function H(n,e,...t){if(!n)throw ku(e,...t)}function Et(n){const e="INTERNAL ASSERTION FAILED: "+n;throw as(e),new Error(e)}function kt(n,e){n||Et(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function SI(){return ih()==="http:"||ih()==="https:"}function ih(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SI()||sd()||"connection"in navigator)?navigator.onLine:!0}function CI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t){this.shortDelay=e,this.longDelay=t,kt(t>e,"Short delay should be less than long delay!"),this.isMobile=Km()||Ym()}get(){return PI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(n,e){kt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=new yi(3e4,6e4);function Vu(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function wr(n,e,t,r,i={}){return lp(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const c=di(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:e,headers:l},s);return Xm()||(f.referrerPolicy="no-referrer"),cp.fetch()(hp(n,n.config.apiHost,t,c),f)})}async function lp(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},kI),e);try{const i=new NI(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Xi(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[l,f]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xi(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Xi(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Xi(n,"user-disabled",a);const m=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Cu(n,m,f);ft(n,m)}}catch(i){if(i instanceof nt)throw i;ft(n,"network-request-failed",{message:String(i)})}}async function VI(n,e,t,r,i={}){const s=await wr(n,e,t,r,i);return"mfaPendingCredential"in s&&ft(n,"multi-factor-auth-required",{_serverResponse:s}),s}function hp(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Du(n.config,i):`${n.config.apiScheme}://${i}`}class NI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),DI.get())})}}function Xi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ye(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(n,e){return wr(n,"POST","/v1/accounts:delete",e)}async function dp(n,e){return wr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xI(n,e=!1){const t=Le(n),r=await t.getIdToken(e),i=Nu(r);H(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Wr(Jo(i.auth_time)),issuedAtTime:Wr(Jo(i.iat)),expirationTime:Wr(Jo(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Jo(n){return Number(n)*1e3}function Nu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return as("JWT malformed, contained fewer than 3 sections"),null;try{const i=td(t);return i?JSON.parse(i):(as("Failed to decode base64 JWT payload"),null)}catch(i){return as("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sh(n){const e=Nu(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof nt&&MI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function MI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wr(this.lastLoginAt),this.creationTime=Wr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(n){var e;const t=n.auth,r=await n.getIdToken(),i=await oi(n,dp(t,{idToken:r}));H(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fp(s.providerUserInfo):[],c=UI(n.providerData,a),l=n.isAnonymous,f=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),m=l?f:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Da(s.createdAt,s.lastLoginAt),isAnonymous:m};Object.assign(n,u)}async function FI(n){const e=Le(n);await Ns(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UI(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fp(n){return n.map(e=>{var{providerId:t}=e,r=Pu(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BI(n,e){const t=await lp(n,{},async()=>{const r=di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=hp(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",cp.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function qI(n,e){return wr(n,"POST","/v2/accounts:revokeToken",Vu(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=sh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await BI(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new zn;return r&&(H(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zn,this.toJSON())}_performRefresh(){return Et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class It{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Pu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Da(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await oi(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return xI(this,e)}reload(){return FI(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new It(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ns(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(mn(this.auth));const e=await this.getIdToken();return await oi(this,OI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,c,l,f,m;const u=(r=t.displayName)!==null&&r!==void 0?r:void 0,h=(i=t.email)!==null&&i!==void 0?i:void 0,_=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,y=(a=t.photoURL)!==null&&a!==void 0?a:void 0,I=(c=t.tenantId)!==null&&c!==void 0?c:void 0,v=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,w=(f=t.createdAt)!==null&&f!==void 0?f:void 0,P=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:V,emailVerified:x,isAnonymous:F,providerData:q,stsTokenManager:b}=t;H(V&&b,e,"internal-error");const T=zn.fromJSON(this.name,b);H(typeof V=="string",e,"internal-error"),xt(u,e.name),xt(h,e.name),H(typeof x=="boolean",e,"internal-error"),H(typeof F=="boolean",e,"internal-error"),xt(_,e.name),xt(y,e.name),xt(I,e.name),xt(v,e.name),xt(w,e.name),xt(P,e.name);const E=new It({uid:V,auth:e,email:h,emailVerified:x,displayName:u,isAnonymous:F,photoURL:y,phoneNumber:_,tenantId:I,stsTokenManager:T,createdAt:w,lastLoginAt:P});return q&&Array.isArray(q)&&(E.providerData=q.map(R=>Object.assign({},R))),v&&(E._redirectEventId=v),E}static async _fromIdTokenResponse(e,t,r=!1){const i=new zn;i.updateFromServerResponse(t);const s=new It({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ns(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];H(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?fp(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new zn;c.updateFromIdToken(r);const l=new It({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Da(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,f),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=new Map;function At(n){kt(n instanceof Function,"Expected a class definition");let e=oh.get(n);return e?(kt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,oh.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}pp.type="NONE";const ah=pp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(n,e,t){return`firebase:${n}:${e}:${t}`}class Wn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=us(this.userKey,i.apiKey,s),this.fullPersistenceKey=us("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?It._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Wn(At(ah),e,r);const i=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let s=i[0]||At(ah);const a=us(r,e.config.apiKey,e.name);let c=null;for(const f of t)try{const m=await f._get(a);if(m){const u=It._fromJSON(e,m);f!==s&&(c=u),s=f;break}}catch{}const l=i.filter(f=>f._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Wn(s,e,r):(s=l[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async f=>{if(f!==s)try{await f._remove(a)}catch{}})),new Wn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_p(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tp(e))return"Blackberry";if(wp(e))return"Webos";if(mp(e))return"Safari";if((e.includes("chrome/")||gp(e))&&!e.includes("edge/"))return"Chrome";if(vp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _p(n=ke()){return/firefox\//i.test(n)}function mp(n=ke()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gp(n=ke()){return/crios\//i.test(n)}function yp(n=ke()){return/iemobile/i.test(n)}function vp(n=ke()){return/android/i.test(n)}function Tp(n=ke()){return/blackberry/i.test(n)}function wp(n=ke()){return/webos/i.test(n)}function Ou(n=ke()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function jI(n=ke()){var e;return Ou(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $I(){return Jm()&&document.documentMode===10}function Ep(n=ke()){return Ou(n)||vp(n)||wp(n)||Tp(n)||/windows phone/i.test(n)||yp(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(n,e=[]){let t;switch(n){case"Browser":t=uh(ke());break;case"Worker":t=`${uh(ke())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${_r}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,c)=>{try{const l=e(s);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GI(n,e={}){return wr(n,"GET","/v2/passwordPolicy",Vu(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=6;class WI{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:zI,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ch(this),this.idTokenSubscription=new ch(this),this.beforeStateQueue=new HI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=up,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=At(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Wn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await dp(this,{idToken:e}),r=await It._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ns(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(mn(this));const t=e?Le(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(At(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GI(this),t=new WI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new En("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await qI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&At(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await Wn.create(this,[At(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ip(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&bI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function lo(n){return Le(n)}class ch{constructor(e){this.auth=e,this.observer=null,this.addObserver=sg(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QI(n){xu=n}function XI(n){return xu.loadJS(n)}function YI(){return xu.gapiScript}function JI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(n,e){const t=In(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Jr(s,e??{}))return i;ft(i,"already-initialized")}return t.initialize({options:e})}function e0(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(At);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function t0(n,e,t){const r=lo(n);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Ap(e),{host:a,port:c}=n0(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),r0()}function Ap(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function n0(n){const e=Ap(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:lh(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:lh(a)}}}function lh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function r0(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Et("not implemented")}_getIdTokenResponse(e){return Et("not implemented")}_linkToIdToken(e,t){return Et("not implemented")}_getReauthenticationResolver(e){return Et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kn(n,e){return VI(n,"POST","/v1/accounts:signInWithIdp",Vu(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="http://localhost";class Tn extends bp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Tn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ft("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Pu(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Tn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Kn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Kn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Kn(e,t)}buildRequest(){const e={requestUri:i0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=di(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends Mu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends vi{constructor(){super("facebook.com")}static credential(e){return Tn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch{return null}}}Ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ft.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends vi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Tn._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Qe.credential(t,r)}catch{return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com";Qe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends vi{constructor(){super("github.com")}static credential(e){return Tn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.GITHUB_SIGN_IN_METHOD="github.com";Ut.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends vi{constructor(){super("twitter.com")}static credential(e,t){return Tn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Bt.credential(t,r)}catch{return null}}}Bt.TWITTER_SIGN_IN_METHOD="twitter.com";Bt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await It._fromIdTokenResponse(e,r,i),a=hh(r);return new ur({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=hh(r);return new ur({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function hh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends nt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Os.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Os(e,t,r,i)}}function Rp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Os._fromErrorAndOperation(n,s,e,r):s})}async function s0(n,e,t=!1){const r=await oi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ur._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0(n,e,t=!1){const{auth:r}=n;if(wt(r.app))return Promise.reject(mn(r));const i="reauthenticate";try{const s=await oi(n,Rp(r,i,e,n),t);H(s.idToken,r,"internal-error");const a=Nu(s.idToken);H(a,r,"internal-error");const{sub:c}=a;return H(n.uid===c,r,"user-mismatch"),ur._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ft(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a0(n,e,t=!1){if(wt(n.app))return Promise.reject(mn(n));const r="signIn",i=await Rp(n,r,e),s=await ur._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function u0(n,e,t,r){return Le(n).onIdTokenChanged(e,t,r)}function c0(n,e,t){return Le(n).beforeAuthStateChanged(e,t)}const xs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xs,"1"),this.storage.removeItem(xs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=1e3,h0=10;class Pp extends Sp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ep(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);$I()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,h0):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},l0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pp.type="LOCAL";const d0=Pp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp extends Sp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Cp.type="SESSION";const kp=Cp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ho(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async f=>f(t.origin,s)),l=await f0(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ho.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,l)=>{const f=Lu("",20);i.port1.start();const m=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===f)switch(h.data.status){case"ack":clearTimeout(m),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(h.data.response);break;default:clearTimeout(m),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return window}function _0(n){ct().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function m0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function g0(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function y0(){return Dp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp="firebaseLocalStorageDb",v0=1,Ms="firebaseLocalStorage",Np="fbase_key";class Ti{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function fo(n,e){return n.transaction([Ms],e?"readwrite":"readonly").objectStore(Ms)}function T0(){const n=indexedDB.deleteDatabase(Vp);return new Ti(n).toPromise()}function Va(){const n=indexedDB.open(Vp,v0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ms,{keyPath:Np})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ms)?e(r):(r.close(),await T0(),e(await Va()))})})}async function dh(n,e,t){const r=fo(n,!0).put({[Np]:e,value:t});return new Ti(r).toPromise()}async function w0(n,e){const t=fo(n,!1).get(e),r=await new Ti(t).toPromise();return r===void 0?null:r.value}function fh(n,e){const t=fo(n,!0).delete(e);return new Ti(t).toPromise()}const E0=800,I0=3;class Op{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Va(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>I0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ho._getInstance(y0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await m0(),!this.activeServiceWorker)return;this.sender=new p0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||g0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Va();return await dh(e,xs,"1"),await fh(e,xs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>dh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>w0(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>fh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=fo(i,!1).getAll();return new Ti(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),E0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Op.type="LOCAL";const A0=Op;new yi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(n,e){return e?At(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu extends bp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Kn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function b0(n){return a0(n.auth,new Fu(n),n.bypassAuthState)}function R0(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),o0(t,new Fu(n),n.bypassAuthState)}async function S0(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),s0(t,new Fu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return b0;case"linkViaPopup":case"linkViaRedirect":return S0;case"reauthViaPopup":case"reauthViaRedirect":return R0;default:ft(this.auth,"internal-error")}}resolve(e){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=new yi(2e3,1e4);async function C0(n,e,t){if(wt(n.app))return Promise.reject(Ye(n,"operation-not-supported-in-this-environment"));const r=lo(n);RI(n,e,Mu);const i=xp(r,t);return new dn(r,"signInViaPopup",e,i).executeNotNull()}class dn extends Mp{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,dn.currentPopupAction&&dn.currentPopupAction.cancel(),dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){kt(this.filter.length===1,"Popup operations only handle one event");const e=Lu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,P0.get())};e()}}dn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="pendingRedirect",cs=new Map;class D0 extends Mp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=cs.get(this.auth._key());if(!e){try{const r=await V0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}cs.set(this.auth._key(),e)}return this.bypassAuthState||cs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function V0(n,e){const t=x0(e),r=O0(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function N0(n,e){cs.set(n._key(),e)}function O0(n){return At(n._redirectPersistence)}function x0(n){return us(k0,n.config.apiKey,n.name)}async function M0(n,e,t=!1){if(wt(n.app))return Promise.reject(mn(n));const r=lo(n),i=xp(r,e),a=await new D0(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=10*60*1e3;class F0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!U0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Lp(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ye(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=L0&&this.cachedEventUids.clear(),this.cachedEventUids.has(ph(e))}saveEventToCache(e){this.cachedEventUids.add(ph(e)),this.lastProcessedEventTime=Date.now()}}function ph(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Lp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function U0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B0(n,e={}){return wr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,j0=/^https?/;async function $0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await B0(n);for(const t of e)try{if(H0(t))return}catch{}ft(n,"unauthorized-domain")}function H0(n){const e=ka(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!j0.test(t))return!1;if(q0.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=new yi(3e4,6e4);function _h(){const n=ct().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function z0(n){return new Promise((e,t)=>{var r,i,s;function a(){_h(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_h(),t(Ye(n,"network-request-failed"))},timeout:G0.get()})}if(!((i=(r=ct().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ct().gapi)===null||s===void 0)&&s.load)a();else{const c=JI("iframefcb");return ct()[c]=()=>{gapi.load?a():t(Ye(n,"network-request-failed"))},XI(`${YI()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw ls=null,e})}let ls=null;function W0(n){return ls=ls||z0(n),ls}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=new yi(5e3,15e3),Q0="__/auth/iframe",X0="emulator/auth/iframe",Y0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},J0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Z0(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Du(e,X0):`https://${n.config.authDomain}/${Q0}`,r={apiKey:e.apiKey,appName:n.name,v:_r},i=J0.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${di(r).slice(1)}`}async function eA(n){const e=await W0(n),t=ct().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:Z0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Y0,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Ye(n,"network-request-failed"),c=ct().setTimeout(()=>{s(a)},K0.get());function l(){ct().clearTimeout(c),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nA=500,rA=600,iA="_blank",sA="http://localhost";class mh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oA(n,e,t,r=nA,i=rA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},tA),{width:r.toString(),height:i.toString(),top:s,left:a}),f=ke().toLowerCase();t&&(c=gp(f)?iA:t),_p(f)&&(e=e||sA,l.scrollbars="yes");const m=Object.entries(l).reduce((h,[_,y])=>`${h}${_}=${y},`,"");if(jI(f)&&c!=="_self")return aA(e||"",c),new mh(null);const u=window.open(e||"",c,m);H(u,n,"popup-blocked");try{u.focus()}catch{}return new mh(u)}function aA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA="__/auth/handler",cA="emulator/auth/handler",lA=encodeURIComponent("fac");async function gh(n,e,t,r,i,s){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:_r,eventId:i};if(e instanceof Mu){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",ig(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,u]of Object.entries({}))a[m]=u}if(e instanceof vi){const m=e.getScopes().filter(u=>u!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const l=await n._getAppCheckToken(),f=l?`#${lA}=${encodeURIComponent(l)}`:"";return`${hA(n)}?${di(c).slice(1)}${f}`}function hA({config:n}){return n.emulator?Du(n,cA):`https://${n.authDomain}/${uA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="webStorageSupport";class dA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kp,this._completeRedirectFn=M0,this._overrideRedirectResult=N0}async _openPopup(e,t,r,i){var s;kt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await gh(e,t,r,ka(),i);return oA(e,a,Lu())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await gh(e,t,r,ka(),i);return _0(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(kt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await eA(e),r=new F0(e);return t.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Zo,{type:Zo},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Zo];a!==void 0&&t(!!a),ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ep()||mp()||Ou()}}const fA=dA;var yh="@firebase/auth",vh="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mA(n){ht(new Ze("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;H(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ip(n)},f=new KI(r,i,s,l);return e0(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ht(new Ze("auth-internal",e=>{const t=lo(e.getProvider("auth").getImmediate());return(r=>new pA(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(yh,vh,_A(n)),Ge(yh,vh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=5*60,yA=id("authIdTokenMaxAge")||gA;let Th=null;const vA=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>yA)return;const i=t==null?void 0:t.token;Th!==i&&(Th=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function TA(n=za()){const e=In(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ZI(n,{popupRedirectResolver:fA,persistence:[A0,d0,kp]}),r=id("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=vA(s.toString());c0(t,a,()=>a(t.currentUser)),u0(t,c=>a(c))}}const i=nd("auth");return i&&t0(t,`http://${i}`),t}function wA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}QI({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Ye("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",wA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mA("Browser");function EA(n,e,t){const r=new Qe;e.useDeviceLanguage(),C0(e,r).then(i=>{Qe.credentialFromResult(i).accessToken,Un(or,i.user),console.log("success sign in")}).catch(i=>{Un(or,null),i.code;const s=i.message;i.customData.email,Qe.credentialFromError(i),console.log("error sign in"),console.log(s)})}var IA=pr('<button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Sign in with google</button>'),AA=pr('<!> <div class="w-[100vw] flex justify-center"><div><!></div></div>',1),bA=pr("<main><!></main>");function RA(n,e){dr(e,!1);const t=Ha(),r=()=>pn(Cs,"$firebase_app",t),i=()=>pn(zl,"$page",t),s=()=>pn(or,"$user",t);Un(Cs,hd({apiKey:"AIzaSyAYhCkl8BqHUG4bJb1H2PN4hFHGKDlvyAs",authDomain:"remeberer-8ed40.firebaseapp.com",projectId:"remeberer-8ed40",storageBucket:"remeberer-8ed40.firebasestorage.app",messagingSenderId:"980800277649",appId:"1:980800277649:web:8b1d9421bab33b7040c330",measurementId:"G-RGR99Y4BE1"})),Un(jw,TI(r()));let c=na([]);fetch("QuestionSets/sets.txt").then(I=>{I.text().then(v=>{v.toString().split(`
`).forEach(P=>{fetch("QuestionSets/"+P).then(V=>{V.json().then(x=>{qe(c,[...de(c),x])})})})})});let l=na();function f(I){console.log("clicked"),qe(l,JSON.parse(JSON.stringify(I))),Un(zl,"question_set")}const m=TA();m.onAuthStateChanged(I=>{I&&Un(or,I)}),console.log(s()),hi();var u=bA(),h=vt(u);{var _=I=>{var v=AA(),w=fs(v);Gw(w,{get QuestionSets(){return de(c)},OnQuestionSetClick:f});var P=ps(w,2),V=vt(P),x=vt(V);{var F=q=>{var b=IA();b.__click=[EA,m,s],Tt(q,b)};Zi(x,q=>{s()||q(F)})}Tt(I,v)},y=I=>{var v=$a(),w=fs(v);{var P=V=>{nE(V,{get question_set(){return de(l)}})};Zi(w,V=>{i()=="question_set"&&V(P)},!0)}Tt(I,v)};Zi(h,I=>{i()=="main"?I(_):I(y,!1)})}Tt(n,u),fr()}Jh(["click"]);gm(RA,{target:document.getElementById("app")});export{Lr as c,kA as g};
