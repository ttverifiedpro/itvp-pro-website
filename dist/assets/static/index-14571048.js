var b=globalThis,Z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof b<"u"?b:typeof self<"u"?self:{};function B(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $={exports:{}},o={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var E=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;function H(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function G(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var u=Object.getOwnPropertyNames(r).map(function(i){return r[i]});if(u.join("")!=="0123456789")return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(i){n[i]=i}),Object.keys(Object.assign({},n)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var J=G()?Object.assign:function(e,r){for(var t,u=H(e),n,i=1;i<arguments.length;i++){t=Object(arguments[i]);for(var c in t)V.call(t,c)&&(u[c]=t[c]);if(E){n=E(t);for(var f=0;f<n.length;f++)z.call(t,n[f])&&(u[n[f]]=t[n[f]])}}return u};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=J,y=60103,R=60106;o.Fragment=60107;o.StrictMode=60108;o.Profiler=60114;var P=60109,A=60110,x=60112;o.Suspense=60113;var I=60115,q=60116;if(typeof Symbol=="function"&&Symbol.for){var a=Symbol.for;y=a("react.element"),R=a("react.portal"),o.Fragment=a("react.fragment"),o.StrictMode=a("react.strict_mode"),o.Profiler=a("react.profiler"),P=a("react.provider"),A=a("react.context"),x=a("react.forward_ref"),o.Suspense=a("react.suspense"),I=a("react.memo"),q=a("react.lazy")}var k=typeof Symbol=="function"&&Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}function v(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M={};function d(e,r,t){this.props=e,this.context=r,this.refs=M,this.updater=t||F}d.prototype.isReactComponent={};d.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(v(85));this.updater.enqueueSetState(this,e,r,"setState")};d.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function T(){}T.prototype=d.prototype;function j(e,r,t){this.props=e,this.context=r,this.refs=M,this.updater=t||F}var O=j.prototype=new T;O.constructor=j;g(O,d.prototype);O.isPureReactComponent=!0;var S={current:null},U=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function D(e,r,t){var u,n={},i=null,c=null;if(r!=null)for(u in r.ref!==void 0&&(c=r.ref),r.key!==void 0&&(i=""+r.key),r)U.call(r,u)&&!N.hasOwnProperty(u)&&(n[u]=r[u]);var f=arguments.length-2;if(f===1)n.children=t;else if(1<f){for(var s=Array(f),l=0;l<f;l++)s[l]=arguments[l+2];n.children=s}if(e&&e.defaultProps)for(u in f=e.defaultProps,f)n[u]===void 0&&(n[u]=f[u]);return{$$typeof:y,type:e,key:i,ref:c,props:n,_owner:S.current}}function Q(e,r){return{$$typeof:y,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function w(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function W(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return r[t]})}var C=/\/+/g;function _(e,r){return typeof e=="object"&&e!==null&&e.key!=null?W(""+e.key):r.toString(36)}function m(e,r,t,u,n){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case y:case R:c=!0}}if(c)return c=e,n=n(c),e=u===""?"."+_(c,0):u,Array.isArray(n)?(t="",e!=null&&(t=e.replace(C,"$&/")+"/"),m(n,r,t,"",function(l){return l})):n!=null&&(w(n)&&(n=Q(n,t+(!n.key||c&&c.key===n.key?"":(""+n.key).replace(C,"$&/")+"/")+e)),r.push(n)),1;if(c=0,u=u===""?".":u+":",Array.isArray(e))for(var f=0;f<e.length;f++){i=e[f];var s=u+_(i,f);c+=m(i,r,t,s,n)}else if(s=K(e),typeof s=="function")for(e=s.call(e),f=0;!(i=e.next()).done;)i=i.value,s=u+_(i,f++),c+=m(i,r,t,s,n);else if(i==="object")throw r=""+e,Error(v(31,r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r));return c}function h(e,r,t){if(e==null)return e;var u=[],n=0;return m(e,u,"","",function(i){return r.call(t,i,n++)}),u}function Y(e){if(e._status===-1){var r=e._result;r=r(),e._status=0,e._result=r,r.then(function(t){e._status===0&&(t=t.default,e._status=1,e._result=t)},function(t){e._status===0&&(e._status=2,e._result=t)})}if(e._status===1)return e._result;throw e._result}var L={current:null};function p(){var e=L.current;if(e===null)throw Error(v(321));return e}var X={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:g};o.Children={map:h,forEach:function(e,r,t){h(e,function(){r.apply(this,arguments)},t)},count:function(e){var r=0;return h(e,function(){r++}),r},toArray:function(e){return h(e,function(r){return r})||[]},only:function(e){if(!w(e))throw Error(v(143));return e}};o.Component=d;o.PureComponent=j;o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X;o.cloneElement=function(e,r,t){if(e==null)throw Error(v(267,e));var u=g({},e.props),n=e.key,i=e.ref,c=e._owner;if(r!=null){if(r.ref!==void 0&&(i=r.ref,c=S.current),r.key!==void 0&&(n=""+r.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(s in r)U.call(r,s)&&!N.hasOwnProperty(s)&&(u[s]=r[s]===void 0&&f!==void 0?f[s]:r[s])}var s=arguments.length-2;if(s===1)u.children=t;else if(1<s){f=Array(s);for(var l=0;l<s;l++)f[l]=arguments[l+2];u.children=f}return{$$typeof:y,type:e.type,key:n,ref:i,props:u,_owner:c}};o.createContext=function(e,r){return r===void 0&&(r=null),e={$$typeof:A,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:P,_context:e},e.Consumer=e};o.createElement=D;o.createFactory=function(e){var r=D.bind(null,e);return r.type=e,r};o.createRef=function(){return{current:null}};o.forwardRef=function(e){return{$$typeof:x,render:e}};o.isValidElement=w;o.lazy=function(e){return{$$typeof:q,_payload:{_status:-1,_result:e},_init:Y}};o.memo=function(e,r){return{$$typeof:I,type:e,compare:r===void 0?null:r}};o.useCallback=function(e,r){return p().useCallback(e,r)};o.useContext=function(e,r){return p().useContext(e,r)};o.useDebugValue=function(){};o.useEffect=function(e,r){return p().useEffect(e,r)};o.useImperativeHandle=function(e,r,t){return p().useImperativeHandle(e,r,t)};o.useLayoutEffect=function(e,r){return p().useLayoutEffect(e,r)};o.useMemo=function(e,r){return p().useMemo(e,r)};o.useReducer=function(e,r,t){return p().useReducer(e,r,t)};o.useRef=function(e){return p().useRef(e)};o.useState=function(e){return p().useState(e)};o.version="17.0.2";(function(e){e.exports=o})($);const ee=B($.exports);export{ee as R,Z as c,J as o,$ as r};
