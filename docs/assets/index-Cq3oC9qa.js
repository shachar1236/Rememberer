(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Ah=!1;var zs=Array.isArray,Ba=Array.from,f_=Object.defineProperty,Gn=Object.getOwnPropertyDescriptor,bh=Object.getOwnPropertyDescriptors,p_=Object.prototype,__=Array.prototype,qa=Object.getPrototypeOf;const zn=()=>{};function m_(n){return typeof(n==null?void 0:n.then)=="function"}function g_(n){return n()}function aa(n){for(var e=0;e<n.length;e++)n[e]()}const nt=2,Rh=4,_i=8,ja=16,st=32,mi=64,ua=128,An=256,ws=512,Me=1024,Qt=2048,gi=4096,ut=8192,pr=16384,y_=32768,$a=65536,v_=1<<17,w_=1<<19,Sh=1<<20,Wn=Symbol("$state"),T_=Symbol("legacy props"),E_=Symbol("");function Ph(n){return n===this.v}function Ch(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function Ha(n){return!Ch(n,this.v)}function I_(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function A_(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function b_(n){throw new Error("https://svelte.dev/e/effect_orphan")}function R_(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function S_(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function P_(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function C_(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function k_(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function D_(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let _r=!1;function V_(){_r=!0}const N_=1,O_=2,x_=16,M_=1,L_=2,F_=4,U_=8,B_=16,q_=1,j_=2,Re=Symbol();function Ne(n,e){var t={f:0,v:n,reactions:null,equals:Ph,version:0};return t}function er(n,e=!1){var r;const t=Ne(n);return e||(t.equals=Ha),_r&&re!==null&&re.l!==null&&((r=re.l).s??(r.s=[])).push(t),t}function ca(n,e=!1){return $_(er(n,e))}function $_(n){return ne!==null&&ne.f&nt&&(ct===null?im([n]):ct.push(n)),n}function je(n,e){return ne!==null&&Qs()&&ne.f&(nt|ja)&&(ct===null||!ct.includes(n))&&D_(),Kr(n,e)}function Kr(n,e){return n.equals(e)||(n.v=e,n.version=Kh(),kh(n,Qt),Qs()&&J!==null&&J.f&Me&&!(J.f&st)&&(Se!==null&&Se.includes(n)?(gt(J,Qt),Js(J)):Gt===null?sm([n]):Gt.push(n))),e}function kh(n,e){var t=n.reactions;if(t!==null)for(var r=Qs(),i=t.length,s=0;s<i;s++){var a=t[s],c=a.f;c&Qt||!r&&a===J||(gt(a,e),c&(Me|An)&&(c&nt?kh(a,gi):Js(a)))}}let H_=!1;function qn(n,e=null,t){if(typeof n!="object"||n===null||Wn in n)return n;const r=qa(n);if(r!==p_&&r!==__)return n;var i=new Map,s=zs(n),a=Ne(0);s&&i.set("length",Ne(n.length));var c;return new Proxy(n,{defineProperty(l,f,m){(!("value"in m)||m.configurable===!1||m.enumerable===!1||m.writable===!1)&&P_();var u=i.get(f);return u===void 0?(u=Ne(m.value),i.set(f,u)):je(u,qn(m.value,c)),!0},deleteProperty(l,f){var m=i.get(f);if(m===void 0)f in l&&i.set(f,Ne(Re));else{if(s&&typeof f=="string"){var u=i.get("length"),h=Number(f);Number.isInteger(h)&&h<u.v&&je(u,h)}je(m,Re),jc(a)}return!0},get(l,f,m){var y;if(f===Wn)return n;var u=i.get(f),h=f in l;if(u===void 0&&(!h||(y=Gn(l,f))!=null&&y.writable)&&(u=Ne(qn(h?l[f]:Re,c)),i.set(f,u)),u!==void 0){var _=he(u);return _===Re?void 0:_}return Reflect.get(l,f,m)},getOwnPropertyDescriptor(l,f){var m=Reflect.getOwnPropertyDescriptor(l,f);if(m&&"value"in m){var u=i.get(f);u&&(m.value=he(u))}else if(m===void 0){var h=i.get(f),_=h==null?void 0:h.v;if(h!==void 0&&_!==Re)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return m},has(l,f){var _;if(f===Wn)return!0;var m=i.get(f),u=m!==void 0&&m.v!==Re||Reflect.has(l,f);if(m!==void 0||J!==null&&(!u||(_=Gn(l,f))!=null&&_.writable)){m===void 0&&(m=Ne(u?qn(l[f],c):Re),i.set(f,m));var h=he(m);if(h===Re)return!1}return u},set(l,f,m,u){var V;var h=i.get(f),_=f in l;if(s&&f==="length")for(var y=m;y<h.v;y+=1){var I=i.get(y+"");I!==void 0?je(I,Re):y in l&&(I=Ne(Re),i.set(y+"",I))}h===void 0?(!_||(V=Gn(l,f))!=null&&V.writable)&&(h=Ne(void 0),je(h,qn(m,c)),i.set(f,h)):(_=h.v!==Re,je(h,qn(m,c)));var v=Reflect.getOwnPropertyDescriptor(l,f);if(v!=null&&v.set&&v.set.call(u,m),!_){if(s&&typeof f=="string"){var E=i.get("length"),k=Number(f);Number.isInteger(k)&&k>=E.v&&je(E,k+1)}jc(a)}return!0},ownKeys(l){he(a);var f=Reflect.ownKeys(l).filter(h=>{var _=i.get(h);return _===void 0||_.v!==Re});for(var[m,u]of i)u.v!==Re&&!(m in l)&&f.push(m);return f},setPrototypeOf(){C_()}})}function jc(n,e=1){je(n,n.v+e)}var $c,Dh,Vh;function G_(){if($c===void 0){$c=window;var n=Element.prototype,e=Node.prototype;Dh=Gn(e,"firstChild").get,Vh=Gn(e,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function Ga(n=""){return document.createTextNode(n)}function Ts(n){return Dh.call(n)}function Ws(n){return Vh.call(n)}function Je(n,e){return Ts(n)}function Es(n,e){{var t=Ts(n);return t instanceof Comment&&t.data===""?Ws(t):t}}function ti(n,e=1,t=!1){let r=n;for(;e--;)r=Ws(r);return r}function z_(n){n.textContent=""}function Is(n){var e=nt|Qt;J===null?e|=An:J.f|=Sh;var t=ne!==null&&ne.f&nt?ne:null;const r={children:null,ctx:re,deps:null,equals:Ph,f:e,fn:n,reactions:null,v:null,version:0,parent:t??J};return t!==null&&(t.children??(t.children=[])).push(r),r}function W_(n){const e=Is(n);return e.equals=Ha,e}function Nh(n){var e=n.children;if(e!==null){n.children=null;for(var t=0;t<e.length;t+=1){var r=e[t];r.f&nt?za(r):Xt(r)}}}function K_(n){for(var e=n.parent;e!==null;){if(!(e.f&nt))return e;e=e.parent}return null}function Oh(n){var e,t=J;ft(K_(n));try{Nh(n),e=Qh(n)}finally{ft(t)}return e}function xh(n){var e=Oh(n),t=(dn||n.f&An)&&n.deps!==null?gi:Me;gt(n,t),n.equals(e)||(n.v=e,n.version=Kh())}function za(n){Nh(n),si(n,0),gt(n,pr),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Mh(n){J===null&&ne===null&&b_(),ne!==null&&ne.f&An&&A_(),Qa&&I_()}function Q_(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function mr(n,e,t,r=!0){var i=(n&mi)!==0,s=J,a={ctx:re,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|Qt,first:null,fn:e,last:null,next:null,parent:i?null:s,prev:null,teardown:null,transitions:null,version:0};if(t){var c=Kn;try{Hc(!0),Ys(a),a.f|=y_}catch(m){throw Xt(a),m}finally{Hc(c)}}else e!==null&&Js(a);var l=t&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&Sh)===0;if(!l&&!i&&r&&(s!==null&&Q_(a,s),ne!==null&&ne.f&nt)){var f=ne;(f.children??(f.children=[])).push(a)}return a}function X_(n){const e=mr(_i,null,!1);return gt(e,Me),e.teardown=n,e}function la(n){Mh();var e=J!==null&&(J.f&st)!==0&&re!==null&&!re.m;if(e){var t=re;(t.e??(t.e=[])).push({fn:n,effect:J,reaction:ne})}else{var r=Wa(n);return r}}function Y_(n){return Mh(),Z_(n)}function J_(n){const e=mr(mi,n,!0);return(t={})=>new Promise(r=>{t.outro?gn(e,()=>{Xt(e),r(void 0)}):(Xt(e),r(void 0))})}function Wa(n){return mr(Rh,n,!1)}function Z_(n){return mr(_i,n,!0)}function Lh(n){return Ks(n)}function Ks(n,e=0){return mr(_i|ja|e,n,!0)}function tr(n,e=!0){return mr(_i|st,n,!0,e)}function Fh(n){var e=n.teardown;if(e!==null){const t=Qa,r=ne;Gc(!0),Yt(null);try{e.call(null)}finally{Gc(t),Yt(r)}}}function Uh(n){var e=n.deriveds;if(e!==null){n.deriveds=null;for(var t=0;t<e.length;t+=1)za(e[t])}}function Bh(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){var r=t.next;Xt(t,e),t=r}}function em(n){for(var e=n.first;e!==null;){var t=e.next;e.f&st||Xt(e),e=t}}function Xt(n,e=!0){var t=!1;if((e||n.f&w_)&&n.nodes_start!==null){for(var r=n.nodes_start,i=n.nodes_end;r!==null;){var s=r===i?null:Ws(r);r.remove(),r=s}t=!0}Bh(n,e&&!t),Uh(n),si(n,0),gt(n,pr);var a=n.transitions;if(a!==null)for(const l of a)l.stop();Fh(n);var c=n.parent;c!==null&&c.first!==null&&qh(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function qh(n){var e=n.parent,t=n.prev,r=n.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),e!==null&&(e.first===n&&(e.first=r),e.last===n&&(e.last=t))}function gn(n,e){var t=[];Ka(n,t,!0),jh(t,()=>{Xt(n),e&&e()})}function jh(n,e){var t=n.length;if(t>0){var r=()=>--t||e();for(var i of n)i.out(r)}else e()}function Ka(n,e,t){if(!(n.f&ut)){if(n.f^=ut,n.transitions!==null)for(const a of n.transitions)(a.is_global||t)&&e.push(a);for(var r=n.first;r!==null;){var i=r.next,s=(r.f&$a)!==0||(r.f&st)!==0;Ka(r,e,s?t:!1),r=i}}}function ni(n){$h(n,!0)}function $h(n,e){if(n.f&ut){yi(n)&&Ys(n),n.f^=ut;for(var t=n.first;t!==null;){var r=t.next,i=(t.f&$a)!==0||(t.f&st)!==0;$h(t,i?e:!1),t=r}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||e)&&s.in()}}let As=!1,ha=[];function Hh(){As=!1;const n=ha.slice();ha=[],aa(n)}function tm(n){As||(As=!0,queueMicrotask(Hh)),ha.push(n)}function nm(){As&&Hh()}function Gh(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const zh=0,rm=1;let os=!1,as=zh,ri=!1,ii=null,Kn=!1,Qa=!1;function Hc(n){Kn=n}function Gc(n){Qa=n}let hn=[],Qn=0;let ne=null;function Yt(n){ne=n}let J=null;function ft(n){J=n}let ct=null;function im(n){ct=n}let Se=null,qe=0,Gt=null;function sm(n){Gt=n}let Wh=1,dn=!1,re=null;function zc(n){re=n}function Kh(){return++Wh}function Qs(){return!_r||re!==null&&re.l===null}function yi(n){var a,c;var e=n.f;if(e&Qt)return!0;if(e&gi){var t=n.deps,r=(e&An)!==0;if(t!==null){var i;if(e&ws){for(i=0;i<t.length;i++)((a=t[i]).reactions??(a.reactions=[])).push(n);n.f^=ws}for(i=0;i<t.length;i++){var s=t[i];if(yi(s)&&xh(s),r&&J!==null&&!dn&&!((c=s==null?void 0:s.reactions)!=null&&c.includes(n))&&(s.reactions??(s.reactions=[])).push(n),s.version>n.version)return!0}}(!r||J!==null&&!dn)&&gt(n,Me)}return!1}function om(n,e){for(var t=e;t!==null;){if(t.f&ua)try{t.fn(n);return}catch{t.f^=ua}t=t.parent}throw os=!1,n}function am(n){return(n.f&pr)===0&&(n.parent===null||(n.parent.f&ua)===0)}function Xs(n,e,t,r){if(os){if(t===null&&(os=!1),am(e))throw n;return}t!==null&&(os=!0);{om(n,e);return}}function Qh(n){var h;var e=Se,t=qe,r=Gt,i=ne,s=dn,a=ct,c=re,l=n.f;Se=null,qe=0,Gt=null,ne=l&(st|mi)?null:n,dn=!Kn&&(l&An)!==0,ct=null,re=n.ctx;try{var f=(0,n.fn)(),m=n.deps;if(Se!==null){var u;if(si(n,qe),m!==null&&qe>0)for(m.length=qe+Se.length,u=0;u<Se.length;u++)m[qe+u]=Se[u];else n.deps=m=Se;if(!dn)for(u=qe;u<m.length;u++)((h=m[u]).reactions??(h.reactions=[])).push(n)}else m!==null&&qe<m.length&&(si(n,qe),m.length=qe);return f}finally{Se=e,qe=t,Gt=r,ne=i,dn=s,ct=a,re=c}}function um(n,e){let t=e.reactions;if(t!==null){var r=t.indexOf(n);if(r!==-1){var i=t.length-1;i===0?t=e.reactions=null:(t[r]=t[i],t.pop())}}t===null&&e.f&nt&&(Se===null||!Se.includes(e))&&(gt(e,gi),e.f&(An|ws)||(e.f^=ws),si(e,0))}function si(n,e){var t=n.deps;if(t!==null)for(var r=e;r<t.length;r++)um(n,t[r])}function Ys(n){var e=n.f;if(!(e&pr)){gt(n,Me);var t=J,r=re;J=n;try{e&ja?em(n):Bh(n),Uh(n),Fh(n);var i=Qh(n);n.teardown=typeof i=="function"?i:null,n.version=Wh}catch(s){Xs(s,n,t,r||n.ctx)}finally{J=t}}}function Xh(){if(Qn>1e3){Qn=0;try{R_()}catch(n){if(ii!==null)Xs(n,ii,null);else throw n}}Qn++}function Yh(n){var e=n.length;if(e!==0){Xh();var t=Kn;Kn=!0;try{for(var r=0;r<e;r++){var i=n[r];i.f&Me||(i.f^=Me);var s=[];Jh(i,s),cm(s)}}finally{Kn=t}}}function cm(n){var e=n.length;if(e!==0)for(var t=0;t<e;t++){var r=n[t];if(!(r.f&(pr|ut)))try{yi(r)&&(Ys(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?qh(r):r.fn=null))}catch(i){Xs(i,r,null,r.ctx)}}}function lm(){if(ri=!1,Qn>1001)return;const n=hn;hn=[],Yh(n),ri||(Qn=0,ii=null)}function Js(n){as===zh&&(ri||(ri=!0,queueMicrotask(lm))),ii=n;for(var e=n;e.parent!==null;){e=e.parent;var t=e.f;if(t&(mi|st)){if(!(t&Me))return;e.f^=Me}}hn.push(e)}function Jh(n,e){var t=n.first,r=[];e:for(;t!==null;){var i=t.f,s=(i&st)!==0,a=s&&(i&Me)!==0,c=t.next;if(!a&&!(i&ut))if(i&_i){if(s)t.f^=Me;else try{yi(t)&&Ys(t)}catch(u){Xs(u,t,null,t.ctx)}var l=t.first;if(l!==null){t=l;continue}}else i&Rh&&r.push(t);if(c===null){let u=t.parent;for(;u!==null;){if(n===u)break e;var f=u.next;if(f!==null){t=f;continue e}u=u.parent}}t=c}for(var m=0;m<r.length;m++)l=r[m],e.push(l),Jh(l,e)}function Zh(n){var e=as,t=hn;try{Xh();const i=[];as=rm,hn=i,ri=!1,Yh(t);var r=n==null?void 0:n();return nm(),(hn.length>0||i.length>0)&&Zh(),Qn=0,ii=null,r}finally{as=e,hn=t}}function he(n){var m;var e=n.f,t=(e&nt)!==0;if(t&&e&pr){var r=Oh(n);return za(n),r}if(ne!==null){ct!==null&&ct.includes(n)&&k_();var i=ne.deps;Se===null&&i!==null&&i[qe]===n?qe++:Se===null?Se=[n]:Se.push(n),Gt!==null&&J!==null&&J.f&Me&&!(J.f&st)&&Gt.includes(n)&&(gt(J,Qt),Js(J))}else if(t&&n.deps===null)for(var s=n,a=s.parent,c=s;a!==null;)if(a.f&nt){var l=a;c=l,a=l.parent}else{var f=a;(m=f.deriveds)!=null&&m.includes(c)||(f.deriveds??(f.deriveds=[])).push(c);break}return t&&(s=n,yi(s)&&xh(s)),n.v}function nr(n){const e=ne;try{return ne=null,n()}finally{ne=e}}const hm=~(Qt|gi|Me);function gt(n,e){n.f=n.f&hm|e}function gr(n,e=!1,t){re={p:re,c:null,e:null,m:!1,s:n,x:null,l:null},_r&&!e&&(re.l={s:null,u:null,r1:[],r2:Ne(!1)})}function yr(n){const e=re;if(e!==null){const a=e.e;if(a!==null){var t=J,r=ne;e.e=null;try{for(var i=0;i<a.length;i++){var s=a[i];ft(s.effect),Yt(s.reaction),Wa(s.fn)}}finally{ft(t),Yt(r)}}re=e.p,e.m=!0}return{}}function dm(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(Wn in n)da(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&Wn in t&&da(t)}}}function da(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let r in n)try{da(n[r],e)}catch{}const t=qa(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const r=bh(t);for(let i in r){const s=r[i].get;if(s)try{s.call(n)}catch{}}}}}const fm=["touchstart","touchmove"];function pm(n){return fm.includes(n)}const ed=new Set,fa=new Set;function Xa(n){for(var e=0;e<n.length;e++)ed.add(n[e]);for(var t of fa)t(n)}function Qi(n){var k;var e=this,t=e.ownerDocument,r=n.type,i=((k=n.composedPath)==null?void 0:k.call(n))||[],s=i[0]||n.target,a=0,c=n.__root;if(c){var l=i.indexOf(c);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var f=i.indexOf(e);if(f===-1)return;l<=f&&(a=l)}if(s=i[a]||n.target,s!==e){f_(n,"currentTarget",{configurable:!0,get(){return s||t}});var m=ne,u=J;Yt(null),ft(null);try{for(var h,_=[];s!==null;){var y=s.assignedSlot||s.parentNode||s.host||null;try{var I=s["__"+r];if(I!==void 0&&!s.disabled)if(zs(I)){var[v,...E]=I;v.apply(s,[n,...E])}else I.call(s,n)}catch(V){h?_.push(V):h=V}if(n.cancelBubble||y===e||y===null)break;s=y}if(h){for(let V of _)queueMicrotask(()=>{throw V});throw h}}finally{n.__root=e,delete n.currentTarget,Yt(m),ft(u)}}}function _m(n){var e=document.createElement("template");return e.innerHTML=n,e.content}function pa(n,e){var t=J;t.nodes_start===null&&(t.nodes_start=n,t.nodes_end=e)}function bn(n,e){var t=(e&q_)!==0,r=(e&j_)!==0,i,s=!n.startsWith("<!>");return()=>{i===void 0&&(i=_m(s?n:"<!>"+n),t||(i=Ts(i)));var a=r?document.importNode(i,!0):i.cloneNode(!0);if(t){var c=Ts(a),l=a.lastChild;pa(c,l)}else pa(a,a);return a}}function td(){var n=document.createDocumentFragment(),e=document.createComment(""),t=Ga();return n.append(e,t),pa(e,t),n}function Tt(n,e){n!==null&&n.before(e)}function mm(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??(n.__t=n.nodeValue))&&(n.__t=t,n.nodeValue=t==null?"":t+"")}function gm(n,e){return ym(n,e)}const Un=new Map;function ym(n,{target:e,anchor:t,props:r={},events:i,context:s,intro:a=!0}){G_();var c=new Set,l=u=>{for(var h=0;h<u.length;h++){var _=u[h];if(!c.has(_)){c.add(_);var y=pm(_);e.addEventListener(_,Qi,{passive:y});var I=Un.get(_);I===void 0?(document.addEventListener(_,Qi,{passive:y}),Un.set(_,1)):Un.set(_,I+1)}}};l(Ba(ed)),fa.add(l);var f=void 0,m=J_(()=>{var u=t??e.appendChild(Ga());return tr(()=>{if(s){gr({});var h=re;h.c=s}i&&(r.$$events=i),f=n(u,r)||{},s&&yr()}),()=>{var y;for(var h of c){e.removeEventListener(h,Qi);var _=Un.get(h);--_===0?(document.removeEventListener(h,Qi),Un.delete(h)):Un.set(h,_)}fa.delete(l),u!==t&&((y=u.parentNode)==null||y.removeChild(u))}});return vm.set(f,m),f}let vm=new WeakMap;const jo=0,Xi=1,$o=2;function wm(n,e,t,r,i){var s=n,a=Qs(),c=re,l=Re,f,m,u,h=(a?Ne:er)(void 0),_=(a?Ne:er)(void 0),y=!1;function I(E,k){y=!0,k&&(ft(v),Yt(v),zc(c));try{E===Xi&&r&&(m?ni(m):m=tr(()=>r(s,h))),E!==jo&&f&&gn(f,()=>f=null),E!==Xi&&m&&gn(m,()=>m=null),E!==$o&&u&&gn(u,()=>u=null)}finally{k&&(zc(null),Yt(null),ft(null),Zh())}}var v=Ks(()=>{if(l!==(l=e())){if(m_(l)){var E=l;y=!1,E.then(k=>{E===l&&(Kr(h,k),I(Xi,!0))},k=>{if(E===l)throw Kr(_,k),I($o,!0),_.v}),tm(()=>{y||I(jo,!0)})}else Kr(h,l),I(Xi,!1);return()=>l=Re}})}function us(n,e,t=!1){var r=n,i=null,s=null,a=Re,c=t?$a:0,l=!1;const f=(u,h=!0)=>{l=!0,m(h,u)},m=(u,h)=>{a!==(a=u)&&(a?(i?ni(i):h&&(i=tr(()=>h(r))),s&&gn(s,()=>{s=null})):(s?ni(s):h&&(s=tr(()=>h(r))),i&&gn(i,()=>{i=null})))};Ks(()=>{l=!1,e(f),l||m(null,null)},c)}function Tm(n,e){return e}function Em(n,e,t,r){for(var i=[],s=e.length,a=0;a<s;a++)Ka(e[a].e,i,!0);var c=s>0&&i.length===0&&t!==null;if(c){var l=t.parentNode;z_(l),l.append(t),r.clear(),Ut(n,e[0].prev,e[s-1].next)}jh(i,()=>{for(var f=0;f<s;f++){var m=e[f];c||(r.delete(m.k),Ut(n,m.prev,m.next)),Xt(m.e,!c)}})}function Im(n,e,t,r,i,s=null){var a=n,c={flags:e,items:new Map,first:null};{var l=n;a=l.appendChild(Ga())}var f=null,m=!1;Ks(()=>{var u=t(),h=zs(u)?u:u==null?[]:Ba(u),_=h.length;if(!(m&&_===0)){m=_===0;{var y=ne;Am(h,c,a,i,e,(y.f&ut)!==0,r)}s!==null&&(_===0?f?ni(f):f=tr(()=>s(a)):f!==null&&gn(f,()=>{f=null})),t()}})}function Am(n,e,t,r,i,s,a,c){var l=n.length,f=e.items,m=e.first,u=m,h,_=null,y=[],I=[],v,E,k,V;for(V=0;V<l;V+=1){if(v=n[V],E=a(v,V),k=f.get(E),k===void 0){var L=u?u.e.nodes_start:t;_=Rm(L,e,_,_===null?e.first:_.next,v,E,V,r,i),f.set(E,_),y=[],I=[],u=_.next;continue}if(bm(k,v,V),k.e.f&ut&&ni(k.e),k!==u){if(h!==void 0&&h.has(k)){if(y.length<I.length){var q=I[0],B;_=q.prev;var R=y[0],w=y[y.length-1];for(B=0;B<y.length;B+=1)Wc(y[B],q,t);for(B=0;B<I.length;B+=1)h.delete(I[B]);Ut(e,R.prev,w.next),Ut(e,_,R),Ut(e,w,q),u=q,_=w,V-=1,y=[],I=[]}else h.delete(k),Wc(k,u,t),Ut(e,k.prev,k.next),Ut(e,k,_===null?e.first:_.next),Ut(e,_,k),_=k;continue}for(y=[],I=[];u!==null&&u.k!==E;)(s||!(u.e.f&ut))&&(h??(h=new Set)).add(u),I.push(u),u=u.next;if(u===null)continue;k=u}y.push(k),_=k,u=k.next}if(u!==null||h!==void 0){for(var T=h===void 0?[]:Ba(h);u!==null;)(s||!(u.e.f&ut))&&T.push(u),u=u.next;var A=T.length;if(A>0){var S=l===0?t:null;Em(e,T,S,f)}}J.first=e.first&&e.first.e,J.last=_&&_.e}function bm(n,e,t,r){Kr(n.v,e),n.i=t}function Rm(n,e,t,r,i,s,a,c,l,f){var m=(l&N_)!==0,u=(l&x_)===0,h=m?u?er(i):Ne(i):i,_=l&O_?Ne(a):a,y={i:_,v:h,k:s,a:null,e:null,prev:t,next:r};try{return y.e=tr(()=>c(n,h,_),H_),y.e.prev=t&&t.e,y.e.next=r&&r.e,t===null?e.first=y:(t.next=y,t.e.next=y.e),r!==null&&(r.prev=y,r.e.prev=y.e),y}finally{}}function Wc(n,e,t){for(var r=n.next?n.next.e.nodes_start:t,i=e?e.e.nodes_start:t,s=n.e.nodes_start;s!==r;){var a=Ws(s);i.before(s),s=a}}function Ut(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function Sm(n,e,t){Wa(()=>{var r=nr(()=>e(n,t==null?void 0:t())||{});if(r!=null&&r.destroy)return()=>r.destroy()})}function _a(n,e,t,r){var i=n.__attributes??(n.__attributes={});i[e]!==(i[e]=t)&&(e==="style"&&"__styles"in n&&(n.__styles={}),e==="loading"&&(n[E_]=t),t==null?n.removeAttribute(e):typeof t!="string"&&Pm(n).includes(e)?n[e]=t:n.setAttribute(e,t))}var Kc=new Map;function Pm(n){var e=Kc.get(n.nodeName);if(e)return e;Kc.set(n.nodeName,e=[]);for(var t,r=n,i=Element.prototype;i!==r;){t=bh(r);for(var s in t)t[s].set&&e.push(s);r=qa(r)}return e}function vi(n=!1){const e=re,t=e.l.u;if(!t)return;let r=()=>dm(e.s);if(n){let i=0,s={};const a=Is(()=>{let c=!1;const l=e.s;for(const f in l)l[f]!==s[f]&&(s[f]=l[f],c=!0);return c&&i++,i});r=()=>he(a)}t.b.length&&Y_(()=>{Qc(e,r),aa(t.b)}),la(()=>{const i=nr(()=>t.m.map(g_));return()=>{for(const s of i)typeof s=="function"&&s()}}),t.a.length&&la(()=>{Qc(e,r),aa(t.a)})}function Qc(n,e){if(n.l.s)for(const t of n.l.s)he(t);e()}function Cm(n,e,t){if(n==null)return e(void 0),zn;const r=nr(()=>n.subscribe(e,t));return r.unsubscribe?()=>r.unsubscribe():r}let Yi=!1;function Et(n,e,t){const r=t[e]??(t[e]={store:null,source:er(void 0),unsubscribe:zn});if(r.store!==n)if(r.unsubscribe(),r.store=n??null,n==null)r.source.v=void 0,r.unsubscribe=zn;else{var i=!0;r.unsubscribe=Cm(n,s=>{i?r.source.v=s:je(r.source,s)}),i=!1}return he(r.source)}function fn(n,e){return n.set(e),e}function Ya(){const n={};return X_(()=>{for(var e in n)n[e].unsubscribe()}),n}function km(n){var e=Yi;try{return Yi=!1,[n(),Yi]}finally{Yi=e}}function Xc(n){for(var e=J,t=J;e!==null&&!(e.f&(st|mi));)e=e.parent;try{return ft(e),n()}finally{ft(t)}}function at(n,e,t,r){var R;var i=(t&M_)!==0,s=!_r||(t&L_)!==0,a=(t&U_)!==0,c=(t&B_)!==0,l=!1,f;a?[f,l]=km(()=>n[e]):f=n[e];var m=Wn in n||T_ in n,u=((R=Gn(n,e))==null?void 0:R.set)??(m&&a&&e in n?w=>n[e]=w:void 0),h=r,_=!0,y=!1,I=()=>(y=!0,_&&(_=!1,c?h=nr(r):h=r),h);f===void 0&&r!==void 0&&(u&&s&&S_(),f=I(),u&&u(f));var v;if(s)v=()=>{var w=n[e];return w===void 0?I():(_=!0,y=!1,w)};else{var E=Xc(()=>(i?Is:W_)(()=>n[e]));E.f|=v_,v=()=>{var w=he(E);return w!==void 0&&(h=void 0),w===void 0?h:w}}if(!(t&F_))return v;if(u){var k=n.$$legacy;return function(w,T){return arguments.length>0?((!s||!T||k||l)&&u(T?v():w),w):v()}}var V=!1,L=!1,q=er(f),B=Xc(()=>Is(()=>{var w=v(),T=he(q);return V?(V=!1,L=!0,T):(L=!1,q.v=w)}));return i||(B.equals=Ha),function(w,T){if(arguments.length>0){const A=T?he(B):s&&a?qn(w):w;return B.equals(A)||(V=!0,je(q,A),y&&h!==void 0&&(h=A),nr(()=>he(B))),w}return he(B)}}function Dm(n){re===null&&Gh(),_r&&re.l!==null?Om(re).m.push(n):la(()=>{const e=nr(n);if(typeof e=="function")return e})}function Vm(n,e,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:r})}function Nm(){const n=re;return n===null&&Gh(),(e,t,r)=>{var s;const i=(s=n.s.$$events)==null?void 0:s[e];if(i){const a=zs(i)?i.slice():[i],c=Vm(e,t,r);for(const l of a)l.call(n.x,c);return!c.defaultPrevented}return!0}}function Om(n){var e=n.l;return e.u??(e.u={a:[],b:[],m:[]})}const xm="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(xm);V_();var Mm=bn('<div class="m-4 flex flex-col"><button id="b" class="border-none focus:outline-none p-4 m-0 rounded-xl shadow-lg flex gap-x-4 bg-green-700 hover:scale-110 duration-300 ease-out cursor-pointer svelte-310m1k"><div class="shrink-0"><img alt="" class="size-16 basis-3/4 rounded-lg"></div> <h4 class="basis-1/8 text-3xl font-medium text-white"> </h4></button> <div id="p-bar" class="flex justify-center relative bottom-[0.3rem] svelte-310m1k"><div class="mb-5 h-1 overflow-hidden rounded-full bg-transparent w-[94%]"><div class="h-4 animate-pulse bg-gradient-to-r from-green-500 to-blue-500"></div></div></div></div>');function Lm(n,e){gr(e,!1);let t=at(e,"question_set",8),r=at(e,"onclickfunc",8),i=at(e,"progress_bar",8,0);vi();var s=Mm(),a=Je(s);a.__click=function(...y){var I;(I=r())==null||I.apply(this,y)};var c=Je(a),l=Je(c),f=ti(c,2),m=Je(f),u=ti(a,2),h=Je(u),_=Je(h);Lh(()=>{_a(l,"src",t().image),mm(m,t().name),_a(_,"style",`width: ${i()??""}%`)}),Tt(n,s),yr()}Xa(["click"]);var Yc={};/**
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
 */const nd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Fm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],c=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},rd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,c=a?n[i+1]:0,l=i+2<n.length,f=l?n[i+2]:0,m=s>>2,u=(s&3)<<4|c>>4;let h=(c&15)<<2|f>>6,_=f&63;l||(_=64,a||(h=64)),r.push(t[m],t[u],t[h],t[_])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(nd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Fm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const f=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||f==null||u==null)throw new Um;const h=s<<2|c>>4;if(r.push(h),f!==64){const _=c<<4&240|f>>2;if(r.push(_),u!==64){const y=f<<6&192|u;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Um extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bm=function(n){const e=nd(n);return rd.encodeByteArray(e,!0)},bs=function(n){return Bm(n).replace(/\./g,"")},id=function(n){try{return rd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const jm=()=>qm().__FIREBASE_DEFAULTS__,$m=()=>{if(typeof process>"u"||typeof Yc>"u")return;const n=Yc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Hm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&id(n[1]);return e&&JSON.parse(e)},Zs=()=>{try{return jm()||$m()||Hm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},sd=n=>{var e,t;return(t=(e=Zs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Gm=n=>{const e=sd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},od=()=>{var n;return(n=Zs())===null||n===void 0?void 0:n.config},ad=n=>{var e;return(e=Zs())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */function Wm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[bs(JSON.stringify(t)),bs(JSON.stringify(a)),""].join(".")}/**
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
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Km(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function Qm(){var n;const e=(n=Zs())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ud(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ym(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jm(){const n=ke();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Zm(){return!Qm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cd(){try{return typeof indexedDB=="object"}catch{return!1}}function ld(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function eg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const tg="FirebaseError";class ot extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=tg,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rn.prototype.create)}}class Rn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?ng(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new ot(i,c,r)}}function ng(n,e){return n.replace(rg,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const rg=/\{\$([^}]+)}/g;function ig(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function oi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Jc(s)&&Jc(a)){if(!oi(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Jc(n){return n!==null&&typeof n=="object"}/**
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
 */function wi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function sg(n,e){const t=new og(n,e);return t.subscribe.bind(t)}class og{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ag(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ho),i.error===void 0&&(i.error=Ho),i.complete===void 0&&(i.complete=Ho);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ag(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ho(){}/**
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
 */const ug=1e3,cg=2,lg=4*60*60*1e3,hg=.5;function Zc(n,e=ug,t=cg){const r=e*Math.pow(t,n),i=Math.round(hg*r*(Math.random()-.5)*2);return Math.min(lg,r+i)}/**
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
 */function Le(n){return n&&n._delegate?n._delegate:n}class rt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ln="[DEFAULT]";/**
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
 */class dg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new zm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pg(e))try{this.getOrInitializeService({instanceIdentifier:ln})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ln){return this.instances.has(e)}getOptions(e=ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ln){return this.component?this.component.multipleInstances?e:ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fg(n){return n===ln?void 0:n}function pg(n){return n.instantiationMode==="EAGER"}/**
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
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const mg={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},gg=K.INFO,yg={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},vg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=yg[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class eo{constructor(e){this.name=e,this._logLevel=gg,this._logHandler=vg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const wg=(n,e)=>e.some(t=>n instanceof t);let el,tl;function Tg(){return el||(el=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Eg(){return tl||(tl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hd=new WeakMap,ma=new WeakMap,dd=new WeakMap,Go=new WeakMap,Ja=new WeakMap;function Ig(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(zt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&hd.set(t,n)}).catch(()=>{}),Ja.set(e,n),e}function Ag(n){if(ma.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});ma.set(n,e)}let ga={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ma.get(n);if(e==="objectStoreNames")return n.objectStoreNames||dd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return zt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function bg(n){ga=n(ga)}function Rg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(zo(this),e,...t);return dd.set(r,e.sort?e.sort():[e]),zt(r)}:Eg().includes(n)?function(...e){return n.apply(zo(this),e),zt(hd.get(this))}:function(...e){return zt(n.apply(zo(this),e))}}function Sg(n){return typeof n=="function"?Rg(n):(n instanceof IDBTransaction&&Ag(n),wg(n,Tg())?new Proxy(n,ga):n)}function zt(n){if(n instanceof IDBRequest)return Ig(n);if(Go.has(n))return Go.get(n);const e=Sg(n);return e!==n&&(Go.set(n,e),Ja.set(e,n)),e}const zo=n=>Ja.get(n);function fd(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),c=zt(a);return r&&a.addEventListener("upgradeneeded",l=>{r(zt(a.result),l.oldVersion,l.newVersion,zt(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Pg=["get","getKey","getAll","getAllKeys","count"],Cg=["put","add","delete","clear"],Wo=new Map;function nl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Wo.get(e))return Wo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Cg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Pg.includes(t)))return;const s=async function(a,...c){const l=this.transaction(a,i?"readwrite":"readonly");let f=l.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[t](...c),i&&l.done]))[0]};return Wo.set(e,s),s}bg(n=>({...n,get:(e,t,r)=>nl(e,t)||n.get(e,t,r),has:(e,t)=>!!nl(e,t)||n.has(e,t)}));/**
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
 */class kg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Dg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Dg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ya="@firebase/app",rl="0.10.17";/**
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
 */const Ct=new eo("@firebase/app"),Vg="@firebase/app-compat",Ng="@firebase/analytics-compat",Og="@firebase/analytics",xg="@firebase/app-check-compat",Mg="@firebase/app-check",Lg="@firebase/auth",Fg="@firebase/auth-compat",Ug="@firebase/database",Bg="@firebase/data-connect",qg="@firebase/database-compat",jg="@firebase/functions",$g="@firebase/functions-compat",Hg="@firebase/installations",Gg="@firebase/installations-compat",zg="@firebase/messaging",Wg="@firebase/messaging-compat",Kg="@firebase/performance",Qg="@firebase/performance-compat",Xg="@firebase/remote-config",Yg="@firebase/remote-config-compat",Jg="@firebase/storage",Zg="@firebase/storage-compat",ey="@firebase/firestore",ty="@firebase/vertexai",ny="@firebase/firestore-compat",ry="firebase",iy="11.1.0";/**
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
 */const va="[DEFAULT]",sy={[ya]:"fire-core",[Vg]:"fire-core-compat",[Og]:"fire-analytics",[Ng]:"fire-analytics-compat",[Mg]:"fire-app-check",[xg]:"fire-app-check-compat",[Lg]:"fire-auth",[Fg]:"fire-auth-compat",[Ug]:"fire-rtdb",[Bg]:"fire-data-connect",[qg]:"fire-rtdb-compat",[jg]:"fire-fn",[$g]:"fire-fn-compat",[Hg]:"fire-iid",[Gg]:"fire-iid-compat",[zg]:"fire-fcm",[Wg]:"fire-fcm-compat",[Kg]:"fire-perf",[Qg]:"fire-perf-compat",[Xg]:"fire-rc",[Yg]:"fire-rc-compat",[Jg]:"fire-gcs",[Zg]:"fire-gcs-compat",[ey]:"fire-fst",[ny]:"fire-fst-compat",[ty]:"fire-vertex","fire-js":"fire-js",[ry]:"fire-js-all"};/**
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
 */const Rs=new Map,oy=new Map,wa=new Map;function il(n,e){try{n.container.addComponent(e)}catch(t){Ct.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function pt(n){const e=n.name;if(wa.has(e))return Ct.debug(`There were multiple attempts to register component ${e}.`),!1;wa.set(e,n);for(const t of Rs.values())il(t,n);for(const t of oy.values())il(t,n);return!0}function Sn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function It(n){return n.settings!==void 0}/**
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
 */const ay={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wt=new Rn("app","Firebase",ay);/**
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
 */class uy{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
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
 */const vr=iy;function pd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:va,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Wt.create("bad-app-name",{appName:String(i)});if(t||(t=od()),!t)throw Wt.create("no-options");const s=Rs.get(i);if(s){if(oi(t,s.options)&&oi(r,s.config))return s;throw Wt.create("duplicate-app",{appName:i})}const a=new _g(i);for(const l of wa.values())a.addComponent(l);const c=new uy(t,r,a);return Rs.set(i,c),c}function Za(n=va){const e=Rs.get(n);if(!e&&n===va&&od())return pd();if(!e)throw Wt.create("no-app",{appName:n});return e}function We(n,e,t){var r;let i=(r=sy[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ct.warn(c.join(" "));return}pt(new rt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const cy="firebase-heartbeat-database",ly=1,ai="firebase-heartbeat-store";let Ko=null;function _d(){return Ko||(Ko=fd(cy,ly,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ai)}catch(t){console.warn(t)}}}}).catch(n=>{throw Wt.create("idb-open",{originalErrorMessage:n.message})})),Ko}async function hy(n){try{const t=(await _d()).transaction(ai),r=await t.objectStore(ai).get(md(n));return await t.done,r}catch(e){if(e instanceof ot)Ct.warn(e.message);else{const t=Wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ct.warn(t.message)}}}async function sl(n,e){try{const r=(await _d()).transaction(ai,"readwrite");await r.objectStore(ai).put(e,md(n)),await r.done}catch(t){if(t instanceof ot)Ct.warn(t.message);else{const r=Wt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ct.warn(r.message)}}}function md(n){return`${n.name}!${n.options.appId}`}/**
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
 */const dy=1024,fy=30*24*60*60*1e3;class py{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new my(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ol();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=fy}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ct.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ol(),{heartbeatsToSend:r,unsentEntries:i}=_y(this._heartbeatsCache.heartbeats),s=bs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Ct.warn(t),""}}}function ol(){return new Date().toISOString().substring(0,10)}function _y(n,e=dy){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),al(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),al(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class my{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cd()?ld().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await hy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return sl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return sl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function al(n){return bs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function gy(n){pt(new rt("platform-logger",e=>new kg(e),"PRIVATE")),pt(new rt("heartbeat",e=>new py(e),"PRIVATE")),We(ya,rl,n),We(ya,rl,"esm2017"),We("fire-js","")}gy("");var ul=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yn,gd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,w){function T(){}T.prototype=w.prototype,R.D=w.prototype,R.prototype=new T,R.prototype.constructor=R,R.C=function(A,S,C){for(var b=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)b[_e-2]=arguments[_e];return w.prototype[S].apply(A,b)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(R,w,T){T||(T=0);var A=Array(16);if(typeof w=="string")for(var S=0;16>S;++S)A[S]=w.charCodeAt(T++)|w.charCodeAt(T++)<<8|w.charCodeAt(T++)<<16|w.charCodeAt(T++)<<24;else for(S=0;16>S;++S)A[S]=w[T++]|w[T++]<<8|w[T++]<<16|w[T++]<<24;w=R.g[0],T=R.g[1],S=R.g[2];var C=R.g[3],b=w+(C^T&(S^C))+A[0]+3614090360&4294967295;w=T+(b<<7&4294967295|b>>>25),b=C+(S^w&(T^S))+A[1]+3905402710&4294967295,C=w+(b<<12&4294967295|b>>>20),b=S+(T^C&(w^T))+A[2]+606105819&4294967295,S=C+(b<<17&4294967295|b>>>15),b=T+(w^S&(C^w))+A[3]+3250441966&4294967295,T=S+(b<<22&4294967295|b>>>10),b=w+(C^T&(S^C))+A[4]+4118548399&4294967295,w=T+(b<<7&4294967295|b>>>25),b=C+(S^w&(T^S))+A[5]+1200080426&4294967295,C=w+(b<<12&4294967295|b>>>20),b=S+(T^C&(w^T))+A[6]+2821735955&4294967295,S=C+(b<<17&4294967295|b>>>15),b=T+(w^S&(C^w))+A[7]+4249261313&4294967295,T=S+(b<<22&4294967295|b>>>10),b=w+(C^T&(S^C))+A[8]+1770035416&4294967295,w=T+(b<<7&4294967295|b>>>25),b=C+(S^w&(T^S))+A[9]+2336552879&4294967295,C=w+(b<<12&4294967295|b>>>20),b=S+(T^C&(w^T))+A[10]+4294925233&4294967295,S=C+(b<<17&4294967295|b>>>15),b=T+(w^S&(C^w))+A[11]+2304563134&4294967295,T=S+(b<<22&4294967295|b>>>10),b=w+(C^T&(S^C))+A[12]+1804603682&4294967295,w=T+(b<<7&4294967295|b>>>25),b=C+(S^w&(T^S))+A[13]+4254626195&4294967295,C=w+(b<<12&4294967295|b>>>20),b=S+(T^C&(w^T))+A[14]+2792965006&4294967295,S=C+(b<<17&4294967295|b>>>15),b=T+(w^S&(C^w))+A[15]+1236535329&4294967295,T=S+(b<<22&4294967295|b>>>10),b=w+(S^C&(T^S))+A[1]+4129170786&4294967295,w=T+(b<<5&4294967295|b>>>27),b=C+(T^S&(w^T))+A[6]+3225465664&4294967295,C=w+(b<<9&4294967295|b>>>23),b=S+(w^T&(C^w))+A[11]+643717713&4294967295,S=C+(b<<14&4294967295|b>>>18),b=T+(C^w&(S^C))+A[0]+3921069994&4294967295,T=S+(b<<20&4294967295|b>>>12),b=w+(S^C&(T^S))+A[5]+3593408605&4294967295,w=T+(b<<5&4294967295|b>>>27),b=C+(T^S&(w^T))+A[10]+38016083&4294967295,C=w+(b<<9&4294967295|b>>>23),b=S+(w^T&(C^w))+A[15]+3634488961&4294967295,S=C+(b<<14&4294967295|b>>>18),b=T+(C^w&(S^C))+A[4]+3889429448&4294967295,T=S+(b<<20&4294967295|b>>>12),b=w+(S^C&(T^S))+A[9]+568446438&4294967295,w=T+(b<<5&4294967295|b>>>27),b=C+(T^S&(w^T))+A[14]+3275163606&4294967295,C=w+(b<<9&4294967295|b>>>23),b=S+(w^T&(C^w))+A[3]+4107603335&4294967295,S=C+(b<<14&4294967295|b>>>18),b=T+(C^w&(S^C))+A[8]+1163531501&4294967295,T=S+(b<<20&4294967295|b>>>12),b=w+(S^C&(T^S))+A[13]+2850285829&4294967295,w=T+(b<<5&4294967295|b>>>27),b=C+(T^S&(w^T))+A[2]+4243563512&4294967295,C=w+(b<<9&4294967295|b>>>23),b=S+(w^T&(C^w))+A[7]+1735328473&4294967295,S=C+(b<<14&4294967295|b>>>18),b=T+(C^w&(S^C))+A[12]+2368359562&4294967295,T=S+(b<<20&4294967295|b>>>12),b=w+(T^S^C)+A[5]+4294588738&4294967295,w=T+(b<<4&4294967295|b>>>28),b=C+(w^T^S)+A[8]+2272392833&4294967295,C=w+(b<<11&4294967295|b>>>21),b=S+(C^w^T)+A[11]+1839030562&4294967295,S=C+(b<<16&4294967295|b>>>16),b=T+(S^C^w)+A[14]+4259657740&4294967295,T=S+(b<<23&4294967295|b>>>9),b=w+(T^S^C)+A[1]+2763975236&4294967295,w=T+(b<<4&4294967295|b>>>28),b=C+(w^T^S)+A[4]+1272893353&4294967295,C=w+(b<<11&4294967295|b>>>21),b=S+(C^w^T)+A[7]+4139469664&4294967295,S=C+(b<<16&4294967295|b>>>16),b=T+(S^C^w)+A[10]+3200236656&4294967295,T=S+(b<<23&4294967295|b>>>9),b=w+(T^S^C)+A[13]+681279174&4294967295,w=T+(b<<4&4294967295|b>>>28),b=C+(w^T^S)+A[0]+3936430074&4294967295,C=w+(b<<11&4294967295|b>>>21),b=S+(C^w^T)+A[3]+3572445317&4294967295,S=C+(b<<16&4294967295|b>>>16),b=T+(S^C^w)+A[6]+76029189&4294967295,T=S+(b<<23&4294967295|b>>>9),b=w+(T^S^C)+A[9]+3654602809&4294967295,w=T+(b<<4&4294967295|b>>>28),b=C+(w^T^S)+A[12]+3873151461&4294967295,C=w+(b<<11&4294967295|b>>>21),b=S+(C^w^T)+A[15]+530742520&4294967295,S=C+(b<<16&4294967295|b>>>16),b=T+(S^C^w)+A[2]+3299628645&4294967295,T=S+(b<<23&4294967295|b>>>9),b=w+(S^(T|~C))+A[0]+4096336452&4294967295,w=T+(b<<6&4294967295|b>>>26),b=C+(T^(w|~S))+A[7]+1126891415&4294967295,C=w+(b<<10&4294967295|b>>>22),b=S+(w^(C|~T))+A[14]+2878612391&4294967295,S=C+(b<<15&4294967295|b>>>17),b=T+(C^(S|~w))+A[5]+4237533241&4294967295,T=S+(b<<21&4294967295|b>>>11),b=w+(S^(T|~C))+A[12]+1700485571&4294967295,w=T+(b<<6&4294967295|b>>>26),b=C+(T^(w|~S))+A[3]+2399980690&4294967295,C=w+(b<<10&4294967295|b>>>22),b=S+(w^(C|~T))+A[10]+4293915773&4294967295,S=C+(b<<15&4294967295|b>>>17),b=T+(C^(S|~w))+A[1]+2240044497&4294967295,T=S+(b<<21&4294967295|b>>>11),b=w+(S^(T|~C))+A[8]+1873313359&4294967295,w=T+(b<<6&4294967295|b>>>26),b=C+(T^(w|~S))+A[15]+4264355552&4294967295,C=w+(b<<10&4294967295|b>>>22),b=S+(w^(C|~T))+A[6]+2734768916&4294967295,S=C+(b<<15&4294967295|b>>>17),b=T+(C^(S|~w))+A[13]+1309151649&4294967295,T=S+(b<<21&4294967295|b>>>11),b=w+(S^(T|~C))+A[4]+4149444226&4294967295,w=T+(b<<6&4294967295|b>>>26),b=C+(T^(w|~S))+A[11]+3174756917&4294967295,C=w+(b<<10&4294967295|b>>>22),b=S+(w^(C|~T))+A[2]+718787259&4294967295,S=C+(b<<15&4294967295|b>>>17),b=T+(C^(S|~w))+A[9]+3951481745&4294967295,R.g[0]=R.g[0]+w&4294967295,R.g[1]=R.g[1]+(S+(b<<21&4294967295|b>>>11))&4294967295,R.g[2]=R.g[2]+S&4294967295,R.g[3]=R.g[3]+C&4294967295}r.prototype.u=function(R,w){w===void 0&&(w=R.length);for(var T=w-this.blockSize,A=this.B,S=this.h,C=0;C<w;){if(S==0)for(;C<=T;)i(this,R,C),C+=this.blockSize;if(typeof R=="string"){for(;C<w;)if(A[S++]=R.charCodeAt(C++),S==this.blockSize){i(this,A),S=0;break}}else for(;C<w;)if(A[S++]=R[C++],S==this.blockSize){i(this,A),S=0;break}}this.h=S,this.o+=w},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var w=1;w<R.length-8;++w)R[w]=0;var T=8*this.o;for(w=R.length-8;w<R.length;++w)R[w]=T&255,T/=256;for(this.u(R),R=Array(16),w=T=0;4>w;++w)for(var A=0;32>A;A+=8)R[T++]=this.g[w]>>>A&255;return R};function s(R,w){var T=c;return Object.prototype.hasOwnProperty.call(T,R)?T[R]:T[R]=w(R)}function a(R,w){this.h=w;for(var T=[],A=!0,S=R.length-1;0<=S;S--){var C=R[S]|0;A&&C==w||(T[S]=C,A=!1)}this.g=T}var c={};function l(R){return-128<=R&&128>R?s(R,function(w){return new a([w|0],0>w?-1:0)}):new a([R|0],0>R?-1:0)}function f(R){if(isNaN(R)||!isFinite(R))return u;if(0>R)return v(f(-R));for(var w=[],T=1,A=0;R>=T;A++)w[A]=R/T|0,T*=4294967296;return new a(w,0)}function m(R,w){if(R.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R.charAt(0)=="-")return v(m(R.substring(1),w));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=f(Math.pow(w,8)),A=u,S=0;S<R.length;S+=8){var C=Math.min(8,R.length-S),b=parseInt(R.substring(S,S+C),w);8>C?(C=f(Math.pow(w,C)),A=A.j(C).add(f(b))):(A=A.j(T),A=A.add(f(b)))}return A}var u=l(0),h=l(1),_=l(16777216);n=a.prototype,n.m=function(){if(I(this))return-v(this).m();for(var R=0,w=1,T=0;T<this.g.length;T++){var A=this.i(T);R+=(0<=A?A:4294967296+A)*w,w*=4294967296}return R},n.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(y(this))return"0";if(I(this))return"-"+v(this).toString(R);for(var w=f(Math.pow(R,6)),T=this,A="";;){var S=L(T,w).g;T=E(T,S.j(w));var C=((0<T.g.length?T.g[0]:T.h)>>>0).toString(R);if(T=S,y(T))return C+A;for(;6>C.length;)C="0"+C;A=C+A}},n.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function y(R){if(R.h!=0)return!1;for(var w=0;w<R.g.length;w++)if(R.g[w]!=0)return!1;return!0}function I(R){return R.h==-1}n.l=function(R){return R=E(this,R),I(R)?-1:y(R)?0:1};function v(R){for(var w=R.g.length,T=[],A=0;A<w;A++)T[A]=~R.g[A];return new a(T,~R.h).add(h)}n.abs=function(){return I(this)?v(this):this},n.add=function(R){for(var w=Math.max(this.g.length,R.g.length),T=[],A=0,S=0;S<=w;S++){var C=A+(this.i(S)&65535)+(R.i(S)&65535),b=(C>>>16)+(this.i(S)>>>16)+(R.i(S)>>>16);A=b>>>16,C&=65535,b&=65535,T[S]=b<<16|C}return new a(T,T[T.length-1]&-2147483648?-1:0)};function E(R,w){return R.add(v(w))}n.j=function(R){if(y(this)||y(R))return u;if(I(this))return I(R)?v(this).j(v(R)):v(v(this).j(R));if(I(R))return v(this.j(v(R)));if(0>this.l(_)&&0>R.l(_))return f(this.m()*R.m());for(var w=this.g.length+R.g.length,T=[],A=0;A<2*w;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var S=0;S<R.g.length;S++){var C=this.i(A)>>>16,b=this.i(A)&65535,_e=R.i(S)>>>16,Ke=R.i(S)&65535;T[2*A+2*S]+=b*Ke,k(T,2*A+2*S),T[2*A+2*S+1]+=C*Ke,k(T,2*A+2*S+1),T[2*A+2*S+1]+=b*_e,k(T,2*A+2*S+1),T[2*A+2*S+2]+=C*_e,k(T,2*A+2*S+2)}for(A=0;A<w;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=w;A<2*w;A++)T[A]=0;return new a(T,0)};function k(R,w){for(;(R[w]&65535)!=R[w];)R[w+1]+=R[w]>>>16,R[w]&=65535,w++}function V(R,w){this.g=R,this.h=w}function L(R,w){if(y(w))throw Error("division by zero");if(y(R))return new V(u,u);if(I(R))return w=L(v(R),w),new V(v(w.g),v(w.h));if(I(w))return w=L(R,v(w)),new V(v(w.g),w.h);if(30<R.g.length){if(I(R)||I(w))throw Error("slowDivide_ only works with positive integers.");for(var T=h,A=w;0>=A.l(R);)T=q(T),A=q(A);var S=B(T,1),C=B(A,1);for(A=B(A,2),T=B(T,2);!y(A);){var b=C.add(A);0>=b.l(R)&&(S=S.add(T),C=b),A=B(A,1),T=B(T,1)}return w=E(R,S.j(w)),new V(S,w)}for(S=u;0<=R.l(w);){for(T=Math.max(1,Math.floor(R.m()/w.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),C=f(T),b=C.j(w);I(b)||0<b.l(R);)T-=A,C=f(T),b=C.j(w);y(C)&&(C=h),S=S.add(C),R=E(R,b)}return new V(S,R)}n.A=function(R){return L(this,R).h},n.and=function(R){for(var w=Math.max(this.g.length,R.g.length),T=[],A=0;A<w;A++)T[A]=this.i(A)&R.i(A);return new a(T,this.h&R.h)},n.or=function(R){for(var w=Math.max(this.g.length,R.g.length),T=[],A=0;A<w;A++)T[A]=this.i(A)|R.i(A);return new a(T,this.h|R.h)},n.xor=function(R){for(var w=Math.max(this.g.length,R.g.length),T=[],A=0;A<w;A++)T[A]=this.i(A)^R.i(A);return new a(T,this.h^R.h)};function q(R){for(var w=R.g.length+1,T=[],A=0;A<w;A++)T[A]=R.i(A)<<1|R.i(A-1)>>>31;return new a(T,R.h)}function B(R,w){var T=w>>5;w%=32;for(var A=R.g.length-T,S=[],C=0;C<A;C++)S[C]=0<w?R.i(C+T)>>>w|R.i(C+T+1)<<32-w:R.i(C+T);return new a(S,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,gd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,yn=a}).apply(typeof ul<"u"?ul:typeof self<"u"?self:typeof window<"u"?window:{});var Ji=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yd,Gr,vd,cs,Ta,wd,Td,Ed;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,d,p){return o==Array.prototype||o==Object.prototype||(o[d]=p.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ji=="object"&&Ji];for(var d=0;d<o.length;++d){var p=o[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function i(o,d){if(d)e:{var p=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var P=o[g];if(!(P in p))break e;p=p[P]}o=o[o.length-1],g=p[o],d=d(g),d!=g&&d!=null&&e(p,o,{configurable:!0,writable:!0,value:d})}}function s(o,d){o instanceof String&&(o+="");var p=0,g=!1,P={next:function(){if(!g&&p<o.length){var D=p++;return{value:d(D,o[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(o){return o||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var d=typeof o;return d=d!="object"?d:o?Array.isArray(o)?"array":d:"null",d=="array"||d=="object"&&typeof o.length=="number"}function f(o){var d=typeof o;return d=="object"&&o!=null||d=="function"}function m(o,d,p){return o.call.apply(o.bind,arguments)}function u(o,d,p){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),o.apply(d,P)}}return function(){return o.apply(d,arguments)}}function h(o,d,p){return h=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:u,h.apply(null,arguments)}function _(o,d){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function y(o,d){function p(){}p.prototype=d.prototype,o.aa=d.prototype,o.prototype=new p,o.prototype.constructor=o,o.Qb=function(g,P,D){for(var x=Array(arguments.length-2),te=2;te<arguments.length;te++)x[te-2]=arguments[te];return d.prototype[P].apply(g,x)}}function I(o){const d=o.length;if(0<d){const p=Array(d);for(let g=0;g<d;g++)p[g]=o[g];return p}return[]}function v(o,d){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(l(g)){const P=o.length||0,D=g.length||0;o.length=P+D;for(let x=0;x<D;x++)o[P+x]=g[x]}else o.push(g)}}class E{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function k(o){return/^[\s\xa0]*$/.test(o)}function V(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function L(o){return L[" "](o),o}L[" "]=function(){};var q=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function B(o,d,p){for(const g in o)d.call(p,o[g],g,o)}function R(o,d){for(const p in o)d.call(void 0,o[p],p,o)}function w(o){const d={};for(const p in o)d[p]=o[p];return d}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,d){let p,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(p in g)o[p]=g[p];for(let D=0;D<T.length;D++)p=T[D],Object.prototype.hasOwnProperty.call(g,p)&&(o[p]=g[p])}}function S(o){var d=1;o=o.split(":");const p=[];for(;0<d&&o.length;)p.push(o.shift()),d--;return o.length&&p.push(o.join(":")),p}function C(o){c.setTimeout(()=>{throw o},0)}function b(){var o=Nn;let d=null;return o.g&&(d=o.g,o.g=o.g.next,o.g||(o.h=null),d.next=null),d}class _e{constructor(){this.h=this.g=null}add(d,p){const g=Ke.get();g.set(d,p),this.h?this.h.next=g:this.g=g,this.h=g}}var Ke=new E(()=>new Vn,o=>o.reset());class Vn{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let rn,sn=!1,Nn=new _e,ki=()=>{const o=c.Promise.resolve(void 0);rn=()=>{o.then(Eo)}};var Eo=()=>{for(var o;o=b();){try{o.h.call(o.g)}catch(p){C(p)}var d=Ke;d.j(o),100>d.h&&(d.h++,o.next=d.g,d.g=o)}sn=!1};function Qe(){this.s=this.s,this.C=this.C}Qe.prototype.s=!1,Qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(o,d){this.type=o,this.g=this.target=d,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var Di=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,d=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const p=()=>{};c.addEventListener("test",p,d),c.removeEventListener("test",p,d)}catch{}return o}();function Nt(o,d){if(me.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var p=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=d,d=o.relatedTarget){if(q){e:{try{L(d.nodeName);var P=!0;break e}catch{}P=!1}P||(d=null)}}else p=="mouseover"?d=o.fromElement:p=="mouseout"&&(d=o.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Io[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Nt.aa.h.call(this)}}y(Nt,me);var Io={2:"touch",3:"pen",4:"mouse"};Nt.prototype.h=function(){Nt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var On="closure_listenable_"+(1e6*Math.random()|0),M=0;function oe(o,d,p,g,P){this.listener=o,this.proxy=null,this.src=d,this.type=p,this.capture=!!g,this.ha=P,this.key=++M,this.da=this.fa=!1}function Fe(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ge(o){this.src=o,this.g={},this.h=0}Ge.prototype.add=function(o,d,p,g,P){var D=o.toString();o=this.g[D],o||(o=this.g[D]=[],this.h++);var x=Ue(o,d,g,P);return-1<x?(d=o[x],p||(d.fa=!1)):(d=new oe(d,this.src,D,!!g,P),d.fa=p,o.push(d)),d};function Xe(o,d){var p=d.type;if(p in o.g){var g=o.g[p],P=Array.prototype.indexOf.call(g,d,void 0),D;(D=0<=P)&&Array.prototype.splice.call(g,P,1),D&&(Fe(d),o.g[p].length==0&&(delete o.g[p],o.h--))}}function Ue(o,d,p,g){for(var P=0;P<o.length;++P){var D=o[P];if(!D.da&&D.listener==d&&D.capture==!!p&&D.ha==g)return P}return-1}var yt="closure_lm_"+(1e6*Math.random()|0),Rr={};function Sr(o,d,p,g,P){if(Array.isArray(d)){for(var D=0;D<d.length;D++)Sr(o,d[D],p,g,P);return null}return p=zu(p),o&&o[On]?o.K(d,p,f(g)?!!g.capture:!!g,P):W(o,d,p,!1,g,P)}function W(o,d,p,g,P,D){if(!d)throw Error("Invalid event type");var x=f(P)?!!P.capture:!!P,te=Ao(o);if(te||(o[yt]=te=new Ge(o)),p=te.add(d,p,g,x,D),p.proxy)return p;if(g=Ot(),p.proxy=g,g.src=o,g.listener=p,o.addEventListener)Di||(P=x),P===void 0&&(P=!1),o.addEventListener(d.toString(),g,P);else if(o.attachEvent)o.attachEvent(Vi(d.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Ot(){function o(p){return d.call(o.src,o.listener,p)}const d=kr;return o}function Pr(o,d,p,g,P){if(Array.isArray(d))for(var D=0;D<d.length;D++)Pr(o,d[D],p,g,P);else g=f(g)?!!g.capture:!!g,p=zu(p),o&&o[On]?(o=o.i,d=String(d).toString(),d in o.g&&(D=o.g[d],p=Ue(D,p,g,P),-1<p&&(Fe(D[p]),Array.prototype.splice.call(D,p,1),D.length==0&&(delete o.g[d],o.h--)))):o&&(o=Ao(o))&&(d=o.g[d.toString()],o=-1,d&&(o=Ue(d,p,g,P)),(p=-1<o?d[o]:null)&&Cr(p))}function Cr(o){if(typeof o!="number"&&o&&!o.da){var d=o.src;if(d&&d[On])Xe(d.i,o);else{var p=o.type,g=o.proxy;d.removeEventListener?d.removeEventListener(p,g,o.capture):d.detachEvent?d.detachEvent(Vi(p),g):d.addListener&&d.removeListener&&d.removeListener(g),(p=Ao(d))?(Xe(p,o),p.h==0&&(p.src=null,d[yt]=null)):Fe(o)}}}function Vi(o){return o in Rr?Rr[o]:Rr[o]="on"+o}function kr(o,d){if(o.da)o=!0;else{d=new Nt(d,this);var p=o.listener,g=o.ha||o.src;o.fa&&Cr(o),o=p.call(g,d)}return o}function Ao(o){return o=o[yt],o instanceof Ge?o:null}var bo="__closure_events_fn_"+(1e9*Math.random()>>>0);function zu(o){return typeof o=="function"?o:(o[bo]||(o[bo]=function(d){return o.handleEvent(d)}),o[bo])}function Ee(){Qe.call(this),this.i=new Ge(this),this.M=this,this.F=null}y(Ee,Qe),Ee.prototype[On]=!0,Ee.prototype.removeEventListener=function(o,d,p,g){Pr(this,o,d,p,g)};function De(o,d){var p,g=o.F;if(g)for(p=[];g;g=g.F)p.push(g);if(o=o.M,g=d.type||d,typeof d=="string")d=new me(d,o);else if(d instanceof me)d.target=d.target||o;else{var P=d;d=new me(g,o),A(d,P)}if(P=!0,p)for(var D=p.length-1;0<=D;D--){var x=d.g=p[D];P=Ni(x,g,!0,d)&&P}if(x=d.g=o,P=Ni(x,g,!0,d)&&P,P=Ni(x,g,!1,d)&&P,p)for(D=0;D<p.length;D++)x=d.g=p[D],P=Ni(x,g,!1,d)&&P}Ee.prototype.N=function(){if(Ee.aa.N.call(this),this.i){var o=this.i,d;for(d in o.g){for(var p=o.g[d],g=0;g<p.length;g++)Fe(p[g]);delete o.g[d],o.h--}}this.F=null},Ee.prototype.K=function(o,d,p,g){return this.i.add(String(o),d,!1,p,g)},Ee.prototype.L=function(o,d,p,g){return this.i.add(String(o),d,!0,p,g)};function Ni(o,d,p,g){if(d=o.i.g[String(d)],!d)return!0;d=d.concat();for(var P=!0,D=0;D<d.length;++D){var x=d[D];if(x&&!x.da&&x.capture==p){var te=x.listener,ye=x.ha||x.src;x.fa&&Xe(o.i,x),P=te.call(ye,g)!==!1&&P}}return P&&!g.defaultPrevented}function Wu(o,d,p){if(typeof o=="function")p&&(o=h(o,p));else if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(o,d||0)}function Ku(o){o.g=Wu(()=>{o.g=null,o.i&&(o.i=!1,Ku(o))},o.l);const d=o.h;o.h=null,o.m.apply(null,d)}class qp extends Qe{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Ku(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dr(o){Qe.call(this),this.h=o,this.g={}}y(Dr,Qe);var Qu=[];function Xu(o){B(o.g,function(d,p){this.g.hasOwnProperty(p)&&Cr(d)},o),o.g={}}Dr.prototype.N=function(){Dr.aa.N.call(this),Xu(this)},Dr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ro=c.JSON.stringify,jp=c.JSON.parse,$p=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function So(){}So.prototype.h=null;function Yu(o){return o.h||(o.h=o.i())}function Ju(){}var Vr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Po(){me.call(this,"d")}y(Po,me);function Co(){me.call(this,"c")}y(Co,me);var on={},Zu=null;function Oi(){return Zu=Zu||new Ee}on.La="serverreachability";function ec(o){me.call(this,on.La,o)}y(ec,me);function Nr(o){const d=Oi();De(d,new ec(d))}on.STAT_EVENT="statevent";function tc(o,d){me.call(this,on.STAT_EVENT,o),this.stat=d}y(tc,me);function Ve(o){const d=Oi();De(d,new tc(d,o))}on.Ma="timingevent";function nc(o,d){me.call(this,on.Ma,o),this.size=d}y(nc,me);function Or(o,d){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},d)}function xr(){this.g=!0}xr.prototype.xa=function(){this.g=!1};function Hp(o,d,p,g,P,D){o.info(function(){if(o.g)if(D)for(var x="",te=D.split("&"),ye=0;ye<te.length;ye++){var Z=te[ye].split("=");if(1<Z.length){var Ie=Z[0];Z=Z[1];var Ae=Ie.split("_");x=2<=Ae.length&&Ae[1]=="type"?x+(Ie+"="+Z+"&"):x+(Ie+"=redacted&")}}else x=null;else x=D;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+d+`
`+p+`
`+x})}function Gp(o,d,p,g,P,D,x){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+d+`
`+p+`
`+D+" "+x})}function xn(o,d,p,g){o.info(function(){return"XMLHTTP TEXT ("+d+"): "+Wp(o,p)+(g?" "+g:"")})}function zp(o,d){o.info(function(){return"TIMEOUT: "+d})}xr.prototype.info=function(){};function Wp(o,d){if(!o.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(o=0;o<p.length;o++)if(Array.isArray(p[o])){var g=p[o];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var x=1;x<P.length;x++)P[x]=""}}}}return Ro(p)}catch{return d}}var xi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},rc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ko;function Mi(){}y(Mi,So),Mi.prototype.g=function(){return new XMLHttpRequest},Mi.prototype.i=function(){return{}},ko=new Mi;function xt(o,d,p,g){this.j=o,this.i=d,this.l=p,this.R=g||1,this.U=new Dr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ic}function ic(){this.i=null,this.g="",this.h=!1}var sc={},Do={};function Vo(o,d,p){o.L=1,o.v=Bi(vt(d)),o.m=p,o.P=!0,oc(o,null)}function oc(o,d){o.F=Date.now(),Li(o),o.A=vt(o.v);var p=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),wc(p.i,"t",g),o.C=0,p=o.j.J,o.h=new ic,o.g=Fc(o.j,p?d:null,!o.m),0<o.O&&(o.M=new qp(h(o.Y,o,o.g),o.O)),d=o.U,p=o.g,g=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(Qu[0]=P.toString()),P=Qu);for(var D=0;D<P.length;D++){var x=Sr(p,P[D],g||d.handleEvent,!1,d.h||d);if(!x)break;d.g[x.key]=x}d=o.H?w(o.H):{},o.m?(o.u||(o.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,d)):(o.u="GET",o.g.ea(o.A,o.u,null,d)),Nr(),Hp(o.i,o.u,o.A,o.l,o.R,o.m)}xt.prototype.ca=function(o){o=o.target;const d=this.M;d&&wt(o)==3?d.j():this.Y(o)},xt.prototype.Y=function(o){try{if(o==this.g)e:{const Ae=wt(this.g);var d=this.g.Ba();const Fn=this.g.Z();if(!(3>Ae)&&(Ae!=3||this.g&&(this.h.h||this.g.oa()||Sc(this.g)))){this.J||Ae!=4||d==7||(d==8||0>=Fn?Nr(3):Nr(2)),No(this);var p=this.g.Z();this.X=p;t:if(ac(this)){var g=Sc(this.g);o="";var P=g.length,D=wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){an(this),Mr(this);var x="";break t}this.h.i=new c.TextDecoder}for(d=0;d<P;d++)this.h.h=!0,o+=this.h.i.decode(g[d],{stream:!(D&&d==P-1)});g.length=0,this.h.g+=o,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=p==200,Gp(this.i,this.u,this.A,this.l,this.R,Ae,p),this.o){if(this.T&&!this.K){t:{if(this.g){var te,ye=this.g;if((te=ye.g?ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(te)){var Z=te;break t}}Z=null}if(p=Z)xn(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oo(this,p);else{this.o=!1,this.s=3,Ve(12),an(this),Mr(this);break e}}if(this.P){p=!0;let Ye;for(;!this.J&&this.C<x.length;)if(Ye=Kp(this,x),Ye==Do){Ae==4&&(this.s=4,Ve(14),p=!1),xn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ye==sc){this.s=4,Ve(15),xn(this.i,this.l,x,"[Invalid Chunk]"),p=!1;break}else xn(this.i,this.l,Ye,null),Oo(this,Ye);if(ac(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||x.length!=0||this.h.h||(this.s=1,Ve(16),p=!1),this.o=this.o&&p,!p)xn(this.i,this.l,x,"[Invalid Chunked Response]"),an(this),Mr(this);else if(0<x.length&&!this.W){this.W=!0;var Ie=this.j;Ie.g==this&&Ie.ba&&!Ie.M&&(Ie.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),Bo(Ie),Ie.M=!0,Ve(11))}}else xn(this.i,this.l,x,null),Oo(this,x);Ae==4&&an(this),this.o&&!this.J&&(Ae==4?Oc(this.j,this):(this.o=!1,Li(this)))}else h_(this.g),p==400&&0<x.indexOf("Unknown SID")?(this.s=3,Ve(12)):(this.s=0,Ve(13)),an(this),Mr(this)}}}catch{}finally{}};function ac(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Kp(o,d){var p=o.C,g=d.indexOf(`
`,p);return g==-1?Do:(p=Number(d.substring(p,g)),isNaN(p)?sc:(g+=1,g+p>d.length?Do:(d=d.slice(g,g+p),o.C=g+p,d)))}xt.prototype.cancel=function(){this.J=!0,an(this)};function Li(o){o.S=Date.now()+o.I,uc(o,o.I)}function uc(o,d){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Or(h(o.ba,o),d)}function No(o){o.B&&(c.clearTimeout(o.B),o.B=null)}xt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(zp(this.i,this.A),this.L!=2&&(Nr(),Ve(17)),an(this),this.s=2,Mr(this)):uc(this,this.S-o)};function Mr(o){o.j.G==0||o.J||Oc(o.j,o)}function an(o){No(o);var d=o.M;d&&typeof d.ma=="function"&&d.ma(),o.M=null,Xu(o.U),o.g&&(d=o.g,o.g=null,d.abort(),d.ma())}function Oo(o,d){try{var p=o.j;if(p.G!=0&&(p.g==o||xo(p.h,o))){if(!o.K&&xo(p.h,o)&&p.G==3){try{var g=p.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<o.F)zi(p),Hi(p);else break e;Uo(p),Ve(18)}}else p.za=P[1],0<p.za-p.T&&37500>P[2]&&p.F&&p.v==0&&!p.C&&(p.C=Or(h(p.Za,p),6e3));if(1>=hc(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else cn(p,11)}else if((o.K||p.g==o)&&zi(p),!k(d))for(P=p.Da.g.parse(d),d=0;d<P.length;d++){let Z=P[d];if(p.T=Z[0],Z=Z[1],p.G==2)if(Z[0]=="c"){p.K=Z[1],p.ia=Z[2];const Ie=Z[3];Ie!=null&&(p.la=Ie,p.j.info("VER="+p.la));const Ae=Z[4];Ae!=null&&(p.Aa=Ae,p.j.info("SVER="+p.Aa));const Fn=Z[5];Fn!=null&&typeof Fn=="number"&&0<Fn&&(g=1.5*Fn,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const Ye=o.g;if(Ye){const Ki=Ye.g?Ye.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ki){var D=g.h;D.g||Ki.indexOf("spdy")==-1&&Ki.indexOf("quic")==-1&&Ki.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Mo(D,D.h),D.h=null))}if(g.D){const qo=Ye.g?Ye.g.getResponseHeader("X-HTTP-Session-Id"):null;qo&&(g.ya=qo,ie(g.I,g.D,qo))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-o.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var x=o;if(g.qa=Lc(g,g.J?g.ia:null,g.W),x.K){dc(g.h,x);var te=x,ye=g.L;ye&&(te.I=ye),te.B&&(No(te),Li(te)),g.g=x}else Vc(g);0<p.i.length&&Gi(p)}else Z[0]!="stop"&&Z[0]!="close"||cn(p,7);else p.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?cn(p,7):Fo(p):Z[0]!="noop"&&p.l&&p.l.ta(Z),p.v=0)}}Nr(4)}catch{}}var Qp=class{constructor(o,d){this.g=o,this.map=d}};function cc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function lc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function hc(o){return o.h?1:o.g?o.g.size:0}function xo(o,d){return o.h?o.h==d:o.g?o.g.has(d):!1}function Mo(o,d){o.g?o.g.add(d):o.h=d}function dc(o,d){o.h&&o.h==d?o.h=null:o.g&&o.g.has(d)&&o.g.delete(d)}cc.prototype.cancel=function(){if(this.i=fc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function fc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let d=o.i;for(const p of o.g.values())d=d.concat(p.D);return d}return I(o.i)}function Xp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var d=[],p=o.length,g=0;g<p;g++)d.push(o[g]);return d}d=[],p=0;for(g in o)d[p++]=o[g];return d}function Yp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var d=[];o=o.length;for(var p=0;p<o;p++)d.push(p);return d}d=[],p=0;for(const g in o)d[p++]=g;return d}}}function pc(o,d){if(o.forEach&&typeof o.forEach=="function")o.forEach(d,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,d,void 0);else for(var p=Yp(o),g=Xp(o),P=g.length,D=0;D<P;D++)d.call(void 0,g[D],p&&p[D],o)}var _c=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jp(o,d){if(o){o=o.split("&");for(var p=0;p<o.length;p++){var g=o[p].indexOf("="),P=null;if(0<=g){var D=o[p].substring(0,g);P=o[p].substring(g+1)}else D=o[p];d(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function un(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof un){this.h=o.h,Fi(this,o.j),this.o=o.o,this.g=o.g,Ui(this,o.s),this.l=o.l;var d=o.i,p=new Ur;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),mc(this,p),this.m=o.m}else o&&(d=String(o).match(_c))?(this.h=!1,Fi(this,d[1]||"",!0),this.o=Lr(d[2]||""),this.g=Lr(d[3]||"",!0),Ui(this,d[4]),this.l=Lr(d[5]||"",!0),mc(this,d[6]||"",!0),this.m=Lr(d[7]||"")):(this.h=!1,this.i=new Ur(null,this.h))}un.prototype.toString=function(){var o=[],d=this.j;d&&o.push(Fr(d,gc,!0),":");var p=this.g;return(p||d=="file")&&(o.push("//"),(d=this.o)&&o.push(Fr(d,gc,!0),"@"),o.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&o.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&o.push("/"),o.push(Fr(p,p.charAt(0)=="/"?t_:e_,!0))),(p=this.i.toString())&&o.push("?",p),(p=this.m)&&o.push("#",Fr(p,r_)),o.join("")};function vt(o){return new un(o)}function Fi(o,d,p){o.j=p?Lr(d,!0):d,o.j&&(o.j=o.j.replace(/:$/,""))}function Ui(o,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);o.s=d}else o.s=null}function mc(o,d,p){d instanceof Ur?(o.i=d,i_(o.i,o.h)):(p||(d=Fr(d,n_)),o.i=new Ur(d,o.h))}function ie(o,d,p){o.i.set(d,p)}function Bi(o){return ie(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Lr(o,d){return o?d?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Fr(o,d,p){return typeof o=="string"?(o=encodeURI(o).replace(d,Zp),p&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Zp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var gc=/[#\/\?@]/g,e_=/[#\?:]/g,t_=/[#\?]/g,n_=/[#\?@]/g,r_=/#/g;function Ur(o,d){this.h=this.g=null,this.i=o||null,this.j=!!d}function Mt(o){o.g||(o.g=new Map,o.h=0,o.i&&Jp(o.i,function(d,p){o.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}n=Ur.prototype,n.add=function(o,d){Mt(this),this.i=null,o=Mn(this,o);var p=this.g.get(o);return p||this.g.set(o,p=[]),p.push(d),this.h+=1,this};function yc(o,d){Mt(o),d=Mn(o,d),o.g.has(d)&&(o.i=null,o.h-=o.g.get(d).length,o.g.delete(d))}function vc(o,d){return Mt(o),d=Mn(o,d),o.g.has(d)}n.forEach=function(o,d){Mt(this),this.g.forEach(function(p,g){p.forEach(function(P){o.call(d,P,g,this)},this)},this)},n.na=function(){Mt(this);const o=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let g=0;g<d.length;g++){const P=o[g];for(let D=0;D<P.length;D++)p.push(d[g])}return p},n.V=function(o){Mt(this);let d=[];if(typeof o=="string")vc(this,o)&&(d=d.concat(this.g.get(Mn(this,o))));else{o=Array.from(this.g.values());for(let p=0;p<o.length;p++)d=d.concat(o[p])}return d},n.set=function(o,d){return Mt(this),this.i=null,o=Mn(this,o),vc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[d]),this.h+=1,this},n.get=function(o,d){return o?(o=this.V(o),0<o.length?String(o[0]):d):d};function wc(o,d,p){yc(o,d),0<p.length&&(o.i=null,o.g.set(Mn(o,d),I(p)),o.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var g=d[p];const D=encodeURIComponent(String(g)),x=this.V(g);for(g=0;g<x.length;g++){var P=D;x[g]!==""&&(P+="="+encodeURIComponent(String(x[g]))),o.push(P)}}return this.i=o.join("&")};function Mn(o,d){return d=String(d),o.j&&(d=d.toLowerCase()),d}function i_(o,d){d&&!o.j&&(Mt(o),o.i=null,o.g.forEach(function(p,g){var P=g.toLowerCase();g!=P&&(yc(this,g),wc(this,P,p))},o)),o.j=d}function s_(o,d){const p=new xr;if(c.Image){const g=new Image;g.onload=_(Lt,p,"TestLoadImage: loaded",!0,d,g),g.onerror=_(Lt,p,"TestLoadImage: error",!1,d,g),g.onabort=_(Lt,p,"TestLoadImage: abort",!1,d,g),g.ontimeout=_(Lt,p,"TestLoadImage: timeout",!1,d,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else d(!1)}function o_(o,d){const p=new xr,g=new AbortController,P=setTimeout(()=>{g.abort(),Lt(p,"TestPingServer: timeout",!1,d)},1e4);fetch(o,{signal:g.signal}).then(D=>{clearTimeout(P),D.ok?Lt(p,"TestPingServer: ok",!0,d):Lt(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(P),Lt(p,"TestPingServer: error",!1,d)})}function Lt(o,d,p,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(p)}catch{}}function a_(){this.g=new $p}function u_(o,d,p){const g=p||"";try{pc(o,function(P,D){let x=P;f(P)&&(x=Ro(P)),d.push(g+D+"="+encodeURIComponent(x))})}catch(P){throw d.push(g+"type="+encodeURIComponent("_badmap")),P}}function qi(o){this.l=o.Ub||null,this.j=o.eb||!1}y(qi,So),qi.prototype.g=function(){return new ji(this.l,this.j)},qi.prototype.i=function(o){return function(){return o}}({});function ji(o,d){Ee.call(this),this.D=o,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(ji,Ee),n=ji.prototype,n.open=function(o,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=d,this.readyState=1,qr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(d.body=o),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Br(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,qr(this)),this.g&&(this.readyState=3,qr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Tc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Tc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var d=o.value?o.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!o.done}))&&(this.response=this.responseText+=d)}o.done?Br(this):qr(this),this.readyState==3&&Tc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Br(this))},n.Qa=function(o){this.g&&(this.response=o,Br(this))},n.ga=function(){this.g&&Br(this)};function Br(o){o.readyState=4,o.l=null,o.j=null,o.v=null,qr(o)}n.setRequestHeader=function(o,d){this.u.append(o,d)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,o.push(p[0]+": "+p[1]),p=d.next();return o.join(`\r
`)};function qr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ec(o){let d="";return B(o,function(p,g){d+=g,d+=":",d+=p,d+=`\r
`}),d}function Lo(o,d,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=Ec(p),typeof o=="string"?p!=null&&encodeURIComponent(String(p)):ie(o,d,p))}function ue(o){Ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(ue,Ee);var c_=/^https?$/i,l_=["POST","PUT"];n=ue.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,d,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);d=d?d.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ko.g(),this.v=this.o?Yu(this.o):Yu(ko),this.g.onreadystatechange=h(this.Ea,this);try{this.B=!0,this.g.open(d,String(o),!0),this.B=!1}catch(D){Ic(this,D);return}if(o=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)p.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())p.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),P=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(l_,d,void 0))||g||P||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,x]of p)this.g.setRequestHeader(D,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rc(this),this.u=!0,this.g.send(o),this.u=!1}catch(D){Ic(this,D)}};function Ic(o,d){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=d,o.m=5,Ac(o),$i(o)}function Ac(o){o.A||(o.A=!0,De(o,"complete"),De(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,De(this,"complete"),De(this,"abort"),$i(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$i(this,!0)),ue.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?bc(this):this.bb())},n.bb=function(){bc(this)};function bc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||wt(o)!=4||o.Z()!=2)){if(o.u&&wt(o)==4)Wu(o.Ea,0,o);else if(De(o,"readystatechange"),wt(o)==4){o.h=!1;try{const x=o.Z();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var g;if(g=x===0){var P=String(o.D).match(_c)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),g=!c_.test(P?P.toLowerCase():"")}p=g}if(p)De(o,"complete"),De(o,"success");else{o.m=6;try{var D=2<wt(o)?o.g.statusText:""}catch{D=""}o.l=D+" ["+o.Z()+"]",Ac(o)}}finally{$i(o)}}}}function $i(o,d){if(o.g){Rc(o);const p=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,d||De(o,"ready");try{p.onreadystatechange=g}catch{}}}function Rc(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function wt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<wt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var d=this.g.responseText;return o&&d.indexOf(o)==0&&(d=d.substring(o.length)),jp(d)}};function Sc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function h_(o){const d={};o=(o.g&&2<=wt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(k(o[g]))continue;var p=S(o[g]);const P=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=d[P]||[];d[P]=D,D.push(p)}R(d,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function jr(o,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[o]||d}function Pc(o){this.Aa=0,this.i=[],this.j=new xr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=jr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=jr("baseRetryDelayMs",5e3,o),this.cb=jr("retryDelaySeedMs",1e4,o),this.Wa=jr("forwardChannelMaxRetries",2,o),this.wa=jr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new cc(o&&o.concurrentRequestLimit),this.Da=new a_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Pc.prototype,n.la=8,n.G=1,n.connect=function(o,d,p,g){Ve(0),this.W=o,this.H=d||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=Lc(this,null,this.W),Gi(this)};function Fo(o){if(Cc(o),o.G==3){var d=o.U++,p=vt(o.I);if(ie(p,"SID",o.K),ie(p,"RID",d),ie(p,"TYPE","terminate"),$r(o,p),d=new xt(o,o.j,d),d.L=2,d.v=Bi(vt(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=d.v,p=!0),p||(d.g=Fc(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Li(d)}Mc(o)}function Hi(o){o.g&&(Bo(o),o.g.cancel(),o.g=null)}function Cc(o){Hi(o),o.u&&(c.clearTimeout(o.u),o.u=null),zi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Gi(o){if(!lc(o.h)&&!o.s){o.s=!0;var d=o.Ga;rn||ki(),sn||(rn(),sn=!0),Nn.add(d,o),o.B=0}}function d_(o,d){return hc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=d.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Or(h(o.Ga,o,d),xc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new xt(this,this.j,o);let D=this.o;if(this.S&&(D?(D=w(D),A(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Dc(this,P,d),p=vt(this.I),ie(p,"RID",o),ie(p,"CVER",22),this.D&&ie(p,"X-HTTP-Session-Id",this.D),$r(this,p),D&&(this.O?d="headers="+encodeURIComponent(String(Ec(D)))+"&"+d:this.m&&Lo(p,this.m,D)),Mo(this.h,P),this.Ua&&ie(p,"TYPE","init"),this.P?(ie(p,"$req",d),ie(p,"SID","null"),P.T=!0,Vo(P,p,null)):Vo(P,p,d),this.G=2}}else this.G==3&&(o?kc(this,o):this.i.length==0||lc(this.h)||kc(this))};function kc(o,d){var p;d?p=d.l:p=o.U++;const g=vt(o.I);ie(g,"SID",o.K),ie(g,"RID",p),ie(g,"AID",o.T),$r(o,g),o.m&&o.o&&Lo(g,o.m,o.o),p=new xt(o,o.j,p,o.B+1),o.m===null&&(p.H=o.o),d&&(o.i=d.D.concat(o.i)),d=Dc(o,p,1e3),p.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Mo(o.h,p),Vo(p,g,d)}function $r(o,d){o.H&&B(o.H,function(p,g){ie(d,g,p)}),o.l&&pc({},function(p,g){ie(d,g,p)})}function Dc(o,d,p){p=Math.min(o.i.length,p);var g=o.l?h(o.l.Na,o.l,o):null;e:{var P=o.i;let D=-1;for(;;){const x=["count="+p];D==-1?0<p?(D=P[0].g,x.push("ofs="+D)):D=0:x.push("ofs="+D);let te=!0;for(let ye=0;ye<p;ye++){let Z=P[ye].g;const Ie=P[ye].map;if(Z-=D,0>Z)D=Math.max(0,P[ye].g-100),te=!1;else try{u_(Ie,x,"req"+Z+"_")}catch{g&&g(Ie)}}if(te){g=x.join("&");break e}}}return o=o.i.splice(0,p),d.D=o,g}function Vc(o){if(!o.g&&!o.u){o.Y=1;var d=o.Fa;rn||ki(),sn||(rn(),sn=!0),Nn.add(d,o),o.v=0}}function Uo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Or(h(o.Fa,o),xc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Nc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Or(h(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ve(10),Hi(this),Nc(this))};function Bo(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Nc(o){o.g=new xt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var d=vt(o.qa);ie(d,"RID","rpc"),ie(d,"SID",o.K),ie(d,"AID",o.T),ie(d,"CI",o.F?"0":"1"),!o.F&&o.ja&&ie(d,"TO",o.ja),ie(d,"TYPE","xmlhttp"),$r(o,d),o.m&&o.o&&Lo(d,o.m,o.o),o.L&&(o.g.I=o.L);var p=o.g;o=o.ia,p.L=1,p.v=Bi(vt(d)),p.m=null,p.P=!0,oc(p,o)}n.Za=function(){this.C!=null&&(this.C=null,Hi(this),Uo(this),Ve(19))};function zi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Oc(o,d){var p=null;if(o.g==d){zi(o),Bo(o),o.g=null;var g=2}else if(xo(o.h,d))p=d.D,dc(o.h,d),g=1;else return;if(o.G!=0){if(d.o)if(g==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var P=o.B;g=Oi(),De(g,new nc(g,p)),Gi(o)}else Vc(o);else if(P=d.s,P==3||P==0&&0<d.X||!(g==1&&d_(o,d)||g==2&&Uo(o)))switch(p&&0<p.length&&(d=o.h,d.i=d.i.concat(p)),P){case 1:cn(o,5);break;case 4:cn(o,10);break;case 3:cn(o,6);break;default:cn(o,2)}}}function xc(o,d){let p=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(p*=2),p*d}function cn(o,d){if(o.j.info("Error code "+d),d==2){var p=h(o.fb,o),g=o.Xa;const P=!g;g=new un(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Fi(g,"https"),Bi(g),P?s_(g.toString(),p):o_(g.toString(),p)}else Ve(2);o.G=0,o.l&&o.l.sa(d),Mc(o),Cc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ve(2)):(this.j.info("Failed to ping google.com"),Ve(1))};function Mc(o){if(o.G=0,o.ka=[],o.l){const d=fc(o.h);(d.length!=0||o.i.length!=0)&&(v(o.ka,d),v(o.ka,o.i),o.h.i.length=0,I(o.i),o.i.length=0),o.l.ra()}}function Lc(o,d,p){var g=p instanceof un?vt(p):new un(p);if(g.g!="")d&&(g.g=d+"."+g.g),Ui(g,g.s);else{var P=c.location;g=P.protocol,d=d?d+"."+P.hostname:P.hostname,P=+P.port;var D=new un(null);g&&Fi(D,g),d&&(D.g=d),P&&Ui(D,P),p&&(D.l=p),g=D}return p=o.D,d=o.ya,p&&d&&ie(g,p,d),ie(g,"VER",o.la),$r(o,g),g}function Fc(o,d,p){if(d&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=o.Ca&&!o.pa?new ue(new qi({eb:p})):new ue(o.pa),d.Ha(o.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uc(){}n=Uc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Wi(){}Wi.prototype.g=function(o,d){return new Be(o,d)};function Be(o,d){Ee.call(this),this.g=new Pc(d),this.l=o,this.h=d&&d.messageUrlParams||null,o=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(o?o["X-WebChannel-Content-Type"]=d.messageContentType:o={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(o?o["X-WebChannel-Client-Profile"]=d.va:o={"X-WebChannel-Client-Profile":d.va}),this.g.S=o,(o=d&&d.Sb)&&!k(o)&&(this.g.m=o),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!k(d)&&(this.g.D=d,o=this.h,o!==null&&d in o&&(o=this.h,d in o&&delete o[d])),this.j=new Ln(this)}y(Be,Ee),Be.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Be.prototype.close=function(){Fo(this.g)},Be.prototype.o=function(o){var d=this.g;if(typeof o=="string"){var p={};p.__data__=o,o=p}else this.u&&(p={},p.__data__=Ro(o),o=p);d.i.push(new Qp(d.Ya++,o)),d.G==3&&Gi(d)},Be.prototype.N=function(){this.g.l=null,delete this.j,Fo(this.g),delete this.g,Be.aa.N.call(this)};function Bc(o){Po.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var d=o.__sm__;if(d){e:{for(const p in d){o=p;break e}o=void 0}(this.i=o)&&(o=this.i,d=d!==null&&o in d?d[o]:void 0),this.data=d}else this.data=o}y(Bc,Po);function qc(){Co.call(this),this.status=1}y(qc,Co);function Ln(o){this.g=o}y(Ln,Uc),Ln.prototype.ua=function(){De(this.g,"a")},Ln.prototype.ta=function(o){De(this.g,new Bc(o))},Ln.prototype.sa=function(o){De(this.g,new qc)},Ln.prototype.ra=function(){De(this.g,"b")},Wi.prototype.createWebChannel=Wi.prototype.g,Be.prototype.send=Be.prototype.o,Be.prototype.open=Be.prototype.m,Be.prototype.close=Be.prototype.close,Ed=function(){return new Wi},Td=function(){return Oi()},wd=on,Ta={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xi.NO_ERROR=0,xi.TIMEOUT=8,xi.HTTP_ERROR=6,cs=xi,rc.COMPLETE="complete",vd=rc,Ju.EventType=Vr,Vr.OPEN="a",Vr.CLOSE="b",Vr.ERROR="c",Vr.MESSAGE="d",Ee.prototype.listen=Ee.prototype.K,Gr=Ju,ue.prototype.listenOnce=ue.prototype.L,ue.prototype.getLastError=ue.prototype.Ka,ue.prototype.getLastErrorCode=ue.prototype.Ba,ue.prototype.getStatus=ue.prototype.Z,ue.prototype.getResponseJson=ue.prototype.Oa,ue.prototype.getResponseText=ue.prototype.oa,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Ha,yd=ue}).apply(typeof Ji<"u"?Ji:typeof self<"u"?self:typeof window<"u"?window:{});const cl="@firebase/firestore";/**
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
 */let wr="11.0.2";/**
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
 */const wn=new eo("@firebase/firestore");function jn(){return wn.logLevel}function F(n,...e){if(wn.logLevel<=K.DEBUG){const t=e.map(eu);wn.debug(`Firestore (${wr}): ${n}`,...t)}}function kt(n,...e){if(wn.logLevel<=K.ERROR){const t=e.map(eu);wn.error(`Firestore (${wr}): ${n}`,...t)}}function rr(n,...e){if(wn.logLevel<=K.WARN){const t=e.map(eu);wn.warn(`Firestore (${wr}): ${n}`,...t)}}function eu(n){if(typeof n=="string")return n;try{/**
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
 */function $(n="Unexpected state"){const e=`FIRESTORE (${wr}) INTERNAL ASSERTION FAILED: `+n;throw kt(e),new Error(e)}function ee(n,e){n||$()}function G(n,e){return n}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends ot{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class St{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Id{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Pe.UNAUTHENTICATED))}shutdown(){}}class vy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class wy{constructor(e){this.t=e,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ee(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new St;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new St,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new St)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ee(typeof r.accessToken=="string"),new Id(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string"),new Pe(e)}}class Ty{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Ey{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Ty(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Iy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ay{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ee(this.o===void 0);const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ee(typeof t.token=="string"),this.R=t.token,new Iy(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class Ad{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=by(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function X(n,e){return n<e?-1:n>e?1:0}function ir(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new fe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new U(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class z{static fromTimestamp(e){return new z(e)}static min(){return new z(new fe(0,0))}static max(){return new z(new fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ui{constructor(e,t,r){t===void 0?t=0:t>e.length&&$(),r===void 0?r=e.length-t:r>e.length-t&&$(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ui.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ui?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class se extends ui{construct(e,t,r){return new se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new se(t)}static emptyPath(){return new se([])}}const Ry=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class we extends ui{construct(e,t,r){return new we(e,t,r)}static isValidIdentifier(e){return Ry.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),we.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new we(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new U(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new U(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new U(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new we(t)}static emptyPath(){return new we([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(se.fromString(e))}static fromName(e){return new j(se.fromString(e).popFirst(5))}static empty(){return new j(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new se(e.slice()))}}function Sy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new fe(t+1,0):new fe(t,r));return new Jt(i,j.empty(),e)}function Py(n){return new Jt(n.readTime,n.key,-1)}class Jt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Jt(z.min(),j.empty(),-1)}static max(){return new Jt(z.max(),j.empty(),-1)}}function Cy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(n.documentKey,e.documentKey),t!==0?t:X(n.largestBatchId,e.largestBatchId))}/**
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
 */async function Tr(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==ky)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,r)=>{t(e)})}static reject(e){return new N((t,r)=>{r(e)})}static waitFor(e){return new N((t,r)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&t()},l=>r(l))}),a=!0,s===i&&t()})}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next(i=>i?N.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new N((r,i)=>{const s=e.length,a=new Array(s);let c=0;for(let l=0;l<s;l++){const f=l;t(e[f]).next(m=>{a[f]=m,++c,c===s&&r(a)},m=>i(m))}})}static doWhile(e,t){return new N((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function Vy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Er(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class to{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}to.oe=-1;function no(n){return n==null}function Ss(n){return n===0&&1/n==-1/0}function Ny(n){return typeof n=="number"&&Number.isInteger(n)&&!Ss(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Oy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ll(e)),e=xy(n.get(t),e);return ll(e)}function xy(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function ll(n){return n+""}/**
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
 */function hl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Pn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function My(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function bd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ae{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zi(this.root,e,this.comparator,!0)}}class Zi{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??ve.RED,this.left=i??ve.EMPTY,this.right=s??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new ve(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ve.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(e,t,r,i,s){return this}insert(e,t,r){return new ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pe{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new dl(this.data.getIterator())}getIteratorFrom(e){return new dl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pe(this.comparator);return t.data=e,t}}class dl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class et{constructor(e){this.fields=e,e.sort(we.comparator)}static empty(){return new et([])}unionWith(e){let t=new pe(we.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new et(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ir(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Rd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Rd("Invalid base64 string: "+s):s}}(e);return new Te(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const Ly=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zt(n){if(ee(!!n),typeof n=="string"){let e=0;const t=Ly.exec(n);if(ee(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ce(n.seconds),nanos:ce(n.nanos)}}function ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function en(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
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
 */function tu(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ro(n){const e=n.mapValue.fields.__previous_value__;return tu(e)?ro(e):e}function ci(n){const e=Zt(n.mapValue.fields.__local_write_time__.timestampValue);return new fe(e.seconds,e.nanos)}/**
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
 */class Fy{constructor(e,t,r,i,s,a,c,l,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=f}}class li{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new li("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof li&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const es={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function tn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?tu(n)?4:By(n)?9007199254740991:Uy(n)?10:11:$()}function _t(n,e){if(n===e)return!0;const t=tn(n);if(t!==tn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ci(n).isEqual(ci(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Zt(i.timestampValue),c=Zt(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return en(i.bytesValue).isEqual(en(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ce(i.geoPointValue.latitude)===ce(s.geoPointValue.latitude)&&ce(i.geoPointValue.longitude)===ce(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ce(i.integerValue)===ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ce(i.doubleValue),c=ce(s.doubleValue);return a===c?Ss(a)===Ss(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return ir(n.arrayValue.values||[],e.arrayValue.values||[],_t);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(hl(a)!==hl(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!_t(a[l],c[l])))return!1;return!0}(n,e);default:return $()}}function hi(n,e){return(n.values||[]).find(t=>_t(t,e))!==void 0}function sr(n,e){if(n===e)return 0;const t=tn(n),r=tn(e);if(t!==r)return X(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,e.booleanValue);case 2:return function(s,a){const c=ce(s.integerValue||s.doubleValue),l=ce(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return fl(n.timestampValue,e.timestampValue);case 4:return fl(ci(n),ci(e));case 5:return X(n.stringValue,e.stringValue);case 6:return function(s,a){const c=en(s),l=en(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const c=s.split("/"),l=a.split("/");for(let f=0;f<c.length&&f<l.length;f++){const m=X(c[f],l[f]);if(m!==0)return m}return X(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const c=X(ce(s.latitude),ce(a.latitude));return c!==0?c:X(ce(s.longitude),ce(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return pl(n.arrayValue,e.arrayValue);case 10:return function(s,a){var c,l,f,m;const u=s.fields||{},h=a.fields||{},_=(c=u.value)===null||c===void 0?void 0:c.arrayValue,y=(l=h.value)===null||l===void 0?void 0:l.arrayValue,I=X(((f=_==null?void 0:_.values)===null||f===void 0?void 0:f.length)||0,((m=y==null?void 0:y.values)===null||m===void 0?void 0:m.length)||0);return I!==0?I:pl(_,y)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===es.mapValue&&a===es.mapValue)return 0;if(s===es.mapValue)return 1;if(a===es.mapValue)return-1;const c=s.fields||{},l=Object.keys(c),f=a.fields||{},m=Object.keys(f);l.sort(),m.sort();for(let u=0;u<l.length&&u<m.length;++u){const h=X(l[u],m[u]);if(h!==0)return h;const _=sr(c[l[u]],f[m[u]]);if(_!==0)return _}return X(l.length,m.length)}(n.mapValue,e.mapValue);default:throw $()}}function fl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return X(n,e);const t=Zt(n),r=Zt(e),i=X(t.seconds,r.seconds);return i!==0?i:X(t.nanos,r.nanos)}function pl(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=sr(t[i],r[i]);if(s)return s}return X(t.length,r.length)}function or(n){return Ea(n)}function Ea(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Zt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return en(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return j.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Ea(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Ea(t.fields[a])}`;return i+"}"}(n.mapValue):$()}function ls(n){switch(tn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ro(n);return e?16+ls(e):16;case 5:return 2*n.stringValue.length;case 6:return en(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ls(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Pn(r.fields,(s,a)=>{i+=s.length+ls(a)}),i}(n.mapValue);default:throw $()}}function _l(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ia(n){return!!n&&"integerValue"in n}function nu(n){return!!n&&"arrayValue"in n}function ml(n){return!!n&&"nullValue"in n}function gl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function hs(n){return!!n&&"mapValue"in n}function Uy(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Qr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Pn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Qr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Qr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function By(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ze{constructor(e){this.value=e}static empty(){return new ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!hs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qr(t)}setAll(e){let t=we.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=Qr(a):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());hs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return _t(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];hs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Pn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ze(Qr(this.value))}}function Sd(n){const e=[];return Pn(n.fields,(t,r)=>{const i=new we([t]);if(hs(r)){const s=Sd(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new et(e)}/**
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
 */class Ce{constructor(e,t,r,i,s,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ce(e,0,z.min(),z.min(),z.min(),ze.empty(),0)}static newFoundDocument(e,t,r,i){return new Ce(e,1,t,z.min(),r,i,0)}static newNoDocument(e,t){return new Ce(e,2,t,z.min(),z.min(),ze.empty(),0)}static newUnknownDocument(e,t){return new Ce(e,3,t,z.min(),z.min(),ze.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ps{constructor(e,t){this.position=e,this.inclusive=t}}function yl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(a.referenceValue),t.key):r=sr(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function vl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!_t(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Cs{constructor(e,t="asc"){this.field=e,this.dir=t}}function qy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Pd{}class de extends Pd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new $y(e,t,r):t==="array-contains"?new zy(e,r):t==="in"?new Wy(e,r):t==="not-in"?new Ky(e,r):t==="array-contains-any"?new Qy(e,r):new de(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Hy(e,r):new Gy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(sr(t,this.value)):t!==null&&tn(this.value)===tn(t)&&this.matchesComparison(sr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class it extends Pd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new it(e,t)}matches(e){return Cd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Cd(n){return n.op==="and"}function kd(n){return jy(n)&&Cd(n)}function jy(n){for(const e of n.filters)if(e instanceof it)return!1;return!0}function Aa(n){if(n instanceof de)return n.field.canonicalString()+n.op.toString()+or(n.value);if(kd(n))return n.filters.map(e=>Aa(e)).join(",");{const e=n.filters.map(t=>Aa(t)).join(",");return`${n.op}(${e})`}}function Dd(n,e){return n instanceof de?function(r,i){return i instanceof de&&r.op===i.op&&r.field.isEqual(i.field)&&_t(r.value,i.value)}(n,e):n instanceof it?function(r,i){return i instanceof it&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&Dd(a,i.filters[c]),!0):!1}(n,e):void $()}function Vd(n){return n instanceof de?function(t){return`${t.field.canonicalString()} ${t.op} ${or(t.value)}`}(n):n instanceof it?function(t){return t.op.toString()+" {"+t.getFilters().map(Vd).join(" ,")+"}"}(n):"Filter"}class $y extends de{constructor(e,t,r){super(e,t,r),this.key=j.fromName(r.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class Hy extends de{constructor(e,t){super(e,"in",t),this.keys=Nd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Gy extends de{constructor(e,t){super(e,"not-in",t),this.keys=Nd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Nd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>j.fromName(r.referenceValue))}class zy extends de{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return nu(t)&&hi(t.arrayValue,this.value)}}class Wy extends de{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&hi(this.value.arrayValue,t)}}class Ky extends de{constructor(e,t){super(e,"not-in",t)}matches(e){if(hi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!hi(this.value.arrayValue,t)}}class Qy extends de{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!nu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>hi(this.value.arrayValue,r))}}/**
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
 */class Xy{constructor(e,t=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.ue=null}}function wl(n,e=null,t=[],r=[],i=null,s=null,a=null){return new Xy(n,e,t,r,i,s,a)}function ru(n){const e=G(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Aa(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),no(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>or(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>or(r)).join(",")),e.ue=t}return e.ue}function iu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!qy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Dd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!vl(n.startAt,e.startAt)&&vl(n.endAt,e.endAt)}function ba(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ti{constructor(e,t=null,r=[],i=[],s=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Yy(n,e,t,r,i,s,a,c){return new Ti(n,e,t,r,i,s,a,c)}function Od(n){return new Ti(n)}function Tl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xd(n){return n.collectionGroup!==null}function Xr(n){const e=G(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new pe(we.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Cs(s,r))}),t.has(we.keyField().canonicalString())||e.ce.push(new Cs(we.keyField(),r))}return e.ce}function lt(n){const e=G(n);return e.le||(e.le=Md(e,Xr(n))),e.le}function Jy(n){const e=G(n);return e.he||(e.he=Md(e,n.explicitOrderBy)),e.he}function Md(n,e){if(n.limitType==="F")return wl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Cs(i.field,s)});const t=n.endAt?new Ps(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ps(n.startAt.position,n.startAt.inclusive):null;return wl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ra(n,e){const t=n.filters.concat([e]);return new Ti(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Sa(n,e,t){return new Ti(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function io(n,e){return iu(lt(n),lt(e))&&n.limitType===e.limitType}function Ld(n){return`${ru(lt(n))}|lt:${n.limitType}`}function $n(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Vd(i)).join(", ")}]`),no(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>or(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>or(i)).join(",")),`Target(${r})`}(lt(n))}; limitType=${n.limitType})`}function so(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):j.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Xr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,l){const f=yl(a,c,l);return a.inclusive?f<=0:f<0}(r.startAt,Xr(r),i)||r.endAt&&!function(a,c,l){const f=yl(a,c,l);return a.inclusive?f>=0:f>0}(r.endAt,Xr(r),i))}(n,e)}function Zy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Fd(n){return(e,t)=>{let r=!1;for(const i of Xr(n)){const s=ev(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ev(n,e,t){const r=n.field.isKeyField()?j.comparator(e.key,t.key):function(s,a,c){const l=a.data.field(s),f=c.data.field(s);return l!==null&&f!==null?sr(l,f):$()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
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
 */class Cn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Pn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return bd(this.inner)}size(){return this.innerSize}}/**
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
 */const tv=new ae(j.comparator);function Dt(){return tv}const Ud=new ae(j.comparator);function zr(...n){let e=Ud;for(const t of n)e=e.insert(t.key,t);return e}function Bd(n){let e=Ud;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function pn(){return Yr()}function qd(){return Yr()}function Yr(){return new Cn(n=>n.toString(),(n,e)=>n.isEqual(e))}const nv=new ae(j.comparator),rv=new pe(j.comparator);function Q(...n){let e=rv;for(const t of n)e=e.add(t);return e}const iv=new pe(X);function sv(){return iv}/**
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
 */function su(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ss(e)?"-0":e}}function jd(n){return{integerValue:""+n}}function ov(n,e){return Ny(e)?jd(e):su(n,e)}/**
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
 */class oo{constructor(){this._=void 0}}function av(n,e,t){return n instanceof ks?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&tu(s)&&(s=ro(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof di?Hd(n,e):n instanceof fi?Gd(n,e):function(i,s){const a=$d(i,s),c=El(a)+El(i.Pe);return Ia(a)&&Ia(i.Pe)?jd(c):su(i.serializer,c)}(n,e)}function uv(n,e,t){return n instanceof di?Hd(n,e):n instanceof fi?Gd(n,e):t}function $d(n,e){return n instanceof Ds?function(r){return Ia(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ks extends oo{}class di extends oo{constructor(e){super(),this.elements=e}}function Hd(n,e){const t=zd(e);for(const r of n.elements)t.some(i=>_t(i,r))||t.push(r);return{arrayValue:{values:t}}}class fi extends oo{constructor(e){super(),this.elements=e}}function Gd(n,e){let t=zd(e);for(const r of n.elements)t=t.filter(i=>!_t(i,r));return{arrayValue:{values:t}}}class Ds extends oo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function El(n){return ce(n.integerValue||n.doubleValue)}function zd(n){return nu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function cv(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof di&&i instanceof di||r instanceof fi&&i instanceof fi?ir(r.elements,i.elements,_t):r instanceof Ds&&i instanceof Ds?_t(r.Pe,i.Pe):r instanceof ks&&i instanceof ks}(n.transform,e.transform)}class lv{constructor(e,t){this.version=e,this.transformResults=t}}class Pt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Pt}static exists(e){return new Pt(void 0,e)}static updateTime(e){return new Pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ds(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ao{}function Wd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Qd(n.key,Pt.none()):new Ei(n.key,n.data,Pt.none());{const t=n.data,r=ze.empty();let i=new pe(we.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new kn(n.key,r,new et(i.toArray()),Pt.none())}}function hv(n,e,t){n instanceof Ei?function(i,s,a){const c=i.value.clone(),l=Al(i.fieldTransforms,s,a.transformResults);c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof kn?function(i,s,a){if(!ds(i.precondition,s))return void s.convertToUnknownDocument(a.version);const c=Al(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(Kd(i)),l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Jr(n,e,t,r){return n instanceof Ei?function(s,a,c,l){if(!ds(s.precondition,a))return c;const f=s.value.clone(),m=bl(s.fieldTransforms,l,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof kn?function(s,a,c,l){if(!ds(s.precondition,a))return c;const f=bl(s.fieldTransforms,l,a),m=a.data;return m.setAll(Kd(s)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(n,e,t,r):function(s,a,c){return ds(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function dv(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=$d(r.transform,i||null);s!=null&&(t===null&&(t=ze.empty()),t.set(r.field,s))}return t||null}function Il(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ir(r,i,(s,a)=>cv(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ei extends ao{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class kn extends ao{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Kd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Al(n,e,t){const r=new Map;ee(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,uv(a,c,t[i]))}return r}function bl(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,av(s,a,e))}return r}class Qd extends ao{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fv extends ao{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pv{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&hv(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Jr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Jr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=qd();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;const l=Wd(a,c);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Q())}isEqual(e){return this.batchId===e.batchId&&ir(this.mutations,e.mutations,(t,r)=>Il(t,r))&&ir(this.baseMutations,e.baseMutations,(t,r)=>Il(t,r))}}class ou{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ee(e.mutations.length===r.length);let i=function(){return nv}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new ou(e,t,r,i)}}/**
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
 */var le,Y;function yv(n){switch(n){default:return $();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function Xd(n){if(n===void 0)return kt("GRPC error has no .code"),O.UNKNOWN;switch(n){case le.OK:return O.OK;case le.CANCELLED:return O.CANCELLED;case le.UNKNOWN:return O.UNKNOWN;case le.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case le.INTERNAL:return O.INTERNAL;case le.UNAVAILABLE:return O.UNAVAILABLE;case le.UNAUTHENTICATED:return O.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case le.NOT_FOUND:return O.NOT_FOUND;case le.ALREADY_EXISTS:return O.ALREADY_EXISTS;case le.PERMISSION_DENIED:return O.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case le.ABORTED:return O.ABORTED;case le.OUT_OF_RANGE:return O.OUT_OF_RANGE;case le.UNIMPLEMENTED:return O.UNIMPLEMENTED;case le.DATA_LOSS:return O.DATA_LOSS;default:return $()}}(Y=le||(le={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const wv=new yn([4294967295,4294967295],0);function Rl(n){const e=vv().encode(n),t=new gd;return t.update(e),new Uint8Array(t.digest())}function Sl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new yn([t,r],0),new yn([i,s],0)]}class au{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Wr(`Invalid padding: ${t}`);if(r<0)throw new Wr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Wr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Wr(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=yn.fromNumber(this.Te)}Ee(e,t,r){let i=e.add(t.multiply(yn.fromNumber(r)));return i.compare(wv)===1&&(i=new yn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Rl(e),[r,i]=Sl(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new au(s,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Te===0)return;const t=Rl(e),[r,i]=Sl(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Wr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class uo{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Ii.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new uo(z.min(),i,new ae(X),Dt(),Q())}}class Ii{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ii(r,t,Q(),Q(),Q())}}/**
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
 */class fs{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class Yd{constructor(e,t){this.targetId=e,this.me=t}}class Jd{constructor(e,t,r=Te.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Pl{constructor(){this.fe=0,this.ge=Cl(),this.pe=Te.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Q(),t=Q(),r=Q();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:$()}}),new Ii(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Cl()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ee(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Tv{constructor(e){this.Le=e,this.Be=new Map,this.ke=Dt(),this.qe=ts(),this.Qe=ts(),this.Ke=new ae(X)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:$()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.je(i)&&t(i)})}Je(e){const t=e.targetId,r=e.me.count,i=this.Ye(t);if(i){const s=i.target;if(ba(s))if(r===0){const a=new j(s.path);this.We(t,a,Ce.newNoDocument(a,z.min()))}else ee(r===1);else{const a=this.Ze(t);if(a!==r){const c=this.Xe(e),l=c?this.et(c,e,a):1;if(l!==0){this.He(t);const f=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,f)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,c;try{a=en(r).toUint8Array()}catch(l){if(l instanceof Rd)return rr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new au(a,i,s)}catch(l){return rr(l instanceof Wr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Te===0?null:c}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.nt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.We(t,s,null),i++)}),i}it(e){const t=new Map;this.Be.forEach((s,a)=>{const c=this.Ye(a);if(c){if(s.current&&ba(c.target)){const l=new j(c.target.path);this.st(l).has(a)||this.ot(a,l)||this.We(a,l,Ce.newNoDocument(l,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=Q();this.Qe.forEach((s,a)=>{let c=!0;a.forEachWhile(l=>{const f=this.Ye(l);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new uo(e,t,this.Ke,this.ke,r);return this.ke=Dt(),this.qe=ts(),this.Qe=ts(),this.Ke=new ae(X),i}Ue(e,t){if(!this.je(e))return;const r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const i=this.ze(e);this.ot(e,t)?i.Fe(t,1):i.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Pl,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new pe(X),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new pe(X),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Pl),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function ts(){return new ae(j.comparator)}function Cl(){return new ae(j.comparator)}const Ev={asc:"ASCENDING",desc:"DESCENDING"},Iv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Av={and:"AND",or:"OR"};class bv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Pa(n,e){return n.useProto3Json||no(e)?e:{value:e}}function Vs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Rv(n,e){return Vs(n,e.toTimestamp())}function ht(n){return ee(!!n),z.fromTimestamp(function(t){const r=Zt(t);return new fe(r.seconds,r.nanos)}(n))}function uu(n,e){return Ca(n,e).canonicalString()}function Ca(n,e){const t=function(i){return new se(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ef(n){const e=se.fromString(n);return ee(af(e)),e}function ka(n,e){return uu(n.databaseId,e.path)}function Qo(n,e){const t=ef(e);if(t.get(1)!==n.databaseId.projectId)throw new U(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new U(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new j(nf(t))}function tf(n,e){return uu(n.databaseId,e)}function Sv(n){const e=ef(n);return e.length===4?se.emptyPath():nf(e)}function Da(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function nf(n){return ee(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function kl(n,e,t){return{name:ka(n,e),fields:t.value.mapValue.fields}}function Pv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(f,m){return f.useProto3Json?(ee(m===void 0||typeof m=="string"),Te.fromBase64String(m||"")):(ee(m===void 0||m instanceof Buffer||m instanceof Uint8Array),Te.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(f){const m=f.code===void 0?O.UNKNOWN:Xd(f.code);return new U(m,f.message||"")}(a);t=new Jd(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Qo(n,r.document.name),s=ht(r.document.updateTime),a=r.document.createTime?ht(r.document.createTime):z.min(),c=new ze({mapValue:{fields:r.document.fields}}),l=Ce.newFoundDocument(i,s,a,c),f=r.targetIds||[],m=r.removedTargetIds||[];t=new fs(f,m,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Qo(n,r.document),s=r.readTime?ht(r.readTime):z.min(),a=Ce.newNoDocument(i,s),c=r.removedTargetIds||[];t=new fs([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Qo(n,r.document),s=r.removedTargetIds||[];t=new fs([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new gv(i,s),c=r.targetId;t=new Yd(c,a)}}return t}function Cv(n,e){let t;if(e instanceof Ei)t={update:kl(n,e.key,e.value)};else if(e instanceof Qd)t={delete:ka(n,e.key)};else if(e instanceof kn)t={update:kl(n,e.key,e.data),updateMask:Fv(e.fieldMask)};else{if(!(e instanceof fv))return $();t={verify:ka(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const c=a.transform;if(c instanceof ks)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof di)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof fi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ds)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw $()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Rv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:$()}(n,e.precondition)),t}function kv(n,e){return n&&n.length>0?(ee(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?ht(i.updateTime):ht(s);return a.isEqual(z.min())&&(a=ht(s)),new lv(a,i.transformResults||[])}(t,e))):[]}function Dv(n,e){return{documents:[tf(n,e.path)]}}function rf(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=tf(n,i);const s=function(f){if(f.length!==0)return of(it.create(f,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(f){if(f.length!==0)return f.map(m=>function(h){return{field:Bt(h.field),direction:xv(h.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Pa(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{ct:t,parent:i}}function Vv(n,e,t,r){const{ct:i,parent:s}=rf(n,e),a={},c=[];let l=0;return t.forEach(f=>{const m="aggregate_"+l++;a[m]=f.alias,f.aggregateType==="count"?c.push({alias:m,count:{}}):f.aggregateType==="avg"?c.push({alias:m,avg:{field:Bt(f.fieldPath)}}):f.aggregateType==="sum"&&c.push({alias:m,sum:{field:Bt(f.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:c,structuredQuery:i.structuredQuery},parent:i.parent},lt:a,parent:s}}function Nv(n){let e=Sv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ee(r===1);const m=t.from[0];m.allDescendants?i=m.collectionId:e=e.child(m.collectionId)}let s=[];t.where&&(s=function(u){const h=sf(u);return h instanceof it&&kd(h)?h.getFilters():[h]}(t.where));let a=[];t.orderBy&&(a=function(u){return u.map(h=>function(y){return new Cs(Hn(y.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(h))}(t.orderBy));let c=null;t.limit&&(c=function(u){let h;return h=typeof u=="object"?u.value:u,no(h)?null:h}(t.limit));let l=null;t.startAt&&(l=function(u){const h=!!u.before,_=u.values||[];return new Ps(_,h)}(t.startAt));let f=null;return t.endAt&&(f=function(u){const h=!u.before,_=u.values||[];return new Ps(_,h)}(t.endAt)),Yy(e,i,a,s,c,"F",l,f)}function Ov(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function sf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Hn(t.unaryFilter.field);return de.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Hn(t.unaryFilter.field);return de.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Hn(t.unaryFilter.field);return de.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Hn(t.unaryFilter.field);return de.create(a,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(n):n.fieldFilter!==void 0?function(t){return de.create(Hn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return it.create(t.compositeFilter.filters.map(r=>sf(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return $()}}(t.compositeFilter.op))}(n):$()}function xv(n){return Ev[n]}function Mv(n){return Iv[n]}function Lv(n){return Av[n]}function Bt(n){return{fieldPath:n.canonicalString()}}function Hn(n){return we.fromServerFormat(n.fieldPath)}function of(n){return n instanceof de?function(t){if(t.op==="=="){if(gl(t.value))return{unaryFilter:{field:Bt(t.field),op:"IS_NAN"}};if(ml(t.value))return{unaryFilter:{field:Bt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(gl(t.value))return{unaryFilter:{field:Bt(t.field),op:"IS_NOT_NAN"}};if(ml(t.value))return{unaryFilter:{field:Bt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bt(t.field),op:Mv(t.op),value:t.value}}}(n):n instanceof it?function(t){const r=t.getFilters().map(i=>of(i));return r.length===1?r[0]:{compositeFilter:{op:Lv(t.op),filters:r}}}(n):$()}function Fv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function af(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ht{constructor(e,t,r,i,s=z.min(),a=z.min(),c=Te.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Ht(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Uv{constructor(e){this.ht=e}}function Bv(n){const e=Nv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Sa(e,e.limit,"L"):e}/**
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
 */class qv{constructor(){this.ln=new jv}addToCollectionParentIndex(e,t){return this.ln.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(Jt.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(Jt.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class jv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new pe(se.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pe(se.comparator)).toArray()}}/**
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
 */const Dl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Oe{static withCacheSize(e){return new Oe(e,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */class ar{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new ar(0)}static Qn(){return new ar(-1)}}/**
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
 */function Vl([n,e],[t,r]){const i=X(n,t);return i===0?X(e,r):i}class $v{constructor(e){this.Gn=e,this.buffer=new pe(Vl),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Vl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Hv{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){F("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Er(t)?F("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Tr(t)}await this.Yn(3e5)})}}class Gv{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return N.resolve(to.oe);const r=new $v(t);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Dl)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Dl):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,i,s,a,c,l,f;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(u=>(u>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${u}`),i=this.params.maximumSequenceNumbersToCollect):i=u,a=Date.now(),this.nthSequenceNumber(e,i))).next(u=>(r=u,c=Date.now(),this.removeTargets(e,r,t))).next(u=>(s=u,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(u=>(f=Date.now(),jn()<=K.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
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
 */class Wv{constructor(){this.changes=new Cn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Qv{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Jr(r.mutation,i,et.empty(),fe.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Q()){const i=pn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=zr();return s.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=pn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Q()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let s=Dt();const a=Yr(),c=function(){return Yr()}();return t.forEach((l,f)=>{const m=r.get(f.key);i.has(f.key)&&(m===void 0||m.mutation instanceof kn)?s=s.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),Jr(m.mutation,f,m.mutation.getFieldMask(),fe.now())):a.set(f.key,et.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((f,m)=>a.set(f,m)),t.forEach((f,m)=>{var u;return c.set(f,new Kv(m,(u=a.get(f))!==null&&u!==void 0?u:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Yr();let i=new ae((a,c)=>a-c),s=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const f=t.get(l);if(f===null)return;let m=r.get(l)||et.empty();m=c.applyToLocalView(f,m),r.set(l,m);const u=(i.get(c.batchId)||Q()).add(l);i=i.insert(c.batchId,u)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),f=l.key,m=l.value,u=qd();m.forEach(h=>{if(!s.has(h)){const _=Wd(t.get(h),r.get(h));_!==null&&u.set(h,_),s=s.add(h)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,u))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return j.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):N.resolve(pn());let c=-1,l=s;return a.next(f=>N.forEach(f,(m,u)=>(c<u.largestBatchId&&(c=u.largestBatchId),s.get(m)?N.resolve():this.remoteDocumentCache.getEntry(e,m).next(h=>{l=l.insert(m,h)}))).next(()=>this.populateOverlays(e,f,s)).next(()=>this.computeViews(e,l,f,Q())).next(m=>({batchId:c,changes:Bd(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next(r=>{let i=zr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=zr();return this.indexManager.getCollectionParents(e,s).next(c=>N.forEach(c,l=>{const f=function(u,h){return new Ti(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,f,r,i).next(m=>{m.forEach((u,h)=>{a=a.insert(u,h)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((l,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,Ce.newInvalidDocument(m)))});let c=zr();return a.forEach((l,f)=>{const m=s.get(l);m!==void 0&&Jr(m.mutation,f,et.empty(),fe.now()),so(t,f)&&(c=c.insert(l,f))}),c})}}/**
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
 */class Xv{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return N.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ht(i.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(i){return{name:i.name,query:Bv(i.bundledQuery),readTime:ht(i.readTime)}}(t)),N.resolve()}}/**
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
 */class Yv{constructor(){this.overlays=new ae(j.comparator),this.Er=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=pn();return N.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Tt(e,t,s)}),N.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const i=pn(),s=t.length+1,a=new j(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,f=l.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return N.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ae((f,m)=>f-m);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let m=s.get(f.largestBatchId);m===null&&(m=pn(),s=s.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=pn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((f,m)=>c.set(f,m)),!(c.size()>=i)););return N.resolve(c)}Tt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new _v(t,r));let s=this.Er.get(t);s===void 0&&(s=Q(),this.Er.set(t,s)),this.Er.set(t,s.add(r.key))}}/**
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
 */class Jv{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
 */class cu{constructor(){this.dr=new pe(ge.Ar),this.Rr=new pe(ge.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const r=new ge(e,t);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new ge(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){const t=new j(new se([])),r=new ge(t,e),i=new ge(t,e+1),s=[];return this.Rr.forEachInRange([r,i],a=>{this.gr(a),s.push(a.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new j(new se([])),r=new ge(t,e),i=new ge(t,e+1);let s=Q();return this.Rr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new ge(e,0),r=this.dr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ge{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return j.comparator(e.key,t.key)||X(e.br,t.br)}static Vr(e,t){return X(e.br,t.br)||j.comparator(e.key,t.key)}}/**
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
 */class Zv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new pe(ge.Ar)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new pv(s,t,r,i);this.mutationQueue.push(a);for(const c of i)this.vr=this.vr.add(new ge(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Fr(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ge(t,0),i=new ge(t,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],a=>{const c=this.Cr(a.br);s.push(c)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new pe(X);return t.forEach(i=>{const s=new ge(i,0),a=new ge(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,a],c=>{r=r.add(c.br)})}),N.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const a=new ge(new j(s),0);let c=new pe(X);return this.vr.forEachWhile(l=>{const f=l.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(c=c.add(l.br)),!0)},a),N.resolve(this.Mr(c))}Mr(e){const t=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ee(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return N.forEach(t.mutations,i=>{const s=new ge(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,t){const r=new ge(t,0),i=this.vr.firstAfterOrEqual(r);return N.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class ew{constructor(e){this.Nr=e,this.docs=function(){return new ae(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():Ce.newInvalidDocument(t))}getEntries(e,t){let r=Dt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ce.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Dt();const a=t.path,c=new j(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:f,value:{document:m}}=l.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Cy(Py(m),r)<=0||(i.has(m.key)||so(t,m))&&(s=s.insert(m.key,m.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,t,r,i){$()}Lr(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new tw(this)}getSize(e){return N.resolve(this.size)}}class tw extends Wv{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class nw{constructor(e){this.persistence=e,this.Br=new Cn(t=>ru(t),iu),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.kr=0,this.qr=new cu,this.targetCount=0,this.Qr=ar.qn()}forEachTarget(e,t){return this.Br.forEach((r,i)=>t(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),N.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new ar(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Un(t),N.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Br.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Br.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.Br.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qr.Sr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.qr.containsKey(t))}}/**
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
 */class uf{constructor(e,t){this.Kr={},this.overlays={},this.$r=new to(0),this.Ur=!1,this.Ur=!0,this.Wr=new Jv,this.referenceDelegate=e(this),this.Gr=new nw(this),this.indexManager=new qv,this.remoteDocumentCache=function(i){return new ew(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new Uv(t),this.jr=new Xv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Yv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new Zv(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){F("MemoryPersistence","Starting transaction:",e);const i=new rw(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,t){return N.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class rw extends Dy{constructor(e){super(),this.currentSequenceNumber=e}}class lu{constructor(e){this.persistence=e,this.Zr=new cu,this.Xr=null}static ei(e){return new lu(e)}get ti(){if(this.Xr)return this.Xr;throw $()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),N.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.ti,r=>{const i=j.fromPath(r);return this.ni(e,i).next(s=>{s||t.removeEntry(i,z.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return N.or([()=>N.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Ns{constructor(e,t){this.persistence=e,this.ri=new Cn(r=>Oy(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=zv(this,t)}static ei(e,t){return new Ns(e,t)}Hr(){}Jr(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return N.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?N.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,a=>this.ir(e,a,t).next(c=>{c||(r++,s.removeEntry(a,z.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),N.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ls(e.data.value)),t}ir(e,t,r){return N.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.ri.get(t);return N.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class hu{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=i}static zi(e,t){let r=Q(),i=Q();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new hu(e,t.fromCache,r,i)}}/**
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
 */class iw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class sw{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Zm()?8:Vy(ke())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Xi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.es(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new iw;return this.ts(e,t,a).next(c=>{if(s.result=c,this.Hi)return this.ns(e,t,a,c.size)})}).next(()=>s.result)}ns(e,t,r,i){return r.documentReadCount<this.Ji?(jn()<=K.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",$n(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),N.resolve()):(jn()<=K.DEBUG&&F("QueryEngine","Query:",$n(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(jn()<=K.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",$n(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lt(t))):N.resolve())}Xi(e,t){if(Tl(t))return N.resolve(null);let r=lt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Sa(t,null,"F"),r=lt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=Q(...s);return this.Zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const f=this.rs(t,c);return this.ss(t,f,a,l.readTime)?this.Xi(e,Sa(t,null,"F")):this.os(e,f,t,l)}))})))}es(e,t,r,i){return Tl(t)||i.isEqual(z.min())?N.resolve(null):this.Zi.getDocuments(e,r).next(s=>{const a=this.rs(t,s);return this.ss(t,a,r,i)?N.resolve(null):(jn()<=K.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),$n(t)),this.os(e,a,t,Sy(i,-1)).next(c=>c))})}rs(e,t){let r=new pe(Fd(e));return t.forEach((i,s)=>{so(e,s)&&(r=r.add(s))}),r}ss(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,t,r){return jn()<=K.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",$n(t)),this.Zi.getDocumentsMatchingQuery(e,t,Jt.min(),r)}os(e,t,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class ow{constructor(e,t,r,i){this.persistence=e,this._s=t,this.serializer=i,this.us=new ae(X),this.cs=new Cn(s=>ru(s),iu),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Qv(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function aw(n,e,t,r){return new ow(n,e,t,r)}async function cf(n,e){const t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],c=[];let l=Q();for(const f of i){a.push(f.batchId);for(const m of f.mutations)l=l.add(m.key)}for(const f of s){c.push(f.batchId);for(const m of f.mutations)l=l.add(m.key)}return t.localDocuments.getDocuments(r,l).next(f=>({Ts:f,removedBatchIds:a,addedBatchIds:c}))})})}function uw(n,e){const t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.hs.newChangeBuffer({trackRemovals:!0});return function(c,l,f,m){const u=f.batch,h=u.keys();let _=N.resolve();return h.forEach(y=>{_=_.next(()=>m.getEntry(l,y)).next(I=>{const v=f.docVersions.get(y);ee(v!==null),I.version.compareTo(v)<0&&(u.applyToRemoteDocument(I,f),I.isValidDocument()&&(I.setReadTime(f.commitVersion),m.addEntry(I)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,u))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Q();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(l=l.add(c.batch.mutations[f].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function lf(n){const e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function cw(n,e){const t=G(n),r=e.snapshotVersion;let i=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.hs.newChangeBuffer({trackRemovals:!0});i=t.us;const c=[];e.targetChanges.forEach((m,u)=>{const h=i.get(u);if(!h)return;c.push(t.Gr.removeMatchingKeys(s,m.removedDocuments,u).next(()=>t.Gr.addMatchingKeys(s,m.addedDocuments,u)));let _=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(u)!==null?_=_.withResumeToken(Te.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):m.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(m.resumeToken,r)),i=i.insert(u,_),function(I,v,E){return I.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(h,_,m)&&c.push(t.Gr.updateTargetData(s,_))});let l=Dt(),f=Q();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,m))}),c.push(lw(s,a,e.documentUpdates).next(m=>{l=m.Is,f=m.Es})),!r.isEqual(z.min())){const m=t.Gr.getLastRemoteSnapshotVersion(s).next(u=>t.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(m)}return N.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,f)).next(()=>l)}).then(s=>(t.us=i,s))}function lw(n,e,t){let r=Q(),i=Q();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=Dt();return t.forEach((c,l)=>{const f=s.get(c);l.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!f.isValidDocument()||l.version.compareTo(f.version)>0||l.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):F("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",l.version)}),{Is:a,Es:i}})}function hw(n,e){const t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dw(n,e){const t=G(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Gr.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):t.Gr.allocateTargetId(r).next(a=>(i=new Ht(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function Va(n,e,t){const r=G(n),i=r.us.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Er(a))throw a;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function Nl(n,e,t){const r=G(n);let i=z.min(),s=Q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,f,m){const u=G(l),h=u.cs.get(m);return h!==void 0?N.resolve(u.us.get(h)):u.Gr.getTargetData(f,m)}(r,a,lt(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,c.targetId).next(l=>{s=l})}).next(()=>r._s.getDocumentsMatchingQuery(a,e,t?i:z.min(),t?s:Q())).next(c=>(fw(r,Zy(e),c),{documents:c,ds:s})))}function fw(n,e,t){let r=n.ls.get(e)||z.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ls.set(e,r)}class Ol{constructor(){this.activeTargetIds=sv()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pw{constructor(){this._o=new Ol,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Ol,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _w{uo(e){}shutdown(){}}/**
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
 */class xl{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ns=null;function Xo(){return ns===null?ns=function(){return 268435456+Math.round(2147483648*Math.random())}():ns++,"0x"+ns.toString(16)}/**
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
 */const mw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class gw{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const be="WebChannelConnection";class yw extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(t,r,i,s,a){const c=Xo(),l=this.No(t,r.toUriEncodedString());F("RestConnection",`Sending RPC '${t}' ${c}:`,l,i);const f={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(f,s,a),this.Bo(t,l,f,i).then(m=>(F("RestConnection",`Received RPC '${t}' ${c}: `,m),m),m=>{throw rr("RestConnection",`RPC '${t}' ${c} failed with error: `,m,"url: ",l,"request:",i),m})}ko(t,r,i,s,a,c){return this.Oo(t,r,i,s,a)}Lo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+wr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}No(t,r){const i=mw[t];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,r,i){const s=Xo();return new Promise((a,c)=>{const l=new yd;l.setWithCredentials(!0),l.listenOnce(vd.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case cs.NO_ERROR:const m=l.getResponseJson();F(be,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(m)),a(m);break;case cs.TIMEOUT:F(be,`RPC '${e}' ${s} timed out`),c(new U(O.DEADLINE_EXCEEDED,"Request time out"));break;case cs.HTTP_ERROR:const u=l.getStatus();if(F(be,`RPC '${e}' ${s} failed with status:`,u,"response text:",l.getResponseText()),u>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const _=h==null?void 0:h.error;if(_&&_.status&&_.message){const y=function(v){const E=v.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(E)>=0?E:O.UNKNOWN}(_.status);c(new U(y,_.message))}else c(new U(O.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new U(O.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{F(be,`RPC '${e}' ${s} completed.`)}});const f=JSON.stringify(i);F(be,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",f,r,15)})}qo(e,t,r){const i=Xo(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Ed(),c=Td(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(l.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const m=s.join("");F(be,`Creating RPC '${e}' stream ${i}: ${m}`,l);const u=a.createWebChannel(m,l);let h=!1,_=!1;const y=new gw({Eo:v=>{_?F(be,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(h||(F(be,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),F(be,`RPC '${e}' stream ${i} sending:`,v),u.send(v))},Ao:()=>u.close()}),I=(v,E,k)=>{v.listen(E,V=>{try{k(V)}catch(L){setTimeout(()=>{throw L},0)}})};return I(u,Gr.EventType.OPEN,()=>{_||(F(be,`RPC '${e}' stream ${i} transport opened.`),y.So())}),I(u,Gr.EventType.CLOSE,()=>{_||(_=!0,F(be,`RPC '${e}' stream ${i} transport closed`),y.Do())}),I(u,Gr.EventType.ERROR,v=>{_||(_=!0,rr(be,`RPC '${e}' stream ${i} transport errored:`,v),y.Do(new U(O.UNAVAILABLE,"The operation could not be completed")))}),I(u,Gr.EventType.MESSAGE,v=>{var E;if(!_){const k=v.data[0];ee(!!k);const V=k,L=(V==null?void 0:V.error)||((E=V[0])===null||E===void 0?void 0:E.error);if(L){F(be,`RPC '${e}' stream ${i} received error:`,L);const q=L.status;let B=function(T){const A=le[T];if(A!==void 0)return Xd(A)}(q),R=L.message;B===void 0&&(B=O.INTERNAL,R="Unknown error status: "+q+" with message "+L.message),_=!0,y.Do(new U(B,R)),u.close()}else F(be,`RPC '${e}' stream ${i} received:`,k),y.vo(k)}}),I(c,wd.STAT_EVENT,v=>{v.stat===Ta.PROXY?F(be,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===Ta.NOPROXY&&F(be,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.bo()},0),y}}function Yo(){return typeof document<"u"?document:null}/**
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
 */function co(n){return new bv(n,!0)}/**
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
 */class hf{constructor(e,t,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,t-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class df{constructor(e,t,r,i,s,a,c,l){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new hf(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(kt(t.toString()),kt("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===t&&this.I_(r,i)},r=>{e(()=>{const i=new U(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,t){const r=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vw extends df{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=Pv(this.serializer,e),r=function(s){if(!("targetChange"in s))return z.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?ht(a.readTime):z.min()}(e);return this.listener.R_(t,r)}V_(e){const t={};t.database=Da(this.serializer),t.addTarget=function(s,a){let c;const l=a.target;if(c=ba(l)?{documents:Dv(s,l)}:{query:rf(s,l).ct},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Zd(s,a.resumeToken);const f=Pa(s,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(z.min())>0){c.readTime=Vs(s,a.snapshotVersion.toTimestamp());const f=Pa(s,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,e);const r=Ov(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){const t={};t.database=Da(this.serializer),t.removeTarget=e,this.c_(t)}}class ww extends df{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return ee(!!e.streamToken),this.lastStreamToken=e.streamToken,ee(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=kv(e.writeResults,e.commitTime),r=ht(e.commitTime);return this.listener.y_(r,t)}w_(){const e={};e.database=Da(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Cv(this.serializer,r))};this.c_(t)}}/**
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
 */class Tw extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new U(O.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Oo(e,Ca(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(O.UNKNOWN,s.toString())})}ko(e,t,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.ko(e,Ca(t,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new U(O.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Ew{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(kt(t),this.C_=!1):F("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class Iw{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{Dn(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(l){const f=G(l);f.k_.add(4),await Ai(f),f.K_.set("Unknown"),f.k_.delete(4),await lo(f)}(this))})}),this.K_=new Ew(r,i)}}async function lo(n){if(Dn(n))for(const e of n.q_)await e(!0)}async function Ai(n){for(const e of n.q_)await e(!1)}function ff(n,e){const t=G(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),_u(t)?pu(t):Ir(t).s_()&&fu(t,e))}function du(n,e){const t=G(n),r=Ir(t);t.B_.delete(e),r.s_()&&pf(t,e),t.B_.size===0&&(r.s_()?r.a_():Dn(t)&&t.K_.set("Unknown"))}function fu(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ir(n).V_(e)}function pf(n,e){n.U_.xe(e),Ir(n).m_(e)}function pu(n){n.U_=new Tv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Ir(n).start(),n.K_.F_()}function _u(n){return Dn(n)&&!Ir(n).i_()&&n.B_.size>0}function Dn(n){return G(n).k_.size===0}function _f(n){n.U_=void 0}async function Aw(n){n.K_.set("Online")}async function bw(n){n.B_.forEach((e,t)=>{fu(n,e)})}async function Rw(n,e){_f(n),_u(n)?(n.K_.O_(e),pu(n)):n.K_.set("Unknown")}async function Sw(n,e,t){if(n.K_.set("Online"),e instanceof Jd&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const c of s.targetIds)i.B_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.B_.delete(c),i.U_.removeTarget(c))}(n,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Os(n,r)}else if(e instanceof fs?n.U_.$e(e):e instanceof Yd?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(z.min()))try{const r=await lf(n.localStore);t.compareTo(r)>=0&&await function(s,a){const c=s.U_.it(a);return c.targetChanges.forEach((l,f)=>{if(l.resumeToken.approximateByteSize()>0){const m=s.B_.get(f);m&&s.B_.set(f,m.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,f)=>{const m=s.B_.get(l);if(!m)return;s.B_.set(l,m.withResumeToken(Te.EMPTY_BYTE_STRING,m.snapshotVersion)),pf(s,l);const u=new Ht(m.target,l,f,m.sequenceNumber);fu(s,u)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Os(n,r)}}async function Os(n,e,t){if(!Er(e))throw e;n.k_.add(1),await Ai(n),n.K_.set("Offline"),t||(t=()=>lf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await lo(n)})}function mf(n,e){return e().catch(t=>Os(n,t,e))}async function ho(n){const e=G(n),t=nn(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;Pw(e);)try{const i=await hw(e.localStore,r);if(i===null){e.L_.length===0&&t.a_();break}r=i.batchId,Cw(e,i)}catch(i){await Os(e,i)}gf(e)&&yf(e)}function Pw(n){return Dn(n)&&n.L_.length<10}function Cw(n,e){n.L_.push(e);const t=nn(n);t.s_()&&t.f_&&t.g_(e.mutations)}function gf(n){return Dn(n)&&!nn(n).i_()&&n.L_.length>0}function yf(n){nn(n).start()}async function kw(n){nn(n).w_()}async function Dw(n){const e=nn(n);for(const t of n.L_)e.g_(t.mutations)}async function Vw(n,e,t){const r=n.L_.shift(),i=ou.from(r,e,t);await mf(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ho(n)}async function Nw(n,e){e&&nn(n).f_&&await async function(r,i){if(function(a){return yv(a)&&a!==O.ABORTED}(i.code)){const s=r.L_.shift();nn(r).__(),await mf(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ho(r)}}(n,e),gf(n)&&yf(n)}async function Ml(n,e){const t=G(n);t.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=Dn(t);t.k_.add(3),await Ai(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await lo(t)}async function Ow(n,e){const t=G(n);e?(t.k_.delete(2),await lo(t)):e||(t.k_.add(2),await Ai(t),t.K_.set("Unknown"))}function Ir(n){return n.W_||(n.W_=function(t,r,i){const s=G(t);return s.b_(),new vw(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:Aw.bind(null,n),mo:bw.bind(null,n),po:Rw.bind(null,n),R_:Sw.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),_u(n)?pu(n):n.K_.set("Unknown")):(await n.W_.stop(),_f(n))})),n.W_}function nn(n){return n.G_||(n.G_=function(t,r,i){const s=G(t);return s.b_(),new ww(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:kw.bind(null,n),po:Nw.bind(null,n),p_:Dw.bind(null,n),y_:Vw.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await ho(n)):(await n.G_.stop(),n.L_.length>0&&(F("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
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
 */class mu{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new St,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,c=new mu(e,t,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gu(n,e){if(kt("AsyncQueue",`${e}: ${n}`),Er(n))return new U(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Xn{static emptySet(e){return new Xn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||j.comparator(t.key,r.key):(t,r)=>j.comparator(t.key,r.key),this.keyedMap=zr(),this.sortedSet=new ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Xn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Ll{constructor(){this.z_=new ae(j.comparator)}track(e){const t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):$():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class ur{constructor(e,t,r,i,s,a,c,l,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new ur(e,t,Xn.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&io(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class xw{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class Mw{constructor(){this.queries=Fl(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){const i=G(t),s=i.queries;i.queries=Fl(),s.forEach((a,c)=>{for(const l of c.J_)l.onError(r)})})(this,new U(O.ABORTED,"Firestore shutting down"))}}function Fl(){return new Cn(n=>Ld(n),io)}async function Lw(n,e){const t=G(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new xw,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await t.onListen(i,!0);break;case 1:s.H_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const c=gu(a,`Initialization of query '${$n(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.J_.push(e),e.ea(t.onlineState),s.H_&&e.ta(s.H_)&&yu(t)}async function Fw(n,e){const t=G(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.J_.indexOf(e);a>=0&&(s.J_.splice(a,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Uw(n,e){const t=G(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const c of a.J_)c.ta(i)&&(r=!0);a.H_=i}}r&&yu(t)}function Bw(n,e,t){const r=G(n),i=r.queries.get(e);if(i)for(const s of i.J_)s.onError(t);r.queries.delete(e)}function yu(n){n.X_.forEach(e=>{e.next()})}var Na,Ul;(Ul=Na||(Na={})).na="default",Ul.Cache="cache";class qw{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ur(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=ur.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Na.Cache}}/**
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
 */class vf{constructor(e){this.key=e}}class wf{constructor(e){this.key=e}}class jw{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Q(),this.mutatedKeys=Q(),this.Va=Fd(e),this.ma=new Xn(this.Va)}get fa(){return this.da}ga(e,t){const r=t?t.pa:new Ll,i=t?t.ma:this.ma;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((m,u)=>{const h=i.get(m),_=so(this.query,u)?u:null,y=!!h&&this.mutatedKeys.has(h.key),I=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let v=!1;h&&_?h.data.isEqual(_.data)?y!==I&&(r.track({type:3,doc:_}),v=!0):this.ya(h,_)||(r.track({type:2,doc:_}),v=!0,(l&&this.Va(_,l)>0||f&&this.Va(_,f)<0)&&(c=!0)):!h&&_?(r.track({type:0,doc:_}),v=!0):h&&!_&&(r.track({type:1,doc:h}),v=!0,(l||f)&&(c=!0)),v&&(_?(a=a.add(_),s=I?s.add(m):s.delete(m)):(a=a.delete(m),s=s.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),s=s.delete(m.key),r.track({type:1,doc:m})}return{ma:a,pa:r,ss:c,mutatedKeys:s}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const a=e.pa.j_();a.sort((m,u)=>function(_,y){const I=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return I(_)-I(y)}(m.type,u.type)||this.Va(m.doc,u.doc)),this.wa(r),i=i!=null&&i;const c=t&&!i?this.Sa():[],l=this.Ra.size===0&&this.current&&!i?1:0,f=l!==this.Aa;return this.Aa=l,a.length!==0||f?{snapshot:new ur(this.query,e.ma,s,a,e.mutatedKeys,l===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Ll,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Q(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new wf(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new vf(r))}),t}va(e){this.da=e.ds,this.Ra=Q();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return ur.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class $w{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Hw{constructor(e){this.key=e,this.Fa=!1}}class Gw{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new Cn(c=>Ld(c),io),this.Oa=new Map,this.Na=new Set,this.La=new ae(j.comparator),this.Ba=new Map,this.ka=new cu,this.qa={},this.Qa=new Map,this.Ka=ar.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function zw(n,e,t=!0){const r=Rf(n);let i;const s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await Tf(r,e,t,!0),i}async function Ww(n,e){const t=Rf(n);await Tf(t,e,!0,!1)}async function Tf(n,e,t,r){const i=await dw(n.localStore,lt(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let c;return r&&(c=await Kw(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&ff(n.remoteStore,i),c}async function Kw(n,e,t,r,i){n.Ua=(u,h,_)=>async function(I,v,E,k){let V=v.view.ga(E);V.ss&&(V=await Nl(I.localStore,v.query,!1).then(({documents:R})=>v.view.ga(R,V)));const L=k&&k.targetChanges.get(v.targetId),q=k&&k.targetMismatches.get(v.targetId)!=null,B=v.view.applyChanges(V,I.isPrimaryClient,L,q);return ql(I,v.targetId,B.ba),B.snapshot}(n,u,h,_);const s=await Nl(n.localStore,e,!0),a=new jw(e,s.ds),c=a.ga(s.documents),l=Ii.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),f=a.applyChanges(c,n.isPrimaryClient,l);ql(n,t,f.ba);const m=new $w(e,t,a);return n.xa.set(e,m),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),f.snapshot}async function Qw(n,e,t){const r=G(n),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(a=>!io(a,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Va(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&du(r.remoteStore,i.targetId),Oa(r,i.targetId)}).catch(Tr)):(Oa(r,i.targetId),await Va(r.localStore,i.targetId,!0))}async function Xw(n,e){const t=G(n),r=t.xa.get(e),i=t.Oa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),du(t.remoteStore,r.targetId))}async function Yw(n,e,t){const r=iT(n);try{const i=await function(a,c){const l=G(a),f=fe.now(),m=c.reduce((_,y)=>_.add(y.key),Q());let u,h;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let y=Dt(),I=Q();return l.hs.getEntries(_,m).next(v=>{y=v,y.forEach((E,k)=>{k.isValidDocument()||(I=I.add(E))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,y)).next(v=>{u=v;const E=[];for(const k of c){const V=dv(k,u.get(k.key).overlayedDocument);V!=null&&E.push(new kn(k.key,V,Sd(V.value.mapValue),Pt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,f,E,c)}).next(v=>{h=v;const E=v.applyToLocalDocumentSet(u,I);return l.documentOverlayCache.saveOverlays(_,v.batchId,E)})}).then(()=>({batchId:h.batchId,changes:Bd(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,l){let f=a.qa[a.currentUser.toKey()];f||(f=new ae(X)),f=f.insert(c,l),a.qa[a.currentUser.toKey()]=f}(r,i.batchId,t),await bi(r,i.changes),await ho(r.remoteStore)}catch(i){const s=gu(i,"Failed to persist write");t.reject(s)}}async function Ef(n,e){const t=G(n);try{const r=await cw(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Ba.get(s);a&&(ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Fa=!0:i.modifiedDocuments.size>0?ee(a.Fa):i.removedDocuments.size>0&&(ee(a.Fa),a.Fa=!1))}),await bi(t,r,e)}catch(r){await Tr(r)}}function Bl(n,e,t){const r=G(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.xa.forEach((s,a)=>{const c=a.view.ea(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const l=G(a);l.onlineState=c;let f=!1;l.queries.forEach((m,u)=>{for(const h of u.J_)h.ea(c)&&(f=!0)}),f&&yu(l)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Jw(n,e,t){const r=G(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Ba.get(e),s=i&&i.key;if(s){let a=new ae(j.comparator);a=a.insert(s,Ce.newNoDocument(s,z.min()));const c=Q().add(s),l=new uo(z.min(),new Map,new ae(X),a,c);await Ef(r,l),r.La=r.La.remove(s),r.Ba.delete(e),vu(r)}else await Va(r.localStore,e,!1).then(()=>Oa(r,e,t)).catch(Tr)}async function Zw(n,e){const t=G(n),r=e.batch.batchId;try{const i=await uw(t.localStore,e);Af(t,r,null),If(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await bi(t,i)}catch(i){await Tr(i)}}async function eT(n,e,t){const r=G(n);try{const i=await function(a,c){const l=G(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return l.mutationQueue.lookupMutationBatch(f,c).next(u=>(ee(u!==null),m=u.keys(),l.mutationQueue.removeMutationBatch(f,u))).next(()=>l.mutationQueue.performConsistencyCheck(f)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(f,m,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>l.localDocuments.getDocuments(f,m))})}(r.localStore,e);Af(r,e,t),If(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await bi(r,i)}catch(i){await Tr(i)}}function If(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function Af(n,e,t){const r=G(n);let i=r.qa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function Oa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||bf(n,r)})}function bf(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(du(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),vu(n))}function ql(n,e,t){for(const r of t)r instanceof vf?(n.ka.addReference(r.key,e),tT(n,r)):r instanceof wf?(F("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||bf(n,r.key)):$()}function tT(n,e){const t=e.key,r=t.path.canonicalString();n.La.get(t)||n.Na.has(r)||(F("SyncEngine","New document in limbo: "+t),n.Na.add(r),vu(n))}function vu(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new j(se.fromString(e)),r=n.Ka.next();n.Ba.set(r,new Hw(t)),n.La=n.La.insert(t,r),ff(n.remoteStore,new Ht(lt(Od(t.path)),r,"TargetPurposeLimboResolution",to.oe))}}async function bi(n,e,t){const r=G(n),i=[],s=[],a=[];r.xa.isEmpty()||(r.xa.forEach((c,l)=>{a.push(r.Ua(l,e,t).then(f=>{var m;if((f||t)&&r.isPrimaryClient){const u=f?!f.fromCache:(m=t==null?void 0:t.targetChanges.get(l.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(l.targetId,u?"current":"not-current")}if(f){i.push(f);const u=hu.zi(l.targetId,f);s.push(u)}}))}),await Promise.all(a),r.Ma.R_(i),await async function(l,f){const m=G(l);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>N.forEach(f,h=>N.forEach(h.Wi,_=>m.persistence.referenceDelegate.addReference(u,h.targetId,_)).next(()=>N.forEach(h.Gi,_=>m.persistence.referenceDelegate.removeReference(u,h.targetId,_)))))}catch(u){if(!Er(u))throw u;F("LocalStore","Failed to update sequence numbers: "+u)}for(const u of f){const h=u.targetId;if(!u.fromCache){const _=m.us.get(h),y=_.snapshotVersion,I=_.withLastLimboFreeSnapshotVersion(y);m.us=m.us.insert(h,I)}}}(r.localStore,s))}async function nT(n,e){const t=G(n);if(!t.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await cf(t.localStore,e);t.currentUser=e,function(s,a){s.Qa.forEach(c=>{c.forEach(l=>{l.reject(new U(O.CANCELLED,a))})}),s.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bi(t,r.Ts)}}function rT(n,e){const t=G(n),r=t.Ba.get(e);if(r&&r.Fa)return Q().add(r.key);{let i=Q();const s=t.Oa.get(e);if(!s)return i;for(const a of s){const c=t.xa.get(a);i=i.unionWith(c.view.fa)}return i}}function Rf(n){const e=G(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ef.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Jw.bind(null,e),e.Ma.R_=Uw.bind(null,e.eventManager),e.Ma.Wa=Bw.bind(null,e.eventManager),e}function iT(n){const e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Zw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eT.bind(null,e),e}class xs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=co(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return aw(this.persistence,new sw,e.initialUser,this.serializer)}ja(e){return new uf(lu.ei,this.serializer)}za(e){return new pw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xs.provider={build:()=>new xs};class sT extends xs{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){ee(this.persistence.referenceDelegate instanceof Ns);const r=this.persistence.referenceDelegate.garbageCollector;return new Hv(r,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Oe.withCacheSize(this.cacheSizeBytes):Oe.DEFAULT;return new uf(r=>Ns.ei(r,t),this.serializer)}}class xa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nT.bind(null,this.syncEngine),await Ow(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Mw}()}createDatastore(e){const t=co(e.databaseInfo.databaseId),r=function(s){return new yw(s)}(e.databaseInfo);return function(s,a,c,l){return new Tw(s,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,c){return new Iw(r,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Bl(this.syncEngine,t,0),function(){return xl.p()?new xl:new _w}())}createSyncEngine(e,t){return function(i,s,a,c,l,f,m){const u=new Gw(i,s,a,c,l,f);return m&&(u.$a=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=G(i);F("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await Ai(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}xa.provider={build:()=>new xa};/**
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
 */class oT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):kt("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class aT{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Pe.UNAUTHENTICATED,this.clientId=Ad.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{F("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(F("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new St;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=gu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Jo(n,e){n.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cf(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function jl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await uT(n);F("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ml(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Ml(e.remoteStore,i)),n._onlineComponents=e}async function uT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await Jo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;rr("Error using user provided cache. Falling back to memory cache: "+t),await Jo(n,new xs)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await Jo(n,new sT(void 0));return n._offlineComponents}async function wu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await jl(n,n._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await jl(n,new xa))),n._onlineComponents}function cT(n){return wu(n).then(e=>e.syncEngine)}function lT(n){return wu(n).then(e=>e.datastore)}async function hT(n){const e=await wu(n),t=e.eventManager;return t.onListen=zw.bind(null,e.syncEngine),t.onUnlisten=Qw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Ww.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Xw.bind(null,e.syncEngine),t}function dT(n,e,t={}){const r=new St;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,l,f){const m=new oT({next:h=>{m.eu(),a.enqueueAndForget(()=>Fw(s,u)),h.fromCache&&l.source==="server"?f.reject(new U(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(h)},error:h=>f.reject(h)}),u=new qw(c,m,{includeMetadataChanges:!0,ua:!0});return Lw(s,u)}(await hT(n),n.asyncQueue,e,t,r)),r.promise}function fT(n,e,t){const r=new St;return n.asyncQueue.enqueueAndForget(async()=>{try{const i=await lT(n);r.resolve(async function(a,c,l){var f;const m=G(a),{request:u,lt:h,parent:_}=Vv(m.serializer,Jy(c),l);m.connection.Co||delete u.parent;const y=(await m.ko("RunAggregationQuery",m.serializer.databaseId,_,u,1)).filter(v=>!!v.result);ee(y.length===1);const I=(f=y[0].result)===null||f===void 0?void 0:f.aggregateFields;return Object.keys(I).reduce((v,E)=>(v[h[E]]=I[E],v),{})}(i,e,t))}catch(i){r.reject(i)}}),r.promise}/**
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
 */function Sf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const $l=new Map;/**
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
 */function Pf(n,e,t){if(!t)throw new U(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function pT(n,e,t,r){if(e===!0&&r===!0)throw new U(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Hl(n){if(!j.isDocumentKey(n))throw new U(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Gl(n){if(j.isDocumentKey(n))throw new U(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function fo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":$()}function cr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new U(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=fo(n);throw new U(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class zl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class po{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zl({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zl(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new yy;switch(r.type){case"firstParty":return new Ey(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=$l.get(t);r&&(F("ComponentProvider","Removing Datastore"),$l.delete(t),r.terminate())}(this),Promise.resolve()}}function _T(n,e,t,r={}){var i;const s=(n=cr(n,po))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&rr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=Pe.MOCK_USER;else{c=Wm(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new U(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Pe(f)}n._authCredentials=new vy(new Id(c,l))}}/**
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
 */class Ar{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ar(this.firestore,e,this._query)}}class $e{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}}class Kt extends Ar{constructor(e,t,r){super(e,t,Od(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new j(e))}withConverter(e){return new Kt(this.firestore,e,this._path)}}function Cf(n,e,...t){if(n=Le(n),Pf("collection","path",e),n instanceof po){const r=se.fromString(e,...t);return Gl(r),new Kt(n,null,r)}{if(!(n instanceof $e||n instanceof Kt))throw new U(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return Gl(r),new Kt(n.firestore,null,r)}}function mT(n,e,...t){if(n=Le(n),arguments.length===1&&(e=Ad.newId()),Pf("doc","path",e),n instanceof po){const r=se.fromString(e,...t);return Hl(r),new $e(n,null,new j(r))}{if(!(n instanceof $e||n instanceof Kt))throw new U(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return Hl(r),new $e(n.firestore,n instanceof Kt?n.converter:null,new j(r))}}/**
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
 */class Wl{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new hf(this,"async_queue_retry"),this.fu=()=>{const r=Yo();r&&F("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const t=Yo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Yo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new St;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Er(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw kt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const i=mu.createAndSchedule(this,e,t,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&$()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class _o extends po{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Wl,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wl(e),this._firestoreClient=void 0,await e}}}function kf(n,e){const t=typeof n=="object"?n:Za(),r=typeof n=="string"?n:"(default)",i=Sn(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Gm("firestore");s&&_T(i,...s)}return i}function Tu(n){if(n._terminated)throw new U(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||gT(n),n._firestoreClient}function gT(n){var e,t,r;const i=n._freezeSettings(),s=function(c,l,f,m){return new Fy(c,l,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Sf(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new aT(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
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
 */class yT{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class vT{constructor(e,t,r){this._userDataWriter=t,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class lr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new lr(Te.fromBase64String(e))}catch(t){throw new U(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new lr(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Eu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new we(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Df{constructor(e){this._methodName=e}}/**
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
 */class Iu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
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
 */class Au{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const wT=/^__.*__$/;class TT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new kn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ei(e,this.data,t,this.fieldTransforms)}}function Vf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class bu{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new bu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Ms(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Vf(this.Mu)&&wT.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class ET{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||co(e)}$u(e,t,r,i=!1){return new bu({Mu:e,methodName:t,Ku:r,path:we.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nf(n){const e=n._freezeSettings(),t=co(n._databaseId);return new ET(n._databaseId,!!e.ignoreUndefinedProperties,t)}function IT(n,e,t,r,i,s={}){const a=n.$u(s.merge||s.mergeFields?2:0,e,t,i);Mf("Data must be an object, but it was:",a,r);const c=Of(r,a);let l,f;if(s.merge)l=new et(a.fieldMask),f=a.fieldTransforms;else if(s.mergeFields){const m=[];for(const u of s.mergeFields){const h=Lf(e,u,t);if(!a.contains(h))throw new U(O.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);RT(m,h)||m.push(h)}l=new et(m),f=a.fieldTransforms.filter(u=>l.covers(u.field))}else l=null,f=a.fieldTransforms;return new TT(new ze(c),l,f)}function AT(n,e,t,r=!1){return Ru(t,n.$u(r?4:3,e))}function Ru(n,e){if(xf(n=Le(n)))return Mf("Unsupported field value:",e,n),Of(n,e);if(n instanceof Df)return function(r,i){if(!Vf(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const c of r){let l=Ru(c,i.ku(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ov(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=fe.fromDate(r);return{timestampValue:Vs(i.serializer,s)}}if(r instanceof fe){const s=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Vs(i.serializer,s)}}if(r instanceof Iu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof lr)return{bytesValue:Zd(i.serializer,r._byteString)};if(r instanceof $e){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:uu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Au)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw c.qu("VectorValues must only contain numeric values.");return su(c.serializer,l)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${fo(r)}`)}(n,e)}function Of(n,e){const t={};return bd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pn(n,(r,i)=>{const s=Ru(i,e.Ou(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function xf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof fe||n instanceof Iu||n instanceof lr||n instanceof $e||n instanceof Df||n instanceof Au)}function Mf(n,e,t){if(!xf(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=fo(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function Lf(n,e,t){if((e=Le(e))instanceof Eu)return e._internalPath;if(typeof e=="string")return Ff(n,e);throw Ms("Field path arguments must be of type string or ",n,!1,void 0,t)}const bT=new RegExp("[~\\*/\\[\\]]");function Ff(n,e,t){if(e.search(bT)>=0)throw Ms(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Eu(...e.split("."))._internalPath}catch{throw Ms(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ms(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new U(O.INVALID_ARGUMENT,c+n+l)}function RT(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Uf{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ST(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Su("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ST extends Uf{data(){return super.data()}}function Su(n,e){return typeof e=="string"?Ff(n,e):e instanceof Eu?e._internalPath:e._delegate._internalPath}/**
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
 */function PT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new U(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pu{}class CT extends Pu{}function kT(n,e,...t){let r=[];e instanceof Pu&&r.push(e),r=r.concat(t),function(s){const a=s.filter(l=>l instanceof Cu).length,c=s.filter(l=>l instanceof mo).length;if(a>1||a>0&&c>0)throw new U(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class mo extends CT{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new mo(e,t,r)}_apply(e){const t=this._parse(e);return Bf(e._query,t),new Ar(e.firestore,e.converter,Ra(e._query,t))}_parse(e){const t=Nf(e.firestore);return function(s,a,c,l,f,m,u){let h;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new U(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Ql(u,m);const _=[];for(const y of u)_.push(Kl(l,s,y));h={arrayValue:{values:_}}}else h=Kl(l,s,u)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Ql(u,m),h=AT(c,a,u,m==="in"||m==="not-in");return de.create(f,m,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function DT(n,e,t){const r=e,i=Su("where",n);return mo._create(i,r,t)}class Cu extends Pu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Cu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:it.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i;const c=s.getFlattenedFilters();for(const l of c)Bf(a,l),a=Ra(a,l)}(e._query,t),new Ar(e.firestore,e.converter,Ra(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Kl(n,e,t){if(typeof(t=Le(t))=="string"){if(t==="")throw new U(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xd(e)&&t.indexOf("/")!==-1)throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(se.fromString(t));if(!j.isDocumentKey(r))throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _l(n,new j(r))}if(t instanceof $e)return _l(n,t._key);throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fo(t)}.`)}function Ql(n,e){if(!Array.isArray(n)||n.length===0)throw new U(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Bf(n,e){const t=function(i,s){for(const a of i)for(const c of a.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new U(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class VT{convertValue(e,t="none"){switch(tn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(en(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw $()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Pn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ce(a.doubleValue));return new Au(s)}convertGeoPoint(e){return new Iu(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ro(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ci(e));default:return null}}convertTimestamp(e){const t=Zt(e);return new fe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=se.fromString(e);ee(af(r));const i=new li(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(t)||kt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function NT(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */function OT(n){return new yT("sum",Lf("sum",n))}/**
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
 */class rs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xT extends Uf{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ps(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Su("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ps extends xT{data(e={}){return super.data(e)}}class MT{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new rs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ps(this._firestore,this._userDataWriter,r.key,r,new rs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const l=new ps(i._firestore,i._userDataWriter,c.doc.key,c.doc,new rs(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const l=new ps(i._firestore,i._userDataWriter,c.doc.key,c.doc,new rs(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,m=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:LT(c.type),doc:l,oldIndex:f,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function LT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}class qf extends VT{constructor(e){super(),this.firestore=e}convertBytes(e){return new lr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,t)}}function FT(n){n=cr(n,Ar);const e=cr(n.firestore,_o),t=Tu(e),r=new qf(e);return PT(n._query),dT(t,n._query).then(i=>new MT(e,r,n,i))}function UT(n,e,t){n=cr(n,$e);const r=cr(n.firestore,_o),i=NT(n.converter,e);return BT(r,[IT(Nf(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Pt.none())])}function BT(n,e){return function(r,i){const s=new St;return r.asyncQueue.enqueueAndForget(async()=>Yw(await cT(r),i,s)),s.promise}(Tu(n),e)}function qT(n,e){const t=cr(n.firestore,_o),r=Tu(t),i=My(e,(s,a)=>new mv(a,s.aggregateType,s._internalFieldPath));return fT(r,n._query,i).then(s=>function(c,l,f){const m=new qf(c);return new vT(l,m,f)}(t,n,s))}(function(e,t=!0){(function(i){wr=i})(vr),pt(new rt("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),c=new _o(new wy(r.getProvider("auth-internal")),new Ay(r.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new U(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new li(f.options.projectId,m)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),We(cl,"4.7.5",e),We(cl,"4.7.5","esm2017")})();const Bn=[];function jT(n,e){return{subscribe:Ri(n,e).subscribe}}function Ri(n,e=zn){let t=null;const r=new Set;function i(c){if(Ch(n,c)&&(n=c,t)){const l=!Bn.length;for(const f of r)f[1](),Bn.push(f,n);if(l){for(let f=0;f<Bn.length;f+=2)Bn[f][0](Bn[f+1]);Bn.length=0}}}function s(c){i(c(n))}function a(c,l=zn){const f=[c,l];return r.add(f),r.size===1&&(t=e(i,s)||zn),c(n),()=>{r.delete(f),r.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:a}}let hr=Ri(null),Ls=Ri("main"),Fs=Ri(null),$T=Ri(null),HT=function(){let n=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(n=!0)}(navigator.userAgent||navigator.vendor||window.opera),n},GT=jT(HT());const dr=10;class zT{constructor(e){this.id=e.id,this.question=e.question,this.answer=e.answer,this.wrong_answers=e.wrong_answers,this.score=0}AddScore(e){this.score=Math.min(this.score+e,dr)}RemoveScore(e){this.score=Math.max(this.score-e,0)}}var WT=bn('<div class="w-[100vw] flex justify-center"><div><h1 class="font-medium text-3xl">Welcome to Remeberer</h1> <h3 class="m-5 text-l">Use can use this website to make your brain remeberer things</h3> <div class="flex m-8 flex-col md:flex-row"></div></div></div>');function KT(n,e){gr(e,!1);const t=Ya(),r=()=>Et(Fs,"$firebase_app",t),i=()=>Et(hr,"$user",t);let s=at(e,"QuestionSets",8),a=at(e,"OnQuestionSetClick",8);const c=kf(r());async function l(h){if(i()){const _=Cf(c,"game_scores",i().uid.toString(),h.name);return(await qT(_,{totalScore:OT("score")})).data().totalScore/(dr*h.questions.length)*100}else return 0}vi();var f=WT(),m=Je(f),u=ti(Je(m),4);Im(u,5,s,Tm,(h,_)=>{var y=td(),I=Es(y);wm(I,()=>l(he(_)),null,(v,E)=>{Lm(v,{get question_set(){return he(_)},get progress_bar(){return he(E)},onclickfunc:()=>a()(he(_))})}),Tt(h,y)}),Tt(n,f),yr()}const QT="modulepreload",XT=function(n,e){return new URL(n,e).href},Xl={},YT=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=Promise.allSettled(t.map(f=>{if(f=XT(f,r),f in Xl)return;Xl[f]=!0;const m=f.endsWith(".css"),u=m?'[rel="stylesheet"]':"";if(!!r)for(let y=a.length-1;y>=0;y--){const I=a[y];if(I.href===f&&(!m||I.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${u}`))return;const _=document.createElement("link");if(_.rel=m?"stylesheet":QT,m||(_.as="script"),_.crossOrigin="",_.href=f,l&&_.setAttribute("nonce",l),document.head.appendChild(_),m)return new Promise((y,I)=>{_.addEventListener("load",y),_.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${f}`)))})}))}function s(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return i.then(a=>{for(const c of a||[])c.status==="rejected"&&s(c.reason);return e().catch(s)})};var JT=bn('<div class="m-0"></div>');function ZT(n,e){gr(e,!1);let t=at(e,"target",12,void 0),r=at(e,"sketch",8,void 0),i=at(e,"parentDivStyle",8,"display: block;"),s=at(e,"debug",8,!1),a;const c=Nm(),l={ref(){c("ref",t())},instance(){c("instance",a)}};function f(h){return t(h),{destroy(){t(void 0)}}}function m(h,_){return _.forEach(([y,I])=>h[y]=I),h}Dm(async()=>{const h=await YT(()=>import("./p5.min-BJ5j2LQy.js").then(v=>v.p),[],import.meta.url),{default:_}=h,I=Object.entries(h).filter(([v,E])=>E instanceof Function&&v[0]!=="_"&&v!=="default");s()&&console.log("available p5 native classes",I),a=new _(v=>(v=m(v,I),s()&&console.log("p5 instance",v),window._p5Instance=v,r()(v)),t()),l.ref(),l.instance()}),vi();var u=JT();Sm(u,h=>f==null?void 0:f(h)),Lh(()=>_a(u,"style",i())),Tt(n,u),yr()}function Zo(n){for(let e=n.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n}function eE(n,e){return Math.floor(Math.random()*(e-n+1))+n}function is(n,e){return Math.random()*(e-n)+n}class tE{constructor(){this.questions=[]}AddToPool(e){let t=new zT(e);return this.questions.push(t),t}GetAverageScore(){let e=0;return this.questions.forEach(t=>{e+=t.score}),e/this.questions.length}GetRandomQuestion(){console.log("In GetRandomQuestion");let e=0;this.questions.forEach(s=>{e+=dr-s.score});let t=eE(0,e);console.log("Random float:",t);let r=0,i=this.questions[0];return console.log(this.questions),this.questions.forEach(s=>{let a=r+dr-s.score;console.log("s: ",r),console.log("nextS",a),t>=r&&t<a&&(console.log("Choosen: ",s.id),i=s),r=a}),i}}var Hr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xA(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var _s={exports:{}},nE=_s.exports,Yl;function rE(){return Yl||(Yl=1,function(n){(function(e,t){n.exports?n.exports=t():e.buzz=t()})(nE,function(){var e=window.AudioContext||window.webkitAudioContext,t={defaults:{autoplay:!1,crossOrigin:null,duration:5e3,formats:[],loop:!1,placeholder:"--",preload:"metadata",volume:80,webAudioApi:!1,document:window.document},types:{mp3:"audio/mpeg",ogg:"audio/ogg",wav:"audio/wav",aac:"audio/aac",m4a:"audio/x-m4a"},sounds:[],el:document.createElement("audio"),getAudioContext:function(){if(this.audioCtx===void 0)try{this.audioCtx=e?new e:null}catch{this.audioCtx=null}return this.audioCtx},sound:function(r,i){i=i||{};var s=i.document||t.defaults.document,a=0,c=[],l={},f=t.isSupported();this.load=function(){return f?(this.sound.load(),this):this},this.play=function(){return f?(this.sound.play().catch(function(){}),this):this},this.togglePlay=function(){return f?(this.sound.paused?this.sound.play().catch(function(){}):this.sound.pause(),this):this},this.pause=function(){return f?(this.sound.pause(),this):this},this.isPaused=function(){return f?this.sound.paused:null},this.stop=function(){return f?(this.sound.pause(),this.setTime(0),this):this},this.isEnded=function(){return f?this.sound.ended:null},this.loop=function(){return f?(this.sound.loop="loop",this.bind("ended.buzzloop",function(){this.currentTime=0,this.play()}),this):this},this.unloop=function(){return f?(this.sound.removeAttribute("loop"),this.unbind("ended.buzzloop"),this):this},this.mute=function(){return f?(this.sound.muted=!0,this):this},this.unmute=function(){return f?(this.sound.muted=!1,this):this},this.toggleMute=function(){return f?(this.sound.muted=!this.sound.muted,this):this},this.isMuted=function(){return f?this.sound.muted:null},this.setVolume=function(v){return f?(v<0&&(v=0),v>100&&(v=100),this.volume=v,this.sound.volume=v/100,this):this},this.getVolume=function(){return f?this.volume:this},this.increaseVolume=function(v){return this.setVolume(this.volume+(v||1))},this.decreaseVolume=function(v){return this.setVolume(this.volume-(v||1))},this.setTime=function(v){if(!f)return this;var E=!0;return this.whenReady(function(){E===!0&&(E=!1,this.sound.currentTime=v)}),this},this.getTime=function(){if(!f)return null;var v=Math.round(this.sound.currentTime*100)/100;return isNaN(v)?t.defaults.placeholder:v},this.setPercent=function(v){return f?this.setTime(t.fromPercent(v,this.sound.duration)):this},this.getPercent=function(){if(!f)return null;var v=Math.round(t.toPercent(this.sound.currentTime,this.sound.duration));return isNaN(v)?t.defaults.placeholder:v},this.setSpeed=function(v){return f?(this.sound.playbackRate=v,this):this},this.getSpeed=function(){return f?this.sound.playbackRate:null},this.getDuration=function(){if(!f)return null;var v=Math.round(this.sound.duration*100)/100;return isNaN(v)?t.defaults.placeholder:v},this.getPlayed=function(){return f?m(this.sound.played):null},this.getBuffered=function(){return f?m(this.sound.buffered):null},this.getSeekable=function(){return f?m(this.sound.seekable):null},this.getErrorCode=function(){return f&&this.sound.error?this.sound.error.code:0},this.getErrorMessage=function(){if(!f)return null;switch(this.getErrorCode()){case 1:return"MEDIA_ERR_ABORTED";case 2:return"MEDIA_ERR_NETWORK";case 3:return"MEDIA_ERR_DECODE";case 4:return"MEDIA_ERR_SRC_NOT_SUPPORTED";default:return null}},this.getStateCode=function(){return f?this.sound.readyState:null},this.getStateMessage=function(){if(!f)return null;switch(this.getStateCode()){case 0:return"HAVE_NOTHING";case 1:return"HAVE_METADATA";case 2:return"HAVE_CURRENT_DATA";case 3:return"HAVE_FUTURE_DATA";case 4:return"HAVE_ENOUGH_DATA";default:return null}},this.getNetworkStateCode=function(){return f?this.sound.networkState:null},this.getNetworkStateMessage=function(){if(!f)return null;switch(this.getNetworkStateCode()){case 0:return"NETWORK_EMPTY";case 1:return"NETWORK_IDLE";case 2:return"NETWORK_LOADING";case 3:return"NETWORK_NO_SOURCE";default:return null}},this.set=function(v,E){return f?(this.sound[v]=E,this):this},this.get=function(v){return f?v?this.sound[v]:this.sound:null},this.bind=function(v,E){if(!f)return this;v=v.split(" ");for(var k=this,V=function(R){E.call(k,R)},L=0;L<v.length;L++){var q=v[L],B=q;q=B.split(".")[0],c.push({idx:B,func:V}),this.sound.addEventListener(q,V,!0)}return this},this.unbind=function(v){if(!f)return this;v=v.split(" ");for(var E=0;E<v.length;E++)for(var k=v[E],V=k.split(".")[0],L=0;L<c.length;L++){var q=c[L].idx.split(".");(c[L].idx===k||q[1]&&q[1]===k.replace(".",""))&&(this.sound.removeEventListener(V,c[L].func,!0),c.splice(L,1))}return this},this.bindOnce=function(v,E){if(!f)return this;var k=this;return l[a++]=!1,this.bind(v+"."+a,function(){l[a]||(l[a]=!0,E.call(k)),k.unbind(v+"."+a)}),this},this.trigger=function(v,E){if(!f)return this;v=v.split(" ");for(var k=0;k<v.length;k++)for(var V=v[k],L=0;L<c.length;L++){var q=c[L].idx.split(".");if(c[L].idx===V||q[0]&&q[0]===V.replace(".","")){var B=s.createEvent("HTMLEvents");B.initEvent(q[0],!1,!0),B.originalEvent=E,this.sound.dispatchEvent(B)}}return this},this.fadeTo=function(v,E,k){if(!f)return this;E instanceof Function?(k=E,E=t.defaults.duration):E=E||t.defaults.duration;var V=this.volume,L=E/Math.abs(V-v),q=this,B;this.play();function R(){clearTimeout(B),B=setTimeout(function(){V<v&&q.volume<v?(q.setVolume(q.volume+=1),R()):V>v&&q.volume>v?(q.setVolume(q.volume-=1),R()):k instanceof Function&&k.apply(q)},L)}return this.whenReady(function(){R()}),this},this.fadeIn=function(v,E){return f?this.setVolume(0).fadeTo(100,v,E):this},this.fadeOut=function(v,E){return f?this.fadeTo(0,v,E):this},this.fadeWith=function(v,E){return f?(this.fadeOut(E,function(){this.stop()}),v.play().fadeIn(E),this):this},this.whenReady=function(v){if(!f)return null;var E=this;this.sound.readyState===0?this.bind("canplay.buzzwhenready",function(){v.call(E)}):v.call(E)},this.addSource=function(v){var E=this,k=s.createElement("source");return k.src=v,t.types[u(v)]&&(k.type=t.types[u(v)]),this.sound.appendChild(k),k.addEventListener("error",function(V){E.trigger("sourceerror",V)}),k};function m(v){for(var E=[],k=v.length-1,V=0;V<=k;V++)E.push({start:v.start(V),end:v.end(V)});return E}function u(v){return v.split(".").pop()}if(f&&r){for(var h in t.defaults)t.defaults.hasOwnProperty(h)&&i[h]===void 0&&(i[h]=t.defaults[h]);if(this.sound=s.createElement("audio"),i.crossOrigin!==null&&(this.sound.crossOrigin=i.crossOrigin),i.webAudioApi){var _=t.getAudioContext();_&&(this.source=_.createMediaElementSource(this.sound),this.source.connect(_.destination))}if(r instanceof Array)for(var y in r)r.hasOwnProperty(y)&&this.addSource(r[y]);else if(i.formats.length)for(var I in i.formats)i.formats.hasOwnProperty(I)&&this.addSource(r+"."+i.formats[I]);else this.addSource(r);i.loop&&this.loop(),i.autoplay&&(this.sound.autoplay="autoplay"),i.preload===!0?this.sound.preload="auto":i.preload===!1?this.sound.preload="none":this.sound.preload=i.preload,this.setVolume(i.volume),t.sounds.push(this)}},group:function(r){r=s(r,arguments),this.getSounds=function(){return r},this.add=function(a){a=s(a,arguments);for(var c=0;c<a.length;c++)r.push(a[c])},this.remove=function(a){a=s(a,arguments);for(var c=0;c<a.length;c++)for(var l=0;l<r.length;l++)if(r[l]===a[c]){r.splice(l,1);break}},this.load=function(){return i("load"),this},this.play=function(){return i("play"),this},this.togglePlay=function(){return i("togglePlay"),this},this.pause=function(a){return i("pause",a),this},this.stop=function(){return i("stop"),this},this.mute=function(){return i("mute"),this},this.unmute=function(){return i("unmute"),this},this.toggleMute=function(){return i("toggleMute"),this},this.setVolume=function(a){return i("setVolume",a),this},this.increaseVolume=function(a){return i("increaseVolume",a),this},this.decreaseVolume=function(a){return i("decreaseVolume",a),this},this.loop=function(){return i("loop"),this},this.unloop=function(){return i("unloop"),this},this.setSpeed=function(a){return i("setSpeed",a),this},this.setTime=function(a){return i("setTime",a),this},this.set=function(a,c){return i("set",a,c),this},this.bind=function(a,c){return i("bind",a,c),this},this.unbind=function(a){return i("unbind",a),this},this.bindOnce=function(a,c){return i("bindOnce",a,c),this},this.trigger=function(a){return i("trigger",a),this},this.fade=function(a,c,l,f){return i("fade",a,c,l,f),this},this.fadeIn=function(a,c){return i("fadeIn",a,c),this},this.fadeOut=function(a,c){return i("fadeOut",a,c),this};function i(){for(var a=s(null,arguments),c=a.shift(),l=0;l<r.length;l++)r[l][c].apply(r[l],a)}function s(a,c){return a instanceof Array?a:Array.prototype.slice.call(c)}},all:function(){return new t.group(t.sounds)},isSupported:function(){return!!t.el.canPlayType},isOGGSupported:function(){return!!t.el.canPlayType&&t.el.canPlayType('audio/ogg; codecs="vorbis"')},isWAVSupported:function(){return!!t.el.canPlayType&&t.el.canPlayType('audio/wav; codecs="1"')},isMP3Supported:function(){return!!t.el.canPlayType&&t.el.canPlayType("audio/mpeg;")},isAACSupported:function(){return!!t.el.canPlayType&&(t.el.canPlayType("audio/x-m4a;")||t.el.canPlayType("audio/aac;"))},toTimer:function(r,i){var s,a,c;return s=Math.floor(r/3600),s=isNaN(s)?"--":s>=10?s:"0"+s,a=Math.floor(i?r/60%60:r/60),a=isNaN(a)?"--":a>=10?a:"0"+a,c=Math.floor(r%60),c=isNaN(c)?"--":c>=10?c:"0"+c,i?s+":"+a+":"+c:a+":"+c},fromTimer:function(r){var i=r.toString().split(":");return i&&i.length===3&&(r=parseInt(i[0],10)*3600+parseInt(i[1],10)*60+parseInt(i[2],10)),i&&i.length===2&&(r=parseInt(i[0],10)*60+parseInt(i[1],10)),r},toPercent:function(r,i,s){var a=Math.pow(10,s||0);return Math.round(r*100/i*a)/a},fromPercent:function(r,i,s){var a=Math.pow(10,s||0);return Math.round(i/100*r*a)/a}};return t})}(_s)),_s.exports}rE();var ea={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */var Jl;function iE(){return Jl||(Jl=1,function(n){(function(){var e=function(){this.init()};e.prototype={init:function(){var u=this||t;return u._counter=1e3,u._html5AudioPool=[],u.html5PoolSize=10,u._codecs={},u._howls=[],u._muted=!1,u._volume=1,u._canPlayEvent="canplaythrough",u._navigator=typeof window<"u"&&window.navigator?window.navigator:null,u.masterGain=null,u.noAudio=!1,u.usingWebAudio=!0,u.autoSuspend=!0,u.ctx=null,u.autoUnlock=!0,u._setup(),u},volume:function(u){var h=this||t;if(u=parseFloat(u),h.ctx||m(),typeof u<"u"&&u>=0&&u<=1){if(h._volume=u,h._muted)return h;h.usingWebAudio&&h.masterGain.gain.setValueAtTime(u,t.ctx.currentTime);for(var _=0;_<h._howls.length;_++)if(!h._howls[_]._webAudio)for(var y=h._howls[_]._getSoundIds(),I=0;I<y.length;I++){var v=h._howls[_]._soundById(y[I]);v&&v._node&&(v._node.volume=v._volume*u)}return h}return h._volume},mute:function(u){var h=this||t;h.ctx||m(),h._muted=u,h.usingWebAudio&&h.masterGain.gain.setValueAtTime(u?0:h._volume,t.ctx.currentTime);for(var _=0;_<h._howls.length;_++)if(!h._howls[_]._webAudio)for(var y=h._howls[_]._getSoundIds(),I=0;I<y.length;I++){var v=h._howls[_]._soundById(y[I]);v&&v._node&&(v._node.muted=u?!0:v._muted)}return h},stop:function(){for(var u=this||t,h=0;h<u._howls.length;h++)u._howls[h].stop();return u},unload:function(){for(var u=this||t,h=u._howls.length-1;h>=0;h--)u._howls[h].unload();return u.usingWebAudio&&u.ctx&&typeof u.ctx.close<"u"&&(u.ctx.close(),u.ctx=null,m()),u},codecs:function(u){return(this||t)._codecs[u.replace(/^x-/,"")]},_setup:function(){var u=this||t;if(u.state=u.ctx&&u.ctx.state||"suspended",u._autoSuspend(),!u.usingWebAudio)if(typeof Audio<"u")try{var h=new Audio;typeof h.oncanplaythrough>"u"&&(u._canPlayEvent="canplay")}catch{u.noAudio=!0}else u.noAudio=!0;try{var h=new Audio;h.muted&&(u.noAudio=!0)}catch{}return u.noAudio||u._setupCodecs(),u},_setupCodecs:function(){var u=this||t,h=null;try{h=typeof Audio<"u"?new Audio:null}catch{return u}if(!h||typeof h.canPlayType!="function")return u;var _=h.canPlayType("audio/mpeg;").replace(/^no$/,""),y=u._navigator?u._navigator.userAgent:"",I=y.match(/OPR\/(\d+)/g),v=I&&parseInt(I[0].split("/")[1],10)<33,E=y.indexOf("Safari")!==-1&&y.indexOf("Chrome")===-1,k=y.match(/Version\/(.*?) /),V=E&&k&&parseInt(k[1],10)<15;return u._codecs={mp3:!!(!v&&(_||h.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!_,opus:!!h.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(h.canPlayType('audio/wav; codecs="1"')||h.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!h.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!h.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(h.canPlayType("audio/x-m4a;")||h.canPlayType("audio/m4a;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(h.canPlayType("audio/x-m4b;")||h.canPlayType("audio/m4b;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(h.canPlayType("audio/x-mp4;")||h.canPlayType("audio/mp4;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!V&&h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!V&&h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!h.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(h.canPlayType("audio/x-flac;")||h.canPlayType("audio/flac;")).replace(/^no$/,"")},u},_unlockAudio:function(){var u=this||t;if(!(u._audioUnlocked||!u.ctx)){u._audioUnlocked=!1,u.autoUnlock=!1,!u._mobileUnloaded&&u.ctx.sampleRate!==44100&&(u._mobileUnloaded=!0,u.unload()),u._scratchBuffer=u.ctx.createBuffer(1,1,22050);var h=function(_){for(;u._html5AudioPool.length<u.html5PoolSize;)try{var y=new Audio;y._unlocked=!0,u._releaseHtml5Audio(y)}catch{u.noAudio=!0;break}for(var I=0;I<u._howls.length;I++)if(!u._howls[I]._webAudio)for(var v=u._howls[I]._getSoundIds(),E=0;E<v.length;E++){var k=u._howls[I]._soundById(v[E]);k&&k._node&&!k._node._unlocked&&(k._node._unlocked=!0,k._node.load())}u._autoResume();var V=u.ctx.createBufferSource();V.buffer=u._scratchBuffer,V.connect(u.ctx.destination),typeof V.start>"u"?V.noteOn(0):V.start(0),typeof u.ctx.resume=="function"&&u.ctx.resume(),V.onended=function(){V.disconnect(0),u._audioUnlocked=!0,document.removeEventListener("touchstart",h,!0),document.removeEventListener("touchend",h,!0),document.removeEventListener("click",h,!0),document.removeEventListener("keydown",h,!0);for(var L=0;L<u._howls.length;L++)u._howls[L]._emit("unlock")}};return document.addEventListener("touchstart",h,!0),document.addEventListener("touchend",h,!0),document.addEventListener("click",h,!0),document.addEventListener("keydown",h,!0),u}},_obtainHtml5Audio:function(){var u=this||t;if(u._html5AudioPool.length)return u._html5AudioPool.pop();var h=new Audio().play();return h&&typeof Promise<"u"&&(h instanceof Promise||typeof h.then=="function")&&h.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(u){var h=this||t;return u._unlocked&&h._html5AudioPool.push(u),h},_autoSuspend:function(){var u=this;if(!(!u.autoSuspend||!u.ctx||typeof u.ctx.suspend>"u"||!t.usingWebAudio)){for(var h=0;h<u._howls.length;h++)if(u._howls[h]._webAudio){for(var _=0;_<u._howls[h]._sounds.length;_++)if(!u._howls[h]._sounds[_]._paused)return u}return u._suspendTimer&&clearTimeout(u._suspendTimer),u._suspendTimer=setTimeout(function(){if(u.autoSuspend){u._suspendTimer=null,u.state="suspending";var y=function(){u.state="suspended",u._resumeAfterSuspend&&(delete u._resumeAfterSuspend,u._autoResume())};u.ctx.suspend().then(y,y)}},3e4),u}},_autoResume:function(){var u=this;if(!(!u.ctx||typeof u.ctx.resume>"u"||!t.usingWebAudio))return u.state==="running"&&u.ctx.state!=="interrupted"&&u._suspendTimer?(clearTimeout(u._suspendTimer),u._suspendTimer=null):u.state==="suspended"||u.state==="running"&&u.ctx.state==="interrupted"?(u.ctx.resume().then(function(){u.state="running";for(var h=0;h<u._howls.length;h++)u._howls[h]._emit("resume")}),u._suspendTimer&&(clearTimeout(u._suspendTimer),u._suspendTimer=null)):u.state==="suspending"&&(u._resumeAfterSuspend=!0),u}};var t=new e,r=function(u){var h=this;if(!u.src||u.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}h.init(u)};r.prototype={init:function(u){var h=this;return t.ctx||m(),h._autoplay=u.autoplay||!1,h._format=typeof u.format!="string"?u.format:[u.format],h._html5=u.html5||!1,h._muted=u.mute||!1,h._loop=u.loop||!1,h._pool=u.pool||5,h._preload=typeof u.preload=="boolean"||u.preload==="metadata"?u.preload:!0,h._rate=u.rate||1,h._sprite=u.sprite||{},h._src=typeof u.src!="string"?u.src:[u.src],h._volume=u.volume!==void 0?u.volume:1,h._xhr={method:u.xhr&&u.xhr.method?u.xhr.method:"GET",headers:u.xhr&&u.xhr.headers?u.xhr.headers:null,withCredentials:u.xhr&&u.xhr.withCredentials?u.xhr.withCredentials:!1},h._duration=0,h._state="unloaded",h._sounds=[],h._endTimers={},h._queue=[],h._playLock=!1,h._onend=u.onend?[{fn:u.onend}]:[],h._onfade=u.onfade?[{fn:u.onfade}]:[],h._onload=u.onload?[{fn:u.onload}]:[],h._onloaderror=u.onloaderror?[{fn:u.onloaderror}]:[],h._onplayerror=u.onplayerror?[{fn:u.onplayerror}]:[],h._onpause=u.onpause?[{fn:u.onpause}]:[],h._onplay=u.onplay?[{fn:u.onplay}]:[],h._onstop=u.onstop?[{fn:u.onstop}]:[],h._onmute=u.onmute?[{fn:u.onmute}]:[],h._onvolume=u.onvolume?[{fn:u.onvolume}]:[],h._onrate=u.onrate?[{fn:u.onrate}]:[],h._onseek=u.onseek?[{fn:u.onseek}]:[],h._onunlock=u.onunlock?[{fn:u.onunlock}]:[],h._onresume=[],h._webAudio=t.usingWebAudio&&!h._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(h),h._autoplay&&h._queue.push({event:"play",action:function(){h.play()}}),h._preload&&h._preload!=="none"&&h.load(),h},load:function(){var u=this,h=null;if(t.noAudio){u._emit("loaderror",null,"No audio support.");return}typeof u._src=="string"&&(u._src=[u._src]);for(var _=0;_<u._src.length;_++){var y,I;if(u._format&&u._format[_])y=u._format[_];else{if(I=u._src[_],typeof I!="string"){u._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}y=/^data:audio\/([^;,]+);/i.exec(I),y||(y=/\.([^.]+)$/.exec(I.split("?",1)[0])),y&&(y=y[1].toLowerCase())}if(y||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),y&&t.codecs(y)){h=u._src[_];break}}if(!h){u._emit("loaderror",null,"No codec support for selected audio sources.");return}return u._src=h,u._state="loading",window.location.protocol==="https:"&&h.slice(0,5)==="http:"&&(u._html5=!0,u._webAudio=!1),new i(u),u._webAudio&&a(u),u},play:function(u,h){var _=this,y=null;if(typeof u=="number")y=u,u=null;else{if(typeof u=="string"&&_._state==="loaded"&&!_._sprite[u])return null;if(typeof u>"u"&&(u="__default",!_._playLock)){for(var I=0,v=0;v<_._sounds.length;v++)_._sounds[v]._paused&&!_._sounds[v]._ended&&(I++,y=_._sounds[v]._id);I===1?u=null:y=null}}var E=y?_._soundById(y):_._inactiveSound();if(!E)return null;if(y&&!u&&(u=E._sprite||"__default"),_._state!=="loaded"){E._sprite=u,E._ended=!1;var k=E._id;return _._queue.push({event:"play",action:function(){_.play(k)}}),k}if(y&&!E._paused)return h||_._loadQueue("play"),E._id;_._webAudio&&t._autoResume();var V=Math.max(0,E._seek>0?E._seek:_._sprite[u][0]/1e3),L=Math.max(0,(_._sprite[u][0]+_._sprite[u][1])/1e3-V),q=L*1e3/Math.abs(E._rate),B=_._sprite[u][0]/1e3,R=(_._sprite[u][0]+_._sprite[u][1])/1e3;E._sprite=u,E._ended=!1;var w=function(){E._paused=!1,E._seek=V,E._start=B,E._stop=R,E._loop=!!(E._loop||_._sprite[u][2])};if(V>=R){_._ended(E);return}var T=E._node;if(_._webAudio){var A=function(){_._playLock=!1,w(),_._refreshBuffer(E);var _e=E._muted||_._muted?0:E._volume;T.gain.setValueAtTime(_e,t.ctx.currentTime),E._playStart=t.ctx.currentTime,typeof T.bufferSource.start>"u"?E._loop?T.bufferSource.noteGrainOn(0,V,86400):T.bufferSource.noteGrainOn(0,V,L):E._loop?T.bufferSource.start(0,V,86400):T.bufferSource.start(0,V,L),q!==1/0&&(_._endTimers[E._id]=setTimeout(_._ended.bind(_,E),q)),h||setTimeout(function(){_._emit("play",E._id),_._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?A():(_._playLock=!0,_.once("resume",A),_._clearTimer(E._id))}else{var S=function(){T.currentTime=V,T.muted=E._muted||_._muted||t._muted||T.muted,T.volume=E._volume*t.volume(),T.playbackRate=E._rate;try{var _e=T.play();if(_e&&typeof Promise<"u"&&(_e instanceof Promise||typeof _e.then=="function")?(_._playLock=!0,w(),_e.then(function(){_._playLock=!1,T._unlocked=!0,h?_._loadQueue():_._emit("play",E._id)}).catch(function(){_._playLock=!1,_._emit("playerror",E._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),E._ended=!0,E._paused=!0})):h||(_._playLock=!1,w(),_._emit("play",E._id)),T.playbackRate=E._rate,T.paused){_._emit("playerror",E._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}u!=="__default"||E._loop?_._endTimers[E._id]=setTimeout(_._ended.bind(_,E),q):(_._endTimers[E._id]=function(){_._ended(E),T.removeEventListener("ended",_._endTimers[E._id],!1)},T.addEventListener("ended",_._endTimers[E._id],!1))}catch(Ke){_._emit("playerror",E._id,Ke)}};T.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(T.src=_._src,T.load());var C=window&&window.ejecta||!T.readyState&&t._navigator.isCocoonJS;if(T.readyState>=3||C)S();else{_._playLock=!0,_._state="loading";var b=function(){_._state="loaded",S(),T.removeEventListener(t._canPlayEvent,b,!1)};T.addEventListener(t._canPlayEvent,b,!1),_._clearTimer(E._id)}}return E._id},pause:function(u){var h=this;if(h._state!=="loaded"||h._playLock)return h._queue.push({event:"pause",action:function(){h.pause(u)}}),h;for(var _=h._getSoundIds(u),y=0;y<_.length;y++){h._clearTimer(_[y]);var I=h._soundById(_[y]);if(I&&!I._paused&&(I._seek=h.seek(_[y]),I._rateSeek=0,I._paused=!0,h._stopFade(_[y]),I._node))if(h._webAudio){if(!I._node.bufferSource)continue;typeof I._node.bufferSource.stop>"u"?I._node.bufferSource.noteOff(0):I._node.bufferSource.stop(0),h._cleanBuffer(I._node)}else(!isNaN(I._node.duration)||I._node.duration===1/0)&&I._node.pause();arguments[1]||h._emit("pause",I?I._id:null)}return h},stop:function(u,h){var _=this;if(_._state!=="loaded"||_._playLock)return _._queue.push({event:"stop",action:function(){_.stop(u)}}),_;for(var y=_._getSoundIds(u),I=0;I<y.length;I++){_._clearTimer(y[I]);var v=_._soundById(y[I]);v&&(v._seek=v._start||0,v._rateSeek=0,v._paused=!0,v._ended=!0,_._stopFade(y[I]),v._node&&(_._webAudio?v._node.bufferSource&&(typeof v._node.bufferSource.stop>"u"?v._node.bufferSource.noteOff(0):v._node.bufferSource.stop(0),_._cleanBuffer(v._node)):(!isNaN(v._node.duration)||v._node.duration===1/0)&&(v._node.currentTime=v._start||0,v._node.pause(),v._node.duration===1/0&&_._clearSound(v._node))),h||_._emit("stop",v._id))}return _},mute:function(u,h){var _=this;if(_._state!=="loaded"||_._playLock)return _._queue.push({event:"mute",action:function(){_.mute(u,h)}}),_;if(typeof h>"u")if(typeof u=="boolean")_._muted=u;else return _._muted;for(var y=_._getSoundIds(h),I=0;I<y.length;I++){var v=_._soundById(y[I]);v&&(v._muted=u,v._interval&&_._stopFade(v._id),_._webAudio&&v._node?v._node.gain.setValueAtTime(u?0:v._volume,t.ctx.currentTime):v._node&&(v._node.muted=t._muted?!0:u),_._emit("mute",v._id))}return _},volume:function(){var u=this,h=arguments,_,y;if(h.length===0)return u._volume;if(h.length===1||h.length===2&&typeof h[1]>"u"){var I=u._getSoundIds(),v=I.indexOf(h[0]);v>=0?y=parseInt(h[0],10):_=parseFloat(h[0])}else h.length>=2&&(_=parseFloat(h[0]),y=parseInt(h[1],10));var E;if(typeof _<"u"&&_>=0&&_<=1){if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"volume",action:function(){u.volume.apply(u,h)}}),u;typeof y>"u"&&(u._volume=_),y=u._getSoundIds(y);for(var k=0;k<y.length;k++)E=u._soundById(y[k]),E&&(E._volume=_,h[2]||u._stopFade(y[k]),u._webAudio&&E._node&&!E._muted?E._node.gain.setValueAtTime(_,t.ctx.currentTime):E._node&&!E._muted&&(E._node.volume=_*t.volume()),u._emit("volume",E._id))}else return E=y?u._soundById(y):u._sounds[0],E?E._volume:0;return u},fade:function(u,h,_,y){var I=this;if(I._state!=="loaded"||I._playLock)return I._queue.push({event:"fade",action:function(){I.fade(u,h,_,y)}}),I;u=Math.min(Math.max(0,parseFloat(u)),1),h=Math.min(Math.max(0,parseFloat(h)),1),_=parseFloat(_),I.volume(u,y);for(var v=I._getSoundIds(y),E=0;E<v.length;E++){var k=I._soundById(v[E]);if(k){if(y||I._stopFade(v[E]),I._webAudio&&!k._muted){var V=t.ctx.currentTime,L=V+_/1e3;k._volume=u,k._node.gain.setValueAtTime(u,V),k._node.gain.linearRampToValueAtTime(h,L)}I._startFadeInterval(k,u,h,_,v[E],typeof y>"u")}}return I},_startFadeInterval:function(u,h,_,y,I,v){var E=this,k=h,V=_-h,L=Math.abs(V/.01),q=Math.max(4,L>0?y/L:y),B=Date.now();u._fadeTo=_,u._interval=setInterval(function(){var R=(Date.now()-B)/y;B=Date.now(),k+=V*R,k=Math.round(k*100)/100,V<0?k=Math.max(_,k):k=Math.min(_,k),E._webAudio?u._volume=k:E.volume(k,u._id,!0),v&&(E._volume=k),(_<h&&k<=_||_>h&&k>=_)&&(clearInterval(u._interval),u._interval=null,u._fadeTo=null,E.volume(_,u._id),E._emit("fade",u._id))},q)},_stopFade:function(u){var h=this,_=h._soundById(u);return _&&_._interval&&(h._webAudio&&_._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(_._interval),_._interval=null,h.volume(_._fadeTo,u),_._fadeTo=null,h._emit("fade",u)),h},loop:function(){var u=this,h=arguments,_,y,I;if(h.length===0)return u._loop;if(h.length===1)if(typeof h[0]=="boolean")_=h[0],u._loop=_;else return I=u._soundById(parseInt(h[0],10)),I?I._loop:!1;else h.length===2&&(_=h[0],y=parseInt(h[1],10));for(var v=u._getSoundIds(y),E=0;E<v.length;E++)I=u._soundById(v[E]),I&&(I._loop=_,u._webAudio&&I._node&&I._node.bufferSource&&(I._node.bufferSource.loop=_,_&&(I._node.bufferSource.loopStart=I._start||0,I._node.bufferSource.loopEnd=I._stop,u.playing(v[E])&&(u.pause(v[E],!0),u.play(v[E],!0)))));return u},rate:function(){var u=this,h=arguments,_,y;if(h.length===0)y=u._sounds[0]._id;else if(h.length===1){var I=u._getSoundIds(),v=I.indexOf(h[0]);v>=0?y=parseInt(h[0],10):_=parseFloat(h[0])}else h.length===2&&(_=parseFloat(h[0]),y=parseInt(h[1],10));var E;if(typeof _=="number"){if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"rate",action:function(){u.rate.apply(u,h)}}),u;typeof y>"u"&&(u._rate=_),y=u._getSoundIds(y);for(var k=0;k<y.length;k++)if(E=u._soundById(y[k]),E){u.playing(y[k])&&(E._rateSeek=u.seek(y[k]),E._playStart=u._webAudio?t.ctx.currentTime:E._playStart),E._rate=_,u._webAudio&&E._node&&E._node.bufferSource?E._node.bufferSource.playbackRate.setValueAtTime(_,t.ctx.currentTime):E._node&&(E._node.playbackRate=_);var V=u.seek(y[k]),L=(u._sprite[E._sprite][0]+u._sprite[E._sprite][1])/1e3-V,q=L*1e3/Math.abs(E._rate);(u._endTimers[y[k]]||!E._paused)&&(u._clearTimer(y[k]),u._endTimers[y[k]]=setTimeout(u._ended.bind(u,E),q)),u._emit("rate",E._id)}}else return E=u._soundById(y),E?E._rate:u._rate;return u},seek:function(){var u=this,h=arguments,_,y;if(h.length===0)u._sounds.length&&(y=u._sounds[0]._id);else if(h.length===1){var I=u._getSoundIds(),v=I.indexOf(h[0]);v>=0?y=parseInt(h[0],10):u._sounds.length&&(y=u._sounds[0]._id,_=parseFloat(h[0]))}else h.length===2&&(_=parseFloat(h[0]),y=parseInt(h[1],10));if(typeof y>"u")return 0;if(typeof _=="number"&&(u._state!=="loaded"||u._playLock))return u._queue.push({event:"seek",action:function(){u.seek.apply(u,h)}}),u;var E=u._soundById(y);if(E)if(typeof _=="number"&&_>=0){var k=u.playing(y);k&&u.pause(y,!0),E._seek=_,E._ended=!1,u._clearTimer(y),!u._webAudio&&E._node&&!isNaN(E._node.duration)&&(E._node.currentTime=_);var V=function(){k&&u.play(y,!0),u._emit("seek",y)};if(k&&!u._webAudio){var L=function(){u._playLock?setTimeout(L,0):V()};setTimeout(L,0)}else V()}else if(u._webAudio){var q=u.playing(y)?t.ctx.currentTime-E._playStart:0,B=E._rateSeek?E._rateSeek-E._seek:0;return E._seek+(B+q*Math.abs(E._rate))}else return E._node.currentTime;return u},playing:function(u){var h=this;if(typeof u=="number"){var _=h._soundById(u);return _?!_._paused:!1}for(var y=0;y<h._sounds.length;y++)if(!h._sounds[y]._paused)return!0;return!1},duration:function(u){var h=this,_=h._duration,y=h._soundById(u);return y&&(_=h._sprite[y._sprite][1]/1e3),_},state:function(){return this._state},unload:function(){for(var u=this,h=u._sounds,_=0;_<h.length;_++)h[_]._paused||u.stop(h[_]._id),u._webAudio||(u._clearSound(h[_]._node),h[_]._node.removeEventListener("error",h[_]._errorFn,!1),h[_]._node.removeEventListener(t._canPlayEvent,h[_]._loadFn,!1),h[_]._node.removeEventListener("ended",h[_]._endFn,!1),t._releaseHtml5Audio(h[_]._node)),delete h[_]._node,u._clearTimer(h[_]._id);var y=t._howls.indexOf(u);y>=0&&t._howls.splice(y,1);var I=!0;for(_=0;_<t._howls.length;_++)if(t._howls[_]._src===u._src||u._src.indexOf(t._howls[_]._src)>=0){I=!1;break}return I&&delete s[u._src],t.noAudio=!1,u._state="unloaded",u._sounds=[],u=null,null},on:function(u,h,_,y){var I=this,v=I["_on"+u];return typeof h=="function"&&v.push(y?{id:_,fn:h,once:y}:{id:_,fn:h}),I},off:function(u,h,_){var y=this,I=y["_on"+u],v=0;if(typeof h=="number"&&(_=h,h=null),h||_)for(v=0;v<I.length;v++){var E=_===I[v].id;if(h===I[v].fn&&E||!h&&E){I.splice(v,1);break}}else if(u)y["_on"+u]=[];else{var k=Object.keys(y);for(v=0;v<k.length;v++)k[v].indexOf("_on")===0&&Array.isArray(y[k[v]])&&(y[k[v]]=[])}return y},once:function(u,h,_){var y=this;return y.on(u,h,_,1),y},_emit:function(u,h,_){for(var y=this,I=y["_on"+u],v=I.length-1;v>=0;v--)(!I[v].id||I[v].id===h||u==="load")&&(setTimeout((function(E){E.call(this,h,_)}).bind(y,I[v].fn),0),I[v].once&&y.off(u,I[v].fn,I[v].id));return y._loadQueue(u),y},_loadQueue:function(u){var h=this;if(h._queue.length>0){var _=h._queue[0];_.event===u&&(h._queue.shift(),h._loadQueue()),u||_.action()}return h},_ended:function(u){var h=this,_=u._sprite;if(!h._webAudio&&u._node&&!u._node.paused&&!u._node.ended&&u._node.currentTime<u._stop)return setTimeout(h._ended.bind(h,u),100),h;var y=!!(u._loop||h._sprite[_][2]);if(h._emit("end",u._id),!h._webAudio&&y&&h.stop(u._id,!0).play(u._id),h._webAudio&&y){h._emit("play",u._id),u._seek=u._start||0,u._rateSeek=0,u._playStart=t.ctx.currentTime;var I=(u._stop-u._start)*1e3/Math.abs(u._rate);h._endTimers[u._id]=setTimeout(h._ended.bind(h,u),I)}return h._webAudio&&!y&&(u._paused=!0,u._ended=!0,u._seek=u._start||0,u._rateSeek=0,h._clearTimer(u._id),h._cleanBuffer(u._node),t._autoSuspend()),!h._webAudio&&!y&&h.stop(u._id,!0),h},_clearTimer:function(u){var h=this;if(h._endTimers[u]){if(typeof h._endTimers[u]!="function")clearTimeout(h._endTimers[u]);else{var _=h._soundById(u);_&&_._node&&_._node.removeEventListener("ended",h._endTimers[u],!1)}delete h._endTimers[u]}return h},_soundById:function(u){for(var h=this,_=0;_<h._sounds.length;_++)if(u===h._sounds[_]._id)return h._sounds[_];return null},_inactiveSound:function(){var u=this;u._drain();for(var h=0;h<u._sounds.length;h++)if(u._sounds[h]._ended)return u._sounds[h].reset();return new i(u)},_drain:function(){var u=this,h=u._pool,_=0,y=0;if(!(u._sounds.length<h)){for(y=0;y<u._sounds.length;y++)u._sounds[y]._ended&&_++;for(y=u._sounds.length-1;y>=0;y--){if(_<=h)return;u._sounds[y]._ended&&(u._webAudio&&u._sounds[y]._node&&u._sounds[y]._node.disconnect(0),u._sounds.splice(y,1),_--)}}},_getSoundIds:function(u){var h=this;if(typeof u>"u"){for(var _=[],y=0;y<h._sounds.length;y++)_.push(h._sounds[y]._id);return _}else return[u]},_refreshBuffer:function(u){var h=this;return u._node.bufferSource=t.ctx.createBufferSource(),u._node.bufferSource.buffer=s[h._src],u._panner?u._node.bufferSource.connect(u._panner):u._node.bufferSource.connect(u._node),u._node.bufferSource.loop=u._loop,u._loop&&(u._node.bufferSource.loopStart=u._start||0,u._node.bufferSource.loopEnd=u._stop||0),u._node.bufferSource.playbackRate.setValueAtTime(u._rate,t.ctx.currentTime),h},_cleanBuffer:function(u){var h=this,_=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!u.bufferSource)return h;if(t._scratchBuffer&&u.bufferSource&&(u.bufferSource.onended=null,u.bufferSource.disconnect(0),_))try{u.bufferSource.buffer=t._scratchBuffer}catch{}return u.bufferSource=null,h},_clearSound:function(u){var h=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);h||(u.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(u){this._parent=u,this.init()};i.prototype={init:function(){var u=this,h=u._parent;return u._muted=h._muted,u._loop=h._loop,u._volume=h._volume,u._rate=h._rate,u._seek=0,u._paused=!0,u._ended=!0,u._sprite="__default",u._id=++t._counter,h._sounds.push(u),u.create(),u},create:function(){var u=this,h=u._parent,_=t._muted||u._muted||u._parent._muted?0:u._volume;return h._webAudio?(u._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),u._node.gain.setValueAtTime(_,t.ctx.currentTime),u._node.paused=!0,u._node.connect(t.masterGain)):t.noAudio||(u._node=t._obtainHtml5Audio(),u._errorFn=u._errorListener.bind(u),u._node.addEventListener("error",u._errorFn,!1),u._loadFn=u._loadListener.bind(u),u._node.addEventListener(t._canPlayEvent,u._loadFn,!1),u._endFn=u._endListener.bind(u),u._node.addEventListener("ended",u._endFn,!1),u._node.src=h._src,u._node.preload=h._preload===!0?"auto":h._preload,u._node.volume=_*t.volume(),u._node.load()),u},reset:function(){var u=this,h=u._parent;return u._muted=h._muted,u._loop=h._loop,u._volume=h._volume,u._rate=h._rate,u._seek=0,u._rateSeek=0,u._paused=!0,u._ended=!0,u._sprite="__default",u._id=++t._counter,u},_errorListener:function(){var u=this;u._parent._emit("loaderror",u._id,u._node.error?u._node.error.code:0),u._node.removeEventListener("error",u._errorFn,!1)},_loadListener:function(){var u=this,h=u._parent;h._duration=Math.ceil(u._node.duration*10)/10,Object.keys(h._sprite).length===0&&(h._sprite={__default:[0,h._duration*1e3]}),h._state!=="loaded"&&(h._state="loaded",h._emit("load"),h._loadQueue()),u._node.removeEventListener(t._canPlayEvent,u._loadFn,!1)},_endListener:function(){var u=this,h=u._parent;h._duration===1/0&&(h._duration=Math.ceil(u._node.duration*10)/10,h._sprite.__default[1]===1/0&&(h._sprite.__default[1]=h._duration*1e3),h._ended(u)),u._node.removeEventListener("ended",u._endFn,!1)}};var s={},a=function(u){var h=u._src;if(s[h]){u._duration=s[h].duration,f(u);return}if(/^data:[^;]+;base64,/.test(h)){for(var _=atob(h.split(",")[1]),y=new Uint8Array(_.length),I=0;I<_.length;++I)y[I]=_.charCodeAt(I);l(y.buffer,u)}else{var v=new XMLHttpRequest;v.open(u._xhr.method,h,!0),v.withCredentials=u._xhr.withCredentials,v.responseType="arraybuffer",u._xhr.headers&&Object.keys(u._xhr.headers).forEach(function(E){v.setRequestHeader(E,u._xhr.headers[E])}),v.onload=function(){var E=(v.status+"")[0];if(E!=="0"&&E!=="2"&&E!=="3"){u._emit("loaderror",null,"Failed loading audio file with status: "+v.status+".");return}l(v.response,u)},v.onerror=function(){u._webAudio&&(u._html5=!0,u._webAudio=!1,u._sounds=[],delete s[h],u.load())},c(v)}},c=function(u){try{u.send()}catch{u.onerror()}},l=function(u,h){var _=function(){h._emit("loaderror",null,"Decoding audio data failed.")},y=function(I){I&&h._sounds.length>0?(s[h._src]=I,f(h,I)):_()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(u).then(y).catch(_):t.ctx.decodeAudioData(u,y,_)},f=function(u,h){h&&!u._duration&&(u._duration=h.duration),Object.keys(u._sprite).length===0&&(u._sprite={__default:[0,u._duration*1e3]}),u._state!=="loaded"&&(u._state="loaded",u._emit("load"),u._loadQueue())},m=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var u=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),h=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),_=h?parseInt(h[1],10):null;if(u&&_&&_<9){var y=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!y&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};n.Howler=t,n.Howl=r,typeof Hr<"u"?(Hr.HowlerGlobal=e,Hr.Howler=t,Hr.Howl=r,Hr.Sound=i):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=r,window.Sound=i)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var r=this;if(!r.ctx||!r.ctx.listener)return r;for(var i=r._howls.length-1;i>=0;i--)r._howls[i].stereo(t);return r},HowlerGlobal.prototype.pos=function(t,r,i){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(r=typeof r!="number"?s._pos[1]:r,i=typeof i!="number"?s._pos[2]:i,typeof t=="number")s._pos=[t,r,i],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(t,r,i,s,a,c){var l=this;if(!l.ctx||!l.ctx.listener)return l;var f=l._orientation;if(r=typeof r!="number"?f[1]:r,i=typeof i!="number"?f[2]:i,s=typeof s!="number"?f[3]:s,a=typeof a!="number"?f[4]:a,c=typeof c!="number"?f[5]:c,typeof t=="number")l._orientation=[t,r,i,s,a,c],typeof l.ctx.listener.forwardX<"u"?(l.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),l.ctx.listener.forwardY.setTargetAtTime(r,Howler.ctx.currentTime,.1),l.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),l.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),l.ctx.listener.upY.setTargetAtTime(a,Howler.ctx.currentTime,.1),l.ctx.listener.upZ.setTargetAtTime(c,Howler.ctx.currentTime,.1)):l.ctx.listener.setOrientation(t,r,i,s,a,c);else return f;return l},Howl.prototype.init=function(t){return function(r){var i=this;return i._orientation=r.orientation||[1,0,0],i._stereo=r.stereo||null,i._pos=r.pos||null,i._pannerAttr={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:360,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:360,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:0,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:"inverse",maxDistance:typeof r.maxDistance<"u"?r.maxDistance:1e4,panningModel:typeof r.panningModel<"u"?r.panningModel:"HRTF",refDistance:typeof r.refDistance<"u"?r.refDistance:1,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:1},i._onstereo=r.onstereo?[{fn:r.onstereo}]:[],i._onpos=r.onpos?[{fn:r.onpos}]:[],i._onorientation=r.onorientation?[{fn:r.onorientation}]:[],t.call(this,r)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,r){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(t,r)}}),i;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof r>"u")if(typeof t=="number")i._stereo=t,i._pos=[t,0,0];else return i._stereo;for(var a=i._getSoundIds(r),c=0;c<a.length;c++){var l=i._soundById(a[c]);if(l)if(typeof t=="number")l._stereo=t,l._pos=[t,0,0],l._node&&(l._pannerAttr.panningModel="equalpower",(!l._panner||!l._panner.pan)&&e(l,s),s==="spatial"?typeof l._panner.positionX<"u"?(l._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),l._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),l._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):l._panner.setPosition(t,0,0):l._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),i._emit("stereo",l._id);else return l._stereo}return i},Howl.prototype.pos=function(t,r,i,s){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"pos",action:function(){a.pos(t,r,i,s)}}),a;if(r=typeof r!="number"?0:r,i=typeof i!="number"?-.5:i,typeof s>"u")if(typeof t=="number")a._pos=[t,r,i];else return a._pos;for(var c=a._getSoundIds(s),l=0;l<c.length;l++){var f=a._soundById(c[l]);if(f)if(typeof t=="number")f._pos=[t,r,i],f._node&&((!f._panner||f._panner.pan)&&e(f,"spatial"),typeof f._panner.positionX<"u"?(f._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),f._panner.positionY.setValueAtTime(r,Howler.ctx.currentTime),f._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):f._panner.setPosition(t,r,i)),a._emit("pos",f._id);else return f._pos}return a},Howl.prototype.orientation=function(t,r,i,s){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"orientation",action:function(){a.orientation(t,r,i,s)}}),a;if(r=typeof r!="number"?a._orientation[1]:r,i=typeof i!="number"?a._orientation[2]:i,typeof s>"u")if(typeof t=="number")a._orientation=[t,r,i];else return a._orientation;for(var c=a._getSoundIds(s),l=0;l<c.length;l++){var f=a._soundById(c[l]);if(f)if(typeof t=="number")f._orientation=[t,r,i],f._node&&(f._panner||(f._pos||(f._pos=a._pos||[0,0,-.5]),e(f,"spatial")),typeof f._panner.orientationX<"u"?(f._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),f._panner.orientationY.setValueAtTime(r,Howler.ctx.currentTime),f._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):f._panner.setOrientation(t,r,i)),a._emit("orientation",f._id);else return f._orientation}return a},Howl.prototype.pannerAttr=function(){var t=this,r=arguments,i,s,a;if(!t._webAudio)return t;if(r.length===0)return t._pannerAttr;if(r.length===1)if(typeof r[0]=="object")i=r[0],typeof s>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),t._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:t._panningModel});else return a=t._soundById(parseInt(r[0],10)),a?a._pannerAttr:t._pannerAttr;else r.length===2&&(i=r[0],s=parseInt(r[1],10));for(var c=t._getSoundIds(s),l=0;l<c.length;l++)if(a=t._soundById(c[l]),a){var f=a._pannerAttr;f={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:f.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:f.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:f.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:f.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:f.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:f.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:f.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:f.panningModel};var m=a._panner;m||(a._pos||(a._pos=t._pos||[0,0,-.5]),e(a,"spatial"),m=a._panner),m.coneInnerAngle=f.coneInnerAngle,m.coneOuterAngle=f.coneOuterAngle,m.coneOuterGain=f.coneOuterGain,m.distanceModel=f.distanceModel,m.maxDistance=f.maxDistance,m.refDistance=f.refDistance,m.rolloffFactor=f.rolloffFactor,m.panningModel=f.panningModel}return t},Sound.prototype.init=function(t){return function(){var r=this,i=r._parent;r._orientation=i._orientation,r._stereo=i._stereo,r._pos=i._pos,r._pannerAttr=i._pannerAttr,t.call(this),r._stereo?i.stereo(r._stereo):r._pos&&i.pos(r._pos[0],r._pos[1],r._pos[2],r._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var r=this,i=r._parent;return r._orientation=i._orientation,r._stereo=i._stereo,r._pos=i._pos,r._pannerAttr=i._pannerAttr,r._stereo?i.stereo(r._stereo):r._pos?i.pos(r._pos[0],r._pos[1],r._pos[2],r._id):r._panner&&(r._panner.disconnect(0),r._panner=void 0,i._refreshBuffer(r)),t.call(this)}}(Sound.prototype.reset);var e=function(t,r){r=r||"spatial",r==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()}(ea)),ea}var ta=iE();function sE(n,e,t){e.stop(),fn(Ls,"main")}var oE=bn('<button type="button" class="absolute left-[47.5%] top-1 bg-transparent rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"><svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button> <!>',1);function aE(n,e){gr(e,!1);const t=Ya(),r=()=>Et(GT,"$isOnMobile",t),i=()=>Et(Ls,"$page",t),s=()=>Et(Fs,"$firebase_app",t),a=()=>Et(hr,"$user",t);var c=new ta.Howl({src:["./assets/sounds/song.wav"],loop:!0,volume:.1});let l=at(e,"question_set",12);const f=4,m=.03,u=.1,h=.4,_=15,y=.8,I=1e3;let v=50,E=20,k=150;r()&&(v*=.6,E*=.6,k*=.6);const V=v,L=E,q=k,B=5;let R=[];l(l().questions=Zo(JSON.parse(JSON.stringify(l().questions))),!0);let w=new tE,T,A=[],S={x:0,y:0};function C(M){return/[\u0590-\u08FF]/.test(M)&&(M=`‏${M}`,/[^\w\u0590-\u08FF]$/.test(M)&&(M=`${M}‏`)),M}function b(){if(w.GetAverageScore()>dr/2){let oe=l().questions.pop();oe?T=w.AddToPool(oe):(w.GetAverageScore()>dr*.9,T=w.GetRandomQuestion())}else T=w.GetRandomQuestion();T.wrong_answers=Zo(T.wrong_answers),A=[],A.push({answer:T.answer,x:0,y:0,target_y:0,target_x:0}),T.wrong_answers.forEach(oe=>{A.length<f&&A.push({answer:oe,x:0,y:0,target_y:0,target_x:0})}),A=Zo(A),_e()}function _e(){(A.length>f||A.length<2)&&alert("Answers length is not good");for(let M=0;M<A.length;M++){let oe=R[M].x,Fe=R[M].y;A[M].target_x=oe,A[M].target_y=Fe,A[M].x=is(oe*(1-u),oe*(1+u)),A[M].y=is(Fe*(1-u),Fe*(1+u))}}let Ke,Vn;var rn=new ta.Howl({src:["./assets/sounds/correct_v2.mp3"],volume:.5}),sn=new ta.Howl({src:["./assets/sounds/wrong_v2.mp3"],volume:.5});l().config.music&&c.play();const Nn=kf(s());async function ki(){if(a())for(const M of w.questions)try{const oe=await UT(mT(Nn,"game_scores",a().uid.toString(),l().name,M.id.toString()),{score:M.score});console.log("Document written with ID: ",M.id)}catch(oe){console.error("Error adding document: ",oe)}}async function Eo(){if(a()){const M=Cf(Nn,"game_scores",a().uid.toString(),l().name),oe=kT(M,DT("score",">",0));(await FT(oe)).forEach(Ge=>{console.log("doc data =>",Ge.data());let Xe=l().questions.findIndex(Ue=>Ue.id==Ge.id);if(Xe>=0){let Ue=l().questions[Xe];l().questions.splice(Xe,1);let yt=w.AddToPool(Ue);yt.score=Ge.data().score}}),console.log("Pool: ",w)}}let Qe=ca(!1);Eo().then(()=>{if(w.questions.length<B)for(let M=0;M<B-w.questions.length;M++)w.AddToPool(l().questions.pop());je(Qe,!0)});const me=M=>{let oe=null,Fe=0,Ge=!1,Xe=null,Ue={x:M.windowWidth/2,y:M.windowHeight*2},yt=0,Rr=()=>{for(let W=0;W<A.length;W++){let Ot=A[W].target_x-A[W].x,Pr=A[W].target_y-A[W].y;oe||(Math.abs(Ot)<m&&Math.abs(Pr)<m&&(A[W].target_x*=is(1-u,1+u),A[W].target_x>R[W].x*(u+1)&&(A[W].target_x=R[W].x*(1-u)),A[W].target_x<R[W].x*(1-u)&&(A[W].target_x=R[W].x+(u+1)),A[W].target_y*=is(1-u,1+u),A[W].target_y>R[W].y*(u+1)&&(A[W].target_y=R[W].y*(1-u)),A[W].target_y<R[W].y*(1-u)&&(A[W].target_y=R[W].y+(u+1))),A[W].x+=Ot*m,A[W].y+=Pr*m),M.textSize(V),M.textAlign(M.CENTER);let Cr=Date.now()-Fe;oe&&A[W].answer==T.answer&&Cr%I<I/2?M.fill(23,190,187):M.fill(118,176,65);let Vi=C(A[W].answer);M.text(Vi,A[W].x,A[W].y);let kr=A[W];oe||M.dist(kr.x,kr.y,S.x,S.y)<q&&(console.log("Colides"),oe=kr.answer,oe==T.answer?(rn.play(),Ge=!0,Xe=M.loadImage("./assets/images/tick.png")):(sn.play(),Fe=Date.now(),Xe=M.loadImage("./assets/images/Red_X.png")))}},Sr=()=>{ki(),b(),S={x:Ke,y:Vn},oe=null,yt=y,Ue={x:M.windowWidth/2,y:M.windowHeight*2},Ge=!1,Fe=0};M.setup=()=>{Ke=M.windowWidth/2,Vn=M.windowHeight/2,S.x=Ke,S.y=Vn,M.createCanvas(M.windowWidth,M.windowHeight);for(let W=-1;W<2;W+=2)for(let Ot=-1;Ot<2;Ot+=2)R.push({x:M.windowWidth*(.5+.25*Ot),y:M.windowHeight*(.5+.25*W)});Sr()},M.draw=()=>{M.background(46,40,42),oe&&(M.imageMode(M.CENTER),M.image(Xe,Ue.x,Ue.y,M.windowWidth*h,M.windowWidth*h),Ue.y>Vn?(Ue.y-=_,yt=Date.now()):Date.now()-yt>y*1e3&&(Ge?T.AddScore(l().config.learning_rate):T.RemoveScore(l().config.learning_rate),Sr())),Rr();let W=C(T.question);M.textSize(L),M.fill(255,201,20),M.textAlign(M.CENTER),M.textFont(),M.text(W,S.x,S.y)},M.mouseDragged=()=>{M.mouseX>S.x-q&&M.mouseX<S.x+q&&M.mouseY>S.y-q&&M.mouseY<S.y+q&&(S.x=M.mouseX,S.y=M.mouseY)}};console.log("Here"),vi();var Di=oE(),Nt=Es(Di);Nt.__click=[sE,c,i];var Io=ti(Nt,2);{var On=M=>{ZT(M,{sketch:me})};us(Io,M=>{he(Qe)&&M(On)})}Tt(n,Di),yr()}Xa(["click"]);var uE="firebase",cE="11.1.0";/**
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
 */We(uE,cE,"app");const jf="@firebase/installations",ku="0.6.11";/**
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
 */const $f=1e4,Hf=`w:${ku}`,Gf="FIS_v2",lE="https://firebaseinstallations.googleapis.com/v1",hE=60*60*1e3,dE="installations",fE="Installations";/**
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
 */const pE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Tn=new Rn(dE,fE,pE);function zf(n){return n instanceof ot&&n.code.includes("request-failed")}/**
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
 */function Wf({projectId:n}){return`${lE}/projects/${n}/installations`}function Kf(n){return{token:n.token,requestStatus:2,expiresIn:mE(n.expiresIn),creationTime:Date.now()}}async function Qf(n,e){const r=(await e.json()).error;return Tn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Xf({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function _E(n,{refreshToken:e}){const t=Xf(n);return t.append("Authorization",gE(e)),t}async function Yf(n){const e=await n();return e.status>=500&&e.status<600?n():e}function mE(n){return Number(n.replace("s","000"))}function gE(n){return`${Gf} ${n}`}/**
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
 */async function yE({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Wf(n),i=Xf(n),s=e.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={fid:t,authVersion:Gf,appId:n.appId,sdkVersion:Hf},c={method:"POST",headers:i,body:JSON.stringify(a)},l=await Yf(()=>fetch(r,c));if(l.ok){const f=await l.json();return{fid:f.fid||t,registrationStatus:2,refreshToken:f.refreshToken,authToken:Kf(f.authToken)}}else throw await Qf("Create Installation",l)}/**
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
 */function Jf(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function vE(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const wE=/^[cdef][\w-]{21}$/,Ma="";function TE(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=EE(n);return wE.test(t)?t:Ma}catch{return Ma}}function EE(n){return vE(n).substr(0,22)}/**
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
 */function go(n){return`${n.appName}!${n.appId}`}/**
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
 */const Zf=new Map;function ep(n,e){const t=go(n);tp(t,e),IE(t,e)}function tp(n,e){const t=Zf.get(n);if(t)for(const r of t)r(e)}function IE(n,e){const t=AE();t&&t.postMessage({key:n,fid:e}),bE()}let _n=null;function AE(){return!_n&&"BroadcastChannel"in self&&(_n=new BroadcastChannel("[Firebase] FID Change"),_n.onmessage=n=>{tp(n.data.key,n.data.fid)}),_n}function bE(){Zf.size===0&&_n&&(_n.close(),_n=null)}/**
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
 */const RE="firebase-installations-database",SE=1,En="firebase-installations-store";let na=null;function Du(){return na||(na=fd(RE,SE,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(En)}}})),na}async function Us(n,e){const t=go(n),i=(await Du()).transaction(En,"readwrite"),s=i.objectStore(En),a=await s.get(t);return await s.put(e,t),await i.done,(!a||a.fid!==e.fid)&&ep(n,e.fid),e}async function np(n){const e=go(n),r=(await Du()).transaction(En,"readwrite");await r.objectStore(En).delete(e),await r.done}async function yo(n,e){const t=go(n),i=(await Du()).transaction(En,"readwrite"),s=i.objectStore(En),a=await s.get(t),c=e(a);return c===void 0?await s.delete(t):await s.put(c,t),await i.done,c&&(!a||a.fid!==c.fid)&&ep(n,c.fid),c}/**
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
 */async function Vu(n){let e;const t=await yo(n.appConfig,r=>{const i=PE(r),s=CE(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===Ma?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function PE(n){const e=n||{fid:TE(),registrationStatus:0};return rp(e)}function CE(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Tn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=kE(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:DE(n)}:{installationEntry:e}}async function kE(n,e){try{const t=await yE(n,e);return Us(n.appConfig,t)}catch(t){throw zf(t)&&t.customData.serverCode===409?await np(n.appConfig):await Us(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function DE(n){let e=await Zl(n.appConfig);for(;e.registrationStatus===1;)await Jf(100),e=await Zl(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Vu(n);return r||t}return e}function Zl(n){return yo(n,e=>{if(!e)throw Tn.create("installation-not-found");return rp(e)})}function rp(n){return VE(n)?{fid:n.fid,registrationStatus:0}:n}function VE(n){return n.registrationStatus===1&&n.registrationTime+$f<Date.now()}/**
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
 */async function NE({appConfig:n,heartbeatServiceProvider:e},t){const r=OE(n,t),i=_E(n,t),s=e.getImmediate({optional:!0});if(s){const f=await s.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={installation:{sdkVersion:Hf,appId:n.appId}},c={method:"POST",headers:i,body:JSON.stringify(a)},l=await Yf(()=>fetch(r,c));if(l.ok){const f=await l.json();return Kf(f)}else throw await Qf("Generate Auth Token",l)}function OE(n,{fid:e}){return`${Wf(n)}/${e}/authTokens:generate`}/**
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
 */async function Nu(n,e=!1){let t;const r=await yo(n.appConfig,s=>{if(!ip(s))throw Tn.create("not-registered");const a=s.authToken;if(!e&&LE(a))return s;if(a.requestStatus===1)return t=xE(n,e),s;{if(!navigator.onLine)throw Tn.create("app-offline");const c=UE(s);return t=ME(n,c),c}});return t?await t:r.authToken}async function xE(n,e){let t=await eh(n.appConfig);for(;t.authToken.requestStatus===1;)await Jf(100),t=await eh(n.appConfig);const r=t.authToken;return r.requestStatus===0?Nu(n,e):r}function eh(n){return yo(n,e=>{if(!ip(e))throw Tn.create("not-registered");const t=e.authToken;return BE(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ME(n,e){try{const t=await NE(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Us(n.appConfig,r),t}catch(t){if(zf(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await np(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Us(n.appConfig,r)}throw t}}function ip(n){return n!==void 0&&n.registrationStatus===2}function LE(n){return n.requestStatus===2&&!FE(n)}function FE(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+hE}function UE(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function BE(n){return n.requestStatus===1&&n.requestTime+$f<Date.now()}/**
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
 */async function qE(n){const e=n,{installationEntry:t,registrationPromise:r}=await Vu(e);return r?r.catch(console.error):Nu(e).catch(console.error),t.fid}/**
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
 */async function jE(n,e=!1){const t=n;return await $E(t),(await Nu(t,e)).token}async function $E(n){const{registrationPromise:e}=await Vu(n);e&&await e}/**
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
 */function HE(n){if(!n||!n.options)throw ra("App Configuration");if(!n.name)throw ra("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw ra(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ra(n){return Tn.create("missing-app-config-values",{valueName:n})}/**
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
 */const sp="installations",GE="installations-internal",zE=n=>{const e=n.getProvider("app").getImmediate(),t=HE(e),r=Sn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},WE=n=>{const e=n.getProvider("app").getImmediate(),t=Sn(e,sp).getImmediate();return{getId:()=>qE(t),getToken:i=>jE(t,i)}};function KE(){pt(new rt(sp,zE,"PUBLIC")),pt(new rt(GE,WE,"PRIVATE"))}KE();We(jf,ku);We(jf,ku,"esm2017");/**
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
 */const Bs="analytics",QE="firebase_id",XE="origin",YE=60*1e3,JE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ou="https://www.googletagmanager.com/gtag/js";/**
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
 */const xe=new eo("@firebase/analytics");/**
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
 */const ZE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},He=new Rn("analytics","Analytics",ZE);/**
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
 */function eI(n){if(!n.startsWith(Ou)){const e=He.create("invalid-gtag-resource",{gtagURL:n});return xe.warn(e.message),""}return n}function op(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function tI(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function nI(n,e){const t=tI("firebase-js-sdk-policy",{createScriptURL:eI}),r=document.createElement("script"),i=`${Ou}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function rI(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function iI(n,e,t,r,i,s){const a=r[i];try{if(a)await e[a];else{const l=(await op(t)).find(f=>f.measurementId===i);l&&await e[l.appId]}}catch(c){xe.error(c)}n("config",i,s)}async function sI(n,e,t,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const c=await op(t);for(const l of a){const f=c.find(u=>u.measurementId===l),m=f&&e[f.appId];if(m)s.push(m);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",r,i||{})}catch(s){xe.error(s)}}function oI(n,e,t,r){async function i(s,...a){try{if(s==="event"){const[c,l]=a;await sI(n,e,t,c,l)}else if(s==="config"){const[c,l]=a;await iI(n,e,t,r,c,l)}else if(s==="consent"){const[c,l]=a;n("consent",c,l)}else if(s==="get"){const[c,l,f]=a;n("get",c,l,f)}else if(s==="set"){const[c]=a;n("set",c)}else n(s,...a)}catch(c){xe.error(c)}}return i}function aI(n,e,t,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=oI(s,n,e,t),{gtagCore:s,wrappedGtag:window[i]}}function uI(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ou)&&t.src.includes(n))return t;return null}/**
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
 */const cI=30,lI=1e3;class hI{constructor(e={},t=lI){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ap=new hI;function dI(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function fI(n){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:dI(r)},s=JE.replace("{app-id}",t),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let c="";try{const l=await a.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw He.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function pI(n,e=ap,t){const{appId:r,apiKey:i,measurementId:s}=n.options;if(!r)throw He.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw He.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new gI;return setTimeout(async()=>{c.abort()},YE),up({appId:r,apiKey:i,measurementId:s},a,c,e)}async function up(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=ap){var s;const{appId:a,measurementId:c}=n;try{await _I(r,e)}catch(l){if(c)return xe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:c};throw l}try{const l=await fI(n);return i.deleteThrottleMetadata(a),l}catch(l){const f=l;if(!mI(f)){if(i.deleteThrottleMetadata(a),c)return xe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:a,measurementId:c};throw l}const m=Number((s=f==null?void 0:f.customData)===null||s===void 0?void 0:s.httpStatus)===503?Zc(t,i.intervalMillis,cI):Zc(t,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+m,backoffCount:t+1};return i.setThrottleMetadata(a,u),xe.debug(`Calling attemptFetch again in ${m} millis`),up(n,u,r,i)}}function _I(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(s),r(He.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function mI(n){if(!(n instanceof ot)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class gI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function yI(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const s=await e,a=Object.assign(Object.assign({},r),{send_to:s});n("event",t,a)}}/**
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
 */async function vI(){if(cd())try{await ld()}catch(n){return xe.warn(He.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return xe.warn(He.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function wI(n,e,t,r,i,s,a){var c;const l=pI(n);l.then(_=>{t[_.measurementId]=_.appId,n.options.measurementId&&_.measurementId!==n.options.measurementId&&xe.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>xe.error(_)),e.push(l);const f=vI().then(_=>{if(_)return r.getId()}),[m,u]=await Promise.all([l,f]);uI(s)||nI(s,m.measurementId),i("js",new Date);const h=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return h[XE]="firebase",h.update=!0,u!=null&&(h[QE]=u),i("config",m.measurementId,h),m.measurementId}/**
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
 */class TI{constructor(e){this.app=e}_delete(){return delete Zr[this.app.options.appId],Promise.resolve()}}let Zr={},th=[];const nh={};let ia="dataLayer",EI="gtag",rh,cp,ih=!1;function II(){const n=[];if(ud()&&n.push("This is a browser extension environment."),eg()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=He.create("invalid-analytics-context",{errorInfo:e});xe.warn(t.message)}}function AI(n,e,t){II();const r=n.options.appId;if(!r)throw He.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)xe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw He.create("no-api-key");if(Zr[r]!=null)throw He.create("already-exists",{id:r});if(!ih){rI(ia);const{wrappedGtag:s,gtagCore:a}=aI(Zr,th,nh,ia,EI);cp=s,rh=a,ih=!0}return Zr[r]=wI(n,th,nh,e,rh,ia,t),new TI(n)}function bI(n=Za()){n=Le(n);const e=Sn(n,Bs);return e.isInitialized()?e.getImmediate():RI(n)}function RI(n,e={}){const t=Sn(n,Bs);if(t.isInitialized()){const i=t.getImmediate();if(oi(e,t.getOptions()))return i;throw He.create("already-initialized")}return t.initialize({options:e})}function SI(n,e,t,r){n=Le(n),yI(cp,Zr[n.app.options.appId],e,t,r).catch(i=>xe.error(i))}const sh="@firebase/analytics",oh="0.10.10";function PI(){pt(new rt(Bs,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return AI(r,i,t)},"PUBLIC")),pt(new rt("analytics-internal",n,"PRIVATE")),We(sh,oh),We(sh,oh,"esm2017");function n(e){try{const t=e.getProvider(Bs).getImmediate();return{logEvent:(r,i,s)=>SI(t,r,i,s)}}catch(t){throw He.create("interop-component-reg-failed",{reason:t})}}}PI();function xu(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function lp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CI=lp,hp=new Rn("auth","Firebase",lp());/**
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
 */const qs=new eo("@firebase/auth");function kI(n,...e){qs.logLevel<=K.WARN&&qs.warn(`Auth (${vr}): ${n}`,...e)}function ms(n,...e){qs.logLevel<=K.ERROR&&qs.error(`Auth (${vr}): ${n}`,...e)}/**
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
 */function mt(n,...e){throw Lu(n,...e)}function tt(n,...e){return Lu(n,...e)}function Mu(n,e,t){const r=Object.assign(Object.assign({},CI()),{[e]:t});return new Rn("auth","Firebase",r).create(e,{appName:n.name})}function vn(n){return Mu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function DI(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&mt(n,"argument-error"),Mu(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Lu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return hp.create(n,...e)}function H(n,e,...t){if(!n)throw Lu(e,...t)}function At(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ms(e),new Error(e)}function Vt(n,e){n||At(e)}/**
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
 */function La(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function VI(){return ah()==="http:"||ah()==="https:"}function ah(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function NI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VI()||ud()||"connection"in navigator)?navigator.onLine:!0}function OI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Si{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vt(t>e,"Short delay should be less than long delay!"),this.isMobile=Km()||Ym()}get(){return NI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fu(n,e){Vt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class dp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;At("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;At("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;At("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const MI=new Si(3e4,6e4);function Uu(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function br(n,e,t,r,i={}){return fp(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const c=wi(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:e,headers:l},s);return Xm()||(f.referrerPolicy="no-referrer"),dp.fetch()(pp(n,n.config.apiHost,t,c),f)})}async function fp(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},xI),e);try{const i=new FI(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw ss(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[l,f]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ss(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ss(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw ss(n,"user-disabled",a);const m=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Mu(n,m,f);mt(n,m)}}catch(i){if(i instanceof ot)throw i;mt(n,"network-request-failed",{message:String(i)})}}async function LI(n,e,t,r,i={}){const s=await br(n,e,t,r,i);return"mfaPendingCredential"in s&&mt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function pp(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Fu(n.config,i):`${n.config.apiScheme}://${i}`}class FI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(tt(this.auth,"network-request-failed")),MI.get())})}}function ss(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=tt(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function UI(n,e){return br(n,"POST","/v1/accounts:delete",e)}async function _p(n,e){return br(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ei(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BI(n,e=!1){const t=Le(n),r=await t.getIdToken(e),i=Bu(r);H(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ei(sa(i.auth_time)),issuedAtTime:ei(sa(i.iat)),expirationTime:ei(sa(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function sa(n){return Number(n)*1e3}function Bu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ms("JWT malformed, contained fewer than 3 sections"),null;try{const i=id(t);return i?JSON.parse(i):(ms("Failed to decode base64 JWT payload"),null)}catch(i){return ms("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function uh(n){const e=Bu(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function pi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ot&&qI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function qI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class jI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ei(this.lastLoginAt),this.creationTime=ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function js(n){var e;const t=n.auth,r=await n.getIdToken(),i=await pi(n,_p(t,{idToken:r}));H(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?mp(s.providerUserInfo):[],c=HI(n.providerData,a),l=n.isAnonymous,f=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),m=l?f:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Fa(s.createdAt,s.lastLoginAt),isAnonymous:m};Object.assign(n,u)}async function $I(n){const e=Le(n);await js(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HI(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function mp(n){return n.map(e=>{var{providerId:t}=e,r=xu(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function GI(n,e){const t=await fp(n,{},async()=>{const r=wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=pp(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",dp.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function zI(n,e){return br(n,"POST","/v2/accounts:revokeToken",Uu(n,e))}/**
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
 */class Yn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=uh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await GI(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new Yn;return r&&(H(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yn,this.toJSON())}_performRefresh(){return At("not implemented")}}/**
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
 */function Ft(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class bt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=xu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await pi(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return BI(this,e)}reload(){return $I(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await js(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(It(this.auth.app))return Promise.reject(vn(this.auth));const e=await this.getIdToken();return await pi(this,UI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,c,l,f,m;const u=(r=t.displayName)!==null&&r!==void 0?r:void 0,h=(i=t.email)!==null&&i!==void 0?i:void 0,_=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,y=(a=t.photoURL)!==null&&a!==void 0?a:void 0,I=(c=t.tenantId)!==null&&c!==void 0?c:void 0,v=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,E=(f=t.createdAt)!==null&&f!==void 0?f:void 0,k=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:V,emailVerified:L,isAnonymous:q,providerData:B,stsTokenManager:R}=t;H(V&&R,e,"internal-error");const w=Yn.fromJSON(this.name,R);H(typeof V=="string",e,"internal-error"),Ft(u,e.name),Ft(h,e.name),H(typeof L=="boolean",e,"internal-error"),H(typeof q=="boolean",e,"internal-error"),Ft(_,e.name),Ft(y,e.name),Ft(I,e.name),Ft(v,e.name),Ft(E,e.name),Ft(k,e.name);const T=new bt({uid:V,auth:e,email:h,emailVerified:L,displayName:u,isAnonymous:q,photoURL:y,phoneNumber:_,tenantId:I,stsTokenManager:w,createdAt:E,lastLoginAt:k});return B&&Array.isArray(B)&&(T.providerData=B.map(A=>Object.assign({},A))),v&&(T._redirectEventId=v),T}static async _fromIdTokenResponse(e,t,r=!1){const i=new Yn;i.updateFromServerResponse(t);const s=new bt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await js(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];H(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?mp(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new Yn;c.updateFromIdToken(r);const l=new bt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Fa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,f),l}}/**
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
 */const ch=new Map;function Rt(n){Vt(n instanceof Function,"Expected a class definition");let e=ch.get(n);return e?(Vt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ch.set(n,e),e)}/**
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
 */class gp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}gp.type="NONE";const lh=gp;/**
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
 */function gs(n,e,t){return`firebase:${n}:${e}:${t}`}class Jn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=gs(this.userKey,i.apiKey,s),this.fullPersistenceKey=gs("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Jn(Rt(lh),e,r);const i=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let s=i[0]||Rt(lh);const a=gs(r,e.config.apiKey,e.name);let c=null;for(const f of t)try{const m=await f._get(a);if(m){const u=bt._fromJSON(e,m);f!==s&&(c=u),s=f;break}}catch{}const l=i.filter(f=>f._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Jn(s,e,r):(s=l[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async f=>{if(f!==s)try{await f._remove(a)}catch{}})),new Jn(s,e,r))}}/**
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
 */function hh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ip(e))return"Blackberry";if(Ap(e))return"Webos";if(vp(e))return"Safari";if((e.includes("chrome/")||wp(e))&&!e.includes("edge/"))return"Chrome";if(Ep(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yp(n=ke()){return/firefox\//i.test(n)}function vp(n=ke()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wp(n=ke()){return/crios\//i.test(n)}function Tp(n=ke()){return/iemobile/i.test(n)}function Ep(n=ke()){return/android/i.test(n)}function Ip(n=ke()){return/blackberry/i.test(n)}function Ap(n=ke()){return/webos/i.test(n)}function qu(n=ke()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function WI(n=ke()){var e;return qu(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KI(){return Jm()&&document.documentMode===10}function bp(n=ke()){return qu(n)||Ep(n)||Ap(n)||Ip(n)||/windows phone/i.test(n)||Tp(n)}/**
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
 */function Rp(n,e=[]){let t;switch(n){case"Browser":t=hh(ke());break;case"Worker":t=`${hh(ke())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${vr}/${r}`}/**
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
 */class QI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,c)=>{try{const l=e(s);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function XI(n,e={}){return br(n,"GET","/v2/passwordPolicy",Uu(n,e))}/**
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
 */const YI=6;class JI{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:YI,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class ZI{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dh(this),this.idTokenSubscription=new dh(this),this.beforeStateQueue=new QI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Rt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Jn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await _p(this,{idToken:e}),r=await bt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(It(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await js(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(It(this.app))return Promise.reject(vn(this));const t=e?Le(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return It(this.app)?Promise.reject(vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return It(this.app)?Promise.reject(vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await XI(this),t=new JI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Rn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await zI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Rt(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await Jn.create(this,[Rt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&kI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function vo(n){return Le(n)}class dh{constructor(e){this.auth=e,this.observer=null,this.addObserver=sg(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ju={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function e0(n){ju=n}function t0(n){return ju.loadJS(n)}function n0(){return ju.gapiScript}function r0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function i0(n,e){const t=Sn(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(oi(s,e??{}))return i;mt(i,"already-initialized")}return t.initialize({options:e})}function s0(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Rt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function o0(n,e,t){const r=vo(n);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Sp(e),{host:a,port:c}=a0(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),u0()}function Sp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function a0(n){const e=Sp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:fh(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:fh(a)}}}function fh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function u0(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Pp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return At("not implemented")}_getIdTokenResponse(e){return At("not implemented")}_linkToIdToken(e,t){return At("not implemented")}_getReauthenticationResolver(e){return At("not implemented")}}/**
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
 */async function Zn(n,e){return LI(n,"POST","/v1/accounts:signInWithIdp",Uu(n,e))}/**
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
 */const c0="http://localhost";class In extends Pp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new In(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):mt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=xu(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new In(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Zn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Zn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zn(e,t)}buildRequest(){const e={requestUri:c0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wi(t)}return e}}/**
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
 */class $u{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pi extends $u{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qt extends Pi{constructor(){super("facebook.com")}static credential(e){return In._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";qt.PROVIDER_ID="facebook.com";/**
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
 */class Ze extends Pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return In._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ze.credential(t,r)}catch{return null}}}Ze.GOOGLE_SIGN_IN_METHOD="google.com";Ze.PROVIDER_ID="google.com";/**
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
 */class jt extends Pi{constructor(){super("github.com")}static credential(e){return In._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com";jt.PROVIDER_ID="github.com";/**
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
 */class $t extends Pi{constructor(){super("twitter.com")}static credential(e,t){return In._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return $t.credential(t,r)}catch{return null}}}$t.TWITTER_SIGN_IN_METHOD="twitter.com";$t.PROVIDER_ID="twitter.com";/**
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
 */class fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await bt._fromIdTokenResponse(e,r,i),a=ph(r);return new fr({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=ph(r);return new fr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function ph(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class $s extends ot{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,$s.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new $s(e,t,r,i)}}function Cp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$s._fromErrorAndOperation(n,s,e,r):s})}async function l0(n,e,t=!1){const r=await pi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return fr._forOperation(n,"link",r)}/**
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
 */async function h0(n,e,t=!1){const{auth:r}=n;if(It(r.app))return Promise.reject(vn(r));const i="reauthenticate";try{const s=await pi(n,Cp(r,i,e,n),t);H(s.idToken,r,"internal-error");const a=Bu(s.idToken);H(a,r,"internal-error");const{sub:c}=a;return H(n.uid===c,r,"user-mismatch"),fr._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&mt(r,"user-mismatch"),s}}/**
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
 */async function d0(n,e,t=!1){if(It(n.app))return Promise.reject(vn(n));const r="signIn",i=await Cp(n,r,e),s=await fr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function f0(n,e,t,r){return Le(n).onIdTokenChanged(e,t,r)}function p0(n,e,t){return Le(n).beforeAuthStateChanged(e,t)}const Hs="__sak";/**
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
 */class kp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Hs,"1"),this.storage.removeItem(Hs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const _0=1e3,m0=10;class Dp extends kp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);KI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,m0):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},_0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dp.type="LOCAL";const g0=Dp;/**
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
 */class Vp extends kp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Vp.type="SESSION";const Np=Vp;/**
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
 */function y0(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class wo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new wo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async f=>f(t.origin,s)),l=await y0(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wo.receivers=[];/**
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
 */function Hu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class v0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,l)=>{const f=Hu("",20);i.port1.start();const m=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===f)switch(h.data.status){case"ack":clearTimeout(m),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(h.data.response);break;default:clearTimeout(m),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function dt(){return window}function w0(n){dt().location.href=n}/**
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
 */function Op(){return typeof dt().WorkerGlobalScope<"u"&&typeof dt().importScripts=="function"}async function T0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function E0(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function I0(){return Op()?self:null}/**
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
 */const xp="firebaseLocalStorageDb",A0=1,Gs="firebaseLocalStorage",Mp="fbase_key";class Ci{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function To(n,e){return n.transaction([Gs],e?"readwrite":"readonly").objectStore(Gs)}function b0(){const n=indexedDB.deleteDatabase(xp);return new Ci(n).toPromise()}function Ua(){const n=indexedDB.open(xp,A0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Gs,{keyPath:Mp})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Gs)?e(r):(r.close(),await b0(),e(await Ua()))})})}async function _h(n,e,t){const r=To(n,!0).put({[Mp]:e,value:t});return new Ci(r).toPromise()}async function R0(n,e){const t=To(n,!1).get(e),r=await new Ci(t).toPromise();return r===void 0?null:r.value}function mh(n,e){const t=To(n,!0).delete(e);return new Ci(t).toPromise()}const S0=800,P0=3;class Lp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ua(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>P0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Op()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wo._getInstance(I0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await T0(),!this.activeServiceWorker)return;this.sender=new v0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||E0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ua();return await _h(e,Hs,"1"),await mh(e,Hs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>_h(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>R0(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>mh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=To(i,!1).getAll();return new Ci(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),S0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lp.type="LOCAL";const C0=Lp;new Si(3e4,6e4);/**
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
 */function Fp(n,e){return e?Rt(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Gu extends Pp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function k0(n){return d0(n.auth,new Gu(n),n.bypassAuthState)}function D0(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),h0(t,new Gu(n),n.bypassAuthState)}async function V0(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),l0(t,new Gu(n),n.bypassAuthState)}/**
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
 */class Up{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return k0;case"linkViaPopup":case"linkViaRedirect":return V0;case"reauthViaPopup":case"reauthViaRedirect":return D0;default:mt(this.auth,"internal-error")}}resolve(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const N0=new Si(2e3,1e4);async function O0(n,e,t){if(It(n.app))return Promise.reject(tt(n,"operation-not-supported-in-this-environment"));const r=vo(n);DI(n,e,$u);const i=Fp(r,t);return new mn(r,"signInViaPopup",e,i).executeNotNull()}class mn extends Up{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,mn.currentPopupAction&&mn.currentPopupAction.cancel(),mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const e=Hu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,N0.get())};e()}}mn.currentPopupAction=null;/**
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
 */const x0="pendingRedirect",ys=new Map;class M0 extends Up{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ys.get(this.auth._key());if(!e){try{const r=await L0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ys.set(this.auth._key(),e)}return this.bypassAuthState||ys.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function L0(n,e){const t=B0(e),r=U0(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function F0(n,e){ys.set(n._key(),e)}function U0(n){return Rt(n._redirectPersistence)}function B0(n){return gs(x0,n.config.apiKey,n.name)}async function q0(n,e,t=!1){if(It(n.app))return Promise.reject(vn(n));const r=vo(n),i=Fp(r,e),a=await new M0(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const j0=10*60*1e3;class $0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!H0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Bp(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(tt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=j0&&this.cachedEventUids.clear(),this.cachedEventUids.has(gh(e))}saveEventToCache(e){this.cachedEventUids.add(gh(e)),this.lastProcessedEventTime=Date.now()}}function gh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Bp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function H0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bp(n);default:return!1}}/**
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
 */async function G0(n,e={}){return br(n,"GET","/v1/projects",e)}/**
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
 */const z0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,W0=/^https?/;async function K0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await G0(n);for(const t of e)try{if(Q0(t))return}catch{}mt(n,"unauthorized-domain")}function Q0(n){const e=La(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!W0.test(t))return!1;if(z0.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const X0=new Si(3e4,6e4);function yh(){const n=dt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Y0(n){return new Promise((e,t)=>{var r,i,s;function a(){yh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yh(),t(tt(n,"network-request-failed"))},timeout:X0.get()})}if(!((i=(r=dt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=dt().gapi)===null||s===void 0)&&s.load)a();else{const c=r0("iframefcb");return dt()[c]=()=>{gapi.load?a():t(tt(n,"network-request-failed"))},t0(`${n0()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw vs=null,e})}let vs=null;function J0(n){return vs=vs||Y0(n),vs}/**
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
 */const Z0=new Si(5e3,15e3),eA="__/auth/iframe",tA="emulator/auth/iframe",nA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iA(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Fu(e,tA):`https://${n.config.authDomain}/${eA}`,r={apiKey:e.apiKey,appName:n.name,v:vr},i=rA.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${wi(r).slice(1)}`}async function sA(n){const e=await J0(n),t=dt().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:iA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=tt(n,"network-request-failed"),c=dt().setTimeout(()=>{s(a)},Z0.get());function l(){dt().clearTimeout(c),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
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
 */const oA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aA=500,uA=600,cA="_blank",lA="http://localhost";class vh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hA(n,e,t,r=aA,i=uA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},oA),{width:r.toString(),height:i.toString(),top:s,left:a}),f=ke().toLowerCase();t&&(c=wp(f)?cA:t),yp(f)&&(e=e||lA,l.scrollbars="yes");const m=Object.entries(l).reduce((h,[_,y])=>`${h}${_}=${y},`,"");if(WI(f)&&c!=="_self")return dA(e||"",c),new vh(null);const u=window.open(e||"",c,m);H(u,n,"popup-blocked");try{u.focus()}catch{}return new vh(u)}function dA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const fA="__/auth/handler",pA="emulator/auth/handler",_A=encodeURIComponent("fac");async function wh(n,e,t,r,i,s){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:vr,eventId:i};if(e instanceof $u){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",ig(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,u]of Object.entries({}))a[m]=u}if(e instanceof Pi){const m=e.getScopes().filter(u=>u!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const l=await n._getAppCheckToken(),f=l?`#${_A}=${encodeURIComponent(l)}`:"";return`${mA(n)}?${wi(c).slice(1)}${f}`}function mA({config:n}){return n.emulator?Fu(n,pA):`https://${n.authDomain}/${fA}`}/**
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
 */const oa="webStorageSupport";class gA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Np,this._completeRedirectFn=q0,this._overrideRedirectResult=F0}async _openPopup(e,t,r,i){var s;Vt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await wh(e,t,r,La(),i);return hA(e,a,Hu())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await wh(e,t,r,La(),i);return w0(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Vt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await sA(e),r=new $0(e);return t.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(oa,{type:oa},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[oa];a!==void 0&&t(!!a),mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=K0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return bp()||vp()||qu()}}const yA=gA;var Th="@firebase/auth",Eh="1.8.1";/**
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
 */class vA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TA(n){pt(new rt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;H(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rp(n)},f=new ZI(r,i,s,l);return s0(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),pt(new rt("auth-internal",e=>{const t=vo(e.getProvider("auth").getImmediate());return(r=>new vA(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),We(Th,Eh,wA(n)),We(Th,Eh,"esm2017")}/**
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
 */const EA=5*60,IA=ad("authIdTokenMaxAge")||EA;let Ih=null;const AA=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>IA)return;const i=t==null?void 0:t.token;Ih!==i&&(Ih=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function bA(n=Za()){const e=Sn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=i0(n,{popupRedirectResolver:yA,persistence:[C0,g0,Np]}),r=ad("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=AA(s.toString());p0(t,a,()=>a(t.currentUser)),f0(t,c=>a(c))}}const i=sd("auth");return i&&o0(t,`http://${i}`),t}function RA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}e0({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=tt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",RA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TA("Browser");function SA(n,e,t){const r=new Ze;e.useDeviceLanguage(),O0(e,r).then(i=>{Ze.credentialFromResult(i).accessToken,fn(hr,i.user),console.log("success sign in")}).catch(i=>{fn(hr,null),i.code;const s=i.message;i.customData.email,Ze.credentialFromError(i),console.log("error sign in"),console.log(s)})}var PA=bn('<button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Sign in with google</button>'),CA=bn('<!> <div class="w-[100vw] flex justify-center"><div><!></div></div>',1),kA=bn("<main><!></main>");function DA(n,e){gr(e,!1);const t=Ya(),r=()=>Et(Fs,"$firebase_app",t),i=()=>Et(Ls,"$page",t),s=()=>Et(hr,"$user",t);fn(Fs,pd({apiKey:"AIzaSyAYhCkl8BqHUG4bJb1H2PN4hFHGKDlvyAs",authDomain:"remeberer-8ed40.firebaseapp.com",projectId:"remeberer-8ed40",storageBucket:"remeberer-8ed40.firebasestorage.app",messagingSenderId:"980800277649",appId:"1:980800277649:web:8b1d9421bab33b7040c330",measurementId:"G-RGR99Y4BE1"})),fn($T,bI(r()));let c=ca([]);fetch("QuestionSets/sets.txt").then(I=>{I.text().then(v=>{v.toString().split(`
`).forEach(k=>{fetch("QuestionSets/"+k).then(V=>{V.json().then(L=>{je(c,[...he(c),L])})})})})});let l=ca();function f(I){console.log("clicked"),je(l,JSON.parse(JSON.stringify(I))),fn(Ls,"question_set")}const m=bA();m.onAuthStateChanged(I=>{I&&fn(hr,I)}),console.log(s()),vi();var u=kA(),h=Je(u);{var _=I=>{var v=CA(),E=Es(v);KT(E,{get QuestionSets(){return he(c)},OnQuestionSetClick:f});var k=ti(E,2),V=Je(k),L=Je(V);{var q=B=>{var R=PA();R.__click=[SA,m,s],Tt(B,R)};us(L,B=>{s()||B(q)})}Tt(I,v)},y=I=>{var v=td(),E=Es(v);{var k=V=>{aE(V,{get question_set(){return he(l)}})};us(E,V=>{i()=="question_set"&&V(k)},!0)}Tt(I,v)};us(h,I=>{i()=="main"?I(_):I(y,!1)})}Tt(n,u),yr()}Xa(["click"]);gm(DA,{target:document.getElementById("app")});export{Hr as c,xA as g};
