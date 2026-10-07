var nx=Object.defineProperty;var ix=(t,e,n)=>e in t?nx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Je=(t,e,n)=>ix(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function rx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var dv={exports:{}},Du={},hv={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tl=Symbol.for("react.element"),sx=Symbol.for("react.portal"),ox=Symbol.for("react.fragment"),ax=Symbol.for("react.strict_mode"),lx=Symbol.for("react.profiler"),cx=Symbol.for("react.provider"),ux=Symbol.for("react.context"),fx=Symbol.for("react.forward_ref"),dx=Symbol.for("react.suspense"),hx=Symbol.for("react.memo"),px=Symbol.for("react.lazy"),fm=Symbol.iterator;function mx(t){return t===null||typeof t!="object"?null:(t=fm&&t[fm]||t["@@iterator"],typeof t=="function"?t:null)}var pv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mv=Object.assign,gv={};function Uo(t,e,n){this.props=t,this.context=e,this.refs=gv,this.updater=n||pv}Uo.prototype.isReactComponent={};Uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vv(){}vv.prototype=Uo.prototype;function kh(t,e,n){this.props=t,this.context=e,this.refs=gv,this.updater=n||pv}var Bh=kh.prototype=new vv;Bh.constructor=kh;mv(Bh,Uo.prototype);Bh.isPureReactComponent=!0;var dm=Array.isArray,_v=Object.prototype.hasOwnProperty,Hh={current:null},xv={key:!0,ref:!0,__self:!0,__source:!0};function yv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_v.call(e,i)&&!xv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:tl,type:t,key:s,ref:o,props:r,_owner:Hh.current}}function gx(t,e){return{$$typeof:tl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vh(t){return typeof t=="object"&&t!==null&&t.$$typeof===tl}function vx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hm=/\/+/g;function af(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vx(""+t.key):e.toString(36)}function pc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case tl:case sx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+af(o,0):i,dm(r)?(n="",t!=null&&(n=t.replace(hm,"$&/")+"/"),pc(r,e,n,"",function(c){return c})):r!=null&&(Vh(r)&&(r=gx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(hm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",dm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+af(s,a);o+=pc(s,e,n,l,r)}else if(l=mx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+af(s,a++),o+=pc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function dl(t,e,n){if(t==null)return t;var i=[],r=0;return pc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function _x(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var un={current:null},mc={transition:null},xx={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:mc,ReactCurrentOwner:Hh};function Sv(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:dl,forEach:function(t,e,n){dl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return dl(t,function(){e++}),e},toArray:function(t){return dl(t,function(e){return e})||[]},only:function(t){if(!Vh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Uo;We.Fragment=ox;We.Profiler=lx;We.PureComponent=kh;We.StrictMode=ax;We.Suspense=dx;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xx;We.act=Sv;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=mv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)_v.call(e,l)&&!xv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:tl,type:t.type,key:r,ref:s,props:i,_owner:o}};We.createContext=function(t){return t={$$typeof:ux,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:cx,_context:t},t.Consumer=t};We.createElement=yv;We.createFactory=function(t){var e=yv.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:fx,render:t}};We.isValidElement=Vh;We.lazy=function(t){return{$$typeof:px,_payload:{_status:-1,_result:t},_init:_x}};We.memo=function(t,e){return{$$typeof:hx,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=mc.transition;mc.transition={};try{t()}finally{mc.transition=e}};We.unstable_act=Sv;We.useCallback=function(t,e){return un.current.useCallback(t,e)};We.useContext=function(t){return un.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return un.current.useDeferredValue(t)};We.useEffect=function(t,e){return un.current.useEffect(t,e)};We.useId=function(){return un.current.useId()};We.useImperativeHandle=function(t,e,n){return un.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return un.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return un.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return un.current.useMemo(t,e)};We.useReducer=function(t,e,n){return un.current.useReducer(t,e,n)};We.useRef=function(t){return un.current.useRef(t)};We.useState=function(t){return un.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return un.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return un.current.useTransition()};We.version="18.3.1";hv.exports=We;var Ge=hv.exports;const yx=rx(Ge);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sx=Ge,Mx=Symbol.for("react.element"),Ex=Symbol.for("react.fragment"),wx=Object.prototype.hasOwnProperty,Tx=Sx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ax={key:!0,ref:!0,__self:!0,__source:!0};function Mv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)wx.call(e,i)&&!Ax.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Mx,type:t,key:s,ref:o,props:r,_owner:Tx.current}}Du.Fragment=Ex;Du.jsx=Mv;Du.jsxs=Mv;dv.exports=Du;var I=dv.exports,S0={},Ev={exports:{}},Dn={},wv={exports:{}},Tv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,Z){var $=L.length;L.push(Z);e:for(;0<$;){var ne=$-1>>>1,xe=L[ne];if(0<r(xe,Z))L[ne]=Z,L[$]=xe,$=ne;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var Z=L[0],$=L.pop();if($!==Z){L[0]=$;e:for(var ne=0,xe=L.length,De=xe>>>1;ne<De;){var q=2*(ne+1)-1,ee=L[q],le=q+1,ue=L[le];if(0>r(ee,$))le<xe&&0>r(ue,ee)?(L[ne]=ue,L[le]=$,ne=le):(L[ne]=ee,L[q]=$,ne=q);else if(le<xe&&0>r(ue,$))L[ne]=ue,L[le]=$,ne=le;else break e}}return Z}function r(L,Z){var $=L.sortIndex-Z.sortIndex;return $!==0?$:L.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,g=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var Z=n(c);Z!==null;){if(Z.callback===null)i(c);else if(Z.startTime<=L)i(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function S(L){if(x=!1,v(L),!g)if(n(l)!==null)g=!0,B(C);else{var Z=n(c);Z!==null&&Y(S,Z.startTime-L)}}function C(L,Z){g=!1,x&&(x=!1,h(P),P=-1),p=!0;var $=f;try{for(v(Z),d=n(l);d!==null&&(!(d.expirationTime>Z)||L&&!M());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var xe=ne(d.expirationTime<=Z);Z=t.unstable_now(),typeof xe=="function"?d.callback=xe:d===n(l)&&i(l),v(Z)}else i(l);d=n(l)}if(d!==null)var De=!0;else{var q=n(c);q!==null&&Y(S,q.startTime-Z),De=!1}return De}finally{d=null,f=$,p=!1}}var A=!1,T=null,P=-1,W=5,y=-1;function M(){return!(t.unstable_now()-y<W)}function H(){if(T!==null){var L=t.unstable_now();y=L;var Z=!0;try{Z=T(!0,L)}finally{Z?N():(A=!1,T=null)}}else A=!1}var N;if(typeof _=="function")N=function(){_(H)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,D=j.port2;j.port1.onmessage=H,N=function(){D.postMessage(null)}}else N=function(){m(H,0)};function B(L){T=L,A||(A=!0,N())}function Y(L,Z){P=m(function(){L(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,B(C))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var Z=3;break;default:Z=f}var $=f;f=Z;try{return L()}finally{f=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,Z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var $=f;f=L;try{return Z()}finally{f=$}},t.unstable_scheduleCallback=function(L,Z,$){var ne=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ne+$:ne):$=ne,L){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=$+xe,L={id:u++,callback:Z,priorityLevel:L,startTime:$,expirationTime:xe,sortIndex:-1},$>ne?(L.sortIndex=$,e(c,L),n(l)===null&&L===n(c)&&(x?(h(P),P=-1):x=!0,Y(S,$-ne))):(L.sortIndex=xe,e(l,L),g||p||(g=!0,B(C))),L},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(L){var Z=f;return function(){var $=f;f=Z;try{return L.apply(this,arguments)}finally{f=$}}}})(Tv);wv.exports=Tv;var Rx=wv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cx=Ge,bn=Rx;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Av=new Set,Pa={};function _s(t,e){vo(t,e),vo(t+"Capture",e)}function vo(t,e){for(Pa[t]=e,t=0;t<e.length;t++)Av.add(e[t])}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),M0=Object.prototype.hasOwnProperty,Px=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pm={},mm={};function bx(t){return M0.call(mm,t)?!0:M0.call(pm,t)?!1:Px.test(t)?mm[t]=!0:(pm[t]=!0,!1)}function Lx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Dx(t,e,n,i){if(e===null||typeof e>"u"||Lx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gh=/[\-:]([a-z])/g;function Wh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gh,Wh);jt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gh,Wh);jt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gh,Wh);jt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xh(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Dx(e,n,r,i)&&(n=null),i||r===null?bx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Yi=Cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hl=Symbol.for("react.element"),Gs=Symbol.for("react.portal"),Ws=Symbol.for("react.fragment"),jh=Symbol.for("react.strict_mode"),E0=Symbol.for("react.profiler"),Rv=Symbol.for("react.provider"),Cv=Symbol.for("react.context"),$h=Symbol.for("react.forward_ref"),w0=Symbol.for("react.suspense"),T0=Symbol.for("react.suspense_list"),qh=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),Pv=Symbol.for("react.offscreen"),gm=Symbol.iterator;function Bo(t){return t===null||typeof t!="object"?null:(t=gm&&t[gm]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,lf;function sa(t){if(lf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);lf=e&&e[1]||""}return`
`+lf+t}var cf=!1;function uf(t,e){if(!t||cf)return"";cf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{cf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?sa(t):""}function Ix(t){switch(t.tag){case 5:return sa(t.type);case 16:return sa("Lazy");case 13:return sa("Suspense");case 19:return sa("SuspenseList");case 0:case 2:case 15:return t=uf(t.type,!1),t;case 11:return t=uf(t.type.render,!1),t;case 1:return t=uf(t.type,!0),t;default:return""}}function A0(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ws:return"Fragment";case Gs:return"Portal";case E0:return"Profiler";case jh:return"StrictMode";case w0:return"Suspense";case T0:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Cv:return(t.displayName||"Context")+".Consumer";case Rv:return(t._context.displayName||"Context")+".Provider";case $h:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qh:return e=t.displayName||null,e!==null?e:A0(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return A0(t(e))}catch{}}return null}function Nx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return A0(e);case 8:return e===jh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ux(t){var e=bv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pl(t){t._valueTracker||(t._valueTracker=Ux(t))}function Lv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=bv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Oc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function R0(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dv(t,e){e=e.checked,e!=null&&Xh(t,"checked",e,!1)}function C0(t,e){Dv(t,e);var n=Tr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?P0(t,e.type,n):e.hasOwnProperty("defaultValue")&&P0(t,e.type,Tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _m(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function P0(t,e,n){(e!=="number"||Oc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oa=Array.isArray;function oo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Tr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function b0(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(oa(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Tr(n)}}function Iv(t,e){var n=Tr(e.value),i=Tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ym(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Nv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function L0(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Nv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ml,Uv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ml=ml||document.createElement("div"),ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ml.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ga={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fx=["Webkit","ms","Moz","O"];Object.keys(ga).forEach(function(t){Fx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ga[e]=ga[t]})});function Fv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ga.hasOwnProperty(t)&&ga[t]?(""+e).trim():e+"px"}function zv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Fv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var zx=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function D0(t,e){if(e){if(zx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function I0(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var N0=null;function Yh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var U0=null,ao=null,lo=null;function Sm(t){if(t=rl(t)){if(typeof U0!="function")throw Error(re(280));var e=t.stateNode;e&&(e=zu(e),U0(t.stateNode,t.type,e))}}function Ov(t){ao?lo?lo.push(t):lo=[t]:ao=t}function kv(){if(ao){var t=ao,e=lo;if(lo=ao=null,Sm(t),e)for(t=0;t<e.length;t++)Sm(e[t])}}function Bv(t,e){return t(e)}function Hv(){}var ff=!1;function Vv(t,e,n){if(ff)return t(e,n);ff=!0;try{return Bv(t,e,n)}finally{ff=!1,(ao!==null||lo!==null)&&(Hv(),kv())}}function La(t,e){var n=t.stateNode;if(n===null)return null;var i=zu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var F0=!1;if(Vi)try{var Ho={};Object.defineProperty(Ho,"passive",{get:function(){F0=!0}}),window.addEventListener("test",Ho,Ho),window.removeEventListener("test",Ho,Ho)}catch{F0=!1}function Ox(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var va=!1,kc=null,Bc=!1,z0=null,kx={onError:function(t){va=!0,kc=t}};function Bx(t,e,n,i,r,s,o,a,l){va=!1,kc=null,Ox.apply(kx,arguments)}function Hx(t,e,n,i,r,s,o,a,l){if(Bx.apply(this,arguments),va){if(va){var c=kc;va=!1,kc=null}else throw Error(re(198));Bc||(Bc=!0,z0=c)}}function xs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Gv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mm(t){if(xs(t)!==t)throw Error(re(188))}function Vx(t){var e=t.alternate;if(!e){if(e=xs(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Mm(r),t;if(s===i)return Mm(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Wv(t){return t=Vx(t),t!==null?Xv(t):null}function Xv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Xv(t);if(e!==null)return e;t=t.sibling}return null}var jv=bn.unstable_scheduleCallback,Em=bn.unstable_cancelCallback,Gx=bn.unstable_shouldYield,Wx=bn.unstable_requestPaint,Ct=bn.unstable_now,Xx=bn.unstable_getCurrentPriorityLevel,Kh=bn.unstable_ImmediatePriority,$v=bn.unstable_UserBlockingPriority,Hc=bn.unstable_NormalPriority,jx=bn.unstable_LowPriority,qv=bn.unstable_IdlePriority,Iu=null,yi=null;function $x(t){if(yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot(Iu,t,void 0,(t.current.flags&128)===128)}catch{}}var ci=Math.clz32?Math.clz32:Kx,qx=Math.log,Yx=Math.LN2;function Kx(t){return t>>>=0,t===0?32:31-(qx(t)/Yx|0)|0}var gl=64,vl=4194304;function aa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=aa(a):(s&=o,s!==0&&(i=aa(s)))}else o=n&~r,o!==0?i=aa(o):s!==0&&(i=aa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ci(e),r=1<<n,i|=t[n],e&=~r;return i}function Zx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ci(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Zx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function O0(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Yv(){var t=gl;return gl<<=1,!(gl&4194240)&&(gl=64),t}function df(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function nl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ci(e),t[e]=n}function Qx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ci(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Zh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ci(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ut=0;function Kv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Zv,Jh,Jv,Qv,e_,k0=!1,_l=[],mr=null,gr=null,vr=null,Da=new Map,Ia=new Map,cr=[],ey="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wm(t,e){switch(t){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ia.delete(e.pointerId)}}function Vo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=rl(e),e!==null&&Jh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ty(t,e,n,i,r){switch(e){case"focusin":return mr=Vo(mr,t,e,n,i,r),!0;case"dragenter":return gr=Vo(gr,t,e,n,i,r),!0;case"mouseover":return vr=Vo(vr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Da.set(s,Vo(Da.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ia.set(s,Vo(Ia.get(s)||null,t,e,n,i,r)),!0}return!1}function t_(t){var e=Kr(t.target);if(e!==null){var n=xs(e);if(n!==null){if(e=n.tag,e===13){if(e=Gv(n),e!==null){t.blockedOn=e,e_(t.priority,function(){Jv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=B0(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);N0=i,n.target.dispatchEvent(i),N0=null}else return e=rl(n),e!==null&&Jh(e),t.blockedOn=n,!1;e.shift()}return!0}function Tm(t,e,n){gc(t)&&n.delete(e)}function ny(){k0=!1,mr!==null&&gc(mr)&&(mr=null),gr!==null&&gc(gr)&&(gr=null),vr!==null&&gc(vr)&&(vr=null),Da.forEach(Tm),Ia.forEach(Tm)}function Go(t,e){t.blockedOn===e&&(t.blockedOn=null,k0||(k0=!0,bn.unstable_scheduleCallback(bn.unstable_NormalPriority,ny)))}function Na(t){function e(r){return Go(r,t)}if(0<_l.length){Go(_l[0],t);for(var n=1;n<_l.length;n++){var i=_l[n];i.blockedOn===t&&(i.blockedOn=null)}}for(mr!==null&&Go(mr,t),gr!==null&&Go(gr,t),vr!==null&&Go(vr,t),Da.forEach(e),Ia.forEach(e),n=0;n<cr.length;n++)i=cr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)t_(n),n.blockedOn===null&&cr.shift()}var co=Yi.ReactCurrentBatchConfig,Gc=!0;function iy(t,e,n,i){var r=ut,s=co.transition;co.transition=null;try{ut=1,Qh(t,e,n,i)}finally{ut=r,co.transition=s}}function ry(t,e,n,i){var r=ut,s=co.transition;co.transition=null;try{ut=4,Qh(t,e,n,i)}finally{ut=r,co.transition=s}}function Qh(t,e,n,i){if(Gc){var r=B0(t,e,n,i);if(r===null)Mf(t,e,i,Wc,n),wm(t,i);else if(ty(r,t,e,n,i))i.stopPropagation();else if(wm(t,i),e&4&&-1<ey.indexOf(t)){for(;r!==null;){var s=rl(r);if(s!==null&&Zv(s),s=B0(t,e,n,i),s===null&&Mf(t,e,i,Wc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Mf(t,e,i,null,n)}}var Wc=null;function B0(t,e,n,i){if(Wc=null,t=Yh(i),t=Kr(t),t!==null)if(e=xs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Gv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wc=t,null}function n_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xx()){case Kh:return 1;case $v:return 4;case Hc:case jx:return 16;case qv:return 536870912;default:return 16}default:return 16}}var dr=null,ep=null,vc=null;function i_(){if(vc)return vc;var t,e=ep,n=e.length,i,r="value"in dr?dr.value:dr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return vc=r.slice(t,1<i?1-i:void 0)}function _c(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xl(){return!0}function Am(){return!1}function In(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xl:Am,this.isPropagationStopped=Am,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),e}var Fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tp=In(Fo),il=wt({},Fo,{view:0,detail:0}),sy=In(il),hf,pf,Wo,Nu=wt({},il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:np,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wo&&(Wo&&t.type==="mousemove"?(hf=t.screenX-Wo.screenX,pf=t.screenY-Wo.screenY):pf=hf=0,Wo=t),hf)},movementY:function(t){return"movementY"in t?t.movementY:pf}}),Rm=In(Nu),oy=wt({},Nu,{dataTransfer:0}),ay=In(oy),ly=wt({},il,{relatedTarget:0}),mf=In(ly),cy=wt({},Fo,{animationName:0,elapsedTime:0,pseudoElement:0}),uy=In(cy),fy=wt({},Fo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dy=In(fy),hy=wt({},Fo,{data:0}),Cm=In(hy),py={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},my={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gy[t])?!!e[t]:!1}function np(){return vy}var _y=wt({},il,{key:function(t){if(t.key){var e=py[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_c(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?my[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:np,charCode:function(t){return t.type==="keypress"?_c(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_c(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xy=In(_y),yy=wt({},Nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pm=In(yy),Sy=wt({},il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:np}),My=In(Sy),Ey=wt({},Fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),wy=In(Ey),Ty=wt({},Nu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ay=In(Ty),Ry=[9,13,27,32],ip=Vi&&"CompositionEvent"in window,_a=null;Vi&&"documentMode"in document&&(_a=document.documentMode);var Cy=Vi&&"TextEvent"in window&&!_a,r_=Vi&&(!ip||_a&&8<_a&&11>=_a),bm=" ",Lm=!1;function s_(t,e){switch(t){case"keyup":return Ry.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function o_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xs=!1;function Py(t,e){switch(t){case"compositionend":return o_(e);case"keypress":return e.which!==32?null:(Lm=!0,bm);case"textInput":return t=e.data,t===bm&&Lm?null:t;default:return null}}function by(t,e){if(Xs)return t==="compositionend"||!ip&&s_(t,e)?(t=i_(),vc=ep=dr=null,Xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return r_&&e.locale!=="ko"?null:e.data;default:return null}}var Ly={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ly[t.type]:e==="textarea"}function a_(t,e,n,i){Ov(i),e=Xc(e,"onChange"),0<e.length&&(n=new tp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var xa=null,Ua=null;function Dy(t){__(t,0)}function Uu(t){var e=qs(t);if(Lv(e))return t}function Iy(t,e){if(t==="change")return e}var l_=!1;if(Vi){var gf;if(Vi){var vf="oninput"in document;if(!vf){var Im=document.createElement("div");Im.setAttribute("oninput","return;"),vf=typeof Im.oninput=="function"}gf=vf}else gf=!1;l_=gf&&(!document.documentMode||9<document.documentMode)}function Nm(){xa&&(xa.detachEvent("onpropertychange",c_),Ua=xa=null)}function c_(t){if(t.propertyName==="value"&&Uu(Ua)){var e=[];a_(e,Ua,t,Yh(t)),Vv(Dy,e)}}function Ny(t,e,n){t==="focusin"?(Nm(),xa=e,Ua=n,xa.attachEvent("onpropertychange",c_)):t==="focusout"&&Nm()}function Uy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uu(Ua)}function Fy(t,e){if(t==="click")return Uu(e)}function zy(t,e){if(t==="input"||t==="change")return Uu(e)}function Oy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fi=typeof Object.is=="function"?Object.is:Oy;function Fa(t,e){if(fi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!M0.call(e,r)||!fi(t[r],e[r]))return!1}return!0}function Um(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fm(t,e){var n=Um(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Um(n)}}function u_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?u_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function f_(){for(var t=window,e=Oc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Oc(t.document)}return e}function rp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ky(t){var e=f_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&u_(n.ownerDocument.documentElement,n)){if(i!==null&&rp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Fm(n,s);var o=Fm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var By=Vi&&"documentMode"in document&&11>=document.documentMode,js=null,H0=null,ya=null,V0=!1;function zm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;V0||js==null||js!==Oc(i)||(i=js,"selectionStart"in i&&rp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ya&&Fa(ya,i)||(ya=i,i=Xc(H0,"onSelect"),0<i.length&&(e=new tp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=js)))}function yl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $s={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},_f={},d_={};Vi&&(d_=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function Fu(t){if(_f[t])return _f[t];if(!$s[t])return t;var e=$s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in d_)return _f[t]=e[n];return t}var h_=Fu("animationend"),p_=Fu("animationiteration"),m_=Fu("animationstart"),g_=Fu("transitionend"),v_=new Map,Om="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,e){v_.set(t,e),_s(e,[t])}for(var xf=0;xf<Om.length;xf++){var yf=Om[xf],Hy=yf.toLowerCase(),Vy=yf[0].toUpperCase()+yf.slice(1);br(Hy,"on"+Vy)}br(h_,"onAnimationEnd");br(p_,"onAnimationIteration");br(m_,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(g_,"onTransitionEnd");vo("onMouseEnter",["mouseout","mouseover"]);vo("onMouseLeave",["mouseout","mouseover"]);vo("onPointerEnter",["pointerout","pointerover"]);vo("onPointerLeave",["pointerout","pointerover"]);_s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_s("onBeforeInput",["compositionend","keypress","textInput","paste"]);_s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gy=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function km(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Hx(i,e,void 0,t),t.currentTarget=null}function __(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;km(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;km(r,a,c),s=l}}}if(Bc)throw t=z0,Bc=!1,z0=null,t}function mt(t,e){var n=e[$0];n===void 0&&(n=e[$0]=new Set);var i=t+"__bubble";n.has(i)||(x_(e,t,2,!1),n.add(i))}function Sf(t,e,n){var i=0;e&&(i|=4),x_(n,t,i,e)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function za(t){if(!t[Sl]){t[Sl]=!0,Av.forEach(function(n){n!=="selectionchange"&&(Gy.has(n)||Sf(n,!1,t),Sf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Sl]||(e[Sl]=!0,Sf("selectionchange",!1,e))}}function x_(t,e,n,i){switch(n_(e)){case 1:var r=iy;break;case 4:r=ry;break;default:r=Qh}n=r.bind(null,e,n,t),r=void 0,!F0||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Mf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Kr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Vv(function(){var c=s,u=Yh(n),d=[];e:{var f=v_.get(t);if(f!==void 0){var p=tp,g=t;switch(t){case"keypress":if(_c(n)===0)break e;case"keydown":case"keyup":p=xy;break;case"focusin":g="focus",p=mf;break;case"focusout":g="blur",p=mf;break;case"beforeblur":case"afterblur":p=mf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ay;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=My;break;case h_:case p_:case m_:p=uy;break;case g_:p=wy;break;case"scroll":p=sy;break;case"wheel":p=Ay;break;case"copy":case"cut":case"paste":p=dy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Pm}var x=(e&4)!==0,m=!x&&t==="scroll",h=x?f!==null?f+"Capture":null:f;x=[];for(var _=c,v;_!==null;){v=_;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,h!==null&&(S=La(_,h),S!=null&&x.push(Oa(_,S,v)))),m)break;_=_.return}0<x.length&&(f=new p(f,g,null,n,u),d.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==N0&&(g=n.relatedTarget||n.fromElement)&&(Kr(g)||g[Gi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Kr(g):null,g!==null&&(m=xs(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(x=Rm,S="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Pm,S="onPointerLeave",h="onPointerEnter",_="pointer"),m=p==null?f:qs(p),v=g==null?f:qs(g),f=new x(S,_+"leave",p,n,u),f.target=m,f.relatedTarget=v,S=null,Kr(u)===c&&(x=new x(h,_+"enter",g,n,u),x.target=v,x.relatedTarget=m,S=x),m=S,p&&g)t:{for(x=p,h=g,_=0,v=x;v;v=Ms(v))_++;for(v=0,S=h;S;S=Ms(S))v++;for(;0<_-v;)x=Ms(x),_--;for(;0<v-_;)h=Ms(h),v--;for(;_--;){if(x===h||h!==null&&x===h.alternate)break t;x=Ms(x),h=Ms(h)}x=null}else x=null;p!==null&&Bm(d,f,p,x,!1),g!==null&&m!==null&&Bm(d,m,g,x,!0)}}e:{if(f=c?qs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=Iy;else if(Dm(f))if(l_)C=zy;else{C=Uy;var A=Ny}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Fy);if(C&&(C=C(t,c))){a_(d,C,n,u);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&P0(f,"number",f.value)}switch(A=c?qs(c):window,t){case"focusin":(Dm(A)||A.contentEditable==="true")&&(js=A,H0=c,ya=null);break;case"focusout":ya=H0=js=null;break;case"mousedown":V0=!0;break;case"contextmenu":case"mouseup":case"dragend":V0=!1,zm(d,n,u);break;case"selectionchange":if(By)break;case"keydown":case"keyup":zm(d,n,u)}var T;if(ip)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Xs?s_(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(r_&&n.locale!=="ko"&&(Xs||P!=="onCompositionStart"?P==="onCompositionEnd"&&Xs&&(T=i_()):(dr=u,ep="value"in dr?dr.value:dr.textContent,Xs=!0)),A=Xc(c,P),0<A.length&&(P=new Cm(P,t,null,n,u),d.push({event:P,listeners:A}),T?P.data=T:(T=o_(n),T!==null&&(P.data=T)))),(T=Cy?Py(t,n):by(t,n))&&(c=Xc(c,"onBeforeInput"),0<c.length&&(u=new Cm("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=T))}__(d,e)})}function Oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=La(t,n),s!=null&&i.unshift(Oa(t,s,r)),s=La(t,e),s!=null&&i.push(Oa(t,s,r))),t=t.return}return i}function Ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=La(n,s),l!=null&&o.unshift(Oa(n,l,a))):r||(l=La(n,s),l!=null&&o.push(Oa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Wy=/\r\n?/g,Xy=/\u0000|\uFFFD/g;function Hm(t){return(typeof t=="string"?t:""+t).replace(Wy,`
`).replace(Xy,"")}function Ml(t,e,n){if(e=Hm(e),Hm(t)!==e&&n)throw Error(re(425))}function jc(){}var G0=null,W0=null;function X0(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var j0=typeof setTimeout=="function"?setTimeout:void 0,jy=typeof clearTimeout=="function"?clearTimeout:void 0,Vm=typeof Promise=="function"?Promise:void 0,$y=typeof queueMicrotask=="function"?queueMicrotask:typeof Vm<"u"?function(t){return Vm.resolve(null).then(t).catch(qy)}:j0;function qy(t){setTimeout(function(){throw t})}function Ef(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Na(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Na(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zo=Math.random().toString(36).slice(2),gi="__reactFiber$"+zo,ka="__reactProps$"+zo,Gi="__reactContainer$"+zo,$0="__reactEvents$"+zo,Yy="__reactListeners$"+zo,Ky="__reactHandles$"+zo;function Kr(t){var e=t[gi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gi]||n[gi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gm(t);t!==null;){if(n=t[gi])return n;t=Gm(t)}return e}t=n,n=t.parentNode}return null}function rl(t){return t=t[gi]||t[Gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function zu(t){return t[ka]||null}var q0=[],Ys=-1;function Lr(t){return{current:t}}function vt(t){0>Ys||(t.current=q0[Ys],q0[Ys]=null,Ys--)}function dt(t,e){Ys++,q0[Ys]=t.current,t.current=e}var Ar={},en=Lr(Ar),gn=Lr(!1),os=Ar;function _o(t,e){var n=t.type.contextTypes;if(!n)return Ar;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function vn(t){return t=t.childContextTypes,t!=null}function $c(){vt(gn),vt(en)}function Wm(t,e,n){if(en.current!==Ar)throw Error(re(168));dt(en,e),dt(gn,n)}function y_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,Nx(t)||"Unknown",r));return wt({},n,i)}function qc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,os=en.current,dt(en,t),dt(gn,gn.current),!0}function Xm(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=y_(t,e,os),i.__reactInternalMemoizedMergedChildContext=t,vt(gn),vt(en),dt(en,t)):vt(gn),dt(gn,n)}var Ii=null,Ou=!1,wf=!1;function S_(t){Ii===null?Ii=[t]:Ii.push(t)}function Zy(t){Ou=!0,S_(t)}function Dr(){if(!wf&&Ii!==null){wf=!0;var t=0,e=ut;try{var n=Ii;for(ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ii=null,Ou=!1}catch(r){throw Ii!==null&&(Ii=Ii.slice(t+1)),jv(Kh,Dr),r}finally{ut=e,wf=!1}}return null}var Ks=[],Zs=0,Yc=null,Kc=0,zn=[],On=0,as=null,Ui=1,Fi="";function Hr(t,e){Ks[Zs++]=Kc,Ks[Zs++]=Yc,Yc=t,Kc=e}function M_(t,e,n){zn[On++]=Ui,zn[On++]=Fi,zn[On++]=as,as=t;var i=Ui;t=Fi;var r=32-ci(i)-1;i&=~(1<<r),n+=1;var s=32-ci(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ui=1<<32-ci(e)+r|n<<r|i,Fi=s+t}else Ui=1<<s|n<<r|i,Fi=t}function sp(t){t.return!==null&&(Hr(t,1),M_(t,1,0))}function op(t){for(;t===Yc;)Yc=Ks[--Zs],Ks[Zs]=null,Kc=Ks[--Zs],Ks[Zs]=null;for(;t===as;)as=zn[--On],zn[On]=null,Fi=zn[--On],zn[On]=null,Ui=zn[--On],zn[On]=null}var Pn=null,Rn=null,_t=!1,ri=null;function E_(t,e){var n=Vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=as!==null?{id:Ui,overflow:Fi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Rn=null,!0):!1;default:return!1}}function Y0(t){return(t.mode&1)!==0&&(t.flags&128)===0}function K0(t){if(_t){var e=Rn;if(e){var n=e;if(!jm(t,e)){if(Y0(t))throw Error(re(418));e=_r(n.nextSibling);var i=Pn;e&&jm(t,e)?E_(i,n):(t.flags=t.flags&-4097|2,_t=!1,Pn=t)}}else{if(Y0(t))throw Error(re(418));t.flags=t.flags&-4097|2,_t=!1,Pn=t}}}function $m(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function El(t){if(t!==Pn)return!1;if(!_t)return $m(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!X0(t.type,t.memoizedProps)),e&&(e=Rn)){if(Y0(t))throw w_(),Error(re(418));for(;e;)E_(t,e),e=_r(e.nextSibling)}if($m(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=Pn?_r(t.stateNode.nextSibling):null;return!0}function w_(){for(var t=Rn;t;)t=_r(t.nextSibling)}function xo(){Rn=Pn=null,_t=!1}function ap(t){ri===null?ri=[t]:ri.push(t)}var Jy=Yi.ReactCurrentBatchConfig;function Xo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function wl(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qm(t){var e=t._init;return e(t._payload)}function T_(t){function e(h,_){if(t){var v=h.deletions;v===null?(h.deletions=[_],h.flags|=16):v.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=Mr(h,_),h.index=0,h.sibling=null,h}function s(h,_,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<_?(h.flags|=2,_):v):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,_,v,S){return _===null||_.tag!==6?(_=Lf(v,h.mode,S),_.return=h,_):(_=r(_,v),_.return=h,_)}function l(h,_,v,S){var C=v.type;return C===Ws?u(h,_,v.props.children,S,v.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ar&&qm(C)===_.type)?(S=r(_,v.props),S.ref=Xo(h,_,v),S.return=h,S):(S=Tc(v.type,v.key,v.props,null,h.mode,S),S.ref=Xo(h,_,v),S.return=h,S)}function c(h,_,v,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Df(v,h.mode,S),_.return=h,_):(_=r(_,v.children||[]),_.return=h,_)}function u(h,_,v,S,C){return _===null||_.tag!==7?(_=rs(v,h.mode,S,C),_.return=h,_):(_=r(_,v),_.return=h,_)}function d(h,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Lf(""+_,h.mode,v),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case hl:return v=Tc(_.type,_.key,_.props,null,h.mode,v),v.ref=Xo(h,null,_),v.return=h,v;case Gs:return _=Df(_,h.mode,v),_.return=h,_;case ar:var S=_._init;return d(h,S(_._payload),v)}if(oa(_)||Bo(_))return _=rs(_,h.mode,v,null),_.return=h,_;wl(h,_)}return null}function f(h,_,v,S){var C=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(h,_,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hl:return v.key===C?l(h,_,v,S):null;case Gs:return v.key===C?c(h,_,v,S):null;case ar:return C=v._init,f(h,_,C(v._payload),S)}if(oa(v)||Bo(v))return C!==null?null:u(h,_,v,S,null);wl(h,v)}return null}function p(h,_,v,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(v)||null,a(_,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case hl:return h=h.get(S.key===null?v:S.key)||null,l(_,h,S,C);case Gs:return h=h.get(S.key===null?v:S.key)||null,c(_,h,S,C);case ar:var A=S._init;return p(h,_,v,A(S._payload),C)}if(oa(S)||Bo(S))return h=h.get(v)||null,u(_,h,S,C,null);wl(_,S)}return null}function g(h,_,v,S){for(var C=null,A=null,T=_,P=_=0,W=null;T!==null&&P<v.length;P++){T.index>P?(W=T,T=null):W=T.sibling;var y=f(h,T,v[P],S);if(y===null){T===null&&(T=W);break}t&&T&&y.alternate===null&&e(h,T),_=s(y,_,P),A===null?C=y:A.sibling=y,A=y,T=W}if(P===v.length)return n(h,T),_t&&Hr(h,P),C;if(T===null){for(;P<v.length;P++)T=d(h,v[P],S),T!==null&&(_=s(T,_,P),A===null?C=T:A.sibling=T,A=T);return _t&&Hr(h,P),C}for(T=i(h,T);P<v.length;P++)W=p(T,h,P,v[P],S),W!==null&&(t&&W.alternate!==null&&T.delete(W.key===null?P:W.key),_=s(W,_,P),A===null?C=W:A.sibling=W,A=W);return t&&T.forEach(function(M){return e(h,M)}),_t&&Hr(h,P),C}function x(h,_,v,S){var C=Bo(v);if(typeof C!="function")throw Error(re(150));if(v=C.call(v),v==null)throw Error(re(151));for(var A=C=null,T=_,P=_=0,W=null,y=v.next();T!==null&&!y.done;P++,y=v.next()){T.index>P?(W=T,T=null):W=T.sibling;var M=f(h,T,y.value,S);if(M===null){T===null&&(T=W);break}t&&T&&M.alternate===null&&e(h,T),_=s(M,_,P),A===null?C=M:A.sibling=M,A=M,T=W}if(y.done)return n(h,T),_t&&Hr(h,P),C;if(T===null){for(;!y.done;P++,y=v.next())y=d(h,y.value,S),y!==null&&(_=s(y,_,P),A===null?C=y:A.sibling=y,A=y);return _t&&Hr(h,P),C}for(T=i(h,T);!y.done;P++,y=v.next())y=p(T,h,P,y.value,S),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?P:y.key),_=s(y,_,P),A===null?C=y:A.sibling=y,A=y);return t&&T.forEach(function(H){return e(h,H)}),_t&&Hr(h,P),C}function m(h,_,v,S){if(typeof v=="object"&&v!==null&&v.type===Ws&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case hl:e:{for(var C=v.key,A=_;A!==null;){if(A.key===C){if(C=v.type,C===Ws){if(A.tag===7){n(h,A.sibling),_=r(A,v.props.children),_.return=h,h=_;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ar&&qm(C)===A.type){n(h,A.sibling),_=r(A,v.props),_.ref=Xo(h,A,v),_.return=h,h=_;break e}n(h,A);break}else e(h,A);A=A.sibling}v.type===Ws?(_=rs(v.props.children,h.mode,S,v.key),_.return=h,h=_):(S=Tc(v.type,v.key,v.props,null,h.mode,S),S.ref=Xo(h,_,v),S.return=h,h=S)}return o(h);case Gs:e:{for(A=v.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(h,_.sibling),_=r(_,v.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=Df(v,h.mode,S),_.return=h,h=_}return o(h);case ar:return A=v._init,m(h,_,A(v._payload),S)}if(oa(v))return g(h,_,v,S);if(Bo(v))return x(h,_,v,S);wl(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,v),_.return=h,h=_):(n(h,_),_=Lf(v,h.mode,S),_.return=h,h=_),o(h)):n(h,_)}return m}var yo=T_(!0),A_=T_(!1),Zc=Lr(null),Jc=null,Js=null,lp=null;function cp(){lp=Js=Jc=null}function up(t){var e=Zc.current;vt(Zc),t._currentValue=e}function Z0(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function uo(t,e){Jc=t,lp=Js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function $n(t){var e=t._currentValue;if(lp!==t)if(t={context:t,memoizedValue:e,next:null},Js===null){if(Jc===null)throw Error(re(308));Js=t,Jc.dependencies={lanes:0,firstContext:t}}else Js=Js.next=t;return e}var Zr=null;function fp(t){Zr===null?Zr=[t]:Zr.push(t)}function R_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,fp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Wi(t,i)}function Wi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var lr=!1;function dp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function C_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Wi(t,n)}return r=i.interleaved,r===null?(e.next=e,fp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Wi(t,n)}function xc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zh(t,n)}}function Ym(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qc(t,e,n,i){var r=t.updateQueue;lr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,x=a;switch(f=e,p=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=wt({},d,f);break e;case 2:lr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);cs|=o,t.lanes=o,t.memoizedState=d}}function Km(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var sl={},Si=Lr(sl),Ba=Lr(sl),Ha=Lr(sl);function Jr(t){if(t===sl)throw Error(re(174));return t}function hp(t,e){switch(dt(Ha,e),dt(Ba,t),dt(Si,sl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:L0(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=L0(e,t)}vt(Si),dt(Si,e)}function So(){vt(Si),vt(Ba),vt(Ha)}function P_(t){Jr(Ha.current);var e=Jr(Si.current),n=L0(e,t.type);e!==n&&(dt(Ba,t),dt(Si,n))}function pp(t){Ba.current===t&&(vt(Si),vt(Ba))}var St=Lr(0);function eu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Tf=[];function mp(){for(var t=0;t<Tf.length;t++)Tf[t]._workInProgressVersionPrimary=null;Tf.length=0}var yc=Yi.ReactCurrentDispatcher,Af=Yi.ReactCurrentBatchConfig,ls=0,Et=null,Nt=null,Bt=null,tu=!1,Sa=!1,Va=0,Qy=0;function $t(){throw Error(re(321))}function gp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!fi(t[n],e[n]))return!1;return!0}function vp(t,e,n,i,r,s){if(ls=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yc.current=t===null||t.memoizedState===null?iS:rS,t=n(i,r),Sa){s=0;do{if(Sa=!1,Va=0,25<=s)throw Error(re(301));s+=1,Bt=Nt=null,e.updateQueue=null,yc.current=sS,t=n(i,r)}while(Sa)}if(yc.current=nu,e=Nt!==null&&Nt.next!==null,ls=0,Bt=Nt=Et=null,tu=!1,e)throw Error(re(300));return t}function _p(){var t=Va!==0;return Va=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?Et.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function qn(){if(Nt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=Bt===null?Et.memoizedState:Bt.next;if(e!==null)Bt=e,Nt=t;else{if(t===null)throw Error(re(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Bt===null?Et.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function Ga(t,e){return typeof e=="function"?e(t):e}function Rf(t){var e=qn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Nt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ls&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Et.lanes|=u,cs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,fi(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,cs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Cf(t){var e=qn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);fi(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function b_(){}function L_(t,e){var n=Et,i=qn(),r=e(),s=!fi(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,xp(N_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,Wa(9,I_.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(re(349));ls&30||D_(n,e,r)}return r}function D_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function I_(t,e,n,i){e.value=n,e.getSnapshot=i,U_(e)&&F_(t)}function N_(t,e,n){return n(function(){U_(e)&&F_(t)})}function U_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fi(t,n)}catch{return!0}}function F_(t){var e=Wi(t,1);e!==null&&ui(e,t,1,-1)}function Zm(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:t},e.queue=t,t=t.dispatch=nS.bind(null,Et,t),[e.memoizedState,t]}function Wa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function z_(){return qn().memoizedState}function Sc(t,e,n,i){var r=hi();Et.flags|=t,r.memoizedState=Wa(1|e,n,void 0,i===void 0?null:i)}function ku(t,e,n,i){var r=qn();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var o=Nt.memoizedState;if(s=o.destroy,i!==null&&gp(i,o.deps)){r.memoizedState=Wa(e,n,s,i);return}}Et.flags|=t,r.memoizedState=Wa(1|e,n,s,i)}function Jm(t,e){return Sc(8390656,8,t,e)}function xp(t,e){return ku(2048,8,t,e)}function O_(t,e){return ku(4,2,t,e)}function k_(t,e){return ku(4,4,t,e)}function B_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function H_(t,e,n){return n=n!=null?n.concat([t]):null,ku(4,4,B_.bind(null,e,t),n)}function yp(){}function V_(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function G_(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function W_(t,e,n){return ls&21?(fi(n,e)||(n=Yv(),Et.lanes|=n,cs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function eS(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var i=Af.transition;Af.transition={};try{t(!1),e()}finally{ut=n,Af.transition=i}}function X_(){return qn().memoizedState}function tS(t,e,n){var i=Sr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},j_(t))$_(e,n);else if(n=R_(t,e,n,i),n!==null){var r=an();ui(n,t,i,r),q_(n,e,i)}}function nS(t,e,n){var i=Sr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(j_(t))$_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,fi(a,o)){var l=e.interleaved;l===null?(r.next=r,fp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=R_(t,e,r,i),n!==null&&(r=an(),ui(n,t,i,r),q_(n,e,i))}}function j_(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function $_(t,e){Sa=tu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function q_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zh(t,n)}}var nu={readContext:$n,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},iS={readContext:$n,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:$n,useEffect:Jm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sc(4194308,4,B_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sc(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=hi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=tS.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:Zm,useDebugValue:yp,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=Zm(!1),e=t[0];return t=eS.bind(null,t[1]),hi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=hi();if(_t){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Vt===null)throw Error(re(349));ls&30||D_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Jm(N_.bind(null,i,s,t),[t]),i.flags|=2048,Wa(9,I_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=hi(),e=Vt.identifierPrefix;if(_t){var n=Fi,i=Ui;n=(i&~(1<<32-ci(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Va++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Qy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rS={readContext:$n,useCallback:V_,useContext:$n,useEffect:xp,useImperativeHandle:H_,useInsertionEffect:O_,useLayoutEffect:k_,useMemo:G_,useReducer:Rf,useRef:z_,useState:function(){return Rf(Ga)},useDebugValue:yp,useDeferredValue:function(t){var e=qn();return W_(e,Nt.memoizedState,t)},useTransition:function(){var t=Rf(Ga)[0],e=qn().memoizedState;return[t,e]},useMutableSource:b_,useSyncExternalStore:L_,useId:X_,unstable_isNewReconciler:!1},sS={readContext:$n,useCallback:V_,useContext:$n,useEffect:xp,useImperativeHandle:H_,useInsertionEffect:O_,useLayoutEffect:k_,useMemo:G_,useReducer:Cf,useRef:z_,useState:function(){return Cf(Ga)},useDebugValue:yp,useDeferredValue:function(t){var e=qn();return Nt===null?e.memoizedState=t:W_(e,Nt.memoizedState,t)},useTransition:function(){var t=Cf(Ga)[0],e=qn().memoizedState;return[t,e]},useMutableSource:b_,useSyncExternalStore:L_,useId:X_,unstable_isNewReconciler:!1};function ni(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function J0(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bu={isMounted:function(t){return(t=t._reactInternals)?xs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=Sr(t),s=Bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,r),e!==null&&(ui(e,t,r,i),xc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=Sr(t),s=Bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,r),e!==null&&(ui(e,t,r,i),xc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=Sr(t),r=Bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=xr(t,r,i),e!==null&&(ui(e,t,i,n),xc(e,t,i))}};function Qm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fa(n,i)||!Fa(r,s):!0}function Y_(t,e,n){var i=!1,r=Ar,s=e.contextType;return typeof s=="object"&&s!==null?s=$n(s):(r=vn(e)?os:en.current,i=e.contextTypes,s=(i=i!=null)?_o(t,r):Ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function eg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Bu.enqueueReplaceState(e,e.state,null)}function Q0(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},dp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=$n(s):(s=vn(e)?os:en.current,r.context=_o(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(J0(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Bu.enqueueReplaceState(r,r.state,null),Qc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Mo(t,e){try{var n="",i=e;do n+=Ix(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Pf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ed(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var oS=typeof WeakMap=="function"?WeakMap:Map;function K_(t,e,n){n=Bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ru||(ru=!0,ud=i),ed(t,e)},n}function Z_(t,e,n){n=Bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ed(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ed(t,e),typeof i!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function tg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new oS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=yS.bind(null,t,e,n),e.then(t,t))}function ng(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ig(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bi(-1,1),e.tag=2,xr(n,e,1))),n.lanes|=1),t)}var aS=Yi.ReactCurrentOwner,mn=!1;function rn(t,e,n,i){e.child=t===null?A_(e,null,n,i):yo(e,t.child,n,i)}function rg(t,e,n,i,r){n=n.render;var s=e.ref;return uo(e,r),i=vp(t,e,n,i,s,r),n=_p(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(_t&&n&&sp(e),e.flags|=1,rn(t,e,i,r),e.child)}function sg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Cp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,J_(t,e,s,i,r)):(t=Tc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fa,n(o,i)&&t.ref===e.ref)return Xi(t,e,r)}return e.flags|=1,t=Mr(s,i),t.ref=e.ref,t.return=e,e.child=t}function J_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Fa(s,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,Xi(t,e,r)}return td(t,e,n,i,r)}function Q_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(eo,Tn),Tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(eo,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(eo,Tn),Tn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(eo,Tn),Tn|=i;return rn(t,e,r,n),e.child}function e2(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function td(t,e,n,i,r){var s=vn(n)?os:en.current;return s=_o(e,s),uo(e,r),n=vp(t,e,n,i,s,r),i=_p(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(_t&&i&&sp(e),e.flags|=1,rn(t,e,n,r),e.child)}function og(t,e,n,i,r){if(vn(n)){var s=!0;qc(e)}else s=!1;if(uo(e,r),e.stateNode===null)Mc(t,e),Y_(e,n,i),Q0(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=$n(c):(c=vn(n)?os:en.current,c=_o(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&eg(e,o,i,c),lr=!1;var f=e.memoizedState;o.state=f,Qc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||gn.current||lr?(typeof u=="function"&&(J0(e,n,u,i),l=e.memoizedState),(a=lr||Qm(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,C_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ni(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=$n(l):(l=vn(n)?os:en.current,l=_o(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&eg(e,o,i,l),lr=!1,f=e.memoizedState,o.state=f,Qc(e,i,o,r);var g=e.memoizedState;a!==d||f!==g||gn.current||lr?(typeof p=="function"&&(J0(e,n,p,i),g=e.memoizedState),(c=lr||Qm(e,n,c,i,f,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return nd(t,e,n,i,s,r)}function nd(t,e,n,i,r,s){e2(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Xm(e,n,!1),Xi(t,e,s);i=e.stateNode,aS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=yo(e,t.child,null,s),e.child=yo(e,null,a,s)):rn(t,e,a,s),e.memoizedState=i.state,r&&Xm(e,n,!0),e.child}function t2(t){var e=t.stateNode;e.pendingContext?Wm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wm(t,e.context,!1),hp(t,e.containerInfo)}function ag(t,e,n,i,r){return xo(),ap(r),e.flags|=256,rn(t,e,n,i),e.child}var id={dehydrated:null,treeContext:null,retryLane:0};function rd(t){return{baseLanes:t,cachePool:null,transitions:null}}function n2(t,e,n){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(St,r&1),t===null)return K0(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gu(o,i,0,null),t=rs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rd(n),e.memoizedState=id,t):Sp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return lS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Mr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Mr(a,s):(s=rs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?rd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=id,i}return s=t.child,t=s.sibling,i=Mr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Sp(t,e){return e=Gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Tl(t,e,n,i){return i!==null&&ap(i),yo(e,t.child,null,n),t=Sp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Pf(Error(re(422))),Tl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Gu({mode:"visible",children:i.children},r,0,null),s=rs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&yo(e,t.child,null,o),e.child.memoizedState=rd(o),e.memoizedState=id,s);if(!(e.mode&1))return Tl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=Pf(s,i,void 0),Tl(t,e,o,i)}if(a=(o&t.childLanes)!==0,mn||a){if(i=Vt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Wi(t,r),ui(i,t,r,-1))}return Rp(),i=Pf(Error(re(421))),Tl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=SS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Rn=_r(r.nextSibling),Pn=e,_t=!0,ri=null,t!==null&&(zn[On++]=Ui,zn[On++]=Fi,zn[On++]=as,Ui=t.id,Fi=t.overflow,as=e),e=Sp(e,i.children),e.flags|=4096,e)}function lg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Z0(t.return,e,n)}function bf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function i2(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lg(t,n,e);else if(t.tag===19)lg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&eu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),bf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&eu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}bf(e,!0,n,null,s);break;case"together":bf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Mc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cS(t,e,n){switch(e.tag){case 3:t2(e),xo();break;case 5:P_(e);break;case 1:vn(e.type)&&qc(e);break;case 4:hp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(Zc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?n2(t,e,n):(dt(St,St.current&1),t=Xi(t,e,n),t!==null?t.sibling:null);dt(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return i2(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,Q_(t,e,n)}return Xi(t,e,n)}var r2,sd,s2,o2;r2=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sd=function(){};s2=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Jr(Si.current);var s=null;switch(n){case"input":r=R0(t,r),i=R0(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=b0(t,r),i=b0(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=jc)}D0(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Pa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Pa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};o2=function(t,e,n,i){n!==i&&(e.flags|=4)};function jo(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function uS(t,e,n){var i=e.pendingProps;switch(op(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return vn(e.type)&&$c(),qt(e),null;case 3:return i=e.stateNode,So(),vt(gn),vt(en),mp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(El(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ri!==null&&(hd(ri),ri=null))),sd(t,e),qt(e),null;case 5:pp(e);var r=Jr(Ha.current);if(n=e.type,t!==null&&e.stateNode!=null)s2(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return qt(e),null}if(t=Jr(Si.current),El(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[gi]=e,i[ka]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<la.length;r++)mt(la[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":vm(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":xm(i,s),mt("invalid",i)}D0(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ml(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ml(i.textContent,a,t),r=["children",""+a]):Pa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(n){case"input":pl(i),_m(i,s,!0);break;case"textarea":pl(i),ym(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=jc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Nv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[gi]=e,t[ka]=i,r2(t,e,!1,!1),e.stateNode=t;e:{switch(o=I0(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<la.length;r++)mt(la[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":vm(t,i),r=R0(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),mt("invalid",t);break;case"textarea":xm(t,i),r=b0(t,i),mt("invalid",t);break;default:r=i}D0(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?zv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Uv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ba(t,l):typeof l=="number"&&ba(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Pa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&Xh(t,s,l,o))}switch(n){case"input":pl(t),_m(t,i,!1);break;case"textarea":pl(t),ym(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Tr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?oo(t,!!i.multiple,s,!1):i.defaultValue!=null&&oo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=jc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)o2(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Jr(Ha.current),Jr(Si.current),El(e)){if(i=e.stateNode,n=e.memoizedProps,i[gi]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:Ml(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ml(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[gi]=e,e.stateNode=i}return qt(e),null;case 13:if(vt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Rn!==null&&e.mode&1&&!(e.flags&128))w_(),xo(),e.flags|=98560,s=!1;else if(s=El(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[gi]=e}else xo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else ri!==null&&(hd(ri),ri=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Ft===0&&(Ft=3):Rp())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return So(),sd(t,e),t===null&&za(e.stateNode.containerInfo),qt(e),null;case 10:return up(e.type._context),qt(e),null;case 17:return vn(e.type)&&$c(),qt(e),null;case 19:if(vt(St),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)jo(s,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=eu(t),o!==null){for(e.flags|=128,jo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ct()>Eo&&(e.flags|=128,i=!0,jo(s,!1),e.lanes=4194304)}else{if(!i)if(t=eu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),jo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return qt(e),null}else 2*Ct()-s.renderingStartTime>Eo&&n!==1073741824&&(e.flags|=128,i=!0,jo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ct(),e.sibling=null,n=St.current,dt(St,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return Ap(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function fS(t,e){switch(op(e),e.tag){case 1:return vn(e.type)&&$c(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return So(),vt(gn),vt(en),mp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pp(e),null;case 13:if(vt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));xo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(St),null;case 4:return So(),null;case 10:return up(e.type._context),null;case 22:case 23:return Ap(),null;case 24:return null;default:return null}}var Al=!1,Jt=!1,dS=typeof WeakSet=="function"?WeakSet:Set,ve=null;function Qs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function od(t,e,n){try{n()}catch(i){At(t,e,i)}}var cg=!1;function hS(t,e){if(G0=Gc,t=f_(),rp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(W0={focusedElem:t,selectionRange:n},Gc=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,m=g.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:ni(e.type,x),m);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){At(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return g=cg,cg=!1,g}function Ma(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&od(e,n,s)}r=r.next}while(r!==i)}}function Hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ad(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function a2(t){var e=t.alternate;e!==null&&(t.alternate=null,a2(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gi],delete e[ka],delete e[$0],delete e[Yy],delete e[Ky])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function l2(t){return t.tag===5||t.tag===3||t.tag===4}function ug(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||l2(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ld(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=jc));else if(i!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}function cd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(cd(t,e,n),t=t.sibling;t!==null;)cd(t,e,n),t=t.sibling}var Wt=null,ii=!1;function Qi(t,e,n){for(n=n.child;n!==null;)c2(t,e,n),n=n.sibling}function c2(t,e,n){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount(Iu,n)}catch{}switch(n.tag){case 5:Jt||Qs(n,e);case 6:var i=Wt,r=ii;Wt=null,Qi(t,e,n),Wt=i,ii=r,Wt!==null&&(ii?(t=Wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Wt.removeChild(n.stateNode));break;case 18:Wt!==null&&(ii?(t=Wt,n=n.stateNode,t.nodeType===8?Ef(t.parentNode,n):t.nodeType===1&&Ef(t,n),Na(t)):Ef(Wt,n.stateNode));break;case 4:i=Wt,r=ii,Wt=n.stateNode.containerInfo,ii=!0,Qi(t,e,n),Wt=i,ii=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&od(n,e,o),r=r.next}while(r!==i)}Qi(t,e,n);break;case 1:if(!Jt&&(Qs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){At(n,e,a)}Qi(t,e,n);break;case 21:Qi(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,Qi(t,e,n),Jt=i):Qi(t,e,n);break;default:Qi(t,e,n)}}function fg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dS),e.forEach(function(i){var r=MS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Wt=a.stateNode,ii=!1;break e;case 3:Wt=a.stateNode.containerInfo,ii=!0;break e;case 4:Wt=a.stateNode.containerInfo,ii=!0;break e}a=a.return}if(Wt===null)throw Error(re(160));c2(s,o,r),Wt=null,ii=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)u2(e,t),e=e.sibling}function u2(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(e,t),di(t),i&4){try{Ma(3,t,t.return),Hu(3,t)}catch(x){At(t,t.return,x)}try{Ma(5,t,t.return)}catch(x){At(t,t.return,x)}}break;case 1:Zn(e,t),di(t),i&512&&n!==null&&Qs(n,n.return);break;case 5:if(Zn(e,t),di(t),i&512&&n!==null&&Qs(n,n.return),t.flags&32){var r=t.stateNode;try{ba(r,"")}catch(x){At(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Dv(r,s),I0(a,o);var c=I0(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?zv(r,d):u==="dangerouslySetInnerHTML"?Uv(r,d):u==="children"?ba(r,d):Xh(r,u,d,c)}switch(a){case"input":C0(r,s);break;case"textarea":Iv(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?oo(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?oo(r,!!s.multiple,s.defaultValue,!0):oo(r,!!s.multiple,s.multiple?[]:"",!1))}r[ka]=s}catch(x){At(t,t.return,x)}}break;case 6:if(Zn(e,t),di(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){At(t,t.return,x)}}break;case 3:if(Zn(e,t),di(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Na(e.containerInfo)}catch(x){At(t,t.return,x)}break;case 4:Zn(e,t),di(t);break;case 13:Zn(e,t),di(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(wp=Ct())),i&4&&fg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(c=Jt)||u,Zn(e,t),Jt=c):Zn(e,t),di(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ve=t,u=t.child;u!==null;){for(d=ve=u;ve!==null;){switch(f=ve,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ma(4,f,f.return);break;case 1:Qs(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){At(i,n,x)}}break;case 5:Qs(f,f.return);break;case 22:if(f.memoizedState!==null){hg(d);continue}}p!==null?(p.return=f,ve=p):hg(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Fv("display",o))}catch(x){At(t,t.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){At(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Zn(e,t),di(t),i&4&&fg(t);break;case 21:break;default:Zn(e,t),di(t)}}function di(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(l2(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ba(r,""),i.flags&=-33);var s=ug(t);cd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=ug(t);ld(t,a,o);break;default:throw Error(re(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pS(t,e,n){ve=t,f2(t)}function f2(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Al;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Jt;a=Al;var c=Jt;if(Al=o,(Jt=l)&&!c)for(ve=r;ve!==null;)o=ve,l=o.child,o.tag===22&&o.memoizedState!==null?pg(r):l!==null?(l.return=o,ve=l):pg(r);for(;s!==null;)ve=s,f2(s),s=s.sibling;ve=r,Al=a,Jt=c}dg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):dg(t)}}function dg(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||Hu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ni(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Km(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Km(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Na(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Jt||e.flags&512&&ad(e)}catch(f){At(e,e.return,f)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function hg(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function pg(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hu(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{ad(e)}catch(l){At(e,s,l)}break;case 5:var o=e.return;try{ad(e)}catch(l){At(e,o,l)}}}catch(l){At(e,e.return,l)}if(e===t){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var mS=Math.ceil,iu=Yi.ReactCurrentDispatcher,Mp=Yi.ReactCurrentOwner,Xn=Yi.ReactCurrentBatchConfig,et=0,Vt=null,Dt=null,Xt=0,Tn=0,eo=Lr(0),Ft=0,Xa=null,cs=0,Vu=0,Ep=0,Ea=null,pn=null,wp=0,Eo=1/0,Di=null,ru=!1,ud=null,yr=null,Rl=!1,hr=null,su=0,wa=0,fd=null,Ec=-1,wc=0;function an(){return et&6?Ct():Ec!==-1?Ec:Ec=Ct()}function Sr(t){return t.mode&1?et&2&&Xt!==0?Xt&-Xt:Jy.transition!==null?(wc===0&&(wc=Yv()),wc):(t=ut,t!==0||(t=window.event,t=t===void 0?16:n_(t.type)),t):1}function ui(t,e,n,i){if(50<wa)throw wa=0,fd=null,Error(re(185));nl(t,n,i),(!(et&2)||t!==Vt)&&(t===Vt&&(!(et&2)&&(Vu|=n),Ft===4&&ur(t,Xt)),_n(t,i),n===1&&et===0&&!(e.mode&1)&&(Eo=Ct()+500,Ou&&Dr()))}function _n(t,e){var n=t.callbackNode;Jx(t,e);var i=Vc(t,t===Vt?Xt:0);if(i===0)n!==null&&Em(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Em(n),e===1)t.tag===0?Zy(mg.bind(null,t)):S_(mg.bind(null,t)),$y(function(){!(et&6)&&Dr()}),n=null;else{switch(Kv(i)){case 1:n=Kh;break;case 4:n=$v;break;case 16:n=Hc;break;case 536870912:n=qv;break;default:n=Hc}n=x2(n,d2.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function d2(t,e){if(Ec=-1,wc=0,et&6)throw Error(re(327));var n=t.callbackNode;if(fo()&&t.callbackNode!==n)return null;var i=Vc(t,t===Vt?Xt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ou(t,i);else{e=i;var r=et;et|=2;var s=p2();(Vt!==t||Xt!==e)&&(Di=null,Eo=Ct()+500,is(t,e));do try{_S();break}catch(a){h2(t,a)}while(!0);cp(),iu.current=s,et=r,Dt!==null?e=0:(Vt=null,Xt=0,e=Ft)}if(e!==0){if(e===2&&(r=O0(t),r!==0&&(i=r,e=dd(t,r))),e===1)throw n=Xa,is(t,0),ur(t,i),_n(t,Ct()),n;if(e===6)ur(t,i);else{if(r=t.current.alternate,!(i&30)&&!gS(r)&&(e=ou(t,i),e===2&&(s=O0(t),s!==0&&(i=s,e=dd(t,s))),e===1))throw n=Xa,is(t,0),ur(t,i),_n(t,Ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Vr(t,pn,Di);break;case 3:if(ur(t,i),(i&130023424)===i&&(e=wp+500-Ct(),10<e)){if(Vc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=j0(Vr.bind(null,t,pn,Di),e);break}Vr(t,pn,Di);break;case 4:if(ur(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ci(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*mS(i/1960))-i,10<i){t.timeoutHandle=j0(Vr.bind(null,t,pn,Di),i);break}Vr(t,pn,Di);break;case 5:Vr(t,pn,Di);break;default:throw Error(re(329))}}}return _n(t,Ct()),t.callbackNode===n?d2.bind(null,t):null}function dd(t,e){var n=Ea;return t.current.memoizedState.isDehydrated&&(is(t,e).flags|=256),t=ou(t,e),t!==2&&(e=pn,pn=n,e!==null&&hd(e)),t}function hd(t){pn===null?pn=t:pn.push.apply(pn,t)}function gS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!fi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~Ep,e&=~Vu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ci(e),i=1<<n;t[n]=-1,e&=~i}}function mg(t){if(et&6)throw Error(re(327));fo();var e=Vc(t,0);if(!(e&1))return _n(t,Ct()),null;var n=ou(t,e);if(t.tag!==0&&n===2){var i=O0(t);i!==0&&(e=i,n=dd(t,i))}if(n===1)throw n=Xa,is(t,0),ur(t,e),_n(t,Ct()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,pn,Di),_n(t,Ct()),null}function Tp(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(Eo=Ct()+500,Ou&&Dr())}}function us(t){hr!==null&&hr.tag===0&&!(et&6)&&fo();var e=et;et|=1;var n=Xn.transition,i=ut;try{if(Xn.transition=null,ut=1,t)return t()}finally{ut=i,Xn.transition=n,et=e,!(et&6)&&Dr()}}function Ap(){Tn=eo.current,vt(eo)}function is(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jy(n)),Dt!==null)for(n=Dt.return;n!==null;){var i=n;switch(op(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&$c();break;case 3:So(),vt(gn),vt(en),mp();break;case 5:pp(i);break;case 4:So();break;case 13:vt(St);break;case 19:vt(St);break;case 10:up(i.type._context);break;case 22:case 23:Ap()}n=n.return}if(Vt=t,Dt=t=Mr(t.current,null),Xt=Tn=e,Ft=0,Xa=null,Ep=Vu=cs=0,pn=Ea=null,Zr!==null){for(e=0;e<Zr.length;e++)if(n=Zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Zr=null}return t}function h2(t,e){do{var n=Dt;try{if(cp(),yc.current=nu,tu){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}tu=!1}if(ls=0,Bt=Nt=Et=null,Sa=!1,Va=0,Mp.current=null,n===null||n.return===null){Ft=1,Xa=e,Dt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Xt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=ng(o);if(p!==null){p.flags&=-257,ig(p,o,a,s,e),p.mode&1&&tg(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){tg(s,c,e),Rp();break e}l=Error(re(426))}}else if(_t&&a.mode&1){var m=ng(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),ig(m,o,a,s,e),ap(Mo(l,a));break e}}s=l=Mo(l,a),Ft!==4&&(Ft=2),Ea===null?Ea=[s]:Ea.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=K_(s,l,e);Ym(s,h);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(yr===null||!yr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Z_(s,a,e);Ym(s,S);break e}}s=s.return}while(s!==null)}g2(n)}catch(C){e=C,Dt===n&&n!==null&&(Dt=n=n.return);continue}break}while(!0)}function p2(){var t=iu.current;return iu.current=nu,t===null?nu:t}function Rp(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Vt===null||!(cs&268435455)&&!(Vu&268435455)||ur(Vt,Xt)}function ou(t,e){var n=et;et|=2;var i=p2();(Vt!==t||Xt!==e)&&(Di=null,is(t,e));do try{vS();break}catch(r){h2(t,r)}while(!0);if(cp(),et=n,iu.current=i,Dt!==null)throw Error(re(261));return Vt=null,Xt=0,Ft}function vS(){for(;Dt!==null;)m2(Dt)}function _S(){for(;Dt!==null&&!Gx();)m2(Dt)}function m2(t){var e=_2(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?g2(t):Dt=e,Mp.current=null}function g2(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fS(n,e),n!==null){n.flags&=32767,Dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,Dt=null;return}}else if(n=uS(n,e,Tn),n!==null){Dt=n;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=t}while(e!==null);Ft===0&&(Ft=5)}function Vr(t,e,n){var i=ut,r=Xn.transition;try{Xn.transition=null,ut=1,xS(t,e,n,i)}finally{Xn.transition=r,ut=i}return null}function xS(t,e,n,i){do fo();while(hr!==null);if(et&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Qx(t,s),t===Vt&&(Dt=Vt=null,Xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rl||(Rl=!0,x2(Hc,function(){return fo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xn.transition,Xn.transition=null;var o=ut;ut=1;var a=et;et|=4,Mp.current=null,hS(t,n),u2(n,t),ky(W0),Gc=!!G0,W0=G0=null,t.current=n,pS(n),Wx(),et=a,ut=o,Xn.transition=s}else t.current=n;if(Rl&&(Rl=!1,hr=t,su=r),s=t.pendingLanes,s===0&&(yr=null),$x(n.stateNode),_n(t,Ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ru)throw ru=!1,t=ud,ud=null,t;return su&1&&t.tag!==0&&fo(),s=t.pendingLanes,s&1?t===fd?wa++:(wa=0,fd=t):wa=0,Dr(),null}function fo(){if(hr!==null){var t=Kv(su),e=Xn.transition,n=ut;try{if(Xn.transition=null,ut=16>t?16:t,hr===null)var i=!1;else{if(t=hr,hr=null,su=0,et&6)throw Error(re(331));var r=et;for(et|=4,ve=t.current;ve!==null;){var s=ve,o=s.child;if(ve.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ve=c;ve!==null;){var u=ve;switch(u.tag){case 0:case 11:case 15:Ma(8,u,s)}var d=u.child;if(d!==null)d.return=u,ve=d;else for(;ve!==null;){u=ve;var f=u.sibling,p=u.return;if(a2(u),u===c){ve=null;break}if(f!==null){f.return=p,ve=f;break}ve=p}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ma(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ve=h;break e}ve=s.return}}var _=t.current;for(ve=_;ve!==null;){o=ve;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,ve=v;else e:for(o=_;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hu(9,a)}}catch(C){At(a,a.return,C)}if(a===o){ve=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ve=S;break e}ve=a.return}}if(et=r,Dr(),yi&&typeof yi.onPostCommitFiberRoot=="function")try{yi.onPostCommitFiberRoot(Iu,t)}catch{}i=!0}return i}finally{ut=n,Xn.transition=e}}return!1}function gg(t,e,n){e=Mo(n,e),e=K_(t,e,1),t=xr(t,e,1),e=an(),t!==null&&(nl(t,1,e),_n(t,e))}function At(t,e,n){if(t.tag===3)gg(t,t,n);else for(;e!==null;){if(e.tag===3){gg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(yr===null||!yr.has(i))){t=Mo(n,t),t=Z_(e,t,1),e=xr(e,t,1),t=an(),e!==null&&(nl(e,1,t),_n(e,t));break}}e=e.return}}function yS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(Xt&n)===n&&(Ft===4||Ft===3&&(Xt&130023424)===Xt&&500>Ct()-wp?is(t,0):Ep|=n),_n(t,e)}function v2(t,e){e===0&&(t.mode&1?(e=vl,vl<<=1,!(vl&130023424)&&(vl=4194304)):e=1);var n=an();t=Wi(t,e),t!==null&&(nl(t,e,n),_n(t,n))}function SS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),v2(t,n)}function MS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),v2(t,n)}var _2;_2=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,cS(t,e,n);mn=!!(t.flags&131072)}else mn=!1,_t&&e.flags&1048576&&M_(e,Kc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Mc(t,e),t=e.pendingProps;var r=_o(e,en.current);uo(e,n),r=vp(null,e,i,t,r,n);var s=_p();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(s=!0,qc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,dp(e),r.updater=Bu,e.stateNode=r,r._reactInternals=e,Q0(e,i,t,n),e=nd(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&sp(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Mc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=wS(i),t=ni(i,t),r){case 0:e=td(null,e,i,t,n);break e;case 1:e=og(null,e,i,t,n);break e;case 11:e=rg(null,e,i,t,n);break e;case 14:e=sg(null,e,i,ni(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),td(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),og(t,e,i,r,n);case 3:e:{if(t2(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,C_(t,e),Qc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Mo(Error(re(423)),e),e=ag(t,e,i,n,r);break e}else if(i!==r){r=Mo(Error(re(424)),e),e=ag(t,e,i,n,r);break e}else for(Rn=_r(e.stateNode.containerInfo.firstChild),Pn=e,_t=!0,ri=null,n=A_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xo(),i===r){e=Xi(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return P_(e),t===null&&K0(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,X0(i,r)?o=null:s!==null&&X0(i,s)&&(e.flags|=32),e2(t,e),rn(t,e,o,n),e.child;case 6:return t===null&&K0(e),null;case 13:return n2(t,e,n);case 4:return hp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=yo(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),rg(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,dt(Zc,i._currentValue),i._currentValue=o,s!==null)if(fi(s.value,o)){if(s.children===r.children&&!gn.current){e=Xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Bi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Z0(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Z0(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,uo(e,n),r=$n(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=ni(i,e.pendingProps),r=ni(i.type,r),sg(t,e,i,r,n);case 15:return J_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Mc(t,e),e.tag=1,vn(i)?(t=!0,qc(e)):t=!1,uo(e,n),Y_(e,i,r),Q0(e,i,r,n),nd(null,e,i,!0,t,n);case 19:return i2(t,e,n);case 22:return Q_(t,e,n)}throw Error(re(156,e.tag))};function x2(t,e){return jv(t,e)}function ES(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,e,n,i){return new ES(t,e,n,i)}function Cp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wS(t){if(typeof t=="function")return Cp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$h)return 11;if(t===qh)return 14}return 2}function Mr(t,e){var n=t.alternate;return n===null?(n=Vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Tc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Cp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ws:return rs(n.children,r,s,e);case jh:o=8,r|=8;break;case E0:return t=Vn(12,n,e,r|2),t.elementType=E0,t.lanes=s,t;case w0:return t=Vn(13,n,e,r),t.elementType=w0,t.lanes=s,t;case T0:return t=Vn(19,n,e,r),t.elementType=T0,t.lanes=s,t;case Pv:return Gu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Rv:o=10;break e;case Cv:o=9;break e;case $h:o=11;break e;case qh:o=14;break e;case ar:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Vn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function rs(t,e,n,i){return t=Vn(7,t,i,e),t.lanes=n,t}function Gu(t,e,n,i){return t=Vn(22,t,i,e),t.elementType=Pv,t.lanes=n,t.stateNode={isHidden:!1},t}function Lf(t,e,n){return t=Vn(6,t,null,e),t.lanes=n,t}function Df(t,e,n){return e=Vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function TS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=df(0),this.expirationTimes=df(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=df(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Pp(t,e,n,i,r,s,o,a,l){return t=new TS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dp(s),t}function AS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function y2(t){if(!t)return Ar;t=t._reactInternals;e:{if(xs(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(vn(n))return y_(t,n,e)}return e}function S2(t,e,n,i,r,s,o,a,l){return t=Pp(n,i,!0,t,r,s,o,a,l),t.context=y2(null),n=t.current,i=an(),r=Sr(n),s=Bi(i,r),s.callback=e??null,xr(n,s,r),t.current.lanes=r,nl(t,r,i),_n(t,i),t}function Wu(t,e,n,i){var r=e.current,s=an(),o=Sr(r);return n=y2(n),e.context===null?e.context=n:e.pendingContext=n,e=Bi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=xr(r,e,o),t!==null&&(ui(t,r,o,s),xc(t,r,o)),o}function au(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bp(t,e){vg(t,e),(t=t.alternate)&&vg(t,e)}function RS(){return null}var M2=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lp(t){this._internalRoot=t}Xu.prototype.render=Lp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Wu(t,e,null,null)};Xu.prototype.unmount=Lp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;us(function(){Wu(null,t,null,null)}),e[Gi]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&t_(t)}};function Dp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ju(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _g(){}function CS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=au(o);s.call(c)}}var o=S2(e,i,t,0,null,!1,!1,"",_g);return t._reactRootContainer=o,t[Gi]=o.current,za(t.nodeType===8?t.parentNode:t),us(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=au(l);a.call(c)}}var l=Pp(t,0,!1,null,null,!1,!1,"",_g);return t._reactRootContainer=l,t[Gi]=l.current,za(t.nodeType===8?t.parentNode:t),us(function(){Wu(e,l,n,i)}),l}function $u(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=au(o);a.call(l)}}Wu(e,o,t,r)}else o=CS(n,e,t,r,i);return au(o)}Zv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=aa(e.pendingLanes);n!==0&&(Zh(e,n|1),_n(e,Ct()),!(et&6)&&(Eo=Ct()+500,Dr()))}break;case 13:us(function(){var i=Wi(t,1);if(i!==null){var r=an();ui(i,t,1,r)}}),bp(t,1)}};Jh=function(t){if(t.tag===13){var e=Wi(t,134217728);if(e!==null){var n=an();ui(e,t,134217728,n)}bp(t,134217728)}};Jv=function(t){if(t.tag===13){var e=Sr(t),n=Wi(t,e);if(n!==null){var i=an();ui(n,t,e,i)}bp(t,e)}};Qv=function(){return ut};e_=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};U0=function(t,e,n){switch(e){case"input":if(C0(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=zu(i);if(!r)throw Error(re(90));Lv(i),C0(i,r)}}}break;case"textarea":Iv(t,n);break;case"select":e=n.value,e!=null&&oo(t,!!n.multiple,e,!1)}};Bv=Tp;Hv=us;var PS={usingClientEntryPoint:!1,Events:[rl,qs,zu,Ov,kv,Tp]},$o={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bS={bundleType:$o.bundleType,version:$o.version,rendererPackageName:$o.rendererPackageName,rendererConfig:$o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Wv(t),t===null?null:t.stateNode},findFiberByHostInstance:$o.findFiberByHostInstance||RS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{Iu=Cl.inject(bS),yi=Cl}catch{}}Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PS;Dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dp(e))throw Error(re(200));return AS(t,e,null,n)};Dn.createRoot=function(t,e){if(!Dp(t))throw Error(re(299));var n=!1,i="",r=M2;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Pp(t,1,!1,null,null,n,!1,i,r),t[Gi]=e.current,za(t.nodeType===8?t.parentNode:t),new Lp(e)};Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=Wv(e),t=t===null?null:t.stateNode,t};Dn.flushSync=function(t){return us(t)};Dn.hydrate=function(t,e,n){if(!ju(e))throw Error(re(200));return $u(null,t,e,!0,n)};Dn.hydrateRoot=function(t,e,n){if(!Dp(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=M2;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=S2(e,null,t,1,n??null,r,!1,s,o),t[Gi]=e.current,za(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Xu(e)};Dn.render=function(t,e,n){if(!ju(e))throw Error(re(200));return $u(null,t,e,!1,n)};Dn.unmountComponentAtNode=function(t){if(!ju(t))throw Error(re(40));return t._reactRootContainer?(us(function(){$u(null,null,t,!1,function(){t._reactRootContainer=null,t[Gi]=null})}),!0):!1};Dn.unstable_batchedUpdates=Tp;Dn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ju(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return $u(t,e,n,!1,i)};Dn.version="18.3.1-next-f1338f8080-20240426";function E2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E2)}catch(t){console.error(t)}}E2(),Ev.exports=Dn;var LS=Ev.exports,xg=LS;S0.createRoot=xg.createRoot,S0.hydrateRoot=xg.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ip="169",DS=0,yg=1,IS=2,w2=1,NS=2,Pi=3,Rr=0,ln=1,vi=2,Er=0,ho=1,Sg=2,Mg=3,Eg=4,US=5,jr=100,FS=101,zS=102,OS=103,kS=104,BS=200,HS=201,VS=202,GS=203,pd=204,md=205,WS=206,XS=207,jS=208,$S=209,qS=210,YS=211,KS=212,ZS=213,JS=214,gd=0,vd=1,_d=2,wo=3,xd=4,yd=5,Sd=6,Md=7,T2=0,QS=1,eM=2,wr=0,tM=1,nM=2,iM=3,rM=4,sM=5,oM=6,aM=7,A2=300,To=301,Ao=302,Ed=303,wd=304,qu=306,Td=1e3,Qr=1001,Ad=1002,Gn=1003,lM=1004,Pl=1005,si=1006,If=1007,es=1008,ji=1009,R2=1010,C2=1011,ja=1012,Np=1013,fs=1014,zi=1015,ol=1016,Up=1017,Fp=1018,Ro=1020,P2=35902,b2=1021,L2=1022,ai=1023,D2=1024,I2=1025,po=1026,Co=1027,N2=1028,zp=1029,U2=1030,Op=1031,kp=1033,Ac=33776,Rc=33777,Cc=33778,Pc=33779,Rd=35840,Cd=35841,Pd=35842,bd=35843,Ld=36196,Dd=37492,Id=37496,Nd=37808,Ud=37809,Fd=37810,zd=37811,Od=37812,kd=37813,Bd=37814,Hd=37815,Vd=37816,Gd=37817,Wd=37818,Xd=37819,jd=37820,$d=37821,bc=36492,qd=36494,Yd=36495,F2=36283,Kd=36284,Zd=36285,Jd=36286,cM=3200,uM=3201,fM=0,dM=1,fr="",pi="srgb",Ir="srgb-linear",Bp="display-p3",Yu="display-p3-linear",lu="linear",gt="srgb",cu="rec709",uu="p3",Es=7680,wg=519,hM=512,pM=513,mM=514,z2=515,gM=516,vM=517,_M=518,xM=519,Qd=35044,Tg="300 es",Oi=2e3,fu=2001;class Oo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ag=1234567;const Ta=Math.PI/180,$a=180/Math.PI;function Hi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function sn(t,e,n){return Math.max(e,Math.min(n,t))}function Hp(t,e){return(t%e+e)%e}function yM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function SM(t,e,n){return t!==e?(n-t)/(e-t):0}function Aa(t,e,n){return(1-n)*t+n*e}function MM(t,e,n,i){return Aa(t,e,1-Math.exp(-n*i))}function EM(t,e=1){return e-Math.abs(Hp(t,e*2)-e)}function wM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function TM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function AM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function RM(t,e){return t+Math.random()*(e-t)}function CM(t){return t*(.5-Math.random())}function PM(t){t!==void 0&&(Ag=t);let e=Ag+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bM(t){return t*Ta}function LM(t){return t*$a}function DM(t){return(t&t-1)===0&&t!==0}function IM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function NM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function UM(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*d,l*f,a*c);break;case"YZY":t.set(l*f,a*u,l*d,a*c);break;case"ZXZ":t.set(l*d,l*f,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function oi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function lt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Rg={DEG2RAD:Ta,RAD2DEG:$a,generateUUID:Hi,clamp:sn,euclideanModulo:Hp,mapLinear:yM,inverseLerp:SM,lerp:Aa,damp:MM,pingpong:EM,smoothstep:wM,smootherstep:TM,randInt:AM,randFloat:RM,randFloatSpread:CM,seededRandom:PM,degToRad:bM,radToDeg:LM,isPowerOfTwo:DM,ceilPowerOfTwo:IM,floorPowerOfTwo:NM,setQuaternionFromProperEuler:UM,normalize:lt,denormalize:oi};class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],x=r[0],m=r[3],h=r[6],_=r[1],v=r[4],S=r[7],C=r[2],A=r[5],T=r[8];return s[0]=o*x+a*_+l*C,s[3]=o*m+a*v+l*A,s[6]=o*h+a*S+l*T,s[1]=c*x+u*_+d*C,s[4]=c*m+u*v+d*A,s[7]=c*h+u*S+d*T,s[2]=f*x+p*_+g*C,s[5]=f*m+p*v+g*A,s[8]=f*h+p*S+g*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=n*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Nf.makeScale(e,n)),this}rotate(e){return this.premultiply(Nf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nf=new Ve;function O2(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function du(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function FM(){const t=du("canvas");return t.style.display="block",t}const Cg={};function Lc(t){t in Cg||(Cg[t]=!0,console.warn(t))}function zM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function OM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function kM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Pg=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bg=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qo={[Ir]:{transfer:lu,primaries:cu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[pi]:{transfer:gt,primaries:cu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Yu]:{transfer:lu,primaries:uu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(bg),fromReference:t=>t.applyMatrix3(Pg)},[Bp]:{transfer:gt,primaries:uu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(bg),fromReference:t=>t.applyMatrix3(Pg).convertLinearToSRGB()}},BM=new Set([Ir,Yu]),st={enabled:!0,_workingColorSpace:Ir,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!BM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=qo[e].toReference,r=qo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return qo[t].primaries},getTransfer:function(t){return t===fr?lu:qo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(qo[e].luminanceCoefficients)}};function mo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Uf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ws;class HM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ws===void 0&&(ws=du("canvas")),ws.width=e.width,ws.height=e.height;const i=ws.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ws}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=du("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mo(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(mo(n[i]/255)*255):n[i]=mo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VM=0;class k2{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Hi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ff(r[o].image)):s.push(Ff(r[o]))}else s=Ff(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ff(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?HM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GM=0;class cn extends Oo{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=Qr,r=Qr,s=si,o=es,a=ai,l=ji,c=cn.DEFAULT_ANISOTROPY,u=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=Hi(),this.name="",this.source=new k2(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==A2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Td:e.x=e.x-Math.floor(e.x);break;case Qr:e.x=e.x<0?0:1;break;case Ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Td:e.y=e.y-Math.floor(e.y);break;case Qr:e.y=e.y<0?0:1;break;case Ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=A2;cn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(p+1)/2,C=(h+1)/2,A=(u+f)/4,T=(d+x)/4,P=(g+m)/4;return v>S&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=T/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=P/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-x)/_,this.z=(f-u)/_,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WM extends Oo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new k2(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends WM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class B2 extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class XM extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=g,e[n+3]=x;return}if(d!==x||l!==f||c!==p||u!==g){let m=1-a;const h=l*f+c*p+u*g+d*x,_=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const C=Math.sqrt(v),A=Math.atan2(C,h*_);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const S=a*_;if(l=l*m+f*S,c=c*m+p*S,u=u*m+g*S,d=d*m+x*S,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*d+l*p-c*f,e[n+1]=l*g+u*f+c*d-a*p,e[n+2]=c*g+u*p+a*f-l*d,e[n+3]=u*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Lg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Lg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zf.copy(this).projectOnVector(e),this.sub(zf)}reflect(e){return this.sub(zf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zf=new O,Lg=new hs;class al{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(s,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bl.copy(i.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yo),Ll.subVectors(this.max,Yo),Ts.subVectors(e.a,Yo),As.subVectors(e.b,Yo),Rs.subVectors(e.c,Yo),er.subVectors(As,Ts),tr.subVectors(Rs,As),Ur.subVectors(Ts,Rs);let n=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Ur.z,Ur.y,er.z,0,-er.x,tr.z,0,-tr.x,Ur.z,0,-Ur.x,-er.y,er.x,0,-tr.y,tr.x,0,-Ur.y,Ur.x,0];return!Of(n,Ts,As,Rs,Ll)||(n=[1,0,0,0,1,0,0,0,1],!Of(n,Ts,As,Rs,Ll))?!1:(Dl.crossVectors(er,tr),n=[Dl.x,Dl.y,Dl.z],Of(n,Ts,As,Rs,Ll))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new O,new O,new O,new O,new O,new O,new O,new O],Jn=new O,bl=new al,Ts=new O,As=new O,Rs=new O,er=new O,tr=new O,Ur=new O,Yo=new O,Ll=new O,Dl=new O,Fr=new O;function Of(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Fr.fromArray(t,s);const a=r.x*Math.abs(Fr.x)+r.y*Math.abs(Fr.y)+r.z*Math.abs(Fr.z),l=e.dot(Fr),c=n.dot(Fr),u=i.dot(Fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const jM=new al,Ko=new O,kf=new O;class ll{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):jM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);const n=Ko.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ko,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(kf)),this.expandByPoint(Ko.copy(e.center).sub(kf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new O,Bf=new O,Il=new O,nr=new O,Hf=new O,Nl=new O,Vf=new O;class Ku{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,n),wi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Bf.copy(e).add(n).multiplyScalar(.5),Il.copy(n).sub(e).normalize(),nr.copy(this.origin).sub(Bf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Il),a=nr.dot(this.direction),l=-nr.dot(Il),c=nr.lengthSq(),u=Math.abs(1-o*o);let d,f,p,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const x=1/u;d*=x,f*=x,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Bf).addScaledVector(Il,f),p}intersectSphere(e,n){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,n,i,r,s){Hf.subVectors(n,e),Nl.subVectors(i,e),Vf.crossVectors(Hf,Nl);let o=this.direction.dot(Vf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;nr.subVectors(this.origin,e);const l=a*this.direction.dot(Nl.crossVectors(nr,Nl));if(l<0)return null;const c=a*this.direction.dot(Hf.cross(nr));if(c<0||l+c>o)return null;const u=-a*nr.dot(Vf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,g,x,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,g,x,m)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,g,x,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Cs.setFromMatrixColumn(e,0).length(),s=1/Cs.setFromMatrixColumn(e,1).length(),o=1/Cs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,g=a*u,x=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=f-x*c,n[9]=-a*l,n[2]=x-f*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,g=c*u,x=c*d;n[0]=f+x*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=x+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,g=c*u,x=c*d;n[0]=f-x*a,n[4]=-o*d,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=x-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,g=a*u,x=a*d;n[0]=l*u,n[4]=g*c-p,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=x-f*d,n[8]=g*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+g,n[10]=f-x*d}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+x,n[5]=o*u,n[9]=p*d-g,n[2]=g*d-p,n[6]=a*u,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose($M,e,qM)}lookAt(e,n,i){const r=this.elements;return En.subVectors(e,n),En.lengthSq()===0&&(En.z=1),En.normalize(),ir.crossVectors(i,En),ir.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),ir.crossVectors(i,En)),ir.normalize(),Ul.crossVectors(En,ir),r[0]=ir.x,r[4]=Ul.x,r[8]=En.x,r[1]=ir.y,r[5]=Ul.y,r[9]=En.y,r[2]=ir.z,r[6]=Ul.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],h=i[14],_=i[3],v=i[7],S=i[11],C=i[15],A=r[0],T=r[4],P=r[8],W=r[12],y=r[1],M=r[5],H=r[9],N=r[13],j=r[2],D=r[6],B=r[10],Y=r[14],L=r[3],Z=r[7],$=r[11],ne=r[15];return s[0]=o*A+a*y+l*j+c*L,s[4]=o*T+a*M+l*D+c*Z,s[8]=o*P+a*H+l*B+c*$,s[12]=o*W+a*N+l*Y+c*ne,s[1]=u*A+d*y+f*j+p*L,s[5]=u*T+d*M+f*D+p*Z,s[9]=u*P+d*H+f*B+p*$,s[13]=u*W+d*N+f*Y+p*ne,s[2]=g*A+x*y+m*j+h*L,s[6]=g*T+x*M+m*D+h*Z,s[10]=g*P+x*H+m*B+h*$,s[14]=g*W+x*N+m*Y+h*ne,s[3]=_*A+v*y+S*j+C*L,s[7]=_*T+v*M+S*D+C*Z,s[11]=_*P+v*H+S*B+C*$,s[15]=_*W+v*N+S*Y+C*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],h=e[15];return g*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+x*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],h=e[15],_=d*m*c-x*f*c+x*l*p-a*m*p-d*l*h+a*f*h,v=g*f*c-u*m*c-g*l*p+o*m*p+u*l*h-o*f*h,S=u*x*c-g*d*c+g*a*p-o*x*p-u*a*h+o*d*h,C=g*d*l-u*x*l-g*a*f+o*x*f+u*a*m-o*d*m,A=n*_+i*v+r*S+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=_*T,e[1]=(x*f*s-d*m*s-x*r*p+i*m*p+d*r*h-i*f*h)*T,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*h+i*l*h)*T,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*T,e[4]=v*T,e[5]=(u*m*s-g*f*s+g*r*p-n*m*p-u*r*h+n*f*h)*T,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*h-n*l*h)*T,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*T,e[8]=S*T,e[9]=(g*d*s-u*x*s-g*i*p+n*x*p+u*i*h-n*d*h)*T,e[10]=(o*x*s-g*a*s+g*i*c-n*x*c-o*i*h+n*a*h)*T,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*T,e[12]=C*T,e[13]=(u*x*r-g*d*r+g*i*f-n*x*f-u*i*m+n*d*m)*T,e[14]=(g*a*r-o*x*r-g*i*l+n*x*l+o*i*m-n*a*m)*T,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,g=s*d,x=o*u,m=o*d,h=a*d,_=l*c,v=l*u,S=l*d,C=i.x,A=i.y,T=i.z;return r[0]=(1-(x+h))*C,r[1]=(p+S)*C,r[2]=(g-v)*C,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(f+h))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(g+v)*T,r[9]=(m-_)*T,r[10]=(1-(f+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Cs.set(r[0],r[1],r[2]).length();const o=Cs.set(r[4],r[5],r[6]).length(),a=Cs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Qn.copy(this);const c=1/s,u=1/o,d=1/a;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,n.setFromRotationMatrix(Qn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Oi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,g;if(a===Oi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===fu)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Oi){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),f=(n+e)*c,p=(i+r)*u;let g,x;if(a===Oi)g=(o+s)*d,x=-2*d;else if(a===fu)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Cs=new O,Qn=new xt,$M=new O(0,0,0),qM=new O(1,1,1),ir=new O,Ul=new O,En=new O,Dg=new xt,Ig=new hs;class $i{constructor(e=0,n=0,i=0,r=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Dg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ig.setFromEuler(this),this.setFromQuaternion(Ig,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class Vp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YM=0;const Ng=new O,Ps=new hs,Ti=new xt,Fl=new O,Zo=new O,KM=new O,ZM=new hs,Ug=new O(1,0,0),Fg=new O(0,1,0),zg=new O(0,0,1),Og={type:"added"},JM={type:"removed"},bs={type:"childadded",child:null},Gf={type:"childremoved",child:null};class Qt extends Oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new O,n=new $i,i=new hs,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ve}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(Ug,e)}rotateY(e){return this.rotateOnAxis(Fg,e)}rotateZ(e){return this.rotateOnAxis(zg,e)}translateOnAxis(e,n){return Ng.copy(e).applyQuaternion(this.quaternion),this.position.add(Ng.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ug,e)}translateY(e){return this.translateOnAxis(Fg,e)}translateZ(e){return this.translateOnAxis(zg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Fl.copy(e):Fl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Zo,Fl,this.up):Ti.lookAt(Fl,Zo,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),Ps.setFromRotationMatrix(Ti),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Og),bs.child=e,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(JM),Gf.child=e,this.dispatchEvent(Gf),Gf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Og),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,KM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,ZM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qt.DEFAULT_UP=new O(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new O,Ai=new O,Wf=new O,Ri=new O,Ls=new O,Ds=new O,kg=new O,Xf=new O,jf=new O,$f=new O,qf=new Pt,Yf=new Pt,Kf=new Pt;class Bn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ei.subVectors(e,n),r.cross(ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ei.subVectors(r,n),Ai.subVectors(i,n),Wf.subVectors(e,n);const o=ei.dot(ei),a=ei.dot(Ai),l=ei.dot(Wf),c=Ai.dot(Ai),u=Ai.dot(Wf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return qf.setScalar(0),Yf.setScalar(0),Kf.setScalar(0),qf.fromBufferAttribute(e,n),Yf.fromBufferAttribute(e,i),Kf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(qf,s.x),o.addScaledVector(Yf,s.y),o.addScaledVector(Kf,s.z),o}static isFrontFacing(e,n,i,r){return ei.subVectors(i,n),Ai.subVectors(e,n),ei.cross(Ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ei.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ls.subVectors(r,i),Ds.subVectors(s,i),Xf.subVectors(e,i);const l=Ls.dot(Xf),c=Ds.dot(Xf);if(l<=0&&c<=0)return n.copy(i);jf.subVectors(e,r);const u=Ls.dot(jf),d=Ds.dot(jf);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ls,o);$f.subVectors(e,s);const p=Ls.dot($f),g=Ds.dot($f);if(g>=0&&p<=g)return n.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Ds,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return kg.subVectors(s,r),a=(d-u)/(d-u+(p-g)),n.copy(r).addScaledVector(kg,a);const h=1/(m+x+f);return o=x*h,a=f*h,n.copy(i).addScaledVector(Ls,o).addScaledVector(Ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const H2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},zl={h:0,s:0,l:0};function Zf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=Hp(e,1),n=sn(n,0,1),i=sn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Zf(o,s,e+1/3),this.g=Zf(o,s,e),this.b=Zf(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,n=pi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pi){const i=H2[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}copyLinearToSRGB(e){return this.r=Uf(e.r),this.g=Uf(e.g),this.b=Uf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return st.fromWorkingColorSpace(Kt.copy(this),e),Math.round(sn(Kt.r*255,0,255))*65536+Math.round(sn(Kt.g*255,0,255))*256+Math.round(sn(Kt.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,s=Kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=pi){st.fromWorkingColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==pi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+n,rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(rr),e.getHSL(zl);const i=Aa(rr.h,zl.h,n),r=Aa(rr.s,zl.s,n),s=Aa(rr.l,zl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Xe;Xe.NAMES=H2;let QM=0;class ys extends Oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=ho,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pd,this.blendDst=md,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(i.blending=this.blending),this.side!==Rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pd&&(i.blendSrc=this.blendSrc),this.blendDst!==md&&(i.blendDst=this.blendDst),this.blendEquation!==jr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hu extends ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=T2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new O,Ol=new je;class on{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Qd,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ol.fromBufferAttribute(this,n),Ol.applyMatrix3(e),this.setXY(n,Ol.x,Ol.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=oi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=lt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=oi(n,this.array)),n}setX(e,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=oi(n,this.array)),n}setY(e,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=oi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=oi(n,this.array)),n}setW(e,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qd&&(e.usage=this.usage),e}}class V2 extends on{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class G2 extends on{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xn extends on{constructor(e,n,i){super(new Float32Array(e),n,i)}}let eE=0;const Un=new xt,Jf=new Qt,Is=new O,wn=new al,Jo=new al,kt=new O;class Ut extends Oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(O2(e)?G2:V2)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return Jf.lookAt(e),Jf.updateMatrix(),this.applyMatrix4(Jf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new al);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ll);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Jo.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(wn.min,Jo.min),wn.expandByPoint(kt),kt.addVectors(wn.max,Jo.max),wn.expandByPoint(kt)):(wn.expandByPoint(Jo.min),wn.expandByPoint(Jo.max))}wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(Is.fromBufferAttribute(e,c),kt.add(Is)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new O,l[P]=new O;const c=new O,u=new O,d=new O,f=new je,p=new je,g=new je,x=new O,m=new O;function h(P,W,y){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,W),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,W),g.fromBufferAttribute(s,y),u.sub(c),d.sub(c),p.sub(f),g.sub(f);const M=1/(p.x*g.y-g.x*p.y);isFinite(M)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(M),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(M),a[P].add(x),a[W].add(x),a[y].add(x),l[P].add(m),l[W].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,W=_.length;P<W;++P){const y=_[P],M=y.start,H=y.count;for(let N=M,j=M+H;N<j;N+=3)h(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const v=new O,S=new O,C=new O,A=new O;function T(P){C.fromBufferAttribute(r,P),A.copy(C);const W=a[P];v.copy(W),v.sub(C.multiplyScalar(C.dot(W))).normalize(),S.crossVectors(A,W);const M=S.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,M)}for(let P=0,W=_.length;P<W;++P){const y=_[P],M=y.start,H=y.count;for(let N=M,j=M+H;N<j;N+=3)T(e.getX(N+0)),T(e.getX(N+1)),T(e.getX(N+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new on(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ut,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bg=new xt,zr=new Ku,kl=new ll,Hg=new O,Bl=new O,Hl=new O,Vl=new O,Qf=new O,Gl=new O,Vg=new O,Wl=new O;class li extends Qt{constructor(e=new Ut,n=new hu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Gl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Qf.fromBufferAttribute(d,e),o?Gl.addScaledVector(Qf,u):Gl.addScaledVector(Qf.sub(n),u))}n.add(Gl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kl.copy(i.boundingSphere),kl.applyMatrix4(s),zr.copy(e.ray).recast(e.near),!(kl.containsPoint(zr.origin)===!1&&(zr.intersectSphere(kl,Hg)===null||zr.origin.distanceToSquared(Hg)>(e.far-e.near)**2))&&(Bg.copy(s).invert(),zr.copy(e.ray).applyMatrix4(Bg),!(i.boundingBox!==null&&zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,zr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],h=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,C=v;S<C;S+=3){const A=a.getX(S),T=a.getX(S+1),P=a.getX(S+2);r=Xl(this,h,e,i,c,u,d,A,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const _=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);r=Xl(this,o,e,i,c,u,d,_,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],h=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,C=v;S<C;S+=3){const A=S,T=S+1,P=S+2;r=Xl(this,h,e,i,c,u,d,A,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const _=m,v=m+1,S=m+2;r=Xl(this,o,e,i,c,u,d,_,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function tE(t,e,n,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Rr,a),l===null)return null;Wl.copy(a),Wl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Wl);return c<n.near||c>n.far?null:{distance:c,point:Wl.clone(),object:t}}function Xl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Bl),t.getVertexPosition(l,Hl),t.getVertexPosition(c,Vl);const u=tE(t,e,n,i,Bl,Hl,Vl,Vg);if(u){const d=new O;Bn.getBarycoord(Vg,Bl,Hl,Vl,d),r&&(u.uv=Bn.getInterpolatedAttribute(r,a,l,c,d,new je)),s&&(u.uv1=Bn.getInterpolatedAttribute(s,a,l,c,d,new je)),o&&(u.normal=Bn.getInterpolatedAttribute(o,a,l,c,d,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new O,materialIndex:0};Bn.getNormal(Bl,Hl,Vl,f.normal),u.face=f,u.barycoord=d}return u}class cl extends Ut{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(u,3)),this.setAttribute("uv",new xn(d,2));function g(x,m,h,_,v,S,C,A,T,P,W){const y=S/T,M=C/P,H=S/2,N=C/2,j=A/2,D=T+1,B=P+1;let Y=0,L=0;const Z=new O;for(let $=0;$<B;$++){const ne=$*M-N;for(let xe=0;xe<D;xe++){const De=xe*y-H;Z[x]=De*_,Z[m]=ne*v,Z[h]=j,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[h]=A>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(xe/T),d.push(1-$/P),Y+=1}}for(let $=0;$<P;$++)for(let ne=0;ne<T;ne++){const xe=f+ne+D*$,De=f+ne+D*($+1),q=f+(ne+1)+D*($+1),ee=f+(ne+1)+D*$;l.push(xe,De,ee),l.push(De,q,ee),L+=6}a.addGroup(p,L,W),p+=L,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Po(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=Po(t[n]);for(const r in i)e[r]=i[r]}return e}function nE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function W2(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const iE={clone:Po,merge:nn};var rE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rE,this.fragmentShader=sE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Po(e.uniforms),this.uniformsGroups=nE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class X2 extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Oi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new O,Gg=new je,Wg=new je;class kn extends X2{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=$a*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,n){return this.getViewBounds(e,Gg,Wg),n.subVectors(Wg,Gg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ta*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ns=-90,Us=1;class oE extends Qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(Ns,Us,e,n);r.layers=this.layers,this.add(r);const s=new kn(Ns,Us,e,n);s.layers=this.layers,this.add(s);const o=new kn(Ns,Us,e,n);o.layers=this.layers,this.add(o);const a=new kn(Ns,Us,e,n);a.layers=this.layers,this.add(a);const l=new kn(Ns,Us,e,n);l.layers=this.layers,this.add(l);const c=new kn(Ns,Us,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class j2 extends cn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:To,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aE extends ds{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new j2(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:si}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new cl(5,5,5),s=new qi({name:"CubemapFromEquirect",uniforms:Po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Er});s.uniforms.tEquirect.value=n;const o=new li(r,s),a=n.minFilter;return n.minFilter===es&&(n.minFilter=si),new oE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const e0=new O,lE=new O,cE=new Ve;class Gr{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=e0.subVectors(i,n).cross(lE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(e0),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||cE.getNormalMatrix(e),r=this.coplanarPoint(e0).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new ll,jl=new O;class $2{constructor(e=new Gr,n=new Gr,i=new Gr,r=new Gr,s=new Gr,o=new Gr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Oi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],x=r[10],m=r[11],h=r[12],_=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-p,S-h).normalize(),i[1].setComponents(l+s,f+c,m+p,S+h).normalize(),i[2].setComponents(l+o,f+u,m+g,S+_).normalize(),i[3].setComponents(l-o,f-u,m-g,S-_).normalize(),i[4].setComponents(l-a,f-d,m-x,S-v).normalize(),n===Oi)i[5].setComponents(l+a,f+d,m+x,S+v).normalize();else if(n===fu)i[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(jl.x=r.normal.x>0?e.max.x:e.min.x,jl.y=r.normal.y>0?e.max.y:e.min.y,jl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(jl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function q2(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function uE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Zu extends Ut{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],g=[],x=[],m=[];for(let h=0;h<u;h++){const _=h*f-o;for(let v=0;v<c;v++){const S=v*d-s;g.push(S,-_,0),x.push(0,0,1),m.push(v/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const v=_+c*h,S=_+c*(h+1),C=_+1+c*(h+1),A=_+1+c*h;p.push(v,S,A),p.push(S,C,A)}this.setIndex(p),this.setAttribute("position",new xn(g,3)),this.setAttribute("normal",new xn(x,3)),this.setAttribute("uv",new xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zu(e.width,e.height,e.widthSegments,e.heightSegments)}}var fE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_E=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ME=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,IE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,NE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,UE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HE="gl_FragColor = linearToOutputTexel( gl_FragColor );",VE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,WE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$E=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,QE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e4=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t4=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n4=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,i4=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,r4=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s4=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o4=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a4=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l4=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,c4=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,u4=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,f4=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,d4=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h4=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p4=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m4=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g4=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v4=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_4=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x4=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,y4=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S4=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M4=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E4=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w4=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T4=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A4=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,R4=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C4=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,P4=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,b4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D4=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I4=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,N4=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U4=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F4=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z4=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O4=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k4=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,B4=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H4=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V4=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G4=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W4=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X4=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j4=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$4=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,q4=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Y4=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,K4=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z4=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,J4=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q4=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ew=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_w=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ew=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ww=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Aw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Uw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ow=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:fE,alphahash_pars_fragment:dE,alphamap_fragment:hE,alphamap_pars_fragment:pE,alphatest_fragment:mE,alphatest_pars_fragment:gE,aomap_fragment:vE,aomap_pars_fragment:_E,batching_pars_vertex:xE,batching_vertex:yE,begin_vertex:SE,beginnormal_vertex:ME,bsdfs:EE,iridescence_fragment:wE,bumpmap_pars_fragment:TE,clipping_planes_fragment:AE,clipping_planes_pars_fragment:RE,clipping_planes_pars_vertex:CE,clipping_planes_vertex:PE,color_fragment:bE,color_pars_fragment:LE,color_pars_vertex:DE,color_vertex:IE,common:NE,cube_uv_reflection_fragment:UE,defaultnormal_vertex:FE,displacementmap_pars_vertex:zE,displacementmap_vertex:OE,emissivemap_fragment:kE,emissivemap_pars_fragment:BE,colorspace_fragment:HE,colorspace_pars_fragment:VE,envmap_fragment:GE,envmap_common_pars_fragment:WE,envmap_pars_fragment:XE,envmap_pars_vertex:jE,envmap_physical_pars_fragment:i4,envmap_vertex:$E,fog_vertex:qE,fog_pars_vertex:YE,fog_fragment:KE,fog_pars_fragment:ZE,gradientmap_pars_fragment:JE,lightmap_pars_fragment:QE,lights_lambert_fragment:e4,lights_lambert_pars_fragment:t4,lights_pars_begin:n4,lights_toon_fragment:r4,lights_toon_pars_fragment:s4,lights_phong_fragment:o4,lights_phong_pars_fragment:a4,lights_physical_fragment:l4,lights_physical_pars_fragment:c4,lights_fragment_begin:u4,lights_fragment_maps:f4,lights_fragment_end:d4,logdepthbuf_fragment:h4,logdepthbuf_pars_fragment:p4,logdepthbuf_pars_vertex:m4,logdepthbuf_vertex:g4,map_fragment:v4,map_pars_fragment:_4,map_particle_fragment:x4,map_particle_pars_fragment:y4,metalnessmap_fragment:S4,metalnessmap_pars_fragment:M4,morphinstance_vertex:E4,morphcolor_vertex:w4,morphnormal_vertex:T4,morphtarget_pars_vertex:A4,morphtarget_vertex:R4,normal_fragment_begin:C4,normal_fragment_maps:P4,normal_pars_fragment:b4,normal_pars_vertex:L4,normal_vertex:D4,normalmap_pars_fragment:I4,clearcoat_normal_fragment_begin:N4,clearcoat_normal_fragment_maps:U4,clearcoat_pars_fragment:F4,iridescence_pars_fragment:z4,opaque_fragment:O4,packing:k4,premultiplied_alpha_fragment:B4,project_vertex:H4,dithering_fragment:V4,dithering_pars_fragment:G4,roughnessmap_fragment:W4,roughnessmap_pars_fragment:X4,shadowmap_pars_fragment:j4,shadowmap_pars_vertex:$4,shadowmap_vertex:q4,shadowmask_pars_fragment:Y4,skinbase_vertex:K4,skinning_pars_vertex:Z4,skinning_vertex:J4,skinnormal_vertex:Q4,specularmap_fragment:ew,specularmap_pars_fragment:tw,tonemapping_fragment:nw,tonemapping_pars_fragment:iw,transmission_fragment:rw,transmission_pars_fragment:sw,uv_pars_fragment:ow,uv_pars_vertex:aw,uv_vertex:lw,worldpos_vertex:cw,background_vert:uw,background_frag:fw,backgroundCube_vert:dw,backgroundCube_frag:hw,cube_vert:pw,cube_frag:mw,depth_vert:gw,depth_frag:vw,distanceRGBA_vert:_w,distanceRGBA_frag:xw,equirect_vert:yw,equirect_frag:Sw,linedashed_vert:Mw,linedashed_frag:Ew,meshbasic_vert:ww,meshbasic_frag:Tw,meshlambert_vert:Aw,meshlambert_frag:Rw,meshmatcap_vert:Cw,meshmatcap_frag:Pw,meshnormal_vert:bw,meshnormal_frag:Lw,meshphong_vert:Dw,meshphong_frag:Iw,meshphysical_vert:Nw,meshphysical_frag:Uw,meshtoon_vert:Fw,meshtoon_frag:zw,points_vert:Ow,points_frag:kw,shadow_vert:Bw,shadow_frag:Hw,sprite_vert:Vw,sprite_frag:Gw},ce={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},mi={basic:{uniforms:nn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:nn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Xe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:nn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:nn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:nn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Xe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:nn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:nn([ce.points,ce.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:nn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:nn([ce.common,ce.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:nn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:nn([ce.sprite,ce.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:nn([ce.common,ce.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:nn([ce.lights,ce.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};mi.physical={uniforms:nn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const $l={r:0,b:0,g:0},kr=new $i,Ww=new xt;function Xw(t,e,n,i,r,s,o){const a=new Xe(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function x(_){let v=!1;const S=g(_);S===null?h(a,l):S&&S.isColor&&(h(S,1),v=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===qu)?(u===void 0&&(u=new li(new cl(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Po(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),kr.copy(v.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ww.makeRotationFromEuler(kr)),u.material.toneMapped=st.getTransfer(S.colorSpace)!==gt,(d!==S||f!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new li(new Zu(2,2),new qi({name:"BackgroundMaterial",uniforms:Po(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=st.getTransfer(S.colorSpace)!==gt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function h(_,v){_.getRGB($l,W2(t)),i.buffers.color.setClear($l.r,$l.g,$l.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,h(a,l)},render:x,addToRenderList:m}}function jw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,M,H,N,j){let D=!1;const B=d(N,H,M);s!==B&&(s=B,c(s.object)),D=p(y,N,H,j),D&&g(y,N,H,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,S(y,M,H,N),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function d(y,M,H){const N=H.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let D=j[M.id];D===void 0&&(D={},j[M.id]=D);let B=D[N];return B===void 0&&(B=f(l()),D[N]=B),B}function f(y){const M=[],H=[],N=[];for(let j=0;j<n;j++)M[j]=0,H[j]=0,N[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:H,attributeDivisors:N,object:y,attributes:{},index:null}}function p(y,M,H,N){const j=s.attributes,D=M.attributes;let B=0;const Y=H.getAttributes();for(const L in Y)if(Y[L].location>=0){const $=j[L];let ne=D[L];if(ne===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),$===void 0||$.attribute!==ne||ne&&$.data!==ne.data)return!0;B++}return s.attributesNum!==B||s.index!==N}function g(y,M,H,N){const j={},D=M.attributes;let B=0;const Y=H.getAttributes();for(const L in Y)if(Y[L].location>=0){let $=D[L];$===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&($=y.instanceColor));const ne={};ne.attribute=$,$&&$.data&&(ne.data=$.data),j[L]=ne,B++}s.attributes=j,s.attributesNum=B,s.index=N}function x(){const y=s.newAttributes;for(let M=0,H=y.length;M<H;M++)y[M]=0}function m(y){h(y,0)}function h(y,M){const H=s.newAttributes,N=s.enabledAttributes,j=s.attributeDivisors;H[y]=1,N[y]===0&&(t.enableVertexAttribArray(y),N[y]=1),j[y]!==M&&(t.vertexAttribDivisor(y,M),j[y]=M)}function _(){const y=s.newAttributes,M=s.enabledAttributes;for(let H=0,N=M.length;H<N;H++)M[H]!==y[H]&&(t.disableVertexAttribArray(H),M[H]=0)}function v(y,M,H,N,j,D,B){B===!0?t.vertexAttribIPointer(y,M,H,j,D):t.vertexAttribPointer(y,M,H,N,j,D)}function S(y,M,H,N){x();const j=N.attributes,D=H.getAttributes(),B=M.defaultAttributeValues;for(const Y in D){const L=D[Y];if(L.location>=0){let Z=j[Y];if(Z===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){const $=Z.normalized,ne=Z.itemSize,xe=e.get(Z);if(xe===void 0)continue;const De=xe.buffer,q=xe.type,ee=xe.bytesPerElement,le=q===t.INT||q===t.UNSIGNED_INT||Z.gpuType===Np;if(Z.isInterleavedBufferAttribute){const ue=Z.data,se=ue.stride,U=Z.offset;if(ue.isInstancedInterleavedBuffer){for(let Te=0;Te<L.locationSize;Te++)h(L.location+Te,ue.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Te=0;Te<L.locationSize;Te++)m(L.location+Te);t.bindBuffer(t.ARRAY_BUFFER,De);for(let Te=0;Te<L.locationSize;Te++)v(L.location+Te,ne/L.locationSize,q,$,se*ee,(U+ne/L.locationSize*Te)*ee,le)}else{if(Z.isInstancedBufferAttribute){for(let ue=0;ue<L.locationSize;ue++)h(L.location+ue,Z.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ue=0;ue<L.locationSize;ue++)m(L.location+ue);t.bindBuffer(t.ARRAY_BUFFER,De);for(let ue=0;ue<L.locationSize;ue++)v(L.location+ue,ne/L.locationSize,q,$,ne*ee,ne/L.locationSize*ue*ee,le)}}else if(B!==void 0){const $=B[Y];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(L.location,$);break;case 3:t.vertexAttrib3fv(L.location,$);break;case 4:t.vertexAttrib4fv(L.location,$);break;default:t.vertexAttrib1fv(L.location,$)}}}}_()}function C(){P();for(const y in i){const M=i[y];for(const H in M){const N=M[H];for(const j in N)u(N[j].object),delete N[j];delete M[H]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const M=i[y.id];for(const H in M){const N=M[H];for(const j in N)u(N[j].object),delete N[j];delete M[H]}delete i[y.id]}function T(y){for(const M in i){const H=i[M];if(H[y.id]===void 0)continue;const N=H[y.id];for(const j in N)u(N[j].object),delete N[j];delete H[y.id]}}function P(){W(),o=!0,s!==r&&(s=r,c(s.object))}function W(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:W,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function $w(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];for(let x=0;x<f.length;x++)n.update(g,i,f[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function qw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==ai&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===ol&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ji&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==zi&&!P)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:C,maxSamples:A}}function Yw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Gr,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,v=_*4;let S=h.clippingState||null;l.value=S,S=u(g,f,v,p);for(let C=0;C!==v;++C)S[C]=n[C];h.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const h=p+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,S=p;v!==x;++v,S+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Kw(t){let e=new WeakMap;function n(o,a){return a===Ed?o.mapping=To:a===wd&&(o.mapping=Ao),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ed||a===wd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new aE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Zw extends X2{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const to=4,Xg=[.125,.215,.35,.446,.526,.582],$r=20,t0=new Zw,jg=new Xe;let n0=null,i0=0,r0=0,s0=!1;const Wr=(1+Math.sqrt(5))/2,Fs=1/Wr,$g=[new O(-Wr,Fs,0),new O(Wr,Fs,0),new O(-Fs,0,Wr),new O(Fs,0,Wr),new O(0,Wr,-Fs),new O(0,Wr,Fs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class qg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){n0=this._renderer.getRenderTarget(),i0=this._renderer.getActiveCubeFace(),r0=this._renderer.getActiveMipmapLevel(),s0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(n0,i0,r0),this._renderer.xr.enabled=s0,e.scissorTest=!1,ql(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===To||e.mapping===Ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),n0=this._renderer.getRenderTarget(),i0=this._renderer.getActiveCubeFace(),r0=this._renderer.getActiveMipmapLevel(),s0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:si,minFilter:si,generateMipmaps:!1,type:ol,format:ai,colorSpace:Ir,depthBuffer:!1},r=Yg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jw(s)),this._blurMaterial=Qw(s,e,n)}return r}_compileMaterial(e){const n=new li(this._lodPlanes[0],e);this._renderer.compile(n,t0)}_sceneToCubeUV(e,n,i,r){const a=new kn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(jg),u.toneMapping=wr,u.autoClear=!1;const p=new hu({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new li(new cl,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(jg),x=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):_===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const v=this._cubeSize;ql(r,_*v,h>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===To||e.mapping===Ao;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new li(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ql(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,t0)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$g[(r-s-1)%$g.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new li(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*$r-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):$r;m>$r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$r}`);const h=[];let _=0;for(let T=0;T<$r;++T){const P=T/x,W=Math.exp(-P*P/2);h.push(W),T===0?_+=W:T<m&&(_+=2*W)}for(let T=0;T<h.length;T++)h[T]=h[T]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const S=this._sizeLods[r],C=3*S*(r>v-to?r-v+to:0),A=4*(this._cubeSize-S);ql(n,C,A,3*S,2*S),l.setRenderTarget(n),l.render(d,t0)}}function Jw(t){const e=[],n=[],i=[];let r=t;const s=t-to+1+Xg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-to?l=Xg[o-t+to-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,x=3,m=2,h=1,_=new Float32Array(x*g*p),v=new Float32Array(m*g*p),S=new Float32Array(h*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,P=A>2?0:-1,W=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];_.set(W,x*g*A),v.set(f,m*g*A);const y=[A,A,A,A,A,A];S.set(y,h*g*A)}const C=new Ut;C.setAttribute("position",new on(_,x)),C.setAttribute("uv",new on(v,m)),C.setAttribute("faceIndex",new on(S,h)),e.push(C),r>to&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Yg(t,e,n){const i=new ds(t,e,n);return i.texture.mapping=qu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ql(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Qw(t,e,n){const i=new Float32Array($r),r=new O(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Kg(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Zg(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Gp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ed||l===wd,u=l===To||l===Ao;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new qg(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new qg(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function tT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Lc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function nT(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let m=0,h=x.length;m<h;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const x=p[g];for(let m=0,h=x.length;m<h;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let v=0,S=_.length;v<S;v+=3){const C=_[v+0],A=_[v+1],T=_[v+2];f.push(C,A,A,T,T,C)}}else if(g!==void 0){const _=g.array;x=g.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const C=v+0,A=v+1,T=v+2;f.push(C,A,A,T,T,C)}}else return;const m=new(O2(f)?G2:V2)(f,1);m.version=x;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function iT(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,f*o,g),n.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}function d(f,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,x,0,g);let h=0;for(let _=0;_<g;_++)h+=p[_];for(let _=0;_<x.length;_++)n.update(h,i,x[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function rT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function sT(t,e,n){const i=new WeakMap,r=new Pt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let y=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*A*4*d),P=new B2(T,C,A,d);P.type=zi,P.needsUpdate=!0;const W=S*4;for(let M=0;M<d;M++){const H=h[M],N=_[M],j=v[M],D=C*A*4*M;for(let B=0;B<H.count;B++){const Y=B*W;g===!0&&(r.fromBufferAttribute(H,B),T[D+Y+0]=r.x,T[D+Y+1]=r.y,T[D+Y+2]=r.z,T[D+Y+3]=0),x===!0&&(r.fromBufferAttribute(N,B),T[D+Y+4]=r.x,T[D+Y+5]=r.y,T[D+Y+6]=r.z,T[D+Y+7]=0),m===!0&&(r.fromBufferAttribute(j,B),T[D+Y+8]=r.x,T[D+Y+9]=r.y,T[D+Y+10]=r.z,T[D+Y+11]=j.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new je(C,A)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function oT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Y2 extends cn{constructor(e,n,i,r,s,o,a,l,c,u=po){if(u!==po&&u!==Co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===po&&(i=fs),i===void 0&&u===Co&&(i=Ro),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Gn,this.minFilter=l!==void 0?l:Gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const K2=new cn,Jg=new Y2(1,1),Z2=new B2,J2=new XM,Q2=new j2,Qg=[],e1=[],t1=new Float32Array(16),n1=new Float32Array(9),i1=new Float32Array(4);function ko(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Qg[r];if(s===void 0&&(s=new Float32Array(r),Qg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ju(t,e){let n=e1[e];n===void 0&&(n=new Int32Array(e),e1[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function aT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function fT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(zt(n,i))return;i1.set(i),t.uniformMatrix2fv(this.addr,!1,i1),Ot(n,i)}}function dT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(zt(n,i))return;n1.set(i),t.uniformMatrix3fv(this.addr,!1,n1),Ot(n,i)}}function hT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(zt(n,i))return;t1.set(i),t.uniformMatrix4fv(this.addr,!1,t1),Ot(n,i)}}function pT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function mT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function _T(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function MT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Jg.compareFunction=z2,s=Jg):s=K2,n.setTexture2D(e||s,r)}function ET(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||J2,r)}function wT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Q2,r)}function TT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Z2,r)}function AT(t){switch(t){case 5126:return aT;case 35664:return lT;case 35665:return cT;case 35666:return uT;case 35674:return fT;case 35675:return dT;case 35676:return hT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return vT;case 5125:return _T;case 36294:return xT;case 36295:return yT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return ET;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return TT}}function RT(t,e){t.uniform1fv(this.addr,e)}function CT(t,e){const n=ko(e,this.size,2);t.uniform2fv(this.addr,n)}function PT(t,e){const n=ko(e,this.size,3);t.uniform3fv(this.addr,n)}function bT(t,e){const n=ko(e,this.size,4);t.uniform4fv(this.addr,n)}function LT(t,e){const n=ko(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function DT(t,e){const n=ko(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function IT(t,e){const n=ko(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function NT(t,e){t.uniform1iv(this.addr,e)}function UT(t,e){t.uniform2iv(this.addr,e)}function FT(t,e){t.uniform3iv(this.addr,e)}function zT(t,e){t.uniform4iv(this.addr,e)}function OT(t,e){t.uniform1uiv(this.addr,e)}function kT(t,e){t.uniform2uiv(this.addr,e)}function BT(t,e){t.uniform3uiv(this.addr,e)}function HT(t,e){t.uniform4uiv(this.addr,e)}function VT(t,e,n){const i=this.cache,r=e.length,s=Ju(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||K2,s[o])}function GT(t,e,n){const i=this.cache,r=e.length,s=Ju(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||J2,s[o])}function WT(t,e,n){const i=this.cache,r=e.length,s=Ju(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Q2,s[o])}function XT(t,e,n){const i=this.cache,r=e.length,s=Ju(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Z2,s[o])}function jT(t){switch(t){case 5126:return RT;case 35664:return CT;case 35665:return PT;case 35666:return bT;case 35674:return LT;case 35675:return DT;case 35676:return IT;case 5124:case 35670:return NT;case 35667:case 35671:return UT;case 35668:case 35672:return FT;case 35669:case 35673:return zT;case 5125:return OT;case 36294:return kT;case 36295:return BT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return XT}}class $T{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=AT(n.type)}}class qT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jT(n.type)}}class YT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const o0=/(\w+)(\])?(\[|\.)?/g;function r1(t,e){t.seq.push(e),t.map[e.id]=e}function KT(t,e,n){const i=t.name,r=i.length;for(o0.lastIndex=0;;){const s=o0.exec(i),o=o0.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){r1(n,c===void 0?new $T(a,t,e):new qT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new YT(a),r1(n,d)),n=d}}}class Dc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);KT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function s1(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ZT=37297;let JT=0;function QT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function e6(t){const e=st.getPrimaries(st.workingColorSpace),n=st.getPrimaries(t);let i;switch(e===n?i="":e===uu&&n===cu?i="LinearDisplayP3ToLinearSRGB":e===cu&&n===uu&&(i="LinearSRGBToLinearDisplayP3"),t){case Ir:case Yu:return[i,"LinearTransferOETF"];case pi:case Bp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function o1(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+QT(t.getShaderSource(e),o)}else return r}function t6(t,e){const n=e6(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function n6(t,e){let n;switch(e){case tM:n="Linear";break;case nM:n="Reinhard";break;case iM:n="Cineon";break;case rM:n="ACESFilmic";break;case oM:n="AgX";break;case aM:n="Neutral";break;case sM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Yl=new O;function i6(){st.getLuminanceCoefficients(Yl);const t=Yl.x.toFixed(4),e=Yl.y.toFixed(4),n=Yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r6(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function s6(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function o6(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ca(t){return t!==""}function a1(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function l1(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const a6=/^[ \t]*#include +<([\w\d./]+)>/gm;function eh(t){return t.replace(a6,c6)}const l6=new Map;function c6(t,e){let n=He[e];if(n===void 0){const i=l6.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return eh(n)}const u6=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c1(t){return t.replace(u6,f6)}function f6(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function u1(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function d6(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===w2?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===NS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function h6(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case To:case Ao:e="ENVMAP_TYPE_CUBE";break;case qu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function p6(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ao:e="ENVMAP_MODE_REFRACTION";break}return e}function m6(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case T2:e="ENVMAP_BLENDING_MULTIPLY";break;case QS:e="ENVMAP_BLENDING_MIX";break;case eM:e="ENVMAP_BLENDING_ADD";break}return e}function g6(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function v6(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=d6(n),c=h6(n),u=p6(n),d=m6(n),f=g6(n),p=r6(n),g=s6(s),x=r.createProgram();let m,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ca).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ca).join(`
`),h.length>0&&(h+=`
`)):(m=[u1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),h=[u1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wr?"#define TONE_MAPPING":"",n.toneMapping!==wr?He.tonemapping_pars_fragment:"",n.toneMapping!==wr?n6("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,t6("linearToOutputTexel",n.outputColorSpace),i6(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ca).join(`
`)),o=eh(o),o=a1(o,n),o=l1(o,n),a=eh(a),a=a1(a,n),a=l1(a,n),o=c1(o),a=c1(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Tg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Tg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=_+m+o,S=_+h+a,C=s1(r,r.VERTEX_SHADER,v),A=s1(r,r.FRAGMENT_SHADER,S);r.attachShader(x,C),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(M){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(x).trim(),N=r.getShaderInfoLog(C).trim(),j=r.getShaderInfoLog(A).trim();let D=!0,B=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,C,A);else{const Y=o1(r,C,"vertex"),L=o1(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+H+`
`+Y+`
`+L)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(N===""||j==="")&&(B=!1);B&&(M.diagnostics={runnable:D,programLog:H,vertexShader:{log:N,prefix:m},fragmentShader:{log:j,prefix:h}})}r.deleteShader(C),r.deleteShader(A),P=new Dc(r,x),W=o6(r,x)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let W;this.getAttributes=function(){return W===void 0&&T(this),W};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,ZT)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=JT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}let _6=0;class x6{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new y6(e),n.set(e,i)),i}}class y6{constructor(e){this.id=_6++,this.code=e,this.usedTimes=0}}function S6(t,e,n,i,r,s,o){const a=new Vp,l=new x6,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function h(y,M,H,N,j){const D=N.fog,B=j.geometry,Y=y.isMeshStandardMaterial?N.environment:null,L=(y.isMeshStandardMaterial?n:e).get(y.envMap||Y),Z=L&&L.mapping===qu?L.image.height:null,$=x[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const ne=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,xe=ne!==void 0?ne.length:0;let De=0;B.morphAttributes.position!==void 0&&(De=1),B.morphAttributes.normal!==void 0&&(De=2),B.morphAttributes.color!==void 0&&(De=3);let q,ee,le,ue;if($){const hn=mi[$];q=hn.vertexShader,ee=hn.fragmentShader}else q=y.vertexShader,ee=y.fragmentShader,l.update(y),le=l.getVertexShaderID(y),ue=l.getFragmentShaderID(y);const se=t.getRenderTarget(),U=j.isInstancedMesh===!0,Te=j.isBatchedMesh===!0,ke=!!y.map,de=!!y.matcap,b=!!L,$e=!!y.aoMap,be=!!y.lightMap,Ie=!!y.bumpMap,Le=!!y.normalMap,qe=!!y.displacementMap,Ne=!!y.emissiveMap,R=!!y.metalnessMap,E=!!y.roughnessMap,V=y.anisotropy>0,Q=y.clearcoat>0,ie=y.dispersion>0,J=y.iridescence>0,Re=y.sheen>0,fe=y.transmission>0,ye=V&&!!y.anisotropyMap,tt=Q&&!!y.clearcoatMap,oe=Q&&!!y.clearcoatNormalMap,Se=Q&&!!y.clearcoatRoughnessMap,ze=J&&!!y.iridescenceMap,Oe=J&&!!y.iridescenceThicknessMap,Me=Re&&!!y.sheenColorMap,Ye=Re&&!!y.sheenRoughnessMap,Be=!!y.specularMap,ft=!!y.specularColorMap,F=!!y.specularIntensityMap,me=fe&&!!y.transmissionMap,K=fe&&!!y.thicknessMap,te=!!y.gradientMap,he=!!y.alphaMap,ge=y.alphaTest>0,Ze=!!y.alphaHash,bt=!!y.extensions;let dn=wr;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(dn=t.toneMapping);const nt={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:ee,defines:y.defines,customVertexShaderID:le,customFragmentShaderID:ue,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Te,batchingColor:Te&&j._colorsTexture!==null,instancing:U,instancingColor:U&&j.instanceColor!==null,instancingMorph:U&&j.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ir,alphaToCoverage:!!y.alphaToCoverage,map:ke,matcap:de,envMap:b,envMapMode:b&&L.mapping,envMapCubeUVHeight:Z,aoMap:$e,lightMap:be,bumpMap:Ie,normalMap:Le,displacementMap:p&&qe,emissiveMap:Ne,normalMapObjectSpace:Le&&y.normalMapType===dM,normalMapTangentSpace:Le&&y.normalMapType===fM,metalnessMap:R,roughnessMap:E,anisotropy:V,anisotropyMap:ye,clearcoat:Q,clearcoatMap:tt,clearcoatNormalMap:oe,clearcoatRoughnessMap:Se,dispersion:ie,iridescence:J,iridescenceMap:ze,iridescenceThicknessMap:Oe,sheen:Re,sheenColorMap:Me,sheenRoughnessMap:Ye,specularMap:Be,specularColorMap:ft,specularIntensityMap:F,transmission:fe,transmissionMap:me,thicknessMap:K,gradientMap:te,opaque:y.transparent===!1&&y.blending===ho&&y.alphaToCoverage===!1,alphaMap:he,alphaTest:ge,alphaHash:Ze,combine:y.combine,mapUv:ke&&m(y.map.channel),aoMapUv:$e&&m(y.aoMap.channel),lightMapUv:be&&m(y.lightMap.channel),bumpMapUv:Ie&&m(y.bumpMap.channel),normalMapUv:Le&&m(y.normalMap.channel),displacementMapUv:qe&&m(y.displacementMap.channel),emissiveMapUv:Ne&&m(y.emissiveMap.channel),metalnessMapUv:R&&m(y.metalnessMap.channel),roughnessMapUv:E&&m(y.roughnessMap.channel),anisotropyMapUv:ye&&m(y.anisotropyMap.channel),clearcoatMapUv:tt&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&m(y.sheenRoughnessMap.channel),specularMapUv:Be&&m(y.specularMap.channel),specularColorMapUv:ft&&m(y.specularColorMap.channel),specularIntensityMapUv:F&&m(y.specularIntensityMap.channel),transmissionMapUv:me&&m(y.transmissionMap.channel),thicknessMapUv:K&&m(y.thicknessMap.channel),alphaMapUv:he&&m(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Le||V),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!B.attributes.uv&&(ke||he),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:De,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&H.length>0,shadowMapType:t.shadowMap.type,toneMapping:dn,decodeVideoTexture:ke&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===vi,flipSided:y.side===ln,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:bt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&y.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function _(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const H in y.defines)M.push(H),M.push(y.defines[H]);return y.isRawShaderMaterial===!1&&(v(M,y),S(M,y),M.push(t.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function v(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),y.push(a.mask)}function C(y){const M=x[y.type];let H;if(M){const N=mi[M];H=iE.clone(N.uniforms)}else H=y.uniforms;return H}function A(y,M){let H;for(let N=0,j=u.length;N<j;N++){const D=u[N];if(D.cacheKey===M){H=D,++H.usedTimes;break}}return H===void 0&&(H=new v6(t,M,y,s),u.push(H)),H}function T(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function P(y){l.remove(y)}function W(){l.dispose()}return{getParameters:h,getProgramCacheKey:_,getUniforms:C,acquireProgram:A,releaseProgram:T,releaseShaderCache:P,programs:u,dispose:W}}function M6(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function E6(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function f1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function d1(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,g,x,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=x,h.group=m),e++,h}function a(d,f,p,g,x,m){const h=o(d,f,p,g,x,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,g,x,m){const h=o(d,f,p,g,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||E6),i.length>1&&i.sort(f||f1),r.length>1&&r.sort(f||f1)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function w6(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new d1,t.set(i,[o])):r>=s.length?(o=new d1,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function T6(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Xe};break;case"SpotLight":n={position:new O,direction:new O,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function A6(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let R6=0;function C6(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function P6(t){const e=new T6,n=A6(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new xt,o=new xt;function a(c){let u=0,d=0,f=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let p=0,g=0,x=0,m=0,h=0,_=0,v=0,S=0,C=0,A=0,T=0;c.sort(C6);for(let W=0,y=c.length;W<y;W++){const M=c[W],H=M.color,N=M.intensity,j=M.distance,D=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=H.r*N,d+=H.g*N,f+=H.b*N;else if(M.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(M.sh.coefficients[B],N);T++}else if(M.isDirectionalLight){const B=e.get(M);if(B.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const Y=M.shadow,L=n.get(M);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=D,i.directionalShadowMatrix[p]=M.shadow.matrix,_++}i.directional[p]=B,p++}else if(M.isSpotLight){const B=e.get(M);B.position.setFromMatrixPosition(M.matrixWorld),B.color.copy(H).multiplyScalar(N),B.distance=j,B.coneCos=Math.cos(M.angle),B.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),B.decay=M.decay,i.spot[x]=B;const Y=M.shadow;if(M.map&&(i.spotLightMap[C]=M.map,C++,Y.updateMatrices(M),M.castShadow&&A++),i.spotLightMatrix[x]=Y.matrix,M.castShadow){const L=n.get(M);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,i.spotShadow[x]=L,i.spotShadowMap[x]=D,S++}x++}else if(M.isRectAreaLight){const B=e.get(M);B.color.copy(H).multiplyScalar(N),B.halfWidth.set(M.width*.5,0,0),B.halfHeight.set(0,M.height*.5,0),i.rectArea[m]=B,m++}else if(M.isPointLight){const B=e.get(M);if(B.color.copy(M.color).multiplyScalar(M.intensity),B.distance=M.distance,B.decay=M.decay,M.castShadow){const Y=M.shadow,L=n.get(M);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,L.shadowCameraNear=Y.camera.near,L.shadowCameraFar=Y.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=D,i.pointShadowMatrix[g]=M.shadow.matrix,v++}i.point[g]=B,g++}else if(M.isHemisphereLight){const B=e.get(M);B.skyColor.copy(M.color).multiplyScalar(N),B.groundColor.copy(M.groundColor).multiplyScalar(N),i.hemi[h]=B,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==h||P.numDirectionalShadows!==_||P.numPointShadows!==v||P.numSpotShadows!==S||P.numSpotMaps!==C||P.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,P.directionalLength=p,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=h,P.numDirectionalShadows=_,P.numPointShadows=v,P.numSpotShadows=S,P.numSpotMaps=C,P.numLightProbes=T,i.version=R6++)}function l(c,u){let d=0,f=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let h=0,_=c.length;h<_;h++){const v=c[h];if(v.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function h1(t){const e=new P6(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function b6(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new h1(t),e.set(r,[a])):s>=o.length?(a=new h1(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class L6 extends ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class D6 extends ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const I6=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N6=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function U6(t,e,n){let i=new $2;const r=new je,s=new je,o=new Pt,a=new L6({depthPacking:uM}),l=new D6,c={},u=n.maxTextureSize,d={[Rr]:ln,[ln]:Rr,[vi]:vi},f=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:I6,fragmentShader:N6}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ut;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new li(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=w2;let h=this.type;this.render=function(A,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const W=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Er),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const N=h!==Pi&&this.type===Pi,j=h===Pi&&this.type!==Pi;for(let D=0,B=A.length;D<B;D++){const Y=A[D],L=Y.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const Z=L.getFrameExtents();if(r.multiply(Z),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,L.mapSize.y=s.y)),L.map===null||N===!0||j===!0){const ne=this.type!==Pi?{minFilter:Gn,magFilter:Gn}:{};L.map!==null&&L.map.dispose(),L.map=new ds(r.x,r.y,ne),L.map.texture.name=Y.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const $=L.getViewportCount();for(let ne=0;ne<$;ne++){const xe=L.getViewport(ne);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),H.viewport(o),L.updateMatrices(Y,ne),i=L.getFrustum(),S(T,P,L.camera,Y,this.type)}L.isPointLightShadow!==!0&&this.type===Pi&&_(L,P),L.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(W,y,M)};function _(A,T){const P=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ds(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,P,f,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,P,p,x,null)}function v(A,T,P,W){let y=null;const M=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(M!==void 0)y=M;else if(y=P.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const H=y.uuid,N=T.uuid;let j=c[H];j===void 0&&(j={},c[H]=j);let D=j[N];D===void 0&&(D=y.clone(),j[N]=D,T.addEventListener("dispose",C)),y=D}if(y.visible=T.visible,y.wireframe=T.wireframe,W===Pi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=t.properties.get(y);H.light=P}return y}function S(A,T,P,W,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Pi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const N=e.update(A),j=A.material;if(Array.isArray(j)){const D=N.groups;for(let B=0,Y=D.length;B<Y;B++){const L=D[B],Z=j[L.materialIndex];if(Z&&Z.visible){const $=v(A,Z,W,y);A.onBeforeShadow(t,A,T,P,N,$,L),t.renderBufferDirect(P,null,N,$,A,L),A.onAfterShadow(t,A,T,P,N,$,L)}}}else if(j.visible){const D=v(A,j,W,y);A.onBeforeShadow(t,A,T,P,N,D,null),t.renderBufferDirect(P,null,N,D,A,null),A.onAfterShadow(t,A,T,P,N,D,null)}}const H=A.children;for(let N=0,j=H.length;N<j;N++)S(H[N],T,P,W,y)}function C(A){A.target.removeEventListener("dispose",C);for(const P in c){const W=c[P],y=A.target.uuid;y in W&&(W[y].dispose(),delete W[y])}}}const F6={[gd]:vd,[_d]:Sd,[xd]:Md,[wo]:yd,[vd]:gd,[Sd]:_d,[Md]:xd,[yd]:wo};function z6(t){function e(){let F=!1;const me=new Pt;let K=null;const te=new Pt(0,0,0,0);return{setMask:function(he){K!==he&&!F&&(t.colorMask(he,he,he,he),K=he)},setLocked:function(he){F=he},setClear:function(he,ge,Ze,bt,dn){dn===!0&&(he*=bt,ge*=bt,Ze*=bt),me.set(he,ge,Ze,bt),te.equals(me)===!1&&(t.clearColor(he,ge,Ze,bt),te.copy(me))},reset:function(){F=!1,K=null,te.set(-1,0,0,0)}}}function n(){let F=!1,me=!1,K=null,te=null,he=null;return{setReversed:function(ge){me=ge},setTest:function(ge){ge?le(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(ge){K!==ge&&!F&&(t.depthMask(ge),K=ge)},setFunc:function(ge){if(me&&(ge=F6[ge]),te!==ge){switch(ge){case gd:t.depthFunc(t.NEVER);break;case vd:t.depthFunc(t.ALWAYS);break;case _d:t.depthFunc(t.LESS);break;case wo:t.depthFunc(t.LEQUAL);break;case xd:t.depthFunc(t.EQUAL);break;case yd:t.depthFunc(t.GEQUAL);break;case Sd:t.depthFunc(t.GREATER);break;case Md:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=ge}},setLocked:function(ge){F=ge},setClear:function(ge){he!==ge&&(t.clearDepth(ge),he=ge)},reset:function(){F=!1,K=null,te=null,he=null}}}function i(){let F=!1,me=null,K=null,te=null,he=null,ge=null,Ze=null,bt=null,dn=null;return{setTest:function(nt){F||(nt?le(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(nt){me!==nt&&!F&&(t.stencilMask(nt),me=nt)},setFunc:function(nt,hn,Mi){(K!==nt||te!==hn||he!==Mi)&&(t.stencilFunc(nt,hn,Mi),K=nt,te=hn,he=Mi)},setOp:function(nt,hn,Mi){(ge!==nt||Ze!==hn||bt!==Mi)&&(t.stencilOp(nt,hn,Mi),ge=nt,Ze=hn,bt=Mi)},setLocked:function(nt){F=nt},setClear:function(nt){dn!==nt&&(t.clearStencil(nt),dn=nt)},reset:function(){F=!1,me=null,K=null,te=null,he=null,ge=null,Ze=null,bt=null,dn=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],p=null,g=!1,x=null,m=null,h=null,_=null,v=null,S=null,C=null,A=new Xe(0,0,0),T=0,P=!1,W=null,y=null,M=null,H=null,N=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,B=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Y)[1]),D=B>=1):Y.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),D=B>=2);let L=null,Z={};const $=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),xe=new Pt().fromArray($),De=new Pt().fromArray(ne);function q(F,me,K,te){const he=new Uint8Array(4),ge=t.createTexture();t.bindTexture(F,ge),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<K;Ze++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(me+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return ge}const ee={};ee[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(t.DEPTH_TEST),s.setFunc(wo),be(!1),Ie(yg),le(t.CULL_FACE),b(Er);function le(F){c[F]!==!0&&(t.enable(F),c[F]=!0)}function ue(F){c[F]!==!1&&(t.disable(F),c[F]=!1)}function se(F,me){return u[F]!==me?(t.bindFramebuffer(F,me),u[F]=me,F===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=me),F===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=me),!0):!1}function U(F,me){let K=f,te=!1;if(F){K=d.get(me),K===void 0&&(K=[],d.set(me,K));const he=F.textures;if(K.length!==he.length||K[0]!==t.COLOR_ATTACHMENT0){for(let ge=0,Ze=he.length;ge<Ze;ge++)K[ge]=t.COLOR_ATTACHMENT0+ge;K.length=he.length,te=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,te=!0);te&&t.drawBuffers(K)}function Te(F){return p!==F?(t.useProgram(F),p=F,!0):!1}const ke={[jr]:t.FUNC_ADD,[FS]:t.FUNC_SUBTRACT,[zS]:t.FUNC_REVERSE_SUBTRACT};ke[OS]=t.MIN,ke[kS]=t.MAX;const de={[BS]:t.ZERO,[HS]:t.ONE,[VS]:t.SRC_COLOR,[pd]:t.SRC_ALPHA,[qS]:t.SRC_ALPHA_SATURATE,[jS]:t.DST_COLOR,[WS]:t.DST_ALPHA,[GS]:t.ONE_MINUS_SRC_COLOR,[md]:t.ONE_MINUS_SRC_ALPHA,[$S]:t.ONE_MINUS_DST_COLOR,[XS]:t.ONE_MINUS_DST_ALPHA,[YS]:t.CONSTANT_COLOR,[KS]:t.ONE_MINUS_CONSTANT_COLOR,[ZS]:t.CONSTANT_ALPHA,[JS]:t.ONE_MINUS_CONSTANT_ALPHA};function b(F,me,K,te,he,ge,Ze,bt,dn,nt){if(F===Er){g===!0&&(ue(t.BLEND),g=!1);return}if(g===!1&&(le(t.BLEND),g=!0),F!==US){if(F!==x||nt!==P){if((m!==jr||v!==jr)&&(t.blendEquation(t.FUNC_ADD),m=jr,v=jr),nt)switch(F){case ho:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sg:t.blendFunc(t.ONE,t.ONE);break;case Mg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Eg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ho:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Mg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Eg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}h=null,_=null,S=null,C=null,A.set(0,0,0),T=0,x=F,P=nt}return}he=he||me,ge=ge||K,Ze=Ze||te,(me!==m||he!==v)&&(t.blendEquationSeparate(ke[me],ke[he]),m=me,v=he),(K!==h||te!==_||ge!==S||Ze!==C)&&(t.blendFuncSeparate(de[K],de[te],de[ge],de[Ze]),h=K,_=te,S=ge,C=Ze),(bt.equals(A)===!1||dn!==T)&&(t.blendColor(bt.r,bt.g,bt.b,dn),A.copy(bt),T=dn),x=F,P=!1}function $e(F,me){F.side===vi?ue(t.CULL_FACE):le(t.CULL_FACE);let K=F.side===ln;me&&(K=!K),be(K),F.blending===ho&&F.transparent===!1?b(Er):b(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const te=F.stencilWrite;o.setTest(te),te&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),qe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function be(F){W!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),W=F)}function Ie(F){F!==DS?(le(t.CULL_FACE),F!==y&&(F===yg?t.cullFace(t.BACK):F===IS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),y=F}function Le(F){F!==M&&(D&&t.lineWidth(F),M=F)}function qe(F,me,K){F?(le(t.POLYGON_OFFSET_FILL),(H!==me||N!==K)&&(t.polygonOffset(me,K),H=me,N=K)):ue(t.POLYGON_OFFSET_FILL)}function Ne(F){F?le(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function R(F){F===void 0&&(F=t.TEXTURE0+j-1),L!==F&&(t.activeTexture(F),L=F)}function E(F,me,K){K===void 0&&(L===null?K=t.TEXTURE0+j-1:K=L);let te=Z[K];te===void 0&&(te={type:void 0,texture:void 0},Z[K]=te),(te.type!==F||te.texture!==me)&&(L!==K&&(t.activeTexture(K),L=K),t.bindTexture(F,me||ee[F]),te.type=F,te.texture=me)}function V(){const F=Z[L];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(F){xe.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),xe.copy(F))}function Me(F){De.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),De.copy(F))}function Ye(F,me){let K=l.get(me);K===void 0&&(K=new WeakMap,l.set(me,K));let te=K.get(F);te===void 0&&(te=t.getUniformBlockIndex(me,F.name),K.set(F,te))}function Be(F,me){const te=l.get(me).get(F);a.get(me)!==te&&(t.uniformBlockBinding(me,te,F.__bindingPointIndex),a.set(me,te))}function ft(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},L=null,Z={},u={},d=new WeakMap,f=[],p=null,g=!1,x=null,m=null,h=null,_=null,v=null,S=null,C=null,A=new Xe(0,0,0),T=0,P=!1,W=null,y=null,M=null,H=null,N=null,xe.set(0,0,t.canvas.width,t.canvas.height),De.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:ue,bindFramebuffer:se,drawBuffers:U,useProgram:Te,setBlending:b,setMaterial:$e,setFlipSided:be,setCullFace:Ie,setLineWidth:Le,setPolygonOffset:qe,setScissorTest:Ne,activeTexture:R,bindTexture:E,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:ie,texImage2D:Se,texImage3D:ze,updateUBOMapping:Ye,uniformBlockBinding:Be,texStorage2D:tt,texStorage3D:oe,texSubImage2D:J,texSubImage3D:Re,compressedTexSubImage2D:fe,compressedTexSubImage3D:ye,scissor:Oe,viewport:Me,reset:ft}}function p1(t,e,n,i){const r=O6(i);switch(n){case b2:return t*e;case D2:return t*e;case I2:return t*e*2;case N2:return t*e/r.components*r.byteLength;case zp:return t*e/r.components*r.byteLength;case U2:return t*e*2/r.components*r.byteLength;case Op:return t*e*2/r.components*r.byteLength;case L2:return t*e*3/r.components*r.byteLength;case ai:return t*e*4/r.components*r.byteLength;case kp:return t*e*4/r.components*r.byteLength;case Ac:case Rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Cc:case Pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cd:case bd:return Math.max(t,16)*Math.max(e,8)/4;case Rd:case Pd:return Math.max(t,8)*Math.max(e,8)/2;case Ld:case Dd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Id:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case zd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Od:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case kd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Xd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case jd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case $d:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case bc:case qd:case Yd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case F2:case Kd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Zd:case Jd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function O6(t){switch(t){case ji:case R2:return{byteLength:1,components:1};case ja:case C2:case ol:return{byteLength:2,components:1};case Up:case Fp:return{byteLength:2,components:4};case fs:case Np:case zi:return{byteLength:4,components:1};case P2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function k6(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return p?new OffscreenCanvas(R,E):du("canvas")}function x(R,E,V){let Q=1;const ie=Ne(R);if((ie.width>V||ie.height>V)&&(Q=V/Math.max(ie.width,ie.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(Q*ie.width),Re=Math.floor(Q*ie.height);d===void 0&&(d=g(J,Re));const fe=E?g(J,Re):d;return fe.width=J,fe.height=Re,fe.getContext("2d").drawImage(R,0,0,J,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+Re+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Gn&&R.minFilter!==si}function h(R){t.generateMipmap(R)}function _(R,E,V,Q,ie=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=E;if(E===t.RED&&(V===t.FLOAT&&(J=t.R32F),V===t.HALF_FLOAT&&(J=t.R16F),V===t.UNSIGNED_BYTE&&(J=t.R8)),E===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(J=t.R8UI),V===t.UNSIGNED_SHORT&&(J=t.R16UI),V===t.UNSIGNED_INT&&(J=t.R32UI),V===t.BYTE&&(J=t.R8I),V===t.SHORT&&(J=t.R16I),V===t.INT&&(J=t.R32I)),E===t.RG&&(V===t.FLOAT&&(J=t.RG32F),V===t.HALF_FLOAT&&(J=t.RG16F),V===t.UNSIGNED_BYTE&&(J=t.RG8)),E===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(J=t.RG8UI),V===t.UNSIGNED_SHORT&&(J=t.RG16UI),V===t.UNSIGNED_INT&&(J=t.RG32UI),V===t.BYTE&&(J=t.RG8I),V===t.SHORT&&(J=t.RG16I),V===t.INT&&(J=t.RG32I)),E===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(J=t.RGB8UI),V===t.UNSIGNED_SHORT&&(J=t.RGB16UI),V===t.UNSIGNED_INT&&(J=t.RGB32UI),V===t.BYTE&&(J=t.RGB8I),V===t.SHORT&&(J=t.RGB16I),V===t.INT&&(J=t.RGB32I)),E===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),V===t.UNSIGNED_INT&&(J=t.RGBA32UI),V===t.BYTE&&(J=t.RGBA8I),V===t.SHORT&&(J=t.RGBA16I),V===t.INT&&(J=t.RGBA32I)),E===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),E===t.RGBA){const Re=ie?lu:st.getTransfer(Q);V===t.FLOAT&&(J=t.RGBA32F),V===t.HALF_FLOAT&&(J=t.RGBA16F),V===t.UNSIGNED_BYTE&&(J=Re===gt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(R,E){let V;return R?E===null||E===fs||E===Ro?V=t.DEPTH24_STENCIL8:E===zi?V=t.DEPTH32F_STENCIL8:E===ja&&(V=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===fs||E===Ro?V=t.DEPTH_COMPONENT24:E===zi?V=t.DEPTH_COMPONENT32F:E===ja&&(V=t.DEPTH_COMPONENT16),V}function S(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Gn&&R.minFilter!==si?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function C(R){const E=R.target;E.removeEventListener("dispose",C),T(E),E.isVideoTexture&&u.delete(E)}function A(R){const E=R.target;E.removeEventListener("dispose",A),W(E)}function T(R){const E=i.get(R);if(E.__webglInit===void 0)return;const V=R.source,Q=f.get(V);if(Q){const ie=Q[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(R),Object.keys(Q).length===0&&f.delete(V)}i.remove(R)}function P(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const V=R.source,Q=f.get(V);delete Q[E.__cacheKey],o.memory.textures--}function W(R){const E=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let ie=0;ie<E.__webglFramebuffer[Q].length;ie++)t.deleteFramebuffer(E.__webglFramebuffer[Q][ie]);else t.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)t.deleteFramebuffer(E.__webglFramebuffer[Q]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=R.textures;for(let Q=0,ie=V.length;Q<ie;Q++){const J=i.get(V[Q]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(V[Q])}i.remove(R)}let y=0;function M(){y=0}function H(){const R=y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),y+=1,R}function N(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function j(R,E){const V=i.get(R);if(R.isVideoTexture&&Le(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(V,R,E);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+E)}function D(R,E){const V=i.get(R);if(R.version>0&&V.__version!==R.version){De(V,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+E)}function B(R,E){const V=i.get(R);if(R.version>0&&V.__version!==R.version){De(V,R,E);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+E)}function Y(R,E){const V=i.get(R);if(R.version>0&&V.__version!==R.version){q(V,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+E)}const L={[Td]:t.REPEAT,[Qr]:t.CLAMP_TO_EDGE,[Ad]:t.MIRRORED_REPEAT},Z={[Gn]:t.NEAREST,[lM]:t.NEAREST_MIPMAP_NEAREST,[Pl]:t.NEAREST_MIPMAP_LINEAR,[si]:t.LINEAR,[If]:t.LINEAR_MIPMAP_NEAREST,[es]:t.LINEAR_MIPMAP_LINEAR},$={[hM]:t.NEVER,[xM]:t.ALWAYS,[pM]:t.LESS,[z2]:t.LEQUAL,[mM]:t.EQUAL,[_M]:t.GEQUAL,[gM]:t.GREATER,[vM]:t.NOTEQUAL};function ne(R,E){if(E.type===zi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===si||E.magFilter===If||E.magFilter===Pl||E.magFilter===es||E.minFilter===si||E.minFilter===If||E.minFilter===Pl||E.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,L[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,L[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,L[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Z[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Z[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Gn||E.minFilter!==Pl&&E.minFilter!==es||E.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function xe(R,E){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",C));const Q=E.source;let ie=f.get(Q);ie===void 0&&(ie={},f.set(Q,ie));const J=N(E);if(J!==R.__cacheKey){ie[J]===void 0&&(ie[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ie[J].usedTimes++;const Re=ie[R.__cacheKey];Re!==void 0&&(ie[R.__cacheKey].usedTimes--,Re.usedTimes===0&&P(E)),R.__cacheKey=J,R.__webglTexture=ie[J].texture}return V}function De(R,E,V){let Q=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=t.TEXTURE_3D);const ie=xe(R,E),J=E.source;n.bindTexture(Q,R.__webglTexture,t.TEXTURE0+V);const Re=i.get(J);if(J.version!==Re.__version||ie===!0){n.activeTexture(t.TEXTURE0+V);const fe=st.getPrimaries(st.workingColorSpace),ye=E.colorSpace===fr?null:st.getPrimaries(E.colorSpace),tt=E.colorSpace===fr||fe===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let oe=x(E.image,!1,r.maxTextureSize);oe=qe(E,oe);const Se=s.convert(E.format,E.colorSpace),ze=s.convert(E.type);let Oe=_(E.internalFormat,Se,ze,E.colorSpace,E.isVideoTexture);ne(Q,E);let Me;const Ye=E.mipmaps,Be=E.isVideoTexture!==!0,ft=Re.__version===void 0||ie===!0,F=J.dataReady,me=S(E,oe);if(E.isDepthTexture)Oe=v(E.format===Co,E.type),ft&&(Be?n.texStorage2D(t.TEXTURE_2D,1,Oe,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Oe,oe.width,oe.height,0,Se,ze,null));else if(E.isDataTexture)if(Ye.length>0){Be&&ft&&n.texStorage2D(t.TEXTURE_2D,me,Oe,Ye[0].width,Ye[0].height);for(let K=0,te=Ye.length;K<te;K++)Me=Ye[K],Be?F&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Me.width,Me.height,Se,ze,Me.data):n.texImage2D(t.TEXTURE_2D,K,Oe,Me.width,Me.height,0,Se,ze,Me.data);E.generateMipmaps=!1}else Be?(ft&&n.texStorage2D(t.TEXTURE_2D,me,Oe,oe.width,oe.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,Se,ze,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Oe,oe.width,oe.height,0,Se,ze,oe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Be&&ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Oe,Ye[0].width,Ye[0].height,oe.depth);for(let K=0,te=Ye.length;K<te;K++)if(Me=Ye[K],E.format!==ai)if(Se!==null)if(Be){if(F)if(E.layerUpdates.size>0){const he=p1(Me.width,Me.height,E.format,E.type);for(const ge of E.layerUpdates){const Ze=Me.data.subarray(ge*he/Me.data.BYTES_PER_ELEMENT,(ge+1)*he/Me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,ge,Me.width,Me.height,1,Se,Ze,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,oe.depth,Se,Me.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Oe,Me.width,Me.height,oe.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,oe.depth,Se,ze,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Oe,Me.width,Me.height,oe.depth,0,Se,ze,Me.data)}else{Be&&ft&&n.texStorage2D(t.TEXTURE_2D,me,Oe,Ye[0].width,Ye[0].height);for(let K=0,te=Ye.length;K<te;K++)Me=Ye[K],E.format!==ai?Se!==null?Be?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,Me.width,Me.height,Se,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Oe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?F&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Me.width,Me.height,Se,ze,Me.data):n.texImage2D(t.TEXTURE_2D,K,Oe,Me.width,Me.height,0,Se,ze,Me.data)}else if(E.isDataArrayTexture)if(Be){if(ft&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Oe,oe.width,oe.height,oe.depth),F)if(E.layerUpdates.size>0){const K=p1(oe.width,oe.height,E.format,E.type);for(const te of E.layerUpdates){const he=oe.data.subarray(te*K/oe.data.BYTES_PER_ELEMENT,(te+1)*K/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,oe.width,oe.height,1,Se,ze,he)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Se,ze,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Oe,oe.width,oe.height,oe.depth,0,Se,ze,oe.data);else if(E.isData3DTexture)Be?(ft&&n.texStorage3D(t.TEXTURE_3D,me,Oe,oe.width,oe.height,oe.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Se,ze,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Oe,oe.width,oe.height,oe.depth,0,Se,ze,oe.data);else if(E.isFramebufferTexture){if(ft)if(Be)n.texStorage2D(t.TEXTURE_2D,me,Oe,oe.width,oe.height);else{let K=oe.width,te=oe.height;for(let he=0;he<me;he++)n.texImage2D(t.TEXTURE_2D,he,Oe,K,te,0,Se,ze,null),K>>=1,te>>=1}}else if(Ye.length>0){if(Be&&ft){const K=Ne(Ye[0]);n.texStorage2D(t.TEXTURE_2D,me,Oe,K.width,K.height)}for(let K=0,te=Ye.length;K<te;K++)Me=Ye[K],Be?F&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Se,ze,Me):n.texImage2D(t.TEXTURE_2D,K,Oe,Se,ze,Me);E.generateMipmaps=!1}else if(Be){if(ft){const K=Ne(oe);n.texStorage2D(t.TEXTURE_2D,me,Oe,K.width,K.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,ze,oe)}else n.texImage2D(t.TEXTURE_2D,0,Oe,Se,ze,oe);m(E)&&h(Q),Re.__version=J.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function q(R,E,V){if(E.image.length!==6)return;const Q=xe(R,E),ie=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+V);const J=i.get(ie);if(ie.version!==J.__version||Q===!0){n.activeTexture(t.TEXTURE0+V);const Re=st.getPrimaries(st.workingColorSpace),fe=E.colorSpace===fr?null:st.getPrimaries(E.colorSpace),ye=E.colorSpace===fr||Re===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const tt=E.isCompressedTexture||E.image[0].isCompressedTexture,oe=E.image[0]&&E.image[0].isDataTexture,Se=[];for(let te=0;te<6;te++)!tt&&!oe?Se[te]=x(E.image[te],!0,r.maxCubemapSize):Se[te]=oe?E.image[te].image:E.image[te],Se[te]=qe(E,Se[te]);const ze=Se[0],Oe=s.convert(E.format,E.colorSpace),Me=s.convert(E.type),Ye=_(E.internalFormat,Oe,Me,E.colorSpace),Be=E.isVideoTexture!==!0,ft=J.__version===void 0||Q===!0,F=ie.dataReady;let me=S(E,ze);ne(t.TEXTURE_CUBE_MAP,E);let K;if(tt){Be&&ft&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ye,ze.width,ze.height);for(let te=0;te<6;te++){K=Se[te].mipmaps;for(let he=0;he<K.length;he++){const ge=K[he];E.format!==ai?Oe!==null?Be?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,ge.width,ge.height,Oe,ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,Ye,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,ge.width,ge.height,Oe,Me,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,Ye,ge.width,ge.height,0,Oe,Me,ge.data)}}}else{if(K=E.mipmaps,Be&&ft){K.length>0&&me++;const te=Ne(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ye,te.width,te.height)}for(let te=0;te<6;te++)if(oe){Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Se[te].width,Se[te].height,Oe,Me,Se[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ye,Se[te].width,Se[te].height,0,Oe,Me,Se[te].data);for(let he=0;he<K.length;he++){const Ze=K[he].image[te].image;Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,Ze.width,Ze.height,Oe,Me,Ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,Ye,Ze.width,Ze.height,0,Oe,Me,Ze.data)}}else{Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Oe,Me,Se[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ye,Oe,Me,Se[te]);for(let he=0;he<K.length;he++){const ge=K[he];Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,Oe,Me,ge.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,Ye,Oe,Me,ge.image[te])}}}m(E)&&h(t.TEXTURE_CUBE_MAP),J.__version=ie.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ee(R,E,V,Q,ie,J){const Re=s.convert(V.format,V.colorSpace),fe=s.convert(V.type),ye=_(V.internalFormat,Re,fe,V.colorSpace);if(!i.get(E).__hasExternalTextures){const oe=Math.max(1,E.width>>J),Se=Math.max(1,E.height>>J);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,J,ye,oe,Se,E.depth,0,Re,fe,null):n.texImage2D(ie,J,ye,oe,Se,0,Re,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ie(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ie,i.get(V).__webglTexture,0,be(E)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ie,i.get(V).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(R,E,V){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){const Q=E.depthTexture,ie=Q&&Q.isDepthTexture?Q.type:null,J=v(E.stencilBuffer,ie),Re=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=be(E);Ie(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,J,E.width,E.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,J,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,J,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Re,t.RENDERBUFFER,R)}else{const Q=E.textures;for(let ie=0;ie<Q.length;ie++){const J=Q[ie],Re=s.convert(J.format,J.colorSpace),fe=s.convert(J.type),ye=_(J.internalFormat,Re,fe,J.colorSpace),tt=be(E);V&&Ie(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,tt,ye,E.width,E.height):Ie(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,tt,ye,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ye,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),j(E.depthTexture,0);const Q=i.get(E.depthTexture).__webglTexture,ie=be(E);if(E.depthTexture.format===po)Ie(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(E.depthTexture.format===Co)Ie(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function se(R){const E=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",ie)};Q.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=Q}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ue(E.__webglFramebuffer,R)}else if(V){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=t.createRenderbuffer(),le(E.__webglDepthbuffer[Q],R,!1);else{const ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,J)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),le(E.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function U(R,E,V){const Q=i.get(R);E!==void 0&&ee(Q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&se(R)}function Te(R){const E=R.texture,V=i.get(R),Q=i.get(E);R.addEventListener("dispose",A);const ie=R.textures,J=R.isWebGLCubeRenderTarget===!0,Re=ie.length>1;if(Re||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=E.version,o.memory.textures++),J){V.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[fe]=[];for(let ye=0;ye<E.mipmaps.length;ye++)V.__webglFramebuffer[fe][ye]=t.createFramebuffer()}else V.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)V.__webglFramebuffer[fe]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Re)for(let fe=0,ye=ie.length;fe<ye;fe++){const tt=i.get(ie[fe]);tt.__webglTexture===void 0&&(tt.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Ie(R)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const ye=ie[fe];V.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[fe]);const tt=s.convert(ye.format,ye.colorSpace),oe=s.convert(ye.type),Se=_(ye.internalFormat,tt,oe,ye.colorSpace,R.isXRRenderTarget===!0),ze=be(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,Se,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,V.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),le(V.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),ne(t.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)ee(V.__webglFramebuffer[fe][ye],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ye);else ee(V.__webglFramebuffer[fe],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(E)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Re){for(let fe=0,ye=ie.length;fe<ye;fe++){const tt=ie[fe],oe=i.get(tt);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),ne(t.TEXTURE_2D,tt),ee(V.__webglFramebuffer,R,tt,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(tt)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,Q.__webglTexture),ne(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)ee(V.__webglFramebuffer[ye],R,E,t.COLOR_ATTACHMENT0,fe,ye);else ee(V.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,fe,0);m(E)&&h(fe),n.unbindTexture()}R.depthBuffer&&se(R)}function ke(R){const E=R.textures;for(let V=0,Q=E.length;V<Q;V++){const ie=E[V];if(m(ie)){const J=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Re=i.get(ie).__webglTexture;n.bindTexture(J,Re),h(J),n.unbindTexture()}}}const de=[],b=[];function $e(R){if(R.samples>0){if(Ie(R)===!1){const E=R.textures,V=R.width,Q=R.height;let ie=t.COLOR_BUFFER_BIT;const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=i.get(R),fe=E.length>1;if(fe)for(let ye=0;ye<E.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let ye=0;ye<E.length;ye++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Re.__webglColorRenderbuffer[ye]);const tt=i.get(E[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,tt,0)}t.blitFramebuffer(0,0,V,Q,0,0,V,Q,ie,t.NEAREST),l===!0&&(de.length=0,b.length=0,de.push(t.COLOR_ATTACHMENT0+ye),R.depthBuffer&&R.resolveDepthBuffer===!1&&(de.push(J),b.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,b)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,de))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<E.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,Re.__webglColorRenderbuffer[ye]);const tt=i.get(E[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,tt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function be(R){return Math.min(r.maxSamples,R.samples)}function Ie(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Le(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function qe(R,E){const V=R.colorSpace,Q=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Ir&&V!==fr&&(st.getTransfer(V)===gt?(Q!==ai||ie!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function Ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=M,this.setTexture2D=j,this.setTexture2DArray=D,this.setTexture3D=B,this.setTextureCube=Y,this.rebindTextures=U,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Ie}function B6(t,e){function n(i,r=fr){let s;const o=st.getTransfer(r);if(i===ji)return t.UNSIGNED_BYTE;if(i===Up)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Fp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===P2)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===R2)return t.BYTE;if(i===C2)return t.SHORT;if(i===ja)return t.UNSIGNED_SHORT;if(i===Np)return t.INT;if(i===fs)return t.UNSIGNED_INT;if(i===zi)return t.FLOAT;if(i===ol)return t.HALF_FLOAT;if(i===b2)return t.ALPHA;if(i===L2)return t.RGB;if(i===ai)return t.RGBA;if(i===D2)return t.LUMINANCE;if(i===I2)return t.LUMINANCE_ALPHA;if(i===po)return t.DEPTH_COMPONENT;if(i===Co)return t.DEPTH_STENCIL;if(i===N2)return t.RED;if(i===zp)return t.RED_INTEGER;if(i===U2)return t.RG;if(i===Op)return t.RG_INTEGER;if(i===kp)return t.RGBA_INTEGER;if(i===Ac||i===Rc||i===Cc||i===Pc)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ac)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ac)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rd||i===Cd||i===Pd||i===bd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Rd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Cd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ld||i===Dd||i===Id)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ld||i===Dd)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Id)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nd||i===Ud||i===Fd||i===zd||i===Od||i===kd||i===Bd||i===Hd||i===Vd||i===Gd||i===Wd||i===Xd||i===jd||i===$d)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Nd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ud)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Od)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jd)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$d)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bc||i===qd||i===Yd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===bc)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===F2||i===Kd||i===Zd||i===Jd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Kd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ro?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class H6 extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ts extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const V6={type:"move"};class a0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(V6)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ts;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const G6=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W6=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class X6{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new cn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new qi({vertexShader:G6,fragmentShader:W6,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new li(new Zu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j6 extends Oo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null;const x=new X6,m=n.getContextAttributes();let h=null,_=null;const v=[],S=[],C=new je;let A=null;const T=new kn;T.layers.enable(1),T.viewport=new Pt;const P=new kn;P.layers.enable(2),P.viewport=new Pt;const W=[T,P],y=new H6;y.layers.enable(1),y.layers.enable(2);let M=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=v[q];return ee===void 0&&(ee=new a0,v[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=v[q];return ee===void 0&&(ee=new a0,v[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=v[q];return ee===void 0&&(ee=new a0,v[q]=ee),ee.getHandSpace()};function N(q){const ee=S.indexOf(q.inputSource);if(ee===-1)return;const le=v[ee];le!==void 0&&(le.update(q.inputSource,q.frame,c||o),le.dispatchEvent({type:q.type,data:q.inputSource}))}function j(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",D);for(let q=0;q<v.length;q++){const ee=S[q];ee!==null&&(S[q]=null,v[q].disconnect(ee))}M=null,H=null,x.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,_=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",j),r.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new ds(p.framebufferWidth,p.framebufferHeight,{format:ai,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,le=null,ue=null;m.depth&&(ue=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=m.stencil?Co:po,le=m.stencil?Ro:fs);const se={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(se),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new ds(f.textureWidth,f.textureHeight,{format:ai,type:ji,depthTexture:new Y2(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function D(q){for(let ee=0;ee<q.removed.length;ee++){const le=q.removed[ee],ue=S.indexOf(le);ue>=0&&(S[ue]=null,v[ue].disconnect(le))}for(let ee=0;ee<q.added.length;ee++){const le=q.added[ee];let ue=S.indexOf(le);if(ue===-1){for(let U=0;U<v.length;U++)if(U>=S.length){S.push(le),ue=U;break}else if(S[U]===null){S[U]=le,ue=U;break}if(ue===-1)break}const se=v[ue];se&&se.connect(le)}}const B=new O,Y=new O;function L(q,ee,le){B.setFromMatrixPosition(ee.matrixWorld),Y.setFromMatrixPosition(le.matrixWorld);const ue=B.distanceTo(Y),se=ee.projectionMatrix.elements,U=le.projectionMatrix.elements,Te=se[14]/(se[10]-1),ke=se[14]/(se[10]+1),de=(se[9]+1)/se[5],b=(se[9]-1)/se[5],$e=(se[8]-1)/se[0],be=(U[8]+1)/U[0],Ie=Te*$e,Le=Te*be,qe=ue/(-$e+be),Ne=qe*-$e;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ne),q.translateZ(qe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),se[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const R=Te+qe,E=ke+qe,V=Ie-Ne,Q=Le+(ue-Ne),ie=de*ke/E*R,J=b*ke/E*R;q.projectionMatrix.makePerspective(V,Q,ie,J,R,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Z(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ee=q.near,le=q.far;x.texture!==null&&(x.depthNear>0&&(ee=x.depthNear),x.depthFar>0&&(le=x.depthFar)),y.near=P.near=T.near=ee,y.far=P.far=T.far=le,(M!==y.near||H!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),M=y.near,H=y.far);const ue=q.parent,se=y.cameras;Z(y,ue);for(let U=0;U<se.length;U++)Z(se[U],ue);se.length===2?L(y,T,P):y.projectionMatrix.copy(T.projectionMatrix),$(q,y,ue)};function $(q,ee,le){le===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(le.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=$a*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ne=null;function xe(q,ee){if(u=ee.getViewerPose(c||o),g=ee,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ue=!1;le.length!==y.cameras.length&&(y.cameras.length=0,ue=!0);for(let U=0;U<le.length;U++){const Te=le[U];let ke=null;if(p!==null)ke=p.getViewport(Te);else{const b=d.getViewSubImage(f,Te);ke=b.viewport,U===0&&(e.setRenderTargetTextures(_,b.colorTexture,f.ignoreDepthValues?void 0:b.depthStencilTexture),e.setRenderTarget(_))}let de=W[U];de===void 0&&(de=new kn,de.layers.enable(U),de.viewport=new Pt,W[U]=de),de.matrix.fromArray(Te.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(Te.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(ke.x,ke.y,ke.width,ke.height),U===0&&(y.matrix.copy(de.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ue===!0&&y.cameras.push(de)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")){const U=d.getDepthInformation(le[0]);U&&U.isValid&&U.texture&&x.init(e,U,r.renderState)}}for(let le=0;le<v.length;le++){const ue=S[le],se=v[le];ue!==null&&se!==void 0&&se.update(ue,ee,c||o)}ne&&ne(q,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const De=new q2;De.setAnimationLoop(xe),this.setAnimationLoop=function(q){ne=q},this.dispose=function(){}}}const Br=new $i,$6=new xt;function q6(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,W2(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,_,v,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,_,v):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ln&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ln&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const _=e.get(h),v=_.envMap,S=_.envMapRotation;v&&(m.envMap.value=v,Br.copy(S),Br.x*=-1,Br.y*=-1,Br.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),m.envMapRotation.value.setFromMatrix4($6.makeRotationFromEuler(Br)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=v*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ln&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const _=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Y6(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const S=v.program;i.uniformBlockBinding(_,S)}function c(_,v){let S=r[_.id];S===void 0&&(g(_),S=u(_),r[_.id]=S,_.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(_,C);const A=e.render.frame;s[_.id]!==A&&(f(_),s[_.id]=A)}function u(_){const v=d();_.__bindingPointIndex=v;const S=t.createBuffer(),C=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const v=r[_.id],S=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,T=S.length;A<T;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let W=0,y=P.length;W<y;W++){const M=P[W];if(p(M,A,W,C)===!0){const H=M.__offset,N=Array.isArray(M.value)?M.value:[M.value];let j=0;for(let D=0;D<N.length;D++){const B=N[D],Y=x(B);typeof B=="number"||typeof B=="boolean"?(M.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,H+j,M.__data)):B.isMatrix3?(M.__data[0]=B.elements[0],M.__data[1]=B.elements[1],M.__data[2]=B.elements[2],M.__data[3]=0,M.__data[4]=B.elements[3],M.__data[5]=B.elements[4],M.__data[6]=B.elements[5],M.__data[7]=0,M.__data[8]=B.elements[6],M.__data[9]=B.elements[7],M.__data[10]=B.elements[8],M.__data[11]=0):(B.toArray(M.__data,j),j+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,M.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,v,S,C){const A=_.value,T=v+"_"+S;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{const P=C[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(_){const v=_.uniforms;let S=0;const C=16;for(let T=0,P=v.length;T<P;T++){const W=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,M=W.length;y<M;y++){const H=W[y],N=Array.isArray(H.value)?H.value:[H.value];for(let j=0,D=N.length;j<D;j++){const B=N[j],Y=x(B),L=S%C,Z=L%Y.boundary,$=L+Z;S+=Z,$!==0&&C-$<Y.storage&&(S+=C-$),H.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=Y.storage}}}const A=S%C;return A>0&&(S+=C-A),_.__size=S,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class K6{constructor(e={}){const{canvas:n=FM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const h=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pi,this.toneMapping=wr,this.toneMappingExposure=1;const v=this;let S=!1,C=0,A=0,T=null,P=-1,W=null;const y=new Pt,M=new Pt;let H=null;const N=new Xe(0);let j=0,D=n.width,B=n.height,Y=1,L=null,Z=null;const $=new Pt(0,0,D,B),ne=new Pt(0,0,D,B);let xe=!1;const De=new $2;let q=!1,ee=!1;const le=new xt,ue=new xt,se=new O,U=new Pt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function de(){return T===null?Y:1}let b=i;function $e(w,z){return n.getContext(w,z)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ip}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",ge,!1),b===null){const z="webgl2";if(b=$e(z,w),b===null)throw $e(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let be,Ie,Le,qe,Ne,R,E,V,Q,ie,J,Re,fe,ye,tt,oe,Se,ze,Oe,Me,Ye,Be,ft,F;function me(){be=new tT(b),be.init(),Be=new B6(b,be),Ie=new qw(b,be,e,Be),Le=new z6(b),Ie.reverseDepthBuffer&&Le.buffers.depth.setReversed(!0),qe=new rT(b),Ne=new M6,R=new k6(b,be,Le,Ne,Ie,Be,qe),E=new Kw(v),V=new eT(v),Q=new uE(b),ft=new jw(b,Q),ie=new nT(b,Q,qe,ft),J=new oT(b,ie,Q,qe),Oe=new sT(b,Ie,R),oe=new Yw(Ne),Re=new S6(v,E,V,be,Ie,ft,oe),fe=new q6(v,Ne),ye=new w6,tt=new b6(be),ze=new Xw(v,E,V,Le,J,f,l),Se=new U6(v,J,Ie),F=new Y6(b,qe,Ie,Le),Me=new $w(b,be,qe),Ye=new iT(b,be,qe),qe.programs=Re.programs,v.capabilities=Ie,v.extensions=be,v.properties=Ne,v.renderLists=ye,v.shadowMap=Se,v.state=Le,v.info=qe}me();const K=new j6(v,b);this.xr=K,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const w=be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(D,B,!1))},this.getSize=function(w){return w.set(D,B)},this.setSize=function(w,z,G=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=w,B=z,n.width=Math.floor(w*Y),n.height=Math.floor(z*Y),G===!0&&(n.style.width=w+"px",n.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(D*Y,B*Y).floor()},this.setDrawingBufferSize=function(w,z,G){D=w,B=z,Y=G,n.width=Math.floor(w*G),n.height=Math.floor(z*G),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,z,G,X){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,z,G,X),Le.viewport(y.copy($).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(ne)},this.setScissor=function(w,z,G,X){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,z,G,X),Le.scissor(M.copy(ne).multiplyScalar(Y).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(w){Le.setScissorTest(xe=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(w=!0,z=!0,G=!0){let X=0;if(w){let k=!1;if(T!==null){const ae=T.texture.format;k=ae===kp||ae===Op||ae===zp}if(k){const ae=T.texture.type,pe=ae===ji||ae===fs||ae===ja||ae===Ro||ae===Up||ae===Fp,Ee=ze.getClearColor(),Ae=ze.getClearAlpha(),Ue=Ee.r,Fe=Ee.g,Ce=Ee.b;pe?(p[0]=Ue,p[1]=Fe,p[2]=Ce,p[3]=Ae,b.clearBufferuiv(b.COLOR,0,p)):(g[0]=Ue,g[1]=Fe,g[2]=Ce,g[3]=Ae,b.clearBufferiv(b.COLOR,0,g))}else X|=b.COLOR_BUFFER_BIT}z&&(X|=b.DEPTH_BUFFER_BIT,b.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(X|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),ye.dispose(),tt.dispose(),Ne.dispose(),E.dispose(),V.dispose(),J.dispose(),ft.dispose(),F.dispose(),Re.dispose(),K.dispose(),K.removeEventListener("sessionstart",im),K.removeEventListener("sessionend",rm),Nr.stop()};function te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=qe.autoReset,z=Se.enabled,G=Se.autoUpdate,X=Se.needsUpdate,k=Se.type;me(),qe.autoReset=w,Se.enabled=z,Se.autoUpdate=G,Se.needsUpdate=X,Se.type=k}function ge(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ze(w){const z=w.target;z.removeEventListener("dispose",Ze),bt(z)}function bt(w){dn(w),Ne.remove(w)}function dn(w){const z=Ne.get(w).programs;z!==void 0&&(z.forEach(function(G){Re.releaseProgram(G)}),w.isShaderMaterial&&Re.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,G,X,k,ae){z===null&&(z=Te);const pe=k.isMesh&&k.matrixWorld.determinant()<0,Ee=J3(w,z,G,X,k);Le.setMaterial(X,pe);let Ae=G.index,Ue=1;if(X.wireframe===!0){if(Ae=ie.getWireframeAttribute(G),Ae===void 0)return;Ue=2}const Fe=G.drawRange,Ce=G.attributes.position;let at=Fe.start*Ue,pt=(Fe.start+Fe.count)*Ue;ae!==null&&(at=Math.max(at,ae.start*Ue),pt=Math.min(pt,(ae.start+ae.count)*Ue)),Ae!==null?(at=Math.max(at,0),pt=Math.min(pt,Ae.count)):Ce!=null&&(at=Math.max(at,0),pt=Math.min(pt,Ce.count));const Tt=pt-at;if(Tt<0||Tt===1/0)return;ft.setup(k,X,Ee,G,Ae);let Sn,it=Me;if(Ae!==null&&(Sn=Q.get(Ae),it=Ye,it.setIndex(Sn)),k.isMesh)X.wireframe===!0?(Le.setLineWidth(X.wireframeLinewidth*de()),it.setMode(b.LINES)):it.setMode(b.TRIANGLES);else if(k.isLine){let Pe=X.linewidth;Pe===void 0&&(Pe=1),Le.setLineWidth(Pe*de()),k.isLineSegments?it.setMode(b.LINES):k.isLineLoop?it.setMode(b.LINE_LOOP):it.setMode(b.LINE_STRIP)}else k.isPoints?it.setMode(b.POINTS):k.isSprite&&it.setMode(b.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)it.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))it.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Pe=k._multiDrawStarts,Gt=k._multiDrawCounts,rt=k._multiDrawCount,Kn=Ae?Q.get(Ae).bytesPerElement:1,Ss=Ne.get(X).currentProgram.getUniforms();for(let Mn=0;Mn<rt;Mn++)Ss.setValue(b,"_gl_DrawID",Mn),it.render(Pe[Mn]/Kn,Gt[Mn])}else if(k.isInstancedMesh)it.renderInstances(at,Tt,k.count);else if(G.isInstancedBufferGeometry){const Pe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Gt=Math.min(G.instanceCount,Pe);it.renderInstances(at,Tt,Gt)}else it.render(at,Tt)};function nt(w,z,G){w.transparent===!0&&w.side===vi&&w.forceSinglePass===!1?(w.side=ln,w.needsUpdate=!0,fl(w,z,G),w.side=Rr,w.needsUpdate=!0,fl(w,z,G),w.side=vi):fl(w,z,G)}this.compile=function(w,z,G=null){G===null&&(G=w),m=tt.get(G),m.init(z),_.push(m),G.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),w!==G&&w.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const X=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ae=k.material;if(ae)if(Array.isArray(ae))for(let pe=0;pe<ae.length;pe++){const Ee=ae[pe];nt(Ee,G,k),X.add(Ee)}else nt(ae,G,k),X.add(ae)}),_.pop(),m=null,X},this.compileAsync=function(w,z,G=null){const X=this.compile(w,z,G);return new Promise(k=>{function ae(){if(X.forEach(function(pe){Ne.get(pe).currentProgram.isReady()&&X.delete(pe)}),X.size===0){k(w);return}setTimeout(ae,10)}be.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let hn=null;function Mi(w){hn&&hn(w)}function im(){Nr.stop()}function rm(){Nr.start()}const Nr=new q2;Nr.setAnimationLoop(Mi),typeof self<"u"&&Nr.setContext(self),this.setAnimationLoop=function(w){hn=w,K.setAnimationLoop(w),w===null?Nr.stop():Nr.start()},K.addEventListener("sessionstart",im),K.addEventListener("sessionend",rm),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(z),z=K.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,z,T),m=tt.get(w,_.length),m.init(z),_.push(m),ue.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),De.setFromProjectionMatrix(ue),ee=this.localClippingEnabled,q=oe.init(this.clippingPlanes,ee),x=ye.get(w,h.length),x.init(),h.push(x),K.enabled===!0&&K.isPresenting===!0){const ae=v.xr.getDepthSensingMesh();ae!==null&&nf(ae,z,-1/0,v.sortObjects)}nf(w,z,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(L,Z),ke=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,ke&&ze.addToRenderList(x,w),this.info.render.frame++,q===!0&&oe.beginShadows();const G=m.state.shadowsArray;Se.render(G,w,z),q===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=x.opaque,k=x.transmissive;if(m.setupLights(),z.isArrayCamera){const ae=z.cameras;if(k.length>0)for(let pe=0,Ee=ae.length;pe<Ee;pe++){const Ae=ae[pe];om(X,k,w,Ae)}ke&&ze.render(w);for(let pe=0,Ee=ae.length;pe<Ee;pe++){const Ae=ae[pe];sm(x,w,Ae,Ae.viewport)}}else k.length>0&&om(X,k,w,z),ke&&ze.render(w),sm(x,w,z);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(v,w,z),ft.resetDefaultState(),P=-1,W=null,_.pop(),_.length>0?(m=_[_.length-1],q===!0&&oe.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function nf(w,z,G,X){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||De.intersectsSprite(w)){X&&U.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ue);const pe=J.update(w),Ee=w.material;Ee.visible&&x.push(w,pe,Ee,G,U.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||De.intersectsObject(w))){const pe=J.update(w),Ee=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),U.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),U.copy(pe.boundingSphere.center)),U.applyMatrix4(w.matrixWorld).applyMatrix4(ue)),Array.isArray(Ee)){const Ae=pe.groups;for(let Ue=0,Fe=Ae.length;Ue<Fe;Ue++){const Ce=Ae[Ue],at=Ee[Ce.materialIndex];at&&at.visible&&x.push(w,pe,at,G,U.z,Ce)}}else Ee.visible&&x.push(w,pe,Ee,G,U.z,null)}}const ae=w.children;for(let pe=0,Ee=ae.length;pe<Ee;pe++)nf(ae[pe],z,G,X)}function sm(w,z,G,X){const k=w.opaque,ae=w.transmissive,pe=w.transparent;m.setupLightsView(G),q===!0&&oe.setGlobalState(v.clippingPlanes,G),X&&Le.viewport(y.copy(X)),k.length>0&&ul(k,z,G),ae.length>0&&ul(ae,z,G),pe.length>0&&ul(pe,z,G),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function om(w,z,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new ds(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?ol:ji,minFilter:es,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const ae=m.state.transmissionRenderTarget[X.id],pe=X.viewport||y;ae.setSize(pe.z,pe.w);const Ee=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(N),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),ke&&ze.render(G);const Ae=v.toneMapping;v.toneMapping=wr;const Ue=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),q===!0&&oe.setGlobalState(v.clippingPlanes,X),ul(w,G,X),R.updateMultisampleRenderTarget(ae),R.updateRenderTargetMipmap(ae),be.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Ce=0,at=z.length;Ce<at;Ce++){const pt=z[Ce],Tt=pt.object,Sn=pt.geometry,it=pt.material,Pe=pt.group;if(it.side===vi&&Tt.layers.test(X.layers)){const Gt=it.side;it.side=ln,it.needsUpdate=!0,am(Tt,G,X,Sn,it,Pe),it.side=Gt,it.needsUpdate=!0,Fe=!0}}Fe===!0&&(R.updateMultisampleRenderTarget(ae),R.updateRenderTargetMipmap(ae))}v.setRenderTarget(Ee),v.setClearColor(N,j),Ue!==void 0&&(X.viewport=Ue),v.toneMapping=Ae}function ul(w,z,G){const X=z.isScene===!0?z.overrideMaterial:null;for(let k=0,ae=w.length;k<ae;k++){const pe=w[k],Ee=pe.object,Ae=pe.geometry,Ue=X===null?pe.material:X,Fe=pe.group;Ee.layers.test(G.layers)&&am(Ee,z,G,Ae,Ue,Fe)}}function am(w,z,G,X,k,ae){w.onBeforeRender(v,z,G,X,k,ae),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(v,z,G,X,w,ae),k.transparent===!0&&k.side===vi&&k.forceSinglePass===!1?(k.side=ln,k.needsUpdate=!0,v.renderBufferDirect(G,z,X,k,w,ae),k.side=Rr,k.needsUpdate=!0,v.renderBufferDirect(G,z,X,k,w,ae),k.side=vi):v.renderBufferDirect(G,z,X,k,w,ae),w.onAfterRender(v,z,G,X,k,ae)}function fl(w,z,G){z.isScene!==!0&&(z=Te);const X=Ne.get(w),k=m.state.lights,ae=m.state.shadowsArray,pe=k.state.version,Ee=Re.getParameters(w,k.state,ae,z,G),Ae=Re.getProgramCacheKey(Ee);let Ue=X.programs;X.environment=w.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(w.isMeshStandardMaterial?V:E).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Ue===void 0&&(w.addEventListener("dispose",Ze),Ue=new Map,X.programs=Ue);let Fe=Ue.get(Ae);if(Fe!==void 0){if(X.currentProgram===Fe&&X.lightsStateVersion===pe)return cm(w,Ee),Fe}else Ee.uniforms=Re.getUniforms(w),w.onBeforeCompile(Ee,v),Fe=Re.acquireProgram(Ee,Ae),Ue.set(Ae,Fe),X.uniforms=Ee.uniforms;const Ce=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ce.clippingPlanes=oe.uniform),cm(w,Ee),X.needsLights=ex(w),X.lightsStateVersion=pe,X.needsLights&&(Ce.ambientLightColor.value=k.state.ambient,Ce.lightProbe.value=k.state.probe,Ce.directionalLights.value=k.state.directional,Ce.directionalLightShadows.value=k.state.directionalShadow,Ce.spotLights.value=k.state.spot,Ce.spotLightShadows.value=k.state.spotShadow,Ce.rectAreaLights.value=k.state.rectArea,Ce.ltc_1.value=k.state.rectAreaLTC1,Ce.ltc_2.value=k.state.rectAreaLTC2,Ce.pointLights.value=k.state.point,Ce.pointLightShadows.value=k.state.pointShadow,Ce.hemisphereLights.value=k.state.hemi,Ce.directionalShadowMap.value=k.state.directionalShadowMap,Ce.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ce.spotShadowMap.value=k.state.spotShadowMap,Ce.spotLightMatrix.value=k.state.spotLightMatrix,Ce.spotLightMap.value=k.state.spotLightMap,Ce.pointShadowMap.value=k.state.pointShadowMap,Ce.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Fe,X.uniformsList=null,Fe}function lm(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=Dc.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function cm(w,z){const G=Ne.get(w);G.outputColorSpace=z.outputColorSpace,G.batching=z.batching,G.batchingColor=z.batchingColor,G.instancing=z.instancing,G.instancingColor=z.instancingColor,G.instancingMorph=z.instancingMorph,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function J3(w,z,G,X,k){z.isScene!==!0&&(z=Te),R.resetTextureUnits();const ae=z.fog,pe=X.isMeshStandardMaterial?z.environment:null,Ee=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ir,Ae=(X.isMeshStandardMaterial?V:E).get(X.envMap||pe),Ue=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Fe=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ce=!!G.morphAttributes.position,at=!!G.morphAttributes.normal,pt=!!G.morphAttributes.color;let Tt=wr;X.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Tt=v.toneMapping);const Sn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,it=Sn!==void 0?Sn.length:0,Pe=Ne.get(X),Gt=m.state.lights;if(q===!0&&(ee===!0||w!==W)){const Nn=w===W&&X.id===P;oe.setState(X,w,Nn)}let rt=!1;X.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Gt.state.version||Pe.outputColorSpace!==Ee||k.isBatchedMesh&&Pe.batching===!1||!k.isBatchedMesh&&Pe.batching===!0||k.isBatchedMesh&&Pe.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Pe.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Pe.instancing===!1||!k.isInstancedMesh&&Pe.instancing===!0||k.isSkinnedMesh&&Pe.skinning===!1||!k.isSkinnedMesh&&Pe.skinning===!0||k.isInstancedMesh&&Pe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Pe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Pe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Pe.instancingMorph===!1&&k.morphTexture!==null||Pe.envMap!==Ae||X.fog===!0&&Pe.fog!==ae||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==oe.numPlanes||Pe.numIntersection!==oe.numIntersection)||Pe.vertexAlphas!==Ue||Pe.vertexTangents!==Fe||Pe.morphTargets!==Ce||Pe.morphNormals!==at||Pe.morphColors!==pt||Pe.toneMapping!==Tt||Pe.morphTargetsCount!==it)&&(rt=!0):(rt=!0,Pe.__version=X.version);let Kn=Pe.currentProgram;rt===!0&&(Kn=fl(X,z,k));let Ss=!1,Mn=!1,rf=!1;const Rt=Kn.getUniforms(),Ji=Pe.uniforms;if(Le.useProgram(Kn.program)&&(Ss=!0,Mn=!0,rf=!0),X.id!==P&&(P=X.id,Mn=!0),Ss||W!==w){Ie.reverseDepthBuffer?(le.copy(w.projectionMatrix),OM(le),kM(le),Rt.setValue(b,"projectionMatrix",le)):Rt.setValue(b,"projectionMatrix",w.projectionMatrix),Rt.setValue(b,"viewMatrix",w.matrixWorldInverse);const Nn=Rt.map.cameraPosition;Nn!==void 0&&Nn.setValue(b,se.setFromMatrixPosition(w.matrixWorld)),Ie.logarithmicDepthBuffer&&Rt.setValue(b,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Rt.setValue(b,"isOrthographic",w.isOrthographicCamera===!0),W!==w&&(W=w,Mn=!0,rf=!0)}if(k.isSkinnedMesh){Rt.setOptional(b,k,"bindMatrix"),Rt.setOptional(b,k,"bindMatrixInverse");const Nn=k.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),Rt.setValue(b,"boneTexture",Nn.boneTexture,R))}k.isBatchedMesh&&(Rt.setOptional(b,k,"batchingTexture"),Rt.setValue(b,"batchingTexture",k._matricesTexture,R),Rt.setOptional(b,k,"batchingIdTexture"),Rt.setValue(b,"batchingIdTexture",k._indirectTexture,R),Rt.setOptional(b,k,"batchingColorTexture"),k._colorsTexture!==null&&Rt.setValue(b,"batchingColorTexture",k._colorsTexture,R));const sf=G.morphAttributes;if((sf.position!==void 0||sf.normal!==void 0||sf.color!==void 0)&&Oe.update(k,G,Kn),(Mn||Pe.receiveShadow!==k.receiveShadow)&&(Pe.receiveShadow=k.receiveShadow,Rt.setValue(b,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ji.envMap.value=Ae,Ji.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(Ji.envMapIntensity.value=z.environmentIntensity),Mn&&(Rt.setValue(b,"toneMappingExposure",v.toneMappingExposure),Pe.needsLights&&Q3(Ji,rf),ae&&X.fog===!0&&fe.refreshFogUniforms(Ji,ae),fe.refreshMaterialUniforms(Ji,X,Y,B,m.state.transmissionRenderTarget[w.id]),Dc.upload(b,lm(Pe),Ji,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Dc.upload(b,lm(Pe),Ji,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Rt.setValue(b,"center",k.center),Rt.setValue(b,"modelViewMatrix",k.modelViewMatrix),Rt.setValue(b,"normalMatrix",k.normalMatrix),Rt.setValue(b,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Nn=X.uniformsGroups;for(let of=0,tx=Nn.length;of<tx;of++){const um=Nn[of];F.update(um,Kn),F.bind(um,Kn)}}return Kn}function Q3(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function ex(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,z,G){Ne.get(w.texture).__webglTexture=z,Ne.get(w.depthTexture).__webglTexture=G;const X=Ne.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,z){const G=Ne.get(w);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,G=0){T=w,C=z,A=G;let X=!0,k=null,ae=!1,pe=!1;if(w){const Ae=Ne.get(w);if(Ae.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(b.FRAMEBUFFER,null),X=!1;else if(Ae.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Ae.__hasExternalTextures)R.rebindTextures(w,Ne.get(w.texture).__webglTexture,Ne.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ce=w.depthTexture;if(Ae.__boundDepthTexture!==Ce){if(Ce!==null&&Ne.has(Ce)&&(w.width!==Ce.image.width||w.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Ue=w.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(pe=!0);const Fe=Ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Fe[z])?k=Fe[z][G]:k=Fe[z],ae=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?k=Ne.get(w).__webglMultisampledFramebuffer:Array.isArray(Fe)?k=Fe[G]:k=Fe,y.copy(w.viewport),M.copy(w.scissor),H=w.scissorTest}else y.copy($).multiplyScalar(Y).floor(),M.copy(ne).multiplyScalar(Y).floor(),H=xe;if(Le.bindFramebuffer(b.FRAMEBUFFER,k)&&X&&Le.drawBuffers(w,k),Le.viewport(y),Le.scissor(M),Le.setScissorTest(H),ae){const Ae=Ne.get(w.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ae.__webglTexture,G)}else if(pe){const Ae=Ne.get(w.texture),Ue=z||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ae.__webglTexture,G||0,Ue)}P=-1},this.readRenderTargetPixels=function(w,z,G,X,k,ae,pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(Ee=Ee[pe]),Ee){Le.bindFramebuffer(b.FRAMEBUFFER,Ee);try{const Ae=w.texture,Ue=Ae.format,Fe=Ae.type;if(!Ie.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-X&&G>=0&&G<=w.height-k&&b.readPixels(z,G,X,k,Be.convert(Ue),Be.convert(Fe),ae)}finally{const Ae=T!==null?Ne.get(T).__webglFramebuffer:null;Le.bindFramebuffer(b.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(w,z,G,X,k,ae,pe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(Ee=Ee[pe]),Ee){const Ae=w.texture,Ue=Ae.format,Fe=Ae.type;if(!Ie.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=w.width-X&&G>=0&&G<=w.height-k){Le.bindFramebuffer(b.FRAMEBUFFER,Ee);const Ce=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Ce),b.bufferData(b.PIXEL_PACK_BUFFER,ae.byteLength,b.STREAM_READ),b.readPixels(z,G,X,k,Be.convert(Ue),Be.convert(Fe),0);const at=T!==null?Ne.get(T).__webglFramebuffer:null;Le.bindFramebuffer(b.FRAMEBUFFER,at);const pt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await zM(b,pt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Ce),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ae),b.deleteBuffer(Ce),b.deleteSync(pt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,z=null,G=0){w.isTexture!==!0&&(Lc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1]);const X=Math.pow(2,-G),k=Math.floor(w.image.width*X),ae=Math.floor(w.image.height*X),pe=z!==null?z.x:0,Ee=z!==null?z.y:0;R.setTexture2D(w,0),b.copyTexSubImage2D(b.TEXTURE_2D,G,0,0,pe,Ee,k,ae),Le.unbindTexture()},this.copyTextureToTexture=function(w,z,G=null,X=null,k=0){w.isTexture!==!0&&(Lc("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],z=arguments[2],k=arguments[3]||0,G=null);let ae,pe,Ee,Ae,Ue,Fe;G!==null?(ae=G.max.x-G.min.x,pe=G.max.y-G.min.y,Ee=G.min.x,Ae=G.min.y):(ae=w.image.width,pe=w.image.height,Ee=0,Ae=0),X!==null?(Ue=X.x,Fe=X.y):(Ue=0,Fe=0);const Ce=Be.convert(z.format),at=Be.convert(z.type);R.setTexture2D(z,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,z.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,z.unpackAlignment);const pt=b.getParameter(b.UNPACK_ROW_LENGTH),Tt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Sn=b.getParameter(b.UNPACK_SKIP_PIXELS),it=b.getParameter(b.UNPACK_SKIP_ROWS),Pe=b.getParameter(b.UNPACK_SKIP_IMAGES),Gt=w.isCompressedTexture?w.mipmaps[k]:w.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,Gt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Gt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ee),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ae),w.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,k,Ue,Fe,ae,pe,Ce,at,Gt.data):w.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,k,Ue,Fe,Gt.width,Gt.height,Ce,Gt.data):b.texSubImage2D(b.TEXTURE_2D,k,Ue,Fe,ae,pe,Ce,at,Gt),b.pixelStorei(b.UNPACK_ROW_LENGTH,pt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Tt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Sn),b.pixelStorei(b.UNPACK_SKIP_ROWS,it),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Pe),k===0&&z.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(w,z,G=null,X=null,k=0){w.isTexture!==!0&&(Lc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,X=arguments[1]||null,w=arguments[2],z=arguments[3],k=arguments[4]||0);let ae,pe,Ee,Ae,Ue,Fe,Ce,at,pt;const Tt=w.isCompressedTexture?w.mipmaps[k]:w.image;G!==null?(ae=G.max.x-G.min.x,pe=G.max.y-G.min.y,Ee=G.max.z-G.min.z,Ae=G.min.x,Ue=G.min.y,Fe=G.min.z):(ae=Tt.width,pe=Tt.height,Ee=Tt.depth,Ae=0,Ue=0,Fe=0),X!==null?(Ce=X.x,at=X.y,pt=X.z):(Ce=0,at=0,pt=0);const Sn=Be.convert(z.format),it=Be.convert(z.type);let Pe;if(z.isData3DTexture)R.setTexture3D(z,0),Pe=b.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)R.setTexture2DArray(z,0),Pe=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,z.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,z.unpackAlignment);const Gt=b.getParameter(b.UNPACK_ROW_LENGTH),rt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Kn=b.getParameter(b.UNPACK_SKIP_PIXELS),Ss=b.getParameter(b.UNPACK_SKIP_ROWS),Mn=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,Tt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Tt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ae),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ue),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Fe),w.isDataTexture||w.isData3DTexture?b.texSubImage3D(Pe,k,Ce,at,pt,ae,pe,Ee,Sn,it,Tt.data):z.isCompressedArrayTexture?b.compressedTexSubImage3D(Pe,k,Ce,at,pt,ae,pe,Ee,Sn,Tt.data):b.texSubImage3D(Pe,k,Ce,at,pt,ae,pe,Ee,Sn,it,Tt),b.pixelStorei(b.UNPACK_ROW_LENGTH,Gt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,rt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Kn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ss),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Mn),k===0&&z.generateMipmaps&&b.generateMipmap(Pe),Le.unbindTexture()},this.initRenderTarget=function(w){Ne.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Le.unbindTexture()},this.resetState=function(){C=0,A=0,T=null,Le.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Bp?"display-p3":"srgb",n.unpackColorSpace=st.workingColorSpace===Yu?"display-p3":"srgb"}}class Z6 extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class J6{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Qd,this.updateRanges=[],this.version=0,this.uuid=Hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new O;class pu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyMatrix4(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyNormalMatrix(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.transformDirection(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=oi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=oi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=oi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=oi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=oi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new on(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class e3 extends ys{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let zs;const Qo=new O,Os=new O,ks=new O,Bs=new je,ea=new je,t3=new xt,Kl=new O,ta=new O,Zl=new O,m1=new je,l0=new je,g1=new je;class Q6 extends Qt{constructor(e=new e3){if(super(),this.isSprite=!0,this.type="Sprite",zs===void 0){zs=new Ut;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new J6(n,5);zs.setIndex([0,1,2,0,2,3]),zs.setAttribute("position",new pu(i,3,0,!1)),zs.setAttribute("uv",new pu(i,2,3,!1))}this.geometry=zs,this.material=e,this.center=new je(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Os.setFromMatrixScale(this.matrixWorld),t3.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Os.multiplyScalar(-ks.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Jl(Kl.set(-.5,-.5,0),ks,o,Os,r,s),Jl(ta.set(.5,-.5,0),ks,o,Os,r,s),Jl(Zl.set(.5,.5,0),ks,o,Os,r,s),m1.set(0,0),l0.set(1,0),g1.set(1,1);let a=e.ray.intersectTriangle(Kl,ta,Zl,!1,Qo);if(a===null&&(Jl(ta.set(-.5,.5,0),ks,o,Os,r,s),l0.set(0,1),a=e.ray.intersectTriangle(Kl,Zl,ta,!1,Qo),a===null))return;const l=e.ray.origin.distanceTo(Qo);l<e.near||l>e.far||n.push({distance:l,point:Qo.clone(),uv:Bn.getInterpolation(Qo,Kl,ta,Zl,m1,l0,g1,new je),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Jl(t,e,n,i,r,s){Bs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ea.x=s*Bs.x-r*Bs.y,ea.y=r*Bs.x+s*Bs.y):ea.copy(Bs),t.copy(e),t.x+=ea.x,t.y+=ea.y,t.applyMatrix4(t3)}class Xr extends ys{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mu=new O,gu=new O,v1=new xt,na=new Ku,Ql=new ll,c0=new O,_1=new O;class th extends Qt{constructor(e=new Ut,n=new Xr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)mu.fromBufferAttribute(n,r-1),gu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=mu.distanceTo(gu);e.setAttribute("lineDistance",new xn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ql.copy(i.boundingSphere),Ql.applyMatrix4(r),Ql.radius+=s,e.ray.intersectsSphere(Ql)===!1)return;v1.copy(r).invert(),na.copy(e.ray).applyMatrix4(v1);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const h=u.getX(x),_=u.getX(x+1),v=ec(this,e,na,l,h,_);v&&n.push(v)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(p),h=ec(this,e,na,l,x,m);h&&n.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const h=ec(this,e,na,l,x,x+1);h&&n.push(h)}if(this.isLineLoop){const x=ec(this,e,na,l,g-1,p);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ec(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(mu.fromBufferAttribute(o,r),gu.fromBufferAttribute(o,s),n.distanceSqToSegment(mu,gu,c0,_1)>i)return;c0.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(c0);if(!(l<e.near||l>e.far))return{distance:l,point:_1.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}class tc extends th{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class e5 extends ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const x1=new xt,nh=new Ku,nc=new ll,ic=new O;class t5 extends Qt{constructor(e=new Ut,n=new e5){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(r),nc.radius+=s,e.ray.intersectsSphere(nc)===!1)return;x1.copy(r).invert(),nh.copy(e.ray).applyMatrix4(x1);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,x=p;g<x;g++){const m=c.getX(g);ic.fromBufferAttribute(d,m),y1(ic,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,x=p;g<x;g++)ic.fromBufferAttribute(d,g),y1(ic,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function y1(t,e,n,i,r,s,o){const a=nh.distanceSqToPoint(t);if(a<n){const l=new O;nh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class n5 extends cn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wp extends Ut{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let d=e;const f=(n-e)/r,p=new O,g=new je;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){const h=s+m/i*o;p.x=d*Math.cos(h),p.y=d*Math.sin(h),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/n+1)/2,g.y=(p.y/n+1)/2,u.push(g.x,g.y)}d+=f}for(let x=0;x<r;x++){const m=x*(i+1);for(let h=0;h<i;h++){const _=h+m,v=_,S=_+i+1,C=_+i+2,A=_+1;a.push(v,S,A),a.push(S,C,A)}}this.setIndex(a),this.setAttribute("position",new xn(l,3)),this.setAttribute("normal",new xn(c,3)),this.setAttribute("uv",new xn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Xp extends Ut{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new O,f=new O,p=[],g=[],x=[],m=[];for(let h=0;h<=i;h++){const _=[],v=h/i;let S=0;h===0&&o===0?S=.5/n:h===i&&l===Math.PI&&(S=-.5/n);for(let C=0;C<=n;C++){const A=C/n;d.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(A+S,1-v),_.push(c++)}u.push(_)}for(let h=0;h<i;h++)for(let _=0;_<n;_++){const v=u[h][_+1],S=u[h][_],C=u[h+1][_],A=u[h+1][_+1];(h!==0||o>0)&&p.push(v,S,A),(h!==i-1||l<Math.PI)&&p.push(S,C,A)}this.setIndex(p),this.setAttribute("position",new xn(g,3)),this.setAttribute("normal",new xn(x,3)),this.setAttribute("uv",new xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const S1=new xt;class i5{constructor(e,n,i=0,r=1/0){this.ray=new Ku(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Vp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return S1.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(S1),this}intersectObject(e,n=!0,i=[]){return ih(e,this,i,n),i.sort(M1),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ih(e[r],this,i,n);return i.sort(M1),i}}function M1(t,e){return t.distance-e.distance}function ih(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)ih(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ip}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ip);const An=Math.PI/180,rh=180/Math.PI;function n3(t){return Math.max(-1,Math.min(1,t))}function E1(t,e,n,i){const r=(i-e)*An;let s=((n-t+540)%360-180)*An;const o=Math.sin(r/2),a=Math.sin(s/2),l=o*o+Math.cos(e*An)*Math.cos(i*An)*a*a;return 2*Math.asin(n3(Math.sqrt(l)))*rh}function jp(t,e,n,i){const r=i*An,s=n*An,o=e*An,a=t*An,l=Math.sin(o)*Math.cos(r)+Math.cos(o)*Math.sin(r)*Math.cos(s),c=Math.asin(n3(l)),u=Math.sin(s)*Math.sin(r)*Math.cos(o),d=Math.cos(r)-Math.sin(o)*l;return[((a+Math.atan2(u,d))*rh%360+360)%360,c*rh]}function r5(t,e,n,i=128){const r=[];for(let s=0;s<=i;s++)r.push(jp(t,e,360*s/i,n));return r}function $p(t){const n=(t%360+360)%360/15,i=Math.floor(n),r=Math.floor((n-i)*60),s=Math.round(((n-i)*60-r)*60);return`${String(i).padStart(2,"0")}h${String(r).padStart(2,"0")}m${String(s%60).padStart(2,"0")}s`}function qp(t){const e=t<0?"−":"+";let n=Math.abs(t);const i=Math.floor(n),r=Math.floor((n-i)*60),s=Math.round(((n-i)*60-r)*60);return`${e}${String(i).padStart(2,"0")}°${String(r).padStart(2,"0")}′${String(s%60).padStart(2,"0")}″`}function w1(t){return["北","东北","东","东南","南","西南","西","西北"][Math.round((t%360+360)%360/45)%8]}function Qu(t){return(t%360+360)%360}function Yp(t){const e=new Map;for(const n of t){if(!Number.isFinite(n.az)||!Number.isFinite(n.alt))continue;const i=Math.round(Qu(n.az)*100)/100,r=Math.max(-90,Math.min(90,Math.round(n.alt*100)/100));e.set(i,r)}return[...e.entries()].map(([n,i])=>({az:n,alt:i})).sort((n,i)=>n.az-i.az)}function vu(t,e){const n=Yp(t);if(n.length===0)return 0;if(n.length===1)return n[0].alt;const i=Qu(e);let r=n.length-1;for(let d=0;d<n.length&&n[d].az<=i;d++)r=d;const s=n[r],o=n[(r+1)%n.length],a=s.az;let l=o.az;l<=a&&(l+=360);const u=((i<a?i+360:i)-a)/(l-a);return s.alt+(o.alt-s.alt)*u}const Ci=1;function s5(t){return t.kind==="sun"?new Xe(16765565):t.kind==="moon"?new Xe(14673650):t.kind==="planet"?new Xe(10406911):new Xe(16777215)}function T1(t){return t==="sun"||t==="moon"?"diamond":t==="planet"?"square":"circle"}function o5(t){var f;const{sky:e,fov:n,horizonClip:i,showGraticule:r,annotations:s,selectedId:o,hoverId:a}=t,l=Ge.useRef(null),c=Ge.useRef(null),[u,d]=Ge.useState(null);return Ge.useEffect(()=>{if(l.current)try{const p=new a5(l.current,t);return c.current=p,()=>{p.dispose(),c.current=null}}catch{d("当前环境无法初始化 WebGL，三维球面视图不可用（右侧两种投影不受影响）。")}},[]),Ge.useEffect(()=>{var p;(p=c.current)==null||p.update(t)}),Ge.useEffect(()=>{var g;if(!t.focusToken)return;const p=e.targets.find(x=>x.id===t.focusToken.id);p&&((g=c.current)==null||g.flyTo(p.hx,p.hy,p.hz))},[(f=t.focusToken)==null?void 0:f.nonce]),I.jsxs("div",{className:"globe-wrap",children:[u?I.jsx("div",{className:"globe-mount globe-error",children:u}):I.jsx("div",{ref:l,className:"globe-mount"}),I.jsxs("div",{className:"globe-hint",children:["拖拽旋转 · 滚轮缩放 · 点击星点定位（与右侧两图联动）",I.jsx("br",{}),"地平坐标系：红圈=几何地平（N/E/S/W），绿圈=视场（角半径 ",n.radiusDeg.toFixed(1),"°），网格=J2000 赤道坐标",e.occlusion?" · 琥珀色圈=站点遮挡轮廓（人工输入）":"",i?" · 已开启地平线裁切":""]})]})}class a5{constructor(e,n){Je(this,"renderer");Je(this,"scene");Je(this,"camera");Je(this,"raf",0);Je(this,"mount");Je(this,"resizeObs");Je(this,"points");Je(this,"pointMaterial");Je(this,"fovLine");Je(this,"horizonLine");Je(this,"occlusionLine",null);Je(this,"groundDisc");Je(this,"graticuleGroup",new ts);Je(this,"equatorLine",null);Je(this,"highlight");Je(this,"labelsGroup",new ts);Je(this,"annotationsGroup",new ts);Je(this,"raycaster",new i5);Je(this,"pickSphere");Je(this,"drag",{active:!1,x:0,y:0,moved:0});Je(this,"camDir",new O(0,0,1));Je(this,"camTargetDir",new O(0,0,1));Je(this,"props");Je(this,"positionData",[]);Je(this,"disposed",!1);Je(this,"cleanupEvents",()=>{});Je(this,"everMoved",!1);Je(this,"animate",()=>{this.disposed||(this.raf=requestAnimationFrame(this.animate),this.camDir.lerp(this.camTargetDir,.12).normalize(),this.camera.lookAt(this.camDir.clone().multiplyScalar(Ci)),this.camera.up.set(0,0,1),this.renderer.render(this.scene,this.camera))});this.mount=e,this.props=n,this.renderer=new K6({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(this.renderer.domElement),this.scene=new Z6,this.scene.background=new Xe(461332),this.camera=new kn(60,1,.01,10),this.camera.position.set(0,0,1e-4),this.camera.up.set(0,0,1),this.camera.lookAt(this.camDir),this.pickSphere=new li(new Xp(Ci,48,32),new hu({visible:!1,side:ln})),this.scene.add(this.pickSphere),this.highlight=new li(new Wp(.022,.032,32),new hu({color:16766282,side:vi,transparent:!0,opacity:.95})),this.highlight.visible=!1,this.scene.add(this.highlight),this.scene.add(this.graticuleGroup),this.scene.add(this.labelsGroup),this.scene.add(this.annotationsGroup),this.initStars(),this.initStaticFrames(),this.resize(),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(e),this.bindEvents(),this.update(n),this.animate()}initStars(){const n=new Ut,i=new Float32Array(256*3),r=new Float32Array(256),s=new Float32Array(256*3),o=new Float32Array(256);n.setAttribute("position",new on(i,3)),n.setAttribute("aSize",new on(r,1)),n.setAttribute("aColor",new on(s,3)),n.setAttribute("aShape",new on(o,1)),n.setDrawRange(0,0),this.pointMaterial=new qi({transparent:!0,depthWrite:!1,uniforms:{uPxRatio:{value:this.renderer.getPixelRatio()}},vertexShader:`
        attribute float aSize;
        attribute vec3 aColor;
        attribute float aShape;
        uniform float uPxRatio;
        varying vec3 vColor;
        varying float vShape;
        void main() {
          vColor = aColor;
          vShape = aShape;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uPxRatio * 220.0 / -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying vec3 vColor;
        varying float vShape;
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          float alpha = 0.0;
          if (vShape < 0.5) {
            // 圆星点
            alpha = smoothstep(0.5, 0.18, d);
          } else if (vShape < 1.5) {
            // 方形（行星）
            vec2 q = abs(uv);
            alpha = (max(q.x, q.y) < 0.34) ? 1.0 : 0.0;
          } else {
            // 菱形（日月）
            float d2 = abs(uv.x) + abs(uv.y);
            alpha = smoothstep(0.5, 0.3, d2);
          }
          if (alpha <= 0.01) discard;
          gl_FragColor = vec4(vColor, alpha);
        }`}),this.points=new t5(n,this.pointMaterial),this.points.frustumCulled=!1,this.scene.add(this.points)}makeLine(e,n,i=1){const r=new Ut().setFromPoints(e),s=new Xr({color:n,transparent:i<1,opacity:i});return new tc(r,s)}initStaticFrames(){const e=[];for(let r=0;r<128;r++){const s=2*Math.PI*r/128;e.push(new O(Math.cos(s),-Math.sin(s),0))}this.horizonLine=new tc(new Ut().setFromPoints(e),new Xr({color:16735581})),this.scene.add(this.horizonLine);const n=[];for(let r=0;r<=128;r++){const s=2*Math.PI*r/128;n.push(new O(Math.cos(s)*Ci,-Math.sin(s)*Ci,-.002))}this.groundDisc=new th(new Ut().setFromPoints([...n,new O(0,0,-Ci*.98),n[0]]),new Xr({color:16735581,transparent:!0,opacity:.25})),this.scene.add(this.groundDisc);const i=[["N 北",1,0,0],["E 东",0,-1,0],["S 南",-1,0,0],["W 西",0,1,0]];for(const[r,s,o,a]of i)this.labelsGroup.add(this.makeTextSprite(r,new O(s,o,a),"#ff8a8a"));this.labelsGroup.add(this.makeTextSprite("天顶 Z",new O(0,0,1),"#9fd0ff")),this.labelsGroup.add(this.makeTextSprite("天底",new O(0,0,-1),"#8a6a6a"))}makeTextSprite(e,n,i){const r=document.createElement("canvas");r.width=256,r.height=64;const s=r.getContext("2d");s.font="28px sans-serif",s.fillStyle=i,s.textAlign="center",s.textBaseline="middle",s.fillText(e,128,32);const o=new n5(r),a=new e3({map:o,transparent:!0,depthTest:!1,depthWrite:!1}),l=new Q6(a);return l.position.copy(n.clone().multiplyScalar(Ci*1.01)),l.scale.set(.09,.0225,1),l}bindEvents(){const e=this.renderer.domElement;e.style.cursor="grab";const n=o=>{this.drag={active:!0,x:o.clientX,y:o.clientY,moved:0},e.setPointerCapture(o.pointerId),e.style.cursor="grabbing"},i=o=>{const a=e.getBoundingClientRect();if(this.drag.active){const l=o.clientX-this.drag.x,c=o.clientY-this.drag.y;this.drag.moved+=Math.abs(l)+Math.abs(c),this.drag.x=o.clientX,this.drag.y=o.clientY,this.orbit(l,c)}else{const l=this.pick(o.clientX-a.left,o.clientY-a.top);this.props.onHover(l),e.style.cursor=l?"pointer":"grab"}},r=o=>{if(this.drag.active&&this.drag.moved<5){const a=e.getBoundingClientRect(),l=this.pick(o.clientX-a.left,o.clientY-a.top);this.props.onSelect(l)}this.drag.active=!1,e.style.cursor="grab"},s=o=>{o.preventDefault();const a=Rg.clamp(this.camera.fov+o.deltaY*.05,8,100);this.camera.fov=a,this.camera.updateProjectionMatrix()};e.addEventListener("pointerdown",n),e.addEventListener("pointermove",i),window.addEventListener("pointerup",r),e.addEventListener("wheel",s,{passive:!1}),this.cleanupEvents=()=>{e.removeEventListener("pointerdown",n),e.removeEventListener("pointermove",i),window.removeEventListener("pointerup",r),e.removeEventListener("wheel",s)}}orbit(e,n){const r=this.camDir,s=new O(0,0,1),o=new O().crossVectors(s,r).normalize(),a=new hs().setFromAxisAngle(s,-e*.25*Math.PI/180),l=new hs().setFromAxisAngle(o,-n*.25*Math.PI/180);r.applyQuaternion(a).applyQuaternion(l).normalize(),Math.abs(r.z)>.999&&(r.z=Math.sign(r.z)*.999,r.normalize()),this.camTargetDir.copy(r),this.everMoved=!0}pick(e,n){const i=this.renderer.domElement.getBoundingClientRect(),r=new je(e/i.width*2-1,-(n/i.height)*2+1);this.raycaster.setFromCamera(r,this.camera),this.raycaster;let s=null;for(const o of this.positionData){const a=o.vec,l=a.dot(this.camDir);if(l<=0)continue;const c=a.clone().project(this.camera),u=(c.x+1)/2*i.width,d=(-c.y+1)/2*i.height,f=(r.x+1)/2*i.width,p=(-r.y+1)/2*i.height;Math.hypot(u-f,d-p)<10&&(!s||l>s.dot)&&(s={id:o.id,dot:l})}return(s==null?void 0:s.id)??null}flyTo(e,n,i){this.camTargetDir.set(e,n,i).normalize(),this.camera.fov=35,this.camera.updateProjectionMatrix()}updateStars(e,n){const i=e.targets.filter(u=>u.inFov&&u.passesMag&&(!n||u.aboveHorizon)),r=this.points.geometry.getAttribute("position").count,s=Math.min(i.length,r),o=this.points.geometry.getAttribute("position"),a=this.points.geometry.getAttribute("aSize"),l=this.points.geometry.getAttribute("aColor"),c=this.points.geometry.getAttribute("aShape");this.positionData=[];for(let u=0;u<s;u++){const d=i[u],f=new O(d.hx,d.hy,d.hz).multiplyScalar(Ci);o.setXYZ(u,f.x,f.y,f.z);const p=d.id===this.props.selectedId||d.id===this.props.hoverId;let g=Rg.clamp(2.6-d.mag*.28,.5,3.4)*.012;d.kind!=="star"&&(g=Math.max(g,.04)),p&&(g*=1.6),a.setX(u,g);const x=s5(d);d.occluded&&x.multiplyScalar(.4),l.setXYZ(u,x.r,x.g,x.b),c.setX(u,T1(d.kind)==="circle"?0:T1(d.kind)==="square"?1:2),this.positionData.push({id:d.id,vec:new O(d.hx,d.hy,d.hz)})}this.points.geometry.setDrawRange(0,s),o.needsUpdate=!0,a.needsUpdate=!0,l.needsUpdate=!0,c.needsUpdate=!0}update(e){this.props=e,this.updateStars(e.sky,e.horizonClip),this.rebuildFovCircle(e),this.rebuildOcclusionLine(e),this.graticuleGroup.visible=e.showGraticule,this.rebuildGraticuleContent(e),this.rebuildAnnotations(e);const n=e.selectedId?e.sky.targets.find(i=>i.id===e.selectedId):null;if(n?(this.highlight.visible=!0,this.highlight.position.set(n.hx,n.hy,n.hz),this.highlight.lookAt(0,0,0)):this.highlight.visible=!1,!this.everMoved){const i=this.centerVec(e);this.camDir.copy(i),this.camTargetDir.copy(i)}}centerVec(e){const n=e.sky.centerAz*An,i=e.sky.centerAlt*An;return new O(Math.cos(i)*Math.cos(n),-Math.cos(i)*Math.sin(n),Math.sin(i)).normalize()}rebuildFovCircle(e){this.fovLine&&(this.scene.remove(this.fovLine),this.fovLine.geometry.dispose());const n=this.centerVec(e),i=e.fov.radiusDeg*An,r=Math.abs(n.z)<.9?new O(0,0,1):new O(1,0,0),s=new O().crossVectors(r,n).normalize(),o=new O().crossVectors(n,s).normalize(),a=[];for(let l=0;l<128;l++){const c=2*Math.PI*l/128,u=n.clone().multiplyScalar(Math.cos(i)).add(s.clone().multiplyScalar(Math.sin(i)*Math.cos(c))).add(o.clone().multiplyScalar(Math.sin(i)*Math.sin(c))).normalize().multiplyScalar(Ci*1.002);a.push(u)}this.fovLine=new tc(new Ut().setFromPoints(a),new Xr({color:5759881})),this.scene.add(this.fovLine)}rebuildOcclusionLine(e){this.occlusionLine&&(this.scene.remove(this.occlusionLine),this.occlusionLine.geometry.dispose(),this.occlusionLine.material.dispose(),this.occlusionLine=null);const n=e.sky.occlusion;if(!n)return;const i=[],r=240;for(let s=0;s<r;s++){const o=360*s/r,a=vu(n.points,o)*An,l=o*An;i.push(new O(Math.cos(a)*Math.cos(l),-Math.cos(a)*Math.sin(l),Math.sin(a)).normalize().multiplyScalar(Ci*1.001))}this.occlusionLine=new tc(new Ut().setFromPoints(i),new Xr({color:16758605})),this.scene.add(this.occlusionLine)}rebuildGraticuleContent(e){if([...this.graticuleGroup.children].forEach(i=>{var s,o;(o=(s=i.geometry)==null?void 0:s.dispose)==null||o.call(s)}),this.graticuleGroup.clear(),!e.showGraticule){this.equatorLine&&(this.scene.remove(this.equatorLine),this.equatorLine=null);return}const n=e.graticuleHorizontal;if(n)for(const i of[...n.parallels,...n.meridians]){const r=i.map(([o,a,l])=>new O(o,a,l)),s=new th(new Ut().setFromPoints(r),new Xr({color:3820139,transparent:!0,opacity:.7}));this.graticuleGroup.add(s)}}rebuildAnnotations(e){[...this.annotationsGroup.children].forEach(n=>{var r,s,o;const i=n;(r=i.material.map)==null||r.dispose(),(o=(s=i.geometry)==null?void 0:s.dispose)==null||o.call(s)}),this.annotationsGroup.clear();for(const n of e.annotations){const i=e.sky.targets.find(s=>Math.abs(s.ra-n.ra)<1e-9&&Math.abs(s.dec-n.dec)<1e-9);if(!i)continue;const r=this.makeTextSprite(`📝 ${n.text}`,new O(i.hx,i.hy,i.hz),n.color);this.annotationsGroup.add(r)}}resize(){const e=this.mount.clientWidth||1,n=this.mount.clientHeight||1;this.renderer.setSize(e,n),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.cleanupEvents(),this.resizeObs.disconnect(),this.occlusionLine&&(this.scene.remove(this.occlusionLine),this.occlusionLine.geometry.dispose(),this.occlusionLine.material.dispose(),this.occlusionLine=null),this.renderer.dispose(),this.renderer.domElement.remove()}}class Cr{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const n=this._partials;let i=0;for(let r=0;r<this._n&&r<32;r++){const s=n[r],o=e+s,a=Math.abs(e)<Math.abs(s)?e-(o-s):s-(o-e);a&&(n[i++]=a),e=o}return n[i]=e,this._n=i+1,this}valueOf(){const e=this._partials;let n=this._n,i,r,s,o=0;if(n>0){for(o=e[--n];n>0&&(i=o,r=e[--n],o=i+r,s=r-(o-i),!s););n>0&&(s<0&&e[n-1]<0||s>0&&e[n-1]>0)&&(r=s*2,i=o+r,r==i-o&&(o=i))}return o}}function*l5(t){for(const e of t)yield*e}function i3(t){return Array.from(l5(t))}function no(t,e,n){t=+t,e=+e,n=(r=arguments.length)<2?(e=t,t=0,1):r<3?1:+n;for(var i=-1,r=Math.max(0,Math.ceil((e-t)/n))|0,s=new Array(r);++i<r;)s[i]=t+i*n;return s}var Ke=1e-6,r3=1e-12,Qe=Math.PI,Wn=Qe/2,A1=Qe/4,Yn=Qe*2,ti=180/Qe,yt=Qe/180,ht=Math.abs,s3=Math.atan,ps=Math.atan2,ct=Math.cos,rc=Math.ceil,ot=Math.sin,c5=Math.sign||function(t){return t>0?1:t<0?-1:0},Ki=Math.sqrt;function o3(t){return t>1?0:t<-1?Qe:Math.acos(t)}function bo(t){return t>1?Wn:t<-1?-Wn:Math.asin(t)}function Ht(){}function _u(t,e){t&&C1.hasOwnProperty(t.type)&&C1[t.type](t,e)}var R1={Feature:function(t,e){_u(t.geometry,e)},FeatureCollection:function(t,e){for(var n=t.features,i=-1,r=n.length;++i<r;)_u(n[i].geometry,e)}},C1={Sphere:function(t,e){e.sphere()},Point:function(t,e){t=t.coordinates,e.point(t[0],t[1],t[2])},MultiPoint:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)t=n[i],e.point(t[0],t[1],t[2])},LineString:function(t,e){sh(t.coordinates,e,0)},MultiLineString:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)sh(n[i],e,0)},Polygon:function(t,e){P1(t.coordinates,e)},MultiPolygon:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)P1(n[i],e)},GeometryCollection:function(t,e){for(var n=t.geometries,i=-1,r=n.length;++i<r;)_u(n[i],e)}};function sh(t,e,n){var i=-1,r=t.length-n,s;for(e.lineStart();++i<r;)s=t[i],e.point(s[0],s[1],s[2]);e.lineEnd()}function P1(t,e){var n=-1,i=t.length;for(e.polygonStart();++n<i;)sh(t[n],e,1);e.polygonEnd()}function qr(t,e){t&&R1.hasOwnProperty(t.type)?R1[t.type](t,e):_u(t,e)}function oh(t){return[ps(t[1],t[0]),bo(t[2])]}function Lo(t){var e=t[0],n=t[1],i=ct(n);return[i*ct(e),i*ot(e),ot(n)]}function sc(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function xu(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function u0(t,e){t[0]+=e[0],t[1]+=e[1],t[2]+=e[2]}function oc(t,e){return[t[0]*e,t[1]*e,t[2]*e]}function ah(t){var e=Ki(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=e,t[1]/=e,t[2]/=e}function Hs(t){return function(){return t}}function lh(t,e){function n(i,r){return i=t(i,r),e(i[0],i[1])}return t.invert&&e.invert&&(n.invert=function(i,r){return i=e.invert(i,r),i&&t.invert(i[0],i[1])}),n}function ch(t,e){return ht(t)>Qe&&(t-=Math.round(t/Yn)*Yn),[t,e]}ch.invert=ch;function a3(t,e,n){return(t%=Yn)?e||n?lh(L1(t),D1(e,n)):L1(t):e||n?D1(e,n):ch}function b1(t){return function(e,n){return e+=t,ht(e)>Qe&&(e-=Math.round(e/Yn)*Yn),[e,n]}}function L1(t){var e=b1(t);return e.invert=b1(-t),e}function D1(t,e){var n=ct(t),i=ot(t),r=ct(e),s=ot(e);function o(a,l){var c=ct(l),u=ct(a)*c,d=ot(a)*c,f=ot(l),p=f*n+u*i;return[ps(d*r-p*s,u*n-f*i),bo(p*r+d*s)]}return o.invert=function(a,l){var c=ct(l),u=ct(a)*c,d=ot(a)*c,f=ot(l),p=f*r-d*s;return[ps(d*r+f*s,u*n+p*i),bo(p*n-u*i)]},o}function l3(t,e,n,i,r,s){if(n){var o=ct(e),a=ot(e),l=i*n;r==null?(r=e+i*Yn,s=e-l/2):(r=I1(o,r),s=I1(o,s),(i>0?r<s:r>s)&&(r+=i*Yn));for(var c,u=r;i>0?u>s:u<s;u-=l)c=oh([o,-a*ct(u),-a*ot(u)]),t.point(c[0],c[1])}}function I1(t,e){e=Lo(e),e[0]-=t,ah(e);var n=o3(-e[1]);return((-e[2]<0?-n:n)+Yn-Ke)%Yn}function Kp(){var t=Hs([0,0]),e=Hs(90),n=Hs(2),i,r,s={point:o};function o(l,c){i.push(l=r(l,c)),l[0]*=ti,l[1]*=ti}function a(){var l=t.apply(this,arguments),c=e.apply(this,arguments)*yt,u=n.apply(this,arguments)*yt;return i=[],r=a3(-l[0]*yt,-l[1]*yt,0).invert,l3(s,c,u,1),l={type:"Polygon",coordinates:[i]},i=r=null,l}return a.center=function(l){return arguments.length?(t=typeof l=="function"?l:Hs([+l[0],+l[1]]),a):t},a.radius=function(l){return arguments.length?(e=typeof l=="function"?l:Hs(+l),a):e},a.precision=function(l){return arguments.length?(n=typeof l=="function"?l:Hs(+l),a):n},a}function c3(){var t=[],e;return{point:function(n,i,r){e.push([n,i,r])},lineStart:function(){t.push(e=[])},lineEnd:Ht,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var n=t;return t=[],e=null,n}}}function Ic(t,e){return ht(t[0]-e[0])<Ke&&ht(t[1]-e[1])<Ke}function ac(t,e,n,i){this.x=t,this.z=e,this.o=n,this.e=i,this.v=!1,this.n=this.p=null}function u3(t,e,n,i,r){var s=[],o=[],a,l;if(t.forEach(function(g){if(!((x=g.length-1)<=0)){var x,m=g[0],h=g[x],_;if(Ic(m,h)){if(!m[2]&&!h[2]){for(r.lineStart(),a=0;a<x;++a)r.point((m=g[a])[0],m[1]);r.lineEnd();return}h[0]+=2*Ke}s.push(_=new ac(m,g,null,!0)),o.push(_.o=new ac(m,null,_,!1)),s.push(_=new ac(h,g,null,!1)),o.push(_.o=new ac(h,null,_,!0))}}),!!s.length){for(o.sort(e),N1(s),N1(o),a=0,l=o.length;a<l;++a)o[a].e=n=!n;for(var c=s[0],u,d;;){for(var f=c,p=!0;f.v;)if((f=f.n)===c)return;u=f.z,r.lineStart();do{if(f.v=f.o.v=!0,f.e){if(p)for(a=0,l=u.length;a<l;++a)r.point((d=u[a])[0],d[1]);else i(f.x,f.n.x,1,r);f=f.n}else{if(p)for(u=f.p.z,a=u.length-1;a>=0;--a)r.point((d=u[a])[0],d[1]);else i(f.x,f.p.x,-1,r);f=f.p}f=f.o,u=f.z,p=!p}while(!f.v);r.lineEnd()}}}function N1(t){if(e=t.length){for(var e,n=0,i=t[0],r;++n<e;)i.n=r=t[n],r.p=i,i=r;i.n=r=t[0],r.p=i}}function f0(t){return ht(t[0])<=Qe?t[0]:c5(t[0])*((ht(t[0])+Qe)%Yn-Qe)}function f3(t,e){var n=f0(e),i=e[1],r=ot(i),s=[ot(n),-ct(n),0],o=0,a=0,l=new Cr;r===1?i=Wn+Ke:r===-1&&(i=-Wn-Ke);for(var c=0,u=t.length;c<u;++c)if(f=(d=t[c]).length)for(var d,f,p=d[f-1],g=f0(p),x=p[1]/2+A1,m=ot(x),h=ct(x),_=0;_<f;++_,g=S,m=A,h=T,p=v){var v=d[_],S=f0(v),C=v[1]/2+A1,A=ot(C),T=ct(C),P=S-g,W=P>=0?1:-1,y=W*P,M=y>Qe,H=m*A;if(l.add(ps(H*W*ot(y),h*T+H*ct(y))),o+=M?P+W*Yn:P,M^g>=n^S>=n){var N=xu(Lo(p),Lo(v));ah(N);var j=xu(s,N);ah(j);var D=(M^P>=0?-1:1)*bo(j[2]);(i>D||i===D&&(N[0]||N[1]))&&(a+=M^P>=0?1:-1)}}return(o<-Ke||o<Ke&&l<-r3)^a&1}function d3(t,e,n,i){return function(r){var s=e(r),o=c3(),a=e(o),l=!1,c,u,d,f={point:p,lineStart:x,lineEnd:m,polygonStart:function(){f.point=h,f.lineStart=_,f.lineEnd=v,u=[],c=[]},polygonEnd:function(){f.point=p,f.lineStart=x,f.lineEnd=m,u=i3(u);var S=f3(c,i);u.length?(l||(r.polygonStart(),l=!0),u3(u,f5,S,n,r)):S&&(l||(r.polygonStart(),l=!0),r.lineStart(),n(null,null,1,r),r.lineEnd()),l&&(r.polygonEnd(),l=!1),u=c=null},sphere:function(){r.polygonStart(),r.lineStart(),n(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function p(S,C){t(S,C)&&r.point(S,C)}function g(S,C){s.point(S,C)}function x(){f.point=g,s.lineStart()}function m(){f.point=p,s.lineEnd()}function h(S,C){d.push([S,C]),a.point(S,C)}function _(){a.lineStart(),d=[]}function v(){h(d[0][0],d[0][1]),a.lineEnd();var S=a.clean(),C=o.result(),A,T=C.length,P,W,y;if(d.pop(),c.push(d),d=null,!!T){if(S&1){if(W=C[0],(P=W.length-1)>0){for(l||(r.polygonStart(),l=!0),r.lineStart(),A=0;A<P;++A)r.point((y=W[A])[0],y[1]);r.lineEnd()}return}T>1&&S&2&&C.push(C.pop().concat(C.shift())),u.push(C.filter(u5))}}return f}}function u5(t){return t.length>1}function f5(t,e){return((t=t.x)[0]<0?t[1]-Wn-Ke:Wn-t[1])-((e=e.x)[0]<0?e[1]-Wn-Ke:Wn-e[1])}const U1=d3(function(){return!0},d5,p5,[-Qe,-Wn]);function d5(t){var e=NaN,n=NaN,i=NaN,r;return{lineStart:function(){t.lineStart(),r=1},point:function(s,o){var a=s>0?Qe:-Qe,l=ht(s-e);ht(l-Qe)<Ke?(t.point(e,n=(n+o)/2>0?Wn:-Wn),t.point(i,n),t.lineEnd(),t.lineStart(),t.point(a,n),t.point(s,n),r=0):i!==a&&l>=Qe&&(ht(e-i)<Ke&&(e-=i*Ke),ht(s-a)<Ke&&(s-=a*Ke),n=h5(e,n,s,o),t.point(i,n),t.lineEnd(),t.lineStart(),t.point(a,n),r=0),t.point(e=s,n=o),i=a},lineEnd:function(){t.lineEnd(),e=n=NaN},clean:function(){return 2-r}}}function h5(t,e,n,i){var r,s,o=ot(t-n);return ht(o)>Ke?s3((ot(e)*(s=ct(i))*ot(n)-ot(i)*(r=ct(e))*ot(t))/(r*s*o)):(e+i)/2}function p5(t,e,n,i){var r;if(t==null)r=n*Wn,i.point(-Qe,r),i.point(0,r),i.point(Qe,r),i.point(Qe,0),i.point(Qe,-r),i.point(0,-r),i.point(-Qe,-r),i.point(-Qe,0),i.point(-Qe,r);else if(ht(t[0]-e[0])>Ke){var s=t[0]<e[0]?Qe:-Qe;r=n*s/2,i.point(-s,r),i.point(0,r),i.point(s,r)}else i.point(e[0],e[1])}function m5(t){var e=ct(t),n=2*yt,i=e>0,r=ht(e)>Ke;function s(u,d,f,p){l3(p,t,n,f,u,d)}function o(u,d){return ct(u)*ct(d)>e}function a(u){var d,f,p,g,x;return{lineStart:function(){g=p=!1,x=1},point:function(m,h){var _=[m,h],v,S=o(m,h),C=i?S?0:c(m,h):S?c(m+(m<0?Qe:-Qe),h):0;if(!d&&(g=p=S)&&u.lineStart(),S!==p&&(v=l(d,_),(!v||Ic(d,v)||Ic(_,v))&&(_[2]=1)),S!==p)x=0,S?(u.lineStart(),v=l(_,d),u.point(v[0],v[1])):(v=l(d,_),u.point(v[0],v[1],2),u.lineEnd()),d=v;else if(r&&d&&i^S){var A;!(C&f)&&(A=l(_,d,!0))&&(x=0,i?(u.lineStart(),u.point(A[0][0],A[0][1]),u.point(A[1][0],A[1][1]),u.lineEnd()):(u.point(A[1][0],A[1][1]),u.lineEnd(),u.lineStart(),u.point(A[0][0],A[0][1],3)))}S&&(!d||!Ic(d,_))&&u.point(_[0],_[1]),d=_,p=S,f=C},lineEnd:function(){p&&u.lineEnd(),d=null},clean:function(){return x|(g&&p)<<1}}}function l(u,d,f){var p=Lo(u),g=Lo(d),x=[1,0,0],m=xu(p,g),h=sc(m,m),_=m[0],v=h-_*_;if(!v)return!f&&u;var S=e*h/v,C=-e*_/v,A=xu(x,m),T=oc(x,S),P=oc(m,C);u0(T,P);var W=A,y=sc(T,W),M=sc(W,W),H=y*y-M*(sc(T,T)-1);if(!(H<0)){var N=Ki(H),j=oc(W,(-y-N)/M);if(u0(j,T),j=oh(j),!f)return j;var D=u[0],B=d[0],Y=u[1],L=d[1],Z;B<D&&(Z=D,D=B,B=Z);var $=B-D,ne=ht($-Qe)<Ke,xe=ne||$<Ke;if(!ne&&L<Y&&(Z=Y,Y=L,L=Z),xe?ne?Y+L>0^j[1]<(ht(j[0]-D)<Ke?Y:L):Y<=j[1]&&j[1]<=L:$>Qe^(D<=j[0]&&j[0]<=B)){var De=oc(W,(-y+N)/M);return u0(De,T),[j,oh(De)]}}}function c(u,d){var f=i?t:Qe-t,p=0;return u<-f?p|=1:u>f&&(p|=2),d<-f?p|=4:d>f&&(p|=8),p}return d3(o,a,s,i?[0,-t]:[-Qe,t-Qe])}function g5(t,e,n,i,r,s){var o=t[0],a=t[1],l=e[0],c=e[1],u=0,d=1,f=l-o,p=c-a,g;if(g=n-o,!(!f&&g>0)){if(g/=f,f<0){if(g<u)return;g<d&&(d=g)}else if(f>0){if(g>d)return;g>u&&(u=g)}if(g=r-o,!(!f&&g<0)){if(g/=f,f<0){if(g>d)return;g>u&&(u=g)}else if(f>0){if(g<u)return;g<d&&(d=g)}if(g=i-a,!(!p&&g>0)){if(g/=p,p<0){if(g<u)return;g<d&&(d=g)}else if(p>0){if(g>d)return;g>u&&(u=g)}if(g=s-a,!(!p&&g<0)){if(g/=p,p<0){if(g>d)return;g>u&&(u=g)}else if(p>0){if(g<u)return;g<d&&(d=g)}return u>0&&(t[0]=o+u*f,t[1]=a+u*p),d<1&&(e[0]=o+d*f,e[1]=a+d*p),!0}}}}}var ua=1e9,lc=-ua;function v5(t,e,n,i){function r(c,u){return t<=c&&c<=n&&e<=u&&u<=i}function s(c,u,d,f){var p=0,g=0;if(c==null||(p=o(c,d))!==(g=o(u,d))||l(c,u)<0^d>0)do f.point(p===0||p===3?t:n,p>1?i:e);while((p=(p+d+4)%4)!==g);else f.point(u[0],u[1])}function o(c,u){return ht(c[0]-t)<Ke?u>0?0:3:ht(c[0]-n)<Ke?u>0?2:1:ht(c[1]-e)<Ke?u>0?1:0:u>0?3:2}function a(c,u){return l(c.x,u.x)}function l(c,u){var d=o(c,1),f=o(u,1);return d!==f?d-f:d===0?u[1]-c[1]:d===1?c[0]-u[0]:d===2?c[1]-u[1]:u[0]-c[0]}return function(c){var u=c,d=c3(),f,p,g,x,m,h,_,v,S,C,A,T={point:P,lineStart:H,lineEnd:N,polygonStart:y,polygonEnd:M};function P(D,B){r(D,B)&&u.point(D,B)}function W(){for(var D=0,B=0,Y=p.length;B<Y;++B)for(var L=p[B],Z=1,$=L.length,ne=L[0],xe,De,q=ne[0],ee=ne[1];Z<$;++Z)xe=q,De=ee,ne=L[Z],q=ne[0],ee=ne[1],De<=i?ee>i&&(q-xe)*(i-De)>(ee-De)*(t-xe)&&++D:ee<=i&&(q-xe)*(i-De)<(ee-De)*(t-xe)&&--D;return D}function y(){u=d,f=[],p=[],A=!0}function M(){var D=W(),B=A&&D,Y=(f=i3(f)).length;(B||Y)&&(c.polygonStart(),B&&(c.lineStart(),s(null,null,1,c),c.lineEnd()),Y&&u3(f,a,D,s,c),c.polygonEnd()),u=c,f=p=g=null}function H(){T.point=j,p&&p.push(g=[]),C=!0,S=!1,_=v=NaN}function N(){f&&(j(x,m),h&&S&&d.rejoin(),f.push(d.result())),T.point=P,S&&u.lineEnd()}function j(D,B){var Y=r(D,B);if(p&&g.push([D,B]),C)x=D,m=B,h=Y,C=!1,Y&&(u.lineStart(),u.point(D,B));else if(Y&&S)u.point(D,B);else{var L=[_=Math.max(lc,Math.min(ua,_)),v=Math.max(lc,Math.min(ua,v))],Z=[D=Math.max(lc,Math.min(ua,D)),B=Math.max(lc,Math.min(ua,B))];g5(L,Z,t,e,n,i)?(S||(u.lineStart(),u.point(L[0],L[1])),u.point(Z[0],Z[1]),Y||u.lineEnd(),A=!1):Y&&(u.lineStart(),u.point(D,B),A=!1)}_=D,v=B,S=Y}return T}}var uh,fh,Nc,Uc,Do={sphere:Ht,point:Ht,lineStart:_5,lineEnd:Ht,polygonStart:Ht,polygonEnd:Ht};function _5(){Do.point=y5,Do.lineEnd=x5}function x5(){Do.point=Do.lineEnd=Ht}function y5(t,e){t*=yt,e*=yt,fh=t,Nc=ot(e),Uc=ct(e),Do.point=S5}function S5(t,e){t*=yt,e*=yt;var n=ot(e),i=ct(e),r=ht(t-fh),s=ct(r),o=ot(r),a=i*o,l=Uc*n-Nc*i*s,c=Nc*n+Uc*i*s;uh.add(ps(Ki(a*a+l*l),c)),fh=t,Nc=n,Uc=i}function M5(t){return uh=new Cr,qr(t,Do),+uh}var dh=[null,null],E5={type:"LineString",coordinates:dh};function hh(t,e){return dh[0]=t,dh[1]=e,M5(E5)}var F1={Feature:function(t,e){return yu(t.geometry,e)},FeatureCollection:function(t,e){for(var n=t.features,i=-1,r=n.length;++i<r;)if(yu(n[i].geometry,e))return!0;return!1}},z1={Sphere:function(){return!0},Point:function(t,e){return O1(t.coordinates,e)},MultiPoint:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)if(O1(n[i],e))return!0;return!1},LineString:function(t,e){return k1(t.coordinates,e)},MultiLineString:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)if(k1(n[i],e))return!0;return!1},Polygon:function(t,e){return B1(t.coordinates,e)},MultiPolygon:function(t,e){for(var n=t.coordinates,i=-1,r=n.length;++i<r;)if(B1(n[i],e))return!0;return!1},GeometryCollection:function(t,e){for(var n=t.geometries,i=-1,r=n.length;++i<r;)if(yu(n[i],e))return!0;return!1}};function yu(t,e){return t&&z1.hasOwnProperty(t.type)?z1[t.type](t,e):!1}function O1(t,e){return hh(t,e)===0}function k1(t,e){for(var n,i,r,s=0,o=t.length;s<o;s++){if(i=hh(t[s],e),i===0||s>0&&(r=hh(t[s],t[s-1]),r>0&&n<=r&&i<=r&&(n+i-r)*(1-Math.pow((n-i)/r,2))<r3*r))return!0;n=i}return!1}function B1(t,e){return!!f3(t.map(w5),h3(e))}function w5(t){return t=t.map(h3),t.pop(),t}function h3(t){return[t[0]*yt,t[1]*yt]}function T5(t,e){return(t&&F1.hasOwnProperty(t.type)?F1[t.type]:yu)(t,e)}function H1(t,e,n){var i=no(t,e-Ke,n).concat(e);return function(r){return i.map(function(s){return[r,s]})}}function V1(t,e,n){var i=no(t,e-Ke,n).concat(e);return function(r){return i.map(function(s){return[s,r]})}}function A5(){var t,e,n,i,r,s,o,a,l=10,c=l,u=90,d=360,f,p,g,x,m=2.5;function h(){return{type:"MultiLineString",coordinates:_()}}function _(){return no(rc(i/u)*u,n,u).map(g).concat(no(rc(a/d)*d,o,d).map(x)).concat(no(rc(e/l)*l,t,l).filter(function(v){return ht(v%u)>Ke}).map(f)).concat(no(rc(s/c)*c,r,c).filter(function(v){return ht(v%d)>Ke}).map(p))}return h.lines=function(){return _().map(function(v){return{type:"LineString",coordinates:v}})},h.outline=function(){return{type:"Polygon",coordinates:[g(i).concat(x(o).slice(1),g(n).reverse().slice(1),x(a).reverse().slice(1))]}},h.extent=function(v){return arguments.length?h.extentMajor(v).extentMinor(v):h.extentMinor()},h.extentMajor=function(v){return arguments.length?(i=+v[0][0],n=+v[1][0],a=+v[0][1],o=+v[1][1],i>n&&(v=i,i=n,n=v),a>o&&(v=a,a=o,o=v),h.precision(m)):[[i,a],[n,o]]},h.extentMinor=function(v){return arguments.length?(e=+v[0][0],t=+v[1][0],s=+v[0][1],r=+v[1][1],e>t&&(v=e,e=t,t=v),s>r&&(v=s,s=r,r=v),h.precision(m)):[[e,s],[t,r]]},h.step=function(v){return arguments.length?h.stepMajor(v).stepMinor(v):h.stepMinor()},h.stepMajor=function(v){return arguments.length?(u=+v[0],d=+v[1],h):[u,d]},h.stepMinor=function(v){return arguments.length?(l=+v[0],c=+v[1],h):[l,c]},h.precision=function(v){return arguments.length?(m=+v,f=H1(s,r,90),p=V1(e,t,m),g=H1(a,o,90),x=V1(i,n,m),h):m},h.extentMajor([[-180,-90+Ke],[180,90-Ke]]).extentMinor([[-180,-80-Ke],[180,80+Ke]])}function R5(){return A5()()}const ph=t=>t;var d0=new Cr,mh=new Cr,p3,m3,gh,vh,Ni={point:Ht,lineStart:Ht,lineEnd:Ht,polygonStart:function(){Ni.lineStart=C5,Ni.lineEnd=b5},polygonEnd:function(){Ni.lineStart=Ni.lineEnd=Ni.point=Ht,d0.add(ht(mh)),mh=new Cr},result:function(){var t=d0/2;return d0=new Cr,t}};function C5(){Ni.point=P5}function P5(t,e){Ni.point=g3,p3=gh=t,m3=vh=e}function g3(t,e){mh.add(vh*t-gh*e),gh=t,vh=e}function b5(){g3(p3,m3)}var Io=1/0,Su=Io,qa=-Io,Mu=qa,Eu={point:L5,lineStart:Ht,lineEnd:Ht,polygonStart:Ht,polygonEnd:Ht,result:function(){var t=[[Io,Su],[qa,Mu]];return qa=Mu=-(Su=Io=1/0),t}};function L5(t,e){t<Io&&(Io=t),t>qa&&(qa=t),e<Su&&(Su=e),e>Mu&&(Mu=e)}var _h=0,xh=0,fa=0,wu=0,Tu=0,io=0,yh=0,Sh=0,da=0,v3,_3,_i,xi,Hn={point:ms,lineStart:G1,lineEnd:W1,polygonStart:function(){Hn.lineStart=N5,Hn.lineEnd=U5},polygonEnd:function(){Hn.point=ms,Hn.lineStart=G1,Hn.lineEnd=W1},result:function(){var t=da?[yh/da,Sh/da]:io?[wu/io,Tu/io]:fa?[_h/fa,xh/fa]:[NaN,NaN];return _h=xh=fa=wu=Tu=io=yh=Sh=da=0,t}};function ms(t,e){_h+=t,xh+=e,++fa}function G1(){Hn.point=D5}function D5(t,e){Hn.point=I5,ms(_i=t,xi=e)}function I5(t,e){var n=t-_i,i=e-xi,r=Ki(n*n+i*i);wu+=r*(_i+t)/2,Tu+=r*(xi+e)/2,io+=r,ms(_i=t,xi=e)}function W1(){Hn.point=ms}function N5(){Hn.point=F5}function U5(){x3(v3,_3)}function F5(t,e){Hn.point=x3,ms(v3=_i=t,_3=xi=e)}function x3(t,e){var n=t-_i,i=e-xi,r=Ki(n*n+i*i);wu+=r*(_i+t)/2,Tu+=r*(xi+e)/2,io+=r,r=xi*t-_i*e,yh+=r*(_i+t),Sh+=r*(xi+e),da+=r*3,ms(_i=t,xi=e)}function y3(t){this._context=t}y3.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(t,e){switch(this._point){case 0:{this._context.moveTo(t,e),this._point=1;break}case 1:{this._context.lineTo(t,e);break}default:{this._context.moveTo(t+this._radius,e),this._context.arc(t,e,this._radius,0,Yn);break}}},result:Ht};var Mh=new Cr,h0,S3,M3,ha,pa,Ya={point:Ht,lineStart:function(){Ya.point=z5},lineEnd:function(){h0&&E3(S3,M3),Ya.point=Ht},polygonStart:function(){h0=!0},polygonEnd:function(){h0=null},result:function(){var t=+Mh;return Mh=new Cr,t}};function z5(t,e){Ya.point=E3,S3=ha=t,M3=pa=e}function E3(t,e){ha-=t,pa-=e,Mh.add(Ki(ha*ha+pa*pa)),ha=t,pa=e}let X1,Au,j1,$1;class q1{constructor(e){this._append=e==null?w3:O5(e),this._radius=4.5,this._=""}pointRadius(e){return this._radius=+e,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(e,n){switch(this._point){case 0:{this._append`M${e},${n}`,this._point=1;break}case 1:{this._append`L${e},${n}`;break}default:{if(this._append`M${e},${n}`,this._radius!==j1||this._append!==Au){const i=this._radius,r=this._;this._="",this._append`m0,${i}a${i},${i} 0 1,1 0,${-2*i}a${i},${i} 0 1,1 0,${2*i}z`,j1=i,Au=this._append,$1=this._,this._=r}this._+=$1;break}}}result(){const e=this._;return this._="",e.length?e:null}}function w3(t){let e=1;this._+=t[0];for(const n=t.length;e<n;++e)this._+=arguments[e]+t[e]}function O5(t){const e=Math.floor(t);if(!(e>=0))throw new RangeError(`invalid digits: ${t}`);if(e>15)return w3;if(e!==X1){const n=10**e;X1=e,Au=function(r){let s=1;this._+=r[0];for(const o=r.length;s<o;++s)this._+=Math.round(arguments[s]*n)/n+r[s]}}return Au}function k5(t,e){let n=3,i=4.5,r,s;function o(a){return a&&(typeof i=="function"&&s.pointRadius(+i.apply(this,arguments)),qr(a,r(s))),s.result()}return o.area=function(a){return qr(a,r(Ni)),Ni.result()},o.measure=function(a){return qr(a,r(Ya)),Ya.result()},o.bounds=function(a){return qr(a,r(Eu)),Eu.result()},o.centroid=function(a){return qr(a,r(Hn)),Hn.result()},o.projection=function(a){return arguments.length?(r=a==null?(t=null,ph):(t=a).stream,o):t},o.context=function(a){return arguments.length?(s=a==null?(e=null,new q1(n)):new y3(e=a),typeof i!="function"&&s.pointRadius(i),o):e},o.pointRadius=function(a){return arguments.length?(i=typeof a=="function"?a:(s.pointRadius(+a),+a),o):i},o.digits=function(a){if(!arguments.length)return n;if(a==null)n=null;else{const l=Math.floor(a);if(!(l>=0))throw new RangeError(`invalid digits: ${a}`);n=l}return e===null&&(s=new q1(n)),o},o.projection(t).digits(n).context(e)}function Zp(t){return function(e){var n=new Eh;for(var i in t)n[i]=t[i];return n.stream=e,n}}function Eh(){}Eh.prototype={constructor:Eh,point:function(t,e){this.stream.point(t,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Jp(t,e,n){var i=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),i!=null&&t.clipExtent(null),qr(n,t.stream(Eu)),e(Eu.result()),i!=null&&t.clipExtent(i),t}function T3(t,e,n){return Jp(t,function(i){var r=e[1][0]-e[0][0],s=e[1][1]-e[0][1],o=Math.min(r/(i[1][0]-i[0][0]),s/(i[1][1]-i[0][1])),a=+e[0][0]+(r-o*(i[1][0]+i[0][0]))/2,l=+e[0][1]+(s-o*(i[1][1]+i[0][1]))/2;t.scale(150*o).translate([a,l])},n)}function B5(t,e,n){return T3(t,[[0,0],e],n)}function H5(t,e,n){return Jp(t,function(i){var r=+e,s=r/(i[1][0]-i[0][0]),o=(r-s*(i[1][0]+i[0][0]))/2,a=-s*i[0][1];t.scale(150*s).translate([o,a])},n)}function V5(t,e,n){return Jp(t,function(i){var r=+e,s=r/(i[1][1]-i[0][1]),o=-s*i[0][0],a=(r-s*(i[1][1]+i[0][1]))/2;t.scale(150*s).translate([o,a])},n)}var Y1=16,G5=ct(30*yt);function K1(t,e){return+e?X5(t,e):W5(t)}function W5(t){return Zp({point:function(e,n){e=t(e,n),this.stream.point(e[0],e[1])}})}function X5(t,e){function n(i,r,s,o,a,l,c,u,d,f,p,g,x,m){var h=c-i,_=u-r,v=h*h+_*_;if(v>4*e&&x--){var S=o+f,C=a+p,A=l+g,T=Ki(S*S+C*C+A*A),P=bo(A/=T),W=ht(ht(A)-1)<Ke||ht(s-d)<Ke?(s+d)/2:ps(C,S),y=t(W,P),M=y[0],H=y[1],N=M-i,j=H-r,D=_*N-h*j;(D*D/v>e||ht((h*N+_*j)/v-.5)>.3||o*f+a*p+l*g<G5)&&(n(i,r,s,o,a,l,M,H,W,S/=T,C/=T,A,x,m),m.point(M,H),n(M,H,W,S,C,A,c,u,d,f,p,g,x,m))}}return function(i){var r,s,o,a,l,c,u,d,f,p,g,x,m={point:h,lineStart:_,lineEnd:S,polygonStart:function(){i.polygonStart(),m.lineStart=C},polygonEnd:function(){i.polygonEnd(),m.lineStart=_}};function h(P,W){P=t(P,W),i.point(P[0],P[1])}function _(){d=NaN,m.point=v,i.lineStart()}function v(P,W){var y=Lo([P,W]),M=t(P,W);n(d,f,u,p,g,x,d=M[0],f=M[1],u=P,p=y[0],g=y[1],x=y[2],Y1,i),i.point(d,f)}function S(){m.point=h,i.lineEnd()}function C(){_(),m.point=A,m.lineEnd=T}function A(P,W){v(r=P,W),s=d,o=f,a=p,l=g,c=x,m.point=v}function T(){n(d,f,u,p,g,x,s,o,r,a,l,c,Y1,i),m.lineEnd=S,S()}return m}}var j5=Zp({point:function(t,e){this.stream.point(t*yt,e*yt)}});function $5(t){return Zp({point:function(e,n){var i=t(e,n);return this.stream.point(i[0],i[1])}})}function q5(t,e,n,i,r){function s(o,a){return o*=i,a*=r,[e+t*o,n-t*a]}return s.invert=function(o,a){return[(o-e)/t*i,(n-a)/t*r]},s}function Z1(t,e,n,i,r,s){if(!s)return q5(t,e,n,i,r);var o=ct(s),a=ot(s),l=o*t,c=a*t,u=o/t,d=a/t,f=(a*n-o*e)/t,p=(a*e+o*n)/t;function g(x,m){return x*=i,m*=r,[l*x-c*m+e,n-c*x-l*m]}return g.invert=function(x,m){return[i*(u*x-d*m+f),r*(p-d*x-u*m)]},g}function A3(t){return Y5(function(){return t})()}function Y5(t){var e,n=150,i=480,r=250,s=0,o=0,a=0,l=0,c=0,u,d=0,f=1,p=1,g=null,x=U1,m=null,h,_,v,S=ph,C=.5,A,T,P,W,y;function M(D){return P(D[0]*yt,D[1]*yt)}function H(D){return D=P.invert(D[0],D[1]),D&&[D[0]*ti,D[1]*ti]}M.stream=function(D){return W&&y===D?W:W=j5($5(u)(x(A(S(y=D)))))},M.preclip=function(D){return arguments.length?(x=D,g=void 0,j()):x},M.postclip=function(D){return arguments.length?(S=D,m=h=_=v=null,j()):S},M.clipAngle=function(D){return arguments.length?(x=+D?m5(g=D*yt):(g=null,U1),j()):g*ti},M.clipExtent=function(D){return arguments.length?(S=D==null?(m=h=_=v=null,ph):v5(m=+D[0][0],h=+D[0][1],_=+D[1][0],v=+D[1][1]),j()):m==null?null:[[m,h],[_,v]]},M.scale=function(D){return arguments.length?(n=+D,N()):n},M.translate=function(D){return arguments.length?(i=+D[0],r=+D[1],N()):[i,r]},M.center=function(D){return arguments.length?(s=D[0]%360*yt,o=D[1]%360*yt,N()):[s*ti,o*ti]},M.rotate=function(D){return arguments.length?(a=D[0]%360*yt,l=D[1]%360*yt,c=D.length>2?D[2]%360*yt:0,N()):[a*ti,l*ti,c*ti]},M.angle=function(D){return arguments.length?(d=D%360*yt,N()):d*ti},M.reflectX=function(D){return arguments.length?(f=D?-1:1,N()):f<0},M.reflectY=function(D){return arguments.length?(p=D?-1:1,N()):p<0},M.precision=function(D){return arguments.length?(A=K1(T,C=D*D),j()):Ki(C)},M.fitExtent=function(D,B){return T3(M,D,B)},M.fitSize=function(D,B){return B5(M,D,B)},M.fitWidth=function(D,B){return H5(M,D,B)},M.fitHeight=function(D,B){return V5(M,D,B)};function N(){var D=Z1(n,0,0,f,p,d).apply(null,e(s,o)),B=Z1(n,i-D[0],r-D[1],f,p,d);return u=a3(a,l,c),T=lh(e,B),P=lh(u,T),A=K1(T,C),j()}function j(){return W=y=null,M}return function(){return e=t.apply(this,arguments),M.invert=e.invert&&H,N()}}function K5(t){return function(e,n){var i=ct(e),r=ct(n),s=t(i*r);return s===1/0?[2,0]:[s*r*ot(e),s*ot(n)]}}function R3(t){return function(e,n){var i=Ki(e*e+n*n),r=t(i),s=ot(r),o=ct(r);return[ps(e*s,i*o),bo(i&&n*s/i)]}}var C3=K5(function(t){return(t=o3(t))&&t/ot(t)});C3.invert=R3(function(t){return t});function Z5(){return A3(C3).scale(79.4188).clipAngle(180-.001)}function P3(t,e){var n=ct(e),i=1+ct(t)*n;return[n*ot(t)/i,ot(e)/i]}P3.invert=R3(function(t){return 2*s3(t)});function J5(){return A3(P3).scale(250).clipAngle(142)}const Ka=210,Cn=560;function Q5(t,e,n,i){const[r,s]=jp(e,n,90,i);let o=10,a=1e5;for(let l=0;l<44;l++){const c=(o+a)/2;t.scale(c);const u=t([r,s]),d=t([e,n]);if(!u||!d){o=c;continue}Math.hypot(u[0]-d[0],u[1]-d[1])<Ka?o=c:a=c}return(o+a)/2}function b3(t,e,n,i){const r=t==="stereographic"?J5():Z5();r.rotate([-e,-n]).clipAngle(i+.02).precision(.1);const s=Q5(r,e,n,i);r.scale(s).translate([Cn/2,Cn/2]);const o=k5(r),a=u=>o(u)??"",l=u=>{const[d,f]=jp(e,n,90,u),p=r([d,f]),g=r([e,n]);return!p||!g?0:Math.hypot(p[0]-g[0],p[1]-g[1])},c=l(1);return{projection:r,path:a,label:t==="stereographic"?"立体投影（Stereographic）":"等距方位投影（Azimuthal Equidistant）",radialPixels:l,pxPerDegreeAtCenter:c,scaleRatioAt:u=>l(u)/u/(c||1)}}function L3(){return R5()}function Ru(t,e,n,i=128){return Kp().center([t,e]).radius(n).precision(.1)()}function D3(t,e){return Kp().center([t,e]).radius(90-1e-4).precision(.1)()}function I3(t,e){return Kp().center([t,e]).radius(90).precision(.05)()}function N3(t){return{type:"LineString",coordinates:t}}function U3(t,e,n){const i=t[0],r=t[t.length-1],s=i[0]===r[0]&&i[1]===r[1]?t:[...t,i],o=l=>({type:"Polygon",coordinates:[l]}),a=o(s);return T5(a,[e,n])?a:o([...s].reverse())}function p0(t,e,n){const i=t([e,n]);return i?[i[0],i[1]]:null}const Fn=Cn/2;function J1(t){const{kind:e,sky:n,fov:i,horizonClip:r,showHorizon:s}=t,o=Ge.useMemo(()=>b3(e,i.centerRa,i.centerDec,i.radiusDeg),[e,i.centerRa,i.centerDec,i.radiusDeg]),a=Ge.useMemo(()=>{const g=o.path(L3()),x=i.radiusDeg<=20?5:i.radiusDeg<=45?10:20,m=[];for(let A=x;A<i.radiusDeg;A+=x)m.push({d:o.path(Ru(i.centerRa,i.centerDec,A)),rDeg:A});const h=o.path(Ru(i.centerRa,i.centerDec,i.radiusDeg)),_=o.path(I3(n.horizon.nadirRa,n.horizon.nadirDec)),v=o.path(D3(n.horizon.nadirRa,n.horizon.nadirDec)),S=n.occlusion?o.path(N3(n.occlusion.ring)):"",C=n.occlusion?o.path(U3(n.occlusion.ring,n.horizon.nadirRa,n.horizon.nadirDec)):"";return{grat:g,rings:m,fovPath:h,horizon:_,below:v,occLine:S,occRegion:C}},[o,i,n.horizon.nadirRa,n.horizon.nadirDec,n.occlusion]),l=Ge.useMemo(()=>{const g=[];for(const x of n.targets){if(!x.inFov||!x.passesMag||r&&!x.aboveHorizon)continue;const m=p0(o.projection,x.ra,x.dec);if(!m)continue;const h=Math.max(1.6,Math.min(7,6.2-x.mag*.9)),_=x.kind==="star"?h:Math.max(h,5);g.push({t:x,x:m[0],y:m[1],r:_})}return g},[o,n.targets,r]),c=Ge.useMemo(()=>l.filter(g=>g.t.id===t.selectedId||g.t.id===t.hoverId||g.t.kind!=="star"||g.t.mag<=1.6),[l,t.selectedId,t.hoverId]),u=Ge.useMemo(()=>{const g=m=>m.trim().split(/\s+/).pop()??m,x=[];for(const m of n.horizon.cardinalPoints){const h=p0(o.projection,m.ra,m.dec);h&&x.push({x:h[0],y:h[1],label:g(m.label)})}return x},[o,n.horizon.cardinalPoints]),d=Ge.useMemo(()=>t.annotations.map(g=>{const x=p0(o.projection,g.ra,g.dec);return x?{a:g,x:x[0],y:x[1]}:null}).filter(g=>g!==null),[o,t.annotations]),f=t.selectedId?n.targets.find(g=>g.id===t.selectedId):null,p=o.scaleRatioAt(i.radiusDeg);return I.jsxs("div",{className:"proj-view",children:[I.jsxs("div",{className:"proj-title",children:[I.jsx("strong",{children:o.label}),I.jsxs("span",{className:"proj-sub",children:["中心 ",$p(i.centerRa)," / ",qp(i.centerDec)," · 视场角半径 ",i.radiusDeg.toFixed(1),"°"]})]}),I.jsxs("svg",{width:Cn,height:Cn,viewBox:`0 0 ${Cn} ${Cn}`,className:"proj-svg",onMouseLeave:()=>t.onHover(null),children:[I.jsx("defs",{children:I.jsx("clipPath",{id:`disc-${e}`,children:I.jsx("circle",{cx:Fn,cy:Fn,r:Ka})})}),I.jsx("circle",{cx:Fn,cy:Fn,r:Ka,fill:"#0b1020",stroke:"#3b4a6b",strokeWidth:1.5}),I.jsxs("g",{clipPath:`url(#disc-${e})`,children:[I.jsx("path",{d:a.grat,fill:"none",stroke:"#27406a",strokeWidth:.6,opacity:.9}),a.rings.map(g=>I.jsx("path",{d:g.d,fill:"none",stroke:"#3d6ea5",strokeWidth:.7,strokeDasharray:"2 3"},g.rDeg)),s&&n.occlusion&&I.jsx("path",{d:a.occRegion,fill:"#ffb74d",opacity:.16}),s&&I.jsxs(I.Fragment,{children:[I.jsx("path",{d:a.below,fill:"#5a1f24",opacity:.35}),I.jsx("path",{d:a.horizon,fill:"none",stroke:"#ff5d5d",strokeWidth:1.6})]}),s&&n.occlusion&&I.jsx("path",{d:a.occLine,fill:"none",stroke:"#ffb74d",strokeWidth:1.6}),I.jsx("path",{d:a.fovPath,fill:"none",stroke:"#57e389",strokeWidth:1.4,opacity:.9}),s&&u.map((g,x)=>I.jsx("text",{x:g.x,y:g.y-5,fill:"#ff9a9a",fontSize:11,textAnchor:"middle",children:g.label},x)),l.map(({t:g,x,y:m,r:h})=>{const _=g.id===t.selectedId,v=g.id===t.hoverId,S=!g.aboveHorizon,C=g.kind==="sun"?"#ffd27d":g.kind==="moon"?"#dfe6f2":g.kind==="planet"?"#9ecbff":"#ffffff";return I.jsxs("g",{transform:`translate(${x},${m})`,className:"star-marker",onMouseEnter:()=>t.onHover(g.id),onClick:A=>{A.stopPropagation(),t.onSelect(g.id)},children:[_&&I.jsx("circle",{r:h+6,fill:"none",stroke:"#ffd54a",strokeWidth:2}),v&&!_&&I.jsx("circle",{r:h+4,fill:"none",stroke:"#9fd0ff",strokeWidth:1.2}),g.kind==="star"?I.jsx("circle",{r:h,fill:C,opacity:S&&!r?.35:g.occluded?.5:1}):g.kind==="planet"?I.jsx("rect",{x:-h,y:-h,width:h*2,height:h*2,fill:C,opacity:g.occluded?.5:1}):I.jsx("polygon",{points:`0,${-h} ${h},0 0,${h} ${-h},0`,fill:C,opacity:g.occluded?.5:1})]},g.id)}),c.map(({t:g,x,y:m})=>I.jsx("text",{x:x+7,y:m+3,fill:"#cfe0ff",fontSize:10.5,className:"proj-label",children:g.name},`l-${g.id}`)),d.map(({a:g,x,y:m})=>I.jsxs("g",{transform:`translate(${x},${m})`,children:[I.jsx("circle",{r:5,fill:"none",stroke:g.color,strokeWidth:1.6}),I.jsx("text",{x:8,y:4,fill:g.color,fontSize:11,children:g.text})]},g.uuid)),I.jsxs("g",{stroke:"#8aa0c8",strokeWidth:1,children:[I.jsx("line",{x1:Fn-7,y1:Fn,x2:Fn+7,y2:Fn}),I.jsx("line",{x1:Fn,y1:Fn-7,x2:Fn,y2:Fn+7})]})]})]}),I.jsxs("div",{className:"proj-foot",children:[I.jsxs("span",{children:["中心比例尺 ≈ ",o.pxPerDegreeAtCenter.toFixed(1)," px/°",e==="stereographic"?`（立体投影边缘径向外放 ×${p.toFixed(2)}，图上距离≠角距）`:"（等距方位：径向 r 与角距成正比，同心圆为等角距参考环）"]}),f&&I.jsxs("span",{className:"proj-foot-sel",children:[f.name,"：距视场中心 ",f.sepFromCenter.toFixed(2),"°（球面角距）· 高度 ",f.alt.toFixed(1),"°",f.occlusionAlt!==null&&` · 遮挡线 ${f.occlusionAlt.toFixed(1)}°${f.occluded?"（几何地平以上但被山体遮挡）":""}`]})]})]})}const Cu=[{id:"beijing",name:"北京（古观象台附近）",latitude:39.9042,longitude:116.4074,height:50},{id:"shanghai",name:"上海（佘山天文台）",latitude:31.0989,longitude:121.1958,height:100},{id:"lhasa",name:"拉萨",latitude:29.652,longitude:91.1721,height:3650},{id:"sanya",name:"三亚",latitude:18.2528,longitude:109.512,height:10},{id:"mohe",name:"漠河",latitude:53.4722,longitude:122.3464,height:400},{id:"london",name:"伦敦（格林威治）",latitude:51.4769,longitude:-5e-4,height:50},{id:"sidingspring",name:"赛丁泉天文台（澳大利亚）",latitude:-31.2733,longitude:149.0644,height:1165},{id:"custom",name:"自定义位置",latitude:0,longitude:0,height:0}],Fc=[{id:"polar",label:"极区天区",description:"以北天极为中心的视场，检查极区在球面与两种方位投影下的表现；含北极星、小熊座、仙后座。",siteId:"beijing",timeUtcIso:"2026-09-30T13:00:00.000Z",centerRaDeg:0,centerDecDeg:90,fovRadiusDeg:35,magLimit:5,horizonClip:!1,suggestSelectId:"polaris"},{id:"zero",label:"赤经跨零点",description:"视场中心 RA 358°，边界跨过 0h 线（飞马座四边形 / 仙女座 / 仙后座），不应出现横贯整图的连线。",siteId:"beijing",timeUtcIso:"2026-09-30T13:00:00.000Z",centerRaDeg:358,centerDecDeg:30,fovRadiusDeg:30,magLimit:5,horizonClip:!1,suggestSelectId:"alpheratz"},{id:"horizon",label:"地平线附近目标",description:"北京 2026-09-30 21:00（UTC+8），大角星位于正西偏北、地平高度约 0.1°；开启地平线裁切可见取舍。",siteId:"beijing",timeUtcIso:"2026-09-30T13:00:00.000Z",centerRaDeg:213.9,centerDecDeg:19.2,fovRadiusDeg:30,magLimit:4.5,horizonClip:!1,suggestSelectId:"arcturus"}],eA=[{az:350,alt:12},{az:15,alt:18},{az:45,alt:9},{az:90,alt:4},{az:150,alt:1},{az:210,alt:0},{az:270,alt:6},{az:320,alt:9}];function tA(t){var u,d;const[e,n]=Ge.useState(""),[i,r]=Ge.useState(""),[s,o]=Ge.useState("#ffd54a"),a=f=>t.onChangeFov({...t.fov,centerRa:(f%360+360)%360}),l=f=>t.onChangeFov({...t.fov,centerDec:Math.max(-90,Math.min(90,f))}),c=f=>t.onChangeFov({...t.fov,radiusDeg:Math.max(1,Math.min(90,f))});return I.jsxs("div",{className:"controls",children:[I.jsxs("section",{className:"ctl-block",children:[I.jsx("h3",{children:"演示场景"}),I.jsx("div",{className:"btn-row",children:Fc.map(f=>I.jsx("button",{className:"btn scenario",onClick:()=>t.onApplyScenario(f.id),title:f.description,children:f.label},f.id))}),I.jsx("p",{className:"hint",title:(u=Fc.find(f=>f.id==="horizon"))==null?void 0:u.description,children:(d=Fc.find(f=>f.id==="horizon"))==null?void 0:d.description})]}),I.jsxs("section",{className:"ctl-block",children:[I.jsx("h3",{children:"观测位置与时间"}),I.jsxs("label",{children:["位置",I.jsx("select",{value:t.site.id,onChange:f=>{const p=Cu.find(g=>g.id===f.target.value);t.onChangeSite({...p})},children:Cu.map(f=>I.jsx("option",{value:f.id,children:f.name},f.id))})]}),t.site.id==="custom"&&I.jsxs("div",{className:"num-row",children:[I.jsxs("label",{children:["纬度°",I.jsx("input",{type:"number",value:t.site.latitude,step:1e-4,onChange:f=>t.onChangeSite({...t.site,latitude:Number(f.target.value)})})]}),I.jsxs("label",{children:["经度°",I.jsx("input",{type:"number",value:t.site.longitude,step:1e-4,onChange:f=>t.onChangeSite({...t.site,longitude:Number(f.target.value)})})]})]}),I.jsxs("label",{children:["时间（UTC，非本地时区）",I.jsx("input",{type:"datetime-local",step:1,value:t.timeUtcIso.slice(0,19),onChange:f=>t.onChangeTime(f.target.value+"Z")})]}),I.jsx("p",{className:"hint",children:"北京时间 = UTC + 8 小时。默认 2026-09-30 13:00 UTC（北京 21:00，大角星近地平）。"})]}),t.site.id==="custom"&&I.jsxs("section",{className:"ctl-block",children:[I.jsx("h3",{children:"站点遮挡轮廓（人工输入，非地形实测）"}),I.jsx("p",{className:"hint",children:"山地台站的真实地平线并非处处 0°：按方位角录入少量遮挡控制点，系统按方位环形线性插值 （0° 与 360° 同值、跨零点连续）。仅存本地 IndexedDB，换台站后自动重算遮挡状态。"}),t.horizonProfile.map((f,p)=>I.jsxs("div",{className:"profile-row",children:[I.jsxs("label",{children:["方位°",I.jsx("input",{type:"number",min:0,max:360,step:1,value:Number.isFinite(f.az)?f.az:"",onChange:g=>{const x=t.horizonProfile.slice();x[p]={...f,az:Number(g.target.value)},t.onChangeProfile(x)}})]}),I.jsxs("label",{children:["遮挡高度°",I.jsx("input",{type:"number",min:-90,max:90,step:.5,value:Number.isFinite(f.alt)?f.alt:"",onChange:g=>{const x=t.horizonProfile.slice();x[p]={...f,alt:Number(g.target.value)},t.onChangeProfile(x)}})]}),I.jsx("button",{className:"x-btn",title:"删除该控制点",onClick:()=>t.onChangeProfile(t.horizonProfile.filter((g,x)=>x!==p)),children:"×"})]},p)),I.jsxs("div",{className:"btn-row",children:[I.jsx("button",{className:"btn",onClick:()=>{const f=t.horizonProfile[t.horizonProfile.length-1],p=f?(Qu(f.az)+30)%360:0;t.onChangeProfile([...t.horizonProfile,{az:p,alt:5}])},children:"添加控制点"}),I.jsx("button",{className:"btn",onClick:()=>t.onChangeProfile(eA.map(f=>({...f}))),children:"填入山体示例"}),I.jsx("button",{className:"btn",disabled:t.horizonProfile.length===0,onClick:()=>t.onChangeProfile([]),children:"清空轮廓"})]}),t.horizonProfile.length>0&&I.jsx(nA,{points:t.horizonProfile})]}),I.jsxs("section",{className:"ctl-block",children:[I.jsx("h3",{children:"视场（J2000 赤道坐标）"}),I.jsxs("div",{className:"num-row",children:[I.jsxs("label",{children:["中心赤经°",I.jsx("input",{type:"number",value:m0(t.fov.centerRa),min:0,max:360,step:.1,onChange:f=>a(Number(f.target.value))})]}),I.jsxs("label",{children:["中心赤纬°",I.jsx("input",{type:"number",value:m0(t.fov.centerDec),min:-90,max:90,step:.1,onChange:f=>l(Number(f.target.value))})]}),I.jsxs("label",{children:["角半径°",I.jsx("input",{type:"number",value:m0(t.fov.radiusDeg),min:1,max:90,step:.5,onChange:f=>c(Number(f.target.value))})]})]}),I.jsx("p",{className:"hint",children:"视场边界是围绕中心的球面小圆；中心在极点时赤经自动失效。"}),I.jsxs("div",{className:"save-row",children:[I.jsx("input",{placeholder:"命名当前视场…",value:e,onChange:f=>n(f.target.value)}),I.jsx("button",{className:"btn",disabled:!e.trim(),onClick:()=>{t.onSaveFov(e.trim()),n("")},children:"存视场"})]}),t.savedFovs.length>0&&I.jsx("ul",{className:"store-list",children:t.savedFovs.slice(0,6).map(f=>I.jsxs("li",{children:[I.jsx("button",{className:"link-btn",title:`RA ${f.fov.centerRa.toFixed(1)}° Dec ${f.fov.centerDec.toFixed(1)}° r ${f.fov.radiusDeg}°`,onClick:()=>t.onLoadFov(f),children:f.name}),I.jsx("button",{className:"x-btn",onClick:()=>t.onDeleteFov(f.uuid),children:"×"})]},f.uuid))})]}),I.jsxs("section",{className:"ctl-block",children:[I.jsx("h3",{children:"筛选（两条相互独立）"}),I.jsxs("label",{className:"range-label",children:["星等上限（仅恒星）：≤ ",t.magLimit.toFixed(1),I.jsx("input",{type:"range",min:-2,max:6,step:.1,value:t.magLimit,onChange:f=>t.onChangeMag(Number(f.target.value))})]}),I.jsxs("label",{className:"check",children:[I.jsx("input",{type:"checkbox",checked:t.horizonClip,onChange:f=>t.onToggleHorizonClip(f.target.checked)}),"地平线裁切：仅显示地平以上目标"]}),I.jsxs("label",{className:"check",children:[I.jsx("input",{type:"checkbox",checked:t.showHorizon,onChange:f=>t.onToggleShowHorizon(f.target.checked)}),"显示地平圈与地平以下区域"]}),I.jsxs("label",{className:"check",children:[I.jsx("input",{type:"checkbox",checked:t.showGraticule,onChange:f=>t.onToggleGraticule(f.target.checked)}),"显示 J2000 经纬网"]})]}),I.jsxs("section",{className:"ctl-block",children:[I.jsx("h3",{children:"批注（绑定天球坐标，存 IndexedDB）"}),I.jsxs("div",{className:"save-row",children:[I.jsx("input",{type:"color",value:s,onChange:f=>o(f.target.value)}),I.jsx("input",{placeholder:"批注文字（锚定当前选中目标）",value:i,onChange:f=>r(f.target.value)}),I.jsx("button",{className:"btn",disabled:!i.trim(),onClick:()=>{t.onAddAnnotation(i.trim(),s),r("")},children:"添加"})]}),t.annotations.length>0&&I.jsx("ul",{className:"store-list",children:t.annotations.map(f=>I.jsxs("li",{children:[I.jsx("span",{className:"dot",style:{background:f.color}}),I.jsx("button",{className:"link-btn",onClick:()=>t.onChangeFov({centerRa:f.ra,centerDec:f.dec,radiusDeg:Math.max(10,t.fov.radiusDeg)}),title:"把视场中心移到批注位置",children:f.text}),I.jsx("button",{className:"x-btn",onClick:()=>t.onDeleteAnnotation(f.uuid),children:"×"})]},f.uuid))})]})]})}function m0(t){return Math.round(t*1e3)/1e3}function nA({points:t}){const a=t.map(p=>p.alt).filter(Number.isFinite),l=Math.max(10,...a)*1.12,c=Math.min(0,...a),u=p=>6+Qu(p)/360*240,d=p=>6+(1-(p-c)/(l-c||1))*53,f=[];for(let p=0;p<=360;p+=3)f.push(`${u(p).toFixed(1)},${d(vu(t,p)).toFixed(1)}`);return I.jsxs("svg",{viewBox:"0 0 252 72",className:"profile-preview",children:[I.jsx("line",{x1:6,x2:246,y1:d(0),y2:d(0),stroke:"#ff5d5d",strokeWidth:1}),I.jsx("polyline",{points:f.join(" "),fill:"none",stroke:"#ffb74d",strokeWidth:1.6}),t.map((p,g)=>Number.isFinite(p.az)&&Number.isFinite(p.alt)?I.jsx("circle",{cx:u(p.az),cy:d(p.alt),r:2.4,fill:"#ffb74d"},g):null),I.jsx("text",{x:6,y:70,fontSize:8,fill:"#93a5c8",children:"0° 北"}),I.jsx("text",{x:252/2,y:70,fontSize:8,fill:"#93a5c8",textAnchor:"middle",children:"180° 南"}),I.jsx("text",{x:246,y:70,fontSize:8,fill:"#93a5c8",textAnchor:"end",children:"360°（=0°，连续）"})]})}const iA={star:"恒星（星表 J2000.0）",sun:"太阳（动态视位置）",moon:"月球（动态视位置）",planet:"行星（动态视位置）"};function rA({target:t,centerAlt:e,centerAz:n,gmstHours:i,julianDay:r}){return I.jsxs("div",{className:"info-panel",children:[t?I.jsxs(I.Fragment,{children:[I.jsxs("div",{className:"info-head",children:[I.jsx("span",{className:"info-name",children:t.name}),I.jsx("span",{className:"info-desig",children:t.designation}),I.jsx("span",{className:"info-kind",children:iA[t.kind]})]}),I.jsxs("div",{className:"info-grid",children:[I.jsxs("div",{children:[I.jsx("label",{children:"赤经 RA (J2000)"}),I.jsx("strong",{children:$p(t.ra)}),I.jsxs("span",{className:"sub",children:[t.ra.toFixed(4),"°"]})]}),I.jsxs("div",{children:[I.jsx("label",{children:"赤纬 Dec (J2000)"}),I.jsx("strong",{children:qp(t.dec)}),I.jsxs("span",{className:"sub",children:[t.dec.toFixed(4),"°"]})]}),I.jsxs("div",{children:[I.jsx("label",{children:"方位角 A（北=0 顺时针）"}),I.jsxs("strong",{children:[t.az.toFixed(2),"°"]}),I.jsxs("span",{className:"sub",children:[w1(t.az),"方"]})]}),I.jsxs("div",{children:[I.jsx("label",{children:"地平高度 h（几何地平 = 0°）"}),I.jsxs("strong",{className:t.alt<0?"down":t.occluded?"occ":"up",children:[t.alt.toFixed(2),"°"]}),I.jsx("span",{className:"sub",children:t.alt<0?"几何地平以下":t.occluded?"几何地平以上 · 被山体遮挡":"几何地平以上"})]}),t.occlusionAlt!==null&&I.jsxs("div",{children:[I.jsx("label",{children:"站点遮挡线高度（人工轮廓）"}),I.jsxs("strong",{className:t.occluded?"occ":"up",children:[t.occlusionAlt.toFixed(2),"°"]}),I.jsx("span",{className:"sub",children:t.alt<0?"目标在几何地平以下":t.occluded?`目标低于遮挡线 ${(t.occlusionAlt-t.alt).toFixed(2)}°`:"目标高于遮挡线，未被遮挡"})]}),I.jsxs("div",{children:[I.jsx("label",{children:"视星等"}),I.jsx("strong",{children:t.mag.toFixed(2)}),t.kind==="moon"&&t.phaseFraction!==void 0&&I.jsxs("span",{className:"sub",children:["月相照亮 ",(t.phaseFraction*100).toFixed(0),"%"]})]}),I.jsxs("div",{children:[I.jsx("label",{children:"距视场中心（球面角距）"}),I.jsxs("strong",{children:[t.sepFromCenter.toFixed(3),"°"]}),I.jsx("span",{className:"sub",children:"haversine 计算，非图上像素距离"})]})]})]}):I.jsxs("div",{className:"info-empty",children:["点击球面视图或右侧任一投影图中的星点，即可在三种视图中定位同一目标。",I.jsxs("ul",{children:[I.jsx("li",{children:"圆形＝恒星，方形＝行星，菱形＝太阳/月球"}),I.jsx("li",{children:"绿色圆＝视场边界，红色线＝几何地平线，蓝色虚线＝等角距参考环"}),I.jsx("li",{children:"琥珀色线＝站点遮挡轮廓（人工输入，非地形实测）；仅配置了轮廓的自定义台站显示"})]})]}),I.jsxs("div",{className:"info-meta",children:["视场中心：高度 ",e.toFixed(2),"°，方位 ",n.toFixed(2),"°（",w1(n),"）· GMST ",i.toFixed(4)," h · JD(TT) ",r.toFixed(4)]})]})}/**
    @preserve

    Astronomy library for JavaScript (browser and Node.js).
    https://github.com/cosinekitty/astronomy

    MIT License

    Copyright (c) 2019-2023 Don Cross <cosinekitty@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*//**
 * @fileoverview Astronomy calculation library for browser scripting and Node.js.
 * @author Don Cross <cosinekitty@gmail.com>
 * @license MIT
 */const F3=173.1446326846693,Yr=14959787069098932e-8,It=.017453292519943295,gs=57.29577951308232,sA=3.819718634205488,oA=365.24217,Q1=new Date("2000-01-01T12:00:00Z"),bi=2*Math.PI,or=3600*(180/Math.PI),ro=484813681109536e-20,z3=180*60*60,aA=2*z3,ev=7292115e-11,lA=z3/Math.PI,cA=-.17-5*Math.log10(lA),wh=.996647180302104,uA=wh*wh,Th=6378.1366,fA=Th/Yr,O3=81.30056,Qp=.0002959122082855911,Ah=2825345909524226e-22,Rh=8459715185680659e-23,Ch=1292024916781969e-23,Ph=1524358900784276e-23;function Pu(t){if(t!==!0&&t!==!1)throw console.trace(),`Value is not boolean: ${t}`;return t}function jn(t){if(!Number.isFinite(t))throw console.trace(),`Value is not a finite number: ${t}`;return t}function Vs(t){return t-Math.floor(t)}function dA(t,e){const n=t.x*t.x+t.y*t.y+t.z*t.z;if(Math.abs(n)<1e-8)throw"AngleBetween: first vector is too short.";const i=e.x*e.x+e.y*e.y+e.z*e.z;if(Math.abs(i)<1e-8)throw"AngleBetween: second vector is too short.";const r=(t.x*e.x+t.y*e.y+t.z*e.z)/Math.sqrt(n*i);return r<=-1?180:r>=1?0:gs*Math.acos(r)}var we;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(we||(we={}));const hA=[we.Star1,we.Star2,we.Star3,we.Star4,we.Star5,we.Star6,we.Star7,we.Star8],pA=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function mA(t){const e=hA.indexOf(t);return e>=0?pA[e]:null}function em(t){const e=mA(t);return e&&e.dist>0?e:null}var Ln;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(Ln||(Ln={}));const ki={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function gA(t){var e,n,i,r,s,o,a;const l=2e3+(t-14)/oA;return l<-500?(e=(l-1820)/100,-20+32*e*e):l<500?(e=l/100,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,10583.6-1014.41*e+33.78311*n-5.952053*i-.1798452*r+.022174192*s+.0090316521*o):l<1600?(e=(l-1e3)/100,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,1574.2-556.01*e+71.23472*n+.319781*i-.8503463*r-.005050998*s+.0083572073*o):l<1700?(e=l-1600,n=e*e,i=e*n,120-.9808*e-.01532*n+i/7129):l<1800?(e=l-1700,n=e*e,i=e*n,r=n*n,8.83+.1603*e-.0059285*n+13336e-8*i-r/1174e3):l<1860?(e=l-1800,n=e*e,i=e*n,r=n*n,s=n*i,o=i*i,a=i*r,13.72-.332447*e+.0068612*n+.0041116*i-37436e-8*r+121272e-10*s-1699e-10*o+875e-12*a):l<1900?(e=l-1860,n=e*e,i=e*n,r=n*n,s=n*i,7.62+.5737*e-.251754*n+.01680668*i-.0004473624*r+s/233174):l<1920?(e=l-1900,n=e*e,i=e*n,r=n*n,-2.79+1.494119*e-.0598939*n+.0061966*i-197e-6*r):l<1941?(e=l-1920,n=e*e,i=e*n,21.2+.84493*e-.0761*n+.0020936*i):l<1961?(e=l-1950,n=e*e,i=e*n,29.07+.407*e-n/233+i/2547):l<1986?(e=l-1975,n=e*e,i=e*n,45.45+1.067*e-n/260-i/718):l<2005?(e=l-2e3,n=e*e,i=e*n,r=n*n,s=n*i,63.86+.3345*e-.060374*n+.0017275*i+651814e-9*r+2373599e-11*s):l<2050?(e=l-2e3,62.92+.32217*e+.005589*e*e):l<2150?(e=(l-1820)/100,-20+32*e*e-.5628*(2150-l)):(e=(l-1820)/100,-20+32*e*e)}let vA=gA;function tv(t){return t+vA(t)/86400}class ss{constructor(e){if(e instanceof ss){this.date=e.date,this.ut=e.ut,this.tt=e.tt;return}const n=1e3*3600*24;if(e instanceof Date&&Number.isFinite(e.getTime())){this.date=e,this.ut=(e.getTime()-Q1.getTime())/n,this.tt=tv(this.ut);return}if(Number.isFinite(e)){this.date=new Date(Q1.getTime()+e*n),this.ut=e,this.tt=tv(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(e){let n=new ss(e);for(;;){const i=e-n.tt;if(Math.abs(i)<1e-12)return n;n=n.AddDays(i)}}toString(){return this.date.toISOString()}AddDays(e){return new ss(this.ut+e)}}function yn(t){return t instanceof ss?t:new ss(t)}function _A(t){function e(f){return f%aA*ro}const n=t.tt/36525,i=e(128710479305e-5+n*1295965810481e-4),r=e(335779.526232+n*17395272628478e-4),s=e(107226070369e-5+n*1602961601209e-3),o=e(450160.398036-n*69628905431e-4);let a=Math.sin(o),l=Math.cos(o),c=(-172064161-174666*n)*a+33386*l,u=(92052331+9086*n)*l+15377*a,d=2*(r-s+o);return a=Math.sin(d),l=Math.cos(d),c+=(-13170906-1675*n)*a-13696*l,u+=(5730336-3015*n)*l-4587*a,d=2*(r+o),a=Math.sin(d),l=Math.cos(d),c+=(-2276413-234*n)*a+2796*l,u+=(978459-485*n)*l+1374*a,d=2*o,a=Math.sin(d),l=Math.cos(d),c+=(2074554+207*n)*a-698*l,u+=(-897492+470*n)*l-291*a,a=Math.sin(i),l=Math.cos(i),c+=(1475877-3633*n)*a+11817*l,u+=(73871-184*n)*l-1924*a,{dpsi:-135e-6+c*1e-7,deps:388e-6+u*1e-7}}function k3(t){var e=t.tt/36525,n=((((-434e-10*e-576e-9)*e+.0020034)*e-1831e-7)*e-46.836769)*e+84381.406;return n/3600}var cc;function tm(t){if(!cc||Math.abs(cc.tt-t.tt)>1e-6){const e=_A(t),n=k3(t),i=n+e.deps/3600;cc={tt:t.tt,dpsi:e.dpsi,deps:e.deps,ee:e.dpsi*Math.cos(n*It)/15,mobl:n,tobl:i}}return cc}function xA(t,e){const n=t*It,i=Math.cos(n),r=Math.sin(n);return[e[0],e[1]*i-e[2]*r,e[1]*r+e[2]*i]}function yA(t,e){return xA(k3(t),e)}function SA(t){const e=t.tt/36525;function n(de,b){const $e=[];let be;for(be=0;be<=b-de;++be)$e.push(0);return{min:de,array:$e}}function i(de,b,$e,be){const Ie=[];for(let Le=0;Le<=b-de;++Le)Ie.push(n($e,be));return{min:de,array:Ie}}function r(de,b,$e){const be=de.array[b-de.min];return be.array[$e-be.min]}function s(de,b,$e,be){const Ie=de.array[b-de.min];Ie.array[$e-Ie.min]=be}let o,a,l,c,u,d,f,p,g,x,m,h,_,v,S,C,A,T,P,W,y,M,H,N=i(-6,6,1,4),j=i(-6,6,1,4);function D(de,b){return r(N,de,b)}function B(de,b){return r(j,de,b)}function Y(de,b,$e){return s(N,de,b,$e)}function L(de,b,$e){return s(j,de,b,$e)}function Z(de,b,$e,be,Ie){Ie(de*$e-b*be,b*$e+de*be)}function $(de){return Math.sin(bi*de)}f=e*e,g=0,H=0,m=0,h=3422.7;var ne=$(.19833+.05611*e),xe=$(.27869+.04508*e),De=$(.16827-.36903*e),q=$(.34734-5.37261*e),ee=$(.10498-5.37899*e),le=$(.42681-.41855*e),ue=$(.14943-5.37511*e);for(T=.84*ne+.31*xe+14.27*De+7.26*q+.28*ee+.24*le,P=2.94*ne+.31*xe+14.27*De+9.34*q+1.12*ee+.83*le,W=-6.4*ne-1.89*le,y=.21*ne+.31*xe+14.27*De-88.7*q-15.3*ee+.24*le-1.86*ue,M=T-W,p=-3332e-9*$(.59734-5.37261*e)-539e-9*$(.35498-5.37899*e)-64e-9*$(.39943-5.37511*e),_=bi*Vs(.60643382+1336.85522467*e-313e-8*f)+T/or,v=bi*Vs(.37489701+1325.55240982*e+2565e-8*f)+P/or,S=bi*Vs(.99312619+99.99735956*e-44e-8*f)+W/or,C=bi*Vs(.25909118+1342.2278298*e-892e-8*f)+y/or,A=bi*Vs(.82736186+1236.85308708*e-397e-8*f)+M/or,u=1;u<=4;++u){switch(u){case 1:l=v,a=4,c=1.000002208;break;case 2:l=S,a=3,c=.997504612-.002495388*e;break;case 3:l=C,a=4,c=1.000002708+139.978*p;break;case 4:l=A,a=6,c=1;break;default:throw`Internal error: I = ${u}`}for(Y(0,u,1),Y(1,u,Math.cos(l)*c),L(0,u,0),L(1,u,Math.sin(l)*c),d=2;d<=a;++d)Z(D(d-1,u),B(d-1,u),D(1,u),B(1,u),(de,b)=>(Y(d,u,de),L(d,u,b)));for(d=1;d<=a;++d)Y(-d,u,D(d,u)),L(-d,u,-B(d,u))}function se(de,b,$e,be){for(var Ie={x:1,y:0},Le=[0,de,b,$e,be],qe=1;qe<=4;++qe)Le[qe]!==0&&Z(Ie.x,Ie.y,D(Le[qe],qe),B(Le[qe],qe),(Ne,R)=>(Ie.x=Ne,Ie.y=R));return Ie}function U(de,b,$e,be,Ie,Le,qe,Ne){var R=se(Ie,Le,qe,Ne);g+=de*R.y,H+=b*R.y,m+=$e*R.x,h+=be*R.x}U(13.902,14.06,-.001,.2607,0,0,0,4),U(.403,-4.01,.394,.0023,0,0,0,3),U(2369.912,2373.36,.601,28.2333,0,0,0,2),U(-125.154,-112.79,-.725,-.9781,0,0,0,1),U(1.979,6.98,-.445,.0433,1,0,0,4),U(191.953,192.72,.029,3.0861,1,0,0,2),U(-8.466,-13.51,.455,-.1093,1,0,0,1),U(22639.5,22609.07,.079,186.5398,1,0,0,0),U(18.609,3.59,-.094,.0118,1,0,0,-1),U(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),U(3.215,5.44,.192,-.0386,1,0,0,-3),U(-38.428,-38.64,.001,.6008,1,0,0,-4),U(-.393,-1.43,-.092,.0086,1,0,0,-6),U(-.289,-1.59,.123,-.0053,0,1,0,4),U(-24.42,-25.1,.04,-.3,0,1,0,2),U(18.023,17.93,.007,.1494,0,1,0,1),U(-668.146,-126.98,-1.302,-.3997,0,1,0,0),U(.56,.32,-.001,-.0037,0,1,0,-1),U(-165.145,-165.06,.054,1.9178,0,1,0,-2),U(-1.877,-6.46,-.416,.0339,0,1,0,-4),U(.213,1.02,-.074,.0054,2,0,0,4),U(14.387,14.78,-.017,.2833,2,0,0,2),U(-.586,-1.2,.054,-.01,2,0,0,1),U(769.016,767.96,.107,10.1657,2,0,0,0),U(1.75,2.01,-.018,.0155,2,0,0,-1),U(-211.656,-152.53,5.679,-.3039,2,0,0,-2),U(1.225,.91,-.03,-.0088,2,0,0,-3),U(-30.773,-34.07,-.308,.3722,2,0,0,-4),U(-.57,-1.4,-.074,.0109,2,0,0,-6),U(-2.921,-11.75,.787,-.0484,1,1,0,2),U(1.267,1.52,-.022,.0164,1,1,0,1),U(-109.673,-115.18,.461,-.949,1,1,0,0),U(-205.962,-182.36,2.056,1.4437,1,1,0,-2),U(.233,.36,.012,-.0025,1,1,0,-3),U(-4.391,-9.66,-.471,.0673,1,1,0,-4),U(.283,1.53,-.111,.006,1,-1,0,4),U(14.577,31.7,-1.54,.2302,1,-1,0,2),U(147.687,138.76,.679,1.1528,1,-1,0,0),U(-1.089,.55,.021,0,1,-1,0,-1),U(28.475,23.59,-.443,-.2257,1,-1,0,-2),U(-.276,-.38,-.006,-.0036,1,-1,0,-3),U(.636,2.27,.146,-.0102,1,-1,0,-4),U(-.189,-1.68,.131,-.0028,0,2,0,2),U(-7.486,-.66,-.037,-.0086,0,2,0,0),U(-8.096,-16.35,-.74,.0918,0,2,0,-2),U(-5.741,-.04,0,-9e-4,0,0,2,2),U(.255,0,0,0,0,0,2,1),U(-411.608,-.2,0,-.0124,0,0,2,0),U(.584,.84,0,.0071,0,0,2,-1),U(-55.173,-52.14,0,-.1052,0,0,2,-2),U(.254,.25,0,-.0017,0,0,2,-3),U(.025,-1.67,0,.0031,0,0,2,-4),U(1.06,2.96,-.166,.0243,3,0,0,2),U(36.124,50.64,-1.3,.6215,3,0,0,0),U(-13.193,-16.4,.258,-.1187,3,0,0,-2),U(-1.187,-.74,.042,.0074,3,0,0,-4),U(-.293,-.31,-.002,.0046,3,0,0,-6),U(-.29,-1.45,.116,-.0051,2,1,0,2),U(-7.649,-10.56,.259,-.1038,2,1,0,0),U(-8.627,-7.59,.078,-.0192,2,1,0,-2),U(-2.74,-2.54,.022,.0324,2,1,0,-4),U(1.181,3.32,-.212,.0213,2,-1,0,2),U(9.703,11.67,-.151,.1268,2,-1,0,0),U(-.352,-.37,.001,-.0028,2,-1,0,-1),U(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),U(.36,.2,-.012,-.0043,2,-1,0,-4),U(-1.167,-1.25,.008,-.0106,1,2,0,0),U(-7.412,-6.12,.117,.0484,1,2,0,-2),U(-.311,-.65,-.032,.0044,1,2,0,-4),U(.757,1.82,-.105,.0112,1,-2,0,2),U(2.58,2.32,.027,.0196,1,-2,0,0),U(2.533,2.4,-.014,-.0212,1,-2,0,-2),U(-.344,-.57,-.025,.0036,0,3,0,-2),U(-.992,-.02,0,0,1,0,2,2),U(-45.099,-.02,0,-.001,1,0,2,0),U(-.179,-9.52,0,-.0833,1,0,2,-2),U(-.301,-.33,0,.0014,1,0,2,-4),U(-6.382,-3.37,0,-.0481,1,0,-2,2),U(39.528,85.13,0,-.7136,1,0,-2,0),U(9.366,.71,0,-.0112,1,0,-2,-2),U(.202,.02,0,0,1,0,-2,-4),U(.415,.1,0,.0013,0,1,2,0),U(-2.152,-2.26,0,-.0066,0,1,2,-2),U(-1.44,-1.3,0,.0014,0,1,-2,2),U(.384,-.04,0,0,0,1,-2,-2),U(1.938,3.6,-.145,.0401,4,0,0,0),U(-.952,-1.58,.052,-.013,4,0,0,-2),U(-.551,-.94,.032,-.0097,3,1,0,0),U(-.482,-.57,.005,-.0045,3,1,0,-2),U(.681,.96,-.026,.0115,3,-1,0,0),U(-.297,-.27,.002,-9e-4,2,2,0,-2),U(.254,.21,-.003,0,2,-2,0,-2),U(-.25,-.22,.004,.0014,1,3,0,-2),U(-3.996,0,0,4e-4,2,0,2,0),U(.557,-.75,0,-.009,2,0,2,-2),U(-.459,-.38,0,-.0053,2,0,-2,2),U(-1.298,.74,0,4e-4,2,0,-2,0),U(.538,1.14,0,-.0141,2,0,-2,-2),U(.263,.02,0,0,1,1,2,0),U(.426,.07,0,-6e-4,1,1,-2,-2),U(-.304,.03,0,3e-4,1,-1,2,0),U(-.372,-.19,0,-.0027,1,-1,-2,2),U(.418,0,0,0,0,0,4,0),U(-.33,-.04,0,0,3,0,2,0);function Te(de,b,$e,be,Ie){return de*se(b,$e,be,Ie).y}x=0,x+=Te(-526.069,0,0,1,-2),x+=Te(-3.352,0,0,1,-4),x+=Te(44.297,1,0,1,-2),x+=Te(-6,1,0,1,-4),x+=Te(20.599,-1,0,1,0),x+=Te(-30.598,-1,0,1,-2),x+=Te(-24.649,-2,0,1,0),x+=Te(-2,-2,0,1,-2),x+=Te(-22.571,0,1,1,-2),x+=Te(10.985,0,-1,1,-2),g+=.82*$(.7736-62.5512*e)+.31*$(.0466-125.1025*e)+.35*$(.5785-25.1042*e)+.66*$(.4591+1335.8075*e)+.64*$(.313-91.568*e)+1.14*$(.148+1331.2898*e)+.21*$(.5918+1056.5859*e)+.44*$(.5784+1322.8595*e)+.24*$(.2275-5.7374*e)+.28*$(.2965+2.6929*e)+.33*$(.3132+6.3368*e),o=C+H/or;let ke=(1.000002708+139.978*p)*(18518.511+1.189+m)*Math.sin(o)-6.24*Math.sin(3*o)+x;return{geo_eclip_lon:bi*Vs((_+g/or)/bi),geo_eclip_lat:Math.PI/(180*3600)*ke,distance_au:or*fA/(.999953253*h)}}function B3(t,e){return[t.rot[0][0]*e[0]+t.rot[1][0]*e[1]+t.rot[2][0]*e[2],t.rot[0][1]*e[0]+t.rot[1][1]*e[1]+t.rot[2][1]*e[2],t.rot[0][2]*e[0]+t.rot[1][2]*e[1]+t.rot[2][2]*e[2]]}function bu(t,e,n){const i=H3(e,n);return B3(i,t)}function H3(t,e){const n=t.tt/36525;let i=84381.406,r=((((-951e-10*n+132851e-9)*n-.00114045)*n-1.0790069)*n+5038.481507)*n,s=((((3337e-10*n-467e-9)*n-.00772503)*n+.0512623)*n-.025754)*n+i,o=((((-56e-9*n+170663e-9)*n-.00121197)*n-2.3814292)*n+10.556403)*n;i*=ro,r*=ro,s*=ro,o*=ro;const a=Math.sin(i),l=Math.cos(i),c=Math.sin(-r),u=Math.cos(-r),d=Math.sin(-s),f=Math.cos(-s),p=Math.sin(o),g=Math.cos(o),x=g*u-c*p*f,m=g*c*l+p*f*u*l-a*p*d,h=g*c*a+p*f*u*a+l*p*d,_=-p*u-c*g*f,v=-p*c*l+g*f*u*l-a*g*d,S=-p*c*a+g*f*u*a+l*g*d,C=c*d,A=-d*u*l-a*f,T=-d*u*a+f*l;if(e===Ln.Into2000)return new Pr([[x,m,h],[_,v,S],[C,A,T]]);if(e===Ln.From2000)return new Pr([[x,_,C],[m,v,A],[h,S,T]]);throw"Invalid precess direction"}function MA(t){const e=.779057273264+.00273781191135448*t.ut,n=t.ut%1;let i=360*((e+n)%1);return i<0&&(i+=360),i}let uc;function nm(t){if(!uc||uc.tt!==t.tt){const e=t.tt/36525;let n=15*tm(t).ee;const i=MA(t);let s=((n+.014506+((((-368e-10*e-29956e-9)*e-44e-8)*e+1.3915817)*e+4612.156534)*e)/3600+i)%360/15;s<0&&(s+=24),uc={tt:t.tt,st:s}}return uc.st}function EA(t){const e=yn(t);return nm(e)}function wA(t,e){const n=t.latitude*It,i=Math.sin(n),r=Math.cos(n),s=1/Math.hypot(r,wh*i),o=uA*s,a=t.height/1e3,l=Th*s+a,c=Th*o+a,u=(15*e+t.longitude)*It,d=Math.sin(u),f=Math.cos(u);return{pos:[l*r*f/Yr,l*r*d/Yr,c*i/Yr],vel:[-ev*l*r*d*86400/Yr,ev*l*r*f*86400/Yr,0]}}function bh(t,e,n){const i=V3(e,n);return B3(i,t)}function V3(t,e){const n=tm(t),i=n.mobl*It,r=n.tobl*It,s=n.dpsi*ro,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s),f=u,p=-d*o,g=-d*a,x=d*l,m=u*o*l+a*c,h=u*a*l-o*c,_=d*c,v=u*o*c-a*l,S=u*a*c+o*l;if(e===Ln.From2000)return new Pr([[f,x,_],[p,m,v],[g,h,S]]);if(e===Ln.Into2000)return new Pr([[f,p,g],[x,m,h],[_,v,S]]);throw"Invalid precess direction"}function TA(t,e,n){return n===Ln.Into2000?bu(bh(t,e,n),e,n):bh(bu(t,e,n),e,n)}function AA(t,e){const n=nm(t),i=wA(e,n).pos;return TA(i,t,Ln.Into2000)}class Mt{constructor(e,n,i,r){this.x=e,this.y=n,this.z=i,this.t=r}Length(){return Math.hypot(this.x,this.y,this.z)}}class pr{constructor(e,n,i,r,s,o,a){this.x=e,this.y=n,this.z=i,this.vx=r,this.vy=s,this.vz=o,this.t=a}}class Ra{constructor(e,n,i){this.lat=jn(e),this.lon=jn(n),this.dist=jn(i)}}class nv{constructor(e,n,i,r){this.ra=jn(e),this.dec=jn(n),this.dist=jn(i),this.vec=r}}class Pr{constructor(e){this.rot=e}}class RA{constructor(e,n,i){this.vec=e,this.elat=jn(n),this.elon=jn(i)}}function CA(t,e){return new Mt(t[0],t[1],t[2],e)}function PA(t,e){const n=CA(t,e),i=n.x*n.x+n.y*n.y,r=Math.sqrt(i+n.z*n.z);if(i===0){if(n.z===0)throw"Indeterminate sky coordinates";return new nv(0,n.z<0?-90:90,r,n)}let s=sA*Math.atan2(n.y,n.x);s<0&&(s+=24);const o=gs*Math.atan2(t[2],Math.sqrt(i));return new nv(s,o,r,n)}function g0(t,e){const n=t*It,i=Math.cos(n),r=Math.sin(n);return[i*e[0]+r*e[1],i*e[1]-r*e[0],e[2]]}function G3(t){if(!(t instanceof W3))throw`Not an instance of the Observer class: ${t}`;if(jn(t.latitude),jn(t.longitude),jn(t.height),t.latitude<-90||t.latitude>90)throw`Latitude ${t.latitude} is out of range. Must be -90..+90.`;return t}class W3{constructor(e,n,i){this.latitude=e,this.longitude=n,this.height=i,G3(this)}}function bA(t,e,n,i,r){G3(n),Pu(i),Pu(r);const s=yn(e),o=AA(s,n),a=VA(t,s,r),l=[a.x-o[0],a.y-o[1],a.z-o[2]];return PA(l,s)}function LA(t,e,n){const i=t.x,r=t.y*e+t.z*n,s=-t.y*n+t.z*e,o=Math.hypot(i,r);let a=0;o>0&&(a=gs*Math.atan2(r,i),a<0&&(a+=360));let l=gs*Math.atan2(s,o),c=new Mt(i,r,s,t.t);return new RA(c,l,a)}function DA(t){const e=tm(t.t),n=[t.x,t.y,t.z],i=bu(n,t.t,Ln.From2000),[r,s,o]=bh(i,t.t,Ln.From2000),a=new Mt(r,s,o,t.t),l=e.tobl*It;return LA(a,Math.cos(l),Math.sin(l))}function No(t){const e=yn(t),n=SA(e),i=n.distance_au*Math.cos(n.geo_eclip_lat),r=[i*Math.cos(n.geo_eclip_lon),i*Math.sin(n.geo_eclip_lon),n.distance_au*Math.sin(n.geo_eclip_lat)],s=yA(e,r),o=bu(s,e,Ln.Into2000);return new Mt(o[0],o[1],o[2],e)}function X3(t){const e=yn(t),n=1e-5,i=e.AddDays(-n),r=e.AddDays(+n),s=No(i),o=No(r);return new pr((s.x+o.x)/2,(s.y+o.y)/2,(s.z+o.z)/2,(o.x-s.x)/(2*n),(o.y-s.y)/(2*n),(o.z-s.z)/(2*n),e)}function IA(t){const e=yn(t),n=X3(e),i=1+O3;return new pr(n.x/i,n.y/i,n.z/i,n.vx/i,n.vy/i,n.vz/i,e)}function go(t,e,n){let i=1,r=0;for(let s of t){let o=0;for(let[l,c,u]of s)o+=l*Math.cos(c+e*u);let a=i*o;n&&(a%=bi),r+=a,i*=e}return r}function v0(t,e){let n=1,i=0,r=0,s=0;for(let o of t){let a=0,l=0;for(let[c,u,d]of o){let f=u+e*d;a+=c*d*Math.sin(f),s>0&&(l+=c*Math.cos(f))}r+=s*i*l-n*a,i=n,n*=e,++s}return r}const ma=365250,Lh=0,Dh=1,Ih=2;function Nh(t){return new Zt(t[0]+44036e-11*t[1]-190919e-12*t[2],-479966e-12*t[0]+.917482137087*t[1]-.397776982902*t[2],.397776982902*t[1]+.917482137087*t[2])}function j3(t,e,n){const i=n*Math.cos(e),r=Math.cos(t),s=Math.sin(t);return[i*r,i*s,n*Math.sin(e)]}function Ca(t,e){const n=e.tt/ma,i=go(t[Lh],n,!0),r=go(t[Dh],n,!1),s=go(t[Ih],n,!1),o=j3(i,r,s);return Nh(o).ToAstroVector(e)}function Uh(t,e){const n=e/ma,i=go(t[Lh],n,!0),r=go(t[Dh],n,!1),s=go(t[Ih],n,!1),o=v0(t[Lh],n),a=v0(t[Dh],n),l=v0(t[Ih],n),c=Math.cos(i),u=Math.sin(i),d=Math.cos(r),f=Math.sin(r),p=+(l*d*c)-s*f*c*a-s*d*u*o,g=+(l*d*u)-s*f*u*a+s*d*c*o,x=+(l*f)+s*d*a,m=j3(i,r,s),h=[p/ma,g/ma,x/ma],_=Nh(m),v=Nh(h);return new vs(e,_,v)}function fc(t,e,n,i){const r=i/(i+Qp),s=Ca(ki[n],e);t.x+=r*s.x,t.y+=r*s.y,t.z+=r*s.z}function NA(t){const e=new Mt(0,0,0,t);return fc(e,t,we.Jupiter,Ah),fc(e,t,we.Saturn,Rh),fc(e,t,we.Uranus,Ch),fc(e,t,we.Neptune,Ph),e}const Fh=51,UA=29200,so=146,Li=201,ns=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class Zt{constructor(e,n,i){this.x=e,this.y=n,this.z=i}clone(){return new Zt(this.x,this.y,this.z)}ToAstroVector(e){return new Mt(this.x,this.y,this.z,e)}static zero(){return new Zt(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(e){return new Zt(this.x+e.x,this.y+e.y,this.z+e.z)}sub(e){return new Zt(this.x-e.x,this.y-e.y,this.z-e.z)}incr(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}decr(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}mul(e){return new Zt(e*this.x,e*this.y,e*this.z)}div(e){return new Zt(this.x/e,this.y/e,this.z/e)}mean(e){return new Zt((this.x+e.x)/2,(this.y+e.y)/2,(this.z+e.z)/2)}neg(){return new Zt(-this.x,-this.y,-this.z)}}class vs{constructor(e,n,i){this.tt=e,this.r=n,this.v=i}clone(){return new vs(this.tt,this.r,this.v)}sub(e){return new vs(this.tt,this.r.sub(e.r),this.v.sub(e.v))}}function FA(t){let[e,[n,i,r],[s,o,a]]=t;return new vs(e,new Zt(n,i,r),new Zt(s,o,a))}function dc(t,e,n,i){const r=i/(i+Qp),s=Uh(ki[n],e);return t.r.incr(s.r.mul(r)),t.v.incr(s.v.mul(r)),s}function ia(t,e,n){const i=n.sub(t),r=i.quadrature();return i.mul(e/(r*Math.sqrt(r)))}class ef{constructor(e){let n=new vs(e,new Zt(0,0,0),new Zt(0,0,0));this.Jupiter=dc(n,e,we.Jupiter,Ah),this.Saturn=dc(n,e,we.Saturn,Rh),this.Uranus=dc(n,e,we.Uranus,Ch),this.Neptune=dc(n,e,we.Neptune,Ph),this.Jupiter.r.decr(n.r),this.Jupiter.v.decr(n.v),this.Saturn.r.decr(n.r),this.Saturn.v.decr(n.v),this.Uranus.r.decr(n.r),this.Uranus.v.decr(n.v),this.Neptune.r.decr(n.r),this.Neptune.v.decr(n.v),this.Sun=new vs(e,n.r.mul(-1),n.v.mul(-1))}Acceleration(e){let n=ia(e,Qp,this.Sun.r);return n.incr(ia(e,Ah,this.Jupiter.r)),n.incr(ia(e,Rh,this.Saturn.r)),n.incr(ia(e,Ch,this.Uranus.r)),n.incr(ia(e,Ph,this.Neptune.r)),n}}class tf{constructor(e,n,i,r){this.tt=e,this.r=n,this.v=i,this.a=r}clone(){return new tf(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class $3{constructor(e,n){this.bary=e,this.grav=n}}function Lu(t,e,n,i){return new Zt(e.x+t*(n.x+t*i.x/2),e.y+t*(n.y+t*i.y/2),e.z+t*(n.z+t*i.z/2))}function iv(t,e,n){return new Zt(e.x+t*n.x,e.y+t*n.y,e.z+t*n.z)}function zh(t,e){const n=t-e.tt,i=new ef(t),r=Lu(n,e.r,e.v,e.a),s=i.Acceleration(r).mean(e.a),o=Lu(n,e.r,e.v,s),a=e.v.add(s.mul(n)),l=i.Acceleration(o),c=new tf(t,o,a,l);return new $3(i,c)}const zA=[];function q3(t,e){const n=Math.floor(t);return n<0?0:n>=e?e-1:n}function Oh(t){const e=FA(t),n=new ef(e.tt),i=e.r.add(n.Sun.r),r=e.v.add(n.Sun.v),s=n.Acceleration(i),o=new tf(e.tt,i,r,s);return new $3(n,o)}function OA(t,e){const n=ns[0][0];if(e<n||e>ns[Fh-1][0])return null;const i=q3((e-n)/UA,Fh-1);if(!t[i]){const s=t[i]=[];s[0]=Oh(ns[i]).grav,s[Li-1]=Oh(ns[i+1]).grav;let o,a=s[0].tt;for(o=1;o<Li-1;++o)s[o]=zh(a+=so,s[o-1]).grav;a=s[Li-1].tt;var r=[];for(r[Li-1]=s[Li-1],o=Li-2;o>0;--o)r[o]=zh(a-=so,r[o+1]).grav;for(o=Li-2;o>0;--o){const l=o/(Li-1);s[o].r=s[o].r.mul(1-l).add(r[o].r.mul(l)),s[o].v=s[o].v.mul(1-l).add(r[o].v.mul(l)),s[o].a=s[o].a.mul(1-l).add(r[o].a.mul(l))}}return t[i]}function rv(t,e,n){let i=Oh(t);const r=Math.ceil((e-i.grav.tt)/n);for(let s=0;s<r;++s)i=zh(s+1===r?e:i.grav.tt+n,i.grav);return i}function Y3(t,e){let n,i,r;const s=OA(zA,t.tt);if(s){const o=q3((t.tt-s[0].tt)/so,Li-1),a=s[o],l=s[o+1],c=a.a.mean(l.a),u=Lu(t.tt-a.tt,a.r,a.v,c),d=iv(t.tt-a.tt,a.v,c),f=Lu(t.tt-l.tt,l.r,l.v,c),p=iv(t.tt-l.tt,l.v,c),g=(t.tt-a.tt)/so;n=u.mul(1-g).add(f.mul(g)),i=d.mul(1-g).add(p.mul(g))}else{let o;t.tt<ns[0][0]?o=rv(ns[0],t.tt,-so):o=rv(ns[Fh-1],t.tt,+so),n=o.grav.r,i=o.grav.v,r=o.bary}return r||(r=new ef(t.tt)),n=n.sub(r.Sun.r),i=i.sub(r.Sun.v),new pr(n.x,n.y,n.z,i.x,i.y,i.z,t)}function Za(t,e){var n=yn(e);if(t in ki)return Ca(ki[t],n);if(t===we.Pluto){const o=Y3(n);return new Mt(o.x,o.y,o.z,n)}if(t===we.Sun)return new Mt(0,0,0,n);if(t===we.Moon){var i=Ca(ki.Earth,n),r=No(n);return new Mt(i.x+r.x,i.y+r.y,i.z+r.z,n)}if(t===we.EMB){const o=Ca(ki.Earth,n),a=No(n),l=1+O3;return new Mt(o.x+a.x/l,o.y+a.y/l,o.z+a.z/l,n)}if(t===we.SSB)return NA(n);const s=em(t);if(s){const o=new Ra(s.dec,15*s.ra,s.dist);return zc(o,n)}throw`HelioVector: Unknown body "${t}"`}function kA(t,e){let n=e,i=0;for(let r=0;r<10;++r){const s=t(n),o=s.Length()/F3;if(o>1)throw"Object is too distant for light-travel solver.";const a=e.AddDays(-o);if(i=Math.abs(a.tt-n.tt),i<1e-9)return s;n=a}throw`Light-travel time solver did not converge: dt = ${i}`}class BA{constructor(e,n,i,r){this.observerBody=e,this.targetBody=n,this.aberration=i,this.observerPos=r}Position(e){this.aberration&&(this.observerPos=Za(this.observerBody,e));const n=Za(this.targetBody,e);return new Mt(n.x-this.observerPos.x,n.y-this.observerPos.y,n.z-this.observerPos.z,e)}}function HA(t,e,n,i){Pu(i);const r=yn(t);if(em(n)){const a=Za(n,r);{const l=WA(e,r),c=new Mt(a.x-l.x,a.y-l.y,a.z-l.z,r),u=F3/c.Length();return new Mt(c.x+l.vx/u,c.y+l.vy/u,c.z+l.vz/u,r)}}let s;s=new Mt(0,0,0,r);const o=new BA(e,n,i,s);return kA(a=>o.Position(a),r)}function VA(t,e,n){Pu(n);const i=yn(e);switch(t){case we.Earth:return new Mt(0,0,0,i);case we.Moon:return No(i);default:const r=HA(i,we.Earth,t,n);return r.t=i,r}}function GA(t,e){return new pr(t.r.x,t.r.y,t.r.z,t.v.x,t.v.y,t.v.z,e)}function WA(t,e){const n=yn(e);switch(t){case we.Sun:return new pr(0,0,0,0,0,0,n);case we.SSB:const i=new ef(n.tt);return new pr(-i.Sun.r.x,-i.Sun.r.y,-i.Sun.r.z,-i.Sun.v.x,-i.Sun.v.y,-i.Sun.v.z,n);case we.Mercury:case we.Venus:case we.Earth:case we.Mars:case we.Jupiter:case we.Saturn:case we.Uranus:case we.Neptune:const r=Uh(ki[t],n.tt);return GA(r,n);case we.Pluto:return Y3(n);case we.Moon:case we.EMB:const s=Uh(ki.Earth,n.tt),o=t==we.Moon?X3(n):IA(n);return new pr(o.x+s.r.x,o.y+s.r.y,o.z+s.r.z,o.vx+s.v.x,o.vy+s.v.y,o.vz+s.v.z,n);default:if(em(t)){const a=Za(t,n);return new pr(a.x,a.y,a.z,0,0,0,n)}throw`HelioState: Unsupported body "${t}"`}}function XA(t,e,n,i){let r,s=0,o=0,a=0;switch(t){case we.Mercury:r=-.6,s=4.98,o=-4.88,a=3.02;break;case we.Venus:e<163.6?(r=-4.47,s=1.03,o=.57,a=.13):(r=.98,s=-1.02);break;case we.Mars:r=-1.52,s=1.6;break;case we.Jupiter:r=-9.4,s=.5;break;case we.Uranus:r=-7.19,s=.25;break;case we.Neptune:r=-6.87;break;case we.Pluto:r=-1,s=4;break;default:throw`VisualMagnitude: unsupported body ${t}`}const l=e/100;let c=r+l*(s+l*(o+l*a));return c+=5*Math.log10(n*i),c}function jA(t,e,n,i,r){const s=DA(i),o=It*28.06,a=It*(169.51+382e-7*r.tt),l=It*s.elat,c=It*s.elon,u=Math.asin(Math.sin(l)*Math.cos(o)-Math.cos(l)*Math.sin(o)*Math.sin(c-a)),d=Math.sin(Math.abs(u));let f=-9+.044*t;return f+=d*(-2.6+1.2*d),f+=5*Math.log10(e*n),{mag:f,ring_tilt:gs*u}}function $A(t,e,n){let i=t*It,r=i*i,s=r*r,o=-12.717+1.49*Math.abs(i)+.0431*s;const a=385000.6/Yr;let l=n/a;return o+=5*Math.log10(e*l),o}class qA{constructor(e,n,i,r,s,o,a,l){this.time=e,this.mag=n,this.phase_angle=i,this.helio_dist=r,this.geo_dist=s,this.gc=o,this.hc=a,this.ring_tilt=l,this.phase_fraction=(1+Math.cos(It*i))/2}}function YA(t,e){if(t===we.Earth)throw"The illumination of the Earth is not defined.";const n=yn(e),i=Ca(ki.Earth,n);let r,s,o,a;t===we.Sun?(o=new Mt(-i.x,-i.y,-i.z,n),s=new Mt(0,0,0,n),r=0):(t===we.Moon?(o=No(n),s=new Mt(i.x+o.x,i.y+o.y,i.z+o.z,n)):(s=Za(t,e),o=new Mt(s.x-i.x,s.y-i.y,s.z-i.z,n)),r=dA(o,s));let l=o.Length(),c=s.Length(),u;if(t===we.Sun)a=cA+5*Math.log10(l);else if(t===we.Moon)a=$A(r,c,l);else if(t===we.Saturn){const d=jA(r,c,l,o,n);a=d.mag,u=d.ring_tilt}else a=XA(t,r,c,l);return new qA(n,a,r,c,l,o,s,u)}var sv;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(sv||(sv={}));function K3(t){return new Pr([[t.rot[0][0],t.rot[1][0],t.rot[2][0]],[t.rot[0][1],t.rot[1][1],t.rot[2][1]],[t.rot[0][2],t.rot[1][2],t.rot[2][2]]])}function Z3(t,e){return new Pr([[e.rot[0][0]*t.rot[0][0]+e.rot[1][0]*t.rot[0][1]+e.rot[2][0]*t.rot[0][2],e.rot[0][1]*t.rot[0][0]+e.rot[1][1]*t.rot[0][1]+e.rot[2][1]*t.rot[0][2],e.rot[0][2]*t.rot[0][0]+e.rot[1][2]*t.rot[0][1]+e.rot[2][2]*t.rot[0][2]],[e.rot[0][0]*t.rot[1][0]+e.rot[1][0]*t.rot[1][1]+e.rot[2][0]*t.rot[1][2],e.rot[0][1]*t.rot[1][0]+e.rot[1][1]*t.rot[1][1]+e.rot[2][1]*t.rot[1][2],e.rot[0][2]*t.rot[1][0]+e.rot[1][2]*t.rot[1][1]+e.rot[2][2]*t.rot[1][2]],[e.rot[0][0]*t.rot[2][0]+e.rot[1][0]*t.rot[2][1]+e.rot[2][0]*t.rot[2][2],e.rot[0][1]*t.rot[2][0]+e.rot[1][1]*t.rot[2][1]+e.rot[2][1]*t.rot[2][2],e.rot[0][2]*t.rot[2][0]+e.rot[1][2]*t.rot[2][1]+e.rot[2][2]*t.rot[2][2]]])}function zc(t,e){e=yn(e);const n=t.lat*It,i=t.lon*It,r=t.dist*Math.cos(n);return new Mt(r*Math.cos(i),r*Math.sin(i),t.dist*Math.sin(n),e)}function KA(t){const e=t.x*t.x+t.y*t.y,n=Math.sqrt(e+t.z*t.z);let i,r;if(e===0){if(t.z===0)throw"Zero-length vector not allowed.";r=0,i=t.z<0?-90:90}else r=gs*Math.atan2(t.y,t.x),r<0&&(r+=360),i=gs*Math.atan2(t.z,Math.sqrt(e));return new Ra(i,r,n)}function ZA(t){return t=360-t,t>=360?t-=360:t<0&&(t+=360),t}function JA(t,e){const n=KA(t);return n.lon=ZA(n.lon),n.lat+=QA(e,n.lat),n}function QA(t,e){let n;return jn(e),e<-90||e>90?0:(n=0,n)}function ra(t,e){return new Mt(t.rot[0][0]*e.x+t.rot[1][0]*e.y+t.rot[2][0]*e.z,t.rot[0][1]*e.x+t.rot[1][1]*e.y+t.rot[2][1]*e.z,t.rot[0][2]*e.x+t.rot[1][2]*e.y+t.rot[2][2]*e.z,e.t)}function e8(t){t=yn(t);const e=V3(t,Ln.Into2000),n=H3(t,Ln.Into2000);return Z3(e,n)}function t8(t,e){t=yn(t);const n=Math.sin(e.latitude*It),i=Math.cos(e.latitude*It),r=Math.sin(e.longitude*It),s=Math.cos(e.longitude*It),o=[i*s,i*r,n],a=[-n*s,-n*r,i],l=[r,-s,0],c=-15*nm(t),u=g0(c,o),d=g0(c,a),f=g0(c,l);return new Pr([[d[0],f[0],u[0]],[d[1],f[1],u[1]],[d[2],f[2],u[2]]])}function n8(t,e){const n=t8(t,e);return K3(n)}function i8(t,e){t=yn(t);const n=n8(t,e),i=e8(t);return Z3(n,i)}function r8(t,e){const n=i8(t,e);return K3(n)}var ov;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(ov||(ov={}));var av;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(av||(av={}));function s8(t){const e=t.rot;return new Pr([[e[0][0],e[1][0],e[2][0]],[e[0][1],e[1][1],e[2][1]],[e[0][2],e[1][2],e[2][2]]])}class o8{constructor(e,n){Je(this,"time");Je(this,"observer");Je(this,"rEqjToHor");Je(this,"rHorToEqj");this.time=new ss(e),this.observer=new W3(n.latitude,n.longitude,n.height),this.rEqjToHor=r8(this.time,this.observer),this.rHorToEqj=s8(this.rEqjToHor)}julianDay(){return 2451545+this.time.tt}gmstHours(){return EA(this.time)}equatorialToHorizontal(e,n){const i=zc(new Ra(n,e,1),this.time),r=ra(this.rEqjToHor,i),s=JA(r,null);return{azDeg:(s.lon%360+360)%360,altDeg:s.lat,hx:r.x,hy:r.y,hz:r.z}}centerHorizontalVec(e,n){const i=zc(new Ra(n,e,1),this.time),r=ra(this.rEqjToHor,i),s=Math.hypot(r.x,r.y,r.z)||1;return[r.x/s,r.y/s,r.z/s]}graticuleHorizontal(){const e=[],n=[],r=(s,o)=>{const a=ra(this.rEqjToHor,zc(new Ra(o,s,1),this.time)),l=Math.hypot(a.x,a.y,a.z)||1;return[a.x/l,a.y/l,a.z/l]};for(const s of[-60,-30,0,30,60]){const o=[],a=[];for(let l=0;l<=96;l++)a.push(r(360*l/96,s));o.push(a),e.push(...o)}for(let s=0;s<360;s+=30){const o=[];for(let a=0;a<=96;a++)o.push(r(s,-90+180*a/96));n.push(o)}return{parallels:e,meridians:n}}nadirEquatorial(){const e=ra(this.rHorToEqj,new Mt(0,0,-1,this.time)),n=(Math.atan2(e.y,e.x)*180/Math.PI%360+360)%360,i=Math.asin(Math.max(-1,Math.min(1,e.z)))*180/Math.PI;return{ra:n,dec:i}}horizontalToEquatorial(e,n){const i=e*Math.PI/180,r=n*Math.PI/180,s=new Mt(Math.cos(r)*Math.cos(i),-Math.cos(r)*Math.sin(i),Math.sin(r),this.time),o=ra(this.rHorToEqj,s),a=Math.hypot(o.x,o.y,o.z)||1,l=(Math.atan2(o.y/a,o.x/a)*180/Math.PI%360+360)%360,c=Math.asin(Math.max(-1,Math.min(1,o.z/a)))*180/Math.PI;return{ra:l,dec:c}}horizonPointEquatorial(e){return this.horizontalToEquatorial(e,0)}solarSystemBodies(){return[{body:we.Sun,name:"太阳"},{body:we.Moon,name:"月球"},{body:we.Mercury,name:"水星"},{body:we.Venus,name:"金星"},{body:we.Mars,name:"火星"},{body:we.Jupiter,name:"木星"},{body:we.Saturn,name:"土星"}].map(({body:n,name:i})=>{const r=bA(n,this.time,this.observer,!1,!0),s=YA(n,this.time);return{body:n,name:i,ra:r.ra*15,dec:r.dec,mag:s.mag,phaseFraction:n===we.Moon?s.phase_fraction:void 0}})}}const _e=t=>t*15,a8=[{id:"polaris",name:"勾陈一（北极星）",designation:"α UMi",ra:_e(2+31/60+49.1/3600),dec:89.2641,mag:1.98,tags:["polar","bright"]},{id:"kochab",name:"帝（北极二）",designation:"β UMi",ra:_e(14+50/60+42.3/3600),dec:74.1555,mag:2.07,tags:["polar"]},{id:"pherkad",name:"太子（北极一）",designation:"γ UMi",ra:_e(15+20/60+43.7/3600),dec:71.8344,mag:3.04,tags:["polar"]},{id:"zeta-umi",name:"开阳增一",designation:"ζ UMi",ra:_e(16+0/60),dec:77.8,mag:4.32,tags:["polar"]},{id:"yildun",name:"勾陈二",designation:"δ UMi",ra:_e(17+32/60+13/3600),dec:86.5851,mag:4.36,tags:["polar"]},{id:"epsilon-umi",name:"勾陈四",designation:"ε UMi",ra:_e(16+45/60+58/3600),dec:82.0411,mag:4.21,tags:["polar"]},{id:"cassiopeia-alpha",name:"王良一",designation:"α Cas",ra:_e(0+40/60+30.4/3600),dec:56.5373,mag:2.24,tags:["polar","zero-cross","bright"]},{id:"cassiopeia-beta",name:"王良四",designation:"β Cas",ra:_e(0+9/60+10.7/3600),dec:59.1498,mag:2.27,tags:["polar","zero-cross","bright"]},{id:"cassiopeia-gamma",name:"策",designation:"γ Cas",ra:_e(0+56/60+42.5/3600),dec:60.7167,mag:2.47,tags:["polar","zero-cross"]},{id:"cassiopeia-delta",name:"阁道三",designation:"δ Cas",ra:_e(1+25/60+49/3600),dec:60.2353,mag:2.68,tags:["polar"]},{id:"cephei-alpha",name:"天钩五",designation:"α Cep",ra:_e(21+18/60+34.6/3600),dec:62.5856,mag:2.51,tags:["polar","bright"]},{id:"cephei-gamma",name:"少卫增八",designation:"γ Cep",ra:_e(23+39/60+20.9/3600),dec:77.6322,mag:3.21,tags:["polar","zero-cross"]},{id:"draco-thuban",name:"右枢（古北极星）",designation:"α Dra",ra:_e(14+4/60+23.4/3600),dec:64.3758,mag:3.65,tags:["polar"]},{id:"ursa-minor-eta",name:"勾陈增九",designation:"η UMi",ra:_e(16+17/60+30.5/3600),dec:75.7553,mag:4.95,tags:["polar"]},{id:"alpheratz",name:"壁宿二",designation:"α And",ra:_e(0+8/60+23.3/3600),dec:29.0904,mag:2.06,tags:["zero-cross","bright"]},{id:"algenib",name:"壁宿一",designation:"γ Peg",ra:_e(0+13/60+14.2/3600),dec:15.1836,mag:2.83,tags:["zero-cross","bright"]},{id:"markab",name:"室宿一",designation:"α Peg",ra:_e(23+4/60+46.5/3600),dec:15.2053,mag:2.49,tags:["zero-cross","bright"]},{id:"scheat",name:"室宿二",designation:"β Peg",ra:_e(23+3/60+46.5/3600),dec:28.083,mag:2.42,tags:["zero-cross","bright"]},{id:"alrescha",name:"外屏七",designation:"α Psc",ra:_e(2+2/60+2.8/3600),dec:2.7486,mag:3.82,tags:["zero-cross"]},{id:"eta-and",name:"奎宿四（仙女座η）",designation:"η And",ra:_e(0+57/60+12.4/3600),dec:23.4236,mag:4.4,tags:["zero-cross"]},{id:"delta-psc",name:"外屏一",designation:"δ Psc",ra:_e(0+48/60+40.9/3600),dec:7.5786,mag:4.43,tags:["zero-cross"]},{id:"epsilon-psc",name:"外屏二",designation:"ε Psc",ra:_e(1+2/60+56.6/3600),dec:7.8883,mag:4.27,tags:["zero-cross"]},{id:"mirach",name:"奎宿九",designation:"β And",ra:_e(1+9/60+43.9/3600),dec:35.6206,mag:2.05,tags:["zero-cross","bright"]},{id:"mu-and",name:"天大将军一",designation:"μ And",ra:_e(0+56/60+45.2/3600),dec:38.4995,mag:3.86,tags:["zero-cross"]},{id:"51-and",name:"车府增廿一",designation:"51 And",ra:_e(1+37/60+59.6/3600),dec:48.6333,mag:3.57,tags:[]},{id:"phoenicis-alpha",name:"火鸟六",designation:"α Phe",ra:_e(0+26/60+17/3600),dec:-42.306,mag:2.39,tags:["zero-cross","bright"]},{id:"arcturus",name:"大角星",designation:"α Boo",ra:_e(14+15/60+39.7/3600),dec:19.1825,mag:-.05,tags:["bright"]},{id:"vega",name:"织女一（织女星）",designation:"α Lyr",ra:_e(18+36/60+56.3/3600),dec:38.7837,mag:.03,tags:["bright"]},{id:"capella",name:"五车二",designation:"α Aur",ra:_e(5+16/60+41.4/3600),dec:45.998,mag:.08,tags:["bright"]},{id:"rigel",name:"参宿七",designation:"β Ori",ra:_e(5+14/60+32.3/3600),dec:-8.2017,mag:.13,tags:["bright"]},{id:"procyon",name:"南河三",designation:"α CMi",ra:_e(7+39/60+18.1/3600),dec:5.225,mag:.34,tags:["bright"]},{id:"betelgeuse",name:"参宿四",designation:"α Ori",ra:_e(5+55/60+10.3/3600),dec:7.4071,mag:.45,tags:["bright"]},{id:"altair",name:"河鼓二（牛郎星）",designation:"α Aql",ra:_e(19+50/60+47/3600),dec:8.8683,mag:.77,tags:["bright"]},{id:"aldebaran",name:"毕宿五",designation:"α Tau",ra:_e(4+35/60+55.2/3600),dec:16.5093,mag:.85,tags:["bright"]},{id:"antares",name:"心宿二（火星之敌）",designation:"α Sco",ra:_e(16+29/60+24.5/3600),dec:-26.432,mag:1.06,tags:["bright"]},{id:"spica",name:"角宿一",designation:"α Vir",ra:_e(13+25/60+11.6/3600),dec:-11.1614,mag:.98,tags:["bright"]},{id:"pollux",name:"北河三",designation:"β Gem",ra:_e(7+45/60+18.9/3600),dec:28.0262,mag:1.14,tags:["bright"]},{id:"deneb",name:"天津四",designation:"α Cyg",ra:_e(20+41/60+25.9/3600),dec:45.2803,mag:1.25,tags:["bright"]},{id:"regulus",name:"轩辕十四",designation:"α Leo",ra:_e(10+8/60+22.3/3600),dec:11.9672,mag:1.35,tags:["bright"]},{id:"castor",name:"北河二",designation:"α Gem",ra:_e(7+34/60+35.9/3600),dec:31.8884,mag:1.58,tags:["bright"]},{id:"bellatrix",name:"参宿五",designation:"γ Ori",ra:_e(5+25/60+7.9/3600),dec:6.3497,mag:1.64,tags:["bright"]},{id:"eltanin",name:"天棓四",designation:"γ Dra",ra:_e(17+56/60+36.4/3600),dec:51.4889,mag:2.24,tags:["bright"]},{id:"dubhe",name:"天枢",designation:"α UMa",ra:_e(11+3/60+43.7/3600),dec:61.751,mag:1.79,tags:["bright","polar"]},{id:"merak",name:"天璇",designation:"β UMa",ra:_e(11+1/60+50.5/3600),dec:56.3824,mag:2.37,tags:["bright","polar"]},{id:"alioth",name:"玉衡",designation:"ε UMa",ra:_e(12+54/60+1.7/3600),dec:55.9598,mag:1.77,tags:["bright","polar"]},{id:"mizar",name:"开阳",designation:"ζ UMa",ra:_e(13+23/60+55.5/3600),dec:54.9254,mag:2.27,tags:["bright","polar"]},{id:"fomalhaut",name:"北落师门",designation:"α PsA",ra:_e(22+57/60+39/3600),dec:-29.6222,mag:1.16,tags:["bright","zero-cross"]},{id:"achernar",name:"水委一",designation:"α Eri",ra:_e(1+37/60+42.8/3600),dec:-57.2367,mag:.46,tags:["bright"]},{id:"canopus",name:"老人星",designation:"α Car",ra:_e(6+23/60+57.1/3600),dec:-52.6957,mag:-.74,tags:["bright"]},{id:"sirius",name:"天狼星",designation:"α CMa",ra:_e(6+45/60+9/3600),dec:-16.7161,mag:-1.46,tags:["bright"]},{id:"hadar",name:"马腹一",designation:"β Cen",ra:_e(14+3/60+49.4/3600),dec:-60.373,mag:.61,tags:["bright"]},{id:"rigil-kent",name:"南门二",designation:"α Cen",ra:_e(14+39/60+36.5/3600),dec:-60.8334,mag:-.27,tags:["bright"]},{id:"acrux",name:"十字架二",designation:"α Cru",ra:_e(12+26/60+35.9/3600),dec:-63.0991,mag:.77,tags:["bright"]},{id:"mimosa",name:"十字架三",designation:"β Cru",ra:_e(12+47/60+43.3/3600),dec:-59.6887,mag:1.25,tags:["bright"]},{id:"avior",name:"海石一",designation:"ε Car",ra:_e(8+22/60+30.8/3600),dec:-59.5095,mag:1.86,tags:["bright"]},{id:"suhail",name:"天记",designation:"γ Vel",ra:_e(8+9/60+32/3600),dec:-47.3428,mag:1.78,tags:["bright"]},{id:"peacock",name:"孔雀十一",designation:"α Pav",ra:_e(20+25/60+38.9/3600),dec:-56.7351,mag:1.94,tags:["bright"]},{id:"ankaa",name:"火鸟九",designation:"β Phe",ra:_e(23+26/60),dec:-46.95,mag:3.31,tags:["zero-cross"]},{id:"hamal",name:"娄宿三",designation:"α Ari",ra:_e(2+7/60+10.4/3600),dec:23.4624,mag:2,tags:["bright"]},{id:"denebola",name:"五帝座一",designation:"β Leo",ra:_e(11+49/60+3.6/3600),dec:14.572,mag:2.14,tags:["bright"]},{id:"alphecca",name:"贯索四",designation:"α CrB",ra:_e(15+34/60+41.3/3600),dec:26.7147,mag:2.23,tags:["bright"]},{id:"rasalhague",name:"侯（蛇夫座α）",designation:"α Oph",ra:_e(17+34/60+56.1/3600),dec:12.5601,mag:2.07,tags:["bright"]},{id:"enif",name:"危宿三",designation:"ε Peg",ra:_e(21+44/60+11.2/3600),dec:9.875,mag:2.39,tags:["bright"]},{id:"algol",name:"大陵五（魔星）",designation:"β Per",ra:_e(3+8/60+10.1/3600),dec:40.9556,mag:2.12,tags:["bright"]},{id:"mirfak",name:"天船三",designation:"α Per",ra:_e(3+24/60+19.4/3600),dec:49.8612,mag:1.79,tags:["bright","polar"]}];function l8(t){return t==="太阳"?"sun":t==="月球"?"moon":"planet"}function c8(t,e,n,i,r,s=null){const o=t.solarSystemBodies(),a=s&&s.length>0?Yp(s):null,l=[];for(const m of a8){const h=t.equatorialToHorizontal(m.ra,m.dec),_=E1(e.centerRa,e.centerDec,m.ra,m.dec),v=_<=e.radiusDeg,S=h.altDeg>=0;l.push({id:m.id,name:m.name,designation:m.designation,kind:"star",ra:m.ra,dec:m.dec,mag:m.mag,az:h.azDeg,alt:h.altDeg,hx:h.hx,hy:h.hy,hz:h.hz,sepFromCenter:_,inFov:v,passesMag:m.mag<=n,aboveHorizon:S,occlusionAlt:null,occluded:!1,tags:m.tags})}for(const m of o){const h=t.equatorialToHorizontal(m.ra,m.dec),_=E1(e.centerRa,e.centerDec,m.ra,m.dec),v=_<=e.radiusDeg,S=h.altDeg>=0;l.push({id:`body-${m.body}`,name:m.name,designation:m.name,kind:l8(m.name),ra:m.ra,dec:m.dec,mag:m.mag,az:h.azDeg,alt:h.altDeg,hx:h.hx,hy:h.hy,hz:h.hz,sepFromCenter:_,inFov:v,passesMag:!0,aboveHorizon:S,occlusionAlt:null,occluded:!1,tags:[],phaseFraction:m.phaseFraction})}const c=[],u=[],d={0:"北点 N",90:"东点 E",180:"南点 S",270:"西点 W"},f=240;for(let m=0;m<f;m++){const h=360*m/f,_=t.horizonPointEquatorial(h);c.push([_.ra,_.dec]),h in d&&u.push({label:d[h],ra:_.ra,dec:_.dec})}c.push(c[0]);const p=t.nadirEquatorial(),g=t.equatorialToHorizontal(e.centerRa,e.centerDec);for(const m of l)m.inFov=m.sepFromCenter<=e.radiusDeg;let x=null;if(a){for(const _ of l){const v=vu(a,_.az);_.occlusionAlt=v,_.occluded=_.alt>=0&&_.alt<v}const m=[],h=240;for(let _=0;_<h;_++){const v=360*_/h,S=t.horizontalToEquatorial(v,vu(a,v));m.push([S.ra,S.dec])}m.push(m[0]),x={points:a,ring:m}}return{targets:l,horizon:{ring:c,nadirRa:p.ra,nadirDec:p.dec,cardinalPoints:u},occlusion:x,centerAlt:g.altDeg,centerAz:g.azDeg,gmstHours:t.gmstHours(),julianDay:t.julianDay(),fovBoundary:r}}function _0(t,e){return t.inFov&&t.passesMag&&(!e||t.aboveHorizon)}function u8(t){return t.replace(".000Z","Z").replace("T"," ")}function lv(t,e,n,i,r){const s=b3(t,r.fov.centerRa,r.fov.centerDec,r.fov.radiusDeg),o=Cn/2,a=30,l=70,c=e.occlusion?110:92,u=Cn+a*2,d=Cn+a*2+l+c,f=a,p=l,g=s.path(L3()),x=r.fov.radiusDeg<=20?5:r.fov.radiusDeg<=45?10:20,m=[];for(let y=x;y<r.fov.radiusDeg;y+=x)m.push(s.path(Ru(r.fov.centerRa,r.fov.centerDec,y)));const h=s.path(Ru(r.fov.centerRa,r.fov.centerDec,r.fov.radiusDeg)),_=s.path(I3(e.horizon.nadirRa,e.horizon.nadirDec)),v=s.path(D3(e.horizon.nadirRa,e.horizon.nadirDec)),S=e.occlusion?s.path(N3(e.occlusion.ring)):"",C=e.occlusion?s.path(U3(e.occlusion.ring,e.horizon.nadirRa,e.horizon.nadirDec)):"",A=y=>y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),T=n.map(y=>{const M=s.projection([y.ra,y.dec]);if(!M)return"";const H=Math.max(1.6,Math.min(7,6.2-y.mag*.9)),N=y.occluded?.5:1;return y.kind==="star"?`<circle cx="${M[0].toFixed(1)}" cy="${M[1].toFixed(1)}" r="${H.toFixed(1)}" fill="#fff" opacity="${y.aboveHorizon?N:.35}"/>`:y.kind==="planet"?`<rect x="${(M[0]-H).toFixed(1)}" y="${(M[1]-H).toFixed(1)}" width="${(H*2).toFixed(1)}" height="${(H*2).toFixed(1)}" fill="#9ecbff" opacity="${N}"/>`:`<polygon points="${M[0].toFixed(1)},${(M[1]-H).toFixed(1)} ${(M[0]+H).toFixed(1)},${M[1].toFixed(1)} ${M[0].toFixed(1)},${(M[1]+H).toFixed(1)} ${(M[0]-H).toFixed(1)},${M[1].toFixed(1)}" fill="${y.kind==="sun"?"#ffd27d":"#dfe6f2"}" opacity="${N}"/>`}).join(""),P=n.filter(y=>y.kind!=="star"||y.mag<=1.6).map(y=>{const M=s.projection([y.ra,y.dec]);return M?`<text x="${(M[0]+7).toFixed(1)}" y="${(M[1]+3).toFixed(1)}" font-size="10.5" fill="#cfe0ff">${A(y.name)}</text>`:""}).join(""),W=i.map(y=>{const M=s.projection([y.ra,y.dec]);return M?`<circle cx="${M[0].toFixed(1)}" cy="${M[1].toFixed(1)}" r="5" fill="none" stroke="${y.color}" stroke-width="1.6"/><text x="${(M[0]+8).toFixed(1)}" y="${(M[1]+4).toFixed(1)}" font-size="11" fill="${y.color}">${A(y.text)}</text>`:""}).join("");return`<svg xmlns="http://www.w3.org/2000/svg" width="${u}" height="${d}" viewBox="0 0 ${u} ${d}" font-family="sans-serif">
<rect width="${u}" height="${d}" fill="#070a14"/>
<text x="${f}" y="28" font-size="20" font-weight="bold" fill="#eaf1ff">本地星图 · ${A(r.projectionLabel)}</text>
<text x="${f}" y="52" font-size="12" fill="#9fb4d8">
坐标系：J2000.0 平赤道/平春分点（赤经、赤纬）；视场中心 ${$p(r.fov.centerRa)} / ${qp(r.fov.centerDec)}，
球面角半径 ${r.fov.radiusDeg.toFixed(1)}°；同心虚线环为等角距参考环（${t==="stereographic"?"立体投影下变形放大":"等距方位投影下等距"}）。
</text>
<g transform="translate(${f},${p})">
<circle cx="${o}" cy="${o}" r="${Ka}" fill="#0b1020" stroke="#3b4a6b" stroke-width="1.5"/>
<clipPath id="expdisc"><circle cx="${o}" cy="${o}" r="${Ka}"/></clipPath>
<g clip-path="url(#expdisc)">
<path d="${g}" fill="none" stroke="#27406a" stroke-width="0.6"/>
${m.map(y=>`<path d="${y}" fill="none" stroke="#3d6ea5" stroke-width="0.7" stroke-dasharray="2 3"/>`).join(`
`)}
${e.occlusion?`<path d="${C}" fill="#ffb74d" opacity="0.16"/>`:""}
<path d="${v}" fill="#5a1f24" opacity="0.35"/>
<path d="${_}" fill="none" stroke="#ff5d5d" stroke-width="1.6"/>
${e.occlusion?`<path d="${S}" fill="none" stroke="#ffb74d" stroke-width="1.6"/>`:""}
<path d="${h}" fill="none" stroke="#57e389" stroke-width="1.4"/>
${T}
${P}
${W}
</g>
</g>
<g transform="translate(${f},${p+Cn+26})" font-size="11.5" fill="#9fb4d8">
<text x="0" y="0">时间基准：${u8(r.timeUtcIso)}（UTC）；儒略日 JD = ${r.julianDay.toFixed(5)}（力学时 TT）；格林威治视恒星时 ${r.gmstHours.toFixed(4)} h</text>
<text x="0" y="18">观测位置：${A(r.site.name)}（纬度 ${r.site.latitude.toFixed(4)}°，经度 ${r.site.longitude.toFixed(4)}°，海拔 ${r.site.height} m）</text>
<text x="0" y="36">筛选：星等 ≤ ${r.magLimit}（仅恒星）；地平线裁切：${r.horizonClip?"开启（仅地平以上）":"关闭（地平以下目标半透明显示）"}。地平坐标由 astronomy-engine Rotation_EQJ_HOR 转换，无大气折射改正。</text>
<text x="0" y="54">角距均按球面（haversine）计算；图上像素距离不作为实际角距。太阳系天体坐标为含光行差的 J2000 视位置。星表为 J2000 近似值，仅供科普制图。</text>
${e.occlusion?`<text x="0" y="72">站点遮挡轮廓：人工输入控制点 ${e.occlusion.points.length} 个（非地形实测），按方位角环形线性插值（0°/360° 连续）。红色线＝几何地平线，琥珀色线＝站点遮挡线；被山体遮挡的目标以降透明度绘出。</text>`:""}
</g>
</svg>`}function cv(t,e,n){const i=new Blob([e],{type:n}),r=URL.createObjectURL(i),s=document.createElement("a");s.href=r,s.download=t,s.click(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}async function f8(t,e,n=2){const i=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),r=URL.createObjectURL(i),s=new Image;await new Promise((d,f)=>{s.onload=()=>d(),s.onerror=()=>f(new Error("SVG 栅格化失败")),s.src=r});const o=t.match(/width="(\d+)"\s+height="(\d+)"/),a=o?Number(o[1]):Cn,l=o?Number(o[2]):Cn,c=document.createElement("canvas");c.width=a*n,c.height=l*n;const u=c.getContext("2d");u.fillStyle="#070a14",u.fillRect(0,0,c.width,c.height),u.drawImage(s,0,0,c.width,c.height),URL.revokeObjectURL(r),c.toBlob(d=>{if(!d)return;const f=URL.createObjectURL(d),p=document.createElement("a");p.href=f,p.download=e,p.click(),setTimeout(()=>URL.revokeObjectURL(f),1e3)},"image/png")}function d8(t,e,n,i){return JSON.stringify({tool:"local-starchart",coordinateSystem:"J2000.0 mean equator & equinox (ICRS-aligned catalog approximations)",timeStandard:{utc:i.timeUtcIso,julianDayTT:i.julianDay,gmstHours:i.gmstHours},observer:i.site,fieldOfView:{centerRA_J2000_deg:i.fov.centerRa,centerDec_J2000_deg:i.fov.centerDec,angularRadius_deg:i.fov.radiusDeg},filters:{magnitudeLimitStars:i.magLimit,horizonClip:i.horizonClip},siteHorizonProfile:t.occlusion?{source:"manual-entry",note:"人工输入的方位-遮挡高度控制点，非地形实测；按方位角环形线性插值（0°/360° 连续）",interpolation:"circular-linear-by-azimuth",controlPoints:t.occlusion.points}:null,targets:e.map(r=>({id:r.id,name:r.name,designation:r.designation,kind:r.kind,ra_J2000_deg:Number(r.ra.toFixed(5)),dec_J2000_deg:Number(r.dec.toFixed(5)),magnitude:r.mag,azimuth_deg:Number(r.az.toFixed(3)),altitude_deg:Number(r.alt.toFixed(3)),aboveGeometricHorizon:r.aboveHorizon,terrainOcclusionAltitude_deg:r.occlusionAlt!==null?Number(r.occlusionAlt.toFixed(3)):null,occludedByTerrain:r.occluded,angularSeparationFromCenter_deg:Number(r.sepFromCenter.toFixed(3))})),annotations:n},null,2)}const h8="local-starchart",p8=2,Ja="fovs",Qa="annotations",el="horizonProfiles";let hc=null;function m8(){return hc||(hc=new Promise((t,e)=>{const n=indexedDB.open(h8,p8);n.onupgradeneeded=()=>{const i=n.result;i.objectStoreNames.contains(Ja)||i.createObjectStore(Ja,{keyPath:"uuid"}),i.objectStoreNames.contains(Qa)||i.createObjectStore(Qa,{keyPath:"uuid"}),i.objectStoreNames.contains(el)||i.createObjectStore(el,{keyPath:"siteId"})},n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)}),hc)}function Zi(t,e,n){return m8().then(i=>new Promise((r,s)=>{const o=i.transaction(t,e),a=n(o.objectStore(t));a.onsuccess=()=>r(a.result),a.onerror=()=>s(a.error)}))}async function g8(t){await Zi(Ja,"readwrite",e=>e.put(t))}async function x0(){return(await Zi(Ja,"readonly",e=>e.getAll())).sort((e,n)=>n.createdAt-e.createdAt)}async function v8(t){await Zi(Ja,"readwrite",e=>e.delete(t))}async function _8(t){await Zi(Qa,"readwrite",e=>e.put(t))}async function y0(){return(await Zi(Qa,"readonly",e=>e.getAll())).sort((e,n)=>e.createdAt-n.createdAt)}async function x8(t){await Zi(Qa,"readwrite",e=>e.delete(t))}async function y8(t){await Zi(el,"readwrite",e=>e.put(t))}async function S8(){return Zi(el,"readonly",t=>t.getAll())}async function M8(t){await Zi(el,"readwrite",e=>e.delete(t))}const uv=Cu[0],E8="2026-09-30T13:00:00Z",w8={centerRa:213.9,centerDec:19.2,radiusDeg:30};function fv(){return typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():String(Date.now())+Math.random().toString(16).slice(2)}function T8(){const[t,e]=Ge.useState(uv),[n,i]=Ge.useState(E8),[r,s]=Ge.useState(w8),[o,a]=Ge.useState(4.5),[l,c]=Ge.useState(!1),[u,d]=Ge.useState(!0),[f,p]=Ge.useState(!0),[g,x]=Ge.useState(null),[m,h]=Ge.useState(null),[_,v]=Ge.useState(null),[S,C]=Ge.useState([]),[A,T]=Ge.useState([]),[P,W]=Ge.useState({});Ge.useEffect(()=>{x0().then(C).catch(()=>{}),y0().then(T).catch(()=>{}),S8().then(se=>{const U={};for(const Te of se)U[Te.siteId]=Te.points;W(U)}).catch(()=>{})},[]);const y=Ge.useMemo(()=>{const se=new Date(n);return Number.isNaN(se.getTime())?null:new o8(se,t)},[t.latitude,t.longitude,t.height,n]),M=Ge.useMemo(()=>r5(r.centerRa,r.centerDec,r.radiusDeg,128),[r]),H=Ge.useMemo(()=>{const se=P[t.id];if(!se)return null;const U=Yp(se);return U.length>0?U:null},[P,t.id]),N=Ge.useMemo(()=>y?c8(y,r,o,l,M,H):null,[y,r,o,l,M,H]),j=Ge.useMemo(()=>y==null?void 0:y.graticuleHorizontal(),[y]),D=Ge.useMemo(()=>g&&N?N.targets.find(se=>se.id===g)??null:null,[g,N]),B=se=>{x(se),se&&v({id:se,nonce:Date.now()})},Y=se=>{const U=Fc.find(ke=>ke.id===se);if(!U)return;const Te=Cu.find(ke=>ke.id===U.siteId)??uv;e({...Te}),i(U.timeUtcIso),s({centerRa:U.centerRaDeg,centerDec:U.centerDecDeg,radiusDeg:U.fovRadiusDeg}),a(U.magLimit),c(U.horizonClip),U.suggestSelectId&&(x(U.suggestSelectId),v({id:U.suggestSelectId,nonce:Date.now()}))},L=se=>{const U={uuid:fv(),name:se,createdAt:Date.now(),fov:{...r},siteId:t.id,timeUtcIso:n};g8(U).then(()=>x0().then(C))},Z=se=>v8(se).then(()=>x0().then(C)),$=se=>s({...se.fov}),ne=(se,U)=>{if(!D){alert("请先在任一视图中点击一个目标，批注将锚定在该目标的 J2000 坐标上。");return}const Te={uuid:fv(),createdAt:Date.now(),ra:D.ra,dec:D.dec,text:se,color:U};_8(Te).then(()=>y0().then(T))},xe=se=>x8(se).then(()=>y0().then(T)),De=se=>{const U=t.id;W(Te=>{const ke={...Te};return se.length>0?ke[U]=se:delete ke[U],ke}),se.length>0?y8({siteId:U,points:se,updatedAt:Date.now()}).catch(()=>{}):M8(U).catch(()=>{})},q=se=>N?{projectionLabel:se,site:t,timeUtcIso:n,fov:r,julianDay:N.julianDay,gmstHours:N.gmstHours,horizonClip:l,magLimit:o}:null,ee=se=>{if(!N)return;const Te=q(se==="stereographic"?"立体投影 Stereographic":"等距方位投影 Azimuthal Equidistant"),ke=N.targets.filter(b=>_0(b,l)),de=lv(se,N,ke,A,Te);cv(`星图_${se}_${n.slice(0,10)}.svg`,de,"image/svg+xml;charset=utf-8")},le=async se=>{if(!N)return;const Te=q("立体投影 Stereographic"),ke=N.targets.filter(b=>_0(b,l)),de=lv(se,N,ke,A,Te);await f8(de,`星图_${se}_${n.slice(0,10)}.png`)},ue=()=>{if(!N)return;const se=q("数据导出 JSON"),U=N.targets.filter(Te=>_0(Te,l));cv(`星表视场_${n.slice(0,10)}.json`,d8(N,U,A,se),"application/json")};return I.jsxs("div",{className:"app",children:[I.jsxs("header",{className:"app-header",children:[I.jsxs("div",{children:[I.jsx("h1",{children:"本地星图工具"}),I.jsx("p",{children:"球面（Three.js） · 立体投影 · 等距方位投影（D3 geo）三视对照 — 同一片天区、同一组目标"})]}),I.jsxs("div",{className:"export-bar",children:[I.jsx("button",{className:"btn",onClick:()=>ee("stereographic"),children:"导出 立体 SVG"}),I.jsx("button",{className:"btn",onClick:()=>ee("equidistant"),children:"导出 等距 SVG"}),I.jsx("button",{className:"btn",onClick:()=>le("stereographic"),children:"导出 PNG"}),I.jsx("button",{className:"btn",onClick:ue,children:"导出 JSON"})]})]}),I.jsxs("div",{className:"main-grid",children:[I.jsx("aside",{className:"sidebar",children:I.jsx(tA,{site:t,timeUtcIso:n,fov:r,magLimit:o,horizonClip:l,showHorizon:u,showGraticule:f,savedFovs:S,annotations:A,horizonProfile:P[t.id]??[],onChangeSite:e,onChangeTime:i,onChangeFov:s,onChangeMag:a,onToggleHorizonClip:c,onToggleShowHorizon:d,onToggleGraticule:p,onApplyScenario:Y,onSaveFov:L,onLoadFov:$,onDeleteFov:Z,onAddAnnotation:ne,onDeleteAnnotation:xe,onChangeProfile:De})}),I.jsx("main",{className:"content",children:N?I.jsxs(I.Fragment,{children:[I.jsxs("section",{className:"view-row globe-section",children:[I.jsx("h2",{className:"view-label",children:"球面视图 · 本地地平天球（Three.js）"}),I.jsx(o5,{sky:N,fov:r,horizonClip:l,showGraticule:f,annotations:A,selectedId:g,hoverId:m,onSelect:B,onHover:h,focusToken:_,graticuleHorizontal:j})]}),I.jsxs("section",{className:"view-row proj-section",children:[I.jsx(J1,{kind:"stereographic",sky:N,fov:r,horizonClip:l,showHorizon:u,annotations:A,selectedId:g,hoverId:m,onSelect:B,onHover:h}),I.jsx(J1,{kind:"equidistant",sky:N,fov:r,horizonClip:l,showHorizon:u,annotations:A,selectedId:g,hoverId:m,onSelect:B,onHover:h})]}),I.jsx(rA,{target:D,centerAlt:N.centerAlt,centerAz:N.centerAz,gmstHours:N.gmstHours,julianDay:N.julianDay})]}):I.jsx("div",{className:"bad-time",children:"时间格式无效，请检查 UTC 时间输入。"})})]}),I.jsx("footer",{className:"app-footer",children:"纯前端本地应用，无后端、无网络请求 · 星表 J2000.0 近似坐标 · 地平坐标转换 astronomy-engine（Rotation_EQJ_HOR，无大气折射）· 角距一律按球面 haversine 计算，图上像素距离不代表实际角距"})]})}S0.createRoot(document.getElementById("root")).render(I.jsx(yx.StrictMode,{children:I.jsx(T8,{})}));
